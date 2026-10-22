import {
  environment
} from "./chunk-3V5B4ZWC.js";
import {
  HttpClient,
  Injectable,
  firstValueFrom,
  setClassMetadata,
  signal,
  tap,
  timeout,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-YWP2Y7QK.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-F5M2C4EZ.js";

// src/app/modules/smart-fleet/smart-fleet.service.ts
var DEFAULT_PER_PAGE = 20;
var FLEET_SAVED_REPORTS_LIMIT = 20;
function savedReportsOf(asset) {
  const raw = asset?.metadata?.fleetReports;
  if (!Array.isArray(raw))
    return [];
  return raw.filter((item) => Boolean(item) && typeof item === "object" && typeof item.reportId === "string" && typeof item.rowIndex === "number");
}
var EMPTY_PAGINATION = {
  page: 1,
  perPage: DEFAULT_PER_PAGE,
  total: 0,
  pages: 1
};
var readPagination = (response, requestedPage, requestedPerPage) => {
  const total = response.total ?? response.data?.length ?? 0;
  const perPage = response.limit ?? requestedPerPage;
  return {
    page: response.page ?? requestedPage,
    perPage,
    total,
    pages: response.pages ?? Math.max(1, Math.ceil(total / perPage))
  };
};
var FLEET_GROUP_COLOR_DEFAULT = "#6366f1";
var FLEET_GROUP_COLORS = [
  "#6366f1",
  "#0ea5e9",
  "#10b981",
  "#f59e0b",
  "#ef4444",
  "#a855f7",
  "#ec4899",
  "#64748b"
];
var FLEET_GROUP_ICONS = [
  "car",
  "pickup",
  "minivan",
  "van",
  "bus",
  "truck",
  "tractocamion",
  "tractomula",
  "tractor",
  "motorcycle",
  "motocarro"
];
var FLEET_GROUP_ICON_DEFAULT = "car";
function normalizeFleetGroup(entry) {
  if (!entry || typeof entry === "string") {
    return {
      name: typeof entry === "string" ? entry : "",
      color: FLEET_GROUP_COLOR_DEFAULT,
      icon: FLEET_GROUP_ICON_DEFAULT
    };
  }
  const icon = FLEET_GROUP_ICONS.find((item) => item === entry.icon) || FLEET_GROUP_ICON_DEFAULT;
  return {
    name: entry.name || "",
    color: entry.color || FLEET_GROUP_COLOR_DEFAULT,
    icon
  };
}
var assetFilterParams = (filters) => __spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues({}, filters.group ? { group: filters.group } : {}), filters.isActive !== void 0 ? { isActive: filters.isActive } : {}), filters.identifier ? { identifier: filters.identifier } : {}), filters.coverage ? { coverage: filters.coverage } : {}), filters.hasAlerts ? { hasAlerts: true } : {}), filters.search ? { search: filters.search } : {});
function parseFleetPhones(value) {
  return value.split(/[,;\s]+/).map((part) => {
    const compact = part.replace(/[^\d+]/g, "");
    if (!compact)
      return "";
    const withPlus = compact.startsWith("+") ? compact : `+${compact}`;
    return /^\+[1-9]\d{7,14}$/.test(withPlus) ? withPlus : "";
  }).filter((phone, index, list) => phone && list.indexOf(phone) === index);
}
function fleetAssetSupportsCheck(check, asset) {
  const value = (field) => {
    const raw = asset[field];
    return typeof raw === "string" ? raw.trim() : "";
  };
  const plateFields = check.requiresByPlate?.length ? check.requiresByPlate : check.endpoints?.byPlate?.requires || [];
  const vinFields = check.requiresByVin?.length ? check.requiresByVin : check.endpoints?.byVin?.requires || [];
  if (plateFields.length || vinFields.length) {
    const plateOk = plateFields.length > 0 && plateFields.every((field) => value(field));
    const vinOk = vinFields.length > 0 && vinFields.every((field) => value(field));
    return plateOk || vinOk;
  }
  const requires = check.requires || [];
  if (!requires.length)
    return true;
  return requires.every((field) => value(field));
}
function compactFleetAssetPayload(asset) {
  const payload = {};
  for (const [key, value] of Object.entries(asset)) {
    if (typeof value === "string") {
      const trimmed = value.trim();
      if (!trimmed)
        continue;
      payload[key] = trimmed;
      continue;
    }
    if (value === null && key === "group") {
      payload[key] = null;
      continue;
    }
    if (value === void 0 || value === null)
      continue;
    payload[key] = value;
  }
  return payload;
}
var SmartFleetService = class _SmartFleetService {
  constructor(_httpClient) {
    this._httpClient = _httpClient;
    this.assets = signal([]);
    this.assetsPage = signal(EMPTY_PAGINATION);
    this.isLoadingAssets = signal(false);
    this.watchRules = signal([]);
    this.isLoadingRules = signal(false);
    this.alerts = signal([]);
    this.alertsPage = signal(EMPTY_PAGINATION);
    this.isLoadingAlerts = signal(false);
    this.dashboard = signal(null);
    this.isLoadingDashboard = signal(false);
    this.onFreePlan = signal(null);
    this._planStatusRequested = false;
  }
  // ── Subscription ─────────────────────────────────────────────
  getPlanOverview() {
    return this._httpClient.get(`${environment.apiUrl}/v2/fleet/plan`).pipe(tap((response) => this.onFreePlan.set(!response.data?.plan)));
  }
  /** Loads the plan status once per session for the free-plan notice. */
  ensurePlanStatus() {
    if (this._planStatusRequested)
      return;
    this._planStatusRequested = true;
    this.getPlanOverview().subscribe({ error: () => this._planStatusRequested = false });
  }
  /** Stripe Checkout for the first subscription; redirect to `data.url`. */
  startPlanCheckout(tier, assetCount) {
    return this._httpClient.post(`${environment.apiUrl}/v2/fleet/plan/checkout`, { tier, assetCount, source: "smart_agent" });
  }
  /** Change slots, and the tier too when `tier` differs from the current one. */
  updatePlanQuantity(tier, assetCount) {
    return this._httpClient.put(`${environment.apiUrl}/v2/fleet/plan/quantity`, { tier, assetCount });
  }
  cancelPlan() {
    return this._httpClient.post(`${environment.apiUrl}/v2/fleet/plan/cancel`, {});
  }
  resumePlan() {
    return this._httpClient.post(`${environment.apiUrl}/v2/fleet/plan/resume`, {});
  }
  // ── Dashboard ────────────────────────────────────────────────
  getDashboard(options = {}) {
    this.isLoadingDashboard.set(true);
    return this._httpClient.get(`${environment.apiUrl}/v2/fleet/dashboard`, {
      params: __spreadValues(__spreadValues({}, options.horizonDays ? { horizonDays: options.horizonDays } : {}), options.spendDays ? { spendDays: options.spendDays } : {})
    }).pipe(tap({
      next: (response) => {
        this.dashboard.set(response.data);
        this.isLoadingDashboard.set(false);
      },
      error: () => this.isLoadingDashboard.set(false)
    }));
  }
  // ── Assets ───────────────────────────────────────────────────
  /** Read a page without replacing the list the table is showing. */
  findAssets(options = {}) {
    const page = options.page ?? 1;
    const perPage = options.perPage ?? DEFAULT_PER_PAGE;
    return this._httpClient.get(`${environment.apiUrl}/v2/fleet-assets`, {
      params: __spreadValues({ page, perPage }, assetFilterParams(options))
    });
  }
  /** Every page of the fleet, without touching the table's list. */
  findAllAssets() {
    return __async(this, arguments, function* (options = {}, maxPages = 20) {
      const collected = [];
      let page = 1;
      let pages = 1;
      do {
        const response = yield firstValueFrom(this.findAssets(__spreadProps(__spreadValues({}, options), { page, perPage: 100 })));
        collected.push(...response.data ?? []);
        pages = response.pages ?? 1;
        page += 1;
      } while (page <= pages && page <= maxPages);
      return collected;
    });
  }
  /** Keep the newest reports on the vehicle so the download survives a reload. */
  saveAssetReport(asset, report) {
    const current = savedReportsOf(asset).filter((item) => !(item.reportId === report.reportId && item.rowIndex === report.rowIndex));
    const fleetReports = [report, ...current].slice(0, FLEET_SAVED_REPORTS_LIMIT);
    return this._httpClient.put(`${environment.apiUrl}/v2/fleet-assets/${asset._id}`, {
      metadata: __spreadProps(__spreadValues({}, asset.metadata ?? {}), { fleetReports })
    });
  }
  /** Drop saved PDF pointers so the vehicle can be reported again (e.g. after a template change). */
  clearAssetReports(asset) {
    return this._httpClient.put(`${environment.apiUrl}/v2/fleet-assets/${asset._id}`, {
      metadata: __spreadProps(__spreadValues({}, asset.metadata ?? {}), { fleetReports: [] })
    });
  }
  getAssets(options = {}) {
    const page = options.page ?? 1;
    const perPage = options.perPage ?? DEFAULT_PER_PAGE;
    this.isLoadingAssets.set(true);
    return this._httpClient.get(`${environment.apiUrl}/v2/fleet-assets`, {
      params: __spreadValues({ page, perPage }, assetFilterParams(options))
    }).pipe(tap({
      next: (response) => {
        this.assets.set(response.data ?? []);
        this.assetsPage.set(readPagination(response, page, perPage));
        this.isLoadingAssets.set(false);
      },
      error: () => this.isLoadingAssets.set(false)
    }));
  }
  /** Named groups saved for this client, including ones with no vehicles yet. */
  listGroups() {
    return this._httpClient.get(`${environment.apiUrl}/v2/fleet-groups`);
  }
  createGroup(name, color = FLEET_GROUP_COLOR_DEFAULT, icon = FLEET_GROUP_ICON_DEFAULT) {
    return this._httpClient.post(`${environment.apiUrl}/v2/fleet-groups`, {
      name,
      color,
      icon
    });
  }
  updateGroup(name, changes) {
    return this._httpClient.put(`${environment.apiUrl}/v2/fleet-groups`, __spreadValues({
      name
    }, changes));
  }
  deleteGroup(name) {
    return this._httpClient.delete(`${environment.apiUrl}/v2/fleet-groups`, { params: { name } });
  }
  /** Full list for the groups board. Does not replace the paginated table. */
  listAssets(perPage = 200) {
    return this._httpClient.get(`${environment.apiUrl}/v2/fleet-assets`, { params: { page: 1, perPage } });
  }
  getAsset(id) {
    return this._httpClient.get(`${environment.apiUrl}/v2/fleet-assets/${id}`);
  }
  /** Live countries from the check catalog (ISO alpha-2). */
  getCountries() {
    return this._httpClient.get(`${environment.apiUrl}/v2/fleet-assets/countries`);
  }
  createAsset(asset) {
    return this._httpClient.post(`${environment.apiUrl}/v2/fleet-assets`, compactFleetAssetPayload(asset));
  }
  updateAsset(id, asset) {
    return this._httpClient.put(`${environment.apiUrl}/v2/fleet-assets/${id}`, compactFleetAssetPayload(asset));
  }
  deleteAsset(id) {
    return this._httpClient.delete(`${environment.apiUrl}/v2/fleet-assets/${id}`);
  }
  /** Bulk import parsed server-side, so the browser never has to understand XLSX. */
  importAssets(payload) {
    return this._httpClient.post(`${environment.apiUrl}/v2/fleet-assets/import`, payload);
  }
  /**
   * Run every applicable check immediately (enqueue + process in the same request).
   * Give scrapers enough time; the server budgets ~180s.
   */
  checkAssetNow(id) {
    return this._httpClient.post(`${environment.apiUrl}/v2/fleet-assets/${id}/check-now`, {}).pipe(timeout(2e5));
  }
  /** Rules that apply to an asset (asset-scoped + group + fleet-wide). */
  getApplicableRules(assetId) {
    return this._httpClient.get(`${environment.apiUrl}/v2/fleet-assets/${assetId}/applicable-rules`);
  }
  getAssetTimeline(id, options = {}) {
    return this._httpClient.get(`${environment.apiUrl}/v2/fleet-assets/${id}/timeline`, {
      params: __spreadValues(__spreadValues(__spreadValues({}, options.checkType ? { checkType: options.checkType } : {}), options.limit ? { limit: options.limit } : {}), options.includeRaw ? { includeRaw: true } : {})
    });
  }
  // ── Watch rules ──────────────────────────────────────────────
  getWatchRules(options = {}) {
    this.isLoadingRules.set(true);
    return this._httpClient.get(`${environment.apiUrl}/v2/fleet-watch-rules`, {
      params: __spreadValues(__spreadValues(__spreadValues({
        perPage: 100
      }, options.asset ? { asset: options.asset } : {}), options.group ? { group: options.group } : {}), options.isActive !== void 0 ? { isActive: options.isActive } : {})
    }).pipe(tap({
      next: (response) => {
        this.watchRules.set(response.data ?? []);
        this.isLoadingRules.set(false);
      },
      error: () => this.isLoadingRules.set(false)
    }));
  }
  /** Asset-scoped fetch that does not replace the rules list on the rules page. */
  listWatchRules(options = {}) {
    return this._httpClient.get(`${environment.apiUrl}/v2/fleet-watch-rules`, {
      params: __spreadValues(__spreadValues({
        perPage: 100
      }, options.asset ? { asset: options.asset } : {}), options.group ? { group: options.group } : {})
    });
  }
  createWatchRule(rule) {
    return this._httpClient.post(`${environment.apiUrl}/v2/fleet-watch-rules`, rule);
  }
  updateWatchRule(id, rule) {
    return this._httpClient.put(`${environment.apiUrl}/v2/fleet-watch-rules/${id}`, rule);
  }
  deleteWatchRule(id) {
    return this._httpClient.delete(`${environment.apiUrl}/v2/fleet-watch-rules/${id}`);
  }
  /** Cron-style next runs + soonest vehicles for a watch rule. */
  getWatchRuleSchedule(id) {
    return this._httpClient.get(`${environment.apiUrl}/v2/fleet-watch-rules/${id}/schedule`);
  }
  /**
   * Monthly credit burn a rule would add, before it is saved. Shown at rule creation
   * because per-vehicle daily checks add up faster than people expect.
   */
  estimateWatchRule(rule) {
    return this._httpClient.post(`${environment.apiUrl}/v2/fleet-watch-rules/estimate`, rule);
  }
  getAvailableChecks(country = "co") {
    return this._httpClient.get(`${environment.apiUrl}/v2/fleet-watch-rules/available-checks`, { params: { country } });
  }
  // ── Alerts ───────────────────────────────────────────────────
  getAlerts(options = {}) {
    const page = options.page ?? 1;
    const perPage = options.perPage ?? DEFAULT_PER_PAGE;
    this.isLoadingAlerts.set(true);
    return this._httpClient.get(`${environment.apiUrl}/v2/fleet-alerts`, {
      params: __spreadValues(__spreadValues(__spreadValues(__spreadValues({
        page,
        perPage,
        populates: "asset"
      }, options.asset ? { asset: options.asset } : {}), options.type ? { type: options.type } : {}), options.severity ? { severity: options.severity } : {}), options.status ? { status: options.status } : {})
    }).pipe(tap({
      next: (response) => {
        this.alerts.set(response.data ?? []);
        this.alertsPage.set(readPagination(response, page, perPage));
        this.isLoadingAlerts.set(false);
      },
      error: () => this.isLoadingAlerts.set(false)
    }));
  }
  acknowledgeAlert(id) {
    return this._httpClient.post(`${environment.apiUrl}/v2/fleet-alerts/${id}/acknowledge`, {});
  }
  acknowledgeAlerts(ids) {
    return this._httpClient.post(`${environment.apiUrl}/v2/fleet-alerts/acknowledge`, { ids });
  }
  /** Server-rendered file, so the export matches what the backend considers an alert. */
  exportAlerts(options = {}) {
    return this._httpClient.get(`${environment.apiUrl}/v2/fleet-alerts/export`, {
      params: __spreadValues(__spreadValues(__spreadValues(__spreadValues({
        format: options.format ?? "csv"
      }, options.type ? { type: options.type } : {}), options.severity ? { severity: options.severity } : {}), options.from ? { from: options.from } : {}), options.to ? { to: options.to } : {}),
      responseType: "blob"
    });
  }
  static {
    this.\u0275fac = function SmartFleetService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SmartFleetService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SmartFleetService, factory: _SmartFleetService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SmartFleetService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  savedReportsOf,
  FLEET_GROUP_COLOR_DEFAULT,
  FLEET_GROUP_COLORS,
  FLEET_GROUP_ICONS,
  FLEET_GROUP_ICON_DEFAULT,
  normalizeFleetGroup,
  parseFleetPhones,
  fleetAssetSupportsCheck,
  SmartFleetService
};
//# sourceMappingURL=chunk-CRZKQ4LX.js.map
