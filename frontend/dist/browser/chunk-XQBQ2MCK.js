import {
  BillingRequiredDialogComponent
} from "./chunk-KGON7EY3.js";
import {
  SubscriptionService
} from "./chunk-5YXXIWLJ.js";
import {
  extractClientSettingsPayload,
  invoiceBillingDetailsComplete
} from "./chunk-FY4LH25C.js";
import {
  DateTime
} from "./chunk-KW3PRW6P.js";
import {
  PaymentService,
  isThreeDSCreditPurchase
} from "./chunk-XMOWS3RD.js";
import "./chunk-H3UX3NVF.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-FTSXFXXU.js";
import {
  AuthModalComponent
} from "./chunk-LHH4KRD7.js";
import "./chunk-4U26N45P.js";
import "./chunk-WIGHP2N4.js";
import "./chunk-JURKDGMK.js";
import "./chunk-RM2644J3.js";
import "./chunk-AICPTZP5.js";
import "./chunk-VURK6DEU.js";
import "./chunk-E7WYNRWC.js";
import "./chunk-HWNQWMK7.js";
import "./chunk-TG6L3SEN.js";
import {
  AuthService
} from "./chunk-UDAOI32F.js";
import {
  UserService
} from "./chunk-K4AG7N5H.js";
import "./chunk-BCBZJBUY.js";
import "./chunk-GH366QKW.js";
import "./chunk-EVWXSBKG.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-UUIVQBYS.js";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogContent,
  MatDialogModule,
  MatDialogRef
} from "./chunk-M5KDIZH5.js";
import "./chunk-OIBNGD5S.js";
import "./chunk-WOW6NB5H.js";
import {
  MatButton,
  MatButtonModule
} from "./chunk-YSJP7SXK.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-CQIQSUBU.js";
import "./chunk-J762DGD5.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgModel,
  NumberValueAccessor
} from "./chunk-DVRFI3SJ.js";
import {
  TranslocoDirective,
  TranslocoModule,
  TranslocoPipe,
  TranslocoService
} from "./chunk-R5W3A6HI.js";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-HYFP557I.js";
import {
  environment
} from "./chunk-KTYFS5OT.js";
import {
  CommonModule,
  Component,
  DatePipe,
  DecimalPipe,
  EventEmitter,
  HttpClient,
  Injectable,
  Input,
  LowerCasePipe,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  Output,
  TitleCasePipe,
  ViewEncapsulation,
  catchError,
  computed,
  finalize,
  forkJoin,
  inject,
  of,
  setClassMetadata,
  signal,
  switchMap,
  tap,
  throwError,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵpureFunction4,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-PNPEHISK.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-F5M2C4EZ.js";

// src/app/modules/add-credits/add-credits.constants.ts
var MIN_CREDIT_PURCHASE_USD = 49;
var MAX_CREDIT_PURCHASE_USD = 2e3;

// src/app/modules/add-credits/services/credits.service.ts
var CreditsService = class _CreditsService {
  authHeaders() {
    const token = localStorage.getItem("accessToken");
    return token ? { Authorization: `Bearer ${token}` } : {};
  }
  cardListParams(gatewayProvider = "stripe") {
    return {
      "populates[]": "client",
      where_gatewayProvider: gatewayProvider
    };
  }
  normalizeCardList(data) {
    if (Array.isArray(data)) {
      return data;
    }
    if (data && typeof data === "object" && Array.isArray(data.docs)) {
      return data.docs;
    }
    return [];
  }
  fetchCards(gatewayProvider = "stripe") {
    return this._httpClient.get(`${this.apiUrl}/v2/credit-cards`, {
      headers: this.authHeaders(),
      params: this.cardListParams(gatewayProvider)
    });
  }
  constructor(_httpClient) {
    this._httpClient = _httpClient;
    this.cards = signal([]);
    this.balance = signal(null);
    this.autoRechargeConfig = signal(null);
    this.loading = signal(false);
    this.error = signal(null);
    this.apiUrl = environment.apiUrl;
    this._userService = inject(UserService);
    this._userService.user$.subscribe((user) => {
      if (user) {
        this.updateBalanceFromUser(user);
      }
    });
  }
  updateBalanceFromUser(user) {
    try {
      const credits = Number(user.credits) || 0;
      const totalCredits = Math.round(credits * 100) / 100;
      const balance = {
        credits: Math.round(credits * 100) / 100,
        totalCredits
      };
      this.balance.set(balance);
    } catch (err) {
      console.error("Error updating balance from user:", err);
    }
  }
  /**
   * Get all payment cards
   */
  getCards(gatewayProvider = "stripe") {
    this.loading.set(true);
    this.error.set(null);
    return this.fetchCards(gatewayProvider).pipe(tap((response) => {
      this.cards.set(this.normalizeCardList(response.data));
    }), catchError((err) => {
      console.error("Error fetching cards:", err);
      this.error.set("Failed to load payment cards");
      return throwError(() => err);
    }), finalize(() => {
      this.loading.set(false);
    }));
  }
  /**
   * Refresh user data from localStorage (balance is stored in user object)
   * Call this after credit purchase to update the balance
   */
  refreshBalance() {
    this.getBalance().subscribe();
  }
  /**
   * Get current credit balance from user object
   */
  getBalance() {
    this.loading.set(true);
    this.error.set(null);
    try {
      const userStr = localStorage.getItem("verifik_account") || localStorage.getItem("user");
      const user = userStr ? JSON.parse(userStr) : null;
      if (user) {
        const credits = Number(user.credits) || 0;
        const totalCredits = Math.round(credits * 100) / 100;
        const balance = {
          credits: Math.round(credits * 100) / 100,
          totalCredits
        };
        this.balance.set(balance);
      } else {
        this.balance.set({
          credits: 0,
          totalCredits: 0
        });
      }
    } catch (err) {
      console.error("Error parsing user data:", err);
      this.error.set("Failed to load credit balance");
      this.balance.set({
        credits: 0,
        totalCredits: 0
      });
    } finally {
      this.loading.set(false);
    }
    return of({ data: this.balance() });
  }
  /**
   * Set default payment card
   */
  setDefaultCard(cardId, gatewayProvider = "stripe") {
    this.error.set(null);
    this.cards.update((cards) => cards.map((card) => __spreadProps(__spreadValues({}, card), {
      isDefault: card._id === cardId
    })));
    return this._httpClient.put(`${this.apiUrl}/v2/credit-cards/${cardId}/default`, {}, { headers: this.authHeaders() }).pipe(switchMap((response) => {
      const cards = this.normalizeCardList(response.data);
      if (cards.length > 0) {
        this.cards.set(cards);
        return of(response);
      }
      return this.fetchCards(gatewayProvider).pipe(tap((listResponse) => {
        this.cards.set(this.normalizeCardList(listResponse.data));
      }));
    }), catchError((err) => {
      console.error("Error setting default card:", err);
      this.error.set("Failed to set default card");
      return this.fetchCards(gatewayProvider).pipe(tap((listResponse) => {
        this.cards.set(this.normalizeCardList(listResponse.data));
      }), switchMap(() => throwError(() => err)));
    }));
  }
  /**
   * Delete payment card
   */
  deleteCard(cardId) {
    this.loading.set(true);
    this.error.set(null);
    const token = localStorage.getItem("accessToken");
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    return this._httpClient.delete(`${this.apiUrl}/v2/credit-cards/${cardId}`, { headers }).pipe(tap(() => {
      this.cards.update((cards) => cards.filter((card) => card._id !== cardId));
    }), catchError((err) => {
      console.error("Error deleting card:", err);
      this.error.set("Failed to delete card");
      return throwError(() => err);
    }), finalize(() => {
      this.loading.set(false);
    }));
  }
  /**
   * Get auto-recharge configuration
   */
  getAutoRechargeConfig() {
    this.loading.set(true);
    this.error.set(null);
    const token = localStorage.getItem("accessToken");
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    return this._httpClient.get(`${this.apiUrl}/v2/client-settings?findOne=true`, { headers }).pipe(tap((response) => {
      this.autoRechargeConfig.set(response.data?.autoCharge || null);
    }), catchError((err) => {
      console.error("Error fetching auto-recharge config:", err);
      this.error.set("Failed to load auto-recharge settings");
      return throwError(() => err);
    }), finalize(() => {
      this.loading.set(false);
    }));
  }
  /**
   * Update auto-recharge configuration
   */
  updateAutoRechargeConfig(config) {
    this.loading.set(true);
    this.error.set(null);
    const token = localStorage.getItem("accessToken");
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    const userStr = localStorage.getItem("verifik_account") || localStorage.getItem("user");
    let userId;
    try {
      const user = userStr && userStr !== "undefined" && userStr !== "null" ? JSON.parse(userStr) : null;
      userId = user?._id;
      if (!userId) {
        throw new Error("User ID not found");
      }
    } catch (err) {
      console.error("Error parsing user data:", err);
      this.error.set("Failed to get user information");
      this.loading.set(false);
      return throwError(() => new Error("User ID not found"));
    }
    return this._httpClient.post(`${this.apiUrl}/v2/client-settings`, {
      client: userId,
      autoCharge: config
    }, { headers }).pipe(tap((response) => {
      this.autoRechargeConfig.set(response.data?.autoCharge || null);
    }), catchError((err) => {
      console.error("Error updating auto-recharge config:", err);
      this.error.set("Failed to update auto-recharge settings");
      return throwError(() => err);
    }), finalize(() => {
      this.loading.set(false);
    }));
  }
  static {
    this.\u0275fac = function CreditsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CreditsService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CreditsService, factory: _CreditsService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CreditsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/modules/add-credits/auto-recharge-settings/auto-recharge-settings.component.ts
var _c0 = (a0, a1) => ({ "border-indigo-400 bg-indigo-50/50 ring-2 ring-indigo-500/20 dark:border-indigo-400 dark:bg-indigo-950/20 dark:ring-indigo-400/20": a0, "border-stone-200 bg-white hover:border-stone-300 dark:border-gray-700 dark:bg-gray-950/50 dark:hover:border-gray-600": a1 });
function AutoRechargeSettingsComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "mat-icon", 20);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 21);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.error);
  }
}
function AutoRechargeSettingsComponent_div_21_section_28_button_4_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 40);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "addCredits.autoRecharge.dialog.default"), " ");
  }
}
function AutoRechargeSettingsComponent_div_21_section_28_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 33);
    \u0275\u0275listener("click", function AutoRechargeSettingsComponent_div_21_section_28_button_4_Template_button_click_0_listener() {
      const card_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.selectCard(card_r4._id));
    });
    \u0275\u0275elementStart(1, "div", 34);
    \u0275\u0275element(2, "img", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 36)(4, "span", 37);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 38);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, AutoRechargeSettingsComponent_div_21_section_28_button_4_span_9_Template, 3, 3, "span", 39);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const card_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(9, _c0, ctx_r0.selectedCardId === card_r4._id, ctx_r0.selectedCardId !== card_r4._id))("disabled", ctx_r0.loading);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r0.getCardLogo(card_r4.brand), \u0275\u0275sanitizeUrl)("alt", card_r4.brand);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" \u2022\u2022\u2022\u2022 ", card_r4.lastFour, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 7, card_r4.brand), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", card_r4.isDefault);
  }
}
function AutoRechargeSettingsComponent_div_21_section_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 24)(1, "label", 8);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, AutoRechargeSettingsComponent_div_21_section_28_button_4_Template, 10, 12, "button", 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "addCredits.autoRecharge.dialog.paymentMethod"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.data.cards);
  }
}
function AutoRechargeSettingsComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 23)(2, "div", 24)(3, "label", 8);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 25)(7, "span", 26);
    \u0275\u0275text(8, "$");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 27);
    \u0275\u0275twoWayListener("ngModelChange", function AutoRechargeSettingsComponent_div_21_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.minThreshold, $event) || (ctx_r0.minThreshold = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 28);
    \u0275\u0275text(11, "USD");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "p", 29);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 24)(16, "label", 8);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 25)(20, "span", 26);
    \u0275\u0275text(21, "$");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "input", 30);
    \u0275\u0275twoWayListener("ngModelChange", function AutoRechargeSettingsComponent_div_21_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.minRecharge, $event) || (ctx_r0.minRecharge = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 28);
    \u0275\u0275text(24, "USD");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "p", 29);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(28, AutoRechargeSettingsComponent_div_21_section_28_Template, 5, 4, "section", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 10, "addCredits.autoRecharge.dialog.balanceThreshold"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.minThreshold);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 12, "addCredits.autoRecharge.dialog.balanceThresholdHint"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 14, "addCredits.autoRecharge.dialog.rechargeAmount"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.minRecharge);
    \u0275\u0275property("min", ctx_r0.minRechargeUsd)("max", ctx_r0.maxRechargeUsd);
    \u0275\u0275attribute("placeholder", ctx_r0.minRechargeUsd);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(27, 16, "addCredits.autoRecharge.dialog.rechargeAmountHint"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.data == null ? null : ctx_r0.data.cards == null ? null : ctx_r0.data.cards.length);
  }
}
function AutoRechargeSettingsComponent_mat_spinner_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 41);
  }
}
function AutoRechargeSettingsComponent_span_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "addCredits.autoRecharge.dialog.saveSettings"));
  }
}
var AutoRechargeSettingsComponent = class _AutoRechargeSettingsComponent {
  constructor() {
    this._dialogRef = inject(MatDialogRef);
    this._creditsService = inject(CreditsService);
    this._transloco = inject(TranslocoService);
    this.data = inject(MAT_DIALOG_DATA);
    this.enabled = false;
    this.minThreshold = 10;
    this.minRecharge = MIN_CREDIT_PURCHASE_USD;
    this.minRechargeUsd = MIN_CREDIT_PURCHASE_USD;
    this.maxRechargeUsd = MAX_CREDIT_PURCHASE_USD;
    this.loading = false;
    this.error = null;
  }
  ngOnInit() {
    if (this.data?.config) {
      this.enabled = this.data.config.hasAutoCharge || false;
      this.minThreshold = this.data.config.minThreshold || 10;
      this.minRecharge = Math.max(MIN_CREDIT_PURCHASE_USD, this.data.config.minRecharge || MIN_CREDIT_PURCHASE_USD);
      this.selectedCardId = this.data.config.cardId;
    }
    if (this.data?.cards?.length) {
      this.data.cards.sort((a, b) => (Number(b.isDefault) || 0) - (Number(a.isDefault) || 0));
      if (!this.selectedCardId) {
        this.selectedCardId = this.data.cards[0]._id;
      }
    }
  }
  selectCard(cardId) {
    if (!this.loading) {
      this.selectedCardId = cardId;
    }
  }
  getCardLogo(brand) {
    const logos = {
      visa: "https://cdn.verifik.co/assets/billing-svg/VisaLogo.svg",
      mastercard: "https://cdn.verifik.co/assets/billing-svg/MasterCardLogo.svg",
      amex: "https://cdn.verifik.co/assets/billing-svg/AmericanExpressLogo.svg"
    };
    return logos[brand?.toLowerCase()] || "";
  }
  close() {
    this._dialogRef.close();
  }
  save() {
    if (this.enabled && !this.selectedCardId) {
      this.error = this._transloco.translate("addCredits.autoRecharge.dialog.errors.selectCard");
      return;
    }
    if (this.enabled) {
      if (this.minRecharge < MIN_CREDIT_PURCHASE_USD || this.minRecharge > MAX_CREDIT_PURCHASE_USD) {
        this.error = this._transloco.translate("addCredits.autoRecharge.dialog.errors.rechargeRange");
        return;
      }
      if (this.minThreshold < 10 || this.minThreshold > 1990) {
        this.error = this._transloco.translate("addCredits.autoRecharge.dialog.errors.thresholdRange");
        return;
      }
    }
    this.loading = true;
    this.error = null;
    const config = {
      hasAutoCharge: this.enabled,
      minThreshold: this.minThreshold,
      minRecharge: this.minRecharge,
      cardId: this.enabled ? this.selectedCardId : void 0
    };
    this._creditsService.updateAutoRechargeConfig(config).subscribe({
      next: () => {
        this.loading = false;
        this._dialogRef.close("success");
      },
      error: (err) => {
        this.loading = false;
        this.error = err.error?.message || this._transloco.translate("addCredits.autoRecharge.dialog.errors.saveFailed");
      }
    });
  }
  static {
    this.\u0275fac = function AutoRechargeSettingsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AutoRechargeSettingsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AutoRechargeSettingsComponent, selectors: [["app-auto-recharge-settings"]], decls: 29, vars: 23, consts: [[1, "flex", "w-full", "max-w-lg", "flex-col", "overflow-hidden", "rounded-2xl", "border", "border-stone-200/90", "bg-white", "shadow-sm", "dark:border-gray-800", "dark:bg-gray-900/70"], [1, "border-b", "border-stone-200/90", "px-5", "py-5", "dark:border-gray-800", "md:p-6"], [1, "text-xl", "font-semibold", "tracking-tight", "text-stone-950", "dark:text-white"], [1, "mt-2", "text-sm", "leading-6", "text-stone-500", "dark:text-stone-400"], [1, "!flex", "!max-h-[min(62vh,520px)]", "!flex-col", "!gap-5", "!overflow-y-auto", "px-5", "py-5", "dark:text-stone-100", "md:p-6"], ["class", "flex gap-3 rounded-xl border border-red-200/80 bg-red-50 px-4 py-3 text-sm dark:border-red-900/50 dark:bg-red-950/30", "role", "alert", 4, "ngIf"], [1, "flex", "items-center", "justify-between", "gap-4", "rounded-xl", "border", "px-4", "py-3", "transition", 3, "ngClass"], [1, "min-w-0"], [1, "text-sm", "font-semibold", "text-stone-950", "dark:text-white"], [1, "mt-0.5", "text-xs", "leading-relaxed", "text-stone-500", "dark:text-stone-400"], [1, "relative", "inline-flex", "shrink-0", "cursor-pointer", "items-center"], ["type", "checkbox", 1, "peer", "sr-only", 3, "ngModelChange", "ngModel"], [1, "relative", "h-6", "w-11", "rounded-full", "bg-stone-300", "transition", "peer-checked:bg-indigo-600", "peer-focus-visible:ring-2", "peer-focus-visible:ring-indigo-500/40", "after:absolute", "after:left-[2px]", "after:top-[2px]", "after:h-5", "after:w-5", "after:rounded-full", "after:bg-white", "after:transition-all", "after:content-['']", "peer-checked:after:translate-x-5", "dark:bg-gray-600", "dark:peer-checked:bg-indigo-500"], ["class", "flex flex-col gap-5", 4, "ngIf"], [1, "flex", "flex-col-reverse", "gap-2", "border-t", "border-stone-200/90", "px-5", "py-4", "dark:border-gray-800", "sm:flex-row", "sm:justify-end", "sm:gap-3", "md:px-6"], ["mat-stroked-button", "", "type", "button", 1, "!min-h-11", "w-full", "!rounded-xl", "!border-stone-200", "!font-medium", "sm:w-auto", "dark:!border-gray-700", 3, "click", "disabled"], ["mat-flat-button", "", "color", "primary", "type", "button", 1, "flex", "!min-h-11", "w-full", "shrink-0", "items-center", "justify-center", "gap-2", "!rounded-xl", "px-5", "sm:w-auto", 3, "click", "disabled"], ["diameter", "20", "class", "inline-block", 4, "ngIf"], [4, "ngIf"], ["role", "alert", 1, "flex", "gap-3", "rounded-xl", "border", "border-red-200/80", "bg-red-50", "px-4", "py-3", "text-sm", "dark:border-red-900/50", "dark:bg-red-950/30"], [1, "shrink-0", "text-red-600", "dark:text-red-400", 2, "font-size", "20px", "width", "20px", "height", "20px"], [1, "m-0", "flex-1", "leading-relaxed", "text-red-950", "dark:text-red-100"], [1, "flex", "flex-col", "gap-5"], [1, "grid", "grid-cols-1", "gap-4", "sm:grid-cols-2"], [1, "flex", "flex-col", "gap-2"], [1, "flex", "items-center", "gap-2", "rounded-xl", "border", "border-stone-200", "bg-stone-50/80", "px-3", "py-2", "focus-within:border-indigo-400", "focus-within:ring-2", "focus-within:ring-indigo-500/20", "dark:border-gray-700", "dark:bg-gray-950/50", "dark:focus-within:border-indigo-400", "dark:focus-within:ring-indigo-400/20"], [1, "text-sm", "font-semibold", "text-stone-400", "dark:text-stone-500"], ["type", "number", "placeholder", "10", "min", "10", "max", "1990", 1, "min-w-0", "flex-1", "border-0", "bg-transparent", "text-base", "font-semibold", "text-stone-950", "outline-none", "dark:text-white", 3, "ngModelChange", "ngModel"], [1, "text-xs", "font-semibold", "uppercase", "tracking-wide", "text-stone-400", "dark:text-stone-500"], [1, "text-xs", "leading-relaxed", "text-stone-500", "dark:text-stone-400"], ["type", "number", 1, "min-w-0", "flex-1", "border-0", "bg-transparent", "text-base", "font-semibold", "text-stone-950", "outline-none", "dark:text-white", 3, "ngModelChange", "ngModel", "min", "max"], ["class", "flex flex-col gap-2", 4, "ngIf"], ["type", "button", "class", "flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-left transition", 3, "ngClass", "disabled", "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "flex", "w-full", "items-center", "gap-3", "rounded-xl", "border", "px-4", "py-3", "text-left", "transition", 3, "click", "ngClass", "disabled"], [1, "flex", "h-10", "w-[4.75rem]", "shrink-0", "items-center", "justify-center", "rounded-md", "border", "border-stone-200", "bg-white", "px-2", "dark:border-gray-600", "dark:bg-gray-900"], [1, "max-h-[1.125rem]", "w-auto", "max-w-full", "object-contain", 3, "src", "alt"], [1, "min-w-0", "flex-1"], [1, "block", "truncate", "font-medium", "tabular-nums", "text-stone-900", "dark:text-stone-100"], [1, "mt-0.5", "block", "truncate", "text-xs", "text-stone-500", "dark:text-stone-400"], ["class", "shrink-0 rounded-md bg-emerald-50 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400", 4, "ngIf"], [1, "shrink-0", "rounded-md", "bg-emerald-50", "px-2", "py-0.5", "text-[11px]", "font-semibold", "uppercase", "tracking-wide", "text-emerald-700", "dark:bg-emerald-950/40", "dark:text-emerald-400"], ["diameter", "20", 1, "inline-block"]], template: function AutoRechargeSettingsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "h2", 2);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6);
        \u0275\u0275pipe(7, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "mat-dialog-content", 4);
        \u0275\u0275template(9, AutoRechargeSettingsComponent_div_9_Template, 5, 1, "div", 5);
        \u0275\u0275elementStart(10, "div", 6)(11, "div", 7)(12, "p", 8);
        \u0275\u0275text(13);
        \u0275\u0275pipe(14, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "p", 9);
        \u0275\u0275text(16);
        \u0275\u0275pipe(17, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "label", 10)(19, "input", 11);
        \u0275\u0275twoWayListener("ngModelChange", function AutoRechargeSettingsComponent_Template_input_ngModelChange_19_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.enabled, $event) || (ctx.enabled = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275element(20, "span", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(21, AutoRechargeSettingsComponent_div_21_Template, 29, 18, "div", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "div", 14)(23, "button", 15);
        \u0275\u0275listener("click", function AutoRechargeSettingsComponent_Template_button_click_23_listener() {
          return ctx.close();
        });
        \u0275\u0275text(24);
        \u0275\u0275pipe(25, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "button", 16);
        \u0275\u0275listener("click", function AutoRechargeSettingsComponent_Template_button_click_26_listener() {
          return ctx.save();
        });
        \u0275\u0275template(27, AutoRechargeSettingsComponent_mat_spinner_27_Template, 1, 0, "mat-spinner", 17)(28, AutoRechargeSettingsComponent_span_28_Template, 3, 3, "span", 18);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 13, "addCredits.autoRecharge.dialog.title"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 15, "addCredits.autoRecharge.dialog.subtitle"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.error);
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", ctx.enabled ? "border-indigo-400 bg-indigo-50/50 ring-2 ring-indigo-500/20 dark:border-indigo-400 dark:bg-indigo-950/20 dark:ring-indigo-400/20" : "border-stone-200 bg-stone-50/50 dark:border-gray-700 dark:bg-gray-950/50");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 17, "addCredits.autoRecharge.dialog.enable"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 19, "addCredits.autoRecharge.dialog.enableDesc"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.enabled);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.enabled);
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(25, 21, "addCredits.autoRecharge.dialog.cancel"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, TitleCasePipe, FormsModule, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, NgControlStatus, MinValidator, MaxValidator, NgModel, MatDialogModule, MatDialogContent, MatButtonModule, MatButton, MatIconModule, MatIcon, TranslocoModule, TranslocoPipe, MatProgressSpinnerModule, MatProgressSpinner], styles: ["/* src/app/modules/add-credits/auto-recharge-settings/auto-recharge-settings.component.scss */\n.auto-recharge-dialog-panel.cdk-overlay-pane {\n  max-width: min(560px, 92vw);\n}\n.auto-recharge-dialog-panel .mat-mdc-dialog-container {\n  padding: 0 !important;\n  overflow: hidden;\n  border-radius: 1rem;\n}\n.auto-recharge-dialog-panel .mat-mdc-dialog-surface {\n  border-radius: 1rem !important;\n  overflow: hidden;\n  background: transparent !important;\n  box-shadow: 0 4px 6px -1px rgba(15, 23, 42, 0.08), 0 2px 4px -2px rgba(15, 23, 42, 0.08);\n}\n.dark .auto-recharge-dialog-panel .mat-mdc-dialog-surface {\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.35), 0 2px 4px -2px rgba(0, 0, 0, 0.25);\n}\n/*# sourceMappingURL=auto-recharge-settings.component.css.map */\n"], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AutoRechargeSettingsComponent, [{
    type: Component,
    args: [{ selector: "app-auto-recharge-settings", standalone: true, imports: [
      CommonModule,
      FormsModule,
      MatDialogModule,
      MatButtonModule,
      MatIconModule,
      TranslocoModule,
      MatProgressSpinnerModule
    ], encapsulation: ViewEncapsulation.None, template: `<div\r
    class="flex w-full max-w-lg flex-col overflow-hidden rounded-2xl border border-stone-200/90 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900/70"\r
>\r
    <header class="border-b border-stone-200/90 px-5 py-5 dark:border-gray-800 md:p-6">\r
        <h2 class="text-xl font-semibold tracking-tight text-stone-950 dark:text-white">\r
            {{ 'addCredits.autoRecharge.dialog.title' | transloco }}\r
        </h2>\r
        <p class="mt-2 text-sm leading-6 text-stone-500 dark:text-stone-400">\r
            {{ 'addCredits.autoRecharge.dialog.subtitle' | transloco }}\r
        </p>\r
    </header>\r
\r
    <mat-dialog-content\r
        class="!flex !max-h-[min(62vh,520px)] !flex-col !gap-5 !overflow-y-auto px-5 py-5 dark:text-stone-100 md:p-6"\r
    >\r
        <div\r
            *ngIf="error"\r
            class="flex gap-3 rounded-xl border border-red-200/80 bg-red-50 px-4 py-3 text-sm dark:border-red-900/50 dark:bg-red-950/30"\r
            role="alert"\r
        >\r
            <mat-icon class="shrink-0 text-red-600 dark:text-red-400" style="font-size: 20px; width: 20px; height: 20px"\r
                >error_outline</mat-icon\r
            >\r
            <p class="m-0 flex-1 leading-relaxed text-red-950 dark:text-red-100">{{ error }}</p>\r
        </div>\r
\r
        <!-- Enable toggle -->\r
        <div\r
            class="flex items-center justify-between gap-4 rounded-xl border px-4 py-3 transition"\r
            [ngClass]="\r
                enabled\r
                    ? 'border-indigo-400 bg-indigo-50/50 ring-2 ring-indigo-500/20 dark:border-indigo-400 dark:bg-indigo-950/20 dark:ring-indigo-400/20'\r
                    : 'border-stone-200 bg-stone-50/50 dark:border-gray-700 dark:bg-gray-950/50'\r
            "\r
        >\r
            <div class="min-w-0">\r
                <p class="text-sm font-semibold text-stone-950 dark:text-white">\r
                    {{ 'addCredits.autoRecharge.dialog.enable' | transloco }}\r
                </p>\r
                <p class="mt-0.5 text-xs leading-relaxed text-stone-500 dark:text-stone-400">\r
                    {{ 'addCredits.autoRecharge.dialog.enableDesc' | transloco }}\r
                </p>\r
            </div>\r
            <label class="relative inline-flex shrink-0 cursor-pointer items-center">\r
                <input type="checkbox" class="peer sr-only" [(ngModel)]="enabled" />\r
                <span\r
                    class="relative h-6 w-11 rounded-full bg-stone-300 transition peer-checked:bg-indigo-600 peer-focus-visible:ring-2 peer-focus-visible:ring-indigo-500/40 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-5 dark:bg-gray-600 dark:peer-checked:bg-indigo-500"\r
                ></span>\r
            </label>\r
        </div>\r
\r
        <div *ngIf="enabled" class="flex flex-col gap-5">\r
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">\r
                <div class="flex flex-col gap-2">\r
                    <label class="text-sm font-semibold text-stone-950 dark:text-white">\r
                        {{ 'addCredits.autoRecharge.dialog.balanceThreshold' | transloco }}\r
                    </label>\r
                    <div\r
                        class="flex items-center gap-2 rounded-xl border border-stone-200 bg-stone-50/80 px-3 py-2 focus-within:border-indigo-400 focus-within:ring-2 focus-within:ring-indigo-500/20 dark:border-gray-700 dark:bg-gray-950/50 dark:focus-within:border-indigo-400 dark:focus-within:ring-indigo-400/20"\r
                    >\r
                        <span class="text-sm font-semibold text-stone-400 dark:text-stone-500">$</span>\r
                        <input\r
                            type="number"\r
                            class="min-w-0 flex-1 border-0 bg-transparent text-base font-semibold text-stone-950 outline-none dark:text-white"\r
                            [(ngModel)]="minThreshold"\r
                            placeholder="10"\r
                            min="10"\r
                            max="1990"\r
                        />\r
                        <span class="text-xs font-semibold uppercase tracking-wide text-stone-400 dark:text-stone-500"\r
                            >USD</span\r
                        >\r
                    </div>\r
                    <p class="text-xs leading-relaxed text-stone-500 dark:text-stone-400">\r
                        {{ 'addCredits.autoRecharge.dialog.balanceThresholdHint' | transloco }}\r
                    </p>\r
                </div>\r
\r
                <div class="flex flex-col gap-2">\r
                    <label class="text-sm font-semibold text-stone-950 dark:text-white">\r
                        {{ 'addCredits.autoRecharge.dialog.rechargeAmount' | transloco }}\r
                    </label>\r
                    <div\r
                        class="flex items-center gap-2 rounded-xl border border-stone-200 bg-stone-50/80 px-3 py-2 focus-within:border-indigo-400 focus-within:ring-2 focus-within:ring-indigo-500/20 dark:border-gray-700 dark:bg-gray-950/50 dark:focus-within:border-indigo-400 dark:focus-within:ring-indigo-400/20"\r
                    >\r
                        <span class="text-sm font-semibold text-stone-400 dark:text-stone-500">$</span>\r
                        <input\r
                            type="number"\r
                            class="min-w-0 flex-1 border-0 bg-transparent text-base font-semibold text-stone-950 outline-none dark:text-white"\r
                            [(ngModel)]="minRecharge"\r
                            [attr.placeholder]="minRechargeUsd"\r
                            [min]="minRechargeUsd"\r
                            [max]="maxRechargeUsd"\r
                        />\r
                        <span class="text-xs font-semibold uppercase tracking-wide text-stone-400 dark:text-stone-500"\r
                            >USD</span\r
                        >\r
                    </div>\r
                    <p class="text-xs leading-relaxed text-stone-500 dark:text-stone-400">\r
                        {{ 'addCredits.autoRecharge.dialog.rechargeAmountHint' | transloco }}\r
                    </p>\r
                </div>\r
            </div>\r
\r
            <section *ngIf="data?.cards?.length" class="flex flex-col gap-2">\r
                <label class="text-sm font-semibold text-stone-950 dark:text-white">\r
                    {{ 'addCredits.autoRecharge.dialog.paymentMethod' | transloco }}\r
                </label>\r
\r
                <button\r
                    *ngFor="let card of data.cards"\r
                    type="button"\r
                    class="flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-left transition"\r
                    [ngClass]="{\r
                        'border-indigo-400 bg-indigo-50/50 ring-2 ring-indigo-500/20 dark:border-indigo-400 dark:bg-indigo-950/20 dark:ring-indigo-400/20':\r
                            selectedCardId === card._id,\r
                        'border-stone-200 bg-white hover:border-stone-300 dark:border-gray-700 dark:bg-gray-950/50 dark:hover:border-gray-600':\r
                            selectedCardId !== card._id,\r
                    }"\r
                    (click)="selectCard(card._id)"\r
                    [disabled]="loading"\r
                >\r
                    <div\r
                        class="flex h-10 w-[4.75rem] shrink-0 items-center justify-center rounded-md border border-stone-200 bg-white px-2 dark:border-gray-600 dark:bg-gray-900"\r
                    >\r
                        <img\r
                            [src]="getCardLogo(card.brand)"\r
                            [alt]="card.brand"\r
                            class="max-h-[1.125rem] w-auto max-w-full object-contain"\r
                        />\r
                    </div>\r
\r
                    <div class="min-w-0 flex-1">\r
                        <span class="block truncate font-medium tabular-nums text-stone-900 dark:text-stone-100">\r
                            \u2022\u2022\u2022\u2022 {{ card.lastFour }}\r
                        </span>\r
                        <span class="mt-0.5 block truncate text-xs text-stone-500 dark:text-stone-400">\r
                            {{ card.brand | titlecase }}\r
                        </span>\r
                    </div>\r
\r
                    <span\r
                        *ngIf="card.isDefault"\r
                        class="shrink-0 rounded-md bg-emerald-50 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400"\r
                    >\r
                        {{ 'addCredits.autoRecharge.dialog.default' | transloco }}\r
                    </span>\r
                </button>\r
            </section>\r
        </div>\r
    </mat-dialog-content>\r
\r
    <div\r
        class="flex flex-col-reverse gap-2 border-t border-stone-200/90 px-5 py-4 dark:border-gray-800 sm:flex-row sm:justify-end sm:gap-3 md:px-6"\r
    >\r
        <button\r
            mat-stroked-button\r
            type="button"\r
            class="!min-h-11 w-full !rounded-xl !border-stone-200 !font-medium sm:w-auto dark:!border-gray-700"\r
            (click)="close()"\r
            [disabled]="loading"\r
        >\r
            {{ 'addCredits.autoRecharge.dialog.cancel' | transloco }}\r
        </button>\r
        <button\r
            mat-flat-button\r
            color="primary"\r
            type="button"\r
            class="flex !min-h-11 w-full shrink-0 items-center justify-center gap-2 !rounded-xl px-5 sm:w-auto"\r
            (click)="save()"\r
            [disabled]="loading"\r
        >\r
            <mat-spinner *ngIf="loading" diameter="20" class="inline-block"></mat-spinner>\r
            <span *ngIf="!loading">{{ 'addCredits.autoRecharge.dialog.saveSettings' | transloco }}</span>\r
        </button>\r
    </div>\r
</div>\r
`, styles: ["/* src/app/modules/add-credits/auto-recharge-settings/auto-recharge-settings.component.scss */\n.auto-recharge-dialog-panel.cdk-overlay-pane {\n  max-width: min(560px, 92vw);\n}\n.auto-recharge-dialog-panel .mat-mdc-dialog-container {\n  padding: 0 !important;\n  overflow: hidden;\n  border-radius: 1rem;\n}\n.auto-recharge-dialog-panel .mat-mdc-dialog-surface {\n  border-radius: 1rem !important;\n  overflow: hidden;\n  background: transparent !important;\n  box-shadow: 0 4px 6px -1px rgba(15, 23, 42, 0.08), 0 2px 4px -2px rgba(15, 23, 42, 0.08);\n}\n.dark .auto-recharge-dialog-panel .mat-mdc-dialog-surface {\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.35), 0 2px 4px -2px rgba(0, 0, 0, 0.25);\n}\n/*# sourceMappingURL=auto-recharge-settings.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AutoRechargeSettingsComponent, { className: "AutoRechargeSettingsComponent", filePath: "src/app/modules/add-credits/auto-recharge-settings/auto-recharge-settings.component.ts", lineNumber: 33 });
})();

// src/app/modules/add-credits/payment-card/payment-card.component.ts
var _c02 = (a0, a1, a2) => ({ "cursor-pointer border-indigo-400 bg-indigo-50/50 ring-2 ring-indigo-500/20 dark:border-indigo-400 dark:bg-indigo-950/20 dark:ring-indigo-400/20": a0, "border-stone-200 bg-white hover:border-stone-300 dark:border-gray-700 dark:bg-gray-950/50 dark:hover:border-gray-600": a1, "border-red-200 bg-red-50/50 dark:border-red-900/60 dark:bg-red-950/20": a2 });
function PaymentCardComponent_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14)(1, "mat-icon", 15);
    \u0275\u0275text(2, "warning");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "addCredits.paymentMethods.cardExpired"), " ");
  }
}
function PaymentCardComponent_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "addCredits.paymentMethods.cardDefault"), " ");
  }
}
function PaymentCardComponent_button_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function PaymentCardComponent_button_16_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSetDefaultClick($event));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "addCredits.paymentMethods.setDefault"), " ");
  }
}
var PaymentCardComponent = class _PaymentCardComponent {
  constructor() {
    this.isDefault = false;
    this.setDefault = new EventEmitter();
    this.delete = new EventEmitter();
    this._dialog = inject(MatDialog);
  }
  getCardLogo(brand) {
    const logos = {
      visa: "https://cdn.verifik.co/assets/billing-svg/VisaLogo.svg",
      mastercard: "https://cdn.verifik.co/assets/billing-svg/MasterCardLogo.svg",
      amex: "https://cdn.verifik.co/assets/billing-svg/AmericanExpressLogo.svg"
    };
    return logos[brand.toLowerCase()] || "";
  }
  isExpired(expiresAt) {
    const currentDate = DateTime.now();
    const targetDate = DateTime.fromFormat(expiresAt, "yyyy-MM");
    return currentDate > targetDate;
  }
  onSetDefault() {
    if (!this.isDefault && !this.isExpired(this.card.expires_at)) {
      this.setDefault.emit(this.card._id);
    }
  }
  onRowClick(event) {
    if (this.isDefault || this.isExpired(this.card.expires_at)) {
      return;
    }
    const target = event.target;
    if (target.closest("button")) {
      return;
    }
    this.onSetDefault();
  }
  onRowKeydown(event) {
    event.preventDefault();
    this.onSetDefault();
  }
  onSetDefaultClick(event) {
    event.stopPropagation();
    this.onSetDefault();
  }
  onDeleteClick(event) {
    event.stopPropagation();
    const confirmed = confirm("Are you sure you want to delete this payment card?");
    if (confirmed) {
      this.delete.emit(this.card._id);
    }
  }
  static {
    this.\u0275fac = function PaymentCardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PaymentCardComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PaymentCardComponent, selectors: [["app-payment-card"]], inputs: { card: "card", isDefault: "isDefault" }, outputs: { setDefault: "setDefault", delete: "delete" }, decls: 21, vars: 22, consts: [[1, "group", "flex", "items-center", "gap-3", "rounded-xl", "border", "px-4", "py-3", "transition", 3, "click", "keydown.enter", "keydown.space", "ngClass"], [1, "flex", "h-10", "w-[4.75rem]", "shrink-0", "items-center", "justify-center", "rounded-md", "border", "border-stone-200", "bg-white", "px-2", "dark:border-gray-600", "dark:bg-gray-900"], [1, "max-h-[1.125rem]", "w-auto", "max-w-full", "object-contain", 3, "src", "alt"], [1, "min-w-0", "flex-1"], [1, "flex", "flex-wrap", "items-center", "gap-2"], [1, "truncate", "font-medium", "tabular-nums", "text-stone-900", "dark:text-stone-100"], ["class", "inline-flex shrink-0 items-center gap-1 rounded-md bg-red-100 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-red-700 dark:bg-red-950/40 dark:text-red-400", 4, "ngIf"], [1, "mt-0.5", "truncate", "text-xs", "text-stone-500", "dark:text-stone-400"], [1, "text-stone-400", "dark:text-stone-500"], [1, "flex", "shrink-0", "items-center", "gap-1"], ["class", "rounded-md bg-emerald-50 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400", 4, "ngIf"], ["type", "button", "class", "hidden min-h-8 items-center rounded-lg px-2.5 text-xs font-medium text-indigo-600 transition hover:bg-indigo-50 sm:inline-flex dark:text-indigo-400 dark:hover:bg-indigo-950/40", 3, "click", 4, "ngIf"], ["type", "button", "matTooltipPosition", "above", 1, "inline-flex", "min-h-8", "min-w-8", "items-center", "justify-center", "rounded-lg", "text-stone-400", "transition", "hover:bg-stone-100", "hover:text-red-600", "disabled:cursor-not-allowed", "disabled:opacity-30", "disabled:hover:bg-transparent", "disabled:hover:text-stone-400", "dark:text-stone-500", "dark:hover:bg-gray-800", "dark:hover:text-red-400", "dark:disabled:hover:bg-transparent", "dark:disabled:hover:text-stone-500", 3, "click", "disabled", "matTooltip"], [1, "!h-[18px]", "!w-[18px]", "!text-[18px]"], [1, "inline-flex", "shrink-0", "items-center", "gap-1", "rounded-md", "bg-red-100", "px-2", "py-0.5", "text-[11px]", "font-semibold", "uppercase", "tracking-wide", "text-red-700", "dark:bg-red-950/40", "dark:text-red-400"], [1, "!h-3", "!w-3", "!text-[12px]"], [1, "rounded-md", "bg-emerald-50", "px-2", "py-0.5", "text-[11px]", "font-semibold", "uppercase", "tracking-wide", "text-emerald-700", "dark:bg-emerald-950/40", "dark:text-emerald-400"], ["type", "button", 1, "hidden", "min-h-8", "items-center", "rounded-lg", "px-2.5", "text-xs", "font-medium", "text-indigo-600", "transition", "hover:bg-indigo-50", "sm:inline-flex", "dark:text-indigo-400", "dark:hover:bg-indigo-950/40", 3, "click"]], template: function PaymentCardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275listener("click", function PaymentCardComponent_Template_div_click_0_listener($event) {
          return ctx.onRowClick($event);
        })("keydown.enter", function PaymentCardComponent_Template_div_keydown_enter_0_listener($event) {
          return ctx.onRowKeydown($event);
        })("keydown.space", function PaymentCardComponent_Template_div_keydown_space_0_listener($event) {
          return ctx.onRowKeydown($event);
        });
        \u0275\u0275elementStart(1, "div", 1);
        \u0275\u0275element(2, "img", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "span", 5);
        \u0275\u0275text(6);
        \u0275\u0275elementEnd();
        \u0275\u0275template(7, PaymentCardComponent_span_7_Template, 5, 3, "span", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p", 7);
        \u0275\u0275text(9);
        \u0275\u0275elementStart(10, "span", 8);
        \u0275\u0275text(11, "\xB7");
        \u0275\u0275elementEnd();
        \u0275\u0275text(12);
        \u0275\u0275pipe(13, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 9);
        \u0275\u0275template(15, PaymentCardComponent_span_15_Template, 3, 3, "span", 10)(16, PaymentCardComponent_button_16_Template, 3, 3, "button", 11);
        \u0275\u0275elementStart(17, "button", 12);
        \u0275\u0275pipe(18, "transloco");
        \u0275\u0275listener("click", function PaymentCardComponent_Template_button_click_17_listener($event) {
          return ctx.onDeleteClick($event);
        });
        \u0275\u0275elementStart(19, "mat-icon", 13);
        \u0275\u0275text(20, "delete_outline");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(18, _c02, ctx.isDefault && !ctx.isExpired(ctx.card.expires_at), !ctx.isDefault && !ctx.isExpired(ctx.card.expires_at), ctx.isExpired(ctx.card.expires_at)));
        \u0275\u0275attribute("role", !ctx.isDefault && !ctx.isExpired(ctx.card.expires_at) ? "button" : null)("tabindex", !ctx.isDefault && !ctx.isExpired(ctx.card.expires_at) ? 0 : null);
        \u0275\u0275advance(2);
        \u0275\u0275property("src", ctx.getCardLogo(ctx.card.brand), \u0275\u0275sanitizeUrl)("alt", ctx.card.brand);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" \u2022\u2022\u2022\u2022 ", ctx.card.lastFour, " ");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isExpired(ctx.card.expires_at));
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", ctx.card.name, " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(13, 14, "addCredits.paymentMethods.expires"), " ", ctx.card.expires_at, " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.isDefault && !ctx.isExpired(ctx.card.expires_at));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isDefault && !ctx.isExpired(ctx.card.expires_at));
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.isDefault)("matTooltip", \u0275\u0275pipeBind1(18, 16, "addCredits.paymentMethods.deleteCard"));
      }
    }, dependencies: [CommonModule, NgClass, NgIf, MatButtonModule, MatIconModule, MatIcon, MatTooltipModule, MatTooltip, MatDialogModule, TranslocoModule, TranslocoPipe], styles: ["/* src/app/modules/add-credits/payment-card/payment-card.component.scss */\n:host {\n  display: block;\n}\n/*# sourceMappingURL=payment-card.component.css.map */\n"], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaymentCardComponent, [{
    type: Component,
    args: [{ selector: "app-payment-card", standalone: true, imports: [CommonModule, MatButtonModule, MatIconModule, MatTooltipModule, MatDialogModule, TranslocoModule], encapsulation: ViewEncapsulation.None, template: `<div\r
    class="group flex items-center gap-3 rounded-xl border px-4 py-3 transition"\r
    [ngClass]="{\r
        'cursor-pointer border-indigo-400 bg-indigo-50/50 ring-2 ring-indigo-500/20 dark:border-indigo-400 dark:bg-indigo-950/20 dark:ring-indigo-400/20':\r
            isDefault && !isExpired(card.expires_at),\r
        'border-stone-200 bg-white hover:border-stone-300 dark:border-gray-700 dark:bg-gray-950/50 dark:hover:border-gray-600':\r
            !isDefault && !isExpired(card.expires_at),\r
        'border-red-200 bg-red-50/50 dark:border-red-900/60 dark:bg-red-950/20': isExpired(card.expires_at),\r
    }"\r
    [attr.role]="!isDefault && !isExpired(card.expires_at) ? 'button' : null"\r
    [attr.tabindex]="!isDefault && !isExpired(card.expires_at) ? 0 : null"\r
    (click)="onRowClick($event)"\r
    (keydown.enter)="onRowKeydown($event)"\r
    (keydown.space)="onRowKeydown($event)"\r
>\r
    <!-- Brand logo -->\r
    <div\r
        class="flex h-10 w-[4.75rem] shrink-0 items-center justify-center rounded-md border border-stone-200 bg-white px-2 dark:border-gray-600 dark:bg-gray-900"\r
    >\r
        <img\r
            [src]="getCardLogo(card.brand)"\r
            [alt]="card.brand"\r
            class="max-h-[1.125rem] w-auto max-w-full object-contain"\r
        />\r
    </div>\r
\r
    <!-- Card details -->\r
    <div class="min-w-0 flex-1">\r
        <div class="flex flex-wrap items-center gap-2">\r
            <span class="truncate font-medium tabular-nums text-stone-900 dark:text-stone-100">\r
                \u2022\u2022\u2022\u2022 {{ card.lastFour }}\r
            </span>\r
            <span\r
                *ngIf="isExpired(card.expires_at)"\r
                class="inline-flex shrink-0 items-center gap-1 rounded-md bg-red-100 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-red-700 dark:bg-red-950/40 dark:text-red-400"\r
            >\r
                <mat-icon class="!h-3 !w-3 !text-[12px]">warning</mat-icon>\r
                {{ 'addCredits.paymentMethods.cardExpired' | transloco }}\r
            </span>\r
        </div>\r
        <p class="mt-0.5 truncate text-xs text-stone-500 dark:text-stone-400">\r
            {{ card.name }}\r
            <span class="text-stone-400 dark:text-stone-500">\xB7</span>\r
            {{ 'addCredits.paymentMethods.expires' | transloco }} {{ card.expires_at }}\r
        </p>\r
    </div>\r
\r
    <!-- Actions -->\r
    <div class="flex shrink-0 items-center gap-1">\r
        <span\r
            *ngIf="isDefault && !isExpired(card.expires_at)"\r
            class="rounded-md bg-emerald-50 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400"\r
        >\r
            {{ 'addCredits.paymentMethods.cardDefault' | transloco }}\r
        </span>\r
\r
        <button\r
            *ngIf="!isDefault && !isExpired(card.expires_at)"\r
            type="button"\r
            class="hidden min-h-8 items-center rounded-lg px-2.5 text-xs font-medium text-indigo-600 transition hover:bg-indigo-50 sm:inline-flex dark:text-indigo-400 dark:hover:bg-indigo-950/40"\r
            (click)="onSetDefaultClick($event)"\r
        >\r
            {{ 'addCredits.paymentMethods.setDefault' | transloco }}\r
        </button>\r
\r
        <button\r
            type="button"\r
            class="inline-flex min-h-8 min-w-8 items-center justify-center rounded-lg text-stone-400 transition hover:bg-stone-100 hover:text-red-600 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-stone-400 dark:text-stone-500 dark:hover:bg-gray-800 dark:hover:text-red-400 dark:disabled:hover:bg-transparent dark:disabled:hover:text-stone-500"\r
            (click)="onDeleteClick($event)"\r
            [disabled]="isDefault"\r
            [matTooltip]="'addCredits.paymentMethods.deleteCard' | transloco"\r
            matTooltipPosition="above"\r
        >\r
            <mat-icon class="!h-[18px] !w-[18px] !text-[18px]">delete_outline</mat-icon>\r
        </button>\r
    </div>\r
</div>\r
`, styles: ["/* src/app/modules/add-credits/payment-card/payment-card.component.scss */\n:host {\n  display: block;\n}\n/*# sourceMappingURL=payment-card.component.css.map */\n"] }]
  }], null, { card: [{
    type: Input
  }], isDefault: [{
    type: Input
  }], setDefault: [{
    type: Output
  }], delete: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PaymentCardComponent, { className: "PaymentCardComponent", filePath: "src/app/modules/add-credits/payment-card/payment-card.component.ts", lineNumber: 19 });
})();

// node_modules/@stripe/stripe-js/dist/index.mjs
var V3_URL = "https://js.stripe.com/v3";
var V3_URL_REGEX = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/;
var EXISTING_SCRIPT_MESSAGE = "loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used";
var findScript = function findScript2() {
  var scripts = document.querySelectorAll('script[src^="'.concat(V3_URL, '"]'));
  for (var i = 0; i < scripts.length; i++) {
    var script = scripts[i];
    if (!V3_URL_REGEX.test(script.src)) {
      continue;
    }
    return script;
  }
  return null;
};
var injectScript = function injectScript2(params) {
  var queryString = params && !params.advancedFraudSignals ? "?advancedFraudSignals=false" : "";
  var script = document.createElement("script");
  script.src = "".concat(V3_URL).concat(queryString);
  var headOrBody = document.head || document.body;
  if (!headOrBody) {
    throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");
  }
  headOrBody.appendChild(script);
  return script;
};
var registerWrapper = function registerWrapper2(stripe, startTime) {
  if (!stripe || !stripe._registerWrapper) {
    return;
  }
  stripe._registerWrapper({
    name: "stripe-js",
    version: "4.6.0",
    startTime
  });
};
var stripePromise = null;
var onErrorListener = null;
var onLoadListener = null;
var onError = function onError2(reject) {
  return function() {
    reject(new Error("Failed to load Stripe.js"));
  };
};
var onLoad = function onLoad2(resolve, reject) {
  return function() {
    if (window.Stripe) {
      resolve(window.Stripe);
    } else {
      reject(new Error("Stripe.js not available"));
    }
  };
};
var loadScript = function loadScript2(params) {
  if (stripePromise !== null) {
    return stripePromise;
  }
  stripePromise = new Promise(function(resolve, reject) {
    if (typeof window === "undefined" || typeof document === "undefined") {
      resolve(null);
      return;
    }
    if (window.Stripe && params) {
      console.warn(EXISTING_SCRIPT_MESSAGE);
    }
    if (window.Stripe) {
      resolve(window.Stripe);
      return;
    }
    try {
      var script = findScript();
      if (script && params) {
        console.warn(EXISTING_SCRIPT_MESSAGE);
      } else if (!script) {
        script = injectScript(params);
      } else if (script && onLoadListener !== null && onErrorListener !== null) {
        var _script$parentNode;
        script.removeEventListener("load", onLoadListener);
        script.removeEventListener("error", onErrorListener);
        (_script$parentNode = script.parentNode) === null || _script$parentNode === void 0 ? void 0 : _script$parentNode.removeChild(script);
        script = injectScript(params);
      }
      onLoadListener = onLoad(resolve, reject);
      onErrorListener = onError(reject);
      script.addEventListener("load", onLoadListener);
      script.addEventListener("error", onErrorListener);
    } catch (error) {
      reject(error);
      return;
    }
  });
  return stripePromise["catch"](function(error) {
    stripePromise = null;
    return Promise.reject(error);
  });
};
var initStripe = function initStripe2(maybeStripe, args, startTime) {
  if (maybeStripe === null) {
    return null;
  }
  var stripe = maybeStripe.apply(void 0, args);
  registerWrapper(stripe, startTime);
  return stripe;
};
var stripePromise$1;
var loadCalled = false;
var getStripePromise = function getStripePromise2() {
  if (stripePromise$1) {
    return stripePromise$1;
  }
  stripePromise$1 = loadScript(null)["catch"](function(error) {
    stripePromise$1 = null;
    return Promise.reject(error);
  });
  return stripePromise$1;
};
Promise.resolve().then(function() {
  return getStripePromise();
})["catch"](function(error) {
  if (!loadCalled) {
    console.warn(error);
  }
});
var loadStripe = function loadStripe2() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  loadCalled = true;
  var startTime = Date.now();
  return getStripePromise().then(function(maybeStripe) {
    return initStripe(maybeStripe, args, startTime);
  });
};

// src/app/modules/add-credits/purchase-credits-dialog/purchase-credits-dialog.component.ts
var _c03 = (a0, a1) => ({ "border-indigo-500 bg-indigo-50 text-indigo-700 shadow-sm ring-2 ring-indigo-500/20 dark:border-indigo-400 dark:bg-indigo-950/40 dark:text-indigo-200": a0, "border-stone-200 bg-transparent text-stone-900 hover:border-stone-300 dark:border-gray-700 dark:text-white dark:hover:border-gray-600": a1 });
var _c1 = (a0, a1, a2) => ({ payUsd: a0, receivedUsd: a1, multiplier: a2 });
var _c2 = (a0, a1) => ({ payUsd: a0, receivedUsd: a1 });
var _c3 = (a0, a1) => ({ "border-indigo-500 bg-indigo-50 ring-2 ring-indigo-500/20 dark:border-indigo-400 dark:bg-indigo-950/40": a0, "border-stone-200 hover:border-stone-300 dark:border-gray-700 dark:hover:border-gray-600": a1 });
var _c4 = (a0, a1) => ({ total: a0, rate: a1 });
function PurchaseCreditsDialogComponent_ng_container_1_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "mat-icon", 23);
    \u0275\u0275text(2, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 24);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.error);
  }
}
function PurchaseCreditsDialogComponent_ng_container_1_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 25);
    \u0275\u0275listener("click", function PurchaseCreditsDialogComponent_ng_container_1_button_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.expandAmounts());
    });
    \u0275\u0275elementStart(1, "span", 26);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 27);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementStart(6, "mat-icon", 28);
    \u0275\u0275text(7, "expand_more");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.loading);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" $", ctx_r1.selectedAmount, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 3, "addCredits.purchaseDialog.change"), " ");
  }
}
function PurchaseCreditsDialogComponent_ng_container_1_ng_container_15_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 36);
    \u0275\u0275listener("click", function PurchaseCreditsDialogComponent_ng_container_1_ng_container_15_button_2_Template_button_click_0_listener() {
      const amount_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.selectPresetAmount(amount_r6));
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const amount_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(3, _c03, ctx_r1.selectedAmount === amount_r6 && !ctx_r1.isCustomAmount, ctx_r1.selectedAmount !== amount_r6 || ctx_r1.isCustomAmount))("disabled", ctx_r1.loading);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", amount_r6, "");
  }
}
function PurchaseCreditsDialogComponent_ng_container_1_ng_container_15_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37)(1, "span", 38);
    \u0275\u0275text(2, "$");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 39);
    \u0275\u0275twoWayListener("ngModelChange", function PurchaseCreditsDialogComponent_ng_container_1_ng_container_15_div_10_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.customAmountValue, $event) || (ctx_r1.customAmountValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function PurchaseCreditsDialogComponent_ng_container_1_ng_container_15_div_10_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onCustomAmountChange($event));
    })("blur", function PurchaseCreditsDialogComponent_ng_container_1_ng_container_15_div_10_Template_input_blur_3_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onCustomAmountCommitted());
    })("keydown.enter", function PurchaseCreditsDialogComponent_ng_container_1_ng_container_15_div_10_Template_input_keydown_enter_3_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onCustomAmountCommitted());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.customAmountValue);
    \u0275\u0275property("min", ctx_r1.minPurchaseUsd)("max", ctx_r1.maxPurchaseUsd)("disabled", ctx_r1.loading);
    \u0275\u0275attribute("placeholder", ctx_r1.minPurchaseUsd);
  }
}
function PurchaseCreditsDialogComponent_ng_container_1_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 29);
    \u0275\u0275template(2, PurchaseCreditsDialogComponent_ng_container_1_ng_container_15_button_2_Template, 3, 6, "button", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 31)(4, "button", 32);
    \u0275\u0275listener("click", function PurchaseCreditsDialogComponent_ng_container_1_ng_container_15_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleCustomAmount());
    });
    \u0275\u0275elementStart(5, "mat-icon", 33);
    \u0275\u0275text(6, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(10, PurchaseCreditsDialogComponent_ng_container_1_ng_container_15_div_10_Template, 4, 5, "div", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 35);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "transloco");
    \u0275\u0275pipe(14, "transloco");
    \u0275\u0275pipe(15, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.creditAmounts);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("font-semibold", ctx_r1.isCustomAmount);
    \u0275\u0275property("disabled", ctx_r1.loading);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 9, "addCredits.purchaseDialog.customAmount"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.isCustomAmount);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" ", \u0275\u0275pipeBind1(13, 11, "addCredits.purchaseDialog.minimum"), " \xB7 ", \u0275\u0275pipeBind1(14, 13, "addCredits.purchaseDialog.maximum"), " $", \u0275\u0275pipeBind2(15, 15, ctx_r1.maxPurchaseUsd, "1.0-0"), " ");
  }
}
function PurchaseCreditsDialogComponent_ng_container_1_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40)(1, "mat-icon", 41);
    \u0275\u0275text(2, "celebration");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 42);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(5, 1, "addCredits.promo.bringBack.dialogMultiplied", \u0275\u0275pureFunction3(4, _c1, "$" + ctx_r1.selectedAmount, "$" + ctx_r1.bringBackReceivedAmount(), (ctx_r1.data == null ? null : ctx_r1.data.bringBackOffer == null ? null : ctx_r1.data.bringBackOffer.multiplier) || 2)), " ");
  }
}
function PurchaseCreditsDialogComponent_ng_container_1_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43)(1, "mat-icon", 44);
    \u0275\u0275text(2, "celebration");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 45);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(5, 1, "addCredits.promo.weekOneUsd50.dialogDouble", \u0275\u0275pureFunction2(4, _c2, "$" + ctx_r1.weekOneDoublePayAmount(), "$" + ctx_r1.weekOneDoubleReceivedAmount())), " ");
  }
}
function PurchaseCreditsDialogComponent_ng_container_1_button_23_img_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 53);
  }
  if (rf & 2) {
    const option_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", option_r9.logoSrc, \u0275\u0275sanitizeUrl)("alt", option_r9.logoAlt);
  }
}
function PurchaseCreditsDialogComponent_ng_container_1_button_23_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(option_r9.logoText);
  }
}
function PurchaseCreditsDialogComponent_ng_container_1_button_23_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 54);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementStart(3, "mat-icon", 28);
    \u0275\u0275text(4, "expand_more");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "addCredits.purchaseDialog.change"), " ");
  }
}
function PurchaseCreditsDialogComponent_ng_container_1_button_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 46);
    \u0275\u0275listener("click", function PurchaseCreditsDialogComponent_ng_container_1_button_23_Template_button_click_0_listener() {
      const option_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.methodsExpanded ? ctx_r1.selectPaymentOption(option_r9.id) : ctx_r1.expandPaymentOptions());
    });
    \u0275\u0275elementStart(1, "div", 47);
    \u0275\u0275template(2, PurchaseCreditsDialogComponent_ng_container_1_button_23_img_2_Template, 1, 2, "img", 48)(3, PurchaseCreditsDialogComponent_ng_container_1_button_23_span_3_Template, 2, 1, "span", 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 49)(5, "span", 50);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 51);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, PurchaseCreditsDialogComponent_ng_container_1_button_23_span_9_Template, 5, 3, "span", 52);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(7, _c3, ctx_r1.isPaymentOptionSelected(option_r9.id), !ctx_r1.isPaymentOptionSelected(option_r9.id)))("disabled", ctx_r1.loading);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", option_r9.logoSrc);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !option_r9.logoSrc);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", option_r9.title, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", option_r9.subtitle, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.methodsExpanded && ctx_r1.canCollapsePaymentOptions());
  }
}
function PurchaseCreditsDialogComponent_ng_container_1_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55)(1, "mat-icon", 56);
    \u0275\u0275text(2, "account_balance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 57);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 1, "addCredits.purchaseDialog.bold.firstPurchasePseNote"), " ");
  }
}
function PurchaseCreditsDialogComponent_ng_container_1_p_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 58);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, "addCredits.purchaseDialog.bold.quoteApprox", \u0275\u0275pureFunction2(4, _c4, ctx_r1.boldCopTotalLabel(), ctx_r1.boldExchangeRateLabel())), " ");
  }
}
function PurchaseCreditsDialogComponent_ng_container_1_p_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 58);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "addCredits.purchaseDialog.bold.quoteLoading"), " ");
  }
}
function PurchaseCreditsDialogComponent_ng_container_1_p_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 59);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "addCredits.purchaseDialog.errors.boldFxUnavailable"), " ");
  }
}
function PurchaseCreditsDialogComponent_ng_container_1_p_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 58);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "addCredits.purchaseDialog.stripe.addCardHint"), " ");
  }
}
function PurchaseCreditsDialogComponent_ng_container_1_p_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 58);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "addCredits.purchaseDialog.bold.hint"), " ");
  }
}
function PurchaseCreditsDialogComponent_ng_container_1_mat_spinner_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 60);
  }
}
function PurchaseCreditsDialogComponent_ng_container_1_ng_container_36_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 62);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isBoldOptionSelected("COP") && ctx_r1.boldCopTotalLabel() ? ctx_r1.boldCopTotalLabel() : ctx_r1.hasSelectedAmount() ? "$" + ctx_r1.selectedAmount : "", " ");
  }
}
function PurchaseCreditsDialogComponent_ng_container_1_ng_container_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, PurchaseCreditsDialogComponent_ng_container_1_ng_container_36_span_4_Template, 2, 1, "span", 61);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, ctx_r1.needsAddCard() ? "addCredits.purchaseDialog.addCardButton" : ctx_r1.paymentMethod === "bold" ? "addCredits.purchaseDialog.bold.payButton" : "chat.payment.payBtn"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.needsAddCard());
  }
}
function PurchaseCreditsDialogComponent_ng_container_1_span_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "addCredits.purchaseDialog.purchasing"));
  }
}
function PurchaseCreditsDialogComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "header", 3)(2, "h2", 4);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 5);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "mat-dialog-content", 6);
    \u0275\u0275template(9, PurchaseCreditsDialogComponent_ng_container_1_div_9_Template, 5, 1, "div", 7);
    \u0275\u0275elementStart(10, "section", 8)(11, "label", 9);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, PurchaseCreditsDialogComponent_ng_container_1_button_14_Template, 8, 5, "button", 10)(15, PurchaseCreditsDialogComponent_ng_container_1_ng_container_15_Template, 16, 18, "ng-container", 1)(16, PurchaseCreditsDialogComponent_ng_container_1_div_16_Template, 6, 8, "div", 11)(17, PurchaseCreditsDialogComponent_ng_container_1_div_17_Template, 6, 7, "div", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "section", 8)(19, "label", 9);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 13);
    \u0275\u0275template(23, PurchaseCreditsDialogComponent_ng_container_1_button_23_Template, 10, 10, "button", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275template(24, PurchaseCreditsDialogComponent_ng_container_1_div_24_Template, 6, 3, "div", 15)(25, PurchaseCreditsDialogComponent_ng_container_1_p_25_Template, 3, 7, "p", 16)(26, PurchaseCreditsDialogComponent_ng_container_1_p_26_Template, 3, 3, "p", 16)(27, PurchaseCreditsDialogComponent_ng_container_1_p_27_Template, 3, 3, "p", 17)(28, PurchaseCreditsDialogComponent_ng_container_1_p_28_Template, 3, 3, "p", 16)(29, PurchaseCreditsDialogComponent_ng_container_1_p_29_Template, 3, 3, "p", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 18)(31, "button", 19);
    \u0275\u0275listener("click", function PurchaseCreditsDialogComponent_ng_container_1_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "button", 20);
    \u0275\u0275listener("click", function PurchaseCreditsDialogComponent_ng_container_1_Template_button_click_34_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.purchase());
    });
    \u0275\u0275template(35, PurchaseCreditsDialogComponent_ng_container_1_mat_spinner_35_Template, 1, 0, "mat-spinner", 21)(36, PurchaseCreditsDialogComponent_ng_container_1_ng_container_36_Template, 5, 4, "ng-container", 1)(37, PurchaseCreditsDialogComponent_ng_container_1_span_37_Template, 3, 3, "span", 1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 22, "addCredits.purchaseDialog.title"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 24, "addCredits.hero.subtitle"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.error);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 26, "addCredits.purchaseDialog.selectAmount"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.amountExpanded && ctx_r1.hasSelectedAmount());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.amountExpanded);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showBringBackCreditsHint());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showWeekOneDoubleCreditsHint());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 28, "addCredits.purchaseDialog.paymentMethod"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.visiblePaymentOptions());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isPseOnly());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isBoldOptionSelected("COP") && ctx_r1.boldCopTotalLabel());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isBoldOptionSelected("COP") && ctx_r1.boldQuoteLoading && !ctx_r1.boldCopTotalLabel());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.boldFxUnavailable);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.needsAddCard());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.paymentMethod === "bold");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(33, 30, "addCredits.purchaseDialog.cancel"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r1.canSubmit());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loading);
  }
}
function PurchaseCreditsDialogComponent_div_2_mat_spinner_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 72);
  }
}
function PurchaseCreditsDialogComponent_div_2_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "addCredits.purchaseDialog.kyc.startKyc"));
  }
}
function PurchaseCreditsDialogComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 63)(1, "div", 64)(2, "mat-icon", 65);
    \u0275\u0275text(3, "verified_user");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 66)(5, "h3", 67);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 68);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 69);
    \u0275\u0275listener("click", function PurchaseCreditsDialogComponent_div_2_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.startKyc());
    });
    \u0275\u0275template(12, PurchaseCreditsDialogComponent_div_2_mat_spinner_12_Template, 1, 0, "mat-spinner", 70)(13, PurchaseCreditsDialogComponent_div_2_span_13_Template, 3, 3, "span", 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 71);
    \u0275\u0275listener("click", function PurchaseCreditsDialogComponent_div_2_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "transloco");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 7, "addCredits.purchaseDialog.kyc.title"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 9, "addCredits.purchaseDialog.kyc.description"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 11, "addCredits.purchaseDialog.kyc.close"), " ");
  }
}
var PURCHASE_ERROR_KEYS = {
  stripeNotConfigured: "addCredits.purchaseDialog.errors.stripeNotConfigured",
  payment3dsFailed: "addCredits.purchaseDialog.errors.payment3dsFailed",
  paymentFailedImmediate: "addCredits.purchaseDialog.errors.paymentFailedImmediate",
  duplicateCreditPurchaseQuick: "addCredits.purchaseDialog.errors.duplicate_credit_purchase_quick",
  duplicateCreditPurchaseSameDay: "addCredits.purchaseDialog.errors.duplicate_credit_purchase_same_day",
  creditPurchaseInvalidAmount: "addCredits.purchaseDialog.errors.credit_purchase_invalid_amount",
  boldUnavailable: "addCredits.purchaseDialog.errors.boldUnavailable",
  boldWholeAmount: "addCredits.purchaseDialog.errors.boldWholeAmount",
  boldFxUnavailable: "addCredits.purchaseDialog.errors.boldFxUnavailable",
  firstPurchaseRequiresPse: "addCredits.purchaseDialog.errors.firstPurchaseRequiresPse"
};
var BOLD_QUOTE_DEBOUNCE_MS = 400;
var PurchaseCreditsDialogComponent = class _PurchaseCreditsDialogComponent {
  constructor() {
    this._dialogRef = inject(MatDialogRef);
    this._paymentService = inject(PaymentService);
    this._transloco = inject(TranslocoService);
    this.data = inject(MAT_DIALOG_DATA);
    this.minPurchaseUsd = MIN_CREDIT_PURCHASE_USD;
    this.maxPurchaseUsd = MAX_CREDIT_PURCHASE_USD;
    this.selectedAmount = null;
    this.loading = false;
    this.error = null;
    this.paymentMethod = "stripe";
    this.boldCurrency = "USD";
    this.boldQuote = null;
    this.boldQuoteLoading = false;
    this.boldFxUnavailable = false;
    this.policy = null;
    this.amountExpanded = true;
    this.methodsExpanded = true;
    this.isCustomAmount = false;
    this.customAmountValue = null;
    this.creditAmounts = [49, 50, 100, 150, 200, 250, 500];
    this.kycRequired = false;
  }
  ngOnInit() {
    if (this.data?.card) {
      this.selectedCardId = this.data.card._id;
    }
    this.paymentMethod = this.data?.card ? "stripe" : "bold";
    this._loadPurchasePolicy();
  }
  /**
   * A restricted client has exactly one way to pay, so the dialog switches to it up front instead
   * of letting them pick something the API will reject.
   */
  _loadPurchasePolicy() {
    this._paymentService.getPurchasePolicy().subscribe({
      next: (response) => {
        this.policy = response.data ?? null;
        if (!this.isPseOnly()) {
          return;
        }
        this.paymentMethod = "bold";
        this.boldCurrency = "COP";
        this._loadBoldQuote();
      },
      error: () => {
        this.policy = null;
      }
    });
  }
  /** First purchase from a Colombian client: PSE only, in pesos. */
  isPseOnly() {
    return this.policy?.restricted === true;
  }
  selectPaymentMethod(method) {
    if (this.loading || this.isPseOnly() || this.paymentMethod === method) {
      return;
    }
    this.paymentMethod = method;
    this.error = null;
  }
  /** Every rail this client can pick, in the order they are offered. */
  paymentOptions() {
    if (this.isPseOnly()) {
      return [
        {
          id: "pse",
          logoText: "PSE",
          title: this._transloco.translate("addCredits.purchaseDialog.bold.optionPse"),
          subtitle: this._transloco.translate("addCredits.purchaseDialog.bold.methodsPse")
        }
      ];
    }
    const options = [];
    if (this.data?.card) {
      options.push({
        id: "stripe",
        logoSrc: this.getCardLogo(this.data.card.brand),
        logoAlt: this.data.card.brand,
        title: `\u2022\u2022\u2022\u2022 ${this.data.card.lastFour}`,
        subtitle: this._transloco.translate("addCredits.purchaseDialog.savedCard")
      });
    } else {
      options.push({
        id: "stripe",
        logoText: "Stripe",
        title: this._transloco.translate("addCredits.purchaseDialog.stripe.addCardTitle"),
        subtitle: this._transloco.translate("addCredits.purchaseDialog.stripe.addCardSubtitle")
      });
    }
    options.push({
      id: "bold-usd",
      logoText: "Bold",
      title: this._transloco.translate("addCredits.purchaseDialog.bold.optionUsd"),
      subtitle: this._transloco.translate("addCredits.purchaseDialog.bold.methodsUsd")
    });
    if (!this.boldFxUnavailable) {
      options.push({
        id: "bold-cop",
        logoText: "Bold",
        title: this._transloco.translate("addCredits.purchaseDialog.bold.optionCop"),
        subtitle: this._transloco.translate("addCredits.purchaseDialog.bold.methodsCop")
      });
    }
    return options;
  }
  /** Collapsed, only the chosen rail stays on screen. */
  visiblePaymentOptions() {
    const options = this.paymentOptions();
    if (this.methodsExpanded) {
      return options;
    }
    return options.filter((option) => this.isPaymentOptionSelected(option.id));
  }
  isPaymentOptionSelected(id) {
    if (id === "pse") {
      return true;
    }
    if (id === "stripe") {
      return this.paymentMethod === "stripe";
    }
    return this.isBoldOptionSelected(id === "bold-cop" ? "COP" : "USD");
  }
  /** A lone option has nothing to fold away, so it never offers the toggle. */
  canCollapsePaymentOptions() {
    return this.paymentOptions().length > 1;
  }
  selectPaymentOption(id) {
    if (this.loading) {
      return;
    }
    if (id === "stripe") {
      this.selectPaymentMethod("stripe");
    } else if (id !== "pse") {
      this.selectBoldOption(id === "bold-cop" ? "COP" : "USD");
    }
    this.methodsExpanded = false;
  }
  expandPaymentOptions() {
    if (this.loading || !this.canCollapsePaymentOptions()) {
      return;
    }
    this.methodsExpanded = true;
  }
  /**
   * Bold decides the rails from the checkout currency, so picking an option is picking a currency.
   * @param currency USD (card only) or COP (card, PSE, Nequi, Bancolombia).
   */
  selectBoldOption(currency) {
    if (this.loading || this.paymentMethod === "bold" && this.boldCurrency === currency) {
      return;
    }
    if (this.isPseOnly() && currency !== "COP") {
      return;
    }
    this.paymentMethod = "bold";
    this.boldCurrency = currency;
    this.error = null;
    this._scheduleBoldQuote();
  }
  isBoldOptionSelected(currency) {
    return this.paymentMethod === "bold" && this.boldCurrency === currency;
  }
  /** Peso total formatted the way Colombian customers expect (304.900 COP). */
  boldCopTotalLabel() {
    if (!this.boldQuote || this.boldQuote.currency !== "COP") {
      return "";
    }
    return `${new Intl.NumberFormat("es-CO").format(this.boldQuote.total)} COP`;
  }
  boldExchangeRateLabel() {
    if (!this.boldQuote || this.boldQuote.currency !== "COP") {
      return "";
    }
    return new Intl.NumberFormat("es-CO", { maximumFractionDigits: 2 }).format(this.boldQuote.exchangeRate);
  }
  _scheduleBoldQuote() {
    clearTimeout(this._quoteTimer);
    if (this.boldCurrency !== "COP" || this.paymentMethod !== "bold") {
      this.boldQuote = null;
      return;
    }
    this._quoteTimer = setTimeout(() => this._loadBoldQuote(), BOLD_QUOTE_DEBOUNCE_MS);
  }
  _loadBoldQuote() {
    if (!this.isValidAmount()) {
      this.boldQuote = null;
      return;
    }
    this.boldQuoteLoading = true;
    this._paymentService.getBoldQuote(this.selectedAmount, "COP").subscribe({
      next: (response) => {
        this.boldQuoteLoading = false;
        this.boldQuote = response.data ?? null;
        this.boldFxUnavailable = false;
      },
      error: (err) => {
        this.boldQuoteLoading = false;
        this.boldQuote = null;
        const slug = `${err?.error?.message ?? ""}`;
        if (!slug.includes("bold_fx_unavailable")) {
          return;
        }
        this.boldFxUnavailable = true;
        this.boldCurrency = "USD";
      }
    });
  }
  showBringBackCreditsHint() {
    const offer = this.data?.bringBackOffer;
    if (!offer?.eligible || this.loading) {
      return false;
    }
    const active = this.isCustomAmount ? Number(this.customAmountValue) : this.selectedAmount;
    return Number.isFinite(active) && active >= this.minPurchaseUsd;
  }
  bringBackReceivedAmount() {
    const multiplier = this.data?.bringBackOffer?.multiplier ?? 2;
    const active = this.isCustomAmount ? Number(this.customAmountValue) : this.selectedAmount;
    return Math.round(active * multiplier);
  }
  showWeekOneDoubleCreditsHint() {
    if (this.showBringBackCreditsHint()) {
      return false;
    }
    const p = this.data?.promotion;
    if (!p?.eligible || this.loading) {
      return false;
    }
    const min = p.minPurchaseUsd ?? this.minPurchaseUsd;
    const active = this._activePurchaseUsd();
    return Number.isFinite(active) && active >= min;
  }
  /** Pay amount currently in the dialog, whether a preset or a typed custom value. */
  weekOneDoublePayAmount() {
    return this._activePurchaseUsd();
  }
  /** Purchase plus the matched bonus, respecting the server-side cap. */
  weekOneDoubleReceivedAmount() {
    const active = this._activePurchaseUsd();
    const cap = this.data?.promotion?.maxBonusUsd ?? this.maxPurchaseUsd;
    const bonus = Math.min(active, cap);
    return active + bonus;
  }
  _activePurchaseUsd() {
    if (this.isCustomAmount) {
      return Number(this.customAmountValue);
    }
    return this.selectedAmount ?? Number.NaN;
  }
  hasSelectedAmount() {
    return Number.isFinite(this._activePurchaseUsd());
  }
  selectPresetAmount(amount) {
    this.isCustomAmount = false;
    this.customAmountValue = null;
    this.selectedAmount = amount;
    this.amountExpanded = false;
    this._scheduleBoldQuote();
  }
  expandAmounts() {
    if (this.loading) {
      return;
    }
    this.amountExpanded = true;
  }
  /** Folds a typed amount away once it is usable, matching what picking a preset does. */
  onCustomAmountCommitted() {
    if (!this.isValidAmount()) {
      return;
    }
    this.amountExpanded = false;
  }
  toggleCustomAmount() {
    this.isCustomAmount = !this.isCustomAmount;
    if (this.isCustomAmount) {
      this.customAmountValue = this.selectedAmount != null && this.selectedAmount >= MIN_CREDIT_PURCHASE_USD ? this.selectedAmount : null;
      this.selectedAmount = this.customAmountValue;
    }
    this._scheduleBoldQuote();
  }
  onCustomAmountChange(value) {
    this.customAmountValue = value;
    this.selectedAmount = value || null;
    this._scheduleBoldQuote();
  }
  isValidAmount() {
    const amount = this._activePurchaseUsd();
    const inRange = Number.isFinite(amount) && amount >= MIN_CREDIT_PURCHASE_USD && amount <= MAX_CREDIT_PURCHASE_USD;
    if (!inRange) {
      return false;
    }
    return this.paymentMethod !== "bold" || Number.isInteger(amount);
  }
  /** Stripe is selected but this client has no saved card yet. */
  needsAddCard() {
    return this.paymentMethod === "stripe" && !this.data?.card;
  }
  canSubmit() {
    if (this.loading) {
      return false;
    }
    if (this.needsAddCard()) {
      return true;
    }
    if (!this.isValidAmount()) {
      return false;
    }
    return this.paymentMethod === "bold" || Boolean(this.selectedCardId);
  }
  close() {
    this._dialogRef.close();
  }
  startKyc() {
    this.loading = true;
    this._paymentService.resumeKYC().subscribe({
      next: (response) => {
        this.loading = false;
        if (response.data?.alreadyCompleted || !response.data?.path && response.data?.canRecharge === true) {
          this._dialogRef.close({ alreadyCompleted: true });
          return;
        }
        if (response.data?.path && environment.kycBaseUrl) {
          const kycUrl = `${environment.kycBaseUrl}${response.data.path}`;
          window.open(kycUrl, "_blank");
          this._dialogRef.close();
        }
      },
      error: (err) => {
        this.loading = false;
        this.error = this._transloco.translate("addCredits.purchaseDialog.errors.kycVerificationStartFailed");
      }
    });
  }
  getCardLogo(brand) {
    const logos = {
      visa: "https://cdn.verifik.co/assets/billing-svg/VisaLogo.svg",
      mastercard: "https://cdn.verifik.co/assets/billing-svg/MasterCardLogo.svg",
      amex: "https://cdn.verifik.co/assets/billing-svg/AmericanExpressLogo.svg"
    };
    return logos[brand?.toLowerCase()] || "";
  }
  _translatePurchaseError(key) {
    return this._transloco.translate(PURCHASE_ERROR_KEYS[key]);
  }
  /** Maps `/v2/credits/purchase` API error bodies to localized text. */
  _purchaseCreditsApiError(err) {
    const slug = `${err?.error?.message ?? ""}`;
    if (slug.includes("duplicate_credit_purchase_quick")) {
      return this._translatePurchaseError("duplicateCreditPurchaseQuick");
    }
    if (slug.includes("duplicate_credit_purchase_same_day")) {
      return this._translatePurchaseError("duplicateCreditPurchaseSameDay");
    }
    if (slug.includes("credit_purchase_invalid_amount")) {
      return this._translatePurchaseError("creditPurchaseInvalidAmount");
    }
    if (slug.includes("bold_amount_must_be_whole")) {
      return this._translatePurchaseError("boldWholeAmount");
    }
    if (slug.includes("bold_fx_unavailable")) {
      return this._translatePurchaseError("boldFxUnavailable");
    }
    if (slug.includes("first_purchase_requires_pse")) {
      return this._translatePurchaseError("firstPurchaseRequiresPse");
    }
    if (slug.includes("bold_pse_amount_out_of_range")) {
      return this._translatePurchaseError("creditPurchaseInvalidAmount");
    }
    if (slug.includes("bold_not_configured") || slug.includes("bold_voucher_lookup_failed") || slug.includes("bold_payment_link")) {
      return this._translatePurchaseError("boldUnavailable");
    }
    const raw = slug.trim();
    return raw || this._transloco.translate("addCredits.purchaseDialog.errors.purchaseFailed");
  }
  /**
   * Completes Stripe 3DS and confirms the credit purchase on the API.
   */
  _completeStripe3ds(clientSecret, paymentIntentId, stripePublishableKey) {
    return __async(this, null, function* () {
      try {
        const stripe = yield loadStripe(stripePublishableKey);
        if (!stripe) {
          this.loading = false;
          this.error = this._translatePurchaseError("stripeNotConfigured");
          return;
        }
        const { error, paymentIntent } = yield stripe.confirmCardPayment(clientSecret);
        if (error) {
          this.loading = false;
          this.error = error.message || this._translatePurchaseError("payment3dsFailed");
          return;
        }
        if (paymentIntent?.status !== "succeeded") {
          this.loading = false;
          this.error = this._translatePurchaseError("payment3dsFailed");
          return;
        }
        this._paymentService.confirmCreditPurchase(paymentIntentId).subscribe({
          next: () => {
            this.loading = false;
            this._dialogRef.close("success");
          },
          error: (err) => {
            this.loading = false;
            this.error = err.error?.message || this._translatePurchaseError("payment3dsFailed");
          }
        });
      } catch {
        this.loading = false;
        this.error = this._translatePurchaseError("payment3dsFailed");
      }
    });
  }
  /**
   * True when the API rejected the purchase because the client still needs KYC/approval.
   */
  _isKycRequiredError(err) {
    return err.error?.code === "client_cannot_recharge_needs_kyc" || Boolean(err.error?.message?.includes("kyc"));
  }
  /**
   * Hands the order to Bold's gateway. Bold navigates to `/add-credits?bold-order-id=...` when the
   * customer finishes, where {@link AddCreditsComponent} reconciles it, so this dialog closes as
   * soon as the gateway is open.
   */
  _purchaseWithBold() {
    this.loading = true;
    this.error = null;
    this._paymentService.createBoldCheckout({
      amount: this.selectedAmount,
      currency: this.boldCurrency,
      origin: "smart_agent"
    }).subscribe({
      next: (response) => void this._openBoldCheckout(response.data),
      error: (err) => {
        this.loading = false;
        if (this._isKycRequiredError(err)) {
          this.kycRequired = true;
          this.error = null;
          return;
        }
        this.error = this._purchaseCreditsApiError(err);
      }
    });
  }
  /**
   * A PSE-only order is a hosted link the browser navigates to; everything else opens Bold's
   * embedded modal, whose library is only fetched at that point.
   */
  _openBoldCheckout(config) {
    return __async(this, null, function* () {
      try {
        if (config.mode === "redirect") {
          this._paymentService.redirectToBoldCheckout(config);
          return;
        }
        yield this._paymentService.loadBoldCheckoutScript();
        this._paymentService.openBoldCheckout(config);
      } catch {
        this.loading = false;
        this.error = this._translatePurchaseError("boldUnavailable");
        return;
      }
      this.loading = false;
      this._dialogRef.close("bold-checkout-opened");
    });
  }
  /** Same Stripe Checkout setup as the page Add Card button. */
  _startAddCard() {
    this.loading = true;
    this.error = null;
    this._paymentService.createStripeCard().subscribe({
      next: () => {
      },
      error: () => {
        this.loading = false;
        this.error = this._transloco.translate("addCredits.purchaseDialog.errors.purchaseFailed");
      }
    });
  }
  purchase() {
    if (this.needsAddCard()) {
      this._startAddCard();
      return;
    }
    if (this.paymentMethod === "bold") {
      if (!Number.isInteger(this.selectedAmount)) {
        this.error = this._translatePurchaseError("boldWholeAmount");
        return;
      }
      this._purchaseWithBold();
      return;
    }
    if (!this.selectedCardId) {
      this.error = this._transloco.translate("addCredits.purchaseDialog.errors.selectPaymentMethod");
      return;
    }
    if (!this.isValidAmount()) {
      this.error = this._transloco.translate("addCredits.purchaseDialog.errors.amountOutOfRange", {
        minUsd: `$${MIN_CREDIT_PURCHASE_USD}`,
        maxUsd: `$${MAX_CREDIT_PURCHASE_USD.toLocaleString(void 0, {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        })}`
      });
      return;
    }
    this.loading = true;
    this.error = null;
    this._paymentService.purchaseCredits({
      amount: this.selectedAmount,
      cardId: this.selectedCardId,
      currency: "USD",
      origin: "smart_agent"
    }).subscribe({
      next: (response) => {
        const data = response.data;
        if (!data) {
          this.loading = false;
          this.error = this._transloco.translate("addCredits.purchaseDialog.errors.purchaseFailed");
          return;
        }
        if (isThreeDSCreditPurchase(data)) {
          const { clientSecret, paymentIntentId, stripePublishableKey } = data;
          if (!clientSecret || !paymentIntentId || !stripePublishableKey) {
            this.loading = false;
            this.error = this._translatePurchaseError("stripeNotConfigured");
            return;
          }
          void this._completeStripe3ds(clientSecret, paymentIntentId, stripePublishableKey);
          return;
        }
        const tx = data;
        if (tx.status === "failed") {
          this.loading = false;
          this.error = this._translatePurchaseError("paymentFailedImmediate");
          return;
        }
        if (tx.status === "pending") {
          this.loading = false;
          this.error = this._transloco.translate("addCredits.purchaseDialog.errors.paymentPendingVerification");
          setTimeout(() => {
            this._dialogRef.close("success");
          }, 2e3);
          return;
        }
        this.loading = false;
        this._dialogRef.close("success");
      },
      error: (err) => {
        this.loading = false;
        if (this._isKycRequiredError(err)) {
          this.kycRequired = true;
          this.error = null;
          return;
        }
        this.error = this._purchaseCreditsApiError(err);
      }
    });
  }
  static {
    this.\u0275fac = function PurchaseCreditsDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PurchaseCreditsDialogComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PurchaseCreditsDialogComponent, selectors: [["app-purchase-credits-dialog"]], decls: 3, vars: 2, consts: [[1, "purchase-credits-dialog-card", "flex", "w-full", "flex-col", "overflow-hidden", "rounded-2xl", "border", "border-stone-200", "bg-white", "shadow-lg", "dark:border-gray-700", "dark:bg-gray-900"], [4, "ngIf"], ["class", "flex flex-col items-center px-6 py-10 text-center md:py-12", 4, "ngIf"], [1, "purchase-credits-dialog-header", "shrink-0", "border-b", "border-stone-200/90", "px-5", "py-5", "dark:border-gray-800", "md:p-6"], [1, "text-xl", "font-semibold", "tracking-tight", "text-stone-950", "dark:text-white"], [1, "purchase-credits-dialog-lead", "mt-2", "text-sm", "leading-6", "text-stone-500", "dark:text-stone-400"], [1, "purchase-credits-dialog-content", "!flex", "!flex-col", "!gap-6", "px-5", "py-6", "dark:text-stone-100", "md:p-6"], ["class", "flex gap-3 rounded-xl border border-amber-200/80 bg-amber-50 px-4 py-3 text-sm dark:border-amber-900/50 dark:bg-amber-950/30", "role", "alert", 4, "ngIf"], [1, "flex", "flex-col", "gap-3"], [1, "text-sm", "font-semibold", "text-stone-950", "dark:text-white"], ["type", "button", "class", "flex min-h-[2.75rem] items-center justify-between gap-3 rounded-xl border border-indigo-500 bg-indigo-50 px-4 py-3 text-left transition ring-2 ring-indigo-500/20 disabled:opacity-50 dark:border-indigo-400 dark:bg-indigo-950/40", 3, "disabled", "click", 4, "ngIf"], ["class", "flex gap-3 rounded-xl border border-amber-200/90 bg-amber-50 px-4 py-3 text-sm dark:border-amber-800 dark:bg-amber-950/40", 4, "ngIf"], ["class", "flex gap-3 rounded-xl border border-emerald-200/90 bg-emerald-50 px-4 py-3 text-sm dark:border-emerald-800 dark:bg-emerald-950/40", 4, "ngIf"], [1, "flex", "flex-col", "gap-2"], ["type", "button", "class", "flex items-center gap-3 rounded-xl border px-4 py-3 text-left transition disabled:opacity-50", 3, "ngClass", "disabled", "click", 4, "ngFor", "ngForOf"], ["class", "flex gap-3 rounded-xl border border-stone-200 bg-stone-50/80 px-4 py-3 text-sm dark:border-gray-700 dark:bg-gray-950/50", 4, "ngIf"], ["class", "text-xs leading-relaxed text-stone-500 dark:text-stone-400", 4, "ngIf"], ["class", "text-xs leading-relaxed text-amber-700 dark:text-amber-400", 4, "ngIf"], [1, "purchase-credits-dialog-footer", "flex", "shrink-0", "flex-col-reverse", "gap-2", "border-t", "border-stone-200/90", "px-5", "py-4", "dark:border-gray-800", "sm:flex-row", "sm:justify-end", "sm:gap-3", "md:px-6"], ["mat-stroked-button", "", "type", "button", 1, "!min-h-11", "w-full", "!rounded-xl", "!border-stone-200", "!font-medium", "sm:w-auto", "dark:!border-gray-700", 3, "click", "disabled"], ["mat-flat-button", "", "color", "primary", "type", "button", 1, "flex", "!min-h-11", "w-full", "shrink-0", "items-center", "justify-center", "gap-2", "!rounded-xl", "px-5", "sm:w-auto", 3, "click", "disabled"], ["diameter", "20", "class", "inline-block", 4, "ngIf"], ["role", "alert", 1, "flex", "gap-3", "rounded-xl", "border", "border-amber-200/80", "bg-amber-50", "px-4", "py-3", "text-sm", "dark:border-amber-900/50", "dark:bg-amber-950/30"], [1, "shrink-0", "text-amber-600", "dark:text-amber-400", 2, "font-size", "22px", "width", "22px", "height", "22px"], [1, "m-0", "flex-1", "leading-relaxed", "text-amber-950", "dark:text-amber-100"], ["type", "button", 1, "flex", "min-h-[2.75rem]", "items-center", "justify-between", "gap-3", "rounded-xl", "border", "border-indigo-500", "bg-indigo-50", "px-4", "py-3", "text-left", "transition", "ring-2", "ring-indigo-500/20", "disabled:opacity-50", "dark:border-indigo-400", "dark:bg-indigo-950/40", 3, "click", "disabled"], [1, "text-base", "font-semibold", "text-indigo-700", "dark:text-indigo-200"], [1, "inline-flex", "items-center", "gap-1", "text-sm", "font-medium", "text-indigo-600", "dark:text-indigo-300"], [2, "width", "18px", "height", "18px", "font-size", "18px"], [1, "grid", "grid-cols-2", "gap-2", "sm:grid-cols-3"], ["type", "button", "class", "flex h-11 min-h-[2.75rem] items-center justify-center rounded-xl border text-base font-semibold transition disabled:opacity-50", 3, "ngClass", "disabled", "click", 4, "ngFor", "ngForOf"], [1, "flex", "flex-col", "gap-2", "pt-1"], ["type", "button", 1, "inline-flex", "items-center", "gap-2", "self-start", "text-sm", "font-medium", "text-indigo-600", "transition", "hover:text-indigo-500", "disabled:opacity-50", "dark:text-indigo-400", "dark:hover:text-indigo-300", 3, "click", "disabled"], [1, "text-lg", 2, "width", "18px", "height", "18px"], ["class", "flex items-center gap-3 rounded-xl border border-stone-200 bg-stone-50/80 px-4 py-3 dark:border-gray-700 dark:bg-gray-950/50", 4, "ngIf"], [1, "text-xs", "text-stone-500", "dark:text-stone-400"], ["type", "button", 1, "flex", "h-11", "min-h-[2.75rem]", "items-center", "justify-center", "rounded-xl", "border", "text-base", "font-semibold", "transition", "disabled:opacity-50", 3, "click", "ngClass", "disabled"], [1, "flex", "items-center", "gap-3", "rounded-xl", "border", "border-stone-200", "bg-stone-50/80", "px-4", "py-3", "dark:border-gray-700", "dark:bg-gray-950/50"], [1, "text-lg", "font-semibold", "text-stone-500", "dark:text-stone-400"], ["type", "number", 1, "min-w-0", "flex-1", "border-0", "bg-transparent", "text-lg", "font-semibold", "text-stone-950", "outline-none", "dark:text-white", 3, "ngModelChange", "blur", "keydown.enter", "ngModel", "min", "max", "disabled"], [1, "flex", "gap-3", "rounded-xl", "border", "border-amber-200/90", "bg-amber-50", "px-4", "py-3", "text-sm", "dark:border-amber-800", "dark:bg-amber-950/40"], [1, "shrink-0", "text-amber-800", "dark:text-amber-400", 2, "width", "22px", "height", "22px", "font-size", "22px"], [1, "m-0", "flex-1", "leading-relaxed", "text-amber-950", "dark:text-amber-50"], [1, "flex", "gap-3", "rounded-xl", "border", "border-emerald-200/90", "bg-emerald-50", "px-4", "py-3", "text-sm", "dark:border-emerald-800", "dark:bg-emerald-950/40"], [1, "shrink-0", "text-emerald-700", "dark:text-emerald-400", 2, "width", "22px", "height", "22px", "font-size", "22px"], [1, "m-0", "flex-1", "leading-relaxed", "text-emerald-950", "dark:text-emerald-50"], ["type", "button", 1, "flex", "items-center", "gap-3", "rounded-xl", "border", "px-4", "py-3", "text-left", "transition", "disabled:opacity-50", 3, "click", "ngClass", "disabled"], [1, "flex", "h-10", "w-[4.75rem]", "shrink-0", "items-center", "justify-center", "rounded-md", "border", "border-stone-200", "bg-white", "px-2", "text-sm", "font-bold", "tracking-tight", "text-stone-900", "dark:border-gray-600", "dark:bg-gray-950", "dark:text-white"], ["class", "max-h-[1.125rem] w-auto max-w-full object-contain", 3, "src", "alt", 4, "ngIf"], [1, "min-w-0", "flex-1"], [1, "block", "truncate", "font-medium", "leading-snug", "text-stone-900", "dark:text-stone-100"], [1, "block", "text-xs", "text-stone-500", "dark:text-stone-400"], ["class", "inline-flex shrink-0 items-center gap-1 text-sm font-medium text-indigo-600 dark:text-indigo-300", 4, "ngIf"], [1, "max-h-[1.125rem]", "w-auto", "max-w-full", "object-contain", 3, "src", "alt"], [1, "inline-flex", "shrink-0", "items-center", "gap-1", "text-sm", "font-medium", "text-indigo-600", "dark:text-indigo-300"], [1, "flex", "gap-3", "rounded-xl", "border", "border-stone-200", "bg-stone-50/80", "px-4", "py-3", "text-sm", "dark:border-gray-700", "dark:bg-gray-950/50"], [1, "shrink-0", "text-stone-500", "dark:text-stone-400", 2, "width", "22px", "height", "22px", "font-size", "22px"], [1, "m-0", "flex-1", "leading-relaxed", "text-stone-600", "dark:text-stone-300"], [1, "text-xs", "leading-relaxed", "text-stone-500", "dark:text-stone-400"], [1, "text-xs", "leading-relaxed", "text-amber-700", "dark:text-amber-400"], ["diameter", "20", 1, "inline-block"], ["class", "rounded bg-white/20 px-2 py-0.5 text-sm", 4, "ngIf"], [1, "rounded", "bg-white/20", "px-2", "py-0.5", "text-sm"], [1, "flex", "flex-col", "items-center", "px-6", "py-10", "text-center", "md:py-12"], [1, "mb-6", "flex", "h-[5.25rem]", "w-[5.25rem]", "items-center", "justify-center", "rounded-full", "bg-stone-100", "ring-[12px]", "ring-stone-100/70", "dark:bg-gray-800", "dark:ring-gray-900/70"], [1, "text-stone-600", "dark:text-stone-300", 2, "width", "48px", "height", "48px", "font-size", "48px"], [1, "mx-auto", "flex", "max-w-sm", "flex-col", "items-center", "gap-4"], [1, "text-lg", "font-semibold", "tracking-tight", "text-stone-950", "dark:text-white"], [1, "text-sm", "leading-6", "text-stone-600", "dark:text-stone-400"], ["mat-flat-button", "", "color", "primary", "type", "button", 1, "!mt-1", "w-full", "!min-h-11", "!rounded-xl", "!px-5", 3, "click", "disabled"], ["diameter", "24", "class", "inline-block", 4, "ngIf"], ["mat-button", "", "type", "button", 1, "!min-h-10", "!rounded-xl", "text-sm", "font-medium", "text-stone-600", "dark:text-stone-400", 3, "click", "disabled"], ["diameter", "24", 1, "inline-block"]], template: function PurchaseCreditsDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, PurchaseCreditsDialogComponent_ng_container_1_Template, 38, 32, "ng-container", 1)(2, PurchaseCreditsDialogComponent_div_2_Template, 17, 13, "div", 2);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.kycRequired);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.kycRequired);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, DecimalPipe, FormsModule, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, MinValidator, MaxValidator, NgModel, MatDialogModule, MatDialogContent, MatButtonModule, MatButton, MatIconModule, MatIcon, TranslocoModule, TranslocoPipe, MatProgressSpinnerModule, MatProgressSpinner], styles: ["/* src/app/modules/add-credits/purchase-credits-dialog/purchase-credits-dialog.component.scss */\n.purchase-credits-dialog-panel.cdk-overlay-pane {\n  max-width: min(500px, 94vw);\n  max-height: calc(100vh - 1.5rem);\n  max-height: calc(100dvh - 1.5rem);\n}\n.purchase-credits-dialog-panel .mat-mdc-dialog-container {\n  padding: 0 !important;\n  overflow: hidden;\n  display: flex;\n  max-height: inherit;\n  --mdc-dialog-container-color: transparent;\n  --mdc-dialog-container-elevation: none;\n}\n.purchase-credits-dialog-panel .mat-mdc-dialog-surface {\n  background-color: transparent !important;\n  box-shadow: none !important;\n  display: flex;\n  flex: 1 1 auto;\n  min-height: 0;\n  max-height: inherit;\n  overflow: hidden;\n}\n.purchase-credits-dialog-panel .purchase-credits-dialog-card {\n  display: flex;\n  flex-direction: column;\n  min-height: 0;\n  max-height: calc(100vh - 1.5rem);\n  max-height: calc(100dvh - 1.5rem);\n  width: 100%;\n}\n.purchase-credits-dialog-panel .mat-mdc-dialog-content.purchase-credits-dialog-content {\n  flex: 1 1 auto;\n  min-height: 0;\n  max-height: none !important;\n  overflow-y: auto !important;\n  overscroll-behavior: contain;\n  -webkit-overflow-scrolling: touch;\n}\n.dark .purchase-credits-dialog-panel .mat-mdc-dialog-container {\n  --mdc-dialog-container-color: transparent;\n}\n.dark .purchase-credits-dialog-panel .mat-mdc-dialog-surface {\n  background-color: transparent !important;\n}\n@media (max-height: 720px) {\n  .purchase-credits-dialog-panel .purchase-credits-dialog-lead {\n    display: none;\n  }\n  .purchase-credits-dialog-panel .purchase-credits-dialog-header,\n  .purchase-credits-dialog-panel .purchase-credits-dialog-footer {\n    padding-top: 0.875rem;\n    padding-bottom: 0.875rem;\n  }\n  .purchase-credits-dialog-panel .mat-mdc-dialog-content.purchase-credits-dialog-content {\n    gap: 1rem;\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n  }\n}\n@media (max-width: 480px) {\n  .purchase-credits-dialog-panel.cdk-overlay-pane {\n    max-width: calc(100vw - 1rem);\n  }\n}\n.mat-mdc-raised-button mat-spinner,\n.mat-mdc-raised-button mat-progress-spinner,\n.mat-mdc-unelevated-button mat-spinner,\n.mat-mdc-unelevated-button mat-progress-spinner,\n.mat-mdc-outlined-button mat-spinner,\n.mat-mdc-outlined-button mat-progress-spinner,\n.mat-mdc-button mat-spinner,\n.mat-mdc-button mat-progress-spinner {\n  display: inline-block;\n  vertical-align: middle;\n}\n/*# sourceMappingURL=purchase-credits-dialog.component.css.map */\n"], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PurchaseCreditsDialogComponent, [{
    type: Component,
    args: [{ selector: "app-purchase-credits-dialog", standalone: true, imports: [
      CommonModule,
      FormsModule,
      MatDialogModule,
      MatButtonModule,
      MatIconModule,
      TranslocoModule,
      MatProgressSpinnerModule
    ], encapsulation: ViewEncapsulation.None, template: `<div\r
    class="purchase-credits-dialog-card flex w-full flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-900"\r
>\r
    <!-- Normal Purchase Flow -->\r
    <ng-container *ngIf="!kycRequired">\r
        <header class="purchase-credits-dialog-header shrink-0 border-b border-stone-200/90 px-5 py-5 dark:border-gray-800 md:p-6">\r
            <h2 class="text-xl font-semibold tracking-tight text-stone-950 dark:text-white">\r
                {{ 'addCredits.purchaseDialog.title' | transloco }}\r
            </h2>\r
            <p class="purchase-credits-dialog-lead mt-2 text-sm leading-6 text-stone-500 dark:text-stone-400">\r
                {{ 'addCredits.hero.subtitle' | transloco }}\r
            </p>\r
        </header>\r
\r
        <mat-dialog-content class="purchase-credits-dialog-content !flex !flex-col !gap-6 px-5 py-6 dark:text-stone-100 md:p-6">\r
            <!-- Notice (payment guardrails, declines, etc.) -->\r
            <div\r
                *ngIf="error"\r
                class="flex gap-3 rounded-xl border border-amber-200/80 bg-amber-50 px-4 py-3 text-sm dark:border-amber-900/50 dark:bg-amber-950/30"\r
                role="alert"\r
            >\r
                <mat-icon\r
                    class="shrink-0 text-amber-600 dark:text-amber-400"\r
                    style="font-size: 22px; width: 22px; height: 22px"\r
                    >info</mat-icon\r
                >\r
                <p class="m-0 flex-1 leading-relaxed text-amber-950 dark:text-amber-100">{{ error }}</p>\r
            </div>\r
\r
            <!-- Amount Selection Section -->\r
            <section class="flex flex-col gap-3">\r
                <label class="text-sm font-semibold text-stone-950 dark:text-white">\r
                    {{ 'addCredits.purchaseDialog.selectAmount' | transloco }}\r
                </label>\r
\r
                <!-- Collapsed: the chosen amount, one tap from the full grid again. -->\r
                <button\r
                    *ngIf="!amountExpanded && hasSelectedAmount()"\r
                    type="button"\r
                    class="flex min-h-[2.75rem] items-center justify-between gap-3 rounded-xl border border-indigo-500 bg-indigo-50 px-4 py-3 text-left transition ring-2 ring-indigo-500/20 disabled:opacity-50 dark:border-indigo-400 dark:bg-indigo-950/40"\r
                    (click)="expandAmounts()"\r
                    [disabled]="loading"\r
                >\r
                    <span class="text-base font-semibold text-indigo-700 dark:text-indigo-200">\r
                        \${{ selectedAmount }}\r
                    </span>\r
                    <span\r
                        class="inline-flex items-center gap-1 text-sm font-medium text-indigo-600 dark:text-indigo-300"\r
                    >\r
                        {{ 'addCredits.purchaseDialog.change' | transloco }}\r
                        <mat-icon style="width: 18px; height: 18px; font-size: 18px">expand_more</mat-icon>\r
                    </span>\r
                </button>\r
\r
                <ng-container *ngIf="amountExpanded">\r
                    <div class="grid grid-cols-2 gap-2 sm:grid-cols-3">\r
                        <button\r
                            *ngFor="let amount of creditAmounts"\r
                            type="button"\r
                            class="flex h-11 min-h-[2.75rem] items-center justify-center rounded-xl border text-base font-semibold transition disabled:opacity-50"\r
                            [ngClass]="{\r
                                'border-indigo-500 bg-indigo-50 text-indigo-700 shadow-sm ring-2 ring-indigo-500/20 dark:border-indigo-400 dark:bg-indigo-950/40 dark:text-indigo-200':\r
                                    selectedAmount === amount && !isCustomAmount,\r
                                'border-stone-200 bg-transparent text-stone-900 hover:border-stone-300 dark:border-gray-700 dark:text-white dark:hover:border-gray-600':\r
                                    selectedAmount !== amount || isCustomAmount\r
                            }"\r
                            (click)="selectPresetAmount(amount)"\r
                            [disabled]="loading"\r
                        >\r
                            <span>\${{ amount }}</span>\r
                        </button>\r
                    </div>\r
\r
                    <div class="flex flex-col gap-2 pt-1">\r
                        <button\r
                            type="button"\r
                            class="inline-flex items-center gap-2 self-start text-sm font-medium text-indigo-600 transition hover:text-indigo-500 disabled:opacity-50 dark:text-indigo-400 dark:hover:text-indigo-300"\r
                            [class.font-semibold]="isCustomAmount"\r
                            (click)="toggleCustomAmount()"\r
                            [disabled]="loading"\r
                        >\r
                            <mat-icon class="text-lg" style="width: 18px; height: 18px">edit</mat-icon>\r
                            <span>{{ 'addCredits.purchaseDialog.customAmount' | transloco }}</span>\r
                        </button>\r
\r
                        <div *ngIf="isCustomAmount" class="flex items-center gap-3 rounded-xl border border-stone-200 bg-stone-50/80 px-4 py-3 dark:border-gray-700 dark:bg-gray-950/50">\r
                            <span class="text-lg font-semibold text-stone-500 dark:text-stone-400">$</span>\r
                            <input\r
                                type="number"\r
                                class="min-w-0 flex-1 border-0 bg-transparent text-lg font-semibold text-stone-950 outline-none dark:text-white"\r
                                [(ngModel)]="customAmountValue"\r
                                (ngModelChange)="onCustomAmountChange($event)"\r
                                (blur)="onCustomAmountCommitted()"\r
                                (keydown.enter)="onCustomAmountCommitted()"\r
                                [attr.placeholder]="minPurchaseUsd"\r
                                [min]="minPurchaseUsd"\r
                                [max]="maxPurchaseUsd"\r
                                [disabled]="loading"\r
                            />\r
                        </div>\r
                    </div>\r
\r
                    <p class="text-xs text-stone-500 dark:text-stone-400">\r
                        {{ 'addCredits.purchaseDialog.minimum' | transloco }} \xB7\r
                        {{ 'addCredits.purchaseDialog.maximum' | transloco }}\r
                        \${{ maxPurchaseUsd | number: '1.0-0' }}\r
                    </p>\r
                </ng-container>\r
\r
                <div\r
                    *ngIf="showBringBackCreditsHint()"\r
                    class="flex gap-3 rounded-xl border border-amber-200/90 bg-amber-50 px-4 py-3 text-sm dark:border-amber-800 dark:bg-amber-950/40"\r
                >\r
                    <mat-icon\r
                        class="shrink-0 text-amber-800 dark:text-amber-400"\r
                        style="width: 22px; height: 22px; font-size: 22px"\r
                        >celebration</mat-icon\r
                    >\r
                    <p class="m-0 flex-1 leading-relaxed text-amber-950 dark:text-amber-50">\r
                        {{\r
                            'addCredits.promo.bringBack.dialogMultiplied'\r
                                | transloco\r
                                    : {\r
                                          payUsd: '$' + selectedAmount,\r
                                          receivedUsd: '$' + bringBackReceivedAmount(),\r
                                          multiplier: data?.bringBackOffer?.multiplier || 2,\r
                                      }\r
                        }}\r
                    </p>\r
                </div>\r
\r
                <div\r
                    *ngIf="showWeekOneDoubleCreditsHint()"\r
                    class="flex gap-3 rounded-xl border border-emerald-200/90 bg-emerald-50 px-4 py-3 text-sm dark:border-emerald-800 dark:bg-emerald-950/40"\r
                >\r
                    <mat-icon\r
                        class="shrink-0 text-emerald-700 dark:text-emerald-400"\r
                        style="width: 22px; height: 22px; font-size: 22px"\r
                        >celebration</mat-icon\r
                    >\r
                    <p class="m-0 flex-1 leading-relaxed text-emerald-950 dark:text-emerald-50">\r
                        {{\r
                            'addCredits.promo.weekOneUsd50.dialogDouble'\r
                                | transloco\r
                                    : {\r
                                          payUsd: '$' + weekOneDoublePayAmount(),\r
                                          receivedUsd: '$' + weekOneDoubleReceivedAmount(),\r
                                      }\r
                        }}\r
                    </p>\r
                </div>\r
            </section>\r
\r
            <!-- Payment Method Selection -->\r
            <section class="flex flex-col gap-3">\r
                <label class="text-sm font-semibold text-stone-950 dark:text-white">\r
                    {{ 'addCredits.purchaseDialog.paymentMethod' | transloco }}\r
                </label>\r
\r
                <div class="flex flex-col gap-2">\r
                    <button\r
                        *ngFor="let option of visiblePaymentOptions()"\r
                        type="button"\r
                        class="flex items-center gap-3 rounded-xl border px-4 py-3 text-left transition disabled:opacity-50"\r
                        [ngClass]="{\r
                            'border-indigo-500 bg-indigo-50 ring-2 ring-indigo-500/20 dark:border-indigo-400 dark:bg-indigo-950/40':\r
                                isPaymentOptionSelected(option.id),\r
                            'border-stone-200 hover:border-stone-300 dark:border-gray-700 dark:hover:border-gray-600':\r
                                !isPaymentOptionSelected(option.id)\r
                        }"\r
                        (click)="methodsExpanded ? selectPaymentOption(option.id) : expandPaymentOptions()"\r
                        [disabled]="loading"\r
                    >\r
                        <div\r
                            class="flex h-10 w-[4.75rem] shrink-0 items-center justify-center rounded-md border border-stone-200 bg-white px-2 text-sm font-bold tracking-tight text-stone-900 dark:border-gray-600 dark:bg-gray-950 dark:text-white"\r
                        >\r
                            <img\r
                                *ngIf="option.logoSrc"\r
                                [src]="option.logoSrc"\r
                                [alt]="option.logoAlt"\r
                                class="max-h-[1.125rem] w-auto max-w-full object-contain"\r
                            />\r
                            <span *ngIf="!option.logoSrc">{{ option.logoText }}</span>\r
                        </div>\r
\r
                        <div class="min-w-0 flex-1">\r
                            <span class="block truncate font-medium leading-snug text-stone-900 dark:text-stone-100">\r
                                {{ option.title }}\r
                            </span>\r
                            <span class="block text-xs text-stone-500 dark:text-stone-400">\r
                                {{ option.subtitle }}\r
                            </span>\r
                        </div>\r
\r
                        <!-- Collapsed, the selected row doubles as the way back to the full list. -->\r
                        <span\r
                            *ngIf="!methodsExpanded && canCollapsePaymentOptions()"\r
                            class="inline-flex shrink-0 items-center gap-1 text-sm font-medium text-indigo-600 dark:text-indigo-300"\r
                        >\r
                            {{ 'addCredits.purchaseDialog.change' | transloco }}\r
                            <mat-icon style="width: 18px; height: 18px; font-size: 18px">expand_more</mat-icon>\r
                        </span>\r
                    </button>\r
                </div>\r
\r
                <div\r
                    *ngIf="isPseOnly()"\r
                    class="flex gap-3 rounded-xl border border-stone-200 bg-stone-50/80 px-4 py-3 text-sm dark:border-gray-700 dark:bg-gray-950/50"\r
                >\r
                    <mat-icon\r
                        class="shrink-0 text-stone-500 dark:text-stone-400"\r
                        style="width: 22px; height: 22px; font-size: 22px"\r
                        >account_balance</mat-icon\r
                    >\r
                    <p class="m-0 flex-1 leading-relaxed text-stone-600 dark:text-stone-300">\r
                        {{ 'addCredits.purchaseDialog.bold.firstPurchasePseNote' | transloco }}\r
                    </p>\r
                </div>\r
\r
                <p\r
                    *ngIf="isBoldOptionSelected('COP') && boldCopTotalLabel()"\r
                    class="text-xs leading-relaxed text-stone-500 dark:text-stone-400"\r
                >\r
                    {{\r
                        'addCredits.purchaseDialog.bold.quoteApprox'\r
                            | transloco: { total: boldCopTotalLabel(), rate: boldExchangeRateLabel() }\r
                    }}\r
                </p>\r
\r
                <p\r
                    *ngIf="isBoldOptionSelected('COP') && boldQuoteLoading && !boldCopTotalLabel()"\r
                    class="text-xs leading-relaxed text-stone-500 dark:text-stone-400"\r
                >\r
                    {{ 'addCredits.purchaseDialog.bold.quoteLoading' | transloco }}\r
                </p>\r
\r
                <p *ngIf="boldFxUnavailable" class="text-xs leading-relaxed text-amber-700 dark:text-amber-400">\r
                    {{ 'addCredits.purchaseDialog.errors.boldFxUnavailable' | transloco }}\r
                </p>\r
\r
                <p *ngIf="needsAddCard()" class="text-xs leading-relaxed text-stone-500 dark:text-stone-400">\r
                    {{ 'addCredits.purchaseDialog.stripe.addCardHint' | transloco }}\r
                </p>\r
\r
                <p *ngIf="paymentMethod === 'bold'" class="text-xs leading-relaxed text-stone-500 dark:text-stone-400">\r
                    {{ 'addCredits.purchaseDialog.bold.hint' | transloco }}\r
                </p>\r
            </section>\r
        </mat-dialog-content>\r
\r
        <div class="purchase-credits-dialog-footer flex shrink-0 flex-col-reverse gap-2 border-t border-stone-200/90 px-5 py-4 dark:border-gray-800 sm:flex-row sm:justify-end sm:gap-3 md:px-6">\r
            <button\r
                mat-stroked-button\r
                type="button"\r
                class="!min-h-11 w-full !rounded-xl !border-stone-200 !font-medium sm:w-auto dark:!border-gray-700"\r
                (click)="close()"\r
                [disabled]="loading"\r
            >\r
                {{ 'addCredits.purchaseDialog.cancel' | transloco }}\r
            </button>\r
            <button\r
                mat-flat-button\r
                color="primary"\r
                type="button"\r
                class="flex !min-h-11 w-full shrink-0 items-center justify-center gap-2 !rounded-xl px-5 sm:w-auto"\r
                (click)="purchase()"\r
                [disabled]="!canSubmit()"\r
            >\r
                <mat-spinner *ngIf="loading" diameter="20" class="inline-block"></mat-spinner>\r
                <ng-container *ngIf="!loading">\r
                    <span>{{\r
                        (needsAddCard()\r
                            ? 'addCredits.purchaseDialog.addCardButton'\r
                            : paymentMethod === 'bold'\r
                              ? 'addCredits.purchaseDialog.bold.payButton'\r
                              : 'chat.payment.payBtn'\r
                        ) | transloco\r
                    }}</span>\r
                    <span\r
                        *ngIf="!needsAddCard()"\r
                        class="rounded bg-white/20 px-2 py-0.5 text-sm"\r
                    >\r
                        {{ isBoldOptionSelected('COP') && boldCopTotalLabel() ? boldCopTotalLabel() : hasSelectedAmount() ? '$' + selectedAmount : '' }}\r
                    </span>\r
                </ng-container>\r
                <span *ngIf="loading">{{ 'addCredits.purchaseDialog.purchasing' | transloco }}</span>\r
            </button>\r
        </div>\r
    </ng-container>\r
\r
    <!-- KYC Required State -->\r
    <div *ngIf="kycRequired" class="flex flex-col items-center px-6 py-10 text-center md:py-12">\r
        <div\r
            class="mb-6 flex h-[5.25rem] w-[5.25rem] items-center justify-center rounded-full bg-stone-100 ring-[12px] ring-stone-100/70 dark:bg-gray-800 dark:ring-gray-900/70"\r
        >\r
            <mat-icon class="text-stone-600 dark:text-stone-300" style="width: 48px; height: 48px; font-size: 48px"\r
                >verified_user</mat-icon\r
            >\r
        </div>\r
\r
        <div class="mx-auto flex max-w-sm flex-col items-center gap-4">\r
            <h3 class="text-lg font-semibold tracking-tight text-stone-950 dark:text-white">\r
                {{ 'addCredits.purchaseDialog.kyc.title' | transloco }}\r
            </h3>\r
            <p class="text-sm leading-6 text-stone-600 dark:text-stone-400">\r
                {{ 'addCredits.purchaseDialog.kyc.description' | transloco }}\r
            </p>\r
\r
            <button\r
                mat-flat-button\r
                color="primary"\r
                type="button"\r
                class="!mt-1 w-full !min-h-11 !rounded-xl !px-5"\r
                (click)="startKyc()"\r
                [disabled]="loading"\r
            >\r
                <mat-spinner *ngIf="loading" diameter="24" class="inline-block"></mat-spinner>\r
                <span *ngIf="!loading">{{ 'addCredits.purchaseDialog.kyc.startKyc' | transloco }}</span>\r
            </button>\r
\r
            <button\r
                mat-button\r
                type="button"\r
                class="!min-h-10 !rounded-xl text-sm font-medium text-stone-600 dark:text-stone-400"\r
                (click)="close()"\r
                [disabled]="loading"\r
            >\r
                {{ 'addCredits.purchaseDialog.kyc.close' | transloco }}\r
            </button>\r
        </div>\r
    </div>\r
</div>\r
`, styles: ["/* src/app/modules/add-credits/purchase-credits-dialog/purchase-credits-dialog.component.scss */\n.purchase-credits-dialog-panel.cdk-overlay-pane {\n  max-width: min(500px, 94vw);\n  max-height: calc(100vh - 1.5rem);\n  max-height: calc(100dvh - 1.5rem);\n}\n.purchase-credits-dialog-panel .mat-mdc-dialog-container {\n  padding: 0 !important;\n  overflow: hidden;\n  display: flex;\n  max-height: inherit;\n  --mdc-dialog-container-color: transparent;\n  --mdc-dialog-container-elevation: none;\n}\n.purchase-credits-dialog-panel .mat-mdc-dialog-surface {\n  background-color: transparent !important;\n  box-shadow: none !important;\n  display: flex;\n  flex: 1 1 auto;\n  min-height: 0;\n  max-height: inherit;\n  overflow: hidden;\n}\n.purchase-credits-dialog-panel .purchase-credits-dialog-card {\n  display: flex;\n  flex-direction: column;\n  min-height: 0;\n  max-height: calc(100vh - 1.5rem);\n  max-height: calc(100dvh - 1.5rem);\n  width: 100%;\n}\n.purchase-credits-dialog-panel .mat-mdc-dialog-content.purchase-credits-dialog-content {\n  flex: 1 1 auto;\n  min-height: 0;\n  max-height: none !important;\n  overflow-y: auto !important;\n  overscroll-behavior: contain;\n  -webkit-overflow-scrolling: touch;\n}\n.dark .purchase-credits-dialog-panel .mat-mdc-dialog-container {\n  --mdc-dialog-container-color: transparent;\n}\n.dark .purchase-credits-dialog-panel .mat-mdc-dialog-surface {\n  background-color: transparent !important;\n}\n@media (max-height: 720px) {\n  .purchase-credits-dialog-panel .purchase-credits-dialog-lead {\n    display: none;\n  }\n  .purchase-credits-dialog-panel .purchase-credits-dialog-header,\n  .purchase-credits-dialog-panel .purchase-credits-dialog-footer {\n    padding-top: 0.875rem;\n    padding-bottom: 0.875rem;\n  }\n  .purchase-credits-dialog-panel .mat-mdc-dialog-content.purchase-credits-dialog-content {\n    gap: 1rem;\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n  }\n}\n@media (max-width: 480px) {\n  .purchase-credits-dialog-panel.cdk-overlay-pane {\n    max-width: calc(100vw - 1rem);\n  }\n}\n.mat-mdc-raised-button mat-spinner,\n.mat-mdc-raised-button mat-progress-spinner,\n.mat-mdc-unelevated-button mat-spinner,\n.mat-mdc-unelevated-button mat-progress-spinner,\n.mat-mdc-outlined-button mat-spinner,\n.mat-mdc-outlined-button mat-progress-spinner,\n.mat-mdc-button mat-spinner,\n.mat-mdc-button mat-progress-spinner {\n  display: inline-block;\n  vertical-align: middle;\n}\n/*# sourceMappingURL=purchase-credits-dialog.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PurchaseCreditsDialogComponent, { className: "PurchaseCreditsDialogComponent", filePath: "src/app/modules/add-credits/purchase-credits-dialog/purchase-credits-dialog.component.ts", lineNumber: 80 });
})();

// src/app/modules/add-credits/add-credits.component.ts
var _c04 = () => ["/subscription-plans"];
var _c12 = (a0, a1, a2, a3) => ({ "border-stone-200/90 bg-white dark:border-gray-800 dark:bg-gray-950": a0, "border-emerald-200/90 bg-emerald-50 dark:border-emerald-900/60 dark:bg-emerald-950/40": a1, "border-amber-200/90 bg-amber-50 dark:border-amber-900/60 dark:bg-amber-950/40": a2, "border-rose-200/90 bg-rose-50 dark:border-rose-900/60 dark:bg-rose-950/40": a3 });
var _c22 = (a0, a1, a2, a3) => ({ "text-emerald-700 dark:text-emerald-400": a0, "text-amber-700 dark:text-amber-400": a1, "text-rose-700 dark:text-rose-400": a2, "text-stone-500 dark:text-stone-400": a3 });
var _c32 = (a0) => ({ multiplier: a0 });
var _c42 = (a0) => ({ expiresAt: a0 });
var _c5 = (a0, a1) => ({ multiplier: a0, exampleReceived: a1 });
var _c6 = (a0, a1) => ({ minUsd: a0, maxBonusUsd: a1 });
var _c7 = (a0) => ({ amount: a0 });
var _c8 = (a0) => ({ "grid-template-columns": a0 });
function AddCreditsComponent_ng_container_0_section_20_mat_spinner_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 58);
  }
}
function AddCreditsComponent_ng_container_0_section_20_mat_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 59);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const boldState_r3 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(2, _c22, boldState_r3 === "approved", boldState_r3 === "pending", boldState_r3 === "failed", boldState_r3 === "abandoned" || boldState_r3 === "unknown"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(boldState_r3 === "approved" ? "check_circle" : boldState_r3 === "pending" ? "schedule" : boldState_r3 === "abandoned" ? "remove_shopping_cart" : boldState_r3 === "unknown" ? "help_outline" : "error_outline");
  }
}
function AddCreditsComponent_ng_container_0_section_20_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 60);
    \u0275\u0275listener("click", function AddCreditsComponent_ng_container_0_section_20_button_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.dismissBoldReturnNotice());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r5 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r5("addCredits.bold.return.dismiss"), " ");
  }
}
function AddCreditsComponent_ng_container_0_section_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 52)(1, "div", 53);
    \u0275\u0275template(2, AddCreditsComponent_ng_container_0_section_20_mat_spinner_2_Template, 1, 0, "mat-spinner", 54)(3, AddCreditsComponent_ng_container_0_section_20_mat_icon_3_Template, 2, 7, "mat-icon", 55);
    \u0275\u0275elementStart(4, "p", 56);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, AddCreditsComponent_ng_container_0_section_20_button_6_Template, 2, 1, "button", 57);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const boldState_r3 = ctx.ngIf;
    const t_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(5, _c12, boldState_r3 === "confirming" || boldState_r3 === "abandoned" || boldState_r3 === "unknown", boldState_r3 === "approved", boldState_r3 === "pending", boldState_r3 === "failed"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", boldState_r3 === "confirming");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", boldState_r3 !== "confirming");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r5("addCredits.bold.return." + boldState_r3), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", boldState_r3 !== "confirming");
  }
}
function AddCreditsComponent_ng_container_0_section_21_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_5_0;
    const t_r5 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r5("addCredits.promo.bringBack.bodyTriple", \u0275\u0275pureFunction1(1, _c32, ((tmp_5_0 = ctx_r1.bringBackOffer()) == null ? null : tmp_5_0.multiplier) || 3)), " ");
  }
}
function AddCreditsComponent_ng_container_0_section_21_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    let tmp_5_0;
    const t_r5 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", t_r5("addCredits.promo.bringBack.body", \u0275\u0275pureFunction2(1, _c5, ((tmp_5_0 = ctx_r1.bringBackOffer()) == null ? null : tmp_5_0.multiplier) || 2, ctx_r1.bringBackExampleReceived())), " ");
  }
}
function AddCreditsComponent_ng_container_0_section_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 61)(1, "div", 62)(2, "div", 63)(3, "div", 64)(4, "mat-icon", 65);
    \u0275\u0275text(5, "local_offer");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 66)(7, "p", 67);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "h2", 68);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 69);
    \u0275\u0275template(12, AddCreditsComponent_ng_container_0_section_21_ng_container_12_Template, 2, 3, "ng-container", 70)(13, AddCreditsComponent_ng_container_0_section_21_ng_template_13_Template, 1, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p", 71);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "a", 72)(19, "mat-icon", 38);
    \u0275\u0275text(20, "credit_card");
    \u0275\u0275elementEnd();
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_6_0;
    let tmp_8_0;
    const bringBackDoubleBody_r6 = \u0275\u0275reference(14);
    const t_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", t_r5("addCredits.promo.bringBack.badge"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r5("addCredits.promo.bringBack.title", \u0275\u0275pureFunction1(9, _c32, ((tmp_5_0 = ctx_r1.bringBackOffer()) == null ? null : tmp_5_0.multiplier) || 2)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ((tmp_6_0 = ctx_r1.bringBackOffer()) == null ? null : tmp_6_0.tier) === "triple")("ngIfElse", bringBackDoubleBody_r6);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r5("addCredits.promo.bringBack.deadline", \u0275\u0275pureFunction1(11, _c42, \u0275\u0275pipeBind2(17, 6, (tmp_8_0 = ctx_r1.bringBackOffer()) == null ? null : tmp_8_0.expiresAt, "medium") || "")), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", t_r5("addCredits.promo.bringBack.ctaSubscribe"), " ");
  }
}
function AddCreditsComponent_ng_container_0_section_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 73)(1, "p", 74);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2", 75);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 76);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 77);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 78);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_7_0;
    const t_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r5("addCredits.promo.weekOneUsd50.badge"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r5("addCredits.promo.weekOneUsd50.title"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r5("addCredits.promo.weekOneUsd50.body"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r5("addCredits.promo.weekOneUsd50.accountCreatedNotice"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r5("addCredits.promo.weekOneUsd50.deadline", \u0275\u0275pureFunction1(8, _c42, \u0275\u0275pipeBind2(11, 5, (tmp_7_0 = ctx_r1.weekOneUsd50Promotion()) == null ? null : tmp_7_0.expiresAt, "medium") || "")), " ");
  }
}
function AddCreditsComponent_ng_container_0_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 79)(1, "mat-icon", 80);
    \u0275\u0275text(2, "campaign");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 81);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const t_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r5("addCredits.promo.bringBack.walletStrip", \u0275\u0275pureFunction2(1, _c5, ((tmp_3_0 = ctx_r1.bringBackOffer()) == null ? null : tmp_3_0.multiplier) || 2, ctx_r1.bringBackExampleReceived())), " ");
  }
}
function AddCreditsComponent_ng_container_0_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 82)(1, "mat-icon", 83);
    \u0275\u0275text(2, "campaign");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 84);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r5("addCredits.promo.weekOneUsd50.walletStrip", \u0275\u0275pureFunction2(1, _c6, ctx_r1.weekOneUsd50PromoMinLabel(), ctx_r1.weekOneUsd50PromoMaxBonusLabel())), " ");
  }
}
function AddCreditsComponent_ng_container_0_div_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 85)(1, "mat-icon", 86);
    \u0275\u0275text(2, "lock_clock");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 87)(4, "p", 88);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 89);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const t_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", t_r5("addCredits.pendingWelcome.title", \u0275\u0275pureFunction1(5, _c7, \u0275\u0275pipeBind2(6, 2, ((tmp_3_0 = ctx_r1.pendingWelcomeCredits()) == null ? null : tmp_3_0.amount) || 0, "1.0-2"))), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r5("addCredits.pendingWelcome.body"), " ");
  }
}
function AddCreditsComponent_ng_container_0_div_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 90);
    \u0275\u0275element(1, "mat-spinner", 91);
    \u0275\u0275elementStart(2, "p", 92);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r5("addCredits.paymentMethods.manage"), "... ");
  }
}
function AddCreditsComponent_ng_container_0_div_62_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 93)(1, "mat-icon", 94);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 95);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 96);
    \u0275\u0275listener("click", function AddCreditsComponent_ng_container_0_div_62_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.loadData());
    });
    \u0275\u0275elementStart(6, "mat-icon", 38);
    \u0275\u0275text(7, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const t_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.error());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(t_r5("settings.profile.save_error"));
  }
}
function AddCreditsComponent_ng_container_0_div_63_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 97)(1, "div", 98)(2, "mat-icon");
    \u0275\u0275text(3, "credit_card_off");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "h3", 99);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 100);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 101);
    \u0275\u0275listener("click", function AddCreditsComponent_ng_container_0_div_63_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openAddCardDialog());
    });
    \u0275\u0275elementStart(9, "mat-icon", 38);
    \u0275\u0275text(10, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const t_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(t_r5("addCredits.noCards"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r5("addCredits.noCardsDesc"));
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.loading() || !ctx_r1.billingActionsAllowed());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r5("addCredits.addCard"));
  }
}
function AddCreditsComponent_ng_container_0_div_64_app_payment_card_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-payment-card", 104);
    \u0275\u0275listener("setDefault", function AddCreditsComponent_ng_container_0_div_64_app_payment_card_1_Template_app_payment_card_setDefault_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onCardSetDefault($event));
    })("delete", function AddCreditsComponent_ng_container_0_div_64_app_payment_card_1_Template_app_payment_card_delete_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onCardDeleted($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const card_r10 = ctx.$implicit;
    \u0275\u0275property("card", card_r10)("isDefault", card_r10.isDefault);
  }
}
function AddCreditsComponent_ng_container_0_div_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 102);
    \u0275\u0275template(1, AddCreditsComponent_ng_container_0_div_64_app_payment_card_1_Template, 1, 2, "app-payment-card", 103);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.cards());
  }
}
function AddCreditsComponent_ng_container_0_div_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 105)(1, "div", 106);
    \u0275\u0275element(2, "span", 107);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 108)(5, "div", 109)(6, "span", 110);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 111);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 109)(11, "span", 110);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p", 111);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_7_0;
    const t_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r5("addCredits.autoRecharge.status.active"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r5("addCredits.autoRecharge.dialog.balanceThreshold"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (tmp_5_0 = ctx_r1.autoRechargeConfig()) == null ? null : tmp_5_0.minThreshold, " credits ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r5("addCredits.autoRecharge.dialog.rechargeAmount"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (tmp_7_0 = ctx_r1.autoRechargeConfig()) == null ? null : tmp_7_0.minRecharge, " credits ");
  }
}
function AddCreditsComponent_ng_container_0_div_77_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 112)(1, "div", 113);
    \u0275\u0275element(2, "span", 114);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 115);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r5("addCredits.autoRecharge.status.inactive"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r5("addCredits.autoRecharge.description"), " ");
  }
}
function AddCreditsComponent_ng_container_0_div_92_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 116);
    \u0275\u0275element(1, "div", 117)(2, "div", 117)(3, "div", 117);
    \u0275\u0275elementEnd();
  }
}
function AddCreditsComponent_ng_container_0_div_93_div_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 124);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r5 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r5("addCredits.subscriptionPlans.bestValue"), " ");
  }
}
function AddCreditsComponent_ng_container_0_div_93_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 120);
    \u0275\u0275template(1, AddCreditsComponent_ng_container_0_div_93_div_1_span_1_Template, 2, 1, "span", 121);
    \u0275\u0275elementStart(2, "span", 122);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 123);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tier_r11 = ctx.$implicit;
    \u0275\u0275property("ngClass", tier_r11.isBestValue ? "!border-stone-950 dark:!border-white" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", tier_r11.isBestValue);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" $", \u0275\u0275pipeBind2(4, 4, tier_r11.plan.amount, "1.0-0"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", tier_r11.label, " ");
  }
}
function AddCreditsComponent_ng_container_0_div_93_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 118);
    \u0275\u0275template(1, AddCreditsComponent_ng_container_0_div_93_div_1_Template, 7, 7, "div", 119);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(3, _c8, "repeat(" + ctx_r1.sidebarPlanTiers().length + ", minmax(0, 1fr))"));
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.sidebarPlanTiers())("ngForTrackBy", ctx_r1.trackBySidebarTier);
  }
}
function AddCreditsComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "billing-required-dialog", 2);
    \u0275\u0275listener("goToBilling", function AddCreditsComponent_ng_container_0_Template_billing_required_dialog_goToBilling_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToBillingDetails());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 3)(3, "header", 4)(4, "div", 5)(5, "div", 6)(6, "a", 7);
    \u0275\u0275text(7, " Verifik ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "mat-icon", 8);
    \u0275\u0275elementStart(9, "span", 9);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 10)(12, "div", 11)(13, "h1", 12);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p", 13);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "button", 14);
    \u0275\u0275listener("click", function AddCreditsComponent_ng_container_0_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openPurchaseCreditsDialog());
    });
    \u0275\u0275elementStart(18, "span");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275template(20, AddCreditsComponent_ng_container_0_section_20_Template, 7, 10, "section", 15)(21, AddCreditsComponent_ng_container_0_section_21_Template, 22, 13, "section", 16);
    \u0275\u0275elementStart(22, "main", 17);
    \u0275\u0275template(23, AddCreditsComponent_ng_container_0_section_23_Template, 12, 10, "section", 18);
    \u0275\u0275elementStart(24, "div", 19)(25, "section", 20)(26, "div", 21);
    \u0275\u0275template(27, AddCreditsComponent_ng_container_0_div_27_Template, 5, 4, "div", 22)(28, AddCreditsComponent_ng_container_0_div_28_Template, 5, 4, "div", 23);
    \u0275\u0275elementStart(29, "div", 24)(30, "div", 25)(31, "mat-icon");
    \u0275\u0275text(32, "account_balance_wallet");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div")(34, "p", 26);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 27)(37, "span", 28);
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "span", 29);
    \u0275\u0275text(41);
    \u0275\u0275pipe(42, "lowercase");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(43, AddCreditsComponent_ng_container_0_div_43_Template, 9, 7, "div", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 31)(45, "div", 32)(46, "div", 33)(47, "div", 34)(48, "mat-icon");
    \u0275\u0275text(49, "credit_card");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div")(51, "h2", 35);
    \u0275\u0275text(52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "p", 36);
    \u0275\u0275text(54);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(55, "button", 37);
    \u0275\u0275listener("click", function AddCreditsComponent_ng_container_0_Template_button_click_55_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openAddCardDialog());
    });
    \u0275\u0275elementStart(56, "mat-icon", 38);
    \u0275\u0275text(57, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "span");
    \u0275\u0275text(59);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(60, "div", 39);
    \u0275\u0275template(61, AddCreditsComponent_ng_container_0_div_61_Template, 4, 1, "div", 40)(62, AddCreditsComponent_ng_container_0_div_62_Template, 10, 2, "div", 41)(63, AddCreditsComponent_ng_container_0_div_63_Template, 13, 4, "div", 42)(64, AddCreditsComponent_ng_container_0_div_64_Template, 2, 1, "div", 43);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(65, "aside", 20)(66, "div", 21)(67, "div", 33)(68, "div", 34)(69, "mat-icon");
    \u0275\u0275text(70, "autorenew");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(71, "div")(72, "h3", 35);
    \u0275\u0275text(73);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "p", 36);
    \u0275\u0275text(75);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(76, AddCreditsComponent_ng_container_0_div_76_Template, 15, 5, "div", 44)(77, AddCreditsComponent_ng_container_0_div_77_Template, 6, 2, "div", 45);
    \u0275\u0275elementStart(78, "button", 46);
    \u0275\u0275listener("click", function AddCreditsComponent_ng_container_0_Template_button_click_78_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openAutoRechargeSettings());
    });
    \u0275\u0275elementStart(79, "mat-icon", 38);
    \u0275\u0275text(80, "settings");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "span");
    \u0275\u0275text(82);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(83, "div", 21)(84, "div", 47)(85, "div", 34)(86, "mat-icon");
    \u0275\u0275text(87, "verified");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(88, "h3", 35);
    \u0275\u0275text(89);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(90, "p", 48);
    \u0275\u0275text(91);
    \u0275\u0275elementEnd();
    \u0275\u0275template(92, AddCreditsComponent_ng_container_0_div_92_Template, 4, 0, "div", 49)(93, AddCreditsComponent_ng_container_0_div_93_Template, 2, 5, "div", 50);
    \u0275\u0275elementStart(94, "button", 51)(95, "span");
    \u0275\u0275text(96);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(97, "mat-icon", 38);
    \u0275\u0275text(98, "arrow_forward");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_14_0;
    let tmp_27_0;
    let tmp_28_0;
    const t_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("isOpen", ctx_r1.showBillingRequiredModal);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(t_r5("addCredits.title"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r5("addCredits.hero.title"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r5("addCredits.hero.subtitle"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.loading() || !ctx_r1.billingActionsAllowed());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r5("addCredits.purchaseCredits"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.boldReturnState());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showBringBackPromoBanner());
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.showWeekOneUsd50PromoBanner());
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.showBringBackPromoBanner());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showWeekOneUsd50PromoBanner());
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", t_r5("addCredits.availableCredits"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(39, 35, ((tmp_14_0 = ctx_r1.balance()) == null ? null : tmp_14_0.totalCredits) || 0, "1.2-2"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(42, 38, t_r5("userMenu.credits")), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.showPendingWelcomeCreditsBanner());
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" ", t_r5("addCredits.paymentMethods.title"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r5("addCredits.paymentMethods.manage"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.loading() || !ctx_r1.billingActionsAllowed());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r5("addCredits.addCard"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.loading());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.error() && !ctx_r1.loading());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loading() && !ctx_r1.error() && !ctx_r1.hasCards());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loading() && !ctx_r1.error() && ctx_r1.hasCards());
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" ", t_r5("addCredits.autoRecharge.title"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r5("addCredits.autoRecharge.subtitle"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_27_0 = ctx_r1.autoRechargeConfig()) == null ? null : tmp_27_0.hasAutoCharge);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !((tmp_28_0 = ctx_r1.autoRechargeConfig()) == null ? null : tmp_28_0.hasAutoCharge));
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.loading());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r5("addCredits.autoRecharge.configure"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", t_r5("addCredits.subscriptionPlans.title"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r5("addCredits.subscriptionPlans.description"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.pricingPlansLoading());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.pricingPlansLoading() && ctx_r1.sidebarPlanTiers().length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(40, _c04));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r5("addCredits.subscriptionPlans.viewAllPlans"));
  }
}
var BOLD_CONFIRM_ATTEMPTS = 5;
var BOLD_CONFIRM_RETRY_MS = 3e3;
var AddCreditsComponent = class _AddCreditsComponent {
  constructor() {
    this._creditsService = inject(CreditsService);
    this._paymentService = inject(PaymentService);
    this._subscriptionService = inject(SubscriptionService);
    this._dialog = inject(MatDialog);
    this._authService = inject(AuthService);
    this._userService = inject(UserService);
    this._activatedRoute = inject(ActivatedRoute);
    this._router = inject(Router);
    this.cards = this._creditsService.cards;
    this.balance = this._creditsService.balance;
    this.autoRechargeConfig = this._creditsService.autoRechargeConfig;
    this.loading = this._creditsService.loading;
    this.error = this._creditsService.error;
    this.pricingPlansLoading = signal(false);
    this.sidebarPlanTiers = signal([]);
    this.weekOneUsd50Promotion = signal(void 0);
    this.bringBackOffer = signal(void 0);
    this.pendingWelcomeCredits = signal(void 0);
    this.showBringBackPromoBanner = computed(() => Boolean(this.bringBackOffer()?.eligible));
    this.showWeekOneUsd50PromoBanner = computed(() => Boolean(this.weekOneUsd50Promotion()?.eligible) && !this.showBringBackPromoBanner());
    this.showPendingWelcomeCreditsBanner = computed(() => {
      const pending = this.pendingWelcomeCredits();
      return Boolean((pending?.lockedUntilPurchase || pending?.lockedUntilApproval) && (pending.amount ?? 0) > 0);
    });
    this.weekOneUsd50PromoMinLabel = computed(() => `$${this.weekOneUsd50Promotion()?.minPurchaseUsd ?? 49}`);
    this.weekOneUsd50PromoMaxBonusLabel = computed(() => `$${this.weekOneUsd50Promotion()?.maxBonusUsd ?? 2e3}`);
    this.bringBackExampleReceived = computed(() => {
      const multiplier = this.bringBackOffer()?.multiplier ?? 2;
      return 50 * multiplier;
    });
    this.boldReturnState = signal(null);
    this.billingCheckResolved = signal(false);
    this.hasBillingSetup = signal(false);
    this.showBillingRequiredModal = false;
    this.billingActionsAllowed = computed(() => this.billingCheckResolved() && this.hasBillingSetup());
    this.hasCards = computed(() => this.cards().length > 0);
    this.defaultCard = computed(() => this.cards().find((card) => card.isDefault));
  }
  ngOnInit() {
    const hasToken = !!localStorage.getItem("accessToken");
    if (!hasToken) {
      this.openAuthModal();
      return;
    }
    this._maybeSyncStripeCheckoutThenLoadData();
    this._reportBoldOrderState();
    this._loadBillingGateForAddCredits();
  }
  /**
   * Bold redirects to `/add-credits?bold-order-id=...` after the gateway closes, but a customer can
   * equally come back hours later or from another device, so anything not handed over in the URL is
   * read from the server. Credits come from the webhook; this only reports where the order stands.
   */
  _reportBoldOrderState() {
    const orderId = this._consumeBoldReturnOrderId();
    if (orderId) {
      this.boldReturnState.set("confirming");
      this._confirmBoldOrder(orderId, 1);
      return;
    }
    this._reconcileOpenBoldOrders();
  }
  /**
   * Strips Bold's parameters from the URL so a refresh does not replay the return trip.
   * @returns The order reference Bold came back with, if this load is that trip.
   */
  _consumeBoldReturnOrderId() {
    const orderId = this._activatedRoute.snapshot.queryParamMap.get("bold-order-id");
    if (!orderId) {
      return null;
    }
    void this._router.navigate(["/add-credits"], { replaceUrl: true });
    return orderId;
  }
  /**
   * @param orderId Order reference sent to Bold.
   * @param attempt 1-based; PSE and delayed webhooks need a few passes before giving up.
   */
  _confirmBoldOrder(orderId, attempt) {
    this._paymentService.confirmBoldPurchase(orderId).subscribe({
      next: (response) => {
        const state = this._boldStateFromConfirm(response.data);
        if (state === "approved") {
          this.boldReturnState.set("approved");
          this._refreshSessionAndBalance();
          return;
        }
        if (state === "pending" && attempt < BOLD_CONFIRM_ATTEMPTS) {
          setTimeout(() => this._confirmBoldOrder(orderId, attempt + 1), BOLD_CONFIRM_RETRY_MS);
          return;
        }
        this.boldReturnState.set(state);
      },
      error: (err) => {
        console.error("Failed to confirm Bold order:", err);
        this.boldReturnState.set("unknown");
      }
    });
  }
  /** An order written off for never being paid also reads as `failed`, so check that flag first. */
  _boldStateFromConfirm(data) {
    if (data?.abandoned) {
      return "abandoned";
    }
    const status = data?.transaction?.status;
    if (status === "approved" || status === "failed" || status === "pending") {
      return status;
    }
    return "unknown";
  }
  /**
   * A plain visit: the server re-polls whatever this client left open, so a PSE debit that settled
   * hours later is picked up here. Only money that may still be moving is worth interrupting for —
   * an old abandoned checkout resolves silently.
   */
  _reconcileOpenBoldOrders() {
    this._paymentService.reconcileBoldOrders().subscribe({
      next: (response) => {
        const order = this._mostRelevantBoldOrder(response.data?.orders ?? []);
        if (order?.state === "approved") {
          this.boldReturnState.set("approved");
          this._refreshSessionAndBalance();
          return;
        }
        if (order?.state === "pending") {
          this.boldReturnState.set("pending");
        }
      },
      error: (err) => console.error("Failed to reconcile Bold orders:", err)
    });
  }
  /** Server sends newest first; an order that just settled outranks one still waiting. */
  _mostRelevantBoldOrder(orders) {
    return orders.find((order) => order.state === "approved") ?? orders[0];
  }
  dismissBoldReturnNotice() {
    this.boldReturnState.set(null);
  }
  /**
   * A purchase consumes the first-week promo and can settle a win-back offer, so the refreshed
   * session has to reach the banners too. Without this the page keeps advertising a promo the
   * customer already redeemed until they reload.
   */
  _refreshSessionAndBalance() {
    this._authService.refreshSession().subscribe({
      next: (user) => {
        this._applySessionOffers(user);
        this._creditsService.getBalance().subscribe();
      },
      error: (err) => {
        console.error("Failed to refresh session after payment:", err);
        this._creditsService.getBalance().subscribe();
      }
    });
  }
  /** @param user Session user, or null when the session call failed. */
  _applySessionOffers(user) {
    const bringBack = user?.bringBackOffer;
    this.bringBackOffer.set(bringBack?.kind === "bring_back" && bringBack.eligible ? bringBack : void 0);
    const promo = user?.promotion;
    this.weekOneUsd50Promotion.set(promo?.kind === "smart_agent_week1_usd50" && promo.eligible ? promo : void 0);
    const pending = user?.pendingWelcomeCredits;
    this.pendingWelcomeCredits.set((pending?.lockedUntilPurchase || pending?.lockedUntilApproval) && (pending.amount ?? 0) > 0 ? pending : void 0);
  }
  /**
   * Billing details (invoiceSettings) gate — same completeness as subscription-plans.
   */
  _loadBillingGateForAddCredits() {
    this._subscriptionService.getBillingConfig({ findOne: true }).subscribe({
      next: (response) => {
        const cs = extractClientSettingsPayload(response);
        const inv = cs?.invoiceSettings;
        const ok = invoiceBillingDetailsComplete(inv);
        this.hasBillingSetup.set(ok);
        this.billingCheckResolved.set(true);
        if (!ok) {
          this.showBillingRequiredModal = true;
        }
      },
      error: (err) => {
        console.error("Error loading billing config:", err);
        this.hasBillingSetup.set(false);
        this.billingCheckResolved.set(true);
        this.showBillingRequiredModal = true;
      }
    });
  }
  goToBillingDetails() {
    this.showBillingRequiredModal = false;
    void this._router.navigate(["/settings", "billing-details"], {
      queryParams: { returnUrl: "/add-credits" }
    });
  }
  /**
   * @returns True when caller should bail (billing missing or awaiting billing GET).
   */
  _billingGateBlocksPurchaseOrCardSetup() {
    if (!this.billingCheckResolved()) {
      return true;
    }
    if (this.hasBillingSetup()) {
      return false;
    }
    this.showBillingRequiredModal = true;
    return true;
  }
  /**
   * If Stripe redirects back with Checkout session id, persist card before webhook arrives.
   */
  _maybeSyncStripeCheckoutThenLoadData() {
    const qp = this._activatedRoute.snapshot.queryParamMap;
    const sessionRaw = qp.get("session_id") ?? qp.get("sessionId");
    if (!sessionRaw?.startsWith("cs_")) {
      this.loadData();
      return;
    }
    this._paymentService.syncCheckoutSession(sessionRaw).subscribe({
      next: () => {
        void this._router.navigate(["/add-credits"], { replaceUrl: true }).then(() => this.loadData());
      },
      error: (err) => {
        console.error("Failed to sync card from Stripe Checkout:", err);
        void this._router.navigate(["/add-credits"], { replaceUrl: true }).then(() => this.loadData());
      }
    });
  }
  loadData() {
    this.pricingPlansLoading.set(true);
    forkJoin({
      cards: this._creditsService.getCards(),
      balance: this._creditsService.getBalance(),
      autoRecharge: this._creditsService.getAutoRechargeConfig(),
      session: this._userService.get().pipe(catchError((err) => {
        console.error("Failed to load session:", err);
        return of(null);
      })),
      pricing: this._subscriptionService.getPricingTableDisplay({ lang: this._getCurrentLang() }).pipe(catchError((err) => {
        console.error("Failed to load pricing table for sidebar:", err);
        return of({ data: { plans: [] } });
      }))
    }).subscribe({
      next: (result) => {
        this._applySessionOffers(result.session);
        const rawPlans = result.pricing?.data?.plans ?? [];
        this.sidebarPlanTiers.set(this._buildSidebarPlanTiers(rawPlans));
        this.pricingPlansLoading.set(false);
        this.cleanupExpiredCards();
      },
      error: (err) => {
        console.error("Failed to load data:", err);
        this.pricingPlansLoading.set(false);
      }
    });
  }
  _getCurrentLang() {
    const lang = typeof navigator !== "undefined" && navigator.language || "en";
    return lang.startsWith("es") ? "es" : lang.startsWith("fr") ? "fr" : "en";
  }
  /**
   * Aligns with subscription-plans: displayName, monthly only, Basic / Plus / Business when possible.
   */
  _buildSidebarPlanTiers(plans) {
    const monthly = plans.filter((p) => p.interval === "month");
    const processed = [];
    const seen = {};
    monthly.forEach((plan) => {
      const withDisplay = plan;
      const name = withDisplay.displayName || plan.name;
      const merged = __spreadProps(__spreadValues({}, plan), { name });
      if (merged._id && !seen[merged._id]) {
        seen[merged._id] = true;
        processed.push(merged);
      }
    });
    processed.sort((a, b) => (a.amount || 0) - (b.amount || 0));
    const nameOf = (p) => (p.name || "").toLowerCase();
    const findTier = (kind) => {
      return processed.find((p) => {
        const n = nameOf(p);
        if (kind === "basic") {
          return /\bbasic\b/.test(n) || n.includes("b\xE1sico");
        }
        if (kind === "plus") {
          return /\bplus\b/.test(n);
        }
        return /\bbusiness\b/.test(n) || /\benterprise\b/.test(n) || n.includes("empresarial");
      });
    };
    const basic = findTier("basic");
    const plus = findTier("plus");
    const business = findTier("business");
    const pickedIds = /* @__PURE__ */ new Set();
    const ordered = [];
    for (const p of [basic, plus, business]) {
      if (p?._id && !pickedIds.has(p._id)) {
        pickedIds.add(p._id);
        ordered.push(p);
      }
    }
    if (ordered.length < 3) {
      for (const p of processed) {
        if (ordered.length >= 3)
          break;
        if (pickedIds.has(p._id))
          continue;
        if (/\bstarter\b/i.test(p.name || ""))
          continue;
        pickedIds.add(p._id);
        ordered.push(p);
      }
    }
    if (ordered.length < 3) {
      for (const p of processed) {
        if (ordered.length >= 3)
          break;
        if (pickedIds.has(p._id))
          continue;
        pickedIds.add(p._id);
        ordered.push(p);
      }
    }
    const finalTiers = ordered.slice(0, 3);
    const hasPlus = finalTiers.some((p) => /\bplus\b/i.test(p.name || ""));
    return finalTiers.map((plan, index) => ({
      plan,
      label: plan.name,
      isBestValue: hasPlus ? /\bplus\b/i.test(plan.name || "") : finalTiers.length === 3 && index === 1
    }));
  }
  /**
   * Check for expired cards and automatically delete them
   * If default card is expired, set another card as default
   * If auto-recharge uses an expired card, disable it
   */
  cleanupExpiredCards() {
    const currentCards = this.cards();
    const autoRecharge = this.autoRechargeConfig();
    if (currentCards.length === 0)
      return;
    const expiredCards = currentCards.filter((card) => this.isCardExpired(card.expires_at));
    if (expiredCards.length === 0)
      return;
    expiredCards.forEach((expiredCard) => {
      this._creditsService.deleteCard(expiredCard._id).subscribe({
        next: () => {
          const remainingCards = this.cards();
          if (expiredCard.isDefault && remainingCards.length > 0) {
            const newDefaultCard = remainingCards[0];
            this._creditsService.setDefaultCard(newDefaultCard._id).subscribe({
              next: () => {
                console.log(`Set new default card: ${newDefaultCard.lastFour}`);
              },
              error: (err) => console.error("Failed to set new default card:", err)
            });
          }
          if (autoRecharge?.cardId === expiredCard._id) {
            const updatedConfig = __spreadProps(__spreadValues({}, autoRecharge), {
              hasAutoCharge: false,
              cardId: void 0
            });
            this._creditsService.updateAutoRechargeConfig(updatedConfig).subscribe({
              next: () => {
                console.log("Disabled auto-recharge due to expired card");
              },
              error: (err) => console.error("Failed to disable auto-recharge:", err)
            });
          }
        },
        error: (err) => {
          console.error(`Failed to delete expired card ${expiredCard.lastFour}:`, err);
        }
      });
    });
  }
  /**
   * Check if a card is expired based on its expiration date
   */
  isCardExpired(expiresAt) {
    if (!expiresAt)
      return false;
    try {
      let month;
      let year;
      if (expiresAt.includes("/")) {
        const parts = expiresAt.split("/").map((s) => parseInt(s.trim(), 10));
        month = parts[0];
        year = parts[1];
      } else if (expiresAt.includes("-")) {
        const parts = expiresAt.split("-").map((s) => parseInt(s.trim(), 10));
        year = parts[0];
        month = parts[1];
      } else {
        console.warn("Unknown expiration date format:", expiresAt);
        return false;
      }
      if (!month || !year)
        return false;
      const now = /* @__PURE__ */ new Date();
      const currentYear = now.getFullYear();
      const currentMonth = now.getMonth() + 1;
      if (year < currentYear)
        return true;
      if (year === currentYear && month < currentMonth)
        return true;
      return false;
    } catch (err) {
      console.error("Error parsing card expiration date:", err);
      return false;
    }
  }
  openAuthModal() {
    this._dialog.open(AuthModalComponent, {
      panelClass: "auth-modal-dialog",
      width: "400px",
      maxWidth: "100vw",
      disableClose: true
      // Prevent closing without auth
    });
  }
  onCardDeleted(cardId) {
    this._creditsService.deleteCard(cardId).subscribe({
      next: () => {
      },
      error: (err) => {
        console.error("Failed to delete card:", err);
      }
    });
  }
  onCardSetDefault(cardId) {
    this._creditsService.setDefaultCard(cardId).subscribe({
      next: () => {
      },
      error: (err) => {
        console.error("Failed to set default card:", err);
      }
    });
  }
  openAddCardDialog() {
    if (this._billingGateBlocksPurchaseOrCardSetup()) {
      return;
    }
    this._paymentService.createStripeCard().subscribe({
      next: () => {
      },
      error: (err) => {
        console.error("Failed to create Stripe checkout session:", err);
      }
    });
  }
  /**
   * Opens the purchase modal. Credit charge + i18n strings for duplicate/KYC/other API errors live in
   * {@link PurchaseCreditsDialogComponent} and are merged from `public/i18n/{lang}.json` plus `public/i18n/features-{lang}.json`
   * (see `TranslocoHttpLoader`: `addCredits.purchaseDialog.*`).
   *
   * Actual charging, 3DS (`confirmCardPayment`), and `POST /v2/credits/purchase/confirm` are handled in {@link PurchaseCreditsDialogComponent}.
   */
  openPurchaseCreditsDialog() {
    if (this._billingGateBlocksPurchaseOrCardSetup()) {
      return;
    }
    const currentCards = this.cards();
    const cardToUse = this.defaultCard() || currentCards[0];
    const dialogRef = this._dialog.open(PurchaseCreditsDialogComponent, {
      width: "500px",
      maxWidth: "94vw",
      maxHeight: "calc(100dvh - 1.5rem)",
      panelClass: "purchase-credits-dialog-panel",
      data: {
        card: cardToUse,
        promotion: this.weekOneUsd50Promotion(),
        bringBackOffer: this.bringBackOffer()
      }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result === "success" || result?.alreadyCompleted === true) {
        this._refreshSessionAndBalance();
      }
    });
  }
  openAutoRechargeSettings() {
    const dialogRef = this._dialog.open(AutoRechargeSettingsComponent, {
      width: "560px",
      maxWidth: "92vw",
      panelClass: "auto-recharge-dialog-panel",
      data: {
        config: this.autoRechargeConfig(),
        cards: this.cards()
      }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result === "success") {
        this._creditsService.getAutoRechargeConfig().subscribe();
      }
    });
  }
  trackBySidebarTier(_index, tier) {
    return tier.plan._id;
  }
  static {
    this.\u0275fac = function AddCreditsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AddCreditsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddCreditsComponent, selectors: [["add-credits"]], decls: 1, vars: 0, consts: [["bringBackDoubleBody", ""], [4, "transloco"], [3, "goToBilling", "isOpen"], [1, "add-credits-container", "flex", "min-h-screen", "min-w-0", "flex-auto", "flex-col", "bg-stone-50", "dark:bg-gray-950"], [1, "border-b", "border-stone-200/90", "bg-white/90", "px-5", "py-6", "backdrop-blur-sm", "dark:border-gray-800", "dark:bg-gray-950/90", "md:px-8", "md:py-8"], [1, "mx-auto", "flex", "w-full", "max-w-7xl", "flex-col", "gap-5"], [1, "flex", "flex-wrap", "items-center", "text-xs", "font-medium", "leading-none", "text-stone-500", "dark:text-stone-400"], ["routerLink", "/home", 1, "cursor-pointer", "text-stone-700", "underline-offset-4", "hover:underline", "dark:text-stone-300"], ["svgIcon", "heroicons_solid:chevron-right", 1, "icon-size-4", "mx-2", "text-stone-400"], [1, "cursor-default", "text-stone-600", "dark:text-stone-300"], [1, "flex", "flex-col", "gap-4", "lg:flex-row", "lg:items-end", "lg:justify-between"], [1, "max-w-2xl"], [1, "text-2xl", "font-semibold", "tracking-tight", "text-stone-950", "dark:text-white", "md:text-3xl"], [1, "mt-2", "text-sm", "leading-6", "text-stone-500", "dark:text-stone-400", "md:text-base"], ["mat-flat-button", "", "color", "primary", "type", "button", 1, "min-h-11", "shrink-0", "rounded-xl", "px-5", 3, "click", "disabled"], ["class", "border-b px-5 py-4 md:px-8", "role", "status", 3, "ngClass", 4, "ngIf"], ["class", "border-b border-amber-200/80 bg-gradient-to-br from-amber-50 via-white to-orange-50/80 px-5 py-6 dark:border-amber-900/60 dark:from-amber-950/50 dark:via-gray-950 dark:to-gray-950 md:px-8", 4, "ngIf"], [1, "flex", "flex-auto", "flex-col", "px-5", "py-8", "md:px-8", "md:py-10"], ["class", "credits-promo-card mx-auto mb-6 w-full max-w-7xl", "aria-labelledby", "week-one-promo-heading", 4, "ngIf"], [1, "mx-auto", "grid", "w-full", "max-w-7xl", "grid-cols-1", "gap-6", "xl:grid-cols-[minmax(0,1fr)_minmax(360px,420px)]"], [1, "flex", "flex-col", "gap-6"], [1, "rounded-2xl", "border", "border-stone-200/90", "bg-white", "p-5", "shadow-sm", "dark:border-gray-800", "dark:bg-gray-900/70", "md:p-6"], ["class", "mb-5 flex gap-3 rounded-xl border border-amber-200/90 bg-amber-50/90 px-4 py-3 text-sm dark:border-amber-800 dark:bg-amber-950/30", 4, "ngIf"], ["class", "credits-promo-strip", 4, "ngIf"], [1, "flex", "items-center", "gap-4"], [1, "flex", "h-11", "w-11", "shrink-0", "items-center", "justify-center", "rounded-xl", "border", "border-stone-200", "bg-stone-50", "text-stone-700", "dark:border-gray-800", "dark:bg-gray-950", "dark:text-stone-200"], [1, "text-xs", "font-medium", "uppercase", "tracking-[0.18em]", "text-stone-400", "dark:text-stone-500"], [1, "mt-1", "flex", "flex-wrap", "items-baseline", "gap-2"], [1, "text-3xl", "font-semibold", "tracking-tight", "text-stone-950", "dark:text-white"], [1, "text-sm", "text-stone-500", "dark:text-stone-400"], ["class", "mt-5 flex gap-3 rounded-xl border border-amber-200/90 bg-amber-50/90 px-4 py-3 text-sm dark:border-amber-800 dark:bg-amber-950/30", 4, "ngIf"], [1, "rounded-2xl", "border", "border-stone-200/90", "bg-white", "shadow-sm", "dark:border-gray-800", "dark:bg-gray-900/70"], [1, "flex", "flex-col", "gap-4", "border-b", "border-stone-200/80", "p-5", "dark:border-gray-800", "md:flex-row", "md:items-center", "md:justify-between", "md:p-6"], [1, "flex", "items-start", "gap-3"], [1, "flex", "h-10", "w-10", "shrink-0", "items-center", "justify-center", "rounded-xl", "border", "border-stone-200", "bg-stone-50", "text-stone-700", "dark:border-gray-800", "dark:bg-gray-950", "dark:text-stone-200"], [1, "text-base", "font-semibold", "text-stone-950", "dark:text-white"], [1, "mt-1", "text-sm", "text-stone-500", "dark:text-stone-400"], ["type", "button", 1, "inline-flex", "min-h-10", "items-center", "justify-center", "gap-2", "rounded-xl", "border", "border-stone-200", "px-4", "text-sm", "font-medium", "text-stone-800", "transition", "hover:bg-stone-50", "disabled:cursor-not-allowed", "disabled:opacity-60", "dark:border-gray-700", "dark:text-stone-100", "dark:hover:bg-gray-800", 3, "click", "disabled"], [1, "!h-4", "!w-4", "!text-base"], [1, "p-5", "md:p-6"], ["class", "flex flex-col items-center justify-center rounded-xl border border-dashed border-stone-200 py-14 text-center dark:border-gray-800", 4, "ngIf"], ["class", "flex flex-col items-center justify-center rounded-xl border border-red-200 bg-red-50 px-5 py-12 text-center dark:border-red-900/60 dark:bg-red-950/20", 4, "ngIf"], ["class", "flex flex-col items-center justify-center rounded-xl border border-dashed border-stone-200 px-5 py-14 text-center dark:border-gray-800", 4, "ngIf"], ["class", "flex flex-col gap-2", 4, "ngIf"], ["class", "mt-5 space-y-4", 4, "ngIf"], ["class", "mt-5", 4, "ngIf"], ["type", "button", 1, "mt-5", "inline-flex", "min-h-10", "w-full", "items-center", "justify-center", "gap-2", "rounded-xl", "border", "border-stone-200", "px-4", "text-sm", "font-medium", "text-stone-800", "transition", "hover:bg-stone-50", "disabled:cursor-not-allowed", "disabled:opacity-60", "dark:border-gray-700", "dark:text-stone-100", "dark:hover:bg-gray-800", 3, "click", "disabled"], [1, "flex", "items-center", "gap-3"], [1, "mt-4", "text-sm", "leading-6", "text-stone-500", "dark:text-stone-400"], ["class", "mt-5 grid grid-cols-3 gap-2", 4, "ngIf"], ["class", "mt-5 grid gap-2", 3, "ngStyle", 4, "ngIf"], ["type", "button", 1, "mt-5", "inline-flex", "min-h-10", "w-full", "items-center", "justify-center", "gap-2", "rounded-xl", "border", "border-stone-200", "px-4", "text-sm", "font-medium", "text-stone-800", "transition", "hover:bg-stone-50", "dark:border-gray-700", "dark:text-stone-100", "dark:hover:bg-gray-800", 3, "routerLink"], ["role", "status", 1, "border-b", "px-5", "py-4", "md:px-8", 3, "ngClass"], [1, "mx-auto", "flex", "w-full", "max-w-7xl", "items-center", "gap-3"], ["diameter", "20", 4, "ngIf"], ["class", "shrink-0", 3, "ngClass", 4, "ngIf"], [1, "m-0", "flex-1", "text-sm", "leading-relaxed", "text-stone-800", "dark:text-stone-100"], ["mat-button", "", "type", "button", "class", "!min-h-9 shrink-0 !rounded-lg text-sm font-medium", 3, "click", 4, "ngIf"], ["diameter", "20"], [1, "shrink-0", 3, "ngClass"], ["mat-button", "", "type", "button", 1, "!min-h-9", "shrink-0", "!rounded-lg", "text-sm", "font-medium", 3, "click"], [1, "border-b", "border-amber-200/80", "bg-gradient-to-br", "from-amber-50", "via-white", "to-orange-50/80", "px-5", "py-6", "dark:border-amber-900/60", "dark:from-amber-950/50", "dark:via-gray-950", "dark:to-gray-950", "md:px-8"], [1, "mx-auto", "flex", "w-full", "max-w-7xl"], [1, "flex", "min-w-0", "flex-1", "items-start", "gap-4"], [1, "flex", "h-11", "w-11", "shrink-0", "items-center", "justify-center", "rounded-xl", "bg-amber-600/15", "text-amber-800", "dark:bg-amber-400/15", "dark:text-amber-300"], [2, "transform", "scale(1.08)"], [1, "min-w-0", "space-y-2"], [1, "inline-flex", "rounded-full", "border", "border-amber-200/90", "bg-amber-100", "px-3", "py-1", "text-[11px]", "font-semibold", "uppercase", "tracking-[0.2em]", "text-amber-950", "dark:border-amber-800", "dark:bg-amber-900/50", "dark:text-amber-200"], [1, "text-lg", "font-semibold", "leading-snug", "text-amber-950", "dark:text-amber-50"], [1, "max-w-3xl", "text-sm", "leading-relaxed", "text-amber-950/95", "dark:text-amber-100/95"], [4, "ngIf", "ngIfElse"], [1, "text-sm", "font-semibold", "text-amber-950", "dark:text-amber-50"], ["routerLink", "/subscription-plans", 1, "inline-flex", "items-center", "gap-1", "text-sm", "font-semibold", "text-amber-900", "underline-offset-4", "hover:underline", "dark:text-amber-200"], ["aria-labelledby", "week-one-promo-heading", 1, "credits-promo-card", "mx-auto", "mb-6", "w-full", "max-w-7xl"], [1, "credits-promo-card__badge"], ["id", "week-one-promo-heading", 1, "credits-promo-card__title"], [1, "credits-promo-card__text"], [1, "credits-promo-card__note"], [1, "credits-promo-card__deadline"], [1, "mb-5", "flex", "gap-3", "rounded-xl", "border", "border-amber-200/90", "bg-amber-50/90", "px-4", "py-3", "text-sm", "dark:border-amber-800", "dark:bg-amber-950/30"], [1, "mt-0.5", "shrink-0", "text-amber-800", "dark:text-amber-400"], [1, "m-0", "flex-1", "leading-relaxed", "text-amber-950", "dark:text-amber-100"], [1, "credits-promo-strip"], [1, "credits-promo-strip__icon"], [1, "credits-promo-strip__text"], [1, "mt-5", "flex", "gap-3", "rounded-xl", "border", "border-amber-200/90", "bg-amber-50/90", "px-4", "py-3", "text-sm", "dark:border-amber-800", "dark:bg-amber-950/30"], [1, "mt-0.5", "shrink-0", "text-amber-700", "dark:text-amber-400"], [1, "m-0", "flex-1", "space-y-1", "leading-relaxed", "text-amber-950", "dark:text-amber-100"], [1, "m-0", "font-semibold"], [1, "m-0", "text-amber-900/90", "dark:text-amber-100/90"], [1, "flex", "flex-col", "items-center", "justify-center", "rounded-xl", "border", "border-dashed", "border-stone-200", "py-14", "text-center", "dark:border-gray-800"], ["diameter", "40"], [1, "mt-4", "text-sm", "text-stone-500", "dark:text-stone-400"], [1, "flex", "flex-col", "items-center", "justify-center", "rounded-xl", "border", "border-red-200", "bg-red-50", "px-5", "py-12", "text-center", "dark:border-red-900/60", "dark:bg-red-950/20"], [1, "text-red-500"], [1, "mt-3", "text-sm", "text-red-700", "dark:text-red-300"], ["type", "button", 1, "mt-5", "inline-flex", "min-h-10", "items-center", "justify-center", "gap-2", "rounded-xl", "border", "border-red-200", "bg-white", "px-4", "text-sm", "font-medium", "text-red-700", "transition", "hover:bg-red-50", "dark:border-red-900/60", "dark:bg-red-950/40", "dark:text-red-200", 3, "click"], [1, "flex", "flex-col", "items-center", "justify-center", "rounded-xl", "border", "border-dashed", "border-stone-200", "px-5", "py-14", "text-center", "dark:border-gray-800"], [1, "flex", "h-12", "w-12", "items-center", "justify-center", "rounded-xl", "bg-stone-100", "text-stone-500", "dark:bg-gray-800", "dark:text-stone-300"], [1, "mt-4", "text-base", "font-semibold", "text-stone-950", "dark:text-white"], [1, "mt-1", "max-w-sm", "text-sm", "text-stone-500", "dark:text-stone-400"], ["type", "button", 1, "mt-5", "inline-flex", "min-h-10", "items-center", "justify-center", "gap-2", "rounded-xl", "bg-stone-950", "px-4", "text-sm", "font-medium", "text-white", "transition", "hover:bg-stone-800", "disabled:cursor-not-allowed", "disabled:opacity-60", "dark:bg-white", "dark:text-gray-950", "dark:hover:bg-stone-200", 3, "click", "disabled"], [1, "flex", "flex-col", "gap-2"], ["class", "block", 3, "card", "isDefault", "setDefault", "delete", 4, "ngFor", "ngForOf"], [1, "block", 3, "setDefault", "delete", "card", "isDefault"], [1, "mt-5", "space-y-4"], [1, "inline-flex", "items-center", "gap-2", "rounded-full", "border", "border-emerald-200", "bg-emerald-50", "px-3", "py-1", "text-xs", "font-medium", "text-emerald-700", "dark:border-emerald-900/70", "dark:bg-emerald-950/30", "dark:text-emerald-300"], [1, "h-1.5", "w-1.5", "rounded-full", "bg-emerald-500"], [1, "grid", "grid-cols-2", "gap-3"], [1, "rounded-xl", "border", "border-stone-200", "p-3", "dark:border-gray-800"], [1, "text-xs", "text-stone-500", "dark:text-stone-400"], [1, "mt-1", "text-sm", "font-medium", "text-stone-950", "dark:text-white"], [1, "mt-5"], [1, "inline-flex", "items-center", "gap-2", "rounded-full", "border", "border-stone-200", "bg-stone-50", "px-3", "py-1", "text-xs", "font-medium", "text-stone-600", "dark:border-gray-800", "dark:bg-gray-950", "dark:text-stone-300"], [1, "h-1.5", "w-1.5", "rounded-full", "bg-stone-400"], [1, "mt-3", "text-sm", "leading-6", "text-stone-500", "dark:text-stone-400"], [1, "mt-5", "grid", "grid-cols-3", "gap-2"], [1, "h-20", "animate-pulse", "rounded-xl", "bg-stone-100", "dark:bg-gray-800"], [1, "mt-5", "grid", "gap-2", 3, "ngStyle"], ["class", "relative rounded-xl border border-stone-200 p-3 text-center dark:border-gray-800", 3, "ngClass", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "relative", "rounded-xl", "border", "border-stone-200", "p-3", "text-center", "dark:border-gray-800", 3, "ngClass"], ["class", "mb-2 inline-flex rounded-full bg-stone-950 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-white dark:bg-white dark:text-gray-950", 4, "ngIf"], [1, "block", "text-lg", "font-semibold", "text-stone-950", "dark:text-white"], [1, "mt-1", "block", "truncate", "text-xs", "text-stone-500", "dark:text-stone-400"], [1, "mb-2", "inline-flex", "rounded-full", "bg-stone-950", "px-2", "py-0.5", "text-[10px]", "font-medium", "uppercase", "tracking-wide", "text-white", "dark:bg-white", "dark:text-gray-950"]], template: function AddCreditsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, AddCreditsComponent_ng_container_0_Template, 99, 41, "ng-container", 1);
      }
    }, dependencies: [
      CommonModule,
      NgClass,
      NgForOf,
      NgIf,
      NgStyle,
      LowerCasePipe,
      DecimalPipe,
      DatePipe,
      TranslocoModule,
      TranslocoDirective,
      MatButtonModule,
      MatButton,
      MatIconModule,
      MatIcon,
      MatDialogModule,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      PaymentCardComponent,
      RouterModule,
      RouterLink,
      BillingRequiredDialogComponent
    ], styles: ["\n\n[_nghost-%COMP%] {\n  display: contents;\n}\n.add-credits-container[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.add-credits-container[_ngcontent-%COMP%]   app-payment-card[_ngcontent-%COMP%] {\n  display: block;\n}\n.credits-promo-card[_ngcontent-%COMP%] {\n  border-radius: 16px;\n  border: 1px solid rgba(148, 163, 184, 0.22);\n  background: rgb(241, 245, 249);\n  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04), 0 8px 24px rgba(15, 23, 42, 0.04);\n  padding: 1.5rem 1.5rem 1.75rem;\n}\n.dark[_nghost-%COMP%]   .credits-promo-card[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .credits-promo-card[_ngcontent-%COMP%] {\n  background: rgb(30, 41, 59);\n  border-color: rgba(148, 163, 184, 0.18);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);\n}\n.credits-promo-card__badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  margin: 0 0 0.75rem;\n  padding: 0.25rem 0.7rem;\n  border-radius: 999px;\n  border: 1px solid rgba(148, 163, 184, 0.35);\n  background: rgb(255, 255, 255);\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.16em;\n  text-transform: uppercase;\n  color: rgb(51, 65, 85);\n}\n.dark[_nghost-%COMP%]   .credits-promo-card__badge[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .credits-promo-card__badge[_ngcontent-%COMP%] {\n  background: rgba(15, 23, 42, 0.45);\n  border-color: rgba(148, 163, 184, 0.28);\n  color: rgb(226, 232, 240);\n}\n.credits-promo-card__title[_ngcontent-%COMP%] {\n  margin: 0 0 0.75rem;\n  font-size: 1.5rem;\n  font-weight: 700;\n  line-height: 1.25;\n  color: rgb(15, 23, 42);\n}\n.dark[_nghost-%COMP%]   .credits-promo-card__title[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .credits-promo-card__title[_ngcontent-%COMP%] {\n  color: rgb(248, 250, 252);\n}\n.credits-promo-card__text[_ngcontent-%COMP%], \n.credits-promo-card__note[_ngcontent-%COMP%] {\n  margin: 0 0 0.75rem;\n  max-width: 40rem;\n  font-size: 0.875rem;\n  line-height: 1.6;\n  color: rgb(71, 85, 105);\n}\n.dark[_nghost-%COMP%]   .credits-promo-card__text[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .credits-promo-card__text[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .credits-promo-card__note[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .credits-promo-card__note[_ngcontent-%COMP%] {\n  color: rgb(203, 213, 225);\n}\n.credits-promo-card__note[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n.credits-promo-card__deadline[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: rgb(15, 23, 42);\n}\n.dark[_nghost-%COMP%]   .credits-promo-card__deadline[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .credits-promo-card__deadline[_ngcontent-%COMP%] {\n  color: rgb(248, 250, 252);\n}\n.credits-promo-strip[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  margin-bottom: 1.25rem;\n  padding: 0.75rem 1rem;\n  border-radius: 12px;\n  border: 1px solid rgba(148, 163, 184, 0.22);\n  background: rgb(241, 245, 249);\n  font-size: 0.875rem;\n}\n.dark[_nghost-%COMP%]   .credits-promo-strip[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .credits-promo-strip[_ngcontent-%COMP%] {\n  background: rgb(30, 41, 59);\n  border-color: rgba(148, 163, 184, 0.18);\n}\n.credits-promo-strip__icon[_ngcontent-%COMP%] {\n  margin-top: 0.125rem;\n  flex-shrink: 0;\n  color: rgb(71, 85, 105);\n}\n.dark[_nghost-%COMP%]   .credits-promo-strip__icon[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .credits-promo-strip__icon[_ngcontent-%COMP%] {\n  color: rgb(148, 163, 184);\n}\n.credits-promo-strip__text[_ngcontent-%COMP%] {\n  margin: 0;\n  flex: 1 1 0;\n  line-height: 1.6;\n  color: rgb(15, 23, 42);\n}\n.dark[_nghost-%COMP%]   .credits-promo-strip__text[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .credits-promo-strip__text[_ngcontent-%COMP%] {\n  color: rgb(226, 232, 240);\n}\n/*# sourceMappingURL=add-credits.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddCreditsComponent, [{
    type: Component,
    args: [{ selector: "add-credits", standalone: true, imports: [
      CommonModule,
      TranslocoModule,
      MatButtonModule,
      MatIconModule,
      MatDialogModule,
      MatProgressSpinnerModule,
      PaymentCardComponent,
      RouterModule,
      BillingRequiredDialogComponent
    ], template: `<ng-container *transloco="let t">\r
    <billing-required-dialog\r
        [isOpen]="showBillingRequiredModal"\r
        (goToBilling)="goToBillingDetails()"\r
    ></billing-required-dialog>\r
\r
    <div class="add-credits-container flex min-h-screen min-w-0 flex-auto flex-col bg-stone-50 dark:bg-gray-950">\r
        <header class="border-b border-stone-200/90 bg-white/90 px-5 py-6 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-950/90 md:px-8 md:py-8">\r
            <div class="mx-auto flex w-full max-w-7xl flex-col gap-5">\r
                <div class="flex flex-wrap items-center text-xs font-medium leading-none text-stone-500 dark:text-stone-400">\r
                    <a routerLink="/home" class="cursor-pointer text-stone-700 underline-offset-4 hover:underline dark:text-stone-300">\r
                        Verifik\r
                    </a>\r
                    <mat-icon class="icon-size-4 mx-2 text-stone-400" svgIcon="heroicons_solid:chevron-right"></mat-icon>\r
                    <span class="cursor-default text-stone-600 dark:text-stone-300">{{ t('addCredits.title') }}</span>\r
                </div>\r
\r
                <div class="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">\r
                    <div class="max-w-2xl">\r
                        <h1 class="text-2xl font-semibold tracking-tight text-stone-950 dark:text-white md:text-3xl">\r
                            {{ t('addCredits.hero.title') }}\r
                        </h1>\r
                        <p class="mt-2 text-sm leading-6 text-stone-500 dark:text-stone-400 md:text-base">\r
                            {{ t('addCredits.hero.subtitle') }}\r
                        </p>\r
                    </div>\r
\r
                    <button\r
                        mat-flat-button\r
                        color="primary"\r
                        type="button"\r
                        class="min-h-11 shrink-0 rounded-xl px-5"\r
                        (click)="openPurchaseCreditsDialog()"\r
                        [disabled]="loading() || !billingActionsAllowed()"\r
                    >\r
                        <span>{{ t('addCredits.purchaseCredits') }}</span>\r
                    </button>\r
                </div>\r
            </div>\r
        </header>\r
\r
        <!-- Where a Bold order stands: settled, still at the bank, or never paid -->\r
        <section\r
            *ngIf="boldReturnState() as boldState"\r
            class="border-b px-5 py-4 md:px-8"\r
            [ngClass]="{\r
                'border-stone-200/90 bg-white dark:border-gray-800 dark:bg-gray-950':\r
                    boldState === 'confirming' || boldState === 'abandoned' || boldState === 'unknown',\r
                'border-emerald-200/90 bg-emerald-50 dark:border-emerald-900/60 dark:bg-emerald-950/40':\r
                    boldState === 'approved',\r
                'border-amber-200/90 bg-amber-50 dark:border-amber-900/60 dark:bg-amber-950/40':\r
                    boldState === 'pending',\r
                'border-rose-200/90 bg-rose-50 dark:border-rose-900/60 dark:bg-rose-950/40': boldState === 'failed'\r
            }"\r
            role="status"\r
        >\r
            <div class="mx-auto flex w-full max-w-7xl items-center gap-3">\r
                <mat-spinner *ngIf="boldState === 'confirming'" diameter="20"></mat-spinner>\r
                <mat-icon\r
                    *ngIf="boldState !== 'confirming'"\r
                    class="shrink-0"\r
                    [ngClass]="{\r
                        'text-emerald-700 dark:text-emerald-400': boldState === 'approved',\r
                        'text-amber-700 dark:text-amber-400': boldState === 'pending',\r
                        'text-rose-700 dark:text-rose-400': boldState === 'failed',\r
                        'text-stone-500 dark:text-stone-400':\r
                            boldState === 'abandoned' || boldState === 'unknown'\r
                    }"\r
                    >{{\r
                        boldState === 'approved'\r
                            ? 'check_circle'\r
                            : boldState === 'pending'\r
                              ? 'schedule'\r
                              : boldState === 'abandoned'\r
                                ? 'remove_shopping_cart'\r
                                : boldState === 'unknown'\r
                                  ? 'help_outline'\r
                                  : 'error_outline'\r
                    }}</mat-icon\r
                >\r
\r
                <p class="m-0 flex-1 text-sm leading-relaxed text-stone-800 dark:text-stone-100">\r
                    {{ t('addCredits.bold.return.' + boldState) }}\r
                </p>\r
\r
                <button\r
                    *ngIf="boldState !== 'confirming'"\r
                    mat-button\r
                    type="button"\r
                    class="!min-h-9 shrink-0 !rounded-lg text-sm font-medium"\r
                    (click)="dismissBoldReturnNotice()"\r
                >\r
                    {{ t('addCredits.bold.return.dismiss') }}\r
                </button>\r
            </div>\r
        </section>\r
\r
        <section\r
            *ngIf="showBringBackPromoBanner()"\r
            class="border-b border-amber-200/80 bg-gradient-to-br from-amber-50 via-white to-orange-50/80 px-5 py-6 dark:border-amber-900/60 dark:from-amber-950/50 dark:via-gray-950 dark:to-gray-950 md:px-8"\r
        >\r
            <div class="mx-auto flex w-full max-w-7xl">\r
                <div class="flex min-w-0 flex-1 items-start gap-4">\r
                    <div\r
                        class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-600/15 text-amber-800 dark:bg-amber-400/15 dark:text-amber-300"\r
                    >\r
                        <mat-icon style="transform: scale(1.08)">local_offer</mat-icon>\r
                    </div>\r
                    <div class="min-w-0 space-y-2">\r
                        <p\r
                            class="inline-flex rounded-full border border-amber-200/90 bg-amber-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-950 dark:border-amber-800 dark:bg-amber-900/50 dark:text-amber-200"\r
                        >\r
                            {{ t('addCredits.promo.bringBack.badge') }}\r
                        </p>\r
                        <h2 class="text-lg font-semibold leading-snug text-amber-950 dark:text-amber-50">\r
                            {{\r
                                t('addCredits.promo.bringBack.title', {\r
                                    multiplier: bringBackOffer()?.multiplier || 2,\r
                                })\r
                            }}\r
                        </h2>\r
                        <p class="max-w-3xl text-sm leading-relaxed text-amber-950/95 dark:text-amber-100/95">\r
                            <ng-container *ngIf="bringBackOffer()?.tier === 'triple'; else bringBackDoubleBody">\r
                                {{\r
                                    t('addCredits.promo.bringBack.bodyTriple', {\r
                                        multiplier: bringBackOffer()?.multiplier || 3,\r
                                    })\r
                                }}\r
                            </ng-container>\r
                            <ng-template #bringBackDoubleBody>\r
                                {{\r
                                    t('addCredits.promo.bringBack.body', {\r
                                        multiplier: bringBackOffer()?.multiplier || 2,\r
                                        exampleReceived: bringBackExampleReceived(),\r
                                    })\r
                                }}\r
                            </ng-template>\r
                        </p>\r
                        <p class="text-sm font-semibold text-amber-950 dark:text-amber-50">\r
                            {{\r
                                t('addCredits.promo.bringBack.deadline', {\r
                                    expiresAt: (bringBackOffer()?.expiresAt | date : 'medium') || '',\r
                                })\r
                            }}\r
                        </p>\r
                        <a\r
                            routerLink="/subscription-plans"\r
                            class="inline-flex items-center gap-1 text-sm font-semibold text-amber-900 underline-offset-4 hover:underline dark:text-amber-200"\r
                        >\r
                            <mat-icon class="!h-4 !w-4 !text-base">credit_card</mat-icon>\r
                            {{ t('addCredits.promo.bringBack.ctaSubscribe') }}\r
                        </a>\r
                    </div>\r
                </div>\r
            </div>\r
        </section>\r
\r
        <main class="flex flex-auto flex-col px-5 py-8 md:px-8 md:py-10">\r
            <section\r
                *ngIf="showWeekOneUsd50PromoBanner()"\r
                class="credits-promo-card mx-auto mb-6 w-full max-w-7xl"\r
                aria-labelledby="week-one-promo-heading"\r
            >\r
                <p class="credits-promo-card__badge">\r
                    {{ t('addCredits.promo.weekOneUsd50.badge') }}\r
                </p>\r
                <h2 id="week-one-promo-heading" class="credits-promo-card__title">\r
                    {{ t('addCredits.promo.weekOneUsd50.title') }}\r
                </h2>\r
                <p class="credits-promo-card__text">\r
                    {{ t('addCredits.promo.weekOneUsd50.body') }}\r
                </p>\r
                <p class="credits-promo-card__note">\r
                    {{ t('addCredits.promo.weekOneUsd50.accountCreatedNotice') }}\r
                </p>\r
                <p class="credits-promo-card__deadline">\r
                    {{\r
                        t('addCredits.promo.weekOneUsd50.deadline', {\r
                            expiresAt: (weekOneUsd50Promotion()?.expiresAt | date : 'medium') || '',\r
                        })\r
                    }}\r
                </p>\r
            </section>\r
\r
            <div class="mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1fr)_minmax(360px,420px)]">\r
                <section class="flex flex-col gap-6">\r
                    <div class="rounded-2xl border border-stone-200/90 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900/70 md:p-6">\r
                        <div\r
                            *ngIf="showBringBackPromoBanner()"\r
                            class="mb-5 flex gap-3 rounded-xl border border-amber-200/90 bg-amber-50/90 px-4 py-3 text-sm dark:border-amber-800 dark:bg-amber-950/30"\r
                        >\r
                            <mat-icon class="mt-0.5 shrink-0 text-amber-800 dark:text-amber-400"\r
                                >campaign</mat-icon\r
                            >\r
                            <p class="m-0 flex-1 leading-relaxed text-amber-950 dark:text-amber-100">\r
                                {{\r
                                    t('addCredits.promo.bringBack.walletStrip', {\r
                                        multiplier: bringBackOffer()?.multiplier || 2,\r
                                        exampleReceived: bringBackExampleReceived(),\r
                                    })\r
                                }}\r
                            </p>\r
                        </div>\r
                        <div *ngIf="showWeekOneUsd50PromoBanner()" class="credits-promo-strip">\r
                            <mat-icon class="credits-promo-strip__icon">campaign</mat-icon>\r
                            <p class="credits-promo-strip__text">\r
                                {{\r
                                    t('addCredits.promo.weekOneUsd50.walletStrip', {\r
                                        minUsd: weekOneUsd50PromoMinLabel(),\r
                                        maxBonusUsd: weekOneUsd50PromoMaxBonusLabel(),\r
                                    })\r
                                }}\r
                            </p>\r
                        </div>\r
                        <div class="flex items-center gap-4">\r
                            <div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-stone-200 bg-stone-50 text-stone-700 dark:border-gray-800 dark:bg-gray-950 dark:text-stone-200">\r
                                <mat-icon>account_balance_wallet</mat-icon>\r
                            </div>\r
                            <div>\r
                                <p class="text-xs font-medium uppercase tracking-[0.18em] text-stone-400 dark:text-stone-500">\r
                                    {{ t('addCredits.availableCredits') }}\r
                                </p>\r
                                <div class="mt-1 flex flex-wrap items-baseline gap-2">\r
                                    <span class="text-3xl font-semibold tracking-tight text-stone-950 dark:text-white">\r
                                        {{ balance()?.totalCredits || 0 | number: '1.2-2' }}\r
                                    </span>\r
                                    <span class="text-sm text-stone-500 dark:text-stone-400">\r
                                        {{ t('userMenu.credits') | lowercase }}\r
                                    </span>\r
                                </div>\r
                            </div>\r
                        </div>\r
\r
                        <div\r
                            *ngIf="showPendingWelcomeCreditsBanner()"\r
                            class="mt-5 flex gap-3 rounded-xl border border-amber-200/90 bg-amber-50/90 px-4 py-3 text-sm dark:border-amber-800 dark:bg-amber-950/30"\r
                        >\r
                            <mat-icon class="mt-0.5 shrink-0 text-amber-700 dark:text-amber-400"\r
                                >lock_clock</mat-icon\r
                            >\r
                            <div class="m-0 flex-1 space-y-1 leading-relaxed text-amber-950 dark:text-amber-100">\r
                                <p class="m-0 font-semibold">\r
                                    {{\r
                                        t('addCredits.pendingWelcome.title', {\r
                                            amount:\r
                                                (pendingWelcomeCredits()?.amount || 0)\r
                                                    | number: '1.0-2',\r
                                        })\r
                                    }}\r
                                </p>\r
                                <p class="m-0 text-amber-900/90 dark:text-amber-100/90">\r
                                    {{ t('addCredits.pendingWelcome.body') }}\r
                                </p>\r
                            </div>\r
                        </div>\r
                    </div>\r
\r
                    <div class="rounded-2xl border border-stone-200/90 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900/70">\r
                        <div class="flex flex-col gap-4 border-b border-stone-200/80 p-5 dark:border-gray-800 md:flex-row md:items-center md:justify-between md:p-6">\r
                            <div class="flex items-start gap-3">\r
                                <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-stone-200 bg-stone-50 text-stone-700 dark:border-gray-800 dark:bg-gray-950 dark:text-stone-200">\r
                                    <mat-icon>credit_card</mat-icon>\r
                                </div>\r
                                <div>\r
                                    <h2 class="text-base font-semibold text-stone-950 dark:text-white">\r
                                        {{ t('addCredits.paymentMethods.title') }}\r
                                    </h2>\r
                                    <p class="mt-1 text-sm text-stone-500 dark:text-stone-400">\r
                                        {{ t('addCredits.paymentMethods.manage') }}\r
                                    </p>\r
                                </div>\r
                            </div>\r
\r
                            <button\r
                                type="button"\r
                                class="inline-flex min-h-10 items-center justify-center gap-2 rounded-xl border border-stone-200 px-4 text-sm font-medium text-stone-800 transition hover:bg-stone-50 disabled:cursor-not-allowed disabled:opacity-60 dark:border-gray-700 dark:text-stone-100 dark:hover:bg-gray-800"\r
                                (click)="openAddCardDialog()"\r
                                [disabled]="loading() || !billingActionsAllowed()"\r
                            >\r
                                <mat-icon class="!h-4 !w-4 !text-base">add</mat-icon>\r
                                <span>{{ t('addCredits.addCard') }}</span>\r
                            </button>\r
                        </div>\r
\r
                        <div class="p-5 md:p-6">\r
                            <div *ngIf="loading()" class="flex flex-col items-center justify-center rounded-xl border border-dashed border-stone-200 py-14 text-center dark:border-gray-800">\r
                                <mat-spinner diameter="40"></mat-spinner>\r
                                <p class="mt-4 text-sm text-stone-500 dark:text-stone-400">\r
                                    {{ t('addCredits.paymentMethods.manage') }}...\r
                                </p>\r
                            </div>\r
\r
                            <div *ngIf="error() && !loading()" class="flex flex-col items-center justify-center rounded-xl border border-red-200 bg-red-50 px-5 py-12 text-center dark:border-red-900/60 dark:bg-red-950/20">\r
                                <mat-icon class="text-red-500">error_outline</mat-icon>\r
                                <p class="mt-3 text-sm text-red-700 dark:text-red-300">{{ error() }}</p>\r
                                <button\r
                                    type="button"\r
                                    class="mt-5 inline-flex min-h-10 items-center justify-center gap-2 rounded-xl border border-red-200 bg-white px-4 text-sm font-medium text-red-700 transition hover:bg-red-50 dark:border-red-900/60 dark:bg-red-950/40 dark:text-red-200"\r
                                    (click)="loadData()"\r
                                >\r
                                    <mat-icon class="!h-4 !w-4 !text-base">refresh</mat-icon>\r
                                    <span>{{ t('settings.profile.save_error') }}</span>\r
                                </button>\r
                            </div>\r
\r
                            <div *ngIf="!loading() && !error() && !hasCards()" class="flex flex-col items-center justify-center rounded-xl border border-dashed border-stone-200 px-5 py-14 text-center dark:border-gray-800">\r
                                <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-stone-100 text-stone-500 dark:bg-gray-800 dark:text-stone-300">\r
                                    <mat-icon>credit_card_off</mat-icon>\r
                                </div>\r
                                <h3 class="mt-4 text-base font-semibold text-stone-950 dark:text-white">{{ t('addCredits.noCards') }}</h3>\r
                                <p class="mt-1 max-w-sm text-sm text-stone-500 dark:text-stone-400">{{ t('addCredits.noCardsDesc') }}</p>\r
                                <button\r
                                    type="button"\r
                                    class="mt-5 inline-flex min-h-10 items-center justify-center gap-2 rounded-xl bg-stone-950 px-4 text-sm font-medium text-white transition hover:bg-stone-800 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-white dark:text-gray-950 dark:hover:bg-stone-200"\r
                                    (click)="openAddCardDialog()"\r
                                    [disabled]="loading() || !billingActionsAllowed()"\r
                                >\r
                                    <mat-icon class="!h-4 !w-4 !text-base">add</mat-icon>\r
                                    <span>{{ t('addCredits.addCard') }}</span>\r
                                </button>\r
                            </div>\r
\r
                            <div *ngIf="!loading() && !error() && hasCards()" class="flex flex-col gap-2">\r
                                <app-payment-card\r
                                    *ngFor="let card of cards(); let i = index"\r
                                    [card]="card"\r
                                    [isDefault]="card.isDefault"\r
                                    (setDefault)="onCardSetDefault($event)"\r
                                    (delete)="onCardDeleted($event)"\r
                                    class="block"\r
                                ></app-payment-card>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </section>\r
\r
                <aside class="flex flex-col gap-6">\r
                    <div class="rounded-2xl border border-stone-200/90 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900/70 md:p-6">\r
                        <div class="flex items-start gap-3">\r
                            <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-stone-200 bg-stone-50 text-stone-700 dark:border-gray-800 dark:bg-gray-950 dark:text-stone-200">\r
                                <mat-icon>autorenew</mat-icon>\r
                            </div>\r
                            <div>\r
                                <h3 class="text-base font-semibold text-stone-950 dark:text-white">\r
                                    {{ t('addCredits.autoRecharge.title') }}\r
                                </h3>\r
                                <p class="mt-1 text-sm text-stone-500 dark:text-stone-400">\r
                                    {{ t('addCredits.autoRecharge.subtitle') }}\r
                                </p>\r
                            </div>\r
                        </div>\r
\r
                        <div *ngIf="autoRechargeConfig()?.hasAutoCharge" class="mt-5 space-y-4">\r
                            <div class="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 dark:border-emerald-900/70 dark:bg-emerald-950/30 dark:text-emerald-300">\r
                                <span class="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>\r
                                {{ t('addCredits.autoRecharge.status.active') }}\r
                            </div>\r
                            <div class="grid grid-cols-2 gap-3">\r
                                <div class="rounded-xl border border-stone-200 p-3 dark:border-gray-800">\r
                                    <span class="text-xs text-stone-500 dark:text-stone-400">\r
                                        {{ t('addCredits.autoRecharge.dialog.balanceThreshold') }}\r
                                    </span>\r
                                    <p class="mt-1 text-sm font-medium text-stone-950 dark:text-white">\r
                                        {{ autoRechargeConfig()?.minThreshold }} credits\r
                                    </p>\r
                                </div>\r
                                <div class="rounded-xl border border-stone-200 p-3 dark:border-gray-800">\r
                                    <span class="text-xs text-stone-500 dark:text-stone-400">\r
                                        {{ t('addCredits.autoRecharge.dialog.rechargeAmount') }}\r
                                    </span>\r
                                    <p class="mt-1 text-sm font-medium text-stone-950 dark:text-white">\r
                                        {{ autoRechargeConfig()?.minRecharge }} credits\r
                                    </p>\r
                                </div>\r
                            </div>\r
                        </div>\r
\r
                        <div *ngIf="!autoRechargeConfig()?.hasAutoCharge" class="mt-5">\r
                            <div class="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-xs font-medium text-stone-600 dark:border-gray-800 dark:bg-gray-950 dark:text-stone-300">\r
                                <span class="h-1.5 w-1.5 rounded-full bg-stone-400"></span>\r
                                {{ t('addCredits.autoRecharge.status.inactive') }}\r
                            </div>\r
                            <p class="mt-3 text-sm leading-6 text-stone-500 dark:text-stone-400">\r
                                {{ t('addCredits.autoRecharge.description') }}\r
                            </p>\r
                        </div>\r
\r
                        <button\r
                            type="button"\r
                            class="mt-5 inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-xl border border-stone-200 px-4 text-sm font-medium text-stone-800 transition hover:bg-stone-50 disabled:cursor-not-allowed disabled:opacity-60 dark:border-gray-700 dark:text-stone-100 dark:hover:bg-gray-800"\r
                            (click)="openAutoRechargeSettings()"\r
                            [disabled]="loading()"\r
                        >\r
                            <mat-icon class="!h-4 !w-4 !text-base">settings</mat-icon>\r
                            <span>{{ t('addCredits.autoRecharge.configure') }}</span>\r
                        </button>\r
                    </div>\r
\r
                    <div class="rounded-2xl border border-stone-200/90 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900/70 md:p-6">\r
                        <div class="flex items-center gap-3">\r
                            <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-stone-200 bg-stone-50 text-stone-700 dark:border-gray-800 dark:bg-gray-950 dark:text-stone-200">\r
                                <mat-icon>verified</mat-icon>\r
                            </div>\r
                            <h3 class="text-base font-semibold text-stone-950 dark:text-white">\r
                                {{ t('addCredits.subscriptionPlans.title') }}\r
                            </h3>\r
                        </div>\r
\r
                        <p class="mt-4 text-sm leading-6 text-stone-500 dark:text-stone-400">\r
                            {{ t('addCredits.subscriptionPlans.description') }}\r
                        </p>\r
\r
                        <div class="mt-5 grid grid-cols-3 gap-2" *ngIf="pricingPlansLoading()">\r
                            <div class="h-20 animate-pulse rounded-xl bg-stone-100 dark:bg-gray-800"></div>\r
                            <div class="h-20 animate-pulse rounded-xl bg-stone-100 dark:bg-gray-800"></div>\r
                            <div class="h-20 animate-pulse rounded-xl bg-stone-100 dark:bg-gray-800"></div>\r
                        </div>\r
\r
                        <div\r
                            class="mt-5 grid gap-2"\r
                            *ngIf="!pricingPlansLoading() && sidebarPlanTiers().length > 0"\r
                            [ngStyle]="{\r
                                'grid-template-columns':\r
                                    'repeat(' + sidebarPlanTiers().length + ', minmax(0, 1fr))',\r
                            }"\r
                        >\r
                            <div\r
                                class="relative rounded-xl border border-stone-200 p-3 text-center dark:border-gray-800"\r
                                *ngFor="let tier of sidebarPlanTiers(); trackBy: trackBySidebarTier"\r
                                [ngClass]="tier.isBestValue ? '!border-stone-950 dark:!border-white' : ''"\r
                            >\r
                                <span\r
                                    class="mb-2 inline-flex rounded-full bg-stone-950 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-white dark:bg-white dark:text-gray-950"\r
                                    *ngIf="tier.isBestValue"\r
                                >\r
                                    {{ t('addCredits.subscriptionPlans.bestValue') }}\r
                                </span>\r
                                <span class="block text-lg font-semibold text-stone-950 dark:text-white">\r
                                    \${{ tier.plan.amount | number: '1.0-0' }}\r
                                </span>\r
                                <span class="mt-1 block truncate text-xs text-stone-500 dark:text-stone-400">\r
                                    {{ tier.label }}\r
                                </span>\r
                            </div>\r
                        </div>\r
\r
                        <button\r
                            type="button"\r
                            class="mt-5 inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-xl border border-stone-200 px-4 text-sm font-medium text-stone-800 transition hover:bg-stone-50 dark:border-gray-700 dark:text-stone-100 dark:hover:bg-gray-800"\r
                            [routerLink]="['/subscription-plans']"\r
                        >\r
                            <span>{{ t('addCredits.subscriptionPlans.viewAllPlans') }}</span>\r
                            <mat-icon class="!h-4 !w-4 !text-base">arrow_forward</mat-icon>\r
                        </button>\r
                    </div>\r
                </aside>\r
            </div>\r
        </main>\r
    </div>\r
</ng-container>\r
`, styles: ["/* src/app/modules/add-credits/add-credits.component.scss */\n:host {\n  display: contents;\n}\n.add-credits-container mat-icon {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.add-credits-container app-payment-card {\n  display: block;\n}\n.credits-promo-card {\n  border-radius: 16px;\n  border: 1px solid rgba(148, 163, 184, 0.22);\n  background: rgb(241, 245, 249);\n  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04), 0 8px 24px rgba(15, 23, 42, 0.04);\n  padding: 1.5rem 1.5rem 1.75rem;\n}\n:host-context(.dark) .credits-promo-card {\n  background: rgb(30, 41, 59);\n  border-color: rgba(148, 163, 184, 0.18);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);\n}\n.credits-promo-card__badge {\n  display: inline-flex;\n  margin: 0 0 0.75rem;\n  padding: 0.25rem 0.7rem;\n  border-radius: 999px;\n  border: 1px solid rgba(148, 163, 184, 0.35);\n  background: rgb(255, 255, 255);\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.16em;\n  text-transform: uppercase;\n  color: rgb(51, 65, 85);\n}\n:host-context(.dark) .credits-promo-card__badge {\n  background: rgba(15, 23, 42, 0.45);\n  border-color: rgba(148, 163, 184, 0.28);\n  color: rgb(226, 232, 240);\n}\n.credits-promo-card__title {\n  margin: 0 0 0.75rem;\n  font-size: 1.5rem;\n  font-weight: 700;\n  line-height: 1.25;\n  color: rgb(15, 23, 42);\n}\n:host-context(.dark) .credits-promo-card__title {\n  color: rgb(248, 250, 252);\n}\n.credits-promo-card__text,\n.credits-promo-card__note {\n  margin: 0 0 0.75rem;\n  max-width: 40rem;\n  font-size: 0.875rem;\n  line-height: 1.6;\n  color: rgb(71, 85, 105);\n}\n:host-context(.dark) .credits-promo-card__text,\n:host-context(.dark) .credits-promo-card__note {\n  color: rgb(203, 213, 225);\n}\n.credits-promo-card__note {\n  font-size: 0.75rem;\n}\n.credits-promo-card__deadline {\n  margin: 0;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: rgb(15, 23, 42);\n}\n:host-context(.dark) .credits-promo-card__deadline {\n  color: rgb(248, 250, 252);\n}\n.credits-promo-strip {\n  display: flex;\n  gap: 0.75rem;\n  margin-bottom: 1.25rem;\n  padding: 0.75rem 1rem;\n  border-radius: 12px;\n  border: 1px solid rgba(148, 163, 184, 0.22);\n  background: rgb(241, 245, 249);\n  font-size: 0.875rem;\n}\n:host-context(.dark) .credits-promo-strip {\n  background: rgb(30, 41, 59);\n  border-color: rgba(148, 163, 184, 0.18);\n}\n.credits-promo-strip__icon {\n  margin-top: 0.125rem;\n  flex-shrink: 0;\n  color: rgb(71, 85, 105);\n}\n:host-context(.dark) .credits-promo-strip__icon {\n  color: rgb(148, 163, 184);\n}\n.credits-promo-strip__text {\n  margin: 0;\n  flex: 1 1 0;\n  line-height: 1.6;\n  color: rgb(15, 23, 42);\n}\n:host-context(.dark) .credits-promo-strip__text {\n  color: rgb(226, 232, 240);\n}\n/*# sourceMappingURL=add-credits.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddCreditsComponent, { className: "AddCreditsComponent", filePath: "src/app/modules/add-credits/add-credits.component.ts", lineNumber: 77 });
})();
export {
  AddCreditsComponent
};
//# sourceMappingURL=chunk-XQBQ2MCK.js.map
