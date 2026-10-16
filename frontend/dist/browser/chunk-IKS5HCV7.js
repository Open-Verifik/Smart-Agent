import {
  MatSlider,
  MatSliderModule,
  MatSliderThumb
} from "./chunk-7VQT7ZMZ.js";
import {
  SubscriptionService
} from "./chunk-5YXXIWLJ.js";
import {
  AuthRequiredGateService
} from "./chunk-Q3ASOYRZ.js";
import {
  FuseSplashScreenService
} from "./chunk-A3OI5NK7.js";
import {
  extractClientSettingsPayload,
  invoiceBillingDetailsComplete
} from "./chunk-FY4LH25C.js";
import {
  MatSnackBar
} from "./chunk-TXEVGTMX.js";
import "./chunk-LHH4KRD7.js";
import "./chunk-4U26N45P.js";
import "./chunk-WIGHP2N4.js";
import "./chunk-JURKDGMK.js";
import "./chunk-RM2644J3.js";
import "./chunk-AICPTZP5.js";
import "./chunk-VURK6DEU.js";
import "./chunk-E7WYNRWC.js";
import "./chunk-HWNQWMK7.js";
import "./chunk-TG6L3SEN.js";
import "./chunk-UDAOI32F.js";
import "./chunk-K4AG7N5H.js";
import {
  HttpWrapperService
} from "./chunk-BCBZJBUY.js";
import "./chunk-GH366QKW.js";
import "./chunk-EVWXSBKG.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-UUIVQBYS.js";
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogModule,
  MatDialogRef,
  MatDialogTitle
} from "./chunk-M5KDIZH5.js";
import "./chunk-OIBNGD5S.js";
import "./chunk-WOW6NB5H.js";
import {
  MatButton,
  MatButtonModule,
  MatIconButton
} from "./chunk-YSJP7SXK.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-CQIQSUBU.js";
import "./chunk-J762DGD5.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
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
  ChangeDetectorRef,
  CommonModule,
  Component,
  DatePipe,
  DecimalPipe,
  Injectable,
  NgClass,
  NgForOf,
  NgIf,
  ViewEncapsulation,
  catchError,
  inject,
  map,
  of,
  setClassMetadata,
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
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction3,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
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
  __spreadProps,
  __spreadValues
} from "./chunk-F5M2C4EZ.js";

// src/app/modules/smart-access/plans/smart-access-plans.service.ts
var SmartAccessPlansService = class _SmartAccessPlansService {
  constructor() {
    this._http = inject(HttpWrapperService);
  }
  get baseUrl() {
    return environment.apiUrl;
  }
  getCatalogPlans(params = { sort: "amount" }) {
    return this._http.sendRequest("get", `${this.baseUrl}/v2/smart-access-plans`, params);
  }
  getClientAccessPlans(params = {
    sort: "startDate",
    where_status: "active",
    populates: ["plan"]
  }) {
    return this._http.sendRequest("get", `${this.baseUrl}/v2/client-smart-access-plans`, params);
  }
  postClientAccessPlan(body) {
    return this._http.sendRequest("post", `${this.baseUrl}/v2/client-smart-access-plans`, body);
  }
  upgradeClientAccessPlan(body) {
    return this._http.sendRequest("post", `${this.baseUrl}/v2/client-smart-access-plans/upgrade`, body);
  }
  getClientSettings(params) {
    return this._http.sendRequest("get", `${this.baseUrl}/v2/client-settings`, params);
  }
  static {
    this.\u0275fac = function SmartAccessPlansService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SmartAccessPlansService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SmartAccessPlansService, factory: _SmartAccessPlansService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SmartAccessPlansService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/modules/smart-access/plans/smart-access-billing-required-dialog.component.ts
var SmartAccessBillingRequiredDialogComponent = class _SmartAccessBillingRequiredDialogComponent {
  constructor() {
    this._dialogRef = inject(MatDialogRef);
    this._router = inject(Router);
  }
  goToBillingDetails() {
    this._dialogRef.close();
    void this._router.navigate(["/settings", "billing-details"], {
      queryParams: { returnUrl: "/smart-access/plans" }
    });
  }
  static {
    this.\u0275fac = function SmartAccessBillingRequiredDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SmartAccessBillingRequiredDialogComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SmartAccessBillingRequiredDialogComponent, selectors: [["smart-access-billing-required-dialog"]], decls: 14, vars: 13, consts: [["mat-dialog-title", "", 1, "billing-dialog-title"], [1, "billing-dialog-body"], [1, "billing-dialog-copy"], ["align", "end", 1, "billing-dialog-actions"], ["mat-button", "", "type", "button", 1, "billing-dialog-cancel", 3, "mat-dialog-close"], ["mat-flat-button", "", "color", "primary", "type", "button", 1, "billing-dialog-primary", 3, "click"]], template: function SmartAccessBillingRequiredDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h2", 0);
        \u0275\u0275text(1);
        \u0275\u0275pipe(2, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "mat-dialog-content", 1)(4, "p", 2);
        \u0275\u0275text(5);
        \u0275\u0275pipe(6, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "mat-dialog-actions", 3)(8, "button", 4);
        \u0275\u0275text(9);
        \u0275\u0275pipe(10, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "button", 5);
        \u0275\u0275listener("click", function SmartAccessBillingRequiredDialogComponent_Template_button_click_11_listener() {
          return ctx.goToBillingDetails();
        });
        \u0275\u0275text(12);
        \u0275\u0275pipe(13, "transloco");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 5, "smartaccess.plans.billing_required_title"), "\n");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 7, "smartaccess.plans.billing_required_message"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("mat-dialog-close", false);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 9, "smartaccess.plans.billing_required_cancel"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 11, "smartaccess.plans.billing_required_go_settings"), " ");
      }
    }, dependencies: [MatDialogModule, MatDialogClose, MatDialogTitle, MatDialogActions, MatDialogContent, MatButtonModule, MatButton, TranslocoModule, TranslocoPipe], styles: ["/* src/app/modules/smart-access/plans/smart-access-billing-required-dialog.component.scss */\n.smart-access-billing-required-dialog-pane {\n  --billing-dialog-bg: #ffffff;\n  --billing-dialog-border: rgba(15, 15, 45, 0.08);\n  --billing-dialog-title-color: #0f0f2d;\n  --billing-dialog-body-color: #4b5563;\n  --billing-dialog-cancel-color: #475569;\n}\n.smart-access-billing-required-dialog-pane .mat-mdc-dialog-container {\n  border-radius: 16px;\n  padding-bottom: 0;\n}\n.smart-access-billing-required-dialog-pane .mat-mdc-dialog-surface {\n  border-radius: 16px;\n  overflow: hidden;\n}\n.smart-access-billing-required-dialog-pane .mat-mdc-dialog-container {\n  background: var(--billing-dialog-bg);\n  border: 1px solid var(--billing-dialog-border);\n  box-shadow: 0 20px 50px rgba(15, 15, 45, 0.12), 0 1px 0 rgba(255, 255, 255, 0.6) inset;\n}\n.smart-access-billing-required-dialog-pane .billing-dialog-title {\n  padding: 1.35rem 1.5rem 0.65rem !important;\n  margin: 0 !important;\n  font-size: 1.125rem !important;\n  font-weight: 650 !important;\n  line-height: 1.35;\n  letter-spacing: -0.02em;\n  color: var(--billing-dialog-title-color) !important;\n}\n.smart-access-billing-required-dialog-pane .billing-dialog-body {\n  padding: 0 1.5rem !important;\n}\n.smart-access-billing-required-dialog-pane .billing-dialog-copy {\n  margin: 0;\n  padding: 0 0 1.25rem !important;\n  font-size: 0.9375rem;\n  line-height: 1.55;\n  color: var(--billing-dialog-body-color);\n}\n.smart-access-billing-required-dialog-pane .billing-dialog-actions {\n  padding: 0 1rem 1rem !important;\n  gap: 0.5rem;\n}\n.smart-access-billing-required-dialog-pane .billing-dialog-cancel {\n  color: var(--billing-dialog-cancel-color) !important;\n}\n.smart-access-billing-required-dialog-pane .billing-dialog-primary.mat-mdc-raised-button.mat-primary,\n.smart-access-billing-required-dialog-pane .billing-dialog-primary.mat-mdc-button-base.mat-flat-button.mat-primary {\n  border-radius: 999px !important;\n}\nbody.dark .smart-access-billing-required-dialog-pane {\n  --billing-dialog-bg: #17182c;\n  --billing-dialog-border: rgba(255, 255, 255, 0.11);\n  --billing-dialog-title-color: #f1f5f9 !important;\n  --billing-dialog-body-color: rgba(226, 232, 240, 0.9);\n  --billing-dialog-cancel-color: #cbd5e1 !important;\n}\nbody.dark .smart-access-billing-required-dialog-pane .mat-mdc-dialog-container {\n  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.05);\n}\n/*# sourceMappingURL=smart-access-billing-required-dialog.component.css.map */\n"], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SmartAccessBillingRequiredDialogComponent, [{
    type: Component,
    args: [{ standalone: true, selector: "smart-access-billing-required-dialog", imports: [MatDialogModule, MatButtonModule, TranslocoModule], encapsulation: ViewEncapsulation.None, template: `<h2 mat-dialog-title class="billing-dialog-title">\r
    {{ 'smartaccess.plans.billing_required_title' | transloco }}\r
</h2>\r
\r
<mat-dialog-content class="billing-dialog-body">\r
    <p class="billing-dialog-copy">\r
        {{ 'smartaccess.plans.billing_required_message' | transloco }}\r
    </p>\r
</mat-dialog-content>\r
\r
<mat-dialog-actions align="end" class="billing-dialog-actions">\r
    <button mat-button type="button" class="billing-dialog-cancel" [mat-dialog-close]="false">\r
        {{ 'smartaccess.plans.billing_required_cancel' | transloco }}\r
    </button>\r
    <button mat-flat-button color="primary" type="button" class="billing-dialog-primary" (click)="goToBillingDetails()">\r
        {{ 'smartaccess.plans.billing_required_go_settings' | transloco }}\r
    </button>\r
</mat-dialog-actions>\r
`, styles: ["/* src/app/modules/smart-access/plans/smart-access-billing-required-dialog.component.scss */\n.smart-access-billing-required-dialog-pane {\n  --billing-dialog-bg: #ffffff;\n  --billing-dialog-border: rgba(15, 15, 45, 0.08);\n  --billing-dialog-title-color: #0f0f2d;\n  --billing-dialog-body-color: #4b5563;\n  --billing-dialog-cancel-color: #475569;\n}\n.smart-access-billing-required-dialog-pane .mat-mdc-dialog-container {\n  border-radius: 16px;\n  padding-bottom: 0;\n}\n.smart-access-billing-required-dialog-pane .mat-mdc-dialog-surface {\n  border-radius: 16px;\n  overflow: hidden;\n}\n.smart-access-billing-required-dialog-pane .mat-mdc-dialog-container {\n  background: var(--billing-dialog-bg);\n  border: 1px solid var(--billing-dialog-border);\n  box-shadow: 0 20px 50px rgba(15, 15, 45, 0.12), 0 1px 0 rgba(255, 255, 255, 0.6) inset;\n}\n.smart-access-billing-required-dialog-pane .billing-dialog-title {\n  padding: 1.35rem 1.5rem 0.65rem !important;\n  margin: 0 !important;\n  font-size: 1.125rem !important;\n  font-weight: 650 !important;\n  line-height: 1.35;\n  letter-spacing: -0.02em;\n  color: var(--billing-dialog-title-color) !important;\n}\n.smart-access-billing-required-dialog-pane .billing-dialog-body {\n  padding: 0 1.5rem !important;\n}\n.smart-access-billing-required-dialog-pane .billing-dialog-copy {\n  margin: 0;\n  padding: 0 0 1.25rem !important;\n  font-size: 0.9375rem;\n  line-height: 1.55;\n  color: var(--billing-dialog-body-color);\n}\n.smart-access-billing-required-dialog-pane .billing-dialog-actions {\n  padding: 0 1rem 1rem !important;\n  gap: 0.5rem;\n}\n.smart-access-billing-required-dialog-pane .billing-dialog-cancel {\n  color: var(--billing-dialog-cancel-color) !important;\n}\n.smart-access-billing-required-dialog-pane .billing-dialog-primary.mat-mdc-raised-button.mat-primary,\n.smart-access-billing-required-dialog-pane .billing-dialog-primary.mat-mdc-button-base.mat-flat-button.mat-primary {\n  border-radius: 999px !important;\n}\nbody.dark .smart-access-billing-required-dialog-pane {\n  --billing-dialog-bg: #17182c;\n  --billing-dialog-border: rgba(255, 255, 255, 0.11);\n  --billing-dialog-title-color: #f1f5f9 !important;\n  --billing-dialog-body-color: rgba(226, 232, 240, 0.9);\n  --billing-dialog-cancel-color: #cbd5e1 !important;\n}\nbody.dark .smart-access-billing-required-dialog-pane .mat-mdc-dialog-container {\n  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.05);\n}\n/*# sourceMappingURL=smart-access-billing-required-dialog.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SmartAccessBillingRequiredDialogComponent, { className: "SmartAccessBillingRequiredDialogComponent", filePath: "src/app/modules/smart-access/plans/smart-access-billing-required-dialog.component.ts", lineNumber: 15 });
})();

// src/app/modules/smart-access/plans/smart-access-plans.component.ts
var _c0 = (a0, a1, a2) => ({ error: a0, warning: a1, success: a2 });
function SmartAccessPlansComponent_ng_container_0_div_1_ng_container_22_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r3("smartaccess.plans.your_plan"));
  }
}
function SmartAccessPlansComponent_ng_container_0_div_1_ng_container_22_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r3("smartaccess.plans.your_next_plan"));
  }
}
function SmartAccessPlansComponent_ng_container_0_div_1_ng_container_22_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r3("subscriptions.payment_failed"));
  }
}
function SmartAccessPlansComponent_ng_container_0_div_1_ng_container_22_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r3("smartaccess.plans.cancelled"));
  }
}
function SmartAccessPlansComponent_ng_container_0_div_1_ng_container_22_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r3("smartenroll.plans.active"));
  }
}
function SmartAccessPlansComponent_ng_container_0_div_1_ng_container_22_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 76)(1, "mat-icon");
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r3("subscriptions.payment_failed_description"));
  }
}
function SmartAccessPlansComponent_ng_container_0_div_1_ng_container_22_p_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 77);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const subscription_r4 = \u0275\u0275nextContext().$implicit;
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", t_r3("smartaccess.plans.next_payment"), ": ", \u0275\u0275pipeBind2(2, 2, subscription_r4.endDate, "longDate"), " ");
  }
}
function SmartAccessPlansComponent_ng_container_0_div_1_ng_container_22_p_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 77);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const subscription_r4 = \u0275\u0275nextContext().$implicit;
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", t_r3("smartaccess.plans.starts_in"), ": ", \u0275\u0275pipeBind2(2, 2, subscription_r4.startDate, "longDate"), " ");
  }
}
function SmartAccessPlansComponent_ng_container_0_div_1_ng_container_22_p_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 78);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const subscription_r4 = \u0275\u0275nextContext().$implicit;
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", t_r3("smartaccess.plans.canceled_plan"), " ", \u0275\u0275pipeBind2(2, 2, subscription_r4.cancelAt, "longDate"), " ");
  }
}
function SmartAccessPlansComponent_ng_container_0_div_1_ng_container_22_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 79)(1, "div", 80)(2, "div", 81);
    \u0275\u0275element(3, "img", 82);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 83)(5, "span", 84);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 85);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const subscription_r4 = \u0275\u0275nextContext().$implicit;
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("src", ctx_r4.creditCardLogo(subscription_r4.cardBrand), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate3(" ", ctx_r4.capitalizeFirstLetter(subscription_r4.cardBrand), " ", t_r3("smartaccess.plans.ended"), " ", subscription_r4.lastFour, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" ", t_r3("smartaccess.plans.expires"), " ", subscription_r4.cardExpMonth, "/", subscription_r4.cardExpYear, " ");
  }
}
function SmartAccessPlansComponent_ng_container_0_div_1_ng_container_22_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 79)(1, "div", 80)(2, "div", 81)(3, "mat-icon");
    \u0275\u0275text(4, "link");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 83)(6, "span", 84);
    \u0275\u0275text(7, "Stripe Link");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 85);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(t_r3("smartaccess.plans.digital_wallet"));
  }
}
function SmartAccessPlansComponent_ng_container_0_div_1_ng_container_22_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 86)(1, "mat-icon");
    \u0275\u0275text(2, "credit_card_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r3("smartaccess.plans.no_payment"));
  }
}
function SmartAccessPlansComponent_ng_container_0_div_1_ng_container_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 33)(2, "div", 34)(3, "div", 35)(4, "div", 36)(5, "mat-icon");
    \u0275\u0275text(6, "fingerprint");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div")(8, "p", 37);
    \u0275\u0275template(9, SmartAccessPlansComponent_ng_container_0_div_1_ng_container_22_ng_container_9_Template, 2, 1, "ng-container", 38)(10, SmartAccessPlansComponent_ng_container_0_div_1_ng_container_22_ng_container_10_Template, 2, 1, "ng-container", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "h2", 39);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 40);
    \u0275\u0275element(14, "span", 41);
    \u0275\u0275template(15, SmartAccessPlansComponent_ng_container_0_div_1_ng_container_22_ng_container_15_Template, 2, 1, "ng-container", 38)(16, SmartAccessPlansComponent_ng_container_0_div_1_ng_container_22_ng_container_16_Template, 2, 1, "ng-container", 38)(17, SmartAccessPlansComponent_ng_container_0_div_1_ng_container_22_ng_container_17_Template, 2, 1, "ng-container", 38);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(18, SmartAccessPlansComponent_ng_container_0_div_1_ng_container_22_div_18_Template, 5, 1, "div", 42);
    \u0275\u0275elementStart(19, "div", 43)(20, "div", 44)(21, "p", 45);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "p", 46)(24, "span", 47);
    \u0275\u0275text(25, "$");
    \u0275\u0275elementEnd();
    \u0275\u0275text(26);
    \u0275\u0275elementStart(27, "span", 47);
    \u0275\u0275text(28, "USD");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(29, SmartAccessPlansComponent_ng_container_0_div_1_ng_container_22_p_29_Template, 3, 5, "p", 48)(30, SmartAccessPlansComponent_ng_container_0_div_1_ng_container_22_p_30_Template, 3, 5, "p", 48)(31, SmartAccessPlansComponent_ng_container_0_div_1_ng_container_22_p_31_Template, 3, 5, "p", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275template(32, SmartAccessPlansComponent_ng_container_0_div_1_ng_container_22_div_32_Template, 9, 7, "div", 50)(33, SmartAccessPlansComponent_ng_container_0_div_1_ng_container_22_div_33_Template, 10, 1, "div", 50)(34, SmartAccessPlansComponent_ng_container_0_div_1_ng_container_22_div_34_Template, 5, 1, "div", 51);
    \u0275\u0275elementStart(35, "div", 52)(36, "div", 53)(37, "div", 54)(38, "mat-icon");
    \u0275\u0275text(39, "email");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 55)(41, "span", 56);
    \u0275\u0275text(42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "span", 57);
    \u0275\u0275text(44);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "mat-icon", 58);
    \u0275\u0275text(46);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div", 53)(48, "div", 59)(49, "mat-icon");
    \u0275\u0275text(50, "palette");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "div", 55)(52, "span", 56);
    \u0275\u0275text(53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "span", 57);
    \u0275\u0275text(55);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "mat-icon", 60);
    \u0275\u0275text(57, "check_circle");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "div", 53)(59, "div", 61)(60, "mat-icon");
    \u0275\u0275text(61, "fingerprint");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(62, "div", 55)(63, "span", 56);
    \u0275\u0275text(64);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "span", 57);
    \u0275\u0275text(66);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(67, "mat-icon", 58);
    \u0275\u0275text(68);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(69, "div", 53)(70, "div", 62)(71, "mat-icon");
    \u0275\u0275text(72, "code");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(73, "div", 55)(74, "span", 56);
    \u0275\u0275text(75);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "span", 57);
    \u0275\u0275text(77);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(78, "mat-icon", 58);
    \u0275\u0275text(79, "add_circle_outline");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(80, "div", 63)(81, "h3", 64);
    \u0275\u0275text(82);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "p", 65);
    \u0275\u0275text(84);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "div", 66)(86, "div", 67)(87, "div", 68)(88, "mat-icon");
    \u0275\u0275text(89, "sms");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(90, "div", 69)(91, "span", 70);
    \u0275\u0275text(92);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(93, "span", 71);
    \u0275\u0275text(94);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(95, "a", 72);
    \u0275\u0275text(96);
    \u0275\u0275elementStart(97, "mat-icon");
    \u0275\u0275text(98, "open_in_new");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(99, "div", 67)(100, "div", 73)(101, "mat-icon");
    \u0275\u0275text(102, "chat");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(103, "div", 69)(104, "span", 70);
    \u0275\u0275text(105);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(106, "span", 71);
    \u0275\u0275text(107);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(108, "a", 72);
    \u0275\u0275text(109);
    \u0275\u0275elementStart(110, "mat-icon");
    \u0275\u0275text(111, "open_in_new");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(112, "div", 74)(113, "button", 75);
    \u0275\u0275listener("click", function SmartAccessPlansComponent_ng_container_0_div_1_ng_container_22_Template_button_click_113_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r4 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r4.cancelSubscription());
    });
    \u0275\u0275text(114);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const subscription_r4 = ctx.$implicit;
    const i_r6 = ctx.index;
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("animation-delay", i_r6 * 0.1 + "s");
    \u0275\u0275classProp("payment-failed", subscription_r4.paymentFailedAt);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r4.getPlanColorClass(subscription_r4.codeShow));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", i_r6 === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", i_r6 > 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Smart Access ", subscription_r4.nameShow, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(48, _c0, subscription_r4.paymentFailedAt, subscription_r4.cancelAt, !subscription_r4.paymentFailedAt && !subscription_r4.cancelAt));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", subscription_r4.paymentFailedAt);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", subscription_r4.cancelAt && !subscription_r4.paymentFailedAt);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !subscription_r4.paymentFailedAt && !subscription_r4.cancelAt);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", subscription_r4 == null ? null : subscription_r4.paymentFailedAt);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r3("smartaccess.plans.value_plan"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", subscription_r4.plan ? ctx_r4.returnInteger(subscription_r4.plan.amount * subscription_r4.biometricsLimit) : 0, " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", i_r6 === 0 && !subscription_r4.cancelAt);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", i_r6 > 0 && !subscription_r4.cancelAt);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", subscription_r4.cancelAt);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", subscription_r4.cardBrand && subscription_r4.lastFour && !ctx_r4.isLinkPayment(subscription_r4.cardBrand));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", subscription_r4.cardBrand && ctx_r4.isLinkPayment(subscription_r4.cardBrand));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !subscription_r4.cardBrand || !subscription_r4.lastFour);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(t_r3("smartaccess.plans.email"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(subscription_r4.emailsLimit);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", subscription_r4.emailsLimit > 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", subscription_r4.emailsLimit > 0 ? "check_circle" : "add_circle_outline", " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(t_r3("smartaccess.plans.whiteLabel"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("smartaccess.plans.enabled"));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(t_r3("smartaccess.plans.liveness"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(subscription_r4.biometricsLimit > 0 ? subscription_r4.biometricsLimit : t_r3("smartaccess.plans.extra_cost"));
    \u0275\u0275advance();
    \u0275\u0275classProp("active", subscription_r4.biometricsLimit > 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", subscription_r4.biometricsLimit > 0 ? "check_circle" : "add_circle_outline", " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(t_r3("smartaccess.plans.api_assistance"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("smartaccess.plans.disabled"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(t_r3("smartaccess.plans.extra_cost"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("smartaccess.plans.using_functionality"));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(t_r3("smartaccess.plans.sms_optional"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("smartaccess.plans.extra_cost"));
    \u0275\u0275advance();
    \u0275\u0275property("href", ctx_r4.getSmsWhatsappPricesUrl(), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r3("smartaccess.plans.using_functionality_link"), " ");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(t_r3("smartaccess.plans.whatsapp_optional"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("smartaccess.plans.extra_cost"));
    \u0275\u0275advance();
    \u0275\u0275property("href", ctx_r4.getSmsWhatsappPricesUrl(), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r3("smartaccess.plans.using_functionality_link"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("error", subscription_r4 == null ? null : subscription_r4.paymentFailedAt);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r3("nav.manage_subscription"), " ");
  }
}
function SmartAccessPlansComponent_ng_container_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "a", 5);
    \u0275\u0275text(4, "Verifik");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 6);
    \u0275\u0275text(6, "/");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 7);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 6);
    \u0275\u0275text(10, "/");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 7);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 8)(14, "div", 9)(15, "mat-icon");
    \u0275\u0275text(16, "fingerprint");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 10)(18, "h1", 11);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "p", 12);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(22, SmartAccessPlansComponent_ng_container_0_div_1_ng_container_22_Template, 115, 52, "ng-container", 13);
    \u0275\u0275elementStart(23, "div", 14)(24, "div", 15)(25, "div", 16)(26, "div", 17)(27, "mat-icon");
    \u0275\u0275text(28, "auto_awesome");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span");
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "h2", 18);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "p", 19);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 20)(36, "div", 21)(37, "mat-icon");
    \u0275\u0275text(38, "verified");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 22)(40, "mat-icon");
    \u0275\u0275text(41, "speed");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 23)(43, "mat-icon");
    \u0275\u0275text(44, "security");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(45, "div", 24)(46, "div", 25)(47, "div", 26)(48, "mat-icon");
    \u0275\u0275text(49, "trending_up");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div", 27)(51, "span", 28);
    \u0275\u0275text(52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "span", 29);
    \u0275\u0275text(54);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(55, "div", 25)(56, "div", 26)(57, "mat-icon");
    \u0275\u0275text(58, "support_agent");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "div", 27)(60, "span", 28);
    \u0275\u0275text(61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "span", 29);
    \u0275\u0275text(63);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(64, "div", 25)(65, "div", 26)(66, "mat-icon");
    \u0275\u0275text(67, "tune");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(68, "div", 27)(69, "span", 28);
    \u0275\u0275text(70);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "span", 29);
    \u0275\u0275text(72);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(73, "div", 30)(74, "button", 31);
    \u0275\u0275listener("click", function SmartAccessPlansComponent_ng_container_0_div_1_Template_button_click_74_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.changeCurrentView());
    });
    \u0275\u0275elementStart(75, "span");
    \u0275\u0275text(76);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "mat-icon");
    \u0275\u0275text(78, "arrow_forward");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(79, "span", 32);
    \u0275\u0275text(80);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(t_r3("nav.smart_access"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r3("settings.plans"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(t_r3("settings.plans"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("nav.manage_subscription"));
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r4.currentSubscription);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(t_r3("smartenroll.plans.upgrade_available"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("smartaccess.plans.better_plan"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("smartaccess.plans.better_plan_text"));
    \u0275\u0275advance(18);
    \u0275\u0275textInterpolate(t_r3("smartenroll.plans.higher_limits"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("smartenroll.plans.higher_limits_desc"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(t_r3("smartenroll.plans.priority_support"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("smartenroll.plans.priority_support_desc"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(t_r3("smartenroll.plans.advanced_features"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("smartenroll.plans.advanced_features_desc"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r3("smartaccess.plans.explore_plan"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r3("smartenroll.plans.no_commitment"));
  }
}
function SmartAccessPlansComponent_ng_container_0_div_2_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 102);
    \u0275\u0275listener("click", function SmartAccessPlansComponent_ng_container_0_div_2_button_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r4 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r4.goBack("current"));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "arrow_back");
    \u0275\u0275elementEnd()();
  }
}
function SmartAccessPlansComponent_ng_container_0_div_2_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 103)(1, "mat-icon");
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd()();
  }
}
function SmartAccessPlansComponent_ng_container_0_div_2_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 103)(1, "mat-icon");
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd()();
  }
}
function SmartAccessPlansComponent_ng_container_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "a", 5);
    \u0275\u0275text(4, "Verifik");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 6);
    \u0275\u0275text(6, "/");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 7);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 6);
    \u0275\u0275text(10, "/");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 7);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 87);
    \u0275\u0275template(14, SmartAccessPlansComponent_ng_container_0_div_2_button_14_Template, 3, 0, "button", 88);
    \u0275\u0275elementStart(15, "div", 9)(16, "mat-icon");
    \u0275\u0275text(17, "tune");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 10)(19, "h1", 11);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "p", 12);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 89)(24, "div", 90);
    \u0275\u0275listener("click", function SmartAccessPlansComponent_ng_container_0_div_2_Template_div_click_24_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.changeIntervalPlan("year"));
    });
    \u0275\u0275elementStart(25, "div", 91)(26, "div", 92)(27, "mat-icon");
    \u0275\u0275text(28, "group");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(29, SmartAccessPlansComponent_ng_container_0_div_2_div_29_Template, 3, 0, "div", 93);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "h3", 94);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 95);
    \u0275\u0275element(33, "img", 96);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "p", 97);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 90);
    \u0275\u0275listener("click", function SmartAccessPlansComponent_ng_container_0_div_2_Template_div_click_36_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.changeIntervalPlan("month"));
    });
    \u0275\u0275elementStart(37, "div", 91)(38, "div", 98)(39, "mat-icon");
    \u0275\u0275text(40, "timer");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(41, SmartAccessPlansComponent_ng_container_0_div_2_div_41_Template, 3, 0, "div", 93);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "h3", 94);
    \u0275\u0275text(43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 95);
    \u0275\u0275element(45, "img", 99);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "p", 97);
    \u0275\u0275text(47);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(48, "div", 100)(49, "button", 101);
    \u0275\u0275listener("click", function SmartAccessPlansComponent_ng_container_0_div_2_Template_button_click_49_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.updatePlan());
    });
    \u0275\u0275text(50);
    \u0275\u0275elementStart(51, "mat-icon");
    \u0275\u0275text(52, "arrow_forward");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(t_r3("nav.smart_access"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r3("settings.plans"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r4.currentSubscription == null ? null : ctx_r4.currentSubscription.length);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(t_r3("smartaccess.plans.title_1"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("smartaccess.plans.define"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("selected", ctx_r4.typePlan === "year");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r4.typePlan === "year");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("smartaccess.plans.active_user"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r3("smartaccess.plans.active_users_explained"));
    \u0275\u0275advance();
    \u0275\u0275classProp("selected", ctx_r4.typePlan === "month");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r4.typePlan === "month");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("smartaccess.plans.per_session"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r3("smartaccess.plans.per_sessions_explained"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r3("smartaccess.plans.continue"), " ");
  }
}
function SmartAccessPlansComponent_ng_container_0_div_3_ng_container_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", t_r3("smartaccess.plans.explain_3"), "", t_r3("smartaccess.plans.explain_4"), " ");
  }
}
function SmartAccessPlansComponent_ng_container_0_div_3_ng_container_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", t_r3("smartaccess.plans.explain_1"), "", t_r3("smartaccess.plans.explain_2"), " ");
  }
}
function SmartAccessPlansComponent_ng_container_0_div_3_ng_container_44_div_1_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 117)(2, "span", 45);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 118);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 119);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 120)(9, "div", 121)(10, "mat-icon", 122);
    \u0275\u0275text(11, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 121)(15, "mat-icon", 122);
    \u0275\u0275text(16, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 121)(20, "mat-icon", 122);
    \u0275\u0275text(21, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "button", 123);
    \u0275\u0275listener("click", function SmartAccessPlansComponent_ng_container_0_div_3_ng_container_44_div_1_ng_container_5_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r4 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r4.openWhatsapp());
    });
    \u0275\u0275text(25);
    \u0275\u0275elementStart(26, "mat-icon");
    \u0275\u0275text(27, "arrow_forward");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r3("smartaccess.plans.personalized"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("smartaccess.plans.contact_sales"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("smartaccess.plans.more_sessions"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", t_r3("smartaccess.plans.whiteLabel"), ": ", t_r3("smartaccess.plans.enabled"), "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", t_r3("smartaccess.plans.api_assistance"), ": ", t_r3("smartaccess.plans.enabled"), "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", t_r3("smartaccess.plans.analytics"), " (BI)");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r3("smartaccess.plans.contact_sales"), " ");
  }
}
function SmartAccessPlansComponent_ng_container_0_div_3_ng_container_44_div_1_ng_container_6_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(5).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r3("smartaccess.plans.sessions"));
  }
}
function SmartAccessPlansComponent_ng_container_0_div_3_ng_container_44_div_1_ng_container_6_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(5).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r3("smartaccess.plans.users"));
  }
}
function SmartAccessPlansComponent_ng_container_0_div_3_ng_container_44_div_1_ng_container_6_ng_container_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(5).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r3("smartaccess.plans.session"));
  }
}
function SmartAccessPlansComponent_ng_container_0_div_3_ng_container_44_div_1_ng_container_6_ng_container_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(5).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r3("smartaccess.plans.user"));
  }
}
function SmartAccessPlansComponent_ng_container_0_div_3_ng_container_44_div_1_ng_container_6_button_61_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 136);
    \u0275\u0275listener("click", function SmartAccessPlansComponent_ng_container_0_div_3_ng_container_44_div_1_ng_container_6_button_61_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const plan_r12 = \u0275\u0275nextContext(3).$implicit;
      const ctx_r4 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r4.changeView("lastCheck", plan_r12));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "arrow_forward");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const plan_r12 = \u0275\u0275nextContext(3).$implicit;
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r4.getPlanColorClass(plan_r12.codeShow));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r3("smartaccess.plans.activate"), " ");
  }
}
function SmartAccessPlansComponent_ng_container_0_div_3_ng_container_44_div_1_ng_container_6_div_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 137)(1, "mat-icon");
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(5).$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r3("smartaccess.plans.your_plan"), " ");
  }
}
function SmartAccessPlansComponent_ng_container_0_div_3_ng_container_44_div_1_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 117)(2, "span", 45);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 46)(5, "span", 124);
    \u0275\u0275text(6, "$");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 125);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 126);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "span", 119);
    \u0275\u0275text(13);
    \u0275\u0275template(14, SmartAccessPlansComponent_ng_container_0_div_3_ng_container_44_div_1_ng_container_6_ng_container_14_Template, 2, 1, "ng-container", 38)(15, SmartAccessPlansComponent_ng_container_0_div_3_ng_container_44_div_1_ng_container_6_ng_container_15_Template, 2, 1, "ng-container", 38);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 127)(17, "div", 128)(18, "span", 129);
    \u0275\u0275text(19);
    \u0275\u0275template(20, SmartAccessPlansComponent_ng_container_0_div_3_ng_container_44_div_1_ng_container_6_ng_container_20_Template, 2, 1, "ng-container", 38)(21, SmartAccessPlansComponent_ng_container_0_div_3_ng_container_44_div_1_ng_container_6_ng_container_21_Template, 2, 1, "ng-container", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 130);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 128)(25, "span", 129);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span", 130);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "div", 120)(30, "div", 131)(31, "span", 132);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 121)(34, "mat-icon", 122);
    \u0275\u0275text(35, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "span");
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 121)(39, "mat-icon", 122);
    \u0275\u0275text(40, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "span");
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(43, "div", 131)(44, "span", 132);
    \u0275\u0275text(45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 121)(47, "mat-icon", 133);
    \u0275\u0275text(48, "add_circle_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "span");
    \u0275\u0275text(50);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "div", 121)(52, "mat-icon", 133);
    \u0275\u0275text(53, "add_circle_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "span");
    \u0275\u0275text(55);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(56, "div", 121)(57, "mat-icon", 122);
    \u0275\u0275text(58, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "span");
    \u0275\u0275text(60);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(61, SmartAccessPlansComponent_ng_container_0_div_3_ng_container_44_div_1_ng_container_6_button_61_Template, 4, 2, "button", 134)(62, SmartAccessPlansComponent_ng_container_0_div_3_ng_container_44_div_1_ng_container_6_div_62_Template, 4, 1, "div", 135);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const plan_r12 = \u0275\u0275nextContext(2).$implicit;
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r3("smartaccess.plans.starting"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(9, 24, plan_r12.amount * plan_r12.biometricsLimit, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("/", plan_r12.interval, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", plan_r12.biometricsLimit, " - ", plan_r12.maxAmount, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.typePlan === "month");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.typePlan === "year");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r3("smartaccess.plans.cost_per"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.typePlan === "month");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.typePlan === "year");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", plan_r12.amount, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", t_r3("smartaccess.plans.analytics"), " (BI)");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("30 ", t_r3("smartaccess.plans.days"), "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r3("smartaccess.plans.standard"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(t_r3("smartaccess.plans.liveness"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", t_r3("smartaccess.plans.email"), " ", plan_r12.emailsLimit, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r3("smartaccess.plans.extra"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(t_r3("smartaccess.plans.sms"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(t_r3("smartaccess.plans.whatsapp"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", t_r3("smartaccess.plans.whiteLabel"), ": ", t_r3("smartaccess.plans.enabled"), "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r4.matchesCurrentSubscription(plan_r12));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.matchesCurrentSubscription(plan_r12));
  }
}
function SmartAccessPlansComponent_ng_container_0_div_3_ng_container_44_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 115)(1, "div", 116)(2, "mat-icon");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, SmartAccessPlansComponent_ng_container_0_div_3_ng_container_44_div_1_ng_container_5_Template, 28, 9, "ng-container", 38)(6, SmartAccessPlansComponent_ng_container_0_div_3_ng_container_44_div_1_ng_container_6_Template, 63, 27, "ng-container", 38);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const plan_r12 = \u0275\u0275nextContext().$implicit;
    const ctx_r4 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", ctx_r4.getPlanColorClass(plan_r12.codeShow));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r4.getPlanColorClass(plan_r12.codeShow));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(plan_r12.codeShow === "Enterprise" ? "business" : plan_r12.codeShow === "business" ? "workspace_premium" : "star");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r4.capitalizeFirstLetter(plan_r12.codeShow), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", plan_r12.codeShow === "Enterprise");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", plan_r12.codeShow !== "Enterprise");
  }
}
function SmartAccessPlansComponent_ng_container_0_div_3_ng_container_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, SmartAccessPlansComponent_ng_container_0_div_3_ng_container_44_div_1_Template, 7, 6, "div", 114);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const plan_r12 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", plan_r12 && plan_r12.codeShow !== "Free");
  }
}
function SmartAccessPlansComponent_ng_container_0_div_3_ng_container_61_div_1_button_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 149);
    \u0275\u0275listener("click", function SmartAccessPlansComponent_ng_container_0_div_3_ng_container_61_div_1_button_35_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const plan_r14 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r4 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r4.changeView("lastCheck", plan_r14));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "arrow_forward");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r3("smartaccess.plans.activate"), " ");
  }
}
function SmartAccessPlansComponent_ng_container_0_div_3_ng_container_61_div_1_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 137)(1, "mat-icon");
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r3("smartaccess.plans.your_plan"), " ");
  }
}
function SmartAccessPlansComponent_ng_container_0_div_3_ng_container_61_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 139)(1, "div", 140)(2, "div", 141)(3, "mat-icon");
    \u0275\u0275text(4, "redeem");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 142)(7, "span", 143);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 144);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 145)(12, "div", 146)(13, "span", 56);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 57);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(17, "div", 147);
    \u0275\u0275elementStart(18, "div", 146)(19, "span", 56);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 57);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(23, "div", 147);
    \u0275\u0275elementStart(24, "div", 146)(25, "span", 56);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span", 57);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(29, "div", 147);
    \u0275\u0275elementStart(30, "div", 146)(31, "span", 56);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "span", 57);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(35, SmartAccessPlansComponent_ng_container_0_div_3_ng_container_61_div_1_button_35_Template, 4, 1, "button", 148)(36, SmartAccessPlansComponent_ng_container_0_div_3_ng_container_61_div_1_div_36_Template, 4, 1, "div", 135);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const plan_r14 = \u0275\u0275nextContext().$implicit;
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r4.capitalizeFirstLetter(plan_r14.codeShow), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r3("smartaccess.plans.try_free"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("smartaccess.plans.offer"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r3("smartaccess.plans.included"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("smartaccess.plans.email_logins"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r3("smartaccess.plans.extra_cost"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("smartaccess.plans.all_services"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r3("smartaccess.plans.whiteLabel"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("smartaccess.plans.enabled"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", t_r3("smartaccess.plans.analytics"), " (BI)");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("30 ", t_r3("smartaccess.plans.days"), "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r4.matchesCurrentSubscription(plan_r14));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.matchesCurrentSubscription(plan_r14));
  }
}
function SmartAccessPlansComponent_ng_container_0_div_3_ng_container_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, SmartAccessPlansComponent_ng_container_0_div_3_ng_container_61_div_1_Template, 37, 13, "div", 138);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const plan_r14 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", plan_r14.codeShow === "Free");
  }
}
function SmartAccessPlansComponent_ng_container_0_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 104)(2, "div", 4)(3, "a", 5);
    \u0275\u0275text(4, "Verifik");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 6);
    \u0275\u0275text(6, "/");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 7);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 6);
    \u0275\u0275text(10, "/");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 7);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 105)(14, "button", 102);
    \u0275\u0275listener("click", function SmartAccessPlansComponent_ng_container_0_div_3_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.goBack("change"));
    });
    \u0275\u0275elementStart(15, "mat-icon");
    \u0275\u0275text(16, "arrow_back");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 9)(18, "mat-icon");
    \u0275\u0275text(19, "receipt_long");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 10)(21, "h1", 11);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "p", 12);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 106)(26, "div", 107)(27, "button", 108);
    \u0275\u0275listener("click", function SmartAccessPlansComponent_ng_container_0_div_3_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.changeIntervalPlan("year"));
    });
    \u0275\u0275elementStart(28, "mat-icon");
    \u0275\u0275text(29, "group");
    \u0275\u0275elementEnd();
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "button", 108);
    \u0275\u0275listener("click", function SmartAccessPlansComponent_ng_container_0_div_3_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.changeIntervalPlan("month"));
    });
    \u0275\u0275elementStart(32, "mat-icon");
    \u0275\u0275text(33, "timer");
    \u0275\u0275elementEnd();
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(35, "div", 109)(36, "mat-icon");
    \u0275\u0275text(37, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "span")(39, "strong");
    \u0275\u0275text(40);
    \u0275\u0275elementEnd();
    \u0275\u0275template(41, SmartAccessPlansComponent_ng_container_0_div_3_ng_container_41_Template, 2, 2, "ng-container", 38)(42, SmartAccessPlansComponent_ng_container_0_div_3_ng_container_42_Template, 2, 2, "ng-container", 38);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 110);
    \u0275\u0275template(44, SmartAccessPlansComponent_ng_container_0_div_3_ng_container_44_Template, 2, 1, "ng-container", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 111)(46, "div", 112)(47, "mat-icon");
    \u0275\u0275text(48, "help_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "h3");
    \u0275\u0275text(50);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "p", 113);
    \u0275\u0275text(52);
    \u0275\u0275elementStart(53, "strong");
    \u0275\u0275text(54);
    \u0275\u0275elementEnd();
    \u0275\u0275text(55);
    \u0275\u0275elementStart(56, "strong");
    \u0275\u0275text(57);
    \u0275\u0275elementEnd();
    \u0275\u0275text(58);
    \u0275\u0275elementStart(59, "strong");
    \u0275\u0275text(60);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(61, SmartAccessPlansComponent_ng_container_0_div_3_ng_container_61_Template, 2, 1, "ng-container", 13);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(t_r3("nav.smart_access"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r3("settings.plans"));
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(t_r3("smartaccess.plans.title_1"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("smartaccess.plans.subtitle_1"));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r4.typePlan === "year");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r3("smartaccess.plans.active_user"), " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r4.typePlan === "month");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r3("smartaccess.plans.per_session"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(t_r3("smartaccess.plans.remember"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.typePlan === "year");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.typePlan === "month");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r4.plans);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(t_r3("smartaccess.plans.not_sure"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r3("smartaccess.plans.free_solution"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("smartaccess.plans.free_solution2"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r3("smartaccess.plans.free_solution3"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("smartaccess.plans.free_solution4"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r3("smartaccess.plans.free_solution5"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("smartaccess.plans.free_solution6"));
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r4.plans);
  }
}
function SmartAccessPlansComponent_ng_container_0_div_4_div_25_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r3("smartaccess.plans.users_logins"));
  }
}
function SmartAccessPlansComponent_ng_container_0_div_4_div_25_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r3("smartaccess.plans.sessions_logins"));
  }
}
function SmartAccessPlansComponent_ng_container_0_div_4_div_25_ng_container_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r3("smartaccess.plans.users"));
  }
}
function SmartAccessPlansComponent_ng_container_0_div_4_div_25_ng_container_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r3("smartaccess.plans.sessions"));
  }
}
function SmartAccessPlansComponent_ng_container_0_div_4_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 183)(1, "h2", 184);
    \u0275\u0275template(2, SmartAccessPlansComponent_ng_container_0_div_4_div_25_ng_container_2_Template, 2, 1, "ng-container", 38)(3, SmartAccessPlansComponent_ng_container_0_div_4_div_25_ng_container_3_Template, 2, 1, "ng-container", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 185);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 186)(7, "span", 187);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 188)(10, "mat-slider", 189)(11, "input", 190);
    \u0275\u0275twoWayListener("ngModelChange", function SmartAccessPlansComponent_ng_container_0_div_4_div_25_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r4 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r4.sliderAmount, $event) || (ctx_r4.sliderAmount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "span", 187);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 191)(16, "strong");
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, SmartAccessPlansComponent_ng_container_0_div_4_div_25_ng_container_19_Template, 2, 1, "ng-container", 38)(20, SmartAccessPlansComponent_ng_container_0_div_4_div_25_ng_container_20_Template, 2, 1, "ng-container", 38);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r4.typePlan === "year");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.typePlan === "month");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("smartaccess.plans.subtitle_1"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r4.currentChangePlan2.biometricsLimit);
    \u0275\u0275advance(2);
    \u0275\u0275property("min", ctx_r4.currentChangePlan2.biometricsLimit)("max", ctx_r4.currentChangePlan2.maxAmount);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r4.sliderAmount);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("+", \u0275\u0275pipeBind1(14, 11, ctx_r4.currentChangePlan2.maxAmount), "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 13, ctx_r4.sliderAmount || ctx_r4.currentChangePlan2.biometricsLimit));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r4.typePlan === "year");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.typePlan === "month");
  }
}
function SmartAccessPlansComponent_ng_container_0_div_4_ng_container_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r4.currentChangePlan2.name);
  }
}
function SmartAccessPlansComponent_ng_container_0_div_4_ng_container_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "Free");
    \u0275\u0275elementContainerEnd();
  }
}
function SmartAccessPlansComponent_ng_container_0_div_4_ng_container_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r3("smartaccess.plans.active_user"));
  }
}
function SmartAccessPlansComponent_ng_container_0_div_4_ng_container_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r3("smartaccess.plans.per_session"));
  }
}
function SmartAccessPlansComponent_ng_container_0_div_4_ng_container_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r3("smartaccess.plans.users"));
  }
}
function SmartAccessPlansComponent_ng_container_0_div_4_ng_container_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r3("smartaccess.plans.sessions"));
  }
}
function SmartAccessPlansComponent_ng_container_0_div_4_ng_container_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r3("smartaccess.plans.user"));
  }
}
function SmartAccessPlansComponent_ng_container_0_div_4_ng_container_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r3("smartaccess.plans.session"));
  }
}
function SmartAccessPlansComponent_ng_container_0_div_4_div_128_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r3("smartaccess.plans.extra_active_user"));
  }
}
function SmartAccessPlansComponent_ng_container_0_div_4_div_128_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r3("smartaccess.plans.extra_session"));
  }
}
function SmartAccessPlansComponent_ng_container_0_div_4_div_128_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "$10 USD / 5,000");
    \u0275\u0275elementContainerEnd();
  }
}
function SmartAccessPlansComponent_ng_container_0_div_4_div_128_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "$2 USD / 1,000");
    \u0275\u0275elementContainerEnd();
  }
}
function SmartAccessPlansComponent_ng_container_0_div_4_div_128_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 192)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 193)(4, "div", 194)(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "strong");
    \u0275\u0275text(8);
    \u0275\u0275template(9, SmartAccessPlansComponent_ng_container_0_div_4_div_128_ng_container_9_Template, 2, 1, "ng-container", 38)(10, SmartAccessPlansComponent_ng_container_0_div_4_div_128_ng_container_10_Template, 2, 1, "ng-container", 38);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 194)(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "strong");
    \u0275\u0275template(15, SmartAccessPlansComponent_ng_container_0_div_4_div_128_ng_container_15_Template, 2, 0, "ng-container", 38)(16, SmartAccessPlansComponent_ng_container_0_div_4_div_128_ng_container_16_Template, 2, 0, "ng-container", 38);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 194)(19, "span");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "a", 195);
    \u0275\u0275text(22);
    \u0275\u0275elementStart(23, "mat-icon");
    \u0275\u0275text(24, "open_in_new");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("smartaccess.plans.extra_bio_explanation"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r3("smartaccess.plans.feature_1"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" $", ctx_r4.currentChangePlan2.meteredAmount, " USD / ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.typePlan === "year");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.typePlan === "month");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r3("smartaccess.plans.feature_2"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r4.currentChangePlan2.codeShow === "Free");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.currentChangePlan2.codeShow !== "Free");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r3("smartaccess.plans.email"), "s ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r3("smartaccess.plans.feature_3"));
    \u0275\u0275advance();
    \u0275\u0275property("href", ctx_r4.getSmsWhatsappPricesUrl(), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r3("smartaccess.plans.feature_3_description_2"), " ");
  }
}
function SmartAccessPlansComponent_ng_container_0_div_4_button_130_mat_spinner_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 198);
  }
}
function SmartAccessPlansComponent_ng_container_0_div_4_button_130_mat_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "arrow_forward");
    \u0275\u0275elementEnd();
  }
}
function SmartAccessPlansComponent_ng_container_0_div_4_button_130_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 196);
    \u0275\u0275listener("click", function SmartAccessPlansComponent_ng_container_0_div_4_button_130_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r4 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r4.activatePlan(ctx_r4.currentChangePlan2));
    });
    \u0275\u0275template(1, SmartAccessPlansComponent_ng_container_0_div_4_button_130_mat_spinner_1_Template, 1, 0, "mat-spinner", 197);
    \u0275\u0275text(2);
    \u0275\u0275template(3, SmartAccessPlansComponent_ng_container_0_div_4_button_130_mat_icon_3_Template, 2, 0, "mat-icon", 38);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", "plan-" + ctx_r4.getPlanColorClass(ctx_r4.currentChangePlan2.codeShow))("disabled", ctx_r4.subscribingToPlan);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.subscribingToPlan);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r3("smartaccess.plans.activate"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r4.subscribingToPlan);
  }
}
function SmartAccessPlansComponent_ng_container_0_div_4_div_131_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 137)(1, "mat-icon");
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r3("smartaccess.plans.your_plan"), " ");
  }
}
function SmartAccessPlansComponent_ng_container_0_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "a", 5);
    \u0275\u0275text(4, "Verifik");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 6);
    \u0275\u0275text(6, "/");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 7);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 6);
    \u0275\u0275text(10, "/");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 7);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 105)(14, "button", 102);
    \u0275\u0275listener("click", function SmartAccessPlansComponent_ng_container_0_div_4_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.goBack("select"));
    });
    \u0275\u0275elementStart(15, "mat-icon");
    \u0275\u0275text(16, "arrow_back");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 9)(18, "mat-icon");
    \u0275\u0275text(19, "shopping_cart");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 10)(21, "h1", 11);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "p", 12);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(25, SmartAccessPlansComponent_ng_container_0_div_4_div_25_Template, 21, 15, "div", 150);
    \u0275\u0275elementStart(26, "div", 151)(27, "div", 152)(28, "div", 153)(29, "div", 154)(30, "mat-icon");
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275template(32, SmartAccessPlansComponent_ng_container_0_div_4_ng_container_32_Template, 2, 1, "ng-container", 38)(33, SmartAccessPlansComponent_ng_container_0_div_4_ng_container_33_Template, 2, 0, "ng-container", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "span", 155);
    \u0275\u0275template(35, SmartAccessPlansComponent_ng_container_0_div_4_ng_container_35_Template, 2, 1, "ng-container", 38)(36, SmartAccessPlansComponent_ng_container_0_div_4_ng_container_36_Template, 2, 1, "ng-container", 38);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 156)(38, "span", 157);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "span", 47);
    \u0275\u0275text(41, "$");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "span", 158);
    \u0275\u0275text(43);
    \u0275\u0275pipe(44, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "span", 77);
    \u0275\u0275text(46);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(47, "div", 159)(48, "div", 160)(49, "mat-icon");
    \u0275\u0275text(50, "people");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "span", 161);
    \u0275\u0275text(52);
    \u0275\u0275pipe(53, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "span", 162);
    \u0275\u0275template(55, SmartAccessPlansComponent_ng_container_0_div_4_ng_container_55_Template, 2, 1, "ng-container", 38)(56, SmartAccessPlansComponent_ng_container_0_div_4_ng_container_56_Template, 2, 1, "ng-container", 38);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "div", 160)(58, "mat-icon");
    \u0275\u0275text(59, "payments");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "span", 161);
    \u0275\u0275text(61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "span", 162);
    \u0275\u0275text(63);
    \u0275\u0275template(64, SmartAccessPlansComponent_ng_container_0_div_4_ng_container_64_Template, 2, 1, "ng-container", 38)(65, SmartAccessPlansComponent_ng_container_0_div_4_ng_container_65_Template, 2, 1, "ng-container", 38);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(66, "div", 160)(67, "mat-icon");
    \u0275\u0275text(68, "analytics");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "span", 161);
    \u0275\u0275text(70, "30");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "span", 162);
    \u0275\u0275text(72);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(73, "div", 163)(74, "div", 164)(75, "div", 165)(76, "h4", 166)(77, "mat-icon");
    \u0275\u0275text(78, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(79);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "ul", 167)(81, "li")(82, "span");
    \u0275\u0275text(83);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "span", 168);
    \u0275\u0275text(85);
    \u0275\u0275pipe(86, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(87, "li")(88, "span");
    \u0275\u0275text(89);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "span", 168);
    \u0275\u0275text(91);
    \u0275\u0275pipe(92, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(93, "li")(94, "span");
    \u0275\u0275text(95);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(96, "mat-icon", 122);
    \u0275\u0275text(97, "check");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(98, "div", 165)(99, "h4", 169)(100, "mat-icon");
    \u0275\u0275text(101, "add_circle_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(102);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(103, "ul", 170)(104, "li")(105, "span");
    \u0275\u0275text(106);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(107, "span", 171);
    \u0275\u0275text(108);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(109, "li")(110, "span");
    \u0275\u0275text(111);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(112, "span", 172);
    \u0275\u0275text(113, "\xA0");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(114, "li")(115, "span");
    \u0275\u0275text(116);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(117, "span", 172);
    \u0275\u0275text(118, "\xA0");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(119, "div", 173)(120, "div", 174);
    \u0275\u0275listener("click", function SmartAccessPlansComponent_ng_container_0_div_4_Template_div_click_120_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.showExtraBioInfo = !ctx_r4.showExtraBioInfo);
    });
    \u0275\u0275elementStart(121, "div", 175)(122, "mat-icon", 176);
    \u0275\u0275text(123, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(124, "span");
    \u0275\u0275text(125);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(126, "mat-icon", 177);
    \u0275\u0275text(127, "expand_more");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(128, SmartAccessPlansComponent_ng_container_0_div_4_div_128_Template, 25, 12, "div", 178);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(129, "div", 179);
    \u0275\u0275template(130, SmartAccessPlansComponent_ng_container_0_div_4_button_130_Template, 4, 5, "button", 180)(131, SmartAccessPlansComponent_ng_container_0_div_4_div_131_Template, 4, 1, "div", 135);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(132, "div", 181)(133, "mat-icon");
    \u0275\u0275text(134, "verified");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(135, "span");
    \u0275\u0275text(136);
    \u0275\u0275elementStart(137, "a", 182);
    \u0275\u0275text(138);
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(t_r3("nav.smart_access"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r3("settings.plans"));
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(t_r3("smartaccess.plans.title_1"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("smartaccess.plans.subtitle_1"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.showSlide);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", "checkout-" + ctx_r4.getPlanColorClass(ctx_r4.currentChangePlan2.codeShow));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", "header-" + ctx_r4.getPlanColorClass(ctx_r4.currentChangePlan2.codeShow));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r4.getPlanColorClass(ctx_r4.currentChangePlan2.codeShow));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r4.currentChangePlan2.codeShow === "Free" ? "card_giftcard" : "star");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.currentChangePlan2.name !== "PYG");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.currentChangePlan2.name === "PYG");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r4.typePlan === "year");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.typePlan === "month");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r3("smartaccess.plans.from"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(44, 45, ctx_r4.computeAmount(ctx_r4.currentChangePlan2), "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("/", ctx_r4.currentChangePlan2.interval, "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(53, 48, ctx_r4.sliderAmount || ctx_r4.currentChangePlan2.biometricsLimit));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r4.typePlan === "year");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.typePlan === "month");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("$", ctx_r4.currentChangePlan2.amount, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r3("smartaccess.plans.cost_per"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.typePlan === "year");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.typePlan === "month");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate2("", t_r3("smartaccess.plans.analytics"), " (BI) ", t_r3("smartaccess.plans.days"), "");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", t_r3("smartaccess.plans.included"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r3("smartaccess.plans.liveness"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(86, 50, ctx_r4.sliderAmount || ctx_r4.currentChangePlan2.biometricsLimit));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r3("smartaccess.plans.email"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(92, 52, ctx_r4.currentChangePlan2.emailsLimit));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r3("smartaccess.plans.whiteLabel"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", t_r3("smartaccess.plans.extra_cost"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r3("smartaccess.plans.feature_4"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", ctx_r4.currentChangePlan2.meteredAmount, " USD");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r3("smartaccess.plans.sms"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(t_r3("smartaccess.plans.whatsapp"));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(t_r3("smartaccess.plans.extra_bio_title"));
    \u0275\u0275advance();
    \u0275\u0275classProp("expanded", ctx_r4.showExtraBioInfo);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r4.showExtraBioInfo);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r4.matchesCurrentSubscription(ctx_r4.currentChangePlan2));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.matchesCurrentSubscription(ctx_r4.currentChangePlan2));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", t_r3("smartaccess.plans.terms_1"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("href", ctx_r4.getTermsAndConditionsUrl(), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r3("smartaccess.plans.terms_2"));
  }
}
function SmartAccessPlansComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, SmartAccessPlansComponent_ng_container_0_div_1_Template, 81, 16, "div", 1)(2, SmartAccessPlansComponent_ng_container_0_div_2_Template, 53, 16, "div", 1)(3, SmartAccessPlansComponent_ng_container_0_div_3_Template, 62, 22, "div", 1)(4, SmartAccessPlansComponent_ng_container_0_div_4_Template, 139, 54, "div", 1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.currentView === "current" && ctx_r4.currentSubscription.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.currentView === "change");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.currentView === "select");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.currentView === "lastCheck" && ctx_r4.currentChangePlan2);
  }
}
var SMART_AGENT_CHECKOUT_SOURCE = "smart_agent";
var ENTERPRISE_PLAN = {
  amount: 0.8,
  biometricBatches: 100,
  biometricsLimit: 0,
  code: "Enterprise",
  codeShow: "Enterprise",
  currency: "usd",
  description: "-",
  emailsLimit: 200,
  interval: "month",
  intervalCount: 1,
  maxAmount: 300,
  meteredAmount: 80,
  name: "Enterprise",
  price: 0,
  requestsPerUnit: 1,
  smsLimit: 0,
  smsPrice: 0.06,
  status: "active",
  trialDays: 0,
  visibleTo: null,
  whatsAppLimit: 0
};
var SmartAccessPlansComponent = class _SmartAccessPlansComponent {
  constructor() {
    this._activatedRoute = inject(ActivatedRoute);
    this._authGate = inject(AuthRequiredGateService);
    this._changeDetectorRef = inject(ChangeDetectorRef);
    this._dialog = inject(MatDialog);
    this._accessPlansService = inject(SmartAccessPlansService);
    this._router = inject(Router);
    this._snackBar = inject(MatSnackBar);
    this._splashScreenService = inject(FuseSplashScreenService);
    this._subscriptionService = inject(SubscriptionService);
    this._translocoService = inject(TranslocoService);
    this.termsAndConditionsUrl = "https://docs.verifik.co/legal/terms-and-conditions";
    this.currentSubscription = [];
    this.currentView = "change";
    this.typePlan = "year";
    this.Allplans = { year: [], month: [] };
    this.plans = [];
    this.currentChangePlan2 = null;
    this.showSlide = true;
    this.showExtraBioInfo = false;
    this.subscribingToPlan = false;
    this._sessionConfirmHandled = false;
    const raw = localStorage.getItem("verifik_account") || localStorage.getItem("user");
    if (!raw || raw === "undefined" || raw === "null") {
      this.client = null;
      return;
    }
    try {
      this.client = JSON.parse(raw);
    } catch {
      this.client = null;
    }
  }
  ngOnInit() {
    this.subscribingToPlan = false;
    this._authGate.runWithAuthOrDialog({
      onAuthenticated: () => this._runPlansEntryAfterAuthGate(),
      panelClass: "auth-required-dialog"
    });
  }
  _runPlansEntryAfterAuthGate() {
    const sessionId = this._activatedRoute.snapshot.queryParamMap.get("session_id")?.trim();
    if (sessionId && !this._sessionConfirmHandled) {
      this._sessionConfirmHandled = true;
      this._clearSessionIdFromUrl();
      this._subscriptionService.confirmCheckoutSession(sessionId).subscribe({
        next: () => {
          this._showSessionConfirmSuccessToast();
          this._bootstrapPlansPage();
        },
        error: (error) => {
          console.error("Error confirming Smart Access checkout session:", error);
          this._handleSessionConfirmError(error);
        }
      });
      return;
    }
    this._bootstrapPlansPage();
  }
  _clearSessionIdFromUrl() {
    void this._router.navigate([], {
      queryParams: { session_id: null },
      queryParamsHandling: "merge",
      replaceUrl: true
    });
  }
  _showSessionConfirmSuccessToast() {
    this._openSnackBar(this._translocoService.translate("subscriptionPlans.sessionConfirmSuccess") || "Subscription activated successfully.", "success");
  }
  _showSessionConfirmErrorToast() {
    this._openSnackBar(this._translocoService.translate("subscriptionPlans.sessionConfirmError") || "Could not confirm subscription. Please try again.", "error");
  }
  _handleSessionConfirmError(error) {
    const isWrongAccount = this._isSessionClientMismatchError(error);
    this._accessPlansService.getClientAccessPlans({
      sort: "startDate",
      where_status: "active",
      populates: ["plan"]
    }).subscribe({
      next: (response) => {
        const hasActive = Array.isArray(response?.data) && response.data.length > 0;
        if (hasActive) {
          this._showSessionConfirmSuccessToast();
        } else if (isWrongAccount) {
          this._showSessionConfirmWrongAccountToast();
        } else {
          this._showSessionConfirmErrorToast();
        }
        this._bootstrapPlansPage();
      },
      error: () => {
        if (isWrongAccount) {
          this._showSessionConfirmWrongAccountToast();
        } else {
          this._showSessionConfirmErrorToast();
        }
        this._bootstrapPlansPage();
      }
    });
  }
  _isSessionClientMismatchError(error) {
    const body = error?.error;
    return body?.message === "session_client_mismatch";
  }
  _showSessionConfirmWrongAccountToast() {
    this._openSnackBar(this._translocoService.translate("subscriptionPlans.sessionConfirmWrongAccount") || "This checkout belongs to a different account. Sign in with the account that started checkout, or start a new subscription.", "error", 8e3);
  }
  _bootstrapPlansPage() {
    this._splashScreenService.show();
    this._prefetchClientInvoiceSettings();
    this._loadMySubscription();
    this.updatePlan(true);
  }
  _setCurrentViewFromParams() {
    const viewParam = this._activatedRoute.snapshot.queryParams["view"];
    if (["current", "change"].includes(viewParam))
      return viewParam;
    return "current";
  }
  _hasVerifikAccessToken() {
    return Boolean(localStorage.getItem("accessToken")?.length);
  }
  _resolveStoredClientId() {
    const c = this.client;
    if (!c)
      return void 0;
    const id = c._id ?? c.id;
    return id != null ? String(id) : void 0;
  }
  _clientSettingsQueryParams() {
    const params = { findOne: true };
    const cid = this._resolveStoredClientId();
    if (cid)
      params.where_client = cid;
    return params;
  }
  _billingDataFromClientSettingsResponse(response) {
    return extractClientSettingsPayload(response);
  }
  /**
   * Same completion rule as subscription plans: billing UI always saves `invoiceSettings.type`
   * plus address + payer block. Province/postal are not required in all locales; `verifik_account`
   * must be read here (not only legacy `user`) so `where_client` matches Settings.
   */
  _isInvoiceSettingsComplete(billingData) {
    const doc = billingData;
    const inv = doc?.invoiceSettings;
    return invoiceBillingDetailsComplete(inv);
  }
  _prefetchClientInvoiceSettings() {
    if (!this._hasVerifikAccessToken())
      return;
    this._accessPlansService.getClientSettings(this._clientSettingsQueryParams()).subscribe({
      next: () => {
        this.subscribingToPlan = false;
        this._changeDetectorRef.markForCheck();
      },
      error: () => {
        this._openSnackBar(this._translocoService.translate("smartenroll.errors.redirect"), "error");
        this.subscribingToPlan = false;
      }
    });
  }
  /** Fresh read before checkout so returning from billing settings without full reload is respected. */
  _ensureInvoiceSettings$() {
    if (!this._hasVerifikAccessToken())
      return of(false);
    return this._accessPlansService.getClientSettings(this._clientSettingsQueryParams()).pipe(map((response) => {
      const billingData = this._billingDataFromClientSettingsResponse(response);
      const ok = this._isInvoiceSettingsComplete(billingData);
      this._changeDetectorRef.markForCheck();
      return ok;
    }), catchError(() => {
      this._openSnackBar(this._translocoService.translate("smartenroll.errors.redirect"), "error");
      return of(false);
    }));
  }
  /** Stripe recurring line items require quantity ≥ 1; free-tier UI sends 0 for biometricsLimit. */
  _stripeCheckoutQuantity(plan) {
    const raw = this.showSlide ? this.sliderAmount : plan?.biometricsLimit;
    return Math.max(1, Number(raw) || 1);
  }
  /** Maps GET /client-smart-access-plans payload into `currentSubscription` / `currentView`. */
  _applyActiveSubscriptionsPayload(data) {
    if (!data?.length) {
      this.currentSubscription = [];
      this.currentView = "change";
      return false;
    }
    this.currentSubscription = data.map((element) => {
      const { name, code } = this._splitSubscriptionLabels(element);
      return __spreadProps(__spreadValues({}, element), {
        nameShow: name === "PYG" ? "Free Forever" : name,
        codeShow: code === "pyg" ? "Free" : code
      });
    });
    this.currentView = this._setCurrentViewFromParams();
    return true;
  }
  _loadMySubscription() {
    this.currentSubscription = [];
    this._accessPlansService.getClientAccessPlans({
      sort: "startDate",
      where_status: "active",
      populates: ["plan"]
    }).subscribe({
      next: (response) => {
        this._applyActiveSubscriptionsPayload(response?.data);
        this._splashScreenService.hide();
        this._changeDetectorRef.markForCheck();
      },
      error: (error) => {
        console.error("SmartAccessPlansComponent ~ _loadMySubscription ~ error:", error);
        this._openSnackBar(this._translocoService.translate("smartenroll.errors.load_subscription"), "error");
        this._splashScreenService.hide();
        this._changeDetectorRef.markForCheck();
      }
    });
  }
  /**
   * After insert/upgrade APIs return without a Stripe Checkout URL, reload active subscription or show an error.
   * Treats empty `{}` bodies (missing `data`) as failure.
   */
  _checkoutResponseMissingSessionData(response) {
    const inner = response && typeof response === "object" ? response.data : void 0;
    return inner === void 0 || inner === null || typeof inner !== "object";
  }
  _reloadSubscriptionsAndFinalizeActivation() {
    this._accessPlansService.getClientAccessPlans({
      sort: "startDate",
      where_status: "active",
      populates: ["plan"]
    }).subscribe({
      next: (response) => {
        const hasSubs = this._applyActiveSubscriptionsPayload(response?.data);
        this.subscribingToPlan = false;
        this._splashScreenService.hide();
        if (hasSubs) {
          this._openSnackBar(this._translocoService.translate("smartaccess.plans.activation_success"), "success");
        } else {
          this._openSnackBar(this._translocoService.translate("smartaccess.plans.activation_checkout_failed"), "error");
        }
        this.updatePlan(true);
        this._changeDetectorRef.markForCheck();
      },
      error: (error) => {
        console.error("SmartAccessPlansComponent ~ finalize activation ~ error:", error);
        this.subscribingToPlan = false;
        this._splashScreenService.hide();
        this._openSnackBar(this._translocoService.translate("smartaccess.plans.activation_checkout_failed"), "error");
        this._changeDetectorRef.markForCheck();
      }
    });
  }
  /** Empty API body or absent session object → user-visible failure without a silent no-op. */
  _endActivationAttemptWithCheckoutFailed() {
    this.subscribingToPlan = false;
    this._splashScreenService.hide();
    this._openSnackBar(this._translocoService.translate("smartaccess.plans.activation_checkout_failed"), "error");
    this._changeDetectorRef.markForCheck();
  }
  /** Insert/upgrade returned JSON but no Checkout URL — either recover via subscription reload or surface failure. */
  _handleCheckoutResponseWithoutRedirect(response) {
    if (!response || this._checkoutResponseMissingSessionData(response)) {
      this._endActivationAttemptWithCheckoutFailed();
      return;
    }
    this._reloadSubscriptionsAndFinalizeActivation();
  }
  /**
   * Both legacy (`Access X` / `access_x`) and current (`Smart Access X` / `smart_access_x`)
   * naming need to produce the same `nameShow` and `codeShow` so the UI stays consistent.
   */
  _splitSubscriptionLabels(element) {
    const rawName = element?.name ?? "";
    const rawCode = element?.code ?? "";
    const smartNameCut = rawName.split("Smart Access ");
    const legacyNameCut = rawName.split("Access ");
    const nameCut = smartNameCut.length > 1 ? smartNameCut : legacyNameCut;
    const smartCodeCut = rawCode.split("smart_access_");
    const legacyCodeCut = rawCode.split("access_");
    const codeCut = smartCodeCut.length > 1 ? smartCodeCut : legacyCodeCut;
    const name = nameCut.length > 2 ? nameCut[2] : nameCut[1] ?? rawName;
    const code = codeCut.length > 2 ? codeCut[2] : codeCut[1] ?? rawCode;
    return { name, code };
  }
  _openSnackBar(message, _type, timer = 5e3) {
    this._snackBar.open(message, void 0, { duration: timer });
  }
  /**
   * Builds the year/month catalog buckets, sorts each tier list, computes the
   * sliderable `maxAmount`/`steps` per tier and appends the synthetic Enterprise card.
   * Mirrors the behaviour of `verifik-client-panel`'s `updatePlan`, but fixes the
   * inherited bug where the month loop indexed into the year array.
   */
  updatePlan(skipPlacement = false) {
    if (!skipPlacement)
      this.currentView = "select";
    this.Allplans = { year: [], month: [] };
    this._accessPlansService.getCatalogPlans({ where_status: "active", sort: "amount" }).subscribe({
      next: (response) => {
        (response?.data ?? []).forEach((plan) => {
          const splitted = (plan.code ?? "").split("smart_");
          const codeCut = (plan.code ?? "").split("access_");
          const code = codeCut.length > 2 ? codeCut[2] : codeCut[1];
          if (splitted.length === 2) {
            this.Allplans.year.push(__spreadProps(__spreadValues({}, plan), {
              name: this._extractPlanName(plan.name, "Smart Access "),
              codeShow: code === "pyg" ? "Free" : code
            }));
          }
          if (splitted.length === 1) {
            this.Allplans.month.push(__spreadProps(__spreadValues({}, plan), {
              name: this._extractPlanName(plan.name, "Access "),
              codeShow: code === "pyg" ? "Free" : code
            }));
          }
        });
        this.Allplans.year.sort((a, b) => a.price - b.price);
        this.Allplans.month.sort((a, b) => a.price - b.price);
        this._populateSliderSteps(this.Allplans.year);
        this._populateSliderSteps(this.Allplans.month);
        this.Allplans.year.push(__spreadValues({}, ENTERPRISE_PLAN));
        this.Allplans.month.push(__spreadValues({}, ENTERPRISE_PLAN));
        this.plans = this.Allplans[this.typePlan];
        this._setDefaultSelectedPlan();
        this.activateQtyBar();
        this._changeDetectorRef.markForCheck();
      },
      error: (error) => {
        console.error("SmartAccessPlansComponent ~ updatePlan ~ error:", error);
        this._openSnackBar(this._translocoService.translate("smartenroll.errors.get_plans"), "error");
      }
    });
  }
  _extractPlanName(name, prefix) {
    if (!name)
      return "";
    const tail = name.split(prefix)[1] ?? name;
    return tail.split("(sesiones)")[0].split("(Sessions)")[0].split("(Session)")[0].trim();
  }
  /**
   * Each tier's slider runs from its own `biometricsLimit` to the next tier's
   * `biometricsLimit` (or +1000 for the top tier), in 100-unit notches.
   */
  _populateSliderSteps(tiers) {
    for (let index = 0; index < tiers.length; index++) {
      const element = tiers[index];
      const isLast = index === tiers.length - 1;
      element.maxAmount = isLast ? element.biometricsLimit + 1e3 : tiers[index + 1].biometricsLimit;
      element.steps = this._generateNumberSeries(element.biometricsLimit, element.maxAmount, 100);
    }
  }
  _generateNumberSeries(start, end, step) {
    if (step <= 0)
      return [];
    const series = [];
    for (let i = start; i <= end; i += step) {
      series.push(i);
    }
    return series;
  }
  _setDefaultSelectedPlan() {
    if (!this.plans?.length) {
      this.currentChangePlan2 = null;
      this.sliderAmount = void 0;
      return;
    }
    const pygIndex = this.plans.findIndex((element) => element.codeShow === "Free");
    this.currentChangePlan2 = this.plans[pygIndex >= 0 ? pygIndex : 0];
    this.sliderAmount = this.currentChangePlan2?.biometricsLimit;
  }
  changeIntervalPlan(interval) {
    this.typePlan = interval;
    this.plans = this.Allplans[interval] ?? [];
    this._setDefaultSelectedPlan();
    this.activateQtyBar();
    this._changeDetectorRef.markForCheck();
  }
  /**
   * Free tiers don't have a quantity slider — everything is included or pay-as-you-go.
   */
  activateQtyBar() {
    const code = this.currentChangePlan2?.code;
    if (code === "access_pyg" || code === "smart_access_pyg" || this.currentChangePlan2?.codeShow === "Free") {
      this.showSlide = false;
      this.sliderAmount = void 0;
      return;
    }
    this.showSlide = true;
    this.sliderAmount = this.currentChangePlan2?.steps?.[0] ?? this.currentChangePlan2?.biometricsLimit;
  }
  changeView(data, plan) {
    this.currentView = data;
    if (plan)
      this.currentChangePlan2 = plan;
    this.activateQtyBar();
    this._changeDetectorRef.markForCheck();
  }
  goBack(view) {
    this.currentView = view;
    this._changeDetectorRef.markForCheck();
  }
  changeCurrentView() {
    this.currentView = "change";
    this._changeDetectorRef.markForCheck();
    this.updatePlan(true);
  }
  /**
   * The active subscription whose code matches the currently inspected plan,
   * used to decide whether the lastCheck CTA labels "Activate" or shows
   * "Your plan" indicator.
   */
  matchesCurrentSubscription(plan) {
    if (!this.currentSubscription?.length || !plan?.code)
      return false;
    return this.currentSubscription.some((sub) => sub.code === plan.code);
  }
  /** Current view's CTA — checkouts are gated by billing-details completeness. */
  activatePlan(plan) {
    if (this.subscribingToPlan)
      return;
    if (plan?.codeShow === "Enterprise" || plan?.code === "Enterprise") {
      this.openWhatsapp();
      return;
    }
    if (!this._hasVerifikAccessToken())
      return;
    this._ensureInvoiceSettings$().subscribe((ok) => {
      if (!ok) {
        this._dialog.open(SmartAccessBillingRequiredDialogComponent, {
          width: "420px",
          maxWidth: "95vw",
          panelClass: "smart-access-billing-required-dialog-pane"
        });
        return;
      }
      this._submitSubscriptionChange(plan);
    });
  }
  _submitSubscriptionChange(plan) {
    if (!plan)
      return;
    this.subscribingToPlan = true;
    this._splashScreenService.show();
    const primary = this.currentSubscription?.[0];
    const hasActive = !!primary;
    if (hasActive) {
      const payload2 = {
        plan: plan.stripeProduct,
        source: SMART_AGENT_CHECKOUT_SOURCE
      };
      if (this.showSlide) {
        payload2.quantity = this._stripeCheckoutQuantity(plan);
      }
      if (primary.code !== plan.code) {
        payload2.defaultPrice = plan.stripePrice;
      }
      this._accessPlansService.upgradeClientAccessPlan(payload2).subscribe({
        next: (result) => {
          if (!result) {
            this._endActivationAttemptWithCheckoutFailed();
            return;
          }
          const url = result?.data?.url;
          if (url) {
            window.location.href = url;
            return;
          }
          this._handleCheckoutResponseWithoutRedirect(result);
        },
        error: () => {
          this._endActivationAttemptWithCheckoutFailed();
        }
      });
      return;
    }
    const payload = {
      plan: plan.stripeProduct,
      defaultPrice: plan.stripePrice,
      source: SMART_AGENT_CHECKOUT_SOURCE
    };
    if (this.showSlide) {
      payload.quantity = this._stripeCheckoutQuantity(plan);
    }
    this._accessPlansService.postClientAccessPlan(payload).subscribe({
      next: (response) => {
        const url = response?.data?.url;
        if (url) {
          window.location.href = url;
          return;
        }
        this._handleCheckoutResponseWithoutRedirect(response);
      },
      error: () => {
        this._endActivationAttemptWithCheckoutFailed();
      }
    });
  }
  /** Stripe Customer Portal — manage / cancel current subscription. */
  cancelSubscription() {
    this._splashScreenService.show();
    this._subscriptionService.createPortalSession({}).subscribe({
      next: (result) => {
        const url = result?.data?.url;
        if (url)
          window.location.href = url;
        this._splashScreenService.hide();
      },
      error: (error) => {
        console.error("SmartAccessPlansComponent ~ cancelSubscription ~ error:", error);
        this._openSnackBar(this._translocoService.translate("smartenroll.errors.redirect"), "error");
        this._splashScreenService.hide();
      }
    });
  }
  openWhatsapp() {
    const url = {
      es: "https://api.whatsapp.com/send?phone=573208184565&text=%C2%A1Hola!%20estoy%20interesado%20en%20adquirir%20un%20plan%20enterprise%20de%20Smart%20Access.",
      en: "https://api.whatsapp.com/send?phone=573208184565&text=Hello!%20I%20am%20interested%20in%20acquiring%20the%20Smart%20Access%20enterprise%20plan."
    };
    const lang = this._translocoService.getActiveLang();
    window.open(url[lang] || url["en"], "_blank");
  }
  capitalizeFirstLetter(str) {
    return !str ? "" : str.charAt(0).toUpperCase() + str.slice(1);
  }
  returnInteger(data) {
    return Number.parseInt(data, 10) || 0;
  }
  creditCardLogo(brand) {
    const logos = {
      visa: "https://cdn.verifik.co/assets/billing-svg/VisaLogo.svg",
      mastercard: "https://cdn.verifik.co/assets/billing-svg/MasterCardLogo.svg",
      amex: "https://cdn.verifik.co/assets/billing-svg/AmericanExpressLogo.svg",
      link: "https://cdn.verifik.co/assets/billing-svg/StripeLinkLogo.svg"
    };
    return logos[brand?.toLowerCase()] || "";
  }
  isLinkPayment(brand) {
    return brand?.toLowerCase() === "link";
  }
  getSmsWhatsappPricesUrl() {
    const lang = this._translocoService.getActiveLang();
    if (lang === "en") {
      return "https://docs.verifik.co/phone-validations/sms-and-whatsapp-prices";
    }
    return "https://docs.verifik.co/verifik-es/planes-y-precios/precios-de-sms-whatsapp/";
  }
  getTermsAndConditionsUrl() {
    const lang = this._translocoService.getActiveLang();
    if (lang === "en") {
      return "https://docs.verifik.co/legal/terms-and-conditions";
    }
    return "https://docs.verifik.co/docs-es/terminos-y-condiciones";
  }
  getPlanColorClass(codeShow) {
    if (!codeShow)
      return "free";
    const code = codeShow.toLowerCase();
    if (code === "free" || code === "pyg")
      return "free";
    if (code === "plus")
      return "plus";
    if (code === "business")
      return "business";
    if (code === "enterprise")
      return "enterprise";
    return "free";
  }
  /** Compute the `lastCheck` summary price using the current slider value when applicable. */
  computeAmount(plan) {
    if (!plan)
      return 0;
    const qty = this.showSlide && this.sliderAmount != null ? this.sliderAmount : plan.biometricsLimit;
    return Math.round((plan.amount || 0) * (qty || 0));
  }
  static {
    this.\u0275fac = function SmartAccessPlansComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SmartAccessPlansComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SmartAccessPlansComponent, selectors: [["smart-access-plans"]], decls: 1, vars: 0, consts: [[4, "transloco"], ["class", "plans-container w-full flex justify-center", 4, "ngIf"], [1, "plans-container", "w-full", "flex", "justify-center"], [1, "w-full", "max-w-4xl", "px-4", "sm:px-8", "py-8"], [1, "crumb"], ["routerLink", "/chat", 1, "crumb-link"], [1, "crumb-sep"], [1, "crumb-here"], [1, "current-plan-header", "flex", "items-center", "gap-4", "mb-8"], [1, "header-icon"], [1, "flex", "flex-col", "gap-1", "min-w-0"], [1, "current-plan-title"], [1, "current-plan-subtitle"], [4, "ngFor", "ngForOf"], [1, "upgrade-section", "animate-fadeIn"], [1, "upgrade-header"], [1, "upgrade-header-content"], [1, "upgrade-badge"], [1, "upgrade-headline"], [1, "upgrade-subheadline"], [1, "upgrade-illustration"], [1, "floating-icon", "icon-1"], [1, "floating-icon", "icon-2"], [1, "floating-icon", "icon-3"], [1, "upgrade-benefits"], [1, "benefit-item"], [1, "benefit-icon"], [1, "benefit-text"], [1, "benefit-title"], [1, "benefit-desc"], [1, "upgrade-cta"], ["mat-flat-button", "", 1, "upgrade-button", 3, "click"], [1, "upgrade-hint"], [1, "plan-card", "mb-6", "animate-fadeIn"], [1, "card-header"], [1, "flex", "items-center", "gap-3"], [1, "card-icon", 3, "ngClass"], [1, "text-xs", "text-gray-500", "uppercase", "tracking-wide"], [4, "ngIf"], [1, "text-lg", "font-semibold", "text-gray-900"], [1, "status-badge", 3, "ngClass"], [1, "status-dot"], ["class", "payment-alert", 4, "ngIf"], [1, "card-body"], [1, "price-section"], [1, "price-label"], [1, "price-amount"], [1, "price-currency"], ["class", "price-period", 4, "ngIf"], ["class", "price-period text-amber-600", 4, "ngIf"], ["class", "payment-method-card", 4, "ngIf"], ["class", "payment-method-card empty", 4, "ngIf"], [1, "features-grid"], [1, "feature-card"], [1, "feature-icon", "email"], [1, "feature-content"], [1, "feature-label"], [1, "feature-value"], [1, "feature-status"], [1, "feature-icon", "whitelabel"], [1, "feature-status", "active"], [1, "feature-icon", "biometrics"], [1, "feature-icon", "api"], [1, "optional-section"], [1, "optional-title"], [1, "optional-subtitle"], [1, "optional-grid"], [1, "optional-card"], [1, "optional-icon", "sms"], [1, "optional-content"], [1, "optional-label"], [1, "optional-value"], ["target", "_blank", 1, "optional-link", 3, "href"], [1, "optional-icon", "whatsapp"], [1, "card-actions"], ["mat-flat-button", "", 1, "action-button", "primary", 3, "click"], [1, "payment-alert"], [1, "price-period"], [1, "price-period", "text-amber-600"], [1, "payment-method-card"], [1, "payment-card-info"], [1, "payment-card-brand"], ["alt", "card", 1, "card-logo", 3, "src"], [1, "payment-card-details"], [1, "card-number"], [1, "card-expiry"], [1, "payment-method-card", "empty"], [1, "flex", "items-center", "gap-4", "mb-8"], ["class", "back-button", "mat-icon-button", "", 3, "click", 4, "ngIf"], [1, "plan-type-grid"], [1, "plan-type-card", 3, "click"], [1, "plan-type-header"], [1, "plan-type-icon", "users"], ["class", "plan-type-check", 4, "ngIf"], [1, "plan-type-title"], [1, "plan-type-image"], ["src", "https://cdn.verifik.co/assets/users2.svg", "alt", ""], [1, "plan-type-description"], [1, "plan-type-icon", "session"], ["src", "https://cdn.verifik.co/assets/perSession2.svg", "alt", ""], [1, "flex", "justify-center", "mt-8"], ["mat-flat-button", "", 1, "continue-btn", 3, "click"], ["mat-icon-button", "", 1, "back-button", 3, "click"], [1, "plan-type-check"], [1, "w-full", "max-w-6xl", "px-4", "sm:px-8", "py-8"], [1, "flex", "items-center", "gap-4", "mb-6"], [1, "toggle-container", "mb-6"], [1, "toggle-group"], [1, "toggle-button", 3, "click"], [1, "info-banner", "mb-8"], [1, "select-plans-grid"], [1, "free-trial-section"], [1, "free-trial-header"], [1, "free-trial-text"], ["class", "select-plan-card", 3, "ngClass", 4, "ngIf"], [1, "select-plan-card", 3, "ngClass"], [1, "select-plan-badge", 3, "ngClass"], [1, "select-plan-price"], [1, "price-contact"], [1, "price-sessions"], [1, "select-plan-features"], [1, "feature-row"], [1, "feature-check"], ["mat-flat-button", "", 1, "select-plan-button", "enterprise", 3, "click"], [1, "currency"], [1, "value"], [1, "period"], [1, "select-plan-details"], [1, "detail-item"], [1, "detail-label"], [1, "detail-value"], [1, "feature-category"], [1, "category-title"], [1, "feature-add"], ["class", "select-plan-button", "mat-flat-button", "", 3, "ngClass", "click", 4, "ngIf"], ["class", "current-plan-indicator", 4, "ngIf"], ["mat-flat-button", "", 1, "select-plan-button", 3, "click", "ngClass"], [1, "current-plan-indicator"], ["class", "free-plan-card", 4, "ngIf"], [1, "free-plan-card"], [1, "free-plan-header"], [1, "free-plan-badge"], [1, "free-plan-offer"], [1, "offer-title"], [1, "offer-text"], [1, "free-plan-features"], [1, "feature-column"], [1, "feature-divider"], ["class", "free-plan-button", "mat-stroked-button", "", 3, "click", 4, "ngIf"], ["mat-stroked-button", "", 1, "free-plan-button", 3, "click"], ["class", "landing-slider-section animate-fadeIn", 4, "ngIf"], [1, "checkout-card", "animate-fadeIn", 3, "ngClass"], [1, "checkout-header", 3, "ngClass"], [1, "checkout-plan-info"], [1, "checkout-badge", 3, "ngClass"], [1, "checkout-plan-type"], [1, "checkout-price"], [1, "price-from"], [1, "price-value"], [1, "checkout-stats"], [1, "stat-item"], [1, "stat-value"], [1, "stat-label"], [1, "checkout-main"], [1, "checkout-features"], [1, "features-column"], [1, "features-title", "included-title"], [1, "features-list", "included"], [1, "feature-count"], [1, "features-title", "extra-title"], [1, "features-list", "extra"], [1, "feature-price"], ["aria-hidden", "true", 1, "feature-col-value"], [1, "extra-bio-notice"], [1, "extra-bio-header", 3, "click"], [1, "extra-bio-left"], [1, "info-icon"], [1, "expand-icon"], ["class", "extra-bio-body", 4, "ngIf"], [1, "checkout-action"], ["class", "activate-btn", "mat-flat-button", "", 3, "ngClass", "disabled", "click", 4, "ngIf"], [1, "checkout-terms"], ["target", "_blank", 3, "href"], [1, "landing-slider-section", "animate-fadeIn"], [1, "landing-slider-title"], [1, "landing-slider-subtitle"], [1, "landing-slider-track"], [1, "track-label"], [1, "track-slider"], ["step", "100", "discrete", "", 1, "brand-slider", 3, "min", "max"], ["matSliderThumb", "", 3, "ngModelChange", "ngModel"], [1, "landing-slider-pill"], [1, "extra-bio-body"], [1, "extra-bio-costs"], [1, "bio-cost-item"], ["target", "_blank", 1, "extras-link", 3, "href"], ["mat-flat-button", "", 1, "activate-btn", 3, "click", "ngClass", "disabled"], ["diameter", "20", "class", "mr-2", 4, "ngIf"], ["diameter", "20", 1, "mr-2"]], template: function SmartAccessPlansComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, SmartAccessPlansComponent_ng_container_0_Template, 5, 4, "ng-container", 0);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, DecimalPipe, DatePipe, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, RouterModule, RouterLink, TranslocoModule, TranslocoDirective, MatButtonModule, MatButton, MatIconButton, MatIconModule, MatIcon, MatProgressSpinnerModule, MatProgressSpinner, MatSliderModule, MatSlider, MatSliderThumb], styles: ['\n\n[_nghost-%COMP%] {\n  width: 100%;\n  display: block;\n}\n.plans-container[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 64px);\n  background:\n    linear-gradient(\n      180deg,\n      #f8fafc 0%,\n      #ffffff 100%);\n}\n.crumb[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: rgb(107, 114, 128);\n  margin-bottom: 0.75rem;\n}\n.crumb[_ngcontent-%COMP%]   .crumb-link[_ngcontent-%COMP%] {\n  color: rgb(55, 65, 81);\n  text-decoration: underline;\n  text-underline-offset: 3px;\n}\n.crumb[_ngcontent-%COMP%]   .crumb-sep[_ngcontent-%COMP%] {\n  margin: 0 0.35rem;\n  color: rgb(209, 213, 219);\n}\n.crumb[_ngcontent-%COMP%]   .crumb-here[_ngcontent-%COMP%] {\n  color: rgb(55, 65, 81);\n}\n.current-plan-header[_ngcontent-%COMP%]   .current-plan-title[_ngcontent-%COMP%] {\n  font-size: 1.875rem;\n  font-weight: 650;\n  color: #0f0f2d;\n  margin: 0;\n  letter-spacing: -0.03em;\n}\n.current-plan-header[_ngcontent-%COMP%]   .current-plan-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  color: #6b7280;\n  margin: 4px 0 0;\n  line-height: 1.45;\n}\n.plans-container[_ngcontent-%COMP%]   .current-plan-title[_ngcontent-%COMP%] {\n  font-size: 1.875rem;\n  font-weight: 650;\n  color: #0f0f2d;\n  margin: 0;\n  letter-spacing: -0.03em;\n  font-variant-numeric: tabular-nums;\n}\n.plans-container[_ngcontent-%COMP%]   .current-plan-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  color: #6b7280;\n  margin: 4px 0 0;\n  line-height: 1.45;\n}\n.back-button[_ngcontent-%COMP%] {\n  color: #2b3af0;\n  transition: all 0.2s ease;\n}\n.back-button[_ngcontent-%COMP%]:hover {\n  background: rgba(43, 58, 240, 0.06);\n  transform: translateX(-2px);\n}\n.header-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  min-width: 48px;\n  min-height: 48px;\n  flex-shrink: 0;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #2b3af0 0%,\n      #4f5af6 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 4px 14px rgba(43, 58, 240, 0.25);\n}\n.header-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 24px;\n  width: 24px;\n  height: 24px;\n  min-width: 24px;\n  min-height: 24px;\n  flex-shrink: 0;\n  line-height: 24px;\n}\n.plan-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 20px;\n  border: 1px solid #e5e7eb;\n  overflow: hidden;\n  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.04);\n  transition: all 0.3s ease;\n}\n.plan-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);\n}\n.plan-card.payment-failed[_ngcontent-%COMP%] {\n  border-color: #fecaca;\n}\n.card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  background:\n    linear-gradient(\n      135deg,\n      #f3f4f6 0%,\n      #f5f5f5 100%);\n  border-bottom: 1px solid #e5e7eb;\n}\n@media (max-width: 640px) {\n  .card-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 12px;\n  }\n}\n.card-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease;\n}\n.card-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 22px;\n  width: 22px;\n  height: 22px;\n}\n.card-icon.free[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #6b7280 0%,\n      #9ca3af 100%);\n  box-shadow: 0 2px 8px rgba(107, 114, 128, 0.3);\n}\n.card-icon.plus[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #2b3af0 0%,\n      #4f5af6 100%);\n  box-shadow: 0 2px 8px rgba(43, 58, 240, 0.3);\n}\n.card-icon.business[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #0f0f2d 0%,\n      #1a1a4a 100%);\n  box-shadow: 0 2px 8px rgba(15, 15, 45, 0.3);\n}\n.card-icon.enterprise[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #1f2937 0%,\n      #374151 100%);\n  box-shadow: 0 2px 8px rgba(31, 41, 55, 0.3);\n}\n.status-badge[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  font-weight: 500;\n  padding: 6px 14px;\n  border-radius: 20px;\n}\n.status-badge.success[_ngcontent-%COMP%] {\n  color: #2b3af0;\n  background: rgba(43, 58, 240, 0.06);\n}\n.status-badge.success[_ngcontent-%COMP%]   .status-dot[_ngcontent-%COMP%] {\n  background: #2b3af0;\n}\n.status-badge.warning[_ngcontent-%COMP%] {\n  color: #f59e0b;\n  background: rgba(245, 158, 11, 0.1);\n}\n.status-badge.warning[_ngcontent-%COMP%]   .status-dot[_ngcontent-%COMP%] {\n  background: #f59e0b;\n}\n.status-badge.error[_ngcontent-%COMP%] {\n  color: #ef4444;\n  background: rgba(239, 68, 68, 0.1);\n}\n.status-badge.error[_ngcontent-%COMP%]   .status-dot[_ngcontent-%COMP%] {\n  background: #ef4444;\n}\n.status-badge[_ngcontent-%COMP%]   .status-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_pulse 2s infinite;\n}\n.payment-alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px 24px;\n  background:\n    linear-gradient(\n      135deg,\n      #fef2f2 0%,\n      #fee2e2 100%);\n  border-bottom: 1px solid #fecaca;\n  font-size: 14px;\n  color: #dc2626;\n  font-weight: 500;\n}\n.card-body[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.price-section[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 24px;\n  background:\n    linear-gradient(\n      135deg,\n      #f3f4f6 0%,\n      #e5e7eb 100%);\n  border-radius: 16px;\n  margin-bottom: 24px;\n}\n.price-section[_ngcontent-%COMP%]   .price-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6b7280;\n  font-weight: 500;\n  margin-bottom: 8px;\n}\n.price-section[_ngcontent-%COMP%]   .price-amount[_ngcontent-%COMP%] {\n  font-size: 42px;\n  font-weight: 700;\n  color: #0f0f2d;\n  line-height: 1;\n  font-variant-numeric: tabular-nums;\n  letter-spacing: -0.025em;\n}\n.price-section[_ngcontent-%COMP%]   .price-amount[_ngcontent-%COMP%]   .price-currency[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 500;\n  color: #6b7280;\n}\n.price-section[_ngcontent-%COMP%]   .price-period[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6b7280;\n  margin-top: 8px;\n}\n.payment-method[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 16px;\n  background: #f9fafb;\n  border-radius: 12px;\n  margin-bottom: 24px;\n}\n.payment-method[_ngcontent-%COMP%]   .payment-icon.link[_ngcontent-%COMP%] {\n  color: #1f2937;\n}\n.payment-method[_ngcontent-%COMP%]   .payment-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.payment-method[_ngcontent-%COMP%]   .payment-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #374151;\n}\n.payment-method[_ngcontent-%COMP%]   .payment-expiry[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6b7280;\n}\n.payment-method-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 16px 20px;\n  background: #f9fafb;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  margin-bottom: 24px;\n}\n.payment-method-card.empty[_ngcontent-%COMP%] {\n  justify-content: center;\n  color: #6b7280;\n  font-weight: 500;\n  gap: 8px;\n  background: #f9fafb;\n}\n.payment-method-card.empty[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #9ca3af;\n}\n.payment-card-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  width: 100%;\n}\n.payment-card-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 48px;\n  height: 32px;\n  background: #ffffff;\n  border: 1px solid #e5e7eb;\n  border-radius: 6px;\n  padding: 4px;\n  flex-shrink: 0;\n}\n.payment-card-brand[_ngcontent-%COMP%]   .card-logo[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 100%;\n  object-fit: contain;\n}\n.payment-card-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.payment-card-details[_ngcontent-%COMP%]   .card-number[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #111827;\n}\n.payment-card-details[_ngcontent-%COMP%]   .card-expiry[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6b7280;\n}\n.features-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 16px;\n  margin-bottom: 24px;\n}\n@media (max-width: 640px) {\n  .features-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.feature-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px;\n  background: #ffffff;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  transition: all 0.2s ease;\n}\n.feature-card[_ngcontent-%COMP%]:hover {\n  border-color: #d1d5db;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);\n}\n.feature-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.feature-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.feature-icon.email[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(43, 58, 240, 0.12) 0%,\n      rgba(79, 90, 246, 0.12) 100%);\n  color: #2b3af0;\n}\n.feature-icon.whitelabel[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(15, 15, 45, 0.08) 0%,\n      rgba(15, 15, 45, 0.12) 100%);\n  color: #0f0f2d;\n}\n.feature-icon.biometrics[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(43, 58, 240, 0.08) 0%,\n      rgba(43, 58, 240, 0.15) 100%);\n  color: #2b3af0;\n}\n.feature-icon.api[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(79, 90, 246, 0.08) 0%,\n      rgba(79, 90, 246, 0.15) 100%);\n  color: #4f5af6;\n}\n.feature-content[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.feature-content[_ngcontent-%COMP%]   .feature-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6b7280;\n}\n.feature-content[_ngcontent-%COMP%]   .feature-value[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 600;\n  color: #111827;\n}\n.feature-status[_ngcontent-%COMP%] {\n  font-size: 20px !important;\n  width: 20px !important;\n  height: 20px !important;\n  color: #d1d5db;\n}\n.feature-status.active[_ngcontent-%COMP%] {\n  color: #2b3af0;\n}\n.optional-section[_ngcontent-%COMP%] {\n  padding: 20px;\n  background: #f9fafb;\n  border-radius: 16px;\n  margin-bottom: 24px;\n}\n.optional-section[_ngcontent-%COMP%]   .optional-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #111827;\n  margin-bottom: 4px;\n}\n.optional-section[_ngcontent-%COMP%]   .optional-subtitle[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6b7280;\n  margin-bottom: 16px;\n}\n.optional-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 12px;\n}\n@media (max-width: 640px) {\n  .optional-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.optional-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 12px;\n  padding: 14px;\n  background: #ffffff;\n  border: 1px solid #e5e7eb;\n  border-radius: 10px;\n}\n.optional-icon[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.optional-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.optional-icon.sms[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(43, 58, 240, 0.08) 0%,\n      rgba(43, 58, 240, 0.15) 100%);\n  color: #2b3af0;\n}\n.optional-icon.whatsapp[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(79, 90, 246, 0.08) 0%,\n      rgba(79, 90, 246, 0.15) 100%);\n  color: #4f5af6;\n}\n.optional-content[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 100px;\n}\n.optional-content[_ngcontent-%COMP%]   .optional-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 13px;\n  font-weight: 500;\n  color: #374151;\n}\n.optional-content[_ngcontent-%COMP%]   .optional-value[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11px;\n  color: #9ca3af;\n}\n.optional-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 12px;\n  font-weight: 500;\n  color: #2b3af0;\n  text-decoration: none;\n  transition: color 0.2s ease;\n}\n.optional-link[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.optional-link[_ngcontent-%COMP%]:hover {\n  color: #0f0f2d;\n}\n.card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.action-button[_ngcontent-%COMP%] {\n  border-radius: 50px;\n  padding: 12px 32px;\n  font-weight: 500;\n  font-size: 15px;\n  transition: all 0.2s ease;\n}\n.action-button.primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #2b3af0 0%,\n      #0f0f2d 100%);\n  color: white;\n  box-shadow: 0 4px 14px rgba(43, 58, 240, 0.3);\n}\n.action-button.primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(43, 58, 240, 0.4);\n}\n.action-button.primary.error[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ef4444 0%,\n      #dc2626 100%);\n  box-shadow: 0 4px 14px rgba(239, 68, 68, 0.3);\n}\n.action-button.secondary[_ngcontent-%COMP%] {\n  border-color: #2b3af0;\n  color: #2b3af0;\n}\n.action-button.secondary[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  transition: transform 0.2s ease;\n}\n.action-button.secondary[_ngcontent-%COMP%]:hover {\n  background: rgba(43, 58, 240, 0.06);\n}\n.action-button.secondary[_ngcontent-%COMP%]:hover   mat-icon[_ngcontent-%COMP%] {\n  transform: translateX(4px);\n}\n.upgrade-section[_ngcontent-%COMP%] {\n  background: #0f0f2d;\n  border-radius: 20px;\n  overflow: hidden;\n  position: relative;\n  box-shadow:\n    inset 0 1px 0 rgba(255, 255, 255, 0.06),\n    0 1px 2px rgba(0, 0, 0, 0.3),\n    0 12px 32px rgba(0, 0, 0, 0.25);\n}\n.upgrade-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  padding: 32px 32px 24px;\n  position: relative;\n  z-index: 1;\n}\n@media (max-width: 640px) {\n  .upgrade-header[_ngcontent-%COMP%] {\n    padding: 24px 20px 16px;\n  }\n}\n.upgrade-header-content[_ngcontent-%COMP%] {\n  flex: 1;\n  max-width: 480px;\n}\n.upgrade-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 12px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(43, 58, 240, 0.2) 0%,\n      rgba(79, 90, 246, 0.2) 100%);\n  border: 1px solid rgba(43, 58, 240, 0.3);\n  border-radius: 20px;\n  margin-bottom: 16px;\n}\n.upgrade-badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n  color: white;\n}\n.upgrade-badge[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: white;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.upgrade-headline[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  color: #ffffff;\n  margin-bottom: 8px;\n  line-height: 1.2;\n}\n@media (max-width: 640px) {\n  .upgrade-headline[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n}\n.upgrade-subheadline[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #94a3b8;\n  line-height: 1.5;\n  margin: 0;\n}\n.upgrade-illustration[_ngcontent-%COMP%] {\n  position: relative;\n  width: 120px;\n  height: 100px;\n  flex-shrink: 0;\n}\n@media (max-width: 768px) {\n  .upgrade-illustration[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.floating-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 12px;\n  animation: _ngcontent-%COMP%_float 3s ease-in-out infinite;\n}\n.floating-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.floating-icon.icon-1[_ngcontent-%COMP%] {\n  top: 0;\n  left: 20px;\n  width: 44px;\n  height: 44px;\n  background:\n    linear-gradient(\n      135deg,\n      #2b3af0 0%,\n      #0f0f2d 100%);\n  box-shadow: 0 8px 24px rgba(43, 58, 240, 0.4);\n}\n.floating-icon.icon-1[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: white;\n}\n.floating-icon.icon-2[_ngcontent-%COMP%] {\n  top: 30px;\n  right: 0;\n  width: 40px;\n  height: 40px;\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);\n  animation-delay: 0.5s;\n}\n.floating-icon.icon-2[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.85);\n}\n.floating-icon.icon-3[_ngcontent-%COMP%] {\n  bottom: 0;\n  left: 40px;\n  width: 36px;\n  height: 36px;\n  background: rgba(43, 58, 240, 0.18);\n  border: 1px solid rgba(79, 90, 246, 0.3);\n  box-shadow: 0 8px 24px rgba(43, 58, 240, 0.25);\n  animation-delay: 1s;\n}\n.floating-icon.icon-3[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #4f5af6;\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n@keyframes _ngcontent-%COMP%_float {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-8px);\n  }\n}\n.upgrade-benefits[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n  padding: 0 32px 24px;\n  position: relative;\n  z-index: 1;\n}\n@media (max-width: 768px) {\n  .upgrade-benefits[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 12px;\n    padding: 0 20px 20px;\n  }\n}\n.benefit-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 16px;\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  border-radius: 12px;\n  transition: all 0.2s ease;\n}\n.benefit-item[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.05);\n  border-color: rgba(255, 255, 255, 0.1);\n}\n.benefit-icon[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  background: rgba(43, 58, 240, 0.15);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.benefit-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: #4f5af6;\n}\n.benefit-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.benefit-text[_ngcontent-%COMP%]   .benefit-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #ffffff;\n}\n.benefit-text[_ngcontent-%COMP%]   .benefit-desc[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #64748b;\n  line-height: 1.4;\n}\n.upgrade-cta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 24px 32px 32px;\n  position: relative;\n  z-index: 1;\n}\n@media (max-width: 640px) {\n  .upgrade-cta[_ngcontent-%COMP%] {\n    flex-direction: column;\n    padding: 20px;\n    gap: 12px;\n  }\n}\n.upgrade-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 14px 28px !important;\n  background:\n    linear-gradient(\n      135deg,\n      #2b3af0 0%,\n      #0f0f2d 100%) !important;\n  border: none !important;\n  border-radius: 50px !important;\n  font-size: 15px !important;\n  font-weight: 600 !important;\n  color: white !important;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  box-shadow: 0 4px 16px rgba(43, 58, 240, 0.4);\n}\n.upgrade-button[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(43, 58, 240, 0.5);\n}\n.upgrade-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  transition: transform 0.2s ease;\n}\n.upgrade-button[_ngcontent-%COMP%]:hover   mat-icon[_ngcontent-%COMP%] {\n  transform: translateX(4px);\n}\n@media (max-width: 640px) {\n  .upgrade-button[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n}\n.upgrade-hint[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #64748b;\n}\n@media (max-width: 640px) {\n  .upgrade-hint[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n.plans-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 24px;\n  margin-bottom: 24px;\n}\n@media (max-width: 1024px) {\n  .plans-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 640px) {\n  .plans-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.select-plan-card[_ngcontent-%COMP%] {\n  position: relative;\n  background: #ffffff;\n  border: 1px solid rgba(15, 15, 45, 0.06);\n  border-radius: 20px;\n  padding: 24px;\n  transition: all 0.2s ease;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 1px 2px rgba(15, 15, 45, 0.04), 0 12px 32px rgba(15, 15, 45, 0.04);\n}\n.select-plan-card[_ngcontent-%COMP%]:hover {\n  border-color: rgba(43, 58, 240, 0.25);\n  box-shadow: 0 1px 2px rgba(15, 15, 45, 0.05), 0 16px 40px rgba(15, 15, 45, 0.08);\n  transform: translateY(-2px);\n}\n.select-plan-card.featured[_ngcontent-%COMP%] {\n  border: 2px solid #2b3af0;\n  box-shadow: 0 8px 32px rgba(43, 58, 240, 0.15);\n}\n.select-plan-card.featured[_ngcontent-%COMP%]   .featured-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -12px;\n  left: 50%;\n  transform: translateX(-50%);\n  background:\n    linear-gradient(\n      135deg,\n      #2b3af0 0%,\n      #0f0f2d 100%);\n  color: white;\n  font-size: 11px;\n  font-weight: 600;\n  padding: 4px 12px;\n  border-radius: 20px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.select-plan-card--current[_ngcontent-%COMP%] {\n  border: 2px solid #059669;\n  box-shadow: 0 8px 28px rgba(5, 150, 105, 0.14);\n}\n.select-plan-card--current.featured[_ngcontent-%COMP%] {\n  border: 2px solid #059669;\n  box-shadow: 0 8px 28px rgba(5, 150, 105, 0.18);\n}\n.current-plan-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -12px;\n  left: 16px;\n  z-index: 2;\n  background:\n    linear-gradient(\n      135deg,\n      #059669 0%,\n      #047857 100%);\n  color: white;\n  font-size: 11px;\n  font-weight: 600;\n  padding: 4px 12px;\n  border-radius: 20px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  box-shadow: 0 2px 8px rgba(5, 150, 105, 0.35);\n}\n.current-plan-badge--offset[_ngcontent-%COMP%] {\n  top: 22px;\n  left: 12px;\n}\n.plan-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 6px 14px;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 600;\n  margin-bottom: 16px;\n  width: fit-content;\n}\n.plan-badge.free[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f3f4f6 0%,\n      #e5e7eb 100%);\n  color: #6b7280;\n}\n.plan-badge.plus[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(43, 58, 240, 0.08) 0%,\n      rgba(43, 58, 240, 0.15) 100%);\n  color: #2b3af0;\n}\n.plan-badge.business[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(15, 15, 45, 0.08) 0%,\n      rgba(15, 15, 45, 0.15) 100%);\n  color: #0f0f2d;\n}\n.plan-badge.enterprise[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #1f2937 0%,\n      #374151 100%);\n  color: white;\n}\n.plan-pricing[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.plan-pricing[_ngcontent-%COMP%]   .plan-price[_ngcontent-%COMP%] {\n  font-size: 36px;\n  font-weight: 700;\n  color: #111827;\n}\n.plan-pricing[_ngcontent-%COMP%]   .plan-price.custom[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.plan-pricing[_ngcontent-%COMP%]   .plan-period[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #6b7280;\n  font-weight: 400;\n}\n.plan-range[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6b7280;\n  margin-bottom: 20px;\n}\n.plan-features[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  padding: 16px 0;\n  border-top: 1px solid #e5e7eb;\n  border-bottom: 1px solid #e5e7eb;\n  margin-bottom: 20px;\n}\n@media (max-width: 480px) {\n  .plan-features[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 12px;\n  }\n}\n.plan-stat[_ngcontent-%COMP%] {\n  flex: 1;\n  text-align: center;\n}\n.plan-stat[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11px;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 4px;\n}\n.plan-stat[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  font-weight: 600;\n  color: #374151;\n}\n.plan-includes[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-bottom: 20px;\n}\n.plan-includes[_ngcontent-%COMP%]   .includes-title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #374151;\n  margin-bottom: 12px;\n}\n.plan-includes[_ngcontent-%COMP%]   .includes-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.plan-includes[_ngcontent-%COMP%]   .includes-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  color: #6b7280;\n  padding: 6px 0;\n}\n.plan-includes[_ngcontent-%COMP%]   .includes-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n  color: #2b3af0;\n}\n.select-button[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 50px;\n  padding: 14px;\n  font-weight: 600;\n  font-size: 14px;\n  transition: all 0.2s ease;\n  margin-top: auto;\n}\n.select-button.free[_ngcontent-%COMP%] {\n  border-color: #6b7280;\n  color: #6b7280;\n}\n.select-button.free[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n.select-button.free[_ngcontent-%COMP%]:hover {\n  background: rgba(107, 114, 128, 0.05);\n}\n.select-button.plus[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #2b3af0 0%,\n      #4f5af6 100%);\n  color: white;\n}\n.select-button.plus[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 14px rgba(43, 58, 240, 0.4);\n  transform: translateY(-2px);\n}\n.select-button.business[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #0f0f2d 0%,\n      #1a1a4a 100%);\n  color: white;\n}\n.select-button.business[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 14px rgba(15, 15, 45, 0.4);\n  transform: translateY(-2px);\n}\n.select-button.enterprise[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #1f2937 0%,\n      #111827 100%);\n  color: white;\n}\n.select-button.enterprise[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 14px rgba(31, 41, 55, 0.4);\n  transform: translateY(-2px);\n}\n.free-plan-card[_ngcontent-%COMP%] {\n  border: 1px solid rgba(107, 114, 128, 0.2);\n  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);\n}\n.free-plan-card[_ngcontent-%COMP%]:hover {\n  border-color: rgba(107, 114, 128, 0.35);\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);\n}\n.free-plan-card[_ngcontent-%COMP%]   .plan-badge.free[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f3f4f6 0%,\n      #e5e7eb 100%);\n  color: #6b7280;\n}\n.free-plan-card[_ngcontent-%COMP%]   .plan-price[_ngcontent-%COMP%] {\n  color: #0f0f2d;\n}\n.free-plan-card[_ngcontent-%COMP%]   .plan-period[_ngcontent-%COMP%] {\n  color: #6b7280;\n}\n.free-plan-card[_ngcontent-%COMP%]   .plan-range[_ngcontent-%COMP%] {\n  color: #6b7280;\n}\n.free-plan-desc[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6b7280;\n  line-height: 1.5;\n  margin: 0 0 20px;\n}\n.free-plan-desc[_ngcontent-%COMP%]     .font-semibold, \n.free-plan-desc[_ngcontent-%COMP%]     b {\n  color: #2b3af0;\n  font-weight: 600;\n}\n.free-plan-desc[_ngcontent-%COMP%]     .text-verifik-vivid-blue {\n  color: #2b3af0 !important;\n}\n.slider-section[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.slider-section[_ngcontent-%COMP%]   .slider-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: #111827;\n  text-align: center;\n  margin-bottom: 32px;\n}\n.selected-plan-card[_ngcontent-%COMP%] {\n  display: flex;\n  background: #ffffff;\n  border: 1px solid #e5e7eb;\n  border-radius: 20px;\n  overflow: hidden;\n  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);\n}\n@media (max-width: 768px) {\n  .selected-plan-card[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.selected-plan-left[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1;\n  padding: 32px;\n  display: flex;\n  flex-direction: column;\n}\n.selected-plan-left[_ngcontent-%COMP%]   .close-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 16px;\n  left: 16px;\n  color: #6b7280;\n}\n.selected-plan-left[_ngcontent-%COMP%]   .close-button[_ngcontent-%COMP%]:hover {\n  background: rgba(107, 114, 128, 0.1);\n}\n.selected-pricing[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 24px 0;\n}\n.selected-pricing[_ngcontent-%COMP%]   .pricing-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6b7280;\n  margin-bottom: 8px;\n}\n.selected-pricing[_ngcontent-%COMP%]   .pricing-amount[_ngcontent-%COMP%] {\n  font-size: 36px;\n  font-weight: 700;\n  color: #0f0f2d;\n}\n.selected-pricing[_ngcontent-%COMP%]   .pricing-amount[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 400;\n  color: #6b7280;\n}\n.selected-pricing[_ngcontent-%COMP%]   .pricing-enrolls[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #2b3af0;\n  margin-top: 8px;\n}\n.selected-stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  padding: 16px;\n  background: #f9fafb;\n  border-radius: 12px;\n  margin-bottom: 24px;\n}\n.selected-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%] {\n  flex: 1;\n  text-align: center;\n}\n.selected-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11px;\n  color: #9ca3af;\n  text-transform: uppercase;\n  margin-bottom: 4px;\n}\n.selected-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  font-weight: 600;\n  color: #374151;\n}\n.selected-includes[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.selected-includes[_ngcontent-%COMP%]   .includes-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #374151;\n  margin-bottom: 12px;\n}\n.selected-includes[_ngcontent-%COMP%]   .includes-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.selected-includes[_ngcontent-%COMP%]   .includes-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 14px;\n  color: #6b7280;\n  padding: 8px 0;\n}\n.selected-includes[_ngcontent-%COMP%]   .includes-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: #2b3af0;\n}\n.purchase-button[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 50px;\n  padding: 16px;\n  font-weight: 600;\n  font-size: 15px;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease;\n  margin-top: auto;\n}\n.purchase-button.free[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #6b7280 0%,\n      #4b5563 100%);\n}\n.purchase-button.plus[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #2b3af0 0%,\n      #4f5af6 100%);\n}\n.purchase-button.business[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #0f0f2d 0%,\n      #1a1a4a 100%);\n}\n.purchase-button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(43, 58, 240, 0.25);\n}\n.purchase-button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.purchase-button[_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n.selected-plan-right[_ngcontent-%COMP%] {\n  flex: 1.2;\n  border-left: 1px solid #e5e7eb;\n  display: flex;\n  flex-direction: column;\n}\n@media (max-width: 768px) {\n  .selected-plan-right[_ngcontent-%COMP%] {\n    border-left: none;\n    border-top: 1px solid #e5e7eb;\n  }\n}\n.plan-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 160px;\n  object-fit: cover;\n  background:\n    linear-gradient(\n      135deg,\n      #2b3af0 0%,\n      #0f0f2d 100%);\n}\n.plan-description[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.plan-description[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: #111827;\n  margin-bottom: 12px;\n}\n.plan-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6b7280;\n  line-height: 1.6;\n}\n.features-table[_ngcontent-%COMP%] {\n  padding: 0 24px;\n  flex: 1;\n}\n.features-table[_ngcontent-%COMP%]   .table-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 12px 16px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(43, 58, 240, 0.08) 0%,\n      rgba(43, 58, 240, 0.12) 100%);\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 600;\n  color: #2b3af0;\n  margin-bottom: 8px;\n}\n.features-table[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 12px 16px;\n  border-bottom: 1px solid #f3f4f6;\n  font-size: 14px;\n}\n.features-table[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  color: #374151;\n}\n.features-table[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   .table-value[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #2b3af0;\n}\n.plan-footer[_ngcontent-%COMP%] {\n  padding: 24px;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n}\n.plan-footer[_ngcontent-%COMP%]   .pricing-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 20px;\n  background: #2b3af0;\n  color: white;\n  border-radius: 50px;\n  font-size: 13px;\n  font-weight: 500;\n  text-decoration: none;\n  transition: all 0.2s ease;\n}\n.plan-footer[_ngcontent-%COMP%]   .pricing-link[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.plan-footer[_ngcontent-%COMP%]   .pricing-link[_ngcontent-%COMP%]:hover {\n  background: #0f0f2d;\n}\n.plan-footer[_ngcontent-%COMP%]   .terms-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.plan-footer[_ngcontent-%COMP%]   .terms-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #6b7280;\n  text-decoration: none;\n}\n.plan-footer[_ngcontent-%COMP%]   .terms-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.range-slider[_ngcontent-%COMP%] {\n  position: relative;\n  height: 30px;\n  margin: 40px 0;\n}\n.range-slider[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 9px;\n  left: 0;\n  height: 12px;\n  width: var(--track-fill-percentage, 0%);\n  background:\n    linear-gradient(\n      90deg,\n      #2b3af0 0%,\n      #4f5af6 100%);\n  border-radius: 6px;\n  transition: width 0.1s ease;\n  z-index: 0;\n}\n.range-slider__dots[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  left: 0;\n  position: absolute;\n  top: 10px;\n  width: 100%;\n  z-index: -1;\n  padding: 0 15px;\n}\n.range-slider__dot[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: #2b3af0;\n  border-radius: 50%;\n  display: block;\n  height: 10px;\n  width: 10px;\n}\n.range-slider__value[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -36px;\n  left: 50%;\n  transform: translateX(-50%);\n  height: 20px;\n  white-space: nowrap;\n  font-size: 12px;\n  font-weight: 500;\n  color: #6b7280;\n}\n.range-slider__input[_ngcontent-%COMP%] {\n  appearance: none;\n  background-color: transparent;\n  height: 30px;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n}\n.range-slider__input[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.range-slider__input[_ngcontent-%COMP%]::-webkit-slider-runnable-track {\n  background-color: #e5e7eb;\n  cursor: pointer;\n  height: 12px;\n  width: 100%;\n  border-radius: 6px;\n}\n.range-slider__input[_ngcontent-%COMP%]::-webkit-slider-thumb {\n  appearance: none;\n  background: #2b3af0;\n  border-radius: 50%;\n  border: 2px solid white;\n  box-shadow: 0 0 0 4px white, 0 2px 8px rgba(0, 0, 0, 0.15);\n  cursor: pointer;\n  height: 30px;\n  margin-top: -9px;\n  width: 30px;\n  z-index: 2;\n  position: relative;\n  transition: transform 0.1s ease;\n}\n.range-slider__input[_ngcontent-%COMP%]::-webkit-slider-thumb:hover {\n  transform: scale(1.1);\n}\n.range-slider__input[_ngcontent-%COMP%]::-moz-range-track {\n  width: 100%;\n  height: 12px;\n  cursor: pointer;\n  border-radius: 6px;\n  background-color: #e5e7eb;\n}\n.range-slider__input[_ngcontent-%COMP%]::-moz-range-thumb {\n  appearance: none;\n  background: #2b3af0;\n  border-radius: 50%;\n  border: 2px solid white;\n  box-shadow: 0 0 0 4px white, 0 2px 8px rgba(0, 0, 0, 0.15);\n  cursor: pointer;\n  height: 30px;\n  width: 30px;\n}\n.landing-slider-section[_ngcontent-%COMP%] {\n  background: rgba(43, 58, 240, 0.04);\n  border: 1px solid rgba(43, 58, 240, 0.08);\n  border-radius: 20px;\n  padding: 32px;\n  margin-bottom: 24px;\n  text-align: center;\n}\n@media (max-width: 640px) {\n  .landing-slider-section[_ngcontent-%COMP%] {\n    padding: 24px 16px;\n  }\n}\n.landing-slider-title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: #0f0f2d;\n  margin: 0 0 8px;\n}\n.landing-slider-subtitle[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6b7280;\n  margin: 0 0 28px;\n}\n.landing-slider-track[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 20px;\n}\n.landing-slider-track[_ngcontent-%COMP%]   .track-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #6b7280;\n  white-space: nowrap;\n  min-width: 50px;\n}\n.landing-slider-track[_ngcontent-%COMP%]   .track-label[_ngcontent-%COMP%]:first-child {\n  text-align: right;\n}\n.landing-slider-track[_ngcontent-%COMP%]   .track-label[_ngcontent-%COMP%]:last-child {\n  text-align: left;\n}\n.landing-slider-track[_ngcontent-%COMP%]   .track-slider[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.landing-slider-track[_ngcontent-%COMP%]   .track-slider[_ngcontent-%COMP%]   .range-slider[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.landing-slider-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background:\n    linear-gradient(\n      135deg,\n      #2b3af0 0%,\n      #0f0f2d 100%);\n  color: white;\n  padding: 12px 24px;\n  border-radius: 50px;\n  font-size: 15px;\n  font-weight: 500;\n  box-shadow: 0 4px 16px rgba(43, 58, 240, 0.3);\n}\n.landing-slider-pill[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n}\n.volume-change-summary[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  max-width: 28rem;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 20px 20px 18px;\n  border-radius: 16px;\n  background: #ffffff;\n  border: 1px solid rgba(15, 15, 45, 0.08);\n  box-shadow:\n    0 0 0 1px rgba(255, 255, 255, 0.8) inset,\n    0 1px 2px rgba(15, 15, 45, 0.04),\n    0 8px 24px rgba(15, 15, 45, 0.06);\n}\n.volume-change-summary__head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  margin-bottom: 18px;\n  text-align: left;\n}\n.volume-change-summary__head-icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 40px;\n  height: 40px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      145deg,\n      rgba(99, 102, 241, 0.12) 0%,\n      rgba(43, 58, 240, 0.08) 100%);\n  border: 1px solid rgba(99, 102, 241, 0.2);\n}\n.volume-change-summary__head-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n  width: 22px;\n  height: 22px;\n  color: #4338ca;\n}\n.volume-change-summary__head-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 0;\n}\n.volume-change-summary__eyebrow[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  color: #6b7280;\n}\n.volume-change-summary__title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 600;\n  color: #111827;\n  letter-spacing: -0.01em;\n  line-height: 1.35;\n}\n.volume-change-summary__compare[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr auto 1fr;\n  gap: 10px;\n  align-items: stretch;\n}\n.volume-change-summary__panel[_ngcontent-%COMP%] {\n  padding: 14px 12px;\n  border-radius: 12px;\n  background: #f9fafb;\n  border: 1px solid rgba(15, 15, 45, 0.06);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  gap: 4px;\n  transition:\n    border-color 0.2s ease,\n    box-shadow 0.2s ease,\n    background 0.2s ease;\n}\n.volume-change-summary__panel--from[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      #fafafa 0%,\n      #f3f4f6 100%);\n}\n.volume-change-summary__panel--to[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      #fafbff 0%,\n      #f5f5ff 100%);\n  border-color: rgba(67, 56, 202, 0.12);\n}\n.volume-change-summary__panel--highlight[_ngcontent-%COMP%] {\n  border-color: rgba(43, 58, 240, 0.35);\n  box-shadow: 0 0 0 3px rgba(43, 58, 240, 0.12);\n  background:\n    linear-gradient(\n      180deg,\n      #f8f9ff 0%,\n      #eef2ff 100%);\n}\n.volume-change-summary__panel-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: #6b7280;\n}\n.volume-change-summary__panel-value[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  font-variant-numeric: tabular-nums;\n  letter-spacing: -0.03em;\n  color: #0f0f2d;\n  line-height: 1.1;\n}\n.volume-change-summary__panel-unit[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #9ca3af;\n}\n.volume-change-summary__mid[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 44px;\n  align-self: center;\n}\n.volume-change-summary__mid-icon[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 999px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #ffffff;\n  border: 1px solid rgba(15, 15, 45, 0.1);\n  box-shadow: 0 2px 6px rgba(15, 15, 45, 0.06);\n}\n.volume-change-summary__mid-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: #4338ca;\n}\n.volume-change-summary__hint[_ngcontent-%COMP%] {\n  margin: 14px 0 0;\n  padding-top: 12px;\n  border-top: 1px solid rgba(15, 15, 45, 0.06);\n  font-size: 13px;\n  line-height: 1.45;\n  color: #6b7280;\n  text-align: center;\n}\n@media (max-width: 480px) {\n  .volume-change-summary__compare[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 12px;\n  }\n  .volume-change-summary__mid[_ngcontent-%COMP%] {\n    width: 100%;\n    min-width: 0;\n    padding: 4px 0;\n  }\n  .volume-change-summary__mid-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    transform: rotate(90deg);\n  }\n}\n.checkout-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 24px;\n  border: 1px solid rgba(43, 58, 240, 0.12);\n  overflow: hidden;\n  box-shadow: 0 8px 40px rgba(15, 15, 45, 0.08);\n}\n.checkout-main[_ngcontent-%COMP%] {\n  padding: 0 32px 28px;\n}\n@media (max-width: 640px) {\n  .checkout-main[_ngcontent-%COMP%] {\n    padding: 0 24px 24px;\n  }\n}\n.checkout-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 24px 32px;\n  color: white;\n}\n.checkout-header.header-free[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #6b7280 0%,\n      #4b5563 100%);\n}\n.checkout-header.header-plus[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #2b3af0 0%,\n      #4f5af6 100%);\n}\n.checkout-header.header-business[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #0f0f2d 0%,\n      #1a1a4a 100%);\n}\n@media (max-width: 640px) {\n  .checkout-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 16px;\n    padding: 20px 24px;\n  }\n}\n.checkout-plan-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.checkout-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 16px;\n  border-radius: 50px;\n  font-size: 14px;\n  font-weight: 600;\n  width: fit-content;\n}\n.checkout-badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.checkout-badge.free[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2);\n  color: white;\n}\n.checkout-badge.plus[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2);\n  color: white;\n}\n.checkout-badge.business[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.15);\n  color: white;\n}\n.checkout-plan-type[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: rgba(255, 255, 255, 0.8);\n  padding-left: 4px;\n}\n.checkout-price[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 2px;\n}\n.checkout-price[_ngcontent-%COMP%]   .price-from[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.7);\n  margin-right: 8px;\n}\n.checkout-price[_ngcontent-%COMP%]   .price-currency[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 600;\n}\n.checkout-price[_ngcontent-%COMP%]   .price-value[_ngcontent-%COMP%] {\n  font-size: 42px;\n  font-weight: 700;\n  line-height: 1;\n  font-variant-numeric: tabular-nums;\n  letter-spacing: -0.025em;\n}\n.checkout-price[_ngcontent-%COMP%]   .price-period[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: rgba(255, 255, 255, 0.8);\n  margin-left: 4px;\n}\n@media (max-width: 640px) {\n  .checkout-price[_ngcontent-%COMP%]   .price-value[_ngcontent-%COMP%] {\n    font-size: 32px;\n  }\n}\n.checkout-stats[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  align-items: stretch;\n  padding: 22px 0;\n  background: rgba(43, 58, 240, 0.04);\n  border-bottom: 1px solid rgba(43, 58, 240, 0.08);\n}\n@media (max-width: 768px) {\n  .checkout-stats[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 0;\n    padding: 20px 0;\n  }\n}\n.checkout-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  gap: 6px;\n  min-width: 0;\n  padding: 8px 12px;\n}\n@media (min-width: 769px) {\n  .checkout-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%] {\n    position: relative;\n  }\n  .checkout-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]:not(:first-child)::before {\n    content: "";\n    position: absolute;\n    left: 0;\n    top: 50%;\n    transform: translateY(-50%);\n    width: 1px;\n    height: min(72%, 5rem);\n    background: rgba(43, 58, 240, 0.12);\n    pointer-events: none;\n  }\n}\n@media (max-width: 768px) {\n  .checkout-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%] {\n    padding: 12px 20px;\n  }\n  .checkout-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]:not(:last-child) {\n    border-bottom: 1px solid rgba(43, 58, 240, 0.1);\n    padding-bottom: 16px;\n    margin-bottom: 4px;\n  }\n}\n.checkout-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  color: #2b3af0;\n}\n.checkout-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #0f0f2d;\n  font-variant-numeric: tabular-nums;\n  letter-spacing: -0.015em;\n  line-height: 1.2;\n  word-break: break-word;\n}\n.checkout-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6b7280;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  line-height: 1.35;\n  max-width: 12rem;\n  margin: 0 auto;\n  hyphens: auto;\n  overflow-wrap: anywhere;\n}\n.checkout-features[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 0;\n  padding: 28px 0;\n  margin: 0;\n  border-bottom: 1px solid rgba(43, 58, 240, 0.08);\n}\n@media (max-width: 640px) {\n  .checkout-features[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    padding: 24px 0;\n  }\n}\n.checkout-features[_ngcontent-%COMP%]   .features-column[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.checkout-features[_ngcontent-%COMP%]   .features-column[_ngcontent-%COMP%]:first-child {\n  padding-right: 28px;\n}\n@media (max-width: 640px) {\n  .checkout-features[_ngcontent-%COMP%]   .features-column[_ngcontent-%COMP%]:first-child {\n    padding-right: 0;\n    padding-bottom: 20px;\n    margin-bottom: 8px;\n    border-bottom: 1px solid rgba(43, 58, 240, 0.08);\n  }\n}\n.checkout-features[_ngcontent-%COMP%]   .features-column[_ngcontent-%COMP%]:last-child {\n  padding-left: 28px;\n  border-left: 1px solid rgba(43, 58, 240, 0.08);\n}\n@media (max-width: 640px) {\n  .checkout-features[_ngcontent-%COMP%]   .features-column[_ngcontent-%COMP%]:last-child {\n    padding-left: 0;\n    border-left: none;\n  }\n}\n.checkout-features[_ngcontent-%COMP%]   .features-column[_ngcontent-%COMP%]   .features-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 14px;\n  font-weight: 650;\n  line-height: 1.35;\n  min-height: 40px;\n  margin: 0 0 10px;\n}\n.checkout-features[_ngcontent-%COMP%]   .features-column[_ngcontent-%COMP%]   .features-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 22px;\n  width: 22px;\n  height: 22px;\n  margin-top: 1px;\n}\n.checkout-features[_ngcontent-%COMP%]   .features-column[_ngcontent-%COMP%]   .features-title.included-title[_ngcontent-%COMP%] {\n  color: #2b3af0;\n}\n.checkout-features[_ngcontent-%COMP%]   .features-column[_ngcontent-%COMP%]   .features-title.included-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #2b3af0;\n}\n.checkout-features[_ngcontent-%COMP%]   .features-column[_ngcontent-%COMP%]   .features-title.extra-title[_ngcontent-%COMP%] {\n  color: #0f0f2d;\n}\n.checkout-features[_ngcontent-%COMP%]   .features-column[_ngcontent-%COMP%]   .features-title.extra-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #0f0f2d;\n  opacity: 0.92;\n}\n.checkout-features[_ngcontent-%COMP%]   .features-column[_ngcontent-%COMP%]   .features-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.checkout-features[_ngcontent-%COMP%]   .features-column[_ngcontent-%COMP%]   .features-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) minmax(5.75rem, auto);\n  column-gap: 12px;\n  align-items: center;\n  justify-items: stretch;\n  min-height: 44px;\n  padding: 10px 0;\n  margin: 0;\n  font-size: 14px;\n  color: #6b7280;\n  border-bottom: 1px solid rgba(107, 114, 128, 0.12);\n}\n.checkout-features[_ngcontent-%COMP%]   .features-column[_ngcontent-%COMP%]   .features-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n  padding-bottom: 0;\n}\n.checkout-features[_ngcontent-%COMP%]   .features-column[_ngcontent-%COMP%]   .features-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\n  padding-top: 0;\n}\n.checkout-features[_ngcontent-%COMP%]   .features-column[_ngcontent-%COMP%]   .features-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  min-width: 0;\n}\n.checkout-features[_ngcontent-%COMP%]   .features-column[_ngcontent-%COMP%]   .features-list.included[_ngcontent-%COMP%]   .feature-count[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #2b3af0;\n  font-variant-numeric: tabular-nums;\n  justify-self: end;\n  text-align: right;\n}\n.checkout-features[_ngcontent-%COMP%]   .features-column[_ngcontent-%COMP%]   .features-list.included[_ngcontent-%COMP%]   .feature-check[_ngcontent-%COMP%] {\n  font-size: 20px !important;\n  width: 20px !important;\n  height: 20px !important;\n  color: #2b3af0;\n  justify-self: end;\n}\n.checkout-features[_ngcontent-%COMP%]   .features-column[_ngcontent-%COMP%]   .features-list.extra[_ngcontent-%COMP%]   .feature-price[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #0f0f2d;\n  justify-self: end;\n  text-align: right;\n  font-variant-numeric: tabular-nums;\n}\n.checkout-features[_ngcontent-%COMP%]   .features-column[_ngcontent-%COMP%]   .features-list.extra[_ngcontent-%COMP%]   .feature-col-value[_ngcontent-%COMP%] {\n  justify-self: end;\n  min-height: 1em;\n  min-width: 5.75rem;\n  visibility: hidden;\n}\n.checkout-features[_ngcontent-%COMP%]   .features-column[_ngcontent-%COMP%]   .features-list.extra[_ngcontent-%COMP%]   .extras-link[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #2b3af0;\n  text-decoration: none;\n  font-weight: 500;\n}\n.checkout-features[_ngcontent-%COMP%]   .features-column[_ngcontent-%COMP%]   .features-list.extra[_ngcontent-%COMP%]   .extras-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.extra-bio-notice[_ngcontent-%COMP%] {\n  margin: 0 0 20px;\n  border: 1px solid rgba(43, 58, 240, 0.15);\n  border-radius: 12px;\n  overflow: hidden;\n}\n@media (max-width: 640px) {\n  .extra-bio-notice[_ngcontent-%COMP%] {\n    margin-bottom: 18px;\n  }\n}\n.extra-bio-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 14px 16px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(43, 58, 240, 0.06) 0%,\n      rgba(79, 90, 246, 0.08) 100%);\n  cursor: pointer;\n  transition: background 0.2s ease;\n}\n.extra-bio-header[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(43, 58, 240, 0.1) 0%,\n      rgba(79, 90, 246, 0.12) 100%);\n}\n.extra-bio-header[_ngcontent-%COMP%]   .extra-bio-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.extra-bio-header[_ngcontent-%COMP%]   .extra-bio-left[_ngcontent-%COMP%]   .info-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: #2b3af0;\n}\n.extra-bio-header[_ngcontent-%COMP%]   .extra-bio-left[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #0f0f2d;\n}\n.extra-bio-header[_ngcontent-%COMP%]   .expand-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  color: #6b7280;\n  transition: transform 0.3s ease;\n}\n.extra-bio-header[_ngcontent-%COMP%]   .expand-icon.expanded[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.extra-bio-body[_ngcontent-%COMP%] {\n  padding: 16px;\n  background: white;\n  animation: _ngcontent-%COMP%_slideDown 0.3s ease-out;\n}\n.extra-bio-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6b7280;\n  line-height: 1.6;\n  margin: 0 0 16px;\n}\n.extra-bio-body[_ngcontent-%COMP%]   .extra-bio-costs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.extra-bio-body[_ngcontent-%COMP%]   .extra-bio-costs[_ngcontent-%COMP%]   .bio-cost-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 14px;\n  background: rgba(43, 58, 240, 0.04);\n  border-radius: 8px;\n  font-size: 13px;\n}\n.extra-bio-body[_ngcontent-%COMP%]   .extra-bio-costs[_ngcontent-%COMP%]   .bio-cost-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #6b7280;\n}\n.extra-bio-body[_ngcontent-%COMP%]   .extra-bio-costs[_ngcontent-%COMP%]   .bio-cost-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #0f0f2d;\n  font-weight: 600;\n}\n@keyframes _ngcontent-%COMP%_slideDown {\n  from {\n    opacity: 0;\n    max-height: 0;\n  }\n  to {\n    opacity: 1;\n    max-height: 300px;\n  }\n}\n.checkout-action[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 14px;\n  padding: 12px 0 8px;\n}\n.checkout-action[_ngcontent-%COMP%]   .activate-btn[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.checkout-button[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 400px;\n  border-radius: 50px !important;\n  padding: 16px 32px !important;\n  font-size: 16px !important;\n  font-weight: 600 !important;\n  color: white !important;\n  display: inline-flex !important;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  transition: all 0.2s ease;\n  border: none !important;\n}\n.checkout-button.free[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #6b7280 0%,\n      #4b5563 100%) !important;\n}\n.checkout-button.plus[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #2b3af0 0%,\n      #4f5af6 100%) !important;\n  box-shadow: 0 4px 20px rgba(43, 58, 240, 0.35);\n}\n.checkout-button.business[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #0f0f2d 0%,\n      #1a1a4a 100%) !important;\n  box-shadow: 0 4px 20px rgba(15, 15, 45, 0.35);\n}\n.checkout-button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 28px rgba(43, 58, 240, 0.4);\n}\n.checkout-button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.checkout-button[_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n.checkout-terms[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  margin: 0;\n  padding-top: 20px;\n  border-top: 1px solid rgba(43, 58, 240, 0.08);\n  font-size: 12px;\n  line-height: 1.55;\n  color: #6b7280;\n  text-align: left;\n}\n.checkout-terms[_ngcontent-%COMP%]    > mat-icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n  margin-top: 3px;\n  color: rgba(107, 114, 128, 0.88);\n}\n.checkout-terms[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.checkout-terms[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #2b3af0;\n  text-decoration: none;\n  font-weight: 500;\n}\n.checkout-terms[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.5;\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.animate-fadeIn[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 0.4s ease-out forwards;\n  opacity: 0;\n}\n.plan-type-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 24px;\n}\n@media (max-width: 768px) {\n  .plan-type-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.plan-type-card[_ngcontent-%COMP%] {\n  background: white;\n  border: 2px solid #e5e7eb;\n  border-radius: 20px;\n  padding: 24px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n}\n.plan-type-card[_ngcontent-%COMP%]:hover {\n  border-color: #2b3af0;\n  box-shadow: 0 8px 25px rgba(43, 58, 240, 0.15);\n  transform: translateY(-4px);\n}\n.plan-type-card.selected[_ngcontent-%COMP%] {\n  border-color: #2b3af0;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(43, 58, 240, 0.04) 0%,\n      #ffffff 100%);\n  box-shadow: 0 8px 25px rgba(43, 58, 240, 0.2);\n}\n.plan-type-card[_ngcontent-%COMP%]   .plan-type-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  margin-bottom: 16px;\n}\n.plan-type-card[_ngcontent-%COMP%]   .plan-type-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.plan-type-card[_ngcontent-%COMP%]   .plan-type-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  width: 24px;\n  height: 24px;\n}\n.plan-type-card[_ngcontent-%COMP%]   .plan-type-icon.users[_ngcontent-%COMP%] {\n  background: rgba(43, 58, 240, 0.1);\n  color: #2b3af0;\n}\n.plan-type-card[_ngcontent-%COMP%]   .plan-type-icon.session[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #d1fae5 0%,\n      #a7f3d0 100%);\n  color: #10b981;\n}\n.plan-type-card[_ngcontent-%COMP%]   .plan-type-check[_ngcontent-%COMP%] {\n  color: #2b3af0;\n}\n.plan-type-card[_ngcontent-%COMP%]   .plan-type-check[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 28px;\n  width: 28px;\n  height: 28px;\n}\n.plan-type-card[_ngcontent-%COMP%]   .plan-type-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #111827;\n  margin-bottom: 16px;\n}\n.plan-type-card[_ngcontent-%COMP%]   .plan-type-image[_ngcontent-%COMP%] {\n  max-width: 280px;\n  margin-bottom: 16px;\n}\n.plan-type-card[_ngcontent-%COMP%]   .plan-type-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n}\n.plan-type-card[_ngcontent-%COMP%]   .plan-type-description[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6b7280;\n  line-height: 1.5;\n}\n.continue-btn[_ngcontent-%COMP%] {\n  background: #2b3af0 !important;\n  color: #ffffff !important;\n  padding: 14px 48px;\n  border-radius: 50px !important;\n  font-weight: 700;\n  font-size: 16px;\n  display: inline-flex !important;\n  align-items: center;\n  gap: 8px;\n  transition: all 0.3s ease;\n  letter-spacing: 0.3px;\n}\n.continue-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  color: #ffffff !important;\n}\n.continue-btn[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 8px 25px rgba(43, 58, 240, 0.4);\n  transform: translateY(-2px);\n}\n.toggle-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.toggle-group[_ngcontent-%COMP%] {\n  display: inline-flex;\n  background: rgba(15, 15, 45, 0.04);\n  border: 1px solid rgba(15, 15, 45, 0.06);\n  border-radius: 12px;\n  padding: 4px;\n  gap: 4px;\n}\n.toggle-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 20px;\n  border-radius: 10px;\n  border: none;\n  background: transparent;\n  font-size: 14px;\n  font-weight: 600;\n  color: #6b7280;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  letter-spacing: -0.01em;\n}\n.toggle-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.toggle-button[_ngcontent-%COMP%]:hover:not(.active) {\n  background: rgba(43, 58, 240, 0.06);\n  color: #2b3af0;\n}\n.toggle-button.active[_ngcontent-%COMP%] {\n  background: #2b3af0;\n  color: white;\n  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.04), 0 2px 8px rgba(43, 58, 240, 0.25);\n}\n.info-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: rgba(43, 58, 240, 0.06);\n  border: 1px solid rgba(43, 58, 240, 0.12);\n  border-radius: 12px;\n  padding: 14px 18px;\n}\n.info-banner[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #2b3af0;\n  flex-shrink: 0;\n}\n.info-banner[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #0f0f2d;\n  line-height: 1.55;\n}\n.info-banner[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.select-plans-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 24px;\n  margin-bottom: 48px;\n  align-items: stretch;\n}\n@media (min-width: 1024px) {\n  .select-plans-grid[_ngcontent-%COMP%]   .select-plan-card[_ngcontent-%COMP%] {\n    min-height: 540px;\n  }\n}\n.select-plans-grid[_ngcontent-%COMP%]   .select-plan-card.enterprise[_ngcontent-%COMP%]   .select-plan-features[_ngcontent-%COMP%] {\n  min-height: 200px;\n}\n.select-plan-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border-radius: 20px;\n  font-size: 13px;\n  font-weight: 600;\n  margin-bottom: 20px;\n  align-self: flex-start;\n}\n.select-plan-badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.select-plan-badge.free[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  color: #6b7280;\n}\n.select-plan-badge.plus[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #eef2ff 0%,\n      #e0e7ff 100%);\n  color: #6366f1;\n}\n.select-plan-badge.business[_ngcontent-%COMP%] {\n  background: rgba(43, 58, 240, 0.1);\n  color: #2b3af0;\n}\n.select-plan-badge.enterprise[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #374151 0%,\n      #1f2937 100%);\n  color: white;\n}\n.select-plan-price[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.select-plan-price[_ngcontent-%COMP%]   .price-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 4px;\n}\n.select-plan-price[_ngcontent-%COMP%]   .price-amount[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  margin-bottom: 4px;\n}\n.select-plan-price[_ngcontent-%COMP%]   .price-amount[_ngcontent-%COMP%]   .currency[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: #374151;\n  margin-right: 2px;\n}\n.select-plan-price[_ngcontent-%COMP%]   .price-amount[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-size: 40px;\n  font-weight: 700;\n  color: #111827;\n  font-variant-numeric: tabular-nums;\n  letter-spacing: -0.025em;\n}\n.select-plan-price[_ngcontent-%COMP%]   .price-amount[_ngcontent-%COMP%]   .period[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #6b7280;\n  margin-left: 4px;\n}\n.select-plan-price[_ngcontent-%COMP%]   .price-contact[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 24px;\n  font-weight: 600;\n  color: #374151;\n  margin-bottom: 8px;\n}\n.select-plan-price[_ngcontent-%COMP%]   .price-sessions[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 13px;\n  color: #6b7280;\n}\n.select-plan-details[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n  padding: 16px 0;\n  border-top: 1px solid #e5e7eb;\n  border-bottom: 1px solid #e5e7eb;\n  margin-bottom: 20px;\n}\n.select-plan-details[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.select-plan-details[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   .detail-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11px;\n  color: #9ca3af;\n  text-transform: uppercase;\n  margin-bottom: 4px;\n}\n.select-plan-details[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   .detail-value[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  font-weight: 600;\n  color: #374151;\n}\n.select-plan-features[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  margin-bottom: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.select-plan-features[_ngcontent-%COMP%]   .feature-category[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.select-plan-features[_ngcontent-%COMP%]   .feature-category[_ngcontent-%COMP%]   .category-title[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11px;\n  font-weight: 600;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 8px;\n}\n.select-plan-features[_ngcontent-%COMP%]   .feature-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 6px 0;\n  font-size: 13px;\n  color: #374151;\n}\n.select-plan-features[_ngcontent-%COMP%]   .feature-row[_ngcontent-%COMP%]   .feature-check[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: #10b981;\n}\n.select-plan-features[_ngcontent-%COMP%]   .feature-row[_ngcontent-%COMP%]   .feature-add[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: #2b3af0;\n}\n.select-plan-button[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 14px;\n  border-radius: 50px;\n  font-weight: 600;\n  font-size: 14px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  transition: all 0.3s ease;\n  margin-top: auto;\n}\n.select-plan-button.free[_ngcontent-%COMP%] {\n  background: #6b7280;\n  color: white;\n}\n.select-plan-button.free[_ngcontent-%COMP%]:hover {\n  background: #4b5563;\n}\n.select-plan-button.plus[_ngcontent-%COMP%] {\n  background: #2b3af0;\n  color: white;\n}\n.select-plan-button.plus[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 14px rgba(43, 58, 240, 0.4);\n}\n.select-plan-button.business[_ngcontent-%COMP%] {\n  background: #0f0f2d;\n  color: white;\n}\n.select-plan-button.business[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 14px rgba(15, 15, 45, 0.4);\n}\n.select-plan-button.enterprise[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #374151 0%,\n      #1f2937 100%);\n  color: white;\n}\n.select-plan-button.enterprise[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 14px rgba(31, 41, 55, 0.4);\n}\n.current-plan-indicator[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 14px;\n  background: #f0fdf4;\n  border: 1px solid #86efac;\n  border-radius: 50px;\n  color: #16a34a;\n  font-weight: 600;\n  font-size: 14px;\n}\n.current-plan-indicator[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.free-trial-section[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f8fafc 0%,\n      #f1f5f9 100%);\n  border: 1px solid #e2e8f0;\n  border-radius: 20px;\n  padding: 32px;\n  margin-bottom: 32px;\n}\n.free-trial-section[_ngcontent-%COMP%]   .free-trial-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 16px;\n}\n.free-trial-section[_ngcontent-%COMP%]   .free-trial-header[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 28px;\n  width: 28px;\n  height: 28px;\n  color: #64748b;\n}\n.free-trial-section[_ngcontent-%COMP%]   .free-trial-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: #1e293b;\n  margin: 0;\n}\n.free-trial-section[_ngcontent-%COMP%]   .free-trial-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #64748b;\n  line-height: 1.6;\n  margin-bottom: 24px;\n}\n.free-trial-section[_ngcontent-%COMP%]   .free-trial-text[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #2b3af0;\n}\n.free-trial-section[_ngcontent-%COMP%]   .free-plan-card[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 16px;\n  padding: 24px;\n}\n.free-trial-section[_ngcontent-%COMP%]   .free-plan-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n}\n@media (max-width: 640px) {\n  .free-trial-section[_ngcontent-%COMP%]   .free-plan-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\n.free-trial-section[_ngcontent-%COMP%]   .free-plan-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 16px;\n  background: rgba(43, 58, 240, 0.1);\n  border-radius: 20px;\n  font-weight: 600;\n  font-size: 14px;\n  color: #2b3af0;\n}\n.free-trial-section[_ngcontent-%COMP%]   .free-plan-badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.free-trial-section[_ngcontent-%COMP%]   .free-plan-offer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.free-trial-section[_ngcontent-%COMP%]   .free-plan-offer[_ngcontent-%COMP%]   .offer-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #1f2937;\n}\n.free-trial-section[_ngcontent-%COMP%]   .free-plan-offer[_ngcontent-%COMP%]   .offer-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6b7280;\n}\n.free-trial-section[_ngcontent-%COMP%]   .free-plan-features[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  gap: 12px;\n  padding: 20px 0;\n  border-top: 1px solid #e5e7eb;\n  border-bottom: 1px solid #e5e7eb;\n  margin-bottom: 20px;\n  align-items: center;\n}\n@media (max-width: 768px) {\n  .free-trial-section[_ngcontent-%COMP%]   .free-plan-features[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.free-trial-section[_ngcontent-%COMP%]   .free-plan-features[_ngcontent-%COMP%]   .feature-column[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  grid-column: span 1;\n}\n.free-trial-section[_ngcontent-%COMP%]   .free-plan-features[_ngcontent-%COMP%]   .feature-column[_ngcontent-%COMP%]   .feature-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 4px;\n}\n.free-trial-section[_ngcontent-%COMP%]   .free-plan-features[_ngcontent-%COMP%]   .feature-column[_ngcontent-%COMP%]   .feature-value[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #374151;\n}\n.free-trial-section[_ngcontent-%COMP%]   .free-plan-features[_ngcontent-%COMP%]   .feature-divider[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 100%;\n  background: #e5e7eb;\n  justify-self: center;\n}\n@media (max-width: 768px) {\n  .free-trial-section[_ngcontent-%COMP%]   .free-plan-features[_ngcontent-%COMP%]   .feature-divider[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.free-trial-section[_ngcontent-%COMP%]   .free-plan-button[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 14px;\n  border-radius: 50px;\n  font-weight: 600;\n  font-size: 14px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  border: 2px solid #2b3af0;\n  color: #2b3af0;\n  transition: all 0.3s ease;\n}\n.free-trial-section[_ngcontent-%COMP%]   .free-plan-button[_ngcontent-%COMP%]:hover {\n  background: #2b3af0;\n  color: white;\n}\n.free-trial-section[_ngcontent-%COMP%]   .free-plan-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.activate-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 16px 56px !important;\n  border-radius: 50px !important;\n  font-weight: 700;\n  font-size: 16px;\n  color: white !important;\n  background: #2b3af0 !important;\n  transition: all 0.3s ease;\n  letter-spacing: 0.3px;\n}\n.activate-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  color: white !important;\n}\n.activate-btn[_ngcontent-%COMP%]   .mdc-button__label[_ngcontent-%COMP%] {\n  color: white !important;\n}\n.activate-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  box-shadow: 0 8px 25px rgba(43, 58, 240, 0.35);\n  transform: translateY(-2px);\n}\n.activate-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.activate-btn.plan-plus[_ngcontent-%COMP%] {\n  background: #2b3af0 !important;\n}\n.activate-btn.plan-business[_ngcontent-%COMP%] {\n  background: #0f0f2d !important;\n}\n.activate-btn.plan-enterprise[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f59e0b 0%,\n      #d97706 100%) !important;\n}\n.activate-btn.plan-free[_ngcontent-%COMP%] {\n  background: #6b7280 !important;\n}\n[_nghost-%COMP%]     .landing-slider-track .brand-slider {\n  width: 100%;\n}\n[_nghost-%COMP%]     .landing-slider-track .brand-slider .mdc-slider__track--inactive {\n  background-color: #e5e7eb !important;\n}\n[_nghost-%COMP%]     .landing-slider-track .brand-slider .mdc-slider__track--active_fill {\n  border-color: #2b3af0 !important;\n  background-color: #2b3af0 !important;\n}\n[_nghost-%COMP%]     .landing-slider-track .brand-slider .mdc-slider__thumb-knob {\n  background-color: #2b3af0 !important;\n  border-color: #2b3af0 !important;\n  box-shadow: 0 2px 10px rgba(43, 58, 240, 0.35);\n}\n[_nghost-%COMP%]     .landing-slider-track .brand-slider .mdc-slider__value-indicator {\n  background-color: #0f0f2d !important;\n  color: white !important;\n}\n.dark[_nghost-%COMP%]   .plans-container[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .plans-container[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      #0b0b18 0%,\n      #0f0f1f 100%);\n}\n.dark[_nghost-%COMP%]   .crumb[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .crumb[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .crumb[_ngcontent-%COMP%]   .crumb-link[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .crumb[_ngcontent-%COMP%]   .crumb-link[_ngcontent-%COMP%] {\n  color: #cbd5f5;\n}\n.dark[_nghost-%COMP%]   .crumb[_ngcontent-%COMP%]   .crumb-sep[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .crumb[_ngcontent-%COMP%]   .crumb-sep[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.18);\n}\n.dark[_nghost-%COMP%]   .crumb[_ngcontent-%COMP%]   .crumb-here[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .crumb[_ngcontent-%COMP%]   .crumb-here[_ngcontent-%COMP%] {\n  color: #cbd5f5;\n}\n.dark[_nghost-%COMP%]   .current-plan-title[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .current-plan-title[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .current-plan-header[_ngcontent-%COMP%]   .current-plan-title[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .current-plan-header[_ngcontent-%COMP%]   .current-plan-title[_ngcontent-%COMP%] {\n  color: #f8fafc;\n}\n.dark[_nghost-%COMP%]   .current-plan-subtitle[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .current-plan-subtitle[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .current-plan-header[_ngcontent-%COMP%]   .current-plan-subtitle[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .current-plan-header[_ngcontent-%COMP%]   .current-plan-subtitle[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .plan-card[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .plan-card[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .select-plan-card[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .select-plan-card[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .checkout-card[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .checkout-card[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .free-trial-section[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .free-trial-section[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .plan-type-card[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .plan-type-card[_ngcontent-%COMP%] {\n  background: #11122a;\n  border-color: rgba(255, 255, 255, 0.08);\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4), 0 12px 32px rgba(0, 0, 0, 0.35);\n}\n.dark[_nghost-%COMP%]   .plan-card[_ngcontent-%COMP%]:hover, .dark   [_nghost-%COMP%]   .plan-card[_ngcontent-%COMP%]:hover, \n.dark[_nghost-%COMP%]   .select-plan-card[_ngcontent-%COMP%]:hover, .dark   [_nghost-%COMP%]   .select-plan-card[_ngcontent-%COMP%]:hover, \n.dark[_nghost-%COMP%]   .checkout-card[_ngcontent-%COMP%]:hover, .dark   [_nghost-%COMP%]   .checkout-card[_ngcontent-%COMP%]:hover, \n.dark[_nghost-%COMP%]   .free-trial-section[_ngcontent-%COMP%]:hover, .dark   [_nghost-%COMP%]   .free-trial-section[_ngcontent-%COMP%]:hover, \n.dark[_nghost-%COMP%]   .plan-type-card[_ngcontent-%COMP%]:hover, .dark   [_nghost-%COMP%]   .plan-type-card[_ngcontent-%COMP%]:hover {\n  border-color: rgba(43, 58, 240, 0.35);\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.45), 0 16px 40px rgba(0, 0, 0, 0.45);\n}\n.dark[_nghost-%COMP%]   .free-trial-section[_ngcontent-%COMP%]   .free-plan-card[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .free-trial-section[_ngcontent-%COMP%]   .free-plan-card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.03);\n  border-color: rgba(255, 255, 255, 0.08);\n}\n.dark[_nghost-%COMP%]   .plan-type-card.selected[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .plan-type-card.selected[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      rgba(43, 58, 240, 0.18) 0%,\n      #11122a 100%);\n  border-color: #2b3af0;\n  box-shadow: 0 8px 25px rgba(43, 58, 240, 0.25);\n}\n.dark[_nghost-%COMP%]   .plan-type-card[_ngcontent-%COMP%]   .plan-type-title[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .plan-type-card[_ngcontent-%COMP%]   .plan-type-title[_ngcontent-%COMP%] {\n  color: #f8fafc;\n}\n.dark[_nghost-%COMP%]   .plan-type-card[_ngcontent-%COMP%]   .plan-type-description[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .plan-type-card[_ngcontent-%COMP%]   .plan-type-description[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .price-section[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .price-section[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .payment-method[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .payment-method[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .payment-method-card[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .payment-method-card[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .optional-section[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .optional-section[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .checkout-stats[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .checkout-stats[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .info-banner[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .info-banner[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .toggle-group[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .toggle-group[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .extra-bio-header[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .extra-bio-header[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .selected-stats[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .selected-stats[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .features-table[_ngcontent-%COMP%]   .table-header[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .features-table[_ngcontent-%COMP%]   .table-header[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.04);\n  border-color: rgba(255, 255, 255, 0.08);\n}\n.dark[_nghost-%COMP%]   .info-banner[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .info-banner[_ngcontent-%COMP%] {\n  background: rgba(43, 58, 240, 0.12);\n  border-color: rgba(79, 90, 246, 0.25);\n}\n.dark[_nghost-%COMP%]   .info-banner[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .info-banner[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #cbd5f5;\n}\n.dark[_nghost-%COMP%]   .landing-slider-section[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .landing-slider-section[_ngcontent-%COMP%] {\n  background: rgba(43, 58, 240, 0.08);\n  border-color: rgba(79, 90, 246, 0.18);\n}\n.dark[_nghost-%COMP%]   .landing-slider-title[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .landing-slider-title[_ngcontent-%COMP%] {\n  color: #f8fafc;\n}\n.dark[_nghost-%COMP%]   .landing-slider-subtitle[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .landing-slider-subtitle[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .landing-slider-track[_ngcontent-%COMP%]   .track-label[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .landing-slider-track[_ngcontent-%COMP%]   .track-label[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .landing-slider-pill[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .landing-slider-pill[_ngcontent-%COMP%] {\n  background: #2b3af0;\n  color: white;\n  box-shadow: 0 4px 16px rgba(43, 58, 240, 0.45);\n}\n.dark[_nghost-%COMP%]   .card-header[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.04) 0%,\n      rgba(255, 255, 255, 0.02) 100%);\n  border-bottom-color: rgba(255, 255, 255, 0.08);\n}\n.dark[_nghost-%COMP%]   .card-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .card-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .card-header[_ngcontent-%COMP%]   .text-lg[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .card-header[_ngcontent-%COMP%]   .text-lg[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .card-header[_ngcontent-%COMP%]   .text-gray-900[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .card-header[_ngcontent-%COMP%]   .text-gray-900[_ngcontent-%COMP%] {\n  color: #f8fafc !important;\n}\n.dark[_nghost-%COMP%]   .card-header[_ngcontent-%COMP%]   .text-gray-500[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .card-header[_ngcontent-%COMP%]   .text-gray-500[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .card-header[_ngcontent-%COMP%]   .text-xs.text-gray-500[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .card-header[_ngcontent-%COMP%]   .text-xs.text-gray-500[_ngcontent-%COMP%] {\n  color: #94a3b8 !important;\n}\n.dark[_nghost-%COMP%]   .price-label[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .price-label[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .feature-label[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .feature-label[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .optional-label[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .optional-label[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .optional-value[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .optional-value[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .price-period[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .price-period[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .card-expiry[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .card-expiry[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .price-from[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .price-from[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .checkout-plan-type[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .checkout-plan-type[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .price-sessions[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .price-sessions[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .stat-label[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .stat-label[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .feature-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .feature-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .features-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .features-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .price-amount[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .price-amount[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .price-amount[_ngcontent-%COMP%]   .price-currency[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .price-amount[_ngcontent-%COMP%]   .price-currency[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .feature-value[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .feature-value[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .card-number[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .card-number[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .stat-value[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .stat-value[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .price-value[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .price-value[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .checkout-price[_ngcontent-%COMP%]   .price-currency[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .checkout-price[_ngcontent-%COMP%]   .price-currency[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .checkout-price[_ngcontent-%COMP%]   .price-value[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .checkout-price[_ngcontent-%COMP%]   .price-value[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .checkout-price[_ngcontent-%COMP%]   .price-period[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .checkout-price[_ngcontent-%COMP%]   .price-period[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .price-amount[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .price-amount[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .price-amount[_ngcontent-%COMP%]   .currency[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .price-amount[_ngcontent-%COMP%]   .currency[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .detail-value[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .detail-value[_ngcontent-%COMP%] {\n  color: #f8fafc;\n}\n.dark[_nghost-%COMP%]   .price-amount[_ngcontent-%COMP%]   .period[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .price-amount[_ngcontent-%COMP%]   .period[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .features-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .features-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  border-bottom-color: rgba(255, 255, 255, 0.06);\n}\n.dark[_nghost-%COMP%]   .features-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .feature-count[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .features-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .feature-count[_ngcontent-%COMP%] {\n  color: #4f5af6;\n}\n.dark[_nghost-%COMP%]   .features-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .feature-price[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .features-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .feature-price[_ngcontent-%COMP%] {\n  color: #cbd5f5;\n}\n.dark[_nghost-%COMP%]   .features-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .feature-check[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .features-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .feature-check[_ngcontent-%COMP%] {\n  color: #34d399;\n}\n.dark[_nghost-%COMP%]   .features-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .extras-link[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .features-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .extras-link[_ngcontent-%COMP%] {\n  color: #4f5af6;\n}\n.dark[_nghost-%COMP%]   .features-column[_ngcontent-%COMP%]   .features-title.included-title[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .features-column[_ngcontent-%COMP%]   .features-title.included-title[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .features-column[_ngcontent-%COMP%]   .features-title.included-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .features-column[_ngcontent-%COMP%]   .features-title.included-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #4f5af6;\n}\n.dark[_nghost-%COMP%]   .features-column[_ngcontent-%COMP%]   .features-title.extra-title[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .features-column[_ngcontent-%COMP%]   .features-title.extra-title[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .features-column[_ngcontent-%COMP%]   .features-title.extra-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .features-column[_ngcontent-%COMP%]   .features-title.extra-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #f8fafc;\n}\n.dark[_nghost-%COMP%]   .feature-status[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .feature-status[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.18);\n}\n.dark[_nghost-%COMP%]   .feature-status.active[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .feature-status.active[_ngcontent-%COMP%] {\n  color: #4f5af6;\n}\n.dark[_nghost-%COMP%]   .feature-card[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .feature-card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.04);\n  border-color: rgba(255, 255, 255, 0.08);\n}\n.dark[_nghost-%COMP%]   .feature-content[_ngcontent-%COMP%]   .feature-label[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .feature-content[_ngcontent-%COMP%]   .feature-label[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .feature-content[_ngcontent-%COMP%]   .feature-value[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .feature-content[_ngcontent-%COMP%]   .feature-value[_ngcontent-%COMP%] {\n  color: #f8fafc;\n}\n.dark[_nghost-%COMP%]   .optional-section[_ngcontent-%COMP%]   .optional-title[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .optional-section[_ngcontent-%COMP%]   .optional-title[_ngcontent-%COMP%] {\n  color: #f8fafc;\n}\n.dark[_nghost-%COMP%]   .optional-section[_ngcontent-%COMP%]   .optional-subtitle[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .optional-section[_ngcontent-%COMP%]   .optional-subtitle[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .optional-card[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .optional-card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.03);\n  border-color: rgba(255, 255, 255, 0.08);\n}\n.dark[_nghost-%COMP%]   .optional-card[_ngcontent-%COMP%]   .optional-label[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .optional-card[_ngcontent-%COMP%]   .optional-label[_ngcontent-%COMP%] {\n  color: #cbd5f5;\n}\n.dark[_nghost-%COMP%]   .optional-card[_ngcontent-%COMP%]   .optional-value[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .optional-card[_ngcontent-%COMP%]   .optional-value[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .optional-card[_ngcontent-%COMP%]   .optional-link[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .optional-card[_ngcontent-%COMP%]   .optional-link[_ngcontent-%COMP%] {\n  color: #4f5af6;\n}\n.dark[_nghost-%COMP%]   .optional-card[_ngcontent-%COMP%]   .optional-link[_ngcontent-%COMP%]:hover, .dark   [_nghost-%COMP%]   .optional-card[_ngcontent-%COMP%]   .optional-link[_ngcontent-%COMP%]:hover {\n  color: white;\n}\n.dark[_nghost-%COMP%]   .select-plan-card[_ngcontent-%COMP%]   .select-plan-price[_ngcontent-%COMP%]   .price-label[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .select-plan-card[_ngcontent-%COMP%]   .select-plan-price[_ngcontent-%COMP%]   .price-label[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .select-plan-card[_ngcontent-%COMP%]   .select-plan-price[_ngcontent-%COMP%]   .price-sessions[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .select-plan-card[_ngcontent-%COMP%]   .select-plan-price[_ngcontent-%COMP%]   .price-sessions[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .select-plan-card[_ngcontent-%COMP%]   .select-plan-price[_ngcontent-%COMP%]   .price-amount[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .select-plan-card[_ngcontent-%COMP%]   .select-plan-price[_ngcontent-%COMP%]   .price-amount[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .select-plan-card[_ngcontent-%COMP%]   .select-plan-price[_ngcontent-%COMP%]   .price-amount[_ngcontent-%COMP%]   .currency[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .select-plan-card[_ngcontent-%COMP%]   .select-plan-price[_ngcontent-%COMP%]   .price-amount[_ngcontent-%COMP%]   .currency[_ngcontent-%COMP%] {\n  color: #f8fafc;\n}\n.dark[_nghost-%COMP%]   .select-plan-card[_ngcontent-%COMP%]   .select-plan-price[_ngcontent-%COMP%]   .price-contact[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .select-plan-card[_ngcontent-%COMP%]   .select-plan-price[_ngcontent-%COMP%]   .price-contact[_ngcontent-%COMP%] {\n  color: #f8fafc;\n}\n.dark[_nghost-%COMP%]   .select-plan-card[_ngcontent-%COMP%]   .select-plan-details[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .select-plan-card[_ngcontent-%COMP%]   .select-plan-details[_ngcontent-%COMP%] {\n  border-top-color: rgba(255, 255, 255, 0.06);\n  border-bottom-color: rgba(255, 255, 255, 0.06);\n}\n.dark[_nghost-%COMP%]   .select-plan-card[_ngcontent-%COMP%]   .select-plan-details[_ngcontent-%COMP%]   .detail-label[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .select-plan-card[_ngcontent-%COMP%]   .select-plan-details[_ngcontent-%COMP%]   .detail-label[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .select-plan-card[_ngcontent-%COMP%]   .select-plan-details[_ngcontent-%COMP%]   .detail-value[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .select-plan-card[_ngcontent-%COMP%]   .select-plan-details[_ngcontent-%COMP%]   .detail-value[_ngcontent-%COMP%] {\n  color: #f8fafc;\n}\n.dark[_nghost-%COMP%]   .select-plan-card[_ngcontent-%COMP%]   .select-plan-features[_ngcontent-%COMP%]   .feature-category[_ngcontent-%COMP%]   .category-title[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .select-plan-card[_ngcontent-%COMP%]   .select-plan-features[_ngcontent-%COMP%]   .feature-category[_ngcontent-%COMP%]   .category-title[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .select-plan-card[_ngcontent-%COMP%]   .select-plan-features[_ngcontent-%COMP%]   .feature-row[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .select-plan-card[_ngcontent-%COMP%]   .select-plan-features[_ngcontent-%COMP%]   .feature-row[_ngcontent-%COMP%] {\n  color: #cbd5f5;\n}\n.dark[_nghost-%COMP%]   .select-plan-badge.free[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .select-plan-badge.free[_ngcontent-%COMP%] {\n  background: rgba(148, 163, 184, 0.16);\n  color: #cbd5e1;\n}\n.dark[_nghost-%COMP%]   .select-plan-badge.plus[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .select-plan-badge.plus[_ngcontent-%COMP%] {\n  background: rgba(79, 90, 246, 0.18);\n  color: #4f5af6;\n}\n.dark[_nghost-%COMP%]   .select-plan-badge.business[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .select-plan-badge.business[_ngcontent-%COMP%] {\n  background: rgba(79, 90, 246, 0.22);\n  color: white;\n}\n.dark[_nghost-%COMP%]   .select-plan-badge.enterprise[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .select-plan-badge.enterprise[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #1f2937 0%,\n      #0b0b18 100%);\n  color: white;\n}\n.dark[_nghost-%COMP%]   .toggle-group[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .toggle-group[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.04);\n  border-color: rgba(255, 255, 255, 0.08);\n}\n.dark[_nghost-%COMP%]   .toggle-button[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .toggle-button[_ngcontent-%COMP%] {\n  color: #cbd5f5;\n}\n.dark[_nghost-%COMP%]   .toggle-button[_ngcontent-%COMP%]:hover:not(.active), .dark   [_nghost-%COMP%]   .toggle-button[_ngcontent-%COMP%]:hover:not(.active) {\n  background: rgba(43, 58, 240, 0.18);\n  color: white;\n}\n.dark[_nghost-%COMP%]   .toggle-button.active[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .toggle-button.active[_ngcontent-%COMP%] {\n  background: #2b3af0;\n  color: white;\n  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.4), 0 2px 8px rgba(43, 58, 240, 0.35);\n}\n.dark[_nghost-%COMP%]   .checkout-card[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .checkout-card[_ngcontent-%COMP%] {\n  border-color: rgba(79, 90, 246, 0.18);\n}\n.dark[_nghost-%COMP%]   .checkout-stats[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .checkout-stats[_ngcontent-%COMP%] {\n  background: rgba(43, 58, 240, 0.08);\n  border-bottom-color: rgba(79, 90, 246, 0.18);\n}\n.dark[_nghost-%COMP%]   .checkout-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]:not(:first-child)::before, .dark   [_nghost-%COMP%]   .checkout-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]:not(:first-child)::before {\n  background: rgba(255, 255, 255, 0.12);\n}\n@media (max-width: 768px) {\n  .dark[_nghost-%COMP%]   .checkout-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]:not(:last-child), .dark   [_nghost-%COMP%]   .checkout-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]:not(:last-child) {\n    border-bottom-color: rgba(255, 255, 255, 0.08);\n  }\n}\n.dark[_nghost-%COMP%]   .checkout-features[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .checkout-features[_ngcontent-%COMP%] {\n  border-bottom-color: rgba(79, 90, 246, 0.18);\n}\n.dark[_nghost-%COMP%]   .checkout-features[_ngcontent-%COMP%]   .features-column[_ngcontent-%COMP%]:last-child, .dark   [_nghost-%COMP%]   .checkout-features[_ngcontent-%COMP%]   .features-column[_ngcontent-%COMP%]:last-child {\n  border-left-color: rgba(79, 90, 246, 0.18);\n}\n@media (max-width: 640px) {\n  .dark[_nghost-%COMP%]   .checkout-features[_ngcontent-%COMP%]   .features-column[_ngcontent-%COMP%]:last-child, .dark   [_nghost-%COMP%]   .checkout-features[_ngcontent-%COMP%]   .features-column[_ngcontent-%COMP%]:last-child {\n    border-left: none;\n  }\n}\n@media (max-width: 640px) {\n  .dark[_nghost-%COMP%]   .checkout-features[_ngcontent-%COMP%]   .features-column[_ngcontent-%COMP%]:first-child, .dark   [_nghost-%COMP%]   .checkout-features[_ngcontent-%COMP%]   .features-column[_ngcontent-%COMP%]:first-child {\n    border-bottom-color: rgba(79, 90, 246, 0.18);\n  }\n}\n.dark[_nghost-%COMP%]   .extra-bio-notice[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .extra-bio-notice[_ngcontent-%COMP%] {\n  border-color: rgba(79, 90, 246, 0.2);\n}\n.dark[_nghost-%COMP%]   .extra-bio-header[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .extra-bio-header[_ngcontent-%COMP%] {\n  background: rgba(43, 58, 240, 0.12);\n}\n.dark[_nghost-%COMP%]   .extra-bio-header[_ngcontent-%COMP%]:hover, .dark   [_nghost-%COMP%]   .extra-bio-header[_ngcontent-%COMP%]:hover {\n  background: rgba(43, 58, 240, 0.18);\n}\n.dark[_nghost-%COMP%]   .extra-bio-header[_ngcontent-%COMP%]   .extra-bio-left[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .extra-bio-header[_ngcontent-%COMP%]   .extra-bio-left[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #f8fafc;\n}\n.dark[_nghost-%COMP%]   .extra-bio-body[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .extra-bio-body[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.02);\n}\n.dark[_nghost-%COMP%]   .extra-bio-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .extra-bio-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .extra-bio-body[_ngcontent-%COMP%]   .extra-bio-costs[_ngcontent-%COMP%]   .bio-cost-item[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .extra-bio-body[_ngcontent-%COMP%]   .extra-bio-costs[_ngcontent-%COMP%]   .bio-cost-item[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid rgba(79, 90, 246, 0.15);\n}\n.dark[_nghost-%COMP%]   .extra-bio-body[_ngcontent-%COMP%]   .extra-bio-costs[_ngcontent-%COMP%]   .bio-cost-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .extra-bio-body[_ngcontent-%COMP%]   .extra-bio-costs[_ngcontent-%COMP%]   .bio-cost-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #cbd5f5;\n}\n.dark[_nghost-%COMP%]   .extra-bio-body[_ngcontent-%COMP%]   .extra-bio-costs[_ngcontent-%COMP%]   .bio-cost-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .extra-bio-body[_ngcontent-%COMP%]   .extra-bio-costs[_ngcontent-%COMP%]   .bio-cost-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #f8fafc;\n  font-weight: 650;\n  font-variant-numeric: tabular-nums;\n}\n.dark[_nghost-%COMP%]   .extra-bio-body[_ngcontent-%COMP%]   .extra-bio-costs[_ngcontent-%COMP%]   .bio-cost-item[_ngcontent-%COMP%]   .extras-link[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .extra-bio-body[_ngcontent-%COMP%]   .extra-bio-costs[_ngcontent-%COMP%]   .bio-cost-item[_ngcontent-%COMP%]   .extras-link[_ngcontent-%COMP%] {\n  color: #4f5af6;\n}\n.dark[_nghost-%COMP%]   .checkout-terms[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .checkout-terms[_ngcontent-%COMP%] {\n  background: transparent;\n  border-top-color: rgba(79, 90, 246, 0.22);\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .checkout-terms[_ngcontent-%COMP%]    > mat-icon[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .checkout-terms[_ngcontent-%COMP%]    > mat-icon[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .checkout-terms[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .checkout-terms[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #4f5af6;\n}\n.dark[_nghost-%COMP%]   .checkout-terms[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .checkout-terms[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .checkout-terms[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .checkout-terms[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #4f5af6;\n}\n.dark[_nghost-%COMP%]   .free-trial-section[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .free-trial-section[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.03) 0%,\n      rgba(255, 255, 255, 0.02) 100%);\n  border-color: rgba(255, 255, 255, 0.08);\n}\n.dark[_nghost-%COMP%]   .free-trial-section[_ngcontent-%COMP%]   .free-trial-header[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .free-trial-section[_ngcontent-%COMP%]   .free-trial-header[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .free-trial-section[_ngcontent-%COMP%]   .free-trial-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .free-trial-section[_ngcontent-%COMP%]   .free-trial-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #f8fafc;\n}\n.dark[_nghost-%COMP%]   .free-trial-section[_ngcontent-%COMP%]   .free-trial-text[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .free-trial-section[_ngcontent-%COMP%]   .free-trial-text[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .free-trial-section[_ngcontent-%COMP%]   .free-trial-text[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .free-trial-section[_ngcontent-%COMP%]   .free-trial-text[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #4f5af6;\n}\n.dark[_nghost-%COMP%]   .free-trial-section[_ngcontent-%COMP%]   .free-plan-card[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .free-trial-section[_ngcontent-%COMP%]   .free-plan-card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.03);\n  border-color: rgba(255, 255, 255, 0.08);\n}\n.dark[_nghost-%COMP%]   .free-trial-section[_ngcontent-%COMP%]   .free-plan-badge[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .free-trial-section[_ngcontent-%COMP%]   .free-plan-badge[_ngcontent-%COMP%] {\n  background: rgba(43, 58, 240, 0.2);\n  color: #4f5af6;\n}\n.dark[_nghost-%COMP%]   .free-trial-section[_ngcontent-%COMP%]   .free-plan-offer[_ngcontent-%COMP%]   .offer-title[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .free-trial-section[_ngcontent-%COMP%]   .free-plan-offer[_ngcontent-%COMP%]   .offer-title[_ngcontent-%COMP%] {\n  color: #f8fafc;\n}\n.dark[_nghost-%COMP%]   .free-trial-section[_ngcontent-%COMP%]   .free-plan-offer[_ngcontent-%COMP%]   .offer-text[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .free-trial-section[_ngcontent-%COMP%]   .free-plan-offer[_ngcontent-%COMP%]   .offer-text[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .free-trial-section[_ngcontent-%COMP%]   .free-plan-features[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .free-trial-section[_ngcontent-%COMP%]   .free-plan-features[_ngcontent-%COMP%] {\n  border-top-color: rgba(255, 255, 255, 0.06);\n  border-bottom-color: rgba(255, 255, 255, 0.06);\n}\n.dark[_nghost-%COMP%]   .free-trial-section[_ngcontent-%COMP%]   .free-plan-features[_ngcontent-%COMP%]   .feature-column[_ngcontent-%COMP%]   .feature-label[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .free-trial-section[_ngcontent-%COMP%]   .free-plan-features[_ngcontent-%COMP%]   .feature-column[_ngcontent-%COMP%]   .feature-label[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .free-trial-section[_ngcontent-%COMP%]   .free-plan-features[_ngcontent-%COMP%]   .feature-column[_ngcontent-%COMP%]   .feature-value[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .free-trial-section[_ngcontent-%COMP%]   .free-plan-features[_ngcontent-%COMP%]   .feature-column[_ngcontent-%COMP%]   .feature-value[_ngcontent-%COMP%] {\n  color: #cbd5f5;\n}\n.dark[_nghost-%COMP%]   .free-trial-section[_ngcontent-%COMP%]   .free-plan-features[_ngcontent-%COMP%]   .feature-divider[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .free-trial-section[_ngcontent-%COMP%]   .free-plan-features[_ngcontent-%COMP%]   .feature-divider[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.06);\n}\n.dark[_nghost-%COMP%]   .free-trial-section[_ngcontent-%COMP%]   .free-plan-button[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .free-trial-section[_ngcontent-%COMP%]   .free-plan-button[_ngcontent-%COMP%] {\n  border-color: #4f5af6;\n  color: #4f5af6;\n}\n.dark[_nghost-%COMP%]   .free-trial-section[_ngcontent-%COMP%]   .free-plan-button[_ngcontent-%COMP%]:hover, .dark   [_nghost-%COMP%]   .free-trial-section[_ngcontent-%COMP%]   .free-plan-button[_ngcontent-%COMP%]:hover {\n  background: #2b3af0;\n  color: white;\n}\n.dark[_nghost-%COMP%]   .current-plan-indicator[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .current-plan-indicator[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.12);\n  border-color: rgba(52, 211, 153, 0.35);\n  color: #34d399;\n}\n.dark[_nghost-%COMP%]   .status-badge.success[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .status-badge.success[_ngcontent-%COMP%] {\n  background: rgba(43, 58, 240, 0.18);\n  color: #4f5af6;\n}\n.dark[_nghost-%COMP%]   .status-badge.warning[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .status-badge.warning[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.18);\n  color: #fbbf24;\n}\n.dark[_nghost-%COMP%]   .status-badge.error[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .status-badge.error[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.18);\n  color: #f87171;\n}\n.dark[_nghost-%COMP%]   .payment-alert[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .payment-alert[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(127, 29, 29, 0.35) 0%,\n      rgba(127, 29, 29, 0.25) 100%);\n  border-bottom-color: rgba(248, 113, 113, 0.35);\n  color: #fca5a5;\n}\n.dark[_nghost-%COMP%]   .payment-alert[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .payment-alert[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #f87171;\n}\n.dark[_nghost-%COMP%]   .upgrade-hint[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .upgrade-hint[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]     .landing-slider-track .brand-slider .mdc-slider__track--inactive, .dark   [_nghost-%COMP%]     .landing-slider-track .brand-slider .mdc-slider__track--inactive {\n  background-color: rgba(255, 255, 255, 0.12) !important;\n}\n.dark[_nghost-%COMP%]     .landing-slider-track .brand-slider .mdc-slider__thumb-knob, .dark   [_nghost-%COMP%]     .landing-slider-track .brand-slider .mdc-slider__thumb-knob {\n  border-color: #11122a !important;\n  box-shadow: 0 2px 10px rgba(43, 58, 240, 0.55);\n}\n/*# sourceMappingURL=smart-access-plans.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SmartAccessPlansComponent, [{
    type: Component,
    args: [{ selector: "smart-access-plans", standalone: true, imports: [
      CommonModule,
      FormsModule,
      RouterModule,
      TranslocoModule,
      MatButtonModule,
      MatIconModule,
      MatProgressSpinnerModule,
      MatSliderModule
    ], template: `<ng-container *transloco="let t">\r
    <!-- ============================================ -->\r
    <!-- CURRENT PLAN VIEW                            -->\r
    <!-- ============================================ -->\r
    <div class="plans-container w-full flex justify-center" *ngIf="currentView === 'current' && currentSubscription.length">\r
        <div class="w-full max-w-4xl px-4 sm:px-8 py-8">\r
            <div class="crumb">\r
                <a routerLink="/chat" class="crumb-link">Verifik</a>\r
                <span class="crumb-sep">/</span>\r
                <span class="crumb-here">{{ t('nav.smart_access') }}</span>\r
                <span class="crumb-sep">/</span>\r
                <span class="crumb-here">{{ t('settings.plans') }}</span>\r
            </div>\r
            <div class="current-plan-header flex items-center gap-4 mb-8">\r
                <div class="header-icon">\r
                    <mat-icon>fingerprint</mat-icon>\r
                </div>\r
                <div class="flex flex-col gap-1 min-w-0">\r
                    <h1 class="current-plan-title">{{ t('settings.plans') }}</h1>\r
                    <p class="current-plan-subtitle">{{ t('nav.manage_subscription') }}</p>\r
                </div>\r
            </div>\r
\r
            <ng-container *ngFor="let subscription of currentSubscription; let i = index">\r
                <div\r
                    class="plan-card mb-6 animate-fadeIn"\r
                    [class.payment-failed]="subscription.paymentFailedAt"\r
                    [style.animation-delay]="i * 0.1 + 's'"\r
                >\r
                    <div class="card-header">\r
                        <div class="flex items-center gap-3">\r
                            <div class="card-icon" [ngClass]="getPlanColorClass(subscription.codeShow)">\r
                                <mat-icon>fingerprint</mat-icon>\r
                            </div>\r
                            <div>\r
                                <p class="text-xs text-gray-500 uppercase tracking-wide">\r
                                    <ng-container *ngIf="i === 0">{{ t('smartaccess.plans.your_plan') }}</ng-container>\r
                                    <ng-container *ngIf="i > 0">{{ t('smartaccess.plans.your_next_plan') }}</ng-container>\r
                                </p>\r
                                <h2 class="text-lg font-semibold text-gray-900">Smart Access {{ subscription.nameShow }}</h2>\r
                            </div>\r
                        </div>\r
                        <div\r
                            class="status-badge"\r
                            [ngClass]="{\r
                                error: subscription.paymentFailedAt,\r
                                warning: subscription.cancelAt,\r
                                success: !subscription.paymentFailedAt && !subscription.cancelAt\r
                            }"\r
                        >\r
                            <span class="status-dot"></span>\r
                            <ng-container *ngIf="subscription.paymentFailedAt">{{ t('subscriptions.payment_failed') }}</ng-container>\r
                            <ng-container *ngIf="subscription.cancelAt && !subscription.paymentFailedAt">{{\r
                                t('smartaccess.plans.cancelled')\r
                            }}</ng-container>\r
                            <ng-container *ngIf="!subscription.paymentFailedAt && !subscription.cancelAt">{{\r
                                t('smartenroll.plans.active')\r
                            }}</ng-container>\r
                        </div>\r
                    </div>\r
\r
                    <div class="payment-alert" *ngIf="subscription?.paymentFailedAt">\r
                        <mat-icon>error_outline</mat-icon>\r
                        <span>{{ t('subscriptions.payment_failed_description') }}</span>\r
                    </div>\r
\r
                    <div class="card-body">\r
                        <div class="price-section">\r
                            <p class="price-label">{{ t('smartaccess.plans.value_plan') }}</p>\r
                            <p class="price-amount">\r
                                <span class="price-currency">$</span>{{\r
                                    subscription.plan ? returnInteger(subscription.plan.amount * subscription.biometricsLimit) : 0\r
                                }}\r
                                <span class="price-currency">USD</span>\r
                            </p>\r
                            <p class="price-period" *ngIf="i === 0 && !subscription.cancelAt">\r
                                {{ t('smartaccess.plans.next_payment') }}: {{ subscription.endDate | date: 'longDate' }}\r
                            </p>\r
                            <p class="price-period" *ngIf="i > 0 && !subscription.cancelAt">\r
                                {{ t('smartaccess.plans.starts_in') }}: {{ subscription.startDate | date: 'longDate' }}\r
                            </p>\r
                            <p class="price-period text-amber-600" *ngIf="subscription.cancelAt">\r
                                {{ t('smartaccess.plans.canceled_plan') }} {{ subscription.cancelAt | date: 'longDate' }}\r
                            </p>\r
                        </div>\r
\r
                        <div\r
                            class="payment-method-card"\r
                            *ngIf="subscription.cardBrand && subscription.lastFour && !isLinkPayment(subscription.cardBrand)"\r
                        >\r
                            <div class="payment-card-info">\r
                                <div class="payment-card-brand">\r
                                    <img [src]="creditCardLogo(subscription.cardBrand)" alt="card" class="card-logo" />\r
                                </div>\r
                                <div class="payment-card-details">\r
                                    <span class="card-number">\r
                                        {{ capitalizeFirstLetter(subscription.cardBrand) }}\r
                                        {{ t('smartaccess.plans.ended') }} {{ subscription.lastFour }}\r
                                    </span>\r
                                    <span class="card-expiry">\r
                                        {{ t('smartaccess.plans.expires') }} {{ subscription.cardExpMonth }}/{{ subscription.cardExpYear }}\r
                                    </span>\r
                                </div>\r
                            </div>\r
                        </div>\r
\r
                        <div class="payment-method-card" *ngIf="subscription.cardBrand && isLinkPayment(subscription.cardBrand)">\r
                            <div class="payment-card-info">\r
                                <div class="payment-card-brand">\r
                                    <mat-icon>link</mat-icon>\r
                                </div>\r
                                <div class="payment-card-details">\r
                                    <span class="card-number">Stripe Link</span>\r
                                    <span class="card-expiry">{{ t('smartaccess.plans.digital_wallet') }}</span>\r
                                </div>\r
                            </div>\r
                        </div>\r
\r
                        <div class="payment-method-card empty" *ngIf="!subscription.cardBrand || !subscription.lastFour">\r
                            <mat-icon>credit_card_off</mat-icon>\r
                            <span>{{ t('smartaccess.plans.no_payment') }}</span>\r
                        </div>\r
\r
                        <div class="features-grid">\r
                            <div class="feature-card">\r
                                <div class="feature-icon email">\r
                                    <mat-icon>email</mat-icon>\r
                                </div>\r
                                <div class="feature-content">\r
                                    <span class="feature-label">{{ t('smartaccess.plans.email') }}</span>\r
                                    <span class="feature-value">{{ subscription.emailsLimit }}</span>\r
                                </div>\r
                                <mat-icon class="feature-status" [class.active]="subscription.emailsLimit > 0">\r
                                    {{ subscription.emailsLimit > 0 ? 'check_circle' : 'add_circle_outline' }}\r
                                </mat-icon>\r
                            </div>\r
\r
                            <div class="feature-card">\r
                                <div class="feature-icon whitelabel">\r
                                    <mat-icon>palette</mat-icon>\r
                                </div>\r
                                <div class="feature-content">\r
                                    <span class="feature-label">{{ t('smartaccess.plans.whiteLabel') }}</span>\r
                                    <span class="feature-value">{{ t('smartaccess.plans.enabled') }}</span>\r
                                </div>\r
                                <mat-icon class="feature-status active">check_circle</mat-icon>\r
                            </div>\r
\r
                            <div class="feature-card">\r
                                <div class="feature-icon biometrics">\r
                                    <mat-icon>fingerprint</mat-icon>\r
                                </div>\r
                                <div class="feature-content">\r
                                    <span class="feature-label">{{ t('smartaccess.plans.liveness') }}</span>\r
                                    <span class="feature-value">{{\r
                                        subscription.biometricsLimit > 0\r
                                            ? subscription.biometricsLimit\r
                                            : t('smartaccess.plans.extra_cost')\r
                                    }}</span>\r
                                </div>\r
                                <mat-icon class="feature-status" [class.active]="subscription.biometricsLimit > 0">\r
                                    {{ subscription.biometricsLimit > 0 ? 'check_circle' : 'add_circle_outline' }}\r
                                </mat-icon>\r
                            </div>\r
\r
                            <div class="feature-card">\r
                                <div class="feature-icon api">\r
                                    <mat-icon>code</mat-icon>\r
                                </div>\r
                                <div class="feature-content">\r
                                    <span class="feature-label">{{ t('smartaccess.plans.api_assistance') }}</span>\r
                                    <span class="feature-value">{{ t('smartaccess.plans.disabled') }}</span>\r
                                </div>\r
                                <mat-icon class="feature-status">add_circle_outline</mat-icon>\r
                            </div>\r
                        </div>\r
\r
                        <div class="optional-section">\r
                            <h3 class="optional-title">{{ t('smartaccess.plans.extra_cost') }}</h3>\r
                            <p class="optional-subtitle">{{ t('smartaccess.plans.using_functionality') }}</p>\r
                            <div class="optional-grid">\r
                                <div class="optional-card">\r
                                    <div class="optional-icon sms">\r
                                        <mat-icon>sms</mat-icon>\r
                                    </div>\r
                                    <div class="optional-content">\r
                                        <span class="optional-label">{{ t('smartaccess.plans.sms_optional') }}</span>\r
                                        <span class="optional-value">{{ t('smartaccess.plans.extra_cost') }}</span>\r
                                    </div>\r
                                    <a [href]="getSmsWhatsappPricesUrl()" target="_blank" class="optional-link">\r
                                        {{ t('smartaccess.plans.using_functionality_link') }}\r
                                        <mat-icon>open_in_new</mat-icon>\r
                                    </a>\r
                                </div>\r
                                <div class="optional-card">\r
                                    <div class="optional-icon whatsapp">\r
                                        <mat-icon>chat</mat-icon>\r
                                    </div>\r
                                    <div class="optional-content">\r
                                        <span class="optional-label">{{ t('smartaccess.plans.whatsapp_optional') }}</span>\r
                                        <span class="optional-value">{{ t('smartaccess.plans.extra_cost') }}</span>\r
                                    </div>\r
                                    <a [href]="getSmsWhatsappPricesUrl()" target="_blank" class="optional-link">\r
                                        {{ t('smartaccess.plans.using_functionality_link') }}\r
                                        <mat-icon>open_in_new</mat-icon>\r
                                    </a>\r
                                </div>\r
                            </div>\r
                        </div>\r
\r
                        <div class="card-actions">\r
                            <button\r
                                (click)="cancelSubscription()"\r
                                class="action-button primary"\r
                                [class.error]="subscription?.paymentFailedAt"\r
                                mat-flat-button\r
                            >\r
                                {{ t('nav.manage_subscription') }}\r
                            </button>\r
                        </div>\r
                    </div>\r
                </div>\r
            </ng-container>\r
\r
            <!-- Upgrade CTA Section -->\r
            <div class="upgrade-section animate-fadeIn">\r
                <div class="upgrade-header">\r
                    <div class="upgrade-header-content">\r
                        <div class="upgrade-badge">\r
                            <mat-icon>auto_awesome</mat-icon>\r
                            <span>{{ t('smartenroll.plans.upgrade_available') }}</span>\r
                        </div>\r
                        <h2 class="upgrade-headline">{{ t('smartaccess.plans.better_plan') }}</h2>\r
                        <p class="upgrade-subheadline">{{ t('smartaccess.plans.better_plan_text') }}</p>\r
                    </div>\r
                    <div class="upgrade-illustration">\r
                        <div class="floating-icon icon-1"><mat-icon>verified</mat-icon></div>\r
                        <div class="floating-icon icon-2"><mat-icon>speed</mat-icon></div>\r
                        <div class="floating-icon icon-3"><mat-icon>security</mat-icon></div>\r
                    </div>\r
                </div>\r
\r
                <div class="upgrade-benefits">\r
                    <div class="benefit-item">\r
                        <div class="benefit-icon"><mat-icon>trending_up</mat-icon></div>\r
                        <div class="benefit-text">\r
                            <span class="benefit-title">{{ t('smartenroll.plans.higher_limits') }}</span>\r
                            <span class="benefit-desc">{{ t('smartenroll.plans.higher_limits_desc') }}</span>\r
                        </div>\r
                    </div>\r
                    <div class="benefit-item">\r
                        <div class="benefit-icon"><mat-icon>support_agent</mat-icon></div>\r
                        <div class="benefit-text">\r
                            <span class="benefit-title">{{ t('smartenroll.plans.priority_support') }}</span>\r
                            <span class="benefit-desc">{{ t('smartenroll.plans.priority_support_desc') }}</span>\r
                        </div>\r
                    </div>\r
                    <div class="benefit-item">\r
                        <div class="benefit-icon"><mat-icon>tune</mat-icon></div>\r
                        <div class="benefit-text">\r
                            <span class="benefit-title">{{ t('smartenroll.plans.advanced_features') }}</span>\r
                            <span class="benefit-desc">{{ t('smartenroll.plans.advanced_features_desc') }}</span>\r
                        </div>\r
                    </div>\r
                </div>\r
\r
                <div class="upgrade-cta">\r
                    <button (click)="changeCurrentView()" class="upgrade-button" mat-flat-button>\r
                        <span>{{ t('smartaccess.plans.explore_plan') }}</span>\r
                        <mat-icon>arrow_forward</mat-icon>\r
                    </button>\r
                    <span class="upgrade-hint">{{ t('smartenroll.plans.no_commitment') }}</span>\r
                </div>\r
            </div>\r
        </div>\r
    </div>\r
\r
    <!-- ============================================ -->\r
    <!-- CHANGE VIEW (year vs month picker)           -->\r
    <!-- ============================================ -->\r
    <div class="plans-container w-full flex justify-center" *ngIf="currentView === 'change'">\r
        <div class="w-full max-w-4xl px-4 sm:px-8 py-8">\r
            <div class="crumb">\r
                <a routerLink="/chat" class="crumb-link">Verifik</a>\r
                <span class="crumb-sep">/</span>\r
                <span class="crumb-here">{{ t('nav.smart_access') }}</span>\r
                <span class="crumb-sep">/</span>\r
                <span class="crumb-here">{{ t('settings.plans') }}</span>\r
            </div>\r
            <div class="flex items-center gap-4 mb-8">\r
                <button *ngIf="currentSubscription?.length" (click)="goBack('current')" class="back-button" mat-icon-button>\r
                    <mat-icon>arrow_back</mat-icon>\r
                </button>\r
                <div class="header-icon">\r
                    <mat-icon>tune</mat-icon>\r
                </div>\r
                <div class="flex flex-col gap-1 min-w-0">\r
                    <h1 class="current-plan-title">{{ t('smartaccess.plans.title_1') }}</h1>\r
                    <p class="current-plan-subtitle">{{ t('smartaccess.plans.define') }}</p>\r
                </div>\r
            </div>\r
\r
            <div class="plan-type-grid">\r
                <div (click)="changeIntervalPlan('year')" class="plan-type-card" [class.selected]="typePlan === 'year'">\r
                    <div class="plan-type-header">\r
                        <div class="plan-type-icon users"><mat-icon>group</mat-icon></div>\r
                        <div class="plan-type-check" *ngIf="typePlan === 'year'"><mat-icon>check_circle</mat-icon></div>\r
                    </div>\r
                    <h3 class="plan-type-title">{{ t('smartaccess.plans.active_user') }}</h3>\r
                    <div class="plan-type-image">\r
                        <img src="https://cdn.verifik.co/assets/users2.svg" alt="" />\r
                    </div>\r
                    <p class="plan-type-description">{{ t('smartaccess.plans.active_users_explained') }}</p>\r
                </div>\r
\r
                <div (click)="changeIntervalPlan('month')" class="plan-type-card" [class.selected]="typePlan === 'month'">\r
                    <div class="plan-type-header">\r
                        <div class="plan-type-icon session"><mat-icon>timer</mat-icon></div>\r
                        <div class="plan-type-check" *ngIf="typePlan === 'month'"><mat-icon>check_circle</mat-icon></div>\r
                    </div>\r
                    <h3 class="plan-type-title">{{ t('smartaccess.plans.per_session') }}</h3>\r
                    <div class="plan-type-image">\r
                        <img src="https://cdn.verifik.co/assets/perSession2.svg" alt="" />\r
                    </div>\r
                    <p class="plan-type-description">{{ t('smartaccess.plans.per_sessions_explained') }}</p>\r
                </div>\r
            </div>\r
\r
            <div class="flex justify-center mt-8">\r
                <button (click)="updatePlan()" class="continue-btn" mat-flat-button>\r
                    {{ t('smartaccess.plans.continue') }}\r
                    <mat-icon>arrow_forward</mat-icon>\r
                </button>\r
            </div>\r
        </div>\r
    </div>\r
\r
    <!-- ============================================ -->\r
    <!-- SELECT VIEW (tier grid + free trial)         -->\r
    <!-- ============================================ -->\r
    <div class="plans-container w-full flex justify-center" *ngIf="currentView === 'select'">\r
        <div class="w-full max-w-6xl px-4 sm:px-8 py-8">\r
            <div class="crumb">\r
                <a routerLink="/chat" class="crumb-link">Verifik</a>\r
                <span class="crumb-sep">/</span>\r
                <span class="crumb-here">{{ t('nav.smart_access') }}</span>\r
                <span class="crumb-sep">/</span>\r
                <span class="crumb-here">{{ t('settings.plans') }}</span>\r
            </div>\r
            <div class="flex items-center gap-4 mb-6">\r
                <button (click)="goBack('change')" class="back-button" mat-icon-button>\r
                    <mat-icon>arrow_back</mat-icon>\r
                </button>\r
                <div class="header-icon">\r
                    <mat-icon>receipt_long</mat-icon>\r
                </div>\r
                <div class="flex flex-col gap-1 min-w-0">\r
                    <h1 class="current-plan-title">{{ t('smartaccess.plans.title_1') }}</h1>\r
                    <p class="current-plan-subtitle">{{ t('smartaccess.plans.subtitle_1') }}</p>\r
                </div>\r
            </div>\r
\r
            <div class="toggle-container mb-6">\r
                <div class="toggle-group">\r
                    <button class="toggle-button" [class.active]="typePlan === 'year'" (click)="changeIntervalPlan('year')">\r
                        <mat-icon>group</mat-icon>\r
                        {{ t('smartaccess.plans.active_user') }}\r
                    </button>\r
                    <button class="toggle-button" [class.active]="typePlan === 'month'" (click)="changeIntervalPlan('month')">\r
                        <mat-icon>timer</mat-icon>\r
                        {{ t('smartaccess.plans.per_session') }}\r
                    </button>\r
                </div>\r
            </div>\r
\r
            <div class="info-banner mb-8">\r
                <mat-icon>info</mat-icon>\r
                <span>\r
                    <strong>{{ t('smartaccess.plans.remember') }}</strong>\r
                    <ng-container *ngIf="typePlan === 'year'">\r
                        {{ t('smartaccess.plans.explain_3') }}{{ t('smartaccess.plans.explain_4') }}\r
                    </ng-container>\r
                    <ng-container *ngIf="typePlan === 'month'">\r
                        {{ t('smartaccess.plans.explain_1') }}{{ t('smartaccess.plans.explain_2') }}\r
                    </ng-container>\r
                </span>\r
            </div>\r
\r
            <div class="select-plans-grid">\r
                <ng-container *ngFor="let plan of plans">\r
                    <div\r
                        class="select-plan-card"\r
                        *ngIf="plan && plan.codeShow !== 'Free'"\r
                        [ngClass]="getPlanColorClass(plan.codeShow)"\r
                    >\r
                        <div class="select-plan-badge" [ngClass]="getPlanColorClass(plan.codeShow)">\r
                            <mat-icon>{{\r
                                plan.codeShow === 'Enterprise'\r
                                    ? 'business'\r
                                    : plan.codeShow === 'business'\r
                                    ? 'workspace_premium'\r
                                    : 'star'\r
                            }}</mat-icon>\r
                            {{ capitalizeFirstLetter(plan.codeShow) }}\r
                        </div>\r
\r
                        <ng-container *ngIf="plan.codeShow === 'Enterprise'">\r
                            <div class="select-plan-price">\r
                                <span class="price-label">{{ t('smartaccess.plans.personalized') }}</span>\r
                                <span class="price-contact">{{ t('smartaccess.plans.contact_sales') }}</span>\r
                                <span class="price-sessions">{{ t('smartaccess.plans.more_sessions') }}</span>\r
                            </div>\r
\r
                            <div class="select-plan-features">\r
                                <div class="feature-row">\r
                                    <mat-icon class="feature-check">check_circle</mat-icon>\r
                                    <span>{{ t('smartaccess.plans.whiteLabel') }}: {{ t('smartaccess.plans.enabled') }}</span>\r
                                </div>\r
                                <div class="feature-row">\r
                                    <mat-icon class="feature-check">check_circle</mat-icon>\r
                                    <span>{{ t('smartaccess.plans.api_assistance') }}: {{ t('smartaccess.plans.enabled') }}</span>\r
                                </div>\r
                                <div class="feature-row">\r
                                    <mat-icon class="feature-check">check_circle</mat-icon>\r
                                    <span>{{ t('smartaccess.plans.analytics') }} (BI)</span>\r
                                </div>\r
                            </div>\r
\r
                            <button class="select-plan-button enterprise" (click)="openWhatsapp()" mat-flat-button>\r
                                {{ t('smartaccess.plans.contact_sales') }}\r
                                <mat-icon>arrow_forward</mat-icon>\r
                            </button>\r
                        </ng-container>\r
\r
                        <ng-container *ngIf="plan.codeShow !== 'Enterprise'">\r
                            <div class="select-plan-price">\r
                                <span class="price-label">{{ t('smartaccess.plans.starting') }}</span>\r
                                <div class="price-amount">\r
                                    <span class="currency">$</span>\r
                                    <span class="value">{{ plan.amount * plan.biometricsLimit | number: '1.0-0' }}</span>\r
                                    <span class="period">/{{ plan.interval }}</span>\r
                                </div>\r
                                <span class="price-sessions">\r
                                    {{ plan.biometricsLimit }} - {{ plan.maxAmount }}\r
                                    <ng-container *ngIf="typePlan === 'month'">{{ t('smartaccess.plans.sessions') }}</ng-container>\r
                                    <ng-container *ngIf="typePlan === 'year'">{{ t('smartaccess.plans.users') }}</ng-container>\r
                                </span>\r
                            </div>\r
\r
                            <div class="select-plan-details">\r
                                <div class="detail-item">\r
                                    <span class="detail-label">\r
                                        {{ t('smartaccess.plans.cost_per') }}\r
                                        <ng-container *ngIf="typePlan === 'month'">{{ t('smartaccess.plans.session') }}</ng-container>\r
                                        <ng-container *ngIf="typePlan === 'year'">{{ t('smartaccess.plans.user') }}</ng-container>\r
                                    </span>\r
                                    <span class="detail-value">\${{ plan.amount }}</span>\r
                                </div>\r
                                <div class="detail-item">\r
                                    <span class="detail-label">{{ t('smartaccess.plans.analytics') }} (BI)</span>\r
                                    <span class="detail-value">30 {{ t('smartaccess.plans.days') }}</span>\r
                                </div>\r
                            </div>\r
\r
                            <div class="select-plan-features">\r
                                <div class="feature-category">\r
                                    <span class="category-title">{{ t('smartaccess.plans.standard') }}</span>\r
                                    <div class="feature-row">\r
                                        <mat-icon class="feature-check">check_circle</mat-icon>\r
                                        <span>{{ t('smartaccess.plans.liveness') }}</span>\r
                                    </div>\r
                                    <div class="feature-row">\r
                                        <mat-icon class="feature-check">check_circle</mat-icon>\r
                                        <span>{{ t('smartaccess.plans.email') }} {{ plan.emailsLimit }}</span>\r
                                    </div>\r
                                </div>\r
                                <div class="feature-category">\r
                                    <span class="category-title">{{ t('smartaccess.plans.extra') }}</span>\r
                                    <div class="feature-row">\r
                                        <mat-icon class="feature-add">add_circle_outline</mat-icon>\r
                                        <span>{{ t('smartaccess.plans.sms') }}</span>\r
                                    </div>\r
                                    <div class="feature-row">\r
                                        <mat-icon class="feature-add">add_circle_outline</mat-icon>\r
                                        <span>{{ t('smartaccess.plans.whatsapp') }}</span>\r
                                    </div>\r
                                </div>\r
                                <div class="feature-row">\r
                                    <mat-icon class="feature-check">check_circle</mat-icon>\r
                                    <span>{{ t('smartaccess.plans.whiteLabel') }}: {{ t('smartaccess.plans.enabled') }}</span>\r
                                </div>\r
                            </div>\r
\r
                            <button\r
                                *ngIf="!matchesCurrentSubscription(plan)"\r
                                class="select-plan-button"\r
                                [ngClass]="getPlanColorClass(plan.codeShow)"\r
                                (click)="changeView('lastCheck', plan)"\r
                                mat-flat-button\r
                            >\r
                                {{ t('smartaccess.plans.activate') }}\r
                                <mat-icon>arrow_forward</mat-icon>\r
                            </button>\r
                            <div *ngIf="matchesCurrentSubscription(plan)" class="current-plan-indicator">\r
                                <mat-icon>check_circle</mat-icon>\r
                                {{ t('smartaccess.plans.your_plan') }}\r
                            </div>\r
                        </ng-container>\r
                    </div>\r
                </ng-container>\r
            </div>\r
\r
            <div class="free-trial-section">\r
                <div class="free-trial-header">\r
                    <mat-icon>help_outline</mat-icon>\r
                    <h3>{{ t('smartaccess.plans.not_sure') }}</h3>\r
                </div>\r
                <p class="free-trial-text">\r
                    {{ t('smartaccess.plans.free_solution') }}\r
                    <strong>{{ t('smartaccess.plans.free_solution2') }}</strong>\r
                    {{ t('smartaccess.plans.free_solution3') }}\r
                    <strong>{{ t('smartaccess.plans.free_solution4') }}</strong>\r
                    {{ t('smartaccess.plans.free_solution5') }}\r
                    <strong>{{ t('smartaccess.plans.free_solution6') }}</strong>\r
                </p>\r
\r
                <ng-container *ngFor="let plan of plans">\r
                    <div class="free-plan-card" *ngIf="plan.codeShow === 'Free'">\r
                        <div class="free-plan-header">\r
                            <div class="free-plan-badge">\r
                                <mat-icon>redeem</mat-icon>\r
                                {{ capitalizeFirstLetter(plan.codeShow) }}\r
                            </div>\r
                            <div class="free-plan-offer">\r
                                <span class="offer-title">{{ t('smartaccess.plans.try_free') }}</span>\r
                                <span class="offer-text">{{ t('smartaccess.plans.offer') }}</span>\r
                            </div>\r
                        </div>\r
\r
                        <div class="free-plan-features">\r
                            <div class="feature-column">\r
                                <span class="feature-label">{{ t('smartaccess.plans.included') }}</span>\r
                                <span class="feature-value">{{ t('smartaccess.plans.email_logins') }}</span>\r
                            </div>\r
                            <div class="feature-divider"></div>\r
                            <div class="feature-column">\r
                                <span class="feature-label">{{ t('smartaccess.plans.extra_cost') }}</span>\r
                                <span class="feature-value">{{ t('smartaccess.plans.all_services') }}</span>\r
                            </div>\r
                            <div class="feature-divider"></div>\r
                            <div class="feature-column">\r
                                <span class="feature-label">{{ t('smartaccess.plans.whiteLabel') }}</span>\r
                                <span class="feature-value">{{ t('smartaccess.plans.enabled') }}</span>\r
                            </div>\r
                            <div class="feature-divider"></div>\r
                            <div class="feature-column">\r
                                <span class="feature-label">{{ t('smartaccess.plans.analytics') }} (BI)</span>\r
                                <span class="feature-value">30 {{ t('smartaccess.plans.days') }}</span>\r
                            </div>\r
                        </div>\r
\r
                        <button\r
                            *ngIf="!matchesCurrentSubscription(plan)"\r
                            class="free-plan-button"\r
                            (click)="changeView('lastCheck', plan)"\r
                            mat-stroked-button\r
                        >\r
                            {{ t('smartaccess.plans.activate') }}\r
                            <mat-icon>arrow_forward</mat-icon>\r
                        </button>\r
                        <div *ngIf="matchesCurrentSubscription(plan)" class="current-plan-indicator">\r
                            <mat-icon>check_circle</mat-icon>\r
                            {{ t('smartaccess.plans.your_plan') }}\r
                        </div>\r
                    </div>\r
                </ng-container>\r
            </div>\r
        </div>\r
    </div>\r
\r
    <!-- ============================================ -->\r
    <!-- LAST CHECK VIEW (slider + summary + activate)-->\r
    <!-- ============================================ -->\r
    <div class="plans-container w-full flex justify-center" *ngIf="currentView === 'lastCheck' && currentChangePlan2">\r
        <div class="w-full max-w-4xl px-4 sm:px-8 py-8">\r
            <div class="crumb">\r
                <a routerLink="/chat" class="crumb-link">Verifik</a>\r
                <span class="crumb-sep">/</span>\r
                <span class="crumb-here">{{ t('nav.smart_access') }}</span>\r
                <span class="crumb-sep">/</span>\r
                <span class="crumb-here">{{ t('settings.plans') }}</span>\r
            </div>\r
            <div class="flex items-center gap-4 mb-6">\r
                <button (click)="goBack('select')" class="back-button" mat-icon-button>\r
                    <mat-icon>arrow_back</mat-icon>\r
                </button>\r
                <div class="header-icon">\r
                    <mat-icon>shopping_cart</mat-icon>\r
                </div>\r
                <div class="flex flex-col gap-1 min-w-0">\r
                    <h1 class="current-plan-title">{{ t('smartaccess.plans.title_1') }}</h1>\r
                    <p class="current-plan-subtitle">{{ t('smartaccess.plans.subtitle_1') }}</p>\r
                </div>\r
            </div>\r
\r
            <div class="landing-slider-section animate-fadeIn" *ngIf="showSlide">\r
                <h2 class="landing-slider-title">\r
                    <ng-container *ngIf="typePlan === 'year'">{{ t('smartaccess.plans.users_logins') }}</ng-container>\r
                    <ng-container *ngIf="typePlan === 'month'">{{ t('smartaccess.plans.sessions_logins') }}</ng-container>\r
                </h2>\r
                <p class="landing-slider-subtitle">{{ t('smartaccess.plans.subtitle_1') }}</p>\r
\r
                <div class="landing-slider-track">\r
                    <span class="track-label">{{ currentChangePlan2.biometricsLimit }}</span>\r
                    <div class="track-slider">\r
                        <mat-slider\r
                            class="brand-slider"\r
                            [min]="currentChangePlan2.biometricsLimit"\r
                            [max]="currentChangePlan2.maxAmount"\r
                            step="100"\r
                            discrete\r
                        >\r
                            <input matSliderThumb [(ngModel)]="sliderAmount" />\r
                        </mat-slider>\r
                    </div>\r
                    <span class="track-label">+{{ currentChangePlan2.maxAmount | number }}</span>\r
                </div>\r
\r
                <div class="landing-slider-pill">\r
                    <strong>{{ sliderAmount || currentChangePlan2.biometricsLimit | number }}</strong>\r
                    <ng-container *ngIf="typePlan === 'year'">{{ t('smartaccess.plans.users') }}</ng-container>\r
                    <ng-container *ngIf="typePlan === 'month'">{{ t('smartaccess.plans.sessions') }}</ng-container>\r
                </div>\r
            </div>\r
\r
            <div class="checkout-card animate-fadeIn" [ngClass]="'checkout-' + getPlanColorClass(currentChangePlan2.codeShow)">\r
                <div class="checkout-header" [ngClass]="'header-' + getPlanColorClass(currentChangePlan2.codeShow)">\r
                    <div class="checkout-plan-info">\r
                        <div class="checkout-badge" [ngClass]="getPlanColorClass(currentChangePlan2.codeShow)">\r
                            <mat-icon>{{ currentChangePlan2.codeShow === 'Free' ? 'card_giftcard' : 'star' }}</mat-icon>\r
                            <ng-container *ngIf="currentChangePlan2.name !== 'PYG'">{{ currentChangePlan2.name }}</ng-container>\r
                            <ng-container *ngIf="currentChangePlan2.name === 'PYG'">Free</ng-container>\r
                        </div>\r
                        <span class="checkout-plan-type">\r
                            <ng-container *ngIf="typePlan === 'year'">{{ t('smartaccess.plans.active_user') }}</ng-container>\r
                            <ng-container *ngIf="typePlan === 'month'">{{ t('smartaccess.plans.per_session') }}</ng-container>\r
                        </span>\r
                    </div>\r
                    <div class="checkout-price">\r
                        <span class="price-from">{{ t('smartaccess.plans.from') }}</span>\r
                        <span class="price-currency">$</span>\r
                        <span class="price-value">{{ computeAmount(currentChangePlan2) | number: '1.0-0' }}</span>\r
                        <span class="price-period">/{{ currentChangePlan2.interval }}</span>\r
                    </div>\r
                </div>\r
\r
                <div class="checkout-stats">\r
                    <div class="stat-item">\r
                        <mat-icon>people</mat-icon>\r
                        <span class="stat-value">{{ sliderAmount || currentChangePlan2.biometricsLimit | number }}</span>\r
                        <span class="stat-label">\r
                            <ng-container *ngIf="typePlan === 'year'">{{ t('smartaccess.plans.users') }}</ng-container>\r
                            <ng-container *ngIf="typePlan === 'month'">{{ t('smartaccess.plans.sessions') }}</ng-container>\r
                        </span>\r
                    </div>\r
                    <div class="stat-item">\r
                        <mat-icon>payments</mat-icon>\r
                        <span class="stat-value">\${{ currentChangePlan2.amount }}</span>\r
                        <span class="stat-label">\r
                            {{ t('smartaccess.plans.cost_per') }}\r
                            <ng-container *ngIf="typePlan === 'year'">{{ t('smartaccess.plans.user') }}</ng-container>\r
                            <ng-container *ngIf="typePlan === 'month'">{{ t('smartaccess.plans.session') }}</ng-container>\r
                        </span>\r
                    </div>\r
                    <div class="stat-item">\r
                        <mat-icon>analytics</mat-icon>\r
                        <span class="stat-value">30</span>\r
                        <span class="stat-label">{{ t('smartaccess.plans.analytics') }} (BI) {{ t('smartaccess.plans.days') }}</span>\r
                    </div>\r
                </div>\r
\r
                <div class="checkout-main">\r
                    <div class="checkout-features">\r
                        <div class="features-column">\r
                            <h4 class="features-title included-title">\r
                                <mat-icon>check_circle</mat-icon>\r
                                {{ t('smartaccess.plans.included') }}\r
                            </h4>\r
                            <ul class="features-list included">\r
                                <li>\r
                                    <span>{{ t('smartaccess.plans.liveness') }}</span>\r
                                    <span class="feature-count">{{ sliderAmount || currentChangePlan2.biometricsLimit | number }}</span>\r
                                </li>\r
                                <li>\r
                                    <span>{{ t('smartaccess.plans.email') }}</span>\r
                                    <span class="feature-count">{{ currentChangePlan2.emailsLimit | number }}</span>\r
                                </li>\r
                                <li>\r
                                    <span>{{ t('smartaccess.plans.whiteLabel') }}</span>\r
                                    <mat-icon class="feature-check">check</mat-icon>\r
                                </li>\r
                            </ul>\r
                        </div>\r
                        <div class="features-column">\r
                            <h4 class="features-title extra-title">\r
                                <mat-icon>add_circle_outline</mat-icon>\r
                                {{ t('smartaccess.plans.extra_cost') }}\r
                            </h4>\r
                            <ul class="features-list extra">\r
                                <li>\r
                                    <span>{{ t('smartaccess.plans.feature_4') }}</span>\r
                                    <span class="feature-price">\${{ currentChangePlan2.meteredAmount }} USD</span>\r
                                </li>\r
                                <li>\r
                                    <span>{{ t('smartaccess.plans.sms') }}</span>\r
                                    <span class="feature-col-value" aria-hidden="true">&nbsp;</span>\r
                                </li>\r
                                <li>\r
                                    <span>{{ t('smartaccess.plans.whatsapp') }}</span>\r
                                    <span class="feature-col-value" aria-hidden="true">&nbsp;</span>\r
                                </li>\r
                            </ul>\r
                        </div>\r
                    </div>\r
\r
                    <div class="extra-bio-notice">\r
                        <div class="extra-bio-header" (click)="showExtraBioInfo = !showExtraBioInfo">\r
                            <div class="extra-bio-left">\r
                                <mat-icon class="info-icon">info</mat-icon>\r
                                <span>{{ t('smartaccess.plans.extra_bio_title') }}</span>\r
                            </div>\r
                            <mat-icon class="expand-icon" [class.expanded]="showExtraBioInfo">expand_more</mat-icon>\r
                        </div>\r
                        <div class="extra-bio-body" *ngIf="showExtraBioInfo">\r
                            <p>{{ t('smartaccess.plans.extra_bio_explanation') }}</p>\r
                            <div class="extra-bio-costs">\r
                            <div class="bio-cost-item">\r
                                <span>{{ t('smartaccess.plans.feature_1') }}</span>\r
                                <strong>\r
                                    \${{ currentChangePlan2.meteredAmount }} USD /\r
                                    <ng-container *ngIf="typePlan === 'year'">{{ t('smartaccess.plans.extra_active_user') }}</ng-container>\r
                                    <ng-container *ngIf="typePlan === 'month'">{{ t('smartaccess.plans.extra_session') }}</ng-container>\r
                                </strong>\r
                            </div>\r
                            <div class="bio-cost-item">\r
                                <span>{{ t('smartaccess.plans.feature_2') }}</span>\r
                                <strong>\r
                                    <ng-container *ngIf="currentChangePlan2.codeShow === 'Free'">$10 USD / 5,000</ng-container>\r
                                    <ng-container *ngIf="currentChangePlan2.codeShow !== 'Free'">$2 USD / 1,000</ng-container>\r
                                    {{ t('smartaccess.plans.email') }}s\r
                                </strong>\r
                            </div>\r
                            <div class="bio-cost-item">\r
                                <span>{{ t('smartaccess.plans.feature_3') }}</span>\r
                                <a class="extras-link" [href]="getSmsWhatsappPricesUrl()" target="_blank">\r
                                    {{ t('smartaccess.plans.feature_3_description_2') }}\r
                                    <mat-icon>open_in_new</mat-icon>\r
                                </a>\r
                            </div>\r
                        </div>\r
                        </div>\r
                        </div>\r
\r
                    <div class="checkout-action">\r
                        <button\r
                            *ngIf="!matchesCurrentSubscription(currentChangePlan2)"\r
                            class="activate-btn"\r
                            [ngClass]="'plan-' + getPlanColorClass(currentChangePlan2.codeShow)"\r
                            (click)="activatePlan(currentChangePlan2)"\r
                            [disabled]="subscribingToPlan"\r
                            mat-flat-button\r
                        >\r
                            <mat-spinner *ngIf="subscribingToPlan" diameter="20" class="mr-2"></mat-spinner>\r
                            {{ t('smartaccess.plans.activate') }}\r
                            <mat-icon *ngIf="!subscribingToPlan">arrow_forward</mat-icon>\r
                        </button>\r
                        <div *ngIf="matchesCurrentSubscription(currentChangePlan2)" class="current-plan-indicator">\r
                            <mat-icon>check_circle</mat-icon>\r
                            {{ t('smartaccess.plans.your_plan') }}\r
                        </div>\r
                    </div>\r
\r
                    <div class="checkout-terms">\r
                        <mat-icon>verified</mat-icon>\r
                        <span>\r
                            {{ t('smartaccess.plans.terms_1') }}\r
                            <a [href]="getTermsAndConditionsUrl()" target="_blank">{{ t('smartaccess.plans.terms_2') }}</a>\r
                        </span>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
    </div>\r
</ng-container>\r
`, styles: ['/* src/app/modules/smart-access/plans/smart-access-plans.component.scss */\n:host {\n  width: 100%;\n  display: block;\n}\n.plans-container {\n  min-height: calc(100vh - 64px);\n  background:\n    linear-gradient(\n      180deg,\n      #f8fafc 0%,\n      #ffffff 100%);\n}\n.crumb {\n  font-size: 0.75rem;\n  color: rgb(107, 114, 128);\n  margin-bottom: 0.75rem;\n}\n.crumb .crumb-link {\n  color: rgb(55, 65, 81);\n  text-decoration: underline;\n  text-underline-offset: 3px;\n}\n.crumb .crumb-sep {\n  margin: 0 0.35rem;\n  color: rgb(209, 213, 219);\n}\n.crumb .crumb-here {\n  color: rgb(55, 65, 81);\n}\n.current-plan-header .current-plan-title {\n  font-size: 1.875rem;\n  font-weight: 650;\n  color: #0f0f2d;\n  margin: 0;\n  letter-spacing: -0.03em;\n}\n.current-plan-header .current-plan-subtitle {\n  font-size: 0.95rem;\n  color: #6b7280;\n  margin: 4px 0 0;\n  line-height: 1.45;\n}\n.plans-container .current-plan-title {\n  font-size: 1.875rem;\n  font-weight: 650;\n  color: #0f0f2d;\n  margin: 0;\n  letter-spacing: -0.03em;\n  font-variant-numeric: tabular-nums;\n}\n.plans-container .current-plan-subtitle {\n  font-size: 0.95rem;\n  color: #6b7280;\n  margin: 4px 0 0;\n  line-height: 1.45;\n}\n.back-button {\n  color: #2b3af0;\n  transition: all 0.2s ease;\n}\n.back-button:hover {\n  background: rgba(43, 58, 240, 0.06);\n  transform: translateX(-2px);\n}\n.header-icon {\n  width: 48px;\n  height: 48px;\n  min-width: 48px;\n  min-height: 48px;\n  flex-shrink: 0;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #2b3af0 0%,\n      #4f5af6 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 4px 14px rgba(43, 58, 240, 0.25);\n}\n.header-icon mat-icon {\n  color: white;\n  font-size: 24px;\n  width: 24px;\n  height: 24px;\n  min-width: 24px;\n  min-height: 24px;\n  flex-shrink: 0;\n  line-height: 24px;\n}\n.plan-card {\n  background: #ffffff;\n  border-radius: 20px;\n  border: 1px solid #e5e7eb;\n  overflow: hidden;\n  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.04);\n  transition: all 0.3s ease;\n}\n.plan-card:hover {\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);\n}\n.plan-card.payment-failed {\n  border-color: #fecaca;\n}\n.card-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  background:\n    linear-gradient(\n      135deg,\n      #f3f4f6 0%,\n      #f5f5f5 100%);\n  border-bottom: 1px solid #e5e7eb;\n}\n@media (max-width: 640px) {\n  .card-header {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 12px;\n  }\n}\n.card-icon {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease;\n}\n.card-icon mat-icon {\n  color: white;\n  font-size: 22px;\n  width: 22px;\n  height: 22px;\n}\n.card-icon.free {\n  background:\n    linear-gradient(\n      135deg,\n      #6b7280 0%,\n      #9ca3af 100%);\n  box-shadow: 0 2px 8px rgba(107, 114, 128, 0.3);\n}\n.card-icon.plus {\n  background:\n    linear-gradient(\n      135deg,\n      #2b3af0 0%,\n      #4f5af6 100%);\n  box-shadow: 0 2px 8px rgba(43, 58, 240, 0.3);\n}\n.card-icon.business {\n  background:\n    linear-gradient(\n      135deg,\n      #0f0f2d 0%,\n      #1a1a4a 100%);\n  box-shadow: 0 2px 8px rgba(15, 15, 45, 0.3);\n}\n.card-icon.enterprise {\n  background:\n    linear-gradient(\n      135deg,\n      #1f2937 0%,\n      #374151 100%);\n  box-shadow: 0 2px 8px rgba(31, 41, 55, 0.3);\n}\n.status-badge {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  font-weight: 500;\n  padding: 6px 14px;\n  border-radius: 20px;\n}\n.status-badge.success {\n  color: #2b3af0;\n  background: rgba(43, 58, 240, 0.06);\n}\n.status-badge.success .status-dot {\n  background: #2b3af0;\n}\n.status-badge.warning {\n  color: #f59e0b;\n  background: rgba(245, 158, 11, 0.1);\n}\n.status-badge.warning .status-dot {\n  background: #f59e0b;\n}\n.status-badge.error {\n  color: #ef4444;\n  background: rgba(239, 68, 68, 0.1);\n}\n.status-badge.error .status-dot {\n  background: #ef4444;\n}\n.status-badge .status-dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  animation: pulse 2s infinite;\n}\n.payment-alert {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px 24px;\n  background:\n    linear-gradient(\n      135deg,\n      #fef2f2 0%,\n      #fee2e2 100%);\n  border-bottom: 1px solid #fecaca;\n  font-size: 14px;\n  color: #dc2626;\n  font-weight: 500;\n}\n.card-body {\n  padding: 24px;\n}\n.price-section {\n  text-align: center;\n  padding: 24px;\n  background:\n    linear-gradient(\n      135deg,\n      #f3f4f6 0%,\n      #e5e7eb 100%);\n  border-radius: 16px;\n  margin-bottom: 24px;\n}\n.price-section .price-label {\n  font-size: 14px;\n  color: #6b7280;\n  font-weight: 500;\n  margin-bottom: 8px;\n}\n.price-section .price-amount {\n  font-size: 42px;\n  font-weight: 700;\n  color: #0f0f2d;\n  line-height: 1;\n  font-variant-numeric: tabular-nums;\n  letter-spacing: -0.025em;\n}\n.price-section .price-amount .price-currency {\n  font-size: 18px;\n  font-weight: 500;\n  color: #6b7280;\n}\n.price-section .price-period {\n  font-size: 13px;\n  color: #6b7280;\n  margin-top: 8px;\n}\n.payment-method {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 16px;\n  background: #f9fafb;\n  border-radius: 12px;\n  margin-bottom: 24px;\n}\n.payment-method .payment-icon.link {\n  color: #1f2937;\n}\n.payment-method .payment-details {\n  display: flex;\n  flex-direction: column;\n}\n.payment-method .payment-text {\n  font-size: 14px;\n  font-weight: 500;\n  color: #374151;\n}\n.payment-method .payment-expiry {\n  font-size: 12px;\n  color: #6b7280;\n}\n.payment-method-card {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 16px 20px;\n  background: #f9fafb;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  margin-bottom: 24px;\n}\n.payment-method-card.empty {\n  justify-content: center;\n  color: #6b7280;\n  font-weight: 500;\n  gap: 8px;\n  background: #f9fafb;\n}\n.payment-method-card.empty mat-icon {\n  color: #9ca3af;\n}\n.payment-card-info {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  width: 100%;\n}\n.payment-card-brand {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 48px;\n  height: 32px;\n  background: #ffffff;\n  border: 1px solid #e5e7eb;\n  border-radius: 6px;\n  padding: 4px;\n  flex-shrink: 0;\n}\n.payment-card-brand .card-logo {\n  max-width: 100%;\n  max-height: 100%;\n  object-fit: contain;\n}\n.payment-card-details {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.payment-card-details .card-number {\n  font-size: 14px;\n  font-weight: 600;\n  color: #111827;\n}\n.payment-card-details .card-expiry {\n  font-size: 12px;\n  color: #6b7280;\n}\n.features-grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 16px;\n  margin-bottom: 24px;\n}\n@media (max-width: 640px) {\n  .features-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.feature-card {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px;\n  background: #ffffff;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  transition: all 0.2s ease;\n}\n.feature-card:hover {\n  border-color: #d1d5db;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);\n}\n.feature-icon {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.feature-icon mat-icon {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.feature-icon.email {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(43, 58, 240, 0.12) 0%,\n      rgba(79, 90, 246, 0.12) 100%);\n  color: #2b3af0;\n}\n.feature-icon.whitelabel {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(15, 15, 45, 0.08) 0%,\n      rgba(15, 15, 45, 0.12) 100%);\n  color: #0f0f2d;\n}\n.feature-icon.biometrics {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(43, 58, 240, 0.08) 0%,\n      rgba(43, 58, 240, 0.15) 100%);\n  color: #2b3af0;\n}\n.feature-icon.api {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(79, 90, 246, 0.08) 0%,\n      rgba(79, 90, 246, 0.15) 100%);\n  color: #4f5af6;\n}\n.feature-content {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.feature-content .feature-label {\n  font-size: 13px;\n  color: #6b7280;\n}\n.feature-content .feature-value {\n  font-size: 15px;\n  font-weight: 600;\n  color: #111827;\n}\n.feature-status {\n  font-size: 20px !important;\n  width: 20px !important;\n  height: 20px !important;\n  color: #d1d5db;\n}\n.feature-status.active {\n  color: #2b3af0;\n}\n.optional-section {\n  padding: 20px;\n  background: #f9fafb;\n  border-radius: 16px;\n  margin-bottom: 24px;\n}\n.optional-section .optional-title {\n  font-size: 16px;\n  font-weight: 600;\n  color: #111827;\n  margin-bottom: 4px;\n}\n.optional-section .optional-subtitle {\n  font-size: 13px;\n  color: #6b7280;\n  margin-bottom: 16px;\n}\n.optional-grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 12px;\n}\n@media (max-width: 640px) {\n  .optional-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.optional-card {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 12px;\n  padding: 14px;\n  background: #ffffff;\n  border: 1px solid #e5e7eb;\n  border-radius: 10px;\n}\n.optional-icon {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.optional-icon mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.optional-icon.sms {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(43, 58, 240, 0.08) 0%,\n      rgba(43, 58, 240, 0.15) 100%);\n  color: #2b3af0;\n}\n.optional-icon.whatsapp {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(79, 90, 246, 0.08) 0%,\n      rgba(79, 90, 246, 0.15) 100%);\n  color: #4f5af6;\n}\n.optional-content {\n  flex: 1;\n  min-width: 100px;\n}\n.optional-content .optional-label {\n  display: block;\n  font-size: 13px;\n  font-weight: 500;\n  color: #374151;\n}\n.optional-content .optional-value {\n  display: block;\n  font-size: 11px;\n  color: #9ca3af;\n}\n.optional-link {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 12px;\n  font-weight: 500;\n  color: #2b3af0;\n  text-decoration: none;\n  transition: color 0.2s ease;\n}\n.optional-link mat-icon {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.optional-link:hover {\n  color: #0f0f2d;\n}\n.card-actions {\n  display: flex;\n  justify-content: center;\n}\n.action-button {\n  border-radius: 50px;\n  padding: 12px 32px;\n  font-weight: 500;\n  font-size: 15px;\n  transition: all 0.2s ease;\n}\n.action-button.primary {\n  background:\n    linear-gradient(\n      135deg,\n      #2b3af0 0%,\n      #0f0f2d 100%);\n  color: white;\n  box-shadow: 0 4px 14px rgba(43, 58, 240, 0.3);\n}\n.action-button.primary:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(43, 58, 240, 0.4);\n}\n.action-button.primary.error {\n  background:\n    linear-gradient(\n      135deg,\n      #ef4444 0%,\n      #dc2626 100%);\n  box-shadow: 0 4px 14px rgba(239, 68, 68, 0.3);\n}\n.action-button.secondary {\n  border-color: #2b3af0;\n  color: #2b3af0;\n}\n.action-button.secondary mat-icon {\n  margin-left: 8px;\n  transition: transform 0.2s ease;\n}\n.action-button.secondary:hover {\n  background: rgba(43, 58, 240, 0.06);\n}\n.action-button.secondary:hover mat-icon {\n  transform: translateX(4px);\n}\n.upgrade-section {\n  background: #0f0f2d;\n  border-radius: 20px;\n  overflow: hidden;\n  position: relative;\n  box-shadow:\n    inset 0 1px 0 rgba(255, 255, 255, 0.06),\n    0 1px 2px rgba(0, 0, 0, 0.3),\n    0 12px 32px rgba(0, 0, 0, 0.25);\n}\n.upgrade-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  padding: 32px 32px 24px;\n  position: relative;\n  z-index: 1;\n}\n@media (max-width: 640px) {\n  .upgrade-header {\n    padding: 24px 20px 16px;\n  }\n}\n.upgrade-header-content {\n  flex: 1;\n  max-width: 480px;\n}\n.upgrade-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 12px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(43, 58, 240, 0.2) 0%,\n      rgba(79, 90, 246, 0.2) 100%);\n  border: 1px solid rgba(43, 58, 240, 0.3);\n  border-radius: 20px;\n  margin-bottom: 16px;\n}\n.upgrade-badge mat-icon {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n  color: white;\n}\n.upgrade-badge span {\n  font-size: 12px;\n  font-weight: 600;\n  color: white;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.upgrade-headline {\n  font-size: 28px;\n  font-weight: 700;\n  color: #ffffff;\n  margin-bottom: 8px;\n  line-height: 1.2;\n}\n@media (max-width: 640px) {\n  .upgrade-headline {\n    font-size: 22px;\n  }\n}\n.upgrade-subheadline {\n  font-size: 15px;\n  color: #94a3b8;\n  line-height: 1.5;\n  margin: 0;\n}\n.upgrade-illustration {\n  position: relative;\n  width: 120px;\n  height: 100px;\n  flex-shrink: 0;\n}\n@media (max-width: 768px) {\n  .upgrade-illustration {\n    display: none;\n  }\n}\n.floating-icon {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 12px;\n  animation: float 3s ease-in-out infinite;\n}\n.floating-icon mat-icon {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.floating-icon.icon-1 {\n  top: 0;\n  left: 20px;\n  width: 44px;\n  height: 44px;\n  background:\n    linear-gradient(\n      135deg,\n      #2b3af0 0%,\n      #0f0f2d 100%);\n  box-shadow: 0 8px 24px rgba(43, 58, 240, 0.4);\n}\n.floating-icon.icon-1 mat-icon {\n  color: white;\n}\n.floating-icon.icon-2 {\n  top: 30px;\n  right: 0;\n  width: 40px;\n  height: 40px;\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);\n  animation-delay: 0.5s;\n}\n.floating-icon.icon-2 mat-icon {\n  color: rgba(255, 255, 255, 0.85);\n}\n.floating-icon.icon-3 {\n  bottom: 0;\n  left: 40px;\n  width: 36px;\n  height: 36px;\n  background: rgba(43, 58, 240, 0.18);\n  border: 1px solid rgba(79, 90, 246, 0.3);\n  box-shadow: 0 8px 24px rgba(43, 58, 240, 0.25);\n  animation-delay: 1s;\n}\n.floating-icon.icon-3 mat-icon {\n  color: #4f5af6;\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n@keyframes float {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-8px);\n  }\n}\n.upgrade-benefits {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n  padding: 0 32px 24px;\n  position: relative;\n  z-index: 1;\n}\n@media (max-width: 768px) {\n  .upgrade-benefits {\n    grid-template-columns: 1fr;\n    gap: 12px;\n    padding: 0 20px 20px;\n  }\n}\n.benefit-item {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 16px;\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  border-radius: 12px;\n  transition: all 0.2s ease;\n}\n.benefit-item:hover {\n  background: rgba(255, 255, 255, 0.05);\n  border-color: rgba(255, 255, 255, 0.1);\n}\n.benefit-icon {\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  background: rgba(43, 58, 240, 0.15);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.benefit-icon mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: #4f5af6;\n}\n.benefit-text {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.benefit-text .benefit-title {\n  font-size: 14px;\n  font-weight: 600;\n  color: #ffffff;\n}\n.benefit-text .benefit-desc {\n  font-size: 12px;\n  color: #64748b;\n  line-height: 1.4;\n}\n.upgrade-cta {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 24px 32px 32px;\n  position: relative;\n  z-index: 1;\n}\n@media (max-width: 640px) {\n  .upgrade-cta {\n    flex-direction: column;\n    padding: 20px;\n    gap: 12px;\n  }\n}\n.upgrade-button {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 14px 28px !important;\n  background:\n    linear-gradient(\n      135deg,\n      #2b3af0 0%,\n      #0f0f2d 100%) !important;\n  border: none !important;\n  border-radius: 50px !important;\n  font-size: 15px !important;\n  font-weight: 600 !important;\n  color: white !important;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  box-shadow: 0 4px 16px rgba(43, 58, 240, 0.4);\n}\n.upgrade-button:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(43, 58, 240, 0.5);\n}\n.upgrade-button mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  transition: transform 0.2s ease;\n}\n.upgrade-button:hover mat-icon {\n  transform: translateX(4px);\n}\n@media (max-width: 640px) {\n  .upgrade-button {\n    width: 100%;\n    justify-content: center;\n  }\n}\n.upgrade-hint {\n  font-size: 13px;\n  color: #64748b;\n}\n@media (max-width: 640px) {\n  .upgrade-hint {\n    text-align: center;\n  }\n}\n.plans-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 24px;\n  margin-bottom: 24px;\n}\n@media (max-width: 1024px) {\n  .plans-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 640px) {\n  .plans-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.select-plan-card {\n  position: relative;\n  background: #ffffff;\n  border: 1px solid rgba(15, 15, 45, 0.06);\n  border-radius: 20px;\n  padding: 24px;\n  transition: all 0.2s ease;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 1px 2px rgba(15, 15, 45, 0.04), 0 12px 32px rgba(15, 15, 45, 0.04);\n}\n.select-plan-card:hover {\n  border-color: rgba(43, 58, 240, 0.25);\n  box-shadow: 0 1px 2px rgba(15, 15, 45, 0.05), 0 16px 40px rgba(15, 15, 45, 0.08);\n  transform: translateY(-2px);\n}\n.select-plan-card.featured {\n  border: 2px solid #2b3af0;\n  box-shadow: 0 8px 32px rgba(43, 58, 240, 0.15);\n}\n.select-plan-card.featured .featured-badge {\n  position: absolute;\n  top: -12px;\n  left: 50%;\n  transform: translateX(-50%);\n  background:\n    linear-gradient(\n      135deg,\n      #2b3af0 0%,\n      #0f0f2d 100%);\n  color: white;\n  font-size: 11px;\n  font-weight: 600;\n  padding: 4px 12px;\n  border-radius: 20px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.select-plan-card--current {\n  border: 2px solid #059669;\n  box-shadow: 0 8px 28px rgba(5, 150, 105, 0.14);\n}\n.select-plan-card--current.featured {\n  border: 2px solid #059669;\n  box-shadow: 0 8px 28px rgba(5, 150, 105, 0.18);\n}\n.current-plan-badge {\n  position: absolute;\n  top: -12px;\n  left: 16px;\n  z-index: 2;\n  background:\n    linear-gradient(\n      135deg,\n      #059669 0%,\n      #047857 100%);\n  color: white;\n  font-size: 11px;\n  font-weight: 600;\n  padding: 4px 12px;\n  border-radius: 20px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  box-shadow: 0 2px 8px rgba(5, 150, 105, 0.35);\n}\n.current-plan-badge--offset {\n  top: 22px;\n  left: 12px;\n}\n.plan-badge {\n  display: inline-flex;\n  align-items: center;\n  padding: 6px 14px;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 600;\n  margin-bottom: 16px;\n  width: fit-content;\n}\n.plan-badge.free {\n  background:\n    linear-gradient(\n      135deg,\n      #f3f4f6 0%,\n      #e5e7eb 100%);\n  color: #6b7280;\n}\n.plan-badge.plus {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(43, 58, 240, 0.08) 0%,\n      rgba(43, 58, 240, 0.15) 100%);\n  color: #2b3af0;\n}\n.plan-badge.business {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(15, 15, 45, 0.08) 0%,\n      rgba(15, 15, 45, 0.15) 100%);\n  color: #0f0f2d;\n}\n.plan-badge.enterprise {\n  background:\n    linear-gradient(\n      135deg,\n      #1f2937 0%,\n      #374151 100%);\n  color: white;\n}\n.plan-pricing {\n  margin-bottom: 8px;\n}\n.plan-pricing .plan-price {\n  font-size: 36px;\n  font-weight: 700;\n  color: #111827;\n}\n.plan-pricing .plan-price.custom {\n  font-size: 24px;\n}\n.plan-pricing .plan-period {\n  font-size: 16px;\n  color: #6b7280;\n  font-weight: 400;\n}\n.plan-range {\n  font-size: 14px;\n  color: #6b7280;\n  margin-bottom: 20px;\n}\n.plan-features {\n  display: flex;\n  gap: 16px;\n  padding: 16px 0;\n  border-top: 1px solid #e5e7eb;\n  border-bottom: 1px solid #e5e7eb;\n  margin-bottom: 20px;\n}\n@media (max-width: 480px) {\n  .plan-features {\n    flex-direction: column;\n    gap: 12px;\n  }\n}\n.plan-stat {\n  flex: 1;\n  text-align: center;\n}\n.plan-stat .stat-label {\n  display: block;\n  font-size: 11px;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 4px;\n}\n.plan-stat .stat-value {\n  display: block;\n  font-size: 14px;\n  font-weight: 600;\n  color: #374151;\n}\n.plan-includes {\n  flex: 1;\n  margin-bottom: 20px;\n}\n.plan-includes .includes-title {\n  font-size: 13px;\n  font-weight: 600;\n  color: #374151;\n  margin-bottom: 12px;\n}\n.plan-includes .includes-list {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.plan-includes .includes-list li {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  color: #6b7280;\n  padding: 6px 0;\n}\n.plan-includes .includes-list li mat-icon {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n  color: #2b3af0;\n}\n.select-button {\n  width: 100%;\n  border-radius: 50px;\n  padding: 14px;\n  font-weight: 600;\n  font-size: 14px;\n  transition: all 0.2s ease;\n  margin-top: auto;\n}\n.select-button.free {\n  border-color: #6b7280;\n  color: #6b7280;\n}\n.select-button.free mat-icon {\n  margin-left: 8px;\n}\n.select-button.free:hover {\n  background: rgba(107, 114, 128, 0.05);\n}\n.select-button.plus {\n  background:\n    linear-gradient(\n      135deg,\n      #2b3af0 0%,\n      #4f5af6 100%);\n  color: white;\n}\n.select-button.plus:hover {\n  box-shadow: 0 4px 14px rgba(43, 58, 240, 0.4);\n  transform: translateY(-2px);\n}\n.select-button.business {\n  background:\n    linear-gradient(\n      135deg,\n      #0f0f2d 0%,\n      #1a1a4a 100%);\n  color: white;\n}\n.select-button.business:hover {\n  box-shadow: 0 4px 14px rgba(15, 15, 45, 0.4);\n  transform: translateY(-2px);\n}\n.select-button.enterprise {\n  background:\n    linear-gradient(\n      135deg,\n      #1f2937 0%,\n      #111827 100%);\n  color: white;\n}\n.select-button.enterprise:hover {\n  box-shadow: 0 4px 14px rgba(31, 41, 55, 0.4);\n  transform: translateY(-2px);\n}\n.free-plan-card {\n  border: 1px solid rgba(107, 114, 128, 0.2);\n  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);\n}\n.free-plan-card:hover {\n  border-color: rgba(107, 114, 128, 0.35);\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);\n}\n.free-plan-card .plan-badge.free {\n  background:\n    linear-gradient(\n      135deg,\n      #f3f4f6 0%,\n      #e5e7eb 100%);\n  color: #6b7280;\n}\n.free-plan-card .plan-price {\n  color: #0f0f2d;\n}\n.free-plan-card .plan-period {\n  color: #6b7280;\n}\n.free-plan-card .plan-range {\n  color: #6b7280;\n}\n.free-plan-desc {\n  font-size: 14px;\n  color: #6b7280;\n  line-height: 1.5;\n  margin: 0 0 20px;\n}\n.free-plan-desc ::ng-deep .font-semibold,\n.free-plan-desc ::ng-deep b {\n  color: #2b3af0;\n  font-weight: 600;\n}\n.free-plan-desc ::ng-deep .text-verifik-vivid-blue {\n  color: #2b3af0 !important;\n}\n.slider-section {\n  margin-bottom: 32px;\n}\n.slider-section .slider-title {\n  font-size: 20px;\n  font-weight: 600;\n  color: #111827;\n  text-align: center;\n  margin-bottom: 32px;\n}\n.selected-plan-card {\n  display: flex;\n  background: #ffffff;\n  border: 1px solid #e5e7eb;\n  border-radius: 20px;\n  overflow: hidden;\n  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);\n}\n@media (max-width: 768px) {\n  .selected-plan-card {\n    flex-direction: column;\n  }\n}\n.selected-plan-left {\n  position: relative;\n  flex: 1;\n  padding: 32px;\n  display: flex;\n  flex-direction: column;\n}\n.selected-plan-left .close-button {\n  position: absolute;\n  top: 16px;\n  left: 16px;\n  color: #6b7280;\n}\n.selected-plan-left .close-button:hover {\n  background: rgba(107, 114, 128, 0.1);\n}\n.selected-pricing {\n  text-align: center;\n  margin: 24px 0;\n}\n.selected-pricing .pricing-label {\n  font-size: 14px;\n  color: #6b7280;\n  margin-bottom: 8px;\n}\n.selected-pricing .pricing-amount {\n  font-size: 36px;\n  font-weight: 700;\n  color: #0f0f2d;\n}\n.selected-pricing .pricing-amount span {\n  font-size: 16px;\n  font-weight: 400;\n  color: #6b7280;\n}\n.selected-pricing .pricing-enrolls {\n  font-size: 16px;\n  font-weight: 600;\n  color: #2b3af0;\n  margin-top: 8px;\n}\n.selected-stats {\n  display: flex;\n  gap: 16px;\n  padding: 16px;\n  background: #f9fafb;\n  border-radius: 12px;\n  margin-bottom: 24px;\n}\n.selected-stats .stat-item {\n  flex: 1;\n  text-align: center;\n}\n.selected-stats .stat-item .stat-label {\n  display: block;\n  font-size: 11px;\n  color: #9ca3af;\n  text-transform: uppercase;\n  margin-bottom: 4px;\n}\n.selected-stats .stat-item .stat-value {\n  display: block;\n  font-size: 14px;\n  font-weight: 600;\n  color: #374151;\n}\n.selected-includes {\n  margin-bottom: 24px;\n}\n.selected-includes .includes-title {\n  font-size: 14px;\n  font-weight: 600;\n  color: #374151;\n  margin-bottom: 12px;\n}\n.selected-includes .includes-list {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.selected-includes .includes-list li {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 14px;\n  color: #6b7280;\n  padding: 8px 0;\n}\n.selected-includes .includes-list li mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: #2b3af0;\n}\n.purchase-button {\n  width: 100%;\n  border-radius: 50px;\n  padding: 16px;\n  font-weight: 600;\n  font-size: 15px;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease;\n  margin-top: auto;\n}\n.purchase-button.free {\n  background:\n    linear-gradient(\n      135deg,\n      #6b7280 0%,\n      #4b5563 100%);\n}\n.purchase-button.plus {\n  background:\n    linear-gradient(\n      135deg,\n      #2b3af0 0%,\n      #4f5af6 100%);\n}\n.purchase-button.business {\n  background:\n    linear-gradient(\n      135deg,\n      #0f0f2d 0%,\n      #1a1a4a 100%);\n}\n.purchase-button:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(43, 58, 240, 0.25);\n}\n.purchase-button:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.purchase-button mat-spinner {\n  margin-right: 8px;\n}\n.selected-plan-right {\n  flex: 1.2;\n  border-left: 1px solid #e5e7eb;\n  display: flex;\n  flex-direction: column;\n}\n@media (max-width: 768px) {\n  .selected-plan-right {\n    border-left: none;\n    border-top: 1px solid #e5e7eb;\n  }\n}\n.plan-image {\n  width: 100%;\n  height: 160px;\n  object-fit: cover;\n  background:\n    linear-gradient(\n      135deg,\n      #2b3af0 0%,\n      #0f0f2d 100%);\n}\n.plan-description {\n  padding: 24px;\n}\n.plan-description h3 {\n  font-size: 20px;\n  font-weight: 600;\n  color: #111827;\n  margin-bottom: 12px;\n}\n.plan-description p {\n  font-size: 14px;\n  color: #6b7280;\n  line-height: 1.6;\n}\n.features-table {\n  padding: 0 24px;\n  flex: 1;\n}\n.features-table .table-header {\n  display: flex;\n  justify-content: space-between;\n  padding: 12px 16px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(43, 58, 240, 0.08) 0%,\n      rgba(43, 58, 240, 0.12) 100%);\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 600;\n  color: #2b3af0;\n  margin-bottom: 8px;\n}\n.features-table .table-row {\n  display: flex;\n  justify-content: space-between;\n  padding: 12px 16px;\n  border-bottom: 1px solid #f3f4f6;\n  font-size: 14px;\n}\n.features-table .table-row span:first-child {\n  color: #374151;\n}\n.features-table .table-row .table-value {\n  font-weight: 600;\n  color: #2b3af0;\n}\n.plan-footer {\n  padding: 24px;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n}\n.plan-footer .pricing-link {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 20px;\n  background: #2b3af0;\n  color: white;\n  border-radius: 50px;\n  font-size: 13px;\n  font-weight: 500;\n  text-decoration: none;\n  transition: all 0.2s ease;\n}\n.plan-footer .pricing-link mat-icon {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.plan-footer .pricing-link:hover {\n  background: #0f0f2d;\n}\n.plan-footer .terms-text {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.plan-footer .terms-text a {\n  color: #6b7280;\n  text-decoration: none;\n}\n.plan-footer .terms-text a:hover {\n  text-decoration: underline;\n}\n.range-slider {\n  position: relative;\n  height: 30px;\n  margin: 40px 0;\n}\n.range-slider::before {\n  content: "";\n  position: absolute;\n  top: 9px;\n  left: 0;\n  height: 12px;\n  width: var(--track-fill-percentage, 0%);\n  background:\n    linear-gradient(\n      90deg,\n      #2b3af0 0%,\n      #4f5af6 100%);\n  border-radius: 6px;\n  transition: width 0.1s ease;\n  z-index: 0;\n}\n.range-slider__dots {\n  display: flex;\n  justify-content: space-between;\n  left: 0;\n  position: absolute;\n  top: 10px;\n  width: 100%;\n  z-index: -1;\n  padding: 0 15px;\n}\n.range-slider__dot {\n  position: relative;\n  background-color: #2b3af0;\n  border-radius: 50%;\n  display: block;\n  height: 10px;\n  width: 10px;\n}\n.range-slider__value {\n  position: absolute;\n  top: -36px;\n  left: 50%;\n  transform: translateX(-50%);\n  height: 20px;\n  white-space: nowrap;\n  font-size: 12px;\n  font-weight: 500;\n  color: #6b7280;\n}\n.range-slider__input {\n  appearance: none;\n  background-color: transparent;\n  height: 30px;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n}\n.range-slider__input:focus {\n  outline: none;\n}\n.range-slider__input::-webkit-slider-runnable-track {\n  background-color: #e5e7eb;\n  cursor: pointer;\n  height: 12px;\n  width: 100%;\n  border-radius: 6px;\n}\n.range-slider__input::-webkit-slider-thumb {\n  appearance: none;\n  background: #2b3af0;\n  border-radius: 50%;\n  border: 2px solid white;\n  box-shadow: 0 0 0 4px white, 0 2px 8px rgba(0, 0, 0, 0.15);\n  cursor: pointer;\n  height: 30px;\n  margin-top: -9px;\n  width: 30px;\n  z-index: 2;\n  position: relative;\n  transition: transform 0.1s ease;\n}\n.range-slider__input::-webkit-slider-thumb:hover {\n  transform: scale(1.1);\n}\n.range-slider__input::-moz-range-track {\n  width: 100%;\n  height: 12px;\n  cursor: pointer;\n  border-radius: 6px;\n  background-color: #e5e7eb;\n}\n.range-slider__input::-moz-range-thumb {\n  appearance: none;\n  background: #2b3af0;\n  border-radius: 50%;\n  border: 2px solid white;\n  box-shadow: 0 0 0 4px white, 0 2px 8px rgba(0, 0, 0, 0.15);\n  cursor: pointer;\n  height: 30px;\n  width: 30px;\n}\n.landing-slider-section {\n  background: rgba(43, 58, 240, 0.04);\n  border: 1px solid rgba(43, 58, 240, 0.08);\n  border-radius: 20px;\n  padding: 32px;\n  margin-bottom: 24px;\n  text-align: center;\n}\n@media (max-width: 640px) {\n  .landing-slider-section {\n    padding: 24px 16px;\n  }\n}\n.landing-slider-title {\n  font-size: 22px;\n  font-weight: 700;\n  color: #0f0f2d;\n  margin: 0 0 8px;\n}\n.landing-slider-subtitle {\n  font-size: 14px;\n  color: #6b7280;\n  margin: 0 0 28px;\n}\n.landing-slider-track {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 20px;\n}\n.landing-slider-track .track-label {\n  font-size: 13px;\n  font-weight: 600;\n  color: #6b7280;\n  white-space: nowrap;\n  min-width: 50px;\n}\n.landing-slider-track .track-label:first-child {\n  text-align: right;\n}\n.landing-slider-track .track-label:last-child {\n  text-align: left;\n}\n.landing-slider-track .track-slider {\n  flex: 1;\n  min-width: 0;\n}\n.landing-slider-track .track-slider .range-slider {\n  margin: 0;\n}\n.landing-slider-pill {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background:\n    linear-gradient(\n      135deg,\n      #2b3af0 0%,\n      #0f0f2d 100%);\n  color: white;\n  padding: 12px 24px;\n  border-radius: 50px;\n  font-size: 15px;\n  font-weight: 500;\n  box-shadow: 0 4px 16px rgba(43, 58, 240, 0.3);\n}\n.landing-slider-pill strong {\n  font-size: 20px;\n  font-weight: 700;\n}\n.volume-change-summary {\n  margin-top: 24px;\n  max-width: 28rem;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 20px 20px 18px;\n  border-radius: 16px;\n  background: #ffffff;\n  border: 1px solid rgba(15, 15, 45, 0.08);\n  box-shadow:\n    0 0 0 1px rgba(255, 255, 255, 0.8) inset,\n    0 1px 2px rgba(15, 15, 45, 0.04),\n    0 8px 24px rgba(15, 15, 45, 0.06);\n}\n.volume-change-summary__head {\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  margin-bottom: 18px;\n  text-align: left;\n}\n.volume-change-summary__head-icon {\n  flex-shrink: 0;\n  width: 40px;\n  height: 40px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      145deg,\n      rgba(99, 102, 241, 0.12) 0%,\n      rgba(43, 58, 240, 0.08) 100%);\n  border: 1px solid rgba(99, 102, 241, 0.2);\n}\n.volume-change-summary__head-icon mat-icon {\n  font-size: 22px;\n  width: 22px;\n  height: 22px;\n  color: #4338ca;\n}\n.volume-change-summary__head-text {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 0;\n}\n.volume-change-summary__eyebrow {\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  color: #6b7280;\n}\n.volume-change-summary__title {\n  font-size: 15px;\n  font-weight: 600;\n  color: #111827;\n  letter-spacing: -0.01em;\n  line-height: 1.35;\n}\n.volume-change-summary__compare {\n  display: grid;\n  grid-template-columns: 1fr auto 1fr;\n  gap: 10px;\n  align-items: stretch;\n}\n.volume-change-summary__panel {\n  padding: 14px 12px;\n  border-radius: 12px;\n  background: #f9fafb;\n  border: 1px solid rgba(15, 15, 45, 0.06);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  gap: 4px;\n  transition:\n    border-color 0.2s ease,\n    box-shadow 0.2s ease,\n    background 0.2s ease;\n}\n.volume-change-summary__panel--from {\n  background:\n    linear-gradient(\n      180deg,\n      #fafafa 0%,\n      #f3f4f6 100%);\n}\n.volume-change-summary__panel--to {\n  background:\n    linear-gradient(\n      180deg,\n      #fafbff 0%,\n      #f5f5ff 100%);\n  border-color: rgba(67, 56, 202, 0.12);\n}\n.volume-change-summary__panel--highlight {\n  border-color: rgba(43, 58, 240, 0.35);\n  box-shadow: 0 0 0 3px rgba(43, 58, 240, 0.12);\n  background:\n    linear-gradient(\n      180deg,\n      #f8f9ff 0%,\n      #eef2ff 100%);\n}\n.volume-change-summary__panel-label {\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: #6b7280;\n}\n.volume-change-summary__panel-value {\n  font-size: 28px;\n  font-weight: 700;\n  font-variant-numeric: tabular-nums;\n  letter-spacing: -0.03em;\n  color: #0f0f2d;\n  line-height: 1.1;\n}\n.volume-change-summary__panel-unit {\n  font-size: 12px;\n  font-weight: 500;\n  color: #9ca3af;\n}\n.volume-change-summary__mid {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 44px;\n  align-self: center;\n}\n.volume-change-summary__mid-icon {\n  width: 32px;\n  height: 32px;\n  border-radius: 999px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #ffffff;\n  border: 1px solid rgba(15, 15, 45, 0.1);\n  box-shadow: 0 2px 6px rgba(15, 15, 45, 0.06);\n}\n.volume-change-summary__mid-icon mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: #4338ca;\n}\n.volume-change-summary__hint {\n  margin: 14px 0 0;\n  padding-top: 12px;\n  border-top: 1px solid rgba(15, 15, 45, 0.06);\n  font-size: 13px;\n  line-height: 1.45;\n  color: #6b7280;\n  text-align: center;\n}\n@media (max-width: 480px) {\n  .volume-change-summary__compare {\n    grid-template-columns: 1fr;\n    gap: 12px;\n  }\n  .volume-change-summary__mid {\n    width: 100%;\n    min-width: 0;\n    padding: 4px 0;\n  }\n  .volume-change-summary__mid-icon mat-icon {\n    transform: rotate(90deg);\n  }\n}\n.checkout-card {\n  background: #ffffff;\n  border-radius: 24px;\n  border: 1px solid rgba(43, 58, 240, 0.12);\n  overflow: hidden;\n  box-shadow: 0 8px 40px rgba(15, 15, 45, 0.08);\n}\n.checkout-main {\n  padding: 0 32px 28px;\n}\n@media (max-width: 640px) {\n  .checkout-main {\n    padding: 0 24px 24px;\n  }\n}\n.checkout-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 24px 32px;\n  color: white;\n}\n.checkout-header.header-free {\n  background:\n    linear-gradient(\n      135deg,\n      #6b7280 0%,\n      #4b5563 100%);\n}\n.checkout-header.header-plus {\n  background:\n    linear-gradient(\n      135deg,\n      #2b3af0 0%,\n      #4f5af6 100%);\n}\n.checkout-header.header-business {\n  background:\n    linear-gradient(\n      135deg,\n      #0f0f2d 0%,\n      #1a1a4a 100%);\n}\n@media (max-width: 640px) {\n  .checkout-header {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 16px;\n    padding: 20px 24px;\n  }\n}\n.checkout-plan-info {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.checkout-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 16px;\n  border-radius: 50px;\n  font-size: 14px;\n  font-weight: 600;\n  width: fit-content;\n}\n.checkout-badge mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.checkout-badge.free {\n  background: rgba(255, 255, 255, 0.2);\n  color: white;\n}\n.checkout-badge.plus {\n  background: rgba(255, 255, 255, 0.2);\n  color: white;\n}\n.checkout-badge.business {\n  background: rgba(255, 255, 255, 0.15);\n  color: white;\n}\n.checkout-plan-type {\n  font-size: 13px;\n  color: rgba(255, 255, 255, 0.8);\n  padding-left: 4px;\n}\n.checkout-price {\n  display: flex;\n  align-items: baseline;\n  gap: 2px;\n}\n.checkout-price .price-from {\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.7);\n  margin-right: 8px;\n}\n.checkout-price .price-currency {\n  font-size: 24px;\n  font-weight: 600;\n}\n.checkout-price .price-value {\n  font-size: 42px;\n  font-weight: 700;\n  line-height: 1;\n  font-variant-numeric: tabular-nums;\n  letter-spacing: -0.025em;\n}\n.checkout-price .price-period {\n  font-size: 16px;\n  color: rgba(255, 255, 255, 0.8);\n  margin-left: 4px;\n}\n@media (max-width: 640px) {\n  .checkout-price .price-value {\n    font-size: 32px;\n  }\n}\n.checkout-stats {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  align-items: stretch;\n  padding: 22px 0;\n  background: rgba(43, 58, 240, 0.04);\n  border-bottom: 1px solid rgba(43, 58, 240, 0.08);\n}\n@media (max-width: 768px) {\n  .checkout-stats {\n    grid-template-columns: 1fr;\n    gap: 0;\n    padding: 20px 0;\n  }\n}\n.checkout-stats .stat-item {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  gap: 6px;\n  min-width: 0;\n  padding: 8px 12px;\n}\n@media (min-width: 769px) {\n  .checkout-stats .stat-item {\n    position: relative;\n  }\n  .checkout-stats .stat-item:not(:first-child)::before {\n    content: "";\n    position: absolute;\n    left: 0;\n    top: 50%;\n    transform: translateY(-50%);\n    width: 1px;\n    height: min(72%, 5rem);\n    background: rgba(43, 58, 240, 0.12);\n    pointer-events: none;\n  }\n}\n@media (max-width: 768px) {\n  .checkout-stats .stat-item {\n    padding: 12px 20px;\n  }\n  .checkout-stats .stat-item:not(:last-child) {\n    border-bottom: 1px solid rgba(43, 58, 240, 0.1);\n    padding-bottom: 16px;\n    margin-bottom: 4px;\n  }\n}\n.checkout-stats .stat-item mat-icon {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  color: #2b3af0;\n}\n.checkout-stats .stat-item .stat-value {\n  font-size: 18px;\n  font-weight: 700;\n  color: #0f0f2d;\n  font-variant-numeric: tabular-nums;\n  letter-spacing: -0.015em;\n  line-height: 1.2;\n  word-break: break-word;\n}\n.checkout-stats .stat-item .stat-label {\n  font-size: 11px;\n  color: #6b7280;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  line-height: 1.35;\n  max-width: 12rem;\n  margin: 0 auto;\n  hyphens: auto;\n  overflow-wrap: anywhere;\n}\n.checkout-features {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 0;\n  padding: 28px 0;\n  margin: 0;\n  border-bottom: 1px solid rgba(43, 58, 240, 0.08);\n}\n@media (max-width: 640px) {\n  .checkout-features {\n    grid-template-columns: 1fr;\n    padding: 24px 0;\n  }\n}\n.checkout-features .features-column {\n  min-width: 0;\n}\n.checkout-features .features-column:first-child {\n  padding-right: 28px;\n}\n@media (max-width: 640px) {\n  .checkout-features .features-column:first-child {\n    padding-right: 0;\n    padding-bottom: 20px;\n    margin-bottom: 8px;\n    border-bottom: 1px solid rgba(43, 58, 240, 0.08);\n  }\n}\n.checkout-features .features-column:last-child {\n  padding-left: 28px;\n  border-left: 1px solid rgba(43, 58, 240, 0.08);\n}\n@media (max-width: 640px) {\n  .checkout-features .features-column:last-child {\n    padding-left: 0;\n    border-left: none;\n  }\n}\n.checkout-features .features-column .features-title {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 14px;\n  font-weight: 650;\n  line-height: 1.35;\n  min-height: 40px;\n  margin: 0 0 10px;\n}\n.checkout-features .features-column .features-title mat-icon {\n  flex-shrink: 0;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 22px;\n  width: 22px;\n  height: 22px;\n  margin-top: 1px;\n}\n.checkout-features .features-column .features-title.included-title {\n  color: #2b3af0;\n}\n.checkout-features .features-column .features-title.included-title mat-icon {\n  color: #2b3af0;\n}\n.checkout-features .features-column .features-title.extra-title {\n  color: #0f0f2d;\n}\n.checkout-features .features-column .features-title.extra-title mat-icon {\n  color: #0f0f2d;\n  opacity: 0.92;\n}\n.checkout-features .features-column .features-list {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.checkout-features .features-column .features-list li {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) minmax(5.75rem, auto);\n  column-gap: 12px;\n  align-items: center;\n  justify-items: stretch;\n  min-height: 44px;\n  padding: 10px 0;\n  margin: 0;\n  font-size: 14px;\n  color: #6b7280;\n  border-bottom: 1px solid rgba(107, 114, 128, 0.12);\n}\n.checkout-features .features-column .features-list li:last-child {\n  border-bottom: none;\n  padding-bottom: 0;\n}\n.checkout-features .features-column .features-list li:first-child {\n  padding-top: 0;\n}\n.checkout-features .features-column .features-list li span:first-child {\n  min-width: 0;\n}\n.checkout-features .features-column .features-list.included .feature-count {\n  font-weight: 600;\n  color: #2b3af0;\n  font-variant-numeric: tabular-nums;\n  justify-self: end;\n  text-align: right;\n}\n.checkout-features .features-column .features-list.included .feature-check {\n  font-size: 20px !important;\n  width: 20px !important;\n  height: 20px !important;\n  color: #2b3af0;\n  justify-self: end;\n}\n.checkout-features .features-column .features-list.extra .feature-price {\n  font-size: 12px;\n  font-weight: 600;\n  color: #0f0f2d;\n  justify-self: end;\n  text-align: right;\n  font-variant-numeric: tabular-nums;\n}\n.checkout-features .features-column .features-list.extra .feature-col-value {\n  justify-self: end;\n  min-height: 1em;\n  min-width: 5.75rem;\n  visibility: hidden;\n}\n.checkout-features .features-column .features-list.extra .extras-link {\n  font-size: 12px;\n  color: #2b3af0;\n  text-decoration: none;\n  font-weight: 500;\n}\n.checkout-features .features-column .features-list.extra .extras-link:hover {\n  text-decoration: underline;\n}\n.extra-bio-notice {\n  margin: 0 0 20px;\n  border: 1px solid rgba(43, 58, 240, 0.15);\n  border-radius: 12px;\n  overflow: hidden;\n}\n@media (max-width: 640px) {\n  .extra-bio-notice {\n    margin-bottom: 18px;\n  }\n}\n.extra-bio-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 14px 16px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(43, 58, 240, 0.06) 0%,\n      rgba(79, 90, 246, 0.08) 100%);\n  cursor: pointer;\n  transition: background 0.2s ease;\n}\n.extra-bio-header:hover {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(43, 58, 240, 0.1) 0%,\n      rgba(79, 90, 246, 0.12) 100%);\n}\n.extra-bio-header .extra-bio-left {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.extra-bio-header .extra-bio-left .info-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: #2b3af0;\n}\n.extra-bio-header .extra-bio-left span {\n  font-size: 14px;\n  font-weight: 500;\n  color: #0f0f2d;\n}\n.extra-bio-header .expand-icon {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  color: #6b7280;\n  transition: transform 0.3s ease;\n}\n.extra-bio-header .expand-icon.expanded {\n  transform: rotate(180deg);\n}\n.extra-bio-body {\n  padding: 16px;\n  background: white;\n  animation: slideDown 0.3s ease-out;\n}\n.extra-bio-body p {\n  font-size: 13px;\n  color: #6b7280;\n  line-height: 1.6;\n  margin: 0 0 16px;\n}\n.extra-bio-body .extra-bio-costs {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.extra-bio-body .extra-bio-costs .bio-cost-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 14px;\n  background: rgba(43, 58, 240, 0.04);\n  border-radius: 8px;\n  font-size: 13px;\n}\n.extra-bio-body .extra-bio-costs .bio-cost-item span {\n  color: #6b7280;\n}\n.extra-bio-body .extra-bio-costs .bio-cost-item strong {\n  color: #0f0f2d;\n  font-weight: 600;\n}\n@keyframes slideDown {\n  from {\n    opacity: 0;\n    max-height: 0;\n  }\n  to {\n    opacity: 1;\n    max-height: 300px;\n  }\n}\n.checkout-action {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 14px;\n  padding: 12px 0 8px;\n}\n.checkout-action .activate-btn {\n  flex-shrink: 0;\n}\n.checkout-button {\n  width: 100%;\n  max-width: 400px;\n  border-radius: 50px !important;\n  padding: 16px 32px !important;\n  font-size: 16px !important;\n  font-weight: 600 !important;\n  color: white !important;\n  display: inline-flex !important;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  transition: all 0.2s ease;\n  border: none !important;\n}\n.checkout-button.free {\n  background:\n    linear-gradient(\n      135deg,\n      #6b7280 0%,\n      #4b5563 100%) !important;\n}\n.checkout-button.plus {\n  background:\n    linear-gradient(\n      135deg,\n      #2b3af0 0%,\n      #4f5af6 100%) !important;\n  box-shadow: 0 4px 20px rgba(43, 58, 240, 0.35);\n}\n.checkout-button.business {\n  background:\n    linear-gradient(\n      135deg,\n      #0f0f2d 0%,\n      #1a1a4a 100%) !important;\n  box-shadow: 0 4px 20px rgba(15, 15, 45, 0.35);\n}\n.checkout-button:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 28px rgba(43, 58, 240, 0.4);\n}\n.checkout-button:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.checkout-button mat-spinner {\n  margin-right: 8px;\n}\n.checkout-terms {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  margin: 0;\n  padding-top: 20px;\n  border-top: 1px solid rgba(43, 58, 240, 0.08);\n  font-size: 12px;\n  line-height: 1.55;\n  color: #6b7280;\n  text-align: left;\n}\n.checkout-terms > mat-icon {\n  flex-shrink: 0;\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n  margin-top: 3px;\n  color: rgba(107, 114, 128, 0.88);\n}\n.checkout-terms > span {\n  flex: 1;\n  min-width: 0;\n}\n.checkout-terms a {\n  color: #2b3af0;\n  text-decoration: none;\n  font-weight: 500;\n}\n.checkout-terms a:hover {\n  text-decoration: underline;\n}\n@keyframes pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.5;\n  }\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.animate-fadeIn {\n  animation: fadeIn 0.4s ease-out forwards;\n  opacity: 0;\n}\n.plan-type-grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 24px;\n}\n@media (max-width: 768px) {\n  .plan-type-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.plan-type-card {\n  background: white;\n  border: 2px solid #e5e7eb;\n  border-radius: 20px;\n  padding: 24px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n}\n.plan-type-card:hover {\n  border-color: #2b3af0;\n  box-shadow: 0 8px 25px rgba(43, 58, 240, 0.15);\n  transform: translateY(-4px);\n}\n.plan-type-card.selected {\n  border-color: #2b3af0;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(43, 58, 240, 0.04) 0%,\n      #ffffff 100%);\n  box-shadow: 0 8px 25px rgba(43, 58, 240, 0.2);\n}\n.plan-type-card .plan-type-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  margin-bottom: 16px;\n}\n.plan-type-card .plan-type-icon {\n  width: 48px;\n  height: 48px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.plan-type-card .plan-type-icon mat-icon {\n  font-size: 24px;\n  width: 24px;\n  height: 24px;\n}\n.plan-type-card .plan-type-icon.users {\n  background: rgba(43, 58, 240, 0.1);\n  color: #2b3af0;\n}\n.plan-type-card .plan-type-icon.session {\n  background:\n    linear-gradient(\n      135deg,\n      #d1fae5 0%,\n      #a7f3d0 100%);\n  color: #10b981;\n}\n.plan-type-card .plan-type-check {\n  color: #2b3af0;\n}\n.plan-type-card .plan-type-check mat-icon {\n  font-size: 28px;\n  width: 28px;\n  height: 28px;\n}\n.plan-type-card .plan-type-title {\n  font-size: 18px;\n  font-weight: 600;\n  color: #111827;\n  margin-bottom: 16px;\n}\n.plan-type-card .plan-type-image {\n  max-width: 280px;\n  margin-bottom: 16px;\n}\n.plan-type-card .plan-type-image img {\n  width: 100%;\n  height: auto;\n}\n.plan-type-card .plan-type-description {\n  font-size: 14px;\n  color: #6b7280;\n  line-height: 1.5;\n}\n.continue-btn {\n  background: #2b3af0 !important;\n  color: #ffffff !important;\n  padding: 14px 48px;\n  border-radius: 50px !important;\n  font-weight: 700;\n  font-size: 16px;\n  display: inline-flex !important;\n  align-items: center;\n  gap: 8px;\n  transition: all 0.3s ease;\n  letter-spacing: 0.3px;\n}\n.continue-btn mat-icon {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  color: #ffffff !important;\n}\n.continue-btn:hover {\n  box-shadow: 0 8px 25px rgba(43, 58, 240, 0.4);\n  transform: translateY(-2px);\n}\n.toggle-container {\n  display: flex;\n  justify-content: center;\n}\n.toggle-group {\n  display: inline-flex;\n  background: rgba(15, 15, 45, 0.04);\n  border: 1px solid rgba(15, 15, 45, 0.06);\n  border-radius: 12px;\n  padding: 4px;\n  gap: 4px;\n}\n.toggle-button {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 20px;\n  border-radius: 10px;\n  border: none;\n  background: transparent;\n  font-size: 14px;\n  font-weight: 600;\n  color: #6b7280;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  letter-spacing: -0.01em;\n}\n.toggle-button mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.toggle-button:hover:not(.active) {\n  background: rgba(43, 58, 240, 0.06);\n  color: #2b3af0;\n}\n.toggle-button.active {\n  background: #2b3af0;\n  color: white;\n  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.04), 0 2px 8px rgba(43, 58, 240, 0.25);\n}\n.info-banner {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: rgba(43, 58, 240, 0.06);\n  border: 1px solid rgba(43, 58, 240, 0.12);\n  border-radius: 12px;\n  padding: 14px 18px;\n}\n.info-banner mat-icon {\n  color: #2b3af0;\n  flex-shrink: 0;\n}\n.info-banner span {\n  font-size: 14px;\n  color: #0f0f2d;\n  line-height: 1.55;\n}\n.info-banner span strong {\n  font-weight: 600;\n}\n.select-plans-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 24px;\n  margin-bottom: 48px;\n  align-items: stretch;\n}\n@media (min-width: 1024px) {\n  .select-plans-grid .select-plan-card {\n    min-height: 540px;\n  }\n}\n.select-plans-grid .select-plan-card.enterprise .select-plan-features {\n  min-height: 200px;\n}\n.select-plan-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border-radius: 20px;\n  font-size: 13px;\n  font-weight: 600;\n  margin-bottom: 20px;\n  align-self: flex-start;\n}\n.select-plan-badge mat-icon {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.select-plan-badge.free {\n  background: #f3f4f6;\n  color: #6b7280;\n}\n.select-plan-badge.plus {\n  background:\n    linear-gradient(\n      135deg,\n      #eef2ff 0%,\n      #e0e7ff 100%);\n  color: #6366f1;\n}\n.select-plan-badge.business {\n  background: rgba(43, 58, 240, 0.1);\n  color: #2b3af0;\n}\n.select-plan-badge.enterprise {\n  background:\n    linear-gradient(\n      135deg,\n      #374151 0%,\n      #1f2937 100%);\n  color: white;\n}\n.select-plan-price {\n  margin-bottom: 20px;\n}\n.select-plan-price .price-label {\n  display: block;\n  font-size: 12px;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 4px;\n}\n.select-plan-price .price-amount {\n  display: flex;\n  align-items: baseline;\n  margin-bottom: 4px;\n}\n.select-plan-price .price-amount .currency {\n  font-size: 20px;\n  font-weight: 600;\n  color: #374151;\n  margin-right: 2px;\n}\n.select-plan-price .price-amount .value {\n  font-size: 40px;\n  font-weight: 700;\n  color: #111827;\n  font-variant-numeric: tabular-nums;\n  letter-spacing: -0.025em;\n}\n.select-plan-price .price-amount .period {\n  font-size: 16px;\n  color: #6b7280;\n  margin-left: 4px;\n}\n.select-plan-price .price-contact {\n  display: block;\n  font-size: 24px;\n  font-weight: 600;\n  color: #374151;\n  margin-bottom: 8px;\n}\n.select-plan-price .price-sessions {\n  display: block;\n  font-size: 13px;\n  color: #6b7280;\n}\n.select-plan-details {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n  padding: 16px 0;\n  border-top: 1px solid #e5e7eb;\n  border-bottom: 1px solid #e5e7eb;\n  margin-bottom: 20px;\n}\n.select-plan-details .detail-item {\n  text-align: center;\n}\n.select-plan-details .detail-item .detail-label {\n  display: block;\n  font-size: 11px;\n  color: #9ca3af;\n  text-transform: uppercase;\n  margin-bottom: 4px;\n}\n.select-plan-details .detail-item .detail-value {\n  display: block;\n  font-size: 14px;\n  font-weight: 600;\n  color: #374151;\n}\n.select-plan-features {\n  flex: 1 1 auto;\n  margin-bottom: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.select-plan-features .feature-category {\n  margin-bottom: 16px;\n}\n.select-plan-features .feature-category .category-title {\n  display: block;\n  font-size: 11px;\n  font-weight: 600;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 8px;\n}\n.select-plan-features .feature-row {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 6px 0;\n  font-size: 13px;\n  color: #374151;\n}\n.select-plan-features .feature-row .feature-check {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: #10b981;\n}\n.select-plan-features .feature-row .feature-add {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: #2b3af0;\n}\n.select-plan-button {\n  width: 100%;\n  padding: 14px;\n  border-radius: 50px;\n  font-weight: 600;\n  font-size: 14px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  transition: all 0.3s ease;\n  margin-top: auto;\n}\n.select-plan-button.free {\n  background: #6b7280;\n  color: white;\n}\n.select-plan-button.free:hover {\n  background: #4b5563;\n}\n.select-plan-button.plus {\n  background: #2b3af0;\n  color: white;\n}\n.select-plan-button.plus:hover {\n  box-shadow: 0 4px 14px rgba(43, 58, 240, 0.4);\n}\n.select-plan-button.business {\n  background: #0f0f2d;\n  color: white;\n}\n.select-plan-button.business:hover {\n  box-shadow: 0 4px 14px rgba(15, 15, 45, 0.4);\n}\n.select-plan-button.enterprise {\n  background:\n    linear-gradient(\n      135deg,\n      #374151 0%,\n      #1f2937 100%);\n  color: white;\n}\n.select-plan-button.enterprise:hover {\n  box-shadow: 0 4px 14px rgba(31, 41, 55, 0.4);\n}\n.current-plan-indicator {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 14px;\n  background: #f0fdf4;\n  border: 1px solid #86efac;\n  border-radius: 50px;\n  color: #16a34a;\n  font-weight: 600;\n  font-size: 14px;\n}\n.current-plan-indicator mat-icon {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.free-trial-section {\n  background:\n    linear-gradient(\n      135deg,\n      #f8fafc 0%,\n      #f1f5f9 100%);\n  border: 1px solid #e2e8f0;\n  border-radius: 20px;\n  padding: 32px;\n  margin-bottom: 32px;\n}\n.free-trial-section .free-trial-header {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 16px;\n}\n.free-trial-section .free-trial-header mat-icon {\n  font-size: 28px;\n  width: 28px;\n  height: 28px;\n  color: #64748b;\n}\n.free-trial-section .free-trial-header h3 {\n  font-size: 20px;\n  font-weight: 600;\n  color: #1e293b;\n  margin: 0;\n}\n.free-trial-section .free-trial-text {\n  font-size: 14px;\n  color: #64748b;\n  line-height: 1.6;\n  margin-bottom: 24px;\n}\n.free-trial-section .free-trial-text strong {\n  color: #2b3af0;\n}\n.free-trial-section .free-plan-card {\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 16px;\n  padding: 24px;\n}\n.free-trial-section .free-plan-header {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n}\n@media (max-width: 640px) {\n  .free-trial-section .free-plan-header {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\n.free-trial-section .free-plan-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 16px;\n  background: rgba(43, 58, 240, 0.1);\n  border-radius: 20px;\n  font-weight: 600;\n  font-size: 14px;\n  color: #2b3af0;\n}\n.free-trial-section .free-plan-badge mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.free-trial-section .free-plan-offer {\n  display: flex;\n  flex-direction: column;\n}\n.free-trial-section .free-plan-offer .offer-title {\n  font-size: 16px;\n  font-weight: 600;\n  color: #1f2937;\n}\n.free-trial-section .free-plan-offer .offer-text {\n  font-size: 14px;\n  color: #6b7280;\n}\n.free-trial-section .free-plan-features {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  gap: 12px;\n  padding: 20px 0;\n  border-top: 1px solid #e5e7eb;\n  border-bottom: 1px solid #e5e7eb;\n  margin-bottom: 20px;\n  align-items: center;\n}\n@media (max-width: 768px) {\n  .free-trial-section .free-plan-features {\n    grid-template-columns: 1fr;\n  }\n}\n.free-trial-section .free-plan-features .feature-column {\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  grid-column: span 1;\n}\n.free-trial-section .free-plan-features .feature-column .feature-label {\n  font-size: 11px;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 4px;\n}\n.free-trial-section .free-plan-features .feature-column .feature-value {\n  font-size: 13px;\n  font-weight: 500;\n  color: #374151;\n}\n.free-trial-section .free-plan-features .feature-divider {\n  width: 1px;\n  height: 100%;\n  background: #e5e7eb;\n  justify-self: center;\n}\n@media (max-width: 768px) {\n  .free-trial-section .free-plan-features .feature-divider {\n    display: none;\n  }\n}\n.free-trial-section .free-plan-button {\n  width: 100%;\n  padding: 14px;\n  border-radius: 50px;\n  font-weight: 600;\n  font-size: 14px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  border: 2px solid #2b3af0;\n  color: #2b3af0;\n  transition: all 0.3s ease;\n}\n.free-trial-section .free-plan-button:hover {\n  background: #2b3af0;\n  color: white;\n}\n.free-trial-section .free-plan-button mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.activate-btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 16px 56px !important;\n  border-radius: 50px !important;\n  font-weight: 700;\n  font-size: 16px;\n  color: white !important;\n  background: #2b3af0 !important;\n  transition: all 0.3s ease;\n  letter-spacing: 0.3px;\n}\n.activate-btn mat-icon {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  color: white !important;\n}\n.activate-btn .mdc-button__label {\n  color: white !important;\n}\n.activate-btn:hover:not(:disabled) {\n  box-shadow: 0 8px 25px rgba(43, 58, 240, 0.35);\n  transform: translateY(-2px);\n}\n.activate-btn:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.activate-btn.plan-plus {\n  background: #2b3af0 !important;\n}\n.activate-btn.plan-business {\n  background: #0f0f2d !important;\n}\n.activate-btn.plan-enterprise {\n  background:\n    linear-gradient(\n      135deg,\n      #f59e0b 0%,\n      #d97706 100%) !important;\n}\n.activate-btn.plan-free {\n  background: #6b7280 !important;\n}\n:host ::ng-deep .landing-slider-track .brand-slider {\n  width: 100%;\n}\n:host ::ng-deep .landing-slider-track .brand-slider .mdc-slider__track--inactive {\n  background-color: #e5e7eb !important;\n}\n:host ::ng-deep .landing-slider-track .brand-slider .mdc-slider__track--active_fill {\n  border-color: #2b3af0 !important;\n  background-color: #2b3af0 !important;\n}\n:host ::ng-deep .landing-slider-track .brand-slider .mdc-slider__thumb-knob {\n  background-color: #2b3af0 !important;\n  border-color: #2b3af0 !important;\n  box-shadow: 0 2px 10px rgba(43, 58, 240, 0.35);\n}\n:host ::ng-deep .landing-slider-track .brand-slider .mdc-slider__value-indicator {\n  background-color: #0f0f2d !important;\n  color: white !important;\n}\n:host-context(.dark) .plans-container {\n  background:\n    linear-gradient(\n      180deg,\n      #0b0b18 0%,\n      #0f0f1f 100%);\n}\n:host-context(.dark) .crumb {\n  color: #94a3b8;\n}\n:host-context(.dark) .crumb .crumb-link {\n  color: #cbd5f5;\n}\n:host-context(.dark) .crumb .crumb-sep {\n  color: rgba(255, 255, 255, 0.18);\n}\n:host-context(.dark) .crumb .crumb-here {\n  color: #cbd5f5;\n}\n:host-context(.dark) .current-plan-title,\n:host-context(.dark) .current-plan-header .current-plan-title {\n  color: #f8fafc;\n}\n:host-context(.dark) .current-plan-subtitle,\n:host-context(.dark) .current-plan-header .current-plan-subtitle {\n  color: #94a3b8;\n}\n:host-context(.dark) .plan-card,\n:host-context(.dark) .select-plan-card,\n:host-context(.dark) .checkout-card,\n:host-context(.dark) .free-trial-section,\n:host-context(.dark) .plan-type-card {\n  background: #11122a;\n  border-color: rgba(255, 255, 255, 0.08);\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4), 0 12px 32px rgba(0, 0, 0, 0.35);\n}\n:host-context(.dark) .plan-card:hover,\n:host-context(.dark) .select-plan-card:hover,\n:host-context(.dark) .checkout-card:hover,\n:host-context(.dark) .free-trial-section:hover,\n:host-context(.dark) .plan-type-card:hover {\n  border-color: rgba(43, 58, 240, 0.35);\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.45), 0 16px 40px rgba(0, 0, 0, 0.45);\n}\n:host-context(.dark) .free-trial-section .free-plan-card {\n  background: rgba(255, 255, 255, 0.03);\n  border-color: rgba(255, 255, 255, 0.08);\n}\n:host-context(.dark) .plan-type-card.selected {\n  background:\n    linear-gradient(\n      180deg,\n      rgba(43, 58, 240, 0.18) 0%,\n      #11122a 100%);\n  border-color: #2b3af0;\n  box-shadow: 0 8px 25px rgba(43, 58, 240, 0.25);\n}\n:host-context(.dark) .plan-type-card .plan-type-title {\n  color: #f8fafc;\n}\n:host-context(.dark) .plan-type-card .plan-type-description {\n  color: #94a3b8;\n}\n:host-context(.dark) .price-section,\n:host-context(.dark) .payment-method,\n:host-context(.dark) .payment-method-card,\n:host-context(.dark) .optional-section,\n:host-context(.dark) .checkout-stats,\n:host-context(.dark) .info-banner,\n:host-context(.dark) .toggle-group,\n:host-context(.dark) .extra-bio-header,\n:host-context(.dark) .selected-stats,\n:host-context(.dark) .features-table .table-header {\n  background: rgba(255, 255, 255, 0.04);\n  border-color: rgba(255, 255, 255, 0.08);\n}\n:host-context(.dark) .info-banner {\n  background: rgba(43, 58, 240, 0.12);\n  border-color: rgba(79, 90, 246, 0.25);\n}\n:host-context(.dark) .info-banner span {\n  color: #cbd5f5;\n}\n:host-context(.dark) .landing-slider-section {\n  background: rgba(43, 58, 240, 0.08);\n  border-color: rgba(79, 90, 246, 0.18);\n}\n:host-context(.dark) .landing-slider-title {\n  color: #f8fafc;\n}\n:host-context(.dark) .landing-slider-subtitle {\n  color: #94a3b8;\n}\n:host-context(.dark) .landing-slider-track .track-label {\n  color: #94a3b8;\n}\n:host-context(.dark) .landing-slider-pill {\n  background: #2b3af0;\n  color: white;\n  box-shadow: 0 4px 16px rgba(43, 58, 240, 0.45);\n}\n:host-context(.dark) .card-header {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.04) 0%,\n      rgba(255, 255, 255, 0.02) 100%);\n  border-bottom-color: rgba(255, 255, 255, 0.08);\n}\n:host-context(.dark) .card-header h2,\n:host-context(.dark) .card-header .text-lg,\n:host-context(.dark) .card-header .text-gray-900 {\n  color: #f8fafc !important;\n}\n:host-context(.dark) .card-header .text-gray-500,\n:host-context(.dark) .card-header .text-xs.text-gray-500 {\n  color: #94a3b8 !important;\n}\n:host-context(.dark) .price-label,\n:host-context(.dark) .feature-label,\n:host-context(.dark) .optional-label,\n:host-context(.dark) .optional-value,\n:host-context(.dark) .price-period,\n:host-context(.dark) .card-expiry,\n:host-context(.dark) .price-from,\n:host-context(.dark) .checkout-plan-type,\n:host-context(.dark) .price-sessions,\n:host-context(.dark) .stat-label,\n:host-context(.dark) .stat-item .stat-label,\n:host-context(.dark) .feature-row span,\n:host-context(.dark) .features-list li {\n  color: #94a3b8;\n}\n:host-context(.dark) .price-amount,\n:host-context(.dark) .price-amount .price-currency,\n:host-context(.dark) .feature-value,\n:host-context(.dark) .card-number,\n:host-context(.dark) .stat-value,\n:host-context(.dark) .stat-item .stat-value,\n:host-context(.dark) .price-value,\n:host-context(.dark) .checkout-price .price-currency,\n:host-context(.dark) .checkout-price .price-value,\n:host-context(.dark) .checkout-price .price-period,\n:host-context(.dark) .price-amount .value,\n:host-context(.dark) .price-amount .currency,\n:host-context(.dark) .detail-value {\n  color: #f8fafc;\n}\n:host-context(.dark) .price-amount .period {\n  color: #94a3b8;\n}\n:host-context(.dark) .features-list li {\n  border-bottom-color: rgba(255, 255, 255, 0.06);\n}\n:host-context(.dark) .features-list li .feature-count {\n  color: #4f5af6;\n}\n:host-context(.dark) .features-list li .feature-price {\n  color: #cbd5f5;\n}\n:host-context(.dark) .features-list li .feature-check {\n  color: #34d399;\n}\n:host-context(.dark) .features-list li .extras-link {\n  color: #4f5af6;\n}\n:host-context(.dark) .features-column .features-title.included-title,\n:host-context(.dark) .features-column .features-title.included-title mat-icon {\n  color: #4f5af6;\n}\n:host-context(.dark) .features-column .features-title.extra-title,\n:host-context(.dark) .features-column .features-title.extra-title mat-icon {\n  color: #f8fafc;\n}\n:host-context(.dark) .feature-status {\n  color: rgba(255, 255, 255, 0.18);\n}\n:host-context(.dark) .feature-status.active {\n  color: #4f5af6;\n}\n:host-context(.dark) .feature-card {\n  background: rgba(255, 255, 255, 0.04);\n  border-color: rgba(255, 255, 255, 0.08);\n}\n:host-context(.dark) .feature-content .feature-label {\n  color: #94a3b8;\n}\n:host-context(.dark) .feature-content .feature-value {\n  color: #f8fafc;\n}\n:host-context(.dark) .optional-section .optional-title {\n  color: #f8fafc;\n}\n:host-context(.dark) .optional-section .optional-subtitle {\n  color: #94a3b8;\n}\n:host-context(.dark) .optional-card {\n  background: rgba(255, 255, 255, 0.03);\n  border-color: rgba(255, 255, 255, 0.08);\n}\n:host-context(.dark) .optional-card .optional-label {\n  color: #cbd5f5;\n}\n:host-context(.dark) .optional-card .optional-value {\n  color: #94a3b8;\n}\n:host-context(.dark) .optional-card .optional-link {\n  color: #4f5af6;\n}\n:host-context(.dark) .optional-card .optional-link:hover {\n  color: white;\n}\n:host-context(.dark) .select-plan-card .select-plan-price .price-label,\n:host-context(.dark) .select-plan-card .select-plan-price .price-sessions {\n  color: #94a3b8;\n}\n:host-context(.dark) .select-plan-card .select-plan-price .price-amount .value,\n:host-context(.dark) .select-plan-card .select-plan-price .price-amount .currency {\n  color: #f8fafc;\n}\n:host-context(.dark) .select-plan-card .select-plan-price .price-contact {\n  color: #f8fafc;\n}\n:host-context(.dark) .select-plan-card .select-plan-details {\n  border-top-color: rgba(255, 255, 255, 0.06);\n  border-bottom-color: rgba(255, 255, 255, 0.06);\n}\n:host-context(.dark) .select-plan-card .select-plan-details .detail-label {\n  color: #94a3b8;\n}\n:host-context(.dark) .select-plan-card .select-plan-details .detail-value {\n  color: #f8fafc;\n}\n:host-context(.dark) .select-plan-card .select-plan-features .feature-category .category-title {\n  color: #94a3b8;\n}\n:host-context(.dark) .select-plan-card .select-plan-features .feature-row {\n  color: #cbd5f5;\n}\n:host-context(.dark) .select-plan-badge.free {\n  background: rgba(148, 163, 184, 0.16);\n  color: #cbd5e1;\n}\n:host-context(.dark) .select-plan-badge.plus {\n  background: rgba(79, 90, 246, 0.18);\n  color: #4f5af6;\n}\n:host-context(.dark) .select-plan-badge.business {\n  background: rgba(79, 90, 246, 0.22);\n  color: white;\n}\n:host-context(.dark) .select-plan-badge.enterprise {\n  background:\n    linear-gradient(\n      135deg,\n      #1f2937 0%,\n      #0b0b18 100%);\n  color: white;\n}\n:host-context(.dark) .toggle-group {\n  background: rgba(255, 255, 255, 0.04);\n  border-color: rgba(255, 255, 255, 0.08);\n}\n:host-context(.dark) .toggle-button {\n  color: #cbd5f5;\n}\n:host-context(.dark) .toggle-button:hover:not(.active) {\n  background: rgba(43, 58, 240, 0.18);\n  color: white;\n}\n:host-context(.dark) .toggle-button.active {\n  background: #2b3af0;\n  color: white;\n  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.4), 0 2px 8px rgba(43, 58, 240, 0.35);\n}\n:host-context(.dark) .checkout-card {\n  border-color: rgba(79, 90, 246, 0.18);\n}\n:host-context(.dark) .checkout-stats {\n  background: rgba(43, 58, 240, 0.08);\n  border-bottom-color: rgba(79, 90, 246, 0.18);\n}\n:host-context(.dark) .checkout-stats .stat-item:not(:first-child)::before {\n  background: rgba(255, 255, 255, 0.12);\n}\n@media (max-width: 768px) {\n  :host-context(.dark) .checkout-stats .stat-item:not(:last-child) {\n    border-bottom-color: rgba(255, 255, 255, 0.08);\n  }\n}\n:host-context(.dark) .checkout-features {\n  border-bottom-color: rgba(79, 90, 246, 0.18);\n}\n:host-context(.dark) .checkout-features .features-column:last-child {\n  border-left-color: rgba(79, 90, 246, 0.18);\n}\n@media (max-width: 640px) {\n  :host-context(.dark) .checkout-features .features-column:last-child {\n    border-left: none;\n  }\n}\n@media (max-width: 640px) {\n  :host-context(.dark) .checkout-features .features-column:first-child {\n    border-bottom-color: rgba(79, 90, 246, 0.18);\n  }\n}\n:host-context(.dark) .extra-bio-notice {\n  border-color: rgba(79, 90, 246, 0.2);\n}\n:host-context(.dark) .extra-bio-header {\n  background: rgba(43, 58, 240, 0.12);\n}\n:host-context(.dark) .extra-bio-header:hover {\n  background: rgba(43, 58, 240, 0.18);\n}\n:host-context(.dark) .extra-bio-header .extra-bio-left span {\n  color: #f8fafc;\n}\n:host-context(.dark) .extra-bio-body {\n  background: rgba(255, 255, 255, 0.02);\n}\n:host-context(.dark) .extra-bio-body p {\n  color: #94a3b8;\n}\n:host-context(.dark) .extra-bio-body .extra-bio-costs .bio-cost-item {\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid rgba(79, 90, 246, 0.15);\n}\n:host-context(.dark) .extra-bio-body .extra-bio-costs .bio-cost-item span {\n  color: #cbd5f5;\n}\n:host-context(.dark) .extra-bio-body .extra-bio-costs .bio-cost-item strong {\n  color: #f8fafc;\n  font-weight: 650;\n  font-variant-numeric: tabular-nums;\n}\n:host-context(.dark) .extra-bio-body .extra-bio-costs .bio-cost-item .extras-link {\n  color: #4f5af6;\n}\n:host-context(.dark) .checkout-terms {\n  background: transparent;\n  border-top-color: rgba(79, 90, 246, 0.22);\n  color: #94a3b8;\n}\n:host-context(.dark) .checkout-terms > mat-icon {\n  color: #94a3b8;\n}\n:host-context(.dark) .checkout-terms a {\n  color: #4f5af6;\n}\n:host-context(.dark) .checkout-terms > span {\n  color: #94a3b8;\n}\n:host-context(.dark) .checkout-terms > span a {\n  color: #4f5af6;\n}\n:host-context(.dark) .free-trial-section {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.03) 0%,\n      rgba(255, 255, 255, 0.02) 100%);\n  border-color: rgba(255, 255, 255, 0.08);\n}\n:host-context(.dark) .free-trial-section .free-trial-header mat-icon {\n  color: #94a3b8;\n}\n:host-context(.dark) .free-trial-section .free-trial-header h3 {\n  color: #f8fafc;\n}\n:host-context(.dark) .free-trial-section .free-trial-text {\n  color: #94a3b8;\n}\n:host-context(.dark) .free-trial-section .free-trial-text strong {\n  color: #4f5af6;\n}\n:host-context(.dark) .free-trial-section .free-plan-card {\n  background: rgba(255, 255, 255, 0.03);\n  border-color: rgba(255, 255, 255, 0.08);\n}\n:host-context(.dark) .free-trial-section .free-plan-badge {\n  background: rgba(43, 58, 240, 0.2);\n  color: #4f5af6;\n}\n:host-context(.dark) .free-trial-section .free-plan-offer .offer-title {\n  color: #f8fafc;\n}\n:host-context(.dark) .free-trial-section .free-plan-offer .offer-text {\n  color: #94a3b8;\n}\n:host-context(.dark) .free-trial-section .free-plan-features {\n  border-top-color: rgba(255, 255, 255, 0.06);\n  border-bottom-color: rgba(255, 255, 255, 0.06);\n}\n:host-context(.dark) .free-trial-section .free-plan-features .feature-column .feature-label {\n  color: #94a3b8;\n}\n:host-context(.dark) .free-trial-section .free-plan-features .feature-column .feature-value {\n  color: #cbd5f5;\n}\n:host-context(.dark) .free-trial-section .free-plan-features .feature-divider {\n  background: rgba(255, 255, 255, 0.06);\n}\n:host-context(.dark) .free-trial-section .free-plan-button {\n  border-color: #4f5af6;\n  color: #4f5af6;\n}\n:host-context(.dark) .free-trial-section .free-plan-button:hover {\n  background: #2b3af0;\n  color: white;\n}\n:host-context(.dark) .current-plan-indicator {\n  background: rgba(16, 185, 129, 0.12);\n  border-color: rgba(52, 211, 153, 0.35);\n  color: #34d399;\n}\n:host-context(.dark) .status-badge.success {\n  background: rgba(43, 58, 240, 0.18);\n  color: #4f5af6;\n}\n:host-context(.dark) .status-badge.warning {\n  background: rgba(245, 158, 11, 0.18);\n  color: #fbbf24;\n}\n:host-context(.dark) .status-badge.error {\n  background: rgba(239, 68, 68, 0.18);\n  color: #f87171;\n}\n:host-context(.dark) .payment-alert {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(127, 29, 29, 0.35) 0%,\n      rgba(127, 29, 29, 0.25) 100%);\n  border-bottom-color: rgba(248, 113, 113, 0.35);\n  color: #fca5a5;\n}\n:host-context(.dark) .payment-alert mat-icon {\n  color: #f87171;\n}\n:host-context(.dark) .upgrade-hint {\n  color: #94a3b8;\n}\n:host-context(.dark) ::ng-deep .landing-slider-track .brand-slider .mdc-slider__track--inactive {\n  background-color: rgba(255, 255, 255, 0.12) !important;\n}\n:host-context(.dark) ::ng-deep .landing-slider-track .brand-slider .mdc-slider__thumb-knob {\n  border-color: #11122a !important;\n  box-shadow: 0 2px 10px rgba(43, 58, 240, 0.55);\n}\n/*# sourceMappingURL=smart-access-plans.component.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SmartAccessPlansComponent, { className: "SmartAccessPlansComponent", filePath: "src/app/modules/smart-access/plans/smart-access-plans.component.ts", lineNumber: 108 });
})();
export {
  SmartAccessPlansComponent
};
//# sourceMappingURL=chunk-IKS5HCV7.js.map
