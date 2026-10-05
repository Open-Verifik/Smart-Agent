import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnDestroy,
    OnInit,
    computed,
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
import { MatDialog } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { DateTime } from 'luxon';
import { firstValueFrom, Observable, of, Subject } from 'rxjs';
import { catchError, debounceTime, switchMap, takeUntil } from 'rxjs/operators';
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
import { getAppFeatureCatalogCopy } from '../postman/postman-endpoint-copy.util';
import {
    ApiRequest,
    ApiRequestResponse,
    HistoryFeatureMeta,
    HistoryListParams,
    HistoryService,
    HistoryTopSalesRow,
} from './history.service';
import { createdAtRangeParams } from '../settings/usage-history/usage-history-date-params.util';
import { HistoryRequestDialogComponent, HistoryRequestDialogResult } from './history-request-dialog.component';

export type DatePreset = 'all' | 'custom' | 'this_month' | 'this_week' | 'today';
export type HistoryExportFormat = 'csv' | 'json' | 'xlsx';
export type HistoryStatus = 'failed' | 'pending' | 'success';
export type HistorySectionId = HistoryStatus | 'x402';

interface HistorySectionState {
    id: HistorySectionId;
    rows: ApiRequest[];
    total: number;
    loading: boolean;
    exporting: boolean;
    pageIndex: number;
    pageSize: number;
}

interface HistorySectionCopy {
    title: string;
    subtitle: string;
    emptyTitle: string;
    emptySubtitle: string;
    icon: string;
    iconWell: string;
}

const EXPORT_MAX = 10000;
const EXPORT_INPUT_KEYS = ['documentType', 'documentNumber', 'plate', 'vin', 'business', 'fullName'] as const;
const EXPORT_PAGE_SIZE = 200;
const DEFAULT_PAGE_SIZE = 10;
const CREDIT_SECTIONS: HistoryStatus[] = ['success', 'failed', 'pending'];

const emptyListResponse = (): ApiRequestResponse => ({
    data: [],
    total: 0,
    limit: DEFAULT_PAGE_SIZE,
    page: 1,
    pages: 0,
});

const createSection = (id: HistorySectionId): HistorySectionState => ({
    id,
    rows: [],
    total: 0,
    loading: true,
    exporting: false,
    pageIndex: 0,
    pageSize: DEFAULT_PAGE_SIZE,
});

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
    private _historyService = inject(HistoryService);
    private _dialog = inject(MatDialog);
    private _walletService = inject(AgentWalletService);
    private _router = inject(Router);
    private _route = inject(ActivatedRoute);
    private _cdr = inject(ChangeDetectorRef);
    private _snack = inject(MatSnackBar);
    private _transloco = inject(TranslocoService);
    private _searchChange$ = new Subject<string>();
    private _reloadX402$ = new Subject<void>();
    private _sectionReload$: Record<HistoryStatus, Subject<void>> = {
        success: new Subject<void>(),
        failed: new Subject<void>(),
        pending: new Subject<void>(),
    };
    private _destroy$ = new Subject<void>();
    private readonly _sectionCopy: Record<HistorySectionId, HistorySectionCopy> = {
        success: {
            title: 'history.logSuccessTitle',
            subtitle: 'history.logSuccessSubtitle',
            emptyTitle: 'history.emptySuccessTitle',
            emptySubtitle: 'history.emptySuccessSubtitle',
            icon: 'check_circle',
            iconWell:
                'border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-900/50 dark:bg-emerald-950/40 dark:text-emerald-300',
        },
        failed: {
            title: 'history.logFailedTitle',
            subtitle: 'history.logFailedSubtitle',
            emptyTitle: 'history.emptyFailedTitle',
            emptySubtitle: 'history.emptyFailedSubtitle',
            icon: 'error_outline',
            iconWell: 'border-red-200 bg-red-50 text-red-700 dark:border-red-900/50 dark:bg-red-950/40 dark:text-red-300',
        },
        pending: {
            title: 'history.logPendingTitle',
            subtitle: 'history.logPendingSubtitle',
            emptyTitle: 'history.emptyPendingTitle',
            emptySubtitle: 'history.emptyPendingSubtitle',
            icon: 'hourglass_empty',
            iconWell: 'border-stone-200 bg-stone-50 text-stone-600 dark:border-gray-800 dark:bg-gray-950 dark:text-stone-300',
        },
        x402: {
            title: 'history.tableTitle',
            subtitle: 'history.tableSubtitle',
            emptyTitle: 'history.emptyTitle',
            emptySubtitle: 'history.emptySubtitle',
            icon: 'history',
            iconWell: 'border-stone-200 bg-stone-50 text-stone-700 dark:border-gray-800 dark:bg-gray-950 dark:text-stone-200',
        },
    };

    readonly datePresets: DatePreset[] = ['all', 'today', 'this_week', 'this_month', 'custom'];
    readonly pageSizeOptions = [10, 25, 50];
    readonly rangeStart = new FormControl<DateTime | null>(null);
    readonly rangeEnd = new FormControl<DateTime | null>(null);
    readonly sections = signal<Record<HistorySectionId, HistorySectionState>>({
        success: createSection('success'),
        failed: createSection('failed'),
        pending: createSection('pending'),
        x402: createSection('x402'),
    });
    mode = signal<'credits' | 'x402'>('credits');
    readonly visibleSections = computed(() => {
        const sections = this.sections();
        if (this.mode() === 'x402') return [sections.x402];
        return CREDIT_SECTIONS.map((id) => sections[id]);
    });
    readonly filtersBusy = computed(() => this.visibleSections().some((section) => section.loading));

    displayedColumns: string[] = ['status', 'service', 'document', 'date', 'cost', 'actions'];
    datePreset: DatePreset = 'all';
    searchText = '';
    serviceFilter = '';
    topEndpoints = signal<HistoryTopSalesRow[]>([]);
    featureCatalog = signal<Record<string, HistoryFeatureMeta>>({});

    ngOnInit(): void {
        CREDIT_SECTIONS.forEach((bucket) => {
            this._sectionReload$[bucket]
                .pipe(
                    switchMap(() => this._fetchCreditSection(bucket)),
                    takeUntil(this._destroy$)
                )
                .subscribe((response) => this._applyFetched(bucket, response));
        });

        this._reloadX402$
            .pipe(
                switchMap(() => this._fetchX402Section()),
                takeUntil(this._destroy$)
            )
            .subscribe((response) => this._applyFetched('x402', response));

        this._searchChange$.pipe(debounceTime(350), takeUntil(this._destroy$)).subscribe(() => {
            this._resetVisiblePages();
            this.loadData();
        });
        this._route.queryParams.pipe(takeUntil(this._destroy$)).subscribe((params) => {
            const targetMode = params['view'] === 'x402' ? 'x402' : 'credits';
            if (this.mode() !== targetMode) {
                this.mode.set(targetMode);
                this._resetVisiblePages();
            }
            this._syncColumns();
            this.loadData();
        });
        this._loadFeatureCatalog();
    }

    ngOnDestroy(): void {
        this._destroy$.next();
        this._destroy$.complete();
    }

    get disabledClearFilters(): boolean {
        return !this.searchText && !this.serviceFilter && this.datePreset === 'all';
    }

    setMode = (mode: 'credits' | 'x402'): void => {
        this._router.navigate([], {
            relativeTo: this._route,
            queryParams: { view: mode === 'x402' ? 'x402' : null },
            queryParamsHandling: 'merge',
        });
    };

    loadData = (): void => {
        if (this.mode() === 'x402') {
            this._reloadSection('x402');
            return;
        }
        CREDIT_SECTIONS.forEach((bucket) => this._reloadSection(bucket));
        this._loadTopSales();
    };

    onSearchInput = (value: string): void => {
        this.searchText = value?.trim() || '';
        this._searchChange$.next(this.searchText);
    };

    onServiceFilterChange = (value: string): void => {
        this.serviceFilter = value || '';
        this._resetVisiblePages();
        this.loadData();
    };

    onDatePresetChange = (value: DatePreset): void => {
        this.datePreset = value;
        if (value !== 'custom') {
            this.rangeStart.setValue(null, { emitEvent: false });
            this.rangeEnd.setValue(null, { emitEvent: false });
            this._resetVisiblePages();
            this.loadData();
            return;
        }
        this._cdr.markForCheck();
    };

    onCustomRangeChange = (): void => {
        const start = this.rangeStart.value;
        const end = this.rangeEnd.value;
        if (!start?.isValid || !end?.isValid) return;
        this._resetVisiblePages();
        this.loadData();
    };

    filterByEndpoint = (code: string): void => {
        this.serviceFilter = code;
        this._resetVisiblePages();
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
        this.serviceFilter = '';
        this.datePreset = 'all';
        this.rangeStart.setValue(null, { emitEvent: false });
        this.rangeEnd.setValue(null, { emitEvent: false });
        this._resetVisiblePages();
        this.loadData();
        this._cdr.markForCheck();
    };

    onPaginatorEvent = (sectionId: HistorySectionId, event: PageEvent): void => {
        const section = this.sections()[sectionId];
        const pageSizeChanged = event.pageSize !== section.pageSize;
        this._patchSection(sectionId, {
            pageIndex: pageSizeChanged ? 0 : event.pageIndex,
            pageSize: event.pageSize,
        });
        this._reloadSection(sectionId);
    };

    onPageSizeChange = (sectionId: HistorySectionId, pageSize: number): void => {
        const section = this.sections()[sectionId];
        if (!pageSize || pageSize === section.pageSize) return;
        this._patchSection(sectionId, { pageIndex: 0, pageSize });
        this._reloadSection(sectionId);
    };

    sectionTitleKey = (id: HistorySectionId): string => this._sectionCopy[id].title;

    sectionSubtitleKey = (id: HistorySectionId): string => this._sectionCopy[id].subtitle;

    sectionEmptyTitleKey = (id: HistorySectionId): string => this._sectionCopy[id].emptyTitle;

    sectionEmptySubtitleKey = (id: HistorySectionId): string => this._sectionCopy[id].emptySubtitle;

    sectionIcon = (id: HistorySectionId): string => this._sectionCopy[id].icon;

    sectionIconWellClass = (id: HistorySectionId): string => this._sectionCopy[id].iconWell;

    openDetail = (request: ApiRequest, event?: Event): void => {
        if (this.mode() !== 'credits') return;
        event?.stopPropagation();
        this._dialog
            .open<HistoryRequestDialogComponent, ApiRequest, HistoryRequestDialogResult | undefined>(
                HistoryRequestDialogComponent,
                {
                    data: request,
                    autoFocus: false,
                    width: '32rem',
                    maxWidth: 'calc(100vw - 2rem)',
                    maxHeight: 'min(40rem, calc(100dvh - 2rem))',
                    panelClass: 'history-request-dialog',
                }
            )
            .afterClosed()
            .pipe(takeUntil(this._destroy$))
            .subscribe((result) => {
                if (result?.repeat) this.repeatRequest(result.request);
            });
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

    documentLabel = (row?: ApiRequest | null): string => {
        const params = row?.params;
        if (!params || typeof params !== 'object') return '—';
        const preferred = ['documentNumber', 'plate', 'vin', 'business', 'checkId', 'licenseNumber', 'fullName', 'citizenIdentifier'];
        for (const key of preferred) {
            const value = params[key];
            if (value != null && value !== '' && typeof value !== 'object') return String(value);
        }
        const first = Object.entries(params).find(
            ([key, value]) => !key.startsWith('_') && value != null && value !== '' && typeof value !== 'object'
        );
        return first ? String(first[1]) : '—';
    };

    formatServiceLabel = (code: string): string =>
        code
            .split(/[-_]/)
            .filter(Boolean)
            .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
            .join(' ');

    endpointDisplayName = (item: HistoryTopSalesRow): string => this.featureTitle(item._id, item.feature);

    featureTitle = (code?: string | null, feature?: HistoryFeatureMeta | null): string => {
        if (!code) return '—';
        const catalogTitle = getAppFeatureCatalogCopy(this._transloco, code).title;
        if (catalogTitle) return catalogTitle;
        const meta = feature || this.featureCatalog()[code];
        const lang = this._transloco.getActiveLang();
        const fromCatalog = lang === 'es' ? meta?.nameES || meta?.name : meta?.name;
        if (fromCatalog && fromCatalog !== code) return fromCatalog;
        return this.formatServiceLabel(code);
    };

    resolveHistoryStatus = (row?: { historyStatus?: string; status?: string; statusCode?: number } | null): HistoryStatus => {
        if (row?.historyStatus === 'success' || row?.historyStatus === 'failed' || row?.historyStatus === 'pending') {
            return row.historyStatus;
        }
        if (row?.status === 'failed' || row?.status === 'timed-out') return 'failed';
        if (row?.status === 'queue') return 'pending';
        if (row?.status === 'ok' && row.statusCode != null && row.statusCode >= 400) return 'failed';
        if (row?.status === 'ok') return 'success';
        return 'pending';
    };

    historyStatusClass = (row?: { historyStatus?: string; status?: string; statusCode?: number } | null): string => {
        const status = this.resolveHistoryStatus(row);
        if (status === 'success') return 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300';
        if (status === 'failed') return 'bg-red-100 text-red-700 dark:bg-red-950/40 dark:text-red-300';
        return 'bg-stone-100 text-stone-600 dark:bg-gray-800 dark:text-stone-300';
    };

    historyStatusLabel = (row?: { historyStatus?: string; status?: string; statusCode?: number } | null): string => {
        const status = this.resolveHistoryStatus(row);
        if (status === 'failed') return this._t('history.statusFailed');
        if (status === 'pending') return this._t('history.statusPending');
        return this._t('history.statusSuccess');
    };

    isNotCharged = (row?: { historyStatus?: string; status?: string; statusCode?: number } | null): boolean =>
        this.resolveHistoryStatus(row) === 'pending';

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
     * Downloads every row in one log (not just the current page) as Excel, CSV, or JSON.
     */
    exportList = async (format: HistoryExportFormat, sectionId: HistorySectionId): Promise<void> => {
        const section = this.sections()[sectionId];
        if (section.exporting || section.total === 0) return;
        this._patchSection(sectionId, { exporting: true });
        try {
            const { rows, total } = await this._collectExportRows(sectionId);
            const sorted = this._sortByDateDesc(rows);
            if (!sorted.length) {
                this._snack.open(this._t('history.exportEmpty'), undefined, { duration: 3000 });
                return;
            }
            this._writeExportFile(format, sorted, sectionId);
            if (total > sorted.length) {
                this._snack.open(
                    this._t('history.exportTruncated', { exported: sorted.length, total }),
                    undefined,
                    { duration: 4500 }
                );
            }
        } catch {
            this._snack.open(this._t('history.exportFailed'), undefined, { duration: 3000 });
        } finally {
            this._patchSection(sectionId, { exporting: false });
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
                ? ['status', 'service', 'document', 'date', 'cost', 'actions']
                : ['service', 'transactionHash', 'amount', 'date', 'actions'];
    };

    private _reloadSection = (sectionId: HistorySectionId): void => {
        this._patchSection(sectionId, { loading: true });
        if (sectionId === 'x402') {
            this._reloadX402$.next();
            return;
        }
        this._sectionReload$[sectionId].next();
    };

    private _patchSection = (id: HistorySectionId, patch: Partial<HistorySectionState>): void => {
        this.sections.update((current) => ({
            ...current,
            [id]: { ...current[id], ...patch },
        }));
    };

    private _applyFetched = (id: HistorySectionId, response: ApiRequestResponse): void => {
        this._patchSection(id, {
            rows: response.data || [],
            total: response.total || 0,
            loading: false,
        });
        this._cdr.markForCheck();
    };

    private _resetVisiblePages = (): void => {
        const ids: HistorySectionId[] = this.mode() === 'x402' ? ['x402'] : [...CREDIT_SECTIONS];
        ids.forEach((id) => this._patchSection(id, { pageIndex: 0 }));
    };

    private _fetchCreditSection = (bucket: HistoryStatus): Observable<ApiRequestResponse> =>
        this._historyService.listForExport(this._buildFilterParams(bucket)).pipe(catchError(() => of(emptyListResponse())));

    private _fetchX402Section = (): Observable<ApiRequestResponse> => {
        const wallet = this._walletService.getAddress();
        const section = this.sections().x402;
        if (!wallet) return of(emptyListResponse());
        return this._historyService
            .listPublicForExport(wallet, section.pageIndex + 1, section.pageSize)
            .pipe(catchError(() => of(emptyListResponse())));
    };

    private _buildFilterParams = (bucket: HistoryStatus): HistoryListParams => {
        const section = this.sections()[bucket];
        const params: HistoryListParams = {
            page: section.pageIndex + 1,
            limit: section.pageSize,
            historyBucket: bucket,
        };
        if (this.searchText) params.like_code = this.searchText.toLowerCase();
        if (this.serviceFilter) params.where_code = this.serviceFilter;
        const range = this._dateRangeForPreset(this.datePreset);
        if (range) {
            Object.assign(params, createdAtRangeParams(range.start, range.end));
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

    private _collectExportRows = async (sectionId: HistorySectionId): Promise<{ rows: ApiRequest[]; total: number }> => {
        const rows: ApiRequest[] = [];
        let page = 1;
        let total = 0;
        let pages = 1;
        while (rows.length < EXPORT_MAX && page <= pages) {
            const response = await this._fetchExportPage(sectionId, page);
            total = response.total || 0;
            pages = response.pages || 1;
            rows.push(...(response.data || []));
            if (!response.data?.length || rows.length >= total) break;
            page += 1;
        }
        return { rows: rows.slice(0, EXPORT_MAX), total };
    };

    private _fetchExportPage = (sectionId: HistorySectionId, page: number): Promise<ApiRequestResponse> => {
        if (sectionId === 'x402') {
            const wallet = this._walletService.getAddress();
            if (!wallet) return Promise.resolve({ data: [], total: 0, limit: EXPORT_PAGE_SIZE, page, pages: 0 });
            return firstValueFrom(this._historyService.listPublicForExport(wallet, page, EXPORT_PAGE_SIZE));
        }
        return firstValueFrom(
            this._historyService.listForExport({
                ...this._buildFilterParams(sectionId),
                page,
                limit: EXPORT_PAGE_SIZE,
            })
        );
    };

    private _sortByDateDesc = (rows: ApiRequest[]): ApiRequest[] =>
        [...rows].sort((left, right) => this._rowTime(right) - this._rowTime(left));

    private _rowTime = (row: ApiRequest): number => {
        if (row.createdAt) {
            const parsed = DateTime.fromISO(row.createdAt);
            if (parsed.isValid) return parsed.toMillis();
        }
        if (typeof row.timestamp === 'number') return row.timestamp;
        if (typeof row.timestamp === 'string') {
            const parsed = DateTime.fromISO(row.timestamp);
            if (parsed.isValid) return parsed.toMillis();
        }
        return 0;
    };

    private _writeExportFile = (format: HistoryExportFormat, rows: ApiRequest[], sectionId: HistorySectionId): void => {
        const fileName = this._exportFileName(format, sectionId);
        if (format === 'json') {
            const payload = rows.map((row) => this._mapExportJson(row));
            this._downloadBlob(
                new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json;charset=utf-8;' }),
                fileName
            );
            return;
        }
        const inputKeys = EXPORT_INPUT_KEYS.filter((key) => rows.some((row) => this._scalarParam(row, key)));
        const sheet = XLSX.utils.json_to_sheet(rows.map((row) => this._mapExportSheetRow(row, inputKeys)));
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

    private _scalarParam = (row: ApiRequest, key: string): string => {
        const params = row.params;
        if (!params || typeof params !== 'object') return '';
        const value = params[key];
        if (value == null || value === '' || typeof value === 'object') return '';
        return String(value);
    };

    private _exportDocument = (row: ApiRequest): string => {
        const label = this.documentLabel(row);
        return label === '—' ? '' : label;
    };

    private _exportCost = (row: ApiRequest): string =>
        this.isNotCharged(row) ? this._t('history.notCharged') : this.formatCost(row.cost);

    private _exportParams = (row: ApiRequest): Record<string, unknown> => {
        const params = row.params;
        if (!params || typeof params !== 'object') return {};
        return Object.entries(params).reduce<Record<string, unknown>>((acc, [key, value]) => {
            if (!key.startsWith('_')) acc[key] = value;
            return acc;
        }, {});
    };

    private _mapExportJson = (row: ApiRequest): Record<string, unknown> => {
        const inputs = EXPORT_INPUT_KEYS.reduce<Record<string, string>>((acc, key) => {
            const value = this._scalarParam(row, key);
            if (value) acc[key] = value;
            return acc;
        }, {});
        return {
            status: this.historyStatusLabel(row),
            statusCode: row.statusCode ?? null,
            service: this.featureTitle(row.code),
            code: row.code ?? '',
            endpoint: row.endpoint ?? '',
            document: this._exportDocument(row),
            ...inputs,
            createdAt: row.createdAt ?? '',
            cost: this._exportCost(row),
            params: this._exportParams(row),
        };
    };

    private _mapExportSheetRow = (row: ApiRequest, inputKeys: readonly string[]): Record<string, string | number> => {
        const record: Record<string, string | number> = {
            [this._t('history.table.status')]: this.historyStatusLabel(row),
            [this._t('history.table.statusCode')]: row.statusCode ?? '',
            [this._t('history.table.service')]: this.featureTitle(row.code),
            [this._t('history.table.code')]: row.code ?? '',
            [this._t('history.table.endpoint')]: row.endpoint ?? '',
            [this._t('history.table.document')]: this._exportDocument(row),
        };
        inputKeys.forEach((key) => {
            record[this._t(`history.table.${key}`)] = this._scalarParam(row, key);
        });
        record[this._t('history.table.date')] = this.formatDate(row.createdAt || row.timestamp);
        record[this._t('history.table.cost')] = this._exportCost(row);
        return record;
    };

    private _exportFileName = (format: HistoryExportFormat, sectionId: HistorySectionId): string => {
        const range = this._dateRangeForPreset(this.datePreset);
        const from = range?.start.toFormat('yyyy-MM-dd') ?? 'all';
        const to = range?.end.toFormat('yyyy-MM-dd') ?? 'all';
        const stamp = DateTime.now().toFormat('yyyy-MM-dd_HHmm');
        return `smartcheck-history_${sectionId}_${from}_${to}_${stamp}.${format}`;
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

    private _loadFeatureCatalog = (): void => {
        this._historyService
            .getFeatureCatalog()
            .pipe(takeUntil(this._destroy$))
            .subscribe({
                next: (rows) => {
                    const catalog: Record<string, HistoryFeatureMeta> = {};
                    rows.forEach((row) => {
                        if (row?.code) catalog[row.code] = row;
                    });
                    this.featureCatalog.set(catalog);
                    this._cdr.markForCheck();
                },
                error: () => this.featureCatalog.set({}),
            });
    };

    private _loadTopSales = (): void => {
        if (this.mode() !== 'credits') return;
        const range = this._dateRangeForPreset(this.datePreset);
        const params: Record<string, unknown> = { source: 'requests', limit: 5 };
        if (range) Object.assign(params, createdAtRangeParams(range.start, range.end));
        this._historyService.getTopSales(params).subscribe({
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
