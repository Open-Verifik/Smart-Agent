import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiEndpoint, API_ENDPOINTS } from './postman.types';
import { catchError, of, tap } from 'rxjs';

import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PostmanService {
  endpoints = signal<ApiEndpoint[]>(API_ENDPOINTS);

  // Signals for state management
  selectedEndpoint = signal<ApiEndpoint | null>(null);
  response = signal<any>(null);
  isLoading = signal<boolean>(false);
  error = signal<any>(null);

  constructor(private _httpClient: HttpClient) {
    this.fetchPublicFeatures();
  }

  fetchPublicFeatures() {
    // Use environment.apiUrl to support local dev and prod
    const apiUrl = environment.apiUrl || 'https://api.verifik.co';

    this._httpClient
      .get<any>(`${apiUrl}/v2/public/app-features`)
      .pipe(
        tap((response) => {
          if (response && response.data) {
            const features = response.data || [];
            const dynamicEndpoints: ApiEndpoint[] = features.map((f: any) => ({
              id: f._id || f.code,
              label: f.name,
              category: this._mapCategory(f.baseCategory || f.group),
              method: 'POST',
              // Use the feature's URL if absolute, else prepend apiUrl
              url: f.url ? (f.url.startsWith('http') ? f.url : `${apiUrl}${f.url}`) : '',
              description: f.description,
              headers: [
                { key: 'Content-Type', value: 'application/json' },
                { key: 'Authorization', value: 'Bearer <token>' },
              ],
              params: f.dependencies
                ? f.dependencies.map((dep: any) => ({
                    key: dep.field,
                    value: dep.default || '',
                    type: dep.type,
                    required: dep.required,
                    description: dep.description, // Using generic description as not present in example, but interface allows it
                  }))
                : [],
            }));

            this.endpoints.update((current) => {
              // Avoid duplicates if this runs multiple times or hot reloads
              // Simple check by ID
              const existingIds = new Set(current.map((e) => e.id));
              const newEndpoints = dynamicEndpoints.filter((e) => !existingIds.has(e.id));
              return [...current, ...newEndpoints];
            });
          }
        }),
        catchError((err) => {
          console.error('Failed to fetch public features', err);
          // Return empty so the stream completes successfully without crashing
          return of(null);
        }),
      )
      .subscribe();
  }

  private _mapCategory(category: string): string {
    if (!category) return 'OTHER';
    return category.toUpperCase().replace('-', ' ');
  }

  selectEndpoint(endpoint: ApiEndpoint) {
    // Create a copy to avoid mutating the original definition when editing params
    this.selectedEndpoint.set(JSON.parse(JSON.stringify(endpoint)));
    this.response.set(null);
    this.error.set(null);
  }

  sendRequest(endpoint: ApiEndpoint) {
    this.isLoading.set(true);
    this.response.set(null);
    this.error.set(null);

    let url = endpoint.url;
    const options: any = {
      headers: {},
      params: {},
    };

    // Prepare Headers
    if (endpoint.headers) {
      endpoint.headers.forEach((h) => {
        options.headers[h.key] = h.value;
      });
    }

    // Prepare Params
    if (endpoint.params) {
      endpoint.params.forEach((p) => {
        // If it's a GET request, we usually append params.
        // However, for some POSTs they might query params too.
        // For now, let's assume params array goes to query params.
        if (p.value) {
          options.params[p.key] = p.value;
        }
      });
    }

    // Handle Body
    let body = null;
    if (endpoint.method !== 'GET' && endpoint.method !== 'DELETE') {
      body = endpoint.body;
    }

    const req$ = this._httpClient.request(endpoint.method, url, {
      ...options,
      body: body,
    });

    req$
      .pipe(
        tap((res) => {
          this.isLoading.set(false);
          this.response.set(res);
        }),
        catchError((err) => {
          this.isLoading.set(false);
          this.error.set(err);
          return of(null);
        }),
      )
      .subscribe();
  }
}
