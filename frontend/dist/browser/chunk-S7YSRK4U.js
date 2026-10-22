import {
  merge_default
} from "./chunk-6FS3LBOZ.js";
import {
  BehaviorSubject,
  Injectable,
  InjectionToken,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-YWP2Y7QK.js";

// src/@fuse/services/config/config.constants.ts
var FUSE_CONFIG = new InjectionToken("FUSE_APP_CONFIG");

// src/@fuse/services/config/config.service.ts
var FUSE_USER_PREFERENCES_STORAGE_KEY = "fuse.userPreferences";
var FuseConfigService = class _FuseConfigService {
  constructor() {
    this._defaults = inject(FUSE_CONFIG);
    this._config = new BehaviorSubject(merge_default({}, this._defaults, this.loadStoredPreferences()));
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Accessors
  // -----------------------------------------------------------------------------------------------------
  /**
   * Setter & getter for config
   */
  set config(value) {
    const config = merge_default({}, this._config.getValue(), value);
    this._config.next(config);
    this.persistUserFacingPreferences(config);
  }
  // eslint-disable-next-line @typescript-eslint/member-ordering
  get config$() {
    return this._config.asObservable();
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Resets the config to the default
   */
  reset() {
    this._config.next(this.config);
  }
  /**
   * Read stored preferences (used internally and testable separately from DI).
   */
  loadStoredPreferences() {
    if (typeof localStorage === "undefined" || typeof localStorage?.getItem !== "function") {
      return {};
    }
    try {
      const raw = localStorage.getItem(FUSE_USER_PREFERENCES_STORAGE_KEY);
      if (!raw)
        return {};
      const parsed = JSON.parse(raw);
      const prefs = {};
      if (typeof parsed.layout === "string") {
        prefs.layout = parsed.layout === "classic" ? "compact" : parsed.layout;
      }
      if (parsed.scheme === "auto" || parsed.scheme === "dark" || parsed.scheme === "light") {
        prefs.scheme = parsed.scheme;
      }
      if (typeof parsed.theme === "string") {
        prefs.theme = parsed.theme;
      }
      return prefs;
    } catch {
      return {};
    }
  }
  /** Persists subset of FuseConfig touched by Settings drawer. */
  persistUserFacingPreferences(config) {
    if (typeof localStorage === "undefined" || typeof localStorage?.setItem !== "function") {
      return;
    }
    try {
      const payload = JSON.stringify({
        layout: config.layout,
        scheme: config.scheme,
        theme: config.theme
      });
      localStorage.setItem(FUSE_USER_PREFERENCES_STORAGE_KEY, payload);
    } catch {
    }
  }
  static {
    this.\u0275fac = function FuseConfigService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FuseConfigService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FuseConfigService, factory: _FuseConfigService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FuseConfigService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  FUSE_CONFIG,
  FuseConfigService
};
//# sourceMappingURL=chunk-S7YSRK4U.js.map
