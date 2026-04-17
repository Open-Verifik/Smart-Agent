import {
  environment
} from "./chunk-32YYYLAD.js";
import {
  HttpClient,
  Injectable,
  setClassMetadata,
  signal,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-YTOBX75K.js";

// src/app/modules/smart-batch/smart-batch.service.ts
var SmartBatchService = class _SmartBatchService {
  constructor(_httpClient) {
    this._httpClient = _httpClient;
    this.configurations = signal([]);
    this.isLoading = signal(false);
  }
  getConfigurations() {
    this.isLoading.set(true);
    return this._httpClient.get(`${environment.apiUrl}/v2/batch-configurations`).pipe(tap((response) => {
      this.configurations.set(response.data);
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
  getSmartBatches(configId, sort = "-createdAt") {
    return this._httpClient.get(`${environment.apiUrl}/v2/smart-batches`, { params: { batchConfiguration: configId, sort } });
  }
  createSmartBatch(data) {
    return this._httpClient.post(`${environment.apiUrl}/v2/smart-batches`, data);
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
   * Update a single row's status and results after processing
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
  SmartBatchService
};
//# sourceMappingURL=chunk-6YNO6YW5.js.map
