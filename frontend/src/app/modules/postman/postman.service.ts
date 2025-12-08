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
  selectedCountry = signal<string | null>(null);
  response = signal<any>(null);
  responseTime = signal<number | null>(null);
  isLoading = signal<boolean>(false);
  error = signal<any>(null);
  paymentMethod = signal<'credits' | 'x402'>('credits');

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
            const dynamicEndpoints: ApiEndpoint[] = features.map((feature: any) => {
              const method = feature.group === 'apiRequest' ? 'GET' : feature.method || 'POST';

              return {
                id: feature._id || feature.code,
                label: feature.name,
                code: feature.code, // Map the code
                category: this._mapCategory(feature.baseCategory || feature.group),
                country: feature.country,
                method: method,
                // Use the feature's URL if absolute, else prepend apiUrl
                url: feature.url
                  ? feature.url.startsWith('http')
                    ? feature.url
                    : `${apiUrl}/${feature.url}`
                  : '',
                description: feature.description,
                estimatedCost: feature.price || 0.01, // Map price from backend for x402 payment
                headers: [
                  { key: 'Content-Type', value: 'application/json' },
                  {
                    key: 'Authorization',
                    value: 'Bearer <token>',
                  },
                ],
                // Map dependencies to Body for POST/PUT/etc, or Params for GET
                params:
                  method === 'GET' && feature.dependencies
                    ? feature.dependencies.map((dependency: any) => {
                        const defaultVal =
                          dependency.default ||
                          (dependency.enum && dependency.enum.length ? dependency.enum[0] : '');

                        let desc = dependency.description;
                        if (!desc && dependency.enum && dependency.enum.length) {
                          desc = `Pick a value from [${dependency.enum.join(', ')}]`;
                        }

                        return {
                          key: dependency.field,
                          value: defaultVal,
                          type: dependency.type,
                          required: dependency.required,
                          description: desc,
                        };
                      })
                    : [],
                body:
                  method !== 'GET' && feature.dependencies
                    ? feature.dependencies.reduce((acc: any, dep: any) => {
                        acc[dep.field] =
                          dep.default || (dep.enum && dep.enum.length ? dep.enum[0] : '');
                        return acc;
                      }, {})
                    : null,
              };
            });

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

    // Check if using x402 payment method
    const isX402 = this.paymentMethod() === 'x402';

    let url = endpoint.url;
    const options: any = {
      headers: {},
      params: {},
    };

    // For x402, route through Smart-Agent backend proxy
    if (isX402) {
      // Use Smart-Agent backend proxy endpoint
      url = `${environment.smartAgentUrl}/api/proxy`;

      // Prepare headers for proxy
      const paymentTxHeader = endpoint.headers?.find((h) => h.key === 'x-payment-tx');
      const walletAddressHeader = endpoint.headers?.find((h) => h.key === 'x-wallet-address');

      options.headers['x-payment-tx'] = paymentTxHeader?.value || '';
      options.headers['x-wallet-address'] = walletAddressHeader?.value || '';
      options.headers['x-target-url'] = endpoint.url; // Tell proxy where to forward
      options.headers['Content-Type'] = 'application/json';
    } else {
      // JWT mode - use headers as normal
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
          // Extract x-validation-proof header if present
          // Extract x-validation-proof header if present
          // Cast to any to avoid TS errors with inferred ArrayBuffer types
          const anyRes = res as any;
          const proof = anyRes.headers ? anyRes.headers.get('x-validation-proof') : null;

          if (anyRes.body && typeof anyRes.body === 'object') {
            // Inject headers into the body object for stricter type access if needed,
            // or just ensure the proof is available for the UI
            anyRes.body._proof = proof || anyRes.body._proof;
          }

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
