import {
  MatSnackBar,
  MatSnackBarModule
} from "./chunk-DXMIRT7Q.js";
import {
  SubscriptionService
} from "./chunk-6NBYN6EP.js";
import "./chunk-LPSMXQSY.js";
import "./chunk-GMB4P7VL.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-LHOHCIQM.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
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
  DatePipe,
  DecimalPipe,
  EventEmitter,
  Input,
  NgForOf,
  NgIf,
  Output,
  Subject,
  ViewChild,
  ViewEncapsulation,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-YTOBX75K.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KTESVR3Q.js";

// src/app/modules/subscription-plans/billing-required-dialog/billing-required-dialog.component.ts
function BillingRequiredDialogComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "mat-icon");
    \u0275\u0275text(6, "credit_card");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "h2", 6);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 7);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 8)(14, "button", 9);
    \u0275\u0275listener("click", function BillingRequiredDialogComponent_div_0_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onGoToBilling());
    });
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "transloco");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 3, "subscriptionPlans.billingRequired.title"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 5, "subscriptionPlans.billingRequired.message"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 7, "subscriptionPlans.billingRequired.cta"), " ");
  }
}
var BillingRequiredDialogComponent = class _BillingRequiredDialogComponent {
  constructor() {
    this.isOpen = false;
    this.goToBilling = new EventEmitter();
  }
  onGoToBilling() {
    this.goToBilling.emit();
  }
  static {
    this.\u0275fac = function BillingRequiredDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BillingRequiredDialogComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BillingRequiredDialogComponent, selectors: [["billing-required-dialog"]], inputs: { isOpen: "isOpen" }, outputs: { goToBilling: "goToBilling" }, decls: 1, vars: 1, consts: [["class", "dialog-backdrop", 4, "ngIf"], [1, "dialog-backdrop"], [1, "dialog-container"], [1, "dialog-content"], [1, "content-section"], [1, "icon-wrapper"], [1, "title"], [1, "message"], [1, "actions"], [1, "btn", "btn-confirm", 3, "click"]], template: function BillingRequiredDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, BillingRequiredDialogComponent_div_0_Template, 17, 9, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.isOpen);
      }
    }, dependencies: [CommonModule, NgIf, MatIconModule, MatIcon, TranslocoModule, TranslocoPipe], styles: ['\n\n.dialog-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, 0.6);\n  backdrop-filter: blur(8px);\n  -webkit-backdrop-filter: blur(8px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 24px;\n  animation: _ngcontent-%COMP%_fadeIn 0.2s ease-out;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.dialog-container[_ngcontent-%COMP%] {\n  position: relative;\n  background: #ffffff;\n  border-radius: 24px;\n  max-width: 480px;\n  width: 100%;\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.05);\n  animation: _ngcontent-%COMP%_slideUp 0.3s ease-out;\n}\n.dark[_nghost-%COMP%]   .dialog-container[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .dialog-container[_ngcontent-%COMP%] {\n  background: rgba(30, 41, 59, 0.95);\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.08);\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px) scale(0.98);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n.dialog-content[_ngcontent-%COMP%] {\n  padding: 40px;\n}\n.content-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n}\n.icon-wrapper[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: 16px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(99, 102, 241, 0.15),\n      rgba(139, 92, 246, 0.15));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 24px;\n  color: #8b5cf6;\n}\n.icon-wrapper[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  font-size: 28px;\n}\n.title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 12px;\n  letter-spacing: -0.02em;\n}\n.dark[_nghost-%COMP%]   .title[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n.message[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #475569;\n  line-height: 1.6;\n  margin: 0 0 28px;\n}\n.dark[_nghost-%COMP%]   .message[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .message[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.7);\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n}\n.actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 16px 32px;\n  font-size: 15px;\n  font-weight: 600;\n  border-radius: 14px;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  border: none;\n  position: relative;\n  overflow: hidden;\n}\n.actions[_ngcontent-%COMP%]   .btn.btn-confirm[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1 0%,\n      #8b5cf6 50%,\n      #a855f7 100%);\n  color: white;\n}\n.actions[_ngcontent-%COMP%]   .btn.btn-confirm[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.2) 0%,\n      transparent 50%);\n  opacity: 0;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.actions[_ngcontent-%COMP%]   .btn.btn-confirm[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 12px 24px rgba(99, 102, 241, 0.4);\n}\n.actions[_ngcontent-%COMP%]   .btn.btn-confirm[_ngcontent-%COMP%]:hover::before {\n  opacity: 1;\n}\n/*# sourceMappingURL=billing-required-dialog.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BillingRequiredDialogComponent, [{
    type: Component,
    args: [{ selector: "billing-required-dialog", standalone: true, imports: [CommonModule, MatIconModule, TranslocoModule], template: `<!-- Dialog Backdrop -->
<div class="dialog-backdrop" *ngIf="isOpen">
  <div class="dialog-container">
    <div class="dialog-content">
      <div class="content-section">
        <div class="icon-wrapper">
          <mat-icon>credit_card</mat-icon>
        </div>
        <h2 class="title">{{ 'subscriptionPlans.billingRequired.title' | transloco }}</h2>
        <p class="message">{{ 'subscriptionPlans.billingRequired.message' | transloco }}</p>
        <div class="actions">
          <button class="btn btn-confirm" (click)="onGoToBilling()">
            {{ 'subscriptionPlans.billingRequired.cta' | transloco }}
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
`, styles: ['/* src/app/modules/subscription-plans/billing-required-dialog/billing-required-dialog.component.scss */\n.dialog-backdrop {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, 0.6);\n  backdrop-filter: blur(8px);\n  -webkit-backdrop-filter: blur(8px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 24px;\n  animation: fadeIn 0.2s ease-out;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.dialog-container {\n  position: relative;\n  background: #ffffff;\n  border-radius: 24px;\n  max-width: 480px;\n  width: 100%;\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.05);\n  animation: slideUp 0.3s ease-out;\n}\n:host-context(.dark) .dialog-container {\n  background: rgba(30, 41, 59, 0.95);\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.08);\n}\n@keyframes slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px) scale(0.98);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n.dialog-content {\n  padding: 40px;\n}\n.content-section {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n}\n.icon-wrapper {\n  width: 56px;\n  height: 56px;\n  border-radius: 16px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(99, 102, 241, 0.15),\n      rgba(139, 92, 246, 0.15));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 24px;\n  color: #8b5cf6;\n}\n.icon-wrapper mat-icon {\n  width: 28px;\n  height: 28px;\n  font-size: 28px;\n}\n.title {\n  font-size: 24px;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 12px;\n  letter-spacing: -0.02em;\n}\n:host-context(.dark) .title {\n  color: #ffffff;\n}\n.message {\n  font-size: 15px;\n  color: #475569;\n  line-height: 1.6;\n  margin: 0 0 28px;\n}\n:host-context(.dark) .message {\n  color: rgba(255, 255, 255, 0.7);\n}\n.actions {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n}\n.actions .btn {\n  padding: 16px 32px;\n  font-size: 15px;\n  font-weight: 600;\n  border-radius: 14px;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  border: none;\n  position: relative;\n  overflow: hidden;\n}\n.actions .btn.btn-confirm {\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1 0%,\n      #8b5cf6 50%,\n      #a855f7 100%);\n  color: white;\n}\n.actions .btn.btn-confirm::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.2) 0%,\n      transparent 50%);\n  opacity: 0;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.actions .btn.btn-confirm:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 12px 24px rgba(99, 102, 241, 0.4);\n}\n.actions .btn.btn-confirm:hover::before {\n  opacity: 1;\n}\n/*# sourceMappingURL=billing-required-dialog.component.css.map */\n'] }]
  }], null, { isOpen: [{
    type: Input
  }], goToBilling: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BillingRequiredDialogComponent, { className: "BillingRequiredDialogComponent", filePath: "src/app/modules/subscription-plans/billing-required-dialog/billing-required-dialog.component.ts", lineNumber: 13 });
})();

// src/app/modules/subscription-plans/subscription-plan-benefits.util.ts
var applyApiRequestDiscountToBasePrice = (basePrice, change) => {
  const d = change;
  const discount = d?.discount ?? 0;
  if (!discount) {
    return basePrice;
  }
  if (d.type === "amount") {
    return Math.max(0, basePrice - discount);
  }
  return Math.max(0, basePrice * (1 - discount / 100));
};
var isMeaningfulPriceChangeRow = (change) => {
  if (!(change.group || change.baseCategory)) {
    return true;
  }
  const key = change.group || change.baseCategory;
  if (key !== "apiRequest") {
    return true;
  }
  const hasPositiveDiscount = change.discount != null && change.discount !== void 0 && Number(change.discount) > 0;
  const hasPositivePrice = change.price != null && Number(change.price) > 0;
  return hasPositiveDiscount || hasPositivePrice;
};
var planHasApiRequestDiscount = (plan) => {
  if (!plan?.changesInPrices?.length) {
    return false;
  }
  return plan.changesInPrices.some((c) => c.group === "apiRequest" && (c.discount != null && Number(c.discount) > 0 || c.price != null && Number(c.price) > 0));
};
var hasOtherPlanWithApiDiscount = (allPlans, excludePlanId) => {
  if (!allPlans?.length || !excludePlanId) {
    return false;
  }
  return allPlans.some((p) => p._id && p._id !== excludePlanId && planHasApiRequestDiscount(p));
};
var formatBenefitRowsFromChanges = (changes) => {
  return (changes || []).map((change) => {
    if (!isMeaningfulPriceChangeRow(change)) {
      return null;
    }
    if (change.group || change.baseCategory) {
      const key = change.group || change.baseCategory || "";
      let value = null;
      if (change.discount !== void 0 && change.discount !== null) {
        value = change.type === "amount" ? `$${Number(change.discount).toFixed(2)} off` : `${change.discount}% off`;
      } else if (change.price && change.price > 0) {
        value = `$${change.price}`;
      }
      return { key, value };
    }
    if (change.addOn) {
      const value = change.count !== void 0 && change.count !== null ? change.count : change.active ? "Included" : null;
      return {
        key: change.addOn,
        value
      };
    }
    return null;
  }).filter((row) => Boolean(row));
};

// src/app/modules/subscription-plans/plan-change-dialog/plan-change-dialog.component.ts
function PlanChangeDialogComponent_div_0_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 36);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (ctx_r1.formattedPlan == null ? null : ctx_r1.formattedPlan.interval) === "year" ? \u0275\u0275pipeBind1(2, 1, "subscriptionPlans.yearly") : \u0275\u0275pipeBind1(3, 3, "subscriptionPlans.monthly"), " ");
  }
}
function PlanChangeDialogComponent_div_0_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 34);
    \u0275\u0275element(2, "path", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "subscriptionPlans.dialog.twoMonthsFree"));
  }
}
function PlanChangeDialogComponent_div_0_div_19_ng_container_1_div_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 47);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const benefit_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(benefit_r3.value);
  }
}
function PlanChangeDialogComponent_div_0_div_19_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 43);
    \u0275\u0275element(2, "path", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span", 45);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, PlanChangeDialogComponent_div_0_div_19_ng_container_1_div_1_span_6_Template, 2, 1, "span", 46);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const benefit_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 2, "pricing." + benefit_r3.key));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", benefit_r3.value);
  }
}
function PlanChangeDialogComponent_div_0_div_19_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, PlanChangeDialogComponent_div_0_div_19_ng_container_1_div_1_Template, 7, 4, "div", 41);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const benefit_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", benefit_r3.key !== "OCR");
  }
}
function PlanChangeDialogComponent_div_0_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275template(1, PlanChangeDialogComponent_div_0_div_19_ng_container_1_Template, 2, 1, "ng-container", 40);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.formattedPlan == null ? null : ctx_r1.formattedPlan.benefits);
  }
}
function PlanChangeDialogComponent_div_0_div_20_button_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 55);
    \u0275\u0275listener("click", function PlanChangeDialogComponent_div_0_div_20_button_18_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onCompareDiscountedPlans());
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 56);
    \u0275\u0275element(5, "path", 57);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "subscriptionPlans.dialog.compareDiscountedPlansShort"));
  }
}
function PlanChangeDialogComponent_div_0_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48)(1, "div", 49)(2, "p", 50);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 51)(6, "div", 52);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(7, "svg", 53);
    \u0275\u0275element(8, "path", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 52);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(13, "svg", 53);
    \u0275\u0275element(14, "path", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(18, PlanChangeDialogComponent_div_0_div_20_button_18_Template, 6, 3, "button", 54);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 4, "subscriptionPlans.dialog.includedFallback"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 6, "subscriptionPlans.dialog.includedFallbackBullet1"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 8, "subscriptionPlans.dialog.includedFallbackBullet2"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.hasBetterDiscountOptions);
  }
}
function PlanChangeDialogComponent_div_0_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 59);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("~", ctx_r1.formatNumber(ctx_r1.formattedPlan == null ? null : ctx_r1.formattedPlan.requestsPerMonth), " ", \u0275\u0275pipeBind1(3, 3, "subscriptionPlans.requestSlider.requests"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("+$", \u0275\u0275pipeBind2(6, 5, ctx_r1.formattedPlan == null ? null : ctx_r1.formattedPlan.requestAddOn, "1.0-0"), "");
  }
}
function PlanChangeDialogComponent_div_0_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 60);
  }
}
function PlanChangeDialogComponent_div_0_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61)(1, "span", 62);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 63);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "subscriptionPlans.dialog.estimatedTotal"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("$", \u0275\u0275pipeBind2(6, 5, ctx_r1.formattedPlan == null ? null : ctx_r1.formattedPlan.estimatedTotal, "1.0-0"), "/", \u0275\u0275pipeBind1(7, 8, "subscriptionPlans.interval.month"), "");
  }
}
function PlanChangeDialogComponent_div_0_div_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "subscriptionPlans.dialog.monthlyEquivalent"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("$", \u0275\u0275pipeBind2(6, 5, ctx_r1.formattedPlan == null ? null : ctx_r1.formattedPlan.amountByMonth, "1.2-2"), "/", \u0275\u0275pipeBind1(7, 8, "subscriptionPlans.interval.month"), "");
  }
}
function PlanChangeDialogComponent_div_0_p_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 65);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "subscriptionPlans.dialog.usageNote"), " ");
  }
}
function PlanChangeDialogComponent_div_0_div_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66)(1, "div", 67)(2, "span", 68);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 69);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 70);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 34);
    \u0275\u0275element(9, "path", 57);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(10, "div", 71)(11, "span", 68);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 69);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 4, "subscriptionPlans.dialog.from"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((ctx_r1.currentPlan == null ? null : ctx_r1.currentPlan.name) || "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 6, "subscriptionPlans.dialog.to"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.formattedPlan == null ? null : ctx_r1.formattedPlan.name);
  }
}
function PlanChangeDialogComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275listener("click", function PlanChangeDialogComponent_div_0_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onBackdropClick($event));
    });
    \u0275\u0275elementStart(1, "div", 2)(2, "button", 3);
    \u0275\u0275listener("click", function PlanChangeDialogComponent_div_0_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCancel());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 4);
    \u0275\u0275element(4, "path", 5);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "div", 6)(6, "div", 7)(7, "div", 8)(8, "h2");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, PlanChangeDialogComponent_div_0_span_10_Template, 4, 5, "span", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 10);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, PlanChangeDialogComponent_div_0_div_14_Template, 6, 3, "div", 11);
    \u0275\u0275elementStart(15, "div", 12)(16, "h3");
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, PlanChangeDialogComponent_div_0_div_19_Template, 2, 1, "div", 13)(20, PlanChangeDialogComponent_div_0_div_20_Template, 19, 10, "div", 14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 15)(22, "h3");
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 16)(26, "div", 17)(27, "span");
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span", 18);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "number");
    \u0275\u0275pipe(33, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(34, PlanChangeDialogComponent_div_0_div_34_Template, 7, 8, "div", 19)(35, PlanChangeDialogComponent_div_0_div_35_Template, 1, 0, "div", 20)(36, PlanChangeDialogComponent_div_0_div_36_Template, 8, 10, "div", 21)(37, PlanChangeDialogComponent_div_0_div_37_Template, 8, 10, "div", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275template(38, PlanChangeDialogComponent_div_0_p_38_Template, 3, 3, "p", 23);
    \u0275\u0275elementStart(39, "div", 24)(40, "div", 25)(41, "span", 26);
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "span", 27);
    \u0275\u0275text(45);
    \u0275\u0275pipe(46, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div", 25)(48, "span", 26);
    \u0275\u0275text(49);
    \u0275\u0275pipe(50, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "span", 27);
    \u0275\u0275text(52);
    \u0275\u0275pipe(53, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(54, PlanChangeDialogComponent_div_0_div_54_Template, 16, 8, "div", 28);
    \u0275\u0275elementStart(55, "p", 29);
    \u0275\u0275text(56);
    \u0275\u0275pipe(57, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "div", 30)(59, "button", 31);
    \u0275\u0275listener("click", function PlanChangeDialogComponent_div_0_Template_button_click_59_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCancel());
    });
    \u0275\u0275text(60);
    \u0275\u0275pipe(61, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "button", 32);
    \u0275\u0275listener("click", function PlanChangeDialogComponent_div_0_Template_button_click_62_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onConfirm());
    });
    \u0275\u0275text(63);
    \u0275\u0275pipe(64, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(65, "div", 33);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(66, "svg", 34);
    \u0275\u0275element(67, "path", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(68, "span");
    \u0275\u0275text(69);
    \u0275\u0275pipe(70, "transloco");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.formattedPlan == null ? null : ctx_r1.formattedPlan.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.formattedPlan == null ? null : ctx_r1.formattedPlan.interval);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 26, ctx_r1.reviewPlanTranslocoKey));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (ctx_r1.formattedPlan == null ? null : ctx_r1.formattedPlan.interval) === "year");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 28, "subscriptionPlans.dialog.whatsIncluded"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.hasMeaningfulBenefits);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.hasMeaningfulBenefits);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 30, "subscriptionPlans.dialog.orderSummary"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", ctx_r1.formattedPlan == null ? null : ctx_r1.formattedPlan.name, " ", \u0275\u0275pipeBind1(29, 32, "subscriptionPlans.dialog.planLabel"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("$", \u0275\u0275pipeBind2(32, 34, ctx_r1.formattedPlan == null ? null : ctx_r1.formattedPlan.amountByMonth, "1.0-0"), "/", \u0275\u0275pipeBind1(33, 37, "subscriptionPlans.interval.month"), "");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.formattedPlan == null ? null : ctx_r1.formattedPlan.hasUsageAddon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.formattedPlan == null ? null : ctx_r1.formattedPlan.hasUsageAddon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.formattedPlan == null ? null : ctx_r1.formattedPlan.hasUsageAddon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.formattedPlan == null ? null : ctx_r1.formattedPlan.interval) === "year" && !(ctx_r1.formattedPlan == null ? null : ctx_r1.formattedPlan.hasUsageAddon));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.formattedPlan == null ? null : ctx_r1.formattedPlan.hasUsageAddon);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(43, 39, "subscriptionPlans.dialog.starts"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(46, 41, ctx_r1.formattedPlan == null ? null : ctx_r1.formattedPlan.startDate, "mediumDate"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(50, 44, "subscriptionPlans.dialog.renews"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(53, 46, ctx_r1.formattedPlan == null ? null : ctx_r1.formattedPlan.endDate, "mediumDate"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.currentPlan);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(57, 49, "subscriptionPlans.dialog.cancelNote"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(61, 51, "subscriptionPlans.dialog.cancel"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(64, 53, ctx_r1.confirmActionTranslocoKey), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(70, 55, "subscriptionPlans.dialog.secureTransaction"));
  }
}
var PlanChangeDialogComponent = class _PlanChangeDialogComponent {
  constructor() {
    this.currentPlan = null;
    this.newPlan = null;
    this.allPlans = null;
    this.isOpen = false;
    this.requestsPerMonth = 0;
    this.confirm = new EventEmitter();
    this.cancel = new EventEmitter();
    this.comparePlans = new EventEmitter();
    this.formattedPlan = null;
    this.BASE_REQUEST_PRICE = 0.3;
  }
  ngOnInit() {
    this._formatPlan();
  }
  ngOnChanges() {
    if (this.newPlan) {
      this._formatPlan();
    }
  }
  get hasMeaningfulBenefits() {
    return (this.formattedPlan?.benefits?.length ?? 0) > 0;
  }
  get hasBetterDiscountOptions() {
    return hasOtherPlanWithApiDiscount(this.allPlans, this.newPlan?._id);
  }
  /**
   * Drives copy for first-time subscribe vs upgrade vs downgrade vs same-tier/interval change.
   */
  get subscriptionDialogContext() {
    if (!this.currentPlan) {
      return "first";
    }
    const cur = this.currentPlan.subscriptionPlan?.amount ?? 0;
    const next = this.newPlan?.amount ?? 0;
    if (next < cur) {
      return "downgrade";
    }
    if (next > cur) {
      return "upgrade";
    }
    return "planChange";
  }
  get reviewPlanTranslocoKey() {
    const map = {
      first: "subscriptionPlans.dialog.reviewPlanFirst",
      upgrade: "subscriptionPlans.dialog.reviewPlanUpgrade",
      downgrade: "subscriptionPlans.dialog.reviewPlanDowngrade",
      planChange: "subscriptionPlans.dialog.reviewPlanPlanChange"
    };
    return map[this.subscriptionDialogContext];
  }
  get confirmActionTranslocoKey() {
    const map = {
      first: "subscriptionPlans.dialog.confirmSubscribe",
      upgrade: "subscriptionPlans.dialog.confirmUpgrade",
      downgrade: "subscriptionPlans.dialog.confirmDowngrade",
      planChange: "subscriptionPlans.dialog.confirmPlanChange"
    };
    return map[this.subscriptionDialogContext];
  }
  onCompareDiscountedPlans() {
    this.comparePlans.emit();
  }
  formatNumber(value) {
    if (value >= 1e3) {
      return (value / 1e3).toFixed(value % 1e3 === 0 ? 0 : 1) + "k";
    }
    return value.toString();
  }
  _formatPlan() {
    if (!this.newPlan)
      return;
    const now = /* @__PURE__ */ new Date();
    const intervalMonths = this.newPlan.interval === "year" ? 12 : 1;
    const endDate = new Date(now);
    endDate.setMonth(endDate.getMonth() + this.newPlan.intervalCount * intervalMonths);
    const d = this.newPlan.discount;
    const discount = d?.discount ?? 0;
    let effectiveCostPerReq = this.BASE_REQUEST_PRICE;
    if (discount) {
      if (d.type === "amount") {
        effectiveCostPerReq = Math.max(0, this.BASE_REQUEST_PRICE - discount);
      } else {
        effectiveCostPerReq = Math.max(0, this.BASE_REQUEST_PRICE * (1 - discount / 100));
      }
    }
    const baseMonthly = this.newPlan.interval === "year" ? this.newPlan.amount / (this.newPlan.intervalCount * 12) : this.newPlan.amount || 0;
    const includedRequests = effectiveCostPerReq > 0 ? Math.floor(baseMonthly / effectiveCostPerReq) : Infinity;
    const extraRequests = Math.max(0, this.requestsPerMonth - includedRequests);
    const requestAddOn = extraRequests * effectiveCostPerReq;
    this.formattedPlan = __spreadProps(__spreadValues({}, this.newPlan), {
      startDate: now,
      endDate,
      amountByMonth: baseMonthly,
      requestsPerMonth: this.requestsPerMonth,
      requestAddOn,
      estimatedTotal: baseMonthly + requestAddOn,
      hasUsageAddon: this.requestsPerMonth > 0 && requestAddOn > 0,
      benefits: formatBenefitRowsFromChanges(this.newPlan.changesInPrices || [])
    });
  }
  onConfirm() {
    this.confirm.emit();
  }
  onCancel() {
    this.cancel.emit();
  }
  onBackdropClick(event) {
    if (event.target.classList.contains("dialog-backdrop")) {
      this.onCancel();
    }
  }
  static {
    this.\u0275fac = function PlanChangeDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PlanChangeDialogComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PlanChangeDialogComponent, selectors: [["plan-change-dialog"]], inputs: { currentPlan: "currentPlan", newPlan: "newPlan", allPlans: "allPlans", isOpen: "isOpen", requestsPerMonth: "requestsPerMonth" }, outputs: { confirm: "confirm", cancel: "cancel", comparePlans: "comparePlans" }, features: [\u0275\u0275NgOnChangesFeature], decls: 1, vars: 1, consts: [["class", "dialog-backdrop", 3, "click", 4, "ngIf"], [1, "dialog-backdrop", 3, "click"], [1, "dialog-container"], [1, "close-btn", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M6 18L18 6M6 6l12 12"], [1, "dialog-content"], [1, "plan-details"], [1, "plan-header"], ["class", "interval-badge", 4, "ngIf"], [1, "plan-subtitle"], ["class", "savings-banner", 4, "ngIf"], [1, "benefits-section"], ["class", "benefits-list", 4, "ngIf"], ["class", "benefits-fallback", 4, "ngIf"], [1, "order-summary"], [1, "price-section"], [1, "price-row"], [1, "price"], ["class", "price-row addon-row", 4, "ngIf"], ["class", "price-divider", 4, "ngIf"], ["class", "price-row total-row", 4, "ngIf"], ["class", "price-row subtotal", 4, "ngIf"], ["class", "usage-note", 4, "ngIf"], [1, "dates-section"], [1, "date-row"], [1, "date-label"], [1, "date-value"], ["class", "plan-change-indicator", 4, "ngIf"], [1, "note"], [1, "actions"], [1, "btn", "btn-cancel", 3, "click"], [1, "btn", "btn-confirm", 3, "click"], [1, "security-note"], ["viewBox", "0 0 20 20", "fill", "currentColor"], ["fill-rule", "evenodd", "d", "M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z", "clip-rule", "evenodd"], [1, "interval-badge"], [1, "savings-banner"], ["fill-rule", "evenodd", "d", "M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm2.5 3a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm6.207.293a1 1 0 00-1.414 0l-6 6a1 1 0 101.414 1.414l6-6a1 1 0 000-1.414zM12.5 10a1.5 1.5 0 100 3 1.5 1.5 0 000-3z", "clip-rule", "evenodd"], [1, "benefits-list"], [4, "ngFor", "ngForOf"], ["class", "benefit-item", 4, "ngIf"], [1, "benefit-item"], ["viewBox", "0 0 20 20", "fill", "currentColor", 1, "check-icon"], ["fill-rule", "evenodd", "d", "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z", "clip-rule", "evenodd"], [1, "benefit-key"], ["class", "benefit-value", 4, "ngIf"], [1, "benefit-value"], [1, "benefits-fallback"], [1, "benefits-fallback-card"], [1, "benefits-fallback-intro"], [1, "benefits-fallback-rows"], [1, "benefits-fallback-row"], ["viewBox", "0 0 20 20", "fill", "currentColor", "aria-hidden", "true", 1, "benefits-fallback-check"], ["type", "button", "class", "btn-compare-plans-link", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn-compare-plans-link", 3, "click"], ["viewBox", "0 0 20 20", "fill", "currentColor", "aria-hidden", "true", 1, "btn-compare-plans-chevron"], ["fill-rule", "evenodd", "d", "M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z", "clip-rule", "evenodd"], [1, "price-row", "addon-row"], [1, "price", "addon-price"], [1, "price-divider"], [1, "price-row", "total-row"], [1, "total-label-text"], [1, "price", "total-price"], [1, "price-row", "subtotal"], [1, "usage-note"], [1, "plan-change-indicator"], [1, "plan-from"], [1, "plan-label"], [1, "plan-name"], [1, "arrow"], [1, "plan-to"]], template: function PlanChangeDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, PlanChangeDialogComponent_div_0_Template, 71, 57, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.isOpen);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, DecimalPipe, DatePipe, TranslocoModule, TranslocoPipe], styles: ['\n\n.dialog-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, 0.6);\n  backdrop-filter: blur(8px);\n  -webkit-backdrop-filter: blur(8px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 24px;\n  animation: _ngcontent-%COMP%_fadeIn 0.2s ease-out;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.dialog-container[_ngcontent-%COMP%] {\n  position: relative;\n  background: #ffffff;\n  border-radius: 24px;\n  max-width: 900px;\n  width: 100%;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.05);\n  animation: _ngcontent-%COMP%_slideUp 0.3s ease-out;\n}\n.dark[_nghost-%COMP%]   .dialog-container[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .dialog-container[_ngcontent-%COMP%] {\n  background: rgba(30, 41, 59, 0.95);\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.08);\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px) scale(0.98);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n.close-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  width: 40px;\n  height: 40px;\n  border: none;\n  background: rgba(0, 0, 0, 0.04);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 12px;\n  color: #94a3b8;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  z-index: 10;\n}\n.dark[_nghost-%COMP%]   .close-btn[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.06);\n  color: rgba(255, 255, 255, 0.4);\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.08);\n  color: #0f172a;\n}\n.dark[_nghost-%COMP%]   .close-btn[_ngcontent-%COMP%]:hover, .dark   [_nghost-%COMP%]   .close-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.1);\n  color: #ffffff;\n}\n.close-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n.dialog-content[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n}\n@media (max-width: 768px) {\n  .dialog-content[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.plan-details[_ngcontent-%COMP%] {\n  padding: 40px;\n  border-right: 1px solid #e2e8f0;\n}\n.dark[_nghost-%COMP%]   .plan-details[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .plan-details[_ngcontent-%COMP%] {\n  border-right-color: rgba(255, 255, 255, 0.08);\n}\n@media (max-width: 768px) {\n  .plan-details[_ngcontent-%COMP%] {\n    border-right: none;\n    border-bottom: 1px solid #e2e8f0;\n    padding: 32px 24px;\n  }\n  .dark[_nghost-%COMP%]   .plan-details[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .plan-details[_ngcontent-%COMP%] {\n    border-bottom-color: rgba(255, 255, 255, 0.08);\n  }\n}\n.plan-details[_ngcontent-%COMP%]   .plan-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 8px;\n}\n.plan-details[_ngcontent-%COMP%]   .plan-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0;\n  letter-spacing: -0.02em;\n}\n.dark[_nghost-%COMP%]   .plan-details[_ngcontent-%COMP%]   .plan-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .plan-details[_ngcontent-%COMP%]   .plan-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff 0%,\n      rgba(255, 255, 255, 0.85) 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.plan-details[_ngcontent-%COMP%]   .plan-header[_ngcontent-%COMP%]   .interval-badge[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: white;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1 0%,\n      #8b5cf6 50%,\n      #a855f7 100%);\n  padding: 6px 14px;\n  border-radius: 100px;\n  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);\n}\n.plan-details[_ngcontent-%COMP%]   .plan-subtitle[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #94a3b8;\n  margin: 0 0 28px;\n}\n.dark[_nghost-%COMP%]   .plan-details[_ngcontent-%COMP%]   .plan-subtitle[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .plan-details[_ngcontent-%COMP%]   .plan-subtitle[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.4);\n}\n.plan-details[_ngcontent-%COMP%]   .savings-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(16, 185, 129, 0.1),\n      rgba(5, 150, 105, 0.1));\n  border: 1px solid rgba(16, 185, 129, 0.2);\n  color: #10b981;\n  padding: 14px 18px;\n  border-radius: 14px;\n  font-size: 14px;\n  font-weight: 600;\n  margin-bottom: 28px;\n}\n.dark[_nghost-%COMP%]   .plan-details[_ngcontent-%COMP%]   .savings-banner[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .plan-details[_ngcontent-%COMP%]   .savings-banner[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(16, 185, 129, 0.15),\n      rgba(5, 150, 105, 0.15));\n  border-color: rgba(16, 185, 129, 0.3);\n}\n.plan-details[_ngcontent-%COMP%]   .savings-banner[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n.benefits-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #94a3b8;\n  margin: 0 0 14px;\n  letter-spacing: 0.02em;\n  text-transform: none;\n}\n.dark[_nghost-%COMP%]   .benefits-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .benefits-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.4);\n}\n.benefits-section[_ngcontent-%COMP%]   .benefits-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.benefits-section[_ngcontent-%COMP%]   .benefit-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 16px;\n  background: rgba(99, 102, 241, 0.04);\n  border-radius: 12px;\n  font-size: 14px;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.dark[_nghost-%COMP%]   .benefits-section[_ngcontent-%COMP%]   .benefit-item[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .benefits-section[_ngcontent-%COMP%]   .benefit-item[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.04);\n}\n.benefits-section[_ngcontent-%COMP%]   .benefit-item[_ngcontent-%COMP%]:hover {\n  background: rgba(99, 102, 241, 0.08);\n}\n.dark[_nghost-%COMP%]   .benefits-section[_ngcontent-%COMP%]   .benefit-item[_ngcontent-%COMP%]:hover, .dark   [_nghost-%COMP%]   .benefits-section[_ngcontent-%COMP%]   .benefit-item[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.08);\n}\n.benefits-section[_ngcontent-%COMP%]   .benefit-item[_ngcontent-%COMP%]   .check-icon[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  color: #10b981;\n  flex-shrink: 0;\n}\n.benefits-section[_ngcontent-%COMP%]   .benefit-item[_ngcontent-%COMP%]   .benefit-key[_ngcontent-%COMP%] {\n  color: #475569;\n  flex: 1;\n}\n.dark[_nghost-%COMP%]   .benefits-section[_ngcontent-%COMP%]   .benefit-item[_ngcontent-%COMP%]   .benefit-key[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .benefits-section[_ngcontent-%COMP%]   .benefit-item[_ngcontent-%COMP%]   .benefit-key[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.7);\n}\n.benefits-section[_ngcontent-%COMP%]   .benefit-item[_ngcontent-%COMP%]   .benefit-value[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #8b5cf6;\n}\n.benefits-section[_ngcontent-%COMP%]   .benefits-fallback[_ngcontent-%COMP%]   .benefits-fallback-card[_ngcontent-%COMP%] {\n  padding: 18px 18px 16px;\n  border-radius: 16px;\n  border: 1px solid #e2e8f0;\n  background: rgba(248, 250, 252, 0.9);\n}\n.dark[_nghost-%COMP%]   .benefits-section[_ngcontent-%COMP%]   .benefits-fallback[_ngcontent-%COMP%]   .benefits-fallback-card[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .benefits-section[_ngcontent-%COMP%]   .benefits-fallback[_ngcontent-%COMP%]   .benefits-fallback-card[_ngcontent-%COMP%] {\n  border-color: rgba(255, 255, 255, 0.08);\n  background: rgba(255, 255, 255, 0.04);\n}\n.benefits-section[_ngcontent-%COMP%]   .benefits-fallback[_ngcontent-%COMP%]   .benefits-fallback-intro[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n  font-size: 14px;\n  line-height: 1.55;\n  color: #475569;\n}\n.dark[_nghost-%COMP%]   .benefits-section[_ngcontent-%COMP%]   .benefits-fallback[_ngcontent-%COMP%]   .benefits-fallback-intro[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .benefits-section[_ngcontent-%COMP%]   .benefits-fallback[_ngcontent-%COMP%]   .benefits-fallback-intro[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.7);\n}\n.benefits-section[_ngcontent-%COMP%]   .benefits-fallback[_ngcontent-%COMP%]   .benefits-fallback-rows[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin-bottom: 16px;\n}\n.benefits-section[_ngcontent-%COMP%]   .benefits-fallback[_ngcontent-%COMP%]   .benefits-fallback-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  font-size: 13px;\n  line-height: 1.45;\n  color: #475569;\n}\n.dark[_nghost-%COMP%]   .benefits-section[_ngcontent-%COMP%]   .benefits-fallback[_ngcontent-%COMP%]   .benefits-fallback-row[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .benefits-section[_ngcontent-%COMP%]   .benefits-fallback[_ngcontent-%COMP%]   .benefits-fallback-row[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.7);\n}\n.benefits-section[_ngcontent-%COMP%]   .benefits-fallback[_ngcontent-%COMP%]   .benefits-fallback-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.benefits-section[_ngcontent-%COMP%]   .benefits-fallback[_ngcontent-%COMP%]   .benefits-fallback-check[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  flex-shrink: 0;\n  margin-top: 2px;\n  color: rgba(16, 185, 129, 0.85);\n}\n.dark[_nghost-%COMP%]   .benefits-section[_ngcontent-%COMP%]   .benefits-fallback[_ngcontent-%COMP%]   .benefits-fallback-check[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .benefits-section[_ngcontent-%COMP%]   .benefits-fallback[_ngcontent-%COMP%]   .benefits-fallback-check[_ngcontent-%COMP%] {\n  color: rgba(52, 211, 153, 0.9);\n}\n.benefits-section[_ngcontent-%COMP%]   .benefits-fallback[_ngcontent-%COMP%]   .btn-compare-plans-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  margin: 0;\n  padding: 6px 0;\n  font-size: 13px;\n  font-weight: 600;\n  color: #6366f1;\n  background: none;\n  border: none;\n  cursor: pointer;\n  text-decoration: none;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.dark[_nghost-%COMP%]   .benefits-section[_ngcontent-%COMP%]   .benefits-fallback[_ngcontent-%COMP%]   .btn-compare-plans-link[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .benefits-section[_ngcontent-%COMP%]   .benefits-fallback[_ngcontent-%COMP%]   .btn-compare-plans-link[_ngcontent-%COMP%] {\n  color: #a5b4fc;\n}\n.benefits-section[_ngcontent-%COMP%]   .benefits-fallback[_ngcontent-%COMP%]   .btn-compare-plans-link[_ngcontent-%COMP%]:hover {\n  color: #4f46e5;\n  text-decoration: underline;\n  text-underline-offset: 3px;\n}\n.dark[_nghost-%COMP%]   .benefits-section[_ngcontent-%COMP%]   .benefits-fallback[_ngcontent-%COMP%]   .btn-compare-plans-link[_ngcontent-%COMP%]:hover, .dark   [_nghost-%COMP%]   .benefits-section[_ngcontent-%COMP%]   .benefits-fallback[_ngcontent-%COMP%]   .btn-compare-plans-link[_ngcontent-%COMP%]:hover {\n  color: #c7d2fe;\n}\n.benefits-section[_ngcontent-%COMP%]   .benefits-fallback[_ngcontent-%COMP%]   .btn-compare-plans-link[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid rgba(99, 102, 241, 0.55);\n  outline-offset: 3px;\n  border-radius: 4px;\n}\n.benefits-section[_ngcontent-%COMP%]   .benefits-fallback[_ngcontent-%COMP%]   .btn-compare-plans-link[_ngcontent-%COMP%]   .btn-compare-plans-chevron[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  flex-shrink: 0;\n  opacity: 0.85;\n}\n.order-summary[_ngcontent-%COMP%] {\n  padding: 40px;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(99, 102, 241, 0.03) 0%,\n      rgba(139, 92, 246, 0.03) 100%);\n  border-radius: 0 24px 24px 0;\n}\n.dark[_nghost-%COMP%]   .order-summary[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .order-summary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      rgba(99, 102, 241, 0.08) 0%,\n      rgba(139, 92, 246, 0.08) 100%);\n}\n@media (max-width: 768px) {\n  .order-summary[_ngcontent-%COMP%] {\n    border-radius: 0 0 24px 24px;\n    padding: 32px 24px;\n  }\n}\n.order-summary[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 28px;\n}\n.dark[_nghost-%COMP%]   .order-summary[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .order-summary[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n.price-section[_ngcontent-%COMP%] {\n  padding-bottom: 24px;\n  border-bottom: 1px solid #e2e8f0;\n  margin-bottom: 24px;\n}\n.dark[_nghost-%COMP%]   .price-section[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .price-section[_ngcontent-%COMP%] {\n  border-bottom-color: rgba(255, 255, 255, 0.08);\n}\n.price-section[_ngcontent-%COMP%]   .price-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 15px;\n  color: #475569;\n}\n.dark[_nghost-%COMP%]   .price-section[_ngcontent-%COMP%]   .price-row[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .price-section[_ngcontent-%COMP%]   .price-row[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.7);\n}\n.price-section[_ngcontent-%COMP%]   .price-row[_ngcontent-%COMP%]:not(:last-child) {\n  margin-bottom: 12px;\n}\n.price-section[_ngcontent-%COMP%]   .price-row[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 800;\n  color: #0f172a;\n}\n.dark[_nghost-%COMP%]   .price-section[_ngcontent-%COMP%]   .price-row[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .price-section[_ngcontent-%COMP%]   .price-row[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff 0%,\n      rgba(255, 255, 255, 0.85) 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.price-section[_ngcontent-%COMP%]   .price-row.subtotal[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .price-section[_ngcontent-%COMP%]   .price-row.subtotal[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .price-section[_ngcontent-%COMP%]   .price-row.subtotal[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.4);\n}\n.dates-section[_ngcontent-%COMP%] {\n  padding-bottom: 24px;\n  border-bottom: 1px solid #e2e8f0;\n  margin-bottom: 24px;\n}\n.dark[_nghost-%COMP%]   .dates-section[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .dates-section[_ngcontent-%COMP%] {\n  border-bottom-color: rgba(255, 255, 255, 0.08);\n}\n.dates-section[_ngcontent-%COMP%]   .date-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 14px;\n}\n.dates-section[_ngcontent-%COMP%]   .date-row[_ngcontent-%COMP%]:not(:last-child) {\n  margin-bottom: 10px;\n}\n.dates-section[_ngcontent-%COMP%]   .date-row[_ngcontent-%COMP%]   .date-label[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .dates-section[_ngcontent-%COMP%]   .date-row[_ngcontent-%COMP%]   .date-label[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .dates-section[_ngcontent-%COMP%]   .date-row[_ngcontent-%COMP%]   .date-label[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.4);\n}\n.dates-section[_ngcontent-%COMP%]   .date-row[_ngcontent-%COMP%]   .date-value[_ngcontent-%COMP%] {\n  color: #0f172a;\n  font-weight: 600;\n}\n.dark[_nghost-%COMP%]   .dates-section[_ngcontent-%COMP%]   .date-row[_ngcontent-%COMP%]   .date-value[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .dates-section[_ngcontent-%COMP%]   .date-row[_ngcontent-%COMP%]   .date-value[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n.plan-change-indicator[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 16px;\n  padding: 20px;\n  margin-bottom: 24px;\n}\n.dark[_nghost-%COMP%]   .plan-change-indicator[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .plan-change-indicator[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.04);\n  border-color: rgba(255, 255, 255, 0.08);\n}\n.plan-change-indicator[_ngcontent-%COMP%]   .plan-from[_ngcontent-%COMP%], \n.plan-change-indicator[_ngcontent-%COMP%]   .plan-to[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n  flex: 1;\n}\n.plan-change-indicator[_ngcontent-%COMP%]   .plan-from[_ngcontent-%COMP%]   .plan-label[_ngcontent-%COMP%], \n.plan-change-indicator[_ngcontent-%COMP%]   .plan-to[_ngcontent-%COMP%]   .plan-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #94a3b8;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  font-weight: 600;\n}\n.dark[_nghost-%COMP%]   .plan-change-indicator[_ngcontent-%COMP%]   .plan-from[_ngcontent-%COMP%]   .plan-label[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .plan-change-indicator[_ngcontent-%COMP%]   .plan-from[_ngcontent-%COMP%]   .plan-label[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .plan-change-indicator[_ngcontent-%COMP%]   .plan-to[_ngcontent-%COMP%]   .plan-label[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .plan-change-indicator[_ngcontent-%COMP%]   .plan-to[_ngcontent-%COMP%]   .plan-label[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.4);\n}\n.plan-change-indicator[_ngcontent-%COMP%]   .plan-from[_ngcontent-%COMP%]   .plan-name[_ngcontent-%COMP%], \n.plan-change-indicator[_ngcontent-%COMP%]   .plan-to[_ngcontent-%COMP%]   .plan-name[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #0f172a;\n}\n.dark[_nghost-%COMP%]   .plan-change-indicator[_ngcontent-%COMP%]   .plan-from[_ngcontent-%COMP%]   .plan-name[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .plan-change-indicator[_ngcontent-%COMP%]   .plan-from[_ngcontent-%COMP%]   .plan-name[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .plan-change-indicator[_ngcontent-%COMP%]   .plan-to[_ngcontent-%COMP%]   .plan-name[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .plan-change-indicator[_ngcontent-%COMP%]   .plan-to[_ngcontent-%COMP%]   .plan-name[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n.plan-change-indicator[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n  padding: 0 16px;\n}\n.plan-change-indicator[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  color: #10b981;\n}\n.note[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #94a3b8;\n  margin: 0 0 28px;\n  line-height: 1.6;\n}\n.dark[_nghost-%COMP%]   .note[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .note[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.4);\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n}\n.actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 16px 24px;\n  font-size: 15px;\n  font-weight: 600;\n  border-radius: 14px;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  border: none;\n  position: relative;\n  overflow: hidden;\n}\n.actions[_ngcontent-%COMP%]   .btn.btn-cancel[_ngcontent-%COMP%] {\n  background: transparent;\n  color: #475569;\n  border: 1px solid #e2e8f0;\n}\n.dark[_nghost-%COMP%]   .actions[_ngcontent-%COMP%]   .btn.btn-cancel[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .actions[_ngcontent-%COMP%]   .btn.btn-cancel[_ngcontent-%COMP%] {\n  border-color: rgba(255, 255, 255, 0.08);\n  color: rgba(255, 255, 255, 0.7);\n}\n.actions[_ngcontent-%COMP%]   .btn.btn-cancel[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.04);\n  color: #0f172a;\n}\n.dark[_nghost-%COMP%]   .actions[_ngcontent-%COMP%]   .btn.btn-cancel[_ngcontent-%COMP%]:hover, .dark   [_nghost-%COMP%]   .actions[_ngcontent-%COMP%]   .btn.btn-cancel[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.06);\n  color: #ffffff;\n}\n.actions[_ngcontent-%COMP%]   .btn.btn-confirm[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1 0%,\n      #8b5cf6 50%,\n      #a855f7 100%);\n  color: white;\n}\n.actions[_ngcontent-%COMP%]   .btn.btn-confirm[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.2) 0%,\n      transparent 50%);\n  opacity: 0;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.actions[_ngcontent-%COMP%]   .btn.btn-confirm[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 12px 24px rgba(99, 102, 241, 0.4);\n}\n.actions[_ngcontent-%COMP%]   .btn.btn-confirm[_ngcontent-%COMP%]:hover::before {\n  opacity: 1;\n}\n.security-note[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  margin-top: 20px;\n  font-size: 13px;\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .security-note[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .security-note[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.4);\n}\n.security-note[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n.usage-note[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #94a3b8;\n  margin: 8px 0 0;\n  line-height: 1.5;\n  font-style: italic;\n}\n.dark[_nghost-%COMP%]   .usage-note[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .usage-note[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.4);\n}\n.addon-row[_ngcontent-%COMP%]   .addon-price[_ngcontent-%COMP%] {\n  color: #10b981 !important;\n}\n.price-divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: #e2e8f0;\n  margin: 4px 0;\n}\n.dark[_nghost-%COMP%]   .price-divider[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .price-divider[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.08);\n}\n.total-row[_ngcontent-%COMP%]   .total-label-text[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #0f172a;\n}\n.dark[_nghost-%COMP%]   .total-row[_ngcontent-%COMP%]   .total-label-text[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .total-row[_ngcontent-%COMP%]   .total-label-text[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n.total-row[_ngcontent-%COMP%]   .total-price[_ngcontent-%COMP%] {\n  font-size: 20px !important;\n  font-weight: 800 !important;\n  color: #8b5cf6 !important;\n}\n@media (max-width: 768px) {\n  .dialog-backdrop[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .plan-details[_ngcontent-%COMP%]   .plan-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 26px;\n  }\n  .order-summary[_ngcontent-%COMP%]   .price-section[_ngcontent-%COMP%]   .price-row[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n  .plan-change-indicator[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .plan-change-indicator[_ngcontent-%COMP%]   .plan-from[_ngcontent-%COMP%]   .plan-name[_ngcontent-%COMP%], \n   .plan-change-indicator[_ngcontent-%COMP%]   .plan-to[_ngcontent-%COMP%]   .plan-name[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .plan-change-indicator[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n    padding: 0 8px;\n  }\n  .plan-change-indicator[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 20px;\n    height: 20px;\n  }\n  .actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=plan-change-dialog.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlanChangeDialogComponent, [{
    type: Component,
    args: [{ selector: "plan-change-dialog", standalone: true, imports: [CommonModule, TranslocoModule], template: `<!-- Dialog Backdrop -->
<div class="dialog-backdrop" *ngIf="isOpen" (click)="onBackdropClick($event)">
  <div class="dialog-container">
    <!-- Close Button -->
    <button class="close-btn" (click)="onCancel()">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M6 18L18 6M6 6l12 12"/>
      </svg>
    </button>

    <div class="dialog-content">
      <!-- Left Side - Plan Details -->
      <div class="plan-details">
        <div class="plan-header">
          <h2>{{ formattedPlan?.name }}</h2>
          <span class="interval-badge" *ngIf="formattedPlan?.interval">
            {{ formattedPlan?.interval === 'year' ? ('subscriptionPlans.yearly' | transloco) : ('subscriptionPlans.monthly' | transloco) }}
          </span>
        </div>

        <p class="plan-subtitle">{{ reviewPlanTranslocoKey | transloco }}</p>

        <!-- Yearly Savings Banner -->
        <div class="savings-banner" *ngIf="formattedPlan?.interval === 'year'">
          <svg viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm2.5 3a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm6.207.293a1 1 0 00-1.414 0l-6 6a1 1 0 101.414 1.414l6-6a1 1 0 000-1.414zM12.5 10a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" clip-rule="evenodd"/>
          </svg>
          <span>{{ 'subscriptionPlans.dialog.twoMonthsFree' | transloco }}</span>
        </div>

        <!-- Benefits Section -->
        <div class="benefits-section">
          <h3>{{ 'subscriptionPlans.dialog.whatsIncluded' | transloco }}</h3>

          <div class="benefits-list" *ngIf="hasMeaningfulBenefits">
            <ng-container *ngFor="let benefit of formattedPlan?.benefits">
              <div class="benefit-item" *ngIf="benefit.key !== 'OCR'">
                <svg class="check-icon" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                <span class="benefit-key">{{ 'pricing.' + benefit.key | transloco }}</span>
                <span class="benefit-value" *ngIf="benefit.value">{{ benefit.value }}</span>
              </div>
            </ng-container>
          </div>

          <div class="benefits-fallback" *ngIf="!hasMeaningfulBenefits">
            <div class="benefits-fallback-card">
              <p class="benefits-fallback-intro">{{ 'subscriptionPlans.dialog.includedFallback' | transloco }}</p>
              <div class="benefits-fallback-rows">
                <div class="benefits-fallback-row">
                  <svg class="benefits-fallback-check" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                  <span>{{ 'subscriptionPlans.dialog.includedFallbackBullet1' | transloco }}</span>
                </div>
                <div class="benefits-fallback-row">
                  <svg class="benefits-fallback-check" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                  <span>{{ 'subscriptionPlans.dialog.includedFallbackBullet2' | transloco }}</span>
                </div>
              </div>
              <button
                type="button"
                class="btn-compare-plans-link"
                *ngIf="hasBetterDiscountOptions"
                (click)="onCompareDiscountedPlans()"
              >
                <span>{{ 'subscriptionPlans.dialog.compareDiscountedPlansShort' | transloco }}</span>
                <svg class="btn-compare-plans-chevron" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Side - Order Summary -->
      <div class="order-summary">
        <h3>{{ 'subscriptionPlans.dialog.orderSummary' | transloco }}</h3>

        <!-- Price section -->
        <div class="price-section">
          <!-- Base plan row -->
          <div class="price-row">
            <span>{{ formattedPlan?.name }} {{ 'subscriptionPlans.dialog.planLabel' | transloco }}</span>
            <span class="price">\${{ formattedPlan?.amountByMonth | number:'1.0-0' }}/{{ 'subscriptionPlans.interval.month' | transloco }}</span>
          </div>

          <!-- Request add-on row (only when usage slider was set) -->
          <div class="price-row addon-row" *ngIf="formattedPlan?.hasUsageAddon">
            <span>~{{ formatNumber(formattedPlan?.requestsPerMonth) }} {{ 'subscriptionPlans.requestSlider.requests' | transloco }}</span>
            <span class="price addon-price">+\${{ formattedPlan?.requestAddOn | number:'1.0-0' }}</span>
          </div>

          <!-- Divider + estimated total -->
          <div class="price-divider" *ngIf="formattedPlan?.hasUsageAddon"></div>
          <div class="price-row total-row" *ngIf="formattedPlan?.hasUsageAddon">
            <span class="total-label-text">{{ 'subscriptionPlans.dialog.estimatedTotal' | transloco }}</span>
            <span class="price total-price">\${{ formattedPlan?.estimatedTotal | number:'1.0-0' }}/{{ 'subscriptionPlans.interval.month' | transloco }}</span>
          </div>

          <!-- Annual billing note -->
          <div class="price-row subtotal" *ngIf="formattedPlan?.interval === 'year' && !formattedPlan?.hasUsageAddon">
            <span>{{ 'subscriptionPlans.dialog.monthlyEquivalent' | transloco }}</span>
            <span>\${{ formattedPlan?.amountByMonth | number:'1.2-2' }}/{{ 'subscriptionPlans.interval.month' | transloco }}</span>
          </div>
        </div>

        <!-- Usage note -->
        <p class="usage-note" *ngIf="formattedPlan?.hasUsageAddon">
          {{ 'subscriptionPlans.dialog.usageNote' | transloco }}
        </p>

        <!-- Dates -->
        <div class="dates-section">
          <div class="date-row">
            <span class="date-label">{{ 'subscriptionPlans.dialog.starts' | transloco }}</span>
            <span class="date-value">{{ formattedPlan?.startDate | date:'mediumDate' }}</span>
          </div>
          <div class="date-row">
            <span class="date-label">{{ 'subscriptionPlans.dialog.renews' | transloco }}</span>
            <span class="date-value">{{ formattedPlan?.endDate | date:'mediumDate' }}</span>
          </div>
        </div>

        <!-- Plan Change Indicator -->
        <div class="plan-change-indicator" *ngIf="currentPlan">
          <div class="plan-from">
            <span class="plan-label">{{ 'subscriptionPlans.dialog.from' | transloco }}</span>
            <span class="plan-name">{{ currentPlan?.name || '' }}</span>
          </div>
          <div class="arrow">
            <svg viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
            </svg>
          </div>
          <div class="plan-to">
            <span class="plan-label">{{ 'subscriptionPlans.dialog.to' | transloco }}</span>
            <span class="plan-name">{{ formattedPlan?.name }}</span>
          </div>
        </div>

        <!-- Note -->
        <p class="note">
          {{ 'subscriptionPlans.dialog.cancelNote' | transloco }}
        </p>

        <!-- Actions -->
        <div class="actions">
          <button class="btn btn-cancel" (click)="onCancel()">
            {{ 'subscriptionPlans.dialog.cancel' | transloco }}
          </button>
          <button class="btn btn-confirm" (click)="onConfirm()">
            {{ confirmActionTranslocoKey | transloco }}
          </button>
        </div>

        <!-- Security Note -->
        <div class="security-note">
          <svg viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"/>
          </svg>
          <span>{{ 'subscriptionPlans.dialog.secureTransaction' | transloco }}</span>
        </div>
      </div>
    </div>
  </div>
</div>`, styles: ['/* src/app/modules/subscription-plans/plan-change-dialog/plan-change-dialog.component.scss */\n.dialog-backdrop {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, 0.6);\n  backdrop-filter: blur(8px);\n  -webkit-backdrop-filter: blur(8px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 24px;\n  animation: fadeIn 0.2s ease-out;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.dialog-container {\n  position: relative;\n  background: #ffffff;\n  border-radius: 24px;\n  max-width: 900px;\n  width: 100%;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.05);\n  animation: slideUp 0.3s ease-out;\n}\n:host-context(.dark) .dialog-container {\n  background: rgba(30, 41, 59, 0.95);\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.08);\n}\n@keyframes slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px) scale(0.98);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n.close-btn {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  width: 40px;\n  height: 40px;\n  border: none;\n  background: rgba(0, 0, 0, 0.04);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 12px;\n  color: #94a3b8;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  z-index: 10;\n}\n:host-context(.dark) .close-btn {\n  background: rgba(255, 255, 255, 0.06);\n  color: rgba(255, 255, 255, 0.4);\n}\n.close-btn:hover {\n  background: rgba(0, 0, 0, 0.08);\n  color: #0f172a;\n}\n:host-context(.dark) .close-btn:hover {\n  background: rgba(255, 255, 255, 0.1);\n  color: #ffffff;\n}\n.close-btn svg {\n  width: 20px;\n  height: 20px;\n}\n.dialog-content {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n}\n@media (max-width: 768px) {\n  .dialog-content {\n    grid-template-columns: 1fr;\n  }\n}\n.plan-details {\n  padding: 40px;\n  border-right: 1px solid #e2e8f0;\n}\n:host-context(.dark) .plan-details {\n  border-right-color: rgba(255, 255, 255, 0.08);\n}\n@media (max-width: 768px) {\n  .plan-details {\n    border-right: none;\n    border-bottom: 1px solid #e2e8f0;\n    padding: 32px 24px;\n  }\n  :host-context(.dark) .plan-details {\n    border-bottom-color: rgba(255, 255, 255, 0.08);\n  }\n}\n.plan-details .plan-header {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 8px;\n}\n.plan-details .plan-header h2 {\n  font-size: 32px;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0;\n  letter-spacing: -0.02em;\n}\n:host-context(.dark) .plan-details .plan-header h2 {\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff 0%,\n      rgba(255, 255, 255, 0.85) 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.plan-details .plan-header .interval-badge {\n  font-size: 12px;\n  font-weight: 600;\n  color: white;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1 0%,\n      #8b5cf6 50%,\n      #a855f7 100%);\n  padding: 6px 14px;\n  border-radius: 100px;\n  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);\n}\n.plan-details .plan-subtitle {\n  font-size: 15px;\n  color: #94a3b8;\n  margin: 0 0 28px;\n}\n:host-context(.dark) .plan-details .plan-subtitle {\n  color: rgba(255, 255, 255, 0.4);\n}\n.plan-details .savings-banner {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(16, 185, 129, 0.1),\n      rgba(5, 150, 105, 0.1));\n  border: 1px solid rgba(16, 185, 129, 0.2);\n  color: #10b981;\n  padding: 14px 18px;\n  border-radius: 14px;\n  font-size: 14px;\n  font-weight: 600;\n  margin-bottom: 28px;\n}\n:host-context(.dark) .plan-details .savings-banner {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(16, 185, 129, 0.15),\n      rgba(5, 150, 105, 0.15));\n  border-color: rgba(16, 185, 129, 0.3);\n}\n.plan-details .savings-banner svg {\n  width: 20px;\n  height: 20px;\n}\n.benefits-section h3 {\n  font-size: 12px;\n  font-weight: 600;\n  color: #94a3b8;\n  margin: 0 0 14px;\n  letter-spacing: 0.02em;\n  text-transform: none;\n}\n:host-context(.dark) .benefits-section h3 {\n  color: rgba(255, 255, 255, 0.4);\n}\n.benefits-section .benefits-list {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.benefits-section .benefit-item {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 16px;\n  background: rgba(99, 102, 241, 0.04);\n  border-radius: 12px;\n  font-size: 14px;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n:host-context(.dark) .benefits-section .benefit-item {\n  background: rgba(255, 255, 255, 0.04);\n}\n.benefits-section .benefit-item:hover {\n  background: rgba(99, 102, 241, 0.08);\n}\n:host-context(.dark) .benefits-section .benefit-item:hover {\n  background: rgba(255, 255, 255, 0.08);\n}\n.benefits-section .benefit-item .check-icon {\n  width: 18px;\n  height: 18px;\n  color: #10b981;\n  flex-shrink: 0;\n}\n.benefits-section .benefit-item .benefit-key {\n  color: #475569;\n  flex: 1;\n}\n:host-context(.dark) .benefits-section .benefit-item .benefit-key {\n  color: rgba(255, 255, 255, 0.7);\n}\n.benefits-section .benefit-item .benefit-value {\n  font-weight: 600;\n  color: #8b5cf6;\n}\n.benefits-section .benefits-fallback .benefits-fallback-card {\n  padding: 18px 18px 16px;\n  border-radius: 16px;\n  border: 1px solid #e2e8f0;\n  background: rgba(248, 250, 252, 0.9);\n}\n:host-context(.dark) .benefits-section .benefits-fallback .benefits-fallback-card {\n  border-color: rgba(255, 255, 255, 0.08);\n  background: rgba(255, 255, 255, 0.04);\n}\n.benefits-section .benefits-fallback .benefits-fallback-intro {\n  margin: 0 0 14px;\n  font-size: 14px;\n  line-height: 1.55;\n  color: #475569;\n}\n:host-context(.dark) .benefits-section .benefits-fallback .benefits-fallback-intro {\n  color: rgba(255, 255, 255, 0.7);\n}\n.benefits-section .benefits-fallback .benefits-fallback-rows {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin-bottom: 16px;\n}\n.benefits-section .benefits-fallback .benefits-fallback-row {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  font-size: 13px;\n  line-height: 1.45;\n  color: #475569;\n}\n:host-context(.dark) .benefits-section .benefits-fallback .benefits-fallback-row {\n  color: rgba(255, 255, 255, 0.7);\n}\n.benefits-section .benefits-fallback .benefits-fallback-row span {\n  flex: 1;\n  min-width: 0;\n}\n.benefits-section .benefits-fallback .benefits-fallback-check {\n  width: 16px;\n  height: 16px;\n  flex-shrink: 0;\n  margin-top: 2px;\n  color: rgba(16, 185, 129, 0.85);\n}\n:host-context(.dark) .benefits-section .benefits-fallback .benefits-fallback-check {\n  color: rgba(52, 211, 153, 0.9);\n}\n.benefits-section .benefits-fallback .btn-compare-plans-link {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  margin: 0;\n  padding: 6px 0;\n  font-size: 13px;\n  font-weight: 600;\n  color: #6366f1;\n  background: none;\n  border: none;\n  cursor: pointer;\n  text-decoration: none;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n:host-context(.dark) .benefits-section .benefits-fallback .btn-compare-plans-link {\n  color: #a5b4fc;\n}\n.benefits-section .benefits-fallback .btn-compare-plans-link:hover {\n  color: #4f46e5;\n  text-decoration: underline;\n  text-underline-offset: 3px;\n}\n:host-context(.dark) .benefits-section .benefits-fallback .btn-compare-plans-link:hover {\n  color: #c7d2fe;\n}\n.benefits-section .benefits-fallback .btn-compare-plans-link:focus-visible {\n  outline: 2px solid rgba(99, 102, 241, 0.55);\n  outline-offset: 3px;\n  border-radius: 4px;\n}\n.benefits-section .benefits-fallback .btn-compare-plans-link .btn-compare-plans-chevron {\n  width: 18px;\n  height: 18px;\n  flex-shrink: 0;\n  opacity: 0.85;\n}\n.order-summary {\n  padding: 40px;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(99, 102, 241, 0.03) 0%,\n      rgba(139, 92, 246, 0.03) 100%);\n  border-radius: 0 24px 24px 0;\n}\n:host-context(.dark) .order-summary {\n  background:\n    linear-gradient(\n      180deg,\n      rgba(99, 102, 241, 0.08) 0%,\n      rgba(139, 92, 246, 0.08) 100%);\n}\n@media (max-width: 768px) {\n  .order-summary {\n    border-radius: 0 0 24px 24px;\n    padding: 32px 24px;\n  }\n}\n.order-summary h3 {\n  font-size: 20px;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 28px;\n}\n:host-context(.dark) .order-summary h3 {\n  color: #ffffff;\n}\n.price-section {\n  padding-bottom: 24px;\n  border-bottom: 1px solid #e2e8f0;\n  margin-bottom: 24px;\n}\n:host-context(.dark) .price-section {\n  border-bottom-color: rgba(255, 255, 255, 0.08);\n}\n.price-section .price-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 15px;\n  color: #475569;\n}\n:host-context(.dark) .price-section .price-row {\n  color: rgba(255, 255, 255, 0.7);\n}\n.price-section .price-row:not(:last-child) {\n  margin-bottom: 12px;\n}\n.price-section .price-row .price {\n  font-size: 32px;\n  font-weight: 800;\n  color: #0f172a;\n}\n:host-context(.dark) .price-section .price-row .price {\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff 0%,\n      rgba(255, 255, 255, 0.85) 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.price-section .price-row.subtotal {\n  font-size: 14px;\n  color: #94a3b8;\n}\n:host-context(.dark) .price-section .price-row.subtotal {\n  color: rgba(255, 255, 255, 0.4);\n}\n.dates-section {\n  padding-bottom: 24px;\n  border-bottom: 1px solid #e2e8f0;\n  margin-bottom: 24px;\n}\n:host-context(.dark) .dates-section {\n  border-bottom-color: rgba(255, 255, 255, 0.08);\n}\n.dates-section .date-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 14px;\n}\n.dates-section .date-row:not(:last-child) {\n  margin-bottom: 10px;\n}\n.dates-section .date-row .date-label {\n  color: #94a3b8;\n}\n:host-context(.dark) .dates-section .date-row .date-label {\n  color: rgba(255, 255, 255, 0.4);\n}\n.dates-section .date-row .date-value {\n  color: #0f172a;\n  font-weight: 600;\n}\n:host-context(.dark) .dates-section .date-row .date-value {\n  color: #ffffff;\n}\n.plan-change-indicator {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 16px;\n  padding: 20px;\n  margin-bottom: 24px;\n}\n:host-context(.dark) .plan-change-indicator {\n  background: rgba(255, 255, 255, 0.04);\n  border-color: rgba(255, 255, 255, 0.08);\n}\n.plan-change-indicator .plan-from,\n.plan-change-indicator .plan-to {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n  flex: 1;\n}\n.plan-change-indicator .plan-from .plan-label,\n.plan-change-indicator .plan-to .plan-label {\n  font-size: 11px;\n  color: #94a3b8;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  font-weight: 600;\n}\n:host-context(.dark) .plan-change-indicator .plan-from .plan-label,\n:host-context(.dark) .plan-change-indicator .plan-to .plan-label {\n  color: rgba(255, 255, 255, 0.4);\n}\n.plan-change-indicator .plan-from .plan-name,\n.plan-change-indicator .plan-to .plan-name {\n  font-size: 16px;\n  font-weight: 700;\n  color: #0f172a;\n}\n:host-context(.dark) .plan-change-indicator .plan-from .plan-name,\n:host-context(.dark) .plan-change-indicator .plan-to .plan-name {\n  color: #ffffff;\n}\n.plan-change-indicator .arrow {\n  padding: 0 16px;\n}\n.plan-change-indicator .arrow svg {\n  width: 24px;\n  height: 24px;\n  color: #10b981;\n}\n.note {\n  font-size: 13px;\n  color: #94a3b8;\n  margin: 0 0 28px;\n  line-height: 1.6;\n}\n:host-context(.dark) .note {\n  color: rgba(255, 255, 255, 0.4);\n}\n.actions {\n  display: flex;\n  gap: 12px;\n}\n.actions .btn {\n  flex: 1;\n  padding: 16px 24px;\n  font-size: 15px;\n  font-weight: 600;\n  border-radius: 14px;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  border: none;\n  position: relative;\n  overflow: hidden;\n}\n.actions .btn.btn-cancel {\n  background: transparent;\n  color: #475569;\n  border: 1px solid #e2e8f0;\n}\n:host-context(.dark) .actions .btn.btn-cancel {\n  border-color: rgba(255, 255, 255, 0.08);\n  color: rgba(255, 255, 255, 0.7);\n}\n.actions .btn.btn-cancel:hover {\n  background: rgba(0, 0, 0, 0.04);\n  color: #0f172a;\n}\n:host-context(.dark) .actions .btn.btn-cancel:hover {\n  background: rgba(255, 255, 255, 0.06);\n  color: #ffffff;\n}\n.actions .btn.btn-confirm {\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1 0%,\n      #8b5cf6 50%,\n      #a855f7 100%);\n  color: white;\n}\n.actions .btn.btn-confirm::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.2) 0%,\n      transparent 50%);\n  opacity: 0;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.actions .btn.btn-confirm:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 12px 24px rgba(99, 102, 241, 0.4);\n}\n.actions .btn.btn-confirm:hover::before {\n  opacity: 1;\n}\n.security-note {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  margin-top: 20px;\n  font-size: 13px;\n  color: #94a3b8;\n}\n:host-context(.dark) .security-note {\n  color: rgba(255, 255, 255, 0.4);\n}\n.security-note svg {\n  width: 16px;\n  height: 16px;\n}\n.usage-note {\n  font-size: 12px;\n  color: #94a3b8;\n  margin: 8px 0 0;\n  line-height: 1.5;\n  font-style: italic;\n}\n:host-context(.dark) .usage-note {\n  color: rgba(255, 255, 255, 0.4);\n}\n.addon-row .addon-price {\n  color: #10b981 !important;\n}\n.price-divider {\n  height: 1px;\n  background: #e2e8f0;\n  margin: 4px 0;\n}\n:host-context(.dark) .price-divider {\n  background: rgba(255, 255, 255, 0.08);\n}\n.total-row .total-label-text {\n  font-weight: 600;\n  color: #0f172a;\n}\n:host-context(.dark) .total-row .total-label-text {\n  color: #ffffff;\n}\n.total-row .total-price {\n  font-size: 20px !important;\n  font-weight: 800 !important;\n  color: #8b5cf6 !important;\n}\n@media (max-width: 768px) {\n  .dialog-backdrop {\n    padding: 16px;\n  }\n  .plan-details .plan-header h2 {\n    font-size: 26px;\n  }\n  .order-summary .price-section .price-row .price {\n    font-size: 28px;\n  }\n  .plan-change-indicator {\n    padding: 16px;\n  }\n  .plan-change-indicator .plan-from .plan-name,\n  .plan-change-indicator .plan-to .plan-name {\n    font-size: 14px;\n  }\n  .plan-change-indicator .arrow {\n    padding: 0 8px;\n  }\n  .plan-change-indicator .arrow svg {\n    width: 20px;\n    height: 20px;\n  }\n  .actions {\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=plan-change-dialog.component.css.map */\n'] }]
  }], null, { currentPlan: [{
    type: Input
  }], newPlan: [{
    type: Input
  }], allPlans: [{
    type: Input
  }], isOpen: [{
    type: Input
  }], requestsPerMonth: [{
    type: Input
  }], confirm: [{
    type: Output
  }], cancel: [{
    type: Output
  }], comparePlans: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PlanChangeDialogComponent, { className: "PlanChangeDialogComponent", filePath: "src/app/modules/subscription-plans/plan-change-dialog/plan-change-dialog.component.ts", lineNumber: 19 });
})();

// src/app/modules/subscription-plans/subscription-plans.component.ts
var _c0 = ["plansExploreAnchor"];
function SubscriptionPlansComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "span", 8);
    \u0275\u0275text(2, "UI Version:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 9);
    \u0275\u0275listener("click", function SubscriptionPlansComponent_div_2_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.uiVersion = "v1");
    });
    \u0275\u0275text(4, " V1 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 9);
    \u0275\u0275listener("click", function SubscriptionPlansComponent_div_2_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.uiVersion = "v2");
    });
    \u0275\u0275text(6, " V2 (Privy) ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r1.uiVersion === "v1");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.uiVersion === "v2");
  }
}
function SubscriptionPlansComponent_div_3_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "h1");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "subscriptionPlans.title"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 4, "subscriptionPlans.subtitle"));
  }
}
function SubscriptionPlansComponent_div_3_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "h1");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "subscriptionPlans.titleWithPlan"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 4, "subscriptionPlans.subtitleWithPlan"));
  }
}
function SubscriptionPlansComponent_div_3_div_11_span_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 42);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "subscriptionPlans.statusActive"));
  }
}
function SubscriptionPlansComponent_div_3_div_11_span_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 43);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "subscriptionPlans.statusCanceling"));
  }
}
function SubscriptionPlansComponent_div_3_div_11_div_47_ng_container_5_div_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 52);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const feature_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(feature_r4.value);
  }
}
function SubscriptionPlansComponent_div_3_div_11_div_47_ng_container_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 49);
    \u0275\u0275element(2, "path", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, SubscriptionPlansComponent_div_3_div_11_div_47_ng_container_5_div_1_span_6_Template, 2, 1, "span", 51);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const feature_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 2, "pricing." + feature_r4.key));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", feature_r4.value && !ctx_r1.isBoolean(feature_r4.value));
  }
}
function SubscriptionPlansComponent_div_3_div_11_div_47_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, SubscriptionPlansComponent_div_3_div_11_div_47_ng_container_5_div_1_Template, 7, 4, "div", 47);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const feature_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", feature_r4.key !== "OCR");
  }
}
function SubscriptionPlansComponent_div_3_div_11_div_47_ng_container_6_div_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 52);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const feature_r5 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(feature_r5.value);
  }
}
function SubscriptionPlansComponent_div_3_div_11_div_47_ng_container_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 49);
    \u0275\u0275element(2, "path", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, SubscriptionPlansComponent_div_3_div_11_div_47_ng_container_6_div_1_span_6_Template, 2, 1, "span", 51);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const feature_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 2, "pricing." + feature_r5.key));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", feature_r5.value && !ctx_r1.isBoolean(feature_r5.value));
  }
}
function SubscriptionPlansComponent_div_3_div_11_div_47_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, SubscriptionPlansComponent_div_3_div_11_div_47_ng_container_6_div_1_Template, 7, 4, "div", 47);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const feature_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", feature_r5.key !== "OCR");
  }
}
function SubscriptionPlansComponent_div_3_div_11_div_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44)(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 45);
    \u0275\u0275template(5, SubscriptionPlansComponent_div_3_div_11_div_47_ng_container_5_Template, 2, 1, "ng-container", 46)(6, SubscriptionPlansComponent_div_3_div_11_div_47_ng_container_6_Template, 2, 1, "ng-container", 46);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "subscriptionPlans.whatsIncluded"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.currentSubscription.subscriptionPlan.changesLeft);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.currentSubscription.subscriptionPlan.changesRight);
  }
}
function SubscriptionPlansComponent_div_3_div_11_div_48_button_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 61);
    \u0275\u0275listener("click", function SubscriptionPlansComponent_div_3_div_11_div_48_button_21_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.compareDiscountedPlansFromCurrentCard());
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 62);
    \u0275\u0275element(5, "path", 63);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "subscriptionPlans.dialog.compareDiscountedPlansShort"));
  }
}
function SubscriptionPlansComponent_div_3_div_11_div_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53)(1, "h3", 54);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 55)(5, "p", 56);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 57)(9, "div", 58);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(10, "svg", 59);
    \u0275\u0275element(11, "path", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 58);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(16, "svg", 59);
    \u0275\u0275element(17, "path", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(18, "span");
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(21, SubscriptionPlansComponent_div_3_div_11_div_48_button_21_Template, 6, 3, "button", 60);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 5, "subscriptionPlans.whatsIncluded"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 7, "subscriptionPlans.dialog.includedFallback"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 9, "subscriptionPlans.dialog.includedFallbackBullet1"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 11, "subscriptionPlans.dialog.includedFallbackBullet2"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.hasOtherPlansWithApiDiscountForCurrent);
  }
}
function SubscriptionPlansComponent_div_3_div_11_div_49_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69);
    \u0275\u0275element(1, "div", 70);
    \u0275\u0275elementEnd();
  }
}
function SubscriptionPlansComponent_div_3_div_11_div_49_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 71);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "subscriptionPlans.apiBreakdown.empty"), " ");
  }
}
function SubscriptionPlansComponent_div_3_div_11_div_49_div_7_option_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 80);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275property("value", c_r8);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getCountryDisplayName(c_r8), " ");
  }
}
function SubscriptionPlansComponent_div_3_div_11_div_49_div_7_option_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 80);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275property("value", cat_r9);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getCategoryDisplayName(cat_r9), " ");
  }
}
function SubscriptionPlansComponent_div_3_div_11_div_49_div_7_ng_container_22_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 83)(1, "td", 84);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const group_r10 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getCategoryDisplayName(group_r10.category));
  }
}
function SubscriptionPlansComponent_div_3_div_11_div_49_div_7_ng_container_22_tr_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 85);
    \u0275\u0275listener("click", function SubscriptionPlansComponent_div_3_div_11_div_49_div_7_ng_container_22_tr_2_Template_tr_click_0_listener() {
      const feature_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r1.openFeatureModal(feature_r12));
    });
    \u0275\u0275elementStart(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const feature_r12 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getFeatureDisplayName(feature_r12));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(5, 3, ctx_r1.getEffectivePriceForApi(feature_r12, ctx_r1.currentSubscription.subscriptionPlan), "1.2-4"), " ", \u0275\u0275pipeBind1(6, 6, "subscriptionPlans.credits"), " ");
  }
}
function SubscriptionPlansComponent_div_3_div_11_div_49_div_7_ng_container_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, SubscriptionPlansComponent_div_3_div_11_div_49_div_7_ng_container_22_tr_1_Template, 3, 1, "tr", 81)(2, SubscriptionPlansComponent_div_3_div_11_div_49_div_7_ng_container_22_tr_2_Template, 7, 8, "tr", 82);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const group_r10 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", group_r10.category);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", group_r10.features)("ngForTrackBy", ctx_r1.trackByFeature);
  }
}
function SubscriptionPlansComponent_div_3_div_11_div_49_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 72)(1, "div", 73)(2, "input", 74);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275listener("input", function SubscriptionPlansComponent_div_3_div_11_div_49_div_7_Template_input_input_2_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.myListSearchQuery = $event.target.value);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "select", 75);
    \u0275\u0275twoWayListener("ngModelChange", function SubscriptionPlansComponent_div_3_div_11_div_49_div_7_Template_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.myListCountryFilter, $event) || (ctx_r1.myListCountryFilter = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(5, "option", 76);
    \u0275\u0275text(6, "All countries");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, SubscriptionPlansComponent_div_3_div_11_div_49_div_7_option_7_Template, 2, 2, "option", 77);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "select", 75);
    \u0275\u0275twoWayListener("ngModelChange", function SubscriptionPlansComponent_div_3_div_11_div_49_div_7_Template_select_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.myListCategoryFilter, $event) || (ctx_r1.myListCategoryFilter = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(9, "option", 76);
    \u0275\u0275text(10, "All categories");
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, SubscriptionPlansComponent_div_3_div_11_div_49_div_7_option_11_Template, 2, 2, "option", 77);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "table", 78)(13, "thead")(14, "tr")(15, "th");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th");
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "tbody");
    \u0275\u0275template(22, SubscriptionPlansComponent_div_3_div_11_div_49_div_7_ng_container_22_Template, 3, 3, "ng-container", 79);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(3, 10, "subscriptionPlans.apiBreakdown.searchPlaceholder"))("value", ctx_r1.myListSearchQuery);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.myListCountryFilter);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.myListCountries);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.myListCategoryFilter);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.myListCategories);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 12, "subscriptionPlans.apiBreakdown.apiName"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((ctx_r1.currentSubscription == null ? null : ctx_r1.currentSubscription.subscriptionPlan == null ? null : ctx_r1.currentSubscription.subscriptionPlan.name) || \u0275\u0275pipeBind1(20, 14, "subscriptionPlans.credits"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.groupedMyListFeatures)("ngForTrackBy", ctx_r1.trackByGroup);
  }
}
function SubscriptionPlansComponent_div_3_div_11_div_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64)(1, "div", 65)(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(5, SubscriptionPlansComponent_div_3_div_11_div_49_div_5_Template, 2, 0, "div", 66)(6, SubscriptionPlansComponent_div_3_div_11_div_49_div_6_Template, 3, 3, "div", 67)(7, SubscriptionPlansComponent_div_3_div_11_div_49_div_7_Template, 23, 16, "div", 68);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 4, "subscriptionPlans.yourApiPrices"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.loadingMyListFeatures);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loadingMyListFeatures && ctx_r1.filteredMyListFeatures.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loadingMyListFeatures && ctx_r1.myListFeatures.length > 0);
  }
}
function SubscriptionPlansComponent_div_3_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 21)(2, "div", 22);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 23)(6, "div", 24);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 25)(9, "span", 26);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 27);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 28)(16, "div", 29)(17, "span", 30);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 31);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 29)(24, "span", 30);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span", 31);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 29)(31, "span", 30);
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(34, SubscriptionPlansComponent_div_3_div_11_span_34_Template, 3, 3, "span", 32)(35, SubscriptionPlansComponent_div_3_div_11_span_35_Template, 3, 3, "span", 33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 34)(37, "button", 35);
    \u0275\u0275listener("click", function SubscriptionPlansComponent_div_3_div_11_Template_button_click_37_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.manageBilling());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(38, "svg", 15);
    \u0275\u0275element(39, "path", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(42, "button", 37);
    \u0275\u0275listener("click", function SubscriptionPlansComponent_div_3_div_11_Template_button_click_42_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.switchToExplore());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(43, "svg", 15);
    \u0275\u0275element(44, "path", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275text(45);
    \u0275\u0275pipe(46, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(47, SubscriptionPlansComponent_div_3_div_11_div_47_Template, 7, 5, "div", 39)(48, SubscriptionPlansComponent_div_3_div_11_div_48_Template, 22, 13, "div", 40)(49, SubscriptionPlansComponent_div_3_div_11_div_49_Template, 8, 6, "div", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 16, "subscriptionPlans.activePlan"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.currentSubscription.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(11, 18, ctx_r1.currentSubscription.amount || ctx_r1.currentSubscription.subscriptionPlan.amount, "1.0-0"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("/", \u0275\u0275pipeBind1(14, 21, "subscriptionPlans.interval." + ctx_r1.currentSubscription.subscriptionPlan.interval), "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 23, "subscriptionPlans.started"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(22, 25, ctx_r1.currentSubscription.startDate, "mediumDate"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 28, "subscriptionPlans.renews"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(29, 30, ctx_r1.currentSubscription.endDate, "mediumDate"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(33, 33, "subscriptionPlans.status"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.currentSubscription.autoRenew);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.currentSubscription.autoRenew);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(41, 35, "subscriptionPlans.manageBilling"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(46, 37, "subscriptionPlans.changePlan"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.currentSubscription && ctx_r1.currentPlanHasIncludedBenefits);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showCurrentPlanIncludedFallback);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentSubscription && (ctx_r1.myListFeatures.length > 0 || ctx_r1.loadingMyListFeatures));
  }
}
function SubscriptionPlansComponent_div_3_div_12_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69);
    \u0275\u0275element(1, "div", 70);
    \u0275\u0275elementEnd();
  }
}
function SubscriptionPlansComponent_div_3_div_12_div_13_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tick_r15 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tick_r15);
  }
}
function SubscriptionPlansComponent_div_3_div_12_div_13_div_16_ng_container_1_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 112);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 15);
    \u0275\u0275element(2, "path", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "subscriptionPlans.requestSlider.bestValue"), " ");
  }
}
function SubscriptionPlansComponent_div_3_div_12_div_13_div_16_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 107)(2, "div", 108);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 109);
    \u0275\u0275text(5);
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 110);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, SubscriptionPlansComponent_div_3_div_12_div_13_div_16_ng_container_1_div_12_Template, 5, 3, "div", 111);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const plan_r16 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275classProp("best-value", plan_r16._id === ctx_r1.getBestValuePlanId());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(plan_r16.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" $", ctx_r1.getEffectiveCostPerRequest(plan_r16).toFixed(4), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("/ ", \u0275\u0275pipeBind1(8, 7, "subscriptionPlans.requestSlider.perRequest"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ~$", \u0275\u0275pipeBind2(11, 9, ctx_r1.getEstimatedTotal(plan_r16), "1.0-0"), "/mo ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", plan_r16._id === ctx_r1.getBestValuePlanId());
  }
}
function SubscriptionPlansComponent_div_3_div_12_div_13_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 106);
    \u0275\u0275template(1, SubscriptionPlansComponent_div_3_div_12_div_13_div_16_ng_container_1_Template, 13, 12, "ng-container", 46);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.visiblePlans);
  }
}
function SubscriptionPlansComponent_div_3_div_12_div_13_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 113)(1, "button", 114);
    \u0275\u0275listener("click", function SubscriptionPlansComponent_div_3_div_12_div_13_div_17_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.showApiBreakdownView());
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "subscriptionPlans.apiBreakdown.button"), " ");
  }
}
function SubscriptionPlansComponent_div_3_div_12_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 95)(1, "div", 96)(2, "div", 97)(3, "span", 98);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 99);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "p", 100);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 101)(13, "input", 102);
    \u0275\u0275listener("input", function SubscriptionPlansComponent_div_3_div_12_div_13_Template_input_input_13_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onSliderChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 103);
    \u0275\u0275template(15, SubscriptionPlansComponent_div_3_div_12_div_13_span_15_Template, 2, 1, "span", 46);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(16, SubscriptionPlansComponent_div_3_div_12_div_13_div_16_Template, 2, 1, "div", 104)(17, SubscriptionPlansComponent_div_3_div_12_div_13_div_17_Template, 4, 3, "div", 105);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 12, "subscriptionPlans.requestSlider.label"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", ctx_r1.formatNumber(ctx_r1.sliderValue), " ", \u0275\u0275pipeBind1(8, 14, ctx_r1.selectedInterval === "year" ? "subscriptionPlans.requestSlider.requestsPerYear" : "subscriptionPlans.requestSlider.requests"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 16, "subscriptionPlans.requestSlider.basePrice"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("background", "linear-gradient(to right, #8b5cf6 " + ctx_r1.sliderValue / ctx_r1.sliderMax * 100 + "%, #e2e8f0 " + ctx_r1.sliderValue / ctx_r1.sliderMax * 100 + "%)");
    \u0275\u0275property("max", ctx_r1.sliderMax)("step", ctx_r1.sliderStep)("value", ctx_r1.sliderValue);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.sliderTicks);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.showApiBreakdown && ctx_r1.requestsPerMonth > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.showApiBreakdown);
  }
}
function SubscriptionPlansComponent_div_3_div_12_div_14_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69);
    \u0275\u0275element(1, "div", 70);
    \u0275\u0275elementEnd();
  }
}
function SubscriptionPlansComponent_div_3_div_12_div_14_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 71);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "subscriptionPlans.apiBreakdown.empty"), " ");
  }
}
function SubscriptionPlansComponent_div_3_div_12_div_14_div_10_option_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 80);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r20 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275property("value", c_r20);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getCountryDisplayName(c_r20), " ");
  }
}
function SubscriptionPlansComponent_div_3_div_12_div_14_div_10_option_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 80);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r21 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275property("value", cat_r21);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getCategoryDisplayName(cat_r21), " ");
  }
}
function SubscriptionPlansComponent_div_3_div_12_div_14_div_10_th_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const plan_r22 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", plan_r22.name, " ");
  }
}
function SubscriptionPlansComponent_div_3_div_12_div_14_div_10_ng_container_20_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 83)(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const group_r23 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", ctx_r1.apiBreakdownPlans.length + 1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getCategoryDisplayName(group_r23.category), " ");
  }
}
function SubscriptionPlansComponent_div_3_div_12_div_14_div_10_ng_container_20_tr_2_td_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const plan_r26 = ctx.$implicit;
    const feature_r25 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" $", ctx_r1.getCompareTablePriceForApi(feature_r25, plan_r26).toFixed(4), "/req ");
  }
}
function SubscriptionPlansComponent_div_3_div_12_div_14_div_10_ng_container_20_tr_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 85);
    \u0275\u0275listener("click", function SubscriptionPlansComponent_div_3_div_12_div_14_div_10_ng_container_20_tr_2_Template_tr_click_0_listener() {
      const feature_r25 = \u0275\u0275restoreView(_r24).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r1.openFeatureModal(feature_r25));
    });
    \u0275\u0275elementStart(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, SubscriptionPlansComponent_div_3_div_12_div_14_div_10_ng_container_20_tr_2_td_3_Template, 2, 1, "td", 79);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const feature_r25 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getFeatureDisplayName(feature_r25));
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.apiBreakdownPlans)("ngForTrackBy", ctx_r1.trackByPlan);
  }
}
function SubscriptionPlansComponent_div_3_div_12_div_14_div_10_ng_container_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, SubscriptionPlansComponent_div_3_div_12_div_14_div_10_ng_container_20_tr_1_Template, 3, 2, "tr", 81)(2, SubscriptionPlansComponent_div_3_div_12_div_14_div_10_ng_container_20_tr_2_Template, 4, 3, "tr", 82);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const group_r23 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", group_r23.category);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", group_r23.features)("ngForTrackBy", ctx_r1.trackByFeature);
  }
}
function SubscriptionPlansComponent_div_3_div_12_div_14_div_10_div_21_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 121);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const plan_r27 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", plan_r27.name, " = $", \u0275\u0275pipeBind2(2, 2, ctx_r1.getDisplayEstimatedTotal(plan_r27), "1.0-0"), " ");
  }
}
function SubscriptionPlansComponent_div_3_div_12_div_14_div_10_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 118)(1, "span", 119);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, SubscriptionPlansComponent_div_3_div_12_div_14_div_10_div_21_span_4_Template, 3, 5, "span", 120);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", ctx_r1.formatNumber(ctx_r1.sliderValue), " ", \u0275\u0275pipeBind1(3, 4, ctx_r1.selectedInterval === "year" ? "subscriptionPlans.requestSlider.requestsPerYear" : "subscriptionPlans.requestSlider.requests"), ": ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.apiBreakdownPlans)("ngForTrackBy", ctx_r1.trackByPlan);
  }
}
function SubscriptionPlansComponent_div_3_div_12_div_14_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 72)(1, "div", 73)(2, "input", 74);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275listener("input", function SubscriptionPlansComponent_div_3_div_12_div_14_div_10_Template_input_input_2_listener($event) {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.apiBreakdownSearchQuery = $event.target.value);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "select", 75);
    \u0275\u0275twoWayListener("ngModelChange", function SubscriptionPlansComponent_div_3_div_12_div_14_div_10_Template_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.apiBreakdownCountryFilter, $event) || (ctx_r1.apiBreakdownCountryFilter = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(5, "option", 76);
    \u0275\u0275text(6, "All countries");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, SubscriptionPlansComponent_div_3_div_12_div_14_div_10_option_7_Template, 2, 2, "option", 77);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "select", 75);
    \u0275\u0275twoWayListener("ngModelChange", function SubscriptionPlansComponent_div_3_div_12_div_14_div_10_Template_select_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.apiBreakdownCategoryFilter, $event) || (ctx_r1.apiBreakdownCategoryFilter = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(9, "option", 76);
    \u0275\u0275text(10, "All categories");
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, SubscriptionPlansComponent_div_3_div_12_div_14_div_10_option_11_Template, 2, 2, "option", 77);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "table", 78)(13, "thead")(14, "tr")(15, "th");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, SubscriptionPlansComponent_div_3_div_12_div_14_div_10_th_18_Template, 2, 1, "th", 79);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "tbody");
    \u0275\u0275template(20, SubscriptionPlansComponent_div_3_div_12_div_14_div_10_ng_container_20_Template, 3, 3, "ng-container", 79);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(21, SubscriptionPlansComponent_div_3_div_12_div_14_div_10_div_21_Template, 5, 6, "div", 117);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(3, 12, "subscriptionPlans.apiBreakdown.searchPlaceholder"))("value", ctx_r1.apiBreakdownSearchQuery);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.apiBreakdownCountryFilter);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.apiBreakdownCountries);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.apiBreakdownCategoryFilter);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.apiBreakdownCategories);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 14, "subscriptionPlans.apiBreakdown.apiName"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.apiBreakdownPlans)("ngForTrackBy", ctx_r1.trackByPlan);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.groupedFilteredFeatures)("ngForTrackBy", ctx_r1.trackByGroup);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.requestsPerMonth > 0);
  }
}
function SubscriptionPlansComponent_div_3_div_12_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 115)(1, "div", 65)(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 116);
    \u0275\u0275listener("click", function SubscriptionPlansComponent_div_3_div_12_div_14_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.hideApiBreakdownView());
    });
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, SubscriptionPlansComponent_div_3_div_12_div_14_div_8_Template, 2, 0, "div", 66)(9, SubscriptionPlansComponent_div_3_div_12_div_14_div_9_Template, 3, 3, "div", 67)(10, SubscriptionPlansComponent_div_3_div_12_div_14_div_10_Template, 22, 16, "div", 68);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 5, "subscriptionPlans.apiBreakdown.title"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 7, "subscriptionPlans.apiBreakdown.backToPlans"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.loadingFeatures);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loadingFeatures && ctx_r1.appFeatures.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loadingFeatures && ctx_r1.appFeatures.length > 0);
  }
}
function SubscriptionPlansComponent_div_3_div_12_div_15_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 138);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "subscriptionPlans.popular"), " ");
  }
}
function SubscriptionPlansComponent_div_3_div_12_div_15_div_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 139);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "subscriptionPlans.requestSlider.bestValue"), " ");
  }
}
function SubscriptionPlansComponent_div_3_div_12_div_15_div_2_p_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 140);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const plan_r29 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" $", ctx_r1.getAmountByMonth(plan_r29), "/", \u0275\u0275pipeBind1(2, 3, "subscriptionPlans.interval.month"), " ", \u0275\u0275pipeBind1(3, 5, "subscriptionPlans.billedAnnually"), " ");
  }
}
function SubscriptionPlansComponent_div_3_div_12_div_15_div_2_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 141)(1, "span", 142);
    \u0275\u0275text(2, "+");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 143);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 144);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const plan_r29 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(5, 3, ctx_r1.getDisplayRequestAddOn(plan_r29), "1.0-0"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("~", ctx_r1.formatNumber(ctx_r1.sliderValue), " ", \u0275\u0275pipeBind1(8, 6, ctx_r1.selectedInterval === "year" ? "subscriptionPlans.requestSlider.requestsPerYear" : "subscriptionPlans.requestSlider.requests"), "");
  }
}
function SubscriptionPlansComponent_div_3_div_12_div_15_div_2_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 145)(1, "span", 146);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 147)(5, "span", 148);
    \u0275\u0275text(6, "$");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 149);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 150);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "transloco");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const plan_r29 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "subscriptionPlans.requestSlider.estimatedTotal"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(9, 5, ctx_r1.getDisplayEstimatedTotal(plan_r29), "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("/", \u0275\u0275pipeBind1(12, 8, ctx_r1.selectedInterval === "year" ? "subscriptionPlans.interval.year" : "subscriptionPlans.interval.month"), "");
  }
}
function SubscriptionPlansComponent_div_3_div_12_div_15_div_2_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 151)(1, "span", 152);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 153);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const plan_r29 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getDiscountDisplayText(plan_r29));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 2, "subscriptionPlans.discountDescription"));
  }
}
function SubscriptionPlansComponent_div_3_div_12_div_15_div_2_ng_container_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "subscriptionPlans.currentPlan"), " ");
  }
}
function SubscriptionPlansComponent_div_3_div_12_div_15_div_2_ng_container_22_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "subscriptionPlans.selectPlan"));
  }
}
function SubscriptionPlansComponent_div_3_div_12_div_15_div_2_ng_container_22_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const plan_r29 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", plan_r29.isDowngrade ? \u0275\u0275pipeBind1(2, 1, "subscriptionPlans.downgrade") : \u0275\u0275pipeBind1(3, 3, "subscriptionPlans.upgrade"), " ");
  }
}
function SubscriptionPlansComponent_div_3_div_12_div_15_div_2_ng_container_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, SubscriptionPlansComponent_div_3_div_12_div_15_div_2_ng_container_22_ng_container_1_Template, 3, 3, "ng-container", 17)(2, SubscriptionPlansComponent_div_3_div_12_div_15_div_2_ng_container_22_ng_container_2_Template, 4, 5, "ng-container", 17);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.currentSubscription);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentSubscription);
  }
}
function SubscriptionPlansComponent_div_3_div_12_div_15_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 124);
    \u0275\u0275template(1, SubscriptionPlansComponent_div_3_div_12_div_15_div_2_div_1_Template, 3, 3, "div", 125)(2, SubscriptionPlansComponent_div_3_div_12_div_15_div_2_div_2_Template, 3, 3, "div", 126);
    \u0275\u0275elementStart(3, "div", 127)(4, "h3");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 128)(7, "div", 129)(8, "span", 130);
    \u0275\u0275text(9, "$");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 131);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 132);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(16, SubscriptionPlansComponent_div_3_div_12_div_15_div_2_p_16_Template, 4, 7, "p", 133)(17, SubscriptionPlansComponent_div_3_div_12_div_15_div_2_div_17_Template, 9, 8, "div", 134)(18, SubscriptionPlansComponent_div_3_div_12_div_15_div_2_div_18_Template, 13, 10, "div", 135);
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, SubscriptionPlansComponent_div_3_div_12_div_15_div_2_div_19_Template, 6, 4, "div", 136);
    \u0275\u0275elementStart(20, "button", 137);
    \u0275\u0275listener("click", function SubscriptionPlansComponent_div_3_div_12_div_15_div_2_Template_button_click_20_listener() {
      const plan_r29 = \u0275\u0275restoreView(_r28).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.upgradePlan(plan_r29));
    });
    \u0275\u0275template(21, SubscriptionPlansComponent_div_3_div_12_div_15_div_2_ng_container_21_Template, 3, 3, "ng-container", 17)(22, SubscriptionPlansComponent_div_3_div_12_div_15_div_2_ng_container_22_Template, 3, 2, "ng-container", 17);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const plan_r29 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("popular", plan_r29.name === "Plus")("current", plan_r29.code === (ctx_r1.currentSubscription == null ? null : ctx_r1.currentSubscription.subscriptionPlan == null ? null : ctx_r1.currentSubscription.subscriptionPlan.code))("best-value-card", plan_r29._id && plan_r29._id === ctx_r1.getBestValuePlanId() && ctx_r1.requestsPerMonth > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", plan_r29.name === "Plus");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", plan_r29._id && plan_r29._id === ctx_r1.getBestValuePlanId() && ctx_r1.requestsPerMonth > 0 && plan_r29.name !== "Plus");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(plan_r29.name);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("price-muted", ctx_r1.requestsPerMonth > 0 && ctx_r1.getDisplayRequestAddOn(plan_r29) > 0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(12, 22, plan_r29.amount, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("/", \u0275\u0275pipeBind1(15, 25, "subscriptionPlans.interval." + plan_r29.interval), "");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", plan_r29.interval === "year" && !(ctx_r1.requestsPerMonth > 0 && ctx_r1.getDisplayRequestAddOn(plan_r29) > 0));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.requestsPerMonth > 0 && ctx_r1.getDisplayRequestAddOn(plan_r29) > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.requestsPerMonth > 0 && ctx_r1.getDisplayRequestAddOn(plan_r29) > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", plan_r29.discount == null ? null : plan_r29.discount.discount);
    \u0275\u0275advance();
    \u0275\u0275classProp("btn-current", plan_r29.code === (ctx_r1.currentSubscription == null ? null : ctx_r1.currentSubscription.subscriptionPlan == null ? null : ctx_r1.currentSubscription.subscriptionPlan.code));
    \u0275\u0275property("disabled", plan_r29.code === (ctx_r1.currentSubscription == null ? null : ctx_r1.currentSubscription.subscriptionPlan == null ? null : ctx_r1.currentSubscription.subscriptionPlan.code));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", plan_r29.code === (ctx_r1.currentSubscription == null ? null : ctx_r1.currentSubscription.subscriptionPlan == null ? null : ctx_r1.currentSubscription.subscriptionPlan.code));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", plan_r29.code !== (ctx_r1.currentSubscription == null ? null : ctx_r1.currentSubscription.subscriptionPlan == null ? null : ctx_r1.currentSubscription.subscriptionPlan.code));
  }
}
function SubscriptionPlansComponent_div_3_div_12_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 122, 0);
    \u0275\u0275template(2, SubscriptionPlansComponent_div_3_div_12_div_15_div_2_Template, 23, 27, "div", 123);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.visiblePlans)("ngForTrackBy", ctx_r1.trackByPlan);
  }
}
function SubscriptionPlansComponent_div_3_div_12_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 154)(1, "button", 155);
    \u0275\u0275listener("click", function SubscriptionPlansComponent_div_3_div_12_div_16_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r30);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.switchToCurrent());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 15);
    \u0275\u0275element(3, "path", 156);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 1, "subscriptionPlans.backToCurrentPlan"), " ");
  }
}
function SubscriptionPlansComponent_div_3_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 86)(1, "div", 87)(2, "div", 88)(3, "button", 89);
    \u0275\u0275listener("click", function SubscriptionPlansComponent_div_3_div_12_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.changeInterval("month"));
    });
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 89);
    \u0275\u0275listener("click", function SubscriptionPlansComponent_div_3_div_12_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.changeInterval("year"));
    });
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementStart(9, "span", 90);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(12, SubscriptionPlansComponent_div_3_div_12_div_12_Template, 2, 0, "div", 66)(13, SubscriptionPlansComponent_div_3_div_12_div_13_Template, 18, 18, "div", 91)(14, SubscriptionPlansComponent_div_3_div_12_div_14_Template, 11, 9, "div", 92)(15, SubscriptionPlansComponent_div_3_div_12_div_15_Template, 3, 2, "div", 93)(16, SubscriptionPlansComponent_div_3_div_12_div_16_Template, 6, 3, "div", 94);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r1.selectedInterval === "month");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 12, "subscriptionPlans.monthly"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.selectedInterval === "year");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 14, "subscriptionPlans.yearly"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 16, "subscriptionPlans.save20"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.loadingPlans);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loadingPlans && ctx_r1.plans.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showApiBreakdown && !ctx_r1.loadingPlans);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loadingPlans && !ctx_r1.showApiBreakdown);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentSubscription);
  }
}
function SubscriptionPlansComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "div", 11);
    \u0275\u0275elementStart(2, "div", 12)(3, "header", 13)(4, "div", 14);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 15);
    \u0275\u0275element(6, "path", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, SubscriptionPlansComponent_div_3_ng_container_9_Template, 7, 6, "ng-container", 17)(10, SubscriptionPlansComponent_div_3_ng_container_10_Template, 7, 6, "ng-container", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, SubscriptionPlansComponent_div_3_div_11_Template, 50, 39, "div", 18)(12, SubscriptionPlansComponent_div_3_div_12_Template, 17, 18, "div", 19);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 5, "subscriptionPlans.badge"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.currentSubscription);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentSubscription);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentView === "current" && ctx_r1.currentSubscription);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentView === "explore");
  }
}
function SubscriptionPlansComponent_div_4_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "h1");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "subscriptionPlans.title"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 4, "subscriptionPlans.subtitle"));
  }
}
function SubscriptionPlansComponent_div_4_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "h1");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "subscriptionPlans.titleWithPlan"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 4, "subscriptionPlans.subtitleWithPlan"));
  }
}
function SubscriptionPlansComponent_div_4_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 165)(1, "div", 166)(2, "div", 167)(3, "span", 168);
    \u0275\u0275text(4, "Current plan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 24);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 25);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 169)(11, "button", 170);
    \u0275\u0275listener("click", function SubscriptionPlansComponent_div_4_div_5_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r31);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.manageBilling());
    });
    \u0275\u0275text(12, " Manage billing ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 171);
    \u0275\u0275listener("click", function SubscriptionPlansComponent_div_4_div_5_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r31);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.switchToExplore());
    });
    \u0275\u0275text(14, " Change plan ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.currentSubscription.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("$", \u0275\u0275pipeBind2(9, 3, ctx_r1.currentSubscription.subscriptionPlan.amount, "1.0-0"), "/", ctx_r1.currentSubscription.subscriptionPlan.interval, "");
  }
}
function SubscriptionPlansComponent_div_4_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 172)(1, "button", 89);
    \u0275\u0275listener("click", function SubscriptionPlansComponent_div_4_div_6_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r32);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.changeInterval("month"));
    });
    \u0275\u0275text(2, " Monthly ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 89);
    \u0275\u0275listener("click", function SubscriptionPlansComponent_div_4_div_6_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r32);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.changeInterval("year"));
    });
    \u0275\u0275text(4, " Annual ");
    \u0275\u0275elementStart(5, "span", 173);
    \u0275\u0275text(6, "-20%");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r1.selectedInterval === "month");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.selectedInterval === "year");
  }
}
function SubscriptionPlansComponent_div_4_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 174);
    \u0275\u0275element(1, "div", 175);
    \u0275\u0275elementEnd();
  }
}
function SubscriptionPlansComponent_div_4_div_8_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 184);
    \u0275\u0275text(1, "Recommended");
    \u0275\u0275elementEnd();
  }
}
function SubscriptionPlansComponent_div_4_div_8_div_1_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 185)(1, "span", 186);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 187);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const plan_r34 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getDiscountDisplayText(plan_r34));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 2, "subscriptionPlans.discountDescription"));
  }
}
function SubscriptionPlansComponent_div_4_div_8_div_1_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "Current plan");
    \u0275\u0275elementContainerEnd();
  }
}
function SubscriptionPlansComponent_div_4_div_8_div_1_ng_container_14_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "Select plan");
    \u0275\u0275elementContainerEnd();
  }
}
function SubscriptionPlansComponent_div_4_div_8_div_1_ng_container_14_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const plan_r34 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", plan_r34.isDowngrade ? "Downgrade" : "Upgrade", " ");
  }
}
function SubscriptionPlansComponent_div_4_div_8_div_1_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, SubscriptionPlansComponent_div_4_div_8_div_1_ng_container_14_ng_container_1_Template, 2, 0, "ng-container", 17)(2, SubscriptionPlansComponent_div_4_div_8_div_1_ng_container_14_ng_container_2_Template, 2, 1, "ng-container", 17);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.currentSubscription);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentSubscription);
  }
}
function SubscriptionPlansComponent_div_4_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 178);
    \u0275\u0275template(1, SubscriptionPlansComponent_div_4_div_8_div_1_div_1_Template, 2, 0, "div", 179);
    \u0275\u0275elementStart(2, "div", 180)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 181)(6, "span", 26);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 27);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(11, SubscriptionPlansComponent_div_4_div_8_div_1_div_11_Template, 6, 4, "div", 182);
    \u0275\u0275elementStart(12, "button", 183);
    \u0275\u0275listener("click", function SubscriptionPlansComponent_div_4_div_8_div_1_Template_button_click_12_listener() {
      const plan_r34 = \u0275\u0275restoreView(_r33).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.upgradePlan(plan_r34));
    });
    \u0275\u0275template(13, SubscriptionPlansComponent_div_4_div_8_div_1_ng_container_13_Template, 2, 0, "ng-container", 17)(14, SubscriptionPlansComponent_div_4_div_8_div_1_ng_container_14_Template, 3, 2, "ng-container", 17);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const plan_r34 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("recommended", plan_r34.name === "Plus")("current", plan_r34.code === (ctx_r1.currentSubscription == null ? null : ctx_r1.currentSubscription.subscriptionPlan == null ? null : ctx_r1.currentSubscription.subscriptionPlan.code));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", plan_r34.name === "Plus");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(plan_r34.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(8, 14, plan_r34.amount, "1.0-0"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("/", plan_r34.interval, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", plan_r34.discount == null ? null : plan_r34.discount.discount);
    \u0275\u0275advance();
    \u0275\u0275classProp("current", plan_r34.code === (ctx_r1.currentSubscription == null ? null : ctx_r1.currentSubscription.subscriptionPlan == null ? null : ctx_r1.currentSubscription.subscriptionPlan.code));
    \u0275\u0275property("disabled", plan_r34.code === (ctx_r1.currentSubscription == null ? null : ctx_r1.currentSubscription.subscriptionPlan == null ? null : ctx_r1.currentSubscription.subscriptionPlan.code));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", plan_r34.code === (ctx_r1.currentSubscription == null ? null : ctx_r1.currentSubscription.subscriptionPlan == null ? null : ctx_r1.currentSubscription.subscriptionPlan.code));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", plan_r34.code !== (ctx_r1.currentSubscription == null ? null : ctx_r1.currentSubscription.subscriptionPlan == null ? null : ctx_r1.currentSubscription.subscriptionPlan.code));
  }
}
function SubscriptionPlansComponent_div_4_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 176);
    \u0275\u0275template(1, SubscriptionPlansComponent_div_4_div_8_div_1_Template, 15, 17, "div", 177);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.visiblePlans)("ngForTrackBy", ctx_r1.trackByPlan);
  }
}
function SubscriptionPlansComponent_div_4_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 188)(1, "button", 89);
    \u0275\u0275listener("click", function SubscriptionPlansComponent_div_4_div_9_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r35);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.switchToCurrent());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 15);
    \u0275\u0275element(3, "path", 156);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Back to current plan ");
    \u0275\u0275elementEnd()();
  }
}
function SubscriptionPlansComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 157)(1, "div", 158)(2, "header", 159);
    \u0275\u0275template(3, SubscriptionPlansComponent_div_4_ng_container_3_Template, 7, 6, "ng-container", 17)(4, SubscriptionPlansComponent_div_4_ng_container_4_Template, 7, 6, "ng-container", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, SubscriptionPlansComponent_div_4_div_5_Template, 15, 6, "div", 160)(6, SubscriptionPlansComponent_div_4_div_6_Template, 7, 4, "div", 161)(7, SubscriptionPlansComponent_div_4_div_7_Template, 2, 0, "div", 162)(8, SubscriptionPlansComponent_div_4_div_8_Template, 2, 2, "div", 163)(9, SubscriptionPlansComponent_div_4_div_9_Template, 5, 0, "div", 164);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx_r1.currentSubscription);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentSubscription);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentSubscription && ctx_r1.currentView === "current");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentView === "explore" || !ctx_r1.currentSubscription);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loadingPlans);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loadingPlans && (ctx_r1.currentView === "explore" || !ctx_r1.currentSubscription));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentSubscription && ctx_r1.currentView === "explore");
  }
}
function SubscriptionPlansComponent_div_5_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 205)(1, "label");
    \u0275\u0275text(2, "Internal Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 218);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.selectedFeatureForModal.code);
  }
}
function SubscriptionPlansComponent_div_5_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 205)(1, "label");
    \u0275\u0275text(2, "Region");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 219);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.getCountryDisplayName(ctx_r1.selectedFeatureForModal.country) || ctx_r1.selectedFeatureForModal.country);
  }
}
function SubscriptionPlansComponent_div_5_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 220)(1, "label");
    \u0275\u0275text(2, "Your Pricing");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 221)(4, "span", 222);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 223);
    \u0275\u0275text(8, "CREDITS ");
    \u0275\u0275elementStart(9, "span", 224);
    \u0275\u0275text(10, "/ request");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 1, ctx_r1.getEffectivePriceForApi(ctx_r1.selectedFeatureForModal, ctx_r1.currentSubscription.subscriptionPlan), "1.2-4"));
  }
}
function SubscriptionPlansComponent_div_5_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 220)(1, "label");
    \u0275\u0275text(2, "Standard API Price");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 221)(4, "span", 222);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 223);
    \u0275\u0275text(8, "CREDITS ");
    \u0275\u0275elementStart(9, "span", 224);
    \u0275\u0275text(10, "/ request");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 1, (tmp_2_0 = ctx_r1.selectedFeatureForModal.price) !== null && tmp_2_0 !== void 0 ? tmp_2_0 : 0, "1.2-4"));
  }
}
function SubscriptionPlansComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 189);
    \u0275\u0275listener("click", function SubscriptionPlansComponent_div_5_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r36);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeFeatureModal());
    });
    \u0275\u0275elementStart(1, "div", 190);
    \u0275\u0275listener("click", function SubscriptionPlansComponent_div_5_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r36);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "button", 191);
    \u0275\u0275listener("click", function SubscriptionPlansComponent_div_5_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r36);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeFeatureModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 192);
    \u0275\u0275element(4, "line", 193)(5, "line", 194);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "div", 195)(7, "div", 196);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 197)(9, "defs")(10, "linearGradient", 198);
    \u0275\u0275element(11, "stop", 199)(12, "stop", 200);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(13, "path", 201)(14, "path", 202);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(15, "h2");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "p", 203);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 204)(20, "div", 205)(21, "label");
    \u0275\u0275text(22, "Endpoint URL");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 206);
    \u0275\u0275listener("click", function SubscriptionPlansComponent_div_5_Template_div_click_23_listener() {
      \u0275\u0275restoreView(_r36);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.copyUrlToClipboard(ctx_r1.selectedFeatureForModal.url));
    });
    \u0275\u0275elementStart(24, "span");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "button", 207);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(27, "svg", 208);
    \u0275\u0275element(28, "rect", 209)(29, "path", 210);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(30, "div", 211);
    \u0275\u0275template(31, SubscriptionPlansComponent_div_5_div_31_Template, 5, 1, "div", 212)(32, SubscriptionPlansComponent_div_5_div_32_Template, 5, 1, "div", 212);
    \u0275\u0275elementEnd();
    \u0275\u0275template(33, SubscriptionPlansComponent_div_5_div_33_Template, 11, 4, "div", 213)(34, SubscriptionPlansComponent_div_5_div_34_Template, 11, 4, "div", 213);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 214)(36, "button", 215);
    \u0275\u0275listener("click", function SubscriptionPlansComponent_div_5_Template_button_click_36_listener() {
      \u0275\u0275restoreView(_r36);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openPostmanForFeature(ctx_r1.selectedFeatureForModal));
    });
    \u0275\u0275text(37, " Open in Postman ");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(38, "svg", 192);
    \u0275\u0275element(39, "line", 216)(40, "polyline", 217);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(16);
    \u0275\u0275textInterpolate(ctx_r1.getFeatureDisplayName(ctx_r1.selectedFeatureForModal));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getCategoryDisplayName(ctx_r1.selectedFeatureForModal.baseCategory) || "API Endpoint");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.getFullEndpointUrl(ctx_r1.selectedFeatureForModal.url));
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r1.selectedFeatureForModal.code);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedFeatureForModal.country);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentSubscription);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.currentSubscription);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r1.selectedFeatureForModal.code);
  }
}
var APP_FEATURES_CACHE_KEY = "smartAgent_appFeatures";
var SubscriptionPlansComponent = class _SubscriptionPlansComponent {
  constructor(_subscriptionService, _router, _route, _translocoService, _snackBar) {
    this._subscriptionService = _subscriptionService;
    this._router = _router;
    this._route = _route;
    this._translocoService = _translocoService;
    this._snackBar = _snackBar;
    this._unsubscribeAll = new Subject();
    this.currentSubscription = null;
    this.plans = [];
    this.loadingPlans = false;
    this.currentView = "current";
    this.selectedInterval = "month";
    this.isLoading = false;
    this.hasBillingSetup = false;
    this.hasPaymentMethod = false;
    this.requestsPerMonth = 2e3;
    this.requestsPerYear = 24e3;
    this.BASE_REQUEST_PRICE = 0.3;
    this.MONTHLY_SLIDER_MAX = 2e4;
    this.MONTHLY_SLIDER_STEP = 100;
    this.YEARLY_SLIDER_MAX = 5e5;
    this.YEARLY_SLIDER_STEP = 1e3;
    this.uiVersion = "v1";
    this.showPlanChangeDialog = false;
    this.showBillingRequiredModal = false;
    this.selectedPlanForChange = null;
    this.selectedPlanRequests = 0;
    this.selectedFeatureForModal = null;
    this.servicesByCountry = {};
    this.countries = [];
    this.showApiBreakdown = false;
    this.appFeatures = [];
    this.loadingFeatures = false;
    this.apiBreakdownSearchQuery = "";
    this.apiBreakdownCountryFilter = "";
    this.apiBreakdownCategoryFilter = "";
    this.myListFeatures = [];
    this.loadingMyListFeatures = false;
    this.myListSearchQuery = "";
    this.myListCountryFilter = "";
    this.myListCategoryFilter = "";
  }
  ngOnInit() {
    this._loadCurrentSubscription();
    this._checkBillingSetup();
    this._confirmSessionIfPresent();
  }
  ngOnDestroy() {
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }
  // UI Version toggle
  toggleUiVersion() {
    this.uiVersion = this.uiVersion === "v1" ? "v2" : "v1";
  }
  // Navigation
  navigateToAddCredits() {
    this._router.navigate(["/add-credits"]);
  }
  goToBillingDetails() {
    this.showBillingRequiredModal = false;
    this._router.navigate(["/settings", "billing-details"], {
      queryParams: { returnUrl: "/subscription-plans" }
    });
  }
  // View switching
  switchToExplore() {
    this.currentView = "explore";
    this._loadPlans();
  }
  switchToCurrent() {
    this.currentView = "current";
  }
  // Interval switching
  changeInterval(interval) {
    if (interval === "year" && this.selectedInterval === "month") {
      this.requestsPerYear = this.requestsPerMonth * 12;
    } else if (interval === "month" && this.selectedInterval === "year") {
      this.requestsPerMonth = Math.round(this.requestsPerYear / 12);
    }
    this.selectedInterval = interval;
    this._loadPlans();
  }
  // Actions
  upgradePlan(plan) {
    this.selectedPlanRequests = this.requestsPerMonth;
    this.selectedPlanForChange = plan;
    this.showPlanChangeDialog = true;
  }
  confirmPlanChange() {
    if (!this.selectedPlanForChange)
      return;
    this.isLoading = true;
    this.showPlanChangeDialog = false;
    this._subscriptionService.changeMySubscription({
      id: this.selectedPlanForChange._id,
      requestsPerMonth: this.selectedPlanRequests
    }).subscribe({
      next: (response) => {
        this.isLoading = false;
        if (response?.data?.url) {
          window.open(response.data.url, "_self");
        }
      },
      error: (error) => {
        console.error("Error changing subscription:", error);
        this.isLoading = false;
      }
    });
  }
  cancelPlanChange() {
    this.showPlanChangeDialog = false;
    this.selectedPlanForChange = null;
  }
  showApiBreakdownView() {
    this.showApiBreakdown = true;
    this._loadApiFeatures();
    if (this.plans.length === 0) {
      this._loadPlans();
    }
  }
  hideApiBreakdownView() {
    this.showApiBreakdown = false;
  }
  openPostmanForFeature(feature) {
    if (!feature?.code)
      return;
    const baseUrl = window.location.origin;
    const postmanUrl = `${baseUrl}/postman?code=${encodeURIComponent(feature.code)}`;
    window.open(postmanUrl, "_blank");
  }
  showEndpointUrlToast(feature) {
    this.openFeatureModal(feature);
  }
  openFeatureModal(feature) {
    this.selectedFeatureForModal = feature;
  }
  closeFeatureModal() {
    this.selectedFeatureForModal = null;
  }
  getFullEndpointUrl(url) {
    if (!url)
      return "N/A";
    return url.startsWith("http") ? url : `${environment.apiUrl.replace(/\/$/, "")}/${url.replace(/^\//, "")}`;
  }
  copyUrlToClipboard(url) {
    const fullUrl = this.getFullEndpointUrl(url);
    if (!fullUrl || fullUrl === "N/A")
      return;
    navigator.clipboard.writeText(fullUrl).then(() => {
      this._snackBar.open("URL copied to clipboard!", void 0, { duration: 2e3 });
    }).catch((err) => {
      console.error("Failed to copy text: ", err);
    });
  }
  /**
   * Catalog / my-list base price per feature (smartCheck vs standard); no plan discount applied.
   */
  getCatalogBasePriceForApi(feature, plan) {
    const isSmartCheckPlan = Boolean(plan.isSmartcheck);
    return isSmartCheckPlan && feature.smartCheckPrice != null ? feature.smartCheckPrice : feature.price ?? 0;
  }
  getEffectivePriceForApi(feature, plan) {
    return this.getCatalogBasePriceForApi(feature, plan);
  }
  /**
   * Public catalog row × plan column: apply each plan's apiRequest discount from changesInPrices.
   */
  getCompareTablePriceForApi(feature, plan) {
    return applyApiRequestDiscountToBasePrice(this.getCatalogBasePriceForApi(feature, plan), plan.discount);
  }
  _loadApiFeatures() {
    const cached = typeof sessionStorage !== "undefined" && sessionStorage.getItem(APP_FEATURES_CACHE_KEY);
    if (cached) {
      try {
        const parsed = JSON.parse(cached);
        if (Array.isArray(parsed) && parsed.length > 0) {
          this.appFeatures = parsed.filter((f) => f.group === "apiRequest");
          return;
        }
      } catch {
      }
    }
    this.loadingFeatures = true;
    this._subscriptionService.getPublicAppFeatures().subscribe({
      next: (response) => {
        const raw = response?.data;
        const list = Array.isArray(raw) ? raw : raw?.docs ?? [];
        if (list.length > 0) {
          try {
            sessionStorage.setItem(APP_FEATURES_CACHE_KEY, JSON.stringify(list));
          } catch {
          }
        }
        this.appFeatures = list.filter((f) => f.group === "apiRequest");
        this.loadingFeatures = false;
      },
      error: (error) => {
        console.error("Error loading app features:", error);
        this.loadingFeatures = false;
      }
    });
  }
  manageBilling() {
    this._subscriptionService.createPortalSession().subscribe({
      next: (response) => {
        if (response?.data?.url) {
          window.open(response.data.url, "_self");
        }
      },
      error: (error) => {
        console.error("Error creating portal session:", error);
      }
    });
  }
  cancelSubscription() {
    if (!this.currentSubscription)
      return;
    this._subscriptionService.cancelSubscription({ id: this.currentSubscription._id }).subscribe({
      next: () => {
        this._loadCurrentSubscription();
      },
      error: (error) => {
        console.error("Error canceling subscription:", error);
      }
    });
  }
  // Helpers
  getAmountByMonth(plan) {
    const amount = plan?.amount || plan?.amountByMonth;
    const intervalCount = plan?.intervalCount;
    const paymentsPerYear = 12 / intervalCount;
    return plan.interval === "month" ? amount.toFixed(2) : (plan?.amount / paymentsPerYear || plan?.amountByMonth * paymentsPerYear).toFixed(2);
  }
  getAmountByYear(plan) {
    const amount = plan?.amount || plan?.amountByMonth;
    const intervalCount = plan?.intervalCount;
    const paymentsPerYear = 12 / intervalCount;
    return plan.interval === "year" ? (plan?.amount || plan?.amountByMonth * paymentsPerYear).toFixed(2) : (amount * paymentsPerYear).toFixed(2);
  }
  isBoolean(value) {
    return value === true || value === false;
  }
  onSliderChange(event) {
    const value = Number(event.target.value);
    if (this.selectedInterval === "year") {
      this.requestsPerYear = value;
      this.requestsPerMonth = Math.round(value / 12);
    } else {
      this.requestsPerMonth = value;
      this.requestsPerYear = value * 12;
    }
  }
  get sliderValue() {
    return this.selectedInterval === "year" ? this.requestsPerYear : this.requestsPerMonth;
  }
  get sliderMax() {
    return this.selectedInterval === "year" ? this.YEARLY_SLIDER_MAX : this.MONTHLY_SLIDER_MAX;
  }
  get sliderStep() {
    return this.selectedInterval === "year" ? this.YEARLY_SLIDER_STEP : this.MONTHLY_SLIDER_STEP;
  }
  get sliderTicks() {
    const segments = 4;
    return Array.from({ length: segments + 1 }, (_, i) => this.formatNumber(Math.round(this.sliderMax / segments * i)));
  }
  getEffectiveCostPerRequest(plan) {
    return applyApiRequestDiscountToBasePrice(this.BASE_REQUEST_PRICE, plan.discount);
  }
  getDiscountDisplayText(plan) {
    const d = plan.discount;
    if (!d?.discount)
      return "";
    if (d.type === "amount") {
      return `$${d.discount.toFixed(2)} ${this._translocoService.translate("subscriptionPlans.off")}`;
    }
    return `${d.discount}% ${this._translocoService.translate("subscriptionPlans.off")}`;
  }
  getBaseMonthlyAmount(plan) {
    if (!plan.amount)
      return 0;
    return plan.interval === "year" ? plan.amount / 12 : plan.amount;
  }
  getIncludedRequests(plan) {
    const baseMonthly = this.getBaseMonthlyAmount(plan);
    const pricePerReq = this.getEffectiveCostPerRequest(plan);
    if (pricePerReq <= 0)
      return Infinity;
    return Math.floor(baseMonthly / pricePerReq);
  }
  getExtraRequests(plan) {
    return Math.max(0, this.requestsPerMonth - this.getIncludedRequests(plan));
  }
  getMonthlyRequestSpend(plan) {
    const extraRequests = this.getExtraRequests(plan);
    return extraRequests * this.getEffectiveCostPerRequest(plan);
  }
  getRequestAddOn(plan) {
    return this.getMonthlyRequestSpend(plan);
  }
  getEstimatedTotal(plan) {
    const base = this.getBaseMonthlyAmount(plan);
    return base + this.getRequestAddOn(plan);
  }
  getTotalMonthlyCost(plan) {
    const baseCost = this.getBaseMonthlyAmount(plan);
    return baseCost + this.getMonthlyRequestSpend(plan);
  }
  getBestValuePlanId() {
    const paidPlans = this.plans.filter((p) => p._id);
    if (!paidPlans.length)
      return "";
    if (this.requestsPerMonth > 0) {
      let candidates = paidPlans.filter((p) => p.discount?.discount);
      if (candidates.length) {
        if (this.requestsPerMonth >= 400) {
          candidates = candidates.filter((p) => !this._isStarterPlan(p));
        }
        if (candidates.length) {
          return candidates.reduce((best, plan) => this.getTotalMonthlyCost(plan) < this.getTotalMonthlyCost(best) ? plan : best)._id;
        }
      }
    }
    return paidPlans.reduce((best, plan) => this.getTotalMonthlyCost(plan) < this.getTotalMonthlyCost(best) ? plan : best)._id;
  }
  isPlanVisibleForRequestVolume(plan) {
    const isCurrent = plan.code === this.currentSubscription?.subscriptionPlan?.code;
    if (isCurrent)
      return true;
    if (this.requestsPerMonth < 2e3)
      return true;
    if (this._isStarterPlan(plan) && this.requestsPerMonth >= 2e3)
      return false;
    if (this._isBasicPlan(plan) && this.requestsPerMonth >= 3e3)
      return false;
    return true;
  }
  _isStarterPlan(plan) {
    return /starter/i.test(plan.name) || (plan.amount ?? 0) <= 49;
  }
  _isBasicPlan(plan) {
    return /basic/i.test(plan.name) || (plan.amount ?? 0) >= 99 && (plan.amount ?? 0) <= 149;
  }
  get visiblePlans() {
    return this.plans.filter((p) => this.isPlanVisibleForRequestVolume(p));
  }
  /** Plans shown in API breakdown table (Smart plans only) */
  get apiBreakdownPlans() {
    return this.visiblePlans.filter((p) => /smart/i.test(p.name));
  }
  /** Unique countries from app features for filter dropdown */
  get apiBreakdownCountries() {
    const set = /* @__PURE__ */ new Set();
    this.appFeatures.forEach((f) => {
      const c = f.country?.trim();
      if (c)
        set.add(c);
    });
    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }
  /** Unique baseCategories from app features for filter dropdown */
  get apiBreakdownCategories() {
    const set = /* @__PURE__ */ new Set();
    this.appFeatures.forEach((f) => {
      const c = f.baseCategory?.trim();
      if (c)
        set.add(c);
    });
    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }
  /** API features filtered by search, country, and category */
  get filteredAppFeatures() {
    let list = this.appFeatures;
    const q = (this.apiBreakdownSearchQuery || "").trim().toLowerCase();
    if (q) {
      list = list.filter((f) => {
        const displayName = this.getFeatureDisplayName(f).toLowerCase();
        const name = (f.name || "").toLowerCase();
        const code = (f.code || "").toLowerCase();
        const url = (f.url || "").toLowerCase();
        return displayName.includes(q) || name.includes(q) || code.includes(q) || url.includes(q);
      });
    }
    if (this.apiBreakdownCountryFilter) {
      list = list.filter((f) => (f.country || "").trim() === this.apiBreakdownCountryFilter);
    }
    if (this.apiBreakdownCategoryFilter) {
      list = list.filter((f) => (f.baseCategory || "").trim() === this.apiBreakdownCategoryFilter);
    }
    return list;
  }
  /** Filtered features grouped by baseCategory for display */
  get groupedFilteredFeatures() {
    const features = this.filteredAppFeatures;
    const map = /* @__PURE__ */ new Map();
    features.forEach((f) => {
      const cat = (f.baseCategory || "").trim() || "_uncategorized";
      if (!map.has(cat))
        map.set(cat, []);
      map.get(cat).push(f);
    });
    const categories = Array.from(map.keys()).sort((a, b) => {
      if (a === "_uncategorized")
        return 1;
      if (b === "_uncategorized")
        return -1;
      return a.localeCompare(b);
    });
    return categories.map((category) => ({
      category: category === "_uncategorized" ? "" : category,
      features: map.get(category)
    }));
  }
  /** Unique countries from my-list features for filter dropdown */
  get myListCountries() {
    const set = /* @__PURE__ */ new Set();
    this.myListFeatures.forEach((f) => {
      const c = f.country?.trim();
      if (c)
        set.add(c);
    });
    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }
  /** Unique baseCategories from my-list features for filter dropdown */
  get myListCategories() {
    const set = /* @__PURE__ */ new Set();
    this.myListFeatures.forEach((f) => {
      const c = f.baseCategory?.trim();
      if (c)
        set.add(c);
    });
    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }
  /** My-list features filtered by search, country, and category */
  get filteredMyListFeatures() {
    let list = this.myListFeatures;
    const q = (this.myListSearchQuery || "").trim().toLowerCase();
    if (q) {
      list = list.filter((f) => {
        const displayName = this.getFeatureDisplayName(f).toLowerCase();
        const name = (f.name || "").toLowerCase();
        const code = (f.code || "").toLowerCase();
        const url = (f.url || "").toLowerCase();
        return displayName.includes(q) || name.includes(q) || code.includes(q) || url.includes(q);
      });
    }
    if (this.myListCountryFilter) {
      list = list.filter((f) => (f.country || "").trim() === this.myListCountryFilter);
    }
    if (this.myListCategoryFilter) {
      list = list.filter((f) => (f.baseCategory || "").trim() === this.myListCategoryFilter);
    }
    return list;
  }
  /** My-list features grouped by baseCategory for current plan view */
  get groupedMyListFeatures() {
    const features = this.filteredMyListFeatures;
    const map = /* @__PURE__ */ new Map();
    features.forEach((f) => {
      const cat = (f.baseCategory || "").trim() || "_uncategorized";
      if (!map.has(cat))
        map.set(cat, []);
      map.get(cat).push(f);
    });
    const categories = Array.from(map.keys()).sort((a, b) => {
      if (a === "_uncategorized")
        return 1;
      if (b === "_uncategorized")
        return -1;
      return a.localeCompare(b);
    });
    return categories.map((category) => ({
      category: category === "_uncategorized" ? "" : category,
      features: map.get(category)
    }));
  }
  /** Add-on cost in the display unit (monthly or yearly) */
  getDisplayRequestAddOn(plan) {
    const monthlyAddOn = this.getRequestAddOn(plan);
    return this.selectedInterval === "year" ? monthlyAddOn * 12 : monthlyAddOn;
  }
  /** Estimated total in the display unit (monthly or yearly) */
  getDisplayEstimatedTotal(plan) {
    const monthlyTotal = this.getEstimatedTotal(plan);
    return this.selectedInterval === "year" ? monthlyTotal * 12 : monthlyTotal;
  }
  formatNumber(value) {
    if (value >= 1e3) {
      return (value / 1e3).toFixed(value % 1e3 === 0 ? 0 : 1) + "k";
    }
    return value.toString();
  }
  _loadCurrentSubscription() {
    this._subscriptionService.getMySubscription({
      where_active: true,
      findOne: 1
    }).subscribe({
      next: (response) => {
        if (response?.data) {
          this.currentSubscription = response.data;
          this._formatCurrentSubscription();
          this.currentView = "current";
          this._loadMyListFeatures();
          this._prefetchPlansIfNeededForDiscountCta();
        } else {
          this.currentView = "explore";
          this._loadPlans();
        }
      },
      error: (error) => {
        console.error("Error loading subscription:", error);
        this.currentView = "explore";
        this._loadPlans();
      }
    });
  }
  _loadMyListFeatures() {
    this.loadingMyListFeatures = true;
    this._subscriptionService.getMyListAppFeatures().subscribe({
      next: (response) => {
        const raw = response?.data;
        const list = Array.isArray(raw) ? raw : raw?.docs ?? [];
        this.myListFeatures = list.filter((f) => f.group === "apiRequest");
        this.loadingMyListFeatures = false;
      },
      error: (error) => {
        console.error("Error loading my-list features:", error);
        this.myListFeatures = [];
        this.loadingMyListFeatures = false;
      }
    });
  }
  _loadPlans() {
    if (this.loadingPlans)
      return;
    this.loadingPlans = true;
    this._subscriptionService.getPricingTableDisplay({ lang: this._getCurrentLang() }).subscribe({
      next: (response) => {
        const plans = response?.data?.plans ?? [];
        const filtered = plans.filter((p) => p.interval === this.selectedInterval);
        this._processPlans(filtered);
        this.loadingPlans = false;
      },
      error: (error) => {
        console.error("Error loading plans:", error);
        this.loadingPlans = false;
      }
    });
  }
  _getCurrentLang() {
    const lang = typeof navigator !== "undefined" && navigator.language || "en";
    return lang.startsWith("es") ? "es" : lang.startsWith("fr") ? "fr" : "en";
  }
  _processPlans(plans) {
    const processedPlans = [];
    const planIdMap = {};
    const currentAmount = this.currentSubscription?.subscriptionPlan?.amount || 0;
    plans.forEach((plan) => {
      const planWithDisplay = plan;
      if (planWithDisplay.displayName) {
        plan.name = planWithDisplay.displayName;
      }
      plan.discount = plan.changesInPrices?.find((change) => change.group === "apiRequest");
      plan.isDowngrade = this.currentSubscription ? (plan.amount || 0) < currentAmount : false;
      if (!(plan._id in planIdMap)) {
        processedPlans.push(plan);
        planIdMap[plan._id] = true;
      }
    });
    processedPlans.sort((a, b) => (a.amount || 0) - (b.amount || 0));
    this.plans = processedPlans;
  }
  _formatCurrentSubscription() {
    if (!this.currentSubscription)
      return;
    const subscription = this.currentSubscription.subscriptionPlan;
    const rows = formatBenefitRowsFromChanges(subscription.changesInPrices || []);
    const changes = rows.map((r) => ({
      key: r.key,
      value: r.value
    }));
    const middleIndex = Math.ceil(changes.length / 2);
    subscription.changesLeft = changes.slice(0, middleIndex);
    subscription.changesRight = changes.slice(middleIndex);
    this.currentSubscription.amountByMonth = (this.currentSubscription.amount || subscription.amount) / (subscription.intervalCount * 12);
    this.selectedInterval = subscription.interval;
  }
  _confirmSessionIfPresent() {
    const sessionId = this._route.snapshot.queryParamMap.get("session_id");
    if (!sessionId?.trim())
      return;
    this._subscriptionService.confirmCheckoutSession(sessionId).subscribe({
      next: () => {
        this._router.navigate([], {
          queryParams: {},
          queryParamsHandling: "merge",
          replaceUrl: true
        });
        this._loadCurrentSubscription();
      },
      error: (error) => {
        console.error("Error confirming checkout session:", error);
        this._snackBar.open(this._translocoService.translate("subscriptionPlans.sessionConfirmError") || "Could not confirm subscription. Please try again.", void 0, { duration: 5e3 });
      }
    });
  }
  _checkBillingSetup() {
    this._subscriptionService.getBillingConfig({ findOne: true }).subscribe({
      next: (response) => {
        const inv = response?.data?.invoiceSettings;
        this.hasBillingSetup = !!(inv && inv.type && (inv.person || inv.business) && inv.address);
        if (!this.hasBillingSetup) {
          this.showBillingRequiredModal = true;
        }
      },
      error: (error) => {
        console.error("Error loading billing config:", error);
      }
    });
    this._subscriptionService.getCards({}).subscribe({
      next: (response) => {
        this.hasPaymentMethod = response?.data?.some((card) => card.isDefault) || false;
      },
      error: (error) => {
        console.error("Error loading cards:", error);
      }
    });
  }
  // TrackBy function for ngFor
  trackByPlan(index, plan) {
    return plan._id || plan.code || index.toString();
  }
  trackByFeature(index, feature) {
    return feature._id || feature.code || index.toString();
  }
  trackByGroup(index, group) {
    return group.category || `group-${index}`;
  }
  getFeatureDisplayName(feature) {
    const key = `appFeatures.${feature.code}.title`;
    const translated = this._translocoService.translate(key);
    return translated !== key ? translated : feature.name;
  }
  getCategoryDisplayName(category) {
    if (!category)
      return "";
    const key = `pricing.categories.${category}`;
    const translated = this._translocoService.translate(key);
    return translated !== key ? translated : category.replace(/_/g, " ");
  }
  getCountryDisplayName(country) {
    if (!country)
      return "";
    if (country.toLowerCase() === "world")
      return "Global";
    return country;
  }
  get currentPlanHasIncludedBenefits() {
    const sp = this.currentSubscription?.subscriptionPlan;
    if (!sp)
      return false;
    return !!(sp.changesLeft?.length || sp.changesRight?.length);
  }
  get showCurrentPlanIncludedFallback() {
    return !!this.currentSubscription && !this.currentPlanHasIncludedBenefits;
  }
  get hasOtherPlansWithApiDiscountForCurrent() {
    return hasOtherPlanWithApiDiscount(this.plans, this.currentSubscription?.subscriptionPlan?._id);
  }
  compareDiscountedPlansFromDialog() {
    this.cancelPlanChange();
    this.switchToExplore();
    this._scrollPlansExploreIntoView();
  }
  compareDiscountedPlansFromCurrentCard() {
    this.switchToExplore();
    this._scrollPlansExploreIntoView();
  }
  _scrollPlansExploreIntoView() {
    setTimeout(() => {
      this.plansExploreAnchor?.nativeElement?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }, 280);
  }
  _prefetchPlansIfNeededForDiscountCta() {
    if (!this.currentSubscription?.subscriptionPlan)
      return;
    const sp = this.currentSubscription.subscriptionPlan;
    const hasRows = (sp.changesLeft?.length || 0) + (sp.changesRight?.length || 0) > 0;
    if (hasRows || this.plans.length > 0)
      return;
    this._loadPlans();
  }
  static {
    this.\u0275fac = function SubscriptionPlansComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SubscriptionPlansComponent)(\u0275\u0275directiveInject(SubscriptionService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(TranslocoService), \u0275\u0275directiveInject(MatSnackBar));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SubscriptionPlansComponent, selectors: [["subscription-plans"]], viewQuery: function SubscriptionPlansComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.plansExploreAnchor = _t.first);
      }
    }, decls: 6, vars: 10, consts: [["plansExploreAnchor", ""], [3, "goToBilling", "isOpen"], [3, "confirm", "cancel", "comparePlans", "isOpen", "currentPlan", "newPlan", "allPlans", "requestsPerMonth"], ["class", "ui-version-toggle", 4, "ngIf"], ["class", "subscription-page", 4, "ngIf"], ["class", "subscription-page-v2", 4, "ngIf"], ["class", "privy-modal-backdrop", 3, "click", 4, "ngIf"], [1, "ui-version-toggle"], [1, "toggle-label"], [1, "version-btn", 3, "click"], [1, "subscription-page"], [1, "bg-pattern"], [1, "container"], [1, "header"], [1, "badge"], ["viewBox", "0 0 20 20", "fill", "currentColor"], ["fill-rule", "evenodd", "d", "M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z", "clip-rule", "evenodd"], [4, "ngIf"], ["class", "current-plan-section", 4, "ngIf"], ["class", "explore-section", 4, "ngIf"], [1, "current-plan-section"], [1, "current-plan-card"], [1, "plan-badge"], [1, "plan-info"], [1, "plan-name"], [1, "plan-price"], [1, "amount"], [1, "period"], [1, "plan-meta"], [1, "meta-item"], [1, "label"], [1, "value"], ["class", "value status-active", 4, "ngIf"], ["class", "value status-warning", 4, "ngIf"], [1, "plan-actions"], [1, "btn", "btn-primary", 3, "click"], ["fill-rule", "evenodd", "d", "M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z", "clip-rule", "evenodd"], [1, "btn", "btn-ghost", 3, "click"], ["fill-rule", "evenodd", "d", "M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z", "clip-rule", "evenodd"], ["class", "features-card", 4, "ngIf"], ["class", "features-card features-card-fallback", 4, "ngIf"], ["class", "api-breakdown-section api-prices-card", 4, "ngIf"], [1, "value", "status-active"], [1, "value", "status-warning"], [1, "features-card"], [1, "features-grid"], [4, "ngFor", "ngForOf"], ["class", "feature-item", 4, "ngIf"], [1, "feature-item"], ["viewBox", "0 0 20 20", "fill", "currentColor", 1, "check-icon"], ["fill-rule", "evenodd", "d", "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z", "clip-rule", "evenodd"], ["class", "feature-value", 4, "ngIf"], [1, "feature-value"], [1, "features-card", "features-card-fallback"], [1, "features-included-label"], [1, "included-fallback-card"], [1, "features-fallback-intro"], [1, "included-fallback-rows"], [1, "included-fallback-row"], ["viewBox", "0 0 20 20", "fill", "currentColor", "aria-hidden", "true", 1, "included-fallback-check"], ["type", "button", "class", "btn-compare-plans-link-inline", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn-compare-plans-link-inline", 3, "click"], ["viewBox", "0 0 20 20", "fill", "currentColor", "aria-hidden", "true", 1, "btn-compare-plans-chevron"], ["fill-rule", "evenodd", "d", "M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z", "clip-rule", "evenodd"], [1, "api-breakdown-section", "api-prices-card"], [1, "api-breakdown-header"], ["class", "loading-state", 4, "ngIf"], ["class", "api-breakdown-empty", 4, "ngIf"], ["class", "api-breakdown-table-wrapper", 4, "ngIf"], [1, "loading-state"], [1, "spinner"], [1, "api-breakdown-empty"], [1, "api-breakdown-table-wrapper"], [1, "api-breakdown-filters"], ["type", "text", 1, "api-breakdown-search-input", 3, "input", "placeholder", "value"], [1, "api-breakdown-filter-select", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "api-breakdown-table"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "value"], ["class", "api-breakdown-category-row", 4, "ngIf"], ["class", "cursor-pointer", 3, "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "api-breakdown-category-row"], ["colspan", "2"], [1, "cursor-pointer", 3, "click"], [1, "explore-section"], [1, "interval-toggle"], [1, "toggle-wrapper"], [3, "click"], [1, "save-badge"], ["class", "slider-section", 4, "ngIf"], ["class", "api-breakdown-section", 4, "ngIf"], ["class", "plans-grid", 4, "ngIf"], ["class", "back-nav", 4, "ngIf"], [1, "slider-section"], [1, "slider-header"], [1, "slider-label-row"], [1, "slider-label"], [1, "slider-value-pill"], [1, "slider-hint"], [1, "slider-track-wrapper"], ["type", "range", "min", "0", 1, "slider-input", 3, "input", "max", "step", "value"], [1, "slider-ticks"], ["class", "plan-cost-chips", 4, "ngIf"], ["class", "slider-actions", 4, "ngIf"], [1, "plan-cost-chips"], [1, "plan-cost-chip"], [1, "chip-plan-name"], [1, "chip-cost-per-req"], [1, "chip-monthly-spend"], ["class", "chip-best-value-label", 4, "ngIf"], [1, "chip-best-value-label"], [1, "slider-actions"], ["type", "button", 1, "btn", "btn-api-breakdown", 3, "click"], [1, "api-breakdown-section"], ["type", "button", 1, "btn", "btn-ghost", "btn-sm", 3, "click"], ["class", "api-breakdown-footer", 4, "ngIf"], [1, "api-breakdown-footer"], [1, "footer-label"], ["class", "footer-plan", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "footer-plan"], [1, "plans-grid"], ["class", "plan-card", 3, "popular", "current", "best-value-card", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "plan-card"], ["class", "popular-badge", 4, "ngIf"], ["class", "best-value-badge", 4, "ngIf"], [1, "plan-card-header"], [1, "plan-card-pricing"], [1, "price-display"], [1, "currency"], [1, "price-amount"], [1, "price-period"], ["class", "price-note", 4, "ngIf"], ["class", "plan-addon-line", 4, "ngIf"], ["class", "plan-estimated-total", 4, "ngIf"], ["class", "plan-discount-chip mb-2", 4, "ngIf"], [1, "plan-card-btn", "btn-primary", 3, "click", "disabled"], [1, "popular-badge"], [1, "best-value-badge"], [1, "price-note"], [1, "plan-addon-line"], [1, "addon-plus"], [1, "addon-amount"], [1, "addon-label"], [1, "plan-estimated-total"], [1, "total-label"], [1, "total-amount"], [1, "total-currency"], [1, "total-number"], [1, "total-period"], [1, "plan-discount-chip", "mb-2"], [1, "discount-chip-value"], [1, "discount-chip-context"], [1, "back-nav"], [1, "btn-link", 3, "click"], ["fill-rule", "evenodd", "d", "M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z", "clip-rule", "evenodd"], [1, "subscription-page-v2"], [1, "v2-container"], [1, "v2-header"], ["class", "v2-current-banner", 4, "ngIf"], ["class", "v2-interval-toggle", 4, "ngIf"], ["class", "v2-loading", 4, "ngIf"], ["class", "v2-plans-grid", 4, "ngIf"], ["class", "v2-back-link", 4, "ngIf"], [1, "v2-current-banner"], [1, "banner-content"], [1, "banner-info"], [1, "current-label"], [1, "banner-actions"], [1, "v2-btn", "v2-btn-outline", 3, "click"], [1, "v2-btn", "v2-btn-primary", 3, "click"], [1, "v2-interval-toggle"], [1, "save-tag"], [1, "v2-loading"], [1, "v2-spinner"], [1, "v2-plans-grid"], ["class", "v2-plan-card", 3, "recommended", "current", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "v2-plan-card"], ["class", "v2-card-badge", 4, "ngIf"], [1, "v2-card-header"], [1, "v2-price"], ["class", "v2-card-discount", 4, "ngIf"], [1, "v2-card-btn", 3, "click", "disabled"], [1, "v2-card-badge"], [1, "v2-card-discount"], [1, "discount-value"], [1, "discount-context"], [1, "v2-back-link"], [1, "privy-modal-backdrop", 3, "click"], [1, "privy-modal-container", 3, "click"], [1, "privy-modal-close", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], [1, "privy-modal-header"], [1, "privy-modal-icon"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "url(#privy-gradient)", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["id", "privy-gradient", "x1", "0%", "y1", "0%", "x2", "100%", "y2", "100%"], ["offset", "0%", "stop-color", "#8b5cf6"], ["offset", "100%", "stop-color", "#3b82f6"], ["d", "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"], ["d", "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"], [1, "privy-modal-category"], [1, "privy-modal-content"], [1, "privy-detail-group"], [1, "privy-code-block", 3, "click"], ["title", "Copy URL", 1, "privy-copy-btn"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x", "9", "y", "9", "width", "13", "height", "13", "rx", "2", "ry", "2"], ["d", "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"], [1, "privy-detail-row"], ["class", "privy-detail-group", 4, "ngIf"], ["class", "privy-detail-group pricing-group", 4, "ngIf"], [1, "privy-modal-footer"], [1, "privy-btn-primary", 3, "click", "disabled"], ["x1", "5", "y1", "12", "x2", "19", "y2", "12"], ["points", "12 5 19 12 12 19"], [1, "privy-badge"], [1, "privy-badge", "privy-badge-outline"], [1, "privy-detail-group", "pricing-group"], [1, "privy-price-display"], [1, "privy-price-amount"], [1, "privy-price-currency"], [1, "muted"]], template: function SubscriptionPlansComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "billing-required-dialog", 1);
        \u0275\u0275listener("goToBilling", function SubscriptionPlansComponent_Template_billing_required_dialog_goToBilling_0_listener() {
          return ctx.goToBillingDetails();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(1, "plan-change-dialog", 2);
        \u0275\u0275listener("confirm", function SubscriptionPlansComponent_Template_plan_change_dialog_confirm_1_listener() {
          return ctx.confirmPlanChange();
        })("cancel", function SubscriptionPlansComponent_Template_plan_change_dialog_cancel_1_listener() {
          return ctx.cancelPlanChange();
        })("comparePlans", function SubscriptionPlansComponent_Template_plan_change_dialog_comparePlans_1_listener() {
          return ctx.compareDiscountedPlansFromDialog();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(2, SubscriptionPlansComponent_div_2_Template, 7, 4, "div", 3)(3, SubscriptionPlansComponent_div_3_Template, 13, 7, "div", 4)(4, SubscriptionPlansComponent_div_4_Template, 10, 7, "div", 5)(5, SubscriptionPlansComponent_div_5_Template, 41, 8, "div", 6);
      }
      if (rf & 2) {
        \u0275\u0275property("isOpen", ctx.showBillingRequiredModal);
        \u0275\u0275advance();
        \u0275\u0275property("isOpen", ctx.showPlanChangeDialog)("currentPlan", ctx.currentSubscription)("newPlan", ctx.selectedPlanForChange)("allPlans", ctx.plans)("requestsPerMonth", ctx.selectedPlanRequests);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", false);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.uiVersion === "v1");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.uiVersion === "v2");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.selectedFeatureForModal);
      }
    }, dependencies: [
      CommonModule,
      NgForOf,
      NgIf,
      DecimalPipe,
      DatePipe,
      FormsModule,
      NgSelectOption,
      \u0275NgSelectMultipleOption,
      SelectControlValueAccessor,
      NgControlStatus,
      NgModel,
      TranslocoModule,
      TranslocoPipe,
      PlanChangeDialogComponent,
      BillingRequiredDialogComponent,
      MatSnackBarModule
    ], styles: ['/* src/app/modules/subscription-plans/subscription-plans.component.scss */\n.subscription-page {\n  width: 100%;\n  min-height: 100vh;\n  background: #f8fafc;\n  position: relative;\n  overflow: hidden;\n}\n:host-context(.dark) .subscription-page {\n  background: #0f172a;\n}\n.bg-pattern {\n  position: absolute;\n  inset: 0;\n  background-image:\n    radial-gradient(\n      circle at 20% 20%,\n      rgba(99, 102, 241, 0.05) 0%,\n      transparent 50%),\n    radial-gradient(\n      circle at 80% 80%,\n      rgba(139, 92, 246, 0.05) 0%,\n      transparent 50%);\n  pointer-events: none;\n}\n:host-context(.dark) .bg-pattern {\n  background-image:\n    radial-gradient(\n      circle at 20% 20%,\n      rgba(99, 102, 241, 0.15) 0%,\n      transparent 50%),\n    radial-gradient(\n      circle at 80% 80%,\n      rgba(139, 92, 246, 0.15) 0%,\n      transparent 50%);\n}\n.container {\n  position: relative;\n  z-index: 1;\n  width: 100%;\n  max-width: 100%;\n  margin: 0 auto;\n  padding: 40px 24px;\n}\n@media (min-width: 768px) {\n  .container {\n    padding: 48px 48px;\n  }\n}\n@media (min-width: 1280px) {\n  .container {\n    padding: 48px 64px;\n  }\n}\n.header {\n  margin-bottom: 48px;\n}\n.header .badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 16px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(99, 102, 241, 0.1),\n      rgba(139, 92, 246, 0.1));\n  border: 1px solid rgba(99, 102, 241, 0.2);\n  border-radius: 100px;\n  color: #8b5cf6;\n  font-size: 14px;\n  font-weight: 600;\n  margin-bottom: 16px;\n}\n:host-context(.dark) .header .badge {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(99, 102, 241, 0.2),\n      rgba(139, 92, 246, 0.2));\n  border-color: rgba(139, 92, 246, 0.3);\n}\n.header .badge svg {\n  width: 18px;\n  height: 18px;\n}\n.header h1 {\n  font-size: 36px;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 12px;\n  line-height: 1.2;\n}\n:host-context(.dark) .header h1 {\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff 0%,\n      rgba(255, 255, 255, 0.8) 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n@media (min-width: 768px) {\n  .header h1 {\n    font-size: 48px;\n  }\n}\n.header p {\n  font-size: 18px;\n  color: #475569;\n  margin: 0;\n  line-height: 1.6;\n}\n:host-context(.dark) .header p {\n  color: rgba(255, 255, 255, 0.7);\n}\n.current-plan-section {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n@media (min-width: 900px) {\n  .current-plan-section {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 32px;\n    align-items: start;\n  }\n}\n.current-plan-section .features-card.api-prices-card,\n.current-plan-section .api-breakdown-section.api-prices-card {\n  grid-column: 1/-1;\n}\n.current-plan-card {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 20px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05), 0 4px 12px rgba(0, 0, 0, 0.03);\n  padding: 32px;\n  position: relative;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n:host-context(.dark) .current-plan-card {\n  background: rgba(30, 41, 59, 0.8);\n  backdrop-filter: blur(20px);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 20px;\n}\n.current-plan-card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 12px 40px rgba(99, 102, 241, 0.15);\n}\n:host-context(.dark) .current-plan-card:hover {\n  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);\n}\n.current-plan-card .plan-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 6px 14px;\n  background: rgba(16, 185, 129, 0.1);\n  border-radius: 100px;\n  font-size: 13px;\n  font-weight: 600;\n  color: #10b981;\n  margin-bottom: 24px;\n}\n:host-context(.dark) .current-plan-card .plan-badge {\n  background: rgba(16, 185, 129, 0.15);\n}\n.current-plan-card .plan-badge::before {\n  content: "";\n  width: 8px;\n  height: 8px;\n  background: #10b981;\n  border-radius: 50%;\n  box-shadow: 0 0 8px rgba(16, 185, 129, 0.6);\n}\n.current-plan-card .plan-info {\n  margin-bottom: 32px;\n}\n.current-plan-card .plan-info .plan-name {\n  font-size: 28px;\n  font-weight: 700;\n  color: #0f172a;\n  margin-bottom: 8px;\n}\n:host-context(.dark) .current-plan-card .plan-info .plan-name {\n  color: #ffffff;\n}\n.current-plan-card .plan-info .plan-price {\n  display: flex;\n  align-items: baseline;\n  gap: 4px;\n}\n.current-plan-card .plan-info .plan-price .amount {\n  font-size: 48px;\n  font-weight: 800;\n  color: #0f172a;\n  line-height: 1;\n}\n:host-context(.dark) .current-plan-card .plan-info .plan-price .amount {\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff 0%,\n      rgba(255, 255, 255, 0.85) 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.current-plan-card .plan-info .plan-price .period {\n  font-size: 18px;\n  color: #94a3b8;\n  font-weight: 500;\n}\n:host-context(.dark) .current-plan-card .plan-info .plan-price .period {\n  color: rgba(255, 255, 255, 0.4);\n}\n.current-plan-card .plan-meta {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 24px;\n  padding: 24px;\n  background: rgba(99, 102, 241, 0.04);\n  border-radius: 16px;\n  margin-bottom: 28px;\n}\n:host-context(.dark) .current-plan-card .plan-meta {\n  background: rgba(255, 255, 255, 0.03);\n}\n.current-plan-card .plan-meta .meta-item .label {\n  display: block;\n  font-size: 12px;\n  color: #94a3b8;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  margin-bottom: 4px;\n}\n:host-context(.dark) .current-plan-card .plan-meta .meta-item .label {\n  color: rgba(255, 255, 255, 0.4);\n}\n.current-plan-card .plan-meta .meta-item .value {\n  font-size: 14px;\n  font-weight: 600;\n  color: #0f172a;\n}\n:host-context(.dark) .current-plan-card .plan-meta .meta-item .value {\n  color: #ffffff;\n}\n.current-plan-card .plan-meta .meta-item .value.status-active {\n  color: #10b981;\n}\n.current-plan-card .plan-meta .meta-item .value.status-warning {\n  color: #f59e0b;\n}\n.current-plan-card .plan-actions {\n  display: flex;\n  gap: 12px;\n  flex-direction: column;\n}\n@media (min-width: 640px) {\n  .current-plan-card .plan-actions {\n    flex-direction: row;\n  }\n}\n.features-card {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 20px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05), 0 4px 12px rgba(0, 0, 0, 0.03);\n  padding: 28px;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  width: 100%;\n  overflow: hidden;\n}\n:host-context(.dark) .features-card {\n  background: rgba(30, 41, 59, 0.8);\n  backdrop-filter: blur(20px);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 20px;\n}\n.features-card h3 {\n  font-size: 18px;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 20px;\n}\n:host-context(.dark) .features-card h3 {\n  color: #ffffff;\n}\n.features-card .features-grid {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 10px;\n}\n@media (min-width: 480px) {\n  .features-card .features-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.features-card .feature-category-label {\n  grid-column: 1/-1;\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: #94a3b8;\n  margin-top: 12px;\n  margin-bottom: 4px;\n}\n:host-context(.dark) .features-card .feature-category-label {\n  color: rgba(255, 255, 255, 0.4);\n}\n.features-card .feature-category-label:first-child {\n  margin-top: 0;\n}\n.features-card .feature-item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 14px;\n  background: rgba(99, 102, 241, 0.04);\n  border-radius: 10px;\n  font-size: 13px;\n  color: #475569;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  min-width: 0;\n}\n:host-context(.dark) .features-card .feature-item {\n  background: rgba(255, 255, 255, 0.03);\n  color: rgba(255, 255, 255, 0.7);\n}\n.features-card .feature-item:hover {\n  background: rgba(99, 102, 241, 0.08);\n}\n:host-context(.dark) .features-card .feature-item:hover {\n  background: rgba(255, 255, 255, 0.06);\n}\n.features-card .feature-item .check-icon {\n  width: 16px;\n  height: 16px;\n  color: #10b981;\n  flex-shrink: 0;\n}\n.features-card .feature-item span {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.features-card .feature-item .feature-value {\n  margin-left: auto;\n  font-weight: 600;\n  color: #8b5cf6;\n  flex-shrink: 0;\n}\n.features-card .feature-item.cursor-pointer {\n  cursor: pointer;\n}\n.features-card.features-card-fallback .features-included-label {\n  font-size: 12px;\n  font-weight: 600;\n  color: #94a3b8;\n  margin: 0 0 14px;\n  letter-spacing: 0.02em;\n}\n:host-context(.dark) .features-card.features-card-fallback .features-included-label {\n  color: rgba(255, 255, 255, 0.4);\n}\n.features-card.features-card-fallback .included-fallback-card {\n  padding: 18px 18px 16px;\n  border-radius: 16px;\n  border: 1px solid #e2e8f0;\n  background: rgba(248, 250, 252, 0.65);\n}\n:host-context(.dark) .features-card.features-card-fallback .included-fallback-card {\n  border-color: rgba(255, 255, 255, 0.08);\n  background: rgba(255, 255, 255, 0.04);\n}\n.features-card.features-card-fallback .features-fallback-intro {\n  margin: 0 0 14px;\n  font-size: 14px;\n  line-height: 1.55;\n  color: #475569;\n}\n:host-context(.dark) .features-card.features-card-fallback .features-fallback-intro {\n  color: rgba(255, 255, 255, 0.7);\n}\n.features-card.features-card-fallback .included-fallback-rows {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin-bottom: 16px;\n}\n.features-card.features-card-fallback .included-fallback-row {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  font-size: 13px;\n  line-height: 1.45;\n  color: #475569;\n}\n:host-context(.dark) .features-card.features-card-fallback .included-fallback-row {\n  color: rgba(255, 255, 255, 0.7);\n}\n.features-card.features-card-fallback .included-fallback-row span {\n  flex: 1;\n  min-width: 0;\n}\n.features-card.features-card-fallback .included-fallback-check {\n  width: 16px;\n  height: 16px;\n  flex-shrink: 0;\n  margin-top: 2px;\n  color: rgba(16, 185, 129, 0.85);\n}\n:host-context(.dark) .features-card.features-card-fallback .included-fallback-check {\n  color: rgba(52, 211, 153, 0.9);\n}\n.features-card.features-card-fallback .btn-compare-plans-link-inline {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  margin: 0;\n  padding: 6px 0;\n  font-size: 13px;\n  font-weight: 600;\n  color: #6366f1;\n  background: none;\n  border: none;\n  cursor: pointer;\n  text-decoration: none;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n:host-context(.dark) .features-card.features-card-fallback .btn-compare-plans-link-inline {\n  color: #a5b4fc;\n}\n.features-card.features-card-fallback .btn-compare-plans-link-inline:hover {\n  color: #4f46e5;\n  text-decoration: underline;\n  text-underline-offset: 3px;\n}\n:host-context(.dark) .features-card.features-card-fallback .btn-compare-plans-link-inline:hover {\n  color: #c7d2fe;\n}\n.features-card.features-card-fallback .btn-compare-plans-link-inline:focus-visible {\n  outline: 2px solid rgba(99, 102, 241, 0.55);\n  outline-offset: 3px;\n  border-radius: 4px;\n}\n.features-card.features-card-fallback .btn-compare-plans-link-inline .btn-compare-plans-chevron {\n  width: 18px;\n  height: 18px;\n  flex-shrink: 0;\n  opacity: 0.85;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  padding: 14px 28px;\n  border: none;\n  border-radius: 14px;\n  font-size: 15px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  position: relative;\n  overflow: hidden;\n}\n.btn.btn-primary {\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1 0%,\n      #8b5cf6 50%,\n      #a855f7 100%);\n  color: white;\n}\n.btn.btn-primary::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.2) 0%,\n      transparent 50%);\n  opacity: 0;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.btn.btn-primary:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 12px 24px rgba(99, 102, 241, 0.35);\n}\n.btn.btn-primary:hover:not(:disabled)::before {\n  opacity: 1;\n}\n.btn.btn-ghost {\n  background: transparent;\n  border: 1px solid #e2e8f0;\n  color: #0f172a;\n}\n:host-context(.dark) .btn.btn-ghost {\n  border-color: rgba(255, 255, 255, 0.08);\n  color: #ffffff;\n}\n.btn.btn-ghost:hover:not(:disabled) {\n  background: rgba(99, 102, 241, 0.08);\n  border-color: rgba(99, 102, 241, 0.3);\n  color: #8b5cf6;\n}\n.btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn svg {\n  width: 18px;\n  height: 18px;\n}\n.explore-section {\n  display: flex;\n  flex-direction: column;\n  gap: 40px;\n}\n.explore-split {\n  display: grid;\n  grid-template-columns: 300px 1fr;\n  gap: 28px;\n  align-items: start;\n}\n@media (max-width: 1024px) {\n  .explore-split {\n    grid-template-columns: 1fr;\n  }\n}\n.slider-panel {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 20px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05), 0 4px 12px rgba(0, 0, 0, 0.03);\n  padding: 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  position: sticky;\n  top: 24px;\n}\n:host-context(.dark) .slider-panel {\n  background: rgba(30, 41, 59, 0.8);\n  backdrop-filter: blur(20px);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 20px;\n}\n.plans-grid-wrapper {\n  width: 100%;\n}\n.slider-cost-breakdown {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding-top: 4px;\n}\n.slider-cost-breakdown .breakdown-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 8px 10px;\n  border-radius: 10px;\n  background: rgba(99, 102, 241, 0.04);\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n:host-context(.dark) .slider-cost-breakdown .breakdown-row {\n  background: rgba(255, 255, 255, 0.03);\n}\n.slider-cost-breakdown .breakdown-row.breakdown-best {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(16, 185, 129, 0.08),\n      rgba(99, 102, 241, 0.08));\n  border: 1px solid rgba(16, 185, 129, 0.25);\n}\n.slider-cost-breakdown .breakdown-name {\n  font-size: 12px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: #475569;\n  min-width: 50px;\n}\n:host-context(.dark) .slider-cost-breakdown .breakdown-name {\n  color: rgba(255, 255, 255, 0.7);\n}\n.slider-cost-breakdown .breakdown-nums {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 2px;\n}\n.slider-cost-breakdown .breakdown-rate {\n  font-size: 11px;\n  color: #94a3b8;\n}\n:host-context(.dark) .slider-cost-breakdown .breakdown-rate {\n  color: rgba(255, 255, 255, 0.4);\n}\n.slider-cost-breakdown .breakdown-total {\n  font-size: 13px;\n  font-weight: 700;\n  color: #0f172a;\n}\n:host-context(.dark) .slider-cost-breakdown .breakdown-total {\n  color: #ffffff;\n}\n.slider-cost-breakdown .breakdown-best-label {\n  font-size: 10px;\n  font-weight: 700;\n  text-transform: uppercase;\n  color: #10b981;\n  letter-spacing: 0.04em;\n}\n.interval-toggle {\n  display: flex;\n  justify-content: center;\n}\n.interval-toggle .toggle-wrapper {\n  display: inline-flex;\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 20px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05), 0 4px 12px rgba(0, 0, 0, 0.03);\n  padding: 6px;\n}\n:host-context(.dark) .interval-toggle .toggle-wrapper {\n  background: rgba(30, 41, 59, 0.8);\n  backdrop-filter: blur(20px);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 20px;\n}\n.interval-toggle button {\n  position: relative;\n  padding: 12px 32px;\n  font-size: 15px;\n  font-weight: 600;\n  color: #94a3b8;\n  background: transparent;\n  border: none;\n  border-radius: 14px;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n:host-context(.dark) .interval-toggle button {\n  color: rgba(255, 255, 255, 0.4);\n}\n.interval-toggle button.active {\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1 0%,\n      #8b5cf6 50%,\n      #a855f7 100%);\n  color: white;\n  box-shadow: 0 4px 16px rgba(99, 102, 241, 0.3);\n}\n.interval-toggle button:not(.active):hover {\n  color: #0f172a;\n}\n:host-context(.dark) .interval-toggle button:not(.active):hover {\n  color: #ffffff;\n}\n.interval-toggle button .save-badge {\n  position: absolute;\n  top: -6px;\n  right: -6px;\n  padding: 3px 8px;\n  background:\n    linear-gradient(\n      135deg,\n      #10b981 0%,\n      #059669 100%);\n  border-radius: 100px;\n  font-size: 10px;\n  font-weight: 700;\n  color: white;\n  letter-spacing: 0.02em;\n}\n.loading-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 80px 20px;\n}\n.loading-state .spinner {\n  width: 48px;\n  height: 48px;\n  border: 3px solid #e2e8f0;\n  border-top-color: #8b5cf6;\n  border-radius: 50%;\n  animation: spin 0.8s linear infinite;\n}\n:host-context(.dark) .loading-state .spinner {\n  border-color: rgba(255, 255, 255, 0.08);\n  border-top-color: #8b5cf6;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.plans-grid {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 24px;\n  align-items: stretch;\n  padding-top: 16px;\n}\n@media (min-width: 768px) {\n  .plans-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (min-width: 1200px) {\n  .plans-grid {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n.plan-card {\n  position: relative;\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 20px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05), 0 4px 12px rgba(0, 0, 0, 0.03);\n  padding: 32px;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  min-height: 400px;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n:host-context(.dark) .plan-card {\n  background: rgba(30, 41, 59, 0.8);\n  backdrop-filter: blur(20px);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 20px;\n}\n.plan-card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);\n}\n:host-context(.dark) .plan-card:hover {\n  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3);\n}\n.plan-card.popular {\n  border-color: rgba(99, 102, 241, 0.3);\n}\n:host-context(.dark) .plan-card.popular {\n  border-color: rgba(139, 92, 246, 0.3);\n}\n.plan-card.current {\n  background: rgba(99, 102, 241, 0.04);\n  border-color: rgba(99, 102, 241, 0.3);\n}\n:host-context(.dark) .plan-card.current {\n  background: rgba(99, 102, 241, 0.08);\n  border-color: rgba(99, 102, 241, 0.3);\n}\n.plan-card .popular-badge {\n  position: absolute;\n  top: -12px;\n  left: 50%;\n  transform: translateX(-50%);\n  padding: 6px 16px;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1 0%,\n      #8b5cf6 50%,\n      #a855f7 100%);\n  border-radius: 100px;\n  font-size: 11px;\n  font-weight: 700;\n  color: white;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);\n  white-space: nowrap;\n}\n.plan-card .plan-card-header {\n  margin-bottom: 24px;\n}\n.plan-card .plan-card-header h3 {\n  font-size: 24px;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 4px;\n}\n:host-context(.dark) .plan-card .plan-card-header h3 {\n  color: #ffffff;\n}\n.plan-card .plan-card-header .plan-description {\n  font-size: 14px;\n  color: #94a3b8;\n  margin: 0;\n}\n:host-context(.dark) .plan-card .plan-card-header .plan-description {\n  color: rgba(255, 255, 255, 0.4);\n}\n.plan-card .plan-card-pricing {\n  margin-bottom: 24px;\n}\n.plan-card .plan-card-pricing .price-display {\n  display: flex;\n  align-items: baseline;\n  gap: 2px;\n}\n.plan-card .plan-card-pricing .price-display .currency {\n  font-size: 24px;\n  font-weight: 600;\n  color: #0f172a;\n}\n:host-context(.dark) .plan-card .plan-card-pricing .price-display .currency {\n  color: #ffffff;\n}\n.plan-card .plan-card-pricing .price-display .price-amount {\n  font-size: 56px;\n  font-weight: 800;\n  color: #0f172a;\n  line-height: 1;\n  letter-spacing: -0.02em;\n}\n:host-context(.dark) .plan-card .plan-card-pricing .price-display .price-amount {\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff 0%,\n      rgba(255, 255, 255, 0.85) 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.plan-card .plan-card-pricing .price-display .price-period {\n  font-size: 16px;\n  color: #94a3b8;\n  margin-left: 4px;\n}\n:host-context(.dark) .plan-card .plan-card-pricing .price-display .price-period {\n  color: rgba(255, 255, 255, 0.4);\n}\n.plan-card .plan-card-pricing .price-display .price-label {\n  font-size: 28px;\n  font-weight: 700;\n  color: #0f172a;\n}\n:host-context(.dark) .plan-card .plan-card-pricing .price-display .price-label {\n  color: #ffffff;\n}\n.plan-card .plan-card-pricing .price-note {\n  font-size: 13px;\n  color: #94a3b8;\n  margin: 8px 0 0;\n}\n:host-context(.dark) .plan-card .plan-card-pricing .price-note {\n  color: rgba(255, 255, 255, 0.4);\n}\n.plan-card .plan-card-pricing.price-muted .price-amount {\n  font-size: 24px !important;\n  color: #94a3b8 !important;\n}\n.plan-card .plan-card-pricing.price-muted .currency {\n  font-size: 16px !important;\n  color: #94a3b8 !important;\n}\n.plan-card .plan-card-pricing.price-muted .price-period {\n  color: #94a3b8 !important;\n}\n:host-context(.dark) .plan-card .plan-card-pricing.price-muted .price-amount,\n:host-context(.dark) .plan-card .plan-card-pricing.price-muted .currency,\n:host-context(.dark) .plan-card .plan-card-pricing.price-muted .price-period {\n  color: rgba(255, 255, 255, 0.4) !important;\n}\n.plan-card .plan-addon-line {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 14px;\n  margin-top: 6px;\n}\n.plan-card .plan-addon-line .addon-plus {\n  font-weight: 700;\n  color: #10b981;\n}\n.plan-card .plan-addon-line .addon-amount {\n  font-weight: 700;\n  color: #10b981;\n}\n.plan-card .plan-addon-line .addon-label {\n  font-size: 12px;\n  color: #94a3b8;\n}\n:host-context(.dark) .plan-card .plan-addon-line .addon-label {\n  color: rgba(255, 255, 255, 0.4);\n}\n.plan-card .plan-estimated-total {\n  margin-top: 10px;\n  padding-top: 10px;\n  border-top: 1px solid #e2e8f0;\n}\n:host-context(.dark) .plan-card .plan-estimated-total {\n  border-color: rgba(255, 255, 255, 0.08);\n}\n.plan-card .plan-estimated-total .total-label {\n  display: block;\n  font-size: 11px;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: #94a3b8;\n  margin-bottom: 4px;\n}\n:host-context(.dark) .plan-card .plan-estimated-total .total-label {\n  color: rgba(255, 255, 255, 0.4);\n}\n.plan-card .plan-estimated-total .total-amount {\n  display: flex;\n  align-items: baseline;\n  gap: 2px;\n}\n.plan-card .plan-estimated-total .total-currency {\n  font-size: 20px;\n  font-weight: 600;\n  color: #0f172a;\n}\n:host-context(.dark) .plan-card .plan-estimated-total .total-currency {\n  color: #ffffff;\n}\n.plan-card .plan-estimated-total .total-number {\n  font-size: 36px;\n  font-weight: 800;\n  color: #0f172a;\n  line-height: 1;\n  letter-spacing: -0.02em;\n}\n:host-context(.dark) .plan-card .plan-estimated-total .total-number {\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff,\n      rgba(255, 255, 255, 0.85));\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.plan-card .plan-estimated-total .total-period {\n  font-size: 14px;\n  color: #94a3b8;\n  margin-left: 2px;\n}\n:host-context(.dark) .plan-card .plan-estimated-total .total-period {\n  color: rgba(255, 255, 255, 0.4);\n}\n.plan-card .plan-discount-chip {\n  display: inline-flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 4px 6px;\n  padding: 6px 12px;\n  margin-bottom: auto;\n  background: rgba(16, 185, 129, 0.08);\n  border-radius: 8px;\n  font-size: 13px;\n}\n:host-context(.dark) .plan-card .plan-discount-chip {\n  background: rgba(16, 185, 129, 0.12);\n}\n.plan-card .plan-discount-chip .discount-chip-value {\n  font-weight: 600;\n  color: #059669;\n}\n:host-context(.dark) .plan-card .plan-discount-chip .discount-chip-value {\n  color: #34d399;\n}\n.plan-card .plan-discount-chip .discount-chip-context {\n  color: #94a3b8;\n  font-size: 12px;\n}\n:host-context(.dark) .plan-card .plan-discount-chip .discount-chip-context {\n  color: rgba(255, 255, 255, 0.4);\n}\n.plan-card .plan-card-btn {\n  width: 100%;\n  padding: 16px 24px;\n  font-size: 15px;\n  font-weight: 600;\n  border-radius: 14px;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  border: none;\n}\n.plan-card .plan-card-btn.btn-primary {\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1 0%,\n      #8b5cf6 50%,\n      #a855f7 100%);\n  color: white;\n}\n.plan-card .plan-card-btn.btn-primary:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(99, 102, 241, 0.4);\n}\n.plan-card .plan-card-btn.btn-secondary {\n  background: rgba(99, 102, 241, 0.08);\n  color: #8b5cf6;\n  border: 1px solid rgba(99, 102, 241, 0.2);\n}\n:host-context(.dark) .plan-card .plan-card-btn.btn-secondary {\n  background: rgba(99, 102, 241, 0.15);\n  border-color: rgba(99, 102, 241, 0.3);\n}\n.plan-card .plan-card-btn.btn-secondary:hover:not(:disabled) {\n  background: rgba(99, 102, 241, 0.15);\n  border-color: rgba(99, 102, 241, 0.4);\n}\n.plan-card .plan-card-btn.btn-outline {\n  background: transparent;\n  color: #0f172a;\n  border: 1px solid #e2e8f0;\n}\n:host-context(.dark) .plan-card .plan-card-btn.btn-outline {\n  color: #ffffff;\n  border-color: rgba(255, 255, 255, 0.08);\n}\n.plan-card .plan-card-btn.btn-outline:hover:not(:disabled) {\n  background: rgba(99, 102, 241, 0.08);\n  border-color: rgba(99, 102, 241, 0.3);\n}\n.plan-card .plan-card-btn.btn-current {\n  background: rgba(16, 185, 129, 0.1);\n  color: #10b981;\n  border: 1px solid rgba(16, 185, 129, 0.2);\n  cursor: default;\n}\n:host-context(.dark) .plan-card .plan-card-btn.btn-current {\n  background: rgba(16, 185, 129, 0.15);\n  border-color: rgba(16, 185, 129, 0.3);\n}\n.plan-card .plan-card-btn:disabled:not(.btn-current) {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.back-nav {\n  display: flex;\n  justify-content: center;\n}\n.back-nav .btn-link {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 24px;\n  font-size: 14px;\n  font-weight: 600;\n  color: #94a3b8;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n:host-context(.dark) .back-nav .btn-link {\n  color: rgba(255, 255, 255, 0.4);\n}\n.back-nav .btn-link:hover {\n  color: #8b5cf6;\n}\n.back-nav .btn-link svg {\n  width: 18px;\n  height: 18px;\n}\n@media (max-width: 640px) {\n  .current-plan-card {\n    padding: 24px;\n  }\n  .current-plan-card .plan-info .plan-price .amount {\n    font-size: 36px;\n  }\n  .current-plan-card .plan-meta {\n    grid-template-columns: 1fr;\n    gap: 16px;\n  }\n  .plan-card .plan-card-pricing .price-display .price-amount {\n    font-size: 42px;\n  }\n  .interval-toggle button {\n    padding: 10px 20px;\n    font-size: 14px;\n  }\n}\n.slider-section {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 20px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05), 0 4px 12px rgba(0, 0, 0, 0.03);\n  padding: 28px 32px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n:host-context(.dark) .slider-section {\n  background: rgba(30, 41, 59, 0.8);\n  backdrop-filter: blur(20px);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 20px;\n}\n.slider-header {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.slider-label-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n.slider-label-row .slider-label {\n  font-size: 16px;\n  font-weight: 600;\n  color: #0f172a;\n}\n:host-context(.dark) .slider-label-row .slider-label {\n  color: #ffffff;\n}\n.slider-label-row .slider-value-pill {\n  padding: 6px 14px;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1 0%,\n      #8b5cf6 50%,\n      #a855f7 100%);\n  border-radius: 100px;\n  font-size: 14px;\n  font-weight: 700;\n  color: white;\n  white-space: nowrap;\n}\n.slider-hint {\n  font-size: 13px;\n  color: #94a3b8;\n  margin: 0;\n}\n:host-context(.dark) .slider-hint {\n  color: rgba(255, 255, 255, 0.4);\n}\n.slider-track-wrapper {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  overflow: visible;\n  padding: 12px 0;\n}\n.slider-input {\n  width: 100%;\n  height: 6px;\n  appearance: none;\n  -webkit-appearance: none;\n  border-radius: 100px;\n  cursor: pointer;\n  outline: none;\n  display: block;\n}\n.slider-input::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  width: 22px;\n  height: 22px;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1 0%,\n      #8b5cf6 50%,\n      #a855f7 100%);\n  border-radius: 50%;\n  box-shadow: 0 2px 8px rgba(99, 102, 241, 0.4);\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.slider-input::-webkit-slider-thumb:hover {\n  transform: scale(1.15);\n  box-shadow: 0 4px 16px rgba(99, 102, 241, 0.5);\n}\n.slider-input::-moz-range-thumb {\n  width: 22px;\n  height: 22px;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1 0%,\n      #8b5cf6 50%,\n      #a855f7 100%);\n  border-radius: 50%;\n  border: none;\n  box-shadow: 0 2px 8px rgba(99, 102, 241, 0.4);\n  cursor: pointer;\n}\n.slider-ticks {\n  display: flex;\n  justify-content: space-between;\n  padding: 0 2px;\n}\n.slider-ticks span {\n  font-size: 11px;\n  color: #94a3b8;\n  font-weight: 500;\n}\n:host-context(.dark) .slider-ticks span {\n  color: rgba(255, 255, 255, 0.4);\n}\n.plan-cost-chips {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n@media (min-width: 640px) {\n  .plan-cost-chips {\n    flex-wrap: nowrap;\n  }\n}\n.plan-cost-chip {\n  flex: 1;\n  min-width: 0;\n  padding: 16px 18px;\n  border-radius: 16px;\n  background: rgba(99, 102, 241, 0.04);\n  border: 1px solid #e2e8f0;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  position: relative;\n  overflow: hidden;\n}\n:host-context(.dark) .plan-cost-chip {\n  background: rgba(255, 255, 255, 0.03);\n  border-color: rgba(255, 255, 255, 0.08);\n}\n.plan-cost-chip.best-value {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(16, 185, 129, 0.08) 0%,\n      rgba(99, 102, 241, 0.08) 100%);\n  border-color: rgba(16, 185, 129, 0.3);\n}\n:host-context(.dark) .plan-cost-chip.best-value {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(16, 185, 129, 0.12) 0%,\n      rgba(99, 102, 241, 0.12) 100%);\n  border-color: rgba(16, 185, 129, 0.4);\n}\n.plan-cost-chip.best-value .chip-plan-name {\n  color: #10b981;\n}\n.plan-cost-chip .chip-plan-name {\n  font-size: 13px;\n  font-weight: 700;\n  color: #0f172a;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n:host-context(.dark) .plan-cost-chip .chip-plan-name {\n  color: #ffffff;\n}\n.plan-cost-chip .chip-cost-per-req {\n  font-size: 16px;\n  font-weight: 700;\n  color: #0f172a;\n}\n:host-context(.dark) .plan-cost-chip .chip-cost-per-req {\n  color: #ffffff;\n}\n.plan-cost-chip .chip-cost-per-req span {\n  font-size: 12px;\n  font-weight: 500;\n  color: #94a3b8;\n}\n:host-context(.dark) .plan-cost-chip .chip-cost-per-req span {\n  color: rgba(255, 255, 255, 0.4);\n}\n.plan-cost-chip .chip-monthly-spend {\n  font-size: 13px;\n  color: #475569;\n}\n:host-context(.dark) .plan-cost-chip .chip-monthly-spend {\n  color: rgba(255, 255, 255, 0.7);\n}\n.plan-cost-chip .chip-monthly-spend span {\n  font-size: 11px;\n  color: #94a3b8;\n}\n:host-context(.dark) .plan-cost-chip .chip-monthly-spend span {\n  color: rgba(255, 255, 255, 0.4);\n}\n.plan-cost-chip .chip-best-value-label {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11px;\n  font-weight: 700;\n  color: #10b981;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  margin-top: 6px;\n}\n.plan-cost-chip .chip-best-value-label svg {\n  width: 13px;\n  height: 13px;\n}\n.slider-actions {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 16px;\n}\n.btn-api-breakdown {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 8px 12px;\n  font-size: 13px;\n  font-weight: 600;\n  border-radius: 10px;\n  cursor: pointer;\n  background: transparent;\n  color: #8b5cf6;\n  border: none;\n  text-decoration: none;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n:host-context(.dark) .btn-api-breakdown {\n  color: #8b5cf6;\n}\n.btn-api-breakdown:hover:not(:disabled) {\n  text-decoration: underline;\n  color: rgb(111.4837209302, 53.3348837209, 243.8651162791);\n}\n:host-context(.dark) .btn-api-breakdown:hover:not(:disabled) {\n  color: rgb(180.2744186047, 149.9976744186, 249.2023255814);\n}\n.api-breakdown-section {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 20px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05), 0 4px 12px rgba(0, 0, 0, 0.03);\n  padding: 28px 32px;\n  margin-top: 24px;\n}\n:host-context(.dark) .api-breakdown-section {\n  background: rgba(30, 41, 59, 0.8);\n  backdrop-filter: blur(20px);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 20px;\n}\n.api-breakdown-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.api-breakdown-header h3 {\n  font-size: 18px;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n}\n:host-context(.dark) .api-breakdown-header h3 {\n  color: #ffffff;\n}\n.api-breakdown-header .btn-sm {\n  padding: 8px 16px;\n  font-size: 13px;\n}\n.api-breakdown-empty {\n  padding: 32px;\n  text-align: center;\n  color: #94a3b8;\n  font-size: 14px;\n}\n:host-context(.dark) .api-breakdown-empty {\n  color: rgba(255, 255, 255, 0.4);\n}\n.api-breakdown-table-wrapper {\n  overflow-x: auto;\n}\n.api-breakdown-filters {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  align-items: center;\n  margin-bottom: 16px;\n}\n.api-breakdown-filter-select {\n  padding: 10px 14px;\n  font-size: 14px;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  background: #ffffff;\n  color: #0f172a;\n  min-width: 160px;\n}\n:host-context(.dark) .api-breakdown-filter-select {\n  border-color: rgba(255, 255, 255, 0.08);\n  background: #1e293b;\n  color: #ffffff;\n}\n.api-breakdown-search-input {\n  width: 100%;\n  max-width: 400px;\n  flex: 1;\n  min-width: 200px;\n  padding: 10px 14px;\n  font-size: 14px;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  background: #ffffff;\n  color: #0f172a;\n}\n.api-breakdown-search-input::placeholder {\n  color: #94a3b8;\n}\n:host-context(.dark) .api-breakdown-search-input {\n  border-color: rgba(255, 255, 255, 0.08);\n  background: #1e293b;\n  color: #ffffff;\n}\n:host-context(.dark) .api-breakdown-search-input::placeholder {\n  color: rgba(255, 255, 255, 0.4);\n}\n.api-breakdown-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 14px;\n}\n.api-breakdown-table th,\n.api-breakdown-table td {\n  padding: 12px 16px;\n  text-align: left;\n  border-bottom: 1px solid #e2e8f0;\n}\n:host-context(.dark) .api-breakdown-table th,\n:host-context(.dark) .api-breakdown-table td {\n  border-color: rgba(255, 255, 255, 0.08);\n}\n.api-breakdown-table th {\n  font-weight: 600;\n  color: #475569;\n}\n:host-context(.dark) .api-breakdown-table th {\n  color: rgba(255, 255, 255, 0.7);\n}\n.api-breakdown-table td {\n  color: #0f172a;\n}\n:host-context(.dark) .api-breakdown-table td {\n  color: #ffffff;\n}\n.api-breakdown-table tbody tr:not(.api-breakdown-category-row):hover {\n  background: rgba(99, 102, 241, 0.04);\n}\n:host-context(.dark) .api-breakdown-table tbody tr:not(.api-breakdown-category-row):hover {\n  background: rgba(255, 255, 255, 0.04);\n}\n.api-breakdown-table tbody tr.cursor-pointer {\n  cursor: pointer;\n}\n.api-breakdown-table .api-breakdown-category-row {\n  background: rgba(99, 102, 241, 0.08);\n  font-weight: 600;\n  font-size: 13px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.api-breakdown-table .api-breakdown-category-row td {\n  padding: 10px 16px;\n  border-bottom: 1px solid #e2e8f0;\n}\n:host-context(.dark) .api-breakdown-table .api-breakdown-category-row {\n  background: rgba(255, 255, 255, 0.06);\n}\n:host-context(.dark) .api-breakdown-table .api-breakdown-category-row td {\n  border-color: rgba(255, 255, 255, 0.08);\n}\n.api-breakdown-footer {\n  margin-top: 20px;\n  padding-top: 16px;\n  border-top: 1px solid #e2e8f0;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 8px 20px;\n  font-size: 14px;\n}\n:host-context(.dark) .api-breakdown-footer {\n  border-color: rgba(255, 255, 255, 0.08);\n}\n.api-breakdown-footer .footer-label {\n  font-weight: 600;\n  color: #0f172a;\n}\n:host-context(.dark) .api-breakdown-footer .footer-label {\n  color: #ffffff;\n}\n.api-breakdown-footer .footer-plan {\n  color: #475569;\n}\n:host-context(.dark) .api-breakdown-footer .footer-plan {\n  color: rgba(255, 255, 255, 0.7);\n}\n.plan-card.best-value-card {\n  border-color: rgba(16, 185, 129, 0.35);\n  box-shadow: 0 0 0 2px rgba(16, 185, 129, 0.15);\n}\n:host-context(.dark) .plan-card.best-value-card {\n  border-color: rgba(16, 185, 129, 0.4);\n  box-shadow: 0 0 0 2px rgba(16, 185, 129, 0.2);\n}\n.best-value-badge {\n  position: absolute;\n  top: -12px;\n  left: 50%;\n  transform: translateX(-50%);\n  padding: 6px 16px;\n  background:\n    linear-gradient(\n      135deg,\n      #10b981 0%,\n      #059669 100%);\n  border-radius: 100px;\n  font-size: 11px;\n  font-weight: 700;\n  color: white;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);\n  white-space: nowrap;\n}\n.ui-version-toggle {\n  position: fixed;\n  bottom: 24px;\n  right: 24px;\n  z-index: 9999;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 12px;\n  background: rgba(0, 0, 0, 0.8);\n  backdrop-filter: blur(10px);\n  border-radius: 12px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);\n}\n.ui-version-toggle .toggle-label {\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.6);\n  font-weight: 500;\n}\n.ui-version-toggle .version-btn {\n  padding: 6px 12px;\n  font-size: 12px;\n  font-weight: 600;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.2s;\n  background: transparent;\n  color: rgba(255, 255, 255, 0.6);\n}\n.ui-version-toggle .version-btn:hover {\n  color: white;\n}\n.ui-version-toggle .version-btn.active {\n  background: #6366f1;\n  color: white;\n}\n.subscription-page-v2 {\n  min-height: 100vh;\n  background: #fafafa;\n  padding: 48px 24px;\n}\n:host-context(.dark) .subscription-page-v2 {\n  background: #0a0a0a;\n}\n.v2-container {\n  max-width: 960px;\n  margin: 0 auto;\n}\n.v2-header {\n  text-align: center;\n  margin-bottom: 48px;\n}\n.v2-header h1 {\n  font-size: 32px;\n  font-weight: 600;\n  color: #111;\n  margin: 0 0 8px;\n  letter-spacing: -0.02em;\n}\n:host-context(.dark) .v2-header h1 {\n  color: #fff;\n}\n.v2-header p {\n  font-size: 16px;\n  color: #666;\n  margin: 0;\n}\n:host-context(.dark) .v2-header p {\n  color: #888;\n}\n.v2-current-banner {\n  margin-bottom: 48px;\n  padding: 24px;\n  background: #fff;\n  border: 1px solid #e5e5e5;\n  border-radius: 12px;\n}\n:host-context(.dark) .v2-current-banner {\n  background: #141414;\n  border-color: #262626;\n}\n.v2-current-banner .banner-content {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n.v2-current-banner .banner-info {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.v2-current-banner .banner-info .current-label {\n  font-size: 12px;\n  font-weight: 500;\n  color: #10b981;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.v2-current-banner .banner-info .plan-name {\n  font-size: 18px;\n  font-weight: 600;\n  color: #111;\n}\n:host-context(.dark) .v2-current-banner .banner-info .plan-name {\n  color: #fff;\n}\n.v2-current-banner .banner-info .plan-price {\n  font-size: 14px;\n  color: #666;\n}\n:host-context(.dark) .v2-current-banner .banner-info .plan-price {\n  color: #888;\n}\n.v2-current-banner .banner-actions {\n  display: flex;\n  gap: 8px;\n}\n.v2-btn {\n  padding: 10px 20px;\n  font-size: 14px;\n  font-weight: 500;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.v2-btn.v2-btn-primary {\n  background: #111;\n  color: #fff;\n  border: none;\n}\n:host-context(.dark) .v2-btn.v2-btn-primary {\n  background: #fff;\n  color: #111;\n}\n.v2-btn.v2-btn-primary:hover {\n  opacity: 0.9;\n}\n.v2-btn.v2-btn-outline {\n  background: transparent;\n  color: #111;\n  border: 1px solid #e5e5e5;\n}\n:host-context(.dark) .v2-btn.v2-btn-outline {\n  color: #fff;\n  border-color: #333;\n}\n.v2-btn.v2-btn-outline:hover {\n  background: #f5f5f5;\n}\n:host-context(.dark) .v2-btn.v2-btn-outline:hover {\n  background: #1a1a1a;\n}\n.v2-interval-toggle {\n  display: flex;\n  justify-content: center;\n  gap: 4px;\n  margin-bottom: 40px;\n  padding: 4px;\n  background: #f0f0f0;\n  border-radius: 10px;\n  width: fit-content;\n  margin-left: auto;\n  margin-right: auto;\n}\n:host-context(.dark) .v2-interval-toggle {\n  background: #1a1a1a;\n}\n.v2-interval-toggle button {\n  position: relative;\n  padding: 10px 24px;\n  font-size: 14px;\n  font-weight: 500;\n  color: #666;\n  background: transparent;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n:host-context(.dark) .v2-interval-toggle button {\n  color: #888;\n}\n.v2-interval-toggle button.active {\n  background: #fff;\n  color: #111;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n:host-context(.dark) .v2-interval-toggle button.active {\n  background: #262626;\n  color: #fff;\n}\n.v2-interval-toggle button .save-tag {\n  position: absolute;\n  top: -8px;\n  right: -8px;\n  padding: 2px 6px;\n  font-size: 10px;\n  font-weight: 600;\n  color: #fff;\n  background: #10b981;\n  border-radius: 4px;\n}\n.v2-loading {\n  display: flex;\n  justify-content: center;\n  padding: 80px;\n}\n.v2-loading .v2-spinner {\n  width: 32px;\n  height: 32px;\n  border: 2px solid #e5e5e5;\n  border-top-color: #111;\n  border-radius: 50%;\n  animation: spin 0.6s linear infinite;\n}\n:host-context(.dark) .v2-loading .v2-spinner {\n  border-color: #333;\n  border-top-color: #fff;\n}\n.v2-plans-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.v2-plan-card {\n  position: relative;\n  padding: 24px;\n  background: #fff;\n  border: 1px solid #e5e5e5;\n  border-radius: 12px;\n  transition: all 0.15s;\n}\n:host-context(.dark) .v2-plan-card {\n  background: #141414;\n  border-color: #262626;\n}\n.v2-plan-card:hover {\n  border-color: #d0d0d0;\n}\n:host-context(.dark) .v2-plan-card:hover {\n  border-color: #333;\n}\n.v2-plan-card.recommended {\n  border-color: #111;\n}\n:host-context(.dark) .v2-plan-card.recommended {\n  border-color: #fff;\n}\n.v2-plan-card.current {\n  background: #f9fafb;\n  border-color: #10b981;\n}\n:host-context(.dark) .v2-plan-card.current {\n  background: #0f1f1a;\n  border-color: #10b981;\n}\n.v2-plan-card .v2-card-badge {\n  position: absolute;\n  top: -10px;\n  left: 50%;\n  transform: translateX(-50%);\n  padding: 4px 12px;\n  font-size: 11px;\n  font-weight: 600;\n  color: #fff;\n  background: #111;\n  border-radius: 4px;\n}\n:host-context(.dark) .v2-plan-card .v2-card-badge {\n  background: #fff;\n  color: #111;\n}\n.v2-plan-card .v2-card-header {\n  margin-bottom: 20px;\n}\n.v2-plan-card .v2-card-header h3 {\n  font-size: 18px;\n  font-weight: 600;\n  color: #111;\n  margin: 0 0 8px;\n}\n:host-context(.dark) .v2-plan-card .v2-card-header h3 {\n  color: #fff;\n}\n.v2-plan-card .v2-card-header .v2-price .amount {\n  font-size: 32px;\n  font-weight: 700;\n  color: #111;\n}\n:host-context(.dark) .v2-plan-card .v2-card-header .v2-price .amount {\n  color: #fff;\n}\n.v2-plan-card .v2-card-header .v2-price .period {\n  font-size: 14px;\n  color: #666;\n}\n:host-context(.dark) .v2-plan-card .v2-card-header .v2-price .period {\n  color: #888;\n}\n.v2-plan-card .v2-card-header .v2-price .amount-text {\n  font-size: 16px;\n  font-weight: 500;\n  color: #666;\n}\n:host-context(.dark) .v2-plan-card .v2-card-header .v2-price .amount-text {\n  color: #888;\n}\n.v2-plan-card .v2-card-discount {\n  display: inline-flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 4px 6px;\n  padding: 6px 12px;\n  margin-bottom: 16px;\n  background: rgba(16, 185, 129, 0.1);\n  border-radius: 6px;\n  font-size: 13px;\n}\n:host-context(.dark) .v2-plan-card .v2-card-discount {\n  background: rgba(16, 185, 129, 0.15);\n}\n.v2-plan-card .v2-card-discount .discount-value {\n  font-weight: 600;\n  color: #059669;\n}\n:host-context(.dark) .v2-plan-card .v2-card-discount .discount-value {\n  color: #34d399;\n}\n.v2-plan-card .v2-card-discount .discount-context {\n  font-size: 12px;\n  color: #64748b;\n}\n:host-context(.dark) .v2-plan-card .v2-card-discount .discount-context {\n  color: #94a3b8;\n}\n.v2-plan-card .v2-card-btn {\n  width: 100%;\n  padding: 12px;\n  font-size: 14px;\n  font-weight: 500;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.15s;\n  background: #111;\n  color: #fff;\n  border: none;\n}\n:host-context(.dark) .v2-plan-card .v2-card-btn {\n  background: #fff;\n  color: #111;\n}\n.v2-plan-card .v2-card-btn:hover:not(:disabled) {\n  opacity: 0.9;\n}\n.v2-plan-card .v2-card-btn.current {\n  background: #f0fdf4;\n  color: #10b981;\n  cursor: default;\n}\n:host-context(.dark) .v2-plan-card .v2-card-btn.current {\n  background: #052e1f;\n  color: #10b981;\n}\n.v2-plan-card .v2-card-btn:disabled:not(.current) {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.v2-back-link {\n  display: flex;\n  justify-content: center;\n  margin-top: 32px;\n}\n.v2-back-link button {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 16px;\n  font-size: 14px;\n  color: #666;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n:host-context(.dark) .v2-back-link button {\n  color: #888;\n}\n.v2-back-link button:hover {\n  color: #111;\n}\n:host-context(.dark) .v2-back-link button:hover {\n  color: #fff;\n}\n.v2-back-link button svg {\n  width: 16px;\n}\n@keyframes scaleIn {\n  from {\n    opacity: 0;\n    transform: scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n.privy-modal-backdrop {\n  position: fixed;\n  inset: 0;\n  z-index: 9999;\n  background: rgba(15, 23, 42, 0.4);\n  backdrop-filter: blur(8px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 24px;\n  animation: fadeIn 0.2s ease-out;\n}\n:host-context(.dark) .privy-modal-backdrop {\n  background: rgba(15, 23, 42, 0.6);\n}\n.privy-modal-container {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 20px;\n  width: 100%;\n  max-width: 440px;\n  padding: 32px;\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);\n  position: relative;\n  animation: slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);\n}\n:host-context(.dark) .privy-modal-container {\n  background: #1e293b;\n  border-color: rgba(255, 255, 255, 0.08);\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);\n}\n.privy-modal-close {\n  position: absolute;\n  top: 16px;\n  right: 16px;\n  background: transparent;\n  border: none;\n  color: #94a3b8;\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n:host-context(.dark) .privy-modal-close {\n  color: rgba(255, 255, 255, 0.4);\n}\n.privy-modal-close:hover {\n  background: rgba(15, 23, 42, 0.05);\n  color: #0f172a;\n}\n:host-context(.dark) .privy-modal-close:hover {\n  background: rgba(255, 255, 255, 0.1);\n  color: #ffffff;\n}\n.privy-modal-close svg {\n  width: 20px;\n  height: 20px;\n}\n.privy-modal-header {\n  text-align: center;\n  margin-bottom: 32px;\n}\n.privy-modal-header .privy-modal-icon {\n  width: 56px;\n  height: 56px;\n  margin: 0 auto 20px;\n  background: rgba(139, 92, 246, 0.1);\n  border-radius: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.privy-modal-header .privy-modal-icon svg {\n  width: 28px;\n  height: 28px;\n}\n.privy-modal-header h2 {\n  font-size: 20px;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 4px;\n  line-height: 1.3;\n}\n:host-context(.dark) .privy-modal-header h2 {\n  color: #ffffff;\n}\n.privy-modal-header .privy-modal-category {\n  font-size: 14px;\n  font-weight: 500;\n  color: #475569;\n  margin: 0;\n}\n:host-context(.dark) .privy-modal-header .privy-modal-category {\n  color: rgba(255, 255, 255, 0.7);\n}\n.privy-modal-content {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  margin-bottom: 32px;\n}\n.privy-detail-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n.privy-detail-group label {\n  display: block;\n  font-size: 13px;\n  font-weight: 600;\n  color: #475569;\n  margin-bottom: 8px;\n}\n:host-context(.dark) .privy-detail-group label {\n  color: rgba(255, 255, 255, 0.7);\n}\n.privy-detail-group .privy-code-block {\n  background: rgba(15, 23, 42, 0.04);\n  border: 1px solid rgba(15, 23, 42, 0.08);\n  border-radius: 12px;\n  padding: 12px 16px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n:host-context(.dark) .privy-detail-group .privy-code-block {\n  background: rgba(255, 255, 255, 0.03);\n  border-color: rgba(255, 255, 255, 0.08);\n}\n.privy-detail-group .privy-code-block:hover {\n  background: rgba(15, 23, 42, 0.06);\n  border-color: rgba(15, 23, 42, 0.12);\n}\n:host-context(.dark) .privy-detail-group .privy-code-block:hover {\n  background: rgba(255, 255, 255, 0.06);\n  border-color: rgba(255, 255, 255, 0.12);\n}\n.privy-detail-group .privy-code-block:hover .privy-copy-btn {\n  color: #8b5cf6;\n}\n.privy-detail-group .privy-code-block span {\n  font-size: 13px;\n  font-family:\n    ui-monospace,\n    SFMono-Regular,\n    Menlo,\n    Monaco,\n    Consolas,\n    monospace;\n  color: #0f172a;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n:host-context(.dark) .privy-detail-group .privy-code-block span {\n  color: #ffffff;\n}\n.privy-detail-group .privy-copy-btn {\n  background: transparent;\n  border: none;\n  color: #94a3b8;\n  cursor: pointer;\n  flex-shrink: 0;\n  padding: 4px;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n:host-context(.dark) .privy-detail-group .privy-copy-btn {\n  color: rgba(255, 255, 255, 0.4);\n}\n.privy-detail-group .privy-copy-btn svg {\n  width: 16px;\n  height: 16px;\n}\n.privy-detail-group .privy-badge {\n  display: inline-flex;\n  padding: 8px 12px;\n  background: rgba(99, 102, 241, 0.08);\n  color: #8b5cf6;\n  border-radius: 10px;\n  font-size: 13px;\n  font-weight: 600;\n}\n:host-context(.dark) .privy-detail-group .privy-badge {\n  background: rgba(99, 102, 241, 0.15);\n}\n.privy-detail-group .privy-badge.privy-badge-outline {\n  background: transparent;\n  border: 1px solid #e2e8f0;\n  color: #475569;\n}\n:host-context(.dark) .privy-detail-group .privy-badge.privy-badge-outline {\n  border-color: rgba(255, 255, 255, 0.08);\n  color: rgba(255, 255, 255, 0.7);\n}\n.pricing-group {\n  margin-top: 4px;\n  padding-top: 24px;\n  border-top: 1px solid #e2e8f0;\n}\n:host-context(.dark) .pricing-group {\n  border-color: rgba(255, 255, 255, 0.08);\n}\n.privy-price-display {\n  display: flex;\n  align-items: baseline;\n  gap: 6px;\n}\n.privy-price-display .privy-price-amount {\n  font-size: 32px;\n  font-weight: 800;\n  color: #0f172a;\n  line-height: 1;\n}\n:host-context(.dark) .privy-price-display .privy-price-amount {\n  color: #ffffff;\n}\n.privy-price-display .privy-price-currency {\n  font-size: 12px;\n  font-weight: 700;\n  color: #8b5cf6;\n}\n.privy-price-display .privy-price-currency .muted {\n  color: #94a3b8;\n  font-weight: 500;\n}\n:host-context(.dark) .privy-price-display .privy-price-currency .muted {\n  color: rgba(255, 255, 255, 0.4);\n}\n.privy-modal-footer .privy-btn-primary {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 16px;\n  background: #0f172a;\n  color: #ffffff;\n  border: none;\n  border-radius: 14px;\n  font-size: 16px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n:host-context(.dark) .privy-modal-footer .privy-btn-primary {\n  background: #ffffff;\n  color: #0f172a;\n}\n.privy-modal-footer .privy-btn-primary:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(15, 23, 42, 0.2);\n}\n:host-context(.dark) .privy-modal-footer .privy-btn-primary:hover:not(:disabled) {\n  box-shadow: 0 8px 20px rgba(255, 255, 255, 0.15);\n}\n.privy-modal-footer .privy-btn-primary:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.privy-modal-footer .privy-btn-primary svg {\n  width: 18px;\n  height: 18px;\n}\n@keyframes slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px) scale(0.98);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n/*# sourceMappingURL=subscription-plans.component.css.map */\n'], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SubscriptionPlansComponent, [{
    type: Component,
    args: [{ selector: "subscription-plans", standalone: true, imports: [
      CommonModule,
      FormsModule,
      TranslocoModule,
      PlanChangeDialogComponent,
      BillingRequiredDialogComponent,
      MatSnackBarModule
    ], encapsulation: ViewEncapsulation.None, template: `<!-- Billing Required Dialog -->
<billing-required-dialog
    [isOpen]="showBillingRequiredModal"
    (goToBilling)="goToBillingDetails()"
></billing-required-dialog>

<!-- Plan Change Dialog -->
<plan-change-dialog
    [isOpen]="showPlanChangeDialog"
    [currentPlan]="currentSubscription"
    [newPlan]="selectedPlanForChange"
    [allPlans]="plans"
    [requestsPerMonth]="selectedPlanRequests"
    (confirm)="confirmPlanChange()"
    (cancel)="cancelPlanChange()"
    (comparePlans)="compareDiscountedPlansFromDialog()"
>
</plan-change-dialog>

<!-- UI Version Toggle (Dev only) -->
<div class="ui-version-toggle" *ngIf="false">
    <span class="toggle-label">UI Version:</span>
    <button class="version-btn" [class.active]="uiVersion === 'v1'" (click)="uiVersion = 'v1'">
        V1
    </button>
    <button class="version-btn" [class.active]="uiVersion === 'v2'" (click)="uiVersion = 'v2'">
        V2 (Privy)
    </button>
</div>

<!-- ============================================ -->
<!-- V1: CURRENT DESIGN (Add Credits Style) -->
<!-- ============================================ -->
<div class="subscription-page" *ngIf="uiVersion === 'v1'">
    <!-- Background Pattern -->
    <div class="bg-pattern"></div>

    <div class="container">
        <!-- Header -->
        <header class="header">
            <div class="badge">
                <svg viewBox="0 0 20 20" fill="currentColor">
                    <path
                        fill-rule="evenodd"
                        d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                        clip-rule="evenodd"
                    />
                </svg>
                {{ 'subscriptionPlans.badge' | transloco }}
            </div>
            <!-- No subscription -->
            <ng-container *ngIf="!currentSubscription">
                <h1>{{ 'subscriptionPlans.title' | transloco }}</h1>
                <p>{{ 'subscriptionPlans.subtitle' | transloco }}</p>
            </ng-container>
            <!-- Has subscription -->
            <ng-container *ngIf="currentSubscription">
                <h1>{{ 'subscriptionPlans.titleWithPlan' | transloco }}</h1>
                <p>{{ 'subscriptionPlans.subtitleWithPlan' | transloco }}</p>
            </ng-container>
        </header>

        <!-- Current Plan View -->
        <div *ngIf="currentView === 'current' && currentSubscription" class="current-plan-section">
            <!-- Current Plan Card -->
            <div class="current-plan-card">
                <div class="plan-badge">{{ 'subscriptionPlans.activePlan' | transloco }}</div>

                <div class="plan-info">
                    <div class="plan-name">{{ currentSubscription.name }}</div>
                    <div class="plan-price">
                        <span class="amount"
                            >\${{
                                (currentSubscription.amount || currentSubscription.subscriptionPlan.amount) | number: '1.0-0'
                            }}</span
                        >
                        <span class="period"
                            >/{{
                                'subscriptionPlans.interval.' +
                                    currentSubscription.subscriptionPlan.interval | transloco
                            }}</span
                        >
                    </div>
                </div>

                <div class="plan-meta">
                    <div class="meta-item">
                        <span class="label">{{ 'subscriptionPlans.started' | transloco }}</span>
                        <span class="value">{{
                            currentSubscription.startDate | date: 'mediumDate'
                        }}</span>
                    </div>
                    <div class="meta-item">
                        <span class="label">{{ 'subscriptionPlans.renews' | transloco }}</span>
                        <span class="value">{{
                            currentSubscription.endDate | date: 'mediumDate'
                        }}</span>
                    </div>
                    <div class="meta-item">
                        <span class="label">{{ 'subscriptionPlans.status' | transloco }}</span>
                        <span class="value status-active" *ngIf="currentSubscription.autoRenew">{{
                            'subscriptionPlans.statusActive' | transloco
                        }}</span>
                        <span class="value status-warning" *ngIf="!currentSubscription.autoRenew">{{
                            'subscriptionPlans.statusCanceling' | transloco
                        }}</span>
                    </div>
                </div>

                <div class="plan-actions">
                    <button class="btn btn-primary" (click)="manageBilling()">
                        <svg viewBox="0 0 20 20" fill="currentColor">
                            <path
                                fill-rule="evenodd"
                                d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                                clip-rule="evenodd"
                            />
                        </svg>
                        {{ 'subscriptionPlans.manageBilling' | transloco }}
                    </button>
                    <button class="btn btn-ghost" (click)="switchToExplore()">
                        <svg viewBox="0 0 20 20" fill="currentColor">
                            <path
                                fill-rule="evenodd"
                                d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                                clip-rule="evenodd"
                            />
                        </svg>
                        {{ 'subscriptionPlans.changePlan' | transloco }}
                    </button>
                </div>
            </div>

            <!-- Features Card -->
            <div class="features-card" *ngIf="currentSubscription && currentPlanHasIncludedBenefits">
                <h3>{{ 'subscriptionPlans.whatsIncluded' | transloco }}</h3>
                <div class="features-grid">
                    <ng-container
                        *ngFor="let feature of currentSubscription.subscriptionPlan.changesLeft"
                    >
                        <div class="feature-item" *ngIf="feature.key !== 'OCR'">
                            <svg class="check-icon" viewBox="0 0 20 20" fill="currentColor">
                                <path
                                    fill-rule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <span>{{ 'pricing.' + feature.key | transloco }}</span>
                            <span
                                class="feature-value"
                                *ngIf="feature.value && !isBoolean(feature.value)"
                                >{{ feature.value }}</span
                            >
                        </div>
                    </ng-container>
                    <ng-container
                        *ngFor="let feature of currentSubscription.subscriptionPlan.changesRight"
                    >
                        <div class="feature-item" *ngIf="feature.key !== 'OCR'">
                            <svg class="check-icon" viewBox="0 0 20 20" fill="currentColor">
                                <path
                                    fill-rule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <span>{{ 'pricing.' + feature.key | transloco }}</span>
                            <span
                                class="feature-value"
                                *ngIf="feature.value && !isBoolean(feature.value)"
                                >{{ feature.value }}</span
                            >
                        </div>
                    </ng-container>
                </div>
            </div>

            <!-- What's included: fallback when plan has no pricing perks in changesInPrices -->
            <div class="features-card features-card-fallback" *ngIf="showCurrentPlanIncludedFallback">
                <h3 class="features-included-label">{{ 'subscriptionPlans.whatsIncluded' | transloco }}</h3>
                <div class="included-fallback-card">
                    <p class="features-fallback-intro">
                        {{ 'subscriptionPlans.dialog.includedFallback' | transloco }}
                    </p>
                    <div class="included-fallback-rows">
                        <div class="included-fallback-row">
                            <svg class="included-fallback-check" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                            </svg>
                            <span>{{ 'subscriptionPlans.dialog.includedFallbackBullet1' | transloco }}</span>
                        </div>
                        <div class="included-fallback-row">
                            <svg class="included-fallback-check" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                            </svg>
                            <span>{{ 'subscriptionPlans.dialog.includedFallbackBullet2' | transloco }}</span>
                        </div>
                    </div>
                    <button
                        type="button"
                        class="btn-compare-plans-link-inline"
                        *ngIf="hasOtherPlansWithApiDiscountForCurrent"
                        (click)="compareDiscountedPlansFromCurrentCard()"
                    >
                        <span>{{ 'subscriptionPlans.dialog.compareDiscountedPlansShort' | transloco }}</span>
                        <svg class="btn-compare-plans-chevron" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
                        </svg>
                    </button>
                </div>
            </div>

            <!-- Your API prices (same table design as API breakdown in explore view) -->
            <div class="api-breakdown-section api-prices-card" *ngIf="currentSubscription && (myListFeatures.length > 0 || loadingMyListFeatures)">
                <div class="api-breakdown-header">
                    <h3>{{ 'subscriptionPlans.yourApiPrices' | transloco }}</h3>
                </div>
                <div *ngIf="loadingMyListFeatures" class="loading-state">
                    <div class="spinner"></div>
                </div>
                <div class="api-breakdown-empty" *ngIf="!loadingMyListFeatures && filteredMyListFeatures.length === 0">
                    {{ 'subscriptionPlans.apiBreakdown.empty' | transloco }}
                </div>
                <div
                    *ngIf="!loadingMyListFeatures && myListFeatures.length > 0"
                    class="api-breakdown-table-wrapper"
                >
                    <div class="api-breakdown-filters">
                        <input
                            type="text"
                            class="api-breakdown-search-input"
                            [placeholder]="'subscriptionPlans.apiBreakdown.searchPlaceholder' | transloco"
                            [value]="myListSearchQuery"
                            (input)="myListSearchQuery = $any($event.target).value"
                        />
                        <select
                            class="api-breakdown-filter-select"
                            [(ngModel)]="myListCountryFilter"
                        >
                            <option value="">All countries</option>
                            <option *ngFor="let c of myListCountries" [value]="c">
                                {{ getCountryDisplayName(c) }}
                            </option>
                        </select>
                        <select
                            class="api-breakdown-filter-select"
                            [(ngModel)]="myListCategoryFilter"
                        >
                            <option value="">All categories</option>
                            <option *ngFor="let cat of myListCategories" [value]="cat">
                                {{ getCategoryDisplayName(cat) }}
                            </option>
                        </select>
                    </div>
                    <table class="api-breakdown-table">
                        <thead>
                            <tr>
                                <th>{{ 'subscriptionPlans.apiBreakdown.apiName' | transloco }}</th>
                                <th>{{ currentSubscription?.subscriptionPlan?.name || ('subscriptionPlans.credits' | transloco) }}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <ng-container *ngFor="let group of groupedMyListFeatures; trackBy: trackByGroup">
                                <tr
                                    *ngIf="group.category"
                                    class="api-breakdown-category-row"
                                >
                                    <td colspan="2">{{ getCategoryDisplayName(group.category) }}</td>
                                </tr>
                                <tr
                                    *ngFor="let feature of group.features; trackBy: trackByFeature"
                                    (click)="openFeatureModal(feature)"
                                    class="cursor-pointer"
                                >
                                    <td>{{ getFeatureDisplayName(feature) }}</td>
                                    <td>
                                        {{ getEffectivePriceForApi(feature, currentSubscription.subscriptionPlan) | number:'1.2-4' }}
                                        {{ 'subscriptionPlans.credits' | transloco }}
                                    </td>
                                </tr>
                            </ng-container>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <!-- Explore Plans View -->
        <div *ngIf="currentView === 'explore'" class="explore-section">
            <!-- Interval Toggle -->
            <div class="interval-toggle">
                <div class="toggle-wrapper">
                    <button
                        [class.active]="selectedInterval === 'month'"
                        (click)="changeInterval('month')"
                    >
                        {{ 'subscriptionPlans.monthly' | transloco }}
                    </button>
                    <button
                        [class.active]="selectedInterval === 'year'"
                        (click)="changeInterval('year')"
                    >
                        {{ 'subscriptionPlans.yearly' | transloco }}
                        <span class="save-badge">{{ 'subscriptionPlans.save20' | transloco }}</span>
                    </button>
                </div>
            </div>

            <!-- Loading -->
            <div *ngIf="loadingPlans" class="loading-state">
                <div class="spinner"></div>
            </div>

            <!-- Slider: full-width above cards -->
            <div class="slider-section" *ngIf="!loadingPlans && plans.length > 0">
                <div class="slider-header">
                    <div class="slider-label-row">
                        <span class="slider-label">{{
                            'subscriptionPlans.requestSlider.label' | transloco
                        }}</span>
                        <span class="slider-value-pill">
                            {{ formatNumber(sliderValue) }}
                            {{
                                (selectedInterval === 'year'
                                    ? 'subscriptionPlans.requestSlider.requestsPerYear'
                                    : 'subscriptionPlans.requestSlider.requests'
                                ) | transloco
                            }}
                        </span>
                    </div>
                    <p class="slider-hint">
                        {{ 'subscriptionPlans.requestSlider.basePrice' | transloco }}
                    </p>
                </div>

                <div class="slider-track-wrapper">
                    <input
                        type="range"
                        class="slider-input"
                        min="0"
                        [max]="sliderMax"
                        [step]="sliderStep"
                        [value]="sliderValue"
                        [style.background]="
                            'linear-gradient(to right, #8b5cf6 ' +
                            (sliderValue / sliderMax) * 100 +
                            '%, #e2e8f0 ' +
                            (sliderValue / sliderMax) * 100 +
                            '%)'
                        "
                        (input)="onSliderChange($event)"
                    />
                    <div class="slider-ticks">
                        <span *ngFor="let tick of sliderTicks">{{ tick }}</span>
                    </div>
                </div>

                <!-- Per-plan cost chips (horizontal row) -->
                <div class="plan-cost-chips" *ngIf="!showApiBreakdown && requestsPerMonth > 0">
                    <ng-container *ngFor="let plan of visiblePlans">
                        <div
                            class="plan-cost-chip"
                            [class.best-value]="plan._id === getBestValuePlanId()"
                        >
                            <div class="chip-plan-name">{{ plan.name }}</div>
                            <div class="chip-cost-per-req">
                                \${{ getEffectiveCostPerRequest(plan).toFixed(4) }}
                                <span
                                    >/
                                    {{
                                        'subscriptionPlans.requestSlider.perRequest' | transloco
                                    }}</span
                                >
                            </div>
                            <div class="chip-monthly-spend">
                                ~\${{ getEstimatedTotal(plan) | number: '1.0-0' }}/mo
                            </div>
                            <div
                                class="chip-best-value-label"
                                *ngIf="plan._id === getBestValuePlanId()"
                            >
                                <svg viewBox="0 0 20 20" fill="currentColor">
                                    <path
                                        fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                                {{ 'subscriptionPlans.requestSlider.bestValue' | transloco }}
                            </div>
                        </div>
                    </ng-container>
                </div>

                <!-- Compare API prices button -->
                <div class="slider-actions" *ngIf="!showApiBreakdown">
                    <button
                        type="button"
                        class="btn btn-api-breakdown"
                        (click)="showApiBreakdownView()"
                    >
                        {{ 'subscriptionPlans.apiBreakdown.button' | transloco }}
                    </button>
                </div>
            </div>

            <!-- API Price Breakdown Table (replaces plans when active) -->
            <div class="api-breakdown-section" *ngIf="showApiBreakdown && !loadingPlans">
                <div class="api-breakdown-header">
                    <h3>{{ 'subscriptionPlans.apiBreakdown.title' | transloco }}</h3>
                    <button
                        type="button"
                        class="btn btn-ghost btn-sm"
                        (click)="hideApiBreakdownView()"
                    >
                        {{ 'subscriptionPlans.apiBreakdown.backToPlans' | transloco }}
                    </button>
                </div>

                <div *ngIf="loadingFeatures" class="loading-state">
                    <div class="spinner"></div>
                </div>

                <div
                    *ngIf="!loadingFeatures && appFeatures.length === 0"
                    class="api-breakdown-empty"
                >
                    {{ 'subscriptionPlans.apiBreakdown.empty' | transloco }}
                </div>

                <div
                    *ngIf="!loadingFeatures && appFeatures.length > 0"
                    class="api-breakdown-table-wrapper"
                >
                    <div class="api-breakdown-filters">
                        <input
                            type="text"
                            class="api-breakdown-search-input"
                            [placeholder]="
                                'subscriptionPlans.apiBreakdown.searchPlaceholder' | transloco
                            "
                            [value]="apiBreakdownSearchQuery"
                            (input)="apiBreakdownSearchQuery = $any($event.target).value"
                        />
                        <select
                            class="api-breakdown-filter-select"
                            [(ngModel)]="apiBreakdownCountryFilter"
                        >
                            <option value="">All countries</option>
                            <option
                                *ngFor="let c of apiBreakdownCountries"
                                [value]="c"
                            >
                                {{ getCountryDisplayName(c) }}
                            </option>
                        </select>
                        <select
                            class="api-breakdown-filter-select"
                            [(ngModel)]="apiBreakdownCategoryFilter"
                        >
                            <option value="">All categories</option>
                            <option
                                *ngFor="let cat of apiBreakdownCategories"
                                [value]="cat"
                            >
                                {{ getCategoryDisplayName(cat) }}
                            </option>
                        </select>
                    </div>
                    <table class="api-breakdown-table">
                        <thead>
                            <tr>
                                <th>{{ 'subscriptionPlans.apiBreakdown.apiName' | transloco }}</th>
                                <th *ngFor="let plan of apiBreakdownPlans; trackBy: trackByPlan">
                                    {{ plan.name }}
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <ng-container
                                *ngFor="let group of groupedFilteredFeatures; trackBy: trackByGroup"
                            >
                                <tr
                                    *ngIf="group.category"
                                    class="api-breakdown-category-row"
                                >
                                    <td [attr.colspan]="apiBreakdownPlans.length + 1">
                                        {{ getCategoryDisplayName(group.category) }}
                                    </td>
                                </tr>
                                <tr
                                    *ngFor="let feature of group.features; trackBy: trackByFeature"
                                    (click)="openFeatureModal(feature)"
                                    class="cursor-pointer"
                                >
                                    <td>{{ getFeatureDisplayName(feature) }}</td>
                                    <td *ngFor="let plan of apiBreakdownPlans; trackBy: trackByPlan">
                                        \${{ getCompareTablePriceForApi(feature, plan).toFixed(4) }}/req
                                    </td>
                                </tr>
                            </ng-container>
                        </tbody>
                    </table>

                    <div class="api-breakdown-footer" *ngIf="requestsPerMonth > 0">
                        <span class="footer-label">
                            {{ formatNumber(sliderValue) }}
                            {{
                                (selectedInterval === 'year'
                                    ? 'subscriptionPlans.requestSlider.requestsPerYear'
                                    : 'subscriptionPlans.requestSlider.requests'
                                ) | transloco
                            }}:
                        </span>
                        <span
                            *ngFor="let plan of apiBreakdownPlans; trackBy: trackByPlan"
                            class="footer-plan"
                        >
                            {{ plan.name }} = \${{
                                getDisplayEstimatedTotal(plan) | number: '1.0-0'
                            }}
                        </span>
                    </div>
                </div>
            </div>

            <!-- Plans Grid -->
            <div
                class="plans-grid"
                #plansExploreAnchor
                *ngIf="!loadingPlans && !showApiBreakdown"
            >
                <div
                    *ngFor="let plan of visiblePlans; trackBy: trackByPlan"
                    class="plan-card"
                    [class.popular]="plan.name === 'Plus'"
                    [class.current]="plan.code === currentSubscription?.subscriptionPlan?.code"
                    [class.best-value-card]="
                        plan._id && plan._id === getBestValuePlanId() && requestsPerMonth > 0
                    "
                >
                    <div class="popular-badge" *ngIf="plan.name === 'Plus'">
                        {{ 'subscriptionPlans.popular' | transloco }}
                    </div>
                    <div
                        class="best-value-badge"
                        *ngIf="
                            plan._id &&
                            plan._id === getBestValuePlanId() &&
                            requestsPerMonth > 0 &&
                            plan.name !== 'Plus'
                        "
                    >
                        {{ 'subscriptionPlans.requestSlider.bestValue' | transloco }}
                    </div>

                    <div class="plan-card-header">
                        <h3>{{ plan.name }}</h3>
                    </div>

                    <div class="plan-card-pricing">
                        <!-- Base price (muted when slider is active) -->
                        <div
                            class="price-display"
                            [class.price-muted]="requestsPerMonth > 0 && getDisplayRequestAddOn(plan) > 0"
                        >
                            <span class="currency">$</span>
                            <span class="price-amount">{{ plan.amount | number: '1.0-0' }}</span>
                            <span class="price-period"
                                >/{{
                                    'subscriptionPlans.interval.' + plan.interval | transloco
                                }}</span
                            >
                        </div>
                        <p
                            class="price-note"
                            *ngIf="
                                plan.interval === 'year' &&
                                !(requestsPerMonth > 0 && getDisplayRequestAddOn(plan) > 0)
                            "
                        >
                            \${{ getAmountByMonth(plan) }}/{{
                                'subscriptionPlans.interval.month' | transloco
                            }}
                            {{ 'subscriptionPlans.billedAnnually' | transloco }}
                        </p>

                        <!-- Add-on line (only when there is extra cost beyond base price) -->
                        <div
                            class="plan-addon-line"
                            *ngIf="requestsPerMonth > 0 && getDisplayRequestAddOn(plan) > 0"
                        >
                            <span class="addon-plus">+</span>
                            <span class="addon-amount"
                                >\${{ getDisplayRequestAddOn(plan) | number: '1.0-0' }}</span
                            >
                            <span class="addon-label"
                                >~{{ formatNumber(sliderValue) }}
                                {{
                                    (selectedInterval === 'year'
                                        ? 'subscriptionPlans.requestSlider.requestsPerYear'
                                        : 'subscriptionPlans.requestSlider.requests'
                                    ) | transloco
                                }}</span
                            >
                        </div>

                        <!-- Estimated total (only when there is extra cost beyond base price) -->
                        <div
                            class="plan-estimated-total"
                            *ngIf="requestsPerMonth > 0 && getDisplayRequestAddOn(plan) > 0"
                        >
                            <span class="total-label">{{
                                'subscriptionPlans.requestSlider.estimatedTotal' | transloco
                            }}</span>
                            <div class="total-amount">
                                <span class="total-currency">$</span>
                                <span class="total-number">{{
                                    getDisplayEstimatedTotal(plan) | number: '1.0-0'
                                }}</span>
                                <span class="total-period"
                                    >/{{
                                        (selectedInterval === 'year'
                                            ? 'subscriptionPlans.interval.year'
                                            : 'subscriptionPlans.interval.month'
                                        ) | transloco
                                    }}</span
                                >
                            </div>
                        </div>
                    </div>

                    <!-- Discount (compact inline) -->
                    <div class="plan-discount-chip mb-2" *ngIf="plan.discount?.discount">
                        <span class="discount-chip-value">{{ getDiscountDisplayText(plan) }}</span>
                        <span class="discount-chip-context">{{
                            'subscriptionPlans.discountDescription' | transloco
                        }}</span>
                    </div>

                    <button
                        class="plan-card-btn btn-primary"
                        [class.btn-current]="
                            plan.code === currentSubscription?.subscriptionPlan?.code
                        "
                        [disabled]="plan.code === currentSubscription?.subscriptionPlan?.code"
                        (click)="upgradePlan(plan)"
                    >
                        <ng-container
                            *ngIf="plan.code === currentSubscription?.subscriptionPlan?.code"
                        >
                            {{ 'subscriptionPlans.currentPlan' | transloco }}
                        </ng-container>
                        <ng-container
                            *ngIf="plan.code !== currentSubscription?.subscriptionPlan?.code"
                        >
                            <ng-container *ngIf="!currentSubscription">{{
                                'subscriptionPlans.selectPlan' | transloco
                            }}</ng-container>
                            <ng-container *ngIf="currentSubscription">
                                {{
                                    plan.isDowngrade
                                        ? ('subscriptionPlans.downgrade' | transloco)
                                        : ('subscriptionPlans.upgrade' | transloco)
                                }}
                            </ng-container>
                        </ng-container>
                    </button>
                </div>
            </div>

            <!-- Back Button -->
            <div class="back-nav" *ngIf="currentSubscription">
                <button class="btn-link" (click)="switchToCurrent()">
                    <svg viewBox="0 0 20 20" fill="currentColor">
                        <path
                            fill-rule="evenodd"
                            d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                            clip-rule="evenodd"
                        />
                    </svg>
                    {{ 'subscriptionPlans.backToCurrentPlan' | transloco }}
                </button>
            </div>
        </div>
    </div>
</div>

<!-- ============================================ -->
<!-- V2: PRIVY.IO INSPIRED DESIGN -->
<!-- ============================================ -->
<div class="subscription-page-v2" *ngIf="uiVersion === 'v2'">
    <div class="v2-container">
        <!-- Header -->
        <header class="v2-header">
            <ng-container *ngIf="!currentSubscription">
                <h1>{{ 'subscriptionPlans.title' | transloco }}</h1>
                <p>{{ 'subscriptionPlans.subtitle' | transloco }}</p>
            </ng-container>
            <ng-container *ngIf="currentSubscription">
                <h1>{{ 'subscriptionPlans.titleWithPlan' | transloco }}</h1>
                <p>{{ 'subscriptionPlans.subtitleWithPlan' | transloco }}</p>
            </ng-container>
        </header>

        <!-- Current Plan Banner (if has subscription) -->
        <div class="v2-current-banner" *ngIf="currentSubscription && currentView === 'current'">
            <div class="banner-content">
                <div class="banner-info">
                    <span class="current-label">Current plan</span>
                    <span class="plan-name">{{ currentSubscription.name }}</span>
                    <span class="plan-price"
                        >\${{ currentSubscription.subscriptionPlan.amount | number: '1.0-0' }}/{{
                            currentSubscription.subscriptionPlan.interval
                        }}</span
                    >
                </div>
                <div class="banner-actions">
                    <button class="v2-btn v2-btn-outline" (click)="manageBilling()">
                        Manage billing
                    </button>
                    <button class="v2-btn v2-btn-primary" (click)="switchToExplore()">
                        Change plan
                    </button>
                </div>
            </div>
        </div>

        <!-- Interval Toggle -->
        <div class="v2-interval-toggle" *ngIf="currentView === 'explore' || !currentSubscription">
            <button [class.active]="selectedInterval === 'month'" (click)="changeInterval('month')">
                Monthly
            </button>
            <button [class.active]="selectedInterval === 'year'" (click)="changeInterval('year')">
                Annual
                <span class="save-tag">-20%</span>
            </button>
        </div>

        <!-- Loading -->
        <div class="v2-loading" *ngIf="loadingPlans">
            <div class="v2-spinner"></div>
        </div>

        <!-- Plans Grid -->
        <div
            class="v2-plans-grid"
            *ngIf="!loadingPlans && (currentView === 'explore' || !currentSubscription)"
        >
            <div
                *ngFor="let plan of visiblePlans; trackBy: trackByPlan"
                class="v2-plan-card"
                [class.recommended]="plan.name === 'Plus'"
                [class.current]="plan.code === currentSubscription?.subscriptionPlan?.code"
            >
                <div class="v2-card-badge" *ngIf="plan.name === 'Plus'">Recommended</div>

                <div class="v2-card-header">
                    <h3>{{ plan.name }}</h3>
                    <div class="v2-price">
                        <span class="amount">\${{ plan.amount | number: '1.0-0' }}</span>
                        <span class="period">/{{ plan.interval }}</span>
                    </div>
                </div>

                <div class="v2-card-discount" *ngIf="plan.discount?.discount">
                    <span class="discount-value">{{ getDiscountDisplayText(plan) }}</span>
                    <span class="discount-context">{{
                        'subscriptionPlans.discountDescription' | transloco
                    }}</span>
                </div>

                <button
                    class="v2-card-btn"
                    [class.current]="plan.code === currentSubscription?.subscriptionPlan?.code"
                    [disabled]="plan.code === currentSubscription?.subscriptionPlan?.code"
                    (click)="upgradePlan(plan)"
                >
                    <ng-container *ngIf="plan.code === currentSubscription?.subscriptionPlan?.code"
                        >Current plan</ng-container
                    >
                    <ng-container *ngIf="plan.code !== currentSubscription?.subscriptionPlan?.code">
                        <ng-container *ngIf="!currentSubscription">Select plan</ng-container>
                        <ng-container *ngIf="currentSubscription">
                            {{ plan.isDowngrade ? 'Downgrade' : 'Upgrade' }}
                        </ng-container>
                    </ng-container>
                </button>
            </div>
        </div>

        <!-- Back Link -->
        <div class="v2-back-link" *ngIf="currentSubscription && currentView === 'explore'">
            <button (click)="switchToCurrent()">
                <svg viewBox="0 0 20 20" fill="currentColor">
                    <path
                        fill-rule="evenodd"
                        d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                        clip-rule="evenodd"
                    />
                </svg>
                Back to current plan
            </button>
        </div>
    </div>
</div>

<!-- ============================================ -->
<!-- PRIVY-STYLE API FEATURE MODAL                -->
<!-- ============================================ -->
<div class="privy-modal-backdrop" *ngIf="selectedFeatureForModal" (click)="closeFeatureModal()">
    <div class="privy-modal-container" (click)="$event.stopPropagation()">
        <!-- Close Button -->
        <button class="privy-modal-close" (click)="closeFeatureModal()">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
        </button>
        
        <!-- Header -->
        <div class="privy-modal-header">
            <div class="privy-modal-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="url(#privy-gradient)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <defs>
                        <linearGradient id="privy-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stop-color="#8b5cf6" />
                            <stop offset="100%" stop-color="#3b82f6" />
                        </linearGradient>
                    </defs>
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                </svg>
            </div>
            <h2>{{ getFeatureDisplayName(selectedFeatureForModal) }}</h2>
            <p class="privy-modal-category">{{ getCategoryDisplayName(selectedFeatureForModal.baseCategory) || 'API Endpoint' }}</p>
        </div>

        <!-- Content Details -->
        <div class="privy-modal-content">
            <div class="privy-detail-group">
                <label>Endpoint URL</label>
                <div class="privy-code-block" (click)="copyUrlToClipboard(selectedFeatureForModal.url)">
                    <span>{{ getFullEndpointUrl(selectedFeatureForModal.url) }}</span>
                    <button class="privy-copy-btn" title="Copy URL">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                        </svg>
                    </button>
                </div>
            </div>

            <div class="privy-detail-row">
                <div class="privy-detail-group" *ngIf="selectedFeatureForModal.code">
                    <label>Internal Code</label>
                    <div class="privy-badge">{{ selectedFeatureForModal.code }}</div>
                </div>
                <div class="privy-detail-group" *ngIf="selectedFeatureForModal.country">
                    <label>Region</label>
                    <div class="privy-badge privy-badge-outline">{{ getCountryDisplayName(selectedFeatureForModal.country) || selectedFeatureForModal.country }}</div>
                </div>
            </div>

            <!-- Price Breakdown -->
            <div class="privy-detail-group pricing-group" *ngIf="currentSubscription">
                <label>Your Pricing</label>
                <div class="privy-price-display">
                    <span class="privy-price-amount">{{ getEffectivePriceForApi(selectedFeatureForModal, currentSubscription.subscriptionPlan) | number:'1.2-4' }}</span>
                    <span class="privy-price-currency">CREDITS <span class="muted">/ request</span></span>
                </div>
            </div>
            <!-- If NO subscription, show standard AppFeature price natively -->
            <div class="privy-detail-group pricing-group" *ngIf="!currentSubscription">
                <label>Standard API Price</label>
                <div class="privy-price-display">
                    <span class="privy-price-amount">{{ (selectedFeatureForModal.price ?? 0) | number:'1.2-4' }}</span>
                    <span class="privy-price-currency">CREDITS <span class="muted">/ request</span></span>
                </div>
            </div>
        </div>

        <!-- Footer Actions -->
        <div class="privy-modal-footer">
            <button class="privy-btn-primary" (click)="openPostmanForFeature(selectedFeatureForModal)" [disabled]="!selectedFeatureForModal.code">
                Open in Postman
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
            </button>
        </div>
    </div>
</div>
`, styles: ['/* src/app/modules/subscription-plans/subscription-plans.component.scss */\n.subscription-page {\n  width: 100%;\n  min-height: 100vh;\n  background: #f8fafc;\n  position: relative;\n  overflow: hidden;\n}\n:host-context(.dark) .subscription-page {\n  background: #0f172a;\n}\n.bg-pattern {\n  position: absolute;\n  inset: 0;\n  background-image:\n    radial-gradient(\n      circle at 20% 20%,\n      rgba(99, 102, 241, 0.05) 0%,\n      transparent 50%),\n    radial-gradient(\n      circle at 80% 80%,\n      rgba(139, 92, 246, 0.05) 0%,\n      transparent 50%);\n  pointer-events: none;\n}\n:host-context(.dark) .bg-pattern {\n  background-image:\n    radial-gradient(\n      circle at 20% 20%,\n      rgba(99, 102, 241, 0.15) 0%,\n      transparent 50%),\n    radial-gradient(\n      circle at 80% 80%,\n      rgba(139, 92, 246, 0.15) 0%,\n      transparent 50%);\n}\n.container {\n  position: relative;\n  z-index: 1;\n  width: 100%;\n  max-width: 100%;\n  margin: 0 auto;\n  padding: 40px 24px;\n}\n@media (min-width: 768px) {\n  .container {\n    padding: 48px 48px;\n  }\n}\n@media (min-width: 1280px) {\n  .container {\n    padding: 48px 64px;\n  }\n}\n.header {\n  margin-bottom: 48px;\n}\n.header .badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 16px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(99, 102, 241, 0.1),\n      rgba(139, 92, 246, 0.1));\n  border: 1px solid rgba(99, 102, 241, 0.2);\n  border-radius: 100px;\n  color: #8b5cf6;\n  font-size: 14px;\n  font-weight: 600;\n  margin-bottom: 16px;\n}\n:host-context(.dark) .header .badge {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(99, 102, 241, 0.2),\n      rgba(139, 92, 246, 0.2));\n  border-color: rgba(139, 92, 246, 0.3);\n}\n.header .badge svg {\n  width: 18px;\n  height: 18px;\n}\n.header h1 {\n  font-size: 36px;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 12px;\n  line-height: 1.2;\n}\n:host-context(.dark) .header h1 {\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff 0%,\n      rgba(255, 255, 255, 0.8) 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n@media (min-width: 768px) {\n  .header h1 {\n    font-size: 48px;\n  }\n}\n.header p {\n  font-size: 18px;\n  color: #475569;\n  margin: 0;\n  line-height: 1.6;\n}\n:host-context(.dark) .header p {\n  color: rgba(255, 255, 255, 0.7);\n}\n.current-plan-section {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n@media (min-width: 900px) {\n  .current-plan-section {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 32px;\n    align-items: start;\n  }\n}\n.current-plan-section .features-card.api-prices-card,\n.current-plan-section .api-breakdown-section.api-prices-card {\n  grid-column: 1/-1;\n}\n.current-plan-card {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 20px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05), 0 4px 12px rgba(0, 0, 0, 0.03);\n  padding: 32px;\n  position: relative;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n:host-context(.dark) .current-plan-card {\n  background: rgba(30, 41, 59, 0.8);\n  backdrop-filter: blur(20px);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 20px;\n}\n.current-plan-card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 12px 40px rgba(99, 102, 241, 0.15);\n}\n:host-context(.dark) .current-plan-card:hover {\n  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);\n}\n.current-plan-card .plan-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 6px 14px;\n  background: rgba(16, 185, 129, 0.1);\n  border-radius: 100px;\n  font-size: 13px;\n  font-weight: 600;\n  color: #10b981;\n  margin-bottom: 24px;\n}\n:host-context(.dark) .current-plan-card .plan-badge {\n  background: rgba(16, 185, 129, 0.15);\n}\n.current-plan-card .plan-badge::before {\n  content: "";\n  width: 8px;\n  height: 8px;\n  background: #10b981;\n  border-radius: 50%;\n  box-shadow: 0 0 8px rgba(16, 185, 129, 0.6);\n}\n.current-plan-card .plan-info {\n  margin-bottom: 32px;\n}\n.current-plan-card .plan-info .plan-name {\n  font-size: 28px;\n  font-weight: 700;\n  color: #0f172a;\n  margin-bottom: 8px;\n}\n:host-context(.dark) .current-plan-card .plan-info .plan-name {\n  color: #ffffff;\n}\n.current-plan-card .plan-info .plan-price {\n  display: flex;\n  align-items: baseline;\n  gap: 4px;\n}\n.current-plan-card .plan-info .plan-price .amount {\n  font-size: 48px;\n  font-weight: 800;\n  color: #0f172a;\n  line-height: 1;\n}\n:host-context(.dark) .current-plan-card .plan-info .plan-price .amount {\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff 0%,\n      rgba(255, 255, 255, 0.85) 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.current-plan-card .plan-info .plan-price .period {\n  font-size: 18px;\n  color: #94a3b8;\n  font-weight: 500;\n}\n:host-context(.dark) .current-plan-card .plan-info .plan-price .period {\n  color: rgba(255, 255, 255, 0.4);\n}\n.current-plan-card .plan-meta {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 24px;\n  padding: 24px;\n  background: rgba(99, 102, 241, 0.04);\n  border-radius: 16px;\n  margin-bottom: 28px;\n}\n:host-context(.dark) .current-plan-card .plan-meta {\n  background: rgba(255, 255, 255, 0.03);\n}\n.current-plan-card .plan-meta .meta-item .label {\n  display: block;\n  font-size: 12px;\n  color: #94a3b8;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  margin-bottom: 4px;\n}\n:host-context(.dark) .current-plan-card .plan-meta .meta-item .label {\n  color: rgba(255, 255, 255, 0.4);\n}\n.current-plan-card .plan-meta .meta-item .value {\n  font-size: 14px;\n  font-weight: 600;\n  color: #0f172a;\n}\n:host-context(.dark) .current-plan-card .plan-meta .meta-item .value {\n  color: #ffffff;\n}\n.current-plan-card .plan-meta .meta-item .value.status-active {\n  color: #10b981;\n}\n.current-plan-card .plan-meta .meta-item .value.status-warning {\n  color: #f59e0b;\n}\n.current-plan-card .plan-actions {\n  display: flex;\n  gap: 12px;\n  flex-direction: column;\n}\n@media (min-width: 640px) {\n  .current-plan-card .plan-actions {\n    flex-direction: row;\n  }\n}\n.features-card {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 20px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05), 0 4px 12px rgba(0, 0, 0, 0.03);\n  padding: 28px;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  width: 100%;\n  overflow: hidden;\n}\n:host-context(.dark) .features-card {\n  background: rgba(30, 41, 59, 0.8);\n  backdrop-filter: blur(20px);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 20px;\n}\n.features-card h3 {\n  font-size: 18px;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 20px;\n}\n:host-context(.dark) .features-card h3 {\n  color: #ffffff;\n}\n.features-card .features-grid {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 10px;\n}\n@media (min-width: 480px) {\n  .features-card .features-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.features-card .feature-category-label {\n  grid-column: 1/-1;\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: #94a3b8;\n  margin-top: 12px;\n  margin-bottom: 4px;\n}\n:host-context(.dark) .features-card .feature-category-label {\n  color: rgba(255, 255, 255, 0.4);\n}\n.features-card .feature-category-label:first-child {\n  margin-top: 0;\n}\n.features-card .feature-item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 14px;\n  background: rgba(99, 102, 241, 0.04);\n  border-radius: 10px;\n  font-size: 13px;\n  color: #475569;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  min-width: 0;\n}\n:host-context(.dark) .features-card .feature-item {\n  background: rgba(255, 255, 255, 0.03);\n  color: rgba(255, 255, 255, 0.7);\n}\n.features-card .feature-item:hover {\n  background: rgba(99, 102, 241, 0.08);\n}\n:host-context(.dark) .features-card .feature-item:hover {\n  background: rgba(255, 255, 255, 0.06);\n}\n.features-card .feature-item .check-icon {\n  width: 16px;\n  height: 16px;\n  color: #10b981;\n  flex-shrink: 0;\n}\n.features-card .feature-item span {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.features-card .feature-item .feature-value {\n  margin-left: auto;\n  font-weight: 600;\n  color: #8b5cf6;\n  flex-shrink: 0;\n}\n.features-card .feature-item.cursor-pointer {\n  cursor: pointer;\n}\n.features-card.features-card-fallback .features-included-label {\n  font-size: 12px;\n  font-weight: 600;\n  color: #94a3b8;\n  margin: 0 0 14px;\n  letter-spacing: 0.02em;\n}\n:host-context(.dark) .features-card.features-card-fallback .features-included-label {\n  color: rgba(255, 255, 255, 0.4);\n}\n.features-card.features-card-fallback .included-fallback-card {\n  padding: 18px 18px 16px;\n  border-radius: 16px;\n  border: 1px solid #e2e8f0;\n  background: rgba(248, 250, 252, 0.65);\n}\n:host-context(.dark) .features-card.features-card-fallback .included-fallback-card {\n  border-color: rgba(255, 255, 255, 0.08);\n  background: rgba(255, 255, 255, 0.04);\n}\n.features-card.features-card-fallback .features-fallback-intro {\n  margin: 0 0 14px;\n  font-size: 14px;\n  line-height: 1.55;\n  color: #475569;\n}\n:host-context(.dark) .features-card.features-card-fallback .features-fallback-intro {\n  color: rgba(255, 255, 255, 0.7);\n}\n.features-card.features-card-fallback .included-fallback-rows {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin-bottom: 16px;\n}\n.features-card.features-card-fallback .included-fallback-row {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  font-size: 13px;\n  line-height: 1.45;\n  color: #475569;\n}\n:host-context(.dark) .features-card.features-card-fallback .included-fallback-row {\n  color: rgba(255, 255, 255, 0.7);\n}\n.features-card.features-card-fallback .included-fallback-row span {\n  flex: 1;\n  min-width: 0;\n}\n.features-card.features-card-fallback .included-fallback-check {\n  width: 16px;\n  height: 16px;\n  flex-shrink: 0;\n  margin-top: 2px;\n  color: rgba(16, 185, 129, 0.85);\n}\n:host-context(.dark) .features-card.features-card-fallback .included-fallback-check {\n  color: rgba(52, 211, 153, 0.9);\n}\n.features-card.features-card-fallback .btn-compare-plans-link-inline {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  margin: 0;\n  padding: 6px 0;\n  font-size: 13px;\n  font-weight: 600;\n  color: #6366f1;\n  background: none;\n  border: none;\n  cursor: pointer;\n  text-decoration: none;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n:host-context(.dark) .features-card.features-card-fallback .btn-compare-plans-link-inline {\n  color: #a5b4fc;\n}\n.features-card.features-card-fallback .btn-compare-plans-link-inline:hover {\n  color: #4f46e5;\n  text-decoration: underline;\n  text-underline-offset: 3px;\n}\n:host-context(.dark) .features-card.features-card-fallback .btn-compare-plans-link-inline:hover {\n  color: #c7d2fe;\n}\n.features-card.features-card-fallback .btn-compare-plans-link-inline:focus-visible {\n  outline: 2px solid rgba(99, 102, 241, 0.55);\n  outline-offset: 3px;\n  border-radius: 4px;\n}\n.features-card.features-card-fallback .btn-compare-plans-link-inline .btn-compare-plans-chevron {\n  width: 18px;\n  height: 18px;\n  flex-shrink: 0;\n  opacity: 0.85;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  padding: 14px 28px;\n  border: none;\n  border-radius: 14px;\n  font-size: 15px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  position: relative;\n  overflow: hidden;\n}\n.btn.btn-primary {\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1 0%,\n      #8b5cf6 50%,\n      #a855f7 100%);\n  color: white;\n}\n.btn.btn-primary::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.2) 0%,\n      transparent 50%);\n  opacity: 0;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.btn.btn-primary:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 12px 24px rgba(99, 102, 241, 0.35);\n}\n.btn.btn-primary:hover:not(:disabled)::before {\n  opacity: 1;\n}\n.btn.btn-ghost {\n  background: transparent;\n  border: 1px solid #e2e8f0;\n  color: #0f172a;\n}\n:host-context(.dark) .btn.btn-ghost {\n  border-color: rgba(255, 255, 255, 0.08);\n  color: #ffffff;\n}\n.btn.btn-ghost:hover:not(:disabled) {\n  background: rgba(99, 102, 241, 0.08);\n  border-color: rgba(99, 102, 241, 0.3);\n  color: #8b5cf6;\n}\n.btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn svg {\n  width: 18px;\n  height: 18px;\n}\n.explore-section {\n  display: flex;\n  flex-direction: column;\n  gap: 40px;\n}\n.explore-split {\n  display: grid;\n  grid-template-columns: 300px 1fr;\n  gap: 28px;\n  align-items: start;\n}\n@media (max-width: 1024px) {\n  .explore-split {\n    grid-template-columns: 1fr;\n  }\n}\n.slider-panel {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 20px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05), 0 4px 12px rgba(0, 0, 0, 0.03);\n  padding: 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  position: sticky;\n  top: 24px;\n}\n:host-context(.dark) .slider-panel {\n  background: rgba(30, 41, 59, 0.8);\n  backdrop-filter: blur(20px);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 20px;\n}\n.plans-grid-wrapper {\n  width: 100%;\n}\n.slider-cost-breakdown {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding-top: 4px;\n}\n.slider-cost-breakdown .breakdown-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 8px 10px;\n  border-radius: 10px;\n  background: rgba(99, 102, 241, 0.04);\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n:host-context(.dark) .slider-cost-breakdown .breakdown-row {\n  background: rgba(255, 255, 255, 0.03);\n}\n.slider-cost-breakdown .breakdown-row.breakdown-best {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(16, 185, 129, 0.08),\n      rgba(99, 102, 241, 0.08));\n  border: 1px solid rgba(16, 185, 129, 0.25);\n}\n.slider-cost-breakdown .breakdown-name {\n  font-size: 12px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: #475569;\n  min-width: 50px;\n}\n:host-context(.dark) .slider-cost-breakdown .breakdown-name {\n  color: rgba(255, 255, 255, 0.7);\n}\n.slider-cost-breakdown .breakdown-nums {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 2px;\n}\n.slider-cost-breakdown .breakdown-rate {\n  font-size: 11px;\n  color: #94a3b8;\n}\n:host-context(.dark) .slider-cost-breakdown .breakdown-rate {\n  color: rgba(255, 255, 255, 0.4);\n}\n.slider-cost-breakdown .breakdown-total {\n  font-size: 13px;\n  font-weight: 700;\n  color: #0f172a;\n}\n:host-context(.dark) .slider-cost-breakdown .breakdown-total {\n  color: #ffffff;\n}\n.slider-cost-breakdown .breakdown-best-label {\n  font-size: 10px;\n  font-weight: 700;\n  text-transform: uppercase;\n  color: #10b981;\n  letter-spacing: 0.04em;\n}\n.interval-toggle {\n  display: flex;\n  justify-content: center;\n}\n.interval-toggle .toggle-wrapper {\n  display: inline-flex;\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 20px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05), 0 4px 12px rgba(0, 0, 0, 0.03);\n  padding: 6px;\n}\n:host-context(.dark) .interval-toggle .toggle-wrapper {\n  background: rgba(30, 41, 59, 0.8);\n  backdrop-filter: blur(20px);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 20px;\n}\n.interval-toggle button {\n  position: relative;\n  padding: 12px 32px;\n  font-size: 15px;\n  font-weight: 600;\n  color: #94a3b8;\n  background: transparent;\n  border: none;\n  border-radius: 14px;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n:host-context(.dark) .interval-toggle button {\n  color: rgba(255, 255, 255, 0.4);\n}\n.interval-toggle button.active {\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1 0%,\n      #8b5cf6 50%,\n      #a855f7 100%);\n  color: white;\n  box-shadow: 0 4px 16px rgba(99, 102, 241, 0.3);\n}\n.interval-toggle button:not(.active):hover {\n  color: #0f172a;\n}\n:host-context(.dark) .interval-toggle button:not(.active):hover {\n  color: #ffffff;\n}\n.interval-toggle button .save-badge {\n  position: absolute;\n  top: -6px;\n  right: -6px;\n  padding: 3px 8px;\n  background:\n    linear-gradient(\n      135deg,\n      #10b981 0%,\n      #059669 100%);\n  border-radius: 100px;\n  font-size: 10px;\n  font-weight: 700;\n  color: white;\n  letter-spacing: 0.02em;\n}\n.loading-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 80px 20px;\n}\n.loading-state .spinner {\n  width: 48px;\n  height: 48px;\n  border: 3px solid #e2e8f0;\n  border-top-color: #8b5cf6;\n  border-radius: 50%;\n  animation: spin 0.8s linear infinite;\n}\n:host-context(.dark) .loading-state .spinner {\n  border-color: rgba(255, 255, 255, 0.08);\n  border-top-color: #8b5cf6;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.plans-grid {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 24px;\n  align-items: stretch;\n  padding-top: 16px;\n}\n@media (min-width: 768px) {\n  .plans-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (min-width: 1200px) {\n  .plans-grid {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n.plan-card {\n  position: relative;\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 20px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05), 0 4px 12px rgba(0, 0, 0, 0.03);\n  padding: 32px;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  min-height: 400px;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n:host-context(.dark) .plan-card {\n  background: rgba(30, 41, 59, 0.8);\n  backdrop-filter: blur(20px);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 20px;\n}\n.plan-card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);\n}\n:host-context(.dark) .plan-card:hover {\n  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3);\n}\n.plan-card.popular {\n  border-color: rgba(99, 102, 241, 0.3);\n}\n:host-context(.dark) .plan-card.popular {\n  border-color: rgba(139, 92, 246, 0.3);\n}\n.plan-card.current {\n  background: rgba(99, 102, 241, 0.04);\n  border-color: rgba(99, 102, 241, 0.3);\n}\n:host-context(.dark) .plan-card.current {\n  background: rgba(99, 102, 241, 0.08);\n  border-color: rgba(99, 102, 241, 0.3);\n}\n.plan-card .popular-badge {\n  position: absolute;\n  top: -12px;\n  left: 50%;\n  transform: translateX(-50%);\n  padding: 6px 16px;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1 0%,\n      #8b5cf6 50%,\n      #a855f7 100%);\n  border-radius: 100px;\n  font-size: 11px;\n  font-weight: 700;\n  color: white;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);\n  white-space: nowrap;\n}\n.plan-card .plan-card-header {\n  margin-bottom: 24px;\n}\n.plan-card .plan-card-header h3 {\n  font-size: 24px;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 4px;\n}\n:host-context(.dark) .plan-card .plan-card-header h3 {\n  color: #ffffff;\n}\n.plan-card .plan-card-header .plan-description {\n  font-size: 14px;\n  color: #94a3b8;\n  margin: 0;\n}\n:host-context(.dark) .plan-card .plan-card-header .plan-description {\n  color: rgba(255, 255, 255, 0.4);\n}\n.plan-card .plan-card-pricing {\n  margin-bottom: 24px;\n}\n.plan-card .plan-card-pricing .price-display {\n  display: flex;\n  align-items: baseline;\n  gap: 2px;\n}\n.plan-card .plan-card-pricing .price-display .currency {\n  font-size: 24px;\n  font-weight: 600;\n  color: #0f172a;\n}\n:host-context(.dark) .plan-card .plan-card-pricing .price-display .currency {\n  color: #ffffff;\n}\n.plan-card .plan-card-pricing .price-display .price-amount {\n  font-size: 56px;\n  font-weight: 800;\n  color: #0f172a;\n  line-height: 1;\n  letter-spacing: -0.02em;\n}\n:host-context(.dark) .plan-card .plan-card-pricing .price-display .price-amount {\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff 0%,\n      rgba(255, 255, 255, 0.85) 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.plan-card .plan-card-pricing .price-display .price-period {\n  font-size: 16px;\n  color: #94a3b8;\n  margin-left: 4px;\n}\n:host-context(.dark) .plan-card .plan-card-pricing .price-display .price-period {\n  color: rgba(255, 255, 255, 0.4);\n}\n.plan-card .plan-card-pricing .price-display .price-label {\n  font-size: 28px;\n  font-weight: 700;\n  color: #0f172a;\n}\n:host-context(.dark) .plan-card .plan-card-pricing .price-display .price-label {\n  color: #ffffff;\n}\n.plan-card .plan-card-pricing .price-note {\n  font-size: 13px;\n  color: #94a3b8;\n  margin: 8px 0 0;\n}\n:host-context(.dark) .plan-card .plan-card-pricing .price-note {\n  color: rgba(255, 255, 255, 0.4);\n}\n.plan-card .plan-card-pricing.price-muted .price-amount {\n  font-size: 24px !important;\n  color: #94a3b8 !important;\n}\n.plan-card .plan-card-pricing.price-muted .currency {\n  font-size: 16px !important;\n  color: #94a3b8 !important;\n}\n.plan-card .plan-card-pricing.price-muted .price-period {\n  color: #94a3b8 !important;\n}\n:host-context(.dark) .plan-card .plan-card-pricing.price-muted .price-amount,\n:host-context(.dark) .plan-card .plan-card-pricing.price-muted .currency,\n:host-context(.dark) .plan-card .plan-card-pricing.price-muted .price-period {\n  color: rgba(255, 255, 255, 0.4) !important;\n}\n.plan-card .plan-addon-line {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 14px;\n  margin-top: 6px;\n}\n.plan-card .plan-addon-line .addon-plus {\n  font-weight: 700;\n  color: #10b981;\n}\n.plan-card .plan-addon-line .addon-amount {\n  font-weight: 700;\n  color: #10b981;\n}\n.plan-card .plan-addon-line .addon-label {\n  font-size: 12px;\n  color: #94a3b8;\n}\n:host-context(.dark) .plan-card .plan-addon-line .addon-label {\n  color: rgba(255, 255, 255, 0.4);\n}\n.plan-card .plan-estimated-total {\n  margin-top: 10px;\n  padding-top: 10px;\n  border-top: 1px solid #e2e8f0;\n}\n:host-context(.dark) .plan-card .plan-estimated-total {\n  border-color: rgba(255, 255, 255, 0.08);\n}\n.plan-card .plan-estimated-total .total-label {\n  display: block;\n  font-size: 11px;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: #94a3b8;\n  margin-bottom: 4px;\n}\n:host-context(.dark) .plan-card .plan-estimated-total .total-label {\n  color: rgba(255, 255, 255, 0.4);\n}\n.plan-card .plan-estimated-total .total-amount {\n  display: flex;\n  align-items: baseline;\n  gap: 2px;\n}\n.plan-card .plan-estimated-total .total-currency {\n  font-size: 20px;\n  font-weight: 600;\n  color: #0f172a;\n}\n:host-context(.dark) .plan-card .plan-estimated-total .total-currency {\n  color: #ffffff;\n}\n.plan-card .plan-estimated-total .total-number {\n  font-size: 36px;\n  font-weight: 800;\n  color: #0f172a;\n  line-height: 1;\n  letter-spacing: -0.02em;\n}\n:host-context(.dark) .plan-card .plan-estimated-total .total-number {\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff,\n      rgba(255, 255, 255, 0.85));\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.plan-card .plan-estimated-total .total-period {\n  font-size: 14px;\n  color: #94a3b8;\n  margin-left: 2px;\n}\n:host-context(.dark) .plan-card .plan-estimated-total .total-period {\n  color: rgba(255, 255, 255, 0.4);\n}\n.plan-card .plan-discount-chip {\n  display: inline-flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 4px 6px;\n  padding: 6px 12px;\n  margin-bottom: auto;\n  background: rgba(16, 185, 129, 0.08);\n  border-radius: 8px;\n  font-size: 13px;\n}\n:host-context(.dark) .plan-card .plan-discount-chip {\n  background: rgba(16, 185, 129, 0.12);\n}\n.plan-card .plan-discount-chip .discount-chip-value {\n  font-weight: 600;\n  color: #059669;\n}\n:host-context(.dark) .plan-card .plan-discount-chip .discount-chip-value {\n  color: #34d399;\n}\n.plan-card .plan-discount-chip .discount-chip-context {\n  color: #94a3b8;\n  font-size: 12px;\n}\n:host-context(.dark) .plan-card .plan-discount-chip .discount-chip-context {\n  color: rgba(255, 255, 255, 0.4);\n}\n.plan-card .plan-card-btn {\n  width: 100%;\n  padding: 16px 24px;\n  font-size: 15px;\n  font-weight: 600;\n  border-radius: 14px;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  border: none;\n}\n.plan-card .plan-card-btn.btn-primary {\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1 0%,\n      #8b5cf6 50%,\n      #a855f7 100%);\n  color: white;\n}\n.plan-card .plan-card-btn.btn-primary:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(99, 102, 241, 0.4);\n}\n.plan-card .plan-card-btn.btn-secondary {\n  background: rgba(99, 102, 241, 0.08);\n  color: #8b5cf6;\n  border: 1px solid rgba(99, 102, 241, 0.2);\n}\n:host-context(.dark) .plan-card .plan-card-btn.btn-secondary {\n  background: rgba(99, 102, 241, 0.15);\n  border-color: rgba(99, 102, 241, 0.3);\n}\n.plan-card .plan-card-btn.btn-secondary:hover:not(:disabled) {\n  background: rgba(99, 102, 241, 0.15);\n  border-color: rgba(99, 102, 241, 0.4);\n}\n.plan-card .plan-card-btn.btn-outline {\n  background: transparent;\n  color: #0f172a;\n  border: 1px solid #e2e8f0;\n}\n:host-context(.dark) .plan-card .plan-card-btn.btn-outline {\n  color: #ffffff;\n  border-color: rgba(255, 255, 255, 0.08);\n}\n.plan-card .plan-card-btn.btn-outline:hover:not(:disabled) {\n  background: rgba(99, 102, 241, 0.08);\n  border-color: rgba(99, 102, 241, 0.3);\n}\n.plan-card .plan-card-btn.btn-current {\n  background: rgba(16, 185, 129, 0.1);\n  color: #10b981;\n  border: 1px solid rgba(16, 185, 129, 0.2);\n  cursor: default;\n}\n:host-context(.dark) .plan-card .plan-card-btn.btn-current {\n  background: rgba(16, 185, 129, 0.15);\n  border-color: rgba(16, 185, 129, 0.3);\n}\n.plan-card .plan-card-btn:disabled:not(.btn-current) {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.back-nav {\n  display: flex;\n  justify-content: center;\n}\n.back-nav .btn-link {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 24px;\n  font-size: 14px;\n  font-weight: 600;\n  color: #94a3b8;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n:host-context(.dark) .back-nav .btn-link {\n  color: rgba(255, 255, 255, 0.4);\n}\n.back-nav .btn-link:hover {\n  color: #8b5cf6;\n}\n.back-nav .btn-link svg {\n  width: 18px;\n  height: 18px;\n}\n@media (max-width: 640px) {\n  .current-plan-card {\n    padding: 24px;\n  }\n  .current-plan-card .plan-info .plan-price .amount {\n    font-size: 36px;\n  }\n  .current-plan-card .plan-meta {\n    grid-template-columns: 1fr;\n    gap: 16px;\n  }\n  .plan-card .plan-card-pricing .price-display .price-amount {\n    font-size: 42px;\n  }\n  .interval-toggle button {\n    padding: 10px 20px;\n    font-size: 14px;\n  }\n}\n.slider-section {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 20px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05), 0 4px 12px rgba(0, 0, 0, 0.03);\n  padding: 28px 32px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n:host-context(.dark) .slider-section {\n  background: rgba(30, 41, 59, 0.8);\n  backdrop-filter: blur(20px);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 20px;\n}\n.slider-header {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.slider-label-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n.slider-label-row .slider-label {\n  font-size: 16px;\n  font-weight: 600;\n  color: #0f172a;\n}\n:host-context(.dark) .slider-label-row .slider-label {\n  color: #ffffff;\n}\n.slider-label-row .slider-value-pill {\n  padding: 6px 14px;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1 0%,\n      #8b5cf6 50%,\n      #a855f7 100%);\n  border-radius: 100px;\n  font-size: 14px;\n  font-weight: 700;\n  color: white;\n  white-space: nowrap;\n}\n.slider-hint {\n  font-size: 13px;\n  color: #94a3b8;\n  margin: 0;\n}\n:host-context(.dark) .slider-hint {\n  color: rgba(255, 255, 255, 0.4);\n}\n.slider-track-wrapper {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  overflow: visible;\n  padding: 12px 0;\n}\n.slider-input {\n  width: 100%;\n  height: 6px;\n  appearance: none;\n  -webkit-appearance: none;\n  border-radius: 100px;\n  cursor: pointer;\n  outline: none;\n  display: block;\n}\n.slider-input::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  width: 22px;\n  height: 22px;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1 0%,\n      #8b5cf6 50%,\n      #a855f7 100%);\n  border-radius: 50%;\n  box-shadow: 0 2px 8px rgba(99, 102, 241, 0.4);\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.slider-input::-webkit-slider-thumb:hover {\n  transform: scale(1.15);\n  box-shadow: 0 4px 16px rgba(99, 102, 241, 0.5);\n}\n.slider-input::-moz-range-thumb {\n  width: 22px;\n  height: 22px;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1 0%,\n      #8b5cf6 50%,\n      #a855f7 100%);\n  border-radius: 50%;\n  border: none;\n  box-shadow: 0 2px 8px rgba(99, 102, 241, 0.4);\n  cursor: pointer;\n}\n.slider-ticks {\n  display: flex;\n  justify-content: space-between;\n  padding: 0 2px;\n}\n.slider-ticks span {\n  font-size: 11px;\n  color: #94a3b8;\n  font-weight: 500;\n}\n:host-context(.dark) .slider-ticks span {\n  color: rgba(255, 255, 255, 0.4);\n}\n.plan-cost-chips {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n@media (min-width: 640px) {\n  .plan-cost-chips {\n    flex-wrap: nowrap;\n  }\n}\n.plan-cost-chip {\n  flex: 1;\n  min-width: 0;\n  padding: 16px 18px;\n  border-radius: 16px;\n  background: rgba(99, 102, 241, 0.04);\n  border: 1px solid #e2e8f0;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  position: relative;\n  overflow: hidden;\n}\n:host-context(.dark) .plan-cost-chip {\n  background: rgba(255, 255, 255, 0.03);\n  border-color: rgba(255, 255, 255, 0.08);\n}\n.plan-cost-chip.best-value {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(16, 185, 129, 0.08) 0%,\n      rgba(99, 102, 241, 0.08) 100%);\n  border-color: rgba(16, 185, 129, 0.3);\n}\n:host-context(.dark) .plan-cost-chip.best-value {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(16, 185, 129, 0.12) 0%,\n      rgba(99, 102, 241, 0.12) 100%);\n  border-color: rgba(16, 185, 129, 0.4);\n}\n.plan-cost-chip.best-value .chip-plan-name {\n  color: #10b981;\n}\n.plan-cost-chip .chip-plan-name {\n  font-size: 13px;\n  font-weight: 700;\n  color: #0f172a;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n:host-context(.dark) .plan-cost-chip .chip-plan-name {\n  color: #ffffff;\n}\n.plan-cost-chip .chip-cost-per-req {\n  font-size: 16px;\n  font-weight: 700;\n  color: #0f172a;\n}\n:host-context(.dark) .plan-cost-chip .chip-cost-per-req {\n  color: #ffffff;\n}\n.plan-cost-chip .chip-cost-per-req span {\n  font-size: 12px;\n  font-weight: 500;\n  color: #94a3b8;\n}\n:host-context(.dark) .plan-cost-chip .chip-cost-per-req span {\n  color: rgba(255, 255, 255, 0.4);\n}\n.plan-cost-chip .chip-monthly-spend {\n  font-size: 13px;\n  color: #475569;\n}\n:host-context(.dark) .plan-cost-chip .chip-monthly-spend {\n  color: rgba(255, 255, 255, 0.7);\n}\n.plan-cost-chip .chip-monthly-spend span {\n  font-size: 11px;\n  color: #94a3b8;\n}\n:host-context(.dark) .plan-cost-chip .chip-monthly-spend span {\n  color: rgba(255, 255, 255, 0.4);\n}\n.plan-cost-chip .chip-best-value-label {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11px;\n  font-weight: 700;\n  color: #10b981;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  margin-top: 6px;\n}\n.plan-cost-chip .chip-best-value-label svg {\n  width: 13px;\n  height: 13px;\n}\n.slider-actions {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 16px;\n}\n.btn-api-breakdown {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 8px 12px;\n  font-size: 13px;\n  font-weight: 600;\n  border-radius: 10px;\n  cursor: pointer;\n  background: transparent;\n  color: #8b5cf6;\n  border: none;\n  text-decoration: none;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n:host-context(.dark) .btn-api-breakdown {\n  color: #8b5cf6;\n}\n.btn-api-breakdown:hover:not(:disabled) {\n  text-decoration: underline;\n  color: rgb(111.4837209302, 53.3348837209, 243.8651162791);\n}\n:host-context(.dark) .btn-api-breakdown:hover:not(:disabled) {\n  color: rgb(180.2744186047, 149.9976744186, 249.2023255814);\n}\n.api-breakdown-section {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 20px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05), 0 4px 12px rgba(0, 0, 0, 0.03);\n  padding: 28px 32px;\n  margin-top: 24px;\n}\n:host-context(.dark) .api-breakdown-section {\n  background: rgba(30, 41, 59, 0.8);\n  backdrop-filter: blur(20px);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 20px;\n}\n.api-breakdown-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.api-breakdown-header h3 {\n  font-size: 18px;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n}\n:host-context(.dark) .api-breakdown-header h3 {\n  color: #ffffff;\n}\n.api-breakdown-header .btn-sm {\n  padding: 8px 16px;\n  font-size: 13px;\n}\n.api-breakdown-empty {\n  padding: 32px;\n  text-align: center;\n  color: #94a3b8;\n  font-size: 14px;\n}\n:host-context(.dark) .api-breakdown-empty {\n  color: rgba(255, 255, 255, 0.4);\n}\n.api-breakdown-table-wrapper {\n  overflow-x: auto;\n}\n.api-breakdown-filters {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  align-items: center;\n  margin-bottom: 16px;\n}\n.api-breakdown-filter-select {\n  padding: 10px 14px;\n  font-size: 14px;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  background: #ffffff;\n  color: #0f172a;\n  min-width: 160px;\n}\n:host-context(.dark) .api-breakdown-filter-select {\n  border-color: rgba(255, 255, 255, 0.08);\n  background: #1e293b;\n  color: #ffffff;\n}\n.api-breakdown-search-input {\n  width: 100%;\n  max-width: 400px;\n  flex: 1;\n  min-width: 200px;\n  padding: 10px 14px;\n  font-size: 14px;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  background: #ffffff;\n  color: #0f172a;\n}\n.api-breakdown-search-input::placeholder {\n  color: #94a3b8;\n}\n:host-context(.dark) .api-breakdown-search-input {\n  border-color: rgba(255, 255, 255, 0.08);\n  background: #1e293b;\n  color: #ffffff;\n}\n:host-context(.dark) .api-breakdown-search-input::placeholder {\n  color: rgba(255, 255, 255, 0.4);\n}\n.api-breakdown-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 14px;\n}\n.api-breakdown-table th,\n.api-breakdown-table td {\n  padding: 12px 16px;\n  text-align: left;\n  border-bottom: 1px solid #e2e8f0;\n}\n:host-context(.dark) .api-breakdown-table th,\n:host-context(.dark) .api-breakdown-table td {\n  border-color: rgba(255, 255, 255, 0.08);\n}\n.api-breakdown-table th {\n  font-weight: 600;\n  color: #475569;\n}\n:host-context(.dark) .api-breakdown-table th {\n  color: rgba(255, 255, 255, 0.7);\n}\n.api-breakdown-table td {\n  color: #0f172a;\n}\n:host-context(.dark) .api-breakdown-table td {\n  color: #ffffff;\n}\n.api-breakdown-table tbody tr:not(.api-breakdown-category-row):hover {\n  background: rgba(99, 102, 241, 0.04);\n}\n:host-context(.dark) .api-breakdown-table tbody tr:not(.api-breakdown-category-row):hover {\n  background: rgba(255, 255, 255, 0.04);\n}\n.api-breakdown-table tbody tr.cursor-pointer {\n  cursor: pointer;\n}\n.api-breakdown-table .api-breakdown-category-row {\n  background: rgba(99, 102, 241, 0.08);\n  font-weight: 600;\n  font-size: 13px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.api-breakdown-table .api-breakdown-category-row td {\n  padding: 10px 16px;\n  border-bottom: 1px solid #e2e8f0;\n}\n:host-context(.dark) .api-breakdown-table .api-breakdown-category-row {\n  background: rgba(255, 255, 255, 0.06);\n}\n:host-context(.dark) .api-breakdown-table .api-breakdown-category-row td {\n  border-color: rgba(255, 255, 255, 0.08);\n}\n.api-breakdown-footer {\n  margin-top: 20px;\n  padding-top: 16px;\n  border-top: 1px solid #e2e8f0;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 8px 20px;\n  font-size: 14px;\n}\n:host-context(.dark) .api-breakdown-footer {\n  border-color: rgba(255, 255, 255, 0.08);\n}\n.api-breakdown-footer .footer-label {\n  font-weight: 600;\n  color: #0f172a;\n}\n:host-context(.dark) .api-breakdown-footer .footer-label {\n  color: #ffffff;\n}\n.api-breakdown-footer .footer-plan {\n  color: #475569;\n}\n:host-context(.dark) .api-breakdown-footer .footer-plan {\n  color: rgba(255, 255, 255, 0.7);\n}\n.plan-card.best-value-card {\n  border-color: rgba(16, 185, 129, 0.35);\n  box-shadow: 0 0 0 2px rgba(16, 185, 129, 0.15);\n}\n:host-context(.dark) .plan-card.best-value-card {\n  border-color: rgba(16, 185, 129, 0.4);\n  box-shadow: 0 0 0 2px rgba(16, 185, 129, 0.2);\n}\n.best-value-badge {\n  position: absolute;\n  top: -12px;\n  left: 50%;\n  transform: translateX(-50%);\n  padding: 6px 16px;\n  background:\n    linear-gradient(\n      135deg,\n      #10b981 0%,\n      #059669 100%);\n  border-radius: 100px;\n  font-size: 11px;\n  font-weight: 700;\n  color: white;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);\n  white-space: nowrap;\n}\n.ui-version-toggle {\n  position: fixed;\n  bottom: 24px;\n  right: 24px;\n  z-index: 9999;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 12px;\n  background: rgba(0, 0, 0, 0.8);\n  backdrop-filter: blur(10px);\n  border-radius: 12px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);\n}\n.ui-version-toggle .toggle-label {\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.6);\n  font-weight: 500;\n}\n.ui-version-toggle .version-btn {\n  padding: 6px 12px;\n  font-size: 12px;\n  font-weight: 600;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.2s;\n  background: transparent;\n  color: rgba(255, 255, 255, 0.6);\n}\n.ui-version-toggle .version-btn:hover {\n  color: white;\n}\n.ui-version-toggle .version-btn.active {\n  background: #6366f1;\n  color: white;\n}\n.subscription-page-v2 {\n  min-height: 100vh;\n  background: #fafafa;\n  padding: 48px 24px;\n}\n:host-context(.dark) .subscription-page-v2 {\n  background: #0a0a0a;\n}\n.v2-container {\n  max-width: 960px;\n  margin: 0 auto;\n}\n.v2-header {\n  text-align: center;\n  margin-bottom: 48px;\n}\n.v2-header h1 {\n  font-size: 32px;\n  font-weight: 600;\n  color: #111;\n  margin: 0 0 8px;\n  letter-spacing: -0.02em;\n}\n:host-context(.dark) .v2-header h1 {\n  color: #fff;\n}\n.v2-header p {\n  font-size: 16px;\n  color: #666;\n  margin: 0;\n}\n:host-context(.dark) .v2-header p {\n  color: #888;\n}\n.v2-current-banner {\n  margin-bottom: 48px;\n  padding: 24px;\n  background: #fff;\n  border: 1px solid #e5e5e5;\n  border-radius: 12px;\n}\n:host-context(.dark) .v2-current-banner {\n  background: #141414;\n  border-color: #262626;\n}\n.v2-current-banner .banner-content {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n.v2-current-banner .banner-info {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.v2-current-banner .banner-info .current-label {\n  font-size: 12px;\n  font-weight: 500;\n  color: #10b981;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.v2-current-banner .banner-info .plan-name {\n  font-size: 18px;\n  font-weight: 600;\n  color: #111;\n}\n:host-context(.dark) .v2-current-banner .banner-info .plan-name {\n  color: #fff;\n}\n.v2-current-banner .banner-info .plan-price {\n  font-size: 14px;\n  color: #666;\n}\n:host-context(.dark) .v2-current-banner .banner-info .plan-price {\n  color: #888;\n}\n.v2-current-banner .banner-actions {\n  display: flex;\n  gap: 8px;\n}\n.v2-btn {\n  padding: 10px 20px;\n  font-size: 14px;\n  font-weight: 500;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.v2-btn.v2-btn-primary {\n  background: #111;\n  color: #fff;\n  border: none;\n}\n:host-context(.dark) .v2-btn.v2-btn-primary {\n  background: #fff;\n  color: #111;\n}\n.v2-btn.v2-btn-primary:hover {\n  opacity: 0.9;\n}\n.v2-btn.v2-btn-outline {\n  background: transparent;\n  color: #111;\n  border: 1px solid #e5e5e5;\n}\n:host-context(.dark) .v2-btn.v2-btn-outline {\n  color: #fff;\n  border-color: #333;\n}\n.v2-btn.v2-btn-outline:hover {\n  background: #f5f5f5;\n}\n:host-context(.dark) .v2-btn.v2-btn-outline:hover {\n  background: #1a1a1a;\n}\n.v2-interval-toggle {\n  display: flex;\n  justify-content: center;\n  gap: 4px;\n  margin-bottom: 40px;\n  padding: 4px;\n  background: #f0f0f0;\n  border-radius: 10px;\n  width: fit-content;\n  margin-left: auto;\n  margin-right: auto;\n}\n:host-context(.dark) .v2-interval-toggle {\n  background: #1a1a1a;\n}\n.v2-interval-toggle button {\n  position: relative;\n  padding: 10px 24px;\n  font-size: 14px;\n  font-weight: 500;\n  color: #666;\n  background: transparent;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n:host-context(.dark) .v2-interval-toggle button {\n  color: #888;\n}\n.v2-interval-toggle button.active {\n  background: #fff;\n  color: #111;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n:host-context(.dark) .v2-interval-toggle button.active {\n  background: #262626;\n  color: #fff;\n}\n.v2-interval-toggle button .save-tag {\n  position: absolute;\n  top: -8px;\n  right: -8px;\n  padding: 2px 6px;\n  font-size: 10px;\n  font-weight: 600;\n  color: #fff;\n  background: #10b981;\n  border-radius: 4px;\n}\n.v2-loading {\n  display: flex;\n  justify-content: center;\n  padding: 80px;\n}\n.v2-loading .v2-spinner {\n  width: 32px;\n  height: 32px;\n  border: 2px solid #e5e5e5;\n  border-top-color: #111;\n  border-radius: 50%;\n  animation: spin 0.6s linear infinite;\n}\n:host-context(.dark) .v2-loading .v2-spinner {\n  border-color: #333;\n  border-top-color: #fff;\n}\n.v2-plans-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.v2-plan-card {\n  position: relative;\n  padding: 24px;\n  background: #fff;\n  border: 1px solid #e5e5e5;\n  border-radius: 12px;\n  transition: all 0.15s;\n}\n:host-context(.dark) .v2-plan-card {\n  background: #141414;\n  border-color: #262626;\n}\n.v2-plan-card:hover {\n  border-color: #d0d0d0;\n}\n:host-context(.dark) .v2-plan-card:hover {\n  border-color: #333;\n}\n.v2-plan-card.recommended {\n  border-color: #111;\n}\n:host-context(.dark) .v2-plan-card.recommended {\n  border-color: #fff;\n}\n.v2-plan-card.current {\n  background: #f9fafb;\n  border-color: #10b981;\n}\n:host-context(.dark) .v2-plan-card.current {\n  background: #0f1f1a;\n  border-color: #10b981;\n}\n.v2-plan-card .v2-card-badge {\n  position: absolute;\n  top: -10px;\n  left: 50%;\n  transform: translateX(-50%);\n  padding: 4px 12px;\n  font-size: 11px;\n  font-weight: 600;\n  color: #fff;\n  background: #111;\n  border-radius: 4px;\n}\n:host-context(.dark) .v2-plan-card .v2-card-badge {\n  background: #fff;\n  color: #111;\n}\n.v2-plan-card .v2-card-header {\n  margin-bottom: 20px;\n}\n.v2-plan-card .v2-card-header h3 {\n  font-size: 18px;\n  font-weight: 600;\n  color: #111;\n  margin: 0 0 8px;\n}\n:host-context(.dark) .v2-plan-card .v2-card-header h3 {\n  color: #fff;\n}\n.v2-plan-card .v2-card-header .v2-price .amount {\n  font-size: 32px;\n  font-weight: 700;\n  color: #111;\n}\n:host-context(.dark) .v2-plan-card .v2-card-header .v2-price .amount {\n  color: #fff;\n}\n.v2-plan-card .v2-card-header .v2-price .period {\n  font-size: 14px;\n  color: #666;\n}\n:host-context(.dark) .v2-plan-card .v2-card-header .v2-price .period {\n  color: #888;\n}\n.v2-plan-card .v2-card-header .v2-price .amount-text {\n  font-size: 16px;\n  font-weight: 500;\n  color: #666;\n}\n:host-context(.dark) .v2-plan-card .v2-card-header .v2-price .amount-text {\n  color: #888;\n}\n.v2-plan-card .v2-card-discount {\n  display: inline-flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 4px 6px;\n  padding: 6px 12px;\n  margin-bottom: 16px;\n  background: rgba(16, 185, 129, 0.1);\n  border-radius: 6px;\n  font-size: 13px;\n}\n:host-context(.dark) .v2-plan-card .v2-card-discount {\n  background: rgba(16, 185, 129, 0.15);\n}\n.v2-plan-card .v2-card-discount .discount-value {\n  font-weight: 600;\n  color: #059669;\n}\n:host-context(.dark) .v2-plan-card .v2-card-discount .discount-value {\n  color: #34d399;\n}\n.v2-plan-card .v2-card-discount .discount-context {\n  font-size: 12px;\n  color: #64748b;\n}\n:host-context(.dark) .v2-plan-card .v2-card-discount .discount-context {\n  color: #94a3b8;\n}\n.v2-plan-card .v2-card-btn {\n  width: 100%;\n  padding: 12px;\n  font-size: 14px;\n  font-weight: 500;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.15s;\n  background: #111;\n  color: #fff;\n  border: none;\n}\n:host-context(.dark) .v2-plan-card .v2-card-btn {\n  background: #fff;\n  color: #111;\n}\n.v2-plan-card .v2-card-btn:hover:not(:disabled) {\n  opacity: 0.9;\n}\n.v2-plan-card .v2-card-btn.current {\n  background: #f0fdf4;\n  color: #10b981;\n  cursor: default;\n}\n:host-context(.dark) .v2-plan-card .v2-card-btn.current {\n  background: #052e1f;\n  color: #10b981;\n}\n.v2-plan-card .v2-card-btn:disabled:not(.current) {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.v2-back-link {\n  display: flex;\n  justify-content: center;\n  margin-top: 32px;\n}\n.v2-back-link button {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 16px;\n  font-size: 14px;\n  color: #666;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n:host-context(.dark) .v2-back-link button {\n  color: #888;\n}\n.v2-back-link button:hover {\n  color: #111;\n}\n:host-context(.dark) .v2-back-link button:hover {\n  color: #fff;\n}\n.v2-back-link button svg {\n  width: 16px;\n}\n@keyframes scaleIn {\n  from {\n    opacity: 0;\n    transform: scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n.privy-modal-backdrop {\n  position: fixed;\n  inset: 0;\n  z-index: 9999;\n  background: rgba(15, 23, 42, 0.4);\n  backdrop-filter: blur(8px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 24px;\n  animation: fadeIn 0.2s ease-out;\n}\n:host-context(.dark) .privy-modal-backdrop {\n  background: rgba(15, 23, 42, 0.6);\n}\n.privy-modal-container {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 20px;\n  width: 100%;\n  max-width: 440px;\n  padding: 32px;\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);\n  position: relative;\n  animation: slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);\n}\n:host-context(.dark) .privy-modal-container {\n  background: #1e293b;\n  border-color: rgba(255, 255, 255, 0.08);\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);\n}\n.privy-modal-close {\n  position: absolute;\n  top: 16px;\n  right: 16px;\n  background: transparent;\n  border: none;\n  color: #94a3b8;\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n:host-context(.dark) .privy-modal-close {\n  color: rgba(255, 255, 255, 0.4);\n}\n.privy-modal-close:hover {\n  background: rgba(15, 23, 42, 0.05);\n  color: #0f172a;\n}\n:host-context(.dark) .privy-modal-close:hover {\n  background: rgba(255, 255, 255, 0.1);\n  color: #ffffff;\n}\n.privy-modal-close svg {\n  width: 20px;\n  height: 20px;\n}\n.privy-modal-header {\n  text-align: center;\n  margin-bottom: 32px;\n}\n.privy-modal-header .privy-modal-icon {\n  width: 56px;\n  height: 56px;\n  margin: 0 auto 20px;\n  background: rgba(139, 92, 246, 0.1);\n  border-radius: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.privy-modal-header .privy-modal-icon svg {\n  width: 28px;\n  height: 28px;\n}\n.privy-modal-header h2 {\n  font-size: 20px;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 4px;\n  line-height: 1.3;\n}\n:host-context(.dark) .privy-modal-header h2 {\n  color: #ffffff;\n}\n.privy-modal-header .privy-modal-category {\n  font-size: 14px;\n  font-weight: 500;\n  color: #475569;\n  margin: 0;\n}\n:host-context(.dark) .privy-modal-header .privy-modal-category {\n  color: rgba(255, 255, 255, 0.7);\n}\n.privy-modal-content {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  margin-bottom: 32px;\n}\n.privy-detail-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n.privy-detail-group label {\n  display: block;\n  font-size: 13px;\n  font-weight: 600;\n  color: #475569;\n  margin-bottom: 8px;\n}\n:host-context(.dark) .privy-detail-group label {\n  color: rgba(255, 255, 255, 0.7);\n}\n.privy-detail-group .privy-code-block {\n  background: rgba(15, 23, 42, 0.04);\n  border: 1px solid rgba(15, 23, 42, 0.08);\n  border-radius: 12px;\n  padding: 12px 16px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n:host-context(.dark) .privy-detail-group .privy-code-block {\n  background: rgba(255, 255, 255, 0.03);\n  border-color: rgba(255, 255, 255, 0.08);\n}\n.privy-detail-group .privy-code-block:hover {\n  background: rgba(15, 23, 42, 0.06);\n  border-color: rgba(15, 23, 42, 0.12);\n}\n:host-context(.dark) .privy-detail-group .privy-code-block:hover {\n  background: rgba(255, 255, 255, 0.06);\n  border-color: rgba(255, 255, 255, 0.12);\n}\n.privy-detail-group .privy-code-block:hover .privy-copy-btn {\n  color: #8b5cf6;\n}\n.privy-detail-group .privy-code-block span {\n  font-size: 13px;\n  font-family:\n    ui-monospace,\n    SFMono-Regular,\n    Menlo,\n    Monaco,\n    Consolas,\n    monospace;\n  color: #0f172a;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n:host-context(.dark) .privy-detail-group .privy-code-block span {\n  color: #ffffff;\n}\n.privy-detail-group .privy-copy-btn {\n  background: transparent;\n  border: none;\n  color: #94a3b8;\n  cursor: pointer;\n  flex-shrink: 0;\n  padding: 4px;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n:host-context(.dark) .privy-detail-group .privy-copy-btn {\n  color: rgba(255, 255, 255, 0.4);\n}\n.privy-detail-group .privy-copy-btn svg {\n  width: 16px;\n  height: 16px;\n}\n.privy-detail-group .privy-badge {\n  display: inline-flex;\n  padding: 8px 12px;\n  background: rgba(99, 102, 241, 0.08);\n  color: #8b5cf6;\n  border-radius: 10px;\n  font-size: 13px;\n  font-weight: 600;\n}\n:host-context(.dark) .privy-detail-group .privy-badge {\n  background: rgba(99, 102, 241, 0.15);\n}\n.privy-detail-group .privy-badge.privy-badge-outline {\n  background: transparent;\n  border: 1px solid #e2e8f0;\n  color: #475569;\n}\n:host-context(.dark) .privy-detail-group .privy-badge.privy-badge-outline {\n  border-color: rgba(255, 255, 255, 0.08);\n  color: rgba(255, 255, 255, 0.7);\n}\n.pricing-group {\n  margin-top: 4px;\n  padding-top: 24px;\n  border-top: 1px solid #e2e8f0;\n}\n:host-context(.dark) .pricing-group {\n  border-color: rgba(255, 255, 255, 0.08);\n}\n.privy-price-display {\n  display: flex;\n  align-items: baseline;\n  gap: 6px;\n}\n.privy-price-display .privy-price-amount {\n  font-size: 32px;\n  font-weight: 800;\n  color: #0f172a;\n  line-height: 1;\n}\n:host-context(.dark) .privy-price-display .privy-price-amount {\n  color: #ffffff;\n}\n.privy-price-display .privy-price-currency {\n  font-size: 12px;\n  font-weight: 700;\n  color: #8b5cf6;\n}\n.privy-price-display .privy-price-currency .muted {\n  color: #94a3b8;\n  font-weight: 500;\n}\n:host-context(.dark) .privy-price-display .privy-price-currency .muted {\n  color: rgba(255, 255, 255, 0.4);\n}\n.privy-modal-footer .privy-btn-primary {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 16px;\n  background: #0f172a;\n  color: #ffffff;\n  border: none;\n  border-radius: 14px;\n  font-size: 16px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n:host-context(.dark) .privy-modal-footer .privy-btn-primary {\n  background: #ffffff;\n  color: #0f172a;\n}\n.privy-modal-footer .privy-btn-primary:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(15, 23, 42, 0.2);\n}\n:host-context(.dark) .privy-modal-footer .privy-btn-primary:hover:not(:disabled) {\n  box-shadow: 0 8px 20px rgba(255, 255, 255, 0.15);\n}\n.privy-modal-footer .privy-btn-primary:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.privy-modal-footer .privy-btn-primary svg {\n  width: 18px;\n  height: 18px;\n}\n@keyframes slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px) scale(0.98);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n/*# sourceMappingURL=subscription-plans.component.css.map */\n'] }]
  }], () => [{ type: SubscriptionService }, { type: Router }, { type: ActivatedRoute }, { type: TranslocoService }, { type: MatSnackBar }], { plansExploreAnchor: [{
    type: ViewChild,
    args: ["plansExploreAnchor"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SubscriptionPlansComponent, { className: "SubscriptionPlansComponent", filePath: "src/app/modules/subscription-plans/subscription-plans.component.ts", lineNumber: 43 });
})();

// src/app/modules/subscription-plans/subscription-plans.routes.ts
var subscription_plans_routes_default = [
  {
    path: "",
    component: SubscriptionPlansComponent
  }
];
export {
  subscription_plans_routes_default as default
};
//# sourceMappingURL=chunk-ZCE6VLCI.js.map
