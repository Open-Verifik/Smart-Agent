import {
  SmartBatchService
} from "./chunk-6YNO6YW5.js";
import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-BJ35R4KE.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-EL6Z63TT.js";
import "./chunk-H3UX3NVF.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-6KHU2J3U.js";
import {
  MatDialog,
  MatDialogModule
} from "./chunk-KCV7S453.js";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-LHOHCIQM.js";
import "./chunk-OIBNGD5S.js";
import {
  TranslocoModule,
  TranslocoPipe
} from "./chunk-VHMFS3U6.js";
import "./chunk-R4RYJRMO.js";
import "./chunk-32YYYLAD.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-SE37W2G4.js";
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
} from "./chunk-YTOBX75K.js";
import "./chunk-KTESVR3Q.js";

// src/app/modules/smart-batch/dashboard/batch-dashboard.component.ts
var _c0 = (a0) => ({ count: a0 });
function BatchDashboardComponent_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.getCountryFlag(ctx_r0.configuration().country));
  }
}
function BatchDashboardComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 19);
    \u0275\u0275listener("click", function BatchDashboardComponent_div_21_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.toggleStepsPanel());
    });
    \u0275\u0275elementStart(2, "div", 4)(3, "div", 20)(4, "mat-icon", 21);
    \u0275\u0275text(5, "layers");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 22)(7, "span", 23);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 24);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "mat-icon", 25);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 26)(15, "div", 4)(16, "div", 27)(17, "mat-icon", 28);
    \u0275\u0275text(18, "account_tree");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div")(20, "span", 23);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 29);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(25, "div", 26)(26, "div", 4)(27, "div", 30)(28, "mat-icon", 31);
    \u0275\u0275text(29, "swap_horiz");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div")(31, "span", 23);
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "span", 32);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(36, "div", 33);
    \u0275\u0275listener("click", function BatchDashboardComponent_div_21_Template_div_click_36_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.toggleCostPanel());
    });
    \u0275\u0275elementStart(37, "div", 4)(38, "div", 34)(39, "mat-icon", 35);
    \u0275\u0275text(40, "attach_money");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 22)(42, "span", 23);
    \u0275\u0275text(43);
    \u0275\u0275pipe(44, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "span", 36);
    \u0275\u0275text(46);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "mat-icon", 25);
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
function BatchDashboardComponent_div_22_div_11_p_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", step_r4.url, " ");
  }
}
function BatchDashboardComponent_div_22_div_11_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 52);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "batchDashboard.disabled"), " ");
  }
}
function BatchDashboardComponent_div_22_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44)(1, "div", 45);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 22)(4, "p", 46);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, BatchDashboardComponent_div_22_div_11_p_6_Template, 2, 1, "p", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 48)(8, "span", 49);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(10, BatchDashboardComponent_div_22_div_11_span_10_Template, 3, 3, "span", 50);
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
function BatchDashboardComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37)(1, "div", 38)(2, "h3", 39)(3, "mat-icon", 40);
    \u0275\u0275text(4, "layers");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 41);
    \u0275\u0275listener("click", function BatchDashboardComponent_div_22_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.toggleStepsPanel());
    });
    \u0275\u0275elementStart(8, "mat-icon");
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 42);
    \u0275\u0275template(11, BatchDashboardComponent_div_22_div_11_Template, 11, 5, "div", 43);
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
function BatchDashboardComponent_div_23_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60)(1, "div", 4)(2, "span", 61);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 62);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "span", 46);
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
function BatchDashboardComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 53)(1, "div", 38)(2, "h3", 39)(3, "mat-icon", 54);
    \u0275\u0275text(4, "attach_money");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 41);
    \u0275\u0275listener("click", function BatchDashboardComponent_div_23_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.toggleCostPanel());
    });
    \u0275\u0275elementStart(8, "mat-icon");
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 55);
    \u0275\u0275template(11, BatchDashboardComponent_div_23_div_11_Template, 8, 3, "div", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 57)(13, "span", 58);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 59);
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
function BatchDashboardComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63)(1, "div", 64)(2, "div", 65)(3, "div", 4)(4, "div", 66)(5, "mat-icon", 67);
    \u0275\u0275text(6, "inbox");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 68)(8, "span", 69);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 70)(12, "p", 71);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p", 72);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(17, "div", 73);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 74)(19, "div", 65)(20, "div", 4)(21, "div", 75)(22, "mat-icon", 76);
    \u0275\u0275text(23, "check_circle");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 77)(25, "span", 78);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 70)(29, "p", 71);
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "p", 72);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(34, "div", 79)(35, "div", 80);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 81)(37, "div", 65)(38, "div", 4)(39, "div", 82)(40, "mat-icon", 83);
    \u0275\u0275text(41, "schedule");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(42, "div", 84)(43, "span", 85);
    \u0275\u0275text(44);
    \u0275\u0275pipe(45, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(46, "div", 70)(47, "p", 71);
    \u0275\u0275text(48);
    \u0275\u0275pipe(49, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "p", 72);
    \u0275\u0275text(51);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(52, "div", 86)(53, "div", 87);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "div", 88)(55, "div", 65)(56, "div", 4)(57, "div", 89)(58, "mat-icon", 90);
    \u0275\u0275text(59, "error_outline");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(60, "div", 91)(61, "span", 92);
    \u0275\u0275text(62);
    \u0275\u0275pipe(63, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(64, "div", 70)(65, "p", 71);
    \u0275\u0275text(66);
    \u0275\u0275pipe(67, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "p", 72);
    \u0275\u0275text(69);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(70, "div", 93)(71, "div", 94);
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
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 16, "batchDashboard.success"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(31, 18, "batchDashboard.completedRows"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.stats().completedRows, " ");
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(45, 20, "batchDashboard.queue"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(49, 22, "batchDashboard.pendingRows"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.stats().pendingRows, " ");
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(63, 24, "batchDashboard.error"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(67, 26, "batchDashboard.failedRows"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.stats().failedRows, " ");
  }
}
function BatchDashboardComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 95);
    \u0275\u0275element(1, "mat-spinner", 96);
    \u0275\u0275elementStart(2, "p", 97);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "batchDashboard.loadingBatches"));
  }
}
function BatchDashboardComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 98)(1, "div", 99)(2, "mat-icon", 100);
    \u0275\u0275text(3, "inbox");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "h3", 101);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 102);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 103);
    \u0275\u0275listener("click", function BatchDashboardComponent_div_26_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.createBatch());
    });
    \u0275\u0275elementStart(11, "mat-icon", 104);
    \u0275\u0275text(12, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 3, "batchDashboard.noBatchesYet"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 5, "batchDashboard.createFirstBatchDescription"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 7, "batchDashboard.createFirstBatch"), " ");
  }
}
function BatchDashboardComponent_div_27_tr_27_span_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 129);
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
function BatchDashboardComponent_div_27_tr_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 114);
    \u0275\u0275listener("click", function BatchDashboardComponent_div_27_tr_27_Template_tr_click_0_listener() {
      const batch_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.viewBatch(batch_r9._id));
    });
    \u0275\u0275elementStart(1, "td", 115)(2, "span", 46);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 115)(5, "span", 116);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td", 117)(9, "div", 4);
    \u0275\u0275element(10, "mat-progress-bar", 118);
    \u0275\u0275elementStart(11, "span", 119);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "td", 115)(14, "div", 120)(15, "span", 121);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 122);
    \u0275\u0275text(18, "/");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 123);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, BatchDashboardComponent_div_27_tr_27_span_21_Template, 3, 6, "span", 124);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "td", 125);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "td", 126)(25, "button", 127);
    \u0275\u0275pipe(26, "transloco");
    \u0275\u0275listener("click", function BatchDashboardComponent_div_27_tr_27_Template_button_click_25_listener($event) {
      const batch_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      ctx_r0.viewBatch(batch_r9._id);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(27, "mat-icon", 128);
    \u0275\u0275text(28, "visibility");
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
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 10, "batchProcessing." + batch_r9.status), " ");
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
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatDate(batch_r9.createdAt), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(26, 12, "batchDashboard.viewDetails"));
  }
}
function BatchDashboardComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 105)(1, "h2", 106);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 107)(5, "table", 108)(6, "thead", 109)(7, "tr")(8, "th", 110);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 110);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 110);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th", 110);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th", 110);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th", 111);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "tbody", 112);
    \u0275\u0275template(27, BatchDashboardComponent_div_27_tr_27_Template, 29, 14, "tr", 113);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 8, "batchDashboard.batches"));
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
    return (batch.completedRows + batch.failedRows) / batch.totalRows * 100;
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BatchDashboardComponent, selectors: [["batch-dashboard"]], decls: 28, vars: 20, consts: [[1, "flex", "flex-col", "w-full", "h-full", "bg-[#f8fafc]", "dark:bg-[#0f172a]", "p-6", "gap-6"], [1, "flex", "items-center", "justify-between"], [1, "flex", "items-center", "gap-4"], ["mat-icon-button", "", "routerLink", "/smart-batch", 1, "!bg-white", "dark:!bg-slate-800", "!shadow-sm", 3, "matTooltip"], [1, "flex", "items-center", "gap-3"], ["class", "text-3xl", 4, "ngIf"], [1, "text-2xl", "font-bold", "tracking-tight", "text-slate-900", "dark:text-white"], [1, "text-slate-500", "dark:text-slate-400"], ["mat-flat-button", "", "color", "primary", 1, "!rounded-lg", "!px-6", "!py-2", 3, "click"], [1, "mr-2", "icon-size-5"], ["class", "grid grid-cols-2 md:grid-cols-4 gap-4", 4, "ngIf"], ["class", "bg-white dark:bg-slate-900 rounded-xl border border-indigo-200 dark:border-indigo-800 p-5 animate-fade-in", 4, "ngIf"], ["class", "bg-white dark:bg-slate-900 rounded-xl border border-green-200 dark:border-green-800 p-5 animate-fade-in", 4, "ngIf"], ["class", "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4", 4, "ngIf"], ["class", "flex flex-col items-center justify-center flex-1", 4, "ngIf"], ["class", "flex flex-col items-center justify-center flex-1 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-2xl p-12 text-center", 4, "ngIf"], ["class", "flex flex-col gap-4", 4, "ngIf"], [1, "text-3xl"], [1, "grid", "grid-cols-2", "md:grid-cols-4", "gap-4"], [1, "bg-white", "dark:bg-slate-900", "rounded-xl", "border", "border-slate-200", "dark:border-slate-800", "p-5", "cursor-pointer", "transition-all", "hover:shadow-md", "hover:border-indigo-300", "dark:hover:border-indigo-700", 3, "click"], [1, "w-10", "h-10", "rounded-lg", "bg-indigo-100", "dark:bg-indigo-900/30", "flex", "items-center", "justify-center"], [1, "text-indigo-600", "dark:text-indigo-400", "icon-size-5"], [1, "flex-1"], [1, "block", "text-xs", "text-slate-500", "uppercase", "font-medium"], [1, "text-xl", "font-bold", "text-slate-900", "dark:text-white"], [1, "text-slate-400", "icon-size-4"], [1, "bg-white", "dark:bg-slate-900", "rounded-xl", "border", "border-slate-200", "dark:border-slate-800", "p-5"], [1, "w-10", "h-10", "rounded-lg", "bg-purple-100", "dark:bg-purple-900/30", "flex", "items-center", "justify-center"], [1, "text-purple-600", "dark:text-purple-400", "icon-size-5"], [1, "text-lg", "font-semibold", "text-slate-900", "dark:text-white", "capitalize"], [1, "w-10", "h-10", "rounded-lg", "bg-teal-100", "dark:bg-teal-900/30", "flex", "items-center", "justify-center"], [1, "text-teal-600", "dark:text-teal-400", "icon-size-5"], [1, "text-lg", "font-semibold", "text-slate-900", "dark:text-white", "uppercase"], [1, "bg-white", "dark:bg-slate-900", "rounded-xl", "border", "border-slate-200", "dark:border-slate-800", "p-5", "cursor-pointer", "transition-all", "hover:shadow-md", "hover:border-green-300", "dark:hover:border-green-700", 3, "click"], [1, "w-10", "h-10", "rounded-lg", "bg-green-100", "dark:bg-green-900/30", "flex", "items-center", "justify-center"], [1, "text-green-600", "dark:text-green-400", "icon-size-5"], [1, "text-xl", "font-bold", "text-green-600", "dark:text-green-400"], [1, "bg-white", "dark:bg-slate-900", "rounded-xl", "border", "border-indigo-200", "dark:border-indigo-800", "p-5", "animate-fade-in"], [1, "flex", "items-center", "justify-between", "mb-4"], [1, "text-lg", "font-semibold", "text-slate-900", "dark:text-white", "flex", "items-center", "gap-2"], [1, "text-indigo-600", "dark:text-indigo-400"], ["mat-icon-button", "", 3, "click"], [1, "space-y-3"], ["class", "flex items-center gap-4 p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "gap-4", "p-3", "rounded-lg", "bg-slate-50", "dark:bg-slate-800/50"], [1, "w-8", "h-8", "rounded-full", "bg-indigo-100", "dark:bg-indigo-900/50", "flex", "items-center", "justify-center", "text-indigo-600", "dark:text-indigo-400", "font-bold", "text-sm"], [1, "font-medium", "text-slate-900", "dark:text-white"], ["class", "text-sm text-slate-500 dark:text-slate-400 font-mono", 4, "ngIf"], [1, "text-right"], [1, "text-sm", "font-medium", "text-green-600", "dark:text-green-400"], ["class", "text-xs px-2 py-0.5 rounded bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400", 4, "ngIf"], [1, "text-sm", "text-slate-500", "dark:text-slate-400", "font-mono"], [1, "text-xs", "px-2", "py-0.5", "rounded", "bg-yellow-100", "dark:bg-yellow-900/30", "text-yellow-700", "dark:text-yellow-400"], [1, "bg-white", "dark:bg-slate-900", "rounded-xl", "border", "border-green-200", "dark:border-green-800", "p-5", "animate-fade-in"], [1, "text-green-600", "dark:text-green-400"], [1, "space-y-2"], ["class", "flex items-center justify-between py-2 border-b border-slate-100 dark:border-slate-800 last:border-0", 4, "ngFor", "ngForOf"], [1, "mt-4", "pt-4", "border-t", "border-slate-200", "dark:border-slate-700", "flex", "items-center", "justify-between"], [1, "font-semibold", "text-slate-900", "dark:text-white"], [1, "text-2xl", "font-bold", "text-green-600", "dark:text-green-400"], [1, "flex", "items-center", "justify-between", "py-2", "border-b", "border-slate-100", "dark:border-slate-800", "last:border-0"], [1, "w-6", "h-6", "rounded-full", "bg-slate-100", "dark:bg-slate-800", "flex", "items-center", "justify-center", "text-xs", "font-medium", "text-slate-600", "dark:text-slate-400"], [1, "text-slate-700", "dark:text-slate-300"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-4", "gap-4"], [1, "group", "relative", "bg-white", "dark:bg-slate-900", "rounded-2xl", "border", "border-slate-200/60", "dark:border-slate-800/60", "p-6", "hover:border-slate-300", "dark:hover:border-slate-700", "transition-all", "duration-200", "hover:shadow-lg", "hover:shadow-slate-100", "dark:hover:shadow-slate-950/20"], [1, "flex", "items-start", "justify-between", "mb-4"], [1, "w-11", "h-11", "rounded-xl", "bg-gradient-to-br", "from-slate-50", "to-slate-100", "dark:from-slate-800", "dark:to-slate-900", "flex", "items-center", "justify-center", "border", "border-slate-200/60", "dark:border-slate-700/60"], [1, "text-slate-600", "dark:text-slate-400", "icon-size-5"], [1, "px-2.5", "py-0.5", "rounded-md", "bg-slate-50", "dark:bg-slate-800/50", "border", "border-slate-200/60", "dark:border-slate-700/60"], [1, "text-[10px]", "font-semibold", "text-slate-500", "dark:text-slate-400", "uppercase", "tracking-wider"], [1, "space-y-1"], [1, "text-[13px]", "font-medium", "text-slate-500", "dark:text-slate-400", "tracking-wide"], [1, "text-3xl", "font-bold", "text-slate-900", "dark:text-white", "tracking-tight"], [1, "absolute", "inset-0", "rounded-2xl", "bg-gradient-to-br", "from-slate-500/0", "to-slate-500/0", "group-hover:from-slate-500/[0.02]", "group-hover:to-slate-500/[0.01]", "transition-all", "duration-200", "pointer-events-none"], [1, "group", "relative", "bg-white", "dark:bg-slate-900", "rounded-2xl", "border", "border-emerald-200/60", "dark:border-emerald-900/40", "p-6", "hover:border-emerald-300/80", "dark:hover:border-emerald-800/60", "transition-all", "duration-200", "hover:shadow-lg", "hover:shadow-emerald-100/50", "dark:hover:shadow-emerald-950/20"], [1, "w-11", "h-11", "rounded-xl", "bg-gradient-to-br", "from-emerald-50", "to-emerald-100/80", "dark:from-emerald-950/50", "dark:to-emerald-900/30", "flex", "items-center", "justify-center", "border", "border-emerald-200/60", "dark:border-emerald-800/60"], [1, "text-emerald-600", "dark:text-emerald-400", "icon-size-5"], [1, "px-2.5", "py-0.5", "rounded-md", "bg-emerald-50", "dark:bg-emerald-950/30", "border", "border-emerald-200/60", "dark:border-emerald-800/40"], [1, "text-[10px]", "font-semibold", "text-emerald-600", "dark:text-emerald-400", "uppercase", "tracking-wider"], [1, "absolute", "bottom-0", "left-0", "right-0", "h-1", "bg-gradient-to-r", "from-emerald-500/20", "to-emerald-400/20", "rounded-b-2xl"], [1, "absolute", "inset-0", "rounded-2xl", "bg-gradient-to-br", "from-emerald-500/0", "to-emerald-500/0", "group-hover:from-emerald-500/[0.02]", "group-hover:to-emerald-500/[0.01]", "transition-all", "duration-200", "pointer-events-none"], [1, "group", "relative", "bg-white", "dark:bg-slate-900", "rounded-2xl", "border", "border-amber-200/60", "dark:border-amber-900/40", "p-6", "hover:border-amber-300/80", "dark:hover:border-amber-800/60", "transition-all", "duration-200", "hover:shadow-lg", "hover:shadow-amber-100/50", "dark:hover:shadow-amber-950/20"], [1, "w-11", "h-11", "rounded-xl", "bg-gradient-to-br", "from-amber-50", "to-amber-100/80", "dark:from-amber-950/50", "dark:to-amber-900/30", "flex", "items-center", "justify-center", "border", "border-amber-200/60", "dark:border-amber-800/60"], [1, "text-amber-600", "dark:text-amber-400", "icon-size-5"], [1, "px-2.5", "py-0.5", "rounded-md", "bg-amber-50", "dark:bg-amber-950/30", "border", "border-amber-200/60", "dark:border-amber-800/40"], [1, "text-[10px]", "font-semibold", "text-amber-600", "dark:text-amber-400", "uppercase", "tracking-wider"], [1, "absolute", "bottom-0", "left-0", "right-0", "h-1", "bg-gradient-to-r", "from-amber-500/20", "to-amber-400/20", "rounded-b-2xl"], [1, "absolute", "inset-0", "rounded-2xl", "bg-gradient-to-br", "from-amber-500/0", "to-amber-500/0", "group-hover:from-amber-500/[0.02]", "group-hover:to-amber-500/[0.01]", "transition-all", "duration-200", "pointer-events-none"], [1, "group", "relative", "bg-white", "dark:bg-slate-900", "rounded-2xl", "border", "border-rose-200/60", "dark:border-rose-900/40", "p-6", "hover:border-rose-300/80", "dark:hover:border-rose-800/60", "transition-all", "duration-200", "hover:shadow-lg", "hover:shadow-rose-100/50", "dark:hover:shadow-rose-950/20"], [1, "w-11", "h-11", "rounded-xl", "bg-gradient-to-br", "from-rose-50", "to-rose-100/80", "dark:from-rose-950/50", "dark:to-rose-900/30", "flex", "items-center", "justify-center", "border", "border-rose-200/60", "dark:border-rose-800/60"], [1, "text-rose-600", "dark:text-rose-400", "icon-size-5"], [1, "px-2.5", "py-0.5", "rounded-md", "bg-rose-50", "dark:bg-rose-950/30", "border", "border-rose-200/60", "dark:border-rose-800/40"], [1, "text-[10px]", "font-semibold", "text-rose-600", "dark:text-rose-400", "uppercase", "tracking-wider"], [1, "absolute", "bottom-0", "left-0", "right-0", "h-1", "bg-gradient-to-r", "from-rose-500/20", "to-rose-400/20", "rounded-b-2xl"], [1, "absolute", "inset-0", "rounded-2xl", "bg-gradient-to-br", "from-rose-500/0", "to-rose-500/0", "group-hover:from-rose-500/[0.02]", "group-hover:to-rose-500/[0.01]", "transition-all", "duration-200", "pointer-events-none"], [1, "flex", "flex-col", "items-center", "justify-center", "flex-1"], ["diameter", "48"], [1, "mt-4", "text-slate-500"], [1, "flex", "flex-col", "items-center", "justify-center", "flex-1", "border-2", "border-dashed", "border-slate-200", "dark:border-slate-800", "rounded-2xl", "p-12", "text-center"], [1, "w-20", "h-20", "bg-slate-50", "dark:bg-slate-900", "rounded-full", "flex", "items-center", "justify-center", "mb-6"], [1, "text-slate-400", "icon-size-10"], [1, "text-lg", "font-medium", "text-slate-900", "dark:text-white"], [1, "text-slate-500", "dark:text-slate-400", "max-w-sm", "mt-2", "mb-6"], ["mat-flat-button", "", "color", "primary", 3, "click"], [1, "mr-2"], [1, "flex", "flex-col", "gap-4"], [1, "text-lg", "font-semibold", "text-slate-900", "dark:text-white"], [1, "bg-white", "dark:bg-slate-900", "rounded-xl", "border", "border-slate-200", "dark:border-slate-800", "overflow-hidden"], [1, "w-full"], [1, "bg-slate-50", "dark:bg-slate-800/50"], [1, "text-left", "px-6", "py-3", "text-xs", "font-semibold", "text-slate-500", "uppercase", "tracking-wider"], [1, "text-right", "px-6", "py-3", "text-xs", "font-semibold", "text-slate-500", "uppercase", "tracking-wider"], [1, "divide-y", "divide-slate-100", "dark:divide-slate-800"], ["class", "hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors cursor-pointer", 3, "click", 4, "ngFor", "ngForOf"], [1, "hover:bg-slate-50", "dark:hover:bg-slate-800/30", "transition-colors", "cursor-pointer", 3, "click"], [1, "px-6", "py-4"], [1, "inline-flex", "items-center", "px-2.5", "py-0.5", "rounded-full", "text-xs", "font-medium", "capitalize", 3, "ngClass"], [1, "px-6", "py-4", "w-48"], ["mode", "determinate", 1, "!h-2", "rounded-full", 3, "value"], [1, "text-sm", "text-slate-500", "whitespace-nowrap"], [1, "flex", "items-center", "gap-1", "text-sm"], [1, "text-green-600"], [1, "text-slate-400"], [1, "text-slate-600", "dark:text-slate-400"], ["class", "text-red-500 ml-1", 4, "ngIf"], [1, "px-6", "py-4", "text-sm", "text-slate-500"], [1, "px-6", "py-4", "text-right"], ["mat-icon-button", "", 3, "click", "matTooltip"], [1, "icon-size-5"], [1, "text-red-500", "ml-1"]], template: function BatchDashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3);
        \u0275\u0275pipe(4, "transloco");
        \u0275\u0275elementStart(5, "mat-icon");
        \u0275\u0275text(6, "arrow_back");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 4);
        \u0275\u0275template(8, BatchDashboardComponent_span_8_Template, 2, 1, "span", 5);
        \u0275\u0275elementStart(9, "div")(10, "h1", 6);
        \u0275\u0275text(11);
        \u0275\u0275pipe(12, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "p", 7);
        \u0275\u0275text(14);
        \u0275\u0275pipe(15, "transloco");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(16, "button", 8);
        \u0275\u0275listener("click", function BatchDashboardComponent_Template_button_click_16_listener() {
          return ctx.createBatch();
        });
        \u0275\u0275elementStart(17, "mat-icon", 9);
        \u0275\u0275text(18, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(19);
        \u0275\u0275pipe(20, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(21, BatchDashboardComponent_div_21_Template, 49, 27, "div", 10)(22, BatchDashboardComponent_div_22_Template, 12, 4, "div", 11)(23, BatchDashboardComponent_div_23_Template, 18, 8, "div", 12)(24, BatchDashboardComponent_div_24_Template, 72, 28, "div", 13)(25, BatchDashboardComponent_div_25_Template, 5, 3, "div", 14)(26, BatchDashboardComponent_div_26_Template, 15, 9, "div", 15)(27, BatchDashboardComponent_div_27_Template, 28, 22, "div", 16);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        let tmp_2_0;
        let tmp_3_0;
        \u0275\u0275advance(3);
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(4, 12, "batchDashboard.backToSmartBatch"));
        \u0275\u0275advance(5);
        \u0275\u0275property("ngIf", ctx.configuration());
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ((tmp_2_0 = ctx.configuration()) == null ? null : tmp_2_0.name) || \u0275\u0275pipeBind1(12, 14, "batchDashboard.loading"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ((tmp_3_0 = ctx.configuration()) == null ? null : tmp_3_0.description) || \u0275\u0275pipeBind1(15, 16, "batchDashboard.batchProcessingDashboard"), " ");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(20, 18, "batchDashboard.createBatch"), " ");
        \u0275\u0275advance(2);
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
    ], encapsulation: ViewEncapsulation.None, template: `<div class="flex flex-col w-full h-full bg-[#f8fafc] dark:bg-[#0f172a] p-6 gap-6">
    <!-- Header -->
    <div class="flex items-center justify-between">
        <div class="flex items-center gap-4">
            <button
                mat-icon-button
                routerLink="/smart-batch"
                [matTooltip]="'batchDashboard.backToSmartBatch' | transloco"
                class="!bg-white dark:!bg-slate-800 !shadow-sm"
            >
                <mat-icon>arrow_back</mat-icon>
            </button>
            <div class="flex items-center gap-3">
                <span class="text-3xl" *ngIf="configuration()">{{
                    getCountryFlag(configuration()!.country)
                }}</span>
                <div>
                    <h1 class="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                        {{ configuration()?.name || ('batchDashboard.loading' | transloco) }}
                    </h1>
                    <p class="text-slate-500 dark:text-slate-400">
                        {{ configuration()?.description || ('batchDashboard.batchProcessingDashboard' | transloco) }}
                    </p>
                </div>
            </div>
        </div>
        <button
            mat-flat-button
            color="primary"
            (click)="createBatch()"
            class="!rounded-lg !px-6 !py-2"
        >
            <mat-icon class="mr-2 icon-size-5">add</mat-icon>
            {{ 'batchDashboard.createBatch' | transloco }}
        </button>
    </div>

    <!-- Summary Cards -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4" *ngIf="configuration()">
        <!-- Steps Count - Clickable -->
        <div
            (click)="toggleStepsPanel()"
            class="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-5 cursor-pointer transition-all hover:shadow-md hover:border-indigo-300 dark:hover:border-indigo-700"
            [class.ring-2]="showStepsPanel()"
            [class.ring-indigo-500]="showStepsPanel()"
        >
            <div class="flex items-center gap-3">
                <div
                    class="w-10 h-10 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center"
                >
                    <mat-icon class="text-indigo-600 dark:text-indigo-400 icon-size-5"
                        >layers</mat-icon
                    >
                </div>
                <div class="flex-1">
                    <span class="block text-xs text-slate-500 uppercase font-medium">{{ 'batchDashboard.steps' | transloco }}</span>
                    <span class="text-xl font-bold text-slate-900 dark:text-white">{{
                        stepsCount()
                    }}</span>
                </div>
                <mat-icon class="text-slate-400 icon-size-4">{{
                    showStepsPanel() ? 'expand_less' : 'expand_more'
                }}</mat-icon>
            </div>
        </div>

        <!-- Strategy -->
        <div
            class="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-5"
        >
            <div class="flex items-center gap-3">
                <div
                    class="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center"
                >
                    <mat-icon class="text-purple-600 dark:text-purple-400 icon-size-5"
                        >account_tree</mat-icon
                    >
                </div>
                <div>
                    <span class="block text-xs text-slate-500 uppercase font-medium">{{ 'batchDashboard.strategy' | transloco }}</span>
                    <span class="text-lg font-semibold text-slate-900 dark:text-white capitalize">
                        {{ configuration()?.mergeStrategy?.replace('-', ' ') }}
                    </span>
                </div>
            </div>
        </div>

        <!-- Format -->
        <div
            class="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-5"
        >
            <div class="flex items-center gap-3">
                <div
                    class="w-10 h-10 rounded-lg bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center"
                >
                    <mat-icon class="text-teal-600 dark:text-teal-400 icon-size-5"
                        >swap_horiz</mat-icon
                    >
                </div>
                <div>
                    <span class="block text-xs text-slate-500 uppercase font-medium">{{ 'batchDashboard.format' | transloco }}</span>
                    <span class="text-lg font-semibold text-slate-900 dark:text-white uppercase">
                        {{ configuration()?.inputFormat }} \u2192 {{ configuration()?.outputFormat }}
                    </span>
                </div>
            </div>
        </div>

        <!-- Cost per Row - Clickable -->
        <div
            (click)="toggleCostPanel()"
            class="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-5 cursor-pointer transition-all hover:shadow-md hover:border-green-300 dark:hover:border-green-700"
            [class.ring-2]="showCostPanel()"
            [class.ring-green-500]="showCostPanel()"
        >
            <div class="flex items-center gap-3">
                <div
                    class="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center"
                >
                    <mat-icon class="text-green-600 dark:text-green-400 icon-size-5"
                        >attach_money</mat-icon
                    >
                </div>
                <div class="flex-1">
                    <span class="block text-xs text-slate-500 uppercase font-medium">{{ 'batchDashboard.costPerRow' | transloco }}</span>
                    <span class="text-xl font-bold text-green-600 dark:text-green-400">
                        \${{ estimatedCostPerRow().toFixed(2) }}
                    </span>
                </div>
                <mat-icon class="text-slate-400 icon-size-4">{{
                    showCostPanel() ? 'expand_less' : 'expand_more'
                }}</mat-icon>
            </div>
        </div>
    </div>

    <!-- Steps Panel (expanded) -->
    <div
        *ngIf="showStepsPanel()"
        class="bg-white dark:bg-slate-900 rounded-xl border border-indigo-200 dark:border-indigo-800 p-5 animate-fade-in"
    >
        <div class="flex items-center justify-between mb-4">
            <h3
                class="text-lg font-semibold text-slate-900 dark:text-white flex items-center gap-2"
            >
                <mat-icon class="text-indigo-600 dark:text-indigo-400">layers</mat-icon>
                {{ 'batchDashboard.processingSteps' | transloco }}
            </h3>
            <button mat-icon-button (click)="toggleStepsPanel()">
                <mat-icon>close</mat-icon>
            </button>
        </div>
        <div class="space-y-3">
            <div
                *ngFor="let step of stepsDetails(); let idx = index"
                class="flex items-center gap-4 p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50"
            >
                <div
                    class="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold text-sm"
                >
                    {{ step.sequence }}
                </div>
                <div class="flex-1">
                    <p class="font-medium text-slate-900 dark:text-white">{{ step.name }}</p>
                    <p
                        *ngIf="step.url"
                        class="text-sm text-slate-500 dark:text-slate-400 font-mono"
                    >
                        {{ step.url }}
                    </p>
                </div>
                <div class="text-right">
                    <span class="text-sm font-medium text-green-600 dark:text-green-400"
                        >\${{ step.price.toFixed(2) }}</span
                    >
                </div>
                <span
                    *ngIf="!step.enabled"
                    class="text-xs px-2 py-0.5 rounded bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400"
                >
                    {{ 'batchDashboard.disabled' | transloco }}
                </span>
            </div>
        </div>
    </div>

    <!-- Cost Breakdown Panel (expanded) -->
    <div
        *ngIf="showCostPanel()"
        class="bg-white dark:bg-slate-900 rounded-xl border border-green-200 dark:border-green-800 p-5 animate-fade-in"
    >
        <div class="flex items-center justify-between mb-4">
            <h3
                class="text-lg font-semibold text-slate-900 dark:text-white flex items-center gap-2"
            >
                <mat-icon class="text-green-600 dark:text-green-400">attach_money</mat-icon>
                {{ 'batchDashboard.costBreakdown' | transloco }}
            </h3>
            <button mat-icon-button (click)="toggleCostPanel()">
                <mat-icon>close</mat-icon>
            </button>
        </div>
        <div class="space-y-2">
            <div
                *ngFor="let step of stepsDetails()"
                class="flex items-center justify-between py-2 border-b border-slate-100 dark:border-slate-800 last:border-0"
            >
                <div class="flex items-center gap-3">
                    <span
                        class="w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-xs font-medium text-slate-600 dark:text-slate-400"
                    >
                        {{ step.sequence }}
                    </span>
                    <span class="text-slate-700 dark:text-slate-300">{{ step.name }}</span>
                </div>
                <span class="font-medium text-slate-900 dark:text-white"
                    >\${{ step.price.toFixed(2) }}</span
                >
            </div>
        </div>
        <div
            class="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between"
        >
            <span class="font-semibold text-slate-900 dark:text-white">{{ 'batchDashboard.totalPerRow' | transloco }}</span>
            <span class="text-2xl font-bold text-green-600 dark:text-green-400"
                >\${{ estimatedCostPerRow().toFixed(2) }}</span
            >
        </div>
    </div>

    <!-- Stats Row (if we have batches) - Professional Design -->
    <div
        *ngIf="stats() && stats()!.totalBatches > 0"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
    >
        <!-- Total Batches -->
        <div
            class="group relative bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 p-6 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-200 hover:shadow-lg hover:shadow-slate-100 dark:hover:shadow-slate-950/20"
        >
            <div class="flex items-start justify-between mb-4">
                <div class="flex items-center gap-3">
                    <div
                        class="w-11 h-11 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center border border-slate-200/60 dark:border-slate-700/60"
                    >
                        <mat-icon class="text-slate-600 dark:text-slate-400 icon-size-5"
                            >inbox</mat-icon
                        >
                    </div>
                </div>
                <div
                    class="px-2.5 py-0.5 rounded-md bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60"
                >
                    <span
                        class="text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider"
                        >{{ 'batchDashboard.total' | transloco }}</span
                    >
                </div>
            </div>
            <div class="space-y-1">
                <p class="text-[13px] font-medium text-slate-500 dark:text-slate-400 tracking-wide">
                    {{ 'batchDashboard.totalBatches' | transloco }}
                </p>
                <p class="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                    {{ stats()!.totalBatches }}
                </p>
            </div>
            <div
                class="absolute inset-0 rounded-2xl bg-gradient-to-br from-slate-500/0 to-slate-500/0 group-hover:from-slate-500/[0.02] group-hover:to-slate-500/[0.01] transition-all duration-200 pointer-events-none"
            ></div>
        </div>

        <!-- Completed Rows -->
        <div
            class="group relative bg-white dark:bg-slate-900 rounded-2xl border border-emerald-200/60 dark:border-emerald-900/40 p-6 hover:border-emerald-300/80 dark:hover:border-emerald-800/60 transition-all duration-200 hover:shadow-lg hover:shadow-emerald-100/50 dark:hover:shadow-emerald-950/20"
        >
            <div class="flex items-start justify-between mb-4">
                <div class="flex items-center gap-3">
                    <div
                        class="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-50 to-emerald-100/80 dark:from-emerald-950/50 dark:to-emerald-900/30 flex items-center justify-center border border-emerald-200/60 dark:border-emerald-800/60"
                    >
                        <mat-icon class="text-emerald-600 dark:text-emerald-400 icon-size-5"
                            >check_circle</mat-icon
                        >
                    </div>
                </div>
                <div
                    class="px-2.5 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200/60 dark:border-emerald-800/40"
                >
                    <span
                        class="text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider"
                        >{{ 'batchDashboard.success' | transloco }}</span
                    >
                </div>
            </div>
            <div class="space-y-1">
                <p class="text-[13px] font-medium text-slate-500 dark:text-slate-400 tracking-wide">
                    {{ 'batchDashboard.completedRows' | transloco }}
                </p>
                <p class="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                    {{ stats()!.completedRows }}
                </p>
            </div>
            <!-- Subtle success indicator bar -->
            <div
                class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500/20 to-emerald-400/20 rounded-b-2xl"
            ></div>
            <div
                class="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/0 to-emerald-500/0 group-hover:from-emerald-500/[0.02] group-hover:to-emerald-500/[0.01] transition-all duration-200 pointer-events-none"
            ></div>
        </div>

        <!-- Pending Rows -->
        <div
            class="group relative bg-white dark:bg-slate-900 rounded-2xl border border-amber-200/60 dark:border-amber-900/40 p-6 hover:border-amber-300/80 dark:hover:border-amber-800/60 transition-all duration-200 hover:shadow-lg hover:shadow-amber-100/50 dark:hover:shadow-amber-950/20"
        >
            <div class="flex items-start justify-between mb-4">
                <div class="flex items-center gap-3">
                    <div
                        class="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-50 to-amber-100/80 dark:from-amber-950/50 dark:to-amber-900/30 flex items-center justify-center border border-amber-200/60 dark:border-amber-800/60"
                    >
                        <mat-icon class="text-amber-600 dark:text-amber-400 icon-size-5"
                            >schedule</mat-icon
                        >
                    </div>
                </div>
                <div
                    class="px-2.5 py-0.5 rounded-md bg-amber-50 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-800/40"
                >
                    <span
                        class="text-[10px] font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wider"
                        >{{ 'batchDashboard.queue' | transloco }}</span
                    >
                </div>
            </div>
            <div class="space-y-1">
                <p class="text-[13px] font-medium text-slate-500 dark:text-slate-400 tracking-wide">
                    {{ 'batchDashboard.pendingRows' | transloco }}
                </p>
                <p class="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                    {{ stats()!.pendingRows }}
                </p>
            </div>
            <!-- Subtle pending indicator bar -->
            <div
                class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500/20 to-amber-400/20 rounded-b-2xl"
            ></div>
            <div
                class="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-500/0 to-amber-500/0 group-hover:from-amber-500/[0.02] group-hover:to-amber-500/[0.01] transition-all duration-200 pointer-events-none"
            ></div>
        </div>

        <!-- Failed Rows -->
        <div
            class="group relative bg-white dark:bg-slate-900 rounded-2xl border border-rose-200/60 dark:border-rose-900/40 p-6 hover:border-rose-300/80 dark:hover:border-rose-800/60 transition-all duration-200 hover:shadow-lg hover:shadow-rose-100/50 dark:hover:shadow-rose-950/20"
        >
            <div class="flex items-start justify-between mb-4">
                <div class="flex items-center gap-3">
                    <div
                        class="w-11 h-11 rounded-xl bg-gradient-to-br from-rose-50 to-rose-100/80 dark:from-rose-950/50 dark:to-rose-900/30 flex items-center justify-center border border-rose-200/60 dark:border-rose-800/60"
                    >
                        <mat-icon class="text-rose-600 dark:text-rose-400 icon-size-5"
                            >error_outline</mat-icon
                        >
                    </div>
                </div>
                <div
                    class="px-2.5 py-0.5 rounded-md bg-rose-50 dark:bg-rose-950/30 border border-rose-200/60 dark:border-rose-800/40"
                >
                    <span
                        class="text-[10px] font-semibold text-rose-600 dark:text-rose-400 uppercase tracking-wider"
                        >{{ 'batchDashboard.error' | transloco }}</span
                    >
                </div>
            </div>
            <div class="space-y-1">
                <p class="text-[13px] font-medium text-slate-500 dark:text-slate-400 tracking-wide">
                    {{ 'batchDashboard.failedRows' | transloco }}
                </p>
                <p class="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                    {{ stats()!.failedRows }}
                </p>
            </div>
            <!-- Subtle error indicator bar -->
            <div
                class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-500/20 to-rose-400/20 rounded-b-2xl"
            ></div>
            <div
                class="absolute inset-0 rounded-2xl bg-gradient-to-br from-rose-500/0 to-rose-500/0 group-hover:from-rose-500/[0.02] group-hover:to-rose-500/[0.01] transition-all duration-200 pointer-events-none"
            ></div>
        </div>
    </div>

    <!-- Loading State -->
    <div *ngIf="isLoading()" class="flex flex-col items-center justify-center flex-1">
        <mat-spinner diameter="48"></mat-spinner>
        <p class="mt-4 text-slate-500">{{ 'batchDashboard.loadingBatches' | transloco }}</p>
    </div>

    <!-- Empty State -->
    <div
        *ngIf="!isLoading() && batches().length === 0"
        class="flex flex-col items-center justify-center flex-1 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-2xl p-12 text-center"
    >
        <div
            class="w-20 h-20 bg-slate-50 dark:bg-slate-900 rounded-full flex items-center justify-center mb-6"
        >
            <mat-icon class="text-slate-400 icon-size-10">inbox</mat-icon>
        </div>
        <h3 class="text-lg font-medium text-slate-900 dark:text-white">{{ 'batchDashboard.noBatchesYet' | transloco }}</h3>
        <p class="text-slate-500 dark:text-slate-400 max-w-sm mt-2 mb-6">
            {{ 'batchDashboard.createFirstBatchDescription' | transloco }}
        </p>
        <button mat-flat-button color="primary" (click)="createBatch()">
            <mat-icon class="mr-2">add</mat-icon>
            {{ 'batchDashboard.createFirstBatch' | transloco }}
        </button>
    </div>

    <!-- Batches List -->
    <div *ngIf="!isLoading() && batches().length > 0" class="flex flex-col gap-4">
        <h2 class="text-lg font-semibold text-slate-900 dark:text-white">{{ 'batchDashboard.batches' | transloco }}</h2>

        <div
            class="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden"
        >
            <table class="w-full">
                <thead class="bg-slate-50 dark:bg-slate-800/50">
                    <tr>
                        <th
                            class="text-left px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider"
                        >
                            {{ 'batchDashboard.name' | transloco }}
                        </th>
                        <th
                            class="text-left px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider"
                        >
                            {{ 'batchDashboard.status' | transloco }}
                        </th>
                        <th
                            class="text-left px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider"
                        >
                            {{ 'batchDashboard.progress' | transloco }}
                        </th>
                        <th
                            class="text-left px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider"
                        >
                            {{ 'batchDashboard.rows' | transloco }}
                        </th>
                        <th
                            class="text-left px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider"
                        >
                            {{ 'batchDashboard.created' | transloco }}
                        </th>
                        <th
                            class="text-right px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider"
                        >
                            {{ 'batchDashboard.actions' | transloco }}
                        </th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
                    <tr
                        *ngFor="let batch of batches()"
                        class="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors cursor-pointer"
                        (click)="viewBatch(batch._id!)"
                    >
                        <td class="px-6 py-4">
                            <span class="font-medium text-slate-900 dark:text-white">{{
                                batch.name
                            }}</span>
                        </td>
                        <td class="px-6 py-4">
                            <span
                                class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize"
                                [ngClass]="getStatusColor(batch.status)"
                            >
                                {{ ('batchProcessing.' + batch.status) | transloco }}
                            </span>
                        </td>
                        <td class="px-6 py-4 w-48">
                            <div class="flex items-center gap-3">
                                <mat-progress-bar
                                    mode="determinate"
                                    [value]="getBatchProgress(batch)"
                                    class="!h-2 rounded-full"
                                ></mat-progress-bar>
                                <span class="text-sm text-slate-500 whitespace-nowrap">
                                    {{ getBatchProgress(batch).toFixed(0) }}%
                                </span>
                            </div>
                        </td>
                        <td class="px-6 py-4">
                            <div class="flex items-center gap-1 text-sm">
                                <span class="text-green-600">{{ batch.completedRows }}</span>
                                <span class="text-slate-400">/</span>
                                <span class="text-slate-600 dark:text-slate-400">{{
                                    batch.totalRows
                                }}</span>
                                <span *ngIf="batch.failedRows > 0" class="text-red-500 ml-1"
                                    >({{ 'batchDashboard.failedCount' | transloco: { count: batch.failedRows } }})</span
                                >
                            </div>
                        </td>
                        <td class="px-6 py-4 text-sm text-slate-500">
                            {{ formatDate(batch.createdAt) }}
                        </td>
                        <td class="px-6 py-4 text-right">
                            <button
                                mat-icon-button
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
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BatchDashboardComponent, { className: "BatchDashboardComponent", filePath: "src/app/modules/smart-batch/dashboard/batch-dashboard.component.ts", lineNumber: 35 });
})();
export {
  BatchDashboardComponent
};
//# sourceMappingURL=chunk-I45DN3RZ.js.map
