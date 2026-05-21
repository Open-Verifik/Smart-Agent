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
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSort, MatSortModule, Sort } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { DateTime } from 'luxon';
import { Subject } from 'rxjs';
import * as XLSX from 'xlsx';
import {
    AppFeatureUsageMeta,
    CreditUsageItem,
    GroupedUsageResponse,
    UsageHistoryService,
    UsageListParams,
} from './usage-history.service';
import {
    UsageProductFilterComponent,
    UsageProductOption,
} from './usage-product-filter.component';

type ViewMode = 'simplified' | 'detailed';

/** Preset date windows for Usage history filters (Luxon `'week'` follows active locale). */
type UsageQuickRangeId =
    | 'today'
    | 'yesterday'
    | 'this_week'
    | 'last_week'
    | 'this_month'
    | 'last_month';

interface SimplifiedRow {
    code: string;
    product: string;
    quantity: number;
    cost: number;
    total: number;
}

interface DetailedRow {
    code: string;
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
        MatPaginatorModule,
        MatProgressSpinnerModule,
        MatSortModule,
        MatTableModule,
        MatTooltipModule,
        TranslocoModule,
        UsageProductFilterComponent,
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

    view = signal<ViewMode>('simplified');
    loading = signal(false);
    exporting = signal(false);

    /** Date range — uses Luxon (project-wide adapter). */
    rangeStart = new FormControl<DateTime | null>(null);
    rangeEnd = new FormControl<DateTime | null>(null);

    /** Selected product codes for multi-select filter (empty = all products). */
    selectedProductCodes: string[] = [];

    /** Products with usage in the active date range (dropdown options). */
    productOptions = signal<UsageProductOption[]>([]);

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

    /** AppFeature metadata keyed by credit `code` (from GET /v2/credits when `where_category=usage`). */
    appFeatures = signal<Record<string, AppFeatureUsageMeta>>({});

    /** Selected quick date preset, if current range matches a preset exactly. */
    activeQuickRangeId = signal<UsageQuickRangeId | null>(null);

    /** Presets shown as chip-style buttons (order preserved). */
    readonly quickRangeIds: UsageQuickRangeId[] = [
        'today',
        'yesterday',
        'this_week',
        'last_week',
        'this_month',
        'last_month',
    ];

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

    get disableActions(): boolean {
        return this.loading() || this.exporting();
    }

    get isFiltersDirty(): boolean {
        return this.selectedProductCodes.length > 0;
    }

    ngOnInit(): void {
        this._setDefaultDateRange();
        this._syncQuickRangeSelectionFromRange();
        this._fetch();
    }

    ngOnDestroy(): void {
        this._destroy$.next();
        this._destroy$.complete();
    }

    onViewChange(view: ViewMode): void {
        if (view === this.view()) return;
        this.view.set(view);
        this.pageIndex = 0;
        this.sortActive.set(view === 'simplified' ? 'total' : 'createdAt');
        this.sortDirection.set('desc');
        this.simplifiedRows.set([]);
        this.detailedRows.set([]);
        this.allServicesCost.set(0);
        this.appFeatures.set({});
        this._fetch();
    }

    onQuickRangeSelect(id: UsageQuickRangeId): void {
        if (this.disableActions) return;
        const { start, end } = this._boundsForQuickRange(id);
        this.rangeStart.setValue(start);
        this.rangeEnd.setValue(end);
        this.activeQuickRangeId.set(id);
        this.pageIndex = 0;
        this._fetch();
        this._cdr.markForCheck();
    }

    isQuickRangeActive(id: UsageQuickRangeId): boolean {
        return this.activeQuickRangeId() === id;
    }

    onRangeChange(): void {
        if (!this.rangeStart.value || !this.rangeEnd.value) return;
        this._syncQuickRangeSelectionFromRange();
        this.pageIndex = 0;
        this._fetch();
        this._cdr.markForCheck();
    }

    onProductFilterChange(codes: string[]): void {
        this.selectedProductCodes = codes;
        if (this.view() === 'detailed') {
            this.pageIndex = 0;
            this._fetchDetailed();
        } else {
            this._cdr.markForCheck();
        }
    }

    onPage(ev: PageEvent): void {
        if (this.view() !== 'detailed') return;
        this.pageIndex = ev.pageIndex;
        this.pageSize = ev.pageSize;
        this._fetchDetailed();
    }

    onSort(sort: Sort): void {
        this.sortActive.set(sort.active);
        this.sortDirection.set(sort.direction || 'desc');
        if (this.view() === 'detailed') {
            this.pageIndex = 0;
            this._fetchDetailed();
        } else {
            this._cdr.markForCheck();
        }
    }

    clearFilters(): void {
        this.selectedProductCodes = [];
        this._setDefaultDateRange();
        this.activeQuickRangeId.set(null);
        this.pageIndex = 0;
        this._fetch();
        this._cdr.markForCheck();
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
                const endpointKey = this._t('settings.usageHistory.endpoint');
                const rows = this._filteredSimplifiedSorted();
                const meta = this.appFeatures();
                formatted = rows.map((r) => ({
                    [this._t('settings.usageHistory.product')]: r.product,
                    [endpointKey]: this._endpointPathFromMeta(r.code, meta) ?? '',
                    [this._t('settings.usageHistory.quantity')]: r.quantity,
                    [this._t('settings.usageHistory.unit_price')]: this._fmtCurrency(r.cost),
                    [this._t('settings.usageHistory.total')]: this._fmtCurrency(r.total),
                }));
                formatted.push({
                    [this._t('settings.usageHistory.product')]: this._t(
                        'settings.usageHistory.allRecords'
                    ),
                    [endpointKey]: '',
                    [this._t('settings.usageHistory.quantity')]: this.filteredTotalQuantity,
                    [this._t('settings.usageHistory.unit_price')]: '',
                    [this._t('settings.usageHistory.total')]: this._fmtCurrency(this.filteredTotal),
                });
            } else {
                const endpointKey = this._t('settings.usageHistory.endpoint');
                const { items, appFeatures: exportMeta } = await this._fetchDetailedForExport(
                    start,
                    end
                );
                formatted = items.map((row) => ({
                    [this._t('settings.usageHistory.created_at')]: row.createdAt
                        ? DateTime.fromISO(row.createdAt).toFormat('h:mma MMM dd, yyyy')
                        : '',
                    [this._t('settings.usageHistory.category')]: this._translateGroup(row.group),
                    [this._t('settings.usageHistory.product')]: this._labelFromAppFeatureMeta(
                        row.code,
                        exportMeta
                    ),
                    [endpointKey]: this._endpointPathFromMeta(row.code, exportMeta) ?? '',
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
                    [endpointKey]: '',
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
        return this._labelFromAppFeatureMeta(code, this.appFeatures());
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

    /**
     * API path for Product column (e.g. `/v2/...`), no host — from AppFeature.url.
     */
    featureEndpointPath(code?: string): string | null {
        return this._endpointPathFromMeta(code, this.appFeatures());
    }

    private _fetch(): void {
        this._loadProductCatalog();
    }

    /** Grouped fetch for product catalog (+ summary rows in simplified view). */
    private _loadProductCatalog(): void {
        const start = this.rangeStart.value;
        const end = this.rangeEnd.value;
        if (!start?.isValid || !end?.isValid) return;

        this.loading.set(true);
        this._cdr.markForCheck();

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
                const meta = res?.appFeatures ?? {};
                this.appFeatures.set(meta);
                const grouped = res?.data ?? {};
                this.productOptions.set(this._buildProductOptions(grouped, meta));
                this._pruneSelectedProductCodes();
                if (this.view() === 'simplified') {
                    this.simplifiedRows.set(this._buildSimplifiedRows(grouped, meta));
                    this.loading.set(false);
                    this._cdr.markForCheck();
                    return;
                }
                this._fetchDetailed(false);
            },
            error: () => {
                this.productOptions.set([]);
                this.simplifiedRows.set([]);
                this.appFeatures.set({});
                if (this.view() === 'detailed') {
                    this.detailedRows.set([]);
                    this.total.set(0);
                    this.allServicesCost.set(0);
                }
                this.loading.set(false);
                this._cdr.markForCheck();
            },
        });
    }

    /** Paginated line items for detailed view (requires catalog load first for labels). */
    private _fetchDetailed(setLoading = true): void {
        const start = this.rangeStart.value;
        const end = this.rangeEnd.value;
        if (!start?.isValid || !end?.isValid) return;

        if (setLoading) {
            this.loading.set(true);
            this._cdr.markForCheck();
        }

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
        if (this.selectedProductCodes.length) {
            params.inCode = [...this.selectedProductCodes];
        }

        this._service.listDetailed(params).subscribe({
            next: (res) => {
                const meta = {
                    ...this.appFeatures(),
                    ...(res?.appFeatures ?? {}),
                };
                this.appFeatures.set(meta);
                const items = res?.data ?? [];
                this.detailedRows.set(
                    items.map((it) => ({
                        code: it.code ?? '',
                        createdAt: it.createdAt ?? '',
                        product: this._labelFromAppFeatureMeta(it.code, meta),
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
                this.allServicesCost.set(0);
                this.loading.set(false);
                this._cdr.markForCheck();
            },
        });
    }

    private async _fetchDetailedForExport(
        start: DateTime,
        end: DateTime
    ): Promise<{
        items: CreditUsageItem[];
        appFeatures: Record<string, AppFeatureUsageMeta>;
    }> {
        const params: UsageListParams = {
            where_category: 'usage',
            where_status: 'approved',
            whereGTE_createdAt: start.toFormat('yyyy-LL-dd'),
            whereLTE_createdAt: end.toFormat('yyyy-LL-dd'),
            columns: '_id amount code group createdAt',
            sort: '-createdAt',
            lean: true,
        };
        if (this.selectedProductCodes.length) {
            params.inCode = [...this.selectedProductCodes];
        }
        try {
            const res = await new Promise<{
                data?: CreditUsageItem[];
                appFeatures?: Record<string, AppFeatureUsageMeta>;
            }>((resolve, reject) => {
                this._service.listDetailed(params).subscribe({
                    next: (r) => resolve(r),
                    error: (err) => reject(err),
                });
            });
            return {
                items: res?.data ?? [],
                appFeatures: res?.appFeatures ?? {},
            };
        } catch {
            return { items: [], appFeatures: {} };
        }
    }

    /** Builds simplified rows from grouped buckets, skipping the legacy `allRecords` aggregate. */
    private _buildSimplifiedRows(
        data: GroupedUsageResponse,
        meta: Record<string, AppFeatureUsageMeta>
    ): SimplifiedRow[] {
        const rows: SimplifiedRow[] = [];
        for (const key of Object.keys(data || {})) {
            const productKey = key.split(':')[0];
            if (productKey === 'allRecords') continue;
            const bucket = data[key];
            rows.push({
                code: productKey,
                product: this._labelFromAppFeatureMeta(productKey, meta),
                quantity: bucket.indexes?.length ?? 0,
                cost: Math.abs(bucket.amount || 0),
                total: Math.abs(bucket.total || 0),
            });
        }
        return rows;
    }

    /** Applies product filter + active sort to simplified rows for the table. */
    private _filteredSimplifiedSorted(): SimplifiedRow[] {
        let rows = this.simplifiedRows();
        if (this.selectedProductCodes.length) {
            const selected = new Set(this.selectedProductCodes);
            rows = rows.filter((r) => selected.has(r.code));
        }

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

    /** Distinct products from grouped usage buckets, sorted by label. */
    private _buildProductOptions(
        data: GroupedUsageResponse,
        meta: Record<string, AppFeatureUsageMeta>
    ): UsageProductOption[] {
        const codes = new Set<string>();
        for (const key of Object.keys(data || {})) {
            const productKey = key.split(':')[0];
            if (productKey && productKey !== 'allRecords') codes.add(productKey);
        }

        return [...codes]
            .map((code) => ({
                code,
                label: this._labelFromAppFeatureMeta(code, meta),
                endpoint: this._endpointPathFromMeta(code, meta),
            }))
            .sort((a, b) => a.label.localeCompare(b.label));
    }

    /** Drops selected codes that are no longer in the catalog after a date-range change. */
    private _pruneSelectedProductCodes(): void {
        if (!this.selectedProductCodes.length) return;
        const available = new Set(this.productOptions().map((o) => o.code));
        const pruned = this.selectedProductCodes.filter((c) => available.has(c));
        if (pruned.length !== this.selectedProductCodes.length) {
            this.selectedProductCodes = pruned;
        }
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
     * Calendar bounds for a quick-range chip. Uses local zone; `'week'` follows Luxon/locale rules.
     */
    private _boundsForQuickRange(id: UsageQuickRangeId): { start: DateTime; end: DateTime } {
        const now = DateTime.now();
        switch (id) {
            case 'today':
                return { start: now.startOf('day'), end: now.endOf('day') };
            case 'yesterday': {
                const d = now.minus({ days: 1 });
                return { start: d.startOf('day'), end: d.endOf('day') };
            }
            case 'this_week':
                return { start: now.startOf('week'), end: now.endOf('week') };
            case 'last_week':
                return {
                    start: now.startOf('week').minus({ weeks: 1 }),
                    end: now.endOf('week').minus({ weeks: 1 }),
                };
            case 'this_month':
                return { start: now.startOf('month'), end: now.endOf('month') };
            case 'last_month': {
                const ref = now.minus({ months: 1 });
                return { start: ref.startOf('month'), end: ref.endOf('month') };
            }
        }
    }

    /** Sets `activeQuickRangeId` when the current range matches a chip preset (by calendar day). */
    private _syncQuickRangeSelectionFromRange(): void {
        const start = this.rangeStart.value;
        const end = this.rangeEnd.value;
        if (!start?.isValid || !end?.isValid) {
            this.activeQuickRangeId.set(null);
            return;
        }
        const startIso = start.startOf('day').toISODate();
        const endIso = end.startOf('day').toISODate();
        if (!startIso || !endIso) {
            this.activeQuickRangeId.set(null);
            return;
        }

        for (const id of this.quickRangeIds) {
            const b = this._boundsForQuickRange(id);
            const bStart = b.start.startOf('day').toISODate();
            const bEnd = b.end.startOf('day').toISODate();
            if (bStart === startIso && bEnd === endIso) {
                this.activeQuickRangeId.set(id);
                return;
            }
        }
        this.activeQuickRangeId.set(null);
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

    private _labelFromAppFeatureMeta(
        code: string | undefined,
        metaMap: Record<string, AppFeatureUsageMeta>
    ): string {
        if (!code) return '';
        const meta = metaMap[code];
        if (meta?.name) {
            const lang = this._transloco.getActiveLang?.() || 'en';
            const fromDb = lang === 'es' ? meta.nameES || meta.name : meta.name;
            if (fromDb) return fromDb;
        }
        return this._translateProduct(code);
    }

    private _endpointPathFromMeta(
        code: string | undefined,
        metaMap: Record<string, AppFeatureUsageMeta>
    ): string | null {
        if (!code) return null;
        const raw = metaMap[code]?.url;
        if (!raw || typeof raw !== 'string') return null;
        const t = raw.trim();
        if (!t) return null;

        if (/^https?:\/\//i.test(t)) {
            try {
                const pathname = new URL(t).pathname;
                return pathname && pathname !== '/' ? pathname : null;
            } catch {
                return null;
            }
        }

        const seg = t.replace(/^\/+/, '');
        if (!seg) return null;
        return `/${seg}`;
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
