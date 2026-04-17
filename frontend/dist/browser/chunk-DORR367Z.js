import {
  fromPairs_default,
  merge_default
} from "./chunk-6FS3LBOZ.js";
import {
  BehaviorSubject,
  BreakpointObserver,
  Injectable,
  InjectionToken,
  ReplaySubject,
  inject,
  map,
  setClassMetadata,
  switchMap,
  ɵɵdefineInjectable
} from "./chunk-YTOBX75K.js";

// src/@fuse/services/config/config.constants.ts
var FUSE_CONFIG = new InjectionToken("FUSE_APP_CONFIG");

// src/@fuse/services/config/config.service.ts
var FuseConfigService = class _FuseConfigService {
  constructor() {
    this._config = new BehaviorSubject(inject(FUSE_CONFIG));
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

// src/@fuse/services/media-watcher/media-watcher.service.ts
var FuseMediaWatcherService = class _FuseMediaWatcherService {
  /**
   * Constructor
   */
  constructor() {
    this._breakpointObserver = inject(BreakpointObserver);
    this._fuseConfigService = inject(FuseConfigService);
    this._onMediaChange = new ReplaySubject(1);
    this._fuseConfigService.config$.pipe(map((config) => fromPairs_default(Object.entries(config.screens).map(([alias, screen]) => [
      alias,
      `(min-width: ${screen})`
    ]))), switchMap((screens) => this._breakpointObserver.observe(Object.values(screens)).pipe(map((state) => {
      const matchingAliases = [];
      const matchingQueries = {};
      const matchingBreakpoints = Object.entries(state.breakpoints).filter(([query, matches]) => matches) ?? [];
      for (const [query] of matchingBreakpoints) {
        const matchingAlias = Object.entries(screens).find(([alias, q]) => q === query)[0];
        if (matchingAlias) {
          matchingAliases.push(matchingAlias);
          matchingQueries[matchingAlias] = query;
        }
      }
      this._onMediaChange.next({
        matchingAliases,
        matchingQueries
      });
    })))).subscribe();
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Accessors
  // -----------------------------------------------------------------------------------------------------
  /**
   * Getter for _onMediaChange
   */
  get onMediaChange$() {
    return this._onMediaChange.asObservable();
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * On media query change
   *
   * @param query
   */
  onMediaQueryChange$(query) {
    return this._breakpointObserver.observe(query);
  }
  static {
    this.\u0275fac = function FuseMediaWatcherService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FuseMediaWatcherService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FuseMediaWatcherService, factory: _FuseMediaWatcherService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FuseMediaWatcherService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [], null);
})();

export {
  FUSE_CONFIG,
  FuseConfigService,
  FuseMediaWatcherService
};
//# sourceMappingURL=chunk-DORR367Z.js.map
