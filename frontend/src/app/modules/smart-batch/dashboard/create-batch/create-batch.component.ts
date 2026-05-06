import { CommonModule } from '@angular/common';
import { Component, computed, inject, OnInit, signal, ViewEncapsulation } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import {
    FormBuilder,
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { distinctUntilChanged, map, startWith } from 'rxjs';
import {
    detectBestCsvDelimiter,
    getDelimiterMismatchHintKind,
    parseCSVLine,
    stripBom,
} from 'app/core/utils/csv-parse.util';
import { sanitizeMatrix, sanitizePapaObjectRows } from 'app/core/utils/spreadsheet-sanitize.util';
import * as XLSX from 'xlsx';
import { getBatchInputCsvHeaders } from '../../batch-input-csv.util';
import {
    isClientVisibleBatchDependencyField,
    stripClientHiddenRowFields,
} from '../../smart-batch-dependency.constants';
import { BatchConfiguration, BatchStep, SmartBatch, SmartBatchService } from '../../smart-batch.service';
import { TutorialModalComponent } from './tutorial-modal/tutorial-modal.component';

/** Represents a required field extracted from step dependencies */
interface RequiredField {
    field: string;
    required: boolean;
    stepName: string;
    stepSequence: number;
    enumValues?: string[];
    type?: string;
    description?: string;
    dependencyGroup?: string;
    requiredWhen?: { field: string; in?: string[] };
    /** When set (e.g. dd/MM/yyyy), non-empty cell values must match for batch validation. */
    dateFormat?: string;
}

/** AppFeature dependency entry (subset used by batch validation) */
interface FeatureDependency {
    field: string;
    type?: string;
    required?: boolean;
    enum?: string[] | null;
    description?: string;
    dependencyGroup?: string;
    requiredWhen?: { field: string; in?: string[] };
    dateFormat?: string;
}

/** Represents a validation error for a specific cell */
interface CellError {
    rowIndex: number;
    column: string;
    type: 'missing' | 'invalid_enum' | 'invalid_type' | 'dependency_rule';
    message: string;
    expectedValues?: string[];
}

/** Summary of validation results */
interface ValidationResult {
    isValid: boolean;
    errors: CellError[];
    errorsByRow: Map<number, CellError[]>;
    errorsByColumn: Map<string, CellError[]>;
}

/** CSV parse notice resolved in the template with the transloco pipe (updates on language change). */
interface CsvParseWarningNotice {
    key: string;
    params?: Record<string, unknown>;
}

interface ParsedBatchFileSummary {
    name: string;
    size: number;
    rowCount: number;
}

interface ParsedBatchFileResult {
    fieldOrder: string[];
    rows: Record<string, unknown>[];
    warnings: CsvParseWarningNotice[];
}

/**
 * Per-endpoint summary used to render the "Expected fields" panel as one card per step,
 * so customers can see exactly which fields each endpoint needs (vs the old globally
 * deduped list where the "Used by" caption only mentioned one of N endpoints).
 */
interface EndpointFieldsView {
    sequence: number;
    name: string;
    code: string;
    enabled: boolean;
    /** When set, render the two-column XOR layout (e.g. DEA: fullName XOR document fields). */
    xor: {
        nameFields: RequiredField[];
        documentFields: RequiredField[];
        dobWhenValues: string | null;
    } | null;
    /** Populated when `xor` is null. */
    requiredFields: RequiredField[];
    conditionalFields: RequiredField[];
    optionalFields: RequiredField[];
}

@Component({
    selector: 'create-batch',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        MatButtonModule,
        MatDialogModule,
        MatIconModule,
        MatInputModule,
        MatFormFieldModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatTableModule,
        MatTooltipModule,
        TranslocoModule,
    ],
    templateUrl: './create-batch.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class CreateBatchComponent implements OnInit {
    private _smartBatchService = inject(SmartBatchService);
    private _router = inject(Router);
    private _route = inject(ActivatedRoute);
    private _formBuilder = inject(FormBuilder);
    private _dialog = inject(MatDialog);
    private _transloco = inject(TranslocoService);

    /** Depends on active language so computeds can re-translate when the user switches locale. */
    private readonly _translocoLang = toSignal(
        this._transloco.langChanges$.pipe(
            startWith(this._transloco.getActiveLang()),
            map(() => this._transloco.getActiveLang()),
            distinctUntilChanged()
        ),
        { initialValue: this._transloco.getActiveLang() }
    );

    private readonly TUTORIAL_STORAGE_KEY = 'smart-batch-tutorial-shown';

    configId = signal<string | null>(null);
    batchId = signal<string | null>(null);
    configuration = signal<BatchConfiguration | null>(null);
    existingBatch = signal<SmartBatch | null>(null);
    isLoading = signal(true);
    isSubmitting = signal(false);
    isParsingFiles = signal(false);
    showRequiredFieldsPanel = signal(true);

    // Form
    batchForm: FormGroup = this._formBuilder.group({
        name: ['', [Validators.required, Validators.maxLength(150)]],
    });

    /** Signal mirror of form validity so computeds re-run when form state changes (any order). */
    batchFormValid = signal(false);

    // File upload state
    selectedFile = signal<File | null>(null);
    selectedFiles = signal<ParsedBatchFileSummary[]>([]);
    isDragging = signal(false);
    parseError = signal<string | null>(null);
    /** Required column names missing from the upload (message from i18n in the template). */
    missingRequiredColumnsFields = signal<string | null>(null);
    parsedRows = signal<any[]>([]);
    previewColumns = signal<string[]>([]);
    /** Non-fatal CSV parse notices (skipped rows, delimiter hints). */
    csvParseWarnings = signal<CsvParseWarningNotice[]>([]);

    // Computed: Extract required fields from all steps
    requiredFields = computed<RequiredField[]>(() => {
        const config = this.configuration();
        if (!config?.steps) return [];

        const fieldsMap = new Map<string, RequiredField>();

        config.steps
            .sort((a, b) => a.sequence - b.sequence)
            .forEach((step) => {
                const feature = step.appFeature as any;
                const dependencies = feature?.dependencies || [];

                dependencies.forEach((dep: any) => {
                    if (!dep?.field) return;
                    if (!isClientVisibleBatchDependencyField(dep.field)) return;
                    const prev = fieldsMap.get(dep.field);
                    if (!fieldsMap.has(dep.field) || dep.required) {
                        fieldsMap.set(dep.field, {
                            field: dep.field,
                            required: dep.required || false,
                            stepName: feature?.name || 'Unknown Step',
                            stepSequence: step.sequence,
                            enumValues: dep.enum || undefined,
                            type: dep.type || 'string',
                            description: dep.description || undefined,
                            dependencyGroup: dep.dependencyGroup,
                            requiredWhen: dep.requiredWhen,
                            dateFormat: dep.dateFormat ?? prev?.dateFormat,
                        });
                    } else if (dep.dateFormat && !prev?.dateFormat) {
                        fieldsMap.set(dep.field, {
                            ...prev,
                            dateFormat: dep.dateFormat,
                        });
                    }
                });
            });

        return Array.from(fieldsMap.values()).sort((a, b) => {
            // Required fields first, then by name
            if (a.required !== b.required) return b.required ? 1 : -1;
            return a.field.localeCompare(b.field);
        });
    });

    // Computed: Get only required fields for template
    templateFields = computed(() => {
        return this.requiredFields().filter((f) => f.required);
    });

    requiredFieldCount = computed(() => this.requiredFields().filter((f) => f.required).length);

    optionalFieldCount = computed(() => this.requiredFields().filter((f) => !f.required).length);

    isAppendMode = computed(() => !!this.batchId());

    isAppendBlocked = computed(() => this.existingBatch()?.status === 'processing');

    // Computed: All unique fields (required + optional)
    allFields = computed(() => {
        return this.requiredFields();
    });

    /**
     * One view-model per configured step. Renders the "Expected fields" panel as per-endpoint
     * cards so the XOR rule (DEA: fullName XOR documentType+documentNumber) and conditional
     * fields stay attached to the endpoint they belong to instead of being merged across steps.
     */
    endpointFieldsViews = computed<EndpointFieldsView[]>(() => {
        const config = this.configuration();
        if (!config?.steps) return [];

        return [...config.steps]
            .sort((a, b) => a.sequence - b.sequence)
            .map((step) => this.buildEndpointFieldsView(step))
            .filter(
                (view) =>
                    view.xor !== null ||
                    view.requiredFields.length > 0 ||
                    view.conditionalFields.length > 0 ||
                    view.optionalFields.length > 0
            );
    });

    // Validation state
    validationResult = signal<ValidationResult | null>(null);

    // Computed: Check if cell has error
    cellErrors = computed(() => {
        const result = this.validationResult();
        if (!result) return new Map<string, CellError>();

        const cellMap = new Map<string, CellError>();
        result.errors.forEach((error) => {
            const key = `${error.rowIndex}-${error.column}`;
            cellMap.set(key, error);
        });
        return cellMap;
    });

    /**
     * Row-level / cell validation summary (red banner under the file card).
     * Uses translate() + _translocoLang so copy stays in sync when switching language after upload.
     */
    cellValidationIssueBanner = computed(() => {
        this._translocoLang();
        const result = this.validationResult();
        if (!result || result.isValid || result.errors.length === 0) return null;

        const missingCount = result.errors.filter((e) => e.type === 'missing').length;
        const invalidEnumCount = result.errors.filter(
            (e) => e.type === 'invalid_enum' || e.type === 'invalid_type'
        ).length;
        const ruleCount = result.errors.filter((e) => e.type === 'dependency_rule').length;
        const rowsAffected = new Set(result.errors.map((e) => e.rowIndex)).size;

        const parts: string[] = [];
        if (missingCount > 0) {
            parts.push(this._transloco.translate('createBatch.missingValues', { count: missingCount }));
        }
        if (invalidEnumCount > 0) {
            parts.push(
                this._transloco.translate('createBatch.invalidValues', { count: invalidEnumCount })
            );
        }
        if (ruleCount > 0) {
            parts.push(
                this._transloco.translate('createBatch.dependencyRuleIssues', { count: ruleCount })
            );
        }
        const breakdown = parts.join(this._transloco.translate('createBatch.validationIssuesListSeparator'));

        return this._transloco.translate('createBatch.validationIssuesBanner', {
            issueCount: result.errors.length,
            rowCount: rowsAffected,
            breakdown,
        });
    });

    fileCardIssueBanner = computed(() => {
        const raw = this.parseError();
        if (raw) return { mode: 'raw' as const, text: raw };
        const missing = this.missingRequiredColumnsFields();
        if (missing) {
            return {
                mode: 'i18n' as const,
                key: 'createBatch.missingRequiredColumns',
                params: { fields: missing },
            };
        }
        const cell = this.cellValidationIssueBanner();
        if (cell) return { mode: 'raw' as const, text: cell };
        return null;
    });

    hasBlockingFileIssues = computed(() => this.fileCardIssueBanner() !== null);

    // Computed: Summary of errors for display
    errorSummary = computed(() => {
        const result = this.validationResult();
        if (!result || result.isValid || result.errors.length === 0) return null;

        const missingCount = result.errors.filter((e) => e.type === 'missing').length;
        const invalidEnumCount = result.errors.filter(
            (e) => e.type === 'invalid_enum' || e.type === 'invalid_type'
        ).length;
        const dependencyRuleCount = result.errors.filter((e) => e.type === 'dependency_rule').length;
        const rowsWithErrors = new Set(result.errors.map((e) => e.rowIndex)).size;

        return {
            totalErrors: result.errors.length,
            missingCount,
            invalidEnumCount,
            dependencyRuleCount,
            rowsWithErrors,
        };
    });

    // Computed (uses batchFormValid signal so it re-runs when name is filled in any order)
    hasValidData = computed(() => {
        this.batchFormValid(); // depend on signal so we re-check when form validity changes
        const validation = this.validationResult();
        const nameValid = this.isAppendMode() || this.batchForm.valid;
        const basicValid = nameValid && this.parsedRows().length > 0 && !this.isAppendBlocked();
        return basicValid && (!validation || validation.isValid);
    });

    /** Reason the Create Batch button is disabled (for tooltip) */
    createBatchDisabledReason = computed(() => {
        this.batchFormValid();
        this._translocoLang();
        if (this.isSubmitting()) {
            return this._transloco.translate(
                this.isAppendMode() ? 'createBatch.disabledAppending' : 'createBatch.disabledCreating'
            );
        }
        if (this.isParsingFiles()) return this._transloco.translate('createBatch.disabledParsing');
        if (this.isAppendBlocked()) return this._transloco.translate('createBatch.disabledProcessing');
        const banner = this.fileCardIssueBanner();
        if (banner?.mode === 'raw') return banner.text;
        if (banner?.mode === 'i18n') {
            return this._transloco.translate(banner.key, banner.params);
        }
        if (this.parsedRows().length === 0) {
            return this._transloco.translate('createBatch.disabledNoFile');
        }
        if (!this.isAppendMode() && !this.batchForm.get('name')?.value?.trim()) {
            return this._transloco.translate('createBatch.disabledNoBatchName');
        }
        const validation = this.validationResult();
        if (validation && !validation.isValid) {
            return this._transloco.translate('createBatch.disabledFixDataErrors');
        }
        return null;
    });

    estimatedCost = computed(() => {
        const config = this.configuration();
        if (!config?.steps) return 0;

        const costPerRow = config.steps.reduce((sum, step) => {
            const feature = step.appFeature as any;
            return sum + (feature?.price || feature?.smartCheckPrice || 0);
        }, 0);

        return costPerRow * this.parsedRows().length;
    });

    acceptedFormats = computed(() => {
        const config = this.configuration();
        if (!config) return '.csv,.xlsx,.jsonl';

        switch (config.inputFormat) {
            case 'csv':
                return '.csv';
            case 'xlsx':
                return '.xlsx';
            case 'jsonl':
                return '.jsonl';
            default:
                return '.csv,.xlsx,.jsonl';
        }
    });

    ngOnInit() {
        // Keep batchFormValid in sync with form so computeds (hasValidData, etc.) re-run in any order
        this.batchFormValid.set(this.batchForm.valid);
        this.batchForm.statusChanges.subscribe(() => {
            this.batchFormValid.set(this.batchForm.valid);
        });

        const id = this._route.snapshot.paramMap.get('configId');
        const batchId = this._route.snapshot.paramMap.get('batchId');
        if (batchId) {
            this.batchId.set(batchId);
            this.loadExistingBatch(batchId);
        }
        if (id) {
            this.configId.set(id);
            this.loadConfiguration(id);
        } else {
            this._router.navigate(['/smart-batch']);
        }

        // Check if we should show the tutorial
        this.checkAndShowTutorial();
    }

    loadExistingBatch(batchId: string) {
        this._smartBatchService.getSmartBatch(batchId).subscribe({
            next: (res) => {
                this.existingBatch.set(res.data);
                this.batchForm.patchValue({ name: res.data.name });
                this.batchForm.disable({ emitEvent: false });
                this.batchFormValid.set(true);
            },
            error: () => {
                this._router.navigate(['/smart-batch', this.configId()]);
            },
        });
    }

    private checkAndShowTutorial() {
        const tutorialShown = localStorage.getItem(this.TUTORIAL_STORAGE_KEY);
        if (!tutorialShown) {
            // Small delay to let the page render first
            setTimeout(() => {
                this.openTutorial();
                localStorage.setItem(this.TUTORIAL_STORAGE_KEY, 'true');
            }, 500);
        }
    }

    openTutorial() {
        this._dialog.open(TutorialModalComponent, {
            panelClass: 'tutorial-dialog',
            maxWidth: '500px',
            width: '95vw',
            disableClose: false,
            autoFocus: false,
        });
    }

    loadConfiguration(configId: string) {
        this.isLoading.set(true);
        this._smartBatchService.getConfiguration(configId).subscribe({
            next: (res) => {
                this.configuration.set(res.data);
                this.isLoading.set(false);
            },
            error: () => {
                this._router.navigate(['/smart-batch']);
            },
        });
    }

    /** Download a CSV template with all required field headers */
    downloadTemplate() {
        const config = this.configuration();
        if (!config) return;

        const headers = getBatchInputCsvHeaders(config);

        if (headers.length === 0) {
            // Fallback: add a placeholder header
            headers.push('id');
        }

        // Create CSV content with headers and one example row
        const csvContent = [
            headers.join(','),
            headers.map(() => '').join(','), // Empty row as placeholder
        ].join('\n');

        // Leading BOM helps Excel recognize UTF-8
        const blob = new Blob([`\uFEFF${csvContent}`], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);

        const fileName = `${config.name.replace(/[^a-z0-9]/gi, '_').toLowerCase()}_template.csv`;

        link.setAttribute('href', url);
        link.setAttribute('download', fileName);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    }

    toggleRequiredFieldsPanel() {
        this.showRequiredFieldsPanel.update((v) => !v);
    }

    // Drag & Drop handlers
    onDragOver(event: DragEvent) {
        event.preventDefault();
        event.stopPropagation();
        this.isDragging.set(true);
    }

    onDragLeave(event: DragEvent) {
        event.preventDefault();
        event.stopPropagation();
        this.isDragging.set(false);
    }

    onDrop(event: DragEvent) {
        event.preventDefault();
        event.stopPropagation();
        this.isDragging.set(false);

        const files = event.dataTransfer?.files;
        if (files && files.length > 0) {
            void this.handleFiles(Array.from(files));
        }
    }

    onFileSelected(event: Event) {
        const input = event.target as HTMLInputElement;
        if (input.files && input.files.length > 0) {
            void this.handleFiles(Array.from(input.files));
            input.value = '';
        }
    }

    async handleFiles(files: File[]) {
        if (files.length === 0 || this.isAppendBlocked()) return;

        this.parseError.set(null);
        this.missingRequiredColumnsFields.set(null);
        this.csvParseWarnings.set([]);
        this.isParsingFiles.set(true);

        try {
            const summaries = [...this.selectedFiles()];
            const mergedRows = [...this.parsedRows()];
            const mergedColumns = [...this.previewColumns()];
            const warnings = [...this.csvParseWarnings()];

            for (const file of files) {
                const parsed = await this.parseFileForMerge(file);
                for (const col of parsed.fieldOrder) {
                    if (!mergedColumns.some((existing) => existing.toLowerCase() === col.toLowerCase())) {
                        mergedColumns.push(col);
                    }
                }
                mergedRows.push(...parsed.rows);
                warnings.push(...parsed.warnings);
                summaries.push({ name: file.name, size: file.size, rowCount: parsed.rows.length });
            }

            this.selectedFile.set(files[0] ?? null);
            this.selectedFiles.set(summaries);
            this.previewColumns.set(mergedColumns);
            this.parsedRows.set(mergedRows);
            this.csvParseWarnings.set(warnings);
            this.validateAllData(mergedColumns, mergedRows);
        } catch (err) {
            this.parseError.set(err instanceof Error ? err.message : 'Failed to parse file.');
        } finally {
            this.isParsingFiles.set(false);
        }
    }

    handleFile(file: File) {
        void this.handleFiles([file]);
    }

    private readFileAsText(file: File): Promise<string> {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (e) => resolve(String(e.target?.result ?? ''));
            reader.onerror = () => reject(new Error('Failed to read file.'));
            reader.readAsText(file);
        });
    }

    private readFileAsArrayBuffer(file: File): Promise<ArrayBuffer> {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (e) => {
                const result = e.target?.result;
                if (result instanceof ArrayBuffer) resolve(result);
                else reject(new Error('Failed to read Excel file.'));
            };
            reader.onerror = () => reject(new Error('Failed to read Excel file.'));
            reader.readAsArrayBuffer(file);
        });
    }

    private async parseFileForMerge(file: File): Promise<ParsedBatchFileResult> {
        const extension = file.name.split('.').pop()?.toLowerCase();
        if (extension === 'csv') return this.parseCsvFileForMerge(file);
        if (extension === 'jsonl') return this.parseJsonlFileForMerge(file);
        if (extension === 'xlsx' || extension === 'xls') return this.parseXlsxFileForMerge(file);
        throw new Error(`Unsupported file format: .${extension}`);
    }

    private async parseCsvFileForMerge(file: File): Promise<ParsedBatchFileResult> {
        const text = stripBom(await this.readFileAsText(file));
        const lines = text
            .split('\n')
            .map((line) => line.replace(/\r$/, ''))
            .filter((line) => line.trim());

        if (lines.length < 2) throw new Error('CSV must have a header row and at least one data row.');

        const { delimiter } = detectBestCsvDelimiter(lines);
        const headers = parseCSVLine(lines[0], delimiter);
        if (!headers.some((h) => h.trim())) throw new Error('CSV header row is empty or invalid.');

        const rows: Record<string, unknown>[] = [];
        let skippedRowCount = 0;
        const dataLineCount = lines.length - 1;

        for (let i = 1; i < lines.length; i++) {
            const values = parseCSVLine(lines[i], delimiter);
            if (values.length === headers.length) {
                const row: Record<string, unknown> = {};
                headers.forEach((header, idx) => {
                    row[header] = values[idx];
                });
                rows.push(row);
            } else {
                skippedRowCount += 1;
            }
        }

        const warnings = this.buildCsvParseWarnings(
            skippedRowCount,
            dataLineCount,
            lines[0],
            headers.length
        );
        return this.sanitizeAndRestrictFileRows(headers, rows, warnings, 'CSV');
    }

    private async parseXlsxFileForMerge(file: File): Promise<ParsedBatchFileResult> {
        const result = await this.readFileAsArrayBuffer(file);
        const workbook = XLSX.read(result, { type: 'array' });
        const firstSheet = workbook.SheetNames[0];
        if (!firstSheet) throw new Error('The workbook has no sheets.');

        const sheet = workbook.Sheets[firstSheet];
        const matrix = XLSX.utils.sheet_to_json(sheet, {
            header: 1,
            defval: '',
        }) as unknown[][];
        const { rows: grid } = sanitizeMatrix(matrix);
        if (grid.length < 2) throw new Error('Excel must have a header row and at least one data row.');

        const headerRow = grid[0].map((c) => String(c ?? '').trim());
        if (!headerRow.some((h) => h)) throw new Error('Excel header row is empty or invalid.');

        const objects: Record<string, unknown>[] = grid.slice(1).map((cells) => {
            const row: Record<string, unknown> = {};
            headerRow.forEach((field, index) => {
                if (field) row[field] = (cells as unknown[])[index] ?? '';
            });
            return row;
        });
        return this.sanitizeAndRestrictFileRows(headerRow, objects, [], 'Excel');
    }

    private async parseJsonlFileForMerge(file: File): Promise<ParsedBatchFileResult> {
        const text = await this.readFileAsText(file);
        const lines = text.split('\n').filter((line) => line.trim());
        if (lines.length === 0) throw new Error('JSONL file is empty.');

        const rows: Record<string, unknown>[] = [];
        const allKeys = new Set<string>();
        for (const line of lines) {
            const obj = JSON.parse(line) as Record<string, unknown>;
            rows.push(obj);
            Object.keys(obj).forEach((key) => allKeys.add(key));
        }
        return this.sanitizeAndRestrictFileRows(Array.from(allKeys), rows, [], 'JSONL');
    }

    private sanitizeAndRestrictFileRows(
        fieldOrder: string[],
        rows: Record<string, unknown>[],
        parseWarnings: CsvParseWarningNotice[],
        label: string
    ): ParsedBatchFileResult {
        const { fieldOrder: sanitizedOrder, rows: sanitized } = sanitizePapaObjectRows(rows, fieldOrder);
        if (sanitized.length === 0) throw new Error(`${label} has no data rows.`);

        const restricted = this.restrictRowsToConfiguredFields(sanitizedOrder, sanitized);
        if (restricted.ok === false) throw new Error(restricted.errorMessage);

        let warnings = [...parseWarnings];
        if (restricted.droppedHeaders.length > 0) {
            warnings = [
                ...warnings,
                {
                    key: 'createBatch.strippedUnknownColumnsNotice',
                    params: {
                        count: restricted.droppedHeaders.length,
                        columns: this.formatDroppedColumnList(restricted.droppedHeaders),
                    },
                },
            ];
        }

        const resanitized = sanitizePapaObjectRows(restricted.rows, restricted.fieldOrder);
        if (resanitized.rows.length === 0) {
            throw new Error(this._transloco.translate('createBatch.noDataRowsAfterColumnFilter'));
        }

        return {
            fieldOrder: resanitized.fieldOrder,
            rows: resanitized.rows,
            warnings,
        };
    }

    parseCSV(file: File) {
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const text = stripBom(String(e.target?.result ?? ''));
                const lines = text
                    .split('\n')
                    .map((line) => line.replace(/\r$/, ''))
                    .filter((line) => line.trim());

                if (lines.length < 2) {
                    this.parseError.set('CSV must have a header row and at least one data row.');
                    return;
                }

                const { delimiter } = detectBestCsvDelimiter(lines);
                const headers = parseCSVLine(lines[0], delimiter);
                if (!headers.some((h) => h.trim())) {
                    this.parseError.set('CSV header row is empty or invalid.');
                    return;
                }

                const rows: Record<string, unknown>[] = [];
                let skippedRowCount = 0;
                const dataLineCount = lines.length - 1;

                for (let i = 1; i < lines.length; i++) {
                    const values = parseCSVLine(lines[i], delimiter);
                    if (values.length === headers.length) {
                        const row: Record<string, unknown> = {};
                        headers.forEach((header, idx) => {
                            row[header] = values[idx];
                        });
                        rows.push(row);
                    } else {
                        skippedRowCount += 1;
                    }
                }

                const { fieldOrder, rows: sanitized } = sanitizePapaObjectRows(rows, headers);
                if (sanitized.length === 0) {
                    this.parseError.set(
                        'CSV has no data rows. Remove leading or trailing empty rows, or fill in at least one row.'
                    );
                    this.previewColumns.set(fieldOrder);
                    this.parsedRows.set([]);
                    this.validationResult.set(null);
                    this.csvParseWarnings.set(
                        this.buildCsvParseWarnings(
                            skippedRowCount,
                            dataLineCount,
                            lines[0],
                            fieldOrder.length
                        )
                    );
                    return;
                }

                const csvWarnings = this.buildCsvParseWarnings(
                    skippedRowCount,
                    dataLineCount,
                    lines[0],
                    fieldOrder.length
                );
                this.applyConfiguredFieldFilterAndContinue(fieldOrder, sanitized, csvWarnings);
            } catch (err) {
                this.parseError.set('Failed to parse CSV file.');
            }
        };
        reader.readAsText(file);
    }

    private buildCsvParseWarnings(
        skippedRowCount: number,
        dataLineCount: number,
        headerLine: string,
        parsedColumnCount: number
    ): CsvParseWarningNotice[] {
        const messages: CsvParseWarningNotice[] = [];

        if (skippedRowCount > 0) {
            messages.push({
                key: 'createBatch.skippedRowsNotice',
                params: { skipped: skippedRowCount, total: dataLineCount },
            });
        }

        const hint = getDelimiterMismatchHintKind(headerLine, parsedColumnCount);
        if (hint === 'semicolon') {
            messages.push({ key: 'createBatch.delimiterHintSemicolon' });
        } else if (hint === 'tab') {
            messages.push({ key: 'createBatch.delimiterHintTab' });
        }

        return messages;
    }

    /**
     * Keeps only columns that match batch configuration (required + optional). When the
     * configuration defines no fields, the parsed table is left unchanged.
     */
    private restrictRowsToConfiguredFields(
        parsedFieldOrder: string[],
        rows: Record<string, unknown>[]
    ):
        | {
              ok: true;
              fieldOrder: string[];
              rows: Record<string, unknown>[];
              droppedHeaders: string[];
          }
        | { ok: false; errorMessage: string } {
        const defs = this.requiredFields();
        if (!defs.length) {
            return {
                ok: true,
                fieldOrder: parsedFieldOrder,
                rows: rows.map((r) => ({ ...r })),
                droppedHeaders: [],
            };
        }

        const allowedLower = new Set(defs.map((d) => d.field.toLowerCase()));
        const droppedHeaders = parsedFieldOrder.filter(
            (h) => h.trim().length > 0 && !allowedLower.has(h.trim().toLowerCase())
        );

        const configFieldOrder = defs.map((d) => d.field);
        const matchedFields = configFieldOrder.filter((f) =>
            parsedFieldOrder.some((h) => h.trim().toLowerCase() === f.toLowerCase())
        );

        if (matchedFields.length === 0) {
            return {
                ok: false,
                errorMessage: this._transloco.translate('createBatch.noMatchingColumns', {
                    fields: configFieldOrder.join(', '),
                }),
            };
        }

        const strippedRows = rows.map((row) => {
            const out: Record<string, unknown> = {};
            matchedFields.forEach((field) => {
                const fk = this.findColumnKey(row, field);
                if (fk) {
                    out[field] = row[fk];
                }
            });
            return out;
        });

        return {
            ok: true,
            fieldOrder: matchedFields,
            rows: strippedRows,
            droppedHeaders,
        };
    }

    private formatDroppedColumnList(headers: string[]): string {
        const max = 20;
        const slice = headers.slice(0, max);
        const suffix = headers.length > max ? '…' : '';
        return `${slice.join(', ')}${suffix}`;
    }

    /**
     * Drops columns not in the batch configuration, re-sanitizes rows, updates UI state, runs validation.
     */
    private applyConfiguredFieldFilterAndContinue(
        fieldOrder: string[],
        rows: Record<string, unknown>[],
        parseWarnings: CsvParseWarningNotice[]
    ): void {
        const restricted = this.restrictRowsToConfiguredFields(fieldOrder, rows);
        if (restricted.ok === false) {
            this.missingRequiredColumnsFields.set(null);
            this.parseError.set(restricted.errorMessage);
            this.previewColumns.set([]);
            this.parsedRows.set([]);
            this.validationResult.set(null);
            this.csvParseWarnings.set(parseWarnings);
            return;
        }

        let warnings = [...parseWarnings];
        if (restricted.droppedHeaders.length > 0) {
            warnings = [
                ...warnings,
                {
                    key: 'createBatch.strippedUnknownColumnsNotice',
                    params: {
                        count: restricted.droppedHeaders.length,
                        columns: this.formatDroppedColumnList(restricted.droppedHeaders),
                    },
                },
            ];
        }

        const { fieldOrder: fo, rows: sanitized } = sanitizePapaObjectRows(
            restricted.rows,
            restricted.fieldOrder
        );

        if (sanitized.length === 0) {
            this.parseError.set(
                this._transloco.translate('createBatch.noDataRowsAfterColumnFilter')
            );
            this.previewColumns.set(fo);
            this.parsedRows.set([]);
            this.validationResult.set(null);
            this.csvParseWarnings.set(warnings);
            return;
        }

        this.previewColumns.set(fo);
        this.parsedRows.set(sanitized);
        this.csvParseWarnings.set(warnings);
        this.validateAllData(fo, sanitized);
    }

    /**
     * Parse first worksheet from Excel; trimming empty leading/trailing rows and columns
     * and fully empty data rows is handled by shared spreadsheet sanitizers.
     */
    private parseXLSX(file: File): void {
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const result = e.target?.result;
                if (!result || !(result instanceof ArrayBuffer)) {
                    this.parseError.set('Failed to read Excel file.');
                    return;
                }
                const workbook = XLSX.read(result, { type: 'array' });
                const firstSheet = workbook.SheetNames[0];
                if (!firstSheet) {
                    this.parseError.set('The workbook has no sheets.');
                    return;
                }
                const sheet = workbook.Sheets[firstSheet];
                const matrix = XLSX.utils.sheet_to_json(sheet, {
                    header: 1,
                    defval: '',
                }) as unknown[][];
                const { rows: grid } = sanitizeMatrix(matrix);
                if (grid.length < 2) {
                    this.parseError.set('Excel must have a header row and at least one data row.');
                    this.previewColumns.set([]);
                    this.parsedRows.set([]);
                    this.validationResult.set(null);
                    return;
                }
                const headerRow = grid[0].map((c) => String(c ?? '').trim());
                if (!headerRow.some((h) => h)) {
                    this.parseError.set('Excel header row is empty or invalid.');
                    this.previewColumns.set([]);
                    this.parsedRows.set([]);
                    this.validationResult.set(null);
                    return;
                }
                const dataRows = grid.slice(1);
                const objects: Record<string, unknown>[] = dataRows.map((cells) => {
                    const row: Record<string, unknown> = {};
                    headerRow.forEach((field, index) => {
                        if (field) row[field] = (cells as unknown[])[index] ?? '';
                    });
                    return row;
                });
                const { fieldOrder, rows: sanitized } = sanitizePapaObjectRows(objects, headerRow);
                if (sanitized.length === 0) {
                    this.parseError.set(
                        'Excel has no data rows. Remove empty rows or fill in at least one data row.'
                    );
                    this.previewColumns.set(fieldOrder);
                    this.parsedRows.set([]);
                    this.validationResult.set(null);
                    return;
                }
                this.applyConfiguredFieldFilterAndContinue(fieldOrder, sanitized, []);
            } catch {
                this.parseError.set('Failed to parse Excel file.');
            }
        };
        reader.readAsArrayBuffer(file);
    }

    parseJSONL(file: File) {
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const text = e.target?.result as string;
                const lines = text.split('\n').filter((line) => line.trim());

                if (lines.length === 0) {
                    this.parseError.set('JSONL file is empty.');
                    return;
                }

                const rows: Record<string, unknown>[] = [];
                const allKeys = new Set<string>();

                for (const line of lines) {
                    const obj = JSON.parse(line) as Record<string, unknown>;
                    rows.push(obj);
                    Object.keys(obj).forEach((key) => allKeys.add(key));
                }

                const keyOrder = Array.from(allKeys);
                const { fieldOrder, rows: sanitized } = sanitizePapaObjectRows(rows, keyOrder);
                if (sanitized.length === 0) {
                    this.parseError.set(
                        'JSONL has no data rows. Remove empty lines or provide at least one object with at least one value.'
                    );
                    this.previewColumns.set(fieldOrder);
                    this.parsedRows.set([]);
                    this.validationResult.set(null);
                    return;
                }
                this.applyConfiguredFieldFilterAndContinue(fieldOrder, sanitized, []);
            } catch (err) {
                this.parseError.set('Failed to parse JSONL file. Ensure each line is valid JSON.');
            }
        };
        reader.readAsText(file);
    }

    /** Comprehensive validation of all rows and cells */
    private validateAllData(uploadedHeaders: string[], rows: any[]) {
        const config = this.configuration();
        const requiredFieldDefs = this.requiredFields();
        const errors: CellError[] = [];

        const missingColumns = requiredFieldDefs
            .filter((f) => f.required)
            .filter((f) => !uploadedHeaders.some((h) => h.toLowerCase() === f.field.toLowerCase()));

        if (missingColumns.length > 0) {
            const fieldNames = missingColumns.map((f) => f.field).join(', ');
            this.parseError.set(null);
            this.missingRequiredColumnsFields.set(fieldNames);
            this.validationResult.set({
                isValid: false,
                errors: [],
                errorsByRow: new Map(),
                errorsByColumn: new Map(),
            });
            return;
        }

        this.missingRequiredColumnsFields.set(null);

        if (!config?.steps?.length) {
            this.finalizeValidation(errors);
            return;
        }

        const sortedSteps = [...config.steps].sort((a, b) => a.sequence - b.sequence);

        rows.forEach((row, rowIndex) => {
            const r = row as Record<string, unknown>;
            sortedSteps.forEach((step) => {
                const feature = step.appFeature as any;
                const rawDeps = feature?.dependencies || [];
                const deps: FeatureDependency[] = rawDeps.filter(
                    (d: any) =>
                        d &&
                        typeof d.field === 'string' &&
                        d.field.length > 0 &&
                        isClientVisibleBatchDependencyField(d.field)
                );
                if (!deps.length) return;
                const stepLabel = feature?.name || 'Unknown Step';
                this.appendStepDependencyValidationErrors(r, rowIndex, deps, stepLabel, errors);
            });
        });

        this.finalizeValidation(errors);
    }

    private finalizeValidation(errors: CellError[]) {
        const errorsByRow = new Map<number, CellError[]>();
        const errorsByColumn = new Map<string, CellError[]>();

        errors.forEach((error) => {
            if (!errorsByRow.has(error.rowIndex)) {
                errorsByRow.set(error.rowIndex, []);
            }
            errorsByRow.get(error.rowIndex)!.push(error);

            if (!errorsByColumn.has(error.column)) {
                errorsByColumn.set(error.column, []);
            }
            errorsByColumn.get(error.column)!.push(error);
        });

        const validationResult: ValidationResult = {
            isValid: errors.length === 0,
            errors,
            errorsByRow,
            errorsByColumn,
        };

        this.validationResult.set(validationResult);
        this.parseError.set(null);
        if (errors.length === 0) {
            this.missingRequiredColumnsFields.set(null);
        }
    }

    private appendStepDependencyValidationErrors(
        row: Record<string, unknown>,
        rowIndex: number,
        deps: FeatureDependency[],
        stepName: string,
        errors: CellError[]
    ): void {
        const xorMeta = this.buildXorGroupMetadata(deps);

        if (!xorMeta) {
            this.appendLegacyStepValidation(row, rowIndex, deps, errors);
            return;
        }

        const { docGroupIds, nameGroupIds } = xorMeta;
        const mode1Active = this.isDocumentSearchModeActive(row, deps, docGroupIds);
        const mode2Active = this.isFullNameModeActive(row, deps, nameGroupIds);

        if (mode1Active && mode2Active) {
            errors.push({
                rowIndex,
                column: 'fullName',
                type: 'dependency_rule',
                message: this._transloco.translate('createBatch.validationXorBothModes', {
                    step: stepName,
                }),
            });
            return;
        }

        if (!mode1Active && !mode2Active) {
            errors.push({
                rowIndex,
                column: 'fullName',
                type: 'dependency_rule',
                message: this._transloco.translate('createBatch.validationXorNeitherMode', {
                    step: stepName,
                }),
            });
            return;
        }

        if (mode2Active) {
            for (const d of deps) {
                const g = this.normalizeDependencyGroup(d);
                if (g === null || !docGroupIds.has(g)) continue;
                if (!this.isEffectivelyEmptyForMode(this.getRowCellRaw(row, d.field))) {
                    errors.push({
                        rowIndex,
                        column: d.field,
                        type: 'dependency_rule',
                        message: this._transloco.translate(
                            'createBatch.validationLeakDocumentWhenFullName',
                            {
                                step: stepName,
                                field: d.field,
                            }
                        ),
                    });
                }
            }
        }

        if (mode1Active) {
            for (const d of deps) {
                const g = this.normalizeDependencyGroup(d);
                if (g === null || !nameGroupIds.has(g)) continue;
                if (!this.isEffectivelyEmptyForMode(this.getRowCellRaw(row, d.field))) {
                    errors.push({
                        rowIndex,
                        column: d.field,
                        type: 'dependency_rule',
                        message: this._transloco.translate(
                            'createBatch.validationLeakFullNameWhenDocument',
                            {
                                step: stepName,
                                field: d.field,
                            }
                        ),
                    });
                }
            }

            this.appendDocumentTypeNumberPairErrorsForDeps(row, rowIndex, deps, docGroupIds, errors);

            for (const d of deps) {
                const g = this.normalizeDependencyGroup(d);
                if (g === null || !docGroupIds.has(g)) continue;
                if (!d.requiredWhen) continue;
                if (!this.requiredWhenPredicateMatches(row, d.requiredWhen)) continue;
                if (this.isEffectivelyEmptyForMode(this.getRowCellRaw(row, d.field))) {
                    const when = d.requiredWhen;
                    errors.push({
                        rowIndex,
                        column: d.field,
                        type: 'missing',
                        message: this._transloco.translate('createBatch.validationConditionalRequired', {
                            step: stepName,
                            field: d.field,
                            whenField: when.field,
                            values: (when.in || []).join(', '),
                        }),
                    });
                }
            }
        }

        for (const d of deps) {
            const g = this.normalizeDependencyGroup(d);
            const isGrouped = g !== null;
            let applies = true;
            if (isGrouped) {
                applies =
                    (mode1Active && docGroupIds.has(g)) || (mode2Active && nameGroupIds.has(g));
            }
            if (!applies) continue;

            const raw = this.getRowCellRaw(row, d.field);
            if (d.required && this.isEmptyValue(raw)) {
                errors.push({
                    rowIndex,
                    column: d.field,
                    type: 'missing',
                    message: `"${d.field}" is required but empty`,
                });
            }
            this.appendEnumErrorIfAny(rowIndex, d, raw, errors);
            this.appendDateFormatErrorIfAny(rowIndex, d, raw, errors);
        }
    }

    private appendDateFormatErrorIfAny(
        rowIndex: number,
        d: FeatureDependency,
        raw: unknown,
        errors: CellError[]
    ): void {
        if (!d.dateFormat || this.isEmptyValue(raw)) return;
        if (this.valueMatchesDependencyDateFormat(raw, d.dateFormat)) return;
        errors.push({
            rowIndex,
            column: d.field,
            type: 'invalid_type',
            message: this._transloco.translate('createBatch.invalidDateFormat', {
                field: d.field,
                format: d.dateFormat,
            }),
        });
    }

    /**
     * Supports declared `dateFormat` from AppFeature dependencies (e.g. dd/MM/yyyy for Colombia / global checks).
     */
    private valueMatchesDependencyDateFormat(raw: unknown, format: string): boolean {
        const s = String(raw ?? '').trim();
        if (!s) return true;
        const norm = format.replace(/\s+/g, '').toLowerCase();
        if (norm === 'dd/mm/yyyy') {
            return this.isCalendarDdMmYyyy(s);
        }
        return true;
    }

    private isCalendarDdMmYyyy(value: string): boolean {
        const m = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/.exec(value);
        if (!m) return false;
        const d = parseInt(m[1], 10);
        const mo = parseInt(m[2], 10);
        const y = parseInt(m[3], 10);
        if (mo < 1 || mo > 12 || d < 1 || d > 31) return false;
        const dt = new Date(y, mo - 1, d);
        return dt.getFullYear() === y && dt.getMonth() === mo - 1 && dt.getDate() === d;
    }

    private appendLegacyStepValidation(
        row: Record<string, unknown>,
        rowIndex: number,
        deps: FeatureDependency[],
        errors: CellError[]
    ): void {
        for (const d of deps) {
            const raw = this.getRowCellRaw(row, d.field);
            if (d.required && this.isEmptyValue(raw)) {
                errors.push({
                    rowIndex,
                    column: d.field,
                    type: 'missing',
                    message: `"${d.field}" is required but empty`,
                });
            }
            this.appendEnumErrorIfAny(rowIndex, d, raw, errors);
            this.appendDateFormatErrorIfAny(rowIndex, d, raw, errors);
        }

        const hasType = deps.some((d) => d.field === 'documentType');
        const hasNum = deps.some((d) => d.field === 'documentNumber');
        if (hasType && hasNum) {
            this.appendDocumentTypeNumberPairErrorsForDeps(row, rowIndex, deps, null, errors);
        }
    }

    private appendEnumErrorIfAny(
        rowIndex: number,
        d: FeatureDependency,
        raw: unknown,
        errors: CellError[]
    ): void {
        const enums = d.enum;
        if (!enums || !Array.isArray(enums) || enums.length === 0) return;
        if (this.isEmptyValue(raw)) return;
        const normalizedValue = String(raw).trim().toLowerCase();
        const validValues = enums.map((v) => String(v).toLowerCase());

        if (!validValues.includes(normalizedValue)) {
            errors.push({
                rowIndex,
                column: d.field,
                type: 'invalid_enum',
                message: `"${raw}" is not a valid value. Expected: ${enums.join(', ')}`,
                expectedValues: enums,
            });
        }
    }

    private normalizeDependencyGroup(d: { dependencyGroup?: string }): string | null {
        if (d.dependencyGroup == null) return null;
        const s = String(d.dependencyGroup).trim();
        return s.length ? s : null;
    }

    /**
     * Build a per-endpoint view model from a single batch step.
     * - Filters out client-hidden dependency fields (e.g. `force`).
     * - When the step's deps form an XOR (e.g. fullName vs documentType+documentNumber via
     *   `dependencyGroup`), returns the two-column XOR shape; otherwise partitions the fields
     *   into required / conditional (`requiredWhen` set) / optional buckets.
     */
    private buildEndpointFieldsView(step: BatchStep): EndpointFieldsView {
        const feature = step.appFeature as {
            name?: string;
            code?: string;
            dependencies?: unknown[];
        };
        const fields: RequiredField[] = ((feature?.dependencies || []) as Array<Record<string, any>>)
            .filter((dep) => dep?.field && isClientVisibleBatchDependencyField(String(dep.field)))
            .map((dep) => ({
                field: String(dep.field),
                required: dep.required || false,
                stepName: feature?.name || 'Unknown Step',
                stepSequence: step.sequence,
                enumValues: (dep.enum as string[] | null | undefined) || undefined,
                type: (dep.type as string) || 'string',
                description: (dep.description as string) || undefined,
                dependencyGroup: dep.dependencyGroup as string | undefined,
                requiredWhen: dep.requiredWhen as { field: string; in?: string[] } | undefined,
                dateFormat: (dep.dateFormat as string) || undefined,
            }));

        const xor = this.computeXorFieldGroups(fields);

        const baseView = {
            sequence: step.sequence,
            name: feature?.name || 'Unknown Step',
            code: feature?.code || '',
            enabled: step.enabled !== false,
        };

        if (xor) {
            return {
                ...baseView,
                xor,
                requiredFields: [],
                conditionalFields: [],
                optionalFields: [],
            };
        }

        const requiredFields = fields
            .filter((f) => f.required)
            .sort((a, b) => a.field.localeCompare(b.field));
        const conditionalFields = fields
            .filter((f) => !f.required && this.fieldHasConditionalRule(f))
            .sort((a, b) => a.field.localeCompare(b.field));
        const optionalFields = fields
            .filter((f) => !f.required && !this.fieldHasConditionalRule(f))
            .sort((a, b) => a.field.localeCompare(b.field));

        return {
            ...baseView,
            xor: null,
            requiredFields,
            conditionalFields,
            optionalFields,
        };
    }

    /**
     * Split a field list into XOR sections (e.g. fullName vs document fields) when the underlying
     * `dependencyGroup` annotations describe two distinct input modes. Returns `null` when the
     * fields don't match the XOR shape, so the caller can fall back to a flat layout.
     */
    private computeXorFieldGroups(fields: RequiredField[]): {
        nameFields: RequiredField[];
        documentFields: RequiredField[];
        dobWhenValues: string | null;
    } | null {
        const minimal: FeatureDependency[] = fields.map((f) => ({
            field: f.field,
            dependencyGroup: f.dependencyGroup,
            requiredWhen: f.requiredWhen,
        }));
        const xor = this.buildXorGroupMetadata(minimal);
        if (!xor) return null;

        const { docGroupIds, nameGroupIds } = xor;

        const nameFields = fields
            .filter((f) => {
                const g = this.normalizeDependencyGroup(f);
                return g !== null && nameGroupIds.has(g);
            })
            .sort((a, b) => a.field.localeCompare(b.field));

        const docOrder = ['documentType', 'documentNumber', 'dateOfBirth', 'expirationDate'];
        const docFields = fields.filter((f) => {
            const g = this.normalizeDependencyGroup(f);
            return g !== null && docGroupIds.has(g);
        });
        const documentFields = [...docFields].sort((a, b) => {
            const ia = docOrder.indexOf(a.field);
            const ib = docOrder.indexOf(b.field);
            if (ia === -1 && ib === -1) return a.field.localeCompare(b.field);
            if (ia === -1) return 1;
            if (ib === -1) return -1;
            return ia - ib;
        });

        const dob = documentFields.find(
            (d) => d.field === 'dateOfBirth' && d.requiredWhen?.in?.length
        );
        const dobWhenValues = dob?.requiredWhen?.in?.join(', ') ?? null;

        if (nameFields.length === 0 || documentFields.length === 0) return null;

        return { nameFields, documentFields, dobWhenValues };
    }

    private buildXorGroupMetadata(deps: FeatureDependency[]): {
        docGroupIds: Set<string>;
        nameGroupIds: Set<string>;
    } | null {
        const grouped = new Map<string, FeatureDependency[]>();
        for (const d of deps) {
            const g = this.normalizeDependencyGroup(d);
            if (g === null) continue;
            if (!grouped.has(g)) grouped.set(g, []);
            grouped.get(g)!.push(d);
        }
        if (grouped.size < 2) return null;

        const docGroupIds = new Set<string>();
        const nameGroupIds = new Set<string>();
        for (const [gid, list] of grouped) {
            if (list.some((x) => x.field === 'documentType' || x.field === 'documentNumber')) {
                docGroupIds.add(gid);
            }
            if (list.some((x) => x.field === 'fullName')) {
                nameGroupIds.add(gid);
            }
        }
        if (docGroupIds.size === 0 || nameGroupIds.size === 0) return null;
        return { docGroupIds, nameGroupIds };
    }

    private isDocumentSearchModeActive(
        row: Record<string, unknown>,
        deps: FeatureDependency[],
        docGroupIds: Set<string>
    ): boolean {
        for (const d of deps) {
            const g = this.normalizeDependencyGroup(d);
            if (g === null || !docGroupIds.has(g)) continue;
            if (d.field !== 'documentType' && d.field !== 'documentNumber') continue;
            if (!this.isEffectivelyEmptyForMode(this.getRowCellRaw(row, d.field))) return true;
        }
        return false;
    }

    private isFullNameModeActive(
        row: Record<string, unknown>,
        deps: FeatureDependency[],
        nameGroupIds: Set<string>
    ): boolean {
        for (const d of deps) {
            const g = this.normalizeDependencyGroup(d);
            if (g === null || !nameGroupIds.has(g)) continue;
            if (d.field !== 'fullName') continue;
            if (!this.isEffectivelyEmptyForMode(this.getRowCellRaw(row, d.field))) return true;
        }
        return false;
    }

    private requiredWhenPredicateMatches(
        row: Record<string, unknown>,
        when: { field?: string; in?: string[] }
    ): boolean {
        if (!when?.field || !when.in?.length) return false;
        const v = this.getRowCellRaw(row, when.field);
        if (this.isEffectivelyEmptyForMode(v)) return false;
        const norm = String(v).trim().toLowerCase();
        return when.in.some((x) => String(x).trim().toLowerCase() === norm);
    }

    private getRowCellRaw(row: Record<string, unknown>, field: string): unknown {
        const k = this.findColumnKey(row, field);
        return k ? row[k] : undefined;
    }

    private appendDocumentTypeNumberPairErrorsForDeps(
        row: Record<string, unknown>,
        rowIndex: number,
        deps: FeatureDependency[],
        docGroupIds: Set<string> | null,
        errors: CellError[]
    ): void {
        const inDocGroup = (d: FeatureDependency) => {
            const g = this.normalizeDependencyGroup(d);
            if (docGroupIds) {
                return g !== null && docGroupIds.has(g);
            }
            return true;
        };

        const hasType = deps.some((d) => d.field === 'documentType' && inDocGroup(d));
        const hasNum = deps.some((d) => d.field === 'documentNumber' && inDocGroup(d));
        if (!hasType || !hasNum) return;

        const numKey = this.findColumnKey(row, CreateBatchComponent.DOCUMENT_NUMBER_FIELD);
        const typeKey = this.findColumnKey(row, CreateBatchComponent.DOCUMENT_TYPE_FIELD);
        const numRaw = numKey ? row[numKey] : undefined;
        const typeRaw = typeKey ? row[typeKey] : undefined;
        const numEmpty = this.isEffectivelyEmptyForMode(numRaw);
        const typeEmpty = this.isEffectivelyEmptyForMode(typeRaw);

        if (numEmpty === typeEmpty) return;

        const hasMissingError = (column: string) =>
            errors.some(
                (e) => e.rowIndex === rowIndex && e.column === column && e.type === 'missing'
            );

        if (!numEmpty && typeEmpty) {
            if (!hasMissingError(CreateBatchComponent.DOCUMENT_TYPE_FIELD)) {
                errors.push({
                    rowIndex,
                    column: CreateBatchComponent.DOCUMENT_TYPE_FIELD,
                    type: 'missing',
                    message: this._transloco.translate(
                        'createBatch.pairDocumentTypeRequiredWhenNumber'
                    ),
                });
            }
        } else if (numEmpty && !typeEmpty) {
            if (!hasMissingError(CreateBatchComponent.DOCUMENT_NUMBER_FIELD)) {
                errors.push({
                    rowIndex,
                    column: CreateBatchComponent.DOCUMENT_NUMBER_FIELD,
                    type: 'missing',
                    message: this._transloco.translate(
                        'createBatch.pairDocumentNumberRequiredWhenType'
                    ),
                });
            }
        }
    }

    /** Find the actual key in the row object (case-insensitive match) */
    private findColumnKey(row: any, fieldName: string): string | null {
        const lowerField = fieldName.toLowerCase();
        const keys = Object.keys(row);
        const match = keys.find((k) => k.toLowerCase() === lowerField);
        return match || null;
    }

    /** Check if a value is empty */
    private isEmptyValue(value: any): boolean {
        if (value === null || value === undefined) return true;
        if (typeof value === 'string' && value.trim() === '') return true;
        return false;
    }

    private static readonly DOCUMENT_NUMBER_FIELD = 'documentNumber';
    private static readonly DOCUMENT_TYPE_FIELD = 'documentType';

    /** Placeholders treated as empty for XOR mode detection and document pairing */
    private static readonly PAIR_VALUE_PLACEHOLDERS = new Set(['-', 'n/a', 'na']);

    /**
     * True when the value is empty or a common spreadsheet placeholder (-, n/a).
     * Used for dependency-group modes and paired documentNumber + documentType validation.
     */
    private isEffectivelyEmptyForMode(value: unknown): boolean {
        if (value === null || value === undefined) return true;
        const normalized = String(value).trim();
        if (!normalized) return true;
        return CreateBatchComponent.PAIR_VALUE_PLACEHOLDERS.has(normalized.toLowerCase());
    }

    /** `requiredWhen` predicate present — show as conditional in expected-field cards (unless also globally required). */
    fieldHasConditionalRule(field: RequiredField): boolean {
        const w = field.requiredWhen;
        return Boolean(w?.field && Array.isArray(w.in) && w.in.length > 0);
    }

    /** Get cell error for template binding */
    getCellError(rowIndex: number, column: string): CellError | null {
        const key = `${rowIndex}-${column.toLowerCase()}`;
        // Try exact match first
        let error = this.cellErrors().get(key);
        if (error) return error;

        // Try case-insensitive match
        const errors = this.cellErrors();
        for (const [k, v] of errors) {
            const [idx, col] = k.split('-');
            if (parseInt(idx) === rowIndex && col.toLowerCase() === column.toLowerCase()) {
                return v;
            }
        }
        return null;
    }

    /** Check if a row has any errors */
    rowHasErrors(rowIndex: number): boolean {
        const result = this.validationResult();
        if (!result) return false;
        return result.errorsByRow.has(rowIndex);
    }

    /** Get all errors for a specific row */
    getRowErrors(rowIndex: number): CellError[] {
        const result = this.validationResult();
        if (!result) return [];
        return result.errorsByRow.get(rowIndex) || [];
    }

    removeFile() {
        this.selectedFile.set(null);
        this.selectedFiles.set([]);
        this.parsedRows.set([]);
        this.previewColumns.set([]);
        this.parseError.set(null);
        this.csvParseWarnings.set([]);
        this.validationResult.set(null);
        this.missingRequiredColumnsFields.set(null);
    }

    submit() {
        if (!this.hasValidData() || !this.configId()) return;

        this.isSubmitting.set(true);

        const rows = this.parsedRows().map((r) =>
            stripClientHiddenRowFields(r as Record<string, unknown>)
        );

        if (this.isAppendMode() && this.batchId()) {
            this._smartBatchService.appendSmartBatchRows(this.batchId()!, rows).subscribe({
                next: () => {
                    this._router.navigate(['/smart-batch', this.configId(), 'batch', this.batchId()]);
                },
                error: (err) => {
                    console.error('Failed to append batch rows:', err);
                    this.isSubmitting.set(false);
                },
            });
            return;
        }

        const payload = {
            batchConfiguration: this.configId()!,
            name: this.batchForm.value.name,
            rows,
        };

        this._smartBatchService.createSmartBatch(payload).subscribe({
            next: () => {
                this._router.navigate(['/smart-batch', this.configId()]);
            },
            error: (err) => {
                console.error('Failed to create batch:', err);
                this.isSubmitting.set(false);
            },
        });
    }

    goBack() {
        if (this.isAppendMode() && this.batchId()) {
            this._router.navigate(['/smart-batch', this.configId(), 'batch', this.batchId()]);
            return;
        }
        this._router.navigate(['/smart-batch', this.configId()]);
    }

    formatFileSize(bytes: number): string {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }
}
