import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { environment } from 'environments/environment';
import { firstValueFrom } from 'rxjs';
import { resolveStepParams } from './batch-param-resolver';
import {
    AppFeature,
    BatchStep,
    getEffectiveSmartBatchSuccessWhen,
    SmartBatch,
    SmartBatchRow,
    SmartBatchRowStatus,
    SmartBatchService,
} from './smart-batch.service';

@Injectable({ providedIn: 'root' })
export class BatchBrowserRunnerService {
    readonly running = signal(false);
    private _abort = false;

    constructor(
        private _http: HttpClient,
        private _smartBatch: SmartBatchService
    ) {}

    stop(): void {
        this._abort = true;
        this.running.set(false);
    }

    async runBatch(
        batch: SmartBatch,
        steps: BatchStep[],
        onBatch: (next: SmartBatch) => void,
        onError?: (error: unknown) => void
    ): Promise<void> {
        const batchId = batch._id;
        if (!batchId || this.running()) return;

        this._abort = false;
        this.running.set(true);

        const pending = (batch.rows || []).filter(
            (row) => row.status === 'pending' || row.status === 'processing'
        );

        let current = batch;
        try {
            for (const row of pending) {
                if (this._abort) return;
                current = await this._runRow(batchId, row, steps, current, onBatch);
            }
        } catch (error) {
            onError?.(error);
        } finally {
            this.running.set(false);
        }
    }

    private async _runRow(
        batchId: string,
        row: SmartBatchRow,
        steps: BatchStep[],
        batch: SmartBatch,
        onBatch: (next: SmartBatch) => void
    ): Promise<SmartBatch> {
        const enabled = steps.filter((step) => step.enabled !== false).sort((a, b) => a.sequence - b.sequence);
        const results: Record<number, unknown> = { ...(row.results || {}) };
        const errors: { step: number; message: string; code: string }[] = [];

        for (const step of enabled) {
            if (this._abort) return batch;
            const outcome = await this._invokeStep(step, row.inputData || {}, results);
            if (outcome.ok) {
                results[step.sequence] = outcome.body;
                continue;
            }
            if ('message' in outcome) {
                errors.push({ step: step.sequence, message: outcome.message, code: outcome.code });
            }
            break;
        }

        const status: SmartBatchRowStatus =
            errors.length === 0 ? 'completed' : Object.keys(results).length ? 'partial' : 'failed';
        const payload = { status, results, errors };
        const res = await this._putRow(batchId, row.rowIndex, payload);
        onBatch(res.data);
        return res.data;
    }

    private async _putRow(
        batchId: string,
        rowIndex: number,
        payload: {
            status: SmartBatchRow['status'];
            results: Record<number, unknown>;
            errors: { step: number; message: string; code: string }[];
        }
    ) {
        try {
            return await firstValueFrom(this._smartBatch.updateBatchRow(batchId, rowIndex, payload));
        } catch (error) {
            if (!this._isServerSideManaged(error)) throw error;
            await firstValueFrom(this._smartBatch.getBatchProgress(batchId));
            return await firstValueFrom(this._smartBatch.updateBatchRow(batchId, rowIndex, payload));
        }
    }

    private _isServerSideManaged(error: unknown): boolean {
        const http = error as HttpErrorResponse;
        const code = String(http?.error?.code || http?.error?.error?.code || '');
        const message = String(http?.error?.message || http?.message || '');
        return code === 'batch_is_server_side_managed' || message.includes('batch_is_server_side_managed');
    }

    private async _invokeStep(
        step: BatchStep,
        inputData: Record<string, unknown>,
        results: Record<number, unknown>
    ): Promise<{ ok: true; body: unknown } | { ok: false; message: string; code: string }> {
        const feature = typeof step.appFeature === 'object' ? step.appFeature : null;
        const url = this._featureUrl(feature);
        if (!url) return { ok: false, message: 'Step is missing an AppFeature URL', code: 'MissingFeature' };

        const params = resolveStepParams({
            step,
            dependencies: feature?.dependencies,
            inputData,
            results: results as Record<string, unknown>,
        });
        const method = String(feature?.method || 'GET').toUpperCase();
        const query =
            method === 'GET'
                ? Object.fromEntries(
                      Object.entries(params).map(([key, value]) => [key, value == null ? '' : String(value)])
                  )
                : undefined;

        try {
            const body = await firstValueFrom(
                this._http.request(method, url, {
                    ...(method === 'GET' ? { params: query } : { body: params }),
                })
            );
            return { ok: true, body: (body as { data?: unknown })?.data ?? body };
        } catch (error) {
            return this._stepFailure(error, feature);
        }
    }

    private _featureUrl(feature: AppFeature | null): string | null {
        const path = feature?.url || feature?.endpoint;
        if (!path) return null;
        return `${environment.apiUrl}/${String(path).replace(/^\//, '')}`;
    }

    private _stepFailure(
        error: unknown,
        feature: AppFeature | null
    ): { ok: true; body: unknown } | { ok: false; message: string; code: string } {
        const http = error as HttpErrorResponse;
        const code = http?.error?.code || http?.error?.error?.code || 'RequestFailed';
        const rules = feature ? getEffectiveSmartBatchSuccessWhen(feature) : undefined;
        const matched = rules?.some(
            (rule) =>
                rule.httpStatus === http?.status &&
                (!rule.responseCodes?.length || rule.responseCodes.includes(code))
        );
        if (matched) return { ok: true, body: http.error?.data ?? http.error ?? {} };
        return {
            ok: false,
            message: http?.error?.message || http?.message || 'Request failed',
            code,
        };
    }
}
