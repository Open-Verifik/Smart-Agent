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

export const DEFAULT_PER_PAGE = 20;

export interface PaginatedResponse<T> {
    data: T[];
    total?: number | null;
    limit?: number | null;
    page?: number | null;
    pages?: number | null;
}

export interface PaginationState {
    page: number;
    perPage: number;
    total: number;
    pages: number;
}

const EMPTY_PAGINATION: PaginationState = { page: 1, perPage: DEFAULT_PER_PAGE, total: 0, pages: 1 };

/** Older endpoints answer with a bare array, so fall back to the payload length. */
const readPagination = <T>(
    response: PaginatedResponse<T>,
    requestedPage: number,
    requestedPerPage: number
): PaginationState => {
    const total = response.total ?? response.data?.length ?? 0;
    const perPage = response.limit ?? requestedPerPage;

    return {
        page: response.page ?? requestedPage,
        perPage,
        total,
        pages: response.pages ?? Math.max(1, Math.ceil(total / perPage)),
    };
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
    configurationsPage = signal<PaginationState>({ ...EMPTY_PAGINATION });
    isLoading = signal<boolean>(false);

    constructor(private _httpClient: HttpClient) {}

    getConfigurations(options: { page?: number; perPage?: number } = {}) {
        this.isLoading.set(true);

        const page = options.page ?? 1;
        const perPage = options.perPage ?? DEFAULT_PER_PAGE;

        return this._httpClient
            .get<PaginatedResponse<BatchConfiguration>>(
                `${environment.apiUrl}/v2/batch-configurations`,
                { params: { page, perPage } }
            )
            .pipe(
                tap((response) => {
                    this.configurations.set(response.data ?? []);
                    this.configurationsPage.set(readPagination(response, page, perPage));
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
    getSmartBatches(
        configId: string,
        options: { page?: number; perPage?: number; sort?: string } = {}
    ) {
        return this._httpClient.get<PaginatedResponse<SmartBatch>>(
            `${environment.apiUrl}/v2/smart-batches`,
            {
                params: {
                    batchConfiguration: configId,
                    sort: options.sort ?? '-createdAt',
                    page: options.page ?? 1,
                    perPage: options.perPage ?? DEFAULT_PER_PAGE,
                },
            }
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
     * Hand the batch to the server-side FeatureRunner engine.
     * Returns as soon as the run is queued; progress comes from `getBatchProgress`.
     */
    startSmartBatch(id: string) {
        return this._httpClient.post<{ data: SmartBatch }>(
            `${environment.apiUrl}/v2/smart-batches/${id}/start`,
            {}
        );
    }

    /** Pre-flight credit cost, before committing to a run. */
    getBatchEstimate(id: string) {
        return this._httpClient.get<{ data: SmartBatchEstimate }>(
            `${environment.apiUrl}/v2/smart-batches/${id}/estimate`
        );
    }

    /** Lightweight progress payload for polling while the engine works. */
    getBatchProgress(id: string) {
        return this._httpClient.get<{ data: SmartBatchProgress }>(
            `${environment.apiUrl}/v2/smart-batches/${id}/progress`
        );
    }

    pauseSmartBatch(id: string) {
        return this._httpClient.post<{ data: SmartBatch }>(
            `${environment.apiUrl}/v2/smart-batches/${id}/pause`,
            {}
        );
    }

    resumeSmartBatch(id: string) {
        return this._httpClient.post<{ data: SmartBatch }>(
            `${environment.apiUrl}/v2/smart-batches/${id}/resume`,
            {}
        );
    }

    /**
     * Re-run failed and partial rows, keeping completed step results so only the
     * steps that actually failed are billed again.
     * @param rowIndexes Restrict to specific rows; omit to retry all failures.
     */
    retrySmartBatchFailedRows(id: string, rowIndexes?: number[]) {
        return this._httpClient.post<{ data: { batch: SmartBatch; retried: number } }>(
            `${environment.apiUrl}/v2/smart-batches/${id}/retry-failed`,
            rowIndexes?.length ? { rowIndexes } : {}
        );
    }

    cancelSmartBatch(id: string) {
        return this._httpClient.post<{ data: SmartBatch }>(
            `${environment.apiUrl}/v2/smart-batches/${id}/cancel`,
            {}
        );
    }

    /** Create a batch straight from a CSV / XLSX / JSONL payload, parsed server-side. */
    createSmartBatchFromFile(payload: {
        batchConfiguration: string;
        name: string;
        content: string;
        format?: 'csv' | 'xlsx' | 'jsonl';
        autoStart?: boolean;
    }) {
        return this._httpClient.post<{ data: SmartBatchFileImportResult }>(
            `${environment.apiUrl}/v2/smart-batches/from-file`,
            payload
        );
    }

    /**
     * Composed report model for a row, built by the shared backend composer.
     *
     * The PDF renderer builds from this same model, so preview and document
     * cannot drift. The local composer under `colombia-vehicle-report/` remains
     * for fixtures and offline preview only.
     */
    getRowReport(batchId: string, rowIndex: number) {
        return this._httpClient.get<{ data: Record<string, any> }>(
            `${environment.apiUrl}/v2/smart-batches/${batchId}/rows/${rowIndex}/report`
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
     * Patch a single row.
     *
     * Engine-managed batches only accept input-only patches (no `status`,
     * `results` or `errors`) and only while the batch is idle — the run owns
     * execution state.
     */
    updateBatchRow(
        batchId: string,
        rowIndex: number,
        update: {
            status?: SmartBatchRowStatus;
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

export type SmartBatchStatus =
    | 'draft'
    | 'pending'
    | 'processing'
    | 'paused'
    | 'completed'
    | 'failed'
    | 'cancelled';

export interface SmartBatch {
    _id?: string;
    batchConfiguration: string | BatchConfiguration;
    client: string;
    name: string;
    status: SmartBatchStatus;
    rows: SmartBatchRow[];
    totalRows: number;
    completedRows: number;
    failedRows: number;
    partialRows?: number;
    /** FeatureRunner run id. Absent on batches processed by the legacy browser executor. */
    run?: string;
    creditsSpent?: number;
    startedAt?: string;
    completedAt?: string;
    createdAt?: string;
    updatedAt?: string;
}

export interface SmartBatchEstimateStep {
    sequence: number;
    featureCode: string;
    price: number;
    total: number;
}

export interface SmartBatchEstimate {
    itemCount: number;
    creditsPerItem: number;
    totalCredits: number;
    breakdown: SmartBatchEstimateStep[];
    pendingRows: number;
    totalRows: number;
    availableCredits: number;
    sufficientCredits: boolean;
    shortfall: number;
}

export interface SmartBatchProgress {
    batchId: string;
    status: SmartBatchStatus;
    /** True when the FeatureRunner engine owns execution. */
    serverSide: boolean;
    totalRows: number;
    completedRows: number;
    failedRows: number;
    partialRows: number;
    pendingRows: number;
    startedAt?: string;
    completedAt?: string;
    creditsSpent: number;
    run?: {
        id: string;
        status: string;
        mergeStrategy: string;
        totalItems: number;
        completedItems: number;
        failedItems: number;
        partialItems: number;
        startedAt?: string;
        completedAt?: string;
    } | null;
    spend?: { credits: number; calls: number; billableCalls: number };
}

export interface SmartBatchFileImportResult {
    batch: SmartBatch;
    columns: string[];
    accepted: number;
    rejected: number;
    rejectedRows: {
        rowIndex: number;
        missing: string[];
        invalid: { field: string; value: string; allowed: string[] }[];
        inputData: Record<string, unknown>;
    }[];
    estimate: {
        itemCount: number;
        creditsPerItem: number;
        totalCredits: number;
        breakdown: SmartBatchEstimateStep[];
    };
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
