import {
  HttpWrapperService
} from "./chunk-2W6CKTFA.js";
import {
  environment
} from "./chunk-3V5B4ZWC.js";
import {
  BehaviorSubject,
  HttpClient,
  Injectable,
  Subject,
  catchError,
  finalize,
  inject,
  map,
  of,
  setClassMetadata,
  signal,
  switchMap,
  tap,
  throwError,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-YWP2Y7QK.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-F5M2C4EZ.js";

// src/app/core/services/onboarding.service.ts
var OnboardingService = class _OnboardingService {
  constructor() {
    this._httpWrapper = inject(HttpWrapperService);
    this._apiUrl = environment.apiUrl;
  }
  /**
   * Get the client's onboarding progress checklist
   */
  getOnboarding() {
    return this._httpWrapper.sendRequest("get", `${this._apiUrl}/v2/onboarding`);
  }
  /**
   * Update the status of an onboarding task (e.g. VISITED, STARTED, STUCK)
   */
  updateTaskStatus(taskId, status) {
    return this._httpWrapper.sendRequest("post", `${this._apiUrl}/v2/onboarding/tasks/${taskId}/status`, {
      status
    });
  }
  /**
   * Trigger backend verification of an onboarding task
   */
  verifyTask(taskId) {
    return this._httpWrapper.sendRequest("post", `${this._apiUrl}/v2/onboarding/tasks/${taskId}/verify`, {});
  }
  /**
   * Trigger backend verification of all incomplete onboarding tasks
   */
  verifyAllTasks() {
    return this._httpWrapper.sendRequest("post", `${this._apiUrl}/v2/onboarding/verify-all`, {});
  }
  static {
    this.\u0275fac = function OnboardingService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OnboardingService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _OnboardingService, factory: _OnboardingService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OnboardingService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/layout/common/quick-chat/quick-chat.service.ts
var QuickChatService = class _QuickChatService {
  constructor(_httpClient) {
    this._httpClient = _httpClient;
    this._chat = new BehaviorSubject(null);
    this._chats = new BehaviorSubject(null);
    this._openPanel$ = new Subject();
    this.openPanel$ = this._openPanel$.asObservable();
  }
  get chat$() {
    return this._chat.asObservable();
  }
  get chats$() {
    return this._chats.asObservable();
  }
  /** Open the support drawer. */
  requestOpenPanel(options) {
    this._openPanel$.next(options ?? {});
  }
  getChats() {
    return of([]).pipe(tap((response) => {
      this._chats.next(response);
    }));
  }
  getChatById(id) {
    return of(null).pipe(map((chat) => {
      this._chat.next(chat);
      return chat;
    }), switchMap((chat) => {
      if (!chat) {
        return throwError(() => new Error("Could not found chat with id of " + id + "!"));
      }
      return of(chat);
    }));
  }
  static {
    this.\u0275fac = function QuickChatService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _QuickChatService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _QuickChatService, factory: _QuickChatService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QuickChatService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/core/notifications/app-notifications.models.ts
var APP_NOTIFICATION_PRODUCT_SCOPE = "smart_agent";

// src/app/core/notifications/app-notifications.service.ts
var DETAIL_CACHE_MS = 60 * 60 * 1e3;
var AppNotificationsService = class _AppNotificationsService {
  constructor() {
    this._http = inject(HttpClient);
    this._unreadCount = signal(0);
    this._hubInboxItems = signal([]);
    this._hubInboxLoading = signal(false);
    this._hubInboxError = signal(null);
    this._hubInboxPendingOutside = signal(false);
    this._hubRefreshInFlight = false;
    this._hubRefreshGeneration = 0;
    this._resolvedIds = /* @__PURE__ */ new Set();
    this._openBell$ = new Subject();
    this._inboxCache = null;
    this._bannerCache = null;
    this._modalCache = null;
    this._bannerGeneration = 0;
    this._activeBanners = signal(null);
    this._detailCache = /* @__PURE__ */ new Map();
    this.unreadCount = this._unreadCount.asReadonly();
    this.activeBanners = this._activeBanners.asReadonly();
    this.hubInboxItems = this._hubInboxItems.asReadonly();
    this.hubInboxLoading = this._hubInboxLoading.asReadonly();
    this.hubInboxError = this._hubInboxError.asReadonly();
    this.hubInboxPendingOutside = this._hubInboxPendingOutside.asReadonly();
    this.openBell$ = this._openBell$.asObservable();
  }
  /** Ask the header bell to open. */
  requestOpenBell() {
    this._openBell$.next();
  }
  get _baseUrl() {
    return `${environment.apiUrl}/v2/app-notifications`;
  }
  _inboxParams(params = {}) {
    return __spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues({
      productScope: params.productScope ?? APP_NOTIFICATION_PRODUCT_SCOPE
    }, params.page != null ? { page: params.page } : {}), params.perPage != null ? { perPage: params.perPage } : {}), params.unreadOnly != null ? { unreadOnly: params.unreadOnly } : {}), params.includeUnreadCount != null ? { includeUnreadCount: params.includeUnreadCount } : {}), params.surface ? { surface: params.surface } : {}), params.revision ? { revision: params.revision } : {});
  }
  _normalizeInboxList(body) {
    const response = body;
    if (Array.isArray(response?.data)) {
      return response;
    }
    const nested = response?.data;
    if (nested && Array.isArray(nested.data)) {
      return {
        data: nested.data,
        pagination: nested.pagination,
        meta: nested.meta ?? response.meta
      };
    }
    return {
      data: [],
      pagination: { page: 1, perPage: 50, total: 0, pages: 0 }
    };
  }
  syncInbox(productScope = APP_NOTIFICATION_PRODUCT_SCOPE) {
    return this._http.post(`${this._baseUrl}/inbox/sync`, null, {
      params: { productScope }
    }).pipe(tap((response) => {
      this._unreadCount.set(response.data?.unreadCount ?? 0);
    }), catchError(() => {
      this._unreadCount.set(0);
      return of({ data: { synced: 0, unreadCount: 0 } });
    }));
  }
  getInbox(params = {}) {
    return this._http.get(`${this._baseUrl}/inbox`, {
      params: this._inboxParams(__spreadProps(__spreadValues({}, params), {
        includeUnreadCount: params.includeUnreadCount ?? "1"
      }))
    }).pipe(map((response) => this._normalizeInboxList(response)), tap((response) => {
      if (response.meta?.unchanged)
        return;
      if (response.meta?.unreadCount != null) {
        this._unreadCount.set(response.meta.unreadCount);
      }
    }), catchError((error) => throwError(() => error)));
  }
  getUnreadCount(productScope = APP_NOTIFICATION_PRODUCT_SCOPE, surface) {
    const params = { productScope };
    if (surface)
      params["surface"] = surface;
    return this._http.get(`${this._baseUrl}/inbox/unread-count`, {
      params
    }).pipe(tap((response) => {
      this._unreadCount.set(response.data?.unreadCount ?? 0);
    }), catchError(() => of({ data: { unreadCount: 0 } })));
  }
  getActiveBanners(productScope = APP_NOTIFICATION_PRODUCT_SCOPE, force = false) {
    if (!force && this._cacheStillValid(this._bannerCache)) {
      const payload = this._bannerCache.payload;
      this._activeBanners.set(payload.data || []);
      return of(payload);
    }
    const generation = ++this._bannerGeneration;
    const revision = !force ? this._bannerCache?.revision : void 0;
    return this._http.get(`${this._baseUrl}/inbox/active-banners`, {
      params: __spreadValues({
        productScope
      }, revision ? { revision } : {})
    }).pipe(map((response) => this._normalizeInboxList(response)), map((response) => this._storeBanners(generation, response)), catchError(() => {
      const fallback = this._bannerCache?.payload ?? this._emptyList();
      if (generation === this._bannerGeneration) {
        this._activeBanners.set(fallback.data || []);
      }
      return of(fallback);
    }));
  }
  getActiveModals(productScope = APP_NOTIFICATION_PRODUCT_SCOPE) {
    return this._cachedSurface(() => this._modalCache, (next) => {
      this._modalCache = next;
    }, `${this._baseUrl}/inbox/active-modals`, productScope);
  }
  show(notificationId, productScope = APP_NOTIFICATION_PRODUCT_SCOPE) {
    const cached = this._detailCache.get(notificationId);
    if (cached && Date.now() < cached.cacheUntil) {
      return of({ data: cached.item });
    }
    return this._http.get(`${this._baseUrl}/inbox/${notificationId}`, {
      params: { productScope }
    }).pipe(tap((response) => {
      if (!response?.data)
        return;
      this._detailCache.set(notificationId, {
        item: response.data,
        cacheUntil: Date.now() + DETAIL_CACHE_MS
      });
    }));
  }
  markSeen(notificationId, productScope = APP_NOTIFICATION_PRODUCT_SCOPE) {
    return this._http.put(`${this._baseUrl}/inbox/${notificationId}/seen`, null, { params: { productScope } });
  }
  markSeenBulk(notificationIds, productScope = APP_NOTIFICATION_PRODUCT_SCOPE) {
    return this._http.put(`${this._baseUrl}/inbox/seen`, { notificationIds }, { params: { productScope } });
  }
  acknowledge(notificationId, productScope = APP_NOTIFICATION_PRODUCT_SCOPE) {
    return this._http.put(`${this._baseUrl}/inbox/${notificationId}/acknowledge`, null, { params: { productScope } });
  }
  accept(notificationId, body, productScope = APP_NOTIFICATION_PRODUCT_SCOPE) {
    return this._http.put(`${this._baseUrl}/inbox/${notificationId}/accept`, body, { params: { productScope } });
  }
  dismiss(notificationId, productScope = APP_NOTIFICATION_PRODUCT_SCOPE) {
    return this._http.put(`${this._baseUrl}/inbox/${notificationId}/dismiss`, null, { params: { productScope } });
  }
  setUnreadCount(count) {
    this._unreadCount.set(count);
  }
  /**
   * Drop a notification from the hub immediately and keep later refreshes from restoring it.
   */
  forgetHubItem(notificationId) {
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
  noteSeenLocally(notificationId) {
    let clearedUnread = false;
    this._hubInboxItems.update((items) => items.map((item) => {
      if (item.notificationId !== notificationId || !item.receipt?.isUnread)
        return item;
      if (item.interactionMode === "acknowledge" || item.interactionMode === "accept")
        return item;
      clearedUnread = true;
      return __spreadProps(__spreadValues({}, item), {
        receipt: __spreadProps(__spreadValues({}, item.receipt), {
          isUnread: false,
          firstSeenAt: item.receipt.firstSeenAt || (/* @__PURE__ */ new Date()).toISOString()
        })
      });
    }));
    if (clearedUnread) {
      this._unreadCount.update((count) => Math.max(0, count - 1));
      this._markCachedSeen(notificationId);
    }
  }
  dismissAndForget(notificationId) {
    return this.dismiss(notificationId).pipe(tap(() => this.forgetHubItem(notificationId)), map(() => void 0));
  }
  acknowledgeAndForget(notificationId) {
    return this.acknowledge(notificationId).pipe(tap(() => this.forgetHubItem(notificationId)), map(() => void 0));
  }
  acceptAndForget(notificationId, body) {
    return this.accept(notificationId, body).pipe(tap(() => this.forgetHubItem(notificationId)), map(() => void 0));
  }
  /** Mark unread informational and seen-required hub rows as seen. */
  markVisibleAsSeen() {
    const ids = this._hubInboxItems().filter((item) => item.receipt?.isUnread && (item.interactionMode === "informational" || item.interactionMode === "seen_required")).map((item) => item.notificationId);
    if (!ids.length)
      return of(void 0);
    return this.markSeenBulk(ids).pipe(tap(() => {
      for (const id of ids)
        this.noteSeenLocally(id);
    }), map(() => void 0));
  }
  /** Clear hub list (e.g. logged out / no workspace JWT). */
  clearHubInbox() {
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
  refreshHubInbox(force = false) {
    if (this._hubRefreshInFlight && !force) {
      return of(void 0);
    }
    if (!force && this._cacheStillValid(this._inboxCache)) {
      this._applyInboxPayload(this._inboxCache.payload);
      return of(void 0);
    }
    return this._fetchHubInbox();
  }
  _fetchHubInbox() {
    const generation = ++this._hubRefreshGeneration;
    this._hubRefreshInFlight = true;
    this._hubInboxLoading.set(true);
    this._hubInboxError.set(null);
    this._hubInboxPendingOutside.set(false);
    const hubQuery = __spreadValues({
      page: 1,
      perPage: 50,
      includeUnreadCount: "1"
    }, this._inboxCache?.revision ? { revision: this._inboxCache.revision } : {});
    return this.getInbox(hubQuery).pipe(tap((inbox) => {
      if (generation !== this._hubRefreshGeneration)
        return;
      this._inboxCache = this._rememberList(this._inboxCache, inbox);
      this._applyInboxPayload(this._inboxCache.payload);
      if (!inbox.meta?.unchanged) {
        this.getActiveBanners(APP_NOTIFICATION_PRODUCT_SCOPE, true).subscribe({
          error: () => void 0
        });
      }
      this._logHubDebug("refreshHubInbox", {
        inboxCount: (this._inboxCache.payload.data || []).length,
        unchanged: Boolean(inbox.meta?.unchanged),
        revision: this._inboxCache.revision,
        metaUnread: this._inboxCache.payload.meta?.unreadCount,
        signalUnread: this._unreadCount()
      });
    }), catchError((err) => {
      if (generation === this._hubRefreshGeneration) {
        this._hubInboxError.set("appNotifications.inbox.errors.loadList");
        this._hubInboxPendingOutside.set(false);
        console.error("[Notifications] refreshHubInbox failed", err);
      }
      return of(void 0);
    }), finalize(() => {
      if (generation !== this._hubRefreshGeneration)
        return;
      this._hubInboxLoading.set(false);
      this._hubRefreshInFlight = false;
    }), map(() => void 0));
  }
  /** Warm inbox + unread badge after login (non-blocking). */
  bootstrapInbox() {
    return this.refreshHubInbox();
  }
  _cacheStillValid(cache) {
    return Boolean(cache && Date.now() < cache.cacheUntil);
  }
  _rememberList(current, response) {
    const cacheForMs = response.meta?.cacheForMs ?? 15 * 60 * 1e3;
    if (response.meta?.unchanged && current) {
      return {
        revision: response.meta.revision || current.revision,
        cacheUntil: Date.now() + cacheForMs,
        payload: current.payload
      };
    }
    return {
      revision: response.meta?.revision ?? current?.revision ?? null,
      cacheUntil: Date.now() + cacheForMs,
      payload: response
    };
  }
  _cachedSurface(readCache, writeCache, url, productScope) {
    const current = readCache();
    if (this._cacheStillValid(current)) {
      return of(current.payload);
    }
    return this._http.get(url, {
      params: __spreadValues({
        productScope
      }, current?.revision ? { revision: current.revision } : {})
    }).pipe(map((response) => this._normalizeInboxList(response)), map((response) => {
      const next = this._rememberList(readCache(), response);
      writeCache(next);
      return next.payload;
    }), catchError(() => of(readCache()?.payload ?? this._emptyList())));
  }
  _emptyList(perPage = 10) {
    return {
      data: [],
      pagination: { page: 1, perPage, total: 0, pages: 0 }
    };
  }
  _applyInboxPayload(inbox) {
    const merged = inbox.data || [];
    const hiddenUnread = merged.filter((item) => this._resolvedIds.has(item.notificationId) && item.receipt?.isUnread).length;
    const items = this._sortHubItems(merged.filter((item) => !this._resolvedIds.has(item.notificationId)));
    this._hubInboxItems.set(items);
    if (inbox.meta?.unreadCount != null) {
      this._unreadCount.set(Math.max(0, inbox.meta.unreadCount - hiddenUnread));
    }
    this._hubInboxPendingOutside.set(items.length === 0 && this._unreadCount() > 0);
  }
  _dropCachedItem(notificationId) {
    this._detailCache.delete(notificationId);
    for (const cache of [this._inboxCache, this._bannerCache, this._modalCache]) {
      this._removeItemFromCache(cache, notificationId);
    }
    if (this._bannerCache) {
      this._activeBanners.set(this._bannerCache.payload.data || []);
    }
  }
  _storeBanners(generation, response) {
    const newerRequestWon = generation !== this._bannerGeneration && this._activeBanners() !== null;
    if (newerRequestWon) {
      return this._bannerCache?.payload ?? response;
    }
    this._bannerCache = this._rememberList(this._bannerCache, response);
    const payload = this._bannerCache.payload;
    this._activeBanners.set(payload.data || []);
    return payload;
  }
  _removeItemFromCache(cache, notificationId) {
    if (!cache?.payload.data)
      return;
    const removed = cache.payload.data.find((item) => item.notificationId === notificationId);
    if (!removed)
      return;
    const unreadCount = cache.payload.meta?.unreadCount;
    cache.payload = __spreadProps(__spreadValues({}, cache.payload), {
      data: cache.payload.data.filter((item) => item.notificationId !== notificationId),
      meta: cache.payload.meta ? __spreadValues(__spreadValues({}, cache.payload.meta), unreadCount != null && removed.receipt?.isUnread ? { unreadCount: Math.max(0, unreadCount - 1) } : {}) : cache.payload.meta
    });
  }
  _markCachedSeen(notificationId) {
    const seenAt = (/* @__PURE__ */ new Date()).toISOString();
    for (const cache of [this._inboxCache, this._bannerCache, this._modalCache]) {
      if (!cache?.payload.data)
        continue;
      const matched = cache.payload.data.some((item) => item.notificationId === notificationId && item.receipt?.isUnread);
      if (!matched)
        continue;
      const unreadCount = cache.payload.meta?.unreadCount;
      cache.payload = __spreadProps(__spreadValues({}, cache.payload), {
        data: cache.payload.data.map((item) => item.notificationId === notificationId ? __spreadProps(__spreadValues({}, item), {
          receipt: __spreadProps(__spreadValues({}, item.receipt), {
            isUnread: false,
            firstSeenAt: item.receipt?.firstSeenAt || seenAt
          })
        }) : item),
        meta: cache.payload.meta && unreadCount != null ? __spreadProps(__spreadValues({}, cache.payload.meta), {
          unreadCount: Math.max(0, unreadCount - 1)
        }) : cache.payload.meta
      });
    }
  }
  _sortHubItems(items) {
    return [...items].sort((a, b) => {
      const unreadDelta = Number(b.receipt?.isUnread) - Number(a.receipt?.isUnread);
      if (unreadDelta !== 0)
        return unreadDelta;
      const aTime = new Date(a.publishedAt || 0).getTime();
      const bTime = new Date(b.publishedAt || 0).getTime();
      return bTime - aTime;
    });
  }
  _logHubDebug(event, payload) {
    if (typeof window === "undefined" || !window.__DEBUG_NOTIFICATIONS__) {
      return;
    }
    console.log(`[Notifications] ${event}`, __spreadProps(__spreadValues({}, payload), {
      hubItems: this._hubInboxItems().length,
      hubLoading: this._hubInboxLoading(),
      hubError: this._hubInboxError()
    }));
  }
  static {
    this.\u0275fac = function AppNotificationsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AppNotificationsService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AppNotificationsService, factory: _AppNotificationsService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppNotificationsService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/core/notifications/notification-cta.util.ts
var isSelfReferentialSmartAgentCta = (url, currentOrigin = typeof window !== "undefined" ? window.location.origin : "") => {
  const raw = url?.trim();
  if (!raw)
    return false;
  try {
    const resolved = new URL(raw, currentOrigin || "https://ai.verifik.co");
    if (currentOrigin && resolved.origin !== currentOrigin) {
      return false;
    }
    const path = resolved.pathname.replace(/\/+$/, "") || "/";
    if (path !== "/" && path !== "/home") {
      return false;
    }
    const keys = [...resolved.searchParams.keys()];
    if (keys.length === 0)
      return true;
    return keys.every((key) => key === "openNotifications");
  } catch {
    return false;
  }
};
var shouldShowNotificationCta = (cta, currentOrigin = typeof window !== "undefined" ? window.location.origin : "") => {
  const url = cta?.url?.trim();
  if (!url)
    return false;
  return !isSelfReferentialSmartAgentCta(url, currentOrigin);
};
var resolveInAppCtaPath = (url, currentOrigin = typeof window !== "undefined" ? window.location.origin : "") => {
  const raw = url.trim();
  if (!raw)
    return null;
  if (raw.startsWith("/")) {
    return raw;
  }
  try {
    const resolved = new URL(raw);
    if (!currentOrigin || resolved.origin !== currentOrigin) {
      return null;
    }
    return `${resolved.pathname}${resolved.search}${resolved.hash}`;
  } catch {
    return null;
  }
};
var openNotificationCta = (cta, deps, currentOrigin = typeof window !== "undefined" ? window.location.origin : "") => {
  const url = cta?.url?.trim();
  if (!url)
    return;
  if (isSelfReferentialSmartAgentCta(url, currentOrigin)) {
    deps.openBell?.();
    return;
  }
  const inAppPath = resolveInAppCtaPath(url, currentOrigin);
  const openInNewTab = cta?.openInNewTab !== false;
  if (inAppPath && !openInNewTab) {
    void deps.router.navigateByUrl(inAppPath);
    return;
  }
  if (inAppPath?.includes("openNotifications=1")) {
    deps.openBell?.();
    return;
  }
  const targetUrl = inAppPath ? `${currentOrigin}${inAppPath}` : url;
  window.open(targetUrl, openInNewTab ? "_blank" : "_self", "noopener");
};

export {
  OnboardingService,
  QuickChatService,
  AppNotificationsService,
  isSelfReferentialSmartAgentCta,
  shouldShowNotificationCta,
  resolveInAppCtaPath,
  openNotificationCta
};
//# sourceMappingURL=chunk-I7PXQXWD.js.map
