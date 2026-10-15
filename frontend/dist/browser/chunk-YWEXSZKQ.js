import {
  environment
} from "./chunk-KTYFS5OT.js";
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
} from "./chunk-I5BUD46C.js";
import {
  __spreadValues
} from "./chunk-F5M2C4EZ.js";

// src/app/modules/add-credits/services/payment.service.ts
var LEGACY_BOLD_PENDING_ORDER_KEY = "bold_pending_order_id";
var BOLD_CHECKOUT_SCRIPT_URL = "https://checkout.bold.co/library/boldPaymentButton.js";
var isThreeDSCreditPurchase = (data) => {
  return typeof data === "object" && data !== null && "requiresAction" in data && data.requiresAction === true;
};
var PaymentService = class _PaymentService {
  constructor(_httpClient) {
    this._httpClient = _httpClient;
    this.loading = signal(false);
    this.error = signal(null);
    this.apiUrl = environment.apiUrl;
  }
  /**
   * Create Stripe checkout session for adding a new card
   * This redirects to Stripe's hosted checkout page
   */
  createStripeCard() {
    this.loading.set(true);
    this.error.set(null);
    const token = localStorage.getItem("accessToken");
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    return this._httpClient.post(`${this.apiUrl}/v2/credit-cards/stripe`, {
      method: "createCheckoutSession",
      paymentGateway: "stripe"
    }, { headers }).pipe(tap((response) => {
      if (response.data?.url) {
        window.location.href = response.data.url;
      }
    }), catchError((err) => {
      console.error("Error creating Stripe checkout session:", err);
      this.error.set("Failed to initialize payment form");
      return throwError(() => err);
    }), finalize(() => {
      this.loading.set(false);
    }));
  }
  /**
   * After Stripe redirects from Checkout setup (success_url includes session_id).
   */
  syncCheckoutSession(sessionId) {
    this.error.set(null);
    const token = localStorage.getItem("accessToken");
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    return this._httpClient.post(`${this.apiUrl}/v2/credit-cards/stripe/sync-checkout-session`, { sessionId }, { headers });
  }
  /**
   * Purchase credits (may return requiresAction for 3DS — handle in UI).
   */
  purchaseCredits(request) {
    this.error.set(null);
    const token = localStorage.getItem("accessToken");
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    const payload = {
      amount: request.amount,
      cardId: request.cardId,
      currency: request.currency || "USD",
      origin: request.origin || "smart_agent",
      gatewayProvider: request.gatewayProvider ?? "stripe"
    };
    return this._httpClient.post(`${this.apiUrl}/v2/credits/purchase`, payload, {
      headers
    }).pipe(catchError((err) => {
      console.error("Error purchasing credits:", err);
      this.error.set(err.error?.message || "Failed to purchase credits");
      return throwError(() => err);
    }));
  }
  /**
   * After Stripe.js completes 3DS, sync credits (backup to webhook).
   */
  confirmCreditPurchase(paymentIntentId) {
    const token = localStorage.getItem("accessToken");
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    return this._httpClient.post(`${this.apiUrl}/v2/credits/purchase/confirm`, { paymentIntentId }, { headers });
  }
  /**
   * Which payment methods this client may use. Resolved server-side from billing country and
   * payment history, so the dialog never has to guess.
   */
  getPurchasePolicy() {
    const token = localStorage.getItem("accessToken");
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    return this._httpClient.get(`${this.apiUrl}/v2/credits/purchase-policy`, { headers });
  }
  /**
   * Prices a Bold order without creating one. Fails with `bold_fx_unavailable` when no USD/COP
   * rate can be resolved, in which case only the USD option is offerable.
   */
  getBoldQuote(amount, currency) {
    const token = localStorage.getItem("accessToken");
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    return this._httpClient.get(`${this.apiUrl}/v2/credits/bold/quote`, {
      headers,
      params: { amount, currency }
    });
  }
  /**
   * Opens a Bold order (hosted checkout, no saved card). Returns the signed config the browser
   * hands to Bold; credits are only granted once Bold confirms the sale.
   */
  createBoldCheckout(request) {
    this.error.set(null);
    const token = localStorage.getItem("accessToken");
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    return this._httpClient.post(`${this.apiUrl}/v2/credits/bold/checkout`, {
      amount: request.amount,
      currency: request.currency || "USD",
      origin: request.origin || "smart_agent"
    }, { headers });
  }
  /**
   * After Bold redirects back, reconcile that specific order (fallback for a delayed or sandbox
   * webhook).
   */
  confirmBoldPurchase(orderId) {
    const token = localStorage.getItem("accessToken");
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    return this._httpClient.post(`${this.apiUrl}/v2/credits/bold/confirm`, { orderId }, { headers });
  }
  /**
   * Re-polls every Bold order this client left open, asking the gateway again for each. The server
   * owns that list, so a checkout is still followed up on days later or from another device — and
   * an order nobody ever paid is reported as `abandoned` instead of pending forever.
   */
  reconcileBoldOrders() {
    localStorage.removeItem(LEGACY_BOLD_PENDING_ORDER_KEY);
    const token = localStorage.getItem("accessToken");
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    return this._httpClient.post(`${this.apiUrl}/v2/credits/bold/reconcile`, {}, { headers });
  }
  /**
   * Bold's checkout library is only fetched when the user actually picks Bold.
   */
  loadBoldCheckoutScript() {
    if (window.BoldCheckout) {
      return Promise.resolve();
    }
    if (!this._boldScriptPromise) {
      this._boldScriptPromise = new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = BOLD_CHECKOUT_SCRIPT_URL;
        script.async = true;
        script.onload = () => resolve();
        script.onerror = () => {
          this._boldScriptPromise = void 0;
          reject(new Error("bold_script_load_failed"));
        };
        document.head.appendChild(script);
      });
    }
    return this._boldScriptPromise;
  }
  /**
   * Opens Bold's gateway over the current page. Bold navigates to `redirectionUrl` when the
   * customer finishes, so the caller should not wait for a result.
   */
  openBoldCheckout(config) {
    if (!window.BoldCheckout) {
      throw new Error("bold_script_load_failed");
    }
    const checkout = new window.BoldCheckout(__spreadValues(__spreadValues({
      orderId: config.orderId,
      currency: config.currency,
      amount: config.amount,
      apiKey: config.apiKey,
      integritySignature: config.integritySignature,
      description: config.description,
      redirectionUrl: config.redirectionUrl,
      renderMode: config.renderMode || "embedded"
    }, config.originUrl ? { originUrl: config.originUrl } : {}), config.customerData ? { customerData: config.customerData } : {}));
    checkout.open();
  }
  /**
   * Sends the customer to a hosted Bold checkout (the PSE-only link a restricted first purchase
   * gets). Nothing is kept in the browser: the pending order lives in the database, so the return
   * page reconciles it even if Bold comes back without query parameters.
   */
  redirectToBoldCheckout(config) {
    if (!config.url) {
      throw new Error("bold_missing_checkout_url");
    }
    window.location.href = config.url;
  }
  /**
   * Resume KYC process
   */
  resumeKYC() {
    this.loading.set(true);
    const token = localStorage.getItem("accessToken");
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    return this._httpClient.post(`${this.apiUrl}/v2/app-registrations/resume-kyc`, {}, { headers }).pipe(finalize(() => {
      this.loading.set(false);
    }));
  }
  static {
    this.\u0275fac = function PaymentService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PaymentService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PaymentService, factory: _PaymentService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaymentService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  isThreeDSCreditPurchase,
  PaymentService
};
//# sourceMappingURL=chunk-YWEXSZKQ.js.map
