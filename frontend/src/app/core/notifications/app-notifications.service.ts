import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { environment } from 'environments/environment';
import {
    Observable,
    catchError,
    finalize,
    forkJoin,
    map,
    of,
    Subject,
    switchMap,
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

    readonly unreadCount = this._unreadCount.asReadonly();
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

    getActiveBanners(productScope = APP_NOTIFICATION_PRODUCT_SCOPE) {
        return this._http
            .get<InboxListResponse>(`${this._baseUrl}/inbox/active-banners`, {
                params: { productScope },
            })
            .pipe(
                map((response) => this._normalizeInboxList(response)),
                catchError(() =>
                    of({
                        data: [],
                        pagination: { page: 1, perPage: 10, total: 0, pages: 0 },
                    } as InboxListResponse)
                )
            );
    }

    getActiveModals(productScope = APP_NOTIFICATION_PRODUCT_SCOPE) {
        return this._http
            .get<InboxListResponse>(`${this._baseUrl}/inbox/active-modals`, {
                params: { productScope },
            })
            .pipe(
                map((response) => this._normalizeInboxList(response)),
                catchError(() =>
                    of({
                        data: [],
                        pagination: { page: 1, perPage: 10, total: 0, pages: 0 },
                    } as InboxListResponse)
                )
            );
    }

    show(notificationId: string, productScope = APP_NOTIFICATION_PRODUCT_SCOPE) {
        return this._http.get<{ data: InboxItem }>(
            `${this._baseUrl}/inbox/${notificationId}`,
            { params: { productScope } }
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
    }

    /**
     * Load union of inbox + active banners + active modals into hub signals.
     * Idempotent while a refresh is already in flight unless `force` is true.
     */
    refreshHubInbox(force = false): Observable<void> {
        if (this._hubRefreshInFlight && !force) {
            return of(undefined);
        }

        const generation = ++this._hubRefreshGeneration;
        this._hubRefreshInFlight = true;
        this._hubInboxLoading.set(true);
        this._hubInboxError.set(null);
        this._hubInboxPendingOutside.set(false);

        const emptyList: InboxListResponse = {
            data: [],
            pagination: { page: 1, perPage: 10, total: 0, pages: 0 },
        };

        const hubQuery: InboxQueryParams = {
            page: 1,
            perPage: 50,
            includeUnreadCount: '1',
        };

        return this.syncInbox().pipe(
            switchMap(() =>
                forkJoin({
                    inbox: this.getInbox(hubQuery),
                    banners: this.getActiveBanners().pipe(catchError(() => of(emptyList))),
                    modals: this.getActiveModals().pipe(catchError(() => of(emptyList))),
                })
            ),
            tap(({ inbox, banners, modals }) => {
                if (generation !== this._hubRefreshGeneration) return;

                const byId = new Map<string, InboxItem>();
                for (const it of inbox.data || []) {
                    byId.set(it.notificationId, it);
                }
                for (const b of banners.data || []) {
                    if (!byId.has(b.notificationId)) {
                        byId.set(b.notificationId, b);
                    }
                }
                for (const m of modals.data || []) {
                    if (!byId.has(m.notificationId)) {
                        byId.set(m.notificationId, m);
                    }
                }

                const merged = Array.from(byId.values());
                const hiddenUnread = merged.filter(
                    (item) => this._resolvedIds.has(item.notificationId) && item.receipt?.isUnread
                ).length;
                const items = this._sortHubItems(
                    merged.filter((item) => !this._resolvedIds.has(item.notificationId))
                );
                const listUnread = Math.max(
                    0,
                    (inbox.meta?.unreadCount ?? this._unreadCount()) - hiddenUnread
                );

                this._hubInboxItems.set(items);
                if (inbox.meta?.unreadCount != null) {
                    this._unreadCount.set(listUnread);
                }

                const effectiveUnread = listUnread || this._unreadCount();
                this._hubInboxPendingOutside.set(
                    items.length === 0 && effectiveUnread > 0
                );

                this._logHubDebug('refreshHubInbox', {
                    inboxCount: (inbox.data || []).length,
                    bannerCount: (banners.data || []).length,
                    modalCount: (modals.data || []).length,
                    finalListCount: items.length,
                    metaUnread: inbox.meta?.unreadCount,
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
    bootstrapInbox(): Observable<{ data: InboxSyncResult }> {
        return this.syncInbox();
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
