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
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { TranslocoModule } from '@jsverse/transloco';
import { firstValueFrom, Subject } from 'rxjs';
import {
    AppFeature,
    BatchConfiguration,
    BatchStep,
    SmartBatch,
    SmartBatchRow,
    SmartBatchService,
} from '../../smart-batch.service';

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
        TranslocoModule,
    ],
    templateUrl: './batch-processing.component.html',
    animations: [fuseAnimations],
})
export class BatchProcessingComponent implements OnInit, OnDestroy {
    private _route = inject(ActivatedRoute);
    private _router = inject(Router);
    private _smartBatchService = inject(SmartBatchService);
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
        return Math.round(((b.completedRows + b.failedRows) / b.totalRows) * 100);
    });

    // Selected row for detail view
    selectedRow = signal<SmartBatchRow | null>(null);

    /** Row details display: 'readable' (label/value pairs) or 'json' (raw JSON) - applies to Input and Step Results */
    detailsViewMode = signal<'readable' | 'json'>('readable');

    /** Brief loading state for the detail panel to avoid perceived lag */
    isLoadingDetail = signal(false);

    /** Filter for record list: 'all' shows both panels, 'completed' or 'failed' shows filtered view */
    recordFilter = signal<'all' | 'completed' | 'failed'>('all');

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
            if (row.status === 'completed' || row.status === 'failed') continue;

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

        const results: Record<number, any> = {};
        const errors: { step: number; message: string; code: string }[] = [];
        let failed = false;

        for (const step of steps) {
            if (this._processingAborted || failed) break;

            this.currentStepIndex.set(step.sequence);

            try {
                // Build params from inputData + step config (no previous results merging)
                const params = this._buildStepParams(row.inputData, step);

                // Get the appFeature details
                const feature = step.appFeature as AppFeature;
                const featureUrl = feature?.url;
                const featureMethod = feature?.method || 'GET';

                if (!featureUrl) {
                    throw new Error(`Step ${step.sequence} has no URL configured`);
                }

                // Make the API call from the frontend with user's JWT
                const response = await firstValueFrom(
                    this._smartBatchService.executeFeatureRequest(featureUrl, featureMethod, params)
                );

                // Store result keyed by step sequence
                results[step.sequence] = response.data;
            } catch (err: any) {
                console.error(`Step ${step.sequence} failed for row ${row.rowIndex}:`, err);
                errors.push({
                    step: step.sequence,
                    message: err?.error?.message || err?.message || 'Step execution failed',
                    code: err?.error?.code || 'STEP_ERROR',
                });

                // For sequential strategy, fail the row on first error
                const config = this.configuration();
                if (config?.mergeStrategy === 'sequential') {
                    failed = true;
                }
            }
        }

        // Update the row in backend
        try {
            const updatedBatch = await firstValueFrom(
                this._smartBatchService.updateBatchRow(batchId, row.rowIndex, {
                    status: failed ? 'failed' : 'completed',
                    results,
                    errors,
                })
            );
            this.batch.set(updatedBatch.data);
        } catch (err) {
            console.error(`Failed to update row ${row.rowIndex}:`, err);
        }
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
    setRecordFilter(filter: 'all' | 'completed' | 'failed'): void {
        this.recordFilter.set(filter);
    }

    getStatusColor(status: string): string {
        switch (status) {
            case 'completed':
                return 'text-emerald-600';
            case 'failed':
                return 'text-red-600';
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

    /**
     * Flatten a step result object into label/value rows for document-style display.
     * Nested objects/arrays are summarized briefly.
     */
    getStepResultFields(data: any): { label: string; value: string }[] {
        if (data == null || typeof data !== 'object') {
            return [{ label: 'Result', value: data != null ? String(data) : '—' }];
        }
        const entries: { label: string; value: string }[] = [];
        for (const key of Object.keys(data)) {
            const label = key
                .replace(/([A-Z])/g, ' $1')
                .replace(/^./, (s) => s.toUpperCase())
                .trim();
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

    getRowStepStatus(row: SmartBatchRow, stepSequence: number): 'pending' | 'completed' | 'failed' {
        // Check if currently processing this step
        if (
            this.isProcessing() &&
            this.currentRowIndex() === row.rowIndex &&
            this.currentStepIndex() === stepSequence
        ) {
            return 'pending'; // Show as in-progress
        }

        if (!row.results || typeof row.results !== 'object') {
            // Check if there's an error for this step
            const stepError = row.errors?.find((e) => e.step === stepSequence);
            if (stepError) return 'failed';
            return 'pending';
        }

        const stepResult = row.results[stepSequence];
        if (stepResult === null || stepResult === undefined) {
            const stepError = row.errors?.find((e) => e.step === stepSequence);
            if (stepError) return 'failed';
            return 'pending';
        }
        return 'completed';
    }
}
