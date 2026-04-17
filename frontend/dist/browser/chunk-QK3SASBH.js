import {
  MatButtonToggle,
  MatButtonToggleGroup,
  MatButtonToggleModule
} from "./chunk-ZS5MQPSO.js";
import {
  SmartBatchService
} from "./chunk-6YNO6YW5.js";
import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-BJ35R4KE.js";
import {
  fuseAnimations
} from "./chunk-CK3XZJWG.js";
import "./chunk-346ISJSG.js";
import {
  MatInputModule
} from "./chunk-HZKTYM3F.js";
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
  ActivatedRoute,
  Router,
  RouterModule
} from "./chunk-LHOHCIQM.js";
import {
  MatFormFieldModule
} from "./chunk-3YVZWUPK.js";
import "./chunk-L4JZMXIC.js";
import "./chunk-2W5F3UIW.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-TX3AVWPC.js";
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
  DecimalPipe,
  MatButton,
  MatButtonModule,
  MatIconButton,
  NgClass,
  Subject,
  ViewChild,
  computed,
  firstValueFrom,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
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
  ɵɵpureFunction5,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-YTOBX75K.js";
import {
  __async,
  __spreadValues
} from "./chunk-KTESVR3Q.js";

// src/app/modules/smart-batch/dashboard/batch-processing/batch-processing.component.ts
var _c0 = ["rowDetailPanel"];
var _c1 = (a0, a1, a2, a3, a4) => ({ "bg-emerald-100 text-emerald-700": a0, "bg-amber-100 text-amber-700": a1, "bg-blue-100 text-blue-700": a2, "bg-red-100 text-red-700": a3, "bg-gray-100 text-gray-600": a4 });
var _c2 = (a0) => ({ index: a0 });
var _c3 = (a0) => ({ step: a0 });
var _c4 = (a0, a1) => ({ step: a0, code: a1 });
var _forTrack0 = ($index, $item) => $item.sequence;
var _forTrack1 = ($index, $item) => $item.rowIndex;
var _forTrack2 = ($index, $item) => $item.label;
var _forTrack3 = ($index, $item) => $item.step;
function BatchProcessingComponent_Conditional_21_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 20);
    \u0275\u0275text(1, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "batchProcessing.starting"), " ");
  }
}
function BatchProcessingComponent_Conditional_21_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "play_arrow");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "batchProcessing.startProcessing"), " ");
  }
}
function BatchProcessingComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275listener("click", function BatchProcessingComponent_Conditional_21_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.startProcessing());
    });
    \u0275\u0275elementStart(1, "span", 19);
    \u0275\u0275template(2, BatchProcessingComponent_Conditional_21_Conditional_2_Template, 4, 3)(3, BatchProcessingComponent_Conditional_21_Conditional_3_Template, 4, 3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r1.isStarting());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.isStarting() ? 2 : 3);
  }
}
function BatchProcessingComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275listener("click", function BatchProcessingComponent_Conditional_22_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.pauseProcessing());
    });
    \u0275\u0275elementStart(1, "span", 19)(2, "mat-icon");
    \u0275\u0275text(3, "pause");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 1, "batchProcessing.pause"), " ");
  }
}
function BatchProcessingComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275listener("click", function BatchProcessingComponent_Conditional_23_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.generateReport());
    });
    \u0275\u0275elementStart(1, "span", 19)(2, "mat-icon");
    \u0275\u0275text(3, "description");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 1, "batchProcessing.generateReport"), " ");
  }
}
function BatchProcessingComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 23)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(7, "mat-progress-bar", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 3, "batchProcessing.processing"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.progress(), "%");
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.progress());
  }
}
function BatchProcessingComponent_Conditional_25_For_7_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("matTooltip", ctx_r1.getStepUrl(step_r5));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getStepUrl(step_r5), " ");
  }
}
function BatchProcessingComponent_Conditional_25_For_7_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 34);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(2, 2, ctx_r1.getStepPrice(step_r5), "1.2-2"), " ", \u0275\u0275pipeBind1(3, 5, "batchProcessing.credits"), " ");
  }
}
function BatchProcessingComponent_Conditional_25_For_7_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 35);
    \u0275\u0275text(1, "arrow_forward");
    \u0275\u0275elementEnd();
  }
}
function BatchProcessingComponent_Conditional_25_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 30);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 31)(4, "span", 32);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, BatchProcessingComponent_Conditional_25_For_7_Conditional_6_Template, 2, 2, "span", 33)(7, BatchProcessingComponent_Conditional_25_For_7_Conditional_7_Template, 4, 7, "span", 34);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, BatchProcessingComponent_Conditional_25_For_7_Conditional_8_Template, 2, 0, "mat-icon", 35);
  }
  if (rf & 2) {
    const step_r5 = ctx.$implicit;
    const \u0275$index_97_r6 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", step_r5.sequence, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("matTooltip", ctx_r1.getStepName(step_r5));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getStepName(step_r5), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.getStepUrl(step_r5) ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.getStepPrice(step_r5) > 0 ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(\u0275$index_97_r6 < ctx_r1.configSteps().length - 1 ? 8 : -1);
  }
}
function BatchProcessingComponent_Conditional_25_Conditional_8_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275listener("click", function BatchProcessingComponent_Conditional_25_Conditional_8_Conditional_29_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.setRecordFilter("failed"));
    });
    \u0275\u0275elementStart(1, "div", 52)(2, "mat-icon", 53);
    \u0275\u0275text(3, "error");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 40)(5, "p", 54);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 55);
    \u0275\u0275text(9);
    \u0275\u0275elementStart(10, "span", 56);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "transloco");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("ring-2", ctx_r1.recordFilter() === "failed")("ring-red-400", ctx_r1.recordFilter() === "failed");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 7, "batchProcessing.failed"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.failedRows().length, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 9, "batchProcessing.requestsFailed"));
  }
}
function BatchProcessingComponent_Conditional_25_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 36)(2, "div", 37)(3, "div", 38)(4, "mat-icon", 39);
    \u0275\u0275text(5, "payments");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 40)(7, "p", 41);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 42);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementStart(13, "span", 43);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "transloco");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(16, "div", 44);
    \u0275\u0275listener("click", function BatchProcessingComponent_Conditional_25_Conditional_8_Template_div_click_16_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setRecordFilter("completed"));
    });
    \u0275\u0275elementStart(17, "div", 45)(18, "mat-icon", 46);
    \u0275\u0275text(19, "check_circle");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 40)(21, "p", 47);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "p", 48);
    \u0275\u0275text(25);
    \u0275\u0275elementStart(26, "span", 49);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "transloco");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(29, BatchProcessingComponent_Conditional_25_Conditional_8_Conditional_29_Template, 13, 11, "div", 50);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 11, "batchProcessing.totalCost"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(12, 13, ctx_r1.totalCreditsCost(), "1.2-2"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 16, "batchProcessing.credits"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("ring-2", ctx_r1.recordFilter() === "completed")("ring-emerald-400", ctx_r1.recordFilter() === "completed");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(23, 18, "batchProcessing.successful"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.completedRows().length, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(28, 20, "batchProcessing.requestsSuccessful"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.failedRows().length > 0 ? 29 : -1);
  }
}
function BatchProcessingComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 25)(2, "h3", 26);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 27);
    \u0275\u0275repeaterCreate(6, BatchProcessingComponent_Conditional_25_For_7_Template, 9, 6, null, null, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, BatchProcessingComponent_Conditional_25_Conditional_8_Template, 30, 22, "div", 28);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "batchProcessing.processingSteps"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.configSteps());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.completedRows().length > 0 || ctx_r1.failedRows().length > 0 ? 8 : -1);
  }
}
function BatchProcessingComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275element(1, "mat-spinner", 57);
    \u0275\u0275elementEnd();
  }
}
function BatchProcessingComponent_Conditional_28_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 62);
    \u0275\u0275listener("click", function BatchProcessingComponent_Conditional_28_Conditional_16_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setRecordFilter("failed"));
    });
    \u0275\u0275elementStart(1, "span", 64);
    \u0275\u0275element(2, "span", 77);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementStart(5, "span", 66);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", ctx_r1.recordFilter() === "failed" ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-700");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 3, "batchProcessing.failed"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.failedRows().length);
  }
}
function BatchProcessingComponent_Conditional_28_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 78);
    \u0275\u0275listener("click", function BatchProcessingComponent_Conditional_28_Conditional_22_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateSearchQuery(""));
    });
    \u0275\u0275elementStart(1, "mat-icon", 79);
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function BatchProcessingComponent_Conditional_28_Conditional_31_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 81);
    \u0275\u0275listener("click", function BatchProcessingComponent_Conditional_28_Conditional_31_For_1_Template_div_click_0_listener() {
      const row_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.selectRow(row_r13));
    });
    \u0275\u0275elementStart(1, "div", 82)(2, "span", 83);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 40)(5, "p", 84);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 85)(9, "span", 86);
    \u0275\u0275element(10, "span", 87);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "transloco");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_12_0;
    const row_r13 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("bg-indigo-50", ((tmp_12_0 = ctx_r1.selectedRow()) == null ? null : tmp_12_0.rowIndex) === row_r13.rowIndex);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", row_r13.rowIndex + 1, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (row_r13.inputData == null ? null : row_r13.inputData.documentNumber) || (row_r13.inputData == null ? null : row_r13.inputData.name) || \u0275\u0275pipeBind2(7, 5, "batchProcessing.rowNumber", \u0275\u0275pureFunction1(10, _c2, row_r13.rowIndex + 1)), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 8, "batchProcessing." + row_r13.status), " ");
  }
}
function BatchProcessingComponent_Conditional_28_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, BatchProcessingComponent_Conditional_28_Conditional_31_For_1_Template, 13, 12, "div", 80, _forTrack1);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r1.pendingRows());
  }
}
function BatchProcessingComponent_Conditional_28_Conditional_32_For_1_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 91)(1, "mat-icon", 94);
    \u0275\u0275text(2, "check");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const step_r16 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("matTooltip", ctx_r1.getStepName(step_r16));
  }
}
function BatchProcessingComponent_Conditional_28_Conditional_32_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 81);
    \u0275\u0275listener("click", function BatchProcessingComponent_Conditional_28_Conditional_32_For_1_Template_div_click_0_listener() {
      const row_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.selectRow(row_r15));
    });
    \u0275\u0275elementStart(1, "div", 82)(2, "span", 88);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 40)(5, "p", 84);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 89)(9, "div", 90);
    \u0275\u0275repeaterCreate(10, BatchProcessingComponent_Conditional_28_Conditional_32_For_1_For_11_Template, 3, 1, "div", 91, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 92);
    \u0275\u0275element(13, "span", 65);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "mat-icon", 93);
    \u0275\u0275text(17, "chevron_right");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_12_0;
    const row_r15 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("bg-indigo-50", ((tmp_12_0 = ctx_r1.selectedRow()) == null ? null : tmp_12_0.rowIndex) === row_r15.rowIndex);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", row_r15.rowIndex + 1, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (row_r15.inputData == null ? null : row_r15.inputData.documentNumber) || (row_r15.inputData == null ? null : row_r15.inputData.name) || \u0275\u0275pipeBind2(7, 5, "batchProcessing.rowNumber", \u0275\u0275pureFunction1(10, _c2, row_r15.rowIndex + 1)), " ");
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.configSteps());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 8, "batchProcessing.verified"), " ");
  }
}
function BatchProcessingComponent_Conditional_28_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, BatchProcessingComponent_Conditional_28_Conditional_32_For_1_Template, 18, 12, "div", 80, _forTrack1);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r1.completedRows());
  }
}
function BatchProcessingComponent_Conditional_28_Conditional_33_For_1_For_14_Case_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 91);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275elementStart(2, "mat-icon", 94);
    \u0275\u0275text(3, "check");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const step_r19 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind2(1, 1, "batchProcessing.stepStatusCompleted", \u0275\u0275pureFunction1(4, _c3, ctx_r1.getStepName(step_r19))));
  }
}
function BatchProcessingComponent_Conditional_28_Conditional_33_For_1_For_14_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 99);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275elementStart(2, "mat-icon", 101);
    \u0275\u0275text(3, "close");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const step_r19 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind2(1, 1, "batchProcessing.stepStatusFailed", \u0275\u0275pureFunction1(4, _c3, ctx_r1.getStepName(step_r19))));
  }
}
function BatchProcessingComponent_Conditional_28_Conditional_33_For_1_For_14_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 100);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275elementStart(2, "mat-icon", 102);
    \u0275\u0275text(3, "remove");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const step_r19 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind2(1, 1, "batchProcessing.stepStatusSkipped", \u0275\u0275pureFunction1(4, _c3, ctx_r1.getStepName(step_r19))));
  }
}
function BatchProcessingComponent_Conditional_28_Conditional_33_For_1_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, BatchProcessingComponent_Conditional_28_Conditional_33_For_1_For_14_Case_0_Template, 4, 6, "div", 91)(1, BatchProcessingComponent_Conditional_28_Conditional_33_For_1_For_14_Case_1_Template, 4, 6, "div", 99)(2, BatchProcessingComponent_Conditional_28_Conditional_33_For_1_For_14_Case_2_Template, 4, 6, "div", 100);
  }
  if (rf & 2) {
    let tmp_22_0;
    const step_r19 = ctx.$implicit;
    const row_r18 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional((tmp_22_0 = ctx_r1.getRowStepStatus(row_r18, step_r19.sequence)) === "completed" ? 0 : tmp_22_0 === "failed" ? 1 : 2);
  }
}
function BatchProcessingComponent_Conditional_28_Conditional_33_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 81);
    \u0275\u0275listener("click", function BatchProcessingComponent_Conditional_28_Conditional_33_For_1_Template_div_click_0_listener() {
      const row_r18 = \u0275\u0275restoreView(_r17).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.selectRow(row_r18));
    });
    \u0275\u0275elementStart(1, "div", 82)(2, "span", 96);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 40)(5, "p", 84);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 97);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 89)(12, "div", 90);
    \u0275\u0275repeaterCreate(13, BatchProcessingComponent_Conditional_28_Conditional_33_For_1_For_14_Template, 3, 1, null, null, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 98);
    \u0275\u0275element(16, "span", 77);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "mat-icon", 93);
    \u0275\u0275text(20, "chevron_right");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_12_0;
    const row_r18 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("bg-red-50", ((tmp_12_0 = ctx_r1.selectedRow()) == null ? null : tmp_12_0.rowIndex) === row_r18.rowIndex);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", row_r18.rowIndex + 1, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (row_r18.inputData == null ? null : row_r18.inputData.documentNumber) || (row_r18.inputData == null ? null : row_r18.inputData.name) || \u0275\u0275pipeBind2(7, 6, "batchProcessing.rowNumber", \u0275\u0275pureFunction1(13, _c2, row_r18.rowIndex + 1)), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (row_r18.errors == null ? null : row_r18.errors[0] == null ? null : row_r18.errors[0].message) || \u0275\u0275pipeBind1(10, 9, "batchProcessing.failed"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.configSteps());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 11, "batchProcessing.failed"), " ");
  }
}
function BatchProcessingComponent_Conditional_28_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, BatchProcessingComponent_Conditional_28_Conditional_33_For_1_Template, 21, 15, "div", 95, _forTrack1);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r1.failedRows());
  }
}
function BatchProcessingComponent_Conditional_28_Conditional_34_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "batchProcessing.noResultsFound"), " ");
  }
}
function BatchProcessingComponent_Conditional_28_Conditional_34_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "batchProcessing.noCompletedRecordsYet"), " ");
  }
}
function BatchProcessingComponent_Conditional_28_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75)(1, "mat-icon", 103);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 104);
    \u0275\u0275template(4, BatchProcessingComponent_Conditional_28_Conditional_34_Conditional_4_Template, 2, 3)(5, BatchProcessingComponent_Conditional_28_Conditional_34_Conditional_5_Template, 2, 3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.searchQuery() ? "search_off" : "hourglass_empty");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.searchQuery() ? 4 : 5);
  }
}
function BatchProcessingComponent_Conditional_28_Conditional_35_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 105)(1, "div", 4);
    \u0275\u0275element(2, "div", 106)(3, "div", 107);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 108);
    \u0275\u0275element(5, "div", 109);
    \u0275\u0275elementStart(6, "div", 110);
    \u0275\u0275element(7, "div", 111)(8, "div", 112)(9, "div", 113);
    \u0275\u0275elementEnd()()();
  }
}
function BatchProcessingComponent_Conditional_28_Conditional_35_Conditional_3_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 126);
    \u0275\u0275listener("click", function BatchProcessingComponent_Conditional_28_Conditional_35_Conditional_3_Conditional_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.generateRowReport(ctx_r1.selectedRow()));
    });
    \u0275\u0275elementStart(1, "mat-icon", 127);
    \u0275\u0275text(2, "picture_as_pdf");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "batchProcessing.generatePdfReport"), " ");
  }
}
function BatchProcessingComponent_Conditional_28_Conditional_35_Conditional_3_Conditional_21_Conditional_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 130)(1, "span", 131);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 132);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const field_r22 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(field_r22.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(field_r22.value);
  }
}
function BatchProcessingComponent_Conditional_28_Conditional_35_Conditional_3_Conditional_21_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 128);
    \u0275\u0275repeaterCreate(1, BatchProcessingComponent_Conditional_28_Conditional_35_Conditional_3_Conditional_21_Conditional_1_For_2_Template, 5, 2, "div", 130, _forTrack2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.getInputDataFields());
  }
}
function BatchProcessingComponent_Conditional_28_Conditional_35_Conditional_3_Conditional_21_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 129);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function BatchProcessingComponent_Conditional_28_Conditional_35_Conditional_3_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 124);
    \u0275\u0275template(1, BatchProcessingComponent_Conditional_28_Conditional_35_Conditional_3_Conditional_21_Conditional_1_Template, 3, 0, "div", 128)(2, BatchProcessingComponent_Conditional_28_Conditional_35_Conditional_3_Conditional_21_Conditional_2_Template, 2, 0, "p", 129);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.getInputDataFields().length > 0 ? 1 : 2);
  }
}
function BatchProcessingComponent_Conditional_28_Conditional_35_Conditional_3_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "pre", 125);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.formatJson((tmp_5_0 = ctx_r1.selectedRow()) == null ? null : tmp_5_0.inputData));
  }
}
function BatchProcessingComponent_Conditional_28_Conditional_35_Conditional_3_Conditional_23_For_6_Conditional_10_Conditional_0_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 130)(1, "span", 131);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 132);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const field_r23 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(field_r23.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(field_r23.value);
  }
}
function BatchProcessingComponent_Conditional_28_Conditional_35_Conditional_3_Conditional_23_For_6_Conditional_10_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 139)(1, "div", 128);
    \u0275\u0275repeaterCreate(2, BatchProcessingComponent_Conditional_28_Conditional_35_Conditional_3_Conditional_23_For_6_Conditional_10_Conditional_0_For_3_Template, 5, 2, "div", 130, _forTrack2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_17_0;
    const step_r24 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.getStepResultFields((tmp_17_0 = ctx_r1.selectedRow()) == null ? null : tmp_17_0.results == null ? null : tmp_17_0.results[step_r24.sequence]));
  }
}
function BatchProcessingComponent_Conditional_28_Conditional_35_Conditional_3_Conditional_23_For_6_Conditional_10_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 139)(1, "pre", 140);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_17_0;
    const step_r24 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatJson((tmp_17_0 = ctx_r1.selectedRow()) == null ? null : tmp_17_0.results == null ? null : tmp_17_0.results[step_r24.sequence]));
  }
}
function BatchProcessingComponent_Conditional_28_Conditional_35_Conditional_3_Conditional_23_For_6_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, BatchProcessingComponent_Conditional_28_Conditional_35_Conditional_3_Conditional_23_For_6_Conditional_10_Conditional_0_Template, 4, 0, "div", 139)(1, BatchProcessingComponent_Conditional_28_Conditional_35_Conditional_3_Conditional_23_For_6_Conditional_10_Conditional_1_Template, 3, 1, "div", 139);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275conditional(ctx_r1.detailsViewMode() === "readable" ? 0 : 1);
  }
}
function BatchProcessingComponent_Conditional_28_Conditional_35_Conditional_3_Conditional_23_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 134)(1, "div", 135)(2, "div", 89)(3, "div", 136);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 137);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 138);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(10, BatchProcessingComponent_Conditional_28_Conditional_35_Conditional_3_Conditional_23_For_6_Conditional_10_Template, 2, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_20_0;
    const step_r24 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r1.getRowStepStatus(ctx_r1.selectedRow(), step_r24.sequence) === "completed" ? "bg-emerald-100 text-emerald-600" : ctx_r1.getRowStepStatus(ctx_r1.selectedRow(), step_r24.sequence) === "failed" ? "bg-red-100 text-red-600" : "bg-gray-100 text-gray-500");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", step_r24.sequence, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getStepName(step_r24));
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.getRowStepStatus(ctx_r1.selectedRow(), step_r24.sequence) === "completed" ? "bg-emerald-100 text-emerald-600" : ctx_r1.getRowStepStatus(ctx_r1.selectedRow(), step_r24.sequence) === "failed" ? "bg-red-100 text-red-600" : "bg-gray-100 text-gray-500");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 8, "batchProcessing." + ctx_r1.getRowStepStatus(ctx_r1.selectedRow(), step_r24.sequence)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(((tmp_20_0 = ctx_r1.selectedRow()) == null ? null : tmp_20_0.results == null ? null : tmp_20_0.results[step_r24.sequence]) ? 10 : -1);
  }
}
function BatchProcessingComponent_Conditional_28_Conditional_35_Conditional_3_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 121)(1, "h4", 122);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 133);
    \u0275\u0275repeaterCreate(5, BatchProcessingComponent_Conditional_28_Conditional_35_Conditional_3_Conditional_23_For_6_Template, 11, 10, "div", 134, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "batchProcessing.stepResults"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.configSteps());
  }
}
function BatchProcessingComponent_Conditional_28_Conditional_35_Conditional_3_Conditional_24_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 143)(1, "p", 144);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 145);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const error_r25 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 2, "batchProcessing.stepError", \u0275\u0275pureFunction2(5, _c4, error_r25.step, error_r25.code)), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", error_r25.message, " ");
  }
}
function BatchProcessingComponent_Conditional_28_Conditional_35_Conditional_3_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "h4", 141);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 142);
    \u0275\u0275repeaterCreate(5, BatchProcessingComponent_Conditional_28_Conditional_35_Conditional_3_Conditional_24_For_6_Template, 6, 8, "div", 143, _forTrack3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "batchProcessing.errors"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.selectedRow().errors);
  }
}
function BatchProcessingComponent_Conditional_28_Conditional_35_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 114)(1, "h3", 115);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 89)(5, "mat-button-toggle-group", 116);
    \u0275\u0275listener("change", function BatchProcessingComponent_Conditional_28_Conditional_35_Conditional_3_Template_mat_button_toggle_group_change_5_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.detailsViewMode.set($event.value));
    });
    \u0275\u0275elementStart(6, "mat-button-toggle", 117);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "mat-button-toggle", 118);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, BatchProcessingComponent_Conditional_28_Conditional_35_Conditional_3_Conditional_12_Template, 5, 3, "button", 119);
    \u0275\u0275elementStart(13, "button", 120);
    \u0275\u0275listener("click", function BatchProcessingComponent_Conditional_28_Conditional_35_Conditional_3_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.selectedRow.set(null));
    });
    \u0275\u0275elementStart(14, "mat-icon");
    \u0275\u0275text(15, "close");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(16, "div", 121)(17, "h4", 122);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 123);
    \u0275\u0275template(21, BatchProcessingComponent_Conditional_28_Conditional_35_Conditional_3_Conditional_21_Template, 3, 1, "div", 124)(22, BatchProcessingComponent_Conditional_28_Conditional_35_Conditional_3_Conditional_22_Template, 2, 1, "pre", 125);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(23, BatchProcessingComponent_Conditional_28_Conditional_35_Conditional_3_Conditional_23_Template, 7, 3, "div", 121)(24, BatchProcessingComponent_Conditional_28_Conditional_35_Conditional_3_Conditional_24_Template, 7, 3, "div");
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_8_0;
    let tmp_11_0;
    let tmp_12_0;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 9, "batchProcessing.rowDetails", \u0275\u0275pureFunction1(18, _c2, ((tmp_4_0 = (tmp_4_0 = ctx_r1.selectedRow()) == null ? null : tmp_4_0.rowIndex) !== null && tmp_4_0 !== void 0 ? tmp_4_0 : 0) + 1)), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("value", ctx_r1.detailsViewMode());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 12, "batchProcessing.readable"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 14, "batchProcessing.json"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(((tmp_8_0 = ctx_r1.selectedRow()) == null ? null : tmp_8_0.status) === "completed" ? 12 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 16, "batchProcessing.inputData"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.detailsViewMode() === "readable" ? 21 : 22);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.configSteps().length > 0 && ((tmp_11_0 = ctx_r1.selectedRow()) == null ? null : tmp_11_0.results) ? 23 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_12_0 = ctx_r1.selectedRow()) == null ? null : tmp_12_0.errors) && ctx_r1.selectedRow().errors.length > 0 ? 24 : -1);
  }
}
function BatchProcessingComponent_Conditional_28_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 76, 0);
    \u0275\u0275template(2, BatchProcessingComponent_Conditional_28_Conditional_35_Conditional_2_Template, 10, 0, "div", 105)(3, BatchProcessingComponent_Conditional_28_Conditional_35_Conditional_3_Template, 25, 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.isLoadingDetail() ? 2 : 3);
  }
}
function BatchProcessingComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 58)(1, "div", 59)(2, "div", 60)(3, "div", 61)(4, "button", 62);
    \u0275\u0275listener("click", function BatchProcessingComponent_Conditional_28_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setRecordFilter("all"));
    });
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementStart(7, "span", 63);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 62);
    \u0275\u0275listener("click", function BatchProcessingComponent_Conditional_28_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setRecordFilter("completed"));
    });
    \u0275\u0275elementStart(10, "span", 64);
    \u0275\u0275element(11, "span", 65);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "transloco");
    \u0275\u0275elementStart(14, "span", 66);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(16, BatchProcessingComponent_Conditional_28_Conditional_16_Template, 7, 5, "button", 67);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 68)(18, "mat-icon", 69);
    \u0275\u0275text(19, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "input", 70);
    \u0275\u0275pipe(21, "transloco");
    \u0275\u0275listener("ngModelChange", function BatchProcessingComponent_Conditional_28_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateSearchQuery($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(22, BatchProcessingComponent_Conditional_28_Conditional_22_Template, 3, 0, "button", 71);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 72)(24, "span", 73);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span", 73);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 74);
    \u0275\u0275template(31, BatchProcessingComponent_Conditional_28_Conditional_31_Template, 2, 0)(32, BatchProcessingComponent_Conditional_28_Conditional_32_Template, 2, 0)(33, BatchProcessingComponent_Conditional_28_Conditional_33_Template, 2, 0)(34, BatchProcessingComponent_Conditional_28_Conditional_34_Template, 6, 2, "div", 75);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(35, BatchProcessingComponent_Conditional_28_Conditional_35_Template, 4, 1, "div", 76);
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ctx_r1.recordFilter() === "all" ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-700");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 17, "batchProcessing.all"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(((tmp_3_0 = ctx_r1.batch()) == null ? null : tmp_3_0.totalRows) || 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.recordFilter() === "completed" ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-700");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 19, "batchProcessing.successful"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.completedRows().length);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.failedRows().length > 0 ? 16 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r1.searchQuery())("placeholder", \u0275\u0275pipeBind1(21, 21, "smartReport.searchRecords"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.searchQuery() ? 22 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 23, "batchProcessing.records"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(29, 25, "batchProcessing.status"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.recordFilter() === "all" ? 31 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.recordFilter() !== "failed" ? 32 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.recordFilter() !== "completed" ? 33 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.pendingRows().length === 0 && ctx_r1.completedRows().length === 0 && ctx_r1.failedRows().length === 0 ? 34 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.selectedRow() ? 35 : -1);
  }
}
var BatchProcessingComponent = class _BatchProcessingComponent {
  constructor() {
    this._route = inject(ActivatedRoute);
    this._router = inject(Router);
    this._smartBatchService = inject(SmartBatchService);
    this._destroy$ = new Subject();
    this._processingAborted = false;
    this.configId = signal(null);
    this.batchId = signal(null);
    this.batch = signal(null);
    this.configuration = signal(null);
    this.isLoading = signal(true);
    this.isProcessing = signal(false);
    this.isStarting = signal(false);
    this.currentRowIndex = signal(null);
    this.currentStepIndex = signal(null);
    this.configSteps = computed(() => {
      const config = this.configuration();
      if (!config?.steps)
        return [];
      return config.steps.filter((s) => s.enabled).sort((a, b) => a.sequence - b.sequence);
    });
    this.pendingRows = computed(() => {
      const b = this.batch();
      if (!b?.rows)
        return [];
      const query = this.searchQuery().toLowerCase().trim();
      let rows = b.rows.filter((r) => r.status === "pending" || r.status === "processing");
      if (query)
        rows = rows.filter((r) => this._matchesSearch(r, query));
      return rows;
    });
    this.completedRows = computed(() => {
      const b = this.batch();
      if (!b?.rows)
        return [];
      const query = this.searchQuery().toLowerCase().trim();
      let rows = b.rows.filter((r) => r.status === "completed");
      if (query)
        rows = rows.filter((r) => this._matchesSearch(r, query));
      return rows;
    });
    this.failedRows = computed(() => {
      const b = this.batch();
      if (!b?.rows)
        return [];
      const query = this.searchQuery().toLowerCase().trim();
      let rows = b.rows.filter((r) => r.status === "failed");
      if (query)
        rows = rows.filter((r) => this._matchesSearch(r, query));
      return rows;
    });
    this.totalCreditsCost = computed(() => {
      const completed = this.completedRows().length;
      if (completed === 0)
        return 0;
      const steps = this.configSteps();
      const costPerRow = steps.reduce((sum, step) => sum + this.getStepPrice(step), 0);
      return completed * costPerRow;
    });
    this.progress = computed(() => {
      const b = this.batch();
      if (!b || b.totalRows === 0)
        return 0;
      return Math.round((b.completedRows + b.failedRows) / b.totalRows * 100);
    });
    this.selectedRow = signal(null);
    this.detailsViewMode = signal("readable");
    this.isLoadingDetail = signal(false);
    this.recordFilter = signal("all");
    this.searchQuery = signal("");
  }
  ngOnInit() {
    this._route.params.subscribe((params) => {
      this.configId.set(params["configId"]);
      this.batchId.set(params["batchId"]);
      this._loadConfiguration();
      this._loadBatch();
    });
  }
  ngOnDestroy() {
    this._processingAborted = true;
    this._destroy$.next();
    this._destroy$.complete();
  }
  _loadConfiguration() {
    const configId = this.configId();
    if (!configId)
      return;
    this._smartBatchService.getConfiguration(configId).subscribe({
      next: (res) => {
        this.configuration.set(res.data);
      }
    });
  }
  _loadBatch() {
    const id = this.batchId();
    if (!id)
      return;
    this.isLoading.set(true);
    this._smartBatchService.getSmartBatch(id).subscribe({
      next: (res) => {
        this.batch.set(res.data);
        this.isLoading.set(false);
        if (res.data.status === "processing" && !this.isProcessing()) {
          console.log("Resuming processing for batch:", id);
          this.isProcessing.set(true);
          this._processRows();
        }
      },
      error: (err) => {
        console.error("Failed to load batch:", err);
        this.isLoading.set(false);
      }
    });
  }
  startProcessing() {
    return __async(this, null, function* () {
      const batchId = this.batchId();
      if (!batchId)
        return;
      this.isStarting.set(true);
      this._processingAborted = false;
      try {
        const res = yield firstValueFrom(this._smartBatchService.updateSmartBatch(batchId, { status: "processing" }));
        this.batch.set(res.data);
        this.isStarting.set(false);
        this.isProcessing.set(true);
        yield this._processRows();
      } catch (err) {
        console.error("Failed to start processing:", err);
        this.isStarting.set(false);
      }
    });
  }
  /**
   * Process all pending rows by making API calls from the frontend
   */
  _processRows() {
    return __async(this, null, function* () {
      while (!this.configuration() && !this._processingAborted) {
        yield new Promise((resolve) => setTimeout(resolve, 100));
      }
      const currentBatch = this.batch();
      const steps = this.configSteps();
      if (!currentBatch || steps.length === 0) {
        this.isProcessing.set(false);
        return;
      }
      console.log(`Starting/Resuming processing for ${currentBatch.rows.length} rows`);
      for (const row of currentBatch.rows) {
        if (this._processingAborted)
          break;
        if (row.status === "completed" || row.status === "failed")
          continue;
        this.currentRowIndex.set(row.rowIndex);
        yield this._processRow(row, steps);
      }
      this._loadBatch();
      this.isProcessing.set(false);
      this.currentRowIndex.set(null);
      this.currentStepIndex.set(null);
    });
  }
  /**
   * Process a single row through all steps
   */
  _processRow(row, steps) {
    return __async(this, null, function* () {
      const batchId = this.batchId();
      if (!batchId)
        return;
      const results = {};
      const errors = [];
      let failed = false;
      for (const step of steps) {
        if (this._processingAborted || failed)
          break;
        this.currentStepIndex.set(step.sequence);
        try {
          const params = this._buildStepParams(row.inputData, step);
          const feature = step.appFeature;
          const featureUrl = feature?.url;
          const featureMethod = feature?.method || "GET";
          if (!featureUrl) {
            throw new Error(`Step ${step.sequence} has no URL configured`);
          }
          const response = yield firstValueFrom(this._smartBatchService.executeFeatureRequest(featureUrl, featureMethod, params));
          results[step.sequence] = response.data;
        } catch (err) {
          console.error(`Step ${step.sequence} failed for row ${row.rowIndex}:`, err);
          errors.push({
            step: step.sequence,
            message: err?.error?.message || err?.message || "Step execution failed",
            code: err?.error?.code || "STEP_ERROR"
          });
          const config = this.configuration();
          if (config?.mergeStrategy === "sequential") {
            failed = true;
          }
        }
      }
      try {
        const updatedBatch = yield firstValueFrom(this._smartBatchService.updateBatchRow(batchId, row.rowIndex, {
          status: failed ? "failed" : "completed",
          results,
          errors
        }));
        this.batch.set(updatedBatch.data);
      } catch (err) {
        console.error(`Failed to update row ${row.rowIndex}:`, err);
      }
    });
  }
  /**
   * Build params for a step from input data and step configuration.
   * Does NOT auto-merge previous results - only uses inputData + parameterDefaults + inputFieldMapping.
   */
  _buildStepParams(inputData, step) {
    const params = __spreadValues({}, inputData);
    if (step.parameterDefaults) {
      Object.assign(params, step.parameterDefaults);
    }
    if (step.inputFieldMapping) {
      const mapping = step.inputFieldMapping;
      if (mapping instanceof Map) {
        mapping.forEach((targetField, sourceField) => {
          if (inputData[sourceField] !== void 0) {
            params[targetField] = inputData[sourceField];
          }
        });
      } else {
        Object.entries(mapping).forEach(([sourceField, targetField]) => {
          if (inputData[sourceField] !== void 0) {
            params[targetField] = inputData[sourceField];
          }
        });
      }
    }
    return params;
  }
  pauseProcessing() {
    this._processingAborted = true;
    this.isProcessing.set(false);
  }
  generateReport() {
    const configId = this.configId();
    const batchId = this.batchId();
    if (configId && batchId) {
      this._router.navigate(["/smart-batch", configId, "batch", batchId, "report"]);
    }
  }
  generateRowReport(row) {
    const configId = this.configId();
    const batchId = this.batchId();
    if (configId && batchId) {
      this._router.navigate(["/smart-batch", configId, "batch", batchId, "report"], {
        queryParams: { rowIndex: row.rowIndex }
      });
    }
  }
  updateSearchQuery(query) {
    this.searchQuery.set(query);
  }
  _matchesSearch(row, query) {
    if (row.inputData && JSON.stringify(row.inputData).toLowerCase().includes(query)) {
      return true;
    }
    if (row.results) {
      return JSON.stringify(row.results).toLowerCase().includes(query);
    }
    return false;
  }
  goBack() {
    const configId = this.configId();
    if (configId) {
      this._router.navigate(["/smart-batch", configId]);
    }
  }
  selectRow(row) {
    this.selectedRow.set(row);
    this.isLoadingDetail.set(true);
    setTimeout(() => {
      this.isLoadingDetail.set(false);
      setTimeout(() => {
        this.rowDetailPanel?.nativeElement?.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }, 50);
    }, 150);
  }
  /** Set record filter from tab clicks */
  setRecordFilter(filter) {
    this.recordFilter.set(filter);
  }
  getStatusColor(status) {
    switch (status) {
      case "completed":
        return "text-emerald-600";
      case "failed":
        return "text-red-600";
      case "processing":
        return "text-amber-600";
      default:
        return "text-gray-400";
    }
  }
  getStatusIcon(status) {
    switch (status) {
      case "completed":
        return "check_circle";
      case "failed":
        return "error";
      case "processing":
        return "sync";
      default:
        return "pending";
    }
  }
  getStepName(step) {
    const feature = step.appFeature;
    return feature?.name || feature?.code || `Step ${step.sequence}`;
  }
  getStepUrl(step) {
    const feature = step.appFeature;
    return feature?.url || feature?.endpoint || "";
  }
  getStepPrice(step) {
    const feature = step.appFeature;
    return feature?.price ?? feature?.smartCheckPrice ?? 0;
  }
  /**
   * Flatten a step result object into label/value rows for document-style display.
   * Nested objects/arrays are summarized briefly.
   */
  getStepResultFields(data) {
    if (data == null || typeof data !== "object") {
      return [{ label: "Result", value: data != null ? String(data) : "\u2014" }];
    }
    const entries = [];
    for (const key of Object.keys(data)) {
      const label = key.replace(/([A-Z])/g, " $1").replace(/^./, (s) => s.toUpperCase()).trim();
      const raw = data[key];
      let value;
      if (raw == null) {
        value = "\u2014";
      } else if (Array.isArray(raw)) {
        value = raw.length === 0 ? "\u2014" : `[${raw.length} item${raw.length === 1 ? "" : "s"}]`;
      } else if (typeof raw === "object") {
        value = typeof raw === "object" && raw !== null && Object.keys(raw).length > 0 ? `{ ${Object.keys(raw).slice(0, 3).join(", ")}${Object.keys(raw).length > 3 ? "\u2026" : ""} }` : "\u2014";
      } else {
        value = String(raw);
      }
      entries.push({ label, value });
    }
    return entries;
  }
  /** Input data as label/value pairs for readable display; empty if not an object */
  getInputDataFields() {
    const input = this.selectedRow()?.inputData;
    if (input == null || typeof input !== "object")
      return [];
    return this.getStepResultFields(input);
  }
  /** Format object as pretty-printed JSON for display */
  formatJson(obj) {
    if (obj == null)
      return "\u2014";
    try {
      return JSON.stringify(obj, null, 2);
    } catch {
      return String(obj);
    }
  }
  getRowStepStatus(row, stepSequence) {
    if (this.isProcessing() && this.currentRowIndex() === row.rowIndex && this.currentStepIndex() === stepSequence) {
      return "pending";
    }
    if (!row.results || typeof row.results !== "object") {
      const stepError = row.errors?.find((e) => e.step === stepSequence);
      if (stepError)
        return "failed";
      return "pending";
    }
    const stepResult = row.results[stepSequence];
    if (stepResult === null || stepResult === void 0) {
      const stepError = row.errors?.find((e) => e.step === stepSequence);
      if (stepError)
        return "failed";
      return "pending";
    }
    return "completed";
  }
  static {
    this.\u0275fac = function BatchProcessingComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BatchProcessingComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BatchProcessingComponent, selectors: [["batch-processing"]], viewQuery: function BatchProcessingComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.rowDetailPanel = _t.first);
      }
    }, decls: 29, vars: 26, consts: [["rowDetailPanel", ""], [1, "min-h-screen", "w-full", "bg-gray-50"], [1, "bg-white", "border-b", "border-gray-200", "sticky", "top-0", "z-10"], [1, "max-w-7xl", "mx-auto", "px-4", "sm:px-6", "lg:px-8", "py-4"], [1, "flex", "items-center", "justify-between"], [1, "flex", "items-center", "gap-4"], ["mat-icon-button", "", 3, "click", "matTooltip"], [1, "flex", "items-center", "gap-2.5"], [1, "text-xl", "font-bold", "text-gray-900"], [1, "text-xs", "font-semibold", "px-2.5", "py-1", "rounded-full", 3, "ngClass"], [1, "text-sm", "text-gray-500", "mt-0.5"], [1, "flex", "items-center", "gap-3"], ["mat-flat-button", "", "color", "primary", 1, "!rounded-xl", 3, "disabled"], ["mat-stroked-button", "", 1, "!rounded-xl"], ["mat-flat-button", "", "color", "accent", 1, "!rounded-xl", "!bg-indigo-600"], [1, "mt-4"], [1, "max-w-7xl", "mx-auto", "px-4", "sm:px-6", "lg:px-8", "py-6"], [1, "flex", "items-center", "justify-center", "h-64"], ["mat-flat-button", "", "color", "primary", 1, "!rounded-xl", 3, "click", "disabled"], [1, "inline-flex", "items-center", "gap-2"], [1, "animate-spin"], ["mat-stroked-button", "", 1, "!rounded-xl", 3, "click"], ["mat-flat-button", "", "color", "accent", 1, "!rounded-xl", "!bg-indigo-600", 3, "click"], [1, "flex", "justify-between", "text-sm", "text-gray-600", "mb-1"], ["mode", "determinate", 1, "!rounded-full", 3, "value"], [1, "bg-white", "rounded-xl", "border", "border-gray-200", "p-5"], [1, "text-xs", "font-semibold", "text-gray-400", "uppercase", "tracking-wider", "mb-3"], [1, "flex", "items-stretch", "gap-2", "flex-wrap"], [1, "mt-4", "pt-4", "border-t", "border-gray-100"], [1, "flex", "items-center", "gap-2.5", "min-w-0", "max-w-[320px]", "sm:max-w-[360px]", "px-3", "py-2.5", "bg-gray-50", "rounded-lg", "border-l-3", "border-indigo-400", "border", "border-t-gray-200", "border-r-gray-200", "border-b-gray-200"], [1, "shrink-0", "w-7", "h-7", "rounded-full", "bg-indigo-100", "flex", "items-center", "justify-center", "text-xs", "font-bold", "text-indigo-600"], [1, "min-w-0", "flex-1", "flex", "flex-col", "gap-0.5"], [1, "text-sm", "font-medium", "text-gray-900", "truncate", 3, "matTooltip"], ["matTooltipPosition", "below", 1, "text-xs", "text-gray-400", "font-mono", "truncate", 3, "matTooltip"], [1, "text-xs", "text-indigo-600", "font-medium", "mt-0.5"], ["aria-hidden", "true", 1, "text-gray-300", "!text-base", "shrink-0", "self-center"], [1, "grid", "grid-cols-2", "sm:grid-cols-3", "gap-3"], [1, "flex", "items-center", "gap-3", "px-4", "py-3", "bg-indigo-50", "rounded-lg"], [1, "shrink-0", "w-9", "h-9", "rounded-lg", "bg-indigo-100", "flex", "items-center", "justify-center"], [1, "text-indigo-600", "!text-xl"], [1, "min-w-0"], [1, "text-xs", "text-indigo-500", "font-medium"], [1, "text-lg", "font-bold", "text-indigo-700", "leading-tight"], [1, "text-xs", "font-medium"], [1, "flex", "items-center", "gap-3", "px-4", "py-3", "bg-emerald-50", "rounded-lg", "cursor-pointer", "transition-all", "hover:shadow-md", 3, "click"], [1, "shrink-0", "w-9", "h-9", "rounded-lg", "bg-emerald-100", "flex", "items-center", "justify-center"], [1, "text-emerald-600", "!text-xl"], [1, "text-xs", "text-emerald-500", "font-medium"], [1, "text-lg", "font-bold", "text-emerald-700", "leading-tight"], [1, "text-xs", "font-normal", "text-emerald-500"], [1, "flex", "items-center", "gap-3", "px-4", "py-3", "bg-red-50", "rounded-lg", "cursor-pointer", "transition-all", "hover:shadow-md", 3, "ring-2", "ring-red-400"], [1, "flex", "items-center", "gap-3", "px-4", "py-3", "bg-red-50", "rounded-lg", "cursor-pointer", "transition-all", "hover:shadow-md", 3, "click"], [1, "shrink-0", "w-9", "h-9", "rounded-lg", "bg-red-100", "flex", "items-center", "justify-center"], [1, "text-red-600", "!text-xl"], [1, "text-xs", "text-red-500", "font-medium"], [1, "text-lg", "font-bold", "text-red-700", "leading-tight"], [1, "text-xs", "font-normal", "text-red-500"], ["diameter", "48"], [1, "bg-white", "rounded-xl", "border", "border-gray-200", "overflow-hidden", "shadow-sm"], [1, "px-5", "pt-4", "pb-0"], [1, "flex", "flex-col", "sm:flex-row", "sm:items-center", "sm:justify-between", "gap-3"], [1, "flex", "items-center", "gap-1", "bg-gray-100", "rounded-lg", "p-0.5"], [1, "px-3", "py-1.5", "text-sm", "font-medium", "rounded-md", "transition-all", 3, "click", "ngClass"], [1, "ml-1", "text-xs", "text-gray-400"], [1, "inline-flex", "items-center", "gap-1"], [1, "w-1.5", "h-1.5", "rounded-full", "bg-emerald-500"], [1, "text-xs", "text-gray-400"], [1, "px-3", "py-1.5", "text-sm", "font-medium", "rounded-md", "transition-all", 3, "ngClass"], [1, "relative", "w-full", "sm:w-64"], [1, "absolute", "left-2.5", "top-1/2", "-translate-y-1/2", "!text-lg", "text-gray-400", "pointer-events-none"], [1, "w-full", "h-9", "pl-9", "pr-8", "text-sm", "border", "border-gray-200", "rounded-lg", "bg-gray-50", "focus:bg-white", "focus:border-indigo-400", "focus:ring-1", "focus:ring-indigo-400", "outline-none", "transition-all", "placeholder-gray-400", 3, "ngModelChange", "ngModel", "placeholder"], [1, "absolute", "right-2", "top-1/2", "-translate-y-1/2", "text-gray-400", "hover:text-gray-600"], [1, "px-5", "py-2.5", "mt-2", "border-b", "border-gray-100", "grid", "grid-cols-[1fr_auto]", "items-center"], [1, "text-xs", "font-medium", "text-gray-400", "uppercase", "tracking-wider"], [1, "max-h-[560px]", "overflow-y-auto", "divide-y", "divide-gray-100"], [1, "py-16", "text-center"], [1, "mt-6", "bg-white", "rounded-2xl", "border", "border-gray-200", "p-6"], [1, "w-1.5", "h-1.5", "rounded-full", "bg-red-500"], [1, "absolute", "right-2", "top-1/2", "-translate-y-1/2", "text-gray-400", "hover:text-gray-600", 3, "click"], [1, "!text-base", "!w-4", "!h-4"], [1, "group", "px-5", "py-3", "grid", "grid-cols-[1fr_auto]", "items-center", "hover:bg-gray-50", "cursor-pointer", "transition-colors", 3, "bg-indigo-50"], [1, "group", "px-5", "py-3", "grid", "grid-cols-[1fr_auto]", "items-center", "hover:bg-gray-50", "cursor-pointer", "transition-colors", 3, "click"], [1, "flex", "items-center", "gap-3", "min-w-0"], [1, "shrink-0", "w-7", "h-7", "rounded-md", "bg-gray-100", "flex", "items-center", "justify-center", "text-xs", "font-mono", "text-gray-500"], [1, "text-sm", "font-medium", "text-gray-900", "truncate"], [1, "flex", "items-center", "gap-1.5"], [1, "inline-flex", "items-center", "gap-1", "px-2", "py-0.5", "text-xs", "font-medium", "rounded-full", "bg-gray-100", "text-gray-600"], [1, "w-1.5", "h-1.5", "rounded-full", "bg-gray-400", "animate-pulse"], [1, "shrink-0", "w-7", "h-7", "rounded-md", "bg-emerald-50", "flex", "items-center", "justify-center", "text-xs", "font-mono", "text-emerald-600"], [1, "flex", "items-center", "gap-2"], [1, "hidden", "sm:flex", "items-center", "gap-0.5", "mr-1"], [1, "w-4", "h-4", "rounded-full", "bg-emerald-100", "flex", "items-center", "justify-center", 3, "matTooltip"], [1, "inline-flex", "items-center", "gap-1", "px-2", "py-0.5", "text-xs", "font-medium", "rounded-full", "bg-emerald-50", "text-emerald-700"], [1, "!text-base", "text-gray-300", "opacity-0", "group-hover:opacity-100", "transition-opacity"], [1, "text-emerald-600", "!text-[10px]", "!w-2.5", "!h-2.5"], [1, "group", "px-5", "py-3", "grid", "grid-cols-[1fr_auto]", "items-center", "hover:bg-gray-50", "cursor-pointer", "transition-colors", 3, "bg-red-50"], [1, "shrink-0", "w-7", "h-7", "rounded-md", "bg-red-50", "flex", "items-center", "justify-center", "text-xs", "font-mono", "text-red-600"], [1, "text-xs", "text-gray-400", "truncate"], [1, "inline-flex", "items-center", "gap-1", "px-2", "py-0.5", "text-xs", "font-medium", "rounded-full", "bg-red-50", "text-red-700"], [1, "w-4", "h-4", "rounded-full", "bg-red-100", "flex", "items-center", "justify-center", 3, "matTooltip"], [1, "w-4", "h-4", "rounded-full", "bg-gray-100", "flex", "items-center", "justify-center", 3, "matTooltip"], [1, "text-red-600", "!text-[10px]", "!w-2.5", "!h-2.5"], [1, "text-gray-400", "!text-[10px]", "!w-2.5", "!h-2.5"], [1, "!text-5xl", "!w-12", "!h-12", "text-gray-300", "mb-3"], [1, "text-sm", "text-gray-400"], [1, "animate-pulse", "space-y-4"], [1, "h-5", "bg-gray-200", "rounded", "w-40"], [1, "h-8", "bg-gray-200", "rounded", "w-48"], [1, "space-y-3", "pt-2"], [1, "h-4", "bg-gray-100", "rounded", "w-24"], [1, "border", "border-gray-100", "rounded-lg", "p-4", "space-y-2"], [1, "h-3", "bg-gray-100", "rounded", "w-full"], [1, "h-3", "bg-gray-100", "rounded", "w-3/4"], [1, "h-3", "bg-gray-100", "rounded", "w-1/2"], [1, "flex", "items-center", "justify-between", "mb-4"], [1, "font-semibold", "text-gray-900"], [1, "!rounded-lg", 3, "change", "value"], ["value", "readable"], ["value", "json"], ["mat-flat-button", "", "color", "primary", 1, "!rounded-lg"], ["mat-icon-button", "", 3, "click"], [1, "mb-6"], [1, "text-sm", "font-medium", "text-gray-500", "mb-3"], [1, "border", "border-gray-200", "rounded-lg", "overflow-hidden", "bg-white"], [1, "px-4", "py-3"], [1, "bg-gray-50", "rounded-lg", "p-4", "text-sm", "font-mono", "text-gray-800", "overflow-auto", "max-h-64", "m-0"], ["mat-flat-button", "", "color", "primary", 1, "!rounded-lg", 3, "click"], [1, "mr-2", "icon-size-4"], [1, "space-y-0"], [1, "text-sm", "text-gray-400", "py-2"], [1, "flex", "gap-4", "py-2", "border-b", "border-gray-100", "last:border-0", "text-sm"], [1, "text-gray-500", "min-w-[140px]", "shrink-0"], [1, "text-gray-900", "font-medium", "break-words"], [1, "space-y-3"], [1, "border", "border-gray-200", "rounded-lg", "overflow-hidden"], [1, "flex", "items-center", "justify-between", "px-4", "py-3", "bg-gray-50"], [1, "w-6", "h-6", "rounded-full", "flex", "items-center", "justify-center", "text-xs", "font-bold"], [1, "font-medium", "text-gray-700"], [1, "text-xs", "font-medium", "px-2", "py-1", "rounded-full"], [1, "px-4", "py-3", "bg-white", "border-t", "border-gray-100"], [1, "bg-gray-50", "rounded-lg", "p-3", "text-xs", "font-mono", "text-gray-800", "overflow-auto", "max-h-64", "m-0"], [1, "text-sm", "font-medium", "text-red-500", "mb-3"], [1, "space-y-2"], [1, "bg-red-50", "border", "border-red-200", "rounded-lg", "p-3"], [1, "text-sm", "font-medium", "text-red-700"], [1, "text-sm", "text-red-600"]], template: function BatchProcessingComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "button", 6);
        \u0275\u0275pipe(6, "transloco");
        \u0275\u0275listener("click", function BatchProcessingComponent_Template_button_click_5_listener() {
          return ctx.goBack();
        });
        \u0275\u0275elementStart(7, "mat-icon");
        \u0275\u0275text(8, "arrow_back");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div")(10, "div", 7)(11, "h1", 8);
        \u0275\u0275text(12);
        \u0275\u0275pipe(13, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "span", 9);
        \u0275\u0275text(15);
        \u0275\u0275pipe(16, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "p", 10);
        \u0275\u0275text(18);
        \u0275\u0275pipe(19, "transloco");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(20, "div", 11);
        \u0275\u0275template(21, BatchProcessingComponent_Conditional_21_Template, 4, 2, "button", 12)(22, BatchProcessingComponent_Conditional_22_Template, 6, 3, "button", 13)(23, BatchProcessingComponent_Conditional_23_Template, 6, 3, "button", 14);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(24, BatchProcessingComponent_Conditional_24_Template, 8, 5, "div", 15);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(25, BatchProcessingComponent_Conditional_25_Template, 9, 4, "div", 3);
        \u0275\u0275elementStart(26, "div", 16);
        \u0275\u0275template(27, BatchProcessingComponent_Conditional_27_Template, 2, 0, "div", 17)(28, BatchProcessingComponent_Conditional_28_Template, 36, 27);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        let tmp_1_0;
        let tmp_2_0;
        let tmp_3_0;
        let tmp_4_0;
        let tmp_5_0;
        let tmp_6_0;
        let tmp_7_0;
        \u0275\u0275advance(5);
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(6, 12, "batchProcessing.backToDashboard"));
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1(" ", ((tmp_1_0 = ctx.batch()) == null ? null : tmp_1_0.name) || \u0275\u0275pipeBind1(13, 14, "batchProcessing.batchProcessing"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction5(20, _c1, ((tmp_2_0 = ctx.batch()) == null ? null : tmp_2_0.status) === "completed", ((tmp_2_0 = ctx.batch()) == null ? null : tmp_2_0.status) === "pending" || ((tmp_2_0 = ctx.batch()) == null ? null : tmp_2_0.status) === "draft", ((tmp_2_0 = ctx.batch()) == null ? null : tmp_2_0.status) === "processing", ((tmp_2_0 = ctx.batch()) == null ? null : tmp_2_0.status) === "failed", ((tmp_2_0 = ctx.batch()) == null ? null : tmp_2_0.status) === "cancelled"));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 16, "batchProcessing." + (((tmp_3_0 = ctx.batch()) == null ? null : tmp_3_0.status) || "pending")), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate2(" ", ((tmp_4_0 = ctx.batch()) == null ? null : tmp_4_0.totalRows) || 0, " ", \u0275\u0275pipeBind1(19, 18, "batchProcessing.records"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275conditional(((tmp_5_0 = ctx.batch()) == null ? null : tmp_5_0.status) === "draft" || ((tmp_5_0 = ctx.batch()) == null ? null : tmp_5_0.status) === "pending" ? 21 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(((tmp_6_0 = ctx.batch()) == null ? null : tmp_6_0.status) === "processing" ? 22 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(((tmp_7_0 = ctx.batch()) == null ? null : tmp_7_0.status) === "completed" || ((tmp_7_0 = ctx.batch()) == null ? null : tmp_7_0.status) === "processing" ? 23 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.isProcessing() ? 24 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.configSteps().length > 0 ? 25 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.isLoading() ? 27 : 28);
      }
    }, dependencies: [
      CommonModule,
      NgClass,
      DecimalPipe,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      RouterModule,
      MatButtonModule,
      MatButton,
      MatIconButton,
      MatButtonToggleModule,
      MatButtonToggleGroup,
      MatButtonToggle,
      MatFormFieldModule,
      MatIconModule,
      MatIcon,
      MatInputModule,
      MatProgressBarModule,
      MatProgressBar,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatTooltipModule,
      MatTooltip,
      TranslocoModule,
      TranslocoPipe
    ], encapsulation: 2, data: { animation: [fuseAnimations] } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BatchProcessingComponent, [{
    type: Component,
    args: [{ selector: "batch-processing", standalone: true, imports: [
      CommonModule,
      FormsModule,
      RouterModule,
      MatButtonModule,
      MatButtonToggleModule,
      MatFormFieldModule,
      MatIconModule,
      MatInputModule,
      MatProgressBarModule,
      MatProgressSpinnerModule,
      MatTooltipModule,
      TranslocoModule
    ], animations: [fuseAnimations], template: `<div class="min-h-screen w-full bg-gray-50">
    <!-- Header -->
    <div class="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div class="flex items-center justify-between">
                <div class="flex items-center gap-4">
                    <button
                        mat-icon-button
                        (click)="goBack()"
                        [matTooltip]="'batchProcessing.backToDashboard' | transloco"
                    >
                        <mat-icon>arrow_back</mat-icon>
                    </button>
                    <div>
                        <div class="flex items-center gap-2.5">
                            <h1 class="text-xl font-bold text-gray-900">
                                {{
                                    batch()?.name || ('batchProcessing.batchProcessing' | transloco)
                                }}
                            </h1>
                            <span
                                class="text-xs font-semibold px-2.5 py-1 rounded-full"
                                [ngClass]="{
                                    'bg-emerald-100 text-emerald-700':
                                        batch()?.status === 'completed',
                                    'bg-amber-100 text-amber-700':
                                        batch()?.status === 'pending' ||
                                        batch()?.status === 'draft',
                                    'bg-blue-100 text-blue-700': batch()?.status === 'processing',
                                    'bg-red-100 text-red-700': batch()?.status === 'failed',
                                    'bg-gray-100 text-gray-600': batch()?.status === 'cancelled',
                                }"
                            >
                                {{
                                    'batchProcessing.' + (batch()?.status || 'pending') | transloco
                                }}
                            </span>
                        </div>
                        <p class="text-sm text-gray-500 mt-0.5">
                            {{ batch()?.totalRows || 0 }}
                            {{ 'batchProcessing.records' | transloco }}
                        </p>
                    </div>
                </div>

                <!-- Action Buttons -->
                <div class="flex items-center gap-3">
                    @if (batch()?.status === 'draft' || batch()?.status === 'pending') {
                        <button
                            mat-flat-button
                            color="primary"
                            (click)="startProcessing()"
                            [disabled]="isStarting()"
                            class="!rounded-xl"
                        >
                            <span class="inline-flex items-center gap-2">
                                @if (isStarting()) {
                                    <mat-icon class="animate-spin">refresh</mat-icon>
                                    {{ 'batchProcessing.starting' | transloco }}
                                } @else {
                                    <mat-icon>play_arrow</mat-icon>
                                    {{ 'batchProcessing.startProcessing' | transloco }}
                                }
                            </span>
                        </button>
                    }
                    @if (batch()?.status === 'processing') {
                        <button mat-stroked-button (click)="pauseProcessing()" class="!rounded-xl">
                            <span class="inline-flex items-center gap-2">
                                <mat-icon>pause</mat-icon>
                                {{ 'batchProcessing.pause' | transloco }}
                            </span>
                        </button>
                    }
                    @if (batch()?.status === 'completed' || batch()?.status === 'processing') {
                        <button
                            mat-flat-button
                            color="accent"
                            (click)="generateReport()"
                            class="!rounded-xl !bg-indigo-600"
                        >
                            <span class="inline-flex items-center gap-2">
                                <mat-icon>description</mat-icon>
                                {{ 'batchProcessing.generateReport' | transloco }}
                            </span>
                        </button>
                    }
                </div>
            </div>

            <!-- Progress Bar -->
            @if (isProcessing()) {
                <div class="mt-4">
                    <div class="flex justify-between text-sm text-gray-600 mb-1">
                        <span>{{ 'batchProcessing.processing' | transloco }}</span>
                        <span>{{ progress() }}%</span>
                    </div>
                    <mat-progress-bar
                        mode="determinate"
                        [value]="progress()"
                        class="!rounded-full"
                    ></mat-progress-bar>
                </div>
            }
        </div>
    </div>

    <!-- Steps & Summary -->
    @if (configSteps().length > 0) {
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div class="bg-white rounded-xl border border-gray-200 p-5">
                <!-- Steps Pipeline -->
                <h3 class="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                    {{ 'batchProcessing.processingSteps' | transloco }}
                </h3>
                <div class="flex items-stretch gap-2 flex-wrap">
                    @for (step of configSteps(); track step.sequence; let idx = $index) {
                        <div
                            class="flex items-center gap-2.5 min-w-0 max-w-[320px] sm:max-w-[360px] px-3 py-2.5 bg-gray-50 rounded-lg border-l-3 border-indigo-400 border border-t-gray-200 border-r-gray-200 border-b-gray-200"
                        >
                            <div
                                class="shrink-0 w-7 h-7 rounded-full bg-indigo-100 flex items-center justify-center text-xs font-bold text-indigo-600"
                            >
                                {{ step.sequence }}
                            </div>
                            <div class="min-w-0 flex-1 flex flex-col gap-0.5">
                                <span
                                    class="text-sm font-medium text-gray-900 truncate"
                                    [matTooltip]="getStepName(step)"
                                >
                                    {{ getStepName(step) }}
                                </span>
                                @if (getStepUrl(step)) {
                                    <span
                                        class="text-xs text-gray-400 font-mono truncate"
                                        [matTooltip]="getStepUrl(step)"
                                        matTooltipPosition="below"
                                    >
                                        {{ getStepUrl(step) }}
                                    </span>
                                }
                                @if (getStepPrice(step) > 0) {
                                    <span class="text-xs text-indigo-600 font-medium mt-0.5">
                                        {{ getStepPrice(step) | number: '1.2-2' }}
                                        {{ 'batchProcessing.credits' | transloco }}
                                    </span>
                                }
                            </div>
                        </div>
                        @if (idx < configSteps().length - 1) {
                            <mat-icon
                                class="text-gray-300 !text-base shrink-0 self-center"
                                aria-hidden="true"
                                >arrow_forward</mat-icon
                            >
                        }
                    }
                </div>

                <!-- Summary Stats -->
                @if (completedRows().length > 0 || failedRows().length > 0) {
                    <div class="mt-4 pt-4 border-t border-gray-100">
                        <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
                            <!-- Total Cost -->
                            <div class="flex items-center gap-3 px-4 py-3 bg-indigo-50 rounded-lg">
                                <div
                                    class="shrink-0 w-9 h-9 rounded-lg bg-indigo-100 flex items-center justify-center"
                                >
                                    <mat-icon class="text-indigo-600 !text-xl">payments</mat-icon>
                                </div>
                                <div class="min-w-0">
                                    <p class="text-xs text-indigo-500 font-medium">
                                        {{ 'batchProcessing.totalCost' | transloco }}
                                    </p>
                                    <p class="text-lg font-bold text-indigo-700 leading-tight">
                                        {{ totalCreditsCost() | number: '1.2-2' }}
                                        <span class="text-xs font-medium">{{
                                            'batchProcessing.credits' | transloco
                                        }}</span>
                                    </p>
                                </div>
                            </div>

                            <!-- Successful -->
                            <div
                                class="flex items-center gap-3 px-4 py-3 bg-emerald-50 rounded-lg cursor-pointer transition-all hover:shadow-md"
                                [class.ring-2]="recordFilter() === 'completed'"
                                [class.ring-emerald-400]="recordFilter() === 'completed'"
                                (click)="setRecordFilter('completed')"
                            >
                                <div
                                    class="shrink-0 w-9 h-9 rounded-lg bg-emerald-100 flex items-center justify-center"
                                >
                                    <mat-icon class="text-emerald-600 !text-xl"
                                        >check_circle</mat-icon
                                    >
                                </div>
                                <div class="min-w-0">
                                    <p class="text-xs text-emerald-500 font-medium">
                                        {{ 'batchProcessing.successful' | transloco }}
                                    </p>
                                    <p class="text-lg font-bold text-emerald-700 leading-tight">
                                        {{ completedRows().length }}
                                        <span class="text-xs font-normal text-emerald-500">{{
                                            'batchProcessing.requestsSuccessful' | transloco
                                        }}</span>
                                    </p>
                                </div>
                            </div>

                            <!-- Failed (only when there are failures) -->
                            @if (failedRows().length > 0) {
                                <div
                                    class="flex items-center gap-3 px-4 py-3 bg-red-50 rounded-lg cursor-pointer transition-all hover:shadow-md"
                                    [class.ring-2]="recordFilter() === 'failed'"
                                    [class.ring-red-400]="recordFilter() === 'failed'"
                                    (click)="setRecordFilter('failed')"
                                >
                                    <div
                                        class="shrink-0 w-9 h-9 rounded-lg bg-red-100 flex items-center justify-center"
                                    >
                                        <mat-icon class="text-red-600 !text-xl">error</mat-icon>
                                    </div>
                                    <div class="min-w-0">
                                        <p class="text-xs text-red-500 font-medium">
                                            {{ 'batchProcessing.failed' | transloco }}
                                        </p>
                                        <p class="text-lg font-bold text-red-700 leading-tight">
                                            {{ failedRows().length }}
                                            <span class="text-xs font-normal text-red-500">{{
                                                'batchProcessing.requestsFailed' | transloco
                                            }}</span>
                                        </p>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                }
            </div>
        </div>
    }

    <!-- Main Content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        @if (isLoading()) {
            <div class="flex items-center justify-center h-64">
                <mat-spinner diameter="48"></mat-spinner>
            </div>
        } @else {
            <!-- Records Table Card -->
            <div class="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                <!-- Table Header: Tabs + Search -->
                <div class="px-5 pt-4 pb-0">
                    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                        <!-- Filter Tabs -->
                        <div class="flex items-center gap-1 bg-gray-100 rounded-lg p-0.5">
                            <button
                                class="px-3 py-1.5 text-sm font-medium rounded-md transition-all"
                                [ngClass]="
                                    recordFilter() === 'all'
                                        ? 'bg-white text-gray-900 shadow-sm'
                                        : 'text-gray-500 hover:text-gray-700'
                                "
                                (click)="setRecordFilter('all')"
                            >
                                {{ 'batchProcessing.all' | transloco }}
                                <span class="ml-1 text-xs text-gray-400">{{
                                    batch()?.totalRows || 0
                                }}</span>
                            </button>
                            <button
                                class="px-3 py-1.5 text-sm font-medium rounded-md transition-all"
                                [ngClass]="
                                    recordFilter() === 'completed'
                                        ? 'bg-white text-gray-900 shadow-sm'
                                        : 'text-gray-500 hover:text-gray-700'
                                "
                                (click)="setRecordFilter('completed')"
                            >
                                <span class="inline-flex items-center gap-1">
                                    <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                    {{ 'batchProcessing.successful' | transloco }}
                                    <span class="text-xs text-gray-400">{{
                                        completedRows().length
                                    }}</span>
                                </span>
                            </button>
                            @if (failedRows().length > 0) {
                                <button
                                    class="px-3 py-1.5 text-sm font-medium rounded-md transition-all"
                                    [ngClass]="
                                        recordFilter() === 'failed'
                                            ? 'bg-white text-gray-900 shadow-sm'
                                            : 'text-gray-500 hover:text-gray-700'
                                    "
                                    (click)="setRecordFilter('failed')"
                                >
                                    <span class="inline-flex items-center gap-1">
                                        <span class="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                                        {{ 'batchProcessing.failed' | transloco }}
                                        <span class="text-xs text-gray-400">{{
                                            failedRows().length
                                        }}</span>
                                    </span>
                                </button>
                            }
                        </div>

                        <!-- Search -->
                        <div class="relative w-full sm:w-64">
                            <mat-icon
                                class="absolute left-2.5 top-1/2 -translate-y-1/2 !text-lg text-gray-400 pointer-events-none"
                                >search</mat-icon
                            >
                            <input
                                class="w-full h-9 pl-9 pr-8 text-sm border border-gray-200 rounded-lg bg-gray-50 focus:bg-white focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 outline-none transition-all placeholder-gray-400"
                                [ngModel]="searchQuery()"
                                (ngModelChange)="updateSearchQuery($event)"
                                [placeholder]="'smartReport.searchRecords' | transloco"
                            />
                            @if (searchQuery()) {
                                <button
                                    class="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                    (click)="updateSearchQuery('')"
                                >
                                    <mat-icon class="!text-base !w-4 !h-4">close</mat-icon>
                                </button>
                            }
                        </div>
                    </div>
                </div>

                <!-- Table Column Headers -->
                <div
                    class="px-5 py-2.5 mt-2 border-b border-gray-100 grid grid-cols-[1fr_auto] items-center"
                >
                    <span class="text-xs font-medium text-gray-400 uppercase tracking-wider">{{
                        'batchProcessing.records' | transloco
                    }}</span>
                    <span class="text-xs font-medium text-gray-400 uppercase tracking-wider">{{
                        'batchProcessing.status' | transloco
                    }}</span>
                </div>

                <!-- Table Body -->
                <div class="max-h-[560px] overflow-y-auto divide-y divide-gray-100">
                    <!-- Pending Rows -->
                    @if (recordFilter() === 'all') {
                        @for (row of pendingRows(); track row.rowIndex) {
                            <div
                                class="group px-5 py-3 grid grid-cols-[1fr_auto] items-center hover:bg-gray-50 cursor-pointer transition-colors"
                                (click)="selectRow(row)"
                                [class.bg-indigo-50]="selectedRow()?.rowIndex === row.rowIndex"
                            >
                                <div class="flex items-center gap-3 min-w-0">
                                    <span
                                        class="shrink-0 w-7 h-7 rounded-md bg-gray-100 flex items-center justify-center text-xs font-mono text-gray-500"
                                    >
                                        {{ row.rowIndex + 1 }}
                                    </span>
                                    <div class="min-w-0">
                                        <p class="text-sm font-medium text-gray-900 truncate">
                                            {{
                                                row.inputData?.documentNumber ||
                                                    row.inputData?.name ||
                                                    ('batchProcessing.rowNumber'
                                                        | transloco: { index: row.rowIndex + 1 })
                                            }}
                                        </p>
                                    </div>
                                </div>
                                <div class="flex items-center gap-1.5">
                                    <span
                                        class="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium rounded-full bg-gray-100 text-gray-600"
                                    >
                                        <span
                                            class="w-1.5 h-1.5 rounded-full bg-gray-400 animate-pulse"
                                        ></span>
                                        {{ 'batchProcessing.' + row.status | transloco }}
                                    </span>
                                </div>
                            </div>
                        }
                    }

                    <!-- Completed Rows -->
                    @if (recordFilter() !== 'failed') {
                        @for (row of completedRows(); track row.rowIndex) {
                            <div
                                class="group px-5 py-3 grid grid-cols-[1fr_auto] items-center hover:bg-gray-50 cursor-pointer transition-colors"
                                (click)="selectRow(row)"
                                [class.bg-indigo-50]="selectedRow()?.rowIndex === row.rowIndex"
                            >
                                <div class="flex items-center gap-3 min-w-0">
                                    <span
                                        class="shrink-0 w-7 h-7 rounded-md bg-emerald-50 flex items-center justify-center text-xs font-mono text-emerald-600"
                                    >
                                        {{ row.rowIndex + 1 }}
                                    </span>
                                    <div class="min-w-0">
                                        <p class="text-sm font-medium text-gray-900 truncate">
                                            {{
                                                row.inputData?.documentNumber ||
                                                    row.inputData?.name ||
                                                    ('batchProcessing.rowNumber'
                                                        | transloco: { index: row.rowIndex + 1 })
                                            }}
                                        </p>
                                    </div>
                                </div>
                                <div class="flex items-center gap-2">
                                    <!-- Step dots -->
                                    <div class="hidden sm:flex items-center gap-0.5 mr-1">
                                        @for (step of configSteps(); track step.sequence) {
                                            <div
                                                class="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center"
                                                [matTooltip]="getStepName(step)"
                                            >
                                                <mat-icon
                                                    class="text-emerald-600 !text-[10px] !w-2.5 !h-2.5"
                                                    >check</mat-icon
                                                >
                                            </div>
                                        }
                                    </div>
                                    <span
                                        class="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium rounded-full bg-emerald-50 text-emerald-700"
                                    >
                                        <span
                                            class="w-1.5 h-1.5 rounded-full bg-emerald-500"
                                        ></span>
                                        {{ 'batchProcessing.verified' | transloco }}
                                    </span>
                                    <mat-icon
                                        class="!text-base text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity"
                                        >chevron_right</mat-icon
                                    >
                                </div>
                            </div>
                        }
                    }

                    <!-- Failed Rows -->
                    @if (recordFilter() !== 'completed') {
                        @for (row of failedRows(); track row.rowIndex) {
                            <div
                                class="group px-5 py-3 grid grid-cols-[1fr_auto] items-center hover:bg-gray-50 cursor-pointer transition-colors"
                                (click)="selectRow(row)"
                                [class.bg-red-50]="selectedRow()?.rowIndex === row.rowIndex"
                            >
                                <div class="flex items-center gap-3 min-w-0">
                                    <span
                                        class="shrink-0 w-7 h-7 rounded-md bg-red-50 flex items-center justify-center text-xs font-mono text-red-600"
                                    >
                                        {{ row.rowIndex + 1 }}
                                    </span>
                                    <div class="min-w-0">
                                        <p class="text-sm font-medium text-gray-900 truncate">
                                            {{
                                                row.inputData?.documentNumber ||
                                                    row.inputData?.name ||
                                                    ('batchProcessing.rowNumber'
                                                        | transloco: { index: row.rowIndex + 1 })
                                            }}
                                        </p>
                                        <p class="text-xs text-gray-400 truncate">
                                            {{
                                                row.errors?.[0]?.message ||
                                                    ('batchProcessing.failed' | transloco)
                                            }}
                                        </p>
                                    </div>
                                </div>
                                <div class="flex items-center gap-2">
                                    <!-- Step dots -->
                                    <div class="hidden sm:flex items-center gap-0.5 mr-1">
                                        @for (step of configSteps(); track step.sequence) {
                                            @switch (getRowStepStatus(row, step.sequence)) {
                                                @case ('completed') {
                                                    <div
                                                        class="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center"
                                                        [matTooltip]="
                                                            'batchProcessing.stepStatusCompleted'
                                                                | transloco
                                                                    : { step: getStepName(step) }
                                                        "
                                                    >
                                                        <mat-icon
                                                            class="text-emerald-600 !text-[10px] !w-2.5 !h-2.5"
                                                            >check</mat-icon
                                                        >
                                                    </div>
                                                }
                                                @case ('failed') {
                                                    <div
                                                        class="w-4 h-4 rounded-full bg-red-100 flex items-center justify-center"
                                                        [matTooltip]="
                                                            'batchProcessing.stepStatusFailed'
                                                                | transloco
                                                                    : { step: getStepName(step) }
                                                        "
                                                    >
                                                        <mat-icon
                                                            class="text-red-600 !text-[10px] !w-2.5 !h-2.5"
                                                            >close</mat-icon
                                                        >
                                                    </div>
                                                }
                                                @default {
                                                    <div
                                                        class="w-4 h-4 rounded-full bg-gray-100 flex items-center justify-center"
                                                        [matTooltip]="
                                                            'batchProcessing.stepStatusSkipped'
                                                                | transloco
                                                                    : { step: getStepName(step) }
                                                        "
                                                    >
                                                        <mat-icon
                                                            class="text-gray-400 !text-[10px] !w-2.5 !h-2.5"
                                                            >remove</mat-icon
                                                        >
                                                    </div>
                                                }
                                            }
                                        }
                                    </div>
                                    <span
                                        class="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium rounded-full bg-red-50 text-red-700"
                                    >
                                        <span class="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                                        {{ 'batchProcessing.failed' | transloco }}
                                    </span>
                                    <mat-icon
                                        class="!text-base text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity"
                                        >chevron_right</mat-icon
                                    >
                                </div>
                            </div>
                        }
                    }

                    <!-- Empty State -->
                    @if (
                        pendingRows().length === 0 &&
                        completedRows().length === 0 &&
                        failedRows().length === 0
                    ) {
                        <div class="py-16 text-center">
                            <mat-icon class="!text-5xl !w-12 !h-12 text-gray-300 mb-3">{{
                                searchQuery() ? 'search_off' : 'hourglass_empty'
                            }}</mat-icon>
                            <p class="text-sm text-gray-400">
                                @if (searchQuery()) {
                                    {{ 'batchProcessing.noResultsFound' | transloco }}
                                } @else {
                                    {{ 'batchProcessing.noCompletedRecordsYet' | transloco }}
                                }
                            </p>
                        </div>
                    }
                </div>
            </div>

            <!-- Row Detail Panel -->
            @if (selectedRow()) {
                <div #rowDetailPanel class="mt-6 bg-white rounded-2xl border border-gray-200 p-6">
                    @if (isLoadingDetail()) {
                        <!-- Skeleton loading state -->
                        <div class="animate-pulse space-y-4">
                            <div class="flex items-center justify-between">
                                <div class="h-5 bg-gray-200 rounded w-40"></div>
                                <div class="h-8 bg-gray-200 rounded w-48"></div>
                            </div>
                            <div class="space-y-3 pt-2">
                                <div class="h-4 bg-gray-100 rounded w-24"></div>
                                <div class="border border-gray-100 rounded-lg p-4 space-y-2">
                                    <div class="h-3 bg-gray-100 rounded w-full"></div>
                                    <div class="h-3 bg-gray-100 rounded w-3/4"></div>
                                    <div class="h-3 bg-gray-100 rounded w-1/2"></div>
                                </div>
                            </div>
                        </div>
                    } @else {
                        <div class="flex items-center justify-between mb-4">
                            <h3 class="font-semibold text-gray-900">
                                {{
                                    'batchProcessing.rowDetails'
                                        | transloco: { index: (selectedRow()?.rowIndex ?? 0) + 1 }
                                }}
                            </h3>
                            <div class="flex items-center gap-2">
                                <mat-button-toggle-group
                                    [value]="detailsViewMode()"
                                    (change)="detailsViewMode.set($event.value)"
                                    class="!rounded-lg"
                                >
                                    <mat-button-toggle value="readable">{{
                                        'batchProcessing.readable' | transloco
                                    }}</mat-button-toggle>
                                    <mat-button-toggle value="json">{{
                                        'batchProcessing.json' | transloco
                                    }}</mat-button-toggle>
                                </mat-button-toggle-group>
                                @if (selectedRow()?.status === 'completed') {
                                    <button
                                        mat-flat-button
                                        color="primary"
                                        (click)="generateRowReport(selectedRow()!)"
                                        class="!rounded-lg"
                                    >
                                        <mat-icon class="mr-2 icon-size-4">picture_as_pdf</mat-icon>
                                        {{ 'batchProcessing.generatePdfReport' | transloco }}
                                    </button>
                                }
                                <button mat-icon-button (click)="selectedRow.set(null)">
                                    <mat-icon>close</mat-icon>
                                </button>
                            </div>
                        </div>

                        <!-- Input Data (first) -->
                        <div class="mb-6">
                            <h4 class="text-sm font-medium text-gray-500 mb-3">
                                {{ 'batchProcessing.inputData' | transloco }}
                            </h4>
                            <div class="border border-gray-200 rounded-lg overflow-hidden bg-white">
                                @if (detailsViewMode() === 'readable') {
                                    <div class="px-4 py-3">
                                        @if (getInputDataFields().length > 0) {
                                            <div class="space-y-0">
                                                @for (
                                                    field of getInputDataFields();
                                                    track field.label
                                                ) {
                                                    <div
                                                        class="flex gap-4 py-2 border-b border-gray-100 last:border-0 text-sm"
                                                    >
                                                        <span
                                                            class="text-gray-500 min-w-[140px] shrink-0"
                                                            >{{ field.label }}</span
                                                        >
                                                        <span
                                                            class="text-gray-900 font-medium break-words"
                                                            >{{ field.value }}</span
                                                        >
                                                    </div>
                                                }
                                            </div>
                                        } @else {
                                            <p class="text-sm text-gray-400 py-2">\u2014</p>
                                        }
                                    </div>
                                } @else {
                                    <pre
                                        class="bg-gray-50 rounded-lg p-4 text-sm font-mono text-gray-800 overflow-auto max-h-64 m-0"
                                        >{{ formatJson(selectedRow()?.inputData) }}</pre
                                    >
                                }
                            </div>
                        </div>

                        <!-- Step Results (second) -->
                        @if (configSteps().length > 0 && selectedRow()?.results) {
                            <div class="mb-6">
                                <h4 class="text-sm font-medium text-gray-500 mb-3">
                                    {{ 'batchProcessing.stepResults' | transloco }}
                                </h4>
                                <div class="space-y-3">
                                    @for (step of configSteps(); track step.sequence) {
                                        <div
                                            class="border border-gray-200 rounded-lg overflow-hidden"
                                        >
                                            <div
                                                class="flex items-center justify-between px-4 py-3 bg-gray-50"
                                            >
                                                <div class="flex items-center gap-2">
                                                    <div
                                                        class="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                                                        [class]="
                                                            getRowStepStatus(
                                                                selectedRow()!,
                                                                step.sequence
                                                            ) === 'completed'
                                                                ? 'bg-emerald-100 text-emerald-600'
                                                                : getRowStepStatus(
                                                                        selectedRow()!,
                                                                        step.sequence
                                                                    ) === 'failed'
                                                                  ? 'bg-red-100 text-red-600'
                                                                  : 'bg-gray-100 text-gray-500'
                                                        "
                                                    >
                                                        {{ step.sequence }}
                                                    </div>
                                                    <span class="font-medium text-gray-700">{{
                                                        getStepName(step)
                                                    }}</span>
                                                </div>
                                                <span
                                                    class="text-xs font-medium px-2 py-1 rounded-full"
                                                    [class]="
                                                        getRowStepStatus(
                                                            selectedRow()!,
                                                            step.sequence
                                                        ) === 'completed'
                                                            ? 'bg-emerald-100 text-emerald-600'
                                                            : getRowStepStatus(
                                                                    selectedRow()!,
                                                                    step.sequence
                                                                ) === 'failed'
                                                              ? 'bg-red-100 text-red-600'
                                                              : 'bg-gray-100 text-gray-500'
                                                    "
                                                >
                                                    {{
                                                        'batchProcessing.' +
                                                            getRowStepStatus(
                                                                selectedRow()!,
                                                                step.sequence
                                                            ) | transloco
                                                    }}
                                                </span>
                                            </div>
                                            @if (selectedRow()?.results?.[step.sequence]) {
                                                @if (detailsViewMode() === 'readable') {
                                                    <div
                                                        class="px-4 py-3 bg-white border-t border-gray-100"
                                                    >
                                                        <div class="space-y-0">
                                                            @for (
                                                                field of getStepResultFields(
                                                                    selectedRow()?.results?.[
                                                                        step.sequence
                                                                    ]
                                                                );
                                                                track field.label
                                                            ) {
                                                                <div
                                                                    class="flex gap-4 py-2 border-b border-gray-100 last:border-0 text-sm"
                                                                >
                                                                    <span
                                                                        class="text-gray-500 min-w-[140px] shrink-0"
                                                                        >{{ field.label }}</span
                                                                    >
                                                                    <span
                                                                        class="text-gray-900 font-medium break-words"
                                                                        >{{ field.value }}</span
                                                                    >
                                                                </div>
                                                            }
                                                        </div>
                                                    </div>
                                                } @else {
                                                    <div
                                                        class="px-4 py-3 bg-white border-t border-gray-100"
                                                    >
                                                        <pre
                                                            class="bg-gray-50 rounded-lg p-3 text-xs font-mono text-gray-800 overflow-auto max-h-64 m-0"
                                                            >{{
                                                                formatJson(
                                                                    selectedRow()?.results?.[
                                                                        step.sequence
                                                                    ]
                                                                )
                                                            }}</pre
                                                        >
                                                    </div>
                                                }
                                            }
                                        </div>
                                    }
                                </div>
                            </div>
                        }

                        <!-- Errors (if any) -->
                        @if (selectedRow()?.errors && selectedRow()!.errors.length > 0) {
                            <div>
                                <h4 class="text-sm font-medium text-red-500 mb-3">
                                    {{ 'batchProcessing.errors' | transloco }}
                                </h4>
                                <div class="space-y-2">
                                    @for (error of selectedRow()!.errors; track error.step) {
                                        <div class="bg-red-50 border border-red-200 rounded-lg p-3">
                                            <p class="text-sm font-medium text-red-700">
                                                {{
                                                    'batchProcessing.stepError'
                                                        | transloco
                                                            : { step: error.step, code: error.code }
                                                }}
                                            </p>
                                            <p class="text-sm text-red-600">
                                                {{ error.message }}
                                            </p>
                                        </div>
                                    }
                                </div>
                            </div>
                        }
                    }
                </div>
            }
        }
    </div>
</div>
` }]
  }], null, { rowDetailPanel: [{
    type: ViewChild,
    args: ["rowDetailPanel"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BatchProcessingComponent, { className: "BatchProcessingComponent", filePath: "src/app/modules/smart-batch/dashboard/batch-processing/batch-processing.component.ts", lineNumber: 54 });
})();
export {
  BatchProcessingComponent
};
//# sourceMappingURL=chunk-QK3SASBH.js.map
