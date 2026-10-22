import {
  TranslocoService
} from "./chunk-FWBWCXY5.js";
import {
  environment
} from "./chunk-3V5B4ZWC.js";
import {
  HttpClient,
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-YWP2Y7QK.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-F5M2C4EZ.js";

// src/app/core/verifik/verifik-api.service.ts
var VerifikApiService = class _VerifikApiService {
  constructor(_httpClient, _transloco) {
    this._httpClient = _httpClient;
    this._transloco = _transloco;
    this._apiUrl = environment.apiUrl;
  }
  /** BCP 47 tag → API locale (matches backend mail i18n, e.g. es, en). */
  _languageForApi() {
    const raw = this._transloco.getActiveLang() || "en";
    return raw.split(/[-_]/)[0].toLowerCase();
  }
  /**
   * Get Project by ID (KYC Config)
   * Used for initialization
   */
  getProject(id) {
    return this._httpClient.get(`${this._apiUrl}/v2/projects/kyc`, {
      params: { id, type: "onboarding" }
    });
  }
  /**
   * Get App Registration
   * Check status of current user registration
   */
  getAppRegistration(token) {
    return this._httpClient.get(`${this._apiUrl}/v2/app-registrations/me`, {
      headers: { Authorization: `Bearer ${token}` }
    });
  }
  /**
   * Create App Registration
   * Start the flow
   */
  createAppRegistration(projectId, data) {
    return this._httpClient.post(`${this._apiUrl}/v2/app-registrations`, __spreadProps(__spreadValues({
      project: projectId
    }, data), {
      language: data?.language ?? this._languageForApi()
    }));
  }
  /**
   * Advance an app registration. `skipKYC` finishes a basic account when the
   * flow does not require identity capture, and returns a token that
   * project-login can exchange.
   */
  syncAppRegistration(token, id, body) {
    return this._httpClient.put(`${this._apiUrl}/v2/app-registrations/${id}/sync`, body, {
      headers: { Authorization: `Bearer ${token}` }
    });
  }
  /**
   * Send OTP (Email/Phone)
   * POST /v2/{type}-validations/app-registration
   * Requires Bearer Token of App Registration
   */
  sendOtp(token, data) {
    const isEmail = data.type === "email";
    const endpoint = isEmail ? "email-validations" : "phone-validations";
    const payload = {
      project: data.project,
      validationMethod: "verificationCode",
      type: "onboarding",
      language: this._languageForApi()
    };
    if (isEmail) {
      payload.email = data.email;
    } else {
      payload.phone = data.phone;
      payload.countryCode = data.countryCode;
    }
    return this._httpClient.post(`${this._apiUrl}/v2/${endpoint}/app-registration`, payload, {
      headers: { Authorization: `Bearer ${token}` }
    });
  }
  /**
   * Verify OTP (Email/Phone)
   * PUT /v2/{type}-validations
   */
  verifyOtp(token, data) {
    const isEmail = data.type === "email";
    const endpoint = isEmail ? "email-validations" : "phone-validations";
    const payload = {
      project: data.project,
      projectFlow: data.projectFlow,
      otp: Number(data.code)
    };
    if (isEmail) {
      payload.email = data.email;
    } else {
      payload.phone = data.phone;
      payload.countryCode = data.countryCode;
    }
    return this._httpClient.put(`${this._apiUrl}/v2/${endpoint}`, payload, {
      headers: { Authorization: `Bearer ${token}` }
    });
  }
  static {
    this.\u0275fac = function VerifikApiService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _VerifikApiService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(TranslocoService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _VerifikApiService, factory: _VerifikApiService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VerifikApiService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }, { type: TranslocoService }], null);
})();

export {
  VerifikApiService
};
//# sourceMappingURL=chunk-JDA6WF2Z.js.map
