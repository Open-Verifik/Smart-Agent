import {
  environment
} from "./chunk-KTYFS5OT.js";
import {
  HttpClient,
  Injectable,
  catchError,
  map,
  of,
  setClassMetadata,
  signal,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-I5BUD46C.js";
import {
  __spreadValues
} from "./chunk-F5M2C4EZ.js";

// src/app/modules/smart-batch/smart-batch.service.ts
var SMART_BATCH_SUCCESS_WHEN_FALLBACK = {
  colombia_pep_lookup: [{ httpStatus: 404, responseCodes: ["NotFound"] }],
  api_colombia_contracts: [{ httpStatus: 404, responseCodes: ["NotFound"] }],
  colombia_api_vehicle_sinister_fasecolda_by_plate: [
    { httpStatus: 404, responseCodes: ["NotFound"] }
  ]
};
var getEffectiveSmartBatchSuccessWhen = (feature) => {
  if (feature.smartBatchSuccessWhen?.length)
    return feature.smartBatchSuccessWhen;
  return SMART_BATCH_SUCCESS_WHEN_FALLBACK[feature.code];
};
var DEFAULT_PER_PAGE = 20;
var EMPTY_PAGINATION = { page: 1, perPage: DEFAULT_PER_PAGE, total: 0, pages: 1 };
var readPagination = (response, requestedPage, requestedPerPage) => {
  const total = response.total ?? response.data?.length ?? 0;
  const perPage = response.limit ?? requestedPerPage;
  return {
    page: response.page ?? requestedPage,
    perPage,
    total,
    pages: response.pages ?? Math.max(1, Math.ceil(total / perPage))
  };
};
var SmartBatchService = class _SmartBatchService {
  constructor(_httpClient) {
    this._httpClient = _httpClient;
    this.configurations = signal([]);
    this.configurationsPage = signal(__spreadValues({}, EMPTY_PAGINATION));
    this.isLoading = signal(false);
  }
  getConfigurations(options = {}) {
    this.isLoading.set(true);
    const page = options.page ?? 1;
    const perPage = options.perPage ?? DEFAULT_PER_PAGE;
    return this._httpClient.get(`${environment.apiUrl}/v2/batch-configurations`, { params: { page, perPage } }).pipe(tap((response) => {
      this.configurations.set(response.data ?? []);
      this.configurationsPage.set(readPagination(response, page, perPage));
      this.isLoading.set(false);
    }));
  }
  getAvailableFeatures(country) {
    if (typeof country !== "undefined" && country === null) {
      country = "";
    }
    let params = {};
    if (country) {
      params = { country };
    }
    return this._httpClient.get(`${environment.apiUrl}/v2/app-features/my-list`, { params }).pipe(tap((res) => console.log("Features loaded", res)));
  }
  /** Full feature, including `docs`, which the catalog list omits. */
  getFeatureDetail(codeOrId) {
    const encoded = encodeURIComponent(codeOrId);
    const read = (url) => this._httpClient.get(url).pipe(map((response) => response?.data ?? null));
    return read(`${environment.apiUrl}/v2/public/app-features/${encoded}`).pipe(catchError(() => read(`${environment.apiUrl}/v2/app-features/${encoded}`).pipe(catchError(() => of(null)))));
  }
  createConfiguration(config) {
    return this._httpClient.post(`${environment.apiUrl}/v2/batch-configurations`, config).pipe(tap((response) => {
      this.configurations.update((configs) => [response.data, ...configs]);
    }));
  }
  deleteConfiguration(id) {
    return this._httpClient.delete(`${environment.apiUrl}/v2/batch-configurations/${id}`).pipe(tap(() => {
      this.configurations.update((configs) => configs.filter((c) => c._id !== id));
    }));
  }
  getConfiguration(id) {
    return this._httpClient.get(`${environment.apiUrl}/v2/batch-configurations/${id}`, { params: { populates: "steps.appFeature" } });
  }
  updateConfiguration(id, config) {
    return this._httpClient.put(`${environment.apiUrl}/v2/batch-configurations/${id}`, config).pipe(tap((response) => {
      this.configurations.update((configs) => configs.map((c) => c._id === id ? response.data : c));
    }));
  }
  // SmartBatch methods
  getSmartBatches(configId, options = {}) {
    return this._httpClient.get(`${environment.apiUrl}/v2/smart-batches`, {
      params: {
        batchConfiguration: configId,
        sort: options.sort ?? "-createdAt",
        page: options.page ?? 1,
        perPage: options.perPage ?? DEFAULT_PER_PAGE
      }
    });
  }
  createSmartBatch(data) {
    return this._httpClient.post(`${environment.apiUrl}/v2/smart-batches`, data);
  }
  cloneSystemPreset(systemKey) {
    return this._httpClient.post(`${environment.apiUrl}/v2/smart-batch-presets/${systemKey}/clone`, {});
  }
  appendSmartBatchRows(batchId, rows) {
    return this._httpClient.post(`${environment.apiUrl}/v2/smart-batches/${batchId}/rows/append`, { rows });
  }
  getSmartBatch(id) {
    return this._httpClient.get(`${environment.apiUrl}/v2/smart-batches/${id}`, { params: { populates: "batchConfiguration" } });
  }
  updateSmartBatch(id, data) {
    return this._httpClient.put(`${environment.apiUrl}/v2/smart-batches/${id}`, data);
  }
  getSmartBatchStats(configId) {
    return this._httpClient.get(`${environment.apiUrl}/v2/smart-batches/stats/${configId}`);
  }
  /**
   * Hand the batch to the server-side FeatureRunner engine.
   * Returns as soon as the run is queued; progress comes from `getBatchProgress`.
   */
  startSmartBatch(id) {
    return this._httpClient.post(`${environment.apiUrl}/v2/smart-batches/${id}/start`, {});
  }
  /** Pre-flight credit cost, before committing to a run. */
  getBatchEstimate(id) {
    return this._httpClient.get(`${environment.apiUrl}/v2/smart-batches/${id}/estimate`);
  }
  /** Lightweight progress payload for polling while the engine works. */
  getBatchProgress(id) {
    return this._httpClient.get(`${environment.apiUrl}/v2/smart-batches/${id}/progress`);
  }
  pauseSmartBatch(id) {
    return this._httpClient.post(`${environment.apiUrl}/v2/smart-batches/${id}/pause`, {});
  }
  resumeSmartBatch(id) {
    return this._httpClient.post(`${environment.apiUrl}/v2/smart-batches/${id}/resume`, {});
  }
  /**
   * Re-run failed and partial rows, keeping completed step results so only the
   * steps that actually failed are billed again.
   * @param rowIndexes Restrict to specific rows; omit to retry all failures.
   */
  retrySmartBatchFailedRows(id, rowIndexes) {
    return this._httpClient.post(`${environment.apiUrl}/v2/smart-batches/${id}/retry-failed`, rowIndexes?.length ? { rowIndexes } : {});
  }
  /** Re-run specific endpoints on one row; other step results stay as they are. */
  retrySmartBatchSteps(id, options) {
    return this._httpClient.post(`${environment.apiUrl}/v2/smart-batches/${id}/retry-steps`, __spreadValues({
      sequences: options.sequences
    }, options.rowIndex != null ? { rowIndex: options.rowIndex } : {}));
  }
  cancelSmartBatch(id) {
    return this._httpClient.post(`${environment.apiUrl}/v2/smart-batches/${id}/cancel`, {});
  }
  /** Create a batch straight from a CSV / XLSX / JSONL payload, parsed server-side. */
  createSmartBatchFromFile(payload) {
    return this._httpClient.post(`${environment.apiUrl}/v2/smart-batches/from-file`, payload);
  }
  /**
   * Composed report model for a row, built by the shared backend composer.
   *
   * The PDF renderer builds from this same model, so preview and document
   * cannot drift. The local composer under `colombia-vehicle-report/` remains
   * for fixtures and offline preview only.
   */
  getRowReport(batchId, rowIndex) {
    return this._httpClient.get(`${environment.apiUrl}/v2/smart-batches/${batchId}/rows/${rowIndex}/report`);
  }
  /**
   * Execute a feature request using its configured URL and method
   * This is used by the frontend to make API calls with the user's JWT
   */
  executeFeatureRequest(url, method = "GET", params = {}) {
    const fullUrl = url.startsWith("http") ? url : `${environment.apiUrl}/${url.replace(/^\//, "")}`;
    if (method.toUpperCase() === "GET") {
      return this._httpClient.get(fullUrl, { params });
    } else {
      return this._httpClient.post(fullUrl, params);
    }
  }
  /**
   * Patch a single row.
   *
   * Engine-managed batches only accept input-only patches (no `status`,
   * `results` or `errors`) and only while the batch is idle — the run owns
   * execution state.
   */
  updateBatchRow(batchId, rowIndex, update) {
    return this._httpClient.put(`${environment.apiUrl}/v2/smart-batches/${batchId}/rows/${rowIndex}`, update);
  }
  static {
    this.\u0275fac = function SmartBatchService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SmartBatchService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SmartBatchService, factory: _SmartBatchService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SmartBatchService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  getEffectiveSmartBatchSuccessWhen,
  DEFAULT_PER_PAGE,
  SmartBatchService
};
//# sourceMappingURL=chunk-LTG7SRYE.js.map
