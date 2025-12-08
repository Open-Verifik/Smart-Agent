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
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DateTime } from 'luxon';
import { HistoryService, ApiRequest } from './history.service';

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
  ],
  templateUrl: './history.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class HistoryComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['status', 'service', 'parameters', 'date', 'duration'];
  dataSource = new MatTableDataSource<ApiRequest>([]);

  // Inject service
  private _historyService = inject(HistoryService);

  // Signals from service
  requests = this._historyService.requests;
  total = this._historyService.total;
  loading = this._historyService.loading;
  pageSize = this._historyService.pageSize;
  pageIndex = this._historyService.pageIndex;

  constructor() {
    // React to changes in requests signal
    effect(() => {
      this.dataSource.data = this.requests();
    });
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    // Backend expects 1-based page index usually, but let's check the service implementation
    // The service takes page (default 1) and limit (default 10)
    // MatPaginator uses 0-based index
    this._historyService.getHistory(this.pageIndex() + 1, this.pageSize()).subscribe();
  }

  onPaginatorEvent(event: PageEvent) {
    this.pageIndex.set(event.pageIndex);
    this.pageSize.set(event.pageSize);
    this.loadData();
  }

  /**
   * Format date using Luxon
   */
  formatDate(dateStr: string): string {
    if (!dateStr) return '-';
    return DateTime.fromISO(dateStr).toFormat('MMM dd, yyyy HH:mm:ss');
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
}
