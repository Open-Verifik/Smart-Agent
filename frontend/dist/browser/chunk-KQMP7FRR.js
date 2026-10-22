import {
  FuseConfigService
} from "./chunk-S7YSRK4U.js";
import {
  fromPairs_default
} from "./chunk-6FS3LBOZ.js";
import {
  BreakpointObserver
} from "./chunk-GX5GK4J6.js";
import {
  Injectable,
  ReplaySubject,
  inject,
  map,
  setClassMetadata,
  switchMap,
  ɵɵdefineInjectable
} from "./chunk-YWP2Y7QK.js";

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
  FuseMediaWatcherService
};
//# sourceMappingURL=chunk-KQMP7FRR.js.map
