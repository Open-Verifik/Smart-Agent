import {
  SmartBatchService
} from "./chunk-OZON7ZNM.js";
import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-O7Z3HN3Z.js";
import "./chunk-H3UX3NVF.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-FD5UKZMK.js";
import {
  MatDialog,
  MatDialogModule
} from "./chunk-P2CAABEU.js";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-NLVEQCVI.js";
import "./chunk-OIBNGD5S.js";
import {
  TranslocoModule,
  TranslocoPipe
} from "./chunk-KU43NSH4.js";
import "./chunk-VK5CCBZ3.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-WH2N6KB4.js";
import "./chunk-BIHX2IQ4.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-HZQU4G6R.js";
import {
  CommonModule,
  Component,
  MatButton,
  MatButtonModule,
  MatIconButton,
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
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-LLRZIRCV.js";
import "./chunk-KTESVR3Q.js";

// src/app/modules/smart-batch/dashboard/batch-dashboard.component.ts
var _c0 = (a0) => ({ count: a0 });
function BatchDashboardComponent_span_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.getCountryFlag(ctx_r0.configuration().country));
  }
}
function BatchDashboardComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 28);
    \u0275\u0275listener("click", function BatchDashboardComponent_div_37_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.toggleStepsPanel());
    });
    \u0275\u0275elementStart(2, "div", 29)(3, "div", 30)(4, "mat-icon", 31);
    \u0275\u0275text(5, "layers");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 32)(7, "span", 33);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 34);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "mat-icon", 35);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 36)(15, "div", 29)(16, "div", 37)(17, "mat-icon", 38);
    \u0275\u0275text(18, "account_tree");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 12)(20, "span", 33);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 39);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(25, "div", 36)(26, "div", 29)(27, "div", 40)(28, "mat-icon", 41);
    \u0275\u0275text(29, "swap_horiz");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 12)(31, "span", 33);
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "span", 42);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(36, "div", 43);
    \u0275\u0275listener("click", function BatchDashboardComponent_div_37_Template_div_click_36_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.toggleCostPanel());
    });
    \u0275\u0275elementStart(37, "div", 29)(38, "div", 44)(39, "mat-icon", 45);
    \u0275\u0275text(40, "attach_money");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 32)(42, "span", 33);
    \u0275\u0275text(43);
    \u0275\u0275pipe(44, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "span", 46);
    \u0275\u0275text(46);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "mat-icon", 35);
    \u0275\u0275text(48);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_7_0;
    let tmp_9_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("ring-2", ctx_r0.showStepsPanel())("ring-indigo-500", ctx_r0.showStepsPanel());
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 19, "batchDashboard.steps"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.stepsCount());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.showStepsPanel() ? "expand_less" : "expand_more");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 21, "batchDashboard.strategy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (tmp_7_0 = ctx_r0.configuration()) == null ? null : tmp_7_0.mergeStrategy == null ? null : tmp_7_0.mergeStrategy.replace("-", " "), " ");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(33, 23, "batchDashboard.format"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", (tmp_9_0 = ctx_r0.configuration()) == null ? null : tmp_9_0.inputFormat, " \u2192 ", (tmp_9_0 = ctx_r0.configuration()) == null ? null : tmp_9_0.outputFormat, " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("ring-2", ctx_r0.showCostPanel())("ring-green-500", ctx_r0.showCostPanel());
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(44, 25, "batchDashboard.costPerRow"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" $", ctx_r0.estimatedCostPerRow().toFixed(2), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.showCostPanel() ? "expand_less" : "expand_more");
  }
}
function BatchDashboardComponent_div_38_div_11_p_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 61);
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
    \u0275\u0275elementStart(0, "span", 62);
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
    \u0275\u0275elementStart(0, "div", 54)(1, "div", 55);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 32)(4, "p", 56);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, BatchDashboardComponent_div_38_div_11_p_6_Template, 2, 1, "p", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 58)(8, "span", 59);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(10, BatchDashboardComponent_div_38_div_11_span_10_Template, 3, 3, "span", 60);
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
    \u0275\u0275elementStart(0, "div", 47)(1, "div", 48)(2, "h3", 49)(3, "mat-icon", 50);
    \u0275\u0275text(4, "layers");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 51);
    \u0275\u0275listener("click", function BatchDashboardComponent_div_38_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.toggleStepsPanel());
    });
    \u0275\u0275elementStart(8, "mat-icon");
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 52);
    \u0275\u0275template(11, BatchDashboardComponent_div_38_div_11_Template, 11, 5, "div", 53);
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
    \u0275\u0275elementStart(0, "div", 70)(1, "div", 29)(2, "span", 71);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 72);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "span", 56);
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
    \u0275\u0275elementStart(0, "div", 63)(1, "div", 48)(2, "h3", 49)(3, "mat-icon", 64);
    \u0275\u0275text(4, "attach_money");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 51);
    \u0275\u0275listener("click", function BatchDashboardComponent_div_39_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.toggleCostPanel());
    });
    \u0275\u0275elementStart(8, "mat-icon");
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 65);
    \u0275\u0275template(11, BatchDashboardComponent_div_39_div_11_Template, 8, 3, "div", 66);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 67)(13, "span", 68);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 69);
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
    \u0275\u0275elementStart(0, "div", 73)(1, "div", 74)(2, "div", 75)(3, "div", 29)(4, "div", 76)(5, "mat-icon", 77);
    \u0275\u0275text(6, "inbox");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 78)(8, "span", 79);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 80)(12, "p", 81);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p", 82);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 83)(18, "div", 75)(19, "div", 29)(20, "div", 84)(21, "mat-icon", 85);
    \u0275\u0275text(22, "check_circle");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 86)(24, "span", 87);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 80)(28, "p", 81);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "p", 82);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(33, "div", 88);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 89)(35, "div", 75)(36, "div", 29)(37, "div", 90)(38, "mat-icon", 91);
    \u0275\u0275text(39, "schedule");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(40, "div", 92)(41, "span", 93);
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(44, "div", 80)(45, "p", 81);
    \u0275\u0275text(46);
    \u0275\u0275pipe(47, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "p", 82);
    \u0275\u0275text(49);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(50, "div", 94);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "div", 95)(52, "div", 75)(53, "div", 29)(54, "div", 96)(55, "mat-icon", 97);
    \u0275\u0275text(56, "error_outline");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(57, "div", 98)(58, "span", 99);
    \u0275\u0275text(59);
    \u0275\u0275pipe(60, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(61, "div", 80)(62, "p", 81);
    \u0275\u0275text(63);
    \u0275\u0275pipe(64, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "p", 82);
    \u0275\u0275text(66);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(67, "div", 100);
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
function BatchDashboardComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 101);
    \u0275\u0275element(1, "mat-spinner", 102);
    \u0275\u0275elementStart(2, "p", 103);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "batchDashboard.loadingBatches"), " ");
  }
}
function BatchDashboardComponent_div_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 104)(1, "div", 105)(2, "mat-icon", 106);
    \u0275\u0275text(3, "inbox");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "h3", 107);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 108);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 109);
    \u0275\u0275listener("click", function BatchDashboardComponent_div_42_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.createBatch());
    });
    \u0275\u0275elementStart(11, "mat-icon", 110);
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
function BatchDashboardComponent_div_43_tr_27_span_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 136);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const batch_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(", \u0275\u0275pipeBind2(2, 1, "batchDashboard.failedCount", \u0275\u0275pureFunction1(4, _c0, batch_r9.failedRows)), ")");
  }
}
function BatchDashboardComponent_div_43_tr_27_span_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 137);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const batch_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(", \u0275\u0275pipeBind2(2, 1, "batchDashboard.partialCount", \u0275\u0275pureFunction1(4, _c0, batch_r9.partialRows || 0)), ")");
  }
}
function BatchDashboardComponent_div_43_tr_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 120);
    \u0275\u0275listener("click", function BatchDashboardComponent_div_43_tr_27_Template_tr_click_0_listener() {
      const batch_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.viewBatch(batch_r9._id));
    });
    \u0275\u0275elementStart(1, "td", 121)(2, "span", 56);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 121)(5, "span", 122);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td", 123)(9, "div", 29);
    \u0275\u0275element(10, "mat-progress-bar", 124);
    \u0275\u0275elementStart(11, "span", 125);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "td", 121)(14, "div", 126)(15, "span", 127);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 128);
    \u0275\u0275text(18, "/");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 129);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, BatchDashboardComponent_div_43_tr_27_span_21_Template, 3, 6, "span", 130)(22, BatchDashboardComponent_div_43_tr_27_span_22_Template, 3, 6, "span", 131);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "td", 132);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "td", 133)(26, "button", 134);
    \u0275\u0275pipe(27, "transloco");
    \u0275\u0275listener("click", function BatchDashboardComponent_div_43_tr_27_Template_button_click_26_listener($event) {
      const batch_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      ctx_r0.viewBatch(batch_r9._id);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(28, "mat-icon", 135);
    \u0275\u0275text(29, "visibility");
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
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 11, "batchProcessing." + batch_r9.status), " ");
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
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(27, 13, "batchDashboard.viewDetails"));
  }
}
function BatchDashboardComponent_div_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 111)(1, "h2", 112);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 113)(5, "table", 114)(6, "thead", 115)(7, "tr")(8, "th", 116);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 116);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 116);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th", 116);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th", 116);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th", 117);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "tbody", 118);
    \u0275\u0275template(27, BatchDashboardComponent_div_43_tr_27_Template, 30, 15, "tr", 119);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 8, "batchDashboard.batches"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 10, "batchDashboard.name"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 12, "batchDashboard.status"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 14, "batchDashboard.progress"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 16, "batchDashboard.rows"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 18, "batchDashboard.created"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(25, 20, "batchDashboard.actions"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r0.batches());
  }
}
var BatchDashboardComponent = class _BatchDashboardComponent {
  constructor() {
    this._smartBatchService = inject(SmartBatchService);
    this._router = inject(Router);
    this._route = inject(ActivatedRoute);
    this._dialog = inject(MatDialog);
    this.configId = signal(null);
    this.configuration = signal(null);
    this.batches = signal([]);
    this.stats = signal(null);
    this.isLoading = signal(true);
    this.showStepsPanel = signal(false);
    this.showCostPanel = signal(false);
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
      this._router.navigate(["/smart-batch"]);
    }
  }
  loadData(configId) {
    this.isLoading.set(true);
    this._smartBatchService.getConfiguration(configId).subscribe({
      next: (res) => {
        this.configuration.set(res.data);
      },
      error: () => {
        this._router.navigate(["/smart-batch"]);
      }
    });
    this._smartBatchService.getSmartBatches(configId).subscribe({
      next: (res) => {
        this.batches.set(res.data || []);
        this.isLoading.set(false);
      },
      error: () => {
        this.isLoading.set(false);
      }
    });
    this._smartBatchService.getSmartBatchStats(configId).subscribe({
      next: (res) => {
        this.stats.set(res.data);
      }
    });
  }
  createBatch() {
    this._router.navigate(["smart-batch", this.configId(), "batch", "new"]);
  }
  viewBatch(batchId) {
    this._router.navigate(["/smart-batch", this.configId(), "batch", batchId]);
  }
  getCountryFlag(country) {
    const map = {
      colombia: "\u{1F1E8}\u{1F1F4}",
      col: "\u{1F1E8}\u{1F1F4}",
      co: "\u{1F1E8}\u{1F1F4}",
      "united states": "\u{1F1FA}\u{1F1F8}",
      usa: "\u{1F1FA}\u{1F1F8}",
      us: "\u{1F1FA}\u{1F1F8}",
      peru: "\u{1F1F5}\u{1F1EA}",
      pe: "\u{1F1F5}\u{1F1EA}",
      world: "\u{1F310}",
      mexico: "\u{1F1F2}\u{1F1FD}",
      mx: "\u{1F1F2}\u{1F1FD}",
      brazil: "\u{1F1E7}\u{1F1F7}",
      br: "\u{1F1E7}\u{1F1F7}",
      chile: "\u{1F1E8}\u{1F1F1}",
      cl: "\u{1F1E8}\u{1F1F1}",
      argentina: "\u{1F1E6}\u{1F1F7}",
      ar: "\u{1F1E6}\u{1F1F7}",
      ecuador: "\u{1F1EA}\u{1F1E8}",
      ec: "\u{1F1EA}\u{1F1E8}",
      venezuela: "\u{1F1FB}\u{1F1EA}",
      ve: "\u{1F1FB}\u{1F1EA}",
      bolivia: "\u{1F1E7}\u{1F1F4}",
      bo: "\u{1F1E7}\u{1F1F4}",
      uruguay: "\u{1F1FA}\u{1F1FE}",
      uy: "\u{1F1FA}\u{1F1FE}",
      paraguay: "\u{1F1F5}\u{1F1FE}",
      py: "\u{1F1F5}\u{1F1FE}",
      panama: "\u{1F1F5}\u{1F1E6}",
      pa: "\u{1F1F5}\u{1F1E6}",
      "costa rica": "\u{1F1E8}\u{1F1F7}",
      cr: "\u{1F1E8}\u{1F1F7}",
      guatemala: "\u{1F1EC}\u{1F1F9}",
      gt: "\u{1F1EC}\u{1F1F9}",
      honduras: "\u{1F1ED}\u{1F1F3}",
      hn: "\u{1F1ED}\u{1F1F3}",
      "el salvador": "\u{1F1F8}\u{1F1FB}",
      sv: "\u{1F1F8}\u{1F1FB}",
      "dominican republic": "\u{1F1E9}\u{1F1F4}",
      "rep\xFAblica dominicana": "\u{1F1E9}\u{1F1F4}",
      "republica dominicana": "\u{1F1E9}\u{1F1F4}",
      do: "\u{1F1E9}\u{1F1F4}",
      canada: "\u{1F1E8}\u{1F1E6}",
      ca: "\u{1F1E8}\u{1F1E6}",
      spain: "\u{1F1EA}\u{1F1F8}",
      es: "\u{1F1EA}\u{1F1F8}"
    };
    const key = (country || "").trim().toLowerCase();
    return map[key] ?? "\u{1F3F3}\uFE0F";
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BatchDashboardComponent, selectors: [["batch-dashboard"]], decls: 44, vars: 29, consts: [[1, "flex", "min-h-screen", "min-w-0", "flex-auto", "flex-col", "bg-stone-50", "dark:bg-gray-950"], [1, "border-b", "border-stone-200/90", "bg-white/90", "px-5", "py-6", "backdrop-blur-sm", "dark:border-gray-800", "dark:bg-gray-950/90", "md:px-8", "md:py-8"], [1, "mx-auto", "flex", "w-full", "max-w-7xl", "flex-col", "gap-5"], [1, "flex", "flex-wrap", "items-center", "text-xs", "font-medium", "leading-none", "text-stone-500", "dark:text-stone-400"], ["routerLink", "/chat", 1, "cursor-pointer", "text-stone-700", "underline-offset-4", "hover:underline", "dark:text-stone-300"], ["svgIcon", "heroicons_solid:chevron-right", 1, "icon-size-4", "mx-2", "text-stone-400"], ["routerLink", "/smart-batch", 1, "cursor-pointer", "text-stone-700", "underline-offset-4", "hover:underline", "dark:text-stone-300"], [1, "cursor-default", "text-stone-600", "dark:text-stone-300"], [1, "flex", "flex-wrap", "items-start", "justify-between", "gap-3"], [1, "flex", "min-w-0", "items-start", "gap-3"], ["mat-icon-button", "", "type", "button", "routerLink", "/smart-batch", 1, "shrink-0", "!text-stone-600", "dark:!text-stone-300", 3, "matTooltip"], ["class", "shrink-0 text-3xl", 4, "ngIf"], [1, "min-w-0"], [1, "text-2xl", "font-semibold", "tracking-tight", "text-stone-900", "dark:text-white", "md:text-3xl"], [1, "mt-1", "text-sm", "text-stone-500", "dark:text-stone-400"], ["mat-flat-button", "", "color", "primary", "type", "button", 1, "shrink-0", "rounded-xl", "!px-6", "!py-2", 3, "click"], [1, "mr-2", "icon-size-5"], [1, "flex", "flex-auto", "flex-col", "px-5", "py-8", "md:px-8", "md:py-10"], [1, "mx-auto", "flex", "w-full", "max-w-7xl", "flex-col", "gap-6"], ["class", "grid grid-cols-2 gap-4 md:grid-cols-4", 4, "ngIf"], ["class", "animate-fade-in rounded-2xl border border-indigo-200/90 bg-white p-5 shadow-sm dark:border-indigo-900/50 dark:bg-gray-900", 4, "ngIf"], ["class", "animate-fade-in rounded-2xl border border-green-200/90 bg-white p-5 shadow-sm dark:border-green-900/50 dark:bg-gray-900", 4, "ngIf"], ["class", "grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4", 4, "ngIf"], ["class", "flex flex-1 flex-col items-center justify-center py-20", 4, "ngIf"], ["class", "flex flex-1 flex-col items-center justify-center rounded-2xl border-2 border-dashed border-stone-200 p-12 text-center dark:border-gray-800", 4, "ngIf"], ["class", "flex flex-col gap-4", 4, "ngIf"], [1, "shrink-0", "text-3xl"], [1, "grid", "grid-cols-2", "gap-4", "md:grid-cols-4"], [1, "cursor-pointer", "rounded-2xl", "border", "border-stone-200/90", "bg-white", "p-5", "shadow-sm", "transition-all", "hover:border-indigo-300", "hover:shadow-md", "dark:border-gray-800", "dark:bg-gray-900", "dark:hover:border-indigo-700", 3, "click"], [1, "flex", "items-center", "gap-3"], [1, "flex", "h-10", "w-10", "shrink-0", "items-center", "justify-center", "rounded-lg", "bg-indigo-100", "dark:bg-indigo-900/30"], [1, "icon-size-5", "text-indigo-600", "dark:text-indigo-400"], [1, "min-w-0", "flex-1"], [1, "block", "text-xs", "font-medium", "uppercase", "text-stone-500", "dark:text-stone-400"], [1, "text-xl", "font-bold", "text-stone-900", "dark:text-white"], [1, "icon-size-4", "shrink-0", "text-stone-400"], [1, "rounded-2xl", "border", "border-stone-200/90", "bg-white", "p-5", "shadow-sm", "dark:border-gray-800", "dark:bg-gray-900"], [1, "flex", "h-10", "w-10", "shrink-0", "items-center", "justify-center", "rounded-lg", "bg-purple-100", "dark:bg-purple-900/30"], [1, "icon-size-5", "text-purple-600", "dark:text-purple-400"], [1, "text-lg", "font-semibold", "capitalize", "text-stone-900", "dark:text-white"], [1, "flex", "h-10", "w-10", "shrink-0", "items-center", "justify-center", "rounded-lg", "bg-teal-100", "dark:bg-teal-900/30"], [1, "icon-size-5", "text-teal-600", "dark:text-teal-400"], [1, "text-lg", "font-semibold", "uppercase", "text-stone-900", "dark:text-white"], [1, "cursor-pointer", "rounded-2xl", "border", "border-stone-200/90", "bg-white", "p-5", "shadow-sm", "transition-all", "hover:border-green-300", "hover:shadow-md", "dark:border-gray-800", "dark:bg-gray-900", "dark:hover:border-green-700", 3, "click"], [1, "flex", "h-10", "w-10", "shrink-0", "items-center", "justify-center", "rounded-lg", "bg-green-100", "dark:bg-green-900/30"], [1, "icon-size-5", "text-green-600", "dark:text-green-400"], [1, "text-xl", "font-bold", "text-green-600", "dark:text-green-400"], [1, "animate-fade-in", "rounded-2xl", "border", "border-indigo-200/90", "bg-white", "p-5", "shadow-sm", "dark:border-indigo-900/50", "dark:bg-gray-900"], [1, "mb-4", "flex", "items-center", "justify-between"], [1, "flex", "items-center", "gap-2", "text-lg", "font-semibold", "text-stone-900", "dark:text-white"], [1, "text-indigo-600", "dark:text-indigo-400"], ["mat-icon-button", "", "type", "button", 1, "!text-stone-600", "dark:!text-stone-400", 3, "click"], [1, "space-y-3"], ["class", "flex items-center gap-4 rounded-xl bg-stone-50 p-3 dark:bg-gray-800/50", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "gap-4", "rounded-xl", "bg-stone-50", "p-3", "dark:bg-gray-800/50"], [1, "flex", "h-8", "w-8", "shrink-0", "items-center", "justify-center", "rounded-full", "bg-indigo-100", "text-sm", "font-bold", "text-indigo-600", "dark:bg-indigo-900/50", "dark:text-indigo-400"], [1, "font-medium", "text-stone-900", "dark:text-white"], ["class", "font-mono text-sm text-stone-500 dark:text-stone-400", 4, "ngIf"], [1, "shrink-0", "text-right"], [1, "text-sm", "font-medium", "text-green-600", "dark:text-green-400"], ["class", "shrink-0 rounded bg-yellow-100 px-2 py-0.5 text-xs text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400", 4, "ngIf"], [1, "font-mono", "text-sm", "text-stone-500", "dark:text-stone-400"], [1, "shrink-0", "rounded", "bg-yellow-100", "px-2", "py-0.5", "text-xs", "text-yellow-700", "dark:bg-yellow-900/30", "dark:text-yellow-400"], [1, "animate-fade-in", "rounded-2xl", "border", "border-green-200/90", "bg-white", "p-5", "shadow-sm", "dark:border-green-900/50", "dark:bg-gray-900"], [1, "text-green-600", "dark:text-green-400"], [1, "space-y-2"], ["class", "flex items-center justify-between border-b border-stone-100 py-2 last:border-0 dark:border-gray-800", 4, "ngFor", "ngForOf"], [1, "mt-4", "flex", "items-center", "justify-between", "border-t", "border-stone-200", "pt-4", "dark:border-gray-700"], [1, "font-semibold", "text-stone-900", "dark:text-white"], [1, "text-2xl", "font-bold", "text-green-600", "dark:text-green-400"], [1, "flex", "items-center", "justify-between", "border-b", "border-stone-100", "py-2", "last:border-0", "dark:border-gray-800"], [1, "flex", "h-6", "w-6", "shrink-0", "items-center", "justify-center", "rounded-full", "bg-stone-100", "text-xs", "font-medium", "text-stone-600", "dark:bg-gray-800", "dark:text-stone-400"], [1, "text-stone-700", "dark:text-stone-300"], [1, "grid", "grid-cols-1", "gap-4", "md:grid-cols-2", "lg:grid-cols-4"], [1, "group", "relative", "rounded-2xl", "border", "border-stone-200/90", "bg-white", "p-6", "shadow-sm", "transition-all", "duration-200", "hover:border-stone-300", "hover:shadow-md", "dark:border-gray-800", "dark:bg-gray-900", "dark:hover:border-gray-700"], [1, "mb-4", "flex", "items-start", "justify-between"], [1, "flex", "h-11", "w-11", "items-center", "justify-center", "rounded-xl", "border", "border-stone-200/80", "bg-gradient-to-br", "from-stone-50", "to-stone-100", "dark:border-gray-700/60", "dark:from-gray-800", "dark:to-gray-900"], [1, "icon-size-5", "text-stone-600", "dark:text-stone-400"], [1, "rounded-md", "border", "border-stone-200/80", "bg-stone-50", "px-2.5", "py-0.5", "dark:border-gray-700/60", "dark:bg-gray-800/50"], [1, "text-[10px]", "font-semibold", "uppercase", "tracking-wider", "text-stone-500", "dark:text-stone-400"], [1, "space-y-1"], [1, "text-[13px]", "font-medium", "tracking-wide", "text-stone-500", "dark:text-stone-400"], [1, "text-3xl", "font-bold", "tracking-tight", "text-stone-900", "dark:text-white"], [1, "group", "relative", "rounded-2xl", "border", "border-emerald-200/60", "bg-white", "p-6", "shadow-sm", "transition-all", "duration-200", "hover:border-emerald-300/80", "hover:shadow-md", "dark:border-emerald-900/40", "dark:bg-gray-900", "dark:hover:border-emerald-800/60"], [1, "flex", "h-11", "w-11", "items-center", "justify-center", "rounded-xl", "border", "border-emerald-200/60", "bg-gradient-to-br", "from-emerald-50", "to-emerald-100/80", "dark:border-emerald-800/60", "dark:from-emerald-950/50", "dark:to-emerald-900/30"], [1, "icon-size-5", "text-emerald-600", "dark:text-emerald-400"], [1, "rounded-md", "border", "border-emerald-200/60", "bg-emerald-50", "px-2.5", "py-0.5", "dark:border-emerald-800/40", "dark:bg-emerald-950/30"], [1, "text-[10px]", "font-semibold", "uppercase", "tracking-wider", "text-emerald-600", "dark:text-emerald-400"], [1, "absolute", "bottom-0", "left-0", "right-0", "h-1", "rounded-b-2xl", "bg-gradient-to-r", "from-emerald-500/20", "to-emerald-400/20"], [1, "group", "relative", "rounded-2xl", "border", "border-amber-200/60", "bg-white", "p-6", "shadow-sm", "transition-all", "duration-200", "hover:border-amber-300/80", "hover:shadow-md", "dark:border-amber-900/40", "dark:bg-gray-900", "dark:hover:border-amber-800/60"], [1, "flex", "h-11", "w-11", "items-center", "justify-center", "rounded-xl", "border", "border-amber-200/60", "bg-gradient-to-br", "from-amber-50", "to-amber-100/80", "dark:border-amber-800/60", "dark:from-amber-950/50", "dark:to-amber-900/30"], [1, "icon-size-5", "text-amber-600", "dark:text-amber-400"], [1, "rounded-md", "border", "border-amber-200/60", "bg-amber-50", "px-2.5", "py-0.5", "dark:border-amber-800/40", "dark:bg-amber-950/30"], [1, "text-[10px]", "font-semibold", "uppercase", "tracking-wider", "text-amber-600", "dark:text-amber-400"], [1, "absolute", "bottom-0", "left-0", "right-0", "h-1", "rounded-b-2xl", "bg-gradient-to-r", "from-amber-500/20", "to-amber-400/20"], [1, "group", "relative", "rounded-2xl", "border", "border-rose-200/60", "bg-white", "p-6", "shadow-sm", "transition-all", "duration-200", "hover:border-rose-300/80", "hover:shadow-md", "dark:border-rose-900/40", "dark:bg-gray-900", "dark:hover:border-rose-800/60"], [1, "flex", "h-11", "w-11", "items-center", "justify-center", "rounded-xl", "border", "border-rose-200/60", "bg-gradient-to-br", "from-rose-50", "to-rose-100/80", "dark:border-rose-800/60", "dark:from-rose-950/50", "dark:to-rose-900/30"], [1, "icon-size-5", "text-rose-600", "dark:text-rose-400"], [1, "rounded-md", "border", "border-rose-200/60", "bg-rose-50", "px-2.5", "py-0.5", "dark:border-rose-800/40", "dark:bg-rose-950/30"], [1, "text-[10px]", "font-semibold", "uppercase", "tracking-wider", "text-rose-600", "dark:text-rose-400"], [1, "absolute", "bottom-0", "left-0", "right-0", "h-1", "rounded-b-2xl", "bg-gradient-to-r", "from-rose-500/20", "to-rose-400/20"], [1, "flex", "flex-1", "flex-col", "items-center", "justify-center", "py-20"], ["diameter", "48"], [1, "mt-4", "text-sm", "text-stone-500", "dark:text-stone-400"], [1, "flex", "flex-1", "flex-col", "items-center", "justify-center", "rounded-2xl", "border-2", "border-dashed", "border-stone-200", "p-12", "text-center", "dark:border-gray-800"], [1, "mb-6", "flex", "h-20", "w-20", "items-center", "justify-center", "rounded-full", "bg-stone-50", "dark:bg-gray-900"], [1, "icon-size-10", "text-stone-400"], [1, "text-lg", "font-medium", "text-stone-900", "dark:text-white"], [1, "mb-6", "mt-2", "max-w-sm", "text-stone-500", "dark:text-stone-400"], ["mat-flat-button", "", "color", "primary", "type", "button", 1, "rounded-xl", 3, "click"], [1, "mr-2"], [1, "flex", "flex-col", "gap-4"], [1, "text-lg", "font-semibold", "text-stone-900", "dark:text-white"], [1, "overflow-hidden", "rounded-2xl", "border", "border-stone-200/90", "bg-white", "shadow-sm", "dark:border-gray-800", "dark:bg-gray-900"], [1, "w-full"], [1, "bg-stone-50/80", "dark:bg-gray-800/50"], [1, "px-6", "py-3", "text-left", "text-xs", "font-semibold", "uppercase", "tracking-wider", "text-stone-500", "dark:text-stone-400"], [1, "px-6", "py-3", "text-right", "text-xs", "font-semibold", "uppercase", "tracking-wider", "text-stone-500", "dark:text-stone-400"], [1, "divide-y", "divide-stone-100", "dark:divide-gray-800"], ["class", "cursor-pointer transition-colors hover:bg-stone-50 dark:hover:bg-gray-800/30", 3, "click", 4, "ngFor", "ngForOf"], [1, "cursor-pointer", "transition-colors", "hover:bg-stone-50", "dark:hover:bg-gray-800/30", 3, "click"], [1, "px-6", "py-4"], [1, "inline-flex", "items-center", "rounded-full", "px-2.5", "py-0.5", "text-xs", "font-medium", "capitalize", 3, "ngClass"], [1, "w-48", "px-6", "py-4"], ["mode", "determinate", 1, "!h-2", "rounded-full", 3, "value"], [1, "whitespace-nowrap", "text-sm", "text-stone-500"], [1, "flex", "items-center", "gap-1", "text-sm"], [1, "text-green-600"], [1, "text-stone-400"], [1, "text-stone-600", "dark:text-stone-400"], ["class", "ml-1 text-red-500", 4, "ngIf"], ["class", "ml-1 text-amber-600", 4, "ngIf"], [1, "px-6", "py-4", "text-sm", "text-stone-500", "dark:text-stone-400"], [1, "px-6", "py-4", "text-right"], ["mat-icon-button", "", "type", "button", 3, "click", "matTooltip"], [1, "icon-size-5"], [1, "ml-1", "text-red-500"], [1, "ml-1", "text-amber-600"]], template: function BatchDashboardComponent_Template(rf, ctx) {
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
        \u0275\u0275template(37, BatchDashboardComponent_div_37_Template, 49, 27, "div", 19)(38, BatchDashboardComponent_div_38_Template, 12, 4, "div", 20)(39, BatchDashboardComponent_div_39_Template, 18, 8, "div", 21)(40, BatchDashboardComponent_div_40_Template, 68, 28, "div", 22)(41, BatchDashboardComponent_div_41_Template, 5, 3, "div", 23)(42, BatchDashboardComponent_div_42_Template, 15, 9, "div", 24)(43, BatchDashboardComponent_div_43_Template, 28, 22, "div", 25);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        let tmp_1_0;
        let tmp_5_0;
        let tmp_6_0;
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 15, "smartBatchLanding.title"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(((tmp_1_0 = ctx.configuration()) == null ? null : tmp_1_0.name) || \u0275\u0275pipeBind1(13, 17, "batchDashboard.loading"));
        \u0275\u0275advance(4);
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(17, 19, "batchDashboard.backToSmartBatch"));
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(18, 21, "batchDashboard.backToSmartBatch"));
        \u0275\u0275advance(6);
        \u0275\u0275property("ngIf", ctx.configuration());
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ((tmp_5_0 = ctx.configuration()) == null ? null : tmp_5_0.name) || \u0275\u0275pipeBind1(26, 23, "batchDashboard.loading"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ((tmp_6_0 = ctx.configuration()) == null ? null : tmp_6_0.description) || \u0275\u0275pipeBind1(29, 25, "batchDashboard.batchProcessingDashboard"), " ");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(34, 27, "batchDashboard.createBatch"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", ctx.configuration());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showStepsPanel());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showCostPanel());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.stats() && ctx.stats().totalBatches > 0);
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
      MatDialogModule,
      MatIconModule,
      MatIcon,
      MatTooltipModule,
      MatTooltip,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatProgressBarModule,
      MatProgressBar
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
      MatDialogModule,
      MatIconModule,
      MatTooltipModule,
      MatProgressSpinnerModule,
      MatProgressBarModule
    ], encapsulation: ViewEncapsulation.None, template: `<div class="flex min-h-screen min-w-0 flex-auto flex-col bg-stone-50 dark:bg-gray-950">
    <header
        class="border-b border-stone-200/90 bg-white/90 px-5 py-6 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-950/90 md:px-8 md:py-8"
    >
        <div class="mx-auto flex w-full max-w-7xl flex-col gap-5">
            <div
                class="flex flex-wrap items-center text-xs font-medium leading-none text-stone-500 dark:text-stone-400"
            >
                <a
                    routerLink="/chat"
                    class="cursor-pointer text-stone-700 underline-offset-4 hover:underline dark:text-stone-300"
                >
                    Verifik
                </a>
                <mat-icon
                    class="icon-size-4 mx-2 text-stone-400"
                    svgIcon="heroicons_solid:chevron-right"
                ></mat-icon>
                <a
                    routerLink="/smart-batch"
                    class="cursor-pointer text-stone-700 underline-offset-4 hover:underline dark:text-stone-300"
                >
                    {{ 'smartBatchLanding.title' | transloco }}
                </a>
                <mat-icon
                    class="icon-size-4 mx-2 text-stone-400"
                    svgIcon="heroicons_solid:chevron-right"
                ></mat-icon>
                <span class="cursor-default text-stone-600 dark:text-stone-300">{{
                    configuration()?.name || ('batchDashboard.loading' | transloco)
                }}</span>
            </div>

            <div class="flex flex-wrap items-start justify-between gap-3">
                <div class="flex min-w-0 items-start gap-3">
                    <button
                        mat-icon-button
                        type="button"
                        routerLink="/smart-batch"
                        [matTooltip]="'batchDashboard.backToSmartBatch' | transloco"
                        class="shrink-0 !text-stone-600 dark:!text-stone-300"
                        [attr.aria-label]="'batchDashboard.backToSmartBatch' | transloco"
                    >
                        <mat-icon>arrow_back</mat-icon>
                    </button>
                    <div class="flex min-w-0 items-start gap-3">
                        <span class="shrink-0 text-3xl" *ngIf="configuration()">{{
                            getCountryFlag(configuration()!.country)
                        }}</span>
                        <div class="min-w-0">
                            <h1
                                class="text-2xl font-semibold tracking-tight text-stone-900 dark:text-white md:text-3xl"
                            >
                                {{ configuration()?.name || ('batchDashboard.loading' | transloco) }}
                            </h1>
                            <p class="mt-1 text-sm text-stone-500 dark:text-stone-400">
                                {{
                                    configuration()?.description
                                        || ('batchDashboard.batchProcessingDashboard' | transloco)
                                }}
                            </p>
                        </div>
                    </div>
                </div>
                <button
                    mat-flat-button
                    color="primary"
                    type="button"
                    (click)="createBatch()"
                    class="shrink-0 rounded-xl !px-6 !py-2"
                >
                    <mat-icon class="mr-2 icon-size-5">add</mat-icon>
                    {{ 'batchDashboard.createBatch' | transloco }}
                </button>
            </div>
        </div>
    </header>

    <main class="flex flex-auto flex-col px-5 py-8 md:px-8 md:py-10">
        <div class="mx-auto flex w-full max-w-7xl flex-col gap-6">
            <!-- Summary Cards -->
            <div class="grid grid-cols-2 gap-4 md:grid-cols-4" *ngIf="configuration()">
                <!-- Steps Count - Clickable -->
                <div
                    (click)="toggleStepsPanel()"
                    class="cursor-pointer rounded-2xl border border-stone-200/90 bg-white p-5 shadow-sm transition-all hover:border-indigo-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-indigo-700"
                    [class.ring-2]="showStepsPanel()"
                    [class.ring-indigo-500]="showStepsPanel()"
                >
                    <div class="flex items-center gap-3">
                        <div
                            class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-100 dark:bg-indigo-900/30"
                        >
                            <mat-icon class="icon-size-5 text-indigo-600 dark:text-indigo-400"
                                >layers</mat-icon
                            >
                        </div>
                        <div class="min-w-0 flex-1">
                            <span
                                class="block text-xs font-medium uppercase text-stone-500 dark:text-stone-400"
                                >{{ 'batchDashboard.steps' | transloco }}</span
                            >
                            <span class="text-xl font-bold text-stone-900 dark:text-white">{{
                                stepsCount()
                            }}</span>
                        </div>
                        <mat-icon class="icon-size-4 shrink-0 text-stone-400">{{
                            showStepsPanel() ? 'expand_less' : 'expand_more'
                        }}</mat-icon>
                    </div>
                </div>

                <!-- Strategy -->
                <div
                    class="rounded-2xl border border-stone-200/90 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900"
                >
                    <div class="flex items-center gap-3">
                        <div
                            class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900/30"
                        >
                            <mat-icon class="icon-size-5 text-purple-600 dark:text-purple-400"
                                >account_tree</mat-icon
                            >
                        </div>
                        <div class="min-w-0">
                            <span
                                class="block text-xs font-medium uppercase text-stone-500 dark:text-stone-400"
                                >{{ 'batchDashboard.strategy' | transloco }}</span
                            >
                            <span
                                class="text-lg font-semibold capitalize text-stone-900 dark:text-white"
                            >
                                {{ configuration()?.mergeStrategy?.replace('-', ' ') }}
                            </span>
                        </div>
                    </div>
                </div>

                <!-- Format -->
                <div
                    class="rounded-2xl border border-stone-200/90 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900"
                >
                    <div class="flex items-center gap-3">
                        <div
                            class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-100 dark:bg-teal-900/30"
                        >
                            <mat-icon class="icon-size-5 text-teal-600 dark:text-teal-400"
                                >swap_horiz</mat-icon
                            >
                        </div>
                        <div class="min-w-0">
                            <span
                                class="block text-xs font-medium uppercase text-stone-500 dark:text-stone-400"
                                >{{ 'batchDashboard.format' | transloco }}</span
                            >
                            <span class="text-lg font-semibold uppercase text-stone-900 dark:text-white">
                                {{ configuration()?.inputFormat }} \u2192 {{ configuration()?.outputFormat }}
                            </span>
                        </div>
                    </div>
                </div>

                <!-- Cost per Row - Clickable -->
                <div
                    (click)="toggleCostPanel()"
                    class="cursor-pointer rounded-2xl border border-stone-200/90 bg-white p-5 shadow-sm transition-all hover:border-green-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-green-700"
                    [class.ring-2]="showCostPanel()"
                    [class.ring-green-500]="showCostPanel()"
                >
                    <div class="flex items-center gap-3">
                        <div
                            class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900/30"
                        >
                            <mat-icon class="icon-size-5 text-green-600 dark:text-green-400"
                                >attach_money</mat-icon
                            >
                        </div>
                        <div class="min-w-0 flex-1">
                            <span
                                class="block text-xs font-medium uppercase text-stone-500 dark:text-stone-400"
                                >{{ 'batchDashboard.costPerRow' | transloco }}</span
                            >
                            <span class="text-xl font-bold text-green-600 dark:text-green-400">
                                \${{ estimatedCostPerRow().toFixed(2) }}
                            </span>
                        </div>
                        <mat-icon class="icon-size-4 shrink-0 text-stone-400">{{
                            showCostPanel() ? 'expand_less' : 'expand_more'
                        }}</mat-icon>
                    </div>
                </div>
            </div>

            <!-- Steps Panel (expanded) -->
            <div
                *ngIf="showStepsPanel()"
                class="animate-fade-in rounded-2xl border border-indigo-200/90 bg-white p-5 shadow-sm dark:border-indigo-900/50 dark:bg-gray-900"
            >
                <div class="mb-4 flex items-center justify-between">
                    <h3
                        class="flex items-center gap-2 text-lg font-semibold text-stone-900 dark:text-white"
                    >
                        <mat-icon class="text-indigo-600 dark:text-indigo-400">layers</mat-icon>
                        {{ 'batchDashboard.processingSteps' | transloco }}
                    </h3>
                    <button
                        mat-icon-button
                        type="button"
                        class="!text-stone-600 dark:!text-stone-400"
                        (click)="toggleStepsPanel()"
                    >
                        <mat-icon>close</mat-icon>
                    </button>
                </div>
                <div class="space-y-3">
                    <div
                        *ngFor="let step of stepsDetails(); let idx = index"
                        class="flex items-center gap-4 rounded-xl bg-stone-50 p-3 dark:bg-gray-800/50"
                    >
                        <div
                            class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-sm font-bold text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-400"
                        >
                            {{ step.sequence }}
                        </div>
                        <div class="min-w-0 flex-1">
                            <p class="font-medium text-stone-900 dark:text-white">{{ step.name }}</p>
                            <p
                                *ngIf="step.url"
                                class="font-mono text-sm text-stone-500 dark:text-stone-400"
                            >
                                {{ step.url }}
                            </p>
                        </div>
                        <div class="shrink-0 text-right">
                            <span class="text-sm font-medium text-green-600 dark:text-green-400"
                                >\${{ step.price.toFixed(2) }}</span
                            >
                        </div>
                        <span
                            *ngIf="!step.enabled"
                            class="shrink-0 rounded bg-yellow-100 px-2 py-0.5 text-xs text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                            >{{ 'batchDashboard.disabled' | transloco }}</span
                        >
                    </div>
                </div>
            </div>

            <!-- Cost Breakdown Panel (expanded) -->
            <div
                *ngIf="showCostPanel()"
                class="animate-fade-in rounded-2xl border border-green-200/90 bg-white p-5 shadow-sm dark:border-green-900/50 dark:bg-gray-900"
            >
                <div class="mb-4 flex items-center justify-between">
                    <h3
                        class="flex items-center gap-2 text-lg font-semibold text-stone-900 dark:text-white"
                    >
                        <mat-icon class="text-green-600 dark:text-green-400">attach_money</mat-icon>
                        {{ 'batchDashboard.costBreakdown' | transloco }}
                    </h3>
                    <button
                        mat-icon-button
                        type="button"
                        class="!text-stone-600 dark:!text-stone-400"
                        (click)="toggleCostPanel()"
                    >
                        <mat-icon>close</mat-icon>
                    </button>
                </div>
                <div class="space-y-2">
                    <div
                        *ngFor="let step of stepsDetails()"
                        class="flex items-center justify-between border-b border-stone-100 py-2 last:border-0 dark:border-gray-800"
                    >
                        <div class="flex items-center gap-3">
                            <span
                                class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-stone-100 text-xs font-medium text-stone-600 dark:bg-gray-800 dark:text-stone-400"
                            >
                                {{ step.sequence }}
                            </span>
                            <span class="text-stone-700 dark:text-stone-300">{{ step.name }}</span>
                        </div>
                        <span class="font-medium text-stone-900 dark:text-white"
                            >\${{ step.price.toFixed(2) }}</span
                        >
                    </div>
                </div>
                <div
                    class="mt-4 flex items-center justify-between border-t border-stone-200 pt-4 dark:border-gray-700"
                >
                    <span class="font-semibold text-stone-900 dark:text-white">{{
                        'batchDashboard.totalPerRow' | transloco
                    }}</span>
                    <span class="text-2xl font-bold text-green-600 dark:text-green-400"
                        >\${{ estimatedCostPerRow().toFixed(2) }}</span
                    >
                </div>
            </div>

            <!-- Stats Row -->
            <div
                *ngIf="stats() && stats()!.totalBatches > 0"
                class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4"
            >
                <!-- Total Batches -->
                <div
                    class="group relative rounded-2xl border border-stone-200/90 bg-white p-6 shadow-sm transition-all duration-200 hover:border-stone-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-gray-700"
                >
                    <div class="mb-4 flex items-start justify-between">
                        <div class="flex items-center gap-3">
                            <div
                                class="flex h-11 w-11 items-center justify-center rounded-xl border border-stone-200/80 bg-gradient-to-br from-stone-50 to-stone-100 dark:border-gray-700/60 dark:from-gray-800 dark:to-gray-900"
                            >
                                <mat-icon class="icon-size-5 text-stone-600 dark:text-stone-400"
                                    >inbox</mat-icon
                                >
                            </div>
                        </div>
                        <div
                            class="rounded-md border border-stone-200/80 bg-stone-50 px-2.5 py-0.5 dark:border-gray-700/60 dark:bg-gray-800/50"
                        >
                            <span
                                class="text-[10px] font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400"
                                >{{ 'batchDashboard.total' | transloco }}</span
                            >
                        </div>
                    </div>
                    <div class="space-y-1">
                        <p
                            class="text-[13px] font-medium tracking-wide text-stone-500 dark:text-stone-400"
                        >
                            {{ 'batchDashboard.totalBatches' | transloco }}
                        </p>
                        <p class="text-3xl font-bold tracking-tight text-stone-900 dark:text-white">
                            {{ stats()!.totalBatches }}
                        </p>
                    </div>
                </div>

                <!-- Completed Rows -->
                <div
                    class="group relative rounded-2xl border border-emerald-200/60 bg-white p-6 shadow-sm transition-all duration-200 hover:border-emerald-300/80 hover:shadow-md dark:border-emerald-900/40 dark:bg-gray-900 dark:hover:border-emerald-800/60"
                >
                    <div class="mb-4 flex items-start justify-between">
                        <div class="flex items-center gap-3">
                            <div
                                class="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-200/60 bg-gradient-to-br from-emerald-50 to-emerald-100/80 dark:border-emerald-800/60 dark:from-emerald-950/50 dark:to-emerald-900/30"
                            >
                                <mat-icon class="icon-size-5 text-emerald-600 dark:text-emerald-400"
                                    >check_circle</mat-icon
                                >
                            </div>
                        </div>
                        <div
                            class="rounded-md border border-emerald-200/60 bg-emerald-50 px-2.5 py-0.5 dark:border-emerald-800/40 dark:bg-emerald-950/30"
                        >
                            <span
                                class="text-[10px] font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400"
                                >{{ 'batchDashboard.success' | transloco }}</span
                            >
                        </div>
                    </div>
                    <div class="space-y-1">
                        <p
                            class="text-[13px] font-medium tracking-wide text-stone-500 dark:text-stone-400"
                        >
                            {{ 'batchDashboard.completedRows' | transloco }}
                        </p>
                        <p class="text-3xl font-bold tracking-tight text-stone-900 dark:text-white">
                            {{ stats()!.completedRows }}
                        </p>
                    </div>
                    <div
                        class="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl bg-gradient-to-r from-emerald-500/20 to-emerald-400/20"
                    ></div>
                </div>

                <!-- Pending Rows -->
                <div
                    class="group relative rounded-2xl border border-amber-200/60 bg-white p-6 shadow-sm transition-all duration-200 hover:border-amber-300/80 hover:shadow-md dark:border-amber-900/40 dark:bg-gray-900 dark:hover:border-amber-800/60"
                >
                    <div class="mb-4 flex items-start justify-between">
                        <div class="flex items-center gap-3">
                            <div
                                class="flex h-11 w-11 items-center justify-center rounded-xl border border-amber-200/60 bg-gradient-to-br from-amber-50 to-amber-100/80 dark:border-amber-800/60 dark:from-amber-950/50 dark:to-amber-900/30"
                            >
                                <mat-icon class="icon-size-5 text-amber-600 dark:text-amber-400"
                                    >schedule</mat-icon
                                >
                            </div>
                        </div>
                        <div
                            class="rounded-md border border-amber-200/60 bg-amber-50 px-2.5 py-0.5 dark:border-amber-800/40 dark:bg-amber-950/30"
                        >
                            <span
                                class="text-[10px] font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400"
                                >{{ 'batchDashboard.queue' | transloco }}</span
                            >
                        </div>
                    </div>
                    <div class="space-y-1">
                        <p
                            class="text-[13px] font-medium tracking-wide text-stone-500 dark:text-stone-400"
                        >
                            {{ 'batchDashboard.pendingRows' | transloco }}
                        </p>
                        <p class="text-3xl font-bold tracking-tight text-stone-900 dark:text-white">
                            {{ stats()!.pendingRows }}
                        </p>
                    </div>
                    <div
                        class="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl bg-gradient-to-r from-amber-500/20 to-amber-400/20"
                    ></div>
                </div>

                <!-- Failed Rows -->
                <div
                    class="group relative rounded-2xl border border-rose-200/60 bg-white p-6 shadow-sm transition-all duration-200 hover:border-rose-300/80 hover:shadow-md dark:border-rose-900/40 dark:bg-gray-900 dark:hover:border-rose-800/60"
                >
                    <div class="mb-4 flex items-start justify-between">
                        <div class="flex items-center gap-3">
                            <div
                                class="flex h-11 w-11 items-center justify-center rounded-xl border border-rose-200/60 bg-gradient-to-br from-rose-50 to-rose-100/80 dark:border-rose-800/60 dark:from-rose-950/50 dark:to-rose-900/30"
                            >
                                <mat-icon class="icon-size-5 text-rose-600 dark:text-rose-400"
                                    >error_outline</mat-icon
                                >
                            </div>
                        </div>
                        <div
                            class="rounded-md border border-rose-200/60 bg-rose-50 px-2.5 py-0.5 dark:border-rose-800/40 dark:bg-rose-950/30"
                        >
                            <span
                                class="text-[10px] font-semibold uppercase tracking-wider text-rose-600 dark:text-rose-400"
                                >{{ 'batchDashboard.error' | transloco }}</span
                            >
                        </div>
                    </div>
                    <div class="space-y-1">
                        <p
                            class="text-[13px] font-medium tracking-wide text-stone-500 dark:text-stone-400"
                        >
                            {{ 'batchDashboard.failedRows' | transloco }}
                        </p>
                        <p class="text-3xl font-bold tracking-tight text-stone-900 dark:text-white">
                            {{ stats()!.failedRows }}
                        </p>
                    </div>
                    <div
                        class="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl bg-gradient-to-r from-rose-500/20 to-rose-400/20"
                    ></div>
                </div>
            </div>

            <!-- Loading State -->
            <div *ngIf="isLoading()" class="flex flex-1 flex-col items-center justify-center py-20">
                <mat-spinner diameter="48"></mat-spinner>
                <p class="mt-4 text-sm text-stone-500 dark:text-stone-400">
                    {{ 'batchDashboard.loadingBatches' | transloco }}
                </p>
            </div>

            <!-- Empty State -->
            <div
                *ngIf="!isLoading() && batches().length === 0"
                class="flex flex-1 flex-col items-center justify-center rounded-2xl border-2 border-dashed border-stone-200 p-12 text-center dark:border-gray-800"
            >
                <div
                    class="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-stone-50 dark:bg-gray-900"
                >
                    <mat-icon class="icon-size-10 text-stone-400">inbox</mat-icon>
                </div>
                <h3 class="text-lg font-medium text-stone-900 dark:text-white">
                    {{ 'batchDashboard.noBatchesYet' | transloco }}
                </h3>
                <p class="mb-6 mt-2 max-w-sm text-stone-500 dark:text-stone-400">
                    {{ 'batchDashboard.createFirstBatchDescription' | transloco }}
                </p>
                <button mat-flat-button color="primary" type="button" class="rounded-xl" (click)="createBatch()">
                    <mat-icon class="mr-2">add</mat-icon>
                    {{ 'batchDashboard.createFirstBatch' | transloco }}
                </button>
            </div>

            <!-- Batches List -->
            <div *ngIf="!isLoading() && batches().length > 0" class="flex flex-col gap-4">
                <h2 class="text-lg font-semibold text-stone-900 dark:text-white">
                    {{ 'batchDashboard.batches' | transloco }}
                </h2>

                <div
                    class="overflow-hidden rounded-2xl border border-stone-200/90 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900"
                >
                    <table class="w-full">
                        <thead class="bg-stone-50/80 dark:bg-gray-800/50">
                            <tr>
                                <th
                                    class="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400"
                                >
                                    {{ 'batchDashboard.name' | transloco }}
                                </th>
                                <th
                                    class="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400"
                                >
                                    {{ 'batchDashboard.status' | transloco }}
                                </th>
                                <th
                                    class="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400"
                                >
                                    {{ 'batchDashboard.progress' | transloco }}
                                </th>
                                <th
                                    class="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400"
                                >
                                    {{ 'batchDashboard.rows' | transloco }}
                                </th>
                                <th
                                    class="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400"
                                >
                                    {{ 'batchDashboard.created' | transloco }}
                                </th>
                                <th
                                    class="px-6 py-3 text-right text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400"
                                >
                                    {{ 'batchDashboard.actions' | transloco }}
                                </th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-stone-100 dark:divide-gray-800">
                            <tr
                                *ngFor="let batch of batches()"
                                class="cursor-pointer transition-colors hover:bg-stone-50 dark:hover:bg-gray-800/30"
                                (click)="viewBatch(batch._id!)"
                            >
                                <td class="px-6 py-4">
                                    <span class="font-medium text-stone-900 dark:text-white">{{
                                        batch.name
                                    }}</span>
                                </td>
                                <td class="px-6 py-4">
                                    <span
                                        class="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium capitalize"
                                        [ngClass]="getStatusColor(batch.status)"
                                    >
                                        {{ ('batchProcessing.' + batch.status) | transloco }}
                                    </span>
                                </td>
                                <td class="w-48 px-6 py-4">
                                    <div class="flex items-center gap-3">
                                        <mat-progress-bar
                                            mode="determinate"
                                            [value]="getBatchProgress(batch)"
                                            class="!h-2 rounded-full"
                                        ></mat-progress-bar>
                                        <span class="whitespace-nowrap text-sm text-stone-500">
                                            {{ getBatchProgress(batch).toFixed(0) }}%
                                        </span>
                                    </div>
                                </td>
                                <td class="px-6 py-4">
                                    <div class="flex items-center gap-1 text-sm">
                                        <span class="text-green-600">{{ batch.completedRows }}</span>
                                        <span class="text-stone-400">/</span>
                                        <span class="text-stone-600 dark:text-stone-400">{{
                                            batch.totalRows
                                        }}</span>
                                        <span *ngIf="batch.failedRows > 0" class="ml-1 text-red-500"
                                            >({{
                                                'batchDashboard.failedCount'
                                                    | transloco: { count: batch.failedRows }
                                            }})</span
                                        >
                                        <span
                                            *ngIf="(batch.partialRows || 0) > 0"
                                            class="ml-1 text-amber-600"
                                            >({{
                                                'batchDashboard.partialCount'
                                                    | transloco: { count: batch.partialRows || 0 }
                                            }})</span
                                        >
                                    </div>
                                </td>
                                <td class="px-6 py-4 text-sm text-stone-500 dark:text-stone-400">
                                    {{ formatDate(batch.createdAt) }}
                                </td>
                                <td class="px-6 py-4 text-right">
                                    <button
                                        mat-icon-button
                                        type="button"
                                        [matTooltip]="'batchDashboard.viewDetails' | transloco"
                                        (click)="viewBatch(batch._id!); $event.stopPropagation()"
                                    >
                                        <mat-icon class="icon-size-5">visibility</mat-icon>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </main>
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BatchDashboardComponent, { className: "BatchDashboardComponent", filePath: "src/app/modules/smart-batch/dashboard/batch-dashboard.component.ts", lineNumber: 35 });
})();
export {
  BatchDashboardComponent
};
//# sourceMappingURL=chunk-VNWYTRYI.js.map
