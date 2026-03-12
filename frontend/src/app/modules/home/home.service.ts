import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { environment } from 'environments/environment';
import { SessionService } from 'app/core/services/session.service';
import { catchError, tap, of, forkJoin, finalize } from 'rxjs';

export interface MetricClient {
    _id: string;
    total: number;
    ok: number;
    failed: number;
    credits: number;
    client?: unknown;
}

export interface MonthlyMetric {
    _id: { year: number; month: number };
    total: number;
    ok: number;
    failed: number;
}

export interface TopUsedApi {
    _id: string;
    total: number;
    ok: number;
    failed: number;
    credits: number;
}

@Injectable({
    providedIn: 'root',
})
export class HomeService {
    private _httpClient = inject(HttpClient);
    private _sessionService = inject(SessionService);

    countData = signal<MetricClient[] | null>(null);
    monthlyData = signal<MonthlyMetric[] | null>(null);
    topSalesData = signal<TopUsedApi[] | null>(null);
    loading = signal<boolean>(false);
    error = signal<string | null>(null);

    /**
     * Fetch stats when authenticated. Uses year/month params for count, monthly, top-sales.
     */
    fetchStats(): void {
        if (!this._sessionService.hasValidAuthentication()) {
            this.countData.set(null);
            this.monthlyData.set(null);
            this.topSalesData.set(null);
            return;
        }

        this.loading.set(true);
        this.error.set(null);

        const year = new Date().getFullYear();
        const month = new Date().getMonth() + 1;
        const apiUrl = environment.apiUrl;
        const token = localStorage.getItem('accessToken');
        const headers = token ? { Authorization: `Bearer ${token}` } : {};

        const count$ = this._httpClient
            .get<MetricClient[]>(`${apiUrl}/v2/api-requests/count`, {
                params: { year: year.toString(), month: month.toString() },
                headers,
            })
            .pipe(
                tap((data) => this.countData.set(Array.isArray(data) ? data : [])),
                catchError(() => {
                    this.error.set('Failed to load stats');
                    this.countData.set(null);
                    return of(null);
                })
            );

        const monthly$ = this._httpClient
            .get<MonthlyMetric[]>(`${apiUrl}/v2/api-requests/monthly`, {
                params: { year: year.toString() },
                headers,
            })
            .pipe(
                tap((data) => this.monthlyData.set(Array.isArray(data) ? data : [])),
                catchError(() => {
                    this.monthlyData.set(null);
                    return of(null);
                })
            );

        const topSales$ = this._httpClient
            .get<TopUsedApi[]>(`${apiUrl}/v2/api-requests/top-sales`, {
                params: { year: year.toString(), month: month.toString() },
                headers,
            })
            .pipe(
                tap((data) => this.topSalesData.set(Array.isArray(data) ? data : [])),
                catchError(() => {
                    this.topSalesData.set(null);
                    return of(null);
                })
            );

        forkJoin({ count: count$, monthly: monthly$, topSales: topSales$ })
            .pipe(finalize(() => this.loading.set(false)))
            .subscribe();
    }

    /** Aggregated totals from count data for the current client */
    getAggregatedTotals(): { total: number; ok: number; failed: number; credits: number } {
        const data = this.countData();
        if (!data || data.length === 0) {
            return { total: 0, ok: 0, failed: 0, credits: 0 };
        }
        return data.reduce(
            (acc, item) => ({
                total: acc.total + (item.total ?? 0),
                ok: acc.ok + (item.ok ?? 0),
                failed: acc.failed + (item.failed ?? 0),
                credits: acc.credits + (item.credits ?? 0),
            }),
            { total: 0, ok: 0, failed: 0, credits: 0 }
        );
    }
}
