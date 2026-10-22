import {
  environment
} from "./chunk-3V5B4ZWC.js";
import {
  HttpClient,
  Injectable,
  map,
  setClassMetadata,
  signal,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-YWP2Y7QK.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-F5M2C4EZ.js";

// src/app/modules/smart-batch/smart-report.service.ts
var REPORT_SHAPE_KINDS = [
  "rectangle",
  "square",
  "circle",
  "star",
  "triangle",
  "diamond",
  "bullet",
  "icon",
  "line"
];
var templateLayerZ = (template) => {
  const map2 = {};
  for (const [id, z] of Object.entries(template.layoutOverlayZ ?? {})) {
    const value = Number(z);
    if (Number.isFinite(value) && value > 0)
      map2[id] = value;
  }
  for (const section of template.sections ?? []) {
    const z = Number(section.style?.zIndex);
    if (section.id && Number.isFinite(z) && z > 0)
      map2[`sec:${section.id}`] = z;
  }
  (template.sheetImages ?? []).forEach((image, index) => {
    const z = Number(image.zIndex);
    map2[`img:${image.id}`] = Number.isFinite(z) && z > 0 ? z : 48 + index;
  });
  return map2;
};
var SYSTEM_TEMPLATE_FIELDS = [
  "type",
  "systemKey",
  "country",
  "category",
  "tier",
  "nameKey",
  "descriptionKey",
  "presetSteps"
];
var sanitizeTemplateForApi = (template, mode = "create") => {
  const payload = JSON.parse(JSON.stringify(template));
  delete payload._id;
  delete payload.client;
  delete payload.thumbnail;
  delete payload.createdAt;
  delete payload.updatedAt;
  delete payload.clonedFromSystemKey;
  delete payload.__v;
  const batchRef = payload.batchConfiguration;
  if (batchRef && typeof batchRef === "object") {
    const id = batchRef._id ?? batchRef.id;
    if (typeof id === "string" && id) {
      payload.batchConfiguration = id;
    } else {
      delete payload.batchConfiguration;
    }
  }
  if (mode === "update" && payload.logo === "") {
    payload.logo = "";
  } else if (typeof payload.logo !== "string" || !payload.logo) {
    delete payload.logo;
  }
  if (mode === "update") {
    for (const key of SYSTEM_TEMPLATE_FIELDS) {
      delete payload[key];
    }
  }
  return payload;
};
var cloneReportValue = (value) => JSON.parse(JSON.stringify(value));
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
    this.isLoading.set(true);
    let params = {};
    if (configId) {
      params = { batchConfiguration: configId };
    }
    return this._httpClient.get(`${environment.apiUrl}/v2/smart-report-templates`, { params }).pipe(map((res) => res.data), tap({
      next: (templates) => {
        this.templates.set(templates);
        this.isLoading.set(false);
      },
      error: () => this.isLoading.set(false)
    }));
  }
  getTemplate(id) {
    return this._httpClient.get(`${environment.apiUrl}/v2/smart-report-templates/${id}`).pipe(map((res) => res.data));
  }
  createTemplate(template) {
    return this._httpClient.post(`${environment.apiUrl}/v2/smart-report-templates`, sanitizeTemplateForApi(template, "create")).pipe(map((res) => res.data), tap((newTemplate) => {
      this.templates.update((list) => [newTemplate, ...list]);
    }));
  }
  updateTemplate(id, template) {
    return this._httpClient.put(`${environment.apiUrl}/v2/smart-report-templates/${id}`, sanitizeTemplateForApi(template, "update")).pipe(map((res) => res.data), tap((updated) => {
      this.templates.update((list) => list.map((t) => t._id === id ? updated : t));
    }));
  }
  deleteTemplate(id) {
    return this._httpClient.delete(`${environment.apiUrl}/v2/smart-report-templates/${id}`).pipe(tap(() => {
      this.templates.update((list) => list.filter((t) => t._id !== id));
    }));
  }
  generateLayout(options) {
    return this._httpClient.post(`${environment.apiUrl}/v2/smart-report-templates/generate-layout`, options).pipe(map((res) => res.data));
  }
  /**
   * Render the live preview through the same code path that produces the PDF.
   *
   * The template travels in the body so an unsaved draft can be previewed, and
   * the response is raw HTML for an iframe rather than a section view model.
   */
  previewHtml(template, sampleData) {
    return this._httpClient.post(`${environment.apiUrl}/v2/smart-report-templates/preview-html`, __spreadProps(__spreadValues({}, sanitizeTemplateForApi(template, "create")), {
      sampleData
    })).pipe(map((res) => res.data.html));
  }
  /**
   * Describe a sample payload so the builder can offer a data palette instead of
   * asking the user to type dot paths.
   */
  introspect(sampleData) {
    return this._httpClient.post(`${environment.apiUrl}/v2/smart-report-templates/introspect`, { sampleData }).pipe(map((res) => res.data));
  }
  sendTemplateSample(id, options) {
    return this._httpClient.post(`${environment.apiUrl}/v2/smart-report-templates/${id}/send-sample`, options);
  }
  /**
   * Generate the same Puppeteer sample PDF as `sendTemplateSample` but receive
   * the file directly (no email) so the user can preview it locally.
   */
  downloadTemplateSample(id, body) {
    return this._httpClient.post(`${environment.apiUrl}/v2/smart-report-templates/${id}/download-sample`, body, { responseType: "blob" });
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
  /**
   * Reports generated from a template, newest first.
   *
   * Unlike `getReports`, this does not replace the shared `reports` signal: the
   * builder's Deliver step asks about one template while a batch view may be
   * showing another batch's reports.
   */
  getReportsByTemplate(templateId) {
    return this._httpClient.get(`${environment.apiUrl}/v2/smart-reports`, {
      params: { template: templateId, sort: "-createdAt" }
    }).pipe(map((res) => res.data ?? []));
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
    if (options?.printHtml)
      body.printHtml = options.printHtml;
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
  downloadReport(id, rowIndex) {
    return this._httpClient.get(`${environment.apiUrl}/v2/smart-reports/${id}/download`, __spreadValues({
      responseType: "blob"
    }, rowIndex != null ? { params: { rowIndex: String(rowIndex) } } : {}));
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
  REPORT_SHAPE_KINDS,
  templateLayerZ,
  cloneReportValue,
  SmartReportService
};
//# sourceMappingURL=chunk-DZGBAIEV.js.map
