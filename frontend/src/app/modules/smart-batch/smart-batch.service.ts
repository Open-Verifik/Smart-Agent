import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { environment } from 'environments/environment';
import { tap } from 'rxjs';
import type { SmartReportTemplate } from './smart-report.service';

export interface CloneSystemPresetResult {
    batchConfiguration: BatchConfiguration;
    template: SmartReportTemplate;
    reused?: boolean;
}

export type SmartBatchRowStatus = 'pending' | 'processing' | 'completed' | 'failed' | 'partial';

/** Smart Batch: treat matching HTTP responses as a successful step (e.g. 404 NotFound = no record). */
export interface SmartBatchSuccessWhenRule {
    httpStatus: number;
    /** If set and non-empty, `err.error.code` must match one of these. */
    responseCodes?: string[];
}

/**
 * Pilot features: same rules as seeds in verifik `app-features-final.json`. Used when `smartBatchSuccessWhen`
 * is not yet present on the AppFeature document (e.g. before DB sync).
 */
const SMART_BATCH_SUCCESS_WHEN_FALLBACK: Record<string, SmartBatchSuccessWhenRule[]> = {
    colombia_pep_lookup: [{ httpStatus: 404, responseCodes: ['NotFound'] }],
    api_colombia_contracts: [{ httpStatus: 404, responseCodes: ['NotFound'] }],
    colombia_api_vehicle_sinister_fasecolda_by_plate: [
        { httpStatus: 404, responseCodes: ['NotFound'] },
    ],
};

export const getEffectiveSmartBatchSuccessWhen = (
    feature: AppFeature
): SmartBatchSuccessWhenRule[] | undefined => {
    if (feature.smartBatchSuccessWhen?.length) return feature.smartBatchSuccessWhen;
    return SMART_BATCH_SUCCESS_WHEN_FALLBACK[feature.code];
};

export interface BatchConfiguration {
    _id?: string;
    id?: string;
    name: string;
    description?: string;
    country: string;
    steps: BatchStep[];
    inputFormat: 'csv' | 'jsonl' | 'xlsx';
    outputFormat: 'csv' | 'jsonl' | 'xlsx';
    mergeStrategy: 'sequential' | 'parallel-independent' | 'parallel-with-fallback';
    notification?: {
        webhookUrl?: string;
        emailOnCompletion?: string[];
    };
    scheduleExpression?: string;
    preferredReportTemplate?: string | { _id: string };
    isActive?: boolean;
    createdAt?: string;
    updatedAt?: string;
}

export interface BatchStep {
    appFeature: string | AppFeature; // ID or expanded object
    sequence: number;
    enabled: boolean;
    parameterDefaults?: any;
    inputFieldMapping?: Map<string, string> | any;
    outputFieldsToKeep?: string[];
    maxRetries?: number;
    retryDelayBaseSeconds?: number;
    timeoutSeconds?: number;
}

export interface AppFeature {
    _id: string;
    code: string;
    name: string;
    description?: string;
    endpoint?: string;
    method?: string;
    url?: string;
    requiredParams?: string[];
    dependencies?: { field: string; required?: boolean; enum?: string[] }[];
    smartBatchSuccessWhen?: SmartBatchSuccessWhenRule[];
}

@Injectable({
    providedIn: 'root',
})
export class SmartBatchService {
    configurations = signal<BatchConfiguration[]>([]);
    isLoading = signal<boolean>(false);

    constructor(private _httpClient: HttpClient) {}

    getConfigurations() {
        this.isLoading.set(true);
        return this._httpClient
            .get<{ data: BatchConfiguration[] }>(`${environment.apiUrl}/v2/batch-configurations`)
            .pipe(
                tap((response) => {
                    this.configurations.set(response.data);
                    this.isLoading.set(false);
                })
            );
    }

    getAvailableFeatures(country?: string) {
        if (typeof country !== 'undefined' && country === null) {
            country = '';
        }
        let params = {};
        if (country) {
            params = { country };
        }
        return this._httpClient
            .get<{ data: any[] }>(`${environment.apiUrl}/v2/app-features/my-list`, { params })
            .pipe(tap((res) => console.log('Features loaded', res)));
    }

    createConfiguration(config: BatchConfiguration) {
        return this._httpClient
            .post<{
                data: BatchConfiguration;
            }>(`${environment.apiUrl}/v2/batch-configurations`, config)
            .pipe(
                tap((response) => {
                    this.configurations.update((configs) => [response.data, ...configs]);
                })
            );
    }

    deleteConfiguration(id: string) {
        return this._httpClient.delete(`${environment.apiUrl}/v2/batch-configurations/${id}`).pipe(
            tap(() => {
                this.configurations.update((configs) => configs.filter((c) => c._id !== id));
            })
        );
    }

    getConfiguration(id: string) {
        return this._httpClient.get<{ data: BatchConfiguration }>(
            `${environment.apiUrl}/v2/batch-configurations/${id}`,
            { params: { populates: 'steps.appFeature' } }
        );
    }

    updateConfiguration(id: string, config: Partial<BatchConfiguration>) {
        return this._httpClient
            .put<{
                data: BatchConfiguration;
            }>(`${environment.apiUrl}/v2/batch-configurations/${id}`, config)
            .pipe(
                tap((response) => {
                    this.configurations.update((configs) =>
                        configs.map((c) => (c._id === id ? response.data : c))
                    );
                })
            );
    }

    // SmartBatch methods
    getSmartBatches(configId: string, sort: string = '-createdAt') {
        return this._httpClient.get<{ data: SmartBatch[] }>(
            `${environment.apiUrl}/v2/smart-batches`,
            { params: { batchConfiguration: configId, sort } }
        );
    }

    createSmartBatch(data: { batchConfiguration: string; name: string; rows: any[] }) {
        return this._httpClient.post<{ data: SmartBatch }>(
            `${environment.apiUrl}/v2/smart-batches`,
            data
        );
    }

    cloneSystemPreset(systemKey: string) {
        return this._httpClient.post<{ data: CloneSystemPresetResult }>(
            `${environment.apiUrl}/v2/smart-batch-presets/${systemKey}/clone`,
            {}
        );
    }

    appendSmartBatchRows(batchId: string, rows: Record<string, unknown>[]) {
        return this._httpClient.post<{ data: SmartBatch }>(
            `${environment.apiUrl}/v2/smart-batches/${batchId}/rows/append`,
            { rows }
        );
    }

    getSmartBatch(id: string) {
        return this._httpClient.get<{ data: SmartBatch }>(
            `${environment.apiUrl}/v2/smart-batches/${id}`,
            { params: { populates: 'batchConfiguration' } }
        );
    }

    updateSmartBatch(id: string, data: Partial<SmartBatch>) {
        return this._httpClient.put<{ data: SmartBatch }>(
            `${environment.apiUrl}/v2/smart-batches/${id}`,
            data
        );
    }

    getSmartBatchStats(configId: string) {
        return this._httpClient.get<{ data: SmartBatchStats }>(
            `${environment.apiUrl}/v2/smart-batches/stats/${configId}`
        );
    }

    /**
     * Execute a feature request using its configured URL and method
     * This is used by the frontend to make API calls with the user's JWT
     */
    executeFeatureRequest(url: string, method: string = 'GET', params: any = {}) {
        // Build the full URL. If url already starts with http/https, use it as is.
        // Otherwise, prepend environment.apiUrl.
        const fullUrl = url.startsWith('http')
            ? url
            : `${environment.apiUrl}/${url.replace(/^\//, '')}`;

        if (method.toUpperCase() === 'GET') {
            return this._httpClient.get<{ data: any }>(fullUrl, { params });
        } else {
            return this._httpClient.post<{ data: any }>(fullUrl, params);
        }
    }

    /**
     * Update a single row's status and results after processing
     */
    updateBatchRow(
        batchId: string,
        rowIndex: number,
        update: {
            status: SmartBatchRowStatus;
            results?: Record<number, any>;
            errors?: { step: number; message: string; code: string }[];
            /** Merged server-side into the row’s inputData; omit keys using null values to clear (server strips null/undefined keys). */
            inputData?: Record<string, unknown>;
        }
    ) {
        return this._httpClient.put<{ data: SmartBatch }>(
            `${environment.apiUrl}/v2/smart-batches/${batchId}/rows/${rowIndex}`,
            update
        );
    }
}

export interface SmartBatch {
    _id?: string;
    batchConfiguration: string | BatchConfiguration;
    client: string;
    name: string;
    status: 'draft' | 'pending' | 'processing' | 'completed' | 'failed' | 'cancelled';
    rows: SmartBatchRow[];
    totalRows: number;
    completedRows: number;
    failedRows: number;
    partialRows?: number;
    startedAt?: string;
    completedAt?: string;
    createdAt?: string;
    updatedAt?: string;
}

export interface SmartBatchRow {
    rowIndex: number;
    inputData: any;
    status: SmartBatchRowStatus;
    results: Record<number, any>;
    errors: { step: number; message: string; code: string }[];
    processedAt?: string;
}

export interface SmartBatchStats {
    totalBatches: number;
    totalRows: number;
    completedRows: number;
    failedRows: number;
    partialRows?: number;
    pendingRows: number;
    statusBreakdown: {
        draft: number;
        pending: number;
        processing: number;
        completed: number;
        failed: number;
        cancelled: number;
    };
}
