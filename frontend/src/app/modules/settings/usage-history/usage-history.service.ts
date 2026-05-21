import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { toHttpParams } from '../../smart-enroll/biometrics/http-params.util';

export interface AppFeatureUsageMeta {
    name: string;
    nameES?: string | null;
    url?: string | null;
}

/** Detailed-view line item returned by GET /v2/credits without `groupThem`. */
export interface CreditUsageItem {
    _id: string;
    amount: number;
    code?: string;
    group?: string;
    createdAt?: string;
}

/** Simplified-view bucket from `groupThem: 1`. Keys are `<code>:<something>`. */
export interface GroupedUsageBucket {
    /** Sum of credits charged for this product (negative because spend). */
    amount: number;
    /** All credit records that contributed to this bucket. */
    indexes: string[];
    /** Total cost across `indexes` (positive USD). */
    total: number;
}

/** Backend returns `{ data: GroupedUsage }` keyed by `<productCode>:<...>`. */
export type GroupedUsageResponse = Record<string, GroupedUsageBucket>;

/** Common response envelope from `MongoORM` list builders. */
export interface UsageListResponse<T> {
    data: T;
    total?: number;
    limit?: number;
    page?: number;
    pages?: number;
    allServicesCost?: number;
    appFeatures?: Record<string, AppFeatureUsageMeta>;
}

export interface UsageListParams {
    where_category?: string;
    where_status?: string;
    whereGTE_createdAt?: string;
    whereLTE_createdAt?: string;
    groupThem?: 0 | 1;
    withAllServicesCost?: 'true' | 'false';
    perPage?: number;
    page?: number;
    sort?: string;
    columns?: string;
    lean?: boolean;
    /** Exact match on credit `code` (single value). */
    whereCode?: string;
    /** Exact match filter on credit `code` (supports multiple values via `in_code`). */
    inCode?: string[];
}

/**
 * Settings → Usage history API surface. Wraps `GET /v2/credits` with the same query
 * shape used by the legacy verifik-client-panel `UsageRecordComponent`.
 *
 * Two callable shapes:
 * - `listGrouped(...)` returns `{ data: GroupedUsageResponse }` (simplified view).
 * - `listDetailed(...)` returns `{ data: CreditUsageItem[], total, page, allServicesCost? }`.
 */
@Injectable({ providedIn: 'root' })
export class UsageHistoryService {
    private readonly apiUrl = environment.apiUrl;

    constructor(private _http: HttpClient) {}

    listGrouped(
        params: UsageListParams
    ): Observable<UsageListResponse<GroupedUsageResponse>> {
        return this._http.get<UsageListResponse<GroupedUsageResponse>>(
            `${this.apiUrl}/v2/credits`,
            {
                params: this._toHttpParams({ ...params, groupThem: 1 }),
                headers: this._authHeaders(),
            }
        );
    }

    listDetailed(
        params: UsageListParams
    ): Observable<UsageListResponse<CreditUsageItem[]>> {
        return this._http.get<UsageListResponse<CreditUsageItem[]>>(
            `${this.apiUrl}/v2/credits`,
            {
                params: this._toHttpParams(params),
                headers: this._authHeaders(),
            }
        );
    }

    private _toHttpParams(params: UsageListParams): ReturnType<typeof toHttpParams> {
        const { inCode, whereCode, ...rest } = params;
        const query: Record<string, unknown> = { ...rest };

        if (whereCode) {
            query.where_code = whereCode;
        } else if (inCode?.length === 1) {
            // Single `in_code` query values arrive as a string server-side; use exact match instead.
            query.where_code = inCode[0];
        } else if (inCode && inCode.length > 1) {
            query.in_code = inCode;
        }

        return toHttpParams(query);
    }

    private _authHeaders(extra: Record<string, string> = {}): Record<string, string> {
        const token = localStorage.getItem('accessToken');
        return token ? { ...extra, Authorization: `Bearer ${token}` } : extra;
    }
}
