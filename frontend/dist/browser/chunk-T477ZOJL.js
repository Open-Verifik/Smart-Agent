import {
  environment
} from "./chunk-3V5B4ZWC.js";
import {
  HttpClient,
  Injectable,
  catchError,
  finalize,
  map,
  of,
  setClassMetadata,
  signal,
  tap,
  throwError,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-YWP2Y7QK.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-F5M2C4EZ.js";

// src/app/modules/smart-enroll/smart-scan/smart-scan.service.ts
var SCAN_METHODS = ["SCAN_AGENT", "SCAN_STUDIO", "SCAN_PROMPT"];
var SCAN_LIST_COLUMNS = "_id url documentType documentNumber status validationMethod country createdAt OCRExtraction";
var SmartScanService = class _SmartScanService {
  constructor(_httpClient) {
    this._httpClient = _httpClient;
    this.scans = signal([]);
    this.total = signal(0);
    this.loading = signal(false);
    this.error = signal(null);
    this.documentTypes = signal([]);
    this.promptTemplates = signal([]);
    this.selectedDocumentType = signal(null);
    this.selectedPromptTemplate = signal(null);
    this.scanResult = signal(null);
    this.scanLoading = signal(false);
    this.pageSize = signal(12);
    this.pageIndex = signal(0);
  }
  get apiUrl() {
    return environment.apiUrl;
  }
  get authHeaders() {
    const token = localStorage.getItem("accessToken");
    return token ? { Authorization: `Bearer ${token}` } : {};
  }
  getScans(page = 1, limit = 10, filters) {
    this.loading.set(true);
    this.error.set(null);
    const params = {
      page: page.toString(),
      limit: limit.toString(),
      sort: "-createdAt",
      in_validationMethod: SCAN_METHODS,
      columns: SCAN_LIST_COLUMNS,
      lean: "true"
    };
    const whereKeys = [
      "documentType",
      "documentNumber",
      "country",
      "status",
      "documentCategory",
      "nationality"
    ];
    for (const key of whereKeys) {
      if (filters?.[key]) {
        params[`where_${key}`] = filters[key];
      }
    }
    return this._httpClient.get(`${this.apiUrl}/v2/document-validations`, {
      params,
      headers: this.authHeaders
    }).pipe(tap((response) => {
      const data = Array.isArray(response.data) ? response.data : [response.data];
      this.scans.set(data);
      this.total.set(response.total ?? 0);
    }), catchError((err) => {
      console.error("Error fetching scans:", err);
      this.error.set("Failed to load scans");
      return throwError(() => err);
    }), finalize(() => this.loading.set(false)));
  }
  getRecentDocumentTypes() {
    return this._httpClient.get(`${this.apiUrl}/v2/document-validations/recent-document-types`, {
      headers: this.authHeaders
    }).pipe(map((response) => Array.isArray(response.data) ? response.data : []), catchError((err) => {
      console.error("Error fetching recent document types:", err);
      return of([]);
    }));
  }
  getDocumentTypesByCode(code) {
    return this._httpClient.get(`${this.apiUrl}/v2/document-types`, {
      params: this.withFeaturePopulate({ where_code: code, where_status: "active", limit: "10" }),
      headers: this.authHeaders
    }).pipe(map((response) => Array.isArray(response.data) ? response.data : []), catchError((err) => {
      console.error("Error fetching document type by code:", err);
      return of([]);
    }));
  }
  getScan(id) {
    return this._httpClient.get(`${this.apiUrl}/v2/document-validations/${id}`, { headers: this.authHeaders });
  }
  deleteScan(id) {
    return this._httpClient.delete(`${this.apiUrl}/v2/document-validations/${id}`, {
      headers: this.authHeaders
    }).pipe(catchError((err) => {
      console.error("Error deleting document validation:", err);
      return throwError(() => err);
    }));
  }
  /**
   * Active document-type countries only. Does not store records, so preview images stay unloaded.
   */
  getDocumentTypeCountries() {
    const params = {
      where_status: "active",
      columns: "country",
      limit: "500"
    };
    return this._httpClient.get(`${this.apiUrl}/v2/document-types`, {
      params,
      headers: this.authHeaders
    }).pipe(map((response) => this.uniqueCountries(response.data)), catchError((err) => {
      console.error("Error fetching document type countries:", err);
      return throwError(() => err);
    }));
  }
  /**
   * Full document types for one country, including preview images.
   */
  getDocumentTypes(country, mine = false) {
    if (!country?.trim()) {
      this.documentTypes.set([]);
      return of([]);
    }
    const params = {
      where_status: "active",
      where_country: country,
      limit: "200"
    };
    if (mine)
      params["where_mine"] = "true";
    return this._httpClient.get(`${this.apiUrl}/v2/document-types`, {
      params: this.withFeaturePopulate(params),
      headers: this.authHeaders
    }).pipe(map((response) => Array.isArray(response.data) ? response.data : []), tap((data) => this.documentTypes.set(data)), catchError((err) => {
      console.error("Error fetching document types:", err);
      return throwError(() => err);
    }));
  }
  uniqueCountries(data) {
    const rows = Array.isArray(data) ? data : [];
    const names = rows.map((row) => row.country?.trim()).filter((country) => Boolean(country));
    return [...new Set(names)].sort();
  }
  getPromptTemplatesByCode(code) {
    return this._httpClient.get(`${this.apiUrl}/v2/prompt-templates`, {
      params: { where_documentTypes: code },
      headers: this.authHeaders
    });
  }
  getPromptTemplates(documentTypeId) {
    const params = {};
    if (documentTypeId) {
      params["where_documentType"] = documentTypeId;
    }
    return this._httpClient.get(`${this.apiUrl}/v2/prompt-templates`, {
      params,
      headers: this.authHeaders
    }).pipe(tap((response) => {
      const data = Array.isArray(response.data) ? response.data : [];
      this.promptTemplates.set(data);
    }), catchError((err) => {
      console.error("Error fetching prompt templates:", err);
      return throwError(() => err);
    }));
  }
  getDocumentType(id) {
    return this._httpClient.get(`${this.apiUrl}/v2/document-types/${id}`, {
      params: this.withFeaturePopulate({}),
      headers: this.authHeaders
    });
  }
  createDocumentType(body) {
    return this._httpClient.post(`${this.apiUrl}/v2/document-types`, body, {
      headers: __spreadProps(__spreadValues({}, this.authHeaders), { "Content-Type": "application/json" })
    });
  }
  updateDocumentType(id, body) {
    return this._httpClient.put(`${this.apiUrl}/v2/document-types/${id}`, body, {
      headers: __spreadProps(__spreadValues({}, this.authHeaders), { "Content-Type": "application/json" })
    });
  }
  updatePromptTemplate(id, body) {
    return this._httpClient.put(`${this.apiUrl}/v2/prompt-templates/${id}`, body, {
      headers: __spreadProps(__spreadValues({}, this.authHeaders), { "Content-Type": "application/json" })
    });
  }
  createPromptTemplate(body) {
    return this._httpClient.post(`${this.apiUrl}/v2/prompt-templates`, body, {
      headers: __spreadProps(__spreadValues({}, this.authHeaders), { "Content-Type": "application/json" })
    });
  }
  getSmartCheckFeatures(country) {
    const trimmed = country.trim();
    const titled = trimmed.replace(/\b\w/g, (char) => char.toUpperCase());
    const countries = [.../* @__PURE__ */ new Set([trimmed, trimmed.toLowerCase(), trimmed.toUpperCase(), titled])].filter(Boolean);
    return this._httpClient.get(`${this.apiUrl}/v2/app-features/my-list`, {
      params: {
        where_country: countries.join(","),
        where_isAvailable: "true",
        limit: "200"
      },
      headers: this.authHeaders
    });
  }
  /**
   * Includes the linked government endpoint name and URL on each document type.
   */
  withFeaturePopulate(params) {
    return __spreadProps(__spreadValues({}, params), {
      "populates[]": "appFeature",
      populateSelects: JSON.stringify({ appFeature: "code name url" })
    });
  }
  identifyDocumentFields(image, backImage) {
    const body = { image };
    if (backImage)
      body["backImage"] = backImage;
    return this._httpClient.post(`${this.apiUrl}/v2/ocr/identify-fields`, body, {
      headers: __spreadProps(__spreadValues({}, this.authHeaders), { "Content-Type": "application/json" })
    });
  }
  scanDocument(documentType, image, backImage, promptTemplateId) {
    this.scanLoading.set(true);
    this.scanResult.set(null);
    const body = {
      documentType,
      image,
      includeCost: "true"
    };
    if (backImage) {
      body["backImage"] = backImage;
    }
    if (promptTemplateId) {
      body["promptTemplateId"] = promptTemplateId;
    }
    return this._httpClient.post(`${this.apiUrl}/v2/ocr/scan-agent`, body, {
      headers: __spreadProps(__spreadValues({}, this.authHeaders), { "Content-Type": "application/json" })
    }).pipe(tap((response) => {
      const result = response.data ? __spreadProps(__spreadValues({}, response.data), {
        creditsCharged: response.creditsCharged ?? response.data.creditsCharged
      }) : null;
      this.scanResult.set(result);
    }), catchError((err) => {
      console.error("Error scanning document:", err);
      return throwError(() => err);
    }), finalize(() => this.scanLoading.set(false)));
  }
  resetScanState() {
    this.scanResult.set(null);
    this.selectedDocumentType.set(null);
    this.selectedPromptTemplate.set(null);
  }
  static {
    this.\u0275fac = function SmartScanService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SmartScanService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SmartScanService, factory: _SmartScanService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SmartScanService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  SmartScanService
};
//# sourceMappingURL=chunk-T477ZOJL.js.map
