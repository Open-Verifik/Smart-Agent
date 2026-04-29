import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import {
    Component,
    computed,
    ElementRef,
    inject,
    OnDestroy,
    OnInit,
    signal,
    ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HttpErrorResponse } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { firstValueFrom, Subject } from 'rxjs';
import {
    AppFeature,
    BatchConfiguration,
    BatchStep,
    getEffectiveSmartBatchSuccessWhen,
    SmartBatch,
    SmartBatchRow,
    SmartBatchRowStatus,
    SmartBatchService,
    SmartBatchSuccessWhenRule,
} from '../../smart-batch.service';

type RowFilter = 'all' | 'completed' | 'failed' | 'partial';
type VirtualTableItemKind = 'pending' | 'completed' | 'partial' | 'failed';
type VirtualTableItem = {
    kind: VirtualTableItemKind;
    row: SmartBatchRow;
};

/** Readable row detail: plain text/value or embedded PDF preview */
export type StepResultDisplayField =
    | { kind: 'text'; label: string; value: string }
    | { kind: 'pdf'; label: string; dataUrl: string };

type StepExecutionResult =
    | { sequence: number; result: any }
    | { sequence: number; error: { step: number; message: string; code: string } };

@Component({
    selector: 'batch-processing',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatTooltipModule,
        ScrollingModule,
        TranslocoModule,
    ],
    templateUrl: './batch-processing.component.html',
    animations: [fuseAnimations],
})
export class BatchProcessingComponent implements OnInit, OnDestroy {
    private _route = inject(ActivatedRoute);
    private _router = inject(Router);
    private _smartBatchService = inject(SmartBatchService);
    private _sanitizer = inject(DomSanitizer);
    private _transloco = inject(TranslocoService);
    private _destroy$ = new Subject<void>();
    private _processingAborted = false;

    // Route params
    configId = signal<string | null>(null);
    batchId = signal<string | null>(null);

    // Batch data
    batch = signal<SmartBatch | null>(null);
    configuration = signal<BatchConfiguration | null>(null);
    isLoading = signal(true);
    isProcessing = signal(false);
    isStarting = signal(false);
    retryingStepKey = signal<string | null>(null);
    continuingRowIndex = signal<number | null>(null);

    // Current processing state
    currentRowIndex = signal<number | null>(null);
    currentStepIndex = signal<number | null>(null);

    // Configuration steps (sorted by sequence)
    configSteps = computed(() => {
        const config = this.configuration();
        if (!config?.steps) return [];
        return config.steps.filter((s) => s.enabled).sort((a, b) => a.sequence - b.sequence);
    });

    // Computed signals for row filtering
    pendingRows = computed(() => {
        const b = this.batch();
        if (!b?.rows) return [];
        const query = this.searchQuery().toLowerCase().trim();
        let rows = b.rows.filter((r) => r.status === 'pending' || r.status === 'processing');
        if (query) rows = rows.filter((r) => this._matchesSearch(r, query));
        return rows;
    });

    completedRows = computed(() => {
        const b = this.batch();
        if (!b?.rows) return [];
        const query = this.searchQuery().toLowerCase().trim();
        let rows = b.rows.filter((r) => r.status === 'completed');
        if (query) rows = rows.filter((r) => this._matchesSearch(r, query));
        return rows;
    });

    failedRows = computed(() => {
        const b = this.batch();
        if (!b?.rows) return [];
        const query = this.searchQuery().toLowerCase().trim();
        let rows = b.rows.filter((r) => r.status === 'failed');
        if (query) rows = rows.filter((r) => this._matchesSearch(r, query));
        return rows;
    });

    partialRows = computed(() => {
        const b = this.batch();
        if (!b?.rows) return [];
        const query = this.searchQuery().toLowerCase().trim();
        let rows = b.rows.filter((r) => r.status === 'partial');
        if (query) rows = rows.filter((r) => this._matchesSearch(r, query));
        return rows;
    });

    virtualTableItems = computed<VirtualTableItem[]>(() => {
        const toItems = (kind: VirtualTableItemKind, rows: SmartBatchRow[]) =>
            rows.map((row) => ({ kind, row }));

        switch (this.recordFilter()) {
            case 'completed':
                return toItems('completed', this.completedRows());
            case 'partial':
                return toItems('partial', this.partialRows());
            case 'failed':
                return toItems('failed', this.failedRows());
            default:
                return [
                    ...toItems('pending', this.pendingRows()),
                    ...toItems('completed', this.completedRows()),
                    ...toItems('partial', this.partialRows()),
                    ...toItems('failed', this.failedRows()),
                ];
        }
    });

    // Total credits consumed: completedRows × sum of all step prices
    totalCreditsCost = computed(() => {
        const completed = this.completedRows().length;
        if (completed === 0) return 0;
        const steps = this.configSteps();
        const costPerRow = steps.reduce((sum, step) => sum + this.getStepPrice(step), 0);
        return completed * costPerRow;
    });

    // Progress
    progress = computed(() => {
        const b = this.batch();
        if (!b || b.totalRows === 0) return 0;
        const finishedRows =
            (b.completedRows || 0) + (b.failedRows || 0) + (b.partialRows || 0);
        return Math.round((finishedRows / b.totalRows) * 100);
    });

    // Selected row for detail view
    selectedRow = signal<SmartBatchRow | null>(null);

    /** Row details display: 'readable' (label/value pairs) or 'json' (raw JSON) - applies to Input and Step Results */
    detailsViewMode = signal<'readable' | 'json'>('readable');

    /** Brief loading state for the detail panel to avoid perceived lag */
    isLoadingDetail = signal(false);

    /** Filter for record list: 'all' shows all panels; terminal filters narrow by row outcome. */
    recordFilter = signal<RowFilter>('all');

    /** Search query for record filtering */
    searchQuery = signal('');

    @ViewChild('rowDetailPanel') rowDetailPanel!: ElementRef;

    ngOnInit(): void {
        this._route.params.subscribe((params) => {
            this.configId.set(params['configId']);
            this.batchId.set(params['batchId']);
            this._loadConfiguration();
            this._loadBatch();
        });
    }

    ngOnDestroy(): void {
        this._processingAborted = true;
        this._destroy$.next();
        this._destroy$.complete();
    }

    private _loadConfiguration(): void {
        const configId = this.configId();
        if (!configId) return;

        this._smartBatchService.getConfiguration(configId).subscribe({
            next: (res) => {
                this.configuration.set(res.data);
            },
        });
    }

    private _loadBatch(): void {
        const id = this.batchId();
        if (!id) return;

        this.isLoading.set(true);
        this._smartBatchService.getSmartBatch(id).subscribe({
            next: (res) => {
                this.batch.set(res.data);
                this.isLoading.set(false);

                // Auto-resume if status is processing and we are not already processing
                // This "auto-fixes" batches that were stuck or interrupted
                if (res.data.status === 'processing' && !this.isProcessing()) {
                    console.log('Resuming processing for batch:', id);
                    this.isProcessing.set(true);
                    this._processRows();
                }
            },
            error: (err) => {
                console.error('Failed to load batch:', err);
                this.isLoading.set(false);
            },
        });
    }

    async startProcessing(): Promise<void> {
        const batchId = this.batchId();
        if (!batchId) return;

        this.isStarting.set(true);
        this._processingAborted = false;

        try {
            // 1. Tell backend to set status to "processing"
            const res = await firstValueFrom(
                this._smartBatchService.updateSmartBatch(batchId, { status: 'processing' })
            );
            this.batch.set(res.data);
            this.isStarting.set(false);
            this.isProcessing.set(true);

            // 2. Process each row from the frontend
            await this._processRows();
        } catch (err) {
            console.error('Failed to start processing:', err);
            this.isStarting.set(false);
        }
    }

    /**
     * Process all pending rows by making API calls from the frontend
     */
    private async _processRows(): Promise<void> {
        // Wait for configuration to be loaded if it isn't yet
        while (!this.configuration() && !this._processingAborted) {
            await new Promise((resolve) => setTimeout(resolve, 100));
        }

        const currentBatch = this.batch();
        const steps = this.configSteps();

        if (!currentBatch || steps.length === 0) {
            this.isProcessing.set(false);
            return;
        }

        console.log(`Starting/Resuming processing for ${currentBatch.rows.length} rows`);

        for (const row of currentBatch.rows) {
            if (this._processingAborted) break;

            // Re-check status: only process pending or rows that somehow were left as "processing"
            if (this._isTerminalRowStatus(row.status)) continue;

            this.currentRowIndex.set(row.rowIndex);
            await this._processRow(row, steps);
        }

        // Reload batch to get final state
        this._loadBatch();
        this.isProcessing.set(false);
        this.currentRowIndex.set(null);
        this.currentStepIndex.set(null);
    }

    /**
     * Process a single row through all steps
     */
    private async _processRow(row: SmartBatchRow, steps: BatchStep[]): Promise<void> {
        const batchId = this.batchId();
        if (!batchId) return;

        const enabledSequences = steps.map((step) => step.sequence);
        const initialResults = { ...(row.results || {}) };
        const initialErrors = [...(row.errors || [])];
        const stepsToRun = this._getRunnableSteps(steps, initialResults, initialErrors);

        await this._runSteps(row, stepsToRun, initialResults, initialErrors, {
            batchId,
            enabledSequences,
            persistProgress: true,
        });
    }

    /**
     * Persists row snapshot to the API and refreshes local batch + selected row (live UI).
     * @param isFinal When false, row status is `processing`; when true, uses derived terminal outcome.
     */
    private async _persistRowProgress(
        batchId: string,
        rowIndex: number,
        results: Record<number, any>,
        errors: { step: number; message: string; code: string }[],
        enabledSequences: number[],
        isFinal: boolean
    ): Promise<void> {
        const status: SmartBatchRowStatus = isFinal
            ? this._deriveRowOutcome(results, errors, enabledSequences)
            : 'processing';

        const updatedBatch = await firstValueFrom(
            this._smartBatchService.updateBatchRow(batchId, rowIndex, {
                status,
                results,
                errors,
            })
        );
        this.batch.set(updatedBatch.data);
        const sel = this.selectedRow();
        if (sel?.rowIndex === rowIndex) {
            const updatedRow = updatedBatch.data.rows.find((item) => item.rowIndex === rowIndex);
            if (updatedRow) {
                this.selectedRow.set(updatedRow);
            }
        }
    }

    private async _runSteps(
        row: SmartBatchRow,
        steps: BatchStep[],
        initialResults: Record<number, any>,
        initialErrors: { step: number; message: string; code: string }[],
        persist?: {
            batchId: string;
            enabledSequences: number[];
            persistProgress: boolean;
        }
    ): Promise<{
        results: Record<number, any>;
        errors: { step: number; message: string; code: string }[];
    }> {
        const results = { ...initialResults };
        let errors = [...initialErrors];
        const doPersist = persist?.persistProgress && !!persist.batchId;

        for (let i = 0; i < steps.length; i++) {
            if (this._processingAborted) break;

            const step = steps[i];
            this.currentRowIndex.set(row.rowIndex);
            this.currentStepIndex.set(step.sequence);

            const outcome = await this._executeStep(row, step);
            if ('result' in outcome) {
                results[step.sequence] = outcome.result;
                errors = this._withoutStepError(errors, step.sequence);
            } else {
                delete results[step.sequence];
                errors = this._replaceStepError(errors, outcome.error);
            }

            if (doPersist && persist) {
                const isLast = i === steps.length - 1;
                try {
                    await this._persistRowProgress(
                        persist.batchId,
                        row.rowIndex,
                        results,
                        errors,
                        persist.enabledSequences,
                        isLast
                    );
                } catch (err) {
                    console.error(`Failed to persist row ${row.rowIndex} after step ${step.sequence}:`, err);
                }
            }
        }

        return { results, errors };
    }

    private async _executeStep(row: SmartBatchRow, step: BatchStep): Promise<StepExecutionResult> {
        const params = this._buildStepParams(row.inputData, step);
        const feature = step.appFeature as AppFeature;

        try {
            const featureUrl = feature?.url;
            const featureMethod = feature?.method || 'GET';

            if (!featureUrl) {
                throw new Error(`Step ${step.sequence} has no URL configured`);
            }

            const response = await firstValueFrom(
                this._smartBatchService.executeFeatureRequest(featureUrl, featureMethod, params)
            );

            return { sequence: step.sequence, result: response.data };
        } catch (err: unknown) {
            if (
                err instanceof HttpErrorResponse &&
                this._matchesSmartBatchSuccessWhen(feature, err.status, this._httpErrorBodyCode(err))
            ) {
                return {
                    sequence: step.sequence,
                    result: this._normalizeSmartBatchBenignResult(feature, params, err),
                };
            }

            const anyErr = err as { error?: { message?: string; code?: string }; message?: string };
            console.error(`Step ${step.sequence} failed for row ${row.rowIndex}:`, err);
            return {
                sequence: step.sequence,
                error: {
                    step: step.sequence,
                    message: anyErr?.error?.message || anyErr?.message || 'Step execution failed',
                    code: anyErr?.error?.code || 'STEP_ERROR',
                },
            };
        }
    }

    private _httpErrorBodyCode(err: HttpErrorResponse): string | undefined {
        const body = err.error;
        if (body && typeof body === 'object' && 'code' in body) {
            const c = (body as { code?: unknown }).code;
            return c != null ? String(c) : undefined;
        }
        return undefined;
    }

    private _matchesSmartBatchSuccessWhen(
        feature: AppFeature,
        httpStatus: number,
        responseCode: string | undefined
    ): boolean {
        const rules = getEffectiveSmartBatchSuccessWhen(feature);
        if (!rules?.length) return false;

        return rules.some((rule: SmartBatchSuccessWhenRule) => {
            if (rule.httpStatus !== httpStatus) return false;
            const codes = rule.responseCodes;
            if (codes?.length) {
                return responseCode != null && codes.includes(responseCode);
            }
            return true;
        });
    }

    /**
     * Normalized payload stored as step result when an HTTP error is treated as success (matches API "no record" shapes).
     */
    private _normalizeSmartBatchBenignResult(
        feature: AppFeature,
        params: Record<string, unknown>,
        err: HttpErrorResponse
    ): unknown {
        const meta = {
            smartBatchInterpretation: 'no_record',
            benignHttpStatus: err.status,
        };

        if (feature.code === 'colombia_pep_lookup') {
            return {
                documentType: params.documentType,
                documentNumber: params.documentNumber,
                detail: [],
                ...meta,
            };
        }

        if (feature.code === 'api_colombia_contracts') {
            return {
                documentType: params.documentType,
                documentNumber: params.documentNumber,
                contractor: [],
                contracts: [],
                ...meta,
            };
        }

        const out: Record<string, unknown> = { ...meta };
        for (const dep of feature.dependencies || []) {
            const f = dep.field;
            if (f && params[f] !== undefined) out[f] = params[f];
        }
        return out;
    }

    /**
     * Build params for a step from input data and step configuration.
     * Does NOT auto-merge previous results - only uses inputData + parameterDefaults + inputFieldMapping.
     */
    private _buildStepParams(inputData: any, step: BatchStep): any {
        const params: any = { ...inputData };

        // Apply parameter defaults
        if (step.parameterDefaults) {
            Object.assign(params, step.parameterDefaults);
        }

        // Apply input field mappings (explicit mappings from inputData fields to API param names)
        if (step.inputFieldMapping) {
            const mapping = step.inputFieldMapping as Map<string, string> | Record<string, string>;
            if (mapping instanceof Map) {
                mapping.forEach((targetField, sourceField) => {
                    if (inputData[sourceField] !== undefined) {
                        params[targetField] = inputData[sourceField];
                    }
                });
            } else {
                Object.entries(mapping).forEach(([sourceField, targetField]) => {
                    if (inputData[sourceField] !== undefined) {
                        params[targetField] = inputData[sourceField];
                    }
                });
            }
        }

        return params;
    }

    async retryStep(row: SmartBatchRow, step: BatchStep): Promise<void> {
        const batchId = this.batchId();
        if (!batchId || this.isProcessing() || row.status === 'pending' || row.status === 'processing') {
            return;
        }

        const retryKey = this._getRetryKey(row, step);
        const enabledSequences = this.configSteps().map((configStep) => configStep.sequence);

        this.retryingStepKey.set(retryKey);
        this.currentRowIndex.set(row.rowIndex);
        this.currentStepIndex.set(step.sequence);

        const results = { ...(row.results || {}) };
        let errors = [...(row.errors || [])];
        const retryOutcome = await this._executeStep(row, step);

        try {
            if ('result' in retryOutcome) {
                results[step.sequence] = retryOutcome.result;
                errors = this._withoutStepError(errors, step.sequence);
                const remainingSteps = this.configSteps().filter(
                    (configStep) =>
                        configStep.sequence > step.sequence &&
                        !this._hasStepResult(results, configStep.sequence) &&
                        !this.getStepError({ ...row, errors }, configStep.sequence)
                );

                if (remainingSteps.length === 0) {
                    const status = this._deriveRowOutcome(results, errors, enabledSequences);
                    try {
                        const updatedBatch = await firstValueFrom(
                            this._smartBatchService.updateBatchRow(batchId, row.rowIndex, {
                                status,
                                results,
                                errors,
                            })
                        );
                        this.batch.set(updatedBatch.data);
                        const updatedRow = updatedBatch.data.rows.find(
                            (item) => item.rowIndex === row.rowIndex
                        );
                        if (updatedRow) {
                            this.selectedRow.set(updatedRow);
                        }
                    } catch (err) {
                        console.error(`Failed to update row ${row.rowIndex}:`, err);
                    }
                } else {
                    try {
                        await this._persistRowProgress(
                            batchId,
                            row.rowIndex,
                            results,
                            errors,
                            enabledSequences,
                            false
                        );
                    } catch (err) {
                        console.error(`Failed to persist row ${row.rowIndex} after retry:`, err);
                    }

                    const resumed = await this._runSteps(row, remainingSteps, results, errors, {
                        batchId,
                        enabledSequences,
                        persistProgress: true,
                    });
                    Object.assign(results, resumed.results);
                    errors = resumed.errors;
                }
            } else {
                delete results[step.sequence];
                errors = this._replaceStepError(errors, retryOutcome.error);

                const status = this._deriveRowOutcome(results, errors, enabledSequences);
                const updatedBatch = await firstValueFrom(
                    this._smartBatchService.updateBatchRow(batchId, row.rowIndex, {
                        status,
                        results,
                        errors,
                    })
                );
                this.batch.set(updatedBatch.data);
                const updatedRow = updatedBatch.data.rows.find((item) => item.rowIndex === row.rowIndex);
                if (updatedRow) {
                    this.selectedRow.set(updatedRow);
                }
            }
        } catch (err) {
            console.error(`Failed to retry step ${step.sequence} for row ${row.rowIndex}:`, err);
        } finally {
            this.retryingStepKey.set(null);
            this.currentRowIndex.set(null);
            this.currentStepIndex.set(null);
        }
    }

    async continuePendingSteps(row: SmartBatchRow): Promise<void> {
        const batchId = this.batchId();
        if (!batchId || this.isProcessing() || this.isContinuingRow(row)) return;

        const steps = this.configSteps();
        const enabledSequences = steps.map((configStep) => configStep.sequence);
        const initialResults = { ...(row.results || {}) };
        const initialErrors = [...(row.errors || [])];
        const stepsToRun = this._getRunnableSteps(steps, initialResults, initialErrors);

        if (stepsToRun.length === 0) return;

        this.continuingRowIndex.set(row.rowIndex);
        this.currentRowIndex.set(row.rowIndex);

        try {
            await this._runSteps(row, stepsToRun, initialResults, initialErrors, {
                batchId,
                enabledSequences,
                persistProgress: true,
            });
        } catch (err) {
            console.error(`Failed to continue row ${row.rowIndex}:`, err);
        } finally {
            this.continuingRowIndex.set(null);
            this.currentRowIndex.set(null);
            this.currentStepIndex.set(null);
        }
    }

    pauseProcessing(): void {
        this._processingAborted = true;
        this.isProcessing.set(false);
    }

    generateReport(): void {
        const configId = this.configId();
        const batchId = this.batchId();
        if (configId && batchId) {
            this._router.navigate(['/smart-batch', configId, 'batch', batchId, 'report']);
        }
    }

    generateRowReport(row: SmartBatchRow): void {
        const configId = this.configId();
        const batchId = this.batchId();
        if (configId && batchId) {
            this._router.navigate(['/smart-batch', configId, 'batch', batchId, 'report'], {
                queryParams: { rowIndex: row.rowIndex },
            });
        }
    }

    updateSearchQuery(query: string): void {
        this.searchQuery.set(query);
    }

    private _matchesSearch(row: SmartBatchRow, query: string): boolean {
        if (row.inputData && JSON.stringify(row.inputData).toLowerCase().includes(query)) {
            return true;
        }
        if (row.results) {
            return JSON.stringify(row.results).toLowerCase().includes(query);
        }
        return false;
    }

    goBack(): void {
        const configId = this.configId();
        if (configId) {
            this._router.navigate(['/smart-batch', configId]);
        }
    }

    selectRow(row: SmartBatchRow): void {
        this.selectedRow.set(row);
        this.isLoadingDetail.set(true);

        // Brief loading state for perceived performance, then scroll
        setTimeout(() => {
            this.isLoadingDetail.set(false);
            setTimeout(() => {
                this.rowDetailPanel?.nativeElement?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            }, 50);
        }, 150);
    }

    /** Set record filter from tab clicks */
    setRecordFilter(filter: RowFilter): void {
        this.recordFilter.set(filter);
    }

    trackByVirtualRow(_index: number, item: VirtualTableItem): number {
        return item.row.rowIndex;
    }

    getStatusColor(status: string): string {
        switch (status) {
            case 'completed':
                return 'text-emerald-600';
            case 'failed':
                return 'text-red-600';
            case 'partial':
                return 'text-amber-600';
            case 'processing':
                return 'text-amber-600';
            default:
                return 'text-gray-400';
        }
    }

    getStatusIcon(status: string): string {
        switch (status) {
            case 'completed':
                return 'check_circle';
            case 'failed':
                return 'error';
            case 'partial':
                return 'warning';
            case 'processing':
                return 'sync';
            default:
                return 'pending';
        }
    }

    getStepName(step: BatchStep): string {
        const feature = step.appFeature as AppFeature;
        return feature?.name || feature?.code || `Step ${step.sequence}`;
    }

    getStepUrl(step: BatchStep): string {
        const feature = step.appFeature as AppFeature & { endpoint?: string };
        return feature?.url || feature?.endpoint || '';
    }

    getStepPrice(step: BatchStep): number {
        const feature = step.appFeature as AppFeature & {
            price?: number;
            smartCheckPrice?: number;
        };
        return feature?.price ?? feature?.smartCheckPrice ?? 0;
    }

    private _labelFromApiKey(key: string): string {
        return key
            .replace(/([A-Z])/g, ' $1')
            .replace(/^./, (s) => s.toUpperCase())
            .trim();
    }

    private _isPdfBase64PropertyKey(key: string): boolean {
        return key.toLowerCase() === 'pdfbase64';
    }

    private _isPdfApplicationDataUrl(value: string): boolean {
        return value.trim().toLowerCase().startsWith('data:application/pdf;base64,');
    }

    /**
     * True when API key is pdfBase64, or the value is explicitly a PDF data URL.
     */
    private _shouldTreatAsEmbeddedPdf(key: string, raw: unknown): raw is string {
        return (
            typeof raw === 'string' &&
            raw.length > 0 &&
            (this._isPdfBase64PropertyKey(key) || this._isPdfApplicationDataUrl(raw))
        );
    }

    private _normalizePdfDataUrl(raw: string): string {
        const t = raw.trim();
        return t.startsWith('data:') ? t : `data:application/pdf;base64,${t}`;
    }

    private _pdfBase64Payload(dataUrlOrBase64: string): string {
        const t = dataUrlOrBase64.trim();
        const ix = t.indexOf('base64,');
        if (ix !== -1) return t.slice(ix + 7);
        return t;
    }

    sanitizePdfIframeSrc(dataUrl: string): SafeResourceUrl {
        return this._sanitizer.bypassSecurityTrustResourceUrl(dataUrl.trim());
    }

    openPdfInNewTab(dataUrl: string): void {
        const url = this._normalizePdfDataUrl(dataUrl);
        window.open(url, '_blank', 'noopener,noreferrer');
    }

    /** Download anchor using a blob URL (more reliable across browsers than data URLs). */
    downloadPdf(dataUrl: string, filename: string): void {
        const normalized = this._normalizePdfDataUrl(dataUrl);
        let blobUrl: string;
        try {
            const b64 = this._pdfBase64Payload(normalized);
            const binary = atob(b64);
            const bytes = new Uint8Array(binary.length);
            for (let i = 0; i < binary.length; i++) {
                bytes[i] = binary.charCodeAt(i);
            }
            const blob = new Blob([bytes], { type: 'application/pdf' });
            blobUrl = URL.createObjectURL(blob);
        } catch {
            return;
        }
        const anchor = document.createElement('a');
        anchor.href = blobUrl;
        anchor.download = filename || 'document.pdf';
        anchor.click();
        setTimeout(() => URL.revokeObjectURL(blobUrl), 2000);
    }

    getStepPdfFilename(rowIndex: number, stepSequence: number): string {
        return `batch-row-${rowIndex + 1}-step-${stepSequence}.pdf`;
    }

    /**
     * Flatten a step result object into label/value rows for document-style display.
     * Nested objects/arrays are summarized briefly (input data only; use getStepResultDisplayFields for PDF steps).
     */
    getStepResultFields(data: any): { label: string; value: string }[] {
        if (data == null || typeof data !== 'object') {
            return [{ label: 'Result', value: data != null ? String(data) : '—' }];
        }
        const entries: { label: string; value: string }[] = [];
        for (const key of Object.keys(data)) {
            const label = this._labelFromApiKey(key);
            const raw = data[key];
            let value: string;
            if (raw == null) {
                value = '—';
            } else if (Array.isArray(raw)) {
                value =
                    raw.length === 0 ? '—' : `[${raw.length} item${raw.length === 1 ? '' : 's'}]`;
            } else if (typeof raw === 'object') {
                value =
                    typeof raw === 'object' && raw !== null && Object.keys(raw).length > 0
                        ? `{ ${Object.keys(raw).slice(0, 3).join(', ')}${Object.keys(raw).length > 3 ? '…' : ''} }`
                        : '—';
            } else {
                value = String(raw);
            }
            entries.push({ label, value });
        }
        return entries;
    }

    /**
     * Step result rows for readable panel: embedded PDF previews for pdfBase64 / PDF data URLs.
     */
    getStepResultDisplayFields(data: any): StepResultDisplayField[] {
        if (data == null || typeof data !== 'object') {
            return [{ kind: 'text', label: 'Result', value: data != null ? String(data) : '—' }];
        }
        const entries: StepResultDisplayField[] = [];
        for (const key of Object.keys(data)) {
            const raw = data[key];
            const label = this._labelFromApiKey(key);

            if (this._shouldTreatAsEmbeddedPdf(key, raw)) {
                entries.push({
                    kind: 'pdf',
                    label,
                    dataUrl: this._normalizePdfDataUrl(raw),
                });
                continue;
            }

            let value: string;
            if (raw == null) {
                value = '—';
            } else if (Array.isArray(raw)) {
                value =
                    raw.length === 0 ? '—' : `[${raw.length} item${raw.length === 1 ? '' : 's'}]`;
            } else if (typeof raw === 'object') {
                value =
                    typeof raw === 'object' && raw !== null && Object.keys(raw).length > 0
                        ? `{ ${Object.keys(raw).slice(0, 3).join(', ')}${Object.keys(raw).length > 3 ? '…' : ''} }`
                        : '—';
            } else {
                value = String(raw);
            }
            entries.push({ kind: 'text', label, value });
        }
        return entries;
    }

    /** Input data as label/value pairs for readable display; empty if not an object */
    getInputDataFields(): { label: string; value: string }[] {
        const input = this.selectedRow()?.inputData;
        if (input == null || typeof input !== 'object') return [];
        return this.getStepResultFields(input);
    }

    /** Format object as pretty-printed JSON for display */
    formatJson(obj: any): string {
        if (obj == null) return '—';
        try {
            return JSON.stringify(obj, null, 2);
        } catch {
            return String(obj);
        }
    }

    /** Step-result JSON in detail panel; replaces PDF payloads with a short placeholder. */
    formatStepResultJsonForDetail(stepResult: unknown): string {
        if (stepResult == null) return '—';
        if (typeof stepResult !== 'object') {
            try {
                return JSON.stringify(stepResult, null, 2);
            } catch {
                return String(stepResult);
            }
        }
        const placeholder = this._transloco.translate('batchProcessing.pdfOmittedForJsonView');
        const copy: Record<string, unknown> = {};
        const src = stepResult as Record<string, unknown>;
        for (const key of Object.keys(src)) {
            const raw = src[key];
            copy[key] = this._shouldTreatAsEmbeddedPdf(key, raw)
                ? placeholder
                : raw;
        }
        try {
            return JSON.stringify(copy, null, 2);
        } catch {
            return this.formatJson(stepResult);
        }
    }

    getRowStepStatus(row: SmartBatchRow, stepSequence: number): 'pending' | 'completed' | 'failed' {
        if (
            this.currentRowIndex() === row.rowIndex &&
            this.currentStepIndex() === stepSequence
        ) {
            return 'pending';
        }

        if (!row.results || typeof row.results !== 'object') {
            // Check if there's an error for this step
            const stepError = row.errors?.find((e) => e.step === stepSequence);
            if (stepError) return 'failed';
            return 'pending';
        }

        if (!this._hasStepResult(row.results, stepSequence)) {
            const stepError = row.errors?.find((e) => e.step === stepSequence);
            if (stepError) return 'failed';
            return 'pending';
        }
        return 'completed';
    }

    getStepError(row: SmartBatchRow, stepSequence: number) {
        return row.errors?.find((error) => error.step === stepSequence);
    }

    hasPendingSteps(row: SmartBatchRow): boolean {
        return this.getPendingStepCount(row) > 0;
    }

    getPendingStepCount(row: SmartBatchRow): number {
        return this._getRunnableSteps(this.configSteps(), row.results || {}, row.errors || []).length;
    }

    isRetryingStep(row: SmartBatchRow, step: BatchStep): boolean {
        return this.retryingStepKey() === this._getRetryKey(row, step);
    }

    isContinuingRow(row: SmartBatchRow): boolean {
        return this.continuingRowIndex() === row.rowIndex;
    }

    private _deriveRowOutcome(
        results: Record<number, any>,
        errors: { step: number; message: string; code: string }[],
        enabledSequences: number[]
    ): SmartBatchRowStatus {
        const completedSteps = enabledSequences.filter((sequence) =>
            this._hasStepResult(results, sequence)
        ).length;

        if (completedSteps === enabledSequences.length && errors.length === 0) return 'completed';
        if (completedSteps === 0) return 'failed';
        return 'partial';
    }

    private _withoutStepError(
        errors: { step: number; message: string; code: string }[],
        stepSequence: number
    ): { step: number; message: string; code: string }[] {
        return errors.filter((error) => error.step !== stepSequence);
    }

    private _replaceStepError(
        errors: { step: number; message: string; code: string }[],
        error: { step: number; message: string; code: string }
    ): { step: number; message: string; code: string }[] {
        return [...this._withoutStepError(errors, error.step), error];
    }

    private _getRunnableSteps(
        steps: BatchStep[],
        results: Record<number, any>,
        errors: { step: number; message: string; code: string }[]
    ): BatchStep[] {
        return steps.filter(
            (step) =>
                !this._hasStepResult(results, step.sequence) &&
                !errors.some((error) => error.step === step.sequence)
        );
    }

    private _hasStepResult(results: Record<number, any> | null | undefined, stepSequence: number): boolean {
        return results?.[stepSequence] !== undefined && results?.[stepSequence] !== null;
    }

    private _getRetryKey(row: SmartBatchRow, step: BatchStep): string {
        return `${row.rowIndex}:${step.sequence}`;
    }

    private _isTerminalRowStatus(status: SmartBatchRowStatus): boolean {
        return status === 'completed' || status === 'failed' || status === 'partial';
    }
}
