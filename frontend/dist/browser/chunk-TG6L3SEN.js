import {
  HttpWrapperService
} from "./chunk-BCBZJBUY.js";
import {
  environment
} from "./chunk-KTYFS5OT.js";
import {
  Injectable,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-PNPEHISK.js";

// src/app/core/services/auth-api.service.ts
var AuthApiService = class _AuthApiService {
  constructor() {
    this._httpWrapper = inject(HttpWrapperService);
    this._apiUrl = environment.apiUrl;
  }
  /**
   * Send email OTP for validation
   */
  sendEmailOtp(request) {
    return this._httpWrapper.sendRequest("post", `${this._apiUrl}/v2/email-validations`, request);
  }
  /**
   * Validate email OTP
   */
  validateEmailOtp(request) {
    return this._httpWrapper.sendRequest("post", `${this._apiUrl}/v2/email-validations/validate`, request);
  }
  /**
   * Send phone OTP for validation
   */
  sendPhoneOtp(request) {
    return this._httpWrapper.sendRequest("post", `${this._apiUrl}/v2/phone-validations`, request);
  }
  /**
   * Validate phone OTP
   */
  validatePhoneOtp(request) {
    return this._httpWrapper.sendRequest("post", `${this._apiUrl}/v2/phone-validations/validate`, request);
  }
  /**
   * Project Login to get real access token.
   * @param expiresIn Months until expiry (default backend unit). Use 12 for passkey vault JWTs.
   */
  projectLogin(expiresIn) {
    const body = expiresIn && expiresIn > 0 ? { expiresIn } : {};
    return this._httpWrapper.sendRequest("post", `${this._apiUrl}/v2/auth/project-login`, body);
  }
  /**
   * Get user session data
   */
  getSession() {
    return this._httpWrapper.sendRequest("post", `${this._apiUrl}/v2/auth/session`, {
      origin: "app"
    });
  }
  static {
    this.\u0275fac = function AuthApiService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AuthApiService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthApiService, factory: _AuthApiService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthApiService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  AuthApiService
};
//# sourceMappingURL=chunk-TG6L3SEN.js.map
