import {
  MatTableModule
} from "./chunk-O62F2O7Q.js";
import {
  getBatchInputCsvHeaders
} from "./chunk-2M2KHA7S.js";
import {
  readSync,
  utils
} from "./chunk-D7QPQFDG.js";
import {
  SmartBatchService
} from "./chunk-OZON7ZNM.js";
import {
  MatProgressBarModule
} from "./chunk-O7Z3HN3Z.js";
import {
  isClientVisibleBatchDependencyField,
  stripClientHiddenRowFields
} from "./chunk-RYDKXTHD.js";
import "./chunk-H3UX3NVF.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-FD5UKZMK.js";
import {
  MatDialog,
  MatDialogModule,
  MatDialogRef
} from "./chunk-P2CAABEU.js";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-NLVEQCVI.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-BY4NG7V4.js";
import {
  MatFormField,
  MatFormFieldModule,
  MatHint,
  MatLabel
} from "./chunk-RNRTLQ3J.js";
import "./chunk-6OJR6OMX.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlDirective,
  FormsModule,
  NgControlStatus,
  ReactiveFormsModule,
  Validators
} from "./chunk-S7CME3IL.js";
import "./chunk-OIBNGD5S.js";
import {
  TranslocoModule,
  TranslocoPipe,
  TranslocoService,
  toSignal
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
  NgTemplateOutlet,
  ViewEncapsulation,
  computed,
  distinctUntilChanged,
  inject,
  map,
  setClassMetadata,
  signal,
  startWith,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
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
  ɵɵpureFunction4,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-LLRZIRCV.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KTESVR3Q.js";

// src/app/core/utils/csv-parse.util.ts
var CSV_DELIMITER_CANDIDATES = [",", ";", "	"];
var stripBom = (text) => text.charCodeAt(0) === 65279 ? text.slice(1) : text;
var parseCSVLine = (line, delimiter) => {
  const result = [];
  let current = "";
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === delimiter && !inQuotes) {
      result.push(current.trim());
      current = "";
    } else {
      current += char;
    }
  }
  result.push(current.trim());
  return result;
};
var delimiterPreferenceOrder = (d) => d === "," ? 0 : d === ";" ? 1 : 2;
var scoreCsvDelimiter = (lines, delimiter) => {
  if (!lines.length)
    return -1;
  const header = parseCSVLine(lines[0], delimiter);
  if (!header.some((cell) => cell.trim()))
    return -1;
  const headerLen = header.length;
  let matches = 0;
  for (let i = 1; i < lines.length; i++) {
    if (parseCSVLine(lines[i], delimiter).length === headerLen) {
      matches++;
    }
  }
  if (headerLen === 1) {
    return matches;
  }
  return matches * 1e4 + headerLen;
};
var detectBestCsvDelimiter = (lines) => {
  let best = {
    delimiter: ",",
    headerColumns: parseCSVLine(lines[0], ",").length
  };
  let bestScore = -1;
  for (const d of CSV_DELIMITER_CANDIDATES) {
    const score = scoreCsvDelimiter(lines, d);
    if (score > bestScore) {
      bestScore = score;
      best = {
        delimiter: d,
        headerColumns: parseCSVLine(lines[0], d).length
      };
    } else if (score === bestScore && score >= 0) {
      const currentRank = delimiterPreferenceOrder(best.delimiter);
      const candidateRank = delimiterPreferenceOrder(d);
      if (candidateRank < currentRank) {
        best = {
          delimiter: d,
          headerColumns: parseCSVLine(lines[0], d).length
        };
      }
    }
  }
  return best;
};
var getDelimiterMismatchHintKind = (headerLine, parsedColumnCount) => {
  if (parsedColumnCount !== 1)
    return null;
  const semiCount = parseCSVLine(headerLine, ";").length;
  const tabCount = parseCSVLine(headerLine, "	").length;
  if (semiCount >= 2)
    return "semicolon";
  if (tabCount >= 2)
    return "tab";
  return null;
};

// src/app/core/utils/spreadsheet-sanitize.util.ts
var EMPTY_PLACEHOLDERS = /* @__PURE__ */ new Set(["-", "n/a", "na"]);
var cellIsEmptyForTrim = (value, options = {}) => {
  if (value === null || value === void 0)
    return true;
  const normalizedValue = String(value).trim();
  if (!normalizedValue)
    return true;
  if (!options.treatPlaceholdersAsEmpty)
    return false;
  return EMPTY_PLACEHOLDERS.has(normalizedValue.toLowerCase());
};
var sanitizeMatrix = (rows, options = {}) => {
  const nonEmptyRows = rows.filter((row) => !isMatrixRowEmpty(row, options));
  if (!nonEmptyRows.length) {
    return { rows: [] };
  }
  const columnRange = getMatrixColumnRange(nonEmptyRows, options);
  if (!columnRange) {
    return { rows: [] };
  }
  return {
    rows: nonEmptyRows.map((row) => row.slice(columnRange.firstColumnIndex, columnRange.lastColumnIndex + 1))
  };
};
var sanitizePapaObjectRows = (rows, fields, options = {}) => {
  const fieldOrder = getFieldOrder(rows, fields);
  const nonEmptyRows = rows.filter((row) => !isObjectRowEmpty(row, fieldOrder, options));
  if (!nonEmptyRows.length) {
    return { fieldOrder: [], rows: [] };
  }
  const columnRange = getObjectColumnRange(nonEmptyRows, fieldOrder, options);
  if (!columnRange) {
    return { fieldOrder: [], rows: [] };
  }
  const trimmedFieldOrder = fieldOrder.slice(columnRange.firstColumnIndex, columnRange.lastColumnIndex + 1);
  return {
    fieldOrder: trimmedFieldOrder,
    rows: nonEmptyRows.map((row) => copyFields(row, trimmedFieldOrder))
  };
};
var copyFields = (row, fields) => {
  const copiedRow = {};
  fields.forEach((field) => {
    copiedRow[field] = row[field];
  });
  return copiedRow;
};
var getFieldOrder = (rows, fields) => {
  if (fields?.length)
    return fields;
  const firstRow = rows.find((row) => row && typeof row === "object");
  return firstRow ? Object.keys(firstRow).filter((key) => key !== "__parsed_extra") : [];
};
var getMatrixColumnRange = (rows, options) => {
  const maxColumnLength = rows.reduce((maxLength, row) => Math.max(maxLength, row.length), 0);
  let firstColumnIndex = -1;
  let lastColumnIndex = -1;
  for (let columnIndex = 0; columnIndex < maxColumnLength; columnIndex++) {
    const hasValue = rows.some((row) => !cellIsEmptyForTrim(row[columnIndex], options));
    if (!hasValue)
      continue;
    if (firstColumnIndex === -1)
      firstColumnIndex = columnIndex;
    lastColumnIndex = columnIndex;
  }
  if (firstColumnIndex === -1)
    return null;
  return { firstColumnIndex, lastColumnIndex };
};
var getObjectColumnRange = (rows, fields, options) => {
  let firstColumnIndex = -1;
  let lastColumnIndex = -1;
  fields.forEach((field, columnIndex) => {
    const hasValue = rows.some((row) => !cellIsEmptyForTrim(row[field], options));
    if (!hasValue)
      return;
    if (firstColumnIndex === -1)
      firstColumnIndex = columnIndex;
    lastColumnIndex = columnIndex;
  });
  if (firstColumnIndex === -1)
    return null;
  return { firstColumnIndex, lastColumnIndex };
};
var isMatrixRowEmpty = (row, options) => row.every((cell) => cellIsEmptyForTrim(cell, options));
var isObjectRowEmpty = (row, fields, options = {}) => {
  if (!fields.length)
    return !Object.values(row).some((value) => !cellIsEmptyForTrim(value, options));
  return fields.every((field) => cellIsEmptyForTrim(row[field], options));
};

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
var _c1 = (a0) => ["/smart-batch", a0];
var _c2 = (a0, a1) => ({ required: a0, optional: a1 });
var _c3 = (a0) => ({ stepName: a0 });
var _c4 = () => [];
var _c5 = (a0, a1) => ({ whenField: a0, values: a1 });
var _c6 = (a0) => ({ field: a0 });
var _c7 = (a0) => ({ values: a0 });
var _c8 = (a0) => ({ "border-stone-500 bg-stone-50 ring-1 ring-stone-400 dark:bg-gray-800/80": a0 });
var _c9 = (a0) => ({ formats: a0 });
var _c10 = (a0) => ({ count: a0 });
var _c11 = (a0, a1, a2, a3) => ({ "border-l-4 border-l-orange-400 bg-orange-50 dark:bg-orange-950/25": a0, "border-l-4 border-l-red-500 bg-red-50 dark:bg-red-950/25": a1, "text-stone-800 dark:text-stone-200": a2, "font-medium text-red-900 dark:text-red-200": a3 });
function CreateBatchComponent_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "mat-icon", 7);
    \u0275\u0275elementStart(2, "a", 21);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c1, ctx_r0.configId()));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ((tmp_2_0 = ctx_r0.configuration()) == null ? null : tmp_2_0.name) || ctx_r0.configId(), " ");
  }
}
function CreateBatchComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275element(1, "mat-spinner", 23);
    \u0275\u0275elementStart(2, "p", 24);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "createBatch.loadingConfiguration"), " ");
  }
}
function CreateBatchComponent_ng_container_35_div_16_ng_template_17_mat_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 76);
    \u0275\u0275text(1, "priority_high");
    \u0275\u0275elementEnd();
  }
}
function CreateBatchComponent_ng_container_35_div_16_ng_template_17_mat_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 76);
    \u0275\u0275text(1, "rule_folder");
    \u0275\u0275elementEnd();
  }
}
function CreateBatchComponent_ng_container_35_div_16_ng_template_17_mat_icon_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 76);
    \u0275\u0275text(1, "remove");
    \u0275\u0275elementEnd();
  }
}
function CreateBatchComponent_ng_container_35_div_16_ng_template_17_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 77);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "createBatch.required"));
  }
}
function CreateBatchComponent_ng_container_35_div_16_ng_template_17_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 78);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "createBatch.fieldConditional"));
  }
}
function CreateBatchComponent_ng_container_35_div_16_ng_template_17_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 79);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "createBatch.optional"));
  }
}
function CreateBatchComponent_ng_container_35_div_16_ng_template_17_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 80);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u2022 ", \u0275\u0275pipeBind1(2, 1, "createBatch.options"), " ");
  }
}
function CreateBatchComponent_ng_container_35_div_16_ng_template_17_p_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 81);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_6_0;
    const field_r4 = \u0275\u0275nextContext().field;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, "createBatch.fieldConditionalDetail", \u0275\u0275pureFunction2(5, _c5, (tmp_6_0 = field_r4.requiredWhen == null ? null : field_r4.requiredWhen.field) !== null && tmp_6_0 !== void 0 ? tmp_6_0 : "", ((field_r4.requiredWhen == null ? null : field_r4.requiredWhen.in) || \u0275\u0275pureFunction0(4, _c4)).join(", "))), " ");
  }
}
function CreateBatchComponent_ng_container_35_div_16_ng_template_17_div_17_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 84);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const val_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", val_r5, " ");
  }
}
function CreateBatchComponent_ng_container_35_div_16_ng_template_17_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 82);
    \u0275\u0275template(1, CreateBatchComponent_ng_container_35_div_16_ng_template_17_div_17_span_1_Template, 2, 1, "span", 83);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const field_r4 = \u0275\u0275nextContext().field;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", field_r4.enumValues);
  }
}
function CreateBatchComponent_ng_container_35_div_16_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63)(1, "div", 64);
    \u0275\u0275template(2, CreateBatchComponent_ng_container_35_div_16_ng_template_17_mat_icon_2_Template, 2, 0, "mat-icon", 65)(3, CreateBatchComponent_ng_container_35_div_16_ng_template_17_mat_icon_3_Template, 2, 0, "mat-icon", 65)(4, CreateBatchComponent_ng_container_35_div_16_ng_template_17_mat_icon_4_Template, 2, 0, "mat-icon", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 66)(6, "div", 67)(7, "code", 68);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, CreateBatchComponent_ng_container_35_div_16_ng_template_17_span_9_Template, 3, 3, "span", 69)(10, CreateBatchComponent_ng_container_35_div_16_ng_template_17_span_10_Template, 3, 3, "span", 70)(11, CreateBatchComponent_ng_container_35_div_16_ng_template_17_span_11_Template, 3, 3, "span", 71)(12, CreateBatchComponent_ng_container_35_div_16_ng_template_17_span_12_Template, 3, 3, "span", 72);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p", 73);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, CreateBatchComponent_ng_container_35_div_16_ng_template_17_p_16_Template, 3, 8, "p", 74)(17, CreateBatchComponent_ng_container_35_div_16_ng_template_17_div_17_Template, 2, 1, "div", 75);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const field_r4 = ctx.field;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", field_r4.required ? "border-orange-200 dark:border-orange-800/50" : ctx_r0.fieldHasConditionalRule(field_r4) ? "border-sky-200 dark:border-sky-800/50" : "border-stone-200 dark:border-gray-700");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", field_r4.required ? "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400" : ctx_r0.fieldHasConditionalRule(field_r4) ? "bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300" : "bg-stone-100 text-stone-500 dark:bg-gray-700");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", field_r4.required);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !field_r4.required && ctx_r0.fieldHasConditionalRule(field_r4));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !field_r4.required && !ctx_r0.fieldHasConditionalRule(field_r4));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(field_r4.field);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", field_r4.required);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !field_r4.required && ctx_r0.fieldHasConditionalRule(field_r4));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !field_r4.required && !ctx_r0.fieldHasConditionalRule(field_r4));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", field_r4.enumValues == null ? null : field_r4.enumValues.length);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(15, 13, "createBatch.usedBy", \u0275\u0275pureFunction1(16, _c3, field_r4.stepName)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.fieldHasConditionalRule(field_r4) && !field_r4.required);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", field_r4.enumValues == null ? null : field_r4.enumValues.length);
  }
}
function CreateBatchComponent_ng_container_35_div_16_div_19_ng_container_4_ng_container_10_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function CreateBatchComponent_ng_container_35_div_16_div_19_ng_container_4_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, CreateBatchComponent_ng_container_35_div_16_div_19_ng_container_4_ng_container_10_ng_container_1_Template, 1, 0, "ng-container", 94);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const field_r6 = ctx.$implicit;
    \u0275\u0275nextContext(3);
    const expectedFieldCard_r7 = \u0275\u0275reference(18);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", expectedFieldCard_r7)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c6, field_r6));
  }
}
function CreateBatchComponent_ng_container_35_div_16_div_19_ng_container_4_p_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 95);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const values_r8 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, "createBatch.dateOfBirthConditionalHint", \u0275\u0275pureFunction1(4, _c7, values_r8)), " ");
  }
}
function CreateBatchComponent_ng_container_35_div_16_div_19_ng_container_4_ng_container_17_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function CreateBatchComponent_ng_container_35_div_16_div_19_ng_container_4_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, CreateBatchComponent_ng_container_35_div_16_div_19_ng_container_4_ng_container_17_ng_container_1_Template, 1, 0, "ng-container", 94);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const field_r9 = ctx.$implicit;
    \u0275\u0275nextContext(3);
    const expectedFieldCard_r7 = \u0275\u0275reference(18);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", expectedFieldCard_r7)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c6, field_r9));
  }
}
function CreateBatchComponent_ng_container_35_div_16_div_19_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p", 87);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 88)(5, "div", 89)(6, "h5", 90);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 91);
    \u0275\u0275template(10, CreateBatchComponent_ng_container_35_div_16_div_19_ng_container_4_ng_container_10_Template, 2, 4, "ng-container", 92);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 89)(12, "h5", 90);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, CreateBatchComponent_ng_container_35_div_16_div_19_ng_container_4_p_15_Template, 3, 6, "p", 93);
    \u0275\u0275elementStart(16, "div", 91);
    \u0275\u0275template(17, CreateBatchComponent_ng_container_35_div_16_div_19_ng_container_4_ng_container_17_Template, 2, 4, "ng-container", 92);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const xor_r10 = ctx.ngIf;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, "createBatch.searchModesIntro"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 8, "createBatch.searchModeOptionFullName"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", xor_r10.nameFields);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 10, "createBatch.searchModeOptionDocument"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", xor_r10.dobWhenValues);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", xor_r10.documentFields);
  }
}
function CreateBatchComponent_ng_container_35_div_16_div_19_ng_template_5_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function CreateBatchComponent_ng_container_35_div_16_div_19_ng_template_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, CreateBatchComponent_ng_container_35_div_16_div_19_ng_template_5_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 94);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const field_r11 = ctx.$implicit;
    \u0275\u0275nextContext(3);
    const expectedFieldCard_r7 = \u0275\u0275reference(18);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", expectedFieldCard_r7)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c6, field_r11));
  }
}
function CreateBatchComponent_ng_container_35_div_16_div_19_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 96);
    \u0275\u0275template(1, CreateBatchComponent_ng_container_35_div_16_div_19_ng_template_5_ng_container_1_Template, 2, 4, "ng-container", 92);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.requiredFields());
  }
}
function CreateBatchComponent_ng_container_35_div_16_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "h4", 85);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, CreateBatchComponent_ng_container_35_div_16_div_19_ng_container_4_Template, 18, 12, "ng-container", 86)(5, CreateBatchComponent_ng_container_35_div_16_div_19_ng_template_5_Template, 2, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const flatExpectedFields_r12 = \u0275\u0275reference(6);
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "createBatch.expectedFieldsHeading"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.xorExpectedFieldGroups())("ngIfElse", flatExpectedFields_r12);
  }
}
function CreateBatchComponent_ng_container_35_div_16_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 97)(1, "mat-icon", 98);
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
function CreateBatchComponent_ng_container_35_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 50)(1, "div", 51)(2, "div", 52)(3, "mat-icon", 53);
    \u0275\u0275text(4, "rocket_launch");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 54)(6, "h4", 55);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 56);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 57);
    \u0275\u0275listener("click", function CreateBatchComponent_ng_container_35_div_16_Template_button_click_12_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      ctx_r0.downloadTemplate();
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(13, "mat-icon", 58);
    \u0275\u0275text(14, "download");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(17, CreateBatchComponent_ng_container_35_div_16_ng_template_17_Template, 18, 18, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(19, CreateBatchComponent_ng_container_35_div_16_div_19_Template, 7, 5, "div", 9)(20, CreateBatchComponent_ng_container_35_div_16_div_20_Template, 6, 3, "div", 59);
    \u0275\u0275elementStart(21, "div", 60)(22, "mat-icon", 61);
    \u0275\u0275text(23, "lightbulb");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 62);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "transloco");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 6, "createBatch.quickStart"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 8, "createBatch.quickStartDesc"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 10, "createBatch.downloadCsvTemplate"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r0.requiredFields().length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.requiredFields().length === 0);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(26, 12, "createBatch.proTip"), " ");
  }
}
function CreateBatchComponent_ng_container_35_button_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 99);
    \u0275\u0275listener("click", function CreateBatchComponent_ng_container_35_button_35_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.downloadTemplate());
    });
    \u0275\u0275elementStart(1, "mat-icon", 100);
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
function CreateBatchComponent_ng_container_35_div_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 101);
    \u0275\u0275listener("dragover", function CreateBatchComponent_ng_container_35_div_36_Template_div_dragover_0_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onDragOver($event));
    })("dragleave", function CreateBatchComponent_ng_container_35_div_36_Template_div_dragleave_0_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onDragLeave($event));
    })("drop", function CreateBatchComponent_ng_container_35_div_36_Template_div_drop_0_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onDrop($event));
    });
    \u0275\u0275elementStart(1, "input", 102);
    \u0275\u0275listener("change", function CreateBatchComponent_ng_container_35_div_36_Template_input_change_1_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onFileSelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "label", 103)(3, "div", 104)(4, "mat-icon", 105);
    \u0275\u0275text(5, "cloud_upload");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "p", 106);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 31);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(9, _c8, ctx_r0.isDragging()));
    \u0275\u0275advance();
    \u0275\u0275property("accept", ctx_r0.acceptedFormats());
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 4, "createBatch.dropOrClick"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(11, 6, "createBatch.acceptsFiles", \u0275\u0275pureFunction1(11, _c9, ((tmp_5_0 = ctx_r0.configuration()) == null ? null : tmp_5_0.inputFormat == null ? null : tmp_5_0.inputFormat.toUpperCase()) || "CSV, XLSX, JSONL")), " ");
  }
}
function CreateBatchComponent_ng_container_35_div_37_ng_container_14_p_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 119);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const banner_r17 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", banner_r17.text, " ");
  }
}
function CreateBatchComponent_ng_container_35_div_37_ng_container_14_p_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 119);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const banner_r17 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, banner_r17.key, banner_r17.params), " ");
  }
}
function CreateBatchComponent_ng_container_35_div_37_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 114)(2, "mat-icon", 115);
    \u0275\u0275text(3, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275template(5, CreateBatchComponent_ng_container_35_div_37_ng_container_14_p_5_Template, 2, 1, "p", 116)(6, CreateBatchComponent_ng_container_35_div_37_ng_container_14_p_6_Template, 3, 4, "p", 116);
    \u0275\u0275elementStart(7, "button", 117);
    \u0275\u0275listener("click", function CreateBatchComponent_ng_container_35_div_37_ng_container_14_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.downloadTemplate());
    });
    \u0275\u0275elementStart(8, "mat-icon", 118);
    \u0275\u0275text(9, "download");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const banner_r17 = ctx.ngIf;
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", banner_r17.mode === "raw");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", banner_r17.mode === "i18n");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 3, "createBatch.downloadCsvTemplate"), " ");
  }
}
function CreateBatchComponent_ng_container_35_div_37_div_15_li_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const notice_r18 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, notice_r18.key, notice_r18.params), " ");
  }
}
function CreateBatchComponent_ng_container_35_div_37_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 120)(1, "mat-icon", 61);
    \u0275\u0275text(2, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ul", 121);
    \u0275\u0275template(4, CreateBatchComponent_ng_container_35_div_37_div_15_li_4_Template, 3, 4, "li", 92);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r0.csvParseWarnings());
  }
}
function CreateBatchComponent_ng_container_35_div_37_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 122)(1, "mat-icon", 123);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "p", 124);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 125);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 2, "createBatch.rowsParsedSuccess", \u0275\u0275pureFunction1(8, _c10, ctx_r0.parsedRows().length)), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(9, 5, "createBatch.columnsDetected", \u0275\u0275pureFunction1(10, _c10, ctx_r0.previewColumns().length)), " ");
  }
}
function CreateBatchComponent_ng_container_35_div_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 107)(1, "div", 108)(2, "div", 109)(3, "mat-icon", 29);
    \u0275\u0275text(4, "description");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 66)(6, "p", 110);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 31);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 111);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275listener("click", function CreateBatchComponent_ng_container_35_div_37_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.removeFile());
    });
    \u0275\u0275elementStart(12, "mat-icon");
    \u0275\u0275text(13, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(14, CreateBatchComponent_ng_container_35_div_37_ng_container_14_Template, 12, 5, "ng-container", 9)(15, CreateBatchComponent_ng_container_35_div_37_div_15_Template, 5, 1, "div", 112)(16, CreateBatchComponent_ng_container_35_div_37_div_16_Template, 10, 12, "div", 113);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", (tmp_2_0 = ctx_r0.selectedFile()) == null ? null : tmp_2_0.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatFileSize(((tmp_3_0 = ctx_r0.selectedFile()) == null ? null : tmp_3_0.size) || 0), " ");
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(11, 6, "createBatch.removeFile"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r0.fileCardIssueBanner());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.csvParseWarnings().length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.parsedRows().length > 0 && !ctx_r0.hasBlockingFileIssues());
  }
}
function CreateBatchComponent_ng_container_35_div_38_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 136)(1, "mat-icon", 137);
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 1, "createBatch.issuesCount", \u0275\u0275pureFunction1(4, _c10, ((tmp_3_0 = ctx_r0.errorSummary()) == null ? null : tmp_3_0.totalErrors) || 0)), " ");
  }
}
function CreateBatchComponent_ng_container_35_div_38_div_9_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 143);
    \u0275\u0275element(1, "span", 144);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 1, "createBatch.missingValues", \u0275\u0275pureFunction1(4, _c10, ((tmp_4_0 = ctx_r0.errorSummary()) == null ? null : tmp_4_0.missingCount) || 0)), " ");
  }
}
function CreateBatchComponent_ng_container_35_div_38_div_9_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 143);
    \u0275\u0275element(1, "span", 145);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 1, "createBatch.invalidValues", \u0275\u0275pureFunction1(4, _c10, ((tmp_4_0 = ctx_r0.errorSummary()) == null ? null : tmp_4_0.invalidEnumCount) || 0)), " ");
  }
}
function CreateBatchComponent_ng_container_35_div_38_div_9_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 143);
    \u0275\u0275element(1, "span", 146);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 1, "createBatch.dependencyRuleIssues", \u0275\u0275pureFunction1(4, _c10, ((tmp_4_0 = ctx_r0.errorSummary()) == null ? null : tmp_4_0.dependencyRuleCount) || 0)), " ");
  }
}
function CreateBatchComponent_ng_container_35_div_38_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 138)(1, "span", 139)(2, "mat-icon", 140);
    \u0275\u0275text(3, "warning");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 141);
    \u0275\u0275template(7, CreateBatchComponent_ng_container_35_div_38_div_9_span_7_Template, 4, 6, "span", 142)(8, CreateBatchComponent_ng_container_35_div_38_div_9_span_8_Template, 4, 6, "span", 142)(9, CreateBatchComponent_ng_container_35_div_38_div_9_span_9_Template, 4, 6, "span", 142);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 4, "createBatch.fixHighlightedCells"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", (tmp_4_0 = ctx_r0.errorSummary()) == null ? null : tmp_4_0.missingCount);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_5_0 = ctx_r0.errorSummary()) == null ? null : tmp_5_0.invalidEnumCount);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_6_0 = ctx_r0.errorSummary()) == null ? null : tmp_6_0.dependencyRuleCount);
  }
}
function CreateBatchComponent_ng_container_35_div_38_th_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 147);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r19 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", col_r19, " ");
  }
}
function CreateBatchComponent_ng_container_35_div_38_tr_18_mat_icon_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 153);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275text(2, " error_outline ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r20 = \u0275\u0275nextContext().index;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind2(1, 1, "createBatch.errorsInRow", \u0275\u0275pureFunction1(4, _c10, ctx_r0.getRowErrors(i_r20).length)));
  }
}
function CreateBatchComponent_ng_container_35_div_38_tr_18_td_5_mat_icon_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 156);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_8_0;
    let tmp_9_0;
    const col_r21 = \u0275\u0275nextContext().$implicit;
    const i_r20 = \u0275\u0275nextContext().index;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", ((tmp_8_0 = ctx_r0.getCellError(i_r20, col_r21)) == null ? null : tmp_8_0.type) === "missing" ? "text-orange-500" : "text-red-500");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ((tmp_9_0 = ctx_r0.getCellError(i_r20, col_r21)) == null ? null : tmp_9_0.type) === "missing" ? "warning" : "error", " ");
  }
}
function CreateBatchComponent_ng_container_35_div_38_tr_18_td_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 154)(1, "span", 150)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, CreateBatchComponent_ng_container_35_div_38_tr_18_td_5_mat_icon_4_Template, 2, 2, "mat-icon", 155);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_7_0;
    let tmp_8_0;
    let tmp_10_0;
    const col_r21 = ctx.$implicit;
    const ctx_r21 = \u0275\u0275nextContext();
    const row_r23 = ctx_r21.$implicit;
    const i_r20 = ctx_r21.index;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(5, _c11, ((tmp_7_0 = ctx_r0.getCellError(i_r20, col_r21)) == null ? null : tmp_7_0.type) === "missing", ((tmp_7_0 = ctx_r0.getCellError(i_r20, col_r21)) == null ? null : tmp_7_0.type) === "invalid_enum", !ctx_r0.getCellError(i_r20, col_r21), ctx_r0.getCellError(i_r20, col_r21)))("matTooltip", ((tmp_8_0 = ctx_r0.getCellError(i_r20, col_r21)) == null ? null : tmp_8_0.message) || "")("matTooltipDisabled", !ctx_r0.getCellError(i_r20, col_r21));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r23[col_r21] || (((tmp_10_0 = ctx_r0.getCellError(i_r20, col_r21)) == null ? null : tmp_10_0.type) === "missing" ? "(empty)" : "-"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.getCellError(i_r20, col_r21));
  }
}
function CreateBatchComponent_ng_container_35_div_38_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 148)(1, "td", 149)(2, "span", 150);
    \u0275\u0275text(3);
    \u0275\u0275template(4, CreateBatchComponent_ng_container_35_div_38_tr_18_mat_icon_4_Template, 3, 6, "mat-icon", 151);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(5, CreateBatchComponent_ng_container_35_div_38_tr_18_td_5_Template, 5, 10, "td", 152);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r20 = ctx.index;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", ctx_r0.rowHasErrors(i_r20) ? "bg-red-50/50 dark:bg-red-950/15" : "bg-white dark:bg-gray-900/50");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", i_r20 + 1, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.rowHasErrors(i_r20));
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.previewColumns());
  }
}
function CreateBatchComponent_ng_container_35_div_38_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 157)(1, "mat-icon", 140);
    \u0275\u0275text(2, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 1, "createBatch.moreRowsHaveErrors", \u0275\u0275pureFunction1(4, _c10, ctx_r0.errorSummary().rowsWithErrors - 10)), " ");
  }
}
function CreateBatchComponent_ng_container_35_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 126)(1, "div", 38)(2, "div", 27)(3, "h2", 30);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, CreateBatchComponent_ng_container_35_div_38_span_6_Template, 5, 6, "span", 127);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 31);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, CreateBatchComponent_ng_container_35_div_38_div_9_Template, 10, 6, "div", 128);
    \u0275\u0275elementStart(10, "div", 129)(11, "table", 130)(12, "thead")(13, "tr", 131)(14, "th", 132);
    \u0275\u0275text(15, " # ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, CreateBatchComponent_ng_container_35_div_38_th_16_Template, 2, 1, "th", 133);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "tbody");
    \u0275\u0275template(18, CreateBatchComponent_ng_container_35_div_38_tr_18_Template, 6, 4, "tr", 134);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(19, CreateBatchComponent_ng_container_35_div_38_div_19_Template, 5, 6, "div", 135);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", ctx_r0.hasBlockingFileIssues() ? "border-red-300 dark:border-red-900/50" : "border-stone-200/90 dark:border-gray-800");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 9, "createBatch.dataPreview"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.errorSummary());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" Showing first ", ctx_r0.parsedRows().length > 10 ? 10 : ctx_r0.parsedRows().length, " of ", ctx_r0.parsedRows().length, " rows ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.errorSummary());
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r0.previewColumns());
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.parsedRows().slice(0, 10));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.errorSummary() && ctx_r0.errorSummary().rowsWithErrors > 10);
  }
}
function CreateBatchComponent_ng_container_35_div_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 158)(1, "div", 159)(2, "div")(3, "p", 160);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 161);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 162)(9, "p", 160);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 163);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "transloco");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 6, "createBatch.estimatedCost"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" $", ctx_r0.estimatedCost().toFixed(2), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", ctx_r0.parsedRows().length, " ", \u0275\u0275pipeBind1(11, 8, "createBatch.rows"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" \xD7 ", ((tmp_5_0 = ctx_r0.configuration()) == null ? null : tmp_5_0.steps == null ? null : tmp_5_0.steps.length) || 0, " ", \u0275\u0275pipeBind1(14, 10, "createBatch.steps"), " ");
  }
}
function CreateBatchComponent_ng_container_35_mat_spinner_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 164);
  }
}
function CreateBatchComponent_ng_container_35_mat_icon_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 118);
    \u0275\u0275text(1, "rocket_launch");
    \u0275\u0275elementEnd();
  }
}
function CreateBatchComponent_ng_container_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 25)(2, "div", 26);
    \u0275\u0275listener("click", function CreateBatchComponent_ng_container_35_Template_div_click_2_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.toggleRequiredFieldsPanel());
    });
    \u0275\u0275elementStart(3, "div", 27)(4, "div", 28)(5, "mat-icon", 29);
    \u0275\u0275text(6, "info");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div")(8, "h2", 30);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 31);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "mat-icon", 32);
    \u0275\u0275text(15, " expand_more ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(16, CreateBatchComponent_ng_container_35_div_16_Template, 27, 14, "div", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 34)(18, "h2", 35);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "mat-form-field", 36)(22, "mat-label");
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275element(25, "input", 37);
    \u0275\u0275pipe(26, "transloco");
    \u0275\u0275elementStart(27, "mat-hint");
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "div", 34)(31, "div", 38)(32, "h2", 30);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(35, CreateBatchComponent_ng_container_35_button_35_Template, 5, 3, "button", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275template(36, CreateBatchComponent_ng_container_35_div_36_Template, 12, 13, "div", 40)(37, CreateBatchComponent_ng_container_35_div_37_Template, 17, 8, "div", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275template(38, CreateBatchComponent_ng_container_35_div_38_Template, 20, 11, "div", 42)(39, CreateBatchComponent_ng_container_35_div_39_Template, 15, 12, "div", 43);
    \u0275\u0275elementStart(40, "div", 44)(41, "button", 45);
    \u0275\u0275listener("click", function CreateBatchComponent_ng_container_35_Template_button_click_41_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.goBack());
    });
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "span", 46)(45, "button", 47);
    \u0275\u0275listener("click", function CreateBatchComponent_ng_container_35_Template_button_click_45_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.submit());
    });
    \u0275\u0275template(46, CreateBatchComponent_ng_container_35_mat_spinner_46_Template, 1, 0, "mat-spinner", 48)(47, CreateBatchComponent_ng_container_35_mat_icon_47_Template, 2, 0, "mat-icon", 49);
    \u0275\u0275text(48);
    \u0275\u0275pipe(49, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 22, "createBatch.csvFileRequirements"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(13, 24, "createBatch.fieldCountsSummary", \u0275\u0275pureFunction2(41, _c2, ctx_r0.requiredFieldCount(), ctx_r0.optionalFieldCount())), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("rotate-180", ctx_r0.showRequiredFieldsPanel());
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.showRequiredFieldsPanel());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(20, 27, "createBatch.batchDetails"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 29, "createBatch.batchName"));
    \u0275\u0275advance(2);
    \u0275\u0275property("formControl", ctx_r0.batchForm.get("name"))("placeholder", \u0275\u0275pipeBind1(26, 31, "createBatch.batchNamePlaceholder"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(29, 33, "createBatch.batchNameHint"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(34, 35, "createBatch.uploadData"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r0.selectedFile());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.selectedFile());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.selectedFile());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.parsedRows().length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.parsedRows().length > 0 && !ctx_r0.hasBlockingFileIssues());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(43, 37, "createBatch.cancel"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("matTooltip", (!ctx_r0.hasValidData() || ctx_r0.hasBlockingFileIssues()) && ctx_r0.createBatchDisabledReason() ? ctx_r0.createBatchDisabledReason() : "");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r0.hasValidData() || ctx_r0.isSubmitting() || ctx_r0.hasBlockingFileIssues());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isSubmitting());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isSubmitting());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(49, 39, ctx_r0.isSubmitting() ? "createBatch.creating" : "createBatch.createBatch"), " ");
  }
}
var CreateBatchComponent = class _CreateBatchComponent {
  constructor() {
    this._smartBatchService = inject(SmartBatchService);
    this._router = inject(Router);
    this._route = inject(ActivatedRoute);
    this._formBuilder = inject(FormBuilder);
    this._dialog = inject(MatDialog);
    this._transloco = inject(TranslocoService);
    this._translocoLang = toSignal(this._transloco.langChanges$.pipe(startWith(this._transloco.getActiveLang()), map(() => this._transloco.getActiveLang()), distinctUntilChanged()), { initialValue: this._transloco.getActiveLang() });
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
    this.missingRequiredColumnsFields = signal(null);
    this.parsedRows = signal([]);
    this.previewColumns = signal([]);
    this.csvParseWarnings = signal([]);
    this.requiredFields = computed(() => {
      const config = this.configuration();
      if (!config?.steps)
        return [];
      const fieldsMap = /* @__PURE__ */ new Map();
      config.steps.sort((a, b) => a.sequence - b.sequence).forEach((step) => {
        const feature = step.appFeature;
        const dependencies = feature?.dependencies || [];
        dependencies.forEach((dep) => {
          if (!dep?.field)
            return;
          if (!isClientVisibleBatchDependencyField(dep.field))
            return;
          const prev = fieldsMap.get(dep.field);
          if (!fieldsMap.has(dep.field) || dep.required) {
            fieldsMap.set(dep.field, {
              field: dep.field,
              required: dep.required || false,
              stepName: feature?.name || "Unknown Step",
              stepSequence: step.sequence,
              enumValues: dep.enum || void 0,
              type: dep.type || "string",
              description: dep.description || void 0,
              dependencyGroup: dep.dependencyGroup,
              requiredWhen: dep.requiredWhen,
              dateFormat: dep.dateFormat ?? prev?.dateFormat
            });
          } else if (dep.dateFormat && !prev?.dateFormat) {
            fieldsMap.set(dep.field, __spreadProps(__spreadValues({}, prev), {
              dateFormat: dep.dateFormat
            }));
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
    this.requiredFieldCount = computed(() => this.requiredFields().filter((f) => f.required).length);
    this.optionalFieldCount = computed(() => this.requiredFields().filter((f) => !f.required).length);
    this.allFields = computed(() => {
      return this.requiredFields();
    });
    this.xorExpectedFieldGroups = computed(() => this.computeMergedXorFieldGroups(this.requiredFields()));
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
    this.cellValidationIssueBanner = computed(() => {
      this._translocoLang();
      const result = this.validationResult();
      if (!result || result.isValid || result.errors.length === 0)
        return null;
      const missingCount = result.errors.filter((e) => e.type === "missing").length;
      const invalidEnumCount = result.errors.filter((e) => e.type === "invalid_enum" || e.type === "invalid_type").length;
      const ruleCount = result.errors.filter((e) => e.type === "dependency_rule").length;
      const rowsAffected = new Set(result.errors.map((e) => e.rowIndex)).size;
      const parts = [];
      if (missingCount > 0) {
        parts.push(this._transloco.translate("createBatch.missingValues", { count: missingCount }));
      }
      if (invalidEnumCount > 0) {
        parts.push(this._transloco.translate("createBatch.invalidValues", { count: invalidEnumCount }));
      }
      if (ruleCount > 0) {
        parts.push(this._transloco.translate("createBatch.dependencyRuleIssues", { count: ruleCount }));
      }
      const breakdown = parts.join(this._transloco.translate("createBatch.validationIssuesListSeparator"));
      return this._transloco.translate("createBatch.validationIssuesBanner", {
        issueCount: result.errors.length,
        rowCount: rowsAffected,
        breakdown
      });
    });
    this.fileCardIssueBanner = computed(() => {
      const raw = this.parseError();
      if (raw)
        return { mode: "raw", text: raw };
      const missing = this.missingRequiredColumnsFields();
      if (missing) {
        return {
          mode: "i18n",
          key: "createBatch.missingRequiredColumns",
          params: { fields: missing }
        };
      }
      const cell = this.cellValidationIssueBanner();
      if (cell)
        return { mode: "raw", text: cell };
      return null;
    });
    this.hasBlockingFileIssues = computed(() => this.fileCardIssueBanner() !== null);
    this.errorSummary = computed(() => {
      const result = this.validationResult();
      if (!result || result.isValid || result.errors.length === 0)
        return null;
      const missingCount = result.errors.filter((e) => e.type === "missing").length;
      const invalidEnumCount = result.errors.filter((e) => e.type === "invalid_enum" || e.type === "invalid_type").length;
      const dependencyRuleCount = result.errors.filter((e) => e.type === "dependency_rule").length;
      const rowsWithErrors = new Set(result.errors.map((e) => e.rowIndex)).size;
      return {
        totalErrors: result.errors.length,
        missingCount,
        invalidEnumCount,
        dependencyRuleCount,
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
      this._translocoLang();
      if (this.isSubmitting())
        return this._transloco.translate("createBatch.disabledCreating");
      const banner = this.fileCardIssueBanner();
      if (banner?.mode === "raw")
        return banner.text;
      if (banner?.mode === "i18n") {
        return this._transloco.translate(banner.key, banner.params);
      }
      if (this.parsedRows().length === 0) {
        return this._transloco.translate("createBatch.disabledNoFile");
      }
      if (!this.batchForm.get("name")?.value?.trim()) {
        return this._transloco.translate("createBatch.disabledNoBatchName");
      }
      const validation = this.validationResult();
      if (validation && !validation.isValid) {
        return this._transloco.translate("createBatch.disabledFixDataErrors");
      }
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
    const headers = getBatchInputCsvHeaders(config);
    if (headers.length === 0) {
      headers.push("id");
    }
    const csvContent = [
      headers.join(","),
      headers.map(() => "").join(",")
      // Empty row as placeholder
    ].join("\n");
    const blob = new Blob([`\uFEFF${csvContent}`], { type: "text/csv;charset=utf-8;" });
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
    this.missingRequiredColumnsFields.set(null);
    this.csvParseWarnings.set([]);
    this.parsedRows.set([]);
    this.previewColumns.set([]);
    const extension = file.name.split(".").pop()?.toLowerCase();
    if (extension === "csv") {
      this.parseCSV(file);
    } else if (extension === "jsonl") {
      this.parseJSONL(file);
    } else if (extension === "xlsx" || extension === "xls") {
      this.parseXLSX(file);
    } else {
      this.parseError.set(`Unsupported file format: .${extension}`);
    }
  }
  parseCSV(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const text = stripBom(String(e.target?.result ?? ""));
        const lines = text.split("\n").map((line) => line.replace(/\r$/, "")).filter((line) => line.trim());
        if (lines.length < 2) {
          this.parseError.set("CSV must have a header row and at least one data row.");
          return;
        }
        const { delimiter } = detectBestCsvDelimiter(lines);
        const headers = parseCSVLine(lines[0], delimiter);
        if (!headers.some((h) => h.trim())) {
          this.parseError.set("CSV header row is empty or invalid.");
          return;
        }
        const rows = [];
        let skippedRowCount = 0;
        const dataLineCount = lines.length - 1;
        for (let i = 1; i < lines.length; i++) {
          const values = parseCSVLine(lines[i], delimiter);
          if (values.length === headers.length) {
            const row = {};
            headers.forEach((header, idx) => {
              row[header] = values[idx];
            });
            rows.push(row);
          } else {
            skippedRowCount += 1;
          }
        }
        const { fieldOrder, rows: sanitized } = sanitizePapaObjectRows(rows, headers);
        if (sanitized.length === 0) {
          this.parseError.set("CSV has no data rows. Remove leading or trailing empty rows, or fill in at least one row.");
          this.previewColumns.set(fieldOrder);
          this.parsedRows.set([]);
          this.validationResult.set(null);
          this.csvParseWarnings.set(this.buildCsvParseWarnings(skippedRowCount, dataLineCount, lines[0], fieldOrder.length));
          return;
        }
        const csvWarnings = this.buildCsvParseWarnings(skippedRowCount, dataLineCount, lines[0], fieldOrder.length);
        this.applyConfiguredFieldFilterAndContinue(fieldOrder, sanitized, csvWarnings);
      } catch (err) {
        this.parseError.set("Failed to parse CSV file.");
      }
    };
    reader.readAsText(file);
  }
  buildCsvParseWarnings(skippedRowCount, dataLineCount, headerLine, parsedColumnCount) {
    const messages = [];
    if (skippedRowCount > 0) {
      messages.push({
        key: "createBatch.skippedRowsNotice",
        params: { skipped: skippedRowCount, total: dataLineCount }
      });
    }
    const hint = getDelimiterMismatchHintKind(headerLine, parsedColumnCount);
    if (hint === "semicolon") {
      messages.push({ key: "createBatch.delimiterHintSemicolon" });
    } else if (hint === "tab") {
      messages.push({ key: "createBatch.delimiterHintTab" });
    }
    return messages;
  }
  /**
   * Keeps only columns that match batch configuration (required + optional). When the
   * configuration defines no fields, the parsed table is left unchanged.
   */
  restrictRowsToConfiguredFields(parsedFieldOrder, rows) {
    const defs = this.requiredFields();
    if (!defs.length) {
      return {
        ok: true,
        fieldOrder: parsedFieldOrder,
        rows: rows.map((r) => __spreadValues({}, r)),
        droppedHeaders: []
      };
    }
    const allowedLower = new Set(defs.map((d) => d.field.toLowerCase()));
    const droppedHeaders = parsedFieldOrder.filter((h) => h.trim().length > 0 && !allowedLower.has(h.trim().toLowerCase()));
    const configFieldOrder = defs.map((d) => d.field);
    const matchedFields = configFieldOrder.filter((f) => parsedFieldOrder.some((h) => h.trim().toLowerCase() === f.toLowerCase()));
    if (matchedFields.length === 0) {
      return {
        ok: false,
        errorMessage: this._transloco.translate("createBatch.noMatchingColumns", {
          fields: configFieldOrder.join(", ")
        })
      };
    }
    const strippedRows = rows.map((row) => {
      const out = {};
      matchedFields.forEach((field) => {
        const fk = this.findColumnKey(row, field);
        if (fk) {
          out[field] = row[fk];
        }
      });
      return out;
    });
    return {
      ok: true,
      fieldOrder: matchedFields,
      rows: strippedRows,
      droppedHeaders
    };
  }
  formatDroppedColumnList(headers) {
    const max = 20;
    const slice = headers.slice(0, max);
    const suffix = headers.length > max ? "\u2026" : "";
    return `${slice.join(", ")}${suffix}`;
  }
  /**
   * Drops columns not in the batch configuration, re-sanitizes rows, updates UI state, runs validation.
   */
  applyConfiguredFieldFilterAndContinue(fieldOrder, rows, parseWarnings) {
    const restricted = this.restrictRowsToConfiguredFields(fieldOrder, rows);
    if (restricted.ok === false) {
      this.missingRequiredColumnsFields.set(null);
      this.parseError.set(restricted.errorMessage);
      this.previewColumns.set([]);
      this.parsedRows.set([]);
      this.validationResult.set(null);
      this.csvParseWarnings.set(parseWarnings);
      return;
    }
    let warnings = [...parseWarnings];
    if (restricted.droppedHeaders.length > 0) {
      warnings = [
        ...warnings,
        {
          key: "createBatch.strippedUnknownColumnsNotice",
          params: {
            count: restricted.droppedHeaders.length,
            columns: this.formatDroppedColumnList(restricted.droppedHeaders)
          }
        }
      ];
    }
    const { fieldOrder: fo, rows: sanitized } = sanitizePapaObjectRows(restricted.rows, restricted.fieldOrder);
    if (sanitized.length === 0) {
      this.parseError.set(this._transloco.translate("createBatch.noDataRowsAfterColumnFilter"));
      this.previewColumns.set(fo);
      this.parsedRows.set([]);
      this.validationResult.set(null);
      this.csvParseWarnings.set(warnings);
      return;
    }
    this.previewColumns.set(fo);
    this.parsedRows.set(sanitized);
    this.csvParseWarnings.set(warnings);
    this.validateAllData(fo, sanitized);
  }
  /**
   * Parse first worksheet from Excel; trimming empty leading/trailing rows and columns
   * and fully empty data rows is handled by shared spreadsheet sanitizers.
   */
  parseXLSX(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const result = e.target?.result;
        if (!result || !(result instanceof ArrayBuffer)) {
          this.parseError.set("Failed to read Excel file.");
          return;
        }
        const workbook = readSync(result, { type: "array" });
        const firstSheet = workbook.SheetNames[0];
        if (!firstSheet) {
          this.parseError.set("The workbook has no sheets.");
          return;
        }
        const sheet = workbook.Sheets[firstSheet];
        const matrix = utils.sheet_to_json(sheet, {
          header: 1,
          defval: ""
        });
        const { rows: grid } = sanitizeMatrix(matrix);
        if (grid.length < 2) {
          this.parseError.set("Excel must have a header row and at least one data row.");
          this.previewColumns.set([]);
          this.parsedRows.set([]);
          this.validationResult.set(null);
          return;
        }
        const headerRow = grid[0].map((c) => String(c ?? "").trim());
        if (!headerRow.some((h) => h)) {
          this.parseError.set("Excel header row is empty or invalid.");
          this.previewColumns.set([]);
          this.parsedRows.set([]);
          this.validationResult.set(null);
          return;
        }
        const dataRows = grid.slice(1);
        const objects = dataRows.map((cells) => {
          const row = {};
          headerRow.forEach((field, index) => {
            if (field)
              row[field] = cells[index] ?? "";
          });
          return row;
        });
        const { fieldOrder, rows: sanitized } = sanitizePapaObjectRows(objects, headerRow);
        if (sanitized.length === 0) {
          this.parseError.set("Excel has no data rows. Remove empty rows or fill in at least one data row.");
          this.previewColumns.set(fieldOrder);
          this.parsedRows.set([]);
          this.validationResult.set(null);
          return;
        }
        this.applyConfiguredFieldFilterAndContinue(fieldOrder, sanitized, []);
      } catch {
        this.parseError.set("Failed to parse Excel file.");
      }
    };
    reader.readAsArrayBuffer(file);
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
        const keyOrder = Array.from(allKeys);
        const { fieldOrder, rows: sanitized } = sanitizePapaObjectRows(rows, keyOrder);
        if (sanitized.length === 0) {
          this.parseError.set("JSONL has no data rows. Remove empty lines or provide at least one object with at least one value.");
          this.previewColumns.set(fieldOrder);
          this.parsedRows.set([]);
          this.validationResult.set(null);
          return;
        }
        this.applyConfiguredFieldFilterAndContinue(fieldOrder, sanitized, []);
      } catch (err) {
        this.parseError.set("Failed to parse JSONL file. Ensure each line is valid JSON.");
      }
    };
    reader.readAsText(file);
  }
  /** Comprehensive validation of all rows and cells */
  validateAllData(uploadedHeaders, rows) {
    const config = this.configuration();
    const requiredFieldDefs = this.requiredFields();
    const errors = [];
    const missingColumns = requiredFieldDefs.filter((f) => f.required).filter((f) => !uploadedHeaders.some((h) => h.toLowerCase() === f.field.toLowerCase()));
    if (missingColumns.length > 0) {
      const fieldNames = missingColumns.map((f) => f.field).join(", ");
      this.parseError.set(null);
      this.missingRequiredColumnsFields.set(fieldNames);
      this.validationResult.set({
        isValid: false,
        errors: [],
        errorsByRow: /* @__PURE__ */ new Map(),
        errorsByColumn: /* @__PURE__ */ new Map()
      });
      return;
    }
    this.missingRequiredColumnsFields.set(null);
    if (!config?.steps?.length) {
      this.finalizeValidation(errors);
      return;
    }
    const sortedSteps = [...config.steps].sort((a, b) => a.sequence - b.sequence);
    rows.forEach((row, rowIndex) => {
      const r = row;
      sortedSteps.forEach((step) => {
        const feature = step.appFeature;
        const rawDeps = feature?.dependencies || [];
        const deps = rawDeps.filter((d) => d && typeof d.field === "string" && d.field.length > 0 && isClientVisibleBatchDependencyField(d.field));
        if (!deps.length)
          return;
        const stepLabel = feature?.name || "Unknown Step";
        this.appendStepDependencyValidationErrors(r, rowIndex, deps, stepLabel, errors);
      });
    });
    this.finalizeValidation(errors);
  }
  finalizeValidation(errors) {
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
    this.parseError.set(null);
    if (errors.length === 0) {
      this.missingRequiredColumnsFields.set(null);
    }
  }
  appendStepDependencyValidationErrors(row, rowIndex, deps, stepName, errors) {
    const xorMeta = this.buildXorGroupMetadata(deps);
    if (!xorMeta) {
      this.appendLegacyStepValidation(row, rowIndex, deps, errors);
      return;
    }
    const { docGroupIds, nameGroupIds } = xorMeta;
    const mode1Active = this.isDocumentSearchModeActive(row, deps, docGroupIds);
    const mode2Active = this.isFullNameModeActive(row, deps, nameGroupIds);
    if (mode1Active && mode2Active) {
      errors.push({
        rowIndex,
        column: "fullName",
        type: "dependency_rule",
        message: this._transloco.translate("createBatch.validationXorBothModes", {
          step: stepName
        })
      });
      return;
    }
    if (!mode1Active && !mode2Active) {
      errors.push({
        rowIndex,
        column: "fullName",
        type: "dependency_rule",
        message: this._transloco.translate("createBatch.validationXorNeitherMode", {
          step: stepName
        })
      });
      return;
    }
    if (mode2Active) {
      for (const d of deps) {
        const g = this.normalizeDependencyGroup(d);
        if (g === null || !docGroupIds.has(g))
          continue;
        if (!this.isEffectivelyEmptyForMode(this.getRowCellRaw(row, d.field))) {
          errors.push({
            rowIndex,
            column: d.field,
            type: "dependency_rule",
            message: this._transloco.translate("createBatch.validationLeakDocumentWhenFullName", {
              step: stepName,
              field: d.field
            })
          });
        }
      }
    }
    if (mode1Active) {
      for (const d of deps) {
        const g = this.normalizeDependencyGroup(d);
        if (g === null || !nameGroupIds.has(g))
          continue;
        if (!this.isEffectivelyEmptyForMode(this.getRowCellRaw(row, d.field))) {
          errors.push({
            rowIndex,
            column: d.field,
            type: "dependency_rule",
            message: this._transloco.translate("createBatch.validationLeakFullNameWhenDocument", {
              step: stepName,
              field: d.field
            })
          });
        }
      }
      this.appendDocumentTypeNumberPairErrorsForDeps(row, rowIndex, deps, docGroupIds, errors);
      for (const d of deps) {
        const g = this.normalizeDependencyGroup(d);
        if (g === null || !docGroupIds.has(g))
          continue;
        if (!d.requiredWhen)
          continue;
        if (!this.requiredWhenPredicateMatches(row, d.requiredWhen))
          continue;
        if (this.isEffectivelyEmptyForMode(this.getRowCellRaw(row, d.field))) {
          const when = d.requiredWhen;
          errors.push({
            rowIndex,
            column: d.field,
            type: "missing",
            message: this._transloco.translate("createBatch.validationConditionalRequired", {
              step: stepName,
              field: d.field,
              whenField: when.field,
              values: (when.in || []).join(", ")
            })
          });
        }
      }
    }
    for (const d of deps) {
      const g = this.normalizeDependencyGroup(d);
      const isGrouped = g !== null;
      let applies = true;
      if (isGrouped) {
        applies = mode1Active && docGroupIds.has(g) || mode2Active && nameGroupIds.has(g);
      }
      if (!applies)
        continue;
      const raw = this.getRowCellRaw(row, d.field);
      if (d.required && this.isEmptyValue(raw)) {
        errors.push({
          rowIndex,
          column: d.field,
          type: "missing",
          message: `"${d.field}" is required but empty`
        });
      }
      this.appendEnumErrorIfAny(rowIndex, d, raw, errors);
      this.appendDateFormatErrorIfAny(rowIndex, d, raw, errors);
    }
  }
  appendDateFormatErrorIfAny(rowIndex, d, raw, errors) {
    if (!d.dateFormat || this.isEmptyValue(raw))
      return;
    if (this.valueMatchesDependencyDateFormat(raw, d.dateFormat))
      return;
    errors.push({
      rowIndex,
      column: d.field,
      type: "invalid_type",
      message: this._transloco.translate("createBatch.invalidDateFormat", {
        field: d.field,
        format: d.dateFormat
      })
    });
  }
  /**
   * Supports declared `dateFormat` from AppFeature dependencies (e.g. dd/MM/yyyy for Colombia / global checks).
   */
  valueMatchesDependencyDateFormat(raw, format) {
    const s = String(raw ?? "").trim();
    if (!s)
      return true;
    const norm = format.replace(/\s+/g, "").toLowerCase();
    if (norm === "dd/mm/yyyy") {
      return this.isCalendarDdMmYyyy(s);
    }
    return true;
  }
  isCalendarDdMmYyyy(value) {
    const m = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/.exec(value);
    if (!m)
      return false;
    const d = parseInt(m[1], 10);
    const mo = parseInt(m[2], 10);
    const y = parseInt(m[3], 10);
    if (mo < 1 || mo > 12 || d < 1 || d > 31)
      return false;
    const dt = new Date(y, mo - 1, d);
    return dt.getFullYear() === y && dt.getMonth() === mo - 1 && dt.getDate() === d;
  }
  appendLegacyStepValidation(row, rowIndex, deps, errors) {
    for (const d of deps) {
      const raw = this.getRowCellRaw(row, d.field);
      if (d.required && this.isEmptyValue(raw)) {
        errors.push({
          rowIndex,
          column: d.field,
          type: "missing",
          message: `"${d.field}" is required but empty`
        });
      }
      this.appendEnumErrorIfAny(rowIndex, d, raw, errors);
      this.appendDateFormatErrorIfAny(rowIndex, d, raw, errors);
    }
    const hasType = deps.some((d) => d.field === "documentType");
    const hasNum = deps.some((d) => d.field === "documentNumber");
    if (hasType && hasNum) {
      this.appendDocumentTypeNumberPairErrorsForDeps(row, rowIndex, deps, null, errors);
    }
  }
  appendEnumErrorIfAny(rowIndex, d, raw, errors) {
    const enums = d.enum;
    if (!enums || !Array.isArray(enums) || enums.length === 0)
      return;
    if (this.isEmptyValue(raw))
      return;
    const normalizedValue = String(raw).trim().toLowerCase();
    const validValues = enums.map((v) => String(v).toLowerCase());
    if (!validValues.includes(normalizedValue)) {
      errors.push({
        rowIndex,
        column: d.field,
        type: "invalid_enum",
        message: `"${raw}" is not a valid value. Expected: ${enums.join(", ")}`,
        expectedValues: enums
      });
    }
  }
  normalizeDependencyGroup(d) {
    if (d.dependencyGroup == null)
      return null;
    const s = String(d.dependencyGroup).trim();
    return s.length ? s : null;
  }
  /**
   * Build XOR section lists from merged required fields (same semantics as step validation XOR).
   */
  computeMergedXorFieldGroups(fields) {
    const minimal = fields.map((f) => ({
      field: f.field,
      dependencyGroup: f.dependencyGroup,
      requiredWhen: f.requiredWhen
    }));
    const xor = this.buildXorGroupMetadata(minimal);
    if (!xor)
      return null;
    const { docGroupIds, nameGroupIds } = xor;
    const nameFields = fields.filter((f) => {
      const g = this.normalizeDependencyGroup(f);
      return g !== null && nameGroupIds.has(g);
    }).sort((a, b) => a.field.localeCompare(b.field));
    const docOrder = ["documentType", "documentNumber", "dateOfBirth", "expirationDate"];
    const docFields = fields.filter((f) => {
      const g = this.normalizeDependencyGroup(f);
      return g !== null && docGroupIds.has(g);
    });
    const documentFields = [...docFields].sort((a, b) => {
      const ia = docOrder.indexOf(a.field);
      const ib = docOrder.indexOf(b.field);
      if (ia === -1 && ib === -1)
        return a.field.localeCompare(b.field);
      if (ia === -1)
        return 1;
      if (ib === -1)
        return -1;
      return ia - ib;
    });
    const dob = documentFields.find((d) => d.field === "dateOfBirth" && d.requiredWhen?.in?.length);
    const dobWhenValues = dob?.requiredWhen?.in?.join(", ") ?? null;
    if (nameFields.length === 0 || documentFields.length === 0)
      return null;
    return { nameFields, documentFields, dobWhenValues };
  }
  buildXorGroupMetadata(deps) {
    const grouped = /* @__PURE__ */ new Map();
    for (const d of deps) {
      const g = this.normalizeDependencyGroup(d);
      if (g === null)
        continue;
      if (!grouped.has(g))
        grouped.set(g, []);
      grouped.get(g).push(d);
    }
    if (grouped.size < 2)
      return null;
    const docGroupIds = /* @__PURE__ */ new Set();
    const nameGroupIds = /* @__PURE__ */ new Set();
    for (const [gid, list] of grouped) {
      if (list.some((x) => x.field === "documentType" || x.field === "documentNumber")) {
        docGroupIds.add(gid);
      }
      if (list.some((x) => x.field === "fullName")) {
        nameGroupIds.add(gid);
      }
    }
    if (docGroupIds.size === 0 || nameGroupIds.size === 0)
      return null;
    return { docGroupIds, nameGroupIds };
  }
  isDocumentSearchModeActive(row, deps, docGroupIds) {
    for (const d of deps) {
      const g = this.normalizeDependencyGroup(d);
      if (g === null || !docGroupIds.has(g))
        continue;
      if (d.field !== "documentType" && d.field !== "documentNumber")
        continue;
      if (!this.isEffectivelyEmptyForMode(this.getRowCellRaw(row, d.field)))
        return true;
    }
    return false;
  }
  isFullNameModeActive(row, deps, nameGroupIds) {
    for (const d of deps) {
      const g = this.normalizeDependencyGroup(d);
      if (g === null || !nameGroupIds.has(g))
        continue;
      if (d.field !== "fullName")
        continue;
      if (!this.isEffectivelyEmptyForMode(this.getRowCellRaw(row, d.field)))
        return true;
    }
    return false;
  }
  requiredWhenPredicateMatches(row, when) {
    if (!when?.field || !when.in?.length)
      return false;
    const v = this.getRowCellRaw(row, when.field);
    if (this.isEffectivelyEmptyForMode(v))
      return false;
    const norm = String(v).trim().toLowerCase();
    return when.in.some((x) => String(x).trim().toLowerCase() === norm);
  }
  getRowCellRaw(row, field) {
    const k = this.findColumnKey(row, field);
    return k ? row[k] : void 0;
  }
  appendDocumentTypeNumberPairErrorsForDeps(row, rowIndex, deps, docGroupIds, errors) {
    const inDocGroup = (d) => {
      const g = this.normalizeDependencyGroup(d);
      if (docGroupIds) {
        return g !== null && docGroupIds.has(g);
      }
      return true;
    };
    const hasType = deps.some((d) => d.field === "documentType" && inDocGroup(d));
    const hasNum = deps.some((d) => d.field === "documentNumber" && inDocGroup(d));
    if (!hasType || !hasNum)
      return;
    const numKey = this.findColumnKey(row, _CreateBatchComponent.DOCUMENT_NUMBER_FIELD);
    const typeKey = this.findColumnKey(row, _CreateBatchComponent.DOCUMENT_TYPE_FIELD);
    const numRaw = numKey ? row[numKey] : void 0;
    const typeRaw = typeKey ? row[typeKey] : void 0;
    const numEmpty = this.isEffectivelyEmptyForMode(numRaw);
    const typeEmpty = this.isEffectivelyEmptyForMode(typeRaw);
    if (numEmpty === typeEmpty)
      return;
    const hasMissingError = (column) => errors.some((e) => e.rowIndex === rowIndex && e.column === column && e.type === "missing");
    if (!numEmpty && typeEmpty) {
      if (!hasMissingError(_CreateBatchComponent.DOCUMENT_TYPE_FIELD)) {
        errors.push({
          rowIndex,
          column: _CreateBatchComponent.DOCUMENT_TYPE_FIELD,
          type: "missing",
          message: this._transloco.translate("createBatch.pairDocumentTypeRequiredWhenNumber")
        });
      }
    } else if (numEmpty && !typeEmpty) {
      if (!hasMissingError(_CreateBatchComponent.DOCUMENT_NUMBER_FIELD)) {
        errors.push({
          rowIndex,
          column: _CreateBatchComponent.DOCUMENT_NUMBER_FIELD,
          type: "missing",
          message: this._transloco.translate("createBatch.pairDocumentNumberRequiredWhenType")
        });
      }
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
  static {
    this.DOCUMENT_NUMBER_FIELD = "documentNumber";
  }
  static {
    this.DOCUMENT_TYPE_FIELD = "documentType";
  }
  static {
    this.PAIR_VALUE_PLACEHOLDERS = /* @__PURE__ */ new Set(["-", "n/a", "na"]);
  }
  /**
   * True when the value is empty or a common spreadsheet placeholder (-, n/a).
   * Used for dependency-group modes and paired documentNumber + documentType validation.
   */
  isEffectivelyEmptyForMode(value) {
    if (value === null || value === void 0)
      return true;
    const normalized = String(value).trim();
    if (!normalized)
      return true;
    return _CreateBatchComponent.PAIR_VALUE_PLACEHOLDERS.has(normalized.toLowerCase());
  }
  /** `requiredWhen` predicate present — show as conditional in expected-field cards (unless also globally required). */
  fieldHasConditionalRule(field) {
    const w = field.requiredWhen;
    return Boolean(w?.field && Array.isArray(w.in) && w.in.length > 0);
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
    this.csvParseWarnings.set([]);
    this.validationResult.set(null);
    this.missingRequiredColumnsFields.set(null);
  }
  submit() {
    if (!this.hasValidData() || !this.configId())
      return;
    this.isSubmitting.set(true);
    const payload = {
      batchConfiguration: this.configId(),
      name: this.batchForm.value.name,
      rows: this.parsedRows().map((r) => stripClientHiddenRowFields(r))
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CreateBatchComponent, selectors: [["create-batch"]], decls: 36, vars: 24, consts: [["expectedFieldCard", ""], ["flatExpectedFields", ""], [1, "flex", "min-h-screen", "min-w-0", "flex-auto", "flex-col", "bg-stone-50", "dark:bg-gray-950"], [1, "border-b", "border-stone-200/90", "bg-white/90", "px-5", "py-6", "backdrop-blur-sm", "dark:border-gray-800", "dark:bg-gray-950/90", "md:px-8", "md:py-8"], [1, "mx-auto", "flex", "w-full", "max-w-5xl", "flex-col", "gap-5"], [1, "flex", "flex-wrap", "items-center", "text-xs", "font-medium", "leading-none", "text-stone-500", "dark:text-stone-400"], ["routerLink", "/chat", 1, "cursor-pointer", "text-stone-700", "underline-offset-4", "hover:underline", "dark:text-stone-300"], ["svgIcon", "heroicons_solid:chevron-right", 1, "icon-size-4", "mx-2", "text-stone-400"], ["routerLink", "/smart-batch", 1, "cursor-pointer", "text-stone-700", "underline-offset-4", "hover:underline", "dark:text-stone-300"], [4, "ngIf"], [1, "cursor-default", "text-stone-600", "dark:text-stone-300"], [1, "flex", "flex-wrap", "items-start", "justify-between", "gap-3"], [1, "flex", "min-w-0", "items-start", "gap-3"], ["mat-icon-button", "", "type", "button", 1, "shrink-0", "!text-stone-600", "dark:!text-stone-300", 3, "click"], [1, "min-w-0"], [1, "text-2xl", "font-semibold", "tracking-tight", "text-stone-900", "dark:text-white", "md:text-3xl"], [1, "mt-1", "text-sm", "text-stone-500", "dark:text-stone-400"], ["mat-icon-button", "", "type", "button", 1, "shrink-0", "!text-stone-600", "dark:!text-stone-300", 3, "click", "matTooltip"], [1, "flex", "flex-auto", "flex-col", "px-5", "py-8", "md:px-8", "md:py-10"], [1, "mx-auto", "w-full", "max-w-5xl", "flex", "min-h-0", "flex-1", "flex-col", "gap-6"], ["class", "flex flex-1 flex-col items-center justify-center py-20", 4, "ngIf"], [1, "cursor-pointer", "text-stone-700", "underline-offset-4", "hover:underline", "dark:text-stone-300", 3, "routerLink"], [1, "flex", "flex-1", "flex-col", "items-center", "justify-center", "py-20"], ["diameter", "40"], [1, "mt-4", "text-sm", "text-stone-500", "dark:text-stone-400"], [1, "overflow-hidden", "rounded-2xl", "border", "border-stone-200/90", "bg-white", "shadow-sm", "dark:border-gray-800", "dark:bg-gray-900"], [1, "flex", "cursor-pointer", "items-center", "justify-between", "border-b", "border-stone-200/90", "bg-stone-50/80", "px-6", "py-4", "dark:border-gray-800", "dark:bg-gray-800/40", 3, "click"], [1, "flex", "items-center", "gap-3"], [1, "flex", "h-10", "w-10", "shrink-0", "items-center", "justify-center", "rounded-lg", "bg-stone-100", "dark:bg-gray-800"], [1, "text-stone-600", "dark:text-stone-400"], [1, "text-lg", "font-semibold", "text-stone-900", "dark:text-white"], [1, "text-sm", "text-stone-500", "dark:text-stone-400"], [1, "text-stone-400", "transition-transform"], ["class", "space-y-6 p-6", 4, "ngIf"], [1, "rounded-2xl", "border", "border-stone-200/90", "bg-white", "p-6", "shadow-sm", "dark:border-gray-800", "dark:bg-gray-900"], [1, "mb-4", "text-lg", "font-semibold", "text-stone-900", "dark:text-white"], ["appearance", "outline", 1, "w-full"], ["matInput", "", 3, "formControl", "placeholder"], [1, "mb-4", "flex", "items-center", "justify-between"], ["mat-stroked-button", "", "color", "primary", "class", "!text-sm rounded-xl", 3, "click", 4, "ngIf"], ["class", "cursor-pointer rounded-xl border-2 border-dashed border-stone-300 p-12 text-center transition-all hover:border-stone-400 hover:bg-stone-50 dark:border-gray-600 dark:hover:bg-gray-800/50", 3, "ngClass", "dragover", "dragleave", "drop", 4, "ngIf"], ["class", "space-y-4", 4, "ngIf"], ["class", "rounded-2xl border bg-white p-6 shadow-sm dark:bg-gray-900", 3, "ngClass", 4, "ngIf"], ["class", "rounded-2xl border border-stone-200/90 bg-stone-900 px-6 py-6 text-white shadow-sm dark:border-gray-700 dark:bg-stone-950", 4, "ngIf"], [1, "flex", "items-center", "justify-between", "gap-3", "border-t", "border-stone-200", "pt-8", "dark:border-gray-800"], ["mat-stroked-button", "", "type", "button", 1, "rounded-xl", 3, "click"], [3, "matTooltip"], ["mat-flat-button", "", "color", "primary", "type", "button", 1, "min-w-32", "rounded-xl", 3, "click", "disabled"], ["diameter", "18", "class", "mr-2 inline-block", 4, "ngIf"], ["class", "mr-1 !h-4 !w-4", 4, "ngIf"], [1, "space-y-6", "p-6"], [1, "flex", "items-start", "gap-4", "rounded-xl", "border", "border-stone-200", "bg-stone-50/80", "p-4", "dark:border-gray-700", "dark:bg-gray-800/40"], [1, "flex", "h-8", "w-8", "shrink-0", "items-center", "justify-center", "rounded-full", "bg-stone-200/80", "dark:bg-gray-700"], [1, "icon-size-5", "text-stone-600", "dark:text-stone-300"], [1, "flex-1"], [1, "mb-1", "font-medium", "text-stone-900", "dark:text-white"], [1, "mb-3", "text-sm", "text-stone-600", "dark:text-stone-400"], ["mat-flat-button", "", "color", "primary", 1, "rounded-xl", 3, "click"], [1, "mr-2", "!h-4", "!w-4"], ["class", "py-8 text-center text-stone-500 dark:text-stone-400", 4, "ngIf"], [1, "flex", "items-start", "gap-3", "rounded-xl", "border", "border-amber-200/90", "bg-amber-50/90", "p-4", "dark:border-amber-800/50", "dark:bg-amber-950/20"], [1, "shrink-0", "text-amber-600", "dark:text-amber-400"], [1, "text-sm", "text-amber-900", "dark:text-amber-200"], [1, "flex", "items-start", "gap-3", "rounded-xl", "border", "bg-white", "p-3", "dark:bg-gray-800/60", 3, "ngClass"], [1, "flex", "h-6", "w-6", "shrink-0", "items-center", "justify-center", "rounded-full", "text-xs", "font-bold", 3, "ngClass"], ["class", "icon-size-4", 4, "ngIf"], [1, "min-w-0", "flex-1"], [1, "flex", "flex-wrap", "items-center", "gap-2"], [1, "rounded", "bg-stone-100", "px-1.5", "py-0.5", "text-sm", "font-medium", "text-stone-900", "dark:bg-gray-700", "dark:text-white"], ["class", "text-[10px] font-bold uppercase text-orange-600 dark:text-orange-400", 4, "ngIf"], ["class", "text-[10px] font-bold uppercase text-sky-700 dark:text-sky-300", 4, "ngIf"], ["class", "text-[10px] font-medium uppercase text-stone-400", 4, "ngIf"], ["class", "text-[10px] font-medium uppercase text-violet-600 dark:text-violet-400", 4, "ngIf"], [1, "mt-1", "text-xs", "text-stone-500", "dark:text-stone-400"], ["class", "mt-1.5 text-xs leading-relaxed text-sky-800 dark:text-sky-200", 4, "ngIf"], ["class", "mt-2 flex flex-wrap gap-1", 4, "ngIf"], [1, "icon-size-4"], [1, "text-[10px]", "font-bold", "uppercase", "text-orange-600", "dark:text-orange-400"], [1, "text-[10px]", "font-bold", "uppercase", "text-sky-700", "dark:text-sky-300"], [1, "text-[10px]", "font-medium", "uppercase", "text-stone-400"], [1, "text-[10px]", "font-medium", "uppercase", "text-violet-600", "dark:text-violet-400"], [1, "mt-1.5", "text-xs", "leading-relaxed", "text-sky-800", "dark:text-sky-200"], [1, "mt-2", "flex", "flex-wrap", "gap-1"], ["class", "rounded border border-violet-200 bg-violet-50 px-1.5 py-0.5 text-[10px] text-violet-700 dark:border-violet-800/50 dark:bg-violet-900/20 dark:text-violet-300", 4, "ngFor", "ngForOf"], [1, "rounded", "border", "border-violet-200", "bg-violet-50", "px-1.5", "py-0.5", "text-[10px]", "text-violet-700", "dark:border-violet-800/50", "dark:bg-violet-900/20", "dark:text-violet-300"], [1, "mb-3", "text-sm", "font-semibold", "uppercase", "tracking-wider", "text-stone-700", "dark:text-stone-300"], [4, "ngIf", "ngIfElse"], [1, "mb-4", "text-sm", "leading-relaxed", "text-stone-600", "dark:text-stone-400"], [1, "grid", "grid-cols-1", "gap-4", "lg:grid-cols-2"], [1, "rounded-2xl", "border", "border-stone-200/90", "bg-stone-50/50", "p-4", "dark:border-gray-700", "dark:bg-gray-900/40"], [1, "mb-3", "text-xs", "font-bold", "uppercase", "tracking-wider", "text-stone-700", "dark:text-stone-300"], [1, "grid", "grid-cols-1", "gap-3", "sm:grid-cols-2"], [4, "ngFor", "ngForOf"], ["class", "mb-3 text-xs leading-relaxed text-stone-600 dark:text-stone-400", 4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "mb-3", "text-xs", "leading-relaxed", "text-stone-600", "dark:text-stone-400"], [1, "grid", "grid-cols-1", "gap-3", "sm:grid-cols-2", "lg:grid-cols-3"], [1, "py-8", "text-center", "text-stone-500", "dark:text-stone-400"], [1, "icon-size-12", "mb-2", "opacity-50"], ["mat-stroked-button", "", "color", "primary", 1, "!text-sm", "rounded-xl", 3, "click"], [1, "mr-1", "icon-size-5"], [1, "cursor-pointer", "rounded-xl", "border-2", "border-dashed", "border-stone-300", "p-12", "text-center", "transition-all", "hover:border-stone-400", "hover:bg-stone-50", "dark:border-gray-600", "dark:hover:bg-gray-800/50", 3, "dragover", "dragleave", "drop", "ngClass"], ["type", "file", "id", "fileInput", 1, "hidden", 3, "change", "accept"], ["for", "fileInput", 1, "cursor-pointer"], [1, "mx-auto", "mb-4", "flex", "h-16", "w-16", "items-center", "justify-center", "rounded-full", "bg-stone-100", "dark:bg-gray-800"], [1, "icon-size-8", "text-stone-400"], [1, "mb-1", "text-lg", "font-medium", "text-stone-900", "dark:text-white"], [1, "space-y-4"], [1, "flex", "items-center", "gap-4", "rounded-xl", "border", "border-stone-200/90", "bg-stone-50", "p-4", "dark:border-gray-700", "dark:bg-gray-800/50"], [1, "flex", "h-12", "w-12", "shrink-0", "items-center", "justify-center", "rounded-lg", "bg-stone-100", "dark:bg-gray-800"], [1, "font-medium", "text-stone-900", "dark:text-white"], ["mat-icon-button", "", 1, "!text-stone-600", "dark:!text-stone-300", 3, "click", "matTooltip"], ["class", "flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50/90 p-4 dark:border-amber-800/50 dark:bg-amber-950/25", 4, "ngIf"], ["class", "flex items-center gap-3 rounded-xl border border-emerald-200 bg-emerald-50/90 p-4 dark:border-emerald-900/40 dark:bg-emerald-950/25", 4, "ngIf"], [1, "flex", "items-start", "gap-3", "rounded-xl", "border", "border-red-200", "bg-red-50/90", "p-4", "dark:border-red-900/50", "dark:bg-red-950/30"], [1, "shrink-0", "text-red-600", "dark:text-red-400"], ["class", "font-medium text-red-800 dark:text-red-200", 4, "ngIf"], ["mat-button", "", "color", "primary", 1, "!-ml-4", "!mt-2", "rounded-xl", 3, "click"], [1, "mr-1", "!h-4", "!w-4"], [1, "font-medium", "text-red-800", "dark:text-red-200"], [1, "flex", "items-start", "gap-3", "rounded-xl", "border", "border-amber-200", "bg-amber-50/90", "p-4", "dark:border-amber-800/50", "dark:bg-amber-950/25"], [1, "list-disc", "space-y-1", "pl-4", "text-sm", "text-amber-900", "dark:text-amber-100"], [1, "flex", "items-center", "gap-3", "rounded-xl", "border", "border-emerald-200", "bg-emerald-50/90", "p-4", "dark:border-emerald-900/40", "dark:bg-emerald-950/25"], [1, "text-emerald-600", "dark:text-emerald-400"], [1, "font-medium", "text-emerald-900", "dark:text-emerald-100"], [1, "text-sm", "text-emerald-700", "dark:text-emerald-300/90"], [1, "rounded-2xl", "border", "bg-white", "p-6", "shadow-sm", "dark:bg-gray-900", 3, "ngClass"], ["class", "inline-flex items-center gap-1 rounded-full bg-red-100 px-2 py-0.5 text-xs font-medium text-red-800 dark:bg-red-950/50 dark:text-red-300", 4, "ngIf"], ["class", "mb-4 flex flex-wrap items-center gap-4 rounded-xl border border-red-200/90 bg-red-50/80 p-3 dark:border-red-900/40 dark:bg-red-950/20", 4, "ngIf"], [1, "overflow-x-auto", "rounded-xl", "border", "border-stone-200/90", "dark:border-gray-800"], [1, "w-full", "text-sm"], [1, "bg-stone-50", "dark:bg-gray-800/70"], [1, "w-10", "px-2", "py-2", "text-left", "text-xs", "font-medium", "text-stone-500", "dark:text-stone-400"], ["class", "whitespace-nowrap px-4 py-2 text-left text-xs font-medium text-stone-600 dark:text-stone-300", 4, "ngFor", "ngForOf"], ["class", "border-t border-stone-100 dark:border-gray-800", 3, "ngClass", 4, "ngFor", "ngForOf"], ["class", "mt-4 rounded-xl border border-amber-200 bg-amber-50/90 p-3 text-sm text-amber-900 dark:border-amber-800/50 dark:bg-amber-950/25 dark:text-amber-100", 4, "ngIf"], [1, "inline-flex", "items-center", "gap-1", "rounded-full", "bg-red-100", "px-2", "py-0.5", "text-xs", "font-medium", "text-red-800", "dark:bg-red-950/50", "dark:text-red-300"], [1, "icon-size-3"], [1, "mb-4", "flex", "flex-wrap", "items-center", "gap-4", "rounded-xl", "border", "border-red-200/90", "bg-red-50/80", "p-3", "dark:border-red-900/40", "dark:bg-red-950/20"], [1, "text-sm", "font-medium", "text-red-800", "dark:text-red-200"], [1, "icon-size-4", "mr-1", "align-middle"], [1, "flex", "items-center", "gap-4", "text-xs"], ["class", "flex items-center gap-1.5 text-red-800 dark:text-red-200", 4, "ngIf"], [1, "flex", "items-center", "gap-1.5", "text-red-800", "dark:text-red-200"], [1, "h-3", "w-3", "rounded-sm", "bg-orange-400"], [1, "h-3", "w-3", "rounded-sm", "bg-red-500"], [1, "h-3", "w-3", "rounded-sm", "bg-amber-600"], [1, "whitespace-nowrap", "px-4", "py-2", "text-left", "text-xs", "font-medium", "text-stone-600", "dark:text-stone-300"], [1, "border-t", "border-stone-100", "dark:border-gray-800", 3, "ngClass"], [1, "px-2", "py-2", "font-mono", "text-xs", "text-stone-400"], [1, "flex", "items-center", "gap-1"], ["class", "icon-size-4 text-red-500", 3, "matTooltip", 4, "ngIf"], ["class", "max-w-xs truncate px-4 py-2 whitespace-nowrap", 3, "ngClass", "matTooltip", "matTooltipDisabled", 4, "ngFor", "ngForOf"], [1, "icon-size-4", "text-red-500", 3, "matTooltip"], [1, "max-w-xs", "truncate", "px-4", "py-2", "whitespace-nowrap", 3, "ngClass", "matTooltip", "matTooltipDisabled"], ["class", "icon-size-4 shrink-0", 3, "ngClass", 4, "ngIf"], [1, "icon-size-4", "shrink-0", 3, "ngClass"], [1, "mt-4", "rounded-xl", "border", "border-amber-200", "bg-amber-50/90", "p-3", "text-sm", "text-amber-900", "dark:border-amber-800/50", "dark:bg-amber-950/25", "dark:text-amber-100"], [1, "rounded-2xl", "border", "border-stone-200/90", "bg-stone-900", "px-6", "py-6", "text-white", "shadow-sm", "dark:border-gray-700", "dark:bg-stone-950"], [1, "flex", "items-center", "justify-between", "gap-4"], [1, "text-sm", "text-stone-400"], [1, "text-3xl", "font-bold", "tracking-tight"], [1, "text-right"], [1, "text-lg", "text-stone-200"], ["diameter", "18", 1, "mr-2", "inline-block"]], template: function CreateBatchComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 2)(1, "header", 3)(2, "div", 4)(3, "div", 5)(4, "a", 6);
        \u0275\u0275text(5, " Verifik ");
        \u0275\u0275elementEnd();
        \u0275\u0275element(6, "mat-icon", 7);
        \u0275\u0275elementStart(7, "a", 8);
        \u0275\u0275text(8);
        \u0275\u0275pipe(9, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275template(10, CreateBatchComponent_ng_container_10_Template, 4, 4, "ng-container", 9);
        \u0275\u0275element(11, "mat-icon", 7);
        \u0275\u0275elementStart(12, "span", 10);
        \u0275\u0275text(13);
        \u0275\u0275pipe(14, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 11)(16, "div", 12)(17, "button", 13);
        \u0275\u0275pipe(18, "transloco");
        \u0275\u0275listener("click", function CreateBatchComponent_Template_button_click_17_listener() {
          return ctx.goBack();
        });
        \u0275\u0275elementStart(19, "mat-icon");
        \u0275\u0275text(20, "arrow_back");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "div", 14)(22, "h1", 15);
        \u0275\u0275text(23);
        \u0275\u0275pipe(24, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "p", 16);
        \u0275\u0275text(26);
        \u0275\u0275pipe(27, "transloco");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(28, "button", 17);
        \u0275\u0275pipe(29, "transloco");
        \u0275\u0275listener("click", function CreateBatchComponent_Template_button_click_28_listener() {
          return ctx.openTutorial();
        });
        \u0275\u0275elementStart(30, "mat-icon");
        \u0275\u0275text(31, "help_outline");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(32, "main", 18)(33, "div", 19);
        \u0275\u0275template(34, CreateBatchComponent_div_34_Template, 5, 3, "div", 20)(35, CreateBatchComponent_ng_container_35_Template, 50, 44, "ng-container", 9);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        let tmp_5_0;
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 9, "smartBatchLanding.title"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.configId());
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 11, "createBatch.createNewBatch"));
        \u0275\u0275advance(4);
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(18, 13, "createBatch.cancel"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(24, 15, "createBatch.createNewBatch"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(27, 17, "createBatch.uploadDataWith", \u0275\u0275pureFunction1(22, _c02, ((tmp_5_0 = ctx.configuration()) == null ? null : tmp_5_0.name) || "")), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(29, 20, "createBatch.showTutorial"));
        \u0275\u0275advance(6);
        \u0275\u0275property("ngIf", ctx.isLoading());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isLoading());
      }
    }, dependencies: [
      CommonModule,
      NgClass,
      NgForOf,
      NgIf,
      NgTemplateOutlet,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      ReactiveFormsModule,
      FormControlDirective,
      RouterModule,
      RouterLink,
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
    ], encapsulation: ViewEncapsulation.None, template: `<div class="flex min-h-screen min-w-0 flex-auto flex-col bg-stone-50 dark:bg-gray-950">\r
    <header\r
        class="border-b border-stone-200/90 bg-white/90 px-5 py-6 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-950/90 md:px-8 md:py-8"\r
    >\r
        <div class="mx-auto flex w-full max-w-5xl flex-col gap-5">\r
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
                    routerLink="/smart-batch"\r
                    class="cursor-pointer text-stone-700 underline-offset-4 hover:underline dark:text-stone-300"\r
                >\r
                    {{ 'smartBatchLanding.title' | transloco }}\r
                </a>\r
                <ng-container *ngIf="configId()">\r
                    <mat-icon\r
                        class="icon-size-4 mx-2 text-stone-400"\r
                        svgIcon="heroicons_solid:chevron-right"\r
                    ></mat-icon>\r
                    <a\r
                        [routerLink]="['/smart-batch', configId()]"\r
                        class="cursor-pointer text-stone-700 underline-offset-4 hover:underline dark:text-stone-300"\r
                    >\r
                        {{ configuration()?.name || configId() }}\r
                    </a>\r
                </ng-container>\r
                <mat-icon\r
                    class="icon-size-4 mx-2 text-stone-400"\r
                    svgIcon="heroicons_solid:chevron-right"\r
                ></mat-icon>\r
                <span class="cursor-default text-stone-600 dark:text-stone-300">{{\r
                    'createBatch.createNewBatch' | transloco\r
                }}</span>\r
            </div>\r
\r
            <div class="flex flex-wrap items-start justify-between gap-3">\r
                <div class="flex min-w-0 items-start gap-3">\r
                    <button\r
                        mat-icon-button\r
                        type="button"\r
                        (click)="goBack()"\r
                        class="shrink-0 !text-stone-600 dark:!text-stone-300"\r
                        [attr.aria-label]="'createBatch.cancel' | transloco"\r
                    >\r
                        <mat-icon>arrow_back</mat-icon>\r
                    </button>\r
                    <div class="min-w-0">\r
                        <h1\r
                            class="text-2xl font-semibold tracking-tight text-stone-900 dark:text-white md:text-3xl"\r
                        >\r
                            {{ 'createBatch.createNewBatch' | transloco }}\r
                        </h1>\r
                        <p class="mt-1 text-sm text-stone-500 dark:text-stone-400">\r
                            {{\r
                                'createBatch.uploadDataWith'\r
                                    | transloco: { name: configuration()?.name || '' }\r
                            }}\r
                        </p>\r
                    </div>\r
                </div>\r
                <button\r
                    mat-icon-button\r
                    type="button"\r
                    (click)="openTutorial()"\r
                    [matTooltip]="'createBatch.showTutorial' | transloco"\r
                    class="shrink-0 !text-stone-600 dark:!text-stone-300"\r
                >\r
                    <mat-icon>help_outline</mat-icon>\r
                </button>\r
            </div>\r
        </div>\r
    </header>\r
\r
    <main class="flex flex-auto flex-col px-5 py-8 md:px-8 md:py-10">\r
        <div class="mx-auto w-full max-w-5xl flex min-h-0 flex-1 flex-col gap-6">\r
            <div *ngIf="isLoading()" class="flex flex-1 flex-col items-center justify-center py-20">\r
                <mat-spinner diameter="40"></mat-spinner>\r
                <p class="mt-4 text-sm text-stone-500 dark:text-stone-400">\r
                    {{ 'createBatch.loadingConfiguration' | transloco }}\r
                </p>\r
            </div>\r
\r
            <ng-container *ngIf="!isLoading()">\r
                <!-- Required Fields Instructions Panel -->\r
                <div\r
                    class="overflow-hidden rounded-2xl border border-stone-200/90 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900"\r
                >\r
                    <div\r
                        class="flex cursor-pointer items-center justify-between border-b border-stone-200/90 bg-stone-50/80 px-6 py-4 dark:border-gray-800 dark:bg-gray-800/40"\r
                        (click)="toggleRequiredFieldsPanel()"\r
                    >\r
                        <div class="flex items-center gap-3">\r
                            <div\r
                                class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-stone-100 dark:bg-gray-800"\r
                            >\r
                                <mat-icon class="text-stone-600 dark:text-stone-400">info</mat-icon>\r
                            </div>\r
                            <div>\r
                                <h2 class="text-lg font-semibold text-stone-900 dark:text-white">\r
                                    {{ 'createBatch.csvFileRequirements' | transloco }}\r
                                </h2>\r
                                <p class="text-sm text-stone-500 dark:text-stone-400">\r
                                    {{\r
                                        'createBatch.fieldCountsSummary'\r
                                            | transloco\r
                                                : {\r
                                                      required: requiredFieldCount(),\r
                                                      optional: optionalFieldCount(),\r
                                                  }\r
                                    }}\r
                                </p>\r
                            </div>\r
                        </div>\r
                        <mat-icon\r
                            class="text-stone-400 transition-transform"\r
                            [class.rotate-180]="showRequiredFieldsPanel()"\r
                        >\r
                            expand_more\r
                        </mat-icon>\r
                    </div>\r
\r
                    <div *ngIf="showRequiredFieldsPanel()" class="space-y-6 p-6">\r
                        <div\r
                            class="flex items-start gap-4 rounded-xl border border-stone-200 bg-stone-50/80 p-4 dark:border-gray-700 dark:bg-gray-800/40"\r
                        >\r
                            <div\r
                                class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-stone-200/80 dark:bg-gray-700"\r
                            >\r
                                <mat-icon class="icon-size-5 text-stone-600 dark:text-stone-300"\r
                                    >rocket_launch</mat-icon\r
                                >\r
                            </div>\r
                            <div class="flex-1">\r
                                <h4 class="mb-1 font-medium text-stone-900 dark:text-white">\r
                                    {{ 'createBatch.quickStart' | transloco }}\r
                                </h4>\r
                                <p class="mb-3 text-sm text-stone-600 dark:text-stone-400">\r
                                    {{ 'createBatch.quickStartDesc' | transloco }}\r
                                </p>\r
                                <button\r
                                    mat-flat-button\r
                                    color="primary"\r
                                    (click)="downloadTemplate(); $event.stopPropagation()"\r
                                    class="rounded-xl"\r
                                >\r
                                    <mat-icon class="mr-2 !h-4 !w-4">download</mat-icon>\r
                                    {{ 'createBatch.downloadCsvTemplate' | transloco }}\r
                                </button>\r
                            </div>\r
                        </div>\r
\r
                        <!-- Expected field cards: shared template (flat grid or XOR grouped layout) -->\r
                        <ng-template #expectedFieldCard let-field="field">\r
                            <div\r
                                class="flex items-start gap-3 rounded-xl border bg-white p-3 dark:bg-gray-800/60"\r
                                [ngClass]="\r
                                    field.required\r
                                        ? 'border-orange-200 dark:border-orange-800/50'\r
                                        : fieldHasConditionalRule(field)\r
                                          ? 'border-sky-200 dark:border-sky-800/50'\r
                                          : 'border-stone-200 dark:border-gray-700'\r
                                "\r
                            >\r
                                <div\r
                                    class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold"\r
                                    [ngClass]="\r
                                        field.required\r
                                            ? 'bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400'\r
                                            : fieldHasConditionalRule(field)\r
                                              ? 'bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300'\r
                                              : 'bg-stone-100 text-stone-500 dark:bg-gray-700'\r
                                    "\r
                                >\r
                                    <mat-icon *ngIf="field.required" class="icon-size-4"\r
                                        >priority_high</mat-icon\r
                                    >\r
                                    <mat-icon\r
                                        *ngIf="!field.required && fieldHasConditionalRule(field)"\r
                                        class="icon-size-4"\r
                                        >rule_folder</mat-icon\r
                                    >\r
                                    <mat-icon\r
                                        *ngIf="!field.required && !fieldHasConditionalRule(field)"\r
                                        class="icon-size-4"\r
                                        >remove</mat-icon\r
                                    >\r
                                </div>\r
                                <div class="min-w-0 flex-1">\r
                                    <div class="flex flex-wrap items-center gap-2">\r
                                        <code\r
                                            class="rounded bg-stone-100 px-1.5 py-0.5 text-sm font-medium text-stone-900 dark:bg-gray-700 dark:text-white"\r
                                            >{{ field.field }}</code\r
                                        >\r
                                        <span\r
                                            *ngIf="field.required"\r
                                            class="text-[10px] font-bold uppercase text-orange-600 dark:text-orange-400"\r
                                            >{{ 'createBatch.required' | transloco }}</span\r
                                        >\r
                                        <span\r
                                            *ngIf="\r
                                                !field.required && fieldHasConditionalRule(field)\r
                                            "\r
                                            class="text-[10px] font-bold uppercase text-sky-700 dark:text-sky-300"\r
                                            >{{ 'createBatch.fieldConditional' | transloco }}</span\r
                                        >\r
                                        <span\r
                                            *ngIf="\r
                                                !field.required && !fieldHasConditionalRule(field)\r
                                            "\r
                                            class="text-[10px] font-medium uppercase text-stone-400"\r
                                            >{{ 'createBatch.optional' | transloco }}</span\r
                                        >\r
                                        <span\r
                                            *ngIf="field.enumValues?.length"\r
                                            class="text-[10px] font-medium uppercase text-violet-600 dark:text-violet-400"\r
                                        >\r
                                            \u2022 {{ 'createBatch.options' | transloco }}\r
                                        </span>\r
                                    </div>\r
                                    <p class="mt-1 text-xs text-stone-500 dark:text-stone-400">\r
                                        {{\r
                                            'createBatch.usedBy'\r
                                                | transloco: { stepName: field.stepName }\r
                                        }}\r
                                    </p>\r
                                    <p\r
                                        *ngIf="\r
                                            fieldHasConditionalRule(field) && !field.required\r
                                        "\r
                                        class="mt-1.5 text-xs leading-relaxed text-sky-800 dark:text-sky-200"\r
                                    >\r
                                        {{\r
                                            'createBatch.fieldConditionalDetail'\r
                                                | transloco\r
                                                    : {\r
                                                          whenField:\r
                                                              field.requiredWhen?.field ?? '',\r
                                                          values:\r
                                                              (field.requiredWhen?.in || []).join(\r
                                                                  ', '\r
                                                              ),\r
                                                      }\r
                                        }}\r
                                    </p>\r
                                    <div\r
                                        *ngIf="field.enumValues?.length"\r
                                        class="mt-2 flex flex-wrap gap-1"\r
                                    >\r
                                        <span\r
                                            *ngFor="let val of field.enumValues"\r
                                            class="rounded border border-violet-200 bg-violet-50 px-1.5 py-0.5 text-[10px] text-violet-700 dark:border-violet-800/50 dark:bg-violet-900/20 dark:text-violet-300"\r
                                        >\r
                                            {{ val }}\r
                                        </span>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                        </ng-template>\r
\r
                        <div *ngIf="requiredFields().length > 0">\r
                            <h4\r
                                class="mb-3 text-sm font-semibold uppercase tracking-wider text-stone-700 dark:text-stone-300"\r
                            >\r
                                {{ 'createBatch.expectedFieldsHeading' | transloco }}\r
                            </h4>\r
\r
                            <ng-container *ngIf="xorExpectedFieldGroups() as xor; else flatExpectedFields">\r
                                <p\r
                                    class="mb-4 text-sm leading-relaxed text-stone-600 dark:text-stone-400"\r
                                >\r
                                    {{ 'createBatch.searchModesIntro' | transloco }}\r
                                </p>\r
                                <div class="grid grid-cols-1 gap-4 lg:grid-cols-2">\r
                                    <div\r
                                        class="rounded-2xl border border-stone-200/90 bg-stone-50/50 p-4 dark:border-gray-700 dark:bg-gray-900/40"\r
                                    >\r
                                        <h5\r
                                            class="mb-3 text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300"\r
                                        >\r
                                            {{ 'createBatch.searchModeOptionFullName' | transloco }}\r
                                        </h5>\r
                                        <div class="grid grid-cols-1 gap-3 sm:grid-cols-2">\r
                                            <ng-container *ngFor="let field of xor.nameFields">\r
                                                <ng-container\r
                                                    *ngTemplateOutlet="\r
                                                        expectedFieldCard;\r
                                                        context: { field: field }\r
                                                    "\r
                                                ></ng-container>\r
                                            </ng-container>\r
                                        </div>\r
                                    </div>\r
                                    <div\r
                                        class="rounded-2xl border border-stone-200/90 bg-stone-50/50 p-4 dark:border-gray-700 dark:bg-gray-900/40"\r
                                    >\r
                                        <h5\r
                                            class="mb-3 text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300"\r
                                        >\r
                                            {{ 'createBatch.searchModeOptionDocument' | transloco }}\r
                                        </h5>\r
                                        <p\r
                                            *ngIf="xor.dobWhenValues as values"\r
                                            class="mb-3 text-xs leading-relaxed text-stone-600 dark:text-stone-400"\r
                                        >\r
                                            {{\r
                                                'createBatch.dateOfBirthConditionalHint'\r
                                                    | transloco: { values: values }\r
                                            }}\r
                                        </p>\r
                                        <div class="grid grid-cols-1 gap-3 sm:grid-cols-2">\r
                                            <ng-container *ngFor="let field of xor.documentFields">\r
                                                <ng-container\r
                                                    *ngTemplateOutlet="\r
                                                        expectedFieldCard;\r
                                                        context: { field: field }\r
                                                    "\r
                                                ></ng-container>\r
                                            </ng-container>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                            </ng-container>\r
                            <ng-template #flatExpectedFields>\r
                                <div class="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">\r
                                    <ng-container *ngFor="let field of requiredFields()">\r
                                        <ng-container\r
                                            *ngTemplateOutlet="\r
                                                expectedFieldCard;\r
                                                context: { field: field }\r
                                            "\r
                                        ></ng-container>\r
                                    </ng-container>\r
                                </div>\r
                            </ng-template>\r
                        </div>\r
\r
                        <div\r
                            *ngIf="requiredFields().length === 0"\r
                            class="py-8 text-center text-stone-500 dark:text-stone-400"\r
                        >\r
                            <mat-icon class="icon-size-12 mb-2 opacity-50">table_chart</mat-icon>\r
                            <p>{{ 'createBatch.noFieldsRequired' | transloco }}</p>\r
                        </div>\r
\r
                        <div\r
                            class="flex items-start gap-3 rounded-xl border border-amber-200/90 bg-amber-50/90 p-4 dark:border-amber-800/50 dark:bg-amber-950/20"\r
                        >\r
                            <mat-icon class="shrink-0 text-amber-600 dark:text-amber-400"\r
                                >lightbulb</mat-icon\r
                            >\r
                            <div class="text-sm text-amber-900 dark:text-amber-200">\r
                                {{ 'createBatch.proTip' | transloco }}\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>\r
\r
                <!-- Batch Name -->\r
                <div\r
                    class="rounded-2xl border border-stone-200/90 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900"\r
                >\r
                    <h2 class="mb-4 text-lg font-semibold text-stone-900 dark:text-white">\r
                        {{ 'createBatch.batchDetails' | transloco }}\r
                    </h2>\r
                    <mat-form-field class="w-full" appearance="outline">\r
                        <mat-label>{{ 'createBatch.batchName' | transloco }}</mat-label>\r
                        <input\r
                            matInput\r
                            [formControl]="$any(batchForm.get('name'))"\r
                            [placeholder]="'createBatch.batchNamePlaceholder' | transloco"\r
                        />\r
                        <mat-hint>{{ 'createBatch.batchNameHint' | transloco }}</mat-hint>\r
                    </mat-form-field>\r
                </div>\r
\r
                <!-- File Upload -->\r
                <div\r
                    class="rounded-2xl border border-stone-200/90 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900"\r
                >\r
                    <div class="mb-4 flex items-center justify-between">\r
                        <h2 class="text-lg font-semibold text-stone-900 dark:text-white">\r
                            {{ 'createBatch.uploadData' | transloco }}\r
                        </h2>\r
                        <button\r
                            *ngIf="!selectedFile()"\r
                            mat-stroked-button\r
                            color="primary"\r
                            (click)="downloadTemplate()"\r
                            class="!text-sm rounded-xl"\r
                        >\r
                            <mat-icon class="mr-1 icon-size-5">download</mat-icon>\r
                            {{ 'createBatch.template' | transloco }}\r
                        </button>\r
                    </div>\r
\r
                    <div\r
                        *ngIf="!selectedFile()"\r
                        (dragover)="onDragOver($event)"\r
                        (dragleave)="onDragLeave($event)"\r
                        (drop)="onDrop($event)"\r
                        [ngClass]="{\r
                            'border-stone-500 bg-stone-50 ring-1 ring-stone-400 dark:bg-gray-800/80':\r
                                isDragging(),\r
                        }"\r
                        class="cursor-pointer rounded-xl border-2 border-dashed border-stone-300 p-12 text-center transition-all hover:border-stone-400 hover:bg-stone-50 dark:border-gray-600 dark:hover:bg-gray-800/50"\r
                    >\r
                        <input\r
                            type="file"\r
                            id="fileInput"\r
                            class="hidden"\r
                            [accept]="acceptedFormats()"\r
                            (change)="onFileSelected($event)"\r
                        />\r
                        <label for="fileInput" class="cursor-pointer">\r
                            <div\r
                                class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-stone-100 dark:bg-gray-800"\r
                            >\r
                                <mat-icon class="icon-size-8 text-stone-400">cloud_upload</mat-icon>\r
                            </div>\r
                            <p class="mb-1 text-lg font-medium text-stone-900 dark:text-white">\r
                                {{ 'createBatch.dropOrClick' | transloco }}\r
                            </p>\r
                            <p class="text-sm text-stone-500 dark:text-stone-400">\r
                                {{\r
                                    'createBatch.acceptsFiles'\r
                                        | transloco\r
                                            : {\r
                                                  formats:\r
                                                      configuration()?.inputFormat?.toUpperCase() ||\r
                                                      'CSV, XLSX, JSONL',\r
                                              }\r
                                }}\r
                            </p>\r
                        </label>\r
                    </div>\r
\r
                    <div *ngIf="selectedFile()" class="space-y-4">\r
                        <div\r
                            class="flex items-center gap-4 rounded-xl border border-stone-200/90 bg-stone-50 p-4 dark:border-gray-700 dark:bg-gray-800/50"\r
                        >\r
                            <div\r
                                class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-stone-100 dark:bg-gray-800"\r
                            >\r
                                <mat-icon class="text-stone-600 dark:text-stone-400"\r
                                    >description</mat-icon\r
                                >\r
                            </div>\r
                            <div class="min-w-0 flex-1">\r
                                <p class="font-medium text-stone-900 dark:text-white">\r
                                    {{ selectedFile()?.name }}\r
                                </p>\r
                                <p class="text-sm text-stone-500 dark:text-stone-400">\r
                                    {{ formatFileSize(selectedFile()?.size || 0) }}\r
                                </p>\r
                            </div>\r
                            <button\r
                                mat-icon-button\r
                                (click)="removeFile()"\r
                                [matTooltip]="'createBatch.removeFile' | transloco"\r
                                class="!text-stone-600 dark:!text-stone-300"\r
                            >\r
                                <mat-icon>close</mat-icon>\r
                            </button>\r
                        </div>\r
\r
                        <ng-container *ngIf="fileCardIssueBanner() as banner">\r
                            <div\r
                                class="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50/90 p-4 dark:border-red-900/50 dark:bg-red-950/30"\r
                            >\r
                                <mat-icon class="shrink-0 text-red-600 dark:text-red-400"\r
                                    >error</mat-icon\r
                                >\r
                                <div>\r
                                    <p\r
                                        *ngIf="banner.mode === 'raw'"\r
                                        class="font-medium text-red-800 dark:text-red-200"\r
                                    >\r
                                        {{ banner.text }}\r
                                    </p>\r
                                    <p\r
                                        *ngIf="banner.mode === 'i18n'"\r
                                        class="font-medium text-red-800 dark:text-red-200"\r
                                    >\r
                                        {{ banner.key | transloco: banner.params }}\r
                                    </p>\r
                                    <button\r
                                        mat-button\r
                                        color="primary"\r
                                        class="!-ml-4 !mt-2 rounded-xl"\r
                                        (click)="downloadTemplate()"\r
                                    >\r
                                        <mat-icon class="mr-1 !h-4 !w-4">download</mat-icon>\r
                                        {{ 'createBatch.downloadCsvTemplate' | transloco }}\r
                                    </button>\r
                                </div>\r
                            </div>\r
                        </ng-container>\r
\r
                        <div\r
                            *ngIf="csvParseWarnings().length > 0"\r
                            class="flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50/90 p-4 dark:border-amber-800/50 dark:bg-amber-950/25"\r
                        >\r
                            <mat-icon class="shrink-0 text-amber-600 dark:text-amber-400"\r
                                >info</mat-icon\r
                            >\r
                            <ul\r
                                class="list-disc space-y-1 pl-4 text-sm text-amber-900 dark:text-amber-100"\r
                            >\r
                                <li *ngFor="let notice of csvParseWarnings()">\r
                                    {{ notice.key | transloco: notice.params }}\r
                                </li>\r
                            </ul>\r
                        </div>\r
\r
                        <div\r
                            *ngIf="parsedRows().length > 0 && !hasBlockingFileIssues()"\r
                            class="flex items-center gap-3 rounded-xl border border-emerald-200 bg-emerald-50/90 p-4 dark:border-emerald-900/40 dark:bg-emerald-950/25"\r
                        >\r
                            <mat-icon class="text-emerald-600 dark:text-emerald-400"\r
                                >check_circle</mat-icon\r
                            >\r
                            <div>\r
                                <p class="font-medium text-emerald-900 dark:text-emerald-100">\r
                                    {{\r
                                        'createBatch.rowsParsedSuccess'\r
                                            | transloco: { count: parsedRows().length }\r
                                    }}\r
                                </p>\r
                                <p class="text-sm text-emerald-700 dark:text-emerald-300/90">\r
                                    {{\r
                                        'createBatch.columnsDetected'\r
                                            | transloco: { count: previewColumns().length }\r
                                    }}\r
                                </p>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>\r
\r
                <!-- Data Preview -->\r
                <div\r
                    *ngIf="parsedRows().length > 0"\r
                    class="rounded-2xl border bg-white p-6 shadow-sm dark:bg-gray-900"\r
                    [ngClass]="\r
                        hasBlockingFileIssues()\r
                            ? 'border-red-300 dark:border-red-900/50'\r
                            : 'border-stone-200/90 dark:border-gray-800'\r
                    "\r
                >\r
                    <div class="mb-4 flex items-center justify-between">\r
                        <div class="flex items-center gap-3">\r
                            <h2 class="text-lg font-semibold text-stone-900 dark:text-white">\r
                                {{ 'createBatch.dataPreview' | transloco }}\r
                            </h2>\r
                            <span\r
                                *ngIf="errorSummary()"\r
                                class="inline-flex items-center gap-1 rounded-full bg-red-100 px-2 py-0.5 text-xs font-medium text-red-800 dark:bg-red-950/50 dark:text-red-300"\r
                            >\r
                                <mat-icon class="icon-size-3">error</mat-icon>\r
                                {{\r
                                    'createBatch.issuesCount'\r
                                        | transloco: { count: errorSummary()?.totalErrors || 0 }\r
                                }}\r
                            </span>\r
                        </div>\r
                        <span class="text-sm text-stone-500 dark:text-stone-400">\r
                            Showing first\r
                            {{ parsedRows().length > 10 ? 10 : parsedRows().length }} of\r
                            {{ parsedRows().length }} rows\r
                        </span>\r
                    </div>\r
\r
                    <div\r
                        *ngIf="errorSummary()"\r
                        class="mb-4 flex flex-wrap items-center gap-4 rounded-xl border border-red-200/90 bg-red-50/80 p-3 dark:border-red-900/40 dark:bg-red-950/20"\r
                    >\r
                        <span class="text-sm font-medium text-red-800 dark:text-red-200">\r
                            <mat-icon class="icon-size-4 mr-1 align-middle">warning</mat-icon>\r
                            {{ 'createBatch.fixHighlightedCells' | transloco }}\r
                        </span>\r
                        <div class="flex items-center gap-4 text-xs">\r
                            <span\r
                                *ngIf="errorSummary()?.missingCount"\r
                                class="flex items-center gap-1.5 text-red-800 dark:text-red-200"\r
                            >\r
                                <span class="h-3 w-3 rounded-sm bg-orange-400"></span>\r
                                {{\r
                                    'createBatch.missingValues'\r
                                        | transloco: { count: errorSummary()?.missingCount || 0 }\r
                                }}\r
                            </span>\r
                            <span\r
                                *ngIf="errorSummary()?.invalidEnumCount"\r
                                class="flex items-center gap-1.5 text-red-800 dark:text-red-200"\r
                            >\r
                                <span class="h-3 w-3 rounded-sm bg-red-500"></span>\r
                                {{\r
                                    'createBatch.invalidValues'\r
                                        | transloco\r
                                            : { count: errorSummary()?.invalidEnumCount || 0 }\r
                                }}\r
                            </span>\r
                            <span\r
                                *ngIf="errorSummary()?.dependencyRuleCount"\r
                                class="flex items-center gap-1.5 text-red-800 dark:text-red-200"\r
                            >\r
                                <span class="h-3 w-3 rounded-sm bg-amber-600"></span>\r
                                {{\r
                                    'createBatch.dependencyRuleIssues'\r
                                        | transloco\r
                                            : { count: errorSummary()?.dependencyRuleCount || 0 }\r
                                }}\r
                            </span>\r
                        </div>\r
                    </div>\r
\r
                    <div\r
                        class="overflow-x-auto rounded-xl border border-stone-200/90 dark:border-gray-800"\r
                    >\r
                        <table class="w-full text-sm">\r
                            <thead>\r
                                <tr class="bg-stone-50 dark:bg-gray-800/70">\r
                                    <th\r
                                        class="w-10 px-2 py-2 text-left text-xs font-medium text-stone-500 dark:text-stone-400"\r
                                    >\r
                                        #\r
                                    </th>\r
                                    <th\r
                                        *ngFor="let col of previewColumns()"\r
                                        class="whitespace-nowrap px-4 py-2 text-left text-xs font-medium text-stone-600 dark:text-stone-300"\r
                                    >\r
                                        {{ col }}\r
                                    </th>\r
                                </tr>\r
                            </thead>\r
                            <tbody>\r
                                <tr\r
                                    *ngFor="let row of parsedRows().slice(0, 10); let i = index"\r
                                    class="border-t border-stone-100 dark:border-gray-800"\r
                                    [ngClass]="\r
                                        rowHasErrors(i)\r
                                            ? 'bg-red-50/50 dark:bg-red-950/15'\r
                                            : 'bg-white dark:bg-gray-900/50'\r
                                    "\r
                                >\r
                                    <td class="px-2 py-2 font-mono text-xs text-stone-400">\r
                                        <span class="flex items-center gap-1">\r
                                            {{ i + 1 }}\r
                                            <mat-icon\r
                                                *ngIf="rowHasErrors(i)"\r
                                                class="icon-size-4 text-red-500"\r
                                                [matTooltip]="\r
                                                    'createBatch.errorsInRow'\r
                                                        | transloco\r
                                                            : { count: getRowErrors(i).length }\r
                                                "\r
                                            >\r
                                                error_outline\r
                                            </mat-icon>\r
                                        </span>\r
                                    </td>\r
                                    <td\r
                                        *ngFor="let col of previewColumns()"\r
                                        class="max-w-xs truncate px-4 py-2 whitespace-nowrap"\r
                                        [ngClass]="{\r
                                            'border-l-4 border-l-orange-400 bg-orange-50 dark:bg-orange-950/25':\r
                                                getCellError(i, col)?.type === 'missing',\r
                                            'border-l-4 border-l-red-500 bg-red-50 dark:bg-red-950/25':\r
                                                getCellError(i, col)?.type === 'invalid_enum',\r
                                            'text-stone-800 dark:text-stone-200': !getCellError(\r
                                                i,\r
                                                col\r
                                            ),\r
                                            'font-medium text-red-900 dark:text-red-200':\r
                                                getCellError(i, col),\r
                                        }"\r
                                        [matTooltip]="getCellError(i, col)?.message || ''"\r
                                        [matTooltipDisabled]="!getCellError(i, col)"\r
                                    >\r
                                        <span class="flex items-center gap-1">\r
                                            <span>{{\r
                                                row[col] ||\r
                                                    (getCellError(i, col)?.type === 'missing'\r
                                                        ? '(empty)'\r
                                                        : '-')\r
                                            }}</span>\r
                                            <mat-icon\r
                                                *ngIf="getCellError(i, col)"\r
                                                class="icon-size-4 shrink-0"\r
                                                [ngClass]="\r
                                                    getCellError(i, col)?.type === 'missing'\r
                                                        ? 'text-orange-500'\r
                                                        : 'text-red-500'\r
                                                "\r
                                            >\r
                                                {{\r
                                                    getCellError(i, col)?.type === 'missing'\r
                                                        ? 'warning'\r
                                                        : 'error'\r
                                                }}\r
                                            </mat-icon>\r
                                        </span>\r
                                    </td>\r
                                </tr>\r
                            </tbody>\r
                        </table>\r
                    </div>\r
\r
                    <div\r
                        *ngIf="errorSummary() && errorSummary()!.rowsWithErrors > 10"\r
                        class="mt-4 rounded-xl border border-amber-200 bg-amber-50/90 p-3 text-sm text-amber-900 dark:border-amber-800/50 dark:bg-amber-950/25 dark:text-amber-100"\r
                    >\r
                        <mat-icon class="icon-size-4 mr-1 align-middle">info</mat-icon>\r
                        {{\r
                            'createBatch.moreRowsHaveErrors'\r
                                | transloco: { count: errorSummary()!.rowsWithErrors - 10 }\r
                        }}\r
                    </div>\r
                </div>\r
\r
                <!-- Cost Estimate -->\r
                <div\r
                    *ngIf="parsedRows().length > 0 && !hasBlockingFileIssues()"\r
                    class="rounded-2xl border border-stone-200/90 bg-stone-900 px-6 py-6 text-white shadow-sm dark:border-gray-700 dark:bg-stone-950"\r
                >\r
                    <div class="flex items-center justify-between gap-4">\r
                        <div>\r
                            <p class="text-sm text-stone-400">\r
                                {{ 'createBatch.estimatedCost' | transloco }}\r
                            </p>\r
                            <p class="text-3xl font-bold tracking-tight">\r
                                \${{ estimatedCost().toFixed(2) }}\r
                            </p>\r
                        </div>\r
                        <div class="text-right">\r
                            <p class="text-sm text-stone-400">\r
                                {{ parsedRows().length }} {{ 'createBatch.rows' | transloco }}\r
                            </p>\r
                            <p class="text-lg text-stone-200">\r
                                \xD7 {{ configuration()?.steps?.length || 0 }}\r
                                {{ 'createBatch.steps' | transloco }}\r
                            </p>\r
                        </div>\r
                    </div>\r
                </div>\r
\r
                <!-- Actions -->\r
                <div\r
                    class="flex items-center justify-between gap-3 border-t border-stone-200 pt-8 dark:border-gray-800"\r
                >\r
                    <button mat-stroked-button type="button" (click)="goBack()" class="rounded-xl">\r
                        {{ 'createBatch.cancel' | transloco }}\r
                    </button>\r
                    <span\r
                        [matTooltip]="\r
                            (!hasValidData() || hasBlockingFileIssues()) && createBatchDisabledReason()\r
                                ? createBatchDisabledReason()\r
                                : ''\r
                        "\r
                    >\r
                        <button\r
                            mat-flat-button\r
                            color="primary"\r
                            type="button"\r
                            [disabled]="!hasValidData() || isSubmitting() || hasBlockingFileIssues()"\r
                            (click)="submit()"\r
                            class="min-w-32 rounded-xl"\r
                        >\r
                            <mat-spinner\r
                                *ngIf="isSubmitting()"\r
                                diameter="18"\r
                                class="mr-2 inline-block"\r
                            ></mat-spinner>\r
                            <mat-icon *ngIf="!isSubmitting()" class="mr-1 !h-4 !w-4"\r
                                >rocket_launch</mat-icon\r
                            >\r
                            {{\r
                                (isSubmitting()\r
                                    ? 'createBatch.creating'\r
                                    : 'createBatch.createBatch'\r
                                ) | transloco\r
                            }}\r
                        </button>\r
                    </span>\r
                </div>\r
            </ng-container>\r
        </div>\r
    </main>\r
</div>\r
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CreateBatchComponent, { className: "CreateBatchComponent", filePath: "src/app/modules/smart-batch/dashboard/create-batch/create-batch.component.ts", lineNumber: 111 });
})();
export {
  CreateBatchComponent
};
//# sourceMappingURL=chunk-W3YCKCEL.js.map
