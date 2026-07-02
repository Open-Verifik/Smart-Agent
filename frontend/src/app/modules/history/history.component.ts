import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
  ViewEncapsulation,
  inject,
  signal,
  effect,
} from '@angular/core';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TranslocoModule } from '@jsverse/transloco';
import { DateTime } from 'luxon';
import { HistoryService, ApiRequest } from './history.service';
import { AgentWalletService } from '../chat/services/agent-wallet.service';
import { environment } from '../../../environments/environment';
import {
  POSTMAN_HISTORY_PREFILL_STORAGE_KEY,
  PostmanHistoryPrefillPayload,
} from '../postman/postman-history-prefill';
import {
  formatHistoryCostCredits,
  getHistoryBillingTooltipParams,
  isDynamicQueryPremiumAdjustment,
} from '../postman/postman-billing.util';

@Component({
  selector: 'history',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatTooltipModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
    RouterLink,
    TranslocoModule,
  ],
  templateUrl: './history.component.html',
  styleUrl: './history.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class HistoryComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('detailDrawer') detailDrawer?: MatSidenav;

  // Key Properties
  displayedColumns: string[] = ['status', 'service', 'parameters', 'date', 'cost'];
  dataSource = new MatTableDataSource<any>([]);
  selectedRequest = signal<ApiRequest | null>(null);

  // Inject Services
  private _historyService = inject(HistoryService);
  private _walletService = inject(AgentWalletService);
  private _router = inject(Router);
  private _route = inject(ActivatedRoute);

  // Signals
  mode = signal<'credits' | 'x402'>('credits');

  // Data Signals (from HistoryService)
  requests = this._historyService.requests;
  total = this._historyService.total;
  loading = this._historyService.loading;
  pageSize = this._historyService.pageSize;
  pageIndex = this._historyService.pageIndex;

  constructor() {
    this.dataSource.sortingDataAccessor = (row, columnId) => this.getSortValue(row, columnId);

    // React to changes in requests/mode to update dataSource
    effect(() => {
      const allRequests = this.requests();
      if (this.mode() === 'credits') {
        this.dataSource.data = allRequests; // Show all for CREDITS (server filters usually) or filter client-side if mixed
        this.displayedColumns = ['status', 'service', 'parameters', 'date', 'cost', 'actions'];
      } else {
        this.dataSource.data = allRequests; // Show all from public endpoint (already filtered by wallet)
        this.displayedColumns = ['service', 'transactionHash', 'amount', 'date', 'actions'];
      }
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    // Subscribe to query params to handle mode switching and deep linking
    this._route.queryParams.subscribe((params) => {
      const view = params['view'];
      const targetMode = view === 'x402' ? 'x402' : 'credits';

      // If switching modes, reset pagination
      if (this.mode() !== targetMode) {
        this.pageIndex.set(0);
        this.mode.set(targetMode);
      }

      // Always load data when params change (initial load or navigation)
      this.loadData();
    });
  }

  setMode(mode: 'credits' | 'x402') {
    // Update URL, which triggers the subscription above
    this._router.navigate([], {
      relativeTo: this._route,
      queryParams: { view: mode === 'x402' ? 'x402' : null },
      queryParamsHandling: 'merge',
    });
  }

  loadData() {
    if (this.mode() === 'credits') {
      this._historyService.getHistory(this.pageIndex() + 1, this.pageSize()).subscribe();
    } else {
      const wallet = this._walletService.getAddress();
      if (wallet) {
        this._historyService
          .getPublicHistory(wallet, this.pageIndex() + 1, this.pageSize())
          .subscribe();
      }
    }
  }

  onPaginatorEvent(event: PageEvent) {
    this.pageIndex.set(event.pageIndex);
    this.pageSize.set(event.pageSize);
    this.loadData();
  }

  /**
   * Copy text helper
   */
  copyText(text: string) {
    navigator.clipboard.writeText(text);
  }

  shortHash(hash: string): string {
    if (!hash) return '';
    return `${hash.substring(0, 6)}...${hash.substring(hash.length - 4)}`;
  }

  /**
   * Resolve the comparable value for a given column when sorting.
   * Maps UI column ids to the underlying data fields used by both
   * CREDITS (`createdAt`, `statusCode`, ...) and x402 (`timestamp`) responses.
   */
  getSortValue(row: any, columnId: string): string | number {
    if (!row) return '';

    switch (columnId) {
      case 'status':
        return typeof row.statusCode === 'number' ? row.statusCode : Number.MAX_SAFE_INTEGER;
      case 'service':
        return (row.endpoint || row.code || row.serviceId || '').toString().toLowerCase();
      case 'date': {
        const raw = row.createdAt ?? row.timestamp;
        if (!raw) return 0;
        if (typeof raw === 'number') return raw;
        const parsed = DateTime.fromISO(String(raw));
        return parsed.isValid ? parsed.toMillis() : new Date(raw).getTime() || 0;
      }
      case 'cost':
        return Number(row.cost ?? 0) || 0;
      case 'amount':
        return Number(row.paymentAmount ?? row.cost ?? 0) || 0;
      default: {
        const value = row[columnId];
        return value == null ? '' : value;
      }
    }
  }

  /**
   * Format date using Luxon
   */
  formatDate(date: string | number): string {
    if (!date) return '-';
    if (typeof date === 'number') {
      return DateTime.fromMillis(date).toFormat('MMM dd, yyyy HH:mm:ss');
    }
    return DateTime.fromISO(date).toFormat('MMM dd, yyyy HH:mm:ss');
  }

  /**
   * Get status color class
   */
  getStatusColor(statusCode: number): string {
    if (statusCode >= 200 && statusCode < 300)
      return 'text-green-600 bg-green-100 dark:bg-green-900/30 dark:text-green-400';
    if (statusCode === 404)
      return 'text-orange-600 bg-orange-100 dark:bg-orange-900/30 dark:text-orange-400';
    return 'text-red-600 bg-red-100 dark:bg-red-900/30 dark:text-red-400';
  }

  /**
   * Transloco key for HTTP status badge label (paired with status code in template).
   */
  getStatusLabelKey(statusCode: number): string {
    if (statusCode >= 200 && statusCode < 300) return 'history.status.success';
    if (statusCode === 404) return 'history.status.notFound';
    return 'history.status.failed';
  }

  getStatusIcon(statusCode?: number): string {
    if (!statusCode) return 'check_circle';
    if (statusCode >= 200 && statusCode < 300) return 'check_circle';
    if (statusCode === 404) return 'search_off';
    return 'error';
  }

  formatCost(cost: number | string | undefined | null): string {
    const formattedCost = formatHistoryCostCredits(cost);
    if (formattedCost === '-') return '-';
    return `${formattedCost} credits`;
  }

  hasDynamicQueryBilling(request: ApiRequest): boolean {
    return isDynamicQueryPremiumAdjustment(request);
  }

  getDynamicQueryTooltipKey(): string {
    return 'history.dynamicQuery.tooltip';
  }

  getDynamicQueryTooltipParams(request: ApiRequest): { standard: string; charged: string } | null {
    return getHistoryBillingTooltipParams(request);
  }

  openDetail(request: ApiRequest, event?: Event): void {
    if (this.mode() !== 'credits') return;
    event?.stopPropagation();
    this.selectedRequest.set(request);
    this.detailDrawer?.open();
  }

  closeDetail(): void {
    this.detailDrawer?.close();
    this.selectedRequest.set(null);
  }

  /**
   * Format parameters for display
   */
  formatParams(params: any): Array<{ key: string; value: any }> {
    if (!params || typeof params !== 'object') return [];

    // Filter out internal/system params that start with underscore
    const filteredParams = Object.keys(params)
      .filter((key) => !key.startsWith('_'))
      .map((key) => ({ key, value: params[key] }));

    return filteredParams;
  }

  formatParamValue(value: any): string {
    const text = typeof value === 'object' && value !== null ? JSON.stringify(value) : String(value);
    return text.length > 72 ? `${text.substring(0, 69)}...` : text;
  }

  canRepeatRequest(request: ApiRequest): boolean {
    return !!request?.code;
  }

  repeatRequest(request: ApiRequest) {
    if (!this.canRepeatRequest(request)) return;

    const payload: PostmanHistoryPrefillPayload = {
      v: 1,
      source: 'history',
      code: request.code,
      paramValues: this.buildRepeatParams(request.params),
      paymentMode: this.mode(),
      method: request.method,
      requestId: request._id,
    };

    sessionStorage.setItem(POSTMAN_HISTORY_PREFILL_STORAGE_KEY, JSON.stringify(payload));
    this._router.navigate(['/postman'], { queryParams: { code: request.code } });
  }

  private buildRepeatParams(params: any): Record<string, unknown> {
    if (!params || typeof params !== 'object') return {};

    return Object.keys(params).reduce<Record<string, unknown>>((acc, key) => {
      if (!key.startsWith('_')) {
        acc[key] = params[key];
      }
      return acc;
    }, {});
  }

  /**
   * Get the appropriate Snowtrace URL based on environment
   */
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
}
