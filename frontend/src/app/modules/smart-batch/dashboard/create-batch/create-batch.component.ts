import { CommonModule } from '@angular/common';
import { Component, computed, inject, OnInit, signal, ViewEncapsulation } from '@angular/core';
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
import {
    detectBestCsvDelimiter,
    getDelimiterMismatchHintKind,
    parseCSVLine,
    stripBom,
} from 'app/core/utils/csv-parse.util';
import { sanitizeMatrix, sanitizePapaObjectRows } from 'app/core/utils/spreadsheet-sanitize.util';
import * as XLSX from 'xlsx';
import { BatchConfiguration, SmartBatchService } from '../../smart-batch.service';
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
}

/** Represents a validation error for a specific cell */
interface CellError {
    rowIndex: number;
    column: string;
    type: 'missing' | 'invalid_enum' | 'invalid_type';
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

    private readonly TUTORIAL_STORAGE_KEY = 'smart-batch-tutorial-shown';

    configId = signal<string | null>(null);
    configuration = signal<BatchConfiguration | null>(null);
    isLoading = signal(true);
    isSubmitting = signal(false);
    showRequiredFieldsPanel = signal(true);

    // Form
    batchForm: FormGroup = this._formBuilder.group({
        name: ['', [Validators.required, Validators.maxLength(150)]],
    });

    /** Signal mirror of form validity so computeds re-run when form state changes (any order). */
    batchFormValid = signal(false);

    // File upload state
    selectedFile = signal<File | null>(null);
    isDragging = signal(false);
    parseError = signal<string | null>(null);
    parsedRows = signal<any[]>([]);
    previewColumns = signal<string[]>([]);
    /** Non-fatal CSV parse notices (skipped rows, delimiter hints). */
    csvParseWarnings = signal<string[]>([]);

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
                    // Only add if not already present or if this one is required
                    if (!fieldsMap.has(dep.field) || dep.required) {
                        fieldsMap.set(dep.field, {
                            field: dep.field,
                            required: dep.required || false,
                            stepName: feature?.name || 'Unknown Step',
                            stepSequence: step.sequence,
                            enumValues: dep.enum || undefined,
                            type: dep.type || 'string',
                            description: dep.description || undefined,
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

    // Computed: All unique fields (required + optional)
    allFields = computed(() => {
        return this.requiredFields();
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

    // Computed: Summary of errors for display
    errorSummary = computed(() => {
        const result = this.validationResult();
        if (!result || result.isValid) return null;

        const missingCount = result.errors.filter((e) => e.type === 'missing').length;
        const invalidEnumCount = result.errors.filter((e) => e.type === 'invalid_enum').length;
        const rowsWithErrors = new Set(result.errors.map((e) => e.rowIndex)).size;

        return {
            totalErrors: result.errors.length,
            missingCount,
            invalidEnumCount,
            rowsWithErrors,
        };
    });

    // Computed (uses batchFormValid signal so it re-runs when name is filled in any order)
    hasValidData = computed(() => {
        this.batchFormValid(); // depend on signal so we re-check when form validity changes
        const validation = this.validationResult();
        const basicValid = this.batchForm.valid && this.parsedRows().length > 0;
        return basicValid && (!validation || validation.isValid);
    });

    /** Reason the Create Batch button is disabled (for tooltip) */
    createBatchDisabledReason = computed(() => {
        this.batchFormValid(); // depend on signal so tooltip updates when name is filled
        if (this.isSubmitting()) return 'Creating batch...';
        if (this.parseError()) return this.parseError()!;
        if (this.parsedRows().length === 0) return 'Upload a file with data to continue';
        if (!this.batchForm.get('name')?.value?.trim()) return 'Enter a batch name to continue';
        const validation = this.validationResult();
        if (validation && !validation.isValid) return 'Fix the errors in your data to continue';
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
        if (id) {
            this.configId.set(id);
            this.loadConfiguration(id);
        } else {
            this._router.navigate(['/smart-batch']);
        }

        // Check if we should show the tutorial
        this.checkAndShowTutorial();
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

        // Get all required fields as headers
        const headers = this.requiredFields().map((f) => f.field);

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
            this.handleFile(files[0]);
        }
    }

    onFileSelected(event: Event) {
        const input = event.target as HTMLInputElement;
        if (input.files && input.files.length > 0) {
            this.handleFile(input.files[0]);
        }
    }

    handleFile(file: File) {
        this.selectedFile.set(file);
        this.parseError.set(null);
        this.csvParseWarnings.set([]);
        this.parsedRows.set([]);
        this.previewColumns.set([]);

        const extension = file.name.split('.').pop()?.toLowerCase();

        if (extension === 'csv') {
            this.parseCSV(file);
        } else if (extension === 'jsonl') {
            this.parseJSONL(file);
        } else if (extension === 'xlsx' || extension === 'xls') {
            this.parseXLSX(file);
        } else {
            this.parseError.set(`Unsupported file format: .${extension}`);
        }
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
    ): string[] {
        const messages: string[] = [];

        if (skippedRowCount > 0) {
            messages.push(
                this._transloco.translate('createBatch.skippedRowsNotice', {
                    skipped: skippedRowCount,
                    total: dataLineCount,
                })
            );
        }

        const hint = getDelimiterMismatchHintKind(headerLine, parsedColumnCount);
        if (hint === 'semicolon') {
            messages.push(this._transloco.translate('createBatch.delimiterHintSemicolon'));
        } else if (hint === 'tab') {
            messages.push(this._transloco.translate('createBatch.delimiterHintTab'));
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
        parseWarnings: string[]
    ): void {
        const restricted = this.restrictRowsToConfiguredFields(fieldOrder, rows);
        if (restricted.ok === false) {
            this.parseError.set(restricted.errorMessage);
            this.previewColumns.set([]);
            this.parsedRows.set([]);
            this.validationResult.set(null);
            this.csvParseWarnings.set(parseWarnings);
            return;
        }

        let warnings = parseWarnings;
        if (restricted.droppedHeaders.length > 0) {
            warnings = [
                ...warnings,
                this._transloco.translate('createBatch.strippedUnknownColumnsNotice', {
                    count: restricted.droppedHeaders.length,
                    columns: this.formatDroppedColumnList(restricted.droppedHeaders),
                }),
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
        const requiredFieldDefs = this.requiredFields();
        const errors: CellError[] = [];

        // First check: Are all required columns present?
        const missingColumns = requiredFieldDefs
            .filter((f) => f.required)
            .filter((f) => !uploadedHeaders.some((h) => h.toLowerCase() === f.field.toLowerCase()));

        if (missingColumns.length > 0) {
            // If columns are missing, we can't validate rows - just set error message
            const fieldNames = missingColumns.map((f) => f.field).join(', ');
            this.parseError.set(
                `Missing required columns: ${fieldNames}. Please download the template for the correct format.`
            );
            this.validationResult.set({
                isValid: false,
                errors: [],
                errorsByRow: new Map(),
                errorsByColumn: new Map(),
            });
            return;
        }

        // Create a lookup for field definitions by field name (case-insensitive)
        const fieldDefMap = new Map<string, RequiredField>();
        requiredFieldDefs.forEach((f) => {
            fieldDefMap.set(f.field.toLowerCase(), f);
        });

        // Validate each row
        rows.forEach((row, rowIndex) => {
            // Check each required field
            requiredFieldDefs.forEach((fieldDef) => {
                const columnKey = this.findColumnKey(row, fieldDef.field);
                const value = columnKey ? row[columnKey] : undefined;

                // Check for missing required values
                if (fieldDef.required && this.isEmptyValue(value)) {
                    errors.push({
                        rowIndex,
                        column: fieldDef.field,
                        type: 'missing',
                        message: `"${fieldDef.field}" is required but empty`,
                    });
                }

                // Check for invalid enum values (only if value is present)
                if (
                    fieldDef.enumValues &&
                    fieldDef.enumValues.length > 0 &&
                    !this.isEmptyValue(value)
                ) {
                    const normalizedValue = String(value).trim().toLowerCase();
                    const validValues = fieldDef.enumValues.map((v) => v.toLowerCase());

                    if (!validValues.includes(normalizedValue)) {
                        errors.push({
                            rowIndex,
                            column: fieldDef.field,
                            type: 'invalid_enum',
                            message: `"${value}" is not a valid value. Expected: ${fieldDef.enumValues.join(', ')}`,
                            expectedValues: fieldDef.enumValues,
                        });
                    }
                }
            });
        });

        this.appendDocumentNumberTypePairErrors(requiredFieldDefs, rows, errors);

        // Build error maps for quick lookup
        const errorsByRow = new Map<number, CellError[]>();
        const errorsByColumn = new Map<string, CellError[]>();

        errors.forEach((error) => {
            // By row
            if (!errorsByRow.has(error.rowIndex)) {
                errorsByRow.set(error.rowIndex, []);
            }
            errorsByRow.get(error.rowIndex)!.push(error);

            // By column
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

        // Set parse error message if there are errors
        if (errors.length > 0) {
            const missingCount = errors.filter((e) => e.type === 'missing').length;
            const enumCount = errors.filter((e) => e.type === 'invalid_enum').length;
            const rowsAffected = new Set(errors.map((e) => e.rowIndex)).size;

            let errorMsg = `Found ${errors.length} issue${errors.length > 1 ? 's' : ''} in ${rowsAffected} row${rowsAffected > 1 ? 's' : ''}: `;
            const parts: string[] = [];
            if (missingCount > 0)
                parts.push(`${missingCount} missing value${missingCount > 1 ? 's' : ''}`);
            if (enumCount > 0) parts.push(`${enumCount} invalid value${enumCount > 1 ? 's' : ''}`);
            errorMsg += parts.join(', ') + '. Check the highlighted cells below.';

            this.parseError.set(errorMsg);
        } else {
            this.parseError.set(null);
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

    /** Placeholders treated as empty for document number/type pairing only */
    private static readonly PAIR_VALUE_PLACEHOLDERS = new Set(['-', 'n/a', 'na']);

    /**
     * True when the value is empty or a common spreadsheet placeholder (-, n/a).
     * Used only for paired documentNumber + documentType validation.
     */
    private isEffectivelyEmptyForPairing(value: unknown): boolean {
        if (value === null || value === undefined) return true;
        const normalized = String(value).trim();
        if (!normalized) return true;
        return CreateBatchComponent.PAIR_VALUE_PLACEHOLDERS.has(normalized.toLowerCase());
    }

    /**
     * When both fields exist in the batch configuration, each row must have both filled or both empty.
     */
    private appendDocumentNumberTypePairErrors(
        requiredFieldDefs: RequiredField[],
        rows: unknown[],
        errors: CellError[]
    ): void {
        const configured = new Set(requiredFieldDefs.map((f) => f.field.toLowerCase()));
        const docNumKey = CreateBatchComponent.DOCUMENT_NUMBER_FIELD.toLowerCase();
        const docTypeKey = CreateBatchComponent.DOCUMENT_TYPE_FIELD.toLowerCase();
        if (!configured.has(docNumKey) || !configured.has(docTypeKey)) {
            return;
        }

        rows.forEach((row, rowIndex) => {
            const r = row as Record<string, unknown>;
            const numKey = this.findColumnKey(r, CreateBatchComponent.DOCUMENT_NUMBER_FIELD);
            const typeKey = this.findColumnKey(r, CreateBatchComponent.DOCUMENT_TYPE_FIELD);
            const numRaw = numKey ? r[numKey] : undefined;
            const typeRaw = typeKey ? r[typeKey] : undefined;
            const numEmpty = this.isEffectivelyEmptyForPairing(numRaw);
            const typeEmpty = this.isEffectivelyEmptyForPairing(typeRaw);

            if (numEmpty === typeEmpty) {
                return;
            }

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
        });
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
        this.parsedRows.set([]);
        this.previewColumns.set([]);
        this.parseError.set(null);
        this.csvParseWarnings.set([]);
        this.validationResult.set(null);
    }

    submit() {
        if (!this.hasValidData() || !this.configId()) return;

        this.isSubmitting.set(true);

        const payload = {
            batchConfiguration: this.configId()!,
            name: this.batchForm.value.name,
            rows: this.parsedRows(),
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
