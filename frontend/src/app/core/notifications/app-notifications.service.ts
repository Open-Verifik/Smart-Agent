import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { environment } from 'environments/environment';
import {
    Observable,
    catchError,
    finalize,
    map,
    of,
    Subject,
    tap,
    throwError,
} from 'rxjs';

import {
    APP_NOTIFICATION_PRODUCT_SCOPE,
    AcceptNotificationPayload,
    InboxItem,
    InboxListResponse,
    InboxQueryParams,
    InboxSyncResult,
} from './app-notifications.models';

const DETAIL_CACHE_MS = 60 * 60 * 1000;

interface ListCache {
    revision: string | null;
    cacheUntil: number;
    payload: InboxListResponse;
}

interface DetailCacheEntry {
    item: InboxItem;
    cacheUntil: number;
}

@Injectable({ providedIn: 'root' })
export class AppNotificationsService {
    private readonly _http = inject(HttpClient);
    private readonly _unreadCount = signal(0);

    /** Messages hub drawer — shared list state (survives tab switches). */
    private readonly _hubInboxItems = signal<InboxItem[]>([]);
    private readonly _hubInboxLoading = signal(false);
    private readonly _hubInboxError = signal<string | null>(null);
    private readonly _hubInboxPendingOutside = signal(false);
    private _hubRefreshInFlight = false;
    private _hubRefreshGeneration = 0;
    /** Ids removed this session so a slower refresh cannot put them back. */
    private readonly _resolvedIds = new Set<string>();
    private readonly _openBell$ = new Subject<void>();
    private _inboxCache: ListCache | null = null;
    private _bannerCache: ListCache | null = null;
    private _modalCache: ListCache | null = null;
    private _bannerGeneration = 0;
    private readonly _activeBanners = signal<InboxItem[] | null>(null);
    private readonly _detailCache = new Map<string, DetailCacheEntry>();

    readonly unreadCount = this._unreadCount.asReadonly();
    /** Home banners. Updated as soon as a cached or fresh list is available. */
    readonly activeBanners = this._activeBanners.asReadonly();
    readonly hubInboxItems = this._hubInboxItems.asReadonly();
    readonly hubInboxLoading = this._hubInboxLoading.asReadonly();
    readonly hubInboxError = this._hubInboxError.asReadonly();
    readonly hubInboxPendingOutside = this._hubInboxPendingOutside.asReadonly();
    /** Header bell listens and opens. Replaces the old messages-drawer notifications tab. */
    readonly openBell$ = this._openBell$.asObservable();

    /** Ask the header bell to open. */
    requestOpenBell(): void {
        this._openBell$.next();
    }

    private get _baseUrl(): string {
        return `${environment.apiUrl}/v2/app-notifications`;
    }

    private _inboxParams(params: InboxQueryParams = {}): Record<string, string | number> {
        return {
            productScope: params.productScope ?? APP_NOTIFICATION_PRODUCT_SCOPE,
            ...(params.page != null ? { page: params.page } : {}),
            ...(params.perPage != null ? { perPage: params.perPage } : {}),
            ...(params.unreadOnly != null ? { unreadOnly: params.unreadOnly } : {}),
            ...(params.includeUnreadCount != null
                ? { includeUnreadCount: params.includeUnreadCount }
                : {}),
            ...(params.surface ? { surface: params.surface } : {}),
            ...(params.revision ? { revision: params.revision } : {}),
        };
    }

    private _normalizeInboxList(body: unknown): InboxListResponse {
        const response = body as InboxListResponse & { data?: InboxItem[] | InboxListResponse };

        if (Array.isArray(response?.data)) {
            return response;
        }

        const nested = response?.data as InboxListResponse | undefined;
        if (nested && Array.isArray(nested.data)) {
            return {
                data: nested.data,
                pagination: nested.pagination,
                meta: nested.meta ?? response.meta,
            };
        }

        return {
            data: [],
            pagination: { page: 1, perPage: 50, total: 0, pages: 0 },
        };
    }

    syncInbox(productScope = APP_NOTIFICATION_PRODUCT_SCOPE) {
        return this._http
            .post<{ data: InboxSyncResult }>(`${this._baseUrl}/inbox/sync`, null, {
                params: { productScope },
            })
            .pipe(
                tap((response) => {
                    this._unreadCount.set(response.data?.unreadCount ?? 0);
                }),
                catchError(() => {
                    this._unreadCount.set(0);
                    return of({ data: { synced: 0, unreadCount: 0 } });
                })
            );
    }

    getInbox(params: InboxQueryParams = {}) {
        return this._http
            .get<InboxListResponse>(`${this._baseUrl}/inbox`, {
                params: this._inboxParams({
                    ...params,
                    includeUnreadCount: params.includeUnreadCount ?? '1',
                }),
            })
            .pipe(
                map((response) => this._normalizeInboxList(response)),
                tap((response) => {
                    if (response.meta?.unchanged) return;
                    if (response.meta?.unreadCount != null) {
                        this._unreadCount.set(response.meta.unreadCount);
                    }
                }),
                catchError((error: HttpErrorResponse) => throwError(() => error))
            );
    }

    getUnreadCount(
        productScope = APP_NOTIFICATION_PRODUCT_SCOPE,
        surface?: string
    ) {
        const params: Record<string, string> = { productScope };
        if (surface) params['surface'] = surface;

        return this._http
            .get<{ data: { unreadCount: number } }>(`${this._baseUrl}/inbox/unread-count`, {
                params,
            })
            .pipe(
                tap((response) => {
                    this._unreadCount.set(response.data?.unreadCount ?? 0);
                }),
                catchError(() => of({ data: { unreadCount: 0 } }))
            );
    }

    getActiveBanners(productScope = APP_NOTIFICATION_PRODUCT_SCOPE, force = false) {
        if (!force && this._cacheStillValid(this._bannerCache)) {
            const payload = this._bannerCache!.payload;
            this._activeBanners.set(payload.data || []);
            return of(payload);
        }

        const generation = ++this._bannerGeneration;
        const revision = !force ? this._bannerCache?.revision : undefined;

        return this._http
            .get<InboxListResponse>(`${this._baseUrl}/inbox/active-banners`, {
                params: {
                    productScope,
                    ...(revision ? { revision } : {}),
                },
            })
            .pipe(
                map((response) => this._normalizeInboxList(response)),
                map((response) => this._storeBanners(generation, response)),
                catchError(() => {
                    const fallback = this._bannerCache?.payload ?? this._emptyList();
                    if (generation === this._bannerGeneration) {
                        this._activeBanners.set(fallback.data || []);
                    }
                    return of(fallback);
                })
            );
    }

    getActiveModals(productScope = APP_NOTIFICATION_PRODUCT_SCOPE) {
        return this._cachedSurface(
            () => this._modalCache,
            (next) => {
                this._modalCache = next;
            },
            `${this._baseUrl}/inbox/active-modals`,
            productScope
        );
    }

    show(notificationId: string, productScope = APP_NOTIFICATION_PRODUCT_SCOPE) {
        const cached = this._detailCache.get(notificationId);
        if (cached && Date.now() < cached.cacheUntil) {
            return of({ data: cached.item });
        }

        return this._http
            .get<{ data: InboxItem }>(`${this._baseUrl}/inbox/${notificationId}`, {
                params: { productScope },
            })
            .pipe(
                tap((response) => {
                    if (!response?.data) return;
                    this._detailCache.set(notificationId, {
                        item: response.data,
                        cacheUntil: Date.now() + DETAIL_CACHE_MS,
                    });
                })
            );
    }

    markSeen(notificationId: string, productScope = APP_NOTIFICATION_PRODUCT_SCOPE) {
        return this._http.put<{ data: unknown }>(
            `${this._baseUrl}/inbox/${notificationId}/seen`,
            null,
            { params: { productScope } }
        );
    }

    markSeenBulk(notificationIds: string[], productScope = APP_NOTIFICATION_PRODUCT_SCOPE) {
        return this._http.put<{ data: unknown }>(
            `${this._baseUrl}/inbox/seen`,
            { notificationIds },
            { params: { productScope } }
        );
    }

    acknowledge(notificationId: string, productScope = APP_NOTIFICATION_PRODUCT_SCOPE) {
        return this._http.put<{ data: InboxItem }>(
            `${this._baseUrl}/inbox/${notificationId}/acknowledge`,
            null,
            { params: { productScope } }
        );
    }

    accept(
        notificationId: string,
        body: AcceptNotificationPayload,
        productScope = APP_NOTIFICATION_PRODUCT_SCOPE
    ) {
        return this._http.put<{ data: InboxItem }>(
            `${this._baseUrl}/inbox/${notificationId}/accept`,
            body,
            { params: { productScope } }
        );
    }

    dismiss(notificationId: string, productScope = APP_NOTIFICATION_PRODUCT_SCOPE) {
        return this._http.put<{ data: InboxItem }>(
            `${this._baseUrl}/inbox/${notificationId}/dismiss`,
            null,
            { params: { productScope } }
        );
    }

    setUnreadCount(count: number): void {
        this._unreadCount.set(count);
    }

    /**
     * Drop a notification from the hub immediately and keep later refreshes from restoring it.
     */
    forgetHubItem(notificationId: string): void {
        const existing = this._hubInboxItems().find((item) => item.notificationId === notificationId);
        this._resolvedIds.add(notificationId);
        this._hubInboxItems.update((items) => items.filter((item) => item.notificationId !== notificationId));
        if (existing?.receipt?.isUnread) {
            this._unreadCount.update((count) => Math.max(0, count - 1));
        }
        this._dropCachedItem(notificationId);
    }

    /**
     * Mark an informational or seen-required row read locally without removing it.
     */
    noteSeenLocally(notificationId: string): void {
        let clearedUnread = false;
        this._hubInboxItems.update((items) =>
            items.map((item) => {
                if (item.notificationId !== notificationId || !item.receipt?.isUnread) return item;
                if (item.interactionMode === 'acknowledge' || item.interactionMode === 'accept') return item;
                clearedUnread = true;
                return {
                    ...item,
                    receipt: {
                        ...item.receipt,
                        isUnread: false,
                        firstSeenAt: item.receipt.firstSeenAt || new Date().toISOString(),
                    },
                };
            })
        );
        if (clearedUnread) {
            this._unreadCount.update((count) => Math.max(0, count - 1));
            this._markCachedSeen(notificationId);
        }
    }

    dismissAndForget(notificationId: string): Observable<void> {
        return this.dismiss(notificationId).pipe(
            tap(() => this.forgetHubItem(notificationId)),
            map(() => undefined)
        );
    }

    acknowledgeAndForget(notificationId: string): Observable<void> {
        return this.acknowledge(notificationId).pipe(
            tap(() => this.forgetHubItem(notificationId)),
            map(() => undefined)
        );
    }

    acceptAndForget(notificationId: string, body: AcceptNotificationPayload): Observable<void> {
        return this.accept(notificationId, body).pipe(
            tap(() => this.forgetHubItem(notificationId)),
            map(() => undefined)
        );
    }

    /** Mark unread informational and seen-required hub rows as seen. */
    markVisibleAsSeen(): Observable<void> {
        const ids = this._hubInboxItems()
            .filter(
                (item) =>
                    item.receipt?.isUnread &&
                    (item.interactionMode === 'informational' || item.interactionMode === 'seen_required')
            )
            .map((item) => item.notificationId);

        if (!ids.length) return of(undefined);

        return this.markSeenBulk(ids).pipe(
            tap(() => {
                for (const id of ids) this.noteSeenLocally(id);
            }),
            map(() => undefined)
        );
    }

    /** Clear hub list (e.g. logged out / no workspace JWT). */
    clearHubInbox(): void {
        this._hubInboxItems.set([]);
        this._hubInboxError.set(null);
        this._hubInboxPendingOutside.set(false);
        this._hubInboxLoading.set(false);
        this._hubRefreshInFlight = false;
        this._hubRefreshGeneration += 1;
        this._resolvedIds.clear();
        this._inboxCache = null;
        this._bannerCache = null;
        this._modalCache = null;
        this._activeBanners.set(null);
        this._bannerGeneration += 1;
        this._detailCache.clear();
    }

    /**
     * Load the inbox into hub signals.
     * Idempotent while a refresh is already in flight unless `force` is true.
     * Sync runs on the server only when this account's revision is newer.
     */
    refreshHubInbox(force = false): Observable<void> {
        if (this._hubRefreshInFlight && !force) {
            return of(undefined);
        }

        if (!force && this._cacheStillValid(this._inboxCache)) {
            this._applyInboxPayload(this._inboxCache!.payload);
            return of(undefined);
        }

        return this._fetchHubInbox();
    }

    private _fetchHubInbox(): Observable<void> {
        const generation = ++this._hubRefreshGeneration;
        this._hubRefreshInFlight = true;
        this._hubInboxLoading.set(true);
        this._hubInboxError.set(null);
        this._hubInboxPendingOutside.set(false);

        const hubQuery: InboxQueryParams = {
            page: 1,
            perPage: 50,
            includeUnreadCount: '1',
            ...(this._inboxCache?.revision ? { revision: this._inboxCache.revision } : {}),
        };

        return this.getInbox(hubQuery).pipe(
            tap((inbox) => {
                if (generation !== this._hubRefreshGeneration) return;
                this._inboxCache = this._rememberList(this._inboxCache, inbox);
                this._applyInboxPayload(this._inboxCache.payload);
                if (!inbox.meta?.unchanged) {
                    this.getActiveBanners(APP_NOTIFICATION_PRODUCT_SCOPE, true).subscribe({
                        error: () => undefined,
                    });
                }
                this._logHubDebug('refreshHubInbox', {
                    inboxCount: (this._inboxCache.payload.data || []).length,
                    unchanged: Boolean(inbox.meta?.unchanged),
                    revision: this._inboxCache.revision,
                    metaUnread: this._inboxCache.payload.meta?.unreadCount,
                    signalUnread: this._unreadCount(),
                });
            }),
            catchError((err) => {
                if (generation === this._hubRefreshGeneration) {
                    this._hubInboxError.set('appNotifications.inbox.errors.loadList');
                    this._hubInboxPendingOutside.set(false);
                    console.error('[Notifications] refreshHubInbox failed', err);
                }
                return of(undefined);
            }),
            finalize(() => {
                if (generation !== this._hubRefreshGeneration) return;
                this._hubInboxLoading.set(false);
                this._hubRefreshInFlight = false;
            }),
            map(() => undefined)
        );
    }

    /** Warm inbox + unread badge after login (non-blocking). */
    bootstrapInbox(): Observable<void> {
        return this.refreshHubInbox();
    }

    private _cacheStillValid(cache: ListCache | null): boolean {
        return Boolean(cache && Date.now() < cache.cacheUntil);
    }

    private _rememberList(current: ListCache | null, response: InboxListResponse): ListCache {
        const cacheForMs = response.meta?.cacheForMs ?? 15 * 60 * 1000;
        if (response.meta?.unchanged && current) {
            return {
                revision: response.meta.revision || current.revision,
                cacheUntil: Date.now() + cacheForMs,
                payload: current.payload,
            };
        }

        return {
            revision: response.meta?.revision ?? current?.revision ?? null,
            cacheUntil: Date.now() + cacheForMs,
            payload: response,
        };
    }

    private _cachedSurface(
        readCache: () => ListCache | null,
        writeCache: (next: ListCache) => void,
        url: string,
        productScope: string
    ): Observable<InboxListResponse> {
        const current = readCache();
        if (this._cacheStillValid(current)) {
            return of(current!.payload);
        }

        return this._http
            .get<InboxListResponse>(url, {
                params: {
                    productScope,
                    ...(current?.revision ? { revision: current.revision } : {}),
                },
            })
            .pipe(
                map((response) => this._normalizeInboxList(response)),
                map((response) => {
                    const next = this._rememberList(readCache(), response);
                    writeCache(next);
                    return next.payload;
                }),
                catchError(() => of(readCache()?.payload ?? this._emptyList()))
            );
    }

    private _emptyList(perPage = 10): InboxListResponse {
        return {
            data: [],
            pagination: { page: 1, perPage, total: 0, pages: 0 },
        };
    }

    private _applyInboxPayload(inbox: InboxListResponse): void {
        const merged = inbox.data || [];
        const hiddenUnread = merged.filter(
            (item) => this._resolvedIds.has(item.notificationId) && item.receipt?.isUnread
        ).length;
        const items = this._sortHubItems(
            merged.filter((item) => !this._resolvedIds.has(item.notificationId))
        );

        this._hubInboxItems.set(items);
        if (inbox.meta?.unreadCount != null) {
            this._unreadCount.set(Math.max(0, inbox.meta.unreadCount - hiddenUnread));
        }
        this._hubInboxPendingOutside.set(items.length === 0 && this._unreadCount() > 0);
    }

    private _dropCachedItem(notificationId: string): void {
        this._detailCache.delete(notificationId);
        for (const cache of [this._inboxCache, this._bannerCache, this._modalCache]) {
            this._removeItemFromCache(cache, notificationId);
        }
        if (this._bannerCache) {
            this._activeBanners.set(this._bannerCache.payload.data || []);
        }
    }

    private _storeBanners(generation: number, response: InboxListResponse): InboxListResponse {
        const newerRequestWon = generation !== this._bannerGeneration && this._activeBanners() !== null;
        if (newerRequestWon) {
            return this._bannerCache?.payload ?? response;
        }

        this._bannerCache = this._rememberList(this._bannerCache, response);
        const payload = this._bannerCache.payload;
        this._activeBanners.set(payload.data || []);
        return payload;
    }

    private _removeItemFromCache(cache: ListCache | null, notificationId: string): void {
        if (!cache?.payload.data) return;

        const removed = cache.payload.data.find((item) => item.notificationId === notificationId);
        if (!removed) return;

        const unreadCount = cache.payload.meta?.unreadCount;
        cache.payload = {
            ...cache.payload,
            data: cache.payload.data.filter((item) => item.notificationId !== notificationId),
            meta: cache.payload.meta
                ? {
                      ...cache.payload.meta,
                      ...(unreadCount != null && removed.receipt?.isUnread
                          ? { unreadCount: Math.max(0, unreadCount - 1) }
                          : {}),
                  }
                : cache.payload.meta,
        };
    }

    private _markCachedSeen(notificationId: string): void {
        const seenAt = new Date().toISOString();
        for (const cache of [this._inboxCache, this._bannerCache, this._modalCache]) {
            if (!cache?.payload.data) continue;
            const matched = cache.payload.data.some(
                (item) => item.notificationId === notificationId && item.receipt?.isUnread
            );
            if (!matched) continue;

            const unreadCount = cache.payload.meta?.unreadCount;
            cache.payload = {
                ...cache.payload,
                data: cache.payload.data.map((item) =>
                    item.notificationId === notificationId
                        ? {
                              ...item,
                              receipt: {
                                  ...item.receipt,
                                  isUnread: false,
                                  firstSeenAt: item.receipt?.firstSeenAt || seenAt,
                              },
                          }
                        : item
                ),
                meta:
                    cache.payload.meta && unreadCount != null
                        ? {
                              ...cache.payload.meta,
                              unreadCount: Math.max(0, unreadCount - 1),
                          }
                        : cache.payload.meta,
            };
        }
    }

    private _sortHubItems(items: InboxItem[]): InboxItem[] {
        return [...items].sort((a, b) => {
            const unreadDelta =
                Number(b.receipt?.isUnread) - Number(a.receipt?.isUnread);
            if (unreadDelta !== 0) return unreadDelta;

            const aTime = new Date(a.publishedAt || 0).getTime();
            const bTime = new Date(b.publishedAt || 0).getTime();
            return bTime - aTime;
        });
    }

    private _logHubDebug(event: string, payload: Record<string, unknown>): void {
        if (typeof window === 'undefined' || !(window as Window & { __DEBUG_NOTIFICATIONS__?: boolean }).__DEBUG_NOTIFICATIONS__) {
            return;
        }

        console.log(`[Notifications] ${event}`, {
            ...payload,
            hubItems: this._hubInboxItems().length,
            hubLoading: this._hubInboxLoading(),
            hubError: this._hubInboxError(),
        });
    }
}
