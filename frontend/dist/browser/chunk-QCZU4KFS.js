import {
  PostmanComponent
} from "./chunk-I7WI77T5.js";
import "./chunk-QKEV5AXG.js";
import "./chunk-XWZEZCTG.js";
import "./chunk-PIFFNHZS.js";
import "./chunk-SYTKKYHL.js";
import {
  PostmanService
} from "./chunk-Z7VJQHJ7.js";
import {
  BIOMETRICS_API_CATEGORIES
} from "./chunk-VAHIF73V.js";
import "./chunk-6Z7R47EE.js";
import "./chunk-XV7JRBNY.js";
import "./chunk-ZK2UTJXV.js";
import "./chunk-LFV2WSNG.js";
import "./chunk-USONFPXP.js";
import "./chunk-SBPE7Z7H.js";
import "./chunk-I2SDAPHJ.js";
import "./chunk-B5O2X5UD.js";
import "./chunk-2RJMRCF6.js";
import "./chunk-C3RXWDTM.js";
import "./chunk-33SZVW2I.js";
import "./chunk-YWEXSZKQ.js";
import "./chunk-6FS3LBOZ.js";
import "./chunk-O4LKJP5L.js";
import "./chunk-UO34MIWZ.js";
import "./chunk-H3UX3NVF.js";
import "./chunk-NRO2XGZE.js";
import "./chunk-KRS47QLN.js";
import "./chunk-ZUERA2CK.js";
import "./chunk-W2APQW4E.js";
import "./chunk-JURKDGMK.js";
import "./chunk-DW2XB3R4.js";
import "./chunk-WXNXCCYE.js";
import "./chunk-BYQUUNDI.js";
import "./chunk-PDLCCGUT.js";
import "./chunk-GG23NHUM.js";
import "./chunk-64R62RHA.js";
import "./chunk-6VQY5BEJ.js";
import "./chunk-F5BVEUVX.js";
import "./chunk-V36MHRLI.js";
import "./chunk-EVWXSBKG.js";
import "./chunk-CTAWHRE6.js";
import "./chunk-WKFG3L4B.js";
import "./chunk-OIBNGD5S.js";
import "./chunk-7FACNXV2.js";
import "./chunk-NBA3XD53.js";
import "./chunk-EIYDU75T.js";
import "./chunk-IXSC6NFZ.js";
import "./chunk-5EV2TUYF.js";
import "./chunk-VENEX45A.js";
import "./chunk-DM2XPT7T.js";
import "./chunk-KTYFS5OT.js";
import {
  Component,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement
} from "./chunk-I5BUD46C.js";
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
//# sourceMappingURL=chunk-QCZU4KFS.js.map
