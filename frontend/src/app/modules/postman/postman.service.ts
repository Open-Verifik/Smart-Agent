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
  responseTime = signal<number | null>(null);
  isLoading = signal<boolean>(false);
  error = signal<any>(null);

  constructor(private _httpClient: HttpClient) {
    this.fetchPublicFeatures();
  }

  fetchPublicFeatures() {
    // Use environment.apiUrl to support local dev and prod
    const apiUrl = environment.apiUrl;

    this._httpClient
      .get<any>(`${apiUrl}/v2/public/app-features`)
      .pipe(
        tap((response) => {
          if (response && response.data) {
            const features = response.data || [];
            const dynamicEndpoints: ApiEndpoint[] = features.map((feature: any) => ({
              id: feature._id || feature.code,
              label: feature.name,
              category: this._mapCategory(feature.baseCategory || feature.group),
              method: 'POST',
              // Use the feature's URL if absolute, else prepend apiUrl
              url: feature.url
                ? feature.url.startsWith('http')
                  ? feature.url
                  : `${apiUrl}/${feature.url}`
                : '',
              description: feature.description,
              headers: [
                { key: 'Content-Type', value: 'application/json' },
                {
                  key: 'Authorization',
                  value: localStorage.getItem('accessToken')
                    ? `Bearer ${localStorage.getItem('accessToken')}`
                    : 'Bearer <token>',
                },
              ],
              params: feature.dependencies
                ? feature.dependencies.map((dependency: any) => ({
                    key: dependency.field,
                    value: dependency.default || '',
                    type: dependency.type,
                    required: dependency.required,
                    description: dependency.description,
                  }))
                : [],
            }));

            this.endpoints.update((current) => {
              // Avoid duplicates if this runs multiple times or hot reloads
              // Simple check by ID
              const existingIds = new Set(current.map((endpoint) => endpoint.id));

              const newEndpoints = dynamicEndpoints.filter(
                (endpoint) => !existingIds.has(endpoint.id),
              );

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
    const endpointCopy = JSON.parse(JSON.stringify(endpoint));

    // Update Authorization header with latest token if placeholder exists
    if (endpointCopy.headers) {
      endpointCopy.headers.forEach((h: any) => {
        if (h.key === 'Authorization' && h.value.includes('<token>')) {
          const token = localStorage.getItem('accessToken');
          if (token) {
            h.value = h.value.replace('<token>', token);
          }
        }
      });
    }

    this.selectedEndpoint.set(endpointCopy);
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
        let value = h.value;
        if (value && value.includes('<token>')) {
          const token = localStorage.getItem('accessToken') || '';
          value = value.replace('<token>', token);
        }
        options.headers[h.key] = value;
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

    const startTime = Date.now();
    const req$ = this._httpClient.request(endpoint.method, url, {
      ...options,
      body: body,
      observe: 'response',
    });

    req$
      .pipe(
        tap((res) => {
          this.isLoading.set(false);
          this.response.set(res);
          this.responseTime.set(Date.now() - startTime);
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
