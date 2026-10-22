import {
  SubscriptionService
} from "./chunk-57KKTAQC.js";
import {
  AuthRequiredGateService
} from "./chunk-PJ7PXAOZ.js";
import {
  extractClientSettingsPayload,
  invoiceBillingDetailsComplete
} from "./chunk-FY4LH25C.js";
import {
  MatSnackBar
} from "./chunk-N6A4QSA6.js";
import "./chunk-BXHN2UKT.js";
import "./chunk-ENWXGLEW.js";
import "./chunk-X7X3KIY2.js";
import "./chunk-JURKDGMK.js";
import "./chunk-DT4JVZCC.js";
import "./chunk-DMXREZDX.js";
import "./chunk-CPZD6RE6.js";
import "./chunk-W5MZFF7W.js";
import "./chunk-QUFOCOZK.js";
import "./chunk-CO7JIY6V.js";
import "./chunk-6Y7NS256.js";
import "./chunk-L5NPACLK.js";
import {
  HttpWrapperService
} from "./chunk-2W6CKTFA.js";
import "./chunk-BYA46NNG.js";
import "./chunk-EVWXSBKG.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-KIEFKQUB.js";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogModule,
  MatDialogRef,
  MatDialogTitle
} from "./chunk-HVUVGZ2L.js";
import "./chunk-OIBNGD5S.js";
import "./chunk-5HABGTLH.js";
import {
  MatButton,
  MatButtonModule,
  MatIconButton
} from "./chunk-PJFCLQ64.js";
import "./chunk-PDWCMJ4H.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-6Z76B4PC.js";
import "./chunk-GX5GK4J6.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  RangeValueAccessor
} from "./chunk-JBF67GMG.js";
import {
  TranslocoDirective,
  TranslocoModule,
  TranslocoPipe,
  TranslocoService
} from "./chunk-FWBWCXY5.js";
import {
  ActivatedRoute,
  Router,
  RouterModule
} from "./chunk-QL64NPDU.js";
import {
  environment
} from "./chunk-3V5B4ZWC.js";
import {
  ChangeDetectorRef,
  CommonModule,
  Component,
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
  Inject,
  Injectable,
  NgClass,
  NgForOf,
  NgIf,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
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
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-YWP2Y7QK.js";
import "./chunk-F5M2C4EZ.js";

// src/app/modules/human-authn/plans/human-authn-plans.service.ts
var HumanAuthnPlansService = class _HumanAuthnPlansService {
  constructor() {
    this._http = inject(HttpWrapperService);
  }
  get baseUrl() {
    return environment.apiUrl;
  }
  getCatalogPlans(params = { sort: "price" }) {
    return this._http.sendRequest("get", `${this.baseUrl}/v2/human-authn-plans`, params);
  }
  getClientPlans(params = {
    sort: "startDate",
    where_status: "active",
    populates: ["plan"]
  }) {
    return this._http.sendRequest("get", `${this.baseUrl}/v2/client-human-authn-plans`, params);
  }
  postClientPlan(body) {
    return this._http.sendRequest("post", `${this.baseUrl}/v2/client-human-authn-plans`, body);
  }
  upgradeClientPlan(body) {
    return this._http.sendRequest("post", `${this.baseUrl}/v2/client-human-authn-plans/upgrade`, body);
  }
  getClientSettings(params) {
    return this._http.sendRequest("get", `${this.baseUrl}/v2/client-settings`, params);
  }
  static {
    this.\u0275fac = function HumanAuthnPlansService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HumanAuthnPlansService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _HumanAuthnPlansService, factory: _HumanAuthnPlansService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HumanAuthnPlansService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/modules/human-authn/plans/human-authn-billing-required-dialog.component.ts
var HumanAuthnBillingRequiredDialogComponent = class _HumanAuthnBillingRequiredDialogComponent {
  constructor() {
    this._dialogRef = inject(MatDialogRef);
    this._router = inject(Router);
  }
  goToBillingDetails() {
    this._dialogRef.close();
    void this._router.navigate(["/settings", "billing-details"], {
      queryParams: { returnUrl: "/human-authn/plans" }
    });
  }
  static {
    this.\u0275fac = function HumanAuthnBillingRequiredDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HumanAuthnBillingRequiredDialogComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HumanAuthnBillingRequiredDialogComponent, selectors: [["human-authn-billing-required-dialog"]], decls: 14, vars: 13, consts: [["mat-dialog-title", "", 1, "!m-0", "!font-semibold", "!text-lg", "text-gray-900"], [1, "m-0", "text-sm", "leading-relaxed", "text-gray-600"], ["align", "end"], ["mat-button", "", 3, "mat-dialog-close"], ["mat-flat-button", "", "color", "primary", "type", "button", 3, "click"]], template: function HumanAuthnBillingRequiredDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h2", 0);
        \u0275\u0275text(1);
        \u0275\u0275pipe(2, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "mat-dialog-content")(4, "p", 1);
        \u0275\u0275text(5);
        \u0275\u0275pipe(6, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "mat-dialog-actions", 2)(8, "button", 3);
        \u0275\u0275text(9);
        \u0275\u0275pipe(10, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "button", 4);
        \u0275\u0275listener("click", function HumanAuthnBillingRequiredDialogComponent_Template_button_click_11_listener() {
          return ctx.goToBillingDetails();
        });
        \u0275\u0275text(12);
        \u0275\u0275pipe(13, "transloco");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 5, "humanAuthnPlans.billingRequiredTitle"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 7, "humanAuthnPlans.billingRequiredMessage"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("mat-dialog-close", false);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 9, "humanAuthnPlans.billingRequiredCancel"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 11, "humanAuthnPlans.billingRequiredGoSettings"), " ");
      }
    }, dependencies: [MatDialogModule, MatDialogClose, MatDialogTitle, MatDialogActions, MatDialogContent, MatButtonModule, MatButton, TranslocoModule, TranslocoPipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HumanAuthnBillingRequiredDialogComponent, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "human-authn-billing-required-dialog",
      imports: [MatDialogModule, MatButtonModule, TranslocoModule],
      template: `
        <h2 mat-dialog-title class="!m-0 !font-semibold !text-lg text-gray-900">
            {{ 'humanAuthnPlans.billingRequiredTitle' | transloco }}
        </h2>
        <mat-dialog-content>
            <p class="m-0 text-sm leading-relaxed text-gray-600">
                {{ 'humanAuthnPlans.billingRequiredMessage' | transloco }}
            </p>
        </mat-dialog-content>
        <mat-dialog-actions align="end">
            <button mat-button [mat-dialog-close]="false">
                {{ 'humanAuthnPlans.billingRequiredCancel' | transloco }}
            </button>
            <button mat-flat-button color="primary" type="button" (click)="goToBillingDetails()">
                {{ 'humanAuthnPlans.billingRequiredGoSettings' | transloco }}
            </button>
        </mat-dialog-actions>
    `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HumanAuthnBillingRequiredDialogComponent, { className: "HumanAuthnBillingRequiredDialogComponent", filePath: "src/app/modules/human-authn/plans/human-authn-billing-required-dialog.component.ts", lineNumber: 30 });
})();

// src/app/modules/human-authn/plans/human-authn-volume-confirm-dialog.component.ts
var _c0 = (a0, a1) => ({ quantity: a0, total: a1 });
var HumanAuthnVolumeConfirmDialogComponent = class _HumanAuthnVolumeConfirmDialogComponent {
  constructor(dialogRef, data) {
    this.dialogRef = dialogRef;
    this.data = data;
  }
  static {
    this.\u0275fac = function HumanAuthnVolumeConfirmDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HumanAuthnVolumeConfirmDialogComponent)(\u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(MAT_DIALOG_DATA));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HumanAuthnVolumeConfirmDialogComponent, selectors: [["human-authn-volume-confirm-dialog"]], decls: 14, vars: 18, consts: [["mat-dialog-title", "", 1, "!m-0", "!font-semibold", "!text-lg", "text-gray-900"], [1, "m-0", "text-sm", "leading-relaxed", "text-gray-600"], ["align", "end"], ["mat-button", "", 3, "mat-dialog-close"], ["mat-flat-button", "", "color", "primary", 3, "mat-dialog-close"]], template: function HumanAuthnVolumeConfirmDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h2", 0);
        \u0275\u0275text(1);
        \u0275\u0275pipe(2, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "mat-dialog-content")(4, "p", 1);
        \u0275\u0275text(5);
        \u0275\u0275pipe(6, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "mat-dialog-actions", 2)(8, "button", 3);
        \u0275\u0275text(9);
        \u0275\u0275pipe(10, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "button", 4);
        \u0275\u0275text(12);
        \u0275\u0275pipe(13, "transloco");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 6, "humanAuthnPlans.volumeConfirmTitle"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 8, "humanAuthnPlans.volumeConfirmMessage", \u0275\u0275pureFunction2(15, _c0, ctx.data.quantity, ctx.data.monthlyTotal)), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("mat-dialog-close", false);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 11, "humanAuthnPlans.volumeConfirmCancel"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("mat-dialog-close", true);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 13, "humanAuthnPlans.volumeConfirmContinue"), " ");
      }
    }, dependencies: [MatDialogModule, MatDialogClose, MatDialogTitle, MatDialogActions, MatDialogContent, MatButtonModule, MatButton, TranslocoModule, TranslocoPipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HumanAuthnVolumeConfirmDialogComponent, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "human-authn-volume-confirm-dialog",
      imports: [MatDialogModule, MatButtonModule, TranslocoModule],
      template: `
        <h2 mat-dialog-title class="!m-0 !font-semibold !text-lg text-gray-900">
            {{ 'humanAuthnPlans.volumeConfirmTitle' | transloco }}
        </h2>
        <mat-dialog-content>
            <p class="m-0 text-sm leading-relaxed text-gray-600">
                {{
                    'humanAuthnPlans.volumeConfirmMessage'
                        | transloco: { quantity: data.quantity, total: data.monthlyTotal }
                }}
            </p>
        </mat-dialog-content>
        <mat-dialog-actions align="end">
            <button mat-button [mat-dialog-close]="false">
                {{ 'humanAuthnPlans.volumeConfirmCancel' | transloco }}
            </button>
            <button mat-flat-button color="primary" [mat-dialog-close]="true">
                {{ 'humanAuthnPlans.volumeConfirmContinue' | transloco }}
            </button>
        </mat-dialog-actions>
    `
    }]
  }], () => [{ type: MatDialogRef }, { type: void 0, decorators: [{
    type: Inject,
    args: [MAT_DIALOG_DATA]
  }] }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HumanAuthnVolumeConfirmDialogComponent, { className: "HumanAuthnVolumeConfirmDialogComponent", filePath: "src/app/modules/human-authn/plans/human-authn-volume-confirm-dialog.component.ts", lineNumber: 37 });
})();

// src/app/modules/human-authn/plans/human-authn-plans.component.ts
function HumanAuthnPlansComponent_ng_container_0_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 9);
    \u0275\u0275listener("click", function HumanAuthnPlansComponent_ng_container_0_button_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goBack(ctx_r1.currentView === "select" ? "change" : "current"));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "arrow_back");
    \u0275\u0275elementEnd()();
  }
}
function HumanAuthnPlansComponent_ng_container_0_ng_container_13_ng_container_1_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r5 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r5("humanAuthnPlans.active"));
  }
}
function HumanAuthnPlansComponent_ng_container_0_ng_container_13_ng_container_1_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r5 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r5("humanAuthnPlans.cancelled"));
  }
}
function HumanAuthnPlansComponent_ng_container_0_ng_container_13_ng_container_1_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r5 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r5("humanAuthnPlans.paymentFailed"));
  }
}
function HumanAuthnPlansComponent_ng_container_0_ng_container_13_ng_container_1_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69)(1, "mat-icon", 70);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r5 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r5("humanAuthnPlans.paymentFailedDescription"));
  }
}
function HumanAuthnPlansComponent_ng_container_0_ng_container_13_ng_container_1_ng_container_28_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const subscription_r6 = \u0275\u0275nextContext(2).$implicit;
    const t_r5 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", t_r5("humanAuthnPlans.nextPayment"), ": ", \u0275\u0275pipeBind2(2, 2, subscription_r6.endDate, "longDate"), "");
  }
}
function HumanAuthnPlansComponent_ng_container_0_ng_container_13_ng_container_1_ng_container_28_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const subscription_r6 = \u0275\u0275nextContext(2).$implicit;
    const t_r5 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", t_r5("humanAuthnPlans.startsIn"), ": ", \u0275\u0275pipeBind2(2, 2, subscription_r6.startDate, "longDate"), "");
  }
}
function HumanAuthnPlansComponent_ng_container_0_ng_container_13_ng_container_1_ng_container_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, HumanAuthnPlansComponent_ng_container_0_ng_container_13_ng_container_1_ng_container_28_span_1_Template, 3, 5, "span", 8)(2, HumanAuthnPlansComponent_ng_container_0_ng_container_13_ng_container_1_ng_container_28_span_2_Template, 3, 5, "span", 8);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const i_r7 = \u0275\u0275nextContext().index;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", i_r7 === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", i_r7 > 0);
  }
}
function HumanAuthnPlansComponent_ng_container_0_ng_container_13_ng_container_1_span_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const subscription_r6 = \u0275\u0275nextContext().$implicit;
    const t_r5 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", t_r5("humanAuthnPlans.canceledPlan"), ": ", \u0275\u0275pipeBind2(2, 2, subscription_r6.cancelAt, "longDate"), "");
  }
}
function HumanAuthnPlansComponent_ng_container_0_ng_container_13_ng_container_1_ng_container_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 71);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 72);
    \u0275\u0275element(3, "path", 73)(4, "path", 74)(5, "path", 75);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "span", 76);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r5 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(t_r5("humanAuthnPlans.paidWithStripeLink"));
  }
}
function HumanAuthnPlansComponent_ng_container_0_ng_container_13_ng_container_1_ng_container_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "img", 77);
    \u0275\u0275elementStart(2, "div", 78)(3, "span", 76);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 79);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const subscription_r6 = \u0275\u0275nextContext().$implicit;
    const t_r5 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.creditCardLogo(subscription_r6.cardBrand), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate3("", ctx_r1.capitalizeFirstLetter(subscription_r6.cardBrand), " ", t_r5("humanAuthnPlans.ended"), " ", subscription_r6.lastFour, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("", t_r5("humanAuthnPlans.expires"), " ", subscription_r6.cardExpMonth, "/", subscription_r6.cardExpYear, "");
  }
}
function HumanAuthnPlansComponent_ng_container_0_ng_container_13_ng_container_1_ng_container_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "mat-icon", 80);
    \u0275\u0275text(2, "credit_card_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 81);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r5 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r5("humanAuthnPlans.noPayment"));
  }
}
function HumanAuthnPlansComponent_ng_container_0_ng_container_13_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 30)(2, "div", 31)(3, "div", 32)(4, "div", 33)(5, "mat-icon");
    \u0275\u0275text(6, "workspace_premium");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div")(8, "p", 34);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "h2", 35);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 36);
    \u0275\u0275element(13, "span", 37);
    \u0275\u0275template(14, HumanAuthnPlansComponent_ng_container_0_ng_container_13_ng_container_1_span_14_Template, 2, 1, "span", 8)(15, HumanAuthnPlansComponent_ng_container_0_ng_container_13_ng_container_1_span_15_Template, 2, 1, "span", 8)(16, HumanAuthnPlansComponent_ng_container_0_ng_container_13_ng_container_1_span_16_Template, 2, 1, "span", 8);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(17, HumanAuthnPlansComponent_ng_container_0_ng_container_13_ng_container_1_div_17_Template, 5, 1, "div", 38);
    \u0275\u0275elementStart(18, "div", 39)(19, "div", 40)(20, "div", 41);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 42);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "currency");
    \u0275\u0275elementStart(25, "span", 43);
    \u0275\u0275text(26, "USD");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 44);
    \u0275\u0275template(28, HumanAuthnPlansComponent_ng_container_0_ng_container_13_ng_container_1_ng_container_28_Template, 3, 2, "ng-container", 8)(29, HumanAuthnPlansComponent_ng_container_0_ng_container_13_ng_container_1_span_29_Template, 3, 5, "span", 8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 45);
    \u0275\u0275template(31, HumanAuthnPlansComponent_ng_container_0_ng_container_13_ng_container_1_ng_container_31_Template, 8, 1, "ng-container", 8)(32, HumanAuthnPlansComponent_ng_container_0_ng_container_13_ng_container_1_ng_container_32_Template, 7, 7, "ng-container", 8)(33, HumanAuthnPlansComponent_ng_container_0_ng_container_13_ng_container_1_ng_container_33_Template, 5, 1, "ng-container", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 46)(35, "div", 47)(36, "div", 48)(37, "mat-icon");
    \u0275\u0275text(38, "how_to_reg");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 49)(40, "span", 50);
    \u0275\u0275text(41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "span", 51);
    \u0275\u0275text(43);
    \u0275\u0275pipe(44, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "mat-icon", 52);
    \u0275\u0275text(46);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div", 47)(48, "div", 53)(49, "mat-icon");
    \u0275\u0275text(50, "verified_user");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "div", 49)(52, "span", 50);
    \u0275\u0275text(53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "span", 51);
    \u0275\u0275text(55);
    \u0275\u0275pipe(56, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "mat-icon", 52);
    \u0275\u0275text(58);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "div", 47)(60, "div", 54)(61, "mat-icon");
    \u0275\u0275text(62, "fingerprint");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "div", 49)(64, "span", 50);
    \u0275\u0275text(65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "span", 51);
    \u0275\u0275text(67);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(68, "mat-icon", 55);
    \u0275\u0275text(69, "check_circle");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(70, "div", 47)(71, "div", 56)(72, "mat-icon");
    \u0275\u0275text(73, "group");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(74, "div", 49)(75, "span", 50);
    \u0275\u0275text(76);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "span", 51);
    \u0275\u0275text(78);
    \u0275\u0275pipe(79, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(80, "mat-icon", 52);
    \u0275\u0275text(81);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(82, "div", 57)(83, "h3", 58);
    \u0275\u0275text(84);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "p", 59);
    \u0275\u0275text(86);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "div", 60)(88, "div", 61)(89, "div", 62)(90, "mat-icon");
    \u0275\u0275text(91, "visibility_off");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(92, "div", 63)(93, "span", 64);
    \u0275\u0275text(94);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(95, "span", 65);
    \u0275\u0275text(96);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(97, "mat-icon", 55);
    \u0275\u0275text(98, "check_circle");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(99, "div", 61)(100, "div", 66)(101, "mat-icon");
    \u0275\u0275text(102, "verified_user");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(103, "div", 63)(104, "span", 64);
    \u0275\u0275text(105);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(106, "span", 65);
    \u0275\u0275text(107);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(108, "mat-icon", 55);
    \u0275\u0275text(109, "check_circle");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(110, "div", 67)(111, "button", 68);
    \u0275\u0275listener("click", function HumanAuthnPlansComponent_ng_container_0_ng_container_13_ng_container_1_Template_button_click_111_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.manageBilling());
    });
    \u0275\u0275text(112);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const subscription_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    const t_r5 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("payment-failed", subscription_r6.paymentFailedAt);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r1.getPlanColorClass(subscription_r6.code));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", i_r7 === 0 ? t_r5("humanAuthnPlans.yourPlan") : t_r5("humanAuthnPlans.yourNextPlan"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(subscription_r6.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", subscription_r6.paymentFailedAt ? "error" : subscription_r6.cancelAt ? "warning" : "success");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !subscription_r6.paymentFailedAt && !subscription_r6.cancelAt);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", subscription_r6.cancelAt);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", subscription_r6.paymentFailedAt);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", subscription_r6.paymentFailedAt);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r5("humanAuthnPlans.planValue"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(24, 43, ctx_r1.calculateSubscriptionPrice(subscription_r6)), " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", !subscription_r6.cancelAt);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", subscription_r6.cancelAt);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (subscription_r6 == null ? null : subscription_r6.cardBrand) === "link");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (subscription_r6 == null ? null : subscription_r6.cardBrand) && (subscription_r6 == null ? null : subscription_r6.cardBrand) !== "link" && (subscription_r6 == null ? null : subscription_r6.lastFour));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(subscription_r6 == null ? null : subscription_r6.cardBrand) && !(subscription_r6 == null ? null : subscription_r6.lastFour));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(t_r5("humanAuthnPlans.encrypts"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(44, 45, subscription_r6.encryptLimit));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", subscription_r6.encryptLimit > 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", subscription_r6.encryptLimit > 0 ? "check_circle" : "cancel", " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(t_r5("humanAuthnPlans.planCredits"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(56, 47, subscription_r6.credits || 0));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", (subscription_r6.credits || 0) > 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (subscription_r6.credits || 0) > 0 ? "check_circle" : "cancel", " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(t_r5("humanAuthnPlans.zkLiveness"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r5("humanAuthnPlans.enabled"));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(t_r5("humanAuthnPlans.activeUsers"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(subscription_r6.activeUserLimit > 0 ? \u0275\u0275pipeBind1(79, 49, subscription_r6.activeUserLimit) : t_r5("humanAuthnPlans.available"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", subscription_r6.activeUserLimit > 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", subscription_r6.activeUserLimit > 0 ? "check_circle" : "add_circle_outline", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r5("humanAuthnPlans.includedPrivacy"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r5("humanAuthnPlans.includedPrivacyDesc"));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(t_r5("humanAuthnPlans.benefitNoBiometrics"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r5("humanAuthnPlans.benefitNoFaceDb"));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(t_r5("humanAuthnPlans.benefitZkProof"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r5("humanAuthnPlans.benefitNoHostedDb"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("error", subscription_r6.paymentFailedAt);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r5("humanAuthnPlans.manageSubscription"), " ");
  }
}
function HumanAuthnPlansComponent_ng_container_0_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, HumanAuthnPlansComponent_ng_container_0_ng_container_13_ng_container_1_Template, 113, 51, "ng-container", 10);
    \u0275\u0275elementStart(2, "div", 11)(3, "div", 12)(4, "div", 13)(5, "div", 14)(6, "mat-icon");
    \u0275\u0275text(7, "auto_awesome");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "h2", 15);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 16);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 17)(15, "div", 18)(16, "mat-icon");
    \u0275\u0275text(17, "verified");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 19)(19, "mat-icon");
    \u0275\u0275text(20, "speed");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 20)(22, "mat-icon");
    \u0275\u0275text(23, "security");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(24, "div", 21)(25, "div", 22)(26, "div", 23)(27, "mat-icon");
    \u0275\u0275text(28, "trending_up");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 24)(30, "span", 25);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span", 26);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "div", 22)(35, "div", 23)(36, "mat-icon");
    \u0275\u0275text(37, "support_agent");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 24)(39, "span", 25);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "span", 26);
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(43, "div", 22)(44, "div", 23)(45, "mat-icon");
    \u0275\u0275text(46, "tune");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div", 24)(48, "span", 25);
    \u0275\u0275text(49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "span", 26);
    \u0275\u0275text(51);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(52, "div", 27)(53, "button", 28);
    \u0275\u0275listener("click", function HumanAuthnPlansComponent_ng_container_0_ng_container_13_Template_button_click_53_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.changeView("change"));
    });
    \u0275\u0275elementStart(54, "span");
    \u0275\u0275text(55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "mat-icon");
    \u0275\u0275text(57, "arrow_forward");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "span", 29);
    \u0275\u0275text(59);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.currentSubscription);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(t_r5("humanAuthnPlans.upgradeAvailable"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r5("humanAuthnPlans.betterPlan"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r5("humanAuthnPlans.betterPlanText"));
    \u0275\u0275advance(18);
    \u0275\u0275textInterpolate(t_r5("humanAuthnPlans.higherLimits"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r5("humanAuthnPlans.higherLimitsDesc"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(t_r5("humanAuthnPlans.prioritySupport"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r5("humanAuthnPlans.prioritySupportDesc"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(t_r5("humanAuthnPlans.advancedFeatures"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r5("humanAuthnPlans.advancedFeaturesDesc"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r5("humanAuthnPlans.explorePlans"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r5("humanAuthnPlans.noCommitment"));
  }
}
function HumanAuthnPlansComponent_ng_container_0_ng_container_14_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 112);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r5 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r5("humanAuthnPlans.currentPlanBadge"));
  }
}
function HumanAuthnPlansComponent_ng_container_0_ng_container_14_div_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 113);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r5 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r5("humanAuthnPlans.currentPlanBadge"), " ");
  }
}
function HumanAuthnPlansComponent_ng_container_0_ng_container_14_div_126_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 112);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r5 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r5("humanAuthnPlans.currentPlanBadge"));
  }
}
function HumanAuthnPlansComponent_ng_container_0_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 82)(2, "h2", 83);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 84);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 85)(7, "div", 86);
    \u0275\u0275template(8, HumanAuthnPlansComponent_ng_container_0_ng_container_14_div_8_Template, 2, 1, "div", 87);
    \u0275\u0275elementStart(9, "div", 88);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 89)(12, "span", 90);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 91);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "p", 92);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 93)(21, "div", 94)(22, "span", 95);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 96);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 94)(28, "span", 95);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span", 96);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "div", 97)(33, "p", 98);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "ul", 99)(36, "li")(37, "mat-icon");
    \u0275\u0275text(38, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275text(39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "li")(41, "mat-icon");
    \u0275\u0275text(42, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275text(43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "li")(45, "mat-icon");
    \u0275\u0275text(46, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275text(47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "li")(49, "mat-icon");
    \u0275\u0275text(50, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275text(51);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(52, "button", 100);
    \u0275\u0275listener("click", function HumanAuthnPlansComponent_ng_container_0_ng_container_14_Template_button_click_52_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.changeView("select", "plus"));
    });
    \u0275\u0275text(53);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "div", 101);
    \u0275\u0275template(55, HumanAuthnPlansComponent_ng_container_0_ng_container_14_div_55_Template, 2, 1, "div", 102);
    \u0275\u0275elementStart(56, "div", 103);
    \u0275\u0275text(57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "div", 104);
    \u0275\u0275text(59);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "div", 89)(61, "span", 90);
    \u0275\u0275text(62);
    \u0275\u0275pipe(63, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "span", 91);
    \u0275\u0275text(65);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(66, "p", 92);
    \u0275\u0275text(67);
    \u0275\u0275pipe(68, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "div", 93)(70, "div", 94)(71, "span", 95);
    \u0275\u0275text(72);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "span", 96);
    \u0275\u0275text(74);
    \u0275\u0275pipe(75, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(76, "div", 94)(77, "span", 95);
    \u0275\u0275text(78);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "span", 96);
    \u0275\u0275text(80);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(81, "div", 97)(82, "p", 98);
    \u0275\u0275text(83);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "ul", 99)(85, "li")(86, "mat-icon");
    \u0275\u0275text(87, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275text(88);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(89, "li")(90, "mat-icon");
    \u0275\u0275text(91, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275text(92);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(93, "li")(94, "mat-icon");
    \u0275\u0275text(95, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275text(96);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(97, "li")(98, "mat-icon");
    \u0275\u0275text(99, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275text(100);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(101, "button", 105);
    \u0275\u0275listener("click", function HumanAuthnPlansComponent_ng_container_0_ng_container_14_Template_button_click_101_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.changeView("select", "business"));
    });
    \u0275\u0275text(102);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(103, "div", 86)(104, "div", 106);
    \u0275\u0275text(105);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(106, "div", 89)(107, "span", 107);
    \u0275\u0275text(108);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(109, "p", 92);
    \u0275\u0275text(110);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(111, "div", 97)(112, "p", 98);
    \u0275\u0275text(113);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(114, "ul", 99)(115, "li")(116, "mat-icon");
    \u0275\u0275text(117, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275text(118);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(119, "li")(120, "mat-icon");
    \u0275\u0275text(121, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275text(122);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(123, "button", 108);
    \u0275\u0275listener("click", function HumanAuthnPlansComponent_ng_container_0_ng_container_14_Template_button_click_123_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.purchaseEnterprise());
    });
    \u0275\u0275text(124);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(125, "div", 109);
    \u0275\u0275template(126, HumanAuthnPlansComponent_ng_container_0_ng_container_14_div_126_Template, 2, 1, "div", 87);
    \u0275\u0275elementStart(127, "div", 110);
    \u0275\u0275text(128);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(129, "div", 89)(130, "span", 90);
    \u0275\u0275text(131, "$0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(132, "span", 91);
    \u0275\u0275text(133);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(134, "p", 92);
    \u0275\u0275text(135);
    \u0275\u0275pipe(136, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(137, "div", 97)(138, "p", 98);
    \u0275\u0275text(139);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(140, "ul", 99)(141, "li")(142, "mat-icon");
    \u0275\u0275text(143, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275text(144);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(145, "li")(146, "mat-icon");
    \u0275\u0275text(147, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275text(148);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(149, "button", 111);
    \u0275\u0275listener("click", function HumanAuthnPlansComponent_ng_container_0_ng_container_14_Template_button_click_149_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.changeView("select", "free"));
    });
    \u0275\u0275text(150);
    \u0275\u0275elementStart(151, "mat-icon");
    \u0275\u0275text(152, "arrow_forward");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_10_0;
    let tmp_12_0;
    let tmp_27_0;
    let tmp_29_0;
    let tmp_49_0;
    const t_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r5("humanAuthnPlans.selectPlan"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r5("humanAuthnPlans.chooseBestPlan"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("select-plan-card--current", ctx_r1.isActiveCatalogPlan("plus"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isActiveCatalogPlan("plus"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r5("humanAuthnPlans.plus"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 59, ctx_r1.calculatePrice("plus")));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("/", t_r5("humanAuthnPlans.month"), "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(19, 61, ((tmp_10_0 = ctx_r1.getPlan("plus")) == null ? null : tmp_10_0.encryptLimit) || 300), " ", t_r5("humanAuthnPlans.enrollments"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(t_r5("humanAuthnPlans.enrollCost"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 63, ((tmp_12_0 = ctx_r1.getPlan("plus")) == null ? null : tmp_12_0.unitPrice) || 0.6));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r5("humanAuthnPlans.activeUserCost"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r1.activeUserCreditCost("plus"), " ", t_r5("humanAuthnPlans.creditsUnit"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r5("humanAuthnPlans.included"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(t_r5("humanAuthnPlans.benefitNoBiometrics"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r5("humanAuthnPlans.benefitNoFaceDb"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r5("humanAuthnPlans.benefitNoHostedDb"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r5("humanAuthnPlans.benefitZkProof"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.isActiveCatalogPlan("plus") ? t_r5("humanAuthnPlans.adjustVolume") : t_r5("humanAuthnPlans.viewPlan"), " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("select-plan-card--current", ctx_r1.isActiveCatalogPlan("business"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isActiveCatalogPlan("business"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r5("humanAuthnPlans.mostPopular"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r5("humanAuthnPlans.business"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(63, 65, ctx_r1.calculatePrice("business")));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("/", t_r5("humanAuthnPlans.month"), "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(68, 67, ((tmp_27_0 = ctx_r1.getPlan("business")) == null ? null : tmp_27_0.encryptLimit) || 1e3), " ", t_r5("humanAuthnPlans.enrollments"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(t_r5("humanAuthnPlans.enrollCost"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(75, 69, ((tmp_29_0 = ctx_r1.getPlan("business")) == null ? null : tmp_29_0.unitPrice) || 0.5));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r5("humanAuthnPlans.activeUserCost"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r1.activeUserCreditCost("business"), " ", t_r5("humanAuthnPlans.creditsUnit"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r5("humanAuthnPlans.included"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(t_r5("humanAuthnPlans.benefitNoBiometrics"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r5("humanAuthnPlans.benefitNoFaceDb"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r5("humanAuthnPlans.benefitNoHostedDb"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r5("humanAuthnPlans.benefitZkProof"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.isActiveCatalogPlan("business") ? t_r5("humanAuthnPlans.adjustVolume") : t_r5("humanAuthnPlans.viewPlan"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r5("humanAuthnPlans.enterprise"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r5("humanAuthnPlans.contactSales"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("+2,500 ", t_r5("humanAuthnPlans.enrollments"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r5("humanAuthnPlans.included"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(t_r5("humanAuthnPlans.everythingInBusiness"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r5("humanAuthnPlans.dedicatedSupport"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r5("humanAuthnPlans.contactSales"), " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("select-plan-card--current", ctx_r1.isActiveCatalogPlan("free"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isActiveCatalogPlan("free"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r5("humanAuthnPlans.free"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("/", t_r5("humanAuthnPlans.month"), "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(136, 71, ((tmp_49_0 = ctx_r1.getPlan("free")) == null ? null : tmp_49_0.encryptLimit) || 20), " ", t_r5("humanAuthnPlans.enrollments"), "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r5("humanAuthnPlans.included"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(t_r5("humanAuthnPlans.benefitNoBiometrics"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r5("humanAuthnPlans.benefitNoFaceDb"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r5("humanAuthnPlans.viewPlan"), " ");
  }
}
function HumanAuthnPlansComponent_ng_container_0_ng_container_15_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 128)(1, "h2", 129);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 130);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 131)(6, "span", 132);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 133)(10, "div", 134)(11, "input", 135);
    \u0275\u0275twoWayListener("ngModelChange", function HumanAuthnPlansComponent_ng_container_0_ng_container_15_div_1_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.sliderOptions.value, $event) || (ctx_r1.sliderOptions.value = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "span", 132);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 136)(16, "strong");
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r5 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r5("humanAuthnPlans.howManyEnrollments"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r5("humanAuthnPlans.selectVolume"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 11, ctx_r1.sliderOptions == null ? null : ctx_r1.sliderOptions.notches == null ? null : ctx_r1.sliderOptions.notches[0]));
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("--track-fill-percentage", ctx_r1.getTrackFillPercentage() + "%");
    \u0275\u0275advance();
    \u0275\u0275property("max", ((ctx_r1.sliderOptions == null ? null : ctx_r1.sliderOptions.notches == null ? null : ctx_r1.sliderOptions.notches.length) || 1) - 1)("min", 0);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.sliderOptions.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("+", \u0275\u0275pipeBind1(14, 13, ctx_r1.sliderOptions == null ? null : ctx_r1.sliderOptions.notches == null ? null : ctx_r1.sliderOptions.notches[(ctx_r1.sliderOptions == null ? null : ctx_r1.sliderOptions.notches == null ? null : ctx_r1.sliderOptions.notches.length) - 1]), "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 15, ctx_r1.getSliderAmount(ctx_r1.selectedPlan)));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r5("humanAuthnPlans.enrollments"), " ");
  }
}
function HumanAuthnPlansComponent_ng_container_0_ng_container_15_mat_spinner_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 137);
  }
}
function HumanAuthnPlansComponent_ng_container_0_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, HumanAuthnPlansComponent_ng_container_0_ng_container_15_div_1_Template, 20, 17, "div", 114);
    \u0275\u0275elementStart(2, "div", 115)(3, "div", 116)(4, "div", 117)(5, "div", 118)(6, "mat-icon");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "span", 119);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 120)(13, "span", 43);
    \u0275\u0275text(14, "$");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 121);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 44);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 122)(21, "div", 123)(22, "mat-icon");
    \u0275\u0275text(23, "how_to_reg");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 96);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span", 95);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(29, "div", 124);
    \u0275\u0275elementStart(30, "div", 123)(31, "mat-icon");
    \u0275\u0275text(32, "payments");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "span", 96);
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "span", 95);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(38, "div", 124);
    \u0275\u0275elementStart(39, "div", 123)(40, "mat-icon");
    \u0275\u0275text(41, "verified_user");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "span", 96);
    \u0275\u0275text(43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "span", 95);
    \u0275\u0275text(45);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(46, "div", 125)(47, "button", 126);
    \u0275\u0275listener("click", function HumanAuthnPlansComponent_ng_container_0_ng_container_15_Template_button_click_47_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.checkout());
    });
    \u0275\u0275template(48, HumanAuthnPlansComponent_ng_container_0_ng_container_15_mat_spinner_48_Template, 1, 0, "mat-spinner", 127);
    \u0275\u0275text(49);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_8_0;
    let tmp_14_0;
    const t_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedPlan !== "free");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", "checkout-" + ctx_r1.selectedPlan);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", "header-" + ctx_r1.selectedPlan);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r1.selectedPlan);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.selectedPlan === "free" ? "card_giftcard" : ctx_r1.selectedPlan === "plus" ? "star" : "diamond");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(((tmp_8_0 = ctx_r1.getPlan(ctx_r1.selectedPlan)) == null ? null : tmp_8_0.name) || ctx_r1.selectedPlan);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r5("humanAuthnPlans.perEnrollment"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(17, 19, ctx_r1.calculatePrice(ctx_r1.selectedPlan), "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("/", t_r5("humanAuthnPlans.month"), "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 22, ctx_r1.getSliderAmount(ctx_r1.selectedPlan)));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r5("humanAuthnPlans.enrollments"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(35, 24, ((tmp_14_0 = ctx_r1.getPlan(ctx_r1.selectedPlan)) == null ? null : tmp_14_0.unitPrice) || 0));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r5("humanAuthnPlans.enrollCost"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.activeUserCreditCost(ctx_r1.selectedPlan));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r5("humanAuthnPlans.activeUserCost"));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.subscribingToPlan)("ngClass", ctx_r1.selectedPlan);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.subscribingToPlan);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r5("humanAuthnPlans.purchase"), " ");
  }
}
function HumanAuthnPlansComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3);
    \u0275\u0275template(4, HumanAuthnPlansComponent_ng_container_0_button_4_Template, 3, 0, "button", 4);
    \u0275\u0275elementStart(5, "div", 5)(6, "mat-icon");
    \u0275\u0275text(7, "fingerprint");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div")(9, "h1", 6);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 7);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(13, HumanAuthnPlansComponent_ng_container_0_ng_container_13_Template, 60, 12, "ng-container", 8)(14, HumanAuthnPlansComponent_ng_container_0_ng_container_14_Template, 153, 73, "ng-container", 8)(15, HumanAuthnPlansComponent_ng_container_0_ng_container_15_Template, 50, 26, "ng-container", 8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.currentView === "change" && ctx_r1.currentSubscription.length || ctx_r1.currentView === "select");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(t_r5("humanAuthnPlans.title"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r5("humanAuthnPlans.subtitle"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentSubscription.length && ctx_r1.currentView === "current");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentView === "change");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentView === "select" && ctx_r1.selectedPlan);
  }
}
var SMART_AGENT_CHECKOUT_SOURCE = "smart_agent";
var CATALOG_PLAN_CODES = {
  plus: "human_authn_plus",
  business: "human_authn_business",
  free: "human_authn_pyg"
};
var HumanAuthnPlansComponent = class _HumanAuthnPlansComponent {
  constructor() {
    this._activatedRoute = inject(ActivatedRoute);
    this._authGate = inject(AuthRequiredGateService);
    this._changeDetectorRef = inject(ChangeDetectorRef);
    this._dialog = inject(MatDialog);
    this._plansService = inject(HumanAuthnPlansService);
    this._router = inject(Router);
    this._snackBar = inject(MatSnackBar);
    this._subscriptionService = inject(SubscriptionService);
    this._translocoService = inject(TranslocoService);
    this.currentSubscription = [];
    this.currentView = "change";
    this.plans = {};
    this.selectedPlan = null;
    this.subscribingToPlan = false;
    this.showExtraInfo = false;
    this._sessionConfirmHandled = false;
    this.planSettings = {
      plus: { max: 1e3, min: 300, notches: [], step: 100, value: 0 },
      business: { max: 2500, min: 1e3, notches: [], step: 100, value: 0 }
    };
    this.sliderOptions = {};
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
    this._authGate.runWithAuthOrDialog({
      onAuthenticated: () => this._runPlansEntryAfterAuthGate(),
      panelClass: "auth-required-dialog"
    });
  }
  _runPlansEntryAfterAuthGate() {
    const sessionId = this._activatedRoute.snapshot.queryParamMap.get("session_id")?.trim();
    if (sessionId && !this._sessionConfirmHandled) {
      this._sessionConfirmHandled = true;
      void this._router.navigate([], {
        queryParams: { session_id: null },
        queryParamsHandling: "merge",
        replaceUrl: true
      });
      this._subscriptionService.confirmCheckoutSession(sessionId).subscribe({
        next: () => {
          this._snackBar.open(this._translocoService.translate("subscriptionPlans.sessionConfirmSuccess"), void 0, { duration: 4e3 });
          this._bootstrap();
        },
        error: () => this._bootstrap()
      });
      return;
    }
    this._bootstrap();
  }
  _bootstrap() {
    this._loadCatalog();
    this._loadMySubscription();
  }
  _loadCatalog() {
    this._plansService.getCatalogPlans({ sort: "price" }).subscribe({
      next: (response) => {
        this.plans = {};
        (response?.data ?? []).forEach((plan) => {
          if (plan.code === CATALOG_PLAN_CODES.business)
            this.plans["business"] = plan;
          if (plan.code === CATALOG_PLAN_CODES.plus)
            this.plans["plus"] = plan;
          if (plan.code === CATALOG_PLAN_CODES.free)
            this.plans["free"] = plan;
        });
        this._changeDetectorRef.markForCheck();
      },
      error: () => {
        this._snackBar.open(this._translocoService.translate("humanAuthnPlans.loadError"), void 0, {
          duration: 4e3
        });
      }
    });
  }
  _loadMySubscription() {
    this._plansService.getClientPlans().subscribe({
      next: (response) => {
        this.currentSubscription = response?.data ?? [];
        this.currentView = this.currentSubscription.length ? "current" : "change";
        this._changeDetectorRef.markForCheck();
      },
      error: () => {
        this.currentView = "change";
        this._changeDetectorRef.markForCheck();
      }
    });
  }
  getPlan(key) {
    return this.plans?.[key];
  }
  getAddedEnrollments() {
    return 100 * (this.sliderOptions?.value || 0);
  }
  getSliderAmount(plan) {
    return (this.getPlan(plan)?.encryptLimit || 0) + this.getAddedEnrollments();
  }
  getTrackFillPercentage() {
    if (!this.sliderOptions?.notches?.length)
      return 0;
    const maxIndex = this.sliderOptions.notches.length - 1;
    return (this.sliderOptions.value || 0) / maxIndex * 100;
  }
  calculatePrice(planKey) {
    const plan = this.getPlan(planKey);
    if (!plan || planKey === "free")
      return 0;
    return Number(plan.price || 0) + Number(plan.unitPrice || 0) * this.getAddedEnrollments();
  }
  monthlyTotal(planKey) {
    return this.calculatePrice(planKey);
  }
  calculateSubscriptionPrice(subscription) {
    const catalog = subscription?.plan;
    if (subscription?.code === CATALOG_PLAN_CODES.free)
      return 0;
    if (!catalog)
      return Number(subscription?.amount || 0);
    const baseIncluded = Number(catalog.encryptLimit || 0);
    const total = Number(subscription.encryptLimit || 0);
    const volumeAboveBase = Math.max(0, total - baseIncluded);
    return Number(catalog.price || 0) + Number(catalog.unitPrice || 0) * volumeAboveBase;
  }
  capitalizeFirstLetter(value) {
    return value ? value.charAt(0).toUpperCase() + value.slice(1) : "";
  }
  creditCardLogo(brand) {
    const logos = {
      amex: "https://cdn.verifik.co/assets/billing-svg/AmericanExpressLogo.svg",
      link: "https://cdn.verifik.co/assets/billing-svg/StripeLinkLogo.svg",
      mastercard: "https://cdn.verifik.co/assets/billing-svg/MasterCardLogo.svg",
      visa: "https://cdn.verifik.co/assets/billing-svg/VisaLogo.svg"
    };
    return logos[brand?.toLowerCase()] || "";
  }
  getPlanColorClass(code) {
    const normalized = (code || "").toLowerCase();
    if (normalized.includes("plus"))
      return "plus";
    if (normalized.includes("business"))
      return "business";
    return "free";
  }
  activeUserCreditCost(planKey) {
    return Number(this.getPlan(planKey)?.activeUserCreditCost ?? 0.4);
  }
  getPrimaryActiveSubscription() {
    if (!this.currentSubscription?.length)
      return null;
    return this.currentSubscription.find((sub) => !sub.cancelAt) ?? this.currentSubscription[0];
  }
  isActiveCatalogPlan(planKey) {
    const sub = this.getPrimaryActiveSubscription();
    if (!sub || sub.cancelAt)
      return false;
    return sub.code === CATALOG_PLAN_CODES[planKey];
  }
  changeView(view, plan) {
    this.currentView = view;
    this.selectedPlan = plan ?? null;
    this._setSliderValues();
    this._changeDetectorRef.markForCheck();
  }
  goBack(direction) {
    if (this.sliderOptions)
      this.sliderOptions.value = 0;
    this.currentView = direction;
    this.selectedPlan = null;
    this._changeDetectorRef.markForCheck();
  }
  _setSliderValues() {
    if (!this.selectedPlan || this.selectedPlan === "free") {
      this.sliderOptions = {};
      return;
    }
    this.sliderOptions = this.planSettings[this.selectedPlan];
    if (this.sliderOptions?.notches?.length)
      return;
    const notches = [];
    let val = this.sliderOptions.min ?? 0;
    const max = this.sliderOptions.max ?? 0;
    while (val <= max) {
      notches.push(val);
      val += 100;
    }
    this.sliderOptions.notches = notches;
  }
  manageBilling() {
    this._subscriptionService.createPortalSession({}).subscribe({
      next: (result) => {
        const url = result?.data?.url;
        if (url)
          window.location.href = url;
      },
      error: () => {
        this._snackBar.open(this._translocoService.translate("humanAuthnPlans.redirectError"), void 0, {
          duration: 4e3
        });
      }
    });
  }
  purchaseEnterprise() {
    const lang = this._translocoService.getActiveLang() === "es" ? "es" : "en";
    const urls = {
      es: "https://api.whatsapp.com/send?phone=573208184565&text=%C2%A1Hola!%20estoy%20interesado%20en%20un%20plan%20enterprise%20de%20HumanAuthn.",
      en: "https://api.whatsapp.com/send?phone=573208184565&text=Hello!%20I%20am%20interested%20in%20a%20HumanAuthn%20enterprise%20plan."
    };
    window.open(urls[lang], "_blank");
  }
  checkout() {
    if (this.subscribingToPlan || !this.selectedPlan)
      return;
    const catalog = this.getPlan(this.selectedPlan);
    if (!catalog?.stripeProduct) {
      this._snackBar.open(this._translocoService.translate("humanAuthnPlans.checkoutNoPrice"), void 0, {
        duration: 4e3
      });
      return;
    }
    this._plansService.getClientSettings({ findOne: true }).subscribe({
      next: (response) => {
        const billing = extractClientSettingsPayload(response);
        if (!invoiceBillingDetailsComplete(billing?.invoiceSettings)) {
          this._dialog.open(HumanAuthnBillingRequiredDialogComponent);
          return;
        }
        this._startCheckout(catalog);
      },
      error: () => this._startCheckout(catalog)
    });
  }
  _startCheckout(catalog) {
    const quantity = this.selectedPlan === "free" ? 1 : this.getSliderAmount(this.selectedPlan);
    const hasActive = this.currentSubscription.some((row) => !row.cancelAt);
    const body = {
      plan: catalog.stripeProduct,
      quantity,
      source: SMART_AGENT_CHECKOUT_SOURCE
    };
    const proceed = () => {
      this.subscribingToPlan = true;
      const request$ = hasActive ? this._plansService.upgradeClientPlan(body) : this._plansService.postClientPlan(body);
      request$.subscribe({
        next: (session) => {
          const url = session?.data?.url || session?.url;
          if (url) {
            window.location.href = url;
            return;
          }
          this.subscribingToPlan = false;
          this._snackBar.open(this._translocoService.translate("humanAuthnPlans.checkoutNoPrice"), void 0, {
            duration: 4e3
          });
        },
        error: () => {
          this.subscribingToPlan = false;
          this._snackBar.open(this._translocoService.translate("humanAuthnPlans.checkoutError"), void 0, {
            duration: 4e3
          });
          this._changeDetectorRef.markForCheck();
        }
      });
    };
    if (this.selectedPlan === "free" || !hasActive) {
      proceed();
      return;
    }
    this._dialog.open(HumanAuthnVolumeConfirmDialogComponent, {
      data: { quantity, monthlyTotal: this.monthlyTotal(this.selectedPlan) }
    }).afterClosed().subscribe((ok) => {
      if (ok)
        proceed();
    });
  }
  static {
    this.\u0275fac = function HumanAuthnPlansComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HumanAuthnPlansComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HumanAuthnPlansComponent, selectors: [["human-authn-plans"]], decls: 1, vars: 0, consts: [[4, "transloco"], [1, "plans-container", "w-full", "flex", "justify-center"], [1, "w-full", "max-w-4xl", "px-4", "sm:px-8", "py-8"], [1, "current-plan-header", "flex", "items-center", "gap-4", "mb-8"], ["class", "back-button", "mat-icon-button", "", "type", "button", 3, "click", 4, "ngIf"], [1, "header-icon"], [1, "current-plan-title"], [1, "current-plan-subtitle"], [4, "ngIf"], ["mat-icon-button", "", "type", "button", 1, "back-button", 3, "click"], [4, "ngFor", "ngForOf"], [1, "upgrade-section", "animate-fadeIn"], [1, "upgrade-header"], [1, "upgrade-header-content"], [1, "upgrade-badge"], [1, "upgrade-headline"], [1, "upgrade-subheadline"], [1, "upgrade-illustration"], [1, "floating-icon", "icon-1"], [1, "floating-icon", "icon-2"], [1, "floating-icon", "icon-3"], [1, "upgrade-benefits"], [1, "benefit-item"], [1, "benefit-icon"], [1, "benefit-text"], [1, "benefit-title"], [1, "benefit-desc"], [1, "upgrade-cta"], ["mat-flat-button", "", "type", "button", 1, "upgrade-button", 3, "click"], [1, "upgrade-hint"], [1, "plan-card", "mb-6", "animate-fadeIn"], [1, "card-header"], [1, "flex", "items-center", "gap-3"], [1, "card-icon", 3, "ngClass"], [1, "text-sm", "text-gray-500"], [1, "font-semibold", "text-gray-900", "text-lg"], [1, "status-badge", 3, "ngClass"], [1, "status-dot"], ["class", "payment-alert", 4, "ngIf"], [1, "card-body"], [1, "price-section"], [1, "price-label"], [1, "price-amount"], [1, "price-currency"], [1, "price-period"], [1, "payment-method"], [1, "features-grid"], [1, "feature-card"], [1, "feature-icon", "biometrics"], [1, "feature-content"], [1, "feature-label"], [1, "feature-value"], [1, "feature-status"], [1, "feature-icon", "email"], [1, "feature-icon", "whitelabel"], [1, "feature-status", "active"], [1, "feature-icon", "api"], [1, "optional-section"], [1, "optional-title"], [1, "optional-subtitle"], [1, "optional-grid"], [1, "optional-card"], [1, "optional-icon", "sms"], [1, "optional-content"], [1, "optional-label"], [1, "optional-value"], [1, "optional-icon", "whatsapp"], [1, "card-actions"], ["mat-flat-button", "", "type", "button", 1, "action-button", "primary", 3, "click"], [1, "payment-alert"], [1, "text-red-500"], [1, "payment-icon", "link"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 72 24", "fill", "none", 1, "h-6", "w-16"], ["fill", "currentColor", "d", "M36.12 3.67683c0-1.12801.9504-2.04481 2.0688-2.04481 1.1184 0 2.0688.9216 2.0688 2.04481 0 1.1232-.9168 2.0688-2.0688 2.0688-1.152 0-2.0688-.9168-2.0688-2.0688ZM29.9808 1.92001h3.6V22.08h-3.6V1.92001ZM40.008 7.68001h-3.6288V22.08h3.6288V7.68001ZM66.096 14.3904c2.7312-1.68 4.5888-4.1808 5.3232-6.71516h-3.6288c-.9456 2.41916-3.1152 4.23836-5.5008 5.01116V1.91523h-3.6288V22.0752h3.6288V16.08c2.7696.6912 4.9584 3.0864 5.7072 5.9952h3.6528c-.5568-3.0528-2.6448-5.9088-5.5536-7.6848ZM46.44 9.29283c.9504-1.2624 2.8032-1.99681 4.3056-1.99681 2.8032 0 5.1216 2.04961 5.1264 5.14558v9.6336h-3.6288v-8.832c0-1.272-.5664-2.7408-2.4048-2.7408-2.16 0-3.4032 1.9152-3.4032 4.1568v7.4256h-3.6288V7.68962H46.44v1.60321Z"], ["fill", "#00D66F", "d", "M12 24c6.6274 0 12-5.3726 12-12 0-6.62743-5.3726-12-12-12C5.37259 0 0 5.37257 0 12c0 6.6274 5.37259 12 12 12Z"], ["fill", "#011e0f", "d", "M11.4479 4.80005H7.74707c.72 3.0096 2.82243 5.58235 5.45283 7.19995-2.6352 1.6176-4.73283 4.1904-5.45283 7.2h3.70083c.9168-2.784 3.456-5.2032 6.576-5.6976v-3.0095c-3.1248-.4896-5.664-2.90885-6.576-5.69285Z"], [1, "payment-text"], ["alt", "card", 1, "h-8", "w-12", "object-contain", 3, "src"], [1, "payment-details"], [1, "payment-expiry"], [1, "text-gray-400"], [1, "payment-text", "text-gray-500"], [1, "mb-6"], [1, "text-2xl", "font-semibold", "text-gray-900"], [1, "text-gray-500", "mt-1"], [1, "plans-grid"], [1, "select-plan-card", "animate-fadeIn"], ["class", "current-plan-badge", 4, "ngIf"], [1, "plan-badge", "plus"], [1, "plan-pricing"], [1, "plan-price"], [1, "plan-period"], [1, "plan-range"], [1, "plan-features"], [1, "plan-stat"], [1, "stat-label"], [1, "stat-value"], [1, "plan-includes"], [1, "includes-title"], [1, "includes-list"], ["mat-flat-button", "", "type", "button", 1, "select-button", "plus", 3, "click"], [1, "select-plan-card", "featured", "animate-fadeIn"], ["class", "current-plan-badge current-plan-badge--offset", 4, "ngIf"], [1, "featured-badge"], [1, "plan-badge", "business"], ["mat-flat-button", "", "type", "button", 1, "select-button", "business", 3, "click"], [1, "plan-badge", "enterprise"], [1, "plan-price", "custom"], ["mat-flat-button", "", "type", "button", 1, "select-button", "enterprise", 3, "click"], [1, "select-plan-card", "free-plan-card", "animate-fadeIn", "mt-6"], [1, "plan-badge", "free"], ["mat-stroked-button", "", "type", "button", 1, "select-button", "free", 3, "click"], [1, "current-plan-badge"], [1, "current-plan-badge", "current-plan-badge--offset"], ["class", "landing-slider-section animate-fadeIn", 4, "ngIf"], [1, "checkout-card", "animate-fadeIn", 3, "ngClass"], [1, "checkout-header", 3, "ngClass"], [1, "checkout-plan-info"], [1, "checkout-badge", 3, "ngClass"], [1, "checkout-plan-type"], [1, "checkout-price"], [1, "price-value"], [1, "checkout-stats"], [1, "stat-item"], [1, "stat-divider"], [1, "checkout-actions"], ["mat-flat-button", "", "type", "button", 1, "checkout-button", 3, "click", "disabled", "ngClass"], ["diameter", "20", "class", "mr-2", 4, "ngIf"], [1, "landing-slider-section", "animate-fadeIn"], [1, "landing-slider-title"], [1, "landing-slider-subtitle"], [1, "landing-slider-track"], [1, "track-label"], [1, "track-slider"], [1, "range-slider", "range-slider--dotted"], ["type", "range", 1, "range-slider__input", 3, "ngModelChange", "max", "min", "ngModel"], [1, "landing-slider-pill"], ["diameter", "20", 1, "mr-2"]], template: function HumanAuthnPlansComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, HumanAuthnPlansComponent_ng_container_0_Template, 16, 6, "ng-container", 0);
      }
    }, dependencies: [
      CommonModule,
      NgClass,
      NgForOf,
      NgIf,
      DecimalPipe,
      CurrencyPipe,
      DatePipe,
      FormsModule,
      DefaultValueAccessor,
      RangeValueAccessor,
      NgControlStatus,
      NgModel,
      RouterModule,
      TranslocoModule,
      TranslocoDirective,
      MatButtonModule,
      MatButton,
      MatIconButton,
      MatIconModule,
      MatIcon,
      MatProgressSpinnerModule,
      MatProgressSpinner
    ], styles: ['\n\n[_nghost-%COMP%] {\n  width: 100%;\n  display: block;\n}\n.plans-container[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 64px);\n  background:\n    linear-gradient(\n      180deg,\n      #f8fafc 0%,\n      #ffffff 100%);\n}\n.current-plan-header[_ngcontent-%COMP%]   .current-plan-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #0f0f2d;\n  margin: 0;\n  letter-spacing: -0.02em;\n}\n.current-plan-header[_ngcontent-%COMP%]   .current-plan-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #6b7280;\n  margin: 4px 0 0;\n}\n.back-button[_ngcontent-%COMP%] {\n  color: #2b3af0;\n  transition: all 0.2s ease;\n}\n.back-button[_ngcontent-%COMP%]:hover {\n  background: rgba(43, 58, 240, 0.06);\n  transform: translateX(-2px);\n}\n.header-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  min-width: 48px;\n  min-height: 48px;\n  flex-shrink: 0;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #2b3af0 0%,\n      #4f5af6 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 4px 14px rgba(43, 58, 240, 0.25);\n}\n.header-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 24px;\n  width: 24px;\n  height: 24px;\n  min-width: 24px;\n  min-height: 24px;\n  flex-shrink: 0;\n  line-height: 24px;\n}\n.plan-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 20px;\n  border: 1px solid #e5e7eb;\n  overflow: hidden;\n  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.04);\n  transition: all 0.3s ease;\n}\n.plan-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);\n}\n.plan-card.payment-failed[_ngcontent-%COMP%] {\n  border-color: #fecaca;\n}\n.card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  background:\n    linear-gradient(\n      135deg,\n      #f3f4f6 0%,\n      #f5f5f5 100%);\n  border-bottom: 1px solid #e5e7eb;\n}\n@media (max-width: 640px) {\n  .card-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 12px;\n  }\n}\n.card-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease;\n}\n.card-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 22px;\n  width: 22px;\n  height: 22px;\n}\n.card-icon.free[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #6b7280 0%,\n      #9ca3af 100%);\n  box-shadow: 0 2px 8px rgba(107, 114, 128, 0.3);\n}\n.card-icon.plus[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #2b3af0 0%,\n      #4f5af6 100%);\n  box-shadow: 0 2px 8px rgba(43, 58, 240, 0.3);\n}\n.card-icon.business[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #0f0f2d 0%,\n      #1a1a4a 100%);\n  box-shadow: 0 2px 8px rgba(15, 15, 45, 0.3);\n}\n.card-icon.enterprise[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #1f2937 0%,\n      #374151 100%);\n  box-shadow: 0 2px 8px rgba(31, 41, 55, 0.3);\n}\n.status-badge[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  font-weight: 500;\n  padding: 6px 14px;\n  border-radius: 20px;\n}\n.status-badge.success[_ngcontent-%COMP%] {\n  color: #2b3af0;\n  background: rgba(43, 58, 240, 0.06);\n}\n.status-badge.success[_ngcontent-%COMP%]   .status-dot[_ngcontent-%COMP%] {\n  background: #2b3af0;\n}\n.status-badge.warning[_ngcontent-%COMP%] {\n  color: #f59e0b;\n  background: rgba(245, 158, 11, 0.1);\n}\n.status-badge.warning[_ngcontent-%COMP%]   .status-dot[_ngcontent-%COMP%] {\n  background: #f59e0b;\n}\n.status-badge.error[_ngcontent-%COMP%] {\n  color: #ef4444;\n  background: rgba(239, 68, 68, 0.1);\n}\n.status-badge.error[_ngcontent-%COMP%]   .status-dot[_ngcontent-%COMP%] {\n  background: #ef4444;\n}\n.status-badge[_ngcontent-%COMP%]   .status-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_pulse 2s infinite;\n}\n.payment-alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px 24px;\n  background:\n    linear-gradient(\n      135deg,\n      #fef2f2 0%,\n      #fee2e2 100%);\n  border-bottom: 1px solid #fecaca;\n  font-size: 14px;\n  color: #dc2626;\n  font-weight: 500;\n}\n.card-body[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.price-section[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 24px;\n  background:\n    linear-gradient(\n      135deg,\n      #f3f4f6 0%,\n      #e5e7eb 100%);\n  border-radius: 16px;\n  margin-bottom: 24px;\n}\n.price-section[_ngcontent-%COMP%]   .price-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6b7280;\n  font-weight: 500;\n  margin-bottom: 8px;\n}\n.price-section[_ngcontent-%COMP%]   .price-amount[_ngcontent-%COMP%] {\n  font-size: 42px;\n  font-weight: 700;\n  color: #0f0f2d;\n  line-height: 1;\n}\n.price-section[_ngcontent-%COMP%]   .price-amount[_ngcontent-%COMP%]   .price-currency[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 500;\n  color: #6b7280;\n}\n.price-section[_ngcontent-%COMP%]   .price-period[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6b7280;\n  margin-top: 8px;\n}\n.payment-method[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 16px;\n  background: #f9fafb;\n  border-radius: 12px;\n  margin-bottom: 24px;\n}\n.payment-method[_ngcontent-%COMP%]   .payment-icon.link[_ngcontent-%COMP%] {\n  color: #1f2937;\n}\n.payment-method[_ngcontent-%COMP%]   .payment-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.payment-method[_ngcontent-%COMP%]   .payment-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #374151;\n}\n.payment-method[_ngcontent-%COMP%]   .payment-expiry[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6b7280;\n}\n.usage-dashboard[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.usage-period[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n  padding: 14px 16px;\n  background: rgba(43, 58, 240, 0.06);\n  border: 1px solid rgba(43, 58, 240, 0.12);\n  border-radius: 12px;\n}\n@media (max-width: 640px) {\n  .usage-period[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 6px;\n  }\n}\n.usage-period__title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  font-weight: 700;\n  color: #0f0f2d;\n}\n.usage-period__reset[_ngcontent-%COMP%] {\n  margin: 2px 0 0;\n  font-size: 13px;\n  font-weight: 600;\n  color: #2b3af0;\n}\n.usage-period__date[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 12px;\n  color: #6b7280;\n  text-align: right;\n}\n@media (max-width: 640px) {\n  .usage-period__date[_ngcontent-%COMP%] {\n    text-align: left;\n  }\n}\n.usage-gauges[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 16px;\n}\n@media (max-width: 640px) {\n  .usage-gauges[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.usage-bars[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  padding: 16px;\n  background: #ffffff;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n}\n.features-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 16px;\n  margin-bottom: 24px;\n}\n@media (max-width: 640px) {\n  .features-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.feature-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px;\n  background: #ffffff;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  transition: all 0.2s ease;\n}\n.feature-card[_ngcontent-%COMP%]:hover {\n  border-color: #d1d5db;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);\n}\n.feature-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.feature-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.feature-icon.email[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(43, 58, 240, 0.12) 0%,\n      rgba(79, 90, 246, 0.12) 100%);\n  color: #2b3af0;\n}\n.feature-icon.whitelabel[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(15, 15, 45, 0.08) 0%,\n      rgba(15, 15, 45, 0.12) 100%);\n  color: #0f0f2d;\n}\n.feature-icon.biometrics[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(43, 58, 240, 0.08) 0%,\n      rgba(43, 58, 240, 0.15) 100%);\n  color: #2b3af0;\n}\n.feature-icon.api[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(79, 90, 246, 0.08) 0%,\n      rgba(79, 90, 246, 0.15) 100%);\n  color: #4f5af6;\n}\n.feature-content[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.feature-content[_ngcontent-%COMP%]   .feature-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6b7280;\n}\n.feature-content[_ngcontent-%COMP%]   .feature-value[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 600;\n  color: #111827;\n}\n.feature-status[_ngcontent-%COMP%] {\n  font-size: 20px !important;\n  width: 20px !important;\n  height: 20px !important;\n  color: #d1d5db;\n}\n.feature-status.active[_ngcontent-%COMP%] {\n  color: #2b3af0;\n}\n.optional-section[_ngcontent-%COMP%] {\n  padding: 20px;\n  background: #f9fafb;\n  border-radius: 16px;\n  margin-bottom: 24px;\n}\n.optional-section[_ngcontent-%COMP%]   .optional-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #111827;\n  margin-bottom: 4px;\n}\n.optional-section[_ngcontent-%COMP%]   .optional-subtitle[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6b7280;\n  margin-bottom: 16px;\n}\n.optional-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 12px;\n}\n@media (max-width: 640px) {\n  .optional-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.optional-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 12px;\n  padding: 14px;\n  background: #ffffff;\n  border: 1px solid #e5e7eb;\n  border-radius: 10px;\n}\n.optional-icon[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.optional-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.optional-icon.sms[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(43, 58, 240, 0.08) 0%,\n      rgba(43, 58, 240, 0.15) 100%);\n  color: #2b3af0;\n}\n.optional-icon.whatsapp[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(79, 90, 246, 0.08) 0%,\n      rgba(79, 90, 246, 0.15) 100%);\n  color: #4f5af6;\n}\n.optional-content[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 100px;\n}\n.optional-content[_ngcontent-%COMP%]   .optional-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 13px;\n  font-weight: 500;\n  color: #374151;\n}\n.optional-content[_ngcontent-%COMP%]   .optional-value[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11px;\n  color: #9ca3af;\n}\n.optional-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 12px;\n  font-weight: 500;\n  color: #2b3af0;\n  text-decoration: none;\n  transition: color 0.2s ease;\n}\n.optional-link[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.optional-link[_ngcontent-%COMP%]:hover {\n  color: #0f0f2d;\n}\n.card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.action-button[_ngcontent-%COMP%] {\n  border-radius: 50px;\n  padding: 12px 32px;\n  font-weight: 500;\n  font-size: 15px;\n  transition: all 0.2s ease;\n}\n.action-button.primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #2b3af0 0%,\n      #0f0f2d 100%);\n  color: white;\n  box-shadow: 0 4px 14px rgba(43, 58, 240, 0.3);\n}\n.action-button.primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(43, 58, 240, 0.4);\n}\n.action-button.primary.error[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ef4444 0%,\n      #dc2626 100%);\n  box-shadow: 0 4px 14px rgba(239, 68, 68, 0.3);\n}\n.action-button.secondary[_ngcontent-%COMP%] {\n  border-color: #2b3af0;\n  color: #2b3af0;\n}\n.action-button.secondary[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  transition: transform 0.2s ease;\n}\n.action-button.secondary[_ngcontent-%COMP%]:hover {\n  background: rgba(43, 58, 240, 0.06);\n}\n.action-button.secondary[_ngcontent-%COMP%]:hover   mat-icon[_ngcontent-%COMP%] {\n  transform: translateX(4px);\n}\n.upgrade-section[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #0f0f2d 0%,\n      #1a1a4a 50%,\n      #0f0f2d 100%);\n  border-radius: 24px;\n  overflow: hidden;\n  position: relative;\n}\n.upgrade-section[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background-image:\n    radial-gradient(\n      circle at 1px 1px,\n      rgba(255, 255, 255, 0.03) 1px,\n      transparent 0);\n  background-size: 24px 24px;\n  pointer-events: none;\n}\n.upgrade-section[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: -50%;\n  right: -20%;\n  width: 60%;\n  height: 200%;\n  background:\n    radial-gradient(\n      ellipse,\n      rgba(43, 58, 240, 0.15) 0%,\n      transparent 70%);\n  pointer-events: none;\n}\n.upgrade-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  padding: 32px 32px 24px;\n  position: relative;\n  z-index: 1;\n}\n@media (max-width: 640px) {\n  .upgrade-header[_ngcontent-%COMP%] {\n    padding: 24px 20px 16px;\n  }\n}\n.upgrade-header-content[_ngcontent-%COMP%] {\n  flex: 1;\n  max-width: 480px;\n}\n.upgrade-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 12px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(43, 58, 240, 0.2) 0%,\n      rgba(79, 90, 246, 0.2) 100%);\n  border: 1px solid rgba(43, 58, 240, 0.3);\n  border-radius: 20px;\n  margin-bottom: 16px;\n}\n.upgrade-badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n  color: white;\n}\n.upgrade-badge[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: white;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.upgrade-headline[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  color: #ffffff;\n  margin-bottom: 8px;\n  line-height: 1.2;\n}\n@media (max-width: 640px) {\n  .upgrade-headline[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n}\n.upgrade-subheadline[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #94a3b8;\n  line-height: 1.5;\n  margin: 0;\n}\n.upgrade-illustration[_ngcontent-%COMP%] {\n  position: relative;\n  width: 120px;\n  height: 100px;\n  flex-shrink: 0;\n}\n@media (max-width: 768px) {\n  .upgrade-illustration[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.floating-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 12px;\n  animation: _ngcontent-%COMP%_float 3s ease-in-out infinite;\n}\n.floating-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.floating-icon.icon-1[_ngcontent-%COMP%] {\n  top: 0;\n  left: 20px;\n  width: 44px;\n  height: 44px;\n  background:\n    linear-gradient(\n      135deg,\n      #2b3af0 0%,\n      #0f0f2d 100%);\n  box-shadow: 0 8px 24px rgba(43, 58, 240, 0.4);\n}\n.floating-icon.icon-1[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: white;\n}\n.floating-icon.icon-2[_ngcontent-%COMP%] {\n  top: 30px;\n  right: 0;\n  width: 40px;\n  height: 40px;\n  background:\n    linear-gradient(\n      135deg,\n      #4f5af6 0%,\n      #2b3af0 100%);\n  box-shadow: 0 8px 24px rgba(79, 90, 246, 0.4);\n  animation-delay: 0.5s;\n}\n.floating-icon.icon-2[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: white;\n}\n.floating-icon.icon-3[_ngcontent-%COMP%] {\n  bottom: 0;\n  left: 40px;\n  width: 36px;\n  height: 36px;\n  background:\n    linear-gradient(\n      135deg,\n      #0f0f2d 0%,\n      #1a1a4a 100%);\n  box-shadow: 0 8px 24px rgba(15, 15, 45, 0.4);\n  animation-delay: 1s;\n}\n.floating-icon.icon-3[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n@keyframes _ngcontent-%COMP%_float {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-8px);\n  }\n}\n.upgrade-benefits[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n  padding: 0 32px 24px;\n  position: relative;\n  z-index: 1;\n}\n@media (max-width: 768px) {\n  .upgrade-benefits[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 12px;\n    padding: 0 20px 20px;\n  }\n}\n.benefit-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 16px;\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  border-radius: 12px;\n  transition: all 0.2s ease;\n}\n.benefit-item[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.05);\n  border-color: rgba(255, 255, 255, 0.1);\n}\n.benefit-icon[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  background: rgba(43, 58, 240, 0.15);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.benefit-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: #4f5af6;\n}\n.benefit-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.benefit-text[_ngcontent-%COMP%]   .benefit-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #ffffff;\n}\n.benefit-text[_ngcontent-%COMP%]   .benefit-desc[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #64748b;\n  line-height: 1.4;\n}\n.upgrade-cta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 24px 32px 32px;\n  position: relative;\n  z-index: 1;\n}\n@media (max-width: 640px) {\n  .upgrade-cta[_ngcontent-%COMP%] {\n    flex-direction: column;\n    padding: 20px;\n    gap: 12px;\n  }\n}\n.upgrade-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 14px 28px !important;\n  background:\n    linear-gradient(\n      135deg,\n      #2b3af0 0%,\n      #0f0f2d 100%) !important;\n  border: none !important;\n  border-radius: 50px !important;\n  font-size: 15px !important;\n  font-weight: 600 !important;\n  color: white !important;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  box-shadow: 0 4px 16px rgba(43, 58, 240, 0.4);\n}\n.upgrade-button[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(43, 58, 240, 0.5);\n}\n.upgrade-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  transition: transform 0.2s ease;\n}\n.upgrade-button[_ngcontent-%COMP%]:hover   mat-icon[_ngcontent-%COMP%] {\n  transform: translateX(4px);\n}\n@media (max-width: 640px) {\n  .upgrade-button[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n}\n.upgrade-hint[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #64748b;\n}\n@media (max-width: 640px) {\n  .upgrade-hint[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n.plans-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 24px;\n  margin-bottom: 24px;\n}\n@media (max-width: 1024px) {\n  .plans-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 640px) {\n  .plans-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.select-plan-card[_ngcontent-%COMP%] {\n  position: relative;\n  background: #ffffff;\n  border: 1px solid #e5e7eb;\n  border-radius: 20px;\n  padding: 24px;\n  transition: all 0.3s ease;\n  display: flex;\n  flex-direction: column;\n}\n.select-plan-card[_ngcontent-%COMP%]:hover {\n  border-color: #d1d5db;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);\n  transform: translateY(-4px);\n}\n.select-plan-card.featured[_ngcontent-%COMP%] {\n  border: 2px solid #2b3af0;\n  box-shadow: 0 8px 32px rgba(43, 58, 240, 0.15);\n}\n.select-plan-card.featured[_ngcontent-%COMP%]   .featured-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -12px;\n  left: 50%;\n  transform: translateX(-50%);\n  background:\n    linear-gradient(\n      135deg,\n      #2b3af0 0%,\n      #0f0f2d 100%);\n  color: white;\n  font-size: 11px;\n  font-weight: 600;\n  padding: 4px 12px;\n  border-radius: 20px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.select-plan-card--current[_ngcontent-%COMP%] {\n  border: 2px solid #059669;\n  box-shadow: 0 8px 28px rgba(5, 150, 105, 0.14);\n}\n.select-plan-card--current.featured[_ngcontent-%COMP%] {\n  border: 2px solid #059669;\n  box-shadow: 0 8px 28px rgba(5, 150, 105, 0.18);\n}\n.current-plan-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -12px;\n  left: 16px;\n  z-index: 2;\n  background:\n    linear-gradient(\n      135deg,\n      #059669 0%,\n      #047857 100%);\n  color: white;\n  font-size: 11px;\n  font-weight: 600;\n  padding: 4px 12px;\n  border-radius: 20px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  box-shadow: 0 2px 8px rgba(5, 150, 105, 0.35);\n}\n.current-plan-badge--offset[_ngcontent-%COMP%] {\n  top: 22px;\n  left: 12px;\n}\n.plan-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 6px 14px;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 600;\n  margin-bottom: 16px;\n  width: fit-content;\n}\n.plan-badge.free[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f3f4f6 0%,\n      #e5e7eb 100%);\n  color: #6b7280;\n}\n.plan-badge.plus[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(43, 58, 240, 0.08) 0%,\n      rgba(43, 58, 240, 0.15) 100%);\n  color: #2b3af0;\n}\n.plan-badge.business[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(15, 15, 45, 0.08) 0%,\n      rgba(15, 15, 45, 0.15) 100%);\n  color: #0f0f2d;\n}\n.plan-badge.enterprise[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #1f2937 0%,\n      #374151 100%);\n  color: white;\n}\n.plan-pricing[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.plan-pricing[_ngcontent-%COMP%]   .plan-price[_ngcontent-%COMP%] {\n  font-size: 36px;\n  font-weight: 700;\n  color: #111827;\n}\n.plan-pricing[_ngcontent-%COMP%]   .plan-price.custom[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.plan-pricing[_ngcontent-%COMP%]   .plan-period[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #6b7280;\n  font-weight: 400;\n}\n.plan-range[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6b7280;\n  margin-bottom: 20px;\n}\n.plan-features[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  padding: 16px 0;\n  border-top: 1px solid #e5e7eb;\n  border-bottom: 1px solid #e5e7eb;\n  margin-bottom: 20px;\n}\n@media (max-width: 480px) {\n  .plan-features[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 12px;\n  }\n}\n.plan-stat[_ngcontent-%COMP%] {\n  flex: 1;\n  text-align: center;\n}\n.plan-stat[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11px;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 4px;\n}\n.plan-stat[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  font-weight: 600;\n  color: #374151;\n}\n.plan-includes[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-bottom: 20px;\n}\n.plan-includes[_ngcontent-%COMP%]   .includes-title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #374151;\n  margin-bottom: 12px;\n}\n.plan-includes[_ngcontent-%COMP%]   .includes-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.plan-includes[_ngcontent-%COMP%]   .includes-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  color: #6b7280;\n  padding: 6px 0;\n}\n.plan-includes[_ngcontent-%COMP%]   .includes-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n  color: #2b3af0;\n}\n.select-button[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 50px;\n  padding: 14px;\n  font-weight: 600;\n  font-size: 14px;\n  transition: all 0.2s ease;\n  margin-top: auto;\n}\n.select-button.free[_ngcontent-%COMP%] {\n  border-color: #6b7280;\n  color: #6b7280;\n}\n.select-button.free[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n.select-button.free[_ngcontent-%COMP%]:hover {\n  background: rgba(107, 114, 128, 0.05);\n}\n.select-button.plus[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #2b3af0 0%,\n      #4f5af6 100%);\n  color: white;\n}\n.select-button.plus[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 14px rgba(43, 58, 240, 0.4);\n  transform: translateY(-2px);\n}\n.select-button.business[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #0f0f2d 0%,\n      #1a1a4a 100%);\n  color: white;\n}\n.select-button.business[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 14px rgba(15, 15, 45, 0.4);\n  transform: translateY(-2px);\n}\n.select-button.enterprise[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #1f2937 0%,\n      #111827 100%);\n  color: white;\n}\n.select-button.enterprise[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 14px rgba(31, 41, 55, 0.4);\n  transform: translateY(-2px);\n}\n.free-plan-card[_ngcontent-%COMP%] {\n  border: 1px solid rgba(107, 114, 128, 0.2);\n  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);\n}\n.free-plan-card[_ngcontent-%COMP%]:hover {\n  border-color: rgba(107, 114, 128, 0.35);\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);\n}\n.free-plan-card[_ngcontent-%COMP%]   .plan-badge.free[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f3f4f6 0%,\n      #e5e7eb 100%);\n  color: #6b7280;\n}\n.free-plan-card[_ngcontent-%COMP%]   .plan-price[_ngcontent-%COMP%] {\n  color: #0f0f2d;\n}\n.free-plan-card[_ngcontent-%COMP%]   .plan-period[_ngcontent-%COMP%] {\n  color: #6b7280;\n}\n.free-plan-card[_ngcontent-%COMP%]   .plan-range[_ngcontent-%COMP%] {\n  color: #6b7280;\n}\n.free-plan-desc[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6b7280;\n  line-height: 1.5;\n  margin: 0 0 20px;\n}\n.free-plan-desc[_ngcontent-%COMP%]     .font-semibold, \n.free-plan-desc[_ngcontent-%COMP%]     b {\n  color: #2b3af0;\n  font-weight: 600;\n}\n.free-plan-desc[_ngcontent-%COMP%]     .text-verifik-vivid-blue {\n  color: #2b3af0 !important;\n}\n.slider-section[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.slider-section[_ngcontent-%COMP%]   .slider-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: #111827;\n  text-align: center;\n  margin-bottom: 32px;\n}\n.selected-plan-card[_ngcontent-%COMP%] {\n  display: flex;\n  background: #ffffff;\n  border: 1px solid #e5e7eb;\n  border-radius: 20px;\n  overflow: hidden;\n  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);\n}\n@media (max-width: 768px) {\n  .selected-plan-card[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.selected-plan-left[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1;\n  padding: 32px;\n  display: flex;\n  flex-direction: column;\n}\n.selected-plan-left[_ngcontent-%COMP%]   .close-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 16px;\n  left: 16px;\n  color: #6b7280;\n}\n.selected-plan-left[_ngcontent-%COMP%]   .close-button[_ngcontent-%COMP%]:hover {\n  background: rgba(107, 114, 128, 0.1);\n}\n.selected-pricing[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 24px 0;\n}\n.selected-pricing[_ngcontent-%COMP%]   .pricing-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6b7280;\n  margin-bottom: 8px;\n}\n.selected-pricing[_ngcontent-%COMP%]   .pricing-amount[_ngcontent-%COMP%] {\n  font-size: 36px;\n  font-weight: 700;\n  color: #0f0f2d;\n}\n.selected-pricing[_ngcontent-%COMP%]   .pricing-amount[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 400;\n  color: #6b7280;\n}\n.selected-pricing[_ngcontent-%COMP%]   .pricing-enrolls[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #2b3af0;\n  margin-top: 8px;\n}\n.selected-stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  padding: 16px;\n  background: #f9fafb;\n  border-radius: 12px;\n  margin-bottom: 24px;\n}\n.selected-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%] {\n  flex: 1;\n  text-align: center;\n}\n.selected-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11px;\n  color: #9ca3af;\n  text-transform: uppercase;\n  margin-bottom: 4px;\n}\n.selected-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  font-weight: 600;\n  color: #374151;\n}\n.selected-includes[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.selected-includes[_ngcontent-%COMP%]   .includes-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #374151;\n  margin-bottom: 12px;\n}\n.selected-includes[_ngcontent-%COMP%]   .includes-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.selected-includes[_ngcontent-%COMP%]   .includes-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 14px;\n  color: #6b7280;\n  padding: 8px 0;\n}\n.selected-includes[_ngcontent-%COMP%]   .includes-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: #2b3af0;\n}\n.purchase-button[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 50px;\n  padding: 16px;\n  font-weight: 600;\n  font-size: 15px;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease;\n  margin-top: auto;\n}\n.purchase-button.free[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #6b7280 0%,\n      #4b5563 100%);\n}\n.purchase-button.plus[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #2b3af0 0%,\n      #4f5af6 100%);\n}\n.purchase-button.business[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #0f0f2d 0%,\n      #1a1a4a 100%);\n}\n.purchase-button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(43, 58, 240, 0.25);\n}\n.purchase-button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.purchase-button[_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n.selected-plan-right[_ngcontent-%COMP%] {\n  flex: 1.2;\n  border-left: 1px solid #e5e7eb;\n  display: flex;\n  flex-direction: column;\n}\n@media (max-width: 768px) {\n  .selected-plan-right[_ngcontent-%COMP%] {\n    border-left: none;\n    border-top: 1px solid #e5e7eb;\n  }\n}\n.plan-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 160px;\n  object-fit: cover;\n  background:\n    linear-gradient(\n      135deg,\n      #2b3af0 0%,\n      #0f0f2d 100%);\n}\n.plan-description[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.plan-description[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: #111827;\n  margin-bottom: 12px;\n}\n.plan-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6b7280;\n  line-height: 1.6;\n}\n.features-table[_ngcontent-%COMP%] {\n  padding: 0 24px;\n  flex: 1;\n}\n.features-table[_ngcontent-%COMP%]   .table-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 12px 16px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(43, 58, 240, 0.08) 0%,\n      rgba(43, 58, 240, 0.12) 100%);\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 600;\n  color: #2b3af0;\n  margin-bottom: 8px;\n}\n.features-table[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 12px 16px;\n  border-bottom: 1px solid #f3f4f6;\n  font-size: 14px;\n}\n.features-table[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  color: #374151;\n}\n.features-table[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   .table-value[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #2b3af0;\n}\n.plan-footer[_ngcontent-%COMP%] {\n  padding: 24px;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n}\n.plan-footer[_ngcontent-%COMP%]   .pricing-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 20px;\n  background: #2b3af0;\n  color: white;\n  border-radius: 50px;\n  font-size: 13px;\n  font-weight: 500;\n  text-decoration: none;\n  transition: all 0.2s ease;\n}\n.plan-footer[_ngcontent-%COMP%]   .pricing-link[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.plan-footer[_ngcontent-%COMP%]   .pricing-link[_ngcontent-%COMP%]:hover {\n  background: #0f0f2d;\n}\n.plan-footer[_ngcontent-%COMP%]   .terms-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.plan-footer[_ngcontent-%COMP%]   .terms-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #6b7280;\n  text-decoration: none;\n}\n.plan-footer[_ngcontent-%COMP%]   .terms-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.range-slider[_ngcontent-%COMP%] {\n  position: relative;\n  height: 30px;\n  margin: 40px 0;\n}\n.range-slider[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 9px;\n  left: 0;\n  height: 12px;\n  width: var(--track-fill-percentage, 0%);\n  background:\n    linear-gradient(\n      90deg,\n      #2b3af0 0%,\n      #4f5af6 100%);\n  border-radius: 6px;\n  transition: width 0.1s ease;\n  z-index: 0;\n}\n.range-slider__dots[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  left: 0;\n  position: absolute;\n  top: 10px;\n  width: 100%;\n  z-index: -1;\n  padding: 0 15px;\n}\n.range-slider__dot[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: #2b3af0;\n  border-radius: 50%;\n  display: block;\n  height: 10px;\n  width: 10px;\n}\n.range-slider__value[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -36px;\n  left: 50%;\n  transform: translateX(-50%);\n  height: 20px;\n  white-space: nowrap;\n  font-size: 12px;\n  font-weight: 500;\n  color: #6b7280;\n}\n.range-slider__input[_ngcontent-%COMP%] {\n  appearance: none;\n  background-color: transparent;\n  height: 30px;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n}\n.range-slider__input[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.range-slider__input[_ngcontent-%COMP%]::-webkit-slider-runnable-track {\n  background-color: #e5e7eb;\n  cursor: pointer;\n  height: 12px;\n  width: 100%;\n  border-radius: 6px;\n}\n.range-slider__input[_ngcontent-%COMP%]::-webkit-slider-thumb {\n  appearance: none;\n  background: #2b3af0;\n  border-radius: 50%;\n  border: 2px solid white;\n  box-shadow: 0 0 0 4px white, 0 2px 8px rgba(0, 0, 0, 0.15);\n  cursor: pointer;\n  height: 30px;\n  margin-top: -9px;\n  width: 30px;\n  z-index: 2;\n  position: relative;\n  transition: transform 0.1s ease;\n}\n.range-slider__input[_ngcontent-%COMP%]::-webkit-slider-thumb:hover {\n  transform: scale(1.1);\n}\n.range-slider__input[_ngcontent-%COMP%]::-moz-range-track {\n  width: 100%;\n  height: 12px;\n  cursor: pointer;\n  border-radius: 6px;\n  background-color: #e5e7eb;\n}\n.range-slider__input[_ngcontent-%COMP%]::-moz-range-thumb {\n  appearance: none;\n  background: #2b3af0;\n  border-radius: 50%;\n  border: 2px solid white;\n  box-shadow: 0 0 0 4px white, 0 2px 8px rgba(0, 0, 0, 0.15);\n  cursor: pointer;\n  height: 30px;\n  width: 30px;\n}\n.landing-slider-section[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(43, 58, 240, 0.04) 0%,\n      rgba(79, 90, 246, 0.06) 100%);\n  border: 1px solid rgba(43, 58, 240, 0.12);\n  border-radius: 20px;\n  padding: 32px;\n  margin-bottom: 24px;\n  text-align: center;\n}\n@media (max-width: 640px) {\n  .landing-slider-section[_ngcontent-%COMP%] {\n    padding: 24px 16px;\n  }\n}\n.landing-slider-title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: #0f0f2d;\n  margin: 0 0 8px;\n}\n.landing-slider-subtitle[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6b7280;\n  margin: 0 0 28px;\n}\n.landing-slider-track[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 20px;\n}\n.landing-slider-track[_ngcontent-%COMP%]   .track-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #6b7280;\n  white-space: nowrap;\n  min-width: 50px;\n}\n.landing-slider-track[_ngcontent-%COMP%]   .track-label[_ngcontent-%COMP%]:first-child {\n  text-align: right;\n}\n.landing-slider-track[_ngcontent-%COMP%]   .track-label[_ngcontent-%COMP%]:last-child {\n  text-align: left;\n}\n.landing-slider-track[_ngcontent-%COMP%]   .track-slider[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.landing-slider-track[_ngcontent-%COMP%]   .track-slider[_ngcontent-%COMP%]   .range-slider[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.landing-slider-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background:\n    linear-gradient(\n      135deg,\n      #2b3af0 0%,\n      #0f0f2d 100%);\n  color: white;\n  padding: 12px 24px;\n  border-radius: 50px;\n  font-size: 15px;\n  font-weight: 500;\n  box-shadow: 0 4px 16px rgba(43, 58, 240, 0.3);\n}\n.landing-slider-pill[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n}\n.volume-change-summary[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  max-width: 28rem;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 20px 20px 18px;\n  border-radius: 16px;\n  background: #ffffff;\n  border: 1px solid rgba(15, 15, 45, 0.08);\n  box-shadow:\n    0 0 0 1px rgba(255, 255, 255, 0.8) inset,\n    0 1px 2px rgba(15, 15, 45, 0.04),\n    0 8px 24px rgba(15, 15, 45, 0.06);\n}\n.volume-change-summary__head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  margin-bottom: 18px;\n  text-align: left;\n}\n.volume-change-summary__head-icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 40px;\n  height: 40px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      145deg,\n      rgba(99, 102, 241, 0.12) 0%,\n      rgba(43, 58, 240, 0.08) 100%);\n  border: 1px solid rgba(99, 102, 241, 0.2);\n}\n.volume-change-summary__head-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n  width: 22px;\n  height: 22px;\n  color: #4338ca;\n}\n.volume-change-summary__head-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 0;\n}\n.volume-change-summary__eyebrow[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  color: #6b7280;\n}\n.volume-change-summary__title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 600;\n  color: #111827;\n  letter-spacing: -0.01em;\n  line-height: 1.35;\n}\n.volume-change-summary__compare[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr auto 1fr;\n  gap: 10px;\n  align-items: stretch;\n}\n.volume-change-summary__panel[_ngcontent-%COMP%] {\n  padding: 14px 12px;\n  border-radius: 12px;\n  background: #f9fafb;\n  border: 1px solid rgba(15, 15, 45, 0.06);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  gap: 4px;\n  transition:\n    border-color 0.2s ease,\n    box-shadow 0.2s ease,\n    background 0.2s ease;\n}\n.volume-change-summary__panel--from[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      #fafafa 0%,\n      #f3f4f6 100%);\n}\n.volume-change-summary__panel--to[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      #fafbff 0%,\n      #f5f5ff 100%);\n  border-color: rgba(67, 56, 202, 0.12);\n}\n.volume-change-summary__panel--highlight[_ngcontent-%COMP%] {\n  border-color: rgba(43, 58, 240, 0.35);\n  box-shadow: 0 0 0 3px rgba(43, 58, 240, 0.12);\n  background:\n    linear-gradient(\n      180deg,\n      #f8f9ff 0%,\n      #eef2ff 100%);\n}\n.volume-change-summary__panel-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: #6b7280;\n}\n.volume-change-summary__panel-value[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  font-variant-numeric: tabular-nums;\n  letter-spacing: -0.03em;\n  color: #0f0f2d;\n  line-height: 1.1;\n}\n.volume-change-summary__panel-unit[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #9ca3af;\n}\n.volume-change-summary__mid[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 44px;\n  align-self: center;\n}\n.volume-change-summary__mid-icon[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 999px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #ffffff;\n  border: 1px solid rgba(15, 15, 45, 0.1);\n  box-shadow: 0 2px 6px rgba(15, 15, 45, 0.06);\n}\n.volume-change-summary__mid-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: #4338ca;\n}\n.volume-change-summary__hint[_ngcontent-%COMP%] {\n  margin: 14px 0 0;\n  padding-top: 12px;\n  border-top: 1px solid rgba(15, 15, 45, 0.06);\n  font-size: 13px;\n  line-height: 1.45;\n  color: #6b7280;\n  text-align: center;\n}\n@media (max-width: 480px) {\n  .volume-change-summary__compare[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 12px;\n  }\n  .volume-change-summary__mid[_ngcontent-%COMP%] {\n    width: 100%;\n    min-width: 0;\n    padding: 4px 0;\n  }\n  .volume-change-summary__mid-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    transform: rotate(90deg);\n  }\n}\n.checkout-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 24px;\n  border: 1px solid rgba(43, 58, 240, 0.12);\n  overflow: hidden;\n  box-shadow: 0 8px 40px rgba(15, 15, 45, 0.08);\n}\n.checkout-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 24px 32px;\n  color: white;\n}\n.checkout-header.header-free[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #6b7280 0%,\n      #4b5563 100%);\n}\n.checkout-header.header-plus[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #2b3af0 0%,\n      #4f5af6 100%);\n}\n.checkout-header.header-business[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #0f0f2d 0%,\n      #1a1a4a 100%);\n}\n@media (max-width: 640px) {\n  .checkout-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 16px;\n    padding: 20px 24px;\n  }\n}\n.checkout-plan-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.checkout-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 16px;\n  border-radius: 50px;\n  font-size: 14px;\n  font-weight: 600;\n  width: fit-content;\n}\n.checkout-badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.checkout-badge.free[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2);\n  color: white;\n}\n.checkout-badge.plus[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2);\n  color: white;\n}\n.checkout-badge.business[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.15);\n  color: white;\n}\n.checkout-plan-type[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: rgba(255, 255, 255, 0.8);\n  padding-left: 4px;\n}\n.checkout-price[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 2px;\n}\n.checkout-price[_ngcontent-%COMP%]   .price-from[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.7);\n  margin-right: 8px;\n}\n.checkout-price[_ngcontent-%COMP%]   .price-currency[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 600;\n}\n.checkout-price[_ngcontent-%COMP%]   .price-value[_ngcontent-%COMP%] {\n  font-size: 42px;\n  font-weight: 700;\n  line-height: 1;\n}\n.checkout-price[_ngcontent-%COMP%]   .price-period[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: rgba(255, 255, 255, 0.8);\n  margin-left: 4px;\n}\n@media (max-width: 640px) {\n  .checkout-price[_ngcontent-%COMP%]   .price-value[_ngcontent-%COMP%] {\n    font-size: 32px;\n  }\n}\n.checkout-stats[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 24px 32px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(43, 58, 240, 0.04) 0%,\n      rgba(79, 90, 246, 0.06) 100%);\n  border-bottom: 1px solid rgba(43, 58, 240, 0.08);\n}\n@media (max-width: 768px) {\n  .checkout-stats[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    gap: 16px;\n    padding: 20px 24px;\n  }\n}\n.checkout-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  gap: 4px;\n  min-width: 80px;\n}\n.checkout-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  color: #2b3af0;\n  margin-bottom: 4px;\n}\n.checkout-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #0f0f2d;\n}\n.checkout-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6b7280;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n}\n.checkout-stats[_ngcontent-%COMP%]   .stat-divider[_ngcontent-%COMP%] {\n  width: 1px;\n  background: rgba(43, 58, 240, 0.15);\n  margin: 0 8px;\n}\n@media (max-width: 768px) {\n  .checkout-stats[_ngcontent-%COMP%]   .stat-divider[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.checkout-features[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 32px;\n  padding: 28px 32px;\n  border-bottom: 1px solid rgba(43, 58, 240, 0.08);\n}\n@media (max-width: 640px) {\n  .checkout-features[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 24px;\n    padding: 24px;\n  }\n}\n.features-column[_ngcontent-%COMP%]   .features-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 14px;\n  font-weight: 600;\n  margin: 0 0 16px;\n}\n.features-column[_ngcontent-%COMP%]   .features-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.features-column[_ngcontent-%COMP%]   .features-title.included-title[_ngcontent-%COMP%] {\n  color: #2b3af0;\n}\n.features-column[_ngcontent-%COMP%]   .features-title.included-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #2b3af0;\n}\n.features-column[_ngcontent-%COMP%]   .features-title.extra-title[_ngcontent-%COMP%] {\n  color: #0f0f2d;\n}\n.features-column[_ngcontent-%COMP%]   .features-title.extra-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #0f0f2d;\n}\n.features-column[_ngcontent-%COMP%]   .features-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.features-column[_ngcontent-%COMP%]   .features-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 0;\n  font-size: 14px;\n  color: #6b7280;\n  border-bottom: 1px solid rgba(107, 114, 128, 0.1);\n}\n.features-column[_ngcontent-%COMP%]   .features-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.features-column[_ngcontent-%COMP%]   .features-list.included[_ngcontent-%COMP%]   .feature-count[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #2b3af0;\n}\n.features-column[_ngcontent-%COMP%]   .features-list.included[_ngcontent-%COMP%]   .feature-check[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n  color: #2b3af0;\n}\n.features-column[_ngcontent-%COMP%]   .features-list.extra[_ngcontent-%COMP%]   .feature-price[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #0f0f2d;\n}\n.features-column[_ngcontent-%COMP%]   .features-list.extra[_ngcontent-%COMP%]   .extras-link[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #2b3af0;\n  text-decoration: none;\n  font-weight: 500;\n}\n.features-column[_ngcontent-%COMP%]   .features-list.extra[_ngcontent-%COMP%]   .extras-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.extra-bio-notice[_ngcontent-%COMP%] {\n  margin: 0 32px 24px;\n  border: 1px solid rgba(43, 58, 240, 0.15);\n  border-radius: 12px;\n  overflow: hidden;\n}\n@media (max-width: 640px) {\n  .extra-bio-notice[_ngcontent-%COMP%] {\n    margin: 0 24px 24px;\n  }\n}\n.extra-bio-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 14px 16px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(43, 58, 240, 0.06) 0%,\n      rgba(79, 90, 246, 0.08) 100%);\n  cursor: pointer;\n  transition: background 0.2s ease;\n}\n.extra-bio-header[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(43, 58, 240, 0.1) 0%,\n      rgba(79, 90, 246, 0.12) 100%);\n}\n.extra-bio-header[_ngcontent-%COMP%]   .extra-bio-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.extra-bio-header[_ngcontent-%COMP%]   .extra-bio-left[_ngcontent-%COMP%]   .info-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: #2b3af0;\n}\n.extra-bio-header[_ngcontent-%COMP%]   .extra-bio-left[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #0f0f2d;\n}\n.extra-bio-header[_ngcontent-%COMP%]   .expand-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  color: #6b7280;\n  transition: transform 0.3s ease;\n}\n.extra-bio-header[_ngcontent-%COMP%]   .expand-icon.expanded[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.extra-bio-body[_ngcontent-%COMP%] {\n  padding: 16px;\n  background: white;\n  animation: _ngcontent-%COMP%_slideDown 0.3s ease-out;\n}\n.extra-bio-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6b7280;\n  line-height: 1.6;\n  margin: 0 0 16px;\n}\n.extra-bio-body[_ngcontent-%COMP%]   .extra-bio-costs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.extra-bio-body[_ngcontent-%COMP%]   .extra-bio-costs[_ngcontent-%COMP%]   .bio-cost-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 14px;\n  background: rgba(43, 58, 240, 0.04);\n  border-radius: 8px;\n  font-size: 13px;\n}\n.extra-bio-body[_ngcontent-%COMP%]   .extra-bio-costs[_ngcontent-%COMP%]   .bio-cost-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #6b7280;\n}\n.extra-bio-body[_ngcontent-%COMP%]   .extra-bio-costs[_ngcontent-%COMP%]   .bio-cost-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #0f0f2d;\n  font-weight: 600;\n}\n@keyframes _ngcontent-%COMP%_slideDown {\n  from {\n    opacity: 0;\n    max-height: 0;\n  }\n  to {\n    opacity: 1;\n    max-height: 300px;\n  }\n}\n.checkout-actions[_ngcontent-%COMP%] {\n  padding: 24px 32px 32px;\n  text-align: center;\n}\n@media (max-width: 640px) {\n  .checkout-actions[_ngcontent-%COMP%] {\n    padding: 24px;\n  }\n}\n.checkout-button[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 400px;\n  border-radius: 50px !important;\n  padding: 16px 32px !important;\n  font-size: 16px !important;\n  font-weight: 600 !important;\n  color: white !important;\n  display: inline-flex !important;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  transition: all 0.2s ease;\n  border: none !important;\n}\n.checkout-button.free[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #6b7280 0%,\n      #4b5563 100%) !important;\n}\n.checkout-button.plus[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #2b3af0 0%,\n      #4f5af6 100%) !important;\n  box-shadow: 0 4px 20px rgba(43, 58, 240, 0.35);\n}\n.checkout-button.business[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #0f0f2d 0%,\n      #1a1a4a 100%) !important;\n  box-shadow: 0 4px 20px rgba(15, 15, 45, 0.35);\n}\n.checkout-button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 28px rgba(43, 58, 240, 0.4);\n}\n.checkout-button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.checkout-button[_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n.checkout-terms[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6b7280;\n  margin-top: 16px;\n}\n.checkout-terms[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #2b3af0;\n  text-decoration: none;\n  font-weight: 500;\n}\n.checkout-terms[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.5;\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.animate-fadeIn[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 0.4s ease-out forwards;\n  opacity: 0;\n}\n.dark[_nghost-%COMP%]   .plans-container[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .plans-container[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      #0b0b18 0%,\n      #0f0f1f 100%);\n}\n.dark[_nghost-%COMP%]   .current-plan-title[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .current-plan-title[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .current-plan-header[_ngcontent-%COMP%]   .current-plan-title[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .current-plan-header[_ngcontent-%COMP%]   .current-plan-title[_ngcontent-%COMP%] {\n  color: #f8fafc;\n}\n.dark[_nghost-%COMP%]   .current-plan-subtitle[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .current-plan-subtitle[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .current-plan-header[_ngcontent-%COMP%]   .current-plan-subtitle[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .current-plan-header[_ngcontent-%COMP%]   .current-plan-subtitle[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .text-gray-900[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .text-gray-900[_ngcontent-%COMP%] {\n  color: #f8fafc !important;\n}\n.dark[_nghost-%COMP%]   .text-gray-500[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .text-gray-500[_ngcontent-%COMP%] {\n  color: #94a3b8 !important;\n}\n.dark[_nghost-%COMP%]   .text-gray-400[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .text-gray-400[_ngcontent-%COMP%] {\n  color: rgba(148, 163, 184, 0.75) !important;\n}\n.dark[_nghost-%COMP%]   .plan-card[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .plan-card[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .select-plan-card[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .select-plan-card[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .checkout-card[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .checkout-card[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .volume-change-summary[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .volume-change-summary[_ngcontent-%COMP%] {\n  background: #11122a;\n  border-color: rgba(255, 255, 255, 0.08);\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4), 0 12px 32px rgba(0, 0, 0, 0.35);\n}\n.dark[_nghost-%COMP%]   .plan-card[_ngcontent-%COMP%]:hover, .dark   [_nghost-%COMP%]   .plan-card[_ngcontent-%COMP%]:hover, \n.dark[_nghost-%COMP%]   .select-plan-card[_ngcontent-%COMP%]:hover, .dark   [_nghost-%COMP%]   .select-plan-card[_ngcontent-%COMP%]:hover, \n.dark[_nghost-%COMP%]   .checkout-card[_ngcontent-%COMP%]:hover, .dark   [_nghost-%COMP%]   .checkout-card[_ngcontent-%COMP%]:hover, \n.dark[_nghost-%COMP%]   .volume-change-summary[_ngcontent-%COMP%]:hover, .dark   [_nghost-%COMP%]   .volume-change-summary[_ngcontent-%COMP%]:hover {\n  border-color: rgba(43, 58, 240, 0.35);\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.45), 0 16px 40px rgba(0, 0, 0, 0.45);\n}\n.dark[_nghost-%COMP%]   .plan-card.payment-failed[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .plan-card.payment-failed[_ngcontent-%COMP%] {\n  border-color: rgba(248, 113, 113, 0.45);\n}\n.dark[_nghost-%COMP%]   .select-plan-card.featured[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .select-plan-card.featured[_ngcontent-%COMP%] {\n  border-color: #2b3af0;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4), 0 12px 28px rgba(43, 58, 240, 0.25);\n}\n.dark[_nghost-%COMP%]   .select-plan-card.featured[_ngcontent-%COMP%]:hover, .dark   [_nghost-%COMP%]   .select-plan-card.featured[_ngcontent-%COMP%]:hover {\n  border-color: #4f5af6;\n}\n.dark[_nghost-%COMP%]   .select-plan-card--current[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .select-plan-card--current[_ngcontent-%COMP%] {\n  border-color: #34d399;\n  box-shadow: 0 8px 28px rgba(52, 211, 153, 0.2);\n}\n.dark[_nghost-%COMP%]   .select-plan-card--current.featured[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .select-plan-card--current.featured[_ngcontent-%COMP%] {\n  border-color: #34d399;\n  box-shadow: 0 8px 28px rgba(52, 211, 153, 0.22);\n}\n.dark[_nghost-%COMP%]   .free-plan-card[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .free-plan-card[_ngcontent-%COMP%] {\n  border-color: rgba(255, 255, 255, 0.08);\n  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.35);\n}\n.dark[_nghost-%COMP%]   .free-plan-card[_ngcontent-%COMP%]:hover, .dark   [_nghost-%COMP%]   .free-plan-card[_ngcontent-%COMP%]:hover {\n  border-color: rgba(148, 163, 184, 0.25);\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);\n}\n.dark[_nghost-%COMP%]   .free-plan-card[_ngcontent-%COMP%]   .plan-badge.free[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .free-plan-card[_ngcontent-%COMP%]   .plan-badge.free[_ngcontent-%COMP%] {\n  background: rgba(148, 163, 184, 0.16);\n  color: #cbd5e1;\n}\n.dark[_nghost-%COMP%]   .free-plan-card[_ngcontent-%COMP%]   .plan-price[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .free-plan-card[_ngcontent-%COMP%]   .plan-price[_ngcontent-%COMP%] {\n  color: #f8fafc;\n}\n.dark[_nghost-%COMP%]   .free-plan-card[_ngcontent-%COMP%]   .plan-period[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .free-plan-card[_ngcontent-%COMP%]   .plan-period[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .free-plan-card[_ngcontent-%COMP%]   .plan-range[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .free-plan-card[_ngcontent-%COMP%]   .plan-range[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .card-header[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.04) 0%,\n      rgba(255, 255, 255, 0.02) 100%);\n  border-bottom-color: rgba(255, 255, 255, 0.08);\n}\n.dark[_nghost-%COMP%]   .card-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .card-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #f8fafc !important;\n}\n.dark[_nghost-%COMP%]   .price-section[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .price-section[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .payment-method[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .payment-method[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .optional-section[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .optional-section[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .selected-stats[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .selected-stats[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.04);\n}\n.dark[_nghost-%COMP%]   .price-section[_ngcontent-%COMP%]   .price-label[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .price-section[_ngcontent-%COMP%]   .price-label[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .price-section[_ngcontent-%COMP%]   .price-period[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .price-section[_ngcontent-%COMP%]   .price-period[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .price-section[_ngcontent-%COMP%]   .price-amount[_ngcontent-%COMP%]   .price-currency[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .price-section[_ngcontent-%COMP%]   .price-amount[_ngcontent-%COMP%]   .price-currency[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .price-section[_ngcontent-%COMP%]   .price-amount[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .price-section[_ngcontent-%COMP%]   .price-amount[_ngcontent-%COMP%] {\n  color: #f8fafc;\n}\n.dark[_nghost-%COMP%]   .payment-method[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .payment-method[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.04);\n}\n.dark[_nghost-%COMP%]   .payment-method[_ngcontent-%COMP%]   .payment-icon.link[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .payment-method[_ngcontent-%COMP%]   .payment-icon.link[_ngcontent-%COMP%] {\n  color: #cbd5f5;\n}\n.dark[_nghost-%COMP%]   .payment-method[_ngcontent-%COMP%]   .payment-text[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .payment-method[_ngcontent-%COMP%]   .payment-text[_ngcontent-%COMP%] {\n  color: #cbd5f5;\n}\n.dark[_nghost-%COMP%]   .payment-method[_ngcontent-%COMP%]   .payment-expiry[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .payment-method[_ngcontent-%COMP%]   .payment-expiry[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .feature-card[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .feature-card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.04);\n  border-color: rgba(255, 255, 255, 0.08);\n}\n.dark[_nghost-%COMP%]   .feature-card[_ngcontent-%COMP%]:hover, .dark   [_nghost-%COMP%]   .feature-card[_ngcontent-%COMP%]:hover {\n  border-color: rgba(43, 58, 240, 0.25);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.35);\n}\n.dark[_nghost-%COMP%]   .feature-content[_ngcontent-%COMP%]   .feature-label[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .feature-content[_ngcontent-%COMP%]   .feature-label[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .feature-content[_ngcontent-%COMP%]   .feature-value[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .feature-content[_ngcontent-%COMP%]   .feature-value[_ngcontent-%COMP%] {\n  color: #f8fafc;\n}\n.dark[_nghost-%COMP%]   .feature-icon.whitelabel[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .feature-icon.whitelabel[_ngcontent-%COMP%] {\n  color: #cbd5f5;\n}\n.dark[_nghost-%COMP%]   .feature-status[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .feature-status[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.18);\n}\n.dark[_nghost-%COMP%]   .feature-status.active[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .feature-status.active[_ngcontent-%COMP%] {\n  color: #4f5af6;\n}\n.dark[_nghost-%COMP%]   .optional-section[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .optional-section[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.04);\n}\n.dark[_nghost-%COMP%]   .optional-section[_ngcontent-%COMP%]   .optional-title[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .optional-section[_ngcontent-%COMP%]   .optional-title[_ngcontent-%COMP%] {\n  color: #f8fafc;\n}\n.dark[_nghost-%COMP%]   .optional-section[_ngcontent-%COMP%]   .optional-subtitle[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .optional-section[_ngcontent-%COMP%]   .optional-subtitle[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .optional-card[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .optional-card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.03);\n  border-color: rgba(255, 255, 255, 0.08);\n}\n.dark[_nghost-%COMP%]   .optional-card[_ngcontent-%COMP%]   .optional-label[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .optional-card[_ngcontent-%COMP%]   .optional-label[_ngcontent-%COMP%] {\n  color: #cbd5f5;\n}\n.dark[_nghost-%COMP%]   .optional-card[_ngcontent-%COMP%]   .optional-value[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .optional-card[_ngcontent-%COMP%]   .optional-value[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .optional-card[_ngcontent-%COMP%]   .optional-link[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .optional-card[_ngcontent-%COMP%]   .optional-link[_ngcontent-%COMP%] {\n  color: #4f5af6;\n}\n.dark[_nghost-%COMP%]   .optional-card[_ngcontent-%COMP%]   .optional-link[_ngcontent-%COMP%]:hover, .dark   [_nghost-%COMP%]   .optional-card[_ngcontent-%COMP%]   .optional-link[_ngcontent-%COMP%]:hover {\n  color: white;\n}\n.dark[_nghost-%COMP%]   .status-badge.success[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .status-badge.success[_ngcontent-%COMP%] {\n  background: rgba(43, 58, 240, 0.18);\n  color: #4f5af6;\n}\n.dark[_nghost-%COMP%]   .status-badge.warning[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .status-badge.warning[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.18);\n  color: #fbbf24;\n}\n.dark[_nghost-%COMP%]   .status-badge.error[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .status-badge.error[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.18);\n  color: #f87171;\n}\n.dark[_nghost-%COMP%]   .payment-alert[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .payment-alert[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(127, 29, 29, 0.35) 0%,\n      rgba(127, 29, 29, 0.25) 100%);\n  border-bottom-color: rgba(248, 113, 113, 0.35);\n  color: #fca5a5;\n}\n.dark[_nghost-%COMP%]   .payment-alert[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .payment-alert[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #f87171;\n}\n.dark[_nghost-%COMP%]   .plan-pricing[_ngcontent-%COMP%]   .plan-price[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .plan-pricing[_ngcontent-%COMP%]   .plan-price[_ngcontent-%COMP%] {\n  color: #f8fafc;\n}\n.dark[_nghost-%COMP%]   .plan-pricing[_ngcontent-%COMP%]   .plan-price.custom[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .plan-pricing[_ngcontent-%COMP%]   .plan-price.custom[_ngcontent-%COMP%] {\n  color: #f8fafc;\n}\n.dark[_nghost-%COMP%]   .plan-pricing[_ngcontent-%COMP%]   .plan-period[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .plan-pricing[_ngcontent-%COMP%]   .plan-period[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .plan-range[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .plan-range[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .free-plan-desc[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .free-plan-desc[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .plan-range[_ngcontent-%COMP%]     .font-semibold, .dark   [_nghost-%COMP%]   .plan-range[_ngcontent-%COMP%]     .font-semibold, \n.dark[_nghost-%COMP%]   .plan-range[_ngcontent-%COMP%]     b, .dark   [_nghost-%COMP%]   .plan-range[_ngcontent-%COMP%]     b, \n.dark[_nghost-%COMP%]   .free-plan-desc[_ngcontent-%COMP%]     .font-semibold, .dark   [_nghost-%COMP%]   .free-plan-desc[_ngcontent-%COMP%]     .font-semibold, \n.dark[_nghost-%COMP%]   .free-plan-desc[_ngcontent-%COMP%]     b, .dark   [_nghost-%COMP%]   .free-plan-desc[_ngcontent-%COMP%]     b {\n  color: #4f5af6;\n}\n.dark[_nghost-%COMP%]   .plan-range[_ngcontent-%COMP%]     .text-verifik-vivid-blue, .dark   [_nghost-%COMP%]   .plan-range[_ngcontent-%COMP%]     .text-verifik-vivid-blue, \n.dark[_nghost-%COMP%]   .free-plan-desc[_ngcontent-%COMP%]     .text-verifik-vivid-blue, .dark   [_nghost-%COMP%]   .free-plan-desc[_ngcontent-%COMP%]     .text-verifik-vivid-blue {\n  color: #4f5af6 !important;\n}\n.dark[_nghost-%COMP%]   .plan-features[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .plan-features[_ngcontent-%COMP%] {\n  border-top-color: rgba(255, 255, 255, 0.06);\n  border-bottom-color: rgba(255, 255, 255, 0.06);\n}\n.dark[_nghost-%COMP%]   .plan-stat[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .plan-stat[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .plan-stat[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .plan-stat[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  color: #f8fafc;\n}\n.dark[_nghost-%COMP%]   .plan-includes[_ngcontent-%COMP%]   .includes-title[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .plan-includes[_ngcontent-%COMP%]   .includes-title[_ngcontent-%COMP%] {\n  color: #f8fafc;\n}\n.dark[_nghost-%COMP%]   .plan-includes[_ngcontent-%COMP%]   .includes-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .plan-includes[_ngcontent-%COMP%]   .includes-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  color: #cbd5f5;\n}\n.dark[_nghost-%COMP%]   .plan-includes[_ngcontent-%COMP%]   .includes-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .plan-includes[_ngcontent-%COMP%]   .includes-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #4f5af6;\n}\n.dark[_nghost-%COMP%]   .plan-badge.free[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .plan-badge.free[_ngcontent-%COMP%] {\n  background: rgba(148, 163, 184, 0.16);\n  color: #cbd5e1;\n}\n.dark[_nghost-%COMP%]   .plan-badge.plus[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .plan-badge.plus[_ngcontent-%COMP%] {\n  background: rgba(79, 90, 246, 0.22);\n  color: #4f5af6;\n}\n.dark[_nghost-%COMP%]   .plan-badge.business[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .plan-badge.business[_ngcontent-%COMP%] {\n  background: rgba(79, 90, 246, 0.22);\n  color: white;\n}\n.dark[_nghost-%COMP%]   .plan-badge.enterprise[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .plan-badge.enterprise[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #1f2937 0%,\n      #0b0b18 100%);\n  color: white;\n}\n.dark[_nghost-%COMP%]   .select-button.free[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .select-button.free[_ngcontent-%COMP%] {\n  border-color: rgba(148, 163, 184, 0.45);\n  color: #cbd5f5;\n}\n.dark[_nghost-%COMP%]   .select-button.free[_ngcontent-%COMP%]:hover, .dark   [_nghost-%COMP%]   .select-button.free[_ngcontent-%COMP%]:hover {\n  background: rgba(148, 163, 184, 0.12);\n}\n.dark[_nghost-%COMP%]   .landing-slider-section[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .landing-slider-section[_ngcontent-%COMP%] {\n  background: rgba(43, 58, 240, 0.08);\n  border-color: rgba(79, 90, 246, 0.18);\n}\n.dark[_nghost-%COMP%]   .landing-slider-title[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .landing-slider-title[_ngcontent-%COMP%] {\n  color: #f8fafc;\n}\n.dark[_nghost-%COMP%]   .landing-slider-subtitle[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .landing-slider-subtitle[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .landing-slider-track[_ngcontent-%COMP%]   .track-label[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .landing-slider-track[_ngcontent-%COMP%]   .track-label[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .landing-slider-pill[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .landing-slider-pill[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #2b3af0 0%,\n      #3730a3 100%);\n  color: white;\n  box-shadow: 0 4px 16px rgba(43, 58, 240, 0.45);\n}\n.dark[_nghost-%COMP%]   .volume-change-summary__head-icon[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .volume-change-summary__head-icon[_ngcontent-%COMP%] {\n  background: rgba(79, 90, 246, 0.15);\n  border-color: rgba(99, 102, 241, 0.3);\n}\n.dark[_nghost-%COMP%]   .volume-change-summary__head-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .volume-change-summary__head-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #4f5af6;\n}\n.dark[_nghost-%COMP%]   .volume-change-summary__eyebrow[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .volume-change-summary__eyebrow[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .volume-change-summary__panel-label[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .volume-change-summary__panel-label[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .volume-change-summary__panel-unit[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .volume-change-summary__panel-unit[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .volume-change-summary__hint[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .volume-change-summary__hint[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .volume-change-summary__title[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .volume-change-summary__title[_ngcontent-%COMP%] {\n  color: #f8fafc;\n}\n.dark[_nghost-%COMP%]   .volume-change-summary__panel[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .volume-change-summary__panel[_ngcontent-%COMP%] {\n  border-color: rgba(255, 255, 255, 0.08);\n}\n.dark[_nghost-%COMP%]   .volume-change-summary__panel--from[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .volume-change-summary__panel--from[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.04);\n}\n.dark[_nghost-%COMP%]   .volume-change-summary__panel--to[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .volume-change-summary__panel--to[_ngcontent-%COMP%] {\n  background: rgba(43, 58, 240, 0.08);\n  border-color: rgba(67, 56, 202, 0.25);\n}\n.dark[_nghost-%COMP%]   .volume-change-summary__panel--to.volume-change-summary__panel--highlight[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .volume-change-summary__panel--to.volume-change-summary__panel--highlight[_ngcontent-%COMP%] {\n  border-color: rgba(43, 58, 240, 0.45);\n  box-shadow: 0 0 0 2px rgba(43, 58, 240, 0.15);\n  background: rgba(43, 58, 240, 0.12);\n}\n.dark[_nghost-%COMP%]   .volume-change-summary__panel-value[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .volume-change-summary__panel-value[_ngcontent-%COMP%] {\n  color: #f8fafc;\n}\n.dark[_nghost-%COMP%]   .volume-change-summary__mid-icon[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .volume-change-summary__mid-icon[_ngcontent-%COMP%] {\n  background: #11122a;\n  border-color: rgba(255, 255, 255, 0.08);\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.35);\n}\n.dark[_nghost-%COMP%]   .volume-change-summary__mid-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .volume-change-summary__mid-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #4f5af6;\n}\n.dark[_nghost-%COMP%]   .volume-change-summary__hint[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .volume-change-summary__hint[_ngcontent-%COMP%] {\n  border-top-color: rgba(255, 255, 255, 0.06);\n}\n.dark[_nghost-%COMP%]   .checkout-card[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .checkout-card[_ngcontent-%COMP%] {\n  border-color: rgba(79, 90, 246, 0.18);\n}\n.dark[_nghost-%COMP%]   .checkout-stats[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .checkout-stats[_ngcontent-%COMP%] {\n  background: rgba(43, 58, 240, 0.08);\n  border-bottom-color: rgba(79, 90, 246, 0.18);\n}\n.dark[_nghost-%COMP%]   .checkout-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .checkout-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #4f5af6;\n}\n.dark[_nghost-%COMP%]   .checkout-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .checkout-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  color: #f8fafc;\n}\n.dark[_nghost-%COMP%]   .checkout-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .checkout-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .checkout-stats[_ngcontent-%COMP%]   .stat-divider[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .checkout-stats[_ngcontent-%COMP%]   .stat-divider[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.12);\n}\n.dark[_nghost-%COMP%]   .checkout-features[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .checkout-features[_ngcontent-%COMP%] {\n  border-bottom-color: rgba(79, 90, 246, 0.18);\n}\n.dark[_nghost-%COMP%]   .checkout-features[_ngcontent-%COMP%]   .features-column[_ngcontent-%COMP%]   .features-title.included-title[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .checkout-features[_ngcontent-%COMP%]   .features-column[_ngcontent-%COMP%]   .features-title.included-title[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .checkout-features[_ngcontent-%COMP%]   .features-column[_ngcontent-%COMP%]   .features-title.included-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .checkout-features[_ngcontent-%COMP%]   .features-column[_ngcontent-%COMP%]   .features-title.included-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #4f5af6;\n}\n.dark[_nghost-%COMP%]   .checkout-features[_ngcontent-%COMP%]   .features-column[_ngcontent-%COMP%]   .features-title.extra-title[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .checkout-features[_ngcontent-%COMP%]   .features-column[_ngcontent-%COMP%]   .features-title.extra-title[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .checkout-features[_ngcontent-%COMP%]   .features-column[_ngcontent-%COMP%]   .features-title.extra-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .checkout-features[_ngcontent-%COMP%]   .features-column[_ngcontent-%COMP%]   .features-title.extra-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #f8fafc;\n}\n.dark[_nghost-%COMP%]   .checkout-features[_ngcontent-%COMP%]   .features-column[_ngcontent-%COMP%]   .features-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .checkout-features[_ngcontent-%COMP%]   .features-column[_ngcontent-%COMP%]   .features-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  color: #cbd5f5;\n  border-bottom-color: rgba(255, 255, 255, 0.06);\n}\n.dark[_nghost-%COMP%]   .checkout-features[_ngcontent-%COMP%]   .features-column[_ngcontent-%COMP%]   .features-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .feature-count[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .checkout-features[_ngcontent-%COMP%]   .features-column[_ngcontent-%COMP%]   .features-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .feature-count[_ngcontent-%COMP%] {\n  color: #4f5af6;\n}\n.dark[_nghost-%COMP%]   .checkout-features[_ngcontent-%COMP%]   .features-column[_ngcontent-%COMP%]   .features-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .feature-check[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .checkout-features[_ngcontent-%COMP%]   .features-column[_ngcontent-%COMP%]   .features-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .feature-check[_ngcontent-%COMP%] {\n  color: #34d399;\n}\n.dark[_nghost-%COMP%]   .checkout-features[_ngcontent-%COMP%]   .features-column[_ngcontent-%COMP%]   .features-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .feature-price[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .checkout-features[_ngcontent-%COMP%]   .features-column[_ngcontent-%COMP%]   .features-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .feature-price[_ngcontent-%COMP%] {\n  color: #cbd5f5;\n}\n.dark[_nghost-%COMP%]   .checkout-features[_ngcontent-%COMP%]   .features-column[_ngcontent-%COMP%]   .features-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .extras-link[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .checkout-features[_ngcontent-%COMP%]   .features-column[_ngcontent-%COMP%]   .features-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .extras-link[_ngcontent-%COMP%] {\n  color: #4f5af6;\n}\n.dark[_nghost-%COMP%]   .extra-bio-notice[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .extra-bio-notice[_ngcontent-%COMP%] {\n  border-color: rgba(79, 90, 246, 0.2);\n}\n.dark[_nghost-%COMP%]   .extra-bio-header[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .extra-bio-header[_ngcontent-%COMP%] {\n  background: rgba(43, 58, 240, 0.12);\n}\n.dark[_nghost-%COMP%]   .extra-bio-header[_ngcontent-%COMP%]:hover, .dark   [_nghost-%COMP%]   .extra-bio-header[_ngcontent-%COMP%]:hover {\n  background: rgba(43, 58, 240, 0.18);\n}\n.dark[_nghost-%COMP%]   .extra-bio-header[_ngcontent-%COMP%]   .extra-bio-left[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .extra-bio-header[_ngcontent-%COMP%]   .extra-bio-left[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #f8fafc;\n}\n.dark[_nghost-%COMP%]   .extra-bio-header[_ngcontent-%COMP%]   .extra-bio-left[_ngcontent-%COMP%]   .info-icon[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .extra-bio-header[_ngcontent-%COMP%]   .extra-bio-left[_ngcontent-%COMP%]   .info-icon[_ngcontent-%COMP%] {\n  color: #4f5af6;\n}\n.dark[_nghost-%COMP%]   .extra-bio-header[_ngcontent-%COMP%]   .expand-icon[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .extra-bio-header[_ngcontent-%COMP%]   .expand-icon[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .extra-bio-body[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .extra-bio-body[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.02);\n}\n.dark[_nghost-%COMP%]   .extra-bio-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .extra-bio-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .extra-bio-body[_ngcontent-%COMP%]   .extra-bio-costs[_ngcontent-%COMP%]   .bio-cost-item[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .extra-bio-body[_ngcontent-%COMP%]   .extra-bio-costs[_ngcontent-%COMP%]   .bio-cost-item[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid rgba(79, 90, 246, 0.15);\n}\n.dark[_nghost-%COMP%]   .extra-bio-body[_ngcontent-%COMP%]   .extra-bio-costs[_ngcontent-%COMP%]   .bio-cost-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .extra-bio-body[_ngcontent-%COMP%]   .extra-bio-costs[_ngcontent-%COMP%]   .bio-cost-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #cbd5f5;\n}\n.dark[_nghost-%COMP%]   .extra-bio-body[_ngcontent-%COMP%]   .extra-bio-costs[_ngcontent-%COMP%]   .bio-cost-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .extra-bio-body[_ngcontent-%COMP%]   .extra-bio-costs[_ngcontent-%COMP%]   .bio-cost-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #f8fafc;\n  font-weight: 600;\n}\n.dark[_nghost-%COMP%]   .checkout-terms[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .checkout-terms[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .checkout-terms[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .checkout-terms[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #4f5af6;\n}\n.dark[_nghost-%COMP%]   .range-slider[_ngcontent-%COMP%]   .range-slider__value[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .range-slider[_ngcontent-%COMP%]   .range-slider__value[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .range-slider[_ngcontent-%COMP%]   .range-slider__input[_ngcontent-%COMP%]::-webkit-slider-runnable-track, .dark   [_nghost-%COMP%]   .range-slider[_ngcontent-%COMP%]   .range-slider__input[_ngcontent-%COMP%]::-webkit-slider-runnable-track {\n  background-color: rgba(255, 255, 255, 0.14);\n}\n.dark[_nghost-%COMP%]   .range-slider[_ngcontent-%COMP%]   .range-slider__input[_ngcontent-%COMP%]::-webkit-slider-thumb, .dark   [_nghost-%COMP%]   .range-slider[_ngcontent-%COMP%]   .range-slider__input[_ngcontent-%COMP%]::-webkit-slider-thumb {\n  border-color: #11122a !important;\n  box-shadow: 0 0 0 4px #11122a, 0 2px 10px rgba(43, 58, 240, 0.45);\n}\n.dark[_nghost-%COMP%]   .range-slider[_ngcontent-%COMP%]   .range-slider__input[_ngcontent-%COMP%]::-moz-range-track, .dark   [_nghost-%COMP%]   .range-slider[_ngcontent-%COMP%]   .range-slider__input[_ngcontent-%COMP%]::-moz-range-track {\n  background-color: rgba(255, 255, 255, 0.14);\n}\n.dark[_nghost-%COMP%]   .range-slider[_ngcontent-%COMP%]   .range-slider__input[_ngcontent-%COMP%]::-moz-range-thumb, .dark   [_nghost-%COMP%]   .range-slider[_ngcontent-%COMP%]   .range-slider__input[_ngcontent-%COMP%]::-moz-range-thumb {\n  border-color: #11122a !important;\n  box-shadow: 0 0 0 4px #11122a, 0 2px 10px rgba(43, 58, 240, 0.45);\n}\n.dark[_nghost-%COMP%]   .selected-plan-card[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .selected-plan-card[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .features-table[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .features-table[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%] {\n  background: transparent;\n  border-color: rgba(255, 255, 255, 0.08);\n}\n.dark[_nghost-%COMP%]   .features-table[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child, .dark   [_nghost-%COMP%]   .features-table[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  color: #cbd5f5;\n}\n.dark[_nghost-%COMP%]   .plan-description[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .plan-description[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #f8fafc;\n}\n.dark[_nghost-%COMP%]   .plan-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .plan-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .slider-section[_ngcontent-%COMP%]   .slider-title[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .slider-section[_ngcontent-%COMP%]   .slider-title[_ngcontent-%COMP%] {\n  color: #f8fafc;\n}\n.dark[_nghost-%COMP%]   .upgrade-hint[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .upgrade-hint[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .back-button[_ngcontent-%COMP%]:hover, .dark   [_nghost-%COMP%]   .back-button[_ngcontent-%COMP%]:hover {\n  background: rgba(43, 58, 240, 0.15);\n}\n.dark[_nghost-%COMP%]   .usage-period[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .usage-period[_ngcontent-%COMP%] {\n  background: rgba(43, 58, 240, 0.16);\n  border-color: rgba(79, 90, 246, 0.28);\n}\n.dark[_nghost-%COMP%]   .usage-period__title[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .usage-period__title[_ngcontent-%COMP%] {\n  color: #f8fafc;\n}\n.dark[_nghost-%COMP%]   .usage-period__reset[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .usage-period__reset[_ngcontent-%COMP%] {\n  color: rgb(147, 197, 253);\n}\n.dark[_nghost-%COMP%]   .usage-period__date[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .usage-period__date[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .usage-bars[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .usage-bars[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.04);\n  border-color: rgba(255, 255, 255, 0.1);\n}\n/*# sourceMappingURL=smart-enroll-plans.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HumanAuthnPlansComponent, [{
    type: Component,
    args: [{ selector: "human-authn-plans", standalone: true, imports: [
      CommonModule,
      FormsModule,
      RouterModule,
      TranslocoModule,
      MatButtonModule,
      MatIconModule,
      MatProgressSpinnerModule
    ], template: `<ng-container *transloco="let t">\r
    <div class="plans-container w-full flex justify-center">\r
        <div class="w-full max-w-4xl px-4 sm:px-8 py-8">\r
            <div class="current-plan-header flex items-center gap-4 mb-8">\r
                <button\r
                    *ngIf="(currentView === 'change' && currentSubscription.length) || currentView === 'select'"\r
                    (click)="goBack(currentView === 'select' ? 'change' : 'current')"\r
                    class="back-button"\r
                    mat-icon-button\r
                    type="button"\r
                >\r
                    <mat-icon>arrow_back</mat-icon>\r
                </button>\r
                <div class="header-icon">\r
                    <mat-icon>fingerprint</mat-icon>\r
                </div>\r
                <div>\r
                    <h1 class="current-plan-title">{{ t("humanAuthnPlans.title") }}</h1>\r
                    <p class="current-plan-subtitle">{{ t("humanAuthnPlans.subtitle") }}</p>\r
                </div>\r
            </div>\r
\r
            <ng-container *ngIf="currentSubscription.length && currentView === 'current'">\r
                <ng-container *ngFor="let subscription of currentSubscription; let i = index">\r
                    <div class="plan-card mb-6 animate-fadeIn" [class.payment-failed]="subscription.paymentFailedAt">\r
                        <div class="card-header">\r
                            <div class="flex items-center gap-3">\r
                                <div class="card-icon" [ngClass]="getPlanColorClass(subscription.code)">\r
                                    <mat-icon>workspace_premium</mat-icon>\r
                                </div>\r
                                <div>\r
                                    <p class="text-sm text-gray-500">\r
                                        {{ i === 0 ? t("humanAuthnPlans.yourPlan") : t("humanAuthnPlans.yourNextPlan") }}\r
                                    </p>\r
                                    <h2 class="font-semibold text-gray-900 text-lg">{{ subscription.name }}</h2>\r
                                </div>\r
                            </div>\r
                            <div\r
                                class="status-badge"\r
                                [ngClass]="subscription.paymentFailedAt ? 'error' : subscription.cancelAt ? 'warning' : 'success'"\r
                            >\r
                                <span class="status-dot"></span>\r
                                <span *ngIf="!subscription.paymentFailedAt && !subscription.cancelAt">{{ t("humanAuthnPlans.active") }}</span>\r
                                <span *ngIf="subscription.cancelAt">{{ t("humanAuthnPlans.cancelled") }}</span>\r
                                <span *ngIf="subscription.paymentFailedAt">{{ t("humanAuthnPlans.paymentFailed") }}</span>\r
                            </div>\r
                        </div>\r
\r
                        <div *ngIf="subscription.paymentFailedAt" class="payment-alert">\r
                            <mat-icon class="text-red-500">error_outline</mat-icon>\r
                            <span>{{ t("humanAuthnPlans.paymentFailedDescription") }}</span>\r
                        </div>\r
\r
                        <div class="card-body">\r
                            <div class="price-section">\r
                                <div class="price-label">{{ t("humanAuthnPlans.planValue") }}</div>\r
                                <div class="price-amount">\r
                                    {{ calculateSubscriptionPrice(subscription) | currency }} <span class="price-currency">USD</span>\r
                                </div>\r
                                <div class="price-period">\r
                                    <ng-container *ngIf="!subscription.cancelAt">\r
                                        <span *ngIf="i === 0"\r
                                            >{{ t("humanAuthnPlans.nextPayment") }}: {{ subscription.endDate | date : "longDate" }}</span\r
                                        >\r
                                        <span *ngIf="i > 0"\r
                                            >{{ t("humanAuthnPlans.startsIn") }}: {{ subscription.startDate | date : "longDate" }}</span\r
                                        >\r
                                    </ng-container>\r
                                    <span *ngIf="subscription.cancelAt"\r
                                        >{{ t("humanAuthnPlans.canceledPlan") }}: {{ subscription.cancelAt | date : "longDate" }}</span\r
                                    >\r
                                </div>\r
                            </div>\r
\r
                            <div class="payment-method">\r
                                <ng-container *ngIf="subscription?.cardBrand === 'link'">\r
                                    <div class="payment-icon link">\r
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-16" viewBox="0 0 72 24" fill="none">\r
                                            <path\r
                                                fill="currentColor"\r
                                                d="M36.12 3.67683c0-1.12801.9504-2.04481 2.0688-2.04481 1.1184 0 2.0688.9216 2.0688 2.04481 0 1.1232-.9168 2.0688-2.0688 2.0688-1.152 0-2.0688-.9168-2.0688-2.0688ZM29.9808 1.92001h3.6V22.08h-3.6V1.92001ZM40.008 7.68001h-3.6288V22.08h3.6288V7.68001ZM66.096 14.3904c2.7312-1.68 4.5888-4.1808 5.3232-6.71516h-3.6288c-.9456 2.41916-3.1152 4.23836-5.5008 5.01116V1.91523h-3.6288V22.0752h3.6288V16.08c2.7696.6912 4.9584 3.0864 5.7072 5.9952h3.6528c-.5568-3.0528-2.6448-5.9088-5.5536-7.6848ZM46.44 9.29283c.9504-1.2624 2.8032-1.99681 4.3056-1.99681 2.8032 0 5.1216 2.04961 5.1264 5.14558v9.6336h-3.6288v-8.832c0-1.272-.5664-2.7408-2.4048-2.7408-2.16 0-3.4032 1.9152-3.4032 4.1568v7.4256h-3.6288V7.68962H46.44v1.60321Z"\r
                                            ></path>\r
                                            <path\r
                                                fill="#00D66F"\r
                                                d="M12 24c6.6274 0 12-5.3726 12-12 0-6.62743-5.3726-12-12-12C5.37259 0 0 5.37257 0 12c0 6.6274 5.37259 12 12 12Z"\r
                                            ></path>\r
                                            <path\r
                                                fill="#011e0f"\r
                                                d="M11.4479 4.80005H7.74707c.72 3.0096 2.82243 5.58235 5.45283 7.19995-2.6352 1.6176-4.73283 4.1904-5.45283 7.2h3.70083c.9168-2.784 3.456-5.2032 6.576-5.6976v-3.0095c-3.1248-.4896-5.664-2.90885-6.576-5.69285Z"\r
                                            ></path>\r
                                        </svg>\r
                                    </div>\r
                                    <span class="payment-text">{{ t("humanAuthnPlans.paidWithStripeLink") }}</span>\r
                                </ng-container>\r
                                <ng-container *ngIf="subscription?.cardBrand && subscription?.cardBrand !== 'link' && subscription?.lastFour">\r
                                    <img [src]="creditCardLogo(subscription.cardBrand)" class="h-8 w-12 object-contain" alt="card" />\r
                                    <div class="payment-details">\r
                                        <span class="payment-text"\r
                                            >{{ capitalizeFirstLetter(subscription.cardBrand) }} {{ t("humanAuthnPlans.ended") }}\r
                                            {{ subscription.lastFour }}</span\r
                                        >\r
                                        <span class="payment-expiry"\r
                                            >{{ t("humanAuthnPlans.expires") }} {{ subscription.cardExpMonth }}/{{ subscription.cardExpYear }}</span\r
                                        >\r
                                    </div>\r
                                </ng-container>\r
                                <ng-container *ngIf="!subscription?.cardBrand && !subscription?.lastFour">\r
                                    <mat-icon class="text-gray-400">credit_card_off</mat-icon>\r
                                    <span class="payment-text text-gray-500">{{ t("humanAuthnPlans.noPayment") }}</span>\r
                                </ng-container>\r
                            </div>\r
\r
                            <div class="features-grid">\r
                                <div class="feature-card">\r
                                    <div class="feature-icon biometrics">\r
                                        <mat-icon>how_to_reg</mat-icon>\r
                                    </div>\r
                                    <div class="feature-content">\r
                                        <span class="feature-label">{{ t("humanAuthnPlans.encrypts") }}</span>\r
                                        <span class="feature-value">{{ subscription.encryptLimit | number }}</span>\r
                                    </div>\r
                                    <mat-icon class="feature-status" [class.active]="subscription.encryptLimit > 0">\r
                                        {{ subscription.encryptLimit > 0 ? "check_circle" : "cancel" }}\r
                                    </mat-icon>\r
                                </div>\r
\r
                                <div class="feature-card">\r
                                    <div class="feature-icon email">\r
                                        <mat-icon>verified_user</mat-icon>\r
                                    </div>\r
                                    <div class="feature-content">\r
                                        <span class="feature-label">{{ t("humanAuthnPlans.planCredits") }}</span>\r
                                        <span class="feature-value">{{ subscription.credits || 0 | number }}</span>\r
                                    </div>\r
                                    <mat-icon class="feature-status" [class.active]="(subscription.credits || 0) > 0">\r
                                        {{ (subscription.credits || 0) > 0 ? "check_circle" : "cancel" }}\r
                                    </mat-icon>\r
                                </div>\r
\r
                                <div class="feature-card">\r
                                    <div class="feature-icon whitelabel">\r
                                        <mat-icon>fingerprint</mat-icon>\r
                                    </div>\r
                                    <div class="feature-content">\r
                                        <span class="feature-label">{{ t("humanAuthnPlans.zkLiveness") }}</span>\r
                                        <span class="feature-value">{{ t("humanAuthnPlans.enabled") }}</span>\r
                                    </div>\r
                                    <mat-icon class="feature-status active">check_circle</mat-icon>\r
                                </div>\r
\r
                                <div class="feature-card">\r
                                    <div class="feature-icon api">\r
                                        <mat-icon>group</mat-icon>\r
                                    </div>\r
                                    <div class="feature-content">\r
                                        <span class="feature-label">{{ t("humanAuthnPlans.activeUsers") }}</span>\r
                                        <span class="feature-value">{{\r
                                            subscription.activeUserLimit > 0\r
                                                ? (subscription.activeUserLimit | number)\r
                                                : t("humanAuthnPlans.available")\r
                                        }}</span>\r
                                    </div>\r
                                    <mat-icon class="feature-status" [class.active]="subscription.activeUserLimit > 0">\r
                                        {{ subscription.activeUserLimit > 0 ? "check_circle" : "add_circle_outline" }}\r
                                    </mat-icon>\r
                                </div>\r
                            </div>\r
\r
                            <div class="optional-section">\r
                                <h3 class="optional-title">{{ t("humanAuthnPlans.includedPrivacy") }}</h3>\r
                                <p class="optional-subtitle">{{ t("humanAuthnPlans.includedPrivacyDesc") }}</p>\r
\r
                                <div class="optional-grid">\r
                                    <div class="optional-card">\r
                                        <div class="optional-icon sms">\r
                                            <mat-icon>visibility_off</mat-icon>\r
                                        </div>\r
                                        <div class="optional-content">\r
                                            <span class="optional-label">{{ t("humanAuthnPlans.benefitNoBiometrics") }}</span>\r
                                            <span class="optional-value">{{ t("humanAuthnPlans.benefitNoFaceDb") }}</span>\r
                                        </div>\r
                                        <mat-icon class="feature-status active">check_circle</mat-icon>\r
                                    </div>\r
\r
                                    <div class="optional-card">\r
                                        <div class="optional-icon whatsapp">\r
                                            <mat-icon>verified_user</mat-icon>\r
                                        </div>\r
                                        <div class="optional-content">\r
                                            <span class="optional-label">{{ t("humanAuthnPlans.benefitZkProof") }}</span>\r
                                            <span class="optional-value">{{ t("humanAuthnPlans.benefitNoHostedDb") }}</span>\r
                                        </div>\r
                                        <mat-icon class="feature-status active">check_circle</mat-icon>\r
                                    </div>\r
                                </div>\r
                            </div>\r
\r
                            <div class="card-actions">\r
                                <button\r
                                    (click)="manageBilling()"\r
                                    class="action-button primary"\r
                                    [class.error]="subscription.paymentFailedAt"\r
                                    mat-flat-button\r
                                    type="button"\r
                                >\r
                                    {{ t("humanAuthnPlans.manageSubscription") }}\r
                                </button>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </ng-container>\r
\r
                <div class="upgrade-section animate-fadeIn">\r
                    <div class="upgrade-header">\r
                        <div class="upgrade-header-content">\r
                            <div class="upgrade-badge">\r
                                <mat-icon>auto_awesome</mat-icon>\r
                                <span>{{ t("humanAuthnPlans.upgradeAvailable") }}</span>\r
                            </div>\r
                            <h2 class="upgrade-headline">{{ t("humanAuthnPlans.betterPlan") }}</h2>\r
                            <p class="upgrade-subheadline">{{ t("humanAuthnPlans.betterPlanText") }}</p>\r
                        </div>\r
                        <div class="upgrade-illustration">\r
                            <div class="floating-icon icon-1">\r
                                <mat-icon>verified</mat-icon>\r
                            </div>\r
                            <div class="floating-icon icon-2">\r
                                <mat-icon>speed</mat-icon>\r
                            </div>\r
                            <div class="floating-icon icon-3">\r
                                <mat-icon>security</mat-icon>\r
                            </div>\r
                        </div>\r
                    </div>\r
\r
                    <div class="upgrade-benefits">\r
                        <div class="benefit-item">\r
                            <div class="benefit-icon">\r
                                <mat-icon>trending_up</mat-icon>\r
                            </div>\r
                            <div class="benefit-text">\r
                                <span class="benefit-title">{{ t("humanAuthnPlans.higherLimits") }}</span>\r
                                <span class="benefit-desc">{{ t("humanAuthnPlans.higherLimitsDesc") }}</span>\r
                            </div>\r
                        </div>\r
                        <div class="benefit-item">\r
                            <div class="benefit-icon">\r
                                <mat-icon>support_agent</mat-icon>\r
                            </div>\r
                            <div class="benefit-text">\r
                                <span class="benefit-title">{{ t("humanAuthnPlans.prioritySupport") }}</span>\r
                                <span class="benefit-desc">{{ t("humanAuthnPlans.prioritySupportDesc") }}</span>\r
                            </div>\r
                        </div>\r
                        <div class="benefit-item">\r
                            <div class="benefit-icon">\r
                                <mat-icon>tune</mat-icon>\r
                            </div>\r
                            <div class="benefit-text">\r
                                <span class="benefit-title">{{ t("humanAuthnPlans.advancedFeatures") }}</span>\r
                                <span class="benefit-desc">{{ t("humanAuthnPlans.advancedFeaturesDesc") }}</span>\r
                            </div>\r
                        </div>\r
                    </div>\r
\r
                    <div class="upgrade-cta">\r
                        <button (click)="changeView('change')" class="upgrade-button" mat-flat-button type="button">\r
                            <span>{{ t("humanAuthnPlans.explorePlans") }}</span>\r
                            <mat-icon>arrow_forward</mat-icon>\r
                        </button>\r
                        <span class="upgrade-hint">{{ t("humanAuthnPlans.noCommitment") }}</span>\r
                    </div>\r
                </div>\r
            </ng-container>\r
\r
            <ng-container *ngIf="currentView === 'change'">\r
                <div class="mb-6">\r
                    <h2 class="text-2xl font-semibold text-gray-900">{{ t("humanAuthnPlans.selectPlan") }}</h2>\r
                    <p class="text-gray-500 mt-1">{{ t("humanAuthnPlans.chooseBestPlan") }}</p>\r
                </div>\r
\r
                <div class="plans-grid">\r
                    <div\r
                        class="select-plan-card animate-fadeIn"\r
                        [class.select-plan-card--current]="isActiveCatalogPlan('plus')"\r
                    >\r
                        <div *ngIf="isActiveCatalogPlan('plus')" class="current-plan-badge">{{ t("humanAuthnPlans.currentPlanBadge") }}</div>\r
                        <div class="plan-badge plus">{{ t("humanAuthnPlans.plus") }}</div>\r
                        <div class="plan-pricing">\r
                            <span class="plan-price">{{ calculatePrice("plus") | currency }}</span>\r
                            <span class="plan-period">/{{ t("humanAuthnPlans.month") }}</span>\r
                        </div>\r
                        <p class="plan-range">\r
                            {{ getPlan("plus")?.encryptLimit || 300 | number }} {{ t("humanAuthnPlans.enrollments") }}\r
                        </p>\r
                        <div class="plan-features">\r
                            <div class="plan-stat">\r
                                <span class="stat-label">{{ t("humanAuthnPlans.enrollCost") }}</span>\r
                                <span class="stat-value">{{ getPlan("plus")?.unitPrice || 0.6 | currency }}</span>\r
                            </div>\r
                            <div class="plan-stat">\r
                                <span class="stat-label">{{ t("humanAuthnPlans.activeUserCost") }}</span>\r
                                <span class="stat-value">{{ activeUserCreditCost("plus") }} {{ t("humanAuthnPlans.creditsUnit") }}</span>\r
                            </div>\r
                        </div>\r
                        <div class="plan-includes">\r
                            <p class="includes-title">{{ t("humanAuthnPlans.included") }}</p>\r
                            <ul class="includes-list">\r
                                <li><mat-icon>check</mat-icon>{{ t("humanAuthnPlans.benefitNoBiometrics") }}</li>\r
                                <li><mat-icon>check</mat-icon>{{ t("humanAuthnPlans.benefitNoFaceDb") }}</li>\r
                                <li><mat-icon>check</mat-icon>{{ t("humanAuthnPlans.benefitNoHostedDb") }}</li>\r
                                <li><mat-icon>check</mat-icon>{{ t("humanAuthnPlans.benefitZkProof") }}</li>\r
                            </ul>\r
                        </div>\r
                        <button (click)="changeView('select', 'plus')" class="select-button plus" mat-flat-button type="button">\r
                            {{ isActiveCatalogPlan("plus") ? t("humanAuthnPlans.adjustVolume") : t("humanAuthnPlans.viewPlan") }}\r
                        </button>\r
                    </div>\r
\r
                    <div\r
                        class="select-plan-card featured animate-fadeIn"\r
                        [class.select-plan-card--current]="isActiveCatalogPlan('business')"\r
                    >\r
                        <div *ngIf="isActiveCatalogPlan('business')" class="current-plan-badge current-plan-badge--offset">\r
                            {{ t("humanAuthnPlans.currentPlanBadge") }}\r
                        </div>\r
                        <div class="featured-badge">{{ t("humanAuthnPlans.mostPopular") }}</div>\r
                        <div class="plan-badge business">{{ t("humanAuthnPlans.business") }}</div>\r
                        <div class="plan-pricing">\r
                            <span class="plan-price">{{ calculatePrice("business") | currency }}</span>\r
                            <span class="plan-period">/{{ t("humanAuthnPlans.month") }}</span>\r
                        </div>\r
                        <p class="plan-range">\r
                            {{ getPlan("business")?.encryptLimit || 1000 | number }} {{ t("humanAuthnPlans.enrollments") }}\r
                        </p>\r
                        <div class="plan-features">\r
                            <div class="plan-stat">\r
                                <span class="stat-label">{{ t("humanAuthnPlans.enrollCost") }}</span>\r
                                <span class="stat-value">{{ getPlan("business")?.unitPrice || 0.5 | currency }}</span>\r
                            </div>\r
                            <div class="plan-stat">\r
                                <span class="stat-label">{{ t("humanAuthnPlans.activeUserCost") }}</span>\r
                                <span class="stat-value">{{ activeUserCreditCost("business") }} {{ t("humanAuthnPlans.creditsUnit") }}</span>\r
                            </div>\r
                        </div>\r
                        <div class="plan-includes">\r
                            <p class="includes-title">{{ t("humanAuthnPlans.included") }}</p>\r
                            <ul class="includes-list">\r
                                <li><mat-icon>check</mat-icon>{{ t("humanAuthnPlans.benefitNoBiometrics") }}</li>\r
                                <li><mat-icon>check</mat-icon>{{ t("humanAuthnPlans.benefitNoFaceDb") }}</li>\r
                                <li><mat-icon>check</mat-icon>{{ t("humanAuthnPlans.benefitNoHostedDb") }}</li>\r
                                <li><mat-icon>check</mat-icon>{{ t("humanAuthnPlans.benefitZkProof") }}</li>\r
                            </ul>\r
                        </div>\r
                        <button (click)="changeView('select', 'business')" class="select-button business" mat-flat-button type="button">\r
                            {{ isActiveCatalogPlan("business") ? t("humanAuthnPlans.adjustVolume") : t("humanAuthnPlans.viewPlan") }}\r
                        </button>\r
                    </div>\r
\r
                    <div class="select-plan-card animate-fadeIn">\r
                        <div class="plan-badge enterprise">{{ t("humanAuthnPlans.enterprise") }}</div>\r
                        <div class="plan-pricing">\r
                            <span class="plan-price custom">{{ t("humanAuthnPlans.contactSales") }}</span>\r
                        </div>\r
                        <p class="plan-range">+2,500 {{ t("humanAuthnPlans.enrollments") }}</p>\r
                        <div class="plan-includes">\r
                            <p class="includes-title">{{ t("humanAuthnPlans.included") }}</p>\r
                            <ul class="includes-list">\r
                                <li><mat-icon>check</mat-icon>{{ t("humanAuthnPlans.everythingInBusiness") }}</li>\r
                                <li><mat-icon>check</mat-icon>{{ t("humanAuthnPlans.dedicatedSupport") }}</li>\r
                            </ul>\r
                        </div>\r
                        <button (click)="purchaseEnterprise()" class="select-button enterprise" mat-flat-button type="button">\r
                            {{ t("humanAuthnPlans.contactSales") }}\r
                        </button>\r
                    </div>\r
                </div>\r
\r
                <div\r
                    class="select-plan-card free-plan-card animate-fadeIn mt-6"\r
                    [class.select-plan-card--current]="isActiveCatalogPlan('free')"\r
                >\r
                    <div *ngIf="isActiveCatalogPlan('free')" class="current-plan-badge">{{ t("humanAuthnPlans.currentPlanBadge") }}</div>\r
                    <div class="plan-badge free">{{ t("humanAuthnPlans.free") }}</div>\r
                    <div class="plan-pricing">\r
                        <span class="plan-price">$0</span>\r
                        <span class="plan-period">/{{ t("humanAuthnPlans.month") }}</span>\r
                    </div>\r
                    <p class="plan-range">{{ getPlan("free")?.encryptLimit || 20 | number }} {{ t("humanAuthnPlans.enrollments") }}</p>\r
                    <div class="plan-includes">\r
                        <p class="includes-title">{{ t("humanAuthnPlans.included") }}</p>\r
                        <ul class="includes-list">\r
                            <li><mat-icon>check</mat-icon>{{ t("humanAuthnPlans.benefitNoBiometrics") }}</li>\r
                            <li><mat-icon>check</mat-icon>{{ t("humanAuthnPlans.benefitNoFaceDb") }}</li>\r
                        </ul>\r
                    </div>\r
                    <button (click)="changeView('select', 'free')" class="select-button free" mat-stroked-button type="button">\r
                        {{ t("humanAuthnPlans.viewPlan") }}\r
                        <mat-icon>arrow_forward</mat-icon>\r
                    </button>\r
                </div>\r
            </ng-container>\r
\r
            <ng-container *ngIf="currentView === 'select' && selectedPlan">\r
                <div *ngIf="selectedPlan !== 'free'" class="landing-slider-section animate-fadeIn">\r
                    <h2 class="landing-slider-title">{{ t("humanAuthnPlans.howManyEnrollments") }}</h2>\r
                    <p class="landing-slider-subtitle">{{ t("humanAuthnPlans.selectVolume") }}</p>\r
                    <div class="landing-slider-track">\r
                        <span class="track-label">{{ sliderOptions?.notches?.[0] | number }}</span>\r
                        <div class="track-slider">\r
                            <div class="range-slider range-slider--dotted" [style.--track-fill-percentage]="getTrackFillPercentage() + '%'">\r
                                <input\r
                                    [max]="(sliderOptions?.notches?.length || 1) - 1"\r
                                    [min]="0"\r
                                    [(ngModel)]="sliderOptions.value"\r
                                    class="range-slider__input"\r
                                    type="range"\r
                                />\r
                            </div>\r
                        </div>\r
                        <span class="track-label">+{{ sliderOptions?.notches?.[sliderOptions?.notches?.length - 1] | number }}</span>\r
                    </div>\r
                    <div class="landing-slider-pill">\r
                        <strong>{{ getSliderAmount(selectedPlan) | number }}</strong> {{ t("humanAuthnPlans.enrollments") }}\r
                    </div>\r
                </div>\r
\r
                <div class="checkout-card animate-fadeIn" [ngClass]="'checkout-' + selectedPlan">\r
                    <div class="checkout-header" [ngClass]="'header-' + selectedPlan">\r
                        <div class="checkout-plan-info">\r
                            <div class="checkout-badge" [ngClass]="selectedPlan">\r
                                <mat-icon>{{ selectedPlan === "free" ? "card_giftcard" : selectedPlan === "plus" ? "star" : "diamond" }}</mat-icon>\r
                                <span>{{ getPlan(selectedPlan)?.name || selectedPlan }}</span>\r
                            </div>\r
                            <span class="checkout-plan-type">{{ t("humanAuthnPlans.perEnrollment") }}</span>\r
                        </div>\r
                        <div class="checkout-price">\r
                            <span class="price-currency">$</span>\r
                            <span class="price-value">{{ calculatePrice(selectedPlan) | number: "1.0-0" }}</span>\r
                            <span class="price-period">/{{ t("humanAuthnPlans.month") }}</span>\r
                        </div>\r
                    </div>\r
                    <div class="checkout-stats">\r
                        <div class="stat-item">\r
                            <mat-icon>how_to_reg</mat-icon>\r
                            <span class="stat-value">{{ getSliderAmount(selectedPlan) | number }}</span>\r
                            <span class="stat-label">{{ t("humanAuthnPlans.enrollments") }}</span>\r
                        </div>\r
                        <div class="stat-divider"></div>\r
                        <div class="stat-item">\r
                            <mat-icon>payments</mat-icon>\r
                            <span class="stat-value">{{ getPlan(selectedPlan)?.unitPrice || 0 | currency }}</span>\r
                            <span class="stat-label">{{ t("humanAuthnPlans.enrollCost") }}</span>\r
                        </div>\r
                        <div class="stat-divider"></div>\r
                        <div class="stat-item">\r
                            <mat-icon>verified_user</mat-icon>\r
                            <span class="stat-value">{{ activeUserCreditCost(selectedPlan) }}</span>\r
                            <span class="stat-label">{{ t("humanAuthnPlans.activeUserCost") }}</span>\r
                        </div>\r
                    </div>\r
                    <div class="checkout-actions">\r
                        <button\r
                            (click)="checkout()"\r
                            [disabled]="subscribingToPlan"\r
                            class="checkout-button"\r
                            [ngClass]="selectedPlan"\r
                            mat-flat-button\r
                            type="button"\r
                        >\r
                            <mat-spinner *ngIf="subscribingToPlan" diameter="20" class="mr-2"></mat-spinner>\r
                            {{ t("humanAuthnPlans.purchase") }}\r
                        </button>\r
                    </div>\r
                </div>\r
            </ng-container>\r
        </div>\r
    </div>\r
</ng-container>\r
`, styles: ['/* src/app/modules/smart-enroll/plans/smart-enroll-plans.component.scss */\n:host {\n  width: 100%;\n  display: block;\n}\n.plans-container {\n  min-height: calc(100vh - 64px);\n  background:\n    linear-gradient(\n      180deg,\n      #f8fafc 0%,\n      #ffffff 100%);\n}\n.current-plan-header .current-plan-title {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #0f0f2d;\n  margin: 0;\n  letter-spacing: -0.02em;\n}\n.current-plan-header .current-plan-subtitle {\n  font-size: 0.875rem;\n  color: #6b7280;\n  margin: 4px 0 0;\n}\n.back-button {\n  color: #2b3af0;\n  transition: all 0.2s ease;\n}\n.back-button:hover {\n  background: rgba(43, 58, 240, 0.06);\n  transform: translateX(-2px);\n}\n.header-icon {\n  width: 48px;\n  height: 48px;\n  min-width: 48px;\n  min-height: 48px;\n  flex-shrink: 0;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #2b3af0 0%,\n      #4f5af6 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 4px 14px rgba(43, 58, 240, 0.25);\n}\n.header-icon mat-icon {\n  color: white;\n  font-size: 24px;\n  width: 24px;\n  height: 24px;\n  min-width: 24px;\n  min-height: 24px;\n  flex-shrink: 0;\n  line-height: 24px;\n}\n.plan-card {\n  background: #ffffff;\n  border-radius: 20px;\n  border: 1px solid #e5e7eb;\n  overflow: hidden;\n  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.04);\n  transition: all 0.3s ease;\n}\n.plan-card:hover {\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);\n}\n.plan-card.payment-failed {\n  border-color: #fecaca;\n}\n.card-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  background:\n    linear-gradient(\n      135deg,\n      #f3f4f6 0%,\n      #f5f5f5 100%);\n  border-bottom: 1px solid #e5e7eb;\n}\n@media (max-width: 640px) {\n  .card-header {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 12px;\n  }\n}\n.card-icon {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease;\n}\n.card-icon mat-icon {\n  color: white;\n  font-size: 22px;\n  width: 22px;\n  height: 22px;\n}\n.card-icon.free {\n  background:\n    linear-gradient(\n      135deg,\n      #6b7280 0%,\n      #9ca3af 100%);\n  box-shadow: 0 2px 8px rgba(107, 114, 128, 0.3);\n}\n.card-icon.plus {\n  background:\n    linear-gradient(\n      135deg,\n      #2b3af0 0%,\n      #4f5af6 100%);\n  box-shadow: 0 2px 8px rgba(43, 58, 240, 0.3);\n}\n.card-icon.business {\n  background:\n    linear-gradient(\n      135deg,\n      #0f0f2d 0%,\n      #1a1a4a 100%);\n  box-shadow: 0 2px 8px rgba(15, 15, 45, 0.3);\n}\n.card-icon.enterprise {\n  background:\n    linear-gradient(\n      135deg,\n      #1f2937 0%,\n      #374151 100%);\n  box-shadow: 0 2px 8px rgba(31, 41, 55, 0.3);\n}\n.status-badge {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  font-weight: 500;\n  padding: 6px 14px;\n  border-radius: 20px;\n}\n.status-badge.success {\n  color: #2b3af0;\n  background: rgba(43, 58, 240, 0.06);\n}\n.status-badge.success .status-dot {\n  background: #2b3af0;\n}\n.status-badge.warning {\n  color: #f59e0b;\n  background: rgba(245, 158, 11, 0.1);\n}\n.status-badge.warning .status-dot {\n  background: #f59e0b;\n}\n.status-badge.error {\n  color: #ef4444;\n  background: rgba(239, 68, 68, 0.1);\n}\n.status-badge.error .status-dot {\n  background: #ef4444;\n}\n.status-badge .status-dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  animation: pulse 2s infinite;\n}\n.payment-alert {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px 24px;\n  background:\n    linear-gradient(\n      135deg,\n      #fef2f2 0%,\n      #fee2e2 100%);\n  border-bottom: 1px solid #fecaca;\n  font-size: 14px;\n  color: #dc2626;\n  font-weight: 500;\n}\n.card-body {\n  padding: 24px;\n}\n.price-section {\n  text-align: center;\n  padding: 24px;\n  background:\n    linear-gradient(\n      135deg,\n      #f3f4f6 0%,\n      #e5e7eb 100%);\n  border-radius: 16px;\n  margin-bottom: 24px;\n}\n.price-section .price-label {\n  font-size: 14px;\n  color: #6b7280;\n  font-weight: 500;\n  margin-bottom: 8px;\n}\n.price-section .price-amount {\n  font-size: 42px;\n  font-weight: 700;\n  color: #0f0f2d;\n  line-height: 1;\n}\n.price-section .price-amount .price-currency {\n  font-size: 18px;\n  font-weight: 500;\n  color: #6b7280;\n}\n.price-section .price-period {\n  font-size: 13px;\n  color: #6b7280;\n  margin-top: 8px;\n}\n.payment-method {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 16px;\n  background: #f9fafb;\n  border-radius: 12px;\n  margin-bottom: 24px;\n}\n.payment-method .payment-icon.link {\n  color: #1f2937;\n}\n.payment-method .payment-details {\n  display: flex;\n  flex-direction: column;\n}\n.payment-method .payment-text {\n  font-size: 14px;\n  font-weight: 500;\n  color: #374151;\n}\n.payment-method .payment-expiry {\n  font-size: 12px;\n  color: #6b7280;\n}\n.usage-dashboard {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.usage-period {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n  padding: 14px 16px;\n  background: rgba(43, 58, 240, 0.06);\n  border: 1px solid rgba(43, 58, 240, 0.12);\n  border-radius: 12px;\n}\n@media (max-width: 640px) {\n  .usage-period {\n    flex-direction: column;\n    gap: 6px;\n  }\n}\n.usage-period__title {\n  margin: 0;\n  font-size: 14px;\n  font-weight: 700;\n  color: #0f0f2d;\n}\n.usage-period__reset {\n  margin: 2px 0 0;\n  font-size: 13px;\n  font-weight: 600;\n  color: #2b3af0;\n}\n.usage-period__date {\n  margin: 0;\n  font-size: 12px;\n  color: #6b7280;\n  text-align: right;\n}\n@media (max-width: 640px) {\n  .usage-period__date {\n    text-align: left;\n  }\n}\n.usage-gauges {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 16px;\n}\n@media (max-width: 640px) {\n  .usage-gauges {\n    grid-template-columns: 1fr;\n  }\n}\n.usage-bars {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  padding: 16px;\n  background: #ffffff;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n}\n.features-grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 16px;\n  margin-bottom: 24px;\n}\n@media (max-width: 640px) {\n  .features-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.feature-card {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px;\n  background: #ffffff;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  transition: all 0.2s ease;\n}\n.feature-card:hover {\n  border-color: #d1d5db;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);\n}\n.feature-icon {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.feature-icon mat-icon {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.feature-icon.email {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(43, 58, 240, 0.12) 0%,\n      rgba(79, 90, 246, 0.12) 100%);\n  color: #2b3af0;\n}\n.feature-icon.whitelabel {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(15, 15, 45, 0.08) 0%,\n      rgba(15, 15, 45, 0.12) 100%);\n  color: #0f0f2d;\n}\n.feature-icon.biometrics {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(43, 58, 240, 0.08) 0%,\n      rgba(43, 58, 240, 0.15) 100%);\n  color: #2b3af0;\n}\n.feature-icon.api {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(79, 90, 246, 0.08) 0%,\n      rgba(79, 90, 246, 0.15) 100%);\n  color: #4f5af6;\n}\n.feature-content {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.feature-content .feature-label {\n  font-size: 13px;\n  color: #6b7280;\n}\n.feature-content .feature-value {\n  font-size: 15px;\n  font-weight: 600;\n  color: #111827;\n}\n.feature-status {\n  font-size: 20px !important;\n  width: 20px !important;\n  height: 20px !important;\n  color: #d1d5db;\n}\n.feature-status.active {\n  color: #2b3af0;\n}\n.optional-section {\n  padding: 20px;\n  background: #f9fafb;\n  border-radius: 16px;\n  margin-bottom: 24px;\n}\n.optional-section .optional-title {\n  font-size: 16px;\n  font-weight: 600;\n  color: #111827;\n  margin-bottom: 4px;\n}\n.optional-section .optional-subtitle {\n  font-size: 13px;\n  color: #6b7280;\n  margin-bottom: 16px;\n}\n.optional-grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 12px;\n}\n@media (max-width: 640px) {\n  .optional-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.optional-card {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 12px;\n  padding: 14px;\n  background: #ffffff;\n  border: 1px solid #e5e7eb;\n  border-radius: 10px;\n}\n.optional-icon {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.optional-icon mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.optional-icon.sms {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(43, 58, 240, 0.08) 0%,\n      rgba(43, 58, 240, 0.15) 100%);\n  color: #2b3af0;\n}\n.optional-icon.whatsapp {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(79, 90, 246, 0.08) 0%,\n      rgba(79, 90, 246, 0.15) 100%);\n  color: #4f5af6;\n}\n.optional-content {\n  flex: 1;\n  min-width: 100px;\n}\n.optional-content .optional-label {\n  display: block;\n  font-size: 13px;\n  font-weight: 500;\n  color: #374151;\n}\n.optional-content .optional-value {\n  display: block;\n  font-size: 11px;\n  color: #9ca3af;\n}\n.optional-link {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 12px;\n  font-weight: 500;\n  color: #2b3af0;\n  text-decoration: none;\n  transition: color 0.2s ease;\n}\n.optional-link mat-icon {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.optional-link:hover {\n  color: #0f0f2d;\n}\n.card-actions {\n  display: flex;\n  justify-content: center;\n}\n.action-button {\n  border-radius: 50px;\n  padding: 12px 32px;\n  font-weight: 500;\n  font-size: 15px;\n  transition: all 0.2s ease;\n}\n.action-button.primary {\n  background:\n    linear-gradient(\n      135deg,\n      #2b3af0 0%,\n      #0f0f2d 100%);\n  color: white;\n  box-shadow: 0 4px 14px rgba(43, 58, 240, 0.3);\n}\n.action-button.primary:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(43, 58, 240, 0.4);\n}\n.action-button.primary.error {\n  background:\n    linear-gradient(\n      135deg,\n      #ef4444 0%,\n      #dc2626 100%);\n  box-shadow: 0 4px 14px rgba(239, 68, 68, 0.3);\n}\n.action-button.secondary {\n  border-color: #2b3af0;\n  color: #2b3af0;\n}\n.action-button.secondary mat-icon {\n  margin-left: 8px;\n  transition: transform 0.2s ease;\n}\n.action-button.secondary:hover {\n  background: rgba(43, 58, 240, 0.06);\n}\n.action-button.secondary:hover mat-icon {\n  transform: translateX(4px);\n}\n.upgrade-section {\n  background:\n    linear-gradient(\n      135deg,\n      #0f0f2d 0%,\n      #1a1a4a 50%,\n      #0f0f2d 100%);\n  border-radius: 24px;\n  overflow: hidden;\n  position: relative;\n}\n.upgrade-section::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background-image:\n    radial-gradient(\n      circle at 1px 1px,\n      rgba(255, 255, 255, 0.03) 1px,\n      transparent 0);\n  background-size: 24px 24px;\n  pointer-events: none;\n}\n.upgrade-section::after {\n  content: "";\n  position: absolute;\n  top: -50%;\n  right: -20%;\n  width: 60%;\n  height: 200%;\n  background:\n    radial-gradient(\n      ellipse,\n      rgba(43, 58, 240, 0.15) 0%,\n      transparent 70%);\n  pointer-events: none;\n}\n.upgrade-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  padding: 32px 32px 24px;\n  position: relative;\n  z-index: 1;\n}\n@media (max-width: 640px) {\n  .upgrade-header {\n    padding: 24px 20px 16px;\n  }\n}\n.upgrade-header-content {\n  flex: 1;\n  max-width: 480px;\n}\n.upgrade-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 12px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(43, 58, 240, 0.2) 0%,\n      rgba(79, 90, 246, 0.2) 100%);\n  border: 1px solid rgba(43, 58, 240, 0.3);\n  border-radius: 20px;\n  margin-bottom: 16px;\n}\n.upgrade-badge mat-icon {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n  color: white;\n}\n.upgrade-badge span {\n  font-size: 12px;\n  font-weight: 600;\n  color: white;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.upgrade-headline {\n  font-size: 28px;\n  font-weight: 700;\n  color: #ffffff;\n  margin-bottom: 8px;\n  line-height: 1.2;\n}\n@media (max-width: 640px) {\n  .upgrade-headline {\n    font-size: 22px;\n  }\n}\n.upgrade-subheadline {\n  font-size: 15px;\n  color: #94a3b8;\n  line-height: 1.5;\n  margin: 0;\n}\n.upgrade-illustration {\n  position: relative;\n  width: 120px;\n  height: 100px;\n  flex-shrink: 0;\n}\n@media (max-width: 768px) {\n  .upgrade-illustration {\n    display: none;\n  }\n}\n.floating-icon {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 12px;\n  animation: float 3s ease-in-out infinite;\n}\n.floating-icon mat-icon {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.floating-icon.icon-1 {\n  top: 0;\n  left: 20px;\n  width: 44px;\n  height: 44px;\n  background:\n    linear-gradient(\n      135deg,\n      #2b3af0 0%,\n      #0f0f2d 100%);\n  box-shadow: 0 8px 24px rgba(43, 58, 240, 0.4);\n}\n.floating-icon.icon-1 mat-icon {\n  color: white;\n}\n.floating-icon.icon-2 {\n  top: 30px;\n  right: 0;\n  width: 40px;\n  height: 40px;\n  background:\n    linear-gradient(\n      135deg,\n      #4f5af6 0%,\n      #2b3af0 100%);\n  box-shadow: 0 8px 24px rgba(79, 90, 246, 0.4);\n  animation-delay: 0.5s;\n}\n.floating-icon.icon-2 mat-icon {\n  color: white;\n}\n.floating-icon.icon-3 {\n  bottom: 0;\n  left: 40px;\n  width: 36px;\n  height: 36px;\n  background:\n    linear-gradient(\n      135deg,\n      #0f0f2d 0%,\n      #1a1a4a 100%);\n  box-shadow: 0 8px 24px rgba(15, 15, 45, 0.4);\n  animation-delay: 1s;\n}\n.floating-icon.icon-3 mat-icon {\n  color: white;\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n@keyframes float {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-8px);\n  }\n}\n.upgrade-benefits {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n  padding: 0 32px 24px;\n  position: relative;\n  z-index: 1;\n}\n@media (max-width: 768px) {\n  .upgrade-benefits {\n    grid-template-columns: 1fr;\n    gap: 12px;\n    padding: 0 20px 20px;\n  }\n}\n.benefit-item {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 16px;\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  border-radius: 12px;\n  transition: all 0.2s ease;\n}\n.benefit-item:hover {\n  background: rgba(255, 255, 255, 0.05);\n  border-color: rgba(255, 255, 255, 0.1);\n}\n.benefit-icon {\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  background: rgba(43, 58, 240, 0.15);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.benefit-icon mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: #4f5af6;\n}\n.benefit-text {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.benefit-text .benefit-title {\n  font-size: 14px;\n  font-weight: 600;\n  color: #ffffff;\n}\n.benefit-text .benefit-desc {\n  font-size: 12px;\n  color: #64748b;\n  line-height: 1.4;\n}\n.upgrade-cta {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 24px 32px 32px;\n  position: relative;\n  z-index: 1;\n}\n@media (max-width: 640px) {\n  .upgrade-cta {\n    flex-direction: column;\n    padding: 20px;\n    gap: 12px;\n  }\n}\n.upgrade-button {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 14px 28px !important;\n  background:\n    linear-gradient(\n      135deg,\n      #2b3af0 0%,\n      #0f0f2d 100%) !important;\n  border: none !important;\n  border-radius: 50px !important;\n  font-size: 15px !important;\n  font-weight: 600 !important;\n  color: white !important;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  box-shadow: 0 4px 16px rgba(43, 58, 240, 0.4);\n}\n.upgrade-button:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(43, 58, 240, 0.5);\n}\n.upgrade-button mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  transition: transform 0.2s ease;\n}\n.upgrade-button:hover mat-icon {\n  transform: translateX(4px);\n}\n@media (max-width: 640px) {\n  .upgrade-button {\n    width: 100%;\n    justify-content: center;\n  }\n}\n.upgrade-hint {\n  font-size: 13px;\n  color: #64748b;\n}\n@media (max-width: 640px) {\n  .upgrade-hint {\n    text-align: center;\n  }\n}\n.plans-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 24px;\n  margin-bottom: 24px;\n}\n@media (max-width: 1024px) {\n  .plans-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 640px) {\n  .plans-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.select-plan-card {\n  position: relative;\n  background: #ffffff;\n  border: 1px solid #e5e7eb;\n  border-radius: 20px;\n  padding: 24px;\n  transition: all 0.3s ease;\n  display: flex;\n  flex-direction: column;\n}\n.select-plan-card:hover {\n  border-color: #d1d5db;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);\n  transform: translateY(-4px);\n}\n.select-plan-card.featured {\n  border: 2px solid #2b3af0;\n  box-shadow: 0 8px 32px rgba(43, 58, 240, 0.15);\n}\n.select-plan-card.featured .featured-badge {\n  position: absolute;\n  top: -12px;\n  left: 50%;\n  transform: translateX(-50%);\n  background:\n    linear-gradient(\n      135deg,\n      #2b3af0 0%,\n      #0f0f2d 100%);\n  color: white;\n  font-size: 11px;\n  font-weight: 600;\n  padding: 4px 12px;\n  border-radius: 20px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.select-plan-card--current {\n  border: 2px solid #059669;\n  box-shadow: 0 8px 28px rgba(5, 150, 105, 0.14);\n}\n.select-plan-card--current.featured {\n  border: 2px solid #059669;\n  box-shadow: 0 8px 28px rgba(5, 150, 105, 0.18);\n}\n.current-plan-badge {\n  position: absolute;\n  top: -12px;\n  left: 16px;\n  z-index: 2;\n  background:\n    linear-gradient(\n      135deg,\n      #059669 0%,\n      #047857 100%);\n  color: white;\n  font-size: 11px;\n  font-weight: 600;\n  padding: 4px 12px;\n  border-radius: 20px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  box-shadow: 0 2px 8px rgba(5, 150, 105, 0.35);\n}\n.current-plan-badge--offset {\n  top: 22px;\n  left: 12px;\n}\n.plan-badge {\n  display: inline-flex;\n  align-items: center;\n  padding: 6px 14px;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 600;\n  margin-bottom: 16px;\n  width: fit-content;\n}\n.plan-badge.free {\n  background:\n    linear-gradient(\n      135deg,\n      #f3f4f6 0%,\n      #e5e7eb 100%);\n  color: #6b7280;\n}\n.plan-badge.plus {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(43, 58, 240, 0.08) 0%,\n      rgba(43, 58, 240, 0.15) 100%);\n  color: #2b3af0;\n}\n.plan-badge.business {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(15, 15, 45, 0.08) 0%,\n      rgba(15, 15, 45, 0.15) 100%);\n  color: #0f0f2d;\n}\n.plan-badge.enterprise {\n  background:\n    linear-gradient(\n      135deg,\n      #1f2937 0%,\n      #374151 100%);\n  color: white;\n}\n.plan-pricing {\n  margin-bottom: 8px;\n}\n.plan-pricing .plan-price {\n  font-size: 36px;\n  font-weight: 700;\n  color: #111827;\n}\n.plan-pricing .plan-price.custom {\n  font-size: 24px;\n}\n.plan-pricing .plan-period {\n  font-size: 16px;\n  color: #6b7280;\n  font-weight: 400;\n}\n.plan-range {\n  font-size: 14px;\n  color: #6b7280;\n  margin-bottom: 20px;\n}\n.plan-features {\n  display: flex;\n  gap: 16px;\n  padding: 16px 0;\n  border-top: 1px solid #e5e7eb;\n  border-bottom: 1px solid #e5e7eb;\n  margin-bottom: 20px;\n}\n@media (max-width: 480px) {\n  .plan-features {\n    flex-direction: column;\n    gap: 12px;\n  }\n}\n.plan-stat {\n  flex: 1;\n  text-align: center;\n}\n.plan-stat .stat-label {\n  display: block;\n  font-size: 11px;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 4px;\n}\n.plan-stat .stat-value {\n  display: block;\n  font-size: 14px;\n  font-weight: 600;\n  color: #374151;\n}\n.plan-includes {\n  flex: 1;\n  margin-bottom: 20px;\n}\n.plan-includes .includes-title {\n  font-size: 13px;\n  font-weight: 600;\n  color: #374151;\n  margin-bottom: 12px;\n}\n.plan-includes .includes-list {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.plan-includes .includes-list li {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  color: #6b7280;\n  padding: 6px 0;\n}\n.plan-includes .includes-list li mat-icon {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n  color: #2b3af0;\n}\n.select-button {\n  width: 100%;\n  border-radius: 50px;\n  padding: 14px;\n  font-weight: 600;\n  font-size: 14px;\n  transition: all 0.2s ease;\n  margin-top: auto;\n}\n.select-button.free {\n  border-color: #6b7280;\n  color: #6b7280;\n}\n.select-button.free mat-icon {\n  margin-left: 8px;\n}\n.select-button.free:hover {\n  background: rgba(107, 114, 128, 0.05);\n}\n.select-button.plus {\n  background:\n    linear-gradient(\n      135deg,\n      #2b3af0 0%,\n      #4f5af6 100%);\n  color: white;\n}\n.select-button.plus:hover {\n  box-shadow: 0 4px 14px rgba(43, 58, 240, 0.4);\n  transform: translateY(-2px);\n}\n.select-button.business {\n  background:\n    linear-gradient(\n      135deg,\n      #0f0f2d 0%,\n      #1a1a4a 100%);\n  color: white;\n}\n.select-button.business:hover {\n  box-shadow: 0 4px 14px rgba(15, 15, 45, 0.4);\n  transform: translateY(-2px);\n}\n.select-button.enterprise {\n  background:\n    linear-gradient(\n      135deg,\n      #1f2937 0%,\n      #111827 100%);\n  color: white;\n}\n.select-button.enterprise:hover {\n  box-shadow: 0 4px 14px rgba(31, 41, 55, 0.4);\n  transform: translateY(-2px);\n}\n.free-plan-card {\n  border: 1px solid rgba(107, 114, 128, 0.2);\n  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);\n}\n.free-plan-card:hover {\n  border-color: rgba(107, 114, 128, 0.35);\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);\n}\n.free-plan-card .plan-badge.free {\n  background:\n    linear-gradient(\n      135deg,\n      #f3f4f6 0%,\n      #e5e7eb 100%);\n  color: #6b7280;\n}\n.free-plan-card .plan-price {\n  color: #0f0f2d;\n}\n.free-plan-card .plan-period {\n  color: #6b7280;\n}\n.free-plan-card .plan-range {\n  color: #6b7280;\n}\n.free-plan-desc {\n  font-size: 14px;\n  color: #6b7280;\n  line-height: 1.5;\n  margin: 0 0 20px;\n}\n.free-plan-desc ::ng-deep .font-semibold,\n.free-plan-desc ::ng-deep b {\n  color: #2b3af0;\n  font-weight: 600;\n}\n.free-plan-desc ::ng-deep .text-verifik-vivid-blue {\n  color: #2b3af0 !important;\n}\n.slider-section {\n  margin-bottom: 32px;\n}\n.slider-section .slider-title {\n  font-size: 20px;\n  font-weight: 600;\n  color: #111827;\n  text-align: center;\n  margin-bottom: 32px;\n}\n.selected-plan-card {\n  display: flex;\n  background: #ffffff;\n  border: 1px solid #e5e7eb;\n  border-radius: 20px;\n  overflow: hidden;\n  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);\n}\n@media (max-width: 768px) {\n  .selected-plan-card {\n    flex-direction: column;\n  }\n}\n.selected-plan-left {\n  position: relative;\n  flex: 1;\n  padding: 32px;\n  display: flex;\n  flex-direction: column;\n}\n.selected-plan-left .close-button {\n  position: absolute;\n  top: 16px;\n  left: 16px;\n  color: #6b7280;\n}\n.selected-plan-left .close-button:hover {\n  background: rgba(107, 114, 128, 0.1);\n}\n.selected-pricing {\n  text-align: center;\n  margin: 24px 0;\n}\n.selected-pricing .pricing-label {\n  font-size: 14px;\n  color: #6b7280;\n  margin-bottom: 8px;\n}\n.selected-pricing .pricing-amount {\n  font-size: 36px;\n  font-weight: 700;\n  color: #0f0f2d;\n}\n.selected-pricing .pricing-amount span {\n  font-size: 16px;\n  font-weight: 400;\n  color: #6b7280;\n}\n.selected-pricing .pricing-enrolls {\n  font-size: 16px;\n  font-weight: 600;\n  color: #2b3af0;\n  margin-top: 8px;\n}\n.selected-stats {\n  display: flex;\n  gap: 16px;\n  padding: 16px;\n  background: #f9fafb;\n  border-radius: 12px;\n  margin-bottom: 24px;\n}\n.selected-stats .stat-item {\n  flex: 1;\n  text-align: center;\n}\n.selected-stats .stat-item .stat-label {\n  display: block;\n  font-size: 11px;\n  color: #9ca3af;\n  text-transform: uppercase;\n  margin-bottom: 4px;\n}\n.selected-stats .stat-item .stat-value {\n  display: block;\n  font-size: 14px;\n  font-weight: 600;\n  color: #374151;\n}\n.selected-includes {\n  margin-bottom: 24px;\n}\n.selected-includes .includes-title {\n  font-size: 14px;\n  font-weight: 600;\n  color: #374151;\n  margin-bottom: 12px;\n}\n.selected-includes .includes-list {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.selected-includes .includes-list li {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 14px;\n  color: #6b7280;\n  padding: 8px 0;\n}\n.selected-includes .includes-list li mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: #2b3af0;\n}\n.purchase-button {\n  width: 100%;\n  border-radius: 50px;\n  padding: 16px;\n  font-weight: 600;\n  font-size: 15px;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease;\n  margin-top: auto;\n}\n.purchase-button.free {\n  background:\n    linear-gradient(\n      135deg,\n      #6b7280 0%,\n      #4b5563 100%);\n}\n.purchase-button.plus {\n  background:\n    linear-gradient(\n      135deg,\n      #2b3af0 0%,\n      #4f5af6 100%);\n}\n.purchase-button.business {\n  background:\n    linear-gradient(\n      135deg,\n      #0f0f2d 0%,\n      #1a1a4a 100%);\n}\n.purchase-button:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(43, 58, 240, 0.25);\n}\n.purchase-button:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.purchase-button mat-spinner {\n  margin-right: 8px;\n}\n.selected-plan-right {\n  flex: 1.2;\n  border-left: 1px solid #e5e7eb;\n  display: flex;\n  flex-direction: column;\n}\n@media (max-width: 768px) {\n  .selected-plan-right {\n    border-left: none;\n    border-top: 1px solid #e5e7eb;\n  }\n}\n.plan-image {\n  width: 100%;\n  height: 160px;\n  object-fit: cover;\n  background:\n    linear-gradient(\n      135deg,\n      #2b3af0 0%,\n      #0f0f2d 100%);\n}\n.plan-description {\n  padding: 24px;\n}\n.plan-description h3 {\n  font-size: 20px;\n  font-weight: 600;\n  color: #111827;\n  margin-bottom: 12px;\n}\n.plan-description p {\n  font-size: 14px;\n  color: #6b7280;\n  line-height: 1.6;\n}\n.features-table {\n  padding: 0 24px;\n  flex: 1;\n}\n.features-table .table-header {\n  display: flex;\n  justify-content: space-between;\n  padding: 12px 16px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(43, 58, 240, 0.08) 0%,\n      rgba(43, 58, 240, 0.12) 100%);\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 600;\n  color: #2b3af0;\n  margin-bottom: 8px;\n}\n.features-table .table-row {\n  display: flex;\n  justify-content: space-between;\n  padding: 12px 16px;\n  border-bottom: 1px solid #f3f4f6;\n  font-size: 14px;\n}\n.features-table .table-row span:first-child {\n  color: #374151;\n}\n.features-table .table-row .table-value {\n  font-weight: 600;\n  color: #2b3af0;\n}\n.plan-footer {\n  padding: 24px;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n}\n.plan-footer .pricing-link {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 20px;\n  background: #2b3af0;\n  color: white;\n  border-radius: 50px;\n  font-size: 13px;\n  font-weight: 500;\n  text-decoration: none;\n  transition: all 0.2s ease;\n}\n.plan-footer .pricing-link mat-icon {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.plan-footer .pricing-link:hover {\n  background: #0f0f2d;\n}\n.plan-footer .terms-text {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.plan-footer .terms-text a {\n  color: #6b7280;\n  text-decoration: none;\n}\n.plan-footer .terms-text a:hover {\n  text-decoration: underline;\n}\n.range-slider {\n  position: relative;\n  height: 30px;\n  margin: 40px 0;\n}\n.range-slider::before {\n  content: "";\n  position: absolute;\n  top: 9px;\n  left: 0;\n  height: 12px;\n  width: var(--track-fill-percentage, 0%);\n  background:\n    linear-gradient(\n      90deg,\n      #2b3af0 0%,\n      #4f5af6 100%);\n  border-radius: 6px;\n  transition: width 0.1s ease;\n  z-index: 0;\n}\n.range-slider__dots {\n  display: flex;\n  justify-content: space-between;\n  left: 0;\n  position: absolute;\n  top: 10px;\n  width: 100%;\n  z-index: -1;\n  padding: 0 15px;\n}\n.range-slider__dot {\n  position: relative;\n  background-color: #2b3af0;\n  border-radius: 50%;\n  display: block;\n  height: 10px;\n  width: 10px;\n}\n.range-slider__value {\n  position: absolute;\n  top: -36px;\n  left: 50%;\n  transform: translateX(-50%);\n  height: 20px;\n  white-space: nowrap;\n  font-size: 12px;\n  font-weight: 500;\n  color: #6b7280;\n}\n.range-slider__input {\n  appearance: none;\n  background-color: transparent;\n  height: 30px;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n}\n.range-slider__input:focus {\n  outline: none;\n}\n.range-slider__input::-webkit-slider-runnable-track {\n  background-color: #e5e7eb;\n  cursor: pointer;\n  height: 12px;\n  width: 100%;\n  border-radius: 6px;\n}\n.range-slider__input::-webkit-slider-thumb {\n  appearance: none;\n  background: #2b3af0;\n  border-radius: 50%;\n  border: 2px solid white;\n  box-shadow: 0 0 0 4px white, 0 2px 8px rgba(0, 0, 0, 0.15);\n  cursor: pointer;\n  height: 30px;\n  margin-top: -9px;\n  width: 30px;\n  z-index: 2;\n  position: relative;\n  transition: transform 0.1s ease;\n}\n.range-slider__input::-webkit-slider-thumb:hover {\n  transform: scale(1.1);\n}\n.range-slider__input::-moz-range-track {\n  width: 100%;\n  height: 12px;\n  cursor: pointer;\n  border-radius: 6px;\n  background-color: #e5e7eb;\n}\n.range-slider__input::-moz-range-thumb {\n  appearance: none;\n  background: #2b3af0;\n  border-radius: 50%;\n  border: 2px solid white;\n  box-shadow: 0 0 0 4px white, 0 2px 8px rgba(0, 0, 0, 0.15);\n  cursor: pointer;\n  height: 30px;\n  width: 30px;\n}\n.landing-slider-section {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(43, 58, 240, 0.04) 0%,\n      rgba(79, 90, 246, 0.06) 100%);\n  border: 1px solid rgba(43, 58, 240, 0.12);\n  border-radius: 20px;\n  padding: 32px;\n  margin-bottom: 24px;\n  text-align: center;\n}\n@media (max-width: 640px) {\n  .landing-slider-section {\n    padding: 24px 16px;\n  }\n}\n.landing-slider-title {\n  font-size: 22px;\n  font-weight: 700;\n  color: #0f0f2d;\n  margin: 0 0 8px;\n}\n.landing-slider-subtitle {\n  font-size: 14px;\n  color: #6b7280;\n  margin: 0 0 28px;\n}\n.landing-slider-track {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 20px;\n}\n.landing-slider-track .track-label {\n  font-size: 13px;\n  font-weight: 600;\n  color: #6b7280;\n  white-space: nowrap;\n  min-width: 50px;\n}\n.landing-slider-track .track-label:first-child {\n  text-align: right;\n}\n.landing-slider-track .track-label:last-child {\n  text-align: left;\n}\n.landing-slider-track .track-slider {\n  flex: 1;\n  min-width: 0;\n}\n.landing-slider-track .track-slider .range-slider {\n  margin: 0;\n}\n.landing-slider-pill {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background:\n    linear-gradient(\n      135deg,\n      #2b3af0 0%,\n      #0f0f2d 100%);\n  color: white;\n  padding: 12px 24px;\n  border-radius: 50px;\n  font-size: 15px;\n  font-weight: 500;\n  box-shadow: 0 4px 16px rgba(43, 58, 240, 0.3);\n}\n.landing-slider-pill strong {\n  font-size: 20px;\n  font-weight: 700;\n}\n.volume-change-summary {\n  margin-top: 24px;\n  max-width: 28rem;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 20px 20px 18px;\n  border-radius: 16px;\n  background: #ffffff;\n  border: 1px solid rgba(15, 15, 45, 0.08);\n  box-shadow:\n    0 0 0 1px rgba(255, 255, 255, 0.8) inset,\n    0 1px 2px rgba(15, 15, 45, 0.04),\n    0 8px 24px rgba(15, 15, 45, 0.06);\n}\n.volume-change-summary__head {\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  margin-bottom: 18px;\n  text-align: left;\n}\n.volume-change-summary__head-icon {\n  flex-shrink: 0;\n  width: 40px;\n  height: 40px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      145deg,\n      rgba(99, 102, 241, 0.12) 0%,\n      rgba(43, 58, 240, 0.08) 100%);\n  border: 1px solid rgba(99, 102, 241, 0.2);\n}\n.volume-change-summary__head-icon mat-icon {\n  font-size: 22px;\n  width: 22px;\n  height: 22px;\n  color: #4338ca;\n}\n.volume-change-summary__head-text {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 0;\n}\n.volume-change-summary__eyebrow {\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  color: #6b7280;\n}\n.volume-change-summary__title {\n  font-size: 15px;\n  font-weight: 600;\n  color: #111827;\n  letter-spacing: -0.01em;\n  line-height: 1.35;\n}\n.volume-change-summary__compare {\n  display: grid;\n  grid-template-columns: 1fr auto 1fr;\n  gap: 10px;\n  align-items: stretch;\n}\n.volume-change-summary__panel {\n  padding: 14px 12px;\n  border-radius: 12px;\n  background: #f9fafb;\n  border: 1px solid rgba(15, 15, 45, 0.06);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  gap: 4px;\n  transition:\n    border-color 0.2s ease,\n    box-shadow 0.2s ease,\n    background 0.2s ease;\n}\n.volume-change-summary__panel--from {\n  background:\n    linear-gradient(\n      180deg,\n      #fafafa 0%,\n      #f3f4f6 100%);\n}\n.volume-change-summary__panel--to {\n  background:\n    linear-gradient(\n      180deg,\n      #fafbff 0%,\n      #f5f5ff 100%);\n  border-color: rgba(67, 56, 202, 0.12);\n}\n.volume-change-summary__panel--highlight {\n  border-color: rgba(43, 58, 240, 0.35);\n  box-shadow: 0 0 0 3px rgba(43, 58, 240, 0.12);\n  background:\n    linear-gradient(\n      180deg,\n      #f8f9ff 0%,\n      #eef2ff 100%);\n}\n.volume-change-summary__panel-label {\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: #6b7280;\n}\n.volume-change-summary__panel-value {\n  font-size: 28px;\n  font-weight: 700;\n  font-variant-numeric: tabular-nums;\n  letter-spacing: -0.03em;\n  color: #0f0f2d;\n  line-height: 1.1;\n}\n.volume-change-summary__panel-unit {\n  font-size: 12px;\n  font-weight: 500;\n  color: #9ca3af;\n}\n.volume-change-summary__mid {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 44px;\n  align-self: center;\n}\n.volume-change-summary__mid-icon {\n  width: 32px;\n  height: 32px;\n  border-radius: 999px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #ffffff;\n  border: 1px solid rgba(15, 15, 45, 0.1);\n  box-shadow: 0 2px 6px rgba(15, 15, 45, 0.06);\n}\n.volume-change-summary__mid-icon mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: #4338ca;\n}\n.volume-change-summary__hint {\n  margin: 14px 0 0;\n  padding-top: 12px;\n  border-top: 1px solid rgba(15, 15, 45, 0.06);\n  font-size: 13px;\n  line-height: 1.45;\n  color: #6b7280;\n  text-align: center;\n}\n@media (max-width: 480px) {\n  .volume-change-summary__compare {\n    grid-template-columns: 1fr;\n    gap: 12px;\n  }\n  .volume-change-summary__mid {\n    width: 100%;\n    min-width: 0;\n    padding: 4px 0;\n  }\n  .volume-change-summary__mid-icon mat-icon {\n    transform: rotate(90deg);\n  }\n}\n.checkout-card {\n  background: #ffffff;\n  border-radius: 24px;\n  border: 1px solid rgba(43, 58, 240, 0.12);\n  overflow: hidden;\n  box-shadow: 0 8px 40px rgba(15, 15, 45, 0.08);\n}\n.checkout-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 24px 32px;\n  color: white;\n}\n.checkout-header.header-free {\n  background:\n    linear-gradient(\n      135deg,\n      #6b7280 0%,\n      #4b5563 100%);\n}\n.checkout-header.header-plus {\n  background:\n    linear-gradient(\n      135deg,\n      #2b3af0 0%,\n      #4f5af6 100%);\n}\n.checkout-header.header-business {\n  background:\n    linear-gradient(\n      135deg,\n      #0f0f2d 0%,\n      #1a1a4a 100%);\n}\n@media (max-width: 640px) {\n  .checkout-header {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 16px;\n    padding: 20px 24px;\n  }\n}\n.checkout-plan-info {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.checkout-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 16px;\n  border-radius: 50px;\n  font-size: 14px;\n  font-weight: 600;\n  width: fit-content;\n}\n.checkout-badge mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.checkout-badge.free {\n  background: rgba(255, 255, 255, 0.2);\n  color: white;\n}\n.checkout-badge.plus {\n  background: rgba(255, 255, 255, 0.2);\n  color: white;\n}\n.checkout-badge.business {\n  background: rgba(255, 255, 255, 0.15);\n  color: white;\n}\n.checkout-plan-type {\n  font-size: 13px;\n  color: rgba(255, 255, 255, 0.8);\n  padding-left: 4px;\n}\n.checkout-price {\n  display: flex;\n  align-items: baseline;\n  gap: 2px;\n}\n.checkout-price .price-from {\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.7);\n  margin-right: 8px;\n}\n.checkout-price .price-currency {\n  font-size: 24px;\n  font-weight: 600;\n}\n.checkout-price .price-value {\n  font-size: 42px;\n  font-weight: 700;\n  line-height: 1;\n}\n.checkout-price .price-period {\n  font-size: 16px;\n  color: rgba(255, 255, 255, 0.8);\n  margin-left: 4px;\n}\n@media (max-width: 640px) {\n  .checkout-price .price-value {\n    font-size: 32px;\n  }\n}\n.checkout-stats {\n  display: flex;\n  padding: 24px 32px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(43, 58, 240, 0.04) 0%,\n      rgba(79, 90, 246, 0.06) 100%);\n  border-bottom: 1px solid rgba(43, 58, 240, 0.08);\n}\n@media (max-width: 768px) {\n  .checkout-stats {\n    flex-wrap: wrap;\n    gap: 16px;\n    padding: 20px 24px;\n  }\n}\n.checkout-stats .stat-item {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  gap: 4px;\n  min-width: 80px;\n}\n.checkout-stats .stat-item mat-icon {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  color: #2b3af0;\n  margin-bottom: 4px;\n}\n.checkout-stats .stat-item .stat-value {\n  font-size: 18px;\n  font-weight: 700;\n  color: #0f0f2d;\n}\n.checkout-stats .stat-item .stat-label {\n  font-size: 11px;\n  color: #6b7280;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n}\n.checkout-stats .stat-divider {\n  width: 1px;\n  background: rgba(43, 58, 240, 0.15);\n  margin: 0 8px;\n}\n@media (max-width: 768px) {\n  .checkout-stats .stat-divider {\n    display: none;\n  }\n}\n.checkout-features {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 32px;\n  padding: 28px 32px;\n  border-bottom: 1px solid rgba(43, 58, 240, 0.08);\n}\n@media (max-width: 640px) {\n  .checkout-features {\n    grid-template-columns: 1fr;\n    gap: 24px;\n    padding: 24px;\n  }\n}\n.features-column .features-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 14px;\n  font-weight: 600;\n  margin: 0 0 16px;\n}\n.features-column .features-title mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.features-column .features-title.included-title {\n  color: #2b3af0;\n}\n.features-column .features-title.included-title mat-icon {\n  color: #2b3af0;\n}\n.features-column .features-title.extra-title {\n  color: #0f0f2d;\n}\n.features-column .features-title.extra-title mat-icon {\n  color: #0f0f2d;\n}\n.features-column .features-list {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.features-column .features-list li {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 0;\n  font-size: 14px;\n  color: #6b7280;\n  border-bottom: 1px solid rgba(107, 114, 128, 0.1);\n}\n.features-column .features-list li:last-child {\n  border-bottom: none;\n}\n.features-column .features-list.included .feature-count {\n  font-weight: 600;\n  color: #2b3af0;\n}\n.features-column .features-list.included .feature-check {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n  color: #2b3af0;\n}\n.features-column .features-list.extra .feature-price {\n  font-size: 12px;\n  font-weight: 600;\n  color: #0f0f2d;\n}\n.features-column .features-list.extra .extras-link {\n  font-size: 12px;\n  color: #2b3af0;\n  text-decoration: none;\n  font-weight: 500;\n}\n.features-column .features-list.extra .extras-link:hover {\n  text-decoration: underline;\n}\n.extra-bio-notice {\n  margin: 0 32px 24px;\n  border: 1px solid rgba(43, 58, 240, 0.15);\n  border-radius: 12px;\n  overflow: hidden;\n}\n@media (max-width: 640px) {\n  .extra-bio-notice {\n    margin: 0 24px 24px;\n  }\n}\n.extra-bio-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 14px 16px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(43, 58, 240, 0.06) 0%,\n      rgba(79, 90, 246, 0.08) 100%);\n  cursor: pointer;\n  transition: background 0.2s ease;\n}\n.extra-bio-header:hover {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(43, 58, 240, 0.1) 0%,\n      rgba(79, 90, 246, 0.12) 100%);\n}\n.extra-bio-header .extra-bio-left {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.extra-bio-header .extra-bio-left .info-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: #2b3af0;\n}\n.extra-bio-header .extra-bio-left span {\n  font-size: 14px;\n  font-weight: 500;\n  color: #0f0f2d;\n}\n.extra-bio-header .expand-icon {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  color: #6b7280;\n  transition: transform 0.3s ease;\n}\n.extra-bio-header .expand-icon.expanded {\n  transform: rotate(180deg);\n}\n.extra-bio-body {\n  padding: 16px;\n  background: white;\n  animation: slideDown 0.3s ease-out;\n}\n.extra-bio-body p {\n  font-size: 13px;\n  color: #6b7280;\n  line-height: 1.6;\n  margin: 0 0 16px;\n}\n.extra-bio-body .extra-bio-costs {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.extra-bio-body .extra-bio-costs .bio-cost-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 14px;\n  background: rgba(43, 58, 240, 0.04);\n  border-radius: 8px;\n  font-size: 13px;\n}\n.extra-bio-body .extra-bio-costs .bio-cost-item span {\n  color: #6b7280;\n}\n.extra-bio-body .extra-bio-costs .bio-cost-item strong {\n  color: #0f0f2d;\n  font-weight: 600;\n}\n@keyframes slideDown {\n  from {\n    opacity: 0;\n    max-height: 0;\n  }\n  to {\n    opacity: 1;\n    max-height: 300px;\n  }\n}\n.checkout-actions {\n  padding: 24px 32px 32px;\n  text-align: center;\n}\n@media (max-width: 640px) {\n  .checkout-actions {\n    padding: 24px;\n  }\n}\n.checkout-button {\n  width: 100%;\n  max-width: 400px;\n  border-radius: 50px !important;\n  padding: 16px 32px !important;\n  font-size: 16px !important;\n  font-weight: 600 !important;\n  color: white !important;\n  display: inline-flex !important;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  transition: all 0.2s ease;\n  border: none !important;\n}\n.checkout-button.free {\n  background:\n    linear-gradient(\n      135deg,\n      #6b7280 0%,\n      #4b5563 100%) !important;\n}\n.checkout-button.plus {\n  background:\n    linear-gradient(\n      135deg,\n      #2b3af0 0%,\n      #4f5af6 100%) !important;\n  box-shadow: 0 4px 20px rgba(43, 58, 240, 0.35);\n}\n.checkout-button.business {\n  background:\n    linear-gradient(\n      135deg,\n      #0f0f2d 0%,\n      #1a1a4a 100%) !important;\n  box-shadow: 0 4px 20px rgba(15, 15, 45, 0.35);\n}\n.checkout-button:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 28px rgba(43, 58, 240, 0.4);\n}\n.checkout-button:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.checkout-button mat-spinner {\n  margin-right: 8px;\n}\n.checkout-terms {\n  font-size: 12px;\n  color: #6b7280;\n  margin-top: 16px;\n}\n.checkout-terms a {\n  color: #2b3af0;\n  text-decoration: none;\n  font-weight: 500;\n}\n.checkout-terms a:hover {\n  text-decoration: underline;\n}\n@keyframes pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.5;\n  }\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.animate-fadeIn {\n  animation: fadeIn 0.4s ease-out forwards;\n  opacity: 0;\n}\n:host-context(.dark) .plans-container {\n  background:\n    linear-gradient(\n      180deg,\n      #0b0b18 0%,\n      #0f0f1f 100%);\n}\n:host-context(.dark) .current-plan-title,\n:host-context(.dark) .current-plan-header .current-plan-title {\n  color: #f8fafc;\n}\n:host-context(.dark) .current-plan-subtitle,\n:host-context(.dark) .current-plan-header .current-plan-subtitle {\n  color: #94a3b8;\n}\n:host-context(.dark) .text-gray-900 {\n  color: #f8fafc !important;\n}\n:host-context(.dark) .text-gray-500 {\n  color: #94a3b8 !important;\n}\n:host-context(.dark) .text-gray-400 {\n  color: rgba(148, 163, 184, 0.75) !important;\n}\n:host-context(.dark) .plan-card,\n:host-context(.dark) .select-plan-card,\n:host-context(.dark) .checkout-card,\n:host-context(.dark) .volume-change-summary {\n  background: #11122a;\n  border-color: rgba(255, 255, 255, 0.08);\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4), 0 12px 32px rgba(0, 0, 0, 0.35);\n}\n:host-context(.dark) .plan-card:hover,\n:host-context(.dark) .select-plan-card:hover,\n:host-context(.dark) .checkout-card:hover,\n:host-context(.dark) .volume-change-summary:hover {\n  border-color: rgba(43, 58, 240, 0.35);\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.45), 0 16px 40px rgba(0, 0, 0, 0.45);\n}\n:host-context(.dark) .plan-card.payment-failed {\n  border-color: rgba(248, 113, 113, 0.45);\n}\n:host-context(.dark) .select-plan-card.featured {\n  border-color: #2b3af0;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4), 0 12px 28px rgba(43, 58, 240, 0.25);\n}\n:host-context(.dark) .select-plan-card.featured:hover {\n  border-color: #4f5af6;\n}\n:host-context(.dark) .select-plan-card--current {\n  border-color: #34d399;\n  box-shadow: 0 8px 28px rgba(52, 211, 153, 0.2);\n}\n:host-context(.dark) .select-plan-card--current.featured {\n  border-color: #34d399;\n  box-shadow: 0 8px 28px rgba(52, 211, 153, 0.22);\n}\n:host-context(.dark) .free-plan-card {\n  border-color: rgba(255, 255, 255, 0.08);\n  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.35);\n}\n:host-context(.dark) .free-plan-card:hover {\n  border-color: rgba(148, 163, 184, 0.25);\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);\n}\n:host-context(.dark) .free-plan-card .plan-badge.free {\n  background: rgba(148, 163, 184, 0.16);\n  color: #cbd5e1;\n}\n:host-context(.dark) .free-plan-card .plan-price {\n  color: #f8fafc;\n}\n:host-context(.dark) .free-plan-card .plan-period,\n:host-context(.dark) .free-plan-card .plan-range {\n  color: #94a3b8;\n}\n:host-context(.dark) .card-header {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.04) 0%,\n      rgba(255, 255, 255, 0.02) 100%);\n  border-bottom-color: rgba(255, 255, 255, 0.08);\n}\n:host-context(.dark) .card-header h2 {\n  color: #f8fafc !important;\n}\n:host-context(.dark) .price-section,\n:host-context(.dark) .payment-method,\n:host-context(.dark) .optional-section,\n:host-context(.dark) .selected-stats {\n  background: rgba(255, 255, 255, 0.04);\n}\n:host-context(.dark) .price-section .price-label,\n:host-context(.dark) .price-section .price-period,\n:host-context(.dark) .price-section .price-amount .price-currency {\n  color: #94a3b8;\n}\n:host-context(.dark) .price-section .price-amount {\n  color: #f8fafc;\n}\n:host-context(.dark) .payment-method {\n  background: rgba(255, 255, 255, 0.04);\n}\n:host-context(.dark) .payment-method .payment-icon.link {\n  color: #cbd5f5;\n}\n:host-context(.dark) .payment-method .payment-text {\n  color: #cbd5f5;\n}\n:host-context(.dark) .payment-method .payment-expiry {\n  color: #94a3b8;\n}\n:host-context(.dark) .feature-card {\n  background: rgba(255, 255, 255, 0.04);\n  border-color: rgba(255, 255, 255, 0.08);\n}\n:host-context(.dark) .feature-card:hover {\n  border-color: rgba(43, 58, 240, 0.25);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.35);\n}\n:host-context(.dark) .feature-content .feature-label {\n  color: #94a3b8;\n}\n:host-context(.dark) .feature-content .feature-value {\n  color: #f8fafc;\n}\n:host-context(.dark) .feature-icon.whitelabel {\n  color: #cbd5f5;\n}\n:host-context(.dark) .feature-status {\n  color: rgba(255, 255, 255, 0.18);\n}\n:host-context(.dark) .feature-status.active {\n  color: #4f5af6;\n}\n:host-context(.dark) .optional-section {\n  background: rgba(255, 255, 255, 0.04);\n}\n:host-context(.dark) .optional-section .optional-title {\n  color: #f8fafc;\n}\n:host-context(.dark) .optional-section .optional-subtitle {\n  color: #94a3b8;\n}\n:host-context(.dark) .optional-card {\n  background: rgba(255, 255, 255, 0.03);\n  border-color: rgba(255, 255, 255, 0.08);\n}\n:host-context(.dark) .optional-card .optional-label {\n  color: #cbd5f5;\n}\n:host-context(.dark) .optional-card .optional-value {\n  color: #94a3b8;\n}\n:host-context(.dark) .optional-card .optional-link {\n  color: #4f5af6;\n}\n:host-context(.dark) .optional-card .optional-link:hover {\n  color: white;\n}\n:host-context(.dark) .status-badge.success {\n  background: rgba(43, 58, 240, 0.18);\n  color: #4f5af6;\n}\n:host-context(.dark) .status-badge.warning {\n  background: rgba(245, 158, 11, 0.18);\n  color: #fbbf24;\n}\n:host-context(.dark) .status-badge.error {\n  background: rgba(239, 68, 68, 0.18);\n  color: #f87171;\n}\n:host-context(.dark) .payment-alert {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(127, 29, 29, 0.35) 0%,\n      rgba(127, 29, 29, 0.25) 100%);\n  border-bottom-color: rgba(248, 113, 113, 0.35);\n  color: #fca5a5;\n}\n:host-context(.dark) .payment-alert mat-icon {\n  color: #f87171;\n}\n:host-context(.dark) .plan-pricing .plan-price {\n  color: #f8fafc;\n}\n:host-context(.dark) .plan-pricing .plan-price.custom {\n  color: #f8fafc;\n}\n:host-context(.dark) .plan-pricing .plan-period {\n  color: #94a3b8;\n}\n:host-context(.dark) .plan-range,\n:host-context(.dark) .free-plan-desc {\n  color: #94a3b8;\n}\n:host-context(.dark) .plan-range ::ng-deep .font-semibold,\n:host-context(.dark) .plan-range ::ng-deep b,\n:host-context(.dark) .free-plan-desc ::ng-deep .font-semibold,\n:host-context(.dark) .free-plan-desc ::ng-deep b {\n  color: #4f5af6;\n}\n:host-context(.dark) .plan-range ::ng-deep .text-verifik-vivid-blue,\n:host-context(.dark) .free-plan-desc ::ng-deep .text-verifik-vivid-blue {\n  color: #4f5af6 !important;\n}\n:host-context(.dark) .plan-features {\n  border-top-color: rgba(255, 255, 255, 0.06);\n  border-bottom-color: rgba(255, 255, 255, 0.06);\n}\n:host-context(.dark) .plan-stat .stat-label {\n  color: #94a3b8;\n}\n:host-context(.dark) .plan-stat .stat-value {\n  color: #f8fafc;\n}\n:host-context(.dark) .plan-includes .includes-title {\n  color: #f8fafc;\n}\n:host-context(.dark) .plan-includes .includes-list li {\n  color: #cbd5f5;\n}\n:host-context(.dark) .plan-includes .includes-list li mat-icon {\n  color: #4f5af6;\n}\n:host-context(.dark) .plan-badge.free {\n  background: rgba(148, 163, 184, 0.16);\n  color: #cbd5e1;\n}\n:host-context(.dark) .plan-badge.plus {\n  background: rgba(79, 90, 246, 0.22);\n  color: #4f5af6;\n}\n:host-context(.dark) .plan-badge.business {\n  background: rgba(79, 90, 246, 0.22);\n  color: white;\n}\n:host-context(.dark) .plan-badge.enterprise {\n  background:\n    linear-gradient(\n      135deg,\n      #1f2937 0%,\n      #0b0b18 100%);\n  color: white;\n}\n:host-context(.dark) .select-button.free {\n  border-color: rgba(148, 163, 184, 0.45);\n  color: #cbd5f5;\n}\n:host-context(.dark) .select-button.free:hover {\n  background: rgba(148, 163, 184, 0.12);\n}\n:host-context(.dark) .landing-slider-section {\n  background: rgba(43, 58, 240, 0.08);\n  border-color: rgba(79, 90, 246, 0.18);\n}\n:host-context(.dark) .landing-slider-title {\n  color: #f8fafc;\n}\n:host-context(.dark) .landing-slider-subtitle,\n:host-context(.dark) .landing-slider-track .track-label {\n  color: #94a3b8;\n}\n:host-context(.dark) .landing-slider-pill {\n  background:\n    linear-gradient(\n      135deg,\n      #2b3af0 0%,\n      #3730a3 100%);\n  color: white;\n  box-shadow: 0 4px 16px rgba(43, 58, 240, 0.45);\n}\n:host-context(.dark) .volume-change-summary__head-icon {\n  background: rgba(79, 90, 246, 0.15);\n  border-color: rgba(99, 102, 241, 0.3);\n}\n:host-context(.dark) .volume-change-summary__head-icon mat-icon {\n  color: #4f5af6;\n}\n:host-context(.dark) .volume-change-summary__eyebrow,\n:host-context(.dark) .volume-change-summary__panel-label,\n:host-context(.dark) .volume-change-summary__panel-unit,\n:host-context(.dark) .volume-change-summary__hint {\n  color: #94a3b8;\n}\n:host-context(.dark) .volume-change-summary__title {\n  color: #f8fafc;\n}\n:host-context(.dark) .volume-change-summary__panel {\n  border-color: rgba(255, 255, 255, 0.08);\n}\n:host-context(.dark) .volume-change-summary__panel--from {\n  background: rgba(255, 255, 255, 0.04);\n}\n:host-context(.dark) .volume-change-summary__panel--to {\n  background: rgba(43, 58, 240, 0.08);\n  border-color: rgba(67, 56, 202, 0.25);\n}\n:host-context(.dark) .volume-change-summary__panel--to.volume-change-summary__panel--highlight {\n  border-color: rgba(43, 58, 240, 0.45);\n  box-shadow: 0 0 0 2px rgba(43, 58, 240, 0.15);\n  background: rgba(43, 58, 240, 0.12);\n}\n:host-context(.dark) .volume-change-summary__panel-value {\n  color: #f8fafc;\n}\n:host-context(.dark) .volume-change-summary__mid-icon {\n  background: #11122a;\n  border-color: rgba(255, 255, 255, 0.08);\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.35);\n}\n:host-context(.dark) .volume-change-summary__mid-icon mat-icon {\n  color: #4f5af6;\n}\n:host-context(.dark) .volume-change-summary__hint {\n  border-top-color: rgba(255, 255, 255, 0.06);\n}\n:host-context(.dark) .checkout-card {\n  border-color: rgba(79, 90, 246, 0.18);\n}\n:host-context(.dark) .checkout-stats {\n  background: rgba(43, 58, 240, 0.08);\n  border-bottom-color: rgba(79, 90, 246, 0.18);\n}\n:host-context(.dark) .checkout-stats .stat-item mat-icon {\n  color: #4f5af6;\n}\n:host-context(.dark) .checkout-stats .stat-item .stat-value {\n  color: #f8fafc;\n}\n:host-context(.dark) .checkout-stats .stat-item .stat-label {\n  color: #94a3b8;\n}\n:host-context(.dark) .checkout-stats .stat-divider {\n  background: rgba(255, 255, 255, 0.12);\n}\n:host-context(.dark) .checkout-features {\n  border-bottom-color: rgba(79, 90, 246, 0.18);\n}\n:host-context(.dark) .checkout-features .features-column .features-title.included-title,\n:host-context(.dark) .checkout-features .features-column .features-title.included-title mat-icon {\n  color: #4f5af6;\n}\n:host-context(.dark) .checkout-features .features-column .features-title.extra-title,\n:host-context(.dark) .checkout-features .features-column .features-title.extra-title mat-icon {\n  color: #f8fafc;\n}\n:host-context(.dark) .checkout-features .features-column .features-list li {\n  color: #cbd5f5;\n  border-bottom-color: rgba(255, 255, 255, 0.06);\n}\n:host-context(.dark) .checkout-features .features-column .features-list li .feature-count {\n  color: #4f5af6;\n}\n:host-context(.dark) .checkout-features .features-column .features-list li .feature-check {\n  color: #34d399;\n}\n:host-context(.dark) .checkout-features .features-column .features-list li .feature-price {\n  color: #cbd5f5;\n}\n:host-context(.dark) .checkout-features .features-column .features-list li .extras-link {\n  color: #4f5af6;\n}\n:host-context(.dark) .extra-bio-notice {\n  border-color: rgba(79, 90, 246, 0.2);\n}\n:host-context(.dark) .extra-bio-header {\n  background: rgba(43, 58, 240, 0.12);\n}\n:host-context(.dark) .extra-bio-header:hover {\n  background: rgba(43, 58, 240, 0.18);\n}\n:host-context(.dark) .extra-bio-header .extra-bio-left span {\n  color: #f8fafc;\n}\n:host-context(.dark) .extra-bio-header .extra-bio-left .info-icon {\n  color: #4f5af6;\n}\n:host-context(.dark) .extra-bio-header .expand-icon {\n  color: #94a3b8;\n}\n:host-context(.dark) .extra-bio-body {\n  background: rgba(255, 255, 255, 0.02);\n}\n:host-context(.dark) .extra-bio-body p {\n  color: #94a3b8;\n}\n:host-context(.dark) .extra-bio-body .extra-bio-costs .bio-cost-item {\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid rgba(79, 90, 246, 0.15);\n}\n:host-context(.dark) .extra-bio-body .extra-bio-costs .bio-cost-item span {\n  color: #cbd5f5;\n}\n:host-context(.dark) .extra-bio-body .extra-bio-costs .bio-cost-item strong {\n  color: #f8fafc;\n  font-weight: 600;\n}\n:host-context(.dark) .checkout-terms {\n  color: #94a3b8;\n}\n:host-context(.dark) .checkout-terms a {\n  color: #4f5af6;\n}\n:host-context(.dark) .range-slider .range-slider__value {\n  color: #94a3b8;\n}\n:host-context(.dark) .range-slider .range-slider__input::-webkit-slider-runnable-track {\n  background-color: rgba(255, 255, 255, 0.14);\n}\n:host-context(.dark) .range-slider .range-slider__input::-webkit-slider-thumb {\n  border-color: #11122a !important;\n  box-shadow: 0 0 0 4px #11122a, 0 2px 10px rgba(43, 58, 240, 0.45);\n}\n:host-context(.dark) .range-slider .range-slider__input::-moz-range-track {\n  background-color: rgba(255, 255, 255, 0.14);\n}\n:host-context(.dark) .range-slider .range-slider__input::-moz-range-thumb {\n  border-color: #11122a !important;\n  box-shadow: 0 0 0 4px #11122a, 0 2px 10px rgba(43, 58, 240, 0.45);\n}\n:host-context(.dark) .selected-plan-card,\n:host-context(.dark) .features-table .table-row {\n  background: transparent;\n  border-color: rgba(255, 255, 255, 0.08);\n}\n:host-context(.dark) .features-table .table-row span:first-child {\n  color: #cbd5f5;\n}\n:host-context(.dark) .plan-description h3 {\n  color: #f8fafc;\n}\n:host-context(.dark) .plan-description p {\n  color: #94a3b8;\n}\n:host-context(.dark) .slider-section .slider-title {\n  color: #f8fafc;\n}\n:host-context(.dark) .upgrade-hint {\n  color: #94a3b8;\n}\n:host-context(.dark) .back-button:hover {\n  background: rgba(43, 58, 240, 0.15);\n}\n:host-context(.dark) .usage-period {\n  background: rgba(43, 58, 240, 0.16);\n  border-color: rgba(79, 90, 246, 0.28);\n}\n:host-context(.dark) .usage-period__title {\n  color: #f8fafc;\n}\n:host-context(.dark) .usage-period__reset {\n  color: rgb(147, 197, 253);\n}\n:host-context(.dark) .usage-period__date {\n  color: #94a3b8;\n}\n:host-context(.dark) .usage-bars {\n  background: rgba(255, 255, 255, 0.04);\n  border-color: rgba(255, 255, 255, 0.1);\n}\n/*# sourceMappingURL=smart-enroll-plans.component.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HumanAuthnPlansComponent, { className: "HumanAuthnPlansComponent", filePath: "src/app/modules/human-authn/plans/human-authn-plans.component.ts", lineNumber: 44 });
})();
export {
  HumanAuthnPlansComponent
};
//# sourceMappingURL=chunk-66IPMRVF.js.map
