import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable, map } from 'rxjs';
import { FACE_RECOGNITION_CODES, isFaceRecognitionCode } from '../biometrics/biometrics.constants';
import { toHttpParams } from '../biometrics/http-params.util';

export interface ApiRequestRow {
    _id: string;
    endpoint: string;
    code?: string;
    params?: Record<string, unknown>;
    method?: string;
    status?: string;
    statusCode?: number;
    cost?: number;
    duration?: number;
    createdAt: string;
}

export interface ApiRequestListResponse {
    data: ApiRequestRow[];
    total: number;
    limit?: number;
    page?: number;
    pages?: number;
}

export interface TopSalesRow {
    _id: string;
    total: number;
    ok: number;
    failed: number;
    credits?: number;
    feature?: { code?: string; name?: string };
}

export interface ApiRequestDetail {
    _id: string;
    endpoint: string;
    code?: string;
    params?: Record<string, unknown>;
    apiResponse?: unknown;
    statusCode?: number;
    cost?: number;
    createdAt?: string;
}

export interface UsageHistoryListParams {
    like_code?: string;
    limit?: number;
    page?: number;
    sort?: string;
    where_code?: string;
    whereGTE_createdAt?: string;
    whereLTE_createdAt?: string;
    where_status?: 'failed' | 'ok';
}

@Injectable({ providedIn: 'root' })
export class SmartEnrollUsageHistoryService {
    private _http = inject(HttpClient);

    private get apiUrl(): string {
        return environment.apiUrl;
    }

    private authHeaders(): Record<string, string> {
        const token = localStorage.getItem('accessToken');
        return token ? { Authorization: `Bearer ${token}` } : {};
    }

    listRequests(params: UsageHistoryListParams = {}): Observable<ApiRequestListResponse> {
        const { like_code, where_code, ...rest } = params;

        const query: Record<string, unknown> = {
            in_code: where_code ? undefined : [...FACE_RECOGNITION_CODES],
            sort: '-createdAt',
            ...rest,
        };

        if (where_code) query['where_code'] = where_code;
        if (like_code) query['like_code'] = like_code;

        return this._http.get<ApiRequestListResponse>(`${this.apiUrl}/v2/api-requests`, {
            headers: this.authHeaders(),
            params: toHttpParams(query),
        });
    }

    getRequestDetail(id: string): Observable<{ data: ApiRequestDetail }> {
        return this._http.get<{ data: ApiRequestDetail }>(`${this.apiUrl}/v2/api-requests/${id}/data`, {
            headers: this.authHeaders(),
        });
    }

    getTopSales(params: Record<string, unknown> = {}): Observable<TopSalesRow[]> {
        return this._http
            .get<TopSalesRow[] | { data: TopSalesRow[] }>(`${this.apiUrl}/v2/api-requests/top-sales`, {
                headers: this.authHeaders(),
                params: toHttpParams(params),
            })
            .pipe(
                map((res) => {
                    const rows = Array.isArray(res) ? res : res?.data || [];
                    return rows.filter((r) => isFaceRecognitionCode(r._id || r.feature?.code));
                })
            );
    }

    getMonthlyMetrics(year: string): Observable<unknown[]> {
        return this._http.get<unknown[]>(`${this.apiUrl}/v2/api-requests/monthly`, {
            headers: this.authHeaders(),
            params: toHttpParams({ year }),
        });
    }
}
