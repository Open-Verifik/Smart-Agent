import {
  NavigationEnd,
  Router
} from "./chunk-LHOHCIQM.js";
import {
  DOCUMENT,
  Injectable,
  filter,
  inject,
  setClassMetadata,
  take,
  ɵɵdefineInjectable
} from "./chunk-YTOBX75K.js";

// src/@fuse/services/splash-screen/splash-screen.service.ts
var FuseSplashScreenService = class _FuseSplashScreenService {
  /**
   * Constructor
   */
  constructor() {
    this._document = inject(DOCUMENT);
    this._router = inject(Router);
    this._router.events.pipe(filter((event) => event instanceof NavigationEnd), take(1)).subscribe(() => {
      this.hide();
    });
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Show the splash screen
   */
  show() {
    this._document.body.classList.remove("fuse-splash-screen-hidden");
  }
  /**
   * Hide the splash screen
   */
  hide() {
    this._document.body.classList.add("fuse-splash-screen-hidden");
  }
  static {
    this.\u0275fac = function FuseSplashScreenService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FuseSplashScreenService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FuseSplashScreenService, factory: _FuseSplashScreenService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FuseSplashScreenService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [], null);
})();

export {
  FuseSplashScreenService
};
//# sourceMappingURL=chunk-AAIC5PCV.js.map
