import {
  UserService
} from "./chunk-L5NPACLK.js";
import {
  environment
} from "./chunk-3V5B4ZWC.js";
import {
  HttpClient,
  Injectable,
  catchError,
  finalize,
  inject,
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
  __objRest,
  __restKey,
  __spreadProps,
  __spreadValues
} from "./chunk-F5M2C4EZ.js";

// src/app/modules/add-credits/services/credits.service.ts
var CreditsService = class _CreditsService {
  authHeaders() {
    const token = localStorage.getItem("accessToken");
    return token ? { Authorization: `Bearer ${token}` } : {};
  }
  cardListParams(gatewayProvider = "stripe") {
    return {
      "populates[]": "client",
      where_gatewayProvider: gatewayProvider
    };
  }
  normalizeCardList(data) {
    if (Array.isArray(data)) {
      return data;
    }
    if (data && typeof data === "object" && Array.isArray(data.docs)) {
      return data.docs;
    }
    return [];
  }
  fetchCards(gatewayProvider = "stripe") {
    return this._httpClient.get(`${this.apiUrl}/v2/credit-cards`, {
      headers: this.authHeaders(),
      params: this.cardListParams(gatewayProvider)
    });
  }
  constructor(_httpClient) {
    this._httpClient = _httpClient;
    this.cards = signal([]);
    this.balance = signal(null);
    this.autoRechargeConfig = signal(null);
    this.loading = signal(false);
    this.error = signal(null);
    this.apiUrl = environment.apiUrl;
    this._userService = inject(UserService);
    this._userService.user$.subscribe((user) => {
      if (user) {
        this.updateBalanceFromUser(user);
      }
    });
  }
  updateBalanceFromUser(user) {
    try {
      const credits = Number(user.credits) || 0;
      const totalCredits = Math.round(credits * 100) / 100;
      const balance = {
        credits: Math.round(credits * 100) / 100,
        totalCredits
      };
      this.balance.set(balance);
    } catch (err) {
      console.error("Error updating balance from user:", err);
    }
  }
  /**
   * Get all payment cards
   */
  getCards(gatewayProvider = "stripe") {
    this.loading.set(true);
    this.error.set(null);
    return this.fetchCards(gatewayProvider).pipe(tap((response) => {
      this.cards.set(this.normalizeCardList(response.data));
    }), catchError((err) => {
      console.error("Error fetching cards:", err);
      this.error.set("Failed to load payment cards");
      return throwError(() => err);
    }), finalize(() => {
      this.loading.set(false);
    }));
  }
  /**
   * Refresh user data from localStorage (balance is stored in user object)
   * Call this after credit purchase to update the balance
   */
  refreshBalance() {
    this.getBalance().subscribe();
  }
  /**
   * Get current credit balance from user object
   */
  getBalance() {
    this.loading.set(true);
    this.error.set(null);
    try {
      const userStr = localStorage.getItem("verifik_account") || localStorage.getItem("user");
      const user = userStr ? JSON.parse(userStr) : null;
      if (user) {
        const credits = Number(user.credits) || 0;
        const totalCredits = Math.round(credits * 100) / 100;
        const balance = {
          credits: Math.round(credits * 100) / 100,
          totalCredits
        };
        this.balance.set(balance);
      } else {
        this.balance.set({
          credits: 0,
          totalCredits: 0
        });
      }
    } catch (err) {
      console.error("Error parsing user data:", err);
      this.error.set("Failed to load credit balance");
      this.balance.set({
        credits: 0,
        totalCredits: 0
      });
    } finally {
      this.loading.set(false);
    }
    return of({ data: this.balance() });
  }
  /**
   * Set default payment card
   */
  setDefaultCard(cardId, gatewayProvider = "stripe") {
    this.error.set(null);
    this.cards.update((cards) => cards.map((card) => __spreadProps(__spreadValues({}, card), {
      isDefault: card._id === cardId
    })));
    return this._httpClient.put(`${this.apiUrl}/v2/credit-cards/${cardId}/default`, {}, { headers: this.authHeaders() }).pipe(switchMap((response) => {
      const cards = this.normalizeCardList(response.data);
      if (cards.length > 0) {
        this.cards.set(cards);
        return of(response);
      }
      return this.fetchCards(gatewayProvider).pipe(tap((listResponse) => {
        this.cards.set(this.normalizeCardList(listResponse.data));
      }));
    }), catchError((err) => {
      console.error("Error setting default card:", err);
      this.error.set("Failed to set default card");
      return this.fetchCards(gatewayProvider).pipe(tap((listResponse) => {
        this.cards.set(this.normalizeCardList(listResponse.data));
      }), switchMap(() => throwError(() => err)));
    }));
  }
  /**
   * Delete payment card
   */
  deleteCard(cardId) {
    this.loading.set(true);
    this.error.set(null);
    const token = localStorage.getItem("accessToken");
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    return this._httpClient.delete(`${this.apiUrl}/v2/credit-cards/${cardId}`, { headers }).pipe(tap(() => {
      this.cards.update((cards) => cards.filter((card) => card._id !== cardId));
    }), catchError((err) => {
      console.error("Error deleting card:", err);
      this.error.set("Failed to delete card");
      return throwError(() => err);
    }), finalize(() => {
      this.loading.set(false);
    }));
  }
  /**
   * Get auto-recharge configuration
   */
  getAutoRechargeConfig() {
    this.loading.set(true);
    this.error.set(null);
    const token = localStorage.getItem("accessToken");
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    return this._httpClient.get(`${this.apiUrl}/v2/client-settings?findOne=true`, { headers }).pipe(tap((response) => {
      this.autoRechargeConfig.set(response.data?.autoCharge || null);
    }), catchError((err) => {
      console.error("Error fetching auto-recharge config:", err);
      this.error.set("Failed to load auto-recharge settings");
      return throwError(() => err);
    }), finalize(() => {
      this.loading.set(false);
    }));
  }
  /**
   * Update auto-recharge configuration
   */
  updateAutoRechargeConfig(config) {
    this.loading.set(true);
    this.error.set(null);
    const token = localStorage.getItem("accessToken");
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    const userStr = localStorage.getItem("verifik_account") || localStorage.getItem("user");
    let userId;
    try {
      const user = userStr && userStr !== "undefined" && userStr !== "null" ? JSON.parse(userStr) : null;
      userId = user?._id;
      if (!userId) {
        throw new Error("User ID not found");
      }
    } catch (err) {
      console.error("Error parsing user data:", err);
      this.error.set("Failed to get user information");
      this.loading.set(false);
      return throwError(() => new Error("User ID not found"));
    }
    return this._httpClient.post(`${this.apiUrl}/v2/client-settings`, {
      client: userId,
      autoCharge: config
    }, { headers }).pipe(tap((response) => {
      this.autoRechargeConfig.set(response.data?.autoCharge || null);
    }), catchError((err) => {
      console.error("Error updating auto-recharge config:", err);
      this.error.set("Failed to update auto-recharge settings");
      return throwError(() => err);
    }), finalize(() => {
      this.loading.set(false);
    }));
  }
  static {
    this.\u0275fac = function CreditsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CreditsService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CreditsService, factory: _CreditsService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CreditsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/modules/plate-report/plate-report.draft.ts
var STORAGE_KEY = "verifik.plateReport.draft";
var MAX_AGE_MS = 24 * 60 * 60 * 1e3;
var readPlateReportDraft = () => {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw)
      return null;
    const draft = JSON.parse(raw);
    if (!draft?.plate || !draft.savedAt || Date.now() - draft.savedAt > MAX_AGE_MS) {
      sessionStorage.removeItem(STORAGE_KEY);
      return null;
    }
    return draft;
  } catch {
    return null;
  }
};
var hasPlateReportDraft = () => readPlateReportDraft() != null;
var writePlateReportDraft = (draft) => {
  const next = __spreadProps(__spreadValues({}, draft), { savedAt: Date.now() });
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(next));
};
var clearPlateReportDraft = () => {
  sessionStorage.removeItem(STORAGE_KEY);
};
var SAVED_KEY = "verifik.plateReport.saved";
var SAVED_LIMIT = 20;
var readSavedMap = () => {
  try {
    const raw = localStorage.getItem(SAVED_KEY);
    const parsed = raw ? JSON.parse(raw) : {};
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
};
var readSavedPlateReport = (plate) => {
  const entry = readSavedMap()[plate];
  return entry?.reportId && typeof entry.rowIndex === "number" ? entry : null;
};
var writeSavedPlateReport = (entry) => {
  try {
    const next = __spreadProps(__spreadValues({}, readSavedMap()), { [entry.plate]: entry });
    const newest = Object.values(next).sort((a, b) => b.createdAt.localeCompare(a.createdAt)).slice(0, SAVED_LIMIT);
    localStorage.setItem(SAVED_KEY, JSON.stringify(Object.fromEntries(newest.map((item) => [item.plate, item]))));
  } catch {
  }
};
var clearSavedPlateReport = (plate) => {
  try {
    const _a = readSavedMap(), { [plate]: _removed } = _a, rest = __objRest(_a, [__restKey(plate)]);
    localStorage.setItem(SAVED_KEY, JSON.stringify(rest));
  } catch {
  }
};

export {
  CreditsService,
  readPlateReportDraft,
  hasPlateReportDraft,
  writePlateReportDraft,
  clearPlateReportDraft,
  readSavedPlateReport,
  writeSavedPlateReport,
  clearSavedPlateReport
};
//# sourceMappingURL=chunk-3PM3M5DV.js.map
