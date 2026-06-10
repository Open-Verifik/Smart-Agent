import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnDestroy,
    OnInit,
    ViewChild,
    inject,
    signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslocoModule } from '@jsverse/transloco';
import { DateTime } from 'luxon';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { FACE_RECOGNITION_CODES } from '../biometrics/biometrics.constants';
import {
    ApiRequestDetail,
    ApiRequestRow,
    SmartEnrollUsageHistoryService,
    TopSalesRow,
    UsageHistoryListParams,
} from './usage-history.service';

export type DatePreset = 'all' | 'this_month' | 'this_week' | 'today';
export type StatusFilter = 'all' | 'failed' | 'success';

@Component({
    selector: 'app-smart-enroll-usage-history',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        RouterLink,
        MatButtonModule,
        MatButtonToggleModule,
        MatIconModule,
        MatPaginatorModule,
        MatProgressSpinnerModule,
        MatSelectModule,
        MatSidenavModule,
        MatTableModule,
        MatTooltipModule,
        TranslocoModule,
    ],
    templateUrl: './usage-history.component.html',
    styleUrl: './usage-history.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SmartEnrollUsageHistoryComponent implements OnInit, OnDestroy {
    @ViewChild('drawer') drawer?: MatSidenav;

    private _service = inject(SmartEnrollUsageHistoryService);
    private _router = inject(Router);
    private _cdr = inject(ChangeDetectorRef);
    private _searchChange$ = new Subject<string>();
    private _destroy$ = new Subject<void>();

    readonly serviceCodes = [...FACE_RECOGNITION_CODES];
    readonly datePresets: DatePreset[] = ['all', 'today', 'this_week', 'this_month'];

    displayedColumns = ['status', 'service', 'date', 'cost', 'actions'];
    dataSource = new MatTableDataSource<ApiRequestRow>([]);

    datePreset: DatePreset = 'all';
    loading = signal(false);
    searchText = '';
    serviceFilter = '';
    statusFilter: StatusFilter = 'all';
    total = signal<number | null>(null);
    pageIndex = signal(0);
    pageSize = signal(10);
    topEndpoints = signal<TopSalesRow[]>([]);
    detail = signal<ApiRequestDetail | null>(null);
    detailLoading = signal(false);

    ngOnInit(): void {
        this._searchChange$.pipe(debounceTime(350), takeUntil(this._destroy$)).subscribe(() => {
            this.pageIndex.set(0);
            this.loadData();
        });

        this.loadData();
        this._loadTopSales();
    }

    ngOnDestroy(): void {
        this._destroy$.next();
        this._destroy$.complete();
    }

    get paginatorLength(): number {
        const exact = this.total();

        if (exact !== null && exact >= 0) return exact;

        const page = this.pageIndex();
        const size = this.pageSize();
        const rows = this.dataSource.data.length;

        return page * size + rows + (rows >= size ? 1 : 0);
    }

    get disabledClearFilters(): boolean {
        return (
            !this.searchText &&
            this.statusFilter === 'all' &&
            !this.serviceFilter &&
            this.datePreset === 'all'
        );
    }

    loadData(): void {
        this.loading.set(true);
        const params: UsageHistoryListParams = {
            page: this.pageIndex() + 1,
            limit: this.pageSize(),
            skipTotal: this.pageIndex() === 0 ? 1 : undefined,
            ...this._buildFilterParams(),
        };

        this._service.listRequests(params).subscribe({
            next: (res) => {
                this.dataSource.data = res.data || [];
                this.total.set(res.total ?? null);
                this.loading.set(false);
                this._cdr.markForCheck();
            },
            error: () => {
                this.dataSource.data = [];
                this.total.set(null);
                this.loading.set(false);
                this._cdr.markForCheck();
            },
        });
    }

    onSearchInput(value: string): void {
        this.searchText = value?.trim() || '';
        this._searchChange$.next(this.searchText);
    }

    onStatusFilterChange(value: StatusFilter): void {
        this.statusFilter = value;
        this.pageIndex.set(0);
        this.loadData();
    }

    onServiceFilterChange(value: string): void {
        this.serviceFilter = value || '';
        this.pageIndex.set(0);
        this.loadData();
    }

    onDatePresetChange(value: DatePreset): void {
        this.datePreset = value;
        this.pageIndex.set(0);
        this.loadData();
    }

    filterByEndpoint(code: string): void {
        this.serviceFilter = code;
        this.pageIndex.set(0);
        this.loadData();
        this._cdr.markForCheck();
    }

    isEndpointSelected(code: string): boolean {
        return this.serviceFilter === code;
    }

    endpointCardClasses(code: string): Record<string, boolean> {
        const selected = this.isEndpointSelected(code);

        return {
            'border-indigo-300': selected,
            'bg-indigo-50': selected,
            'dark:border-indigo-700': selected,
            'dark:bg-indigo-950/30': selected,
            'border-stone-200/90': !selected,
            'bg-white': !selected,
            'dark:border-gray-800': !selected,
            'dark:bg-gray-900/70': !selected,
        };
    }

    clearFilters(): void {
        this.searchText = '';
        this.statusFilter = 'all';
        this.serviceFilter = '';
        this.datePreset = 'all';
        this.pageIndex.set(0);
        this.loadData();
        this._cdr.markForCheck();
    }

    onPaginatorEvent(event: PageEvent): void {
        this.pageIndex.set(event.pageIndex);
        this.pageSize.set(event.pageSize);
        this.loadData();
    }

    openDetail(row: ApiRequestRow): void {
        this.detail.set(null);
        this.detailLoading.set(true);
        this.drawer?.open();
        this._service.getRequestDetail(row._id).subscribe({
            next: (res) => {
                this.detail.set(res.data);
                this.detailLoading.set(false);
                this._cdr.markForCheck();
            },
            error: () => {
                this.detailLoading.set(false);
                this._cdr.markForCheck();
            },
        });
    }

    closeDrawer(): void {
        this.drawer?.close();
        this.detail.set(null);
    }

    openInApi(row: ApiRequestRow): void {
        if (!row.code) return;
        this._router.navigate(['/smart-enroll/api'], {
            queryParams: { code: row.code },
        });
    }

    formatDate(value?: string): string {
        if (!value) return '—';
        return DateTime.fromISO(value).toFormat('LLL dd, yyyy h:mma');
    }

    formatCost(cost?: number): string {
        if (cost == null) return '—';
        return `$${Number(cost).toFixed(4)}`;
    }

    formatServiceLabel(code: string): string {
        return code
            .replace(/^face_recognition_/, '')
            .split('_')
            .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
            .join(' ');
    }

    endpointDisplayName(item: TopSalesRow): string {
        return item.feature?.name || this.formatServiceLabel(item._id);
    }

    getStatusClass(code?: number): string {
        if (!code) return 'bg-stone-100 text-stone-600 dark:bg-gray-800 dark:text-stone-300';
        if (code >= 200 && code < 300) return 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300';
        if (code >= 400 && code < 500) return 'bg-amber-100 text-amber-800 dark:bg-amber-950/40 dark:text-amber-300';
        return 'bg-red-100 text-red-700 dark:bg-red-950/40 dark:text-red-300';
    }

    datePresetKey(preset: DatePreset): string {
        const keys: Record<DatePreset, string> = {
            all: 'smartEnrollUsageHistory.filterDateAll',
            today: 'smartEnrollUsageHistory.filterDateToday',
            this_week: 'smartEnrollUsageHistory.filterDateThisWeek',
            this_month: 'smartEnrollUsageHistory.filterDateThisMonth',
        };
        return keys[preset];
    }

    private _buildFilterParams(): UsageHistoryListParams {
        const params: UsageHistoryListParams = {};

        if (this.searchText) params.like_code = this.searchText.toLowerCase();
        if (this.serviceFilter) params.where_code = this.serviceFilter;
        if (this.statusFilter === 'success') params.where_status = 'ok';
        if (this.statusFilter === 'failed') params.where_status = 'failed';

        const range = this._dateRangeForPreset(this.datePreset);
        if (range) {
            params.whereGTE_createdAt = range.start.toFormat('yyyy-MM-dd');
            params.whereLTE_createdAt = range.end.toFormat('yyyy-MM-dd');
        }

        return params;
    }

    private _dateRangeForPreset(preset: DatePreset): { end: DateTime; start: DateTime } | null {
        if (preset === 'all') return null;

        const now = DateTime.now();
        switch (preset) {
            case 'today':
                return { start: now.startOf('day'), end: now.endOf('day') };
            case 'this_week':
                return { start: now.startOf('week'), end: now.endOf('week') };
            case 'this_month':
                return { start: now.startOf('month'), end: now.endOf('month') };
            default:
                return null;
        }
    }

    private _loadTopSales(): void {
        const year = DateTime.now().toFormat('yyyy');
        this._service.getTopSales({ year }).subscribe({
            next: (rows) => {
                this.topEndpoints.set(rows.slice(0, 5));
                this._cdr.markForCheck();
            },
            error: () => this.topEndpoints.set([]),
        });
    }
}
