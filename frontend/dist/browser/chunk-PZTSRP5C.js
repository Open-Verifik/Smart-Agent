import {
  SmartEnrollPlansService,
  UsageQuotaBarComponent,
  UsageQuotaGaugeComponent,
  daysUntilReset
} from "./chunk-WHRMSH7I.js";
import {
  SmartEnrollProjectsService
} from "./chunk-G6Z2XQBQ.js";
import {
  requiresSmartEnrollSubscription
} from "./chunk-4SHMR3LD.js";
import {
  Clipboard,
  ClipboardModule
} from "./chunk-ZX47OHQM.js";
import {
  AuthRequiredGateService
} from "./chunk-QPU67QFB.js";
import {
  DateTime
} from "./chunk-KW3PRW6P.js";
import {
  MatSlideToggle,
  MatSlideToggleModule
} from "./chunk-YJBIUVPR.js";
import {
  docsPageUrl
} from "./chunk-RXDCTGUT.js";
import {
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger
} from "./chunk-YJ6YLDQV.js";
import "./chunk-4J4GSXOK.js";
import "./chunk-CM2VR6FV.js";
import "./chunk-4U26N45P.js";
import "./chunk-WIGHP2N4.js";
import "./chunk-JURKDGMK.js";
import "./chunk-RM2644J3.js";
import "./chunk-AICPTZP5.js";
import "./chunk-VURK6DEU.js";
import "./chunk-E7WYNRWC.js";
import "./chunk-HWNQWMK7.js";
import "./chunk-ZQKMV4NA.js";
import "./chunk-OJPCXVQ6.js";
import "./chunk-6VDSDVMZ.js";
import "./chunk-BCBZJBUY.js";
import "./chunk-WSS6AKQE.js";
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
  MatAnchor,
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
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  MaxLengthValidator,
  NgControlStatus,
  NgControlStatusGroup,
  PatternValidator,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-DVRFI3SJ.js";
import {
  TranslocoDirective,
  TranslocoModule,
  TranslocoPipe,
  TranslocoService
} from "./chunk-R5W3A6HI.js";
import {
  Router,
  RouterLink,
  RouterModule
} from "./chunk-HYFP557I.js";
import {
  environment
} from "./chunk-PMCYMBOC.js";
import {
  CommonModule,
  Component,
  Inject,
  Input,
  NgClass,
  NgIf,
  ViewEncapsulation,
  catchError,
  forkJoin,
  inject,
  of,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
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
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-PNPEHISK.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-F5M2C4EZ.js";

// src/app/modules/smart-enroll/plans/usage-quota-preview.component.ts
var _c0 = (a0) => ({ count: a0 });
var _c1 = (a0) => ({ days: a0 });
function UsageQuotaPreviewComponent_div_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 11);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2", 12);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 13);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 14);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r1("smartenroll.plans.usage.example"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r1("smartenroll.plans.usage.unlock_title", \u0275\u0275pureFunction1(4, _c0, ctx_r1.unlockCount)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r1("smartenroll.plans.usage.unlock_body"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r1("smartenroll.plans.usage.resets_monthly"));
  }
}
function UsageQuotaPreviewComponent_div_0_ng_template_3_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r1("smartenroll.plans.usage.resets_today"), " ");
  }
}
function UsageQuotaPreviewComponent_div_0_ng_template_3_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r1("smartenroll.plans.usage.resets_in_one"), " ");
  }
}
function UsageQuotaPreviewComponent_div_0_ng_template_3_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r1("smartenroll.plans.usage.resets_in", \u0275\u0275pureFunction1(1, _c1, ctx_r1.daysLeft)), " ");
  }
}
function UsageQuotaPreviewComponent_div_0_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p", 14);
    \u0275\u0275template(3, UsageQuotaPreviewComponent_div_0_ng_template_3_ng_container_3_Template, 2, 1, "ng-container", 16)(4, UsageQuotaPreviewComponent_div_0_ng_template_3_ng_container_4_Template, 2, 1, "ng-container", 16)(5, UsageQuotaPreviewComponent_div_0_ng_template_3_ng_container_5_Template, 2, 3, "ng-container", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r1("smartenroll.plans.usage.title"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.daysLeft === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.daysLeft === 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.daysLeft > 1);
  }
}
function UsageQuotaPreviewComponent_div_0_usage_quota_bar_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "usage-quota-bar", 6);
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("used", ctx_r1.plan.basicCount || 0)("limit", ctx_r1.plan.basicLimit || 0)("label", t_r1("smartenroll.plans.usage.basic"));
  }
}
function UsageQuotaPreviewComponent_div_0_a_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "open_in_new");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("href", ctx_r1.docsUrl, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r1("smartenroll.plans.usage.learn_more"), " ");
  }
}
function UsageQuotaPreviewComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "header", 3);
    \u0275\u0275template(2, UsageQuotaPreviewComponent_div_0_ng_container_2_Template, 9, 6, "ng-container", 4)(3, UsageQuotaPreviewComponent_div_0_ng_template_3_Template, 6, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 5);
    \u0275\u0275element(6, "usage-quota-gauge", 6)(7, "usage-quota-gauge", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 7);
    \u0275\u0275element(9, "usage-quota-bar", 6)(10, "usage-quota-bar", 6)(11, "usage-quota-bar", 6);
    \u0275\u0275template(12, UsageQuotaPreviewComponent_div_0_usage_quota_bar_12_Template, 1, 3, "usage-quota-bar", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "a", 9);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, UsageQuotaPreviewComponent_div_0_a_15_Template, 4, 2, "a", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r1 = ctx.$implicit;
    const liveHead_r3 = \u0275\u0275reference(4);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("usage-preview--demo", ctx_r1.demo);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.demo)("ngIfElse", liveHead_r3);
    \u0275\u0275advance(4);
    \u0275\u0275property("used", ctx_r1.enrollUsed)("limit", ctx_r1.enrollLimit)("label", t_r1(ctx_r1.enrollLabelKey));
    \u0275\u0275advance();
    \u0275\u0275property("used", ctx_r1.plan.scanDocsCount || 0)("limit", ctx_r1.plan.scanDocsLimit || 0)("label", t_r1("smartenroll.plans.usage.scans"));
    \u0275\u0275advance(2);
    \u0275\u0275property("used", ctx_r1.plan.validateNamesCount || 0)("limit", ctx_r1.plan.validateNamesLimit || 0)("label", t_r1("smartenroll.plans.usage.names"));
    \u0275\u0275advance();
    \u0275\u0275property("used", ctx_r1.plan.backgroundCheckCount || 0)("limit", ctx_r1.plan.backgroundCheckLimit || 0)("label", t_r1("smartenroll.plans.usage.background"));
    \u0275\u0275advance();
    \u0275\u0275property("used", ctx_r1.plan.emailCount || 0)("limit", ctx_r1.plan.emailsLimit || 0)("label", t_r1("smartenroll.plans.usage.emails"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showBasicBar);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.demo ? t_r1("smartEnrollProjects.goToPlans") : t_r1("smartenroll.plans.usage.preview_cta"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.demo);
  }
}
var UsageQuotaPreviewComponent = class _UsageQuotaPreviewComponent {
  constructor() {
    this._transloco = inject(TranslocoService);
    this.demo = false;
  }
  get usesBiometrics() {
    return (Number(this.plan?.biometricsLimit) || 0) > 0;
  }
  get enrollUsed() {
    return this.usesBiometrics ? Number(this.plan?.biometricsCount) || 0 : Number(this.plan?.basicCount) || 0;
  }
  get enrollLimit() {
    return this.usesBiometrics ? Number(this.plan?.biometricsLimit) || 0 : Number(this.plan?.basicLimit) || 0;
  }
  get enrollLabelKey() {
    return this.usesBiometrics ? "smartenroll.plans.usage.biometrics" : "smartenroll.plans.usage.basic";
  }
  get daysLeft() {
    return daysUntilReset(this.plan?.endDate);
  }
  get unlockCount() {
    return this.enrollLimit || 100;
  }
  get showBasicBar() {
    return this.usesBiometrics && (Number(this.plan?.basicLimit) || 0) > 0;
  }
  get docsUrl() {
    const path = this._transloco.getActiveLang() === "es" ? "/verifik-es/services/smart-enroll" : "/services/smart-enroll";
    return docsPageUrl(path);
  }
  static {
    this.\u0275fac = function UsageQuotaPreviewComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UsageQuotaPreviewComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UsageQuotaPreviewComponent, selectors: [["usage-quota-preview"]], inputs: { plan: "plan", demo: "demo" }, decls: 1, vars: 0, consts: [["liveHead", ""], ["class", "usage-preview dark:!border-white/10 dark:!bg-gradient-to-b dark:!from-[#11122a] dark:!to-[#161828] dark:shadow-black/20", 3, "usage-preview--demo", 4, "transloco"], [1, "usage-preview", "dark:!border-white/10", "dark:!bg-gradient-to-b", "dark:!from-[#11122a]", "dark:!to-[#161828]", "dark:shadow-black/20"], [1, "usage-preview__head"], [4, "ngIf", "ngIfElse"], [1, "usage-preview__gauges"], [3, "used", "limit", "label"], [1, "usage-preview__bars"], [3, "used", "limit", "label", 4, "ngIf"], ["mat-flat-button", "", "color", "primary", "routerLink", "/smart-enroll/plans", 1, "usage-preview__button"], ["class", "usage-preview__learn dark:!text-slate-300 hover:dark:!text-blue-300", "target", "_blank", "rel", "noopener noreferrer", 3, "href", 4, "ngIf"], [1, "usage-preview__chip", "dark:!bg-blue-600/20", "dark:!text-blue-300"], [1, "usage-preview__title", "dark:!text-slate-50"], [1, "usage-preview__body", "dark:!text-slate-400"], [1, "usage-preview__reset", "dark:!text-blue-300"], [1, "usage-preview__eyebrow", "dark:!text-slate-400"], [4, "ngIf"], ["target", "_blank", "rel", "noopener noreferrer", 1, "usage-preview__learn", "dark:!text-slate-300", "hover:dark:!text-blue-300", 3, "href"]], template: function UsageQuotaPreviewComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, UsageQuotaPreviewComponent_div_0_Template, 16, 22, "div", 1);
      }
    }, dependencies: [
      CommonModule,
      NgIf,
      RouterModule,
      RouterLink,
      MatButtonModule,
      MatAnchor,
      MatIconModule,
      MatIcon,
      TranslocoModule,
      TranslocoDirective,
      UsageQuotaGaugeComponent,
      UsageQuotaBarComponent
    ], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.usage-preview[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.1rem;\n  padding: 1.25rem 1.3rem 1.35rem;\n  background: #fff;\n  border: 1px solid rgb(229, 231, 235);\n  border-radius: 16px;\n}\n.usage-preview__head[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 0.35rem;\n}\n.usage-preview__chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  margin-bottom: 0.25rem;\n  padding: 0.15rem 0.5rem;\n  border-radius: 999px;\n  background: rgb(239, 246, 255);\n  color: rgb(37, 99, 235);\n  font-size: 0.6875rem;\n  font-weight: 700;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n}\n.usage-preview__eyebrow[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.8125rem;\n  font-weight: 600;\n  color: rgb(107, 114, 128);\n}\n.usage-preview__title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.2rem;\n  font-weight: 700;\n  letter-spacing: -0.03em;\n  color: rgb(17, 24, 39);\n  line-height: 1.3;\n}\n.usage-preview__body[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  color: rgb(107, 114, 128);\n}\n.usage-preview__reset[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.9375rem;\n  font-weight: 700;\n  color: rgb(37, 99, 235);\n}\n.usage-preview__gauges[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.75rem;\n}\n.usage-preview__bars[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.85rem;\n}\n.usage-preview--demo[_ngcontent-%COMP%]   .usage-preview__gauges[_ngcontent-%COMP%], \n.usage-preview--demo[_ngcontent-%COMP%]   .usage-preview__bars[_ngcontent-%COMP%] {\n  opacity: 0.72;\n}\n.usage-preview__button[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 12px;\n}\n.usage-preview__learn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  align-self: center;\n  gap: 4px;\n  font-size: 0.8125rem;\n  font-weight: 600;\n  color: rgb(55, 65, 81);\n  text-decoration: none;\n}\n.usage-preview__learn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.usage-preview__learn[_ngcontent-%COMP%]:hover {\n  color: rgb(37, 99, 235);\n}\n@media (max-width: 520px) {\n  .usage-preview__gauges[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.dark[_nghost-%COMP%]   .usage-preview[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .usage-preview[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      #11122a 0%,\n      #161828 100%);\n  border-color: rgba(255, 255, 255, 0.1);\n  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.2);\n}\n.dark[_nghost-%COMP%]   .usage-preview__chip[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .usage-preview__chip[_ngcontent-%COMP%] {\n  background: rgba(37, 99, 235, 0.2);\n  color: rgb(147, 197, 253);\n}\n.dark[_nghost-%COMP%]   .usage-preview__eyebrow[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .usage-preview__eyebrow[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .usage-preview__body[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .usage-preview__body[_ngcontent-%COMP%] {\n  color: rgb(148, 163, 184);\n}\n.dark[_nghost-%COMP%]   .usage-preview__title[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .usage-preview__title[_ngcontent-%COMP%] {\n  color: #f8fafc;\n}\n.dark[_nghost-%COMP%]   .usage-preview__reset[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .usage-preview__reset[_ngcontent-%COMP%] {\n  color: rgb(147, 197, 253);\n}\n.dark[_nghost-%COMP%]   .usage-preview__learn[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .usage-preview__learn[_ngcontent-%COMP%] {\n  color: rgb(203, 213, 225);\n}\n.dark[_nghost-%COMP%]   .usage-preview__learn[_ngcontent-%COMP%]:hover, .dark   [_nghost-%COMP%]   .usage-preview__learn[_ngcontent-%COMP%]:hover {\n  color: rgb(147, 197, 253);\n}\n/*# sourceMappingURL=usage-quota-preview.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UsageQuotaPreviewComponent, [{
    type: Component,
    args: [{ selector: "usage-quota-preview", standalone: true, imports: [
      CommonModule,
      RouterModule,
      MatButtonModule,
      MatIconModule,
      TranslocoModule,
      UsageQuotaGaugeComponent,
      UsageQuotaBarComponent
    ], template: `<div\r
    class="usage-preview dark:!border-white/10 dark:!bg-gradient-to-b dark:!from-[#11122a] dark:!to-[#161828] dark:shadow-black/20"\r
    [class.usage-preview--demo]="demo"\r
    *transloco="let t"\r
>\r
    <header class="usage-preview__head">\r
        <ng-container *ngIf="demo; else liveHead">\r
            <span class="usage-preview__chip dark:!bg-blue-600/20 dark:!text-blue-300">{{\r
                t("smartenroll.plans.usage.example")\r
            }}</span>\r
            <h2 class="usage-preview__title dark:!text-slate-50">\r
                {{ t("smartenroll.plans.usage.unlock_title", { count: unlockCount }) }}\r
            </h2>\r
            <p class="usage-preview__body dark:!text-slate-400">{{ t("smartenroll.plans.usage.unlock_body") }}</p>\r
            <p class="usage-preview__reset dark:!text-blue-300">{{ t("smartenroll.plans.usage.resets_monthly") }}</p>\r
        </ng-container>\r
        <ng-template #liveHead>\r
            <p class="usage-preview__eyebrow dark:!text-slate-400">{{ t("smartenroll.plans.usage.title") }}</p>\r
            <p class="usage-preview__reset dark:!text-blue-300">\r
                <ng-container *ngIf="daysLeft === 0">\r
                    {{ t("smartenroll.plans.usage.resets_today") }}\r
                </ng-container>\r
                <ng-container *ngIf="daysLeft === 1">\r
                    {{ t("smartenroll.plans.usage.resets_in_one") }}\r
                </ng-container>\r
                <ng-container *ngIf="daysLeft > 1">\r
                    {{ t("smartenroll.plans.usage.resets_in", { days: daysLeft }) }}\r
                </ng-container>\r
            </p>\r
        </ng-template>\r
    </header>\r
\r
    <div class="usage-preview__gauges">\r
        <usage-quota-gauge\r
            [used]="enrollUsed"\r
            [limit]="enrollLimit"\r
            [label]="t(enrollLabelKey)"\r
        ></usage-quota-gauge>\r
        <usage-quota-gauge\r
            [used]="plan.scanDocsCount || 0"\r
            [limit]="plan.scanDocsLimit || 0"\r
            [label]="t('smartenroll.plans.usage.scans')"\r
        ></usage-quota-gauge>\r
    </div>\r
\r
    <div class="usage-preview__bars">\r
        <usage-quota-bar\r
            [used]="plan.validateNamesCount || 0"\r
            [limit]="plan.validateNamesLimit || 0"\r
            [label]="t('smartenroll.plans.usage.names')"\r
        ></usage-quota-bar>\r
        <usage-quota-bar\r
            [used]="plan.backgroundCheckCount || 0"\r
            [limit]="plan.backgroundCheckLimit || 0"\r
            [label]="t('smartenroll.plans.usage.background')"\r
        ></usage-quota-bar>\r
        <usage-quota-bar\r
            [used]="plan.emailCount || 0"\r
            [limit]="plan.emailsLimit || 0"\r
            [label]="t('smartenroll.plans.usage.emails')"\r
        ></usage-quota-bar>\r
        <usage-quota-bar\r
            *ngIf="showBasicBar"\r
            [used]="plan.basicCount || 0"\r
            [limit]="plan.basicLimit || 0"\r
            [label]="t('smartenroll.plans.usage.basic')"\r
        ></usage-quota-bar>\r
    </div>\r
\r
    <a mat-flat-button color="primary" routerLink="/smart-enroll/plans" class="usage-preview__button">\r
        {{ demo ? t("smartEnrollProjects.goToPlans") : t("smartenroll.plans.usage.preview_cta") }}\r
    </a>\r
    <a\r
        *ngIf="demo"\r
        class="usage-preview__learn dark:!text-slate-300 hover:dark:!text-blue-300"\r
        [href]="docsUrl"\r
        target="_blank"\r
        rel="noopener noreferrer"\r
    >\r
        {{ t("smartenroll.plans.usage.learn_more") }}\r
        <mat-icon>open_in_new</mat-icon>\r
    </a>\r
</div>\r
`, styles: ["/* src/app/modules/smart-enroll/plans/usage-quota-preview.component.scss */\n:host {\n  display: block;\n}\n.usage-preview {\n  display: flex;\n  flex-direction: column;\n  gap: 1.1rem;\n  padding: 1.25rem 1.3rem 1.35rem;\n  background: #fff;\n  border: 1px solid rgb(229, 231, 235);\n  border-radius: 16px;\n}\n.usage-preview__head {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 0.35rem;\n}\n.usage-preview__chip {\n  display: inline-flex;\n  margin-bottom: 0.25rem;\n  padding: 0.15rem 0.5rem;\n  border-radius: 999px;\n  background: rgb(239, 246, 255);\n  color: rgb(37, 99, 235);\n  font-size: 0.6875rem;\n  font-weight: 700;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n}\n.usage-preview__eyebrow {\n  margin: 0;\n  font-size: 0.8125rem;\n  font-weight: 600;\n  color: rgb(107, 114, 128);\n}\n.usage-preview__title {\n  margin: 0;\n  font-size: 1.2rem;\n  font-weight: 700;\n  letter-spacing: -0.03em;\n  color: rgb(17, 24, 39);\n  line-height: 1.3;\n}\n.usage-preview__body {\n  margin: 0;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  color: rgb(107, 114, 128);\n}\n.usage-preview__reset {\n  margin: 0;\n  font-size: 0.9375rem;\n  font-weight: 700;\n  color: rgb(37, 99, 235);\n}\n.usage-preview__gauges {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.75rem;\n}\n.usage-preview__bars {\n  display: flex;\n  flex-direction: column;\n  gap: 0.85rem;\n}\n.usage-preview--demo .usage-preview__gauges,\n.usage-preview--demo .usage-preview__bars {\n  opacity: 0.72;\n}\n.usage-preview__button {\n  width: 100%;\n  border-radius: 12px;\n}\n.usage-preview__learn {\n  display: inline-flex;\n  align-items: center;\n  align-self: center;\n  gap: 4px;\n  font-size: 0.8125rem;\n  font-weight: 600;\n  color: rgb(55, 65, 81);\n  text-decoration: none;\n}\n.usage-preview__learn mat-icon {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.usage-preview__learn:hover {\n  color: rgb(37, 99, 235);\n}\n@media (max-width: 520px) {\n  .usage-preview__gauges {\n    grid-template-columns: 1fr;\n  }\n}\n:host-context(.dark) .usage-preview {\n  background:\n    linear-gradient(\n      180deg,\n      #11122a 0%,\n      #161828 100%);\n  border-color: rgba(255, 255, 255, 0.1);\n  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.2);\n}\n:host-context(.dark) .usage-preview__chip {\n  background: rgba(37, 99, 235, 0.2);\n  color: rgb(147, 197, 253);\n}\n:host-context(.dark) .usage-preview__eyebrow,\n:host-context(.dark) .usage-preview__body {\n  color: rgb(148, 163, 184);\n}\n:host-context(.dark) .usage-preview__title {\n  color: #f8fafc;\n}\n:host-context(.dark) .usage-preview__reset {\n  color: rgb(147, 197, 253);\n}\n:host-context(.dark) .usage-preview__learn {\n  color: rgb(203, 213, 225);\n}\n:host-context(.dark) .usage-preview__learn:hover {\n  color: rgb(147, 197, 253);\n}\n/*# sourceMappingURL=usage-quota-preview.component.css.map */\n"] }]
  }], null, { plan: [{
    type: Input,
    args: [{ required: true }]
  }], demo: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UsageQuotaPreviewComponent, { className: "UsageQuotaPreviewComponent", filePath: "src/app/modules/smart-enroll/plans/usage-quota-preview.component.ts", lineNumber: 43 });
})();

// src/app/modules/smart-enroll/projects/project-security-modal/project-security-modal.component.ts
function ProjectSecurityModalComponent_div_0_Conditional_17_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.securitySettings.validated"), " ");
  }
}
function ProjectSecurityModalComponent_div_0_Conditional_17_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.securitySettings.otpHelperExisting"), " ");
  }
}
function ProjectSecurityModalComponent_div_0_Conditional_17_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.securitySettings.otpHelperNew"), " ");
  }
}
function ProjectSecurityModalComponent_div_0_Conditional_17_Conditional_10_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.securitySettings.otpRequired"), " ");
  }
}
function ProjectSecurityModalComponent_div_0_Conditional_17_Conditional_10_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.securitySettings.otpInvalid"), " ");
  }
}
function ProjectSecurityModalComponent_div_0_Conditional_17_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ProjectSecurityModalComponent_div_0_Conditional_17_Conditional_10_Conditional_0_Template, 2, 1, "p", 30)(1, ProjectSecurityModalComponent_div_0_Conditional_17_Conditional_10_Conditional_1_Template, 2, 1, "p", 30);
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(((tmp_4_0 = ctx_r1.form.get("demoOTP")) == null ? null : tmp_4_0.hasError("required")) ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_5_0 = ctx_r1.form.get("demoOTP")) == null ? null : tmp_5_0.hasError("pattern")) ? 1 : -1);
  }
}
function ProjectSecurityModalComponent_div_0_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 14)(1, "div", 20)(2, "label", 21);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, ProjectSecurityModalComponent_div_0_Conditional_17_Conditional_4_Template, 2, 1, "span", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 23)(6, "input", 24);
    \u0275\u0275listener("input", function ProjectSecurityModalComponent_div_0_Conditional_17_Template_input_input_6_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onOTPInput($event));
    })("blur", function ProjectSecurityModalComponent_div_0_Conditional_17_Template_input_blur_6_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onOTPBlur());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "p", 25);
    \u0275\u0275template(8, ProjectSecurityModalComponent_div_0_Conditional_17_Conditional_8_Template, 1, 1)(9, ProjectSecurityModalComponent_div_0_Conditional_17_Conditional_9_Template, 1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, ProjectSecurityModalComponent_div_0_Conditional_17_Conditional_10_Template, 2, 2);
    \u0275\u0275elementStart(11, "div", 26)(12, "mat-icon", 27);
    \u0275\u0275text(13, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 8)(15, "p", 28);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "ul", 29)(18, "li");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "li");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "li");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_8_0;
    const t_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.securitySettings.otpLabel"), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r1.data.project == null ? null : ctx_r1.data.project.demoOTP) ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("tracking-[0", !!((tmp_5_0 = ctx_r1.form.get("demoOTP")) == null ? null : tmp_5_0.value) && ((tmp_5_0 = ctx_r1.form.get("demoOTP")) == null ? null : tmp_5_0.value) !== "******");
    \u0275\u0275property("placeholder", t_r4(ctx_r1.otpPlaceholder));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.hasExistingOTP ? 8 : 9);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(((tmp_8_0 = ctx_r1.form.get("demoOTP")) == null ? null : tmp_8_0.invalid) && ((tmp_8_0 = ctx_r1.form.get("demoOTP")) == null ? null : tmp_8_0.touched) ? 10 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.securitySettings.otpInfoTitle"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r4("smartEnrollProjects.securitySettings.otpInfo1"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4("smartEnrollProjects.securitySettings.otpInfo2"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4("smartEnrollProjects.securitySettings.otpInfo3"));
  }
}
function ProjectSecurityModalComponent_div_0_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "mat-icon", 31);
    \u0275\u0275text(2, "lock");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 8)(4, "p", 9);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 32);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.securitySettings.demoModeDisabledTitle"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.securitySettings.demoModeDisabledDescription"), " ");
  }
}
function ProjectSecurityModalComponent_div_0_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 19);
  }
}
function ProjectSecurityModalComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "header", 2)(2, "h2", 3);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 4);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-dialog-content", 5)(7, "form", 6)(8, "div", 7)(9, "div", 8)(10, "p", 9);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 10);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "label", 11)(15, "input", 12);
    \u0275\u0275listener("change", function ProjectSecurityModalComponent_div_0_Template_input_change_15_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDemoModeToggle());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "span", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(17, ProjectSecurityModalComponent_div_0_Conditional_17_Template, 24, 11, "section", 14)(18, ProjectSecurityModalComponent_div_0_Conditional_18_Template, 8, 2, "div", 15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 16)(20, "button", 17);
    \u0275\u0275listener("click", function ProjectSecurityModalComponent_div_0_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCancel());
    });
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 18);
    \u0275\u0275listener("click", function ProjectSecurityModalComponent_div_0_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSave());
    });
    \u0275\u0275template(23, ProjectSecurityModalComponent_div_0_Conditional_23_Template, 1, 0, "mat-spinner", 19);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const t_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.securitySettings.title"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.securitySettings.description"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.isDemoModeEnabled ? "border-indigo-400 bg-indigo-50/50 ring-2 ring-indigo-500/20 dark:border-indigo-400 dark:bg-indigo-950/20 dark:ring-indigo-400/20" : "border-stone-200 bg-stone-50/50 dark:border-gray-700 dark:bg-gray-950/50");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.securitySettings.demoModeTitle"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.securitySettings.demoModeDescription"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.isDemoModeEnabled ? 17 : 18);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.isUpdating);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.securitySettings.cancel"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.isFormValid || !ctx_r1.hasChanges || ctx_r1.isUpdating);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isUpdating ? 23 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.securitySettings.save"), " ");
  }
}
var PROJECT_SECURITY_DIALOG_PANEL_CLASS = "project-security-dialog-panel";
var ProjectSecurityModalComponent = class _ProjectSecurityModalComponent {
  constructor(data) {
    this.data = data;
    this._fb = inject(FormBuilder);
    this._projectsService = inject(SmartEnrollProjectsService);
    this._dialogRef = inject(MatDialogRef);
    this.isDemoModeEnabled = false;
    this.isUpdating = false;
    this.hasExistingOTP = false;
    this.form = this._fb.group({
      demoMode: [this.data.project?.demoMode ?? false],
      demoOTP: ["", [Validators.pattern(/^\d{6}$/)]]
    });
  }
  ngOnInit() {
    this.isDemoModeEnabled = this.data.project?.demoMode ?? false;
    this.hasExistingOTP = !!this.data.project?.demoOTP;
    setTimeout(() => {
      this.form.patchValue({
        demoMode: this.isDemoModeEnabled,
        demoOTP: this.hasExistingOTP ? "******" : ""
      });
      this._updateOTPState();
    }, 0);
  }
  onDemoModeToggle() {
    this.isDemoModeEnabled = this.form.get("demoMode")?.value;
    this._updateOTPState();
    if (!this.isDemoModeEnabled) {
      this.form.patchValue({ demoOTP: "" });
      this.hasExistingOTP = false;
    }
  }
  onOTPInput(event) {
    const input = event.target;
    const digitsOnly = input.value.replace(/\D/g, "").slice(0, 6);
    this.form.patchValue({ demoOTP: digitsOnly });
    if (this.hasExistingOTP && digitsOnly.length > 0 && digitsOnly !== "******") {
      this.hasExistingOTP = false;
    }
  }
  onOTPBlur() {
    const otpValue = this.form.get("demoOTP")?.value;
    if (!otpValue && this.data.project?.demoOTP) {
      this.form.patchValue({ demoOTP: "******" });
      this.hasExistingOTP = true;
    }
  }
  get otpPlaceholder() {
    return this.hasExistingOTP ? "smartEnrollProjects.securitySettings.otpPlaceholderExisting" : "smartEnrollProjects.securitySettings.otpPlaceholderNew";
  }
  get isFormValid() {
    if (!this.isDemoModeEnabled)
      return true;
    const otpValue = this.form.get("demoOTP")?.value;
    if (this.hasExistingOTP && otpValue === "******")
      return true;
    return otpValue?.length === 6 && /^\d{6}$/.test(otpValue);
  }
  get hasChanges() {
    const currentMode = this.form.get("demoMode")?.value;
    const previousMode = this.data.project?.demoMode ?? false;
    if (currentMode !== previousMode)
      return true;
    if (currentMode) {
      const currentOTP = this.form.get("demoOTP")?.value;
      if (this.hasExistingOTP && currentOTP === "******")
        return false;
      return currentOTP !== (this.data.project?.demoOTP ?? "");
    }
    return false;
  }
  onSave() {
    if (!this.isFormValid)
      return;
    this.isUpdating = true;
    const formData = this.form.value;
    const payload = {
      _id: this.data.project._id,
      name: this.data.project.name,
      demoMode: formData.demoMode,
      demoOTP: formData.demoMode && formData.demoOTP !== "******" ? formData.demoOTP : this.data.project.demoOTP
    };
    this._projectsService.updateProject(this.data.project._id, payload).subscribe({
      next: (response) => {
        this.data.project = response.data;
        this.isUpdating = false;
        this._dialogRef.close(true);
      },
      error: () => {
        this.isUpdating = false;
      }
    });
  }
  onCancel() {
    this._dialogRef.close(false);
  }
  _updateOTPState() {
    const otpControl = this.form.get("demoOTP");
    if (this.isDemoModeEnabled) {
      otpControl?.enable();
      otpControl?.setValidators([Validators.required, Validators.pattern(/^\d{6}$/)]);
    } else {
      otpControl?.disable();
      otpControl?.clearValidators();
    }
    otpControl?.updateValueAndValidity();
  }
  static {
    this.\u0275fac = function ProjectSecurityModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProjectSecurityModalComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProjectSecurityModalComponent, selectors: [["app-project-security-modal"]], decls: 1, vars: 0, consts: [["class", "flex w-full max-w-lg flex-col overflow-hidden rounded-2xl border border-stone-200/90 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900/70", 4, "transloco"], [1, "flex", "w-full", "max-w-lg", "flex-col", "overflow-hidden", "rounded-2xl", "border", "border-stone-200/90", "bg-white", "shadow-sm", "dark:border-gray-800", "dark:bg-gray-900/70"], [1, "border-b", "border-stone-200/90", "px-5", "py-5", "dark:border-gray-800", "md:p-6"], [1, "text-xl", "font-semibold", "tracking-tight", "text-stone-950", "dark:text-white"], [1, "mt-2", "text-sm", "leading-6", "text-stone-500", "dark:text-stone-400"], [1, "!flex", "!max-h-[min(62vh,520px)]", "!flex-col", "!gap-5", "!overflow-y-auto", "px-5", "py-5", "dark:text-stone-100", "md:p-6"], [1, "flex", "flex-col", "gap-5", 3, "formGroup"], [1, "flex", "items-center", "justify-between", "gap-4", "rounded-xl", "border", "px-4", "py-3", "transition", 3, "ngClass"], [1, "min-w-0"], [1, "text-sm", "font-semibold", "text-stone-950", "dark:text-white"], [1, "mt-0.5", "text-xs", "leading-relaxed", "text-stone-500", "dark:text-stone-400"], [1, "relative", "inline-flex", "shrink-0", "cursor-pointer", "items-center"], ["type", "checkbox", "formControlName", "demoMode", 1, "peer", "sr-only", 3, "change"], [1, "relative", "h-6", "w-11", "rounded-full", "bg-stone-300", "transition", "peer-checked:bg-indigo-600", "peer-focus-visible:ring-2", "peer-focus-visible:ring-indigo-500/40", "after:absolute", "after:left-[2px]", "after:top-[2px]", "after:h-5", "after:w-5", "after:rounded-full", "after:bg-white", "after:transition-all", "after:content-['']", "peer-checked:after:translate-x-5", "dark:bg-gray-600", "dark:peer-checked:bg-indigo-500"], [1, "flex", "flex-col", "gap-3"], [1, "flex", "gap-3", "rounded-xl", "border", "border-dashed", "border-stone-200", "px-4", "py-4", "dark:border-gray-700"], [1, "flex", "flex-col-reverse", "gap-2", "border-t", "border-stone-200/90", "px-5", "py-4", "dark:border-gray-800", "sm:flex-row", "sm:justify-end", "sm:gap-3", "md:px-6"], ["mat-stroked-button", "", "type", "button", 1, "!min-h-11", "w-full", "!rounded-xl", "!border-stone-200", "!font-medium", "sm:w-auto", "dark:!border-gray-700", 3, "click", "disabled"], ["mat-flat-button", "", "color", "primary", "type", "button", 1, "flex", "!min-h-11", "w-full", "shrink-0", "items-center", "justify-center", "gap-2", "!rounded-xl", "px-5", "sm:w-auto", 3, "click", "disabled"], ["diameter", "20", 1, "inline-block"], [1, "flex", "flex-wrap", "items-center", "justify-between", "gap-2"], ["for", "demo-otp", 1, "text-sm", "font-semibold", "text-stone-950", "dark:text-white"], [1, "shrink-0", "rounded-md", "bg-emerald-50", "px-2", "py-0.5", "text-[11px]", "font-semibold", "uppercase", "tracking-wide", "text-emerald-700", "dark:bg-emerald-950/40", "dark:text-emerald-400"], [1, "flex", "items-center", "justify-center", "rounded-xl", "border", "border-stone-200", "bg-stone-50/80", "px-4", "py-3", "focus-within:border-indigo-400", "focus-within:ring-2", "focus-within:ring-indigo-500/20", "dark:border-gray-700", "dark:bg-gray-950/50", "dark:focus-within:border-indigo-400", "dark:focus-within:ring-indigo-400/20"], ["id", "demo-otp", "type", "text", "inputmode", "numeric", "pattern", "[0-9]*", "maxlength", "6", "formControlName", "demoOTP", 1, "min-w-0", "w-full", "border-0", "bg-transparent", "text-center", "font-mono", "text-lg", "font-semibold", "text-stone-950", "outline-none", "placeholder:text-sm", "placeholder:font-normal", "placeholder:tracking-normal", "placeholder:text-stone-400", "dark:text-white", "dark:placeholder:text-stone-500", 3, "input", "blur", "placeholder"], [1, "text-xs", "leading-relaxed", "text-stone-500", "dark:text-stone-400"], [1, "flex", "gap-3", "rounded-xl", "border", "border-stone-200/90", "bg-stone-50", "px-4", "py-3", "text-sm", "dark:border-gray-700", "dark:bg-gray-950/50"], [1, "shrink-0", "text-stone-500", "dark:text-stone-400", 2, "font-size", "20px", "width", "20px", "height", "20px"], [1, "m-0", "text-sm", "font-semibold", "text-stone-950", "dark:text-white"], [1, "mt-2", "space-y-1.5", "text-xs", "leading-relaxed", "text-stone-600", "dark:text-stone-400"], [1, "text-xs", "text-red-600", "dark:text-red-400"], [1, "shrink-0", "text-stone-400", "dark:text-stone-500", 2, "font-size", "20px", "width", "20px", "height", "20px"], [1, "mt-1", "text-xs", "leading-relaxed", "text-stone-500", "dark:text-stone-400"]], template: function ProjectSecurityModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, ProjectSecurityModalComponent_div_0_Template, 25, 12, "div", 0);
      }
    }, dependencies: [CommonModule, NgClass, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, PatternValidator, FormGroupDirective, FormControlName, MatButtonModule, MatButton, MatDialogModule, MatDialogContent, MatIconModule, MatIcon, MatProgressSpinnerModule, MatProgressSpinner, TranslocoModule, TranslocoDirective], styles: ["/* src/app/modules/smart-enroll/projects/project-security-modal/project-security-modal.component.scss */\n.project-security-dialog-panel.cdk-overlay-pane {\n  max-width: min(600px, 94vw);\n}\n.project-security-dialog-panel .mat-mdc-dialog-container {\n  padding: 0 !important;\n  overflow: hidden;\n  border-radius: 1rem;\n}\n.project-security-dialog-panel .mat-mdc-dialog-surface {\n  border-radius: 1rem !important;\n  overflow: hidden;\n  background: transparent !important;\n  box-shadow: 0 4px 6px -1px rgba(15, 23, 42, 0.08), 0 2px 4px -2px rgba(15, 23, 42, 0.08);\n}\n.dark .project-security-dialog-panel .mat-mdc-dialog-surface {\n  box-shadow: 0 8px 24px -4px rgba(0, 0, 0, 0.45), 0 4px 8px -4px rgba(0, 0, 0, 0.35);\n}\n/*# sourceMappingURL=project-security-modal.component.css.map */\n"], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProjectSecurityModalComponent, [{
    type: Component,
    args: [{ selector: "app-project-security-modal", standalone: true, imports: [
      CommonModule,
      ReactiveFormsModule,
      MatButtonModule,
      MatDialogModule,
      MatIconModule,
      MatProgressSpinnerModule,
      TranslocoModule
    ], encapsulation: ViewEncapsulation.None, template: `<div\r
    class="flex w-full max-w-lg flex-col overflow-hidden rounded-2xl border border-stone-200/90 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900/70"\r
    *transloco="let t"\r
>\r
    <header class="border-b border-stone-200/90 px-5 py-5 dark:border-gray-800 md:p-6">\r
        <h2 class="text-xl font-semibold tracking-tight text-stone-950 dark:text-white">\r
            {{ t('smartEnrollProjects.securitySettings.title') }}\r
        </h2>\r
        <p class="mt-2 text-sm leading-6 text-stone-500 dark:text-stone-400">\r
            {{ t('smartEnrollProjects.securitySettings.description') }}\r
        </p>\r
    </header>\r
\r
    <mat-dialog-content class="!flex !max-h-[min(62vh,520px)] !flex-col !gap-5 !overflow-y-auto px-5 py-5 dark:text-stone-100 md:p-6">\r
        <form [formGroup]="form" class="flex flex-col gap-5">\r
            <!-- Demo mode toggle (auto-recharge pattern) -->\r
            <div\r
                class="flex items-center justify-between gap-4 rounded-xl border px-4 py-3 transition"\r
                [ngClass]="\r
                    isDemoModeEnabled\r
                        ? 'border-indigo-400 bg-indigo-50/50 ring-2 ring-indigo-500/20 dark:border-indigo-400 dark:bg-indigo-950/20 dark:ring-indigo-400/20'\r
                        : 'border-stone-200 bg-stone-50/50 dark:border-gray-700 dark:bg-gray-950/50'\r
                "\r
            >\r
                <div class="min-w-0">\r
                    <p class="text-sm font-semibold text-stone-950 dark:text-white">\r
                        {{ t('smartEnrollProjects.securitySettings.demoModeTitle') }}\r
                    </p>\r
                    <p class="mt-0.5 text-xs leading-relaxed text-stone-500 dark:text-stone-400">\r
                        {{ t('smartEnrollProjects.securitySettings.demoModeDescription') }}\r
                    </p>\r
                </div>\r
                <label class="relative inline-flex shrink-0 cursor-pointer items-center">\r
                    <input\r
                        type="checkbox"\r
                        class="peer sr-only"\r
                        formControlName="demoMode"\r
                        (change)="onDemoModeToggle()"\r
                    />\r
                    <span\r
                        class="relative h-6 w-11 rounded-full bg-stone-300 transition peer-checked:bg-indigo-600 peer-focus-visible:ring-2 peer-focus-visible:ring-indigo-500/40 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-5 dark:bg-gray-600 dark:peer-checked:bg-indigo-500"\r
                    ></span>\r
                </label>\r
            </div>\r
\r
            @if (isDemoModeEnabled) {\r
                <section class="flex flex-col gap-3">\r
                    <div class="flex flex-wrap items-center justify-between gap-2">\r
                        <label class="text-sm font-semibold text-stone-950 dark:text-white" for="demo-otp">\r
                            {{ t('smartEnrollProjects.securitySettings.otpLabel') }}\r
                        </label>\r
                        @if (data.project?.demoOTP) {\r
                            <span\r
                                class="shrink-0 rounded-md bg-emerald-50 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400"\r
                            >\r
                                {{ t('smartEnrollProjects.securitySettings.validated') }}\r
                            </span>\r
                        }\r
                    </div>\r
\r
                    <div\r
                        class="flex items-center justify-center rounded-xl border border-stone-200 bg-stone-50/80 px-4 py-3 focus-within:border-indigo-400 focus-within:ring-2 focus-within:ring-indigo-500/20 dark:border-gray-700 dark:bg-gray-950/50 dark:focus-within:border-indigo-400 dark:focus-within:ring-indigo-400/20"\r
                    >\r
                        <input\r
                            id="demo-otp"\r
                            type="text"\r
                            inputmode="numeric"\r
                            pattern="[0-9]*"\r
                            maxlength="6"\r
                            formControlName="demoOTP"\r
                            [placeholder]="t(otpPlaceholder)"\r
                            (input)="onOTPInput($event)"\r
                            (blur)="onOTPBlur()"\r
                            class="min-w-0 w-full border-0 bg-transparent text-center font-mono text-lg font-semibold text-stone-950 outline-none placeholder:text-sm placeholder:font-normal placeholder:tracking-normal placeholder:text-stone-400 dark:text-white dark:placeholder:text-stone-500"\r
                            [class.tracking-[0.35em]]="!!form.get('demoOTP')?.value && form.get('demoOTP')?.value !== '******'"\r
                        />\r
                    </div>\r
\r
                    <p class="text-xs leading-relaxed text-stone-500 dark:text-stone-400">\r
                        @if (hasExistingOTP) {\r
                            {{ t('smartEnrollProjects.securitySettings.otpHelperExisting') }}\r
                        } @else {\r
                            {{ t('smartEnrollProjects.securitySettings.otpHelperNew') }}\r
                        }\r
                    </p>\r
\r
                    @if (form.get('demoOTP')?.invalid && form.get('demoOTP')?.touched) {\r
                        @if (form.get('demoOTP')?.hasError('required')) {\r
                            <p class="text-xs text-red-600 dark:text-red-400">\r
                                {{ t('smartEnrollProjects.securitySettings.otpRequired') }}\r
                            </p>\r
                        }\r
                        @if (form.get('demoOTP')?.hasError('pattern')) {\r
                            <p class="text-xs text-red-600 dark:text-red-400">\r
                                {{ t('smartEnrollProjects.securitySettings.otpInvalid') }}\r
                            </p>\r
                        }\r
                    }\r
\r
                    <div\r
                        class="flex gap-3 rounded-xl border border-stone-200/90 bg-stone-50 px-4 py-3 text-sm dark:border-gray-700 dark:bg-gray-950/50"\r
                    >\r
                        <mat-icon\r
                            class="shrink-0 text-stone-500 dark:text-stone-400"\r
                            style="font-size: 20px; width: 20px; height: 20px"\r
                        >info</mat-icon>\r
                        <div class="min-w-0">\r
                            <p class="m-0 text-sm font-semibold text-stone-950 dark:text-white">\r
                                {{ t('smartEnrollProjects.securitySettings.otpInfoTitle') }}\r
                            </p>\r
                            <ul class="mt-2 space-y-1.5 text-xs leading-relaxed text-stone-600 dark:text-stone-400">\r
                                <li>{{ t('smartEnrollProjects.securitySettings.otpInfo1') }}</li>\r
                                <li>{{ t('smartEnrollProjects.securitySettings.otpInfo2') }}</li>\r
                                <li>{{ t('smartEnrollProjects.securitySettings.otpInfo3') }}</li>\r
                            </ul>\r
                        </div>\r
                    </div>\r
                </section>\r
            } @else {\r
                <div\r
                    class="flex gap-3 rounded-xl border border-dashed border-stone-200 px-4 py-4 dark:border-gray-700"\r
                >\r
                    <mat-icon\r
                        class="shrink-0 text-stone-400 dark:text-stone-500"\r
                        style="font-size: 20px; width: 20px; height: 20px"\r
                    >lock</mat-icon>\r
                    <div class="min-w-0">\r
                        <p class="text-sm font-semibold text-stone-950 dark:text-white">\r
                            {{ t('smartEnrollProjects.securitySettings.demoModeDisabledTitle') }}\r
                        </p>\r
                        <p class="mt-1 text-xs leading-relaxed text-stone-500 dark:text-stone-400">\r
                            {{ t('smartEnrollProjects.securitySettings.demoModeDisabledDescription') }}\r
                        </p>\r
                    </div>\r
                </div>\r
            }\r
        </form>\r
    </mat-dialog-content>\r
\r
    <div class="flex flex-col-reverse gap-2 border-t border-stone-200/90 px-5 py-4 dark:border-gray-800 sm:flex-row sm:justify-end sm:gap-3 md:px-6">\r
        <button\r
            mat-stroked-button\r
            type="button"\r
            class="!min-h-11 w-full !rounded-xl !border-stone-200 !font-medium sm:w-auto dark:!border-gray-700"\r
            [disabled]="isUpdating"\r
            (click)="onCancel()"\r
        >\r
            {{ t('smartEnrollProjects.securitySettings.cancel') }}\r
        </button>\r
        <button\r
            mat-flat-button\r
            color="primary"\r
            type="button"\r
            class="flex !min-h-11 w-full shrink-0 items-center justify-center gap-2 !rounded-xl px-5 sm:w-auto"\r
            [disabled]="!isFormValid || !hasChanges || isUpdating"\r
            (click)="onSave()"\r
        >\r
            @if (isUpdating) {\r
                <mat-spinner diameter="20" class="inline-block"></mat-spinner>\r
            }\r
            {{ t('smartEnrollProjects.securitySettings.save') }}\r
        </button>\r
    </div>\r
</div>\r
`, styles: ["/* src/app/modules/smart-enroll/projects/project-security-modal/project-security-modal.component.scss */\n.project-security-dialog-panel.cdk-overlay-pane {\n  max-width: min(600px, 94vw);\n}\n.project-security-dialog-panel .mat-mdc-dialog-container {\n  padding: 0 !important;\n  overflow: hidden;\n  border-radius: 1rem;\n}\n.project-security-dialog-panel .mat-mdc-dialog-surface {\n  border-radius: 1rem !important;\n  overflow: hidden;\n  background: transparent !important;\n  box-shadow: 0 4px 6px -1px rgba(15, 23, 42, 0.08), 0 2px 4px -2px rgba(15, 23, 42, 0.08);\n}\n.dark .project-security-dialog-panel .mat-mdc-dialog-surface {\n  box-shadow: 0 8px 24px -4px rgba(0, 0, 0, 0.45), 0 4px 8px -4px rgba(0, 0, 0, 0.35);\n}\n/*# sourceMappingURL=project-security-modal.component.css.map */\n"] }]
  }], () => [{ type: void 0, decorators: [{
    type: Inject,
    args: [MAT_DIALOG_DATA]
  }] }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProjectSecurityModalComponent, { className: "ProjectSecurityModalComponent", filePath: "src/app/modules/smart-enroll/projects/project-security-modal/project-security-modal.component.ts", lineNumber: 34 });
})();

// src/app/modules/smart-enroll/projects/project-list/project-list.component.ts
var _forTrack0 = ($index, $item) => $item._id;
function ProjectListComponent_ng_container_0_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "mat-progress-spinner", 20);
    \u0275\u0275elementEnd();
  }
}
function ProjectListComponent_ng_container_0_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, ctx_r0.error()));
  }
}
function ProjectListComponent_ng_container_0_Conditional_26_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "usage-quota-preview", 21);
  }
  if (rf & 2) {
    \u0275\u0275property("plan", ctx)("demo", true);
  }
}
function ProjectListComponent_ng_container_0_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ProjectListComponent_ng_container_0_Conditional_26_Conditional_0_Template, 1, 2, "usage-quota-preview", 21);
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional((tmp_3_0 = ctx_r0.teaserPlan()) ? 0 : -1, tmp_3_0);
  }
}
function ProjectListComponent_ng_container_0_Conditional_27_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p", 25);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2("smartEnrollProjects.emptyStaffTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2("smartEnrollProjects.emptyStaffSubtitle"));
  }
}
function ProjectListComponent_ng_container_0_Conditional_27_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "h2", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p", 25);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 26);
    \u0275\u0275listener("click", function ProjectListComponent_ng_container_0_Conditional_27_Conditional_4_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.createProject());
    });
    \u0275\u0275element(5, "mat-icon", 23);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2("smartEnrollProjects.emptyHeroTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2("smartEnrollProjects.emptyHeroSubtitle"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.createProject"), " ");
  }
}
function ProjectListComponent_ng_container_0_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 22);
    \u0275\u0275element(2, "mat-icon", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ProjectListComponent_ng_container_0_Conditional_27_Conditional_3_Template, 4, 2)(4, ProjectListComponent_ng_container_0_Conditional_27_Conditional_4_Template, 7, 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("empty-hero-icon--muted", ctx_r0.isWorkspaceStaff());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.isWorkspaceStaff() ? 3 : 4);
  }
}
function ProjectListComponent_ng_container_0_Conditional_28_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 29);
    \u0275\u0275listener("click", function ProjectListComponent_ng_container_0_Conditional_28_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.createProject());
    });
    \u0275\u0275elementStart(1, "div", 30);
    \u0275\u0275element(2, "mat-icon", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 31)(4, "h2", 32);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 33);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span", 34);
    \u0275\u0275text(9);
    \u0275\u0275elementStart(10, "span", 35);
    \u0275\u0275text(11, "\u203A");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275attribute("aria-label", t_r2("smartEnrollProjects.createProject"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(t_r2("smartEnrollProjects.list.newProjectTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2("smartEnrollProjects.list.newProjectSubtitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.createProject"), " ");
  }
}
function ProjectListComponent_ng_container_0_Conditional_28_For_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 39);
  }
  if (rf & 2) {
    const project_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", project_r6.branding.logo, \u0275\u0275sanitizeUrl);
  }
}
function ProjectListComponent_ng_container_0_Conditional_28_For_3_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275element(1, "mat-icon", 71);
    \u0275\u0275elementEnd();
  }
}
function ProjectListComponent_ng_container_0_Conditional_28_For_3_Conditional_8_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 74);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(", t_r2("smartEnrollProjects.list.demoMode"), ")");
  }
}
function ProjectListComponent_ng_container_0_Conditional_28_For_3_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43)(1, "span", 72);
    \u0275\u0275element(2, "span", 73);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, ProjectListComponent_ng_container_0_Conditional_28_For_3_Conditional_8_Conditional_4_Template, 2, 1, "span", 74);
    \u0275\u0275elementStart(5, "mat-slide-toggle", 75);
    \u0275\u0275listener("click", function ProjectListComponent_ng_container_0_Conditional_28_For_3_Conditional_8_Template_mat_slide_toggle_click_5_listener($event) {
      \u0275\u0275restoreView(_r7);
      return \u0275\u0275resetView($event.stopPropagation());
    })("change", function ProjectListComponent_ng_container_0_Conditional_28_For_3_Conditional_8_Template_mat_slide_toggle_change_5_listener($event) {
      \u0275\u0275restoreView(_r7);
      const project_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.onFlowStatusToggle($event, project_r6));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const flow_r8 = ctx;
    const project_r6 = \u0275\u0275nextContext().$implicit;
    const t_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("pill-on", !ctx_r0.isDraftFlow(flow_r8))("pill-off", ctx_r0.isDraftFlow(flow_r8));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.isDraftFlow(flow_r8) ? t_r2("smartEnrollProjects.list.draft") : t_r2("smartEnrollProjects.list.active"), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(project_r6.demoMode ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r0.flowToggleChecked(flow_r8));
  }
}
function ProjectListComponent_ng_container_0_Conditional_28_For_3_For_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r9 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275attribute("title", (m_r9.staff == null ? null : m_r9.staff.name) || "")("aria-label", (m_r9.staff == null ? null : m_r9.staff.name) || "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatAcronym(m_r9.staff == null ? null : m_r9.staff.name), " ");
  }
}
function ProjectListComponent_ng_container_0_Conditional_28_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 36);
    \u0275\u0275listener("click", function ProjectListComponent_ng_container_0_Conditional_28_For_3_Template_article_click_0_listener($event) {
      const project_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openProject(project_r6, $event));
    });
    \u0275\u0275elementStart(1, "div", 37)(2, "div", 38);
    \u0275\u0275template(3, ProjectListComponent_ng_container_0_Conditional_28_For_3_Conditional_3_Template, 1, 1, "img", 39)(4, ProjectListComponent_ng_container_0_Conditional_28_For_3_Conditional_4_Template, 2, 0, "div", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 41)(6, "h2", 42);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, ProjectListComponent_ng_container_0_Conditional_28_For_3_Conditional_8_Template, 6, 7, "div", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 44);
    \u0275\u0275listener("click", function ProjectListComponent_ng_container_0_Conditional_28_For_3_Template_button_click_9_listener($event) {
      \u0275\u0275restoreView(_r5);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275element(10, "mat-icon", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "mat-menu", null, 0)(13, "button", 46);
    \u0275\u0275listener("click", function ProjectListComponent_ng_container_0_Conditional_28_For_3_Template_button_click_13_listener($event) {
      const project_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openLiveEnrollment(project_r6, $event));
    });
    \u0275\u0275element(14, "mat-icon", 47);
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "button", 46);
    \u0275\u0275listener("click", function ProjectListComponent_ng_container_0_Conditional_28_For_3_Template_button_click_17_listener($event) {
      const project_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.copyLiveEnrollmentUrl(project_r6, $event));
    });
    \u0275\u0275element(18, "mat-icon", 48);
    \u0275\u0275elementStart(19, "span");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "button", 46);
    \u0275\u0275listener("click", function ProjectListComponent_ng_container_0_Conditional_28_For_3_Template_button_click_21_listener($event) {
      const project_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openSecurityModal(project_r6, $event));
    });
    \u0275\u0275element(22, "mat-icon", 49);
    \u0275\u0275elementStart(23, "span");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "button", 46);
    \u0275\u0275listener("click", function ProjectListComponent_ng_container_0_Conditional_28_For_3_Template_button_click_25_listener($event) {
      const project_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openProject(project_r6, $event));
    });
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "button", 46);
    \u0275\u0275listener("click", function ProjectListComponent_ng_container_0_Conditional_28_For_3_Template_button_click_27_listener($event) {
      const project_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openRecords(project_r6, $event));
    });
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "button", 46);
    \u0275\u0275listener("click", function ProjectListComponent_ng_container_0_Conditional_28_For_3_Template_button_click_29_listener($event) {
      const project_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openStaff(project_r6, $event));
    });
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "div", 50);
    \u0275\u0275listener("click", function ProjectListComponent_ng_container_0_Conditional_28_For_3_Template_div_click_31_listener($event) {
      \u0275\u0275restoreView(_r5);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(32, "button", 51);
    \u0275\u0275listener("click", function ProjectListComponent_ng_container_0_Conditional_28_For_3_Template_button_click_32_listener($event) {
      const project_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openSection(project_r6, "signup", $event));
    });
    \u0275\u0275element(33, "mat-icon", 52);
    \u0275\u0275elementStart(34, "span", 53);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "span", 54);
    \u0275\u0275text(37, "\u203A");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "button", 51);
    \u0275\u0275listener("click", function ProjectListComponent_ng_container_0_Conditional_28_For_3_Template_button_click_38_listener($event) {
      const project_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openSection(project_r6, "documents", $event));
    });
    \u0275\u0275element(39, "mat-icon", 55);
    \u0275\u0275elementStart(40, "span", 53);
    \u0275\u0275text(41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "span", 54);
    \u0275\u0275text(43, "\u203A");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "button", 51);
    \u0275\u0275listener("click", function ProjectListComponent_ng_container_0_Conditional_28_For_3_Template_button_click_44_listener($event) {
      const project_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openSection(project_r6, "liveness", $event));
    });
    \u0275\u0275element(45, "mat-icon", 56);
    \u0275\u0275elementStart(46, "span", 53);
    \u0275\u0275text(47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "span", 54);
    \u0275\u0275text(49, "\u203A");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "button", 57);
    \u0275\u0275listener("click", function ProjectListComponent_ng_container_0_Conditional_28_For_3_Template_button_click_50_listener($event) {
      const project_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openSection(project_r6, "api", $event));
    });
    \u0275\u0275element(51, "mat-icon", 58);
    \u0275\u0275elementStart(52, "span", 53);
    \u0275\u0275text(53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "span", 54);
    \u0275\u0275text(55, "\u203A");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(56, "div", 59);
    \u0275\u0275listener("click", function ProjectListComponent_ng_container_0_Conditional_28_For_3_Template_div_click_56_listener($event) {
      \u0275\u0275restoreView(_r5);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(57, "div", 60);
    \u0275\u0275text(58);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "div", 61);
    \u0275\u0275repeaterCreate(60, ProjectListComponent_ng_container_0_Conditional_28_For_3_For_61_Template, 2, 3, "div", 62, _forTrack0);
    \u0275\u0275elementStart(62, "button", 63);
    \u0275\u0275listener("click", function ProjectListComponent_ng_container_0_Conditional_28_For_3_Template_button_click_62_listener($event) {
      const project_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      ctx_r0.openStaff(project_r6, $event);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(63, " + ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(64, "div", 64);
    \u0275\u0275text(65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "div", 65);
    \u0275\u0275listener("click", function ProjectListComponent_ng_container_0_Conditional_28_For_3_Template_div_click_66_listener($event) {
      \u0275\u0275restoreView(_r5);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(67, "button", 66);
    \u0275\u0275listener("click", function ProjectListComponent_ng_container_0_Conditional_28_For_3_Template_button_click_67_listener($event) {
      const project_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openLiveEnrollment(project_r6, $event));
    });
    \u0275\u0275element(68, "mat-icon", 67);
    \u0275\u0275text(69);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "div", 68)(71, "button", 69);
    \u0275\u0275listener("click", function ProjectListComponent_ng_container_0_Conditional_28_For_3_Template_button_click_71_listener($event) {
      const project_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openProject(project_r6, $event));
    });
    \u0275\u0275text(72);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "button", 70);
    \u0275\u0275listener("click", function ProjectListComponent_ng_container_0_Conditional_28_For_3_Template_button_click_73_listener($event) {
      const project_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openRecords(project_r6, $event));
    });
    \u0275\u0275text(74);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_16_0;
    const project_r6 = ctx.$implicit;
    const projectMenu_r10 = \u0275\u0275reference(12);
    const t_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275conditional((project_r6.branding == null ? null : project_r6.branding.logo) ? 3 : 4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(project_r6.name || project_r6._id);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_16_0 = ctx_r0.currentFlow(project_r6)) ? 8 : -1, tmp_16_0);
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", projectMenu_r10);
    \u0275\u0275attribute("aria-label", t_r2("smartEnrollProjects.list.moreActions"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(t_r2("smartEnrollProjects.list.menuLiveEnrollment"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r2("smartEnrollProjects.list.copyLiveUrl"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r2("smartEnrollProjects.list.menuSecurity"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.list.menuEdit"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.list.menuRecords"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.list.menuStaff"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(t_r2("smartEnrollProjects.list.signupForm"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(t_r2("smartEnrollProjects.list.documents"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(t_r2("smartEnrollProjects.list.biometrics"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(t_r2("smartEnrollProjects.list.apiIntegration"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(t_r2("smartEnrollProjects.list.members"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.membersForCard(project_r6).slice(0, 5));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", t_r2("smartEnrollProjects.list.addMember"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", t_r2("smartEnrollProjects.updated"), ": ", ctx_r0.formatUpdated(project_r6.updatedAt), "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.list.openLiveEnrollment"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.list.edit"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.list.seeLogs"), " ");
  }
}
function ProjectListComponent_ng_container_0_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275template(1, ProjectListComponent_ng_container_0_Conditional_28_Conditional_1_Template, 12, 4, "button", 27);
    \u0275\u0275repeaterCreate(2, ProjectListComponent_ng_container_0_Conditional_28_For_3_Template, 75, 22, "article", 28, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.isWorkspaceStaff() ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.projects());
  }
}
function ProjectListComponent_ng_container_0_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "aside", 19);
    \u0275\u0275element(1, "usage-quota-preview", 76);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("plan", ctx);
  }
}
function ProjectListComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 2)(2, "div", 3)(3, "header", 4)(4, "div", 5);
    \u0275\u0275element(5, "mat-icon", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div")(7, "h1", 7);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 8);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 9)(12, "a", 10);
    \u0275\u0275text(13, "Verifik");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 11);
    \u0275\u0275text(15, "/");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 12);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 11);
    \u0275\u0275text(19, "/");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 12);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 13)(23, "div", 14);
    \u0275\u0275template(24, ProjectListComponent_ng_container_0_Conditional_24_Template, 2, 0, "div", 15)(25, ProjectListComponent_ng_container_0_Conditional_25_Template, 3, 3, "div", 16)(26, ProjectListComponent_ng_container_0_Conditional_26_Template, 1, 1)(27, ProjectListComponent_ng_container_0_Conditional_27_Template, 5, 3, "div", 17)(28, ProjectListComponent_ng_container_0_Conditional_28_Template, 4, 1, "div", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275template(29, ProjectListComponent_ng_container_0_Conditional_29_Template, 2, 1, "aside", 19);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_8_0;
    const t_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(t_r2("smartEnrollProjects.title"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2("smartEnrollProjects.subtitle"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(t_r2("nav.smart_enroll"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r2("smartEnrollProjects.title"));
    \u0275\u0275advance();
    \u0275\u0275classProp("workspace--split", !!ctx_r0.activePlan() && !ctx_r0.loading() && !ctx_r0.error() && !ctx_r0.noActivePlan());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.loading() ? 24 : ctx_r0.error() ? 25 : ctx_r0.noActivePlan() ? 26 : ctx_r0.projects().length === 0 ? 27 : 28);
    \u0275\u0275advance(5);
    \u0275\u0275conditional((tmp_8_0 = !ctx_r0.loading() && !ctx_r0.error() && !ctx_r0.noActivePlan() && ctx_r0.activePlan()) ? 29 : -1, tmp_8_0);
  }
}
var ProjectListComponent = class _ProjectListComponent {
  constructor() {
    this._clipboard = inject(Clipboard);
    this._enrollPlansService = inject(SmartEnrollPlansService);
    this._projectsService = inject(SmartEnrollProjectsService);
    this._router = inject(Router);
    this._authGate = inject(AuthRequiredGateService);
    this._dialog = inject(MatDialog);
    this.projects = signal([]);
    this.loading = signal(true);
    this.error = signal(null);
    this.noActivePlan = signal(false);
    this.activePlan = signal(null);
    this.teaserPlan = signal(null);
  }
  ngOnInit() {
    this._authGate.runWithAuthOrDialog({
      onAuthenticated: () => this._loadProjectsAfterAuthGate(),
      panelClass: "auth-required-dialog"
    });
  }
  _loadProjectsAfterAuthGate() {
    const user = this._projectsService.parseStoredUser();
    if (user?.staff) {
      this._loadProjects();
      return;
    }
    forkJoin({
      plans: this._projectsService.getActiveSmartEnrollPlans(),
      settings: this._projectsService.getClientSettings(),
      catalog: this._enrollPlansService.getCatalogPlans().pipe(catchError(() => of({ data: [] })))
    }).subscribe({
      next: ({ plans, settings, catalog }) => {
        const rows = plans?.data ?? [];
        this.activePlan.set(rows[0] ?? null);
        if (!rows.length && requiresSmartEnrollSubscription(settings?.data)) {
          this.teaserPlan.set(this._buildTeaserPlan(catalog?.data ?? []));
          this.noActivePlan.set(true);
          this.loading.set(false);
          return;
        }
        this._loadProjects();
      },
      error: () => {
        this.error.set("smartEnrollProjects.plansLoadError");
        this.loading.set(false);
      }
    });
  }
  goToPlans() {
    this._router.navigate(["/smart-enroll/plans"]);
  }
  /** Staff users cannot create workspace projects — list is scoped to assignments only. */
  isWorkspaceStaff() {
    return !!this._projectsService.parseStoredUser()?.staff;
  }
  /** Opens the Smart Enroll setup wizard (`/projects/new/setup/0`). */
  createProject() {
    this._router.navigate(["/smart-enroll/projects", "new", "setup", "0"]);
  }
  openProject(project, event) {
    event?.stopPropagation();
    this._router.navigate(["/smart-enroll/projects", project._id]);
  }
  openRecords(project, event) {
    event?.stopPropagation();
    this._router.navigate(["/smart-enroll/projects", project._id, "records"]);
  }
  openStaff(project, event) {
    event?.stopPropagation();
    this._router.navigate(["/smart-enroll/projects", project._id, "staff"]);
  }
  openSecurityModal(project, event) {
    event?.stopPropagation();
    const ref = this._dialog.open(ProjectSecurityModalComponent, {
      data: { project },
      width: "600px",
      maxWidth: "90vw",
      disableClose: false,
      panelClass: PROJECT_SECURITY_DIALOG_PANEL_CLASS
    });
    ref.afterClosed().subscribe((saved) => {
      if (saved) {
        this._loadProjects();
      }
    });
  }
  /**
   * Public Smart Enroll entry on the KYC / access host (`/sign-up/:projectId`), same as Verifik access app.
   */
  liveEnrollmentUrl(project) {
    const base = (environment.kycBaseUrl ?? "").replace(/\/+$/, "");
    return `${base}/sign-up/${project._id}`;
  }
  openLiveEnrollment(project, event) {
    event?.stopPropagation();
    const url = this.liveEnrollmentUrl(project);
    if (typeof window !== "undefined") {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  }
  copyLiveEnrollmentUrl(project, event) {
    event?.stopPropagation();
    this._clipboard.copy(this.liveEnrollmentUrl(project));
  }
  openSection(project, section, event) {
    event.stopPropagation();
    this._router.navigate(["/smart-enroll/projects", project._id], {
      queryParams: { section }
    });
  }
  membersForCard(project) {
    return (project.projectMembers ?? []).filter((m) => m.staff);
  }
  formatAcronym(name) {
    if (!name?.trim())
      return "?";
    const matches = name.match(/\b(\w)/g);
    return matches?.slice(0, 2).join("").toUpperCase() ?? "?";
  }
  onFlowStatusToggle(event, project) {
    const flow = this.currentFlow(project);
    if (!flow?._id) {
      event.source.checked = !event.source.checked;
      return;
    }
    const nextStatus = event.checked ? "active" : "draft";
    this._projectsService.updateProjectFlow(flow._id, { status: nextStatus }).subscribe({
      next: (res) => {
        const status = res?.data?.status ?? nextStatus;
        this.projects.update((list) => list.map((p) => {
          if (p._id !== project._id)
            return p;
          return __spreadProps(__spreadValues({}, p), {
            projectFlows: p.projectFlows?.map((f) => f._id === flow._id ? __spreadProps(__spreadValues({}, f), { status }) : f) ?? []
          });
        }));
      },
      error: () => {
        event.source.checked = !event.checked;
      }
    });
  }
  flowToggleChecked(flow) {
    return !!flow?.status && flow.status !== "draft";
  }
  currentFlow(project) {
    const flows = project.projectFlows;
    if (!flows?.length)
      return null;
    const active = flows.find((f) => f.status && f.status !== "draft");
    return active ?? flows[0];
  }
  isDraftFlow(flow) {
    return !flow?.status || flow.status === "draft";
  }
  formatUpdated(date) {
    if (!date)
      return "\u2014";
    return DateTime.fromISO(date).toFormat("MMM dd, yyyy");
  }
  _buildTeaserPlan(catalog) {
    const rows = catalog;
    const free = rows.find((row) => row?.code === "smart_enroll_pyg");
    const enrolls = Number(free?.basicLimit) || 100;
    const scans = Number(free?.scanDocsLimit) || enrolls;
    return {
      backgroundCheckCount: 0,
      backgroundCheckLimit: Number(free?.backgroundCheckLimit) || 10,
      basicCount: 0,
      basicLimit: enrolls,
      biometricsLimit: 0,
      emailCount: 0,
      emailsLimit: Number(free?.emailsLimit) || 25,
      scanDocsCount: 0,
      scanDocsLimit: scans,
      validateNamesCount: 0,
      validateNamesLimit: Number(free?.validateNamesLimit) || 10
    };
  }
  _loadProjects() {
    this._projectsService.listProjects().subscribe({
      next: (list) => {
        this.projects.set(list);
        this.loading.set(false);
      },
      error: () => {
        this.error.set("smartEnrollProjects.loadError");
        this.loading.set(false);
      }
    });
  }
  static {
    this.\u0275fac = function ProjectListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProjectListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProjectListComponent, selectors: [["project-list"]], decls: 1, vars: 0, consts: [["projectMenu", "matMenu"], [4, "transloco"], [1, "page"], [1, "inner"], [1, "hero"], [1, "hero-icon"], ["svgIcon", "heroicons_outline:rectangle-stack"], [1, "title"], [1, "subtitle"], [1, "crumb"], ["routerLink", "/chat", 1, "crumb-link"], [1, "crumb-sep"], [1, "crumb-here"], [1, "workspace"], [1, "workspace__main"], [1, "state-loading"], [1, "banner-error"], [1, "empty-hero-card"], [1, "grid"], [1, "workspace__aside"], ["diameter", "40", "mode", "indeterminate"], [1, "usage-teaser", 3, "plan", "demo"], [1, "empty-hero-icon"], ["svgIcon", "heroicons_outline:plus-circle"], [1, "empty-hero-title"], [1, "empty-hero-text"], ["mat-flat-button", "", "color", "primary", "type", "button", 1, "empty-hero-cta", 3, "click"], ["type", "button", 1, "card", "card-create"], [1, "card"], ["type", "button", 1, "card", "card-create", 3, "click"], [1, "card-create-icon"], [1, "card-create-copy"], [1, "card-create-title"], [1, "card-create-text"], [1, "card-create-cta"], ["aria-hidden", "true"], [1, "card", 3, "click"], [1, "card-top"], [1, "card-brand"], ["alt", "", 1, "logo", 3, "src"], [1, "logo-fallback"], [1, "card-heading"], [1, "card-title"], [1, "status-row"], ["type", "button", "mat-icon-button", "", 1, "menu-btn", 3, "click", "matMenuTriggerFor"], ["svgIcon", "heroicons_outline:ellipsis-vertical"], ["mat-menu-item", "", "type", "button", 3, "click"], ["svgIcon", "heroicons_outline:arrow-top-right-on-square", 1, "menu-item-icon"], ["svgIcon", "heroicons_outline:link", 1, "menu-item-icon"], ["svgIcon", "heroicons_outline:shield-check", 1, "menu-item-icon"], [1, "rows", 3, "click"], ["type", "button", 1, "row", 3, "click"], ["svgIcon", "heroicons_outline:phone", 1, "row-ic"], [1, "row-label"], ["aria-hidden", "true", 1, "row-chev"], ["svgIcon", "heroicons_outline:envelope", 1, "row-ic"], ["svgIcon", "heroicons_outline:face-smile", 1, "row-ic"], ["type", "button", 1, "row", "row-last", 3, "click"], ["svgIcon", "heroicons_outline:code-bracket", 1, "row-ic"], [1, "members", 3, "click"], [1, "members-label"], [1, "members-strip"], [1, "member-avatar"], ["type", "button", 1, "member-add", 3, "click"], [1, "meta"], [1, "card-actions", 3, "click"], ["type", "button", 1, "btn-live", 3, "click"], ["svgIcon", "heroicons_outline:arrow-top-right-on-square", 1, "btn-live-icon"], [1, "card-actions-row"], ["type", "button", 1, "btn-primary", 3, "click"], ["type", "button", 1, "btn-secondary", 3, "click"], ["svgIcon", "heroicons_outline:folder"], [1, "pill"], [1, "pill-dot"], [1, "demo-badge"], ["color", "primary", 3, "click", "change", "checked"], [3, "plan"]], template: function ProjectListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, ProjectListComponent_ng_container_0_Template, 30, 8, "ng-container", 1);
      }
    }, dependencies: [
      ClipboardModule,
      CommonModule,
      RouterModule,
      RouterLink,
      MatButtonModule,
      MatButton,
      MatIconButton,
      MatDialogModule,
      MatIconModule,
      MatIcon,
      MatMenuModule,
      MatMenu,
      MatMenuItem,
      MatMenuTrigger,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatSlideToggleModule,
      MatSlideToggle,
      TranslocoModule,
      TranslocoDirective,
      TranslocoPipe,
      UsageQuotaPreviewComponent
    ], styles: ['@charset "UTF-8";\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.page[_ngcontent-%COMP%] {\n  min-height: 100%;\n  background: rgb(249, 250, 251);\n}\n.inner[_ngcontent-%COMP%] {\n  max-width: 88rem;\n  margin: 0 auto;\n  padding: 2rem 1.25rem 3rem;\n}\n.workspace[_ngcontent-%COMP%] {\n  display: block;\n}\n.workspace--split[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 3fr) minmax(17rem, 2fr);\n  gap: 1.5rem;\n  align-items: start;\n}\n.workspace__aside[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 1.25rem;\n}\n.workspace--split[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr;\n}\n@media (max-width: 960px) {\n  .workspace--split[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .workspace__aside[_ngcontent-%COMP%] {\n    position: static;\n  }\n}\n.hero[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.hero-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 12px;\n  background: rgb(239, 246, 255);\n  border: 1px solid rgb(219, 234, 254);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: rgb(37, 99, 235);\n  flex-shrink: 0;\n}\n.hero-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 26px;\n  font-size: 26px;\n}\n.title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.875rem;\n  font-weight: 650;\n  letter-spacing: -0.03em;\n  color: rgb(17, 24, 39);\n}\n.subtitle[_ngcontent-%COMP%] {\n  margin: 0.4rem 0 0;\n  font-size: 1rem;\n  color: rgb(107, 114, 128);\n  line-height: 1.45;\n}\n.crumb[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: rgb(107, 114, 128);\n  margin-bottom: 1.5rem;\n}\n.crumb-link[_ngcontent-%COMP%] {\n  color: rgb(55, 65, 81);\n  text-decoration: underline;\n  text-underline-offset: 3px;\n}\n.crumb-sep[_ngcontent-%COMP%] {\n  margin: 0 0.35rem;\n  color: rgb(209, 213, 219);\n}\n.crumb-here[_ngcontent-%COMP%] {\n  color: rgb(75, 85, 99);\n}\n.workspace--split[_ngcontent-%COMP%]   .empty-hero-card[_ngcontent-%COMP%] {\n  max-width: none;\n}\n.usage-teaser[_ngcontent-%COMP%] {\n  max-width: 28rem;\n}\n.state-loading[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 4rem;\n}\n.banner-error[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  border: 1px solid rgb(254, 202, 202);\n  background: rgb(254, 242, 242);\n  color: rgb(127, 29, 29);\n  padding: 0.85rem 1rem;\n  font-size: 0.9rem;\n}\n.plan-gate[_ngcontent-%COMP%] {\n  border-radius: 16px;\n  background: rgb(15, 23, 42);\n  color: #fff;\n  padding: 1.75rem 1.5rem 1.5rem;\n  max-width: 32rem;\n}\n.plan-gate-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.15rem;\n  font-weight: 650;\n}\n.plan-gate-text[_ngcontent-%COMP%] {\n  margin: 0.5rem 0 0;\n  font-size: 0.9rem;\n  color: rgb(203, 213, 225);\n}\n.plan-gate-muted[_ngcontent-%COMP%] {\n  margin: 0.75rem 0 0;\n  font-size: 0.85rem;\n  color: rgb(148, 163, 184);\n  line-height: 1.5;\n}\n.plan-gate-cta[_ngcontent-%COMP%] {\n  margin-top: 1.25rem;\n  width: 100%;\n  border-radius: 12px;\n}\n.empty-hero-card[_ngcontent-%COMP%] {\n  max-width: 36rem;\n  margin: 0 auto;\n  text-align: center;\n  padding: 2.75rem 1.75rem 2.25rem;\n  border-radius: 18px;\n  border: 1px solid rgb(229, 231, 235);\n  background:\n    linear-gradient(\n      180deg,\n      #fff 0%,\n      rgb(248, 250, 252) 100%);\n  box-shadow: 0 8px 32px rgba(15, 23, 42, 0.08);\n}\n.empty-hero-icon[_ngcontent-%COMP%] {\n  width: 4rem;\n  height: 4rem;\n  margin: 0 auto 1.25rem;\n  border-radius: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgb(239, 246, 255);\n  border: 1px solid rgb(219, 234, 254);\n  color: rgb(37, 99, 235);\n}\n.empty-hero-icon--muted[_ngcontent-%COMP%] {\n  background: rgb(243, 244, 246);\n  border-color: rgb(229, 231, 235);\n  color: rgb(107, 114, 128);\n}\n.empty-hero-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 2.25rem;\n  height: 2.25rem;\n  font-size: 2.25rem;\n}\n.empty-hero-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.35rem;\n  font-weight: 650;\n  letter-spacing: -0.02em;\n  color: rgb(17, 24, 39);\n  line-height: 1.3;\n}\n.empty-hero-text[_ngcontent-%COMP%] {\n  margin: 0.65rem auto 0;\n  max-width: 26rem;\n  font-size: 0.9375rem;\n  line-height: 1.55;\n  color: rgb(107, 114, 128);\n}\n.empty-hero-cta[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n  min-width: 12rem;\n  border-radius: 12px !important;\n  padding: 0.5rem 1.25rem !important;\n  font-weight: 600 !important;\n}\n.empty-hero-cta[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-right: 0.35rem;\n  vertical-align: middle;\n  width: 1.15rem;\n  height: 1.15rem;\n  font-size: 1.15rem;\n}\n.dark[_nghost-%COMP%]   .page[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .page[_ngcontent-%COMP%] {\n  background: #0f0f1f;\n}\n.dark[_nghost-%COMP%]   .title[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: #f8fafc;\n}\n.dark[_nghost-%COMP%]   .subtitle[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .subtitle[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .crumb[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .crumb[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .crumb-sep[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .crumb-sep[_ngcontent-%COMP%] {\n  color: rgb(148, 163, 184);\n}\n.dark[_nghost-%COMP%]   .crumb-link[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .crumb-link[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .crumb-here[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .crumb-here[_ngcontent-%COMP%] {\n  color: rgb(226, 232, 240);\n}\n.dark[_nghost-%COMP%]   .empty-hero-card[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .empty-hero-card[_ngcontent-%COMP%] {\n  border-color: rgba(255, 255, 255, 0.1);\n  background:\n    linear-gradient(\n      180deg,\n      #11122a 0%,\n      #161828 100%);\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.35);\n}\n.dark[_nghost-%COMP%]   .empty-hero-icon[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .empty-hero-icon[_ngcontent-%COMP%] {\n  background: rgba(43, 58, 240, 0.15);\n  border-color: rgba(79, 90, 246, 0.28);\n  color: rgb(129, 140, 248);\n}\n.dark[_nghost-%COMP%]   .empty-hero-icon--muted[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .empty-hero-icon--muted[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.06);\n  border-color: rgba(255, 255, 255, 0.1);\n  color: rgb(148, 163, 184);\n}\n.dark[_nghost-%COMP%]   .empty-hero-title[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .empty-hero-title[_ngcontent-%COMP%] {\n  color: #f8fafc;\n}\n.dark[_nghost-%COMP%]   .empty-hero-text[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .empty-hero-text[_ngcontent-%COMP%] {\n  color: rgb(148, 163, 184);\n}\n.dark[_nghost-%COMP%]   .hero-icon[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .hero-icon[_ngcontent-%COMP%] {\n  background: rgba(43, 58, 240, 0.15);\n  border-color: rgba(79, 90, 246, 0.28);\n  color: rgb(129, 140, 248);\n}\n.dark[_nghost-%COMP%]   .card[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .card[_ngcontent-%COMP%] {\n  border-color: rgba(255, 255, 255, 0.1);\n  background:\n    linear-gradient(\n      180deg,\n      #11122a 0%,\n      #161828 100%);\n  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.2);\n}\n.dark[_nghost-%COMP%]   .card[_ngcontent-%COMP%]:hover, .dark   [_nghost-%COMP%]   .card[_ngcontent-%COMP%]:hover {\n  border-color: rgba(255, 255, 255, 0.16);\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.35);\n}\n.dark[_nghost-%COMP%]   .logo-fallback[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .logo-fallback[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.06);\n  color: rgb(148, 163, 184);\n}\n.dark[_nghost-%COMP%]   .card-title[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  color: #f8fafc;\n}\n.dark[_nghost-%COMP%]   .pill-on[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .pill-on[_ngcontent-%COMP%] {\n  background: rgba(37, 99, 235, 0.2);\n  color: rgb(147, 197, 253);\n}\n.dark[_nghost-%COMP%]   .pill-on[_ngcontent-%COMP%]   .pill-dot[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .pill-on[_ngcontent-%COMP%]   .pill-dot[_ngcontent-%COMP%] {\n  background: rgb(96, 165, 250);\n}\n.dark[_nghost-%COMP%]   .pill-off[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .pill-off[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.06);\n  color: rgb(148, 163, 184);\n}\n.dark[_nghost-%COMP%]   .pill-off[_ngcontent-%COMP%]   .pill-dot[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .pill-off[_ngcontent-%COMP%]   .pill-dot[_ngcontent-%COMP%] {\n  background: rgb(100, 116, 139);\n}\n.dark[_nghost-%COMP%]   .demo-badge[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .demo-badge[_ngcontent-%COMP%] {\n  color: rgb(148, 163, 184);\n}\n.dark[_nghost-%COMP%]   .menu-btn[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .menu-btn[_ngcontent-%COMP%] {\n  color: rgb(148, 163, 184);\n  border-color: rgba(255, 255, 255, 0.1);\n  background: rgba(255, 255, 255, 0.04);\n  box-shadow: none;\n}\n.dark[_nghost-%COMP%]   .menu-btn[_ngcontent-%COMP%]:hover, .dark   [_nghost-%COMP%]   .menu-btn[_ngcontent-%COMP%]:hover {\n  color: #f8fafc;\n  background: rgba(255, 255, 255, 0.08);\n  border-color: rgba(255, 255, 255, 0.16);\n}\n.dark[_nghost-%COMP%]   .rows[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .rows[_ngcontent-%COMP%] {\n  border-top-color: rgba(255, 255, 255, 0.06);\n}\n.dark[_nghost-%COMP%]   .row[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .row[_ngcontent-%COMP%] {\n  border-bottom-color: rgba(255, 255, 255, 0.06);\n  color: #f8fafc;\n}\n.dark[_nghost-%COMP%]   .row[_ngcontent-%COMP%]:hover, .dark   [_nghost-%COMP%]   .row[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.04);\n}\n.dark[_nghost-%COMP%]   .row-ic[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .row-ic[_ngcontent-%COMP%] {\n  color: rgb(148, 163, 184);\n}\n.dark[_nghost-%COMP%]   .row-chev[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .row-chev[_ngcontent-%COMP%] {\n  color: rgb(129, 140, 248);\n}\n.dark[_nghost-%COMP%]   .member-add[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .member-add[_ngcontent-%COMP%] {\n  border-color: rgba(255, 255, 255, 0.15);\n  background: rgba(255, 255, 255, 0.04);\n  color: rgb(129, 140, 248);\n}\n.dark[_nghost-%COMP%]   .member-add[_ngcontent-%COMP%]:hover, .dark   [_nghost-%COMP%]   .member-add[_ngcontent-%COMP%]:hover {\n  border-color: rgb(96, 165, 250);\n  background: rgba(37, 99, 235, 0.15);\n}\n.dark[_nghost-%COMP%]   .btn-live[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .btn-live[_ngcontent-%COMP%] {\n  background: transparent;\n  border-color: rgb(96, 165, 250);\n  color: rgb(147, 197, 253);\n}\n.dark[_nghost-%COMP%]   .btn-live[_ngcontent-%COMP%]:hover, .dark   [_nghost-%COMP%]   .btn-live[_ngcontent-%COMP%]:hover {\n  background: rgba(37, 99, 235, 0.15);\n  border-color: rgb(129, 140, 248);\n  color: rgb(191, 219, 254);\n}\n.dark[_nghost-%COMP%]   .btn-live[_ngcontent-%COMP%]:active, .dark   [_nghost-%COMP%]   .btn-live[_ngcontent-%COMP%]:active {\n  background: rgba(37, 99, 235, 0.25);\n}\n.dark[_nghost-%COMP%]   .btn-secondary[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.04);\n  color: #f8fafc;\n  border-color: rgba(255, 255, 255, 0.1);\n}\n.dark[_nghost-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:hover, .dark   [_nghost-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.08);\n  border-color: rgba(255, 255, 255, 0.16);\n}\n.grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 1.25rem;\n}\n@media (min-width: 900px) {\n  .grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.card[_ngcontent-%COMP%] {\n  border: 1px solid rgb(229, 231, 235);\n  border-radius: 16px;\n  background: #fff;\n  padding: 1.1rem 1.15rem 1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.65rem;\n  cursor: pointer;\n  transition: border-color 0.15s ease, box-shadow 0.15s ease;\n  text-align: left;\n}\n.card[_ngcontent-%COMP%]:hover {\n  border-color: rgb(209, 213, 219);\n  box-shadow: 0 4px 14px rgba(15, 23, 42, 0.06);\n}\n.card-create[_ngcontent-%COMP%] {\n  appearance: none;\n  background:\n    linear-gradient(\n      180deg,\n      rgb(239, 246, 255) 0%,\n      #ffffff 100%);\n  border-style: dashed;\n  border-color: rgb(191, 219, 254);\n  align-items: stretch;\n  text-align: left;\n  cursor: pointer;\n  transition:\n    border-color 0.15s ease,\n    background 0.15s ease,\n    box-shadow 0.15s ease,\n    transform 0.15s ease;\n}\n.card-create[_ngcontent-%COMP%]:hover {\n  border-color: rgb(96, 165, 250);\n  background:\n    linear-gradient(\n      180deg,\n      rgb(219, 234, 254) 0%,\n      #ffffff 100%);\n  box-shadow: 0 6px 18px rgba(37, 99, 235, 0.12);\n  transform: translateY(-1px);\n}\n.card-create[_ngcontent-%COMP%]:focus-visible {\n  outline: none;\n  border-color: rgb(37, 99, 235);\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.25);\n}\n.card-create-icon[_ngcontent-%COMP%] {\n  width: 3.5rem;\n  height: 3.5rem;\n  border-radius: 12px;\n  background: rgb(219, 234, 254);\n  color: rgb(37, 99, 235);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.card-create-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 1.85rem;\n  height: 1.85rem;\n  font-size: 1.85rem;\n}\n.card-create-copy[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  min-width: 0;\n}\n.card-create-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.05rem;\n  font-weight: 650;\n  letter-spacing: -0.01em;\n  color: rgb(17, 24, 39);\n}\n.card-create-text[_ngcontent-%COMP%] {\n  margin: 0.35rem 0 0;\n  color: rgb(75, 85, 99);\n  font-size: 0.875rem;\n  line-height: 1.5;\n}\n.card-create-cta[_ngcontent-%COMP%] {\n  margin-top: auto;\n  align-self: flex-end;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  padding: 0.55rem 1rem;\n  border-radius: 999px;\n  background: rgb(37, 99, 235);\n  color: #fff;\n  font-weight: 600;\n  font-size: 0.875rem;\n}\n.dark[_nghost-%COMP%]   .card-create[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .card-create[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      rgba(37, 99, 235, 0.12) 0%,\n      rgba(15, 15, 31, 0.6) 100%);\n  border-color: rgba(96, 165, 250, 0.35);\n}\n.dark[_nghost-%COMP%]   .card-create[_ngcontent-%COMP%]:hover, .dark   [_nghost-%COMP%]   .card-create[_ngcontent-%COMP%]:hover {\n  border-color: rgb(96, 165, 250);\n  background:\n    linear-gradient(\n      180deg,\n      rgba(37, 99, 235, 0.2) 0%,\n      rgba(15, 15, 31, 0.6) 100%);\n}\n.dark[_nghost-%COMP%]   .card-create-icon[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .card-create-icon[_ngcontent-%COMP%] {\n  background: rgba(37, 99, 235, 0.18);\n  color: rgb(147, 197, 253);\n}\n.dark[_nghost-%COMP%]   .card-create-title[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .card-create-title[_ngcontent-%COMP%] {\n  color: #f8fafc;\n}\n.dark[_nghost-%COMP%]   .card-create-text[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .card-create-text[_ngcontent-%COMP%] {\n  color: rgb(148, 163, 184);\n}\n.card-top[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr) auto;\n  align-items: start;\n  gap: 0.65rem;\n  position: relative;\n}\n.card-brand[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.logo[_ngcontent-%COMP%] {\n  width: 3.5rem;\n  height: 3.5rem;\n  border-radius: 12px;\n  object-fit: contain;\n}\n.logo-fallback[_ngcontent-%COMP%] {\n  width: 3.5rem;\n  height: 3.5rem;\n  border-radius: 12px;\n  background: rgb(243, 244, 246);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: rgb(107, 114, 128);\n}\n.card-heading[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.card-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.05rem;\n  font-weight: 650;\n  color: rgb(17, 24, 39);\n  line-height: 1.3;\n}\n.status-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 0.5rem;\n  margin-top: 0.35rem;\n}\n.pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  border-radius: 999px;\n  padding: 0.2rem 0.55rem 0.2rem 0.4rem;\n  font-size: 0.72rem;\n  font-weight: 650;\n  letter-spacing: 0.02em;\n}\n.pill-dot[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  border-radius: 999px;\n  flex-shrink: 0;\n}\n.pill-on[_ngcontent-%COMP%] {\n  background: rgb(219, 234, 254);\n  color: rgb(30, 64, 175);\n}\n.pill-on[_ngcontent-%COMP%]   .pill-dot[_ngcontent-%COMP%] {\n  background: rgb(37, 99, 235);\n}\n.pill-off[_ngcontent-%COMP%] {\n  background: rgb(243, 244, 246);\n  color: rgb(75, 85, 99);\n}\n.pill-off[_ngcontent-%COMP%]   .pill-dot[_ngcontent-%COMP%] {\n  background: rgb(156, 163, 175);\n}\n.demo-badge[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 500;\n  color: rgb(107, 114, 128);\n  letter-spacing: 0.01em;\n}\n.menu-btn[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  margin: 0;\n  justify-self: end;\n  align-self: start;\n  color: rgb(55, 65, 81);\n  border: 1px solid rgb(229, 231, 235);\n  border-radius: 999px;\n  background: rgb(255, 255, 255);\n  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.05);\n}\n.menu-btn[_ngcontent-%COMP%]:hover {\n  color: rgb(17, 24, 39);\n  background: rgb(249, 250, 251);\n  border-color: rgb(209, 213, 219);\n}\n.menu-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n  font-size: 22px;\n}\n.menu-item-icon[_ngcontent-%COMP%] {\n  width: 1.15rem !important;\n  height: 1.15rem !important;\n  font-size: 1.15rem !important;\n  margin-right: 0.65rem;\n  vertical-align: middle;\n  color: rgb(107, 114, 128);\n}\n.rows[_ngcontent-%COMP%] {\n  border-top: 1px solid rgb(243, 244, 246);\n  margin-top: 0.15rem;\n}\n.row[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.65rem 0.15rem;\n  border: none;\n  border-bottom: 1px solid rgb(243, 244, 246);\n  background: transparent;\n  font: inherit;\n  text-align: left;\n  cursor: pointer;\n  color: rgb(17, 24, 39);\n}\n.row-last[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.row[_ngcontent-%COMP%]:hover {\n  background: rgb(249, 250, 251);\n}\n.row-ic[_ngcontent-%COMP%] {\n  width: 1.15rem;\n  height: 1.15rem;\n  font-size: 1.15rem;\n  color: rgb(107, 114, 128);\n  flex-shrink: 0;\n}\n.row-label[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 0.9rem;\n  font-weight: 500;\n}\n.row-chev[_ngcontent-%COMP%] {\n  color: rgb(37, 99, 235);\n  font-size: 1.25rem;\n  font-weight: 300;\n  line-height: 1;\n}\n.members[_ngcontent-%COMP%] {\n  padding-top: 0.35rem;\n}\n.members-label[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  font-weight: 650;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  color: rgb(156, 163, 175);\n  margin-bottom: 0.35rem;\n}\n.members-strip[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 0.35rem;\n}\n.member-avatar[_ngcontent-%COMP%] {\n  width: 2rem;\n  height: 2rem;\n  border-radius: 999px;\n  background:\n    linear-gradient(\n      135deg,\n      rgb(59, 130, 246),\n      rgb(37, 99, 235));\n  color: #fff;\n  font-size: 0.65rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.member-add[_ngcontent-%COMP%] {\n  width: 2rem;\n  height: 2rem;\n  border-radius: 999px;\n  border: 1px dashed rgb(209, 213, 219);\n  background: rgb(252, 252, 252);\n  color: rgb(37, 99, 235);\n  font-size: 1.1rem;\n  font-weight: 600;\n  line-height: 1;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.member-add[_ngcontent-%COMP%]:hover {\n  border-color: rgb(59, 130, 246);\n  background: rgb(239, 246, 255);\n}\n.meta[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: rgb(156, 163, 175);\n}\n.card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.55rem;\n  margin-top: 0.35rem;\n}\n.card-actions-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.btn-live[_ngcontent-%COMP%] {\n  width: 100%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  border-radius: 999px;\n  padding: 0.62rem 1rem;\n  font-size: 0.9rem;\n  font-weight: 600;\n  letter-spacing: -0.01em;\n  cursor: pointer;\n  color: rgb(37, 99, 235);\n  background: rgb(255, 255, 255);\n  border: 1.5px solid rgb(37, 99, 235);\n  box-shadow: none;\n  transition:\n    background-color 0.15s ease,\n    border-color 0.15s ease,\n    color 0.15s ease;\n}\n.btn-live[_ngcontent-%COMP%]:hover {\n  background: rgb(239, 246, 255);\n  border-color: rgb(29, 78, 216);\n  color: rgb(29, 78, 216);\n}\n.btn-live[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid rgb(59, 130, 246);\n  outline-offset: 2px;\n}\n.btn-live[_ngcontent-%COMP%]:active {\n  background: rgb(219, 234, 254);\n}\n.btn-live-icon[_ngcontent-%COMP%] {\n  width: 1.05rem !important;\n  height: 1.05rem !important;\n  font-size: 1.05rem !important;\n  flex-shrink: 0;\n  color: inherit;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 6rem;\n  border: none;\n  border-radius: 999px;\n  padding: 0.55rem 1rem;\n  font-size: 0.9rem;\n  font-weight: 600;\n  cursor: pointer;\n  background: rgb(37, 99, 235);\n  color: #fff;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: rgb(29, 78, 216);\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 6rem;\n  border-radius: 999px;\n  padding: 0.55rem 1rem;\n  font-size: 0.9rem;\n  font-weight: 600;\n  cursor: pointer;\n  background: #fff;\n  color: rgb(17, 24, 39);\n  border: 1px solid rgb(229, 231, 235);\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  border-color: rgb(209, 213, 219);\n  background: rgb(249, 250, 251);\n}\n/*# sourceMappingURL=project-list.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProjectListComponent, [{
    type: Component,
    args: [{ selector: "project-list", standalone: true, imports: [
      ClipboardModule,
      CommonModule,
      RouterModule,
      MatButtonModule,
      MatDialogModule,
      MatIconModule,
      MatMenuModule,
      MatProgressSpinnerModule,
      MatSlideToggleModule,
      TranslocoModule,
      UsageQuotaPreviewComponent
    ], template: `<ng-container *transloco="let t">\r
    <div class="page">\r
        <div class="inner">\r
            <header class="hero">\r
                <div class="hero-icon">\r
                    <mat-icon svgIcon="heroicons_outline:rectangle-stack"></mat-icon>\r
                </div>\r
                <div>\r
                    <h1 class="title">{{ t('smartEnrollProjects.title') }}</h1>\r
                    <p class="subtitle">{{ t('smartEnrollProjects.subtitle') }}</p>\r
                </div>\r
            </header>\r
\r
            <div class="crumb">\r
                <a routerLink="/chat" class="crumb-link">Verifik</a>\r
                <span class="crumb-sep">/</span>\r
                <span class="crumb-here">{{ t('nav.smart_enroll') }}</span>\r
                <span class="crumb-sep">/</span>\r
                <span class="crumb-here">{{ t('smartEnrollProjects.title') }}</span>\r
            </div>\r
\r
            <div\r
                class="workspace"\r
                [class.workspace--split]="!!activePlan() && !loading() && !error() && !noActivePlan()"\r
            >\r
                <div class="workspace__main">\r
            @if (loading()) {\r
                <div class="state-loading">\r
                    <mat-progress-spinner diameter="40" mode="indeterminate"></mat-progress-spinner>\r
                </div>\r
            } @else if (error()) {\r
                <div class="banner-error">{{ error()! | transloco }}</div>\r
            } @else if (noActivePlan()) {\r
                @if (teaserPlan(); as plan) {\r
                    <usage-quota-preview class="usage-teaser" [plan]="plan" [demo]="true"></usage-quota-preview>\r
                }\r
            } @else if (projects().length === 0) {\r
                <div class="empty-hero-card">\r
                    <div class="empty-hero-icon" [class.empty-hero-icon--muted]="isWorkspaceStaff()">\r
                        <mat-icon svgIcon="heroicons_outline:plus-circle"></mat-icon>\r
                    </div>\r
                    @if (isWorkspaceStaff()) {\r
                        <h2 class="empty-hero-title">{{ t('smartEnrollProjects.emptyStaffTitle') }}</h2>\r
                        <p class="empty-hero-text">{{ t('smartEnrollProjects.emptyStaffSubtitle') }}</p>\r
                    } @else {\r
                        <h2 class="empty-hero-title">{{ t('smartEnrollProjects.emptyHeroTitle') }}</h2>\r
                        <p class="empty-hero-text">{{ t('smartEnrollProjects.emptyHeroSubtitle') }}</p>\r
                        <button\r
                            mat-flat-button\r
                            color="primary"\r
                            type="button"\r
                            class="empty-hero-cta"\r
                            (click)="createProject()"\r
                        >\r
                            <mat-icon svgIcon="heroicons_outline:plus-circle"></mat-icon>\r
                            {{ t('smartEnrollProjects.createProject') }}\r
                        </button>\r
                    }\r
                </div>\r
            } @else {\r
                <div class="grid">\r
                    @if (!isWorkspaceStaff()) {\r
                        <button\r
                            type="button"\r
                            class="card card-create"\r
                            (click)="createProject()"\r
                            [attr.aria-label]="t('smartEnrollProjects.createProject')"\r
                        >\r
                            <div class="card-create-icon">\r
                                <mat-icon svgIcon="heroicons_outline:plus-circle"></mat-icon>\r
                            </div>\r
                            <div class="card-create-copy">\r
                                <h2 class="card-create-title">{{ t('smartEnrollProjects.list.newProjectTitle') }}</h2>\r
                                <p class="card-create-text">{{ t('smartEnrollProjects.list.newProjectSubtitle') }}</p>\r
                            </div>\r
                            <span class="card-create-cta">\r
                                {{ t('smartEnrollProjects.createProject') }}\r
                                <span aria-hidden="true">\u203A</span>\r
                            </span>\r
                        </button>\r
                    }\r
\r
                    @for (project of projects(); track project._id) {\r
                        <article class="card" (click)="openProject(project, $event)">\r
                            <div class="card-top">\r
                                <div class="card-brand">\r
                                    @if (project.branding?.logo) {\r
                                        <img class="logo" [src]="project.branding!.logo" alt="" />\r
                                    } @else {\r
                                        <div class="logo-fallback">\r
                                            <mat-icon svgIcon="heroicons_outline:folder"></mat-icon>\r
                                        </div>\r
                                    }\r
                                </div>\r
                                <div class="card-heading">\r
                                    <h2 class="card-title">{{ project.name || project._id }}</h2>\r
                                    @if (currentFlow(project); as flow) {\r
                                        <div class="status-row">\r
                                            <span\r
                                                class="pill"\r
                                                [class.pill-on]="!isDraftFlow(flow)"\r
                                                [class.pill-off]="isDraftFlow(flow)"\r
                                            >\r
                                                <span class="pill-dot"></span>\r
                                                {{\r
                                                    isDraftFlow(flow)\r
                                                        ? t('smartEnrollProjects.list.draft')\r
                                                        : t('smartEnrollProjects.list.active')\r
                                                }}\r
                                            </span>\r
                                            @if (project.demoMode) {\r
                                                <span class="demo-badge">({{ t('smartEnrollProjects.list.demoMode') }})</span>\r
                                            }\r
                                            <mat-slide-toggle\r
                                                color="primary"\r
                                                [checked]="flowToggleChecked(flow)"\r
                                                (click)="$event.stopPropagation()"\r
                                                (change)="onFlowStatusToggle($event, project)"\r
                                            ></mat-slide-toggle>\r
                                        </div>\r
                                    }\r
                                </div>\r
                                <button\r
                                    type="button"\r
                                    mat-icon-button\r
                                    class="menu-btn"\r
                                    [matMenuTriggerFor]="projectMenu"\r
                                    (click)="$event.stopPropagation()"\r
                                    [attr.aria-label]="t('smartEnrollProjects.list.moreActions')"\r
                                >\r
                                    <mat-icon svgIcon="heroicons_outline:ellipsis-vertical"></mat-icon>\r
                                </button>\r
                                <mat-menu #projectMenu="matMenu">\r
                                    <button mat-menu-item type="button" (click)="openLiveEnrollment(project, $event)">\r
                                        <mat-icon class="menu-item-icon" svgIcon="heroicons_outline:arrow-top-right-on-square"></mat-icon>\r
                                        <span>{{ t('smartEnrollProjects.list.menuLiveEnrollment') }}</span>\r
                                    </button>\r
                                    <button mat-menu-item type="button" (click)="copyLiveEnrollmentUrl(project, $event)">\r
                                        <mat-icon class="menu-item-icon" svgIcon="heroicons_outline:link"></mat-icon>\r
                                        <span>{{ t('smartEnrollProjects.list.copyLiveUrl') }}</span>\r
                                    </button>\r
                                    <button mat-menu-item type="button" (click)="openSecurityModal(project, $event)">\r
                                        <mat-icon class="menu-item-icon" svgIcon="heroicons_outline:shield-check"></mat-icon>\r
                                        <span>{{ t('smartEnrollProjects.list.menuSecurity') }}</span>\r
                                    </button>\r
                                    <button mat-menu-item type="button" (click)="openProject(project, $event)">\r
                                        {{ t('smartEnrollProjects.list.menuEdit') }}\r
                                    </button>\r
                                    <button mat-menu-item type="button" (click)="openRecords(project, $event)">\r
                                        {{ t('smartEnrollProjects.list.menuRecords') }}\r
                                    </button>\r
                                    <button mat-menu-item type="button" (click)="openStaff(project, $event)">\r
                                        {{ t('smartEnrollProjects.list.menuStaff') }}\r
                                    </button>\r
                                </mat-menu>\r
                            </div>\r
\r
                            <div class="rows" (click)="$event.stopPropagation()">\r
                                <button type="button" class="row" (click)="openSection(project, 'signup', $event)">\r
                                    <mat-icon class="row-ic" svgIcon="heroicons_outline:phone"></mat-icon>\r
                                    <span class="row-label">{{ t('smartEnrollProjects.list.signupForm') }}</span>\r
                                    <span class="row-chev" aria-hidden="true">\u203A</span>\r
                                </button>\r
                                <button type="button" class="row" (click)="openSection(project, 'documents', $event)">\r
                                    <mat-icon class="row-ic" svgIcon="heroicons_outline:envelope"></mat-icon>\r
                                    <span class="row-label">{{ t('smartEnrollProjects.list.documents') }}</span>\r
                                    <span class="row-chev" aria-hidden="true">\u203A</span>\r
                                </button>\r
                                <button type="button" class="row" (click)="openSection(project, 'liveness', $event)">\r
                                    <mat-icon class="row-ic" svgIcon="heroicons_outline:face-smile"></mat-icon>\r
                                    <span class="row-label">{{ t('smartEnrollProjects.list.biometrics') }}</span>\r
                                    <span class="row-chev" aria-hidden="true">\u203A</span>\r
                                </button>\r
                                <button type="button" class="row row-last" (click)="openSection(project, 'api', $event)">\r
                                    <mat-icon class="row-ic" svgIcon="heroicons_outline:code-bracket"></mat-icon>\r
                                    <span class="row-label">{{ t('smartEnrollProjects.list.apiIntegration') }}</span>\r
                                    <span class="row-chev" aria-hidden="true">\u203A</span>\r
                                </button>\r
                            </div>\r
\r
                            <div class="members" (click)="$event.stopPropagation()">\r
                                <div class="members-label">{{ t('smartEnrollProjects.list.members') }}</div>\r
                                <div class="members-strip">\r
                                    @for (m of membersForCard(project).slice(0, 5); track m._id) {\r
                                        <div\r
                                            class="member-avatar"\r
                                            [attr.title]="m.staff?.name || ''"\r
                                            [attr.aria-label]="m.staff?.name || ''"\r
                                        >\r
                                            {{ formatAcronym(m.staff?.name) }}\r
                                        </div>\r
                                    }\r
                                    <button\r
                                        type="button"\r
                                        class="member-add"\r
                                        (click)="openStaff(project, $event); $event.stopPropagation()"\r
                                        [attr.aria-label]="t('smartEnrollProjects.list.addMember')"\r
                                    >\r
                                        +\r
                                    </button>\r
                                </div>\r
                            </div>\r
\r
                            <div class="meta">{{ t('smartEnrollProjects.updated') }}: {{ formatUpdated(project.updatedAt) }}</div>\r
\r
                            <div class="card-actions" (click)="$event.stopPropagation()">\r
                                <button\r
                                    type="button"\r
                                    class="btn-live"\r
                                    (click)="openLiveEnrollment(project, $event)"\r
                                >\r
                                    <mat-icon class="btn-live-icon" svgIcon="heroicons_outline:arrow-top-right-on-square"></mat-icon>\r
                                    {{ t('smartEnrollProjects.list.openLiveEnrollment') }}\r
                                </button>\r
                                <div class="card-actions-row">\r
                                    <button type="button" class="btn-primary" (click)="openProject(project, $event)">\r
                                        {{ t('smartEnrollProjects.list.edit') }}\r
                                    </button>\r
                                    <button type="button" class="btn-secondary" (click)="openRecords(project, $event)">\r
                                        {{ t('smartEnrollProjects.list.seeLogs') }}\r
                                    </button>\r
                                </div>\r
                            </div>\r
                        </article>\r
                    }\r
                </div>\r
            }\r
                </div>\r
\r
                @if (!loading() && !error() && !noActivePlan() && activePlan(); as plan) {\r
                    <aside class="workspace__aside">\r
                        <usage-quota-preview [plan]="plan"></usage-quota-preview>\r
                    </aside>\r
                }\r
            </div>\r
        </div>\r
    </div>\r
</ng-container>\r
`, styles: ['@charset "UTF-8";\n\n/* src/app/modules/smart-enroll/projects/project-list/project-list.component.scss */\n:host {\n  display: block;\n}\n.page {\n  min-height: 100%;\n  background: rgb(249, 250, 251);\n}\n.inner {\n  max-width: 88rem;\n  margin: 0 auto;\n  padding: 2rem 1.25rem 3rem;\n}\n.workspace {\n  display: block;\n}\n.workspace--split {\n  display: grid;\n  grid-template-columns: minmax(0, 3fr) minmax(17rem, 2fr);\n  gap: 1.5rem;\n  align-items: start;\n}\n.workspace__aside {\n  position: sticky;\n  top: 1.25rem;\n}\n.workspace--split .grid {\n  grid-template-columns: 1fr;\n}\n@media (max-width: 960px) {\n  .workspace--split {\n    grid-template-columns: 1fr;\n  }\n  .workspace__aside {\n    position: static;\n  }\n}\n.hero {\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.hero-icon {\n  width: 48px;\n  height: 48px;\n  border-radius: 12px;\n  background: rgb(239, 246, 255);\n  border: 1px solid rgb(219, 234, 254);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: rgb(37, 99, 235);\n  flex-shrink: 0;\n}\n.hero-icon mat-icon {\n  width: 26px;\n  height: 26px;\n  font-size: 26px;\n}\n.title {\n  margin: 0;\n  font-size: 1.875rem;\n  font-weight: 650;\n  letter-spacing: -0.03em;\n  color: rgb(17, 24, 39);\n}\n.subtitle {\n  margin: 0.4rem 0 0;\n  font-size: 1rem;\n  color: rgb(107, 114, 128);\n  line-height: 1.45;\n}\n.crumb {\n  font-size: 0.75rem;\n  color: rgb(107, 114, 128);\n  margin-bottom: 1.5rem;\n}\n.crumb-link {\n  color: rgb(55, 65, 81);\n  text-decoration: underline;\n  text-underline-offset: 3px;\n}\n.crumb-sep {\n  margin: 0 0.35rem;\n  color: rgb(209, 213, 219);\n}\n.crumb-here {\n  color: rgb(75, 85, 99);\n}\n.workspace--split .empty-hero-card {\n  max-width: none;\n}\n.usage-teaser {\n  max-width: 28rem;\n}\n.state-loading {\n  display: flex;\n  justify-content: center;\n  padding: 4rem;\n}\n.banner-error {\n  border-radius: 12px;\n  border: 1px solid rgb(254, 202, 202);\n  background: rgb(254, 242, 242);\n  color: rgb(127, 29, 29);\n  padding: 0.85rem 1rem;\n  font-size: 0.9rem;\n}\n.plan-gate {\n  border-radius: 16px;\n  background: rgb(15, 23, 42);\n  color: #fff;\n  padding: 1.75rem 1.5rem 1.5rem;\n  max-width: 32rem;\n}\n.plan-gate-title {\n  margin: 0;\n  font-size: 1.15rem;\n  font-weight: 650;\n}\n.plan-gate-text {\n  margin: 0.5rem 0 0;\n  font-size: 0.9rem;\n  color: rgb(203, 213, 225);\n}\n.plan-gate-muted {\n  margin: 0.75rem 0 0;\n  font-size: 0.85rem;\n  color: rgb(148, 163, 184);\n  line-height: 1.5;\n}\n.plan-gate-cta {\n  margin-top: 1.25rem;\n  width: 100%;\n  border-radius: 12px;\n}\n.empty-hero-card {\n  max-width: 36rem;\n  margin: 0 auto;\n  text-align: center;\n  padding: 2.75rem 1.75rem 2.25rem;\n  border-radius: 18px;\n  border: 1px solid rgb(229, 231, 235);\n  background:\n    linear-gradient(\n      180deg,\n      #fff 0%,\n      rgb(248, 250, 252) 100%);\n  box-shadow: 0 8px 32px rgba(15, 23, 42, 0.08);\n}\n.empty-hero-icon {\n  width: 4rem;\n  height: 4rem;\n  margin: 0 auto 1.25rem;\n  border-radius: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgb(239, 246, 255);\n  border: 1px solid rgb(219, 234, 254);\n  color: rgb(37, 99, 235);\n}\n.empty-hero-icon--muted {\n  background: rgb(243, 244, 246);\n  border-color: rgb(229, 231, 235);\n  color: rgb(107, 114, 128);\n}\n.empty-hero-icon mat-icon {\n  width: 2.25rem;\n  height: 2.25rem;\n  font-size: 2.25rem;\n}\n.empty-hero-title {\n  margin: 0;\n  font-size: 1.35rem;\n  font-weight: 650;\n  letter-spacing: -0.02em;\n  color: rgb(17, 24, 39);\n  line-height: 1.3;\n}\n.empty-hero-text {\n  margin: 0.65rem auto 0;\n  max-width: 26rem;\n  font-size: 0.9375rem;\n  line-height: 1.55;\n  color: rgb(107, 114, 128);\n}\n.empty-hero-cta {\n  margin-top: 1.5rem;\n  min-width: 12rem;\n  border-radius: 12px !important;\n  padding: 0.5rem 1.25rem !important;\n  font-weight: 600 !important;\n}\n.empty-hero-cta mat-icon {\n  margin-right: 0.35rem;\n  vertical-align: middle;\n  width: 1.15rem;\n  height: 1.15rem;\n  font-size: 1.15rem;\n}\n:host-context(.dark) .page {\n  background: #0f0f1f;\n}\n:host-context(.dark) .title {\n  color: #f8fafc;\n}\n:host-context(.dark) .subtitle,\n:host-context(.dark) .crumb,\n:host-context(.dark) .crumb-sep {\n  color: rgb(148, 163, 184);\n}\n:host-context(.dark) .crumb-link,\n:host-context(.dark) .crumb-here {\n  color: rgb(226, 232, 240);\n}\n:host-context(.dark) .empty-hero-card {\n  border-color: rgba(255, 255, 255, 0.1);\n  background:\n    linear-gradient(\n      180deg,\n      #11122a 0%,\n      #161828 100%);\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.35);\n}\n:host-context(.dark) .empty-hero-icon {\n  background: rgba(43, 58, 240, 0.15);\n  border-color: rgba(79, 90, 246, 0.28);\n  color: rgb(129, 140, 248);\n}\n:host-context(.dark) .empty-hero-icon--muted {\n  background: rgba(255, 255, 255, 0.06);\n  border-color: rgba(255, 255, 255, 0.1);\n  color: rgb(148, 163, 184);\n}\n:host-context(.dark) .empty-hero-title {\n  color: #f8fafc;\n}\n:host-context(.dark) .empty-hero-text {\n  color: rgb(148, 163, 184);\n}\n:host-context(.dark) .hero-icon {\n  background: rgba(43, 58, 240, 0.15);\n  border-color: rgba(79, 90, 246, 0.28);\n  color: rgb(129, 140, 248);\n}\n:host-context(.dark) .card {\n  border-color: rgba(255, 255, 255, 0.1);\n  background:\n    linear-gradient(\n      180deg,\n      #11122a 0%,\n      #161828 100%);\n  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.2);\n}\n:host-context(.dark) .card:hover {\n  border-color: rgba(255, 255, 255, 0.16);\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.35);\n}\n:host-context(.dark) .logo-fallback {\n  background: rgba(255, 255, 255, 0.06);\n  color: rgb(148, 163, 184);\n}\n:host-context(.dark) .card-title {\n  color: #f8fafc;\n}\n:host-context(.dark) .pill-on {\n  background: rgba(37, 99, 235, 0.2);\n  color: rgb(147, 197, 253);\n}\n:host-context(.dark) .pill-on .pill-dot {\n  background: rgb(96, 165, 250);\n}\n:host-context(.dark) .pill-off {\n  background: rgba(255, 255, 255, 0.06);\n  color: rgb(148, 163, 184);\n}\n:host-context(.dark) .pill-off .pill-dot {\n  background: rgb(100, 116, 139);\n}\n:host-context(.dark) .demo-badge {\n  color: rgb(148, 163, 184);\n}\n:host-context(.dark) .menu-btn {\n  color: rgb(148, 163, 184);\n  border-color: rgba(255, 255, 255, 0.1);\n  background: rgba(255, 255, 255, 0.04);\n  box-shadow: none;\n}\n:host-context(.dark) .menu-btn:hover {\n  color: #f8fafc;\n  background: rgba(255, 255, 255, 0.08);\n  border-color: rgba(255, 255, 255, 0.16);\n}\n:host-context(.dark) .rows {\n  border-top-color: rgba(255, 255, 255, 0.06);\n}\n:host-context(.dark) .row {\n  border-bottom-color: rgba(255, 255, 255, 0.06);\n  color: #f8fafc;\n}\n:host-context(.dark) .row:hover {\n  background: rgba(255, 255, 255, 0.04);\n}\n:host-context(.dark) .row-ic {\n  color: rgb(148, 163, 184);\n}\n:host-context(.dark) .row-chev {\n  color: rgb(129, 140, 248);\n}\n:host-context(.dark) .member-add {\n  border-color: rgba(255, 255, 255, 0.15);\n  background: rgba(255, 255, 255, 0.04);\n  color: rgb(129, 140, 248);\n}\n:host-context(.dark) .member-add:hover {\n  border-color: rgb(96, 165, 250);\n  background: rgba(37, 99, 235, 0.15);\n}\n:host-context(.dark) .btn-live {\n  background: transparent;\n  border-color: rgb(96, 165, 250);\n  color: rgb(147, 197, 253);\n}\n:host-context(.dark) .btn-live:hover {\n  background: rgba(37, 99, 235, 0.15);\n  border-color: rgb(129, 140, 248);\n  color: rgb(191, 219, 254);\n}\n:host-context(.dark) .btn-live:active {\n  background: rgba(37, 99, 235, 0.25);\n}\n:host-context(.dark) .btn-secondary {\n  background: rgba(255, 255, 255, 0.04);\n  color: #f8fafc;\n  border-color: rgba(255, 255, 255, 0.1);\n}\n:host-context(.dark) .btn-secondary:hover {\n  background: rgba(255, 255, 255, 0.08);\n  border-color: rgba(255, 255, 255, 0.16);\n}\n.grid {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 1.25rem;\n}\n@media (min-width: 900px) {\n  .grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.card {\n  border: 1px solid rgb(229, 231, 235);\n  border-radius: 16px;\n  background: #fff;\n  padding: 1.1rem 1.15rem 1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.65rem;\n  cursor: pointer;\n  transition: border-color 0.15s ease, box-shadow 0.15s ease;\n  text-align: left;\n}\n.card:hover {\n  border-color: rgb(209, 213, 219);\n  box-shadow: 0 4px 14px rgba(15, 23, 42, 0.06);\n}\n.card-create {\n  appearance: none;\n  background:\n    linear-gradient(\n      180deg,\n      rgb(239, 246, 255) 0%,\n      #ffffff 100%);\n  border-style: dashed;\n  border-color: rgb(191, 219, 254);\n  align-items: stretch;\n  text-align: left;\n  cursor: pointer;\n  transition:\n    border-color 0.15s ease,\n    background 0.15s ease,\n    box-shadow 0.15s ease,\n    transform 0.15s ease;\n}\n.card-create:hover {\n  border-color: rgb(96, 165, 250);\n  background:\n    linear-gradient(\n      180deg,\n      rgb(219, 234, 254) 0%,\n      #ffffff 100%);\n  box-shadow: 0 6px 18px rgba(37, 99, 235, 0.12);\n  transform: translateY(-1px);\n}\n.card-create:focus-visible {\n  outline: none;\n  border-color: rgb(37, 99, 235);\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.25);\n}\n.card-create-icon {\n  width: 3.5rem;\n  height: 3.5rem;\n  border-radius: 12px;\n  background: rgb(219, 234, 254);\n  color: rgb(37, 99, 235);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.card-create-icon mat-icon {\n  width: 1.85rem;\n  height: 1.85rem;\n  font-size: 1.85rem;\n}\n.card-create-copy {\n  flex: 1 1 auto;\n  min-width: 0;\n}\n.card-create-title {\n  margin: 0;\n  font-size: 1.05rem;\n  font-weight: 650;\n  letter-spacing: -0.01em;\n  color: rgb(17, 24, 39);\n}\n.card-create-text {\n  margin: 0.35rem 0 0;\n  color: rgb(75, 85, 99);\n  font-size: 0.875rem;\n  line-height: 1.5;\n}\n.card-create-cta {\n  margin-top: auto;\n  align-self: flex-end;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  padding: 0.55rem 1rem;\n  border-radius: 999px;\n  background: rgb(37, 99, 235);\n  color: #fff;\n  font-weight: 600;\n  font-size: 0.875rem;\n}\n:host-context(.dark) .card-create {\n  background:\n    linear-gradient(\n      180deg,\n      rgba(37, 99, 235, 0.12) 0%,\n      rgba(15, 15, 31, 0.6) 100%);\n  border-color: rgba(96, 165, 250, 0.35);\n}\n:host-context(.dark) .card-create:hover {\n  border-color: rgb(96, 165, 250);\n  background:\n    linear-gradient(\n      180deg,\n      rgba(37, 99, 235, 0.2) 0%,\n      rgba(15, 15, 31, 0.6) 100%);\n}\n:host-context(.dark) .card-create-icon {\n  background: rgba(37, 99, 235, 0.18);\n  color: rgb(147, 197, 253);\n}\n:host-context(.dark) .card-create-title {\n  color: #f8fafc;\n}\n:host-context(.dark) .card-create-text {\n  color: rgb(148, 163, 184);\n}\n.card-top {\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr) auto;\n  align-items: start;\n  gap: 0.65rem;\n  position: relative;\n}\n.card-brand {\n  flex-shrink: 0;\n}\n.logo {\n  width: 3.5rem;\n  height: 3.5rem;\n  border-radius: 12px;\n  object-fit: contain;\n}\n.logo-fallback {\n  width: 3.5rem;\n  height: 3.5rem;\n  border-radius: 12px;\n  background: rgb(243, 244, 246);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: rgb(107, 114, 128);\n}\n.card-heading {\n  flex: 1;\n  min-width: 0;\n}\n.card-title {\n  margin: 0;\n  font-size: 1.05rem;\n  font-weight: 650;\n  color: rgb(17, 24, 39);\n  line-height: 1.3;\n}\n.status-row {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 0.5rem;\n  margin-top: 0.35rem;\n}\n.pill {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  border-radius: 999px;\n  padding: 0.2rem 0.55rem 0.2rem 0.4rem;\n  font-size: 0.72rem;\n  font-weight: 650;\n  letter-spacing: 0.02em;\n}\n.pill-dot {\n  width: 6px;\n  height: 6px;\n  border-radius: 999px;\n  flex-shrink: 0;\n}\n.pill-on {\n  background: rgb(219, 234, 254);\n  color: rgb(30, 64, 175);\n}\n.pill-on .pill-dot {\n  background: rgb(37, 99, 235);\n}\n.pill-off {\n  background: rgb(243, 244, 246);\n  color: rgb(75, 85, 99);\n}\n.pill-off .pill-dot {\n  background: rgb(156, 163, 175);\n}\n.demo-badge {\n  font-size: 0.7rem;\n  font-weight: 500;\n  color: rgb(107, 114, 128);\n  letter-spacing: 0.01em;\n}\n.menu-btn {\n  flex-shrink: 0;\n  margin: 0;\n  justify-self: end;\n  align-self: start;\n  color: rgb(55, 65, 81);\n  border: 1px solid rgb(229, 231, 235);\n  border-radius: 999px;\n  background: rgb(255, 255, 255);\n  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.05);\n}\n.menu-btn:hover {\n  color: rgb(17, 24, 39);\n  background: rgb(249, 250, 251);\n  border-color: rgb(209, 213, 219);\n}\n.menu-btn mat-icon {\n  width: 22px;\n  height: 22px;\n  font-size: 22px;\n}\n.menu-item-icon {\n  width: 1.15rem !important;\n  height: 1.15rem !important;\n  font-size: 1.15rem !important;\n  margin-right: 0.65rem;\n  vertical-align: middle;\n  color: rgb(107, 114, 128);\n}\n.rows {\n  border-top: 1px solid rgb(243, 244, 246);\n  margin-top: 0.15rem;\n}\n.row {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.65rem 0.15rem;\n  border: none;\n  border-bottom: 1px solid rgb(243, 244, 246);\n  background: transparent;\n  font: inherit;\n  text-align: left;\n  cursor: pointer;\n  color: rgb(17, 24, 39);\n}\n.row-last {\n  border-bottom: none;\n}\n.row:hover {\n  background: rgb(249, 250, 251);\n}\n.row-ic {\n  width: 1.15rem;\n  height: 1.15rem;\n  font-size: 1.15rem;\n  color: rgb(107, 114, 128);\n  flex-shrink: 0;\n}\n.row-label {\n  flex: 1;\n  font-size: 0.9rem;\n  font-weight: 500;\n}\n.row-chev {\n  color: rgb(37, 99, 235);\n  font-size: 1.25rem;\n  font-weight: 300;\n  line-height: 1;\n}\n.members {\n  padding-top: 0.35rem;\n}\n.members-label {\n  font-size: 0.65rem;\n  font-weight: 650;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  color: rgb(156, 163, 175);\n  margin-bottom: 0.35rem;\n}\n.members-strip {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 0.35rem;\n}\n.member-avatar {\n  width: 2rem;\n  height: 2rem;\n  border-radius: 999px;\n  background:\n    linear-gradient(\n      135deg,\n      rgb(59, 130, 246),\n      rgb(37, 99, 235));\n  color: #fff;\n  font-size: 0.65rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.member-add {\n  width: 2rem;\n  height: 2rem;\n  border-radius: 999px;\n  border: 1px dashed rgb(209, 213, 219);\n  background: rgb(252, 252, 252);\n  color: rgb(37, 99, 235);\n  font-size: 1.1rem;\n  font-weight: 600;\n  line-height: 1;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.member-add:hover {\n  border-color: rgb(59, 130, 246);\n  background: rgb(239, 246, 255);\n}\n.meta {\n  font-size: 0.75rem;\n  color: rgb(156, 163, 175);\n}\n.card-actions {\n  display: flex;\n  flex-direction: column;\n  gap: 0.55rem;\n  margin-top: 0.35rem;\n}\n.card-actions-row {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.btn-live {\n  width: 100%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  border-radius: 999px;\n  padding: 0.62rem 1rem;\n  font-size: 0.9rem;\n  font-weight: 600;\n  letter-spacing: -0.01em;\n  cursor: pointer;\n  color: rgb(37, 99, 235);\n  background: rgb(255, 255, 255);\n  border: 1.5px solid rgb(37, 99, 235);\n  box-shadow: none;\n  transition:\n    background-color 0.15s ease,\n    border-color 0.15s ease,\n    color 0.15s ease;\n}\n.btn-live:hover {\n  background: rgb(239, 246, 255);\n  border-color: rgb(29, 78, 216);\n  color: rgb(29, 78, 216);\n}\n.btn-live:focus-visible {\n  outline: 2px solid rgb(59, 130, 246);\n  outline-offset: 2px;\n}\n.btn-live:active {\n  background: rgb(219, 234, 254);\n}\n.btn-live-icon {\n  width: 1.05rem !important;\n  height: 1.05rem !important;\n  font-size: 1.05rem !important;\n  flex-shrink: 0;\n  color: inherit;\n}\n.btn-primary {\n  flex: 1;\n  min-width: 6rem;\n  border: none;\n  border-radius: 999px;\n  padding: 0.55rem 1rem;\n  font-size: 0.9rem;\n  font-weight: 600;\n  cursor: pointer;\n  background: rgb(37, 99, 235);\n  color: #fff;\n}\n.btn-primary:hover {\n  background: rgb(29, 78, 216);\n}\n.btn-secondary {\n  flex: 1;\n  min-width: 6rem;\n  border-radius: 999px;\n  padding: 0.55rem 1rem;\n  font-size: 0.9rem;\n  font-weight: 600;\n  cursor: pointer;\n  background: #fff;\n  color: rgb(17, 24, 39);\n  border: 1px solid rgb(229, 231, 235);\n}\n.btn-secondary:hover {\n  border-color: rgb(209, 213, 219);\n  background: rgb(249, 250, 251);\n}\n/*# sourceMappingURL=project-list.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProjectListComponent, { className: "ProjectListComponent", filePath: "src/app/modules/smart-enroll/projects/project-list/project-list.component.ts", lineNumber: 53 });
})();
export {
  ProjectListComponent
};
//# sourceMappingURL=chunk-PZTSRP5C.js.map
