import {
  Injectable,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-I5BUD46C.js";

// src/app/modules/smart-batch/report-builder-preview-data.service.ts
var ReportBuilderPreviewDataService = class _ReportBuilderPreviewDataService {
  constructor() {
    this._pendingPreviewData = signal(null);
  }
  /** Set preview data before navigating to report builder */
  setPendingPreviewData(data) {
    this._pendingPreviewData.set(data);
  }
  /** Consume and return pending preview data (clears after read) */
  consumePendingPreviewData() {
    const data = this._pendingPreviewData();
    this._pendingPreviewData.set(null);
    return data;
  }
  static {
    this.\u0275fac = function ReportBuilderPreviewDataService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReportBuilderPreviewDataService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ReportBuilderPreviewDataService, factory: _ReportBuilderPreviewDataService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReportBuilderPreviewDataService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  ReportBuilderPreviewDataService
};
//# sourceMappingURL=chunk-ZG4VYEQ6.js.map
