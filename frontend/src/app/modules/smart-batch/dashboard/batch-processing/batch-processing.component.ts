import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { Component, computed, effect, ElementRef, inject, OnDestroy, OnInit, signal, ViewChild } from '@angular/core';
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
import { FuseConfirmationService } from '@fuse/services/confirmation';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { firstValueFrom, Subject } from 'rxjs';
import * as XLSX from 'xlsx';
import { escapeCsvRow, getBatchInputCsvHeaders, inputDataValueForCsvCell } from '../../batch-input-csv.util';
import { getBatchSkippedStepsFromInput } from '../../batch-required-fields.util';
import {
    AppFeature,
    BatchConfiguration,
    BatchStep,
    SmartBatch,
    SmartBatchEstimate,
    SmartBatchExecutor,
    SmartBatchProgress,
    SmartBatchRow,
    SmartBatchService,
} from '../../smart-batch.service';
import { getStepDisplayFields } from '../../step-result-presenters/registry';
import { inferBatchCategory, SmartBatchInputModeService } from '../../smart-batch-input-mode.service';

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

/** Progress poll cadence while a run is active. */
const PROGRESS_POLL_INTERVAL_MS = 2500;

/** Slower cadence once the run reaches a terminal state, to pick up late sync writes. */
const IDLE_POLL_INTERVAL_MS = 15000;

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

/**
 * Batch monitoring view.
 *
 * Execution lives on the server in the FeatureRunner engine, so this component
 * only starts/pauses/resumes/cancels a run and polls progress. It used to be the
 * job runner itself, which meant closing the tab killed the batch.
 */
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
    private _confirm = inject(FuseConfirmationService);
    private _inputModeService = inject(SmartBatchInputModeService);
    private _destroy$ = new Subject<void>();
    private _pollTimer: ReturnType<typeof setTimeout> | null = null;
    private _shouldAutostart = false;
    private _reportOnComplete = false;
    private _reportRowIndex = '0';
    /** Guards the one-shot redirect so a late poll cannot navigate twice. */
    private _reportRedirectDone = false;

    // Route params
    configId = signal<string | null>(null);
    batchId = signal<string | null>(null);

    // Batch data
    batch = signal<SmartBatch | null>(null);
    configuration = signal<BatchConfiguration | null>(null);
    progressDetail = signal<SmartBatchProgress | null>(null);
    estimate = signal<SmartBatchEstimate | null>(null);
    isLoading = signal(true);
    isStarting = signal(false);
    isPausing = signal(false);
    isResuming = signal(false);
    isRetryingFailed = signal(false);
    isCancelling = signal(false);
    isLoadingEstimate = signal(false);
    /** Row index currently being re-queued through the row-scoped retry endpoint. */
    retryingRowIndex = signal<number | null>(null);

    /** `{rowIndex}_{stepSequence}` while that step JSON block shows “Copied” feedback */
    batchJsonCopyFeedbackKey = signal<string | null>(null);
    private _batchJsonCopyClearTimer: ReturnType<typeof setTimeout> | null = null;

    /** True while persisting RUES category / inputData patch for the selected row. */
    savingRuesCategory = signal(false);
    /** When true, show mat-select for category with Apply/Cancel instead of read-only row. */
    ruesCategoryEditing = signal(false);
    /** Draft value while editing RUES category (Apply persists to server). */
    ruesCategoryDraft = signal('');

    /** True while the server is executing this batch. Drives polling and button states. */
    isProcessing = computed(() => this.batch()?.status === 'processing');

    isPaused = computed(() => this.batch()?.status === 'paused');

    /** True once the batch has been handed to the engine. */
    isServerManaged = computed(
        () => Boolean(this.batch()?.run) || this.batch()?.executor === 'queue'
    );

    canEditExecutor = computed(() => {
        const status = this.batch()?.status;
        return status === 'draft' || status === 'pending';
    });

    // Configuration steps (sorted by sequence)
    configSteps = computed(() => {
        const config = this.configuration();
        if (!config?.steps) return [];
        return config.steps.filter((s) => s.enabled).sort((a, b) => a.sequence - b.sequence);
    });

    /** Concurrency the engine is actually applying, from the run's mergeStrategy. */
    runConcurrencyLabel = computed(() => {
        const strategy = this.progressDetail()?.run?.mergeStrategy;
        if (!strategy) return '';
        return strategy === 'sequential' ? 'sequential' : 'parallel';
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

    /** Rows the server would re-run on retry-failed: failed plus partially completed. */
    retryableRowCount = computed(() => {
        const b = this.batch();
        if (!b?.rows) return 0;
        return b.rows.filter((r) => r.status === 'failed' || r.status === 'partial').length;
    });

    /** Retry-failed is a server operation, so it only needs the batch to be idle. */
    canOperateRetryFailed = computed(() => {
        if (this.retryableRowCount() === 0) return false;
        if (this.isProcessing() || this.isStarting() || this.isRetryingFailed()) return false;
        return true;
    });

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
                    accentClass:
                        '!border-blue-500 !text-blue-800 hover:!bg-blue-50/90 dark:!text-blue-300 dark:hover:!bg-blue-950/30',
                    dotClass: 'bg-blue-500',
                    iconClass: 'text-blue-600',
                };
            case 'completed':
                return {
                    labelKey: 'batchProcessing.downloadInputsSuccessful',
                    tooltipKey: 'batchProcessing.downloadInputsTooltipSuccessful',
                    accentClass:
                        '!border-emerald-500 !text-emerald-800 hover:!bg-emerald-50/90 dark:!text-emerald-300 dark:hover:!bg-emerald-950/30',
                    dotClass: 'bg-emerald-500',
                    iconClass: 'text-emerald-600',
                };
            case 'failed':
                return {
                    labelKey: 'batchProcessing.downloadInputsFailed',
                    tooltipKey: 'batchProcessing.downloadInputsTooltipFailed',
                    accentClass:
                        '!border-red-500 !text-red-800 hover:!bg-red-50/90 dark:!text-red-300 dark:hover:!bg-red-950/30',
                    dotClass: 'bg-red-500',
                    iconClass: 'text-red-600',
                };
            case 'partial':
                return {
                    labelKey: 'batchProcessing.downloadInputsPartial',
                    tooltipKey: 'batchProcessing.downloadInputsTooltipPartial',
                    accentClass:
                        '!border-amber-500 !text-amber-900 hover:!bg-amber-50/90 dark:!text-amber-300 dark:hover:!bg-amber-950/30',
                    dotClass: 'bg-amber-500',
                    iconClass: 'text-amber-600',
                };
            default:
                return {
                    labelKey: 'batchProcessing.downloadInputsAll',
                    tooltipKey: 'batchProcessing.downloadInputsTooltipAll',
                    accentClass:
                        '!border-slate-400 !text-slate-800 hover:!bg-slate-50/90 dark:!text-stone-300 dark:hover:!bg-gray-800/50',
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

    /**
     * Credits actually spent, recorded per step by the engine's RunLedger.
     * Falls back to completed rows × step price for legacy browser-run batches,
     * which have no ledger.
     */
    totalCreditsCost = computed(() => {
        const spent = this.progressDetail()?.spend?.credits ?? this.batch()?.creditsSpent;
        if (typeof spent === 'number' && spent > 0) return spent;

        const completed = this.completedRows().length;
        if (completed === 0) return 0;
        const costPerRow = this.configSteps().reduce((sum, step) => sum + this.getStepPrice(step), 0);
        return completed * costPerRow;
    });

    /** True when credits come from the ledger rather than a client-side guess. */
    creditsAreMeasured = computed(() => (this.progressDetail()?.spend?.credits ?? 0) > 0);

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
     * (e.g. progress poll); avoids stale `results` / wrong step status on the selected snapshot.
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
        this._route.queryParams.subscribe((query) => {
            this._shouldAutostart = query['autostart'] === '1';
            this._reportOnComplete = query['reportOnComplete'] === '1';
            this._reportRowIndex = query['rowIndex'] ?? '0';
        });
        this._route.params.subscribe((params) => {
            this.configId.set(params['configId']);
            this.batchId.set(params['batchId']);
            this._loadConfiguration();
            this._loadBatch();
        });
    }

    ngOnDestroy(): void {
        this._stopPolling();
        this._clearBatchJsonCopyTimer();
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

    /**
     * @param options.silent When true, skip full-page loading spinner (poll refresh).
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
                    this.loadEstimate();
                }
                if (this._shouldAutostart && !this.isProcessing() && !this.isStarting()) {
                    this._shouldAutostart = false;
                    void this.startProcessing();
                    return;
                }
                this._schedulePoll();
            },
            error: (err) => {
                console.error('Failed to load batch:', err);
                if (!silent) {
                    this.isLoading.set(false);
                }
            },
        });
    }

    /** Pre-flight credit cost for the pending rows. */
    loadEstimate(): void {
        const id = this.batchId();
        if (!id) return;

        this.isLoadingEstimate.set(true);
        this._smartBatchService.getBatchEstimate(id).subscribe({
            next: (res) => {
                this.estimate.set(res.data);
                this.isLoadingEstimate.set(false);
            },
            error: () => {
                this.isLoadingEstimate.set(false);
            },
        });
    }

    // -------------------------------------------------------------------------
    // Run control — every operation is a single server call
    // -------------------------------------------------------------------------

    async setExecutor(executor: SmartBatchExecutor): Promise<void> {
        const batch = this.batch();
        if (!batch?._id || !this.canEditExecutor() || batch.executor === executor) return;

        try {
            const res = await firstValueFrom(
                this._smartBatchService.updateSmartBatch(batch._id, { executor })
            );
            this.batch.set(res.data);
        } catch (err) {
            this._reportFailure('batchProcessing.executorUpdateFailed', err);
        }
    }

    /**
     * Hand the batch to the engine. Returns as soon as the run is queued; the
     * worker owns execution from there, so closing this tab is now safe.
     */
    async startProcessing(): Promise<void> {
        const batchId = this.batchId();
        if (!batchId || this.isStarting() || this.isProcessing()) return;

        const estimate = this.estimate();
        if (estimate && !estimate.sufficientCredits) {
            const confirmed = await this._askConfirmation({
                titleKey: 'batchProcessing.insufficientCreditsTitle',
                messageKey: 'batchProcessing.insufficientCreditsMessage',
                messageParams: { required: estimate.totalCredits, available: estimate.availableCredits },
                confirmKey: 'batchProcessing.startAnyway',
            });
            if (!confirmed) return;
        }

        this.isStarting.set(true);
        try {
            const res = await firstValueFrom(this._smartBatchService.startSmartBatch(batchId));
            this.batch.set(res.data);
            this._notify('batchProcessing.runQueued');
            this._schedulePoll(true);
        } catch (err) {
            this._reportFailure('batchProcessing.startFailed', err);
        } finally {
            this.isStarting.set(false);
        }
    }

    async pauseProcessing(): Promise<void> {
        const batchId = this.batchId();
        if (!batchId || this.isPausing()) return;

        this.isPausing.set(true);
        try {
            const res = await firstValueFrom(this._smartBatchService.pauseSmartBatch(batchId));
            this.batch.set(res.data);
            this._notify('batchProcessing.runPaused');
        } catch (err) {
            this._reportFailure('batchProcessing.pauseFailed', err);
        } finally {
            this.isPausing.set(false);
            this._schedulePoll(true);
        }
    }

    async resumeProcessing(): Promise<void> {
        const batchId = this.batchId();
        if (!batchId || this.isResuming()) return;

        this.isResuming.set(true);
        try {
            const res = await firstValueFrom(this._smartBatchService.resumeSmartBatch(batchId));
            this.batch.set(res.data);
            this._notify('batchProcessing.runResumed');
        } catch (err) {
            this._reportFailure('batchProcessing.resumeFailed', err);
        } finally {
            this.isResuming.set(false);
            this._schedulePoll(true);
        }
    }

    /**
     * Re-run failed and partial rows. The engine keeps completed step results, so
     * only the steps that actually failed are billed again.
     */
    async retryAllFailedRows(event?: Event): Promise<void> {
        event?.stopPropagation();
        const batchId = this.batchId();
        if (!batchId || !this.canOperateRetryFailed()) return;

        const confirmed = await this._askConfirmation({
            titleKey: 'batchProcessing.retryFailedTitle',
            messageKey: 'batchProcessing.retryFailedMessage',
            messageParams: { count: this.retryableRowCount() },
            confirmKey: 'batchProcessing.retryFailedConfirm',
        });
        if (!confirmed) return;

        this.isRetryingFailed.set(true);
        try {
            const res = await firstValueFrom(this._smartBatchService.retrySmartBatchFailedRows(batchId));
            this.batch.set(res.data.batch);
            this._notify('batchProcessing.retryQueued', { count: res.data.retried });
        } catch (err) {
            this._reportFailure('batchProcessing.retryAllFailedError', err);
        } finally {
            this.isRetryingFailed.set(false);
            this._schedulePoll(true);
        }
    }

    /** Re-run a single failed row via the same server endpoint, scoped by row index. */
    async retrySingleFailedRow(row: SmartBatchRow, event?: Event): Promise<void> {
        event?.stopPropagation();
        const batchId = this.batchId();
        if (!batchId || !this.canOperateRetryFailed()) return;
        if (row.status !== 'failed' && row.status !== 'partial') return;

        this.retryingRowIndex.set(row.rowIndex);
        try {
            const res = await firstValueFrom(
                this._smartBatchService.retrySmartBatchFailedRows(batchId, [row.rowIndex])
            );
            this.batch.set(res.data.batch);
            this._notify('batchProcessing.retryQueued', { count: res.data.retried });
        } catch (err) {
            this._reportFailure('batchProcessing.retryRowFailedError', err);
        } finally {
            this.retryingRowIndex.set(null);
            this._schedulePoll(true);
        }
    }

    isRetryingRow(row: SmartBatchRow): boolean {
        return this.retryingRowIndex() === row.rowIndex;
    }

    async cancelProcessing(): Promise<void> {
        const batchId = this.batchId();
        if (!batchId || this.isCancelling()) return;

        const confirmed = await this._askConfirmation({
            titleKey: 'batchProcessing.cancelTitle',
            messageKey: 'batchProcessing.cancelMessage',
            confirmKey: 'batchProcessing.cancelConfirm',
        });
        if (!confirmed) return;

        this.isCancelling.set(true);
        try {
            const res = await firstValueFrom(this._smartBatchService.cancelSmartBatch(batchId));
            this.batch.set(res.data);
            this._notify('batchProcessing.runCancelled');
        } catch (err) {
            this._reportFailure('batchProcessing.cancelFailed', err);
        } finally {
            this.isCancelling.set(false);
            this._schedulePoll(true);
        }
    }

    // -------------------------------------------------------------------------
    // Progress polling
    // -------------------------------------------------------------------------

    /**
     * Queue the next progress poll. Active runs poll frequently; idle batches poll
     * slowly so a run started from another tab still shows up here.
     * @param immediate Poll on the next tick rather than after the interval.
     */
    private _schedulePoll(immediate = false): void {
        this._stopPolling();

        const delay = immediate ? 0 : this.isProcessing() ? PROGRESS_POLL_INTERVAL_MS : IDLE_POLL_INTERVAL_MS;

        this._pollTimer = setTimeout(() => {
            this._pollTimer = null;
            this._pollProgress();
        }, delay);
    }

    private _stopPolling(): void {
        if (this._pollTimer == null) return;

        clearTimeout(this._pollTimer);
        this._pollTimer = null;
    }

    private _pollProgress(): void {
        const id = this.batchId();
        if (!id) return;

        this._smartBatchService.getBatchProgress(id).subscribe({
            next: (res) => {
                const previousStatus = this.batch()?.status;
                this.progressDetail.set(res.data);
                this._applyProgressToBatch(res.data);

                // Row payloads are heavy, so only refetch them when counts moved or
                // the run reached a terminal state.
                if (this._progressChangedRows(res.data) || previousStatus !== res.data.status) {
                    this._refreshRows();
                }

                if (previousStatus === 'processing' && res.data.status !== 'processing') {
                    this.loadEstimate();
                    this._maybeRedirectToReport();
                }

                this._schedulePoll();
            },
            error: () => {
                this._schedulePoll();
            },
        });
    }

    /** Cheap counter patch so the header updates without refetching every row. */
    private _applyProgressToBatch(progress: SmartBatchProgress): void {
        this.batch.update((current) =>
            current
                ? {
                      ...current,
                      status: progress.status,
                      totalRows: progress.totalRows,
                      completedRows: progress.completedRows,
                      failedRows: progress.failedRows,
                      partialRows: progress.partialRows,
                      creditsSpent: progress.creditsSpent,
                      startedAt: progress.startedAt ?? current.startedAt,
                      completedAt: progress.completedAt ?? current.completedAt,
                  }
                : current
        );
    }

    private _progressChangedRows(progress: SmartBatchProgress): boolean {
        const b = this.batch();
        if (!b?.rows?.length) return true;

        const localCompleted = b.rows.filter((r) => r.status === 'completed').length;
        const localFailed = b.rows.filter((r) => r.status === 'failed').length;
        const localPartial = b.rows.filter((r) => r.status === 'partial').length;

        return (
            localCompleted !== progress.completedRows ||
            localFailed !== progress.failedRows ||
            localPartial !== progress.partialRows
        );
    }

    private _refreshRows(): void {
        this._loadBatchRowsOnly();
    }

    private _loadBatchRowsOnly(): void {
        const id = this.batchId();
        if (!id) return;

        this._smartBatchService.getSmartBatch(id).subscribe({
            next: (res) => this.batch.set(res.data),
        });
    }

    private _maybeRedirectToReport(): void {
        if (!this._reportOnComplete || this._reportRedirectDone) return;

        this._reportRedirectDone = true;
        const configId = this.configId();
        const batchId = this.batchId();
        if (!configId || !batchId) return;

        this._router.navigate(['/smart-batch', configId, 'batch', batchId, 'report'], {
            queryParams: { rowIndex: this._reportRowIndex },
        });
    }

    // -------------------------------------------------------------------------
    // Dialogs & notifications
    // -------------------------------------------------------------------------

    private async _askConfirmation(options: {
        titleKey: string;
        messageKey: string;
        messageParams?: Record<string, unknown>;
        confirmKey: string;
    }): Promise<boolean> {
        const result = await firstValueFrom(
            this._confirm
                .open({
                    title: this._transloco.translate(options.titleKey),
                    message: this._transloco.translate(options.messageKey, options.messageParams),
                    actions: {
                        confirm: { label: this._transloco.translate(options.confirmKey) },
                        cancel: { label: this._transloco.translate('batchProcessing.dialogCancel') },
                    },
                })
                .afterClosed()
        );

        return result === 'confirmed';
    }

    private _notify(key: string, params?: Record<string, unknown>): void {
        this._snack.open(
            this._transloco.translate(key, params),
            this._transloco.translate('batchProcessing.failedExportDismiss'),
            { duration: 3000 }
        );
    }

    private _reportFailure(key: string, error: unknown): void {
        console.error(key, error);
        const body = (error as { error?: { message?: string; code?: string } })?.error;
        const detail = body?.message || body?.code;

        this._snack.open(
            detail
                ? `${this._transloco.translate(key)} — ${detail}`
                : this._transloco.translate(key),
            this._transloco.translate('batchProcessing.failedExportDismiss'),
            { duration: 5000 }
        );
    }

    // -------------------------------------------------------------------------
    // Exports
    // -------------------------------------------------------------------------

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

    // -------------------------------------------------------------------------
    // Navigation
    // -------------------------------------------------------------------------

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
        const batch = this.batch();
        if (!configId || !batchId || batch?.status === 'processing') {
            return;
        }

        const title = batch?.name ?? this.configuration()?.name ?? '';
        const category = inferBatchCategory(title || this.configuration()?.name);

        this._inputModeService
            .openModeDialog({
                context: 'addInputs',
                title,
                category,
            })
            .subscribe((mode) => {
                if (!mode) {
                    return;
                }

                if (mode === 'single') {
                    this._router.navigate([
                        '/smart-batch',
                        configId,
                        'batch',
                        batchId,
                        'quick-validate',
                    ]);
                    return;
                }

                this._router.navigate(['/smart-batch', configId, 'batch', batchId, 'inputs']);
            });
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

    goBack(): void {
        const configId = this.configId();
        if (configId) {
            this._router.navigate(['/smart-batch', configId]);
        }
    }

    // -------------------------------------------------------------------------
    // Row list & detail panel
    // -------------------------------------------------------------------------

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

    /** Steps the engine skipped for this row because its input was incompatible. */
    getSkippedSteps(row: SmartBatchRow) {
        return getBatchSkippedStepsFromInput(row.inputData);
    }

    getSelectedRuesCategoryValue(): string {
        const raw = this.selectedRow()?.inputData?.category;
        if (raw === null || raw === undefined || raw === '') return '';
        return String(raw);
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

    /**
     * Persist corrected input fields for the selected row before a retry.
     * Input-only patches are accepted on engine-managed batches while they are idle.
     */
    async saveRowInputPatch(patch: Record<string, unknown>): Promise<boolean> {
        const bid = this.batchId();
        const row = this.selectedRow();
        if (!bid || row == null) return false;

        if (this.isProcessing()) {
            this._notify('batchProcessing.editInputsBlockedWhileProcessing');
            return false;
        }

        this.savingRuesCategory.set(true);
        try {
            const res = await firstValueFrom(
                this._smartBatchService.updateBatchRow(bid, row.rowIndex, { inputData: patch })
            );
            this.batch.set(res.data);
            const updated = res.data.rows.find((r) => r.rowIndex === row.rowIndex);
            if (updated) {
                this.selectedRow.set(updated);
            }
            this._notify('batchProcessing.ruesCategorySaved');
            return true;
        } catch (err) {
            this._reportFailure('batchProcessing.ruesCategorySaveFailed', err);
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
        if (!row.results || typeof row.results !== 'object') {
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
        return this.configSteps().filter(
            (step) =>
                !this._hasStepResult(row.results, step.sequence) &&
                !(row.errors || []).some((error) => error.step === step.sequence)
        ).length;
    }

    private _hasStepResult(
        results: Record<number, any> | null | undefined,
        stepSequence: number
    ): boolean {
        return results?.[stepSequence] !== undefined && results?.[stepSequence] !== null;
    }
}
