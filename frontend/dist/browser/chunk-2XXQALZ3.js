import {
  PostmanComponent
} from "./chunk-KET7EI75.js";
import "./chunk-57KKTAQC.js";
import "./chunk-XWZEZCTG.js";
import "./chunk-MIGBUUA4.js";
import "./chunk-JOCB7HVY.js";
import {
  PostmanService
} from "./chunk-MVXODGWL.js";
import {
  BIOMETRICS_API_CATEGORIES
} from "./chunk-VAHIF73V.js";
import "./chunk-RLXZXDLR.js";
import "./chunk-YSIFJH6G.js";
import "./chunk-XV7JRBNY.js";
import "./chunk-ZK2UTJXV.js";
import "./chunk-LFV2WSNG.js";
import "./chunk-USONFPXP.js";
import "./chunk-ZY3HAHLV.js";
import "./chunk-COFC5IXX.js";
import "./chunk-KQMP7FRR.js";
import "./chunk-S7YSRK4U.js";
import "./chunk-E5CL2DVE.js";
import "./chunk-LH7NVJQC.js";
import "./chunk-BLPRNM4C.js";
import "./chunk-6FS3LBOZ.js";
import "./chunk-N6A4QSA6.js";
import "./chunk-JCYMHGIK.js";
import "./chunk-H3UX3NVF.js";
import "./chunk-LVI7H6QB.js";
import "./chunk-BQZ6NKDU.js";
import "./chunk-ZUERA2CK.js";
import "./chunk-X7X3KIY2.js";
import "./chunk-JURKDGMK.js";
import "./chunk-DT4JVZCC.js";
import "./chunk-DMXREZDX.js";
import "./chunk-CPZD6RE6.js";
import "./chunk-W5MZFF7W.js";
import "./chunk-QUFOCOZK.js";
import "./chunk-6Y7NS256.js";
import "./chunk-L5NPACLK.js";
import "./chunk-2W6CKTFA.js";
import "./chunk-BYA46NNG.js";
import "./chunk-EVWXSBKG.js";
import "./chunk-KIEFKQUB.js";
import "./chunk-HVUVGZ2L.js";
import "./chunk-OIBNGD5S.js";
import "./chunk-5HABGTLH.js";
import "./chunk-PJFCLQ64.js";
import "./chunk-PDWCMJ4H.js";
import "./chunk-6Z76B4PC.js";
import "./chunk-GX5GK4J6.js";
import "./chunk-JBF67GMG.js";
import "./chunk-FWBWCXY5.js";
import "./chunk-QL64NPDU.js";
import "./chunk-3V5B4ZWC.js";
import {
  Component,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement
} from "./chunk-YWP2Y7QK.js";
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
//# sourceMappingURL=chunk-2XXQALZ3.js.map
