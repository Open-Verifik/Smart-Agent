import {
  environment
} from "./chunk-32YYYLAD.js";
import {
  HttpClient,
  Injectable,
  catchError,
  finalize,
  setClassMetadata,
  signal,
  tap,
  throwError,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-YTOBX75K.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KTESVR3Q.js";

// src/app/modules/smart-enroll/smart-scan/smart-scan.service.ts
var SCAN_METHODS = ["SCAN_AGENT", "SCAN_STUDIO", "SCAN_PROMPT"];
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
    this.pageSize = signal(10);
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
      in_validationMethod: SCAN_METHODS
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
  getDocumentTypes(country) {
    const params = {
      where_status: "active",
      limit: "200"
    };
    if (country) {
      params["where_country"] = country;
    }
    return this._httpClient.get(`${this.apiUrl}/v2/document-types`, {
      params,
      headers: this.authHeaders
    }).pipe(tap((response) => {
      const data = Array.isArray(response.data) ? response.data : [];
      this.documentTypes.set(data);
    }), catchError((err) => {
      console.error("Error fetching document types:", err);
      return throwError(() => err);
    }));
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
  scanDocument(documentType, image, backImage) {
    this.scanLoading.set(true);
    this.scanResult.set(null);
    const body = {
      documentType,
      image
    };
    if (backImage) {
      body["backImage"] = backImage;
    }
    return this._httpClient.post(`${this.apiUrl}/v2/ocr/scan-agent`, body, {
      headers: __spreadProps(__spreadValues({}, this.authHeaders), { "Content-Type": "application/json" })
    }).pipe(tap((response) => {
      this.scanResult.set(response.data ?? null);
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
//# sourceMappingURL=chunk-FS2ZUC6W.js.map
