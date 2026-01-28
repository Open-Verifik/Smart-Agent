import { CommonModule } from '@angular/common';
import {
  Component,
  OnInit,
  ViewChild,
  ViewEncapsulation,
  inject,
  signal,
  effect,
} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslocoModule } from '@jsverse/transloco';
import { DateTime } from 'luxon';
import { HistoryService, ApiRequest } from './history.service';
import { AgentWalletService } from '../chat/services/agent-wallet.service';
import { environment } from '../../../environments/environment';

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
    TranslocoModule,
  ],
  templateUrl: './history.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class HistoryComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  // Key Properties
  displayedColumns: string[] = ['status', 'service', 'parameters', 'date', 'duration'];
  dataSource = new MatTableDataSource<any>([]);

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
    // React to changes in requests/mode to update dataSource
    effect(() => {
      const allRequests = this.requests();
      if (this.mode() === 'credits') {
        this.dataSource.data = allRequests; // Show all for CREDITS (server filters usually) or filter client-side if mixed
        this.displayedColumns = ['status', 'service', 'parameters', 'date', 'duration'];
      } else {
        this.dataSource.data = allRequests; // Show all from public endpoint (already filtered by wallet)
        this.displayedColumns = ['service', 'transactionHash', 'amount', 'date'];
      }
    });
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
   * Get status label
   */
  getStatusLabel(statusCode: number): string {
    if (statusCode >= 200 && statusCode < 300) return 'Success';
    if (statusCode === 404) return 'Not Found';
    return 'Failed';
  }

  /**
   * Format duration
   */
  formatDuration(ms: number): string {
    if (!ms && ms !== 0) return '-';
    if (ms < 1000) return `${ms}ms`;
    return `${(ms / 1000).toFixed(2)}s`;
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
