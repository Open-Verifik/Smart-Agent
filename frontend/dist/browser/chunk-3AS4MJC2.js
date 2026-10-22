import {
  MatButtonModule
} from "./chunk-PJFCLQ64.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-6Z76B4PC.js";
import {
  TranslocoDirective,
  TranslocoModule,
  takeUntilDestroyed
} from "./chunk-FWBWCXY5.js";
import {
  environment
} from "./chunk-3V5B4ZWC.js";
import {
  BehaviorSubject,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  DestroyRef,
  HostListener,
  HttpClient,
  Injectable,
  Input,
  NgTemplateOutlet,
  catchError,
  inject,
  setClassMetadata,
  throwError,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-YWP2Y7QK.js";
import {
  __spreadValues
} from "./chunk-F5M2C4EZ.js";

// src/app/modules/smart-access/projects/smart-access-setup.service.ts
var SmartAccessSetupService = class _SmartAccessSetupService {
  constructor() {
    this._http = inject(HttpClient);
    this._projectId$ = new BehaviorSubject("new");
    this._project$ = new BehaviorSubject(null);
    this._stepIndex$ = new BehaviorSubject(0);
    this.projectId = "new";
    this.stepIndex = 0;
    this.project = null;
  }
  get baseUrl() {
    return `${environment.apiUrl}/v3`;
  }
  get authHeaders() {
    const token = localStorage.getItem("accessToken");
    return token ? { Authorization: `Bearer ${token}` } : {};
  }
  _params(query) {
    const out = {};
    Object.entries(query || {}).forEach(([key, value]) => {
      if (value === void 0 || value === null)
        return;
      out[key] = Array.isArray(value) ? value.map(String) : String(value);
    });
    return out;
  }
  getDefaultProjectShell() {
    return {
      allowedCountries: [],
      branding: this.defaultBranding,
      contactEmail: "",
      dataProtection: {
        address: "",
        address2: "",
        city: "",
        country: "",
        email: "",
        name: "",
        postalCode: ""
      },
      defaultLanguage: "en",
      identifier: "",
      name: "",
      privacyUrl: "",
      status: "draft",
      target: "personal",
      termsAndConditionsUrl: "",
      version: 3,
      projectFlows: []
    };
  }
  defaultLoginFlow() {
    return {
      status: "draft",
      type: "login",
      version: 3,
      loginSettings: {
        email: false,
        emailGateway: "none",
        faceLiveness: false,
        phone: false,
        phoneGateway: "none",
        searchMode: "FAST",
        showFaceLivenessRecommendation: false,
        allowPasskeys: false
      },
      integrations: {
        redirectUrl: "",
        webhook: null
      },
      security: {
        strategy: "whitelist",
        source: null,
        apiUrl: "",
        apiTestType: "email",
        apiTestValue: ""
      }
    };
  }
  get defaultBranding() {
    return {
      backgroundColor: "#ffffff",
      buttonColor: "#3f3f46",
      buttonTextColor: "#ffffff",
      image: "",
      imageBackgroundColor: "#ffffff",
      logo: "",
      textColor: "#3f3f46",
      titleColor: "#3f3f46"
    };
  }
  requestProject(id, query = {}) {
    const params = this._params(__spreadValues({
      populates: ["projectFlows"],
      projectFlowType: "login"
    }, query));
    return this._http.get(`${this.baseUrl}/projects/${id}`, {
      params,
      headers: this.authHeaders
    });
  }
  createProject(data) {
    return this._http.post(`${this.baseUrl}/projects`, data, { headers: this.authHeaders }).pipe(catchError((e) => throwError(() => e)));
  }
  updateProject(id, data) {
    return this._http.put(`${this.baseUrl}/projects/${id}`, data, { headers: this.authHeaders }).pipe(catchError((e) => throwError(() => e)));
  }
  /** List webhooks, defaulting to active-only (mirrors legacy `_ObserveWebhook`). */
  listWebhooks(query = {}) {
    return this._http.get(`${environment.apiUrl}/v2/webhooks`, {
      params: this._params(__spreadValues({ where_isActive: true }, query)),
      headers: this.authHeaders
    });
  }
  /**
   * Test an identity / whitelist API URL by issuing GET with the test field as a
   * query param — matching legacy `ProjectService.identityUrlTester` (GET + params).
   */
  testIdentityUrl(opts) {
    return this._http.get(opts.identityUrl, { params: { [opts.testType]: opts.testValue } }).pipe(catchError((e) => throwError(() => e)));
  }
  /** Shared wizard state mirrors enroll SetupService subset. */
  set projectObservable(p) {
    this.project = p;
    this._project$.next(p);
  }
  get project$() {
    return this._project$.asObservable();
  }
  set projectIdObs(id) {
    this.projectId = id;
    this._projectId$.next(id);
  }
  get projectId$() {
    return this._projectId$.asObservable();
  }
  set stepIndexObs(s) {
    this.stepIndex = s;
    this._stepIndex$.next(s);
  }
  get stepIndex$() {
    return this._stepIndex$.asObservable();
  }
  static {
    this.\u0275fac = function SmartAccessSetupService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SmartAccessSetupService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SmartAccessSetupService, factory: _SmartAccessSetupService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SmartAccessSetupService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [], null);
})();

// src/app/modules/smart-access/projects/setup/preview/access-sign-in-preview.component.ts
function AccessSignInPreviewComponent_ng_container_0_ng_template_1_Conditional_21_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function AccessSignInPreviewComponent_ng_container_0_ng_template_1_Conditional_21_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 22);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("src", ctx_r1.effectiveBranding.image, \u0275\u0275sanitizeUrl);
  }
}
function AccessSignInPreviewComponent_ng_container_0_ng_template_1_Conditional_21_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "mat-icon", 24);
    \u0275\u0275text(2, "image");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 25);
    \u0275\u0275text(4, "Banner image");
    \u0275\u0275elementEnd()();
  }
}
function AccessSignInPreviewComponent_ng_container_0_ng_template_1_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 19);
    \u0275\u0275template(2, AccessSignInPreviewComponent_ng_container_0_ng_template_1_Conditional_21_ng_container_2_Template, 1, 0, "ng-container", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 21);
    \u0275\u0275template(4, AccessSignInPreviewComponent_ng_container_0_ng_template_1_Conditional_21_Conditional_4_Template, 1, 1, "img", 22)(5, AccessSignInPreviewComponent_ng_container_0_ng_template_1_Conditional_21_Conditional_5_Template, 5, 0, "div", 23);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const formTpl_r3 = \u0275\u0275reference(24);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", formTpl_r3);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", ctx_r1.effectiveBranding.imageBackgroundColor || "#e2e8f0");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.effectiveBranding.image ? 4 : 5);
  }
}
function AccessSignInPreviewComponent_ng_container_0_ng_template_1_Conditional_22_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function AccessSignInPreviewComponent_ng_container_0_ng_template_1_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, AccessSignInPreviewComponent_ng_container_0_ng_template_1_Conditional_22_ng_container_1_Template, 1, 0, "ng-container", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const formTpl_r3 = \u0275\u0275reference(24);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap("flex min-h-0 flex-1 flex-col items-center justify-center px-6 py-10 " + ctx_r1.contentDeviceClasses());
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", formTpl_r3);
  }
}
function AccessSignInPreviewComponent_ng_container_0_ng_template_1_ng_template_23_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 28);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("src", ctx_r1.effectiveBranding.logo, \u0275\u0275sanitizeUrl);
  }
}
function AccessSignInPreviewComponent_ng_container_0_ng_template_1_ng_template_23_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "span", 35);
    \u0275\u0275text(2, "LOGO");
    \u0275\u0275elementEnd()();
  }
}
function AccessSignInPreviewComponent_ng_container_0_ng_template_1_ng_template_23_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 36);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r4("smartAccessProjects.signIn.no_methods"), " ");
  }
}
function AccessSignInPreviewComponent_ng_container_0_ng_template_1_ng_template_23_Conditional_15_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "div", 41);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 41);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(4).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r1.activeTab === "email" ? ctx_r1.effectiveBranding.buttonColor || "#6366f1" : "#64748b")("background-color", ctx_r1.activeTab === "email" ? "#ffffff" : "transparent")("box-shadow", ctx_r1.activeTab === "email" ? "0 1px 3px rgba(0,0,0,0.1)" : "none");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r4("smartAccessProjects.signIn.email_label"), " ");
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r1.activeTab === "phone" ? ctx_r1.effectiveBranding.buttonColor || "#6366f1" : "#64748b")("background-color", ctx_r1.activeTab === "phone" ? "#ffffff" : "transparent")("box-shadow", ctx_r1.activeTab === "phone" ? "0 1px 3px rgba(0,0,0,0.1)" : "none");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r4("smartAccessProjects.signIn.phone_label"), " ");
  }
}
function AccessSignInPreviewComponent_ng_container_0_ng_template_1_ng_template_23_Conditional_15_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "label", 43);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "span", 44);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 45);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 46);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(5).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r4("smartAccessProjects.signIn.email_label"), "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", "example@email.com", " ");
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", ctx_r1.effectiveBranding.buttonColor || "#6366f1")("color", ctx_r1.effectiveBranding.buttonTextColor || "#ffffff");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r4("smartAccessProjects.signIn.send_email"), " ");
  }
}
function AccessSignInPreviewComponent_ng_container_0_ng_template_1_ng_template_23_Conditional_15_Conditional_1_Conditional_2_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52)(1, "button", 54);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 54);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(6).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", ctx_r1.effectiveBranding.buttonColor || "#6366f1")("color", ctx_r1.effectiveBranding.buttonTextColor || "#ffffff");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r4("smartAccessProjects.signIn.sms"), " ");
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", ctx_r1.effectiveBranding.buttonColor || "#6366f1")("color", ctx_r1.effectiveBranding.buttonTextColor || "#ffffff");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r4("smartAccessProjects.signIn.whatsapp"), " ");
  }
}
function AccessSignInPreviewComponent_ng_container_0_ng_template_1_ng_template_23_Conditional_15_Conditional_1_Conditional_2_Conditional_14_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(7).$implicit;
    \u0275\u0275textInterpolate1(" ", t_r4("smartAccessProjects.signIn.whatsapp"), " ");
  }
}
function AccessSignInPreviewComponent_ng_container_0_ng_template_1_ng_template_23_Conditional_15_Conditional_1_Conditional_2_Conditional_14_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(7).$implicit;
    \u0275\u0275textInterpolate1(" ", t_r4("smartAccessProjects.signIn.sms"), " ");
  }
}
function AccessSignInPreviewComponent_ng_container_0_ng_template_1_ng_template_23_Conditional_15_Conditional_1_Conditional_2_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 55);
    \u0275\u0275template(1, AccessSignInPreviewComponent_ng_container_0_ng_template_1_ng_template_23_Conditional_15_Conditional_1_Conditional_2_Conditional_14_Conditional_1_Template, 1, 1)(2, AccessSignInPreviewComponent_ng_container_0_ng_template_1_ng_template_23_Conditional_15_Conditional_1_Conditional_2_Conditional_14_Conditional_2_Template, 1, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(7);
    \u0275\u0275styleProp("background-color", ctx_r1.effectiveBranding.buttonColor || "#6366f1")("color", ctx_r1.effectiveBranding.buttonTextColor || "#ffffff");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.phoneChannelLabel === "whatsapp" ? 1 : 2);
  }
}
function AccessSignInPreviewComponent_ng_container_0_ng_template_1_ng_template_23_Conditional_15_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "label", 43);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "span", 44);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 47)(6, "div", 48)(7, "span");
    \u0275\u0275text(8, "+57");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(9, "svg", 49);
    \u0275\u0275element(10, "path", 50);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(11, "div", 51);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(13, AccessSignInPreviewComponent_ng_container_0_ng_template_1_ng_template_23_Conditional_15_Conditional_1_Conditional_2_Conditional_13_Template, 5, 10, "div", 52)(14, AccessSignInPreviewComponent_ng_container_0_ng_template_1_ng_template_23_Conditional_15_Conditional_1_Conditional_2_Conditional_14_Template, 3, 5, "button", 53);
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(5).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r4("smartAccessProjects.signIn.phone_label"), "");
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1(" ", t_r4("smartAccessProjects.signIn.phone_label"), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.phoneChannelLabel === "both" ? 13 : 14);
  }
}
function AccessSignInPreviewComponent_ng_container_0_ng_template_1_ng_template_23_Conditional_15_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275template(1, AccessSignInPreviewComponent_ng_container_0_ng_template_1_ng_template_23_Conditional_15_Conditional_1_Conditional_1_Template, 9, 7)(2, AccessSignInPreviewComponent_ng_container_0_ng_template_1_ng_template_23_Conditional_15_Conditional_1_Conditional_2_Template, 15, 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.activeTab === "email" && ctx_r1.emailEnabled ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.activeTab === "phone" && ctx_r1.phoneEnabled ? 2 : -1);
  }
}
function AccessSignInPreviewComponent_ng_container_0_ng_template_1_ng_template_23_Conditional_15_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275element(1, "div", 56);
    \u0275\u0275elementStart(2, "span", 57);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "div", 56);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r4("smartAccessProjects.signIn.or_continue"), " ");
  }
}
function AccessSignInPreviewComponent_ng_container_0_ng_template_1_ng_template_23_Conditional_15_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 58);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(4).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("border-color", ctx_r1.effectiveBranding.buttonColor || "#6366f1")("color", ctx_r1.effectiveBranding.buttonColor || "#6366f1");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r4("smartAccessProjects.signIn.use_biometrics"), " ");
  }
}
function AccessSignInPreviewComponent_ng_container_0_ng_template_1_ng_template_23_Conditional_15_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 58);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(4).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("border-color", ctx_r1.effectiveBranding.buttonColor || "#6366f1")("color", ctx_r1.effectiveBranding.buttonColor || "#6366f1");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r4("smartAccessProjects.signIn.use_passkey"), " ");
  }
}
function AccessSignInPreviewComponent_ng_container_0_ng_template_1_ng_template_23_Conditional_15_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 58);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(4).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("border-color", ctx_r1.effectiveBranding.buttonColor || "#6366f1")("color", ctx_r1.effectiveBranding.buttonColor || "#6366f1");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r4("smartAccessProjects.signIn.use_biometrics"), " ");
  }
}
function AccessSignInPreviewComponent_ng_container_0_ng_template_1_ng_template_23_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AccessSignInPreviewComponent_ng_container_0_ng_template_1_ng_template_23_Conditional_15_Conditional_0_Template, 5, 14, "div", 37)(1, AccessSignInPreviewComponent_ng_container_0_ng_template_1_ng_template_23_Conditional_15_Conditional_1_Template, 3, 2, "div", 38)(2, AccessSignInPreviewComponent_ng_container_0_ng_template_1_ng_template_23_Conditional_15_Conditional_2_Template, 5, 1, "div", 39)(3, AccessSignInPreviewComponent_ng_container_0_ng_template_1_ng_template_23_Conditional_15_Conditional_3_Template, 2, 5, "button", 40)(4, AccessSignInPreviewComponent_ng_container_0_ng_template_1_ng_template_23_Conditional_15_Conditional_4_Template, 2, 5, "button", 40)(5, AccessSignInPreviewComponent_ng_container_0_ng_template_1_ng_template_23_Conditional_15_Conditional_5_Template, 2, 5, "button", 40);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275conditional(ctx_r1.emailEnabled && ctx_r1.phoneEnabled ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.emailEnabled || ctx_r1.phoneEnabled ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r1.faceLivenessEnabled || ctx_r1.passkeysEnabled) && (ctx_r1.emailEnabled || ctx_r1.phoneEnabled) ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.faceLivenessEnabled ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.passkeysEnabled ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.emailEnabled && !ctx_r1.phoneEnabled && ctx_r1.faceLivenessEnabled ? 5 : -1);
  }
}
function AccessSignInPreviewComponent_ng_container_0_ng_template_1_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27);
    \u0275\u0275template(2, AccessSignInPreviewComponent_ng_container_0_ng_template_1_ng_template_23_Conditional_2_Template, 1, 1, "img", 28)(3, AccessSignInPreviewComponent_ng_container_0_ng_template_1_ng_template_23_Conditional_3_Template, 3, 0, "div", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 30)(5, "div", 31);
    \u0275\u0275text(6);
    \u0275\u0275element(7, "br");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 32)(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 33);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(14, AccessSignInPreviewComponent_ng_container_0_ng_template_1_ng_template_23_Conditional_14_Template, 3, 1, "div", 34)(15, AccessSignInPreviewComponent_ng_container_0_ng_template_1_ng_template_23_Conditional_15_Template, 6, 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.effectiveBranding.logo ? 2 : 3);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("color", ctx_r1.effectiveBranding.titleColor || "#0f172a");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r4("smartAccessProjects.signIn.title_1"), "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r4("smartAccessProjects.signIn.title_2"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("color", ctx_r1.effectiveBranding.textColor || "#64748b");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r4("smartAccessProjects.signIn.no_account"), " ");
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r1.effectiveBranding.buttonColor || "#6366f1");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r4("smartAccessProjects.signIn.register_here"), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.hasAnyMethod ? 14 : 15);
  }
}
function AccessSignInPreviewComponent_ng_container_0_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6)(2, "div", 7)(3, "mat-icon", 8);
    \u0275\u0275text(4, "visibility");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 9)(6, "p", 10);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 11);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 12)(11, "button", 13);
    \u0275\u0275listener("click", function AccessSignInPreviewComponent_ng_container_0_ng_template_1_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setDeviceType("desktop"));
    });
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 13);
    \u0275\u0275listener("click", function AccessSignInPreviewComponent_ng_container_0_ng_template_1_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setDeviceType("tablet"));
    });
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 13);
    \u0275\u0275listener("click", function AccessSignInPreviewComponent_ng_container_0_ng_template_1_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setDeviceType("mobile"));
    });
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 14);
    \u0275\u0275listener("click", function AccessSignInPreviewComponent_ng_container_0_ng_template_1_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleFullscreen());
    });
    \u0275\u0275elementStart(18, "mat-icon", 15);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(20, "div", 16);
    \u0275\u0275template(21, AccessSignInPreviewComponent_ng_container_0_ng_template_1_Conditional_21_Template, 6, 4, "div", 17)(22, AccessSignInPreviewComponent_ng_container_0_ng_template_1_Conditional_22_Template, 2, 3, "div", 18)(23, AccessSignInPreviewComponent_ng_container_0_ng_template_1_ng_template_23_Template, 16, 12, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", t_r4("smartAccessProjects.preview.title"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r4("smartAccessProjects.preview.subtitle"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-stone-100", ctx_r1.deviceType === "desktop")("text-stone-900", ctx_r1.deviceType === "desktop")("dark:bg-gray-800", ctx_r1.deviceType === "desktop")("dark:text-white", ctx_r1.deviceType === "desktop")("text-stone-500", ctx_r1.deviceType !== "desktop");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r4("smartAccessProjects.preview.desktop"), " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-stone-100", ctx_r1.deviceType === "tablet")("text-stone-900", ctx_r1.deviceType === "tablet")("dark:bg-gray-800", ctx_r1.deviceType === "tablet")("dark:text-white", ctx_r1.deviceType === "tablet")("text-stone-500", ctx_r1.deviceType !== "tablet");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r4("smartAccessProjects.preview.tablet"), " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-stone-100", ctx_r1.deviceType === "mobile")("text-stone-900", ctx_r1.deviceType === "mobile")("dark:bg-gray-800", ctx_r1.deviceType === "mobile")("dark:text-white", ctx_r1.deviceType === "mobile")("text-stone-500", ctx_r1.deviceType !== "mobile");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r4("smartAccessProjects.preview.mobile"), " ");
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", t_r4("smartAccessProjects.preview.fullscreen"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.isFullscreen ? "close" : "open_in_full", " ");
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", ctx_r1.effectiveBranding.backgroundColor);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.deviceType === "desktop" ? 21 : 22);
  }
}
function AccessSignInPreviewComponent_ng_container_0_Conditional_3_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function AccessSignInPreviewComponent_ng_container_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 59);
    \u0275\u0275listener("click", function AccessSignInPreviewComponent_ng_container_0_Conditional_3_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleFullscreen());
    });
    \u0275\u0275element(1, "div", 60);
    \u0275\u0275elementStart(2, "div", 61);
    \u0275\u0275listener("click", function AccessSignInPreviewComponent_ng_container_0_Conditional_3_Template_div_click_2_listener($event) {
      \u0275\u0275restoreView(_r5);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275template(3, AccessSignInPreviewComponent_ng_container_0_Conditional_3_ng_container_3_Template, 1, 0, "ng-container", 20);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const previewShell_r6 = \u0275\u0275reference(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngTemplateOutlet", previewShell_r6);
  }
}
function AccessSignInPreviewComponent_ng_container_0_Conditional_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function AccessSignInPreviewComponent_ng_container_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275template(1, AccessSignInPreviewComponent_ng_container_0_Conditional_4_ng_container_1_Template, 1, 0, "ng-container", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const previewShell_r6 = \u0275\u0275reference(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", previewShell_r6);
  }
}
function AccessSignInPreviewComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, AccessSignInPreviewComponent_ng_container_0_ng_template_1_Template, 25, 40, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(3, AccessSignInPreviewComponent_ng_container_0_Conditional_3_Template, 4, 1, "div", 3)(4, AccessSignInPreviewComponent_ng_container_0_Conditional_4_Template, 2, 1, "div", 4);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.isFullscreen ? 3 : 4);
  }
}
var AccessSignInPreviewComponent = class _AccessSignInPreviewComponent {
  constructor() {
    this.branding = null;
    this._setup = inject(SmartAccessSetupService);
    this._cdr = inject(ChangeDetectorRef);
    this._destroyRef = inject(DestroyRef);
    this.deviceType = "tablet";
    this.isFullscreen = false;
  }
  ngOnInit() {
    this._setup.stepIndex$.pipe(takeUntilDestroyed(this._destroyRef)).subscribe(() => {
      this._cdr.markForCheck();
    });
  }
  /** Effective branding object: caller value layered over service defaults. */
  get effectiveBranding() {
    return __spreadValues(__spreadValues({}, this._setup.defaultBranding), this.branding || {});
  }
  /** Live login settings group from the wizard form. */
  get loginSettings() {
    return this.form?.get("projectFlow.loginSettings") || null;
  }
  get phoneEnabled() {
    return !!this.loginSettings?.get("phone")?.value;
  }
  get emailEnabled() {
    return !!this.loginSettings?.get("email")?.value;
  }
  get faceLivenessEnabled() {
    return !!this.loginSettings?.get("faceLiveness")?.value;
  }
  get passkeysEnabled() {
    return !!this.loginSettings?.get("allowPasskeys")?.value;
  }
  /**
   * Active tab for the tab switcher when both email and phone are enabled.
   * Defaults to email when available; derived purely from form values.
   */
  get activeTab() {
    return this.emailEnabled ? "email" : "phone";
  }
  /** Subtitle for the phone tile based on selected gateway. */
  get phoneChannelLabel() {
    const value = `${this.loginSettings?.get("phoneGateway")?.value ?? "none"}`;
    if (value === "whatsapp" || value === "sms" || value === "both")
      return value;
    return "none";
  }
  /** True when no method is enabled — show an empty-state hint. */
  get hasAnyMethod() {
    return this.phoneEnabled || this.emailEnabled || this.faceLivenessEnabled || this.passkeysEnabled;
  }
  /** True when the form's branding contains a banner/background image. */
  get hasBannerImage() {
    return !!this.effectiveBranding.image;
  }
  get buttonStyle() {
    const b = this.effectiveBranding;
    return {
      "background-color": b.buttonColor || "#3f3f46",
      color: b.buttonTextColor || "#ffffff"
    };
  }
  get titleStyle() {
    return { color: this.effectiveBranding.titleColor || "#3f3f46" };
  }
  get textStyle() {
    return { color: this.effectiveBranding.textColor || "#3f3f46" };
  }
  setDeviceType(device) {
    this.deviceType = device;
    this._cdr.markForCheck();
  }
  toggleFullscreen() {
    this.isFullscreen = !this.isFullscreen;
    document.body.style.overflow = this.isFullscreen ? "hidden" : "";
    this._cdr.markForCheck();
  }
  onEscapeClose() {
    if (!this.isFullscreen)
      return;
    this.toggleFullscreen();
  }
  /** Tailwind classes for the inner content's max-width based on the device toggle. */
  contentDeviceClasses() {
    switch (this.deviceType) {
      case "mobile":
        return "max-w-80 w-full mx-auto";
      case "tablet":
        return "max-w-128 w-full mx-auto";
      case "desktop":
      default:
        return "w-full max-w-160 mx-auto";
    }
  }
  static {
    this.\u0275fac = function AccessSignInPreviewComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AccessSignInPreviewComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AccessSignInPreviewComponent, selectors: [["access-sign-in-preview"]], hostBindings: function AccessSignInPreviewComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("keydown.escape", function AccessSignInPreviewComponent_keydown_escape_HostBindingHandler() {
          return ctx.onEscapeClose();
        }, false, \u0275\u0275resolveDocument);
      }
    }, inputs: { branding: "branding", form: "form" }, decls: 1, vars: 0, consts: [["previewShell", ""], ["formTpl", ""], [4, "transloco"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "access-preview-title", 1, "fixed", "inset-0", "z-[100000]", "flex", "items-center", "justify-center", "p-4", "md:p-6"], [1, "flex", "h-full", "w-full", "flex-col", "overflow-hidden", "rounded-2xl", "border", "border-stone-200", "bg-white", "dark:border-gray-700", "dark:bg-gray-900"], [1, "flex", "flex-shrink-0", "flex-wrap", "items-center", "justify-between", "gap-3", "p-4", "md:p-5"], [1, "flex", "items-center", "gap-3"], [1, "flex", "h-10", "w-10", "items-center", "justify-center", "rounded-xl", "bg-stone-100", "text-stone-700", "dark:bg-gray-800", "dark:text-stone-200"], [1, "!h-5", "!w-5"], [1, "flex", "flex-col"], ["id", "access-preview-title", 1, "m-0", "text-sm", "font-semibold", "text-stone-900", "dark:text-white"], [1, "m-0", "text-xs", "text-stone-500", "dark:text-stone-400"], [1, "flex", "items-center", "gap-1"], ["type", "button", 1, "rounded-full", "px-3", "py-1.5", "text-xs", "font-medium", "transition-colors", 3, "click"], ["type", "button", 1, "ml-1", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-full", "bg-stone-100", "transition-colors", "hover:bg-stone-200", "dark:bg-gray-800", "dark:hover:bg-gray-700", 3, "click"], [1, "!h-4", "!w-4", "text-stone-700", "dark:text-stone-200"], [1, "relative", "flex", "min-h-0", "flex-1", "flex-col", "items-stretch", "overflow-auto", "border-t", "border-stone-200", "dark:border-gray-700"], [1, "flex", "min-h-0", "flex-1", "flex-row", "overflow-auto"], [3, "class"], [1, "flex", "flex-1", "flex-col", "items-center", "justify-center", "px-6", "py-10"], [4, "ngTemplateOutlet"], [1, "flex", "flex-1", "items-center", "justify-center", "overflow-hidden"], ["alt", "", 1, "h-full", "w-full", "object-cover", 3, "src"], [1, "flex", "flex-col", "items-center", "gap-3", "opacity-30"], [1, "!h-16", "!w-16"], [1, "text-sm"], [1, "mx-auto", "w-full", "max-w-md", "space-y-6"], [1, "mb-2", "flex", "justify-center"], ["alt", "Logo", 1, "h-12", "w-12", "object-contain", 3, "src"], [1, "flex", "h-12", "w-12", "items-center", "justify-center", "rounded-xl", "bg-stone-100", "text-stone-400"], [1, "mb-3", "space-y-0", "text-center"], [1, "text-4xl", "font-semibold", "leading-tight"], [1, "mb-6", "flex", "items-center", "justify-center", "gap-1", "text-sm"], [1, "cursor-default", "font-medium", "underline"], [1, "w-full", "rounded-2xl", "border", "border-dashed", "border-stone-300", "bg-stone-50", "px-4", "py-6", "text-center"], [1, "text-xs", "font-semibold"], [1, "text-sm", "font-medium", "text-stone-500"], [1, "mb-2", "flex", "gap-2", "rounded-xl", "bg-gray-100", "p-1"], [1, "space-y-4"], [1, "my-2", "flex", "items-center", "gap-4"], ["type", "button", 1, "h-12", "w-full", "rounded-xl", "border-2", "bg-transparent", "text-base", "font-medium", 3, "border-color", "color"], [1, "flex-1", "cursor-default", "rounded-lg", "px-4", "py-2.5", "text-center", "text-sm", "font-semibold", "transition-all", "duration-200"], [1, "relative"], [1, "mb-1", "block", "text-sm", "font-medium", "text-slate-500"], [1, "text-red-500"], [1, "flex", "h-14", "w-full", "items-center", "rounded-lg", "border-2", "border-slate-300", "bg-white", "px-4", "text-sm", "text-slate-400"], ["type", "button", 1, "h-12", "w-full", "rounded-xl", "text-base", "font-medium", "shadow-sm", "transition-all", "duration-200"], [1, "flex", "gap-2"], [1, "flex", "h-14", "w-24", "shrink-0", "items-center", "justify-between", "rounded-lg", "border-2", "border-slate-300", "bg-white", "px-3", "text-sm", "text-slate-600"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "h-3", "w-3", "text-slate-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 9l-7 7-7-7"], [1, "flex", "h-14", "flex-1", "items-center", "rounded-lg", "border-2", "border-slate-300", "bg-white", "px-4", "text-sm", "text-slate-400"], [1, "grid", "grid-cols-2", "gap-3"], ["type", "button", 1, "h-12", "w-full", "rounded-xl", "text-base", "font-medium", "shadow-sm", 3, "background-color", "color"], ["type", "button", 1, "h-12", "rounded-xl", "text-base", "font-medium", "shadow-sm"], ["type", "button", 1, "h-12", "w-full", "rounded-xl", "text-base", "font-medium", "shadow-sm"], [1, "flex-1", "border-t", "border-gray-200"], [1, "px-2", "text-sm", "font-medium", "text-slate-400"], ["type", "button", 1, "h-12", "w-full", "rounded-xl", "border-2", "bg-transparent", "text-base", "font-medium"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "access-preview-title", 1, "fixed", "inset-0", "z-[100000]", "flex", "items-center", "justify-center", "p-4", "md:p-6", 3, "click"], ["aria-hidden", "true", 1, "pointer-events-none", "absolute", "inset-0", "bg-slate-950/55", "backdrop-blur-[2px]", "dark:bg-black/70"], [1, "relative", "z-10", "flex", "max-h-[90vh]", "max-w-[90vw]", "w-full", "flex-col", "overflow-hidden", "rounded-2xl", "border", "border-stone-200", "bg-white", "shadow-2xl", "dark:border-gray-700", "dark:bg-gray-900", 3, "click"]], template: function AccessSignInPreviewComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, AccessSignInPreviewComponent_ng_container_0_Template, 5, 1, "ng-container", 2);
      }
    }, dependencies: [CommonModule, NgTemplateOutlet, MatButtonModule, MatIconModule, MatIcon, TranslocoModule, TranslocoDirective], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccessSignInPreviewComponent, [{
    type: Component,
    args: [{ selector: "access-sign-in-preview", standalone: true, imports: [CommonModule, MatButtonModule, MatIconModule, TranslocoModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `<ng-container *transloco="let t">\r
    <!-- Shared toolbar + canvas (inline card vs modal panel) -->\r
    <ng-template #previewShell>\r
        <!-- Header toolbar -->\r
        <div class="flex flex-shrink-0 flex-wrap items-center justify-between gap-3 p-4 md:p-5">\r
            <div class="flex items-center gap-3">\r
                <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-stone-100 text-stone-700 dark:bg-gray-800 dark:text-stone-200">\r
                    <mat-icon class="!h-5 !w-5">visibility</mat-icon>\r
                </div>\r
                <div class="flex flex-col">\r
                    <p id="access-preview-title" class="m-0 text-sm font-semibold text-stone-900 dark:text-white">\r
                        {{ t('smartAccessProjects.preview.title') }}\r
                    </p>\r
                    <p class="m-0 text-xs text-stone-500 dark:text-stone-400">\r
                        {{ t('smartAccessProjects.preview.subtitle') }}\r
                    </p>\r
                </div>\r
            </div>\r
\r
            <div class="flex items-center gap-1">\r
                <button\r
                    type="button"\r
                    class="rounded-full px-3 py-1.5 text-xs font-medium transition-colors"\r
                    [class.bg-stone-100]="deviceType === 'desktop'"\r
                    [class.text-stone-900]="deviceType === 'desktop'"\r
                    [class.dark:bg-gray-800]="deviceType === 'desktop'"\r
                    [class.dark:text-white]="deviceType === 'desktop'"\r
                    [class.text-stone-500]="deviceType !== 'desktop'"\r
                    (click)="setDeviceType('desktop')"\r
                >\r
                    {{ t('smartAccessProjects.preview.desktop') }}\r
                </button>\r
                <button\r
                    type="button"\r
                    class="rounded-full px-3 py-1.5 text-xs font-medium transition-colors"\r
                    [class.bg-stone-100]="deviceType === 'tablet'"\r
                    [class.text-stone-900]="deviceType === 'tablet'"\r
                    [class.dark:bg-gray-800]="deviceType === 'tablet'"\r
                    [class.dark:text-white]="deviceType === 'tablet'"\r
                    [class.text-stone-500]="deviceType !== 'tablet'"\r
                    (click)="setDeviceType('tablet')"\r
                >\r
                    {{ t('smartAccessProjects.preview.tablet') }}\r
                </button>\r
                <button\r
                    type="button"\r
                    class="rounded-full px-3 py-1.5 text-xs font-medium transition-colors"\r
                    [class.bg-stone-100]="deviceType === 'mobile'"\r
                    [class.text-stone-900]="deviceType === 'mobile'"\r
                    [class.dark:bg-gray-800]="deviceType === 'mobile'"\r
                    [class.dark:text-white]="deviceType === 'mobile'"\r
                    [class.text-stone-500]="deviceType !== 'mobile'"\r
                    (click)="setDeviceType('mobile')"\r
                >\r
                    {{ t('smartAccessProjects.preview.mobile') }}\r
                </button>\r
                <button\r
                    type="button"\r
                    class="ml-1 flex h-8 w-8 items-center justify-center rounded-full bg-stone-100 transition-colors hover:bg-stone-200 dark:bg-gray-800 dark:hover:bg-gray-700"\r
                    (click)="toggleFullscreen()"\r
                    [attr.aria-label]="t('smartAccessProjects.preview.fullscreen')"\r
                >\r
                    <mat-icon class="!h-4 !w-4 text-stone-700 dark:text-stone-200">\r
                        {{ isFullscreen ? 'close' : 'open_in_full' }}\r
                    </mat-icon>\r
                </button>\r
            </div>\r
        </div>\r
\r
        <!-- Preview canvas -->\r
        <div\r
            class="relative flex min-h-0 flex-1 flex-col items-stretch overflow-auto border-t border-stone-200 dark:border-gray-700"\r
            [style.background-color]="effectiveBranding.backgroundColor"\r
        >\r
            @if (deviceType === 'desktop') {\r
                <!-- Desktop: two-column layout (form left, banner right) -->\r
                <div class="flex min-h-0 flex-1 flex-row overflow-auto">\r
                    <!-- Left: sign-in form -->\r
                    <div class="flex flex-1 flex-col items-center justify-center px-6 py-10">\r
                        <ng-container *ngTemplateOutlet="formTpl"></ng-container>\r
                    </div>\r
                    <!-- Right: banner panel -->\r
                    <div\r
                        class="flex flex-1 items-center justify-center overflow-hidden"\r
                        [style.background-color]="effectiveBranding.imageBackgroundColor || '#e2e8f0'"\r
                    >\r
                        @if (effectiveBranding.image) {\r
                            <img [src]="effectiveBranding.image" class="h-full w-full object-cover" alt="" />\r
                        } @else {\r
                            <div class="flex flex-col items-center gap-3 opacity-30">\r
                                <mat-icon class="!h-16 !w-16">image</mat-icon>\r
                                <span class="text-sm">Banner image</span>\r
                            </div>\r
                        }\r
                    </div>\r
                </div>\r
            } @else {\r
                <!-- Tablet / Mobile: centered single column -->\r
                <div [class]="'flex min-h-0 flex-1 flex-col items-center justify-center px-6 py-10 ' + contentDeviceClasses()">\r
                    <ng-container *ngTemplateOutlet="formTpl"></ng-container>\r
                </div>\r
            }\r
\r
            <!-- Shared form template -->\r
            <ng-template #formTpl>\r
                <div class="mx-auto w-full max-w-md space-y-6">\r
                    <!-- Logo -->\r
                    <div class="mb-2 flex justify-center">\r
                        @if (effectiveBranding.logo) {\r
                            <img class="h-12 w-12 object-contain" [src]="effectiveBranding.logo" alt="Logo" />\r
                        } @else {\r
                            <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-stone-100 text-stone-400">\r
                                <span class="text-xs font-semibold">LOGO</span>\r
                            </div>\r
                        }\r
                    </div>\r
\r
                    <!-- Title -->\r
                    <div class="mb-3 space-y-0 text-center">\r
                        <div\r
                            class="text-4xl font-semibold leading-tight"\r
                            [style.color]="effectiveBranding.titleColor || '#0f172a'"\r
                        >\r
                            {{ t('smartAccessProjects.signIn.title_1') }}<br />\r
                            {{ t('smartAccessProjects.signIn.title_2') }}\r
                        </div>\r
                    </div>\r
\r
                    <!-- Don't have an account? -->\r
                    <div class="mb-6 flex items-center justify-center gap-1 text-sm">\r
                        <span [style.color]="effectiveBranding.textColor || '#64748b'">\r
                            {{ t('smartAccessProjects.signIn.no_account') }}\r
                        </span>\r
                        <span\r
                            class="cursor-default font-medium underline"\r
                            [style.color]="effectiveBranding.buttonColor || '#6366f1'"\r
                        >\r
                            {{ t('smartAccessProjects.signIn.register_here') }}\r
                        </span>\r
                    </div>\r
\r
                    @if (!hasAnyMethod) {\r
                        <!-- Empty state -->\r
                        <div class="w-full rounded-2xl border border-dashed border-stone-300 bg-stone-50 px-4 py-6 text-center">\r
                            <div class="text-sm font-medium text-stone-500">\r
                                {{ t('smartAccessProjects.signIn.no_methods') }}\r
                            </div>\r
                        </div>\r
                    } @else {\r
                        <!-- Tab switcher (email + phone both on) -->\r
                        @if (emailEnabled && phoneEnabled) {\r
                            <div class="mb-2 flex gap-2 rounded-xl bg-gray-100 p-1">\r
                                <div\r
                                    class="flex-1 cursor-default rounded-lg px-4 py-2.5 text-center text-sm font-semibold transition-all duration-200"\r
                                    [style.color]="activeTab === 'email' ? (effectiveBranding.buttonColor || '#6366f1') : '#64748b'"\r
                                    [style.background-color]="activeTab === 'email' ? '#ffffff' : 'transparent'"\r
                                    [style.box-shadow]="activeTab === 'email' ? '0 1px 3px rgba(0,0,0,0.1)' : 'none'"\r
                                >\r
                                    {{ t('smartAccessProjects.signIn.email_label') }}\r
                                </div>\r
                                <div\r
                                    class="flex-1 cursor-default rounded-lg px-4 py-2.5 text-center text-sm font-semibold transition-all duration-200"\r
                                    [style.color]="activeTab === 'phone' ? (effectiveBranding.buttonColor || '#6366f1') : '#64748b'"\r
                                    [style.background-color]="activeTab === 'phone' ? '#ffffff' : 'transparent'"\r
                                    [style.box-shadow]="activeTab === 'phone' ? '0 1px 3px rgba(0,0,0,0.1)' : 'none'"\r
                                >\r
                                    {{ t('smartAccessProjects.signIn.phone_label') }}\r
                                </div>\r
                            </div>\r
                        }\r
\r
                        <!-- Input + buttons for email/phone -->\r
                        @if (emailEnabled || phoneEnabled) {\r
                            <div class="space-y-4">\r
                                <!-- Email input -->\r
                                @if (activeTab === 'email' && emailEnabled) {\r
                                    <div class="relative">\r
                                        <label class="mb-1 block text-sm font-medium text-slate-500">\r
                                            {{ t('smartAccessProjects.signIn.email_label') }}<span class="text-red-500">*</span>\r
                                        </label>\r
                                        <div class="flex h-14 w-full items-center rounded-lg border-2 border-slate-300 bg-white px-4 text-sm text-slate-400">\r
                                            {{ 'example@email.com' }}\r
                                        </div>\r
                                    </div>\r
\r
                                    <!-- Send email button -->\r
                                    <button\r
                                        type="button"\r
                                        class="h-12 w-full rounded-xl text-base font-medium shadow-sm transition-all duration-200"\r
                                        [style.background-color]="effectiveBranding.buttonColor || '#6366f1'"\r
                                        [style.color]="effectiveBranding.buttonTextColor || '#ffffff'"\r
                                    >\r
                                        {{ t('smartAccessProjects.signIn.send_email') }}\r
                                    </button>\r
                                }\r
\r
                                <!-- Phone input -->\r
                                @if (activeTab === 'phone' && phoneEnabled) {\r
                                    <div class="relative">\r
                                        <label class="mb-1 block text-sm font-medium text-slate-500">\r
                                            {{ t('smartAccessProjects.signIn.phone_label') }}<span class="text-red-500">*</span>\r
                                        </label>\r
                                        <div class="flex gap-2">\r
                                            <div\r
                                                class="flex h-14 w-24 shrink-0 items-center justify-between rounded-lg border-2 border-slate-300 bg-white px-3 text-sm text-slate-600"\r
                                            >\r
                                                <span>+57</span>\r
                                                <svg class="h-3 w-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>\r
                                                </svg>\r
                                            </div>\r
                                            <div class="flex h-14 flex-1 items-center rounded-lg border-2 border-slate-300 bg-white px-4 text-sm text-slate-400">\r
                                                {{ t('smartAccessProjects.signIn.phone_label') }}\r
                                            </div>\r
                                        </div>\r
                                    </div>\r
\r
                                    <!-- Phone action buttons -->\r
                                    @if (phoneChannelLabel === 'both') {\r
                                        <div class="grid grid-cols-2 gap-3">\r
                                            <button\r
                                                type="button"\r
                                                class="h-12 rounded-xl text-base font-medium shadow-sm"\r
                                                [style.background-color]="effectiveBranding.buttonColor || '#6366f1'"\r
                                                [style.color]="effectiveBranding.buttonTextColor || '#ffffff'"\r
                                            >\r
                                                {{ t('smartAccessProjects.signIn.sms') }}\r
                                            </button>\r
                                            <button\r
                                                type="button"\r
                                                class="h-12 rounded-xl text-base font-medium shadow-sm"\r
                                                [style.background-color]="effectiveBranding.buttonColor || '#6366f1'"\r
                                                [style.color]="effectiveBranding.buttonTextColor || '#ffffff'"\r
                                            >\r
                                                {{ t('smartAccessProjects.signIn.whatsapp') }}\r
                                            </button>\r
                                        </div>\r
                                    } @else {\r
                                        <button\r
                                            type="button"\r
                                            class="h-12 w-full rounded-xl text-base font-medium shadow-sm"\r
                                            [style.background-color]="effectiveBranding.buttonColor || '#6366f1'"\r
                                            [style.color]="effectiveBranding.buttonTextColor || '#ffffff'"\r
                                        >\r
                                            @if (phoneChannelLabel === 'whatsapp') {\r
                                                {{ t('smartAccessProjects.signIn.whatsapp') }}\r
                                            } @else {\r
                                                {{ t('smartAccessProjects.signIn.sms') }}\r
                                            }\r
                                        </button>\r
                                    }\r
                                }\r
                            </div>\r
                        }\r
\r
                        <!-- Divider + secondary methods -->\r
                        @if ((faceLivenessEnabled || passkeysEnabled) && (emailEnabled || phoneEnabled)) {\r
                            <div class="my-2 flex items-center gap-4">\r
                                <div class="flex-1 border-t border-gray-200"></div>\r
                                <span class="px-2 text-sm font-medium text-slate-400">\r
                                    {{ t('smartAccessProjects.signIn.or_continue') }}\r
                                </span>\r
                                <div class="flex-1 border-t border-gray-200"></div>\r
                            </div>\r
                        }\r
\r
                        <!-- Face verification button -->\r
                        @if (faceLivenessEnabled) {\r
                            <button\r
                                type="button"\r
                                class="h-12 w-full rounded-xl border-2 bg-transparent text-base font-medium"\r
                                [style.border-color]="effectiveBranding.buttonColor || '#6366f1'"\r
                                [style.color]="effectiveBranding.buttonColor || '#6366f1'"\r
                            >\r
                                {{ t('smartAccessProjects.signIn.use_biometrics') }}\r
                            </button>\r
                        }\r
\r
                        <!-- Passkey button -->\r
                        @if (passkeysEnabled) {\r
                            <button\r
                                type="button"\r
                                class="h-12 w-full rounded-xl border-2 bg-transparent text-base font-medium"\r
                                [style.border-color]="effectiveBranding.buttonColor || '#6366f1'"\r
                                [style.color]="effectiveBranding.buttonColor || '#6366f1'"\r
                            >\r
                                {{ t('smartAccessProjects.signIn.use_passkey') }}\r
                            </button>\r
                        }\r
\r
                        <!-- Only face / passkey (no email or phone) -->\r
                        @if (!emailEnabled && !phoneEnabled && faceLivenessEnabled) {\r
                            <button\r
                                type="button"\r
                                class="h-12 w-full rounded-xl border-2 bg-transparent text-base font-medium"\r
                                [style.border-color]="effectiveBranding.buttonColor || '#6366f1'"\r
                                [style.color]="effectiveBranding.buttonColor || '#6366f1'"\r
                            >\r
                                {{ t('smartAccessProjects.signIn.use_biometrics') }}\r
                            </button>\r
                        }\r
                    }\r
                </div>\r
            </ng-template>\r
        </div>\r
    </ng-template>\r
\r
    @if (isFullscreen) {\r
        <!-- Modal: backdrop + centered panel (max 90% viewport) -->\r
        <div\r
            class="fixed inset-0 z-[100000] flex items-center justify-center p-4 md:p-6"\r
            role="dialog"\r
            aria-modal="true"\r
            aria-labelledby="access-preview-title"\r
            (click)="toggleFullscreen()"\r
        >\r
            <div\r
                class="pointer-events-none absolute inset-0 bg-slate-950/55 backdrop-blur-[2px] dark:bg-black/70"\r
                aria-hidden="true"\r
            ></div>\r
            <div\r
                class="relative z-10 flex max-h-[90vh] max-w-[90vw] w-full flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-2xl dark:border-gray-700 dark:bg-gray-900"\r
                (click)="$event.stopPropagation()"\r
            >\r
                <ng-container *ngTemplateOutlet="previewShell"></ng-container>\r
            </div>\r
        </div>\r
    } @else {\r
        <div\r
            class="flex h-full w-full flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white dark:border-gray-700 dark:bg-gray-900"\r
        >\r
            <ng-container *ngTemplateOutlet="previewShell"></ng-container>\r
        </div>\r
    }\r
</ng-container>\r
` }]
  }], null, { branding: [{
    type: Input
  }], form: [{
    type: Input
  }], onEscapeClose: [{
    type: HostListener,
    args: ["document:keydown.escape"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AccessSignInPreviewComponent, { className: "AccessSignInPreviewComponent", filePath: "src/app/modules/smart-access/projects/setup/preview/access-sign-in-preview.component.ts", lineNumber: 40 });
})();

export {
  SmartAccessSetupService,
  AccessSignInPreviewComponent
};
//# sourceMappingURL=chunk-3AS4MJC2.js.map
