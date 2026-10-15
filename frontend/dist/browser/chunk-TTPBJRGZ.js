import {
  BACKGROUND_CHECK_LIST_PRICE,
  COLOMBIA_IDENTITY_LIST_PRICE,
  SmartEnrollPlansService,
  UsageQuotaBarComponent,
  UsageQuotaGaugeComponent,
  daysUntilReset,
  discountedOveragePrice,
  remaining,
  resolveDiscountPercent
} from "./chunk-LGM7BCW4.js";
import {
  SubscriptionService
} from "./chunk-QKEV5AXG.js";
import {
  AuthRequiredGateService
} from "./chunk-A6DA237F.js";
import {
  FuseSplashScreenService
} from "./chunk-Q3XPOPVL.js";
import {
  extractClientSettingsPayload,
  invoiceBillingDetailsComplete
} from "./chunk-FY4LH25C.js";
import {
  MatSnackBar
} from "./chunk-O4LKJP5L.js";
import "./chunk-RKG2MQOF.js";
import "./chunk-QDHC3TI3.js";
import "./chunk-W2APQW4E.js";
import "./chunk-JURKDGMK.js";
import "./chunk-DW2XB3R4.js";
import "./chunk-WXNXCCYE.js";
import "./chunk-BYQUUNDI.js";
import "./chunk-PDLCCGUT.js";
import "./chunk-GG23NHUM.js";
import "./chunk-A4N7R4VF.js";
import "./chunk-64R62RHA.js";
import {
  UserService
} from "./chunk-6VQY5BEJ.js";
import "./chunk-F5BVEUVX.js";
import "./chunk-V36MHRLI.js";
import "./chunk-EVWXSBKG.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-CTAWHRE6.js";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogModule,
  MatDialogRef,
  MatDialogTitle
} from "./chunk-WKFG3L4B.js";
import "./chunk-OIBNGD5S.js";
import "./chunk-7FACNXV2.js";
import {
  MatButton,
  MatButtonModule,
  MatIconButton
} from "./chunk-NBA3XD53.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-EIYDU75T.js";
import "./chunk-IXSC6NFZ.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  RangeValueAccessor
} from "./chunk-5EV2TUYF.js";
import {
  TranslocoDirective,
  TranslocoModule,
  TranslocoPipe,
  TranslocoService
} from "./chunk-VENEX45A.js";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-DM2XPT7T.js";
import "./chunk-KTYFS5OT.js";
import {
  AsyncPipe,
  ChangeDetectorRef,
  CommonModule,
  Component,
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
  Input,
  NgClass,
  NgForOf,
  NgIf,
  catchError,
  inject,
  map,
  of,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
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
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
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
} from "./chunk-I5BUD46C.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-F5M2C4EZ.js";

// src/app/modules/smart-enroll/plans/smart-enroll-billing-required-dialog.component.ts
var SmartEnrollBillingRequiredDialogComponent = class _SmartEnrollBillingRequiredDialogComponent {
  constructor() {
    this._dialogRef = inject(MatDialogRef);
    this._router = inject(Router);
  }
  goToBillingDetails() {
    this._dialogRef.close();
    void this._router.navigate(["/settings", "billing-details"], {
      queryParams: { returnUrl: "/smart-enroll/plans" }
    });
  }
  static {
    this.\u0275fac = function SmartEnrollBillingRequiredDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SmartEnrollBillingRequiredDialogComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SmartEnrollBillingRequiredDialogComponent, selectors: [["smart-enroll-billing-required-dialog"]], decls: 14, vars: 13, consts: [["mat-dialog-title", "", 1, "!m-0", "!font-semibold", "!text-lg", "text-gray-900"], [1, "m-0", "text-sm", "leading-relaxed", "text-gray-600"], ["align", "end"], ["mat-button", "", 3, "mat-dialog-close"], ["mat-flat-button", "", "color", "primary", "type", "button", 3, "click"]], template: function SmartEnrollBillingRequiredDialogComponent_Template(rf, ctx) {
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
        \u0275\u0275listener("click", function SmartEnrollBillingRequiredDialogComponent_Template_button_click_11_listener() {
          return ctx.goToBillingDetails();
        });
        \u0275\u0275text(12);
        \u0275\u0275pipe(13, "transloco");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 5, "smartenroll.plans.billing_required_title"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 7, "smartenroll.plans.billing_required_message"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("mat-dialog-close", false);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 9, "smartenroll.plans.billing_required_cancel"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 11, "smartenroll.plans.billing_required_go_settings"), " ");
      }
    }, dependencies: [MatDialogModule, MatDialogClose, MatDialogTitle, MatDialogActions, MatDialogContent, MatButtonModule, MatButton, TranslocoModule, TranslocoPipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SmartEnrollBillingRequiredDialogComponent, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "smart-enroll-billing-required-dialog",
      imports: [MatDialogModule, MatButtonModule, TranslocoModule],
      template: `
        <h2 mat-dialog-title class="!m-0 !font-semibold !text-lg text-gray-900">
            {{ 'smartenroll.plans.billing_required_title' | transloco }}
        </h2>
        <mat-dialog-content>
            <p class="m-0 text-sm leading-relaxed text-gray-600">
                {{ 'smartenroll.plans.billing_required_message' | transloco }}
            </p>
        </mat-dialog-content>
        <mat-dialog-actions align="end">
            <button mat-button [mat-dialog-close]="false">
                {{ 'smartenroll.plans.billing_required_cancel' | transloco }}
            </button>
            <button mat-flat-button color="primary" type="button" (click)="goToBillingDetails()">
                {{ 'smartenroll.plans.billing_required_go_settings' | transloco }}
            </button>
        </mat-dialog-actions>
    `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SmartEnrollBillingRequiredDialogComponent, { className: "SmartEnrollBillingRequiredDialogComponent", filePath: "src/app/modules/smart-enroll/plans/smart-enroll-billing-required-dialog.component.ts", lineNumber: 30 });
})();

// src/app/modules/smart-enroll/plans/smart-enroll-volume-confirm-dialog.component.ts
var _c0 = (a0, a1) => ({ from: a0, to: a1 });
var SmartEnrollVolumeConfirmDialogComponent = class _SmartEnrollVolumeConfirmDialogComponent {
  constructor() {
    this.data = inject(MAT_DIALOG_DATA);
  }
  static {
    this.\u0275fac = function SmartEnrollVolumeConfirmDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SmartEnrollVolumeConfirmDialogComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SmartEnrollVolumeConfirmDialogComponent, selectors: [["smart-enroll-volume-confirm-dialog"]], decls: 14, vars: 18, consts: [["mat-dialog-title", "", 1, "!m-0", "!font-semibold", "!text-lg", "text-gray-900"], [1, "m-0", "text-sm", "leading-relaxed", "text-gray-600"], ["align", "end"], ["mat-button", "", 3, "mat-dialog-close"], ["mat-flat-button", "", "color", "primary", 3, "mat-dialog-close"]], template: function SmartEnrollVolumeConfirmDialogComponent_Template(rf, ctx) {
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
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 6, "smartenroll.plans.confirm_volume_update_title"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 8, "smartenroll.plans.confirm_volume_update_message", \u0275\u0275pureFunction2(15, _c0, ctx.data.from, ctx.data.to)), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("mat-dialog-close", false);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 11, "smartenroll.plans.confirm_volume_update_cancel"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("mat-dialog-close", true);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 13, "smartenroll.plans.confirm_volume_update_confirm"), " ");
      }
    }, dependencies: [MatDialogModule, MatDialogClose, MatDialogTitle, MatDialogActions, MatDialogContent, MatButtonModule, MatButton, TranslocoModule, TranslocoPipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SmartEnrollVolumeConfirmDialogComponent, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "smart-enroll-volume-confirm-dialog",
      imports: [MatDialogModule, MatButtonModule, TranslocoModule],
      template: `
        <h2 mat-dialog-title class="!m-0 !font-semibold !text-lg text-gray-900">
            {{ 'smartenroll.plans.confirm_volume_update_title' | transloco }}
        </h2>
        <mat-dialog-content>
            <p class="m-0 text-sm leading-relaxed text-gray-600">
                {{ 'smartenroll.plans.confirm_volume_update_message' | transloco: { from: data.from, to: data.to } }}
            </p>
        </mat-dialog-content>
        <mat-dialog-actions align="end">
            <button mat-button [mat-dialog-close]="false">
                {{ 'smartenroll.plans.confirm_volume_update_cancel' | transloco }}
            </button>
            <button mat-flat-button color="primary" [mat-dialog-close]="true">
                {{ 'smartenroll.plans.confirm_volume_update_confirm' | transloco }}
            </button>
        </mat-dialog-actions>
    `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SmartEnrollVolumeConfirmDialogComponent, { className: "SmartEnrollVolumeConfirmDialogComponent", filePath: "src/app/modules/smart-enroll/plans/smart-enroll-volume-confirm-dialog.component.ts", lineNumber: 34 });
})();

// src/app/modules/smart-enroll/plans/usage-overage-explainer.component.ts
var _c02 = (a0, a1, a2) => ({ discount: a0, namePrice: a1, bgPrice: a2 });
var _c1 = (a0) => ({ credits: a0 });
var UsageOverageExplainerComponent = class _UsageOverageExplainerComponent {
  constructor() {
    this._userService = inject(UserService);
    this.emphasized = false;
    this.walletCredits$ = this._userService.user$.pipe(map((user) => Math.round((Number(user?.credits) || 0) * 100) / 100));
  }
  get nameDiscount() {
    return resolveDiscountPercent(this.nameDiscountPercent);
  }
  get namePrice() {
    return discountedOveragePrice(COLOMBIA_IDENTITY_LIST_PRICE, this.nameDiscountPercent).toFixed(2);
  }
  get backgroundPrice() {
    return discountedOveragePrice(BACKGROUND_CHECK_LIST_PRICE, this.backgroundDiscountPercent).toFixed(2);
  }
  static {
    this.\u0275fac = function UsageOverageExplainerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UsageOverageExplainerComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UsageOverageExplainerComponent, selectors: [["usage-overage-explainer"]], inputs: { nameDiscountPercent: "nameDiscountPercent", backgroundDiscountPercent: "backgroundDiscountPercent", emphasized: "emphasized" }, decls: 28, vars: 33, consts: [[1, "usage-overage", "dark:!border-white/10", "dark:!bg-white/5"], [1, "usage-overage__title", "dark:!text-slate-50"], [1, "usage-overage__steps", "dark:!text-slate-400"], [1, "usage-overage__wallet", "dark:!border-white/10"], [1, "usage-overage__wallet-copy"], [1, "usage-overage__wallet-label", "dark:!text-slate-400"], [1, "usage-overage__wallet-value", "dark:!text-slate-50"], ["routerLink", "/add-credits", 1, "usage-overage__link"]], template: function UsageOverageExplainerComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h3", 1);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "ol", 2)(5, "li");
        \u0275\u0275text(6);
        \u0275\u0275pipe(7, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "li");
        \u0275\u0275text(9);
        \u0275\u0275pipe(10, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "li");
        \u0275\u0275text(12);
        \u0275\u0275pipe(13, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 3)(15, "div", 4)(16, "span", 5);
        \u0275\u0275text(17);
        \u0275\u0275pipe(18, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "span", 6);
        \u0275\u0275text(20);
        \u0275\u0275pipe(21, "async");
        \u0275\u0275pipe(22, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "a", 7);
        \u0275\u0275text(24);
        \u0275\u0275pipe(25, "transloco");
        \u0275\u0275elementStart(26, "mat-icon");
        \u0275\u0275text(27, "chevron_right");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275classProp("usage-overage--alert", ctx.emphasized);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 9, "smartenroll.plans.usage.overage_title"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 11, "smartenroll.plans.usage.overage_free"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(10, 13, "smartenroll.plans.usage.overage_credits", \u0275\u0275pureFunction3(27, _c02, ctx.nameDiscount, ctx.namePrice, ctx.backgroundPrice)), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 16, "smartenroll.plans.usage.overage_pack"));
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 18, "smartenroll.plans.usage.wallet"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(22, 22, "smartenroll.plans.usage.credits_count", \u0275\u0275pureFunction1(31, _c1, \u0275\u0275pipeBind1(21, 20, ctx.walletCredits$) || 0)), " ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(25, 25, "smartenroll.plans.usage.add_credits"), " ");
      }
    }, dependencies: [CommonModule, AsyncPipe, RouterModule, RouterLink, MatIconModule, MatIcon, TranslocoModule, TranslocoPipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.usage-overage[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  padding: 16px;\n  background: #f8fafc;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n}\n.usage-overage--alert[_ngcontent-%COMP%] {\n  background: #fff7ed;\n  border-color: #fdba74;\n}\n.usage-overage__title[_ngcontent-%COMP%] {\n  margin: 0 0 10px;\n  font-size: 14px;\n  font-weight: 700;\n  color: #0f0f2d;\n}\n.usage-overage__steps[_ngcontent-%COMP%] {\n  margin: 0;\n  padding-left: 18px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  font-size: 13px;\n  line-height: 1.45;\n  color: #6b7280;\n}\n.usage-overage__wallet[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  margin-top: 14px;\n  padding-top: 12px;\n  border-top: 1px solid #e5e7eb;\n}\n.usage-overage__wallet-copy[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.usage-overage__wallet-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6b7280;\n}\n.usage-overage__wallet-value[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #0f0f2d;\n  font-variant-numeric: tabular-nums;\n}\n.usage-overage__link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 2px;\n  flex-shrink: 0;\n  font-size: 13px;\n  font-weight: 600;\n  color: #2b3af0;\n  text-decoration: none;\n}\n.usage-overage__link[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.usage-overage__link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.dark[_nghost-%COMP%]   .usage-overage[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .usage-overage[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.04);\n  border-color: rgba(255, 255, 255, 0.1);\n}\n.dark[_nghost-%COMP%]   .usage-overage--alert[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .usage-overage--alert[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.12);\n  border-color: rgba(251, 191, 36, 0.35);\n}\n.dark[_nghost-%COMP%]   .usage-overage__title[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .usage-overage__title[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .usage-overage__wallet-value[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .usage-overage__wallet-value[_ngcontent-%COMP%] {\n  color: #f8fafc;\n}\n.dark[_nghost-%COMP%]   .usage-overage__steps[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .usage-overage__steps[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .usage-overage__wallet-label[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .usage-overage__wallet-label[_ngcontent-%COMP%] {\n  color: rgb(148, 163, 184);\n}\n.dark[_nghost-%COMP%]   .usage-overage__wallet[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .usage-overage__wallet[_ngcontent-%COMP%] {\n  border-top-color: rgba(255, 255, 255, 0.08);\n}\n.dark[_nghost-%COMP%]   .usage-overage__link[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .usage-overage__link[_ngcontent-%COMP%] {\n  color: rgb(147, 197, 253);\n}\n/*# sourceMappingURL=usage-overage-explainer.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UsageOverageExplainerComponent, [{
    type: Component,
    args: [{ selector: "usage-overage-explainer", standalone: true, imports: [CommonModule, RouterModule, MatIconModule, TranslocoModule], template: '<div\r\n    class="usage-overage dark:!border-white/10 dark:!bg-white/5"\r\n    [class.usage-overage--alert]="emphasized"\r\n>\r\n    <h3 class="usage-overage__title dark:!text-slate-50">\r\n        {{ "smartenroll.plans.usage.overage_title" | transloco }}\r\n    </h3>\r\n    <ol class="usage-overage__steps dark:!text-slate-400">\r\n        <li>{{ "smartenroll.plans.usage.overage_free" | transloco }}</li>\r\n        <li>\r\n            {{\r\n                "smartenroll.plans.usage.overage_credits"\r\n                    | transloco: { discount: nameDiscount, namePrice: namePrice, bgPrice: backgroundPrice }\r\n            }}\r\n        </li>\r\n        <li>{{ "smartenroll.plans.usage.overage_pack" | transloco }}</li>\r\n    </ol>\r\n    <div class="usage-overage__wallet dark:!border-white/10">\r\n        <div class="usage-overage__wallet-copy">\r\n            <span class="usage-overage__wallet-label dark:!text-slate-400">{{\r\n                "smartenroll.plans.usage.wallet" | transloco\r\n            }}</span>\r\n            <span class="usage-overage__wallet-value dark:!text-slate-50">\r\n                {{ "smartenroll.plans.usage.credits_count" | transloco: { credits: (walletCredits$ | async) || 0 } }}\r\n            </span>\r\n        </div>\r\n        <a routerLink="/add-credits" class="usage-overage__link">\r\n            {{ "smartenroll.plans.usage.add_credits" | transloco }}\r\n            <mat-icon>chevron_right</mat-icon>\r\n        </a>\r\n    </div>\r\n</div>\r\n', styles: ["/* src/app/modules/smart-enroll/plans/usage-overage-explainer.component.scss */\n:host {\n  display: block;\n}\n.usage-overage {\n  margin-top: 8px;\n  padding: 16px;\n  background: #f8fafc;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n}\n.usage-overage--alert {\n  background: #fff7ed;\n  border-color: #fdba74;\n}\n.usage-overage__title {\n  margin: 0 0 10px;\n  font-size: 14px;\n  font-weight: 700;\n  color: #0f0f2d;\n}\n.usage-overage__steps {\n  margin: 0;\n  padding-left: 18px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  font-size: 13px;\n  line-height: 1.45;\n  color: #6b7280;\n}\n.usage-overage__wallet {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  margin-top: 14px;\n  padding-top: 12px;\n  border-top: 1px solid #e5e7eb;\n}\n.usage-overage__wallet-copy {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.usage-overage__wallet-label {\n  font-size: 12px;\n  color: #6b7280;\n}\n.usage-overage__wallet-value {\n  font-size: 15px;\n  font-weight: 700;\n  color: #0f0f2d;\n  font-variant-numeric: tabular-nums;\n}\n.usage-overage__link {\n  display: inline-flex;\n  align-items: center;\n  gap: 2px;\n  flex-shrink: 0;\n  font-size: 13px;\n  font-weight: 600;\n  color: #2b3af0;\n  text-decoration: none;\n}\n.usage-overage__link mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.usage-overage__link:hover {\n  text-decoration: underline;\n}\n:host-context(.dark) .usage-overage {\n  background: rgba(255, 255, 255, 0.04);\n  border-color: rgba(255, 255, 255, 0.1);\n}\n:host-context(.dark) .usage-overage--alert {\n  background: rgba(245, 158, 11, 0.12);\n  border-color: rgba(251, 191, 36, 0.35);\n}\n:host-context(.dark) .usage-overage__title,\n:host-context(.dark) .usage-overage__wallet-value {\n  color: #f8fafc;\n}\n:host-context(.dark) .usage-overage__steps,\n:host-context(.dark) .usage-overage__wallet-label {\n  color: rgb(148, 163, 184);\n}\n:host-context(.dark) .usage-overage__wallet {\n  border-top-color: rgba(255, 255, 255, 0.08);\n}\n:host-context(.dark) .usage-overage__link {\n  color: rgb(147, 197, 253);\n}\n/*# sourceMappingURL=usage-overage-explainer.component.css.map */\n"] }]
  }], null, { nameDiscountPercent: [{
    type: Input
  }], backgroundDiscountPercent: [{
    type: Input
  }], emphasized: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UsageOverageExplainerComponent, { className: "UsageOverageExplainerComponent", filePath: "src/app/modules/smart-enroll/plans/usage-overage-explainer.component.ts", lineNumber: 22 });
})();

// src/app/modules/smart-enroll/plans/smart-enroll-plans.component.ts
var _c03 = (a0) => ({ date: a0 });
var _c12 = (a0) => ({ days: a0 });
var _c2 = (a0) => ({ n: a0 });
var _c3 = (a0) => ({ amount: a0 });
function SmartEnrollPlansComponent_ng_container_0_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275listener("click", function SmartEnrollPlansComponent_ng_container_0_button_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goBack(ctx_r1.currentView === "select" ? "change" : "current"));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "arrow_back");
    \u0275\u0275elementEnd()();
  }
}
function SmartEnrollPlansComponent_ng_container_0_ng_container_13_ng_container_1_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r5 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r5("api_key_management.active"));
  }
}
function SmartEnrollPlansComponent_ng_container_0_ng_container_13_ng_container_1_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r5 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r5("smartaccess.plans.cancelled"));
  }
}
function SmartEnrollPlansComponent_ng_container_0_ng_container_13_ng_container_1_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r5 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r5("subscriptions.payment_failed"));
  }
}
function SmartEnrollPlansComponent_ng_container_0_ng_container_13_ng_container_1_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64)(1, "mat-icon", 65);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r5 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r5("subscriptions.payment_failed_description"));
  }
}
function SmartEnrollPlansComponent_ng_container_0_ng_container_13_ng_container_1_ng_container_28_span_1_Template(rf, ctx) {
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
    \u0275\u0275textInterpolate2("", t_r5("smartaccess.plans.next_payment"), ": ", \u0275\u0275pipeBind2(2, 2, subscription_r6.endDate, "longDate"), "");
  }
}
function SmartEnrollPlansComponent_ng_container_0_ng_container_13_ng_container_1_ng_container_28_span_2_Template(rf, ctx) {
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
    \u0275\u0275textInterpolate2("", t_r5("smartaccess.plans.starts_in"), ": ", \u0275\u0275pipeBind2(2, 2, subscription_r6.startDate, "longDate"), "");
  }
}
function SmartEnrollPlansComponent_ng_container_0_ng_container_13_ng_container_1_ng_container_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, SmartEnrollPlansComponent_ng_container_0_ng_container_13_ng_container_1_ng_container_28_span_1_Template, 3, 5, "span", 11)(2, SmartEnrollPlansComponent_ng_container_0_ng_container_13_ng_container_1_ng_container_28_span_2_Template, 3, 5, "span", 11);
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
function SmartEnrollPlansComponent_ng_container_0_ng_container_13_ng_container_1_span_29_Template(rf, ctx) {
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
    \u0275\u0275textInterpolate2("", t_r5("smartaccess.plans.canceled_plan"), ": ", \u0275\u0275pipeBind2(2, 2, subscription_r6.cancelAt, "longDate"), "");
  }
}
function SmartEnrollPlansComponent_ng_container_0_ng_container_13_ng_container_1_ng_container_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 66);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 67);
    \u0275\u0275element(3, "path", 68)(4, "path", 69)(5, "path", 70);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "span", 71);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r5 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(t_r5("smartenroll.plans.paid_with_stripe_link"));
  }
}
function SmartEnrollPlansComponent_ng_container_0_ng_container_13_ng_container_1_ng_container_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "img", 72);
    \u0275\u0275elementStart(2, "div", 73)(3, "span", 71);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 74);
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
    \u0275\u0275textInterpolate3("", ctx_r1.capitalizeFirstLetter(subscription_r6.cardBrand), " ", t_r5("smartaccess.plans.ended"), " ", subscription_r6.lastFour, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("", t_r5("smartaccess.plans.expires"), " ", subscription_r6.cardExpMonth, "/", subscription_r6.cardExpYear, "");
  }
}
function SmartEnrollPlansComponent_ng_container_0_ng_container_13_ng_container_1_ng_container_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "mat-icon", 75);
    \u0275\u0275text(2, "credit_card_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 76);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r5 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r5("smartaccess.plans.no_payment"));
  }
}
function SmartEnrollPlansComponent_ng_container_0_ng_container_13_ng_container_1_div_34_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r5 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r5("smartenroll.plans.usage.resets_today"), " ");
  }
}
function SmartEnrollPlansComponent_ng_container_0_ng_container_13_ng_container_1_div_34_ng_template_7_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r5 = \u0275\u0275nextContext(5).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r5("smartenroll.plans.usage.resets_in_one"), " ");
  }
}
function SmartEnrollPlansComponent_ng_container_0_ng_container_13_ng_container_1_div_34_ng_template_7_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const subscription_r6 = \u0275\u0275nextContext(3).$implicit;
    const t_r5 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", t_r5("smartenroll.plans.usage.resets_in", \u0275\u0275pureFunction1(1, _c12, ctx_r1.usageDaysUntilReset(subscription_r6))), " ");
  }
}
function SmartEnrollPlansComponent_ng_container_0_ng_container_13_ng_container_1_div_34_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SmartEnrollPlansComponent_ng_container_0_ng_container_13_ng_container_1_div_34_ng_template_7_ng_container_0_Template, 2, 1, "ng-container", 82)(1, SmartEnrollPlansComponent_ng_container_0_ng_container_13_ng_container_1_div_34_ng_template_7_ng_template_1_Template, 1, 3, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const manyDays_r8 = \u0275\u0275reference(2);
    const subscription_r6 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngIf", ctx_r1.usageDaysUntilReset(subscription_r6) === 1)("ngIfElse", manyDays_r8);
  }
}
function SmartEnrollPlansComponent_ng_container_0_ng_container_13_ng_container_1_div_34_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "usage-quota-gauge", 85);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const subscription_r6 = \u0275\u0275nextContext(2).$implicit;
    const t_r5 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("used", subscription_r6.biometricsCount || 0)("limit", subscription_r6.biometricsLimit || 0)("label", t_r5("smartenroll.plans.usage.biometrics"));
  }
}
function SmartEnrollPlansComponent_ng_container_0_ng_container_13_ng_container_1_div_34_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "usage-quota-gauge", 85);
  }
  if (rf & 2) {
    const subscription_r6 = \u0275\u0275nextContext(2).$implicit;
    const t_r5 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("used", subscription_r6.basicCount || 0)("limit", subscription_r6.basicLimit || 0)("label", t_r5("smartenroll.plans.usage.basic"));
  }
}
function SmartEnrollPlansComponent_ng_container_0_ng_container_13_ng_container_1_div_34_usage_quota_bar_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "usage-quota-bar", 85);
  }
  if (rf & 2) {
    const subscription_r6 = \u0275\u0275nextContext(2).$implicit;
    const t_r5 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("used", subscription_r6.basicCount || 0)("limit", subscription_r6.basicLimit || 0)("label", t_r5("smartenroll.plans.usage.basic"));
  }
}
function SmartEnrollPlansComponent_ng_container_0_ng_container_13_ng_container_1_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 77)(1, "div", 78)(2, "div", 79)(3, "p", 80);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 81);
    \u0275\u0275template(6, SmartEnrollPlansComponent_ng_container_0_ng_container_13_ng_container_1_div_34_ng_container_6_Template, 2, 1, "ng-container", 82)(7, SmartEnrollPlansComponent_ng_container_0_ng_container_13_ng_container_1_div_34_ng_template_7_Template, 3, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "p", 83);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 84);
    \u0275\u0275template(12, SmartEnrollPlansComponent_ng_container_0_ng_container_13_ng_container_1_div_34_ng_container_12_Template, 2, 3, "ng-container", 82)(13, SmartEnrollPlansComponent_ng_container_0_ng_container_13_ng_container_1_div_34_ng_template_13_Template, 1, 3, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275element(15, "usage-quota-gauge", 85);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 86);
    \u0275\u0275element(17, "usage-quota-bar", 85)(18, "usage-quota-bar", 85)(19, "usage-quota-bar", 85);
    \u0275\u0275template(20, SmartEnrollPlansComponent_ng_container_0_ng_container_13_ng_container_1_div_34_usage_quota_bar_20_Template, 1, 3, "usage-quota-bar", 87);
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "usage-overage-explainer", 88);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const daysLeft_r9 = \u0275\u0275reference(8);
    const basicEnrollGauge_r10 = \u0275\u0275reference(14);
    const subscription_r6 = \u0275\u0275nextContext().$implicit;
    const t_r5 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r5("smartenroll.plans.usage.title"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.usageDaysUntilReset(subscription_r6) === 0)("ngIfElse", daysLeft_r9);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r5("smartenroll.plans.usage.resets_on", \u0275\u0275pureFunction1(22, _c03, ctx_r1.usageResetDate(subscription_r6))), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", subscription_r6.biometricsLimit > 0)("ngIfElse", basicEnrollGauge_r10);
    \u0275\u0275advance(3);
    \u0275\u0275property("used", subscription_r6.scanDocsCount || 0)("limit", subscription_r6.scanDocsLimit || 0)("label", t_r5("smartenroll.plans.usage.scans"));
    \u0275\u0275advance(2);
    \u0275\u0275property("used", subscription_r6.validateNamesCount || 0)("limit", subscription_r6.validateNamesLimit || 0)("label", t_r5("smartenroll.plans.usage.names"));
    \u0275\u0275advance();
    \u0275\u0275property("used", subscription_r6.backgroundCheckCount || 0)("limit", subscription_r6.backgroundCheckLimit || 0)("label", t_r5("smartenroll.plans.usage.background"));
    \u0275\u0275advance();
    \u0275\u0275property("used", subscription_r6.emailCount || 0)("limit", subscription_r6.emailsLimit || 0)("label", t_r5("smartenroll.plans.usage.emails"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", subscription_r6.biometricsLimit > 0 && subscription_r6.basicLimit > 0);
    \u0275\u0275advance();
    \u0275\u0275property("nameDiscountPercent", subscription_r6.nameValidationDiscountPercent)("backgroundDiscountPercent", subscription_r6.backgroundCheckDiscountPercent)("emphasized", ctx_r1.lookupQuotaAtLimit(subscription_r6));
  }
}
function SmartEnrollPlansComponent_ng_container_0_ng_container_13_ng_container_1_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 89)(1, "div", 90)(2, "div", 91)(3, "mat-icon");
    \u0275\u0275text(4, "email");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 92)(6, "span", 93);
    \u0275\u0275text(7, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 94);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "mat-icon", 95);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 90)(14, "div", 96)(15, "mat-icon");
    \u0275\u0275text(16, "brush");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 92)(18, "span", 93);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 94);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "mat-icon", 97);
    \u0275\u0275text(23, "check_circle");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 90)(25, "div", 98)(26, "mat-icon");
    \u0275\u0275text(27, "fingerprint");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 92)(29, "span", 93);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span", 94);
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "mat-icon", 95);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 90)(37, "div", 99)(38, "mat-icon");
    \u0275\u0275text(39, "api");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 92)(41, "span", 93);
    \u0275\u0275text(42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "span", 94);
    \u0275\u0275text(44);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "mat-icon", 95);
    \u0275\u0275text(46, "add_circle_outline");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const subscription_r6 = \u0275\u0275nextContext().$implicit;
    const t_r5 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 13, subscription_r6.emailsLimit));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", subscription_r6.emailsLimit > 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", subscription_r6.emailsLimit > 0 ? "check_circle" : "cancel", " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(t_r5("smartaccess.plans.whiteLabel"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r5("smartenroll.plans.enabled"));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(t_r5("smartaccess.plans.liveness"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(subscription_r6.biometricsLimit > 0 ? \u0275\u0275pipeBind1(33, 15, subscription_r6.biometricsLimit) : t_r5("smartenroll.plans.disabled"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", subscription_r6.biometricsLimit > 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", subscription_r6.biometricsLimit > 0 ? "check_circle" : "cancel", " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(t_r5("smartaccess.plans.api_assistance"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r5("smartenroll.plans.available"));
  }
}
function SmartEnrollPlansComponent_ng_container_0_ng_container_13_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 33)(2, "div", 34)(3, "div", 35)(4, "div", 36)(5, "mat-icon");
    \u0275\u0275text(6, "workspace_premium");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div")(8, "p", 37);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "h2", 38);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 39);
    \u0275\u0275element(13, "span", 40);
    \u0275\u0275template(14, SmartEnrollPlansComponent_ng_container_0_ng_container_13_ng_container_1_span_14_Template, 2, 1, "span", 11)(15, SmartEnrollPlansComponent_ng_container_0_ng_container_13_ng_container_1_span_15_Template, 2, 1, "span", 11)(16, SmartEnrollPlansComponent_ng_container_0_ng_container_13_ng_container_1_span_16_Template, 2, 1, "span", 11);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(17, SmartEnrollPlansComponent_ng_container_0_ng_container_13_ng_container_1_div_17_Template, 5, 1, "div", 41);
    \u0275\u0275elementStart(18, "div", 42)(19, "div", 43)(20, "div", 44);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 45);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "currency");
    \u0275\u0275elementStart(25, "span", 46);
    \u0275\u0275text(26, "USD");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 47);
    \u0275\u0275template(28, SmartEnrollPlansComponent_ng_container_0_ng_container_13_ng_container_1_ng_container_28_Template, 3, 2, "ng-container", 11)(29, SmartEnrollPlansComponent_ng_container_0_ng_container_13_ng_container_1_span_29_Template, 3, 5, "span", 11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 48);
    \u0275\u0275template(31, SmartEnrollPlansComponent_ng_container_0_ng_container_13_ng_container_1_ng_container_31_Template, 8, 1, "ng-container", 11)(32, SmartEnrollPlansComponent_ng_container_0_ng_container_13_ng_container_1_ng_container_32_Template, 7, 7, "ng-container", 11)(33, SmartEnrollPlansComponent_ng_container_0_ng_container_13_ng_container_1_ng_container_33_Template, 5, 1, "ng-container", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(34, SmartEnrollPlansComponent_ng_container_0_ng_container_13_ng_container_1_div_34_Template, 22, 24, "div", 49)(35, SmartEnrollPlansComponent_ng_container_0_ng_container_13_ng_container_1_div_35_Template, 47, 17, "div", 50);
    \u0275\u0275elementStart(36, "div", 51)(37, "h3", 52);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "p", 53);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 54)(42, "div", 55)(43, "div", 56)(44, "mat-icon");
    \u0275\u0275text(45, "sms");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 57)(47, "span", 58);
    \u0275\u0275text(48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "span", 59);
    \u0275\u0275text(50);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "a", 60);
    \u0275\u0275text(52);
    \u0275\u0275elementStart(53, "mat-icon");
    \u0275\u0275text(54, "open_in_new");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(55, "div", 55)(56, "div", 61)(57, "mat-icon");
    \u0275\u0275text(58, "chat");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "div", 57)(60, "span", 58);
    \u0275\u0275text(61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "span", 59);
    \u0275\u0275text(63);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(64, "a", 60);
    \u0275\u0275text(65);
    \u0275\u0275elementStart(66, "mat-icon");
    \u0275\u0275text(67, "open_in_new");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(68, "div", 62)(69, "button", 63);
    \u0275\u0275listener("click", function SmartEnrollPlansComponent_ng_container_0_ng_container_13_ng_container_1_Template_button_click_69_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.goToStripeSubscriptions());
    });
    \u0275\u0275text(70);
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
    \u0275\u0275property("ngClass", ctx_r1.getPlanColorClass(subscription_r6.codeShow));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", i_r7 === 0 ? t_r5("smartaccess.plans.your_plan") : t_r5("smartaccess.plans.your_next_plan"), " ");
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
    \u0275\u0275textInterpolate(t_r5("smartaccess.plans.value_plan"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(24, 32, ctx_r1.calculateSubscriptionPrice(subscription_r6)), " ");
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
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", i_r7 === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", i_r7 > 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r5("smartenroll.plans.optional_features"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r5("smartenroll.plans.optional_features_description"));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(t_r5("smartenroll.plans.sms_optional"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r5("smartenroll.plans.using_functionality"));
    \u0275\u0275advance();
    \u0275\u0275property("href", ctx_r1.getSmsWhatsappPricesUrl(), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r5("smartenroll.plans.using_functionality_link"), " ");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(t_r5("smartenroll.plans.whatsapp_optional"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r5("smartenroll.plans.using_functionality"));
    \u0275\u0275advance();
    \u0275\u0275property("href", ctx_r1.getSmsWhatsappPricesUrl(), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r5("smartenroll.plans.using_functionality_link"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("error", subscription_r6.paymentFailedAt);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r5("nav.manage_subscription"), " ");
  }
}
function SmartEnrollPlansComponent_ng_container_0_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, SmartEnrollPlansComponent_ng_container_0_ng_container_13_ng_container_1_Template, 71, 34, "ng-container", 13);
    \u0275\u0275elementStart(2, "div", 14)(3, "div", 15)(4, "div", 16)(5, "div", 17)(6, "mat-icon");
    \u0275\u0275text(7, "auto_awesome");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "h2", 18);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 19);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 20)(15, "div", 21)(16, "mat-icon");
    \u0275\u0275text(17, "verified");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 22)(19, "mat-icon");
    \u0275\u0275text(20, "speed");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 23)(22, "mat-icon");
    \u0275\u0275text(23, "security");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(24, "div", 24)(25, "div", 25)(26, "div", 26)(27, "mat-icon");
    \u0275\u0275text(28, "trending_up");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 27)(30, "span", 28);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span", 29);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "div", 25)(35, "div", 26)(36, "mat-icon");
    \u0275\u0275text(37, "support_agent");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 27)(39, "span", 28);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "span", 29);
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(43, "div", 25)(44, "div", 26)(45, "mat-icon");
    \u0275\u0275text(46, "tune");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div", 27)(48, "span", 28);
    \u0275\u0275text(49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "span", 29);
    \u0275\u0275text(51);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(52, "div", 30)(53, "button", 31);
    \u0275\u0275listener("click", function SmartEnrollPlansComponent_ng_container_0_ng_container_13_Template_button_click_53_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.changeView("change", null));
    });
    \u0275\u0275elementStart(54, "span");
    \u0275\u0275text(55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "mat-icon");
    \u0275\u0275text(57, "arrow_forward");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "span", 32);
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
    \u0275\u0275textInterpolate(t_r5("smartenroll.plans.upgrade_available"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r5("smartaccess.plans.better_plan"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r5("smartaccess.plans.better_plan_text"));
    \u0275\u0275advance(18);
    \u0275\u0275textInterpolate(t_r5("smartenroll.plans.higher_limits"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r5("smartenroll.plans.higher_limits_desc"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(t_r5("smartenroll.plans.priority_support"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r5("smartenroll.plans.priority_support_desc"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(t_r5("smartenroll.plans.advanced_features"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r5("smartenroll.plans.advanced_features_desc"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r5("smartaccess.plans.explore_plan"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r5("smartenroll.plans.no_commitment"));
  }
}
function SmartEnrollPlansComponent_ng_container_0_ng_container_14_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 131);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r5 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r5("smartenroll.plans.current_plan_badge"), " ");
  }
}
function SmartEnrollPlansComponent_ng_container_0_ng_container_14_div_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 132);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r5 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r5("smartenroll.plans.current_plan_badge"), " ");
  }
}
function SmartEnrollPlansComponent_ng_container_0_ng_container_14_div_166_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 131);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r5 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r5("smartenroll.plans.current_plan_badge"), " ");
  }
}
function SmartEnrollPlansComponent_ng_container_0_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 100)(2, "h2", 101);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 102);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 103)(7, "div", 104);
    \u0275\u0275template(8, SmartEnrollPlansComponent_ng_container_0_ng_container_14_div_8_Template, 2, 1, "div", 105);
    \u0275\u0275elementStart(9, "div", 106);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 107)(12, "span", 108);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 109);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "p", 110);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "number");
    \u0275\u0275pipe(20, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 111)(22, "div", 112)(23, "span", 113);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 114);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 112)(29, "span", 113);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span", 114);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 112)(34, "span", 113);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "span", 114);
    \u0275\u0275text(37, "5");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "div", 115)(39, "p", 116);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "ul", 117)(42, "li")(43, "mat-icon");
    \u0275\u0275text(44, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275text(45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "li")(47, "mat-icon");
    \u0275\u0275text(48, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275text(49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "li")(51, "mat-icon");
    \u0275\u0275text(52, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275text(53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "li")(55, "mat-icon");
    \u0275\u0275text(56, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275text(57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "li")(59, "mat-icon");
    \u0275\u0275text(60, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275text(61);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(62, "button", 118);
    \u0275\u0275listener("click", function SmartEnrollPlansComponent_ng_container_0_ng_container_14_Template_button_click_62_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.changeView("select", "plus"));
    });
    \u0275\u0275text(63);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(64, "div", 119);
    \u0275\u0275template(65, SmartEnrollPlansComponent_ng_container_0_ng_container_14_div_65_Template, 2, 1, "div", 120);
    \u0275\u0275elementStart(66, "div", 121);
    \u0275\u0275text(67);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "div", 122);
    \u0275\u0275text(69);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "div", 107)(71, "span", 108);
    \u0275\u0275text(72);
    \u0275\u0275pipe(73, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "span", 109);
    \u0275\u0275text(75);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(76, "p", 110);
    \u0275\u0275text(77);
    \u0275\u0275pipe(78, "number");
    \u0275\u0275pipe(79, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "div", 111)(81, "div", 112)(82, "span", 113);
    \u0275\u0275text(83);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "span", 114);
    \u0275\u0275text(85);
    \u0275\u0275pipe(86, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(87, "div", 112)(88, "span", 113);
    \u0275\u0275text(89);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "span", 114);
    \u0275\u0275text(91);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(92, "div", 112)(93, "span", 113);
    \u0275\u0275text(94);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(95, "span", 114);
    \u0275\u0275text(96, "5");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(97, "div", 115)(98, "p", 116);
    \u0275\u0275text(99);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(100, "ul", 117)(101, "li")(102, "mat-icon");
    \u0275\u0275text(103, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275text(104);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(105, "li")(106, "mat-icon");
    \u0275\u0275text(107, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275text(108);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(109, "li")(110, "mat-icon");
    \u0275\u0275text(111, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275text(112);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(113, "li")(114, "mat-icon");
    \u0275\u0275text(115, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275text(116);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(117, "li")(118, "mat-icon");
    \u0275\u0275text(119, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275text(120);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(121, "button", 123);
    \u0275\u0275listener("click", function SmartEnrollPlansComponent_ng_container_0_ng_container_14_Template_button_click_121_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.changeView("select", "business"));
    });
    \u0275\u0275text(122);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(123, "div", 104)(124, "div", 124);
    \u0275\u0275text(125);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(126, "div", 107)(127, "span", 125);
    \u0275\u0275text(128);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(129, "p", 110);
    \u0275\u0275text(130, "+5,000 smartEnrolls");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(131, "div", 111)(132, "div", 112)(133, "span", 113);
    \u0275\u0275text(134);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(135, "span", 114);
    \u0275\u0275text(136);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(137, "div", 112)(138, "span", 113);
    \u0275\u0275text(139);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(140, "span", 114);
    \u0275\u0275text(141);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(142, "div", 112)(143, "span", 113);
    \u0275\u0275text(144);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(145, "span", 114);
    \u0275\u0275text(146, "+10");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(147, "div", 115)(148, "p", 116);
    \u0275\u0275text(149);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(150, "ul", 117)(151, "li")(152, "mat-icon");
    \u0275\u0275text(153, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275text(154);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(155, "li")(156, "mat-icon");
    \u0275\u0275text(157, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275text(158);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(159, "li")(160, "mat-icon");
    \u0275\u0275text(161, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275text(162);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(163, "button", 126);
    \u0275\u0275listener("click", function SmartEnrollPlansComponent_ng_container_0_ng_container_14_Template_button_click_163_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.purchaseEnterprise());
    });
    \u0275\u0275text(164);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(165, "div", 127);
    \u0275\u0275template(166, SmartEnrollPlansComponent_ng_container_0_ng_container_14_div_166_Template, 2, 1, "div", 105);
    \u0275\u0275elementStart(167, "div", 128);
    \u0275\u0275text(168);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(169, "div", 107)(170, "span", 108);
    \u0275\u0275text(171, "$0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(172, "span", 109);
    \u0275\u0275text(173);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(174, "p", 110);
    \u0275\u0275text(175);
    \u0275\u0275pipe(176, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275element(177, "p", 129);
    \u0275\u0275elementStart(178, "div", 111)(179, "div", 112)(180, "span", 113);
    \u0275\u0275text(181);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(182, "span", 114);
    \u0275\u0275text(183, "$0");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(184, "div", 112)(185, "span", 113);
    \u0275\u0275text(186);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(187, "span", 114);
    \u0275\u0275text(188);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(189, "div", 112)(190, "span", 113);
    \u0275\u0275text(191);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(192, "span", 114);
    \u0275\u0275text(193, "2");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(194, "div", 115)(195, "p", 116);
    \u0275\u0275text(196);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(197, "ul", 117)(198, "li")(199, "mat-icon");
    \u0275\u0275text(200, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275text(201);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(202, "li")(203, "mat-icon");
    \u0275\u0275text(204, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275text(205);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(206, "li")(207, "mat-icon");
    \u0275\u0275text(208, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275text(209);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(210, "li")(211, "mat-icon");
    \u0275\u0275text(212, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275text(213);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(214, "button", 130);
    \u0275\u0275listener("click", function SmartEnrollPlansComponent_ng_container_0_ng_container_14_Template_button_click_214_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.changeView("select", "free"));
    });
    \u0275\u0275text(215);
    \u0275\u0275elementStart(216, "mat-icon");
    \u0275\u0275text(217, "arrow_forward");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_11_0;
    let tmp_13_0;
    let tmp_15_0;
    let tmp_31_0;
    let tmp_33_0;
    let tmp_35_0;
    let tmp_62_0;
    let tmp_63_0;
    let tmp_66_0;
    const t_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r5("smartenroll.plans.select_plan"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r5("smartenroll.plans.choose_best_plan"));
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("animation-delay", "0.1s");
    \u0275\u0275classProp("select-plan-card--current", ctx_r1.isActiveCatalogPlan("plus"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isActiveCatalogPlan("plus"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r5("smartenroll.plans.plus"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 80, ctx_r1.calculatePrice("plus")));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("/", t_r5("smartenroll.plans.month"), "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(19, 82, (tmp_11_0 = ctx_r1.getPlan("plus")) == null ? null : tmp_11_0.biometricsLimit), " - ", \u0275\u0275pipeBind1(20, 84, (tmp_11_0 = ctx_r1.getPlan("plus")) == null ? null : tmp_11_0.basicLimit), " smartEnrolls ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(t_r5("smartenroll.plans.enroll_cost"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 86, (tmp_13_0 = ctx_r1.getPlan("plus")) == null ? null : tmp_13_0.unitPrice));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r5("smartenroll.plans.analytics"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r5("smartenroll.plans.n_days", \u0275\u0275pureFunction1(98, _c2, (((tmp_15_0 = ctx_r1.getPlan("plus")) == null ? null : tmp_15_0.intervalCount) || 1) * 30)));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r5("smartenroll.plans.team_size"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(t_r5("smartenroll.plans.included"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(t_r5("smartenroll.plans.liveness"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r5("smartenroll.plans.face_compare"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r5("smartenroll.plans.worldwide_checks"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r5("smartenroll.plans.email"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r5("smartenroll.plans.scan_doc"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.isActiveCatalogPlan("plus") ? t_r5("smartenroll.plans.adjust_volume") : t_r5("smartenroll.plans.view_plan"), " ");
    \u0275\u0275advance();
    \u0275\u0275styleProp("animation-delay", "0.2s");
    \u0275\u0275classProp("select-plan-card--current", ctx_r1.isActiveCatalogPlan("business"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isActiveCatalogPlan("business"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r5("smartenroll.plans.most_popular"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r5("smartenroll.plans.business"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(73, 88, ctx_r1.calculatePrice("business")));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("/", t_r5("smartenroll.plans.month"), "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(78, 90, (tmp_31_0 = ctx_r1.getPlan("business")) == null ? null : tmp_31_0.biometricsLimit), " - ", \u0275\u0275pipeBind1(79, 92, (tmp_31_0 = ctx_r1.getPlan("business")) == null ? null : tmp_31_0.basicLimit), " smartEnrolls ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(t_r5("smartenroll.plans.enroll_cost"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(86, 94, (tmp_33_0 = ctx_r1.getPlan("business")) == null ? null : tmp_33_0.unitPrice));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r5("smartenroll.plans.analytics"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r5("smartenroll.plans.n_days", \u0275\u0275pureFunction1(100, _c2, (((tmp_35_0 = ctx_r1.getPlan("business")) == null ? null : tmp_35_0.intervalCount) || 1) * 30)));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r5("smartenroll.plans.team_size"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(t_r5("smartenroll.plans.included"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(t_r5("smartenroll.plans.liveness"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r5("smartenroll.plans.face_compare"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r5("smartenroll.plans.worldwide_checks"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r5("smartenroll.plans.email"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r5("smartenroll.plans.scan_doc"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.isActiveCatalogPlan("business") ? t_r5("smartenroll.plans.adjust_volume") : t_r5("smartenroll.plans.view_plan"), " ");
    \u0275\u0275advance();
    \u0275\u0275styleProp("animation-delay", "0.3s");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r5("smartenroll.plans.enterprise"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r5("smartenroll.plans.contact_sales"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(t_r5("smartenroll.plans.enroll_cost"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r5("smartenroll.plans.custom"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r5("smartenroll.plans.analytics"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r5("smartenroll.plans.unlimited"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r5("smartenroll.plans.team_size"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(t_r5("smartenroll.plans.included"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(t_r5("smartenroll.plans.everything_in_business"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r5("smartenroll.plans.api_assistance"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r5("smartenroll.plans.dedicated_support"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r5("smartenroll.plans.contact_sales"), " ");
    \u0275\u0275advance();
    \u0275\u0275styleProp("animation-delay", "0.4s");
    \u0275\u0275classProp("select-plan-card--current", ctx_r1.isActiveCatalogPlan("free"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isActiveCatalogPlan("free"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r5("smartenroll.plans.free"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("/", t_r5("smartenroll.plans.month"), "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(176, 96, (tmp_62_0 = ctx_r1.getPlan("free")) == null ? null : tmp_62_0.basicLimit), " smartEnrolls");
    \u0275\u0275advance(2);
    \u0275\u0275property("innerHTML", t_r5("smartenroll.plans.try_free_plan_description", \u0275\u0275pureFunction1(102, _c3, ((tmp_63_0 = ctx_r1.getPlan("free")) == null ? null : tmp_63_0.basicLimit) || 0)), \u0275\u0275sanitizeHtml);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r5("smartenroll.plans.enroll_cost"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(t_r5("smartenroll.plans.analytics"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r5("smartenroll.plans.n_days", \u0275\u0275pureFunction1(104, _c2, (((tmp_66_0 = ctx_r1.getPlan("free")) == null ? null : tmp_66_0.intervalCount) || 1) * 30)));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r5("smartenroll.plans.team_size"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(t_r5("smartenroll.plans.included"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(t_r5("smartenroll.plans.white_label"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r5("smartenroll.plans.face_compare"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r5("smartenroll.plans.email"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r5("smartenroll.plans.scan_doc"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.isActiveCatalogPlan("free") ? t_r5("smartenroll.plans.adjust_volume") : t_r5("smartenroll.plans.view_plan"), " ");
  }
}
function SmartEnrollPlansComponent_ng_container_0_ng_container_15_div_1_div_20_p_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 191);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r5 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r5("smartenroll.plans.volume_compare_equal_hint"), " ");
  }
}
function SmartEnrollPlansComponent_ng_container_0_ng_container_15_div_1_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 176)(1, "div", 177)(2, "div", 178)(3, "mat-icon");
    \u0275\u0275text(4, "compare_arrows");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 179)(6, "span", 180);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 181);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 182)(11, "div", 183)(12, "span", 184);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 185);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 186);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 187)(20, "div", 188)(21, "mat-icon");
    \u0275\u0275text(22, "arrow_forward");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 189)(24, "span", 184);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span", 185);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span", 186);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(31, SmartEnrollPlansComponent_ng_container_0_ng_container_15_div_1_div_20_p_31_Template, 2, 1, "p", 190);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r5 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(t_r5("smartenroll.plans.volume_compare_eyebrow"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r5("smartenroll.plans.volume_compare_title"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r5("smartenroll.plans.volume_compare_current"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 11, ctx_r1.currentSubscribedEnrollments));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r5("smartenroll.plans.volume_compare_unit"));
    \u0275\u0275advance(5);
    \u0275\u0275classProp("volume-change-summary__panel--highlight", ctx_r1.isSameTierVolumeUpdate());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r5("smartenroll.plans.volume_compare_new"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(28, 13, ctx_r1.selectedEnrollmentsCount()));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r5("smartenroll.plans.volume_compare_unit"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isSameTierVolumeUpdate());
  }
}
function SmartEnrollPlansComponent_ng_container_0_ng_container_15_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 166)(1, "h2", 167);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 168);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 169)(6, "span", 170);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 171)(10, "div", 172)(11, "input", 173);
    \u0275\u0275twoWayListener("ngModelChange", function SmartEnrollPlansComponent_ng_container_0_ng_container_15_div_1_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.sliderOptions.value, $event) || (ctx_r1.sliderOptions.value = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "span", 170);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 174)(16, "strong");
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, " smartEnrolls ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, SmartEnrollPlansComponent_ng_container_0_ng_container_15_div_1_div_20_Template, 32, 15, "div", 175);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r5 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r5("smartenroll.plans.how_many_enrollments"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r5("smartenroll.plans.select_volume"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 11, ctx_r1.sliderOptions == null ? null : ctx_r1.sliderOptions.notches == null ? null : ctx_r1.sliderOptions.notches[0]));
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("--track-fill-percentage", ctx_r1.getTrackFillPercentage() + "%");
    \u0275\u0275advance();
    \u0275\u0275property("max", (ctx_r1.sliderOptions == null ? null : ctx_r1.sliderOptions.notches == null ? null : ctx_r1.sliderOptions.notches.length) - 1 || 0)("min", 0);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.sliderOptions.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("+", \u0275\u0275pipeBind1(14, 13, ctx_r1.sliderOptions == null ? null : ctx_r1.sliderOptions.notches == null ? null : ctx_r1.sliderOptions.notches[(ctx_r1.sliderOptions == null ? null : ctx_r1.sliderOptions.notches == null ? null : ctx_r1.sliderOptions.notches.length) - 1]), "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 15, ctx_r1.getSliderAmount(ctx_r1.selectedPlan)));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.showVolumeChangeSummary());
  }
}
function SmartEnrollPlansComponent_ng_container_0_ng_container_15_div_129_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 192)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 193)(4, "div", 194)(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "strong");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "currency");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_6_0;
    const t_r5 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r5("smartenroll.plans.extra_enroll_explanation"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r5("smartenroll.plans.extra_enrollment"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(9, 4, (tmp_6_0 = (tmp_6_0 = ctx_r1.getPlan(ctx_r1.selectedPlan)) == null ? null : tmp_6_0.meteredUnitPrice) !== null && tmp_6_0 !== void 0 ? tmp_6_0 : (tmp_6_0 = ctx_r1.getPlan(ctx_r1.selectedPlan)) == null ? null : tmp_6_0.unitPrice), " USD / ", t_r5("smartenroll.plans.enrollment"), "");
  }
}
function SmartEnrollPlansComponent_ng_container_0_ng_container_15_mat_spinner_132_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 195);
  }
}
function SmartEnrollPlansComponent_ng_container_0_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, SmartEnrollPlansComponent_ng_container_0_ng_container_15_div_1_Template, 21, 17, "div", 133);
    \u0275\u0275elementStart(2, "div", 134)(3, "div", 135)(4, "div", 136)(5, "div", 137)(6, "mat-icon");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "span", 138);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 139)(13, "span", 140);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 46);
    \u0275\u0275text(16, "$");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 141);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 47);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 142)(23, "div", 143)(24, "mat-icon");
    \u0275\u0275text(25, "fingerprint");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span", 114);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "number");
    \u0275\u0275pipe(29, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span", 113);
    \u0275\u0275text(31, "smartEnrolls");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(32, "div", 144);
    \u0275\u0275elementStart(33, "div", 143)(34, "mat-icon");
    \u0275\u0275text(35, "payments");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "span", 114);
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "span", 113);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(41, "div", 144);
    \u0275\u0275elementStart(42, "div", 143)(43, "mat-icon");
    \u0275\u0275text(44, "analytics");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "span", 114);
    \u0275\u0275text(46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "span", 113);
    \u0275\u0275text(48);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(49, "div", 144);
    \u0275\u0275elementStart(50, "div", 143)(51, "mat-icon");
    \u0275\u0275text(52, "group");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "span", 114);
    \u0275\u0275text(54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "span", 113);
    \u0275\u0275text(56);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(57, "div", 145)(58, "div", 146)(59, "h4", 147)(60, "mat-icon");
    \u0275\u0275text(61, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(62);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "ul", 148)(64, "li")(65, "span");
    \u0275\u0275text(66);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "span", 149);
    \u0275\u0275text(68);
    \u0275\u0275pipe(69, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(70, "li")(71, "span");
    \u0275\u0275text(72);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "span", 149);
    \u0275\u0275text(74);
    \u0275\u0275pipe(75, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(76, "li")(77, "span");
    \u0275\u0275text(78);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "span", 149);
    \u0275\u0275text(80);
    \u0275\u0275pipe(81, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(82, "li")(83, "span");
    \u0275\u0275text(84);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "span", 149);
    \u0275\u0275text(86);
    \u0275\u0275pipe(87, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(88, "li")(89, "span");
    \u0275\u0275text(90);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(91, "mat-icon", 150);
    \u0275\u0275text(92, "check");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(93, "li")(94, "span");
    \u0275\u0275text(95);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(96, "mat-icon", 150);
    \u0275\u0275text(97, "check");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(98, "div", 146)(99, "h4", 151)(100, "mat-icon");
    \u0275\u0275text(101, "add_circle_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(102);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(103, "ul", 152)(104, "li")(105, "span");
    \u0275\u0275text(106);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(107, "span", 153);
    \u0275\u0275text(108);
    \u0275\u0275pipe(109, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(110, "li")(111, "span");
    \u0275\u0275text(112);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(113, "a", 154);
    \u0275\u0275text(114);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(115, "li")(116, "span");
    \u0275\u0275text(117);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(118, "a", 154);
    \u0275\u0275text(119);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(120, "div", 155)(121, "div", 156);
    \u0275\u0275listener("click", function SmartEnrollPlansComponent_ng_container_0_ng_container_15_Template_div_click_121_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.showExtraBioInfo = !ctx_r1.showExtraBioInfo);
    });
    \u0275\u0275elementStart(122, "div", 157)(123, "mat-icon", 158);
    \u0275\u0275text(124, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(125, "span");
    \u0275\u0275text(126);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(127, "mat-icon", 159);
    \u0275\u0275text(128, "expand_more");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(129, SmartEnrollPlansComponent_ng_container_0_ng_container_15_div_129_Template, 10, 6, "div", 160);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(130, "div", 161)(131, "button", 162);
    \u0275\u0275listener("click", function SmartEnrollPlansComponent_ng_container_0_ng_container_15_Template_button_click_131_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.createOrUpdateSubscription());
    });
    \u0275\u0275template(132, SmartEnrollPlansComponent_ng_container_0_ng_container_15_mat_spinner_132_Template, 1, 0, "mat-spinner", 163);
    \u0275\u0275text(133);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(134, "p", 164);
    \u0275\u0275text(135);
    \u0275\u0275elementStart(136, "a", 165);
    \u0275\u0275text(137);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_13_0;
    let tmp_14_0;
    let tmp_16_0;
    let tmp_22_0;
    let tmp_24_0;
    let tmp_26_0;
    let tmp_28_0;
    let tmp_33_0;
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
    \u0275\u0275textInterpolate(ctx_r1.selectedPlan === "free" ? t_r5("smartenroll.plans.free") : ctx_r1.selectedPlan === "plus" ? t_r5("smartenroll.plans.plus") : t_r5("smartenroll.plans.business"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r5("smartenroll.plans.per_enrollment"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r5("smartenroll.plans.starting_at"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(19, 49, ctx_r1.calculatePrice(ctx_r1.selectedPlan), "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("/", t_r5("smartenroll.plans.month"), "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.selectedPlan === "free" ? \u0275\u0275pipeBind1(28, 52, (tmp_13_0 = ctx_r1.getPlan("free")) == null ? null : tmp_13_0.basicLimit) : \u0275\u0275pipeBind1(29, 54, ctx_r1.getSliderAmount(ctx_r1.selectedPlan)));
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(38, 56, (tmp_14_0 = ctx_r1.getPlan(ctx_r1.selectedPlan)) == null ? null : tmp_14_0.unitPrice));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r5("smartenroll.plans.cost_per_enroll"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate((((tmp_16_0 = ctx_r1.getPlan(ctx_r1.selectedPlan)) == null ? null : tmp_16_0.intervalCount) || 1) * 30);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r5("smartenroll.plans.analytics_days"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.selectedPlan === "free" ? "2" : "5");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r5("smartenroll.plans.team_members"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", t_r5("smartenroll.plans.included"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r5("smartenroll.plans.liveness"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(69, 58, ctx_r1.getSliderAmount(ctx_r1.selectedPlan) || ((tmp_22_0 = ctx_r1.getPlan(ctx_r1.selectedPlan)) == null ? null : tmp_22_0.biometricsLimit) || 0));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r5("smartenroll.plans.worldwide_checks"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(75, 60, ctx_r1.getSliderAmount(ctx_r1.selectedPlan) || ((tmp_24_0 = ctx_r1.getPlan(ctx_r1.selectedPlan)) == null ? null : tmp_24_0.backgroundCheckLimit) || 0));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r5("smartenroll.plans.emails"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(81, 62, ctx_r1.getSliderAmount(ctx_r1.selectedPlan) || ((tmp_26_0 = ctx_r1.getPlan(ctx_r1.selectedPlan)) == null ? null : tmp_26_0.emailsLimit) || 0));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r5("smartenroll.plans.scan_doc"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(87, 64, ctx_r1.getSliderAmount(ctx_r1.selectedPlan) || ((tmp_28_0 = ctx_r1.getPlan(ctx_r1.selectedPlan)) == null ? null : tmp_28_0.scanDocsLimit) || 0));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r5("smartenroll.plans.white_label"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(t_r5("smartenroll.plans.face_compare"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", t_r5("smartenroll.plans.extra_cost"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r5("smartenroll.plans.extra_enrolls"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(109, 66, (tmp_33_0 = (tmp_33_0 = ctx_r1.getPlan(ctx_r1.selectedPlan)) == null ? null : tmp_33_0.meteredUnitPrice) !== null && tmp_33_0 !== void 0 ? tmp_33_0 : (tmp_33_0 = ctx_r1.getPlan(ctx_r1.selectedPlan)) == null ? null : tmp_33_0.unitPrice), " ", t_r5("smartenroll.plans.per_extra"), "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r5("smartenroll.plans.sms_verification"));
    \u0275\u0275advance();
    \u0275\u0275property("href", ctx_r1.getSmsWhatsappPricesUrl(), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r5("smartenroll.plans.see_prices"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r5("smartenroll.plans.whatsapp_verification"));
    \u0275\u0275advance();
    \u0275\u0275property("href", ctx_r1.getSmsWhatsappPricesUrl(), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r5("smartenroll.plans.see_prices"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(t_r5("smartenroll.plans.extra_enroll_info_title"));
    \u0275\u0275advance();
    \u0275\u0275classProp("expanded", ctx_r1.showExtraBioInfo);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.showExtraBioInfo);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isCheckoutActionDisabled())("ngClass", ctx_r1.selectedPlan);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.subscribingToPlan);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.subscribingToPlan ? t_r5("smartenroll.plans.processing") : ctx_r1.selectedPlan === "free" ? t_r5("smartenroll.plans.purchase_this_plan") : t_r5(ctx_r1.checkoutPrimaryActionKey()), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r5("smartenroll.plans.by_using_prefix"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("href", ctx_r1.termsAndConditionsUrl, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r5("smartenroll.plans.terms_and_conditions"));
  }
}
function SmartEnrollPlansComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 4)(2, "div", 5)(3, "div", 6);
    \u0275\u0275template(4, SmartEnrollPlansComponent_ng_container_0_button_4_Template, 3, 0, "button", 7);
    \u0275\u0275elementStart(5, "div", 8)(6, "mat-icon");
    \u0275\u0275text(7, "receipt_long");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div")(9, "h1", 9);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 10);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(13, SmartEnrollPlansComponent_ng_container_0_ng_container_13_Template, 60, 12, "ng-container", 11)(14, SmartEnrollPlansComponent_ng_container_0_ng_container_14_Template, 218, 106, "ng-container", 11)(15, SmartEnrollPlansComponent_ng_container_0_ng_container_15_Template, 138, 68, "ng-container", 11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.currentView === "change" && ctx_r1.currentSubscription.length || ctx_r1.currentView === "select");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(t_r5("settings.plans"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r5("nav.manage_subscription"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentSubscription.length && ctx_r1.currentView === "current");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentView === "change");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentView === "select");
  }
}
var SMART_AGENT_CHECKOUT_SOURCE = "smart_agent";
var CATALOG_PLAN_CODES = {
  plus: "smart_enroll_plus",
  business: "smart_enroll_business",
  free: "smart_enroll_pyg"
};
var SmartEnrollPlansComponent = class _SmartEnrollPlansComponent {
  constructor() {
    this._activatedRoute = inject(ActivatedRoute);
    this._authGate = inject(AuthRequiredGateService);
    this._changeDetectorRef = inject(ChangeDetectorRef);
    this._dialog = inject(MatDialog);
    this._enrollPlansService = inject(SmartEnrollPlansService);
    this._router = inject(Router);
    this._snackBar = inject(MatSnackBar);
    this._splashScreenService = inject(FuseSplashScreenService);
    this._subscriptionService = inject(SubscriptionService);
    this._translocoService = inject(TranslocoService);
    this.termsAndConditionsUrl = "https://docs.verifik.co/legal/terms-and-conditions";
    this.currentSubscription = [];
    this.subscribingToPlan = false;
    this.showExtraBioInfo = false;
    this._sessionConfirmHandled = false;
    this.planSettings = {
      plus: {
        max: 1e3,
        min: 300,
        notches: [],
        step: 100,
        value: 0
      },
      business: {
        max: 2e3,
        min: 1e3,
        notches: [],
        step: 100,
        value: 0
      }
    };
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
          console.error("Error confirming Smart Enroll checkout session:", error);
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
    this._enrollPlansService.getClientEnrollPlans({
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
    this._prefetchClientInvoiceSettings();
    this._loadMySubscription();
    this._getSmartEnrollPlans();
  }
  _setCurrentViewFromParams() {
    const viewParam = this._activatedRoute.snapshot.queryParams["view"];
    if (["current", "change"].includes(viewParam))
      return viewParam;
    return "current";
  }
  /** Same gate as Subscription plans; respects what billing-details saves (`invoiceSettings` shape). */
  _isInvoiceSettingsComplete(billingData) {
    const doc = billingData;
    return invoiceBillingDetailsComplete(doc?.invoiceSettings);
  }
  /**
   * JWT-backed Verifik APIs use `ctx.state.user.clientId`; local `user` may use `id` or `_id`.
   */
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
  _prefetchClientInvoiceSettings() {
    if (!this._hasVerifikAccessToken()) {
      this._splashScreenService.hide();
      return;
    }
    this._enrollPlansService.getClientSettings(this._clientSettingsQueryParams()).subscribe({
      next: () => {
        this.subscribingToPlan = false;
        this._splashScreenService.hide();
        this._changeDetectorRef.markForCheck();
      },
      error: () => {
        this._openSnackBar(this._translocoService.translate("smartenroll.errors.redirect"), "error");
        this.subscribingToPlan = false;
        this._splashScreenService.hide();
      },
      complete: () => {
        this.subscribingToPlan = false;
        this._splashScreenService.hide();
      }
    });
  }
  /**
   * Fresh read before checkout so returning from billing settings without full reload is respected.
   */
  _ensureInvoiceSettings$() {
    if (!this._hasVerifikAccessToken()) {
      return of(false);
    }
    return this._enrollPlansService.getClientSettings(this._clientSettingsQueryParams()).pipe(map((response) => {
      const billingData = this._billingDataFromClientSettingsResponse(response);
      const ok = this._isInvoiceSettingsComplete(billingData);
      this._changeDetectorRef.markForCheck();
      return ok;
    }), catchError(() => {
      this._openSnackBar(this._translocoService.translate("smartenroll.errors.redirect"), "error");
      return of(false);
    }));
  }
  _getSmartEnrollPlans() {
    this._enrollPlansService.getCatalogPlans({ sort: "amount" }).subscribe({
      next: (response) => {
        this.plans = {};
        response.data.forEach((plan) => {
          switch (plan.code) {
            case "smart_enroll_business":
              this.plans["business"] = plan;
              break;
            case "smart_enroll_plus":
              this.plans["plus"] = plan;
              break;
            case "smart_enroll_pyg":
              this.plans["free"] = plan;
              break;
            default:
              break;
          }
        });
      },
      error: (error) => {
        console.error("SmartEnrollPlansComponent ~ _getSmartEnrollPlans ~ error:", error);
        this._openSnackBar(this._translocoService.translate("smartenroll.errors.get_plans"), "error");
      }
    });
  }
  _loadMySubscription() {
    this.currentSubscription = [];
    this._enrollPlansService.getClientEnrollPlans({
      sort: "startDate",
      where_status: "active",
      populates: ["plan"]
    }).subscribe({
      next: (response) => {
        if (!response?.data || response.data.length === 0) {
          this.currentView = "change";
          this._splashScreenService.hide();
          this._changeDetectorRef.markForCheck();
          return;
        }
        this.currentSubscription = [];
        for (let index = 0; index < response.data.length; index++) {
          const element = response.data[index];
          const nameCut = element.name.split("Smart Enroll ");
          const codeCut = element.code.split("smart_enroll_");
          const name = nameCut.length > 2 ? nameCut[2] : nameCut[1];
          const code = codeCut.length > 2 ? codeCut[2] : codeCut[1];
          this.currentSubscription.push(__spreadProps(__spreadValues({}, element), {
            nameShow: name === "PYG" ? "Free Forever" : name,
            codeShow: code === "pyg" ? "Free" : code
          }));
        }
        this.currentView = this._setCurrentViewFromParams();
        this._splashScreenService.hide();
        this._changeDetectorRef.markForCheck();
      },
      error: (error) => {
        console.error("SmartEnrollPlansComponent ~ _loadMySubscription ~ error:", error);
        this._openSnackBar(this._translocoService.translate("smartenroll.errors.load_subscription"), "error");
      }
    });
  }
  _openSnackBar(message, _type, timer = 5e3) {
    this._snackBar.open(message, void 0, { duration: timer });
  }
  _redirectToStripe() {
    this._splashScreenService.show();
    this._subscriptionService.createPortalSession({}).subscribe({
      next: (result) => {
        const url = result?.data?.url;
        if (url)
          window.location.href = url;
        this._splashScreenService.hide();
      },
      error: (error) => {
        console.error("SmartEnrollPlansComponent ~ _redirectToStripe ~ error:", error);
        this._openSnackBar(this._translocoService.translate("smartenroll.errors.redirect"), "error");
        this._splashScreenService.hide();
      }
    });
  }
  _setSliderValues() {
    if (!this.selectedPlan)
      return;
    if (this.selectedPlan === "free") {
      this.sliderOptions = {};
      return;
    }
    this.sliderOptions = this.planSettings[this.selectedPlan];
    if (this.sliderOptions?.notches?.length)
      return;
    const notchArray = [];
    let val = this.sliderOptions.min ?? 0;
    const max = this.sliderOptions.max ?? 0;
    while (val <= max) {
      notchArray.push(val);
      val += 100;
    }
    this.sliderOptions.notches = notchArray;
  }
  calculatePrice(plan) {
    const thePlan = this.getPlan(plan);
    if (!thePlan)
      return 0;
    return thePlan.price + (thePlan.unitPrice || 0) * this.getAddedSmartEnrolls();
  }
  usageDaysUntilReset(subscription) {
    return daysUntilReset(subscription?.endDate);
  }
  usageResetDate(subscription) {
    if (!subscription?.endDate)
      return "";
    const date = new Date(subscription.endDate);
    if (Number.isNaN(date.getTime()))
      return "";
    const locale = this._translocoService.getActiveLang() || "en";
    return new Intl.DateTimeFormat(locale, {
      year: "numeric",
      month: "long",
      day: "numeric"
    }).format(date);
  }
  lookupQuotaAtLimit(subscription) {
    const namesLimit = Number(subscription?.validateNamesLimit) || 0;
    const backgroundLimit = Number(subscription?.backgroundCheckLimit) || 0;
    const namesAtLimit = namesLimit > 0 && remaining(subscription?.validateNamesCount, namesLimit) === 0;
    const backgroundAtLimit = backgroundLimit > 0 && remaining(subscription?.backgroundCheckCount, backgroundLimit) === 0;
    return namesAtLimit || backgroundAtLimit;
  }
  calculateSubscriptionPrice(subscription) {
    const plan = subscription?.plan;
    if (!plan)
      return 0;
    if (subscription.code === "smart_enroll_pyg") {
      return 0;
    }
    const baseIncluded = plan.biometricsLimit || 0;
    const total = subscription.biometricsLimit || 0;
    const volumeAboveBase = Math.max(0, total - baseIncluded);
    return (plan.price || 0) + (plan.unitPrice || 0) * volumeAboveBase;
  }
  capitalizeFirstLetter(str) {
    return !str ? "" : str.charAt(0).toUpperCase() + str.slice(1);
  }
  changeView(data, plan) {
    this.currentView = data;
    this.selectedPlan = plan;
    this._setSliderValues();
    if (data === "select" && (plan === "plus" || plan === "business") && this.isActiveCatalogPlan(plan)) {
      this._syncSliderIndexFromActiveSubscription(plan);
    }
    this._changeDetectorRef.markForCheck();
  }
  /**
   * First active row without pending cancel, else first row.
   */
  getPrimaryActiveSubscription() {
    if (!this.currentSubscription?.length)
      return null;
    const notCancelled = this.currentSubscription.find((sub) => !sub.cancelAt);
    return notCancelled ?? this.currentSubscription[0];
  }
  isActiveCatalogPlan(planKey) {
    const sub = this.getPrimaryActiveSubscription();
    if (!sub || sub.cancelAt)
      return false;
    return sub.code === CATALOG_PLAN_CODES[planKey];
  }
  get currentSubscribedEnrollments() {
    const sub = this.getPrimaryActiveSubscription();
    if (!sub || sub.cancelAt)
      return null;
    const v = sub.biometricsLimit;
    return typeof v === "number" ? v : null;
  }
  selectedEnrollmentsCount() {
    if (!this.selectedPlan || this.selectedPlan === "free")
      return 0;
    return this.getSliderAmount(this.selectedPlan);
  }
  isSameTierAsSelectedPlan() {
    if (!this.selectedPlan || this.selectedPlan === "free")
      return false;
    return this.isActiveCatalogPlan(this.selectedPlan);
  }
  isSameTierVolumeUpdate() {
    if (!this.isSameTierAsSelectedPlan())
      return false;
    const from = this.currentSubscribedEnrollments;
    if (from === null)
      return false;
    return this.selectedEnrollmentsCount() !== from;
  }
  showVolumeChangeSummary() {
    return this.isSameTierAsSelectedPlan() && this.currentSubscribedEnrollments !== null;
  }
  checkoutPrimaryActionKey() {
    if (this.selectedPlan === "free")
      return "smartenroll.plans.purchase_this_plan";
    const primary = this.getPrimaryActiveSubscription();
    const hasActive = !!primary && !primary.cancelAt;
    if (!hasActive)
      return "smartenroll.plans.purchase_this_plan";
    if (this.isSameTierAsSelectedPlan()) {
      return this.isSameTierVolumeUpdate() ? "smartenroll.plans.update_enrollment_volume" : "smartenroll.plans.no_volume_change";
    }
    return "smartenroll.plans.switch_plan";
  }
  isCheckoutActionDisabled() {
    if (this.subscribingToPlan)
      return true;
    if (!this.selectedPlan || this.selectedPlan === "free")
      return false;
    if (this.isSameTierAsSelectedPlan() && !this.isSameTierVolumeUpdate())
      return true;
    return false;
  }
  createOrUpdateSubscription() {
    if (this.subscribingToPlan || this.isCheckoutActionDisabled())
      return;
    if (!this._hasVerifikAccessToken())
      return;
    this._ensureInvoiceSettings$().subscribe((ok) => {
      if (!ok) {
        this._dialog.open(SmartEnrollBillingRequiredDialogComponent, { width: "420px" });
        return;
      }
      if (this.selectedPlan !== "free" && this.isSameTierVolumeUpdate()) {
        const from = this.currentSubscribedEnrollments ?? 0;
        const to = this.selectedEnrollmentsCount();
        this._dialog.open(SmartEnrollVolumeConfirmDialogComponent, {
          width: "420px",
          data: { from, to }
        }).afterClosed().subscribe((confirmed) => {
          if (confirmed)
            this._submitSubscriptionChange();
        });
        return;
      }
      this._submitSubscriptionChange();
    });
  }
  _syncSliderIndexFromActiveSubscription(planKey) {
    const sub = this.getPrimaryActiveSubscription();
    if (!sub || sub.cancelAt)
      return;
    const catalog = this.plans?.[planKey];
    if (!catalog || sub.code !== catalog.code)
      return;
    const base = catalog.biometricsLimit ?? 0;
    const currentQty = sub.biometricsLimit ?? base;
    const added = currentQty - base;
    const step = 100;
    let index = Math.round(added / step);
    const notches = this.sliderOptions?.notches ?? [];
    if (!notches.length)
      return;
    const maxIdx = notches.length - 1;
    index = Math.max(0, Math.min(index, maxIdx));
    if (this.sliderOptions)
      this.sliderOptions.value = index;
  }
  _submitSubscriptionChange() {
    this.subscribingToPlan = true;
    const plan = this.plans[this.selectedPlan];
    this._splashScreenService.show();
    const primary = this.getPrimaryActiveSubscription();
    const currentSubscriptionNotCancelled = !!primary && !primary.cancelAt;
    if (this.currentSubscription.length > 0 && currentSubscriptionNotCancelled) {
      const payload2 = {
        quantity: this.selectedPlan === "free" ? 0 : this.getSliderAmount(this.selectedPlan),
        plan: plan.stripeProduct,
        source: SMART_AGENT_CHECKOUT_SOURCE
      };
      if (primary?.code !== plan.code) {
        payload2.defaultPrice = plan.stripePrice;
      }
      this._enrollPlansService.upgradeClientEnrollPlan(payload2).subscribe({
        next: (result) => {
          if (!result) {
            this.subscribingToPlan = false;
            this._splashScreenService.hide();
            return;
          }
          const url = result?.data?.url;
          if (url) {
            window.location.href = url;
            return;
          }
          this.ngOnInit();
        },
        error: () => {
          this.subscribingToPlan = false;
          this._splashScreenService.hide();
        }
      });
      return;
    }
    const payload = {
      quantity: this.selectedPlan === "free" ? 0 : this.getSliderAmount(this.selectedPlan),
      plan: plan.stripeProduct,
      defaultPrice: plan.stripePrice,
      source: SMART_AGENT_CHECKOUT_SOURCE
    };
    this._enrollPlansService.postClientEnrollPlan(payload).subscribe({
      next: (response) => {
        const url = response?.data?.url;
        if (url)
          window.location.href = url;
        else {
          this.subscribingToPlan = false;
          this._splashScreenService.hide();
        }
      },
      error: () => {
        this.subscribingToPlan = false;
        this._splashScreenService.hide();
      }
    });
  }
  creditCardLogo(company) {
    const logos = {
      visa: "https://cdn.verifik.co/assets/billing-svg/VisaLogo.svg",
      mastercard: "https://cdn.verifik.co/assets/billing-svg/MasterCardLogo.svg",
      amex: "https://cdn.verifik.co/assets/billing-svg/AmericanExpressLogo.svg",
      link: "https://cdn.verifik.co/assets/billing-svg/StripeLinkLogo.svg"
    };
    return logos[company?.toLowerCase()] || "";
  }
  isLinkPayment(brand) {
    return brand?.toLowerCase() === "link";
  }
  getAddedSmartEnrolls() {
    return 100 * (this.sliderOptions?.value || 0);
  }
  getTrackFillPercentage() {
    if (!this.sliderOptions?.notches?.length)
      return 0;
    const maxIndex = this.sliderOptions.notches.length - 1;
    const currentValue = this.sliderOptions.value || 0;
    return currentValue / maxIndex * 100;
  }
  getPlan(plan) {
    return this.plans?.[plan];
  }
  getSliderAmount(plan) {
    return (this.getPlan(plan)?.biometricsLimit || 0) + this.getAddedSmartEnrolls();
  }
  goBack(direction = null) {
    if (direction) {
      if (this.sliderOptions)
        this.sliderOptions.value = 0;
      this.currentView = direction;
      this.selectedPlan = null;
      this._changeDetectorRef.markForCheck();
      return;
    }
    this.selectedPlan = null;
    this.currentView = "current";
  }
  goToStripeSubscriptions() {
    this._redirectToStripe();
  }
  purchaseEnterprise() {
    const url = {
      es: `https://api.whatsapp.com/send?phone=573208184565&text=%C2%A1Hola!%20estoy%20interesado%20en%20adquirir%20un%20plan%20enterprise%20por%20smartEnroll.`,
      en: `https://api.whatsapp.com/send?phone=573208184565&text=Hello!%20I%20am%20interested%20on%20adquiring%20enterprise%20plan%20for%20smartEnroll.`
    };
    const lang = this._translocoService.getActiveLang();
    window.open(url[lang] || url["en"], "_blank");
  }
  getSmsWhatsappPricesUrl() {
    const currentLang = this._translocoService.getActiveLang();
    if (currentLang === "en") {
      return "https://docs.verifik.co/phone-validations/sms-and-whatsapp-prices";
    }
    return "https://docs.verifik.co/verifik-es/planes-y-precios/precios-de-sms-whatsapp/";
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
    return "free";
  }
  static {
    this.\u0275fac = function SmartEnrollPlansComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SmartEnrollPlansComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SmartEnrollPlansComponent, selectors: [["smart-enroll-plans"]], decls: 1, vars: 0, consts: [["daysLeft", ""], ["basicEnrollGauge", ""], ["manyDays", ""], [4, "transloco"], [1, "plans-container", "w-full", "flex", "justify-center"], [1, "w-full", "max-w-4xl", "px-4", "sm:px-8", "py-8"], [1, "current-plan-header", "flex", "items-center", "gap-4", "mb-8"], ["class", "back-button", "mat-icon-button", "", 3, "click", 4, "ngIf"], [1, "header-icon"], [1, "current-plan-title"], [1, "current-plan-subtitle"], [4, "ngIf"], ["mat-icon-button", "", 1, "back-button", 3, "click"], [4, "ngFor", "ngForOf"], [1, "upgrade-section", "animate-fadeIn"], [1, "upgrade-header"], [1, "upgrade-header-content"], [1, "upgrade-badge"], [1, "upgrade-headline"], [1, "upgrade-subheadline"], [1, "upgrade-illustration"], [1, "floating-icon", "icon-1"], [1, "floating-icon", "icon-2"], [1, "floating-icon", "icon-3"], [1, "upgrade-benefits"], [1, "benefit-item"], [1, "benefit-icon"], [1, "benefit-text"], [1, "benefit-title"], [1, "benefit-desc"], [1, "upgrade-cta"], ["mat-flat-button", "", 1, "upgrade-button", 3, "click"], [1, "upgrade-hint"], [1, "plan-card", "mb-6", "animate-fadeIn"], [1, "card-header"], [1, "flex", "items-center", "gap-3"], [1, "card-icon", 3, "ngClass"], [1, "text-sm", "text-gray-500"], [1, "font-semibold", "text-gray-900", "text-lg"], [1, "status-badge", 3, "ngClass"], [1, "status-dot"], ["class", "payment-alert", 4, "ngIf"], [1, "card-body"], [1, "price-section"], [1, "price-label"], [1, "price-amount"], [1, "price-currency"], [1, "price-period"], [1, "payment-method"], ["class", "usage-dashboard", 4, "ngIf"], ["class", "features-grid", 4, "ngIf"], [1, "optional-section"], [1, "optional-title"], [1, "optional-subtitle"], [1, "optional-grid"], [1, "optional-card"], [1, "optional-icon", "sms"], [1, "optional-content"], [1, "optional-label"], [1, "optional-value"], ["target", "_blank", 1, "optional-link", 3, "href"], [1, "optional-icon", "whatsapp"], [1, "card-actions"], ["mat-flat-button", "", 1, "action-button", "primary", 3, "click"], [1, "payment-alert"], [1, "text-red-500"], [1, "payment-icon", "link"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 72 24", "fill", "none", 1, "h-6", "w-16"], ["fill", "currentColor", "d", "M36.12 3.67683c0-1.12801.9504-2.04481 2.0688-2.04481 1.1184 0 2.0688.9216 2.0688 2.04481 0 1.1232-.9168 2.0688-2.0688 2.0688-1.152 0-2.0688-.9168-2.0688-2.0688ZM29.9808 1.92001h3.6V22.08h-3.6V1.92001ZM40.008 7.68001h-3.6288V22.08h3.6288V7.68001ZM66.096 14.3904c2.7312-1.68 4.5888-4.1808 5.3232-6.71516h-3.6288c-.9456 2.41916-3.1152 4.23836-5.5008 5.01116V1.91523h-3.6288V22.0752h3.6288V16.08c2.7696.6912 4.9584 3.0864 5.7072 5.9952h3.6528c-.5568-3.0528-2.6448-5.9088-5.5536-7.6848ZM46.44 9.29283c.9504-1.2624 2.8032-1.99681 4.3056-1.99681 2.8032 0 5.1216 2.04961 5.1264 5.14558v9.6336h-3.6288v-8.832c0-1.272-.5664-2.7408-2.4048-2.7408-2.16 0-3.4032 1.9152-3.4032 4.1568v7.4256h-3.6288V7.68962H46.44v1.60321Z"], ["fill", "#00D66F", "d", "M12 24c6.6274 0 12-5.3726 12-12 0-6.62743-5.3726-12-12-12C5.37259 0 0 5.37257 0 12c0 6.6274 5.37259 12 12 12Z"], ["fill", "#011e0f", "d", "M11.4479 4.80005H7.74707c.72 3.0096 2.82243 5.58235 5.45283 7.19995-2.6352 1.6176-4.73283 4.1904-5.45283 7.2h3.70083c.9168-2.784 3.456-5.2032 6.576-5.6976v-3.0095c-3.1248-.4896-5.664-2.90885-6.576-5.69285Z"], [1, "payment-text"], ["alt", "card", 1, "h-8", "w-12", "object-contain", 3, "src"], [1, "payment-details"], [1, "payment-expiry"], [1, "text-gray-400"], [1, "payment-text", "text-gray-500"], [1, "usage-dashboard"], [1, "usage-period", "dark:!border-indigo-400/30", "dark:!bg-indigo-600/20"], [1, "usage-period__copy"], [1, "usage-period__title", "dark:!text-slate-50"], [1, "usage-period__reset", "dark:!text-blue-300"], [4, "ngIf", "ngIfElse"], [1, "usage-period__date", "dark:!text-slate-400"], [1, "usage-gauges"], [3, "used", "limit", "label"], [1, "usage-bars", "dark:!border-white/10", "dark:!bg-white/5"], [3, "used", "limit", "label", 4, "ngIf"], [3, "nameDiscountPercent", "backgroundDiscountPercent", "emphasized"], [1, "features-grid"], [1, "feature-card"], [1, "feature-icon", "email"], [1, "feature-content"], [1, "feature-label"], [1, "feature-value"], [1, "feature-status"], [1, "feature-icon", "whitelabel"], [1, "feature-status", "active"], [1, "feature-icon", "biometrics"], [1, "feature-icon", "api"], [1, "mb-6"], [1, "text-2xl", "font-semibold", "text-gray-900"], [1, "text-gray-500", "mt-1"], [1, "plans-grid"], [1, "select-plan-card", "animate-fadeIn"], ["class", "current-plan-badge", 4, "ngIf"], [1, "plan-badge", "plus"], [1, "plan-pricing"], [1, "plan-price"], [1, "plan-period"], [1, "plan-range"], [1, "plan-features"], [1, "plan-stat"], [1, "stat-label"], [1, "stat-value"], [1, "plan-includes"], [1, "includes-title"], [1, "includes-list"], ["mat-flat-button", "", 1, "select-button", "plus", 3, "click"], [1, "select-plan-card", "featured", "animate-fadeIn"], ["class", "current-plan-badge current-plan-badge--offset", 4, "ngIf"], [1, "featured-badge"], [1, "plan-badge", "business"], ["mat-flat-button", "", 1, "select-button", "business", 3, "click"], [1, "plan-badge", "enterprise"], [1, "plan-price", "custom"], ["mat-flat-button", "", 1, "select-button", "enterprise", 3, "click"], [1, "select-plan-card", "free-plan-card", "animate-fadeIn"], [1, "plan-badge", "free"], [1, "free-plan-desc", 3, "innerHTML"], ["mat-stroked-button", "", 1, "select-button", "free", 3, "click"], [1, "current-plan-badge"], [1, "current-plan-badge", "current-plan-badge--offset"], ["class", "landing-slider-section animate-fadeIn", 4, "ngIf"], [1, "checkout-card", "animate-fadeIn", 3, "ngClass"], [1, "checkout-header", 3, "ngClass"], [1, "checkout-plan-info"], [1, "checkout-badge", 3, "ngClass"], [1, "checkout-plan-type"], [1, "checkout-price"], [1, "price-from"], [1, "price-value"], [1, "checkout-stats"], [1, "stat-item"], [1, "stat-divider"], [1, "checkout-features"], [1, "features-column"], [1, "features-title", "included-title"], [1, "features-list", "included"], [1, "feature-count"], [1, "feature-check"], [1, "features-title", "extra-title"], [1, "features-list", "extra"], [1, "feature-price"], ["target", "_blank", 1, "extras-link", 3, "href"], [1, "extra-bio-notice"], [1, "extra-bio-header", 3, "click"], [1, "extra-bio-left"], [1, "info-icon"], [1, "expand-icon"], ["class", "extra-bio-body", 4, "ngIf"], [1, "checkout-actions"], ["mat-flat-button", "", 1, "checkout-button", 3, "click", "disabled", "ngClass"], ["diameter", "20", "class", "mr-2", 4, "ngIf"], [1, "checkout-terms"], ["target", "_blank", 3, "href"], [1, "landing-slider-section", "animate-fadeIn"], [1, "landing-slider-title"], [1, "landing-slider-subtitle"], [1, "landing-slider-track"], [1, "track-label"], [1, "track-slider"], [1, "range-slider", "range-slider--dotted"], ["type", "range", 1, "range-slider__input", 3, "ngModelChange", "max", "min", "ngModel"], [1, "landing-slider-pill"], ["class", "volume-change-summary", 4, "ngIf"], [1, "volume-change-summary"], [1, "volume-change-summary__head"], ["aria-hidden", "true", 1, "volume-change-summary__head-icon"], [1, "volume-change-summary__head-text"], [1, "volume-change-summary__eyebrow"], [1, "volume-change-summary__title"], [1, "volume-change-summary__compare"], [1, "volume-change-summary__panel", "volume-change-summary__panel--from"], [1, "volume-change-summary__panel-label"], [1, "volume-change-summary__panel-value"], [1, "volume-change-summary__panel-unit"], [1, "volume-change-summary__mid"], [1, "volume-change-summary__mid-icon"], [1, "volume-change-summary__panel", "volume-change-summary__panel--to"], ["class", "volume-change-summary__hint", 4, "ngIf"], [1, "volume-change-summary__hint"], [1, "extra-bio-body"], [1, "extra-bio-costs"], [1, "bio-cost-item"], ["diameter", "20", 1, "mr-2"]], template: function SmartEnrollPlansComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, SmartEnrollPlansComponent_ng_container_0_Template, 16, 6, "ng-container", 3);
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
      MatProgressSpinner,
      UsageQuotaGaugeComponent,
      UsageQuotaBarComponent,
      UsageOverageExplainerComponent
    ], styles: ['\n\n[_nghost-%COMP%] {\n  width: 100%;\n  display: block;\n}\n.plans-container[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 64px);\n  background:\n    linear-gradient(\n      180deg,\n      #f8fafc 0%,\n      #ffffff 100%);\n}\n.current-plan-header[_ngcontent-%COMP%]   .current-plan-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #0f0f2d;\n  margin: 0;\n  letter-spacing: -0.02em;\n}\n.current-plan-header[_ngcontent-%COMP%]   .current-plan-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #6b7280;\n  margin: 4px 0 0;\n}\n.back-button[_ngcontent-%COMP%] {\n  color: #2b3af0;\n  transition: all 0.2s ease;\n}\n.back-button[_ngcontent-%COMP%]:hover {\n  background: rgba(43, 58, 240, 0.06);\n  transform: translateX(-2px);\n}\n.header-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  min-width: 48px;\n  min-height: 48px;\n  flex-shrink: 0;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #2b3af0 0%,\n      #4f5af6 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 4px 14px rgba(43, 58, 240, 0.25);\n}\n.header-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 24px;\n  width: 24px;\n  height: 24px;\n  min-width: 24px;\n  min-height: 24px;\n  flex-shrink: 0;\n  line-height: 24px;\n}\n.plan-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 20px;\n  border: 1px solid #e5e7eb;\n  overflow: hidden;\n  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.04);\n  transition: all 0.3s ease;\n}\n.plan-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);\n}\n.plan-card.payment-failed[_ngcontent-%COMP%] {\n  border-color: #fecaca;\n}\n.card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  background:\n    linear-gradient(\n      135deg,\n      #f3f4f6 0%,\n      #f5f5f5 100%);\n  border-bottom: 1px solid #e5e7eb;\n}\n@media (max-width: 640px) {\n  .card-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 12px;\n  }\n}\n.card-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease;\n}\n.card-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 22px;\n  width: 22px;\n  height: 22px;\n}\n.card-icon.free[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #6b7280 0%,\n      #9ca3af 100%);\n  box-shadow: 0 2px 8px rgba(107, 114, 128, 0.3);\n}\n.card-icon.plus[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #2b3af0 0%,\n      #4f5af6 100%);\n  box-shadow: 0 2px 8px rgba(43, 58, 240, 0.3);\n}\n.card-icon.business[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #0f0f2d 0%,\n      #1a1a4a 100%);\n  box-shadow: 0 2px 8px rgba(15, 15, 45, 0.3);\n}\n.card-icon.enterprise[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #1f2937 0%,\n      #374151 100%);\n  box-shadow: 0 2px 8px rgba(31, 41, 55, 0.3);\n}\n.status-badge[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  font-weight: 500;\n  padding: 6px 14px;\n  border-radius: 20px;\n}\n.status-badge.success[_ngcontent-%COMP%] {\n  color: #2b3af0;\n  background: rgba(43, 58, 240, 0.06);\n}\n.status-badge.success[_ngcontent-%COMP%]   .status-dot[_ngcontent-%COMP%] {\n  background: #2b3af0;\n}\n.status-badge.warning[_ngcontent-%COMP%] {\n  color: #f59e0b;\n  background: rgba(245, 158, 11, 0.1);\n}\n.status-badge.warning[_ngcontent-%COMP%]   .status-dot[_ngcontent-%COMP%] {\n  background: #f59e0b;\n}\n.status-badge.error[_ngcontent-%COMP%] {\n  color: #ef4444;\n  background: rgba(239, 68, 68, 0.1);\n}\n.status-badge.error[_ngcontent-%COMP%]   .status-dot[_ngcontent-%COMP%] {\n  background: #ef4444;\n}\n.status-badge[_ngcontent-%COMP%]   .status-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_pulse 2s infinite;\n}\n.payment-alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px 24px;\n  background:\n    linear-gradient(\n      135deg,\n      #fef2f2 0%,\n      #fee2e2 100%);\n  border-bottom: 1px solid #fecaca;\n  font-size: 14px;\n  color: #dc2626;\n  font-weight: 500;\n}\n.card-body[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.price-section[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 24px;\n  background:\n    linear-gradient(\n      135deg,\n      #f3f4f6 0%,\n      #e5e7eb 100%);\n  border-radius: 16px;\n  margin-bottom: 24px;\n}\n.price-section[_ngcontent-%COMP%]   .price-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6b7280;\n  font-weight: 500;\n  margin-bottom: 8px;\n}\n.price-section[_ngcontent-%COMP%]   .price-amount[_ngcontent-%COMP%] {\n  font-size: 42px;\n  font-weight: 700;\n  color: #0f0f2d;\n  line-height: 1;\n}\n.price-section[_ngcontent-%COMP%]   .price-amount[_ngcontent-%COMP%]   .price-currency[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 500;\n  color: #6b7280;\n}\n.price-section[_ngcontent-%COMP%]   .price-period[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6b7280;\n  margin-top: 8px;\n}\n.payment-method[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 16px;\n  background: #f9fafb;\n  border-radius: 12px;\n  margin-bottom: 24px;\n}\n.payment-method[_ngcontent-%COMP%]   .payment-icon.link[_ngcontent-%COMP%] {\n  color: #1f2937;\n}\n.payment-method[_ngcontent-%COMP%]   .payment-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.payment-method[_ngcontent-%COMP%]   .payment-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #374151;\n}\n.payment-method[_ngcontent-%COMP%]   .payment-expiry[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6b7280;\n}\n.usage-dashboard[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.usage-period[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n  padding: 14px 16px;\n  background: rgba(43, 58, 240, 0.06);\n  border: 1px solid rgba(43, 58, 240, 0.12);\n  border-radius: 12px;\n}\n@media (max-width: 640px) {\n  .usage-period[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 6px;\n  }\n}\n.usage-period__title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  font-weight: 700;\n  color: #0f0f2d;\n}\n.usage-period__reset[_ngcontent-%COMP%] {\n  margin: 2px 0 0;\n  font-size: 13px;\n  font-weight: 600;\n  color: #2b3af0;\n}\n.usage-period__date[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 12px;\n  color: #6b7280;\n  text-align: right;\n}\n@media (max-width: 640px) {\n  .usage-period__date[_ngcontent-%COMP%] {\n    text-align: left;\n  }\n}\n.usage-gauges[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 16px;\n}\n@media (max-width: 640px) {\n  .usage-gauges[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.usage-bars[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  padding: 16px;\n  background: #ffffff;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n}\n.features-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 16px;\n  margin-bottom: 24px;\n}\n@media (max-width: 640px) {\n  .features-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.feature-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px;\n  background: #ffffff;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  transition: all 0.2s ease;\n}\n.feature-card[_ngcontent-%COMP%]:hover {\n  border-color: #d1d5db;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);\n}\n.feature-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.feature-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.feature-icon.email[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(43, 58, 240, 0.12) 0%,\n      rgba(79, 90, 246, 0.12) 100%);\n  color: #2b3af0;\n}\n.feature-icon.whitelabel[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(15, 15, 45, 0.08) 0%,\n      rgba(15, 15, 45, 0.12) 100%);\n  color: #0f0f2d;\n}\n.feature-icon.biometrics[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(43, 58, 240, 0.08) 0%,\n      rgba(43, 58, 240, 0.15) 100%);\n  color: #2b3af0;\n}\n.feature-icon.api[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(79, 90, 246, 0.08) 0%,\n      rgba(79, 90, 246, 0.15) 100%);\n  color: #4f5af6;\n}\n.feature-content[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.feature-content[_ngcontent-%COMP%]   .feature-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6b7280;\n}\n.feature-content[_ngcontent-%COMP%]   .feature-value[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 600;\n  color: #111827;\n}\n.feature-status[_ngcontent-%COMP%] {\n  font-size: 20px !important;\n  width: 20px !important;\n  height: 20px !important;\n  color: #d1d5db;\n}\n.feature-status.active[_ngcontent-%COMP%] {\n  color: #2b3af0;\n}\n.optional-section[_ngcontent-%COMP%] {\n  padding: 20px;\n  background: #f9fafb;\n  border-radius: 16px;\n  margin-bottom: 24px;\n}\n.optional-section[_ngcontent-%COMP%]   .optional-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #111827;\n  margin-bottom: 4px;\n}\n.optional-section[_ngcontent-%COMP%]   .optional-subtitle[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6b7280;\n  margin-bottom: 16px;\n}\n.optional-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 12px;\n}\n@media (max-width: 640px) {\n  .optional-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.optional-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 12px;\n  padding: 14px;\n  background: #ffffff;\n  border: 1px solid #e5e7eb;\n  border-radius: 10px;\n}\n.optional-icon[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.optional-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.optional-icon.sms[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(43, 58, 240, 0.08) 0%,\n      rgba(43, 58, 240, 0.15) 100%);\n  color: #2b3af0;\n}\n.optional-icon.whatsapp[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(79, 90, 246, 0.08) 0%,\n      rgba(79, 90, 246, 0.15) 100%);\n  color: #4f5af6;\n}\n.optional-content[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 100px;\n}\n.optional-content[_ngcontent-%COMP%]   .optional-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 13px;\n  font-weight: 500;\n  color: #374151;\n}\n.optional-content[_ngcontent-%COMP%]   .optional-value[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11px;\n  color: #9ca3af;\n}\n.optional-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 12px;\n  font-weight: 500;\n  color: #2b3af0;\n  text-decoration: none;\n  transition: color 0.2s ease;\n}\n.optional-link[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.optional-link[_ngcontent-%COMP%]:hover {\n  color: #0f0f2d;\n}\n.card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.action-button[_ngcontent-%COMP%] {\n  border-radius: 50px;\n  padding: 12px 32px;\n  font-weight: 500;\n  font-size: 15px;\n  transition: all 0.2s ease;\n}\n.action-button.primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #2b3af0 0%,\n      #0f0f2d 100%);\n  color: white;\n  box-shadow: 0 4px 14px rgba(43, 58, 240, 0.3);\n}\n.action-button.primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(43, 58, 240, 0.4);\n}\n.action-button.primary.error[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ef4444 0%,\n      #dc2626 100%);\n  box-shadow: 0 4px 14px rgba(239, 68, 68, 0.3);\n}\n.action-button.secondary[_ngcontent-%COMP%] {\n  border-color: #2b3af0;\n  color: #2b3af0;\n}\n.action-button.secondary[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  transition: transform 0.2s ease;\n}\n.action-button.secondary[_ngcontent-%COMP%]:hover {\n  background: rgba(43, 58, 240, 0.06);\n}\n.action-button.secondary[_ngcontent-%COMP%]:hover   mat-icon[_ngcontent-%COMP%] {\n  transform: translateX(4px);\n}\n.upgrade-section[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #0f0f2d 0%,\n      #1a1a4a 50%,\n      #0f0f2d 100%);\n  border-radius: 24px;\n  overflow: hidden;\n  position: relative;\n}\n.upgrade-section[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background-image:\n    radial-gradient(\n      circle at 1px 1px,\n      rgba(255, 255, 255, 0.03) 1px,\n      transparent 0);\n  background-size: 24px 24px;\n  pointer-events: none;\n}\n.upgrade-section[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: -50%;\n  right: -20%;\n  width: 60%;\n  height: 200%;\n  background:\n    radial-gradient(\n      ellipse,\n      rgba(43, 58, 240, 0.15) 0%,\n      transparent 70%);\n  pointer-events: none;\n}\n.upgrade-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  padding: 32px 32px 24px;\n  position: relative;\n  z-index: 1;\n}\n@media (max-width: 640px) {\n  .upgrade-header[_ngcontent-%COMP%] {\n    padding: 24px 20px 16px;\n  }\n}\n.upgrade-header-content[_ngcontent-%COMP%] {\n  flex: 1;\n  max-width: 480px;\n}\n.upgrade-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 12px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(43, 58, 240, 0.2) 0%,\n      rgba(79, 90, 246, 0.2) 100%);\n  border: 1px solid rgba(43, 58, 240, 0.3);\n  border-radius: 20px;\n  margin-bottom: 16px;\n}\n.upgrade-badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n  color: white;\n}\n.upgrade-badge[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: white;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.upgrade-headline[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  color: #ffffff;\n  margin-bottom: 8px;\n  line-height: 1.2;\n}\n@media (max-width: 640px) {\n  .upgrade-headline[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n}\n.upgrade-subheadline[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #94a3b8;\n  line-height: 1.5;\n  margin: 0;\n}\n.upgrade-illustration[_ngcontent-%COMP%] {\n  position: relative;\n  width: 120px;\n  height: 100px;\n  flex-shrink: 0;\n}\n@media (max-width: 768px) {\n  .upgrade-illustration[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.floating-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 12px;\n  animation: _ngcontent-%COMP%_float 3s ease-in-out infinite;\n}\n.floating-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.floating-icon.icon-1[_ngcontent-%COMP%] {\n  top: 0;\n  left: 20px;\n  width: 44px;\n  height: 44px;\n  background:\n    linear-gradient(\n      135deg,\n      #2b3af0 0%,\n      #0f0f2d 100%);\n  box-shadow: 0 8px 24px rgba(43, 58, 240, 0.4);\n}\n.floating-icon.icon-1[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: white;\n}\n.floating-icon.icon-2[_ngcontent-%COMP%] {\n  top: 30px;\n  right: 0;\n  width: 40px;\n  height: 40px;\n  background:\n    linear-gradient(\n      135deg,\n      #4f5af6 0%,\n      #2b3af0 100%);\n  box-shadow: 0 8px 24px rgba(79, 90, 246, 0.4);\n  animation-delay: 0.5s;\n}\n.floating-icon.icon-2[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: white;\n}\n.floating-icon.icon-3[_ngcontent-%COMP%] {\n  bottom: 0;\n  left: 40px;\n  width: 36px;\n  height: 36px;\n  background:\n    linear-gradient(\n      135deg,\n      #0f0f2d 0%,\n      #1a1a4a 100%);\n  box-shadow: 0 8px 24px rgba(15, 15, 45, 0.4);\n  animation-delay: 1s;\n}\n.floating-icon.icon-3[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n@keyframes _ngcontent-%COMP%_float {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-8px);\n  }\n}\n.upgrade-benefits[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n  padding: 0 32px 24px;\n  position: relative;\n  z-index: 1;\n}\n@media (max-width: 768px) {\n  .upgrade-benefits[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 12px;\n    padding: 0 20px 20px;\n  }\n}\n.benefit-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 16px;\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  border-radius: 12px;\n  transition: all 0.2s ease;\n}\n.benefit-item[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.05);\n  border-color: rgba(255, 255, 255, 0.1);\n}\n.benefit-icon[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  background: rgba(43, 58, 240, 0.15);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.benefit-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: #4f5af6;\n}\n.benefit-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.benefit-text[_ngcontent-%COMP%]   .benefit-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #ffffff;\n}\n.benefit-text[_ngcontent-%COMP%]   .benefit-desc[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #64748b;\n  line-height: 1.4;\n}\n.upgrade-cta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 24px 32px 32px;\n  position: relative;\n  z-index: 1;\n}\n@media (max-width: 640px) {\n  .upgrade-cta[_ngcontent-%COMP%] {\n    flex-direction: column;\n    padding: 20px;\n    gap: 12px;\n  }\n}\n.upgrade-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 14px 28px !important;\n  background:\n    linear-gradient(\n      135deg,\n      #2b3af0 0%,\n      #0f0f2d 100%) !important;\n  border: none !important;\n  border-radius: 50px !important;\n  font-size: 15px !important;\n  font-weight: 600 !important;\n  color: white !important;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  box-shadow: 0 4px 16px rgba(43, 58, 240, 0.4);\n}\n.upgrade-button[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(43, 58, 240, 0.5);\n}\n.upgrade-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  transition: transform 0.2s ease;\n}\n.upgrade-button[_ngcontent-%COMP%]:hover   mat-icon[_ngcontent-%COMP%] {\n  transform: translateX(4px);\n}\n@media (max-width: 640px) {\n  .upgrade-button[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n}\n.upgrade-hint[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #64748b;\n}\n@media (max-width: 640px) {\n  .upgrade-hint[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n.plans-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 24px;\n  margin-bottom: 24px;\n}\n@media (max-width: 1024px) {\n  .plans-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 640px) {\n  .plans-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.select-plan-card[_ngcontent-%COMP%] {\n  position: relative;\n  background: #ffffff;\n  border: 1px solid #e5e7eb;\n  border-radius: 20px;\n  padding: 24px;\n  transition: all 0.3s ease;\n  display: flex;\n  flex-direction: column;\n}\n.select-plan-card[_ngcontent-%COMP%]:hover {\n  border-color: #d1d5db;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);\n  transform: translateY(-4px);\n}\n.select-plan-card.featured[_ngcontent-%COMP%] {\n  border: 2px solid #2b3af0;\n  box-shadow: 0 8px 32px rgba(43, 58, 240, 0.15);\n}\n.select-plan-card.featured[_ngcontent-%COMP%]   .featured-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -12px;\n  left: 50%;\n  transform: translateX(-50%);\n  background:\n    linear-gradient(\n      135deg,\n      #2b3af0 0%,\n      #0f0f2d 100%);\n  color: white;\n  font-size: 11px;\n  font-weight: 600;\n  padding: 4px 12px;\n  border-radius: 20px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.select-plan-card--current[_ngcontent-%COMP%] {\n  border: 2px solid #059669;\n  box-shadow: 0 8px 28px rgba(5, 150, 105, 0.14);\n}\n.select-plan-card--current.featured[_ngcontent-%COMP%] {\n  border: 2px solid #059669;\n  box-shadow: 0 8px 28px rgba(5, 150, 105, 0.18);\n}\n.current-plan-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -12px;\n  left: 16px;\n  z-index: 2;\n  background:\n    linear-gradient(\n      135deg,\n      #059669 0%,\n      #047857 100%);\n  color: white;\n  font-size: 11px;\n  font-weight: 600;\n  padding: 4px 12px;\n  border-radius: 20px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  box-shadow: 0 2px 8px rgba(5, 150, 105, 0.35);\n}\n.current-plan-badge--offset[_ngcontent-%COMP%] {\n  top: 22px;\n  left: 12px;\n}\n.plan-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 6px 14px;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 600;\n  margin-bottom: 16px;\n  width: fit-content;\n}\n.plan-badge.free[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f3f4f6 0%,\n      #e5e7eb 100%);\n  color: #6b7280;\n}\n.plan-badge.plus[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(43, 58, 240, 0.08) 0%,\n      rgba(43, 58, 240, 0.15) 100%);\n  color: #2b3af0;\n}\n.plan-badge.business[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(15, 15, 45, 0.08) 0%,\n      rgba(15, 15, 45, 0.15) 100%);\n  color: #0f0f2d;\n}\n.plan-badge.enterprise[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #1f2937 0%,\n      #374151 100%);\n  color: white;\n}\n.plan-pricing[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.plan-pricing[_ngcontent-%COMP%]   .plan-price[_ngcontent-%COMP%] {\n  font-size: 36px;\n  font-weight: 700;\n  color: #111827;\n}\n.plan-pricing[_ngcontent-%COMP%]   .plan-price.custom[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.plan-pricing[_ngcontent-%COMP%]   .plan-period[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #6b7280;\n  font-weight: 400;\n}\n.plan-range[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6b7280;\n  margin-bottom: 20px;\n}\n.plan-features[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  padding: 16px 0;\n  border-top: 1px solid #e5e7eb;\n  border-bottom: 1px solid #e5e7eb;\n  margin-bottom: 20px;\n}\n@media (max-width: 480px) {\n  .plan-features[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 12px;\n  }\n}\n.plan-stat[_ngcontent-%COMP%] {\n  flex: 1;\n  text-align: center;\n}\n.plan-stat[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11px;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 4px;\n}\n.plan-stat[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  font-weight: 600;\n  color: #374151;\n}\n.plan-includes[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-bottom: 20px;\n}\n.plan-includes[_ngcontent-%COMP%]   .includes-title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #374151;\n  margin-bottom: 12px;\n}\n.plan-includes[_ngcontent-%COMP%]   .includes-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.plan-includes[_ngcontent-%COMP%]   .includes-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  color: #6b7280;\n  padding: 6px 0;\n}\n.plan-includes[_ngcontent-%COMP%]   .includes-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n  color: #2b3af0;\n}\n.select-button[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 50px;\n  padding: 14px;\n  font-weight: 600;\n  font-size: 14px;\n  transition: all 0.2s ease;\n  margin-top: auto;\n}\n.select-button.free[_ngcontent-%COMP%] {\n  border-color: #6b7280;\n  color: #6b7280;\n}\n.select-button.free[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n.select-button.free[_ngcontent-%COMP%]:hover {\n  background: rgba(107, 114, 128, 0.05);\n}\n.select-button.plus[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #2b3af0 0%,\n      #4f5af6 100%);\n  color: white;\n}\n.select-button.plus[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 14px rgba(43, 58, 240, 0.4);\n  transform: translateY(-2px);\n}\n.select-button.business[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #0f0f2d 0%,\n      #1a1a4a 100%);\n  color: white;\n}\n.select-button.business[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 14px rgba(15, 15, 45, 0.4);\n  transform: translateY(-2px);\n}\n.select-button.enterprise[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #1f2937 0%,\n      #111827 100%);\n  color: white;\n}\n.select-button.enterprise[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 14px rgba(31, 41, 55, 0.4);\n  transform: translateY(-2px);\n}\n.free-plan-card[_ngcontent-%COMP%] {\n  border: 1px solid rgba(107, 114, 128, 0.2);\n  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);\n}\n.free-plan-card[_ngcontent-%COMP%]:hover {\n  border-color: rgba(107, 114, 128, 0.35);\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);\n}\n.free-plan-card[_ngcontent-%COMP%]   .plan-badge.free[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f3f4f6 0%,\n      #e5e7eb 100%);\n  color: #6b7280;\n}\n.free-plan-card[_ngcontent-%COMP%]   .plan-price[_ngcontent-%COMP%] {\n  color: #0f0f2d;\n}\n.free-plan-card[_ngcontent-%COMP%]   .plan-period[_ngcontent-%COMP%] {\n  color: #6b7280;\n}\n.free-plan-card[_ngcontent-%COMP%]   .plan-range[_ngcontent-%COMP%] {\n  color: #6b7280;\n}\n.free-plan-desc[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6b7280;\n  line-height: 1.5;\n  margin: 0 0 20px;\n}\n.free-plan-desc[_ngcontent-%COMP%]     .font-semibold, \n.free-plan-desc[_ngcontent-%COMP%]     b {\n  color: #2b3af0;\n  font-weight: 600;\n}\n.free-plan-desc[_ngcontent-%COMP%]     .text-verifik-vivid-blue {\n  color: #2b3af0 !important;\n}\n.slider-section[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.slider-section[_ngcontent-%COMP%]   .slider-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: #111827;\n  text-align: center;\n  margin-bottom: 32px;\n}\n.selected-plan-card[_ngcontent-%COMP%] {\n  display: flex;\n  background: #ffffff;\n  border: 1px solid #e5e7eb;\n  border-radius: 20px;\n  overflow: hidden;\n  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);\n}\n@media (max-width: 768px) {\n  .selected-plan-card[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.selected-plan-left[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1;\n  padding: 32px;\n  display: flex;\n  flex-direction: column;\n}\n.selected-plan-left[_ngcontent-%COMP%]   .close-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 16px;\n  left: 16px;\n  color: #6b7280;\n}\n.selected-plan-left[_ngcontent-%COMP%]   .close-button[_ngcontent-%COMP%]:hover {\n  background: rgba(107, 114, 128, 0.1);\n}\n.selected-pricing[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 24px 0;\n}\n.selected-pricing[_ngcontent-%COMP%]   .pricing-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6b7280;\n  margin-bottom: 8px;\n}\n.selected-pricing[_ngcontent-%COMP%]   .pricing-amount[_ngcontent-%COMP%] {\n  font-size: 36px;\n  font-weight: 700;\n  color: #0f0f2d;\n}\n.selected-pricing[_ngcontent-%COMP%]   .pricing-amount[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 400;\n  color: #6b7280;\n}\n.selected-pricing[_ngcontent-%COMP%]   .pricing-enrolls[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #2b3af0;\n  margin-top: 8px;\n}\n.selected-stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  padding: 16px;\n  background: #f9fafb;\n  border-radius: 12px;\n  margin-bottom: 24px;\n}\n.selected-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%] {\n  flex: 1;\n  text-align: center;\n}\n.selected-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11px;\n  color: #9ca3af;\n  text-transform: uppercase;\n  margin-bottom: 4px;\n}\n.selected-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  font-weight: 600;\n  color: #374151;\n}\n.selected-includes[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.selected-includes[_ngcontent-%COMP%]   .includes-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #374151;\n  margin-bottom: 12px;\n}\n.selected-includes[_ngcontent-%COMP%]   .includes-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.selected-includes[_ngcontent-%COMP%]   .includes-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 14px;\n  color: #6b7280;\n  padding: 8px 0;\n}\n.selected-includes[_ngcontent-%COMP%]   .includes-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: #2b3af0;\n}\n.purchase-button[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 50px;\n  padding: 16px;\n  font-weight: 600;\n  font-size: 15px;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease;\n  margin-top: auto;\n}\n.purchase-button.free[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #6b7280 0%,\n      #4b5563 100%);\n}\n.purchase-button.plus[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #2b3af0 0%,\n      #4f5af6 100%);\n}\n.purchase-button.business[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #0f0f2d 0%,\n      #1a1a4a 100%);\n}\n.purchase-button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(43, 58, 240, 0.25);\n}\n.purchase-button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.purchase-button[_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n.selected-plan-right[_ngcontent-%COMP%] {\n  flex: 1.2;\n  border-left: 1px solid #e5e7eb;\n  display: flex;\n  flex-direction: column;\n}\n@media (max-width: 768px) {\n  .selected-plan-right[_ngcontent-%COMP%] {\n    border-left: none;\n    border-top: 1px solid #e5e7eb;\n  }\n}\n.plan-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 160px;\n  object-fit: cover;\n  background:\n    linear-gradient(\n      135deg,\n      #2b3af0 0%,\n      #0f0f2d 100%);\n}\n.plan-description[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.plan-description[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: #111827;\n  margin-bottom: 12px;\n}\n.plan-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6b7280;\n  line-height: 1.6;\n}\n.features-table[_ngcontent-%COMP%] {\n  padding: 0 24px;\n  flex: 1;\n}\n.features-table[_ngcontent-%COMP%]   .table-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 12px 16px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(43, 58, 240, 0.08) 0%,\n      rgba(43, 58, 240, 0.12) 100%);\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 600;\n  color: #2b3af0;\n  margin-bottom: 8px;\n}\n.features-table[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 12px 16px;\n  border-bottom: 1px solid #f3f4f6;\n  font-size: 14px;\n}\n.features-table[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  color: #374151;\n}\n.features-table[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   .table-value[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #2b3af0;\n}\n.plan-footer[_ngcontent-%COMP%] {\n  padding: 24px;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n}\n.plan-footer[_ngcontent-%COMP%]   .pricing-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 20px;\n  background: #2b3af0;\n  color: white;\n  border-radius: 50px;\n  font-size: 13px;\n  font-weight: 500;\n  text-decoration: none;\n  transition: all 0.2s ease;\n}\n.plan-footer[_ngcontent-%COMP%]   .pricing-link[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.plan-footer[_ngcontent-%COMP%]   .pricing-link[_ngcontent-%COMP%]:hover {\n  background: #0f0f2d;\n}\n.plan-footer[_ngcontent-%COMP%]   .terms-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.plan-footer[_ngcontent-%COMP%]   .terms-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #6b7280;\n  text-decoration: none;\n}\n.plan-footer[_ngcontent-%COMP%]   .terms-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.range-slider[_ngcontent-%COMP%] {\n  position: relative;\n  height: 30px;\n  margin: 40px 0;\n}\n.range-slider[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 9px;\n  left: 0;\n  height: 12px;\n  width: var(--track-fill-percentage, 0%);\n  background:\n    linear-gradient(\n      90deg,\n      #2b3af0 0%,\n      #4f5af6 100%);\n  border-radius: 6px;\n  transition: width 0.1s ease;\n  z-index: 0;\n}\n.range-slider__dots[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  left: 0;\n  position: absolute;\n  top: 10px;\n  width: 100%;\n  z-index: -1;\n  padding: 0 15px;\n}\n.range-slider__dot[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: #2b3af0;\n  border-radius: 50%;\n  display: block;\n  height: 10px;\n  width: 10px;\n}\n.range-slider__value[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -36px;\n  left: 50%;\n  transform: translateX(-50%);\n  height: 20px;\n  white-space: nowrap;\n  font-size: 12px;\n  font-weight: 500;\n  color: #6b7280;\n}\n.range-slider__input[_ngcontent-%COMP%] {\n  appearance: none;\n  background-color: transparent;\n  height: 30px;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n}\n.range-slider__input[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.range-slider__input[_ngcontent-%COMP%]::-webkit-slider-runnable-track {\n  background-color: #e5e7eb;\n  cursor: pointer;\n  height: 12px;\n  width: 100%;\n  border-radius: 6px;\n}\n.range-slider__input[_ngcontent-%COMP%]::-webkit-slider-thumb {\n  appearance: none;\n  background: #2b3af0;\n  border-radius: 50%;\n  border: 2px solid white;\n  box-shadow: 0 0 0 4px white, 0 2px 8px rgba(0, 0, 0, 0.15);\n  cursor: pointer;\n  height: 30px;\n  margin-top: -9px;\n  width: 30px;\n  z-index: 2;\n  position: relative;\n  transition: transform 0.1s ease;\n}\n.range-slider__input[_ngcontent-%COMP%]::-webkit-slider-thumb:hover {\n  transform: scale(1.1);\n}\n.range-slider__input[_ngcontent-%COMP%]::-moz-range-track {\n  width: 100%;\n  height: 12px;\n  cursor: pointer;\n  border-radius: 6px;\n  background-color: #e5e7eb;\n}\n.range-slider__input[_ngcontent-%COMP%]::-moz-range-thumb {\n  appearance: none;\n  background: #2b3af0;\n  border-radius: 50%;\n  border: 2px solid white;\n  box-shadow: 0 0 0 4px white, 0 2px 8px rgba(0, 0, 0, 0.15);\n  cursor: pointer;\n  height: 30px;\n  width: 30px;\n}\n.landing-slider-section[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(43, 58, 240, 0.04) 0%,\n      rgba(79, 90, 246, 0.06) 100%);\n  border: 1px solid rgba(43, 58, 240, 0.12);\n  border-radius: 20px;\n  padding: 32px;\n  margin-bottom: 24px;\n  text-align: center;\n}\n@media (max-width: 640px) {\n  .landing-slider-section[_ngcontent-%COMP%] {\n    padding: 24px 16px;\n  }\n}\n.landing-slider-title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: #0f0f2d;\n  margin: 0 0 8px;\n}\n.landing-slider-subtitle[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6b7280;\n  margin: 0 0 28px;\n}\n.landing-slider-track[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 20px;\n}\n.landing-slider-track[_ngcontent-%COMP%]   .track-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #6b7280;\n  white-space: nowrap;\n  min-width: 50px;\n}\n.landing-slider-track[_ngcontent-%COMP%]   .track-label[_ngcontent-%COMP%]:first-child {\n  text-align: right;\n}\n.landing-slider-track[_ngcontent-%COMP%]   .track-label[_ngcontent-%COMP%]:last-child {\n  text-align: left;\n}\n.landing-slider-track[_ngcontent-%COMP%]   .track-slider[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.landing-slider-track[_ngcontent-%COMP%]   .track-slider[_ngcontent-%COMP%]   .range-slider[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.landing-slider-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background:\n    linear-gradient(\n      135deg,\n      #2b3af0 0%,\n      #0f0f2d 100%);\n  color: white;\n  padding: 12px 24px;\n  border-radius: 50px;\n  font-size: 15px;\n  font-weight: 500;\n  box-shadow: 0 4px 16px rgba(43, 58, 240, 0.3);\n}\n.landing-slider-pill[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n}\n.volume-change-summary[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  max-width: 28rem;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 20px 20px 18px;\n  border-radius: 16px;\n  background: #ffffff;\n  border: 1px solid rgba(15, 15, 45, 0.08);\n  box-shadow:\n    0 0 0 1px rgba(255, 255, 255, 0.8) inset,\n    0 1px 2px rgba(15, 15, 45, 0.04),\n    0 8px 24px rgba(15, 15, 45, 0.06);\n}\n.volume-change-summary__head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  margin-bottom: 18px;\n  text-align: left;\n}\n.volume-change-summary__head-icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 40px;\n  height: 40px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      145deg,\n      rgba(99, 102, 241, 0.12) 0%,\n      rgba(43, 58, 240, 0.08) 100%);\n  border: 1px solid rgba(99, 102, 241, 0.2);\n}\n.volume-change-summary__head-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n  width: 22px;\n  height: 22px;\n  color: #4338ca;\n}\n.volume-change-summary__head-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 0;\n}\n.volume-change-summary__eyebrow[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  color: #6b7280;\n}\n.volume-change-summary__title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 600;\n  color: #111827;\n  letter-spacing: -0.01em;\n  line-height: 1.35;\n}\n.volume-change-summary__compare[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr auto 1fr;\n  gap: 10px;\n  align-items: stretch;\n}\n.volume-change-summary__panel[_ngcontent-%COMP%] {\n  padding: 14px 12px;\n  border-radius: 12px;\n  background: #f9fafb;\n  border: 1px solid rgba(15, 15, 45, 0.06);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  gap: 4px;\n  transition:\n    border-color 0.2s ease,\n    box-shadow 0.2s ease,\n    background 0.2s ease;\n}\n.volume-change-summary__panel--from[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      #fafafa 0%,\n      #f3f4f6 100%);\n}\n.volume-change-summary__panel--to[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      #fafbff 0%,\n      #f5f5ff 100%);\n  border-color: rgba(67, 56, 202, 0.12);\n}\n.volume-change-summary__panel--highlight[_ngcontent-%COMP%] {\n  border-color: rgba(43, 58, 240, 0.35);\n  box-shadow: 0 0 0 3px rgba(43, 58, 240, 0.12);\n  background:\n    linear-gradient(\n      180deg,\n      #f8f9ff 0%,\n      #eef2ff 100%);\n}\n.volume-change-summary__panel-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: #6b7280;\n}\n.volume-change-summary__panel-value[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  font-variant-numeric: tabular-nums;\n  letter-spacing: -0.03em;\n  color: #0f0f2d;\n  line-height: 1.1;\n}\n.volume-change-summary__panel-unit[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #9ca3af;\n}\n.volume-change-summary__mid[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 44px;\n  align-self: center;\n}\n.volume-change-summary__mid-icon[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 999px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #ffffff;\n  border: 1px solid rgba(15, 15, 45, 0.1);\n  box-shadow: 0 2px 6px rgba(15, 15, 45, 0.06);\n}\n.volume-change-summary__mid-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: #4338ca;\n}\n.volume-change-summary__hint[_ngcontent-%COMP%] {\n  margin: 14px 0 0;\n  padding-top: 12px;\n  border-top: 1px solid rgba(15, 15, 45, 0.06);\n  font-size: 13px;\n  line-height: 1.45;\n  color: #6b7280;\n  text-align: center;\n}\n@media (max-width: 480px) {\n  .volume-change-summary__compare[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 12px;\n  }\n  .volume-change-summary__mid[_ngcontent-%COMP%] {\n    width: 100%;\n    min-width: 0;\n    padding: 4px 0;\n  }\n  .volume-change-summary__mid-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    transform: rotate(90deg);\n  }\n}\n.checkout-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 24px;\n  border: 1px solid rgba(43, 58, 240, 0.12);\n  overflow: hidden;\n  box-shadow: 0 8px 40px rgba(15, 15, 45, 0.08);\n}\n.checkout-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 24px 32px;\n  color: white;\n}\n.checkout-header.header-free[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #6b7280 0%,\n      #4b5563 100%);\n}\n.checkout-header.header-plus[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #2b3af0 0%,\n      #4f5af6 100%);\n}\n.checkout-header.header-business[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #0f0f2d 0%,\n      #1a1a4a 100%);\n}\n@media (max-width: 640px) {\n  .checkout-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 16px;\n    padding: 20px 24px;\n  }\n}\n.checkout-plan-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.checkout-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 16px;\n  border-radius: 50px;\n  font-size: 14px;\n  font-weight: 600;\n  width: fit-content;\n}\n.checkout-badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.checkout-badge.free[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2);\n  color: white;\n}\n.checkout-badge.plus[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2);\n  color: white;\n}\n.checkout-badge.business[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.15);\n  color: white;\n}\n.checkout-plan-type[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: rgba(255, 255, 255, 0.8);\n  padding-left: 4px;\n}\n.checkout-price[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 2px;\n}\n.checkout-price[_ngcontent-%COMP%]   .price-from[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.7);\n  margin-right: 8px;\n}\n.checkout-price[_ngcontent-%COMP%]   .price-currency[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 600;\n}\n.checkout-price[_ngcontent-%COMP%]   .price-value[_ngcontent-%COMP%] {\n  font-size: 42px;\n  font-weight: 700;\n  line-height: 1;\n}\n.checkout-price[_ngcontent-%COMP%]   .price-period[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: rgba(255, 255, 255, 0.8);\n  margin-left: 4px;\n}\n@media (max-width: 640px) {\n  .checkout-price[_ngcontent-%COMP%]   .price-value[_ngcontent-%COMP%] {\n    font-size: 32px;\n  }\n}\n.checkout-stats[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 24px 32px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(43, 58, 240, 0.04) 0%,\n      rgba(79, 90, 246, 0.06) 100%);\n  border-bottom: 1px solid rgba(43, 58, 240, 0.08);\n}\n@media (max-width: 768px) {\n  .checkout-stats[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    gap: 16px;\n    padding: 20px 24px;\n  }\n}\n.checkout-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  gap: 4px;\n  min-width: 80px;\n}\n.checkout-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  color: #2b3af0;\n  margin-bottom: 4px;\n}\n.checkout-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #0f0f2d;\n}\n.checkout-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6b7280;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n}\n.checkout-stats[_ngcontent-%COMP%]   .stat-divider[_ngcontent-%COMP%] {\n  width: 1px;\n  background: rgba(43, 58, 240, 0.15);\n  margin: 0 8px;\n}\n@media (max-width: 768px) {\n  .checkout-stats[_ngcontent-%COMP%]   .stat-divider[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.checkout-features[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 32px;\n  padding: 28px 32px;\n  border-bottom: 1px solid rgba(43, 58, 240, 0.08);\n}\n@media (max-width: 640px) {\n  .checkout-features[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 24px;\n    padding: 24px;\n  }\n}\n.features-column[_ngcontent-%COMP%]   .features-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 14px;\n  font-weight: 600;\n  margin: 0 0 16px;\n}\n.features-column[_ngcontent-%COMP%]   .features-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.features-column[_ngcontent-%COMP%]   .features-title.included-title[_ngcontent-%COMP%] {\n  color: #2b3af0;\n}\n.features-column[_ngcontent-%COMP%]   .features-title.included-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #2b3af0;\n}\n.features-column[_ngcontent-%COMP%]   .features-title.extra-title[_ngcontent-%COMP%] {\n  color: #0f0f2d;\n}\n.features-column[_ngcontent-%COMP%]   .features-title.extra-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #0f0f2d;\n}\n.features-column[_ngcontent-%COMP%]   .features-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.features-column[_ngcontent-%COMP%]   .features-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 0;\n  font-size: 14px;\n  color: #6b7280;\n  border-bottom: 1px solid rgba(107, 114, 128, 0.1);\n}\n.features-column[_ngcontent-%COMP%]   .features-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.features-column[_ngcontent-%COMP%]   .features-list.included[_ngcontent-%COMP%]   .feature-count[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #2b3af0;\n}\n.features-column[_ngcontent-%COMP%]   .features-list.included[_ngcontent-%COMP%]   .feature-check[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n  color: #2b3af0;\n}\n.features-column[_ngcontent-%COMP%]   .features-list.extra[_ngcontent-%COMP%]   .feature-price[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #0f0f2d;\n}\n.features-column[_ngcontent-%COMP%]   .features-list.extra[_ngcontent-%COMP%]   .extras-link[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #2b3af0;\n  text-decoration: none;\n  font-weight: 500;\n}\n.features-column[_ngcontent-%COMP%]   .features-list.extra[_ngcontent-%COMP%]   .extras-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.extra-bio-notice[_ngcontent-%COMP%] {\n  margin: 0 32px 24px;\n  border: 1px solid rgba(43, 58, 240, 0.15);\n  border-radius: 12px;\n  overflow: hidden;\n}\n@media (max-width: 640px) {\n  .extra-bio-notice[_ngcontent-%COMP%] {\n    margin: 0 24px 24px;\n  }\n}\n.extra-bio-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 14px 16px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(43, 58, 240, 0.06) 0%,\n      rgba(79, 90, 246, 0.08) 100%);\n  cursor: pointer;\n  transition: background 0.2s ease;\n}\n.extra-bio-header[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(43, 58, 240, 0.1) 0%,\n      rgba(79, 90, 246, 0.12) 100%);\n}\n.extra-bio-header[_ngcontent-%COMP%]   .extra-bio-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.extra-bio-header[_ngcontent-%COMP%]   .extra-bio-left[_ngcontent-%COMP%]   .info-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: #2b3af0;\n}\n.extra-bio-header[_ngcontent-%COMP%]   .extra-bio-left[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #0f0f2d;\n}\n.extra-bio-header[_ngcontent-%COMP%]   .expand-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  color: #6b7280;\n  transition: transform 0.3s ease;\n}\n.extra-bio-header[_ngcontent-%COMP%]   .expand-icon.expanded[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.extra-bio-body[_ngcontent-%COMP%] {\n  padding: 16px;\n  background: white;\n  animation: _ngcontent-%COMP%_slideDown 0.3s ease-out;\n}\n.extra-bio-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6b7280;\n  line-height: 1.6;\n  margin: 0 0 16px;\n}\n.extra-bio-body[_ngcontent-%COMP%]   .extra-bio-costs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.extra-bio-body[_ngcontent-%COMP%]   .extra-bio-costs[_ngcontent-%COMP%]   .bio-cost-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 14px;\n  background: rgba(43, 58, 240, 0.04);\n  border-radius: 8px;\n  font-size: 13px;\n}\n.extra-bio-body[_ngcontent-%COMP%]   .extra-bio-costs[_ngcontent-%COMP%]   .bio-cost-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #6b7280;\n}\n.extra-bio-body[_ngcontent-%COMP%]   .extra-bio-costs[_ngcontent-%COMP%]   .bio-cost-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #0f0f2d;\n  font-weight: 600;\n}\n@keyframes _ngcontent-%COMP%_slideDown {\n  from {\n    opacity: 0;\n    max-height: 0;\n  }\n  to {\n    opacity: 1;\n    max-height: 300px;\n  }\n}\n.checkout-actions[_ngcontent-%COMP%] {\n  padding: 24px 32px 32px;\n  text-align: center;\n}\n@media (max-width: 640px) {\n  .checkout-actions[_ngcontent-%COMP%] {\n    padding: 24px;\n  }\n}\n.checkout-button[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 400px;\n  border-radius: 50px !important;\n  padding: 16px 32px !important;\n  font-size: 16px !important;\n  font-weight: 600 !important;\n  color: white !important;\n  display: inline-flex !important;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  transition: all 0.2s ease;\n  border: none !important;\n}\n.checkout-button.free[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #6b7280 0%,\n      #4b5563 100%) !important;\n}\n.checkout-button.plus[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #2b3af0 0%,\n      #4f5af6 100%) !important;\n  box-shadow: 0 4px 20px rgba(43, 58, 240, 0.35);\n}\n.checkout-button.business[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #0f0f2d 0%,\n      #1a1a4a 100%) !important;\n  box-shadow: 0 4px 20px rgba(15, 15, 45, 0.35);\n}\n.checkout-button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 28px rgba(43, 58, 240, 0.4);\n}\n.checkout-button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.checkout-button[_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n.checkout-terms[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6b7280;\n  margin-top: 16px;\n}\n.checkout-terms[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #2b3af0;\n  text-decoration: none;\n  font-weight: 500;\n}\n.checkout-terms[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.5;\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.animate-fadeIn[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 0.4s ease-out forwards;\n  opacity: 0;\n}\n.dark[_nghost-%COMP%]   .plans-container[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .plans-container[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      #0b0b18 0%,\n      #0f0f1f 100%);\n}\n.dark[_nghost-%COMP%]   .current-plan-title[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .current-plan-title[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .current-plan-header[_ngcontent-%COMP%]   .current-plan-title[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .current-plan-header[_ngcontent-%COMP%]   .current-plan-title[_ngcontent-%COMP%] {\n  color: #f8fafc;\n}\n.dark[_nghost-%COMP%]   .current-plan-subtitle[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .current-plan-subtitle[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .current-plan-header[_ngcontent-%COMP%]   .current-plan-subtitle[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .current-plan-header[_ngcontent-%COMP%]   .current-plan-subtitle[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .text-gray-900[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .text-gray-900[_ngcontent-%COMP%] {\n  color: #f8fafc !important;\n}\n.dark[_nghost-%COMP%]   .text-gray-500[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .text-gray-500[_ngcontent-%COMP%] {\n  color: #94a3b8 !important;\n}\n.dark[_nghost-%COMP%]   .text-gray-400[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .text-gray-400[_ngcontent-%COMP%] {\n  color: rgba(148, 163, 184, 0.75) !important;\n}\n.dark[_nghost-%COMP%]   .plan-card[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .plan-card[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .select-plan-card[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .select-plan-card[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .checkout-card[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .checkout-card[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .volume-change-summary[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .volume-change-summary[_ngcontent-%COMP%] {\n  background: #11122a;\n  border-color: rgba(255, 255, 255, 0.08);\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4), 0 12px 32px rgba(0, 0, 0, 0.35);\n}\n.dark[_nghost-%COMP%]   .plan-card[_ngcontent-%COMP%]:hover, .dark   [_nghost-%COMP%]   .plan-card[_ngcontent-%COMP%]:hover, \n.dark[_nghost-%COMP%]   .select-plan-card[_ngcontent-%COMP%]:hover, .dark   [_nghost-%COMP%]   .select-plan-card[_ngcontent-%COMP%]:hover, \n.dark[_nghost-%COMP%]   .checkout-card[_ngcontent-%COMP%]:hover, .dark   [_nghost-%COMP%]   .checkout-card[_ngcontent-%COMP%]:hover, \n.dark[_nghost-%COMP%]   .volume-change-summary[_ngcontent-%COMP%]:hover, .dark   [_nghost-%COMP%]   .volume-change-summary[_ngcontent-%COMP%]:hover {\n  border-color: rgba(43, 58, 240, 0.35);\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.45), 0 16px 40px rgba(0, 0, 0, 0.45);\n}\n.dark[_nghost-%COMP%]   .plan-card.payment-failed[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .plan-card.payment-failed[_ngcontent-%COMP%] {\n  border-color: rgba(248, 113, 113, 0.45);\n}\n.dark[_nghost-%COMP%]   .select-plan-card.featured[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .select-plan-card.featured[_ngcontent-%COMP%] {\n  border-color: #2b3af0;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4), 0 12px 28px rgba(43, 58, 240, 0.25);\n}\n.dark[_nghost-%COMP%]   .select-plan-card.featured[_ngcontent-%COMP%]:hover, .dark   [_nghost-%COMP%]   .select-plan-card.featured[_ngcontent-%COMP%]:hover {\n  border-color: #4f5af6;\n}\n.dark[_nghost-%COMP%]   .select-plan-card--current[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .select-plan-card--current[_ngcontent-%COMP%] {\n  border-color: #34d399;\n  box-shadow: 0 8px 28px rgba(52, 211, 153, 0.2);\n}\n.dark[_nghost-%COMP%]   .select-plan-card--current.featured[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .select-plan-card--current.featured[_ngcontent-%COMP%] {\n  border-color: #34d399;\n  box-shadow: 0 8px 28px rgba(52, 211, 153, 0.22);\n}\n.dark[_nghost-%COMP%]   .free-plan-card[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .free-plan-card[_ngcontent-%COMP%] {\n  border-color: rgba(255, 255, 255, 0.08);\n  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.35);\n}\n.dark[_nghost-%COMP%]   .free-plan-card[_ngcontent-%COMP%]:hover, .dark   [_nghost-%COMP%]   .free-plan-card[_ngcontent-%COMP%]:hover {\n  border-color: rgba(148, 163, 184, 0.25);\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);\n}\n.dark[_nghost-%COMP%]   .free-plan-card[_ngcontent-%COMP%]   .plan-badge.free[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .free-plan-card[_ngcontent-%COMP%]   .plan-badge.free[_ngcontent-%COMP%] {\n  background: rgba(148, 163, 184, 0.16);\n  color: #cbd5e1;\n}\n.dark[_nghost-%COMP%]   .free-plan-card[_ngcontent-%COMP%]   .plan-price[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .free-plan-card[_ngcontent-%COMP%]   .plan-price[_ngcontent-%COMP%] {\n  color: #f8fafc;\n}\n.dark[_nghost-%COMP%]   .free-plan-card[_ngcontent-%COMP%]   .plan-period[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .free-plan-card[_ngcontent-%COMP%]   .plan-period[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .free-plan-card[_ngcontent-%COMP%]   .plan-range[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .free-plan-card[_ngcontent-%COMP%]   .plan-range[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .card-header[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.04) 0%,\n      rgba(255, 255, 255, 0.02) 100%);\n  border-bottom-color: rgba(255, 255, 255, 0.08);\n}\n.dark[_nghost-%COMP%]   .card-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .card-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #f8fafc !important;\n}\n.dark[_nghost-%COMP%]   .price-section[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .price-section[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .payment-method[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .payment-method[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .optional-section[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .optional-section[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .selected-stats[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .selected-stats[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.04);\n}\n.dark[_nghost-%COMP%]   .price-section[_ngcontent-%COMP%]   .price-label[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .price-section[_ngcontent-%COMP%]   .price-label[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .price-section[_ngcontent-%COMP%]   .price-period[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .price-section[_ngcontent-%COMP%]   .price-period[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .price-section[_ngcontent-%COMP%]   .price-amount[_ngcontent-%COMP%]   .price-currency[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .price-section[_ngcontent-%COMP%]   .price-amount[_ngcontent-%COMP%]   .price-currency[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .price-section[_ngcontent-%COMP%]   .price-amount[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .price-section[_ngcontent-%COMP%]   .price-amount[_ngcontent-%COMP%] {\n  color: #f8fafc;\n}\n.dark[_nghost-%COMP%]   .payment-method[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .payment-method[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.04);\n}\n.dark[_nghost-%COMP%]   .payment-method[_ngcontent-%COMP%]   .payment-icon.link[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .payment-method[_ngcontent-%COMP%]   .payment-icon.link[_ngcontent-%COMP%] {\n  color: #cbd5f5;\n}\n.dark[_nghost-%COMP%]   .payment-method[_ngcontent-%COMP%]   .payment-text[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .payment-method[_ngcontent-%COMP%]   .payment-text[_ngcontent-%COMP%] {\n  color: #cbd5f5;\n}\n.dark[_nghost-%COMP%]   .payment-method[_ngcontent-%COMP%]   .payment-expiry[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .payment-method[_ngcontent-%COMP%]   .payment-expiry[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .feature-card[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .feature-card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.04);\n  border-color: rgba(255, 255, 255, 0.08);\n}\n.dark[_nghost-%COMP%]   .feature-card[_ngcontent-%COMP%]:hover, .dark   [_nghost-%COMP%]   .feature-card[_ngcontent-%COMP%]:hover {\n  border-color: rgba(43, 58, 240, 0.25);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.35);\n}\n.dark[_nghost-%COMP%]   .feature-content[_ngcontent-%COMP%]   .feature-label[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .feature-content[_ngcontent-%COMP%]   .feature-label[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .feature-content[_ngcontent-%COMP%]   .feature-value[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .feature-content[_ngcontent-%COMP%]   .feature-value[_ngcontent-%COMP%] {\n  color: #f8fafc;\n}\n.dark[_nghost-%COMP%]   .feature-icon.whitelabel[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .feature-icon.whitelabel[_ngcontent-%COMP%] {\n  color: #cbd5f5;\n}\n.dark[_nghost-%COMP%]   .feature-status[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .feature-status[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.18);\n}\n.dark[_nghost-%COMP%]   .feature-status.active[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .feature-status.active[_ngcontent-%COMP%] {\n  color: #4f5af6;\n}\n.dark[_nghost-%COMP%]   .optional-section[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .optional-section[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.04);\n}\n.dark[_nghost-%COMP%]   .optional-section[_ngcontent-%COMP%]   .optional-title[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .optional-section[_ngcontent-%COMP%]   .optional-title[_ngcontent-%COMP%] {\n  color: #f8fafc;\n}\n.dark[_nghost-%COMP%]   .optional-section[_ngcontent-%COMP%]   .optional-subtitle[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .optional-section[_ngcontent-%COMP%]   .optional-subtitle[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .optional-card[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .optional-card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.03);\n  border-color: rgba(255, 255, 255, 0.08);\n}\n.dark[_nghost-%COMP%]   .optional-card[_ngcontent-%COMP%]   .optional-label[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .optional-card[_ngcontent-%COMP%]   .optional-label[_ngcontent-%COMP%] {\n  color: #cbd5f5;\n}\n.dark[_nghost-%COMP%]   .optional-card[_ngcontent-%COMP%]   .optional-value[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .optional-card[_ngcontent-%COMP%]   .optional-value[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .optional-card[_ngcontent-%COMP%]   .optional-link[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .optional-card[_ngcontent-%COMP%]   .optional-link[_ngcontent-%COMP%] {\n  color: #4f5af6;\n}\n.dark[_nghost-%COMP%]   .optional-card[_ngcontent-%COMP%]   .optional-link[_ngcontent-%COMP%]:hover, .dark   [_nghost-%COMP%]   .optional-card[_ngcontent-%COMP%]   .optional-link[_ngcontent-%COMP%]:hover {\n  color: white;\n}\n.dark[_nghost-%COMP%]   .status-badge.success[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .status-badge.success[_ngcontent-%COMP%] {\n  background: rgba(43, 58, 240, 0.18);\n  color: #4f5af6;\n}\n.dark[_nghost-%COMP%]   .status-badge.warning[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .status-badge.warning[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.18);\n  color: #fbbf24;\n}\n.dark[_nghost-%COMP%]   .status-badge.error[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .status-badge.error[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.18);\n  color: #f87171;\n}\n.dark[_nghost-%COMP%]   .payment-alert[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .payment-alert[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(127, 29, 29, 0.35) 0%,\n      rgba(127, 29, 29, 0.25) 100%);\n  border-bottom-color: rgba(248, 113, 113, 0.35);\n  color: #fca5a5;\n}\n.dark[_nghost-%COMP%]   .payment-alert[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .payment-alert[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #f87171;\n}\n.dark[_nghost-%COMP%]   .plan-pricing[_ngcontent-%COMP%]   .plan-price[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .plan-pricing[_ngcontent-%COMP%]   .plan-price[_ngcontent-%COMP%] {\n  color: #f8fafc;\n}\n.dark[_nghost-%COMP%]   .plan-pricing[_ngcontent-%COMP%]   .plan-price.custom[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .plan-pricing[_ngcontent-%COMP%]   .plan-price.custom[_ngcontent-%COMP%] {\n  color: #f8fafc;\n}\n.dark[_nghost-%COMP%]   .plan-pricing[_ngcontent-%COMP%]   .plan-period[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .plan-pricing[_ngcontent-%COMP%]   .plan-period[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .plan-range[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .plan-range[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .free-plan-desc[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .free-plan-desc[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .plan-range[_ngcontent-%COMP%]     .font-semibold, .dark   [_nghost-%COMP%]   .plan-range[_ngcontent-%COMP%]     .font-semibold, \n.dark[_nghost-%COMP%]   .plan-range[_ngcontent-%COMP%]     b, .dark   [_nghost-%COMP%]   .plan-range[_ngcontent-%COMP%]     b, \n.dark[_nghost-%COMP%]   .free-plan-desc[_ngcontent-%COMP%]     .font-semibold, .dark   [_nghost-%COMP%]   .free-plan-desc[_ngcontent-%COMP%]     .font-semibold, \n.dark[_nghost-%COMP%]   .free-plan-desc[_ngcontent-%COMP%]     b, .dark   [_nghost-%COMP%]   .free-plan-desc[_ngcontent-%COMP%]     b {\n  color: #4f5af6;\n}\n.dark[_nghost-%COMP%]   .plan-range[_ngcontent-%COMP%]     .text-verifik-vivid-blue, .dark   [_nghost-%COMP%]   .plan-range[_ngcontent-%COMP%]     .text-verifik-vivid-blue, \n.dark[_nghost-%COMP%]   .free-plan-desc[_ngcontent-%COMP%]     .text-verifik-vivid-blue, .dark   [_nghost-%COMP%]   .free-plan-desc[_ngcontent-%COMP%]     .text-verifik-vivid-blue {\n  color: #4f5af6 !important;\n}\n.dark[_nghost-%COMP%]   .plan-features[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .plan-features[_ngcontent-%COMP%] {\n  border-top-color: rgba(255, 255, 255, 0.06);\n  border-bottom-color: rgba(255, 255, 255, 0.06);\n}\n.dark[_nghost-%COMP%]   .plan-stat[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .plan-stat[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .plan-stat[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .plan-stat[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  color: #f8fafc;\n}\n.dark[_nghost-%COMP%]   .plan-includes[_ngcontent-%COMP%]   .includes-title[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .plan-includes[_ngcontent-%COMP%]   .includes-title[_ngcontent-%COMP%] {\n  color: #f8fafc;\n}\n.dark[_nghost-%COMP%]   .plan-includes[_ngcontent-%COMP%]   .includes-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .plan-includes[_ngcontent-%COMP%]   .includes-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  color: #cbd5f5;\n}\n.dark[_nghost-%COMP%]   .plan-includes[_ngcontent-%COMP%]   .includes-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .plan-includes[_ngcontent-%COMP%]   .includes-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #4f5af6;\n}\n.dark[_nghost-%COMP%]   .plan-badge.free[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .plan-badge.free[_ngcontent-%COMP%] {\n  background: rgba(148, 163, 184, 0.16);\n  color: #cbd5e1;\n}\n.dark[_nghost-%COMP%]   .plan-badge.plus[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .plan-badge.plus[_ngcontent-%COMP%] {\n  background: rgba(79, 90, 246, 0.22);\n  color: #4f5af6;\n}\n.dark[_nghost-%COMP%]   .plan-badge.business[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .plan-badge.business[_ngcontent-%COMP%] {\n  background: rgba(79, 90, 246, 0.22);\n  color: white;\n}\n.dark[_nghost-%COMP%]   .plan-badge.enterprise[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .plan-badge.enterprise[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #1f2937 0%,\n      #0b0b18 100%);\n  color: white;\n}\n.dark[_nghost-%COMP%]   .select-button.free[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .select-button.free[_ngcontent-%COMP%] {\n  border-color: rgba(148, 163, 184, 0.45);\n  color: #cbd5f5;\n}\n.dark[_nghost-%COMP%]   .select-button.free[_ngcontent-%COMP%]:hover, .dark   [_nghost-%COMP%]   .select-button.free[_ngcontent-%COMP%]:hover {\n  background: rgba(148, 163, 184, 0.12);\n}\n.dark[_nghost-%COMP%]   .landing-slider-section[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .landing-slider-section[_ngcontent-%COMP%] {\n  background: rgba(43, 58, 240, 0.08);\n  border-color: rgba(79, 90, 246, 0.18);\n}\n.dark[_nghost-%COMP%]   .landing-slider-title[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .landing-slider-title[_ngcontent-%COMP%] {\n  color: #f8fafc;\n}\n.dark[_nghost-%COMP%]   .landing-slider-subtitle[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .landing-slider-subtitle[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .landing-slider-track[_ngcontent-%COMP%]   .track-label[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .landing-slider-track[_ngcontent-%COMP%]   .track-label[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .landing-slider-pill[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .landing-slider-pill[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #2b3af0 0%,\n      #3730a3 100%);\n  color: white;\n  box-shadow: 0 4px 16px rgba(43, 58, 240, 0.45);\n}\n.dark[_nghost-%COMP%]   .volume-change-summary__head-icon[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .volume-change-summary__head-icon[_ngcontent-%COMP%] {\n  background: rgba(79, 90, 246, 0.15);\n  border-color: rgba(99, 102, 241, 0.3);\n}\n.dark[_nghost-%COMP%]   .volume-change-summary__head-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .volume-change-summary__head-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #4f5af6;\n}\n.dark[_nghost-%COMP%]   .volume-change-summary__eyebrow[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .volume-change-summary__eyebrow[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .volume-change-summary__panel-label[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .volume-change-summary__panel-label[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .volume-change-summary__panel-unit[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .volume-change-summary__panel-unit[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .volume-change-summary__hint[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .volume-change-summary__hint[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .volume-change-summary__title[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .volume-change-summary__title[_ngcontent-%COMP%] {\n  color: #f8fafc;\n}\n.dark[_nghost-%COMP%]   .volume-change-summary__panel[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .volume-change-summary__panel[_ngcontent-%COMP%] {\n  border-color: rgba(255, 255, 255, 0.08);\n}\n.dark[_nghost-%COMP%]   .volume-change-summary__panel--from[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .volume-change-summary__panel--from[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.04);\n}\n.dark[_nghost-%COMP%]   .volume-change-summary__panel--to[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .volume-change-summary__panel--to[_ngcontent-%COMP%] {\n  background: rgba(43, 58, 240, 0.08);\n  border-color: rgba(67, 56, 202, 0.25);\n}\n.dark[_nghost-%COMP%]   .volume-change-summary__panel--to.volume-change-summary__panel--highlight[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .volume-change-summary__panel--to.volume-change-summary__panel--highlight[_ngcontent-%COMP%] {\n  border-color: rgba(43, 58, 240, 0.45);\n  box-shadow: 0 0 0 2px rgba(43, 58, 240, 0.15);\n  background: rgba(43, 58, 240, 0.12);\n}\n.dark[_nghost-%COMP%]   .volume-change-summary__panel-value[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .volume-change-summary__panel-value[_ngcontent-%COMP%] {\n  color: #f8fafc;\n}\n.dark[_nghost-%COMP%]   .volume-change-summary__mid-icon[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .volume-change-summary__mid-icon[_ngcontent-%COMP%] {\n  background: #11122a;\n  border-color: rgba(255, 255, 255, 0.08);\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.35);\n}\n.dark[_nghost-%COMP%]   .volume-change-summary__mid-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .volume-change-summary__mid-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #4f5af6;\n}\n.dark[_nghost-%COMP%]   .volume-change-summary__hint[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .volume-change-summary__hint[_ngcontent-%COMP%] {\n  border-top-color: rgba(255, 255, 255, 0.06);\n}\n.dark[_nghost-%COMP%]   .checkout-card[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .checkout-card[_ngcontent-%COMP%] {\n  border-color: rgba(79, 90, 246, 0.18);\n}\n.dark[_nghost-%COMP%]   .checkout-stats[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .checkout-stats[_ngcontent-%COMP%] {\n  background: rgba(43, 58, 240, 0.08);\n  border-bottom-color: rgba(79, 90, 246, 0.18);\n}\n.dark[_nghost-%COMP%]   .checkout-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .checkout-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #4f5af6;\n}\n.dark[_nghost-%COMP%]   .checkout-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .checkout-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  color: #f8fafc;\n}\n.dark[_nghost-%COMP%]   .checkout-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .checkout-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .checkout-stats[_ngcontent-%COMP%]   .stat-divider[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .checkout-stats[_ngcontent-%COMP%]   .stat-divider[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.12);\n}\n.dark[_nghost-%COMP%]   .checkout-features[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .checkout-features[_ngcontent-%COMP%] {\n  border-bottom-color: rgba(79, 90, 246, 0.18);\n}\n.dark[_nghost-%COMP%]   .checkout-features[_ngcontent-%COMP%]   .features-column[_ngcontent-%COMP%]   .features-title.included-title[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .checkout-features[_ngcontent-%COMP%]   .features-column[_ngcontent-%COMP%]   .features-title.included-title[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .checkout-features[_ngcontent-%COMP%]   .features-column[_ngcontent-%COMP%]   .features-title.included-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .checkout-features[_ngcontent-%COMP%]   .features-column[_ngcontent-%COMP%]   .features-title.included-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #4f5af6;\n}\n.dark[_nghost-%COMP%]   .checkout-features[_ngcontent-%COMP%]   .features-column[_ngcontent-%COMP%]   .features-title.extra-title[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .checkout-features[_ngcontent-%COMP%]   .features-column[_ngcontent-%COMP%]   .features-title.extra-title[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .checkout-features[_ngcontent-%COMP%]   .features-column[_ngcontent-%COMP%]   .features-title.extra-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .checkout-features[_ngcontent-%COMP%]   .features-column[_ngcontent-%COMP%]   .features-title.extra-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #f8fafc;\n}\n.dark[_nghost-%COMP%]   .checkout-features[_ngcontent-%COMP%]   .features-column[_ngcontent-%COMP%]   .features-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .checkout-features[_ngcontent-%COMP%]   .features-column[_ngcontent-%COMP%]   .features-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  color: #cbd5f5;\n  border-bottom-color: rgba(255, 255, 255, 0.06);\n}\n.dark[_nghost-%COMP%]   .checkout-features[_ngcontent-%COMP%]   .features-column[_ngcontent-%COMP%]   .features-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .feature-count[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .checkout-features[_ngcontent-%COMP%]   .features-column[_ngcontent-%COMP%]   .features-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .feature-count[_ngcontent-%COMP%] {\n  color: #4f5af6;\n}\n.dark[_nghost-%COMP%]   .checkout-features[_ngcontent-%COMP%]   .features-column[_ngcontent-%COMP%]   .features-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .feature-check[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .checkout-features[_ngcontent-%COMP%]   .features-column[_ngcontent-%COMP%]   .features-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .feature-check[_ngcontent-%COMP%] {\n  color: #34d399;\n}\n.dark[_nghost-%COMP%]   .checkout-features[_ngcontent-%COMP%]   .features-column[_ngcontent-%COMP%]   .features-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .feature-price[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .checkout-features[_ngcontent-%COMP%]   .features-column[_ngcontent-%COMP%]   .features-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .feature-price[_ngcontent-%COMP%] {\n  color: #cbd5f5;\n}\n.dark[_nghost-%COMP%]   .checkout-features[_ngcontent-%COMP%]   .features-column[_ngcontent-%COMP%]   .features-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .extras-link[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .checkout-features[_ngcontent-%COMP%]   .features-column[_ngcontent-%COMP%]   .features-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .extras-link[_ngcontent-%COMP%] {\n  color: #4f5af6;\n}\n.dark[_nghost-%COMP%]   .extra-bio-notice[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .extra-bio-notice[_ngcontent-%COMP%] {\n  border-color: rgba(79, 90, 246, 0.2);\n}\n.dark[_nghost-%COMP%]   .extra-bio-header[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .extra-bio-header[_ngcontent-%COMP%] {\n  background: rgba(43, 58, 240, 0.12);\n}\n.dark[_nghost-%COMP%]   .extra-bio-header[_ngcontent-%COMP%]:hover, .dark   [_nghost-%COMP%]   .extra-bio-header[_ngcontent-%COMP%]:hover {\n  background: rgba(43, 58, 240, 0.18);\n}\n.dark[_nghost-%COMP%]   .extra-bio-header[_ngcontent-%COMP%]   .extra-bio-left[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .extra-bio-header[_ngcontent-%COMP%]   .extra-bio-left[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #f8fafc;\n}\n.dark[_nghost-%COMP%]   .extra-bio-header[_ngcontent-%COMP%]   .extra-bio-left[_ngcontent-%COMP%]   .info-icon[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .extra-bio-header[_ngcontent-%COMP%]   .extra-bio-left[_ngcontent-%COMP%]   .info-icon[_ngcontent-%COMP%] {\n  color: #4f5af6;\n}\n.dark[_nghost-%COMP%]   .extra-bio-header[_ngcontent-%COMP%]   .expand-icon[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .extra-bio-header[_ngcontent-%COMP%]   .expand-icon[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .extra-bio-body[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .extra-bio-body[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.02);\n}\n.dark[_nghost-%COMP%]   .extra-bio-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .extra-bio-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .extra-bio-body[_ngcontent-%COMP%]   .extra-bio-costs[_ngcontent-%COMP%]   .bio-cost-item[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .extra-bio-body[_ngcontent-%COMP%]   .extra-bio-costs[_ngcontent-%COMP%]   .bio-cost-item[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid rgba(79, 90, 246, 0.15);\n}\n.dark[_nghost-%COMP%]   .extra-bio-body[_ngcontent-%COMP%]   .extra-bio-costs[_ngcontent-%COMP%]   .bio-cost-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .extra-bio-body[_ngcontent-%COMP%]   .extra-bio-costs[_ngcontent-%COMP%]   .bio-cost-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #cbd5f5;\n}\n.dark[_nghost-%COMP%]   .extra-bio-body[_ngcontent-%COMP%]   .extra-bio-costs[_ngcontent-%COMP%]   .bio-cost-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .extra-bio-body[_ngcontent-%COMP%]   .extra-bio-costs[_ngcontent-%COMP%]   .bio-cost-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #f8fafc;\n  font-weight: 600;\n}\n.dark[_nghost-%COMP%]   .checkout-terms[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .checkout-terms[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .checkout-terms[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .checkout-terms[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #4f5af6;\n}\n.dark[_nghost-%COMP%]   .range-slider[_ngcontent-%COMP%]   .range-slider__value[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .range-slider[_ngcontent-%COMP%]   .range-slider__value[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .range-slider[_ngcontent-%COMP%]   .range-slider__input[_ngcontent-%COMP%]::-webkit-slider-runnable-track, .dark   [_nghost-%COMP%]   .range-slider[_ngcontent-%COMP%]   .range-slider__input[_ngcontent-%COMP%]::-webkit-slider-runnable-track {\n  background-color: rgba(255, 255, 255, 0.14);\n}\n.dark[_nghost-%COMP%]   .range-slider[_ngcontent-%COMP%]   .range-slider__input[_ngcontent-%COMP%]::-webkit-slider-thumb, .dark   [_nghost-%COMP%]   .range-slider[_ngcontent-%COMP%]   .range-slider__input[_ngcontent-%COMP%]::-webkit-slider-thumb {\n  border-color: #11122a !important;\n  box-shadow: 0 0 0 4px #11122a, 0 2px 10px rgba(43, 58, 240, 0.45);\n}\n.dark[_nghost-%COMP%]   .range-slider[_ngcontent-%COMP%]   .range-slider__input[_ngcontent-%COMP%]::-moz-range-track, .dark   [_nghost-%COMP%]   .range-slider[_ngcontent-%COMP%]   .range-slider__input[_ngcontent-%COMP%]::-moz-range-track {\n  background-color: rgba(255, 255, 255, 0.14);\n}\n.dark[_nghost-%COMP%]   .range-slider[_ngcontent-%COMP%]   .range-slider__input[_ngcontent-%COMP%]::-moz-range-thumb, .dark   [_nghost-%COMP%]   .range-slider[_ngcontent-%COMP%]   .range-slider__input[_ngcontent-%COMP%]::-moz-range-thumb {\n  border-color: #11122a !important;\n  box-shadow: 0 0 0 4px #11122a, 0 2px 10px rgba(43, 58, 240, 0.45);\n}\n.dark[_nghost-%COMP%]   .selected-plan-card[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .selected-plan-card[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .features-table[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .features-table[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%] {\n  background: transparent;\n  border-color: rgba(255, 255, 255, 0.08);\n}\n.dark[_nghost-%COMP%]   .features-table[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child, .dark   [_nghost-%COMP%]   .features-table[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  color: #cbd5f5;\n}\n.dark[_nghost-%COMP%]   .plan-description[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .plan-description[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #f8fafc;\n}\n.dark[_nghost-%COMP%]   .plan-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .plan-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .slider-section[_ngcontent-%COMP%]   .slider-title[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .slider-section[_ngcontent-%COMP%]   .slider-title[_ngcontent-%COMP%] {\n  color: #f8fafc;\n}\n.dark[_nghost-%COMP%]   .upgrade-hint[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .upgrade-hint[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .back-button[_ngcontent-%COMP%]:hover, .dark   [_nghost-%COMP%]   .back-button[_ngcontent-%COMP%]:hover {\n  background: rgba(43, 58, 240, 0.15);\n}\n.dark[_nghost-%COMP%]   .usage-period[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .usage-period[_ngcontent-%COMP%] {\n  background: rgba(43, 58, 240, 0.16);\n  border-color: rgba(79, 90, 246, 0.28);\n}\n.dark[_nghost-%COMP%]   .usage-period__title[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .usage-period__title[_ngcontent-%COMP%] {\n  color: #f8fafc;\n}\n.dark[_nghost-%COMP%]   .usage-period__reset[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .usage-period__reset[_ngcontent-%COMP%] {\n  color: rgb(147, 197, 253);\n}\n.dark[_nghost-%COMP%]   .usage-period__date[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .usage-period__date[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .usage-bars[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .usage-bars[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.04);\n  border-color: rgba(255, 255, 255, 0.1);\n}\n/*# sourceMappingURL=smart-enroll-plans.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SmartEnrollPlansComponent, [{
    type: Component,
    args: [{ selector: "smart-enroll-plans", standalone: true, imports: [
      CommonModule,
      FormsModule,
      RouterModule,
      TranslocoModule,
      MatButtonModule,
      MatIconModule,
      MatProgressSpinnerModule,
      UsageQuotaGaugeComponent,
      UsageQuotaBarComponent,
      UsageOverageExplainerComponent
    ], template: `<ng-container *transloco="let t">\r
    <div class="plans-container w-full flex justify-center">\r
        <div class="w-full max-w-4xl px-4 sm:px-8 py-8">\r
            <!-- Header -->\r
            <div class="current-plan-header flex items-center gap-4 mb-8">\r
                <button\r
                    *ngIf="(currentView === 'change' && currentSubscription.length) || currentView === 'select'"\r
                    (click)="goBack(currentView === 'select' ? 'change' : 'current')"\r
                    class="back-button"\r
                    mat-icon-button\r
                >\r
                    <mat-icon>arrow_back</mat-icon>\r
                </button>\r
                <div class="header-icon">\r
                    <mat-icon>receipt_long</mat-icon>\r
                </div>\r
                <div>\r
                    <h1 class="current-plan-title">{{ t("settings.plans") }}</h1>\r
                    <p class="current-plan-subtitle">{{ t("nav.manage_subscription") }}</p>\r
                </div>\r
            </div>\r
\r
            <!-- CURRENT PLAN VIEW -->\r
            <ng-container *ngIf="currentSubscription.length && currentView === 'current'">\r
                <ng-container *ngFor="let subscription of currentSubscription; let i = index">\r
                    <!-- Current Plan Card -->\r
                    <div class="plan-card mb-6 animate-fadeIn" [class.payment-failed]="subscription.paymentFailedAt">\r
                        <!-- Card Header -->\r
                        <div class="card-header">\r
                            <div class="flex items-center gap-3">\r
                                <div class="card-icon" [ngClass]="getPlanColorClass(subscription.codeShow)">\r
                                    <mat-icon>workspace_premium</mat-icon>\r
                                </div>\r
                                <div>\r
                                    <p class="text-sm text-gray-500">\r
                                        {{ i === 0 ? t("smartaccess.plans.your_plan") : t("smartaccess.plans.your_next_plan") }}\r
                                    </p>\r
                                    <h2 class="font-semibold text-gray-900 text-lg">{{ subscription.name }}</h2>\r
                                </div>\r
                            </div>\r
                            <div\r
                                class="status-badge"\r
                                [ngClass]="subscription.paymentFailedAt ? 'error' : subscription.cancelAt ? 'warning' : 'success'"\r
                            >\r
                                <span class="status-dot"></span>\r
                                <span *ngIf="!subscription.paymentFailedAt && !subscription.cancelAt">{{ t("api_key_management.active") }}</span>\r
                                <span *ngIf="subscription.cancelAt">{{ t("smartaccess.plans.cancelled") }}</span>\r
                                <span *ngIf="subscription.paymentFailedAt">{{ t("subscriptions.payment_failed") }}</span>\r
                            </div>\r
                        </div>\r
\r
                        <!-- Payment Failed Alert -->\r
                        <div *ngIf="subscription.paymentFailedAt" class="payment-alert">\r
                            <mat-icon class="text-red-500">error_outline</mat-icon>\r
                            <span>{{ t("subscriptions.payment_failed_description") }}</span>\r
                        </div>\r
\r
                        <!-- Card Body -->\r
                        <div class="card-body">\r
                            <!-- Price Section -->\r
                            <div class="price-section">\r
                                <div class="price-label">{{ t("smartaccess.plans.value_plan") }}</div>\r
                                <div class="price-amount">\r
                                    {{ calculateSubscriptionPrice(subscription) | currency }} <span class="price-currency">USD</span>\r
                                </div>\r
                                <div class="price-period">\r
                                    <ng-container *ngIf="!subscription.cancelAt">\r
                                        <span *ngIf="i === 0"\r
                                            >{{ t("smartaccess.plans.next_payment") }}: {{ subscription.endDate | date : "longDate" }}</span\r
                                        >\r
                                        <span *ngIf="i > 0"\r
                                            >{{ t("smartaccess.plans.starts_in") }}: {{ subscription.startDate | date : "longDate" }}</span\r
                                        >\r
                                    </ng-container>\r
                                    <span *ngIf="subscription.cancelAt"\r
                                        >{{ t("smartaccess.plans.canceled_plan") }}: {{ subscription.cancelAt | date : "longDate" }}</span\r
                                    >\r
                                </div>\r
                            </div>\r
\r
                            <!-- Payment Method -->\r
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
                                    <span class="payment-text">{{ t("smartenroll.plans.paid_with_stripe_link") }}</span>\r
                                </ng-container>\r
                                <ng-container *ngIf="subscription?.cardBrand && subscription?.cardBrand !== 'link' && subscription?.lastFour">\r
                                    <img [src]="creditCardLogo(subscription.cardBrand)" class="h-8 w-12 object-contain" alt="card" />\r
                                    <div class="payment-details">\r
                                        <span class="payment-text"\r
                                            >{{ capitalizeFirstLetter(subscription.cardBrand) }} {{ t("smartaccess.plans.ended") }}\r
                                            {{ subscription.lastFour }}</span\r
                                        >\r
                                        <span class="payment-expiry"\r
                                            >{{ t("smartaccess.plans.expires") }} {{ subscription.cardExpMonth }}/{{ subscription.cardExpYear }}</span\r
                                        >\r
                                    </div>\r
                                </ng-container>\r
                                <ng-container *ngIf="!subscription?.cardBrand && !subscription?.lastFour">\r
                                    <mat-icon class="text-gray-400">credit_card_off</mat-icon>\r
                                    <span class="payment-text text-gray-500">{{ t("smartaccess.plans.no_payment") }}</span>\r
                                </ng-container>\r
                            </div>\r
\r
                            <!-- Current period usage (active subscription only) -->\r
                            <div *ngIf="i === 0" class="usage-dashboard">\r
                                <div class="usage-period dark:!border-indigo-400/30 dark:!bg-indigo-600/20">\r
                                    <div class="usage-period__copy">\r
                                        <p class="usage-period__title dark:!text-slate-50">{{ t("smartenroll.plans.usage.title") }}</p>\r
                                        <p class="usage-period__reset dark:!text-blue-300">\r
                                            <ng-container *ngIf="usageDaysUntilReset(subscription) === 0; else daysLeft">\r
                                                {{ t("smartenroll.plans.usage.resets_today") }}\r
                                            </ng-container>\r
                                            <ng-template #daysLeft>\r
                                                <ng-container *ngIf="usageDaysUntilReset(subscription) === 1; else manyDays">\r
                                                    {{ t("smartenroll.plans.usage.resets_in_one") }}\r
                                                </ng-container>\r
                                                <ng-template #manyDays>\r
                                                    {{ t("smartenroll.plans.usage.resets_in", { days: usageDaysUntilReset(subscription) }) }}\r
                                                </ng-template>\r
                                            </ng-template>\r
                                        </p>\r
                                    </div>\r
                                    <p class="usage-period__date dark:!text-slate-400">\r
                                        {{ t("smartenroll.plans.usage.resets_on", { date: usageResetDate(subscription) }) }}\r
                                    </p>\r
                                </div>\r
\r
                                <div class="usage-gauges">\r
                                    <ng-container *ngIf="subscription.biometricsLimit > 0; else basicEnrollGauge">\r
                                        <usage-quota-gauge\r
                                            [used]="subscription.biometricsCount || 0"\r
                                            [limit]="subscription.biometricsLimit || 0"\r
                                            [label]="t('smartenroll.plans.usage.biometrics')"\r
                                        ></usage-quota-gauge>\r
                                    </ng-container>\r
                                    <ng-template #basicEnrollGauge>\r
                                        <usage-quota-gauge\r
                                            [used]="subscription.basicCount || 0"\r
                                            [limit]="subscription.basicLimit || 0"\r
                                            [label]="t('smartenroll.plans.usage.basic')"\r
                                        ></usage-quota-gauge>\r
                                    </ng-template>\r
                                    <usage-quota-gauge\r
                                        [used]="subscription.scanDocsCount || 0"\r
                                        [limit]="subscription.scanDocsLimit || 0"\r
                                        [label]="t('smartenroll.plans.usage.scans')"\r
                                    ></usage-quota-gauge>\r
                                </div>\r
\r
                                <div class="usage-bars dark:!border-white/10 dark:!bg-white/5">\r
                                    <usage-quota-bar\r
                                        [used]="subscription.validateNamesCount || 0"\r
                                        [limit]="subscription.validateNamesLimit || 0"\r
                                        [label]="t('smartenroll.plans.usage.names')"\r
                                    ></usage-quota-bar>\r
                                    <usage-quota-bar\r
                                        [used]="subscription.backgroundCheckCount || 0"\r
                                        [limit]="subscription.backgroundCheckLimit || 0"\r
                                        [label]="t('smartenroll.plans.usage.background')"\r
                                    ></usage-quota-bar>\r
                                    <usage-quota-bar\r
                                        [used]="subscription.emailCount || 0"\r
                                        [limit]="subscription.emailsLimit || 0"\r
                                        [label]="t('smartenroll.plans.usage.emails')"\r
                                    ></usage-quota-bar>\r
                                    <usage-quota-bar\r
                                        *ngIf="subscription.biometricsLimit > 0 && subscription.basicLimit > 0"\r
                                        [used]="subscription.basicCount || 0"\r
                                        [limit]="subscription.basicLimit || 0"\r
                                        [label]="t('smartenroll.plans.usage.basic')"\r
                                    ></usage-quota-bar>\r
                                </div>\r
\r
                                <usage-overage-explainer\r
                                    [nameDiscountPercent]="subscription.nameValidationDiscountPercent"\r
                                    [backgroundDiscountPercent]="subscription.backgroundCheckDiscountPercent"\r
                                    [emphasized]="lookupQuotaAtLimit(subscription)"\r
                                ></usage-overage-explainer>\r
                            </div>\r
\r
                            <!-- Upcoming plan: included limits only -->\r
                            <div *ngIf="i > 0" class="features-grid">\r
                                <div class="feature-card">\r
                                    <div class="feature-icon email">\r
                                        <mat-icon>email</mat-icon>\r
                                    </div>\r
                                    <div class="feature-content">\r
                                        <span class="feature-label">Email</span>\r
                                        <span class="feature-value">{{ subscription.emailsLimit | number }}</span>\r
                                    </div>\r
                                    <mat-icon class="feature-status" [class.active]="subscription.emailsLimit > 0">\r
                                        {{ subscription.emailsLimit > 0 ? "check_circle" : "cancel" }}\r
                                    </mat-icon>\r
                                </div>\r
\r
                                <div class="feature-card">\r
                                    <div class="feature-icon whitelabel">\r
                                        <mat-icon>brush</mat-icon>\r
                                    </div>\r
                                    <div class="feature-content">\r
                                        <span class="feature-label">{{ t("smartaccess.plans.whiteLabel") }}</span>\r
                                        <span class="feature-value">{{ t("smartenroll.plans.enabled") }}</span>\r
                                    </div>\r
                                    <mat-icon class="feature-status active">check_circle</mat-icon>\r
                                </div>\r
\r
                                <div class="feature-card">\r
                                    <div class="feature-icon biometrics">\r
                                        <mat-icon>fingerprint</mat-icon>\r
                                    </div>\r
                                    <div class="feature-content">\r
                                        <span class="feature-label">{{ t("smartaccess.plans.liveness") }}</span>\r
                                        <span class="feature-value">{{\r
                                            subscription.biometricsLimit > 0\r
                                                ? (subscription.biometricsLimit | number)\r
                                                : t("smartenroll.plans.disabled")\r
                                        }}</span>\r
                                    </div>\r
                                    <mat-icon class="feature-status" [class.active]="subscription.biometricsLimit > 0">\r
                                        {{ subscription.biometricsLimit > 0 ? "check_circle" : "cancel" }}\r
                                    </mat-icon>\r
                                </div>\r
\r
                                <div class="feature-card">\r
                                    <div class="feature-icon api">\r
                                        <mat-icon>api</mat-icon>\r
                                    </div>\r
                                    <div class="feature-content">\r
                                        <span class="feature-label">{{ t("smartaccess.plans.api_assistance") }}</span>\r
                                        <span class="feature-value">{{ t("smartenroll.plans.available") }}</span>\r
                                    </div>\r
                                    <mat-icon class="feature-status">add_circle_outline</mat-icon>\r
                                </div>\r
                            </div>\r
\r
                            <!-- Optional Features Section -->\r
                            <div class="optional-section">\r
                                <h3 class="optional-title">{{ t("smartenroll.plans.optional_features") }}</h3>\r
                                <p class="optional-subtitle">{{ t("smartenroll.plans.optional_features_description") }}</p>\r
\r
                                <div class="optional-grid">\r
                                    <div class="optional-card">\r
                                        <div class="optional-icon sms">\r
                                            <mat-icon>sms</mat-icon>\r
                                        </div>\r
                                        <div class="optional-content">\r
                                            <span class="optional-label">{{ t("smartenroll.plans.sms_optional") }}</span>\r
                                            <span class="optional-value">{{ t("smartenroll.plans.using_functionality") }}</span>\r
                                        </div>\r
                                        <a [href]="getSmsWhatsappPricesUrl()" target="_blank" class="optional-link">\r
                                            {{ t("smartenroll.plans.using_functionality_link") }}\r
                                            <mat-icon>open_in_new</mat-icon>\r
                                        </a>\r
                                    </div>\r
\r
                                    <div class="optional-card">\r
                                        <div class="optional-icon whatsapp">\r
                                            <mat-icon>chat</mat-icon>\r
                                        </div>\r
                                        <div class="optional-content">\r
                                            <span class="optional-label">{{ t("smartenroll.plans.whatsapp_optional") }}</span>\r
                                            <span class="optional-value">{{ t("smartenroll.plans.using_functionality") }}</span>\r
                                        </div>\r
                                        <a [href]="getSmsWhatsappPricesUrl()" target="_blank" class="optional-link">\r
                                            {{ t("smartenroll.plans.using_functionality_link") }}\r
                                            <mat-icon>open_in_new</mat-icon>\r
                                        </a>\r
                                    </div>\r
                                </div>\r
                            </div>\r
\r
                            <!-- Action Button -->\r
                            <div class="card-actions">\r
                                <button\r
                                    (click)="goToStripeSubscriptions()"\r
                                    class="action-button primary"\r
                                    [class.error]="subscription.paymentFailedAt"\r
                                    mat-flat-button\r
                                >\r
                                    {{ t("nav.manage_subscription") }}\r
                                </button>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </ng-container>\r
\r
                <!-- Upgrade CTA Section -->\r
                <div class="upgrade-section animate-fadeIn">\r
                    <!-- Header with gradient -->\r
                    <div class="upgrade-header">\r
                        <div class="upgrade-header-content">\r
                            <div class="upgrade-badge">\r
                                <mat-icon>auto_awesome</mat-icon>\r
                                <span>{{ t("smartenroll.plans.upgrade_available") }}</span>\r
                            </div>\r
                            <h2 class="upgrade-headline">{{ t("smartaccess.plans.better_plan") }}</h2>\r
                            <p class="upgrade-subheadline">{{ t("smartaccess.plans.better_plan_text") }}</p>\r
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
                    <!-- Benefits Grid -->\r
                    <div class="upgrade-benefits">\r
                        <div class="benefit-item">\r
                            <div class="benefit-icon">\r
                                <mat-icon>trending_up</mat-icon>\r
                            </div>\r
                            <div class="benefit-text">\r
                                <span class="benefit-title">{{ t("smartenroll.plans.higher_limits") }}</span>\r
                                <span class="benefit-desc">{{ t("smartenroll.plans.higher_limits_desc") }}</span>\r
                            </div>\r
                        </div>\r
                        <div class="benefit-item">\r
                            <div class="benefit-icon">\r
                                <mat-icon>support_agent</mat-icon>\r
                            </div>\r
                            <div class="benefit-text">\r
                                <span class="benefit-title">{{ t("smartenroll.plans.priority_support") }}</span>\r
                                <span class="benefit-desc">{{ t("smartenroll.plans.priority_support_desc") }}</span>\r
                            </div>\r
                        </div>\r
                        <div class="benefit-item">\r
                            <div class="benefit-icon">\r
                                <mat-icon>tune</mat-icon>\r
                            </div>\r
                            <div class="benefit-text">\r
                                <span class="benefit-title">{{ t("smartenroll.plans.advanced_features") }}</span>\r
                                <span class="benefit-desc">{{ t("smartenroll.plans.advanced_features_desc") }}</span>\r
                            </div>\r
                        </div>\r
                    </div>\r
\r
                    <!-- CTA -->\r
                    <div class="upgrade-cta">\r
                        <button (click)="changeView('change', null)" class="upgrade-button" mat-flat-button>\r
                            <span>{{ t("smartaccess.plans.explore_plan") }}</span>\r
                            <mat-icon>arrow_forward</mat-icon>\r
                        </button>\r
                        <span class="upgrade-hint">{{ t("smartenroll.plans.no_commitment") }}</span>\r
                    </div>\r
                </div>\r
            </ng-container>\r
\r
            <!-- CHANGE PLAN VIEW -->\r
            <ng-container *ngIf="currentView === 'change'">\r
                <div class="mb-6">\r
                    <h2 class="text-2xl font-semibold text-gray-900">{{ t("smartenroll.plans.select_plan") }}</h2>\r
                    <p class="text-gray-500 mt-1">{{ t("smartenroll.plans.choose_best_plan") }}</p>\r
                </div>\r
\r
                <!-- Plan Cards Grid -->\r
                <div class="plans-grid">\r
                    <!-- Plus Plan -->\r
                    <div\r
                        class="select-plan-card animate-fadeIn"\r
                        [class.select-plan-card--current]="isActiveCatalogPlan('plus')"\r
                        [style.animation-delay]="'0.1s'"\r
                    >\r
                        <div *ngIf="isActiveCatalogPlan('plus')" class="current-plan-badge">\r
                            {{ t("smartenroll.plans.current_plan_badge") }}\r
                        </div>\r
                        <div class="plan-badge plus">{{ t("smartenroll.plans.plus") }}</div>\r
                        <div class="plan-pricing">\r
                            <span class="plan-price">{{ calculatePrice("plus") | currency }}</span>\r
                            <span class="plan-period">/{{ t("smartenroll.plans.month") }}</span>\r
                        </div>\r
                        <p class="plan-range">\r
                            {{ getPlan("plus")?.biometricsLimit | number }} - {{ getPlan("plus")?.basicLimit | number }} smartEnrolls\r
                        </p>\r
\r
                        <div class="plan-features">\r
                            <div class="plan-stat">\r
                                <span class="stat-label">{{ t("smartenroll.plans.enroll_cost") }}</span>\r
                                <span class="stat-value">{{ getPlan("plus")?.unitPrice | currency }}</span>\r
                            </div>\r
                            <div class="plan-stat">\r
                                <span class="stat-label">{{ t("smartenroll.plans.analytics") }}</span>\r
                                <span class="stat-value">{{ t("smartenroll.plans.n_days", { n: (getPlan("plus")?.intervalCount || 1) * 30 }) }}</span>\r
                            </div>\r
                            <div class="plan-stat">\r
                                <span class="stat-label">{{ t("smartenroll.plans.team_size") }}</span>\r
                                <span class="stat-value">5</span>\r
                            </div>\r
                        </div>\r
\r
                        <div class="plan-includes">\r
                            <p class="includes-title">{{ t("smartenroll.plans.included") }}</p>\r
                            <ul class="includes-list">\r
                                <li><mat-icon>check</mat-icon>{{ t("smartenroll.plans.liveness") }}</li>\r
                                <li><mat-icon>check</mat-icon>{{ t("smartenroll.plans.face_compare") }}</li>\r
                                <li><mat-icon>check</mat-icon>{{ t("smartenroll.plans.worldwide_checks") }}</li>\r
                                <li><mat-icon>check</mat-icon>{{ t("smartenroll.plans.email") }}</li>\r
                                <li><mat-icon>check</mat-icon>{{ t("smartenroll.plans.scan_doc") }}</li>\r
                            </ul>\r
                        </div>\r
\r
                        <button (click)="changeView('select', 'plus')" class="select-button plus" mat-flat-button>\r
                            {{\r
                                isActiveCatalogPlan("plus")\r
                                    ? t("smartenroll.plans.adjust_volume")\r
                                    : t("smartenroll.plans.view_plan")\r
                            }}\r
                        </button>\r
                    </div>\r
\r
                    <!-- Business Plan -->\r
                    <div\r
                        class="select-plan-card featured animate-fadeIn"\r
                        [class.select-plan-card--current]="isActiveCatalogPlan('business')"\r
                        [style.animation-delay]="'0.2s'"\r
                    >\r
                        <div *ngIf="isActiveCatalogPlan('business')" class="current-plan-badge current-plan-badge--offset">\r
                            {{ t("smartenroll.plans.current_plan_badge") }}\r
                        </div>\r
                        <div class="featured-badge">{{ t("smartenroll.plans.most_popular") }}</div>\r
                        <div class="plan-badge business">{{ t("smartenroll.plans.business") }}</div>\r
                        <div class="plan-pricing">\r
                            <span class="plan-price">{{ calculatePrice("business") | currency }}</span>\r
                            <span class="plan-period">/{{ t("smartenroll.plans.month") }}</span>\r
                        </div>\r
                        <p class="plan-range">\r
                            {{ getPlan("business")?.biometricsLimit | number }} - {{ getPlan("business")?.basicLimit | number }} smartEnrolls\r
                        </p>\r
\r
                        <div class="plan-features">\r
                            <div class="plan-stat">\r
                                <span class="stat-label">{{ t("smartenroll.plans.enroll_cost") }}</span>\r
                                <span class="stat-value">{{ getPlan("business")?.unitPrice | currency }}</span>\r
                            </div>\r
                            <div class="plan-stat">\r
                                <span class="stat-label">{{ t("smartenroll.plans.analytics") }}</span>\r
                                <span class="stat-value">{{\r
                                    t("smartenroll.plans.n_days", { n: (getPlan("business")?.intervalCount || 1) * 30 })\r
                                }}</span>\r
                            </div>\r
                            <div class="plan-stat">\r
                                <span class="stat-label">{{ t("smartenroll.plans.team_size") }}</span>\r
                                <span class="stat-value">5</span>\r
                            </div>\r
                        </div>\r
\r
                        <div class="plan-includes">\r
                            <p class="includes-title">{{ t("smartenroll.plans.included") }}</p>\r
                            <ul class="includes-list">\r
                                <li><mat-icon>check</mat-icon>{{ t("smartenroll.plans.liveness") }}</li>\r
                                <li><mat-icon>check</mat-icon>{{ t("smartenroll.plans.face_compare") }}</li>\r
                                <li><mat-icon>check</mat-icon>{{ t("smartenroll.plans.worldwide_checks") }}</li>\r
                                <li><mat-icon>check</mat-icon>{{ t("smartenroll.plans.email") }}</li>\r
                                <li><mat-icon>check</mat-icon>{{ t("smartenroll.plans.scan_doc") }}</li>\r
                            </ul>\r
                        </div>\r
\r
                        <button (click)="changeView('select', 'business')" class="select-button business" mat-flat-button>\r
                            {{\r
                                isActiveCatalogPlan("business")\r
                                    ? t("smartenroll.plans.adjust_volume")\r
                                    : t("smartenroll.plans.view_plan")\r
                            }}\r
                        </button>\r
                    </div>\r
\r
                    <!-- Enterprise Plan -->\r
                    <div class="select-plan-card animate-fadeIn" [style.animation-delay]="'0.3s'">\r
                        <div class="plan-badge enterprise">{{ t("smartenroll.plans.enterprise") }}</div>\r
                        <div class="plan-pricing">\r
                            <span class="plan-price custom">{{ t("smartenroll.plans.contact_sales") }}</span>\r
                        </div>\r
                        <p class="plan-range">+5,000 smartEnrolls</p>\r
\r
                        <div class="plan-features">\r
                            <div class="plan-stat">\r
                                <span class="stat-label">{{ t("smartenroll.plans.enroll_cost") }}</span>\r
                                <span class="stat-value">{{ t("smartenroll.plans.custom") }}</span>\r
                            </div>\r
                            <div class="plan-stat">\r
                                <span class="stat-label">{{ t("smartenroll.plans.analytics") }}</span>\r
                                <span class="stat-value">{{ t("smartenroll.plans.unlimited") }}</span>\r
                            </div>\r
                            <div class="plan-stat">\r
                                <span class="stat-label">{{ t("smartenroll.plans.team_size") }}</span>\r
                                <span class="stat-value">+10</span>\r
                            </div>\r
                        </div>\r
\r
                        <div class="plan-includes">\r
                            <p class="includes-title">{{ t("smartenroll.plans.included") }}</p>\r
                            <ul class="includes-list">\r
                                <li><mat-icon>check</mat-icon>{{ t("smartenroll.plans.everything_in_business") }}</li>\r
                                <li><mat-icon>check</mat-icon>{{ t("smartenroll.plans.api_assistance") }}</li>\r
                                <li><mat-icon>check</mat-icon>{{ t("smartenroll.plans.dedicated_support") }}</li>\r
                            </ul>\r
                        </div>\r
\r
                        <button (click)="purchaseEnterprise()" class="select-button enterprise" mat-flat-button>\r
                            {{ t("smartenroll.plans.contact_sales") }}\r
                        </button>\r
                    </div>\r
                </div>\r
\r
                <!-- Free Plan Card - same UI as Plus/Business -->\r
                <div\r
                    class="select-plan-card free-plan-card animate-fadeIn"\r
                    [class.select-plan-card--current]="isActiveCatalogPlan('free')"\r
                    [style.animation-delay]="'0.4s'"\r
                >\r
                    <div *ngIf="isActiveCatalogPlan('free')" class="current-plan-badge">\r
                        {{ t("smartenroll.plans.current_plan_badge") }}\r
                    </div>\r
                    <div class="plan-badge free">{{ t("smartenroll.plans.free") }}</div>\r
                    <div class="plan-pricing">\r
                        <span class="plan-price">$0</span>\r
                        <span class="plan-period">/{{ t("smartenroll.plans.month") }}</span>\r
                    </div>\r
                    <p class="plan-range">{{ getPlan("free")?.basicLimit | number }} smartEnrolls</p>\r
                    <p\r
                        class="free-plan-desc"\r
                        [innerHTML]="t('smartenroll.plans.try_free_plan_description', { amount: getPlan('free')?.basicLimit || 0 })"\r
                    ></p>\r
                    <div class="plan-features">\r
                        <div class="plan-stat">\r
                            <span class="stat-label">{{ t("smartenroll.plans.enroll_cost") }}</span>\r
                            <span class="stat-value">$0</span>\r
                        </div>\r
                        <div class="plan-stat">\r
                            <span class="stat-label">{{ t("smartenroll.plans.analytics") }}</span>\r
                            <span class="stat-value">{{ t("smartenroll.plans.n_days", { n: (getPlan("free")?.intervalCount || 1) * 30 }) }}</span>\r
                        </div>\r
                        <div class="plan-stat">\r
                            <span class="stat-label">{{ t("smartenroll.plans.team_size") }}</span>\r
                            <span class="stat-value">2</span>\r
                        </div>\r
                    </div>\r
                    <div class="plan-includes">\r
                        <p class="includes-title">{{ t("smartenroll.plans.included") }}</p>\r
                        <ul class="includes-list">\r
                            <li><mat-icon>check</mat-icon>{{ t("smartenroll.plans.white_label") }}</li>\r
                            <li><mat-icon>check</mat-icon>{{ t("smartenroll.plans.face_compare") }}</li>\r
                            <li><mat-icon>check</mat-icon>{{ t("smartenroll.plans.email") }}</li>\r
                            <li><mat-icon>check</mat-icon>{{ t("smartenroll.plans.scan_doc") }}</li>\r
                        </ul>\r
                    </div>\r
                    <button (click)="changeView('select', 'free')" class="select-button free" mat-stroked-button>\r
                        {{\r
                            isActiveCatalogPlan("free")\r
                                ? t("smartenroll.plans.adjust_volume")\r
                                : t("smartenroll.plans.view_plan")\r
                        }}\r
                        <mat-icon>arrow_forward</mat-icon>\r
                    </button>\r
                </div>\r
            </ng-container>\r
\r
            <!-- SELECT PLAN VIEW - Modern Checkout Experience -->\r
            <ng-container *ngIf="currentView === 'select'">\r
                <!-- Landing-style Slider Section for non-free plans -->\r
                <div *ngIf="selectedPlan !== 'free'" class="landing-slider-section animate-fadeIn">\r
                    <h2 class="landing-slider-title">{{ t("smartenroll.plans.how_many_enrollments") }}</h2>\r
                    <p class="landing-slider-subtitle">{{ t("smartenroll.plans.select_volume") }}</p>\r
\r
                    <div class="landing-slider-track">\r
                        <span class="track-label">{{ sliderOptions?.notches?.[0] | number }}</span>\r
                        <div class="track-slider">\r
                            <div class="range-slider range-slider--dotted" [style.--track-fill-percentage]="getTrackFillPercentage() + '%'">\r
                                <input\r
                                    [max]="sliderOptions?.notches?.length - 1 || 0"\r
                                    [min]="0"\r
                                    [(ngModel)]="sliderOptions.value"\r
                                    class="range-slider__input"\r
                                    type="range"\r
                                />\r
                            </div>\r
                        </div>\r
                        <span class="track-label">+{{ sliderOptions?.notches?.[sliderOptions?.notches?.length - 1] | number }}</span>\r
                    </div>\r
\r
                    <div class="landing-slider-pill">\r
                        <strong>{{ getSliderAmount(selectedPlan) | number }}</strong> smartEnrolls\r
                    </div>\r
\r
                    <div *ngIf="showVolumeChangeSummary()" class="volume-change-summary">\r
                        <div class="volume-change-summary__head">\r
                            <div class="volume-change-summary__head-icon" aria-hidden="true">\r
                                <mat-icon>compare_arrows</mat-icon>\r
                            </div>\r
                            <div class="volume-change-summary__head-text">\r
                                <span class="volume-change-summary__eyebrow">{{ t("smartenroll.plans.volume_compare_eyebrow") }}</span>\r
                                <span class="volume-change-summary__title">{{ t("smartenroll.plans.volume_compare_title") }}</span>\r
                            </div>\r
                        </div>\r
                        <div class="volume-change-summary__compare">\r
                            <div class="volume-change-summary__panel volume-change-summary__panel--from">\r
                                <span class="volume-change-summary__panel-label">{{\r
                                    t("smartenroll.plans.volume_compare_current")\r
                                }}</span>\r
                                <span class="volume-change-summary__panel-value">{{ currentSubscribedEnrollments | number }}</span>\r
                                <span class="volume-change-summary__panel-unit">{{ t("smartenroll.plans.volume_compare_unit") }}</span>\r
                            </div>\r
                            <div class="volume-change-summary__mid">\r
                                <div class="volume-change-summary__mid-icon">\r
                                    <mat-icon>arrow_forward</mat-icon>\r
                                </div>\r
                            </div>\r
                            <div\r
                                class="volume-change-summary__panel volume-change-summary__panel--to"\r
                                [class.volume-change-summary__panel--highlight]="isSameTierVolumeUpdate()"\r
                            >\r
                                <span class="volume-change-summary__panel-label">{{\r
                                    t("smartenroll.plans.volume_compare_new")\r
                                }}</span>\r
                                <span class="volume-change-summary__panel-value">{{ selectedEnrollmentsCount() | number }}</span>\r
                                <span class="volume-change-summary__panel-unit">{{ t("smartenroll.plans.volume_compare_unit") }}</span>\r
                            </div>\r
                        </div>\r
                        <p *ngIf="!isSameTierVolumeUpdate()" class="volume-change-summary__hint">\r
                            {{ t("smartenroll.plans.volume_compare_equal_hint") }}\r
                        </p>\r
                    </div>\r
                </div>\r
\r
                <!-- Modern Checkout Card -->\r
                <div class="checkout-card animate-fadeIn" [ngClass]="'checkout-' + selectedPlan">\r
                    <!-- Plan Header -->\r
                    <div class="checkout-header" [ngClass]="'header-' + selectedPlan">\r
                        <div class="checkout-plan-info">\r
                            <div class="checkout-badge" [ngClass]="selectedPlan">\r
                                <mat-icon>{{ selectedPlan === "free" ? "card_giftcard" : selectedPlan === "plus" ? "star" : "diamond" }}</mat-icon>\r
                                <span>{{\r
                                    selectedPlan === "free"\r
                                        ? t("smartenroll.plans.free")\r
                                        : selectedPlan === "plus"\r
                                        ? t("smartenroll.plans.plus")\r
                                        : t("smartenroll.plans.business")\r
                                }}</span>\r
                            </div>\r
                            <span class="checkout-plan-type">{{ t("smartenroll.plans.per_enrollment") }}</span>\r
                        </div>\r
                        <div class="checkout-price">\r
                            <span class="price-from">{{ t("smartenroll.plans.starting_at") }}</span>\r
                            <span class="price-currency">$</span>\r
                            <span class="price-value">{{ calculatePrice(selectedPlan) | number : "1.0-0" }}</span>\r
                            <span class="price-period">/{{ t("smartenroll.plans.month") }}</span>\r
                        </div>\r
                    </div>\r
\r
                    <!-- Quick Stats Row -->\r
                    <div class="checkout-stats">\r
                        <div class="stat-item">\r
                            <mat-icon>fingerprint</mat-icon>\r
                            <span class="stat-value">{{\r
                                selectedPlan === "free" ? (getPlan("free")?.basicLimit | number) : (getSliderAmount(selectedPlan) | number)\r
                            }}</span>\r
                            <span class="stat-label">smartEnrolls</span>\r
                        </div>\r
                        <div class="stat-divider"></div>\r
                        <div class="stat-item">\r
                            <mat-icon>payments</mat-icon>\r
                            <span class="stat-value">{{ getPlan(selectedPlan)?.unitPrice | currency }}</span>\r
                            <span class="stat-label">{{ t("smartenroll.plans.cost_per_enroll") }}</span>\r
                        </div>\r
                        <div class="stat-divider"></div>\r
                        <div class="stat-item">\r
                            <mat-icon>analytics</mat-icon>\r
                            <span class="stat-value">{{ (getPlan(selectedPlan)?.intervalCount || 1) * 30 }}</span>\r
                            <span class="stat-label">{{ t("smartenroll.plans.analytics_days") }}</span>\r
                        </div>\r
                        <div class="stat-divider"></div>\r
                        <div class="stat-item">\r
                            <mat-icon>group</mat-icon>\r
                            <span class="stat-value">{{ selectedPlan === "free" ? "2" : "5" }}</span>\r
                            <span class="stat-label">{{ t("smartenroll.plans.team_members") }}</span>\r
                        </div>\r
                    </div>\r
\r
                    <!-- Included & Extra Costs Side by Side -->\r
                    <div class="checkout-features">\r
                        <div class="features-column">\r
                            <h4 class="features-title included-title">\r
                                <mat-icon>check_circle</mat-icon>\r
                                {{ t("smartenroll.plans.included") }}\r
                            </h4>\r
                            <ul class="features-list included">\r
                                <li>\r
                                    <span>{{ t("smartenroll.plans.liveness") }}</span>\r
                                    <span class="feature-count">{{\r
                                        getSliderAmount(selectedPlan) || getPlan(selectedPlan)?.biometricsLimit || 0 | number\r
                                    }}</span>\r
                                </li>\r
                                <li>\r
                                    <span>{{ t("smartenroll.plans.worldwide_checks") }}</span>\r
                                    <span class="feature-count">{{\r
                                        getSliderAmount(selectedPlan) || getPlan(selectedPlan)?.backgroundCheckLimit || 0 | number\r
                                    }}</span>\r
                                </li>\r
                                <li>\r
                                    <span>{{ t("smartenroll.plans.emails") }}</span>\r
                                    <span class="feature-count">{{\r
                                        getSliderAmount(selectedPlan) || getPlan(selectedPlan)?.emailsLimit || 0 | number\r
                                    }}</span>\r
                                </li>\r
                                <li>\r
                                    <span>{{ t("smartenroll.plans.scan_doc") }}</span>\r
                                    <span class="feature-count">{{\r
                                        getSliderAmount(selectedPlan) || getPlan(selectedPlan)?.scanDocsLimit || 0 | number\r
                                    }}</span>\r
                                </li>\r
                                <li>\r
                                    <span>{{ t("smartenroll.plans.white_label") }}</span>\r
                                    <mat-icon class="feature-check">check</mat-icon>\r
                                </li>\r
                                <li>\r
                                    <span>{{ t("smartenroll.plans.face_compare") }}</span>\r
                                    <mat-icon class="feature-check">check</mat-icon>\r
                                </li>\r
                            </ul>\r
                        </div>\r
                        <div class="features-column">\r
                            <h4 class="features-title extra-title">\r
                                <mat-icon>add_circle_outline</mat-icon>\r
                                {{ t("smartenroll.plans.extra_cost") }}\r
                            </h4>\r
                            <ul class="features-list extra">\r
                                <li>\r
                                    <span>{{ t("smartenroll.plans.extra_enrolls") }}</span>\r
                                    <span class="feature-price"\r
                                        >{{ (getPlan(selectedPlan)?.meteredUnitPrice ?? getPlan(selectedPlan)?.unitPrice) | currency }} {{ t("smartenroll.plans.per_extra") }}</span\r
                                    >\r
                                </li>\r
                                <li>\r
                                    <span>{{ t("smartenroll.plans.sms_verification") }}</span>\r
                                    <a class="extras-link" [href]="getSmsWhatsappPricesUrl()" target="_blank">{{\r
                                        t("smartenroll.plans.see_prices")\r
                                    }}</a>\r
                                </li>\r
                                <li>\r
                                    <span>{{ t("smartenroll.plans.whatsapp_verification") }}</span>\r
                                    <a class="extras-link" [href]="getSmsWhatsappPricesUrl()" target="_blank">{{\r
                                        t("smartenroll.plans.see_prices")\r
                                    }}</a>\r
                                </li>\r
                            </ul>\r
                        </div>\r
                    </div>\r
\r
                    <!-- Extra Enrolls Info Toggle -->\r
                    <div class="extra-bio-notice">\r
                        <div class="extra-bio-header" (click)="showExtraBioInfo = !showExtraBioInfo">\r
                            <div class="extra-bio-left">\r
                                <mat-icon class="info-icon">info</mat-icon>\r
                                <span>{{ t("smartenroll.plans.extra_enroll_info_title") }}</span>\r
                            </div>\r
                            <mat-icon class="expand-icon" [class.expanded]="showExtraBioInfo">expand_more</mat-icon>\r
                        </div>\r
                        <div class="extra-bio-body" *ngIf="showExtraBioInfo">\r
                            <p>{{ t("smartenroll.plans.extra_enroll_explanation") }}</p>\r
                            <div class="extra-bio-costs">\r
                                <div class="bio-cost-item">\r
                                    <span>{{ t("smartenroll.plans.extra_enrollment") }}</span>\r
                                    <strong>{{ (getPlan(selectedPlan)?.meteredUnitPrice ?? getPlan(selectedPlan)?.unitPrice) | currency }} USD / {{ t("smartenroll.plans.enrollment") }}</strong>\r
                                </div>\r
                            </div>\r
                        </div>\r
                    </div>\r
\r
                    <!-- Action Button & Terms -->\r
                    <div class="checkout-actions">\r
                        <button\r
                            (click)="createOrUpdateSubscription()"\r
                            [disabled]="isCheckoutActionDisabled()"\r
                            class="checkout-button"\r
                            [ngClass]="selectedPlan"\r
                            mat-flat-button\r
                        >\r
                            <mat-spinner *ngIf="subscribingToPlan" diameter="20" class="mr-2"></mat-spinner>\r
                            {{\r
                                subscribingToPlan\r
                                    ? t("smartenroll.plans.processing")\r
                                    : selectedPlan === "free"\r
                                    ? t("smartenroll.plans.purchase_this_plan")\r
                                    : t(checkoutPrimaryActionKey())\r
                            }}\r
                        </button>\r
                        <p class="checkout-terms">\r
                            {{ t("smartenroll.plans.by_using_prefix") }}\r
                            <a [href]="termsAndConditionsUrl" target="_blank">{{ t("smartenroll.plans.terms_and_conditions") }}</a>\r
                        </p>\r
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SmartEnrollPlansComponent, { className: "SmartEnrollPlansComponent", filePath: "src/app/modules/smart-enroll/plans/smart-enroll-plans.component.ts", lineNumber: 90 });
})();
export {
  SmartEnrollPlansComponent
};
//# sourceMappingURL=chunk-TTPBJRGZ.js.map
