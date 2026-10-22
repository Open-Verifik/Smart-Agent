import {
  toHttpParams
} from "./chunk-NNMFBAZF.js";
import {
  environment
} from "./chunk-3V5B4ZWC.js";
import {
  HttpClient,
  Injectable,
  inject,
  map,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-YWP2Y7QK.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-F5M2C4EZ.js";

// src/app/core/usage/usage-api.service.ts
var UsageApiService = class _UsageApiService {
  constructor() {
    this._http = inject(HttpClient);
    this._apiUrl = environment.apiUrl;
  }
  getUsage(query) {
    return this._http.get(`${this._apiUrl}/v2/usage`, {
      headers: this._authHeaders(),
      params: toHttpParams(__spreadValues({}, query))
    }).pipe(map((res) => res.data));
  }
  /** Server-built CSV (UTF-8 with BOM) as a Blob plus the filename the API suggests. */
  downloadUsageCsv(query) {
    return this._http.get(`${this._apiUrl}/v2/usage`, {
      headers: this._authHeaders(),
      params: toHttpParams(__spreadProps(__spreadValues({}, query), { format: "csv", limit: 500 })),
      responseType: "blob",
      observe: "response"
    }).pipe(map((res) => ({ blob: res.body, filename: this._filename(res, query.groupBy) })));
  }
  getAvailability(months = 6) {
    return this._http.get(`${this._apiUrl}/v2/usage/availability`, {
      headers: this._authHeaders(),
      params: toHttpParams({ months })
    }).pipe(map((res) => res.data));
  }
  listCostCenters(includeInactive = true) {
    return this._http.get(`${this._apiUrl}/v2/cost-centers`, {
      headers: this._authHeaders(),
      params: toHttpParams(includeInactive ? { limit: 100 } : { limit: 100, active: true })
    }).pipe(map((res) => res.data || []));
  }
  createCostCenter(input) {
    return this._http.post(`${this._apiUrl}/v2/cost-centers`, input, { headers: this._authHeaders() }).pipe(map((res) => res.data));
  }
  updateCostCenter(id, input) {
    return this._http.put(`${this._apiUrl}/v2/cost-centers/${id}`, input, { headers: this._authHeaders() }).pipe(map((res) => res.data));
  }
  deactivateCostCenter(id) {
    return this._http.delete(`${this._apiUrl}/v2/cost-centers/${id}`, { headers: this._authHeaders() }).pipe(map((res) => res.data));
  }
  _filename(res, groupBy) {
    const disposition = res.headers.get("Content-Disposition") || "";
    const match = /filename="([^"]+)"/.exec(disposition);
    return match?.[1] || `verifik-usage-${groupBy}-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.csv`;
  }
  _authHeaders() {
    const token = localStorage.getItem("accessToken");
    return token ? { Authorization: `Bearer ${token}` } : {};
  }
  static {
    this.\u0275fac = function UsageApiService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UsageApiService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UsageApiService, factory: _UsageApiService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UsageApiService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  UsageApiService
};
//# sourceMappingURL=chunk-OVSGGC5D.js.map
