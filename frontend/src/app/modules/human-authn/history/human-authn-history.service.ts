import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { toHttpParams } from 'app/modules/smart-enroll/biometrics/http-params.util';
import { environment } from 'environments/environment';
import { Observable, map } from 'rxjs';
import { HUMAN_AUTHN_FEATURE_CODES, isHumanAuthnFeatureCode } from './human-authn-history.constants';

export interface HumanAuthnHistoryRow {
    _id: string;
    endpoint?: string;
    code?: string;
    params?: Record<string, unknown>;
    method?: string;
    status?: string;
    statusCode?: number;
    cost?: number;
    duration?: number;
    createdAt?: string;
}

export interface HumanAuthnHistoryListResponse {
    data: HumanAuthnHistoryRow[];
    total?: number | null;
    limit?: number;
    page?: number;
}

export interface HumanAuthnHistoryDetail extends HumanAuthnHistoryRow {
    apiResponse?: unknown;
}

export interface HumanAuthnTopSalesRow {
    _id: string;
    total: number;
    ok: number;
    failed: number;
    credits?: number;
    feature?: { code?: string; name?: string };
}

export interface HumanAuthnHistoryListParams {
    like_code?: string;
    limit?: number;
    page?: number;
    where_code?: string;
    whereGTE_createdAt?: string;
    whereLTE_createdAt?: string;
    where_status?: 'failed' | 'ok';
}

const LIST_COLUMNS = '_id statusCode status code endpoint createdAt cost';

@Injectable({ providedIn: 'root' })
export class HumanAuthnHistoryService {
    private _http = inject(HttpClient);

    private get apiUrl(): string {
        return environment.apiUrl;
    }

    /**
     * Lists HumanAuthn API requests only (HumanID + liveness feature codes).
     */
    listRequests = (params: HumanAuthnHistoryListParams = {}): Observable<HumanAuthnHistoryListResponse> => {
        const { like_code, where_code, ...rest } = params;
        const query: Record<string, unknown> = {
            columns: LIST_COLUMNS,
            in_code: where_code ? undefined : [...HUMAN_AUTHN_FEATURE_CODES],
            lean: true,
            sort: '-createdAt',
            ...rest,
        };

        if (where_code) query['where_code'] = where_code;
        if (like_code) query['like_code'] = like_code;

        return this._http.get<HumanAuthnHistoryListResponse>(`${this.apiUrl}/v2/api-requests`, {
            headers: this.authHeaders(),
            params: toHttpParams(query),
        });
    };

    /**
     * Loads sanitized request params and response for the detail drawer.
     */
    getRequestDetail = (id: string): Observable<{ data: HumanAuthnHistoryDetail }> =>
        this._http.get<{ data: HumanAuthnHistoryDetail }>(
            `${this.apiUrl}/v2/api-requests/${id}/data`,
            { headers: this.authHeaders() }
        );

    /**
     * Yearly top-sales rows scoped to HumanAuthn feature codes.
     */
    getTopSales = (params: Record<string, unknown> = {}): Observable<HumanAuthnTopSalesRow[]> =>
        this._http
            .get<HumanAuthnTopSalesRow[] | { data: HumanAuthnTopSalesRow[] }>(
                `${this.apiUrl}/v2/api-requests/top-sales`,
                {
                    headers: this.authHeaders(),
                    params: toHttpParams(params),
                }
            )
            .pipe(
                map((res) => {
                    const rows = Array.isArray(res) ? res : res?.data || [];
                    return rows.filter((row) => isHumanAuthnFeatureCode(row._id || row.feature?.code));
                })
            );

    private authHeaders = (): Record<string, string> => {
        const token = localStorage.getItem('accessToken');
        return token ? { Authorization: `Bearer ${token}` } : {};
    };
}
