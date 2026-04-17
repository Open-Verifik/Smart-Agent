import {
  environment
} from "./chunk-32YYYLAD.js";
import {
  HttpClient,
  Injectable,
  map,
  setClassMetadata,
  signal,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-YTOBX75K.js";

// src/app/modules/smart-batch/smart-report.service.ts
var SmartReportService = class _SmartReportService {
  constructor(_httpClient) {
    this._httpClient = _httpClient;
    this.templates = signal([]);
    this.reports = signal([]);
    this.isLoading = signal(false);
  }
  // ============================================
  // TEMPLATE METHODS
  // ============================================
  getTemplates(configId) {
    let params = {};
    if (configId) {
      params = { batchConfiguration: configId };
    }
    return this._httpClient.get(`${environment.apiUrl}/v2/smart-report-templates`, { params }).pipe(map((res) => res.data), tap((templates) => this.templates.set(templates)));
  }
  getTemplate(id) {
    return this._httpClient.get(`${environment.apiUrl}/v2/smart-report-templates/${id}`).pipe(map((res) => res.data));
  }
  createTemplate(template) {
    return this._httpClient.post(`${environment.apiUrl}/v2/smart-report-templates`, template).pipe(map((res) => res.data), tap((newTemplate) => {
      this.templates.update((list) => [newTemplate, ...list]);
    }));
  }
  updateTemplate(id, template) {
    return this._httpClient.put(`${environment.apiUrl}/v2/smart-report-templates/${id}`, template).pipe(map((res) => res.data), tap((updated) => {
      this.templates.update((list) => list.map((t) => t._id === id ? updated : t));
    }));
  }
  deleteTemplate(id) {
    return this._httpClient.delete(`${environment.apiUrl}/v2/smart-report-templates/${id}`).pipe(tap(() => {
      this.templates.update((list) => list.filter((t) => t._id !== id));
    }));
  }
  sendTemplateSample(id, options) {
    return this._httpClient.post(`${environment.apiUrl}/v2/smart-report-templates/${id}/send-sample`, options);
  }
  // ============================================
  // REPORT METHODS
  // ============================================
  getReports(batchId) {
    let params = {};
    if (batchId) {
      params = { smartBatch: batchId };
    }
    return this._httpClient.get(`${environment.apiUrl}/v2/smart-reports`, { params }).pipe(map((res) => res.data), tap((reports) => this.reports.set(reports)));
  }
  getReport(id) {
    return this._httpClient.get(`${environment.apiUrl}/v2/smart-reports/${id}`).pipe(map((res) => res.data));
  }
  createReport(report) {
    return this._httpClient.post(`${environment.apiUrl}/v2/smart-reports`, report).pipe(map((res) => res.data), tap((newReport) => {
      this.reports.update((list) => [newReport, ...list]);
    }));
  }
  generateReport(id, options) {
    const body = {};
    if (options?.engine)
      body.engine = options.engine;
    if (options?.rowIndex != null)
      body.rowIndex = options.rowIndex;
    return this._httpClient.post(`${environment.apiUrl}/v2/smart-reports/${id}/generate`, Object.keys(body).length ? body : {});
  }
  sendReportEmail(id, options) {
    return this._httpClient.post(`${environment.apiUrl}/v2/smart-reports/${id}/send-email`, options);
  }
  getReportDownloadUrl(id) {
    return `${environment.apiUrl}/v2/smart-reports/${id}/download`;
  }
  /**
   * Download report PDF as blob (includes auth header).
   * Use this instead of getReportDownloadUrl + window.open for protected endpoints.
   */
  downloadReport(id) {
    return this._httpClient.get(`${environment.apiUrl}/v2/smart-reports/${id}/download`, {
      responseType: "blob"
    });
  }
  static {
    this.\u0275fac = function SmartReportService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SmartReportService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SmartReportService, factory: _SmartReportService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SmartReportService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  SmartReportService
};
//# sourceMappingURL=chunk-NIQX74WQ.js.map
