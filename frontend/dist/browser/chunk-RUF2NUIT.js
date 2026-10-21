import {
  PostmanComponent
} from "./chunk-GE7PU4LN.js";
import "./chunk-X5UH5JHC.js";
import "./chunk-XWZEZCTG.js";
import "./chunk-KRKFV5GK.js";
import "./chunk-P7M6LMVE.js";
import {
  PostmanService
} from "./chunk-2QCJ5QLO.js";
import {
  BIOMETRICS_API_CATEGORIES
} from "./chunk-VAHIF73V.js";
import "./chunk-LV7DYMB4.js";
import "./chunk-XV7JRBNY.js";
import "./chunk-ZK2UTJXV.js";
import "./chunk-LFV2WSNG.js";
import "./chunk-USONFPXP.js";
import "./chunk-2PD7Y6XQ.js";
import "./chunk-TEME6LW2.js";
import "./chunk-SBRI74OE.js";
import "./chunk-G3ZZ3J2Z.js";
import "./chunk-YJ6YLDQV.js";
import "./chunk-FWYUPNZS.js";
import "./chunk-VWOHFVN5.js";
import "./chunk-6FS3LBOZ.js";
import "./chunk-TXEVGTMX.js";
import "./chunk-UO2A7A46.js";
import "./chunk-H3UX3NVF.js";
import "./chunk-FTSXFXXU.js";
import "./chunk-4J4GSXOK.js";
import "./chunk-ZUERA2CK.js";
import "./chunk-WIGHP2N4.js";
import "./chunk-JURKDGMK.js";
import "./chunk-RM2644J3.js";
import "./chunk-AICPTZP5.js";
import "./chunk-VURK6DEU.js";
import "./chunk-E7WYNRWC.js";
import "./chunk-HWNQWMK7.js";
import "./chunk-OJPCXVQ6.js";
import "./chunk-6VDSDVMZ.js";
import "./chunk-BCBZJBUY.js";
import "./chunk-WSS6AKQE.js";
import "./chunk-EVWXSBKG.js";
import "./chunk-UUIVQBYS.js";
import "./chunk-M5KDIZH5.js";
import "./chunk-OIBNGD5S.js";
import "./chunk-WOW6NB5H.js";
import "./chunk-YSJP7SXK.js";
import "./chunk-CQIQSUBU.js";
import "./chunk-J762DGD5.js";
import "./chunk-DVRFI3SJ.js";
import "./chunk-R5W3A6HI.js";
import "./chunk-HYFP557I.js";
import "./chunk-PMCYMBOC.js";
import {
  Component,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement
} from "./chunk-PNPEHISK.js";
import "./chunk-F5M2C4EZ.js";

// src/app/modules/smart-enroll/biometrics-api/biometrics-api.component.ts
var BiometricsApiComponent = class _BiometricsApiComponent {
  constructor() {
    this._postmanService = inject(PostmanService);
  }
  ngOnInit() {
    this._postmanService.setCategoryFilter(BIOMETRICS_API_CATEGORIES);
  }
  ngOnDestroy() {
    this._postmanService.clearCategoryFilter();
  }
  static {
    this.\u0275fac = function BiometricsApiComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BiometricsApiComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BiometricsApiComponent, selectors: [["app-biometrics-api"]], decls: 1, vars: 0, consts: [[1, "flex", "min-h-0", "min-w-0", "flex-1"]], template: function BiometricsApiComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-postman", 0);
      }
    }, dependencies: [PostmanComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex: 1 1 auto;\n  width: 100%;\n  min-width: 0;\n  min-height: 0;\n  height: 100%;\n}\n/*# sourceMappingURL=biometrics-api.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BiometricsApiComponent, [{
    type: Component,
    args: [{ selector: "app-biometrics-api", standalone: true, imports: [PostmanComponent], template: `<app-postman class="flex min-h-0 min-w-0 flex-1"></app-postman>`, styles: ["/* angular:styles/component:scss;76c88cc3337353a193ff4440db8116f5a56fcbe1030e44e3fb6196463765a508;C:/Users/anuar/OneDrive/Documentos/verifik/Smart-Agent/frontend/src/app/modules/smart-enroll/biometrics-api/biometrics-api.component.ts */\n:host {\n  display: flex;\n  flex: 1 1 auto;\n  width: 100%;\n  min-width: 0;\n  min-height: 0;\n  height: 100%;\n}\n/*# sourceMappingURL=biometrics-api.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BiometricsApiComponent, { className: "BiometricsApiComponent", filePath: "src/app/modules/smart-enroll/biometrics-api/biometrics-api.component.ts", lineNumber: 24 });
})();
export {
  BiometricsApiComponent
};
//# sourceMappingURL=chunk-RUF2NUIT.js.map
