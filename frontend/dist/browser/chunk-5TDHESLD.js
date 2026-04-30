import {
  BillingRequiredDialogComponent,
  extractClientSettingsPayload,
  invoiceBillingDetailsComplete
} from "./chunk-PKOX7YMO.js";
import {
  DateTime
} from "./chunk-BAVSUFW7.js";
import {
  AuthModalComponent
} from "./chunk-6CFBAEWH.js";
import "./chunk-VCSAO77O.js";
import {
  SubscriptionService
} from "./chunk-MBY3XX5O.js";
import "./chunk-H3UX3NVF.js";
import {
  MatTooltipModule
} from "./chunk-FD5UKZMK.js";
import "./chunk-C35Z3CDX.js";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogContent,
  MatDialogModule,
  MatDialogRef
} from "./chunk-P2CAABEU.js";
import {
  AuthService,
  UserService
} from "./chunk-6JQSEQ6B.js";
import "./chunk-Y5VEUI6L.js";
import "./chunk-3PFCPE6U.js";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-NLVEQCVI.js";
import "./chunk-MJXNRHWH.js";
import "./chunk-LTHY76JY.js";
import "./chunk-AY5C2ZOO.js";
import "./chunk-BY4NG7V4.js";
import "./chunk-RNRTLQ3J.js";
import "./chunk-6OJR6OMX.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgModel,
  NumberValueAccessor
} from "./chunk-S7CME3IL.js";
import "./chunk-OIBNGD5S.js";
import {
  TranslocoDirective,
  TranslocoModule,
  TranslocoPipe,
  TranslocoService
} from "./chunk-KU43NSH4.js";
import "./chunk-VK5CCBZ3.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-WH2N6KB4.js";
import {
  environment
} from "./chunk-BIHX2IQ4.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-HZQU4G6R.js";
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
  MatButton,
  MatButtonModule,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault,
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
  tap,
  throwError,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-LLRZIRCV.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-KTESVR3Q.js";

// src/app/modules/add-credits/add-credits.constants.ts
var MIN_CREDIT_PURCHASE_USD = 40;
var MAX_CREDIT_PURCHASE_USD = 2e3;

// src/app/modules/add-credits/services/credits.service.ts
var CreditsService = class _CreditsService {
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
    const token = localStorage.getItem("accessToken");
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    const params = {
      "populates[]": "client",
      where_gatewayProvider: gatewayProvider
    };
    return this._httpClient.get(`${this.apiUrl}/v2/credit-cards`, { headers, params }).pipe(tap((response) => {
      this.cards.set(response.data || []);
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
  setDefaultCard(cardId) {
    this.loading.set(true);
    this.error.set(null);
    const token = localStorage.getItem("accessToken");
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    return this._httpClient.put(`${this.apiUrl}/v2/credit-cards/${cardId}/default`, {}, { headers }).pipe(tap((response) => {
      this.cards.set(response.data || []);
    }), catchError((err) => {
      console.error("Error setting default card:", err);
      this.error.set("Failed to set default card");
      return throwError(() => err);
    }), finalize(() => {
      this.loading.set(false);
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
function AutoRechargeSettingsComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "mat-icon");
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.error);
  }
}
function AutoRechargeSettingsComponent_div_21_div_28_div_4_ng_container_1_div_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 48);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 49);
    \u0275\u0275element(2, "path", 50);
    \u0275\u0275elementEnd()();
  }
}
function AutoRechargeSettingsComponent_div_21_div_28_div_4_ng_container_1_div_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 51);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 49);
    \u0275\u0275element(2, "circle", 52)(3, "circle", 53)(4, "path", 54);
    \u0275\u0275elementEnd()();
  }
}
function AutoRechargeSettingsComponent_div_21_div_28_div_4_ng_container_1_div_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 55);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 49);
    \u0275\u0275element(2, "rect", 56)(3, "path", 57);
    \u0275\u0275elementEnd()();
  }
}
function AutoRechargeSettingsComponent_div_21_div_28_div_4_ng_container_1_div_1_mat_icon_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 58);
    \u0275\u0275text(1, "credit_card");
    \u0275\u0275elementEnd();
  }
}
function AutoRechargeSettingsComponent_div_21_div_28_div_4_ng_container_1_div_1_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 59);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "addCredits.autoRecharge.dialog.default"));
  }
}
function AutoRechargeSettingsComponent_div_21_div_28_div_4_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "div", 38);
    \u0275\u0275elementContainerStart(2, 39);
    \u0275\u0275template(3, AutoRechargeSettingsComponent_div_21_div_28_div_4_ng_container_1_div_1_span_3_Template, 3, 0, "span", 40)(4, AutoRechargeSettingsComponent_div_21_div_28_div_4_ng_container_1_div_1_span_4_Template, 5, 0, "span", 41)(5, AutoRechargeSettingsComponent_div_21_div_28_div_4_ng_container_1_div_1_span_5_Template, 4, 0, "span", 42)(6, AutoRechargeSettingsComponent_div_21_div_28_div_4_ng_container_1_div_1_mat_icon_6_Template, 2, 0, "mat-icon", 43);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 44)(8, "span", 45);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 46);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(13, AutoRechargeSettingsComponent_div_21_div_28_div_4_ng_container_1_div_1_span_13_Template, 3, 3, "span", 47);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const card_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngSwitch", card_r3.brand == null ? null : card_r3.brand.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "visa");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "mastercard");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "amex");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\u2022\u2022\u2022\u2022 ", card_r3.lastFour, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 7, card_r3.brand));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", card_r3.isDefault);
  }
}
function AutoRechargeSettingsComponent_div_21_div_28_div_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, AutoRechargeSettingsComponent_div_21_div_28_div_4_ng_container_1_div_1_Template, 14, 9, "div", 36);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const card_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", card_r3._id === ctx_r0.selectedCardId);
  }
}
function AutoRechargeSettingsComponent_div_21_div_28_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275template(1, AutoRechargeSettingsComponent_div_21_div_28_div_4_ng_container_1_Template, 2, 1, "ng-container", 35);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.data.cards);
  }
}
function AutoRechargeSettingsComponent_div_21_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "label", 32);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, AutoRechargeSettingsComponent_div_21_div_28_div_4_Template, 2, 1, "div", 33);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "addCredits.autoRecharge.dialog.paymentMethod"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.selectedCardId);
  }
}
function AutoRechargeSettingsComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 21)(2, "div", 22)(3, "label", 23);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 24)(7, "span", 25);
    \u0275\u0275text(8, "$");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 26);
    \u0275\u0275twoWayListener("ngModelChange", function AutoRechargeSettingsComponent_div_21_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.minThreshold, $event) || (ctx_r0.minThreshold = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 27);
    \u0275\u0275text(11, "USD");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "p", 28);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 22)(16, "label", 23);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 24)(20, "span", 25);
    \u0275\u0275text(21, "$");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "input", 29);
    \u0275\u0275twoWayListener("ngModelChange", function AutoRechargeSettingsComponent_div_21_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.minRecharge, $event) || (ctx_r0.minRecharge = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 27);
    \u0275\u0275text(24, "USD");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "p", 28);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(28, AutoRechargeSettingsComponent_div_21_div_28_Template, 5, 4, "div", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 9, "addCredits.autoRecharge.dialog.balanceThreshold"));
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.minThreshold);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 11, "addCredits.autoRecharge.dialog.balanceThresholdHint"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 13, "addCredits.autoRecharge.dialog.rechargeAmount"));
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.minRecharge);
    \u0275\u0275property("min", ctx_r0.minRechargeUsd)("max", ctx_r0.maxRechargeUsd);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 15, "addCredits.autoRecharge.dialog.rechargeAmountHint"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (ctx_r0.data == null ? null : ctx_r0.data.cards) && ctx_r0.data.cards.length > 0);
  }
}
function AutoRechargeSettingsComponent_mat_spinner_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 60);
  }
}
function AutoRechargeSettingsComponent_span_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Save Settings");
    \u0275\u0275elementEnd();
  }
}
var AutoRechargeSettingsComponent = class _AutoRechargeSettingsComponent {
  constructor() {
    this._dialogRef = inject(MatDialogRef);
    this._creditsService = inject(CreditsService);
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
  close() {
    this._dialogRef.close();
  }
  save() {
    if (this.enabled && !this.selectedCardId) {
      this.error = "Please select a payment method for auto-recharge";
      return;
    }
    if (this.enabled) {
      if (this.minRecharge < MIN_CREDIT_PURCHASE_USD || this.minRecharge > MAX_CREDIT_PURCHASE_USD) {
        this.error = `Recharge amount must be between $${MIN_CREDIT_PURCHASE_USD} and $${MAX_CREDIT_PURCHASE_USD}`;
        return;
      }
      if (this.minThreshold < 10 || this.minThreshold > 1990) {
        this.error = "Threshold amount must be between $10 and $1990";
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
        this.error = err.error?.message || "Failed to save auto-recharge settings";
      }
    });
  }
  static {
    this.\u0275fac = function AutoRechargeSettingsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AutoRechargeSettingsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AutoRechargeSettingsComponent, selectors: [["app-auto-recharge-settings"]], decls: 28, vars: 21, consts: [[1, "auto-recharge-dialog"], [1, "dialog-header"], [1, "dialog-title"], [1, "dialog-subtitle"], [1, "p-2"], ["class", "error-message", 4, "ngIf"], [1, "enable-card"], [1, "enable-info"], [1, "enable-title"], [1, "enable-desc"], [1, "switch"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "slider"], ["class", "settings-group", 4, "ngIf"], [1, "dialog-actions"], ["type", "button", 1, "cancel-button", 3, "click", "disabled"], ["type", "button", 1, "save-button", 3, "click", "disabled"], ["diameter", "20", 4, "ngIf"], [4, "ngIf"], [1, "error-message"], [1, "settings-group"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-6", "mb-8"], [1, "input-container"], [1, "input-label"], [1, "premium-input-wrapper"], [1, "input-prefix"], ["type", "number", "placeholder", "10", "min", "10", "max", "1990", 3, "ngModelChange", "ngModel"], [1, "input-suffix"], [1, "input-hint"], ["type", "number", "placeholder", "40", 3, "ngModelChange", "ngModel", "min", "max"], ["class", "section", 4, "ngIf"], [1, "section"], [1, "section-label"], ["class", "card-display", 4, "ngIf"], [1, "card-display"], [4, "ngFor", "ngForOf"], ["class", "selected-card", 4, "ngIf"], [1, "selected-card"], [1, "card-icon-wrapper"], [3, "ngSwitch"], ["class", "card-brand-icon visa", 4, "ngSwitchCase"], ["class", "card-brand-icon mastercard", 4, "ngSwitchCase"], ["class", "card-brand-icon amex", 4, "ngSwitchCase"], ["class", "card-brand-mat-icon", 4, "ngSwitchDefault"], [1, "card-details"], [1, "card-number"], [1, "card-brand-name"], ["class", "default-badge", 4, "ngIf"], [1, "card-brand-icon", "visa"], ["viewBox", "0 0 48 48", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M18.8 32H15.1L17.4 17.5H21.1L18.8 32ZM32.5 17.7C31.7 17.3 30.5 17 29.2 17C24.9 17 21.8 19.3 21.8 22.5C21.8 24.9 24 26.3 25.7 27.1C27.4 27.9 28 28.5 28 29.3C28 30.6 26.5 31.1 25.2 31.1C24 31.1 23 30.8 22.1 30.4L21.7 30.2L21.3 32.7C22 33 23.4 33.3 24.8 33.4C29.4 33.4 32.4 31.1 32.4 27.6C32.4 21.9 24.5 21.6 24.5 19.4C24.5 18.7 25.1 18 26.5 17.8C27.2 17.7 28.6 17.6 30.1 18.2L30.6 18.4L31 16L32.5 17.7ZM42.5 17.5H39C38.1 17.5 37.4 18 37 18.8L31.5 32H35.3L36 29.8H40.7L41.2 32H44.6L42.5 17.5ZM37.2 26.8L39.2 21.1L40.2 26.8H37.2ZM13.8 17.5L10.1 27.4L8.7 18.4L8.3 17.5H4L4.1 17.8L7.6 32H11.5L17.4 17.5H13.8Z", "fill", "#1A1F71"], [1, "card-brand-icon", "mastercard"], ["cx", "18", "cy", "24", "r", "12", "fill", "#EB001B", "fill-opacity", "0.8"], ["cx", "30", "cy", "24", "r", "12", "fill", "#F79E1B", "fill-opacity", "0.8"], ["d", "M24 16.5C21.6 18.5 20.2 21.3 20.2 24.5C20.2 27.7 21.6 30.5 24 32.5C26.4 30.5 27.8 27.7 27.8 24.5C27.8 21.3 26.4 18.5 24 16.5Z", "fill", "#FF5F00"], [1, "card-brand-icon", "amex"], ["width", "48", "height", "32", "rx", "4", "fill", "#006FCF"], ["d", "M12 24L10 18H8L12 24ZM12 24L14 30H16L12 24ZM30 18H24V30H30V18ZM28 28H26V20H28V28ZM38 18H32V30H38V18ZM36 28H34V20H36V28ZM22 18H16V30H22V18ZM20 28H18V20H20V28Z", "fill", "white"], [1, "card-brand-mat-icon"], [1, "default-badge"], ["diameter", "20"]], template: function AutoRechargeSettingsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2", 2);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6);
        \u0275\u0275pipe(7, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "mat-dialog-content", 4);
        \u0275\u0275template(9, AutoRechargeSettingsComponent_div_9_Template, 5, 1, "div", 5);
        \u0275\u0275elementStart(10, "div", 6)(11, "div", 7)(12, "h3", 8);
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
        \u0275\u0275template(21, AutoRechargeSettingsComponent_div_21_Template, 29, 17, "div", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "div", 14)(23, "button", 15);
        \u0275\u0275listener("click", function AutoRechargeSettingsComponent_Template_button_click_23_listener() {
          return ctx.close();
        });
        \u0275\u0275text(24, " Cancel ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "button", 16);
        \u0275\u0275listener("click", function AutoRechargeSettingsComponent_Template_button_click_25_listener() {
          return ctx.save();
        });
        \u0275\u0275template(26, AutoRechargeSettingsComponent_mat_spinner_26_Template, 1, 0, "mat-spinner", 17)(27, AutoRechargeSettingsComponent_span_27_Template, 2, 0, "span", 18);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 13, "addCredits.autoRecharge.dialog.title"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 15, "addCredits.autoRecharge.dialog.subtitle"));
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.error);
        \u0275\u0275advance();
        \u0275\u0275classProp("active", ctx.enabled);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 17, "addCredits.autoRecharge.dialog.enable"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 19, "addCredits.autoRecharge.dialog.enableDesc"));
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.enabled);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.enabled);
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.loading);
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading);
      }
    }, dependencies: [
      CommonModule,
      NgForOf,
      NgIf,
      NgSwitch,
      NgSwitchCase,
      NgSwitchDefault,
      TitleCasePipe,
      FormsModule,
      DefaultValueAccessor,
      NumberValueAccessor,
      CheckboxControlValueAccessor,
      NgControlStatus,
      MinValidator,
      MaxValidator,
      NgModel,
      MatDialogModule,
      MatDialogContent,
      MatButtonModule,
      MatIconModule,
      MatIcon,
      TranslocoModule,
      TranslocoPipe,
      MatProgressSpinnerModule,
      MatProgressSpinner
    ], styles: ['/* src/app/modules/add-credits/auto-recharge-settings/auto-recharge-settings.component.scss */\n.auto-recharge-dialog {\n  padding: 12px;\n  background: #ffffff;\n  border-radius: 20px;\n  width: 100%;\n  max-width: 680px;\n  margin: 0 auto;\n}\n:host-context(.dark) .auto-recharge-dialog {\n  background: #1e293b;\n}\n.dialog-header {\n  text-align: left;\n  margin-bottom: 40px;\n}\n.dialog-title {\n  font-size: 28px;\n  font-weight: 800;\n  color: #0f172a;\n  margin-bottom: 8px;\n  letter-spacing: -0.02em;\n}\n:host-context(.dark) .dialog-title {\n  color: #ffffff;\n}\n.dialog-subtitle {\n  font-size: 15px;\n  color: #475569;\n}\n:host-context(.dark) .dialog-subtitle {\n  color: rgba(255, 255, 255, 0.7);\n}\n.enable-card {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 24px;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 16px;\n  margin-bottom: 32px;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n:host-context(.dark) .enable-card {\n  background: rgba(30, 41, 59, 0.5);\n  border-color: rgba(255, 255, 255, 0.08);\n}\n.enable-card.active {\n  border-color: rgba(99, 102, 241, 0.3);\n  background: rgba(99, 102, 241, 0.04);\n}\n.enable-info .enable-title {\n  font-size: 16px;\n  font-weight: 700;\n  color: #0f172a;\n  margin-bottom: 4px;\n}\n:host-context(.dark) .enable-info .enable-title {\n  color: #ffffff;\n}\n.enable-info .enable-desc {\n  font-size: 14px;\n  color: #475569;\n}\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 48px;\n  height: 24px;\n}\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.slider {\n  position: absolute;\n  cursor: pointer;\n  inset: 0;\n  background-color: #cbd5e1;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  border-radius: 24px;\n}\n:host-context(.dark) .slider {\n  background-color: #475569;\n}\n.slider:before {\n  position: absolute;\n  content: "";\n  height: 18px;\n  width: 18px;\n  left: 3px;\n  bottom: 3px;\n  background-color: white;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  border-radius: 50%;\n}\ninput:checked + .slider {\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1 0%,\n      #8b5cf6 50%,\n      #a855f7 100%);\n}\ninput:checked + .slider:before {\n  transform: translateX(24px);\n}\n.settings-group {\n  animation: slideDown 0.3s ease-out;\n}\n@keyframes slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.input-container {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.input-label {\n  font-size: 14px;\n  font-weight: 600;\n  color: #0f172a;\n}\n:host-context(.dark) .input-label {\n  color: #ffffff;\n}\n.premium-input-wrapper {\n  display: flex;\n  align-items: center;\n  background: white;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 0 16px;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n:host-context(.dark) .premium-input-wrapper {\n  background: #0f172a;\n  border-color: rgba(255, 255, 255, 0.08);\n}\n.premium-input-wrapper:focus-within {\n  border-color: #8b5cf6;\n  box-shadow: 0 0 0 4px rgba(139, 92, 246, 0.1);\n}\n.premium-input-wrapper .input-prefix {\n  font-size: 16px;\n  font-weight: 600;\n  color: #94a3b8;\n  margin-right: 2px;\n}\n.premium-input-wrapper input {\n  flex: 1;\n  padding: 14px 0;\n  background: transparent;\n  border: none;\n  outline: none;\n  font-size: 16px;\n  font-weight: 600;\n  color: #0f172a;\n}\n:host-context(.dark) .premium-input-wrapper input {\n  color: #ffffff;\n}\n.premium-input-wrapper .input-suffix {\n  font-size: 13px;\n  font-weight: 700;\n  color: #94a3b8;\n}\n.section-label {\n  display: block;\n  font-size: 14px;\n  font-weight: 700;\n  color: #0f172a;\n  margin-bottom: 16px;\n  margin-top: 32px;\n}\n:host-context(.dark) .section-label {\n  color: #ffffff;\n}\n.card-display {\n  display: block;\n}\n.selected-card {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 16px 20px;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  width: 100%;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n:host-context(.dark) .selected-card {\n  background: rgba(30, 41, 59, 0.3);\n  border-color: rgba(255, 255, 255, 0.08);\n}\n.card-icon-wrapper {\n  width: 44px;\n  height: 28px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: white;\n  border-radius: 4px;\n  border: 1px solid #e2e8f0;\n  overflow: hidden;\n}\n.card-icon-wrapper svg {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  max-width: 24px;\n  max-height: 24px;\n}\n.card-icon-wrapper mat-icon {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  color: #475569;\n}\n.card-details {\n  flex: 1;\n}\n.card-number {\n  display: block;\n  font-size: 15px;\n  font-weight: 600;\n}\n.card-brand-name {\n  font-size: 13px;\n  color: #475569;\n}\n.default-badge {\n  font-size: 11px;\n  font-weight: 700;\n  color: #10b981;\n  background: rgba(16, 185, 129, 0.1);\n  padding: 4px 8px;\n  border-radius: 6px;\n  text-transform: uppercase;\n}\n.dialog-actions {\n  display: flex;\n  gap: 16px;\n  margin-top: 40px;\n}\n.cancel-button {\n  flex: 1;\n  padding: 14px;\n  background: transparent;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  color: #475569;\n  font-size: 15px;\n  font-weight: 600;\n}\n.save-button {\n  flex: 2;\n  padding: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1 0%,\n      #8b5cf6 50%,\n      #a855f7 100%);\n  border: none;\n  border-radius: 10px;\n  color: white;\n  font-size: 15px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n.error-message {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px;\n  background: rgba(239, 68, 68, 0.05);\n  border: 1px solid rgba(239, 68, 68, 0.1);\n  border-radius: 12px;\n  margin-bottom: 24px;\n  color: #ef4444;\n}\n/*# sourceMappingURL=auto-recharge-settings.component.css.map */\n'], encapsulation: 2 });
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
    ], encapsulation: ViewEncapsulation.None, template: `<div class="auto-recharge-dialog">
    <!-- Header -->
    <div class="dialog-header">
        <h2 class="dialog-title">{{ 'addCredits.autoRecharge.dialog.title' | transloco }}</h2>
        <p class="dialog-subtitle">{{ 'addCredits.autoRecharge.dialog.subtitle' | transloco }}</p>
    </div>

    <mat-dialog-content class="p-2">
        <!-- Error Message -->
        <div *ngIf="error" class="error-message">
            <mat-icon>error_outline</mat-icon>
            <p>{{ error }}</p>
        </div>

        <!-- Enable Toggle Card -->
        <div class="enable-card" [class.active]="enabled">
            <div class="enable-info">
                <h3 class="enable-title">{{ 'addCredits.autoRecharge.dialog.enable' | transloco }}</h3>
                <p class="enable-desc">{{ 'addCredits.autoRecharge.dialog.enableDesc' | transloco }}</p>
            </div>
            <label class="switch">
                <input type="checkbox" [(ngModel)]="enabled" />
                <span class="slider"></span>
            </label>
        </div>

        <!-- Settings Group (Shown when enabled) -->
        <div *ngIf="enabled" class="settings-group">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <!-- Threshold -->
                <div class="input-container">
                    <label class="input-label">{{ 'addCredits.autoRecharge.dialog.balanceThreshold' | transloco }}</label>
                    <div class="premium-input-wrapper">
                        <span class="input-prefix">$</span>
                        <input
                            type="number"
                            [(ngModel)]="minThreshold"
                            placeholder="10"
                            min="10"
                            max="1990"
                        />
                        <span class="input-suffix">USD</span>
                    </div>
                    <p class="input-hint">{{ 'addCredits.autoRecharge.dialog.balanceThresholdHint' | transloco }}</p>
                </div>

                <!-- Recharge Amount -->
                <div class="input-container">
                    <label class="input-label">{{ 'addCredits.autoRecharge.dialog.rechargeAmount' | transloco }}</label>
                    <div class="premium-input-wrapper">
                        <span class="input-prefix">$</span>
                        <input
                            type="number"
                            [(ngModel)]="minRecharge"
                            placeholder="40"
                            [min]="minRechargeUsd"
                            [max]="maxRechargeUsd"
                        />
                        <span class="input-suffix">USD</span>
                    </div>
                    <p class="input-hint">{{ 'addCredits.autoRecharge.dialog.rechargeAmountHint' | transloco }}</p>
                </div>
            </div>

            <!-- Payment Card Selection -->
            <div class="section" *ngIf="data?.cards && data.cards.length > 0">
                <label class="section-label">{{ 'addCredits.autoRecharge.dialog.paymentMethod' | transloco }}</label>

                <div class="card-display" *ngIf="selectedCardId">
                    <ng-container *ngFor="let card of data.cards">
                        <div *ngIf="card._id === selectedCardId" class="selected-card">
                            <div class="card-icon-wrapper">
                                <ng-container [ngSwitch]="card.brand?.toLowerCase()">
                                    <span *ngSwitchCase="'visa'" class="card-brand-icon visa">
                                        <svg
                                            viewBox="0 0 48 48"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M18.8 32H15.1L17.4 17.5H21.1L18.8 32ZM32.5 17.7C31.7 17.3 30.5 17 29.2 17C24.9 17 21.8 19.3 21.8 22.5C21.8 24.9 24 26.3 25.7 27.1C27.4 27.9 28 28.5 28 29.3C28 30.6 26.5 31.1 25.2 31.1C24 31.1 23 30.8 22.1 30.4L21.7 30.2L21.3 32.7C22 33 23.4 33.3 24.8 33.4C29.4 33.4 32.4 31.1 32.4 27.6C32.4 21.9 24.5 21.6 24.5 19.4C24.5 18.7 25.1 18 26.5 17.8C27.2 17.7 28.6 17.6 30.1 18.2L30.6 18.4L31 16L32.5 17.7ZM42.5 17.5H39C38.1 17.5 37.4 18 37 18.8L31.5 32H35.3L36 29.8H40.7L41.2 32H44.6L42.5 17.5ZM37.2 26.8L39.2 21.1L40.2 26.8H37.2ZM13.8 17.5L10.1 27.4L8.7 18.4L8.3 17.5H4L4.1 17.8L7.6 32H11.5L17.4 17.5H13.8Z"
                                                fill="#1A1F71"
                                            />
                                        </svg>
                                    </span>
                                    <span
                                        *ngSwitchCase="'mastercard'"
                                        class="card-brand-icon mastercard"
                                    >
                                        <svg
                                            viewBox="0 0 48 48"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <circle
                                                cx="18"
                                                cy="24"
                                                r="12"
                                                fill="#EB001B"
                                                fill-opacity="0.8"
                                            />
                                            <circle
                                                cx="30"
                                                cy="24"
                                                r="12"
                                                fill="#F79E1B"
                                                fill-opacity="0.8"
                                            />
                                            <path
                                                d="M24 16.5C21.6 18.5 20.2 21.3 20.2 24.5C20.2 27.7 21.6 30.5 24 32.5C26.4 30.5 27.8 27.7 27.8 24.5C27.8 21.3 26.4 18.5 24 16.5Z"
                                                fill="#FF5F00"
                                            />
                                        </svg>
                                    </span>
                                    <span *ngSwitchCase="'amex'" class="card-brand-icon amex">
                                        <svg
                                            viewBox="0 0 48 48"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <rect width="48" height="32" rx="4" fill="#006FCF" />
                                            <path
                                                d="M12 24L10 18H8L12 24ZM12 24L14 30H16L12 24ZM30 18H24V30H30V18ZM28 28H26V20H28V28ZM38 18H32V30H38V18ZM36 28H34V20H36V28ZM22 18H16V30H22V18ZM20 28H18V20H20V28Z"
                                                fill="white"
                                            />
                                        </svg>
                                    </span>
                                    <mat-icon *ngSwitchDefault class="card-brand-mat-icon"
                                        >credit_card</mat-icon
                                    >
                                </ng-container>
                            </div>

                            <div class="card-details">
                                <span class="card-number">\u2022\u2022\u2022\u2022 {{ card.lastFour }}</span>
                                <span class="card-brand-name">{{ card.brand | titlecase }}</span>
                            </div>

                            <span *ngIf="card.isDefault" class="default-badge">{{ 'addCredits.autoRecharge.dialog.default' | transloco }}</span>
                        </div>
                    </ng-container>
                </div>
            </div>
        </div>
    </mat-dialog-content>

    <!-- Dialog Actions -->
    <div class="dialog-actions">
        <button type="button" class="cancel-button" (click)="close()" [disabled]="loading">
            Cancel
        </button>
        <button type="button" class="save-button" (click)="save()" [disabled]="loading">
            <mat-spinner *ngIf="loading" diameter="20"></mat-spinner>
            <span *ngIf="!loading">Save Settings</span>
        </button>
    </div>
</div>
`, styles: ['/* src/app/modules/add-credits/auto-recharge-settings/auto-recharge-settings.component.scss */\n.auto-recharge-dialog {\n  padding: 12px;\n  background: #ffffff;\n  border-radius: 20px;\n  width: 100%;\n  max-width: 680px;\n  margin: 0 auto;\n}\n:host-context(.dark) .auto-recharge-dialog {\n  background: #1e293b;\n}\n.dialog-header {\n  text-align: left;\n  margin-bottom: 40px;\n}\n.dialog-title {\n  font-size: 28px;\n  font-weight: 800;\n  color: #0f172a;\n  margin-bottom: 8px;\n  letter-spacing: -0.02em;\n}\n:host-context(.dark) .dialog-title {\n  color: #ffffff;\n}\n.dialog-subtitle {\n  font-size: 15px;\n  color: #475569;\n}\n:host-context(.dark) .dialog-subtitle {\n  color: rgba(255, 255, 255, 0.7);\n}\n.enable-card {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 24px;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 16px;\n  margin-bottom: 32px;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n:host-context(.dark) .enable-card {\n  background: rgba(30, 41, 59, 0.5);\n  border-color: rgba(255, 255, 255, 0.08);\n}\n.enable-card.active {\n  border-color: rgba(99, 102, 241, 0.3);\n  background: rgba(99, 102, 241, 0.04);\n}\n.enable-info .enable-title {\n  font-size: 16px;\n  font-weight: 700;\n  color: #0f172a;\n  margin-bottom: 4px;\n}\n:host-context(.dark) .enable-info .enable-title {\n  color: #ffffff;\n}\n.enable-info .enable-desc {\n  font-size: 14px;\n  color: #475569;\n}\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 48px;\n  height: 24px;\n}\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.slider {\n  position: absolute;\n  cursor: pointer;\n  inset: 0;\n  background-color: #cbd5e1;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  border-radius: 24px;\n}\n:host-context(.dark) .slider {\n  background-color: #475569;\n}\n.slider:before {\n  position: absolute;\n  content: "";\n  height: 18px;\n  width: 18px;\n  left: 3px;\n  bottom: 3px;\n  background-color: white;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  border-radius: 50%;\n}\ninput:checked + .slider {\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1 0%,\n      #8b5cf6 50%,\n      #a855f7 100%);\n}\ninput:checked + .slider:before {\n  transform: translateX(24px);\n}\n.settings-group {\n  animation: slideDown 0.3s ease-out;\n}\n@keyframes slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.input-container {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.input-label {\n  font-size: 14px;\n  font-weight: 600;\n  color: #0f172a;\n}\n:host-context(.dark) .input-label {\n  color: #ffffff;\n}\n.premium-input-wrapper {\n  display: flex;\n  align-items: center;\n  background: white;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 0 16px;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n:host-context(.dark) .premium-input-wrapper {\n  background: #0f172a;\n  border-color: rgba(255, 255, 255, 0.08);\n}\n.premium-input-wrapper:focus-within {\n  border-color: #8b5cf6;\n  box-shadow: 0 0 0 4px rgba(139, 92, 246, 0.1);\n}\n.premium-input-wrapper .input-prefix {\n  font-size: 16px;\n  font-weight: 600;\n  color: #94a3b8;\n  margin-right: 2px;\n}\n.premium-input-wrapper input {\n  flex: 1;\n  padding: 14px 0;\n  background: transparent;\n  border: none;\n  outline: none;\n  font-size: 16px;\n  font-weight: 600;\n  color: #0f172a;\n}\n:host-context(.dark) .premium-input-wrapper input {\n  color: #ffffff;\n}\n.premium-input-wrapper .input-suffix {\n  font-size: 13px;\n  font-weight: 700;\n  color: #94a3b8;\n}\n.section-label {\n  display: block;\n  font-size: 14px;\n  font-weight: 700;\n  color: #0f172a;\n  margin-bottom: 16px;\n  margin-top: 32px;\n}\n:host-context(.dark) .section-label {\n  color: #ffffff;\n}\n.card-display {\n  display: block;\n}\n.selected-card {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 16px 20px;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  width: 100%;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n:host-context(.dark) .selected-card {\n  background: rgba(30, 41, 59, 0.3);\n  border-color: rgba(255, 255, 255, 0.08);\n}\n.card-icon-wrapper {\n  width: 44px;\n  height: 28px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: white;\n  border-radius: 4px;\n  border: 1px solid #e2e8f0;\n  overflow: hidden;\n}\n.card-icon-wrapper svg {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  max-width: 24px;\n  max-height: 24px;\n}\n.card-icon-wrapper mat-icon {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  color: #475569;\n}\n.card-details {\n  flex: 1;\n}\n.card-number {\n  display: block;\n  font-size: 15px;\n  font-weight: 600;\n}\n.card-brand-name {\n  font-size: 13px;\n  color: #475569;\n}\n.default-badge {\n  font-size: 11px;\n  font-weight: 700;\n  color: #10b981;\n  background: rgba(16, 185, 129, 0.1);\n  padding: 4px 8px;\n  border-radius: 6px;\n  text-transform: uppercase;\n}\n.dialog-actions {\n  display: flex;\n  gap: 16px;\n  margin-top: 40px;\n}\n.cancel-button {\n  flex: 1;\n  padding: 14px;\n  background: transparent;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  color: #475569;\n  font-size: 15px;\n  font-weight: 600;\n}\n.save-button {\n  flex: 2;\n  padding: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1 0%,\n      #8b5cf6 50%,\n      #a855f7 100%);\n  border: none;\n  border-radius: 10px;\n  color: white;\n  font-size: 15px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n.error-message {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px;\n  background: rgba(239, 68, 68, 0.05);\n  border: 1px solid rgba(239, 68, 68, 0.1);\n  border-radius: 12px;\n  margin-bottom: 24px;\n  color: #ef4444;\n}\n/*# sourceMappingURL=auto-recharge-settings.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AutoRechargeSettingsComponent, { className: "AutoRechargeSettingsComponent", filePath: "src/app/modules/add-credits/auto-recharge-settings/auto-recharge-settings.component.ts", lineNumber: 33 });
})();

// src/app/modules/add-credits/payment-card/payment-card.component.ts
var _c0 = (a0, a1) => ({ "is-default": a0, "is-expired": a1 });
function PaymentCardComponent_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275element(1, "span", 25);
    \u0275\u0275text(2, " Default ");
    \u0275\u0275elementEnd();
  }
}
function PaymentCardComponent_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 26)(1, "mat-icon", 27);
    \u0275\u0275text(2, "warning");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Expired ");
    \u0275\u0275elementEnd();
  }
}
function PaymentCardComponent_button_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function PaymentCardComponent_button_36_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSetDefault());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "addCredits.paymentMethods.setDefault"));
  }
}
function PaymentCardComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "mat-icon");
    \u0275\u0275text(2, "verified");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "addCredits.paymentMethods.cardDefault"));
  }
}
function PaymentCardComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 30);
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
  onDelete() {
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PaymentCardComponent, selectors: [["app-payment-card"]], inputs: { card: "card", isDefault: "isDefault" }, outputs: { setDefault: "setDefault", delete: "delete" }, decls: 42, vars: 26, consts: [[1, "payment-card-modern", 3, "ngClass"], [1, "card-inner"], [1, "card-header"], [1, "brand-section"], [1, "brand-logo-wrapper"], [1, "brand-logo", 3, "src", "alt"], [1, "brand-name"], [1, "status-tags"], ["class", "status-tag default-tag", 4, "ngIf"], ["class", "status-tag expired-tag", 4, "ngIf"], [1, "card-number-section"], [1, "card-number"], [1, "number-dots"], [1, "number-last"], [1, "card-details"], [1, "detail-item", "cardholder"], [1, "detail-label"], [1, "detail-value"], [1, "detail-item", "expires"], [1, "card-actions"], ["class", "action-button set-default-button", 3, "click", 4, "ngIf"], ["class", "default-message", 4, "ngIf"], [1, "action-button", "delete-button", 3, "click", "disabled"], ["class", "card-glow", 4, "ngIf"], [1, "status-tag", "default-tag"], [1, "tag-dot"], [1, "status-tag", "expired-tag"], [1, "tag-icon"], [1, "action-button", "set-default-button", 3, "click"], [1, "default-message"], [1, "card-glow"]], template: function PaymentCardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        \u0275\u0275element(5, "img", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "span", 6);
        \u0275\u0275text(7);
        \u0275\u0275pipe(8, "titlecase");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 7);
        \u0275\u0275template(10, PaymentCardComponent_span_10_Template, 3, 0, "span", 8)(11, PaymentCardComponent_span_11_Template, 4, 0, "span", 9);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "div", 10)(13, "div", 11)(14, "span", 12);
        \u0275\u0275text(15, "\u2022\u2022\u2022\u2022");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "span", 12);
        \u0275\u0275text(17, "\u2022\u2022\u2022\u2022");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "span", 12);
        \u0275\u0275text(19, "\u2022\u2022\u2022\u2022");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "span", 13);
        \u0275\u0275text(21);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(22, "div", 14)(23, "div", 15)(24, "span", 16);
        \u0275\u0275text(25);
        \u0275\u0275pipe(26, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "span", 17);
        \u0275\u0275text(28);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "div", 18)(30, "span", 16);
        \u0275\u0275text(31);
        \u0275\u0275pipe(32, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "span", 17);
        \u0275\u0275text(34);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(35, "div", 19);
        \u0275\u0275template(36, PaymentCardComponent_button_36_Template, 6, 3, "button", 20)(37, PaymentCardComponent_div_37_Template, 6, 3, "div", 21);
        \u0275\u0275elementStart(38, "button", 22);
        \u0275\u0275listener("click", function PaymentCardComponent_Template_button_click_38_listener() {
          return ctx.onDelete();
        });
        \u0275\u0275elementStart(39, "mat-icon");
        \u0275\u0275text(40, "delete_outline");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(41, PaymentCardComponent_div_41_Template, 1, 0, "div", 23);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(23, _c0, ctx.isDefault && !ctx.isExpired(ctx.card.expires_at), ctx.isExpired(ctx.card.expires_at)));
        \u0275\u0275advance(5);
        \u0275\u0275property("src", ctx.getCardLogo(ctx.card.brand), \u0275\u0275sanitizeUrl)("alt", ctx.card.brand);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 17, ctx.card.brand));
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.isDefault && !ctx.isExpired(ctx.card.expires_at));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isExpired(ctx.card.expires_at));
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate(ctx.card.lastFour);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 19, "addCredits.paymentMethods.cardholder"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.card.name);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(32, 21, "addCredits.paymentMethods.expires"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.card.expires_at);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !ctx.isDefault && !ctx.isExpired(ctx.card.expires_at));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isDefault && !ctx.isExpired(ctx.card.expires_at));
        \u0275\u0275advance();
        \u0275\u0275classProp("disabled", ctx.isDefault);
        \u0275\u0275property("disabled", ctx.isDefault);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.isDefault && !ctx.isExpired(ctx.card.expires_at));
      }
    }, dependencies: [CommonModule, NgClass, NgIf, TitleCasePipe, MatButtonModule, MatIconModule, MatIcon, MatTooltipModule, MatDialogModule, TranslocoModule, TranslocoPipe], styles: ['/* src/app/modules/add-credits/payment-card/payment-card.component.scss */\n.payment-card-modern {\n  position: relative;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.payment-card-modern:hover {\n  transform: translateY(-2px);\n}\n.payment-card-modern:hover .card-inner {\n  border-color: rgba(99, 102, 241, 0.2);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);\n}\n:host-context(.dark) .payment-card-modern:hover .card-inner {\n  border-color: rgba(255, 255, 255, 0.15);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);\n}\n.payment-card-modern.is-default .card-inner {\n  border-color: rgba(99, 102, 241, 0.3);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(99, 102, 241, 0.03),\n      rgba(139, 92, 246, 0.01));\n  box-shadow: 0 0 0 1px rgba(99, 102, 241, 0.1), 0 4px 12px rgba(99, 102, 241, 0.05);\n}\n:host-context(.dark) .payment-card-modern.is-default .card-inner {\n  border-color: rgba(139, 92, 246, 0.4);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(139, 92, 246, 0.1),\n      rgba(99, 102, 241, 0.05));\n  box-shadow: 0 0 0 1px rgba(139, 92, 246, 0.1), 0 4px 12px rgba(0, 0, 0, 0.2);\n}\n.payment-card-modern.is-default:hover .card-inner {\n  border-color: rgba(99, 102, 241, 0.5);\n}\n:host-context(.dark) .payment-card-modern.is-default:hover .card-inner {\n  border-color: rgba(139, 92, 246, 0.6);\n}\n.payment-card-modern.is-expired .card-inner {\n  border-color: rgba(239, 68, 68, 0.25);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(239, 68, 68, 0.04),\n      transparent);\n}\n:host-context(.dark) .payment-card-modern.is-expired .card-inner {\n  border-color: rgba(239, 68, 68, 0.3);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(239, 68, 68, 0.08),\n      rgba(30, 41, 59, 0.6));\n}\n.payment-card-modern.is-expired .card-number .number-last {\n  color: #ef4444;\n}\n.card-inner {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 16px;\n  padding: 24px;\n  position: relative;\n  z-index: 1;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n}\n:host-context(.dark) .card-inner {\n  background: rgba(30, 41, 59, 0.6);\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  border-color: rgba(255, 255, 255, 0.08);\n  box-shadow: none;\n}\n.card-glow {\n  position: absolute;\n  inset: -2px;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1 0%,\n      #8b5cf6 50%,\n      #a855f7 100%);\n  border-radius: 18px;\n  opacity: 0.08;\n  filter: blur(20px);\n  z-index: 0;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n:host-context(.dark) .card-glow {\n  opacity: 0.15;\n}\n.payment-card-modern:hover .card-glow {\n  opacity: 0.12;\n  filter: blur(25px);\n}\n:host-context(.dark) .payment-card-modern:hover .card-glow {\n  opacity: 0.25;\n}\n.card-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 24px;\n}\n.brand-section {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.brand-logo-wrapper {\n  width: 48px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #ffffff;\n  border: 1px solid rgba(0, 0, 0, 0.05);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);\n  border-radius: 8px;\n  padding: 6px 10px;\n  flex-shrink: 0;\n}\n:host-context(.dark) .brand-logo-wrapper {\n  background: rgba(255, 255, 255, 0.05);\n  border-color: rgba(255, 255, 255, 0.1);\n  box-shadow: none;\n}\n.brand-logo {\n  height: 20px;\n  width: auto;\n  max-width: 100%;\n  object-fit: contain;\n  display: block;\n  opacity: 1 !important;\n}\n.brand-logo[src=""],\n.brand-logo:not([src]) {\n  display: none;\n}\n.brand-name {\n  font-size: 15px;\n  font-weight: 600;\n  color: #0f172a;\n}\n:host-context(.dark) .brand-name {\n  color: #ffffff;\n}\n.status-tags {\n  display: flex;\n  gap: 8px;\n}\n.status-tag {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 12px;\n  border-radius: 100px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.status-tag.default-tag {\n  background: rgba(99, 102, 241, 0.1);\n  color: #8b5cf6;\n}\n:host-context(.dark) .status-tag.default-tag {\n  background: rgba(139, 92, 246, 0.15);\n}\n.status-tag.expired-tag {\n  background: rgba(239, 68, 68, 0.1);\n  color: #ef4444;\n}\n:host-context(.dark) .status-tag.expired-tag {\n  background: rgba(239, 68, 68, 0.15);\n}\n.status-tag.expired-tag .tag-icon {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.tag-dot {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: #8b5cf6;\n  box-shadow: 0 0 8px rgba(99, 102, 241, 0.6);\n}\n.card-number-section {\n  margin-bottom: 24px;\n}\n.card-number {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-family:\n    "IBM Plex Mono",\n    "SF Mono",\n    "Menlo",\n    monospace;\n  font-size: 20px;\n  letter-spacing: 3px;\n  font-weight: 500;\n}\n.number-dots {\n  color: #94a3b8;\n  font-weight: 500;\n}\n:host-context(.dark) .number-dots {\n  color: rgba(255, 255, 255, 0.4);\n}\n.number-last {\n  color: #0f172a;\n  font-weight: 700;\n}\n:host-context(.dark) .number-last {\n  color: #ffffff;\n}\n.card-details {\n  display: grid;\n  grid-template-columns: 1fr auto;\n  gap: 24px;\n  padding: 20px 0;\n  margin-bottom: 0px;\n}\n:host-context(.dark) .card-details {\n  border-top-color: rgba(255, 255, 255, 0.08);\n  border-bottom-color: rgba(255, 255, 255, 0.08);\n}\n.detail-item {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.detail-label {\n  font-size: 11px;\n  font-weight: 500;\n  color: #94a3b8;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n:host-context(.dark) .detail-label {\n  color: rgba(255, 255, 255, 0.4);\n}\n.detail-value {\n  font-size: 14px;\n  font-weight: 600;\n  color: #0f172a;\n}\n:host-context(.dark) .detail-value {\n  color: #ffffff;\n}\n.cardholder .detail-value {\n  max-width: 200px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.card-actions {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n.action-button {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 16px;\n  background: transparent;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n:host-context(.dark) .action-button {\n  border-color: rgba(255, 255, 255, 0.08);\n}\n.action-button mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.set-default-button {\n  color: #0f172a;\n  flex: 1;\n}\n:host-context(.dark) .set-default-button {\n  color: #ffffff;\n}\n.set-default-button:hover {\n  background: rgba(99, 102, 241, 0.08);\n  border-color: rgba(99, 102, 241, 0.3);\n  color: #8b5cf6;\n}\n.set-default-button:hover mat-icon {\n  color: #8b5cf6;\n}\n.default-message {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  color: #10b981;\n  flex: 1;\n}\n.default-message mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: #10b981;\n}\n.delete-button {\n  color: #94a3b8;\n  padding: 10px;\n  min-width: 40px;\n  justify-content: center;\n}\n:host-context(.dark) .delete-button {\n  color: rgba(255, 255, 255, 0.4);\n}\n.delete-button:hover:not(.disabled) {\n  background: rgba(239, 68, 68, 0.08);\n  border-color: rgba(239, 68, 68, 0.3);\n  color: #ef4444;\n}\n.delete-button:hover:not(.disabled) mat-icon {\n  color: #ef4444;\n}\n.delete-button.disabled {\n  opacity: 0.3;\n  cursor: not-allowed;\n  pointer-events: none;\n}\n@media (max-width: 480px) {\n  .card-inner {\n    padding: 20px;\n  }\n  .card-number {\n    font-size: 16px;\n    gap: 8px;\n  }\n  .card-details {\n    grid-template-columns: 1fr 1fr;\n    gap: 16px;\n  }\n  .action-button {\n    padding: 8px 12px;\n    font-size: 12px;\n  }\n  .set-default-button span {\n    display: none;\n  }\n  .set-default-button {\n    flex: 0;\n    padding: 8px 10px;\n    min-width: 40px;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=payment-card.component.css.map */\n'], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaymentCardComponent, [{
    type: Component,
    args: [{ selector: "app-payment-card", standalone: true, imports: [CommonModule, MatButtonModule, MatIconModule, MatTooltipModule, MatDialogModule, TranslocoModule], encapsulation: ViewEncapsulation.None, template: `<div
    class="payment-card-modern"
    [ngClass]="{
        'is-default': isDefault && !isExpired(card.expires_at),
        'is-expired': isExpired(card.expires_at),
    }"
>
    <div class="card-inner">
        <!-- Card Header -->
        <div class="card-header">
            <div class="brand-section">
                <div class="brand-logo-wrapper">
                    <img [src]="getCardLogo(card.brand)" [alt]="card.brand" class="brand-logo" />
                </div>
                <span class="brand-name">{{ card.brand | titlecase }}</span>
            </div>
            <div class="status-tags">
                <span *ngIf="isDefault && !isExpired(card.expires_at)" class="status-tag default-tag">
                    <span class="tag-dot"></span>
                    Default
                </span>
                <span *ngIf="isExpired(card.expires_at)" class="status-tag expired-tag">
                    <mat-icon class="tag-icon">warning</mat-icon>
                    Expired
                </span>
            </div>
        </div>

        <!-- Card Number Display -->
        <div class="card-number-section">
            <div class="card-number">
                <span class="number-dots">\u2022\u2022\u2022\u2022</span>
                <span class="number-dots">\u2022\u2022\u2022\u2022</span>
                <span class="number-dots">\u2022\u2022\u2022\u2022</span>
                <span class="number-last">{{ card.lastFour }}</span>
            </div>
        </div>

        <!-- Card Details -->
        <div class="card-details">
            <div class="detail-item cardholder">
                <span class="detail-label">{{ 'addCredits.paymentMethods.cardholder' | transloco }}</span>
                <span class="detail-value">{{ card.name }}</span>
            </div>
            <div class="detail-item expires">
                <span class="detail-label">{{ 'addCredits.paymentMethods.expires' | transloco }}</span>
                <span class="detail-value">{{ card.expires_at }}</span>
            </div>
        </div>

        <!-- Card Actions -->
        <div class="card-actions">
            <button
                *ngIf="!isDefault && !isExpired(card.expires_at)"
                class="action-button set-default-button"
                (click)="onSetDefault()"
            >
                <mat-icon>check_circle</mat-icon>
                <span>{{ 'addCredits.paymentMethods.setDefault' | transloco }}</span>
            </button>
            <div *ngIf="isDefault && !isExpired(card.expires_at)" class="default-message">
                <mat-icon>verified</mat-icon>
                <span>{{ 'addCredits.paymentMethods.cardDefault' | transloco }}</span>
            </div>
            <button
                class="action-button delete-button"
                (click)="onDelete()"
                [disabled]="isDefault"
                [class.disabled]="isDefault"
            >
                <mat-icon>delete_outline</mat-icon>
            </button>
        </div>
    </div>

    <!-- Glow effect for default card -->
    <div *ngIf="isDefault && !isExpired(card.expires_at)" class="card-glow"></div>
</div>
`, styles: ['/* src/app/modules/add-credits/payment-card/payment-card.component.scss */\n.payment-card-modern {\n  position: relative;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.payment-card-modern:hover {\n  transform: translateY(-2px);\n}\n.payment-card-modern:hover .card-inner {\n  border-color: rgba(99, 102, 241, 0.2);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);\n}\n:host-context(.dark) .payment-card-modern:hover .card-inner {\n  border-color: rgba(255, 255, 255, 0.15);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);\n}\n.payment-card-modern.is-default .card-inner {\n  border-color: rgba(99, 102, 241, 0.3);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(99, 102, 241, 0.03),\n      rgba(139, 92, 246, 0.01));\n  box-shadow: 0 0 0 1px rgba(99, 102, 241, 0.1), 0 4px 12px rgba(99, 102, 241, 0.05);\n}\n:host-context(.dark) .payment-card-modern.is-default .card-inner {\n  border-color: rgba(139, 92, 246, 0.4);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(139, 92, 246, 0.1),\n      rgba(99, 102, 241, 0.05));\n  box-shadow: 0 0 0 1px rgba(139, 92, 246, 0.1), 0 4px 12px rgba(0, 0, 0, 0.2);\n}\n.payment-card-modern.is-default:hover .card-inner {\n  border-color: rgba(99, 102, 241, 0.5);\n}\n:host-context(.dark) .payment-card-modern.is-default:hover .card-inner {\n  border-color: rgba(139, 92, 246, 0.6);\n}\n.payment-card-modern.is-expired .card-inner {\n  border-color: rgba(239, 68, 68, 0.25);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(239, 68, 68, 0.04),\n      transparent);\n}\n:host-context(.dark) .payment-card-modern.is-expired .card-inner {\n  border-color: rgba(239, 68, 68, 0.3);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(239, 68, 68, 0.08),\n      rgba(30, 41, 59, 0.6));\n}\n.payment-card-modern.is-expired .card-number .number-last {\n  color: #ef4444;\n}\n.card-inner {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 16px;\n  padding: 24px;\n  position: relative;\n  z-index: 1;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n}\n:host-context(.dark) .card-inner {\n  background: rgba(30, 41, 59, 0.6);\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  border-color: rgba(255, 255, 255, 0.08);\n  box-shadow: none;\n}\n.card-glow {\n  position: absolute;\n  inset: -2px;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1 0%,\n      #8b5cf6 50%,\n      #a855f7 100%);\n  border-radius: 18px;\n  opacity: 0.08;\n  filter: blur(20px);\n  z-index: 0;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n:host-context(.dark) .card-glow {\n  opacity: 0.15;\n}\n.payment-card-modern:hover .card-glow {\n  opacity: 0.12;\n  filter: blur(25px);\n}\n:host-context(.dark) .payment-card-modern:hover .card-glow {\n  opacity: 0.25;\n}\n.card-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 24px;\n}\n.brand-section {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.brand-logo-wrapper {\n  width: 48px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #ffffff;\n  border: 1px solid rgba(0, 0, 0, 0.05);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);\n  border-radius: 8px;\n  padding: 6px 10px;\n  flex-shrink: 0;\n}\n:host-context(.dark) .brand-logo-wrapper {\n  background: rgba(255, 255, 255, 0.05);\n  border-color: rgba(255, 255, 255, 0.1);\n  box-shadow: none;\n}\n.brand-logo {\n  height: 20px;\n  width: auto;\n  max-width: 100%;\n  object-fit: contain;\n  display: block;\n  opacity: 1 !important;\n}\n.brand-logo[src=""],\n.brand-logo:not([src]) {\n  display: none;\n}\n.brand-name {\n  font-size: 15px;\n  font-weight: 600;\n  color: #0f172a;\n}\n:host-context(.dark) .brand-name {\n  color: #ffffff;\n}\n.status-tags {\n  display: flex;\n  gap: 8px;\n}\n.status-tag {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 12px;\n  border-radius: 100px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.status-tag.default-tag {\n  background: rgba(99, 102, 241, 0.1);\n  color: #8b5cf6;\n}\n:host-context(.dark) .status-tag.default-tag {\n  background: rgba(139, 92, 246, 0.15);\n}\n.status-tag.expired-tag {\n  background: rgba(239, 68, 68, 0.1);\n  color: #ef4444;\n}\n:host-context(.dark) .status-tag.expired-tag {\n  background: rgba(239, 68, 68, 0.15);\n}\n.status-tag.expired-tag .tag-icon {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.tag-dot {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: #8b5cf6;\n  box-shadow: 0 0 8px rgba(99, 102, 241, 0.6);\n}\n.card-number-section {\n  margin-bottom: 24px;\n}\n.card-number {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-family:\n    "IBM Plex Mono",\n    "SF Mono",\n    "Menlo",\n    monospace;\n  font-size: 20px;\n  letter-spacing: 3px;\n  font-weight: 500;\n}\n.number-dots {\n  color: #94a3b8;\n  font-weight: 500;\n}\n:host-context(.dark) .number-dots {\n  color: rgba(255, 255, 255, 0.4);\n}\n.number-last {\n  color: #0f172a;\n  font-weight: 700;\n}\n:host-context(.dark) .number-last {\n  color: #ffffff;\n}\n.card-details {\n  display: grid;\n  grid-template-columns: 1fr auto;\n  gap: 24px;\n  padding: 20px 0;\n  margin-bottom: 0px;\n}\n:host-context(.dark) .card-details {\n  border-top-color: rgba(255, 255, 255, 0.08);\n  border-bottom-color: rgba(255, 255, 255, 0.08);\n}\n.detail-item {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.detail-label {\n  font-size: 11px;\n  font-weight: 500;\n  color: #94a3b8;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n:host-context(.dark) .detail-label {\n  color: rgba(255, 255, 255, 0.4);\n}\n.detail-value {\n  font-size: 14px;\n  font-weight: 600;\n  color: #0f172a;\n}\n:host-context(.dark) .detail-value {\n  color: #ffffff;\n}\n.cardholder .detail-value {\n  max-width: 200px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.card-actions {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n.action-button {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 16px;\n  background: transparent;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n:host-context(.dark) .action-button {\n  border-color: rgba(255, 255, 255, 0.08);\n}\n.action-button mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.set-default-button {\n  color: #0f172a;\n  flex: 1;\n}\n:host-context(.dark) .set-default-button {\n  color: #ffffff;\n}\n.set-default-button:hover {\n  background: rgba(99, 102, 241, 0.08);\n  border-color: rgba(99, 102, 241, 0.3);\n  color: #8b5cf6;\n}\n.set-default-button:hover mat-icon {\n  color: #8b5cf6;\n}\n.default-message {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  color: #10b981;\n  flex: 1;\n}\n.default-message mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: #10b981;\n}\n.delete-button {\n  color: #94a3b8;\n  padding: 10px;\n  min-width: 40px;\n  justify-content: center;\n}\n:host-context(.dark) .delete-button {\n  color: rgba(255, 255, 255, 0.4);\n}\n.delete-button:hover:not(.disabled) {\n  background: rgba(239, 68, 68, 0.08);\n  border-color: rgba(239, 68, 68, 0.3);\n  color: #ef4444;\n}\n.delete-button:hover:not(.disabled) mat-icon {\n  color: #ef4444;\n}\n.delete-button.disabled {\n  opacity: 0.3;\n  cursor: not-allowed;\n  pointer-events: none;\n}\n@media (max-width: 480px) {\n  .card-inner {\n    padding: 20px;\n  }\n  .card-number {\n    font-size: 16px;\n    gap: 8px;\n  }\n  .card-details {\n    grid-template-columns: 1fr 1fr;\n    gap: 16px;\n  }\n  .action-button {\n    padding: 8px 12px;\n    font-size: 12px;\n  }\n  .set-default-button span {\n    display: none;\n  }\n  .set-default-button {\n    flex: 0;\n    padding: 8px 10px;\n    min-width: 40px;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=payment-card.component.css.map */\n'] }]
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

// src/app/modules/add-credits/services/payment.service.ts
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

// src/app/modules/add-credits/purchase-credits-dialog/purchase-credits-dialog.component.ts
var _c02 = (a0, a1) => ({ "border-indigo-500 bg-indigo-50 text-indigo-700 shadow-sm ring-2 ring-indigo-500/20 dark:border-indigo-400 dark:bg-indigo-950/40 dark:text-indigo-200": a0, "border-stone-200 bg-transparent text-stone-900 hover:border-stone-300 dark:border-gray-700 dark:text-white dark:hover:border-gray-600": a1 });
var _c1 = (a0, a1) => ({ payUsd: a0, receivedUsd: a1 });
function PurchaseCreditsDialogComponent_ng_container_1_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "mat-icon", 24);
    \u0275\u0275text(2, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 25);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.error);
  }
}
function PurchaseCreditsDialogComponent_ng_container_1_button_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 26);
    \u0275\u0275listener("click", function PurchaseCreditsDialogComponent_ng_container_1_button_15_Template_button_click_0_listener() {
      const amount_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectPresetAmount(amount_r4));
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const amount_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(3, _c02, ctx_r1.selectedAmount === amount_r4 && !ctx_r1.isCustomAmount, ctx_r1.selectedAmount !== amount_r4 || ctx_r1.isCustomAmount))("disabled", ctx_r1.loading);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", amount_r4, "");
  }
}
function PurchaseCreditsDialogComponent_ng_container_1_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "span", 28);
    \u0275\u0275text(2, "$");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 29);
    \u0275\u0275twoWayListener("ngModelChange", function PurchaseCreditsDialogComponent_ng_container_1_div_23_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.customAmountValue, $event) || (ctx_r1.customAmountValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function PurchaseCreditsDialogComponent_ng_container_1_div_23_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onCustomAmountChange($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.customAmountValue);
    \u0275\u0275property("min", ctx_r1.minPurchaseUsd)("max", ctx_r1.maxPurchaseUsd)("disabled", ctx_r1.loading);
  }
}
function PurchaseCreditsDialogComponent_ng_container_1_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "mat-icon", 31);
    \u0275\u0275text(2, "celebration");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 32);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(5, 1, "addCredits.promo.weekOneUsd50.dialogDouble", \u0275\u0275pureFunction2(4, _c1, "$" + ctx_r1.data.promotion.purchaseUsdAmount, "$" + ctx_r1.data.promotion.purchaseUsdAmount * 2)), " ");
  }
}
function PurchaseCreditsDialogComponent_ng_container_1_section_30_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 39);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "addCredits.paymentMethods.cardDefault"));
  }
}
function PurchaseCreditsDialogComponent_ng_container_1_section_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 8)(1, "label", 9);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 33)(5, "div", 34);
    \u0275\u0275element(6, "img", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 36)(8, "span", 37);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(10, PurchaseCreditsDialogComponent_ng_container_1_section_30_span_10_Template, 3, 3, "span", 38);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "addCredits.purchaseDialog.paymentMethod"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("src", ctx_r1.getCardLogo(ctx_r1.data.card.brand), \u0275\u0275sanitizeUrl)("alt", ctx_r1.data.card.brand);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" \u2022\u2022\u2022\u2022 ", ctx_r1.data.card.lastFour, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.data.card.isDefault);
  }
}
function PurchaseCreditsDialogComponent_ng_container_1_mat_spinner_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 40);
  }
}
function PurchaseCreditsDialogComponent_ng_container_1_ng_container_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 41);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "chat.payment.payBtn"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("$", ctx_r1.selectedAmount, "");
  }
}
function PurchaseCreditsDialogComponent_ng_container_1_span_38_Template(rf, ctx) {
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
    \u0275\u0275elementStart(14, "div", 10);
    \u0275\u0275template(15, PurchaseCreditsDialogComponent_ng_container_1_button_15_Template, 3, 6, "button", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 12)(17, "button", 13);
    \u0275\u0275listener("click", function PurchaseCreditsDialogComponent_ng_container_1_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleCustomAmount());
    });
    \u0275\u0275elementStart(18, "mat-icon", 14);
    \u0275\u0275text(19, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span");
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(23, PurchaseCreditsDialogComponent_ng_container_1_div_23_Template, 4, 4, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "p", 16);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "transloco");
    \u0275\u0275pipe(27, "transloco");
    \u0275\u0275pipe(28, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275template(29, PurchaseCreditsDialogComponent_ng_container_1_div_29_Template, 6, 7, "div", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275template(30, PurchaseCreditsDialogComponent_ng_container_1_section_30_Template, 11, 7, "section", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 19)(32, "button", 20);
    \u0275\u0275listener("click", function PurchaseCreditsDialogComponent_ng_container_1_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "button", 21);
    \u0275\u0275listener("click", function PurchaseCreditsDialogComponent_ng_container_1_Template_button_click_35_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.purchase());
    });
    \u0275\u0275template(36, PurchaseCreditsDialogComponent_ng_container_1_mat_spinner_36_Template, 1, 0, "mat-spinner", 22)(37, PurchaseCreditsDialogComponent_ng_container_1_ng_container_37_Template, 6, 4, "ng-container", 1)(38, PurchaseCreditsDialogComponent_ng_container_1_span_38_Template, 3, 3, "span", 1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 21, "addCredits.purchaseDialog.title"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 23, "addCredits.hero.subtitle"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.error);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 25, "addCredits.purchaseDialog.selectAmount"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.creditAmounts);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("font-semibold", ctx_r1.isCustomAmount);
    \u0275\u0275property("disabled", ctx_r1.loading);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 27, "addCredits.purchaseDialog.customAmount"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.isCustomAmount);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" ", \u0275\u0275pipeBind1(26, 29, "addCredits.purchaseDialog.minimum"), " \xB7 ", \u0275\u0275pipeBind1(27, 31, "addCredits.purchaseDialog.maximum"), " $", \u0275\u0275pipeBind2(28, 33, ctx_r1.maxPurchaseUsd, "1.0-0"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.showWeekOneDoubleCreditsHint());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.data == null ? null : ctx_r1.data.card);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(34, 36, "addCredits.purchaseDialog.cancel"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.loading || !ctx_r1.selectedCardId || !ctx_r1.isValidAmount());
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
    \u0275\u0275element(0, "mat-spinner", 51);
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
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42)(1, "div", 43)(2, "mat-icon", 44);
    \u0275\u0275text(3, "verified_user");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 45)(5, "h3", 46);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 47);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 48);
    \u0275\u0275listener("click", function PurchaseCreditsDialogComponent_div_2_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.startKyc());
    });
    \u0275\u0275template(12, PurchaseCreditsDialogComponent_div_2_mat_spinner_12_Template, 1, 0, "mat-spinner", 49)(13, PurchaseCreditsDialogComponent_div_2_span_13_Template, 3, 3, "span", 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 50);
    \u0275\u0275listener("click", function PurchaseCreditsDialogComponent_div_2_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r6);
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
  creditPurchaseInvalidAmount: "addCredits.purchaseDialog.errors.credit_purchase_invalid_amount"
};
var PurchaseCreditsDialogComponent = class _PurchaseCreditsDialogComponent {
  constructor() {
    this._dialogRef = inject(MatDialogRef);
    this._paymentService = inject(PaymentService);
    this._transloco = inject(TranslocoService);
    this.data = inject(MAT_DIALOG_DATA);
    this.minPurchaseUsd = MIN_CREDIT_PURCHASE_USD;
    this.maxPurchaseUsd = MAX_CREDIT_PURCHASE_USD;
    this.selectedAmount = 100;
    this.loading = false;
    this.error = null;
    this.isCustomAmount = false;
    this.customAmountValue = null;
    this.creditAmounts = [40, 50, 100, 250, 500, 1e3];
    this.kycRequired = false;
  }
  ngOnInit() {
    if (this.data?.card) {
      this.selectedCardId = this.data.card._id;
    }
  }
  showWeekOneDoubleCreditsHint() {
    const p = this.data?.promotion;
    if (!p?.eligible) {
      return false;
    }
    const targetUsd = p.purchaseUsdAmount;
    if (this.loading) {
      return false;
    }
    if (this.isCustomAmount) {
      return Number(this.customAmountValue) === targetUsd;
    }
    return !this.isCustomAmount && this.selectedAmount === targetUsd;
  }
  selectPresetAmount(amount) {
    this.isCustomAmount = false;
    this.customAmountValue = null;
    this.selectedAmount = amount;
  }
  toggleCustomAmount() {
    this.isCustomAmount = !this.isCustomAmount;
    if (this.isCustomAmount) {
      this.customAmountValue = this.selectedAmount >= MIN_CREDIT_PURCHASE_USD ? this.selectedAmount : MIN_CREDIT_PURCHASE_USD;
      this.selectedAmount = this.customAmountValue;
    }
  }
  onCustomAmountChange(value) {
    this.customAmountValue = value;
    this.selectedAmount = value || 0;
  }
  isValidAmount() {
    return this.selectedAmount >= MIN_CREDIT_PURCHASE_USD && this.selectedAmount <= MAX_CREDIT_PURCHASE_USD;
  }
  close() {
    this._dialogRef.close();
  }
  startKyc() {
    this.loading = true;
    this._paymentService.resumeKYC().subscribe({
      next: (response) => {
        this.loading = false;
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
  purchase() {
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
        if (err.error?.code === "client_cannot_recharge_needs_kyc" || err.error?.message?.includes("kyc")) {
          this.kycRequired = true;
          this.error = null;
        } else {
          this.error = this._purchaseCreditsApiError(err);
        }
      }
    });
  }
  static {
    this.\u0275fac = function PurchaseCreditsDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PurchaseCreditsDialogComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PurchaseCreditsDialogComponent, selectors: [["app-purchase-credits-dialog"]], decls: 3, vars: 2, consts: [[1, "flex", "w-full", "max-w-md", "flex-col", "overflow-hidden", "rounded-2xl", "border", "border-stone-200/90", "bg-white", "shadow-sm", "dark:border-gray-800", "dark:bg-gray-900/70"], [4, "ngIf"], ["class", "flex flex-col items-center px-6 py-10 text-center md:py-12", 4, "ngIf"], [1, "border-b", "border-stone-200/90", "px-5", "py-5", "dark:border-gray-800", "md:p-6"], [1, "text-xl", "font-semibold", "tracking-tight", "text-stone-950", "dark:text-white"], [1, "mt-2", "text-sm", "leading-6", "text-stone-500", "dark:text-stone-400"], [1, "!flex", "!max-h-[min(62vh,480px)]", "!flex-col", "!gap-6", "!overflow-y-auto", "px-5", "py-6", "dark:text-stone-100", "md:p-6"], ["class", "flex gap-3 rounded-xl border border-amber-200/80 bg-amber-50 px-4 py-3 text-sm dark:border-amber-900/50 dark:bg-amber-950/30", "role", "alert", 4, "ngIf"], [1, "flex", "flex-col", "gap-3"], [1, "text-sm", "font-semibold", "text-stone-950", "dark:text-white"], [1, "grid", "grid-cols-2", "gap-2", "sm:grid-cols-3"], ["type", "button", "class", "flex h-11 min-h-[2.75rem] items-center justify-center rounded-xl border text-base font-semibold transition disabled:opacity-50", 3, "ngClass", "disabled", "click", 4, "ngFor", "ngForOf"], [1, "flex", "flex-col", "gap-2", "pt-1"], ["type", "button", 1, "inline-flex", "items-center", "gap-2", "self-start", "text-sm", "font-medium", "text-indigo-600", "transition", "hover:text-indigo-500", "disabled:opacity-50", "dark:text-indigo-400", "dark:hover:text-indigo-300", 3, "click", "disabled"], [1, "text-lg", 2, "width", "18px", "height", "18px"], ["class", "flex items-center gap-3 rounded-xl border border-stone-200 bg-stone-50/80 px-4 py-3 dark:border-gray-700 dark:bg-gray-950/50", 4, "ngIf"], [1, "text-xs", "text-stone-500", "dark:text-stone-400"], ["class", "flex gap-3 rounded-xl border border-emerald-200/90 bg-emerald-50 px-4 py-3 text-sm dark:border-emerald-800 dark:bg-emerald-950/40", 4, "ngIf"], ["class", "flex flex-col gap-3", 4, "ngIf"], [1, "flex", "flex-col-reverse", "gap-2", "border-t", "border-stone-200/90", "px-5", "py-4", "dark:border-gray-800", "sm:flex-row", "sm:justify-end", "sm:gap-3", "md:px-6"], ["mat-stroked-button", "", "type", "button", 1, "!min-h-11", "w-full", "!rounded-xl", "!border-stone-200", "!font-medium", "sm:w-auto", "dark:!border-gray-700", 3, "click", "disabled"], ["mat-flat-button", "", "color", "primary", "type", "button", 1, "flex", "!min-h-11", "w-full", "shrink-0", "items-center", "justify-center", "gap-2", "!rounded-xl", "px-5", "sm:w-auto", 3, "click", "disabled"], ["diameter", "20", "class", "inline-block", 4, "ngIf"], ["role", "alert", 1, "flex", "gap-3", "rounded-xl", "border", "border-amber-200/80", "bg-amber-50", "px-4", "py-3", "text-sm", "dark:border-amber-900/50", "dark:bg-amber-950/30"], [1, "shrink-0", "text-amber-600", "dark:text-amber-400", 2, "font-size", "22px", "width", "22px", "height", "22px"], [1, "m-0", "flex-1", "leading-relaxed", "text-amber-950", "dark:text-amber-100"], ["type", "button", 1, "flex", "h-11", "min-h-[2.75rem]", "items-center", "justify-center", "rounded-xl", "border", "text-base", "font-semibold", "transition", "disabled:opacity-50", 3, "click", "ngClass", "disabled"], [1, "flex", "items-center", "gap-3", "rounded-xl", "border", "border-stone-200", "bg-stone-50/80", "px-4", "py-3", "dark:border-gray-700", "dark:bg-gray-950/50"], [1, "text-lg", "font-semibold", "text-stone-500", "dark:text-stone-400"], ["type", "number", "placeholder", "40", 1, "min-w-0", "flex-1", "border-0", "bg-transparent", "text-lg", "font-semibold", "text-stone-950", "outline-none", "dark:text-white", 3, "ngModelChange", "ngModel", "min", "max", "disabled"], [1, "flex", "gap-3", "rounded-xl", "border", "border-emerald-200/90", "bg-emerald-50", "px-4", "py-3", "text-sm", "dark:border-emerald-800", "dark:bg-emerald-950/40"], [1, "shrink-0", "text-emerald-700", "dark:text-emerald-400", 2, "width", "22px", "height", "22px", "font-size", "22px"], [1, "m-0", "flex-1", "leading-relaxed", "text-emerald-950", "dark:text-emerald-50"], [1, "flex", "flex-wrap", "items-center", "gap-3", "rounded-xl", "border", "border-stone-200", "px-4", "py-3", "dark:border-gray-700"], [1, "flex", "h-10", "w-[4.75rem]", "shrink-0", "items-center", "justify-center", "rounded-md", "border", "border-stone-200", "bg-white", "px-2", "dark:border-gray-600", "dark:bg-gray-950"], [1, "max-h-[1.125rem]", "w-auto", "max-w-full", "object-contain", 3, "src", "alt"], [1, "min-w-0", "flex-1"], [1, "truncate", "font-medium", "tabular-nums", "text-stone-900", "dark:text-stone-100"], ["class", "shrink-0 rounded-md bg-emerald-50 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400", 4, "ngIf"], [1, "shrink-0", "rounded-md", "bg-emerald-50", "px-2", "py-0.5", "text-[11px]", "font-semibold", "uppercase", "tracking-wide", "text-emerald-700", "dark:bg-emerald-950/40", "dark:text-emerald-400"], ["diameter", "20", 1, "inline-block"], [1, "rounded", "bg-white/20", "px-2", "py-0.5", "text-sm"], [1, "flex", "flex-col", "items-center", "px-6", "py-10", "text-center", "md:py-12"], [1, "mb-6", "flex", "h-[5.25rem]", "w-[5.25rem]", "items-center", "justify-center", "rounded-full", "bg-stone-100", "ring-[12px]", "ring-stone-100/70", "dark:bg-gray-800", "dark:ring-gray-900/70"], [1, "text-stone-600", "dark:text-stone-300", 2, "width", "48px", "height", "48px", "font-size", "48px"], [1, "mx-auto", "flex", "max-w-sm", "flex-col", "items-center", "gap-4"], [1, "text-lg", "font-semibold", "tracking-tight", "text-stone-950", "dark:text-white"], [1, "text-sm", "leading-6", "text-stone-600", "dark:text-stone-400"], ["mat-flat-button", "", "color", "primary", "type", "button", 1, "!mt-1", "w-full", "!min-h-11", "!rounded-xl", "!px-5", 3, "click", "disabled"], ["diameter", "24", "class", "inline-block", 4, "ngIf"], ["mat-button", "", "type", "button", 1, "!min-h-10", "!rounded-xl", "text-sm", "font-medium", "text-stone-600", "dark:text-stone-400", 3, "click", "disabled"], ["diameter", "24", 1, "inline-block"]], template: function PurchaseCreditsDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, PurchaseCreditsDialogComponent_ng_container_1_Template, 39, 38, "ng-container", 1)(2, PurchaseCreditsDialogComponent_div_2_Template, 17, 13, "div", 2);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.kycRequired);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.kycRequired);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, DecimalPipe, FormsModule, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, MinValidator, MaxValidator, NgModel, MatDialogModule, MatDialogContent, MatButtonModule, MatButton, MatIconModule, MatIcon, TranslocoModule, TranslocoPipe, MatProgressSpinnerModule, MatProgressSpinner], styles: ["/* src/app/modules/add-credits/purchase-credits-dialog/purchase-credits-dialog.component.scss */\n.purchase-credits-dialog-panel.cdk-overlay-pane {\n  max-width: min(500px, 92vw);\n}\n.purchase-credits-dialog-panel .mat-mdc-dialog-container {\n  padding: 0 !important;\n  overflow: hidden;\n  border-radius: 1rem;\n}\n.purchase-credits-dialog-panel .mat-mdc-dialog-surface {\n  border-radius: 1rem !important;\n  overflow: hidden;\n  background: transparent !important;\n  box-shadow: 0 4px 6px -1px rgba(15, 23, 42, 0.08), 0 2px 4px -2px rgba(15, 23, 42, 0.08);\n}\n.mat-mdc-raised-button mat-spinner,\n.mat-mdc-raised-button mat-progress-spinner,\n.mat-mdc-unelevated-button mat-spinner,\n.mat-mdc-unelevated-button mat-progress-spinner,\n.mat-mdc-outlined-button mat-spinner,\n.mat-mdc-outlined-button mat-progress-spinner,\n.mat-mdc-button mat-spinner,\n.mat-mdc-button mat-progress-spinner {\n  display: inline-block;\n  vertical-align: middle;\n}\n/*# sourceMappingURL=purchase-credits-dialog.component.css.map */\n"], encapsulation: 2 });
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
    ], encapsulation: ViewEncapsulation.None, template: `<div
    class="flex w-full max-w-md flex-col overflow-hidden rounded-2xl border border-stone-200/90 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900/70"
>
    <!-- Normal Purchase Flow -->
    <ng-container *ngIf="!kycRequired">
        <header class="border-b border-stone-200/90 px-5 py-5 dark:border-gray-800 md:p-6">
            <h2 class="text-xl font-semibold tracking-tight text-stone-950 dark:text-white">
                {{ 'addCredits.purchaseDialog.title' | transloco }}
            </h2>
            <p class="mt-2 text-sm leading-6 text-stone-500 dark:text-stone-400">
                {{ 'addCredits.hero.subtitle' | transloco }}
            </p>
        </header>

        <mat-dialog-content class="!flex !max-h-[min(62vh,480px)] !flex-col !gap-6 !overflow-y-auto px-5 py-6 dark:text-stone-100 md:p-6">
            <!-- Notice (payment guardrails, declines, etc.) -->
            <div
                *ngIf="error"
                class="flex gap-3 rounded-xl border border-amber-200/80 bg-amber-50 px-4 py-3 text-sm dark:border-amber-900/50 dark:bg-amber-950/30"
                role="alert"
            >
                <mat-icon
                    class="shrink-0 text-amber-600 dark:text-amber-400"
                    style="font-size: 22px; width: 22px; height: 22px"
                    >info</mat-icon
                >
                <p class="m-0 flex-1 leading-relaxed text-amber-950 dark:text-amber-100">{{ error }}</p>
            </div>

            <!-- Amount Selection Section -->
            <section class="flex flex-col gap-3">
                <label class="text-sm font-semibold text-stone-950 dark:text-white">
                    {{ 'addCredits.purchaseDialog.selectAmount' | transloco }}
                </label>

                <div class="grid grid-cols-2 gap-2 sm:grid-cols-3">
                    <button
                        *ngFor="let amount of creditAmounts"
                        type="button"
                        class="flex h-11 min-h-[2.75rem] items-center justify-center rounded-xl border text-base font-semibold transition disabled:opacity-50"
                        [ngClass]="{
                            'border-indigo-500 bg-indigo-50 text-indigo-700 shadow-sm ring-2 ring-indigo-500/20 dark:border-indigo-400 dark:bg-indigo-950/40 dark:text-indigo-200':
                                selectedAmount === amount && !isCustomAmount,
                            'border-stone-200 bg-transparent text-stone-900 hover:border-stone-300 dark:border-gray-700 dark:text-white dark:hover:border-gray-600':
                                selectedAmount !== amount || isCustomAmount
                        }"
                        (click)="selectPresetAmount(amount)"
                        [disabled]="loading"
                    >
                        <span>\${{ amount }}</span>
                    </button>
                </div>

                <div class="flex flex-col gap-2 pt-1">
                    <button
                        type="button"
                        class="inline-flex items-center gap-2 self-start text-sm font-medium text-indigo-600 transition hover:text-indigo-500 disabled:opacity-50 dark:text-indigo-400 dark:hover:text-indigo-300"
                        [class.font-semibold]="isCustomAmount"
                        (click)="toggleCustomAmount()"
                        [disabled]="loading"
                    >
                        <mat-icon class="text-lg" style="width: 18px; height: 18px">edit</mat-icon>
                        <span>{{ 'addCredits.purchaseDialog.customAmount' | transloco }}</span>
                    </button>

                    <div *ngIf="isCustomAmount" class="flex items-center gap-3 rounded-xl border border-stone-200 bg-stone-50/80 px-4 py-3 dark:border-gray-700 dark:bg-gray-950/50">
                        <span class="text-lg font-semibold text-stone-500 dark:text-stone-400">$</span>
                        <input
                            type="number"
                            class="min-w-0 flex-1 border-0 bg-transparent text-lg font-semibold text-stone-950 outline-none dark:text-white"
                            [(ngModel)]="customAmountValue"
                            (ngModelChange)="onCustomAmountChange($event)"
                            placeholder="40"
                            [min]="minPurchaseUsd"
                            [max]="maxPurchaseUsd"
                            [disabled]="loading"
                        />
                    </div>
                </div>

                <p class="text-xs text-stone-500 dark:text-stone-400">
                    {{ 'addCredits.purchaseDialog.minimum' | transloco }} \xB7
                    {{ 'addCredits.purchaseDialog.maximum' | transloco }}
                    \${{ maxPurchaseUsd | number: '1.0-0' }}
                </p>

                <div
                    *ngIf="showWeekOneDoubleCreditsHint()"
                    class="flex gap-3 rounded-xl border border-emerald-200/90 bg-emerald-50 px-4 py-3 text-sm dark:border-emerald-800 dark:bg-emerald-950/40"
                >
                    <mat-icon
                        class="shrink-0 text-emerald-700 dark:text-emerald-400"
                        style="width: 22px; height: 22px; font-size: 22px"
                        >celebration</mat-icon
                    >
                    <p class="m-0 flex-1 leading-relaxed text-emerald-950 dark:text-emerald-50">
                        {{
                            'addCredits.promo.weekOneUsd50.dialogDouble'
                                | transloco
                                    : {
                                          payUsd: '$' + data.promotion!.purchaseUsdAmount,
                                          receivedUsd: '$' + data.promotion!.purchaseUsdAmount * 2,
                                      }
                        }}
                    </p>
                </div>
            </section>

            <!-- Payment Method Summary -->
            <section *ngIf="data?.card" class="flex flex-col gap-3">
                <label class="text-sm font-semibold text-stone-950 dark:text-white">
                    {{ 'addCredits.purchaseDialog.paymentMethod' | transloco }}
                </label>

                <div
                    class="flex flex-wrap items-center gap-3 rounded-xl border border-stone-200 px-4 py-3 dark:border-gray-700"
                >
                    <div
                        class="flex h-10 w-[4.75rem] shrink-0 items-center justify-center rounded-md border border-stone-200 bg-white px-2 dark:border-gray-600 dark:bg-gray-950"
                    >
                        <img
                            [src]="getCardLogo(data.card.brand)"
                            [alt]="data.card.brand"
                            class="max-h-[1.125rem] w-auto max-w-full object-contain"
                        />
                    </div>

                    <div class="min-w-0 flex-1">
                        <span class="truncate font-medium tabular-nums text-stone-900 dark:text-stone-100">
                            \u2022\u2022\u2022\u2022 {{ data.card.lastFour }}
                        </span>
                    </div>

                    <span
                        *ngIf="data.card.isDefault"
                        class="shrink-0 rounded-md bg-emerald-50 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400"
                        >{{ 'addCredits.paymentMethods.cardDefault' | transloco }}</span
                    >
                </div>
            </section>
        </mat-dialog-content>

        <div class="flex flex-col-reverse gap-2 border-t border-stone-200/90 px-5 py-4 dark:border-gray-800 sm:flex-row sm:justify-end sm:gap-3 md:px-6">
            <button
                mat-stroked-button
                type="button"
                class="!min-h-11 w-full !rounded-xl !border-stone-200 !font-medium sm:w-auto dark:!border-gray-700"
                (click)="close()"
                [disabled]="loading"
            >
                {{ 'addCredits.purchaseDialog.cancel' | transloco }}
            </button>
            <button
                mat-flat-button
                color="primary"
                type="button"
                class="flex !min-h-11 w-full shrink-0 items-center justify-center gap-2 !rounded-xl px-5 sm:w-auto"
                (click)="purchase()"
                [disabled]="loading || !selectedCardId || !isValidAmount()"
            >
                <mat-spinner *ngIf="loading" diameter="20" class="inline-block"></mat-spinner>
                <ng-container *ngIf="!loading">
                    <span>{{ 'chat.payment.payBtn' | transloco }}</span>
                    <span class="rounded bg-white/20 px-2 py-0.5 text-sm">\${{ selectedAmount }}</span>
                </ng-container>
                <span *ngIf="loading">{{ 'addCredits.purchaseDialog.purchasing' | transloco }}</span>
            </button>
        </div>
    </ng-container>

    <!-- KYC Required State -->
    <div *ngIf="kycRequired" class="flex flex-col items-center px-6 py-10 text-center md:py-12">
        <div
            class="mb-6 flex h-[5.25rem] w-[5.25rem] items-center justify-center rounded-full bg-stone-100 ring-[12px] ring-stone-100/70 dark:bg-gray-800 dark:ring-gray-900/70"
        >
            <mat-icon class="text-stone-600 dark:text-stone-300" style="width: 48px; height: 48px; font-size: 48px"
                >verified_user</mat-icon
            >
        </div>

        <div class="mx-auto flex max-w-sm flex-col items-center gap-4">
            <h3 class="text-lg font-semibold tracking-tight text-stone-950 dark:text-white">
                {{ 'addCredits.purchaseDialog.kyc.title' | transloco }}
            </h3>
            <p class="text-sm leading-6 text-stone-600 dark:text-stone-400">
                {{ 'addCredits.purchaseDialog.kyc.description' | transloco }}
            </p>

            <button
                mat-flat-button
                color="primary"
                type="button"
                class="!mt-1 w-full !min-h-11 !rounded-xl !px-5"
                (click)="startKyc()"
                [disabled]="loading"
            >
                <mat-spinner *ngIf="loading" diameter="24" class="inline-block"></mat-spinner>
                <span *ngIf="!loading">{{ 'addCredits.purchaseDialog.kyc.startKyc' | transloco }}</span>
            </button>

            <button
                mat-button
                type="button"
                class="!min-h-10 !rounded-xl text-sm font-medium text-stone-600 dark:text-stone-400"
                (click)="close()"
                [disabled]="loading"
            >
                {{ 'addCredits.purchaseDialog.kyc.close' | transloco }}
            </button>
        </div>
    </div>
</div>
`, styles: ["/* src/app/modules/add-credits/purchase-credits-dialog/purchase-credits-dialog.component.scss */\n.purchase-credits-dialog-panel.cdk-overlay-pane {\n  max-width: min(500px, 92vw);\n}\n.purchase-credits-dialog-panel .mat-mdc-dialog-container {\n  padding: 0 !important;\n  overflow: hidden;\n  border-radius: 1rem;\n}\n.purchase-credits-dialog-panel .mat-mdc-dialog-surface {\n  border-radius: 1rem !important;\n  overflow: hidden;\n  background: transparent !important;\n  box-shadow: 0 4px 6px -1px rgba(15, 23, 42, 0.08), 0 2px 4px -2px rgba(15, 23, 42, 0.08);\n}\n.mat-mdc-raised-button mat-spinner,\n.mat-mdc-raised-button mat-progress-spinner,\n.mat-mdc-unelevated-button mat-spinner,\n.mat-mdc-unelevated-button mat-progress-spinner,\n.mat-mdc-outlined-button mat-spinner,\n.mat-mdc-outlined-button mat-progress-spinner,\n.mat-mdc-button mat-spinner,\n.mat-mdc-button mat-progress-spinner {\n  display: inline-block;\n  vertical-align: middle;\n}\n/*# sourceMappingURL=purchase-credits-dialog.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PurchaseCreditsDialogComponent, { className: "PurchaseCreditsDialogComponent", filePath: "src/app/modules/add-credits/purchase-credits-dialog/purchase-credits-dialog.component.ts", lineNumber: 51 });
})();

// src/app/modules/add-credits/add-credits.component.ts
var _c03 = () => ["/subscription-plans"];
var _c12 = (a0) => ({ expiresAt: a0 });
var _c2 = (a0) => ({ amountUsd: a0 });
var _c3 = (a0) => ({ "grid-template-columns": a0 });
function AddCreditsComponent_ng_container_0_section_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 49)(1, "div", 50)(2, "div", 51)(3, "div", 52)(4, "mat-icon", 53);
    \u0275\u0275text(5, "verified");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 54)(7, "p", 55);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "h2", 56);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 57);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p", 58);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p", 59);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "date");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_7_0;
    const t_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", t_r3("addCredits.promo.weekOneUsd50.badge"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r3("addCredits.promo.weekOneUsd50.title"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r3("addCredits.promo.weekOneUsd50.body"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r3("addCredits.promo.weekOneUsd50.accountCreatedNotice"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r3("addCredits.promo.weekOneUsd50.deadline", \u0275\u0275pureFunction1(8, _c12, \u0275\u0275pipeBind2(17, 5, (tmp_7_0 = ctx_r1.weekOneUsd50Promotion()) == null ? null : tmp_7_0.expiresAt, "medium") || "")), " ");
  }
}
function AddCreditsComponent_ng_container_0_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60)(1, "mat-icon", 61);
    \u0275\u0275text(2, "campaign");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 62);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const t_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r3("addCredits.promo.weekOneUsd50.walletStrip", \u0275\u0275pureFunction1(1, _c2, "$" + ((tmp_3_0 = (tmp_3_0 = ctx_r1.weekOneUsd50Promotion()) == null ? null : tmp_3_0.purchaseUsdAmount) !== null && tmp_3_0 !== void 0 ? tmp_3_0 : 50))), " ");
  }
}
function AddCreditsComponent_ng_container_0_div_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275element(1, "mat-spinner", 64);
    \u0275\u0275elementStart(2, "p", 65);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r3("addCredits.paymentMethods.manage"), "... ");
  }
}
function AddCreditsComponent_ng_container_0_div_61_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 66)(1, "mat-icon", 67);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 68);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 69);
    \u0275\u0275listener("click", function AddCreditsComponent_ng_container_0_div_61_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.loadData());
    });
    \u0275\u0275elementStart(6, "mat-icon", 35);
    \u0275\u0275text(7, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.error());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(t_r3("settings.profile.save_error"));
  }
}
function AddCreditsComponent_ng_container_0_div_62_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 70)(1, "div", 71)(2, "mat-icon");
    \u0275\u0275text(3, "credit_card_off");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "h3", 72);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 73);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 74);
    \u0275\u0275listener("click", function AddCreditsComponent_ng_container_0_div_62_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openAddCardDialog());
    });
    \u0275\u0275elementStart(9, "mat-icon", 35);
    \u0275\u0275text(10, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(t_r3("addCredits.noCards"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("addCredits.noCardsDesc"));
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.loading() || !ctx_r1.billingActionsAllowed());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r3("addCredits.addCard"));
  }
}
function AddCreditsComponent_ng_container_0_div_63_app_payment_card_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-payment-card", 77);
    \u0275\u0275listener("setDefault", function AddCreditsComponent_ng_container_0_div_63_app_payment_card_1_Template_app_payment_card_setDefault_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onCardSetDefault($event));
    })("delete", function AddCreditsComponent_ng_container_0_div_63_app_payment_card_1_Template_app_payment_card_delete_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onCardDeleted($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const card_r7 = ctx.$implicit;
    \u0275\u0275property("card", card_r7)("isDefault", card_r7.isDefault);
  }
}
function AddCreditsComponent_ng_container_0_div_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75);
    \u0275\u0275template(1, AddCreditsComponent_ng_container_0_div_63_app_payment_card_1_Template, 1, 2, "app-payment-card", 76);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.cards());
  }
}
function AddCreditsComponent_ng_container_0_div_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 78)(1, "div", 79);
    \u0275\u0275element(2, "span", 80);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 81)(5, "div", 82)(6, "span", 83);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 84);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 82)(11, "span", 83);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p", 84);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_7_0;
    const t_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r3("addCredits.autoRecharge.status.active"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r3("addCredits.autoRecharge.dialog.balanceThreshold"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (tmp_5_0 = ctx_r1.autoRechargeConfig()) == null ? null : tmp_5_0.minThreshold, " credits ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r3("addCredits.autoRecharge.dialog.rechargeAmount"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (tmp_7_0 = ctx_r1.autoRechargeConfig()) == null ? null : tmp_7_0.minRecharge, " credits ");
  }
}
function AddCreditsComponent_ng_container_0_div_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 85)(1, "div", 86);
    \u0275\u0275element(2, "span", 87);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 88);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r3("addCredits.autoRecharge.status.inactive"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r3("addCredits.autoRecharge.description"), " ");
  }
}
function AddCreditsComponent_ng_container_0_div_91_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 89);
    \u0275\u0275element(1, "div", 90)(2, "div", 90)(3, "div", 90);
    \u0275\u0275elementEnd();
  }
}
function AddCreditsComponent_ng_container_0_div_92_div_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 97);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r3("addCredits.subscriptionPlans.bestValue"), " ");
  }
}
function AddCreditsComponent_ng_container_0_div_92_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 93);
    \u0275\u0275template(1, AddCreditsComponent_ng_container_0_div_92_div_1_span_1_Template, 2, 1, "span", 94);
    \u0275\u0275elementStart(2, "span", 95);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 96);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tier_r8 = ctx.$implicit;
    \u0275\u0275property("ngClass", tier_r8.isBestValue ? "!border-stone-950 dark:!border-white" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", tier_r8.isBestValue);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" $", \u0275\u0275pipeBind2(4, 4, tier_r8.plan.amount, "1.0-0"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", tier_r8.label, " ");
  }
}
function AddCreditsComponent_ng_container_0_div_92_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 91);
    \u0275\u0275template(1, AddCreditsComponent_ng_container_0_div_92_div_1_Template, 7, 7, "div", 92);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(3, _c3, "repeat(" + ctx_r1.sidebarPlanTiers().length + ", minmax(0, 1fr))"));
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.sidebarPlanTiers())("ngForTrackBy", ctx_r1.trackBySidebarTier);
  }
}
function AddCreditsComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "billing-required-dialog", 1);
    \u0275\u0275listener("goToBilling", function AddCreditsComponent_ng_container_0_Template_billing_required_dialog_goToBilling_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToBillingDetails());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 2)(3, "header", 3)(4, "div", 4)(5, "div", 5)(6, "a", 6);
    \u0275\u0275text(7, " Verifik ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "mat-icon", 7);
    \u0275\u0275elementStart(9, "span", 8);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 9)(12, "div", 10)(13, "h1", 11);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p", 12);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "button", 13);
    \u0275\u0275listener("click", function AddCreditsComponent_ng_container_0_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openPurchaseCreditsDialog());
    });
    \u0275\u0275elementStart(18, "span");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275template(20, AddCreditsComponent_ng_container_0_section_20_Template, 18, 10, "section", 14);
    \u0275\u0275elementStart(21, "main", 15)(22, "div", 16)(23, "section", 17)(24, "div", 18);
    \u0275\u0275template(25, AddCreditsComponent_ng_container_0_div_25_Template, 5, 3, "div", 19);
    \u0275\u0275elementStart(26, "div", 20)(27, "div", 21)(28, "div", 22)(29, "mat-icon");
    \u0275\u0275text(30, "account_balance_wallet");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div")(32, "p", 23);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 24)(35, "span", 25);
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "span", 26);
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "lowercase");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(41, "button", 27);
    \u0275\u0275listener("click", function AddCreditsComponent_ng_container_0_Template_button_click_41_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openPurchaseCreditsDialog());
    });
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(43, "div", 28)(44, "div", 29)(45, "div", 30)(46, "div", 31)(47, "mat-icon");
    \u0275\u0275text(48, "credit_card");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "div")(50, "h2", 32);
    \u0275\u0275text(51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "p", 33);
    \u0275\u0275text(53);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(54, "button", 34);
    \u0275\u0275listener("click", function AddCreditsComponent_ng_container_0_Template_button_click_54_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openAddCardDialog());
    });
    \u0275\u0275elementStart(55, "mat-icon", 35);
    \u0275\u0275text(56, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "span");
    \u0275\u0275text(58);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(59, "div", 36);
    \u0275\u0275template(60, AddCreditsComponent_ng_container_0_div_60_Template, 4, 1, "div", 37)(61, AddCreditsComponent_ng_container_0_div_61_Template, 10, 2, "div", 38)(62, AddCreditsComponent_ng_container_0_div_62_Template, 13, 4, "div", 39)(63, AddCreditsComponent_ng_container_0_div_63_Template, 2, 1, "div", 40);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(64, "aside", 17)(65, "div", 18)(66, "div", 30)(67, "div", 31)(68, "mat-icon");
    \u0275\u0275text(69, "autorenew");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(70, "div")(71, "h3", 32);
    \u0275\u0275text(72);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "p", 33);
    \u0275\u0275text(74);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(75, AddCreditsComponent_ng_container_0_div_75_Template, 15, 5, "div", 41)(76, AddCreditsComponent_ng_container_0_div_76_Template, 6, 2, "div", 42);
    \u0275\u0275elementStart(77, "button", 43);
    \u0275\u0275listener("click", function AddCreditsComponent_ng_container_0_Template_button_click_77_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openAutoRechargeSettings());
    });
    \u0275\u0275elementStart(78, "mat-icon", 35);
    \u0275\u0275text(79, "settings");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "span");
    \u0275\u0275text(81);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(82, "div", 18)(83, "div", 44)(84, "div", 31)(85, "mat-icon");
    \u0275\u0275text(86, "verified");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(87, "h3", 32);
    \u0275\u0275text(88);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(89, "p", 45);
    \u0275\u0275text(90);
    \u0275\u0275elementEnd();
    \u0275\u0275template(91, AddCreditsComponent_ng_container_0_div_91_Template, 4, 0, "div", 46)(92, AddCreditsComponent_ng_container_0_div_92_Template, 2, 5, "div", 47);
    \u0275\u0275elementStart(93, "button", 48)(94, "span");
    \u0275\u0275text(95);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(96, "mat-icon", 35);
    \u0275\u0275text(97, "arrow_forward");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_11_0;
    let tmp_25_0;
    let tmp_26_0;
    const t_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("isOpen", ctx_r1.showBillingRequiredModal);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(t_r3("addCredits.title"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r3("addCredits.hero.title"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r3("addCredits.hero.subtitle"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.loading() || !ctx_r1.billingActionsAllowed());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("addCredits.purchaseCredits"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showWeekOneUsd50PromoBanner());
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.showWeekOneUsd50PromoBanner());
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", t_r3("addCredits.availableCredits"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(37, 33, ((tmp_11_0 = ctx_r1.balance()) == null ? null : tmp_11_0.totalCredits) || 0, "1.2-2"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(40, 36, t_r3("userMenu.credits")), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.loading() || !ctx_r1.billingActionsAllowed());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r3("addCredits.purchaseCredits"), " ");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" ", t_r3("addCredits.paymentMethods.title"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r3("addCredits.paymentMethods.manage"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.loading() || !ctx_r1.billingActionsAllowed());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r3("addCredits.addCard"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.loading());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.error() && !ctx_r1.loading());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loading() && !ctx_r1.error() && !ctx_r1.hasCards());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loading() && !ctx_r1.error() && ctx_r1.hasCards());
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" ", t_r3("addCredits.autoRecharge.title"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r3("addCredits.autoRecharge.subtitle"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_25_0 = ctx_r1.autoRechargeConfig()) == null ? null : tmp_25_0.hasAutoCharge);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !((tmp_26_0 = ctx_r1.autoRechargeConfig()) == null ? null : tmp_26_0.hasAutoCharge));
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.loading());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r3("addCredits.autoRecharge.configure"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", t_r3("addCredits.subscriptionPlans.title"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r3("addCredits.subscriptionPlans.description"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.pricingPlansLoading());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.pricingPlansLoading() && ctx_r1.sidebarPlanTiers().length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(38, _c03));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("addCredits.subscriptionPlans.viewAllPlans"));
  }
}
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
    this.showWeekOneUsd50PromoBanner = computed(() => Boolean(this.weekOneUsd50Promotion()?.eligible));
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
    this._loadBillingGateForAddCredits();
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
        const promo = result.session?.promotion;
        this.weekOneUsd50Promotion.set(promo?.kind === "smart_agent_week1_usd50" ? promo : void 0);
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
    if (currentCards.length === 0) {
      this.openAddCardDialog();
      return;
    }
    const cardToUse = this.defaultCard() || currentCards[0];
    const dialogRef = this._dialog.open(PurchaseCreditsDialogComponent, {
      width: "500px",
      maxWidth: "92vw",
      panelClass: "purchase-credits-dialog-panel",
      data: {
        card: cardToUse,
        promotion: this.weekOneUsd50Promotion()
      }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result === "success") {
        this._authService.refreshSession().subscribe(() => {
          this._creditsService.getBalance().subscribe();
        });
      }
    });
  }
  openAutoRechargeSettings() {
    const dialogRef = this._dialog.open(AutoRechargeSettingsComponent, {
      width: "600px",
      maxWidth: "90vw",
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddCreditsComponent, selectors: [["add-credits"]], decls: 1, vars: 0, consts: [[4, "transloco"], [3, "goToBilling", "isOpen"], [1, "add-credits-container", "flex", "min-h-screen", "min-w-0", "flex-auto", "flex-col", "bg-stone-50", "dark:bg-gray-950"], [1, "border-b", "border-stone-200/90", "bg-white/90", "px-5", "py-6", "backdrop-blur-sm", "dark:border-gray-800", "dark:bg-gray-950/90", "md:px-8", "md:py-8"], [1, "mx-auto", "flex", "w-full", "max-w-7xl", "flex-col", "gap-5"], [1, "flex", "flex-wrap", "items-center", "text-xs", "font-medium", "leading-none", "text-stone-500", "dark:text-stone-400"], ["routerLink", "/home", 1, "cursor-pointer", "text-stone-700", "underline-offset-4", "hover:underline", "dark:text-stone-300"], ["svgIcon", "heroicons_solid:chevron-right", 1, "icon-size-4", "mx-2", "text-stone-400"], [1, "cursor-default", "text-stone-600", "dark:text-stone-300"], [1, "flex", "flex-col", "gap-4", "lg:flex-row", "lg:items-end", "lg:justify-between"], [1, "max-w-2xl"], [1, "text-2xl", "font-semibold", "tracking-tight", "text-stone-950", "dark:text-white", "md:text-3xl"], [1, "mt-2", "text-sm", "leading-6", "text-stone-500", "dark:text-stone-400", "md:text-base"], ["mat-flat-button", "", "color", "primary", "type", "button", 1, "min-h-11", "shrink-0", "rounded-xl", "px-5", 3, "click", "disabled"], ["class", "border-b border-emerald-200/80 bg-gradient-to-br from-emerald-50 via-white to-teal-50/80 px-5 py-6 dark:border-emerald-900/60 dark:from-emerald-950/50 dark:via-gray-950 dark:to-gray-950 md:px-8", 4, "ngIf"], [1, "flex", "flex-auto", "flex-col", "px-5", "py-8", "md:px-8", "md:py-10"], [1, "mx-auto", "grid", "w-full", "max-w-7xl", "grid-cols-1", "gap-6", "xl:grid-cols-[minmax(0,1fr)_minmax(360px,420px)]"], [1, "flex", "flex-col", "gap-6"], [1, "rounded-2xl", "border", "border-stone-200/90", "bg-white", "p-5", "shadow-sm", "dark:border-gray-800", "dark:bg-gray-900/70", "md:p-6"], ["class", "mb-5 flex gap-3 rounded-xl border border-emerald-200/90 bg-emerald-50/90 px-4 py-3 text-sm dark:border-emerald-800 dark:bg-emerald-950/30", 4, "ngIf"], [1, "flex", "flex-col", "gap-5", "sm:flex-row", "sm:items-center", "sm:justify-between"], [1, "flex", "items-center", "gap-4"], [1, "flex", "h-11", "w-11", "shrink-0", "items-center", "justify-center", "rounded-xl", "border", "border-stone-200", "bg-stone-50", "text-stone-700", "dark:border-gray-800", "dark:bg-gray-950", "dark:text-stone-200"], [1, "text-xs", "font-medium", "uppercase", "tracking-[0.18em]", "text-stone-400", "dark:text-stone-500"], [1, "mt-1", "flex", "flex-wrap", "items-baseline", "gap-2"], [1, "text-3xl", "font-semibold", "tracking-tight", "text-stone-950", "dark:text-white"], [1, "text-sm", "text-stone-500", "dark:text-stone-400"], ["type", "button", 1, "inline-flex", "min-h-10", "items-center", "justify-center", "rounded-xl", "border", "border-stone-200", "px-4", "text-sm", "font-medium", "text-stone-800", "transition", "hover:bg-stone-50", "disabled:cursor-not-allowed", "disabled:opacity-60", "dark:border-gray-700", "dark:text-stone-100", "dark:hover:bg-gray-800", 3, "click", "disabled"], [1, "rounded-2xl", "border", "border-stone-200/90", "bg-white", "shadow-sm", "dark:border-gray-800", "dark:bg-gray-900/70"], [1, "flex", "flex-col", "gap-4", "border-b", "border-stone-200/80", "p-5", "dark:border-gray-800", "md:flex-row", "md:items-center", "md:justify-between", "md:p-6"], [1, "flex", "items-start", "gap-3"], [1, "flex", "h-10", "w-10", "shrink-0", "items-center", "justify-center", "rounded-xl", "border", "border-stone-200", "bg-stone-50", "text-stone-700", "dark:border-gray-800", "dark:bg-gray-950", "dark:text-stone-200"], [1, "text-base", "font-semibold", "text-stone-950", "dark:text-white"], [1, "mt-1", "text-sm", "text-stone-500", "dark:text-stone-400"], ["type", "button", 1, "inline-flex", "min-h-10", "items-center", "justify-center", "gap-2", "rounded-xl", "border", "border-stone-200", "px-4", "text-sm", "font-medium", "text-stone-800", "transition", "hover:bg-stone-50", "disabled:cursor-not-allowed", "disabled:opacity-60", "dark:border-gray-700", "dark:text-stone-100", "dark:hover:bg-gray-800", 3, "click", "disabled"], [1, "!h-4", "!w-4", "!text-base"], [1, "p-5", "md:p-6"], ["class", "flex flex-col items-center justify-center rounded-xl border border-dashed border-stone-200 py-14 text-center dark:border-gray-800", 4, "ngIf"], ["class", "flex flex-col items-center justify-center rounded-xl border border-red-200 bg-red-50 px-5 py-12 text-center dark:border-red-900/60 dark:bg-red-950/20", 4, "ngIf"], ["class", "flex flex-col items-center justify-center rounded-xl border border-dashed border-stone-200 px-5 py-14 text-center dark:border-gray-800", 4, "ngIf"], ["class", "flex flex-col gap-3", 4, "ngIf"], ["class", "mt-5 space-y-4", 4, "ngIf"], ["class", "mt-5", 4, "ngIf"], ["type", "button", 1, "mt-5", "inline-flex", "min-h-10", "w-full", "items-center", "justify-center", "gap-2", "rounded-xl", "border", "border-stone-200", "px-4", "text-sm", "font-medium", "text-stone-800", "transition", "hover:bg-stone-50", "disabled:cursor-not-allowed", "disabled:opacity-60", "dark:border-gray-700", "dark:text-stone-100", "dark:hover:bg-gray-800", 3, "click", "disabled"], [1, "flex", "items-center", "gap-3"], [1, "mt-4", "text-sm", "leading-6", "text-stone-500", "dark:text-stone-400"], ["class", "mt-5 grid grid-cols-3 gap-2", 4, "ngIf"], ["class", "mt-5 grid gap-2", 3, "ngStyle", 4, "ngIf"], ["type", "button", 1, "mt-5", "inline-flex", "min-h-10", "w-full", "items-center", "justify-center", "gap-2", "rounded-xl", "border", "border-stone-200", "px-4", "text-sm", "font-medium", "text-stone-800", "transition", "hover:bg-stone-50", "dark:border-gray-700", "dark:text-stone-100", "dark:hover:bg-gray-800", 3, "routerLink"], [1, "border-b", "border-emerald-200/80", "bg-gradient-to-br", "from-emerald-50", "via-white", "to-teal-50/80", "px-5", "py-6", "dark:border-emerald-900/60", "dark:from-emerald-950/50", "dark:via-gray-950", "dark:to-gray-950", "md:px-8"], [1, "mx-auto", "flex", "w-full", "max-w-7xl"], [1, "flex", "min-w-0", "flex-1", "items-start", "gap-4"], [1, "flex", "h-11", "w-11", "shrink-0", "items-center", "justify-center", "rounded-xl", "bg-emerald-600/15", "text-emerald-700", "dark:bg-emerald-400/15", "dark:text-emerald-300"], [2, "transform", "scale(1.08)"], [1, "min-w-0", "space-y-2"], [1, "inline-flex", "rounded-full", "border", "border-emerald-200/90", "bg-emerald-100", "px-3", "py-1", "text-[11px]", "font-semibold", "uppercase", "tracking-[0.2em]", "text-emerald-900", "dark:border-emerald-800", "dark:bg-emerald-900/50", "dark:text-emerald-200"], [1, "text-lg", "font-semibold", "leading-snug", "text-emerald-950", "dark:text-emerald-50"], [1, "max-w-3xl", "text-sm", "leading-relaxed", "text-emerald-950/95", "dark:text-emerald-100/95"], [1, "text-xs", "font-medium", "leading-relaxed", "text-emerald-900", "dark:text-emerald-200"], [1, "text-sm", "font-semibold", "text-emerald-950", "dark:text-emerald-50"], [1, "mb-5", "flex", "gap-3", "rounded-xl", "border", "border-emerald-200/90", "bg-emerald-50/90", "px-4", "py-3", "text-sm", "dark:border-emerald-800", "dark:bg-emerald-950/30"], [1, "mt-0.5", "shrink-0", "text-emerald-700", "dark:text-emerald-400"], [1, "m-0", "flex-1", "leading-relaxed", "text-emerald-950", "dark:text-emerald-100"], [1, "flex", "flex-col", "items-center", "justify-center", "rounded-xl", "border", "border-dashed", "border-stone-200", "py-14", "text-center", "dark:border-gray-800"], ["diameter", "40"], [1, "mt-4", "text-sm", "text-stone-500", "dark:text-stone-400"], [1, "flex", "flex-col", "items-center", "justify-center", "rounded-xl", "border", "border-red-200", "bg-red-50", "px-5", "py-12", "text-center", "dark:border-red-900/60", "dark:bg-red-950/20"], [1, "text-red-500"], [1, "mt-3", "text-sm", "text-red-700", "dark:text-red-300"], ["type", "button", 1, "mt-5", "inline-flex", "min-h-10", "items-center", "justify-center", "gap-2", "rounded-xl", "border", "border-red-200", "bg-white", "px-4", "text-sm", "font-medium", "text-red-700", "transition", "hover:bg-red-50", "dark:border-red-900/60", "dark:bg-red-950/40", "dark:text-red-200", 3, "click"], [1, "flex", "flex-col", "items-center", "justify-center", "rounded-xl", "border", "border-dashed", "border-stone-200", "px-5", "py-14", "text-center", "dark:border-gray-800"], [1, "flex", "h-12", "w-12", "items-center", "justify-center", "rounded-xl", "bg-stone-100", "text-stone-500", "dark:bg-gray-800", "dark:text-stone-300"], [1, "mt-4", "text-base", "font-semibold", "text-stone-950", "dark:text-white"], [1, "mt-1", "max-w-sm", "text-sm", "text-stone-500", "dark:text-stone-400"], ["type", "button", 1, "mt-5", "inline-flex", "min-h-10", "items-center", "justify-center", "gap-2", "rounded-xl", "bg-stone-950", "px-4", "text-sm", "font-medium", "text-white", "transition", "hover:bg-stone-800", "disabled:cursor-not-allowed", "disabled:opacity-60", "dark:bg-white", "dark:text-gray-950", "dark:hover:bg-stone-200", 3, "click", "disabled"], [1, "flex", "flex-col", "gap-3"], ["class", "block", 3, "card", "isDefault", "setDefault", "delete", 4, "ngFor", "ngForOf"], [1, "block", 3, "setDefault", "delete", "card", "isDefault"], [1, "mt-5", "space-y-4"], [1, "inline-flex", "items-center", "gap-2", "rounded-full", "border", "border-emerald-200", "bg-emerald-50", "px-3", "py-1", "text-xs", "font-medium", "text-emerald-700", "dark:border-emerald-900/70", "dark:bg-emerald-950/30", "dark:text-emerald-300"], [1, "h-1.5", "w-1.5", "rounded-full", "bg-emerald-500"], [1, "grid", "grid-cols-2", "gap-3"], [1, "rounded-xl", "border", "border-stone-200", "p-3", "dark:border-gray-800"], [1, "text-xs", "text-stone-500", "dark:text-stone-400"], [1, "mt-1", "text-sm", "font-medium", "text-stone-950", "dark:text-white"], [1, "mt-5"], [1, "inline-flex", "items-center", "gap-2", "rounded-full", "border", "border-stone-200", "bg-stone-50", "px-3", "py-1", "text-xs", "font-medium", "text-stone-600", "dark:border-gray-800", "dark:bg-gray-950", "dark:text-stone-300"], [1, "h-1.5", "w-1.5", "rounded-full", "bg-stone-400"], [1, "mt-3", "text-sm", "leading-6", "text-stone-500", "dark:text-stone-400"], [1, "mt-5", "grid", "grid-cols-3", "gap-2"], [1, "h-20", "animate-pulse", "rounded-xl", "bg-stone-100", "dark:bg-gray-800"], [1, "mt-5", "grid", "gap-2", 3, "ngStyle"], ["class", "relative rounded-xl border border-stone-200 p-3 text-center dark:border-gray-800", 3, "ngClass", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "relative", "rounded-xl", "border", "border-stone-200", "p-3", "text-center", "dark:border-gray-800", 3, "ngClass"], ["class", "mb-2 inline-flex rounded-full bg-stone-950 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-white dark:bg-white dark:text-gray-950", 4, "ngIf"], [1, "block", "text-lg", "font-semibold", "text-stone-950", "dark:text-white"], [1, "mt-1", "block", "truncate", "text-xs", "text-stone-500", "dark:text-stone-400"], [1, "mb-2", "inline-flex", "rounded-full", "bg-stone-950", "px-2", "py-0.5", "text-[10px]", "font-medium", "uppercase", "tracking-wide", "text-white", "dark:bg-white", "dark:text-gray-950"]], template: function AddCreditsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, AddCreditsComponent_ng_container_0_Template, 98, 39, "ng-container", 0);
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
    ], styles: ["\n\n[_nghost-%COMP%] {\n  display: contents;\n}\n.add-credits-container[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.add-credits-container[_ngcontent-%COMP%]   app-payment-card[_ngcontent-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=add-credits.component.css.map */"] });
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
    ], template: `<ng-container *transloco="let t">
    <billing-required-dialog
        [isOpen]="showBillingRequiredModal"
        (goToBilling)="goToBillingDetails()"
    ></billing-required-dialog>

    <div class="add-credits-container flex min-h-screen min-w-0 flex-auto flex-col bg-stone-50 dark:bg-gray-950">
        <header class="border-b border-stone-200/90 bg-white/90 px-5 py-6 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-950/90 md:px-8 md:py-8">
            <div class="mx-auto flex w-full max-w-7xl flex-col gap-5">
                <div class="flex flex-wrap items-center text-xs font-medium leading-none text-stone-500 dark:text-stone-400">
                    <a routerLink="/home" class="cursor-pointer text-stone-700 underline-offset-4 hover:underline dark:text-stone-300">
                        Verifik
                    </a>
                    <mat-icon class="icon-size-4 mx-2 text-stone-400" svgIcon="heroicons_solid:chevron-right"></mat-icon>
                    <span class="cursor-default text-stone-600 dark:text-stone-300">{{ t('addCredits.title') }}</span>
                </div>

                <div class="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                    <div class="max-w-2xl">
                        <h1 class="text-2xl font-semibold tracking-tight text-stone-950 dark:text-white md:text-3xl">
                            {{ t('addCredits.hero.title') }}
                        </h1>
                        <p class="mt-2 text-sm leading-6 text-stone-500 dark:text-stone-400 md:text-base">
                            {{ t('addCredits.hero.subtitle') }}
                        </p>
                    </div>

                    <button
                        mat-flat-button
                        color="primary"
                        type="button"
                        class="min-h-11 shrink-0 rounded-xl px-5"
                        (click)="openPurchaseCreditsDialog()"
                        [disabled]="loading() || !billingActionsAllowed()"
                    >
                        <span>{{ t('addCredits.purchaseCredits') }}</span>
                    </button>
                </div>
            </div>
        </header>

        <section
            *ngIf="showWeekOneUsd50PromoBanner()"
            class="border-b border-emerald-200/80 bg-gradient-to-br from-emerald-50 via-white to-teal-50/80 px-5 py-6 dark:border-emerald-900/60 dark:from-emerald-950/50 dark:via-gray-950 dark:to-gray-950 md:px-8"
        >
            <div class="mx-auto flex w-full max-w-7xl">
                <div class="flex min-w-0 flex-1 items-start gap-4">
                    <div
                        class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-600/15 text-emerald-700 dark:bg-emerald-400/15 dark:text-emerald-300"
                    >
                        <mat-icon style="transform: scale(1.08)">verified</mat-icon>
                    </div>
                    <div class="min-w-0 space-y-2">
                        <p
                            class="inline-flex rounded-full border border-emerald-200/90 bg-emerald-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-900 dark:border-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-200"
                        >
                            {{ t('addCredits.promo.weekOneUsd50.badge') }}
                        </p>
                        <h2 class="text-lg font-semibold leading-snug text-emerald-950 dark:text-emerald-50">
                            {{ t('addCredits.promo.weekOneUsd50.title') }}
                        </h2>
                        <p class="max-w-3xl text-sm leading-relaxed text-emerald-950/95 dark:text-emerald-100/95">
                            {{ t('addCredits.promo.weekOneUsd50.body') }}
                        </p>
                        <p class="text-xs font-medium leading-relaxed text-emerald-900 dark:text-emerald-200">
                            {{ t('addCredits.promo.weekOneUsd50.accountCreatedNotice') }}
                        </p>
                        <p class="text-sm font-semibold text-emerald-950 dark:text-emerald-50">
                            {{
                                t('addCredits.promo.weekOneUsd50.deadline', {
                                    expiresAt:
                                        (weekOneUsd50Promotion()?.expiresAt | date : 'medium') || '',
                                })
                            }}
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <main class="flex flex-auto flex-col px-5 py-8 md:px-8 md:py-10">
            <div class="mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1fr)_minmax(360px,420px)]">
                <section class="flex flex-col gap-6">
                    <div class="rounded-2xl border border-stone-200/90 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900/70 md:p-6">
                        <div
                            *ngIf="showWeekOneUsd50PromoBanner()"
                            class="mb-5 flex gap-3 rounded-xl border border-emerald-200/90 bg-emerald-50/90 px-4 py-3 text-sm dark:border-emerald-800 dark:bg-emerald-950/30"
                        >
                            <mat-icon class="mt-0.5 shrink-0 text-emerald-700 dark:text-emerald-400"
                                >campaign</mat-icon
                            >
                            <p class="m-0 flex-1 leading-relaxed text-emerald-950 dark:text-emerald-100">
                                {{
                                    t('addCredits.promo.weekOneUsd50.walletStrip', {
                                        amountUsd: '$' + (weekOneUsd50Promotion()?.purchaseUsdAmount ?? 50),
                                    })
                                }}
                            </p>
                        </div>
                        <div class="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                            <div class="flex items-center gap-4">
                                <div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-stone-200 bg-stone-50 text-stone-700 dark:border-gray-800 dark:bg-gray-950 dark:text-stone-200">
                                    <mat-icon>account_balance_wallet</mat-icon>
                                </div>
                                <div>
                                    <p class="text-xs font-medium uppercase tracking-[0.18em] text-stone-400 dark:text-stone-500">
                                        {{ t('addCredits.availableCredits') }}
                                    </p>
                                    <div class="mt-1 flex flex-wrap items-baseline gap-2">
                                        <span class="text-3xl font-semibold tracking-tight text-stone-950 dark:text-white">
                                            {{ balance()?.totalCredits || 0 | number: '1.2-2' }}
                                        </span>
                                        <span class="text-sm text-stone-500 dark:text-stone-400">
                                            {{ t('userMenu.credits') | lowercase }}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <button
                                type="button"
                                class="inline-flex min-h-10 items-center justify-center rounded-xl border border-stone-200 px-4 text-sm font-medium text-stone-800 transition hover:bg-stone-50 disabled:cursor-not-allowed disabled:opacity-60 dark:border-gray-700 dark:text-stone-100 dark:hover:bg-gray-800"
                                (click)="openPurchaseCreditsDialog()"
                                [disabled]="loading() || !billingActionsAllowed()"
                            >
                                {{ t('addCredits.purchaseCredits') }}
                            </button>
                        </div>
                    </div>

                    <div class="rounded-2xl border border-stone-200/90 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900/70">
                        <div class="flex flex-col gap-4 border-b border-stone-200/80 p-5 dark:border-gray-800 md:flex-row md:items-center md:justify-between md:p-6">
                            <div class="flex items-start gap-3">
                                <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-stone-200 bg-stone-50 text-stone-700 dark:border-gray-800 dark:bg-gray-950 dark:text-stone-200">
                                    <mat-icon>credit_card</mat-icon>
                                </div>
                                <div>
                                    <h2 class="text-base font-semibold text-stone-950 dark:text-white">
                                        {{ t('addCredits.paymentMethods.title') }}
                                    </h2>
                                    <p class="mt-1 text-sm text-stone-500 dark:text-stone-400">
                                        {{ t('addCredits.paymentMethods.manage') }}
                                    </p>
                                </div>
                            </div>

                            <button
                                type="button"
                                class="inline-flex min-h-10 items-center justify-center gap-2 rounded-xl border border-stone-200 px-4 text-sm font-medium text-stone-800 transition hover:bg-stone-50 disabled:cursor-not-allowed disabled:opacity-60 dark:border-gray-700 dark:text-stone-100 dark:hover:bg-gray-800"
                                (click)="openAddCardDialog()"
                                [disabled]="loading() || !billingActionsAllowed()"
                            >
                                <mat-icon class="!h-4 !w-4 !text-base">add</mat-icon>
                                <span>{{ t('addCredits.addCard') }}</span>
                            </button>
                        </div>

                        <div class="p-5 md:p-6">
                            <div *ngIf="loading()" class="flex flex-col items-center justify-center rounded-xl border border-dashed border-stone-200 py-14 text-center dark:border-gray-800">
                                <mat-spinner diameter="40"></mat-spinner>
                                <p class="mt-4 text-sm text-stone-500 dark:text-stone-400">
                                    {{ t('addCredits.paymentMethods.manage') }}...
                                </p>
                            </div>

                            <div *ngIf="error() && !loading()" class="flex flex-col items-center justify-center rounded-xl border border-red-200 bg-red-50 px-5 py-12 text-center dark:border-red-900/60 dark:bg-red-950/20">
                                <mat-icon class="text-red-500">error_outline</mat-icon>
                                <p class="mt-3 text-sm text-red-700 dark:text-red-300">{{ error() }}</p>
                                <button
                                    type="button"
                                    class="mt-5 inline-flex min-h-10 items-center justify-center gap-2 rounded-xl border border-red-200 bg-white px-4 text-sm font-medium text-red-700 transition hover:bg-red-50 dark:border-red-900/60 dark:bg-red-950/40 dark:text-red-200"
                                    (click)="loadData()"
                                >
                                    <mat-icon class="!h-4 !w-4 !text-base">refresh</mat-icon>
                                    <span>{{ t('settings.profile.save_error') }}</span>
                                </button>
                            </div>

                            <div *ngIf="!loading() && !error() && !hasCards()" class="flex flex-col items-center justify-center rounded-xl border border-dashed border-stone-200 px-5 py-14 text-center dark:border-gray-800">
                                <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-stone-100 text-stone-500 dark:bg-gray-800 dark:text-stone-300">
                                    <mat-icon>credit_card_off</mat-icon>
                                </div>
                                <h3 class="mt-4 text-base font-semibold text-stone-950 dark:text-white">{{ t('addCredits.noCards') }}</h3>
                                <p class="mt-1 max-w-sm text-sm text-stone-500 dark:text-stone-400">{{ t('addCredits.noCardsDesc') }}</p>
                                <button
                                    type="button"
                                    class="mt-5 inline-flex min-h-10 items-center justify-center gap-2 rounded-xl bg-stone-950 px-4 text-sm font-medium text-white transition hover:bg-stone-800 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-white dark:text-gray-950 dark:hover:bg-stone-200"
                                    (click)="openAddCardDialog()"
                                    [disabled]="loading() || !billingActionsAllowed()"
                                >
                                    <mat-icon class="!h-4 !w-4 !text-base">add</mat-icon>
                                    <span>{{ t('addCredits.addCard') }}</span>
                                </button>
                            </div>

                            <div *ngIf="!loading() && !error() && hasCards()" class="flex flex-col gap-3">
                                <app-payment-card
                                    *ngFor="let card of cards(); let i = index"
                                    [card]="card"
                                    [isDefault]="card.isDefault"
                                    (setDefault)="onCardSetDefault($event)"
                                    (delete)="onCardDeleted($event)"
                                    class="block"
                                ></app-payment-card>
                            </div>
                        </div>
                    </div>
                </section>

                <aside class="flex flex-col gap-6">
                    <div class="rounded-2xl border border-stone-200/90 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900/70 md:p-6">
                        <div class="flex items-start gap-3">
                            <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-stone-200 bg-stone-50 text-stone-700 dark:border-gray-800 dark:bg-gray-950 dark:text-stone-200">
                                <mat-icon>autorenew</mat-icon>
                            </div>
                            <div>
                                <h3 class="text-base font-semibold text-stone-950 dark:text-white">
                                    {{ t('addCredits.autoRecharge.title') }}
                                </h3>
                                <p class="mt-1 text-sm text-stone-500 dark:text-stone-400">
                                    {{ t('addCredits.autoRecharge.subtitle') }}
                                </p>
                            </div>
                        </div>

                        <div *ngIf="autoRechargeConfig()?.hasAutoCharge" class="mt-5 space-y-4">
                            <div class="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 dark:border-emerald-900/70 dark:bg-emerald-950/30 dark:text-emerald-300">
                                <span class="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                                {{ t('addCredits.autoRecharge.status.active') }}
                            </div>
                            <div class="grid grid-cols-2 gap-3">
                                <div class="rounded-xl border border-stone-200 p-3 dark:border-gray-800">
                                    <span class="text-xs text-stone-500 dark:text-stone-400">
                                        {{ t('addCredits.autoRecharge.dialog.balanceThreshold') }}
                                    </span>
                                    <p class="mt-1 text-sm font-medium text-stone-950 dark:text-white">
                                        {{ autoRechargeConfig()?.minThreshold }} credits
                                    </p>
                                </div>
                                <div class="rounded-xl border border-stone-200 p-3 dark:border-gray-800">
                                    <span class="text-xs text-stone-500 dark:text-stone-400">
                                        {{ t('addCredits.autoRecharge.dialog.rechargeAmount') }}
                                    </span>
                                    <p class="mt-1 text-sm font-medium text-stone-950 dark:text-white">
                                        {{ autoRechargeConfig()?.minRecharge }} credits
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div *ngIf="!autoRechargeConfig()?.hasAutoCharge" class="mt-5">
                            <div class="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-xs font-medium text-stone-600 dark:border-gray-800 dark:bg-gray-950 dark:text-stone-300">
                                <span class="h-1.5 w-1.5 rounded-full bg-stone-400"></span>
                                {{ t('addCredits.autoRecharge.status.inactive') }}
                            </div>
                            <p class="mt-3 text-sm leading-6 text-stone-500 dark:text-stone-400">
                                {{ t('addCredits.autoRecharge.description') }}
                            </p>
                        </div>

                        <button
                            type="button"
                            class="mt-5 inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-xl border border-stone-200 px-4 text-sm font-medium text-stone-800 transition hover:bg-stone-50 disabled:cursor-not-allowed disabled:opacity-60 dark:border-gray-700 dark:text-stone-100 dark:hover:bg-gray-800"
                            (click)="openAutoRechargeSettings()"
                            [disabled]="loading()"
                        >
                            <mat-icon class="!h-4 !w-4 !text-base">settings</mat-icon>
                            <span>{{ t('addCredits.autoRecharge.configure') }}</span>
                        </button>
                    </div>

                    <div class="rounded-2xl border border-stone-200/90 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900/70 md:p-6">
                        <div class="flex items-center gap-3">
                            <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-stone-200 bg-stone-50 text-stone-700 dark:border-gray-800 dark:bg-gray-950 dark:text-stone-200">
                                <mat-icon>verified</mat-icon>
                            </div>
                            <h3 class="text-base font-semibold text-stone-950 dark:text-white">
                                {{ t('addCredits.subscriptionPlans.title') }}
                            </h3>
                        </div>

                        <p class="mt-4 text-sm leading-6 text-stone-500 dark:text-stone-400">
                            {{ t('addCredits.subscriptionPlans.description') }}
                        </p>

                        <div class="mt-5 grid grid-cols-3 gap-2" *ngIf="pricingPlansLoading()">
                            <div class="h-20 animate-pulse rounded-xl bg-stone-100 dark:bg-gray-800"></div>
                            <div class="h-20 animate-pulse rounded-xl bg-stone-100 dark:bg-gray-800"></div>
                            <div class="h-20 animate-pulse rounded-xl bg-stone-100 dark:bg-gray-800"></div>
                        </div>

                        <div
                            class="mt-5 grid gap-2"
                            *ngIf="!pricingPlansLoading() && sidebarPlanTiers().length > 0"
                            [ngStyle]="{
                                'grid-template-columns':
                                    'repeat(' + sidebarPlanTiers().length + ', minmax(0, 1fr))',
                            }"
                        >
                            <div
                                class="relative rounded-xl border border-stone-200 p-3 text-center dark:border-gray-800"
                                *ngFor="let tier of sidebarPlanTiers(); trackBy: trackBySidebarTier"
                                [ngClass]="tier.isBestValue ? '!border-stone-950 dark:!border-white' : ''"
                            >
                                <span
                                    class="mb-2 inline-flex rounded-full bg-stone-950 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-white dark:bg-white dark:text-gray-950"
                                    *ngIf="tier.isBestValue"
                                >
                                    {{ t('addCredits.subscriptionPlans.bestValue') }}
                                </span>
                                <span class="block text-lg font-semibold text-stone-950 dark:text-white">
                                    \${{ tier.plan.amount | number: '1.0-0' }}
                                </span>
                                <span class="mt-1 block truncate text-xs text-stone-500 dark:text-stone-400">
                                    {{ tier.label }}
                                </span>
                            </div>
                        </div>

                        <button
                            type="button"
                            class="mt-5 inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-xl border border-stone-200 px-4 text-sm font-medium text-stone-800 transition hover:bg-stone-50 dark:border-gray-700 dark:text-stone-100 dark:hover:bg-gray-800"
                            [routerLink]="['/subscription-plans']"
                        >
                            <span>{{ t('addCredits.subscriptionPlans.viewAllPlans') }}</span>
                            <mat-icon class="!h-4 !w-4 !text-base">arrow_forward</mat-icon>
                        </button>
                    </div>
                </aside>
            </div>
        </main>
    </div>
</ng-container>
`, styles: ["/* src/app/modules/add-credits/add-credits.component.scss */\n:host {\n  display: contents;\n}\n.add-credits-container mat-icon {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.add-credits-container app-payment-card {\n  display: block;\n}\n/*# sourceMappingURL=add-credits.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddCreditsComponent, { className: "AddCreditsComponent", filePath: "src/app/modules/add-credits/add-credits.component.ts", lineNumber: 51 });
})();
export {
  AddCreditsComponent
};
//# sourceMappingURL=chunk-5TDHESLD.js.map
