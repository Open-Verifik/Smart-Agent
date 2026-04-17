import {
  HttpWrapperService
} from "./chunk-LPSMXQSY.js";
import {
  environment
} from "./chunk-32YYYLAD.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-YTOBX75K.js";

// src/app/modules/status-check/status-check.service.ts
var StatusCheckService = class _StatusCheckService {
  constructor(_httpWrapper) {
    this._httpWrapper = _httpWrapper;
    this.baseUrl = environment.baseUrl;
  }
  getStatusRecord(data) {
    return this._httpWrapper.sendRequest("get", this.baseUrl + "/v2/api-status-records", data);
  }
  getIncidentsSubscriptions(data) {
    return this._httpWrapper.sendRequest("get", this.baseUrl + "/v2/incident-subscriptions", data);
  }
  postIncidentsSubscriptions(data) {
    return this._httpWrapper.sendRequest("post", this.baseUrl + "/v2/incident-subscriptions", data);
  }
  putIncidentsSubscriptions(data) {
    return this._httpWrapper.sendRequest("put", this.baseUrl + "/v2/incident-subscriptions/" + data._id, data);
  }
  deleteIncidentsSubscriptions(data) {
    return this._httpWrapper.sendRequest("delete", this.baseUrl + "/v2/incident-subscriptions/" + data._id, data);
  }
  getIncidents(data) {
    return this._httpWrapper.sendRequest("get", this.baseUrl + "/v2/incidents", data);
  }
  getIncidentLogs(data) {
    return this._httpWrapper.sendRequest("get", this.baseUrl + "/v2/incident-logs", data);
  }
  getAppFeatures(data) {
    return this._httpWrapper.sendRequest("get", this.baseUrl + "/v2/app-features", data);
  }
  static {
    this.\u0275fac = function StatusCheckService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StatusCheckService)(\u0275\u0275inject(HttpWrapperService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _StatusCheckService, factory: _StatusCheckService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StatusCheckService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpWrapperService }], null);
})();

export {
  StatusCheckService
};
//# sourceMappingURL=chunk-ZHR6FTPN.js.map
