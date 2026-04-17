import {
  MatCheckbox,
  MatCheckboxModule
} from "./chunk-6734Q5GP.js";
import "./chunk-A6T5DVED.js";
import "./chunk-GMB4P7VL.js";
import "./chunk-B4CPLDBC.js";
import "./chunk-MJXNRHWH.js";
import "./chunk-346ISJSG.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-HZKTYM3F.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-EL6Z63TT.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-AY2HQ4EH.js";
import {
  MatOption
} from "./chunk-SYP4RNRN.js";
import {
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatLabel,
  MatSuffix
} from "./chunk-3YVZWUPK.js";
import "./chunk-L4JZMXIC.js";
import "./chunk-2W5F3UIW.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  MaxLengthValidator,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-TX3AVWPC.js";
import "./chunk-OIBNGD5S.js";
import {
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
  HttpClient,
  Injectable,
  JsonPipe,
  MatButton,
  MatButtonModule,
  NgForOf,
  NgIf,
  ViewEncapsulation,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-YTOBX75K.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KTESVR3Q.js";

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

// src/app/modules/zelf-id/zelf-id.models.ts
var ProjectFlow = class {
  constructor(data) {
    this.raw = data;
    this.onboardingSettings = this._parseOnboardingSettings(data.onboardingSettings || {});
  }
  get _id() {
    return this.raw._id;
  }
  _parseOnboardingSettings(settings) {
    return {
      steps: settings.steps || {
        signUpForm: "mandatory",
        basicInformation: "skip",
        document: "optional",
        liveness: "optional",
        form: "skip"
      },
      signUpForm: {
        fullName: settings.signUpForm?.fullName ?? false,
        firstName: settings.signUpForm?.firstName ?? false,
        lastName: settings.signUpForm?.lastName ?? false,
        email: settings.signUpForm?.email ?? false,
        emailGateway: settings.signUpForm?.emailGateway || "none",
        phone: settings.signUpForm?.phone ?? false,
        phoneGateway: settings.signUpForm?.phoneGateway || "sms",
        extraFields: settings.signUpForm?.extraFields || [],
        showTermsAndConditions: settings.signUpForm?.showTermsAndConditions ?? false,
        showPrivacyNotice: settings.signUpForm?.showPrivacyNotice ?? false,
        fullNameStyle: settings.signUpForm?.fullNameStyle
      },
      document: settings.document || {},
      // Map fully if needed, for now passing through
      liveness: settings.liveness || {},
      basicInformation: settings.basicInformation || {}
    };
  }
  get isNameSeparated() {
    if (this.onboardingSettings.signUpForm.fullNameStyle === "separate")
      return true;
    if (this.onboardingSettings.signUpForm.fullNameStyle === "together")
      return false;
    if (this.onboardingSettings.signUpForm.firstName && this.onboardingSettings.signUpForm.lastName) {
      return true;
    }
    if (this.onboardingSettings.signUpForm.fullName)
      return false;
    return true;
  }
};

// src/app/modules/zelf-id/zelf-id.component.ts
function ZelfIdComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "mat-progress-spinner", 16);
    \u0275\u0275elementStart(2, "p", 17);
    \u0275\u0275text(3, "Loading configuration...");
    \u0275\u0275elementEnd()();
  }
}
function ZelfIdComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 19);
    \u0275\u0275element(2, "mat-icon", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 21);
    \u0275\u0275text(4, " Error Loading Project ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 22);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 23);
    \u0275\u0275listener("click", function ZelfIdComponent_div_15_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.loadProject());
    });
    \u0275\u0275text(8, " Retry ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("svgIcon", "heroicons_outline:exclamation-triangle");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.error());
  }
}
function ZelfIdComponent_div_16_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275element(1, "img", 33);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.project().logo, \u0275\u0275sanitizeUrl);
  }
}
function ZelfIdComponent_div_16_div_8_form_3_mat_form_field_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-form-field", 44)(1, "mat-label");
    \u0275\u0275text(2, "Full Name*");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 45);
    \u0275\u0275elementStart(4, "mat-error");
    \u0275\u0275text(5, "Name is required");
    \u0275\u0275elementEnd()();
  }
}
function ZelfIdComponent_div_16_div_8_form_3_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46)(1, "mat-form-field", 47)(2, "mat-label");
    \u0275\u0275text(3, "First Name*");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 48);
    \u0275\u0275elementStart(5, "mat-error");
    \u0275\u0275text(6, "First Name is required");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "mat-form-field", 47)(8, "mat-label");
    \u0275\u0275text(9, "Last Name*");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "input", 49);
    \u0275\u0275elementStart(11, "mat-error");
    \u0275\u0275text(12, "Last Name is required");
    \u0275\u0275elementEnd()()();
  }
}
function ZelfIdComponent_div_16_div_8_form_3_mat_form_field_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-form-field", 44)(1, "mat-label");
    \u0275\u0275text(2, "Email*");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 50);
    \u0275\u0275elementStart(4, "mat-error");
    \u0275\u0275text(5, "Email is required");
    \u0275\u0275elementEnd()();
  }
}
function ZelfIdComponent_div_16_div_8_form_3_div_4_mat_option_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 57)(1, "span", 58);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cc_r4 = ctx.$implicit;
    \u0275\u0275property("value", cc_r4.code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cc_r4.flag);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cc_r4.code, " ");
  }
}
function ZelfIdComponent_div_16_div_8_form_3_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46)(1, "mat-form-field", 51)(2, "mat-label");
    \u0275\u0275text(3, "Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-select", 52);
    \u0275\u0275template(5, ZelfIdComponent_div_16_div_8_form_3_div_4_mat_option_5_Template, 4, 3, "mat-option", 53);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-form-field", 54)(7, "mat-label");
    \u0275\u0275text(8, "Phone*");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "input", 55);
    \u0275\u0275elementStart(10, "mat-icon", 56);
    \u0275\u0275text(11, "call");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-error");
    \u0275\u0275text(13, "Phone is required");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r1.countryCodes);
  }
}
function ZelfIdComponent_div_16_div_8_form_3_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59)(1, "mat-checkbox", 60);
    \u0275\u0275text(2, "I agree to the Terms and Conditions");
    \u0275\u0275elementEnd()();
  }
}
function ZelfIdComponent_div_16_div_8_form_3_mat_progress_spinner_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-spinner", 61);
  }
}
function ZelfIdComponent_div_16_div_8_form_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 37);
    \u0275\u0275listener("ngSubmit", function ZelfIdComponent_div_16_div_8_form_3_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.submitForm());
    });
    \u0275\u0275template(1, ZelfIdComponent_div_16_div_8_form_3_mat_form_field_1_Template, 6, 0, "mat-form-field", 38)(2, ZelfIdComponent_div_16_div_8_form_3_div_2_Template, 13, 0, "div", 39)(3, ZelfIdComponent_div_16_div_8_form_3_mat_form_field_3_Template, 6, 0, "mat-form-field", 38)(4, ZelfIdComponent_div_16_div_8_form_3_div_4_Template, 14, 1, "div", 39)(5, ZelfIdComponent_div_16_div_8_form_3_div_5_Template, 3, 0, "div", 40);
    \u0275\u0275elementStart(6, "div", 41)(7, "button", 42);
    \u0275\u0275template(8, ZelfIdComponent_div_16_div_8_form_3_mat_progress_spinner_8_Template, 1, 0, "mat-progress-spinner", 43);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("formGroup", ctx_r1.signUpForm);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.formFields().includes("fullName"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.formFields().includes("firstName"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.formFields().includes("email"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.formFields().includes("phone"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.formFields().includes("agreements"));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.signUpForm.invalid || ctx_r1.saving());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.saving());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.saving() ? "Registering..." : "Start Verification", " ");
  }
}
function ZelfIdComponent_div_16_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "p", 35);
    \u0275\u0275text(2, " Please fill in your details to proceed with the verification. ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ZelfIdComponent_div_16_div_8_form_3_Template, 10, 9, "form", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.signUpForm);
  }
}
function ZelfIdComponent_div_16_div_9_mat_progress_spinner_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-spinner", 76);
  }
}
function ZelfIdComponent_div_16_div_9_span_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Verify Code");
    \u0275\u0275elementEnd();
  }
}
function ZelfIdComponent_div_16_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 62)(1, "div", 63);
    \u0275\u0275element(2, "mat-icon", 64);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 65);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 66);
    \u0275\u0275text(6, " We sent a verification code to ");
    \u0275\u0275element(7, "br");
    \u0275\u0275elementStart(8, "span", 67);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "form", 68);
    \u0275\u0275listener("ngSubmit", function ZelfIdComponent_div_16_div_9_Template_form_ngSubmit_10_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.verifyOtp());
    });
    \u0275\u0275elementStart(11, "mat-form-field", 69)(12, "mat-label");
    \u0275\u0275text(13, "Verification Code");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "input", 70);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 71);
    \u0275\u0275template(16, ZelfIdComponent_div_16_div_9_mat_progress_spinner_16_Template, 1, 0, "mat-progress-spinner", 72)(17, ZelfIdComponent_div_16_div_9_span_17_Template, 2, 0, "span", 73);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "button", 74);
    \u0275\u0275listener("click", function ZelfIdComponent_div_16_div_9_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.sendOtp(ctx_r1.step() === "otp-email" ? "email" : "phone"));
    });
    \u0275\u0275text(19, " Did not receive code? ");
    \u0275\u0275elementStart(20, "span", 75);
    \u0275\u0275text(21, "Resend");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("svgIcon", ctx_r1.step() === "otp-email" ? "heroicons_outline:envelope" : "heroicons_outline:device-phone-mobile");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Verify ", ctx_r1.step() === "otp-email" ? "Email Address" : "Phone Number", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.step() === "otp-email" ? ctx_r1.appRegistration().email : ctx_r1.appRegistration().countryCode + " " + ctx_r1.appRegistration().phone, " ");
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.otpForm);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r1.otpForm.invalid || ctx_r1.saving());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.saving());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.saving());
  }
}
function ZelfIdComponent_div_16_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 77)(1, "div", 78);
    \u0275\u0275element(2, "mat-icon", 79);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 80);
    \u0275\u0275text(4, "Registration Complete!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 22);
    \u0275\u0275text(6, " Your identity has been registered and contact details verified. ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("svgIcon", "heroicons_outline:check-circle");
  }
}
function ZelfIdComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 25);
    \u0275\u0275template(2, ZelfIdComponent_div_16_div_2_Template, 2, 1, "div", 26);
    \u0275\u0275elementStart(3, "div")(4, "h3", 27);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 28);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(8, ZelfIdComponent_div_16_div_8_Template, 4, 1, "div", 29)(9, ZelfIdComponent_div_16_div_9_Template, 22, 7, "div", 30)(10, ZelfIdComponent_div_16_div_10_Template, 7, 1, "div", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.project().logo);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.project().name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.project().description || "Please complete the verification steps below.", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.step() === "registration");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.step().startsWith("otp"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.step() === "complete");
  }
}
function ZelfIdComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 81)(1, "h4", 82);
    \u0275\u0275text(2, " Flow Debug Config ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 83)(4, "div")(5, "span", 84);
    \u0275\u0275text(6, "Flow Version:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 85);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div")(10, "span", 84);
    \u0275\u0275text(11, "Flow Type:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 86);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div")(15, "span", 84);
    \u0275\u0275text(16, "Full Name Style:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 86);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div")(20, "span", 84);
    \u0275\u0275text(21, "FullName:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 86);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div")(25, "span", 84);
    \u0275\u0275text(26, "FirstName:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span", 86);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div")(30, "span", 84);
    \u0275\u0275text(31, "LastName:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span", 86);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 87)(35, "span", 84);
    \u0275\u0275text(36, "Computed Name Logic:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "span", 88);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 89)(40, "span", 84);
    \u0275\u0275text(41, "Raw Settings:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "pre", 90);
    \u0275\u0275text(43);
    \u0275\u0275pipe(44, "json");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(((tmp_1_0 = ctx_r1.projectFlow()) == null ? null : tmp_1_0.raw == null ? null : tmp_1_0.raw.version) || "N/A");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((tmp_2_0 = ctx_r1.projectFlow()) == null ? null : tmp_2_0.raw == null ? null : tmp_2_0.raw.type);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(((tmp_3_0 = ctx_r1.projectFlow()) == null ? null : tmp_3_0.onboardingSettings == null ? null : tmp_3_0.onboardingSettings.signUpForm == null ? null : tmp_3_0.onboardingSettings.signUpForm.fullNameStyle) || "undefined");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((tmp_4_0 = ctx_r1.projectFlow()) == null ? null : tmp_4_0.onboardingSettings == null ? null : tmp_4_0.onboardingSettings.signUpForm == null ? null : tmp_4_0.onboardingSettings.signUpForm.fullName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((tmp_5_0 = ctx_r1.projectFlow()) == null ? null : tmp_5_0.onboardingSettings == null ? null : tmp_5_0.onboardingSettings.signUpForm == null ? null : tmp_5_0.onboardingSettings.signUpForm.firstName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((tmp_6_0 = ctx_r1.projectFlow()) == null ? null : tmp_6_0.onboardingSettings == null ? null : tmp_6_0.onboardingSettings.signUpForm == null ? null : tmp_6_0.onboardingSettings.signUpForm.lastName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(((tmp_7_0 = ctx_r1.projectFlow()) == null ? null : tmp_7_0.isNameSeparated) ? "SEPARATED" : "TOGETHER");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(44, 8, (tmp_8_0 = ctx_r1.projectFlow()) == null ? null : tmp_8_0.onboardingSettings == null ? null : tmp_8_0.onboardingSettings.signUpForm));
  }
}
var ZelfIdComponent = class _ZelfIdComponent {
  constructor() {
    this._verifikApi = inject(VerifikApiService);
    this._formBuilder = inject(FormBuilder);
    this.projectId = "6266193db77ccc8111730c90";
    this.project = signal(null);
    this.projectFlow = signal(null);
    this.loading = signal(true);
    this.error = signal(null);
    this.formFields = signal([]);
    this.saving = signal(false);
    this.countryCodes = [
      { code: "+1", country: "US", flag: "\u{1F1FA}\u{1F1F8}" },
      { code: "+57", country: "CO", flag: "\u{1F1E8}\u{1F1F4}" },
      { code: "+52", country: "MX", flag: "\u{1F1F2}\u{1F1FD}" },
      { code: "+507", country: "PA", flag: "\u{1F1F5}\u{1F1E6}" },
      { code: "+56", country: "CL", flag: "\u{1F1E8}\u{1F1F1}" },
      { code: "+1", country: "CA", flag: "\u{1F1E8}\u{1F1E6}" }
    ];
    this.step = signal("registration");
    this.appRegistration = signal(null);
    this.otpForm = this._formBuilder.group({
      code: ["", [Validators.required, Validators.minLength(4)]]
    });
  }
  ngOnInit() {
    this.loadProject();
  }
  loadProject() {
    this.loading.set(true);
    this._verifikApi.getProject(this.projectId).subscribe({
      next: (res) => {
        const projectData = res.data;
        this.project.set(projectData);
        if (projectData.projectFlows) {
          const activeFlows = projectData.projectFlows.filter((f) => f.status === "active").sort((a, b) => (b.version || 0) - (a.version || 0));
          let flowData = activeFlows.find((f) => f.type === "onboarding");
          if (!flowData) {
            flowData = activeFlows.find((f) => f.type === "default");
          }
          if (!flowData) {
            flowData = activeFlows.find((f) => f.type !== "login");
          }
          if (!flowData && activeFlows.length > 0) {
            flowData = activeFlows[0];
          }
          if (flowData) {
            const flow = new ProjectFlow(flowData);
            this.projectFlow.set(flow);
            this.initForm(flow);
          } else {
            this.error.set("No active Zelf ID flow found.");
          }
        }
        this.loading.set(false);
      },
      error: (err) => {
        console.error(err);
        this.error.set("Failed to load Zelf ID configuration.");
        this.loading.set(false);
      }
    });
  }
  initForm(flow) {
    const settings = flow.onboardingSettings.signUpForm;
    console.log("Zelf ID Flow Configuration:", settings);
    console.log("Is Name Separated?", flow.isNameSeparated);
    const fields = {};
    const activeFields = [];
    if (flow.isNameSeparated) {
      fields["firstName"] = [
        "",
        [
          Validators.required,
          Validators.minLength(2),
          Validators.pattern("^[a-zA-Z\xC0-\xD6\xD8-\xF6\xF8-\xFF\\s]+$")
        ]
      ];
      fields["lastName"] = [
        "",
        [
          Validators.required,
          Validators.minLength(2),
          Validators.pattern("^[a-zA-Z\xC0-\xD6\xD8-\xF6\xF8-\xFF\\s]+$")
        ]
      ];
      activeFields.push("firstName", "lastName");
    } else {
      fields["fullName"] = [
        "",
        [
          Validators.required,
          Validators.minLength(2),
          Validators.pattern("^[a-zA-Z\xC0-\xD6\xD8-\xF6\xF8-\xFF\\s]+$")
        ]
      ];
      activeFields.push("fullName");
    }
    if (settings.email !== false) {
      fields["email"] = [
        "",
        [
          Validators.required,
          Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
        ]
      ];
      activeFields.push("email");
    }
    if (settings.phone !== false) {
      fields["phone"] = ["", [Validators.required, Validators.pattern(/^\d+$/)]];
      fields["countryCode"] = ["+1", [Validators.required]];
      activeFields.push("phone");
    }
    if (settings.showTermsAndConditions || settings.showPrivacyNotice) {
      fields["agreements"] = [false, [Validators.requiredTrue]];
      activeFields.push("agreements");
    }
    this.signUpForm = this._formBuilder.group(fields);
    this.formFields.set(activeFields);
  }
  submitForm() {
    if (this.signUpForm?.invalid)
      return;
    this.saving.set(true);
    const formValue = this.signUpForm.value;
    const payload = __spreadValues({
      project: this.project()._id,
      projectFlow: this.projectFlow()._id
    }, formValue);
    this._verifikApi.createAppRegistration(this.projectId, payload).subscribe({
      next: (res) => {
        this.saving.set(false);
        const data = res.data;
        const token = data.token;
        const appReg = data.appRegistration;
        if (token && appReg) {
          localStorage.setItem("appRegistrationToken", token);
          this.appRegistration.set(appReg);
          this._determineNextStep(appReg);
        }
      },
      error: (err) => {
        console.error(err);
        this.saving.set(false);
        alert("Registration Failed: " + (err.error?.message || err.message));
      }
    });
  }
  _determineNextStep(appReg) {
    const flow = this.projectFlow();
    const settings = flow.onboardingSettings.signUpForm;
    if (appReg.email && !appReg.emailValidation && settings.emailGateway !== "none") {
      this.step.set("otp-email");
      this.sendOtp("email");
      return;
    }
    if (appReg.phone && !appReg.phoneValidation && settings.phoneGateway !== "none") {
      this.step.set("otp-phone");
      this.sendOtp("phone");
      return;
    }
    this.step.set("complete");
  }
  sendOtp(type) {
    this.loading.set(true);
    const appReg = this.appRegistration();
    const token = localStorage.getItem("appRegistrationToken") || "";
    const data = {
      project: this.project()._id,
      type,
      email: appReg.email,
      phone: appReg.phone,
      countryCode: appReg.countryCode
    };
    this._verifikApi.sendOtp(token, data).subscribe({
      next: () => {
        this.loading.set(false);
        this.otpForm.reset();
      },
      error: (err) => {
        this.loading.set(false);
        console.error("OTP Send Error", err);
      }
    });
  }
  verifyOtp() {
    if (this.otpForm.invalid)
      return;
    this.saving.set(true);
    const code = this.otpForm.get("code")?.value;
    const type = this.step() === "otp-email" ? "email" : "phone";
    const appReg = this.appRegistration();
    const flowId = this.projectFlow()._id;
    const token = localStorage.getItem("appRegistrationToken") || "";
    const data = {
      project: this.project()._id,
      projectFlow: flowId,
      type,
      email: appReg.email,
      phone: appReg.phone,
      countryCode: appReg.countryCode,
      code
    };
    this._verifikApi.verifyOtp(token, data).subscribe({
      next: (res) => {
        this.saving.set(false);
        const updatedReg = __spreadValues({}, this.appRegistration());
        if (type === "email")
          updatedReg.emailValidation = true;
        if (type === "phone")
          updatedReg.phoneValidation = true;
        this.appRegistration.set(updatedReg);
        this._determineNextStep(updatedReg);
      },
      error: (err) => {
        this.saving.set(false);
        alert("Invalid Code");
      }
    });
  }
  static {
    this.\u0275fac = function ZelfIdComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ZelfIdComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ZelfIdComponent, selectors: [["zelf-id"]], decls: 18, vars: 5, consts: [[1, "flex", "flex-col", "flex-auto", "min-w-0"], [1, "flex", "flex-col", "sm:flex-row", "flex-0", "sm:items-center", "sm:justify-between", "p-6", "sm:py-8", "sm:px-10", "border-b", "bg-card", "dark:bg-transparent"], [1, "flex-1", "min-w-0"], [1, "flex", "flex-wrap", "items-center", "font-medium", "text-xs", "text-secondary", "leading-none"], [1, "cursor-pointer", "text-primary-500", "hover:underline"], [1, "icon-size-4", "mx-2", "text-secondary", 3, "svgIcon"], [1, "cursor-default"], [1, "mt-2"], [1, "text-3xl", "md:text-4xl", "font-extrabold", "tracking-tight", "leading-7", "sm:leading-10", "truncate"], [1, "flex", "flex-col", "flex-auto", "p-6", "sm:p-10"], [1, "flex", "flex-col", "bg-card", "shadow", "rounded-2xl", "w-full", "p-8", "max-w-3xl", "mx-auto"], ["class", "flex flex-col items-center justify-center py-12", 4, "ngIf"], ["class", "flex flex-col items-center justify-center py-8 text-center", 4, "ngIf"], ["class", "flex flex-col animate-fadeIn", 4, "ngIf"], ["class", "mt-8 p-6 bg-slate-100 dark:bg-slate-800 rounded-2xl w-full max-w-3xl mx-auto", 4, "ngIf"], [1, "flex", "flex-col", "items-center", "justify-center", "py-12"], ["mode", "indeterminate", "diameter", "48"], [1, "mt-4", "text-secondary", "font-medium"], [1, "flex", "flex-col", "items-center", "justify-center", "py-8", "text-center"], [1, "w-12", "h-12", "rounded-full", "bg-red-100", "dark:bg-red-900/30", "flex", "items-center", "justify-center", "mb-4"], [1, "text-red-600", "dark:text-red-400", 3, "svgIcon"], [1, "text-lg", "font-semibold", "text-red-600", "dark:text-red-400", "mb-2"], [1, "text-secondary", "max-w-md"], ["mat-stroked-button", "", "color", "primary", 1, "mt-6", 3, "click"], [1, "flex", "flex-col", "animate-fadeIn"], [1, "flex", "items-center", "gap-4", "mb-6"], ["class", "w-16 h-16 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center", 4, "ngIf"], [1, "text-xl", "font-bold"], [1, "text-secondary", "text-sm"], ["class", "border-t border-slate-200 dark:border-slate-700 pt-6", 4, "ngIf"], ["class", "flex flex-col items-center py-8", 4, "ngIf"], ["class", "flex flex-col items-center py-12 text-center animate-fadeIn", 4, "ngIf"], [1, "w-16", "h-16", "rounded-xl", "bg-slate-100", "dark:bg-slate-800", "flex", "items-center", "justify-center"], [1, "w-10", "h-10", "object-contain", 3, "src"], [1, "border-t", "border-slate-200", "dark:border-slate-700", "pt-6"], [1, "text-slate-600", "dark:text-slate-400", "mb-6"], ["class", "flex flex-col gap-4", 3, "formGroup", "ngSubmit", 4, "ngIf"], [1, "flex", "flex-col", "gap-4", 3, "ngSubmit", "formGroup"], ["class", "w-full", 4, "ngIf"], ["class", "flex gap-4", 4, "ngIf"], ["class", "flex items-center my-2", 4, "ngIf"], [1, "mt-4", "flex", "justify-end"], ["mat-flat-button", "", "color", "primary", 1, "px-8", "w-full", "sm:w-auto", 3, "disabled"], ["mode", "indeterminate", "diameter", "20", "class", "mr-2", 4, "ngIf"], [1, "w-full"], ["matInput", "", "formControlName", "fullName", "placeholder", "John Doe"], [1, "flex", "gap-4"], [1, "w-1/2"], ["matInput", "", "formControlName", "firstName"], ["matInput", "", "formControlName", "lastName"], ["matInput", "", "formControlName", "email", "type", "email", "placeholder", "john@example.com"], [1, "w-32"], ["formControlName", "countryCode"], [3, "value", 4, "ngFor", "ngForOf"], [1, "flex-auto"], ["matInput", "", "formControlName", "phone", "type", "tel", "placeholder", "1234567890"], ["matSuffix", ""], [3, "value"], [1, "mr-2"], [1, "flex", "items-center", "my-2"], ["formControlName", "agreements"], ["mode", "indeterminate", "diameter", "20", 1, "mr-2"], [1, "flex", "flex-col", "items-center", "py-8"], [1, "w-16", "h-16", "bg-blue-100", "dark:bg-blue-900/30", "rounded-full", "flex", "items-center", "justify-center", "mb-6", "text-blue-600", "dark:text-blue-400"], [1, "icon-size-8", 3, "svgIcon"], [1, "text-2xl", "font-bold", "mb-2"], [1, "text-secondary", "mb-8", "text-center", "max-w-sm"], [1, "font-bold", "text-slate-800", "dark:text-slate-200"], [1, "w-full", "max-w-xs", "flex", "flex-col", "gap-4", 3, "ngSubmit", "formGroup"], [1, "w-full", "text-center"], ["matInput", "", "formControlName", "code", "placeholder", "0000", "maxlength", "6", 1, "text-center", "tracking-widest", "text-2xl", "font-mono"], ["mat-flat-button", "", "color", "primary", "type", "submit", 1, "w-full", "h-12", "text-lg", "rounded-xl", 3, "disabled"], ["mode", "indeterminate", "diameter", "24", "class", "mr-2 inline-block", 4, "ngIf"], [4, "ngIf"], ["mat-button", "", 1, "mt-6", "text-secondary", 3, "click"], [1, "text-primary", "hover:underline"], ["mode", "indeterminate", "diameter", "24", 1, "mr-2", "inline-block"], [1, "flex", "flex-col", "items-center", "py-12", "text-center", "animate-fadeIn"], [1, "w-20", "h-20", "bg-green-100", "dark:bg-green-900/30", "rounded-full", "flex", "items-center", "justify-center", "mb-6", "text-green-600", "dark:text-green-400"], [1, "icon-size-12", 3, "svgIcon"], [1, "text-3xl", "font-bold", "mb-4"], [1, "mt-8", "p-6", "bg-slate-100", "dark:bg-slate-800", "rounded-2xl", "w-full", "max-w-3xl", "mx-auto"], [1, "font-bold", "text-sm", "mb-2", "text-slate-500", "uppercase", "tracking-wider"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "gap-4", "text-xs", "font-mono"], [1, "text-slate-500"], [1, "ml-2", "font-bold", "text-green-600"], [1, "ml-2", "font-bold"], [1, "col-span-1", "sm:col-span-2", "mt-2", "pt-2", "border-t", "border-slate-200", "dark:border-slate-700"], [1, "ml-2", "font-bold", "text-primary-500"], [1, "col-span-1", "sm:col-span-2"], [1, "mt-1", "p-2", "bg-white", "dark:bg-black/20", "rounded"]], template: function ZelfIdComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "a", 4);
        \u0275\u0275text(5, "Verifik");
        \u0275\u0275elementEnd();
        \u0275\u0275element(6, "mat-icon", 5);
        \u0275\u0275elementStart(7, "span", 6);
        \u0275\u0275text(8, "Zelf ID");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 7)(10, "h2", 8);
        \u0275\u0275text(11, " Identity Verification ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(12, "div", 9)(13, "div", 10);
        \u0275\u0275template(14, ZelfIdComponent_div_14_Template, 4, 0, "div", 11)(15, ZelfIdComponent_div_15_Template, 9, 2, "div", 12)(16, ZelfIdComponent_div_16_Template, 11, 6, "div", 13)(17, ZelfIdComponent_div_17_Template, 45, 10, "div", 14);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275property("svgIcon", "heroicons_solid:chevron-right");
        \u0275\u0275advance(8);
        \u0275\u0275property("ngIf", ctx.loading());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.error());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading() && !ctx.error() && ctx.project());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.projectFlow());
      }
    }, dependencies: [
      CommonModule,
      NgForOf,
      NgIf,
      JsonPipe,
      ReactiveFormsModule,
      \u0275NgNoValidate,
      DefaultValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      MaxLengthValidator,
      FormGroupDirective,
      FormControlName,
      MatButtonModule,
      MatButton,
      MatIconModule,
      MatIcon,
      MatInputModule,
      MatInput,
      MatFormField,
      MatLabel,
      MatError,
      MatSuffix,
      MatFormFieldModule,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatCheckboxModule,
      MatCheckbox,
      MatSelectModule,
      MatSelect,
      MatOption
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ZelfIdComponent, [{
    type: Component,
    args: [{ selector: "zelf-id", standalone: true, imports: [
      CommonModule,
      ReactiveFormsModule,
      MatButtonModule,
      MatIconModule,
      MatInputModule,
      MatFormFieldModule,
      MatProgressSpinnerModule,
      MatCheckboxModule,
      MatSelectModule
    ], encapsulation: ViewEncapsulation.None, template: `<div class="flex flex-col flex-auto min-w-0">
  <!-- Header -->
  <div
    class="flex flex-col sm:flex-row flex-0 sm:items-center sm:justify-between p-6 sm:py-8 sm:px-10 border-b bg-card dark:bg-transparent"
  >
    <div class="flex-1 min-w-0">
      <!-- Breadcrumbs -->
      <div class="flex flex-wrap items-center font-medium text-xs text-secondary leading-none">
        <a class="cursor-pointer text-primary-500 hover:underline">Verifik</a>
        <mat-icon
          class="icon-size-4 mx-2 text-secondary"
          [svgIcon]="'heroicons_solid:chevron-right'"
        ></mat-icon>
        <span class="cursor-default">Zelf ID</span>
      </div>
      <!-- Title -->
      <div class="mt-2">
        <h2
          class="text-3xl md:text-4xl font-extrabold tracking-tight leading-7 sm:leading-10 truncate"
        >
          Identity Verification
        </h2>
      </div>
    </div>
  </div>

  <!-- Main Content -->
  <div class="flex flex-col flex-auto p-6 sm:p-10">
    <div class="flex flex-col bg-card shadow rounded-2xl w-full p-8 max-w-3xl mx-auto">
      <!-- Loading -->
      <div *ngIf="loading()" class="flex flex-col items-center justify-center py-12">
        <mat-progress-spinner mode="indeterminate" diameter="48"></mat-progress-spinner>
        <p class="mt-4 text-secondary font-medium">Loading configuration...</p>
      </div>

      <!-- Error -->
      <div *ngIf="error()" class="flex flex-col items-center justify-center py-8 text-center">
        <div
          class="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center mb-4"
        >
          <mat-icon
            class="text-red-600 dark:text-red-400"
            [svgIcon]="'heroicons_outline:exclamation-triangle'"
          ></mat-icon>
        </div>
        <h3 class="text-lg font-semibold text-red-600 dark:text-red-400 mb-2">
          Error Loading Project
        </h3>
        <p class="text-secondary max-w-md">{{ error() }}</p>
        <button mat-stroked-button color="primary" class="mt-6" (click)="loadProject()">
          Retry
        </button>
      </div>

      <!-- Content -->
      <div *ngIf="!loading() && !error() && project()" class="flex flex-col animate-fadeIn">
        <div class="flex items-center gap-4 mb-6">
          <div
            class="w-16 h-16 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center"
            *ngIf="project().logo"
          >
            <img [src]="project().logo" class="w-10 h-10 object-contain" />
          </div>
          <div>
            <h3 class="text-xl font-bold">{{ project().name }}</h3>
            <p class="text-secondary text-sm">
              {{ project().description || 'Please complete the verification steps below.' }}
            </p>
          </div>
        </div>

        <div
          class="border-t border-slate-200 dark:border-slate-700 pt-6"
          *ngIf="step() === 'registration'"
        >
          <p class="text-slate-600 dark:text-slate-400 mb-6">
            Please fill in your details to proceed with the verification.
          </p>

          <!-- Form -->
          <form
            [formGroup]="signUpForm"
            (ngSubmit)="submitForm()"
            class="flex flex-col gap-4"
            *ngIf="signUpForm"
          >
            <!-- Full Name -->
            <mat-form-field *ngIf="formFields().includes('fullName')" class="w-full">
              <mat-label>Full Name*</mat-label>
              <input matInput formControlName="fullName" placeholder="John Doe" />
              <mat-error>Name is required</mat-error>
            </mat-form-field>

            <!-- Split Name -->
            <div class="flex gap-4" *ngIf="formFields().includes('firstName')">
              <mat-form-field class="w-1/2">
                <mat-label>First Name*</mat-label>
                <input matInput formControlName="firstName" />
                <mat-error>First Name is required</mat-error>
              </mat-form-field>
              <mat-form-field class="w-1/2">
                <mat-label>Last Name*</mat-label>
                <input matInput formControlName="lastName" />
                <mat-error>Last Name is required</mat-error>
              </mat-form-field>
            </div>

            <!-- Email -->
            <mat-form-field *ngIf="formFields().includes('email')" class="w-full">
              <mat-label>Email*</mat-label>
              <input matInput formControlName="email" type="email" placeholder="john@example.com" />
              <mat-error>Email is required</mat-error>
            </mat-form-field>

            <!-- Phone -->
            <div class="flex gap-4" *ngIf="formFields().includes('phone')">
              <mat-form-field class="w-32">
                <mat-label>Code</mat-label>
                <mat-select formControlName="countryCode">
                  <mat-option *ngFor="let cc of countryCodes" [value]="cc.code">
                    <span class="mr-2">{{ cc.flag }}</span> {{ cc.code }}
                  </mat-option>
                </mat-select>
              </mat-form-field>
              <mat-form-field class="flex-auto">
                <mat-label>Phone*</mat-label>
                <input matInput formControlName="phone" type="tel" placeholder="1234567890" />
                <mat-icon matSuffix>call</mat-icon>
                <mat-error>Phone is required</mat-error>
              </mat-form-field>
            </div>

            <!-- Terms -->
            <div *ngIf="formFields().includes('agreements')" class="flex items-center my-2">
              <mat-checkbox formControlName="agreements"
                >I agree to the Terms and Conditions</mat-checkbox
              >
            </div>

            <div class="mt-4 flex justify-end">
              <button
                mat-flat-button
                color="primary"
                [disabled]="signUpForm.invalid || saving()"
                class="px-8 w-full sm:w-auto"
              >
                <mat-progress-spinner
                  *ngIf="saving()"
                  mode="indeterminate"
                  diameter="20"
                  class="mr-2"
                ></mat-progress-spinner>
                {{ saving() ? 'Registering...' : 'Start Verification' }}
              </button>
            </div>
          </form>
        </div>

        <!-- OTP Verification Step -->
        <div *ngIf="step().startsWith('otp')" class="flex flex-col items-center py-8">
          <div
            class="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400"
          >
            <mat-icon
              [svgIcon]="
                step() === 'otp-email'
                  ? 'heroicons_outline:envelope'
                  : 'heroicons_outline:device-phone-mobile'
              "
              class="icon-size-8"
            ></mat-icon>
          </div>
          <h3 class="text-2xl font-bold mb-2">
            Verify {{ step() === 'otp-email' ? 'Email Address' : 'Phone Number' }}
          </h3>
          <p class="text-secondary mb-8 text-center max-w-sm">
            We sent a verification code to <br />
            <span class="font-bold text-slate-800 dark:text-slate-200">
              {{
                step() === 'otp-email'
                  ? appRegistration().email
                  : appRegistration().countryCode + ' ' + appRegistration().phone
              }}
            </span>
          </p>

          <form
            [formGroup]="otpForm"
            (ngSubmit)="verifyOtp()"
            class="w-full max-w-xs flex flex-col gap-4"
          >
            <mat-form-field class="w-full text-center">
              <mat-label>Verification Code</mat-label>
              <input
                matInput
                formControlName="code"
                class="text-center tracking-widest text-2xl font-mono"
                placeholder="0000"
                maxlength="6"
              />
            </mat-form-field>

            <button
              mat-flat-button
              color="primary"
              [disabled]="otpForm.invalid || saving()"
              type="submit"
              class="w-full h-12 text-lg rounded-xl"
            >
              <mat-progress-spinner
                *ngIf="saving()"
                mode="indeterminate"
                diameter="24"
                class="mr-2 inline-block"
              ></mat-progress-spinner>
              <span *ngIf="!saving()">Verify Code</span>
            </button>
          </form>

          <button
            mat-button
            class="mt-6 text-secondary"
            (click)="sendOtp(step() === 'otp-email' ? 'email' : 'phone')"
          >
            Did not receive code? <span class="text-primary hover:underline">Resend</span>
          </button>
        </div>

        <!-- Completion Step (Temporary) -->
        <div
          *ngIf="step() === 'complete'"
          class="flex flex-col items-center py-12 text-center animate-fadeIn"
        >
          <div
            class="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6 text-green-600 dark:text-green-400"
          >
            <mat-icon [svgIcon]="'heroicons_outline:check-circle'" class="icon-size-12"></mat-icon>
          </div>
          <h3 class="text-3xl font-bold mb-4">Registration Complete!</h3>
          <p class="text-secondary max-w-md">
            Your identity has been registered and contact details verified.
          </p>
        </div>
      </div>

      <!-- Debug Flow Info -->
      <div
        class="mt-8 p-6 bg-slate-100 dark:bg-slate-800 rounded-2xl w-full max-w-3xl mx-auto"
        *ngIf="projectFlow()"
      >
        <h4 class="font-bold text-sm mb-2 text-slate-500 uppercase tracking-wider">
          Flow Debug Config
        </h4>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
          <div>
            <span class="text-slate-500">Flow Version:</span>
            <span class="ml-2 font-bold text-green-600">{{
              projectFlow()?.raw?.version || 'N/A'
            }}</span>
          </div>
          <div>
            <span class="text-slate-500">Flow Type:</span>
            <span class="ml-2 font-bold">{{ projectFlow()?.raw?.type }}</span>
          </div>
          <div>
            <span class="text-slate-500">Full Name Style:</span>
            <span class="ml-2 font-bold">{{
              projectFlow()?.onboardingSettings?.signUpForm?.fullNameStyle || 'undefined'
            }}</span>
          </div>
          <div>
            <span class="text-slate-500">FullName:</span>
            <span class="ml-2 font-bold">{{
              projectFlow()?.onboardingSettings?.signUpForm?.fullName
            }}</span>
          </div>
          <div>
            <span class="text-slate-500">FirstName:</span>
            <span class="ml-2 font-bold">{{
              projectFlow()?.onboardingSettings?.signUpForm?.firstName
            }}</span>
          </div>
          <div>
            <span class="text-slate-500">LastName:</span>
            <span class="ml-2 font-bold">{{
              projectFlow()?.onboardingSettings?.signUpForm?.lastName
            }}</span>
          </div>
          <div
            class="col-span-1 sm:col-span-2 mt-2 pt-2 border-t border-slate-200 dark:border-slate-700"
          >
            <span class="text-slate-500">Computed Name Logic:</span>
            <span class="ml-2 font-bold text-primary-500">{{
              projectFlow()?.isNameSeparated ? 'SEPARATED' : 'TOGETHER'
            }}</span>
          </div>
          <div class="col-span-1 sm:col-span-2">
            <span class="text-slate-500">Raw Settings:</span>
            <pre class="mt-1 p-2 bg-white dark:bg-black/20 rounded">{{
              projectFlow()?.onboardingSettings?.signUpForm | json
            }}</pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ZelfIdComponent, { className: "ZelfIdComponent", filePath: "src/app/modules/zelf-id/zelf-id.component.ts", lineNumber: 31 });
})();

// src/app/modules/zelf-id/zelf-id.routes.ts
var zelf_id_routes_default = [
  {
    path: "",
    component: ZelfIdComponent
  }
];
export {
  zelf_id_routes_default as default
};
//# sourceMappingURL=chunk-XR5HS7R7.js.map
