import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { catchError, of, tap } from 'rxjs';
import { SessionService } from 'app/core/services/session.service';
import { API_ENDPOINTS, ApiEndpoint } from './postman.types';

import { environment } from 'environments/environment';

@Injectable({
    providedIn: 'root',
})
export class PostmanService {
    private _sessionService = inject(SessionService);

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
        this.fetchFeatures();
    }

    /**
     * Fetch features from the appropriate source:
     * - Authenticated: /v2/app-features/my-list (current user prices)
     * - Unauthenticated: /v2/public/app-features (public catalog prices)
     */
    fetchFeatures() {
        const apiUrl = environment.apiUrl;
        const isAuthenticated = this._sessionService.isTokenValid();
        const url = isAuthenticated
            ? `${apiUrl}/v2/app-features/my-list`
            : `${apiUrl}/v2/public/app-features`;

        this._httpClient
            .get<any>(url)
            .pipe(
                tap((response) => {
                    if (response && response.data) {
                        const features = response.data || [];
                        const dynamicEndpoints: ApiEndpoint[] = features.map((feature: any) =>
                            this._createEndpointFromFeature(feature, apiUrl)
                        );

                        const mergedEndpoints = this._mergeEndpoints(
                            this.endpoints(),
                            dynamicEndpoints
                        );
                        this.endpoints.set(mergedEndpoints);

                        this.selectedEndpoint.update((current) => {
                            if (!current) return current;
                            const match = mergedEndpoints.find((endpoint) =>
                                this._isSameEndpoint(endpoint, current)
                            );
                            if (!match) return current;
                            return {
                                ...current,
                                estimatedCost: match.estimatedCost ?? current.estimatedCost,
                                description: current.description || match.description,
                                category: current.category || match.category,
                                country: current.country || match.country,
                                documentationUrl:
                                    current.documentationUrl || match.documentationUrl,
                            };
                        });
                    }
                }),
                catchError((err) => {
                    console.error('Failed to fetch features', err);
                    // Return empty so the stream completes successfully without crashing
                    return of(null);
                })
            )
            .subscribe();
    }

    private _mapCategory(category: string): string {
        if (!category) return 'OTHER';
        return category.toUpperCase().replace('-', ' ');
    }

    private _createEndpointFromFeature(feature: any, apiUrl: string): ApiEndpoint {
        const method = feature.group === 'apiRequest' ? 'GET' : feature.method || 'POST';

        return {
            id: feature._id || feature.code,
            label: feature.name,
            code: feature.code,
            category: this._mapCategory(feature.baseCategory || feature.group),
            country: feature.country,
            method,
            url: feature.url
                ? feature.url.startsWith('http')
                    ? feature.url
                    : `${apiUrl}/${feature.url}`
                : '',
            description: feature.description,
            estimatedCost: feature.price ?? 0,
            headers: [
                { key: 'Content-Type', value: 'application/json' },
                {
                    key: 'Authorization',
                    value: 'Bearer <token>',
                },
            ],
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
    }

    private _mergeEndpoints(
        current: ApiEndpoint[],
        dynamicEndpoints: ApiEndpoint[]
    ): ApiEndpoint[] {
        const matchedDynamicIds = new Set<string>();

        const mergedCurrent = current.map((existing) => {
            const match = dynamicEndpoints.find((dynamic) =>
                this._isSameEndpoint(existing, dynamic)
            );
            if (!match) return existing;

            matchedDynamicIds.add(match.id);

            return {
                ...match,
                id: existing.id,
                label: existing.label || match.label,
                method: existing.method || match.method,
                url: existing.url || match.url,
                headers: existing.headers?.length ? existing.headers : match.headers,
                params: existing.params?.length ? existing.params : match.params,
                body: existing.body ?? match.body,
                documentationUrl: existing.documentationUrl || match.documentationUrl,
            };
        });

        const newEndpoints = dynamicEndpoints.filter(
            (endpoint) => !matchedDynamicIds.has(endpoint.id)
        );

        return [...mergedCurrent, ...newEndpoints];
    }

    private _isSameEndpoint(left: ApiEndpoint, right: ApiEndpoint): boolean {
        if (left.code && right.code && left.code === right.code) {
            return true;
        }

        return this._normalizeUrl(left.url) === this._normalizeUrl(right.url);
    }

    private _normalizeUrl(url: string): string {
        return url.replace(environment.apiUrl, '').replace(/^\/+/, '');
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

        req$.pipe(
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
            })
        ).subscribe();
    }
}
