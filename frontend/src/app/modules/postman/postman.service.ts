import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { AuthService } from 'app/core/auth/auth.service';
import { SessionService } from 'app/core/services/session.service';
import { UserService } from 'app/core/user/user.service';
import { AgentWalletService } from 'app/modules/chat/services/agent-wallet.service';
import {
    API_ENDPOINTS,
    ApiEndpoint,
    PostmanEndpointRowDto,
    PostmanFolderDto,
    PostmanLayoutData,
    PostmanLayoutResponse,
} from './postman.types';

import { HttpParams } from '@angular/common/http';
import { environment } from 'environments/environment';
import { Observable, catchError, distinctUntilChanged, finalize, forkJoin, map, of, skip, tap, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class PostmanService {
    private _sessionService = inject(SessionService);
    private _userService = inject(UserService);
    private _authService = inject(AuthService);
    private _agentWalletService = inject(AgentWalletService);

    endpoints = signal<ApiEndpoint[]>(API_ENDPOINTS);

    layoutFolders = signal<PostmanFolderDto[]>([]);
    layoutEndpointsRaw = signal<PostmanEndpointRowDto[]>([]);
    layoutLoaded = signal(false);
    layoutLoading = signal(false);
    /** Transloco key for layout GET failure (optional toast copy) */
    layoutError = signal<string | null>(null);

    /** When true, sidebar uses folder tree + Library; catalog-only grouping for guests. */
    useLayoutSidebar = computed(() => {
        if (!this.layoutLoaded()) {
            return false;
        }
        return this._sessionService.isTokenValid();
    });

    selectedEndpoint = signal<ApiEndpoint | null>(null);
    selectedCountry = signal<string | null>(null);
    response = signal<any>(null);
    responseTime = signal<number | null>(null);
    isLoading = signal<boolean>(false);
    error = signal<any>(null);
    paymentMethod = signal<'credits' | 'x402'>('credits');

    constructor(private _httpClient: HttpClient) {
        this.loadExplorerData();
        // Only reload the catalog when the *identity* changes (login / logout / account
        // switch). Credit-only updates also emit on `user$`, and reloading there would
        // wipe the in-progress response (the URL→endpoint effect re-runs and calls
        // `selectEndpoint`, which clears `response`).
        this._userService.user$
            .pipe(
                skip(1),
                map((user) => (user as any)?._id || (user as any)?.id || null),
                distinctUntilChanged(),
            )
            .subscribe(() => {
                if (this._sessionService.isTokenValid()) {
                    this.loadExplorerData();
                }
            });
    }

    private _authHeaders(): Record<string, string> {
        const token = localStorage.getItem('accessToken');
        return token ? { Authorization: `Bearer ${token}` } : {};
    }

    private _apiUrl(): string {
        return environment.apiUrl;
    }

    /**
     * Loads app-features catalog and (when authenticated) Postman layout, then merges.
     */
    loadExplorerData(): void {
        this.layoutLoading.set(true);
        this.layoutError.set(null);

        const apiUrl = this._apiUrl();
        const isAuthenticated = this._sessionService.isTokenValid();
        const headers = this._authHeaders();

        const featuresUrl = isAuthenticated
            ? `${apiUrl}/v2/app-features/my-list`
            : `${apiUrl}/v2/public/app-features`;

        const features$ = this._httpClient.get<any>(featuresUrl).pipe(
            catchError((err) => {
                console.error('Failed to fetch features', err);
                return of({ data: [] });
            })
        );

        const layout$ = isAuthenticated
            ? this._httpClient
                  .get<PostmanLayoutResponse>(`${apiUrl}/v2/postman/layout`, { headers })
                  .pipe(
                      catchError((err) => {
                          console.error('Failed to fetch postman layout', err);
                          this.layoutError.set('postman.sidebar.layoutLoadError');
                          return of(null);
                      })
                  )
            : of(null);

        forkJoin({ features: features$, layout: layout$ })
            .pipe(
                tap(({ features, layout }) => {
                    const featureList = features?.data || [];
                    const dynamicEndpoints: ApiEndpoint[] = featureList.map((feature: any) =>
                        this._createEndpointFromFeature(feature, apiUrl)
                    );
                    const mergedCatalog = this._mergeEndpoints(API_ENDPOINTS, dynamicEndpoints);
                    const layoutData = layout?.data ?? null;
                    const rawFolders = layoutData?.folders ?? [];
                    const rawEndpoints = layoutData?.endpoints ?? [];

                    this.layoutFolders.set(rawFolders.map((f) => this._normalizeFolderDto(f)));
                    this.layoutEndpointsRaw.set(
                        rawEndpoints.map((e) => this._normalizeEndpointDto(e))
                    );

                    const withLayout = this._applyPostmanLayout(mergedCatalog, layoutData);
                    this.endpoints.set(withLayout);

                    this.selectedEndpoint.update((current) => {
                        if (!current) {
                            return current;
                        }
                        const match = withLayout.find((endpoint) =>
                            this._isSameEndpoint(endpoint, current)
                        );
                        if (!match) {
                            return current;
                        }
                        return {
                            ...match,
                            headers: current.headers?.length ? current.headers : match.headers,
                            params: this._mergeEndpointParams(current.params, match.params),
                            body: current.body ?? match.body,
                        };
                    });
                }),
                finalize(() => {
                    this.layoutLoading.set(false);
                    this.layoutLoaded.set(true);
                })
            )
            .subscribe();
    }

    private _normalizeFolderDto(f: PostmanFolderDto): PostmanFolderDto {
        return {
            ...f,
            _id: String(f._id),
            parentFolder: f.parentFolder != null ? String(f.parentFolder) : null,
        };
    }

    private _normalizeEndpointDto(e: PostmanEndpointRowDto): PostmanEndpointRowDto {
        return {
            ...e,
            _id: String(e._id),
            folder: e.folder != null ? String(e.folder) : null,
        };
    }

    private _applyPostmanLayout(
        catalog: ApiEndpoint[],
        layoutData: PostmanLayoutData | null | undefined
    ): ApiEndpoint[] {
        if (!layoutData || (!layoutData.endpoints?.length && !layoutData.folders?.length)) {
            return catalog.map((ep) => ({ ...ep }));
        }

        const folderIds = new Set(
            (layoutData.folders || []).map((f) => String((f as PostmanFolderDto)._id))
        );
        const byCode = new Map<string, PostmanEndpointRowDto>();
        for (const row of layoutData.endpoints || []) {
            if (row.appFeatureCode) {
                byCode.set(
                    row.appFeatureCode,
                    this._normalizeEndpointDto(row as PostmanEndpointRowDto)
                );
            }
        }

        return catalog.map((ep) => {
            if (!ep.code) {
                return { ...ep };
            }
            const row = byCode.get(ep.code);
            if (!row) {
                return { ...ep };
            }
            let folderId: string | null = null;
            if (row.folder) {
                const fid = String(row.folder);
                folderId = folderIds.has(fid) ? fid : null;
            }
            return {
                ...ep,
                postmanEndpointId: row._id,
                postmanFolderId: folderId,
                layoutSortOrder: typeof row.sortOrder === 'number' ? row.sortOrder : 0,
                layoutDisplayName: row.displayName?.trim() ? row.displayName : undefined,
                isFavorite: !!row.isFavorite,
            };
        });
    }

    private _mapCategory(category: string): string {
        if (!category) {
            return 'OTHER';
        }
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

                          const enumList =
                              Array.isArray(dependency.enum) && dependency.enum.length
                                  ? [...dependency.enum]
                                  : undefined;

                          return {
                              key: dependency.field,
                              value: defaultVal,
                              type: dependency.type,
                              required: dependency.required,
                              description: desc,
                              ...(enumList ? { enum: enumList } : {}),
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
            ...(feature.docs && typeof feature.docs === 'object' ? { docs: feature.docs } : {}),
        };
    }

    /**
     * Merges static catalog params with API-derived params by `key` so metadata such as `enum`
     * from the feature list is preserved while keeping user-facing `value` from the catalog.
     */
    private _mergeEndpointParams(
        existing: ApiEndpoint['params'],
        match: ApiEndpoint['params']
    ): ApiEndpoint['params'] {
        if (!match?.length) {
            return existing?.length ? existing : match;
        }
        if (!existing?.length) {
            return match;
        }

        type ParamRow = NonNullable<ApiEndpoint['params']>[number];
        const matchByKey = new Map<string, ParamRow>(match.map((p) => [p.key, p]));
        const merged: ParamRow[] = [];
        const consumedKeys = new Set<string>();

        for (const ex of existing) {
            const m = matchByKey.get(ex.key);
            if (m) {
                consumedKeys.add(ex.key);
                merged.push(this._mergeParamRow(ex, m));
            } else {
                merged.push({ ...ex });
            }
        }

        for (const m of match) {
            if (!consumedKeys.has(m.key)) {
                merged.push({ ...m });
            }
        }

        return merged;
    }

    private _mergeParamRow(
        existing: NonNullable<ApiEndpoint['params']>[number],
        match: NonNullable<ApiEndpoint['params']>[number]
    ): NonNullable<ApiEndpoint['params']>[number] {
        const enumMerged = existing.enum && existing.enum.length ? existing.enum : match.enum;
        const description = existing.description?.trim() ? existing.description : match.description;

        return {
            ...match,
            ...existing,
            enum: enumMerged,
            description,
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
            if (!match) {
                return existing;
            }

            matchedDynamicIds.add(match.id);

            return {
                ...match,
                id: existing.id,
                label: existing.label || match.label,
                method: existing.method || match.method,
                url: existing.url || match.url,
                headers: existing.headers?.length ? existing.headers : match.headers,
                params: this._mergeEndpointParams(existing.params, match.params),
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

    /** Flatten folders depth-first for “Move to” menus (label with indent). */
    flattenFoldersForMenu(): { id: string; label: string }[] {
        const folders = this.layoutFolders();
        const roots = folders
            .filter((f) => f.parentFolder == null || f.parentFolder === '')
            .sort(
                (a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0) || a.name.localeCompare(b.name)
            );

        const result: { id: string; label: string }[] = [];

        const walk = (list: PostmanFolderDto[], depth: number) => {
            for (const f of list) {
                const pad = depth > 0 ? `${'— '.repeat(depth)}` : '';
                result.push({ id: f._id, label: `${pad}${f.name}` });
                const kids = folders
                    .filter((x) => x.parentFolder === f._id)
                    .sort(
                        (a, b) =>
                            (a.sortOrder ?? 0) - (b.sortOrder ?? 0) || a.name.localeCompare(b.name)
                    );
                walk(kids, depth + 1);
            }
        };

        walk(roots, 0);
        return result;
    }

    createFolder(name: string, parentFolder?: string | null): Observable<unknown> {
        const body: Record<string, unknown> = { name: name.trim() };
        if (parentFolder) {
            body['parentFolder'] = parentFolder;
        }
        return this._httpClient.post(`${this._apiUrl()}/v2/postman/folders`, body, {
            headers: this._authHeaders(),
        });
    }

    updateFolder(
        folderId: string,
        patch: {
            name?: string;
            description?: string;
            sortOrder?: number;
            parentFolder?: string | null;
        }
    ): Observable<unknown> {
        return this._httpClient.put(`${this._apiUrl()}/v2/postman/folders/${folderId}`, patch, {
            headers: this._authHeaders(),
        });
    }

    deleteFolder(
        folderId: string,
        options?: { deleteEndpointLayouts?: boolean }
    ): Observable<unknown> {
        let params = new HttpParams();
        if (options?.deleteEndpointLayouts) {
            params = params.set('deleteEndpointLayouts', 'true');
        }
        return this._httpClient.delete(`${this._apiUrl()}/v2/postman/folders/${folderId}`, {
            headers: this._authHeaders(),
            params,
        });
    }

    /**
     * Creates or updates a PostmanEndpoint row to assign folder / metadata.
     */
    upsertEndpointLayout(
        endpoint: ApiEndpoint,
        patch: {
            folder?: string | null;
            displayName?: string;
            sortOrder?: number;
            isFavorite?: boolean;
        }
    ): Observable<unknown> {
        if (!endpoint.code) {
            return throwError(() => new Error('Endpoint has no app feature code'));
        }
        const headers = this._authHeaders();
        const base = `${this._apiUrl()}/v2/postman/endpoints`;

        if (endpoint.postmanEndpointId) {
            return this._httpClient.put(`${base}/${endpoint.postmanEndpointId}`, patch, {
                headers,
            });
        }

        return this._httpClient.post(
            base,
            {
                appFeatureCode: endpoint.code,
                folder: patch.folder ?? null,
                displayName: patch.displayName ?? endpoint.layoutDisplayName ?? '',
                sortOrder: patch.sortOrder ?? endpoint.layoutSortOrder ?? 0,
                isFavorite: patch.isFavorite ?? endpoint.isFavorite ?? false,
            },
            { headers }
        );
    }

    selectEndpoint(endpoint: ApiEndpoint) {
        const endpointCopy = JSON.parse(JSON.stringify(endpoint));

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

        const isX402 = this.paymentMethod() === 'x402';

        let url = endpoint.url;
        const options: any = {
            headers: {},
            params: {},
        };

        if (isX402) {
            url = `${environment.smartAgentUrl}/api/proxy`;

            const paymentTxHeader = endpoint.headers?.find((h) => h.key === 'x-payment-tx');
            const walletAddressHeader = endpoint.headers?.find((h) => h.key === 'x-wallet-address');

            options.headers['x-payment-tx'] = paymentTxHeader?.value || '';
            options.headers['x-wallet-address'] = walletAddressHeader?.value || '';
            options.headers['x-target-url'] = endpoint.url;
            options.headers['Content-Type'] = 'application/json';
        } else {
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

        if (endpoint.params) {
            endpoint.params.forEach((p) => {
                if (p.value) {
                    options.params[p.key] = p.value;
                }
            });
        }

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
                const anyRes = res as any;
                const proof = anyRes.headers ? anyRes.headers.get('x-validation-proof') : null;

                if (anyRes.body && typeof anyRes.body === 'object') {
                    anyRes.body._proof = proof || anyRes.body._proof;
                }

                this.isLoading.set(false);
                this.response.set(res);
                this.responseTime.set(Date.now() - startTime);

                this._refreshCredits(anyRes?.status);
            }),
            catchError((err) => {
                this.isLoading.set(false);
                this.error.set(err);
                this._refreshCredits(err?.status);
                return of(null);
            }),
            finalize(() => {
                this._refreshWalletForX402();
            })
        ).subscribe();
    }

    /**
     * Refreshes session credits after a Postman call in `credits` mode whenever the
     * backend produced a real HTTP response (any status > 0, including 4xx like 404 and
     * 5xx). Network errors (status === 0) are skipped because no credit was consumed.
     */
    private _refreshCredits(status: number | undefined): void {
        if (this.paymentMethod() !== 'credits') return;
        if (!status || status <= 0) return;
        if (!this._sessionService.isTokenValid()) return;

        this._authService.refreshSession().subscribe({
            error: () => {
                /* swallow: keep current cached user if refresh fails */
            },
        });
    }

    /**
     * Refreshes wallet balances after every Postman call in `x402` mode (success, error,
     * or 402 retry) so AVAX/VKA in the header stay aligned with the on-chain state.
     */
    private _refreshWalletForX402(): void {
        if (this.paymentMethod() !== 'x402') return;

        void this._agentWalletService.refreshBalance();
    }
}
