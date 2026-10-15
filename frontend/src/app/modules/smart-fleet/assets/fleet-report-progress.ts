import { signal } from '@angular/core';
import {
    BatchStep,
    SmartBatch,
    SmartBatchExecutor,
    SmartBatchProgress,
    SmartBatchRow,
} from 'app/modules/smart-batch/smart-batch.service';

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
    readonly runMode = signal<FleetReportRunMode | null>(null);
    readonly runModeHintKey = signal('');
    readonly items = signal<FleetReportLogItem[]>([]);
    readonly percent = signal(0);
    readonly finished = signal(false);
    readonly success = signal(false);
    readonly errorMessage = signal<string | null>(null);

    private _seq = 0;

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

export function progressPollTerminalStatus(progress: SmartBatchProgress | null | undefined): string | null {
    if (!progress) return null;

    const status = progress.status;

    if (status === 'completed' || status === 'failed' || status === 'cancelled') return status;

    const total = progress.totalRows ?? 0;

    if (!total) return null;

    const pending = progress.pendingRows;

    if (typeof pending === 'number' && pending === 0) return status || 'completed';

    const settled =
        (progress.completedRows ?? 0) + (progress.failedRows ?? 0) + (progress.partialRows ?? 0);

    if (settled >= total) return status || 'completed';

    return null;
}

export function nextPendingStepForRow(row: SmartBatchRow, steps: BatchStep[]): BatchStep | null {
    const enabled = steps.filter((step) => step.enabled !== false).sort((a, b) => a.sequence - b.sequence);
    const results = row.results || {};

    for (const step of enabled) {
        if (results[step.sequence] == null) return step;
    }

    return null;
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
