import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import {
    Component,
    computed,
    effect,
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
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { firstValueFrom, Subject } from 'rxjs';
import * as XLSX from 'xlsx';
import {
    escapeCsvRow,
    getBatchInputCsvHeaders,
    inputDataValueForCsvCell,
} from '../../batch-input-csv.util';
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
import { getStepDisplayFields } from '../../step-result-presenters/registry';

type RowFilter = 'all' | 'pending' | 'completed' | 'failed' | 'partial';

/** Label/tooltip i18n keys + visual accent for the tab-scoped inputs export menu trigger */
type InputsExportButtonUi = {
    labelKey: string;
    tooltipKey: string;
    accentClass: string;
    dotClass: string;
    iconClass: string;
};
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

/** Max simultaneous Verifik API calls per batch when parallel mode applies (single-step batches only). */
const SMART_BATCH_PARALLEL_MAX = 5;
const SMART_BATCH_PARALLEL_MIN = 1;
const SMART_BATCH_PARALLEL_DEFAULT = 1;
const SMART_BATCH_PARALLEL_CONCURRENCY_STORAGE_KEY = 'smartBatch.parallelRowConcurrency';

/** Colombia RUES batch steps that accept an optional/query `category` (codes match seeded AppFeatures). */
const RUES_SMART_BATCH_FEATURE_CODES = new Set<string>([
    'colombia_api_rues',
    'colombia_api_rues_full',
    'colombia_api_rues_v3',
    'colombia_api_rues_full_v3',
]);

/** Fallback when AppFeature.dependencies[].category.enum is absent (v2+v3 middleware union). */
const RUES_CATEGORY_FALLBACK_SORTED = [
    'RM',
    'PROP',
    'RUNEOL',
    'RNT',
    'ESAL',
    'ESOL',
    'RESAL',
    'JUEGOS',
    'EXTRANJERAS',
];

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
        MatSnackBarModule,
        MatTooltipModule,
        MatMenuModule,
        MatSelectModule,
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
    private _snack = inject(MatSnackBar);
    private _destroy$ = new Subject<void>();
    private _processingAborted = false;
    /**
     * Serialized chain for all `updateBatchRow` calls so concurrent row workers never overlap parent
     * batch counter updates on the server (stale snapshot races).
     */
    private _persistChain: Promise<void> = Promise.resolve();

    /** Effective parallel row workers for the current run (`1` unless single-step batch). */
    parallelRowConcurrency = signal(1);

    /** User preference for parallel row workers (single-step batches only); persisted in localStorage. */
    parallelRowsPreference = signal(SMART_BATCH_PARALLEL_DEFAULT);

    /** Options shown in the parallel workers selector (1 … MAX). */
    readonly parallelConcurrencyOptions: readonly number[] = Array.from(
        { length: SMART_BATCH_PARALLEL_MAX - SMART_BATCH_PARALLEL_MIN + 1 },
        (_, i) => i + SMART_BATCH_PARALLEL_MIN
    );

    isSingleStepBatch = computed(() => this.configSteps().length === 1);

    /** Row indexes currently executing API steps (parallel mode). */
    processingActiveRowIndexes = signal<readonly number[]>([]);

    // Route params
    configId = signal<string | null>(null);
    batchId = signal<string | null>(null);

    // Batch data
    batch = signal<SmartBatch | null>(null);
    configuration = signal<BatchConfiguration | null>(null);
    isLoading = signal(true);
    isProcessing = signal(false);
    isStarting = signal(false);
    /** True while persisting pause (`pending`) to the API. */
    isPausing = signal(false);
    retryingStepKey = signal<string | null>(null);
    continuingRowIndex = signal<number | null>(null);
    /** True while persisting RUES category / inputData patch for the selected row. */
    savingRuesCategory = signal(false);
    /** When true, show mat-select for category with Apply/Cancel instead of read-only row. */
    ruesCategoryEditing = signal(false);
    /** Draft value while editing RUES category (Apply persists to server). */
    ruesCategoryDraft = signal('');

    /** `{rowIndex}_{stepSequence}` while that step JSON block shows “Copied” feedback */
    batchJsonCopyFeedbackKey = signal<string | null>(null);
    private _batchJsonCopyClearTimer: ReturnType<typeof setTimeout> | null = null;

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

    /** Pending/processing rows ignoring search — used for tab counts and input export. */
    pendingRowsIgnoringSearch = computed(() => {
        const b = this.batch();
        if (!b?.rows) return [];
        return b.rows.filter((r) => r.status === 'pending' || r.status === 'processing');
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

    /** Failed rows ignoring search — tab counts and Failed filter use the full failure set. */
    failedRowsIgnoringSearch = computed(() => {
        const b = this.batch();
        if (!b?.rows) return [];
        return b.rows.filter((r) => r.status === 'failed');
    });

    /**
     * Whether the user can bulk- or single-retry failed rows (not during an active client/server run).
     */
    canOperateRetryFailed = computed(() => {
        const b = this.batch();
        if (!b?.rows?.length) return false;
        if (this.failedRowsIgnoringSearch().length === 0) return false;
        if (b.status === 'processing') return false;
        if (this.isProcessing() || this.isStarting()) return false;
        return true;
    });

    /** Set while resetting one failed row and starting processing */
    retryingFailedRowIndex = signal<number | null>(null);

    /**
     * Rows whose input columns are exported to CSV for the active tab (ignores search).
     */
    rowsForInputsCsvExport = computed(() => {
        const b = this.batch();
        if (!b?.rows) return [];
        switch (this.recordFilter()) {
            case 'pending':
                return this.pendingRowsIgnoringSearch();
            case 'completed':
                return b.rows.filter((r) => r.status === 'completed');
            case 'failed':
                return b.rows.filter((r) => r.status === 'failed');
            case 'partial':
                return b.rows.filter((r) => r.status === 'partial');
            default:
                return [...b.rows];
        }
    });

    canDownloadInputs = computed(
        () => !!this.configuration() && this.rowsForInputsCsvExport().length > 0
    );

    /** Mirrors active record tab so the export trigger reads and looks distinct per filter */
    inputsExportButtonUi = computed<InputsExportButtonUi>(() => {
        switch (this.recordFilter()) {
            case 'pending':
                return {
                    labelKey: 'batchProcessing.downloadInputsPending',
                    tooltipKey: 'batchProcessing.downloadInputsTooltipPending',
                    accentClass: '!border-blue-500 !text-blue-800 hover:!bg-blue-50/90',
                    dotClass: 'bg-blue-500',
                    iconClass: 'text-blue-600',
                };
            case 'completed':
                return {
                    labelKey: 'batchProcessing.downloadInputsSuccessful',
                    tooltipKey: 'batchProcessing.downloadInputsTooltipSuccessful',
                    accentClass: '!border-emerald-500 !text-emerald-800 hover:!bg-emerald-50/90',
                    dotClass: 'bg-emerald-500',
                    iconClass: 'text-emerald-600',
                };
            case 'failed':
                return {
                    labelKey: 'batchProcessing.downloadInputsFailed',
                    tooltipKey: 'batchProcessing.downloadInputsTooltipFailed',
                    accentClass: '!border-red-500 !text-red-800 hover:!bg-red-50/90',
                    dotClass: 'bg-red-500',
                    iconClass: 'text-red-600',
                };
            case 'partial':
                return {
                    labelKey: 'batchProcessing.downloadInputsPartial',
                    tooltipKey: 'batchProcessing.downloadInputsTooltipPartial',
                    accentClass: '!border-amber-500 !text-amber-900 hover:!bg-amber-50/90',
                    dotClass: 'bg-amber-500',
                    iconClass: 'text-amber-600',
                };
            default:
                return {
                    labelKey: 'batchProcessing.downloadInputsAll',
                    tooltipKey: 'batchProcessing.downloadInputsTooltipAll',
                    accentClass: '!border-slate-400 !text-slate-800 hover:!bg-slate-50/90',
                    dotClass: 'bg-slate-500',
                    iconClass: 'text-indigo-600',
                };
        }
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
            case 'pending':
                return toItems('pending', this.pendingRows());
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
        const finishedRows = (b.completedRows || 0) + (b.failedRows || 0) + (b.partialRows || 0);
        return Math.round((finishedRows / b.totalRows) * 100);
    });

    /** Any finished rows on the batch (completed / failed / partial) — use “Resume” vs “Start” copy. */
    hasBatchRunProgress = computed(() => {
        const b = this.batch();
        if (!b) return false;
        return (b.completedRows ?? 0) + (b.failedRows ?? 0) + (b.partialRows ?? 0) > 0;
    });

    // Selected row for detail view
    selectedRow = signal<SmartBatchRow | null>(null);

    /**
     * Keep the detail panel row in sync with `batch()` after any `batch.set()` replaces `rows`
     * (e.g. silent refresh); avoids stale `results` / wrong step status on the selected snapshot.
     */
    private readonly _syncSelectedRowWithBatch = effect(() => {
        const batch = this.batch();
        const selected = this.selectedRow();
        if (selected == null || !batch?.rows?.length) {
            return;
        }
        const next = batch.rows.find((r) => r.rowIndex === selected.rowIndex);
        if (!next) {
            this.selectedRow.set(null);
            return;
        }
        if (next !== selected) {
            this.selectedRow.set(next);
        }
    });

    /** Row details display: 'readable' (label/value pairs) or 'json' (raw JSON) - applies to Input and Step Results */
    detailsViewMode = signal<'readable' | 'json'>('readable');

    /** Brief loading state for the detail panel to avoid perceived lag */
    isLoadingDetail = signal(false);

    /** Filter for record list: 'all' shows all panels; terminal filters narrow by row outcome. */
    recordFilter = signal<RowFilter>('all');

    /** Search query for record filtering */
    searchQuery = signal('');

    /**
     * True when this batch config uses Colombia RUES with a `category` input dependency (optional query param).
     */
    canEditRuesCategory = computed(() =>
        this.configSteps().some((step) => {
            const feat = step.appFeature as AppFeature & {
                dependencies?: { field?: string; enum?: string[] }[];
            };
            return (
                !!feat?.code &&
                RUES_SMART_BATCH_FEATURE_CODES.has(feat.code) &&
                (feat.dependencies || []).some((d) => d.field === 'category')
            );
        })
    );

    /** Category enum from AppFeatures when present, else middleware-aligned fallback strings. */
    ruesCategorySelectOptionsResolved = computed(() => {
        const union = new Set<string>();
        for (const step of this.configSteps()) {
            const feat = step.appFeature as AppFeature & {
                dependencies?: { field?: string; enum?: string[] }[];
            };
            if (!feat?.code || !RUES_SMART_BATCH_FEATURE_CODES.has(feat.code)) continue;
            const catDep = (feat.dependencies || []).find((d) => d.field === 'category');
            if (catDep?.enum?.length) {
                catDep.enum.forEach((e) => union.add(String(e)));
            }
        }
        return union.size > 0
            ? [...union].sort((a, b) => a.localeCompare(b))
            : [...RUES_CATEGORY_FALLBACK_SORTED];
    });

    @ViewChild('rowDetailPanel') rowDetailPanel!: ElementRef;

    ngOnInit(): void {
        this._loadParallelRowsPreferenceFromStorage();
        this._route.params.subscribe((params) => {
            this.configId.set(params['configId']);
            this.batchId.set(params['batchId']);
            this._loadConfiguration();
            this._loadBatch();
        });
    }

    ngOnDestroy(): void {
        this._processingAborted = true;
        this._clearBatchJsonCopyTimer();
        this._destroy$.next();
        this._destroy$.complete();
    }

    private _loadParallelRowsPreferenceFromStorage(): void {
        let initial = SMART_BATCH_PARALLEL_DEFAULT;
        try {
            const raw = localStorage.getItem(SMART_BATCH_PARALLEL_CONCURRENCY_STORAGE_KEY);
            if (raw != null) {
                const parsed = parseInt(raw, 10);
                if (!Number.isNaN(parsed)) {
                    initial = Math.max(
                        SMART_BATCH_PARALLEL_MIN,
                        Math.min(SMART_BATCH_PARALLEL_MAX, parsed)
                    );
                }
            }
        } catch {
            /* ignore */
        }
        this.parallelRowsPreference.set(initial);
    }

    /**
     * Updates parallel worker preference (single-step batches only) and persists to localStorage.
     */
    setParallelRowsPreference(n: number): void {
        const rounded = Math.round(Number(n));
        const v = Math.max(
            SMART_BATCH_PARALLEL_MIN,
            Math.min(
                SMART_BATCH_PARALLEL_MAX,
                Number.isNaN(rounded) ? SMART_BATCH_PARALLEL_DEFAULT : rounded
            )
        );
        this.parallelRowsPreference.set(v);
        try {
            localStorage.setItem(SMART_BATCH_PARALLEL_CONCURRENCY_STORAGE_KEY, String(v));
        } catch {
            /* ignore */
        }
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

    /**
     * @param options.silent When true, skip full-page loading spinner (e.g. refresh after `_processRows`).
     */
    private _loadBatch(options?: { silent?: boolean }): void {
        const id = this.batchId();
        if (!id) return;

        const silent = options?.silent === true;
        if (!silent) {
            this.isLoading.set(true);
        }
        this._smartBatchService.getSmartBatch(id).subscribe({
            next: (res) => {
                this.batch.set(res.data);
                if (!silent) {
                    this.isLoading.set(false);
                }
            },
            error: (err) => {
                console.error('Failed to load batch:', err);
                if (!silent) {
                    this.isLoading.set(false);
                }
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
     * Serialize every smart-batch row PUT against races on parent `completedRows` / aggregates.
     */
    private async _serializedBatchRowMutation<T>(mutation: () => Promise<T>): Promise<T> {
        const pending = this._persistChain.then(() => mutation());
        this._persistChain = pending.then(
            () => undefined,
            () => undefined
        );
        return pending;
    }

    private async _awaitPersistDrain(): Promise<void> {
        await this._persistChain.catch(() => undefined);
    }

    /**
     * Process all pending rows by making API calls from the frontend.
     * Multi-step configs run one row at a time (sequential workers) because mid-row resume and
     * persist-between-steps semantics are ambiguous with concurrency; parallel mode is enabled only when
     * there is exactly one enabled step (see `parallelRowsPreference` capped by MIN/MAX).
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

        this._persistChain = Promise.resolve();

        const useParallelWorkers = steps.length === 1 && !this._processingAborted;
        const requested = Math.max(
            SMART_BATCH_PARALLEL_MIN,
            Math.min(SMART_BATCH_PARALLEL_MAX, this.parallelRowsPreference())
        );
        const parallel = useParallelWorkers ? requested : 1;

        this.parallelRowConcurrency.set(parallel);
        this.processingActiveRowIndexes.set([]);

        const rowsSnapshot = [...currentBatch.rows];
        const rowsToProcess = rowsSnapshot.filter((r) => !this._isTerminalRowStatus(r.status));

        console.log(
            `Starting/Resuming processing for ${currentBatch.rows.length} rows (${parallel === 1 ? 'sequential' : `up to ${parallel} parallel`})`
        );

        if (parallel === 1) {
            for (const row of rowsToProcess) {
                if (this._processingAborted) break;

                this.currentRowIndex.set(row.rowIndex);
                await this._processRow(row, steps);
            }
        } else {
            await this._processRowsWithConcurrency(rowsToProcess, steps, parallel);
        }

        await this._awaitPersistDrain();

        this._loadBatch({ silent: true });
        this.isProcessing.set(false);
        this.currentRowIndex.set(null);
        this.currentStepIndex.set(null);
        this.parallelRowConcurrency.set(1);
        this.processingActiveRowIndexes.set([]);
    }

    /** Parallel worker pool over rows (single-step batches only). */
    private async _processRowsWithConcurrency(
        rows: SmartBatchRow[],
        steps: BatchStep[],
        concurrency: number
    ): Promise<void> {
        if (rows.length === 0 || this._processingAborted) return;

        const workerCount = Math.min(concurrency, rows.length);
        let next = 0;
        const active = new Set<number>();

        const runOneWorker = async (): Promise<void> => {
            while (!this._processingAborted) {
                const idx = next++;
                if (idx >= rows.length) return;

                const row = rows[idx];
                active.add(row.rowIndex);
                this.processingActiveRowIndexes.set([...active].sort((a, b) => a - b));

                try {
                    await this._processRow(row, steps);
                } finally {
                    active.delete(row.rowIndex);
                    this.processingActiveRowIndexes.set([...active].sort((a, b) => a - b));
                }
            }
        };

        await Promise.all(Array.from({ length: workerCount }, () => runOneWorker()));
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

        return this._serializedBatchRowMutation(async () => {
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
                const updatedRow = updatedBatch.data.rows.find(
                    (item) => item.rowIndex === rowIndex
                );
                if (updatedRow) {
                    this.selectedRow.set(updatedRow);
                }
            }
        });
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
        const showFineGrainedRowStepUi = this.parallelRowConcurrency() <= 1;

        for (let i = 0; i < steps.length; i++) {
            if (this._processingAborted) break;

            const step = steps[i];
            if (showFineGrainedRowStepUi) {
                this.currentRowIndex.set(row.rowIndex);
                this.currentStepIndex.set(step.sequence);
            }

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
                    console.error(
                        `Failed to persist row ${row.rowIndex} after step ${step.sequence}:`,
                        err
                    );
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
                this._matchesSmartBatchSuccessWhen(
                    feature,
                    err.status,
                    this._httpErrorBodyCode(err)
                )
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
        if (
            !batchId ||
            this.isProcessing() ||
            row.status === 'pending' ||
            row.status === 'processing'
        ) {
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
                        await this._serializedBatchRowMutation(async () => {
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
                        });
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
                try {
                    await this._serializedBatchRowMutation(async () => {
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
                    });
                } catch (err) {
                    console.error(`Failed to update row ${row.rowIndex}:`, err);
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

    async pauseProcessing(): Promise<void> {
        const batchId = this.batchId();
        if (!batchId) return;

        this._processingAborted = true;
        this.isProcessing.set(false);

        this.isPausing.set(true);
        try {
            const res = await firstValueFrom(
                this._smartBatchService.updateSmartBatch(batchId, { status: 'pending' })
            );
            this.batch.set(res.data);
        } catch (err) {
            console.error('Failed to pause batch:', err);
            this._snack.open(
                this._transloco.translate('batchProcessing.pauseFailed'),
                this._transloco.translate('batchProcessing.failedExportDismiss'),
                { duration: 4000 }
            );
        } finally {
            this.isPausing.set(false);
        }
    }

    async retryAllFailedRows(event?: Event): Promise<void> {
        event?.stopPropagation();
        const batchId = this.batchId();
        const b = this.batch();
        if (!batchId || !b?.rows?.length) return;
        if (!this.canOperateRetryFailed()) {
            this._snack.open(
                this._transloco.translate('batchProcessing.retryFailedBlocked'),
                this._transloco.translate('batchProcessing.failedExportDismiss'),
                { duration: 4000 }
            );
            return;
        }

        const failCount = b.rows.filter((r) => r.status === 'failed').length;
        if (failCount === 0) return;

        this.isStarting.set(true);
        this._processingAborted = false;
        try {
            const newRows = b.rows.map((r) =>
                r.status === 'failed'
                    ? {
                          ...r,
                          status: 'pending' as SmartBatchRowStatus,
                          results: {},
                          errors: [],
                          processedAt: undefined,
                      }
                    : r
            );

            const res = await firstValueFrom(
                this._smartBatchService.updateSmartBatch(batchId, {
                    rows: newRows,
                    status: 'processing',
                })
            );
            this.batch.set(res.data);
            this.isStarting.set(false);
            this.isProcessing.set(true);
            await this._processRows();
        } catch (err) {
            console.error('Failed to retry all failed rows:', err);
            this.isStarting.set(false);
            this.isProcessing.set(false);
            this._snack.open(
                this._transloco.translate('batchProcessing.retryAllFailedError'),
                this._transloco.translate('batchProcessing.failedExportDismiss'),
                { duration: 5000 }
            );
        }
    }

    async retrySingleFailedRow(row: SmartBatchRow, event?: Event): Promise<void> {
        event?.stopPropagation();
        const batchId = this.batchId();
        const b = this.batch();
        if (!batchId || !b || row.status !== 'failed') return;
        if (!this.canOperateRetryFailed()) {
            this._snack.open(
                this._transloco.translate('batchProcessing.retryFailedBlocked'),
                this._transloco.translate('batchProcessing.failedExportDismiss'),
                { duration: 4000 }
            );
            return;
        }

        this.retryingFailedRowIndex.set(row.rowIndex);
        this._processingAborted = false;
        try {
            await this._serializedBatchRowMutation(async () => {
                const res = await firstValueFrom(
                    this._smartBatchService.updateBatchRow(batchId, row.rowIndex, {
                        status: 'pending',
                        results: {},
                        errors: [],
                    })
                );
                this.batch.set(res.data);
            });

            this.isStarting.set(true);
            try {
                const res = await firstValueFrom(
                    this._smartBatchService.updateSmartBatch(batchId, { status: 'processing' })
                );
                this.batch.set(res.data);
            } finally {
                this.isStarting.set(false);
            }

            this.isProcessing.set(true);
            await this._processRows();
        } catch (err) {
            console.error(`Failed to retry failed row ${row.rowIndex}:`, err);
            this.isStarting.set(false);
            this.isProcessing.set(false);
            this._snack.open(
                this._transloco.translate('batchProcessing.retryRowFailedError'),
                this._transloco.translate('batchProcessing.failedExportDismiss'),
                { duration: 5000 }
            );
        } finally {
            this.retryingFailedRowIndex.set(null);
        }
    }

    isRetryingFailedRowReset(row: SmartBatchRow): boolean {
        return this.retryingFailedRowIndex() === row.rowIndex;
    }

    /**
     * Builds column order and one plain object per row (input fields only) for CSV / Excel / JSON export.
     */
    private _buildInputsExportTable(): {
        columns: string[];
        objects: Record<string, unknown>[];
    } | null {
        const config = this.configuration();
        const batchRows = this.rowsForInputsCsvExport();
        if (!config || batchRows.length === 0) return null;

        const baseHeaders = getBatchInputCsvHeaders(config);
        const extraKeys = new Set<string>();
        for (const row of batchRows) {
            const raw = row.inputData;
            if (raw != null && typeof raw === 'object' && !Array.isArray(raw)) {
                Object.keys(raw as Record<string, unknown>).forEach((k) => {
                    if (!baseHeaders.includes(k)) extraKeys.add(k);
                });
            }
        }
        const extrasSorted = [...extraKeys].sort((a, b) => a.localeCompare(b));
        const columns =
            baseHeaders.length > 0
                ? [...baseHeaders, ...extrasSorted.filter((k) => !baseHeaders.includes(k))]
                : batchRows[0]?.inputData != null && typeof batchRows[0].inputData === 'object'
                  ? [
                        ...Object.keys(batchRows[0].inputData as Record<string, unknown>).sort(
                            (a, b) => a.localeCompare(b)
                        ),
                    ]
                  : [];

        if (columns.length === 0) return null;

        const objects = batchRows.map((row) => {
            const data =
                row.inputData != null &&
                typeof row.inputData === 'object' &&
                !Array.isArray(row.inputData)
                    ? (row.inputData as Record<string, unknown>)
                    : {};
            const o: Record<string, unknown> = {};
            for (const key of columns) {
                o[key] = Object.prototype.hasOwnProperty.call(data, key) ? (data[key] ?? '') : '';
            }
            return o;
        });

        return { columns, objects };
    }

    downloadInputsExport(format: 'xlsx' | 'csv' | 'json'): void {
        const b = this.batch();
        const table = this._buildInputsExportTable();
        if (!table || !b) {
            this._snack.open(
                this._transloco.translate('batchProcessing.inputExportNoRows'),
                this._transloco.translate('batchProcessing.failedExportDismiss'),
                { duration: 3000 }
            );
            return;
        }

        const { columns, objects } = table;
        const rowCount = objects.length;
        const filterSlug = this._inputsExportFilterSlug();
        const sanitizedName = (b.name || 'batch').replace(/[^a-zA-Z0-9_.-]+/g, '_');
        const idPart = this.batchId() || 'export';
        const baseName = `batch-inputs_${filterSlug}_${sanitizedName}_${idPart}`.replace(
            /[/\\]/g,
            '_'
        );

        if (format === 'csv') {
            const csvRows = [escapeCsvRow(columns)];
            for (const o of objects) {
                const cells = columns.map((key) =>
                    inputDataValueForCsvCell(
                        Object.prototype.hasOwnProperty.call(o, key) ? o[key] : ''
                    )
                );
                csvRows.push(escapeCsvRow(cells));
            }
            const blob = new Blob([`\uFEFF${csvRows.join('\n')}`], {
                type: 'text/csv;charset=utf-8;',
            });
            const url = URL.createObjectURL(blob);
            const anchor = document.createElement('a');
            anchor.href = url;
            anchor.download = `${baseName}.csv`;
            anchor.click();
            setTimeout(() => URL.revokeObjectURL(url), 2000);
        } else if (format === 'json') {
            const blob = new Blob([JSON.stringify(objects, null, 2)], {
                type: 'application/json;charset=utf-8;',
            });
            const url = URL.createObjectURL(blob);
            const anchor = document.createElement('a');
            anchor.href = url;
            anchor.download = `${baseName}.json`;
            anchor.click();
            setTimeout(() => URL.revokeObjectURL(url), 2000);
        } else {
            const wb = XLSX.utils.book_new();
            const ws = XLSX.utils.json_to_sheet(objects, { header: columns });
            XLSX.utils.book_append_sheet(wb, ws, 'Inputs');
            const xlsxName = `${baseName}.xlsx`.replace(/[/\\]/g, '_');
            XLSX.writeFile(wb, xlsxName);
        }

        const formatLabel = this._transloco.translate(
            `batchProcessing.exportFormatLabel_${format}`
        );
        this._snack.open(
            this._transloco.translate('batchProcessing.inputExportDoneWithFormat', {
                count: rowCount,
                format: formatLabel,
            }),
            this._transloco.translate('batchProcessing.failedExportDismiss'),
            { duration: 2500 }
        );
    }

    private _inputsExportFilterSlug(): string {
        switch (this.recordFilter()) {
            case 'pending':
                return 'pending';
            case 'completed':
                return 'completed';
            case 'failed':
                return 'failed';
            case 'partial':
                return 'partial';
            default:
                return 'all';
        }
    }

    generateReport(): void {
        const configId = this.configId();
        const batchId = this.batchId();
        if (configId && batchId) {
            this._router.navigate(['/smart-batch', configId, 'batch', batchId, 'report']);
        }
    }

    editInputs(): void {
        const configId = this.configId();
        const batchId = this.batchId();
        if (configId && batchId && this.batch()?.status !== 'processing') {
            this._router.navigate(['/smart-batch', configId, 'batch', batchId, 'inputs']);
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
        const canonical = this.batch()?.rows?.find((r) => r.rowIndex === row.rowIndex);
        this.selectedRow.set(canonical ?? row);
        this.ruesCategoryEditing.set(false);
        this.ruesCategoryDraft.set('');
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

    /** `AppFeature.code` when `appFeature` is expanded (matches report viewer). */
    getStepFeatureCode(step: BatchStep): string | undefined {
        const feature = step.appFeature;
        return typeof feature === 'object' && feature != null && 'code' in feature
            ? (feature as AppFeature).code
            : undefined;
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
     * Step result rows for readable panel: recursive flatten + presenters (report viewer parity).
     * Top-level PDF fields are stripped for flattening (RUES needs one pass on the rest), then PDF iframes appended.
     */
    getStepResultDisplayFields(data: any, featureCode?: string | null): StepResultDisplayField[] {
        const ctx = { featureCode: featureCode ?? undefined };

        if (data == null || typeof data !== 'object' || Array.isArray(data)) {
            return getStepDisplayFields(ctx, data).map((r) => ({
                kind: 'text' as const,
                label: r.label,
                value: r.value,
            }));
        }

        const o = data as Record<string, unknown>;
        const sanitized: Record<string, unknown> = { ...o };
        const pdfPanels: StepResultDisplayField[] = [];

        for (const key of Object.keys(o)) {
            const raw = o[key];
            if (this._shouldTreatAsEmbeddedPdf(key, raw)) {
                delete sanitized[key];
                pdfPanels.push({
                    kind: 'pdf',
                    label: this._labelFromApiKey(key),
                    dataUrl: this._normalizePdfDataUrl(raw as string),
                });
            }
        }

        const textRows: StepResultDisplayField[] = getStepDisplayFields(ctx, sanitized).map(
            (r) => ({ kind: 'text', label: r.label, value: r.value })
        );

        return [...textRows, ...pdfPanels];
    }

    /** Input data as label/value pairs for readable display; empty if not an object */
    getInputDataFields(): { label: string; value: string }[] {
        const input = this.selectedRow()?.inputData;
        if (input == null || typeof input !== 'object') return [];
        const o = input as Record<string, unknown>;
        const excludeCategory = this.canEditRuesCategory();
        const trimmed: Record<string, unknown> = {};
        for (const k of Object.keys(o)) {
            if (excludeCategory && k === 'category') continue;
            trimmed[k] = o[k];
        }
        return this.getStepResultFields(trimmed);
    }

    getSelectedRuesCategoryValue(): string {
        const raw = this.selectedRow()?.inputData?.category;
        if (raw === null || raw === undefined || raw === '') return '';
        return String(raw);
    }

    /** First step in failed state (for primary Retry next to RUES inputs). */
    firstFailedStep(): BatchStep | null {
        const row = this.selectedRow();
        if (!row) return null;
        for (const step of this.configSteps()) {
            if (this.getRowStepStatus(row, step.sequence) === 'failed') {
                return step;
            }
        }
        return null;
    }

    beginRuesCategoryEdit(): void {
        this.ruesCategoryDraft.set(this.getSelectedRuesCategoryValue());
        this.ruesCategoryEditing.set(true);
    }

    cancelRuesCategoryEdit(): void {
        this.ruesCategoryEditing.set(false);
        this.ruesCategoryDraft.set('');
    }

    async applyRuesCategoryEdit(): Promise<void> {
        const v = this.ruesCategoryDraft();
        const current = this.getSelectedRuesCategoryValue();
        const clearing = v === '';
        if (!clearing && v === current) {
            this.ruesCategoryEditing.set(false);
            return;
        }
        if (clearing && current === '') {
            this.ruesCategoryEditing.set(false);
            return;
        }
        const ok = await this.saveRowInputPatch(clearing ? { category: null } : { category: v });
        if (ok) {
            this.ruesCategoryEditing.set(false);
            this.ruesCategoryDraft.set('');
        }
    }

    /** Persists merged input fields for the selected row before Retry. Returns false on skipped or failure. */
    async saveRowInputPatch(patch: Record<string, unknown>): Promise<boolean> {
        const bid = this.batchId();
        const row = this.selectedRow();
        if (!bid || row == null) return false;
        this.savingRuesCategory.set(true);
        try {
            const res = await this._serializedBatchRowMutation(() =>
                firstValueFrom(
                    this._smartBatchService.updateBatchRow(bid, row.rowIndex, {
                        status: row.status,
                        results: row.results,
                        errors: row.errors ?? [],
                        inputData: patch,
                    })
                )
            );
            this.batch.set(res.data);
            const updated = res.data.rows.find((r) => r.rowIndex === row.rowIndex);
            if (updated) {
                this.selectedRow.set(updated);
            }
            this._snack.open(
                this._transloco.translate('batchProcessing.ruesCategorySaved'),
                this._transloco.translate('batchProcessing.failedExportDismiss'),
                { duration: 2000 }
            );
            return true;
        } catch (err) {
            console.error('saveRowInputPatch', err);
            this._snack.open(
                this._transloco.translate('batchProcessing.ruesCategorySaveFailed'),
                this._transloco.translate('batchProcessing.failedExportDismiss'),
                { duration: 4000 }
            );
            return false;
        } finally {
            this.savingRuesCategory.set(false);
        }
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
            copy[key] = this._shouldTreatAsEmbeddedPdf(key, raw) ? placeholder : raw;
        }
        try {
            return JSON.stringify(copy, null, 2);
        } catch {
            return this.formatJson(stepResult);
        }
    }

    private _clearBatchJsonCopyTimer(): void {
        if (this._batchJsonCopyClearTimer != null) {
            clearTimeout(this._batchJsonCopyClearTimer);
            this._batchJsonCopyClearTimer = null;
        }
    }

    batchJsonCopyShowsCopied(rowIndex: number, sequence: number): boolean {
        return this.batchJsonCopyFeedbackKey() === `${rowIndex}_${sequence}`;
    }

    copyBatchStepJsonToClipboard(rowIndex: number, sequence: number): void {
        const row = this.selectedRow();
        if (!row || row.rowIndex !== rowIndex) return;
        const text = this.formatStepResultJsonForDetail(row.results?.[sequence]);
        const key = `${rowIndex}_${sequence}`;
        void navigator.clipboard.writeText(text).then(
            () => {
                this._clearBatchJsonCopyTimer();
                this.batchJsonCopyFeedbackKey.set(key);
                this._batchJsonCopyClearTimer = setTimeout(() => {
                    this.batchJsonCopyFeedbackKey.update((c) => (c === key ? null : c));
                    this._batchJsonCopyClearTimer = null;
                }, 2400);
            },
            () => {
                this._snack.open(
                    this._transloco.translate('smartReport.failedToCopy'),
                    this._transloco.translate('batchProcessing.failedExportDismiss'),
                    { duration: 3000 }
                );
            }
        );
    }

    getRowStepStatus(row: SmartBatchRow, stepSequence: number): 'pending' | 'completed' | 'failed' {
        if (this.currentRowIndex() === row.rowIndex && this.currentStepIndex() === stepSequence) {
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
        return this._getRunnableSteps(this.configSteps(), row.results || {}, row.errors || [])
            .length;
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

    private _hasStepResult(
        results: Record<number, any> | null | undefined,
        stepSequence: number
    ): boolean {
        return results?.[stepSequence] !== undefined && results?.[stepSequence] !== null;
    }

    private _getRetryKey(row: SmartBatchRow, step: BatchStep): string {
        return `${row.rowIndex}:${step.sequence}`;
    }

    private _isTerminalRowStatus(status: SmartBatchRowStatus): boolean {
        return status === 'completed' || status === 'failed' || status === 'partial';
    }
}
