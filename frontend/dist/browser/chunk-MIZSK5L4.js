import {
  HttpWrapperService
} from "./chunk-BCBZJBUY.js";
import {
  environment
} from "./chunk-PMCYMBOC.js";
import {
  BehaviorSubject,
  HttpClient,
  Injectable,
  Subject,
  catchError,
  finalize,
  forkJoin,
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
} from "./chunk-PNPEHISK.js";
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
  /** Open the messages hub (notifications and/or support tab). */
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
var AppNotificationsService = class _AppNotificationsService {
  constructor() {
    this._http = inject(HttpClient);
    this._unreadCount = signal(0);
    this._hubInboxItems = signal([]);
    this._hubInboxLoading = signal(false);
    this._hubInboxError = signal(null);
    this._hubInboxPendingOutside = signal(false);
    this._hubRefreshInFlight = false;
    this.unreadCount = this._unreadCount.asReadonly();
    this.hubInboxItems = this._hubInboxItems.asReadonly();
    this.hubInboxLoading = this._hubInboxLoading.asReadonly();
    this.hubInboxError = this._hubInboxError.asReadonly();
    this.hubInboxPendingOutside = this._hubInboxPendingOutside.asReadonly();
  }
  get _baseUrl() {
    return `${environment.apiUrl}/v2/app-notifications`;
  }
  _inboxParams(params = {}) {
    return __spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues({
      productScope: params.productScope ?? APP_NOTIFICATION_PRODUCT_SCOPE
    }, params.page != null ? { page: params.page } : {}), params.perPage != null ? { perPage: params.perPage } : {}), params.unreadOnly != null ? { unreadOnly: params.unreadOnly } : {}), params.includeUnreadCount != null ? { includeUnreadCount: params.includeUnreadCount } : {}), params.surface ? { surface: params.surface } : {});
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
  getActiveBanners(productScope = APP_NOTIFICATION_PRODUCT_SCOPE) {
    return this._http.get(`${this._baseUrl}/inbox/active-banners`, {
      params: { productScope }
    }).pipe(map((response) => this._normalizeInboxList(response)), catchError(() => of({
      data: [],
      pagination: { page: 1, perPage: 10, total: 0, pages: 0 }
    })));
  }
  getActiveModals(productScope = APP_NOTIFICATION_PRODUCT_SCOPE) {
    return this._http.get(`${this._baseUrl}/inbox/active-modals`, {
      params: { productScope }
    }).pipe(map((response) => this._normalizeInboxList(response)), catchError(() => of({
      data: [],
      pagination: { page: 1, perPage: 10, total: 0, pages: 0 }
    })));
  }
  show(notificationId, productScope = APP_NOTIFICATION_PRODUCT_SCOPE) {
    return this._http.get(`${this._baseUrl}/inbox/${notificationId}`, { params: { productScope } });
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
  /** Clear hub list (e.g. logged out / no workspace JWT). */
  clearHubInbox() {
    this._hubInboxItems.set([]);
    this._hubInboxError.set(null);
    this._hubInboxPendingOutside.set(false);
    this._hubInboxLoading.set(false);
    this._hubRefreshInFlight = false;
  }
  /**
   * Load union of inbox + active banners + active modals into hub signals.
   * Idempotent while a refresh is already in flight unless `force` is true.
   */
  refreshHubInbox(force = false) {
    if (this._hubRefreshInFlight && !force) {
      return of(void 0);
    }
    this._hubRefreshInFlight = true;
    this._hubInboxLoading.set(true);
    this._hubInboxError.set(null);
    this._hubInboxPendingOutside.set(false);
    const emptyList = {
      data: [],
      pagination: { page: 1, perPage: 10, total: 0, pages: 0 }
    };
    const hubQuery = {
      page: 1,
      perPage: 50,
      includeUnreadCount: "1"
    };
    return this.syncInbox().pipe(switchMap(() => forkJoin({
      inbox: this.getInbox(hubQuery),
      banners: this.getActiveBanners().pipe(catchError(() => of(emptyList))),
      modals: this.getActiveModals().pipe(catchError(() => of(emptyList)))
    })), tap(({ inbox, banners, modals }) => {
      const byId = /* @__PURE__ */ new Map();
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
      const items = this._sortHubItems(Array.from(byId.values()));
      const listUnread = inbox.meta?.unreadCount ?? this._unreadCount();
      this._hubInboxItems.set(items);
      if (inbox.meta?.unreadCount != null) {
        this._unreadCount.set(listUnread);
      }
      const effectiveUnread = listUnread || this._unreadCount();
      this._hubInboxPendingOutside.set(items.length === 0 && effectiveUnread > 0);
      this._logHubDebug("refreshHubInbox", {
        inboxCount: (inbox.data || []).length,
        bannerCount: (banners.data || []).length,
        modalCount: (modals.data || []).length,
        finalListCount: items.length,
        metaUnread: inbox.meta?.unreadCount,
        signalUnread: this._unreadCount()
      });
    }), catchError((err) => {
      this._hubInboxError.set("appNotifications.inbox.errors.loadList");
      this._hubInboxPendingOutside.set(false);
      console.error("[Notifications] refreshHubInbox failed", err);
      return of(void 0);
    }), finalize(() => {
      this._hubInboxLoading.set(false);
      this._hubRefreshInFlight = false;
    }), map(() => void 0));
  }
  /** Warm inbox + unread badge after login (non-blocking). */
  bootstrapInbox() {
    return this.syncInbox();
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
    deps.quickChat?.requestOpenPanel({ tab: "notifications" });
    return;
  }
  const inAppPath = resolveInAppCtaPath(url, currentOrigin);
  const openInNewTab = cta?.openInNewTab !== false;
  if (inAppPath && !openInNewTab) {
    void deps.router.navigateByUrl(inAppPath);
    return;
  }
  if (inAppPath?.includes("openNotifications=1")) {
    deps.quickChat?.requestOpenPanel({ tab: "notifications" });
    return;
  }
  const targetUrl = inAppPath ? `${currentOrigin}${inAppPath}` : url;
  window.open(targetUrl, openInNewTab ? "_blank" : "_self", "noopener");
};

export {
  OnboardingService,
  QuickChatService,
  AppNotificationsService,
  shouldShowNotificationCta,
  openNotificationCta
};
//# sourceMappingURL=chunk-MIZSK5L4.js.map
