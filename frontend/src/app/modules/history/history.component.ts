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
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { DateTime } from 'luxon';
import { firstValueFrom, Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
import * as XLSX from 'xlsx';
import { environment } from '../../../environments/environment';
import { AgentWalletService } from '../chat/services/agent-wallet.service';
import {
    formatHistoryCostCredits,
    getHistoryBillingTooltipParams,
    isDynamicQueryPremiumAdjustment,
} from '../postman/postman-billing.util';
import {
    POSTMAN_HISTORY_PREFILL_STORAGE_KEY,
    PostmanHistoryPrefillPayload,
} from '../postman/postman-history-prefill';
import {
    ApiRequest,
    ApiRequestResponse,
    HistoryListParams,
    HistoryService,
    HistoryTopSalesRow,
} from './history.service';

export type DatePreset = 'all' | 'custom' | 'this_month' | 'this_week' | 'today';
export type HistoryExportFormat = 'csv' | 'json' | 'xlsx';
export type StatusFilter = 'all' | 'failed' | 'success';

const EXPORT_MAX = 10000;
const EXPORT_PAGE_SIZE = 200;

@Component({
    selector: 'history',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterLink,
        MatButtonModule,
        MatButtonToggleModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatPaginatorModule,
        MatProgressSpinnerModule,
        MatSelectModule,
        MatSidenavModule,
        MatSnackBarModule,
        MatTableModule,
        MatTooltipModule,
        TranslocoModule,
    ],
    templateUrl: './history.component.html',
    styleUrl: './history.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'flex flex-auto min-w-0 w-full',
    },
})
export class HistoryComponent implements OnInit, OnDestroy {
    @ViewChild('detailDrawer') detailDrawer?: MatSidenav;

    private _historyService = inject(HistoryService);
    private _walletService = inject(AgentWalletService);
    private _router = inject(Router);
    private _route = inject(ActivatedRoute);
    private _cdr = inject(ChangeDetectorRef);
    private _snack = inject(MatSnackBar);
    private _transloco = inject(TranslocoService);
    private _searchChange$ = new Subject<string>();
    private _destroy$ = new Subject<void>();

    readonly datePresets: DatePreset[] = ['all', 'today', 'this_week', 'this_month', 'custom'];
    readonly pageSizeOptions = [10, 25, 50];
    readonly dataSource = new MatTableDataSource<ApiRequest>([]);
    readonly rangeStart = new FormControl<DateTime | null>(null);
    readonly rangeEnd = new FormControl<DateTime | null>(null);

    displayedColumns: string[] = ['status', 'service', 'date', 'cost', 'actions'];
    datePreset: DatePreset = 'all';
    searchText = '';
    serviceFilter = '';
    statusFilter: StatusFilter = 'all';
    mode = signal<'credits' | 'x402'>('credits');
    selectedRequest = signal<ApiRequest | null>(null);
    detailLoading = signal(false);
    exporting = signal(false);
    topEndpoints = signal<HistoryTopSalesRow[]>([]);

    requests = this._historyService.requests;
    total = this._historyService.total;
    loading = this._historyService.loading;
    pageSize = this._historyService.pageSize;
    pageIndex = this._historyService.pageIndex;

    ngOnInit(): void {
        this._searchChange$.pipe(debounceTime(350), takeUntil(this._destroy$)).subscribe(() => {
            this.pageIndex.set(0);
            this.loadData();
        });
        this._route.queryParams.pipe(takeUntil(this._destroy$)).subscribe((params) => {
            const targetMode = params['view'] === 'x402' ? 'x402' : 'credits';
            if (this.mode() !== targetMode) {
                this.pageIndex.set(0);
                this.mode.set(targetMode);
            }
            this._syncColumns();
            this.loadData();
            if (targetMode === 'credits') this._loadTopSales();
        });
    }

    ngOnDestroy(): void {
        this._destroy$.next();
        this._destroy$.complete();
    }

    get disabledClearFilters(): boolean {
        return !this.searchText && this.statusFilter === 'all' && !this.serviceFilter && this.datePreset === 'all';
    }

    setMode = (mode: 'credits' | 'x402'): void => {
        this._router.navigate([], {
            relativeTo: this._route,
            queryParams: { view: mode === 'x402' ? 'x402' : null },
            queryParamsHandling: 'merge',
        });
    };

    loadData = (): void => {
        if (this.mode() === 'credits') {
            this._historyService.getHistory(this._buildFilterParams()).subscribe({
                next: () => this._applyRows(),
                error: () => this._applyRows([]),
            });
            return;
        }
        const wallet = this._walletService.getAddress();
        if (!wallet) {
            this._applyRows([]);
            return;
        }
        this._historyService
            .getPublicHistory(wallet, this.pageIndex() + 1, this.pageSize())
            .subscribe({
                next: () => this._applyRows(),
                error: () => this._applyRows([]),
            });
    };

    onSearchInput = (value: string): void => {
        this.searchText = value?.trim() || '';
        this._searchChange$.next(this.searchText);
    };

    onStatusFilterChange = (value: StatusFilter): void => {
        this.statusFilter = value;
        this.pageIndex.set(0);
        this.loadData();
    };

    onServiceFilterChange = (value: string): void => {
        this.serviceFilter = value || '';
        this.pageIndex.set(0);
        this.loadData();
    };

    onDatePresetChange = (value: DatePreset): void => {
        this.datePreset = value;
        this.pageIndex.set(0);
        if (value !== 'custom') {
            this.rangeStart.setValue(null, { emitEvent: false });
            this.rangeEnd.setValue(null, { emitEvent: false });
            this.loadData();
            return;
        }
        this._cdr.markForCheck();
    };

    onCustomRangeChange = (): void => {
        const start = this.rangeStart.value;
        const end = this.rangeEnd.value;
        if (!start?.isValid || !end?.isValid) return;
        this.pageIndex.set(0);
        this.loadData();
    };

    filterByEndpoint = (code: string): void => {
        this.serviceFilter = code;
        this.pageIndex.set(0);
        this.loadData();
        this._cdr.markForCheck();
    };

    isEndpointSelected = (code: string): boolean => this.serviceFilter === code;

    endpointCardClasses = (code: string): Record<string, boolean> => {
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
    };

    clearFilters = (): void => {
        this.searchText = '';
        this.statusFilter = 'all';
        this.serviceFilter = '';
        this.datePreset = 'all';
        this.rangeStart.setValue(null, { emitEvent: false });
        this.rangeEnd.setValue(null, { emitEvent: false });
        this.pageIndex.set(0);
        this.loadData();
        this._cdr.markForCheck();
    };

    onPaginatorEvent = (event: PageEvent): void => {
        this.pageIndex.set(event.pageIndex);
        this.pageSize.set(event.pageSize);
        this.loadData();
    };

    onPageSizeChange = (pageSize: number): void => {
        if (!pageSize || pageSize === this.pageSize()) return;
        this.pageIndex.set(0);
        this.pageSize.set(pageSize);
        this.loadData();
    };

    openDetail = (request: ApiRequest, event?: Event): void => {
        if (this.mode() !== 'credits') return;
        event?.stopPropagation();
        this.selectedRequest.set(request);
        this.detailLoading.set(true);
        this.detailDrawer?.open();
        this._historyService.getRequestDetail(request._id).subscribe({
            next: (res) => {
                this.selectedRequest.set({ ...request, ...res.data });
                this.detailLoading.set(false);
                this._cdr.markForCheck();
            },
            error: () => {
                this.detailLoading.set(false);
                this._cdr.markForCheck();
            },
        });
    };

    closeDetail = (): void => {
        this.detailDrawer?.close();
        this.selectedRequest.set(null);
    };

    copyText = (text: string): void => {
        navigator.clipboard.writeText(text);
    };

    shortHash = (hash: string): string => {
        if (!hash) return '';
        return `${hash.substring(0, 6)}...${hash.substring(hash.length - 4)}`;
    };

    formatDate = (date?: string | number): string => {
        if (!date) return '—';
        if (typeof date === 'number') return DateTime.fromMillis(date).toFormat('LLL dd, yyyy h:mma');
        const parsed = DateTime.fromISO(date);
        return parsed.isValid ? parsed.toFormat('LLL dd, yyyy h:mma') : '—';
    };

    formatCost = (cost?: number | string | null): string => {
        const formatted = formatHistoryCostCredits(cost);
        return formatted === '-' ? '—' : `${formatted} credits`;
    };

    formatServiceLabel = (code: string): string =>
        code
            .split(/[-_]/)
            .filter(Boolean)
            .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
            .join(' ');

    endpointDisplayName = (item: HistoryTopSalesRow): string =>
        item.feature?.name || this.formatServiceLabel(item._id);

    getStatusClass = (code?: number): string => {
        if (!code) return 'bg-stone-100 text-stone-600 dark:bg-gray-800 dark:text-stone-300';
        if (code >= 200 && code < 300) {
            return 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300';
        }
        if (code >= 400 && code < 500) {
            return 'bg-amber-100 text-amber-800 dark:bg-amber-950/40 dark:text-amber-300';
        }
        return 'bg-red-100 text-red-700 dark:bg-red-950/40 dark:text-red-300';
    };

    hasDynamicQueryBilling = (request: ApiRequest): boolean => isDynamicQueryPremiumAdjustment(request);

    getDynamicQueryTooltipKey = (): string => 'history.dynamicQuery.tooltip';

    getDynamicQueryTooltipParams = (request: ApiRequest) => getHistoryBillingTooltipParams(request);

    canRepeatRequest = (request: ApiRequest): boolean => !!request?.code;

    repeatRequest = (request: ApiRequest): void => {
        if (!this.canRepeatRequest(request)) return;
        const payload: PostmanHistoryPrefillPayload = {
            v: 1,
            source: 'history',
            code: request.code,
            paramValues: this._buildRepeatParams(request.params),
            paymentMode: this.mode(),
            method: request.method,
            requestId: request._id,
        };
        sessionStorage.setItem(POSTMAN_HISTORY_PREFILL_STORAGE_KEY, JSON.stringify(payload));
        this._router.navigate(['/postman'], { queryParams: { code: request.code } });
    };

    datePresetKey = (preset: DatePreset): string => {
        const keys: Record<DatePreset, string> = {
            all: 'history.filterDateAll',
            today: 'history.filterDateToday',
            this_week: 'history.filterDateThisWeek',
            this_month: 'history.filterDateThisMonth',
            custom: 'history.filterDateCustom',
        };
        return keys[preset];
    };

    /**
     * Downloads every filtered row (not just the current page) as Excel, CSV, or JSON.
     */
    exportList = async (format: HistoryExportFormat): Promise<void> => {
        if (this.exporting() || this.total() === 0) return;
        this.exporting.set(true);
        this._cdr.markForCheck();
        try {
            const { rows, total } = await this._collectExportRows();
            if (!rows.length) {
                this._snack.open(this._t('history.exportEmpty'), undefined, { duration: 3000 });
                return;
            }
            this._writeExportFile(format, rows);
            if (total > rows.length) {
                this._snack.open(
                    this._t('history.exportTruncated', { exported: rows.length, total }),
                    undefined,
                    { duration: 4500 }
                );
            }
        } catch {
            this._snack.open(this._t('history.exportFailed'), undefined, { duration: 3000 });
        } finally {
            this.exporting.set(false);
            this._cdr.markForCheck();
        }
    };

    get snowtraceUrl(): string {
        if (environment.isTestnet !== undefined) {
            return environment.isTestnet ? 'https://testnet.snowtrace.io' : 'https://snowtrace.io';
        }
        if (environment.chainId) {
            return environment.chainId === 43113 ? 'https://testnet.snowtrace.io' : 'https://snowtrace.io';
        }
        const rpcUrl = environment.rpcUrl || '';
        const isTestnet = rpcUrl.includes('test') || rpcUrl.includes('fuji') || rpcUrl.includes('43113');
        return isTestnet ? 'https://testnet.snowtrace.io' : 'https://snowtrace.io';
    }

    private _syncColumns = (): void => {
        this.displayedColumns =
            this.mode() === 'credits'
                ? ['status', 'service', 'date', 'cost', 'actions']
                : ['service', 'transactionHash', 'amount', 'date', 'actions'];
    };

    private _applyRows = (rows?: ApiRequest[]): void => {
        this.dataSource.data = rows ?? this.requests();
        this._cdr.markForCheck();
    };

    private _buildFilterParams = (): HistoryListParams => {
        const params: HistoryListParams = {
            page: this.pageIndex() + 1,
            limit: this.pageSize(),
        };
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
    };

    private _dateRangeForPreset = (preset: DatePreset): { end: DateTime; start: DateTime } | null => {
        if (preset === 'all') return null;
        if (preset === 'custom') return this._customDateRange();
        const now = DateTime.now();
        if (preset === 'today') return { start: now.startOf('day'), end: now.endOf('day') };
        if (preset === 'this_week') return { start: now.startOf('week'), end: now.endOf('week') };
        if (preset === 'this_month') return { start: now.startOf('month'), end: now.endOf('month') };
        return null;
    };

    private _customDateRange = (): { end: DateTime; start: DateTime } | null => {
        const start = this.rangeStart.value;
        const end = this.rangeEnd.value;
        if (!start?.isValid || !end?.isValid) return null;
        return { start: start.startOf('day'), end: end.endOf('day') };
    };

    private _collectExportRows = async (): Promise<{ rows: ApiRequest[]; total: number }> => {
        const rows: ApiRequest[] = [];
        let page = 1;
        let total = 0;
        let pages = 1;
        while (rows.length < EXPORT_MAX && page <= pages) {
            const response = await this._fetchExportPage(page);
            total = response.total || 0;
            pages = response.pages || 1;
            rows.push(...(response.data || []));
            if (!response.data?.length || rows.length >= total) break;
            page += 1;
        }
        return { rows: rows.slice(0, EXPORT_MAX), total };
    };

    private _fetchExportPage = (page: number): Promise<ApiRequestResponse> => {
        if (this.mode() === 'credits') {
            return firstValueFrom(
                this._historyService.listForExport({
                    ...this._buildFilterParams(),
                    page,
                    limit: EXPORT_PAGE_SIZE,
                })
            );
        }
        const wallet = this._walletService.getAddress();
        if (!wallet) return Promise.resolve({ data: [], total: 0, limit: EXPORT_PAGE_SIZE, page, pages: 0 });
        return firstValueFrom(this._historyService.listPublicForExport(wallet, page, EXPORT_PAGE_SIZE));
    };

    private _writeExportFile = (format: HistoryExportFormat, rows: ApiRequest[]): void => {
        const fileName = this._exportFileName(format);
        if (format === 'json') {
            const payload = rows.map((row) => this._mapExportJson(row));
            this._downloadBlob(
                new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json;charset=utf-8;' }),
                fileName
            );
            return;
        }
        const sheet = XLSX.utils.json_to_sheet(rows.map((row) => this._mapExportSheetRow(row)));
        if (format === 'csv') {
            this._downloadBlob(
                new Blob([`\uFEFF${XLSX.utils.sheet_to_csv(sheet)}`], { type: 'text/csv;charset=utf-8;' }),
                fileName
            );
            return;
        }
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, sheet, 'History');
        XLSX.writeFile(workbook, fileName);
    };

    private _mapExportJson = (row: ApiRequest): Record<string, unknown> => ({
        statusCode: row.statusCode ?? null,
        status: row.status ?? '',
        code: row.code ?? '',
        endpoint: row.endpoint ?? '',
        method: row.method ?? '',
        createdAt: row.createdAt ?? '',
        cost: row.cost ?? null,
        billingAdjustmentType: row.billingAdjustmentType ?? '',
        billingStandardCost: row.billingStandardCost ?? null,
        billingStandardCode: row.billingStandardCode ?? '',
        paymentTx: row.paymentTx ?? '',
        paymentAmount: row.paymentAmount ?? '',
    });

    private _mapExportSheetRow = (row: ApiRequest): Record<string, string | number> => ({
        [this._t('history.table.statusCode')]: row.statusCode ?? '',
        [this._t('history.table.status')]: row.status ?? '',
        [this._t('history.table.service')]: row.code ?? '',
        [this._t('history.table.endpoint')]: row.endpoint ?? '',
        [this._t('history.table.method')]: row.method ?? '',
        [this._t('history.table.date')]: this.formatDate(row.createdAt || row.timestamp),
        [this._t('history.table.cost')]: row.cost ?? '',
        [this._t('history.table.billingAdjustment')]: row.billingAdjustmentType ?? '',
        [this._t('history.table.standardCost')]: row.billingStandardCost ?? '',
        [this._t('history.table.standardCode')]: row.billingStandardCode ?? '',
        [this._t('history.table.txHash')]: row.paymentTx ?? '',
        [this._t('history.table.amount')]: row.paymentAmount ?? '',
    });

    private _exportFileName = (format: HistoryExportFormat): string => {
        const range = this._dateRangeForPreset(this.datePreset);
        const from = range?.start.toFormat('yyyy-MM-dd') ?? 'all';
        const to = range?.end.toFormat('yyyy-MM-dd') ?? 'all';
        const stamp = DateTime.now().toFormat('yyyy-MM-dd_HHmm');
        return `smartcheck-history_${from}_${to}_${stamp}.${format}`;
    };

    private _downloadBlob = (blob: Blob, fileName: string): void => {
        const url = URL.createObjectURL(blob);
        const anchor = document.createElement('a');
        anchor.href = url;
        anchor.download = fileName;
        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);
        URL.revokeObjectURL(url);
    };

    private _t = (key: string, params?: Record<string, string | number>): string =>
        this._transloco.translate(key, params);

    private _loadTopSales = (): void => {
        this._historyService.getTopSales({ year: DateTime.now().toFormat('yyyy') }).subscribe({
            next: (rows) => {
                this.topEndpoints.set(rows.slice(0, 5));
                this._cdr.markForCheck();
            },
            error: () => this.topEndpoints.set([]),
        });
    };

    private _buildRepeatParams = (params: any): Record<string, unknown> => {
        if (!params || typeof params !== 'object') return {};
        return Object.keys(params).reduce<Record<string, unknown>>((acc, key) => {
            if (!key.startsWith('_')) acc[key] = params[key];
            return acc;
        }, {});
    };
}
