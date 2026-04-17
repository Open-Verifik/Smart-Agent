import {
  HttpClient,
  HttpHeaders,
  Injectable,
  finalize,
  retry,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-YTOBX75K.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KTESVR3Q.js";

// src/app/core/services/http-wrapper.service.ts
var HttpWrapperService = class _HttpWrapperService {
  get progress() {
    return !!this.tail.length;
  }
  constructor(_http) {
    this._http = _http;
    this.tail = [];
  }
  /**
   * Send request
   * @param method - HTTP method to use (get, post, put, delete)
   * @param url - URL to request
   * @param params - Params that can go into the body or query string
   * @param options - Additional options like headers
   */
  sendRequest(method, url, params = {}, options = {}) {
    method = method.toLowerCase();
    const authToken = localStorage.getItem("accessToken") || "";
    const headers = new HttpHeaders(__spreadValues(__spreadValues({}, authToken && { Authorization: `Bearer ${authToken}` }), options.headers));
    const requestOptions = __spreadProps(__spreadValues({}, options), {
      headers
    });
    let request$;
    switch (method) {
      case "get":
        request$ = this._http.get(url, __spreadValues({
          params
        }, requestOptions));
        break;
      case "post":
        request$ = this._http.post(url, params, requestOptions);
        break;
      case "put":
        request$ = this._http.put(url, params, requestOptions);
        break;
      case "delete":
        request$ = this._http.delete(url, __spreadValues({
          params
        }, requestOptions));
        break;
      default:
        throw new Error("Method not provided");
    }
    return this._trackRequest(request$);
  }
  _trackRequest(request$) {
    this.tail.push(request$);
    return request$.pipe(retry(0), finalize(() => {
      const index = this.tail.indexOf(request$);
      if (index > -1) {
        this.tail.splice(index, 1);
      }
    }));
  }
  static {
    this.\u0275fac = function HttpWrapperService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HttpWrapperService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _HttpWrapperService, factory: _HttpWrapperService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HttpWrapperService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  HttpWrapperService
};
//# sourceMappingURL=chunk-LPSMXQSY.js.map
