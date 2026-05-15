import { CommonModule, formatCurrency } from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    Input,
    OnDestroy,
    OnInit,
    ViewChild,
    ViewEncapsulation,
    inject,
    signal,
} from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSort, MatSortModule, Sort } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { debounce } from 'lodash-es';
import { DateTime } from 'luxon';
import { Subject } from 'rxjs';
import * as XLSX from 'xlsx';
import {
    CreditUsageItem,
    GroupedUsageResponse,
    UsageHistoryService,
    UsageListParams,
} from './usage-history.service';

type ViewMode = 'simplified' | 'detailed';

interface SimplifiedRow {
    product: string;
    quantity: number;
    cost: number;
    total: number;
}

interface DetailedRow {
    createdAt: string;
    product: string;
    category: string;
    cost: number;
}

@Component({
    selector: 'app-usage-history',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatPaginatorModule,
        MatProgressSpinnerModule,
        MatSortModule,
        MatTableModule,
        MatTooltipModule,
        TranslocoModule,
    ],
    templateUrl: './usage-history.component.html',
    styleUrl: './usage-history.component.scss',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsageHistoryComponent implements OnInit, OnDestroy {
    @ViewChild(MatPaginator) paginator?: MatPaginator;
    @ViewChild(MatSort) sort?: MatSort;

    @Input() user: unknown;

    private readonly _service = inject(UsageHistoryService);
    private readonly _transloco = inject(TranslocoService);
    private readonly _cdr = inject(ChangeDetectorRef);
    private readonly _destroy$ = new Subject<void>();

    /** Debounced fetch used while typing in the search box (detailed view only). */
    private _debouncedFetch = debounce(() => this._fetch(), 350);

    view = signal<ViewMode>('simplified');
    loading = signal(false);
    exporting = signal(false);

    /** Date range — uses Luxon (project-wide adapter). */
    rangeStart = new FormControl<DateTime | null>(null);
    rangeEnd = new FormControl<DateTime | null>(null);

    /** Search text. Simplified = client-side filter, detailed = ?like_code server query. */
    searchInput = '';

    /** Simplified rows (grouped buckets). */
    simplifiedRows = signal<SimplifiedRow[]>([]);
    /** Detailed rows (paginated server response). */
    detailedRows = signal<DetailedRow[]>([]);

    /** Paginator state for detailed view. */
    pageIndex = 0;
    pageSize = 25;
    total = signal(0);

    /** Sort state (server-side for detailed; client-side for simplified). */
    sortActive = signal<string>('total');
    sortDirection = signal<'asc' | 'desc' | ''>('desc');

    /** Sum across all services for the active filter window (returned with page 1, detailed only). */
    allServicesCost = signal(0);

    get displayedColumns(): string[] {
        return this.view() === 'simplified'
            ? ['product', 'quantity', 'cost', 'total']
            : ['createdAt', 'product', 'category', 'cost'];
    }

    get pageSizeOptions(): number[] {
        return this.view() === 'simplified' ? [25, 50, 100] : [25, 50, 100, 250, 500];
    }

    get filteredRows(): SimplifiedRow[] | DetailedRow[] {
        if (this.view() === 'simplified') return this._filteredSimplifiedSorted();
        return this.detailedRows();
    }

    get filteredTotalQuantity(): number {
        if (this.view() !== 'simplified') return 0;
        return this._filteredSimplifiedSorted().reduce((acc, r) => acc + r.quantity, 0);
    }

    get filteredTotal(): number {
        if (this.view() === 'simplified') {
            return this._filteredSimplifiedSorted().reduce((acc, r) => acc + r.total, 0);
        }
        return this.allServicesCost();
    }

    get searchByPlaceholderKey(): string {
        return this.view() === 'simplified'
            ? 'settings.usageHistory.search_by_simplified'
            : 'settings.usageHistory.search_by_detailed';
    }

    get disableActions(): boolean {
        return this.loading() || this.exporting();
    }

    get isFiltersDirty(): boolean {
        return !!this.searchInput || !!this.rangeStart.value || !!this.rangeEnd.value;
    }

    ngOnInit(): void {
        this._setDefaultDateRange();
        this._fetch();
    }

    ngOnDestroy(): void {
        this._debouncedFetch.cancel();
        this._destroy$.next();
        this._destroy$.complete();
    }

    onViewChange(view: ViewMode): void {
        if (view === this.view()) return;
        this.view.set(view);
        this.searchInput = '';
        this.pageIndex = 0;
        this.sortActive.set(view === 'simplified' ? 'total' : 'createdAt');
        this.sortDirection.set('desc');
        this.simplifiedRows.set([]);
        this.detailedRows.set([]);
        this._fetch();
    }

    onRangeChange(): void {
        if (!this.rangeStart.value || !this.rangeEnd.value) return;
        this.pageIndex = 0;
        this._fetch();
    }

    onSearchChange(value: string): void {
        this.searchInput = (value || '').trim();
        if (this.view() === 'detailed') {
            this.pageIndex = 0;
            this._debouncedFetch();
        } else {
            this._cdr.markForCheck();
        }
    }

    onPage(ev: PageEvent): void {
        if (this.view() !== 'detailed') return;
        this.pageIndex = ev.pageIndex;
        this.pageSize = ev.pageSize;
        this._fetch();
    }

    onSort(sort: Sort): void {
        this.sortActive.set(sort.active);
        this.sortDirection.set(sort.direction || 'desc');
        if (this.view() === 'detailed') {
            this.pageIndex = 0;
            this._fetch();
        } else {
            this._cdr.markForCheck();
        }
    }

    clearFilters(): void {
        this.searchInput = '';
        this._setDefaultDateRange();
        this.pageIndex = 0;
        this._fetch();
    }

    async download(): Promise<void> {
        if (this.disableActions) return;
        const start = this.rangeStart.value;
        const end = this.rangeEnd.value;
        if (!start?.isValid || !end?.isValid) return;

        this.exporting.set(true);
        this._cdr.markForCheck();

        try {
            let formatted: Record<string, string | number>[] = [];

            if (this.view() === 'simplified') {
                const rows = this._filteredSimplifiedSorted();
                formatted = rows.map((r) => ({
                    [this._t('settings.usageHistory.product')]: r.product,
                    [this._t('settings.usageHistory.quantity')]: r.quantity,
                    [this._t('settings.usageHistory.unit_price')]: this._fmtCurrency(r.cost),
                    [this._t('settings.usageHistory.total')]: this._fmtCurrency(r.total),
                }));
                formatted.push({
                    [this._t('settings.usageHistory.product')]: this._t(
                        'settings.usageHistory.allRecords'
                    ),
                    [this._t('settings.usageHistory.quantity')]: this.filteredTotalQuantity,
                    [this._t('settings.usageHistory.unit_price')]: '',
                    [this._t('settings.usageHistory.total')]: this._fmtCurrency(this.filteredTotal),
                });
            } else {
                const exportData = await this._fetchDetailedForExport(start, end);
                formatted = exportData.map((row) => ({
                    [this._t('settings.usageHistory.created_at')]: row.createdAt
                        ? DateTime.fromISO(row.createdAt).toFormat('h:mma MMM dd, yyyy')
                        : '',
                    [this._t('settings.usageHistory.category')]: this._translateGroup(row.group),
                    [this._t('settings.usageHistory.product')]: this._translateProduct(row.code),
                    [this._t('settings.usageHistory.unit_price')]: this._fmtCurrency(
                        Math.abs(row.amount || 0)
                    ),
                }));
                formatted.push({
                    [this._t('settings.usageHistory.created_at')]: this._t(
                        'settings.usageHistory.allRecords'
                    ),
                    [this._t('settings.usageHistory.category')]: '',
                    [this._t('settings.usageHistory.product')]: '',
                    [this._t('settings.usageHistory.unit_price')]: this._fmtCurrency(
                        this.filteredTotal
                    ),
                });
            }

            this._writeWorkbook(formatted, start, end);
        } finally {
            this.exporting.set(false);
            this._cdr.markForCheck();
        }
    }

    formatCurrency(value: number): string {
        return this._fmtCurrency(value);
    }

    /**
     * Resolves a credit `code` to a human label. Translates if a key exists under
     * `settings.usageHistory.products.<code>`; falls back to the raw code so we
     * never display blank cells.
     */
    translateProductCode(code?: string): string {
        return this._translateProduct(code);
    }

    /**
     * Resolves a credit `group` to a label via `settings.usageHistory.group.<group>`.
     */
    translateGroup(group?: string): string {
        return this._translateGroup(group);
    }

    formatDate(value?: string): string {
        if (!value) return '';
        return DateTime.fromISO(value).toFormat('LLL dd, yyyy h:mma');
    }

    private _fetch(): void {
        const start = this.rangeStart.value;
        const end = this.rangeEnd.value;
        if (!start?.isValid || !end?.isValid) return;

        this.loading.set(true);
        this._cdr.markForCheck();

        if (this.view() === 'simplified') {
            const params: UsageListParams = {
                where_category: 'usage',
                where_status: 'approved',
                whereGTE_createdAt: start.toFormat('yyyy-LL-dd'),
                whereLTE_createdAt: end.toFormat('yyyy-LL-dd'),
                columns: '_id amount code status memo reason',
                sort: '-createdAt',
                groupThem: 1,
            };
            this._service.listGrouped(params).subscribe({
                next: (res) => {
                    const rows = this._buildSimplifiedRows(res?.data ?? {});
                    this.simplifiedRows.set(rows);
                    this.loading.set(false);
                    this._cdr.markForCheck();
                },
                error: () => {
                    this.simplifiedRows.set([]);
                    this.loading.set(false);
                    this._cdr.markForCheck();
                },
            });
            return;
        }

        // Detailed
        const params: UsageListParams = {
            where_category: 'usage',
            where_status: 'approved',
            whereGTE_createdAt: start.toFormat('yyyy-LL-dd'),
            whereLTE_createdAt: end.toFormat('yyyy-LL-dd'),
            columns: '_id amount code group createdAt',
            sort: this._serverSortString(),
            perPage: this.pageSize,
            page: this.pageIndex + 1,
            withAllServicesCost: 'true',
        };
        if (this.searchInput) params.likeCode = this.searchInput.toLowerCase();

        this._service.listDetailed(params).subscribe({
            next: (res) => {
                const items = res?.data ?? [];
                this.detailedRows.set(
                    items.map((it) => ({
                        createdAt: it.createdAt ?? '',
                        product: this._translateProduct(it.code),
                        category: this._translateGroup(it.group),
                        cost: (it.amount || 0) * -1,
                    }))
                );
                this.total.set(res?.total ?? items.length);
                if (typeof res?.allServicesCost === 'number') {
                    this.allServicesCost.set(Math.abs(res.allServicesCost));
                }
                this.loading.set(false);
                this._cdr.markForCheck();
            },
            error: () => {
                this.detailedRows.set([]);
                this.total.set(0);
                this.loading.set(false);
                this._cdr.markForCheck();
            },
        });
    }

    private async _fetchDetailedForExport(
        start: DateTime,
        end: DateTime
    ): Promise<CreditUsageItem[]> {
        const params: UsageListParams = {
            where_category: 'usage',
            where_status: 'approved',
            whereGTE_createdAt: start.toFormat('yyyy-LL-dd'),
            whereLTE_createdAt: end.toFormat('yyyy-LL-dd'),
            columns: '_id amount code group createdAt',
            sort: '-createdAt',
            lean: true,
        };
        if (this.searchInput) params.likeCode = this.searchInput.toLowerCase();
        try {
            const res = await new Promise<{ data?: CreditUsageItem[] }>((resolve, reject) => {
                this._service.listDetailed(params).subscribe({
                    next: (r) => resolve(r),
                    error: (err) => reject(err),
                });
            });
            return res?.data ?? [];
        } catch {
            return [];
        }
    }

    /** Builds simplified rows from grouped buckets, skipping the legacy `allRecords` aggregate. */
    private _buildSimplifiedRows(data: GroupedUsageResponse): SimplifiedRow[] {
        const rows: SimplifiedRow[] = [];
        for (const key of Object.keys(data || {})) {
            const productKey = key.split(':')[0];
            if (productKey === 'allRecords') continue;
            const bucket = data[key];
            rows.push({
                product: this._translateProduct(productKey),
                quantity: bucket.indexes?.length ?? 0,
                cost: Math.abs(bucket.amount || 0),
                total: Math.abs(bucket.total || 0),
            });
        }
        return rows;
    }

    /** Applies the search filter + active sort to simplified rows for the table. */
    private _filteredSimplifiedSorted(): SimplifiedRow[] {
        const term = this.searchInput.toLowerCase().trim();
        let rows = this.simplifiedRows();
        if (term) rows = rows.filter((r) => r.product.toLowerCase().includes(term));

        const active = this.sortActive();
        const dir = this.sortDirection();
        if (!dir) return rows;
        return [...rows].sort((a, b) => {
            const av = (a as any)[active] ?? 0;
            const bv = (b as any)[active] ?? 0;
            if (typeof av === 'string' && typeof bv === 'string') {
                return dir === 'asc' ? av.localeCompare(bv) : bv.localeCompare(av);
            }
            return dir === 'asc' ? av - bv : bv - av;
        });
    }

    private _serverSortString(): string {
        const map: Record<string, string> = {
            createdAt: 'createdAt',
            product: 'code',
            category: 'group',
            cost: 'amount',
        };
        const col = map[this.sortActive()] || 'createdAt';
        const dir = this.sortDirection();
        const prefix = dir === 'asc' ? '' : '-';
        return `${prefix}${col}`;
    }

    /**
     * Mirrors the legacy 12-month fallback. If the stored user has a monthly
     * subscription plan we use its window; otherwise we fall back to the last
     * 12 calendar months ending at the end of the current month.
     */
    private _setDefaultDateRange(): void {
        const sub = (this.user as any)?.clientSubscriptionPlan;
        if (sub?.interval === 'month' && sub?.startDate && sub?.endDate) {
            this.rangeStart.setValue(DateTime.fromISO(sub.startDate));
            this.rangeEnd.setValue(DateTime.fromISO(sub.endDate));
            return;
        }
        const now = DateTime.now();
        this.rangeStart.setValue(now.startOf('month').minus({ months: 12 }));
        this.rangeEnd.setValue(now.endOf('month'));
    }

    private _translateProduct(code?: string): string {
        if (!code) return '';
        const key = `settings.usageHistory.products.${code}`;
        const translated = this._transloco.translate(key);
        return translated && translated !== key ? translated : code;
    }

    private _translateGroup(group?: string): string {
        if (!group) return '';
        const key = `settings.usageHistory.group.${group}`;
        const translated = this._transloco.translate(key);
        return translated && translated !== key ? translated : group;
    }

    private _t(key: string): string {
        return this._transloco.translate(key);
    }

    private _fmtCurrency(value: number): string {
        return formatCurrency(value, 'en', '$', 'USD', '1.5');
    }

    private _writeWorkbook(
        rows: Record<string, string | number>[],
        start: DateTime,
        end: DateTime
    ): void {
        if (!rows.length) return;

        const worksheet = XLSX.utils.json_to_sheet(rows);
        worksheet['!cols'] = Object.keys(rows[0]).map((key) => ({
            wch: Math.max(...rows.map((r) => (r[key] ? r[key].toString().length : 12)), key.length),
        }));

        const workbook: XLSX.WorkBook = {
            Sheets: { data: worksheet },
            SheetNames: ['data'],
        };
        const buffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
        const blob = new Blob([buffer], {
            type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8',
        });

        const fileName = `verifik_usage_${start.toFormat('dd.LL.yyyy')}-${end.toFormat(
            'dd.LL.yyyy'
        )}_${this.view()}_${DateTime.now().toFormat('dd.LL.yyyy HH:mm')}.xlsx`;

        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }
}
