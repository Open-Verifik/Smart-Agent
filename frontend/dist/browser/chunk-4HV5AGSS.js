import {
  BatchExecutorControlComponent
} from "./chunk-CJDMDQJG.js";
import {
  SmartBatchInputModeService,
  inferBatchCategory
} from "./chunk-W7GKX5JJ.js";
import {
  BatchBrowserRunnerService
} from "./chunk-BEJEQMDA.js";
import "./chunk-JCIM3ZHA.js";
import {
  escapeCsvRow,
  getBatchInputCsvHeaders,
  inputDataValueForCsvCell
} from "./chunk-22GG6EY6.js";
import {
  getStepDisplayFields
} from "./chunk-3VMX27KY.js";
import "./chunk-4SMGTRRJ.js";
import {
  getBatchSkippedStepsFromInput
} from "./chunk-T3ZUDNVS.js";
import {
  SmartBatchService
} from "./chunk-QIGUIW2F.js";
import "./chunk-USONFPXP.js";
import {
  utils,
  writeFileSync
} from "./chunk-P2TQI6AF.js";
import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-IFYEUXEK.js";
import {
  FuseConfirmationService
} from "./chunk-KFR5LC4M.js";
import {
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger
} from "./chunk-YJ6YLDQV.js";
import "./chunk-6FS3LBOZ.js";
import {
  MatSnackBar,
  MatSnackBarModule
} from "./chunk-TXEVGTMX.js";
import "./chunk-H3UX3NVF.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-FTSXFXXU.js";
import "./chunk-JURKDGMK.js";
import {
  MatSelectModule
} from "./chunk-RM2644J3.js";
import {
  MatInputModule
} from "./chunk-AICPTZP5.js";
import "./chunk-VURK6DEU.js";
import "./chunk-E7WYNRWC.js";
import {
  MatFormFieldModule
} from "./chunk-HWNQWMK7.js";
import {
  fuseAnimations
} from "./chunk-NCAN4EJO.js";
import "./chunk-YY5TJM45.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-UUIVQBYS.js";
import "./chunk-M5KDIZH5.js";
import "./chunk-OIBNGD5S.js";
import {
  CdkFixedSizeVirtualScroll,
  CdkVirtualForOf,
  CdkVirtualScrollViewport,
  ScrollingModule
} from "./chunk-WOW6NB5H.js";
import {
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
  DefaultValueAccessor,
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
  RouterModule
} from "./chunk-HYFP557I.js";
import "./chunk-KTYFS5OT.js";
import {
  CommonModule,
  Component,
  DatePipe,
  DecimalPipe,
  DomSanitizer,
  NgClass,
  NgTemplateOutlet,
  Subject,
  ViewChild,
  computed,
  effect,
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
  ɵɵelementContainer,
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
  ɵɵpureFunction6,
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
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-PNPEHISK.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-F5M2C4EZ.js";

// src/app/modules/smart-batch/dashboard/batch-processing/batch-processing.component.ts
var _c0 = ["rowDetailPanel"];
var _c1 = (a0, a1, a2, a3, a4, a5) => ({ "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300": a0, "bg-amber-100 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300": a1, "bg-blue-100 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300": a2, "bg-red-100 text-red-700 dark:bg-red-950/40 dark:text-red-300": a3, "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-stone-400": a4, "bg-violet-100 text-violet-700 dark:bg-violet-950/40 dark:text-violet-300": a5 });
var _c2 = (a0) => ({ count: a0 });
var _c3 = (a0, a1, a2) => ({ completed: a0, failed: a1, total: a2 });
var _c4 = (a0, a1) => ({ credits: a0, rows: a1 });
var _c5 = (a0) => ({ credits: a0 });
var _c6 = (a0) => ({ "bg-indigo-50 dark:bg-indigo-950/30": a0 });
var _c7 = (a0) => ({ index: a0 });
var _c8 = (a0) => ({ $implicit: a0 });
var _c9 = (a0) => ({ "bg-amber-50 dark:bg-amber-950/30": a0 });
var _c10 = (a0) => ({ step: a0 });
var _c11 = (a0) => ({ "bg-red-50 dark:bg-red-950/30": a0 });
var _c12 = (a0) => ({ attempt: a0 });
var _c13 = (a0, a1) => ({ step: a0, code: a1 });
var _forTrack0 = ($index, $item) => $item.sequence;
var _forTrack1 = ($index, $item) => $item.label;
var _forTrack2 = ($index, $item) => $item.attempt;
var _forTrack3 = ($index, $item) => $item.step;
function BatchProcessingComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "batch-executor-control", 25);
    \u0275\u0275listener("executorChange", function BatchProcessingComponent_Conditional_27_Template_batch_executor_control_executorChange_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setExecutor($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("executor", ctx_r1.liveExecutor())("saving", ctx_r1.savingExecutor())("showBadge", false)("compact", true);
  }
}
function BatchProcessingComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 26);
    \u0275\u0275listener("click", function BatchProcessingComponent_Conditional_28_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editInputs());
    });
    \u0275\u0275elementStart(1, "span", 27)(2, "mat-icon");
    \u0275\u0275text(3, "playlist_add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 1, "batchProcessing.addInputs"), " ");
  }
}
function BatchProcessingComponent_Conditional_29_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 29);
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
function BatchProcessingComponent_Conditional_29_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "play_arrow");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, ctx_r1.hasBatchRunProgress() ? "batchProcessing.resume" : "batchProcessing.startProcessing"), " ");
  }
}
function BatchProcessingComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function BatchProcessingComponent_Conditional_29_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.startProcessing());
    });
    \u0275\u0275elementStart(1, "span", 27);
    \u0275\u0275template(2, BatchProcessingComponent_Conditional_29_Conditional_2_Template, 4, 3)(3, BatchProcessingComponent_Conditional_29_Conditional_3_Template, 4, 3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r1.isStarting());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.isStarting() ? 2 : 3);
  }
}
function BatchProcessingComponent_Conditional_30_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 29);
    \u0275\u0275text(1, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "batchProcessing.pausing"), " ");
  }
}
function BatchProcessingComponent_Conditional_30_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "pause");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "batchProcessing.pause"), " ");
  }
}
function BatchProcessingComponent_Conditional_30_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 29);
    \u0275\u0275text(1, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "batchProcessing.cancelling"), " ");
  }
}
function BatchProcessingComponent_Conditional_30_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "stop_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "batchProcessing.cancel"), " ");
  }
}
function BatchProcessingComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 30);
    \u0275\u0275listener("click", function BatchProcessingComponent_Conditional_30_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.pauseProcessing());
    });
    \u0275\u0275elementStart(1, "span", 27);
    \u0275\u0275template(2, BatchProcessingComponent_Conditional_30_Conditional_2_Template, 4, 3)(3, BatchProcessingComponent_Conditional_30_Conditional_3_Template, 4, 3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 31);
    \u0275\u0275listener("click", function BatchProcessingComponent_Conditional_30_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelProcessing());
    });
    \u0275\u0275elementStart(5, "span", 27);
    \u0275\u0275template(6, BatchProcessingComponent_Conditional_30_Conditional_6_Template, 4, 3)(7, BatchProcessingComponent_Conditional_30_Conditional_7_Template, 4, 3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r1.isPausing());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.isPausing() ? 2 : 3);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isCancelling());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.isCancelling() ? 6 : 7);
  }
}
function BatchProcessingComponent_Conditional_31_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 29);
    \u0275\u0275text(1, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "batchProcessing.resuming"), " ");
  }
}
function BatchProcessingComponent_Conditional_31_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "play_arrow");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "batchProcessing.resume"), " ");
  }
}
function BatchProcessingComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function BatchProcessingComponent_Conditional_31_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.resumeProcessing());
    });
    \u0275\u0275elementStart(1, "span", 27);
    \u0275\u0275template(2, BatchProcessingComponent_Conditional_31_Conditional_2_Template, 4, 3)(3, BatchProcessingComponent_Conditional_31_Conditional_3_Template, 4, 3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r1.isResuming());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.isResuming() ? 2 : 3);
  }
}
function BatchProcessingComponent_Conditional_32_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 29);
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
function BatchProcessingComponent_Conditional_32_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "replay");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 1, "batchProcessing.retryFailedRows", \u0275\u0275pureFunction1(4, _c2, ctx_r1.retryableRowCount())), " ");
  }
}
function BatchProcessingComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 32);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275listener("click", function BatchProcessingComponent_Conditional_32_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.retryAllFailedRows($event));
    });
    \u0275\u0275elementStart(2, "span", 27);
    \u0275\u0275template(3, BatchProcessingComponent_Conditional_32_Conditional_3_Template, 4, 3)(4, BatchProcessingComponent_Conditional_32_Conditional_4_Template, 4, 6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r1.isRetryingFailed())("matTooltip", \u0275\u0275pipeBind1(1, 3, "batchProcessing.retryFailedTooltip"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.isRetryingFailed() ? 3 : 4);
  }
}
function BatchProcessingComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 33);
    \u0275\u0275listener("click", function BatchProcessingComponent_Conditional_33_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.generateReport());
    });
    \u0275\u0275elementStart(1, "span", 27)(2, "mat-icon");
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
function BatchProcessingComponent_Conditional_34_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\xB7 ", ctx_r1.runConcurrencyLabel(), "");
  }
}
function BatchProcessingComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 34)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(7, "mat-progress-bar", 35);
    \u0275\u0275elementStart(8, "p", 36);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275template(11, BatchProcessingComponent_Conditional_34_Conditional_11_Template, 2, 1, "span", 37);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 6, ctx_r1.isPaused() ? "batchProcessing.paused" : "batchProcessing.processing"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.progress(), "%");
    \u0275\u0275advance();
    \u0275\u0275property("mode", ctx_r1.isPaused() ? "determinate" : "buffer")("value", ctx_r1.progress());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(10, 8, "batchProcessing.serverProgressHint", \u0275\u0275pureFunction3(11, _c3, ((tmp_5_0 = ctx_r1.batch()) == null ? null : tmp_5_0.completedRows) || 0, ((tmp_5_0 = ctx_r1.batch()) == null ? null : tmp_5_0.failedRows) || 0, ((tmp_5_0 = ctx_r1.batch()) == null ? null : tmp_5_0.totalRows) || 0)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.runConcurrencyLabel() ? 11 : -1);
  }
}
function BatchProcessingComponent_Conditional_35_Conditional_0_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 41);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const est_r9 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, "batchProcessing.estimateShortfall", \u0275\u0275pureFunction1(4, _c5, est_r9.shortfall)));
  }
}
function BatchProcessingComponent_Conditional_35_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "span", 39)(2, "mat-icon", 40);
    \u0275\u0275text(3, "calculate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, BatchProcessingComponent_Conditional_35_Conditional_0_Conditional_12_Template, 3, 6, "span", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const est_r9 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", est_r9.sufficientCredits ? "border-stone-200 bg-stone-50 text-stone-700 dark:border-gray-800 dark:bg-gray-900/60 dark:text-stone-300" : "border-red-300 bg-red-50 text-red-800 dark:border-red-900 dark:bg-red-950/30 dark:text-red-300");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(5, 5, "batchProcessing.estimateCost", \u0275\u0275pureFunction2(14, _c4, est_r9.totalCredits, est_r9.pendingRows)), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(8, 8, "batchProcessing.estimatePerRecord", \u0275\u0275pureFunction1(17, _c5, est_r9.creditsPerItem)));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(11, 11, "batchProcessing.estimateAvailable", \u0275\u0275pureFunction1(19, _c5, est_r9.availableCredits)));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!est_r9.sufficientCredits ? 12 : -1);
  }
}
function BatchProcessingComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, BatchProcessingComponent_Conditional_35_Conditional_0_Template, 13, 21, "div", 38);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx.pendingRows > 0 && !ctx_r1.isProcessing() ? 0 : -1);
  }
}
function BatchProcessingComponent_Conditional_36_For_7_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 50);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r10 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("matTooltip", ctx_r1.getStepUrl(step_r10));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getStepUrl(step_r10), " ");
  }
}
function BatchProcessingComponent_Conditional_36_For_7_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 51);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r10 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(2, 2, ctx_r1.getStepPrice(step_r10), "1.2-2"), " ", \u0275\u0275pipeBind1(3, 5, "batchProcessing.credits"), " ");
  }
}
function BatchProcessingComponent_Conditional_36_For_7_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 52);
    \u0275\u0275text(1, "arrow_forward");
    \u0275\u0275elementEnd();
  }
}
function BatchProcessingComponent_Conditional_36_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46)(1, "div", 47);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 48)(4, "span", 49);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, BatchProcessingComponent_Conditional_36_For_7_Conditional_6_Template, 2, 2, "span", 50)(7, BatchProcessingComponent_Conditional_36_For_7_Conditional_7_Template, 4, 7, "span", 51);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, BatchProcessingComponent_Conditional_36_For_7_Conditional_8_Template, 2, 0, "mat-icon", 52);
  }
  if (rf & 2) {
    const step_r10 = ctx.$implicit;
    const \u0275$index_208_r11 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", step_r10.sequence, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("matTooltip", ctx_r1.getStepName(step_r10));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getStepName(step_r10), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.getStepUrl(step_r10) ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.getStepPrice(step_r10) > 0 ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(\u0275$index_208_r11 < ctx_r1.configSteps().length - 1 ? 8 : -1);
  }
}
function BatchProcessingComponent_Conditional_36_Conditional_8_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 68);
    \u0275\u0275listener("click", function BatchProcessingComponent_Conditional_36_Conditional_8_Conditional_29_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.setRecordFilter("partial"));
    });
    \u0275\u0275elementStart(1, "div", 69)(2, "mat-icon", 70);
    \u0275\u0275text(3, "warning");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 9)(5, "p", 71);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 72);
    \u0275\u0275text(9);
    \u0275\u0275elementStart(10, "span", 73);
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
function BatchProcessingComponent_Conditional_36_Conditional_8_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 74);
    \u0275\u0275listener("click", function BatchProcessingComponent_Conditional_36_Conditional_8_Conditional_30_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.setRecordFilter("failed"));
    });
    \u0275\u0275elementStart(1, "div", 75)(2, "mat-icon", 76);
    \u0275\u0275text(3, "error");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 9)(5, "p", 77);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 78);
    \u0275\u0275text(9);
    \u0275\u0275elementStart(10, "span", 79);
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
    \u0275\u0275textInterpolate1(" ", ctx_r1.failedRowsIgnoringSearch().length, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 9, "batchProcessing.requestsFailed"));
  }
}
function BatchProcessingComponent_Conditional_36_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 45)(1, "div", 53)(2, "div", 54)(3, "div", 55)(4, "mat-icon", 56);
    \u0275\u0275text(5, "payments");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 9)(7, "p", 57);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 58);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementStart(13, "span", 59);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "transloco");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(16, "div", 60);
    \u0275\u0275listener("click", function BatchProcessingComponent_Conditional_36_Conditional_8_Template_div_click_16_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setRecordFilter("completed"));
    });
    \u0275\u0275elementStart(17, "div", 61)(18, "mat-icon", 62);
    \u0275\u0275text(19, "check_circle");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 9)(21, "p", 63);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "p", 64);
    \u0275\u0275text(25);
    \u0275\u0275elementStart(26, "span", 65);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "transloco");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(29, BatchProcessingComponent_Conditional_36_Conditional_8_Conditional_29_Template, 13, 11, "div", 66)(30, BatchProcessingComponent_Conditional_36_Conditional_8_Conditional_30_Template, 13, 11, "div", 67);
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
    \u0275\u0275conditional(ctx_r1.failedRowsIgnoringSearch().length > 0 ? 30 : -1);
  }
}
function BatchProcessingComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 42)(2, "h3", 43);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 44);
    \u0275\u0275repeaterCreate(6, BatchProcessingComponent_Conditional_36_For_7_Template, 9, 6, null, null, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, BatchProcessingComponent_Conditional_36_Conditional_8_Template, 31, 23, "div", 45);
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
function BatchProcessingComponent_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275element(1, "mat-spinner", 80);
    \u0275\u0275elementEnd();
  }
}
function BatchProcessingComponent_Conditional_39_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 89);
    \u0275\u0275listener("click", function BatchProcessingComponent_Conditional_39_Conditional_20_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setRecordFilter("pending"));
    });
    \u0275\u0275elementStart(1, "span", 92);
    \u0275\u0275element(2, "span", 107);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementStart(5, "span", 94);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", ctx_r1.recordFilter() === "pending" ? "bg-white text-stone-950 shadow-sm dark:bg-gray-900 dark:text-white" : "text-stone-500 hover:text-stone-700 dark:text-stone-400 dark:hover:text-stone-200");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 3, "batchProcessing.pending"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.pendingRowsIgnoringSearch().length);
  }
}
function BatchProcessingComponent_Conditional_39_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 89);
    \u0275\u0275listener("click", function BatchProcessingComponent_Conditional_39_Conditional_28_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setRecordFilter("partial"));
    });
    \u0275\u0275elementStart(1, "span", 92);
    \u0275\u0275element(2, "span", 108);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementStart(5, "span", 94);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", ctx_r1.recordFilter() === "partial" ? "bg-white text-stone-950 shadow-sm dark:bg-gray-900 dark:text-white" : "text-stone-500 hover:text-stone-700 dark:text-stone-400 dark:hover:text-stone-200");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 3, "batchProcessing.partial"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.partialRows().length);
  }
}
function BatchProcessingComponent_Conditional_39_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 89);
    \u0275\u0275listener("click", function BatchProcessingComponent_Conditional_39_Conditional_29_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setRecordFilter("failed"));
    });
    \u0275\u0275elementStart(1, "span", 92);
    \u0275\u0275element(2, "span", 109);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementStart(5, "span", 94);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", ctx_r1.recordFilter() === "failed" ? "bg-white text-stone-950 shadow-sm dark:bg-gray-900 dark:text-white" : "text-stone-500 hover:text-stone-700 dark:text-stone-400 dark:hover:text-stone-200");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 3, "batchProcessing.failed"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.failedRowsIgnoringSearch().length);
  }
}
function BatchProcessingComponent_Conditional_39_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 110);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275listener("click", function BatchProcessingComponent_Conditional_39_Conditional_32_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.retryAllFailedRows());
    });
    \u0275\u0275elementStart(2, "mat-icon", 111);
    \u0275\u0275text(3, "replay");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 112);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", !ctx_r1.canOperateRetryFailed())("matTooltip", \u0275\u0275pipeBind1(1, 3, "batchProcessing.retryAllFailedTooltip"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 5, "batchProcessing.retryAllFailed", \u0275\u0275pureFunction1(8, _c2, ctx_r1.failedRowsIgnoringSearch().length)));
  }
}
function BatchProcessingComponent_Conditional_39_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275declareLet(0);
    \u0275\u0275elementStart(1, "button", 113);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementStart(3, "span", 114);
    \u0275\u0275element(4, "span", 115);
    \u0275\u0275elementStart(5, "mat-icon", 116);
    \u0275\u0275text(6, "download");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 117);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "mat-icon", 118);
    \u0275\u0275text(11, "arrow_drop_down");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "mat-menu", null, 1)(14, "button", 119);
    \u0275\u0275listener("click", function BatchProcessingComponent_Conditional_39_Conditional_33_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.downloadInputsExport("xlsx"));
    });
    \u0275\u0275elementStart(15, "mat-icon", 120);
    \u0275\u0275text(16, "table_chart");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "button", 119);
    \u0275\u0275listener("click", function BatchProcessingComponent_Conditional_39_Conditional_33_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.downloadInputsExport("csv"));
    });
    \u0275\u0275elementStart(21, "mat-icon", 120);
    \u0275\u0275text(22, "description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span");
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "button", 119);
    \u0275\u0275listener("click", function BatchProcessingComponent_Conditional_39_Conditional_33_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.downloadInputsExport("json"));
    });
    \u0275\u0275elementStart(27, "mat-icon", 120);
    \u0275\u0275text(28, "data_object");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span");
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "transloco");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const inputsExportMenu_r21 = \u0275\u0275reference(13);
    const exportUi_r22 = \u0275\u0275nextContext(2).inputsExportButtonUi();
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", inputsExportMenu_r21)("ngClass", exportUi_r22.accentClass)("matTooltip", \u0275\u0275pipeBind1(2, 9, exportUi_r22.tooltipKey));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", exportUi_r22.dotClass);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", exportUi_r22.iconClass);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 11, exportUi_r22.labelKey));
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 13, "batchProcessing.exportAsExcel"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 15, "batchProcessing.exportAsCsv"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(31, 17, "batchProcessing.exportAsJson"));
  }
}
function BatchProcessingComponent_Conditional_39_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 121);
    \u0275\u0275listener("click", function BatchProcessingComponent_Conditional_39_Conditional_39_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateSearchQuery(""));
    });
    \u0275\u0275elementStart(1, "mat-icon", 122);
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function BatchProcessingComponent_Conditional_39_ng_template_47_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 123);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r24 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, "batchProcessing.attempts", \u0275\u0275pureFunction1(4, _c2, row_r24.attemptCount)), " ");
  }
}
function BatchProcessingComponent_Conditional_39_ng_template_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, BatchProcessingComponent_Conditional_39_ng_template_47_Conditional_0_Template, 3, 6, "span", 123);
  }
  if (rf & 2) {
    const row_r24 = ctx.$implicit;
    \u0275\u0275conditional(row_r24.attemptCount ? 0 : -1);
  }
}
function BatchProcessingComponent_Conditional_39_Conditional_49_ng_container_1_Case_1_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function BatchProcessingComponent_Conditional_39_Conditional_49_ng_container_1_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 126);
    \u0275\u0275listener("click", function BatchProcessingComponent_Conditional_39_Conditional_49_ng_container_1_Case_1_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r25);
      const item_r26 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.selectRow(item_r26.row));
    });
    \u0275\u0275elementStart(1, "div", 127)(2, "span", 128);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 9)(5, "p", 129);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 130)(9, "span", 131);
    \u0275\u0275element(10, "span", 132);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, BatchProcessingComponent_Conditional_39_Conditional_49_ng_container_1_Case_1_ng_container_13_Template, 1, 0, "ng-container", 133);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_6_0;
    const item_r26 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275nextContext(2);
    const attemptBadge_r27 = \u0275\u0275reference(48);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(11, _c6, ((tmp_6_0 = ctx_r1.selectedRow()) == null ? null : tmp_6_0.rowIndex) === item_r26.row.rowIndex));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r26.row.rowIndex + 1, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (item_r26.row.inputData == null ? null : item_r26.row.inputData.documentNumber) || (item_r26.row.inputData == null ? null : item_r26.row.inputData.name) || \u0275\u0275pipeBind2(7, 6, "batchProcessing.rowNumber", \u0275\u0275pureFunction1(13, _c7, item_r26.row.rowIndex + 1)), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 9, "batchProcessing." + item_r26.row.status), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", attemptBadge_r27)("ngTemplateOutletContext", \u0275\u0275pureFunction1(15, _c8, item_r26.row));
  }
}
function BatchProcessingComponent_Conditional_39_Conditional_49_ng_container_1_Case_2_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 137)(1, "mat-icon", 140);
    \u0275\u0275text(2, "check");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const step_r29 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275property("matTooltip", ctx_r1.getStepName(step_r29));
  }
}
function BatchProcessingComponent_Conditional_39_Conditional_49_ng_container_1_Case_2_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function BatchProcessingComponent_Conditional_39_Conditional_49_ng_container_1_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 126);
    \u0275\u0275listener("click", function BatchProcessingComponent_Conditional_39_Conditional_49_ng_container_1_Case_2_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r28);
      const item_r26 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.selectRow(item_r26.row));
    });
    \u0275\u0275elementStart(1, "div", 127)(2, "span", 134);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 9)(5, "p", 129);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 135)(9, "div", 136);
    \u0275\u0275repeaterCreate(10, BatchProcessingComponent_Conditional_39_Conditional_49_ng_container_1_Case_2_For_11_Template, 3, 1, "div", 137, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 138);
    \u0275\u0275element(13, "span", 93);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, BatchProcessingComponent_Conditional_39_Conditional_49_ng_container_1_Case_2_ng_container_16_Template, 1, 0, "ng-container", 133);
    \u0275\u0275elementStart(17, "mat-icon", 139);
    \u0275\u0275text(18, "chevron_right");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_6_0;
    const item_r26 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275nextContext(2);
    const attemptBadge_r27 = \u0275\u0275reference(48);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(11, _c6, ((tmp_6_0 = ctx_r1.selectedRow()) == null ? null : tmp_6_0.rowIndex) === item_r26.row.rowIndex));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r26.row.rowIndex + 1, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (item_r26.row.inputData == null ? null : item_r26.row.inputData.documentNumber) || (item_r26.row.inputData == null ? null : item_r26.row.inputData.name) || \u0275\u0275pipeBind2(7, 6, "batchProcessing.rowNumber", \u0275\u0275pureFunction1(13, _c7, item_r26.row.rowIndex + 1)), " ");
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.configSteps());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 9, "batchProcessing.verified"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", attemptBadge_r27)("ngTemplateOutletContext", \u0275\u0275pureFunction1(15, _c8, item_r26.row));
  }
}
function BatchProcessingComponent_Conditional_39_Conditional_49_ng_container_1_Case_3_For_14_Case_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 137);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275elementStart(2, "mat-icon", 140);
    \u0275\u0275text(3, "check");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const step_r31 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind2(1, 1, "batchProcessing.stepStatusCompleted", \u0275\u0275pureFunction1(4, _c10, ctx_r1.getStepName(step_r31))));
  }
}
function BatchProcessingComponent_Conditional_39_Conditional_49_ng_container_1_Case_3_For_14_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 144);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275elementStart(2, "mat-icon", 146);
    \u0275\u0275text(3, "close");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const step_r31 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind2(1, 1, "batchProcessing.stepStatusFailed", \u0275\u0275pureFunction1(4, _c10, ctx_r1.getStepName(step_r31))));
  }
}
function BatchProcessingComponent_Conditional_39_Conditional_49_ng_container_1_Case_3_For_14_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 145);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275elementStart(2, "mat-icon", 147);
    \u0275\u0275text(3, "remove");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const step_r31 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind2(1, 1, "batchProcessing.stepStatusSkipped", \u0275\u0275pureFunction1(4, _c10, ctx_r1.getStepName(step_r31))));
  }
}
function BatchProcessingComponent_Conditional_39_Conditional_49_ng_container_1_Case_3_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, BatchProcessingComponent_Conditional_39_Conditional_49_ng_container_1_Case_3_For_14_Case_0_Template, 4, 6, "div", 137)(1, BatchProcessingComponent_Conditional_39_Conditional_49_ng_container_1_Case_3_For_14_Case_1_Template, 4, 6, "div", 144)(2, BatchProcessingComponent_Conditional_39_Conditional_49_ng_container_1_Case_3_For_14_Case_2_Template, 4, 6, "div", 145);
  }
  if (rf & 2) {
    let tmp_16_0;
    const step_r31 = ctx.$implicit;
    const item_r26 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional((tmp_16_0 = ctx_r1.getRowStepStatus(item_r26.row, step_r31.sequence)) === "completed" ? 0 : tmp_16_0 === "failed" ? 1 : 2);
  }
}
function BatchProcessingComponent_Conditional_39_Conditional_49_ng_container_1_Case_3_ng_container_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function BatchProcessingComponent_Conditional_39_Conditional_49_ng_container_1_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 126);
    \u0275\u0275listener("click", function BatchProcessingComponent_Conditional_39_Conditional_49_ng_container_1_Case_3_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r30);
      const item_r26 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.selectRow(item_r26.row));
    });
    \u0275\u0275elementStart(1, "div", 127)(2, "span", 141);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 9)(5, "p", 129);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 142);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 135)(12, "div", 136);
    \u0275\u0275repeaterCreate(13, BatchProcessingComponent_Conditional_39_Conditional_49_ng_container_1_Case_3_For_14_Template, 3, 1, null, null, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 143);
    \u0275\u0275element(16, "span", 108);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, BatchProcessingComponent_Conditional_39_Conditional_49_ng_container_1_Case_3_ng_container_19_Template, 1, 0, "ng-container", 133);
    \u0275\u0275elementStart(20, "mat-icon", 139);
    \u0275\u0275text(21, "chevron_right");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_6_0;
    const item_r26 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275nextContext(2);
    const attemptBadge_r27 = \u0275\u0275reference(48);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(14, _c9, ((tmp_6_0 = ctx_r1.selectedRow()) == null ? null : tmp_6_0.rowIndex) === item_r26.row.rowIndex));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r26.row.rowIndex + 1, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (item_r26.row.inputData == null ? null : item_r26.row.inputData.documentNumber) || (item_r26.row.inputData == null ? null : item_r26.row.inputData.name) || \u0275\u0275pipeBind2(7, 7, "batchProcessing.rowNumber", \u0275\u0275pureFunction1(16, _c7, item_r26.row.rowIndex + 1)), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (item_r26.row.errors == null ? null : item_r26.row.errors[0] == null ? null : item_r26.row.errors[0].message) || \u0275\u0275pipeBind1(10, 10, "batchProcessing.partial"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.configSteps());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 12, "batchProcessing.partial"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", attemptBadge_r27)("ngTemplateOutletContext", \u0275\u0275pureFunction1(18, _c8, item_r26.row));
  }
}
function BatchProcessingComponent_Conditional_39_Conditional_49_ng_container_1_Case_4_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 150);
  }
}
function BatchProcessingComponent_Conditional_39_Conditional_49_ng_container_1_Case_4_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "replay");
    \u0275\u0275elementEnd();
  }
}
function BatchProcessingComponent_Conditional_39_Conditional_49_ng_container_1_Case_4_For_18_Case_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 137);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275elementStart(2, "mat-icon", 140);
    \u0275\u0275text(3, "check");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const step_r33 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind2(1, 1, "batchProcessing.stepStatusCompleted", \u0275\u0275pureFunction1(4, _c10, ctx_r1.getStepName(step_r33))));
  }
}
function BatchProcessingComponent_Conditional_39_Conditional_49_ng_container_1_Case_4_For_18_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 144);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275elementStart(2, "mat-icon", 146);
    \u0275\u0275text(3, "close");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const step_r33 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind2(1, 1, "batchProcessing.stepStatusFailed", \u0275\u0275pureFunction1(4, _c10, ctx_r1.getStepName(step_r33))));
  }
}
function BatchProcessingComponent_Conditional_39_Conditional_49_ng_container_1_Case_4_For_18_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 145);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275elementStart(2, "mat-icon", 147);
    \u0275\u0275text(3, "remove");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const step_r33 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind2(1, 1, "batchProcessing.stepStatusSkipped", \u0275\u0275pureFunction1(4, _c10, ctx_r1.getStepName(step_r33))));
  }
}
function BatchProcessingComponent_Conditional_39_Conditional_49_ng_container_1_Case_4_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, BatchProcessingComponent_Conditional_39_Conditional_49_ng_container_1_Case_4_For_18_Case_0_Template, 4, 6, "div", 137)(1, BatchProcessingComponent_Conditional_39_Conditional_49_ng_container_1_Case_4_For_18_Case_1_Template, 4, 6, "div", 144)(2, BatchProcessingComponent_Conditional_39_Conditional_49_ng_container_1_Case_4_For_18_Case_2_Template, 4, 6, "div", 145);
  }
  if (rf & 2) {
    let tmp_16_0;
    const step_r33 = ctx.$implicit;
    const item_r26 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional((tmp_16_0 = ctx_r1.getRowStepStatus(item_r26.row, step_r33.sequence)) === "completed" ? 0 : tmp_16_0 === "failed" ? 1 : 2);
  }
}
function BatchProcessingComponent_Conditional_39_Conditional_49_ng_container_1_Case_4_ng_container_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function BatchProcessingComponent_Conditional_39_Conditional_49_ng_container_1_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 126);
    \u0275\u0275listener("click", function BatchProcessingComponent_Conditional_39_Conditional_49_ng_container_1_Case_4_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r32);
      const item_r26 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.selectRow(item_r26.row));
    });
    \u0275\u0275elementStart(1, "div", 127)(2, "span", 148);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 9)(5, "p", 129);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 142);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 135)(12, "button", 149);
    \u0275\u0275pipe(13, "transloco");
    \u0275\u0275listener("click", function BatchProcessingComponent_Conditional_39_Conditional_49_ng_container_1_Case_4_Template_button_click_12_listener($event) {
      \u0275\u0275restoreView(_r32);
      const item_r26 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.retrySingleFailedRow(item_r26.row, $event));
    });
    \u0275\u0275template(14, BatchProcessingComponent_Conditional_39_Conditional_49_ng_container_1_Case_4_Conditional_14_Template, 1, 0, "mat-spinner", 150)(15, BatchProcessingComponent_Conditional_39_Conditional_49_ng_container_1_Case_4_Conditional_15_Template, 2, 0, "mat-icon");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 136);
    \u0275\u0275repeaterCreate(17, BatchProcessingComponent_Conditional_39_Conditional_49_ng_container_1_Case_4_For_18_Template, 3, 1, null, null, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 151);
    \u0275\u0275element(20, "span", 109);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(23, BatchProcessingComponent_Conditional_39_Conditional_49_ng_container_1_Case_4_ng_container_23_Template, 1, 0, "ng-container", 133);
    \u0275\u0275elementStart(24, "mat-icon", 139);
    \u0275\u0275text(25, "chevron_right");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_6_0;
    const item_r26 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275nextContext(2);
    const attemptBadge_r27 = \u0275\u0275reference(48);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(19, _c11, ((tmp_6_0 = ctx_r1.selectedRow()) == null ? null : tmp_6_0.rowIndex) === item_r26.row.rowIndex));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r26.row.rowIndex + 1, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (item_r26.row.inputData == null ? null : item_r26.row.inputData.documentNumber) || (item_r26.row.inputData == null ? null : item_r26.row.inputData.name) || \u0275\u0275pipeBind2(7, 10, "batchProcessing.rowNumber", \u0275\u0275pureFunction1(21, _c7, item_r26.row.rowIndex + 1)), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (item_r26.row.errors == null ? null : item_r26.row.errors[0] == null ? null : item_r26.row.errors[0].message) || \u0275\u0275pipeBind1(10, 13, "batchProcessing.failed"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", !ctx_r1.canOperateRetryFailed() || ctx_r1.isRetryingRow(item_r26.row))("matTooltip", \u0275\u0275pipeBind1(13, 15, "batchProcessing.retryThisFailedRow"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.isRetryingRow(item_r26.row) ? 14 : 15);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.configSteps());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 17, "batchProcessing.failed"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", attemptBadge_r27)("ngTemplateOutletContext", \u0275\u0275pureFunction1(23, _c8, item_r26.row));
  }
}
function BatchProcessingComponent_Conditional_39_Conditional_49_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, BatchProcessingComponent_Conditional_39_Conditional_49_ng_container_1_Case_1_Template, 14, 17, "div", 125)(2, BatchProcessingComponent_Conditional_39_Conditional_49_ng_container_1_Case_2_Template, 19, 17, "div", 125)(3, BatchProcessingComponent_Conditional_39_Conditional_49_ng_container_1_Case_3_Template, 22, 20, "div", 125)(4, BatchProcessingComponent_Conditional_39_Conditional_49_ng_container_1_Case_4_Template, 26, 25, "div", 125);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_5_0;
    const item_r26 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_5_0 = item_r26.kind) === "pending" ? 1 : tmp_5_0 === "completed" ? 2 : tmp_5_0 === "partial" ? 3 : tmp_5_0 === "failed" ? 4 : -1);
  }
}
function BatchProcessingComponent_Conditional_39_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "cdk-virtual-scroll-viewport", 104);
    \u0275\u0275template(1, BatchProcessingComponent_Conditional_39_Conditional_49_ng_container_1_Template, 5, 1, "ng-container", 124);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("cdkVirtualForOf", ctx_r1.virtualTableItems())("cdkVirtualForTrackBy", ctx_r1.trackByVirtualRow);
  }
}
function BatchProcessingComponent_Conditional_39_Conditional_50_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "batchProcessing.noResultsFound"), " ");
  }
}
function BatchProcessingComponent_Conditional_39_Conditional_50_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "batchProcessing.noCompletedRecordsYet"), " ");
  }
}
function BatchProcessingComponent_Conditional_39_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 105)(1, "mat-icon", 152);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 153);
    \u0275\u0275template(4, BatchProcessingComponent_Conditional_39_Conditional_50_Conditional_4_Template, 2, 3)(5, BatchProcessingComponent_Conditional_39_Conditional_50_Conditional_5_Template, 2, 3);
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
function BatchProcessingComponent_Conditional_39_Conditional_51_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 154)(1, "div", 155);
    \u0275\u0275element(2, "div", 156)(3, "div", 157);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 158);
    \u0275\u0275element(5, "div", 159);
    \u0275\u0275elementStart(6, "div", 160);
    \u0275\u0275element(7, "div", 161)(8, "div", 162)(9, "div", 163);
    \u0275\u0275elementEnd()()();
  }
}
function BatchProcessingComponent_Conditional_39_Conditional_51_Conditional_3_Conditional_13_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 178);
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
function BatchProcessingComponent_Conditional_39_Conditional_51_Conditional_3_Conditional_13_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 40);
    \u0275\u0275text(1, "play_arrow");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 1, "batchProcessing.continuePendingSteps", \u0275\u0275pureFunction1(4, _c2, ctx_r1.getPendingStepCount(ctx_r1.selectedRow()))), " ");
  }
}
function BatchProcessingComponent_Conditional_39_Conditional_51_Conditional_3_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 177);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275listener("click", function BatchProcessingComponent_Conditional_39_Conditional_51_Conditional_3_Conditional_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r35);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.retrySingleFailedRow(ctx_r1.selectedRow()));
    });
    \u0275\u0275elementStart(2, "span", 27);
    \u0275\u0275template(3, BatchProcessingComponent_Conditional_39_Conditional_51_Conditional_3_Conditional_13_Conditional_3_Template, 4, 3)(4, BatchProcessingComponent_Conditional_39_Conditional_51_Conditional_3_Conditional_13_Conditional_4_Template, 4, 6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("disabled", ctx_r1.isRetryingRow(ctx_r1.selectedRow()))("matTooltip", \u0275\u0275pipeBind2(1, 3, "batchProcessing.continuePendingStepsHint", \u0275\u0275pureFunction1(6, _c2, ctx_r1.getPendingStepCount(ctx_r1.selectedRow()))));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.isRetryingRow(ctx_r1.selectedRow()) ? 3 : 4);
  }
}
function BatchProcessingComponent_Conditional_39_Conditional_51_Conditional_3_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 179);
    \u0275\u0275listener("click", function BatchProcessingComponent_Conditional_39_Conditional_51_Conditional_3_Conditional_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r36);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.generateRowReport(ctx_r1.selectedRow()));
    });
    \u0275\u0275elementStart(1, "mat-icon", 180);
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
function BatchProcessingComponent_Conditional_39_Conditional_51_Conditional_3_Conditional_23_Conditional_1_Conditional_1_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(7);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getSelectedRuesCategoryValue(), " ");
  }
}
function BatchProcessingComponent_Conditional_39_Conditional_51_Conditional_3_Conditional_23_Conditional_1_Conditional_1_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 189);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "batchProcessing.ruesCategoryNone"));
  }
}
function BatchProcessingComponent_Conditional_39_Conditional_51_Conditional_3_Conditional_23_Conditional_1_Conditional_1_Conditional_17_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 196);
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
function BatchProcessingComponent_Conditional_39_Conditional_51_Conditional_3_Conditional_23_Conditional_1_Conditional_1_Conditional_17_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 197);
    \u0275\u0275text(1, "restart_alt");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "batchProcessing.retryRow"), " ");
  }
}
function BatchProcessingComponent_Conditional_39_Conditional_51_Conditional_3_Conditional_23_Conditional_1_Conditional_1_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 194);
    \u0275\u0275listener("click", function BatchProcessingComponent_Conditional_39_Conditional_51_Conditional_3_Conditional_23_Conditional_1_Conditional_1_Conditional_17_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r38);
      const ctx_r1 = \u0275\u0275nextContext(7);
      return \u0275\u0275resetView(ctx_r1.retrySingleFailedRow(ctx_r1.selectedRow()));
    });
    \u0275\u0275elementStart(1, "span", 195);
    \u0275\u0275template(2, BatchProcessingComponent_Conditional_39_Conditional_51_Conditional_3_Conditional_23_Conditional_1_Conditional_1_Conditional_17_Conditional_2_Template, 4, 3)(3, BatchProcessingComponent_Conditional_39_Conditional_51_Conditional_3_Conditional_23_Conditional_1_Conditional_1_Conditional_17_Conditional_3_Template, 4, 3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(7);
    \u0275\u0275property("disabled", ctx_r1.savingRuesCategory() || ctx_r1.isRetryingRow(ctx_r1.selectedRow()));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.isRetryingRow(ctx_r1.selectedRow()) ? 2 : 3);
  }
}
function BatchProcessingComponent_Conditional_39_Conditional_51_Conditional_3_Conditional_23_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 185)(1, "div", 130)(2, "p", 186);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "mat-icon", 187);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275text(7, "info_outline");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "p", 188);
    \u0275\u0275template(9, BatchProcessingComponent_Conditional_39_Conditional_51_Conditional_3_Conditional_23_Conditional_1_Conditional_1_Conditional_9_Template, 1, 1)(10, BatchProcessingComponent_Conditional_39_Conditional_51_Conditional_3_Conditional_23_Conditional_1_Conditional_1_Conditional_10_Template, 3, 3, "span", 189);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 190)(12, "button", 191);
    \u0275\u0275pipe(13, "transloco");
    \u0275\u0275pipe(14, "transloco");
    \u0275\u0275listener("click", function BatchProcessingComponent_Conditional_39_Conditional_51_Conditional_3_Conditional_23_Conditional_1_Conditional_1_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r37);
      const ctx_r1 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r1.beginRuesCategoryEdit());
    });
    \u0275\u0275elementStart(15, "mat-icon", 192);
    \u0275\u0275text(16, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(17, BatchProcessingComponent_Conditional_39_Conditional_51_Conditional_3_Conditional_23_Conditional_1_Conditional_1_Conditional_17_Template, 4, 2, "button", 193);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
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
    \u0275\u0275conditional(ctx_r1.canOperateRetryFailed() ? 17 : -1);
  }
}
function BatchProcessingComponent_Conditional_39_Conditional_51_Conditional_3_Conditional_23_Conditional_1_Conditional_2_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 201);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r40 = ctx.$implicit;
    \u0275\u0275property("value", opt_r40);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", opt_r40, " ");
  }
}
function BatchProcessingComponent_Conditional_39_Conditional_51_Conditional_3_Conditional_23_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 184)(1, "label", 185)(2, "span", 198);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "select", 199);
    \u0275\u0275listener("ngModelChange", function BatchProcessingComponent_Conditional_39_Conditional_51_Conditional_3_Conditional_23_Conditional_1_Conditional_2_Template_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r39);
      const ctx_r1 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r1.ruesCategoryDraft.set($event));
    });
    \u0275\u0275elementStart(6, "option", 200);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(9, BatchProcessingComponent_Conditional_39_Conditional_51_Conditional_3_Conditional_23_Conditional_1_Conditional_2_For_10_Template, 2, 2, "option", 201, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 202)(12, "button", 203);
    \u0275\u0275listener("click", function BatchProcessingComponent_Conditional_39_Conditional_51_Conditional_3_Conditional_23_Conditional_1_Conditional_2_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r39);
      const ctx_r1 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r1.cancelRuesCategoryEdit());
    });
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 194);
    \u0275\u0275listener("click", function BatchProcessingComponent_Conditional_39_Conditional_51_Conditional_3_Conditional_23_Conditional_1_Conditional_2_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r39);
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
function BatchProcessingComponent_Conditional_39_Conditional_51_Conditional_3_Conditional_23_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 181);
    \u0275\u0275template(1, BatchProcessingComponent_Conditional_39_Conditional_51_Conditional_3_Conditional_23_Conditional_1_Conditional_1_Template, 18, 15)(2, BatchProcessingComponent_Conditional_39_Conditional_51_Conditional_3_Conditional_23_Conditional_1_Conditional_2_Template, 18, 16, "div", 184);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.ruesCategoryEditing() ? 1 : 2);
  }
}
function BatchProcessingComponent_Conditional_39_Conditional_51_Conditional_3_Conditional_23_Conditional_2_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 204)(1, "span", 205);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 206);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const field_r41 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(field_r41.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(field_r41.value);
  }
}
function BatchProcessingComponent_Conditional_39_Conditional_51_Conditional_3_Conditional_23_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 182);
    \u0275\u0275repeaterCreate(1, BatchProcessingComponent_Conditional_39_Conditional_51_Conditional_3_Conditional_23_Conditional_2_For_2_Template, 5, 2, "div", 204, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.getInputDataFields());
  }
}
function BatchProcessingComponent_Conditional_39_Conditional_51_Conditional_3_Conditional_23_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 183);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function BatchProcessingComponent_Conditional_39_Conditional_51_Conditional_3_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 175);
    \u0275\u0275template(1, BatchProcessingComponent_Conditional_39_Conditional_51_Conditional_3_Conditional_23_Conditional_1_Template, 3, 1, "div", 181)(2, BatchProcessingComponent_Conditional_39_Conditional_51_Conditional_3_Conditional_23_Conditional_2_Template, 3, 0, "div", 182)(3, BatchProcessingComponent_Conditional_39_Conditional_51_Conditional_3_Conditional_23_Conditional_3_Template, 2, 0, "p", 183);
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
function BatchProcessingComponent_Conditional_39_Conditional_51_Conditional_3_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "pre", 176);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_6_0;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.formatJson((tmp_6_0 = ctx_r1.selectedRow()) == null ? null : tmp_6_0.inputData));
  }
}
function BatchProcessingComponent_Conditional_39_Conditional_51_Conditional_3_Conditional_25_For_6_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 94);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r42 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, item_r42.at, "short"));
  }
}
function BatchProcessingComponent_Conditional_39_Conditional_51_Conditional_3_Conditional_25_For_6_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 211);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r42 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r42.statusCode);
  }
}
function BatchProcessingComponent_Conditional_39_Conditional_51_Conditional_3_Conditional_25_For_6_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 212);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r42 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r42.code);
  }
}
function BatchProcessingComponent_Conditional_39_Conditional_51_Conditional_3_Conditional_25_For_6_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 213);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r42 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r42.message);
  }
}
function BatchProcessingComponent_Conditional_39_Conditional_51_Conditional_3_Conditional_25_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 208)(1, "span", 209);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, BatchProcessingComponent_Conditional_39_Conditional_51_Conditional_3_Conditional_25_For_6_Conditional_4_Template, 3, 4, "span", 94);
    \u0275\u0275elementStart(5, "span", 210);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, BatchProcessingComponent_Conditional_39_Conditional_51_Conditional_3_Conditional_25_For_6_Conditional_7_Template, 2, 1, "span", 211)(8, BatchProcessingComponent_Conditional_39_Conditional_51_Conditional_3_Conditional_25_For_6_Conditional_8_Template, 2, 1, "span", 212)(9, BatchProcessingComponent_Conditional_39_Conditional_51_Conditional_3_Conditional_25_For_6_Conditional_9_Template, 2, 1, "span", 213);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r42 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 6, "batchProcessing.attemptLabel", \u0275\u0275pureFunction1(9, _c12, item_r42.attempt)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(item_r42.at ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r42.status);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r42.statusCode ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r42.code ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r42.message ? 9 : -1);
  }
}
function BatchProcessingComponent_Conditional_39_Conditional_51_Conditional_3_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 172)(1, "h4", 173);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 207);
    \u0275\u0275repeaterCreate(5, BatchProcessingComponent_Conditional_39_Conditional_51_Conditional_3_Conditional_25_For_6_Template, 10, 11, "div", 208, _forTrack2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "batchProcessing.attemptTimeline"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.selectedRow().attempts);
  }
}
function BatchProcessingComponent_Conditional_39_Conditional_51_Conditional_3_Conditional_26_For_6_Conditional_11_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 196);
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
function BatchProcessingComponent_Conditional_39_Conditional_51_Conditional_3_Conditional_26_For_6_Conditional_11_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 197);
    \u0275\u0275text(1, "restart_alt");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "batchProcessing.retryRow"), " ");
  }
}
function BatchProcessingComponent_Conditional_39_Conditional_51_Conditional_3_Conditional_26_For_6_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 221);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275listener("click", function BatchProcessingComponent_Conditional_39_Conditional_51_Conditional_3_Conditional_26_For_6_Conditional_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r43);
      const ctx_r1 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r1.retrySingleFailedRow(ctx_r1.selectedRow()));
    });
    \u0275\u0275elementStart(2, "span", 195);
    \u0275\u0275template(3, BatchProcessingComponent_Conditional_39_Conditional_51_Conditional_3_Conditional_26_For_6_Conditional_11_Conditional_3_Template, 4, 3)(4, BatchProcessingComponent_Conditional_39_Conditional_51_Conditional_3_Conditional_26_For_6_Conditional_11_Conditional_4_Template, 4, 3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275property("disabled", ctx_r1.isRetryingRow(ctx_r1.selectedRow()))("matTooltip", \u0275\u0275pipeBind1(1, 3, "batchProcessing.retryRowTooltip"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.isRetryingRow(ctx_r1.selectedRow()) ? 3 : 4);
  }
}
function BatchProcessingComponent_Conditional_39_Conditional_51_Conditional_3_Conditional_26_For_6_Conditional_12_Conditional_0_For_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 223)(1, "span", 224);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "iframe", 225);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementStart(5, "div", 226)(6, "button", 227);
    \u0275\u0275listener("click", function BatchProcessingComponent_Conditional_39_Conditional_51_Conditional_3_Conditional_26_For_6_Conditional_12_Conditional_0_For_3_Conditional_0_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r44);
      const field_r45 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(8);
      return \u0275\u0275resetView(ctx_r1.openPdfInNewTab(field_r45.dataUrl));
    });
    \u0275\u0275elementStart(7, "span", 27)(8, "mat-icon", 192);
    \u0275\u0275text(9, "open_in_new");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "button", 227);
    \u0275\u0275listener("click", function BatchProcessingComponent_Conditional_39_Conditional_51_Conditional_3_Conditional_26_For_6_Conditional_12_Conditional_0_For_3_Conditional_0_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r44);
      const field_r45 = \u0275\u0275nextContext().$implicit;
      const step_r46 = \u0275\u0275nextContext(3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.downloadPdf(field_r45.dataUrl, ctx_r1.getStepPdfFilename(ctx_r1.selectedRow().rowIndex, step_r46.sequence)));
    });
    \u0275\u0275elementStart(13, "span", 27)(14, "mat-icon", 192);
    \u0275\u0275text(15, "download");
    \u0275\u0275elementEnd();
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "transloco");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const field_r45 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(8);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(field_r45.label);
    \u0275\u0275advance();
    \u0275\u0275property("title", \u0275\u0275pipeBind1(4, 5, "batchProcessing.pdfPreview"))("src", ctx_r1.sanitizePdfIframeSrc(field_r45.dataUrl), \u0275\u0275sanitizeResourceUrl);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 7, "batchProcessing.openPdfInNewTab"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 9, "batchProcessing.downloadPdf"), " ");
  }
}
function BatchProcessingComponent_Conditional_39_Conditional_51_Conditional_3_Conditional_26_For_6_Conditional_12_Conditional_0_For_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 204)(1, "span", 205);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 206);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const field_r45 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(field_r45.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(field_r45.value);
  }
}
function BatchProcessingComponent_Conditional_39_Conditional_51_Conditional_3_Conditional_26_For_6_Conditional_12_Conditional_0_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, BatchProcessingComponent_Conditional_39_Conditional_51_Conditional_3_Conditional_26_For_6_Conditional_12_Conditional_0_For_3_Conditional_0_Template, 18, 11, "div", 223)(1, BatchProcessingComponent_Conditional_39_Conditional_51_Conditional_3_Conditional_26_For_6_Conditional_12_Conditional_0_For_3_Conditional_1_Template, 5, 2, "div", 204);
  }
  if (rf & 2) {
    const field_r45 = ctx.$implicit;
    \u0275\u0275conditional(field_r45.kind === "pdf" ? 0 : 1);
  }
}
function BatchProcessingComponent_Conditional_39_Conditional_51_Conditional_3_Conditional_26_For_6_Conditional_12_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 222)(1, "div", 182);
    \u0275\u0275repeaterCreate(2, BatchProcessingComponent_Conditional_39_Conditional_51_Conditional_3_Conditional_26_For_6_Conditional_12_Conditional_0_For_3_Template, 2, 1, null, null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_18_0;
    const step_r46 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.getStepResultDisplayFields((tmp_18_0 = ctx_r1.selectedRow()) == null ? null : tmp_18_0.results == null ? null : tmp_18_0.results[step_r46.sequence], ctx_r1.getStepFeatureCode(step_r46)));
  }
}
function BatchProcessingComponent_Conditional_39_Conditional_51_Conditional_3_Conditional_26_For_6_Conditional_12_Conditional_1_Conditional_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 232);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "smartReport.copied"));
  }
}
function BatchProcessingComponent_Conditional_39_Conditional_51_Conditional_3_Conditional_26_For_6_Conditional_12_Conditional_1_Conditional_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 233);
    \u0275\u0275text(1, "content_copy");
    \u0275\u0275elementEnd();
  }
}
function BatchProcessingComponent_Conditional_39_Conditional_51_Conditional_3_Conditional_26_For_6_Conditional_12_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r47 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 231);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275listener("click", function BatchProcessingComponent_Conditional_39_Conditional_51_Conditional_3_Conditional_26_For_6_Conditional_12_Conditional_1_Conditional_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r47);
      const step_r46 = \u0275\u0275nextContext(3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.copyBatchStepJsonToClipboard(ctx_r1.selectedRow().rowIndex, step_r46.sequence));
    });
    \u0275\u0275template(3, BatchProcessingComponent_Conditional_39_Conditional_51_Conditional_3_Conditional_26_For_6_Conditional_12_Conditional_1_Conditional_2_Conditional_3_Template, 3, 3, "span", 232)(4, BatchProcessingComponent_Conditional_39_Conditional_51_Conditional_3_Conditional_26_For_6_Conditional_12_Conditional_1_Conditional_2_Conditional_4_Template, 2, 0, "mat-icon", 233);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r46 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 3, "smartReport.copyJson"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 5, "smartReport.copyJson"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.batchJsonCopyShowsCopied(ctx_r1.selectedRow().rowIndex, step_r46.sequence) ? 3 : 4);
  }
}
function BatchProcessingComponent_Conditional_39_Conditional_51_Conditional_3_Conditional_26_For_6_Conditional_12_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 222)(1, "div", 228);
    \u0275\u0275template(2, BatchProcessingComponent_Conditional_39_Conditional_51_Conditional_3_Conditional_26_For_6_Conditional_12_Conditional_1_Conditional_2_Template, 5, 7, "button", 229);
    \u0275\u0275elementStart(3, "pre", 230);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_18_0;
    let tmp_19_0;
    const step_r46 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(((tmp_18_0 = ctx_r1.selectedRow()) == null ? null : tmp_18_0.results == null ? null : tmp_18_0.results[step_r46.sequence]) != null ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatStepResultJsonForDetail((tmp_19_0 = ctx_r1.selectedRow()) == null ? null : tmp_19_0.results == null ? null : tmp_19_0.results[step_r46.sequence]));
  }
}
function BatchProcessingComponent_Conditional_39_Conditional_51_Conditional_3_Conditional_26_For_6_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, BatchProcessingComponent_Conditional_39_Conditional_51_Conditional_3_Conditional_26_For_6_Conditional_12_Conditional_0_Template, 4, 0, "div", 222)(1, BatchProcessingComponent_Conditional_39_Conditional_51_Conditional_3_Conditional_26_For_6_Conditional_12_Conditional_1_Template, 5, 2, "div", 222);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275conditional(ctx_r1.detailsViewMode() === "readable" ? 0 : 1);
  }
}
function BatchProcessingComponent_Conditional_39_Conditional_51_Conditional_3_Conditional_26_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 215)(1, "div", 216)(2, "div", 135)(3, "div", 217);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 218);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 135)(8, "span", 219);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, BatchProcessingComponent_Conditional_39_Conditional_51_Conditional_3_Conditional_26_For_6_Conditional_11_Template, 5, 5, "button", 220);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, BatchProcessingComponent_Conditional_39_Conditional_51_Conditional_3_Conditional_26_For_6_Conditional_12_Template, 2, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_22_0;
    const step_r46 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r1.getRowStepStatus(ctx_r1.selectedRow(), step_r46.sequence) === "completed" ? "bg-emerald-100 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-300" : ctx_r1.getRowStepStatus(ctx_r1.selectedRow(), step_r46.sequence) === "failed" ? "bg-red-100 text-red-600 dark:bg-red-950/40 dark:text-red-300" : "bg-stone-100 text-stone-500 dark:bg-gray-800 dark:text-stone-400");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", step_r46.sequence, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getStepName(step_r46));
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.getRowStepStatus(ctx_r1.selectedRow(), step_r46.sequence) === "completed" ? "bg-emerald-100 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-300" : ctx_r1.getRowStepStatus(ctx_r1.selectedRow(), step_r46.sequence) === "failed" ? "bg-red-100 text-red-600 dark:bg-red-950/40 dark:text-red-300" : "bg-stone-100 text-stone-500 dark:bg-gray-800 dark:text-stone-400");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 9, "batchProcessing." + ctx_r1.getRowStepStatus(ctx_r1.selectedRow(), step_r46.sequence)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.canEditRuesCategory() && ctx_r1.canOperateRetryFailed() && ctx_r1.getRowStepStatus(ctx_r1.selectedRow(), step_r46.sequence) === "failed" ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_22_0 = ctx_r1.selectedRow()) == null ? null : tmp_22_0.results == null ? null : tmp_22_0.results[step_r46.sequence]) ? 12 : -1);
  }
}
function BatchProcessingComponent_Conditional_39_Conditional_51_Conditional_3_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 172)(1, "h4", 173);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 214);
    \u0275\u0275repeaterCreate(5, BatchProcessingComponent_Conditional_39_Conditional_51_Conditional_3_Conditional_26_For_6_Template, 13, 11, "div", 215, _forTrack0);
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
function BatchProcessingComponent_Conditional_39_Conditional_51_Conditional_3_Conditional_27_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 235)(1, "p", 236);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 237);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const error_r48 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 2, "batchProcessing.stepError", \u0275\u0275pureFunction2(5, _c13, error_r48.step, error_r48.code)), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", error_r48.message, " ");
  }
}
function BatchProcessingComponent_Conditional_39_Conditional_51_Conditional_3_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "h4", 234);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 207);
    \u0275\u0275repeaterCreate(5, BatchProcessingComponent_Conditional_39_Conditional_51_Conditional_3_Conditional_27_For_6_Template, 6, 8, "div", 235, _forTrack3);
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
function BatchProcessingComponent_Conditional_39_Conditional_51_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 164)(1, "h3", 165);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 166)(5, "div", 167);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementStart(7, "button", 168);
    \u0275\u0275listener("click", function BatchProcessingComponent_Conditional_39_Conditional_51_Conditional_3_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r34);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.detailsViewMode.set("readable"));
    });
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 168);
    \u0275\u0275listener("click", function BatchProcessingComponent_Conditional_39_Conditional_51_Conditional_3_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r34);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.detailsViewMode.set("json"));
    });
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(13, BatchProcessingComponent_Conditional_39_Conditional_51_Conditional_3_Conditional_13_Template, 5, 8, "button", 169)(14, BatchProcessingComponent_Conditional_39_Conditional_51_Conditional_3_Conditional_14_Template, 5, 3, "button", 170);
    \u0275\u0275elementStart(15, "button", 171);
    \u0275\u0275listener("click", function BatchProcessingComponent_Conditional_39_Conditional_51_Conditional_3_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r34);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.selectedRow.set(null));
    });
    \u0275\u0275elementStart(16, "mat-icon");
    \u0275\u0275text(17, "close");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(18, "div", 172)(19, "h4", 173);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 174);
    \u0275\u0275template(23, BatchProcessingComponent_Conditional_39_Conditional_51_Conditional_3_Conditional_23_Template, 4, 2, "div", 175)(24, BatchProcessingComponent_Conditional_39_Conditional_51_Conditional_3_Conditional_24_Template, 2, 1, "pre", 176);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(25, BatchProcessingComponent_Conditional_39_Conditional_51_Conditional_3_Conditional_25_Template, 7, 3, "div", 172)(26, BatchProcessingComponent_Conditional_39_Conditional_51_Conditional_3_Conditional_26_Template, 7, 3, "div", 172)(27, BatchProcessingComponent_Conditional_39_Conditional_51_Conditional_3_Conditional_27_Template, 7, 3, "div");
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_24_0;
    let tmp_27_0;
    let tmp_29_0;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 39, "batchProcessing.rowDetails", \u0275\u0275pureFunction1(50, _c7, ((tmp_5_0 = (tmp_5_0 = ctx_r1.selectedRow()) == null ? null : tmp_5_0.rowIndex) !== null && tmp_5_0 !== void 0 ? tmp_5_0 : 0) + 1)), " ");
    \u0275\u0275advance(3);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(6, 42, "batchProcessing.readable"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-white", ctx_r1.detailsViewMode() === "readable")("text-stone-900", ctx_r1.detailsViewMode() === "readable")("shadow-sm", ctx_r1.detailsViewMode() === "readable")("text-stone-500", ctx_r1.detailsViewMode() !== "readable")("dark:bg-gray-950", ctx_r1.detailsViewMode() === "readable")("dark:text-white", ctx_r1.detailsViewMode() === "readable")("dark:text-stone-400", ctx_r1.detailsViewMode() !== "readable");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 44, "batchProcessing.readable"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-white", ctx_r1.detailsViewMode() === "json")("text-stone-900", ctx_r1.detailsViewMode() === "json")("shadow-sm", ctx_r1.detailsViewMode() === "json")("text-stone-500", ctx_r1.detailsViewMode() !== "json")("dark:bg-gray-950", ctx_r1.detailsViewMode() === "json")("dark:text-white", ctx_r1.detailsViewMode() === "json")("dark:text-stone-400", ctx_r1.detailsViewMode() !== "json");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 46, "batchProcessing.json"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.selectedRow() && ctx_r1.hasPendingSteps(ctx_r1.selectedRow()) && ctx_r1.canOperateRetryFailed() ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_24_0 = ctx_r1.selectedRow()) == null ? null : tmp_24_0.status) === "completed" ? 14 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 48, "batchProcessing.inputData"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.detailsViewMode() === "readable" ? 23 : 24);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(((tmp_27_0 = ctx_r1.selectedRow()) == null ? null : tmp_27_0.attempts == null ? null : tmp_27_0.attempts.length) ? 25 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.configSteps().length > 0 && ctx_r1.selectedRow() ? 26 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_29_0 = ctx_r1.selectedRow()) == null ? null : tmp_29_0.errors) && ctx_r1.selectedRow().errors.length > 0 ? 27 : -1);
  }
}
function BatchProcessingComponent_Conditional_39_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 106, 2);
    \u0275\u0275template(2, BatchProcessingComponent_Conditional_39_Conditional_51_Conditional_2_Template, 10, 0, "div", 154)(3, BatchProcessingComponent_Conditional_39_Conditional_51_Conditional_3_Template, 28, 52);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.isLoadingDetail() ? 2 : 3);
  }
}
function BatchProcessingComponent_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 81)(1, "div", 82)(2, "div", 83)(3, "mat-icon", 84);
    \u0275\u0275text(4, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "p", 41);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 85);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(12, "div", 86)(13, "div", 87)(14, "div", 88)(15, "button", 89);
    \u0275\u0275listener("click", function BatchProcessingComponent_Conditional_39_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setRecordFilter("all"));
    });
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "transloco");
    \u0275\u0275elementStart(18, "span", 90);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(20, BatchProcessingComponent_Conditional_39_Conditional_20_Template, 7, 5, "button", 91);
    \u0275\u0275elementStart(21, "button", 89);
    \u0275\u0275listener("click", function BatchProcessingComponent_Conditional_39_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setRecordFilter("completed"));
    });
    \u0275\u0275elementStart(22, "span", 92);
    \u0275\u0275element(23, "span", 93);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "transloco");
    \u0275\u0275elementStart(26, "span", 94);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(28, BatchProcessingComponent_Conditional_39_Conditional_28_Template, 7, 5, "button", 91)(29, BatchProcessingComponent_Conditional_39_Conditional_29_Template, 7, 5, "button", 91);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 95)(31, "div", 96);
    \u0275\u0275template(32, BatchProcessingComponent_Conditional_39_Conditional_32_Template, 7, 10, "button", 97)(33, BatchProcessingComponent_Conditional_39_Conditional_33_Template, 32, 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 98)(35, "mat-icon", 99);
    \u0275\u0275text(36, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "input", 100);
    \u0275\u0275pipe(38, "transloco");
    \u0275\u0275listener("ngModelChange", function BatchProcessingComponent_Conditional_39_Template_input_ngModelChange_37_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateSearchQuery($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(39, BatchProcessingComponent_Conditional_39_Conditional_39_Template, 3, 0, "button", 101);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(40, "div", 102)(41, "span", 103);
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "span", 103);
    \u0275\u0275text(45);
    \u0275\u0275pipe(46, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(47, BatchProcessingComponent_Conditional_39_ng_template_47_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(49, BatchProcessingComponent_Conditional_39_Conditional_49_Template, 2, 2, "cdk-virtual-scroll-viewport", 104)(50, BatchProcessingComponent_Conditional_39_Conditional_50_Template, 6, 2, "div", 105);
    \u0275\u0275elementEnd();
    \u0275\u0275template(51, BatchProcessingComponent_Conditional_39_Conditional_51_Template, 4, 1, "div", 106);
  }
  if (rf & 2) {
    let tmp_6_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 20, "batchProcessing.continueOnFailureTitle"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 22, "batchProcessing.continueOnFailureBody"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngClass", ctx_r1.recordFilter() === "all" ? "bg-white text-stone-950 shadow-sm dark:bg-gray-900 dark:text-white" : "text-stone-500 hover:text-stone-700 dark:text-stone-400 dark:hover:text-stone-200");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 24, "batchProcessing.all"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(((tmp_6_0 = ctx_r1.batch()) == null ? null : tmp_6_0.totalRows) || 0);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.pendingRowsIgnoringSearch().length > 0 ? 20 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.recordFilter() === "completed" ? "bg-white text-stone-950 shadow-sm dark:bg-gray-900 dark:text-white" : "text-stone-500 hover:text-stone-700 dark:text-stone-400 dark:hover:text-stone-200");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(25, 26, "batchProcessing.successful"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.completedRows().length);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.partialRows().length > 0 ? 28 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.failedRowsIgnoringSearch().length > 0 ? 29 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.failedRowsIgnoringSearch().length > 0 ? 32 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.canDownloadInputs() ? 33 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r1.searchQuery())("placeholder", \u0275\u0275pipeBind1(38, 28, "smartReport.searchRecords"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.searchQuery() ? 39 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(43, 30, "batchProcessing.records"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(46, 32, "batchProcessing.status"));
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.virtualTableItems().length > 0 ? 49 : 50);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.selectedRow() ? 51 : -1);
  }
}
var PROGRESS_POLL_INTERVAL_MS = 2500;
var IDLE_POLL_INTERVAL_MS = 15e3;
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
    this._confirm = inject(FuseConfirmationService);
    this._inputModeService = inject(SmartBatchInputModeService);
    this._browserRunner = inject(BatchBrowserRunnerService);
    this._destroy$ = new Subject();
    this._pollTimer = null;
    this._shouldAutostart = false;
    this._reportOnComplete = false;
    this._reportRowIndex = null;
    this._reportRedirectDone = false;
    this._didRefetchRowsForRunner = false;
    this.configId = signal(null);
    this.batchId = signal(null);
    this.batch = signal(null);
    this.configuration = signal(null);
    this.progressDetail = signal(null);
    this.estimate = signal(null);
    this.isLoading = signal(true);
    this.isStarting = signal(false);
    this.isPausing = signal(false);
    this.isResuming = signal(false);
    this.isRetryingFailed = signal(false);
    this.isCancelling = signal(false);
    this.isLoadingEstimate = signal(false);
    this.retryingRowIndex = signal(null);
    this.batchJsonCopyFeedbackKey = signal(null);
    this._batchJsonCopyClearTimer = null;
    this.savingRuesCategory = signal(false);
    this.ruesCategoryEditing = signal(false);
    this.ruesCategoryDraft = signal("");
    this.isProcessing = computed(() => this.batch()?.status === "processing");
    this.isPaused = computed(() => this.batch()?.status === "paused");
    this.liveExecutor = computed(() => {
      const fromConfig = this.configuration()?.executor;
      const raw = fromConfig || this.batch()?.executor;
      return raw === "queue" ? "queue" : "browser";
    });
    this.isServerManaged = computed(() => this.liveExecutor() === "queue");
    this.isBrowserSync = computed(() => this.liveExecutor() !== "queue");
    this.canEditExecutor = computed(() => {
      const status = this.batch()?.status;
      return status === "draft" || status === "pending" || status === "cancelled";
    });
    this.savingExecutor = signal(false);
    this.runModeLabelKey = computed(() => {
      if (this.liveExecutor() === "queue")
        return "createBatchConfig.runModeAsync";
      return "createBatchConfig.runModeSync";
    });
    this.runModeHintKey = computed(() => {
      if (this.liveExecutor() === "queue")
        return "createBatchConfig.runModeAsyncHint";
      return "createBatchConfig.runModeSyncHint";
    });
    this.runModeIcon = computed(() => this.liveExecutor() === "queue" ? "cloud_queue" : "bolt");
    this.runModeBadgeClass = computed(() => {
      if (this.liveExecutor() === "queue") {
        return "bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-200";
      }
      return "bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-200";
    });
    this.configSteps = computed(() => {
      const config = this.configuration();
      if (!config?.steps)
        return [];
      return config.steps.filter((s) => s.enabled !== false).sort((a, b) => a.sequence - b.sequence);
    });
    this.runConcurrencyLabel = computed(() => {
      const strategy = this.progressDetail()?.run?.mergeStrategy;
      if (!strategy)
        return "";
      return strategy === "sequential" ? "sequential" : "parallel";
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
    this.pendingRowsIgnoringSearch = computed(() => {
      const b = this.batch();
      if (!b?.rows)
        return [];
      return b.rows.filter((r) => r.status === "pending" || r.status === "processing");
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
    this.retryableRowCount = computed(() => {
      const b = this.batch();
      if (!b?.rows)
        return 0;
      return b.rows.filter((r) => r.status === "failed" || r.status === "partial").length;
    });
    this.canOperateRetryFailed = computed(() => {
      if (this.retryableRowCount() === 0)
        return false;
      if (this.isProcessing() || this.isStarting() || this.isRetryingFailed())
        return false;
      return true;
    });
    this.rowsForInputsCsvExport = computed(() => {
      const b = this.batch();
      if (!b?.rows)
        return [];
      switch (this.recordFilter()) {
        case "pending":
          return this.pendingRowsIgnoringSearch();
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
        case "pending":
          return {
            labelKey: "batchProcessing.downloadInputsPending",
            tooltipKey: "batchProcessing.downloadInputsTooltipPending",
            accentClass: "!border-blue-500 !text-blue-800 hover:!bg-blue-50/90 dark:!text-blue-300 dark:hover:!bg-blue-950/30",
            dotClass: "bg-blue-500",
            iconClass: "text-blue-600"
          };
        case "completed":
          return {
            labelKey: "batchProcessing.downloadInputsSuccessful",
            tooltipKey: "batchProcessing.downloadInputsTooltipSuccessful",
            accentClass: "!border-emerald-500 !text-emerald-800 hover:!bg-emerald-50/90 dark:!text-emerald-300 dark:hover:!bg-emerald-950/30",
            dotClass: "bg-emerald-500",
            iconClass: "text-emerald-600"
          };
        case "failed":
          return {
            labelKey: "batchProcessing.downloadInputsFailed",
            tooltipKey: "batchProcessing.downloadInputsTooltipFailed",
            accentClass: "!border-red-500 !text-red-800 hover:!bg-red-50/90 dark:!text-red-300 dark:hover:!bg-red-950/30",
            dotClass: "bg-red-500",
            iconClass: "text-red-600"
          };
        case "partial":
          return {
            labelKey: "batchProcessing.downloadInputsPartial",
            tooltipKey: "batchProcessing.downloadInputsTooltipPartial",
            accentClass: "!border-amber-500 !text-amber-900 hover:!bg-amber-50/90 dark:!text-amber-300 dark:hover:!bg-amber-950/30",
            dotClass: "bg-amber-500",
            iconClass: "text-amber-600"
          };
        default:
          return {
            labelKey: "batchProcessing.downloadInputsAll",
            tooltipKey: "batchProcessing.downloadInputsTooltipAll",
            accentClass: "!border-slate-400 !text-slate-800 hover:!bg-slate-50/90 dark:!text-stone-300 dark:hover:!bg-gray-800/50",
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
        case "pending":
          return toItems("pending", this.pendingRows());
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
      const spent = this.progressDetail()?.spend?.credits ?? this.batch()?.creditsSpent;
      if (typeof spent === "number" && spent > 0)
        return spent;
      const completed = this.completedRows().length;
      if (completed === 0)
        return 0;
      const costPerRow = this.configSteps().reduce((sum, step) => sum + this.getStepPrice(step), 0);
      return completed * costPerRow;
    });
    this.creditsAreMeasured = computed(() => (this.progressDetail()?.spend?.credits ?? 0) > 0);
    this.progress = computed(() => {
      const b = this.batch();
      if (!b || b.totalRows === 0)
        return 0;
      const finishedRows = (b.completedRows || 0) + (b.failedRows || 0) + (b.partialRows || 0);
      return Math.round(finishedRows / b.totalRows * 100);
    });
    this.hasBatchRunProgress = computed(() => {
      const b = this.batch();
      if (!b)
        return false;
      return (b.completedRows ?? 0) + (b.failedRows ?? 0) + (b.partialRows ?? 0) > 0;
    });
    this.selectedRow = signal(null);
    this._syncSelectedRowWithBatch = effect(() => {
      const batch = this.batch();
      const selected = this.selectedRow();
      if (selected == null || !batch?.rows?.length) {
        return;
      }
      const next = batch.rows.find((r) => r.rowIndex === selected.rowIndex);
      if (!next) {
        this.selectedRow.set(null);
        return;
      }
      if (next !== selected) {
        this.selectedRow.set(next);
      }
    });
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
    this._route.queryParams.subscribe((query) => {
      this._shouldAutostart = query["autostart"] === "1";
      this._reportOnComplete = query["reportOnComplete"] === "1";
      this._reportRowIndex = typeof query["rowIndex"] === "string" ? query["rowIndex"] : null;
    });
    this._route.params.subscribe((params) => {
      this.configId.set(params["configId"]);
      this.batchId.set(params["batchId"]);
      this._didRefetchRowsForRunner = false;
      this._loadConfiguration();
      this._loadBatch();
    });
  }
  ngOnDestroy() {
    this._browserRunner.stop();
    this._stopPolling();
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
        this._maybeStartBrowserRunner();
      }
    });
  }
  /** Drive Sync from this tab when the batch is processing and has leftover rows. */
  _maybeStartBrowserRunner() {
    const batch = this.batch();
    if (!batch?._id || !this.isBrowserSync())
      return;
    if (batch.status !== "processing" || this._browserRunner.running())
      return;
    if (!this.configSteps().length)
      return;
    if (!batch.rows?.length) {
      this._refetchBatchThenStartRunner();
      return;
    }
    const pending = batch.rows.filter((row) => row.status === "pending" || row.status === "processing");
    if (!pending.length)
      return;
    void this._browserRunner.runBatch(batch, this.configSteps(), (next) => this.batch.set(next), (err) => this._reportFailure("batchProcessing.runInTabFailed", err));
  }
  _refetchBatchThenStartRunner() {
    const id = this.batchId();
    if (!id || this._didRefetchRowsForRunner)
      return;
    this._didRefetchRowsForRunner = true;
    this._smartBatchService.getSmartBatch(id).subscribe({
      next: (res) => {
        this.batch.set(res.data);
        this._maybeStartBrowserRunner();
      }
    });
  }
  /**
   * @param options.silent When true, skip full-page loading spinner (poll refresh).
   */
  _loadBatch(options) {
    const id = this.batchId();
    if (!id)
      return;
    const silent = options?.silent === true;
    if (!silent) {
      this.isLoading.set(true);
    }
    this._smartBatchService.getSmartBatch(id).subscribe({
      next: (res) => {
        this.batch.set(res.data);
        if (!silent) {
          this.isLoading.set(false);
          this.loadEstimate();
        }
        if (this._shouldAutostart && !this.isProcessing() && !this.isStarting()) {
          this._shouldAutostart = false;
          void this.startProcessing();
          return;
        }
        this._maybeStartBrowserRunner();
        this._schedulePoll();
      },
      error: (err) => {
        console.error("Failed to load batch:", err);
        if (!silent) {
          this.isLoading.set(false);
        }
      }
    });
  }
  /** Pre-flight credit cost for the pending rows. */
  loadEstimate() {
    const id = this.batchId();
    if (!id)
      return;
    this.isLoadingEstimate.set(true);
    this._smartBatchService.getBatchEstimate(id).subscribe({
      next: (res) => {
        this.estimate.set(res.data);
        this.isLoadingEstimate.set(false);
      },
      error: () => {
        this.isLoadingEstimate.set(false);
      }
    });
  }
  // -------------------------------------------------------------------------
  // Run control — every operation is a single server call
  // -------------------------------------------------------------------------
  setExecutor(executor) {
    const config = this.configuration();
    const id = this.configId();
    if (!id || !config || !this.canEditExecutor() || this.savingExecutor())
      return;
    if (this.liveExecutor() === executor)
      return;
    this.savingExecutor.set(true);
    this._smartBatchService.updateConfiguration(id, { executor }).subscribe({
      next: (res) => {
        this.configuration.set(__spreadProps(__spreadValues(__spreadValues({}, config), res.data), { executor }));
        this.batch.update((current) => current ? __spreadProps(__spreadValues({}, current), { executor }) : current);
        this.savingExecutor.set(false);
        if (executor === "queue")
          this._browserRunner.stop();
        else
          this._maybeStartBrowserRunner();
      },
      error: (err) => {
        this.savingExecutor.set(false);
        this._reportFailure("batchProcessing.executorUpdateFailed", err);
      }
    });
  }
  /**
   * Async queues the Python worker. Sync starts catalog calls in this tab.
   */
  startProcessing() {
    return __async(this, null, function* () {
      const batchId = this.batchId();
      if (!batchId || this.isStarting() || this.isProcessing())
        return;
      const estimate = this.estimate();
      if (estimate && !estimate.sufficientCredits) {
        const confirmed = yield this._askConfirmation({
          titleKey: "batchProcessing.insufficientCreditsTitle",
          messageKey: "batchProcessing.insufficientCreditsMessage",
          messageParams: { required: estimate.totalCredits, available: estimate.availableCredits },
          confirmKey: "batchProcessing.startAnyway"
        });
        if (!confirmed)
          return;
      }
      this.isStarting.set(true);
      try {
        const res = yield firstValueFrom(this._smartBatchService.startSmartBatch(batchId));
        this.batch.set(res.data);
        this._notify(this.isBrowserSync() ? "batchProcessing.runInTab" : "batchProcessing.runQueued");
        this._maybeStartBrowserRunner();
        this._schedulePoll(true);
      } catch (err) {
        this._reportFailure("batchProcessing.startFailed", err);
      } finally {
        this.isStarting.set(false);
      }
    });
  }
  pauseProcessing() {
    return __async(this, null, function* () {
      const batchId = this.batchId();
      if (!batchId || this.isPausing())
        return;
      this.isPausing.set(true);
      try {
        this._browserRunner.stop();
        const res = yield firstValueFrom(this._smartBatchService.pauseSmartBatch(batchId));
        this.batch.set(res.data);
        this._notify("batchProcessing.runPaused");
      } catch (err) {
        this._reportFailure("batchProcessing.pauseFailed", err);
      } finally {
        this.isPausing.set(false);
        this._schedulePoll(true);
      }
    });
  }
  resumeProcessing() {
    return __async(this, null, function* () {
      const batchId = this.batchId();
      if (!batchId || this.isResuming())
        return;
      this.isResuming.set(true);
      try {
        const res = yield firstValueFrom(this._smartBatchService.resumeSmartBatch(batchId));
        this.batch.set(res.data);
        this._notify("batchProcessing.runResumed");
        this._maybeStartBrowserRunner();
      } catch (err) {
        this._reportFailure("batchProcessing.resumeFailed", err);
      } finally {
        this.isResuming.set(false);
        this._schedulePoll(true);
      }
    });
  }
  /**
   * Re-run failed and partial rows. The engine keeps completed step results, so
   * only the steps that actually failed are billed again.
   */
  retryAllFailedRows(event) {
    return __async(this, null, function* () {
      event?.stopPropagation();
      const batchId = this.batchId();
      if (!batchId || !this.canOperateRetryFailed())
        return;
      const confirmed = yield this._askConfirmation({
        titleKey: "batchProcessing.retryFailedTitle",
        messageKey: "batchProcessing.retryFailedMessage",
        messageParams: { count: this.retryableRowCount() },
        confirmKey: "batchProcessing.retryFailedConfirm"
      });
      if (!confirmed)
        return;
      this.isRetryingFailed.set(true);
      try {
        const res = yield firstValueFrom(this._smartBatchService.retrySmartBatchFailedRows(batchId));
        this.batch.set(res.data.batch);
        this._notify("batchProcessing.retryQueued", { count: res.data.retried });
        this._maybeStartBrowserRunner();
      } catch (err) {
        this._reportFailure("batchProcessing.retryAllFailedError", err);
      } finally {
        this.isRetryingFailed.set(false);
        this._schedulePoll(true);
      }
    });
  }
  /** Re-run a single failed row via the same server endpoint, scoped by row index. */
  retrySingleFailedRow(row, event) {
    return __async(this, null, function* () {
      event?.stopPropagation();
      const batchId = this.batchId();
      if (!batchId || !this.canOperateRetryFailed())
        return;
      if (row.status !== "failed" && row.status !== "partial")
        return;
      this.retryingRowIndex.set(row.rowIndex);
      try {
        const res = yield firstValueFrom(this._smartBatchService.retrySmartBatchFailedRows(batchId, [row.rowIndex]));
        this.batch.set(res.data.batch);
        this._notify("batchProcessing.retryQueued", { count: res.data.retried });
        this._maybeStartBrowserRunner();
      } catch (err) {
        this._reportFailure("batchProcessing.retryRowFailedError", err);
      } finally {
        this.retryingRowIndex.set(null);
        this._schedulePoll(true);
      }
    });
  }
  isRetryingRow(row) {
    return this.retryingRowIndex() === row.rowIndex;
  }
  cancelProcessing() {
    return __async(this, null, function* () {
      const batchId = this.batchId();
      if (!batchId || this.isCancelling())
        return;
      const confirmed = yield this._askConfirmation({
        titleKey: "batchProcessing.cancelTitle",
        messageKey: "batchProcessing.cancelMessage",
        confirmKey: "batchProcessing.cancelConfirm"
      });
      if (!confirmed)
        return;
      this.isCancelling.set(true);
      try {
        this._browserRunner.stop();
        const res = yield firstValueFrom(this._smartBatchService.cancelSmartBatch(batchId));
        this.batch.set(res.data);
        this._notify("batchProcessing.runCancelled");
      } catch (err) {
        this._reportFailure("batchProcessing.cancelFailed", err);
      } finally {
        this.isCancelling.set(false);
        this._schedulePoll(true);
      }
    });
  }
  // -------------------------------------------------------------------------
  // Progress polling
  // -------------------------------------------------------------------------
  _isTerminalStatus(status) {
    return status === "completed" || status === "failed" || status === "cancelled";
  }
  /**
   * Queue the next progress poll while work can still change. Finished batches
   * do not poll; Start / Resume / Retry call this again.
   * @param immediate Poll on the next tick rather than after the interval.
   */
  _schedulePoll(immediate = false) {
    this._stopPolling();
    if (this._browserRunner.running())
      return;
    if (this._isTerminalStatus(this.batch()?.status))
      return;
    const delay = immediate ? 0 : this.isProcessing() ? PROGRESS_POLL_INTERVAL_MS : IDLE_POLL_INTERVAL_MS;
    this._pollTimer = setTimeout(() => {
      this._pollTimer = null;
      this._pollProgress();
    }, delay);
  }
  _stopPolling() {
    if (this._pollTimer == null)
      return;
    clearTimeout(this._pollTimer);
    this._pollTimer = null;
  }
  _pollProgress() {
    const id = this.batchId();
    if (!id)
      return;
    this._smartBatchService.getBatchProgress(id).subscribe({
      next: (res) => {
        const previousStatus = this.batch()?.status;
        this.progressDetail.set(res.data);
        this._applyProgressToBatch(res.data);
        if (this._progressChangedRows(res.data) || previousStatus !== res.data.status) {
          this._refreshRows();
        }
        if (previousStatus === "processing" && res.data.status !== "processing") {
          this.loadEstimate();
          this._maybeRedirectToReport();
        }
        this._schedulePoll();
      },
      error: () => {
        this._schedulePoll();
      }
    });
  }
  /** Cheap counter patch so the header updates without refetching every row. */
  _applyProgressToBatch(progress) {
    this.batch.update((current) => current ? __spreadProps(__spreadValues({}, current), {
      status: progress.status,
      totalRows: progress.totalRows,
      completedRows: progress.completedRows,
      failedRows: progress.failedRows,
      partialRows: progress.partialRows,
      creditsSpent: progress.creditsSpent,
      startedAt: progress.startedAt ?? current.startedAt,
      completedAt: progress.completedAt ?? current.completedAt
    }) : current);
  }
  _progressChangedRows(progress) {
    const b = this.batch();
    if (!b?.rows?.length)
      return true;
    const localCompleted = b.rows.filter((r) => r.status === "completed").length;
    const localFailed = b.rows.filter((r) => r.status === "failed").length;
    const localPartial = b.rows.filter((r) => r.status === "partial").length;
    return localCompleted !== progress.completedRows || localFailed !== progress.failedRows || localPartial !== progress.partialRows;
  }
  _refreshRows() {
    this._loadBatchRowsOnly();
  }
  _loadBatchRowsOnly() {
    const id = this.batchId();
    if (!id)
      return;
    this._smartBatchService.getSmartBatch(id).subscribe({
      next: (res) => this.batch.set(res.data)
    });
  }
  _maybeRedirectToReport() {
    if (!this._reportOnComplete || this._reportRedirectDone)
      return;
    this._reportRedirectDone = true;
    const configId = this.configId();
    const batchId = this.batchId();
    if (!configId || !batchId)
      return;
    this._router.navigate(["/smart-batch", configId, "batch", batchId, "report"], {
      queryParams: this._reportRowIndex != null ? { rowIndex: this._reportRowIndex } : {}
    });
  }
  // -------------------------------------------------------------------------
  // Dialogs & notifications
  // -------------------------------------------------------------------------
  _askConfirmation(options) {
    return __async(this, null, function* () {
      const result = yield firstValueFrom(this._confirm.open({
        title: this._transloco.translate(options.titleKey),
        message: this._transloco.translate(options.messageKey, options.messageParams),
        actions: {
          confirm: { label: this._transloco.translate(options.confirmKey) },
          cancel: { label: this._transloco.translate("batchProcessing.dialogCancel") }
        }
      }).afterClosed());
      return result === "confirmed";
    });
  }
  _notify(key, params) {
    this._snack.open(this._transloco.translate(key, params), this._transloco.translate("batchProcessing.failedExportDismiss"), { duration: 3e3 });
  }
  _reportFailure(key, error) {
    console.error(key, error);
    const body = error?.error;
    const detail = body?.message || body?.code;
    this._snack.open(detail ? `${this._transloco.translate(key)} \u2014 ${detail}` : this._transloco.translate(key), this._transloco.translate("batchProcessing.failedExportDismiss"), { duration: 5e3 });
  }
  // -------------------------------------------------------------------------
  // Exports
  // -------------------------------------------------------------------------
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
      case "pending":
        return "pending";
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
  // -------------------------------------------------------------------------
  // Navigation
  // -------------------------------------------------------------------------
  generateReport() {
    const configId = this.configId();
    const batchId = this.batchId();
    if (configId && batchId) {
      this._router.navigate(["/smart-batch", configId, "batch", batchId, "report"]);
    }
  }
  editInputs() {
    const configId = this.configId();
    const batchId = this.batchId();
    const batch = this.batch();
    if (!configId || !batchId || batch?.status === "processing") {
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
  generateRowReport(row) {
    const configId = this.configId();
    const batchId = this.batchId();
    if (configId && batchId) {
      this._router.navigate(["/smart-batch", configId, "batch", batchId, "report"], {
        queryParams: { rowIndex: row.rowIndex }
      });
    }
  }
  goBack() {
    const configId = this.configId();
    if (configId) {
      this._router.navigate(["/smart-batch", configId]);
    }
  }
  // -------------------------------------------------------------------------
  // Row list & detail panel
  // -------------------------------------------------------------------------
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
  selectRow(row) {
    const canonical = this.batch()?.rows?.find((r) => r.rowIndex === row.rowIndex);
    this.selectedRow.set(canonical ?? row);
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
  /** Steps the engine skipped for this row because its input was incompatible. */
  getSkippedSteps(row) {
    return getBatchSkippedStepsFromInput(row.inputData);
  }
  getSelectedRuesCategoryValue() {
    const raw = this.selectedRow()?.inputData?.category;
    if (raw === null || raw === void 0 || raw === "")
      return "";
    return String(raw);
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
  /**
   * Persist corrected input fields for the selected row before a retry.
   * Input-only patches are accepted on engine-managed batches while they are idle.
   */
  saveRowInputPatch(patch) {
    return __async(this, null, function* () {
      const bid = this.batchId();
      const row = this.selectedRow();
      if (!bid || row == null)
        return false;
      if (this.isProcessing()) {
        this._notify("batchProcessing.editInputsBlockedWhileProcessing");
        return false;
      }
      this.savingRuesCategory.set(true);
      try {
        const res = yield firstValueFrom(this._smartBatchService.updateBatchRow(bid, row.rowIndex, { inputData: patch }));
        this.batch.set(res.data);
        const updated = res.data.rows.find((r) => r.rowIndex === row.rowIndex);
        if (updated) {
          this.selectedRow.set(updated);
        }
        this._notify("batchProcessing.ruesCategorySaved");
        return true;
      } catch (err) {
        this._reportFailure("batchProcessing.ruesCategorySaveFailed", err);
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
    return this.configSteps().filter((step) => !this._hasStepResult(row.results, step.sequence) && !(row.errors || []).some((error) => error.step === step.sequence)).length;
  }
  _hasStepResult(results, stepSequence) {
    return results?.[stepSequence] !== void 0 && results?.[stepSequence] !== null;
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
    }, decls: 40, vars: 40, consts: [["attemptBadge", ""], ["inputsExportMenu", "matMenu"], ["rowDetailPanel", ""], [1, "min-h-screen", "w-full", "bg-stone-50", "dark:bg-gray-950"], [1, "sticky", "top-0", "z-10", "border-b", "border-stone-200/90", "bg-white/90", "backdrop-blur-sm", "dark:border-gray-800", "dark:bg-gray-950/90"], [1, "max-w-7xl", "mx-auto", "px-4", "sm:px-6", "lg:px-8", "py-4"], [1, "flex", "flex-col", "gap-4", "xl:flex-row", "xl:items-center", "xl:justify-between"], [1, "flex", "min-w-0", "items-center", "gap-4"], ["mat-icon-button", "", 3, "click", "matTooltip"], [1, "min-w-0"], [1, "flex", "flex-wrap", "items-center", "gap-2.5"], [1, "text-xl", "font-bold", "text-stone-950", "dark:text-white"], [1, "text-xs", "font-semibold", "px-2.5", "py-1", "rounded-full", 3, "ngClass"], [1, "inline-flex", "items-center", "gap-1", "rounded-full", "px-2.5", "py-1", "text-xs", "font-semibold", 3, "ngClass", "matTooltip"], [1, "icon-size-3.5"], [1, "mt-0.5", "text-sm", "text-stone-500", "dark:text-stone-400"], [1, "flex", "flex-wrap", "items-center", "gap-x-3", "gap-y-2.5", "sm:justify-end", "xl:shrink-0"], ["hintKey", "batchDashboard.executorHint", 3, "executor", "saving", "showBadge", "compact"], ["mat-stroked-button", "", 1, "!m-0", "!rounded-xl", "whitespace-nowrap"], ["mat-flat-button", "", "color", "primary", 1, "!m-0", "!rounded-xl", "whitespace-nowrap", 3, "disabled"], ["mat-stroked-button", "", 1, "!m-0", "!rounded-xl", "whitespace-nowrap", "!border-amber-400", "!text-amber-800", "dark:!text-amber-300", 3, "disabled", "matTooltip"], ["mat-flat-button", "", "color", "accent", 1, "!m-0", "!rounded-xl", "!bg-indigo-600", "whitespace-nowrap"], [1, "mt-4"], [1, "max-w-7xl", "mx-auto", "px-4", "sm:px-6", "lg:px-8", "py-6"], [1, "flex", "items-center", "justify-center", "h-64"], ["hintKey", "batchDashboard.executorHint", 3, "executorChange", "executor", "saving", "showBadge", "compact"], ["mat-stroked-button", "", 1, "!m-0", "!rounded-xl", "whitespace-nowrap", 3, "click"], [1, "inline-flex", "items-center", "gap-2"], ["mat-flat-button", "", "color", "primary", 1, "!m-0", "!rounded-xl", "whitespace-nowrap", 3, "click", "disabled"], [1, "animate-spin"], ["mat-stroked-button", "", 1, "!m-0", "!rounded-xl", "whitespace-nowrap", 3, "click", "disabled"], ["mat-stroked-button", "", 1, "!m-0", "!rounded-xl", "whitespace-nowrap", "!border-red-400", "!text-red-700", "dark:!text-red-300", 3, "click", "disabled"], ["mat-stroked-button", "", 1, "!m-0", "!rounded-xl", "whitespace-nowrap", "!border-amber-400", "!text-amber-800", "dark:!text-amber-300", 3, "click", "disabled", "matTooltip"], ["mat-flat-button", "", "color", "accent", 1, "!m-0", "!rounded-xl", "!bg-indigo-600", "whitespace-nowrap", 3, "click"], [1, "mb-1", "flex", "justify-between", "text-sm", "text-stone-600", "dark:text-stone-400"], [1, "!rounded-full", 3, "mode", "value"], [1, "mt-2", "text-xs", "text-stone-600", "dark:text-stone-400"], [1, "ml-1", "font-mono"], [1, "mt-4", "flex", "flex-wrap", "items-center", "gap-x-5", "gap-y-1", "rounded-xl", "border", "px-4", "py-2.5", "text-sm", 3, "ngClass"], [1, "inline-flex", "items-center", "gap-2", "font-semibold"], [1, "icon-size-4"], [1, "font-semibold"], [1, "rounded-xl", "border", "border-stone-200/90", "bg-white", "p-5", "shadow-sm", "dark:border-gray-800", "dark:bg-gray-900/70"], [1, "mb-3", "text-xs", "font-semibold", "uppercase", "tracking-wider", "text-stone-400", "dark:text-stone-500"], [1, "flex", "items-stretch", "gap-2", "flex-wrap"], [1, "mt-4", "border-t", "border-stone-100", "pt-4", "dark:border-gray-800"], [1, "flex", "min-w-0", "max-w-[320px]", "items-center", "gap-2.5", "rounded-lg", "border", "border-stone-200", "border-l-[3px]", "border-l-indigo-400", "bg-stone-50", "px-3", "py-2.5", "dark:border-gray-700", "dark:bg-gray-950/50", "sm:max-w-[360px]"], [1, "flex", "h-7", "w-7", "shrink-0", "items-center", "justify-center", "rounded-full", "bg-indigo-100", "text-xs", "font-bold", "text-indigo-600", "dark:bg-indigo-950/40", "dark:text-indigo-300"], [1, "min-w-0", "flex-1", "flex", "flex-col", "gap-0.5"], [1, "truncate", "text-sm", "font-medium", "text-stone-950", "dark:text-white", 3, "matTooltip"], ["matTooltipPosition", "below", 1, "truncate", "font-mono", "text-xs", "text-stone-400", "dark:text-stone-500", 3, "matTooltip"], [1, "mt-0.5", "text-xs", "font-medium", "text-indigo-600", "dark:text-indigo-300"], ["aria-hidden", "true", 1, "!text-base", "shrink-0", "self-center", "text-stone-300", "dark:text-stone-600"], [1, "grid", "grid-cols-2", "lg:grid-cols-4", "gap-3"], [1, "flex", "items-center", "gap-3", "rounded-lg", "bg-indigo-50", "px-4", "py-3", "dark:bg-indigo-950/30"], [1, "flex", "h-9", "w-9", "shrink-0", "items-center", "justify-center", "rounded-lg", "bg-indigo-100", "dark:bg-indigo-950/40"], [1, "!text-xl", "text-indigo-600", "dark:text-indigo-300"], [1, "text-xs", "font-medium", "text-indigo-500", "dark:text-indigo-300"], [1, "text-lg", "font-bold", "leading-tight", "text-indigo-700", "dark:text-indigo-200"], [1, "text-xs", "font-medium"], [1, "flex", "cursor-pointer", "items-center", "gap-3", "rounded-lg", "bg-emerald-50", "px-4", "py-3", "transition-all", "hover:shadow-md", "dark:bg-emerald-950/30", 3, "click"], [1, "flex", "h-9", "w-9", "shrink-0", "items-center", "justify-center", "rounded-lg", "bg-emerald-100", "dark:bg-emerald-950/40"], [1, "!text-xl", "text-emerald-600", "dark:text-emerald-300"], [1, "text-xs", "font-medium", "text-emerald-500", "dark:text-emerald-300"], [1, "text-lg", "font-bold", "leading-tight", "text-emerald-700", "dark:text-emerald-200"], [1, "text-xs", "font-normal", "text-emerald-500", "dark:text-emerald-400"], [1, "flex", "cursor-pointer", "items-center", "gap-3", "rounded-lg", "bg-amber-50", "px-4", "py-3", "transition-all", "hover:shadow-md", "dark:bg-amber-950/30", 3, "ring-2", "ring-amber-400"], [1, "flex", "cursor-pointer", "items-center", "gap-3", "rounded-lg", "bg-red-50", "px-4", "py-3", "transition-all", "hover:shadow-md", "dark:bg-red-950/30", 3, "ring-2", "ring-red-400"], [1, "flex", "cursor-pointer", "items-center", "gap-3", "rounded-lg", "bg-amber-50", "px-4", "py-3", "transition-all", "hover:shadow-md", "dark:bg-amber-950/30", 3, "click"], [1, "flex", "h-9", "w-9", "shrink-0", "items-center", "justify-center", "rounded-lg", "bg-amber-100", "dark:bg-amber-950/40"], [1, "!text-xl", "text-amber-600", "dark:text-amber-300"], [1, "text-xs", "font-medium", "text-amber-600", "dark:text-amber-300"], [1, "text-lg", "font-bold", "leading-tight", "text-amber-700", "dark:text-amber-200"], [1, "text-xs", "font-normal", "text-amber-600", "dark:text-amber-400"], [1, "flex", "cursor-pointer", "items-center", "gap-3", "rounded-lg", "bg-red-50", "px-4", "py-3", "transition-all", "hover:shadow-md", "dark:bg-red-950/30", 3, "click"], [1, "flex", "h-9", "w-9", "shrink-0", "items-center", "justify-center", "rounded-lg", "bg-red-100", "dark:bg-red-950/40"], [1, "!text-xl", "text-red-600", "dark:text-red-300"], [1, "text-xs", "font-medium", "text-red-500", "dark:text-red-300"], [1, "text-lg", "font-bold", "leading-tight", "text-red-700", "dark:text-red-200"], [1, "text-xs", "font-normal", "text-red-500", "dark:text-red-400"], ["diameter", "48"], [1, "overflow-hidden", "rounded-xl", "border", "border-stone-200/90", "bg-white", "shadow-sm", "dark:border-gray-800", "dark:bg-gray-900/70"], [1, "mx-5", "mt-5", "rounded-xl", "border", "border-amber-200", "bg-amber-50", "px-4", "py-3", "text-sm", "text-amber-800", "dark:border-amber-900/60", "dark:bg-amber-950/30", "dark:text-amber-200"], [1, "flex", "gap-3"], [1, "!text-xl", "shrink-0", "text-amber-600", "dark:text-amber-400"], [1, "mt-0.5", "text-amber-700", "dark:text-amber-300"], [1, "px-5", "pt-4", "pb-0", "overflow-x-auto"], [1, "flex", "min-w-0", "flex-col", "gap-3", "lg:flex-row", "lg:items-start", "lg:justify-between", "lg:gap-4"], [1, "flex", "min-w-0", "flex-wrap", "items-center", "gap-1", "rounded-lg", "bg-stone-100", "p-0.5", "dark:bg-gray-800"], [1, "rounded-md", "px-3", "py-1.5", "text-sm", "font-medium", "transition-all", 3, "click", "ngClass"], [1, "ml-1", "text-xs", "text-stone-400", "dark:text-stone-500"], [1, "rounded-md", "px-3", "py-1.5", "text-sm", "font-medium", "transition-all", 3, "ngClass"], [1, "inline-flex", "items-center", "gap-1"], [1, "h-1.5", "w-1.5", "rounded-full", "bg-emerald-500"], [1, "text-xs", "text-stone-400", "dark:text-stone-500"], [1, "flex", "min-w-0", "w-full", "shrink-0", "flex-col", "gap-2", "lg:max-w-[min(100%,42rem)]", "lg:items-end"], [1, "flex", "w-full", "min-w-0", "flex-wrap", "items-center", "justify-end", "gap-2"], ["mat-stroked-button", "", "type", "button", "color", "warn", 1, "!rounded-xl", "!border-2", "!border-red-400", "!text-red-800", 3, "disabled", "matTooltip"], [1, "relative", "w-full", "min-h-9", "min-w-[12rem]"], [1, "pointer-events-none", "absolute", "left-2.5", "top-1/2", "z-[1]", "-translate-y-1/2", "!text-lg", "text-stone-400", "dark:text-stone-500"], [1, "box-border", "h-9", "w-full", "min-w-0", "rounded-lg", "border", "border-stone-200", "bg-stone-50", "pl-9", "pr-8", "text-sm", "outline-none", "transition-all", "placeholder:text-stone-400", "focus:border-indigo-400", "focus:bg-white", "focus:ring-1", "focus:ring-indigo-400", "dark:border-gray-700", "dark:bg-gray-950", "dark:text-white", "dark:placeholder:text-stone-500", "dark:focus:border-indigo-500", "dark:focus:bg-gray-950", "dark:focus:ring-indigo-500", 3, "ngModelChange", "ngModel", "placeholder"], ["type", "button", 1, "absolute", "right-2", "top-1/2", "z-[1]", "-translate-y-1/2", "text-stone-400", "hover:text-stone-600", "dark:text-stone-500", "dark:hover:text-stone-300"], [1, "mt-2", "grid", "grid-cols-[1fr_auto]", "items-center", "border-b", "border-stone-100", "px-5", "py-2.5", "dark:border-gray-800"], [1, "text-xs", "font-medium", "uppercase", "tracking-wider", "text-stone-400", "dark:text-stone-500"], ["itemSize", "72", 1, "block", "h-[560px]"], [1, "py-16", "text-center"], [1, "mt-6", "rounded-2xl", "border", "border-stone-200/90", "bg-white", "p-6", "shadow-sm", "dark:border-gray-800", "dark:bg-gray-900/70"], [1, "h-1.5", "w-1.5", "rounded-full", "bg-blue-500"], [1, "h-1.5", "w-1.5", "rounded-full", "bg-amber-500"], [1, "h-1.5", "w-1.5", "rounded-full", "bg-red-500"], ["mat-stroked-button", "", "type", "button", "color", "warn", 1, "!rounded-xl", "!border-2", "!border-red-400", "!text-red-800", 3, "click", "disabled", "matTooltip"], [1, "!h-5", "!w-5", "text-red-600"], [1, "ml-1", "whitespace-nowrap"], ["mat-stroked-button", "", "type", "button", 1, "!rounded-xl", "!border-2", 3, "matMenuTriggerFor", "ngClass", "matTooltip"], [1, "inline-flex", "max-w-[min(100vw-4rem,22rem)]", "items-center", "gap-1.5"], ["aria-hidden", "true", 1, "h-1.5", "w-1.5", "shrink-0", "rounded-full", 3, "ngClass"], [1, "!h-5", "!w-5", "shrink-0", 3, "ngClass"], [1, "truncate"], [1, "!h-5", "!w-5", "shrink-0", "opacity-70"], ["mat-menu-item", "", "type", "button", 3, "click"], [1, "align-middle"], ["type", "button", 1, "absolute", "right-2", "top-1/2", "z-[1]", "-translate-y-1/2", "text-stone-400", "hover:text-stone-600", "dark:text-stone-500", "dark:hover:text-stone-300", 3, "click"], [1, "!text-base", "!w-4", "!h-4"], [1, "inline-flex", "items-center", "rounded-full", "bg-indigo-50", "px-2", "py-0.5", "text-[11px]", "font-medium", "text-indigo-700", "dark:bg-indigo-950/40", "dark:text-indigo-300"], [4, "cdkVirtualFor", "cdkVirtualForOf", "cdkVirtualForTrackBy"], [1, "group", "grid", "h-[72px]", "cursor-pointer", "grid-cols-[1fr_auto]", "items-center", "border-b", "border-stone-100", "px-5", "py-3", "transition-colors", "hover:bg-stone-50", "dark:border-gray-800", "dark:hover:bg-gray-800/50", 3, "ngClass"], [1, "group", "grid", "h-[72px]", "cursor-pointer", "grid-cols-[1fr_auto]", "items-center", "border-b", "border-stone-100", "px-5", "py-3", "transition-colors", "hover:bg-stone-50", "dark:border-gray-800", "dark:hover:bg-gray-800/50", 3, "click", "ngClass"], [1, "flex", "min-w-0", "items-center", "gap-3"], [1, "flex", "h-7", "w-7", "shrink-0", "items-center", "justify-center", "rounded-md", "bg-stone-100", "font-mono", "text-xs", "text-stone-500", "dark:bg-gray-800", "dark:text-stone-400"], [1, "truncate", "text-sm", "font-medium", "text-stone-950", "dark:text-white"], [1, "flex", "items-center", "gap-1.5"], [1, "inline-flex", "items-center", "gap-1", "rounded-full", "bg-stone-100", "px-2", "py-0.5", "text-xs", "font-medium", "text-stone-600", "dark:bg-gray-800", "dark:text-stone-300"], [1, "h-1.5", "w-1.5", "animate-pulse", "rounded-full", "bg-stone-400", "dark:bg-stone-500"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "flex", "h-7", "w-7", "shrink-0", "items-center", "justify-center", "rounded-md", "bg-emerald-50", "font-mono", "text-xs", "text-emerald-600", "dark:bg-emerald-950/40", "dark:text-emerald-300"], [1, "flex", "items-center", "gap-2"], [1, "mr-1", "hidden", "items-center", "gap-0.5", "sm:flex"], [1, "flex", "h-4", "w-4", "items-center", "justify-center", "rounded-full", "bg-emerald-100", "dark:bg-emerald-950/40", 3, "matTooltip"], [1, "inline-flex", "items-center", "gap-1", "rounded-full", "bg-emerald-50", "px-2", "py-0.5", "text-xs", "font-medium", "text-emerald-700", "dark:bg-emerald-950/40", "dark:text-emerald-300"], [1, "!text-base", "text-stone-300", "opacity-0", "transition-opacity", "group-hover:opacity-100", "dark:text-stone-600"], [1, "text-emerald-600", "!h-2.5", "!w-2.5", "!text-[10px]", "dark:text-emerald-300"], [1, "flex", "h-7", "w-7", "shrink-0", "items-center", "justify-center", "rounded-md", "bg-amber-50", "font-mono", "text-xs", "text-amber-600", "dark:bg-amber-950/40", "dark:text-amber-300"], [1, "truncate", "text-xs", "text-stone-400", "dark:text-stone-500"], [1, "inline-flex", "items-center", "gap-1", "rounded-full", "bg-amber-50", "px-2", "py-0.5", "text-xs", "font-medium", "text-amber-700", "dark:bg-amber-950/40", "dark:text-amber-300"], [1, "flex", "h-4", "w-4", "items-center", "justify-center", "rounded-full", "bg-red-100", "dark:bg-red-950/40", 3, "matTooltip"], [1, "flex", "h-4", "w-4", "items-center", "justify-center", "rounded-full", "bg-stone-100", "dark:bg-gray-800", 3, "matTooltip"], [1, "text-red-600", "!h-2.5", "!w-2.5", "!text-[10px]", "dark:text-red-300"], [1, "text-stone-400", "!h-2.5", "!w-2.5", "!text-[10px]", "dark:text-stone-500"], [1, "flex", "h-7", "w-7", "shrink-0", "items-center", "justify-center", "rounded-md", "bg-red-50", "font-mono", "text-xs", "text-red-600", "dark:bg-red-950/40", "dark:text-red-300"], ["mat-icon-button", "", "type", "button", 1, "!w-8", "!h-8", "shrink-0", "text-red-600", 3, "click", "disabled", "matTooltip"], ["diameter", "20"], [1, "inline-flex", "items-center", "gap-1", "rounded-full", "bg-red-50", "px-2", "py-0.5", "text-xs", "font-medium", "text-red-700", "dark:bg-red-950/40", "dark:text-red-300"], [1, "!mb-3", "!h-12", "!w-12", "!text-5xl", "text-stone-300", "dark:text-stone-600"], [1, "text-sm", "text-stone-400", "dark:text-stone-500"], [1, "animate-pulse", "space-y-4"], [1, "flex", "items-center", "justify-between"], [1, "h-5", "w-40", "rounded", "bg-stone-200", "dark:bg-gray-800"], [1, "h-8", "w-48", "rounded", "bg-stone-200", "dark:bg-gray-800"], [1, "space-y-3", "pt-2"], [1, "h-4", "w-24", "rounded", "bg-stone-100", "dark:bg-gray-800"], [1, "space-y-2", "rounded-lg", "border", "border-stone-100", "p-4", "dark:border-gray-800"], [1, "h-3", "w-full", "rounded", "bg-stone-100", "dark:bg-gray-700"], [1, "h-3", "w-3/4", "rounded", "bg-stone-100", "dark:bg-gray-700"], [1, "h-3", "w-1/2", "rounded", "bg-stone-100", "dark:bg-gray-700"], [1, "mb-4", "flex", "items-center", "justify-between"], [1, "font-semibold", "text-stone-950", "dark:text-white"], [1, "flex", "items-center", "gap-3"], ["role", "group", 1, "inline-flex", "rounded-full", "bg-stone-100", "p-0.5", "dark:bg-gray-800"], ["type", "button", 1, "rounded-full", "px-3", "py-1", "text-xs", "font-semibold", "transition", 3, "click"], ["mat-stroked-button", "", 1, "!rounded-lg", "!border-indigo-300", "!text-indigo-700", 3, "disabled", "matTooltip"], ["mat-flat-button", "", "color", "primary", 1, "!rounded-lg"], ["mat-icon-button", "", 3, "click"], [1, "mb-6"], [1, "mb-3", "text-sm", "font-medium", "text-stone-500", "dark:text-stone-400"], [1, "overflow-hidden", "rounded-lg", "border", "border-stone-200", "bg-white", "dark:border-gray-800", "dark:bg-gray-950/50"], [1, "px-4", "py-3"], [1, "m-0", "max-h-64", "overflow-auto", "rounded-lg", "bg-stone-50", "p-4", "font-mono", "text-sm", "text-stone-800", "dark:bg-gray-950", "dark:text-stone-200"], ["mat-stroked-button", "", 1, "!rounded-lg", "!border-indigo-300", "!text-indigo-700", 3, "click", "disabled", "matTooltip"], [1, "animate-spin", "icon-size-4"], ["mat-flat-button", "", "color", "primary", 1, "!rounded-lg", 3, "click"], [1, "mr-2", "icon-size-4"], [1, "mb-2", "flex", "flex-col", "gap-2", "rounded-xl", "border", "border-stone-200/80", "bg-stone-50/70", "px-3", "py-2.5", "text-sm", "dark:border-gray-800", "dark:bg-gray-950/50", "sm:flex-row", "sm:items-center"], [1, "space-y-0"], [1, "py-2", "text-sm", "text-stone-400", "dark:text-stone-500"], [1, "flex", "min-w-0", "flex-1", "flex-col", "gap-2", "sm:flex-row", "sm:items-center"], [1, "min-w-0", "flex-1"], [1, "text-[11px]", "font-semibold", "uppercase", "tracking-[0.18em]", "text-stone-400", "dark:text-stone-500"], [1, "!h-4", "!w-4", "!text-sm", "text-stone-400", 3, "matTooltip"], [1, "mt-0.5", "font-medium", "text-stone-950", "dark:text-stone-100"], [1, "font-normal", "text-stone-400", "dark:text-stone-500"], [1, "flex", "shrink-0", "items-center", "gap-1.5", "sm:justify-end"], ["mat-icon-button", "", "type", "button", 1, "!h-9", "!w-9", 3, "click", "matTooltip", "disabled"], [1, "!text-lg"], ["mat-flat-button", "", "color", "primary", "type", "button", 1, "!h-9", "!min-h-9", "rounded-xl", "px-4", 3, "disabled"], ["mat-flat-button", "", "color", "primary", "type", "button", 1, "!h-9", "!min-h-9", "rounded-xl", "px-4", 3, "click", "disabled"], [1, "inline-flex", "items-center", "gap-1.5"], [1, "animate-spin", "!text-base"], [1, "!text-base"], [1, "mb-1", "block", "text-[11px]", "font-semibold", "uppercase", "tracking-[0.18em]", "text-stone-400", "dark:text-stone-500"], [1, "h-9", "w-full", "rounded-lg", "border", "border-stone-200", "bg-white", "px-3", "text-sm", "font-medium", "text-stone-900", "outline-none", "transition", "focus:border-indigo-400", "focus:ring-2", "focus:ring-indigo-100", "disabled:opacity-60", "dark:border-gray-700", "dark:bg-gray-950", "dark:text-white", "dark:focus:border-indigo-500", "dark:focus:ring-indigo-900", 3, "ngModelChange", "ngModel", "disabled"], ["value", ""], [3, "value"], [1, "flex", "shrink-0", "items-center", "gap-2"], ["mat-button", "", "type", "button", 1, "!h-9", "!min-h-9", "rounded-xl", "px-3", 3, "click", "disabled"], [1, "flex", "gap-4", "border-b", "border-stone-100", "py-2", "text-sm", "last:border-0", "dark:border-gray-800"], [1, "min-w-[140px]", "shrink-0", "text-stone-500", "dark:text-stone-400"], [1, "break-words", "font-medium", "text-stone-950", "dark:text-stone-100"], [1, "space-y-2"], [1, "flex", "flex-wrap", "items-baseline", "gap-x-3", "gap-y-1", "rounded-lg", "border", "border-stone-200", "px-3", "py-2", "text-sm", "dark:border-gray-800"], [1, "font-medium", "text-stone-950", "dark:text-white"], [1, "text-xs", "font-medium", "text-stone-600", "dark:text-stone-300"], [1, "text-xs", "text-stone-400"], [1, "text-xs", "text-stone-500", "dark:text-stone-400"], [1, "min-w-0", "break-words", "text-xs", "text-stone-500", "dark:text-stone-400"], [1, "space-y-3"], [1, "overflow-hidden", "rounded-lg", "border", "border-stone-200", "dark:border-gray-800"], [1, "flex", "items-center", "justify-between", "bg-stone-50", "px-4", "py-3", "dark:bg-gray-950/50"], [1, "w-6", "h-6", "rounded-full", "flex", "items-center", "justify-center", "text-xs", "font-bold"], [1, "font-medium", "text-stone-700", "dark:text-stone-200"], [1, "text-xs", "font-medium", "px-2", "py-1", "rounded-full"], ["mat-stroked-button", "", 1, "!h-8", "!rounded-lg", "!border-amber-300", "!text-amber-700", 3, "disabled", "matTooltip"], ["mat-stroked-button", "", 1, "!h-8", "!rounded-lg", "!border-amber-300", "!text-amber-700", 3, "click", "disabled", "matTooltip"], [1, "border-t", "border-stone-100", "bg-white", "px-4", "py-3", "dark:border-gray-800", "dark:bg-gray-950/30"], [1, "flex", "flex-col", "gap-3", "border-b", "border-stone-100", "py-4", "text-sm", "last:border-0", "dark:border-gray-800"], [1, "text-stone-500", "dark:text-stone-400"], [1, "min-h-[420px]", "w-full", "rounded-lg", "border", "border-stone-200", "bg-stone-50", "dark:border-gray-700", "dark:bg-gray-950", 3, "title", "src"], [1, "flex", "flex-wrap", "gap-2"], ["mat-stroked-button", "", "type", "button", 1, "!rounded-lg", 3, "click"], [1, "relative"], ["type", "button", "mat-icon-button", "", 1, "!absolute", "top-1.5", "right-1.5", "z-10", "!h-9", "!min-h-9", "!w-auto", "!min-w-9", "!rounded-lg", "!border", "border-stone-200/90", "!bg-white/95", "px-1.5", "shadow-sm", "hover:!border-stone-300", "hover:bg-white", "dark:!border-gray-700", "dark:!bg-gray-900/95", "dark:hover:!border-gray-600", "dark:hover:!bg-gray-800", 3, "matTooltip"], [1, "m-0", "max-h-64", "overflow-auto", "rounded-lg", "border", "border-stone-100", "bg-stone-50", "p-3", "pr-14", "font-mono", "text-xs", "text-stone-800", "dark:border-gray-800", "dark:bg-gray-950", "dark:text-stone-200"], ["type", "button", "mat-icon-button", "", 1, "!absolute", "top-1.5", "right-1.5", "z-10", "!h-9", "!min-h-9", "!w-auto", "!min-w-9", "!rounded-lg", "!border", "border-stone-200/90", "!bg-white/95", "px-1.5", "shadow-sm", "hover:!border-stone-300", "hover:bg-white", "dark:!border-gray-700", "dark:!bg-gray-900/95", "dark:hover:!border-gray-600", "dark:hover:!bg-gray-800", 3, "click", "matTooltip"], [1, "text-xs", "font-medium", "text-emerald-700", "whitespace-nowrap", "px-1"], [1, "!text-[18px]", "text-stone-600", "dark:text-stone-300"], [1, "text-sm", "font-medium", "text-red-500", "mb-3"], [1, "rounded-lg", "border", "border-red-200", "bg-red-50", "p-3", "dark:border-red-900/60", "dark:bg-red-950/30"], [1, "text-sm", "font-medium", "text-red-700", "dark:text-red-300"], [1, "text-sm", "text-red-600", "dark:text-red-400"]], template: function BatchProcessingComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "div", 5)(3, "div", 6)(4, "div", 7)(5, "button", 8);
        \u0275\u0275pipe(6, "transloco");
        \u0275\u0275listener("click", function BatchProcessingComponent_Template_button_click_5_listener() {
          return ctx.goBack();
        });
        \u0275\u0275elementStart(7, "mat-icon");
        \u0275\u0275text(8, "arrow_back");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 9)(10, "div", 10)(11, "h1", 11);
        \u0275\u0275text(12);
        \u0275\u0275pipe(13, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "span", 12);
        \u0275\u0275text(15);
        \u0275\u0275pipe(16, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "span", 13);
        \u0275\u0275pipe(18, "transloco");
        \u0275\u0275elementStart(19, "mat-icon", 14);
        \u0275\u0275text(20);
        \u0275\u0275elementEnd();
        \u0275\u0275text(21);
        \u0275\u0275pipe(22, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "p", 15);
        \u0275\u0275text(24);
        \u0275\u0275pipe(25, "transloco");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(26, "div", 16);
        \u0275\u0275template(27, BatchProcessingComponent_Conditional_27_Template, 1, 4, "batch-executor-control", 17)(28, BatchProcessingComponent_Conditional_28_Template, 6, 3, "button", 18)(29, BatchProcessingComponent_Conditional_29_Template, 4, 2, "button", 19)(30, BatchProcessingComponent_Conditional_30_Template, 8, 4)(31, BatchProcessingComponent_Conditional_31_Template, 4, 2, "button", 19)(32, BatchProcessingComponent_Conditional_32_Template, 5, 5, "button", 20)(33, BatchProcessingComponent_Conditional_33_Template, 6, 3, "button", 21);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(34, BatchProcessingComponent_Conditional_34_Template, 12, 15, "div", 22)(35, BatchProcessingComponent_Conditional_35_Template, 1, 1);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(36, BatchProcessingComponent_Conditional_36_Template, 9, 4, "div", 5);
        \u0275\u0275elementStart(37, "div", 23);
        \u0275\u0275template(38, BatchProcessingComponent_Conditional_38_Template, 2, 0, "div", 24)(39, BatchProcessingComponent_Conditional_39_Template, 52, 34);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        let tmp_1_0;
        let tmp_2_0;
        let tmp_3_0;
        let tmp_8_0;
        let tmp_11_0;
        let tmp_15_0;
        let tmp_17_0;
        \u0275\u0275advance(5);
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(6, 21, "batchProcessing.backToDashboard"));
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1(" ", ((tmp_1_0 = ctx.batch()) == null ? null : tmp_1_0.name) || \u0275\u0275pipeBind1(13, 23, "batchProcessing.batchProcessing"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction6(33, _c1, ((tmp_2_0 = ctx.batch()) == null ? null : tmp_2_0.status) === "completed", ((tmp_2_0 = ctx.batch()) == null ? null : tmp_2_0.status) === "pending" || ((tmp_2_0 = ctx.batch()) == null ? null : tmp_2_0.status) === "draft", ((tmp_2_0 = ctx.batch()) == null ? null : tmp_2_0.status) === "processing", ((tmp_2_0 = ctx.batch()) == null ? null : tmp_2_0.status) === "failed", ((tmp_2_0 = ctx.batch()) == null ? null : tmp_2_0.status) === "cancelled", ((tmp_2_0 = ctx.batch()) == null ? null : tmp_2_0.status) === "paused"));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 25, "batchProcessing." + (((tmp_3_0 = ctx.batch()) == null ? null : tmp_3_0.status) || "pending")), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngClass", ctx.runModeBadgeClass())("matTooltip", \u0275\u0275pipeBind1(18, 27, ctx.runModeHintKey()));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.runModeIcon());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 29, ctx.runModeLabelKey()), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate2(" ", ((tmp_8_0 = ctx.batch()) == null ? null : tmp_8_0.totalRows) || 0, " ", \u0275\u0275pipeBind1(25, 31, "batchProcessing.records"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.canEditExecutor() ? 27 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.batch() && !ctx.isProcessing() ? 28 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(((tmp_11_0 = ctx.batch()) == null ? null : tmp_11_0.status) === "draft" || ((tmp_11_0 = ctx.batch()) == null ? null : tmp_11_0.status) === "pending" || ((tmp_11_0 = ctx.batch()) == null ? null : tmp_11_0.status) === "failed" || ((tmp_11_0 = ctx.batch()) == null ? null : tmp_11_0.status) === "cancelled" ? 29 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.isProcessing() ? 30 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.isPaused() ? 31 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.canOperateRetryFailed() ? 32 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(((tmp_15_0 = ctx.batch()) == null ? null : tmp_15_0.status) === "completed" || ctx.isProcessing() || ctx.hasBatchRunProgress() ? 33 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.isProcessing() || ctx.isPaused() ? 34 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((tmp_17_0 = ctx.estimate()) ? 35 : -1, tmp_17_0);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.configSteps().length > 0 ? 36 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.isLoading() ? 38 : 39);
      }
    }, dependencies: [
      CommonModule,
      NgClass,
      NgTemplateOutlet,
      DecimalPipe,
      DatePipe,
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
      MatFormFieldModule,
      BatchExecutorControlComponent,
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
      MatFormFieldModule,
      BatchExecutorControlComponent,
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
    ], animations: [fuseAnimations], template: `<div class="min-h-screen w-full bg-stone-50 dark:bg-gray-950">\r
    <!-- Header -->\r
    <div class="sticky top-0 z-10 border-b border-stone-200/90 bg-white/90 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-950/90">\r
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">\r
            <div class="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">\r
                <div class="flex min-w-0 items-center gap-4">\r
                    <button\r
                        mat-icon-button\r
                        (click)="goBack()"\r
                        [matTooltip]="'batchProcessing.backToDashboard' | transloco"\r
                    >\r
                        <mat-icon>arrow_back</mat-icon>\r
                    </button>\r
                    <div class="min-w-0">\r
                        <div class="flex flex-wrap items-center gap-2.5">\r
                            <h1 class="text-xl font-bold text-stone-950 dark:text-white">\r
                                {{\r
                                    batch()?.name || ('batchProcessing.batchProcessing' | transloco)\r
                                }}\r
                            </h1>\r
                            <span\r
                                class="text-xs font-semibold px-2.5 py-1 rounded-full"\r
                                [ngClass]="{\r
                                    'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300':\r
                                        batch()?.status === 'completed',\r
                                    'bg-amber-100 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300':\r
                                        batch()?.status === 'pending' ||\r
                                        batch()?.status === 'draft',\r
                                    'bg-blue-100 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300':\r
                                        batch()?.status === 'processing',\r
                                    'bg-red-100 text-red-700 dark:bg-red-950/40 dark:text-red-300':\r
                                        batch()?.status === 'failed',\r
                                    'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-stone-400':\r
                                        batch()?.status === 'cancelled',\r
                                    'bg-violet-100 text-violet-700 dark:bg-violet-950/40 dark:text-violet-300':\r
                                        batch()?.status === 'paused',\r
                                }"\r
                            >\r
                                {{\r
                                    'batchProcessing.' + (batch()?.status || 'pending') | transloco\r
                                }}\r
                            </span>\r
                            <span\r
                                class="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold"\r
                                [ngClass]="runModeBadgeClass()"\r
                                [matTooltip]="runModeHintKey() | transloco"\r
                            >\r
                                <mat-icon class="icon-size-3.5">{{ runModeIcon() }}</mat-icon>\r
                                {{ runModeLabelKey() | transloco }}\r
                            </span>\r
                        </div>\r
                        <p class="mt-0.5 text-sm text-stone-500 dark:text-stone-400">\r
                            {{ batch()?.totalRows || 0 }}\r
                            {{ 'batchProcessing.records' | transloco }}\r
                        </p>\r
                    </div>\r
                </div>\r
\r
                <!-- Action Buttons -->\r
                <div class="flex flex-wrap items-center gap-x-3 gap-y-2.5 sm:justify-end xl:shrink-0">\r
                    @if (canEditExecutor()) {\r
                        <batch-executor-control\r
                            [executor]="liveExecutor()"\r
                            [saving]="savingExecutor()"\r
                            [showBadge]="false"\r
                            [compact]="true"\r
                            hintKey="batchDashboard.executorHint"\r
                            (executorChange)="setExecutor($event)"\r
                        />\r
                    }\r
                    @if (batch() && !isProcessing()) {\r
                        <button mat-stroked-button (click)="editInputs()" class="!m-0 !rounded-xl whitespace-nowrap">\r
                            <span class="inline-flex items-center gap-2">\r
                                <mat-icon>playlist_add</mat-icon>\r
                                {{ 'batchProcessing.addInputs' | transloco }}\r
                            </span>\r
                        </button>\r
                    }\r
                    @if (\r
                        batch()?.status === 'draft' ||\r
                        batch()?.status === 'pending' ||\r
                        batch()?.status === 'failed' ||\r
                        batch()?.status === 'cancelled'\r
                    ) {\r
                        <button\r
                            mat-flat-button\r
                            color="primary"\r
                            (click)="startProcessing()"\r
                            [disabled]="isStarting()"\r
                            class="!m-0 !rounded-xl whitespace-nowrap"\r
                        >\r
                            <span class="inline-flex items-center gap-2">\r
                                @if (isStarting()) {\r
                                    <mat-icon class="animate-spin">refresh</mat-icon>\r
                                    {{ 'batchProcessing.starting' | transloco }}\r
                                } @else {\r
                                    <mat-icon>play_arrow</mat-icon>\r
                                    {{\r
                                        (hasBatchRunProgress()\r
                                            ? 'batchProcessing.resume'\r
                                            : 'batchProcessing.startProcessing'\r
                                        ) | transloco\r
                                    }}\r
                                }\r
                            </span>\r
                        </button>\r
                    }\r
                    @if (isProcessing()) {\r
                        <button\r
                            mat-stroked-button\r
                            (click)="pauseProcessing()"\r
                            [disabled]="isPausing()"\r
                            class="!m-0 !rounded-xl whitespace-nowrap"\r
                        >\r
                            <span class="inline-flex items-center gap-2">\r
                                @if (isPausing()) {\r
                                    <mat-icon class="animate-spin">refresh</mat-icon>\r
                                    {{ 'batchProcessing.pausing' | transloco }}\r
                                } @else {\r
                                    <mat-icon>pause</mat-icon>\r
                                    {{ 'batchProcessing.pause' | transloco }}\r
                                }\r
                            </span>\r
                        </button>\r
                        <button\r
                            mat-stroked-button\r
                            (click)="cancelProcessing()"\r
                            [disabled]="isCancelling()"\r
                            class="!m-0 !rounded-xl whitespace-nowrap !border-red-400 !text-red-700 dark:!text-red-300"\r
                        >\r
                            <span class="inline-flex items-center gap-2">\r
                                @if (isCancelling()) {\r
                                    <mat-icon class="animate-spin">refresh</mat-icon>\r
                                    {{ 'batchProcessing.cancelling' | transloco }}\r
                                } @else {\r
                                    <mat-icon>stop_circle</mat-icon>\r
                                    {{ 'batchProcessing.cancel' | transloco }}\r
                                }\r
                            </span>\r
                        </button>\r
                    }\r
                    @if (isPaused()) {\r
                        <button\r
                            mat-flat-button\r
                            color="primary"\r
                            (click)="resumeProcessing()"\r
                            [disabled]="isResuming()"\r
                            class="!m-0 !rounded-xl whitespace-nowrap"\r
                        >\r
                            <span class="inline-flex items-center gap-2">\r
                                @if (isResuming()) {\r
                                    <mat-icon class="animate-spin">refresh</mat-icon>\r
                                    {{ 'batchProcessing.resuming' | transloco }}\r
                                } @else {\r
                                    <mat-icon>play_arrow</mat-icon>\r
                                    {{ 'batchProcessing.resume' | transloco }}\r
                                }\r
                            </span>\r
                        </button>\r
                    }\r
                    @if (canOperateRetryFailed()) {\r
                        <button\r
                            mat-stroked-button\r
                            (click)="retryAllFailedRows($event)"\r
                            [disabled]="isRetryingFailed()"\r
                            class="!m-0 !rounded-xl whitespace-nowrap !border-amber-400 !text-amber-800 dark:!text-amber-300"\r
                            [matTooltip]="'batchProcessing.retryFailedTooltip' | transloco"\r
                        >\r
                            <span class="inline-flex items-center gap-2">\r
                                @if (isRetryingFailed()) {\r
                                    <mat-icon class="animate-spin">refresh</mat-icon>\r
                                    {{ 'batchProcessing.retrying' | transloco }}\r
                                } @else {\r
                                    <mat-icon>replay</mat-icon>\r
                                    {{\r
                                        'batchProcessing.retryFailedRows'\r
                                            | transloco: { count: retryableRowCount() }\r
                                    }}\r
                                }\r
                            </span>\r
                        </button>\r
                    }\r
                    @if (\r
                        batch()?.status === 'completed' ||\r
                        isProcessing() ||\r
                        hasBatchRunProgress()\r
                    ) {\r
                        <button\r
                            mat-flat-button\r
                            color="accent"\r
                            (click)="generateReport()"\r
                            class="!m-0 !rounded-xl !bg-indigo-600 whitespace-nowrap"\r
                        >\r
                            <span class="inline-flex items-center gap-2">\r
                                <mat-icon>description</mat-icon>\r
                                {{ 'batchProcessing.generateReport' | transloco }}\r
                            </span>\r
                        </button>\r
                    }\r
                </div>\r
            </div>\r
\r
            <!-- Progress Bar -->\r
            @if (isProcessing() || isPaused()) {\r
                <div class="mt-4">\r
                    <div class="mb-1 flex justify-between text-sm text-stone-600 dark:text-stone-400">\r
                        <span>{{\r
                            (isPaused() ? 'batchProcessing.paused' : 'batchProcessing.processing')\r
                                | transloco\r
                        }}</span>\r
                        <span>{{ progress() }}%</span>\r
                    </div>\r
                    <mat-progress-bar\r
                        [mode]="isPaused() ? 'determinate' : 'buffer'"\r
                        [value]="progress()"\r
                        class="!rounded-full"\r
                    ></mat-progress-bar>\r
                    <p class="mt-2 text-xs text-stone-600 dark:text-stone-400">\r
                        {{\r
                            'batchProcessing.serverProgressHint'\r
                                | transloco\r
                                    : {\r
                                          completed: batch()?.completedRows || 0,\r
                                          failed: batch()?.failedRows || 0,\r
                                          total: batch()?.totalRows || 0,\r
                                      }\r
                        }}\r
                        @if (runConcurrencyLabel()) {\r
                            <span class="ml-1 font-mono">\xB7 {{ runConcurrencyLabel() }}</span>\r
                        }\r
                    </p>\r
                </div>\r
            }\r
\r
            <!-- Pre-flight credit estimate -->\r
            @if (estimate(); as est) {\r
                @if (est.pendingRows > 0 && !isProcessing()) {\r
                    <div\r
                        class="mt-4 flex flex-wrap items-center gap-x-5 gap-y-1 rounded-xl border px-4 py-2.5 text-sm"\r
                        [ngClass]="\r
                            est.sufficientCredits\r
                                ? 'border-stone-200 bg-stone-50 text-stone-700 dark:border-gray-800 dark:bg-gray-900/60 dark:text-stone-300'\r
                                : 'border-red-300 bg-red-50 text-red-800 dark:border-red-900 dark:bg-red-950/30 dark:text-red-300'\r
                        "\r
                    >\r
                        <span class="inline-flex items-center gap-2 font-semibold">\r
                            <mat-icon class="icon-size-4">calculate</mat-icon>\r
                            {{\r
                                'batchProcessing.estimateCost'\r
                                    | transloco\r
                                        : { credits: est.totalCredits, rows: est.pendingRows }\r
                            }}\r
                        </span>\r
                        <span>{{\r
                            'batchProcessing.estimatePerRecord'\r
                                | transloco: { credits: est.creditsPerItem }\r
                        }}</span>\r
                        <span>{{\r
                            'batchProcessing.estimateAvailable'\r
                                | transloco: { credits: est.availableCredits }\r
                        }}</span>\r
                        @if (!est.sufficientCredits) {\r
                            <span class="font-semibold">{{\r
                                'batchProcessing.estimateShortfall'\r
                                    | transloco: { credits: est.shortfall }\r
                            }}</span>\r
                        }\r
                    </div>\r
                }\r
            }\r
        </div>\r
    </div>\r
\r
    <!-- Steps & Summary -->\r
    @if (configSteps().length > 0) {\r
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">\r
            <div class="rounded-xl border border-stone-200/90 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900/70">\r
                <!-- Steps Pipeline -->\r
                <h3 class="mb-3 text-xs font-semibold uppercase tracking-wider text-stone-400 dark:text-stone-500">\r
                    {{ 'batchProcessing.processingSteps' | transloco }}\r
                </h3>\r
                <div class="flex items-stretch gap-2 flex-wrap">\r
                    @for (step of configSteps(); track step.sequence; let idx = $index) {\r
                        <div\r
                            class="flex min-w-0 max-w-[320px] items-center gap-2.5 rounded-lg border border-stone-200 border-l-[3px] border-l-indigo-400 bg-stone-50 px-3 py-2.5 dark:border-gray-700 dark:bg-gray-950/50 sm:max-w-[360px]"\r
                        >\r
                            <div\r
                                class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-600 dark:bg-indigo-950/40 dark:text-indigo-300"\r
                            >\r
                                {{ step.sequence }}\r
                            </div>\r
                            <div class="min-w-0 flex-1 flex flex-col gap-0.5">\r
                                <span\r
                                    class="truncate text-sm font-medium text-stone-950 dark:text-white"\r
                                    [matTooltip]="getStepName(step)"\r
                                >\r
                                    {{ getStepName(step) }}\r
                                </span>\r
                                @if (getStepUrl(step)) {\r
                                    <span\r
                                        class="truncate font-mono text-xs text-stone-400 dark:text-stone-500"\r
                                        [matTooltip]="getStepUrl(step)"\r
                                        matTooltipPosition="below"\r
                                    >\r
                                        {{ getStepUrl(step) }}\r
                                    </span>\r
                                }\r
                                @if (getStepPrice(step) > 0) {\r
                                    <span class="mt-0.5 text-xs font-medium text-indigo-600 dark:text-indigo-300">\r
                                        {{ getStepPrice(step) | number: '1.2-2' }}\r
                                        {{ 'batchProcessing.credits' | transloco }}\r
                                    </span>\r
                                }\r
                            </div>\r
                        </div>\r
                        @if (idx < configSteps().length - 1) {\r
                            <mat-icon\r
                                class="!text-base shrink-0 self-center text-stone-300 dark:text-stone-600"\r
                                aria-hidden="true"\r
                                >arrow_forward</mat-icon\r
                            >\r
                        }\r
                    }\r
                </div>\r
\r
                <!-- Summary Stats -->\r
                @if (completedRows().length > 0 || partialRows().length > 0 || failedRows().length > 0) {\r
                    <div class="mt-4 border-t border-stone-100 pt-4 dark:border-gray-800">\r
                        <div class="grid grid-cols-2 lg:grid-cols-4 gap-3">\r
                            <!-- Total Cost -->\r
                            <div class="flex items-center gap-3 rounded-lg bg-indigo-50 px-4 py-3 dark:bg-indigo-950/30">\r
                                <div\r
                                    class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-100 dark:bg-indigo-950/40"\r
                                >\r
                                    <mat-icon class="!text-xl text-indigo-600 dark:text-indigo-300">payments</mat-icon>\r
                                </div>\r
                                <div class="min-w-0">\r
                                    <p class="text-xs font-medium text-indigo-500 dark:text-indigo-300">\r
                                        {{ 'batchProcessing.totalCost' | transloco }}\r
                                    </p>\r
                                    <p class="text-lg font-bold leading-tight text-indigo-700 dark:text-indigo-200">\r
                                        {{ totalCreditsCost() | number: '1.2-2' }}\r
                                        <span class="text-xs font-medium">{{\r
                                            'batchProcessing.credits' | transloco\r
                                        }}</span>\r
                                    </p>\r
                                </div>\r
                            </div>\r
\r
                            <!-- Successful -->\r
                            <div\r
                                class="flex cursor-pointer items-center gap-3 rounded-lg bg-emerald-50 px-4 py-3 transition-all hover:shadow-md dark:bg-emerald-950/30"\r
                                [class.ring-2]="recordFilter() === 'completed'"\r
                                [class.ring-emerald-400]="recordFilter() === 'completed'"\r
                                (click)="setRecordFilter('completed')"\r
                            >\r
                                <div\r
                                    class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-950/40"\r
                                >\r
                                    <mat-icon class="!text-xl text-emerald-600 dark:text-emerald-300"\r
                                        >check_circle</mat-icon\r
                                    >\r
                                </div>\r
                                <div class="min-w-0">\r
                                    <p class="text-xs font-medium text-emerald-500 dark:text-emerald-300">\r
                                        {{ 'batchProcessing.successful' | transloco }}\r
                                    </p>\r
                                    <p class="text-lg font-bold leading-tight text-emerald-700 dark:text-emerald-200">\r
                                        {{ completedRows().length }}\r
                                        <span class="text-xs font-normal text-emerald-500 dark:text-emerald-400">{{\r
                                            'batchProcessing.requestsSuccessful' | transloco\r
                                        }}</span>\r
                                    </p>\r
                                </div>\r
                            </div>\r
\r
                            <!-- Partial -->\r
                            @if (partialRows().length > 0) {\r
                                <div\r
                                    class="flex cursor-pointer items-center gap-3 rounded-lg bg-amber-50 px-4 py-3 transition-all hover:shadow-md dark:bg-amber-950/30"\r
                                    [class.ring-2]="recordFilter() === 'partial'"\r
                                    [class.ring-amber-400]="recordFilter() === 'partial'"\r
                                    (click)="setRecordFilter('partial')"\r
                                >\r
                                    <div\r
                                        class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-100 dark:bg-amber-950/40"\r
                                    >\r
                                        <mat-icon class="!text-xl text-amber-600 dark:text-amber-300">warning</mat-icon>\r
                                    </div>\r
                                    <div class="min-w-0">\r
                                        <p class="text-xs font-medium text-amber-600 dark:text-amber-300">\r
                                            {{ 'batchProcessing.partial' | transloco }}\r
                                        </p>\r
                                        <p class="text-lg font-bold leading-tight text-amber-700 dark:text-amber-200">\r
                                            {{ partialRows().length }}\r
                                            <span class="text-xs font-normal text-amber-600 dark:text-amber-400">{{\r
                                                'batchProcessing.requestsPartial' | transloco\r
                                            }}</span>\r
                                        </p>\r
                                    </div>\r
                                </div>\r
                            }\r
\r
                            <!-- Failed (only when there are failures) -->\r
                            @if (failedRowsIgnoringSearch().length > 0) {\r
                                <div\r
                                    class="flex cursor-pointer items-center gap-3 rounded-lg bg-red-50 px-4 py-3 transition-all hover:shadow-md dark:bg-red-950/30"\r
                                    [class.ring-2]="recordFilter() === 'failed'"\r
                                    [class.ring-red-400]="recordFilter() === 'failed'"\r
                                    (click)="setRecordFilter('failed')"\r
                                >\r
                                    <div\r
                                        class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-red-100 dark:bg-red-950/40"\r
                                    >\r
                                        <mat-icon class="!text-xl text-red-600 dark:text-red-300">error</mat-icon>\r
                                    </div>\r
                                    <div class="min-w-0">\r
                                        <p class="text-xs font-medium text-red-500 dark:text-red-300">\r
                                            {{ 'batchProcessing.failed' | transloco }}\r
                                        </p>\r
                                        <p class="text-lg font-bold leading-tight text-red-700 dark:text-red-200">\r
                                            {{ failedRowsIgnoringSearch().length }}\r
                                            <span class="text-xs font-normal text-red-500 dark:text-red-400">{{\r
                                                'batchProcessing.requestsFailed' | transloco\r
                                            }}</span>\r
                                        </p>\r
                                    </div>\r
                                </div>\r
                            }\r
                        </div>\r
                    </div>\r
                }\r
            </div>\r
        </div>\r
    }\r
\r
    <!-- Main Content -->\r
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">\r
        @if (isLoading()) {\r
            <div class="flex items-center justify-center h-64">\r
                <mat-spinner diameter="48"></mat-spinner>\r
            </div>\r
        } @else {\r
            <!-- Records Table Card -->\r
            <div class="overflow-hidden rounded-xl border border-stone-200/90 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900/70">\r
                <div\r
                    class="mx-5 mt-5 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800 dark:border-amber-900/60 dark:bg-amber-950/30 dark:text-amber-200"\r
                >\r
                    <div class="flex gap-3">\r
                        <mat-icon class="!text-xl shrink-0 text-amber-600 dark:text-amber-400">info</mat-icon>\r
                        <div>\r
                            <p class="font-semibold">\r
                                {{ 'batchProcessing.continueOnFailureTitle' | transloco }}\r
                            </p>\r
                            <p class="mt-0.5 text-amber-700 dark:text-amber-300">\r
                                {{ 'batchProcessing.continueOnFailureBody' | transloco }}\r
                            </p>\r
                        </div>\r
                    </div>\r
                </div>\r
\r
                <!-- Table Header: Tabs + Search -->\r
                <div class="px-5 pt-4 pb-0 overflow-x-auto">\r
                    <div\r
                        class="flex min-w-0 flex-col gap-3 lg:flex-row lg:items-start lg:justify-between lg:gap-4"\r
                    >\r
                        <!-- Filter Tabs -->\r
                        <div\r
                            class="flex min-w-0 flex-wrap items-center gap-1 rounded-lg bg-stone-100 p-0.5 dark:bg-gray-800"\r
                        >\r
                            <button\r
                                class="rounded-md px-3 py-1.5 text-sm font-medium transition-all"\r
                                [ngClass]="\r
                                    recordFilter() === 'all'\r
                                        ? 'bg-white text-stone-950 shadow-sm dark:bg-gray-900 dark:text-white'\r
                                        : 'text-stone-500 hover:text-stone-700 dark:text-stone-400 dark:hover:text-stone-200'\r
                                "\r
                                (click)="setRecordFilter('all')"\r
                            >\r
                                {{ 'batchProcessing.all' | transloco }}\r
                                <span class="ml-1 text-xs text-stone-400 dark:text-stone-500">{{\r
                                    batch()?.totalRows || 0\r
                                }}</span>\r
                            </button>\r
                            @if (pendingRowsIgnoringSearch().length > 0) {\r
                                <button\r
                                    class="rounded-md px-3 py-1.5 text-sm font-medium transition-all"\r
                                    [ngClass]="\r
                                        recordFilter() === 'pending'\r
                                            ? 'bg-white text-stone-950 shadow-sm dark:bg-gray-900 dark:text-white'\r
                                            : 'text-stone-500 hover:text-stone-700 dark:text-stone-400 dark:hover:text-stone-200'\r
                                    "\r
                                    (click)="setRecordFilter('pending')"\r
                                >\r
                                    <span class="inline-flex items-center gap-1">\r
                                        <span class="h-1.5 w-1.5 rounded-full bg-blue-500"></span>\r
                                        {{ 'batchProcessing.pending' | transloco }}\r
                                        <span class="text-xs text-stone-400 dark:text-stone-500">{{\r
                                            pendingRowsIgnoringSearch().length\r
                                        }}</span>\r
                                    </span>\r
                                </button>\r
                            }\r
                            <button\r
                                class="rounded-md px-3 py-1.5 text-sm font-medium transition-all"\r
                                [ngClass]="\r
                                    recordFilter() === 'completed'\r
                                        ? 'bg-white text-stone-950 shadow-sm dark:bg-gray-900 dark:text-white'\r
                                        : 'text-stone-500 hover:text-stone-700 dark:text-stone-400 dark:hover:text-stone-200'\r
                                "\r
                                (click)="setRecordFilter('completed')"\r
                            >\r
                                <span class="inline-flex items-center gap-1">\r
                                    <span class="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>\r
                                    {{ 'batchProcessing.successful' | transloco }}\r
                                    <span class="text-xs text-stone-400 dark:text-stone-500">{{\r
                                        completedRows().length\r
                                    }}</span>\r
                                </span>\r
                            </button>\r
                            @if (partialRows().length > 0) {\r
                                <button\r
                                    class="rounded-md px-3 py-1.5 text-sm font-medium transition-all"\r
                                    [ngClass]="\r
                                        recordFilter() === 'partial'\r
                                            ? 'bg-white text-stone-950 shadow-sm dark:bg-gray-900 dark:text-white'\r
                                            : 'text-stone-500 hover:text-stone-700 dark:text-stone-400 dark:hover:text-stone-200'\r
                                    "\r
                                    (click)="setRecordFilter('partial')"\r
                                >\r
                                    <span class="inline-flex items-center gap-1">\r
                                        <span class="h-1.5 w-1.5 rounded-full bg-amber-500"></span>\r
                                        {{ 'batchProcessing.partial' | transloco }}\r
                                        <span class="text-xs text-stone-400 dark:text-stone-500">{{\r
                                            partialRows().length\r
                                        }}</span>\r
                                    </span>\r
                                </button>\r
                            }\r
                            @if (failedRowsIgnoringSearch().length > 0) {\r
                                <button\r
                                    class="rounded-md px-3 py-1.5 text-sm font-medium transition-all"\r
                                    [ngClass]="\r
                                        recordFilter() === 'failed'\r
                                            ? 'bg-white text-stone-950 shadow-sm dark:bg-gray-900 dark:text-white'\r
                                            : 'text-stone-500 hover:text-stone-700 dark:text-stone-400 dark:hover:text-stone-200'\r
                                    "\r
                                    (click)="setRecordFilter('failed')"\r
                                >\r
                                    <span class="inline-flex items-center gap-1">\r
                                        <span class="h-1.5 w-1.5 rounded-full bg-red-500"></span>\r
                                        {{ 'batchProcessing.failed' | transloco }}\r
                                        <span class="text-xs text-stone-400 dark:text-stone-500">{{\r
                                            failedRowsIgnoringSearch().length\r
                                        }}</span>\r
                                    </span>\r
                                </button>\r
                            }\r
                        </div>\r
\r
                        <div\r
                            class="flex min-w-0 w-full shrink-0 flex-col gap-2 lg:max-w-[min(100%,42rem)] lg:items-end"\r
                        >\r
                            <div\r
                                class="flex w-full min-w-0 flex-wrap items-center justify-end gap-2"\r
                            >\r
                                @if (failedRowsIgnoringSearch().length > 0) {\r
                                    <button\r
                                        mat-stroked-button\r
                                        type="button"\r
                                        color="warn"\r
                                        class="!rounded-xl !border-2 !border-red-400 !text-red-800"\r
                                        [disabled]="!canOperateRetryFailed()"\r
                                        [matTooltip]="'batchProcessing.retryAllFailedTooltip' | transloco"\r
                                        (click)="retryAllFailedRows()"\r
                                    >\r
                                        <mat-icon class="!h-5 !w-5 text-red-600">replay</mat-icon>\r
                                        <span class="ml-1 whitespace-nowrap">{{\r
                                            'batchProcessing.retryAllFailed'\r
                                                | transloco\r
                                                    : { count: failedRowsIgnoringSearch().length }\r
                                        }}</span>\r
                                    </button>\r
                                }\r
                                @if (canDownloadInputs()) {\r
                                    @let exportUi = inputsExportButtonUi();\r
                                    <button\r
                                        mat-stroked-button\r
                                        type="button"\r
                                        [matMenuTriggerFor]="inputsExportMenu"\r
                                        class="!rounded-xl !border-2"\r
                                        [ngClass]="exportUi.accentClass"\r
                                        [matTooltip]="exportUi.tooltipKey | transloco"\r
                                    >\r
                                        <span class="inline-flex max-w-[min(100vw-4rem,22rem)] items-center gap-1.5">\r
                                            <span\r
                                                class="h-1.5 w-1.5 shrink-0 rounded-full"\r
                                                [ngClass]="exportUi.dotClass"\r
                                                aria-hidden="true"\r
                                            ></span>\r
                                            <mat-icon\r
                                                class="!h-5 !w-5 shrink-0"\r
                                                [ngClass]="exportUi.iconClass"\r
                                                >download</mat-icon\r
                                            >\r
                                            <span class="truncate">{{ exportUi.labelKey | transloco }}</span>\r
                                            <mat-icon class="!h-5 !w-5 shrink-0 opacity-70"\r
                                                >arrow_drop_down</mat-icon\r
                                            >\r
                                        </span>\r
                                    </button>\r
                                    <mat-menu #inputsExportMenu="matMenu">\r
                                        <button\r
                                            mat-menu-item\r
                                            type="button"\r
                                            (click)="downloadInputsExport('xlsx')"\r
                                        >\r
                                            <mat-icon class="align-middle">table_chart</mat-icon>\r
                                            <span>{{\r
                                                'batchProcessing.exportAsExcel' | transloco\r
                                            }}</span>\r
                                        </button>\r
                                        <button\r
                                            mat-menu-item\r
                                            type="button"\r
                                            (click)="downloadInputsExport('csv')"\r
                                        >\r
                                            <mat-icon class="align-middle">description</mat-icon>\r
                                            <span>{{\r
                                                'batchProcessing.exportAsCsv' | transloco\r
                                            }}</span>\r
                                        </button>\r
                                        <button\r
                                            mat-menu-item\r
                                            type="button"\r
                                            (click)="downloadInputsExport('json')"\r
                                        >\r
                                            <mat-icon class="align-middle">data_object</mat-icon>\r
                                            <span>{{\r
                                                'batchProcessing.exportAsJson' | transloco\r
                                            }}</span>\r
                                        </button>\r
                                    </mat-menu>\r
                                }\r
                            </div>\r
\r
                            <!-- Search: full width in column so it is never clipped -->\r
                            <div class="relative w-full min-h-9 min-w-[12rem]">\r
                                <mat-icon\r
                                    class="pointer-events-none absolute left-2.5 top-1/2 z-[1] -translate-y-1/2 !text-lg text-stone-400 dark:text-stone-500"\r
                                    >search</mat-icon\r
                                >\r
                                <input\r
                                    class="box-border h-9 w-full min-w-0 rounded-lg border border-stone-200 bg-stone-50 pl-9 pr-8 text-sm outline-none transition-all placeholder:text-stone-400 focus:border-indigo-400 focus:bg-white focus:ring-1 focus:ring-indigo-400 dark:border-gray-700 dark:bg-gray-950 dark:text-white dark:placeholder:text-stone-500 dark:focus:border-indigo-500 dark:focus:bg-gray-950 dark:focus:ring-indigo-500"\r
                                    [ngModel]="searchQuery()"\r
                                    (ngModelChange)="updateSearchQuery($event)"\r
                                    [placeholder]="'smartReport.searchRecords' | transloco"\r
                                />\r
                                @if (searchQuery()) {\r
                                    <button\r
                                        type="button"\r
                                        class="absolute right-2 top-1/2 z-[1] -translate-y-1/2 text-stone-400 hover:text-stone-600 dark:text-stone-500 dark:hover:text-stone-300"\r
                                        (click)="updateSearchQuery('')"\r
                                    >\r
                                        <mat-icon class="!text-base !w-4 !h-4">close</mat-icon>\r
                                    </button>\r
                                }\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>\r
\r
                <!-- Table Column Headers -->\r
                <div\r
                    class="mt-2 grid grid-cols-[1fr_auto] items-center border-b border-stone-100 px-5 py-2.5 dark:border-gray-800"\r
                >\r
                    <span class="text-xs font-medium uppercase tracking-wider text-stone-400 dark:text-stone-500">{{\r
                        'batchProcessing.records' | transloco\r
                    }}</span>\r
                    <span class="text-xs font-medium uppercase tracking-wider text-stone-400 dark:text-stone-500">{{\r
                        'batchProcessing.status' | transloco\r
                    }}</span>\r
                </div>\r
\r
                <ng-template #attemptBadge let-row>\r
                    @if (row.attemptCount) {\r
                        <span\r
                            class="inline-flex items-center rounded-full bg-indigo-50 px-2 py-0.5 text-[11px] font-medium text-indigo-700 dark:bg-indigo-950/40 dark:text-indigo-300"\r
                        >\r
                            {{ 'batchProcessing.attempts' | transloco: { count: row.attemptCount } }}\r
                        </span>\r
                    }\r
                </ng-template>\r
\r
                <!-- Table Body -->\r
                @if (virtualTableItems().length > 0) {\r
                    <cdk-virtual-scroll-viewport itemSize="72" class="block h-[560px]">\r
                        <ng-container\r
                            *cdkVirtualFor="\r
                                let item of virtualTableItems();\r
                                trackBy: trackByVirtualRow\r
                            "\r
                        >\r
                            @switch (item.kind) {\r
                                @case ('pending') {\r
                                    <div\r
                                        class="group grid h-[72px] cursor-pointer grid-cols-[1fr_auto] items-center border-b border-stone-100 px-5 py-3 transition-colors hover:bg-stone-50 dark:border-gray-800 dark:hover:bg-gray-800/50"\r
                                        (click)="selectRow(item.row)"\r
                                        [ngClass]="{\r
                                            'bg-indigo-50 dark:bg-indigo-950/30':\r
                                                selectedRow()?.rowIndex === item.row.rowIndex,\r
                                        }"\r
                                    >\r
                                        <div class="flex min-w-0 items-center gap-3">\r
                                            <span\r
                                                class="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-stone-100 font-mono text-xs text-stone-500 dark:bg-gray-800 dark:text-stone-400"\r
                                            >\r
                                                {{ item.row.rowIndex + 1 }}\r
                                            </span>\r
                                            <div class="min-w-0">\r
                                                <p\r
                                                    class="truncate text-sm font-medium text-stone-950 dark:text-white"\r
                                                >\r
                                                    {{\r
                                                        item.row.inputData?.documentNumber ||\r
                                                            item.row.inputData?.name ||\r
                                                            ('batchProcessing.rowNumber'\r
                                                                | transloco\r
                                                                    : {\r
                                                                          index:\r
                                                                              item.row.rowIndex +\r
                                                                              1,\r
                                                                      })\r
                                                    }}\r
                                                </p>\r
                                            </div>\r
                                        </div>\r
                                        <div class="flex items-center gap-1.5">\r
                                            <span\r
                                                class="inline-flex items-center gap-1 rounded-full bg-stone-100 px-2 py-0.5 text-xs font-medium text-stone-600 dark:bg-gray-800 dark:text-stone-300"\r
                                            >\r
                                                <span\r
                                                    class="h-1.5 w-1.5 animate-pulse rounded-full bg-stone-400 dark:bg-stone-500"\r
                                                ></span>\r
                                                {{ 'batchProcessing.' + item.row.status | transloco }}\r
                                            </span>\r
                                            <ng-container\r
                                                *ngTemplateOutlet="attemptBadge; context: { $implicit: item.row }"\r
                                            />\r
                                        </div>\r
                                    </div>\r
                                }\r
                                @case ('completed') {\r
                                    <div\r
                                        class="group grid h-[72px] cursor-pointer grid-cols-[1fr_auto] items-center border-b border-stone-100 px-5 py-3 transition-colors hover:bg-stone-50 dark:border-gray-800 dark:hover:bg-gray-800/50"\r
                                        (click)="selectRow(item.row)"\r
                                        [ngClass]="{\r
                                            'bg-indigo-50 dark:bg-indigo-950/30':\r
                                                selectedRow()?.rowIndex === item.row.rowIndex,\r
                                        }"\r
                                    >\r
                                        <div class="flex min-w-0 items-center gap-3">\r
                                            <span\r
                                                class="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-emerald-50 font-mono text-xs text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-300"\r
                                            >\r
                                                {{ item.row.rowIndex + 1 }}\r
                                            </span>\r
                                            <div class="min-w-0">\r
                                                <p\r
                                                    class="truncate text-sm font-medium text-stone-950 dark:text-white"\r
                                                >\r
                                                    {{\r
                                                        item.row.inputData?.documentNumber ||\r
                                                            item.row.inputData?.name ||\r
                                                            ('batchProcessing.rowNumber'\r
                                                                | transloco\r
                                                                    : {\r
                                                                          index:\r
                                                                              item.row.rowIndex +\r
                                                                              1,\r
                                                                      })\r
                                                    }}\r
                                                </p>\r
                                            </div>\r
                                        </div>\r
                                        <div class="flex items-center gap-2">\r
                                            <!-- Step dots -->\r
                                            <div class="mr-1 hidden items-center gap-0.5 sm:flex">\r
                                                @for (step of configSteps(); track step.sequence) {\r
                                                    <div\r
                                                        class="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-950/40"\r
                                                        [matTooltip]="getStepName(step)"\r
                                                    >\r
                                                        <mat-icon\r
                                                            class="text-emerald-600 !h-2.5 !w-2.5 !text-[10px] dark:text-emerald-300"\r
                                                            >check</mat-icon\r
                                                        >\r
                                                    </div>\r
                                                }\r
                                            </div>\r
                                            <span\r
                                                class="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300"\r
                                            >\r
                                                <span\r
                                                    class="h-1.5 w-1.5 rounded-full bg-emerald-500"\r
                                                ></span>\r
                                                {{ 'batchProcessing.verified' | transloco }}\r
                                            </span>\r
                                            <ng-container\r
                                                *ngTemplateOutlet="attemptBadge; context: { $implicit: item.row }"\r
                                            />\r
                                            <mat-icon\r
                                                class="!text-base text-stone-300 opacity-0 transition-opacity group-hover:opacity-100 dark:text-stone-600"\r
                                                >chevron_right</mat-icon\r
                                            >\r
                                        </div>\r
                                    </div>\r
                                }\r
                                @case ('partial') {\r
                                    <div\r
                                        class="group grid h-[72px] cursor-pointer grid-cols-[1fr_auto] items-center border-b border-stone-100 px-5 py-3 transition-colors hover:bg-stone-50 dark:border-gray-800 dark:hover:bg-gray-800/50"\r
                                        (click)="selectRow(item.row)"\r
                                        [ngClass]="{\r
                                            'bg-amber-50 dark:bg-amber-950/30':\r
                                                selectedRow()?.rowIndex === item.row.rowIndex,\r
                                        }"\r
                                    >\r
                                        <div class="flex min-w-0 items-center gap-3">\r
                                            <span\r
                                                class="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-amber-50 font-mono text-xs text-amber-600 dark:bg-amber-950/40 dark:text-amber-300"\r
                                            >\r
                                                {{ item.row.rowIndex + 1 }}\r
                                            </span>\r
                                            <div class="min-w-0">\r
                                                <p\r
                                                    class="truncate text-sm font-medium text-stone-950 dark:text-white"\r
                                                >\r
                                                    {{\r
                                                        item.row.inputData?.documentNumber ||\r
                                                            item.row.inputData?.name ||\r
                                                            ('batchProcessing.rowNumber'\r
                                                                | transloco\r
                                                                    : {\r
                                                                          index:\r
                                                                              item.row.rowIndex +\r
                                                                              1,\r
                                                                      })\r
                                                    }}\r
                                                </p>\r
                                                <p class="truncate text-xs text-stone-400 dark:text-stone-500">\r
                                                    {{\r
                                                        item.row.errors?.[0]?.message ||\r
                                                            ('batchProcessing.partial' | transloco)\r
                                                    }}\r
                                                </p>\r
                                            </div>\r
                                        </div>\r
                                        <div class="flex items-center gap-2">\r
                                            <div class="mr-1 hidden items-center gap-0.5 sm:flex">\r
                                                @for (step of configSteps(); track step.sequence) {\r
                                                    @switch (\r
                                                        getRowStepStatus(item.row, step.sequence)\r
                                                    ) {\r
                                                        @case ('completed') {\r
                                                            <div\r
                                                                class="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-950/40"\r
                                                                [matTooltip]="\r
                                                                    'batchProcessing.stepStatusCompleted'\r
                                                                        | transloco\r
                                                                            : {\r
                                                                                  step: getStepName(\r
                                                                                      step\r
                                                                                  ),\r
                                                                              }\r
                                                                "\r
                                                            >\r
                                                                <mat-icon\r
                                                                    class="text-emerald-600 !h-2.5 !w-2.5 !text-[10px] dark:text-emerald-300"\r
                                                                    >check</mat-icon\r
                                                                >\r
                                                            </div>\r
                                                        }\r
                                                        @case ('failed') {\r
                                                            <div\r
                                                                class="flex h-4 w-4 items-center justify-center rounded-full bg-red-100 dark:bg-red-950/40"\r
                                                                [matTooltip]="\r
                                                                    'batchProcessing.stepStatusFailed'\r
                                                                        | transloco\r
                                                                            : {\r
                                                                                  step: getStepName(\r
                                                                                      step\r
                                                                                  ),\r
                                                                              }\r
                                                                "\r
                                                            >\r
                                                                <mat-icon\r
                                                                    class="text-red-600 !h-2.5 !w-2.5 !text-[10px] dark:text-red-300"\r
                                                                    >close</mat-icon\r
                                                                >\r
                                                            </div>\r
                                                        }\r
                                                        @default {\r
                                                            <div\r
                                                                class="flex h-4 w-4 items-center justify-center rounded-full bg-stone-100 dark:bg-gray-800"\r
                                                                [matTooltip]="\r
                                                                    'batchProcessing.stepStatusSkipped'\r
                                                                        | transloco\r
                                                                            : {\r
                                                                                  step: getStepName(\r
                                                                                      step\r
                                                                                  ),\r
                                                                              }\r
                                                                "\r
                                                            >\r
                                                                <mat-icon\r
                                                                    class="text-stone-400 !h-2.5 !w-2.5 !text-[10px] dark:text-stone-500"\r
                                                                    >remove</mat-icon\r
                                                                >\r
                                                            </div>\r
                                                        }\r
                                                    }\r
                                                }\r
                                            </div>\r
                                            <span\r
                                                class="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2 py-0.5 text-xs font-medium text-amber-700 dark:bg-amber-950/40 dark:text-amber-300"\r
                                            >\r
                                                <span\r
                                                    class="h-1.5 w-1.5 rounded-full bg-amber-500"\r
                                                ></span>\r
                                                {{ 'batchProcessing.partial' | transloco }}\r
                                            </span>\r
                                            <ng-container\r
                                                *ngTemplateOutlet="attemptBadge; context: { $implicit: item.row }"\r
                                            />\r
                                            <mat-icon\r
                                                class="!text-base text-stone-300 opacity-0 transition-opacity group-hover:opacity-100 dark:text-stone-600"\r
                                                >chevron_right</mat-icon\r
                                            >\r
                                        </div>\r
                                    </div>\r
                                }\r
                                @case ('failed') {\r
                                    <div\r
                                        class="group grid h-[72px] cursor-pointer grid-cols-[1fr_auto] items-center border-b border-stone-100 px-5 py-3 transition-colors hover:bg-stone-50 dark:border-gray-800 dark:hover:bg-gray-800/50"\r
                                        (click)="selectRow(item.row)"\r
                                        [ngClass]="{\r
                                            'bg-red-50 dark:bg-red-950/30':\r
                                                selectedRow()?.rowIndex === item.row.rowIndex,\r
                                        }"\r
                                    >\r
                                        <div class="flex min-w-0 items-center gap-3">\r
                                            <span\r
                                                class="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-red-50 font-mono text-xs text-red-600 dark:bg-red-950/40 dark:text-red-300"\r
                                            >\r
                                                {{ item.row.rowIndex + 1 }}\r
                                            </span>\r
                                            <div class="min-w-0">\r
                                                <p\r
                                                    class="truncate text-sm font-medium text-stone-950 dark:text-white"\r
                                                >\r
                                                    {{\r
                                                        item.row.inputData?.documentNumber ||\r
                                                            item.row.inputData?.name ||\r
                                                            ('batchProcessing.rowNumber'\r
                                                                | transloco\r
                                                                    : {\r
                                                                          index:\r
                                                                              item.row.rowIndex +\r
                                                                              1,\r
                                                                      })\r
                                                    }}\r
                                                </p>\r
                                                <p class="truncate text-xs text-stone-400 dark:text-stone-500">\r
                                                    {{\r
                                                        item.row.errors?.[0]?.message ||\r
                                                            ('batchProcessing.failed' | transloco)\r
                                                    }}\r
                                                </p>\r
                                            </div>\r
                                        </div>\r
                                        <div class="flex items-center gap-2">\r
                                            <button\r
                                                mat-icon-button\r
                                                type="button"\r
                                                class="!w-8 !h-8 shrink-0 text-red-600"\r
                                                [disabled]="!canOperateRetryFailed() || isRetryingRow(item.row)"\r
                                                [matTooltip]="'batchProcessing.retryThisFailedRow' | transloco"\r
                                                (click)="retrySingleFailedRow(item.row, $event)"\r
                                            >\r
                                                @if (isRetryingRow(item.row)) {\r
                                                    <mat-spinner diameter="20"></mat-spinner>\r
                                                } @else {\r
                                                    <mat-icon>replay</mat-icon>\r
                                                }\r
                                            </button>\r
                                            <!-- Step dots -->\r
                                            <div class="mr-1 hidden items-center gap-0.5 sm:flex">\r
                                                @for (step of configSteps(); track step.sequence) {\r
                                                    @switch (\r
                                                        getRowStepStatus(item.row, step.sequence)\r
                                                    ) {\r
                                                        @case ('completed') {\r
                                                            <div\r
                                                                class="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-950/40"\r
                                                                [matTooltip]="\r
                                                                    'batchProcessing.stepStatusCompleted'\r
                                                                        | transloco\r
                                                                            : {\r
                                                                                  step: getStepName(\r
                                                                                      step\r
                                                                                  ),\r
                                                                              }\r
                                                                "\r
                                                            >\r
                                                                <mat-icon\r
                                                                    class="text-emerald-600 !h-2.5 !w-2.5 !text-[10px] dark:text-emerald-300"\r
                                                                    >check</mat-icon\r
                                                                >\r
                                                            </div>\r
                                                        }\r
                                                        @case ('failed') {\r
                                                            <div\r
                                                                class="flex h-4 w-4 items-center justify-center rounded-full bg-red-100 dark:bg-red-950/40"\r
                                                                [matTooltip]="\r
                                                                    'batchProcessing.stepStatusFailed'\r
                                                                        | transloco\r
                                                                            : {\r
                                                                                  step: getStepName(\r
                                                                                      step\r
                                                                                  ),\r
                                                                              }\r
                                                                "\r
                                                            >\r
                                                                <mat-icon\r
                                                                    class="text-red-600 !h-2.5 !w-2.5 !text-[10px] dark:text-red-300"\r
                                                                    >close</mat-icon\r
                                                                >\r
                                                            </div>\r
                                                        }\r
                                                        @default {\r
                                                            <div\r
                                                                class="flex h-4 w-4 items-center justify-center rounded-full bg-stone-100 dark:bg-gray-800"\r
                                                                [matTooltip]="\r
                                                                    'batchProcessing.stepStatusSkipped'\r
                                                                        | transloco\r
                                                                            : {\r
                                                                                  step: getStepName(\r
                                                                                      step\r
                                                                                  ),\r
                                                                              }\r
                                                                "\r
                                                            >\r
                                                                <mat-icon\r
                                                                    class="text-stone-400 !h-2.5 !w-2.5 !text-[10px] dark:text-stone-500"\r
                                                                    >remove</mat-icon\r
                                                                >\r
                                                            </div>\r
                                                        }\r
                                                    }\r
                                                }\r
                                            </div>\r
                                            <span\r
                                                class="inline-flex items-center gap-1 rounded-full bg-red-50 px-2 py-0.5 text-xs font-medium text-red-700 dark:bg-red-950/40 dark:text-red-300"\r
                                            >\r
                                                <span\r
                                                    class="h-1.5 w-1.5 rounded-full bg-red-500"\r
                                                ></span>\r
                                                {{ 'batchProcessing.failed' | transloco }}\r
                                            </span>\r
                                            <ng-container\r
                                                *ngTemplateOutlet="attemptBadge; context: { $implicit: item.row }"\r
                                            />\r
                                            <mat-icon\r
                                                class="!text-base text-stone-300 opacity-0 transition-opacity group-hover:opacity-100 dark:text-stone-600"\r
                                                >chevron_right</mat-icon\r
                                            >\r
                                        </div>\r
                                    </div>\r
                                }\r
                            }\r
                        </ng-container>\r
                    </cdk-virtual-scroll-viewport>\r
                } @else {\r
                    <!-- Empty State -->\r
                    <div class="py-16 text-center">\r
                        <mat-icon class="!mb-3 !h-12 !w-12 !text-5xl text-stone-300 dark:text-stone-600">{{\r
                            searchQuery() ? 'search_off' : 'hourglass_empty'\r
                        }}</mat-icon>\r
                        <p class="text-sm text-stone-400 dark:text-stone-500">\r
                            @if (searchQuery()) {\r
                                {{ 'batchProcessing.noResultsFound' | transloco }}\r
                            } @else {\r
                                {{ 'batchProcessing.noCompletedRecordsYet' | transloco }}\r
                            }\r
                        </p>\r
                    </div>\r
                }\r
            </div>\r
\r
            <!-- Row Detail Panel -->\r
            @if (selectedRow()) {\r
                <div #rowDetailPanel class="mt-6 rounded-2xl border border-stone-200/90 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900/70">\r
                    @if (isLoadingDetail()) {\r
                        <!-- Skeleton loading state -->\r
                        <div class="animate-pulse space-y-4">\r
                            <div class="flex items-center justify-between">\r
                                <div class="h-5 w-40 rounded bg-stone-200 dark:bg-gray-800"></div>\r
                                <div class="h-8 w-48 rounded bg-stone-200 dark:bg-gray-800"></div>\r
                            </div>\r
                            <div class="space-y-3 pt-2">\r
                                <div class="h-4 w-24 rounded bg-stone-100 dark:bg-gray-800"></div>\r
                                <div class="space-y-2 rounded-lg border border-stone-100 p-4 dark:border-gray-800">\r
                                    <div class="h-3 w-full rounded bg-stone-100 dark:bg-gray-700"></div>\r
                                    <div class="h-3 w-3/4 rounded bg-stone-100 dark:bg-gray-700"></div>\r
                                    <div class="h-3 w-1/2 rounded bg-stone-100 dark:bg-gray-700"></div>\r
                                </div>\r
                            </div>\r
                        </div>\r
                    } @else {\r
                        <div class="mb-4 flex items-center justify-between">\r
                            <h3 class="font-semibold text-stone-950 dark:text-white">\r
                                {{\r
                                    'batchProcessing.rowDetails'\r
                                        | transloco: { index: (selectedRow()?.rowIndex ?? 0) + 1 }\r
                                }}\r
                            </h3>\r
                            <div class="flex items-center gap-3">\r
                                <div\r
                                    class="inline-flex rounded-full bg-stone-100 p-0.5 dark:bg-gray-800"\r
                                    role="group"\r
                                    [attr.aria-label]="'batchProcessing.readable' | transloco"\r
                                >\r
                                    <button\r
                                        type="button"\r
                                        class="rounded-full px-3 py-1 text-xs font-semibold transition"\r
                                        [class.bg-white]="detailsViewMode() === 'readable'"\r
                                        [class.text-stone-900]="detailsViewMode() === 'readable'"\r
                                        [class.shadow-sm]="detailsViewMode() === 'readable'"\r
                                        [class.text-stone-500]="detailsViewMode() !== 'readable'"\r
                                        [class.dark:bg-gray-950]="detailsViewMode() === 'readable'"\r
                                        [class.dark:text-white]="detailsViewMode() === 'readable'"\r
                                        [class.dark:text-stone-400]="detailsViewMode() !== 'readable'"\r
                                        (click)="detailsViewMode.set('readable')"\r
                                    >\r
                                        {{ 'batchProcessing.readable' | transloco }}\r
                                    </button>\r
                                    <button\r
                                        type="button"\r
                                        class="rounded-full px-3 py-1 text-xs font-semibold transition"\r
                                        [class.bg-white]="detailsViewMode() === 'json'"\r
                                        [class.text-stone-900]="detailsViewMode() === 'json'"\r
                                        [class.shadow-sm]="detailsViewMode() === 'json'"\r
                                        [class.text-stone-500]="detailsViewMode() !== 'json'"\r
                                        [class.dark:bg-gray-950]="detailsViewMode() === 'json'"\r
                                        [class.dark:text-white]="detailsViewMode() === 'json'"\r
                                        [class.dark:text-stone-400]="detailsViewMode() !== 'json'"\r
                                        (click)="detailsViewMode.set('json')"\r
                                    >\r
                                        {{ 'batchProcessing.json' | transloco }}\r
                                    </button>\r
                                </div>\r
                                @if (\r
                                    selectedRow() &&\r
                                    hasPendingSteps(selectedRow()!) &&\r
                                    canOperateRetryFailed()\r
                                ) {\r
                                    <button\r
                                        mat-stroked-button\r
                                        class="!rounded-lg !border-indigo-300 !text-indigo-700"\r
                                        (click)="retrySingleFailedRow(selectedRow()!)"\r
                                        [disabled]="isRetryingRow(selectedRow()!)"\r
                                        [matTooltip]="\r
                                            'batchProcessing.continuePendingStepsHint'\r
                                                | transloco\r
                                                    : {\r
                                                          count: getPendingStepCount(selectedRow()!),\r
                                                      }\r
                                        "\r
                                    >\r
                                        <span class="inline-flex items-center gap-2">\r
                                            @if (isRetryingRow(selectedRow()!)) {\r
                                                <mat-icon class="animate-spin icon-size-4"\r
                                                    >refresh</mat-icon\r
                                                >\r
                                                {{ 'batchProcessing.continuing' | transloco }}\r
                                            } @else {\r
                                                <mat-icon class="icon-size-4">play_arrow</mat-icon>\r
                                                {{\r
                                                    'batchProcessing.continuePendingSteps'\r
                                                        | transloco\r
                                                            : {\r
                                                                  count: getPendingStepCount(\r
                                                                      selectedRow()!\r
                                                                  ),\r
                                                              }\r
                                                }}\r
                                            }\r
                                        </span>\r
                                    </button>\r
                                }\r
                                @if (selectedRow()?.status === 'completed') {\r
                                    <button\r
                                        mat-flat-button\r
                                        color="primary"\r
                                        (click)="generateRowReport(selectedRow()!)"\r
                                        class="!rounded-lg"\r
                                    >\r
                                        <mat-icon class="mr-2 icon-size-4">picture_as_pdf</mat-icon>\r
                                        {{ 'batchProcessing.generatePdfReport' | transloco }}\r
                                    </button>\r
                                }\r
                                <button mat-icon-button (click)="selectedRow.set(null)">\r
                                    <mat-icon>close</mat-icon>\r
                                </button>\r
                            </div>\r
                        </div>\r
\r
                        <!-- Input Data (first) -->\r
                        <div class="mb-6">\r
                            <h4 class="mb-3 text-sm font-medium text-stone-500 dark:text-stone-400">\r
                                {{ 'batchProcessing.inputData' | transloco }}\r
                            </h4>\r
                            <div class="overflow-hidden rounded-lg border border-stone-200 bg-white dark:border-gray-800 dark:bg-gray-950/50">\r
                                @if (detailsViewMode() === 'readable') {\r
                                    <div class="px-4 py-3">\r
                                        @if (canEditRuesCategory()) {\r
                                            <div\r
                                                class="mb-2 flex flex-col gap-2 rounded-xl border border-stone-200/80 bg-stone-50/70 px-3 py-2.5 text-sm dark:border-gray-800 dark:bg-gray-950/50 sm:flex-row sm:items-center"\r
                                            >\r
                                                @if (!ruesCategoryEditing()) {\r
                                                    <div class="min-w-0 flex-1">\r
                                                        <div class="flex items-center gap-1.5">\r
                                                            <p\r
                                                                class="text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-400 dark:text-stone-500"\r
                                                            >\r
                                                                {{\r
                                                                    'batchProcessing.ruesCategory'\r
                                                                        | transloco\r
                                                                }}\r
                                                            </p>\r
                                                            <mat-icon\r
                                                                class="!h-4 !w-4 !text-sm text-stone-400"\r
                                                                [matTooltip]="\r
                                                                    'batchProcessing.ruesCategoryHint'\r
                                                                        | transloco\r
                                                                "\r
                                                                >info_outline</mat-icon\r
                                                            >\r
                                                        </div>\r
                                                        <p\r
                                                            class="mt-0.5 font-medium text-stone-950 dark:text-stone-100"\r
                                                        >\r
                                                            @if (getSelectedRuesCategoryValue()) {\r
                                                                {{ getSelectedRuesCategoryValue() }}\r
                                                            } @else {\r
                                                                <span class="font-normal text-stone-400 dark:text-stone-500">{{\r
                                                                    'batchProcessing.ruesCategoryNone'\r
                                                                        | transloco\r
                                                                }}</span>\r
                                                            }\r
                                                        </p>\r
                                                    </div>\r
                                                    <div\r
                                                        class="flex shrink-0 items-center gap-1.5 sm:justify-end"\r
                                                    >\r
                                                        <button\r
                                                            mat-icon-button\r
                                                            type="button"\r
                                                            class="!h-9 !w-9"\r
                                                            [matTooltip]="\r
                                                                'batchProcessing.ruesCategoryEdit'\r
                                                                    | transloco\r
                                                            "\r
                                                            [attr.aria-label]="\r
                                                                'batchProcessing.ruesCategoryEdit'\r
                                                                    | transloco\r
                                                            "\r
                                                            (click)="beginRuesCategoryEdit()"\r
                                                            [disabled]="savingRuesCategory()"\r
                                                        >\r
                                                            <mat-icon class="!text-lg">edit</mat-icon>\r
                                                        </button>\r
                                                        @if (canOperateRetryFailed()) {\r
                                                            <button\r
                                                                mat-flat-button\r
                                                                color="primary"\r
                                                                type="button"\r
                                                                class="!h-9 !min-h-9 rounded-xl px-4"\r
                                                                (click)="\r
                                                                    retrySingleFailedRow(selectedRow()!)\r
                                                                "\r
                                                                [disabled]="\r
                                                                    savingRuesCategory() ||\r
                                                                    isRetryingRow(selectedRow()!)\r
                                                                "\r
                                                            >\r
                                                                <span\r
                                                                    class="inline-flex items-center gap-1.5"\r
                                                                >\r
                                                                    @if (isRetryingRow(selectedRow()!)) {\r
                                                                        <mat-icon\r
                                                                            class="animate-spin !text-base"\r
                                                                            >refresh</mat-icon\r
                                                                        >\r
                                                                        {{\r
                                                                            'batchProcessing.retrying'\r
                                                                                | transloco\r
                                                                        }}\r
                                                                    } @else {\r
                                                                        <mat-icon class="!text-base"\r
                                                                            >restart_alt</mat-icon\r
                                                                        >\r
                                                                        {{\r
                                                                            'batchProcessing.retryRow'\r
                                                                                | transloco\r
                                                                        }}\r
                                                                    }\r
                                                                </span>\r
                                                            </button>\r
                                                        }\r
                                                    </div>\r
                                                } @else {\r
                                                    <div\r
                                                        class="flex min-w-0 flex-1 flex-col gap-2 sm:flex-row sm:items-center"\r
                                                    >\r
                                                        <label class="min-w-0 flex-1">\r
                                                            <span\r
                                                                class="mb-1 block text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-400 dark:text-stone-500"\r
                                                                >{{\r
                                                                    'batchProcessing.ruesCategory'\r
                                                                        | transloco\r
                                                                }}</span\r
                                                            >\r
                                                            <select\r
                                                                class="h-9 w-full rounded-lg border border-stone-200 bg-white px-3 text-sm font-medium text-stone-900 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 disabled:opacity-60 dark:border-gray-700 dark:bg-gray-950 dark:text-white dark:focus:border-indigo-500 dark:focus:ring-indigo-900"\r
                                                                [ngModel]="ruesCategoryDraft()"\r
                                                                (ngModelChange)="\r
                                                                    ruesCategoryDraft.set($event)\r
                                                                "\r
                                                                [disabled]="savingRuesCategory()"\r
                                                            >\r
                                                                <option value="">\r
                                                                    {{\r
                                                                        'batchProcessing.ruesCategoryNone'\r
                                                                            | transloco\r
                                                                    }}\r
                                                                </option>\r
                                                                @for (\r
                                                                    opt of ruesCategorySelectOptionsResolved();\r
                                                                    track opt\r
                                                                ) {\r
                                                                    <option [value]="opt">\r
                                                                        {{ opt }}\r
                                                                    </option>\r
                                                                }\r
                                                            </select>\r
                                                        </label>\r
                                                        <div class="flex shrink-0 items-center gap-2">\r
                                                            <button\r
                                                                mat-button\r
                                                                type="button"\r
                                                                class="!h-9 !min-h-9 rounded-xl px-3"\r
                                                                (click)="cancelRuesCategoryEdit()"\r
                                                                [disabled]="savingRuesCategory()"\r
                                                            >\r
                                                                {{\r
                                                                    'batchProcessing.ruesCategoryCancel'\r
                                                                        | transloco\r
                                                                }}\r
                                                            </button>\r
                                                            <button\r
                                                                mat-flat-button\r
                                                                color="primary"\r
                                                                type="button"\r
                                                                class="!h-9 !min-h-9 rounded-xl px-4"\r
                                                                (click)="applyRuesCategoryEdit()"\r
                                                                [disabled]="savingRuesCategory()"\r
                                                            >\r
                                                                {{\r
                                                                    'batchProcessing.ruesCategoryApply'\r
                                                                        | transloco\r
                                                                }}\r
                                                            </button>\r
                                                        </div>\r
                                                    </div>\r
                                                }\r
                                            </div>\r
                                        }\r
                                        @if (getInputDataFields().length > 0) {\r
                                            <div class="space-y-0">\r
                                                @for (\r
                                                    field of getInputDataFields();\r
                                                    track field.label\r
                                                ) {\r
                                                    <div\r
                                                        class="flex gap-4 border-b border-stone-100 py-2 text-sm last:border-0 dark:border-gray-800"\r
                                                    >\r
                                                        <span\r
                                                            class="min-w-[140px] shrink-0 text-stone-500 dark:text-stone-400"\r
                                                            >{{ field.label }}</span\r
                                                        >\r
                                                        <span\r
                                                            class="break-words font-medium text-stone-950 dark:text-stone-100"\r
                                                            >{{ field.value }}</span\r
                                                        >\r
                                                    </div>\r
                                                }\r
                                            </div>\r
                                        } @else if (!canEditRuesCategory()) {\r
                                            <p class="py-2 text-sm text-stone-400 dark:text-stone-500">\u2014</p>\r
                                        }\r
                                    </div>\r
                                } @else {\r
                                    <pre\r
                                        class="m-0 max-h-64 overflow-auto rounded-lg bg-stone-50 p-4 font-mono text-sm text-stone-800 dark:bg-gray-950 dark:text-stone-200"\r
                                        >{{ formatJson(selectedRow()?.inputData) }}</pre\r
                                    >\r
                                }\r
                            </div>\r
                        </div>\r
\r
                        @if (selectedRow()?.attempts?.length) {\r
                            <div class="mb-6">\r
                                <h4 class="mb-3 text-sm font-medium text-stone-500 dark:text-stone-400">\r
                                    {{ 'batchProcessing.attemptTimeline' | transloco }}\r
                                </h4>\r
                                <div class="space-y-2">\r
                                    @for (item of selectedRow()!.attempts; track item.attempt) {\r
                                        <div\r
                                            class="flex flex-wrap items-baseline gap-x-3 gap-y-1 rounded-lg border border-stone-200 px-3 py-2 text-sm dark:border-gray-800"\r
                                        >\r
                                            <span class="font-medium text-stone-950 dark:text-white">\r
                                                {{\r
                                                    'batchProcessing.attemptLabel'\r
                                                        | transloco: { attempt: item.attempt }\r
                                                }}\r
                                            </span>\r
                                            @if (item.at) {\r
                                                <span class="text-xs text-stone-400 dark:text-stone-500">{{\r
                                                    item.at | date: 'short'\r
                                                }}</span>\r
                                            }\r
                                            <span class="text-xs font-medium text-stone-600 dark:text-stone-300">{{\r
                                                item.status\r
                                            }}</span>\r
                                            @if (item.statusCode) {\r
                                                <span class="text-xs text-stone-400">{{ item.statusCode }}</span>\r
                                            }\r
                                            @if (item.code) {\r
                                                <span class="text-xs text-stone-500 dark:text-stone-400">{{\r
                                                    item.code\r
                                                }}</span>\r
                                            }\r
                                            @if (item.message) {\r
                                                <span class="min-w-0 break-words text-xs text-stone-500 dark:text-stone-400">{{\r
                                                    item.message\r
                                                }}</span>\r
                                            }\r
                                        </div>\r
                                    }\r
                                </div>\r
                            </div>\r
                        }\r
\r
                        <!-- Step Results (second) -->\r
                        @if (configSteps().length > 0 && selectedRow()) {\r
                            <div class="mb-6">\r
                                <h4 class="mb-3 text-sm font-medium text-stone-500 dark:text-stone-400">\r
                                    {{ 'batchProcessing.stepResults' | transloco }}\r
                                </h4>\r
                                <div class="space-y-3">\r
                                    @for (step of configSteps(); track step.sequence) {\r
                                        <div\r
                                            class="overflow-hidden rounded-lg border border-stone-200 dark:border-gray-800"\r
                                        >\r
                                            <div\r
                                                class="flex items-center justify-between bg-stone-50 px-4 py-3 dark:bg-gray-950/50"\r
                                            >\r
                                                <div class="flex items-center gap-2">\r
                                                    <div\r
                                                        class="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"\r
                                                        [class]="\r
                                                            getRowStepStatus(\r
                                                                selectedRow()!,\r
                                                                step.sequence\r
                                                            ) === 'completed'\r
                                                                ? 'bg-emerald-100 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-300'\r
                                                                : getRowStepStatus(\r
                                                                        selectedRow()!,\r
                                                                        step.sequence\r
                                                                    ) === 'failed'\r
                                                                  ? 'bg-red-100 text-red-600 dark:bg-red-950/40 dark:text-red-300'\r
                                                                  : 'bg-stone-100 text-stone-500 dark:bg-gray-800 dark:text-stone-400'\r
                                                        "\r
                                                    >\r
                                                        {{ step.sequence }}\r
                                                    </div>\r
                                                    <span class="font-medium text-stone-700 dark:text-stone-200">{{\r
                                                        getStepName(step)\r
                                                    }}</span>\r
                                                </div>\r
                                                <div class="flex items-center gap-2">\r
                                                    <span\r
                                                        class="text-xs font-medium px-2 py-1 rounded-full"\r
                                                        [class]="\r
                                                            getRowStepStatus(\r
                                                                selectedRow()!,\r
                                                                step.sequence\r
                                                            ) === 'completed'\r
                                                                ? 'bg-emerald-100 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-300'\r
                                                                : getRowStepStatus(\r
                                                                        selectedRow()!,\r
                                                                        step.sequence\r
                                                                    ) === 'failed'\r
                                                                  ? 'bg-red-100 text-red-600 dark:bg-red-950/40 dark:text-red-300'\r
                                                                  : 'bg-stone-100 text-stone-500 dark:bg-gray-800 dark:text-stone-400'\r
                                                        "\r
                                                    >\r
                                                        {{\r
                                                            'batchProcessing.' +\r
                                                                getRowStepStatus(\r
                                                                    selectedRow()!,\r
                                                                    step.sequence\r
                                                                ) | transloco\r
                                                        }}\r
                                                    </span>\r
                                                    @if (\r
                                                        !canEditRuesCategory() &&\r
                                                        canOperateRetryFailed() &&\r
                                                        getRowStepStatus(\r
                                                            selectedRow()!,\r
                                                            step.sequence\r
                                                        ) === 'failed'\r
                                                    ) {\r
                                                        <button\r
                                                            mat-stroked-button\r
                                                            class="!h-8 !rounded-lg !border-amber-300 !text-amber-700"\r
                                                            (click)="\r
                                                                retrySingleFailedRow(selectedRow()!)\r
                                                            "\r
                                                            [disabled]="isRetryingRow(selectedRow()!)"\r
                                                            [matTooltip]="\r
                                                                'batchProcessing.retryRowTooltip'\r
                                                                    | transloco\r
                                                            "\r
                                                        >\r
                                                            <span\r
                                                                class="inline-flex items-center gap-1.5"\r
                                                            >\r
                                                                @if (isRetryingRow(selectedRow()!)) {\r
                                                                    <mat-icon\r
                                                                        class="animate-spin !text-base"\r
                                                                        >refresh</mat-icon\r
                                                                    >\r
                                                                    {{\r
                                                                        'batchProcessing.retrying'\r
                                                                            | transloco\r
                                                                    }}\r
                                                                } @else {\r
                                                                    <mat-icon class="!text-base"\r
                                                                        >restart_alt</mat-icon\r
                                                                    >\r
                                                                    {{\r
                                                                        'batchProcessing.retryRow'\r
                                                                            | transloco\r
                                                                    }}\r
                                                                }\r
                                                            </span>\r
                                                        </button>\r
                                                    }\r
                                                </div>\r
                                            </div>\r
                                            @if (selectedRow()?.results?.[step.sequence]) {\r
                                                @if (detailsViewMode() === 'readable') {\r
                                                    <div\r
                                                        class="border-t border-stone-100 bg-white px-4 py-3 dark:border-gray-800 dark:bg-gray-950/30"\r
                                                    >\r
                                                        <div class="space-y-0">\r
                                                            @for (\r
                                                                field of getStepResultDisplayFields(\r
                                                                    selectedRow()?.results?.[\r
                                                                        step.sequence\r
                                                                    ],\r
                                                                    getStepFeatureCode(step)\r
                                                                );\r
                                                                track $index\r
                                                            ) {\r
                                                                @if (field.kind === 'pdf') {\r
                                                                    <div\r
                                                                        class="flex flex-col gap-3 border-b border-stone-100 py-4 text-sm last:border-0 dark:border-gray-800"\r
                                                                    >\r
                                                                        <span class="text-stone-500 dark:text-stone-400">{{\r
                                                                            field.label\r
                                                                        }}</span>\r
                                                                        <iframe\r
                                                                            [title]="\r
                                                                                'batchProcessing.pdfPreview'\r
                                                                                    | transloco\r
                                                                            "\r
                                                                            class="min-h-[420px] w-full rounded-lg border border-stone-200 bg-stone-50 dark:border-gray-700 dark:bg-gray-950"\r
                                                                            [src]="\r
                                                                                sanitizePdfIframeSrc(\r
                                                                                    field.dataUrl\r
                                                                                )\r
                                                                            "\r
                                                                        ></iframe>\r
                                                                        <div class="flex flex-wrap gap-2">\r
                                                                            <button\r
                                                                                mat-stroked-button\r
                                                                                type="button"\r
                                                                                class="!rounded-lg"\r
                                                                                (click)="\r
                                                                                    openPdfInNewTab(\r
                                                                                        field.dataUrl\r
                                                                                    )\r
                                                                                "\r
                                                                            >\r
                                                                                <span\r
                                                                                    class="inline-flex items-center gap-2"\r
                                                                                >\r
                                                                                    <mat-icon\r
                                                                                        class="!text-lg"\r
                                                                                        >open_in_new</mat-icon\r
                                                                                    >\r
                                                                                    {{\r
                                                                                        'batchProcessing.openPdfInNewTab'\r
                                                                                            | transloco\r
                                                                                    }}\r
                                                                                </span>\r
                                                                            </button>\r
                                                                            <button\r
                                                                                mat-stroked-button\r
                                                                                type="button"\r
                                                                                class="!rounded-lg"\r
                                                                                (click)="\r
                                                                                    downloadPdf(\r
                                                                                        field.dataUrl,\r
                                                                                        getStepPdfFilename(\r
                                                                                            selectedRow()!\r
                                                                                                .rowIndex,\r
                                                                                            step.sequence\r
                                                                                        )\r
                                                                                    )\r
                                                                                "\r
                                                                            >\r
                                                                                <span\r
                                                                                    class="inline-flex items-center gap-2"\r
                                                                                >\r
                                                                                    <mat-icon\r
                                                                                        class="!text-lg"\r
                                                                                        >download</mat-icon\r
                                                                                    >\r
                                                                                    {{\r
                                                                                        'batchProcessing.downloadPdf'\r
                                                                                            | transloco\r
                                                                                    }}\r
                                                                                </span>\r
                                                                            </button>\r
                                                                        </div>\r
                                                                    </div>\r
                                                                } @else {\r
                                                                    <div\r
                                                                        class="flex gap-4 border-b border-stone-100 py-2 text-sm last:border-0 dark:border-gray-800"\r
                                                                    >\r
                                                                        <span\r
                                                                            class="min-w-[140px] shrink-0 text-stone-500 dark:text-stone-400"\r
                                                                            >{{ field.label }}</span\r
                                                                        >\r
                                                                        <span\r
                                                                            class="break-words font-medium text-stone-950 dark:text-stone-100"\r
                                                                            >{{ field.value }}</span\r
                                                                        >\r
                                                                    </div>\r
                                                                }\r
                                                            }\r
                                                        </div>\r
                                                    </div>\r
                                                } @else {\r
                                                    <div\r
                                                        class="border-t border-stone-100 bg-white px-4 py-3 dark:border-gray-800 dark:bg-gray-950/30"\r
                                                    >\r
                                                        <div class="relative">\r
                                                            @if (\r
                                                                selectedRow()?.results?.[\r
                                                                    step.sequence\r
                                                                ] != null\r
                                                            ) {\r
                                                                <button\r
                                                                    type="button"\r
                                                                    mat-icon-button\r
                                                                    class="!absolute top-1.5 right-1.5 z-10 !h-9 !min-h-9 !w-auto !min-w-9 !rounded-lg !border border-stone-200/90 !bg-white/95 px-1.5 shadow-sm hover:!border-stone-300 hover:bg-white dark:!border-gray-700 dark:!bg-gray-900/95 dark:hover:!border-gray-600 dark:hover:!bg-gray-800"\r
                                                                    [matTooltip]="\r
                                                                        'smartReport.copyJson'\r
                                                                            | transloco\r
                                                                    "\r
                                                                    [attr.aria-label]="\r
                                                                        'smartReport.copyJson'\r
                                                                            | transloco\r
                                                                    "\r
                                                                    (click)="\r
                                                                        copyBatchStepJsonToClipboard(\r
                                                                            selectedRow()!\r
                                                                                .rowIndex,\r
                                                                            step.sequence\r
                                                                        )\r
                                                                    "\r
                                                                >\r
                                                                    @if (\r
                                                                        batchJsonCopyShowsCopied(\r
                                                                            selectedRow()!\r
                                                                                .rowIndex,\r
                                                                            step.sequence\r
                                                                        )\r
                                                                    ) {\r
                                                                        <span\r
                                                                            class="text-xs font-medium text-emerald-700 whitespace-nowrap px-1"\r
                                                                            >{{\r
                                                                                'smartReport.copied'\r
                                                                                    | transloco\r
                                                                            }}</span\r
                                                                        >\r
                                                                    } @else {\r
                                                                        <mat-icon class="!text-[18px] text-stone-600 dark:text-stone-300"\r
                                                                            >content_copy</mat-icon\r
                                                                        >\r
                                                                    }\r
                                                                </button>\r
                                                            }\r
                                                            <pre\r
                                                                class="m-0 max-h-64 overflow-auto rounded-lg border border-stone-100 bg-stone-50 p-3 pr-14 font-mono text-xs text-stone-800 dark:border-gray-800 dark:bg-gray-950 dark:text-stone-200"\r
                                                                >{{\r
                                                                    formatStepResultJsonForDetail(\r
                                                                        selectedRow()?.results?.[\r
                                                                            step.sequence\r
                                                                        ]\r
                                                                    )\r
                                                                }}</pre\r
                                                            >\r
                                                        </div>\r
                                                    </div>\r
                                                }\r
                                            }\r
                                        </div>\r
                                    }\r
                                </div>\r
                            </div>\r
                        }\r
\r
                        <!-- Errors (if any) -->\r
                        @if (selectedRow()?.errors && selectedRow()!.errors.length > 0) {\r
                            <div>\r
                                <h4 class="text-sm font-medium text-red-500 mb-3">\r
                                    {{ 'batchProcessing.errors' | transloco }}\r
                                </h4>\r
                                <div class="space-y-2">\r
                                    @for (error of selectedRow()!.errors; track error.step) {\r
                                        <div class="rounded-lg border border-red-200 bg-red-50 p-3 dark:border-red-900/60 dark:bg-red-950/30">\r
                                            <p class="text-sm font-medium text-red-700 dark:text-red-300">\r
                                                {{\r
                                                    'batchProcessing.stepError'\r
                                                        | transloco\r
                                                            : { step: error.step, code: error.code }\r
                                                }}\r
                                            </p>\r
                                            <p class="text-sm text-red-600 dark:text-red-400">\r
                                                {{ error.message }}\r
                                            </p>\r
                                        </div>\r
                                    }\r
                                </div>\r
                            </div>\r
                        }\r
                    }\r
                </div>\r
            }\r
        }\r
    </div>\r
</div>\r
` }]
  }], null, { rowDetailPanel: [{
    type: ViewChild,
    args: ["rowDetailPanel"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BatchProcessingComponent, { className: "BatchProcessingComponent", filePath: "src/app/modules/smart-batch/dashboard/batch-processing/batch-processing.component.ts", lineNumber: 119 });
})();
export {
  BatchProcessingComponent
};
//# sourceMappingURL=chunk-4HV5AGSS.js.map
