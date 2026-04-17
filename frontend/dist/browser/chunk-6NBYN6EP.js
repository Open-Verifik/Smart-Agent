import {
  HttpWrapperService
} from "./chunk-LPSMXQSY.js";
import {
  environment
} from "./chunk-32YYYLAD.js";
import {
  HttpClient,
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-YTOBX75K.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KTESVR3Q.js";

// src/app/modules/subscription-plans/subscription.service.ts
var SubscriptionService = class _SubscriptionService {
  constructor(_httpWrapper, _httpClient) {
    this._httpWrapper = _httpWrapper;
    this._httpClient = _httpClient;
    this.baseUrl = environment.apiUrl;
  }
  /**
   * Get all available subscription plans (legacy - returns all plans)
   */
  getSubscriptions(params = {}) {
    return this._httpWrapper.sendRequest("get", `${this.baseUrl}/v2/subscription-plans`, params);
  }
  /**
   * Get plans from the client's pricing table (only plans assigned to their pricing table)
   */
  getPricingTableDisplay(params = {}) {
    return this._httpWrapper.sendRequest("get", `${this.baseUrl}/v2/pricing-tables/display`, params);
  }
  /**
   * Get current user's subscription
   */
  getMySubscription(params = {}) {
    return this._httpWrapper.sendRequest("get", `${this.baseUrl}/v2/client-subscription-plans`, params);
  }
  /**
   * Change user's subscription plan
   */
  changeMySubscription(data) {
    const requestData = __spreadProps(__spreadValues({}, data), {
      source: "smart_agent"
    });
    return this._httpWrapper.sendRequest("put", `${this.baseUrl}/v2/subscription-plans/${data.id}/subscribe`, requestData);
  }
  /**
   * Cancel user's subscription
   */
  cancelSubscription(data) {
    return this._httpWrapper.sendRequest("put", `${this.baseUrl}/v2/client-subscription-plans/${data.id}/cancel`, data);
  }
  /**
   * Get billing configuration
   */
  getBillingConfig(params = {}) {
    return this._httpWrapper.sendRequest("get", `${this.baseUrl}/v2/client-settings`, params);
  }
  /**
   * Get payment cards
   */
  getCards(params = {}) {
    return this._httpWrapper.sendRequest("get", `${this.baseUrl}/v2/credit-cards`, params);
  }
  /**
   * Confirm checkout session (backup for missed webhooks).
   * When user returns with session_id in URL, syncs subscription to backend.
   */
  confirmCheckoutSession(sessionId) {
    return this._httpWrapper.sendRequest("get", `${this.baseUrl}/v2/subscription-plans/session/confirm`, {
      session_id: sessionId
    });
  }
  /**
   * Create Stripe portal session
   */
  createPortalSession(params = {}) {
    const requestParams = __spreadProps(__spreadValues({}, params), {
      source: "smart_agent"
      // Indicate this request comes from Smart Agent
    });
    return this._httpWrapper.sendRequest("get", `${this.baseUrl}/v2/subscription-plans/session/portal`, requestParams);
  }
  /**
   * Get app features
   */
  getFeatures(params = {}) {
    return this._httpWrapper.sendRequest("get", `${this.baseUrl}/v2/app-features`, params);
  }
  /**
   * Get public app features (no auth required, same as Postman).
   * Used for API price breakdown on subscription plans.
   */
  getPublicAppFeatures(params = {}) {
    return this._httpClient.get(`${this.baseUrl}/v2/public/app-features`, {
      params
    });
  }
  /**
   * Get app features with current user prices (authenticated).
   * Merges ClientFeature overrides for the logged-in client.
   */
  getMyListAppFeatures(params = {}) {
    return this._httpWrapper.sendRequest("get", `${this.baseUrl}/v2/app-features/my-list`, params);
  }
  static {
    this.\u0275fac = function SubscriptionService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SubscriptionService)(\u0275\u0275inject(HttpWrapperService), \u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SubscriptionService, factory: _SubscriptionService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SubscriptionService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpWrapperService }, { type: HttpClient }], null);
})();

export {
  SubscriptionService
};
//# sourceMappingURL=chunk-6NBYN6EP.js.map
