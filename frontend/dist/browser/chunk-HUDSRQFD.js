import {
  WebhookEventsComponent
} from "./chunk-BSN5XJPV.js";
import {
  BatchExecutorControlComponent
} from "./chunk-YH2L5SIL.js";
import {
  WebhooksService
} from "./chunk-DLVDR6KR.js";
import {
  SmartBatchInputModeService,
  inferBatchCategory
} from "./chunk-BBL6XUP3.js";
import "./chunk-IBMWDDA3.js";
import {
  getCountryFlag
} from "./chunk-YR6ZLJHC.js";
import "./chunk-PI7X3PUO.js";
import {
  DEFAULT_PER_PAGE,
  SmartBatchService
} from "./chunk-YYPGLQSF.js";
import "./chunk-NDA4EWAJ.js";
import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-2TFX63P7.js";
import {
  MatSnackBar,
  MatSnackBarModule
} from "./chunk-N6A4QSA6.js";
import "./chunk-H3UX3NVF.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-LVI7H6QB.js";
import "./chunk-DT4JVZCC.js";
import "./chunk-W5MZFF7W.js";
import "./chunk-QUFOCOZK.js";
import "./chunk-2W6CKTFA.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-KIEFKQUB.js";
import "./chunk-HVUVGZ2L.js";
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
import "./chunk-JBF67GMG.js";
import {
  TranslocoModule,
  TranslocoPipe,
  TranslocoService
} from "./chunk-FWBWCXY5.js";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-QL64NPDU.js";
import "./chunk-3V5B4ZWC.js";
import {
  CommonModule,
  Component,
  NgClass,
  NgForOf,
  NgIf,
  ViewEncapsulation,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-YWP2Y7QK.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-F5M2C4EZ.js";

// src/app/modules/smart-batch/dashboard/batch-dashboard.component.ts
var _c0 = (a0) => ["/smart-monitor/webhooks", a0];
var _c1 = () => ["/smart-monitor/webhooks"];
var _c2 = (a0) => ({ count: a0 });
var _c3 = (a0, a1, a2) => ({ start: a0, end: a1, total: a2 });
var _c4 = (a0, a1) => ({ page: a0, pages: a1 });
function BatchDashboardComponent_span_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.getCountryFlag(ctx_r0.configuration().country));
  }
}
function BatchDashboardComponent_div_37_mat_icon_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 36);
    \u0275\u0275text(1, "chevron_right");
    \u0275\u0275elementEnd();
  }
}
function BatchDashboardComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 29);
    \u0275\u0275listener("click", function BatchDashboardComponent_div_37_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.toggleStepsPanel());
    });
    \u0275\u0275elementStart(2, "div", 30)(3, "div", 31)(4, "mat-icon", 32);
    \u0275\u0275text(5, "layers");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 33)(7, "span", 34);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 35);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "mat-icon", 36);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 37)(15, "div", 30)(16, "div", 38)(17, "mat-icon", 39);
    \u0275\u0275text(18, "bolt");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 33)(20, "span", 34);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 40)(24, "batch-executor-control", 41);
    \u0275\u0275listener("executorChange", function BatchDashboardComponent_div_37_Template_batch_executor_control_executorChange_24_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setConfigExecutor($event));
    });
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(25, "div", 37)(26, "div", 30)(27, "div", 42)(28, "mat-icon", 43);
    \u0275\u0275text(29, "account_tree");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 12)(31, "span", 34);
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "span", 44);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(36, "div", 37)(37, "div", 30)(38, "div", 45)(39, "mat-icon", 46);
    \u0275\u0275text(40, "swap_horiz");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 12)(42, "span", 34);
    \u0275\u0275text(43);
    \u0275\u0275pipe(44, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "span", 47);
    \u0275\u0275text(46);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(47, "div", 48);
    \u0275\u0275listener("click", function BatchDashboardComponent_div_37_Template_div_click_47_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.toggleCostPanel());
    });
    \u0275\u0275elementStart(48, "div", 30)(49, "div", 49)(50, "mat-icon", 50);
    \u0275\u0275text(51, "attach_money");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "div", 33)(53, "span", 34);
    \u0275\u0275text(54);
    \u0275\u0275pipe(55, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "span", 51);
    \u0275\u0275text(57);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "mat-icon", 36);
    \u0275\u0275text(59);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(60, "div", 52);
    \u0275\u0275listener("click", function BatchDashboardComponent_div_37_Template_div_click_60_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.openLinkedWebhook());
    })("keydown.enter", function BatchDashboardComponent_div_37_Template_div_keydown_enter_60_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.openLinkedWebhook());
    });
    \u0275\u0275elementStart(61, "div", 30)(62, "div", 53)(63, "mat-icon", 54);
    \u0275\u0275text(64, "link");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(65, "div", 33)(66, "span", 34);
    \u0275\u0275text(67);
    \u0275\u0275pipe(68, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "span", 55);
    \u0275\u0275pipe(70, "transloco");
    \u0275\u0275text(71);
    \u0275\u0275pipe(72, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(73, BatchDashboardComponent_div_37_mat_icon_73_Template, 2, 0, "mat-icon", 56);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_12_0;
    let tmp_14_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("ring-2", ctx_r0.showStepsPanel())("ring-indigo-500", ctx_r0.showStepsPanel());
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 32, "batchDashboard.steps"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.stepsCount());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.showStepsPanel() ? "expand_less" : "expand_more");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 34, "batchDashboard.executor"));
    \u0275\u0275advance(3);
    \u0275\u0275property("executor", ctx_r0.configuration().executor)("saving", ctx_r0.savingExecutor())("showBadge", false)("compact", true);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(33, 36, "batchDashboard.strategy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (tmp_12_0 = ctx_r0.configuration()) == null ? null : tmp_12_0.mergeStrategy == null ? null : tmp_12_0.mergeStrategy.replace("-", " "), " ");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(44, 38, "batchDashboard.format"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", (tmp_14_0 = ctx_r0.configuration()) == null ? null : tmp_14_0.inputFormat, " \u2192 ", (tmp_14_0 = ctx_r0.configuration()) == null ? null : tmp_14_0.outputFormat, " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("ring-2", ctx_r0.showCostPanel())("ring-green-500", ctx_r0.showCostPanel());
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(55, 40, "batchDashboard.costPerRow"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" $", ctx_r0.estimatedCostPerRow().toFixed(2), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.showCostPanel() ? "expand_less" : "expand_more");
    \u0275\u0275advance();
    \u0275\u0275classProp("cursor-pointer", ctx_r0.canOpenWebhook());
    \u0275\u0275attribute("role", ctx_r0.canOpenWebhook() ? "link" : null)("tabindex", ctx_r0.canOpenWebhook() ? 0 : null);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(68, 42, "batchDashboard.webhook"));
    \u0275\u0275advance(2);
    \u0275\u0275property("matTooltip", ctx_r0.webhookLabel() || \u0275\u0275pipeBind1(70, 44, "batchDashboard.webhookNone"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.webhookLabel() || \u0275\u0275pipeBind1(72, 46, "batchDashboard.webhookNone"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.canOpenWebhook());
  }
}
function BatchDashboardComponent_div_38_div_11_p_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 71);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", step_r4.url, " ");
  }
}
function BatchDashboardComponent_div_38_div_11_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 72);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "batchDashboard.disabled"));
  }
}
function BatchDashboardComponent_div_38_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64)(1, "div", 65);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 33)(4, "p", 66);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, BatchDashboardComponent_div_38_div_11_p_6_Template, 2, 1, "p", 67);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 68)(8, "span", 69);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(10, BatchDashboardComponent_div_38_div_11_span_10_Template, 3, 3, "span", 70);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", step_r4.sequence, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(step_r4.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", step_r4.url);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("$", step_r4.price.toFixed(2), "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !step_r4.enabled);
  }
}
function BatchDashboardComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 57)(1, "div", 58)(2, "h3", 59)(3, "mat-icon", 60);
    \u0275\u0275text(4, "layers");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 61);
    \u0275\u0275listener("click", function BatchDashboardComponent_div_38_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.toggleStepsPanel());
    });
    \u0275\u0275elementStart(8, "mat-icon");
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 62);
    \u0275\u0275template(11, BatchDashboardComponent_div_38_div_11_Template, 11, 5, "div", 63);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 2, "batchDashboard.processingSteps"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", ctx_r0.stepsDetails());
  }
}
function BatchDashboardComponent_div_39_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 80)(1, "div", 30)(2, "span", 81);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 82);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "span", 66);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const step_r6 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", step_r6.sequence, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(step_r6.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", step_r6.price.toFixed(2), "");
  }
}
function BatchDashboardComponent_div_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 73)(1, "div", 58)(2, "h3", 59)(3, "mat-icon", 74);
    \u0275\u0275text(4, "attach_money");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 61);
    \u0275\u0275listener("click", function BatchDashboardComponent_div_39_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.toggleCostPanel());
    });
    \u0275\u0275elementStart(8, "mat-icon");
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 75);
    \u0275\u0275template(11, BatchDashboardComponent_div_39_div_11_Template, 8, 3, "div", 76);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 77)(13, "span", 78);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 79);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 4, "batchDashboard.costBreakdown"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", ctx_r0.stepsDetails());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 6, "batchDashboard.totalPerRow"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("$", ctx_r0.estimatedCostPerRow().toFixed(2), "");
  }
}
function BatchDashboardComponent_div_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 83)(1, "div", 84)(2, "div", 85)(3, "div", 30)(4, "div", 86)(5, "mat-icon", 87);
    \u0275\u0275text(6, "inbox");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 88)(8, "span", 89);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 90)(12, "p", 91);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p", 92);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 93)(18, "div", 85)(19, "div", 30)(20, "div", 94)(21, "mat-icon", 95);
    \u0275\u0275text(22, "check_circle");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 96)(24, "span", 97);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 90)(28, "p", 91);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "p", 92);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(33, "div", 98);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 99)(35, "div", 85)(36, "div", 30)(37, "div", 100)(38, "mat-icon", 101);
    \u0275\u0275text(39, "schedule");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(40, "div", 102)(41, "span", 103);
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(44, "div", 90)(45, "p", 91);
    \u0275\u0275text(46);
    \u0275\u0275pipe(47, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "p", 92);
    \u0275\u0275text(49);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(50, "div", 104);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "div", 105)(52, "div", 85)(53, "div", 30)(54, "div", 106)(55, "mat-icon", 107);
    \u0275\u0275text(56, "error_outline");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(57, "div", 108)(58, "span", 109);
    \u0275\u0275text(59);
    \u0275\u0275pipe(60, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(61, "div", 90)(62, "p", 91);
    \u0275\u0275text(63);
    \u0275\u0275pipe(64, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "p", 92);
    \u0275\u0275text(66);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(67, "div", 110);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 12, "batchDashboard.total"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 14, "batchDashboard.totalBatches"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.stats().totalBatches, " ");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 16, "batchDashboard.success"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(30, 18, "batchDashboard.completedRows"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.stats().completedRows, " ");
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(43, 20, "batchDashboard.queue"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(47, 22, "batchDashboard.pendingRows"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.stats().pendingRows, " ");
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(60, 24, "batchDashboard.error"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(64, 26, "batchDashboard.failedRows"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.stats().failedRows, " ");
  }
}
function BatchDashboardComponent_section_41_webhook_events_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "webhook-events", 116);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("webhookId", ctx_r0.webhookId());
  }
}
function BatchDashboardComponent_section_41_p_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 117);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "batchDashboard.webhookEventsEmpty"), " ");
  }
}
function BatchDashboardComponent_section_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 37)(1, "div", 111)(2, "div", 12)(3, "h3", 112);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 14);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "a", 113);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, BatchDashboardComponent_section_41_webhook_events_12_Template, 1, 1, "webhook-events", 114)(13, BatchDashboardComponent_section_41_p_13_Template, 3, 3, "p", 115);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 6, "batchDashboard.webhookEvents"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 8, "batchDashboard.webhookEventsHint"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", ctx_r0.webhookId() ? \u0275\u0275pureFunction1(12, _c0, ctx_r0.webhookId()) : \u0275\u0275pureFunction0(14, _c1));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 10, "batchDashboard.openSmartMonitorWebhooks"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.webhookId());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.webhookId());
  }
}
function BatchDashboardComponent_div_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 118);
    \u0275\u0275element(1, "mat-spinner", 119);
    \u0275\u0275elementStart(2, "p", 120);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "batchDashboard.loadingBatches"), " ");
  }
}
function BatchDashboardComponent_div_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 121)(1, "div", 122)(2, "mat-icon", 123);
    \u0275\u0275text(3, "inbox");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "h3", 124);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 125);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 126);
    \u0275\u0275listener("click", function BatchDashboardComponent_div_43_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.createBatch());
    });
    \u0275\u0275elementStart(11, "mat-icon", 127);
    \u0275\u0275text(12, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 3, "batchDashboard.noBatchesYet"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 5, "batchDashboard.createFirstBatchDescription"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 7, "batchDashboard.createFirstBatch"), " ");
  }
}
function BatchDashboardComponent_div_44_tr_27_span_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 154);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const batch_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(", \u0275\u0275pipeBind2(2, 1, "batchDashboard.failedCount", \u0275\u0275pureFunction1(4, _c2, batch_r9.failedRows)), ")");
  }
}
function BatchDashboardComponent_div_44_tr_27_span_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 155);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const batch_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(", \u0275\u0275pipeBind2(2, 1, "batchDashboard.partialCount", \u0275\u0275pureFunction1(4, _c2, batch_r9.partialRows || 0)), ")");
  }
}
function BatchDashboardComponent_div_44_tr_27_button_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 152);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275listener("click", function BatchDashboardComponent_div_44_tr_27_button_26_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const batch_r9 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      ctx_r0.addInputs(batch_r9._id);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "mat-icon", 153);
    \u0275\u0275text(3, "playlist_add");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "batchDashboard.addInputs"));
  }
}
function BatchDashboardComponent_div_44_tr_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 137);
    \u0275\u0275listener("click", function BatchDashboardComponent_div_44_tr_27_Template_tr_click_0_listener() {
      const batch_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.viewBatch(batch_r9._id));
    });
    \u0275\u0275elementStart(1, "td", 138)(2, "span", 66);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 138)(5, "span", 139);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td", 140)(9, "div", 30);
    \u0275\u0275element(10, "mat-progress-bar", 141);
    \u0275\u0275elementStart(11, "span", 142);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "td", 138)(14, "div", 143)(15, "span", 144);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 145);
    \u0275\u0275text(18, "/");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 146);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, BatchDashboardComponent_div_44_tr_27_span_21_Template, 3, 6, "span", 147)(22, BatchDashboardComponent_div_44_tr_27_span_22_Template, 3, 6, "span", 148);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "td", 149);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "td", 150);
    \u0275\u0275template(26, BatchDashboardComponent_div_44_tr_27_button_26_Template, 4, 3, "button", 151);
    \u0275\u0275elementStart(27, "button", 152);
    \u0275\u0275pipe(28, "transloco");
    \u0275\u0275listener("click", function BatchDashboardComponent_div_44_tr_27_Template_button_click_27_listener($event) {
      const batch_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      ctx_r0.viewBatch(batch_r9._id);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(29, "mat-icon", 153);
    \u0275\u0275text(30, "visibility");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const batch_r9 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(batch_r9.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r0.getStatusColor(batch_r9.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 12, "batchProcessing." + batch_r9.status), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r0.getBatchProgress(batch_r9));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.getBatchProgress(batch_r9).toFixed(0), "% ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(batch_r9.completedRows);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(batch_r9.totalRows);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", batch_r9.failedRows > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (batch_r9.partialRows || 0) > 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatDate(batch_r9.createdAt), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.canAddInputs(batch_r9));
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(28, 14, "batchDashboard.viewDetails"));
  }
}
function BatchDashboardComponent_div_44_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 156)(1, "p", 117);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 157)(5, "button", 158);
    \u0275\u0275listener("click", function BatchDashboardComponent_div_44_div_28_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.previousPage());
    });
    \u0275\u0275elementStart(6, "mat-icon", 153);
    \u0275\u0275text(7, "chevron_left");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 117);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 158);
    \u0275\u0275listener("click", function BatchDashboardComponent_div_44_div_28_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.nextPage());
    });
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "transloco");
    \u0275\u0275elementStart(16, "mat-icon", 153);
    \u0275\u0275text(17, "chevron_right");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 6, "batchDashboard.paginationRange", \u0275\u0275pureFunction3(16, _c3, ctx_r0.rangeStart(), ctx_r0.rangeEnd(), ctx_r0.totalBatches())), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", !ctx_r0.canGoPrevious());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 9, "batchDashboard.previousPage"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(12, 11, "batchDashboard.pageOf", \u0275\u0275pureFunction2(20, _c4, ctx_r0.page(), ctx_r0.totalPages())), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r0.canGoNext());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 14, "batchDashboard.nextPage"), " ");
  }
}
function BatchDashboardComponent_div_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 128)(1, "h2", 112);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 129)(5, "table", 130)(6, "thead", 131)(7, "tr")(8, "th", 132);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 132);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 132);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th", 132);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th", 132);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th", 133);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "tbody", 134);
    \u0275\u0275template(27, BatchDashboardComponent_div_44_tr_27_Template, 31, 16, "tr", 135);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(28, BatchDashboardComponent_div_44_div_28_Template, 18, 23, "div", 136);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 9, "batchDashboard.batches"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 11, "batchDashboard.name"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 13, "batchDashboard.status"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 15, "batchDashboard.progress"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 17, "batchDashboard.rows"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 19, "batchDashboard.created"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(25, 21, "batchDashboard.actions"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r0.batches());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.totalPages() > 1);
  }
}
var BatchDashboardComponent = class _BatchDashboardComponent {
  constructor() {
    this._smartBatchService = inject(SmartBatchService);
    this._router = inject(Router);
    this._route = inject(ActivatedRoute);
    this._inputModeService = inject(SmartBatchInputModeService);
    this._webhooksService = inject(WebhooksService);
    this._transloco = inject(TranslocoService);
    this._snackBar = inject(MatSnackBar);
    this.configId = signal(null);
    this.configuration = signal(null);
    this.batches = signal([]);
    this.stats = signal(null);
    this.isLoading = signal(true);
    this.isLoadingBatches = signal(false);
    this.page = signal(1);
    this.perPage = signal(DEFAULT_PER_PAGE);
    this.totalBatches = signal(0);
    this.totalPages = signal(1);
    this.rangeStart = computed(() => this.totalBatches() === 0 ? 0 : (this.page() - 1) * this.perPage() + 1);
    this.rangeEnd = computed(() => Math.min(this.page() * this.perPage(), this.totalBatches()));
    this.canGoPrevious = computed(() => this.page() > 1 && !this.isLoadingBatches());
    this.canGoNext = computed(() => this.page() < this.totalPages() && !this.isLoadingBatches());
    this.showStepsPanel = signal(false);
    this.showCostPanel = signal(false);
    this.webhookId = signal(null);
    this.webhookName = signal("");
    this.webhookUrl = computed(() => this.configuration()?.notification?.webhookUrl || "");
    this.webhookLabel = computed(() => {
      const name = this.webhookName().trim();
      if (name)
        return name;
      const url = this.webhookUrl();
      if (!url)
        return "";
      try {
        return new URL(url).host;
      } catch {
        return url;
      }
    });
    this.canOpenWebhook = computed(() => Boolean(this.webhookId() || this.webhookUrl()));
    this.savingExecutor = signal(false);
    this.stepsCount = computed(() => this.configuration()?.steps?.length ?? 0);
    this.stepsDetails = computed(() => {
      const config = this.configuration();
      if (!config?.steps)
        return [];
      return config.steps.sort((a, b) => a.sequence - b.sequence).map((step) => {
        const feature = step.appFeature;
        return {
          sequence: step.sequence,
          name: feature?.name || feature?.code || "Unknown",
          url: feature?.url || "",
          price: feature?.price || feature?.smartCheckPrice || 0,
          enabled: step.enabled
        };
      });
    });
    this.estimatedCostPerRow = computed(() => {
      return this.stepsDetails().reduce((sum, step) => sum + step.price, 0);
    });
  }
  toggleStepsPanel() {
    this.showStepsPanel.update((v) => !v);
    if (this.showStepsPanel()) {
      this.showCostPanel.set(false);
    }
  }
  toggleCostPanel() {
    this.showCostPanel.update((v) => !v);
    if (this.showCostPanel()) {
      this.showStepsPanel.set(false);
    }
  }
  ngOnInit() {
    const id = this._route.snapshot.paramMap.get("configId");
    if (id) {
      this.configId.set(id);
      this.loadData(id);
    } else {
      this._router.navigate(["/smart-batch/workspace"]);
    }
  }
  loadData(configId) {
    this.isLoading.set(true);
    this._smartBatchService.getConfiguration(configId).subscribe({
      next: (res) => {
        this.configuration.set(res.data);
        this.resolveWebhook(res.data);
      },
      error: () => {
        this._router.navigate(["/smart-batch/workspace"]);
      }
    });
    this.loadBatches(1);
    this._smartBatchService.getSmartBatchStats(configId).subscribe({
      next: (res) => {
        this.stats.set(res.data);
      }
    });
  }
  resolveWebhook(config) {
    const ref = config?.notification?.webhook;
    const storedId = typeof ref === "object" && ref ? ref._id : typeof ref === "string" ? ref : "";
    if (storedId) {
      this.webhookId.set(storedId);
      this.webhookName.set(typeof ref === "object" && ref?.name ? ref.name : "");
      return;
    }
    const trimmed = (config?.notification?.webhookUrl || "").trim();
    if (!trimmed) {
      this.webhookId.set(null);
      this.webhookName.set("");
      return;
    }
    this._webhooksService.get({ where_url: trimmed, where_isActive: true, perPage: 1 }).subscribe({
      next: (res) => {
        const match = (res.data || []).find((webhook) => webhook.url === trimmed);
        this.webhookId.set(match?._id ?? null);
        this.webhookName.set(match?.name ?? "");
      },
      error: () => {
        this.webhookId.set(null);
        this.webhookName.set("");
      }
    });
  }
  openLinkedWebhook() {
    const id = this.webhookId();
    if (id) {
      this._router.navigate(["/smart-monitor/webhooks", id]);
      return;
    }
    if (this.webhookUrl()) {
      this._router.navigate(["/smart-monitor/webhooks"]);
    }
  }
  loadBatches(page) {
    const configId = this.configId();
    if (!configId)
      return;
    this.isLoadingBatches.set(true);
    this._smartBatchService.getSmartBatches(configId, { page, perPage: this.perPage() }).subscribe({
      next: (res) => {
        this.batches.set(res.data || []);
        this.page.set(res.page ?? page);
        this.perPage.set(res.limit ?? this.perPage());
        this.totalBatches.set(res.total ?? res.data?.length ?? 0);
        this.totalPages.set(Math.max(1, res.pages ?? 1));
        this.isLoadingBatches.set(false);
        this.isLoading.set(false);
      },
      error: () => {
        this.isLoadingBatches.set(false);
        this.isLoading.set(false);
      }
    });
  }
  previousPage() {
    if (!this.canGoPrevious())
      return;
    this.loadBatches(this.page() - 1);
  }
  nextPage() {
    if (!this.canGoNext())
      return;
    this.loadBatches(this.page() + 1);
  }
  setConfigExecutor(executor) {
    const config = this.configuration();
    const id = this.configId();
    if (!id || !config || this.savingExecutor() || config.executor === executor)
      return;
    this.savingExecutor.set(true);
    this._smartBatchService.updateConfiguration(id, { executor }).subscribe({
      next: (res) => {
        this.configuration.set(__spreadProps(__spreadValues(__spreadValues({}, config), res.data), { executor }));
        this.savingExecutor.set(false);
      },
      error: () => {
        this.savingExecutor.set(false);
        this._snackBar.open(this._transloco.translate("batchDashboard.executorUpdateFailed"), void 0, { duration: 4e3 });
      }
    });
  }
  createBatch() {
    const configId = this.configId();
    if (!configId) {
      return;
    }
    const title = this.configuration()?.name ?? "";
    const category = inferBatchCategory(title);
    this._inputModeService.openModeDialog({
      context: "useTemplate",
      title,
      category
    }).subscribe((mode) => {
      if (!mode) {
        return;
      }
      if (mode === "single") {
        this._router.navigate(["/smart-batch", configId, "quick-validate"], { queryParams: { from: "dashboard" } });
        return;
      }
      this._router.navigate(["/smart-batch", configId, "batch", "new"]);
    });
  }
  viewBatch(batchId) {
    this._router.navigate(["/smart-batch", this.configId(), "batch", batchId]);
  }
  addInputs(batchId) {
    const configId = this.configId();
    if (!configId) {
      return;
    }
    const batch = this.batches().find((b) => b._id === batchId);
    if (batch?.status === "processing") {
      return;
    }
    const title = batch?.name ?? this.configuration()?.name ?? "";
    const category = inferBatchCategory(title || this.configuration()?.name);
    this._inputModeService.openModeDialog({
      context: "addInputs",
      title,
      category
    }).subscribe((mode) => {
      if (!mode) {
        return;
      }
      if (mode === "single") {
        this._router.navigate([
          "/smart-batch",
          configId,
          "batch",
          batchId,
          "quick-validate"
        ]);
        return;
      }
      this._router.navigate(["/smart-batch", configId, "batch", batchId, "inputs"]);
    });
  }
  canAddInputs(batch) {
    return batch.status !== "processing";
  }
  getCountryFlag(country) {
    return getCountryFlag(country);
  }
  getStatusColor(status) {
    const colors = {
      draft: "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300",
      pending: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",
      processing: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
      completed: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
      failed: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
      cancelled: "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400"
    };
    return colors[status] || colors.draft;
  }
  getBatchProgress(batch) {
    if (batch.totalRows === 0)
      return 0;
    return (batch.completedRows + batch.failedRows + (batch.partialRows || 0)) / batch.totalRows * 100;
  }
  formatDate(dateString) {
    if (!dateString)
      return "-";
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  }
  static {
    this.\u0275fac = function BatchDashboardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BatchDashboardComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BatchDashboardComponent, selectors: [["batch-dashboard"]], decls: 45, vars: 30, consts: [[1, "flex", "min-h-screen", "min-w-0", "flex-auto", "flex-col", "bg-stone-50", "dark:bg-gray-950"], [1, "border-b", "border-stone-200/90", "bg-white/90", "px-5", "py-6", "backdrop-blur-sm", "dark:border-gray-800", "dark:bg-gray-950/90", "md:px-8", "md:py-8"], [1, "mx-auto", "flex", "w-full", "max-w-7xl", "flex-col", "gap-5"], [1, "flex", "flex-wrap", "items-center", "text-xs", "font-medium", "leading-none", "text-stone-500", "dark:text-stone-400"], ["routerLink", "/chat", 1, "cursor-pointer", "text-stone-700", "underline-offset-4", "hover:underline", "dark:text-stone-300"], ["svgIcon", "heroicons_solid:chevron-right", 1, "icon-size-4", "mx-2", "text-stone-400"], ["routerLink", "/smart-batch/workspace", 1, "cursor-pointer", "text-stone-700", "underline-offset-4", "hover:underline", "dark:text-stone-300"], [1, "cursor-default", "text-stone-600", "dark:text-stone-300"], [1, "flex", "flex-wrap", "items-start", "justify-between", "gap-3"], [1, "flex", "min-w-0", "items-start", "gap-3"], ["mat-icon-button", "", "type", "button", "routerLink", "/smart-batch/workspace", 1, "shrink-0", "!text-stone-600", "dark:!text-stone-300", 3, "matTooltip"], ["class", "shrink-0 text-3xl", 4, "ngIf"], [1, "min-w-0"], [1, "text-2xl", "font-semibold", "tracking-tight", "text-stone-900", "dark:text-white", "md:text-3xl"], [1, "mt-1", "text-sm", "text-stone-500", "dark:text-stone-400"], ["mat-flat-button", "", "color", "primary", "type", "button", 1, "shrink-0", "rounded-xl", "!px-6", "!py-2", 3, "click"], [1, "mr-2", "icon-size-5"], [1, "flex", "flex-auto", "flex-col", "px-5", "py-8", "md:px-8", "md:py-10"], [1, "mx-auto", "flex", "w-full", "max-w-7xl", "flex-col", "gap-6"], ["class", "grid grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-6", 4, "ngIf"], ["class", "animate-fade-in rounded-2xl border border-indigo-200/90 bg-white p-5 shadow-sm dark:border-indigo-900/50 dark:bg-gray-900", 4, "ngIf"], ["class", "animate-fade-in rounded-2xl border border-green-200/90 bg-white p-5 shadow-sm dark:border-green-900/50 dark:bg-gray-900", 4, "ngIf"], ["class", "grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4", 4, "ngIf"], ["class", "rounded-2xl border border-stone-200/90 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900", 4, "ngIf"], ["class", "flex flex-1 flex-col items-center justify-center py-20", 4, "ngIf"], ["class", "flex flex-1 flex-col items-center justify-center rounded-2xl border-2 border-dashed border-stone-200 p-12 text-center dark:border-gray-800", 4, "ngIf"], ["class", "flex flex-col gap-4", 4, "ngIf"], [1, "shrink-0", "text-3xl"], [1, "grid", "grid-cols-2", "gap-4", "lg:grid-cols-3", "xl:grid-cols-6"], [1, "cursor-pointer", "rounded-2xl", "border", "border-stone-200/90", "bg-white", "p-5", "shadow-sm", "transition-all", "hover:border-indigo-300", "hover:shadow-md", "dark:border-gray-800", "dark:bg-gray-900", "dark:hover:border-indigo-700", 3, "click"], [1, "flex", "items-center", "gap-3"], [1, "flex", "h-10", "w-10", "shrink-0", "items-center", "justify-center", "rounded-lg", "bg-indigo-100", "dark:bg-indigo-900/30"], [1, "icon-size-5", "text-indigo-600", "dark:text-indigo-400"], [1, "min-w-0", "flex-1"], [1, "block", "text-xs", "font-medium", "uppercase", "text-stone-500", "dark:text-stone-400"], [1, "text-xl", "font-bold", "text-stone-900", "dark:text-white"], [1, "icon-size-4", "shrink-0", "text-stone-400"], [1, "rounded-2xl", "border", "border-stone-200/90", "bg-white", "p-5", "shadow-sm", "dark:border-gray-800", "dark:bg-gray-900"], [1, "flex", "h-10", "w-10", "shrink-0", "items-center", "justify-center", "rounded-lg", "bg-blue-100", "dark:bg-blue-900/30"], [1, "icon-size-5", "text-blue-600", "dark:text-blue-400"], [1, "mt-1"], ["hintKey", "batchDashboard.executorHint", 3, "executorChange", "executor", "saving", "showBadge", "compact"], [1, "flex", "h-10", "w-10", "shrink-0", "items-center", "justify-center", "rounded-lg", "bg-purple-100", "dark:bg-purple-900/30"], [1, "icon-size-5", "text-purple-600", "dark:text-purple-400"], [1, "text-lg", "font-semibold", "capitalize", "text-stone-900", "dark:text-white"], [1, "flex", "h-10", "w-10", "shrink-0", "items-center", "justify-center", "rounded-lg", "bg-teal-100", "dark:bg-teal-900/30"], [1, "icon-size-5", "text-teal-600", "dark:text-teal-400"], [1, "text-lg", "font-semibold", "uppercase", "text-stone-900", "dark:text-white"], [1, "cursor-pointer", "rounded-2xl", "border", "border-stone-200/90", "bg-white", "p-5", "shadow-sm", "transition-all", "hover:border-green-300", "hover:shadow-md", "dark:border-gray-800", "dark:bg-gray-900", "dark:hover:border-green-700", 3, "click"], [1, "flex", "h-10", "w-10", "shrink-0", "items-center", "justify-center", "rounded-lg", "bg-green-100", "dark:bg-green-900/30"], [1, "icon-size-5", "text-green-600", "dark:text-green-400"], [1, "text-xl", "font-bold", "text-green-600", "dark:text-green-400"], [1, "rounded-2xl", "border", "border-stone-200/90", "bg-white", "p-5", "shadow-sm", "transition-all", "hover:border-sky-300", "hover:shadow-md", "dark:border-gray-800", "dark:bg-gray-900", "dark:hover:border-sky-700", 3, "click", "keydown.enter"], [1, "flex", "h-10", "w-10", "shrink-0", "items-center", "justify-center", "rounded-lg", "bg-sky-100", "dark:bg-sky-900/30"], [1, "icon-size-5", "text-sky-600", "dark:text-sky-400"], [1, "block", "truncate", "text-lg", "font-semibold", "text-stone-900", "dark:text-white", 3, "matTooltip"], ["class", "icon-size-4 shrink-0 text-stone-400", 4, "ngIf"], [1, "animate-fade-in", "rounded-2xl", "border", "border-indigo-200/90", "bg-white", "p-5", "shadow-sm", "dark:border-indigo-900/50", "dark:bg-gray-900"], [1, "mb-4", "flex", "items-center", "justify-between"], [1, "flex", "items-center", "gap-2", "text-lg", "font-semibold", "text-stone-900", "dark:text-white"], [1, "text-indigo-600", "dark:text-indigo-400"], ["mat-icon-button", "", "type", "button", 1, "!text-stone-600", "dark:!text-stone-400", 3, "click"], [1, "space-y-3"], ["class", "flex items-center gap-4 rounded-xl bg-stone-50 p-3 dark:bg-gray-800/50", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "gap-4", "rounded-xl", "bg-stone-50", "p-3", "dark:bg-gray-800/50"], [1, "flex", "h-8", "w-8", "shrink-0", "items-center", "justify-center", "rounded-full", "bg-indigo-100", "text-sm", "font-bold", "text-indigo-600", "dark:bg-indigo-900/50", "dark:text-indigo-400"], [1, "font-medium", "text-stone-900", "dark:text-white"], ["class", "font-mono text-sm text-stone-500 dark:text-stone-400", 4, "ngIf"], [1, "shrink-0", "text-right"], [1, "text-sm", "font-medium", "text-green-600", "dark:text-green-400"], ["class", "shrink-0 rounded bg-yellow-100 px-2 py-0.5 text-xs text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400", 4, "ngIf"], [1, "font-mono", "text-sm", "text-stone-500", "dark:text-stone-400"], [1, "shrink-0", "rounded", "bg-yellow-100", "px-2", "py-0.5", "text-xs", "text-yellow-700", "dark:bg-yellow-900/30", "dark:text-yellow-400"], [1, "animate-fade-in", "rounded-2xl", "border", "border-green-200/90", "bg-white", "p-5", "shadow-sm", "dark:border-green-900/50", "dark:bg-gray-900"], [1, "text-green-600", "dark:text-green-400"], [1, "space-y-2"], ["class", "flex items-center justify-between border-b border-stone-100 py-2 last:border-0 dark:border-gray-800", 4, "ngFor", "ngForOf"], [1, "mt-4", "flex", "items-center", "justify-between", "border-t", "border-stone-200", "pt-4", "dark:border-gray-700"], [1, "font-semibold", "text-stone-900", "dark:text-white"], [1, "text-2xl", "font-bold", "text-green-600", "dark:text-green-400"], [1, "flex", "items-center", "justify-between", "border-b", "border-stone-100", "py-2", "last:border-0", "dark:border-gray-800"], [1, "flex", "h-6", "w-6", "shrink-0", "items-center", "justify-center", "rounded-full", "bg-stone-100", "text-xs", "font-medium", "text-stone-600", "dark:bg-gray-800", "dark:text-stone-400"], [1, "text-stone-700", "dark:text-stone-300"], [1, "grid", "grid-cols-1", "gap-4", "md:grid-cols-2", "lg:grid-cols-4"], [1, "group", "relative", "rounded-2xl", "border", "border-stone-200/90", "bg-white", "p-6", "shadow-sm", "transition-all", "duration-200", "hover:border-stone-300", "hover:shadow-md", "dark:border-gray-800", "dark:bg-gray-900", "dark:hover:border-gray-700"], [1, "mb-4", "flex", "items-start", "justify-between"], [1, "flex", "h-11", "w-11", "items-center", "justify-center", "rounded-xl", "border", "border-stone-200/80", "bg-gradient-to-br", "from-stone-50", "to-stone-100", "dark:border-gray-700/60", "dark:from-gray-800", "dark:to-gray-900"], [1, "icon-size-5", "text-stone-600", "dark:text-stone-400"], [1, "rounded-md", "border", "border-stone-200/80", "bg-stone-50", "px-2.5", "py-0.5", "dark:border-gray-700/60", "dark:bg-gray-800/50"], [1, "text-[10px]", "font-semibold", "uppercase", "tracking-wider", "text-stone-500", "dark:text-stone-400"], [1, "space-y-1"], [1, "text-[13px]", "font-medium", "tracking-wide", "text-stone-500", "dark:text-stone-400"], [1, "text-3xl", "font-bold", "tracking-tight", "text-stone-900", "dark:text-white"], [1, "group", "relative", "rounded-2xl", "border", "border-emerald-200/60", "bg-white", "p-6", "shadow-sm", "transition-all", "duration-200", "hover:border-emerald-300/80", "hover:shadow-md", "dark:border-emerald-900/40", "dark:bg-gray-900", "dark:hover:border-emerald-800/60"], [1, "flex", "h-11", "w-11", "items-center", "justify-center", "rounded-xl", "border", "border-emerald-200/60", "bg-gradient-to-br", "from-emerald-50", "to-emerald-100/80", "dark:border-emerald-800/60", "dark:from-emerald-950/50", "dark:to-emerald-900/30"], [1, "icon-size-5", "text-emerald-600", "dark:text-emerald-400"], [1, "rounded-md", "border", "border-emerald-200/60", "bg-emerald-50", "px-2.5", "py-0.5", "dark:border-emerald-800/40", "dark:bg-emerald-950/30"], [1, "text-[10px]", "font-semibold", "uppercase", "tracking-wider", "text-emerald-600", "dark:text-emerald-400"], [1, "absolute", "bottom-0", "left-0", "right-0", "h-1", "rounded-b-2xl", "bg-gradient-to-r", "from-emerald-500/20", "to-emerald-400/20"], [1, "group", "relative", "rounded-2xl", "border", "border-amber-200/60", "bg-white", "p-6", "shadow-sm", "transition-all", "duration-200", "hover:border-amber-300/80", "hover:shadow-md", "dark:border-amber-900/40", "dark:bg-gray-900", "dark:hover:border-amber-800/60"], [1, "flex", "h-11", "w-11", "items-center", "justify-center", "rounded-xl", "border", "border-amber-200/60", "bg-gradient-to-br", "from-amber-50", "to-amber-100/80", "dark:border-amber-800/60", "dark:from-amber-950/50", "dark:to-amber-900/30"], [1, "icon-size-5", "text-amber-600", "dark:text-amber-400"], [1, "rounded-md", "border", "border-amber-200/60", "bg-amber-50", "px-2.5", "py-0.5", "dark:border-amber-800/40", "dark:bg-amber-950/30"], [1, "text-[10px]", "font-semibold", "uppercase", "tracking-wider", "text-amber-600", "dark:text-amber-400"], [1, "absolute", "bottom-0", "left-0", "right-0", "h-1", "rounded-b-2xl", "bg-gradient-to-r", "from-amber-500/20", "to-amber-400/20"], [1, "group", "relative", "rounded-2xl", "border", "border-rose-200/60", "bg-white", "p-6", "shadow-sm", "transition-all", "duration-200", "hover:border-rose-300/80", "hover:shadow-md", "dark:border-rose-900/40", "dark:bg-gray-900", "dark:hover:border-rose-800/60"], [1, "flex", "h-11", "w-11", "items-center", "justify-center", "rounded-xl", "border", "border-rose-200/60", "bg-gradient-to-br", "from-rose-50", "to-rose-100/80", "dark:border-rose-800/60", "dark:from-rose-950/50", "dark:to-rose-900/30"], [1, "icon-size-5", "text-rose-600", "dark:text-rose-400"], [1, "rounded-md", "border", "border-rose-200/60", "bg-rose-50", "px-2.5", "py-0.5", "dark:border-rose-800/40", "dark:bg-rose-950/30"], [1, "text-[10px]", "font-semibold", "uppercase", "tracking-wider", "text-rose-600", "dark:text-rose-400"], [1, "absolute", "bottom-0", "left-0", "right-0", "h-1", "rounded-b-2xl", "bg-gradient-to-r", "from-rose-500/20", "to-rose-400/20"], [1, "mb-4", "flex", "flex-wrap", "items-start", "justify-between", "gap-3"], [1, "text-lg", "font-semibold", "text-stone-900", "dark:text-white"], [1, "shrink-0", "text-sm", "font-medium", "text-indigo-600", "underline-offset-4", "hover:underline", "dark:text-indigo-400", 3, "routerLink"], [3, "webhookId", 4, "ngIf"], ["class", "text-sm text-stone-500 dark:text-stone-400", 4, "ngIf"], [3, "webhookId"], [1, "text-sm", "text-stone-500", "dark:text-stone-400"], [1, "flex", "flex-1", "flex-col", "items-center", "justify-center", "py-20"], ["diameter", "48"], [1, "mt-4", "text-sm", "text-stone-500", "dark:text-stone-400"], [1, "flex", "flex-1", "flex-col", "items-center", "justify-center", "rounded-2xl", "border-2", "border-dashed", "border-stone-200", "p-12", "text-center", "dark:border-gray-800"], [1, "mb-6", "flex", "h-20", "w-20", "items-center", "justify-center", "rounded-full", "bg-stone-50", "dark:bg-gray-900"], [1, "icon-size-10", "text-stone-400"], [1, "text-lg", "font-medium", "text-stone-900", "dark:text-white"], [1, "mb-6", "mt-2", "max-w-sm", "text-stone-500", "dark:text-stone-400"], ["mat-flat-button", "", "color", "primary", "type", "button", 1, "rounded-xl", 3, "click"], [1, "mr-2"], [1, "flex", "flex-col", "gap-4"], [1, "overflow-hidden", "rounded-2xl", "border", "border-stone-200/90", "bg-white", "shadow-sm", "dark:border-gray-800", "dark:bg-gray-900"], [1, "w-full"], [1, "bg-stone-50/80", "dark:bg-gray-800/50"], [1, "px-6", "py-3", "text-left", "text-xs", "font-semibold", "uppercase", "tracking-wider", "text-stone-500", "dark:text-stone-400"], [1, "px-6", "py-3", "text-right", "text-xs", "font-semibold", "uppercase", "tracking-wider", "text-stone-500", "dark:text-stone-400"], [1, "divide-y", "divide-stone-100", "dark:divide-gray-800"], ["class", "cursor-pointer transition-colors hover:bg-stone-50 dark:hover:bg-gray-800/30", 3, "click", 4, "ngFor", "ngForOf"], ["class", "flex items-center justify-between gap-4 px-1", 4, "ngIf"], [1, "cursor-pointer", "transition-colors", "hover:bg-stone-50", "dark:hover:bg-gray-800/30", 3, "click"], [1, "px-6", "py-4"], [1, "inline-flex", "items-center", "rounded-full", "px-2.5", "py-0.5", "text-xs", "font-medium", "capitalize", 3, "ngClass"], [1, "w-48", "px-6", "py-4"], ["mode", "determinate", 1, "!h-2", "rounded-full", 3, "value"], [1, "whitespace-nowrap", "text-sm", "text-stone-500"], [1, "flex", "items-center", "gap-1", "text-sm"], [1, "text-green-600"], [1, "text-stone-400"], [1, "text-stone-600", "dark:text-stone-400"], ["class", "ml-1 text-red-500", 4, "ngIf"], ["class", "ml-1 text-amber-600", 4, "ngIf"], [1, "px-6", "py-4", "text-sm", "text-stone-500", "dark:text-stone-400"], [1, "px-6", "py-4", "text-right"], ["mat-icon-button", "", "type", "button", 3, "matTooltip", "click", 4, "ngIf"], ["mat-icon-button", "", "type", "button", 3, "click", "matTooltip"], [1, "icon-size-5"], [1, "ml-1", "text-red-500"], [1, "ml-1", "text-amber-600"], [1, "flex", "items-center", "justify-between", "gap-4", "px-1"], [1, "flex", "items-center", "gap-2"], ["mat-stroked-button", "", "type", "button", 1, "rounded-xl", 3, "click", "disabled"]], template: function BatchDashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "div", 2)(3, "div", 3)(4, "a", 4);
        \u0275\u0275text(5, " Verifik ");
        \u0275\u0275elementEnd();
        \u0275\u0275element(6, "mat-icon", 5);
        \u0275\u0275elementStart(7, "a", 6);
        \u0275\u0275text(8);
        \u0275\u0275pipe(9, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275element(10, "mat-icon", 5);
        \u0275\u0275elementStart(11, "span", 7);
        \u0275\u0275text(12);
        \u0275\u0275pipe(13, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 8)(15, "div", 9)(16, "button", 10);
        \u0275\u0275pipe(17, "transloco");
        \u0275\u0275pipe(18, "transloco");
        \u0275\u0275elementStart(19, "mat-icon");
        \u0275\u0275text(20, "arrow_back");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "div", 9);
        \u0275\u0275template(22, BatchDashboardComponent_span_22_Template, 2, 1, "span", 11);
        \u0275\u0275elementStart(23, "div", 12)(24, "h1", 13);
        \u0275\u0275text(25);
        \u0275\u0275pipe(26, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "p", 14);
        \u0275\u0275text(28);
        \u0275\u0275pipe(29, "transloco");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(30, "button", 15);
        \u0275\u0275listener("click", function BatchDashboardComponent_Template_button_click_30_listener() {
          return ctx.createBatch();
        });
        \u0275\u0275elementStart(31, "mat-icon", 16);
        \u0275\u0275text(32, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(33);
        \u0275\u0275pipe(34, "transloco");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(35, "main", 17)(36, "div", 18);
        \u0275\u0275template(37, BatchDashboardComponent_div_37_Template, 74, 48, "div", 19)(38, BatchDashboardComponent_div_38_Template, 12, 4, "div", 20)(39, BatchDashboardComponent_div_39_Template, 18, 8, "div", 21)(40, BatchDashboardComponent_div_40_Template, 68, 28, "div", 22)(41, BatchDashboardComponent_section_41_Template, 14, 15, "section", 23)(42, BatchDashboardComponent_div_42_Template, 5, 3, "div", 24)(43, BatchDashboardComponent_div_43_Template, 15, 9, "div", 25)(44, BatchDashboardComponent_div_44_Template, 29, 23, "div", 26);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        let tmp_1_0;
        let tmp_5_0;
        let tmp_6_0;
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 16, "smartBatchLanding.title"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(((tmp_1_0 = ctx.configuration()) == null ? null : tmp_1_0.name) || \u0275\u0275pipeBind1(13, 18, "batchDashboard.loading"));
        \u0275\u0275advance(4);
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(17, 20, "batchDashboard.backToSmartBatch"));
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(18, 22, "batchDashboard.backToSmartBatch"));
        \u0275\u0275advance(6);
        \u0275\u0275property("ngIf", ctx.configuration());
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ((tmp_5_0 = ctx.configuration()) == null ? null : tmp_5_0.name) || \u0275\u0275pipeBind1(26, 24, "batchDashboard.loading"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ((tmp_6_0 = ctx.configuration()) == null ? null : tmp_6_0.description) || \u0275\u0275pipeBind1(29, 26, "batchDashboard.batchProcessingDashboard"), " ");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(34, 28, "batchDashboard.createBatch"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", ctx.configuration());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showStepsPanel());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showCostPanel());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.stats() && ctx.stats().totalBatches > 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.webhookUrl());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isLoading());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isLoading() && ctx.batches().length === 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isLoading() && ctx.batches().length > 0);
      }
    }, dependencies: [
      CommonModule,
      NgClass,
      NgForOf,
      NgIf,
      TranslocoModule,
      TranslocoPipe,
      RouterModule,
      RouterLink,
      MatButtonModule,
      MatButton,
      MatIconButton,
      MatIconModule,
      MatIcon,
      MatTooltipModule,
      MatTooltip,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatProgressBarModule,
      MatProgressBar,
      MatSnackBarModule,
      WebhookEventsComponent,
      BatchExecutorControlComponent
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BatchDashboardComponent, [{
    type: Component,
    args: [{ selector: "batch-dashboard", standalone: true, imports: [
      CommonModule,
      TranslocoModule,
      RouterModule,
      MatButtonModule,
      MatIconModule,
      MatTooltipModule,
      MatProgressSpinnerModule,
      MatProgressBarModule,
      MatSnackBarModule,
      WebhookEventsComponent,
      BatchExecutorControlComponent
    ], encapsulation: ViewEncapsulation.None, template: `<div class="flex min-h-screen min-w-0 flex-auto flex-col bg-stone-50 dark:bg-gray-950">\r
    <header\r
        class="border-b border-stone-200/90 bg-white/90 px-5 py-6 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-950/90 md:px-8 md:py-8"\r
    >\r
        <div class="mx-auto flex w-full max-w-7xl flex-col gap-5">\r
            <div\r
                class="flex flex-wrap items-center text-xs font-medium leading-none text-stone-500 dark:text-stone-400"\r
            >\r
                <a\r
                    routerLink="/chat"\r
                    class="cursor-pointer text-stone-700 underline-offset-4 hover:underline dark:text-stone-300"\r
                >\r
                    Verifik\r
                </a>\r
                <mat-icon\r
                    class="icon-size-4 mx-2 text-stone-400"\r
                    svgIcon="heroicons_solid:chevron-right"\r
                ></mat-icon>\r
                <a\r
                    routerLink="/smart-batch/workspace"\r
                    class="cursor-pointer text-stone-700 underline-offset-4 hover:underline dark:text-stone-300"\r
                >\r
                    {{ 'smartBatchLanding.title' | transloco }}\r
                </a>\r
                <mat-icon\r
                    class="icon-size-4 mx-2 text-stone-400"\r
                    svgIcon="heroicons_solid:chevron-right"\r
                ></mat-icon>\r
                <span class="cursor-default text-stone-600 dark:text-stone-300">{{\r
                    configuration()?.name || ('batchDashboard.loading' | transloco)\r
                }}</span>\r
            </div>\r
\r
            <div class="flex flex-wrap items-start justify-between gap-3">\r
                <div class="flex min-w-0 items-start gap-3">\r
                    <button\r
                        mat-icon-button\r
                        type="button"\r
                        routerLink="/smart-batch/workspace"\r
                        [matTooltip]="'batchDashboard.backToSmartBatch' | transloco"\r
                        class="shrink-0 !text-stone-600 dark:!text-stone-300"\r
                        [attr.aria-label]="'batchDashboard.backToSmartBatch' | transloco"\r
                    >\r
                        <mat-icon>arrow_back</mat-icon>\r
                    </button>\r
                    <div class="flex min-w-0 items-start gap-3">\r
                        <span class="shrink-0 text-3xl" *ngIf="configuration()">{{\r
                            getCountryFlag(configuration()!.country)\r
                        }}</span>\r
                        <div class="min-w-0">\r
                            <h1\r
                                class="text-2xl font-semibold tracking-tight text-stone-900 dark:text-white md:text-3xl"\r
                            >\r
                                {{ configuration()?.name || ('batchDashboard.loading' | transloco) }}\r
                            </h1>\r
                            <p class="mt-1 text-sm text-stone-500 dark:text-stone-400">\r
                                {{\r
                                    configuration()?.description\r
                                        || ('batchDashboard.batchProcessingDashboard' | transloco)\r
                                }}\r
                            </p>\r
                        </div>\r
                    </div>\r
                </div>\r
                <button\r
                    mat-flat-button\r
                    color="primary"\r
                    type="button"\r
                    (click)="createBatch()"\r
                    class="shrink-0 rounded-xl !px-6 !py-2"\r
                >\r
                    <mat-icon class="mr-2 icon-size-5">add</mat-icon>\r
                    {{ 'batchDashboard.createBatch' | transloco }}\r
                </button>\r
            </div>\r
        </div>\r
    </header>\r
\r
    <main class="flex flex-auto flex-col px-5 py-8 md:px-8 md:py-10">\r
        <div class="mx-auto flex w-full max-w-7xl flex-col gap-6">\r
            <!-- Summary Cards -->\r
            <div class="grid grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-6" *ngIf="configuration()">\r
                <!-- Steps Count - Clickable -->\r
                <div\r
                    (click)="toggleStepsPanel()"\r
                    class="cursor-pointer rounded-2xl border border-stone-200/90 bg-white p-5 shadow-sm transition-all hover:border-indigo-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-indigo-700"\r
                    [class.ring-2]="showStepsPanel()"\r
                    [class.ring-indigo-500]="showStepsPanel()"\r
                >\r
                    <div class="flex items-center gap-3">\r
                        <div\r
                            class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-100 dark:bg-indigo-900/30"\r
                        >\r
                            <mat-icon class="icon-size-5 text-indigo-600 dark:text-indigo-400"\r
                                >layers</mat-icon\r
                            >\r
                        </div>\r
                        <div class="min-w-0 flex-1">\r
                            <span\r
                                class="block text-xs font-medium uppercase text-stone-500 dark:text-stone-400"\r
                                >{{ 'batchDashboard.steps' | transloco }}</span\r
                            >\r
                            <span class="text-xl font-bold text-stone-900 dark:text-white">{{\r
                                stepsCount()\r
                            }}</span>\r
                        </div>\r
                        <mat-icon class="icon-size-4 shrink-0 text-stone-400">{{\r
                            showStepsPanel() ? 'expand_less' : 'expand_more'\r
                        }}</mat-icon>\r
                    </div>\r
                </div>\r
\r
                <!-- Executor -->\r
                <div\r
                    class="rounded-2xl border border-stone-200/90 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900"\r
                >\r
                    <div class="flex items-center gap-3">\r
                        <div\r
                            class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/30"\r
                        >\r
                            <mat-icon class="icon-size-5 text-blue-600 dark:text-blue-400"\r
                                >bolt</mat-icon\r
                            >\r
                        </div>\r
                        <div class="min-w-0 flex-1">\r
                            <span\r
                                class="block text-xs font-medium uppercase text-stone-500 dark:text-stone-400"\r
                                >{{ 'batchDashboard.executor' | transloco }}</span\r
                            >\r
                            <div class="mt-1">\r
                                <batch-executor-control\r
                                    [executor]="configuration()!.executor"\r
                                    [saving]="savingExecutor()"\r
                                    [showBadge]="false"\r
                                    [compact]="true"\r
                                    hintKey="batchDashboard.executorHint"\r
                                    (executorChange)="setConfigExecutor($event)"\r
                                />\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>\r
\r
                <!-- Strategy -->\r
                <div\r
                    class="rounded-2xl border border-stone-200/90 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900"\r
                >\r
                    <div class="flex items-center gap-3">\r
                        <div\r
                            class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900/30"\r
                        >\r
                            <mat-icon class="icon-size-5 text-purple-600 dark:text-purple-400"\r
                                >account_tree</mat-icon\r
                            >\r
                        </div>\r
                        <div class="min-w-0">\r
                            <span\r
                                class="block text-xs font-medium uppercase text-stone-500 dark:text-stone-400"\r
                                >{{ 'batchDashboard.strategy' | transloco }}</span\r
                            >\r
                            <span\r
                                class="text-lg font-semibold capitalize text-stone-900 dark:text-white"\r
                            >\r
                                {{ configuration()?.mergeStrategy?.replace('-', ' ') }}\r
                            </span>\r
                        </div>\r
                    </div>\r
                </div>\r
\r
                <!-- Format -->\r
                <div\r
                    class="rounded-2xl border border-stone-200/90 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900"\r
                >\r
                    <div class="flex items-center gap-3">\r
                        <div\r
                            class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-100 dark:bg-teal-900/30"\r
                        >\r
                            <mat-icon class="icon-size-5 text-teal-600 dark:text-teal-400"\r
                                >swap_horiz</mat-icon\r
                            >\r
                        </div>\r
                        <div class="min-w-0">\r
                            <span\r
                                class="block text-xs font-medium uppercase text-stone-500 dark:text-stone-400"\r
                                >{{ 'batchDashboard.format' | transloco }}</span\r
                            >\r
                            <span class="text-lg font-semibold uppercase text-stone-900 dark:text-white">\r
                                {{ configuration()?.inputFormat }} \u2192 {{ configuration()?.outputFormat }}\r
                            </span>\r
                        </div>\r
                    </div>\r
                </div>\r
\r
                <!-- Cost per Row - Clickable -->\r
                <div\r
                    (click)="toggleCostPanel()"\r
                    class="cursor-pointer rounded-2xl border border-stone-200/90 bg-white p-5 shadow-sm transition-all hover:border-green-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-green-700"\r
                    [class.ring-2]="showCostPanel()"\r
                    [class.ring-green-500]="showCostPanel()"\r
                >\r
                    <div class="flex items-center gap-3">\r
                        <div\r
                            class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900/30"\r
                        >\r
                            <mat-icon class="icon-size-5 text-green-600 dark:text-green-400"\r
                                >attach_money</mat-icon\r
                            >\r
                        </div>\r
                        <div class="min-w-0 flex-1">\r
                            <span\r
                                class="block text-xs font-medium uppercase text-stone-500 dark:text-stone-400"\r
                                >{{ 'batchDashboard.costPerRow' | transloco }}</span\r
                            >\r
                            <span class="text-xl font-bold text-green-600 dark:text-green-400">\r
                                \${{ estimatedCostPerRow().toFixed(2) }}\r
                            </span>\r
                        </div>\r
                        <mat-icon class="icon-size-4 shrink-0 text-stone-400">{{\r
                            showCostPanel() ? 'expand_less' : 'expand_more'\r
                        }}</mat-icon>\r
                    </div>\r
                </div>\r
\r
                <div\r
                    (click)="openLinkedWebhook()"\r
                    class="rounded-2xl border border-stone-200/90 bg-white p-5 shadow-sm transition-all hover:border-sky-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-sky-700"\r
                    [class.cursor-pointer]="canOpenWebhook()"\r
                    [attr.role]="canOpenWebhook() ? 'link' : null"\r
                    [attr.tabindex]="canOpenWebhook() ? 0 : null"\r
                    (keydown.enter)="openLinkedWebhook()"\r
                >\r
                    <div class="flex items-center gap-3">\r
                        <div\r
                            class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sky-100 dark:bg-sky-900/30"\r
                        >\r
                            <mat-icon class="icon-size-5 text-sky-600 dark:text-sky-400">link</mat-icon>\r
                        </div>\r
                        <div class="min-w-0 flex-1">\r
                            <span\r
                                class="block text-xs font-medium uppercase text-stone-500 dark:text-stone-400"\r
                                >{{ 'batchDashboard.webhook' | transloco }}</span\r
                            >\r
                            <span\r
                                class="block truncate text-lg font-semibold text-stone-900 dark:text-white"\r
                                [matTooltip]="webhookLabel() || ('batchDashboard.webhookNone' | transloco)"\r
                            >\r
                                {{ webhookLabel() || ('batchDashboard.webhookNone' | transloco) }}\r
                            </span>\r
                        </div>\r
                        <mat-icon\r
                            *ngIf="canOpenWebhook()"\r
                            class="icon-size-4 shrink-0 text-stone-400"\r
                            >chevron_right</mat-icon\r
                        >\r
                    </div>\r
                </div>\r
            </div>\r
\r
            <!-- Steps Panel (expanded) -->\r
            <div\r
                *ngIf="showStepsPanel()"\r
                class="animate-fade-in rounded-2xl border border-indigo-200/90 bg-white p-5 shadow-sm dark:border-indigo-900/50 dark:bg-gray-900"\r
            >\r
                <div class="mb-4 flex items-center justify-between">\r
                    <h3\r
                        class="flex items-center gap-2 text-lg font-semibold text-stone-900 dark:text-white"\r
                    >\r
                        <mat-icon class="text-indigo-600 dark:text-indigo-400">layers</mat-icon>\r
                        {{ 'batchDashboard.processingSteps' | transloco }}\r
                    </h3>\r
                    <button\r
                        mat-icon-button\r
                        type="button"\r
                        class="!text-stone-600 dark:!text-stone-400"\r
                        (click)="toggleStepsPanel()"\r
                    >\r
                        <mat-icon>close</mat-icon>\r
                    </button>\r
                </div>\r
                <div class="space-y-3">\r
                    <div\r
                        *ngFor="let step of stepsDetails(); let idx = index"\r
                        class="flex items-center gap-4 rounded-xl bg-stone-50 p-3 dark:bg-gray-800/50"\r
                    >\r
                        <div\r
                            class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-sm font-bold text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-400"\r
                        >\r
                            {{ step.sequence }}\r
                        </div>\r
                        <div class="min-w-0 flex-1">\r
                            <p class="font-medium text-stone-900 dark:text-white">{{ step.name }}</p>\r
                            <p\r
                                *ngIf="step.url"\r
                                class="font-mono text-sm text-stone-500 dark:text-stone-400"\r
                            >\r
                                {{ step.url }}\r
                            </p>\r
                        </div>\r
                        <div class="shrink-0 text-right">\r
                            <span class="text-sm font-medium text-green-600 dark:text-green-400"\r
                                >\${{ step.price.toFixed(2) }}</span\r
                            >\r
                        </div>\r
                        <span\r
                            *ngIf="!step.enabled"\r
                            class="shrink-0 rounded bg-yellow-100 px-2 py-0.5 text-xs text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"\r
                            >{{ 'batchDashboard.disabled' | transloco }}</span\r
                        >\r
                    </div>\r
                </div>\r
            </div>\r
\r
            <!-- Cost Breakdown Panel (expanded) -->\r
            <div\r
                *ngIf="showCostPanel()"\r
                class="animate-fade-in rounded-2xl border border-green-200/90 bg-white p-5 shadow-sm dark:border-green-900/50 dark:bg-gray-900"\r
            >\r
                <div class="mb-4 flex items-center justify-between">\r
                    <h3\r
                        class="flex items-center gap-2 text-lg font-semibold text-stone-900 dark:text-white"\r
                    >\r
                        <mat-icon class="text-green-600 dark:text-green-400">attach_money</mat-icon>\r
                        {{ 'batchDashboard.costBreakdown' | transloco }}\r
                    </h3>\r
                    <button\r
                        mat-icon-button\r
                        type="button"\r
                        class="!text-stone-600 dark:!text-stone-400"\r
                        (click)="toggleCostPanel()"\r
                    >\r
                        <mat-icon>close</mat-icon>\r
                    </button>\r
                </div>\r
                <div class="space-y-2">\r
                    <div\r
                        *ngFor="let step of stepsDetails()"\r
                        class="flex items-center justify-between border-b border-stone-100 py-2 last:border-0 dark:border-gray-800"\r
                    >\r
                        <div class="flex items-center gap-3">\r
                            <span\r
                                class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-stone-100 text-xs font-medium text-stone-600 dark:bg-gray-800 dark:text-stone-400"\r
                            >\r
                                {{ step.sequence }}\r
                            </span>\r
                            <span class="text-stone-700 dark:text-stone-300">{{ step.name }}</span>\r
                        </div>\r
                        <span class="font-medium text-stone-900 dark:text-white"\r
                            >\${{ step.price.toFixed(2) }}</span\r
                        >\r
                    </div>\r
                </div>\r
                <div\r
                    class="mt-4 flex items-center justify-between border-t border-stone-200 pt-4 dark:border-gray-700"\r
                >\r
                    <span class="font-semibold text-stone-900 dark:text-white">{{\r
                        'batchDashboard.totalPerRow' | transloco\r
                    }}</span>\r
                    <span class="text-2xl font-bold text-green-600 dark:text-green-400"\r
                        >\${{ estimatedCostPerRow().toFixed(2) }}</span\r
                    >\r
                </div>\r
            </div>\r
\r
            <!-- Stats Row -->\r
            <div\r
                *ngIf="stats() && stats()!.totalBatches > 0"\r
                class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4"\r
            >\r
                <!-- Total Batches -->\r
                <div\r
                    class="group relative rounded-2xl border border-stone-200/90 bg-white p-6 shadow-sm transition-all duration-200 hover:border-stone-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-gray-700"\r
                >\r
                    <div class="mb-4 flex items-start justify-between">\r
                        <div class="flex items-center gap-3">\r
                            <div\r
                                class="flex h-11 w-11 items-center justify-center rounded-xl border border-stone-200/80 bg-gradient-to-br from-stone-50 to-stone-100 dark:border-gray-700/60 dark:from-gray-800 dark:to-gray-900"\r
                            >\r
                                <mat-icon class="icon-size-5 text-stone-600 dark:text-stone-400"\r
                                    >inbox</mat-icon\r
                                >\r
                            </div>\r
                        </div>\r
                        <div\r
                            class="rounded-md border border-stone-200/80 bg-stone-50 px-2.5 py-0.5 dark:border-gray-700/60 dark:bg-gray-800/50"\r
                        >\r
                            <span\r
                                class="text-[10px] font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400"\r
                                >{{ 'batchDashboard.total' | transloco }}</span\r
                            >\r
                        </div>\r
                    </div>\r
                    <div class="space-y-1">\r
                        <p\r
                            class="text-[13px] font-medium tracking-wide text-stone-500 dark:text-stone-400"\r
                        >\r
                            {{ 'batchDashboard.totalBatches' | transloco }}\r
                        </p>\r
                        <p class="text-3xl font-bold tracking-tight text-stone-900 dark:text-white">\r
                            {{ stats()!.totalBatches }}\r
                        </p>\r
                    </div>\r
                </div>\r
\r
                <!-- Completed Rows -->\r
                <div\r
                    class="group relative rounded-2xl border border-emerald-200/60 bg-white p-6 shadow-sm transition-all duration-200 hover:border-emerald-300/80 hover:shadow-md dark:border-emerald-900/40 dark:bg-gray-900 dark:hover:border-emerald-800/60"\r
                >\r
                    <div class="mb-4 flex items-start justify-between">\r
                        <div class="flex items-center gap-3">\r
                            <div\r
                                class="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-200/60 bg-gradient-to-br from-emerald-50 to-emerald-100/80 dark:border-emerald-800/60 dark:from-emerald-950/50 dark:to-emerald-900/30"\r
                            >\r
                                <mat-icon class="icon-size-5 text-emerald-600 dark:text-emerald-400"\r
                                    >check_circle</mat-icon\r
                                >\r
                            </div>\r
                        </div>\r
                        <div\r
                            class="rounded-md border border-emerald-200/60 bg-emerald-50 px-2.5 py-0.5 dark:border-emerald-800/40 dark:bg-emerald-950/30"\r
                        >\r
                            <span\r
                                class="text-[10px] font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400"\r
                                >{{ 'batchDashboard.success' | transloco }}</span\r
                            >\r
                        </div>\r
                    </div>\r
                    <div class="space-y-1">\r
                        <p\r
                            class="text-[13px] font-medium tracking-wide text-stone-500 dark:text-stone-400"\r
                        >\r
                            {{ 'batchDashboard.completedRows' | transloco }}\r
                        </p>\r
                        <p class="text-3xl font-bold tracking-tight text-stone-900 dark:text-white">\r
                            {{ stats()!.completedRows }}\r
                        </p>\r
                    </div>\r
                    <div\r
                        class="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl bg-gradient-to-r from-emerald-500/20 to-emerald-400/20"\r
                    ></div>\r
                </div>\r
\r
                <!-- Pending Rows -->\r
                <div\r
                    class="group relative rounded-2xl border border-amber-200/60 bg-white p-6 shadow-sm transition-all duration-200 hover:border-amber-300/80 hover:shadow-md dark:border-amber-900/40 dark:bg-gray-900 dark:hover:border-amber-800/60"\r
                >\r
                    <div class="mb-4 flex items-start justify-between">\r
                        <div class="flex items-center gap-3">\r
                            <div\r
                                class="flex h-11 w-11 items-center justify-center rounded-xl border border-amber-200/60 bg-gradient-to-br from-amber-50 to-amber-100/80 dark:border-amber-800/60 dark:from-amber-950/50 dark:to-amber-900/30"\r
                            >\r
                                <mat-icon class="icon-size-5 text-amber-600 dark:text-amber-400"\r
                                    >schedule</mat-icon\r
                                >\r
                            </div>\r
                        </div>\r
                        <div\r
                            class="rounded-md border border-amber-200/60 bg-amber-50 px-2.5 py-0.5 dark:border-amber-800/40 dark:bg-amber-950/30"\r
                        >\r
                            <span\r
                                class="text-[10px] font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400"\r
                                >{{ 'batchDashboard.queue' | transloco }}</span\r
                            >\r
                        </div>\r
                    </div>\r
                    <div class="space-y-1">\r
                        <p\r
                            class="text-[13px] font-medium tracking-wide text-stone-500 dark:text-stone-400"\r
                        >\r
                            {{ 'batchDashboard.pendingRows' | transloco }}\r
                        </p>\r
                        <p class="text-3xl font-bold tracking-tight text-stone-900 dark:text-white">\r
                            {{ stats()!.pendingRows }}\r
                        </p>\r
                    </div>\r
                    <div\r
                        class="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl bg-gradient-to-r from-amber-500/20 to-amber-400/20"\r
                    ></div>\r
                </div>\r
\r
                <!-- Failed Rows -->\r
                <div\r
                    class="group relative rounded-2xl border border-rose-200/60 bg-white p-6 shadow-sm transition-all duration-200 hover:border-rose-300/80 hover:shadow-md dark:border-rose-900/40 dark:bg-gray-900 dark:hover:border-rose-800/60"\r
                >\r
                    <div class="mb-4 flex items-start justify-between">\r
                        <div class="flex items-center gap-3">\r
                            <div\r
                                class="flex h-11 w-11 items-center justify-center rounded-xl border border-rose-200/60 bg-gradient-to-br from-rose-50 to-rose-100/80 dark:border-rose-800/60 dark:from-rose-950/50 dark:to-rose-900/30"\r
                            >\r
                                <mat-icon class="icon-size-5 text-rose-600 dark:text-rose-400"\r
                                    >error_outline</mat-icon\r
                                >\r
                            </div>\r
                        </div>\r
                        <div\r
                            class="rounded-md border border-rose-200/60 bg-rose-50 px-2.5 py-0.5 dark:border-rose-800/40 dark:bg-rose-950/30"\r
                        >\r
                            <span\r
                                class="text-[10px] font-semibold uppercase tracking-wider text-rose-600 dark:text-rose-400"\r
                                >{{ 'batchDashboard.error' | transloco }}</span\r
                            >\r
                        </div>\r
                    </div>\r
                    <div class="space-y-1">\r
                        <p\r
                            class="text-[13px] font-medium tracking-wide text-stone-500 dark:text-stone-400"\r
                        >\r
                            {{ 'batchDashboard.failedRows' | transloco }}\r
                        </p>\r
                        <p class="text-3xl font-bold tracking-tight text-stone-900 dark:text-white">\r
                            {{ stats()!.failedRows }}\r
                        </p>\r
                    </div>\r
                    <div\r
                        class="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl bg-gradient-to-r from-rose-500/20 to-rose-400/20"\r
                    ></div>\r
                </div>\r
            </div>\r
\r
            <section\r
                *ngIf="webhookUrl()"\r
                class="rounded-2xl border border-stone-200/90 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900"\r
            >\r
                <div class="mb-4 flex flex-wrap items-start justify-between gap-3">\r
                    <div class="min-w-0">\r
                        <h3 class="text-lg font-semibold text-stone-900 dark:text-white">\r
                            {{ 'batchDashboard.webhookEvents' | transloco }}\r
                        </h3>\r
                        <p class="mt-1 text-sm text-stone-500 dark:text-stone-400">\r
                            {{ 'batchDashboard.webhookEventsHint' | transloco }}\r
                        </p>\r
                    </div>\r
                    <a\r
                        [routerLink]="webhookId() ? ['/smart-monitor/webhooks', webhookId()] : ['/smart-monitor/webhooks']"\r
                        class="shrink-0 text-sm font-medium text-indigo-600 underline-offset-4 hover:underline dark:text-indigo-400"\r
                    >\r
                        {{ 'batchDashboard.openSmartMonitorWebhooks' | transloco }}\r
                    </a>\r
                </div>\r
                <webhook-events *ngIf="webhookId()" [webhookId]="webhookId()!"></webhook-events>\r
                <p\r
                    *ngIf="!webhookId()"\r
                    class="text-sm text-stone-500 dark:text-stone-400"\r
                >\r
                    {{ 'batchDashboard.webhookEventsEmpty' | transloco }}\r
                </p>\r
            </section>\r
\r
            <!-- Loading State -->\r
            <div *ngIf="isLoading()" class="flex flex-1 flex-col items-center justify-center py-20">\r
                <mat-spinner diameter="48"></mat-spinner>\r
                <p class="mt-4 text-sm text-stone-500 dark:text-stone-400">\r
                    {{ 'batchDashboard.loadingBatches' | transloco }}\r
                </p>\r
            </div>\r
\r
            <!-- Empty State -->\r
            <div\r
                *ngIf="!isLoading() && batches().length === 0"\r
                class="flex flex-1 flex-col items-center justify-center rounded-2xl border-2 border-dashed border-stone-200 p-12 text-center dark:border-gray-800"\r
            >\r
                <div\r
                    class="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-stone-50 dark:bg-gray-900"\r
                >\r
                    <mat-icon class="icon-size-10 text-stone-400">inbox</mat-icon>\r
                </div>\r
                <h3 class="text-lg font-medium text-stone-900 dark:text-white">\r
                    {{ 'batchDashboard.noBatchesYet' | transloco }}\r
                </h3>\r
                <p class="mb-6 mt-2 max-w-sm text-stone-500 dark:text-stone-400">\r
                    {{ 'batchDashboard.createFirstBatchDescription' | transloco }}\r
                </p>\r
                <button mat-flat-button color="primary" type="button" class="rounded-xl" (click)="createBatch()">\r
                    <mat-icon class="mr-2">add</mat-icon>\r
                    {{ 'batchDashboard.createFirstBatch' | transloco }}\r
                </button>\r
            </div>\r
\r
            <!-- Batches List -->\r
            <div *ngIf="!isLoading() && batches().length > 0" class="flex flex-col gap-4">\r
                <h2 class="text-lg font-semibold text-stone-900 dark:text-white">\r
                    {{ 'batchDashboard.batches' | transloco }}\r
                </h2>\r
\r
                <div\r
                    class="overflow-hidden rounded-2xl border border-stone-200/90 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900"\r
                >\r
                    <table class="w-full">\r
                        <thead class="bg-stone-50/80 dark:bg-gray-800/50">\r
                            <tr>\r
                                <th\r
                                    class="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400"\r
                                >\r
                                    {{ 'batchDashboard.name' | transloco }}\r
                                </th>\r
                                <th\r
                                    class="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400"\r
                                >\r
                                    {{ 'batchDashboard.status' | transloco }}\r
                                </th>\r
                                <th\r
                                    class="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400"\r
                                >\r
                                    {{ 'batchDashboard.progress' | transloco }}\r
                                </th>\r
                                <th\r
                                    class="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400"\r
                                >\r
                                    {{ 'batchDashboard.rows' | transloco }}\r
                                </th>\r
                                <th\r
                                    class="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400"\r
                                >\r
                                    {{ 'batchDashboard.created' | transloco }}\r
                                </th>\r
                                <th\r
                                    class="px-6 py-3 text-right text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400"\r
                                >\r
                                    {{ 'batchDashboard.actions' | transloco }}\r
                                </th>\r
                            </tr>\r
                        </thead>\r
                        <tbody class="divide-y divide-stone-100 dark:divide-gray-800">\r
                            <tr\r
                                *ngFor="let batch of batches()"\r
                                class="cursor-pointer transition-colors hover:bg-stone-50 dark:hover:bg-gray-800/30"\r
                                (click)="viewBatch(batch._id!)"\r
                            >\r
                                <td class="px-6 py-4">\r
                                    <span class="font-medium text-stone-900 dark:text-white">{{\r
                                        batch.name\r
                                    }}</span>\r
                                </td>\r
                                <td class="px-6 py-4">\r
                                    <span\r
                                        class="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium capitalize"\r
                                        [ngClass]="getStatusColor(batch.status)"\r
                                    >\r
                                        {{ ('batchProcessing.' + batch.status) | transloco }}\r
                                    </span>\r
                                </td>\r
                                <td class="w-48 px-6 py-4">\r
                                    <div class="flex items-center gap-3">\r
                                        <mat-progress-bar\r
                                            mode="determinate"\r
                                            [value]="getBatchProgress(batch)"\r
                                            class="!h-2 rounded-full"\r
                                        ></mat-progress-bar>\r
                                        <span class="whitespace-nowrap text-sm text-stone-500">\r
                                            {{ getBatchProgress(batch).toFixed(0) }}%\r
                                        </span>\r
                                    </div>\r
                                </td>\r
                                <td class="px-6 py-4">\r
                                    <div class="flex items-center gap-1 text-sm">\r
                                        <span class="text-green-600">{{ batch.completedRows }}</span>\r
                                        <span class="text-stone-400">/</span>\r
                                        <span class="text-stone-600 dark:text-stone-400">{{\r
                                            batch.totalRows\r
                                        }}</span>\r
                                        <span *ngIf="batch.failedRows > 0" class="ml-1 text-red-500"\r
                                            >({{\r
                                                'batchDashboard.failedCount'\r
                                                    | transloco: { count: batch.failedRows }\r
                                            }})</span\r
                                        >\r
                                        <span\r
                                            *ngIf="(batch.partialRows || 0) > 0"\r
                                            class="ml-1 text-amber-600"\r
                                            >({{\r
                                                'batchDashboard.partialCount'\r
                                                    | transloco: { count: batch.partialRows || 0 }\r
                                            }})</span\r
                                        >\r
                                    </div>\r
                                </td>\r
                                <td class="px-6 py-4 text-sm text-stone-500 dark:text-stone-400">\r
                                    {{ formatDate(batch.createdAt) }}\r
                                </td>\r
                                <td class="px-6 py-4 text-right">\r
                                    <button\r
                                        *ngIf="canAddInputs(batch)"\r
                                        mat-icon-button\r
                                        type="button"\r
                                        [matTooltip]="'batchDashboard.addInputs' | transloco"\r
                                        (click)="addInputs(batch._id!); $event.stopPropagation()"\r
                                    >\r
                                        <mat-icon class="icon-size-5">playlist_add</mat-icon>\r
                                    </button>\r
                                    <button\r
                                        mat-icon-button\r
                                        type="button"\r
                                        [matTooltip]="'batchDashboard.viewDetails' | transloco"\r
                                        (click)="viewBatch(batch._id!); $event.stopPropagation()"\r
                                    >\r
                                        <mat-icon class="icon-size-5">visibility</mat-icon>\r
                                    </button>\r
                                </td>\r
                            </tr>\r
                        </tbody>\r
                    </table>\r
                </div>\r
\r
                <div\r
                    *ngIf="totalPages() > 1"\r
                    class="flex items-center justify-between gap-4 px-1"\r
                >\r
                    <p class="text-sm text-stone-500 dark:text-stone-400">\r
                        {{\r
                            'batchDashboard.paginationRange'\r
                                | transloco\r
                                    : {\r
                                          start: rangeStart(),\r
                                          end: rangeEnd(),\r
                                          total: totalBatches()\r
                                      }\r
                        }}\r
                    </p>\r
\r
                    <div class="flex items-center gap-2">\r
                        <button\r
                            mat-stroked-button\r
                            type="button"\r
                            class="rounded-xl"\r
                            [disabled]="!canGoPrevious()"\r
                            (click)="previousPage()"\r
                        >\r
                            <mat-icon class="icon-size-5">chevron_left</mat-icon>\r
                            {{ 'batchDashboard.previousPage' | transloco }}\r
                        </button>\r
                        <span class="text-sm text-stone-500 dark:text-stone-400">\r
                            {{\r
                                'batchDashboard.pageOf'\r
                                    | transloco: { page: page(), pages: totalPages() }\r
                            }}\r
                        </span>\r
                        <button\r
                            mat-stroked-button\r
                            type="button"\r
                            class="rounded-xl"\r
                            [disabled]="!canGoNext()"\r
                            (click)="nextPage()"\r
                        >\r
                            {{ 'batchDashboard.nextPage' | transloco }}\r
                            <mat-icon class="icon-size-5">chevron_right</mat-icon>\r
                        </button>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
    </main>\r
</div>\r
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BatchDashboardComponent, { className: "BatchDashboardComponent", filePath: "src/app/modules/smart-batch/dashboard/batch-dashboard.component.ts", lineNumber: 44 });
})();
export {
  BatchDashboardComponent
};
//# sourceMappingURL=chunk-HUDSRQFD.js.map
