import {
  BillingRequiredDialogComponent
} from "./chunk-KGON7EY3.js";
import {
  SubscriptionService
} from "./chunk-5YXXIWLJ.js";
import {
  AuthRequiredGateService
} from "./chunk-Q3ASOYRZ.js";
import {
  extractClientSettingsPayload,
  invoiceBillingDetailsComplete
} from "./chunk-FY4LH25C.js";
import {
  MatSnackBar,
  MatSnackBarModule
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
import {
  UserService
} from "./chunk-K4AG7N5H.js";
import "./chunk-BCBZJBUY.js";
import "./chunk-GH366QKW.js";
import "./chunk-EVWXSBKG.js";
import "./chunk-UUIVQBYS.js";
import "./chunk-M5KDIZH5.js";
import "./chunk-OIBNGD5S.js";
import "./chunk-WOW6NB5H.js";
import "./chunk-YSJP7SXK.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-CQIQSUBU.js";
import "./chunk-J762DGD5.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-DVRFI3SJ.js";
import {
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
  CommonModule,
  Component,
  DatePipe,
  DecimalPipe,
  EventEmitter,
  Input,
  LowerCasePipe,
  NgClass,
  NgForOf,
  NgIf,
  Output,
  Subject,
  ViewChild,
  ViewEncapsulation,
  catchError,
  of,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵpureFunction4,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
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
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-PNPEHISK.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-F5M2C4EZ.js";

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
var _c0 = (a0) => ({ multiplier: a0 });
var _c1 = (a0, a1, a2) => ({ payUsd: a0, receiveUsd: a1, multiplier: a2 });
var _c2 = (a0, a1) => ({ multiplier: a0, payUsd: a1 });
function PlanChangeDialogComponent_div_0_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 32);
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
    \u0275\u0275elementStart(0, "div", 33)(1, "mat-icon", 31);
    \u0275\u0275text(2, "savings");
    \u0275\u0275elementEnd();
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
    \u0275\u0275elementStart(0, "span", 40);
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
    \u0275\u0275elementStart(0, "div", 37)(1, "mat-icon", 38);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, PlanChangeDialogComponent_div_0_div_19_ng_container_1_div_1_span_6_Template, 2, 1, "span", 39);
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
    \u0275\u0275template(1, PlanChangeDialogComponent_div_0_div_19_ng_container_1_div_1_Template, 7, 4, "div", 36);
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
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275template(1, PlanChangeDialogComponent_div_0_div_19_ng_container_1_Template, 2, 1, "ng-container", 35);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.formattedPlan == null ? null : ctx_r1.formattedPlan.benefits);
  }
}
function PlanChangeDialogComponent_div_0_div_20_button_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 44);
    \u0275\u0275listener("click", function PlanChangeDialogComponent_div_0_div_20_button_17_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onCompareDiscountedPlans());
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-icon", 5);
    \u0275\u0275text(5, "arrow_forward");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "subscriptionPlans.dialog.compareDiscountedPlansShort"));
  }
}
function PlanChangeDialogComponent_div_0_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41)(1, "p", 42);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 34)(5, "div", 37)(6, "mat-icon", 38);
    \u0275\u0275text(7, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 37)(12, "mat-icon", 38);
    \u0275\u0275text(13, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span");
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(17, PlanChangeDialogComponent_div_0_div_20_button_17_Template, 6, 3, "button", 43);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, "subscriptionPlans.dialog.includedFallback"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 6, "subscriptionPlans.dialog.includedFallbackBullet1"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 8, "subscriptionPlans.dialog.includedFallbackBullet2"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.hasBetterDiscountOptions);
  }
}
function PlanChangeDialogComponent_div_0_ng_container_26_p_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 50);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275pipe(3, "number");
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" ", \u0275\u0275pipeBind1(2, 3, "subscriptionPlans.dialog.monthlyEquivalent"), ": $", \u0275\u0275pipeBind2(3, 5, ctx_r1.formattedPlan == null ? null : ctx_r1.formattedPlan.amountByMonth, "1.2-2"), "/", \u0275\u0275pipeBind1(4, 8, "subscriptionPlans.interval.month"), " ");
  }
}
function PlanChangeDialogComponent_div_0_ng_container_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 45)(2, "span", 46);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 47);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementStart(8, "span", 48);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(11, PlanChangeDialogComponent_div_0_ng_container_26_p_11_Template, 5, 10, "p", 49);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", ctx_r1.formattedPlan == null ? null : ctx_r1.formattedPlan.name, " ", \u0275\u0275pipeBind1(4, 5, "subscriptionPlans.dialog.planLabel"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(7, 7, ctx_r1.formattedPlan == null ? null : ctx_r1.formattedPlan.amountByMonth, "1.0-0"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("/", \u0275\u0275pipeBind1(10, 10, "subscriptionPlans.interval.month"), "");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (ctx_r1.formattedPlan == null ? null : ctx_r1.formattedPlan.interval) === "year");
  }
}
function PlanChangeDialogComponent_div_0_ng_template_27_p_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 57);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "subscriptionPlans.billedAnnually"), " ");
  }
}
function PlanChangeDialogComponent_div_0_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 51);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 52)(4, "span", 53);
    \u0275\u0275text(5, "$");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 54);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 55);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "p", 50);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, PlanChangeDialogComponent_div_0_ng_template_27_p_15_Template, 3, 3, "p", 56);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 6, "subscriptionPlans.requestSlider.estimatedTotal"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(8, 8, ctx_r1.formattedPlan == null ? null : ctx_r1.formattedPlan.estimatedTotal, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("/", \u0275\u0275pipeBind1(11, 11, "subscriptionPlans.interval.month"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ~", ctx_r1.formatNumber(ctx_r1.formattedPlan == null ? null : ctx_r1.formattedPlan.requestsPerMonth), " ", \u0275\u0275pipeBind1(14, 13, "subscriptionPlans.requestSlider.requests"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (ctx_r1.formattedPlan == null ? null : ctx_r1.formattedPlan.interval) === "year");
  }
}
function PlanChangeDialogComponent_div_0_p_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 58);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "subscriptionPlans.dialog.usageNote"), " ");
  }
}
function PlanChangeDialogComponent_div_0_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59)(1, "div", 60)(2, "div", 61)(3, "mat-icon", 5);
    \u0275\u0275text(4, "local_offer");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 62)(6, "p", 63);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 64);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 65);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "transloco");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(8, 3, "subscriptionPlans.dialog.bringBack.badge", \u0275\u0275pureFunction1(12, _c0, ctx_r1.bringBackMultiplier)), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(11, 6, "subscriptionPlans.dialog.bringBack.payReceive", \u0275\u0275pureFunction3(14, _c1, ctx_r1.bringBackPayUsd, ctx_r1.bringBackReceiveUsd, ctx_r1.bringBackMultiplier)), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(14, 9, "subscriptionPlans.dialog.bringBack.note", \u0275\u0275pureFunction2(18, _c2, ctx_r1.bringBackMultiplier, ctx_r1.bringBackPayUsd)), " ");
  }
}
function PlanChangeDialogComponent_div_0_div_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66)(1, "div", 67)(2, "span", 68);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 69);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "mat-icon", 70);
    \u0275\u0275text(8, "arrow_forward");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 71)(10, "span", 68);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 69);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 4, "subscriptionPlans.dialog.from"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((ctx_r1.currentPlan == null ? null : ctx_r1.currentPlan.name) || "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 6, "subscriptionPlans.dialog.to"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.formattedPlan == null ? null : ctx_r1.formattedPlan.name);
  }
}
function PlanChangeDialogComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275listener("click", function PlanChangeDialogComponent_div_0_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onBackdropClick($event));
    });
    \u0275\u0275elementStart(1, "div", 3)(2, "button", 4);
    \u0275\u0275listener("click", function PlanChangeDialogComponent_div_0_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCancel());
    });
    \u0275\u0275elementStart(3, "mat-icon", 5);
    \u0275\u0275text(4, "close");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 6)(6, "div", 7)(7, "div", 8)(8, "h2", 9);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, PlanChangeDialogComponent_div_0_span_10_Template, 4, 5, "span", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 11);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, PlanChangeDialogComponent_div_0_div_14_Template, 6, 3, "div", 12);
    \u0275\u0275elementStart(15, "div", 13)(16, "h3", 14);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, PlanChangeDialogComponent_div_0_div_19_Template, 2, 1, "div", 15)(20, PlanChangeDialogComponent_div_0_div_20_Template, 18, 10, "div", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 17)(22, "h3", 14);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 18);
    \u0275\u0275template(26, PlanChangeDialogComponent_div_0_ng_container_26_Template, 12, 12, "ng-container", 19)(27, PlanChangeDialogComponent_div_0_ng_template_27_Template, 16, 15, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275template(29, PlanChangeDialogComponent_div_0_p_29_Template, 3, 3, "p", 20)(30, PlanChangeDialogComponent_div_0_div_30_Template, 15, 21, "div", 21);
    \u0275\u0275elementStart(31, "div", 22)(32, "div")(33, "span", 23);
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "span", 24);
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div")(40, "span", 23);
    \u0275\u0275text(41);
    \u0275\u0275pipe(42, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "span", 24);
    \u0275\u0275text(44);
    \u0275\u0275pipe(45, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(46, PlanChangeDialogComponent_div_0_div_46_Template, 15, 8, "div", 25);
    \u0275\u0275elementStart(47, "p", 26);
    \u0275\u0275text(48);
    \u0275\u0275pipe(49, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "div", 27)(51, "button", 28);
    \u0275\u0275listener("click", function PlanChangeDialogComponent_div_0_Template_button_click_51_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCancel());
    });
    \u0275\u0275text(52);
    \u0275\u0275pipe(53, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "button", 29);
    \u0275\u0275listener("click", function PlanChangeDialogComponent_div_0_Template_button_click_54_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onConfirm());
    });
    \u0275\u0275text(55);
    \u0275\u0275pipe(56, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "div", 30)(58, "mat-icon", 31);
    \u0275\u0275text(59, "lock");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "span");
    \u0275\u0275text(61);
    \u0275\u0275pipe(62, "transloco");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const dialogUsageHero_r5 = \u0275\u0275reference(28);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formattedPlan == null ? null : ctx_r1.formattedPlan.name, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.formattedPlan == null ? null : ctx_r1.formattedPlan.interval);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 21, ctx_r1.reviewPlanTranslocoKey), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (ctx_r1.formattedPlan == null ? null : ctx_r1.formattedPlan.interval) === "year");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 23, "subscriptionPlans.dialog.whatsIncluded"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.hasMeaningfulBenefits);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.hasMeaningfulBenefits);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(24, 25, "subscriptionPlans.dialog.orderSummary"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !(ctx_r1.formattedPlan == null ? null : ctx_r1.formattedPlan.showUsageEstimateSummary))("ngIfElse", dialogUsageHero_r5);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.formattedPlan == null ? null : ctx_r1.formattedPlan.showUsageEstimateSummary);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showBringBackPromo);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(35, 27, "subscriptionPlans.dialog.starts"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(38, 29, ctx_r1.formattedPlan == null ? null : ctx_r1.formattedPlan.startDate, "mediumDate"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(42, 32, "subscriptionPlans.dialog.renews"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(45, 34, ctx_r1.formattedPlan == null ? null : ctx_r1.formattedPlan.endDate, "mediumDate"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.currentPlan);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(49, 37, "subscriptionPlans.dialog.cancelNote"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(53, 39, "subscriptionPlans.dialog.cancel"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(56, 41, ctx_r1.confirmActionTranslocoKey), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(62, 43, "subscriptionPlans.dialog.secureTransaction"));
  }
}
var PlanChangeDialogComponent = class _PlanChangeDialogComponent {
  constructor() {
    this.currentPlan = null;
    this.newPlan = null;
    this.allPlans = null;
    this.isOpen = false;
    this.requestsPerMonth = 0;
    this.bringBackOffer = null;
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
  get showBringBackPromo() {
    return Boolean(this.bringBackOffer?.eligible && this._isBringBackPromoPlan(this.newPlan));
  }
  get bringBackMultiplier() {
    return this.bringBackOffer?.multiplier || 2;
  }
  /**
   * Amount charged on the first invoice (usage estimate when present, else plan base).
   */
  get bringBackPayUsd() {
    const total = Number(this.formattedPlan?.estimatedTotal);
    if (Number.isFinite(total) && total > 0) {
      return Math.round(total);
    }
    const monthly = Number(this.formattedPlan?.amountByMonth);
    if (Number.isFinite(monthly) && monthly > 0) {
      return Math.round(monthly);
    }
    return Math.round(Number(this.newPlan?.amount) || 0);
  }
  get bringBackReceiveUsd() {
    return Math.round(this.bringBackPayUsd * this.bringBackMultiplier);
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
      showUsageEstimateSummary: this.requestsPerMonth > 0,
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
  _isBringBackPromoPlan(plan) {
    if (!plan) {
      return false;
    }
    const name = (plan.name || "").toLowerCase();
    return /\bbasic\b/.test(name) || name.includes("b\xE1sico") || /\bplus\b/.test(name) || /\bbusiness\b/.test(name) || name.includes("empresarial") || /\bsmart\s*basic\b/.test(name) || /\bsmart\s*plus\b/.test(name) || /\bsmart\s*business\b/.test(name);
  }
  static {
    this.\u0275fac = function PlanChangeDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PlanChangeDialogComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PlanChangeDialogComponent, selectors: [["plan-change-dialog"]], inputs: { currentPlan: "currentPlan", newPlan: "newPlan", allPlans: "allPlans", isOpen: "isOpen", requestsPerMonth: "requestsPerMonth", bringBackOffer: "bringBackOffer" }, outputs: { confirm: "confirm", cancel: "cancel", comparePlans: "comparePlans" }, features: [\u0275\u0275NgOnChangesFeature], decls: 1, vars: 1, consts: [["dialogUsageHero", ""], ["class", "dialog-backdrop fixed inset-0 z-50 flex items-center justify-center bg-stone-950/60 p-4 backdrop-blur-sm", 3, "click", 4, "ngIf"], [1, "dialog-backdrop", "fixed", "inset-0", "z-50", "flex", "items-center", "justify-center", "bg-stone-950/60", "p-4", "backdrop-blur-sm", 3, "click"], [1, "relative", "w-full", "max-w-3xl", "overflow-hidden", "rounded-2xl", "border", "border-stone-200", "bg-white", "shadow-xl", "dark:border-gray-800", "dark:bg-gray-900"], ["type", "button", 1, "absolute", "top-4", "right-4", "z-10", "inline-flex", "h-9", "w-9", "items-center", "justify-center", "rounded-lg", "text-stone-500", "transition", "hover:bg-stone-100", "dark:text-stone-400", "dark:hover:bg-gray-800", 3, "click"], [1, "!h-4", "!w-4", "!text-base"], [1, "grid", "grid-cols-1", "md:grid-cols-[1.05fr_1fr]"], [1, "border-b", "border-stone-200", "p-6", "md:border-b-0", "md:border-r", "dark:border-gray-800"], [1, "flex", "items-center", "gap-3"], [1, "text-xl", "font-semibold", "tracking-tight", "text-stone-950", "dark:text-white"], ["class", "inline-flex rounded-full border border-stone-200 bg-stone-100 px-2 py-0.5 text-[11px] font-medium uppercase tracking-wider text-stone-600 dark:border-gray-700 dark:bg-gray-950 dark:text-stone-300", 4, "ngIf"], [1, "mt-2", "text-sm", "text-stone-500", "dark:text-stone-400"], ["class", "mt-4 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 dark:border-emerald-900/70 dark:bg-emerald-950/30 dark:text-emerald-300", 4, "ngIf"], [1, "mt-6"], [1, "text-[11px]", "font-semibold", "uppercase", "tracking-[0.18em]", "text-stone-500", "dark:text-stone-400"], ["class", "mt-3 space-y-2", 4, "ngIf"], ["class", "mt-3", 4, "ngIf"], [1, "bg-stone-50/60", "p-6", "dark:bg-gray-950/40"], [1, "mt-4"], [4, "ngIf", "ngIfElse"], ["class", "mt-3 text-xs text-stone-500 dark:text-stone-400", 4, "ngIf"], ["class", "mt-4 rounded-xl border border-amber-200/90 bg-gradient-to-br from-amber-50 via-white to-orange-50/80 p-3.5 dark:border-amber-900/60 dark:from-amber-950/40 dark:via-gray-950 dark:to-gray-950", 4, "ngIf"], [1, "mt-5", "grid", "grid-cols-2", "gap-2", "rounded-xl", "border", "border-stone-200", "bg-white", "p-3", "dark:border-gray-800", "dark:bg-gray-900/60"], [1, "block", "text-[10px]", "font-semibold", "uppercase", "tracking-[0.18em]", "text-stone-400", "dark:text-stone-500"], [1, "mt-1", "block", "text-xs", "font-medium", "text-stone-900", "dark:text-white"], ["class", "mt-4 flex items-center justify-between gap-3 rounded-xl border border-stone-200 bg-white p-3 text-xs dark:border-gray-800 dark:bg-gray-900/60", 4, "ngIf"], [1, "mt-4", "text-xs", "text-stone-500", "dark:text-stone-400"], [1, "mt-5", "flex", "gap-2"], ["type", "button", 1, "inline-flex", "min-h-11", "flex-1", "items-center", "justify-center", "rounded-xl", "border", "border-stone-200", "px-4", "text-sm", "font-medium", "text-stone-700", "transition", "hover:bg-stone-50", "dark:border-gray-700", "dark:text-stone-200", "dark:hover:bg-gray-800", 3, "click"], ["type", "button", 1, "inline-flex", "min-h-11", "flex-1", "items-center", "justify-center", "rounded-xl", "bg-stone-950", "px-4", "text-sm", "font-semibold", "text-white", "transition", "hover:bg-stone-800", "dark:bg-white", "dark:text-gray-950", "dark:hover:bg-stone-200", 3, "click"], [1, "mt-4", "flex", "items-center", "gap-2", "text-[11px]", "text-stone-500", "dark:text-stone-400"], [1, "!h-3.5", "!w-3.5", "!text-[14px]"], [1, "inline-flex", "rounded-full", "border", "border-stone-200", "bg-stone-100", "px-2", "py-0.5", "text-[11px]", "font-medium", "uppercase", "tracking-wider", "text-stone-600", "dark:border-gray-700", "dark:bg-gray-950", "dark:text-stone-300"], [1, "mt-4", "inline-flex", "items-center", "gap-2", "rounded-full", "border", "border-emerald-200", "bg-emerald-50", "px-3", "py-1", "text-xs", "font-medium", "text-emerald-700", "dark:border-emerald-900/70", "dark:bg-emerald-950/30", "dark:text-emerald-300"], [1, "mt-3", "space-y-2"], [4, "ngFor", "ngForOf"], ["class", "flex items-start gap-2 text-sm text-stone-700 dark:text-stone-200", 4, "ngIf"], [1, "flex", "items-start", "gap-2", "text-sm", "text-stone-700", "dark:text-stone-200"], [1, "!h-4", "!w-4", "!text-base", "text-emerald-600", "dark:text-emerald-400"], ["class", "ml-auto text-xs font-medium text-stone-500 dark:text-stone-400", 4, "ngIf"], [1, "ml-auto", "text-xs", "font-medium", "text-stone-500", "dark:text-stone-400"], [1, "mt-3"], [1, "text-sm", "leading-6", "text-stone-500", "dark:text-stone-400"], ["type", "button", "class", "mt-4 inline-flex items-center gap-2 text-sm font-medium text-stone-950 underline-offset-4 hover:underline dark:text-white", 3, "click", 4, "ngIf"], ["type", "button", 1, "mt-4", "inline-flex", "items-center", "gap-2", "text-sm", "font-medium", "text-stone-950", "underline-offset-4", "hover:underline", "dark:text-white", 3, "click"], [1, "flex", "items-baseline", "justify-between"], [1, "text-sm", "text-stone-700", "dark:text-stone-200"], [1, "text-2xl", "font-bold", "tracking-tight", "text-stone-950", "dark:text-white"], [1, "ml-0.5", "text-xs", "font-medium", "text-stone-500", "dark:text-stone-400"], ["class", "mt-2 text-xs text-stone-500 dark:text-stone-400", 4, "ngIf"], [1, "mt-2", "text-xs", "text-stone-500", "dark:text-stone-400"], [1, "block", "text-[11px]", "font-semibold", "uppercase", "tracking-[0.18em]", "text-stone-500", "dark:text-stone-400"], [1, "mt-2", "flex", "items-baseline", "gap-1"], [1, "text-lg", "font-semibold", "text-stone-700", "dark:text-stone-200"], [1, "text-4xl", "font-bold", "tracking-tight", "text-stone-950", "dark:text-white"], [1, "text-sm", "text-stone-500", "dark:text-stone-400"], ["class", "mt-2 text-xs italic text-stone-500 dark:text-stone-400", 4, "ngIf"], [1, "mt-2", "text-xs", "italic", "text-stone-500", "dark:text-stone-400"], [1, "mt-3", "text-xs", "text-stone-500", "dark:text-stone-400"], [1, "mt-4", "rounded-xl", "border", "border-amber-200/90", "bg-gradient-to-br", "from-amber-50", "via-white", "to-orange-50/80", "p-3.5", "dark:border-amber-900/60", "dark:from-amber-950/40", "dark:via-gray-950", "dark:to-gray-950"], [1, "flex", "items-start", "gap-2.5"], [1, "mt-0.5", "flex", "h-8", "w-8", "shrink-0", "items-center", "justify-center", "rounded-lg", "bg-amber-600/15", "text-amber-800", "dark:bg-amber-400/15", "dark:text-amber-300"], [1, "min-w-0", "space-y-1.5"], [1, "inline-flex", "rounded-full", "border", "border-amber-200/90", "bg-amber-100", "px-2", "py-0.5", "text-[10px]", "font-semibold", "uppercase", "tracking-[0.14em]", "text-amber-950", "dark:border-amber-800", "dark:bg-amber-900/50", "dark:text-amber-200"], [1, "text-sm", "font-semibold", "leading-snug", "text-amber-950", "dark:text-amber-50"], [1, "text-xs", "leading-relaxed", "text-amber-900/90", "dark:text-amber-100/85"], [1, "mt-4", "flex", "items-center", "justify-between", "gap-3", "rounded-xl", "border", "border-stone-200", "bg-white", "p-3", "text-xs", "dark:border-gray-800", "dark:bg-gray-900/60"], [1, "flex", "flex-col"], [1, "text-[10px]", "font-semibold", "uppercase", "tracking-[0.18em]", "text-stone-400", "dark:text-stone-500"], [1, "mt-0.5", "text-sm", "font-medium", "text-stone-900", "dark:text-white"], [1, "!h-4", "!w-4", "!text-base", "text-stone-400"], [1, "flex", "flex-col", "text-right"]], template: function PlanChangeDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, PlanChangeDialogComponent_div_0_Template, 63, 45, "div", 1);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.isOpen);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, DecimalPipe, DatePipe, TranslocoModule, TranslocoPipe, MatIconModule, MatIcon], styles: ["\n\n/*# sourceMappingURL=plan-change-dialog.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlanChangeDialogComponent, [{
    type: Component,
    args: [{ selector: "plan-change-dialog", standalone: true, imports: [CommonModule, TranslocoModule, MatIconModule], template: `<div\r
    *ngIf="isOpen"\r
    class="dialog-backdrop fixed inset-0 z-50 flex items-center justify-center bg-stone-950/60 p-4 backdrop-blur-sm"\r
    (click)="onBackdropClick($event)"\r
>\r
    <div\r
        class="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-xl dark:border-gray-800 dark:bg-gray-900"\r
    >\r
        <button\r
            type="button"\r
            class="absolute top-4 right-4 z-10 inline-flex h-9 w-9 items-center justify-center rounded-lg text-stone-500 transition hover:bg-stone-100 dark:text-stone-400 dark:hover:bg-gray-800"\r
            (click)="onCancel()"\r
        >\r
            <mat-icon class="!h-4 !w-4 !text-base">close</mat-icon>\r
        </button>\r
\r
        <div class="grid grid-cols-1 md:grid-cols-[1.05fr_1fr]">\r
            <!-- LEFT: Plan Details -->\r
            <div\r
                class="border-b border-stone-200 p-6 md:border-b-0 md:border-r dark:border-gray-800"\r
            >\r
                <div class="flex items-center gap-3">\r
                    <h2\r
                        class="text-xl font-semibold tracking-tight text-stone-950 dark:text-white"\r
                    >\r
                        {{ formattedPlan?.name }}\r
                    </h2>\r
                    <span\r
                        *ngIf="formattedPlan?.interval"\r
                        class="inline-flex rounded-full border border-stone-200 bg-stone-100 px-2 py-0.5 text-[11px] font-medium uppercase tracking-wider text-stone-600 dark:border-gray-700 dark:bg-gray-950 dark:text-stone-300"\r
                    >\r
                        {{\r
                            formattedPlan?.interval === 'year'\r
                                ? ('subscriptionPlans.yearly' | transloco)\r
                                : ('subscriptionPlans.monthly' | transloco)\r
                        }}\r
                    </span>\r
                </div>\r
\r
                <p class="mt-2 text-sm text-stone-500 dark:text-stone-400">\r
                    {{ reviewPlanTranslocoKey | transloco }}\r
                </p>\r
\r
                <div\r
                    *ngIf="formattedPlan?.interval === 'year'"\r
                    class="mt-4 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 dark:border-emerald-900/70 dark:bg-emerald-950/30 dark:text-emerald-300"\r
                >\r
                    <mat-icon class="!h-3.5 !w-3.5 !text-[14px]">savings</mat-icon>\r
                    <span>{{ 'subscriptionPlans.dialog.twoMonthsFree' | transloco }}</span>\r
                </div>\r
\r
                <div class="mt-6">\r
                    <h3\r
                        class="text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-500 dark:text-stone-400"\r
                    >\r
                        {{ 'subscriptionPlans.dialog.whatsIncluded' | transloco }}\r
                    </h3>\r
\r
                    <div class="mt-3 space-y-2" *ngIf="hasMeaningfulBenefits">\r
                        <ng-container *ngFor="let benefit of formattedPlan?.benefits">\r
                            <div\r
                                *ngIf="benefit.key !== 'OCR'"\r
                                class="flex items-start gap-2 text-sm text-stone-700 dark:text-stone-200"\r
                            >\r
                                <mat-icon\r
                                    class="!h-4 !w-4 !text-base text-emerald-600 dark:text-emerald-400"\r
                                    >check_circle</mat-icon\r
                                >\r
                                <span>{{ 'pricing.' + benefit.key | transloco }}</span>\r
                                <span\r
                                    *ngIf="benefit.value"\r
                                    class="ml-auto text-xs font-medium text-stone-500 dark:text-stone-400"\r
                                    >{{ benefit.value }}</span\r
                                >\r
                            </div>\r
                        </ng-container>\r
                    </div>\r
\r
                    <div *ngIf="!hasMeaningfulBenefits" class="mt-3">\r
                        <p class="text-sm leading-6 text-stone-500 dark:text-stone-400">\r
                            {{ 'subscriptionPlans.dialog.includedFallback' | transloco }}\r
                        </p>\r
                        <div class="mt-3 space-y-2">\r
                            <div\r
                                class="flex items-start gap-2 text-sm text-stone-700 dark:text-stone-200"\r
                            >\r
                                <mat-icon\r
                                    class="!h-4 !w-4 !text-base text-emerald-600 dark:text-emerald-400"\r
                                    >check_circle</mat-icon\r
                                >\r
                                <span>{{\r
                                    'subscriptionPlans.dialog.includedFallbackBullet1' | transloco\r
                                }}</span>\r
                            </div>\r
                            <div\r
                                class="flex items-start gap-2 text-sm text-stone-700 dark:text-stone-200"\r
                            >\r
                                <mat-icon\r
                                    class="!h-4 !w-4 !text-base text-emerald-600 dark:text-emerald-400"\r
                                    >check_circle</mat-icon\r
                                >\r
                                <span>{{\r
                                    'subscriptionPlans.dialog.includedFallbackBullet2' | transloco\r
                                }}</span>\r
                            </div>\r
                        </div>\r
                        <button\r
                            type="button"\r
                            *ngIf="hasBetterDiscountOptions"\r
                            class="mt-4 inline-flex items-center gap-2 text-sm font-medium text-stone-950 underline-offset-4 hover:underline dark:text-white"\r
                            (click)="onCompareDiscountedPlans()"\r
                        >\r
                            <span>{{\r
                                'subscriptionPlans.dialog.compareDiscountedPlansShort' | transloco\r
                            }}</span>\r
                            <mat-icon class="!h-4 !w-4 !text-base">arrow_forward</mat-icon>\r
                        </button>\r
                    </div>\r
                </div>\r
            </div>\r
\r
            <!-- RIGHT: Order Summary -->\r
            <div class="bg-stone-50/60 p-6 dark:bg-gray-950/40">\r
                <h3\r
                    class="text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-500 dark:text-stone-400"\r
                >\r
                    {{ 'subscriptionPlans.dialog.orderSummary' | transloco }}\r
                </h3>\r
\r
                <div class="mt-4">\r
                    <ng-container\r
                        *ngIf="!formattedPlan?.showUsageEstimateSummary; else dialogUsageHero"\r
                    >\r
                        <div class="flex items-baseline justify-between">\r
                            <span class="text-sm text-stone-700 dark:text-stone-200">\r
                                {{ formattedPlan?.name }}\r
                                {{ 'subscriptionPlans.dialog.planLabel' | transloco }}\r
                            </span>\r
                            <span\r
                                class="text-2xl font-bold tracking-tight text-stone-950 dark:text-white"\r
                                >\${{ formattedPlan?.amountByMonth | number: '1.0-0' }}<span\r
                                    class="ml-0.5 text-xs font-medium text-stone-500 dark:text-stone-400"\r
                                    >/{{\r
                                        'subscriptionPlans.interval.month' | transloco\r
                                    }}</span\r
                                ></span\r
                            >\r
                        </div>\r
                        <p\r
                            *ngIf="formattedPlan?.interval === 'year'"\r
                            class="mt-2 text-xs text-stone-500 dark:text-stone-400"\r
                        >\r
                            {{ 'subscriptionPlans.dialog.monthlyEquivalent' | transloco }}: \${{\r
                                formattedPlan?.amountByMonth | number: '1.2-2'\r
                            }}/{{ 'subscriptionPlans.interval.month' | transloco }}\r
                        </p>\r
                    </ng-container>\r
                    <ng-template #dialogUsageHero>\r
                        <span\r
                            class="block text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-500 dark:text-stone-400"\r
                        >\r
                            {{ 'subscriptionPlans.requestSlider.estimatedTotal' | transloco }}\r
                        </span>\r
                        <div class="mt-2 flex items-baseline gap-1">\r
                            <span\r
                                class="text-lg font-semibold text-stone-700 dark:text-stone-200"\r
                                >$</span\r
                            >\r
                            <span\r
                                class="text-4xl font-bold tracking-tight text-stone-950 dark:text-white"\r
                                >{{ formattedPlan?.estimatedTotal | number: '1.0-0' }}</span\r
                            >\r
                            <span class="text-sm text-stone-500 dark:text-stone-400"\r
                                >/{{\r
                                    'subscriptionPlans.interval.month' | transloco\r
                                }}</span\r
                            >\r
                        </div>\r
                        <p class="mt-2 text-xs text-stone-500 dark:text-stone-400">\r
                            ~{{ formatNumber(formattedPlan?.requestsPerMonth) }}\r
                            {{\r
                                'subscriptionPlans.requestSlider.requests' | transloco\r
                            }}\r
                        </p>\r
                        <p\r
                            *ngIf="formattedPlan?.interval === 'year'"\r
                            class="mt-2 text-xs italic text-stone-500 dark:text-stone-400"\r
                        >\r
                            {{ 'subscriptionPlans.billedAnnually' | transloco }}\r
                        </p>\r
                    </ng-template>\r
                </div>\r
\r
                <p\r
                    *ngIf="formattedPlan?.showUsageEstimateSummary"\r
                    class="mt-3 text-xs text-stone-500 dark:text-stone-400"\r
                >\r
                    {{ 'subscriptionPlans.dialog.usageNote' | transloco }}\r
                </p>\r
\r
                <div\r
                    *ngIf="showBringBackPromo"\r
                    class="mt-4 rounded-xl border border-amber-200/90 bg-gradient-to-br from-amber-50 via-white to-orange-50/80 p-3.5 dark:border-amber-900/60 dark:from-amber-950/40 dark:via-gray-950 dark:to-gray-950"\r
                >\r
                    <div class="flex items-start gap-2.5">\r
                        <div\r
                            class="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-600/15 text-amber-800 dark:bg-amber-400/15 dark:text-amber-300"\r
                        >\r
                            <mat-icon class="!h-4 !w-4 !text-base">local_offer</mat-icon>\r
                        </div>\r
                        <div class="min-w-0 space-y-1.5">\r
                            <p\r
                                class="inline-flex rounded-full border border-amber-200/90 bg-amber-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-amber-950 dark:border-amber-800 dark:bg-amber-900/50 dark:text-amber-200"\r
                            >\r
                                {{\r
                                    'subscriptionPlans.dialog.bringBack.badge'\r
                                        | transloco: { multiplier: bringBackMultiplier }\r
                                }}\r
                            </p>\r
                            <p class="text-sm font-semibold leading-snug text-amber-950 dark:text-amber-50">\r
                                {{\r
                                    'subscriptionPlans.dialog.bringBack.payReceive'\r
                                        | transloco\r
                                            : {\r
                                                  payUsd: bringBackPayUsd,\r
                                                  receiveUsd: bringBackReceiveUsd,\r
                                                  multiplier: bringBackMultiplier,\r
                                              }\r
                                }}\r
                            </p>\r
                            <p class="text-xs leading-relaxed text-amber-900/90 dark:text-amber-100/85">\r
                                {{\r
                                    'subscriptionPlans.dialog.bringBack.note'\r
                                        | transloco\r
                                            : {\r
                                                  multiplier: bringBackMultiplier,\r
                                                  payUsd: bringBackPayUsd,\r
                                              }\r
                                }}\r
                            </p>\r
                        </div>\r
                    </div>\r
                </div>\r
\r
                <!-- Dates -->\r
                <div\r
                    class="mt-5 grid grid-cols-2 gap-2 rounded-xl border border-stone-200 bg-white p-3 dark:border-gray-800 dark:bg-gray-900/60"\r
                >\r
                    <div>\r
                        <span\r
                            class="block text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-400 dark:text-stone-500"\r
                        >\r
                            {{ 'subscriptionPlans.dialog.starts' | transloco }}\r
                        </span>\r
                        <span\r
                            class="mt-1 block text-xs font-medium text-stone-900 dark:text-white"\r
                        >\r
                            {{ formattedPlan?.startDate | date: 'mediumDate' }}\r
                        </span>\r
                    </div>\r
                    <div>\r
                        <span\r
                            class="block text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-400 dark:text-stone-500"\r
                        >\r
                            {{ 'subscriptionPlans.dialog.renews' | transloco }}\r
                        </span>\r
                        <span\r
                            class="mt-1 block text-xs font-medium text-stone-900 dark:text-white"\r
                        >\r
                            {{ formattedPlan?.endDate | date: 'mediumDate' }}\r
                        </span>\r
                    </div>\r
                </div>\r
\r
                <!-- Plan change indicator -->\r
                <div\r
                    *ngIf="currentPlan"\r
                    class="mt-4 flex items-center justify-between gap-3 rounded-xl border border-stone-200 bg-white p-3 text-xs dark:border-gray-800 dark:bg-gray-900/60"\r
                >\r
                    <div class="flex flex-col">\r
                        <span\r
                            class="text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-400 dark:text-stone-500"\r
                            >{{ 'subscriptionPlans.dialog.from' | transloco }}</span\r
                        >\r
                        <span\r
                            class="mt-0.5 text-sm font-medium text-stone-900 dark:text-white"\r
                            >{{ currentPlan?.name || '' }}</span\r
                        >\r
                    </div>\r
                    <mat-icon class="!h-4 !w-4 !text-base text-stone-400">arrow_forward</mat-icon>\r
                    <div class="flex flex-col text-right">\r
                        <span\r
                            class="text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-400 dark:text-stone-500"\r
                            >{{ 'subscriptionPlans.dialog.to' | transloco }}</span\r
                        >\r
                        <span\r
                            class="mt-0.5 text-sm font-medium text-stone-900 dark:text-white"\r
                            >{{ formattedPlan?.name }}</span\r
                        >\r
                    </div>\r
                </div>\r
\r
                <p class="mt-4 text-xs text-stone-500 dark:text-stone-400">\r
                    {{ 'subscriptionPlans.dialog.cancelNote' | transloco }}\r
                </p>\r
\r
                <div class="mt-5 flex gap-2">\r
                    <button\r
                        type="button"\r
                        class="inline-flex min-h-11 flex-1 items-center justify-center rounded-xl border border-stone-200 px-4 text-sm font-medium text-stone-700 transition hover:bg-stone-50 dark:border-gray-700 dark:text-stone-200 dark:hover:bg-gray-800"\r
                        (click)="onCancel()"\r
                    >\r
                        {{ 'subscriptionPlans.dialog.cancel' | transloco }}\r
                    </button>\r
                    <button\r
                        type="button"\r
                        class="inline-flex min-h-11 flex-1 items-center justify-center rounded-xl bg-stone-950 px-4 text-sm font-semibold text-white transition hover:bg-stone-800 dark:bg-white dark:text-gray-950 dark:hover:bg-stone-200"\r
                        (click)="onConfirm()"\r
                    >\r
                        {{ confirmActionTranslocoKey | transloco }}\r
                    </button>\r
                </div>\r
\r
                <div\r
                    class="mt-4 flex items-center gap-2 text-[11px] text-stone-500 dark:text-stone-400"\r
                >\r
                    <mat-icon class="!h-3.5 !w-3.5 !text-[14px]">lock</mat-icon>\r
                    <span>{{ 'subscriptionPlans.dialog.secureTransaction' | transloco }}</span>\r
                </div>\r
            </div>\r
        </div>\r
    </div>\r
</div>\r
`, styles: ["/* src/app/modules/subscription-plans/plan-change-dialog/plan-change-dialog.component.scss */\n/*# sourceMappingURL=plan-change-dialog.component.css.map */\n"] }]
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
  }], bringBackOffer: [{
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PlanChangeDialogComponent, { className: "PlanChangeDialogComponent", filePath: "src/app/modules/subscription-plans/plan-change-dialog/plan-change-dialog.component.ts", lineNumber: 21 });
})();

// src/app/modules/subscription-plans/subscription-plans.component.ts
var _c02 = ["plansExploreAnchor"];
var _c12 = (a0) => ({ multiplier: a0 });
var _c22 = (a0, a1) => ({ multiplier: a0, example: a1 });
var _c3 = (a0) => ({ expiresAt: a0 });
var _c4 = (a0) => ({ plan: a0 });
var _c5 = (a0, a1, a2, a3) => ({ "border-stone-950 ring-2 ring-stone-950 dark:border-white dark:ring-white": a0, "border-stone-200 dark:border-gray-800": a1, "is-not-optimal": a2, "is-current": a3 });
var _c6 = (a0) => ({ "blur-[2px] opacity-50 select-none pointer-events-none": a0 });
var _c7 = (a0, a1, a2) => ({ "mt-5": true, "bg-emerald-600/15 text-emerald-700 cursor-default dark:bg-emerald-400/15 dark:text-emerald-300": a0, "bg-stone-950 text-white hover:bg-stone-800 dark:bg-white dark:text-gray-950 dark:hover:bg-stone-200": a1, "cursor-not-allowed border border-stone-200 bg-white text-stone-400 dark:border-gray-700 dark:bg-gray-900 dark:text-stone-500": a2 });
function SubscriptionPlansComponent_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "subscriptionPlans.title"));
  }
}
function SubscriptionPlansComponent_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "subscriptionPlans.titleWithPlan"));
  }
}
function SubscriptionPlansComponent_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "subscriptionPlans.subtitle"));
  }
}
function SubscriptionPlansComponent_ng_container_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "subscriptionPlans.subtitleWithPlan"));
  }
}
function SubscriptionPlansComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21)(1, "button", 22);
    \u0275\u0275listener("click", function SubscriptionPlansComponent_div_20_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.manageBilling());
    });
    \u0275\u0275elementStart(2, "mat-icon", 23);
    \u0275\u0275text(3, "settings");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 24);
    \u0275\u0275listener("click", function SubscriptionPlansComponent_div_20_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.currentView === "current" ? ctx_r1.switchToExplore() : ctx_r1.switchToCurrent());
    });
    \u0275\u0275elementStart(8, "mat-icon", 23);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "transloco");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 3, "subscriptionPlans.manageBilling"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.currentView === "current" ? "compare_arrows" : "arrow_back");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 5, ctx_r1.currentView === "current" ? "subscriptionPlans.changePlan" : "subscriptionPlans.backToCurrentPlan"), " ");
  }
}
function SubscriptionPlansComponent_section_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 25)(1, "div", 26)(2, "div", 27)(3, "div", 28)(4, "mat-icon");
    \u0275\u0275text(5, "local_offer");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 29)(7, "p", 30);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "h2", 31);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p", 32);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p", 33);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "date");
    \u0275\u0275pipe(19, "transloco");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 4, "subscriptionPlans.promo.bringBack.badge"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(12, 6, "subscriptionPlans.promo.bringBack.titleFirstMonth", \u0275\u0275pureFunction1(18, _c12, (ctx_r1.bringBackOffer == null ? null : ctx_r1.bringBackOffer.multiplier) || 2)), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(15, 9, "subscriptionPlans.promo.bringBack.bodyFirstMonth", \u0275\u0275pureFunction2(20, _c22, (ctx_r1.bringBackOffer == null ? null : ctx_r1.bringBackOffer.multiplier) || 2, ctx_r1.bringBackPromoExampleCredits)), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(19, 15, "subscriptionPlans.promo.bringBack.deadline", \u0275\u0275pureFunction1(23, _c3, \u0275\u0275pipeBind2(18, 12, ctx_r1.bringBackOffer == null ? null : ctx_r1.bringBackOffer.expiresAt, "medium") || "")), " ");
  }
}
function SubscriptionPlansComponent_ng_container_24_p_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 50)(1, "span", 51);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "subscriptionPlans.statusActive"), " ");
  }
}
function SubscriptionPlansComponent_ng_container_24_p_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 50)(1, "span", 52);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "subscriptionPlans.statusCanceling"), " ");
  }
}
function SubscriptionPlansComponent_ng_container_24_section_42_ng_container_5_div_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 60);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const feature_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(feature_r3.value);
  }
}
function SubscriptionPlansComponent_ng_container_24_section_42_ng_container_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57)(1, "mat-icon", 58);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, SubscriptionPlansComponent_ng_container_24_section_42_ng_container_5_div_1_span_6_Template, 2, 1, "span", 59);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const feature_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 2, "pricing." + feature_r3.key));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", feature_r3.value && !ctx_r1.isBoolean(feature_r3.value));
  }
}
function SubscriptionPlansComponent_ng_container_24_section_42_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, SubscriptionPlansComponent_ng_container_24_section_42_ng_container_5_div_1_Template, 7, 4, "div", 56);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const feature_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", feature_r3.key !== "OCR");
  }
}
function SubscriptionPlansComponent_ng_container_24_section_42_ng_container_6_div_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 60);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const feature_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(feature_r4.value);
  }
}
function SubscriptionPlansComponent_ng_container_24_section_42_ng_container_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57)(1, "mat-icon", 58);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, SubscriptionPlansComponent_ng_container_24_section_42_ng_container_6_div_1_span_6_Template, 2, 1, "span", 59);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const feature_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 2, "pricing." + feature_r4.key));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", feature_r4.value && !ctx_r1.isBoolean(feature_r4.value));
  }
}
function SubscriptionPlansComponent_ng_container_24_section_42_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, SubscriptionPlansComponent_ng_container_24_section_42_ng_container_6_div_1_Template, 7, 4, "div", 56);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const feature_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", feature_r4.key !== "OCR");
  }
}
function SubscriptionPlansComponent_ng_container_24_section_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 34)(1, "h3", 53);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 54);
    \u0275\u0275template(5, SubscriptionPlansComponent_ng_container_24_section_42_ng_container_5_Template, 2, 1, "ng-container", 55)(6, SubscriptionPlansComponent_ng_container_24_section_42_ng_container_6_Template, 2, 1, "ng-container", 55);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "subscriptionPlans.whatsIncluded"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.currentSubscription.subscriptionPlan.changesLeft);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.currentSubscription.subscriptionPlan.changesRight);
  }
}
function SubscriptionPlansComponent_ng_container_24_section_43_button_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 65);
    \u0275\u0275listener("click", function SubscriptionPlansComponent_ng_container_24_section_43_button_20_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.compareDiscountedPlansFromCurrentCard());
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-icon", 23);
    \u0275\u0275text(5, "arrow_forward");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "subscriptionPlans.dialog.compareDiscountedPlansShort"));
  }
}
function SubscriptionPlansComponent_ng_container_24_section_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 34)(1, "h3", 53);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 61);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 62)(8, "div", 63)(9, "mat-icon", 58);
    \u0275\u0275text(10, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 63)(15, "mat-icon", 58);
    \u0275\u0275text(16, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(20, SubscriptionPlansComponent_ng_container_24_section_43_button_20_Template, 6, 3, "button", 64);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "subscriptionPlans.whatsIncluded"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 7, "subscriptionPlans.dialog.includedFallback"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 9, "subscriptionPlans.dialog.includedFallbackBullet1"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 11, "subscriptionPlans.dialog.includedFallbackBullet2"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.hasOtherPlansWithApiDiscountForCurrent);
  }
}
function SubscriptionPlansComponent_ng_container_24_section_44_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69);
    \u0275\u0275element(1, "div", 70);
    \u0275\u0275elementEnd();
  }
}
function SubscriptionPlansComponent_ng_container_24_section_44_p_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 71);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "subscriptionPlans.apiBreakdown.empty"), " ");
  }
}
function SubscriptionPlansComponent_ng_container_24_section_44_div_6_option_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 85);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("value", c_r7);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getCountryDisplayName(c_r7), " ");
  }
}
function SubscriptionPlansComponent_ng_container_24_section_44_div_6_option_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 85);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("value", cat_r8);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getCategoryDisplayName(cat_r8), " ");
  }
}
function SubscriptionPlansComponent_ng_container_24_section_44_div_6_ng_container_23_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 88)(1, "td", 89);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const group_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getCategoryDisplayName(group_r9.category), " ");
  }
}
function SubscriptionPlansComponent_ng_container_24_section_44_div_6_ng_container_23_tr_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 90);
    \u0275\u0275listener("click", function SubscriptionPlansComponent_ng_container_24_section_44_div_6_ng_container_23_tr_2_Template_tr_click_0_listener() {
      const feature_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.openFeatureModal(feature_r11));
    });
    \u0275\u0275elementStart(1, "td", 91);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 92);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementStart(6, "span", 93);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const feature_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFeatureDisplayName(feature_r11), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(5, 3, ctx_r1.getEffectivePriceForApi(feature_r11, ctx_r1.currentSubscription.subscriptionPlan), "1.2-4"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 6, "subscriptionPlans.credits"));
  }
}
function SubscriptionPlansComponent_ng_container_24_section_44_div_6_ng_container_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, SubscriptionPlansComponent_ng_container_24_section_44_div_6_ng_container_23_tr_1_Template, 3, 1, "tr", 86)(2, SubscriptionPlansComponent_ng_container_24_section_44_div_6_ng_container_23_tr_2_Template, 9, 8, "tr", 87);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const group_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", group_r9.category);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", group_r9.features)("ngForTrackBy", ctx_r1.trackByFeature);
  }
}
function SubscriptionPlansComponent_ng_container_24_section_44_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 72)(1, "div", 73)(2, "input", 74);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275listener("input", function SubscriptionPlansComponent_ng_container_24_section_44_div_6_Template_input_input_2_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.myListSearchQuery = $event.target.value);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "select", 75);
    \u0275\u0275twoWayListener("ngModelChange", function SubscriptionPlansComponent_ng_container_24_section_44_div_6_Template_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.myListCountryFilter, $event) || (ctx_r1.myListCountryFilter = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(5, "option", 76);
    \u0275\u0275text(6, "All countries");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, SubscriptionPlansComponent_ng_container_24_section_44_div_6_option_7_Template, 2, 2, "option", 77);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "select", 75);
    \u0275\u0275twoWayListener("ngModelChange", function SubscriptionPlansComponent_ng_container_24_section_44_div_6_Template_select_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.myListCategoryFilter, $event) || (ctx_r1.myListCategoryFilter = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(9, "option", 76);
    \u0275\u0275text(10, "All categories");
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, SubscriptionPlansComponent_ng_container_24_section_44_div_6_option_11_Template, 2, 2, "option", 77);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 78)(13, "table", 79)(14, "thead", 80)(15, "tr")(16, "th", 81);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th", 82);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "tbody", 83);
    \u0275\u0275template(23, SubscriptionPlansComponent_ng_container_24_section_44_div_6_ng_container_23_Template, 3, 3, "ng-container", 84);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
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
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 12, "subscriptionPlans.apiBreakdown.apiName"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (ctx_r1.currentSubscription == null ? null : ctx_r1.currentSubscription.subscriptionPlan == null ? null : ctx_r1.currentSubscription.subscriptionPlan.name) || \u0275\u0275pipeBind1(21, 14, "subscriptionPlans.credits"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.groupedMyListFeatures)("ngForTrackBy", ctx_r1.trackByGroup);
  }
}
function SubscriptionPlansComponent_ng_container_24_section_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 34)(1, "h3", 53);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, SubscriptionPlansComponent_ng_container_24_section_44_div_4_Template, 2, 0, "div", 66)(5, SubscriptionPlansComponent_ng_container_24_section_44_p_5_Template, 3, 3, "p", 67)(6, SubscriptionPlansComponent_ng_container_24_section_44_div_6_Template, 24, 16, "div", 68);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, "subscriptionPlans.yourApiPrices"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.loadingMyListFeatures);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loadingMyListFeatures && ctx_r1.filteredMyListFeatures.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loadingMyListFeatures && ctx_r1.myListFeatures.length > 0);
  }
}
function SubscriptionPlansComponent_ng_container_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "section", 34)(2, "div", 35)(3, "div", 36)(4, "div", 37)(5, "mat-icon");
    \u0275\u0275text(6, "verified");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div")(8, "span", 38);
    \u0275\u0275element(9, "span", 39);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "h2", 40);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 41)(15, "span", 42);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 43);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "transloco");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(21, "div", 44)(22, "div", 45)(23, "span", 46);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "p", 47);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 45)(30, "span", 46);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "p", 47);
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 45)(37, "span", 46);
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(40, SubscriptionPlansComponent_ng_container_24_p_40_Template, 4, 3, "p", 48)(41, SubscriptionPlansComponent_ng_container_24_p_41_Template, 4, 3, "p", 48);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(42, SubscriptionPlansComponent_ng_container_24_section_42_Template, 7, 5, "section", 49)(43, SubscriptionPlansComponent_ng_container_24_section_43_Template, 21, 13, "section", 49)(44, SubscriptionPlansComponent_ng_container_24_section_44_Template, 7, 6, "section", 49);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 14, "subscriptionPlans.activePlan"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.currentSubscription.name, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(17, 16, ctx_r1.currentSubscription.amount || ctx_r1.currentSubscription.subscriptionPlan.amount, "1.0-0"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" /", \u0275\u0275pipeBind1(20, 19, "subscriptionPlans.interval." + ctx_r1.currentSubscription.subscriptionPlan.interval), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(25, 21, "subscriptionPlans.started"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(28, 23, ctx_r1.currentSubscription.startDate, "mediumDate"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(32, 26, "subscriptionPlans.renews"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(35, 28, ctx_r1.currentSubscription.endDate, "mediumDate"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(39, 31, "subscriptionPlans.status"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.currentSubscription.autoRenew);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.currentSubscription.autoRenew);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentSubscription && ctx_r1.currentPlanHasIncludedBenefits);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showCurrentPlanIncludedFallback);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentSubscription && (ctx_r1.myListFeatures.length > 0 || ctx_r1.loadingMyListFeatures));
  }
}
function SubscriptionPlansComponent_ng_container_25_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 102);
    \u0275\u0275element(1, "div", 103);
    \u0275\u0275elementEnd();
  }
}
function SubscriptionPlansComponent_ng_container_25_section_13_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 72)(1, "label", 117);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 118)(5, "input", 119);
    \u0275\u0275listener("input", function SubscriptionPlansComponent_ng_container_25_section_13_div_12_Template_input_input_5_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onRequestsInput($event.target.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 120);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, "subscriptionPlans.estimator.requestsLabel"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("max", ctx_r1.sliderMax)("value", ctx_r1.sliderValue);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 6, ctx_r1.selectedInterval === "year" ? "subscriptionPlans.requestSlider.requestsPerYear" : "subscriptionPlans.requestSlider.requests"), " ");
  }
}
function SubscriptionPlansComponent_ng_container_25_section_13_div_13_div_12_option_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 85);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const plan_r17 = ctx.$implicit;
    \u0275\u0275property("value", plan_r17._id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", plan_r17.name, " ");
  }
}
function SubscriptionPlansComponent_ng_container_25_section_13_div_13_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 125)(1, "label", 126);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "select", 127);
    \u0275\u0275listener("ngModelChange", function SubscriptionPlansComponent_ng_container_25_section_13_div_13_div_12_Template_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onReferencePlanChange($event));
    });
    \u0275\u0275template(5, SubscriptionPlansComponent_ng_container_25_section_13_div_13_div_12_option_5_Template, 2, 2, "option", 77);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "subscriptionPlans.estimator.referenceLabel"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.budgetReferencePlanId);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.visiblePlans);
  }
}
function SubscriptionPlansComponent_ng_container_25_section_13_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 72)(1, "label", 121);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 118)(5, "span", 122);
    \u0275\u0275text(6, "$");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 123);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275listener("input", function SubscriptionPlansComponent_ng_container_25_section_13_div_13_Template_input_input_7_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onBudgetInput($event.target.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 120);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, SubscriptionPlansComponent_ng_container_25_section_13_div_13_div_12_Template, 6, 5, "div", 124);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "subscriptionPlans.estimator.budgetLabel"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(8, 7, "subscriptionPlans.estimator.budgetPlaceholder"))("value", ctx_r1.targetMonthlyBudget);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" /", \u0275\u0275pipeBind1(11, 9, "subscriptionPlans.interval.month"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.visiblePlans.length > 1);
  }
}
function SubscriptionPlansComponent_ng_container_25_section_13_span_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tick_r18 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tick_r18);
  }
}
function SubscriptionPlansComponent_ng_container_25_section_13_div_27_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 129);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const delta_r19 = ctx.ngIf;
    \u0275\u0275property("ngClass", delta_r19 > 0 ? "text-amber-600 dark:text-amber-400" : delta_r19 < 0 ? "text-emerald-600 dark:text-emerald-400" : "text-stone-500 dark:text-stone-400");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" (", delta_r19 > 0 ? "+" : "", "$", \u0275\u0275pipeBind2(2, 3, delta_r19, "1.0-2"), ") ");
  }
}
function SubscriptionPlansComponent_ng_container_25_section_13_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 111)(1, "span", 112);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 113);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275template(8, SubscriptionPlansComponent_ng_container_25_section_13_div_27_span_8_Template, 3, 6, "span", 128);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 4, "subscriptionPlans.estimator.closestFor", \u0275\u0275pureFunction1(12, _c4, ctx_r1.budgetReferencePlan.name)), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" $", \u0275\u0275pipeBind2(6, 7, ctx_r1.getBudgetAchievedTotal(), "1.0-0"), "/", \u0275\u0275pipeBind1(7, 10, "subscriptionPlans.interval.month"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.getBudgetDelta());
  }
}
function SubscriptionPlansComponent_ng_container_25_section_13_div_28_ng_container_1_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 137);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "subscriptionPlans.requestSlider.bestValue"), " ");
  }
}
function SubscriptionPlansComponent_ng_container_25_section_13_div_28_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 131)(2, "div", 132);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 133);
    \u0275\u0275text(5);
    \u0275\u0275elementStart(6, "span", 134);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 135);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, SubscriptionPlansComponent_ng_container_25_section_13_div_28_ng_container_1_div_12_Template, 3, 3, "div", 136);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const plan_r20 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", plan_r20._id === ctx_r1.getBestValuePlanId() ? "border-emerald-500/70 bg-emerald-50/80 dark:border-emerald-400/60 dark:bg-emerald-900/20" : ctx_r1.isPlanCompetitive(plan_r20) ? "border-stone-200 bg-white dark:border-gray-800 dark:bg-gray-900/40" : "border-stone-200 bg-stone-100 opacity-60 dark:border-gray-800 dark:bg-gray-950/30");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", plan_r20.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" $", ctx_r1.getEffectiveCostPerRequest(plan_r20).toFixed(4), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("/ ", \u0275\u0275pipeBind1(8, 6, "subscriptionPlans.requestSlider.perRequest"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ~$", \u0275\u0275pipeBind2(11, 8, ctx_r1.getEstimatedTotal(plan_r20), "1.0-0"), "/mo ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", plan_r20._id === ctx_r1.getBestValuePlanId());
  }
}
function SubscriptionPlansComponent_ng_container_25_section_13_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 130);
    \u0275\u0275template(1, SubscriptionPlansComponent_ng_container_25_section_13_div_28_ng_container_1_Template, 13, 11, "ng-container", 55);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.visiblePlans);
  }
}
function SubscriptionPlansComponent_ng_container_25_section_13_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 138)(1, "button", 139);
    \u0275\u0275listener("click", function SubscriptionPlansComponent_ng_container_25_section_13_div_29_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.showApiBreakdownView());
    });
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "mat-icon", 23);
    \u0275\u0275text(6, "arrow_forward");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "subscriptionPlans.apiBreakdown.button"));
  }
}
function SubscriptionPlansComponent_ng_container_25_section_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 34)(1, "div", 104)(2, "div", 105)(3, "button", 106);
    \u0275\u0275listener("click", function SubscriptionPlansComponent_ng_container_25_section_13_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setEstimatorMode("requests"));
    });
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 106);
    \u0275\u0275listener("click", function SubscriptionPlansComponent_ng_container_25_section_13_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setEstimatorMode("budget"));
    });
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "p", 107);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, SubscriptionPlansComponent_ng_container_25_section_13_div_12_Template, 9, 8, "div", 68)(13, SubscriptionPlansComponent_ng_container_25_section_13_div_13_Template, 13, 11, "div", 68);
    \u0275\u0275elementStart(14, "div", 72)(15, "input", 108);
    \u0275\u0275listener("input", function SubscriptionPlansComponent_ng_container_25_section_13_Template_input_input_15_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onSliderChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 109);
    \u0275\u0275template(17, SubscriptionPlansComponent_ng_container_25_section_13_span_17_Template, 2, 1, "span", 55);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 110)(19, "div", 111)(20, "span", 112);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 113);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "number");
    \u0275\u0275pipe(26, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(27, SubscriptionPlansComponent_ng_container_25_section_13_div_27_Template, 9, 14, "div", 114);
    \u0275\u0275elementEnd();
    \u0275\u0275template(28, SubscriptionPlansComponent_ng_container_25_section_13_div_28_Template, 2, 1, "div", 115)(29, SubscriptionPlansComponent_ng_container_25_section_13_div_29_Template, 7, 3, "div", 116);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r1.estimatorMode === "requests" ? "bg-white text-stone-900 shadow-sm dark:bg-gray-800 dark:text-white" : "text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-white");
    \u0275\u0275attribute("aria-selected", ctx_r1.estimatorMode === "requests");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 21, "subscriptionPlans.estimator.modeRequests"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r1.estimatorMode === "budget" ? "bg-white text-stone-900 shadow-sm dark:bg-gray-800 dark:text-white" : "text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-white");
    \u0275\u0275attribute("aria-selected", ctx_r1.estimatorMode === "budget");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 23, "subscriptionPlans.estimator.modeBudget"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 25, "subscriptionPlans.requestSlider.basePrice"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.estimatorMode === "requests");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.estimatorMode === "budget");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", "linear-gradient(to right, #0c0a09 " + ctx_r1.sliderValue / ctx_r1.sliderMax * 100 + "%, #e7e5e4 " + ctx_r1.sliderValue / ctx_r1.sliderMax * 100 + "%)");
    \u0275\u0275property("max", ctx_r1.sliderMax)("step", ctx_r1.sliderStep)("value", ctx_r1.sliderValue);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.sliderTicks);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 27, "subscriptionPlans.estimator.resolvedRequests"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(25, 29, ctx_r1.sliderValue, "1.0-0"), " ", \u0275\u0275pipeBind1(26, 32, ctx_r1.selectedInterval === "year" ? "subscriptionPlans.requestSlider.requestsPerYear" : "subscriptionPlans.requestSlider.requests"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.estimatorMode === "budget" && ctx_r1.budgetReferencePlan);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.showApiBreakdown && ctx_r1.requestsPerMonth > 0 && ctx_r1.visiblePlans.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.showApiBreakdown);
  }
}
function SubscriptionPlansComponent_ng_container_25_section_14_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69);
    \u0275\u0275element(1, "div", 70);
    \u0275\u0275elementEnd();
  }
}
function SubscriptionPlansComponent_ng_container_25_section_14_p_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 71);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "subscriptionPlans.apiBreakdown.empty"), " ");
  }
}
function SubscriptionPlansComponent_ng_container_25_section_14_div_13_option_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 85);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r24 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("value", c_r24);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getCountryDisplayName(c_r24), " ");
  }
}
function SubscriptionPlansComponent_ng_container_25_section_14_div_13_option_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 85);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r25 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("value", cat_r25);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getCategoryDisplayName(cat_r25), " ");
  }
}
function SubscriptionPlansComponent_ng_container_25_section_14_div_13_th_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 82);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const plan_r26 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", plan_r26.name, " ");
  }
}
function SubscriptionPlansComponent_ng_container_25_section_14_div_13_ng_container_21_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 88)(1, "td", 144);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const group_r27 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", ctx_r1.apiBreakdownPlans.length + 1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getCategoryDisplayName(group_r27.category), " ");
  }
}
function SubscriptionPlansComponent_ng_container_25_section_14_div_13_ng_container_21_tr_2_td_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 92);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const plan_r30 = ctx.$implicit;
    const feature_r29 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" $", ctx_r1.getCompareTablePriceForApi(feature_r29, plan_r30).toFixed(4), "/req ");
  }
}
function SubscriptionPlansComponent_ng_container_25_section_14_div_13_ng_container_21_tr_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 90);
    \u0275\u0275listener("click", function SubscriptionPlansComponent_ng_container_25_section_14_div_13_ng_container_21_tr_2_Template_tr_click_0_listener() {
      const feature_r29 = \u0275\u0275restoreView(_r28).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.openFeatureModal(feature_r29));
    });
    \u0275\u0275elementStart(1, "td", 91);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, SubscriptionPlansComponent_ng_container_25_section_14_div_13_ng_container_21_tr_2_td_3_Template, 2, 1, "td", 145);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const feature_r29 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFeatureDisplayName(feature_r29), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.apiBreakdownPlans)("ngForTrackBy", ctx_r1.trackByPlan);
  }
}
function SubscriptionPlansComponent_ng_container_25_section_14_div_13_ng_container_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, SubscriptionPlansComponent_ng_container_25_section_14_div_13_ng_container_21_tr_1_Template, 3, 2, "tr", 86)(2, SubscriptionPlansComponent_ng_container_25_section_14_div_13_ng_container_21_tr_2_Template, 4, 3, "tr", 87);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const group_r27 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", group_r27.category);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", group_r27.features)("ngForTrackBy", ctx_r1.trackByFeature);
  }
}
function SubscriptionPlansComponent_ng_container_25_section_14_div_13_div_22_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 149);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const plan_r31 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", plan_r31.name, " = $", \u0275\u0275pipeBind2(2, 2, ctx_r1.getDisplayEstimatedTotal(plan_r31), "1.0-0"), " ");
  }
}
function SubscriptionPlansComponent_ng_container_25_section_14_div_13_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 146)(1, "span", 147);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, SubscriptionPlansComponent_ng_container_25_section_14_div_13_div_22_span_4_Template, 3, 5, "span", 148);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", ctx_r1.formatNumber(ctx_r1.sliderValue), " ", \u0275\u0275pipeBind1(3, 4, ctx_r1.selectedInterval === "year" ? "subscriptionPlans.requestSlider.requestsPerYear" : "subscriptionPlans.requestSlider.requests"), ": ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.apiBreakdownPlans)("ngForTrackBy", ctx_r1.trackByPlan);
  }
}
function SubscriptionPlansComponent_ng_container_25_section_14_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 72)(1, "div", 73)(2, "input", 74);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275listener("input", function SubscriptionPlansComponent_ng_container_25_section_14_div_13_Template_input_input_2_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.apiBreakdownSearchQuery = $event.target.value);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "select", 75);
    \u0275\u0275twoWayListener("ngModelChange", function SubscriptionPlansComponent_ng_container_25_section_14_div_13_Template_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.apiBreakdownCountryFilter, $event) || (ctx_r1.apiBreakdownCountryFilter = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(5, "option", 76);
    \u0275\u0275text(6, "All countries");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, SubscriptionPlansComponent_ng_container_25_section_14_div_13_option_7_Template, 2, 2, "option", 77);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "select", 75);
    \u0275\u0275twoWayListener("ngModelChange", function SubscriptionPlansComponent_ng_container_25_section_14_div_13_Template_select_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.apiBreakdownCategoryFilter, $event) || (ctx_r1.apiBreakdownCategoryFilter = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(9, "option", 76);
    \u0275\u0275text(10, "All categories");
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, SubscriptionPlansComponent_ng_container_25_section_14_div_13_option_11_Template, 2, 2, "option", 77);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 78)(13, "table", 79)(14, "thead", 80)(15, "tr")(16, "th", 81);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, SubscriptionPlansComponent_ng_container_25_section_14_div_13_th_19_Template, 2, 1, "th", 142);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "tbody", 83);
    \u0275\u0275template(21, SubscriptionPlansComponent_ng_container_25_section_14_div_13_ng_container_21_Template, 3, 3, "ng-container", 84);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(22, SubscriptionPlansComponent_ng_container_25_section_14_div_13_div_22_Template, 5, 6, "div", 143);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
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
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 14, "subscriptionPlans.apiBreakdown.apiName"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.apiBreakdownPlans)("ngForTrackBy", ctx_r1.trackByPlan);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.groupedFilteredFeatures)("ngForTrackBy", ctx_r1.trackByGroup);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.requestsPerMonth > 0);
  }
}
function SubscriptionPlansComponent_ng_container_25_section_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 34)(1, "div", 140)(2, "h3", 53);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 141);
    \u0275\u0275listener("click", function SubscriptionPlansComponent_ng_container_25_section_14_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.hideApiBreakdownView());
    });
    \u0275\u0275elementStart(6, "mat-icon", 23);
    \u0275\u0275text(7, "arrow_back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(11, SubscriptionPlansComponent_ng_container_25_section_14_div_11_Template, 2, 0, "div", 66)(12, SubscriptionPlansComponent_ng_container_25_section_14_p_12_Template, 3, 3, "p", 67)(13, SubscriptionPlansComponent_ng_container_25_section_14_div_13_Template, 23, 16, "div", 68);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 5, "subscriptionPlans.apiBreakdown.title"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 7, "subscriptionPlans.apiBreakdown.backToPlans"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.loadingFeatures);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loadingFeatures && ctx_r1.appFeatures.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loadingFeatures && ctx_r1.appFeatures.length > 0);
  }
}
function SubscriptionPlansComponent_ng_container_25_div_15_ng_container_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 162);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "subscriptionPlans.requestSlider.bestValue"), " ");
  }
}
function SubscriptionPlansComponent_ng_container_25_div_15_ng_container_2_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 163);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, "subscriptionPlans.promo.bringBack.planBadge", \u0275\u0275pureFunction1(4, _c12, (ctx_r1.bringBackOffer == null ? null : ctx_r1.bringBackOffer.multiplier) || 3)), " ");
  }
}
function SubscriptionPlansComponent_ng_container_25_div_15_ng_container_2_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 164)(1, "mat-icon", 165);
    \u0275\u0275text(2, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "subscriptionPlans.notOptimalForVolume"));
  }
}
function SubscriptionPlansComponent_ng_container_25_div_15_ng_container_2_p_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 166);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275pipe(3, "number");
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275pipe(5, "lowercase");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const plan_r33 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" $", \u0275\u0275pipeBind2(2, 3, plan_r33.amount, "1.0-0"), " \u2192 $", \u0275\u0275pipeBind2(3, 6, ctx_r1.bringBackFirstMonthCredits(plan_r33), "1.0-0"), " ", \u0275\u0275pipeBind1(5, 11, \u0275\u0275pipeBind1(4, 9, "subscriptionPlans.credits")), " ");
  }
}
function SubscriptionPlansComponent_ng_container_25_div_15_ng_container_2_ng_container_10_p_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 171);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const plan_r33 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" $", ctx_r1.getAmountByMonth(plan_r33), "/", \u0275\u0275pipeBind1(2, 3, "subscriptionPlans.interval.month"), " ", \u0275\u0275pipeBind1(3, 5, "subscriptionPlans.billedAnnually"), " ");
  }
}
function SubscriptionPlansComponent_ng_container_25_div_15_ng_container_2_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 167)(2, "span", 168);
    \u0275\u0275text(3, "$");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 169);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 43);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(10, SubscriptionPlansComponent_ng_container_25_div_15_ng_container_2_ng_container_10_p_10_Template, 4, 7, "p", 170);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const plan_r33 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 3, plan_r33.amount, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("/", \u0275\u0275pipeBind1(9, 6, "subscriptionPlans.interval." + plan_r33.interval), "");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", plan_r33.interval === "year");
  }
}
function SubscriptionPlansComponent_ng_container_25_div_15_ng_container_2_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 172);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 173)(4, "span", 168);
    \u0275\u0275text(5, "$");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 169);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 43);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "p", 171);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const plan_r33 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 5, "subscriptionPlans.requestSlider.estimatedTotal"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(8, 7, ctx_r1.getDisplayEstimatedTotal(plan_r33), "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("/", \u0275\u0275pipeBind1(11, 10, ctx_r1.selectedInterval === "year" ? "subscriptionPlans.interval.year" : "subscriptionPlans.interval.month"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ~", ctx_r1.formatNumber(ctx_r1.sliderValue), " ", \u0275\u0275pipeBind1(14, 12, ctx_r1.selectedInterval === "year" ? "subscriptionPlans.requestSlider.requestsPerYear" : "subscriptionPlans.requestSlider.requests"), " ");
  }
}
function SubscriptionPlansComponent_ng_container_25_div_15_ng_container_2_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 174)(1, "span", 175);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 176);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const plan_r33 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getDiscountDisplayText(plan_r33));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 2, "subscriptionPlans.discountDescription"));
  }
}
function SubscriptionPlansComponent_ng_container_25_div_15_ng_container_2_p_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 177);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "subscriptionPlans.notOptimalHint"), " ");
  }
}
function SubscriptionPlansComponent_ng_container_25_div_15_ng_container_2_ng_container_16_Template(rf, ctx) {
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
function SubscriptionPlansComponent_ng_container_25_div_15_ng_container_2_ng_container_17_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "subscriptionPlans.notOptimalCta"), " ");
  }
}
function SubscriptionPlansComponent_ng_container_25_div_15_ng_container_2_ng_container_17_ng_container_2_ng_container_1_Template(rf, ctx) {
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
function SubscriptionPlansComponent_ng_container_25_div_15_ng_container_2_ng_container_17_ng_container_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const plan_r33 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", plan_r33.isDowngrade ? \u0275\u0275pipeBind1(2, 1, "subscriptionPlans.downgrade") : \u0275\u0275pipeBind1(3, 3, "subscriptionPlans.upgrade"), " ");
  }
}
function SubscriptionPlansComponent_ng_container_25_div_15_ng_container_2_ng_container_17_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, SubscriptionPlansComponent_ng_container_25_div_15_ng_container_2_ng_container_17_ng_container_2_ng_container_1_Template, 3, 3, "ng-container", 14)(2, SubscriptionPlansComponent_ng_container_25_div_15_ng_container_2_ng_container_17_ng_container_2_ng_container_2_Template, 4, 5, "ng-container", 14);
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
function SubscriptionPlansComponent_ng_container_25_div_15_ng_container_2_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, SubscriptionPlansComponent_ng_container_25_div_15_ng_container_2_ng_container_17_ng_container_1_Template, 3, 3, "ng-container", 14)(2, SubscriptionPlansComponent_ng_container_25_div_15_ng_container_2_ng_container_17_ng_container_2_Template, 3, 2, "ng-container", 14);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const plan_r33 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isPlanCompetitive(plan_r33));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isPlanCompetitive(plan_r33));
  }
}
function SubscriptionPlansComponent_ng_container_25_div_15_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 151);
    \u0275\u0275template(2, SubscriptionPlansComponent_ng_container_25_div_15_ng_container_2_span_2_Template, 3, 3, "span", 152)(3, SubscriptionPlansComponent_ng_container_25_div_15_ng_container_2_span_3_Template, 3, 6, "span", 153)(4, SubscriptionPlansComponent_ng_container_25_div_15_ng_container_2_span_4_Template, 6, 3, "span", 154);
    \u0275\u0275elementStart(5, "div", 155)(6, "h3", 53);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, SubscriptionPlansComponent_ng_container_25_div_15_ng_container_2_p_8_Template, 6, 13, "p", 156);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 157);
    \u0275\u0275template(10, SubscriptionPlansComponent_ng_container_25_div_15_ng_container_2_ng_container_10_Template, 11, 8, "ng-container", 158)(11, SubscriptionPlansComponent_ng_container_25_div_15_ng_container_2_ng_template_11_Template, 15, 14, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(13, SubscriptionPlansComponent_ng_container_25_div_15_ng_container_2_div_13_Template, 6, 4, "div", 159);
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, SubscriptionPlansComponent_ng_container_25_div_15_ng_container_2_p_14_Template, 3, 3, "p", 160);
    \u0275\u0275elementStart(15, "button", 161);
    \u0275\u0275listener("click", function SubscriptionPlansComponent_ng_container_25_div_15_ng_container_2_Template_button_click_15_listener() {
      const plan_r33 = \u0275\u0275restoreView(_r32).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.upgradePlan(plan_r33));
    });
    \u0275\u0275template(16, SubscriptionPlansComponent_ng_container_25_div_15_ng_container_2_ng_container_16_Template, 3, 3, "ng-container", 14)(17, SubscriptionPlansComponent_ng_container_25_div_15_ng_container_2_ng_container_17_Template, 3, 2, "ng-container", 14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const plan_r33 = ctx.$implicit;
    const planPricingWhenEstimating_r34 = \u0275\u0275reference(12);
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(16, _c5, plan_r33._id && plan_r33._id === ctx_r1.getBestValuePlanId() && ctx_r1.requestsPerMonth > 0, !(plan_r33._id && plan_r33._id === ctx_r1.getBestValuePlanId() && ctx_r1.requestsPerMonth > 0), !ctx_r1.isPlanCompetitive(plan_r33), plan_r33.code === (ctx_r1.currentSubscription == null ? null : ctx_r1.currentSubscription.subscriptionPlan == null ? null : ctx_r1.currentSubscription.subscriptionPlan.code)));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", plan_r33._id && plan_r33._id === ctx_r1.getBestValuePlanId() && ctx_r1.requestsPerMonth > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isBringBackPromoPlan(plan_r33));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isPlanCompetitive(plan_r33));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", plan_r33.name, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isBringBackPromoPlan(plan_r33));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(21, _c6, !ctx_r1.isPlanCompetitive(plan_r33)));
    \u0275\u0275attribute("aria-hidden", !ctx_r1.isPlanCompetitive(plan_r33));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.requestsPerMonth <= 0)("ngIfElse", planPricingWhenEstimating_r34);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", plan_r33.discount == null ? null : plan_r33.discount.discount);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isPlanCompetitive(plan_r33));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(23, _c7, plan_r33.code === (ctx_r1.currentSubscription == null ? null : ctx_r1.currentSubscription.subscriptionPlan == null ? null : ctx_r1.currentSubscription.subscriptionPlan.code), plan_r33.code !== (ctx_r1.currentSubscription == null ? null : ctx_r1.currentSubscription.subscriptionPlan == null ? null : ctx_r1.currentSubscription.subscriptionPlan.code) && ctx_r1.isPlanCompetitive(plan_r33), plan_r33.code !== (ctx_r1.currentSubscription == null ? null : ctx_r1.currentSubscription.subscriptionPlan == null ? null : ctx_r1.currentSubscription.subscriptionPlan.code) && !ctx_r1.isPlanCompetitive(plan_r33)))("disabled", plan_r33.code === (ctx_r1.currentSubscription == null ? null : ctx_r1.currentSubscription.subscriptionPlan == null ? null : ctx_r1.currentSubscription.subscriptionPlan.code) || !ctx_r1.isPlanCompetitive(plan_r33));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", plan_r33.code === (ctx_r1.currentSubscription == null ? null : ctx_r1.currentSubscription.subscriptionPlan == null ? null : ctx_r1.currentSubscription.subscriptionPlan.code));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", plan_r33.code !== (ctx_r1.currentSubscription == null ? null : ctx_r1.currentSubscription.subscriptionPlan == null ? null : ctx_r1.currentSubscription.subscriptionPlan.code));
  }
}
function SubscriptionPlansComponent_ng_container_25_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 150, 0);
    \u0275\u0275template(2, SubscriptionPlansComponent_ng_container_25_div_15_ng_container_2_Template, 18, 27, "ng-container", 84);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.visiblePlans)("ngForTrackBy", ctx_r1.trackByPlan);
  }
}
function SubscriptionPlansComponent_ng_container_25_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 178)(1, "button", 179);
    \u0275\u0275listener("click", function SubscriptionPlansComponent_ng_container_25_div_16_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r35);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.switchToCurrent());
    });
    \u0275\u0275elementStart(2, "mat-icon", 23);
    \u0275\u0275text(3, "arrow_back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 1, "subscriptionPlans.backToCurrentPlan"));
  }
}
function SubscriptionPlansComponent_ng_container_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 94)(2, "div", 95)(3, "button", 96);
    \u0275\u0275listener("click", function SubscriptionPlansComponent_ng_container_25_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.changeInterval("month"));
    });
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 97);
    \u0275\u0275listener("click", function SubscriptionPlansComponent_ng_container_25_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.changeInterval("year"));
    });
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementStart(9, "span", 98);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(12, SubscriptionPlansComponent_ng_container_25_div_12_Template, 2, 0, "div", 99)(13, SubscriptionPlansComponent_ng_container_25_section_13_Template, 30, 34, "section", 49)(14, SubscriptionPlansComponent_ng_container_25_section_14_Template, 14, 9, "section", 49)(15, SubscriptionPlansComponent_ng_container_25_div_15_Template, 3, 2, "div", 100)(16, SubscriptionPlansComponent_ng_container_25_div_16_Template, 7, 3, "div", 101);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r1.selectedInterval === "month" ? "bg-stone-950 text-white dark:bg-white dark:text-gray-950" : "text-stone-600 hover:text-stone-900 dark:text-stone-300 dark:hover:text-white");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 10, "subscriptionPlans.monthly"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r1.selectedInterval === "year" ? "bg-stone-950 text-white dark:bg-white dark:text-gray-950" : "text-stone-600 hover:text-stone-900 dark:text-stone-300 dark:hover:text-white");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 12, "subscriptionPlans.yearly"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 14, "subscriptionPlans.save20"));
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
function SubscriptionPlansComponent_div_26_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "span", 186);
    \u0275\u0275text(2, " Internal Code ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 192);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedFeatureForModal.code, " ");
  }
}
function SubscriptionPlansComponent_div_26_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "span", 186);
    \u0275\u0275text(2, " Region ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 193);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getCountryDisplayName(ctx_r1.selectedFeatureForModal.country) || ctx_r1.selectedFeatureForModal.country, " ");
  }
}
function SubscriptionPlansComponent_div_26_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "span", 186);
    \u0275\u0275text(2, " Your Pricing ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 194)(4, "span", 195);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 196);
    \u0275\u0275text(8, " CREDITS ");
    \u0275\u0275elementStart(9, "span", 197);
    \u0275\u0275text(10, "/ request");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 1, ctx_r1.getEffectivePriceForApi(ctx_r1.selectedFeatureForModal, ctx_r1.currentSubscription.subscriptionPlan), "1.2-4"), " ");
  }
}
function SubscriptionPlansComponent_div_26_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "span", 186);
    \u0275\u0275text(2, " Standard API Price ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 194)(4, "span", 195);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 196);
    \u0275\u0275text(8, " CREDITS ");
    \u0275\u0275elementStart(9, "span", 197);
    \u0275\u0275text(10, "/ request");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 1, (tmp_2_0 = ctx_r1.selectedFeatureForModal.price) !== null && tmp_2_0 !== void 0 ? tmp_2_0 : 0, "1.2-4"), " ");
  }
}
function SubscriptionPlansComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 180);
    \u0275\u0275listener("click", function SubscriptionPlansComponent_div_26_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r36);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeFeatureModal());
    });
    \u0275\u0275elementStart(1, "div", 181);
    \u0275\u0275listener("click", function SubscriptionPlansComponent_div_26_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r36);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "button", 182);
    \u0275\u0275listener("click", function SubscriptionPlansComponent_div_26_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r36);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeFeatureModal());
    });
    \u0275\u0275elementStart(3, "mat-icon", 23);
    \u0275\u0275text(4, "close");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 183)(6, "div", 184)(7, "mat-icon");
    \u0275\u0275text(8, "link");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div")(10, "h2", 53);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 135);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 185)(15, "div")(16, "span", 186);
    \u0275\u0275text(17, " Endpoint URL ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 187);
    \u0275\u0275listener("click", function SubscriptionPlansComponent_div_26_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r36);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.copyUrlToClipboard(ctx_r1.selectedFeatureForModal.url));
    });
    \u0275\u0275elementStart(19, "span", 188);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "mat-icon", 23);
    \u0275\u0275text(22, "content_copy");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 189);
    \u0275\u0275template(24, SubscriptionPlansComponent_div_26_div_24_Template, 5, 1, "div", 14)(25, SubscriptionPlansComponent_div_26_div_25_Template, 5, 1, "div", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275template(26, SubscriptionPlansComponent_div_26_div_26_Template, 11, 4, "div", 14)(27, SubscriptionPlansComponent_div_26_div_27_Template, 11, 4, "div", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 190)(29, "button", 191);
    \u0275\u0275listener("click", function SubscriptionPlansComponent_div_26_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r36);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openPostmanForFeature(ctx_r1.selectedFeatureForModal));
    });
    \u0275\u0275elementStart(30, "span");
    \u0275\u0275text(31, "Open in Postman");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "mat-icon", 23);
    \u0275\u0275text(33, "arrow_forward");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFeatureDisplayName(ctx_r1.selectedFeatureForModal), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getCategoryDisplayName(ctx_r1.selectedFeatureForModal.baseCategory) || "API Endpoint", " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFullEndpointUrl(ctx_r1.selectedFeatureForModal.url), " ");
    \u0275\u0275advance(4);
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
  constructor(_subscriptionService, _router, _route, _translocoService, _snackBar, _authGate, _userService) {
    this._subscriptionService = _subscriptionService;
    this._router = _router;
    this._route = _route;
    this._translocoService = _translocoService;
    this._snackBar = _snackBar;
    this._authGate = _authGate;
    this._userService = _userService;
    this._unsubscribeAll = new Subject();
    this.currentSubscription = null;
    this.plans = [];
    this.loadingPlans = false;
    this.currentView = "current";
    this.selectedInterval = "month";
    this.isLoading = false;
    this.hasBillingSetup = false;
    this.hasPaymentMethod = false;
    this.bringBackOffer = null;
    this.requestsPerMonth = 2e3;
    this.requestsPerYear = 24e3;
    this.BASE_REQUEST_PRICE = 0.3;
    this.PLAN_VISIBILITY_DOMINANCE_MARGIN_MIN_USD = 100;
    this.PLAN_VISIBILITY_DOMINANCE_MARGIN_FRACTION = 0.18;
    this.MONTHLY_SLIDER_MAX = 2e4;
    this.MONTHLY_SLIDER_STEP = 1;
    this.YEARLY_SLIDER_MAX = 5e5;
    this.YEARLY_SLIDER_STEP = 1;
    this.estimatorMode = "requests";
    this.targetMonthlyBudget = null;
    this.budgetReferencePlanId = "";
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
    this._sessionConfirmHandled = false;
  }
  ngOnInit() {
    this._authGate.runWithAuthOrDialog({
      onAuthenticated: () => this._bootstrapSubscriptionPlansAfterAuth(),
      panelClass: "auth-required-dialog"
    });
  }
  _bootstrapSubscriptionPlansAfterAuth() {
    this._loadBringBackOffer();
    this._loadCurrentSubscription();
    this._checkBillingSetup();
    this._confirmSessionIfPresent();
  }
  _loadBringBackOffer() {
    this._userService.get().pipe(catchError((err) => {
      console.error("Failed to load session for bring-back offer:", err);
      return of(null);
    })).subscribe((user) => {
      const offer = user?.bringBackOffer;
      this.bringBackOffer = offer?.kind === "bring_back" && offer.eligible ? offer : null;
    });
  }
  get showBringBackPromoBanner() {
    return Boolean(this.bringBackOffer?.eligible);
  }
  get bringBackPromoExampleCredits() {
    const multiplier = this.bringBackOffer?.multiplier || 2;
    return Math.round(400 * multiplier);
  }
  /**
   * Basic / Plus / Business (and common locale aliases) qualify for first-month promo badge.
   */
  isBringBackPromoPlan(plan) {
    if (!this.showBringBackPromoBanner) {
      return false;
    }
    const name = (plan.name || "").toLowerCase();
    return /\bbasic\b/.test(name) || name.includes("b\xE1sico") || /\bplus\b/.test(name) || /\bbusiness\b/.test(name) || name.includes("empresarial") || /\bsmart\s*basic\b/.test(name) || /\bsmart\s*plus\b/.test(name) || /\bsmart\s*business\b/.test(name);
  }
  bringBackFirstMonthCredits(plan) {
    const amount = Number(plan.amount) || 0;
    const multiplier = this.bringBackOffer?.multiplier || 2;
    return Math.round(amount * multiplier);
  }
  ngOnDestroy() {
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
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
    this.selectedPlanRequests = this.getStripeCheckoutQuantityFromEstimator(plan);
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
    this._setRequestsFromInterval(value);
    this._syncBudgetFromRequests();
  }
  /**
   * Direct numeric input for requests. Clamps to [0, sliderMax] and keeps
   * monthly/yearly buckets in sync. Triggered by both modes' inputs.
   */
  onRequestsInput(rawValue) {
    const parsed = Math.max(0, Math.min(this.sliderMax, Math.round(Number(rawValue) || 0)));
    this._setRequestsFromInterval(parsed);
    this._syncBudgetFromRequests();
  }
  /**
   * User typed a target monthly $ amount: pick the plan + R that get closest
   * to that target, then set reference + `requestsPerMonth` (not a static ref plan).
   * Tie-break: same error => higher R (more API volume for the same spend).
   */
  onBudgetInput(rawValue) {
    const target = Math.max(0, Number(rawValue) || 0);
    this.targetMonthlyBudget = target;
    this._autoPickReferenceAndRequestsForTarget(target);
  }
  onReferencePlanChange(planId) {
    this.budgetReferencePlanId = planId;
    if (this.estimatorMode === "budget" && this.targetMonthlyBudget != null) {
      const plan = this.plans.find((p) => p._id === planId);
      if (plan) {
        const r = this._findBestRForTargetPlan(plan, this.targetMonthlyBudget);
        this.requestsPerMonth = r;
        this.requestsPerYear = r * 12;
      }
    }
  }
  setEstimatorMode(mode) {
    this.estimatorMode = mode;
    if (mode === "budget") {
      const plan = this._getReferencePlan();
      this.targetMonthlyBudget = plan ? Math.round(this.getEstimatedTotal(plan)) : null;
    }
  }
  /**
   * Honest "closest achievable" copy: when the user types a target budget,
   * the discrete cost-per-request grid usually can't hit it exactly. Returns
   * the rounded delta (positive = over budget, negative = under).
   */
  getBudgetDelta() {
    if (this.estimatorMode !== "budget" || this.targetMonthlyBudget == null)
      return null;
    const plan = this._getReferencePlan();
    if (!plan)
      return null;
    const achieved = this.getEstimatedTotal(plan);
    return Math.round((achieved - this.targetMonthlyBudget) * 100) / 100;
  }
  /** Exact monthly total achievable for the budget reference plan. */
  getBudgetAchievedTotal() {
    const plan = this._getReferencePlan();
    return plan ? this.getEstimatedTotal(plan) : 0;
  }
  get budgetReferencePlan() {
    return this._getReferencePlan();
  }
  _setRequestsFromInterval(value) {
    if (this.selectedInterval === "year") {
      this.requestsPerYear = value;
      this.requestsPerMonth = Math.round(value / 12);
    } else {
      this.requestsPerMonth = value;
      this.requestsPerYear = value * 12;
    }
  }
  _syncBudgetFromRequests() {
    if (this.estimatorMode !== "budget")
      return;
    const plan = this._getReferencePlan();
    if (!plan)
      return;
    this.targetMonthlyBudget = Math.round(this.getEstimatedTotal(plan));
  }
  _getReferencePlan() {
    const candidates = this.plans.filter((p) => p._id);
    if (!candidates.length)
      return null;
    const byId = candidates.find((p) => p._id === this.budgetReferencePlanId);
    if (byId)
      return byId;
    const bestId = this.getBestValuePlanId();
    return candidates.find((p) => p._id === bestId) || candidates[0];
  }
  /**
   * Total monthly price for a plan at an explicit R (ignores `requestsPerMonth` on the component).
   */
  _getEstimatedTotalForR(plan, r) {
    const base = this.getBaseMonthlyAmount(plan);
    const inc = this.getIncludedRequests(plan);
    const ppr = this.getEffectiveCostPerRequest(plan);
    const useInc = isFinite(inc) ? inc : 0;
    const extra = Math.max(0, r - useInc);
    return base + extra * ppr;
  }
  /**
   * Integer R in [0, cap] that minimizes |f(R) - target| for this plan.
   * Ties: prefer larger R (more included usage / volume for the same error).
   */
  _findBestRForTargetPlan(plan, target) {
    const cap = this.MONTHLY_SLIDER_MAX;
    let bestR = 0;
    let bestErr = Infinity;
    for (let r = 0; r <= cap; r++) {
      const total = this._getEstimatedTotalForR(plan, r);
      const err = Math.abs(total - target);
      if (err < bestErr) {
        bestErr = err;
        bestR = r;
      } else if (err === bestErr && r > bestR) {
        bestR = r;
      }
    }
    return bestR;
  }
  /**
   * Among visible plans, pick the one that can get closest to `target` monthly
   * (using its own optimal R), then set `budgetReferencePlanId` and requests.
   * Tie on error: pick the pair with the larger R (e.g. $1000 → Business at ~6.7k
   * over Plus at 5k when both can hit the target exactly).
   */
  _autoPickReferenceAndRequestsForTarget(target) {
    const list = this.visiblePlans.filter((p) => p._id);
    if (!list.length)
      return;
    let bestPlan = null;
    let bestR = 0;
    let bestErr = Infinity;
    for (const plan of list) {
      const r = this._findBestRForTargetPlan(plan, target);
      const total = this._getEstimatedTotalForR(plan, r);
      const err = Math.abs(total - target);
      if (err < bestErr) {
        bestErr = err;
        bestR = r;
        bestPlan = plan;
      } else if (err === bestErr && r > bestR) {
        bestR = r;
        bestPlan = plan;
      }
    }
    if (bestPlan?._id) {
      this.budgetReferencePlanId = bestPlan._id;
      this.requestsPerMonth = bestR;
      this.requestsPerYear = bestR * 12;
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
  /**
   * Maps estimator volume to Stripe checkout `requestsPerMonth` (line_items quantity).
   * When slider is at 0, uses prepaid volume aligned with the sticker base (~monthly_amount / discounted $/request), never zero.
   */
  getStripeCheckoutQuantityFromEstimator(plan) {
    if (this.requestsPerMonth > 0) {
      return Math.round(this.requestsPerMonth);
    }
    const included = this.getIncludedRequests(plan);
    if (Number.isFinite(included) && included >= 1) {
      return Math.round(included);
    }
    const lim = plan.limit;
    const fromLimit = typeof lim === "number" && Number.isFinite(lim) ? Math.round(lim) : 1;
    return Math.max(1, fromLimit);
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
    const candidatesPool = this.competitivePlans;
    if (!candidatesPool.length)
      return "";
    if (this.requestsPerMonth > 0) {
      let candidates = candidatesPool.filter((p) => p.discount?.discount);
      if (candidates.length) {
        if (this.requestsPerMonth >= 400) {
          candidates = candidates.filter((p) => !this._isStarterPlan(p));
        }
        if (candidates.length) {
          return candidates.reduce((best, plan) => this.getTotalMonthlyCost(plan) < this.getTotalMonthlyCost(best) ? plan : best)._id;
        }
      }
    }
    return candidatesPool.reduce((best, plan) => this.getTotalMonthlyCost(plan) < this.getTotalMonthlyCost(best) ? plan : best)._id;
  }
  /**
   * Whether a plan is competitive at the user's current request volume.
   * Current subscription always counts as competitive; otherwise the plan must beat the dominance check
   * (no other tier is significantly cheaper at the same R) and not be a starter SKU at high volume.
   */
  isPlanCompetitive(plan) {
    const isCurrent = plan.code === this.currentSubscription?.subscriptionPlan?.code;
    if (isCurrent)
      return true;
    if (!plan._id)
      return false;
    if (this._isStarterPlan(plan) && this.requestsPerMonth >= 2e3)
      return false;
    return !this._isDominatedCompetitivelyByAnyPlan(plan);
  }
  _dominanceMarginUsd(dominatorsTotal) {
    return Math.max(this.PLAN_VISIBILITY_DOMINANCE_MARGIN_MIN_USD, dominatorsTotal * this.PLAN_VISIBILITY_DOMINANCE_MARGIN_FRACTION);
  }
  _isDominatedCompetitivelyByAnyPlan(plan) {
    const paidPlans = this.plans.filter((p) => p._id);
    if (!paidPlans.length)
      return false;
    const planTotal = this.getEstimatedTotal(plan);
    for (const rival of paidPlans) {
      if (rival._id === plan._id)
        continue;
      const rivalTotal = this.getEstimatedTotal(rival);
      if (planTotal > rivalTotal + this._dominanceMarginUsd(rivalTotal))
        return true;
    }
    return false;
  }
  _isStarterPlan(plan) {
    return /starter/i.test(plan.name) || (plan.amount ?? 0) <= 49;
  }
  /** All paid plans, regardless of competitiveness. Cards render dominated tiers as blurred (handled in template). */
  get visiblePlans() {
    return this.plans.filter((p) => p._id);
  }
  /** Subset of visiblePlans that beat the dominance check at the current R. */
  get competitivePlans() {
    return this.visiblePlans.filter((p) => this.isPlanCompetitive(p));
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
    if (!this.budgetReferencePlanId || !this.plans.some((p) => p._id === this.budgetReferencePlanId)) {
      this.budgetReferencePlanId = this.getBestValuePlanId();
    }
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
    const sessionId = this._route.snapshot.queryParamMap.get("session_id")?.trim();
    if (!sessionId || this._sessionConfirmHandled)
      return;
    this._sessionConfirmHandled = true;
    this._clearSessionIdFromUrl();
    this._subscriptionService.confirmCheckoutSession(sessionId).subscribe({
      next: () => {
        this._showSessionConfirmSuccessToast();
        this._loadCurrentSubscription();
      },
      error: (error) => {
        console.error("Error confirming checkout session:", error);
        this._handleSessionConfirmError(error);
      }
    });
  }
  _clearSessionIdFromUrl() {
    void this._router.navigate([], {
      queryParams: { session_id: null },
      queryParamsHandling: "merge",
      replaceUrl: true
    });
  }
  _showSessionConfirmSuccessToast() {
    this._snackBar.open(this._translocoService.translate("subscriptionPlans.sessionConfirmSuccess") || "Subscription activated successfully.", void 0, { duration: 5e3 });
  }
  _showSessionConfirmErrorToast() {
    this._snackBar.open(this._translocoService.translate("subscriptionPlans.sessionConfirmError") || "Could not confirm subscription. Please try again.", void 0, { duration: 5e3 });
  }
  _handleSessionConfirmError(error) {
    const isWrongAccount = this._isSessionClientMismatchError(error);
    this._subscriptionService.getMySubscription({ where_active: true, findOne: 1 }).subscribe({
      next: (response) => {
        if (response?.data) {
          this.currentSubscription = response.data;
          this._formatCurrentSubscription();
          this.currentView = "current";
          this._loadMyListFeatures();
          this._showSessionConfirmSuccessToast();
          return;
        }
        if (isWrongAccount) {
          this._showSessionConfirmWrongAccountToast();
          return;
        }
        this._showSessionConfirmErrorToast();
      },
      error: () => {
        if (isWrongAccount) {
          this._showSessionConfirmWrongAccountToast();
          return;
        }
        this._showSessionConfirmErrorToast();
      }
    });
  }
  _isSessionClientMismatchError(error) {
    const body = error?.error;
    return body?.message === "session_client_mismatch";
  }
  _showSessionConfirmWrongAccountToast() {
    this._snackBar.open(this._translocoService.translate("subscriptionPlans.sessionConfirmWrongAccount") || "This checkout belongs to a different account. Sign in with the account that started checkout, or start a new subscription.", void 0, { duration: 8e3 });
  }
  _checkBillingSetup() {
    this._subscriptionService.getBillingConfig({ findOne: true }).subscribe({
      next: (response) => {
        const cs = extractClientSettingsPayload(response);
        const inv = cs?.invoiceSettings;
        this.hasBillingSetup = invoiceBillingDetailsComplete(inv);
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
      return new (__ngFactoryType__ || _SubscriptionPlansComponent)(\u0275\u0275directiveInject(SubscriptionService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(TranslocoService), \u0275\u0275directiveInject(MatSnackBar), \u0275\u0275directiveInject(AuthRequiredGateService), \u0275\u0275directiveInject(UserService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SubscriptionPlansComponent, selectors: [["subscription-plans"]], viewQuery: function SubscriptionPlansComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c02, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.plansExploreAnchor = _t.first);
      }
    }, decls: 27, vars: 19, consts: [["plansExploreAnchor", ""], ["planPricingWhenEstimating", ""], [3, "goToBilling", "isOpen"], [3, "confirm", "cancel", "comparePlans", "isOpen", "currentPlan", "newPlan", "allPlans", "requestsPerMonth", "bringBackOffer"], [1, "subscription-page", "flex", "min-h-screen", "min-w-0", "flex-auto", "flex-col", "bg-stone-50", "dark:bg-gray-950"], [1, "border-b", "border-stone-200/90", "bg-white/90", "px-5", "py-6", "backdrop-blur-sm", "dark:border-gray-800", "dark:bg-gray-950/90", "md:px-8", "md:py-8"], [1, "mx-auto", "flex", "w-full", "max-w-7xl", "flex-col", "gap-5"], [1, "flex", "flex-wrap", "items-center", "text-xs", "font-medium", "leading-none", "text-stone-500", "dark:text-stone-400"], ["routerLink", "/home", 1, "cursor-pointer", "text-stone-700", "underline-offset-4", "hover:underline", "dark:text-stone-300"], ["svgIcon", "heroicons_solid:chevron-right", 1, "icon-size-4", "mx-2", "text-stone-400"], [1, "cursor-default", "text-stone-600", "dark:text-stone-300"], [1, "flex", "flex-col", "gap-4", "lg:flex-row", "lg:items-end", "lg:justify-between"], [1, "max-w-2xl"], [1, "text-2xl", "font-semibold", "tracking-tight", "text-stone-950", "dark:text-white", "md:text-3xl"], [4, "ngIf"], [1, "mt-2", "text-sm", "leading-6", "text-stone-500", "dark:text-stone-400", "md:text-base"], ["class", "flex flex-wrap items-center gap-3", 4, "ngIf"], [1, "flex", "flex-auto", "flex-col", "px-5", "py-8", "md:px-8", "md:py-10"], [1, "mx-auto", "flex", "w-full", "max-w-7xl", "flex-col", "gap-6"], ["class", "rounded-2xl border border-amber-200/80 bg-gradient-to-br from-amber-50 via-white to-orange-50/80 px-5 py-5 dark:border-amber-900/60 dark:from-amber-950/50 dark:via-gray-950 dark:to-gray-950 md:px-6", 4, "ngIf"], ["class", "fixed inset-0 z-50 flex items-center justify-center bg-stone-950/60 p-4 backdrop-blur-sm", 3, "click", 4, "ngIf"], [1, "flex", "flex-wrap", "items-center", "gap-3"], ["type", "button", 1, "inline-flex", "min-h-11", "items-center", "justify-center", "gap-2", "rounded-xl", "border", "border-stone-200", "px-4", "text-sm", "font-medium", "text-stone-800", "transition", "hover:bg-stone-50", "dark:border-gray-700", "dark:text-stone-100", "dark:hover:bg-gray-800", 3, "click"], [1, "!h-4", "!w-4", "!text-base"], ["type", "button", 1, "inline-flex", "min-h-11", "items-center", "justify-center", "gap-2", "rounded-xl", "bg-stone-950", "px-4", "text-sm", "font-medium", "text-white", "transition", "hover:bg-stone-800", "dark:bg-white", "dark:text-gray-950", "dark:hover:bg-stone-200", 3, "click"], [1, "rounded-2xl", "border", "border-amber-200/80", "bg-gradient-to-br", "from-amber-50", "via-white", "to-orange-50/80", "px-5", "py-5", "dark:border-amber-900/60", "dark:from-amber-950/50", "dark:via-gray-950", "dark:to-gray-950", "md:px-6"], [1, "flex", "flex-col", "gap-4", "sm:flex-row", "sm:items-start", "sm:justify-between"], [1, "flex", "min-w-0", "flex-1", "items-start", "gap-3"], [1, "flex", "h-10", "w-10", "shrink-0", "items-center", "justify-center", "rounded-xl", "bg-amber-600/15", "text-amber-800", "dark:bg-amber-400/15", "dark:text-amber-300"], [1, "min-w-0", "space-y-1.5"], [1, "inline-flex", "rounded-full", "border", "border-amber-200/90", "bg-amber-100", "px-2.5", "py-0.5", "text-[10px]", "font-semibold", "uppercase", "tracking-[0.18em]", "text-amber-950", "dark:border-amber-800", "dark:bg-amber-900/50", "dark:text-amber-200"], [1, "text-base", "font-semibold", "text-amber-950", "dark:text-amber-50"], [1, "text-sm", "leading-relaxed", "text-amber-950/90", "dark:text-amber-100/90"], [1, "text-sm", "font-semibold", "text-amber-950", "dark:text-amber-50"], [1, "rounded-2xl", "border", "border-stone-200/90", "bg-white", "p-5", "shadow-sm", "dark:border-gray-800", "dark:bg-gray-900/70", "md:p-6"], [1, "flex", "flex-col", "gap-5", "md:flex-row", "md:items-start", "md:justify-between"], [1, "flex", "items-start", "gap-4"], [1, "flex", "h-11", "w-11", "shrink-0", "items-center", "justify-center", "rounded-xl", "border", "border-stone-200", "bg-stone-50", "text-stone-700", "dark:border-gray-800", "dark:bg-gray-950", "dark:text-stone-200"], [1, "inline-flex", "items-center", "gap-1.5", "rounded-full", "border", "border-emerald-200", "bg-emerald-50", "px-2.5", "py-0.5", "text-[11px]", "font-medium", "uppercase", "tracking-[0.18em]", "text-emerald-700", "dark:border-emerald-900/70", "dark:bg-emerald-950/40", "dark:text-emerald-300"], [1, "h-1.5", "w-1.5", "rounded-full", "bg-emerald-500"], [1, "mt-2", "text-xl", "font-semibold", "text-stone-950", "dark:text-white"], [1, "mt-1", "flex", "items-baseline", "gap-1"], [1, "text-3xl", "font-semibold", "tracking-tight", "text-stone-950", "dark:text-white"], [1, "text-sm", "text-stone-500", "dark:text-stone-400"], [1, "grid", "grid-cols-1", "gap-3", "sm:grid-cols-3", "md:max-w-md", "md:grid-cols-3"], [1, "rounded-xl", "border", "border-stone-200", "p-3", "dark:border-gray-800"], [1, "text-[11px]", "font-medium", "uppercase", "tracking-[0.16em]", "text-stone-400", "dark:text-stone-500"], [1, "mt-1", "text-sm", "font-medium", "text-stone-950", "dark:text-white"], ["class", "mt-1 text-sm font-medium", 4, "ngIf"], ["class", "rounded-2xl border border-stone-200/90 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900/70 md:p-6", 4, "ngIf"], [1, "mt-1", "text-sm", "font-medium"], [1, "text-emerald-600", "dark:text-emerald-400"], [1, "text-amber-600", "dark:text-amber-400"], [1, "text-base", "font-semibold", "text-stone-950", "dark:text-white"], [1, "mt-4", "grid", "grid-cols-1", "gap-3", "md:grid-cols-2"], [4, "ngFor", "ngForOf"], ["class", "flex items-center gap-2 text-sm text-stone-700 dark:text-stone-200", 4, "ngIf"], [1, "flex", "items-center", "gap-2", "text-sm", "text-stone-700", "dark:text-stone-200"], [1, "!h-4", "!w-4", "!text-base", "text-emerald-600", "dark:text-emerald-400"], ["class", "ml-auto text-xs font-medium text-stone-500 dark:text-stone-400", 4, "ngIf"], [1, "ml-auto", "text-xs", "font-medium", "text-stone-500", "dark:text-stone-400"], [1, "mt-3", "text-sm", "leading-6", "text-stone-500", "dark:text-stone-400"], [1, "mt-4", "space-y-2"], [1, "flex", "items-start", "gap-2", "text-sm", "text-stone-700", "dark:text-stone-200"], ["type", "button", "class", "mt-5 inline-flex items-center gap-2 text-sm font-medium text-stone-950 underline-offset-4 hover:underline dark:text-white", 3, "click", 4, "ngIf"], ["type", "button", 1, "mt-5", "inline-flex", "items-center", "gap-2", "text-sm", "font-medium", "text-stone-950", "underline-offset-4", "hover:underline", "dark:text-white", 3, "click"], ["class", "mt-6 flex items-center justify-center py-10", 4, "ngIf"], ["class", "mt-6 text-center text-sm text-stone-500 dark:text-stone-400", 4, "ngIf"], ["class", "mt-5", 4, "ngIf"], [1, "mt-6", "flex", "items-center", "justify-center", "py-10"], [1, "h-8", "w-8", "animate-spin", "rounded-full", "border-2", "border-stone-200", "border-t-stone-900", "dark:border-gray-800", "dark:border-t-white"], [1, "mt-6", "text-center", "text-sm", "text-stone-500", "dark:text-stone-400"], [1, "mt-5"], [1, "flex", "flex-col", "gap-3", "md:flex-row", "md:items-center"], ["type", "text", 1, "min-h-10", "flex-1", "rounded-xl", "border", "border-stone-200", "bg-white", "px-3", "text-sm", "text-stone-900", "placeholder:text-stone-400", "focus:border-stone-400", "focus:outline-none", "dark:border-gray-700", "dark:bg-gray-950", "dark:text-white", 3, "input", "placeholder", "value"], [1, "min-h-10", "rounded-xl", "border", "border-stone-200", "bg-white", "px-3", "text-sm", "text-stone-900", "focus:border-stone-400", "focus:outline-none", "dark:border-gray-700", "dark:bg-gray-950", "dark:text-white", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "mt-4", "overflow-x-auto", "rounded-xl", "border", "border-stone-200", "dark:border-gray-800"], [1, "min-w-full", "divide-y", "divide-stone-200", "dark:divide-gray-800", "text-sm"], [1, "bg-stone-50", "dark:bg-gray-950"], [1, "px-4", "py-3", "text-left", "text-[11px]", "font-semibold", "uppercase", "tracking-[0.18em]", "text-stone-500", "dark:text-stone-400"], [1, "px-4", "py-3", "text-right", "text-[11px]", "font-semibold", "uppercase", "tracking-[0.18em]", "text-stone-500", "dark:text-stone-400"], [1, "divide-y", "divide-stone-200", "dark:divide-gray-800", "bg-white", "dark:bg-gray-900/40"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "value"], ["class", "bg-stone-50/70 dark:bg-gray-950/60", 4, "ngIf"], ["class", "cursor-pointer transition hover:bg-stone-50 dark:hover:bg-gray-950/50", 3, "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "bg-stone-50/70", "dark:bg-gray-950/60"], ["colspan", "2", 1, "px-4", "py-2", "text-[11px]", "font-semibold", "uppercase", "tracking-[0.18em]", "text-stone-500", "dark:text-stone-400"], [1, "cursor-pointer", "transition", "hover:bg-stone-50", "dark:hover:bg-gray-950/50", 3, "click"], [1, "px-4", "py-3", "text-stone-900", "dark:text-stone-100"], [1, "px-4", "py-3", "text-right", "font-medium", "text-stone-900", "dark:text-white"], [1, "ml-1", "text-[10px]", "font-semibold", "uppercase", "tracking-[0.18em]", "text-stone-400", "dark:text-stone-500"], [1, "flex", "justify-center"], [1, "inline-flex", "rounded-full", "border", "border-stone-200", "bg-white", "p-1", "text-sm", "font-medium", "dark:border-gray-800", "dark:bg-gray-900/70"], ["type", "button", 1, "rounded-full", "px-5", "py-2", "transition", 3, "click", "ngClass"], ["type", "button", 1, "relative", "rounded-full", "px-5", "py-2", "transition", 3, "click", "ngClass"], [1, "ml-2", "inline-flex", "rounded-full", "bg-emerald-600", "px-2", "py-0.5", "text-[10px]", "font-semibold", "uppercase", "tracking-wide", "text-white"], ["class", "flex items-center justify-center py-16", 4, "ngIf"], ["class", "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4", 4, "ngIf"], ["class", "flex justify-center pt-2", 4, "ngIf"], [1, "flex", "items-center", "justify-center", "py-16"], [1, "h-10", "w-10", "animate-spin", "rounded-full", "border-2", "border-stone-200", "border-t-stone-900", "dark:border-gray-800", "dark:border-t-white"], [1, "flex", "flex-col", "gap-4", "sm:flex-row", "sm:items-center", "sm:justify-between"], ["role", "tablist", 1, "inline-flex", "w-fit", "rounded-full", "border", "border-stone-200", "bg-stone-100", "p-1", "text-xs", "font-medium", "dark:border-gray-700", "dark:bg-gray-950"], ["type", "button", "role", "tab", 1, "rounded-full", "px-3", "py-1.5", "transition", 3, "click", "ngClass"], [1, "text-xs", "text-stone-500", "dark:text-stone-400"], ["type", "range", "min", "0", 1, "slider-input", "w-full", 3, "input", "max", "step", "value"], [1, "mt-2", "flex", "justify-between", "text-[11px]", "text-stone-400", "dark:text-stone-500"], [1, "mt-5", "flex", "flex-col", "gap-2", "rounded-xl", "border", "border-stone-200", "bg-stone-50", "p-4", "text-sm", "dark:border-gray-800", "dark:bg-gray-950/60"], [1, "flex", "items-center", "justify-between"], [1, "text-stone-500", "dark:text-stone-400"], [1, "font-semibold", "text-stone-950", "dark:text-white"], ["class", "flex items-center justify-between", 4, "ngIf"], ["class", "mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4", 4, "ngIf"], ["class", "mt-5 flex justify-end", 4, "ngIf"], ["for", "estimator-requests-input", 1, "block", "text-sm", "font-medium", "text-stone-700", "dark:text-stone-200"], [1, "mt-2", "flex", "items-center", "gap-2", "rounded-xl", "border", "border-stone-200", "bg-white", "px-4", "py-3", "dark:border-gray-700", "dark:bg-gray-950"], ["id", "estimator-requests-input", "type", "number", "min", "0", "step", "1", "inputmode", "numeric", 1, "w-full", "bg-transparent", "text-2xl", "font-semibold", "tracking-tight", "text-stone-950", "outline-none", "dark:text-white", 3, "input", "max", "value"], [1, "shrink-0", "text-xs", "text-stone-500", "dark:text-stone-400"], ["for", "estimator-budget-input", 1, "block", "text-sm", "font-medium", "text-stone-700", "dark:text-stone-200"], [1, "text-2xl", "font-semibold", "text-stone-400"], ["id", "estimator-budget-input", "type", "number", "min", "0", "step", "1", "inputmode", "numeric", 1, "w-full", "bg-transparent", "text-2xl", "font-semibold", "tracking-tight", "text-stone-950", "outline-none", "dark:text-white", 3, "input", "placeholder", "value"], ["class", "mt-3 flex flex-wrap items-center gap-2", 4, "ngIf"], [1, "mt-3", "flex", "flex-wrap", "items-center", "gap-2"], ["for", "estimator-reference-plan", 1, "text-xs", "text-stone-500", "dark:text-stone-400"], ["id", "estimator-reference-plan", 1, "min-h-9", "rounded-lg", "border", "border-stone-200", "bg-white", "px-2", "text-sm", "text-stone-900", "focus:border-stone-400", "focus:outline-none", "dark:border-gray-700", "dark:bg-gray-950", "dark:text-white", 3, "ngModelChange", "ngModel"], ["class", "ml-1 text-xs font-medium", 3, "ngClass", 4, "ngIf"], [1, "ml-1", "text-xs", "font-medium", 3, "ngClass"], [1, "mt-5", "grid", "grid-cols-2", "gap-2", "sm:grid-cols-4"], [1, "rounded-xl", "border", "p-3", "transition", 3, "ngClass"], [1, "text-[11px]", "font-semibold", "uppercase", "tracking-[0.16em]", "text-stone-500", "dark:text-stone-400"], [1, "mt-1", "text-sm", "font-semibold", "text-stone-950", "dark:text-white"], [1, "ml-0.5", "text-[11px]", "font-medium", "text-stone-500", "dark:text-stone-400"], [1, "mt-1", "text-xs", "text-stone-500", "dark:text-stone-400"], ["class", "mt-2 inline-flex rounded-full bg-emerald-600 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white", 4, "ngIf"], [1, "mt-2", "inline-flex", "rounded-full", "bg-emerald-600", "px-2", "py-0.5", "text-[10px]", "font-semibold", "uppercase", "tracking-wide", "text-white"], [1, "mt-5", "flex", "justify-end"], ["type", "button", 1, "inline-flex", "items-center", "gap-2", "text-sm", "font-medium", "text-stone-950", "underline-offset-4", "hover:underline", "dark:text-white", 3, "click"], [1, "flex", "flex-col", "gap-3", "sm:flex-row", "sm:items-center", "sm:justify-between"], ["type", "button", 1, "inline-flex", "items-center", "gap-2", "self-start", "rounded-xl", "border", "border-stone-200", "px-3", "py-1.5", "text-sm", "font-medium", "text-stone-700", "transition", "hover:bg-stone-50", "dark:border-gray-700", "dark:text-stone-200", "dark:hover:bg-gray-800", 3, "click"], ["class", "px-4 py-3 text-right text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-500 dark:text-stone-400", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-stone-500 dark:text-stone-400", 4, "ngIf"], [1, "px-4", "py-2", "text-[11px]", "font-semibold", "uppercase", "tracking-[0.18em]", "text-stone-500", "dark:text-stone-400"], ["class", "px-4 py-3 text-right font-medium text-stone-900 dark:text-white", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "mt-4", "flex", "flex-wrap", "items-center", "gap-x-5", "gap-y-2", "text-xs", "text-stone-500", "dark:text-stone-400"], [1, "font-medium", "text-stone-700", "dark:text-stone-200"], ["class", "font-medium text-stone-900 dark:text-stone-100", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "font-medium", "text-stone-900", "dark:text-stone-100"], [1, "grid", "grid-cols-1", "gap-4", "sm:grid-cols-2", "lg:grid-cols-3", "xl:grid-cols-4"], [1, "plan-card", "relative", "flex", "flex-col", "rounded-2xl", "border", "bg-white", "p-5", "shadow-sm", "transition", "dark:bg-gray-900/70", 3, "ngClass"], ["class", "absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-stone-950 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-white shadow-sm dark:bg-white dark:text-gray-950", 4, "ngIf"], ["class", "absolute -top-3 right-3 rounded-full border border-amber-300 bg-amber-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-amber-950 shadow-sm dark:border-amber-700 dark:bg-amber-900 dark:text-amber-100", 4, "ngIf"], ["class", "absolute top-3 right-3 inline-flex items-center gap-1 rounded-full border border-stone-200 bg-white/80 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-stone-500 backdrop-blur-sm dark:border-gray-700 dark:bg-gray-900/80 dark:text-stone-400", 4, "ngIf"], [1, "mb-4"], ["class", "mt-1 text-xs font-medium text-amber-800 dark:text-amber-300", 4, "ngIf"], [1, "plan-card-content", 3, "ngClass"], [4, "ngIf", "ngIfElse"], ["class", "mt-4 inline-flex flex-wrap items-center gap-x-1.5 gap-y-0.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-xs dark:border-emerald-900/70 dark:bg-emerald-950/30", 4, "ngIf"], ["class", "mt-4 text-xs text-stone-500 dark:text-stone-400", 4, "ngIf"], ["type", "button", 1, "mt-auto", "inline-flex", "min-h-11", "w-full", "items-center", "justify-center", "rounded-xl", "px-4", "text-sm", "font-semibold", "transition", 3, "click", "ngClass", "disabled"], [1, "absolute", "-top-3", "left-1/2", "-translate-x-1/2", "rounded-full", "bg-stone-950", "px-3", "py-1", "text-[10px]", "font-semibold", "uppercase", "tracking-wide", "text-white", "shadow-sm", "dark:bg-white", "dark:text-gray-950"], [1, "absolute", "-top-3", "right-3", "rounded-full", "border", "border-amber-300", "bg-amber-100", "px-2.5", "py-1", "text-[10px]", "font-semibold", "uppercase", "tracking-wide", "text-amber-950", "shadow-sm", "dark:border-amber-700", "dark:bg-amber-900", "dark:text-amber-100"], [1, "absolute", "top-3", "right-3", "inline-flex", "items-center", "gap-1", "rounded-full", "border", "border-stone-200", "bg-white/80", "px-2.5", "py-0.5", "text-[10px]", "font-medium", "uppercase", "tracking-wider", "text-stone-500", "backdrop-blur-sm", "dark:border-gray-700", "dark:bg-gray-900/80", "dark:text-stone-400"], [1, "!h-3", "!w-3", "!text-[12px]"], [1, "mt-1", "text-xs", "font-medium", "text-amber-800", "dark:text-amber-300"], [1, "flex", "items-baseline", "gap-1"], [1, "text-lg", "font-semibold", "text-stone-700", "dark:text-stone-200"], [1, "text-4xl", "font-bold", "tracking-tight", "text-stone-950", "dark:text-white"], ["class", "mt-2 text-xs text-stone-500 dark:text-stone-400", 4, "ngIf"], [1, "mt-2", "text-xs", "text-stone-500", "dark:text-stone-400"], [1, "block", "text-[11px]", "font-semibold", "uppercase", "tracking-[0.16em]", "text-stone-500", "dark:text-stone-400"], [1, "mt-2", "flex", "items-baseline", "gap-1"], [1, "mt-4", "inline-flex", "flex-wrap", "items-center", "gap-x-1.5", "gap-y-0.5", "rounded-full", "border", "border-emerald-200", "bg-emerald-50", "px-2.5", "py-1", "text-xs", "dark:border-emerald-900/70", "dark:bg-emerald-950/30"], [1, "font-semibold", "text-emerald-700", "dark:text-emerald-300"], [1, "text-emerald-700/70", "dark:text-emerald-300/70"], [1, "mt-4", "text-xs", "text-stone-500", "dark:text-stone-400"], [1, "flex", "justify-center", "pt-2"], ["type", "button", 1, "inline-flex", "items-center", "gap-2", "rounded-xl", "px-3", "py-2", "text-sm", "font-medium", "text-stone-600", "transition", "hover:bg-stone-100", "dark:text-stone-300", "dark:hover:bg-gray-800", 3, "click"], [1, "fixed", "inset-0", "z-50", "flex", "items-center", "justify-center", "bg-stone-950/60", "p-4", "backdrop-blur-sm", 3, "click"], [1, "relative", "w-full", "max-w-lg", "rounded-2xl", "border", "border-stone-200", "bg-white", "p-6", "shadow-xl", "dark:border-gray-800", "dark:bg-gray-900", 3, "click"], ["type", "button", 1, "absolute", "top-4", "right-4", "inline-flex", "h-8", "w-8", "items-center", "justify-center", "rounded-lg", "text-stone-500", "transition", "hover:bg-stone-100", "dark:text-stone-400", "dark:hover:bg-gray-800", 3, "click"], [1, "flex", "items-start", "gap-3"], [1, "flex", "h-10", "w-10", "shrink-0", "items-center", "justify-center", "rounded-xl", "border", "border-stone-200", "bg-stone-50", "text-stone-700", "dark:border-gray-800", "dark:bg-gray-950", "dark:text-stone-200"], [1, "mt-5", "space-y-4"], [1, "block", "text-[11px]", "font-semibold", "uppercase", "tracking-[0.18em]", "text-stone-500", "dark:text-stone-400"], ["type", "button", 1, "mt-2", "flex", "w-full", "items-center", "justify-between", "gap-2", "rounded-xl", "border", "border-stone-200", "bg-stone-50", "px-3", "py-2", "text-left", "text-xs", "text-stone-700", "transition", "hover:bg-stone-100", "dark:border-gray-800", "dark:bg-gray-950", "dark:text-stone-200", "dark:hover:bg-gray-800", 3, "click"], [1, "truncate", "font-mono"], [1, "grid", "grid-cols-1", "gap-3", "sm:grid-cols-2"], [1, "mt-6"], ["type", "button", 1, "inline-flex", "min-h-11", "w-full", "items-center", "justify-center", "gap-2", "rounded-xl", "bg-stone-950", "px-4", "text-sm", "font-semibold", "text-white", "transition", "hover:bg-stone-800", "disabled:cursor-not-allowed", "disabled:opacity-60", "dark:bg-white", "dark:text-gray-950", "dark:hover:bg-stone-200", 3, "click", "disabled"], [1, "mt-2", "inline-flex", "rounded-lg", "border", "border-stone-200", "bg-stone-50", "px-2.5", "py-1", "text-xs", "font-mono", "text-stone-700", "dark:border-gray-800", "dark:bg-gray-950", "dark:text-stone-200"], [1, "mt-2", "inline-flex", "rounded-lg", "border", "border-stone-200", "bg-white", "px-2.5", "py-1", "text-xs", "font-medium", "text-stone-700", "dark:border-gray-700", "dark:bg-gray-900", "dark:text-stone-200"], [1, "mt-2", "flex", "items-baseline", "gap-2"], [1, "text-2xl", "font-bold", "tracking-tight", "text-stone-950", "dark:text-white"], [1, "text-[11px]", "font-semibold", "uppercase", "tracking-[0.18em]", "text-stone-500", "dark:text-stone-400"], [1, "font-normal", "normal-case", "text-stone-400"]], template: function SubscriptionPlansComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "billing-required-dialog", 2);
        \u0275\u0275listener("goToBilling", function SubscriptionPlansComponent_Template_billing_required_dialog_goToBilling_0_listener() {
          return ctx.goToBillingDetails();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(1, "plan-change-dialog", 3);
        \u0275\u0275listener("confirm", function SubscriptionPlansComponent_Template_plan_change_dialog_confirm_1_listener() {
          return ctx.confirmPlanChange();
        })("cancel", function SubscriptionPlansComponent_Template_plan_change_dialog_cancel_1_listener() {
          return ctx.cancelPlanChange();
        })("comparePlans", function SubscriptionPlansComponent_Template_plan_change_dialog_comparePlans_1_listener() {
          return ctx.compareDiscountedPlansFromDialog();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "div", 4)(3, "header", 5)(4, "div", 6)(5, "div", 7)(6, "a", 8);
        \u0275\u0275text(7, " Verifik ");
        \u0275\u0275elementEnd();
        \u0275\u0275element(8, "mat-icon", 9);
        \u0275\u0275elementStart(9, "span", 10);
        \u0275\u0275text(10);
        \u0275\u0275pipe(11, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "div", 11)(13, "div", 12)(14, "h1", 13);
        \u0275\u0275template(15, SubscriptionPlansComponent_ng_container_15_Template, 3, 3, "ng-container", 14)(16, SubscriptionPlansComponent_ng_container_16_Template, 3, 3, "ng-container", 14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "p", 15);
        \u0275\u0275template(18, SubscriptionPlansComponent_ng_container_18_Template, 3, 3, "ng-container", 14)(19, SubscriptionPlansComponent_ng_container_19_Template, 3, 3, "ng-container", 14);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(20, SubscriptionPlansComponent_div_20_Template, 13, 7, "div", 16);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(21, "main", 17)(22, "div", 18);
        \u0275\u0275template(23, SubscriptionPlansComponent_section_23_Template, 20, 25, "section", 19)(24, SubscriptionPlansComponent_ng_container_24_Template, 45, 33, "ng-container", 14)(25, SubscriptionPlansComponent_ng_container_25_Template, 17, 16, "ng-container", 14);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(26, SubscriptionPlansComponent_div_26_Template, 34, 8, "div", 20);
      }
      if (rf & 2) {
        \u0275\u0275property("isOpen", ctx.showBillingRequiredModal);
        \u0275\u0275advance();
        \u0275\u0275property("isOpen", ctx.showPlanChangeDialog)("currentPlan", ctx.currentSubscription)("newPlan", ctx.selectedPlanForChange)("allPlans", ctx.plans)("requestsPerMonth", ctx.selectedPlanRequests)("bringBackOffer", ctx.bringBackOffer);
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 17, "subscriptionPlans.badge"), " ");
        \u0275\u0275advance(5);
        \u0275\u0275property("ngIf", !ctx.currentSubscription);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.currentSubscription);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !ctx.currentSubscription);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.currentSubscription);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.currentSubscription);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.showBringBackPromoBanner);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.currentView === "current" && ctx.currentSubscription);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.currentView === "explore");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.selectedFeatureForModal);
      }
    }, dependencies: [
      CommonModule,
      NgClass,
      NgForOf,
      NgIf,
      LowerCasePipe,
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
      RouterModule,
      RouterLink,
      MatIconModule,
      MatIcon,
      MatSnackBarModule,
      PlanChangeDialogComponent,
      BillingRequiredDialogComponent
    ], styles: ["/* src/app/modules/subscription-plans/subscription-plans.component.scss */\n.slider-input {\n  appearance: none;\n  height: 6px;\n  border-radius: 999px;\n  background: #e7e5e4;\n  outline: none;\n  cursor: pointer;\n}\n.slider-input::-webkit-slider-thumb {\n  appearance: none;\n  width: 18px;\n  height: 18px;\n  border-radius: 999px;\n  background: #0c0a09;\n  border: 2px solid #ffffff;\n  cursor: pointer;\n  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.2);\n  transition: transform 120ms ease;\n}\n.slider-input::-moz-range-thumb {\n  width: 18px;\n  height: 18px;\n  border-radius: 999px;\n  background: #0c0a09;\n  border: 2px solid #ffffff;\n  cursor: pointer;\n  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.2);\n}\n.slider-input:focus-visible::-webkit-slider-thumb,\n.slider-input:hover::-webkit-slider-thumb {\n  transform: scale(1.05);\n}\n:host-context(.dark) .slider-input::-webkit-slider-thumb {\n  background: #ffffff;\n  border-color: #0f172a;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);\n}\n:host-context(.dark) .slider-input::-moz-range-thumb {\n  background: #ffffff;\n  border-color: #0f172a;\n}\n.plan-card.is-not-optimal {\n  background-image:\n    repeating-linear-gradient(\n      135deg,\n      transparent,\n      transparent 14px,\n      rgba(120, 113, 108, 0.04) 14px,\n      rgba(120, 113, 108, 0.04) 16px);\n}\n:host-context(.dark) .plan-card.is-not-optimal {\n  background-image:\n    repeating-linear-gradient(\n      135deg,\n      transparent,\n      transparent 14px,\n      rgba(255, 255, 255, 0.03) 14px,\n      rgba(255, 255, 255, 0.03) 16px);\n}\n/*# sourceMappingURL=subscription-plans.component.css.map */\n"], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SubscriptionPlansComponent, [{
    type: Component,
    args: [{ selector: "subscription-plans", standalone: true, imports: [
      CommonModule,
      FormsModule,
      TranslocoModule,
      RouterModule,
      MatIconModule,
      MatSnackBarModule,
      PlanChangeDialogComponent,
      BillingRequiredDialogComponent
    ], encapsulation: ViewEncapsulation.None, template: `<!-- Billing Required Dialog -->\r
<billing-required-dialog\r
    [isOpen]="showBillingRequiredModal"\r
    (goToBilling)="goToBillingDetails()"\r
></billing-required-dialog>\r
\r
<!-- Plan Change Dialog -->\r
<plan-change-dialog\r
    [isOpen]="showPlanChangeDialog"\r
    [currentPlan]="currentSubscription"\r
    [newPlan]="selectedPlanForChange"\r
    [allPlans]="plans"\r
    [requestsPerMonth]="selectedPlanRequests"\r
    [bringBackOffer]="bringBackOffer"\r
    (confirm)="confirmPlanChange()"\r
    (cancel)="cancelPlanChange()"\r
    (comparePlans)="compareDiscountedPlansFromDialog()"\r
>\r
</plan-change-dialog>\r
\r
<div class="subscription-page flex min-h-screen min-w-0 flex-auto flex-col bg-stone-50 dark:bg-gray-950">\r
    <!-- Header -->\r
    <header\r
        class="border-b border-stone-200/90 bg-white/90 px-5 py-6 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-950/90 md:px-8 md:py-8"\r
    >\r
        <div class="mx-auto flex w-full max-w-7xl flex-col gap-5">\r
            <div\r
                class="flex flex-wrap items-center text-xs font-medium leading-none text-stone-500 dark:text-stone-400"\r
            >\r
                <a\r
                    routerLink="/home"\r
                    class="cursor-pointer text-stone-700 underline-offset-4 hover:underline dark:text-stone-300"\r
                >\r
                    Verifik\r
                </a>\r
                <mat-icon\r
                    class="icon-size-4 mx-2 text-stone-400"\r
                    svgIcon="heroicons_solid:chevron-right"\r
                ></mat-icon>\r
                <span class="cursor-default text-stone-600 dark:text-stone-300">\r
                    {{ 'subscriptionPlans.badge' | transloco }}\r
                </span>\r
            </div>\r
\r
            <div class="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">\r
                <div class="max-w-2xl">\r
                    <h1\r
                        class="text-2xl font-semibold tracking-tight text-stone-950 dark:text-white md:text-3xl"\r
                    >\r
                        <ng-container *ngIf="!currentSubscription">{{\r
                            'subscriptionPlans.title' | transloco\r
                        }}</ng-container>\r
                        <ng-container *ngIf="currentSubscription">{{\r
                            'subscriptionPlans.titleWithPlan' | transloco\r
                        }}</ng-container>\r
                    </h1>\r
                    <p\r
                        class="mt-2 text-sm leading-6 text-stone-500 dark:text-stone-400 md:text-base"\r
                    >\r
                        <ng-container *ngIf="!currentSubscription">{{\r
                            'subscriptionPlans.subtitle' | transloco\r
                        }}</ng-container>\r
                        <ng-container *ngIf="currentSubscription">{{\r
                            'subscriptionPlans.subtitleWithPlan' | transloco\r
                        }}</ng-container>\r
                    </p>\r
                </div>\r
\r
                <div class="flex flex-wrap items-center gap-3" *ngIf="currentSubscription">\r
                    <button\r
                        type="button"\r
                        class="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-stone-200 px-4 text-sm font-medium text-stone-800 transition hover:bg-stone-50 dark:border-gray-700 dark:text-stone-100 dark:hover:bg-gray-800"\r
                        (click)="manageBilling()"\r
                    >\r
                        <mat-icon class="!h-4 !w-4 !text-base">settings</mat-icon>\r
                        <span>{{ 'subscriptionPlans.manageBilling' | transloco }}</span>\r
                    </button>\r
                    <button\r
                        type="button"\r
                        class="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-stone-950 px-4 text-sm font-medium text-white transition hover:bg-stone-800 dark:bg-white dark:text-gray-950 dark:hover:bg-stone-200"\r
                        (click)="currentView === 'current' ? switchToExplore() : switchToCurrent()"\r
                    >\r
                        <mat-icon class="!h-4 !w-4 !text-base">{{\r
                            currentView === 'current' ? 'compare_arrows' : 'arrow_back'\r
                        }}</mat-icon>\r
                        <span>\r
                            {{\r
                                (currentView === 'current'\r
                                    ? 'subscriptionPlans.changePlan'\r
                                    : 'subscriptionPlans.backToCurrentPlan'\r
                                ) | transloco\r
                            }}\r
                        </span>\r
                    </button>\r
                </div>\r
            </div>\r
        </div>\r
    </header>\r
\r
    <main class="flex flex-auto flex-col px-5 py-8 md:px-8 md:py-10">\r
        <div class="mx-auto flex w-full max-w-7xl flex-col gap-6">\r
            <section\r
                *ngIf="showBringBackPromoBanner"\r
                class="rounded-2xl border border-amber-200/80 bg-gradient-to-br from-amber-50 via-white to-orange-50/80 px-5 py-5 dark:border-amber-900/60 dark:from-amber-950/50 dark:via-gray-950 dark:to-gray-950 md:px-6"\r
            >\r
                <div class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">\r
                    <div class="flex min-w-0 flex-1 items-start gap-3">\r
                        <div\r
                            class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-600/15 text-amber-800 dark:bg-amber-400/15 dark:text-amber-300"\r
                        >\r
                            <mat-icon>local_offer</mat-icon>\r
                        </div>\r
                        <div class="min-w-0 space-y-1.5">\r
                            <p\r
                                class="inline-flex rounded-full border border-amber-200/90 bg-amber-100 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-amber-950 dark:border-amber-800 dark:bg-amber-900/50 dark:text-amber-200"\r
                            >\r
                                {{ 'subscriptionPlans.promo.bringBack.badge' | transloco }}\r
                            </p>\r
                            <h2 class="text-base font-semibold text-amber-950 dark:text-amber-50">\r
                                {{\r
                                    'subscriptionPlans.promo.bringBack.titleFirstMonth'\r
                                        | transloco\r
                                            : { multiplier: bringBackOffer?.multiplier || 2 }\r
                                }}\r
                            </h2>\r
                            <p class="text-sm leading-relaxed text-amber-950/90 dark:text-amber-100/90">\r
                                {{\r
                                    'subscriptionPlans.promo.bringBack.bodyFirstMonth'\r
                                        | transloco\r
                                            : {\r
                                                  multiplier: bringBackOffer?.multiplier || 2,\r
                                                  example: bringBackPromoExampleCredits,\r
                                              }\r
                                }}\r
                            </p>\r
                            <p class="text-sm font-semibold text-amber-950 dark:text-amber-50">\r
                                {{\r
                                    'subscriptionPlans.promo.bringBack.deadline'\r
                                        | transloco\r
                                            : {\r
                                                  expiresAt:\r
                                                      (bringBackOffer?.expiresAt | date: 'medium') ||\r
                                                      '',\r
                                              }\r
                                }}\r
                            </p>\r
                        </div>\r
                    </div>\r
                </div>\r
            </section>\r
            <!-- ================================================== -->\r
            <!-- CURRENT PLAN VIEW                                   -->\r
            <!-- ================================================== -->\r
            <ng-container *ngIf="currentView === 'current' && currentSubscription">\r
                <!-- Current Plan Card -->\r
                <section\r
                    class="rounded-2xl border border-stone-200/90 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900/70 md:p-6"\r
                >\r
                    <div class="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">\r
                        <div class="flex items-start gap-4">\r
                            <div\r
                                class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-stone-200 bg-stone-50 text-stone-700 dark:border-gray-800 dark:bg-gray-950 dark:text-stone-200"\r
                            >\r
                                <mat-icon>verified</mat-icon>\r
                            </div>\r
                            <div>\r
                                <span\r
                                    class="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-[0.18em] text-emerald-700 dark:border-emerald-900/70 dark:bg-emerald-950/40 dark:text-emerald-300"\r
                                >\r
                                    <span class="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>\r
                                    {{ 'subscriptionPlans.activePlan' | transloco }}\r
                                </span>\r
                                <h2\r
                                    class="mt-2 text-xl font-semibold text-stone-950 dark:text-white"\r
                                >\r
                                    {{ currentSubscription.name }}\r
                                </h2>\r
                                <div class="mt-1 flex items-baseline gap-1">\r
                                    <span\r
                                        class="text-3xl font-semibold tracking-tight text-stone-950 dark:text-white"\r
                                        >\${{\r
                                            (currentSubscription.amount ||\r
                                                currentSubscription.subscriptionPlan.amount)\r
                                                | number: '1.0-0'\r
                                        }}</span\r
                                    >\r
                                    <span class="text-sm text-stone-500 dark:text-stone-400">\r
                                        /{{\r
                                            'subscriptionPlans.interval.' +\r
                                                currentSubscription.subscriptionPlan.interval\r
                                                | transloco\r
                                        }}\r
                                    </span>\r
                                </div>\r
                            </div>\r
                        </div>\r
\r
                        <div\r
                            class="grid grid-cols-1 gap-3 sm:grid-cols-3 md:max-w-md md:grid-cols-3"\r
                        >\r
                            <div\r
                                class="rounded-xl border border-stone-200 p-3 dark:border-gray-800"\r
                            >\r
                                <span\r
                                    class="text-[11px] font-medium uppercase tracking-[0.16em] text-stone-400 dark:text-stone-500"\r
                                >\r
                                    {{ 'subscriptionPlans.started' | transloco }}\r
                                </span>\r
                                <p\r
                                    class="mt-1 text-sm font-medium text-stone-950 dark:text-white"\r
                                >\r
                                    {{ currentSubscription.startDate | date: 'mediumDate' }}\r
                                </p>\r
                            </div>\r
                            <div\r
                                class="rounded-xl border border-stone-200 p-3 dark:border-gray-800"\r
                            >\r
                                <span\r
                                    class="text-[11px] font-medium uppercase tracking-[0.16em] text-stone-400 dark:text-stone-500"\r
                                >\r
                                    {{ 'subscriptionPlans.renews' | transloco }}\r
                                </span>\r
                                <p\r
                                    class="mt-1 text-sm font-medium text-stone-950 dark:text-white"\r
                                >\r
                                    {{ currentSubscription.endDate | date: 'mediumDate' }}\r
                                </p>\r
                            </div>\r
                            <div\r
                                class="rounded-xl border border-stone-200 p-3 dark:border-gray-800"\r
                            >\r
                                <span\r
                                    class="text-[11px] font-medium uppercase tracking-[0.16em] text-stone-400 dark:text-stone-500"\r
                                >\r
                                    {{ 'subscriptionPlans.status' | transloco }}\r
                                </span>\r
                                <p class="mt-1 text-sm font-medium" *ngIf="currentSubscription.autoRenew">\r
                                    <span class="text-emerald-600 dark:text-emerald-400">\r
                                        {{ 'subscriptionPlans.statusActive' | transloco }}\r
                                    </span>\r
                                </p>\r
                                <p\r
                                    class="mt-1 text-sm font-medium"\r
                                    *ngIf="!currentSubscription.autoRenew"\r
                                >\r
                                    <span class="text-amber-600 dark:text-amber-400">\r
                                        {{ 'subscriptionPlans.statusCanceling' | transloco }}\r
                                    </span>\r
                                </p>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </section>\r
\r
                <!-- Features Card -->\r
                <section\r
                    *ngIf="currentSubscription && currentPlanHasIncludedBenefits"\r
                    class="rounded-2xl border border-stone-200/90 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900/70 md:p-6"\r
                >\r
                    <h3 class="text-base font-semibold text-stone-950 dark:text-white">\r
                        {{ 'subscriptionPlans.whatsIncluded' | transloco }}\r
                    </h3>\r
                    <div class="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">\r
                        <ng-container\r
                            *ngFor="let feature of currentSubscription.subscriptionPlan.changesLeft"\r
                        >\r
                            <div\r
                                *ngIf="feature.key !== 'OCR'"\r
                                class="flex items-center gap-2 text-sm text-stone-700 dark:text-stone-200"\r
                            >\r
                                <mat-icon\r
                                    class="!h-4 !w-4 !text-base text-emerald-600 dark:text-emerald-400"\r
                                    >check_circle</mat-icon\r
                                >\r
                                <span>{{ 'pricing.' + feature.key | transloco }}</span>\r
                                <span\r
                                    class="ml-auto text-xs font-medium text-stone-500 dark:text-stone-400"\r
                                    *ngIf="feature.value && !isBoolean(feature.value)"\r
                                    >{{ feature.value }}</span\r
                                >\r
                            </div>\r
                        </ng-container>\r
                        <ng-container\r
                            *ngFor="let feature of currentSubscription.subscriptionPlan.changesRight"\r
                        >\r
                            <div\r
                                *ngIf="feature.key !== 'OCR'"\r
                                class="flex items-center gap-2 text-sm text-stone-700 dark:text-stone-200"\r
                            >\r
                                <mat-icon\r
                                    class="!h-4 !w-4 !text-base text-emerald-600 dark:text-emerald-400"\r
                                    >check_circle</mat-icon\r
                                >\r
                                <span>{{ 'pricing.' + feature.key | transloco }}</span>\r
                                <span\r
                                    class="ml-auto text-xs font-medium text-stone-500 dark:text-stone-400"\r
                                    *ngIf="feature.value && !isBoolean(feature.value)"\r
                                    >{{ feature.value }}</span\r
                                >\r
                            </div>\r
                        </ng-container>\r
                    </div>\r
                </section>\r
\r
                <!-- What's included fallback -->\r
                <section\r
                    *ngIf="showCurrentPlanIncludedFallback"\r
                    class="rounded-2xl border border-stone-200/90 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900/70 md:p-6"\r
                >\r
                    <h3 class="text-base font-semibold text-stone-950 dark:text-white">\r
                        {{ 'subscriptionPlans.whatsIncluded' | transloco }}\r
                    </h3>\r
                    <p class="mt-3 text-sm leading-6 text-stone-500 dark:text-stone-400">\r
                        {{ 'subscriptionPlans.dialog.includedFallback' | transloco }}\r
                    </p>\r
                    <div class="mt-4 space-y-2">\r
                        <div\r
                            class="flex items-start gap-2 text-sm text-stone-700 dark:text-stone-200"\r
                        >\r
                            <mat-icon\r
                                class="!h-4 !w-4 !text-base text-emerald-600 dark:text-emerald-400"\r
                                >check_circle</mat-icon\r
                            >\r
                            <span>{{\r
                                'subscriptionPlans.dialog.includedFallbackBullet1' | transloco\r
                            }}</span>\r
                        </div>\r
                        <div\r
                            class="flex items-start gap-2 text-sm text-stone-700 dark:text-stone-200"\r
                        >\r
                            <mat-icon\r
                                class="!h-4 !w-4 !text-base text-emerald-600 dark:text-emerald-400"\r
                                >check_circle</mat-icon\r
                            >\r
                            <span>{{\r
                                'subscriptionPlans.dialog.includedFallbackBullet2' | transloco\r
                            }}</span>\r
                        </div>\r
                    </div>\r
                    <button\r
                        type="button"\r
                        *ngIf="hasOtherPlansWithApiDiscountForCurrent"\r
                        class="mt-5 inline-flex items-center gap-2 text-sm font-medium text-stone-950 underline-offset-4 hover:underline dark:text-white"\r
                        (click)="compareDiscountedPlansFromCurrentCard()"\r
                    >\r
                        <span>{{\r
                            'subscriptionPlans.dialog.compareDiscountedPlansShort' | transloco\r
                        }}</span>\r
                        <mat-icon class="!h-4 !w-4 !text-base">arrow_forward</mat-icon>\r
                    </button>\r
                </section>\r
\r
                <!-- Your API prices -->\r
                <section\r
                    *ngIf="currentSubscription && (myListFeatures.length > 0 || loadingMyListFeatures)"\r
                    class="rounded-2xl border border-stone-200/90 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900/70 md:p-6"\r
                >\r
                    <h3 class="text-base font-semibold text-stone-950 dark:text-white">\r
                        {{ 'subscriptionPlans.yourApiPrices' | transloco }}\r
                    </h3>\r
\r
                    <div\r
                        *ngIf="loadingMyListFeatures"\r
                        class="mt-6 flex items-center justify-center py-10"\r
                    >\r
                        <div\r
                            class="h-8 w-8 animate-spin rounded-full border-2 border-stone-200 border-t-stone-900 dark:border-gray-800 dark:border-t-white"\r
                        ></div>\r
                    </div>\r
                    <p\r
                        class="mt-6 text-center text-sm text-stone-500 dark:text-stone-400"\r
                        *ngIf="!loadingMyListFeatures && filteredMyListFeatures.length === 0"\r
                    >\r
                        {{ 'subscriptionPlans.apiBreakdown.empty' | transloco }}\r
                    </p>\r
\r
                    <div *ngIf="!loadingMyListFeatures && myListFeatures.length > 0" class="mt-5">\r
                        <div class="flex flex-col gap-3 md:flex-row md:items-center">\r
                            <input\r
                                type="text"\r
                                class="min-h-10 flex-1 rounded-xl border border-stone-200 bg-white px-3 text-sm text-stone-900 placeholder:text-stone-400 focus:border-stone-400 focus:outline-none dark:border-gray-700 dark:bg-gray-950 dark:text-white"\r
                                [placeholder]="\r
                                    'subscriptionPlans.apiBreakdown.searchPlaceholder' | transloco\r
                                "\r
                                [value]="myListSearchQuery"\r
                                (input)="myListSearchQuery = $any($event.target).value"\r
                            />\r
                            <select\r
                                class="min-h-10 rounded-xl border border-stone-200 bg-white px-3 text-sm text-stone-900 focus:border-stone-400 focus:outline-none dark:border-gray-700 dark:bg-gray-950 dark:text-white"\r
                                [(ngModel)]="myListCountryFilter"\r
                            >\r
                                <option value="">All countries</option>\r
                                <option *ngFor="let c of myListCountries" [value]="c">\r
                                    {{ getCountryDisplayName(c) }}\r
                                </option>\r
                            </select>\r
                            <select\r
                                class="min-h-10 rounded-xl border border-stone-200 bg-white px-3 text-sm text-stone-900 focus:border-stone-400 focus:outline-none dark:border-gray-700 dark:bg-gray-950 dark:text-white"\r
                                [(ngModel)]="myListCategoryFilter"\r
                            >\r
                                <option value="">All categories</option>\r
                                <option *ngFor="let cat of myListCategories" [value]="cat">\r
                                    {{ getCategoryDisplayName(cat) }}\r
                                </option>\r
                            </select>\r
                        </div>\r
\r
                        <div\r
                            class="mt-4 overflow-x-auto rounded-xl border border-stone-200 dark:border-gray-800"\r
                        >\r
                            <table class="min-w-full divide-y divide-stone-200 dark:divide-gray-800 text-sm">\r
                                <thead class="bg-stone-50 dark:bg-gray-950">\r
                                    <tr>\r
                                        <th\r
                                            class="px-4 py-3 text-left text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-500 dark:text-stone-400"\r
                                        >\r
                                            {{ 'subscriptionPlans.apiBreakdown.apiName' | transloco }}\r
                                        </th>\r
                                        <th\r
                                            class="px-4 py-3 text-right text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-500 dark:text-stone-400"\r
                                        >\r
                                            {{\r
                                                currentSubscription?.subscriptionPlan?.name ||\r
                                                    ('subscriptionPlans.credits' | transloco)\r
                                            }}\r
                                        </th>\r
                                    </tr>\r
                                </thead>\r
                                <tbody\r
                                    class="divide-y divide-stone-200 dark:divide-gray-800 bg-white dark:bg-gray-900/40"\r
                                >\r
                                    <ng-container\r
                                        *ngFor="let group of groupedMyListFeatures; trackBy: trackByGroup"\r
                                    >\r
                                        <tr\r
                                            *ngIf="group.category"\r
                                            class="bg-stone-50/70 dark:bg-gray-950/60"\r
                                        >\r
                                            <td\r
                                                class="px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-500 dark:text-stone-400"\r
                                                colspan="2"\r
                                            >\r
                                                {{ getCategoryDisplayName(group.category) }}\r
                                            </td>\r
                                        </tr>\r
                                        <tr\r
                                            *ngFor="let feature of group.features; trackBy: trackByFeature"\r
                                            class="cursor-pointer transition hover:bg-stone-50 dark:hover:bg-gray-950/50"\r
                                            (click)="openFeatureModal(feature)"\r
                                        >\r
                                            <td class="px-4 py-3 text-stone-900 dark:text-stone-100">\r
                                                {{ getFeatureDisplayName(feature) }}\r
                                            </td>\r
                                            <td\r
                                                class="px-4 py-3 text-right font-medium text-stone-900 dark:text-white"\r
                                            >\r
                                                {{\r
                                                    getEffectivePriceForApi(\r
                                                        feature,\r
                                                        currentSubscription.subscriptionPlan\r
                                                    ) | number: '1.2-4'\r
                                                }}\r
                                                <span\r
                                                    class="ml-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-400 dark:text-stone-500"\r
                                                    >{{\r
                                                        'subscriptionPlans.credits' | transloco\r
                                                    }}</span\r
                                                >\r
                                            </td>\r
                                        </tr>\r
                                    </ng-container>\r
                                </tbody>\r
                            </table>\r
                        </div>\r
                    </div>\r
                </section>\r
            </ng-container>\r
\r
            <!-- ================================================== -->\r
            <!-- EXPLORE PLANS VIEW                                  -->\r
            <!-- ================================================== -->\r
            <ng-container *ngIf="currentView === 'explore'">\r
                <!-- Interval Toggle -->\r
                <div class="flex justify-center">\r
                    <div\r
                        class="inline-flex rounded-full border border-stone-200 bg-white p-1 text-sm font-medium dark:border-gray-800 dark:bg-gray-900/70"\r
                    >\r
                        <button\r
                            type="button"\r
                            class="rounded-full px-5 py-2 transition"\r
                            [ngClass]="\r
                                selectedInterval === 'month'\r
                                    ? 'bg-stone-950 text-white dark:bg-white dark:text-gray-950'\r
                                    : 'text-stone-600 hover:text-stone-900 dark:text-stone-300 dark:hover:text-white'\r
                            "\r
                            (click)="changeInterval('month')"\r
                        >\r
                            {{ 'subscriptionPlans.monthly' | transloco }}\r
                        </button>\r
                        <button\r
                            type="button"\r
                            class="relative rounded-full px-5 py-2 transition"\r
                            [ngClass]="\r
                                selectedInterval === 'year'\r
                                    ? 'bg-stone-950 text-white dark:bg-white dark:text-gray-950'\r
                                    : 'text-stone-600 hover:text-stone-900 dark:text-stone-300 dark:hover:text-white'\r
                            "\r
                            (click)="changeInterval('year')"\r
                        >\r
                            {{ 'subscriptionPlans.yearly' | transloco }}\r
                            <span\r
                                class="ml-2 inline-flex rounded-full bg-emerald-600 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white"\r
                                >{{ 'subscriptionPlans.save20' | transloco }}</span\r
                            >\r
                        </button>\r
                    </div>\r
                </div>\r
\r
                <!-- Loading -->\r
                <div\r
                    *ngIf="loadingPlans"\r
                    class="flex items-center justify-center py-16"\r
                >\r
                    <div\r
                        class="h-10 w-10 animate-spin rounded-full border-2 border-stone-200 border-t-stone-900 dark:border-gray-800 dark:border-t-white"\r
                    ></div>\r
                </div>\r
\r
                <!-- Estimator Card -->\r
                <section\r
                    *ngIf="!loadingPlans && plans.length > 0"\r
                    class="rounded-2xl border border-stone-200/90 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900/70 md:p-6"\r
                >\r
                    <div\r
                        class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"\r
                    >\r
                        <div\r
                            class="inline-flex w-fit rounded-full border border-stone-200 bg-stone-100 p-1 text-xs font-medium dark:border-gray-700 dark:bg-gray-950"\r
                            role="tablist"\r
                        >\r
                            <button\r
                                type="button"\r
                                role="tab"\r
                                class="rounded-full px-3 py-1.5 transition"\r
                                [attr.aria-selected]="estimatorMode === 'requests'"\r
                                [ngClass]="\r
                                    estimatorMode === 'requests'\r
                                        ? 'bg-white text-stone-900 shadow-sm dark:bg-gray-800 dark:text-white'\r
                                        : 'text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-white'\r
                                "\r
                                (click)="setEstimatorMode('requests')"\r
                            >\r
                                {{ 'subscriptionPlans.estimator.modeRequests' | transloco }}\r
                            </button>\r
                            <button\r
                                type="button"\r
                                role="tab"\r
                                class="rounded-full px-3 py-1.5 transition"\r
                                [attr.aria-selected]="estimatorMode === 'budget'"\r
                                [ngClass]="\r
                                    estimatorMode === 'budget'\r
                                        ? 'bg-white text-stone-900 shadow-sm dark:bg-gray-800 dark:text-white'\r
                                        : 'text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-white'\r
                                "\r
                                (click)="setEstimatorMode('budget')"\r
                            >\r
                                {{ 'subscriptionPlans.estimator.modeBudget' | transloco }}\r
                            </button>\r
                        </div>\r
                        <p class="text-xs text-stone-500 dark:text-stone-400">\r
                            {{ 'subscriptionPlans.requestSlider.basePrice' | transloco }}\r
                        </p>\r
                    </div>\r
\r
                    <!-- Requests mode -->\r
                    <div *ngIf="estimatorMode === 'requests'" class="mt-5">\r
                        <label\r
                            class="block text-sm font-medium text-stone-700 dark:text-stone-200"\r
                            for="estimator-requests-input"\r
                        >\r
                            {{ 'subscriptionPlans.estimator.requestsLabel' | transloco }}\r
                        </label>\r
                        <div\r
                            class="mt-2 flex items-center gap-2 rounded-xl border border-stone-200 bg-white px-4 py-3 dark:border-gray-700 dark:bg-gray-950"\r
                        >\r
                            <input\r
                                id="estimator-requests-input"\r
                                type="number"\r
                                class="w-full bg-transparent text-2xl font-semibold tracking-tight text-stone-950 outline-none dark:text-white"\r
                                min="0"\r
                                [max]="sliderMax"\r
                                step="1"\r
                                inputmode="numeric"\r
                                [value]="sliderValue"\r
                                (input)="onRequestsInput($any($event.target).value)"\r
                            />\r
                            <span class="shrink-0 text-xs text-stone-500 dark:text-stone-400">\r
                                {{\r
                                    (selectedInterval === 'year'\r
                                        ? 'subscriptionPlans.requestSlider.requestsPerYear'\r
                                        : 'subscriptionPlans.requestSlider.requests'\r
                                    ) | transloco\r
                                }}\r
                            </span>\r
                        </div>\r
                    </div>\r
\r
                    <!-- Budget mode -->\r
                    <div *ngIf="estimatorMode === 'budget'" class="mt-5">\r
                        <label\r
                            class="block text-sm font-medium text-stone-700 dark:text-stone-200"\r
                            for="estimator-budget-input"\r
                        >\r
                            {{ 'subscriptionPlans.estimator.budgetLabel' | transloco }}\r
                        </label>\r
                        <div\r
                            class="mt-2 flex items-center gap-2 rounded-xl border border-stone-200 bg-white px-4 py-3 dark:border-gray-700 dark:bg-gray-950"\r
                        >\r
                            <span class="text-2xl font-semibold text-stone-400">$</span>\r
                            <input\r
                                id="estimator-budget-input"\r
                                type="number"\r
                                class="w-full bg-transparent text-2xl font-semibold tracking-tight text-stone-950 outline-none dark:text-white"\r
                                min="0"\r
                                step="1"\r
                                inputmode="numeric"\r
                                [placeholder]="\r
                                    'subscriptionPlans.estimator.budgetPlaceholder' | transloco\r
                                "\r
                                [value]="targetMonthlyBudget"\r
                                (input)="onBudgetInput($any($event.target).value)"\r
                            />\r
                            <span class="shrink-0 text-xs text-stone-500 dark:text-stone-400">\r
                                /{{ 'subscriptionPlans.interval.month' | transloco }}\r
                            </span>\r
                        </div>\r
                        <div\r
                            *ngIf="visiblePlans.length > 1"\r
                            class="mt-3 flex flex-wrap items-center gap-2"\r
                        >\r
                            <label\r
                                class="text-xs text-stone-500 dark:text-stone-400"\r
                                for="estimator-reference-plan"\r
                            >\r
                                {{ 'subscriptionPlans.estimator.referenceLabel' | transloco }}\r
                            </label>\r
                            <select\r
                                id="estimator-reference-plan"\r
                                class="min-h-9 rounded-lg border border-stone-200 bg-white px-2 text-sm text-stone-900 focus:border-stone-400 focus:outline-none dark:border-gray-700 dark:bg-gray-950 dark:text-white"\r
                                [ngModel]="budgetReferencePlanId"\r
                                (ngModelChange)="onReferencePlanChange($event)"\r
                            >\r
                                <option *ngFor="let plan of visiblePlans" [value]="plan._id">\r
                                    {{ plan.name }}\r
                                </option>\r
                            </select>\r
                        </div>\r
                    </div>\r
\r
                    <!-- Slider -->\r
                    <div class="mt-5">\r
                        <input\r
                            type="range"\r
                            class="slider-input w-full"\r
                            min="0"\r
                            [max]="sliderMax"\r
                            [step]="sliderStep"\r
                            [value]="sliderValue"\r
                            [style.background]="\r
                                'linear-gradient(to right, #0c0a09 ' +\r
                                (sliderValue / sliderMax) * 100 +\r
                                '%, #e7e5e4 ' +\r
                                (sliderValue / sliderMax) * 100 +\r
                                '%)'\r
                            "\r
                            (input)="onSliderChange($event)"\r
                        />\r
                        <div\r
                            class="mt-2 flex justify-between text-[11px] text-stone-400 dark:text-stone-500"\r
                        >\r
                            <span *ngFor="let tick of sliderTicks">{{ tick }}</span>\r
                        </div>\r
                    </div>\r
\r
                    <!-- Resolved summary -->\r
                    <div\r
                        class="mt-5 flex flex-col gap-2 rounded-xl border border-stone-200 bg-stone-50 p-4 text-sm dark:border-gray-800 dark:bg-gray-950/60"\r
                    >\r
                        <div class="flex items-center justify-between">\r
                            <span class="text-stone-500 dark:text-stone-400">\r
                                {{\r
                                    'subscriptionPlans.estimator.resolvedRequests' | transloco\r
                                }}\r
                            </span>\r
                            <span class="font-semibold text-stone-950 dark:text-white">\r
                                {{ sliderValue | number: '1.0-0' }}\r
                                {{\r
                                    (selectedInterval === 'year'\r
                                        ? 'subscriptionPlans.requestSlider.requestsPerYear'\r
                                        : 'subscriptionPlans.requestSlider.requests'\r
                                    ) | transloco\r
                                }}\r
                            </span>\r
                        </div>\r
                        <div\r
                            class="flex items-center justify-between"\r
                            *ngIf="estimatorMode === 'budget' && budgetReferencePlan"\r
                        >\r
                            <span class="text-stone-500 dark:text-stone-400">\r
                                {{\r
                                    'subscriptionPlans.estimator.closestFor'\r
                                        | transloco: { plan: budgetReferencePlan.name }\r
                                }}\r
                            </span>\r
                            <span class="font-semibold text-stone-950 dark:text-white">\r
                                \${{ getBudgetAchievedTotal() | number: '1.0-0' }}/{{\r
                                    'subscriptionPlans.interval.month' | transloco\r
                                }}\r
                                <span\r
                                    class="ml-1 text-xs font-medium"\r
                                    *ngIf="getBudgetDelta() as delta"\r
                                    [ngClass]="\r
                                        delta > 0\r
                                            ? 'text-amber-600 dark:text-amber-400'\r
                                            : delta < 0\r
                                            ? 'text-emerald-600 dark:text-emerald-400'\r
                                            : 'text-stone-500 dark:text-stone-400'\r
                                    "\r
                                >\r
                                    ({{ delta > 0 ? '+' : '' }}\${{ delta | number: '1.0-2' }})\r
                                </span>\r
                            </span>\r
                        </div>\r
                    </div>\r
\r
                    <!-- Per-plan cost chips -->\r
                    <div\r
                        *ngIf="!showApiBreakdown && requestsPerMonth > 0 && visiblePlans.length"\r
                        class="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4"\r
                    >\r
                        <ng-container *ngFor="let plan of visiblePlans">\r
                            <div\r
                                class="rounded-xl border p-3 transition"\r
                                [ngClass]="\r
                                    plan._id === getBestValuePlanId()\r
                                        ? 'border-emerald-500/70 bg-emerald-50/80 dark:border-emerald-400/60 dark:bg-emerald-900/20'\r
                                        : isPlanCompetitive(plan)\r
                                        ? 'border-stone-200 bg-white dark:border-gray-800 dark:bg-gray-900/40'\r
                                        : 'border-stone-200 bg-stone-100 opacity-60 dark:border-gray-800 dark:bg-gray-950/30'\r
                                "\r
                            >\r
                                <div\r
                                    class="text-[11px] font-semibold uppercase tracking-[0.16em] text-stone-500 dark:text-stone-400"\r
                                >\r
                                    {{ plan.name }}\r
                                </div>\r
                                <div\r
                                    class="mt-1 text-sm font-semibold text-stone-950 dark:text-white"\r
                                >\r
                                    \${{ getEffectiveCostPerRequest(plan).toFixed(4) }}\r
                                    <span\r
                                        class="ml-0.5 text-[11px] font-medium text-stone-500 dark:text-stone-400"\r
                                        >/\r
                                        {{\r
                                            'subscriptionPlans.requestSlider.perRequest'\r
                                                | transloco\r
                                        }}</span\r
                                    >\r
                                </div>\r
                                <div class="mt-1 text-xs text-stone-500 dark:text-stone-400">\r
                                    ~\${{ getEstimatedTotal(plan) | number: '1.0-0' }}/mo\r
                                </div>\r
                                <div\r
                                    *ngIf="plan._id === getBestValuePlanId()"\r
                                    class="mt-2 inline-flex rounded-full bg-emerald-600 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white"\r
                                >\r
                                    {{ 'subscriptionPlans.requestSlider.bestValue' | transloco }}\r
                                </div>\r
                            </div>\r
                        </ng-container>\r
                    </div>\r
\r
                    <!-- API breakdown link -->\r
                    <div *ngIf="!showApiBreakdown" class="mt-5 flex justify-end">\r
                        <button\r
                            type="button"\r
                            class="inline-flex items-center gap-2 text-sm font-medium text-stone-950 underline-offset-4 hover:underline dark:text-white"\r
                            (click)="showApiBreakdownView()"\r
                        >\r
                            <span>{{ 'subscriptionPlans.apiBreakdown.button' | transloco }}</span>\r
                            <mat-icon class="!h-4 !w-4 !text-base">arrow_forward</mat-icon>\r
                        </button>\r
                    </div>\r
                </section>\r
\r
                <!-- API Price Breakdown Table -->\r
                <section\r
                    *ngIf="showApiBreakdown && !loadingPlans"\r
                    class="rounded-2xl border border-stone-200/90 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900/70 md:p-6"\r
                >\r
                    <div\r
                        class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"\r
                    >\r
                        <h3 class="text-base font-semibold text-stone-950 dark:text-white">\r
                            {{ 'subscriptionPlans.apiBreakdown.title' | transloco }}\r
                        </h3>\r
                        <button\r
                            type="button"\r
                            class="inline-flex items-center gap-2 self-start rounded-xl border border-stone-200 px-3 py-1.5 text-sm font-medium text-stone-700 transition hover:bg-stone-50 dark:border-gray-700 dark:text-stone-200 dark:hover:bg-gray-800"\r
                            (click)="hideApiBreakdownView()"\r
                        >\r
                            <mat-icon class="!h-4 !w-4 !text-base">arrow_back</mat-icon>\r
                            <span>{{\r
                                'subscriptionPlans.apiBreakdown.backToPlans' | transloco\r
                            }}</span>\r
                        </button>\r
                    </div>\r
\r
                    <div *ngIf="loadingFeatures" class="mt-6 flex items-center justify-center py-10">\r
                        <div\r
                            class="h-8 w-8 animate-spin rounded-full border-2 border-stone-200 border-t-stone-900 dark:border-gray-800 dark:border-t-white"\r
                        ></div>\r
                    </div>\r
\r
                    <p\r
                        class="mt-6 text-center text-sm text-stone-500 dark:text-stone-400"\r
                        *ngIf="!loadingFeatures && appFeatures.length === 0"\r
                    >\r
                        {{ 'subscriptionPlans.apiBreakdown.empty' | transloco }}\r
                    </p>\r
\r
                    <div *ngIf="!loadingFeatures && appFeatures.length > 0" class="mt-5">\r
                        <div class="flex flex-col gap-3 md:flex-row md:items-center">\r
                            <input\r
                                type="text"\r
                                class="min-h-10 flex-1 rounded-xl border border-stone-200 bg-white px-3 text-sm text-stone-900 placeholder:text-stone-400 focus:border-stone-400 focus:outline-none dark:border-gray-700 dark:bg-gray-950 dark:text-white"\r
                                [placeholder]="\r
                                    'subscriptionPlans.apiBreakdown.searchPlaceholder' | transloco\r
                                "\r
                                [value]="apiBreakdownSearchQuery"\r
                                (input)="apiBreakdownSearchQuery = $any($event.target).value"\r
                            />\r
                            <select\r
                                class="min-h-10 rounded-xl border border-stone-200 bg-white px-3 text-sm text-stone-900 focus:border-stone-400 focus:outline-none dark:border-gray-700 dark:bg-gray-950 dark:text-white"\r
                                [(ngModel)]="apiBreakdownCountryFilter"\r
                            >\r
                                <option value="">All countries</option>\r
                                <option *ngFor="let c of apiBreakdownCountries" [value]="c">\r
                                    {{ getCountryDisplayName(c) }}\r
                                </option>\r
                            </select>\r
                            <select\r
                                class="min-h-10 rounded-xl border border-stone-200 bg-white px-3 text-sm text-stone-900 focus:border-stone-400 focus:outline-none dark:border-gray-700 dark:bg-gray-950 dark:text-white"\r
                                [(ngModel)]="apiBreakdownCategoryFilter"\r
                            >\r
                                <option value="">All categories</option>\r
                                <option *ngFor="let cat of apiBreakdownCategories" [value]="cat">\r
                                    {{ getCategoryDisplayName(cat) }}\r
                                </option>\r
                            </select>\r
                        </div>\r
\r
                        <div\r
                            class="mt-4 overflow-x-auto rounded-xl border border-stone-200 dark:border-gray-800"\r
                        >\r
                            <table\r
                                class="min-w-full divide-y divide-stone-200 dark:divide-gray-800 text-sm"\r
                            >\r
                                <thead class="bg-stone-50 dark:bg-gray-950">\r
                                    <tr>\r
                                        <th\r
                                            class="px-4 py-3 text-left text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-500 dark:text-stone-400"\r
                                        >\r
                                            {{\r
                                                'subscriptionPlans.apiBreakdown.apiName' | transloco\r
                                            }}\r
                                        </th>\r
                                        <th\r
                                            class="px-4 py-3 text-right text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-500 dark:text-stone-400"\r
                                            *ngFor="let plan of apiBreakdownPlans; trackBy: trackByPlan"\r
                                        >\r
                                            {{ plan.name }}\r
                                        </th>\r
                                    </tr>\r
                                </thead>\r
                                <tbody\r
                                    class="divide-y divide-stone-200 dark:divide-gray-800 bg-white dark:bg-gray-900/40"\r
                                >\r
                                    <ng-container\r
                                        *ngFor="let group of groupedFilteredFeatures; trackBy: trackByGroup"\r
                                    >\r
                                        <tr\r
                                            *ngIf="group.category"\r
                                            class="bg-stone-50/70 dark:bg-gray-950/60"\r
                                        >\r
                                            <td\r
                                                class="px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-500 dark:text-stone-400"\r
                                                [attr.colspan]="apiBreakdownPlans.length + 1"\r
                                            >\r
                                                {{ getCategoryDisplayName(group.category) }}\r
                                            </td>\r
                                        </tr>\r
                                        <tr\r
                                            *ngFor="let feature of group.features; trackBy: trackByFeature"\r
                                            class="cursor-pointer transition hover:bg-stone-50 dark:hover:bg-gray-950/50"\r
                                            (click)="openFeatureModal(feature)"\r
                                        >\r
                                            <td class="px-4 py-3 text-stone-900 dark:text-stone-100">\r
                                                {{ getFeatureDisplayName(feature) }}\r
                                            </td>\r
                                            <td\r
                                                class="px-4 py-3 text-right font-medium text-stone-900 dark:text-white"\r
                                                *ngFor="let plan of apiBreakdownPlans; trackBy: trackByPlan"\r
                                            >\r
                                                \${{\r
                                                    getCompareTablePriceForApi(feature, plan).toFixed(\r
                                                        4\r
                                                    )\r
                                                }}/req\r
                                            </td>\r
                                        </tr>\r
                                    </ng-container>\r
                                </tbody>\r
                            </table>\r
                        </div>\r
\r
                        <div\r
                            *ngIf="requestsPerMonth > 0"\r
                            class="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-stone-500 dark:text-stone-400"\r
                        >\r
                            <span class="font-medium text-stone-700 dark:text-stone-200">\r
                                {{ formatNumber(sliderValue) }}\r
                                {{\r
                                    (selectedInterval === 'year'\r
                                        ? 'subscriptionPlans.requestSlider.requestsPerYear'\r
                                        : 'subscriptionPlans.requestSlider.requests'\r
                                    ) | transloco\r
                                }}:\r
                            </span>\r
                            <span\r
                                *ngFor="let plan of apiBreakdownPlans; trackBy: trackByPlan"\r
                                class="font-medium text-stone-900 dark:text-stone-100"\r
                            >\r
                                {{ plan.name }} = \${{\r
                                    getDisplayEstimatedTotal(plan) | number: '1.0-0'\r
                                }}\r
                            </span>\r
                        </div>\r
                    </div>\r
                </section>\r
\r
                <!-- Plans Grid -->\r
                <div\r
                    #plansExploreAnchor\r
                    *ngIf="!loadingPlans && !showApiBreakdown"\r
                    class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"\r
                >\r
                    <ng-container *ngFor="let plan of visiblePlans; trackBy: trackByPlan">\r
                        <div\r
                            class="plan-card relative flex flex-col rounded-2xl border bg-white p-5 shadow-sm transition dark:bg-gray-900/70"\r
                            [ngClass]="{\r
                                'border-stone-950 ring-2 ring-stone-950 dark:border-white dark:ring-white':\r
                                    plan._id &&\r
                                    plan._id === getBestValuePlanId() &&\r
                                    requestsPerMonth > 0,\r
                                'border-stone-200 dark:border-gray-800':\r
                                    !(plan._id && plan._id === getBestValuePlanId() && requestsPerMonth > 0),\r
                                'is-not-optimal': !isPlanCompetitive(plan),\r
                                'is-current':\r
                                    plan.code === currentSubscription?.subscriptionPlan?.code\r
                            }"\r
                        >\r
                            <!-- Best value badge -->\r
                            <span\r
                                *ngIf="\r
                                    plan._id &&\r
                                    plan._id === getBestValuePlanId() &&\r
                                    requestsPerMonth > 0\r
                                "\r
                                class="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-stone-950 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-white shadow-sm dark:bg-white dark:text-gray-950"\r
                            >\r
                                {{ 'subscriptionPlans.requestSlider.bestValue' | transloco }}\r
                            </span>\r
\r
                            <!-- Bring-back 3x first month -->\r
                            <span\r
                                *ngIf="isBringBackPromoPlan(plan)"\r
                                class="absolute -top-3 right-3 rounded-full border border-amber-300 bg-amber-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-amber-950 shadow-sm dark:border-amber-700 dark:bg-amber-900 dark:text-amber-100"\r
                            >\r
                                {{\r
                                    'subscriptionPlans.promo.bringBack.planBadge'\r
                                        | transloco\r
                                            : { multiplier: bringBackOffer?.multiplier || 3 }\r
                                }}\r
                            </span>\r
\r
                            <!-- Not optimal badge -->\r
                            <span\r
                                *ngIf="!isPlanCompetitive(plan)"\r
                                class="absolute top-3 right-3 inline-flex items-center gap-1 rounded-full border border-stone-200 bg-white/80 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-stone-500 backdrop-blur-sm dark:border-gray-700 dark:bg-gray-900/80 dark:text-stone-400"\r
                            >\r
                                <mat-icon class="!h-3 !w-3 !text-[12px]">info</mat-icon>\r
                                <span>{{\r
                                    'subscriptionPlans.notOptimalForVolume' | transloco\r
                                }}</span>\r
                            </span>\r
\r
                            <!-- Header -->\r
                            <div class="mb-4">\r
                                <h3\r
                                    class="text-base font-semibold text-stone-950 dark:text-white"\r
                                >\r
                                    {{ plan.name }}\r
                                </h3>\r
                                <p\r
                                    *ngIf="isBringBackPromoPlan(plan)"\r
                                    class="mt-1 text-xs font-medium text-amber-800 dark:text-amber-300"\r
                                >\r
                                    \${{ plan.amount | number: '1.0-0' }} \u2192 \${{\r
                                        bringBackFirstMonthCredits(plan) | number: '1.0-0'\r
                                    }}\r
                                    {{ 'subscriptionPlans.credits' | transloco | lowercase }}\r
                                </p>\r
                            </div>\r
\r
                            <!-- Pricing block (blurred when not optimal) -->\r
                            <div\r
                                class="plan-card-content"\r
                                [ngClass]="{\r
                                    'blur-[2px] opacity-50 select-none pointer-events-none':\r
                                        !isPlanCompetitive(plan)\r
                                }"\r
                                [attr.aria-hidden]="!isPlanCompetitive(plan)"\r
                            >\r
                                <ng-container\r
                                    *ngIf="requestsPerMonth <= 0; else planPricingWhenEstimating"\r
                                >\r
                                    <div class="flex items-baseline gap-1">\r
                                        <span\r
                                            class="text-lg font-semibold text-stone-700 dark:text-stone-200"\r
                                            >$</span\r
                                        >\r
                                        <span\r
                                            class="text-4xl font-bold tracking-tight text-stone-950 dark:text-white"\r
                                            >{{ plan.amount | number: '1.0-0' }}</span\r
                                        >\r
                                        <span\r
                                            class="text-sm text-stone-500 dark:text-stone-400"\r
                                            >/{{\r
                                                'subscriptionPlans.interval.' + plan.interval\r
                                                    | transloco\r
                                            }}</span\r
                                        >\r
                                    </div>\r
                                    <p\r
                                        *ngIf="plan.interval === 'year'"\r
                                        class="mt-2 text-xs text-stone-500 dark:text-stone-400"\r
                                    >\r
                                        \${{ getAmountByMonth(plan) }}/{{\r
                                            'subscriptionPlans.interval.month' | transloco\r
                                        }}\r
                                        {{ 'subscriptionPlans.billedAnnually' | transloco }}\r
                                    </p>\r
                                </ng-container>\r
                                <ng-template #planPricingWhenEstimating>\r
                                    <span\r
                                        class="block text-[11px] font-semibold uppercase tracking-[0.16em] text-stone-500 dark:text-stone-400"\r
                                    >\r
                                        {{\r
                                            'subscriptionPlans.requestSlider.estimatedTotal'\r
                                                | transloco\r
                                        }}\r
                                    </span>\r
                                    <div class="mt-2 flex items-baseline gap-1">\r
                                        <span\r
                                            class="text-lg font-semibold text-stone-700 dark:text-stone-200"\r
                                            >$</span\r
                                        >\r
                                        <span\r
                                            class="text-4xl font-bold tracking-tight text-stone-950 dark:text-white"\r
                                            >{{\r
                                                getDisplayEstimatedTotal(plan) | number: '1.0-0'\r
                                            }}</span\r
                                        >\r
                                        <span\r
                                            class="text-sm text-stone-500 dark:text-stone-400"\r
                                            >/{{\r
                                                (selectedInterval === 'year'\r
                                                    ? 'subscriptionPlans.interval.year'\r
                                                    : 'subscriptionPlans.interval.month'\r
                                                ) | transloco\r
                                            }}</span\r
                                        >\r
                                    </div>\r
                                    <p\r
                                        class="mt-2 text-xs text-stone-500 dark:text-stone-400"\r
                                    >\r
                                        ~{{ formatNumber(sliderValue) }}\r
                                        {{\r
                                            (selectedInterval === 'year'\r
                                                ? 'subscriptionPlans.requestSlider.requestsPerYear'\r
                                                : 'subscriptionPlans.requestSlider.requests'\r
                                            ) | transloco\r
                                        }}\r
                                    </p>\r
                                </ng-template>\r
\r
                                <!-- Discount chip -->\r
                                <div\r
                                    *ngIf="plan.discount?.discount"\r
                                    class="mt-4 inline-flex flex-wrap items-center gap-x-1.5 gap-y-0.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-xs dark:border-emerald-900/70 dark:bg-emerald-950/30"\r
                                >\r
                                    <span\r
                                        class="font-semibold text-emerald-700 dark:text-emerald-300"\r
                                        >{{ getDiscountDisplayText(plan) }}</span\r
                                    >\r
                                    <span class="text-emerald-700/70 dark:text-emerald-300/70">{{\r
                                        'subscriptionPlans.discountDescription' | transloco\r
                                    }}</span>\r
                                </div>\r
                            </div>\r
\r
                            <!-- Optional helper hint when not optimal -->\r
                            <p\r
                                *ngIf="!isPlanCompetitive(plan)"\r
                                class="mt-4 text-xs text-stone-500 dark:text-stone-400"\r
                            >\r
                                {{ 'subscriptionPlans.notOptimalHint' | transloco }}\r
                            </p>\r
\r
                            <!-- CTA -->\r
                            <button\r
                                type="button"\r
                                class="mt-auto inline-flex min-h-11 w-full items-center justify-center rounded-xl px-4 text-sm font-semibold transition"\r
                                [ngClass]="{\r
                                    'mt-5': true,\r
                                    'bg-emerald-600/15 text-emerald-700 cursor-default dark:bg-emerald-400/15 dark:text-emerald-300':\r
                                        plan.code === currentSubscription?.subscriptionPlan?.code,\r
                                    'bg-stone-950 text-white hover:bg-stone-800 dark:bg-white dark:text-gray-950 dark:hover:bg-stone-200':\r
                                        plan.code !== currentSubscription?.subscriptionPlan?.code &&\r
                                        isPlanCompetitive(plan),\r
                                    'cursor-not-allowed border border-stone-200 bg-white text-stone-400 dark:border-gray-700 dark:bg-gray-900 dark:text-stone-500':\r
                                        plan.code !== currentSubscription?.subscriptionPlan?.code &&\r
                                        !isPlanCompetitive(plan)\r
                                }"\r
                                [disabled]="\r
                                    plan.code === currentSubscription?.subscriptionPlan?.code ||\r
                                    !isPlanCompetitive(plan)\r
                                "\r
                                (click)="upgradePlan(plan)"\r
                            >\r
                                <ng-container\r
                                    *ngIf="plan.code === currentSubscription?.subscriptionPlan?.code"\r
                                >\r
                                    {{ 'subscriptionPlans.currentPlan' | transloco }}\r
                                </ng-container>\r
                                <ng-container\r
                                    *ngIf="plan.code !== currentSubscription?.subscriptionPlan?.code"\r
                                >\r
                                    <ng-container *ngIf="!isPlanCompetitive(plan)">\r
                                        {{ 'subscriptionPlans.notOptimalCta' | transloco }}\r
                                    </ng-container>\r
                                    <ng-container *ngIf="isPlanCompetitive(plan)">\r
                                        <ng-container *ngIf="!currentSubscription">{{\r
                                            'subscriptionPlans.selectPlan' | transloco\r
                                        }}</ng-container>\r
                                        <ng-container *ngIf="currentSubscription">\r
                                            {{\r
                                                plan.isDowngrade\r
                                                    ? ('subscriptionPlans.downgrade' | transloco)\r
                                                    : ('subscriptionPlans.upgrade' | transloco)\r
                                            }}\r
                                        </ng-container>\r
                                    </ng-container>\r
                                </ng-container>\r
                            </button>\r
                        </div>\r
                    </ng-container>\r
                </div>\r
\r
                <!-- Back nav -->\r
                <div *ngIf="currentSubscription" class="flex justify-center pt-2">\r
                    <button\r
                        type="button"\r
                        class="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium text-stone-600 transition hover:bg-stone-100 dark:text-stone-300 dark:hover:bg-gray-800"\r
                        (click)="switchToCurrent()"\r
                    >\r
                        <mat-icon class="!h-4 !w-4 !text-base">arrow_back</mat-icon>\r
                        <span>{{ 'subscriptionPlans.backToCurrentPlan' | transloco }}</span>\r
                    </button>\r
                </div>\r
            </ng-container>\r
        </div>\r
    </main>\r
</div>\r
\r
<!-- ============================================ -->\r
<!-- API FEATURE MODAL                            -->\r
<!-- ============================================ -->\r
<div\r
    *ngIf="selectedFeatureForModal"\r
    class="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/60 p-4 backdrop-blur-sm"\r
    (click)="closeFeatureModal()"\r
>\r
    <div\r
        class="relative w-full max-w-lg rounded-2xl border border-stone-200 bg-white p-6 shadow-xl dark:border-gray-800 dark:bg-gray-900"\r
        (click)="$event.stopPropagation()"\r
    >\r
        <button\r
            type="button"\r
            class="absolute top-4 right-4 inline-flex h-8 w-8 items-center justify-center rounded-lg text-stone-500 transition hover:bg-stone-100 dark:text-stone-400 dark:hover:bg-gray-800"\r
            (click)="closeFeatureModal()"\r
        >\r
            <mat-icon class="!h-4 !w-4 !text-base">close</mat-icon>\r
        </button>\r
\r
        <div class="flex items-start gap-3">\r
            <div\r
                class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-stone-200 bg-stone-50 text-stone-700 dark:border-gray-800 dark:bg-gray-950 dark:text-stone-200"\r
            >\r
                <mat-icon>link</mat-icon>\r
            </div>\r
            <div>\r
                <h2 class="text-base font-semibold text-stone-950 dark:text-white">\r
                    {{ getFeatureDisplayName(selectedFeatureForModal) }}\r
                </h2>\r
                <p class="mt-1 text-xs text-stone-500 dark:text-stone-400">\r
                    {{\r
                        getCategoryDisplayName(selectedFeatureForModal.baseCategory) ||\r
                            'API Endpoint'\r
                    }}\r
                </p>\r
            </div>\r
        </div>\r
\r
        <div class="mt-5 space-y-4">\r
            <div>\r
                <span\r
                    class="block text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-500 dark:text-stone-400"\r
                >\r
                    Endpoint URL\r
                </span>\r
                <button\r
                    type="button"\r
                    class="mt-2 flex w-full items-center justify-between gap-2 rounded-xl border border-stone-200 bg-stone-50 px-3 py-2 text-left text-xs text-stone-700 transition hover:bg-stone-100 dark:border-gray-800 dark:bg-gray-950 dark:text-stone-200 dark:hover:bg-gray-800"\r
                    (click)="copyUrlToClipboard(selectedFeatureForModal.url)"\r
                >\r
                    <span class="truncate font-mono">\r
                        {{ getFullEndpointUrl(selectedFeatureForModal.url) }}\r
                    </span>\r
                    <mat-icon class="!h-4 !w-4 !text-base">content_copy</mat-icon>\r
                </button>\r
            </div>\r
\r
            <div class="grid grid-cols-1 gap-3 sm:grid-cols-2">\r
                <div *ngIf="selectedFeatureForModal.code">\r
                    <span\r
                        class="block text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-500 dark:text-stone-400"\r
                    >\r
                        Internal Code\r
                    </span>\r
                    <span\r
                        class="mt-2 inline-flex rounded-lg border border-stone-200 bg-stone-50 px-2.5 py-1 text-xs font-mono text-stone-700 dark:border-gray-800 dark:bg-gray-950 dark:text-stone-200"\r
                    >\r
                        {{ selectedFeatureForModal.code }}\r
                    </span>\r
                </div>\r
                <div *ngIf="selectedFeatureForModal.country">\r
                    <span\r
                        class="block text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-500 dark:text-stone-400"\r
                    >\r
                        Region\r
                    </span>\r
                    <span\r
                        class="mt-2 inline-flex rounded-lg border border-stone-200 bg-white px-2.5 py-1 text-xs font-medium text-stone-700 dark:border-gray-700 dark:bg-gray-900 dark:text-stone-200"\r
                    >\r
                        {{\r
                            getCountryDisplayName(selectedFeatureForModal.country) ||\r
                                selectedFeatureForModal.country\r
                        }}\r
                    </span>\r
                </div>\r
            </div>\r
\r
            <div *ngIf="currentSubscription">\r
                <span\r
                    class="block text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-500 dark:text-stone-400"\r
                >\r
                    Your Pricing\r
                </span>\r
                <div class="mt-2 flex items-baseline gap-2">\r
                    <span class="text-2xl font-bold tracking-tight text-stone-950 dark:text-white">\r
                        {{\r
                            getEffectivePriceForApi(\r
                                selectedFeatureForModal,\r
                                currentSubscription.subscriptionPlan\r
                            ) | number: '1.2-4'\r
                        }}\r
                    </span>\r
                    <span\r
                        class="text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-500 dark:text-stone-400"\r
                    >\r
                        CREDITS\r
                        <span class="font-normal normal-case text-stone-400">/ request</span>\r
                    </span>\r
                </div>\r
            </div>\r
            <div *ngIf="!currentSubscription">\r
                <span\r
                    class="block text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-500 dark:text-stone-400"\r
                >\r
                    Standard API Price\r
                </span>\r
                <div class="mt-2 flex items-baseline gap-2">\r
                    <span class="text-2xl font-bold tracking-tight text-stone-950 dark:text-white">\r
                        {{ (selectedFeatureForModal.price ?? 0) | number: '1.2-4' }}\r
                    </span>\r
                    <span\r
                        class="text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-500 dark:text-stone-400"\r
                    >\r
                        CREDITS\r
                        <span class="font-normal normal-case text-stone-400">/ request</span>\r
                    </span>\r
                </div>\r
            </div>\r
        </div>\r
\r
        <div class="mt-6">\r
            <button\r
                type="button"\r
                class="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-stone-950 px-4 text-sm font-semibold text-white transition hover:bg-stone-800 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-white dark:text-gray-950 dark:hover:bg-stone-200"\r
                (click)="openPostmanForFeature(selectedFeatureForModal)"\r
                [disabled]="!selectedFeatureForModal.code"\r
            >\r
                <span>Open in Postman</span>\r
                <mat-icon class="!h-4 !w-4 !text-base">arrow_forward</mat-icon>\r
            </button>\r
        </div>\r
    </div>\r
</div>\r
`, styles: ["/* src/app/modules/subscription-plans/subscription-plans.component.scss */\n.slider-input {\n  appearance: none;\n  height: 6px;\n  border-radius: 999px;\n  background: #e7e5e4;\n  outline: none;\n  cursor: pointer;\n}\n.slider-input::-webkit-slider-thumb {\n  appearance: none;\n  width: 18px;\n  height: 18px;\n  border-radius: 999px;\n  background: #0c0a09;\n  border: 2px solid #ffffff;\n  cursor: pointer;\n  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.2);\n  transition: transform 120ms ease;\n}\n.slider-input::-moz-range-thumb {\n  width: 18px;\n  height: 18px;\n  border-radius: 999px;\n  background: #0c0a09;\n  border: 2px solid #ffffff;\n  cursor: pointer;\n  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.2);\n}\n.slider-input:focus-visible::-webkit-slider-thumb,\n.slider-input:hover::-webkit-slider-thumb {\n  transform: scale(1.05);\n}\n:host-context(.dark) .slider-input::-webkit-slider-thumb {\n  background: #ffffff;\n  border-color: #0f172a;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);\n}\n:host-context(.dark) .slider-input::-moz-range-thumb {\n  background: #ffffff;\n  border-color: #0f172a;\n}\n.plan-card.is-not-optimal {\n  background-image:\n    repeating-linear-gradient(\n      135deg,\n      transparent,\n      transparent 14px,\n      rgba(120, 113, 108, 0.04) 14px,\n      rgba(120, 113, 108, 0.04) 16px);\n}\n:host-context(.dark) .plan-card.is-not-optimal {\n  background-image:\n    repeating-linear-gradient(\n      135deg,\n      transparent,\n      transparent 14px,\n      rgba(255, 255, 255, 0.03) 14px,\n      rgba(255, 255, 255, 0.03) 16px);\n}\n/*# sourceMappingURL=subscription-plans.component.css.map */\n"] }]
  }], () => [{ type: SubscriptionService }, { type: Router }, { type: ActivatedRoute }, { type: TranslocoService }, { type: MatSnackBar }, { type: AuthRequiredGateService }, { type: UserService }], { plansExploreAnchor: [{
    type: ViewChild,
    args: ["plansExploreAnchor"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SubscriptionPlansComponent, { className: "SubscriptionPlansComponent", filePath: "src/app/modules/subscription-plans/subscription-plans.component.ts", lineNumber: 53 });
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
//# sourceMappingURL=chunk-KUVCBOD4.js.map
