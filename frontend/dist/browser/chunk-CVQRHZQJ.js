import {
  AuthModalComponent
} from "./chunk-3W2P7LZN.js";
import "./chunk-GFJLSNKF.js";
import {
  AuthService
} from "./chunk-E7LVUBZB.js";
import {
  SubscriptionService
} from "./chunk-6NBYN6EP.js";
import {
  UserService
} from "./chunk-ZWSCRV34.js";
import "./chunk-LPSMXQSY.js";
import "./chunk-MJXNRHWH.js";
import "./chunk-346ISJSG.js";
import "./chunk-HZKTYM3F.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-EL6Z63TT.js";
import {
  DateTime
} from "./chunk-BAVSUFW7.js";
import "./chunk-H3UX3NVF.js";
import {
  MatTooltipModule
} from "./chunk-6KHU2J3U.js";
import "./chunk-OVR3OJIF.js";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogContent,
  MatDialogModule,
  MatDialogRef
} from "./chunk-KCV7S453.js";
import "./chunk-Y5VEUI6L.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-LHOHCIQM.js";
import "./chunk-AY2HQ4EH.js";
import "./chunk-SYP4RNRN.js";
import "./chunk-3YVZWUPK.js";
import "./chunk-L4JZMXIC.js";
import "./chunk-2W5F3UIW.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgModel,
  NumberValueAccessor
} from "./chunk-TX3AVWPC.js";
import "./chunk-OIBNGD5S.js";
import {
  TranslocoModule,
  TranslocoPipe,
  TranslocoService
} from "./chunk-VHMFS3U6.js";
import "./chunk-R4RYJRMO.js";
import {
  environment
} from "./chunk-32YYYLAD.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-SE37W2G4.js";
import {
  CommonModule,
  Component,
  DecimalPipe,
  EventEmitter,
  HttpClient,
  Injectable,
  Input,
  LowerCasePipe,
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
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-YTOBX75K.js";
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
      origin: request.origin || "smart_agent"
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
function PurchaseCreditsDialogComponent_ng_container_1_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "mat-icon");
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
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
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275listener("click", function PurchaseCreditsDialogComponent_ng_container_1_button_15_Template_button_click_0_listener() {
      const amount_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectPresetAmount(amount_r4));
    });
    \u0275\u0275elementStart(1, "span", 23);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const amount_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selected", ctx_r1.selectedAmount === amount_r4 && !ctx_r1.isCustomAmount);
    \u0275\u0275property("disabled", ctx_r1.loading);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", amount_r4, "");
  }
}
function PurchaseCreditsDialogComponent_ng_container_1_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24)(1, "span", 25);
    \u0275\u0275text(2, "$");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 26);
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
function PurchaseCreditsDialogComponent_ng_container_1_div_28_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "addCredits.paymentMethods.cardDefault"));
  }
}
function PurchaseCreditsDialogComponent_ng_container_1_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "label", 9);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 28)(5, "div", 29)(6, "div", 30);
    \u0275\u0275element(7, "img", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 32)(9, "span", 33);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(11, PurchaseCreditsDialogComponent_ng_container_1_div_28_span_11_Template, 3, 3, "span", 34);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 5, "addCredits.purchaseDialog.paymentMethod"));
    \u0275\u0275advance(5);
    \u0275\u0275property("src", ctx_r1.getCardLogo(ctx_r1.data.card.brand), \u0275\u0275sanitizeUrl)("alt", ctx_r1.data.card.brand);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u2022\u2022\u2022\u2022 ", ctx_r1.data.card.lastFour, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.data.card.isDefault);
  }
}
function PurchaseCreditsDialogComponent_ng_container_1_mat_spinner_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 36);
  }
}
function PurchaseCreditsDialogComponent_ng_container_1_ng_container_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 37);
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
function PurchaseCreditsDialogComponent_ng_container_1_span_36_Template(rf, ctx) {
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
    \u0275\u0275elementStart(1, "div", 3)(2, "h2", 4);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 5);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "mat-dialog-content", 6);
    \u0275\u0275template(9, PurchaseCreditsDialogComponent_ng_container_1_div_9_Template, 5, 1, "div", 7);
    \u0275\u0275elementStart(10, "div", 8)(11, "label", 9);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 10);
    \u0275\u0275template(15, PurchaseCreditsDialogComponent_ng_container_1_button_15_Template, 3, 4, "button", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 12)(17, "button", 13);
    \u0275\u0275listener("click", function PurchaseCreditsDialogComponent_ng_container_1_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleCustomAmount());
    });
    \u0275\u0275elementStart(18, "mat-icon");
    \u0275\u0275text(19, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span");
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(23, PurchaseCreditsDialogComponent_ng_container_1_div_23_Template, 4, 4, "div", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "p", 15);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "transloco");
    \u0275\u0275pipe(27, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(28, PurchaseCreditsDialogComponent_ng_container_1_div_28_Template, 12, 7, "div", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 17)(30, "button", 18);
    \u0275\u0275listener("click", function PurchaseCreditsDialogComponent_ng_container_1_Template_button_click_30_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "button", 19);
    \u0275\u0275listener("click", function PurchaseCreditsDialogComponent_ng_container_1_Template_button_click_33_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.purchase());
    });
    \u0275\u0275template(34, PurchaseCreditsDialogComponent_ng_container_1_mat_spinner_34_Template, 1, 0, "mat-spinner", 20)(35, PurchaseCreditsDialogComponent_ng_container_1_ng_container_35_Template, 6, 4, "ng-container", 1)(36, PurchaseCreditsDialogComponent_ng_container_1_span_36_Template, 3, 3, "span", 1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 19, "addCredits.purchaseDialog.title"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 21, "addCredits.hero.subtitle"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.error);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 23, "addCredits.purchaseDialog.selectAmount"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.creditAmounts);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.isCustomAmount);
    \u0275\u0275property("disabled", ctx_r1.loading);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 25, "addCredits.purchaseDialog.customAmount"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.isCustomAmount);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(26, 27, "addCredits.purchaseDialog.minimum"), " \u2022 ", \u0275\u0275pipeBind1(27, 29, "addCredits.purchaseDialog.maximum"), " $2,000 ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.data == null ? null : ctx_r1.data.card);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(32, 31, "addCredits.purchaseDialog.cancel"), " ");
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
    \u0275\u0275element(0, "mat-spinner", 47);
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
    \u0275\u0275elementStart(0, "div", 38)(1, "div", 39)(2, "mat-icon", 40);
    \u0275\u0275text(3, "verified_user");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 41)(5, "h3", 42);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 43);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 44);
    \u0275\u0275listener("click", function PurchaseCreditsDialogComponent_div_2_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.startKyc());
    });
    \u0275\u0275template(12, PurchaseCreditsDialogComponent_div_2_mat_spinner_12_Template, 1, 0, "mat-spinner", 45)(13, PurchaseCreditsDialogComponent_div_2_span_13_Template, 3, 3, "span", 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 46);
    \u0275\u0275listener("click", function PurchaseCreditsDialogComponent_div_2_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275text(15, " Close ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 6, "addCredits.purchaseDialog.kyc.title"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 8, "addCredits.purchaseDialog.kyc.description"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.loading);
  }
}
var PURCHASE_ERROR_KEYS = {
  stripeNotConfigured: "addCredits.purchaseDialog.errors.stripeNotConfigured",
  payment3dsFailed: "addCredits.purchaseDialog.errors.payment3dsFailed",
  paymentFailedImmediate: "addCredits.purchaseDialog.errors.paymentFailedImmediate"
};
var PURCHASE_ERROR_FALLBACKS = {
  stripeNotConfigured: "Payment could not be completed. Card verification is not available. Please try again.",
  payment3dsFailed: "Card verification failed. Please try again or use another card.",
  paymentFailedImmediate: "Payment was declined. Please try another card or contact support."
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
        this.error = "Failed to start KYC verification. Please contact support.";
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
    const path = PURCHASE_ERROR_KEYS[key];
    const translated = this._transloco.translate(path);
    return translated === path ? PURCHASE_ERROR_FALLBACKS[key] : translated;
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
      this.error = "Please select a payment method";
      return;
    }
    if (!this.isValidAmount()) {
      this.error = `Amount must be between $${MIN_CREDIT_PURCHASE_USD} and $${MAX_CREDIT_PURCHASE_USD.toLocaleString("en-US")}`;
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
          this.error = "Failed to purchase credits";
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
          this.error = "Payment is pending verification. Credits will be added once payment is confirmed.";
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
          this.error = err.error?.message || "Failed to purchase credits";
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PurchaseCreditsDialogComponent, selectors: [["app-purchase-credits-dialog"]], decls: 3, vars: 2, consts: [[1, "purchase-credits-dialog"], [4, "ngIf"], ["class", "kyc-state-wrapper", 4, "ngIf"], [1, "dialog-header"], [1, "dialog-title"], [1, "dialog-subtitle"], [1, "p-0"], ["class", "error-message", 4, "ngIf"], [1, "section"], [1, "section-label"], [1, "amount-grid"], ["type", "button", "class", "amount-button", 3, "selected", "disabled", "click", 4, "ngFor", "ngForOf"], [1, "custom-amount-wrapper"], ["type", "button", 1, "custom-toggle", 3, "click", "disabled"], ["class", "custom-input-container", 4, "ngIf"], [1, "amount-hint"], ["class", "p-1", 4, "ngIf"], [1, "dialog-actions"], ["type", "button", 1, "cancel-button", 3, "click", "disabled"], ["type", "button", 1, "purchase-button", 3, "click", "disabled"], ["diameter", "20", 4, "ngIf"], [1, "error-message"], ["type", "button", 1, "amount-button", 3, "click", "disabled"], [1, "amount-value"], [1, "custom-input-container"], [1, "currency-symbol"], ["type", "number", "placeholder", "40", 1, "custom-input", 3, "ngModelChange", "ngModel", "min", "max", "disabled"], [1, "p-1"], [1, "payment-summary"], [1, "card-option", "selected", "read-only"], [1, "card-icon-wrapper"], [1, "brand-logo", 3, "src", "alt"], [1, "card-details"], [1, "card-number"], ["class", "default-badge", 4, "ngIf"], [1, "default-badge"], ["diameter", "20"], [1, "button-amount"], [1, "kyc-state-wrapper"], [1, "kyc-icon-wrapper"], [1, "kyc-icon"], [1, "kyc-content"], [1, "kyc-title"], [1, "kyc-description"], [1, "start-kyc-button", 3, "click", "disabled"], ["diameter", "24", 4, "ngIf"], [1, "cancel-button", "kyc-cancel", 3, "click", "disabled"], ["diameter", "24"]], template: function PurchaseCreditsDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, PurchaseCreditsDialogComponent_ng_container_1_Template, 37, 33, "ng-container", 1)(2, PurchaseCreditsDialogComponent_div_2_Template, 16, 10, "div", 2);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.kycRequired);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.kycRequired);
      }
    }, dependencies: [
      CommonModule,
      NgForOf,
      NgIf,
      FormsModule,
      DefaultValueAccessor,
      NumberValueAccessor,
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
    ], styles: ["/* src/app/modules/add-credits/purchase-credits-dialog/purchase-credits-dialog.component.scss */\n.purchase-credits-dialog {\n  padding: 12px;\n  background: #ffffff;\n  border-radius: 20px;\n  width: 100%;\n  max-width: 680px;\n  margin: 0 auto;\n}\n:host-context(.dark) .purchase-credits-dialog {\n  background: #1e293b;\n}\n.dialog-header {\n  text-align: left;\n  margin-bottom: 40px;\n}\n.dialog-title {\n  font-size: 28px;\n  font-weight: 800;\n  color: #0f172a;\n  margin-bottom: 8px;\n  letter-spacing: -0.02em;\n}\n:host-context(.dark) .dialog-title {\n  color: #ffffff;\n}\n.dialog-subtitle {\n  font-size: 15px;\n  color: #475569;\n}\n:host-context(.dark) .dialog-subtitle {\n  color: rgba(255, 255, 255, 0.7);\n}\n.section {\n  margin-bottom: 32px;\n}\n.section-label {\n  display: block;\n  font-size: 14px;\n  font-weight: 700;\n  color: #0f172a;\n  margin-bottom: 16px;\n  text-transform: none;\n  letter-spacing: normal;\n}\n:host-context(.dark) .section-label {\n  color: #ffffff;\n}\n.amount-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));\n  gap: 12px;\n  margin-bottom: 16px;\n}\n.amount-button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 16px;\n  background: transparent;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  cursor: pointer;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n:host-context(.dark) .amount-button {\n  border-color: rgba(255, 255, 255, 0.08);\n}\n.amount-button:hover:not(:disabled):not(.selected) {\n  background: rgba(99, 102, 241, 0.04);\n  border-color: rgba(99, 102, 241, 0.2);\n}\n.amount-button.selected {\n  border-color: #8b5cf6;\n  background: rgba(99, 102, 241, 0.06);\n  box-shadow: 0 0 0 2px rgba(139, 92, 246, 0.1);\n}\n:host-context(.dark) .amount-button.selected {\n  background: rgba(99, 102, 241, 0.12);\n  box-shadow: 0 0 0 2px rgba(139, 92, 246, 0.2);\n}\n.amount-button.selected .amount-value {\n  color: #8b5cf6;\n  font-weight: 700;\n}\n.amount-button:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.amount-button .amount-value {\n  font-size: 18px;\n  font-weight: 600;\n  color: #0f172a;\n}\n:host-context(.dark) .amount-button .amount-value {\n  color: #ffffff;\n}\n.custom-toggle {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  background: transparent;\n  border: none;\n  color: #8b5cf6;\n  font-size: 14px;\n  font-weight: 600;\n  padding: 0;\n  cursor: pointer;\n  margin-bottom: 12px;\n}\n.custom-toggle mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.custom-input-container {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 16px;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  margin-top: 8px;\n}\n:host-context(.dark) .custom-input-container {\n  background: rgba(30, 41, 59, 0.5);\n  border-color: rgba(255, 255, 255, 0.08);\n}\n.custom-input-container .currency-symbol {\n  font-size: 20px;\n  font-weight: 700;\n  color: #475569;\n}\n.custom-input-container .custom-input {\n  flex: 1;\n  background: transparent;\n  border: none;\n  outline: none;\n  font-size: 20px;\n  font-weight: 700;\n  color: #0f172a;\n}\n:host-context(.dark) .custom-input-container .custom-input {\n  color: #ffffff;\n}\n.amount-hint {\n  font-size: 12px;\n  color: #94a3b8;\n  margin-top: 8px;\n}\n.cards-selection {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 12px;\n}\n.card-option {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 16px 20px;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  cursor: pointer;\n  text-align: left;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n:host-context(.dark) .card-option {\n  background: rgba(30, 41, 59, 0.3);\n  border-color: rgba(255, 255, 255, 0.08);\n}\n.card-option:hover:not(:disabled):not(.selected) {\n  border-color: rgba(99, 102, 241, 0.2);\n  background: rgba(99, 102, 241, 0.02);\n}\n.card-option.selected {\n  border-color: #8b5cf6;\n  background: rgba(99, 102, 241, 0.04);\n  box-shadow: 0 0 0 1px #8b5cf6;\n}\n:host-context(.dark) .card-option.selected {\n  background: rgba(99, 102, 241, 0.08);\n}\n.card-icon-wrapper {\n  width: 48px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: white;\n  border-radius: 4px;\n  border: 1px solid #e2e8f0;\n  flex-shrink: 0;\n  padding: 4px;\n  box-sizing: border-box;\n}\n:host-context(.dark) .card-icon-wrapper {\n  background: #0f172a;\n  border-color: rgba(255, 255, 255, 0.1);\n}\n.card-icon-wrapper .card-brand-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n}\n.card-icon-wrapper .card-brand-icon svg {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n}\n.card-icon-wrapper .brand-logo {\n  height: 20px;\n  width: auto;\n  max-width: 100%;\n  object-fit: contain;\n  display: block;\n}\n.card-icon-wrapper .card-brand-mat-icon {\n  font-size: 24px;\n  width: 24px;\n  height: 24px;\n  color: #475569;\n}\n.card-details {\n  flex: 1;\n}\n.card-number {\n  display: block;\n  font-size: 15px;\n  font-weight: 600;\n  color: #0f172a;\n}\n:host-context(.dark) .card-number {\n  color: #ffffff;\n}\n.card-brand-name {\n  font-size: 13px;\n  color: #475569;\n}\n.default-badge {\n  font-size: 11px;\n  font-weight: 700;\n  color: #10b981;\n  background: rgba(16, 185, 129, 0.1);\n  padding: 4px 8px;\n  border-radius: 6px;\n  text-transform: uppercase;\n  letter-spacing: 0.02em;\n}\n.payment-summary .card-option.read-only {\n  cursor: default;\n  background: #f8fafc;\n  border-color: #8b5cf6;\n  box-shadow: 0 0 0 1px #8b5cf6;\n}\n:host-context(.dark) .payment-summary .card-option.read-only {\n  background: rgba(139, 92, 246, 0.1);\n}\n.payment-summary .card-option.read-only:hover {\n  background: #f8fafc;\n  border-color: #8b5cf6;\n}\n:host-context(.dark) .payment-summary .card-option.read-only:hover {\n  background: rgba(139, 92, 246, 0.1);\n}\n.dialog-actions {\n  display: flex;\n  gap: 16px;\n  margin-top: 40px;\n}\n.cancel-button {\n  flex: 1;\n  padding: 14px;\n  background: transparent;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  color: #475569;\n  font-size: 15px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n:host-context(.dark) .cancel-button {\n  border-color: rgba(255, 255, 255, 0.08);\n}\n.cancel-button:hover {\n  background: rgba(0, 0, 0, 0.02);\n}\n.purchase-button {\n  flex: 1.5;\n  padding: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1 0%,\n      #8b5cf6 50%,\n      #a855f7 100%);\n  border: none;\n  border-radius: 10px;\n  color: white;\n  font-size: 15px;\n  font-weight: 700;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.purchase-button:hover:not(:disabled) {\n  opacity: 0.9;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.25);\n}\n.purchase-button:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.button-amount {\n  background: rgba(255, 255, 255, 0.2);\n  padding: 2px 8px;\n  border-radius: 4px;\n}\n.error-message {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px;\n  background: rgba(239, 68, 68, 0.05);\n  border: 1px solid rgba(239, 68, 68, 0.1);\n  border-radius: 12px;\n  margin-bottom: 24px;\n  color: #ef4444;\n}\n.error-message mat-icon {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.error-message p {\n  font-size: 14px;\n  margin: 0;\n  font-weight: 500;\n}\n.kyc-state-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  padding: 32px 16px;\n  animation: fadeIn 0.3s ease-in-out;\n}\n.kyc-icon-wrapper {\n  width: 96px;\n  height: 96px;\n  background: rgba(139, 92, 246, 0.1);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 24px;\n  box-shadow: 0 0 0 12px rgba(139, 92, 246, 0.03);\n}\n:host-context(.dark) .kyc-icon-wrapper {\n  background: rgba(139, 92, 246, 0.15);\n  box-shadow: 0 0 0 12px rgba(139, 92, 246, 0.05);\n}\n.kyc-icon {\n  font-size: 48px;\n  width: 48px;\n  height: 48px;\n  color: #8b5cf6;\n}\n.kyc-content {\n  max-width: 400px;\n}\n.kyc-title {\n  font-size: 24px;\n  font-weight: 800;\n  color: #0f172a;\n  margin-bottom: 12px;\n  letter-spacing: -0.02em;\n}\n:host-context(.dark) .kyc-title {\n  color: #ffffff;\n}\n.kyc-description {\n  font-size: 15px;\n  line-height: 1.6;\n  color: #475569;\n  margin-bottom: 32px;\n}\n:host-context(.dark) .kyc-description {\n  color: rgba(255, 255, 255, 0.7);\n}\n.start-kyc-button {\n  width: 100%;\n  padding: 16px;\n  background:\n    linear-gradient(\n      135deg,\n      #0055ff 0%,\n      #0044cc 100%);\n  border: none;\n  border-radius: 12px;\n  color: white;\n  font-size: 16px;\n  font-weight: 700;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  margin-bottom: 16px;\n  box-shadow: 0 4px 12px rgba(0, 85, 255, 0.3);\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.start-kyc-button:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(0, 85, 255, 0.4);\n}\n.start-kyc-button:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.kyc-cancel {\n  background: transparent;\n  border: none;\n  color: #475569;\n  font-weight: 600;\n  font-size: 14px;\n  cursor: pointer;\n  padding: 8px;\n}\n:host-context(.dark) .kyc-cancel {\n  color: rgba(255, 255, 255, 0.7);\n}\n.kyc-cancel:hover {\n  text-decoration: underline;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n/*# sourceMappingURL=purchase-credits-dialog.component.css.map */\n"], encapsulation: 2 });
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
    ], encapsulation: ViewEncapsulation.None, template: `<div class="purchase-credits-dialog">
    <!-- Normal Purchase Flow -->
    <ng-container *ngIf="!kycRequired">
        <!-- Header -->
        <div class="dialog-header">
            <h2 class="dialog-title">{{ 'addCredits.purchaseDialog.title' | transloco }}</h2>
            <p class="dialog-subtitle">{{ 'addCredits.hero.subtitle' | transloco }}</p>
        </div>

        <mat-dialog-content class="p-0">
            <!-- Error Message -->
            <div *ngIf="error" class="error-message">
                <mat-icon>error_outline</mat-icon>
                <p>{{ error }}</p>
            </div>

            <!-- Amount Selection Section -->
            <div class="section">
                <label class="section-label">{{
                    'addCredits.purchaseDialog.selectAmount' | transloco
                }}</label>

                <!-- Preset Amounts Grid -->
                <div class="amount-grid">
                    <button
                        *ngFor="let amount of creditAmounts"
                        type="button"
                        class="amount-button"
                        [class.selected]="selectedAmount === amount && !isCustomAmount"
                        (click)="selectPresetAmount(amount)"
                        [disabled]="loading"
                    >
                        <span class="amount-value">\${{ amount }}</span>
                    </button>
                </div>

                <!-- Custom Amount Toggle & Input -->
                <div class="custom-amount-wrapper">
                    <button
                        type="button"
                        class="custom-toggle"
                        [class.active]="isCustomAmount"
                        (click)="toggleCustomAmount()"
                        [disabled]="loading"
                    >
                        <mat-icon>edit</mat-icon>
                        <span>{{ 'addCredits.purchaseDialog.customAmount' | transloco }}</span>
                    </button>

                    <div *ngIf="isCustomAmount" class="custom-input-container">
                        <span class="currency-symbol">$</span>
                        <input
                            type="number"
                            class="custom-input"
                            [(ngModel)]="customAmountValue"
                            (ngModelChange)="onCustomAmountChange($event)"
                            placeholder="40"
                            [min]="minPurchaseUsd"
                            [max]="maxPurchaseUsd"
                            [disabled]="loading"
                        />
                    </div>
                </div>

                <p class="amount-hint">
                    {{ 'addCredits.purchaseDialog.minimum' | transloco }} \u2022
                    {{ 'addCredits.purchaseDialog.maximum' | transloco }} $2,000
                </p>
            </div>

            <!-- Payment Method Summary -->
            <div class="section" *ngIf="data?.card" class="p-1">
                <label class="section-label">{{
                    'addCredits.purchaseDialog.paymentMethod' | transloco
                }}</label>

                <div class="payment-summary">
                    <div class="card-option selected read-only">
                        <div class="card-icon-wrapper">
                            <img
                                [src]="getCardLogo(data.card.brand)"
                                [alt]="data.card.brand"
                                class="brand-logo"
                            />
                        </div>

                        <div class="card-details">
                            <span class="card-number">\u2022\u2022\u2022\u2022 {{ data.card.lastFour }}</span>
                        </div>

                        <span *ngIf="data.card.isDefault" class="default-badge">{{
                            'addCredits.paymentMethods.cardDefault' | transloco
                        }}</span>
                    </div>
                </div>
            </div>
        </mat-dialog-content>

        <!-- Dialog Actions -->
        <div class="dialog-actions">
            <button type="button" class="cancel-button" (click)="close()" [disabled]="loading">
                {{ 'addCredits.purchaseDialog.cancel' | transloco }}
            </button>
            <button
                type="button"
                class="purchase-button"
                (click)="purchase()"
                [disabled]="loading || !selectedCardId || !isValidAmount()"
            >
                <mat-spinner *ngIf="loading" diameter="20"></mat-spinner>
                <ng-container *ngIf="!loading">
                    <span>{{ 'chat.payment.payBtn' | transloco }}</span>
                    <span class="button-amount">\${{ selectedAmount }}</span>
                </ng-container>
                <span *ngIf="loading">{{
                    'addCredits.purchaseDialog.purchasing' | transloco
                }}</span>
            </button>
        </div>
    </ng-container>

    <!-- KYC Required State -->
    <div class="kyc-state-wrapper" *ngIf="kycRequired">
        <div class="kyc-icon-wrapper">
            <mat-icon class="kyc-icon">verified_user</mat-icon>
        </div>

        <div class="kyc-content">
            <h3 class="kyc-title">{{ 'addCredits.purchaseDialog.kyc.title' | transloco }}</h3>
            <p class="kyc-description">
                {{ 'addCredits.purchaseDialog.kyc.description' | transloco }}
            </p>

            <button class="start-kyc-button" (click)="startKyc()" [disabled]="loading">
                <mat-spinner *ngIf="loading" diameter="24"></mat-spinner>
                <span *ngIf="!loading">{{
                    'addCredits.purchaseDialog.kyc.startKyc' | transloco
                }}</span>
            </button>

            <button class="cancel-button kyc-cancel" (click)="close()" [disabled]="loading">
                Close
            </button>
        </div>
    </div>
</div>
`, styles: ["/* src/app/modules/add-credits/purchase-credits-dialog/purchase-credits-dialog.component.scss */\n.purchase-credits-dialog {\n  padding: 12px;\n  background: #ffffff;\n  border-radius: 20px;\n  width: 100%;\n  max-width: 680px;\n  margin: 0 auto;\n}\n:host-context(.dark) .purchase-credits-dialog {\n  background: #1e293b;\n}\n.dialog-header {\n  text-align: left;\n  margin-bottom: 40px;\n}\n.dialog-title {\n  font-size: 28px;\n  font-weight: 800;\n  color: #0f172a;\n  margin-bottom: 8px;\n  letter-spacing: -0.02em;\n}\n:host-context(.dark) .dialog-title {\n  color: #ffffff;\n}\n.dialog-subtitle {\n  font-size: 15px;\n  color: #475569;\n}\n:host-context(.dark) .dialog-subtitle {\n  color: rgba(255, 255, 255, 0.7);\n}\n.section {\n  margin-bottom: 32px;\n}\n.section-label {\n  display: block;\n  font-size: 14px;\n  font-weight: 700;\n  color: #0f172a;\n  margin-bottom: 16px;\n  text-transform: none;\n  letter-spacing: normal;\n}\n:host-context(.dark) .section-label {\n  color: #ffffff;\n}\n.amount-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));\n  gap: 12px;\n  margin-bottom: 16px;\n}\n.amount-button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 16px;\n  background: transparent;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  cursor: pointer;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n:host-context(.dark) .amount-button {\n  border-color: rgba(255, 255, 255, 0.08);\n}\n.amount-button:hover:not(:disabled):not(.selected) {\n  background: rgba(99, 102, 241, 0.04);\n  border-color: rgba(99, 102, 241, 0.2);\n}\n.amount-button.selected {\n  border-color: #8b5cf6;\n  background: rgba(99, 102, 241, 0.06);\n  box-shadow: 0 0 0 2px rgba(139, 92, 246, 0.1);\n}\n:host-context(.dark) .amount-button.selected {\n  background: rgba(99, 102, 241, 0.12);\n  box-shadow: 0 0 0 2px rgba(139, 92, 246, 0.2);\n}\n.amount-button.selected .amount-value {\n  color: #8b5cf6;\n  font-weight: 700;\n}\n.amount-button:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.amount-button .amount-value {\n  font-size: 18px;\n  font-weight: 600;\n  color: #0f172a;\n}\n:host-context(.dark) .amount-button .amount-value {\n  color: #ffffff;\n}\n.custom-toggle {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  background: transparent;\n  border: none;\n  color: #8b5cf6;\n  font-size: 14px;\n  font-weight: 600;\n  padding: 0;\n  cursor: pointer;\n  margin-bottom: 12px;\n}\n.custom-toggle mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.custom-input-container {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 16px;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  margin-top: 8px;\n}\n:host-context(.dark) .custom-input-container {\n  background: rgba(30, 41, 59, 0.5);\n  border-color: rgba(255, 255, 255, 0.08);\n}\n.custom-input-container .currency-symbol {\n  font-size: 20px;\n  font-weight: 700;\n  color: #475569;\n}\n.custom-input-container .custom-input {\n  flex: 1;\n  background: transparent;\n  border: none;\n  outline: none;\n  font-size: 20px;\n  font-weight: 700;\n  color: #0f172a;\n}\n:host-context(.dark) .custom-input-container .custom-input {\n  color: #ffffff;\n}\n.amount-hint {\n  font-size: 12px;\n  color: #94a3b8;\n  margin-top: 8px;\n}\n.cards-selection {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 12px;\n}\n.card-option {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 16px 20px;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  cursor: pointer;\n  text-align: left;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n:host-context(.dark) .card-option {\n  background: rgba(30, 41, 59, 0.3);\n  border-color: rgba(255, 255, 255, 0.08);\n}\n.card-option:hover:not(:disabled):not(.selected) {\n  border-color: rgba(99, 102, 241, 0.2);\n  background: rgba(99, 102, 241, 0.02);\n}\n.card-option.selected {\n  border-color: #8b5cf6;\n  background: rgba(99, 102, 241, 0.04);\n  box-shadow: 0 0 0 1px #8b5cf6;\n}\n:host-context(.dark) .card-option.selected {\n  background: rgba(99, 102, 241, 0.08);\n}\n.card-icon-wrapper {\n  width: 48px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: white;\n  border-radius: 4px;\n  border: 1px solid #e2e8f0;\n  flex-shrink: 0;\n  padding: 4px;\n  box-sizing: border-box;\n}\n:host-context(.dark) .card-icon-wrapper {\n  background: #0f172a;\n  border-color: rgba(255, 255, 255, 0.1);\n}\n.card-icon-wrapper .card-brand-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n}\n.card-icon-wrapper .card-brand-icon svg {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n}\n.card-icon-wrapper .brand-logo {\n  height: 20px;\n  width: auto;\n  max-width: 100%;\n  object-fit: contain;\n  display: block;\n}\n.card-icon-wrapper .card-brand-mat-icon {\n  font-size: 24px;\n  width: 24px;\n  height: 24px;\n  color: #475569;\n}\n.card-details {\n  flex: 1;\n}\n.card-number {\n  display: block;\n  font-size: 15px;\n  font-weight: 600;\n  color: #0f172a;\n}\n:host-context(.dark) .card-number {\n  color: #ffffff;\n}\n.card-brand-name {\n  font-size: 13px;\n  color: #475569;\n}\n.default-badge {\n  font-size: 11px;\n  font-weight: 700;\n  color: #10b981;\n  background: rgba(16, 185, 129, 0.1);\n  padding: 4px 8px;\n  border-radius: 6px;\n  text-transform: uppercase;\n  letter-spacing: 0.02em;\n}\n.payment-summary .card-option.read-only {\n  cursor: default;\n  background: #f8fafc;\n  border-color: #8b5cf6;\n  box-shadow: 0 0 0 1px #8b5cf6;\n}\n:host-context(.dark) .payment-summary .card-option.read-only {\n  background: rgba(139, 92, 246, 0.1);\n}\n.payment-summary .card-option.read-only:hover {\n  background: #f8fafc;\n  border-color: #8b5cf6;\n}\n:host-context(.dark) .payment-summary .card-option.read-only:hover {\n  background: rgba(139, 92, 246, 0.1);\n}\n.dialog-actions {\n  display: flex;\n  gap: 16px;\n  margin-top: 40px;\n}\n.cancel-button {\n  flex: 1;\n  padding: 14px;\n  background: transparent;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  color: #475569;\n  font-size: 15px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n:host-context(.dark) .cancel-button {\n  border-color: rgba(255, 255, 255, 0.08);\n}\n.cancel-button:hover {\n  background: rgba(0, 0, 0, 0.02);\n}\n.purchase-button {\n  flex: 1.5;\n  padding: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1 0%,\n      #8b5cf6 50%,\n      #a855f7 100%);\n  border: none;\n  border-radius: 10px;\n  color: white;\n  font-size: 15px;\n  font-weight: 700;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.purchase-button:hover:not(:disabled) {\n  opacity: 0.9;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.25);\n}\n.purchase-button:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.button-amount {\n  background: rgba(255, 255, 255, 0.2);\n  padding: 2px 8px;\n  border-radius: 4px;\n}\n.error-message {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px;\n  background: rgba(239, 68, 68, 0.05);\n  border: 1px solid rgba(239, 68, 68, 0.1);\n  border-radius: 12px;\n  margin-bottom: 24px;\n  color: #ef4444;\n}\n.error-message mat-icon {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.error-message p {\n  font-size: 14px;\n  margin: 0;\n  font-weight: 500;\n}\n.kyc-state-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  padding: 32px 16px;\n  animation: fadeIn 0.3s ease-in-out;\n}\n.kyc-icon-wrapper {\n  width: 96px;\n  height: 96px;\n  background: rgba(139, 92, 246, 0.1);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 24px;\n  box-shadow: 0 0 0 12px rgba(139, 92, 246, 0.03);\n}\n:host-context(.dark) .kyc-icon-wrapper {\n  background: rgba(139, 92, 246, 0.15);\n  box-shadow: 0 0 0 12px rgba(139, 92, 246, 0.05);\n}\n.kyc-icon {\n  font-size: 48px;\n  width: 48px;\n  height: 48px;\n  color: #8b5cf6;\n}\n.kyc-content {\n  max-width: 400px;\n}\n.kyc-title {\n  font-size: 24px;\n  font-weight: 800;\n  color: #0f172a;\n  margin-bottom: 12px;\n  letter-spacing: -0.02em;\n}\n:host-context(.dark) .kyc-title {\n  color: #ffffff;\n}\n.kyc-description {\n  font-size: 15px;\n  line-height: 1.6;\n  color: #475569;\n  margin-bottom: 32px;\n}\n:host-context(.dark) .kyc-description {\n  color: rgba(255, 255, 255, 0.7);\n}\n.start-kyc-button {\n  width: 100%;\n  padding: 16px;\n  background:\n    linear-gradient(\n      135deg,\n      #0055ff 0%,\n      #0044cc 100%);\n  border: none;\n  border-radius: 12px;\n  color: white;\n  font-size: 16px;\n  font-weight: 700;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  margin-bottom: 16px;\n  box-shadow: 0 4px 12px rgba(0, 85, 255, 0.3);\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.start-kyc-button:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(0, 85, 255, 0.4);\n}\n.start-kyc-button:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.kyc-cancel {\n  background: transparent;\n  border: none;\n  color: #475569;\n  font-weight: 600;\n  font-size: 14px;\n  cursor: pointer;\n  padding: 8px;\n}\n:host-context(.dark) .kyc-cancel {\n  color: rgba(255, 255, 255, 0.7);\n}\n.kyc-cancel:hover {\n  text-decoration: underline;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n/*# sourceMappingURL=purchase-credits-dialog.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PurchaseCreditsDialogComponent, { className: "PurchaseCreditsDialogComponent", filePath: "src/app/modules/add-credits/purchase-credits-dialog/purchase-credits-dialog.component.ts", lineNumber: 52 });
})();

// src/app/modules/add-credits/add-credits.component.ts
var _c02 = () => ["/subscription-plans"];
var _c1 = (a0) => ({ "grid-template-columns": a0 });
function AddCreditsComponent_div_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52)(1, "div", 53);
    \u0275\u0275element(2, "mat-spinner", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 55);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 1, "addCredits.paymentMethods.manage"), "... ");
  }
}
function AddCreditsComponent_div_62_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 56)(1, "mat-icon", 57);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 58);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 59);
    \u0275\u0275listener("click", function AddCreditsComponent_div_62_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.loadData());
    });
    \u0275\u0275elementStart(6, "mat-icon");
    \u0275\u0275text(7, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.error());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 2, "settings.profile.save_error"), " ");
  }
}
function AddCreditsComponent_div_63_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 60)(1, "div", 61)(2, "div", 62)(3, "mat-icon", 63);
    \u0275\u0275text(4, "credit_card_off");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(5, "h3", 64);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 65);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 66);
    \u0275\u0275listener("click", function AddCreditsComponent_div_63_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openAddCardDialog());
    });
    \u0275\u0275elementStart(12, "mat-icon");
    \u0275\u0275text(13, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span");
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "transloco");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 3, "addCredits.noCards"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 5, "addCredits.noCardsDesc"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 7, "addCredits.addCard"));
  }
}
function AddCreditsComponent_div_64_app_payment_card_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-payment-card", 69);
    \u0275\u0275listener("setDefault", function AddCreditsComponent_div_64_app_payment_card_1_Template_app_payment_card_setDefault_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onCardSetDefault($event));
    })("delete", function AddCreditsComponent_div_64_app_payment_card_1_Template_app_payment_card_delete_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onCardDeleted($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const card_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    \u0275\u0275styleProp("animation-delay", i_r6 * 100 + "ms");
    \u0275\u0275property("card", card_r5)("isDefault", card_r5.isDefault);
  }
}
function AddCreditsComponent_div_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67);
    \u0275\u0275template(1, AddCreditsComponent_div_64_app_payment_card_1_Template, 1, 4, "app-payment-card", 68);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.cards());
  }
}
function AddCreditsComponent_div_78_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70)(1, "div", 71);
    \u0275\u0275element(2, "span", 72);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 73)(6, "div", 74)(7, "span", 75);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 76);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 74)(13, "span", 75);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 76);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_5_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 5, "addCredits.autoRecharge.status.active"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 7, "addCredits.autoRecharge.dialog.balanceThreshold"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", (tmp_3_0 = ctx_r1.autoRechargeConfig()) == null ? null : tmp_3_0.minThreshold, " credits");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 9, "addCredits.autoRecharge.dialog.rechargeAmount"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", (tmp_5_0 = ctx_r1.autoRechargeConfig()) == null ? null : tmp_5_0.minRecharge, " credits");
  }
}
function AddCreditsComponent_div_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 77)(1, "div", 78);
    \u0275\u0275element(2, "span", 72);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 79);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "addCredits.autoRecharge.status.inactive"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 4, "addCredits.autoRecharge.description"), " ");
  }
}
function AddCreditsComponent_div_97_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 80);
    \u0275\u0275element(1, "div", 81)(2, "div", 81)(3, "div", 81);
    \u0275\u0275elementEnd();
  }
}
function AddCreditsComponent_div_98_div_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 88);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "addCredits.subscriptionPlans.bestValue"));
  }
}
function AddCreditsComponent_div_98_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 84);
    \u0275\u0275template(1, AddCreditsComponent_div_98_div_1_span_1_Template, 3, 3, "span", 85);
    \u0275\u0275elementStart(2, "span", 86);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 87);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tier_r7 = ctx.$implicit;
    \u0275\u0275classProp("popular", tier_r7.isBestValue);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", tier_r7.isBestValue);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(4, 5, tier_r7.plan.amount, "1.0-0"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(tier_r7.label);
  }
}
function AddCreditsComponent_div_98_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 82);
    \u0275\u0275template(1, AddCreditsComponent_div_98_div_1_Template, 7, 8, "div", 83);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(3, _c1, "repeat(" + ctx_r1.sidebarPlanTiers().length + ", 1fr)"));
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.sidebarPlanTiers())("ngForTrackBy", ctx_r1.trackBySidebarTier);
  }
}
var AddCreditsComponent = class _AddCreditsComponent {
  constructor() {
    this._creditsService = inject(CreditsService);
    this._paymentService = inject(PaymentService);
    this._subscriptionService = inject(SubscriptionService);
    this._dialog = inject(MatDialog);
    this._authService = inject(AuthService);
    this.cards = this._creditsService.cards;
    this.balance = this._creditsService.balance;
    this.autoRechargeConfig = this._creditsService.autoRechargeConfig;
    this.loading = this._creditsService.loading;
    this.error = this._creditsService.error;
    this.pricingPlansLoading = signal(false);
    this.sidebarPlanTiers = signal([]);
    this.hasCards = computed(() => this.cards().length > 0);
    this.defaultCard = computed(() => this.cards().find((card) => card.isDefault));
  }
  ngOnInit() {
    const hasToken = !!localStorage.getItem("accessToken");
    if (!hasToken) {
      this.openAuthModal();
      return;
    }
    this.loadData();
  }
  loadData() {
    this.pricingPlansLoading.set(true);
    forkJoin({
      cards: this._creditsService.getCards(),
      balance: this._creditsService.getBalance(),
      autoRecharge: this._creditsService.getAutoRechargeConfig(),
      pricing: this._subscriptionService.getPricingTableDisplay({ lang: this._getCurrentLang() }).pipe(catchError((err) => {
        console.error("Failed to load pricing table for sidebar:", err);
        return of({ data: { plans: [] } });
      }))
    }).subscribe({
      next: (result) => {
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
    this._paymentService.createStripeCard().subscribe({
      next: () => {
      },
      error: (err) => {
        console.error("Failed to create Stripe checkout session:", err);
      }
    });
  }
  /**
   * Opens the purchase flow UI. Actual charging, 3DS (`confirmCardPayment`), and
   * `POST /v2/credits/purchase/confirm` are handled in {@link PurchaseCreditsDialogComponent}.
   */
  openPurchaseCreditsDialog() {
    const currentCards = this.cards();
    if (currentCards.length === 0) {
      this.openAddCardDialog();
      return;
    }
    const cardToUse = this.defaultCard() || currentCards[0];
    const dialogRef = this._dialog.open(PurchaseCreditsDialogComponent, {
      width: "500px",
      maxWidth: "90vw",
      data: {
        card: cardToUse
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddCreditsComponent, selectors: [["add-credits"]], decls: 105, vars: 64, consts: [[1, "add-credits-container"], [1, "bg-pattern"], [1, "content-wrapper"], [1, "hero-section"], [1, "hero-content"], [1, "hero-text"], [1, "badge"], [1, "badge-icon"], [1, "hero-title"], [1, "hero-subtitle"], [1, "balance-card"], [1, "balance-card-glow"], [1, "balance-card-content"], [1, "balance-header"], [1, "balance-icon-wrapper"], [1, "balance-icon"], [1, "balance-label"], [1, "balance-amount"], [1, "amount-value"], [1, "amount-currency"], [1, "balance-action"], [1, "primary-cta-button", 3, "click", "disabled"], [1, "main-grid"], [1, "payment-section"], [1, "section-card"], [1, "section-header"], [1, "section-title-wrapper"], [1, "section-icon"], [1, "section-title"], [1, "section-subtitle"], [1, "add-card-button", 3, "click", "disabled"], ["class", "loading-state", 4, "ngIf"], ["class", "error-state", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "cards-list", 4, "ngIf"], [1, "sidebar"], [1, "sidebar-card", "auto-recharge-card"], [1, "sidebar-card-header"], [1, "sidebar-card-icon", "auto-recharge-icon"], [1, "sidebar-card-title"], [1, "sidebar-card-subtitle"], ["class", "auto-recharge-active", 4, "ngIf"], ["class", "auto-recharge-inactive", 4, "ngIf"], [1, "sidebar-action-button", 3, "click", "disabled"], [1, "sidebar-card", "pricing-card"], [1, "pricing-header"], [1, "pricing-icon"], [1, "pricing-content"], [1, "pricing-text"], ["class", "pricing-tiers-skeleton", 4, "ngIf"], ["class", "pricing-tiers", 3, "ngStyle", 4, "ngIf"], [1, "sidebar-action-button", "mt-4", 3, "routerLink"], [1, "loading-state"], [1, "loading-spinner"], ["diameter", "48"], [1, "loading-text"], [1, "error-state"], [1, "error-icon"], [1, "error-text"], [1, "retry-button", 3, "click"], [1, "empty-state"], [1, "empty-illustration"], [1, "empty-card-visual"], [1, "empty-icon"], [1, "empty-title"], [1, "empty-subtitle"], [1, "primary-cta-button", 3, "click"], [1, "cards-list"], ["class", "card-item", 3, "card", "isDefault", "animation-delay", "setDefault", "delete", 4, "ngFor", "ngForOf"], [1, "card-item", 3, "setDefault", "delete", "card", "isDefault"], [1, "auto-recharge-active"], [1, "status-badge", "active"], [1, "status-dot"], [1, "config-details"], [1, "config-item"], [1, "config-label"], [1, "config-value"], [1, "auto-recharge-inactive"], [1, "status-badge", "inactive"], [1, "inactive-text"], [1, "pricing-tiers-skeleton"], [1, "pricing-tier-skeleton-bar"], [1, "pricing-tiers", 3, "ngStyle"], ["class", "tier", 3, "popular", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "tier"], ["class", "tier-badge", 4, "ngIf"], [1, "tier-amount"], [1, "tier-label"], [1, "tier-badge"]], template: function AddCreditsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "div", 1);
        \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "span", 6)(7, "mat-icon", 7);
        \u0275\u0275text(8, "bolt");
        \u0275\u0275elementEnd();
        \u0275\u0275text(9);
        \u0275\u0275pipe(10, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "h1", 8);
        \u0275\u0275text(12);
        \u0275\u0275pipe(13, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "p", 9);
        \u0275\u0275text(15);
        \u0275\u0275pipe(16, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "div", 10);
        \u0275\u0275element(18, "div", 11);
        \u0275\u0275elementStart(19, "div", 12)(20, "div", 13)(21, "div", 14)(22, "mat-icon", 15);
        \u0275\u0275text(23, "account_balance_wallet");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "span", 16);
        \u0275\u0275text(25);
        \u0275\u0275pipe(26, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "div", 17)(28, "span", 18);
        \u0275\u0275text(29);
        \u0275\u0275pipe(30, "number");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "span", 19);
        \u0275\u0275text(32);
        \u0275\u0275pipe(33, "transloco");
        \u0275\u0275pipe(34, "lowercase");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(35, "div", 20)(36, "button", 21);
        \u0275\u0275listener("click", function AddCreditsComponent_Template_button_click_36_listener() {
          return ctx.openPurchaseCreditsDialog();
        });
        \u0275\u0275elementStart(37, "span");
        \u0275\u0275text(38);
        \u0275\u0275pipe(39, "transloco");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(40, "div", 22)(41, "div", 23)(42, "div", 24)(43, "div", 25)(44, "div", 26)(45, "div", 27)(46, "mat-icon");
        \u0275\u0275text(47, "credit_card");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(48, "div")(49, "h2", 28);
        \u0275\u0275text(50);
        \u0275\u0275pipe(51, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "p", 29);
        \u0275\u0275text(53);
        \u0275\u0275pipe(54, "transloco");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(55, "button", 30);
        \u0275\u0275listener("click", function AddCreditsComponent_Template_button_click_55_listener() {
          return ctx.openAddCardDialog();
        });
        \u0275\u0275elementStart(56, "mat-icon");
        \u0275\u0275text(57, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "span");
        \u0275\u0275text(59);
        \u0275\u0275pipe(60, "transloco");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(61, AddCreditsComponent_div_61_Template, 6, 3, "div", 31)(62, AddCreditsComponent_div_62_Template, 10, 4, "div", 32)(63, AddCreditsComponent_div_63_Template, 17, 9, "div", 33)(64, AddCreditsComponent_div_64_Template, 2, 1, "div", 34);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(65, "div", 35)(66, "div", 36)(67, "div", 37)(68, "div", 38)(69, "mat-icon");
        \u0275\u0275text(70, "autorenew");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(71, "div")(72, "h3", 39);
        \u0275\u0275text(73);
        \u0275\u0275pipe(74, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(75, "p", 40);
        \u0275\u0275text(76);
        \u0275\u0275pipe(77, "transloco");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(78, AddCreditsComponent_div_78_Template, 18, 11, "div", 41)(79, AddCreditsComponent_div_79_Template, 8, 6, "div", 42);
        \u0275\u0275elementStart(80, "button", 43);
        \u0275\u0275listener("click", function AddCreditsComponent_Template_button_click_80_listener() {
          return ctx.openAutoRechargeSettings();
        });
        \u0275\u0275elementStart(81, "mat-icon");
        \u0275\u0275text(82, "settings");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(83, "span");
        \u0275\u0275text(84);
        \u0275\u0275pipe(85, "transloco");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(86, "div", 44)(87, "div", 45)(88, "mat-icon", 46);
        \u0275\u0275text(89, "verified");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(90, "span");
        \u0275\u0275text(91);
        \u0275\u0275pipe(92, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(93, "div", 47)(94, "p", 48);
        \u0275\u0275text(95);
        \u0275\u0275pipe(96, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275template(97, AddCreditsComponent_div_97_Template, 4, 0, "div", 49)(98, AddCreditsComponent_div_98_Template, 2, 5, "div", 50);
        \u0275\u0275elementStart(99, "button", 51)(100, "span");
        \u0275\u0275text(101);
        \u0275\u0275pipe(102, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(103, "mat-icon");
        \u0275\u0275text(104, "arrow_forward");
        \u0275\u0275elementEnd()()()()()()()();
      }
      if (rf & 2) {
        let tmp_4_0;
        let tmp_18_0;
        let tmp_19_0;
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 28, "addCredits.hero.badge"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 30, "addCredits.hero.title"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 32, "addCredits.hero.subtitle"), " ");
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 34, "addCredits.availableCredits"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(30, 36, ((tmp_4_0 = ctx.balance()) == null ? null : tmp_4_0.totalCredits) || 0, "1.2-2"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(34, 41, \u0275\u0275pipeBind1(33, 39, "userMenu.credits")));
        \u0275\u0275advance(4);
        \u0275\u0275property("disabled", ctx.loading());
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(39, 43, "addCredits.purchaseCredits"));
        \u0275\u0275advance(12);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(51, 45, "addCredits.paymentMethods.title"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(54, 47, "addCredits.paymentMethods.manage"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.loading());
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(60, 49, "addCredits.addCard"));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.loading());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.error() && !ctx.loading());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading() && !ctx.error() && !ctx.hasCards());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading() && !ctx.error() && ctx.hasCards());
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(74, 51, "addCredits.autoRecharge.title"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(77, 53, "addCredits.autoRecharge.subtitle"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", (tmp_18_0 = ctx.autoRechargeConfig()) == null ? null : tmp_18_0.hasAutoCharge);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !((tmp_19_0 = ctx.autoRechargeConfig()) == null ? null : tmp_19_0.hasAutoCharge));
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.loading());
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(85, 55, "addCredits.autoRecharge.configure"));
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(92, 57, "addCredits.subscriptionPlans.title"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(96, 59, "addCredits.subscriptionPlans.description"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.pricingPlansLoading());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.pricingPlansLoading() && ctx.sidebarPlanTiers().length > 0);
        \u0275\u0275advance();
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(63, _c02));
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(102, 61, "addCredits.subscriptionPlans.viewAllPlans"));
      }
    }, dependencies: [
      CommonModule,
      NgForOf,
      NgIf,
      NgStyle,
      LowerCasePipe,
      DecimalPipe,
      TranslocoModule,
      TranslocoPipe,
      MatButtonModule,
      MatIconModule,
      MatIcon,
      MatDialogModule,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      PaymentCardComponent,
      RouterModule,
      RouterLink
    ], styles: ['/* src/app/modules/add-credits/add-credits.component.scss */\n.add-credits-container {\n  width: 100% !important;\n  min-height: 100vh;\n  background: #f8fafc;\n  position: relative;\n  overflow: hidden;\n}\n:host-context(.dark) .add-credits-container {\n  background: #0f172a;\n}\n.bg-pattern {\n  position: absolute;\n  inset: 0;\n  background-image:\n    radial-gradient(\n      circle at 20% 20%,\n      rgba(99, 102, 241, 0.05) 0%,\n      transparent 50%),\n    radial-gradient(\n      circle at 80% 80%,\n      rgba(139, 92, 246, 0.05) 0%,\n      transparent 50%);\n  pointer-events: none;\n}\n:host-context(.dark) .bg-pattern {\n  background-image:\n    radial-gradient(\n      circle at 20% 20%,\n      rgba(99, 102, 241, 0.15) 0%,\n      transparent 50%),\n    radial-gradient(\n      circle at 80% 80%,\n      rgba(139, 92, 246, 0.15) 0%,\n      transparent 50%);\n}\n.content-wrapper {\n  position: relative;\n  z-index: 1;\n  width: 100%;\n  padding: 40px 24px;\n}\n@media (min-width: 768px) {\n  .content-wrapper {\n    padding: 48px 48px;\n  }\n}\n@media (min-width: 1280px) {\n  .content-wrapper {\n    padding: 48px 64px;\n  }\n}\n.hero-section {\n  margin-bottom: 48px;\n}\n.hero-content {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 40px;\n  align-items: center;\n}\n@media (min-width: 1024px) {\n  .hero-content {\n    grid-template-columns: 1fr 400px;\n    gap: 60px;\n  }\n}\n.hero-text .badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 16px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(99, 102, 241, 0.1),\n      rgba(139, 92, 246, 0.1));\n  border: 1px solid rgba(99, 102, 241, 0.2);\n  border-radius: 100px;\n  color: #8b5cf6;\n  font-size: 14px;\n  font-weight: 600;\n  margin-bottom: 24px;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n:host-context(.dark) .hero-text .badge {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(99, 102, 241, 0.2),\n      rgba(139, 92, 246, 0.2));\n  border-color: rgba(139, 92, 246, 0.3);\n}\n.hero-text .badge .badge-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.hero-text .hero-title {\n  font-size: 36px;\n  font-weight: 800;\n  color: #0f172a;\n  margin-bottom: 16px;\n  line-height: 1.2;\n}\n:host-context(.dark) .hero-text .hero-title {\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff 0%,\n      rgba(255, 255, 255, 0.8) 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n@media (min-width: 768px) {\n  .hero-text .hero-title {\n    font-size: 48px;\n  }\n}\n.hero-text .hero-subtitle {\n  font-size: 18px;\n  color: #475569;\n  line-height: 1.7;\n  max-width: 500px;\n}\n:host-context(.dark) .hero-text .hero-subtitle {\n  color: rgba(255, 255, 255, 0.7);\n}\n.balance-card {\n  position: relative;\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 20px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05), 0 4px 12px rgba(0, 0, 0, 0.03);\n  padding: 32px;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n:host-context(.dark) .balance-card {\n  background: rgba(30, 41, 59, 0.8);\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 20px;\n}\n.balance-card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 12px 40px rgba(99, 102, 241, 0.15);\n}\n:host-context(.dark) .balance-card:hover {\n  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);\n}\n.balance-card-glow {\n  position: absolute;\n  inset: -1px;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1 0%,\n      #8b5cf6 50%,\n      #a855f7 100%);\n  border-radius: 21px;\n  opacity: 0;\n  z-index: -1;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.balance-card:hover .balance-card-glow {\n  opacity: 0.15;\n  filter: blur(20px);\n}\n:host-context(.dark) .balance-card:hover .balance-card-glow {\n  opacity: 0.25;\n}\n.balance-card-content {\n  position: relative;\n}\n.balance-header {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 24px;\n}\n.balance-icon-wrapper {\n  width: 48px;\n  height: 48px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1 0%,\n      #8b5cf6 50%,\n      #a855f7 100%);\n  border-radius: 14px;\n  box-shadow: 0 8px 32px rgba(139, 92, 246, 0.3);\n}\n.balance-icon {\n  color: white;\n  font-size: 24px;\n  width: 24px;\n  height: 24px;\n}\n.balance-label {\n  font-size: 14px;\n  font-weight: 600;\n  color: #94a3b8;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n:host-context(.dark) .balance-label {\n  color: rgba(255, 255, 255, 0.4);\n}\n.balance-amount {\n  margin-bottom: 28px;\n}\n.amount-value {\n  font-size: 48px;\n  font-weight: 800;\n  color: #0f172a;\n  display: block;\n  line-height: 1;\n  margin-bottom: 8px;\n}\n:host-context(.dark) .amount-value {\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff 0%,\n      rgba(255, 255, 255, 0.85) 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.amount-currency {\n  font-size: 16px;\n  color: #94a3b8;\n  font-weight: 500;\n}\n:host-context(.dark) .amount-currency {\n  color: rgba(255, 255, 255, 0.4);\n}\n.balance-action {\n  width: 100%;\n}\n.primary-cta-button {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  width: 100%;\n  padding: 16px 32px;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1 0%,\n      #8b5cf6 50%,\n      #a855f7 100%);\n  border: none;\n  border-radius: 14px;\n  color: white;\n  font-size: 16px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  position: relative;\n  overflow: hidden;\n}\n.primary-cta-button::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.2) 0%,\n      transparent 50%);\n  opacity: 0;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.primary-cta-button:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 12px 24px rgba(99, 102, 241, 0.35);\n}\n.primary-cta-button:hover:not(:disabled)::before {\n  opacity: 1;\n}\n.primary-cta-button:active:not(:disabled) {\n  transform: translateY(0);\n}\n.primary-cta-button:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.primary-cta-button mat-icon {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.stats-bar {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 20px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05), 0 4px 12px rgba(0, 0, 0, 0.03);\n  padding: 24px 32px;\n  margin-bottom: 48px;\n}\n:host-context(.dark) .stats-bar {\n  background: rgba(30, 41, 59, 0.8);\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 20px;\n}\n@media (min-width: 768px) {\n  .stats-bar {\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    gap: 0;\n  }\n}\n.stat-item {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 0 24px;\n}\n.stat-divider {\n  display: none;\n  width: 1px;\n  height: 40px;\n  background: #e2e8f0;\n}\n:host-context(.dark) .stat-divider {\n  background: rgba(255, 255, 255, 0.08);\n}\n@media (min-width: 768px) {\n  .stat-divider {\n    display: block;\n  }\n}\n.stat-icon {\n  width: 44px;\n  height: 44px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(99, 102, 241, 0.1);\n  border-radius: 12px;\n}\n:host-context(.dark) .stat-icon {\n  background: rgba(99, 102, 241, 0.2);\n}\n.stat-icon mat-icon {\n  color: #8b5cf6;\n  font-size: 22px;\n  width: 22px;\n  height: 22px;\n}\n.stat-content {\n  display: flex;\n  flex-direction: column;\n}\n.stat-value {\n  font-size: 16px;\n  font-weight: 700;\n  color: #0f172a;\n}\n:host-context(.dark) .stat-value {\n  color: #ffffff;\n}\n.stat-label {\n  font-size: 13px;\n  color: #94a3b8;\n}\n:host-context(.dark) .stat-label {\n  color: rgba(255, 255, 255, 0.4);\n}\n.main-grid {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 32px;\n}\n@media (min-width: 1024px) {\n  .main-grid {\n    grid-template-columns: 1fr 380px;\n  }\n}\n.section-card {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 20px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05), 0 4px 12px rgba(0, 0, 0, 0.03);\n  padding: 32px;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  min-height: 400px;\n}\n:host-context(.dark) .section-card {\n  background: rgba(30, 41, 59, 0.8);\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 20px;\n}\n.section-header {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  margin-bottom: 32px;\n  padding-bottom: 24px;\n  border-bottom: 1px solid #e2e8f0;\n}\n:host-context(.dark) .section-header {\n  border-bottom-color: rgba(255, 255, 255, 0.08);\n}\n@media (min-width: 768px) {\n  .section-header {\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n  }\n}\n.section-title-wrapper {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.section-icon {\n  width: 48px;\n  height: 48px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #3b82f6 0%,\n      #6366f1 100%);\n  border-radius: 14px;\n  box-shadow: 0 8px 32px rgba(59, 130, 246, 0.3);\n}\n.section-icon mat-icon {\n  color: white;\n  font-size: 24px;\n  width: 24px;\n  height: 24px;\n}\n.section-title {\n  font-size: 22px;\n  font-weight: 700;\n  color: #0f172a;\n  margin-bottom: 4px;\n}\n:host-context(.dark) .section-title {\n  color: #ffffff;\n}\n.section-subtitle {\n  font-size: 14px;\n  color: #94a3b8;\n}\n:host-context(.dark) .section-subtitle {\n  color: rgba(255, 255, 255, 0.4);\n}\n.add-card-button {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 24px;\n  background: transparent;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  color: #0f172a;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n:host-context(.dark) .add-card-button {\n  border-color: rgba(255, 255, 255, 0.08);\n  color: #ffffff;\n}\n.add-card-button:hover:not(:disabled) {\n  background: rgba(99, 102, 241, 0.08);\n  border-color: rgba(99, 102, 241, 0.3);\n  color: #8b5cf6;\n  transform: translateY(-1px);\n}\n.add-card-button:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.add-card-button mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.loading-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 20px;\n}\n.loading-spinner {\n  margin-bottom: 20px;\n}\n.loading-spinner ::ng-deep .mat-mdc-progress-spinner {\n  --mdc-circular-progress-active-indicator-color: #8b5cf6;\n}\n.loading-text {\n  font-size: 14px;\n  color: #94a3b8;\n}\n:host-context(.dark) .loading-text {\n  color: rgba(255, 255, 255, 0.4);\n}\n.error-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 20px;\n  text-align: center;\n}\n.error-icon {\n  font-size: 48px;\n  width: 48px;\n  height: 48px;\n  color: #ef4444;\n  margin-bottom: 16px;\n}\n.error-text {\n  font-size: 14px;\n  color: #475569;\n  margin-bottom: 20px;\n}\n:host-context(.dark) .error-text {\n  color: rgba(255, 255, 255, 0.7);\n}\n.retry-button {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 20px;\n  background: rgba(239, 68, 68, 0.08);\n  border: 1px solid rgba(239, 68, 68, 0.2);\n  border-radius: 10px;\n  color: #ef4444;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.retry-button:hover {\n  background: rgba(239, 68, 68, 0.15);\n  border-color: rgba(239, 68, 68, 0.3);\n}\n.retry-button mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 20px;\n  text-align: center;\n}\n.empty-illustration {\n  margin-bottom: 24px;\n}\n.empty-card-visual {\n  width: 100px;\n  height: 100px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(99, 102, 241, 0.08),\n      rgba(139, 92, 246, 0.08));\n  border: 2px dashed rgba(99, 102, 241, 0.3);\n  border-radius: 24px;\n  animation: pulse 2s ease-in-out infinite;\n}\n:host-context(.dark) .empty-card-visual {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(99, 102, 241, 0.15),\n      rgba(139, 92, 246, 0.15));\n  border-color: rgba(139, 92, 246, 0.4);\n}\n@keyframes pulse {\n  0%, 100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n  50% {\n    opacity: 0.7;\n    transform: scale(0.98);\n  }\n}\n.empty-icon {\n  font-size: 40px;\n  width: 40px;\n  height: 40px;\n  color: #94a3b8;\n}\n:host-context(.dark) .empty-icon {\n  color: rgba(255, 255, 255, 0.4);\n}\n.empty-title {\n  font-size: 18px;\n  font-weight: 600;\n  color: #0f172a;\n  margin-bottom: 8px;\n}\n:host-context(.dark) .empty-title {\n  color: #ffffff;\n}\n.empty-subtitle {\n  font-size: 14px;\n  color: #94a3b8;\n  margin-bottom: 24px;\n  max-width: 280px;\n}\n:host-context(.dark) .empty-subtitle {\n  color: rgba(255, 255, 255, 0.4);\n}\n.cards-list {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.card-item {\n  display: block;\n  animation: slideInUp 0.4s ease-out forwards;\n  animation-fill-mode: both;\n}\n@keyframes slideInUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.sidebar {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.sidebar-card {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 20px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05), 0 4px 12px rgba(0, 0, 0, 0.03);\n  padding: 24px;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n:host-context(.dark) .sidebar-card {\n  background: rgba(30, 41, 59, 0.8);\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 20px;\n}\n.sidebar-card:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);\n}\n:host-context(.dark) .sidebar-card:hover {\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);\n}\n.sidebar-card-header {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 20px;\n}\n.sidebar-card-icon {\n  width: 44px;\n  height: 44px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 12px;\n}\n.sidebar-card-icon mat-icon {\n  font-size: 22px;\n  width: 22px;\n  height: 22px;\n  color: white;\n}\n.sidebar-card-icon.auto-recharge-icon {\n  background:\n    linear-gradient(\n      135deg,\n      #10b981 0%,\n      #059669 100%);\n  box-shadow: 0 4px 16px rgba(16, 185, 129, 0.3);\n}\n.sidebar-card-icon.quick-actions-icon {\n  background:\n    linear-gradient(\n      135deg,\n      #f59e0b,\n      #f97316);\n  box-shadow: 0 4px 16px rgba(245, 158, 11, 0.3);\n}\n.sidebar-card-title {\n  font-size: 18px;\n  font-weight: 700;\n  color: #0f172a;\n  margin-bottom: 4px;\n}\n:host-context(.dark) .sidebar-card-title {\n  color: #ffffff;\n}\n.sidebar-card-subtitle {\n  font-size: 13px;\n  color: #94a3b8;\n}\n:host-context(.dark) .sidebar-card-subtitle {\n  color: rgba(255, 255, 255, 0.4);\n}\n.status-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 6px 14px;\n  border-radius: 100px;\n  font-size: 13px;\n  font-weight: 600;\n  margin-bottom: 16px;\n}\n.status-badge.active {\n  background: rgba(16, 185, 129, 0.1);\n  color: #10b981;\n}\n:host-context(.dark) .status-badge.active {\n  background: rgba(16, 185, 129, 0.15);\n}\n.status-badge.inactive {\n  background: rgba(148, 163, 184, 0.1);\n  color: #94a3b8;\n}\n:host-context(.dark) .status-badge.inactive {\n  background: rgba(255, 255, 255, 0.08);\n  color: rgba(255, 255, 255, 0.4);\n}\n.status-dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n}\n.active .status-dot {\n  background: #10b981;\n  box-shadow: 0 0 8px rgba(16, 185, 129, 0.6);\n}\n.inactive .status-dot {\n  background: #94a3b8;\n}\n:host-context(.dark) .inactive .status-dot {\n  background: rgba(255, 255, 255, 0.4);\n}\n.config-details {\n  background: rgba(16, 185, 129, 0.06);\n  border-radius: 12px;\n  padding: 16px;\n  margin-bottom: 20px;\n}\n:host-context(.dark) .config-details {\n  background: rgba(16, 185, 129, 0.1);\n}\n.config-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 8px 0;\n}\n.config-item:not(:last-child) {\n  border-bottom: 1px solid rgba(16, 185, 129, 0.1);\n}\n:host-context(.dark) .config-item:not(:last-child) {\n  border-bottom-color: rgba(16, 185, 129, 0.15);\n}\n.config-label {\n  font-size: 13px;\n  color: #475569;\n}\n:host-context(.dark) .config-label {\n  color: rgba(255, 255, 255, 0.7);\n}\n.config-value {\n  font-size: 14px;\n  font-weight: 600;\n  color: #10b981;\n}\n.auto-recharge-inactive {\n  margin-bottom: 20px;\n}\n.inactive-text {\n  font-size: 14px;\n  color: #94a3b8;\n  line-height: 1.5;\n}\n:host-context(.dark) .inactive-text {\n  color: rgba(255, 255, 255, 0.4);\n}\n.sidebar-action-button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  width: 100%;\n  padding: 12px 20px;\n  background: rgba(99, 102, 241, 0.06);\n  border: 1px solid rgba(99, 102, 241, 0.15);\n  border-radius: 12px;\n  color: #8b5cf6;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n:host-context(.dark) .sidebar-action-button {\n  background: rgba(99, 102, 241, 0.1);\n  border-color: rgba(99, 102, 241, 0.2);\n}\n.sidebar-action-button:hover:not(:disabled) {\n  background: rgba(99, 102, 241, 0.12);\n  border-color: rgba(99, 102, 241, 0.3);\n  transform: translateY(-1px);\n}\n.sidebar-action-button:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.sidebar-action-button mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.quick-actions-list {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.quick-action-item {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  width: 100%;\n  padding: 14px 16px;\n  background: rgba(0, 0, 0, 0.02);\n  border: 1px solid transparent;\n  border-radius: 12px;\n  color: #0f172a;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  text-align: left;\n}\n:host-context(.dark) .quick-action-item {\n  background: rgba(255, 255, 255, 0.03);\n  color: #ffffff;\n}\n.quick-action-item:hover:not(:disabled) {\n  background: rgba(99, 102, 241, 0.06);\n  border-color: rgba(99, 102, 241, 0.15);\n}\n:host-context(.dark) .quick-action-item:hover:not(:disabled) {\n  background: rgba(255, 255, 255, 0.08);\n  border-color: rgba(255, 255, 255, 0.08);\n}\n.quick-action-item:hover:not(:disabled) .action-arrow {\n  transform: translateX(4px);\n  opacity: 1;\n}\n.quick-action-item:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.quick-action-item span {\n  flex: 1;\n}\n.quick-action-item .action-arrow {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: #94a3b8;\n  opacity: 0.5;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n:host-context(.dark) .quick-action-item .action-arrow {\n  color: rgba(255, 255, 255, 0.4);\n}\n.quick-action-icon {\n  width: 36px;\n  height: 36px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 10px;\n}\n.quick-action-icon mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: white;\n}\n.quick-action-icon.buy-icon {\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1 0%,\n      #8b5cf6 50%,\n      #a855f7 100%);\n}\n.quick-action-icon.card-icon {\n  background:\n    linear-gradient(\n      135deg,\n      #3b82f6 0%,\n      #6366f1 100%);\n}\n.quick-action-icon.refresh-icon {\n  background:\n    linear-gradient(\n      135deg,\n      #06b6d4,\n      #0891b2);\n}\n.pricing-card {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(99, 102, 241, 0.05),\n      rgba(139, 92, 246, 0.05));\n  border-color: rgba(99, 102, 241, 0.15);\n}\n:host-context(.dark) .pricing-card {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(99, 102, 241, 0.1),\n      rgba(139, 92, 246, 0.1));\n  border-color: rgba(139, 92, 246, 0.2);\n}\n.pricing-header {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 16px;\n}\n.pricing-header .pricing-icon {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  color: #8b5cf6;\n}\n.pricing-header span {\n  font-size: 14px;\n  font-weight: 600;\n  color: #8b5cf6;\n}\n.pricing-content .pricing-text {\n  font-size: 14px;\n  color: #475569;\n  line-height: 1.6;\n  margin-bottom: 20px;\n}\n:host-context(.dark) .pricing-content .pricing-text {\n  color: rgba(255, 255, 255, 0.7);\n}\n.pricing-content .pricing-text strong {\n  color: #0f172a;\n}\n:host-context(.dark) .pricing-content .pricing-text strong {\n  color: #ffffff;\n}\n.pricing-tiers-skeleton {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 8px;\n  min-height: 72px;\n}\n.pricing-tier-skeleton-bar {\n  height: 56px;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      90deg,\n      rgba(0, 0, 0, 0.06) 0%,\n      rgba(0, 0, 0, 0.08) 50%,\n      rgba(0, 0, 0, 0.06) 100%);\n  animation: pricing-tier-shimmer 1.2s ease-in-out infinite;\n}\n:host-context(.dark) .pricing-tier-skeleton-bar {\n  background:\n    linear-gradient(\n      90deg,\n      rgba(255, 255, 255, 0.06) 0%,\n      rgba(255, 255, 255, 0.1) 50%,\n      rgba(255, 255, 255, 0.06) 100%);\n}\n@keyframes pricing-tier-shimmer {\n  0%, 100% {\n    opacity: 0.6;\n  }\n  50% {\n    opacity: 1;\n  }\n}\n.pricing-tiers {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 8px;\n}\n.tier {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 16px 8px;\n  background: rgba(0, 0, 0, 0.02);\n  border: 1px solid transparent;\n  border-radius: 12px;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  position: relative;\n}\n:host-context(.dark) .tier {\n  background: rgba(255, 255, 255, 0.03);\n}\n.tier:hover {\n  background: rgba(99, 102, 241, 0.06);\n  border-color: rgba(99, 102, 241, 0.15);\n}\n:host-context(.dark) .tier:hover {\n  background: rgba(255, 255, 255, 0.06);\n  border-color: rgba(255, 255, 255, 0.08);\n}\n.tier.popular {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(99, 102, 241, 0.1),\n      rgba(139, 92, 246, 0.1));\n  border-color: rgba(99, 102, 241, 0.25);\n}\n:host-context(.dark) .tier.popular {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(99, 102, 241, 0.15),\n      rgba(139, 92, 246, 0.15));\n  border-color: rgba(139, 92, 246, 0.3);\n}\n.tier .tier-badge {\n  position: absolute;\n  top: -8px;\n  left: 50%;\n  transform: translateX(-50%);\n  padding: 2px 8px;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1 0%,\n      #8b5cf6 50%,\n      #a855f7 100%);\n  border-radius: 100px;\n  font-size: 9px;\n  font-weight: 700;\n  color: white;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  white-space: nowrap;\n}\n.tier .tier-amount {\n  font-size: 16px;\n  font-weight: 700;\n  color: #0f172a;\n  margin-bottom: 4px;\n}\n:host-context(.dark) .tier .tier-amount {\n  color: #ffffff;\n}\n.tier .tier-label {\n  font-size: 11px;\n  color: #94a3b8;\n}\n:host-context(.dark) .tier .tier-label {\n  color: rgba(255, 255, 255, 0.4);\n}\n.add-credits-container mat-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=add-credits.component.css.map */\n'], encapsulation: 2 });
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
      RouterModule
    ], encapsulation: ViewEncapsulation.None, template: `<div class="add-credits-container">
    <!-- Subtle Background Pattern -->
    <div class="bg-pattern"></div>

    <div class="content-wrapper">
        <!-- Hero Section with Balance -->
        <div class="hero-section">
            <div class="hero-content">
                <div class="hero-text">
                    <span class="badge">
                        <mat-icon class="badge-icon">bolt</mat-icon>
                        {{ 'addCredits.hero.badge' | transloco }}
                    </span>
                    <h1 class="hero-title">{{ 'addCredits.hero.title' | transloco }}</h1>
                    <p class="hero-subtitle">
                        {{ 'addCredits.hero.subtitle' | transloco }}
                    </p>
                </div>

                <!-- Credit Balance Card -->
                <div class="balance-card">
                    <div class="balance-card-glow"></div>
                    <div class="balance-card-content">
                        <div class="balance-header">
                            <div class="balance-icon-wrapper">
                                <mat-icon class="balance-icon">account_balance_wallet</mat-icon>
                            </div>
                            <span class="balance-label">{{
                                'addCredits.availableCredits' | transloco
                            }}</span>
                        </div>
                        <div class="balance-amount">
                            <span class="amount-value">{{
                                balance()?.totalCredits || 0 | number: '1.2-2'
                            }}</span>
                            <span class="amount-currency">{{
                                'userMenu.credits' | transloco | lowercase
                            }}</span>
                        </div>
                        <div class="balance-action">
                            <button
                                class="primary-cta-button"
                                (click)="openPurchaseCreditsDialog()"
                                [disabled]="loading()"
                            >
                                <span>{{ 'addCredits.purchaseCredits' | transloco }}</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Main Content Grid -->
        <div class="main-grid">
            <!-- Payment Methods Section -->
            <div class="payment-section">
                <div class="section-card">
                    <div class="section-header">
                        <div class="section-title-wrapper">
                            <div class="section-icon">
                                <mat-icon>credit_card</mat-icon>
                            </div>
                            <div>
                                <h2 class="section-title">
                                    {{ 'addCredits.paymentMethods.title' | transloco }}
                                </h2>
                                <p class="section-subtitle">
                                    {{ 'addCredits.paymentMethods.manage' | transloco }}
                                </p>
                            </div>
                        </div>
                        <button
                            class="add-card-button"
                            (click)="openAddCardDialog()"
                            [disabled]="loading()"
                        >
                            <mat-icon>add</mat-icon>
                            <span>{{ 'addCredits.addCard' | transloco }}</span>
                        </button>
                    </div>

                    <!-- Loading State -->
                    <div *ngIf="loading()" class="loading-state">
                        <div class="loading-spinner">
                            <mat-spinner diameter="48"></mat-spinner>
                        </div>
                        <p class="loading-text">
                            {{ 'addCredits.paymentMethods.manage' | transloco }}...
                        </p>
                    </div>

                    <!-- Error State -->
                    <div *ngIf="error() && !loading()" class="error-state">
                        <mat-icon class="error-icon">error_outline</mat-icon>
                        <p class="error-text">{{ error() }}</p>
                        <button class="retry-button" (click)="loadData()">
                            <mat-icon>refresh</mat-icon>
                            {{ 'settings.profile.save_error' | transloco }}
                        </button>
                    </div>

                    <!-- Empty State -->
                    <div *ngIf="!loading() && !error() && !hasCards()" class="empty-state">
                        <div class="empty-illustration">
                            <div class="empty-card-visual">
                                <mat-icon class="empty-icon">credit_card_off</mat-icon>
                            </div>
                        </div>
                        <h3 class="empty-title">{{ 'addCredits.noCards' | transloco }}</h3>
                        <p class="empty-subtitle">{{ 'addCredits.noCardsDesc' | transloco }}</p>
                        <button class="primary-cta-button" (click)="openAddCardDialog()">
                            <mat-icon>add</mat-icon>
                            <span>{{ 'addCredits.addCard' | transloco }}</span>
                        </button>
                    </div>

                    <!-- Cards List -->
                    <div *ngIf="!loading() && !error() && hasCards()" class="cards-list">
                        <app-payment-card
                            *ngFor="let card of cards(); let i = index"
                            [card]="card"
                            [isDefault]="card.isDefault"
                            (setDefault)="onCardSetDefault($event)"
                            (delete)="onCardDeleted($event)"
                            class="card-item"
                            [style.animation-delay]="i * 100 + 'ms'"
                        ></app-payment-card>
                    </div>
                </div>
            </div>

            <!-- Right Sidebar -->
            <div class="sidebar">
                <!-- Auto-Recharge Card -->
                <div class="sidebar-card auto-recharge-card">
                    <div class="sidebar-card-header">
                        <div class="sidebar-card-icon auto-recharge-icon">
                            <mat-icon>autorenew</mat-icon>
                        </div>
                        <div>
                            <h3 class="sidebar-card-title">
                                {{ 'addCredits.autoRecharge.title' | transloco }}
                            </h3>
                            <p class="sidebar-card-subtitle">
                                {{ 'addCredits.autoRecharge.subtitle' | transloco }}
                            </p>
                        </div>
                    </div>

                    <div *ngIf="autoRechargeConfig()?.hasAutoCharge" class="auto-recharge-active">
                        <div class="status-badge active">
                            <span class="status-dot"></span>
                            {{ 'addCredits.autoRecharge.status.active' | transloco }}
                        </div>
                        <div class="config-details">
                            <div class="config-item">
                                <span class="config-label">{{
                                    'addCredits.autoRecharge.dialog.balanceThreshold' | transloco
                                }}</span>
                                <span class="config-value"
                                    >{{ autoRechargeConfig()?.minThreshold }} credits</span
                                >
                            </div>
                            <div class="config-item">
                                <span class="config-label">{{
                                    'addCredits.autoRecharge.dialog.rechargeAmount' | transloco
                                }}</span>
                                <span class="config-value"
                                    >{{ autoRechargeConfig()?.minRecharge }} credits</span
                                >
                            </div>
                        </div>
                    </div>

                    <div
                        *ngIf="!autoRechargeConfig()?.hasAutoCharge"
                        class="auto-recharge-inactive"
                    >
                        <div class="status-badge inactive">
                            <span class="status-dot"></span>
                            {{ 'addCredits.autoRecharge.status.inactive' | transloco }}
                        </div>
                        <p class="inactive-text">
                            {{ 'addCredits.autoRecharge.description' | transloco }}
                        </p>
                    </div>

                    <button
                        class="sidebar-action-button"
                        (click)="openAutoRechargeSettings()"
                        [disabled]="loading()"
                    >
                        <mat-icon>settings</mat-icon>
                        <span>{{ 'addCredits.autoRecharge.configure' | transloco }}</span>
                    </button>
                </div>

                <!-- Subscription Plans Info Card -->
                <div class="sidebar-card pricing-card">
                    <div class="pricing-header">
                        <mat-icon class="pricing-icon">verified</mat-icon>
                        <span>{{ 'addCredits.subscriptionPlans.title' | transloco }}</span>
                    </div>
                    <div class="pricing-content">
                        <p class="pricing-text">
                            {{ 'addCredits.subscriptionPlans.description' | transloco }}
                        </p>
                        <div class="pricing-tiers-skeleton" *ngIf="pricingPlansLoading()">
                            <div class="pricing-tier-skeleton-bar"></div>
                            <div class="pricing-tier-skeleton-bar"></div>
                            <div class="pricing-tier-skeleton-bar"></div>
                        </div>
                        <div
                            class="pricing-tiers"
                            *ngIf="!pricingPlansLoading() && sidebarPlanTiers().length > 0"
                            [ngStyle]="{
                                'grid-template-columns':
                                    'repeat(' + sidebarPlanTiers().length + ', 1fr)',
                            }"
                        >
                            <div
                                class="tier"
                                *ngFor="let tier of sidebarPlanTiers(); trackBy: trackBySidebarTier"
                                [class.popular]="tier.isBestValue"
                            >
                                <span class="tier-badge" *ngIf="tier.isBestValue">{{
                                    'addCredits.subscriptionPlans.bestValue' | transloco
                                }}</span>
                                <span class="tier-amount"
                                    >\${{ tier.plan.amount | number: '1.0-0' }}</span
                                >
                                <span class="tier-label">{{ tier.label }}</span>
                            </div>
                        </div>
                        <button
                            class="sidebar-action-button mt-4"
                            [routerLink]="['/subscription-plans']"
                        >
                            <span>{{
                                'addCredits.subscriptionPlans.viewAllPlans' | transloco
                            }}</span>
                            <mat-icon>arrow_forward</mat-icon>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`, styles: ['/* src/app/modules/add-credits/add-credits.component.scss */\n.add-credits-container {\n  width: 100% !important;\n  min-height: 100vh;\n  background: #f8fafc;\n  position: relative;\n  overflow: hidden;\n}\n:host-context(.dark) .add-credits-container {\n  background: #0f172a;\n}\n.bg-pattern {\n  position: absolute;\n  inset: 0;\n  background-image:\n    radial-gradient(\n      circle at 20% 20%,\n      rgba(99, 102, 241, 0.05) 0%,\n      transparent 50%),\n    radial-gradient(\n      circle at 80% 80%,\n      rgba(139, 92, 246, 0.05) 0%,\n      transparent 50%);\n  pointer-events: none;\n}\n:host-context(.dark) .bg-pattern {\n  background-image:\n    radial-gradient(\n      circle at 20% 20%,\n      rgba(99, 102, 241, 0.15) 0%,\n      transparent 50%),\n    radial-gradient(\n      circle at 80% 80%,\n      rgba(139, 92, 246, 0.15) 0%,\n      transparent 50%);\n}\n.content-wrapper {\n  position: relative;\n  z-index: 1;\n  width: 100%;\n  padding: 40px 24px;\n}\n@media (min-width: 768px) {\n  .content-wrapper {\n    padding: 48px 48px;\n  }\n}\n@media (min-width: 1280px) {\n  .content-wrapper {\n    padding: 48px 64px;\n  }\n}\n.hero-section {\n  margin-bottom: 48px;\n}\n.hero-content {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 40px;\n  align-items: center;\n}\n@media (min-width: 1024px) {\n  .hero-content {\n    grid-template-columns: 1fr 400px;\n    gap: 60px;\n  }\n}\n.hero-text .badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 16px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(99, 102, 241, 0.1),\n      rgba(139, 92, 246, 0.1));\n  border: 1px solid rgba(99, 102, 241, 0.2);\n  border-radius: 100px;\n  color: #8b5cf6;\n  font-size: 14px;\n  font-weight: 600;\n  margin-bottom: 24px;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n:host-context(.dark) .hero-text .badge {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(99, 102, 241, 0.2),\n      rgba(139, 92, 246, 0.2));\n  border-color: rgba(139, 92, 246, 0.3);\n}\n.hero-text .badge .badge-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.hero-text .hero-title {\n  font-size: 36px;\n  font-weight: 800;\n  color: #0f172a;\n  margin-bottom: 16px;\n  line-height: 1.2;\n}\n:host-context(.dark) .hero-text .hero-title {\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff 0%,\n      rgba(255, 255, 255, 0.8) 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n@media (min-width: 768px) {\n  .hero-text .hero-title {\n    font-size: 48px;\n  }\n}\n.hero-text .hero-subtitle {\n  font-size: 18px;\n  color: #475569;\n  line-height: 1.7;\n  max-width: 500px;\n}\n:host-context(.dark) .hero-text .hero-subtitle {\n  color: rgba(255, 255, 255, 0.7);\n}\n.balance-card {\n  position: relative;\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 20px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05), 0 4px 12px rgba(0, 0, 0, 0.03);\n  padding: 32px;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n:host-context(.dark) .balance-card {\n  background: rgba(30, 41, 59, 0.8);\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 20px;\n}\n.balance-card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 12px 40px rgba(99, 102, 241, 0.15);\n}\n:host-context(.dark) .balance-card:hover {\n  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);\n}\n.balance-card-glow {\n  position: absolute;\n  inset: -1px;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1 0%,\n      #8b5cf6 50%,\n      #a855f7 100%);\n  border-radius: 21px;\n  opacity: 0;\n  z-index: -1;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.balance-card:hover .balance-card-glow {\n  opacity: 0.15;\n  filter: blur(20px);\n}\n:host-context(.dark) .balance-card:hover .balance-card-glow {\n  opacity: 0.25;\n}\n.balance-card-content {\n  position: relative;\n}\n.balance-header {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 24px;\n}\n.balance-icon-wrapper {\n  width: 48px;\n  height: 48px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1 0%,\n      #8b5cf6 50%,\n      #a855f7 100%);\n  border-radius: 14px;\n  box-shadow: 0 8px 32px rgba(139, 92, 246, 0.3);\n}\n.balance-icon {\n  color: white;\n  font-size: 24px;\n  width: 24px;\n  height: 24px;\n}\n.balance-label {\n  font-size: 14px;\n  font-weight: 600;\n  color: #94a3b8;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n:host-context(.dark) .balance-label {\n  color: rgba(255, 255, 255, 0.4);\n}\n.balance-amount {\n  margin-bottom: 28px;\n}\n.amount-value {\n  font-size: 48px;\n  font-weight: 800;\n  color: #0f172a;\n  display: block;\n  line-height: 1;\n  margin-bottom: 8px;\n}\n:host-context(.dark) .amount-value {\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff 0%,\n      rgba(255, 255, 255, 0.85) 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.amount-currency {\n  font-size: 16px;\n  color: #94a3b8;\n  font-weight: 500;\n}\n:host-context(.dark) .amount-currency {\n  color: rgba(255, 255, 255, 0.4);\n}\n.balance-action {\n  width: 100%;\n}\n.primary-cta-button {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  width: 100%;\n  padding: 16px 32px;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1 0%,\n      #8b5cf6 50%,\n      #a855f7 100%);\n  border: none;\n  border-radius: 14px;\n  color: white;\n  font-size: 16px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  position: relative;\n  overflow: hidden;\n}\n.primary-cta-button::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.2) 0%,\n      transparent 50%);\n  opacity: 0;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.primary-cta-button:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 12px 24px rgba(99, 102, 241, 0.35);\n}\n.primary-cta-button:hover:not(:disabled)::before {\n  opacity: 1;\n}\n.primary-cta-button:active:not(:disabled) {\n  transform: translateY(0);\n}\n.primary-cta-button:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.primary-cta-button mat-icon {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.stats-bar {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 20px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05), 0 4px 12px rgba(0, 0, 0, 0.03);\n  padding: 24px 32px;\n  margin-bottom: 48px;\n}\n:host-context(.dark) .stats-bar {\n  background: rgba(30, 41, 59, 0.8);\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 20px;\n}\n@media (min-width: 768px) {\n  .stats-bar {\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    gap: 0;\n  }\n}\n.stat-item {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 0 24px;\n}\n.stat-divider {\n  display: none;\n  width: 1px;\n  height: 40px;\n  background: #e2e8f0;\n}\n:host-context(.dark) .stat-divider {\n  background: rgba(255, 255, 255, 0.08);\n}\n@media (min-width: 768px) {\n  .stat-divider {\n    display: block;\n  }\n}\n.stat-icon {\n  width: 44px;\n  height: 44px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(99, 102, 241, 0.1);\n  border-radius: 12px;\n}\n:host-context(.dark) .stat-icon {\n  background: rgba(99, 102, 241, 0.2);\n}\n.stat-icon mat-icon {\n  color: #8b5cf6;\n  font-size: 22px;\n  width: 22px;\n  height: 22px;\n}\n.stat-content {\n  display: flex;\n  flex-direction: column;\n}\n.stat-value {\n  font-size: 16px;\n  font-weight: 700;\n  color: #0f172a;\n}\n:host-context(.dark) .stat-value {\n  color: #ffffff;\n}\n.stat-label {\n  font-size: 13px;\n  color: #94a3b8;\n}\n:host-context(.dark) .stat-label {\n  color: rgba(255, 255, 255, 0.4);\n}\n.main-grid {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 32px;\n}\n@media (min-width: 1024px) {\n  .main-grid {\n    grid-template-columns: 1fr 380px;\n  }\n}\n.section-card {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 20px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05), 0 4px 12px rgba(0, 0, 0, 0.03);\n  padding: 32px;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  min-height: 400px;\n}\n:host-context(.dark) .section-card {\n  background: rgba(30, 41, 59, 0.8);\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 20px;\n}\n.section-header {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  margin-bottom: 32px;\n  padding-bottom: 24px;\n  border-bottom: 1px solid #e2e8f0;\n}\n:host-context(.dark) .section-header {\n  border-bottom-color: rgba(255, 255, 255, 0.08);\n}\n@media (min-width: 768px) {\n  .section-header {\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n  }\n}\n.section-title-wrapper {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.section-icon {\n  width: 48px;\n  height: 48px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #3b82f6 0%,\n      #6366f1 100%);\n  border-radius: 14px;\n  box-shadow: 0 8px 32px rgba(59, 130, 246, 0.3);\n}\n.section-icon mat-icon {\n  color: white;\n  font-size: 24px;\n  width: 24px;\n  height: 24px;\n}\n.section-title {\n  font-size: 22px;\n  font-weight: 700;\n  color: #0f172a;\n  margin-bottom: 4px;\n}\n:host-context(.dark) .section-title {\n  color: #ffffff;\n}\n.section-subtitle {\n  font-size: 14px;\n  color: #94a3b8;\n}\n:host-context(.dark) .section-subtitle {\n  color: rgba(255, 255, 255, 0.4);\n}\n.add-card-button {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 24px;\n  background: transparent;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  color: #0f172a;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n:host-context(.dark) .add-card-button {\n  border-color: rgba(255, 255, 255, 0.08);\n  color: #ffffff;\n}\n.add-card-button:hover:not(:disabled) {\n  background: rgba(99, 102, 241, 0.08);\n  border-color: rgba(99, 102, 241, 0.3);\n  color: #8b5cf6;\n  transform: translateY(-1px);\n}\n.add-card-button:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.add-card-button mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.loading-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 20px;\n}\n.loading-spinner {\n  margin-bottom: 20px;\n}\n.loading-spinner ::ng-deep .mat-mdc-progress-spinner {\n  --mdc-circular-progress-active-indicator-color: #8b5cf6;\n}\n.loading-text {\n  font-size: 14px;\n  color: #94a3b8;\n}\n:host-context(.dark) .loading-text {\n  color: rgba(255, 255, 255, 0.4);\n}\n.error-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 20px;\n  text-align: center;\n}\n.error-icon {\n  font-size: 48px;\n  width: 48px;\n  height: 48px;\n  color: #ef4444;\n  margin-bottom: 16px;\n}\n.error-text {\n  font-size: 14px;\n  color: #475569;\n  margin-bottom: 20px;\n}\n:host-context(.dark) .error-text {\n  color: rgba(255, 255, 255, 0.7);\n}\n.retry-button {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 20px;\n  background: rgba(239, 68, 68, 0.08);\n  border: 1px solid rgba(239, 68, 68, 0.2);\n  border-radius: 10px;\n  color: #ef4444;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.retry-button:hover {\n  background: rgba(239, 68, 68, 0.15);\n  border-color: rgba(239, 68, 68, 0.3);\n}\n.retry-button mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 20px;\n  text-align: center;\n}\n.empty-illustration {\n  margin-bottom: 24px;\n}\n.empty-card-visual {\n  width: 100px;\n  height: 100px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(99, 102, 241, 0.08),\n      rgba(139, 92, 246, 0.08));\n  border: 2px dashed rgba(99, 102, 241, 0.3);\n  border-radius: 24px;\n  animation: pulse 2s ease-in-out infinite;\n}\n:host-context(.dark) .empty-card-visual {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(99, 102, 241, 0.15),\n      rgba(139, 92, 246, 0.15));\n  border-color: rgba(139, 92, 246, 0.4);\n}\n@keyframes pulse {\n  0%, 100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n  50% {\n    opacity: 0.7;\n    transform: scale(0.98);\n  }\n}\n.empty-icon {\n  font-size: 40px;\n  width: 40px;\n  height: 40px;\n  color: #94a3b8;\n}\n:host-context(.dark) .empty-icon {\n  color: rgba(255, 255, 255, 0.4);\n}\n.empty-title {\n  font-size: 18px;\n  font-weight: 600;\n  color: #0f172a;\n  margin-bottom: 8px;\n}\n:host-context(.dark) .empty-title {\n  color: #ffffff;\n}\n.empty-subtitle {\n  font-size: 14px;\n  color: #94a3b8;\n  margin-bottom: 24px;\n  max-width: 280px;\n}\n:host-context(.dark) .empty-subtitle {\n  color: rgba(255, 255, 255, 0.4);\n}\n.cards-list {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.card-item {\n  display: block;\n  animation: slideInUp 0.4s ease-out forwards;\n  animation-fill-mode: both;\n}\n@keyframes slideInUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.sidebar {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.sidebar-card {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 20px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05), 0 4px 12px rgba(0, 0, 0, 0.03);\n  padding: 24px;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n:host-context(.dark) .sidebar-card {\n  background: rgba(30, 41, 59, 0.8);\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 20px;\n}\n.sidebar-card:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);\n}\n:host-context(.dark) .sidebar-card:hover {\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);\n}\n.sidebar-card-header {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 20px;\n}\n.sidebar-card-icon {\n  width: 44px;\n  height: 44px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 12px;\n}\n.sidebar-card-icon mat-icon {\n  font-size: 22px;\n  width: 22px;\n  height: 22px;\n  color: white;\n}\n.sidebar-card-icon.auto-recharge-icon {\n  background:\n    linear-gradient(\n      135deg,\n      #10b981 0%,\n      #059669 100%);\n  box-shadow: 0 4px 16px rgba(16, 185, 129, 0.3);\n}\n.sidebar-card-icon.quick-actions-icon {\n  background:\n    linear-gradient(\n      135deg,\n      #f59e0b,\n      #f97316);\n  box-shadow: 0 4px 16px rgba(245, 158, 11, 0.3);\n}\n.sidebar-card-title {\n  font-size: 18px;\n  font-weight: 700;\n  color: #0f172a;\n  margin-bottom: 4px;\n}\n:host-context(.dark) .sidebar-card-title {\n  color: #ffffff;\n}\n.sidebar-card-subtitle {\n  font-size: 13px;\n  color: #94a3b8;\n}\n:host-context(.dark) .sidebar-card-subtitle {\n  color: rgba(255, 255, 255, 0.4);\n}\n.status-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 6px 14px;\n  border-radius: 100px;\n  font-size: 13px;\n  font-weight: 600;\n  margin-bottom: 16px;\n}\n.status-badge.active {\n  background: rgba(16, 185, 129, 0.1);\n  color: #10b981;\n}\n:host-context(.dark) .status-badge.active {\n  background: rgba(16, 185, 129, 0.15);\n}\n.status-badge.inactive {\n  background: rgba(148, 163, 184, 0.1);\n  color: #94a3b8;\n}\n:host-context(.dark) .status-badge.inactive {\n  background: rgba(255, 255, 255, 0.08);\n  color: rgba(255, 255, 255, 0.4);\n}\n.status-dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n}\n.active .status-dot {\n  background: #10b981;\n  box-shadow: 0 0 8px rgba(16, 185, 129, 0.6);\n}\n.inactive .status-dot {\n  background: #94a3b8;\n}\n:host-context(.dark) .inactive .status-dot {\n  background: rgba(255, 255, 255, 0.4);\n}\n.config-details {\n  background: rgba(16, 185, 129, 0.06);\n  border-radius: 12px;\n  padding: 16px;\n  margin-bottom: 20px;\n}\n:host-context(.dark) .config-details {\n  background: rgba(16, 185, 129, 0.1);\n}\n.config-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 8px 0;\n}\n.config-item:not(:last-child) {\n  border-bottom: 1px solid rgba(16, 185, 129, 0.1);\n}\n:host-context(.dark) .config-item:not(:last-child) {\n  border-bottom-color: rgba(16, 185, 129, 0.15);\n}\n.config-label {\n  font-size: 13px;\n  color: #475569;\n}\n:host-context(.dark) .config-label {\n  color: rgba(255, 255, 255, 0.7);\n}\n.config-value {\n  font-size: 14px;\n  font-weight: 600;\n  color: #10b981;\n}\n.auto-recharge-inactive {\n  margin-bottom: 20px;\n}\n.inactive-text {\n  font-size: 14px;\n  color: #94a3b8;\n  line-height: 1.5;\n}\n:host-context(.dark) .inactive-text {\n  color: rgba(255, 255, 255, 0.4);\n}\n.sidebar-action-button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  width: 100%;\n  padding: 12px 20px;\n  background: rgba(99, 102, 241, 0.06);\n  border: 1px solid rgba(99, 102, 241, 0.15);\n  border-radius: 12px;\n  color: #8b5cf6;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n:host-context(.dark) .sidebar-action-button {\n  background: rgba(99, 102, 241, 0.1);\n  border-color: rgba(99, 102, 241, 0.2);\n}\n.sidebar-action-button:hover:not(:disabled) {\n  background: rgba(99, 102, 241, 0.12);\n  border-color: rgba(99, 102, 241, 0.3);\n  transform: translateY(-1px);\n}\n.sidebar-action-button:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.sidebar-action-button mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.quick-actions-list {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.quick-action-item {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  width: 100%;\n  padding: 14px 16px;\n  background: rgba(0, 0, 0, 0.02);\n  border: 1px solid transparent;\n  border-radius: 12px;\n  color: #0f172a;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  text-align: left;\n}\n:host-context(.dark) .quick-action-item {\n  background: rgba(255, 255, 255, 0.03);\n  color: #ffffff;\n}\n.quick-action-item:hover:not(:disabled) {\n  background: rgba(99, 102, 241, 0.06);\n  border-color: rgba(99, 102, 241, 0.15);\n}\n:host-context(.dark) .quick-action-item:hover:not(:disabled) {\n  background: rgba(255, 255, 255, 0.08);\n  border-color: rgba(255, 255, 255, 0.08);\n}\n.quick-action-item:hover:not(:disabled) .action-arrow {\n  transform: translateX(4px);\n  opacity: 1;\n}\n.quick-action-item:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.quick-action-item span {\n  flex: 1;\n}\n.quick-action-item .action-arrow {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: #94a3b8;\n  opacity: 0.5;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n:host-context(.dark) .quick-action-item .action-arrow {\n  color: rgba(255, 255, 255, 0.4);\n}\n.quick-action-icon {\n  width: 36px;\n  height: 36px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 10px;\n}\n.quick-action-icon mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: white;\n}\n.quick-action-icon.buy-icon {\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1 0%,\n      #8b5cf6 50%,\n      #a855f7 100%);\n}\n.quick-action-icon.card-icon {\n  background:\n    linear-gradient(\n      135deg,\n      #3b82f6 0%,\n      #6366f1 100%);\n}\n.quick-action-icon.refresh-icon {\n  background:\n    linear-gradient(\n      135deg,\n      #06b6d4,\n      #0891b2);\n}\n.pricing-card {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(99, 102, 241, 0.05),\n      rgba(139, 92, 246, 0.05));\n  border-color: rgba(99, 102, 241, 0.15);\n}\n:host-context(.dark) .pricing-card {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(99, 102, 241, 0.1),\n      rgba(139, 92, 246, 0.1));\n  border-color: rgba(139, 92, 246, 0.2);\n}\n.pricing-header {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 16px;\n}\n.pricing-header .pricing-icon {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  color: #8b5cf6;\n}\n.pricing-header span {\n  font-size: 14px;\n  font-weight: 600;\n  color: #8b5cf6;\n}\n.pricing-content .pricing-text {\n  font-size: 14px;\n  color: #475569;\n  line-height: 1.6;\n  margin-bottom: 20px;\n}\n:host-context(.dark) .pricing-content .pricing-text {\n  color: rgba(255, 255, 255, 0.7);\n}\n.pricing-content .pricing-text strong {\n  color: #0f172a;\n}\n:host-context(.dark) .pricing-content .pricing-text strong {\n  color: #ffffff;\n}\n.pricing-tiers-skeleton {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 8px;\n  min-height: 72px;\n}\n.pricing-tier-skeleton-bar {\n  height: 56px;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      90deg,\n      rgba(0, 0, 0, 0.06) 0%,\n      rgba(0, 0, 0, 0.08) 50%,\n      rgba(0, 0, 0, 0.06) 100%);\n  animation: pricing-tier-shimmer 1.2s ease-in-out infinite;\n}\n:host-context(.dark) .pricing-tier-skeleton-bar {\n  background:\n    linear-gradient(\n      90deg,\n      rgba(255, 255, 255, 0.06) 0%,\n      rgba(255, 255, 255, 0.1) 50%,\n      rgba(255, 255, 255, 0.06) 100%);\n}\n@keyframes pricing-tier-shimmer {\n  0%, 100% {\n    opacity: 0.6;\n  }\n  50% {\n    opacity: 1;\n  }\n}\n.pricing-tiers {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 8px;\n}\n.tier {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 16px 8px;\n  background: rgba(0, 0, 0, 0.02);\n  border: 1px solid transparent;\n  border-radius: 12px;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  position: relative;\n}\n:host-context(.dark) .tier {\n  background: rgba(255, 255, 255, 0.03);\n}\n.tier:hover {\n  background: rgba(99, 102, 241, 0.06);\n  border-color: rgba(99, 102, 241, 0.15);\n}\n:host-context(.dark) .tier:hover {\n  background: rgba(255, 255, 255, 0.06);\n  border-color: rgba(255, 255, 255, 0.08);\n}\n.tier.popular {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(99, 102, 241, 0.1),\n      rgba(139, 92, 246, 0.1));\n  border-color: rgba(99, 102, 241, 0.25);\n}\n:host-context(.dark) .tier.popular {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(99, 102, 241, 0.15),\n      rgba(139, 92, 246, 0.15));\n  border-color: rgba(139, 92, 246, 0.3);\n}\n.tier .tier-badge {\n  position: absolute;\n  top: -8px;\n  left: 50%;\n  transform: translateX(-50%);\n  padding: 2px 8px;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1 0%,\n      #8b5cf6 50%,\n      #a855f7 100%);\n  border-radius: 100px;\n  font-size: 9px;\n  font-weight: 700;\n  color: white;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  white-space: nowrap;\n}\n.tier .tier-amount {\n  font-size: 16px;\n  font-weight: 700;\n  color: #0f172a;\n  margin-bottom: 4px;\n}\n:host-context(.dark) .tier .tier-amount {\n  color: #ffffff;\n}\n.tier .tier-label {\n  font-size: 11px;\n  color: #94a3b8;\n}\n:host-context(.dark) .tier .tier-label {\n  color: rgba(255, 255, 255, 0.4);\n}\n.add-credits-container mat-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=add-credits.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddCreditsComponent, { className: "AddCreditsComponent", filePath: "src/app/modules/add-credits/add-credits.component.ts", lineNumber: 44 });
})();

// src/app/modules/add-credits/add-credits.routes.ts
var add_credits_routes_default = [
  {
    path: "",
    component: AddCreditsComponent
  }
];
export {
  add_credits_routes_default as default
};
//# sourceMappingURL=chunk-CVQRHZQJ.js.map
