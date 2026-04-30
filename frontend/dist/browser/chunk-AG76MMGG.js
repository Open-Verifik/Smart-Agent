import {
  escapeCsvRow,
  getBatchInputCsvHeaders,
  inputDataValueForCsvCell
} from "./chunk-2M2KHA7S.js";
import {
  getStepDisplayFields
} from "./chunk-RJ42CGUZ.js";
import {
  MatButtonToggle,
  MatButtonToggleGroup,
  MatButtonToggleModule
} from "./chunk-VSTHZNYV.js";
import {
  utils,
  writeFileSync
} from "./chunk-D7QPQFDG.js";
import {
  SmartBatchService,
  getEffectiveSmartBatchSuccessWhen
} from "./chunk-OZON7ZNM.js";
import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-O7Z3HN3Z.js";
import {
  MatSnackBar,
  MatSnackBarModule
} from "./chunk-QRUO2OAL.js";
import {
  fuseAnimations
} from "./chunk-N2DOOPYF.js";
import "./chunk-RYDKXTHD.js";
import {
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger
} from "./chunk-IQSBZXDT.js";
import "./chunk-H3UX3NVF.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-FD5UKZMK.js";
import {
  ActivatedRoute,
  Router,
  RouterModule
} from "./chunk-NLVEQCVI.js";
import "./chunk-DZ5DWUCE.js";
import "./chunk-MJXNRHWH.js";
import {
  MatSelectModule
} from "./chunk-LTHY76JY.js";
import "./chunk-AY5C2ZOO.js";
import {
  MatInputModule
} from "./chunk-BY4NG7V4.js";
import {
  MatFormFieldModule
} from "./chunk-RNRTLQ3J.js";
import "./chunk-6OJR6OMX.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-S7CME3IL.js";
import "./chunk-OIBNGD5S.js";
import {
  TranslocoModule,
  TranslocoPipe,
  TranslocoService
} from "./chunk-KU43NSH4.js";
import {
  CdkFixedSizeVirtualScroll,
  CdkVirtualForOf,
  CdkVirtualScrollViewport,
  ScrollingModule
} from "./chunk-VK5CCBZ3.js";
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
  DecimalPipe,
  DomSanitizer,
  HttpErrorResponse,
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
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
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
  ɵɵpureFunction5,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeResourceUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-LLRZIRCV.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-KTESVR3Q.js";

// src/app/modules/smart-batch/dashboard/batch-processing/batch-processing.component.ts
var _c0 = ["rowDetailPanel"];
var _c1 = (a0, a1, a2, a3, a4) => ({ "bg-emerald-100 text-emerald-700": a0, "bg-amber-100 text-amber-700": a1, "bg-blue-100 text-blue-700": a2, "bg-red-100 text-red-700": a3, "bg-gray-100 text-gray-600": a4 });
var _c2 = (a0) => ({ conc: a0 });
var _c3 = (a0) => ({ rows: a0 });
var _c4 = (a0) => ({ index: a0 });
var _c5 = (a0) => ({ step: a0 });
var _c6 = (a0) => ({ count: a0 });
var _c7 = (a0, a1) => ({ step: a0, code: a1 });
var _forTrack0 = ($index, $item) => $item.sequence;
var _forTrack1 = ($index, $item) => $item.label;
var _forTrack2 = ($index, $item) => $item.step;
function BatchProcessingComponent_Conditional_21_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 21);
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
    \u0275\u0275elementStart(0, "button", 19);
    \u0275\u0275listener("click", function BatchProcessingComponent_Conditional_21_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.startProcessing());
    });
    \u0275\u0275elementStart(1, "span", 20);
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
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275listener("click", function BatchProcessingComponent_Conditional_22_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.pauseProcessing());
    });
    \u0275\u0275elementStart(1, "span", 20)(2, "mat-icon");
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
    \u0275\u0275elementStart(0, "button", 23);
    \u0275\u0275listener("click", function BatchProcessingComponent_Conditional_23_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.generateReport());
    });
    \u0275\u0275elementStart(1, "span", 20)(2, "mat-icon");
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
function BatchProcessingComponent_Conditional_24_Conditional_8_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 27);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, "batchProcessing.parallelActiveRows", \u0275\u0275pureFunction1(4, _c3, ctx_r1.processingActiveRowIndexes().join(", "))), " ");
  }
}
function BatchProcessingComponent_Conditional_24_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 26);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, BatchProcessingComponent_Conditional_24_Conditional_8_Conditional_3_Template, 3, 6, "p", 27);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 2, "batchProcessing.processingParallelHint", \u0275\u0275pureFunction1(5, _c2, ctx_r1.parallelRowConcurrency())), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.processingActiveRowIndexes().length > 0 ? 3 : -1);
  }
}
function BatchProcessingComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 24)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(7, "mat-progress-bar", 25);
    \u0275\u0275template(8, BatchProcessingComponent_Conditional_24_Conditional_8_Template, 4, 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 4, "batchProcessing.processing"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.progress(), "%");
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.progress());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.parallelRowConcurrency() > 1 ? 8 : -1);
  }
}
function BatchProcessingComponent_Conditional_25_For_7_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 36);
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
    \u0275\u0275elementStart(0, "span", 37);
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
    \u0275\u0275elementStart(0, "mat-icon", 38);
    \u0275\u0275text(1, "arrow_forward");
    \u0275\u0275elementEnd();
  }
}
function BatchProcessingComponent_Conditional_25_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 33);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 34)(4, "span", 35);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, BatchProcessingComponent_Conditional_25_For_7_Conditional_6_Template, 2, 2, "span", 36)(7, BatchProcessingComponent_Conditional_25_For_7_Conditional_7_Template, 4, 7, "span", 37);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, BatchProcessingComponent_Conditional_25_For_7_Conditional_8_Template, 2, 0, "mat-icon", 38);
  }
  if (rf & 2) {
    const step_r5 = ctx.$implicit;
    const \u0275$index_107_r6 = ctx.$index;
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
    \u0275\u0275conditional(\u0275$index_107_r6 < ctx_r1.configSteps().length - 1 ? 8 : -1);
  }
}
function BatchProcessingComponent_Conditional_25_Conditional_8_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 55);
    \u0275\u0275listener("click", function BatchProcessingComponent_Conditional_25_Conditional_8_Conditional_29_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.setRecordFilter("partial"));
    });
    \u0275\u0275elementStart(1, "div", 56)(2, "mat-icon", 57);
    \u0275\u0275text(3, "warning");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 43)(5, "p", 58);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 59);
    \u0275\u0275text(9);
    \u0275\u0275elementStart(10, "span", 60);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "transloco");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("ring-2", ctx_r1.recordFilter() === "partial")("ring-amber-400", ctx_r1.recordFilter() === "partial");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 7, "batchProcessing.partial"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.partialRows().length, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 9, "batchProcessing.requestsPartial"));
  }
}
function BatchProcessingComponent_Conditional_25_Conditional_8_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 61);
    \u0275\u0275listener("click", function BatchProcessingComponent_Conditional_25_Conditional_8_Conditional_30_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.setRecordFilter("failed"));
    });
    \u0275\u0275elementStart(1, "div", 62)(2, "mat-icon", 63);
    \u0275\u0275text(3, "error");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 43)(5, "p", 64);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 65);
    \u0275\u0275text(9);
    \u0275\u0275elementStart(10, "span", 66);
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
    \u0275\u0275elementStart(0, "div", 31)(1, "div", 39)(2, "div", 40)(3, "div", 41)(4, "mat-icon", 42);
    \u0275\u0275text(5, "payments");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 43)(7, "p", 44);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 45);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementStart(13, "span", 46);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "transloco");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(16, "div", 47);
    \u0275\u0275listener("click", function BatchProcessingComponent_Conditional_25_Conditional_8_Template_div_click_16_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setRecordFilter("completed"));
    });
    \u0275\u0275elementStart(17, "div", 48)(18, "mat-icon", 49);
    \u0275\u0275text(19, "check_circle");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 43)(21, "p", 50);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "p", 51);
    \u0275\u0275text(25);
    \u0275\u0275elementStart(26, "span", 52);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "transloco");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(29, BatchProcessingComponent_Conditional_25_Conditional_8_Conditional_29_Template, 13, 11, "div", 53)(30, BatchProcessingComponent_Conditional_25_Conditional_8_Conditional_30_Template, 13, 11, "div", 54);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 12, "batchProcessing.totalCost"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(12, 14, ctx_r1.totalCreditsCost(), "1.2-2"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 17, "batchProcessing.credits"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("ring-2", ctx_r1.recordFilter() === "completed")("ring-emerald-400", ctx_r1.recordFilter() === "completed");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(23, 19, "batchProcessing.successful"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.completedRows().length, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(28, 21, "batchProcessing.requestsSuccessful"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.partialRows().length > 0 ? 29 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.failedRows().length > 0 ? 30 : -1);
  }
}
function BatchProcessingComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 28)(2, "h3", 29);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 30);
    \u0275\u0275repeaterCreate(6, BatchProcessingComponent_Conditional_25_For_7_Template, 9, 6, null, null, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, BatchProcessingComponent_Conditional_25_Conditional_8_Template, 31, 23, "div", 31);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "batchProcessing.processingSteps"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.configSteps());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.completedRows().length > 0 || ctx_r1.partialRows().length > 0 || ctx_r1.failedRows().length > 0 ? 8 : -1);
  }
}
function BatchProcessingComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275element(1, "mat-spinner", 67);
    \u0275\u0275elementEnd();
  }
}
function BatchProcessingComponent_Conditional_28_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 77);
    \u0275\u0275listener("click", function BatchProcessingComponent_Conditional_28_Conditional_27_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setRecordFilter("partial"));
    });
    \u0275\u0275elementStart(1, "span", 79);
    \u0275\u0275element(2, "span", 93);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementStart(5, "span", 81);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", ctx_r1.recordFilter() === "partial" ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-700");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 3, "batchProcessing.partial"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.partialRows().length);
  }
}
function BatchProcessingComponent_Conditional_28_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 77);
    \u0275\u0275listener("click", function BatchProcessingComponent_Conditional_28_Conditional_28_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setRecordFilter("failed"));
    });
    \u0275\u0275elementStart(1, "span", 79);
    \u0275\u0275element(2, "span", 94);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementStart(5, "span", 81);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", ctx_r1.recordFilter() === "failed" ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-700");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 3, "batchProcessing.failed"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.failedRowsIgnoringSearch().length);
  }
}
function BatchProcessingComponent_Conditional_28_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275declareLet(0);
    \u0275\u0275elementStart(1, "button", 95);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementStart(3, "span", 96);
    \u0275\u0275element(4, "span", 97);
    \u0275\u0275elementStart(5, "mat-icon", 98);
    \u0275\u0275text(6, "download");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "mat-icon", 99);
    \u0275\u0275text(11, "arrow_drop_down");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "mat-menu", null, 0)(14, "button", 100);
    \u0275\u0275listener("click", function BatchProcessingComponent_Conditional_28_Conditional_30_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.downloadInputsExport("xlsx"));
    });
    \u0275\u0275elementStart(15, "mat-icon", 101);
    \u0275\u0275text(16, "table_chart");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "button", 100);
    \u0275\u0275listener("click", function BatchProcessingComponent_Conditional_28_Conditional_30_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.downloadInputsExport("csv"));
    });
    \u0275\u0275elementStart(21, "mat-icon", 101);
    \u0275\u0275text(22, "description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span");
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "button", 100);
    \u0275\u0275listener("click", function BatchProcessingComponent_Conditional_28_Conditional_30_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.downloadInputsExport("json"));
    });
    \u0275\u0275elementStart(27, "mat-icon", 101);
    \u0275\u0275text(28, "data_object");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span");
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "transloco");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const inputsExportMenu_r14 = \u0275\u0275reference(13);
    const exportUi_r15 = \u0275\u0275nextContext(2).inputsExportButtonUi();
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", inputsExportMenu_r14)("ngClass", exportUi_r15.accentClass)("matTooltip", \u0275\u0275pipeBind1(2, 9, exportUi_r15.tooltipKey));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", exportUi_r15.dotClass);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", exportUi_r15.iconClass);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 11, exportUi_r15.labelKey));
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 13, "batchProcessing.exportAsExcel"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 15, "batchProcessing.exportAsCsv"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(31, 17, "batchProcessing.exportAsJson"));
  }
}
function BatchProcessingComponent_Conditional_28_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 102);
    \u0275\u0275listener("click", function BatchProcessingComponent_Conditional_28_Conditional_36_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateSearchQuery(""));
    });
    \u0275\u0275elementStart(1, "mat-icon", 103);
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function BatchProcessingComponent_Conditional_28_Conditional_44_ng_container_1_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 108);
    \u0275\u0275listener("click", function BatchProcessingComponent_Conditional_28_Conditional_44_ng_container_1_Case_1_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r17);
      const item_r18 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.selectRow(item_r18.row));
    });
    \u0275\u0275elementStart(1, "div", 109)(2, "span", 110);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 43)(5, "p", 111);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 112)(9, "span", 113);
    \u0275\u0275element(10, "span", 114);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "transloco");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_5_0;
    const item_r18 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("bg-indigo-50", ((tmp_5_0 = ctx_r1.selectedRow()) == null ? null : tmp_5_0.rowIndex) === item_r18.row.rowIndex);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r18.row.rowIndex + 1, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (item_r18.row.inputData == null ? null : item_r18.row.inputData.documentNumber) || (item_r18.row.inputData == null ? null : item_r18.row.inputData.name) || \u0275\u0275pipeBind2(7, 5, "batchProcessing.rowNumber", \u0275\u0275pureFunction1(10, _c4, item_r18.row.rowIndex + 1)), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 8, "batchProcessing." + item_r18.row.status), " ");
  }
}
function BatchProcessingComponent_Conditional_28_Conditional_44_ng_container_1_Case_2_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 118)(1, "mat-icon", 122);
    \u0275\u0275text(2, "check");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const step_r20 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275property("matTooltip", ctx_r1.getStepName(step_r20));
  }
}
function BatchProcessingComponent_Conditional_28_Conditional_44_ng_container_1_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 108);
    \u0275\u0275listener("click", function BatchProcessingComponent_Conditional_28_Conditional_44_ng_container_1_Case_2_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r19);
      const item_r18 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.selectRow(item_r18.row));
    });
    \u0275\u0275elementStart(1, "div", 109)(2, "span", 115);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 43)(5, "p", 111);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 116)(9, "div", 117);
    \u0275\u0275repeaterCreate(10, BatchProcessingComponent_Conditional_28_Conditional_44_ng_container_1_Case_2_For_11_Template, 3, 1, "div", 118, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 119);
    \u0275\u0275element(13, "span", 120);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "mat-icon", 121);
    \u0275\u0275text(17, "chevron_right");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_5_0;
    const item_r18 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("bg-indigo-50", ((tmp_5_0 = ctx_r1.selectedRow()) == null ? null : tmp_5_0.rowIndex) === item_r18.row.rowIndex);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r18.row.rowIndex + 1, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (item_r18.row.inputData == null ? null : item_r18.row.inputData.documentNumber) || (item_r18.row.inputData == null ? null : item_r18.row.inputData.name) || \u0275\u0275pipeBind2(7, 5, "batchProcessing.rowNumber", \u0275\u0275pureFunction1(10, _c4, item_r18.row.rowIndex + 1)), " ");
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.configSteps());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 8, "batchProcessing.verified"), " ");
  }
}
function BatchProcessingComponent_Conditional_28_Conditional_44_ng_container_1_Case_3_For_14_Case_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 118);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275elementStart(2, "mat-icon", 122);
    \u0275\u0275text(3, "check");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const step_r22 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind2(1, 1, "batchProcessing.stepStatusCompleted", \u0275\u0275pureFunction1(4, _c5, ctx_r1.getStepName(step_r22))));
  }
}
function BatchProcessingComponent_Conditional_28_Conditional_44_ng_container_1_Case_3_For_14_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 127);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275elementStart(2, "mat-icon", 129);
    \u0275\u0275text(3, "close");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const step_r22 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind2(1, 1, "batchProcessing.stepStatusFailed", \u0275\u0275pureFunction1(4, _c5, ctx_r1.getStepName(step_r22))));
  }
}
function BatchProcessingComponent_Conditional_28_Conditional_44_ng_container_1_Case_3_For_14_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 128);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275elementStart(2, "mat-icon", 130);
    \u0275\u0275text(3, "remove");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const step_r22 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind2(1, 1, "batchProcessing.stepStatusSkipped", \u0275\u0275pureFunction1(4, _c5, ctx_r1.getStepName(step_r22))));
  }
}
function BatchProcessingComponent_Conditional_28_Conditional_44_ng_container_1_Case_3_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, BatchProcessingComponent_Conditional_28_Conditional_44_ng_container_1_Case_3_For_14_Case_0_Template, 4, 6, "div", 118)(1, BatchProcessingComponent_Conditional_28_Conditional_44_ng_container_1_Case_3_For_14_Case_1_Template, 4, 6, "div", 127)(2, BatchProcessingComponent_Conditional_28_Conditional_44_ng_container_1_Case_3_For_14_Case_2_Template, 4, 6, "div", 128);
  }
  if (rf & 2) {
    let tmp_15_0;
    const step_r22 = ctx.$implicit;
    const item_r18 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional((tmp_15_0 = ctx_r1.getRowStepStatus(item_r18.row, step_r22.sequence)) === "completed" ? 0 : tmp_15_0 === "failed" ? 1 : 2);
  }
}
function BatchProcessingComponent_Conditional_28_Conditional_44_ng_container_1_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 108);
    \u0275\u0275listener("click", function BatchProcessingComponent_Conditional_28_Conditional_44_ng_container_1_Case_3_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r21);
      const item_r18 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.selectRow(item_r18.row));
    });
    \u0275\u0275elementStart(1, "div", 109)(2, "span", 123);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 43)(5, "p", 111);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 124);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 116)(12, "div", 117);
    \u0275\u0275repeaterCreate(13, BatchProcessingComponent_Conditional_28_Conditional_44_ng_container_1_Case_3_For_14_Template, 3, 1, null, null, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 125);
    \u0275\u0275element(16, "span", 126);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "mat-icon", 121);
    \u0275\u0275text(20, "chevron_right");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_5_0;
    const item_r18 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("bg-amber-50", ((tmp_5_0 = ctx_r1.selectedRow()) == null ? null : tmp_5_0.rowIndex) === item_r18.row.rowIndex);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r18.row.rowIndex + 1, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (item_r18.row.inputData == null ? null : item_r18.row.inputData.documentNumber) || (item_r18.row.inputData == null ? null : item_r18.row.inputData.name) || \u0275\u0275pipeBind2(7, 6, "batchProcessing.rowNumber", \u0275\u0275pureFunction1(13, _c4, item_r18.row.rowIndex + 1)), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (item_r18.row.errors == null ? null : item_r18.row.errors[0] == null ? null : item_r18.row.errors[0].message) || \u0275\u0275pipeBind1(10, 9, "batchProcessing.partial"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.configSteps());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 11, "batchProcessing.partial"), " ");
  }
}
function BatchProcessingComponent_Conditional_28_Conditional_44_ng_container_1_Case_4_For_14_Case_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 118);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275elementStart(2, "mat-icon", 122);
    \u0275\u0275text(3, "check");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const step_r24 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind2(1, 1, "batchProcessing.stepStatusCompleted", \u0275\u0275pureFunction1(4, _c5, ctx_r1.getStepName(step_r24))));
  }
}
function BatchProcessingComponent_Conditional_28_Conditional_44_ng_container_1_Case_4_For_14_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 127);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275elementStart(2, "mat-icon", 129);
    \u0275\u0275text(3, "close");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const step_r24 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind2(1, 1, "batchProcessing.stepStatusFailed", \u0275\u0275pureFunction1(4, _c5, ctx_r1.getStepName(step_r24))));
  }
}
function BatchProcessingComponent_Conditional_28_Conditional_44_ng_container_1_Case_4_For_14_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 128);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275elementStart(2, "mat-icon", 130);
    \u0275\u0275text(3, "remove");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const step_r24 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind2(1, 1, "batchProcessing.stepStatusSkipped", \u0275\u0275pureFunction1(4, _c5, ctx_r1.getStepName(step_r24))));
  }
}
function BatchProcessingComponent_Conditional_28_Conditional_44_ng_container_1_Case_4_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, BatchProcessingComponent_Conditional_28_Conditional_44_ng_container_1_Case_4_For_14_Case_0_Template, 4, 6, "div", 118)(1, BatchProcessingComponent_Conditional_28_Conditional_44_ng_container_1_Case_4_For_14_Case_1_Template, 4, 6, "div", 127)(2, BatchProcessingComponent_Conditional_28_Conditional_44_ng_container_1_Case_4_For_14_Case_2_Template, 4, 6, "div", 128);
  }
  if (rf & 2) {
    let tmp_15_0;
    const step_r24 = ctx.$implicit;
    const item_r18 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional((tmp_15_0 = ctx_r1.getRowStepStatus(item_r18.row, step_r24.sequence)) === "completed" ? 0 : tmp_15_0 === "failed" ? 1 : 2);
  }
}
function BatchProcessingComponent_Conditional_28_Conditional_44_ng_container_1_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 108);
    \u0275\u0275listener("click", function BatchProcessingComponent_Conditional_28_Conditional_44_ng_container_1_Case_4_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r23);
      const item_r18 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.selectRow(item_r18.row));
    });
    \u0275\u0275elementStart(1, "div", 109)(2, "span", 131);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 43)(5, "p", 111);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 124);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 116)(12, "div", 117);
    \u0275\u0275repeaterCreate(13, BatchProcessingComponent_Conditional_28_Conditional_44_ng_container_1_Case_4_For_14_Template, 3, 1, null, null, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 132);
    \u0275\u0275element(16, "span", 133);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "mat-icon", 121);
    \u0275\u0275text(20, "chevron_right");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_5_0;
    const item_r18 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("bg-red-50", ((tmp_5_0 = ctx_r1.selectedRow()) == null ? null : tmp_5_0.rowIndex) === item_r18.row.rowIndex);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r18.row.rowIndex + 1, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (item_r18.row.inputData == null ? null : item_r18.row.inputData.documentNumber) || (item_r18.row.inputData == null ? null : item_r18.row.inputData.name) || \u0275\u0275pipeBind2(7, 6, "batchProcessing.rowNumber", \u0275\u0275pureFunction1(13, _c4, item_r18.row.rowIndex + 1)), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (item_r18.row.errors == null ? null : item_r18.row.errors[0] == null ? null : item_r18.row.errors[0].message) || \u0275\u0275pipeBind1(10, 9, "batchProcessing.failed"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.configSteps());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 11, "batchProcessing.failed"), " ");
  }
}
function BatchProcessingComponent_Conditional_28_Conditional_44_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, BatchProcessingComponent_Conditional_28_Conditional_44_ng_container_1_Case_1_Template, 13, 12, "div", 105)(2, BatchProcessingComponent_Conditional_28_Conditional_44_ng_container_1_Case_2_Template, 18, 12, "div", 105)(3, BatchProcessingComponent_Conditional_28_Conditional_44_ng_container_1_Case_3_Template, 21, 15, "div", 106)(4, BatchProcessingComponent_Conditional_28_Conditional_44_ng_container_1_Case_4_Template, 21, 15, "div", 107);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const item_r18 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_4_0 = item_r18.kind) === "pending" ? 1 : tmp_4_0 === "completed" ? 2 : tmp_4_0 === "partial" ? 3 : tmp_4_0 === "failed" ? 4 : -1);
  }
}
function BatchProcessingComponent_Conditional_28_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "cdk-virtual-scroll-viewport", 90);
    \u0275\u0275template(1, BatchProcessingComponent_Conditional_28_Conditional_44_ng_container_1_Template, 5, 1, "ng-container", 104);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("cdkVirtualForOf", ctx_r1.virtualTableItems())("cdkVirtualForTrackBy", ctx_r1.trackByVirtualRow);
  }
}
function BatchProcessingComponent_Conditional_28_Conditional_45_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "batchProcessing.noResultsFound"), " ");
  }
}
function BatchProcessingComponent_Conditional_28_Conditional_45_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "batchProcessing.noCompletedRecordsYet"), " ");
  }
}
function BatchProcessingComponent_Conditional_28_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 91)(1, "mat-icon", 134);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 135);
    \u0275\u0275template(4, BatchProcessingComponent_Conditional_28_Conditional_45_Conditional_4_Template, 2, 3)(5, BatchProcessingComponent_Conditional_28_Conditional_45_Conditional_5_Template, 2, 3);
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
function BatchProcessingComponent_Conditional_28_Conditional_46_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 136)(1, "div", 5);
    \u0275\u0275element(2, "div", 137)(3, "div", 138);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 139);
    \u0275\u0275element(5, "div", 140);
    \u0275\u0275elementStart(6, "div", 141);
    \u0275\u0275element(7, "div", 142)(8, "div", 143)(9, "div", 144);
    \u0275\u0275elementEnd()()();
  }
}
function BatchProcessingComponent_Conditional_28_Conditional_46_Conditional_3_Conditional_12_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 159);
    \u0275\u0275text(1, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "batchProcessing.continuing"), " ");
  }
}
function BatchProcessingComponent_Conditional_28_Conditional_46_Conditional_3_Conditional_12_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 160);
    \u0275\u0275text(1, "play_arrow");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 1, "batchProcessing.continuePendingSteps", \u0275\u0275pureFunction1(4, _c6, ctx_r1.getPendingStepCount(ctx_r1.selectedRow()))), " ");
  }
}
function BatchProcessingComponent_Conditional_28_Conditional_46_Conditional_3_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 158);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275listener("click", function BatchProcessingComponent_Conditional_28_Conditional_46_Conditional_3_Conditional_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.continuePendingSteps(ctx_r1.selectedRow()));
    });
    \u0275\u0275elementStart(2, "span", 20);
    \u0275\u0275template(3, BatchProcessingComponent_Conditional_28_Conditional_46_Conditional_3_Conditional_12_Conditional_3_Template, 4, 3)(4, BatchProcessingComponent_Conditional_28_Conditional_46_Conditional_3_Conditional_12_Conditional_4_Template, 4, 6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("disabled", ctx_r1.isContinuingRow(ctx_r1.selectedRow()))("matTooltip", \u0275\u0275pipeBind2(1, 3, "batchProcessing.continuePendingStepsHint", \u0275\u0275pureFunction1(6, _c6, ctx_r1.getPendingStepCount(ctx_r1.selectedRow()))));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.isContinuingRow(ctx_r1.selectedRow()) ? 3 : 4);
  }
}
function BatchProcessingComponent_Conditional_28_Conditional_46_Conditional_3_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 161);
    \u0275\u0275listener("click", function BatchProcessingComponent_Conditional_28_Conditional_46_Conditional_3_Conditional_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.generateRowReport(ctx_r1.selectedRow()));
    });
    \u0275\u0275elementStart(1, "mat-icon", 162);
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
function BatchProcessingComponent_Conditional_28_Conditional_46_Conditional_3_Conditional_22_Conditional_1_Conditional_1_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(7);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getSelectedRuesCategoryValue(), " ");
  }
}
function BatchProcessingComponent_Conditional_28_Conditional_46_Conditional_3_Conditional_22_Conditional_1_Conditional_1_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 171);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "batchProcessing.ruesCategoryNone"));
  }
}
function BatchProcessingComponent_Conditional_28_Conditional_46_Conditional_3_Conditional_22_Conditional_1_Conditional_1_Conditional_17_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 178);
    \u0275\u0275text(1, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "batchProcessing.retrying"), " ");
  }
}
function BatchProcessingComponent_Conditional_28_Conditional_46_Conditional_3_Conditional_22_Conditional_1_Conditional_1_Conditional_17_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 179);
    \u0275\u0275text(1, "restart_alt");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "batchProcessing.retryStep"), " ");
  }
}
function BatchProcessingComponent_Conditional_28_Conditional_46_Conditional_3_Conditional_22_Conditional_1_Conditional_1_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 176);
    \u0275\u0275listener("click", function BatchProcessingComponent_Conditional_28_Conditional_46_Conditional_3_Conditional_22_Conditional_1_Conditional_1_Conditional_17_Template_button_click_0_listener() {
      const failedStep_r30 = \u0275\u0275restoreView(_r29);
      const ctx_r1 = \u0275\u0275nextContext(7);
      return \u0275\u0275resetView(ctx_r1.retryStep(ctx_r1.selectedRow(), failedStep_r30));
    });
    \u0275\u0275elementStart(1, "span", 177);
    \u0275\u0275template(2, BatchProcessingComponent_Conditional_28_Conditional_46_Conditional_3_Conditional_22_Conditional_1_Conditional_1_Conditional_17_Conditional_2_Template, 4, 3)(3, BatchProcessingComponent_Conditional_28_Conditional_46_Conditional_3_Conditional_22_Conditional_1_Conditional_1_Conditional_17_Conditional_3_Template, 4, 3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const failedStep_r30 = ctx;
    const ctx_r1 = \u0275\u0275nextContext(7);
    \u0275\u0275property("disabled", ctx_r1.savingRuesCategory() || ctx_r1.isRetryingStep(ctx_r1.selectedRow(), failedStep_r30));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.isRetryingStep(ctx_r1.selectedRow(), failedStep_r30) ? 2 : 3);
  }
}
function BatchProcessingComponent_Conditional_28_Conditional_46_Conditional_3_Conditional_22_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 167)(1, "div", 112)(2, "p", 168);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "mat-icon", 169);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275text(7, "info_outline");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "p", 170);
    \u0275\u0275template(9, BatchProcessingComponent_Conditional_28_Conditional_46_Conditional_3_Conditional_22_Conditional_1_Conditional_1_Conditional_9_Template, 1, 1)(10, BatchProcessingComponent_Conditional_28_Conditional_46_Conditional_3_Conditional_22_Conditional_1_Conditional_1_Conditional_10_Template, 3, 3, "span", 171);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 172)(12, "button", 173);
    \u0275\u0275pipe(13, "transloco");
    \u0275\u0275pipe(14, "transloco");
    \u0275\u0275listener("click", function BatchProcessingComponent_Conditional_28_Conditional_46_Conditional_3_Conditional_22_Conditional_1_Conditional_1_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r1 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r1.beginRuesCategoryEdit());
    });
    \u0275\u0275elementStart(15, "mat-icon", 174);
    \u0275\u0275text(16, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(17, BatchProcessingComponent_Conditional_28_Conditional_46_Conditional_3_Conditional_22_Conditional_1_Conditional_1_Conditional_17_Template, 4, 2, "button", 175);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_13_0;
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 7, "batchProcessing.ruesCategory"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(6, 9, "batchProcessing.ruesCategoryHint"));
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.getSelectedRuesCategoryValue() ? 9 : 10);
    \u0275\u0275advance(3);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(13, 11, "batchProcessing.ruesCategoryEdit"))("disabled", ctx_r1.savingRuesCategory());
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(14, 13, "batchProcessing.ruesCategoryEdit"));
    \u0275\u0275advance(5);
    \u0275\u0275conditional((tmp_13_0 = ctx_r1.firstFailedStep()) ? 17 : -1, tmp_13_0);
  }
}
function BatchProcessingComponent_Conditional_28_Conditional_46_Conditional_3_Conditional_22_Conditional_1_Conditional_2_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 183);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r32 = ctx.$implicit;
    \u0275\u0275property("value", opt_r32);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", opt_r32, " ");
  }
}
function BatchProcessingComponent_Conditional_28_Conditional_46_Conditional_3_Conditional_22_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 166)(1, "label", 167)(2, "span", 180);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "select", 181);
    \u0275\u0275listener("ngModelChange", function BatchProcessingComponent_Conditional_28_Conditional_46_Conditional_3_Conditional_22_Conditional_1_Conditional_2_Template_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r31);
      const ctx_r1 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r1.ruesCategoryDraft.set($event));
    });
    \u0275\u0275elementStart(6, "option", 182);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(9, BatchProcessingComponent_Conditional_28_Conditional_46_Conditional_3_Conditional_22_Conditional_1_Conditional_2_For_10_Template, 2, 2, "option", 183, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 184)(12, "button", 185);
    \u0275\u0275listener("click", function BatchProcessingComponent_Conditional_28_Conditional_46_Conditional_3_Conditional_22_Conditional_1_Conditional_2_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r31);
      const ctx_r1 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r1.cancelRuesCategoryEdit());
    });
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 176);
    \u0275\u0275listener("click", function BatchProcessingComponent_Conditional_28_Conditional_46_Conditional_3_Conditional_22_Conditional_1_Conditional_2_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r31);
      const ctx_r1 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r1.applyRuesCategoryEdit());
    });
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "transloco");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 8, "batchProcessing.ruesCategory"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.ruesCategoryDraft())("disabled", ctx_r1.savingRuesCategory());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 10, "batchProcessing.ruesCategoryNone"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.ruesCategorySelectOptionsResolved());
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.savingRuesCategory());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 12, "batchProcessing.ruesCategoryCancel"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.savingRuesCategory());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 14, "batchProcessing.ruesCategoryApply"), " ");
  }
}
function BatchProcessingComponent_Conditional_28_Conditional_46_Conditional_3_Conditional_22_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 163);
    \u0275\u0275template(1, BatchProcessingComponent_Conditional_28_Conditional_46_Conditional_3_Conditional_22_Conditional_1_Conditional_1_Template, 18, 15)(2, BatchProcessingComponent_Conditional_28_Conditional_46_Conditional_3_Conditional_22_Conditional_1_Conditional_2_Template, 18, 16, "div", 166);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.ruesCategoryEditing() ? 1 : 2);
  }
}
function BatchProcessingComponent_Conditional_28_Conditional_46_Conditional_3_Conditional_22_Conditional_2_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 186)(1, "span", 187);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 188);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const field_r33 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(field_r33.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(field_r33.value);
  }
}
function BatchProcessingComponent_Conditional_28_Conditional_46_Conditional_3_Conditional_22_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 164);
    \u0275\u0275repeaterCreate(1, BatchProcessingComponent_Conditional_28_Conditional_46_Conditional_3_Conditional_22_Conditional_2_For_2_Template, 5, 2, "div", 186, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.getInputDataFields());
  }
}
function BatchProcessingComponent_Conditional_28_Conditional_46_Conditional_3_Conditional_22_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 165);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function BatchProcessingComponent_Conditional_28_Conditional_46_Conditional_3_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 156);
    \u0275\u0275template(1, BatchProcessingComponent_Conditional_28_Conditional_46_Conditional_3_Conditional_22_Conditional_1_Template, 3, 1, "div", 163)(2, BatchProcessingComponent_Conditional_28_Conditional_46_Conditional_3_Conditional_22_Conditional_2_Template, 3, 0, "div", 164)(3, BatchProcessingComponent_Conditional_28_Conditional_46_Conditional_3_Conditional_22_Conditional_3_Template, 2, 0, "p", 165);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.canEditRuesCategory() ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.getInputDataFields().length > 0 ? 2 : !ctx_r1.canEditRuesCategory() ? 3 : -1);
  }
}
function BatchProcessingComponent_Conditional_28_Conditional_46_Conditional_3_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "pre", 157);
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
function BatchProcessingComponent_Conditional_28_Conditional_46_Conditional_3_Conditional_24_For_6_Conditional_11_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 178);
    \u0275\u0275text(1, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "batchProcessing.retrying"), " ");
  }
}
function BatchProcessingComponent_Conditional_28_Conditional_46_Conditional_3_Conditional_24_For_6_Conditional_11_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 179);
    \u0275\u0275text(1, "restart_alt");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "batchProcessing.retryStep"), " ");
  }
}
function BatchProcessingComponent_Conditional_28_Conditional_46_Conditional_3_Conditional_24_For_6_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 196);
    \u0275\u0275listener("click", function BatchProcessingComponent_Conditional_28_Conditional_46_Conditional_3_Conditional_24_For_6_Conditional_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r34);
      const step_r35 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.retryStep(ctx_r1.selectedRow(), step_r35));
    });
    \u0275\u0275elementStart(1, "span", 177);
    \u0275\u0275template(2, BatchProcessingComponent_Conditional_28_Conditional_46_Conditional_3_Conditional_24_For_6_Conditional_11_Conditional_2_Template, 4, 3)(3, BatchProcessingComponent_Conditional_28_Conditional_46_Conditional_3_Conditional_24_For_6_Conditional_11_Conditional_3_Template, 4, 3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const step_r35 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275property("disabled", ctx_r1.isRetryingStep(ctx_r1.selectedRow(), step_r35));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.isRetryingStep(ctx_r1.selectedRow(), step_r35) ? 2 : 3);
  }
}
function BatchProcessingComponent_Conditional_28_Conditional_46_Conditional_3_Conditional_24_For_6_Conditional_12_Conditional_0_For_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 198)(1, "span", 199);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "iframe", 200);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementStart(5, "div", 201)(6, "button", 202);
    \u0275\u0275listener("click", function BatchProcessingComponent_Conditional_28_Conditional_46_Conditional_3_Conditional_24_For_6_Conditional_12_Conditional_0_For_3_Conditional_0_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r36);
      const field_r37 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(8);
      return \u0275\u0275resetView(ctx_r1.openPdfInNewTab(field_r37.dataUrl));
    });
    \u0275\u0275elementStart(7, "span", 20)(8, "mat-icon", 174);
    \u0275\u0275text(9, "open_in_new");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "button", 202);
    \u0275\u0275listener("click", function BatchProcessingComponent_Conditional_28_Conditional_46_Conditional_3_Conditional_24_For_6_Conditional_12_Conditional_0_For_3_Conditional_0_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r36);
      const field_r37 = \u0275\u0275nextContext().$implicit;
      const step_r35 = \u0275\u0275nextContext(3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.downloadPdf(field_r37.dataUrl, ctx_r1.getStepPdfFilename(ctx_r1.selectedRow().rowIndex, step_r35.sequence)));
    });
    \u0275\u0275elementStart(13, "span", 20)(14, "mat-icon", 174);
    \u0275\u0275text(15, "download");
    \u0275\u0275elementEnd();
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "transloco");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const field_r37 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(8);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(field_r37.label);
    \u0275\u0275advance();
    \u0275\u0275property("title", \u0275\u0275pipeBind1(4, 5, "batchProcessing.pdfPreview"))("src", ctx_r1.sanitizePdfIframeSrc(field_r37.dataUrl), \u0275\u0275sanitizeResourceUrl);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 7, "batchProcessing.openPdfInNewTab"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 9, "batchProcessing.downloadPdf"), " ");
  }
}
function BatchProcessingComponent_Conditional_28_Conditional_46_Conditional_3_Conditional_24_For_6_Conditional_12_Conditional_0_For_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 186)(1, "span", 187);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 188);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const field_r37 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(field_r37.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(field_r37.value);
  }
}
function BatchProcessingComponent_Conditional_28_Conditional_46_Conditional_3_Conditional_24_For_6_Conditional_12_Conditional_0_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, BatchProcessingComponent_Conditional_28_Conditional_46_Conditional_3_Conditional_24_For_6_Conditional_12_Conditional_0_For_3_Conditional_0_Template, 18, 11, "div", 198)(1, BatchProcessingComponent_Conditional_28_Conditional_46_Conditional_3_Conditional_24_For_6_Conditional_12_Conditional_0_For_3_Conditional_1_Template, 5, 2, "div", 186);
  }
  if (rf & 2) {
    const field_r37 = ctx.$implicit;
    \u0275\u0275conditional(field_r37.kind === "pdf" ? 0 : 1);
  }
}
function BatchProcessingComponent_Conditional_28_Conditional_46_Conditional_3_Conditional_24_For_6_Conditional_12_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 197)(1, "div", 164);
    \u0275\u0275repeaterCreate(2, BatchProcessingComponent_Conditional_28_Conditional_46_Conditional_3_Conditional_24_For_6_Conditional_12_Conditional_0_For_3_Template, 2, 1, null, null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_17_0;
    const step_r35 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.getStepResultDisplayFields((tmp_17_0 = ctx_r1.selectedRow()) == null ? null : tmp_17_0.results == null ? null : tmp_17_0.results[step_r35.sequence], ctx_r1.getStepFeatureCode(step_r35)));
  }
}
function BatchProcessingComponent_Conditional_28_Conditional_46_Conditional_3_Conditional_24_For_6_Conditional_12_Conditional_1_Conditional_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 207);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "smartReport.copied"));
  }
}
function BatchProcessingComponent_Conditional_28_Conditional_46_Conditional_3_Conditional_24_For_6_Conditional_12_Conditional_1_Conditional_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 208);
    \u0275\u0275text(1, "content_copy");
    \u0275\u0275elementEnd();
  }
}
function BatchProcessingComponent_Conditional_28_Conditional_46_Conditional_3_Conditional_24_For_6_Conditional_12_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 206);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275listener("click", function BatchProcessingComponent_Conditional_28_Conditional_46_Conditional_3_Conditional_24_For_6_Conditional_12_Conditional_1_Conditional_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r38);
      const step_r35 = \u0275\u0275nextContext(3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.copyBatchStepJsonToClipboard(ctx_r1.selectedRow().rowIndex, step_r35.sequence));
    });
    \u0275\u0275template(3, BatchProcessingComponent_Conditional_28_Conditional_46_Conditional_3_Conditional_24_For_6_Conditional_12_Conditional_1_Conditional_2_Conditional_3_Template, 3, 3, "span", 207)(4, BatchProcessingComponent_Conditional_28_Conditional_46_Conditional_3_Conditional_24_For_6_Conditional_12_Conditional_1_Conditional_2_Conditional_4_Template, 2, 0, "mat-icon", 208);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r35 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 3, "smartReport.copyJson"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 5, "smartReport.copyJson"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.batchJsonCopyShowsCopied(ctx_r1.selectedRow().rowIndex, step_r35.sequence) ? 3 : 4);
  }
}
function BatchProcessingComponent_Conditional_28_Conditional_46_Conditional_3_Conditional_24_For_6_Conditional_12_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 197)(1, "div", 203);
    \u0275\u0275template(2, BatchProcessingComponent_Conditional_28_Conditional_46_Conditional_3_Conditional_24_For_6_Conditional_12_Conditional_1_Conditional_2_Template, 5, 7, "button", 204);
    \u0275\u0275elementStart(3, "pre", 205);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_17_0;
    let tmp_18_0;
    const step_r35 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(((tmp_17_0 = ctx_r1.selectedRow()) == null ? null : tmp_17_0.results == null ? null : tmp_17_0.results[step_r35.sequence]) != null ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatStepResultJsonForDetail((tmp_18_0 = ctx_r1.selectedRow()) == null ? null : tmp_18_0.results == null ? null : tmp_18_0.results[step_r35.sequence]));
  }
}
function BatchProcessingComponent_Conditional_28_Conditional_46_Conditional_3_Conditional_24_For_6_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, BatchProcessingComponent_Conditional_28_Conditional_46_Conditional_3_Conditional_24_For_6_Conditional_12_Conditional_0_Template, 4, 0, "div", 197)(1, BatchProcessingComponent_Conditional_28_Conditional_46_Conditional_3_Conditional_24_For_6_Conditional_12_Conditional_1_Template, 5, 2, "div", 197);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275conditional(ctx_r1.detailsViewMode() === "readable" ? 0 : 1);
  }
}
function BatchProcessingComponent_Conditional_28_Conditional_46_Conditional_3_Conditional_24_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 190)(1, "div", 191)(2, "div", 116)(3, "div", 192);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 193);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 116)(8, "span", 194);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, BatchProcessingComponent_Conditional_28_Conditional_46_Conditional_3_Conditional_24_For_6_Conditional_11_Template, 4, 2, "button", 195);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, BatchProcessingComponent_Conditional_28_Conditional_46_Conditional_3_Conditional_24_For_6_Conditional_12_Template, 2, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_21_0;
    const step_r35 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r1.getRowStepStatus(ctx_r1.selectedRow(), step_r35.sequence) === "completed" ? "bg-emerald-100 text-emerald-600" : ctx_r1.getRowStepStatus(ctx_r1.selectedRow(), step_r35.sequence) === "failed" ? "bg-red-100 text-red-600" : "bg-gray-100 text-gray-500");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", step_r35.sequence, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getStepName(step_r35));
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.getRowStepStatus(ctx_r1.selectedRow(), step_r35.sequence) === "completed" ? "bg-emerald-100 text-emerald-600" : ctx_r1.getRowStepStatus(ctx_r1.selectedRow(), step_r35.sequence) === "failed" ? "bg-red-100 text-red-600" : "bg-gray-100 text-gray-500");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 9, "batchProcessing." + ctx_r1.getRowStepStatus(ctx_r1.selectedRow(), step_r35.sequence)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.canEditRuesCategory() && ctx_r1.getRowStepStatus(ctx_r1.selectedRow(), step_r35.sequence) === "failed" ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_21_0 = ctx_r1.selectedRow()) == null ? null : tmp_21_0.results == null ? null : tmp_21_0.results[step_r35.sequence]) ? 12 : -1);
  }
}
function BatchProcessingComponent_Conditional_28_Conditional_46_Conditional_3_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 153)(1, "h4", 154);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 189);
    \u0275\u0275repeaterCreate(5, BatchProcessingComponent_Conditional_28_Conditional_46_Conditional_3_Conditional_24_For_6_Template, 13, 11, "div", 190, _forTrack0);
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
function BatchProcessingComponent_Conditional_28_Conditional_46_Conditional_3_Conditional_25_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 211)(1, "p", 212);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 213);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const error_r39 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 2, "batchProcessing.stepError", \u0275\u0275pureFunction2(5, _c7, error_r39.step, error_r39.code)), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", error_r39.message, " ");
  }
}
function BatchProcessingComponent_Conditional_28_Conditional_46_Conditional_3_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "h4", 209);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 210);
    \u0275\u0275repeaterCreate(5, BatchProcessingComponent_Conditional_28_Conditional_46_Conditional_3_Conditional_25_For_6_Template, 6, 8, "div", 211, _forTrack2);
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
function BatchProcessingComponent_Conditional_28_Conditional_46_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 145)(1, "h3", 146);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 116)(5, "mat-button-toggle-group", 147);
    \u0275\u0275listener("change", function BatchProcessingComponent_Conditional_28_Conditional_46_Conditional_3_Template_mat_button_toggle_group_change_5_listener($event) {
      \u0275\u0275restoreView(_r25);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.detailsViewMode.set($event.value));
    });
    \u0275\u0275elementStart(6, "mat-button-toggle", 148);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "mat-button-toggle", 149);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, BatchProcessingComponent_Conditional_28_Conditional_46_Conditional_3_Conditional_12_Template, 5, 8, "button", 150)(13, BatchProcessingComponent_Conditional_28_Conditional_46_Conditional_3_Conditional_13_Template, 5, 3, "button", 151);
    \u0275\u0275elementStart(14, "button", 152);
    \u0275\u0275listener("click", function BatchProcessingComponent_Conditional_28_Conditional_46_Conditional_3_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.selectedRow.set(null));
    });
    \u0275\u0275elementStart(15, "mat-icon");
    \u0275\u0275text(16, "close");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(17, "div", 153)(18, "h4", 154);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 155);
    \u0275\u0275template(22, BatchProcessingComponent_Conditional_28_Conditional_46_Conditional_3_Conditional_22_Template, 4, 2, "div", 156)(23, BatchProcessingComponent_Conditional_28_Conditional_46_Conditional_3_Conditional_23_Template, 2, 1, "pre", 157);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(24, BatchProcessingComponent_Conditional_28_Conditional_46_Conditional_3_Conditional_24_Template, 7, 3, "div", 153)(25, BatchProcessingComponent_Conditional_28_Conditional_46_Conditional_3_Conditional_25_Template, 7, 3, "div");
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_9_0;
    let tmp_13_0;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 10, "batchProcessing.rowDetails", \u0275\u0275pureFunction1(19, _c4, ((tmp_4_0 = (tmp_4_0 = ctx_r1.selectedRow()) == null ? null : tmp_4_0.rowIndex) !== null && tmp_4_0 !== void 0 ? tmp_4_0 : 0) + 1)), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("value", ctx_r1.detailsViewMode());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 13, "batchProcessing.readable"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 15, "batchProcessing.json"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.selectedRow() && ctx_r1.hasPendingSteps(ctx_r1.selectedRow()) ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_9_0 = ctx_r1.selectedRow()) == null ? null : tmp_9_0.status) === "completed" ? 13 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(20, 17, "batchProcessing.inputData"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.detailsViewMode() === "readable" ? 22 : 23);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.configSteps().length > 0 && ctx_r1.selectedRow() ? 24 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_13_0 = ctx_r1.selectedRow()) == null ? null : tmp_13_0.errors) && ctx_r1.selectedRow().errors.length > 0 ? 25 : -1);
  }
}
function BatchProcessingComponent_Conditional_28_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 92, 1);
    \u0275\u0275template(2, BatchProcessingComponent_Conditional_28_Conditional_46_Conditional_2_Template, 10, 0, "div", 136)(3, BatchProcessingComponent_Conditional_28_Conditional_46_Conditional_3_Template, 26, 21);
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
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 68)(1, "div", 69)(2, "div", 70)(3, "mat-icon", 71);
    \u0275\u0275text(4, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "p", 72);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 73);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(12, "div", 74)(13, "div", 75)(14, "div", 76)(15, "button", 77);
    \u0275\u0275listener("click", function BatchProcessingComponent_Conditional_28_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setRecordFilter("all"));
    });
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "transloco");
    \u0275\u0275elementStart(18, "span", 78);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "button", 77);
    \u0275\u0275listener("click", function BatchProcessingComponent_Conditional_28_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setRecordFilter("completed"));
    });
    \u0275\u0275elementStart(21, "span", 79);
    \u0275\u0275element(22, "span", 80);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "transloco");
    \u0275\u0275elementStart(25, "span", 81);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(27, BatchProcessingComponent_Conditional_28_Conditional_27_Template, 7, 5, "button", 82)(28, BatchProcessingComponent_Conditional_28_Conditional_28_Template, 7, 5, "button", 82);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 83);
    \u0275\u0275template(30, BatchProcessingComponent_Conditional_28_Conditional_30_Template, 32, 19);
    \u0275\u0275elementStart(31, "div", 84)(32, "mat-icon", 85);
    \u0275\u0275text(33, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "input", 86);
    \u0275\u0275pipe(35, "transloco");
    \u0275\u0275listener("ngModelChange", function BatchProcessingComponent_Conditional_28_Template_input_ngModelChange_34_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateSearchQuery($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(36, BatchProcessingComponent_Conditional_28_Conditional_36_Template, 3, 0, "button", 87);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(37, "div", 88)(38, "span", 89);
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "span", 89);
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(44, BatchProcessingComponent_Conditional_28_Conditional_44_Template, 2, 2, "cdk-virtual-scroll-viewport", 90)(45, BatchProcessingComponent_Conditional_28_Conditional_45_Template, 6, 2, "div", 91);
    \u0275\u0275elementEnd();
    \u0275\u0275template(46, BatchProcessingComponent_Conditional_28_Conditional_46_Template, 4, 1, "div", 92);
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 18, "batchProcessing.continueOnFailureTitle"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 20, "batchProcessing.continueOnFailureBody"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngClass", ctx_r1.recordFilter() === "all" ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-700");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 22, "batchProcessing.all"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(((tmp_5_0 = ctx_r1.batch()) == null ? null : tmp_5_0.totalRows) || 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.recordFilter() === "completed" ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-700");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(24, 24, "batchProcessing.successful"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.completedRows().length);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.partialRows().length > 0 ? 27 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.failedRowsIgnoringSearch().length > 0 ? 28 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.canDownloadInputs() ? 30 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r1.searchQuery())("placeholder", \u0275\u0275pipeBind1(35, 26, "smartReport.searchRecords"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.searchQuery() ? 36 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(40, 28, "batchProcessing.records"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(43, 30, "batchProcessing.status"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.virtualTableItems().length > 0 ? 44 : 45);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.selectedRow() ? 46 : -1);
  }
}
var SMART_BATCH_ROW_CONCURRENCY = 5;
var RUES_SMART_BATCH_FEATURE_CODES = /* @__PURE__ */ new Set([
  "colombia_api_rues",
  "colombia_api_rues_full",
  "colombia_api_rues_v3",
  "colombia_api_rues_full_v3"
]);
var RUES_CATEGORY_FALLBACK_SORTED = [
  "RM",
  "PROP",
  "RUNEOL",
  "RNT",
  "ESAL",
  "ESOL",
  "RESAL",
  "JUEGOS",
  "EXTRANJERAS"
];
var BatchProcessingComponent = class _BatchProcessingComponent {
  constructor() {
    this._route = inject(ActivatedRoute);
    this._router = inject(Router);
    this._smartBatchService = inject(SmartBatchService);
    this._sanitizer = inject(DomSanitizer);
    this._transloco = inject(TranslocoService);
    this._snack = inject(MatSnackBar);
    this._destroy$ = new Subject();
    this._processingAborted = false;
    this._persistChain = Promise.resolve();
    this.parallelRowConcurrency = signal(1);
    this.processingActiveRowIndexes = signal([]);
    this.configId = signal(null);
    this.batchId = signal(null);
    this.batch = signal(null);
    this.configuration = signal(null);
    this.isLoading = signal(true);
    this.isProcessing = signal(false);
    this.isStarting = signal(false);
    this.retryingStepKey = signal(null);
    this.continuingRowIndex = signal(null);
    this.savingRuesCategory = signal(false);
    this.ruesCategoryEditing = signal(false);
    this.ruesCategoryDraft = signal("");
    this.batchJsonCopyFeedbackKey = signal(null);
    this._batchJsonCopyClearTimer = null;
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
    this.failedRowsIgnoringSearch = computed(() => {
      const b = this.batch();
      if (!b?.rows)
        return [];
      return b.rows.filter((r) => r.status === "failed");
    });
    this.rowsForInputsCsvExport = computed(() => {
      const b = this.batch();
      if (!b?.rows)
        return [];
      switch (this.recordFilter()) {
        case "completed":
          return b.rows.filter((r) => r.status === "completed");
        case "failed":
          return b.rows.filter((r) => r.status === "failed");
        case "partial":
          return b.rows.filter((r) => r.status === "partial");
        default:
          return [...b.rows];
      }
    });
    this.canDownloadInputs = computed(() => !!this.configuration() && this.rowsForInputsCsvExport().length > 0);
    this.inputsExportButtonUi = computed(() => {
      switch (this.recordFilter()) {
        case "completed":
          return {
            labelKey: "batchProcessing.downloadInputsSuccessful",
            tooltipKey: "batchProcessing.downloadInputsTooltipSuccessful",
            accentClass: "!border-emerald-500 !text-emerald-800 hover:!bg-emerald-50/90",
            dotClass: "bg-emerald-500",
            iconClass: "text-emerald-600"
          };
        case "failed":
          return {
            labelKey: "batchProcessing.downloadInputsFailed",
            tooltipKey: "batchProcessing.downloadInputsTooltipFailed",
            accentClass: "!border-red-500 !text-red-800 hover:!bg-red-50/90",
            dotClass: "bg-red-500",
            iconClass: "text-red-600"
          };
        case "partial":
          return {
            labelKey: "batchProcessing.downloadInputsPartial",
            tooltipKey: "batchProcessing.downloadInputsTooltipPartial",
            accentClass: "!border-amber-500 !text-amber-900 hover:!bg-amber-50/90",
            dotClass: "bg-amber-500",
            iconClass: "text-amber-600"
          };
        default:
          return {
            labelKey: "batchProcessing.downloadInputsAll",
            tooltipKey: "batchProcessing.downloadInputsTooltipAll",
            accentClass: "!border-slate-400 !text-slate-800 hover:!bg-slate-50/90",
            dotClass: "bg-slate-500",
            iconClass: "text-indigo-600"
          };
      }
    });
    this.partialRows = computed(() => {
      const b = this.batch();
      if (!b?.rows)
        return [];
      const query = this.searchQuery().toLowerCase().trim();
      let rows = b.rows.filter((r) => r.status === "partial");
      if (query)
        rows = rows.filter((r) => this._matchesSearch(r, query));
      return rows;
    });
    this.virtualTableItems = computed(() => {
      const toItems = (kind, rows) => rows.map((row) => ({ kind, row }));
      switch (this.recordFilter()) {
        case "completed":
          return toItems("completed", this.completedRows());
        case "partial":
          return toItems("partial", this.partialRows());
        case "failed":
          return toItems("failed", this.failedRows());
        default:
          return [
            ...toItems("pending", this.pendingRows()),
            ...toItems("completed", this.completedRows()),
            ...toItems("partial", this.partialRows()),
            ...toItems("failed", this.failedRows())
          ];
      }
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
      const finishedRows = (b.completedRows || 0) + (b.failedRows || 0) + (b.partialRows || 0);
      return Math.round(finishedRows / b.totalRows * 100);
    });
    this.selectedRow = signal(null);
    this.detailsViewMode = signal("readable");
    this.isLoadingDetail = signal(false);
    this.recordFilter = signal("all");
    this.searchQuery = signal("");
    this.canEditRuesCategory = computed(() => this.configSteps().some((step) => {
      const feat = step.appFeature;
      return !!feat?.code && RUES_SMART_BATCH_FEATURE_CODES.has(feat.code) && (feat.dependencies || []).some((d) => d.field === "category");
    }));
    this.ruesCategorySelectOptionsResolved = computed(() => {
      const union = /* @__PURE__ */ new Set();
      for (const step of this.configSteps()) {
        const feat = step.appFeature;
        if (!feat?.code || !RUES_SMART_BATCH_FEATURE_CODES.has(feat.code))
          continue;
        const catDep = (feat.dependencies || []).find((d) => d.field === "category");
        if (catDep?.enum?.length) {
          catDep.enum.forEach((e) => union.add(String(e)));
        }
      }
      return union.size > 0 ? [...union].sort((a, b) => a.localeCompare(b)) : [...RUES_CATEGORY_FALLBACK_SORTED];
    });
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
    this._clearBatchJsonCopyTimer();
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
   * Serialize every smart-batch row PUT against races on parent `completedRows` / aggregates.
   */
  _serializedBatchRowMutation(mutation) {
    return __async(this, null, function* () {
      const pending = this._persistChain.then(() => mutation());
      this._persistChain = pending.then(() => void 0, () => void 0);
      return pending;
    });
  }
  _awaitPersistDrain() {
    return __async(this, null, function* () {
      yield this._persistChain.catch(() => void 0);
    });
  }
  /**
   * Process all pending rows by making API calls from the frontend.
   * Multi-step configs run one row at a time (sequential workers) because mid-row resume and
   * persist-between-steps semantics are ambiguous with concurrency; parallel mode is enabled only when
   * there is exactly one enabled step (see `SMART_BATCH_ROW_CONCURRENCY`).
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
      this._persistChain = Promise.resolve();
      const useParallelWorkers = steps.length === 1 && !this._processingAborted;
      const parallel = useParallelWorkers ? SMART_BATCH_ROW_CONCURRENCY : 1;
      this.parallelRowConcurrency.set(parallel);
      this.processingActiveRowIndexes.set([]);
      const rowsSnapshot = [...currentBatch.rows];
      const rowsToProcess = rowsSnapshot.filter((r) => !this._isTerminalRowStatus(r.status));
      console.log(`Starting/Resuming processing for ${currentBatch.rows.length} rows (${parallel === 1 ? "sequential" : `up to ${parallel} parallel`})`);
      if (parallel === 1) {
        for (const row of rowsToProcess) {
          if (this._processingAborted)
            break;
          this.currentRowIndex.set(row.rowIndex);
          yield this._processRow(row, steps);
        }
      } else {
        yield this._processRowsWithConcurrency(rowsToProcess, steps, parallel);
      }
      yield this._awaitPersistDrain();
      this._loadBatch();
      this.isProcessing.set(false);
      this.currentRowIndex.set(null);
      this.currentStepIndex.set(null);
      this.parallelRowConcurrency.set(1);
      this.processingActiveRowIndexes.set([]);
    });
  }
  /** Parallel worker pool over rows (single-step batches only). */
  _processRowsWithConcurrency(rows, steps, concurrency) {
    return __async(this, null, function* () {
      if (rows.length === 0 || this._processingAborted)
        return;
      const workerCount = Math.min(concurrency, rows.length);
      let next = 0;
      const active = /* @__PURE__ */ new Set();
      const runOneWorker = () => __async(this, null, function* () {
        while (!this._processingAborted) {
          const idx = next++;
          if (idx >= rows.length)
            return;
          const row = rows[idx];
          active.add(row.rowIndex);
          this.processingActiveRowIndexes.set([...active].sort((a, b) => a - b));
          try {
            yield this._processRow(row, steps);
          } finally {
            active.delete(row.rowIndex);
            this.processingActiveRowIndexes.set([...active].sort((a, b) => a - b));
          }
        }
      });
      yield Promise.all(Array.from({ length: workerCount }, () => runOneWorker()));
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
      const enabledSequences = steps.map((step) => step.sequence);
      const initialResults = __spreadValues({}, row.results || {});
      const initialErrors = [...row.errors || []];
      const stepsToRun = this._getRunnableSteps(steps, initialResults, initialErrors);
      yield this._runSteps(row, stepsToRun, initialResults, initialErrors, {
        batchId,
        enabledSequences,
        persistProgress: true
      });
    });
  }
  /**
   * Persists row snapshot to the API and refreshes local batch + selected row (live UI).
   * @param isFinal When false, row status is `processing`; when true, uses derived terminal outcome.
   */
  _persistRowProgress(batchId, rowIndex, results, errors, enabledSequences, isFinal) {
    return __async(this, null, function* () {
      const status = isFinal ? this._deriveRowOutcome(results, errors, enabledSequences) : "processing";
      return this._serializedBatchRowMutation(() => __async(this, null, function* () {
        const updatedBatch = yield firstValueFrom(this._smartBatchService.updateBatchRow(batchId, rowIndex, {
          status,
          results,
          errors
        }));
        this.batch.set(updatedBatch.data);
        const sel = this.selectedRow();
        if (sel?.rowIndex === rowIndex) {
          const updatedRow = updatedBatch.data.rows.find((item) => item.rowIndex === rowIndex);
          if (updatedRow) {
            this.selectedRow.set(updatedRow);
          }
        }
      }));
    });
  }
  _runSteps(row, steps, initialResults, initialErrors, persist) {
    return __async(this, null, function* () {
      const results = __spreadValues({}, initialResults);
      let errors = [...initialErrors];
      const doPersist = persist?.persistProgress && !!persist.batchId;
      const showFineGrainedRowStepUi = this.parallelRowConcurrency() <= 1;
      for (let i = 0; i < steps.length; i++) {
        if (this._processingAborted)
          break;
        const step = steps[i];
        if (showFineGrainedRowStepUi) {
          this.currentRowIndex.set(row.rowIndex);
          this.currentStepIndex.set(step.sequence);
        }
        const outcome = yield this._executeStep(row, step);
        if ("result" in outcome) {
          results[step.sequence] = outcome.result;
          errors = this._withoutStepError(errors, step.sequence);
        } else {
          delete results[step.sequence];
          errors = this._replaceStepError(errors, outcome.error);
        }
        if (doPersist && persist) {
          const isLast = i === steps.length - 1;
          try {
            yield this._persistRowProgress(persist.batchId, row.rowIndex, results, errors, persist.enabledSequences, isLast);
          } catch (err) {
            console.error(`Failed to persist row ${row.rowIndex} after step ${step.sequence}:`, err);
          }
        }
      }
      return { results, errors };
    });
  }
  _executeStep(row, step) {
    return __async(this, null, function* () {
      const params = this._buildStepParams(row.inputData, step);
      const feature = step.appFeature;
      try {
        const featureUrl = feature?.url;
        const featureMethod = feature?.method || "GET";
        if (!featureUrl) {
          throw new Error(`Step ${step.sequence} has no URL configured`);
        }
        const response = yield firstValueFrom(this._smartBatchService.executeFeatureRequest(featureUrl, featureMethod, params));
        return { sequence: step.sequence, result: response.data };
      } catch (err) {
        if (err instanceof HttpErrorResponse && this._matchesSmartBatchSuccessWhen(feature, err.status, this._httpErrorBodyCode(err))) {
          return {
            sequence: step.sequence,
            result: this._normalizeSmartBatchBenignResult(feature, params, err)
          };
        }
        const anyErr = err;
        console.error(`Step ${step.sequence} failed for row ${row.rowIndex}:`, err);
        return {
          sequence: step.sequence,
          error: {
            step: step.sequence,
            message: anyErr?.error?.message || anyErr?.message || "Step execution failed",
            code: anyErr?.error?.code || "STEP_ERROR"
          }
        };
      }
    });
  }
  _httpErrorBodyCode(err) {
    const body = err.error;
    if (body && typeof body === "object" && "code" in body) {
      const c = body.code;
      return c != null ? String(c) : void 0;
    }
    return void 0;
  }
  _matchesSmartBatchSuccessWhen(feature, httpStatus, responseCode) {
    const rules = getEffectiveSmartBatchSuccessWhen(feature);
    if (!rules?.length)
      return false;
    return rules.some((rule) => {
      if (rule.httpStatus !== httpStatus)
        return false;
      const codes = rule.responseCodes;
      if (codes?.length) {
        return responseCode != null && codes.includes(responseCode);
      }
      return true;
    });
  }
  /**
   * Normalized payload stored as step result when an HTTP error is treated as success (matches API "no record" shapes).
   */
  _normalizeSmartBatchBenignResult(feature, params, err) {
    const meta = {
      smartBatchInterpretation: "no_record",
      benignHttpStatus: err.status
    };
    if (feature.code === "colombia_pep_lookup") {
      return __spreadValues({
        documentType: params.documentType,
        documentNumber: params.documentNumber,
        detail: []
      }, meta);
    }
    if (feature.code === "api_colombia_contracts") {
      return __spreadValues({
        documentType: params.documentType,
        documentNumber: params.documentNumber,
        contractor: [],
        contracts: []
      }, meta);
    }
    const out = __spreadValues({}, meta);
    for (const dep of feature.dependencies || []) {
      const f = dep.field;
      if (f && params[f] !== void 0)
        out[f] = params[f];
    }
    return out;
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
  retryStep(row, step) {
    return __async(this, null, function* () {
      const batchId = this.batchId();
      if (!batchId || this.isProcessing() || row.status === "pending" || row.status === "processing") {
        return;
      }
      const retryKey = this._getRetryKey(row, step);
      const enabledSequences = this.configSteps().map((configStep) => configStep.sequence);
      this.retryingStepKey.set(retryKey);
      this.currentRowIndex.set(row.rowIndex);
      this.currentStepIndex.set(step.sequence);
      const results = __spreadValues({}, row.results || {});
      let errors = [...row.errors || []];
      const retryOutcome = yield this._executeStep(row, step);
      try {
        if ("result" in retryOutcome) {
          results[step.sequence] = retryOutcome.result;
          errors = this._withoutStepError(errors, step.sequence);
          const remainingSteps = this.configSteps().filter((configStep) => configStep.sequence > step.sequence && !this._hasStepResult(results, configStep.sequence) && !this.getStepError(__spreadProps(__spreadValues({}, row), { errors }), configStep.sequence));
          if (remainingSteps.length === 0) {
            const status = this._deriveRowOutcome(results, errors, enabledSequences);
            try {
              yield this._serializedBatchRowMutation(() => __async(this, null, function* () {
                const updatedBatch = yield firstValueFrom(this._smartBatchService.updateBatchRow(batchId, row.rowIndex, {
                  status,
                  results,
                  errors
                }));
                this.batch.set(updatedBatch.data);
                const updatedRow = updatedBatch.data.rows.find((item) => item.rowIndex === row.rowIndex);
                if (updatedRow) {
                  this.selectedRow.set(updatedRow);
                }
              }));
            } catch (err) {
              console.error(`Failed to update row ${row.rowIndex}:`, err);
            }
          } else {
            try {
              yield this._persistRowProgress(batchId, row.rowIndex, results, errors, enabledSequences, false);
            } catch (err) {
              console.error(`Failed to persist row ${row.rowIndex} after retry:`, err);
            }
            const resumed = yield this._runSteps(row, remainingSteps, results, errors, {
              batchId,
              enabledSequences,
              persistProgress: true
            });
            Object.assign(results, resumed.results);
            errors = resumed.errors;
          }
        } else {
          delete results[step.sequence];
          errors = this._replaceStepError(errors, retryOutcome.error);
          const status = this._deriveRowOutcome(results, errors, enabledSequences);
          try {
            yield this._serializedBatchRowMutation(() => __async(this, null, function* () {
              const updatedBatch = yield firstValueFrom(this._smartBatchService.updateBatchRow(batchId, row.rowIndex, {
                status,
                results,
                errors
              }));
              this.batch.set(updatedBatch.data);
              const updatedRow = updatedBatch.data.rows.find((item) => item.rowIndex === row.rowIndex);
              if (updatedRow) {
                this.selectedRow.set(updatedRow);
              }
            }));
          } catch (err) {
            console.error(`Failed to update row ${row.rowIndex}:`, err);
          }
        }
      } catch (err) {
        console.error(`Failed to retry step ${step.sequence} for row ${row.rowIndex}:`, err);
      } finally {
        this.retryingStepKey.set(null);
        this.currentRowIndex.set(null);
        this.currentStepIndex.set(null);
      }
    });
  }
  continuePendingSteps(row) {
    return __async(this, null, function* () {
      const batchId = this.batchId();
      if (!batchId || this.isProcessing() || this.isContinuingRow(row))
        return;
      const steps = this.configSteps();
      const enabledSequences = steps.map((configStep) => configStep.sequence);
      const initialResults = __spreadValues({}, row.results || {});
      const initialErrors = [...row.errors || []];
      const stepsToRun = this._getRunnableSteps(steps, initialResults, initialErrors);
      if (stepsToRun.length === 0)
        return;
      this.continuingRowIndex.set(row.rowIndex);
      this.currentRowIndex.set(row.rowIndex);
      try {
        yield this._runSteps(row, stepsToRun, initialResults, initialErrors, {
          batchId,
          enabledSequences,
          persistProgress: true
        });
      } catch (err) {
        console.error(`Failed to continue row ${row.rowIndex}:`, err);
      } finally {
        this.continuingRowIndex.set(null);
        this.currentRowIndex.set(null);
        this.currentStepIndex.set(null);
      }
    });
  }
  pauseProcessing() {
    this._processingAborted = true;
    this.isProcessing.set(false);
  }
  /**
   * Builds column order and one plain object per row (input fields only) for CSV / Excel / JSON export.
   */
  _buildInputsExportTable() {
    const config = this.configuration();
    const batchRows = this.rowsForInputsCsvExport();
    if (!config || batchRows.length === 0)
      return null;
    const baseHeaders = getBatchInputCsvHeaders(config);
    const extraKeys = /* @__PURE__ */ new Set();
    for (const row of batchRows) {
      const raw = row.inputData;
      if (raw != null && typeof raw === "object" && !Array.isArray(raw)) {
        Object.keys(raw).forEach((k) => {
          if (!baseHeaders.includes(k))
            extraKeys.add(k);
        });
      }
    }
    const extrasSorted = [...extraKeys].sort((a, b) => a.localeCompare(b));
    const columns = baseHeaders.length > 0 ? [...baseHeaders, ...extrasSorted.filter((k) => !baseHeaders.includes(k))] : batchRows[0]?.inputData != null && typeof batchRows[0].inputData === "object" ? [
      ...Object.keys(batchRows[0].inputData).sort((a, b) => a.localeCompare(b))
    ] : [];
    if (columns.length === 0)
      return null;
    const objects = batchRows.map((row) => {
      const data = row.inputData != null && typeof row.inputData === "object" && !Array.isArray(row.inputData) ? row.inputData : {};
      const o = {};
      for (const key of columns) {
        o[key] = Object.prototype.hasOwnProperty.call(data, key) ? data[key] ?? "" : "";
      }
      return o;
    });
    return { columns, objects };
  }
  downloadInputsExport(format) {
    const b = this.batch();
    const table = this._buildInputsExportTable();
    if (!table || !b) {
      this._snack.open(this._transloco.translate("batchProcessing.inputExportNoRows"), this._transloco.translate("batchProcessing.failedExportDismiss"), { duration: 3e3 });
      return;
    }
    const { columns, objects } = table;
    const rowCount = objects.length;
    const filterSlug = this._inputsExportFilterSlug();
    const sanitizedName = (b.name || "batch").replace(/[^a-zA-Z0-9_.-]+/g, "_");
    const idPart = this.batchId() || "export";
    const baseName = `batch-inputs_${filterSlug}_${sanitizedName}_${idPart}`.replace(/[/\\]/g, "_");
    if (format === "csv") {
      const csvRows = [escapeCsvRow(columns)];
      for (const o of objects) {
        const cells = columns.map((key) => inputDataValueForCsvCell(Object.prototype.hasOwnProperty.call(o, key) ? o[key] : ""));
        csvRows.push(escapeCsvRow(cells));
      }
      const blob = new Blob([`\uFEFF${csvRows.join("\n")}`], {
        type: "text/csv;charset=utf-8;"
      });
      const url = URL.createObjectURL(blob);
      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = `${baseName}.csv`;
      anchor.click();
      setTimeout(() => URL.revokeObjectURL(url), 2e3);
    } else if (format === "json") {
      const blob = new Blob([JSON.stringify(objects, null, 2)], {
        type: "application/json;charset=utf-8;"
      });
      const url = URL.createObjectURL(blob);
      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = `${baseName}.json`;
      anchor.click();
      setTimeout(() => URL.revokeObjectURL(url), 2e3);
    } else {
      const wb = utils.book_new();
      const ws = utils.json_to_sheet(objects, { header: columns });
      utils.book_append_sheet(wb, ws, "Inputs");
      const xlsxName = `${baseName}.xlsx`.replace(/[/\\]/g, "_");
      writeFileSync(wb, xlsxName);
    }
    const formatLabel = this._transloco.translate(`batchProcessing.exportFormatLabel_${format}`);
    this._snack.open(this._transloco.translate("batchProcessing.inputExportDoneWithFormat", {
      count: rowCount,
      format: formatLabel
    }), this._transloco.translate("batchProcessing.failedExportDismiss"), { duration: 2500 });
  }
  _inputsExportFilterSlug() {
    switch (this.recordFilter()) {
      case "completed":
        return "completed";
      case "failed":
        return "failed";
      case "partial":
        return "partial";
      default:
        return "all";
    }
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
    this.ruesCategoryEditing.set(false);
    this.ruesCategoryDraft.set("");
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
  trackByVirtualRow(_index, item) {
    return item.row.rowIndex;
  }
  getStatusColor(status) {
    switch (status) {
      case "completed":
        return "text-emerald-600";
      case "failed":
        return "text-red-600";
      case "partial":
        return "text-amber-600";
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
      case "partial":
        return "warning";
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
  _labelFromApiKey(key) {
    return key.replace(/([A-Z])/g, " $1").replace(/^./, (s) => s.toUpperCase()).trim();
  }
  _isPdfBase64PropertyKey(key) {
    return key.toLowerCase() === "pdfbase64";
  }
  _isPdfApplicationDataUrl(value) {
    return value.trim().toLowerCase().startsWith("data:application/pdf;base64,");
  }
  /**
   * True when API key is pdfBase64, or the value is explicitly a PDF data URL.
   */
  _shouldTreatAsEmbeddedPdf(key, raw) {
    return typeof raw === "string" && raw.length > 0 && (this._isPdfBase64PropertyKey(key) || this._isPdfApplicationDataUrl(raw));
  }
  _normalizePdfDataUrl(raw) {
    const t = raw.trim();
    return t.startsWith("data:") ? t : `data:application/pdf;base64,${t}`;
  }
  _pdfBase64Payload(dataUrlOrBase64) {
    const t = dataUrlOrBase64.trim();
    const ix = t.indexOf("base64,");
    if (ix !== -1)
      return t.slice(ix + 7);
    return t;
  }
  sanitizePdfIframeSrc(dataUrl) {
    return this._sanitizer.bypassSecurityTrustResourceUrl(dataUrl.trim());
  }
  openPdfInNewTab(dataUrl) {
    const url = this._normalizePdfDataUrl(dataUrl);
    window.open(url, "_blank", "noopener,noreferrer");
  }
  /** Download anchor using a blob URL (more reliable across browsers than data URLs). */
  downloadPdf(dataUrl, filename) {
    const normalized = this._normalizePdfDataUrl(dataUrl);
    let blobUrl;
    try {
      const b64 = this._pdfBase64Payload(normalized);
      const binary = atob(b64);
      const bytes = new Uint8Array(binary.length);
      for (let i = 0; i < binary.length; i++) {
        bytes[i] = binary.charCodeAt(i);
      }
      const blob = new Blob([bytes], { type: "application/pdf" });
      blobUrl = URL.createObjectURL(blob);
    } catch {
      return;
    }
    const anchor = document.createElement("a");
    anchor.href = blobUrl;
    anchor.download = filename || "document.pdf";
    anchor.click();
    setTimeout(() => URL.revokeObjectURL(blobUrl), 2e3);
  }
  getStepPdfFilename(rowIndex, stepSequence) {
    return `batch-row-${rowIndex + 1}-step-${stepSequence}.pdf`;
  }
  /** `AppFeature.code` when `appFeature` is expanded (matches report viewer). */
  getStepFeatureCode(step) {
    const feature = step.appFeature;
    return typeof feature === "object" && feature != null && "code" in feature ? feature.code : void 0;
  }
  /**
   * Flatten a step result object into label/value rows for document-style display.
   * Nested objects/arrays are summarized briefly (input data only; use getStepResultDisplayFields for PDF steps).
   */
  getStepResultFields(data) {
    if (data == null || typeof data !== "object") {
      return [{ label: "Result", value: data != null ? String(data) : "\u2014" }];
    }
    const entries = [];
    for (const key of Object.keys(data)) {
      const label = this._labelFromApiKey(key);
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
  /**
   * Step result rows for readable panel: recursive flatten + presenters (report viewer parity).
   * Top-level PDF fields are stripped for flattening (RUES needs one pass on the rest), then PDF iframes appended.
   */
  getStepResultDisplayFields(data, featureCode) {
    const ctx = { featureCode: featureCode ?? void 0 };
    if (data == null || typeof data !== "object" || Array.isArray(data)) {
      return getStepDisplayFields(ctx, data).map((r) => ({
        kind: "text",
        label: r.label,
        value: r.value
      }));
    }
    const o = data;
    const sanitized = __spreadValues({}, o);
    const pdfPanels = [];
    for (const key of Object.keys(o)) {
      const raw = o[key];
      if (this._shouldTreatAsEmbeddedPdf(key, raw)) {
        delete sanitized[key];
        pdfPanels.push({
          kind: "pdf",
          label: this._labelFromApiKey(key),
          dataUrl: this._normalizePdfDataUrl(raw)
        });
      }
    }
    const textRows = getStepDisplayFields(ctx, sanitized).map((r) => ({ kind: "text", label: r.label, value: r.value }));
    return [...textRows, ...pdfPanels];
  }
  /** Input data as label/value pairs for readable display; empty if not an object */
  getInputDataFields() {
    const input = this.selectedRow()?.inputData;
    if (input == null || typeof input !== "object")
      return [];
    const o = input;
    const excludeCategory = this.canEditRuesCategory();
    const trimmed = {};
    for (const k of Object.keys(o)) {
      if (excludeCategory && k === "category")
        continue;
      trimmed[k] = o[k];
    }
    return this.getStepResultFields(trimmed);
  }
  getSelectedRuesCategoryValue() {
    const raw = this.selectedRow()?.inputData?.category;
    if (raw === null || raw === void 0 || raw === "")
      return "";
    return String(raw);
  }
  /** First step in failed state (for primary Retry next to RUES inputs). */
  firstFailedStep() {
    const row = this.selectedRow();
    if (!row)
      return null;
    for (const step of this.configSteps()) {
      if (this.getRowStepStatus(row, step.sequence) === "failed") {
        return step;
      }
    }
    return null;
  }
  beginRuesCategoryEdit() {
    this.ruesCategoryDraft.set(this.getSelectedRuesCategoryValue());
    this.ruesCategoryEditing.set(true);
  }
  cancelRuesCategoryEdit() {
    this.ruesCategoryEditing.set(false);
    this.ruesCategoryDraft.set("");
  }
  applyRuesCategoryEdit() {
    return __async(this, null, function* () {
      const v = this.ruesCategoryDraft();
      const current = this.getSelectedRuesCategoryValue();
      const clearing = v === "";
      if (!clearing && v === current) {
        this.ruesCategoryEditing.set(false);
        return;
      }
      if (clearing && current === "") {
        this.ruesCategoryEditing.set(false);
        return;
      }
      const ok = yield this.saveRowInputPatch(clearing ? { category: null } : { category: v });
      if (ok) {
        this.ruesCategoryEditing.set(false);
        this.ruesCategoryDraft.set("");
      }
    });
  }
  /** Persists merged input fields for the selected row before Retry. Returns false on skipped or failure. */
  saveRowInputPatch(patch) {
    return __async(this, null, function* () {
      const bid = this.batchId();
      const row = this.selectedRow();
      if (!bid || row == null)
        return false;
      this.savingRuesCategory.set(true);
      try {
        const res = yield this._serializedBatchRowMutation(() => firstValueFrom(this._smartBatchService.updateBatchRow(bid, row.rowIndex, {
          status: row.status,
          results: row.results,
          errors: row.errors ?? [],
          inputData: patch
        })));
        this.batch.set(res.data);
        const updated = res.data.rows.find((r) => r.rowIndex === row.rowIndex);
        if (updated) {
          this.selectedRow.set(updated);
        }
        this._snack.open(this._transloco.translate("batchProcessing.ruesCategorySaved"), this._transloco.translate("batchProcessing.failedExportDismiss"), { duration: 2e3 });
        return true;
      } catch (err) {
        console.error("saveRowInputPatch", err);
        this._snack.open(this._transloco.translate("batchProcessing.ruesCategorySaveFailed"), this._transloco.translate("batchProcessing.failedExportDismiss"), { duration: 4e3 });
        return false;
      } finally {
        this.savingRuesCategory.set(false);
      }
    });
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
  /** Step-result JSON in detail panel; replaces PDF payloads with a short placeholder. */
  formatStepResultJsonForDetail(stepResult) {
    if (stepResult == null)
      return "\u2014";
    if (typeof stepResult !== "object") {
      try {
        return JSON.stringify(stepResult, null, 2);
      } catch {
        return String(stepResult);
      }
    }
    const placeholder = this._transloco.translate("batchProcessing.pdfOmittedForJsonView");
    const copy = {};
    const src = stepResult;
    for (const key of Object.keys(src)) {
      const raw = src[key];
      copy[key] = this._shouldTreatAsEmbeddedPdf(key, raw) ? placeholder : raw;
    }
    try {
      return JSON.stringify(copy, null, 2);
    } catch {
      return this.formatJson(stepResult);
    }
  }
  _clearBatchJsonCopyTimer() {
    if (this._batchJsonCopyClearTimer != null) {
      clearTimeout(this._batchJsonCopyClearTimer);
      this._batchJsonCopyClearTimer = null;
    }
  }
  batchJsonCopyShowsCopied(rowIndex, sequence) {
    return this.batchJsonCopyFeedbackKey() === `${rowIndex}_${sequence}`;
  }
  copyBatchStepJsonToClipboard(rowIndex, sequence) {
    const row = this.selectedRow();
    if (!row || row.rowIndex !== rowIndex)
      return;
    const text = this.formatStepResultJsonForDetail(row.results?.[sequence]);
    const key = `${rowIndex}_${sequence}`;
    void navigator.clipboard.writeText(text).then(() => {
      this._clearBatchJsonCopyTimer();
      this.batchJsonCopyFeedbackKey.set(key);
      this._batchJsonCopyClearTimer = setTimeout(() => {
        this.batchJsonCopyFeedbackKey.update((c) => c === key ? null : c);
        this._batchJsonCopyClearTimer = null;
      }, 2400);
    }, () => {
      this._snack.open(this._transloco.translate("smartReport.failedToCopy"), this._transloco.translate("batchProcessing.failedExportDismiss"), { duration: 3e3 });
    });
  }
  getRowStepStatus(row, stepSequence) {
    if (this.currentRowIndex() === row.rowIndex && this.currentStepIndex() === stepSequence) {
      return "pending";
    }
    if (!row.results || typeof row.results !== "object") {
      const stepError = row.errors?.find((e) => e.step === stepSequence);
      if (stepError)
        return "failed";
      return "pending";
    }
    if (!this._hasStepResult(row.results, stepSequence)) {
      const stepError = row.errors?.find((e) => e.step === stepSequence);
      if (stepError)
        return "failed";
      return "pending";
    }
    return "completed";
  }
  getStepError(row, stepSequence) {
    return row.errors?.find((error) => error.step === stepSequence);
  }
  hasPendingSteps(row) {
    return this.getPendingStepCount(row) > 0;
  }
  getPendingStepCount(row) {
    return this._getRunnableSteps(this.configSteps(), row.results || {}, row.errors || []).length;
  }
  isRetryingStep(row, step) {
    return this.retryingStepKey() === this._getRetryKey(row, step);
  }
  isContinuingRow(row) {
    return this.continuingRowIndex() === row.rowIndex;
  }
  _deriveRowOutcome(results, errors, enabledSequences) {
    const completedSteps = enabledSequences.filter((sequence) => this._hasStepResult(results, sequence)).length;
    if (completedSteps === enabledSequences.length && errors.length === 0)
      return "completed";
    if (completedSteps === 0)
      return "failed";
    return "partial";
  }
  _withoutStepError(errors, stepSequence) {
    return errors.filter((error) => error.step !== stepSequence);
  }
  _replaceStepError(errors, error) {
    return [...this._withoutStepError(errors, error.step), error];
  }
  _getRunnableSteps(steps, results, errors) {
    return steps.filter((step) => !this._hasStepResult(results, step.sequence) && !errors.some((error) => error.step === step.sequence));
  }
  _hasStepResult(results, stepSequence) {
    return results?.[stepSequence] !== void 0 && results?.[stepSequence] !== null;
  }
  _getRetryKey(row, step) {
    return `${row.rowIndex}:${step.sequence}`;
  }
  _isTerminalRowStatus(status) {
    return status === "completed" || status === "failed" || status === "partial";
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
    }, decls: 29, vars: 26, consts: [["inputsExportMenu", "matMenu"], ["rowDetailPanel", ""], [1, "min-h-screen", "w-full", "bg-gray-50"], [1, "bg-white", "border-b", "border-gray-200", "sticky", "top-0", "z-10"], [1, "max-w-7xl", "mx-auto", "px-4", "sm:px-6", "lg:px-8", "py-4"], [1, "flex", "items-center", "justify-between"], [1, "flex", "items-center", "gap-4"], ["mat-icon-button", "", 3, "click", "matTooltip"], [1, "flex", "items-center", "gap-2.5"], [1, "text-xl", "font-bold", "text-gray-900"], [1, "text-xs", "font-semibold", "px-2.5", "py-1", "rounded-full", 3, "ngClass"], [1, "text-sm", "text-gray-500", "mt-0.5"], [1, "flex", "items-center", "gap-3"], ["mat-flat-button", "", "color", "primary", 1, "!rounded-xl", 3, "disabled"], ["mat-stroked-button", "", 1, "!rounded-xl"], ["mat-flat-button", "", "color", "accent", 1, "!rounded-xl", "!bg-indigo-600"], [1, "mt-4"], [1, "max-w-7xl", "mx-auto", "px-4", "sm:px-6", "lg:px-8", "py-6"], [1, "flex", "items-center", "justify-center", "h-64"], ["mat-flat-button", "", "color", "primary", 1, "!rounded-xl", 3, "click", "disabled"], [1, "inline-flex", "items-center", "gap-2"], [1, "animate-spin"], ["mat-stroked-button", "", 1, "!rounded-xl", 3, "click"], ["mat-flat-button", "", "color", "accent", 1, "!rounded-xl", "!bg-indigo-600", 3, "click"], [1, "flex", "justify-between", "text-sm", "text-gray-600", "mb-1"], ["mode", "determinate", 1, "!rounded-full", 3, "value"], [1, "text-xs", "text-amber-800", "mt-2"], [1, "text-xs", "text-gray-600", "font-mono", "mt-1", "break-words"], [1, "bg-white", "rounded-xl", "border", "border-gray-200", "p-5"], [1, "text-xs", "font-semibold", "text-gray-400", "uppercase", "tracking-wider", "mb-3"], [1, "flex", "items-stretch", "gap-2", "flex-wrap"], [1, "mt-4", "pt-4", "border-t", "border-gray-100"], [1, "flex", "items-center", "gap-2.5", "min-w-0", "max-w-[320px]", "sm:max-w-[360px]", "px-3", "py-2.5", "bg-gray-50", "rounded-lg", "border-l-3", "border-indigo-400", "border", "border-t-gray-200", "border-r-gray-200", "border-b-gray-200"], [1, "shrink-0", "w-7", "h-7", "rounded-full", "bg-indigo-100", "flex", "items-center", "justify-center", "text-xs", "font-bold", "text-indigo-600"], [1, "min-w-0", "flex-1", "flex", "flex-col", "gap-0.5"], [1, "text-sm", "font-medium", "text-gray-900", "truncate", 3, "matTooltip"], ["matTooltipPosition", "below", 1, "text-xs", "text-gray-400", "font-mono", "truncate", 3, "matTooltip"], [1, "text-xs", "text-indigo-600", "font-medium", "mt-0.5"], ["aria-hidden", "true", 1, "text-gray-300", "!text-base", "shrink-0", "self-center"], [1, "grid", "grid-cols-2", "lg:grid-cols-4", "gap-3"], [1, "flex", "items-center", "gap-3", "px-4", "py-3", "bg-indigo-50", "rounded-lg"], [1, "shrink-0", "w-9", "h-9", "rounded-lg", "bg-indigo-100", "flex", "items-center", "justify-center"], [1, "text-indigo-600", "!text-xl"], [1, "min-w-0"], [1, "text-xs", "text-indigo-500", "font-medium"], [1, "text-lg", "font-bold", "text-indigo-700", "leading-tight"], [1, "text-xs", "font-medium"], [1, "flex", "items-center", "gap-3", "px-4", "py-3", "bg-emerald-50", "rounded-lg", "cursor-pointer", "transition-all", "hover:shadow-md", 3, "click"], [1, "shrink-0", "w-9", "h-9", "rounded-lg", "bg-emerald-100", "flex", "items-center", "justify-center"], [1, "text-emerald-600", "!text-xl"], [1, "text-xs", "text-emerald-500", "font-medium"], [1, "text-lg", "font-bold", "text-emerald-700", "leading-tight"], [1, "text-xs", "font-normal", "text-emerald-500"], [1, "flex", "items-center", "gap-3", "px-4", "py-3", "bg-amber-50", "rounded-lg", "cursor-pointer", "transition-all", "hover:shadow-md", 3, "ring-2", "ring-amber-400"], [1, "flex", "items-center", "gap-3", "px-4", "py-3", "bg-red-50", "rounded-lg", "cursor-pointer", "transition-all", "hover:shadow-md", 3, "ring-2", "ring-red-400"], [1, "flex", "items-center", "gap-3", "px-4", "py-3", "bg-amber-50", "rounded-lg", "cursor-pointer", "transition-all", "hover:shadow-md", 3, "click"], [1, "shrink-0", "w-9", "h-9", "rounded-lg", "bg-amber-100", "flex", "items-center", "justify-center"], [1, "text-amber-600", "!text-xl"], [1, "text-xs", "text-amber-600", "font-medium"], [1, "text-lg", "font-bold", "text-amber-700", "leading-tight"], [1, "text-xs", "font-normal", "text-amber-600"], [1, "flex", "items-center", "gap-3", "px-4", "py-3", "bg-red-50", "rounded-lg", "cursor-pointer", "transition-all", "hover:shadow-md", 3, "click"], [1, "shrink-0", "w-9", "h-9", "rounded-lg", "bg-red-100", "flex", "items-center", "justify-center"], [1, "text-red-600", "!text-xl"], [1, "text-xs", "text-red-500", "font-medium"], [1, "text-lg", "font-bold", "text-red-700", "leading-tight"], [1, "text-xs", "font-normal", "text-red-500"], ["diameter", "48"], [1, "bg-white", "rounded-xl", "border", "border-gray-200", "overflow-hidden", "shadow-sm"], [1, "mx-5", "mt-5", "rounded-xl", "border", "border-amber-200", "bg-amber-50", "px-4", "py-3", "text-sm", "text-amber-800"], [1, "flex", "gap-3"], [1, "text-amber-600", "!text-xl", "shrink-0"], [1, "font-semibold"], [1, "mt-0.5", "text-amber-700"], [1, "px-5", "pt-4", "pb-0"], [1, "flex", "flex-col", "sm:flex-row", "sm:items-center", "sm:justify-between", "gap-3"], [1, "flex", "items-center", "gap-1", "bg-gray-100", "rounded-lg", "p-0.5"], [1, "px-3", "py-1.5", "text-sm", "font-medium", "rounded-md", "transition-all", 3, "click", "ngClass"], [1, "ml-1", "text-xs", "text-gray-400"], [1, "inline-flex", "items-center", "gap-1"], [1, "w-1.5", "h-1.5", "rounded-full", "bg-emerald-500"], [1, "text-xs", "text-gray-400"], [1, "px-3", "py-1.5", "text-sm", "font-medium", "rounded-md", "transition-all", 3, "ngClass"], [1, "flex", "w-full", "flex-col", "gap-2", "sm:w-auto", "sm:flex-row", "sm:items-center", "sm:justify-end", "sm:gap-2"], [1, "relative", "w-full", "sm:w-64"], [1, "absolute", "left-2.5", "top-1/2", "-translate-y-1/2", "!text-lg", "text-gray-400", "pointer-events-none"], [1, "w-full", "h-9", "pl-9", "pr-8", "text-sm", "border", "border-gray-200", "rounded-lg", "bg-gray-50", "focus:bg-white", "focus:border-indigo-400", "focus:ring-1", "focus:ring-indigo-400", "outline-none", "transition-all", "placeholder-gray-400", 3, "ngModelChange", "ngModel", "placeholder"], [1, "absolute", "right-2", "top-1/2", "-translate-y-1/2", "text-gray-400", "hover:text-gray-600"], [1, "px-5", "py-2.5", "mt-2", "border-b", "border-gray-100", "grid", "grid-cols-[1fr_auto]", "items-center"], [1, "text-xs", "font-medium", "text-gray-400", "uppercase", "tracking-wider"], ["itemSize", "72", 1, "block", "h-[560px]"], [1, "py-16", "text-center"], [1, "mt-6", "bg-white", "rounded-2xl", "border", "border-gray-200", "p-6"], [1, "w-1.5", "h-1.5", "rounded-full", "bg-amber-500"], [1, "w-1.5", "h-1.5", "rounded-full", "bg-red-500"], ["mat-stroked-button", "", "type", "button", 1, "w-full", "shrink-0", "sm:w-auto", "!rounded-xl", "!border-2", 3, "matMenuTriggerFor", "ngClass", "matTooltip"], [1, "inline-flex", "items-center", "gap-1.5", "justify-center"], ["aria-hidden", "true", 1, "h-1.5", "w-1.5", "shrink-0", "rounded-full", 3, "ngClass"], [1, "!h-5", "!w-5", "shrink-0", 3, "ngClass"], [1, "!h-5", "!w-5", "shrink-0", "opacity-70"], ["mat-menu-item", "", "type", "button", 3, "click"], [1, "align-middle"], [1, "absolute", "right-2", "top-1/2", "-translate-y-1/2", "text-gray-400", "hover:text-gray-600", 3, "click"], [1, "!text-base", "!w-4", "!h-4"], [4, "cdkVirtualFor", "cdkVirtualForOf", "cdkVirtualForTrackBy"], [1, "group", "grid", "h-[72px]", "cursor-pointer", "grid-cols-[1fr_auto]", "items-center", "border-b", "border-gray-100", "px-5", "py-3", "transition-colors", "hover:bg-gray-50", 3, "bg-indigo-50"], [1, "group", "grid", "h-[72px]", "cursor-pointer", "grid-cols-[1fr_auto]", "items-center", "border-b", "border-gray-100", "px-5", "py-3", "transition-colors", "hover:bg-gray-50", 3, "bg-amber-50"], [1, "group", "grid", "h-[72px]", "cursor-pointer", "grid-cols-[1fr_auto]", "items-center", "border-b", "border-gray-100", "px-5", "py-3", "transition-colors", "hover:bg-gray-50", 3, "bg-red-50"], [1, "group", "grid", "h-[72px]", "cursor-pointer", "grid-cols-[1fr_auto]", "items-center", "border-b", "border-gray-100", "px-5", "py-3", "transition-colors", "hover:bg-gray-50", 3, "click"], [1, "flex", "min-w-0", "items-center", "gap-3"], [1, "flex", "h-7", "w-7", "shrink-0", "items-center", "justify-center", "rounded-md", "bg-gray-100", "font-mono", "text-xs", "text-gray-500"], [1, "truncate", "text-sm", "font-medium", "text-gray-900"], [1, "flex", "items-center", "gap-1.5"], [1, "inline-flex", "items-center", "gap-1", "rounded-full", "bg-gray-100", "px-2", "py-0.5", "text-xs", "font-medium", "text-gray-600"], [1, "h-1.5", "w-1.5", "animate-pulse", "rounded-full", "bg-gray-400"], [1, "flex", "h-7", "w-7", "shrink-0", "items-center", "justify-center", "rounded-md", "bg-emerald-50", "font-mono", "text-xs", "text-emerald-600"], [1, "flex", "items-center", "gap-2"], [1, "mr-1", "hidden", "items-center", "gap-0.5", "sm:flex"], [1, "flex", "h-4", "w-4", "items-center", "justify-center", "rounded-full", "bg-emerald-100", 3, "matTooltip"], [1, "inline-flex", "items-center", "gap-1", "rounded-full", "bg-emerald-50", "px-2", "py-0.5", "text-xs", "font-medium", "text-emerald-700"], [1, "h-1.5", "w-1.5", "rounded-full", "bg-emerald-500"], [1, "!text-base", "text-gray-300", "opacity-0", "transition-opacity", "group-hover:opacity-100"], [1, "text-emerald-600", "!h-2.5", "!w-2.5", "!text-[10px]"], [1, "flex", "h-7", "w-7", "shrink-0", "items-center", "justify-center", "rounded-md", "bg-amber-50", "font-mono", "text-xs", "text-amber-600"], [1, "truncate", "text-xs", "text-gray-400"], [1, "inline-flex", "items-center", "gap-1", "rounded-full", "bg-amber-50", "px-2", "py-0.5", "text-xs", "font-medium", "text-amber-700"], [1, "h-1.5", "w-1.5", "rounded-full", "bg-amber-500"], [1, "flex", "h-4", "w-4", "items-center", "justify-center", "rounded-full", "bg-red-100", 3, "matTooltip"], [1, "flex", "h-4", "w-4", "items-center", "justify-center", "rounded-full", "bg-gray-100", 3, "matTooltip"], [1, "text-red-600", "!h-2.5", "!w-2.5", "!text-[10px]"], [1, "text-gray-400", "!h-2.5", "!w-2.5", "!text-[10px]"], [1, "flex", "h-7", "w-7", "shrink-0", "items-center", "justify-center", "rounded-md", "bg-red-50", "font-mono", "text-xs", "text-red-600"], [1, "inline-flex", "items-center", "gap-1", "rounded-full", "bg-red-50", "px-2", "py-0.5", "text-xs", "font-medium", "text-red-700"], [1, "h-1.5", "w-1.5", "rounded-full", "bg-red-500"], [1, "!mb-3", "!h-12", "!w-12", "!text-5xl", "text-gray-300"], [1, "text-sm", "text-gray-400"], [1, "animate-pulse", "space-y-4"], [1, "h-5", "bg-gray-200", "rounded", "w-40"], [1, "h-8", "bg-gray-200", "rounded", "w-48"], [1, "space-y-3", "pt-2"], [1, "h-4", "bg-gray-100", "rounded", "w-24"], [1, "border", "border-gray-100", "rounded-lg", "p-4", "space-y-2"], [1, "h-3", "bg-gray-100", "rounded", "w-full"], [1, "h-3", "bg-gray-100", "rounded", "w-3/4"], [1, "h-3", "bg-gray-100", "rounded", "w-1/2"], [1, "flex", "items-center", "justify-between", "mb-4"], [1, "font-semibold", "text-gray-900"], [1, "!rounded-lg", 3, "change", "value"], ["value", "readable"], ["value", "json"], ["mat-stroked-button", "", 1, "!rounded-lg", "!border-indigo-300", "!text-indigo-700", 3, "disabled", "matTooltip"], ["mat-flat-button", "", "color", "primary", 1, "!rounded-lg"], ["mat-icon-button", "", 3, "click"], [1, "mb-6"], [1, "text-sm", "font-medium", "text-gray-500", "mb-3"], [1, "border", "border-gray-200", "rounded-lg", "overflow-hidden", "bg-white"], [1, "px-4", "py-3"], [1, "bg-gray-50", "rounded-lg", "p-4", "text-sm", "font-mono", "text-gray-800", "overflow-auto", "max-h-64", "m-0"], ["mat-stroked-button", "", 1, "!rounded-lg", "!border-indigo-300", "!text-indigo-700", 3, "click", "disabled", "matTooltip"], [1, "animate-spin", "icon-size-4"], [1, "icon-size-4"], ["mat-flat-button", "", "color", "primary", 1, "!rounded-lg", 3, "click"], [1, "mr-2", "icon-size-4"], [1, "mb-2", "flex", "flex-col", "gap-2", "rounded-xl", "border", "border-stone-200/80", "bg-stone-50/70", "px-3", "py-2.5", "text-sm", "dark:border-gray-800", "dark:bg-gray-950/50", "sm:flex-row", "sm:items-center"], [1, "space-y-0"], [1, "text-sm", "text-gray-400", "py-2"], [1, "flex", "min-w-0", "flex-1", "flex-col", "gap-2", "sm:flex-row", "sm:items-center"], [1, "min-w-0", "flex-1"], [1, "text-[11px]", "font-semibold", "uppercase", "tracking-[0.18em]", "text-stone-400", "dark:text-stone-500"], [1, "!h-4", "!w-4", "!text-sm", "text-stone-400", 3, "matTooltip"], [1, "mt-0.5", "font-medium", "text-stone-950", "dark:text-stone-100"], [1, "font-normal", "text-stone-400"], [1, "flex", "shrink-0", "items-center", "gap-1.5", "sm:justify-end"], ["mat-icon-button", "", "type", "button", 1, "!h-9", "!w-9", 3, "click", "matTooltip", "disabled"], [1, "!text-lg"], ["mat-flat-button", "", "color", "primary", "type", "button", 1, "!h-9", "!min-h-9", "rounded-xl", "px-4", 3, "disabled"], ["mat-flat-button", "", "color", "primary", "type", "button", 1, "!h-9", "!min-h-9", "rounded-xl", "px-4", 3, "click", "disabled"], [1, "inline-flex", "items-center", "gap-1.5"], [1, "animate-spin", "!text-base"], [1, "!text-base"], [1, "mb-1", "block", "text-[11px]", "font-semibold", "uppercase", "tracking-[0.18em]", "text-stone-400"], [1, "h-9", "w-full", "rounded-lg", "border", "border-stone-200", "bg-white", "px-3", "text-sm", "font-medium", "text-stone-900", "outline-none", "transition", "focus:border-indigo-400", "focus:ring-2", "focus:ring-indigo-100", "disabled:opacity-60", 3, "ngModelChange", "ngModel", "disabled"], ["value", ""], [3, "value"], [1, "flex", "shrink-0", "items-center", "gap-2"], ["mat-button", "", "type", "button", 1, "!h-9", "!min-h-9", "rounded-xl", "px-3", 3, "click", "disabled"], [1, "flex", "gap-4", "py-2", "border-b", "border-gray-100", "last:border-0", "text-sm"], [1, "text-gray-500", "min-w-[140px]", "shrink-0"], [1, "text-gray-900", "font-medium", "break-words"], [1, "space-y-3"], [1, "border", "border-gray-200", "rounded-lg", "overflow-hidden"], [1, "flex", "items-center", "justify-between", "px-4", "py-3", "bg-gray-50"], [1, "w-6", "h-6", "rounded-full", "flex", "items-center", "justify-center", "text-xs", "font-bold"], [1, "font-medium", "text-gray-700"], [1, "text-xs", "font-medium", "px-2", "py-1", "rounded-full"], ["mat-stroked-button", "", 1, "!h-8", "!rounded-lg", "!border-amber-300", "!text-amber-700", 3, "disabled"], ["mat-stroked-button", "", 1, "!h-8", "!rounded-lg", "!border-amber-300", "!text-amber-700", 3, "click", "disabled"], [1, "px-4", "py-3", "bg-white", "border-t", "border-gray-100"], [1, "py-4", "border-b", "border-gray-100", "last:border-0", "text-sm", "flex", "flex-col", "gap-3"], [1, "text-gray-500"], [1, "min-h-[420px]", "w-full", "rounded-lg", "border", "border-gray-200", "bg-gray-50", 3, "title", "src"], [1, "flex", "flex-wrap", "gap-2"], ["mat-stroked-button", "", "type", "button", 1, "!rounded-lg", 3, "click"], [1, "relative"], ["type", "button", "mat-icon-button", "", 1, "!absolute", "top-1.5", "right-1.5", "z-10", "!h-9", "!min-h-9", "!w-auto", "!min-w-9", "!rounded-lg", "!border", "border-gray-200/90", "!bg-white/95", "px-1.5", "shadow-sm", "hover:!border-gray-300", "hover:bg-white", 3, "matTooltip"], [1, "bg-gray-50", "rounded-lg", "p-3", "pr-14", "text-xs", "font-mono", "text-gray-800", "overflow-auto", "max-h-64", "m-0", "border", "border-gray-100"], ["type", "button", "mat-icon-button", "", 1, "!absolute", "top-1.5", "right-1.5", "z-10", "!h-9", "!min-h-9", "!w-auto", "!min-w-9", "!rounded-lg", "!border", "border-gray-200/90", "!bg-white/95", "px-1.5", "shadow-sm", "hover:!border-gray-300", "hover:bg-white", 3, "click", "matTooltip"], [1, "text-xs", "font-medium", "text-emerald-700", "whitespace-nowrap", "px-1"], [1, "!text-[18px]", "text-gray-600"], [1, "text-sm", "font-medium", "text-red-500", "mb-3"], [1, "space-y-2"], [1, "bg-red-50", "border", "border-red-200", "rounded-lg", "p-3"], [1, "text-sm", "font-medium", "text-red-700"], [1, "text-sm", "text-red-600"]], template: function BatchProcessingComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "div", 5)(4, "div", 6)(5, "button", 7);
        \u0275\u0275pipe(6, "transloco");
        \u0275\u0275listener("click", function BatchProcessingComponent_Template_button_click_5_listener() {
          return ctx.goBack();
        });
        \u0275\u0275elementStart(7, "mat-icon");
        \u0275\u0275text(8, "arrow_back");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div")(10, "div", 8)(11, "h1", 9);
        \u0275\u0275text(12);
        \u0275\u0275pipe(13, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "span", 10);
        \u0275\u0275text(15);
        \u0275\u0275pipe(16, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "p", 11);
        \u0275\u0275text(18);
        \u0275\u0275pipe(19, "transloco");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(20, "div", 12);
        \u0275\u0275template(21, BatchProcessingComponent_Conditional_21_Template, 4, 2, "button", 13)(22, BatchProcessingComponent_Conditional_22_Template, 6, 3, "button", 14)(23, BatchProcessingComponent_Conditional_23_Template, 6, 3, "button", 15);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(24, BatchProcessingComponent_Conditional_24_Template, 9, 6, "div", 16);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(25, BatchProcessingComponent_Conditional_25_Template, 9, 4, "div", 4);
        \u0275\u0275elementStart(26, "div", 17);
        \u0275\u0275template(27, BatchProcessingComponent_Conditional_27_Template, 2, 0, "div", 18)(28, BatchProcessingComponent_Conditional_28_Template, 47, 32);
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
      NgSelectOption,
      \u0275NgSelectMultipleOption,
      DefaultValueAccessor,
      SelectControlValueAccessor,
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
      MatSnackBarModule,
      MatTooltipModule,
      MatTooltip,
      MatMenuModule,
      MatMenu,
      MatMenuItem,
      MatMenuTrigger,
      MatSelectModule,
      ScrollingModule,
      CdkFixedSizeVirtualScroll,
      CdkVirtualForOf,
      CdkVirtualScrollViewport,
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
      MatSnackBarModule,
      MatTooltipModule,
      MatMenuModule,
      MatSelectModule,
      ScrollingModule,
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
                    @if (parallelRowConcurrency() > 1) {
                        <p class="text-xs text-amber-800 mt-2">
                            {{
                                'batchProcessing.processingParallelHint'
                                    | transloco: { conc: parallelRowConcurrency() }
                            }}
                        </p>
                        @if (processingActiveRowIndexes().length > 0) {
                            <p class="text-xs text-gray-600 font-mono mt-1 break-words">
                                {{
                                    'batchProcessing.parallelActiveRows'
                                        | transloco
                                            : { rows: processingActiveRowIndexes().join(', ') }
                                }}
                            </p>
                        }
                    }
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
                @if (completedRows().length > 0 || partialRows().length > 0 || failedRows().length > 0) {
                    <div class="mt-4 pt-4 border-t border-gray-100">
                        <div class="grid grid-cols-2 lg:grid-cols-4 gap-3">
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

                            <!-- Partial -->
                            @if (partialRows().length > 0) {
                                <div
                                    class="flex items-center gap-3 px-4 py-3 bg-amber-50 rounded-lg cursor-pointer transition-all hover:shadow-md"
                                    [class.ring-2]="recordFilter() === 'partial'"
                                    [class.ring-amber-400]="recordFilter() === 'partial'"
                                    (click)="setRecordFilter('partial')"
                                >
                                    <div
                                        class="shrink-0 w-9 h-9 rounded-lg bg-amber-100 flex items-center justify-center"
                                    >
                                        <mat-icon class="text-amber-600 !text-xl">warning</mat-icon>
                                    </div>
                                    <div class="min-w-0">
                                        <p class="text-xs text-amber-600 font-medium">
                                            {{ 'batchProcessing.partial' | transloco }}
                                        </p>
                                        <p class="text-lg font-bold text-amber-700 leading-tight">
                                            {{ partialRows().length }}
                                            <span class="text-xs font-normal text-amber-600">{{
                                                'batchProcessing.requestsPartial' | transloco
                                            }}</span>
                                        </p>
                                    </div>
                                </div>
                            }

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
                <div
                    class="mx-5 mt-5 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800"
                >
                    <div class="flex gap-3">
                        <mat-icon class="text-amber-600 !text-xl shrink-0">info</mat-icon>
                        <div>
                            <p class="font-semibold">
                                {{ 'batchProcessing.continueOnFailureTitle' | transloco }}
                            </p>
                            <p class="mt-0.5 text-amber-700">
                                {{ 'batchProcessing.continueOnFailureBody' | transloco }}
                            </p>
                        </div>
                    </div>
                </div>

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
                            @if (partialRows().length > 0) {
                                <button
                                    class="px-3 py-1.5 text-sm font-medium rounded-md transition-all"
                                    [ngClass]="
                                        recordFilter() === 'partial'
                                            ? 'bg-white text-gray-900 shadow-sm'
                                            : 'text-gray-500 hover:text-gray-700'
                                    "
                                    (click)="setRecordFilter('partial')"
                                >
                                    <span class="inline-flex items-center gap-1">
                                        <span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                                        {{ 'batchProcessing.partial' | transloco }}
                                        <span class="text-xs text-gray-400">{{
                                            partialRows().length
                                        }}</span>
                                    </span>
                                </button>
                            }
                            @if (failedRowsIgnoringSearch().length > 0) {
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
                                            failedRowsIgnoringSearch().length
                                        }}</span>
                                    </span>
                                </button>
                            }
                        </div>

                        <div
                            class="flex w-full flex-col gap-2 sm:w-auto sm:flex-row sm:items-center sm:justify-end sm:gap-2"
                        >
                            @if (canDownloadInputs()) {
                                @let exportUi = inputsExportButtonUi();
                                <button
                                    mat-stroked-button
                                    type="button"
                                    [matMenuTriggerFor]="inputsExportMenu"
                                    class="w-full shrink-0 sm:w-auto !rounded-xl !border-2"
                                    [ngClass]="exportUi.accentClass"
                                    [matTooltip]="exportUi.tooltipKey | transloco"
                                >
                                    <span class="inline-flex items-center gap-1.5 justify-center">
                                        <span
                                            class="h-1.5 w-1.5 shrink-0 rounded-full"
                                            [ngClass]="exportUi.dotClass"
                                            aria-hidden="true"
                                        ></span>
                                        <mat-icon
                                            class="!h-5 !w-5 shrink-0"
                                            [ngClass]="exportUi.iconClass"
                                            >download</mat-icon
                                        >
                                        <span>{{ exportUi.labelKey | transloco }}</span>
                                        <mat-icon class="!h-5 !w-5 shrink-0 opacity-70"
                                            >arrow_drop_down</mat-icon
                                        >
                                    </span>
                                </button>
                                <mat-menu #inputsExportMenu="matMenu">
                                    <button
                                        mat-menu-item
                                        type="button"
                                        (click)="downloadInputsExport('xlsx')"
                                    >
                                        <mat-icon class="align-middle">table_chart</mat-icon>
                                        <span>{{
                                            'batchProcessing.exportAsExcel' | transloco
                                        }}</span>
                                    </button>
                                    <button
                                        mat-menu-item
                                        type="button"
                                        (click)="downloadInputsExport('csv')"
                                    >
                                        <mat-icon class="align-middle">description</mat-icon>
                                        <span>{{
                                            'batchProcessing.exportAsCsv' | transloco
                                        }}</span>
                                    </button>
                                    <button
                                        mat-menu-item
                                        type="button"
                                        (click)="downloadInputsExport('json')"
                                    >
                                        <mat-icon class="align-middle">data_object</mat-icon>
                                        <span>{{
                                            'batchProcessing.exportAsJson' | transloco
                                        }}</span>
                                    </button>
                                </mat-menu>
                            }

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
                @if (virtualTableItems().length > 0) {
                    <cdk-virtual-scroll-viewport itemSize="72" class="block h-[560px]">
                        <ng-container
                            *cdkVirtualFor="
                                let item of virtualTableItems();
                                trackBy: trackByVirtualRow
                            "
                        >
                            @switch (item.kind) {
                                @case ('pending') {
                                    <div
                                        class="group grid h-[72px] cursor-pointer grid-cols-[1fr_auto] items-center border-b border-gray-100 px-5 py-3 transition-colors hover:bg-gray-50"
                                        (click)="selectRow(item.row)"
                                        [class.bg-indigo-50]="
                                            selectedRow()?.rowIndex === item.row.rowIndex
                                        "
                                    >
                                        <div class="flex min-w-0 items-center gap-3">
                                            <span
                                                class="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-gray-100 font-mono text-xs text-gray-500"
                                            >
                                                {{ item.row.rowIndex + 1 }}
                                            </span>
                                            <div class="min-w-0">
                                                <p
                                                    class="truncate text-sm font-medium text-gray-900"
                                                >
                                                    {{
                                                        item.row.inputData?.documentNumber ||
                                                            item.row.inputData?.name ||
                                                            ('batchProcessing.rowNumber'
                                                                | transloco
                                                                    : {
                                                                          index:
                                                                              item.row.rowIndex +
                                                                              1,
                                                                      })
                                                    }}
                                                </p>
                                            </div>
                                        </div>
                                        <div class="flex items-center gap-1.5">
                                            <span
                                                class="inline-flex items-center gap-1 rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600"
                                            >
                                                <span
                                                    class="h-1.5 w-1.5 animate-pulse rounded-full bg-gray-400"
                                                ></span>
                                                {{ 'batchProcessing.' + item.row.status | transloco }}
                                            </span>
                                        </div>
                                    </div>
                                }
                                @case ('completed') {
                                    <div
                                        class="group grid h-[72px] cursor-pointer grid-cols-[1fr_auto] items-center border-b border-gray-100 px-5 py-3 transition-colors hover:bg-gray-50"
                                        (click)="selectRow(item.row)"
                                        [class.bg-indigo-50]="
                                            selectedRow()?.rowIndex === item.row.rowIndex
                                        "
                                    >
                                        <div class="flex min-w-0 items-center gap-3">
                                            <span
                                                class="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-emerald-50 font-mono text-xs text-emerald-600"
                                            >
                                                {{ item.row.rowIndex + 1 }}
                                            </span>
                                            <div class="min-w-0">
                                                <p
                                                    class="truncate text-sm font-medium text-gray-900"
                                                >
                                                    {{
                                                        item.row.inputData?.documentNumber ||
                                                            item.row.inputData?.name ||
                                                            ('batchProcessing.rowNumber'
                                                                | transloco
                                                                    : {
                                                                          index:
                                                                              item.row.rowIndex +
                                                                              1,
                                                                      })
                                                    }}
                                                </p>
                                            </div>
                                        </div>
                                        <div class="flex items-center gap-2">
                                            <!-- Step dots -->
                                            <div class="mr-1 hidden items-center gap-0.5 sm:flex">
                                                @for (step of configSteps(); track step.sequence) {
                                                    <div
                                                        class="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-100"
                                                        [matTooltip]="getStepName(step)"
                                                    >
                                                        <mat-icon
                                                            class="text-emerald-600 !h-2.5 !w-2.5 !text-[10px]"
                                                            >check</mat-icon
                                                        >
                                                    </div>
                                                }
                                            </div>
                                            <span
                                                class="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-700"
                                            >
                                                <span
                                                    class="h-1.5 w-1.5 rounded-full bg-emerald-500"
                                                ></span>
                                                {{ 'batchProcessing.verified' | transloco }}
                                            </span>
                                            <mat-icon
                                                class="!text-base text-gray-300 opacity-0 transition-opacity group-hover:opacity-100"
                                                >chevron_right</mat-icon
                                            >
                                        </div>
                                    </div>
                                }
                                @case ('partial') {
                                    <div
                                        class="group grid h-[72px] cursor-pointer grid-cols-[1fr_auto] items-center border-b border-gray-100 px-5 py-3 transition-colors hover:bg-gray-50"
                                        (click)="selectRow(item.row)"
                                        [class.bg-amber-50]="
                                            selectedRow()?.rowIndex === item.row.rowIndex
                                        "
                                    >
                                        <div class="flex min-w-0 items-center gap-3">
                                            <span
                                                class="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-amber-50 font-mono text-xs text-amber-600"
                                            >
                                                {{ item.row.rowIndex + 1 }}
                                            </span>
                                            <div class="min-w-0">
                                                <p
                                                    class="truncate text-sm font-medium text-gray-900"
                                                >
                                                    {{
                                                        item.row.inputData?.documentNumber ||
                                                            item.row.inputData?.name ||
                                                            ('batchProcessing.rowNumber'
                                                                | transloco
                                                                    : {
                                                                          index:
                                                                              item.row.rowIndex +
                                                                              1,
                                                                      })
                                                    }}
                                                </p>
                                                <p class="truncate text-xs text-gray-400">
                                                    {{
                                                        item.row.errors?.[0]?.message ||
                                                            ('batchProcessing.partial' | transloco)
                                                    }}
                                                </p>
                                            </div>
                                        </div>
                                        <div class="flex items-center gap-2">
                                            <div class="mr-1 hidden items-center gap-0.5 sm:flex">
                                                @for (step of configSteps(); track step.sequence) {
                                                    @switch (
                                                        getRowStepStatus(item.row, step.sequence)
                                                    ) {
                                                        @case ('completed') {
                                                            <div
                                                                class="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-100"
                                                                [matTooltip]="
                                                                    'batchProcessing.stepStatusCompleted'
                                                                        | transloco
                                                                            : {
                                                                                  step: getStepName(
                                                                                      step
                                                                                  ),
                                                                              }
                                                                "
                                                            >
                                                                <mat-icon
                                                                    class="text-emerald-600 !h-2.5 !w-2.5 !text-[10px]"
                                                                    >check</mat-icon
                                                                >
                                                            </div>
                                                        }
                                                        @case ('failed') {
                                                            <div
                                                                class="flex h-4 w-4 items-center justify-center rounded-full bg-red-100"
                                                                [matTooltip]="
                                                                    'batchProcessing.stepStatusFailed'
                                                                        | transloco
                                                                            : {
                                                                                  step: getStepName(
                                                                                      step
                                                                                  ),
                                                                              }
                                                                "
                                                            >
                                                                <mat-icon
                                                                    class="text-red-600 !h-2.5 !w-2.5 !text-[10px]"
                                                                    >close</mat-icon
                                                                >
                                                            </div>
                                                        }
                                                        @default {
                                                            <div
                                                                class="flex h-4 w-4 items-center justify-center rounded-full bg-gray-100"
                                                                [matTooltip]="
                                                                    'batchProcessing.stepStatusSkipped'
                                                                        | transloco
                                                                            : {
                                                                                  step: getStepName(
                                                                                      step
                                                                                  ),
                                                                              }
                                                                "
                                                            >
                                                                <mat-icon
                                                                    class="text-gray-400 !h-2.5 !w-2.5 !text-[10px]"
                                                                    >remove</mat-icon
                                                                >
                                                            </div>
                                                        }
                                                    }
                                                }
                                            </div>
                                            <span
                                                class="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2 py-0.5 text-xs font-medium text-amber-700"
                                            >
                                                <span
                                                    class="h-1.5 w-1.5 rounded-full bg-amber-500"
                                                ></span>
                                                {{ 'batchProcessing.partial' | transloco }}
                                            </span>
                                            <mat-icon
                                                class="!text-base text-gray-300 opacity-0 transition-opacity group-hover:opacity-100"
                                                >chevron_right</mat-icon
                                            >
                                        </div>
                                    </div>
                                }
                                @case ('failed') {
                                    <div
                                        class="group grid h-[72px] cursor-pointer grid-cols-[1fr_auto] items-center border-b border-gray-100 px-5 py-3 transition-colors hover:bg-gray-50"
                                        (click)="selectRow(item.row)"
                                        [class.bg-red-50]="
                                            selectedRow()?.rowIndex === item.row.rowIndex
                                        "
                                    >
                                        <div class="flex min-w-0 items-center gap-3">
                                            <span
                                                class="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-red-50 font-mono text-xs text-red-600"
                                            >
                                                {{ item.row.rowIndex + 1 }}
                                            </span>
                                            <div class="min-w-0">
                                                <p
                                                    class="truncate text-sm font-medium text-gray-900"
                                                >
                                                    {{
                                                        item.row.inputData?.documentNumber ||
                                                            item.row.inputData?.name ||
                                                            ('batchProcessing.rowNumber'
                                                                | transloco
                                                                    : {
                                                                          index:
                                                                              item.row.rowIndex +
                                                                              1,
                                                                      })
                                                    }}
                                                </p>
                                                <p class="truncate text-xs text-gray-400">
                                                    {{
                                                        item.row.errors?.[0]?.message ||
                                                            ('batchProcessing.failed' | transloco)
                                                    }}
                                                </p>
                                            </div>
                                        </div>
                                        <div class="flex items-center gap-2">
                                            <!-- Step dots -->
                                            <div class="mr-1 hidden items-center gap-0.5 sm:flex">
                                                @for (step of configSteps(); track step.sequence) {
                                                    @switch (
                                                        getRowStepStatus(item.row, step.sequence)
                                                    ) {
                                                        @case ('completed') {
                                                            <div
                                                                class="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-100"
                                                                [matTooltip]="
                                                                    'batchProcessing.stepStatusCompleted'
                                                                        | transloco
                                                                            : {
                                                                                  step: getStepName(
                                                                                      step
                                                                                  ),
                                                                              }
                                                                "
                                                            >
                                                                <mat-icon
                                                                    class="text-emerald-600 !h-2.5 !w-2.5 !text-[10px]"
                                                                    >check</mat-icon
                                                                >
                                                            </div>
                                                        }
                                                        @case ('failed') {
                                                            <div
                                                                class="flex h-4 w-4 items-center justify-center rounded-full bg-red-100"
                                                                [matTooltip]="
                                                                    'batchProcessing.stepStatusFailed'
                                                                        | transloco
                                                                            : {
                                                                                  step: getStepName(
                                                                                      step
                                                                                  ),
                                                                              }
                                                                "
                                                            >
                                                                <mat-icon
                                                                    class="text-red-600 !h-2.5 !w-2.5 !text-[10px]"
                                                                    >close</mat-icon
                                                                >
                                                            </div>
                                                        }
                                                        @default {
                                                            <div
                                                                class="flex h-4 w-4 items-center justify-center rounded-full bg-gray-100"
                                                                [matTooltip]="
                                                                    'batchProcessing.stepStatusSkipped'
                                                                        | transloco
                                                                            : {
                                                                                  step: getStepName(
                                                                                      step
                                                                                  ),
                                                                              }
                                                                "
                                                            >
                                                                <mat-icon
                                                                    class="text-gray-400 !h-2.5 !w-2.5 !text-[10px]"
                                                                    >remove</mat-icon
                                                                >
                                                            </div>
                                                        }
                                                    }
                                                }
                                            </div>
                                            <span
                                                class="inline-flex items-center gap-1 rounded-full bg-red-50 px-2 py-0.5 text-xs font-medium text-red-700"
                                            >
                                                <span
                                                    class="h-1.5 w-1.5 rounded-full bg-red-500"
                                                ></span>
                                                {{ 'batchProcessing.failed' | transloco }}
                                            </span>
                                            <mat-icon
                                                class="!text-base text-gray-300 opacity-0 transition-opacity group-hover:opacity-100"
                                                >chevron_right</mat-icon
                                            >
                                        </div>
                                    </div>
                                }
                            }
                        </ng-container>
                    </cdk-virtual-scroll-viewport>
                } @else {
                    <!-- Empty State -->
                    <div class="py-16 text-center">
                        <mat-icon class="!mb-3 !h-12 !w-12 !text-5xl text-gray-300">{{
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
                                @if (selectedRow() && hasPendingSteps(selectedRow()!)) {
                                    <button
                                        mat-stroked-button
                                        class="!rounded-lg !border-indigo-300 !text-indigo-700"
                                        (click)="continuePendingSteps(selectedRow()!)"
                                        [disabled]="isContinuingRow(selectedRow()!)"
                                        [matTooltip]="
                                            'batchProcessing.continuePendingStepsHint'
                                                | transloco
                                                    : {
                                                          count: getPendingStepCount(selectedRow()!),
                                                      }
                                        "
                                    >
                                        <span class="inline-flex items-center gap-2">
                                            @if (isContinuingRow(selectedRow()!)) {
                                                <mat-icon class="animate-spin icon-size-4"
                                                    >refresh</mat-icon
                                                >
                                                {{ 'batchProcessing.continuing' | transloco }}
                                            } @else {
                                                <mat-icon class="icon-size-4">play_arrow</mat-icon>
                                                {{
                                                    'batchProcessing.continuePendingSteps'
                                                        | transloco
                                                            : {
                                                                  count: getPendingStepCount(
                                                                      selectedRow()!
                                                                  ),
                                                              }
                                                }}
                                            }
                                        </span>
                                    </button>
                                }
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
                                        @if (canEditRuesCategory()) {
                                            <div
                                                class="mb-2 flex flex-col gap-2 rounded-xl border border-stone-200/80 bg-stone-50/70 px-3 py-2.5 text-sm dark:border-gray-800 dark:bg-gray-950/50 sm:flex-row sm:items-center"
                                            >
                                                @if (!ruesCategoryEditing()) {
                                                    <div class="min-w-0 flex-1">
                                                        <div class="flex items-center gap-1.5">
                                                            <p
                                                                class="text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-400 dark:text-stone-500"
                                                            >
                                                                {{
                                                                    'batchProcessing.ruesCategory'
                                                                        | transloco
                                                                }}
                                                            </p>
                                                            <mat-icon
                                                                class="!h-4 !w-4 !text-sm text-stone-400"
                                                                [matTooltip]="
                                                                    'batchProcessing.ruesCategoryHint'
                                                                        | transloco
                                                                "
                                                                >info_outline</mat-icon
                                                            >
                                                        </div>
                                                        <p
                                                            class="mt-0.5 font-medium text-stone-950 dark:text-stone-100"
                                                        >
                                                            @if (getSelectedRuesCategoryValue()) {
                                                                {{ getSelectedRuesCategoryValue() }}
                                                            } @else {
                                                                <span class="font-normal text-stone-400">{{
                                                                    'batchProcessing.ruesCategoryNone'
                                                                        | transloco
                                                                }}</span>
                                                            }
                                                        </p>
                                                    </div>
                                                    <div
                                                        class="flex shrink-0 items-center gap-1.5 sm:justify-end"
                                                    >
                                                        <button
                                                            mat-icon-button
                                                            type="button"
                                                            class="!h-9 !w-9"
                                                            [matTooltip]="
                                                                'batchProcessing.ruesCategoryEdit'
                                                                    | transloco
                                                            "
                                                            [attr.aria-label]="
                                                                'batchProcessing.ruesCategoryEdit'
                                                                    | transloco
                                                            "
                                                            (click)="beginRuesCategoryEdit()"
                                                            [disabled]="savingRuesCategory()"
                                                        >
                                                            <mat-icon class="!text-lg">edit</mat-icon>
                                                        </button>
                                                        @if (firstFailedStep(); as failedStep) {
                                                            <button
                                                                mat-flat-button
                                                                color="primary"
                                                                type="button"
                                                                class="!h-9 !min-h-9 rounded-xl px-4"
                                                                (click)="
                                                                    retryStep(selectedRow()!, failedStep)
                                                                "
                                                                [disabled]="
                                                                    savingRuesCategory() ||
                                                                    isRetryingStep(
                                                                        selectedRow()!,
                                                                        failedStep
                                                                    )
                                                                "
                                                            >
                                                                <span
                                                                    class="inline-flex items-center gap-1.5"
                                                                >
                                                                    @if (
                                                                        isRetryingStep(
                                                                            selectedRow()!,
                                                                            failedStep
                                                                        )
                                                                    ) {
                                                                        <mat-icon
                                                                            class="animate-spin !text-base"
                                                                            >refresh</mat-icon
                                                                        >
                                                                        {{
                                                                            'batchProcessing.retrying'
                                                                                | transloco
                                                                        }}
                                                                    } @else {
                                                                        <mat-icon class="!text-base"
                                                                            >restart_alt</mat-icon
                                                                        >
                                                                        {{
                                                                            'batchProcessing.retryStep'
                                                                                | transloco
                                                                        }}
                                                                    }
                                                                </span>
                                                            </button>
                                                        }
                                                    </div>
                                                } @else {
                                                    <div
                                                        class="flex min-w-0 flex-1 flex-col gap-2 sm:flex-row sm:items-center"
                                                    >
                                                        <label class="min-w-0 flex-1">
                                                            <span
                                                                class="mb-1 block text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-400"
                                                                >{{
                                                                    'batchProcessing.ruesCategory'
                                                                        | transloco
                                                                }}</span
                                                            >
                                                            <select
                                                                class="h-9 w-full rounded-lg border border-stone-200 bg-white px-3 text-sm font-medium text-stone-900 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 disabled:opacity-60"
                                                                [ngModel]="ruesCategoryDraft()"
                                                                (ngModelChange)="
                                                                    ruesCategoryDraft.set($event)
                                                                "
                                                                [disabled]="savingRuesCategory()"
                                                            >
                                                                <option value="">
                                                                    {{
                                                                        'batchProcessing.ruesCategoryNone'
                                                                            | transloco
                                                                    }}
                                                                </option>
                                                                @for (
                                                                    opt of ruesCategorySelectOptionsResolved();
                                                                    track opt
                                                                ) {
                                                                    <option [value]="opt">
                                                                        {{ opt }}
                                                                    </option>
                                                                }
                                                            </select>
                                                        </label>
                                                        <div class="flex shrink-0 items-center gap-2">
                                                            <button
                                                                mat-button
                                                                type="button"
                                                                class="!h-9 !min-h-9 rounded-xl px-3"
                                                                (click)="cancelRuesCategoryEdit()"
                                                                [disabled]="savingRuesCategory()"
                                                            >
                                                                {{
                                                                    'batchProcessing.ruesCategoryCancel'
                                                                        | transloco
                                                                }}
                                                            </button>
                                                            <button
                                                                mat-flat-button
                                                                color="primary"
                                                                type="button"
                                                                class="!h-9 !min-h-9 rounded-xl px-4"
                                                                (click)="applyRuesCategoryEdit()"
                                                                [disabled]="savingRuesCategory()"
                                                            >
                                                                {{
                                                                    'batchProcessing.ruesCategoryApply'
                                                                        | transloco
                                                                }}
                                                            </button>
                                                        </div>
                                                    </div>
                                                }
                                            </div>
                                        }
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
                                        } @else if (!canEditRuesCategory()) {
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
                        @if (configSteps().length > 0 && selectedRow()) {
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
                                                <div class="flex items-center gap-2">
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
                                                    @if (
                                                        !canEditRuesCategory() &&
                                                        getRowStepStatus(
                                                            selectedRow()!,
                                                            step.sequence
                                                        ) === 'failed'
                                                    ) {
                                                        <button
                                                            mat-stroked-button
                                                            class="!h-8 !rounded-lg !border-amber-300 !text-amber-700"
                                                            (click)="retryStep(selectedRow()!, step)"
                                                            [disabled]="
                                                                isRetryingStep(selectedRow()!, step)
                                                            "
                                                        >
                                                            <span
                                                                class="inline-flex items-center gap-1.5"
                                                            >
                                                                @if (
                                                                    isRetryingStep(
                                                                        selectedRow()!,
                                                                        step
                                                                    )
                                                                ) {
                                                                    <mat-icon
                                                                        class="animate-spin !text-base"
                                                                        >refresh</mat-icon
                                                                    >
                                                                    {{
                                                                        'batchProcessing.retrying'
                                                                            | transloco
                                                                    }}
                                                                } @else {
                                                                    <mat-icon class="!text-base"
                                                                        >restart_alt</mat-icon
                                                                    >
                                                                    {{
                                                                        'batchProcessing.retryStep'
                                                                            | transloco
                                                                    }}
                                                                }
                                                            </span>
                                                        </button>
                                                    }
                                                </div>
                                            </div>
                                            @if (selectedRow()?.results?.[step.sequence]) {
                                                @if (detailsViewMode() === 'readable') {
                                                    <div
                                                        class="px-4 py-3 bg-white border-t border-gray-100"
                                                    >
                                                        <div class="space-y-0">
                                                            @for (
                                                                field of getStepResultDisplayFields(
                                                                    selectedRow()?.results?.[
                                                                        step.sequence
                                                                    ],
                                                                    getStepFeatureCode(step)
                                                                );
                                                                track $index
                                                            ) {
                                                                @if (field.kind === 'pdf') {
                                                                    <div
                                                                        class="py-4 border-b border-gray-100 last:border-0 text-sm flex flex-col gap-3"
                                                                    >
                                                                        <span class="text-gray-500">{{
                                                                            field.label
                                                                        }}</span>
                                                                        <iframe
                                                                            [title]="
                                                                                'batchProcessing.pdfPreview'
                                                                                    | transloco
                                                                            "
                                                                            class="min-h-[420px] w-full rounded-lg border border-gray-200 bg-gray-50"
                                                                            [src]="
                                                                                sanitizePdfIframeSrc(
                                                                                    field.dataUrl
                                                                                )
                                                                            "
                                                                        ></iframe>
                                                                        <div class="flex flex-wrap gap-2">
                                                                            <button
                                                                                mat-stroked-button
                                                                                type="button"
                                                                                class="!rounded-lg"
                                                                                (click)="
                                                                                    openPdfInNewTab(
                                                                                        field.dataUrl
                                                                                    )
                                                                                "
                                                                            >
                                                                                <span
                                                                                    class="inline-flex items-center gap-2"
                                                                                >
                                                                                    <mat-icon
                                                                                        class="!text-lg"
                                                                                        >open_in_new</mat-icon
                                                                                    >
                                                                                    {{
                                                                                        'batchProcessing.openPdfInNewTab'
                                                                                            | transloco
                                                                                    }}
                                                                                </span>
                                                                            </button>
                                                                            <button
                                                                                mat-stroked-button
                                                                                type="button"
                                                                                class="!rounded-lg"
                                                                                (click)="
                                                                                    downloadPdf(
                                                                                        field.dataUrl,
                                                                                        getStepPdfFilename(
                                                                                            selectedRow()!
                                                                                                .rowIndex,
                                                                                            step.sequence
                                                                                        )
                                                                                    )
                                                                                "
                                                                            >
                                                                                <span
                                                                                    class="inline-flex items-center gap-2"
                                                                                >
                                                                                    <mat-icon
                                                                                        class="!text-lg"
                                                                                        >download</mat-icon
                                                                                    >
                                                                                    {{
                                                                                        'batchProcessing.downloadPdf'
                                                                                            | transloco
                                                                                    }}
                                                                                </span>
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                } @else {
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
                                                            }
                                                        </div>
                                                    </div>
                                                } @else {
                                                    <div
                                                        class="px-4 py-3 bg-white border-t border-gray-100"
                                                    >
                                                        <div class="relative">
                                                            @if (
                                                                selectedRow()?.results?.[
                                                                    step.sequence
                                                                ] != null
                                                            ) {
                                                                <button
                                                                    type="button"
                                                                    mat-icon-button
                                                                    class="!absolute top-1.5 right-1.5 z-10 !h-9 !min-h-9 !w-auto !min-w-9 !rounded-lg !border border-gray-200/90 !bg-white/95 px-1.5 shadow-sm hover:!border-gray-300 hover:bg-white"
                                                                    [matTooltip]="
                                                                        'smartReport.copyJson'
                                                                            | transloco
                                                                    "
                                                                    [attr.aria-label]="
                                                                        'smartReport.copyJson'
                                                                            | transloco
                                                                    "
                                                                    (click)="
                                                                        copyBatchStepJsonToClipboard(
                                                                            selectedRow()!
                                                                                .rowIndex,
                                                                            step.sequence
                                                                        )
                                                                    "
                                                                >
                                                                    @if (
                                                                        batchJsonCopyShowsCopied(
                                                                            selectedRow()!
                                                                                .rowIndex,
                                                                            step.sequence
                                                                        )
                                                                    ) {
                                                                        <span
                                                                            class="text-xs font-medium text-emerald-700 whitespace-nowrap px-1"
                                                                            >{{
                                                                                'smartReport.copied'
                                                                                    | transloco
                                                                            }}</span
                                                                        >
                                                                    } @else {
                                                                        <mat-icon class="!text-[18px] text-gray-600"
                                                                            >content_copy</mat-icon
                                                                        >
                                                                    }
                                                                </button>
                                                            }
                                                            <pre
                                                                class="bg-gray-50 rounded-lg p-3 pr-14 text-xs font-mono text-gray-800 overflow-auto max-h-64 m-0 border border-gray-100"
                                                                >{{
                                                                    formatStepResultJsonForDetail(
                                                                        selectedRow()?.results?.[
                                                                            step.sequence
                                                                        ]
                                                                    )
                                                                }}</pre
                                                            >
                                                        </div>
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BatchProcessingComponent, { className: "BatchProcessingComponent", filePath: "src/app/modules/smart-batch/dashboard/batch-processing/batch-processing.component.ts", lineNumber: 123 });
})();
export {
  BatchProcessingComponent
};
//# sourceMappingURL=chunk-AG76MMGG.js.map
