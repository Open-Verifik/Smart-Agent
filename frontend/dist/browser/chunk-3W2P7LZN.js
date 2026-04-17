import {
  CountryService
} from "./chunk-GFJLSNKF.js";
import {
  AuthService
} from "./chunk-E7LVUBZB.js";
import {
  HttpWrapperService
} from "./chunk-LPSMXQSY.js";
import {
  MatInputModule
} from "./chunk-HZKTYM3F.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-EL6Z63TT.js";
import {
  SessionService,
  WalletEncryptionService
} from "./chunk-OVR3OJIF.js";
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef
} from "./chunk-KCV7S453.js";
import {
  Router
} from "./chunk-LHOHCIQM.js";
import {
  MatSelectModule
} from "./chunk-AY2HQ4EH.js";
import {
  MatFormFieldModule
} from "./chunk-3YVZWUPK.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-TX3AVWPC.js";
import {
  TranslocoModule,
  TranslocoPipe
} from "./chunk-VHMFS3U6.js";
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
  HostListener,
  Injectable,
  MatButton,
  MatButtonModule,
  NgForOf,
  NgIf,
  ViewChild,
  ViewEncapsulation,
  inject,
  setClassMetadata,
  signal,
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
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-YTOBX75K.js";
import {
  __async
} from "./chunk-KTESVR3Q.js";

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
   * Project Login to get real access token
   */
  projectLogin() {
    return this._httpWrapper.sendRequest("post", `${this._apiUrl}/v2/auth/project-login`, {});
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

// src/app/layout/common/auth-modal/auth-modal.component.ts
var _c0 = ["countryButton"];
var _c1 = (a0, a1) => ({ email: a0, phone: a1 });
function AuthModalComponent_div_5_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, ctx_r0.errorKey()));
  }
}
function AuthModalComponent_div_5_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function AuthModalComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275template(1, AuthModalComponent_div_5_span_1_Template, 3, 3, "span", 11)(2, AuthModalComponent_div_5_span_2_Template, 2, 1, "span", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.errorKey());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.errorKey() && ctx_r0.error());
  }
}
function AuthModalComponent_div_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 15);
    \u0275\u0275listener("click", function AuthModalComponent_div_6_ng_container_1_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.startEmailFlow());
    });
    \u0275\u0275elementStart(2, "mat-icon", 16);
    \u0275\u0275text(3, "mail");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 17);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 15);
    \u0275\u0275listener("click", function AuthModalComponent_div_6_ng_container_1_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.startPhoneFlow());
    });
    \u0275\u0275elementStart(8, "mat-icon", 16);
    \u0275\u0275text(9, "smartphone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 17);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "button", 15);
    \u0275\u0275listener("click", function AuthModalComponent_div_6_ng_container_1_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.startWhatsAppFlow());
    });
    \u0275\u0275elementStart(14, "mat-icon", 16);
    \u0275\u0275text(15, "message");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 17);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 18)(20, "div", 19);
    \u0275\u0275element(21, "div", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 21)(23, "span", 22);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 4, "authModal.choice.continueEmail"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 6, "authModal.choice.continueSMS"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 8, "authModal.choice.continueWhatsApp"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 10, "authModal.choice.or"));
  }
}
function AuthModalComponent_div_6_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 23);
    \u0275\u0275listener("click", function AuthModalComponent_div_6_ng_container_2_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.startWalletFlow());
    });
    \u0275\u0275elementStart(2, "div", 24)(3, "mat-icon", 16);
    \u0275\u0275text(4, "account_balance_wallet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 17);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 1, "authModal.choice.continueWallet"));
  }
}
function AuthModalComponent_div_6_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "div", 26)(2, "mat-icon", 27);
    \u0275\u0275text(3, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 28)(5, "span", 29);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 30);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 3, "authModal.walletConnected.title"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", (tmp_4_0 = ctx_r0.connectedWalletAddress()) == null ? null : tmp_4_0.substring(0, 6), "...", (tmp_4_0 = ctx_r0.connectedWalletAddress()) == null ? null : tmp_4_0.substring(38), " ");
  }
}
function AuthModalComponent_div_6_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "span", 32);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 33);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "authModal.choice.noAccount"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 4, "authModal.choice.signUp"));
  }
}
function AuthModalComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275template(1, AuthModalComponent_div_6_ng_container_1_Template, 26, 12, "ng-container", 11)(2, AuthModalComponent_div_6_ng_container_2_Template, 8, 3, "ng-container", 13)(3, AuthModalComponent_div_6_ng_template_3_Template, 10, 5, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(5, AuthModalComponent_div_6_div_5_Template, 7, 6, "div", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const connectedWallet_r4 = \u0275\u0275reference(4);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.hasWeb2Auth());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.connectedWalletAddress())("ngIfElse", connectedWallet_r4);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx_r0.hasWeb2Auth());
  }
}
function AuthModalComponent_div_7_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "authModal.emailInput.continue"));
  }
}
function AuthModalComponent_div_7_mat_progress_spinner_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-spinner", 44);
  }
}
function AuthModalComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 35)(2, "mat-icon", 36);
    \u0275\u0275text(3, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "p", 37);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 38)(7, "mat-icon", 39);
    \u0275\u0275text(8, "mail");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 40);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275listener("ngModelChange", function AuthModalComponent_div_7_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.email.set($event));
    })("keyup.enter", function AuthModalComponent_div_7_Template_input_keyup_enter_9_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.sendEmailOtp());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "button", 41);
    \u0275\u0275listener("click", function AuthModalComponent_div_7_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.sendEmailOtp());
    });
    \u0275\u0275template(12, AuthModalComponent_div_7_span_12_Template, 3, 3, "span", 11)(13, AuthModalComponent_div_7_mat_progress_spinner_13_Template, 1, 0, "mat-progress-spinner", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 43);
    \u0275\u0275listener("click", function AuthModalComponent_div_7_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setState("CHOICE"));
    });
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(5, 7, "authModal.emailInput.infoMessage"), \u0275\u0275sanitizeHtml);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngModel", ctx_r0.email())("placeholder", \u0275\u0275pipeBind1(10, 9, "authModal.emailInput.placeholder"));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r0.isEmailValid || ctx_r0.isLoading());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isLoading());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isLoading());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 11, "authModal.emailInput.back"), " ");
  }
}
function AuthModalComponent_div_8_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.selectedCountry().flag);
  }
}
function AuthModalComponent_div_8_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 54);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.selectedCountry().dialCode);
  }
}
function AuthModalComponent_div_8_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 55);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "authModal.phoneInput.selectCountry"));
  }
}
function AuthModalComponent_div_8_div_17_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 63);
    \u0275\u0275listener("click", function AuthModalComponent_div_8_div_17_button_8_Template_button_click_0_listener() {
      const country_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.selectCountry(country_r9));
    });
    \u0275\u0275elementStart(1, "span", 64);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 65)(4, "div", 66);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "span", 67);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_5_0;
    const country_r9 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("bg-blue-50", ((tmp_5_0 = ctx_r0.selectedCountry()) == null ? null : tmp_5_0.dialCode) === country_r9.dialCode);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(country_r9.flag);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", country_r9.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", country_r9.dialCode, " ");
  }
}
function AuthModalComponent_div_8_div_17_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "authModal.phoneInput.noCountries"), " ");
  }
}
function AuthModalComponent_div_8_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 56)(1, "div", 57)(2, "div", 38)(3, "mat-icon", 58);
    \u0275\u0275text(4, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 59);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275listener("input", function AuthModalComponent_div_8_div_17_Template_input_input_5_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onCountrySearchChange($event.target.value));
    })("click", function AuthModalComponent_div_8_div_17_Template_input_click_5_listener($event) {
      \u0275\u0275restoreView(_r7);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 60);
    \u0275\u0275template(8, AuthModalComponent_div_8_div_17_button_8_Template, 8, 5, "button", 61)(9, AuthModalComponent_div_8_div_17_div_9_Template, 3, 3, "div", 62);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("top", ctx_r0.dropdownPosition().top)("left", ctx_r0.dropdownPosition().left);
    \u0275\u0275advance(5);
    \u0275\u0275property("value", ctx_r0.countrySearchTerm())("placeholder", \u0275\u0275pipeBind1(6, 8, "authModal.phoneInput.searchCountry"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r0.filteredCountries());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.filteredCountries().length === 0);
  }
}
function AuthModalComponent_div_8_span_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "authModal.phoneInput.continue"));
  }
}
function AuthModalComponent_div_8_mat_progress_spinner_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-spinner", 44);
  }
}
function AuthModalComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 35)(2, "mat-icon", 36);
    \u0275\u0275text(3, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "p", 37);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 45)(8, "div", 46)(9, "button", 47, 1);
    \u0275\u0275listener("click", function AuthModalComponent_div_8_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.toggleCountryDropdown());
    });
    \u0275\u0275elementStart(11, "span", 48);
    \u0275\u0275template(12, AuthModalComponent_div_8_span_12_Template, 2, 1, "span", 11)(13, AuthModalComponent_div_8_span_13_Template, 2, 1, "span", 49)(14, AuthModalComponent_div_8_span_14_Template, 3, 3, "span", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "mat-icon", 51);
    \u0275\u0275text(16, "arrow_drop_down");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(17, AuthModalComponent_div_8_div_17_Template, 10, 10, "div", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "input", 53);
    \u0275\u0275pipe(19, "transloco");
    \u0275\u0275listener("input", function AuthModalComponent_div_8_Template_input_input_18_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onPhoneInput($event));
    })("keyup.enter", function AuthModalComponent_div_8_Template_input_keyup_enter_18_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.sendPhoneOtp());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "button", 41);
    \u0275\u0275listener("click", function AuthModalComponent_div_8_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.sendPhoneOtp());
    });
    \u0275\u0275template(21, AuthModalComponent_div_8_span_21_Template, 3, 3, "span", 11)(22, AuthModalComponent_div_8_mat_progress_spinner_22_Template, 1, 0, "mat-progress-spinner", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 43);
    \u0275\u0275listener("click", function AuthModalComponent_div_8_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setState("CHOICE"));
    });
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("innerHTML", ctx_r0.state() === "WHATSAPP_INPUT" ? \u0275\u0275pipeBind1(5, 11, "authModal.phoneInput.whatsappInfoMessage") : \u0275\u0275pipeBind1(6, 13, "authModal.phoneInput.infoMessage"), \u0275\u0275sanitizeHtml);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r0.selectedCountry());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.selectedCountry());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.selectedCountry());
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.isCountryDropdownOpen() && ctx_r0.dropdownPosition());
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r0.phone())("placeholder", \u0275\u0275pipeBind1(19, 15, "authModal.phoneInput.phonePlaceholder"));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r0.phone() || !ctx_r0.selectedCountry() || ctx_r0.isLoading());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isLoading());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isLoading());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(25, 17, "authModal.phoneInput.back"), " ");
  }
}
function AuthModalComponent_div_9_input_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 74);
    \u0275\u0275listener("input", function AuthModalComponent_div_9_input_9_Template_input_input_0_listener($event) {
      const i_r12 = \u0275\u0275restoreView(_r11).index;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onOtpInput($event, i_r12));
    })("keydown", function AuthModalComponent_div_9_input_9_Template_input_keydown_0_listener($event) {
      const i_r12 = \u0275\u0275restoreView(_r11).index;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onKeyDown($event, i_r12));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const digit_r13 = ctx.$implicit;
    const i_r12 = ctx.index;
    \u0275\u0275property("id", "otp-" + i_r12)("value", digit_r13);
  }
}
function AuthModalComponent_div_9_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "authModal.otpVerify.verify"));
  }
}
function AuthModalComponent_div_9_mat_progress_spinner_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-spinner", 44);
  }
}
function AuthModalComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 69)(1, "div", 70)(2, "h3", 71);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 32);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 72);
    \u0275\u0275template(9, AuthModalComponent_div_9_input_9_Template, 1, 2, "input", 73);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 41);
    \u0275\u0275listener("click", function AuthModalComponent_div_9_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.state() === "OTP_VERIFY_EMAIL" ? ctx_r0.verifyEmailOtp() : ctx_r0.verifyPhoneOtp());
    });
    \u0275\u0275template(11, AuthModalComponent_div_9_span_11_Template, 3, 3, "span", 11)(12, AuthModalComponent_div_9_mat_progress_spinner_12_Template, 1, 0, "mat-progress-spinner", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 43);
    \u0275\u0275listener("click", function AuthModalComponent_div_9_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setState("CHOICE"));
    });
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 7, "authModal.otpVerify.title"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(7, 9, ctx_r0.state() === "OTP_VERIFY_EMAIL" ? "authModal.otpVerify.emailMessage" : ctx_r0.state() === "OTP_VERIFY_WHATSAPP" ? "authModal.otpVerify.whatsappMessage" : "authModal.otpVerify.phoneMessage", \u0275\u0275pureFunction2(14, _c1, ctx_r0.email(), ctx_r0.phone())), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r0.otpArray());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.otpArray().join("").length !== 6 || ctx_r0.isLoading());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isLoading());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isLoading());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 12, "authModal.otpVerify.back"), " ");
  }
}
function AuthModalComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34)(1, "h3", 75);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 76);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 77)(8, "button", 78);
    \u0275\u0275listener("click", function AuthModalComponent_div_10_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.connectMetaMask());
    });
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "button", 79);
    \u0275\u0275listener("click", function AuthModalComponent_div_10_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.createAgentWallet());
    });
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "button", 43);
    \u0275\u0275listener("click", function AuthModalComponent_div_10_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.handleWalletBack());
    });
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 6, "authModal.walletConnect.title"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 8, "authModal.walletConnect.subtitle"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r0.isLoading());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 10, "authModal.walletConnect.metamask"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 12, "authModal.walletConnect.createAgent"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 14, "authModal.walletConnect.back"), " ");
  }
}
function AuthModalComponent_div_11_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 95);
    \u0275\u0275listener("click", function AuthModalComponent_div_11_button_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.encryptWithPasskey());
    });
    \u0275\u0275elementStart(1, "div", 91)(2, "mat-icon", 96);
    \u0275\u0275text(3, "fingerprint");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r0.isLoading());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 2, "authModal.walletEncrypt.createPasskey"));
  }
}
function AuthModalComponent_div_11_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 97)(1, "p", 98);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "authModal.walletEncrypt.notSupported"), " ");
  }
}
function AuthModalComponent_div_11_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 99);
    \u0275\u0275element(1, "mat-progress-spinner", 100);
    \u0275\u0275elementEnd();
  }
}
function AuthModalComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 69)(1, "div", 80)(2, "div", 81)(3, "mat-icon", 82);
    \u0275\u0275text(4, "account_balance_wallet");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 83);
    \u0275\u0275element(6, "span", 84);
    \u0275\u0275elementStart(7, "span", 85);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 86);
    \u0275\u0275element(10, "p", 87);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 88);
    \u0275\u0275template(13, AuthModalComponent_div_11_button_13_Template, 7, 4, "button", 89);
    \u0275\u0275elementStart(14, "button", 90);
    \u0275\u0275listener("click", function AuthModalComponent_div_11_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.usePINInstead());
    });
    \u0275\u0275elementStart(15, "div", 91)(16, "mat-icon", 92);
    \u0275\u0275text(17, "pin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 17);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "transloco");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(21, AuthModalComponent_div_11_div_21_Template, 4, 3, "div", 93)(22, AuthModalComponent_div_11_div_22_Template, 2, 0, "div", 94);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate2(" ", (tmp_1_0 = ctx_r0.tempWalletAddress()) == null ? null : tmp_1_0.substring(0, 6), "...", (tmp_1_0 = ctx_r0.tempWalletAddress()) == null ? null : tmp_1_0.substring(38), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(11, 8, "authModal.walletEncrypt.instruction"), \u0275\u0275sanitizeHtml);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.passkeySupported());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.isLoading());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(20, 10, "authModal.walletEncrypt.usePIN"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r0.passkeySupported());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isLoading());
  }
}
function AuthModalComponent_div_12_input_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 108);
    \u0275\u0275listener("input", function AuthModalComponent_div_12_input_18_Template_input_input_0_listener($event) {
      const i_r19 = \u0275\u0275restoreView(_r18).index;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onPinInput($event, i_r19));
    })("keydown", function AuthModalComponent_div_12_input_18_Template_input_keydown_0_listener($event) {
      const i_r19 = \u0275\u0275restoreView(_r18).index;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onPinKeyDown($event, i_r19));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const digit_r20 = ctx.$implicit;
    const i_r19 = ctx.index;
    \u0275\u0275property("id", "pin-" + i_r19)("value", digit_r20);
  }
}
function AuthModalComponent_div_12_span_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "authModal.pinSetup.encryptWallet"));
  }
}
function AuthModalComponent_div_12_mat_progress_spinner_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-spinner", 44);
  }
}
function AuthModalComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 69)(1, "div", 70)(2, "div", 101)(3, "mat-icon", 102);
    \u0275\u0275text(4, "pin");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "h3", 71);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 32);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 103)(12, "div", 104)(13, "mat-icon", 105);
    \u0275\u0275text(14, "warning");
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "p", 106);
    \u0275\u0275pipe(16, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 72);
    \u0275\u0275template(18, AuthModalComponent_div_12_input_18_Template, 1, 2, "input", 107);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 41);
    \u0275\u0275listener("click", function AuthModalComponent_div_12_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.encryptWithPIN());
    });
    \u0275\u0275template(20, AuthModalComponent_div_12_span_20_Template, 3, 3, "span", 11)(21, AuthModalComponent_div_12_mat_progress_spinner_21_Template, 1, 0, "mat-progress-spinner", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 43);
    \u0275\u0275listener("click", function AuthModalComponent_div_12_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setState("WALLET_ENCRYPT_CHOICE"));
    });
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 8, "authModal.pinSetup.title"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 10, "authModal.pinSetup.subtitle"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(16, 12, "authModal.pinSetup.warning"), \u0275\u0275sanitizeHtml);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r0.pinArray());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.pinArray().join("").length !== 6 || ctx_r0.isLoading());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isLoading());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isLoading());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(24, 14, "authModal.pinSetup.back"), " ");
  }
}
var AuthModalComponent = class _AuthModalComponent {
  get countryDialCodes() {
    return this._countryService.countryDialCodes;
  }
  constructor() {
    this.state = signal("CHOICE");
    this.isLoading = signal(false);
    this.email = signal("");
    this.phone = signal("");
    this.otp = signal("");
    this.otpArray = signal(new Array(6).fill(""));
    this.pin = signal("");
    this.pinArray = signal(new Array(6).fill(""));
    this.tempWalletAddress = signal(null);
    this.tempWalletPrivateKey = signal(null);
    this.passkeySupported = signal(false);
    this.connectedWalletAddress = signal(null);
    this.hasWeb2Auth = signal(false);
    this.selectedCountry = signal(null);
    this.countrySearchTerm = signal("");
    this.filteredCountries = signal([]);
    this.isCountryDropdownOpen = signal(false);
    this.dropdownPosition = signal(null);
    this.validationId = signal(null);
    this.phoneGateway = signal("sms");
    this._authService = inject(AuthService);
    this._authApiService = inject(AuthApiService);
    this._dialogRef = inject(MatDialogRef);
    this._router = inject(Router);
    this._countryService = inject(CountryService);
    this._encryptionService = inject(WalletEncryptionService);
    this._sessionService = inject(SessionService);
    this._dialogData = inject(MAT_DIALOG_DATA, { optional: true });
    this.projectId = environment.projectId;
    this.projectFlowId = environment.loginProjectFlowId;
    this.error = signal(null);
    this.errorKey = signal(null);
    const defaultCountry = this._countryService.countryDialCodes.find((c) => c.countryCode === "us");
    if (defaultCountry) {
      this.selectedCountry.set(defaultCountry);
    }
    this.filteredCountries.set(this.countryDialCodes);
    const existingAddress = localStorage.getItem("x402_agent_address");
    if (existingAddress) {
      this.connectedWalletAddress.set(existingAddress);
    }
    const storedUser = localStorage.getItem("verifik_account");
    if (storedUser) {
      try {
        const userData = JSON.parse(storedUser);
        if (userData && (userData.id || userData._id)) {
          this.hasWeb2Auth.set(true);
        }
      } catch (error) {
        console.warn("Failed to parse stored user data", error);
      }
    }
    if (this._dialogData?.startWithWallet) {
      setTimeout(() => {
        this.startWalletFlow();
      }, 0);
    }
  }
  setState(newState) {
    this.state.set(newState);
    this.otp.set("");
    this.otpArray.set(new Array(6).fill(""));
    this.error.set(null);
    this.errorKey.set(null);
    if (newState === "PHONE_INPUT" || newState === "WHATSAPP_INPUT") {
      const defaultCountry = this._countryService.countryDialCodes.find((c) => c.countryCode === "us");
      if (defaultCountry) {
        this.selectedCountry.set(defaultCountry);
      }
      this.countrySearchTerm.set("");
      this.filteredCountries.set(this.countryDialCodes);
    }
  }
  // --- Email Flow ---
  startEmailFlow() {
    this.setState("EMAIL_INPUT");
  }
  isValidEmail(email) {
    if (!email || !email.trim())
      return false;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.trim());
  }
  get isEmailValid() {
    return this.isValidEmail(this.email());
  }
  sendEmailOtp() {
    return __async(this, null, function* () {
      const emailValue = this.email().trim();
      if (!emailValue) {
        this.error.set("Please enter your email address");
        return;
      }
      if (!this.isValidEmail(emailValue)) {
        this.error.set("Please enter a valid email address");
        return;
      }
      this.isLoading.set(true);
      this.error.set(null);
      this.errorKey.set(null);
      this._authApiService.sendEmailOtp({
        email: emailValue,
        project: this.projectId,
        type: "login",
        validationMethod: "verificationCode"
      }).subscribe({
        next: (res) => {
          this.isLoading.set(false);
          if (res.data?._id) {
            this.validationId.set(res.data._id);
            this.setState("OTP_VERIFY_EMAIL");
          }
        },
        error: (err) => {
          this.isLoading.set(false);
          this.setState("EMAIL_INPUT");
          this.setError(err.error?.message || "Failed to send OTP");
        }
      });
    });
  }
  verifyEmailOtp() {
    return __async(this, null, function* () {
      const code = this.otpArray().join("");
      if (code.length !== 6 || !this.validationId())
        return;
      this.isLoading.set(true);
      this.error.set(null);
      this.errorKey.set(null);
      this._authApiService.validateEmailOtp({
        otp: code,
        email: this.email(),
        projectFlow: this.projectFlowId,
        project: this.projectId,
        type: "login"
      }).subscribe({
        next: (res) => {
          this.isLoading.set(false);
          this.handleSuccess(res);
        },
        error: (err) => {
          console.error(err);
          this.isLoading.set(false);
          this.error.set("Invalid Code");
        }
      });
    });
  }
  // --- Phone Flow ---
  startPhoneFlow() {
    this.phoneGateway.set("sms");
    this.setState("PHONE_INPUT");
  }
  // --- WhatsApp Flow ---
  startWhatsAppFlow() {
    this.phoneGateway.set("whatsapp");
    this.setState("WHATSAPP_INPUT");
  }
  isValidPhone(phone) {
    const digitsOnly = phone.replace(/\D/g, "");
    return digitsOnly.length >= 7 && digitsOnly.length <= 15;
  }
  onPhoneInput(event) {
    const input = event.target;
    let value = input.value;
    value = value.replace(/[^\d\s\-()]/g, "");
    this.phone.set(value);
  }
  onCountrySearchChange(searchTerm) {
    this.countrySearchTerm.set(searchTerm);
    const term = searchTerm.toLowerCase().trim();
    if (!term) {
      this.filteredCountries.set(this.countryDialCodes);
      return;
    }
    const filtered = this.countryDialCodes.filter((country) => country.name.toLowerCase().includes(term) || country.dialCode.includes(term) || country.countryCode.toLowerCase().includes(term));
    this.filteredCountries.set(filtered);
  }
  toggleCountryDropdown() {
    const isOpening = !this.isCountryDropdownOpen();
    this.isCountryDropdownOpen.set(isOpening);
    if (isOpening && this.countryButtonRef) {
      const button = this.countryButtonRef.nativeElement;
      const rect = button.getBoundingClientRect();
      this.dropdownPosition.set({
        top: `${rect.bottom + 4}px`,
        // Fixed positioning doesn't need scrollY
        left: `${rect.left}px`
        // Fixed positioning doesn't need scrollX
      });
    } else {
      this.dropdownPosition.set(null);
    }
  }
  selectCountry(country) {
    this.selectedCountry.set(country);
    this.countrySearchTerm.set("");
    this.filteredCountries.set(this.countryDialCodes);
    this.isCountryDropdownOpen.set(false);
    this.dropdownPosition.set(null);
  }
  sendPhoneOtp() {
    return __async(this, null, function* () {
      const phoneValue = this.phone().trim();
      const country = this.selectedCountry();
      if (!phoneValue) {
        this.error.set("Please enter your phone number");
        return;
      }
      if (!country) {
        this.error.set("Please select a country");
        return;
      }
      const phoneDigits = phoneValue.replace(/\D/g, "");
      if (!this.isValidPhone(phoneDigits)) {
        this.error.set("Please enter a valid phone number");
        return;
      }
      this.isLoading.set(true);
      this.error.set(null);
      this.errorKey.set(null);
      let finalPhone = phoneDigits;
      const dialCodeDigits = country.dialCode.replace("+", "");
      if (phoneDigits.startsWith(dialCodeDigits)) {
        finalPhone = phoneDigits.substring(dialCodeDigits.length);
      }
      const gateway = this.phoneGateway();
      this._authApiService.sendPhoneOtp({
        phone: finalPhone,
        countryCode: country.dialCode,
        project: this.projectId,
        type: "login",
        validationMethod: "verificationCode",
        phoneGateway: gateway
      }).subscribe({
        next: (res) => {
          this.isLoading.set(false);
          if (res.data?._id) {
            this.validationId.set(res.data._id);
            this.setState(gateway === "whatsapp" ? "OTP_VERIFY_WHATSAPP" : "OTP_VERIFY_PHONE");
          }
        },
        error: (err) => {
          this.isLoading.set(false);
          this.setState(gateway === "whatsapp" ? "WHATSAPP_INPUT" : "PHONE_INPUT");
          this.setError(err.error?.message || "Failed to send OTP");
        }
      });
    });
  }
  verifyPhoneOtp() {
    return __async(this, null, function* () {
      const code = this.otpArray().join("");
      if (code.length !== 6 || !this.validationId())
        return;
      this.isLoading.set(true);
      this.error.set(null);
      this.errorKey.set(null);
      const country = this.selectedCountry();
      if (!country)
        return;
      let finalPhone = this.phone().replace(/\D/g, "");
      const dialCodeDigits = country.dialCode.replace("+", "");
      if (finalPhone.startsWith(dialCodeDigits)) {
        finalPhone = finalPhone.substring(dialCodeDigits.length);
      }
      this._authApiService.validatePhoneOtp({
        otp: code,
        phoneValidation: this.validationId(),
        project: this.projectId,
        type: "login",
        phone: finalPhone,
        countryCode: country.dialCode
      }).subscribe({
        next: (res) => {
          this.isLoading.set(false);
          this.handleSuccess(res);
        },
        error: (err) => {
          this.isLoading.set(false);
          this.error.set("Invalid Code");
        }
      });
    });
  }
  verifyWhatsAppOtp() {
    return __async(this, null, function* () {
      yield this.verifyPhoneOtp();
    });
  }
  // --- Wallet Flow ---
  startWalletFlow() {
    this.setState("WALLET_CONNECT");
  }
  /**
   * Handle back navigation from wallet connection
   * If user has Web2 auth, close modal instead of going back to CHOICE
   */
  handleWalletBack() {
    if (this.hasWeb2Auth()) {
      this._dialogRef.close();
    } else {
      this.setState("CHOICE");
    }
  }
  createAgentWallet() {
    return __async(this, null, function* () {
      this.isLoading.set(true);
      try {
        const { ethers } = yield import("./chunk-AQOFSINF.js");
        const wallet = ethers.Wallet.createRandom();
        console.log("Created Wallet:", wallet.address);
        this.tempWalletAddress.set(wallet.address);
        this.tempWalletPrivateKey.set(wallet.privateKey);
        localStorage.setItem("x402_agent_address", wallet.address);
        const supported = yield this._encryptionService.isPasskeysSupported();
        this.passkeySupported.set(supported);
        this.isLoading.set(false);
        this.setState("WALLET_ENCRYPT_CHOICE");
      } catch (error) {
        console.error("Wallet creation failed:", error);
        this.error.set("Failed to create wallet");
        this.isLoading.set(false);
      }
    });
  }
  /**
   * Connect to MetaMask wallet
   */
  connectMetaMask() {
    return __async(this, null, function* () {
      this.isLoading.set(true);
      this.error.set(null);
      this.errorKey.set(null);
      try {
        if (!window.ethereum) {
          this.error.set("MetaMask is not installed. Please install MetaMask extension.");
          this.isLoading.set(false);
          return;
        }
        const accounts = yield window.ethereum.request({
          method: "eth_requestAccounts"
        });
        if (!accounts || accounts.length === 0) {
          this.error.set("No accounts found in MetaMask");
          this.isLoading.set(false);
          return;
        }
        const address = accounts[0];
        console.log("Connected MetaMask:", address);
        localStorage.setItem("x402_agent_address", address);
        localStorage.setItem("x402_wallet_type", "metamask");
        this.isLoading.set(false);
        this._dialogRef.close();
        this._sessionService.resetReloadTracking();
        this._sessionService.safeReload();
      } catch (error) {
        console.error("MetaMask connection failed:", error);
        if (error.code === 4001) {
          this.error.set("Connection rejected. Please approve the connection in MetaMask.");
        } else {
          this.error.set("Failed to connect to MetaMask");
        }
        this.isLoading.set(false);
      }
    });
  }
  encryptWithPasskey() {
    return __async(this, null, function* () {
      const privateKey = this.tempWalletPrivateKey();
      if (!privateKey) {
        this.error.set("No wallet to encrypt");
        return;
      }
      this.isLoading.set(true);
      this.error.set(null);
      this.errorKey.set(null);
      const success = yield this._encryptionService.encryptWithPasskeys(privateKey);
      if (success) {
        localStorage.setItem("x402_wallet_type", "encrypted-model");
        this.tempWalletPrivateKey.set(null);
        this._dialogRef.close(true);
        this._sessionService.resetReloadTracking();
        this._sessionService.safeReload();
      } else {
        this.isLoading.set(false);
        this.error.set("Passkey encryption failed. Please try PIN instead.");
      }
    });
  }
  usePINInstead() {
    this.setState("WALLET_ENCRYPT_PIN");
  }
  encryptWithPIN() {
    return __async(this, null, function* () {
      const privateKey = this.tempWalletPrivateKey();
      const pin = this.pinArray().join("");
      if (!privateKey) {
        this.error.set("No wallet to encrypt");
        return;
      }
      if (pin.length !== 6) {
        this.error.set("Please enter a 6-digit PIN");
        return;
      }
      this.isLoading.set(true);
      this.error.set(null);
      this.errorKey.set(null);
      const success = yield this._encryptionService.encryptWithPIN(privateKey, pin);
      if (success) {
        localStorage.setItem("x402_wallet_type", "encrypted-model");
        this.tempWalletPrivateKey.set(null);
        this.pinArray.set(new Array(6).fill(""));
        this._dialogRef.close(true);
        this._sessionService.resetReloadTracking();
        this._sessionService.safeReload();
      } else {
        this.isLoading.set(false);
        this.error.set("PIN encryption failed. Please try again.");
      }
    });
  }
  // --- Helpers ---
  /**
   * Set error message with translation key mapping
   * Maps API error codes to translation keys, or uses the message directly if not mapped
   */
  setError(message) {
    const errorMap = {
      invalid_email: "authModal.errors.invalidEmail",
      invalid_phone: "authModal.errors.invalidPhone"
    };
    const errorKey = errorMap[message];
    if (errorKey) {
      this.errorKey.set(errorKey);
      this.error.set(null);
    } else {
      this.error.set(message);
      this.errorKey.set(null);
    }
  }
  handleSuccess(res) {
    const data = res.data || res;
    const tempToken = data.token || data.accessToken;
    if (tempToken) {
      this._authService.accessToken = tempToken;
      this._authApiService.projectLogin().subscribe({
        next: (loginRes) => {
          const realToken = loginRes.data?.accessToken || loginRes.accessToken;
          if (realToken) {
            this._authService.accessToken = realToken;
            localStorage.setItem("accessToken", realToken);
            this._authApiService.getSession().subscribe({
              next: (sessionRes) => {
                const userData = sessionRes.data?.user || sessionRes.user || sessionRes;
                localStorage.setItem("verifik_account", JSON.stringify(userData));
                this._dialogRef.close(true);
                this._sessionService.resetReloadTracking();
                this._sessionService.safeReload();
              },
              error: (err) => {
                console.error("Session fetch failed", err);
                this.error.set("Failed to fetch session");
                this.isLoading.set(false);
              }
            });
          } else {
            this.error.set("Failed to obtain access token");
            this.isLoading.set(false);
          }
        },
        error: (err) => {
          console.error("Project login failed", err);
          this.error.set("Login failed");
          this.isLoading.set(false);
        }
      });
    } else {
      console.warn("No temp token found in response", res);
      this._dialogRef.close(true);
    }
  }
  onOtpInput(event, index) {
    const input = event.target;
    let value = input.value;
    value = value.replace(/\D/g, "");
    if (value.length > 1) {
      const currentOtp2 = [...this.otpArray()];
      const digits = value.split("").slice(0, 6 - index);
      for (let i = 0; i < digits.length && index + i < 6; i++) {
        currentOtp2[index + i] = digits[i];
        const inputElement = document.getElementById(`otp-${index + i}`);
        if (inputElement) {
          inputElement.value = digits[i];
        }
      }
      this.otpArray.set(currentOtp2);
      input.value = currentOtp2[index] || "";
      const nextIndex = Math.min(index + digits.length, 5);
      setTimeout(() => {
        const nextInput = document.getElementById(`otp-${nextIndex}`);
        if (nextInput) {
          nextInput.focus();
          nextInput.select();
        }
      }, 0);
      if (currentOtp2.every((v) => v !== "") && currentOtp2.length === 6) {
        setTimeout(() => {
          if (this.state() === "OTP_VERIFY_EMAIL")
            this.verifyEmailOtp();
          if (this.state() === "OTP_VERIFY_PHONE")
            this.verifyPhoneOtp();
          if (this.state() === "OTP_VERIFY_WHATSAPP")
            this.verifyWhatsAppOtp();
        }, 100);
      }
      return;
    }
    const currentOtp = [...this.otpArray()];
    if (value.length > 0) {
      const digit = value.slice(-1);
      currentOtp[index] = digit;
      this.otpArray.set(currentOtp);
      input.value = digit;
      if (index < 5) {
        setTimeout(() => {
          const nextInput = document.getElementById(`otp-${index + 1}`);
          if (nextInput) {
            nextInput.focus();
            nextInput.select();
          }
        }, 0);
      }
      if (currentOtp.every((v) => v !== "") && currentOtp.length === 6) {
        setTimeout(() => {
          if (this.state() === "OTP_VERIFY_EMAIL")
            this.verifyEmailOtp();
          if (this.state() === "OTP_VERIFY_PHONE")
            this.verifyPhoneOtp();
          if (this.state() === "OTP_VERIFY_WHATSAPP")
            this.verifyWhatsAppOtp();
        }, 100);
      }
    } else {
      currentOtp[index] = "";
      this.otpArray.set(currentOtp);
      input.value = "";
    }
  }
  onKeyDown(event, index) {
    if (event.key === "Backspace" && !this.otpArray()[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      prevInput?.focus();
    }
  }
  // PIN input handlers (similar to OTP)
  onPinInput(event, index) {
    const input = event.target;
    let value = input.value;
    value = value.replace(/\D/g, "");
    if (value.length > 1) {
      const currentPin2 = [...this.pinArray()];
      const digits = value.split("").slice(0, 6 - index);
      for (let i = 0; i < digits.length && index + i < 6; i++) {
        currentPin2[index + i] = digits[i];
        const inputElement = document.getElementById(`pin-${index + i}`);
        if (inputElement) {
          inputElement.value = digits[i];
        }
      }
      this.pinArray.set(currentPin2);
      input.value = currentPin2[index] || "";
      const nextIndex = Math.min(index + digits.length, 5);
      setTimeout(() => {
        const nextInput = document.getElementById(`pin-${nextIndex}`);
        if (nextInput) {
          nextInput.focus();
          nextInput.select();
        }
      }, 0);
      return;
    }
    const currentPin = [...this.pinArray()];
    if (value.length > 0) {
      const digit = value.slice(-1);
      currentPin[index] = digit;
      this.pinArray.set(currentPin);
      input.value = digit;
      if (index < 5) {
        setTimeout(() => {
          const nextInput = document.getElementById(`pin-${index + 1}`);
          if (nextInput) {
            nextInput.focus();
            nextInput.select();
          }
        }, 0);
      }
    } else {
      currentPin[index] = "";
      this.pinArray.set(currentPin);
      input.value = "";
    }
  }
  onPinKeyDown(event, index) {
    if (event.key === "Backspace" && !this.pinArray()[index] && index > 0) {
      const prevInput = document.getElementById(`pin-${index - 1}`);
      prevInput?.focus();
    }
  }
  onDocumentClick(event) {
    const target = event.target;
    if (this.isCountryDropdownOpen() && !target.closest(".country-selector-container")) {
      this.isCountryDropdownOpen.set(false);
      this.dropdownPosition.set(null);
    }
  }
  static {
    this.\u0275fac = function AuthModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AuthModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AuthModalComponent, selectors: [["auth-modal"]], viewQuery: function AuthModalComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.countryButtonRef = _t.first);
      }
    }, hostBindings: function AuthModalComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function AuthModalComponent_click_HostBindingHandler($event) {
          return ctx.onDocumentClick($event);
        }, false, \u0275\u0275resolveDocument);
      }
    }, decls: 16, vars: 14, consts: [["connectedWallet", ""], ["countryButton", ""], [1, "w-full", "max-w-sm", "mx-auto", "p-2"], [1, "text-center", "mb-8"], [1, "text-xl", "font-bold", "text-slate-900", "dark:text-white"], ["class", "mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm text-center", 4, "ngIf"], ["class", "space-y-3", 4, "ngIf"], ["class", "space-y-4", 4, "ngIf"], ["class", "space-y-6", 4, "ngIf"], [1, "mt-8", "text-center", "text-[10px]", "text-slate-400"], [1, "mb-4", "p-3", "bg-red-100", "text-red-700", "rounded-md", "text-sm", "text-center"], [4, "ngIf"], [1, "space-y-3"], [4, "ngIf", "ngIfElse"], ["class", "pt-4 text-center", 4, "ngIf"], ["mat-stroked-button", "", 1, "w-full", "!h-12", "!justify-start", "!px-4", "!rounded-lg", "!border-slate-300", "dark:!border-slate-700", 3, "click"], [1, "mr-3", "text-slate-500"], [1, "text-slate-700", "dark:text-slate-300"], [1, "relative", "py-2"], [1, "absolute", "inset-0", "flex", "items-center"], [1, "w-full", "border-t", "border-slate-200", "dark:border-slate-700"], [1, "relative", "flex", "justify-center", "text-xs", "uppercase"], [1, "bg-white", "dark:bg-slate-800", "px-2", "text-slate-500"], ["mat-stroked-button", "", 1, "w-full", "!h-12", "!justify-start", "!px-4", "!rounded-lg", "!border-slate-300", "dark:!border-slate-700", "hover:bg-slate-50", "dark:hover:bg-slate-800", "transition-colors", 3, "click"], [1, "flex", "items-center", "w-full"], [1, "w-full", "h-12", "px-4", "rounded-lg", "border", "border-green-200", "dark:border-green-800", "bg-green-50", "dark:bg-green-900/10", "flex", "items-center", "justify-between", "cursor-default"], [1, "flex", "items-center", "gap-3"], [1, "text-green-600", "dark:text-green-400"], [1, "flex", "flex-col"], [1, "text-xs", "font-semibold", "text-green-700", "dark:text-green-300"], [1, "text-[10px]", "font-mono", "text-green-600", "dark:text-green-400", "opacity-80"], [1, "pt-4", "text-center"], [1, "text-sm", "text-slate-500"], ["href", "https://access.verifik.co/sign-up/6332941ccde4f719d9c00f9e", 1, "text-sm", "text-blue-600", "font-semibold", "ml-1", "cursor-pointer", "hover:underline"], [1, "space-y-4"], [1, "p-3", "bg-blue-50", "dark:bg-blue-900/10", "border", "border-blue-100", "dark:border-blue-900/20", "rounded-lg", "flex", "gap-3"], [1, "text-blue-500", "!w-5", "!h-5", "!text-[20px]", "shrink-0", "mt-0.5"], [1, "text-xs", "text-blue-700", "dark:text-blue-300", "leading-snug", 3, "innerHTML"], [1, "relative"], [1, "absolute", "left-3", "top-1/2", "-translate-y-1/2", "text-slate-400"], ["type", "email", 1, "w-full", "pl-10", "pr-4", "py-3", "rounded-lg", "border", "border-slate-300", "dark:border-slate-700", "bg-transparent", "focus:ring-2", "focus:ring-blue-500", "focus:outline-none", 3, "ngModelChange", "keyup.enter", "ngModel", "placeholder"], ["mat-flat-button", "", "color", "primary", 1, "w-full", "!h-11", "!rounded-lg", 3, "click", "disabled"], ["diameter", "20", "mode", "indeterminate", 4, "ngIf"], ["mat-button", "", 1, "w-full", 3, "click"], ["diameter", "20", "mode", "indeterminate"], [1, "flex", "space-x-2"], [1, "relative", "country-selector-container"], ["type", "button", 1, "w-28", "px-3", "py-3", "rounded-lg", "border", "border-slate-300", "dark:border-slate-700", "bg-white", "dark:bg-slate-800", "text-slate-700", "dark:text-slate-300", "flex", "items-center", "justify-between", "hover:bg-slate-50", "dark:hover:bg-slate-700", "focus:ring-2", "focus:ring-blue-500", "focus:outline-none", "transition-colors", 3, "click"], [1, "flex", "items-center", "gap-2", "text-sm"], ["class", "font-medium", 4, "ngIf"], ["class", "text-slate-400", 4, "ngIf"], [1, "!w-4", "!h-4", "!text-[16px]", "text-slate-400"], ["class", "fixed z-[1000] w-80 max-h-80 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg overflow-hidden", 3, "top", "left", 4, "ngIf"], ["type", "tel", 1, "flex-1", "px-4", "py-3", "rounded-lg", "border", "border-slate-300", "dark:border-slate-700", "bg-transparent", "focus:ring-2", "focus:ring-blue-500", "focus:outline-none", 3, "input", "keyup.enter", "ngModel", "placeholder"], [1, "font-medium"], [1, "text-slate-400"], [1, "fixed", "z-[1000]", "w-80", "max-h-80", "bg-white", "dark:bg-slate-800", "border", "border-slate-200", "dark:border-slate-700", "rounded-lg", "shadow-lg", "overflow-hidden"], [1, "p-2", "border-b", "border-slate-200", "dark:border-slate-700"], [1, "absolute", "left-2", "top-1/2", "-translate-y-1/2", "!w-4", "!h-4", "!text-[16px]", "text-slate-400"], ["type", "text", 1, "w-full", "pl-8", "pr-3", "py-2", "text-sm", "rounded-md", "border", "border-slate-300", "dark:border-slate-600", "bg-transparent", "focus:ring-2", "focus:ring-blue-500", "focus:outline-none", 3, "input", "click", "value", "placeholder"], [1, "max-h-64", "overflow-y-auto"], ["type", "button", "class", "w-full px-4 py-3 flex items-center gap-3 hover:bg-slate-50 dark:hover:bg-slate-700 text-left transition-colors", 3, "bg-blue-50", "click", 4, "ngFor", "ngForOf"], ["class", "px-4 py-3 text-sm text-slate-500 text-center", 4, "ngIf"], ["type", "button", 1, "w-full", "px-4", "py-3", "flex", "items-center", "gap-3", "hover:bg-slate-50", "dark:hover:bg-slate-700", "text-left", "transition-colors", 3, "click"], [1, "text-2xl"], [1, "flex-1", "min-w-0"], [1, "text-sm", "font-medium", "text-slate-900", "dark:text-slate-100", "truncate"], [1, "text-sm", "text-slate-500", "dark:text-slate-400", "font-medium"], [1, "px-4", "py-3", "text-sm", "text-slate-500", "text-center"], [1, "space-y-6"], [1, "text-center", "space-y-2"], [1, "font-bold"], [1, "flex", "justify-between", "gap-2"], ["type", "text", "inputmode", "numeric", "maxlength", "1", "class", "w-12 h-14 text-center text-2xl font-bold rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none", 3, "id", "value", "input", "keydown", 4, "ngFor", "ngForOf"], ["type", "text", "inputmode", "numeric", "maxlength", "1", 1, "w-12", "h-14", "text-center", "text-2xl", "font-bold", "rounded-lg", "border", "border-slate-300", "dark:border-slate-700", "bg-transparent", "focus:ring-2", "focus:ring-blue-500", "focus:outline-none", 3, "input", "keydown", "id", "value"], [1, "font-bold", "text-center"], [1, "text-xs", "text-center", "text-slate-500", "mb-4"], [1, "space-y-2"], ["mat-stroked-button", "", 1, "w-full", "!h-12", "!justify-start", "!px-4", "!rounded-lg", 3, "click", "disabled"], ["mat-stroked-button", "", 1, "w-full", "!h-12", "!justify-start", "!px-4", "!rounded-lg", "bg-slate-50", "dark:bg-slate-800", 3, "click"], [1, "flex", "flex-col", "items-center", "gap-3", "mb-2"], [1, "w-20", "h-20", "rounded-full", "bg-gradient-to-br", "from-indigo-50", "to-blue-50", "dark:from-indigo-900/20", "dark:to-blue-900/20", "flex", "items-center", "justify-center", "shadow-inner"], [1, "text-indigo-500", "!w-10", "!h-10", "!text-[40px]"], [1, "flex", "items-center", "gap-2", "px-3", "py-1.5", "bg-slate-100", "dark:bg-slate-800", "rounded-full", "border", "border-slate-200", "dark:border-slate-700"], [1, "w-2", "h-2", "rounded-full", "bg-green-500"], [1, "text-xs", "font-mono", "text-slate-600", "dark:text-slate-300"], [1, "text-center", "px-2"], [1, "text-sm", "leading-relaxed", "text-slate-600", "dark:text-slate-400", 3, "innerHTML"], [1, "space-y-3", "pt-2"], ["mat-flat-button", "", "color", "primary", "class", "w-full !h-12 !rounded-lg !text-base shadow-lg shadow-indigo-500/20", 3, "disabled", "click", 4, "ngIf"], ["mat-stroked-button", "", 1, "w-full", "!h-12", "!rounded-lg", "!text-base", "!border-slate-300", "dark:!border-slate-700", "hover:!bg-slate-50", "dark:hover:!bg-slate-800", "transition-colors", 3, "click", "disabled"], [1, "flex", "items-center", "justify-center", "gap-2"], [1, "!w-5", "!h-5", "!text-[20px]", "text-slate-500"], ["class", "text-center", 4, "ngIf"], ["class", "flex justify-center py-2", 4, "ngIf"], ["mat-flat-button", "", "color", "primary", 1, "w-full", "!h-12", "!rounded-lg", "!text-base", "shadow-lg", "shadow-indigo-500/20", 3, "click", "disabled"], [1, "!w-5", "!h-5", "!text-[20px]"], [1, "text-center"], [1, "text-xs", "text-amber-600", "dark:text-amber-500"], [1, "flex", "justify-center", "py-2"], ["diameter", "24", "mode", "indeterminate"], [1, "w-12", "h-12", "bg-indigo-100", "dark:bg-indigo-900/30", "rounded-full", "mx-auto", "flex", "items-center", "justify-center", "mb-4"], [1, "text-indigo-600", "dark:text-indigo-400", "!w-6", "!h-6", "!text-[24px]"], [1, "bg-amber-50", "dark:bg-amber-900/20", "border", "border-amber-200", "dark:border-amber-800", "rounded-lg", "p-3"], [1, "flex", "items-start", "gap-2"], [1, "text-amber-600", "dark:text-amber-400", "!w-4", "!h-4", "!text-[16px]", "mt-0.5"], [1, "text-xs", "text-amber-700", "dark:text-amber-300", 3, "innerHTML"], ["type", "password", "inputmode", "numeric", "maxlength", "1", "class", "w-12 h-14 text-center text-2xl font-bold rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent focus:ring-2 focus:ring-indigo-500 focus:outline-none", 3, "id", "value", "input", "keydown", 4, "ngFor", "ngForOf"], ["type", "password", "inputmode", "numeric", "maxlength", "1", 1, "w-12", "h-14", "text-center", "text-2xl", "font-bold", "rounded-lg", "border", "border-slate-300", "dark:border-slate-700", "bg-transparent", "focus:ring-2", "focus:ring-indigo-500", "focus:outline-none", 3, "input", "keydown", "id", "value"]], template: function AuthModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "h2", 4);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(5, AuthModalComponent_div_5_Template, 3, 2, "div", 5)(6, AuthModalComponent_div_6_Template, 6, 4, "div", 6)(7, AuthModalComponent_div_7_Template, 17, 13, "div", 7)(8, AuthModalComponent_div_8_Template, 26, 19, "div", 7)(9, AuthModalComponent_div_9_Template, 16, 17, "div", 8)(10, AuthModalComponent_div_10_Template, 19, 16, "div", 7)(11, AuthModalComponent_div_11_Template, 23, 12, "div", 8)(12, AuthModalComponent_div_12_Template, 25, 16, "div", 8);
        \u0275\u0275elementStart(13, "div", 9);
        \u0275\u0275text(14);
        \u0275\u0275pipe(15, "transloco");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 10, ctx.state() === "WALLET_ENCRYPT_CHOICE" || ctx.state() === "WALLET_ENCRYPT_PIN" ? "authModal.header.secureWallet" : "authModal.header.login"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.error() || ctx.errorKey());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.state() === "CHOICE");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.state() === "EMAIL_INPUT");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.state() === "PHONE_INPUT" || ctx.state() === "WHATSAPP_INPUT");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.state() === "OTP_VERIFY_EMAIL" || ctx.state() === "OTP_VERIFY_PHONE" || ctx.state() === "OTP_VERIFY_WHATSAPP");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.state() === "WALLET_CONNECT");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.state() === "WALLET_ENCRYPT_CHOICE");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.state() === "WALLET_ENCRYPT_PIN");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 12, "authModal.footer.protectedBy"), " ");
      }
    }, dependencies: [
      CommonModule,
      NgForOf,
      NgIf,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      MatButtonModule,
      MatButton,
      MatIconModule,
      MatIcon,
      MatInputModule,
      MatFormFieldModule,
      MatDialogModule,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatSelectModule,
      TranslocoModule,
      TranslocoPipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthModalComponent, [{
    type: Component,
    args: [{ selector: "auth-modal", standalone: true, imports: [
      CommonModule,
      FormsModule,
      MatButtonModule,
      MatIconModule,
      MatInputModule,
      MatFormFieldModule,
      MatDialogModule,
      MatProgressSpinnerModule,
      MatSelectModule,
      TranslocoModule
    ], encapsulation: ViewEncapsulation.None, template: `<div class="w-full max-w-sm mx-auto p-2">
  <!-- Header -->
  <div class="text-center mb-8">
    <!-- Logo or brand -->
    <h2 class="text-xl font-bold text-slate-900 dark:text-white">
      {{
        (state() === 'WALLET_ENCRYPT_CHOICE' || state() === 'WALLET_ENCRYPT_PIN'
          ? 'authModal.header.secureWallet'
          : 'authModal.header.login'
        ) | transloco
      }}
    </h2>
  </div>

  <!-- Error Message -->
  <div
    *ngIf="error() || errorKey()"
    class="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm text-center"
  >
    <span *ngIf="errorKey()">{{ errorKey() | transloco }}</span>
    <span *ngIf="!errorKey() && error()">{{ error() }}</span>
  </div>

  <!-- CHOICE State -->
  <div *ngIf="state() === 'CHOICE'" class="space-y-3">
    <!-- Only show email/SMS options if user doesn't have Web2 auth -->
    <ng-container *ngIf="!hasWeb2Auth()">
      <button
        mat-stroked-button
        class="w-full !h-12 !justify-start !px-4 !rounded-lg !border-slate-300 dark:!border-slate-700"
        (click)="startEmailFlow()"
      >
        <mat-icon class="mr-3 text-slate-500">mail</mat-icon>
        <span class="text-slate-700 dark:text-slate-300">{{
          'authModal.choice.continueEmail' | transloco
        }}</span>
      </button>

      <button
        mat-stroked-button
        class="w-full !h-12 !justify-start !px-4 !rounded-lg !border-slate-300 dark:!border-slate-700"
        (click)="startPhoneFlow()"
      >
        <mat-icon class="mr-3 text-slate-500">smartphone</mat-icon>
        <span class="text-slate-700 dark:text-slate-300">{{
          'authModal.choice.continueSMS' | transloco
        }}</span>
      </button>

      <button
        mat-stroked-button
        class="w-full !h-12 !justify-start !px-4 !rounded-lg !border-slate-300 dark:!border-slate-700"
        (click)="startWhatsAppFlow()"
      >
        <mat-icon class="mr-3 text-slate-500">message</mat-icon>
        <span class="text-slate-700 dark:text-slate-300">{{
          'authModal.choice.continueWhatsApp' | transloco
        }}</span>
      </button>

      <div class="relative py-2">
        <div class="absolute inset-0 flex items-center">
          <div class="w-full border-t border-slate-200 dark:border-slate-700"></div>
        </div>
        <div class="relative flex justify-center text-xs uppercase">
          <span class="bg-white dark:bg-slate-800 px-2 text-slate-500">{{
            'authModal.choice.or' | transloco
          }}</span>
        </div>
      </div>
    </ng-container>

    <!-- Wallet Option -->
    <ng-container *ngIf="!connectedWalletAddress(); else connectedWallet">
      <button
        mat-stroked-button
        class="w-full !h-12 !justify-start !px-4 !rounded-lg !border-slate-300 dark:!border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
        (click)="startWalletFlow()"
      >
        <div class="flex items-center w-full">
          <mat-icon class="mr-3 text-slate-500">account_balance_wallet</mat-icon>
          <span class="text-slate-700 dark:text-slate-300">{{
            'authModal.choice.continueWallet' | transloco
          }}</span>
        </div>
      </button>
    </ng-container>

    <!-- Already Connected Wallet State -->
    <ng-template #connectedWallet>
      <div
        class="w-full h-12 px-4 rounded-lg border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/10 flex items-center justify-between cursor-default"
      >
        <div class="flex items-center gap-3">
          <mat-icon class="text-green-600 dark:text-green-400">check_circle</mat-icon>
          <div class="flex flex-col">
            <span class="text-xs font-semibold text-green-700 dark:text-green-300">{{
              'authModal.walletConnected.title' | transloco
            }}</span>
            <span class="text-[10px] font-mono text-green-600 dark:text-green-400 opacity-80">
              {{ connectedWalletAddress()?.substring(0, 6) }}...{{
                connectedWalletAddress()?.substring(38)
              }}
            </span>
          </div>
        </div>
      </div>
    </ng-template>

    <!-- Only show sign up prompt if user doesn't have Web2 auth -->
    <div *ngIf="!hasWeb2Auth()" class="pt-4 text-center">
      <span class="text-sm text-slate-500">{{ 'authModal.choice.noAccount' | transloco }}</span>
      <a
        class="text-sm text-blue-600 font-semibold ml-1 cursor-pointer hover:underline"
        href="https://access.verifik.co/sign-up/6332941ccde4f719d9c00f9e"
        >{{ 'authModal.choice.signUp' | transloco }}</a
      >
    </div>
  </div>

  <!-- EMAIL INPUT State -->
  <div *ngIf="state() === 'EMAIL_INPUT'" class="space-y-4">
    <!-- Info Message -->
    <div
      class="p-3 bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/20 rounded-lg flex gap-3"
    >
      <mat-icon class="text-blue-500 !w-5 !h-5 !text-[20px] shrink-0 mt-0.5">info</mat-icon>
      <p
        class="text-xs text-blue-700 dark:text-blue-300 leading-snug"
        [innerHTML]="'authModal.emailInput.infoMessage' | transloco"
      ></p>
    </div>

    <div class="relative">
      <mat-icon class="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">mail</mat-icon>
      <input
        [ngModel]="email()"
        (ngModelChange)="email.set($event)"
        type="email"
        [placeholder]="'authModal.emailInput.placeholder' | transloco"
        class="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
        (keyup.enter)="sendEmailOtp()"
      />
    </div>

    <button
      mat-flat-button
      color="primary"
      class="w-full !h-11 !rounded-lg"
      [disabled]="!isEmailValid || isLoading()"
      (click)="sendEmailOtp()"
    >
      <span *ngIf="!isLoading()">{{ 'authModal.emailInput.continue' | transloco }}</span>
      <mat-progress-spinner
        *ngIf="isLoading()"
        diameter="20"
        mode="indeterminate"
      ></mat-progress-spinner>
    </button>

    <button mat-button class="w-full" (click)="setState('CHOICE')">
      {{ 'authModal.emailInput.back' | transloco }}
    </button>
  </div>

  <!-- PHONE INPUT State -->
  <div *ngIf="state() === 'PHONE_INPUT' || state() === 'WHATSAPP_INPUT'" class="space-y-4">
    <!-- Info Message -->
    <div
      class="p-3 bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/20 rounded-lg flex gap-3"
    >
      <mat-icon class="text-blue-500 !w-5 !h-5 !text-[20px] shrink-0 mt-0.5">info</mat-icon>
      <p
        class="text-xs text-blue-700 dark:text-blue-300 leading-snug"
        [innerHTML]="
          state() === 'WHATSAPP_INPUT'
            ? ('authModal.phoneInput.whatsappInfoMessage' | transloco)
            : ('authModal.phoneInput.infoMessage' | transloco)
        "
      ></p>
    </div>

    <div class="flex space-x-2">
      <!-- Country Code Selector -->
      <div class="relative country-selector-container">
        <button
          #countryButton
          type="button"
          (click)="toggleCountryDropdown()"
          class="w-28 px-3 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-700 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors"
        >
          <span class="flex items-center gap-2 text-sm">
            <span *ngIf="selectedCountry()">{{ selectedCountry()!.flag }}</span>
            <span *ngIf="selectedCountry()" class="font-medium">{{
              selectedCountry()!.dialCode
            }}</span>
            <span *ngIf="!selectedCountry()" class="text-slate-400">{{
              'authModal.phoneInput.selectCountry' | transloco
            }}</span>
          </span>
          <mat-icon class="!w-4 !h-4 !text-[16px] text-slate-400">arrow_drop_down</mat-icon>
        </button>

        <!-- Dropdown Menu -->
        <div
          *ngIf="isCountryDropdownOpen() && dropdownPosition()"
          class="fixed z-[1000] w-80 max-h-80 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg overflow-hidden"
          [style.top]="dropdownPosition()!.top"
          [style.left]="dropdownPosition()!.left"
        >
          <!-- Search Input -->
          <div class="p-2 border-b border-slate-200 dark:border-slate-700">
            <div class="relative">
              <mat-icon
                class="absolute left-2 top-1/2 -translate-y-1/2 !w-4 !h-4 !text-[16px] text-slate-400"
                >search</mat-icon
              >
              <input
                type="text"
                [value]="countrySearchTerm()"
                (input)="onCountrySearchChange($any($event.target).value)"
                [placeholder]="'authModal.phoneInput.searchCountry' | transloco"
                class="w-full pl-8 pr-3 py-2 text-sm rounded-md border border-slate-300 dark:border-slate-600 bg-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
                (click)="$event.stopPropagation()"
              />
            </div>
          </div>

          <!-- Country List -->
          <div class="max-h-64 overflow-y-auto">
            <button
              *ngFor="let country of filteredCountries()"
              type="button"
              (click)="selectCountry(country)"
              class="w-full px-4 py-3 flex items-center gap-3 hover:bg-slate-50 dark:hover:bg-slate-700 text-left transition-colors"
              [class.bg-blue-50]="selectedCountry()?.dialCode === country.dialCode"
            >
              <span class="text-2xl">{{ country.flag }}</span>
              <div class="flex-1 min-w-0">
                <div class="text-sm font-medium text-slate-900 dark:text-slate-100 truncate">
                  {{ country.name }}
                </div>
              </div>
              <span class="text-sm text-slate-500 dark:text-slate-400 font-medium">
                {{ country.dialCode }}
              </span>
            </button>
            <div
              *ngIf="filteredCountries().length === 0"
              class="px-4 py-3 text-sm text-slate-500 text-center"
            >
              {{ 'authModal.phoneInput.noCountries' | transloco }}
            </div>
          </div>
        </div>
      </div>

      <!-- Phone Input -->
      <input
        [ngModel]="phone()"
        (input)="onPhoneInput($event)"
        type="tel"
        [placeholder]="'authModal.phoneInput.phonePlaceholder' | transloco"
        class="flex-1 px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
        (keyup.enter)="sendPhoneOtp()"
      />
    </div>

    <button
      mat-flat-button
      color="primary"
      class="w-full !h-11 !rounded-lg"
      [disabled]="!phone() || !selectedCountry() || isLoading()"
      (click)="sendPhoneOtp()"
    >
      <span *ngIf="!isLoading()">{{ 'authModal.phoneInput.continue' | transloco }}</span>
      <mat-progress-spinner
        *ngIf="isLoading()"
        diameter="20"
        mode="indeterminate"
      ></mat-progress-spinner>
    </button>

    <button mat-button class="w-full" (click)="setState('CHOICE')">
      {{ 'authModal.phoneInput.back' | transloco }}
    </button>
  </div>

  <!-- OTP State (Email, Phone, or WhatsApp) -->
  <div
    *ngIf="
      state() === 'OTP_VERIFY_EMAIL' ||
      state() === 'OTP_VERIFY_PHONE' ||
      state() === 'OTP_VERIFY_WHATSAPP'
    "
    class="space-y-6"
  >
    <div class="text-center space-y-2">
      <h3 class="font-bold">{{ 'authModal.otpVerify.title' | transloco }}</h3>
      <p class="text-sm text-slate-500">
        {{
          (state() === 'OTP_VERIFY_EMAIL'
            ? 'authModal.otpVerify.emailMessage'
            : state() === 'OTP_VERIFY_WHATSAPP'
              ? 'authModal.otpVerify.whatsappMessage'
              : 'authModal.otpVerify.phoneMessage'
          ) | transloco: { email: email(), phone: phone() }
        }}
      </p>
    </div>

    <div class="flex justify-between gap-2">
      <input
        *ngFor="let digit of otpArray(); let i = index"
        [id]="'otp-' + i"
        type="text"
        inputmode="numeric"
        maxlength="1"
        [value]="digit"
        (input)="onOtpInput($event, i)"
        (keydown)="onKeyDown($event, i)"
        class="w-12 h-14 text-center text-2xl font-bold rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />
    </div>

    <button
      mat-flat-button
      color="primary"
      class="w-full !h-11 !rounded-lg"
      [disabled]="otpArray().join('').length !== 6 || isLoading()"
      (click)="state() === 'OTP_VERIFY_EMAIL' ? verifyEmailOtp() : verifyPhoneOtp()"
    >
      <span *ngIf="!isLoading()">{{ 'authModal.otpVerify.verify' | transloco }}</span>
      <mat-progress-spinner
        *ngIf="isLoading()"
        diameter="20"
        mode="indeterminate"
      ></mat-progress-spinner>
    </button>

    <button mat-button class="w-full" (click)="setState('CHOICE')">
      {{ 'authModal.otpVerify.back' | transloco }}
    </button>
  </div>

  <!-- Wallet State -->
  <div *ngIf="state() === 'WALLET_CONNECT'" class="space-y-4">
    <h3 class="font-bold text-center">{{ 'authModal.walletConnect.title' | transloco }}</h3>
    <p class="text-xs text-center text-slate-500 mb-4">
      {{ 'authModal.walletConnect.subtitle' | transloco }}
    </p>

    <div class="space-y-2">
      <!-- <button mat-stroked-button class="w-full !h-12 !justify-start !px-4 !rounded-lg">
        <span>{{ 'authModal.walletConnect.zelf' | transloco }}</span>
      </button> -->
      <button
        mat-stroked-button
        class="w-full !h-12 !justify-start !px-4 !rounded-lg"
        (click)="connectMetaMask()"
        [disabled]="isLoading()"
      >
        <span>{{ 'authModal.walletConnect.metamask' | transloco }}</span>
      </button>
      <!-- <button mat-stroked-button class="w-full !h-12 !justify-start !px-4 !rounded-lg">
        <span>{{ 'authModal.walletConnect.walletConnect' | transloco }}</span>
      </button> -->

      <!-- Fake Agent Wallet Option -->
      <button
        mat-stroked-button
        class="w-full !h-12 !justify-start !px-4 !rounded-lg bg-slate-50 dark:bg-slate-800"
        (click)="createAgentWallet()"
      >
        <span>{{ 'authModal.walletConnect.createAgent' | transloco }}</span>
      </button>
    </div>

    <button mat-button class="w-full" (click)="handleWalletBack()">
      {{ 'authModal.walletConnect.back' | transloco }}
    </button>
  </div>

  <!-- Wallet Encryption Choice State -->
  <div *ngIf="state() === 'WALLET_ENCRYPT_CHOICE'" class="space-y-6">
    <!-- Wallet Identity Badge -->
    <div class="flex flex-col items-center gap-3 mb-2">
      <!-- Placeholder Avatar -->
      <div
        class="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 flex items-center justify-center shadow-inner"
      >
        <mat-icon class="text-indigo-500 !w-10 !h-10 !text-[40px]">account_balance_wallet</mat-icon>
      </div>

      <!-- Address Chip -->
      <div
        class="flex items-center gap-2 px-3 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700"
      >
        <span class="w-2 h-2 rounded-full bg-green-500"></span>
        <span class="text-xs font-mono text-slate-600 dark:text-slate-300">
          {{ tempWalletAddress()?.substring(0, 6) }}...{{ tempWalletAddress()?.substring(38) }}
        </span>
      </div>
    </div>

    <!-- Instruction Text -->
    <div class="text-center px-2">
      <p
        class="text-sm leading-relaxed text-slate-600 dark:text-slate-400"
        [innerHTML]="'authModal.walletEncrypt.instruction' | transloco"
      ></p>
    </div>

    <!-- Action Buttons -->
    <div class="space-y-3 pt-2">
      <!-- Passkey Option -->
      <button
        *ngIf="passkeySupported()"
        mat-flat-button
        color="primary"
        class="w-full !h-12 !rounded-lg !text-base shadow-lg shadow-indigo-500/20"
        (click)="encryptWithPasskey()"
        [disabled]="isLoading()"
      >
        <div class="flex items-center justify-center gap-2">
          <mat-icon class="!w-5 !h-5 !text-[20px]">fingerprint</mat-icon>
          <span>{{ 'authModal.walletEncrypt.createPasskey' | transloco }}</span>
        </div>
      </button>

      <!-- PIN Option -->
      <button
        mat-stroked-button
        class="w-full !h-12 !rounded-lg !text-base !border-slate-300 dark:!border-slate-700 hover:!bg-slate-50 dark:hover:!bg-slate-800 transition-colors"
        (click)="usePINInstead()"
        [disabled]="isLoading()"
      >
        <div class="flex items-center justify-center gap-2">
          <mat-icon class="!w-5 !h-5 !text-[20px] text-slate-500">pin</mat-icon>
          <span class="text-slate-700 dark:text-slate-300">
            {{ 'authModal.walletEncrypt.usePIN' | transloco }}
          </span>
        </div>
      </button>
    </div>

    <!-- Not Supported Warning -->
    <div *ngIf="!passkeySupported()" class="text-center">
      <p class="text-xs text-amber-600 dark:text-amber-500">
        {{ 'authModal.walletEncrypt.notSupported' | transloco }}
      </p>
    </div>

    <!-- Loading -->
    <div *ngIf="isLoading()" class="flex justify-center py-2">
      <mat-progress-spinner diameter="24" mode="indeterminate"></mat-progress-spinner>
    </div>
  </div>

  <!-- Wallet Encryption PIN State -->
  <div *ngIf="state() === 'WALLET_ENCRYPT_PIN'" class="space-y-6">
    <div class="text-center space-y-2">
      <div
        class="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-full mx-auto flex items-center justify-center mb-4"
      >
        <mat-icon class="text-indigo-600 dark:text-indigo-400 !w-6 !h-6 !text-[24px]">pin</mat-icon>
      </div>
      <h3 class="font-bold">{{ 'authModal.pinSetup.title' | transloco }}</h3>
      <p class="text-sm text-slate-500">
        {{ 'authModal.pinSetup.subtitle' | transloco }}
      </p>
    </div>

    <div
      class="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-3"
    >
      <div class="flex items-start gap-2">
        <mat-icon class="text-amber-600 dark:text-amber-400 !w-4 !h-4 !text-[16px] mt-0.5"
          >warning</mat-icon
        >
        <p
          class="text-xs text-amber-700 dark:text-amber-300"
          [innerHTML]="'authModal.pinSetup.warning' | transloco"
        ></p>
      </div>
    </div>

    <div class="flex justify-between gap-2">
      <input
        *ngFor="let digit of pinArray(); let i = index"
        [id]="'pin-' + i"
        type="password"
        inputmode="numeric"
        maxlength="1"
        [value]="digit"
        (input)="onPinInput($event, i)"
        (keydown)="onPinKeyDown($event, i)"
        class="w-12 h-14 text-center text-2xl font-bold rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent focus:ring-2 focus:ring-indigo-500 focus:outline-none"
      />
    </div>

    <button
      mat-flat-button
      color="primary"
      class="w-full !h-11 !rounded-lg"
      [disabled]="pinArray().join('').length !== 6 || isLoading()"
      (click)="encryptWithPIN()"
    >
      <span *ngIf="!isLoading()">{{ 'authModal.pinSetup.encryptWallet' | transloco }}</span>
      <mat-progress-spinner
        *ngIf="isLoading()"
        diameter="20"
        mode="indeterminate"
      ></mat-progress-spinner>
    </button>

    <button mat-button class="w-full" (click)="setState('WALLET_ENCRYPT_CHOICE')">
      {{ 'authModal.pinSetup.back' | transloco }}
    </button>
  </div>

  <div class="mt-8 text-center text-[10px] text-slate-400">
    {{ 'authModal.footer.protectedBy' | transloco }}
  </div>
</div>
` }]
  }], () => [], { countryButtonRef: [{
    type: ViewChild,
    args: ["countryButton", { static: false }]
  }], onDocumentClick: [{
    type: HostListener,
    args: ["document:click", ["$event"]]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AuthModalComponent, { className: "AuthModalComponent", filePath: "src/app/layout/common/auth-modal/auth-modal.component.ts", lineNumber: 65 });
})();

export {
  AuthApiService,
  AuthModalComponent
};
//# sourceMappingURL=chunk-3W2P7LZN.js.map
