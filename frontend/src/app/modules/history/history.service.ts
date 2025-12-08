import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { environment } from 'environments/environment';
import { catchError, finalize, tap, throwError } from 'rxjs';

export interface ApiRequest {
  _id: string;
  project: string; // project id
  endpoint: string;
  code: string; // added code
  params: any; // added params
  method: string;
  status: string; // "ok", "failed", etc.
  statusCode: number; // 200, 400, 500, etc.
  duration: number; // in ms
  createdAt: string;
  client: string; // client id
  // Add other fields as per the backend model if needed
  // The controller returns: data.docs ? data.docs : data
}

export interface ApiRequestResponse {
  data: ApiRequest[];
  total: number;
  limit: number;
  page: number;
  pages: number;
}

@Injectable({
  providedIn: 'root',
})
export class HistoryService {
  // Signals
  requests = signal<ApiRequest[]>([]);
  total = signal<number>(0);
  loading = signal<boolean>(false);
  error = signal<string | null>(null);

  // Pagination state
  pageSize = signal<number>(10);
  pageIndex = signal<number>(0);

  constructor(private _httpClient: HttpClient) {}

  /**
   * Get API requests history
   * @param page Page number (0-indexed for MatPaginator, but backend might expect 1-indexed)
   * @param limit Number of items per page
   */
  getHistory(page: number = 1, limit: number = 10) {
    this.loading.set(true);
    this.error.set(null);

    const apiUrl = environment.apiUrl;
    // Backend typically uses 1-based indexing for pages
    const queryParams = {
      page: page.toString(),
      limit: limit.toString(),
      sort: '-createdAt', // sort by newest first
    };

    const token = localStorage.getItem('accessToken');
    const headers = token ? { Authorization: `Bearer ${token}` } : {};

    return this._httpClient
      .get<ApiRequestResponse>(`${apiUrl}/v2/api-requests`, {
        params: queryParams,
        headers,
      })
      .pipe(
        tap((response) => {
          this.requests.set(response.data || []);
          this.total.set(response.total || 0);
          // Update pagination state if needed, though usually driven by UI
        }),
        catchError((err) => {
          console.error('Error fetching history:', err);
          this.error.set('Failed to load history');
          return throwError(() => err);
        }),
        finalize(() => {
          this.loading.set(false);
        }),
      );
  }
}
