import {
  SmartBatchService
} from "./chunk-6YNO6YW5.js";
import {
  MatProgressBarModule
} from "./chunk-BJ35R4KE.js";
import "./chunk-346ISJSG.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-HZKTYM3F.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-EL6Z63TT.js";
import {
  MatTableModule
} from "./chunk-7XJE6LU4.js";
import "./chunk-H3UX3NVF.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-6KHU2J3U.js";
import {
  MatDialog,
  MatDialogModule,
  MatDialogRef
} from "./chunk-KCV7S453.js";
import {
  ActivatedRoute,
  Router,
  RouterModule
} from "./chunk-LHOHCIQM.js";
import {
  MatFormField,
  MatFormFieldModule,
  MatHint,
  MatLabel
} from "./chunk-3YVZWUPK.js";
import "./chunk-2W5F3UIW.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlDirective,
  FormsModule,
  NgControlStatus,
  ReactiveFormsModule,
  Validators
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
  ɵɵpureFunction2,
  ɵɵpureFunction4,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-YTOBX75K.js";
import "./chunk-KTESVR3Q.js";

// src/app/modules/smart-batch/dashboard/create-batch/tutorial-modal/tutorial-modal.component.ts
var _c0 = (a0, a1) => ({ current: a0, total: a1 });
function TutorialModalComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "mat-icon", 21);
    \u0275\u0275text(2, "lightbulb");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 22);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, ctx_r0.currentStepData().tipKey));
  }
}
function TutorialModalComponent_span_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 23);
  }
  if (rf & 2) {
    const i_r2 = ctx.index;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("bg-indigo-500", i_r2 === ctx_r0.currentStep())("bg-slate-300", i_r2 !== ctx_r0.currentStep())("dark:bg-slate-600", i_r2 !== ctx_r0.currentStep());
  }
}
function TutorialModalComponent_button_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 24);
    \u0275\u0275listener("click", function TutorialModalComponent_button_31_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.nextStep());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementStart(3, "mat-icon", 25);
    \u0275\u0275text(4, "arrow_forward");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "batchTutorial.next"), " ");
  }
}
function TutorialModalComponent_button_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 24);
    \u0275\u0275listener("click", function TutorialModalComponent_button_32_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.close());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementStart(3, "mat-icon", 25);
    \u0275\u0275text(4, "rocket_launch");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "batchTutorial.getStarted"), " ");
  }
}
var TutorialModalComponent = class _TutorialModalComponent {
  constructor() {
    this._dialogRef = inject(MatDialogRef);
    this.currentStep = signal(0);
    this.steps = [
      {
        icon: "waving_hand",
        titleKey: "batchTutorial.welcomeTitle",
        descriptionKey: "batchTutorial.welcomeDesc",
        tipKey: "batchTutorial.welcomeTip"
      },
      {
        icon: "edit",
        titleKey: "batchTutorial.step1Title",
        descriptionKey: "batchTutorial.step1Desc"
      },
      {
        icon: "download",
        titleKey: "batchTutorial.step2Title",
        descriptionKey: "batchTutorial.step2Desc",
        tipKey: "batchTutorial.step2Tip"
      },
      {
        icon: "table_chart",
        titleKey: "batchTutorial.step3Title",
        descriptionKey: "batchTutorial.step3Desc",
        tipKey: "batchTutorial.step3Tip"
      },
      {
        icon: "cloud_upload",
        titleKey: "batchTutorial.step4Title",
        descriptionKey: "batchTutorial.step4Desc"
      },
      {
        icon: "visibility",
        titleKey: "batchTutorial.step5Title",
        descriptionKey: "batchTutorial.step5Desc",
        tipKey: "batchTutorial.step5Tip"
      }
    ];
    this.currentStepData = () => this.steps[this.currentStep()];
    this.progressPercent = () => (this.currentStep() + 1) / this.steps.length * 100;
  }
  nextStep() {
    if (this.currentStep() < this.steps.length - 1) {
      this.currentStep.update((v) => v + 1);
    }
  }
  prevStep() {
    if (this.currentStep() > 0) {
      this.currentStep.update((v) => v - 1);
    }
  }
  close() {
    this._dialogRef.close();
  }
  static {
    this.\u0275fac = function TutorialModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TutorialModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TutorialModalComponent, selectors: [["batch-tutorial-modal"]], decls: 33, vars: 24, consts: [[1, "flex", "flex-col", "w-full", "max-w-lg"], [1, "relative", "px-6", "pt-6", "pb-4"], [1, "absolute", "top-0", "left-0", "right-0", "h-1", "bg-slate-200", "dark:bg-slate-700"], [1, "h-full", "bg-gradient-to-r", "from-indigo-500", "to-purple-600", "transition-all", "duration-300"], [1, "flex", "items-center", "justify-between"], [1, "text-xs", "font-medium", "text-slate-500", "dark:text-slate-400"], ["mat-icon-button", "", 1, "!-mr-2", 3, "click"], [1, "px-6", "pb-6"], [1, "flex", "flex-col", "items-center", "text-center", "py-8"], [1, "w-20", "h-20", "rounded-2xl", "bg-gradient-to-br", "from-indigo-500", "to-purple-600", "flex", "items-center", "justify-center", "mb-6", "shadow-lg", "shadow-indigo-500/25", "animate-pulse"], [1, "!w-10", "!h-10", "text-white", "icon-size-10"], [1, "text-xl", "font-bold", "text-slate-900", "dark:text-white", "mb-3"], [1, "text-slate-600", "dark:text-slate-400", "text-sm", "leading-relaxed", "max-w-md"], ["class", "mt-4 flex items-start gap-2 p-3 rounded-lg bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/50 text-left", 4, "ngIf"], [1, "flex", "items-center", "justify-between", "pt-4", "border-t", "border-slate-200", "dark:border-slate-700"], ["mat-button", "", 1, "!text-slate-600", 3, "click", "disabled"], [1, "mr-1"], [1, "flex", "gap-1.5"], ["class", "w-2 h-2 rounded-full transition-all duration-300", 3, "bg-indigo-500", "bg-slate-300", "dark:bg-slate-600", 4, "ngFor", "ngForOf"], ["mat-flat-button", "", "color", "primary", 3, "click", 4, "ngIf"], [1, "mt-4", "flex", "items-start", "gap-2", "p-3", "rounded-lg", "bg-amber-50", "dark:bg-amber-900/20", "border", "border-amber-200", "dark:border-amber-800/50", "text-left"], [1, "text-amber-500", "!w-5", "!h-5", "shrink-0", "icon-size-5"], [1, "text-xs", "text-amber-700", "dark:text-amber-300"], [1, "w-2", "h-2", "rounded-full", "transition-all", "duration-300"], ["mat-flat-button", "", "color", "primary", 3, "click"], [1, "ml-1"]], template: function TutorialModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
        \u0275\u0275element(3, "div", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 4)(5, "span", 5);
        \u0275\u0275text(6);
        \u0275\u0275pipe(7, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "button", 6);
        \u0275\u0275listener("click", function TutorialModalComponent_Template_button_click_8_listener() {
          return ctx.close();
        });
        \u0275\u0275elementStart(9, "mat-icon");
        \u0275\u0275text(10, "close");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(11, "div", 7)(12, "div", 8)(13, "div", 9)(14, "mat-icon", 10);
        \u0275\u0275text(15);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "h2", 11);
        \u0275\u0275text(17);
        \u0275\u0275pipe(18, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "p", 12);
        \u0275\u0275text(20);
        \u0275\u0275pipe(21, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275template(22, TutorialModalComponent_div_22_Template, 6, 3, "div", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "div", 14)(24, "button", 15);
        \u0275\u0275listener("click", function TutorialModalComponent_Template_button_click_24_listener() {
          return ctx.prevStep();
        });
        \u0275\u0275elementStart(25, "mat-icon", 16);
        \u0275\u0275text(26, "arrow_back");
        \u0275\u0275elementEnd();
        \u0275\u0275text(27);
        \u0275\u0275pipe(28, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "div", 17);
        \u0275\u0275template(30, TutorialModalComponent_span_30_Template, 1, 6, "span", 18);
        \u0275\u0275elementEnd();
        \u0275\u0275template(31, TutorialModalComponent_button_31_Template, 5, 3, "button", 19)(32, TutorialModalComponent_button_32_Template, 5, 3, "button", 19);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275styleProp("width", ctx.progressPercent(), "%");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(7, 12, "batchTutorial.stepOf", \u0275\u0275pureFunction2(21, _c0, ctx.currentStep() + 1, ctx.steps.length)), " ");
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate(ctx.currentStepData().icon);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 15, ctx.currentStepData().titleKey), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 17, ctx.currentStepData().descriptionKey), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.currentStepData().tipKey);
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.currentStep() === 0);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(28, 19, "batchTutorial.back"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", ctx.steps);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.currentStep() < ctx.steps.length - 1);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.currentStep() === ctx.steps.length - 1);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, MatDialogModule, MatButtonModule, MatButton, MatIconButton, MatIconModule, MatIcon, TranslocoModule, TranslocoPipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=tutorial-modal.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TutorialModalComponent, [{
    type: Component,
    args: [{ selector: "batch-tutorial-modal", standalone: true, imports: [CommonModule, MatDialogModule, MatButtonModule, MatIconModule, TranslocoModule], template: `
        <div class="flex flex-col w-full max-w-lg">
            <!-- Header with progress -->
            <div class="relative px-6 pt-6 pb-4">
                <div class="absolute top-0 left-0 right-0 h-1 bg-slate-200 dark:bg-slate-700">
                    <div
                        class="h-full bg-gradient-to-r from-indigo-500 to-purple-600 transition-all duration-300"
                        [style.width.%]="progressPercent()"
                    ></div>
                </div>
                <div class="flex items-center justify-between">
                    <span class="text-xs font-medium text-slate-500 dark:text-slate-400">
                        {{ 'batchTutorial.stepOf' | transloco: { current: currentStep() + 1, total: steps.length } }}
                    </span>
                    <button mat-icon-button (click)="close()" class="!-mr-2">
                        <mat-icon>close</mat-icon>
                    </button>
                </div>
            </div>

            <!-- Content -->
            <div class="px-6 pb-6">
                <div class="flex flex-col items-center text-center py-8">
                    <!-- Animated Icon -->
                    <div
                        class="w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mb-6 shadow-lg shadow-indigo-500/25 animate-pulse"
                    >
                        <mat-icon class="!w-10 !h-10 text-white icon-size-10">{{
                            currentStepData().icon
                        }}</mat-icon>
                    </div>

                    <!-- Title -->
                    <h2 class="text-xl font-bold text-slate-900 dark:text-white mb-3">
                        {{ currentStepData().titleKey | transloco }}
                    </h2>

                    <!-- Description -->
                    <p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-md">
                        {{ currentStepData().descriptionKey | transloco }}
                    </p>

                    <!-- Tip -->
                    <div
                        *ngIf="currentStepData().tipKey"
                        class="mt-4 flex items-start gap-2 p-3 rounded-lg bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/50 text-left"
                    >
                        <mat-icon class="text-amber-500 !w-5 !h-5 shrink-0 icon-size-5"
                            >lightbulb</mat-icon
                        >
                        <span class="text-xs text-amber-700 dark:text-amber-300">{{
                            currentStepData().tipKey | transloco
                        }}</span>
                    </div>
                </div>

                <!-- Navigation -->
                <div
                    class="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-700"
                >
                    <button
                        mat-button
                        (click)="prevStep()"
                        [disabled]="currentStep() === 0"
                        class="!text-slate-600"
                    >
                        <mat-icon class="mr-1">arrow_back</mat-icon>
                        {{ 'batchTutorial.back' | transloco }}
                    </button>

                    <div class="flex gap-1.5">
                        <span
                            *ngFor="let step of steps; let i = index"
                            class="w-2 h-2 rounded-full transition-all duration-300"
                            [class.bg-indigo-500]="i === currentStep()"
                            [class.bg-slate-300]="i !== currentStep()"
                            [class.dark:bg-slate-600]="i !== currentStep()"
                        ></span>
                    </div>

                    <button
                        *ngIf="currentStep() < steps.length - 1"
                        mat-flat-button
                        color="primary"
                        (click)="nextStep()"
                    >
                        {{ 'batchTutorial.next' | transloco }}
                        <mat-icon class="ml-1">arrow_forward</mat-icon>
                    </button>
                    <button
                        *ngIf="currentStep() === steps.length - 1"
                        mat-flat-button
                        color="primary"
                        (click)="close()"
                    >
                        {{ 'batchTutorial.getStarted' | transloco }}
                        <mat-icon class="ml-1">rocket_launch</mat-icon>
                    </button>
                </div>
            </div>
        </div>
    `, styles: ["/* angular:styles/component:scss;aca37b045377af9e61ae87ec9ceba230614f528def48741d3190431076d12a3b;/Users/miguel/Smart-Agent/frontend/src/app/modules/smart-batch/dashboard/create-batch/tutorial-modal/tutorial-modal.component.ts */\n:host {\n  display: block;\n}\n/*# sourceMappingURL=tutorial-modal.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TutorialModalComponent, { className: "TutorialModalComponent", filePath: "src/app/modules/smart-batch/dashboard/create-batch/tutorial-modal/tutorial-modal.component.ts", lineNumber: 129 });
})();

// src/app/modules/smart-batch/dashboard/create-batch/create-batch.component.ts
var _c02 = (a0) => ({ name: a0 });
var _c1 = (a0) => ({ count: a0 });
var _c2 = (a0) => ({ stepName: a0 });
var _c3 = (a0) => ({ "border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20": a0 });
var _c4 = (a0) => ({ formats: a0 });
var _c5 = (a0, a1, a2, a3) => ({ "bg-orange-100 dark:bg-orange-900/30 border-l-4 border-l-orange-400": a0, "bg-red-100 dark:bg-red-900/30 border-l-4 border-l-red-500": a1, "text-slate-700 dark:text-slate-300": a2, "text-red-800 dark:text-red-300 font-medium": a3 });
function CreateBatchComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "mat-spinner", 11);
    \u0275\u0275elementStart(2, "p", 12);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "createBatch.loadingConfiguration"));
  }
}
function CreateBatchComponent_div_18_div_16_div_17_div_5_mat_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 67);
    \u0275\u0275text(1, "priority_high");
    \u0275\u0275elementEnd();
  }
}
function CreateBatchComponent_div_18_div_16_div_17_div_5_mat_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 67);
    \u0275\u0275text(1, "remove");
    \u0275\u0275elementEnd();
  }
}
function CreateBatchComponent_div_18_div_16_div_17_div_5_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 68);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "createBatch.required"));
  }
}
function CreateBatchComponent_div_18_div_16_div_17_div_5_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 69);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "createBatch.optional"));
  }
}
function CreateBatchComponent_div_18_div_16_div_17_div_5_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 70);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u2022 ", \u0275\u0275pipeBind1(2, 1, "createBatch.options"), " ");
  }
}
function CreateBatchComponent_div_18_div_16_div_17_div_5_div_14_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 73);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const val_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", val_r4, " ");
  }
}
function CreateBatchComponent_div_18_div_16_div_17_div_5_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 71);
    \u0275\u0275template(1, CreateBatchComponent_div_18_div_16_div_17_div_5_div_14_span_1_Template, 2, 1, "span", 72);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const field_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", field_r5.enumValues);
  }
}
function CreateBatchComponent_div_18_div_16_div_17_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56)(1, "div", 57);
    \u0275\u0275template(2, CreateBatchComponent_div_18_div_16_div_17_div_5_mat_icon_2_Template, 2, 0, "mat-icon", 58)(3, CreateBatchComponent_div_18_div_16_div_17_div_5_mat_icon_3_Template, 2, 0, "mat-icon", 58);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 59)(5, "div", 60)(6, "code", 61);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, CreateBatchComponent_div_18_div_16_div_17_div_5_span_8_Template, 3, 3, "span", 62)(9, CreateBatchComponent_div_18_div_16_div_17_div_5_span_9_Template, 3, 3, "span", 63)(10, CreateBatchComponent_div_18_div_16_div_17_div_5_span_10_Template, 3, 3, "span", 64);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 65);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, CreateBatchComponent_div_18_div_16_div_17_div_5_div_14_Template, 2, 1, "div", 66);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const field_r5 = ctx.$implicit;
    \u0275\u0275property("ngClass", field_r5.required ? "border-orange-200 dark:border-orange-800/50" : "border-slate-200 dark:border-slate-700");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", field_r5.required ? "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400" : "bg-slate-100 text-slate-500 dark:bg-slate-700");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", field_r5.required);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !field_r5.required);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(field_r5.field);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", field_r5.required);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !field_r5.required);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", field_r5.enumValues == null ? null : field_r5.enumValues.length);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(13, 10, "createBatch.usedBy", \u0275\u0275pureFunction1(13, _c2, field_r5.stepName)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", field_r5.enumValues == null ? null : field_r5.enumValues.length);
  }
}
function CreateBatchComponent_div_18_div_16_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "h4", 53);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 54);
    \u0275\u0275template(5, CreateBatchComponent_div_18_div_16_div_17_div_5_Template, 15, 15, "div", 55);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "createBatch.requiredFields"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.requiredFields());
  }
}
function CreateBatchComponent_div_18_div_16_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 74)(1, "mat-icon", 75);
    \u0275\u0275text(2, "table_chart");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "createBatch.noFieldsRequired"));
  }
}
function CreateBatchComponent_div_18_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 39)(1, "div", 40)(2, "div", 41)(3, "mat-icon", 42);
    \u0275\u0275text(4, "rocket_launch");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 43)(6, "h4", 44);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 45);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 46);
    \u0275\u0275listener("click", function CreateBatchComponent_div_18_div_16_Template_button_click_12_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.downloadTemplate();
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(13, "mat-icon", 47);
    \u0275\u0275text(14, "download");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(17, CreateBatchComponent_div_18_div_16_div_17_Template, 6, 4, "div", 48)(18, CreateBatchComponent_div_18_div_16_div_18_Template, 6, 3, "div", 49);
    \u0275\u0275elementStart(19, "div", 50)(20, "mat-icon", 51);
    \u0275\u0275text(21, "lightbulb");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 52);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "transloco");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 6, "createBatch.quickStart"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 8, "createBatch.quickStartDesc"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 10, "createBatch.downloadCsvTemplate"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.requiredFields().length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.requiredFields().length === 0);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(24, 12, "createBatch.proTip"), " ");
  }
}
function CreateBatchComponent_div_18_button_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 76);
    \u0275\u0275listener("click", function CreateBatchComponent_div_18_button_35_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.downloadTemplate());
    });
    \u0275\u0275elementStart(1, "mat-icon", 77);
    \u0275\u0275text(2, "download");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "createBatch.template"), " ");
  }
}
function CreateBatchComponent_div_18_div_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 78);
    \u0275\u0275listener("dragover", function CreateBatchComponent_div_18_div_36_Template_div_dragover_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDragOver($event));
    })("dragleave", function CreateBatchComponent_div_18_div_36_Template_div_dragleave_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDragLeave($event));
    })("drop", function CreateBatchComponent_div_18_div_36_Template_div_drop_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDrop($event));
    });
    \u0275\u0275elementStart(1, "input", 79);
    \u0275\u0275listener("change", function CreateBatchComponent_div_18_div_36_Template_input_change_1_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onFileSelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "label", 80)(3, "div", 81)(4, "mat-icon", 82);
    \u0275\u0275text(5, "cloud_upload");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "p", 83);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 84);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(9, _c3, ctx_r1.isDragging()));
    \u0275\u0275advance();
    \u0275\u0275property("accept", ctx_r1.acceptedFormats());
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 4, "createBatch.dropOrClick"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(11, 6, "createBatch.acceptsFiles", \u0275\u0275pureFunction1(11, _c4, ((tmp_5_0 = ctx_r1.configuration()) == null ? null : tmp_5_0.inputFormat == null ? null : tmp_5_0.inputFormat.toUpperCase()) || "CSV, XLSX, JSONL")), " ");
  }
}
function CreateBatchComponent_div_18_div_37_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 92)(1, "mat-icon", 93);
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "p", 94);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 95);
    \u0275\u0275listener("click", function CreateBatchComponent_div_18_div_37_div_14_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.downloadTemplate());
    });
    \u0275\u0275elementStart(7, "mat-icon", 96);
    \u0275\u0275text(8, "download");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.parseError());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 2, "createBatch.downloadCsvTemplate"), " ");
  }
}
function CreateBatchComponent_div_18_div_37_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 97)(1, "mat-icon", 98);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "p", 99);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 100);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 2, "createBatch.rowsParsedSuccess", \u0275\u0275pureFunction1(8, _c1, ctx_r1.parsedRows().length)), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(9, 5, "createBatch.columnsDetected", \u0275\u0275pureFunction1(10, _c1, ctx_r1.previewColumns().length)), " ");
  }
}
function CreateBatchComponent_div_18_div_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 85)(1, "div", 86)(2, "div", 87)(3, "mat-icon", 7);
    \u0275\u0275text(4, "description");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 43)(6, "p", 88);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 84);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 89);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275listener("click", function CreateBatchComponent_div_18_div_37_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removeFile());
    });
    \u0275\u0275elementStart(12, "mat-icon");
    \u0275\u0275text(13, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(14, CreateBatchComponent_div_18_div_37_div_14_Template, 11, 4, "div", 90)(15, CreateBatchComponent_div_18_div_37_div_15_Template, 10, 12, "div", 91);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", (tmp_2_0 = ctx_r1.selectedFile()) == null ? null : tmp_2_0.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatFileSize(((tmp_3_0 = ctx_r1.selectedFile()) == null ? null : tmp_3_0.size) || 0), " ");
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(11, 5, "createBatch.removeFile"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.parseError());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.parsedRows().length > 0 && !ctx_r1.parseError());
  }
}
function CreateBatchComponent_div_18_div_38_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 111)(1, "mat-icon", 112);
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 1, "createBatch.issuesCount", \u0275\u0275pureFunction1(4, _c1, ((tmp_3_0 = ctx_r1.errorSummary()) == null ? null : tmp_3_0.totalErrors) || 0)), " ");
  }
}
function CreateBatchComponent_div_18_div_38_div_9_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 118);
    \u0275\u0275element(1, "span", 119);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 1, "createBatch.missingValues", \u0275\u0275pureFunction1(4, _c1, ((tmp_4_0 = ctx_r1.errorSummary()) == null ? null : tmp_4_0.missingCount) || 0)), " ");
  }
}
function CreateBatchComponent_div_18_div_38_div_9_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 118);
    \u0275\u0275element(1, "span", 120);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 1, "createBatch.invalidValues", \u0275\u0275pureFunction1(4, _c1, ((tmp_4_0 = ctx_r1.errorSummary()) == null ? null : tmp_4_0.invalidEnumCount) || 0)), " ");
  }
}
function CreateBatchComponent_div_18_div_38_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 113)(1, "span", 114)(2, "mat-icon", 115);
    \u0275\u0275text(3, "warning");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 116);
    \u0275\u0275template(7, CreateBatchComponent_div_18_div_38_div_9_span_7_Template, 4, 6, "span", 117)(8, CreateBatchComponent_div_18_div_38_div_9_span_8_Template, 4, 6, "span", 117);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 3, "createBatch.fixHighlightedCells"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", (tmp_4_0 = ctx_r1.errorSummary()) == null ? null : tmp_4_0.missingCount);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_5_0 = ctx_r1.errorSummary()) == null ? null : tmp_5_0.invalidEnumCount);
  }
}
function CreateBatchComponent_div_18_div_38_th_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 121);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", col_r10, " ");
  }
}
function CreateBatchComponent_div_18_div_38_tr_18_mat_icon_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 127);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275text(2, " error_outline ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r11 = \u0275\u0275nextContext().index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind2(1, 1, "createBatch.errorsInRow", \u0275\u0275pureFunction1(4, _c1, ctx_r1.getRowErrors(i_r11).length)));
  }
}
function CreateBatchComponent_div_18_div_38_tr_18_td_5_mat_icon_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 130);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_8_0;
    let tmp_9_0;
    const col_r12 = \u0275\u0275nextContext().$implicit;
    const i_r11 = \u0275\u0275nextContext().index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", ((tmp_8_0 = ctx_r1.getCellError(i_r11, col_r12)) == null ? null : tmp_8_0.type) === "missing" ? "text-orange-500" : "text-red-500");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ((tmp_9_0 = ctx_r1.getCellError(i_r11, col_r12)) == null ? null : tmp_9_0.type) === "missing" ? "warning" : "error", " ");
  }
}
function CreateBatchComponent_div_18_div_38_tr_18_td_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 128)(1, "span", 124)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, CreateBatchComponent_div_18_div_38_tr_18_td_5_mat_icon_4_Template, 2, 2, "mat-icon", 129);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_7_0;
    let tmp_8_0;
    let tmp_10_0;
    const col_r12 = ctx.$implicit;
    const ctx_r12 = \u0275\u0275nextContext();
    const row_r14 = ctx_r12.$implicit;
    const i_r11 = ctx_r12.index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(5, _c5, ((tmp_7_0 = ctx_r1.getCellError(i_r11, col_r12)) == null ? null : tmp_7_0.type) === "missing", ((tmp_7_0 = ctx_r1.getCellError(i_r11, col_r12)) == null ? null : tmp_7_0.type) === "invalid_enum", !ctx_r1.getCellError(i_r11, col_r12), ctx_r1.getCellError(i_r11, col_r12)))("matTooltip", ((tmp_8_0 = ctx_r1.getCellError(i_r11, col_r12)) == null ? null : tmp_8_0.message) || "")("matTooltipDisabled", !ctx_r1.getCellError(i_r11, col_r12));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r14[col_r12] || (((tmp_10_0 = ctx_r1.getCellError(i_r11, col_r12)) == null ? null : tmp_10_0.type) === "missing" ? "(empty)" : "-"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getCellError(i_r11, col_r12));
  }
}
function CreateBatchComponent_div_18_div_38_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 122)(1, "td", 123)(2, "span", 124);
    \u0275\u0275text(3);
    \u0275\u0275template(4, CreateBatchComponent_div_18_div_38_tr_18_mat_icon_4_Template, 3, 6, "mat-icon", 125);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(5, CreateBatchComponent_div_18_div_38_tr_18_td_5_Template, 5, 10, "td", 126);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r11 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", ctx_r1.rowHasErrors(i_r11) ? "border-red-200 dark:border-red-800 bg-red-50/30 dark:bg-red-900/10" : "border-slate-100 dark:border-slate-800");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", i_r11 + 1, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.rowHasErrors(i_r11));
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.previewColumns());
  }
}
function CreateBatchComponent_div_18_div_38_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 131)(1, "mat-icon", 115);
    \u0275\u0275text(2, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 1, "createBatch.moreRowsHaveErrors", \u0275\u0275pureFunction1(4, _c1, ctx_r1.errorSummary().rowsWithErrors - 10)), " ");
  }
}
function CreateBatchComponent_div_18_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 101)(1, "div", 27)(2, "div", 16)(3, "h2", 19);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, CreateBatchComponent_div_18_div_38_span_6_Template, 5, 6, "span", 102);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 84);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, CreateBatchComponent_div_18_div_38_div_9_Template, 9, 5, "div", 103);
    \u0275\u0275elementStart(10, "div", 104)(11, "table", 105)(12, "thead")(13, "tr", 106)(14, "th", 107);
    \u0275\u0275text(15, " # ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, CreateBatchComponent_div_18_div_38_th_16_Template, 2, 1, "th", 108);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "tbody");
    \u0275\u0275template(18, CreateBatchComponent_div_18_div_38_tr_18_Template, 6, 4, "tr", 109);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(19, CreateBatchComponent_div_18_div_38_div_19_Template, 5, 6, "div", 110);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", ctx_r1.parseError() ? "border-red-300 dark:border-red-800" : "border-slate-200 dark:border-slate-800");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 9, "createBatch.dataPreview"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.errorSummary());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" Showing first ", ctx_r1.parsedRows().length > 10 ? 10 : ctx_r1.parsedRows().length, " of ", ctx_r1.parsedRows().length, " rows ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.errorSummary());
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r1.previewColumns());
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.parsedRows().slice(0, 10));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.errorSummary() && ctx_r1.errorSummary().rowsWithErrors > 10);
  }
}
function CreateBatchComponent_div_18_div_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 132)(1, "div", 1)(2, "div")(3, "p", 133);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 134);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 135)(9, "p", 133);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 136);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "transloco");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 6, "createBatch.estimatedCost"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("$", ctx_r1.estimatedCost().toFixed(2), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r1.parsedRows().length, " ", \u0275\u0275pipeBind1(11, 8, "createBatch.rows"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("\xD7 ", ((tmp_5_0 = ctx_r1.configuration()) == null ? null : tmp_5_0.steps == null ? null : tmp_5_0.steps.length) || 0, " ", \u0275\u0275pipeBind1(14, 10, "createBatch.steps"), "");
  }
}
function CreateBatchComponent_div_18_mat_spinner_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 137);
  }
}
function CreateBatchComponent_div_18_mat_icon_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 47);
    \u0275\u0275text(1, "rocket_launch");
    \u0275\u0275elementEnd();
  }
}
function CreateBatchComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 14)(2, "div", 15);
    \u0275\u0275listener("click", function CreateBatchComponent_div_18_Template_div_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleRequiredFieldsPanel());
    });
    \u0275\u0275elementStart(3, "div", 16)(4, "div", 17)(5, "mat-icon", 18);
    \u0275\u0275text(6, "info");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div")(8, "h2", 19);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 20);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "mat-icon", 21);
    \u0275\u0275text(15, " expand_more ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(16, CreateBatchComponent_div_18_div_16_Template, 25, 14, "div", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 23)(18, "h2", 24);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "mat-form-field", 25)(22, "mat-label");
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275element(25, "input", 26);
    \u0275\u0275pipe(26, "transloco");
    \u0275\u0275elementStart(27, "mat-hint");
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "div", 23)(31, "div", 27)(32, "h2", 19);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(35, CreateBatchComponent_div_18_button_35_Template, 5, 3, "button", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275template(36, CreateBatchComponent_div_18_div_36_Template, 12, 13, "div", 29)(37, CreateBatchComponent_div_18_div_37_Template, 16, 7, "div", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275template(38, CreateBatchComponent_div_18_div_38_Template, 20, 11, "div", 31)(39, CreateBatchComponent_div_18_div_39_Template, 15, 12, "div", 32);
    \u0275\u0275elementStart(40, "div", 33)(41, "button", 34);
    \u0275\u0275listener("click", function CreateBatchComponent_div_18_Template_button_click_41_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goBack());
    });
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "span", 35)(45, "button", 36);
    \u0275\u0275listener("click", function CreateBatchComponent_div_18_Template_button_click_45_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submit());
    });
    \u0275\u0275template(46, CreateBatchComponent_div_18_mat_spinner_46_Template, 1, 0, "mat-spinner", 37)(47, CreateBatchComponent_div_18_mat_icon_47_Template, 2, 0, "mat-icon", 38);
    \u0275\u0275text(48);
    \u0275\u0275pipe(49, "transloco");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 22, "createBatch.csvFileRequirements"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(13, 24, "createBatch.requiredFieldsCount", \u0275\u0275pureFunction1(41, _c1, ctx_r1.templateFields().length)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("rotate-180", ctx_r1.showRequiredFieldsPanel());
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.showRequiredFieldsPanel());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 27, "createBatch.batchDetails"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 29, "createBatch.batchName"));
    \u0275\u0275advance(2);
    \u0275\u0275property("formControl", ctx_r1.batchForm.get("name"))("placeholder", \u0275\u0275pipeBind1(26, 31, "createBatch.batchNamePlaceholder"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(29, 33, "createBatch.batchNameHint"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(34, 35, "createBatch.uploadData"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.selectedFile());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.selectedFile());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedFile());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.parsedRows().length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.parsedRows().length > 0 && !ctx_r1.parseError());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(43, 37, "createBatch.cancel"));
    \u0275\u0275advance(2);
    \u0275\u0275property("matTooltip", (!ctx_r1.hasValidData() || ctx_r1.parseError()) && ctx_r1.createBatchDisabledReason() ? ctx_r1.createBatchDisabledReason() : "");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.hasValidData() || ctx_r1.isSubmitting() || ctx_r1.parseError());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isSubmitting());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isSubmitting());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(49, 39, ctx_r1.isSubmitting() ? "createBatch.creating" : "createBatch.createBatch"), " ");
  }
}
var CreateBatchComponent = class _CreateBatchComponent {
  constructor() {
    this._smartBatchService = inject(SmartBatchService);
    this._router = inject(Router);
    this._route = inject(ActivatedRoute);
    this._formBuilder = inject(FormBuilder);
    this._dialog = inject(MatDialog);
    this.TUTORIAL_STORAGE_KEY = "smart-batch-tutorial-shown";
    this.configId = signal(null);
    this.configuration = signal(null);
    this.isLoading = signal(true);
    this.isSubmitting = signal(false);
    this.showRequiredFieldsPanel = signal(true);
    this.batchForm = this._formBuilder.group({
      name: ["", [Validators.required, Validators.maxLength(150)]]
    });
    this.batchFormValid = signal(false);
    this.selectedFile = signal(null);
    this.isDragging = signal(false);
    this.parseError = signal(null);
    this.parsedRows = signal([]);
    this.previewColumns = signal([]);
    this.requiredFields = computed(() => {
      const config = this.configuration();
      if (!config?.steps)
        return [];
      const fieldsMap = /* @__PURE__ */ new Map();
      config.steps.sort((a, b) => a.sequence - b.sequence).forEach((step) => {
        const feature = step.appFeature;
        const dependencies = feature?.dependencies || [];
        dependencies.forEach((dep) => {
          if (!fieldsMap.has(dep.field) || dep.required) {
            fieldsMap.set(dep.field, {
              field: dep.field,
              required: dep.required || false,
              stepName: feature?.name || "Unknown Step",
              stepSequence: step.sequence,
              enumValues: dep.enum || void 0,
              type: dep.type || "string",
              description: dep.description || void 0
            });
          }
        });
      });
      return Array.from(fieldsMap.values()).sort((a, b) => {
        if (a.required !== b.required)
          return b.required ? 1 : -1;
        return a.field.localeCompare(b.field);
      });
    });
    this.templateFields = computed(() => {
      return this.requiredFields().filter((f) => f.required);
    });
    this.allFields = computed(() => {
      return this.requiredFields();
    });
    this.validationResult = signal(null);
    this.cellErrors = computed(() => {
      const result = this.validationResult();
      if (!result)
        return /* @__PURE__ */ new Map();
      const cellMap = /* @__PURE__ */ new Map();
      result.errors.forEach((error) => {
        const key = `${error.rowIndex}-${error.column}`;
        cellMap.set(key, error);
      });
      return cellMap;
    });
    this.errorSummary = computed(() => {
      const result = this.validationResult();
      if (!result || result.isValid)
        return null;
      const missingCount = result.errors.filter((e) => e.type === "missing").length;
      const invalidEnumCount = result.errors.filter((e) => e.type === "invalid_enum").length;
      const rowsWithErrors = new Set(result.errors.map((e) => e.rowIndex)).size;
      return {
        totalErrors: result.errors.length,
        missingCount,
        invalidEnumCount,
        rowsWithErrors
      };
    });
    this.hasValidData = computed(() => {
      this.batchFormValid();
      const validation = this.validationResult();
      const basicValid = this.batchForm.valid && this.parsedRows().length > 0;
      return basicValid && (!validation || validation.isValid);
    });
    this.createBatchDisabledReason = computed(() => {
      this.batchFormValid();
      if (this.isSubmitting())
        return "Creating batch...";
      if (this.parseError())
        return this.parseError();
      if (this.parsedRows().length === 0)
        return "Upload a file with data to continue";
      if (!this.batchForm.get("name")?.value?.trim())
        return "Enter a batch name to continue";
      const validation = this.validationResult();
      if (validation && !validation.isValid)
        return "Fix the errors in your data to continue";
      return null;
    });
    this.estimatedCost = computed(() => {
      const config = this.configuration();
      if (!config?.steps)
        return 0;
      const costPerRow = config.steps.reduce((sum, step) => {
        const feature = step.appFeature;
        return sum + (feature?.price || feature?.smartCheckPrice || 0);
      }, 0);
      return costPerRow * this.parsedRows().length;
    });
    this.acceptedFormats = computed(() => {
      const config = this.configuration();
      if (!config)
        return ".csv,.xlsx,.jsonl";
      switch (config.inputFormat) {
        case "csv":
          return ".csv";
        case "xlsx":
          return ".xlsx";
        case "jsonl":
          return ".jsonl";
        default:
          return ".csv,.xlsx,.jsonl";
      }
    });
  }
  ngOnInit() {
    this.batchFormValid.set(this.batchForm.valid);
    this.batchForm.statusChanges.subscribe(() => {
      this.batchFormValid.set(this.batchForm.valid);
    });
    const id = this._route.snapshot.paramMap.get("configId");
    if (id) {
      this.configId.set(id);
      this.loadConfiguration(id);
    } else {
      this._router.navigate(["/smart-batch"]);
    }
    this.checkAndShowTutorial();
  }
  checkAndShowTutorial() {
    const tutorialShown = localStorage.getItem(this.TUTORIAL_STORAGE_KEY);
    if (!tutorialShown) {
      setTimeout(() => {
        this.openTutorial();
        localStorage.setItem(this.TUTORIAL_STORAGE_KEY, "true");
      }, 500);
    }
  }
  openTutorial() {
    this._dialog.open(TutorialModalComponent, {
      panelClass: "tutorial-dialog",
      maxWidth: "500px",
      width: "95vw",
      disableClose: false,
      autoFocus: false
    });
  }
  loadConfiguration(configId) {
    this.isLoading.set(true);
    this._smartBatchService.getConfiguration(configId).subscribe({
      next: (res) => {
        this.configuration.set(res.data);
        this.isLoading.set(false);
      },
      error: () => {
        this._router.navigate(["/smart-batch"]);
      }
    });
  }
  /** Download a CSV template with all required field headers */
  downloadTemplate() {
    const config = this.configuration();
    if (!config)
      return;
    const headers = this.requiredFields().map((f) => f.field);
    if (headers.length === 0) {
      headers.push("id");
    }
    const csvContent = [
      headers.join(","),
      headers.map(() => "").join(",")
      // Empty row as placeholder
    ].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    const fileName = `${config.name.replace(/[^a-z0-9]/gi, "_").toLowerCase()}_template.csv`;
    link.setAttribute("href", url);
    link.setAttribute("download", fileName);
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }
  toggleRequiredFieldsPanel() {
    this.showRequiredFieldsPanel.update((v) => !v);
  }
  // Drag & Drop handlers
  onDragOver(event) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging.set(true);
  }
  onDragLeave(event) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging.set(false);
  }
  onDrop(event) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging.set(false);
    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
      this.handleFile(files[0]);
    }
  }
  onFileSelected(event) {
    const input = event.target;
    if (input.files && input.files.length > 0) {
      this.handleFile(input.files[0]);
    }
  }
  handleFile(file) {
    this.selectedFile.set(file);
    this.parseError.set(null);
    this.parsedRows.set([]);
    this.previewColumns.set([]);
    const extension = file.name.split(".").pop()?.toLowerCase();
    if (extension === "csv") {
      this.parseCSV(file);
    } else if (extension === "jsonl") {
      this.parseJSONL(file);
    } else if (extension === "xlsx") {
      this.parseError.set("XLSX parsing requires a library. Please use CSV or JSONL for now.");
    } else {
      this.parseError.set(`Unsupported file format: .${extension}`);
    }
  }
  parseCSV(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const text = e.target?.result;
        const lines = text.split("\n").filter((line) => line.trim());
        if (lines.length < 2) {
          this.parseError.set("CSV must have a header row and at least one data row.");
          return;
        }
        const headers = this.parseCSVLine(lines[0]);
        this.previewColumns.set(headers);
        const rows = [];
        for (let i = 1; i < lines.length; i++) {
          const values = this.parseCSVLine(lines[i]);
          if (values.length === headers.length) {
            const row = {};
            headers.forEach((header, idx) => {
              row[header] = values[idx];
            });
            rows.push(row);
          }
        }
        this.parsedRows.set(rows);
        this.validateAllData(headers, rows);
      } catch (err) {
        this.parseError.set("Failed to parse CSV file.");
      }
    };
    reader.readAsText(file);
  }
  parseCSVLine(line) {
    const result = [];
    let current = "";
    let inQuotes = false;
    for (let i = 0; i < line.length; i++) {
      const char = line[i];
      if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === "," && !inQuotes) {
        result.push(current.trim());
        current = "";
      } else {
        current += char;
      }
    }
    result.push(current.trim());
    return result;
  }
  parseJSONL(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const text = e.target?.result;
        const lines = text.split("\n").filter((line) => line.trim());
        if (lines.length === 0) {
          this.parseError.set("JSONL file is empty.");
          return;
        }
        const rows = [];
        const allKeys = /* @__PURE__ */ new Set();
        for (const line of lines) {
          const obj = JSON.parse(line);
          rows.push(obj);
          Object.keys(obj).forEach((key) => allKeys.add(key));
        }
        this.previewColumns.set(Array.from(allKeys));
        this.parsedRows.set(rows);
        this.validateAllData(Array.from(allKeys), rows);
      } catch (err) {
        this.parseError.set("Failed to parse JSONL file. Ensure each line is valid JSON.");
      }
    };
    reader.readAsText(file);
  }
  /** Comprehensive validation of all rows and cells */
  validateAllData(uploadedHeaders, rows) {
    const requiredFieldDefs = this.requiredFields();
    const errors = [];
    const missingColumns = requiredFieldDefs.filter((f) => f.required).filter((f) => !uploadedHeaders.some((h) => h.toLowerCase() === f.field.toLowerCase()));
    if (missingColumns.length > 0) {
      const fieldNames = missingColumns.map((f) => f.field).join(", ");
      this.parseError.set(`Missing required columns: ${fieldNames}. Please download the template for the correct format.`);
      this.validationResult.set({
        isValid: false,
        errors: [],
        errorsByRow: /* @__PURE__ */ new Map(),
        errorsByColumn: /* @__PURE__ */ new Map()
      });
      return;
    }
    const fieldDefMap = /* @__PURE__ */ new Map();
    requiredFieldDefs.forEach((f) => {
      fieldDefMap.set(f.field.toLowerCase(), f);
    });
    rows.forEach((row, rowIndex) => {
      requiredFieldDefs.forEach((fieldDef) => {
        const columnKey = this.findColumnKey(row, fieldDef.field);
        const value = columnKey ? row[columnKey] : void 0;
        if (fieldDef.required && this.isEmptyValue(value)) {
          errors.push({
            rowIndex,
            column: fieldDef.field,
            type: "missing",
            message: `"${fieldDef.field}" is required but empty`
          });
        }
        if (fieldDef.enumValues && fieldDef.enumValues.length > 0 && !this.isEmptyValue(value)) {
          const normalizedValue = String(value).trim().toLowerCase();
          const validValues = fieldDef.enumValues.map((v) => v.toLowerCase());
          if (!validValues.includes(normalizedValue)) {
            errors.push({
              rowIndex,
              column: fieldDef.field,
              type: "invalid_enum",
              message: `"${value}" is not a valid value. Expected: ${fieldDef.enumValues.join(", ")}`,
              expectedValues: fieldDef.enumValues
            });
          }
        }
      });
    });
    const errorsByRow = /* @__PURE__ */ new Map();
    const errorsByColumn = /* @__PURE__ */ new Map();
    errors.forEach((error) => {
      if (!errorsByRow.has(error.rowIndex)) {
        errorsByRow.set(error.rowIndex, []);
      }
      errorsByRow.get(error.rowIndex).push(error);
      if (!errorsByColumn.has(error.column)) {
        errorsByColumn.set(error.column, []);
      }
      errorsByColumn.get(error.column).push(error);
    });
    const validationResult = {
      isValid: errors.length === 0,
      errors,
      errorsByRow,
      errorsByColumn
    };
    this.validationResult.set(validationResult);
    if (errors.length > 0) {
      const missingCount = errors.filter((e) => e.type === "missing").length;
      const enumCount = errors.filter((e) => e.type === "invalid_enum").length;
      const rowsAffected = new Set(errors.map((e) => e.rowIndex)).size;
      let errorMsg = `Found ${errors.length} issue${errors.length > 1 ? "s" : ""} in ${rowsAffected} row${rowsAffected > 1 ? "s" : ""}: `;
      const parts = [];
      if (missingCount > 0)
        parts.push(`${missingCount} missing value${missingCount > 1 ? "s" : ""}`);
      if (enumCount > 0)
        parts.push(`${enumCount} invalid value${enumCount > 1 ? "s" : ""}`);
      errorMsg += parts.join(", ") + ". Check the highlighted cells below.";
      this.parseError.set(errorMsg);
    } else {
      this.parseError.set(null);
    }
  }
  /** Find the actual key in the row object (case-insensitive match) */
  findColumnKey(row, fieldName) {
    const lowerField = fieldName.toLowerCase();
    const keys = Object.keys(row);
    const match = keys.find((k) => k.toLowerCase() === lowerField);
    return match || null;
  }
  /** Check if a value is empty */
  isEmptyValue(value) {
    if (value === null || value === void 0)
      return true;
    if (typeof value === "string" && value.trim() === "")
      return true;
    return false;
  }
  /** Get cell error for template binding */
  getCellError(rowIndex, column) {
    const key = `${rowIndex}-${column.toLowerCase()}`;
    let error = this.cellErrors().get(key);
    if (error)
      return error;
    const errors = this.cellErrors();
    for (const [k, v] of errors) {
      const [idx, col] = k.split("-");
      if (parseInt(idx) === rowIndex && col.toLowerCase() === column.toLowerCase()) {
        return v;
      }
    }
    return null;
  }
  /** Check if a row has any errors */
  rowHasErrors(rowIndex) {
    const result = this.validationResult();
    if (!result)
      return false;
    return result.errorsByRow.has(rowIndex);
  }
  /** Get all errors for a specific row */
  getRowErrors(rowIndex) {
    const result = this.validationResult();
    if (!result)
      return [];
    return result.errorsByRow.get(rowIndex) || [];
  }
  removeFile() {
    this.selectedFile.set(null);
    this.parsedRows.set([]);
    this.previewColumns.set([]);
    this.parseError.set(null);
    this.validationResult.set(null);
  }
  submit() {
    if (!this.hasValidData() || !this.configId())
      return;
    this.isSubmitting.set(true);
    const payload = {
      batchConfiguration: this.configId(),
      name: this.batchForm.value.name,
      rows: this.parsedRows()
    };
    this._smartBatchService.createSmartBatch(payload).subscribe({
      next: () => {
        this._router.navigate(["/smart-batch", this.configId()]);
      },
      error: (err) => {
        console.error("Failed to create batch:", err);
        this.isSubmitting.set(false);
      }
    });
  }
  goBack() {
    this._router.navigate(["/smart-batch", this.configId()]);
  }
  formatFileSize(bytes) {
    if (bytes === 0)
      return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  }
  static {
    this.\u0275fac = function CreateBatchComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CreateBatchComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CreateBatchComponent, selectors: [["create-batch"]], decls: 19, vars: 14, consts: [[1, "flex", "flex-col", "w-full", "h-full", "bg-[#f8fafc]", "dark:bg-[#0f172a]", "p-6", "gap-6"], [1, "flex", "items-center", "justify-between"], [1, "flex", "items-center", "gap-4"], ["mat-icon-button", "", 1, "!bg-white", "dark:!bg-slate-800", "!shadow-sm", 3, "click"], [1, "text-2xl", "font-bold", "tracking-tight", "text-slate-900", "dark:text-white"], [1, "text-slate-500", "dark:text-slate-400"], ["mat-icon-button", "", 1, "!bg-white", "dark:!bg-slate-800", "!shadow-sm", "hover:!bg-indigo-50", "dark:hover:!bg-indigo-900/30", 3, "click", "matTooltip"], [1, "text-indigo-600", "dark:text-indigo-400"], ["class", "flex flex-col items-center justify-center flex-1", 4, "ngIf"], ["class", "flex flex-col gap-6 max-w-4xl", 4, "ngIf"], [1, "flex", "flex-col", "items-center", "justify-center", "flex-1"], ["diameter", "48"], [1, "mt-4", "text-slate-500"], [1, "flex", "flex-col", "gap-6", "max-w-4xl"], [1, "bg-gradient-to-br", "from-indigo-50", "to-purple-50", "dark:from-indigo-900/20", "dark:to-purple-900/20", "rounded-xl", "border", "border-indigo-200", "dark:border-indigo-800/50", "overflow-hidden"], [1, "flex", "items-center", "justify-between", "px-6", "py-4", "bg-white/50", "dark:bg-slate-900/50", "border-b", "border-indigo-100", "dark:border-indigo-800/30", "cursor-pointer", 3, "click"], [1, "flex", "items-center", "gap-3"], [1, "w-10", "h-10", "rounded-lg", "bg-gradient-to-br", "from-indigo-500", "to-purple-600", "flex", "items-center", "justify-center", "shadow-lg", "shadow-indigo-500/25"], [1, "text-white"], [1, "text-lg", "font-semibold", "text-slate-900", "dark:text-white"], [1, "text-sm", "text-slate-500", "dark:text-slate-400"], [1, "text-slate-400", "transition-transform"], ["class", "p-6 space-y-6", 4, "ngIf"], [1, "bg-white", "dark:bg-slate-900", "rounded-xl", "border", "border-slate-200", "dark:border-slate-800", "p-6"], [1, "text-lg", "font-semibold", "text-slate-900", "dark:text-white", "mb-4"], ["appearance", "outline", 1, "w-full"], ["matInput", "", 3, "formControl", "placeholder"], [1, "flex", "items-center", "justify-between", "mb-4"], ["mat-stroked-button", "", "color", "primary", "class", "!text-sm", 3, "click", 4, "ngIf"], ["class", "border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-xl p-12 text-center transition-all cursor-pointer hover:border-indigo-400 hover:bg-slate-50 dark:hover:bg-slate-800/50", 3, "ngClass", "dragover", "dragleave", "drop", 4, "ngIf"], ["class", "space-y-4", 4, "ngIf"], ["class", "bg-white dark:bg-slate-900 rounded-xl border p-6", 3, "ngClass", 4, "ngIf"], ["class", "bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-6 text-white", 4, "ngIf"], [1, "flex", "items-center", "justify-between", "pt-4"], ["mat-button", "", 3, "click"], [3, "matTooltip"], ["mat-flat-button", "", "color", "primary", 1, "!px-8", 3, "click", "disabled"], ["diameter", "20", "class", "mr-2", 4, "ngIf"], ["class", "mr-2", 4, "ngIf"], [1, "p-6", "space-y-6"], [1, "flex", "items-start", "gap-4", "p-4", "bg-white/60", "dark:bg-slate-800/40", "rounded-lg", "border", "border-white", "dark:border-slate-700"], [1, "shrink-0", "w-8", "h-8", "rounded-full", "bg-green-100", "dark:bg-green-900/30", "flex", "items-center", "justify-center"], [1, "text-green-600", "dark:text-green-400", "icon-size-5"], [1, "flex-1"], [1, "font-medium", "text-slate-900", "dark:text-white", "mb-1"], [1, "text-sm", "text-slate-600", "dark:text-slate-400", "mb-3"], ["mat-flat-button", "", "color", "primary", 1, "!shadow-lg", "!shadow-indigo-500/25", 3, "click"], [1, "mr-2"], [4, "ngIf"], ["class", "text-center py-8 text-slate-500 dark:text-slate-400", 4, "ngIf"], [1, "flex", "items-start", "gap-3", "p-4", "bg-amber-50", "dark:bg-amber-900/20", "rounded-lg", "border", "border-amber-200", "dark:border-amber-800/50"], [1, "text-amber-500", "shrink-0"], [1, "text-sm", "text-amber-700", "dark:text-amber-300"], [1, "text-sm", "font-semibold", "text-slate-700", "dark:text-slate-300", "uppercase", "tracking-wider", "mb-3"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "lg:grid-cols-3", "gap-3"], ["class", "flex items-start gap-3 p-3 bg-white/80 dark:bg-slate-800/60 rounded-lg border", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "flex", "items-start", "gap-3", "p-3", "bg-white/80", "dark:bg-slate-800/60", "rounded-lg", "border", 3, "ngClass"], [1, "shrink-0", "w-6", "h-6", "rounded-full", "flex", "items-center", "justify-center", "text-xs", "font-bold", 3, "ngClass"], ["class", "icon-size-4", 4, "ngIf"], [1, "flex-1", "min-w-0"], [1, "flex", "items-center", "gap-2", "flex-wrap"], [1, "text-sm", "font-medium", "text-slate-900", "dark:text-white", "bg-slate-100", "dark:bg-slate-700", "px-1.5", "py-0.5", "rounded"], ["class", "text-[10px] font-bold uppercase text-orange-600 dark:text-orange-400", 4, "ngIf"], ["class", "text-[10px] font-medium uppercase text-slate-400", 4, "ngIf"], ["class", "text-[10px] font-medium uppercase text-purple-600 dark:text-purple-400", 4, "ngIf"], [1, "text-xs", "text-slate-500", "dark:text-slate-400", "mt-1"], ["class", "mt-2 flex flex-wrap gap-1", 4, "ngIf"], [1, "icon-size-4"], [1, "text-[10px]", "font-bold", "uppercase", "text-orange-600", "dark:text-orange-400"], [1, "text-[10px]", "font-medium", "uppercase", "text-slate-400"], [1, "text-[10px]", "font-medium", "uppercase", "text-purple-600", "dark:text-purple-400"], [1, "mt-2", "flex", "flex-wrap", "gap-1"], ["class", "text-[10px] px-1.5 py-0.5 rounded bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800/50", 4, "ngFor", "ngForOf"], [1, "text-[10px]", "px-1.5", "py-0.5", "rounded", "bg-purple-50", "dark:bg-purple-900/20", "text-purple-700", "dark:text-purple-300", "border", "border-purple-200", "dark:border-purple-800/50"], [1, "text-center", "py-8", "text-slate-500", "dark:text-slate-400"], [1, "icon-size-12", "mb-2", "opacity-50"], ["mat-stroked-button", "", "color", "primary", 1, "!text-sm", 3, "click"], [1, "mr-1", "icon-size-5"], [1, "border-2", "border-dashed", "border-slate-300", "dark:border-slate-700", "rounded-xl", "p-12", "text-center", "transition-all", "cursor-pointer", "hover:border-indigo-400", "hover:bg-slate-50", "dark:hover:bg-slate-800/50", 3, "dragover", "dragleave", "drop", "ngClass"], ["type", "file", "id", "fileInput", 1, "hidden", 3, "change", "accept"], ["for", "fileInput", 1, "cursor-pointer"], [1, "w-16", "h-16", "mx-auto", "mb-4", "rounded-full", "bg-slate-100", "dark:bg-slate-800", "flex", "items-center", "justify-center"], [1, "text-slate-400", "icon-size-8"], [1, "text-lg", "font-medium", "text-slate-900", "dark:text-white", "mb-1"], [1, "text-sm", "text-slate-500"], [1, "space-y-4"], [1, "flex", "items-center", "gap-4", "p-4", "bg-slate-50", "dark:bg-slate-800/50", "rounded-lg"], [1, "w-12", "h-12", "rounded-lg", "bg-indigo-100", "dark:bg-indigo-900/30", "flex", "items-center", "justify-center"], [1, "font-medium", "text-slate-900", "dark:text-white"], ["mat-icon-button", "", 3, "click", "matTooltip"], ["class", "flex items-start gap-3 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg", 4, "ngIf"], ["class", "flex items-center gap-3 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg", 4, "ngIf"], [1, "flex", "items-start", "gap-3", "p-4", "bg-red-50", "dark:bg-red-900/20", "border", "border-red-200", "dark:border-red-800", "rounded-lg"], [1, "text-red-600", "dark:text-red-400", "shrink-0"], [1, "text-red-700", "dark:text-red-300", "font-medium"], ["mat-button", "", "color", "primary", 1, "!mt-2", "!-ml-4", 3, "click"], [1, "mr-1"], [1, "flex", "items-center", "gap-3", "p-4", "bg-green-50", "dark:bg-green-900/20", "border", "border-green-200", "dark:border-green-800", "rounded-lg"], [1, "text-green-600", "dark:text-green-400"], [1, "font-medium", "text-green-700", "dark:text-green-300"], [1, "text-sm", "text-green-600", "dark:text-green-400"], [1, "bg-white", "dark:bg-slate-900", "rounded-xl", "border", "p-6", 3, "ngClass"], ["class", "inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400", 4, "ngIf"], ["class", "flex flex-wrap items-center gap-4 mb-4 p-3 bg-red-50 dark:bg-red-900/10 rounded-lg border border-red-200 dark:border-red-800/50", 4, "ngIf"], [1, "overflow-x-auto"], [1, "w-full", "text-sm"], [1, "bg-slate-50", "dark:bg-slate-800/50"], [1, "text-left", "px-2", "py-2", "font-medium", "text-slate-500", "dark:text-slate-500", "w-10"], ["class", "text-left px-4 py-2 font-medium text-slate-600 dark:text-slate-400 whitespace-nowrap", 4, "ngFor", "ngForOf"], ["class", "border-t", 3, "ngClass", 4, "ngFor", "ngForOf"], ["class", "mt-4 p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-800/50 text-sm text-amber-700 dark:text-amber-300", 4, "ngIf"], [1, "inline-flex", "items-center", "gap-1", "px-2", "py-0.5", "rounded-full", "text-xs", "font-medium", "bg-red-100", "text-red-700", "dark:bg-red-900/30", "dark:text-red-400"], [1, "icon-size-3"], [1, "flex", "flex-wrap", "items-center", "gap-4", "mb-4", "p-3", "bg-red-50", "dark:bg-red-900/10", "rounded-lg", "border", "border-red-200", "dark:border-red-800/50"], [1, "text-sm", "text-red-700", "dark:text-red-300", "font-medium"], [1, "icon-size-4", "align-middle", "mr-1"], [1, "flex", "items-center", "gap-4", "text-xs"], ["class", "flex items-center gap-1.5", 4, "ngIf"], [1, "flex", "items-center", "gap-1.5"], [1, "w-3", "h-3", "rounded-sm", "bg-orange-400"], [1, "w-3", "h-3", "rounded-sm", "bg-red-500"], [1, "text-left", "px-4", "py-2", "font-medium", "text-slate-600", "dark:text-slate-400", "whitespace-nowrap"], [1, "border-t", 3, "ngClass"], [1, "px-2", "py-2", "text-slate-400", "text-xs", "font-mono"], [1, "flex", "items-center", "gap-1"], ["class", "text-red-500 icon-size-4", 3, "matTooltip", 4, "ngIf"], ["class", "px-4 py-2 whitespace-nowrap max-w-xs truncate relative", 3, "ngClass", "matTooltip", "matTooltipDisabled", 4, "ngFor", "ngForOf"], [1, "text-red-500", "icon-size-4", 3, "matTooltip"], [1, "px-4", "py-2", "whitespace-nowrap", "max-w-xs", "truncate", "relative", 3, "ngClass", "matTooltip", "matTooltipDisabled"], ["class", "icon-size-4 shrink-0", 3, "ngClass", 4, "ngIf"], [1, "icon-size-4", "shrink-0", 3, "ngClass"], [1, "mt-4", "p-3", "bg-amber-50", "dark:bg-amber-900/20", "rounded-lg", "border", "border-amber-200", "dark:border-amber-800/50", "text-sm", "text-amber-700", "dark:text-amber-300"], [1, "bg-gradient-to-r", "from-indigo-500", "to-purple-600", "rounded-xl", "p-6", "text-white"], [1, "text-indigo-100", "text-sm"], [1, "text-3xl", "font-bold"], [1, "text-right"], [1, "text-lg"], ["diameter", "20", 1, "mr-2"]], template: function CreateBatchComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3);
        \u0275\u0275listener("click", function CreateBatchComponent_Template_button_click_3_listener() {
          return ctx.goBack();
        });
        \u0275\u0275elementStart(4, "mat-icon");
        \u0275\u0275text(5, "arrow_back");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div")(7, "h1", 4);
        \u0275\u0275text(8);
        \u0275\u0275pipe(9, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "p", 5);
        \u0275\u0275text(11);
        \u0275\u0275pipe(12, "transloco");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(13, "button", 6);
        \u0275\u0275pipe(14, "transloco");
        \u0275\u0275listener("click", function CreateBatchComponent_Template_button_click_13_listener() {
          return ctx.openTutorial();
        });
        \u0275\u0275elementStart(15, "mat-icon", 7);
        \u0275\u0275text(16, "help_outline");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(17, CreateBatchComponent_div_17_Template, 5, 3, "div", 8)(18, CreateBatchComponent_div_18_Template, 50, 43, "div", 9);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        let tmp_1_0;
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 5, "createBatch.createNewBatch"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(12, 7, "createBatch.uploadDataWith", \u0275\u0275pureFunction1(12, _c02, ((tmp_1_0 = ctx.configuration()) == null ? null : tmp_1_0.name) || "")), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(14, 10, "createBatch.showTutorial"));
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", ctx.isLoading());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isLoading());
      }
    }, dependencies: [
      CommonModule,
      NgClass,
      NgForOf,
      NgIf,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      ReactiveFormsModule,
      FormControlDirective,
      RouterModule,
      MatButtonModule,
      MatButton,
      MatIconButton,
      MatDialogModule,
      MatIconModule,
      MatIcon,
      MatInputModule,
      MatInput,
      MatFormField,
      MatLabel,
      MatHint,
      MatFormFieldModule,
      MatProgressBarModule,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatTableModule,
      MatTooltipModule,
      MatTooltip,
      TranslocoModule,
      TranslocoPipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CreateBatchComponent, [{
    type: Component,
    args: [{ selector: "create-batch", standalone: true, imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule,
      MatButtonModule,
      MatDialogModule,
      MatIconModule,
      MatInputModule,
      MatFormFieldModule,
      MatProgressBarModule,
      MatProgressSpinnerModule,
      MatTableModule,
      MatTooltipModule,
      TranslocoModule
    ], encapsulation: ViewEncapsulation.None, template: `<div class="flex flex-col w-full h-full bg-[#f8fafc] dark:bg-[#0f172a] p-6 gap-6">
    <!-- Header -->
    <div class="flex items-center justify-between">
        <div class="flex items-center gap-4">
            <button
                mat-icon-button
                (click)="goBack()"
                class="!bg-white dark:!bg-slate-800 !shadow-sm"
            >
                <mat-icon>arrow_back</mat-icon>
            </button>
            <div>
                <h1 class="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                    {{ 'createBatch.createNewBatch' | transloco }}
                </h1>
                <p class="text-slate-500 dark:text-slate-400">
                    {{ 'createBatch.uploadDataWith' | transloco: { name: configuration()?.name || '' } }}
                </p>
            </div>
        </div>
        <!-- Help Button -->
        <button
            mat-icon-button
            (click)="openTutorial()"
            [matTooltip]="'createBatch.showTutorial' | transloco"
            class="!bg-white dark:!bg-slate-800 !shadow-sm hover:!bg-indigo-50 dark:hover:!bg-indigo-900/30"
        >
            <mat-icon class="text-indigo-600 dark:text-indigo-400">help_outline</mat-icon>
        </button>
    </div>

    <!-- Loading State -->
    <div *ngIf="isLoading()" class="flex flex-col items-center justify-center flex-1">
        <mat-spinner diameter="48"></mat-spinner>
        <p class="mt-4 text-slate-500">{{ 'createBatch.loadingConfiguration' | transloco }}</p>
    </div>

    <!-- Main Content -->
    <div *ngIf="!isLoading()" class="flex flex-col gap-6 max-w-4xl">
        <!-- Required Fields Instructions Panel -->
        <div
            class="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl border border-indigo-200 dark:border-indigo-800/50 overflow-hidden"
        >
            <!-- Header with toggle -->
            <div
                class="flex items-center justify-between px-6 py-4 bg-white/50 dark:bg-slate-900/50 border-b border-indigo-100 dark:border-indigo-800/30 cursor-pointer"
                (click)="toggleRequiredFieldsPanel()"
            >
                <div class="flex items-center gap-3">
                    <div
                        class="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/25"
                    >
                        <mat-icon class="text-white">info</mat-icon>
                    </div>
                    <div>
                        <h2 class="text-lg font-semibold text-slate-900 dark:text-white">
                            {{ 'createBatch.csvFileRequirements' | transloco }}
                        </h2>
                        <p class="text-sm text-slate-500 dark:text-slate-400">
                            {{ 'createBatch.requiredFieldsCount' | transloco: { count: templateFields().length } }}
                        </p>
                    </div>
                </div>
                <mat-icon
                    class="text-slate-400 transition-transform"
                    [class.rotate-180]="showRequiredFieldsPanel()"
                >
                    expand_more
                </mat-icon>
            </div>

            <!-- Expandable content -->
            <div *ngIf="showRequiredFieldsPanel()" class="p-6 space-y-6">
                <!-- Quick Start -->
                <div
                    class="flex items-start gap-4 p-4 bg-white/60 dark:bg-slate-800/40 rounded-lg border border-white dark:border-slate-700"
                >
                    <div
                        class="shrink-0 w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center"
                    >
                        <mat-icon class="text-green-600 dark:text-green-400 icon-size-5"
                            >rocket_launch</mat-icon
                        >
                    </div>
                    <div class="flex-1">
                        <h4 class="font-medium text-slate-900 dark:text-white mb-1">{{ 'createBatch.quickStart' | transloco }}</h4>
                        <p class="text-sm text-slate-600 dark:text-slate-400 mb-3">
                            {{ 'createBatch.quickStartDesc' | transloco }}
                        </p>
                        <button
                            mat-flat-button
                            color="primary"
                            (click)="downloadTemplate(); $event.stopPropagation()"
                            class="!shadow-lg !shadow-indigo-500/25"
                        >
                            <mat-icon class="mr-2">download</mat-icon>
                            {{ 'createBatch.downloadCsvTemplate' | transloco }}
                        </button>
                    </div>
                </div>

                <!-- Required Fields Grid -->
                <div *ngIf="requiredFields().length > 0">
                    <h4
                        class="text-sm font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-3"
                    >
                        {{ 'createBatch.requiredFields' | transloco }}
                    </h4>
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        <div
                            *ngFor="let field of requiredFields()"
                            class="flex items-start gap-3 p-3 bg-white/80 dark:bg-slate-800/60 rounded-lg border"
                            [ngClass]="
                                field.required
                                    ? 'border-orange-200 dark:border-orange-800/50'
                                    : 'border-slate-200 dark:border-slate-700'
                            "
                        >
                            <div
                                class="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                                [ngClass]="
                                    field.required
                                        ? 'bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400'
                                        : 'bg-slate-100 text-slate-500 dark:bg-slate-700'
                                "
                            >
                                <mat-icon *ngIf="field.required" class="icon-size-4"
                                    >priority_high</mat-icon
                                >
                                <mat-icon *ngIf="!field.required" class="icon-size-4"
                                    >remove</mat-icon
                                >
                            </div>
                            <div class="flex-1 min-w-0">
                                <div class="flex items-center gap-2 flex-wrap">
                                    <code
                                        class="text-sm font-medium text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-700 px-1.5 py-0.5 rounded"
                                        >{{ field.field }}</code
                                    >
                                    <span
                                        *ngIf="field.required"
                                        class="text-[10px] font-bold uppercase text-orange-600 dark:text-orange-400"
                                        >{{ 'createBatch.required' | transloco }}</span
                                    >
                                    <span
                                        *ngIf="!field.required"
                                        class="text-[10px] font-medium uppercase text-slate-400"
                                        >{{ 'createBatch.optional' | transloco }}</span
                                    >
                                    <!-- Enum indicator -->
                                    <span
                                        *ngIf="field.enumValues?.length"
                                        class="text-[10px] font-medium uppercase text-purple-600 dark:text-purple-400"
                                    >
                                        \u2022 {{ 'createBatch.options' | transloco }}
                                    </span>
                                </div>
                                <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">
                                    {{ 'createBatch.usedBy' | transloco: { stepName: field.stepName } }}
                                </p>
                                <!-- Show enum values -->
                                <div
                                    *ngIf="field.enumValues?.length"
                                    class="mt-2 flex flex-wrap gap-1"
                                >
                                    <span
                                        *ngFor="let val of field.enumValues"
                                        class="text-[10px] px-1.5 py-0.5 rounded bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800/50"
                                    >
                                        {{ val }}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- No fields message -->
                <div
                    *ngIf="requiredFields().length === 0"
                    class="text-center py-8 text-slate-500 dark:text-slate-400"
                >
                    <mat-icon class="icon-size-12 mb-2 opacity-50">table_chart</mat-icon>
                    <p>{{ 'createBatch.noFieldsRequired' | transloco }}</p>
                </div>

                <!-- Tips -->
                <div
                    class="flex items-start gap-3 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-800/50"
                >
                    <mat-icon class="text-amber-500 shrink-0">lightbulb</mat-icon>
                    <div class="text-sm text-amber-700 dark:text-amber-300">
                        {{ 'createBatch.proTip' | transloco }}
                    </div>
                </div>
            </div>
        </div>

        <!-- Batch Name -->
        <div
            class="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6"
        >
            <h2 class="text-lg font-semibold text-slate-900 dark:text-white mb-4">{{ 'createBatch.batchDetails' | transloco }}</h2>
            <mat-form-field class="w-full" appearance="outline">
                <mat-label>{{ 'createBatch.batchName' | transloco }}</mat-label>
                <input
                    matInput
                    [formControl]="$any(batchForm.get('name'))"
                    [placeholder]="'createBatch.batchNamePlaceholder' | transloco"
                />
                <mat-hint>{{ 'createBatch.batchNameHint' | transloco }}</mat-hint>
            </mat-form-field>
        </div>

        <!-- File Upload -->
        <div
            class="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6"
        >
            <div class="flex items-center justify-between mb-4">
                <h2 class="text-lg font-semibold text-slate-900 dark:text-white">{{ 'createBatch.uploadData' | transloco }}</h2>
                <button
                    *ngIf="!selectedFile()"
                    mat-stroked-button
                    color="primary"
                    (click)="downloadTemplate()"
                    class="!text-sm"
                >
                    <mat-icon class="mr-1 icon-size-5">download</mat-icon>
                    {{ 'createBatch.template' | transloco }}
                </button>
            </div>

            <!-- Drop Zone -->
            <div
                *ngIf="!selectedFile()"
                (dragover)="onDragOver($event)"
                (dragleave)="onDragLeave($event)"
                (drop)="onDrop($event)"
                [ngClass]="{ 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20': isDragging() }"
                class="border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-xl p-12 text-center transition-all cursor-pointer hover:border-indigo-400 hover:bg-slate-50 dark:hover:bg-slate-800/50"
            >
                <input
                    type="file"
                    id="fileInput"
                    class="hidden"
                    [accept]="acceptedFormats()"
                    (change)="onFileSelected($event)"
                />
                <label for="fileInput" class="cursor-pointer">
                    <div
                        class="w-16 h-16 mx-auto mb-4 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center"
                    >
                        <mat-icon class="text-slate-400 icon-size-8">cloud_upload</mat-icon>
                    </div>
                    <p class="text-lg font-medium text-slate-900 dark:text-white mb-1">
                        {{ 'createBatch.dropOrClick' | transloco }}
                    </p>
                    <p class="text-sm text-slate-500">
                        {{ 'createBatch.acceptsFiles' | transloco: { formats: configuration()?.inputFormat?.toUpperCase() || 'CSV, XLSX, JSONL' } }}
                    </p>
                </label>
            </div>

            <!-- Selected File -->
            <div *ngIf="selectedFile()" class="space-y-4">
                <div
                    class="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg"
                >
                    <div
                        class="w-12 h-12 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center"
                    >
                        <mat-icon class="text-indigo-600 dark:text-indigo-400"
                            >description</mat-icon
                        >
                    </div>
                    <div class="flex-1">
                        <p class="font-medium text-slate-900 dark:text-white">
                            {{ selectedFile()?.name }}
                        </p>
                        <p class="text-sm text-slate-500">
                            {{ formatFileSize(selectedFile()?.size || 0) }}
                        </p>
                    </div>
                    <button mat-icon-button (click)="removeFile()" [matTooltip]="'createBatch.removeFile' | transloco">
                        <mat-icon>close</mat-icon>
                    </button>
                </div>

                <!-- Parse Error -->
                <div
                    *ngIf="parseError()"
                    class="flex items-start gap-3 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg"
                >
                    <mat-icon class="text-red-600 dark:text-red-400 shrink-0">error</mat-icon>
                    <div>
                        <p class="text-red-700 dark:text-red-300 font-medium">{{ parseError() }}</p>
                        <button
                            mat-button
                            color="primary"
                            class="!mt-2 !-ml-4"
                            (click)="downloadTemplate()"
                        >
                            <mat-icon class="mr-1">download</mat-icon>
                            {{ 'createBatch.downloadCsvTemplate' | transloco }}
                        </button>
                    </div>
                </div>

                <!-- Success Info -->
                <div
                    *ngIf="parsedRows().length > 0 && !parseError()"
                    class="flex items-center gap-3 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg"
                >
                    <mat-icon class="text-green-600 dark:text-green-400">check_circle</mat-icon>
                    <div>
                        <p class="font-medium text-green-700 dark:text-green-300">
                            {{ 'createBatch.rowsParsedSuccess' | transloco: { count: parsedRows().length } }}
                        </p>
                        <p class="text-sm text-green-600 dark:text-green-400">
                            {{ 'createBatch.columnsDetected' | transloco: { count: previewColumns().length } }}
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Data Preview (show even with errors so user can see highlighted issues) -->
        <div
            *ngIf="parsedRows().length > 0"
            class="bg-white dark:bg-slate-900 rounded-xl border p-6"
            [ngClass]="
                parseError()
                    ? 'border-red-300 dark:border-red-800'
                    : 'border-slate-200 dark:border-slate-800'
            "
        >
            <div class="flex items-center justify-between mb-4">
                <div class="flex items-center gap-3">
                    <h2 class="text-lg font-semibold text-slate-900 dark:text-white">
                        {{ 'createBatch.dataPreview' | transloco }}
                    </h2>
                    <!-- Error badge -->
                    <span
                        *ngIf="errorSummary()"
                        class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                    >
                        <mat-icon class="icon-size-3">error</mat-icon>
                        {{ 'createBatch.issuesCount' | transloco: { count: errorSummary()?.totalErrors || 0 } }}
                    </span>
                </div>
                <span class="text-sm text-slate-500">
                    Showing first {{ parsedRows().length > 10 ? 10 : parsedRows().length }} of
                    {{ parsedRows().length }} rows
                </span>
            </div>

            <!-- Error summary legend -->
            <div
                *ngIf="errorSummary()"
                class="flex flex-wrap items-center gap-4 mb-4 p-3 bg-red-50 dark:bg-red-900/10 rounded-lg border border-red-200 dark:border-red-800/50"
            >
                <span class="text-sm text-red-700 dark:text-red-300 font-medium">
                    <mat-icon class="icon-size-4 align-middle mr-1">warning</mat-icon>
                    {{ 'createBatch.fixHighlightedCells' | transloco }}
                </span>
                <div class="flex items-center gap-4 text-xs">
                    <span *ngIf="errorSummary()?.missingCount" class="flex items-center gap-1.5">
                        <span class="w-3 h-3 rounded-sm bg-orange-400"></span>
                        {{ 'createBatch.missingValues' | transloco: { count: errorSummary()?.missingCount || 0 } }}
                    </span>
                    <span
                        *ngIf="errorSummary()?.invalidEnumCount"
                        class="flex items-center gap-1.5"
                    >
                        <span class="w-3 h-3 rounded-sm bg-red-500"></span>
                        {{ 'createBatch.invalidValues' | transloco: { count: errorSummary()?.invalidEnumCount || 0 } }}
                    </span>
                </div>
            </div>

            <div class="overflow-x-auto">
                <table class="w-full text-sm">
                    <thead>
                        <tr class="bg-slate-50 dark:bg-slate-800/50">
                            <!-- Row indicator -->
                            <th
                                class="text-left px-2 py-2 font-medium text-slate-500 dark:text-slate-500 w-10"
                            >
                                #
                            </th>
                            <th
                                *ngFor="let col of previewColumns()"
                                class="text-left px-4 py-2 font-medium text-slate-600 dark:text-slate-400 whitespace-nowrap"
                            >
                                {{ col }}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            *ngFor="let row of parsedRows().slice(0, 10); let i = index"
                            class="border-t"
                            [ngClass]="
                                rowHasErrors(i)
                                    ? 'border-red-200 dark:border-red-800 bg-red-50/30 dark:bg-red-900/10'
                                    : 'border-slate-100 dark:border-slate-800'
                            "
                        >
                            <!-- Row number with error indicator -->
                            <td class="px-2 py-2 text-slate-400 text-xs font-mono">
                                <span class="flex items-center gap-1">
                                    {{ i + 1 }}
                                    <mat-icon
                                        *ngIf="rowHasErrors(i)"
                                        class="text-red-500 icon-size-4"
                                        [matTooltip]="'createBatch.errorsInRow' | transloco: { count: getRowErrors(i).length }"
                                    >
                                        error_outline
                                    </mat-icon>
                                </span>
                            </td>
                            <!-- Data cells with error highlighting -->
                            <td
                                *ngFor="let col of previewColumns()"
                                class="px-4 py-2 whitespace-nowrap max-w-xs truncate relative"
                                [ngClass]="{
                                    'bg-orange-100 dark:bg-orange-900/30 border-l-4 border-l-orange-400':
                                        getCellError(i, col)?.type === 'missing',
                                    'bg-red-100 dark:bg-red-900/30 border-l-4 border-l-red-500':
                                        getCellError(i, col)?.type === 'invalid_enum',
                                    'text-slate-700 dark:text-slate-300': !getCellError(i, col),
                                    'text-red-800 dark:text-red-300 font-medium': getCellError(
                                        i,
                                        col
                                    ),
                                }"
                                [matTooltip]="getCellError(i, col)?.message || ''"
                                [matTooltipDisabled]="!getCellError(i, col)"
                            >
                                <span class="flex items-center gap-1">
                                    <span>{{
                                        row[col] ||
                                            (getCellError(i, col)?.type === 'missing'
                                                ? '(empty)'
                                                : '-')
                                    }}</span>
                                    <mat-icon
                                        *ngIf="getCellError(i, col)"
                                        class="icon-size-4 shrink-0"
                                        [ngClass]="
                                            getCellError(i, col)?.type === 'missing'
                                                ? 'text-orange-500'
                                                : 'text-red-500'
                                        "
                                    >
                                        {{
                                            getCellError(i, col)?.type === 'missing'
                                                ? 'warning'
                                                : 'error'
                                        }}
                                    </mat-icon>
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- Show if more rows have errors -->
            <div
                *ngIf="errorSummary() && errorSummary()!.rowsWithErrors > 10"
                class="mt-4 p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-800/50 text-sm text-amber-700 dark:text-amber-300"
            >
                <mat-icon class="icon-size-4 align-middle mr-1">info</mat-icon>
                {{ 'createBatch.moreRowsHaveErrors' | transloco: { count: errorSummary()!.rowsWithErrors - 10 } }}
            </div>
        </div>

        <!-- Cost Estimate -->
        <div
            *ngIf="parsedRows().length > 0 && !parseError()"
            class="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-6 text-white"
        >
            <div class="flex items-center justify-between">
                <div>
                    <p class="text-indigo-100 text-sm">{{ 'createBatch.estimatedCost' | transloco }}</p>
                    <p class="text-3xl font-bold">\${{ estimatedCost().toFixed(2) }}</p>
                </div>
                <div class="text-right">
                    <p class="text-indigo-100 text-sm">{{ parsedRows().length }} {{ 'createBatch.rows' | transloco }}</p>
                    <p class="text-lg">\xD7 {{ configuration()?.steps?.length || 0 }} {{ 'createBatch.steps' | transloco }}</p>
                </div>
            </div>
        </div>

        <!-- Actions -->
        <div class="flex items-center justify-between pt-4">
            <button mat-button (click)="goBack()">{{ 'createBatch.cancel' | transloco }}</button>
            <span
                [matTooltip]="
                    (!hasValidData() || parseError()) && createBatchDisabledReason()
                        ? createBatchDisabledReason()
                        : ''
                "
            >
                <button
                    mat-flat-button
                    color="primary"
                    [disabled]="!hasValidData() || isSubmitting() || parseError()"
                    (click)="submit()"
                    class="!px-8"
                >
                    <mat-spinner *ngIf="isSubmitting()" diameter="20" class="mr-2"></mat-spinner>
                    <mat-icon *ngIf="!isSubmitting()" class="mr-2">rocket_launch</mat-icon>
                    {{ (isSubmitting() ? 'createBatch.creating' : 'createBatch.createBatch') | transloco }}
                </button>
            </span>
        </div>
    </div>
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CreateBatchComponent, { className: "CreateBatchComponent", filePath: "src/app/modules/smart-batch/dashboard/create-batch/create-batch.component.ts", lineNumber: 74 });
})();
export {
  CreateBatchComponent
};
//# sourceMappingURL=chunk-NGUSLL6U.js.map
