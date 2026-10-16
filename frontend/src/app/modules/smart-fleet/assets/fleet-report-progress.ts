import { signal } from '@angular/core';
import {
    BatchConfiguration,
    BatchStep,
    SmartBatch,
    SmartBatchExecutor,
    SmartBatchEstimate,
    SmartBatchProgress,
    SmartBatchRow,
} from 'app/modules/smart-batch/smart-batch.service';
import { SmartReportTemplate } from 'app/modules/smart-batch/smart-report.service';

export interface PreparedFleetReport {
    batchId: string;
    batchName: string;
    config: BatchConfiguration;
    steps: BatchStep[];
    estimate: SmartBatchEstimate;
    template: SmartReportTemplate;
}

export type FleetReportDialogPhase = 'estimate' | 'run' | 'done';

export type FleetReportRunMode = 'sync' | 'async';

export type FleetReportLogStatus = 'pending' | 'active' | 'done' | 'error';

export interface FleetReportLogItem {
    id: string;
    labelKey: string;
    params?: Record<string, string | number>;
    status: FleetReportLogStatus;
}

/** Live state for the fleet report progress dialog. */
export class FleetReportProgressHub {
    readonly title = signal('');
    readonly phase = signal<FleetReportDialogPhase>('estimate');
    readonly estimateLoading = signal(false);
    readonly estimate = signal<SmartBatchEstimate | null>(null);
    readonly vehicleCount = signal(1);
    readonly runMode = signal<FleetReportRunMode | null>(null);
    readonly runModeHintKey = signal('');
    readonly items = signal<FleetReportLogItem[]>([]);
    readonly percent = signal(0);
    readonly finished = signal(false);
    readonly success = signal(false);
    readonly errorMessage = signal<string | null>(null);

    private _seq = 0;
    private _confirmResolve?: (confirmed: boolean) => void;

    waitForCostConfirm(): Promise<boolean> {
        return new Promise((resolve) => {
            this._confirmResolve = resolve;
        });
    }

    canConfirmEstimate(): boolean {
        const estimate = this.estimate();

        return Boolean(estimate?.sufficientCredits !== false);
    }

    confirmRun(): void {
        if (!this.canConfirmEstimate()) return;

        this.phase.set('run');
        this._confirmResolve?.(true);
        this._confirmResolve = undefined;
    }

    cancelEstimate(): void {
        this._confirmResolve?.(false);
        this._confirmResolve = undefined;
    }

    setRunMode(mode: FleetReportRunMode): void {
        this.runMode.set(mode);
        this.runModeHintKey.set(
            mode === 'async' ? 'createBatchConfig.runModeAsyncHint' : 'createBatchConfig.runModeSyncHint'
        );
    }

    /** Updates the active line when the key matches; otherwise starts a new step. */
    pulseStep(labelKey: string, params?: Record<string, string | number>): void {
        const items = this.items();
        const last = items[items.length - 1];

        if (last?.status === 'active' && last.labelKey === labelKey) {
            this.items.update((list) =>
                list.map((item, index) =>
                    index === list.length - 1 ? { ...item, params: { ...item.params, ...params } } : item
                )
            );
            return;
        }

        this.beginStep(labelKey, params);
    }

    beginStep(labelKey: string, params?: Record<string, string | number>): void {
        this.items.update((list) => {
            const next = list.map((item) =>
                item.status === 'active' ? { ...item, status: 'done' as const } : item
            );

            return [
                ...next,
                {
                    id: `step-${++this._seq}`,
                    labelKey,
                    params,
                    status: 'active' as const,
                },
            ];
        });
    }

    completeActiveStep(): void {
        this.items.update((list) =>
            list.map((item) => (item.status === 'active' ? { ...item, status: 'done' as const } : item))
        );
    }

    setPercent(value: number): void {
        const clamped = Math.max(0, Math.min(100, Math.round(value)));

        this.percent.set(clamped);
    }

    finish(): void {
        this.completeActiveStep();
        this.setPercent(100);
        this.phase.set('done');
        this.finished.set(true);
        this.success.set(true);
    }

    fail(message: string): void {
        this.items.update((list) =>
            list.map((item) =>
                item.status === 'active' ? { ...item, status: 'error' as const } : item
            )
        );
        this.finished.set(true);
        this.success.set(false);
        this.errorMessage.set(message);
    }
}

export function fleetReportPercentFromStage(
    stage: 'prepare' | 'consult' | 'pdf' | 'save',
    done: number,
    total: number
): number {
    if (stage === 'prepare') return 8;
    if (stage === 'pdf') return 92;
    if (stage === 'save') return 97;

    if (!total) return 12;

    return 12 + Math.round((done / total) * 75);
}

/** Config flag: Python queue executor (async). */
export function isFleetBatchAsync(executor?: SmartBatchExecutor): boolean {
    return executor === 'queue';
}

/** Whether this run is owned by the server (poll) vs this browser tab (runner). */
export function isFleetBatchServerManaged(
    executor: SmartBatchExecutor | undefined,
    batch: SmartBatch | null | undefined,
    progress?: SmartBatchProgress | null
): boolean {
    if (isFleetBatchAsync(executor) || isFleetBatchAsync(batch?.executor)) return true;
    if (progress?.serverSide === true) return true;
    if (batch?.run) return true;

    return false;
}

export function batchRowsSettled(batch: SmartBatch | null | undefined): number {
    return (batch?.rows || []).filter(
        (row) => row.status === 'completed' || row.status === 'partial' || row.status === 'failed'
    ).length;
}

export function batchConsultTerminalStatus(batch: SmartBatch | null | undefined): string {
    const rows = batch?.rows || [];

    if (!rows.length) return 'failed';

    const settled = batchRowsSettled(batch);

    if (!settled || rows.every((row) => row.status === 'failed')) return 'failed';

    return rows.some((row) => row.status !== 'completed') ? 'partial' : 'completed';
}

export function rowHasAllStepResults(row: SmartBatchRow, steps: BatchStep[]): boolean {
    const enabled = steps.filter((step) => step.enabled !== false);

    if (!enabled.length) return false;

    const results = row.results || {};

    return enabled.every(
        (step) => results[step.sequence] != null || results[String(step.sequence)] != null
    );
}

/** Row finished by status or by having every enabled step result (server sometimes lags on status). */
export function batchRowsFinished(batch: SmartBatch | null | undefined, steps: BatchStep[]): boolean {
    const rows = batch?.rows || [];

    if (!rows.length) return false;

    return rows.every((row) => {
        if (row.status === 'completed' || row.status === 'partial' || row.status === 'failed') return true;

        return rowHasAllStepResults(row, steps);
    });
}

export function consultDoneCount(
    batch: SmartBatch | null | undefined,
    progress: SmartBatchProgress | null | undefined,
    totalFallback: number,
    steps: BatchStep[] = []
): { done: number; total: number } {
    const rows = batch?.rows || [];
    const total = rows.length || progress?.totalRows || progress?.run?.totalItems || totalFallback || 0;

    if (rows.length) {
        const done = rows.filter((row) => {
            if (row.status === 'completed' || row.status === 'partial' || row.status === 'failed') return true;

            return steps.length ? rowHasAllStepResults(row, steps) : false;
        }).length;

        return { done, total };
    }

    const pending = progress?.pendingRows;

    if (typeof pending === 'number' && progress?.totalRows) {
        return { done: Math.max(0, progress.totalRows - pending), total: progress.totalRows };
    }

    const run = progress?.run;

    if (run?.totalItems) {
        return {
            done: (run.completedItems ?? 0) + (run.failedItems ?? 0) + (run.partialItems ?? 0),
            total: run.totalItems,
        };
    }

    return {
        done:
            (progress?.completedRows ?? 0) + (progress?.partialRows ?? 0) + (progress?.failedRows ?? 0),
        total,
    };
}

export function progressPollTerminalStatus(
    progress: SmartBatchProgress | null | undefined,
    batch?: SmartBatch | null,
    steps: BatchStep[] = []
): string | null {
    if (batch?.rows?.length) {
        const awaiting = batch.rows.some((row) => row.status === 'pending' || row.status === 'processing');

        if (!awaiting || (steps.length && batchRowsFinished(batch, steps))) {
            return batchConsultTerminalStatus(batch);
        }
    }

    if (!progress) return null;

    const status = progress.status;

    if (status === 'completed' || status === 'failed' || status === 'cancelled') return status;

    const run = progress.run;

    if (run?.status === 'completed' || run?.status === 'failed' || run?.status === 'cancelled') {
        return status || run.status;
    }

    const total = progress.totalRows ?? run?.totalItems ?? 0;

    if (!total) return null;

    const pending = progress.pendingRows;

    if (typeof pending === 'number' && pending === 0) return status || 'completed';

    const settled =
        (progress.completedRows ?? 0) + (progress.failedRows ?? 0) + (progress.partialRows ?? 0);

    if (settled >= total) return status || 'completed';

    if (run?.totalItems) {
        const runSettled = (run.completedItems ?? 0) + (run.failedItems ?? 0) + (run.partialItems ?? 0);

        if (runSettled >= run.totalItems) return status || 'completed';
    }

    return null;
}

export function nextPendingStepForRow(row: SmartBatchRow, steps: BatchStep[]): BatchStep | null {
    const enabled = steps.filter((step) => step.enabled !== false).sort((a, b) => a.sequence - b.sequence);
    const results = row.results || {};

    for (const step of enabled) {
        if (results[step.sequence] == null && results[String(step.sequence)] == null) return step;
    }

    return null;
}

/**
 * Lookup credits bill at the same numeric USD list price used when purchasing balance.
 */
export function fleetLookupCreditsAsUsd(credits: number): number {
    const value = Number(credits);

    return Number.isFinite(value) ? value : 0;
}

export function formatFleetLookupUsd(credits: number): string {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(fleetLookupCreditsAsUsd(credits));
}

export function stepFeatureLabel(step: { appFeature?: unknown }): string {
    const feature = typeof step.appFeature === 'object' && step.appFeature ? (step.appFeature as Record<string, unknown>) : null;

    const name = String(feature?.name || feature?.code || feature?.endpoint || feature?.url || '').trim();

    if (name) {
        const short = name.split('/').filter(Boolean).pop();

        return String(short || name);
    }

    return 'endpoint';
}
