import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { toHttpParams } from 'app/modules/smart-enroll/biometrics/http-params.util';
import { environment } from 'environments/environment';
import { Observable, map } from 'rxjs';

export type UsageGroupBy = 'day' | 'month' | 'endpoint' | 'country' | 'costCenter';
export type UsageSource = 'apiRequests' | 'credits' | 'credits+failedRequests';

export interface UsageCounters {
    totalRequests: number;
    ok: number;
    failed: number;
    timedOut: number;
    costUSD: number;
}

export interface UsageGroup extends UsageCounters {
    key: string | null;
    costCenterCode?: string | null;
    costCenterName?: string | null;
}

export interface UsageReport {
    startDate: string;
    endDate: string;
    groupBy: UsageGroupBy | null;
    source: UsageSource;
    totals: UsageCounters;
    groups: UsageGroup[];
    page: number;
    limit: number;
    totalGroups: number;
    pages: number;
}

export interface UsageQuery {
    startDate?: string;
    endDate?: string;
    groupBy: UsageGroupBy;
    costCenter?: string;
    page?: number;
    limit?: number;
}

export interface CostCenter {
    _id: string;
    name: string;
    code: string;
    country: string;
    active: boolean;
    createdAt?: string;
}

export type CostCenterInput = Pick<CostCenter, 'name' | 'code' | 'country'> & { active?: boolean };

export interface AvailabilityService {
    code: string;
    name: string;
    successes: number;
    serviceFailures: number;
    clientErrors: number;
    sli: number | null;
}

export interface AvailabilityMonth {
    month: string;
    partial: boolean;
    successes: number;
    serviceFailures: number;
    clientErrors: number;
    sli: number | null;
    met: boolean | null;
    services: AvailabilityService[];
}

export interface AvailabilityReport {
    target: number;
    months: AvailabilityMonth[];
}

/**
 * Wraps `GET /v2/usage`, `GET /v2/usage/availability`, and `/v2/cost-centers`.
 * None of these calls spend credits.
 */
@Injectable({ providedIn: 'root' })
export class UsageApiService {
    private readonly _http = inject(HttpClient);
    private readonly _apiUrl = environment.apiUrl;

    getUsage(query: UsageQuery): Observable<UsageReport> {
        return this._http
            .get<{ data: UsageReport }>(`${this._apiUrl}/v2/usage`, {
                headers: this._authHeaders(),
                params: toHttpParams({ ...query }),
            })
            .pipe(map((res) => res.data));
    }

    /** Server-built CSV (UTF-8 with BOM) as a Blob plus the filename the API suggests. */
    downloadUsageCsv(query: UsageQuery): Observable<{ blob: Blob; filename: string }> {
        return this._http
            .get(`${this._apiUrl}/v2/usage`, {
                headers: this._authHeaders(),
                params: toHttpParams({ ...query, format: 'csv', limit: 500 }),
                responseType: 'blob',
                observe: 'response',
            })
            .pipe(map((res: HttpResponse<Blob>) => ({ blob: res.body as Blob, filename: this._filename(res, query.groupBy) })));
    }

    getAvailability(months = 6): Observable<AvailabilityReport> {
        return this._http
            .get<{ data: AvailabilityReport }>(`${this._apiUrl}/v2/usage/availability`, {
                headers: this._authHeaders(),
                params: toHttpParams({ months }),
            })
            .pipe(map((res) => res.data));
    }

    listCostCenters(includeInactive = true): Observable<CostCenter[]> {
        return this._http
            .get<{ data: CostCenter[] }>(`${this._apiUrl}/v2/cost-centers`, {
                headers: this._authHeaders(),
                params: toHttpParams(includeInactive ? { limit: 100 } : { limit: 100, active: true }),
            })
            .pipe(map((res) => res.data || []));
    }

    createCostCenter(input: CostCenterInput): Observable<CostCenter> {
        return this._http
            .post<{ data: CostCenter }>(`${this._apiUrl}/v2/cost-centers`, input, { headers: this._authHeaders() })
            .pipe(map((res) => res.data));
    }

    updateCostCenter(id: string, input: Partial<CostCenterInput>): Observable<CostCenter> {
        return this._http
            .put<{ data: CostCenter }>(`${this._apiUrl}/v2/cost-centers/${id}`, input, { headers: this._authHeaders() })
            .pipe(map((res) => res.data));
    }

    deactivateCostCenter(id: string): Observable<CostCenter> {
        return this._http
            .delete<{ data: CostCenter }>(`${this._apiUrl}/v2/cost-centers/${id}`, { headers: this._authHeaders() })
            .pipe(map((res) => res.data));
    }

    private _filename(res: HttpResponse<Blob>, groupBy: UsageGroupBy): string {
        const disposition = res.headers.get('Content-Disposition') || '';
        const match = /filename="([^"]+)"/.exec(disposition);

        return match?.[1] || `verifik-usage-${groupBy}-${new Date().toISOString().slice(0, 10)}.csv`;
    }

    private _authHeaders(): Record<string, string> {
        const token = localStorage.getItem('accessToken');

        return token ? { Authorization: `Bearer ${token}` } : {};
    }
}
