import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { toHttpParams } from 'app/modules/smart-enroll/biometrics/http-params.util';
import { environment } from 'environments/environment';
import { Observable, catchError, finalize, map, tap, throwError } from 'rxjs';

export interface ApiRequest {
    _id: string;
    project: string;
    endpoint: string;
    code: string;
    params: any;
    method: string;
    status: string;
    statusCode: number;
    cost?: number;
    billingAdjustmentType?: string;
    billingStandardCost?: number;
    billingStandardCode?: string;
    duration: number;
    createdAt: string;
    client: string;
    paymentTx?: string;
    paymentWallet?: string;
    paymentAmount?: string;
    apiResponse?: unknown;
    timestamp?: string | number;
    serviceId?: string;
}

export interface ApiRequestResponse {
    data: ApiRequest[];
    total: number;
    limit: number;
    page: number;
    pages: number;
}

export interface HistoryListParams {
    like_code?: string;
    limit?: number;
    page?: number;
    where_code?: string;
    whereGTE_createdAt?: string;
    whereLTE_createdAt?: string;
    where_status?: 'failed' | 'ok';
}

export interface HistoryTopSalesRow {
    _id: string;
    total: number;
    ok: number;
    failed: number;
    credits?: number;
    feature?: { code?: string; name?: string };
}

const LIST_COLUMNS = '_id statusCode status code endpoint method createdAt cost billingAdjustmentType billingStandardCost billingStandardCode paymentTx paymentAmount';

@Injectable({
    providedIn: 'root',
})
export class HistoryService {
    private _httpClient = inject(HttpClient);

    requests = signal<ApiRequest[]>([]);
    total = signal<number>(0);
    loading = signal<boolean>(false);
    error = signal<string | null>(null);
    pageSize = signal<number>(10);
    pageIndex = signal<number>(0);

    getHistory = (params: HistoryListParams = {}) => {
        this.loading.set(true);
        this.error.set(null);

        return this._httpClient
            .get<ApiRequestResponse>(`${environment.apiUrl}/v2/api-requests`, {
                headers: this._authHeaders(),
                params: toHttpParams(this._listQuery(params)),
            })
            .pipe(
                tap((response) => {
                    this.requests.set(response.data || []);
                    this.total.set(response.total || 0);
                }),
                catchError((err) => {
                    this.error.set('Failed to load history');
                    return throwError(() => err);
                }),
                finalize(() => this.loading.set(false))
            );
    };

    /**
     * Same list query as getHistory without writing table signals.
     */
    listForExport = (params: HistoryListParams = {}): Observable<ApiRequestResponse> =>
        this._httpClient.get<ApiRequestResponse>(`${environment.apiUrl}/v2/api-requests`, {
            headers: this._authHeaders(),
            params: toHttpParams(this._listQuery(params)),
        });

    getPublicHistory = (wallet: string, page: number = 1, limit: number = 10) => {
        this.loading.set(true);
        this.error.set(null);

        return this._httpClient
            .get<ApiRequestResponse>(`${environment.apiUrl}/v2/public/api-requests`, {
                params: toHttpParams({
                    wallet,
                    page,
                    limit,
                    sort: '-createdAt',
                }),
            })
            .pipe(
                tap((response) => {
                    this.requests.set(response.data || []);
                    this.total.set(response.total || 0);
                }),
                catchError((err) => {
                    this.error.set('Failed to load history');
                    return throwError(() => err);
                }),
                finalize(() => this.loading.set(false))
            );
    };

    /**
     * Public x402 list without writing table signals.
     */
    listPublicForExport = (
        wallet: string,
        page: number = 1,
        limit: number = 200
    ): Observable<ApiRequestResponse> =>
        this._httpClient.get<ApiRequestResponse>(`${environment.apiUrl}/v2/public/api-requests`, {
            params: toHttpParams({
                wallet,
                page,
                limit,
                sort: '-createdAt',
            }),
        });

    getRequestDetail = (id: string): Observable<{ data: ApiRequest }> =>
        this._httpClient.get<{ data: ApiRequest }>(`${environment.apiUrl}/v2/api-requests/${id}/data`, {
            headers: this._authHeaders(),
        });

    getTopSales = (params: Record<string, unknown> = {}): Observable<HistoryTopSalesRow[]> =>
        this._httpClient
            .get<HistoryTopSalesRow[] | { data: HistoryTopSalesRow[] }>(
                `${environment.apiUrl}/v2/api-requests/top-sales`,
                {
                    headers: this._authHeaders(),
                    params: toHttpParams(params),
                }
            )
            .pipe(map((res) => (Array.isArray(res) ? res : res?.data || [])));

    private _listQuery = (params: HistoryListParams = {}) => ({
        columns: LIST_COLUMNS,
        lean: true,
        sort: '-createdAt',
        page: params.page ?? 1,
        limit: params.limit ?? 10,
        like_code: params.like_code,
        where_code: params.where_code,
        where_status: params.where_status,
        whereGTE_createdAt: params.whereGTE_createdAt,
        whereLTE_createdAt: params.whereLTE_createdAt,
    });

    private _authHeaders = (): Record<string, string> => {
        const token = localStorage.getItem('accessToken');
        return token ? { Authorization: `Bearer ${token}` } : {};
    };
}
