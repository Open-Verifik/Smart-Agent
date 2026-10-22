import {
  LayoutTextDialogComponent,
  ReportBuilderAddConsultDialogComponent,
  SignaturePadDialogComponent,
  appendFeatureToBatchSteps,
  batchStepFeatureId,
  batchStepLabel,
  buildStepSequenceMap,
  ensureResultSlots,
  orderedBatchSteps,
  remapReportSectionPaths,
  remapResultsRecord
} from "./chunk-S7R2AAUY.js";
import "./chunk-YR6ZLJHC.js";
import {
  SendSampleModalComponent
} from "./chunk-WT632C7A.js";
import {
  ReportBuilderPreviewDataService
} from "./chunk-XGQ4FIEP.js";
import {
  REPORT_DESIGN_BODY_CLASS,
  REPORT_FONT_STACKS,
  REPORT_TEXT_ALIGNS,
  ReportPreviewComponent,
  applyVisibleKeyReorder,
  collectLayoutSheetItems,
  isHiddenParamKey,
  materializeSectionTypography,
  setHiddenParamKey,
  sortByKeyOrder,
  valueAtDataPath
} from "./chunk-YLQWA6P3.js";
import {
  REPORT_SHAPE_KINDS,
  SmartReportService,
  cloneReportValue
} from "./chunk-DZGBAIEV.js";
import {
  SmartBatchService
} from "./chunk-YYPGLQSF.js";
import {
  CdkDrag,
  CdkDragHandle,
  CdkDropList,
  DragDropModule,
  moveItemInArray
} from "./chunk-MIGBUUA4.js";
import "./chunk-JOCB7HVY.js";
import {
  MatSlideToggle,
  MatSlideToggleModule
} from "./chunk-GXL6XPV2.js";
import {
  MatSnackBar,
  MatSnackBarModule
} from "./chunk-N6A4QSA6.js";
import "./chunk-H3UX3NVF.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-LVI7H6QB.js";
import "./chunk-BQZ6NKDU.js";
import "./chunk-JURKDGMK.js";
import {
  MatOption,
  MatSelect,
  MatSelectModule
} from "./chunk-DT4JVZCC.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-DMXREZDX.js";
import "./chunk-CPZD6RE6.js";
import "./chunk-W5MZFF7W.js";
import {
  MatFormField,
  MatFormFieldModule,
  MatLabel
} from "./chunk-QUFOCOZK.js";
import {
  fuseAnimations
} from "./chunk-G7ZHONFE.js";
import "./chunk-VV26Z3PN.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-KIEFKQUB.js";
import {
  MatDialog,
  MatDialogModule
} from "./chunk-HVUVGZ2L.js";
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
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  MaxLengthValidator,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  NumberValueAccessor,
  RangeValueAccessor,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-JBF67GMG.js";
import {
  TranslocoModule,
  TranslocoPipe,
  TranslocoService,
  takeUntilDestroyed
} from "./chunk-FWBWCXY5.js";
import {
  ActivatedRoute,
  Router,
  RouterModule
} from "./chunk-QL64NPDU.js";
import "./chunk-3V5B4ZWC.js";
import {
  CommonModule,
  Component,
  DatePipe,
  DecimalPipe,
  DestroyRef,
  DomSanitizer,
  NgClass,
  NgTemplateOutlet,
  SlicePipe,
  Subject,
  ViewChild,
  catchError,
  computed,
  debounceTime,
  distinctUntilChanged,
  effect,
  firstValueFrom,
  inject,
  map,
  of,
  setClassMetadata,
  signal,
  switchMap,
  untracked,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
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
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-YWP2Y7QK.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-F5M2C4EZ.js";

// src/app/modules/smart-batch/helper-data.util.ts
function flattenDataForHelper(obj, prefix = "") {
  const paths = [];
  for (const [key, value] of Object.entries(obj)) {
    const path = prefix ? `${prefix}.${key}` : key;
    if (value != null && typeof value === "object" && !Array.isArray(value)) {
      paths.push({
        path,
        value: "",
        type: "object"
      });
      paths.push(...flattenDataForHelper(value, path));
    } else {
      const displayValue = value == null ? "\u2014" : typeof value === "string" ? value : Array.isArray(value) ? JSON.stringify(value) : String(value);
      paths.push({
        path,
        value: displayValue.length > 60 ? displayValue.slice(0, 60) + "\u2026" : displayValue,
        type: "leaf"
      });
    }
  }
  return paths;
}
function buildHelperDataPaths(previewData) {
  const paths = [];
  if (previewData.inputData && Object.keys(previewData.inputData).length > 0) {
    paths.push({ path: "inputData", value: "", type: "object" });
    paths.push(...flattenDataForHelper(previewData.inputData, "inputData"));
  }
  if (previewData.results && Object.keys(previewData.results).length > 0) {
    paths.push({ path: "results", value: "", type: "object" });
    paths.push(...flattenDataForHelper(previewData.results, "results"));
  }
  if (previewData.report && typeof previewData.report === "object") {
    paths.push({ path: "report", value: "", type: "object" });
    paths.push(...flattenDataForHelper(previewData.report, "report"));
  }
  return paths;
}

// src/app/modules/smart-batch/report-builder/report-builder-draft.ts
var STORAGE_KEY = "smart-batch.report-builder.sections-draft";
var isDraft = (value) => {
  if (!value || typeof value !== "object")
    return false;
  const draft = value;
  return typeof draft.templateId === "string" && Array.isArray(draft.sections);
};
var readBuilderSectionsDraft = (templateId) => {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw)
      return null;
    const parsed = JSON.parse(raw);
    if (!isDraft(parsed) || parsed.templateId !== templateId)
      return null;
    return parsed.sections;
  } catch {
    return null;
  }
};
var writeBuilderSectionsDraft = (templateId, sections) => {
  try {
    const payload = { templateId, sections };
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  } catch {
  }
};
var clearBuilderSectionsDraft = () => {
  try {
    sessionStorage.removeItem(STORAGE_KEY);
  } catch {
  }
};

// src/app/modules/smart-batch/report-builder/report-builder.component.ts
var _c0 = ["samplePreview"];
var _c1 = () => ({ key: "data", labelKey: "smartReport.railData", icon: "account_tree" });
var _c2 = () => ({ key: "blocks", labelKey: "smartReport.railBlocks", icon: "widgets" });
var _c3 = () => ({ key: "layers", labelKey: "smartReport.railLayers", icon: "layers" });
var _c4 = (a0, a1, a2) => [a0, a1, a2];
var _c5 = (a0, a1, a2, a3, a4) => ({ sections: a0, primaryColor: a1, pageSize: a2, headerLogos: a3, sheetImages: a4 });
var _c6 = () => [];
var _c7 = (a0) => [a0, "report-layers-drop"];
var _c8 = (a0) => ({ node: a0, depth: 0 });
var _c9 = (a0) => ({ "bg-indigo-50 ring-2 ring-indigo-500 dark:bg-indigo-950/30": a0 });
var _c10 = (a0) => ({ num: a0 });
var _c11 = (a0) => ({ sel: a0, hintKey: "smartReport.dotSeparatedPath" });
var _c12 = (a0) => ({ sel: a0, hintKey: "smartReport.pathToObject" });
var _c13 = (a0) => ({ sel: a0 });
var _c14 = (a0, a1) => ({ sel: a0, hintKey: a1 });
var _c15 = (a0) => ({ count: a0 });
var _c16 = (a0, a1) => ({ node: a0, depth: a1 });
var _forTrack0 = ($index, $item) => $item.key;
function _forTrack1($index, $item) {
  let tmp_0_0;
  return (tmp_0_0 = $item._id) !== null && tmp_0_0 !== void 0 ? tmp_0_0 : $item.id;
}
var _forTrack2 = ($index, $item) => $item.path;
var _forTrack3 = ($index, $item) => $item.sequence;
var _forTrack4 = ($index, $item) => $item.type;
var _forTrack5 = ($index, $item) => $item.id;
var _forTrack6 = ($index, $item) => $item._id;
var _forTrack7 = ($index, $item) => $item.sentAt + $item.subject;
var _forTrack8 = ($index, $item) => $item.value;
function ReportBuilderComponent_For_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 47);
    \u0275\u0275listener("click", function ReportBuilderComponent_For_20_Template_button_click_0_listener() {
      const step_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.goToStep(step_r3.key));
    });
    \u0275\u0275elementStart(1, "span", 48);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r3 = ctx.$implicit;
    const \u0275$index_33_r5 = ctx.$index;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r3.builderStep() === step_r3.key ? "bg-white text-stone-950 shadow-sm dark:bg-gray-800 dark:text-white" : "text-stone-500 hover:text-stone-800 dark:text-stone-400 dark:hover:text-stone-200");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r3.builderStep() === step_r3.key ? "bg-indigo-600 text-white" : "bg-stone-200 text-stone-600 dark:bg-gray-700 dark:text-stone-300");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275$index_33_r5 + 1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 4, step_r3.labelKey), " ");
  }
}
function ReportBuilderComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 49);
    \u0275\u0275text(1, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "smartReport.saving"), " ");
  }
}
function ReportBuilderComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 20);
    \u0275\u0275text(1, "save");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "smartReport.saveTemplate"), " ");
  }
}
function ReportBuilderComponent_For_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 50);
    \u0275\u0275listener("click", function ReportBuilderComponent_For_34_Template_button_click_0_listener() {
      const step_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.goToStep(step_r7.key));
    });
    \u0275\u0275elementStart(1, "span", 48);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r7 = ctx.$implicit;
    const \u0275$index_70_r8 = ctx.$index;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r3.builderStep() === step_r7.key ? "bg-white text-stone-950 shadow-sm dark:bg-gray-800 dark:text-white" : "text-stone-500 dark:text-stone-400");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r3.builderStep() === step_r7.key ? "bg-indigo-600 text-white" : "bg-stone-200 text-stone-600 dark:bg-gray-700 dark:text-stone-300");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275$index_70_r8 + 1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 4, step_r7.labelKey), " ");
  }
}
function ReportBuilderComponent_Conditional_37_For_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_15_0;
    const config_r10 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", (tmp_15_0 = (tmp_15_0 = config_r10._id) !== null && tmp_15_0 !== void 0 ? tmp_15_0 : config_r10.id) !== null && tmp_15_0 !== void 0 ? tmp_15_0 : "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.getConfigOptionLabel(config_r10), " ");
  }
}
function ReportBuilderComponent_Conditional_37_Conditional_79_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 119);
    \u0275\u0275element(1, "img", 120);
    \u0275\u0275elementStart(2, "button", 121);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275listener("click", function ReportBuilderComponent_Conditional_37_Conditional_79_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.removeLogo());
    });
    \u0275\u0275elementStart(4, "mat-icon", 122);
    \u0275\u0275text(5, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "label", 123)(7, "mat-icon", 124);
    \u0275\u0275text(8, "upload");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275elementStart(11, "input", 125);
    \u0275\u0275listener("change", function ReportBuilderComponent_Conditional_37_Conditional_79_Template_input_change_11_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.onLogoUpload($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "p", 37);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 126)(16, "label", 127)(17, "span", 128);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "input", 129);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "label", 127)(22, "span", 128);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275element(25, "input", 130);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "label", 131)(27, "span", 128);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275element(30, "input", 132);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 133)(32, "div", 134)(33, "p", 135);
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "p", 136);
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(39, "mat-slide-toggle", 137);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_12_0;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r3.logoUrl(), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(3, 10, "smartReport.remove"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 12, "smartReport.replaceLogo"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 14, "smartReport.dragLogoToPosition"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 16, "smartReport.width"), " (px) ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(24, 18, "smartReport.height"), " (px) ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(29, 20, "smartReport.rotation"), " (", (tmp_12_0 = (tmp_12_0 = ctx_r3.templateForm.get("logoRotation")) == null ? null : tmp_12_0.value) !== null && tmp_12_0 !== void 0 ? tmp_12_0 : 0, "\xB0) ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(35, 22, "smartReport.autoFitBelowLogo"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(38, 24, "smartReport.autoFitContentHint"), " ");
  }
}
function ReportBuilderComponent_Conditional_37_Conditional_80_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 138)(1, "mat-icon", 124);
    \u0275\u0275text(2, "upload");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementStart(5, "input", 125);
    \u0275\u0275listener("change", function ReportBuilderComponent_Conditional_37_Conditional_80_Template_input_change_5_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.onLogoUpload($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "p", 139);
    \u0275\u0275text(7, " PNG, JPG, SVG \xB7 max 500KB ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "smartReport.uploadLogo"), " ");
  }
}
function ReportBuilderComponent_Conditional_37_Conditional_88_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 87);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" (", \u0275\u0275pipeBind1(2, 2, "smartReport.autoFitLabel"), ": ", ctx_r3.getEffectiveContentPaddingTop(), " px) ");
  }
}
function ReportBuilderComponent_Conditional_37_Conditional_146_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-form-field", 107)(1, "mat-label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-select", 140)(5, "mat-option", 141);
    \u0275\u0275text(6, "\u2196 Top Left");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "mat-option", 142);
    \u0275\u0275text(8, "\u2191 Top Center");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "mat-option", 143);
    \u0275\u0275text(10, "\u2197 Top Right");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "mat-option", 144);
    \u0275\u0275text(12, "\u2199 Bottom Left");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "mat-option", 145);
    \u0275\u0275text(14, "\u2193 Bottom Center");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "mat-option", 146);
    \u0275\u0275text(16, "\u2198 Bottom Right");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "smartReport.pageNumberPosition"));
  }
}
function ReportBuilderComponent_Conditional_37_Conditional_155_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "input", 154);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(2, 1, "smartReport.watermarkTextPlaceholder"));
  }
}
function ReportBuilderComponent_Conditional_37_Conditional_155_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 149);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "smartReport.watermarkLogoHint"), " ");
  }
}
function ReportBuilderComponent_Conditional_37_Conditional_155_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 109)(1, "div", 147)(2, "button", 148);
    \u0275\u0275listener("click", function ReportBuilderComponent_Conditional_37_Conditional_155_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.onWatermarkTypeChange("text"));
    });
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 148);
    \u0275\u0275listener("click", function ReportBuilderComponent_Conditional_37_Conditional_155_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.onWatermarkTypeChange("logo"));
    });
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, ReportBuilderComponent_Conditional_37_Conditional_155_Conditional_8_Template, 3, 3, "div")(9, ReportBuilderComponent_Conditional_37_Conditional_155_Conditional_9_Template, 3, 3, "p", 149);
    \u0275\u0275elementStart(10, "div")(11, "div", 150)(12, "label", 37);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 86);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(18, "input", 151);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div")(20, "label", 152);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 147)(24, "button", 148);
    \u0275\u0275listener("click", function ReportBuilderComponent_Conditional_37_Conditional_155_Template_button_click_24_listener() {
      let tmp_7_0;
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView((tmp_7_0 = ctx_r3.templateForm.get("watermarkPattern")) == null ? null : tmp_7_0.setValue("single"));
    });
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "button", 148);
    \u0275\u0275listener("click", function ReportBuilderComponent_Conditional_37_Conditional_155_Template_button_click_27_listener() {
      let tmp_7_0;
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView((tmp_7_0 = ctx_r3.templateForm.get("watermarkPattern")) == null ? null : tmp_7_0.setValue("repeated"));
    });
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "label", 152);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275element(33, "input", 153);
    \u0275\u0275elementStart(34, "p", 128);
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_6_0;
    let tmp_8_0;
    let tmp_10_0;
    let tmp_11_0;
    let tmp_13_0;
    let tmp_15_0;
    let tmp_17_0;
    let tmp_19_0;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ((tmp_6_0 = ctx_r3.templateForm.get("watermarkType")) == null ? null : tmp_6_0.value) === "text" ? "border-indigo-300 bg-indigo-50 dark:border-indigo-600 dark:bg-indigo-950/30" : "border-stone-200 dark:border-gray-700");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 16, "smartReport.watermarkText"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ((tmp_8_0 = ctx_r3.templateForm.get("watermarkType")) == null ? null : tmp_8_0.value) === "logo" ? "border-indigo-300 bg-indigo-50 dark:border-indigo-600 dark:bg-indigo-950/30" : "border-stone-200 dark:border-gray-700");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 18, "smartReport.watermarkLogo"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(((tmp_10_0 = ctx_r3.templateForm.get("watermarkType")) == null ? null : tmp_10_0.value) === "text" ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_11_0 = ctx_r3.templateForm.get("watermarkType")) == null ? null : tmp_11_0.value) === "logo" && !ctx_r3.logoUrl() ? 9 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 20, "smartReport.watermarkOpacity"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(17, 22, ((tmp_13_0 = ctx_r3.templateForm.get("watermarkOpacity")) == null ? null : tmp_13_0.value) * 100, "1.0-0"), "%");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 25, "smartReport.watermarkPattern"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ((tmp_15_0 = ctx_r3.templateForm.get("watermarkPattern")) == null ? null : tmp_15_0.value) === "single" ? "border-indigo-300 bg-indigo-50 dark:border-indigo-600 dark:bg-indigo-950/30" : "border-stone-200 dark:border-gray-700");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(26, 27, "smartReport.watermarkSingle"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ((tmp_17_0 = ctx_r3.templateForm.get("watermarkPattern")) == null ? null : tmp_17_0.value) === "repeated" ? "border-indigo-300 bg-indigo-50 dark:border-indigo-600 dark:bg-indigo-950/30" : "border-stone-200 dark:border-gray-700");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(29, 29, "smartReport.watermarkRepeated"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(32, 31, "smartReport.rotation"), " (", (tmp_19_0 = (tmp_19_0 = ctx_r3.templateForm.get("watermarkRotation")) == null ? null : tmp_19_0.value) !== null && tmp_19_0 !== void 0 ? tmp_19_0 : -15, "\xB0) ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(36, 33, "smartReport.dragWatermarkToPosition"), " ");
  }
}
function ReportBuilderComponent_Conditional_37_Conditional_165_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 112)(1, "div")(2, "label", 152);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 155);
    \u0275\u0275element(6, "input", 156);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementStart(8, "button", 157);
    \u0275\u0275listener("click", function ReportBuilderComponent_Conditional_37_Conditional_165_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.showPassword = !ctx_r3.showPassword);
    });
    \u0275\u0275elementStart(9, "mat-icon", 122);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "p", 89);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "transloco");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 5, "smartReport.securityPassword"));
    \u0275\u0275advance(3);
    \u0275\u0275property("type", ctx_r3.showPassword ? "text" : "password")("placeholder", \u0275\u0275pipeBind1(7, 7, "smartReport.securityPasswordPlaceholder"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r3.showPassword ? "visibility_off" : "visibility");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 9, "smartReport.securityPasswordHint"), " ");
  }
}
function ReportBuilderComponent_Conditional_37_Conditional_175_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 119);
    \u0275\u0275element(1, "img", 159);
    \u0275\u0275elementStart(2, "button", 160);
    \u0275\u0275listener("click", function ReportBuilderComponent_Conditional_37_Conditional_175_Conditional_1_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.templateForm.patchValue({ signatureImage: null }));
    });
    \u0275\u0275elementStart(3, "mat-icon", 122);
    \u0275\u0275text(4, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(5, "p", 37);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 126)(9, "label", 127)(10, "span", 128);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "input", 161);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "label", 127)(15, "span", 128);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "input", 162);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_7_0;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("src", (tmp_7_0 = ctx_r3.templateForm.get("signatureImage")) == null ? null : tmp_7_0.value, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 4, "smartReport.dragSignatureToPosition"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 6, "smartReport.width"), " (px) ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 8, "smartReport.height"), " (px) ");
  }
}
function ReportBuilderComponent_Conditional_37_Conditional_175_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 163);
    \u0275\u0275listener("click", function ReportBuilderComponent_Conditional_37_Conditional_175_Conditional_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.openSignatureDialog());
    });
    \u0275\u0275elementStart(1, "mat-icon", 164);
    \u0275\u0275text(2, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "smartReport.drawSignature"), " ");
  }
}
function ReportBuilderComponent_Conditional_37_Conditional_175_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 112);
    \u0275\u0275template(1, ReportBuilderComponent_Conditional_37_Conditional_175_Conditional_1_Template, 19, 10)(2, ReportBuilderComponent_Conditional_37_Conditional_175_Conditional_2_Template, 5, 3, "button", 158);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_6_0;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_6_0 = ctx_r3.templateForm.get("signatureImage")) == null ? null : tmp_6_0.value) ? 1 : 2);
  }
}
function ReportBuilderComponent_Conditional_37_Conditional_183_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 117);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "smartReport.openFromReportViewer"), " ");
  }
}
function ReportBuilderComponent_Conditional_37_Conditional_184_For_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 165)(1, "code", 167);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 168);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 169);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275listener("click", function ReportBuilderComponent_Conditional_37_Conditional_184_For_2_Conditional_0_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r17);
      const item_r18 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.copyPathToClipboard(item_r18.path));
    });
    \u0275\u0275elementStart(7, "mat-icon", 170);
    \u0275\u0275text(8, "content_copy");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r18 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r18.path);
    \u0275\u0275advance();
    \u0275\u0275property("title", item_r18.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r18.value);
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(6, 4, "smartReport.copyPath"));
  }
}
function ReportBuilderComponent_Conditional_37_Conditional_184_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 166)(1, "span", 85);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 169);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275listener("click", function ReportBuilderComponent_Conditional_37_Conditional_184_For_2_Conditional_1_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r19);
      const item_r18 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.copyPathToClipboard(item_r18.path));
    });
    \u0275\u0275elementStart(5, "mat-icon", 170);
    \u0275\u0275text(6, "content_copy");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r18 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r18.path);
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(4, 2, "smartReport.copyPathForTable"));
  }
}
function ReportBuilderComponent_Conditional_37_Conditional_184_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ReportBuilderComponent_Conditional_37_Conditional_184_For_2_Conditional_0_Template, 9, 6, "div", 165)(1, ReportBuilderComponent_Conditional_37_Conditional_184_For_2_Conditional_1_Template, 7, 4, "div", 166);
  }
  if (rf & 2) {
    const item_r18 = ctx.$implicit;
    \u0275\u0275conditional(item_r18.type === "leaf" ? 0 : 1);
  }
}
function ReportBuilderComponent_Conditional_37_Conditional_184_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 118);
    \u0275\u0275repeaterCreate(1, ReportBuilderComponent_Conditional_37_Conditional_184_For_2_Template, 2, 1, null, null, _forTrack2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.helperDataPaths());
  }
}
function ReportBuilderComponent_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275listener("click", function ReportBuilderComponent_Conditional_37_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.showSettingsDrawer.set(false));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "aside", 52)(2, "div", 53)(3, "h3", 54);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 55);
    \u0275\u0275listener("click", function ReportBuilderComponent_Conditional_37_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.showSettingsDrawer.set(false));
    });
    \u0275\u0275elementStart(7, "mat-icon", 56);
    \u0275\u0275text(8, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 57)(10, "form", 58)(11, "mat-form-field", 59)(12, "mat-label");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "input", 60);
    \u0275\u0275pipe(16, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "mat-form-field", 59)(18, "mat-label");
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "mat-select", 61);
    \u0275\u0275listener("selectionChange", function ReportBuilderComponent_Conditional_37_Template_mat_select_selectionChange_21_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.setLinkedConfigId($event.value || null));
    });
    \u0275\u0275elementStart(22, "mat-option", 62);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(25, ReportBuilderComponent_Conditional_37_For_26_Template, 2, 2, "mat-option", 63, _forTrack1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 64)(28, "mat-form-field", 65)(29, "mat-label");
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "mat-select", 66)(33, "mat-option", 67);
    \u0275\u0275text(34, "A4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "mat-option", 68);
    \u0275\u0275text(36, "Letter");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "mat-option", 69);
    \u0275\u0275text(38, "Legal");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(39, "mat-form-field", 65)(40, "mat-label");
    \u0275\u0275text(41);
    \u0275\u0275pipe(42, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "mat-select", 70)(44, "mat-option", 71);
    \u0275\u0275text(45);
    \u0275\u0275pipe(46, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "mat-option", 72);
    \u0275\u0275text(48);
    \u0275\u0275pipe(49, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(50, "mat-form-field", 65)(51, "mat-label");
    \u0275\u0275text(52);
    \u0275\u0275pipe(53, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "mat-select", 73)(55, "mat-option", 74);
    \u0275\u0275text(56);
    \u0275\u0275pipe(57, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "mat-option", 75);
    \u0275\u0275text(59);
    \u0275\u0275pipe(60, "transloco");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(61, "div", 76)(62, "div", 9)(63, "label", 77);
    \u0275\u0275text(64);
    \u0275\u0275pipe(65, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275element(66, "input", 78);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "div", 9)(68, "label", 77);
    \u0275\u0275text(69);
    \u0275\u0275pipe(70, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275element(71, "input", 79);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(72, "div", 80)(73, "div", 36)(74, "mat-icon", 81);
    \u0275\u0275text(75, "image");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "span", 82);
    \u0275\u0275text(77);
    \u0275\u0275pipe(78, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(79, ReportBuilderComponent_Conditional_37_Conditional_79_Template, 40, 26)(80, ReportBuilderComponent_Conditional_37_Conditional_80_Template, 8, 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "div", 83)(82, "div", 84)(83, "label", 85);
    \u0275\u0275text(84);
    \u0275\u0275pipe(85, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "span", 86);
    \u0275\u0275text(87);
    \u0275\u0275template(88, ReportBuilderComponent_Conditional_37_Conditional_88_Template, 3, 4, "span", 87);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(89, "input", 88);
    \u0275\u0275elementStart(90, "p", 89);
    \u0275\u0275text(91);
    \u0275\u0275pipe(92, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(93, "div", 83)(94, "label", 90);
    \u0275\u0275text(95);
    \u0275\u0275pipe(96, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(97, "button", 91);
    \u0275\u0275listener("click", function ReportBuilderComponent_Conditional_37_Template_button_click_97_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.openFooterTextDialog());
    });
    \u0275\u0275elementStart(98, "span", 92);
    \u0275\u0275text(99);
    \u0275\u0275pipe(100, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(101, "mat-icon", 93);
    \u0275\u0275text(102, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(103, "label", 94);
    \u0275\u0275text(104);
    \u0275\u0275pipe(105, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(106, "mat-select", 95)(107, "mat-option", 96);
    \u0275\u0275text(108);
    \u0275\u0275pipe(109, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(110, "mat-option", 97);
    \u0275\u0275text(111);
    \u0275\u0275pipe(112, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(113, "mat-option", 98);
    \u0275\u0275text(114);
    \u0275\u0275pipe(115, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(116, "label", 99);
    \u0275\u0275text(117);
    \u0275\u0275pipe(118, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(119, "button", 100);
    \u0275\u0275listener("click", function ReportBuilderComponent_Conditional_37_Template_button_click_119_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.openTermsTextDialog());
    });
    \u0275\u0275elementStart(120, "span", 101);
    \u0275\u0275text(121);
    \u0275\u0275pipe(122, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(123, "mat-icon", 93);
    \u0275\u0275text(124, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(125, "label", 94);
    \u0275\u0275text(126);
    \u0275\u0275pipe(127, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(128, "mat-select", 102)(129, "mat-option", 96);
    \u0275\u0275text(130);
    \u0275\u0275pipe(131, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(132, "mat-option", 97);
    \u0275\u0275text(133);
    \u0275\u0275pipe(134, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(135, "mat-option", 98);
    \u0275\u0275text(136);
    \u0275\u0275pipe(137, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(138, "div", 83)(139, "div", 103)(140, "label", 85);
    \u0275\u0275text(141);
    \u0275\u0275pipe(142, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(143, "label", 104);
    \u0275\u0275element(144, "input", 105)(145, "div", 106);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(146, ReportBuilderComponent_Conditional_37_Conditional_146_Template, 17, 3, "mat-form-field", 107);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(147, "div", 83)(148, "div", 103)(149, "label", 85);
    \u0275\u0275text(150);
    \u0275\u0275pipe(151, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(152, "label", 104);
    \u0275\u0275element(153, "input", 108)(154, "div", 106);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(155, ReportBuilderComponent_Conditional_37_Conditional_155_Template, 37, 35, "div", 109);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(156, "div", 110)(157, "div", 8)(158, "div", 36)(159, "mat-icon", 81);
    \u0275\u0275text(160, "lock");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(161, "span", 82);
    \u0275\u0275text(162);
    \u0275\u0275pipe(163, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(164, "mat-slide-toggle", 111);
    \u0275\u0275elementEnd();
    \u0275\u0275template(165, ReportBuilderComponent_Conditional_37_Conditional_165_Template, 14, 11, "div", 112);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(166, "div", 110)(167, "div", 8)(168, "div", 36)(169, "mat-icon", 81);
    \u0275\u0275text(170, "draw");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(171, "span", 82);
    \u0275\u0275text(172);
    \u0275\u0275pipe(173, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(174, "mat-slide-toggle", 113);
    \u0275\u0275elementEnd();
    \u0275\u0275template(175, ReportBuilderComponent_Conditional_37_Conditional_175_Template, 3, 1, "div", 112);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(176, "div", 114)(177, "h4", 115);
    \u0275\u0275text(178);
    \u0275\u0275pipe(179, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(180, "p", 116);
    \u0275\u0275text(181);
    \u0275\u0275pipe(182, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(183, ReportBuilderComponent_Conditional_37_Conditional_183_Template, 3, 3, "p", 117)(184, ReportBuilderComponent_Conditional_37_Conditional_184_Template, 3, 0, "div", 118);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_10_0;
    let tmp_25_0;
    let tmp_26_0;
    let tmp_29_0;
    let tmp_30_0;
    let tmp_31_0;
    let tmp_37_0;
    let tmp_38_0;
    let tmp_39_0;
    let tmp_45_0;
    let tmp_47_0;
    let tmp_49_0;
    let tmp_51_0;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 53, "smartReport.documentSettings"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275property("formGroup", ctx_r3.templateForm);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 55, "smartReport.templateName"));
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(16, 57, "smartReport.templateNamePlaceholder"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 59, "smartReport.linkedConfigurationOptional"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", (tmp_10_0 = ctx_r3.linkedConfigId()) !== null && tmp_10_0 !== void 0 ? tmp_10_0 : "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 61, "smartReport.noLinkedConfiguration"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r3.configurations());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(31, 63, "smartReport.pageSize"));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(42, 65, "smartReport.orientation"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(46, 67, "smartReport.portrait"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(49, 69, "smartReport.landscape"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(53, 71, "smartReport.pdfEngine"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(57, 73, "smartReport.pdfEngineHtml"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(60, 75, "smartReport.pdfEngineClassic"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(65, 77, "smartReport.primaryColor"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(70, 79, "smartReport.pageBackgroundColor"));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(78, 81, "smartReport.workspaceLogo"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.logoUrl() ? 79 : 80);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(85, 83, "smartReport.contentTopPadding"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ((tmp_25_0 = ctx_r3.templateForm.get("bodyTopPadding")) == null ? null : tmp_25_0.value) || 0, " px ");
    \u0275\u0275advance();
    \u0275\u0275conditional((((tmp_26_0 = ctx_r3.templateForm.get("bodyTopPadding")) == null ? null : tmp_26_0.value) || 0) === 0 && ctx_r3.getEffectiveContentPaddingTop() > 0 ? 88 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(92, 85, "smartReport.contentTopPaddingHint"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(96, 87, "smartReport.footerCompany"));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("text-stone-400", !((tmp_29_0 = ctx_r3.templateForm.get("legend")) == null ? null : tmp_29_0.value))("text-stone-600", (tmp_30_0 = ctx_r3.templateForm.get("legend")) == null ? null : tmp_30_0.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ((tmp_31_0 = ctx_r3.templateForm.get("legend")) == null ? null : tmp_31_0.value) || \u0275\u0275pipeBind1(100, 89, "visitaGuide.layoutOpenEditor"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(105, 91, "smartReport.footerAlign"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(109, 93, "smartReport.alignLeft"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(112, 95, "smartReport.alignCenter"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(115, 97, "smartReport.alignRight"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(118, 99, "smartReport.termsAndConditions"));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("text-stone-400", !((tmp_37_0 = ctx_r3.templateForm.get("termsAndConditions")) == null ? null : tmp_37_0.value))("text-stone-600", (tmp_38_0 = ctx_r3.templateForm.get("termsAndConditions")) == null ? null : tmp_38_0.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ((tmp_39_0 = ctx_r3.templateForm.get("termsAndConditions")) == null ? null : tmp_39_0.value) || \u0275\u0275pipeBind1(122, 101, "visitaGuide.layoutOpenEditor"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(127, 103, "smartReport.footerAlign"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(131, 105, "smartReport.alignLeft"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(134, 107, "smartReport.alignCenter"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(137, 109, "smartReport.alignRight"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(142, 111, "smartReport.pageNumbers"));
    \u0275\u0275advance(5);
    \u0275\u0275conditional(((tmp_45_0 = ctx_r3.templateForm.get("showPageNumbers")) == null ? null : tmp_45_0.value) ? 146 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(151, 113, "smartReport.watermark"));
    \u0275\u0275advance(5);
    \u0275\u0275conditional(((tmp_47_0 = ctx_r3.templateForm.get("watermarkEnabled")) == null ? null : tmp_47_0.value) ? 155 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(163, 115, "smartReport.securityTitle"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(((tmp_49_0 = ctx_r3.templateForm.get("securityEnabled")) == null ? null : tmp_49_0.value) ? 165 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(173, 117, "smartReport.signature"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(((tmp_51_0 = ctx_r3.templateForm.get("signatureEnabled")) == null ? null : tmp_51_0.value) ? 175 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(179, 119, "smartReport.helperData"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(182, 121, "smartReport.helperDataHint"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.helperDataPaths().length === 0 ? 183 : 184);
  }
}
function ReportBuilderComponent_For_42_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 173);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.sections().length);
  }
}
function ReportBuilderComponent_For_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 171);
    \u0275\u0275listener("click", function ReportBuilderComponent_For_42_Template_button_click_0_listener() {
      const tab_r21 = \u0275\u0275restoreView(_r20).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.railTab.set(tab_r21.key));
    });
    \u0275\u0275elementStart(1, "mat-icon", 172);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275template(5, ReportBuilderComponent_For_42_Conditional_5_Template, 2, 1, "span", 173);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tab_r21 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r3.railTab() === tab_r21.key ? "bg-indigo-600 text-white" : "text-stone-500 hover:bg-stone-50 dark:text-stone-400 dark:hover:bg-gray-800/50");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tab_r21.icon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 4, tab_r21.labelKey), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(tab_r21.key === "layers" ? 5 : -1);
  }
}
function ReportBuilderComponent_Conditional_43_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 183);
    \u0275\u0275listener("click", function ReportBuilderComponent_Conditional_43_Conditional_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.editLinkedConfiguration());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "smartReport.consultEditConfig"), " ");
  }
}
function ReportBuilderComponent_Conditional_43_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 177);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "smartReport.consultLinkConfigFirst"), " ");
  }
}
function ReportBuilderComponent_Conditional_43_Conditional_11_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 185)(1, "span", 190);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 191);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const step_r24 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.consultStepLabel(step_r24));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" \xB7 results.", step_r24.sequence, "");
  }
}
function ReportBuilderComponent_Conditional_43_Conditional_11_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 187);
  }
}
function ReportBuilderComponent_Conditional_43_Conditional_11_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 188);
    \u0275\u0275text(1, "add");
    \u0275\u0275elementEnd();
  }
}
function ReportBuilderComponent_Conditional_43_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ul", 184);
    \u0275\u0275repeaterCreate(1, ReportBuilderComponent_Conditional_43_Conditional_11_For_2_Template, 5, 2, "li", 185, _forTrack3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 186);
    \u0275\u0275listener("click", function ReportBuilderComponent_Conditional_43_Conditional_11_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.openAddConsultDialog());
    });
    \u0275\u0275template(4, ReportBuilderComponent_Conditional_43_Conditional_11_Conditional_4_Template, 1, 0, "mat-spinner", 187)(5, ReportBuilderComponent_Conditional_43_Conditional_11_Conditional_5_Template, 2, 0, "mat-icon", 188);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 189);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.consultSteps());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r3.isUpdatingConsults());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.isUpdatingConsults() ? 4 : 5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 4, "smartReport.consultAddButton"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 6, "smartReport.consultSampleHint"), " ");
  }
}
function ReportBuilderComponent_Conditional_43_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 180);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "smartReport.rendering"), " ");
  }
}
function ReportBuilderComponent_Conditional_43_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 181);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "smartReport.openFromReportViewer"), " ");
  }
}
function ReportBuilderComponent_Conditional_43_For_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 182);
  }
  if (rf & 2) {
    const node_r25 = ctx.$implicit;
    \u0275\u0275nextContext(2);
    const dataNodeRow_r26 = \u0275\u0275reference(69);
    \u0275\u0275property("ngTemplateOutlet", dataNodeRow_r26)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c8, node_r25));
  }
}
function ReportBuilderComponent_Conditional_43_Conditional_25_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 182);
  }
  if (rf & 2) {
    const node_r27 = ctx.$implicit;
    \u0275\u0275nextContext(3);
    const dataNodeRow_r26 = \u0275\u0275reference(69);
    \u0275\u0275property("ngTemplateOutlet", dataNodeRow_r26)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c8, node_r27));
  }
}
function ReportBuilderComponent_Conditional_43_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 192);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, ReportBuilderComponent_Conditional_43_Conditional_25_For_4_Template, 1, 4, "ng-container", 182, _forTrack2);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "smartReport.batchFields"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r3.batchNodes());
  }
}
function ReportBuilderComponent_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 174)(1, "div", 175)(2, "div")(3, "h3", 54);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 37);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, ReportBuilderComponent_Conditional_43_Conditional_9_Template, 3, 3, "button", 176);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, ReportBuilderComponent_Conditional_43_Conditional_10_Template, 3, 3, "p", 177)(11, ReportBuilderComponent_Conditional_43_Conditional_11_Template, 11, 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 31)(13, "div", 178)(14, "h3", 54);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "p", 37);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 179);
    \u0275\u0275template(21, ReportBuilderComponent_Conditional_43_Conditional_21_Template, 3, 3, "p", 180)(22, ReportBuilderComponent_Conditional_43_Conditional_22_Template, 3, 3, "p", 181);
    \u0275\u0275repeaterCreate(23, ReportBuilderComponent_Conditional_43_For_24_Template, 1, 4, "ng-container", 182, _forTrack2);
    \u0275\u0275template(25, ReportBuilderComponent_Conditional_43_Conditional_25_Template, 5, 3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 10, "smartReport.consultSectionTitle"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 12, "smartReport.consultSectionHint"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.linkedConfigId() ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r3.linkedConfigId() ? 10 : 11);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 14, "smartReport.dataPalette"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 16, "smartReport.dataPaletteHint"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("cdkDropListConnectedTo", \u0275\u0275pureFunction1(18, _c7, ctx_r3.canvasDropListId))("cdkDropListSortingDisabled", true);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.isIntrospecting() && ctx_r3.dataNodes().length === 0 ? 21 : ctx_r3.dataNodes().length === 0 ? 22 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r3.dataNodes());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.batchNodes().length > 0 ? 25 : -1);
  }
}
function ReportBuilderComponent_Conditional_44_For_5_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 198);
    \u0275\u0275listener("click", function ReportBuilderComponent_Conditional_44_For_5_For_6_Template_button_click_0_listener() {
      const sectionType_r29 = \u0275\u0275restoreView(_r28).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.addSection(sectionType_r29.type));
    });
    \u0275\u0275elementStart(1, "mat-icon", 56);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const sectionType_r29 = ctx.$implicit;
    \u0275\u0275property("cdkDragData", sectionType_r29.type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(sectionType_r29.icon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 3, sectionType_r29.labelKey), " ");
  }
}
function ReportBuilderComponent_Conditional_44_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 194)(1, "p", 195);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 196);
    \u0275\u0275repeaterCreate(5, ReportBuilderComponent_Conditional_44_For_5_For_6_Template, 5, 5, "button", 197, _forTrack4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const group_r30 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, group_r30.labelKey), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("cdkDropListConnectedTo", \u0275\u0275pureFunction1(5, _c7, ctx_r3.canvasDropListId))("cdkDropListSortingDisabled", true);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.sectionTypesForGroup(group_r30.key));
  }
}
function ReportBuilderComponent_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "h3", 193);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(4, ReportBuilderComponent_Conditional_44_For_5_Template, 7, 7, "div", 194, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "smartReport.addSections"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r3.sectionGroups);
  }
}
function ReportBuilderComponent_Conditional_45_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 202)(1, "mat-icon", 204);
    \u0275\u0275text(2, "add_box");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 205);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 1, "smartReport.addSectionsFromAbove"), " ");
  }
}
function ReportBuilderComponent_Conditional_45_For_15_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const section_r33 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", section_r33.label, " ");
  }
}
function ReportBuilderComponent_Conditional_45_For_15_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "slice");
  }
  if (rf & 2) {
    const section_r33 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind3(1, 2, section_r33.staticContent, 0, 30), "", section_r33.staticContent.length > 30 ? "..." : "", " ");
  }
}
function ReportBuilderComponent_Conditional_45_For_15_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const section_r33 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", section_r33.dataPath, " ");
  }
}
function ReportBuilderComponent_Conditional_45_For_15_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    const section_r33 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, "smartReport.sectionNumber", \u0275\u0275pureFunction1(4, _c10, section_r33.order + 1)), " ");
  }
}
function ReportBuilderComponent_Conditional_45_For_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 206);
    \u0275\u0275listener("click", function ReportBuilderComponent_Conditional_45_For_15_Template_div_click_0_listener() {
      const section_r33 = \u0275\u0275restoreView(_r32).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.selectSection(section_r33));
    });
    \u0275\u0275elementStart(1, "div", 207)(2, "mat-icon", 208);
    \u0275\u0275text(3, "drag_indicator");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 209)(5, "mat-icon", 124);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 210)(8, "p", 211);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 212);
    \u0275\u0275template(11, ReportBuilderComponent_Conditional_45_For_15_Conditional_11_Template, 1, 1)(12, ReportBuilderComponent_Conditional_45_For_15_Conditional_12_Template, 2, 6)(13, ReportBuilderComponent_Conditional_45_For_15_Conditional_13_Template, 1, 1)(14, ReportBuilderComponent_Conditional_45_For_15_Conditional_14_Template, 2, 6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 213)(16, "button", 214);
    \u0275\u0275pipe(17, "transloco");
    \u0275\u0275listener("click", function ReportBuilderComponent_Conditional_45_For_15_Template_button_click_16_listener($event) {
      const section_r33 = \u0275\u0275restoreView(_r32).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      ctx_r3.duplicateSection(section_r33);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(18, "mat-icon", 215);
    \u0275\u0275text(19, "content_copy");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "button", 214);
    \u0275\u0275pipe(21, "transloco");
    \u0275\u0275listener("click", function ReportBuilderComponent_Conditional_45_For_15_Template_button_click_20_listener($event) {
      const section_r33 = \u0275\u0275restoreView(_r32).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      ctx_r3.deleteSection(section_r33.id);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(22, "mat-icon", 216);
    \u0275\u0275text(23, "delete");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_15_0;
    let tmp_16_0;
    let tmp_17_0;
    const section_r33 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(14, _c9, ((tmp_15_0 = ctx_r3.currentSelectedSection()) == null ? null : tmp_15_0.id) === section_r33.id));
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("background", ((tmp_16_0 = ctx_r3.templateForm.get("primaryColor")) == null ? null : tmp_16_0.value) + "15");
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", (tmp_17_0 = ctx_r3.templateForm.get("primaryColor")) == null ? null : tmp_17_0.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.getSectionIcon(section_r33.type));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r3.getSectionLabel(section_r33.type), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(section_r33.label ? 11 : section_r33.staticContent ? 12 : section_r33.dataPath ? 13 : 14);
    \u0275\u0275advance(5);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(17, 10, "smartReport.duplicate"));
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(21, 12, "smartReport.delete"));
  }
}
function ReportBuilderComponent_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 31)(1, "div", 199)(2, "div")(3, "h3", 54);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 37);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "span", 200);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 201);
    \u0275\u0275listener("cdkDropListDropped", function ReportBuilderComponent_Conditional_45_Template_div_cdkDropListDropped_12_listener($event) {
      \u0275\u0275restoreView(_r31);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onDrop($event));
    });
    \u0275\u0275template(13, ReportBuilderComponent_Conditional_45_Conditional_13_Template, 6, 3, "div", 202);
    \u0275\u0275repeaterCreate(14, ReportBuilderComponent_Conditional_45_For_15_Template, 24, 16, "div", 203, _forTrack5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 5, "smartReport.reportLayout"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 7, "smartReport.dragToReorder"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r3.sections().length, " ", \u0275\u0275pipeBind1(11, 9, "smartReport.sections"), "");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r3.sections().length === 0 ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.sections());
  }
}
function ReportBuilderComponent_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "smartReport.rendering"));
  }
}
function ReportBuilderComponent_Conditional_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38)(1, "button", 217);
    \u0275\u0275listener("click", function ReportBuilderComponent_Conditional_54_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r34);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.setPreviewMode("edit"));
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 217);
    \u0275\u0275listener("click", function ReportBuilderComponent_Conditional_54_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r34);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.setPreviewMode("exact"));
    });
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r3.previewMode() === "edit" ? "bg-indigo-600 text-white" : "text-stone-500 hover:text-stone-800 dark:text-stone-400");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, "smartReport.previewModeEdit"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r3.previewMode() === "exact" ? "bg-indigo-600 text-white" : "text-stone-500 hover:text-stone-800 dark:text-stone-400");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 6, "smartReport.previewModeExact"), " ");
  }
}
function ReportBuilderComponent_Conditional_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 39);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "smartReport.previewModeExact"), " ");
  }
}
function ReportBuilderComponent_Conditional_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 40);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "smartReport.editModeHint"), " ");
  }
}
function ReportBuilderComponent_Conditional_57_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 220);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "smartReport.saveTemplateFirst"), " ");
  }
}
function ReportBuilderComponent_Conditional_57_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 49);
    \u0275\u0275text(1, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "smartReport.sendingSample"), " ");
  }
}
function ReportBuilderComponent_Conditional_57_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 20);
    \u0275\u0275text(1, "send");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "smartReport.sendSample"), " ");
  }
}
function ReportBuilderComponent_Conditional_57_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 49);
    \u0275\u0275text(1, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "smartReport.downloadingSample"), " ");
  }
}
function ReportBuilderComponent_Conditional_57_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 20);
    \u0275\u0275text(1, "file_download");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "smartReport.downloadSample"), " ");
  }
}
function ReportBuilderComponent_Conditional_57_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "smartReport.rendering"));
  }
}
function ReportBuilderComponent_Conditional_57_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 223);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "smartReport.noDeliveries"), " ");
  }
}
function ReportBuilderComponent_Conditional_57_Conditional_25_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 226)(1, "mat-icon", 227);
    \u0275\u0275text(2, "description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 210)(4, "p", 211);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 37);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "span", 228);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_17_0;
    const report_r36 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", report_r36.name || \u0275\u0275pipeBind1(6, 5, "smartReport.untitledReport"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", ((tmp_17_0 = report_r36.emailHistory) !== null && tmp_17_0 !== void 0 ? tmp_17_0 : \u0275\u0275pureFunction0(9, _c6)).length, " ", \u0275\u0275pipeBind1(9, 7, "smartReport.emailsSent"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r3.statusClasses(report_r36.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(report_r36.status);
  }
}
function ReportBuilderComponent_Conditional_57_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 224);
    \u0275\u0275repeaterCreate(1, ReportBuilderComponent_Conditional_57_Conditional_25_For_2_Template, 12, 10, "div", 226, _forTrack6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.deliveries());
  }
}
function ReportBuilderComponent_Conditional_57_Conditional_26_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 229)(1, "span", 230);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 231);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 232);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const entry_r37 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r3.statusClasses(entry_r37.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(entry_r37.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(entry_r37.recipients.join(", "));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 4, entry_r37.sentAt, "short"));
  }
}
function ReportBuilderComponent_Conditional_57_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 225);
    \u0275\u0275repeaterCreate(1, ReportBuilderComponent_Conditional_57_Conditional_26_For_2_Template, 8, 7, "div", 229, _forTrack7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.deliveryHistory());
  }
}
function ReportBuilderComponent_Conditional_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41)(1, "div", 218)(2, "h3", 54);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 219);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, ReportBuilderComponent_Conditional_57_Conditional_8_Template, 3, 3, "p", 220);
    \u0275\u0275elementStart(9, "div", 221)(10, "button", 21);
    \u0275\u0275listener("click", function ReportBuilderComponent_Conditional_57_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r35);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.sendSample());
    });
    \u0275\u0275elementStart(11, "span", 19);
    \u0275\u0275template(12, ReportBuilderComponent_Conditional_57_Conditional_12_Template, 4, 3)(13, ReportBuilderComponent_Conditional_57_Conditional_13_Template, 4, 3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "button", 222);
    \u0275\u0275listener("click", function ReportBuilderComponent_Conditional_57_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r35);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.downloadSamplePdf());
    });
    \u0275\u0275elementStart(15, "span", 19);
    \u0275\u0275template(16, ReportBuilderComponent_Conditional_57_Conditional_16_Template, 4, 3)(17, ReportBuilderComponent_Conditional_57_Conditional_17_Template, 4, 3);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(18, "div", 31)(19, "div", 199)(20, "h3", 54);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(23, ReportBuilderComponent_Conditional_57_Conditional_23_Template, 3, 3, "span", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275template(24, ReportBuilderComponent_Conditional_57_Conditional_24_Template, 3, 3, "p", 223)(25, ReportBuilderComponent_Conditional_57_Conditional_25_Template, 3, 0, "div", 224)(26, ReportBuilderComponent_Conditional_57_Conditional_26_Template, 3, 0, "div", 225);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 11, "smartReport.deliverTitle"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 13, "smartReport.deliverHint"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r3.templateId() ? 8 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r3.templateId() || ctx_r3.isSendingSample() || ctx_r3.isDownloadingSample());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.isSendingSample() ? 12 : 13);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r3.templateId() || ctx_r3.isDownloadingSample() || ctx_r3.isSendingSample());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.isDownloadingSample() ? 16 : 17);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 15, "smartReport.deliveryHistory"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.isLoadingDeliveries() ? 23 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.deliveries().length === 0 ? 24 : 25);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.deliveryHistory().length > 0 ? 26 : -1);
  }
}
function ReportBuilderComponent_Conditional_58_Conditional_21_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 241);
    \u0275\u0275text(1, "Selected Section:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2);
  }
  if (rf & 2) {
    const sel_r39 = ctx;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", ctx_r3.getSectionLabel(sel_r39.type), " (Order: ", sel_r39.order + 1, ") ");
  }
}
function ReportBuilderComponent_Conditional_58_Conditional_21_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 241);
    \u0275\u0275text(1, "\u26A0\uFE0F No section selected:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, " Click on a section in the preview or left list to modify it. ");
  }
}
function ReportBuilderComponent_Conditional_58_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 238);
    \u0275\u0275template(1, ReportBuilderComponent_Conditional_58_Conditional_21_Conditional_1_Template, 3, 2)(2, ReportBuilderComponent_Conditional_58_Conditional_21_Conditional_2_Template, 3, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_8_0;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", ctx_r3.currentSelectedSection() ? "border-indigo-100 bg-indigo-50/40 text-indigo-900 dark:border-indigo-950/20 dark:bg-indigo-950/20 dark:text-indigo-200" : "border-amber-100 bg-amber-50/40 text-amber-900 dark:border-amber-950/20 dark:bg-amber-950/20 dark:text-amber-200");
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_8_0 = ctx_r3.currentSelectedSection()) ? 1 : 2, tmp_8_0);
  }
}
function ReportBuilderComponent_Conditional_58_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 49);
    \u0275\u0275text(1, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "smartReport.generatingLayout"), " ");
  }
}
function ReportBuilderComponent_Conditional_58_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 20);
    \u0275\u0275text(1, "auto_awesome");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "smartReport.generateLayout"), " ");
  }
}
function ReportBuilderComponent_Conditional_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42)(1, "div", 233)(2, "div", 36)(3, "span", 234)(4, "mat-icon", 170);
    \u0275\u0275text(5, "auto_awesome");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div")(7, "h3", 54);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 235);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "transloco");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(13, "div", 109)(14, "div", 236)(15, "button", 237);
    \u0275\u0275listener("click", function ReportBuilderComponent_Conditional_58_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r38);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.aiMode.set("create"));
    });
    \u0275\u0275text(16, " Rebuild All ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 237);
    \u0275\u0275listener("click", function ReportBuilderComponent_Conditional_58_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r38);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.aiMode.set("edit"));
    });
    \u0275\u0275text(18, " Edit Section ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 237);
    \u0275\u0275listener("click", function ReportBuilderComponent_Conditional_58_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r38);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.aiMode.set("append"));
    });
    \u0275\u0275text(20, " Add Section ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(21, ReportBuilderComponent_Conditional_58_Conditional_21_Template, 3, 2, "div", 238);
    \u0275\u0275element(22, "textarea", 239, 4);
    \u0275\u0275pipe(24, "transloco");
    \u0275\u0275elementStart(25, "div", 8)(26, "button", 240);
    \u0275\u0275listener("click", function ReportBuilderComponent_Conditional_58_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r38);
      const aiPromptInput_r40 = \u0275\u0275reference(23);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(aiPromptInput_r40.value = ctx_r3.aiMode() === "edit" ? "Center this text and make it color #4F46E5" : ctx_r3.aiMode() === "append" ? "Add a divider line and a spacer" : "Title at the top, divider, plate number, and details");
    });
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "button", 21);
    \u0275\u0275listener("click", function ReportBuilderComponent_Conditional_58_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r38);
      const aiPromptInput_r40 = \u0275\u0275reference(23);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.generateLayoutWithAI(aiPromptInput_r40.value));
    });
    \u0275\u0275elementStart(30, "span", 19);
    \u0275\u0275template(31, ReportBuilderComponent_Conditional_58_Conditional_31_Template, 4, 3)(32, ReportBuilderComponent_Conditional_58_Conditional_32_Template, 4, 3);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const aiPromptInput_r40 = \u0275\u0275reference(23);
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 12, "smartReport.aiLayoutAssistant"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 14, "smartReport.aiLayoutAssistantHint"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ctx_r3.aiMode() === "create" ? "bg-white text-stone-900 shadow-sm dark:bg-gray-900 dark:text-white" : "text-stone-500 hover:text-stone-700 dark:text-stone-400 dark:hover:text-stone-300");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r3.aiMode() === "edit" ? "bg-white text-stone-900 shadow-sm dark:bg-gray-900 dark:text-white" : "text-stone-500 hover:text-stone-700 dark:text-stone-400 dark:hover:text-stone-300");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r3.aiMode() === "append" ? "bg-white text-stone-900 shadow-sm dark:bg-gray-900 dark:text-white" : "text-stone-500 hover:text-stone-700 dark:text-stone-400 dark:hover:text-stone-300");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.aiMode() === "edit" ? 21 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", ctx_r3.aiMode() === "edit" ? "e.g., Center this header text and make it color #4F46E5" : ctx_r3.aiMode() === "append" ? "e.g., Add a divider and a field section showing status" : \u0275\u0275pipeBind1(24, 16, "smartReport.aiPromptPlaceholder"))("disabled", ctx_r3.aiMode() === "edit" && !ctx_r3.currentSelectedSection());
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r3.aiMode() === "edit" && !ctx_r3.currentSelectedSection());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(28, 18, "smartReport.useSamplePrompt"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r3.isGeneratingAI() || !aiPromptInput_r40.value.trim() || ctx_r3.aiMode() === "edit" && !ctx_r3.currentSelectedSection());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.isGeneratingAI() ? 31 : 32);
  }
}
function ReportBuilderComponent_Conditional_59_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "label", 90);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 250);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275listener("input", function ReportBuilderComponent_Conditional_59_Conditional_12_Template_input_input_4_listener($event) {
      \u0275\u0275restoreView(_r42);
      const sel_r43 = \u0275\u0275nextContext();
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.updateSection(sel_r43.id, { staticContent: $event.target.value, label: $event.target.value }));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const sel_r43 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "smartReport.titleText"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", sel_r43.staticContent || "")("placeholder", \u0275\u0275pipeBind1(5, 5, "smartReport.reportTitle"));
  }
}
function ReportBuilderComponent_Conditional_59_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "label", 90);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "textarea", 251);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275listener("input", function ReportBuilderComponent_Conditional_59_Conditional_13_Template_textarea_input_4_listener($event) {
      \u0275\u0275restoreView(_r44);
      const sel_r43 = \u0275\u0275nextContext();
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.updateSection(sel_r43.id, { staticContent: $event.target.value }));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const sel_r43 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "smartReport.content"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", sel_r43.staticContent || "")("placeholder", \u0275\u0275pipeBind1(5, 5, "smartReport.enterTextContent"));
  }
}
function ReportBuilderComponent_Conditional_59_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "label", 90);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 250);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275listener("input", function ReportBuilderComponent_Conditional_59_Conditional_14_Template_input_input_4_listener($event) {
      \u0275\u0275restoreView(_r45);
      const sel_r43 = \u0275\u0275nextContext();
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.updateSection(sel_r43.id, { label: $event.target.value }));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainer(6, 182);
  }
  if (rf & 2) {
    const sel_r43 = \u0275\u0275nextContext();
    \u0275\u0275nextContext();
    const dataBinding_r46 = \u0275\u0275reference(67);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 5, "smartReport.label"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", sel_r43.label || "")("placeholder", \u0275\u0275pipeBind1(5, 7, "smartReport.fieldLabel"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", dataBinding_r46)("ngTemplateOutletContext", \u0275\u0275pureFunction1(9, _c11, sel_r43));
  }
}
function ReportBuilderComponent_Conditional_59_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r47 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "label", 90);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 250);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275listener("input", function ReportBuilderComponent_Conditional_59_Conditional_15_Template_input_input_4_listener($event) {
      \u0275\u0275restoreView(_r47);
      const sel_r43 = \u0275\u0275nextContext();
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.updateSection(sel_r43.id, { label: $event.target.value }));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainer(6, 182)(7, 182);
  }
  if (rf & 2) {
    const sel_r43 = \u0275\u0275nextContext();
    \u0275\u0275nextContext();
    const paramControls_r48 = \u0275\u0275reference(65);
    const dataBinding_r46 = \u0275\u0275reference(67);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 7, "smartReport.tableTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", sel_r43.label || "")("placeholder", \u0275\u0275pipeBind1(5, 9, "smartReport.tableLabel"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", dataBinding_r46)("ngTemplateOutletContext", \u0275\u0275pureFunction1(11, _c12, sel_r43));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", paramControls_r48)("ngTemplateOutletContext", \u0275\u0275pureFunction1(13, _c13, sel_r43));
  }
}
function ReportBuilderComponent_Conditional_59_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r49 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "label", 90);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 252);
    \u0275\u0275listener("input", function ReportBuilderComponent_Conditional_59_Conditional_16_Template_input_input_4_listener($event) {
      \u0275\u0275restoreView(_r49);
      const sel_r43 = \u0275\u0275nextContext();
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.updateSection(sel_r43.id, { staticContent: $event.target.value }));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div")(6, "label", 90);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 250);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275listener("input", function ReportBuilderComponent_Conditional_59_Conditional_16_Template_input_input_9_listener($event) {
      \u0275\u0275restoreView(_r49);
      const sel_r43 = \u0275\u0275nextContext();
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.updateSection(sel_r43.id, { label: $event.target.value }));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const sel_r43 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 5, "smartReport.imageUrl"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", sel_r43.staticContent || "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 7, "smartReport.altText"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", sel_r43.label || "")("placeholder", \u0275\u0275pipeBind1(10, 9, "smartReport.companyLogo"));
  }
}
function ReportBuilderComponent_Conditional_59_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r50 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "label", 90);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 253);
    \u0275\u0275listener("input", function ReportBuilderComponent_Conditional_59_Conditional_17_Template_input_input_4_listener($event) {
      \u0275\u0275restoreView(_r50);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.updateSectionStyle("padding", $event.target.value));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const sel_r43 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "smartReport.heightPx"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", (sel_r43.style == null ? null : sel_r43.style.padding) || 16);
  }
}
function ReportBuilderComponent_Conditional_59_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r51 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "label", 90);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 254);
    \u0275\u0275listener("input", function ReportBuilderComponent_Conditional_59_Conditional_18_Template_input_input_4_listener($event) {
      \u0275\u0275restoreView(_r51);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.updateStyleColor($event.target.value));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 255)(6, "label", 90);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 36)(10, "input", 256);
    \u0275\u0275listener("input", function ReportBuilderComponent_Conditional_59_Conditional_18_Template_input_input_10_listener($event) {
      \u0275\u0275restoreView(_r51);
      const sel_r43 = \u0275\u0275nextContext();
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.updateSection(sel_r43.id, { rowLineWidth: +$event.target.value }));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 257);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 255)(14, "label", 90);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "select", 258);
    \u0275\u0275listener("change", function ReportBuilderComponent_Conditional_59_Conditional_18_Template_select_change_17_listener($event) {
      \u0275\u0275restoreView(_r51);
      const sel_r43 = \u0275\u0275nextContext();
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.updateSection(sel_r43.id, { rowLineStyle: $event.target.value }));
    });
    \u0275\u0275elementStart(18, "option", 259);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "option", 260);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "option", 261);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 255)(28, "label", 90);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 36)(32, "input", 262);
    \u0275\u0275listener("input", function ReportBuilderComponent_Conditional_59_Conditional_18_Template_input_input_32_listener($event) {
      \u0275\u0275restoreView(_r51);
      const sel_r43 = \u0275\u0275nextContext();
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.updateDividerSpacing(sel_r43, $event.target.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "span", 257);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_10_0;
    let tmp_11_0;
    let tmp_18_0;
    let tmp_19_0;
    const sel_r43 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 13, "smartReport.color"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", (sel_r43.style == null ? null : sel_r43.style.color) || "#E5E7EB");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 15, "visitaGuide.layoutLineWidth"));
    \u0275\u0275advance(3);
    \u0275\u0275property("value", (tmp_10_0 = sel_r43.rowLineWidth) !== null && tmp_10_0 !== void 0 ? tmp_10_0 : 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", (tmp_11_0 = sel_r43.rowLineWidth) !== null && tmp_11_0 !== void 0 ? tmp_11_0 : 1, "px");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 17, "smartReport.lineStyle"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", sel_r43.rowLineStyle || "solid");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 19, "smartReport.lineStyleSolid"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 21, "smartReport.lineStyleDashed"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 23, "smartReport.lineStyleDotted"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(30, 25, "smartReport.dividerSpacing"));
    \u0275\u0275advance(3);
    \u0275\u0275property("value", (tmp_18_0 = sel_r43.style == null ? null : sel_r43.style.padding) !== null && tmp_18_0 !== void 0 ? tmp_18_0 : 4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", (tmp_19_0 = sel_r43.style == null ? null : sel_r43.style.padding) !== null && tmp_19_0 !== void 0 ? tmp_19_0 : 4, "px");
  }
}
function ReportBuilderComponent_Conditional_59_Conditional_19_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 63);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const kind_r53 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275property("value", kind_r53);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, ctx_r3.shapeLabelKey(kind_r53)), " ");
  }
}
function ReportBuilderComponent_Conditional_59_Conditional_19_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r54 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 255)(1, "label", 90);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 36)(5, "input", 256);
    \u0275\u0275listener("input", function ReportBuilderComponent_Conditional_59_Conditional_19_Conditional_12_Template_input_input_5_listener($event) {
      \u0275\u0275restoreView(_r54);
      const sel_r43 = \u0275\u0275nextContext(2);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.updateSection(sel_r43.id, { rowLineWidth: +$event.target.value }));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 257);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 255)(9, "label", 90);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "select", 258);
    \u0275\u0275listener("change", function ReportBuilderComponent_Conditional_59_Conditional_19_Conditional_12_Template_select_change_12_listener($event) {
      \u0275\u0275restoreView(_r54);
      const sel_r43 = \u0275\u0275nextContext(2);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.updateSection(sel_r43.id, { rowLineStyle: $event.target.value }));
    });
    \u0275\u0275elementStart(13, "option", 259);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "option", 260);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "option", 261);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "transloco");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_9_0;
    let tmp_10_0;
    const sel_r43 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 8, "visitaGuide.layoutLineWidth"));
    \u0275\u0275advance(3);
    \u0275\u0275property("value", (tmp_9_0 = sel_r43.rowLineWidth) !== null && tmp_9_0 !== void 0 ? tmp_9_0 : 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", (tmp_10_0 = sel_r43.rowLineWidth) !== null && tmp_10_0 !== void 0 ? tmp_10_0 : 1, "px");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 10, "smartReport.lineStyle"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", sel_r43.rowLineStyle || "solid");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 12, "smartReport.lineStyleSolid"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 14, "smartReport.lineStyleDashed"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 16, "smartReport.lineStyleDotted"));
  }
}
function ReportBuilderComponent_Conditional_59_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r52 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "label", 90);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "select", 258);
    \u0275\u0275listener("change", function ReportBuilderComponent_Conditional_59_Conditional_19_Template_select_change_4_listener($event) {
      \u0275\u0275restoreView(_r52);
      const sel_r43 = \u0275\u0275nextContext();
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.updateSection(sel_r43.id, { shape: $event.target.value, staticContent: $event.target.value }));
    });
    \u0275\u0275repeaterCreate(5, ReportBuilderComponent_Conditional_59_Conditional_19_For_6_Template, 3, 4, "option", 63, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 255)(8, "label", 90);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 254);
    \u0275\u0275listener("input", function ReportBuilderComponent_Conditional_59_Conditional_19_Template_input_input_11_listener($event) {
      \u0275\u0275restoreView(_r52);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.updateStyleColor($event.target.value));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, ReportBuilderComponent_Conditional_59_Conditional_19_Conditional_12_Template, 22, 18);
  }
  if (rf & 2) {
    const sel_r43 = \u0275\u0275nextContext();
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 5, "visitaGuide.layoutShapeKind"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", sel_r43.shape || sel_r43.staticContent || "rectangle");
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.shapeKinds);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 7, "visitaGuide.layoutShapeFill"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", (sel_r43.style == null ? null : sel_r43.style.color) || "#4F46E5");
    \u0275\u0275advance();
    \u0275\u0275conditional((sel_r43.shape || sel_r43.staticContent) === "line" ? 12 : -1);
  }
}
function ReportBuilderComponent_Conditional_59_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r55 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "label", 90);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 250);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275listener("input", function ReportBuilderComponent_Conditional_59_Conditional_20_Template_input_input_4_listener($event) {
      \u0275\u0275restoreView(_r55);
      const sel_r43 = \u0275\u0275nextContext();
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.updateSection(sel_r43.id, { label: $event.target.value }));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainer(6, 182);
  }
  if (rf & 2) {
    const sel_r43 = \u0275\u0275nextContext();
    \u0275\u0275nextContext();
    const dataBinding_r46 = \u0275\u0275reference(67);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 5, "smartReport.label"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", sel_r43.label || "")("placeholder", \u0275\u0275pipeBind1(5, 7, "smartReport.fieldLabel"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", dataBinding_r46)("ngTemplateOutletContext", \u0275\u0275pureFunction2(9, _c14, sel_r43, sel_r43.type === "dataTable" || sel_r43.type === "repeater" ? "smartReport.pathToArray" : "smartReport.dotSeparatedPath"));
  }
}
function ReportBuilderComponent_Conditional_59_Conditional_21_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r57 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 271);
    \u0275\u0275listener("click", function ReportBuilderComponent_Conditional_59_Conditional_21_Conditional_17_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r57);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.clearColumns());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "smartReport.autoColumns"), " ");
  }
}
function ReportBuilderComponent_Conditional_59_Conditional_21_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 269);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "smartReport.columnsDerived"), " ");
  }
}
function ReportBuilderComponent_Conditional_59_Conditional_21_For_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r58 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 270)(1, "input", 272);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275listener("input", function ReportBuilderComponent_Conditional_59_Conditional_21_For_23_Template_input_input_1_listener($event) {
      const $index_r59 = \u0275\u0275restoreView(_r58).$index;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.updateColumn($index_r59, { key: $event.target.value }));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 273);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275listener("input", function ReportBuilderComponent_Conditional_59_Conditional_21_For_23_Template_input_input_3_listener($event) {
      const $index_r59 = \u0275\u0275restoreView(_r58).$index;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.updateColumn($index_r59, { label: $event.target.value }));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 274);
    \u0275\u0275listener("click", function ReportBuilderComponent_Conditional_59_Conditional_21_For_23_Template_button_click_5_listener() {
      const $index_r59 = \u0275\u0275restoreView(_r58).$index;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.removeColumn($index_r59));
    });
    \u0275\u0275elementStart(6, "mat-icon", 172);
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const column_r60 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("value", column_r60.key)("placeholder", \u0275\u0275pipeBind1(2, 4, "smartReport.columnKey"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", column_r60.label || "")("placeholder", \u0275\u0275pipeBind1(4, 6, "smartReport.columnLabel"));
  }
}
function ReportBuilderComponent_Conditional_59_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r56 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 263)(1, "div")(2, "label", 90);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 264);
    \u0275\u0275listener("input", function ReportBuilderComponent_Conditional_59_Conditional_21_Template_input_input_5_listener($event) {
      \u0275\u0275restoreView(_r56);
      const sel_r43 = \u0275\u0275nextContext();
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.updateSectionNumber(sel_r43.id, "maxRows", $event.target.value));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div")(7, "label", 90);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "input", 265);
    \u0275\u0275listener("input", function ReportBuilderComponent_Conditional_59_Conditional_21_Template_input_input_10_listener($event) {
      \u0275\u0275restoreView(_r56);
      const sel_r43 = \u0275\u0275nextContext();
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.updateSectionNumber(sel_r43.id, "maxColumns", $event.target.value));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div")(12, "div", 84)(13, "label", 85);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 266);
    \u0275\u0275template(17, ReportBuilderComponent_Conditional_59_Conditional_21_Conditional_17_Template, 3, 3, "button", 267);
    \u0275\u0275elementStart(18, "button", 268);
    \u0275\u0275listener("click", function ReportBuilderComponent_Conditional_59_Conditional_21_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r56);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.addColumn());
    });
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(21, ReportBuilderComponent_Conditional_59_Conditional_21_Conditional_21_Template, 3, 3, "p", 269);
    \u0275\u0275repeaterCreate(22, ReportBuilderComponent_Conditional_59_Conditional_21_For_23_Template, 8, 8, "div", 270, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_8_0;
    let tmp_10_0;
    const sel_r43 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 8, "smartReport.maxRows"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", (tmp_8_0 = sel_r43.maxRows) !== null && tmp_8_0 !== void 0 ? tmp_8_0 : "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 10, "smartReport.maxColumns"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", (tmp_10_0 = sel_r43.maxColumns) !== null && tmp_10_0 !== void 0 ? tmp_10_0 : "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 12, "smartReport.columns"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional((sel_r43.columns || \u0275\u0275pureFunction0(16, _c6)).length > 0 ? 17 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" + ", \u0275\u0275pipeBind1(20, 14, "smartReport.addColumn"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional((sel_r43.columns || \u0275\u0275pureFunction0(17, _c6)).length === 0 ? 21 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(sel_r43.columns || \u0275\u0275pureFunction0(18, _c6));
  }
}
function ReportBuilderComponent_Conditional_59_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r61 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "label", 90);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 275);
    \u0275\u0275listener("input", function ReportBuilderComponent_Conditional_59_Conditional_22_Template_input_input_4_listener($event) {
      \u0275\u0275restoreView(_r61);
      const sel_r43 = \u0275\u0275nextContext();
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.updateSectionNumber(sel_r43.id, "columnsPerRow", $event.target.value));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainer(5, 182);
  }
  if (rf & 2) {
    let tmp_8_0;
    const sel_r43 = \u0275\u0275nextContext();
    \u0275\u0275nextContext();
    const paramControls_r48 = \u0275\u0275reference(65);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 4, "smartReport.columnsPerRow"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", (tmp_8_0 = sel_r43.columnsPerRow) !== null && tmp_8_0 !== void 0 ? tmp_8_0 : 2);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", paramControls_r48)("ngTemplateOutletContext", \u0275\u0275pureFunction1(6, _c13, sel_r43));
  }
}
function ReportBuilderComponent_Conditional_59_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r62 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "label", 90);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "textarea", 276);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275listener("input", function ReportBuilderComponent_Conditional_59_Conditional_23_Template_textarea_input_4_listener($event) {
      \u0275\u0275restoreView(_r62);
      const sel_r43 = \u0275\u0275nextContext();
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.updateSection(sel_r43.id, { staticContent: $event.target.value }));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainer(6, 182);
  }
  if (rf & 2) {
    const sel_r43 = \u0275\u0275nextContext();
    \u0275\u0275nextContext();
    const paramControls_r48 = \u0275\u0275reference(65);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 5, "smartReport.cardBody"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", sel_r43.staticContent || "")("placeholder", \u0275\u0275pipeBind1(5, 7, "smartReport.placeholderSupported"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", paramControls_r48)("ngTemplateOutletContext", \u0275\u0275pureFunction1(9, _c13, sel_r43));
  }
}
function ReportBuilderComponent_Conditional_59_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r63 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "label", 90);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 277);
    \u0275\u0275listener("input", function ReportBuilderComponent_Conditional_59_Conditional_24_Template_input_input_4_listener($event) {
      \u0275\u0275restoreView(_r63);
      const sel_r43 = \u0275\u0275nextContext();
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.updateSection(sel_r43.id, { itemTitle: $event.target.value }));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div")(6, "label", 90);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "textarea", 278);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275listener("input", function ReportBuilderComponent_Conditional_59_Conditional_24_Template_textarea_input_9_listener($event) {
      \u0275\u0275restoreView(_r63);
      const sel_r43 = \u0275\u0275nextContext();
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.updateSection(sel_r43.id, { itemTemplate: $event.target.value }));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div")(12, "label", 90);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 279);
    \u0275\u0275listener("input", function ReportBuilderComponent_Conditional_59_Conditional_24_Template_input_input_15_listener($event) {
      \u0275\u0275restoreView(_r63);
      const sel_r43 = \u0275\u0275nextContext();
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.updateSectionNumber(sel_r43.id, "maxRows", $event.target.value));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_13_0;
    const sel_r43 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 7, "smartReport.itemTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", sel_r43.itemTitle || "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 9, "smartReport.itemTemplate"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", sel_r43.itemTemplate || "")("placeholder", \u0275\u0275pipeBind1(10, 11, "smartReport.itemTemplateHint"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 13, "smartReport.maxItems"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", (tmp_13_0 = sel_r43.maxRows) !== null && tmp_13_0 !== void 0 ? tmp_13_0 : "");
  }
}
function ReportBuilderComponent_Conditional_59_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r64 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p", 280);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "label", 90);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 281);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275listener("change", function ReportBuilderComponent_Conditional_59_Conditional_25_Template_input_change_7_listener($event) {
      \u0275\u0275restoreView(_r64);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.updateBlockIds($event.target.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 282);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "label", 283)(13, "input", 284);
    \u0275\u0275listener("change", function ReportBuilderComponent_Conditional_59_Conditional_25_Template_input_change_13_listener($event) {
      \u0275\u0275restoreView(_r64);
      const sel_r43 = \u0275\u0275nextContext();
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.updateSection(sel_r43.id, { showDisplayRows: $event.target.checked }));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const sel_r43 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 7, "smartReport.reportBlocksHint"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 9, "smartReport.blockIds"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", (sel_r43.blockIds || \u0275\u0275pureFunction0(17, _c6)).join(", "))("placeholder", \u0275\u0275pipeBind1(8, 11, "smartReport.allBlocks"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 13, "smartReport.blockIdsHint"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("checked", sel_r43.showDisplayRows !== false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 15, "smartReport.showDisplayRows"), " ");
  }
}
function ReportBuilderComponent_Conditional_59_Conditional_26_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 63);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const variant_r66 = ctx.$implicit;
    \u0275\u0275property("value", variant_r66);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "smartReport.variant_" + variant_r66), " ");
  }
}
function ReportBuilderComponent_Conditional_59_Conditional_26_For_20_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const operator_r69 = ctx.$implicit;
    \u0275\u0275property("value", operator_r69);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", operator_r69, " ");
  }
}
function ReportBuilderComponent_Conditional_59_Conditional_26_For_20_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r70 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 291);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275listener("input", function ReportBuilderComponent_Conditional_59_Conditional_26_For_20_Conditional_11_Template_input_input_0_listener($event) {
      \u0275\u0275restoreView(_r70);
      const $index_r68 = \u0275\u0275nextContext().$index;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.updateVariantRule($index_r68, { value: $event.target.value }));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_18_0;
    const rule_r71 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("value", (tmp_18_0 = rule_r71.value) !== null && tmp_18_0 !== void 0 ? tmp_18_0 : "")("placeholder", \u0275\u0275pipeBind1(1, 2, "smartReport.ruleValue"));
  }
}
function ReportBuilderComponent_Conditional_59_Conditional_26_For_20_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const variant_r72 = ctx.$implicit;
    \u0275\u0275property("value", variant_r72);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", variant_r72, " ");
  }
}
function ReportBuilderComponent_Conditional_59_Conditional_26_For_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r67 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 286)(1, "div", 287)(2, "input", 288);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275listener("input", function ReportBuilderComponent_Conditional_59_Conditional_26_For_20_Template_input_input_2_listener($event) {
      const $index_r68 = \u0275\u0275restoreView(_r67).$index;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.updateVariantRule($index_r68, { field: $event.target.value }));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 274);
    \u0275\u0275listener("click", function ReportBuilderComponent_Conditional_59_Conditional_26_For_20_Template_button_click_4_listener() {
      const $index_r68 = \u0275\u0275restoreView(_r67).$index;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.removeVariantRule($index_r68));
    });
    \u0275\u0275elementStart(5, "mat-icon", 172);
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 287)(8, "select", 289);
    \u0275\u0275listener("change", function ReportBuilderComponent_Conditional_59_Conditional_26_For_20_Template_select_change_8_listener($event) {
      const $index_r68 = \u0275\u0275restoreView(_r67).$index;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.updateVariantRule($index_r68, { operator: $event.target.value }));
    });
    \u0275\u0275repeaterCreate(9, ReportBuilderComponent_Conditional_59_Conditional_26_For_20_For_10_Template, 2, 2, "option", 63, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, ReportBuilderComponent_Conditional_59_Conditional_26_For_20_Conditional_11_Template, 2, 4, "input", 290);
    \u0275\u0275elementStart(12, "select", 289);
    \u0275\u0275listener("change", function ReportBuilderComponent_Conditional_59_Conditional_26_For_20_Template_select_change_12_listener($event) {
      const $index_r68 = \u0275\u0275restoreView(_r67).$index;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.updateVariantRule($index_r68, { variant: $event.target.value }));
    });
    \u0275\u0275repeaterCreate(13, ReportBuilderComponent_Conditional_59_Conditional_26_For_20_For_14_Template, 2, 2, "option", 63, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const rule_r71 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", rule_r71.field)("placeholder", \u0275\u0275pipeBind1(3, 5, "smartReport.ruleField"));
    \u0275\u0275advance(6);
    \u0275\u0275property("value", rule_r71.operator);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.conditionOperators);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.operatorNeedsValue(rule_r71.operator) ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("value", rule_r71.variant);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.styleVariants);
  }
}
function ReportBuilderComponent_Conditional_59_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r65 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 248)(1, "div")(2, "label", 90);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "select", 258);
    \u0275\u0275listener("change", function ReportBuilderComponent_Conditional_59_Conditional_26_Template_select_change_5_listener($event) {
      \u0275\u0275restoreView(_r65);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.updateSectionStyle("variant", $event.target.value));
    });
    \u0275\u0275repeaterCreate(6, ReportBuilderComponent_Conditional_59_Conditional_26_For_7_Template, 3, 4, "option", 63, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div")(9, "div", 84)(10, "label", 85);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 268);
    \u0275\u0275listener("click", function ReportBuilderComponent_Conditional_59_Conditional_26_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r65);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.addVariantRule());
    });
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "p", 285);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(19, ReportBuilderComponent_Conditional_59_Conditional_26_For_20_Template, 15, 7, "div", 286, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const sel_r43 = \u0275\u0275nextContext();
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 5, "smartReport.variant"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", (sel_r43.style == null ? null : sel_r43.style.variant) || "neutral");
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.styleVariants);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 7, "smartReport.variantRules"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" + ", \u0275\u0275pipeBind1(15, 9, "smartReport.addRule"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 11, "smartReport.variantRulesHint"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater((sel_r43.style == null ? null : sel_r43.style.variantRules) || \u0275\u0275pureFunction0(13, _c6));
  }
}
function ReportBuilderComponent_Conditional_59_Conditional_27_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r74 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 250);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275listener("input", function ReportBuilderComponent_Conditional_59_Conditional_27_Conditional_5_Template_input_input_0_listener($event) {
      \u0275\u0275restoreView(_r74);
      const sel_r43 = \u0275\u0275nextContext(2);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.updateSection(sel_r43.id, { emptyMessage: $event.target.value }));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const sel_r43 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", sel_r43.emptyMessage || "")("placeholder", \u0275\u0275pipeBind1(1, 2, "smartReport.emptyMessage"));
  }
}
function ReportBuilderComponent_Conditional_59_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r73 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 249)(1, "label", 283)(2, "input", 284);
    \u0275\u0275listener("change", function ReportBuilderComponent_Conditional_59_Conditional_27_Template_input_change_2_listener($event) {
      \u0275\u0275restoreView(_r73);
      const sel_r43 = \u0275\u0275nextContext();
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.updateSection(sel_r43.id, { showWhenEmpty: $event.target.checked }));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, ReportBuilderComponent_Conditional_59_Conditional_27_Conditional_5_Template, 2, 4, "input", 292);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const sel_r43 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", !!sel_r43.showWhenEmpty);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 3, "smartReport.showWhenEmpty"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(sel_r43.showWhenEmpty ? 5 : -1);
  }
}
function ReportBuilderComponent_Conditional_59_Conditional_28_For_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r76 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 295);
    \u0275\u0275listener("click", function ReportBuilderComponent_Conditional_59_Conditional_28_For_10_Template_button_click_0_listener() {
      const align_r77 = \u0275\u0275restoreView(_r76).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.updateTextAlign(align_r77));
    });
    \u0275\u0275elementStart(1, "mat-icon", 124);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const align_r77 = ctx.$implicit;
    const sel_r43 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", (sel_r43.style == null ? null : sel_r43.style.textAlign) === align_r77 ? "border-indigo-300 bg-indigo-50 dark:border-indigo-600 dark:bg-indigo-950/30" : "border-stone-200 dark:border-gray-700");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("format_align_", align_r77, "");
  }
}
function ReportBuilderComponent_Conditional_59_Conditional_28_For_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 63);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const font_r78 = ctx.$implicit;
    const \u0275$index_1546_r79 = ctx.$index;
    \u0275\u0275property("value", \u0275$index_1546_r79);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, font_r78.labelKey), " ");
  }
}
function ReportBuilderComponent_Conditional_59_Conditional_28_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r80 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "label", 37);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 299);
    \u0275\u0275listener("input", function ReportBuilderComponent_Conditional_59_Conditional_28_Conditional_50_Template_input_input_4_listener($event) {
      \u0275\u0275restoreView(_r80);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.updateSectionStyle("labelColor", $event.target.value));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 9)(6, "label", 37);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 299);
    \u0275\u0275listener("input", function ReportBuilderComponent_Conditional_59_Conditional_28_Conditional_50_Template_input_input_9_listener($event) {
      \u0275\u0275restoreView(_r80);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.updateSectionStyle("valueColor", $event.target.value));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const sel_r43 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 4, "smartReport.labelColor"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", (sel_r43.style == null ? null : sel_r43.style.labelColor) || (sel_r43.style == null ? null : sel_r43.style.color) || "#6B7280");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 6, "smartReport.valueColor"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", (sel_r43.style == null ? null : sel_r43.style.valueColor) || (sel_r43.style == null ? null : sel_r43.style.color) || "#111827");
  }
}
function ReportBuilderComponent_Conditional_59_Conditional_28_Conditional_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r81 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "label", 37);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 299);
    \u0275\u0275listener("input", function ReportBuilderComponent_Conditional_59_Conditional_28_Conditional_60_Template_input_input_4_listener($event) {
      \u0275\u0275restoreView(_r81);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.updateSectionStyle("borderColor", $event.target.value));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "label", 302)(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "input", 303);
    \u0275\u0275listener("input", function ReportBuilderComponent_Conditional_59_Conditional_28_Conditional_60_Template_input_input_11_listener($event) {
      \u0275\u0275restoreView(_r81);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.updateSectionStyle("borderWidth", ctx_r3.Number($event.target.value)));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "label", 302)(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "input", 304);
    \u0275\u0275listener("input", function ReportBuilderComponent_Conditional_59_Conditional_28_Conditional_60_Template_input_input_18_listener($event) {
      \u0275\u0275restoreView(_r81);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.updateSectionStyle("borderRadius", ctx_r3.Number($event.target.value)));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const sel_r43 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 8, "smartReport.blockBorderColor"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", (sel_r43.style == null ? null : sel_r43.style.borderColor) || "#d6d3d1");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 10, "smartReport.blockBorderWidth"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", (sel_r43.style == null ? null : sel_r43.style.borderWidth) || 1, " px");
    \u0275\u0275advance();
    \u0275\u0275property("value", (sel_r43.style == null ? null : sel_r43.style.borderWidth) || 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 12, "smartReport.blockBorderRadius"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", (sel_r43.style == null ? null : sel_r43.style.borderRadius) || 0, " px");
    \u0275\u0275advance();
    \u0275\u0275property("value", (sel_r43.style == null ? null : sel_r43.style.borderRadius) || 0);
  }
}
function ReportBuilderComponent_Conditional_59_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r75 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 248)(1, "h4", 85);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "label", 152);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 147);
    \u0275\u0275repeaterCreate(9, ReportBuilderComponent_Conditional_59_Conditional_28_For_10_Template, 3, 2, "button", 293, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div")(12, "label", 152);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 294);
    \u0275\u0275listener("input", function ReportBuilderComponent_Conditional_59_Conditional_28_Template_input_input_15_listener($event) {
      \u0275\u0275restoreView(_r75);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.updateFontSize(+$event.target.value));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div")(17, "label", 152);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 147)(21, "button", 295);
    \u0275\u0275listener("click", function ReportBuilderComponent_Conditional_59_Conditional_28_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r75);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.updateFontWeight("normal"));
    });
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "button", 296);
    \u0275\u0275listener("click", function ReportBuilderComponent_Conditional_59_Conditional_28_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r75);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.updateFontWeight("bold"));
    });
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div")(28, "label", 152);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 147)(32, "button", 297);
    \u0275\u0275listener("click", function ReportBuilderComponent_Conditional_59_Conditional_28_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r75);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.updateFontStyle("normal"));
    });
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "button", 298);
    \u0275\u0275listener("click", function ReportBuilderComponent_Conditional_59_Conditional_28_Template_button_click_35_listener() {
      \u0275\u0275restoreView(_r75);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.updateFontStyle("italic"));
    });
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "div")(39, "label", 152);
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "select", 258);
    \u0275\u0275listener("change", function ReportBuilderComponent_Conditional_59_Conditional_28_Template_select_change_42_listener($event) {
      \u0275\u0275restoreView(_r75);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.updateFontFamilyByIndex($event.target.value));
    });
    \u0275\u0275repeaterCreate(43, ReportBuilderComponent_Conditional_59_Conditional_28_For_44_Template, 3, 4, "option", 63, _forTrack8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 9)(46, "label", 37);
    \u0275\u0275text(47);
    \u0275\u0275pipe(48, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "input", 299);
    \u0275\u0275listener("input", function ReportBuilderComponent_Conditional_59_Conditional_28_Template_input_input_49_listener($event) {
      \u0275\u0275restoreView(_r75);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.updateStyleColor($event.target.value));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(50, ReportBuilderComponent_Conditional_59_Conditional_28_Conditional_50_Template, 10, 8);
    \u0275\u0275elementStart(51, "div", 9)(52, "label", 37);
    \u0275\u0275text(53);
    \u0275\u0275pipe(54, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "input", 299);
    \u0275\u0275listener("input", function ReportBuilderComponent_Conditional_59_Conditional_28_Template_input_input_55_listener($event) {
      \u0275\u0275restoreView(_r75);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.updateBgColor($event.target.value));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "label", 300)(57, "input", 301);
    \u0275\u0275listener("change", function ReportBuilderComponent_Conditional_59_Conditional_28_Template_input_change_57_listener($event) {
      \u0275\u0275restoreView(_r75);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.updateSectionStyle("borderWidth", $event.target.checked ? 1 : 0));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(58);
    \u0275\u0275pipe(59, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(60, ReportBuilderComponent_Conditional_59_Conditional_28_Conditional_60_Template, 19, 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const sel_r43 = \u0275\u0275nextContext();
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 34, "smartReport.style"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 36, "smartReport.textAlign"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r3.textAlignOptions);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 38, "smartReport.fontSize"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", (sel_r43.style == null ? null : sel_r43.style.fontSize) || 14);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 40, "smartReport.fontWeight"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", (sel_r43.style == null ? null : sel_r43.style.fontWeight) !== "bold" ? "border-indigo-300 bg-indigo-50 dark:border-indigo-600 dark:bg-indigo-950/30" : "border-stone-200 dark:border-gray-700");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(23, 42, "smartReport.normal"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", (sel_r43.style == null ? null : sel_r43.style.fontWeight) === "bold" ? "border-indigo-300 bg-indigo-50 dark:border-indigo-600 dark:bg-indigo-950/30" : "border-stone-200 dark:border-gray-700");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(26, 44, "smartReport.bold"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(30, 46, "smartReport.italic"));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("border-indigo-300", (sel_r43.style == null ? null : sel_r43.style.fontStyle) !== "italic")("bg-indigo-50", (sel_r43.style == null ? null : sel_r43.style.fontStyle) !== "italic")("border-stone-200", (sel_r43.style == null ? null : sel_r43.style.fontStyle) === "italic");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(34, 48, "smartReport.normal"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("border-indigo-300", (sel_r43.style == null ? null : sel_r43.style.fontStyle) === "italic")("bg-indigo-50", (sel_r43.style == null ? null : sel_r43.style.fontStyle) === "italic")("border-stone-200", (sel_r43.style == null ? null : sel_r43.style.fontStyle) !== "italic");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(37, 50, "smartReport.italic"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(41, 52, "smartReport.fontFamily"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r3.fontFamilyIndex(sel_r43));
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.reportFonts);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(48, 54, "smartReport.textColor"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", (sel_r43.style == null ? null : sel_r43.style.color) || "#111827");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.showsParamControls(sel_r43.type) ? 50 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(54, 56, "smartReport.blockBackground"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", (sel_r43.style == null ? null : sel_r43.style.backgroundColor) || "#ffffff");
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ((sel_r43.style == null ? null : sel_r43.style.borderWidth) || 0) > 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(59, 58, "smartReport.blockBorder"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(((sel_r43.style == null ? null : sel_r43.style.borderWidth) || 0) > 0 ? 60 : -1);
  }
}
function ReportBuilderComponent_Conditional_59_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43)(1, "div", 242)(2, "div", 243)(3, "mat-icon", 244);
    \u0275\u0275text(4, "drag_indicator");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3", 245);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 246);
    \u0275\u0275listener("click", function ReportBuilderComponent_Conditional_59_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r41);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.selectedSection.set(null));
    });
    \u0275\u0275elementStart(9, "mat-icon", 56);
    \u0275\u0275text(10, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 247);
    \u0275\u0275template(12, ReportBuilderComponent_Conditional_59_Conditional_12_Template, 6, 7, "div")(13, ReportBuilderComponent_Conditional_59_Conditional_13_Template, 6, 7, "div")(14, ReportBuilderComponent_Conditional_59_Conditional_14_Template, 7, 11)(15, ReportBuilderComponent_Conditional_59_Conditional_15_Template, 8, 15)(16, ReportBuilderComponent_Conditional_59_Conditional_16_Template, 11, 11)(17, ReportBuilderComponent_Conditional_59_Conditional_17_Template, 5, 4, "div")(18, ReportBuilderComponent_Conditional_59_Conditional_18_Template, 35, 27)(19, ReportBuilderComponent_Conditional_59_Conditional_19_Template, 13, 9)(20, ReportBuilderComponent_Conditional_59_Conditional_20_Template, 7, 12)(21, ReportBuilderComponent_Conditional_59_Conditional_21_Template, 24, 19)(22, ReportBuilderComponent_Conditional_59_Conditional_22_Template, 6, 8)(23, ReportBuilderComponent_Conditional_59_Conditional_23_Template, 7, 11)(24, ReportBuilderComponent_Conditional_59_Conditional_24_Template, 16, 15)(25, ReportBuilderComponent_Conditional_59_Conditional_25_Template, 16, 18)(26, ReportBuilderComponent_Conditional_59_Conditional_26_Template, 21, 14, "div", 248)(27, ReportBuilderComponent_Conditional_59_Conditional_27_Template, 6, 5, "div", 249)(28, ReportBuilderComponent_Conditional_59_Conditional_28_Template, 61, 60, "div", 248);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const sel_r43 = ctx;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(7, 19, "smartReport.edit"), " ", ctx_r3.getSectionLabel(sel_r43.type), " ");
    \u0275\u0275advance(6);
    \u0275\u0275conditional(sel_r43.type === "header" ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(sel_r43.type === "text" ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(sel_r43.type === "field" ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(sel_r43.type === "table" ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(sel_r43.type === "image" ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(sel_r43.type === "spacer" ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(sel_r43.type === "divider" ? 18 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(sel_r43.type === "shape" ? 19 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(sel_r43.type === "dataTable" || sel_r43.type === "keyValueGrid" || sel_r43.type === "badge" || sel_r43.type === "card" || sel_r43.type === "repeater" ? 20 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(sel_r43.type === "dataTable" ? 21 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(sel_r43.type === "keyValueGrid" ? 22 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(sel_r43.type === "card" ? 23 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(sel_r43.type === "repeater" ? 24 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(sel_r43.type === "reportBlocks" ? 25 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(sel_r43.type === "badge" || sel_r43.type === "card" || sel_r43.type === "keyValueGrid" || sel_r43.type === "dataTable" ? 26 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.isDataBound(sel_r43.type) ? 27 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(sel_r43.type === "header" || sel_r43.type === "text" || sel_r43.type === "field" || sel_r43.type === "table" || sel_r43.type === "dataTable" || sel_r43.type === "keyValueGrid" || sel_r43.type === "card" || sel_r43.type === "badge" || sel_r43.type === "repeater" ? 28 : -1);
  }
}
function ReportBuilderComponent_Conditional_60_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r82 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 305)(1, "mat-icon", 307);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 205);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 308);
    \u0275\u0275listener("click", function ReportBuilderComponent_Conditional_60_Conditional_1_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r82);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.setPreviewMode("exact"));
    });
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r3.exactPreviewError());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 2, "smartReport.retry"), " ");
  }
}
function ReportBuilderComponent_Conditional_60_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "iframe", 306);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r3.exactPreviewUrl(), \u0275\u0275sanitizeResourceUrl);
  }
}
function ReportBuilderComponent_Conditional_60_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 305)(1, "mat-icon", 309);
    \u0275\u0275text(2, "description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 205);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "smartReport.rendering"));
  }
}
function ReportBuilderComponent_Conditional_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275template(1, ReportBuilderComponent_Conditional_60_Conditional_1_Template, 8, 4, "div", 305)(2, ReportBuilderComponent_Conditional_60_Conditional_2_Template, 1, 1, "iframe", 306)(3, ReportBuilderComponent_Conditional_60_Conditional_3_Template, 6, 3, "div", 305);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.exactPreviewError() ? 1 : ctx_r3.exactPreviewUrl() ? 2 : 3);
  }
}
function ReportBuilderComponent_ng_template_64_Conditional_4_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r86 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 313)(1, "mat-icon", 314);
    \u0275\u0275text(2, "drag_indicator");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 301);
    \u0275\u0275listener("change", function ReportBuilderComponent_ng_template_64_Conditional_4_For_5_Template_input_change_3_listener($event) {
      const param_r87 = \u0275\u0275restoreView(_r86).$implicit;
      const sel_r84 = \u0275\u0275nextContext(2).sel;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.setSectionParamVisible(sel_r84, param_r87.key, $event.target.checked));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 315);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const param_r87 = ctx.$implicit;
    const sel_r84 = \u0275\u0275nextContext(2).sel;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("checked", ctx_r3.isSectionParamVisible(sel_r84, param_r87.key));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(param_r87.label);
  }
}
function ReportBuilderComponent_ng_template_64_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r85 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p", 311);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 312);
    \u0275\u0275listener("cdkDropListDropped", function ReportBuilderComponent_ng_template_64_Conditional_4_Template_div_cdkDropListDropped_3_listener($event) {
      \u0275\u0275restoreView(_r85);
      const sel_r84 = \u0275\u0275nextContext().sel;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onSectionParamDrop(sel_r84, $event));
    });
    \u0275\u0275repeaterCreate(4, ReportBuilderComponent_ng_template_64_Conditional_4_For_5_Template, 6, 2, "div", 313, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const sel_r84 = \u0275\u0275nextContext().sel;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "smartReport.visibleParams"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r3.sectionParamOptions(sel_r84));
  }
}
function ReportBuilderComponent_ng_template_64_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 310);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "smartReport.noSimpleParams"));
  }
}
function ReportBuilderComponent_ng_template_64_Template(rf, ctx) {
  if (rf & 1) {
    const _r83 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 283)(1, "input", 301);
    \u0275\u0275listener("change", function ReportBuilderComponent_ng_template_64_Template_input_change_1_listener($event) {
      const sel_r84 = \u0275\u0275restoreView(_r83).sel;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.setShowRowLines(sel_r84, $event.target.checked));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, ReportBuilderComponent_ng_template_64_Conditional_4_Template, 6, 3)(5, ReportBuilderComponent_ng_template_64_Conditional_5_Template, 3, 3, "p", 310);
  }
  if (rf & 2) {
    const sel_r84 = ctx.sel;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("checked", sel_r84.showRowLines !== false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "smartReport.showRowLines"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.sectionParamOptions(sel_r84).length > 0 ? 4 : 5);
  }
}
function ReportBuilderComponent_ng_template_66_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r89 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 317)(1, "mat-icon", 319);
    \u0275\u0275text(2, "account_tree");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 320);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 321);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275listener("click", function ReportBuilderComponent_ng_template_66_Conditional_8_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r89);
      const sel_r90 = \u0275\u0275nextContext().sel;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.updateSection(sel_r90.id, { dataPath: "" }));
    });
    \u0275\u0275elementStart(7, "mat-icon", 172);
    \u0275\u0275text(8, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const sel_r90 = \u0275\u0275nextContext().sel;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("matTooltip", sel_r90.dataPath);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.dataLabelFor(sel_r90.dataPath));
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(6, 3, "smartReport.unbind"));
  }
}
function ReportBuilderComponent_ng_template_66_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r91 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 322);
    \u0275\u0275listener("click", function ReportBuilderComponent_ng_template_66_Conditional_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r91);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.railTab.set("data"));
    });
    \u0275\u0275elementStart(1, "mat-icon", 172);
    \u0275\u0275text(2, "account_tree");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "smartReport.chooseFromData"), " ");
  }
}
function ReportBuilderComponent_ng_template_66_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r92 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 323);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275listener("input", function ReportBuilderComponent_ng_template_66_Conditional_10_Template_input_input_0_listener($event) {
      \u0275\u0275restoreView(_r92);
      const sel_r90 = \u0275\u0275nextContext().sel;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.updateSection(sel_r90.id, { dataPath: $event.target.value }));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p", 282);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r92 = \u0275\u0275nextContext();
    const sel_r90 = ctx_r92.sel;
    const hintKey_r94 = ctx_r92.hintKey;
    \u0275\u0275property("value", sel_r90.dataPath || "")("placeholder", \u0275\u0275pipeBind1(1, 3, "smartReport.dataPathPlaceholder"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 5, hintKey_r94), " ");
  }
}
function ReportBuilderComponent_ng_template_66_Template(rf, ctx) {
  if (rf & 1) {
    const _r88 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 84)(2, "label", 85);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 316);
    \u0275\u0275listener("click", function ReportBuilderComponent_ng_template_66_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r88);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.showAdvancedPath.set(!ctx_r3.showAdvancedPath()));
    });
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, ReportBuilderComponent_ng_template_66_Conditional_8_Template, 9, 5, "div", 317)(9, ReportBuilderComponent_ng_template_66_Conditional_9_Template, 5, 3, "button", 318)(10, ReportBuilderComponent_ng_template_66_Conditional_10_Template, 5, 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const sel_r90 = ctx.sel;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 4, "smartReport.dataSource"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 6, ctx_r3.showAdvancedPath() ? "smartReport.hidePath" : "smartReport.editPath"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(sel_r90.dataPath ? 8 : 9);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.showAdvancedPath() ? 10 : -1);
  }
}
function ReportBuilderComponent_ng_template_68_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r96 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 332);
    \u0275\u0275listener("click", function ReportBuilderComponent_ng_template_68_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r96);
      const node_r97 = \u0275\u0275nextContext().node;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.toggleNode(node_r97.path));
    });
    \u0275\u0275elementStart(1, "mat-icon", 172);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const node_r97 = \u0275\u0275nextContext().node;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.isExpanded(node_r97.path) ? "expand_more" : "chevron_right");
  }
}
function ReportBuilderComponent_ng_template_68_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 326);
  }
}
function ReportBuilderComponent_ng_template_68_Conditional_15_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 182);
  }
  if (rf & 2) {
    const child_r98 = ctx.$implicit;
    const depth_r99 = \u0275\u0275nextContext(2).depth;
    \u0275\u0275nextContext();
    const dataNodeRow_r26 = \u0275\u0275reference(69);
    \u0275\u0275property("ngTemplateOutlet", dataNodeRow_r26)("ngTemplateOutletContext", \u0275\u0275pureFunction2(2, _c16, child_r98, depth_r99 + 1));
  }
}
function ReportBuilderComponent_ng_template_68_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, ReportBuilderComponent_ng_template_68_Conditional_15_For_1_Template, 1, 5, "ng-container", 182, _forTrack2);
  }
  if (rf & 2) {
    const node_r97 = \u0275\u0275nextContext().node;
    \u0275\u0275repeater(node_r97.children);
  }
}
function ReportBuilderComponent_ng_template_68_Template(rf, ctx) {
  if (rf & 1) {
    const _r95 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 324);
    \u0275\u0275template(1, ReportBuilderComponent_ng_template_68_Conditional_1_Template, 3, 1, "button", 325)(2, ReportBuilderComponent_ng_template_68_Conditional_2_Template, 1, 0, "span", 326);
    \u0275\u0275elementStart(3, "mat-icon", 327);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 328);
    \u0275\u0275listener("click", function ReportBuilderComponent_ng_template_68_Template_button_click_5_listener() {
      const node_r97 = \u0275\u0275restoreView(_r95).node;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.addNodeSection(node_r97));
    });
    \u0275\u0275elementStart(6, "span", 329);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 330);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "button", 331);
    \u0275\u0275pipe(12, "transloco");
    \u0275\u0275listener("click", function ReportBuilderComponent_ng_template_68_Template_button_click_11_listener() {
      const node_r97 = \u0275\u0275restoreView(_r95).node;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.addNodeSection(node_r97));
    });
    \u0275\u0275elementStart(13, "mat-icon", 172);
    \u0275\u0275text(14, "add_circle_outline");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(15, ReportBuilderComponent_ng_template_68_Conditional_15_Template, 2, 0);
  }
  if (rf & 2) {
    const node_r97 = ctx.node;
    const depth_r99 = ctx.depth;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("padding-left", 6 + depth_r99 * 12, "px");
    \u0275\u0275property("cdkDragData", node_r97);
    \u0275\u0275advance();
    \u0275\u0275conditional((node_r97.children == null ? null : node_r97.children.length) ? 1 : 2);
    \u0275\u0275advance(2);
    \u0275\u0275property("matTooltip", ctx_r3.getSectionLabel(node_r97.sectionType));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.nodeIcon(node_r97));
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", node_r97.path);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(node_r97.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(node_r97.count !== void 0 ? \u0275\u0275pipeBind2(10, 11, "smartReport.structuralRows", \u0275\u0275pureFunction1(16, _c15, node_r97.count)) : node_r97.sample);
    \u0275\u0275advance(2);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(12, 14, "smartReport.addBoundBlock"));
    \u0275\u0275advance(4);
    \u0275\u0275conditional((node_r97.children == null ? null : node_r97.children.length) && ctx_r3.isExpanded(node_r97.path) ? 15 : -1);
  }
}
var OVERLAY_MIN_X = 52;
var OVERLAY_MIN_Y = 52;
var ReportBuilderComponent = class _ReportBuilderComponent {
  constructor() {
    this._route = inject(ActivatedRoute);
    this._router = inject(Router);
    this._fb = inject(FormBuilder);
    this._snack = inject(MatSnackBar);
    this._reportService = inject(SmartReportService);
    this._dialog = inject(MatDialog);
    this._previewDataService = inject(ReportBuilderPreviewDataService);
    this._transloco = inject(TranslocoService);
    this._batchService = inject(SmartBatchService);
    this._sanitizer = inject(DomSanitizer);
    this._destroyRef = inject(DestroyRef);
    this.configId = signal(null);
    this.templateId = signal(null);
    this.linkedConfigId = signal(null);
    this.linkedConfiguration = signal(null);
    this.isUpdatingConsults = signal(false);
    this.configurations = this._batchService.configurations;
    this.consultSteps = computed(() => orderedBatchSteps(this.linkedConfiguration()?.steps));
    this.template = signal(null);
    this.isLoading = signal(false);
    this.isSaving = signal(false);
    this.isSendingSample = signal(false);
    this.isDownloadingSample = signal(false);
    this.isGeneratingAI = signal(false);
    this.aiMode = signal("create");
    this.logoUrl = signal(null);
    this.activeTab = signal("design");
    this.showPassword = false;
    this.railTab = signal("data");
    this.showSettingsDrawer = signal(false);
    this.builderStep = signal("prepare");
    this.builderSteps = [
      { key: "prepare", labelKey: "smartReport.stepPrepare", icon: "edit_document" },
      { key: "preview", labelKey: "smartReport.stepPreview", icon: "visibility" },
      { key: "deliver", labelKey: "smartReport.stepDeliver", icon: "send" }
    ];
    this.deliveries = signal([]);
    this.isLoadingDeliveries = signal(false);
    this.dataNodes = signal([]);
    this.batchNodes = signal([]);
    this.isIntrospecting = signal(false);
    this.expandedPaths = signal(/* @__PURE__ */ new Set(["results", "inputData"]));
    this.canvasDropListId = "report-canvas-drop";
    this.showAdvancedPath = signal(false);
    this.previewMode = signal("edit");
    this.exactPreviewUrl = signal(null);
    this.isRenderingExact = signal(false);
    this.exactPreviewError = signal(null);
    this._exactPreviewObjectUrl = null;
    this._exactPreviewRequest$ = new Subject();
    this.sections = signal([]);
    this._persistBuilderSections = false;
    this.selectedSection = signal(null);
    this.selectedOverlay = signal(null);
    this.reportFonts = REPORT_FONT_STACKS;
    this.textAlignOptions = REPORT_TEXT_ALIGNS;
    this.currentSelectedSection = computed(() => {
      const sel = this.selectedSection();
      if (!sel)
        return null;
      return this.sections().find((s) => s.id === sel.id) ?? null;
    });
    this.sectionTypes = [
      { type: "header", labelKey: "smartReport.sectionHeader", icon: "title", group: "content" },
      { type: "text", labelKey: "smartReport.sectionText", icon: "notes", group: "content" },
      { type: "image", labelKey: "smartReport.sectionImage", icon: "image", group: "content" },
      { type: "field", labelKey: "smartReport.sectionField", icon: "data_object", group: "data" },
      {
        type: "badge",
        labelKey: "smartReport.sectionBadge",
        icon: "label_important",
        group: "data"
      },
      {
        type: "keyValueGrid",
        labelKey: "smartReport.sectionKeyValueGrid",
        icon: "grid_view",
        group: "data"
      },
      {
        type: "dataTable",
        labelKey: "smartReport.sectionDataTable",
        icon: "table_rows",
        group: "data"
      },
      { type: "repeater", labelKey: "smartReport.sectionRepeater", icon: "repeat", group: "data" },
      {
        type: "reportBlocks",
        labelKey: "smartReport.sectionReportBlocks",
        icon: "dashboard_customize",
        group: "data"
      },
      { type: "card", labelKey: "smartReport.sectionCard", icon: "crop_square", group: "layout" },
      {
        type: "divider",
        labelKey: "smartReport.sectionDivider",
        icon: "horizontal_rule",
        group: "layout"
      },
      {
        type: "shape",
        labelKey: "smartReport.sectionShape",
        icon: "category",
        group: "layout"
      },
      {
        type: "spacer",
        labelKey: "smartReport.sectionSpacer",
        icon: "space_bar",
        group: "layout"
      },
      {
        type: "table",
        labelKey: "smartReport.sectionTable",
        icon: "table_chart",
        group: "data",
        legacy: true
      }
    ];
    this.shapeKinds = REPORT_SHAPE_KINDS.filter((kind) => kind !== "icon");
    this.sectionGroups = [
      { key: "data", labelKey: "smartReport.groupData" },
      { key: "content", labelKey: "smartReport.groupContent" },
      { key: "layout", labelKey: "smartReport.groupLayout" }
    ];
    this.styleVariants = [
      "neutral",
      "success",
      "warning",
      "danger",
      "info",
      "primary"
    ];
    this.conditionOperators = [
      "equals",
      "notEquals",
      "exists",
      "notExists",
      "contains",
      "in",
      "gt",
      "gte",
      "lt",
      "lte",
      "isEmpty",
      "notEmpty"
    ];
    this._dataBoundTypes = [
      "field",
      "table",
      "dataTable",
      "keyValueGrid",
      "badge",
      "card",
      "repeater",
      "reportBlocks"
    ];
    this.previewData = signal({
      batchName: "Background Check - Batch #47",
      rowIndex: 0,
      inputData: {
        documentNumber: "1032386359",
        documentType: "CC",
        fullName: "JOHN DOE SMITH"
      },
      results: {
        1: {
          fullName: "JOHN DOE SMITH",
          firstName: "JOHN",
          lastName: "DOE SMITH",
          documentNumber: "1032386359",
          documentType: "CC",
          birthDate: "1990-05-15",
          gender: "Male",
          nationality: "Colombian",
          email: "john.doe@example.com",
          phone: "+57 300 123 4567",
          address: "Calle 100 #15-20, Bogota"
        },
        2: {
          isValid: true,
          score: 0.95,
          status: "VERIFIED",
          verifiedAt: "2026-02-10T14:30:00Z"
        }
      }
    });
    this.deliveryHistory = computed(() => this.deliveries().flatMap((report) => (report.emailHistory ?? []).map((entry) => __spreadProps(__spreadValues({}, entry), {
      reportName: report.name || "",
      reportStatus: report.status
    }))).sort((a, b) => new Date(b.sentAt).getTime() - new Date(a.sentAt).getTime()));
    this._hasPreviewDataFromNavigation = false;
    this._nodeLabels = computed(() => {
      const labels = /* @__PURE__ */ new Map();
      const walk = (nodes) => nodes.forEach((node) => {
        labels.set(node.path, node.label);
        if (node.children?.length)
          walk(node.children);
      });
      walk(this.dataNodes());
      walk(this.batchNodes());
      return labels;
    });
    this.onPreviewSectionClick = (section) => {
      this.selectSection(section);
    };
    this.helperDataPaths = computed(() => buildHelperDataPaths(this.previewData()));
    effect(() => {
      this.sections();
      this.logoUrl();
      this.previewData();
      if (this.previewMode() === "exact")
        this._exactPreviewRequest$.next();
    });
    effect(() => {
      const sections = this.sections();
      const templateId = this.templateId() ?? "new";
      untracked(() => {
        if (!this._persistBuilderSections)
          return;
        writeBuilderSectionsDraft(templateId, sections);
      });
    });
    effect(() => {
      this.previewData();
      this._loadIntrospection();
    });
    effect(() => {
      const configId = this.linkedConfigId();
      untracked(() => void this._loadLinkedConfiguration(configId));
    });
    this.templateForm = this._fb.group({
      name: ["", [Validators.required, Validators.maxLength(150)]],
      description: ["", Validators.maxLength(500)],
      primaryColor: ["#4F46E5"],
      pageBackgroundColor: ["#ffffff"],
      pageSize: ["A4"],
      orientation: ["portrait"],
      pdfEngine: ["puppeteer"],
      legend: [""],
      legendPosition: ["left"],
      termsAndConditions: [""],
      termsPosition: ["left"],
      showPageNumbers: [false],
      pageNumberPosition: ["bottom-center"],
      watermarkEnabled: [false],
      watermarkType: ["text"],
      watermarkText: ["CONFIDENTIAL"],
      watermarkOpacity: [0.08],
      watermarkPattern: ["single"],
      watermarkX: [250],
      watermarkY: [420],
      watermarkWidth: [280],
      watermarkHeight: [160],
      watermarkRotation: [-15],
      securityEnabled: [false],
      securityPassword: [""],
      // Signature
      signatureEnabled: [false],
      signatureImage: [null],
      signatureX: [0],
      signatureY: [0],
      signatureWidth: [100],
      signatureHeight: [50],
      signaturePage: [0],
      // Workspace logo (drag & resize overlay)
      // Visibility is implicit: a logo image (logoUrl) is the only switch.
      // Default position is clamped to the safe printable-area inset so
      // it lands neatly inside the page margins (matches the PDF output).
      logoX: [OVERLAY_MIN_X],
      logoY: [OVERLAY_MIN_Y],
      logoWidth: [160],
      logoHeight: [60],
      logoRotation: [0],
      logoAutoFitContent: [false],
      // Section content top padding (canonical px)
      bodyTopPadding: [0]
    });
  }
  ngOnInit() {
    document.body.classList.add(REPORT_DESIGN_BODY_CLASS);
    this._applyPreviewDataFromRouterState();
    this._batchService.getConfigurations().subscribe();
    this._watchExactPreview();
    this._route.params.subscribe((params) => {
      this._persistBuilderSections = false;
      const routeConfigId = params["configId"] ?? null;
      this.configId.set(routeConfigId);
      this.templateId.set(params["templateId"] ?? null);
      if (routeConfigId) {
        this.linkedConfigId.set(routeConfigId);
      }
      if (this.templateId()) {
        this._loadTemplate();
        return;
      }
      this._initDefaultSections();
    });
  }
  ngOnDestroy() {
    document.body.classList.remove(REPORT_DESIGN_BODY_CLASS);
    this._releaseExactPreviewUrl();
  }
  // ============================================
  // DATA PALETTE
  // ============================================
  /**
   * Ask the backend to describe the sample payload.
   *
   * Introspection runs server-side so path resolution, column derivation and the
   * shape-to-section-type mapping stay in one place: any path the palette offers is
   * guaranteed to resolve when the document is rendered.
   */
  consultStepLabel(step) {
    return batchStepLabel(step);
  }
  /** Opens the endpoint picker and appends the choice to the linked Smart Batch configuration. */
  openAddConsultDialog() {
    const config = this.linkedConfiguration();
    const configId = this.linkedConfigId();
    if (!configId || !config) {
      this._snack.open(this._transloco.translate("smartReport.consultLinkConfigFirst"), this._transloco.translate("smartReport.close"), { duration: 5e3 });
      return;
    }
    const excludeFeatureIds = (config.steps ?? []).map((step) => batchStepFeatureId(step)).filter((id) => Boolean(id));
    this._dialog.open(ReportBuilderAddConsultDialogComponent, {
      width: "480px",
      maxWidth: "95vw",
      data: { country: config.country, excludeFeatureIds }
    }).afterClosed().subscribe((feature) => {
      if (!feature?._id)
        return;
      void this._appendConsultToLinkedConfig(feature);
    });
  }
  editLinkedConfiguration() {
    const configId = this.linkedConfigId();
    if (!configId)
      return;
    void this._router.navigate(["/smart-batch/edit", configId]);
  }
  _appendConsultToLinkedConfig(feature) {
    return __async(this, null, function* () {
      const configId = this.linkedConfigId();
      const config = this.linkedConfiguration();
      if (!configId || !config)
        return;
      const previousSteps = config.steps ?? [];
      const steps = appendFeatureToBatchSteps(previousSteps, feature);
      this.isUpdatingConsults.set(true);
      try {
        const updated = yield firstValueFrom(this._batchService.updateConfiguration(configId, { steps }));
        const seqMap = buildStepSequenceMap(previousSteps, updated.data.steps);
        if (seqMap.size) {
          this.sections.update((list) => remapReportSectionPaths(list, seqMap));
        }
        this.linkedConfiguration.set(updated.data);
        this._syncPreviewResultsWithSteps(updated.data, seqMap);
        this._snack.open(this._transloco.translate("smartReport.consultAdded", {
          name: feature.nameES || feature.name || feature.code
        }), this._transloco.translate("smartReport.close"), { duration: 4e3 });
      } catch (error) {
        console.error("[ReportBuilder] could not add consult to configuration", error);
        this._snack.open(this._transloco.translate("smartReport.consultAddFailed"), this._transloco.translate("smartReport.close"), { duration: 5e3 });
      } finally {
        this.isUpdatingConsults.set(false);
      }
    });
  }
  _loadLinkedConfiguration(configId) {
    return __async(this, null, function* () {
      if (!configId) {
        this.linkedConfiguration.set(null);
        return;
      }
      try {
        const response = yield firstValueFrom(this._batchService.getConfiguration(configId));
        this.linkedConfiguration.set(response.data);
        this._syncPreviewResultsWithSteps(response.data);
      } catch (error) {
        console.error("[ReportBuilder] could not load linked configuration", error);
        this.linkedConfiguration.set(null);
      }
    });
  }
  /** Reserves `results.<n>` slots and remaps payloads when step numbers change. */
  _syncPreviewResultsWithSteps(config, seqMap = /* @__PURE__ */ new Map()) {
    const steps = orderedBatchSteps(config.steps);
    if (!steps.length)
      return;
    const current = this.previewData();
    let results = __spreadValues({}, current.results ?? {});
    if (seqMap.size) {
      results = remapResultsRecord(results, seqMap);
    }
    results = ensureResultSlots(results, config.steps);
    this.previewData.set(__spreadProps(__spreadValues({}, current), { results }));
  }
  _loadIntrospection() {
    this.isIntrospecting.set(true);
    this._reportService.introspect(this.previewData()).pipe(catchError(() => of(null)), takeUntilDestroyed(this._destroyRef)).subscribe((introspection) => {
      this.isIntrospecting.set(false);
      if (!introspection)
        return;
      this.dataNodes.set(introspection.nodes);
      this.batchNodes.set(introspection.batch);
    });
  }
  isExpanded(path) {
    return this.expandedPaths().has(path);
  }
  toggleNode(path) {
    this.expandedPaths.update((paths) => {
      const next = new Set(paths);
      next.has(path) ? next.delete(path) : next.add(path);
      return next;
    });
  }
  /** Icon for a node's recommended block, reusing the palette's own mapping. */
  nodeIcon(node) {
    return this.getSectionIcon(node.sectionType);
  }
  /**
   * Add the block the backend recommended for a data node.
   *
   * This is the interaction that replaces hand-typed dot notation: label, path and
   * columns all arrive pre-filled in `node.suggestion`.
   */
  addNodeSection(node, index) {
    this.addSuggestedSection(node.suggestion, index);
    this.railTab.set("layers");
  }
  // ============================================
  // PREPARE / PREVIEW / DELIVER
  // ============================================
  /**
   * Move to a step, bringing along what that step needs.
   *
   * Preview implies the server-rendered document, because checking a structural
   * outline for typography and page breaks is exactly the mistake the exact mode
   * exists to prevent.
   */
  goToStep(step) {
    this.builderStep.set(step);
    if (step === "preview") {
      this.setPreviewMode("exact");
      return;
    }
    if (step === "prepare") {
      this.setPreviewMode("edit");
      return;
    }
    this._loadDeliveries();
  }
  /**
   * Documents already produced from this template.
   *
   * Read from `SmartReport`, so the step shows the same status lifecycle and
   * `emailHistory` that the batch flow writes rather than a second record of
   * what was sent.
   */
  _loadDeliveries() {
    const id = this.templateId();
    if (!id)
      return;
    this.isLoadingDeliveries.set(true);
    this._reportService.getReportsByTemplate(id).pipe(catchError(() => of([])), takeUntilDestroyed(this._destroyRef)).subscribe((reports) => {
      this.deliveries.set(reports);
      this.isLoadingDeliveries.set(false);
    });
  }
  /** Tailwind classes for a report or delivery status chip. */
  statusClasses(status) {
    const palette = {
      sent: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300",
      delivered: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300",
      generated: "bg-indigo-50 text-indigo-700 dark:bg-indigo-950/40 dark:text-indigo-300",
      generating: "bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300",
      pending: "bg-stone-100 text-stone-600 dark:bg-gray-800 dark:text-stone-300",
      failed: "bg-red-50 text-red-700 dark:bg-red-950/40 dark:text-red-300",
      bounced: "bg-red-50 text-red-700 dark:bg-red-950/40 dark:text-red-300"
    };
    return palette[status] || palette.pending;
  }
  // ============================================
  // EXACT PREVIEW (server-rendered)
  // ============================================
  setPreviewMode(mode) {
    if (this.builderStep() === "preview" && mode !== "exact")
      return;
    this.previewMode.set(mode);
    if (mode === "exact")
      this._exactPreviewRequest$.next();
  }
  /**
   * Keep the exact preview in step with the draft.
   *
   * Debounced so typing does not fire a request per keystroke, and compared by
   * payload so a change that does not affect the document costs nothing. Requests
   * only run while the exact tab is open.
   */
  _watchExactPreview() {
    this.templateForm.valueChanges.pipe(takeUntilDestroyed(this._destroyRef)).subscribe(() => {
      if (this.previewMode() === "exact")
        this._exactPreviewRequest$.next();
    });
    this._exactPreviewRequest$.pipe(debounceTime(400), map(() => JSON.stringify(this._buildTemplatePayload())), distinctUntilChanged(), switchMap((serialized) => {
      this.isRenderingExact.set(true);
      this.exactPreviewError.set(null);
      return this._reportService.previewHtml(JSON.parse(serialized), this.previewData()).pipe(catchError(() => of(null)));
    }), takeUntilDestroyed(this._destroyRef)).subscribe((html) => {
      this.isRenderingExact.set(false);
      if (html === null) {
        this.exactPreviewError.set(this._transloco.translate("smartReport.previewFailed"));
        return;
      }
      this._setExactPreviewHtml(html);
    });
  }
  /**
   * Publish rendered HTML to the iframe through a blob URL.
   *
   * A blob URL plus the template's `sandbox` attribute puts the document in an
   * opaque origin with scripts disabled, so report content cannot reach the app.
   */
  _setExactPreviewHtml(html) {
    this._releaseExactPreviewUrl();
    const url = URL.createObjectURL(new Blob([html], { type: "text/html" }));
    this._exactPreviewObjectUrl = url;
    this.exactPreviewUrl.set(this._sanitizer.bypassSecurityTrustResourceUrl(url));
  }
  _releaseExactPreviewUrl() {
    if (!this._exactPreviewObjectUrl)
      return;
    URL.revokeObjectURL(this._exactPreviewObjectUrl);
    this._exactPreviewObjectUrl = null;
  }
  /**
   * When navigating from report viewer with batch data, use it as preview.
   * Uses service first (reliable), then router state as fallback.
   */
  _applyPreviewDataFromRouterState() {
    let data = this._previewDataService.consumePendingPreviewData();
    if (!data) {
      const state = this._router.getCurrentNavigation()?.extras?.state;
      data = state?.previewData ?? void 0;
    }
    if (data && (data.inputData || data.results)) {
      const preview = {
        batchName: data.batchName ?? "Batch",
        rowIndex: data.rowIndex ?? 0,
        inputData: data.inputData ?? {},
        results: data.results ?? {}
      };
      this.previewData.set(preview);
      this._hasPreviewDataFromNavigation = true;
    }
  }
  // ============================================
  // DATA LOADING
  // ============================================
  _loadTemplate() {
    const id = this.templateId();
    if (!id)
      return;
    this.isLoading.set(true);
    this._reportService.getTemplate(id).subscribe({
      next: (template) => {
        if (!template) {
          this.isLoading.set(false);
          this._snack.open(this._transloco.translate("smartReport.failedToLoadTemplate"), this._transloco.translate("smartReport.close"), { duration: 4e3 });
          const configId = this.configId();
          if (configId) {
            this._router.navigate(["/smart-batch", configId]);
          } else {
            this._router.navigate(["/smart-batch/workspace"]);
          }
          return;
        }
        this.template.set(template);
        const stored = readBuilderSectionsDraft(template._id || id);
        this.sections.set(cloneReportValue(stored ?? template.sections ?? []));
        this._persistBuilderSections = true;
        if (!this.linkedConfigId() && template.batchConfiguration) {
          const linkedId = this._resolveBatchConfigId(template.batchConfiguration);
          if (linkedId) {
            this.linkedConfigId.set(linkedId);
          }
        }
        if (!this._hasPreviewDataFromNavigation && template.sampleData && (template.sampleData.inputData || template.sampleData.results)) {
          this.previewData.set({
            batchName: template.sampleData.batchName ?? "Batch",
            rowIndex: template.sampleData.rowIndex ?? 0,
            inputData: template.sampleData.inputData ?? {},
            results: template.sampleData.results ?? {},
            errors: template.sampleData.errors ?? [],
            report: template.sampleData.report
          });
        }
        this.templateForm.patchValue({
          name: template.name,
          description: template.description,
          primaryColor: template.primaryColor || "#4F46E5",
          pageBackgroundColor: template.pageBackgroundColor || "#ffffff",
          pageSize: template.pageSize || "A4",
          orientation: template.orientation || "portrait",
          pdfEngine: template.pdfEngine || "puppeteer",
          legend: template.legend || "",
          legendPosition: template.legendPosition || "left",
          termsAndConditions: template.termsAndConditions || "",
          termsPosition: template.termsPosition || "left",
          showPageNumbers: template.showPageNumbers || false,
          pageNumberPosition: template.pageNumberPosition || "bottom-center",
          watermarkEnabled: template.watermark?.enabled || false,
          watermarkType: template.watermark?.type || "text",
          watermarkText: template.watermark?.text || "CONFIDENTIAL",
          watermarkOpacity: template.watermark?.opacity ?? 0.08,
          watermarkPattern: template.watermark?.pattern || "single",
          watermarkX: template.watermark?.x ?? 250,
          watermarkY: template.watermark?.y ?? 420,
          watermarkWidth: template.watermark?.width ?? 280,
          watermarkHeight: template.watermark?.height ?? 160,
          watermarkRotation: template.watermark?.rotation ?? -15,
          securityEnabled: template.security?.enabled || false,
          // If enabled, assume password exists and mask it. If not, empty.
          securityPassword: template.security?.enabled ? "******" : "",
          // Signature - clamp X/Y to the safe printable-area inset
          // so legacy templates render in the preview exactly where
          // the PDF will place them.
          signatureEnabled: template.signature?.enabled || false,
          signatureImage: template.signature?.image || null,
          signatureX: Math.max(OVERLAY_MIN_X, template.signature?.x || 0),
          signatureY: Math.max(OVERLAY_MIN_Y, template.signature?.y || 0),
          signatureWidth: template.signature?.width || 100,
          signatureHeight: template.signature?.height || 50,
          signaturePage: template.signature?.page ?? 0,
          // Workspace logo overlay (visibility derived from logoUrl).
          // Same clamp as signature for WYSIWYG with the PDF.
          logoX: template.logoSettings?.x ?? 32,
          logoY: template.logoSettings?.y ?? 32,
          logoWidth: template.logoSettings?.width ?? 160,
          logoHeight: template.logoSettings?.height ?? 60,
          logoRotation: template.logoSettings?.rotation ?? 0,
          logoAutoFitContent: template.logoSettings?.autoFitContent ?? false,
          // Section content top padding
          bodyTopPadding: template.bodyTopPadding ?? 0
        });
        this.logoUrl.set(template.logo || null);
        this.isLoading.set(false);
      },
      error: (err) => {
        console.error("Failed to load template:", err);
        this.isLoading.set(false);
        this._snack.open(this._transloco.translate("smartReport.failedToLoadTemplate"), this._transloco.translate("smartReport.close"), { duration: 4e3 });
      }
    });
  }
  _initDefaultSections() {
    const stored = readBuilderSectionsDraft("new");
    if (stored) {
      this.sections.set(cloneReportValue(stored));
      this._persistBuilderSections = true;
      return;
    }
    this.sections.set([]);
    this.addSection("header");
    this._persistBuilderSections = true;
  }
  // ============================================
  // DRAG & DROP
  // ============================================
  /**
   * Reorder the layer list, or bind a dropped data node at the drop position.
   *
   * A drag that starts in another container is a palette drag, so the drop index
   * becomes the new block's order instead of moving an existing one.
   */
  onDrop(event) {
    if (event.previousContainer !== event.container) {
      this._bindDroppedItem(event.item.data, event.currentIndex);
      return;
    }
    const current = [...this.sections()];
    moveItemInArray(current, event.previousIndex, event.currentIndex);
    current.forEach((s, i) => s.order = i);
    this.sections.set(current);
  }
  /** A node dropped on the page itself lands at the end of the document. */
  onCanvasDrop(event) {
    if (event.previousContainer === event.container)
      return;
    this._bindDroppedItem(event.item.data);
  }
  /**
   * @param item Drag payload: a `DataNode` from the palette, or a section type
   * from the block palette.
   */
  _bindDroppedItem(item, index) {
    if (typeof item === "string") {
      this.addSection(item, index);
      return;
    }
    if (item?.suggestion)
      this.addSuggestedSection(item.suggestion, index);
  }
  // ============================================
  // SECTION MANAGEMENT
  // ============================================
  generateLayoutWithAI(prompt) {
    const p = prompt.trim();
    if (!p)
      return;
    const mode = this.aiMode();
    const selected = this.currentSelectedSection();
    if (mode === "edit" && !selected) {
      this._snack.open("Please select a section to edit first.", "Close", { duration: 3e3 });
      return;
    }
    this.isGeneratingAI.set(true);
    this._reportService.generateLayout({
      prompt: p,
      previewData: this.previewData(),
      mode,
      currentSections: this.sections(),
      selectedSection: selected
    }).subscribe({
      next: (result) => {
        if (mode === "edit") {
          if (result && typeof result === "object" && result.id) {
            this.sections.update((list) => list.map((s) => s.id === result.id ? result : s));
            this.selectSection(result);
            this.templateForm.markAsDirty();
            this._snack.open(this._transloco.translate("smartReport.sectionEditedSuccess") || "Section updated successfully via AI", "Close", { duration: 3e3 });
          } else {
            this._snack.open(this._transloco.translate("smartReport.layoutGeneratedFailed"), "Close", { duration: 4e3 });
          }
        } else if (mode === "append") {
          if (Array.isArray(result) && result.length > 0) {
            this.sections.update((list) => [...list, ...result]);
            this.selectSection(result[0]);
            this.templateForm.markAsDirty();
            this._snack.open(this._transloco.translate("smartReport.sectionsAppendedSuccess") || "New sections appended successfully", "Close", { duration: 3e3 });
          } else {
            this._snack.open(this._transloco.translate("smartReport.layoutGeneratedEmpty"), "Close", { duration: 4e3 });
          }
        } else {
          if (Array.isArray(result) && result.length > 0) {
            this.sections.set(result);
            this.selectSection(result[0]);
            this.templateForm.markAsDirty();
            this._snack.open(this._transloco.translate("smartReport.layoutGeneratedSuccess"), "Close", { duration: 3e3 });
          } else {
            this._snack.open(this._transloco.translate("smartReport.layoutGeneratedEmpty"), "Close", { duration: 4e3 });
          }
        }
        this.isGeneratingAI.set(false);
      },
      error: (err) => {
        console.error("Failed to generate layout via AI:", err);
        this._snack.open(this._transloco.translate("smartReport.layoutGeneratedFailed"), "Close", { duration: 4e3 });
        this.isGeneratingAI.set(false);
      }
    });
  }
  /** Starting properties for a freshly added block of each type. */
  _sectionDefaults(type) {
    const defaults = {
      header: {
        staticContent: "Section Title",
        style: { fontSize: 18, fontWeight: "bold", textAlign: "left" }
      },
      text: { staticContent: "Enter your text here...", style: { fontSize: 12 } },
      field: { label: "New Field", dataPath: "" },
      table: { label: "Data Table", dataPath: "results.1" },
      image: { staticContent: "", style: { textAlign: "center" } },
      divider: {
        style: { color: this.templateForm.get("primaryColor")?.value || "#4F46E5" }
      },
      shape: {
        shape: "rectangle",
        staticContent: "rectangle",
        style: { color: this.templateForm.get("primaryColor")?.value || "#4F46E5" }
      },
      spacer: { style: { padding: "16" } },
      dataTable: { label: "Records", dataPath: "", columns: [], maxRows: 20 },
      keyValueGrid: { label: "Details", dataPath: "", columnsPerRow: 2 },
      badge: { label: "Status", dataPath: "", style: { variant: "neutral", variantRules: [] } },
      card: { label: "Card title", staticContent: "", dataPath: "" },
      repeater: { label: "Items", dataPath: "", itemTitle: "", maxRows: 10 },
      reportBlocks: { dataPath: "report", blockIds: [], showDisplayRows: true }
    };
    return defaults[type] ?? {};
  }
  addSection(type, index) {
    this.addSuggestedSection(__spreadValues({ type }, this._sectionDefaults(type)), index);
  }
  /**
   * Insert a section already bound to a data node.
   *
   * The backend's introspection picked the type and pre-filled the label, path and
   * columns, so this is the path that avoids hand-typed dot notation entirely.
   * @param suggestion Partial section from `DataNode.suggestion`.
   * @param index Optional drop position; appended when omitted.
   */
  addSuggestedSection(suggestion, index) {
    const newSection = __spreadProps(__spreadValues({}, suggestion), {
      id: this._generateId(),
      type: suggestion.type ?? "field",
      order: 0
    });
    this.sections.update((list) => {
      const next = [...list];
      next.splice(index ?? next.length, 0, newSection);
      return next.map((section, position) => __spreadProps(__spreadValues({}, section), { order: position }));
    });
    this.selectSection(newSection);
  }
  /**
   * Write a numeric section field, clearing it when the input is emptied so the
   * renderer falls back to its own default instead of receiving 0.
   */
  updateSectionNumber(id, key, raw) {
    const parsed = parseInt(raw, 10);
    this.updateSection(id, {
      [key]: Number.isFinite(parsed) && parsed > 0 ? parsed : void 0
    });
  }
  showsParamControls(type) {
    return type === "keyValueGrid" || type === "table" || type === "card";
  }
  sectionParamOptions(section) {
    return collectLayoutSheetItems(valueAtDataPath(this.previewData(), section.dataPath), {
      hiddenKeys: section.hiddenKeys,
      keyOrder: section.keyOrder
    });
  }
  isSectionParamVisible(section, key) {
    return !isHiddenParamKey(key, section.hiddenKeys);
  }
  setSectionParamVisible(section, key, visible) {
    this.updateSection(section.id, { hiddenKeys: setHiddenParamKey(section.hiddenKeys, key, visible) });
  }
  onSectionParamDrop(section, event) {
    if (event.previousIndex === event.currentIndex)
      return;
    const visible = this.sectionParamOptions(section).map((item) => item.key);
    moveItemInArray(visible, event.previousIndex, event.currentIndex);
    const allKeys = collectLayoutSheetItems(valueAtDataPath(this.previewData(), section.dataPath), {
      hiddenKeys: []
    }).map((item) => item.key);
    const seed = sortByKeyOrder(allKeys, section.keyOrder, (key) => key);
    this.updateSection(section.id, { keyOrder: applyVisibleKeyReorder(seed, visible) });
  }
  setShowRowLines(section, enabled) {
    this.updateSection(section.id, { showRowLines: enabled });
  }
  updateDividerSpacing(section, raw) {
    this.updateSection(section.id, {
      style: __spreadProps(__spreadValues({}, section.style ?? {}), { padding: raw })
    });
  }
  sectionTypesForGroup(group) {
    return this.sectionTypes.filter((entry) => entry.group === group && !entry.legacy);
  }
  /** Whether the selected section's editor should show the data path field. */
  isDataBound(type) {
    return !!type && this._dataBoundTypes.includes(type);
  }
  // ============================================
  // DATA TABLE COLUMNS
  // ============================================
  addColumn() {
    const section = this.currentSelectedSection();
    if (!section)
      return;
    this.updateSection(section.id, {
      columns: [...section.columns ?? [], { key: "", label: "" }]
    });
  }
  updateColumn(index, patch) {
    const section = this.currentSelectedSection();
    if (!section)
      return;
    const columns = [...section.columns ?? []];
    columns[index] = __spreadValues(__spreadValues({}, columns[index]), patch);
    this.updateSection(section.id, { columns });
  }
  removeColumn(index) {
    const section = this.currentSelectedSection();
    if (!section)
      return;
    this.updateSection(section.id, {
      columns: (section.columns ?? []).filter((_, position) => position !== index)
    });
  }
  /** Columns are optional: with none declared the renderer derives them. */
  clearColumns() {
    const section = this.currentSelectedSection();
    if (!section)
      return;
    this.updateSection(section.id, { columns: [] });
  }
  // ============================================
  // VARIANT RULES (data-driven colour)
  // ============================================
  addVariantRule() {
    const section = this.currentSelectedSection();
    if (!section)
      return;
    const rules = [...section.style?.variantRules ?? []];
    rules.push({
      field: section.dataPath || "",
      operator: "equals",
      value: "",
      variant: "success"
    });
    this.updateSectionStyle("variantRules", rules);
  }
  updateVariantRule(index, patch) {
    const section = this.currentSelectedSection();
    if (!section)
      return;
    const rules = [...section.style?.variantRules ?? []];
    rules[index] = __spreadValues(__spreadValues({}, rules[index]), patch);
    this.updateSectionStyle("variantRules", rules);
  }
  removeVariantRule(index) {
    const section = this.currentSelectedSection();
    if (!section)
      return;
    this.updateSectionStyle("variantRules", (section.style?.variantRules ?? []).filter((_, position) => position !== index));
  }
  /** Operators that compare against a value, as opposed to testing presence. */
  operatorNeedsValue(operator) {
    return !!operator && !["exists", "notExists", "isEmpty", "notEmpty"].includes(operator);
  }
  // ============================================
  // REPORT BLOCK IDS
  // ============================================
  /** Comma-separated in the editor; an empty list means "render every block". */
  updateBlockIds(raw) {
    const section = this.currentSelectedSection();
    if (!section)
      return;
    this.updateSection(section.id, {
      blockIds: raw.split(",").map((entry) => entry.trim()).filter(Boolean)
    });
  }
  selectSection(section) {
    this.selectedOverlay.set(null);
    this.selectedSection.set(__spreadValues({}, section));
    this.showAdvancedPath.set(false);
  }
  onPreviewOverlaySelect(id) {
    this.selectedSection.set(null);
    this.selectedOverlay.set(id);
  }
  clearPreviewSelection() {
    this.selectedSection.set(null);
    this.selectedOverlay.set(null);
  }
  onCanvasBlankClick(event) {
    const target = event.target;
    if (target?.closest("report-preview"))
      return;
    this.clearPreviewSelection();
  }
  /**
   * The human label introspection gave a path, for showing a binding as
   * "Owner name" rather than `results.1.propietario.nombre`.
   *
   * Falls back to the last path segment so a hand-typed path still reads as words.
   */
  dataLabelFor(path) {
    const labels = this._nodeLabels();
    if (labels.has(path))
      return labels.get(path);
    const leaf = path.split(".").pop() || path;
    return this._humanize(leaf);
  }
  /** `numeroPoliza` reads as "Numero poliza"; introspection labels are preferred. */
  _humanize(key) {
    const spaced = key.replace(/([a-z0-9])([A-Z])/g, "$1 $2").replace(/[_-]+/g, " ").trim();
    return spaced.charAt(0).toUpperCase() + spaced.slice(1);
  }
  updateSection(id, updates) {
    this.sections.update((list) => list.map((s) => s.id === id ? __spreadValues(__spreadValues({}, s), updates) : s));
    const sel = this.selectedSection();
    if (sel?.id === id) {
      this.selectedSection.set(__spreadValues(__spreadValues({}, sel), updates));
    }
  }
  deleteSection(id) {
    this.sections.update((list) => {
      const filtered = list.filter((s) => s.id !== id);
      filtered.forEach((s, i) => s.order = i);
      return filtered;
    });
    if (this.selectedSection()?.id === id) {
      this.selectedSection.set(null);
    }
  }
  duplicateSection(section) {
    const newSection = __spreadProps(__spreadValues({}, section), {
      id: this._generateId(),
      order: this.sections().length,
      label: section.label ? section.label + " (copy)" : void 0
    });
    this.sections.update((list) => [...list, newSection]);
  }
  // ============================================
  // STYLE HELPERS
  // ============================================
  updateSectionStyle(key, value) {
    const section = this.currentSelectedSection();
    if (!section)
      return;
    this.updateSection(section.id, {
      style: __spreadProps(__spreadValues({}, section.style), { [key]: value })
    });
  }
  updateTextAlign(align) {
    this.updateSectionStyle("textAlign", align);
  }
  updateFontSize(fontSize) {
    this.updateSectionStyle("fontSize", fontSize);
  }
  updateFontWeight(weight) {
    this.updateSectionStyle("fontWeight", weight);
  }
  updateFontStyle(style) {
    this.updateSectionStyle("fontStyle", style);
  }
  updateFontFamily(family) {
    this.updateSectionStyle("fontFamily", family);
  }
  fontFamilyIndex(section) {
    const family = section.style?.fontFamily;
    const index = REPORT_FONT_STACKS.findIndex((font) => font.value === family);
    return index >= 0 ? index : 0;
  }
  updateFontFamilyByIndex(raw) {
    const index = Number(raw);
    const font = REPORT_FONT_STACKS[index];
    if (font)
      this.updateFontFamily(font.value);
  }
  updateStyleColor(color) {
    this.updateSectionStyle("color", color);
  }
  updateBgColor(color) {
    this.updateSectionStyle("backgroundColor", color);
  }
  // ============================================
  // SAVE
  // ============================================
  /**
   * Collapse the flat form controls into the nested template shape the API takes.
   *
   * Shared by save and the server-rendered preview, so what you preview is exactly
   * what gets persisted and printed.
   */
  _buildTemplatePayload() {
    const formVal = this.templateForm.value;
    const templateData = __spreadProps(__spreadValues({}, formVal), {
      sections: cloneReportValue(this.sections()).map((section) => materializeSectionTypography(section, formVal.primaryColor || "#4F46E5", this.previewData())),
      batchConfiguration: this.linkedConfigId() || void 0,
      sampleData: this.previewData(),
      logo: this.logoUrl() || void 0,
      headerLogos: cloneReportValue(this.template()?.headerLogos),
      sheetImages: cloneReportValue(this.template()?.sheetImages),
      identityColor: this.template()?.identityColor,
      watermark: {
        enabled: formVal.watermarkEnabled ?? false,
        type: formVal.watermarkType || "text",
        logo: this.template()?.watermark?.logo || "",
        text: formVal.watermarkText || "CONFIDENTIAL",
        opacity: formVal.watermarkOpacity ?? 0.08,
        pattern: formVal.watermarkPattern || "single",
        x: formVal.watermarkX ?? 250,
        y: formVal.watermarkY ?? 420,
        width: formVal.watermarkWidth ?? 280,
        height: formVal.watermarkHeight ?? 160,
        rotation: formVal.watermarkRotation ?? -15
      },
      security: {
        enabled: formVal.securityEnabled ?? false,
        password: formVal.securityPassword || ""
      },
      signature: {
        enabled: formVal.signatureEnabled ?? false,
        image: formVal.signatureImage || "",
        x: formVal.signatureX || 0,
        y: formVal.signatureY || 0,
        width: formVal.signatureWidth || 100,
        height: formVal.signatureHeight || 50,
        page: formVal.signaturePage ?? 0
      },
      logoSettings: {
        // Visibility tracks whether a logo image is present.
        enabled: !!this.logoUrl(),
        x: formVal.logoX ?? 32,
        y: formVal.logoY ?? 32,
        width: formVal.logoWidth ?? 160,
        height: formVal.logoHeight ?? 60,
        rotation: formVal.logoRotation ?? 0,
        autoFitContent: formVal.logoAutoFitContent ?? false
      },
      bodyTopPadding: formVal.bodyTopPadding ?? 0
    });
    const flatKeys = [
      "watermarkEnabled",
      "watermarkType",
      "watermarkText",
      "watermarkOpacity",
      "watermarkPattern",
      "watermarkX",
      "watermarkY",
      "watermarkWidth",
      "watermarkHeight",
      "watermarkRotation",
      "securityEnabled",
      "securityPassword",
      "signatureEnabled",
      "signatureImage",
      "signatureX",
      "signatureY",
      "signatureWidth",
      "signatureHeight",
      "signaturePage",
      "logoX",
      "logoY",
      "logoWidth",
      "logoHeight",
      "logoRotation",
      "logoAutoFitContent"
    ];
    for (const key of flatKeys)
      delete templateData[key];
    return templateData;
  }
  save(onSuccess) {
    if (this.templateForm.invalid) {
      this._snack.open("Please fill in all required fields", "Close", { duration: 3e3 });
      return;
    }
    this.isSaving.set(true);
    const templateData = this._buildTemplatePayload();
    const id = this.templateId();
    if (id) {
      this._reportService.updateTemplate(id, templateData).subscribe({
        next: () => {
          this._snack.open("Template saved!", "Close", { duration: 3e3 });
          this.isSaving.set(false);
          if (onSuccess)
            onSuccess();
        },
        error: (err) => {
          console.error("Save failed:", err);
          this._snack.open("Failed to save template", "Close", { duration: 3e3 });
          this.isSaving.set(false);
        }
      });
    } else {
      this._reportService.createTemplate(templateData).subscribe({
        next: (created) => {
          this._snack.open("Template created!", "Close", { duration: 3e3 });
          this.isSaving.set(false);
          this._persistBuilderSections = false;
          clearBuilderSectionsDraft();
          if (onSuccess)
            onSuccess();
          const linkedId = this.linkedConfigId();
          const fromGuide = this._route.snapshot.queryParamMap.get("from") === "guide";
          const queryParams = fromGuide ? { from: "guide" } : void 0;
          if (linkedId) {
            this._router.navigate(["/smart-batch", linkedId, "report-builder", created._id], { queryParams });
          } else {
            this._router.navigate(["/smart-batch", "report-builder", created._id], {
              queryParams
            });
          }
        },
        error: (err) => {
          console.error("Create failed:", err);
          this._snack.open("Failed to create template", "Close", { duration: 3e3 });
          this.isSaving.set(false);
        }
      });
    }
  }
  sendSample() {
    const id = this.templateId();
    if (!id) {
      this._snack.open(this._transloco.translate("smartReport.saveTemplateFirst"), "Close", {
        duration: 3500
      });
      return;
    }
    const defaultSubject = `Sample Report: ${this.templateForm.get("name")?.value || "Template Preview"}`;
    const dialogRef = this._dialog.open(SendSampleModalComponent, {
      panelClass: "send-sample-dialog",
      maxWidth: "560px",
      width: "95vw",
      disableClose: false,
      autoFocus: true,
      data: { defaultSubject, isSample: true }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (!result?.recipients?.length)
        return;
      const performSend = () => {
        this.isSendingSample.set(true);
        const id2 = this.templateId();
        if (!id2)
          return;
        this._reportService.sendTemplateSample(id2, {
          recipients: result.recipients,
          subject: result.subject,
          language: "en",
          sampleData: this.previewData()
        }).subscribe({
          next: (res) => {
            if (res.success) {
              this._snack.open(this._transloco.translate("smartReport.samplePdfSentSuccess"), "Close", {
                duration: 3500
              });
            } else {
              this._snack.open(res.error || this._transloco.translate("smartReport.failedToSendSamplePdf"), "Close", {
                duration: 4e3
              });
            }
            this.isSendingSample.set(false);
          },
          error: (err) => {
            console.error("Send sample failed:", err);
            this._snack.open(this._transloco.translate("smartReport.failedToSendSamplePdf"), "Close", {
              duration: 4e3
            });
            this.isSendingSample.set(false);
          }
        });
      };
      if (this.templateForm.dirty) {
        this.save(() => performSend());
      } else {
        performSend();
      }
    });
  }
  /**
   * Download a sample PDF for the current template using the same Puppeteer
   * pipeline as the email flow, so the user can inspect output without going
   * through their inbox. Mirrors `sendSample`'s save-if-dirty behaviour.
   */
  downloadSamplePdf() {
    if (!this.templateId()) {
      this._snack.open(this._transloco.translate("smartReport.saveTemplateFirst"), "Close", {
        duration: 3500
      });
      return;
    }
    const performDownload = () => {
      const id = this.templateId();
      if (!id)
        return;
      this.isDownloadingSample.set(true);
      this._reportService.downloadTemplateSample(id, {
        sampleData: this.previewData()
      }).subscribe({
        next: (blob) => __async(this, null, function* () {
          let pdfBlob = blob;
          const hasPdfMagic = yield this._isPdfBlob(blob);
          if (!hasPdfMagic) {
            const recovered = yield this._blobFromJsonBytes(blob);
            if (!recovered) {
              const errorMsg = yield this._parseBlobError(blob);
              this._snack.open(errorMsg || this._transloco.translate("smartReport.invalidPdfReceived"), "Close", { duration: 4e3 });
              this.isDownloadingSample.set(false);
              return;
            }
            pdfBlob = recovered;
          }
          const safeName = (this.templateForm.get("name")?.value || "template").toString().replace(/[^a-z0-9-_]+/gi, "_").slice(0, 60);
          const url = URL.createObjectURL(pdfBlob);
          const a = document.createElement("a");
          a.href = url;
          a.download = `SmartReport_TemplateSample_${safeName || id}.pdf`;
          a.click();
          URL.revokeObjectURL(url);
          this._snack.open(this._transloco.translate("smartReport.pdfDownloaded"), "Close", { duration: 2e3 });
          this.isDownloadingSample.set(false);
        }),
        error: (err) => {
          console.error("Download sample failed:", err);
          this._snack.open(this._transloco.translate("smartReport.failedToDownloadPdf"), "Close", { duration: 4e3 });
          this.isDownloadingSample.set(false);
        }
      });
    };
    if (this.templateForm.dirty) {
      this.save(() => performDownload());
    } else {
      performDownload();
    }
  }
  /** True when the first 4 bytes of the blob are the PDF magic header (%PDF). */
  _isPdfBlob(blob) {
    return __async(this, null, function* () {
      const slice = blob.slice(0, 5);
      const buf = yield slice.arrayBuffer();
      const bytes = new Uint8Array(buf);
      return bytes[0] === 37 && bytes[1] === 80 && bytes[2] === 68 && bytes[3] === 70;
    });
  }
  /**
   * Some backends serialize a Buffer as a JSON object of `{0:37,1:80,...}`.
   * Reconstruct a real PDF Blob when that happens; return null if the bytes
   * don't actually start with the PDF magic header.
   */
  _blobFromJsonBytes(blob) {
    return __async(this, null, function* () {
      try {
        const text = yield blob.text();
        const parsed = JSON.parse(text);
        const keys = Object.keys(parsed).filter((k) => /^\d+$/.test(k));
        if (keys.length === 0)
          return null;
        keys.sort((a, b) => Number(a) - Number(b));
        const bytes = new Uint8Array(keys.length);
        keys.forEach((k, i) => bytes[i] = parsed[k] & 255);
        if (bytes[0] !== 37 || bytes[1] !== 80 || bytes[2] !== 68 || bytes[3] !== 70) {
          return null;
        }
        return new Blob([bytes], { type: "application/pdf" });
      } catch {
        return null;
      }
    });
  }
  _parseBlobError(blob) {
    return __async(this, null, function* () {
      try {
        const text = yield blob.text();
        const parsed = JSON.parse(text);
        if (typeof parsed.error === "string")
          return parsed.error;
        if (typeof parsed.message === "string")
          return parsed.message;
        return text.slice(0, 80);
      } catch {
        return blob.type === "application/json" || blob.type === "text/plain" ? "Server returned an error" : "Invalid PDF content";
      }
    });
  }
  // ============================================
  // NAVIGATION
  // ============================================
  goBack() {
    if (this._route.snapshot.queryParamMap.get("from") === "guide") {
      this._router.navigate(["/smart-batch"], {
        queryParams: this.templateId() ? { resume: "layout", templateId: this.templateId() } : {}
      });
      return;
    }
    const configId = this.configId() ?? this.linkedConfigId();
    if (configId) {
      this._router.navigate(["/smart-batch", configId]);
    } else {
      this._router.navigate(["/smart-batch/workspace"], { queryParams: { tab: "templates" } });
    }
  }
  setLinkedConfigId(value) {
    this.linkedConfigId.set(value || null);
    if (!value)
      this.linkedConfiguration.set(null);
  }
  getConfigOptionLabel(config) {
    const id = config._id ?? config.id ?? "";
    const format = `${(config.inputFormat || "").toUpperCase()} \u2192 ${(config.outputFormat || "").toUpperCase()}`;
    const steps = config.steps?.length ?? 0;
    const suffix = id.length > 6 ? ` \xB7 \u2026${id.slice(-6)}` : "";
    return `${config.name} \xB7 ${format} \xB7 ${steps} ${this._transloco.translate("smartBatchLanding.steps").toLowerCase()}${suffix}`;
  }
  _resolveBatchConfigId(ref) {
    if (!ref)
      return null;
    if (typeof ref === "string")
      return ref;
    return ref._id ?? ref.id ?? null;
  }
  getSectionIcon(type) {
    return this.sectionTypes.find((t) => t.type === type)?.icon || "help";
  }
  shapeLabelKey(kind) {
    return `visitaGuide.layoutAdd${kind.charAt(0).toUpperCase()}${kind.slice(1)}`;
  }
  getSectionLabel(type) {
    const labelKey = this.sectionTypes.find((t) => t.type === type)?.labelKey;
    return labelKey ? this._transloco.translate(labelKey) : type;
  }
  onPreviewInlineText(event) {
    const section = this.sections().find((item) => item.id === event.sectionId);
    if (!section)
      return;
    this.selectSection(section);
    if ((event.kind === "cellLabel" || event.kind === "cellValue") && event.key) {
      this.updateSection(section.id, {
        keyOverrides: __spreadProps(__spreadValues({}, section.keyOverrides ?? {}), {
          [event.key]: __spreadValues(__spreadValues({}, section.keyOverrides?.[event.key] ?? {}), event.kind === "cellLabel" ? { label: event.value } : { value: event.value })
        })
      });
      return;
    }
    if (event.kind === "itemTitle") {
      this.updateSection(section.id, { itemTitle: event.value });
      return;
    }
    if (event.kind === "itemTemplate") {
      this.updateSection(section.id, { itemTemplate: event.value });
      return;
    }
    if (event.kind === "body") {
      this.updateSection(section.id, { staticContent: event.value });
      return;
    }
    const updates = { label: event.value };
    if (section.type === "header" || section.type === "text") {
      updates.staticContent = event.value;
    }
    this.updateSection(section.id, updates);
  }
  /**
   * Effective content top padding shown next to the slider readout.
   *
   * Mirrors the "explicit wins" logic in ReportPreviewComponent:
   * - When `bodyTopPadding` > 0, the slider value is used directly.
   * - When 0 and auto-fit is on with a logo, the auto-fit offset is used.
   * - Otherwise 0.
   */
  getEffectiveContentPaddingTop() {
    const v = this.templateForm.value;
    const base = Number(v.bodyTopPadding) || 0;
    if (base > 0)
      return base;
    if (this.logoUrl() && v.logoAutoFitContent) {
      return (Number(v.logoY) || 0) + (Number(v.logoHeight) || 0) + 16;
    }
    return 0;
  }
  copyPathToClipboard(path) {
    navigator.clipboard.writeText(path).then(() => this._snack.open(`${this._transloco.translate("smartReport.copied")}: ${path}`, "Close", { duration: 2e3 }), () => this._snack.open(this._transloco.translate("smartReport.failedToCopy"), "Close", {
      duration: 2e3
    }));
  }
  // ============================================
  // LOGO HELPERS
  // ============================================
  onLogoUpload(event) {
    const input = event.target;
    const file = input.files?.[0];
    if (!file)
      return;
    if (file.size > 512e3) {
      this._snack.open("Logo file must be less than 500KB", "Close", { duration: 3500 });
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      this.logoUrl.set(reader.result);
      this.templateForm.markAsDirty();
    };
    reader.readAsDataURL(file);
  }
  removeLogo() {
    this.logoUrl.set(null);
    this.templateForm.markAsDirty();
  }
  onLogoPositionChange(pos) {
    this.templateForm.patchValue({
      logoX: Math.max(0, Math.round(pos.x)),
      logoY: Math.max(0, Math.round(pos.y))
    });
    this.templateForm.markAsDirty();
  }
  onLogoSizeChange(size) {
    this.templateForm.patchValue({
      logoWidth: Math.round(size.width),
      logoHeight: Math.round(size.height)
    });
    this.templateForm.markAsDirty();
  }
  onLogoRotationChange(rotation) {
    this.templateForm.patchValue({ logoRotation: Math.round(rotation) });
    this.templateForm.markAsDirty();
  }
  onWatermarkPositionChange(pos) {
    this.templateForm.patchValue({
      watermarkX: Math.max(0, Math.round(pos.x)),
      watermarkY: Math.max(0, Math.round(pos.y))
    });
    this.templateForm.markAsDirty();
  }
  onWatermarkSizeChange(size) {
    this.templateForm.patchValue({
      watermarkWidth: Math.round(size.width),
      watermarkHeight: Math.round(size.height)
    });
    this.templateForm.markAsDirty();
  }
  onWatermarkRotationChange(rotation) {
    this.templateForm.patchValue({ watermarkRotation: Math.round(rotation) });
    this.templateForm.markAsDirty();
  }
  onWatermarkTypeChange(type) {
    this.templateForm.patchValue(__spreadValues({
      watermarkType: type
    }, type === "logo" ? { watermarkPattern: "single" } : {}));
    this.templateForm.markAsDirty();
  }
  // ============================================
  // SIGNATURE METHODS
  // ============================================
  onSignaturePositionChange(pos) {
    this.templateForm.patchValue(__spreadValues({
      signatureX: Math.max(OVERLAY_MIN_X, Math.round(pos.x)),
      signatureY: Math.max(OVERLAY_MIN_Y, Math.round(pos.y))
    }, pos.page != null && Number.isFinite(pos.page) ? { signaturePage: Math.max(0, Math.round(pos.page)) } : {}));
    this.templateForm.markAsDirty();
  }
  onSignatureSizeChange(size) {
    this.templateForm.patchValue({
      signatureWidth: Math.round(size.width),
      signatureHeight: Math.round(size.height)
    });
    this.templateForm.markAsDirty();
  }
  openFooterTextDialog() {
    this._dialog.open(LayoutTextDialogComponent, {
      width: "640px",
      maxWidth: "95vw",
      disableClose: true,
      autoFocus: true,
      data: {
        titleKey: "visitaGuide.layoutEditFooter",
        placeholderKey: "smartReport.footerLegendPlaceholder",
        value: this.templateForm.get("legend")?.value || "",
        maxLength: 2e3
      }
    }).afterClosed().subscribe((result) => {
      if (typeof result !== "string")
        return;
      this.templateForm.patchValue({ legend: result });
      this.templateForm.markAsDirty();
    });
  }
  openTermsTextDialog() {
    this._dialog.open(LayoutTextDialogComponent, {
      width: "640px",
      maxWidth: "95vw",
      disableClose: true,
      autoFocus: true,
      data: {
        titleKey: "visitaGuide.layoutEditTerms",
        placeholderKey: "smartReport.termsPlaceholder",
        value: this.templateForm.get("termsAndConditions")?.value || "",
        maxLength: 4e3
      }
    }).afterClosed().subscribe((result) => {
      if (typeof result !== "string")
        return;
      this.templateForm.patchValue({ termsAndConditions: result });
      this.templateForm.markAsDirty();
    });
  }
  openSignatureDialog() {
    this._dialog.open(SignaturePadDialogComponent, {
      width: "520px",
      disableClose: true,
      autoFocus: false
    }).afterClosed().subscribe((result) => {
      if (result) {
        this.templateForm.patchValue({
          signatureImage: result,
          signatureEnabled: true
        });
        this.templateForm.markAsDirty();
      }
    });
  }
  // ============================================
  // PRIVATE HELPERS
  // ============================================
  _generateId() {
    return "section_" + Math.random().toString(36).substring(2, 11);
  }
  static {
    this.\u0275fac = function ReportBuilderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReportBuilderComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReportBuilderComponent, selectors: [["report-builder"]], viewQuery: function ReportBuilderComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._samplePreview = _t.first);
      }
    }, decls: 70, vars: 97, consts: [["samplePreview", ""], ["paramControls", ""], ["dataBinding", ""], ["dataNodeRow", ""], ["aiPromptInput", ""], [1, "min-h-screen", "w-full", "bg-stone-50", "dark:bg-gray-950"], [1, "sticky", "top-0", "z-20", "border-b", "border-stone-200/90", "bg-white/90", "backdrop-blur-sm", "dark:border-gray-800", "dark:bg-gray-950/90"], [1, "max-w-[1600px]", "mx-auto", "px-4", "sm:px-6", "lg:px-8", "py-3"], [1, "flex", "items-center", "justify-between"], [1, "flex", "items-center", "gap-3"], ["mat-icon-button", "", 3, "click", "matTooltip"], [1, "flex", "items-center", "gap-2", 3, "formGroup"], [1, "min-w-0"], ["type", "text", "formControlName", "name", 1, "w-full", "min-w-0", "max-w-[280px]", "truncate", "border-0", "bg-transparent", "p-0", "text-lg", "font-bold", "text-stone-950", "outline-none", "placeholder:text-stone-300", "dark:text-white", "dark:placeholder:text-stone-600", 3, "placeholder"], [1, "text-xs", "text-stone-500", "dark:text-stone-400"], ["type", "color", "formControlName", "primaryColor", 1, "h-8", "w-8", "shrink-0", "cursor-pointer", "rounded-lg", "border", "border-stone-200", "dark:border-gray-700", 3, "matTooltip"], [1, "hidden", "items-center", "gap-1", "rounded-xl", "border", "border-stone-200", "bg-stone-50", "p-1", "md:flex", "dark:border-gray-800", "dark:bg-gray-900"], [1, "inline-flex", "items-center", "gap-2", "rounded-lg", "px-3", "py-1.5", "text-sm", "font-medium", "transition-colors", 3, "ngClass"], ["mat-stroked-button", "", 1, "!rounded-xl", 3, "click"], [1, "inline-flex", "items-center", "gap-2"], [1, "!text-lg"], ["mat-flat-button", "", 1, "!rounded-xl", "!bg-indigo-600", "!text-white", 3, "click", "disabled"], [1, "mt-3", "flex", "items-center", "gap-1", "rounded-xl", "border", "border-stone-200", "bg-stone-50", "p-1", "md:hidden", "dark:border-gray-800", "dark:bg-gray-900"], [1, "flex", "flex-1", "items-center", "justify-center", "gap-1.5", "rounded-lg", "px-2", "py-1.5", "text-xs", "font-medium", "transition-colors", 3, "ngClass"], [1, "max-w-[1600px]", "mx-auto", "px-4", "sm:px-6", "lg:px-8", "py-6"], [1, "flex", "gap-6", "items-start"], [1, "w-full", "lg:w-[360px]", "shrink-0"], [1, "sticky", "top-[88px]", "space-y-3"], [1, "flex", "rounded-xl", "border", "border-stone-200/90", "bg-white", "p-1", "shadow-sm", "dark:border-gray-800", "dark:bg-gray-900/70"], [1, "flex", "flex-1", "items-center", "justify-center", "gap-1.5", "rounded-lg", "px-2", "py-2", "text-xs", "font-medium", "transition-colors", 3, "ngClass"], [1, "rounded-2xl", "border", "border-stone-200/90", "bg-white", "p-4", "shadow-sm", "dark:border-gray-800", "dark:bg-gray-900/70"], [1, "rounded-2xl", "border", "border-stone-200/90", "bg-white", "shadow-sm", "dark:border-gray-800", "dark:bg-gray-900/70"], [1, "flex-1", "min-w-0"], [1, "sticky", "top-20"], [1, "flex", "flex-wrap", "items-center", "justify-between", "gap-2", "mb-3"], [1, "text-sm", "font-semibold", "text-stone-500", "dark:text-stone-400"], [1, "flex", "items-center", "gap-2"], [1, "text-xs", "text-stone-400", "dark:text-stone-500"], [1, "inline-flex", "rounded-lg", "border", "border-stone-200", "p-0.5", "dark:border-gray-700"], [1, "rounded-md", "bg-indigo-50", "px-2.5", "py-1", "text-xs", "font-medium", "text-indigo-700", "dark:bg-indigo-950/40", "dark:text-indigo-300"], [1, "mb-3", "text-xs", "text-stone-400", "dark:text-stone-500"], [1, "space-y-4"], [1, "mb-4", "rounded-2xl", "border", "border-indigo-100", "bg-indigo-50/20", "p-4", "shadow-sm", "dark:border-indigo-950/30", "dark:bg-indigo-950/10"], ["cdkDrag", "", 1, "absolute", "right-2", "top-12", "z-40", "flex", "max-h-[min(70vh,560px)]", "w-80", "flex-col", "rounded-xl", "border", "border-indigo-200", "bg-white", "shadow-2xl", "dark:border-indigo-800", "dark:bg-gray-900"], [1, "overflow-hidden", "rounded-2xl", "border", "border-stone-200/90", "bg-stone-100", "shadow-sm", "dark:border-gray-800", "dark:bg-gray-900"], ["cdkDropList", "", 3, "cdkDropListDropped", "click", "id", "cdkDropListSortingDisabled"], [3, "inlineTextChange", "overlaySelect", "backgroundClick", "signaturePositionChange", "signatureSizeChange", "logoPositionChange", "logoSizeChange", "logoRotationChange", "watermarkPositionChange", "watermarkSizeChange", "watermarkRotationChange", "template", "sheetImages", "previewData", "primaryColor", "pageBackgroundColor", "orientation", "clickable", "selectedSectionId", "selectedOverlay", "sectionClick", "logoUrl", "legend", "legendPosition", "termsAndConditions", "termsPosition", "showPageNumbers", "pageNumberPosition", "watermarkEnabled", "watermarkType", "watermarkLogoUrl", "watermarkText", "watermarkOpacity", "watermarkPattern", "watermarkX", "watermarkY", "watermarkWidth", "watermarkHeight", "watermarkRotation", "signatureEnabled", "signatureImage", "signatureX", "signatureY", "signatureWidth", "signatureHeight", "signaturePage", "logoEnabled", "logoX", "logoY", "logoWidth", "logoHeight", "logoRotation", "logoAutoFitContent", "bodyTopPadding"], [1, "inline-flex", "items-center", "gap-2", "rounded-lg", "px-3", "py-1.5", "text-sm", "font-medium", "transition-colors", 3, "click", "ngClass"], [1, "flex", "h-5", "w-5", "items-center", "justify-center", "rounded-full", "text-[11px]", "font-semibold", 3, "ngClass"], [1, "animate-spin", "!text-lg"], [1, "flex", "flex-1", "items-center", "justify-center", "gap-1.5", "rounded-lg", "px-2", "py-1.5", "text-xs", "font-medium", "transition-colors", 3, "click", "ngClass"], [1, "fixed", "inset-0", "z-40", "bg-stone-900/25", "dark:bg-black/50", 3, "click"], [1, "fixed", "right-0", "top-0", "z-50", "flex", "h-screen", "w-full", "max-w-md", "flex-col", "border-l", "border-stone-200", "bg-white", "dark:border-gray-800", "dark:bg-gray-900"], [1, "flex", "shrink-0", "items-center", "justify-between", "border-b", "border-stone-100", "px-5", "py-3", "dark:border-gray-800"], [1, "text-sm", "font-semibold", "text-stone-950", "dark:text-white"], ["mat-icon-button", "", 3, "click"], [1, "!text-base", "text-stone-400", "dark:text-stone-500"], [1, "min-h-0", "flex-1", "overflow-y-auto", "p-5"], [1, "space-y-4", 3, "formGroup"], ["appearance", "outline", 1, "w-full"], ["matInput", "", "formControlName", "name", 3, "placeholder"], [3, "selectionChange", "value"], ["value", ""], [3, "value"], [1, "grid", "grid-cols-3", "gap-3"], ["appearance", "outline"], ["formControlName", "pageSize"], ["value", "A4"], ["value", "Letter"], ["value", "Legal"], ["formControlName", "orientation"], ["value", "portrait"], ["value", "landscape"], ["formControlName", "pdfEngine"], ["value", "puppeteer"], ["value", "pdfkit"], [1, "flex", "flex-wrap", "items-center", "gap-6"], [1, "text-sm", "text-stone-600", "dark:text-stone-400"], ["type", "color", "formControlName", "primaryColor", 1, "h-9", "w-9", "cursor-pointer", "rounded-lg", "border", "border-stone-200", "dark:border-gray-700"], ["type", "color", "formControlName", "pageBackgroundColor", 1, "h-9", "w-9", "cursor-pointer", "rounded-lg", "border", "border-stone-200", "dark:border-gray-700"], [1, "space-y-3", "rounded-xl", "border", "border-stone-100", "bg-stone-50", "p-4", "dark:border-gray-800", "dark:bg-gray-950/50"], [1, "!h-5", "!w-5", "!text-[20px]", "text-stone-400", "dark:text-stone-500"], [1, "text-sm", "font-medium", "text-stone-700", "dark:text-stone-300"], [1, "border-t", "border-stone-100", "pt-3", "dark:border-gray-800"], [1, "mb-1", "flex", "items-center", "justify-between"], [1, "text-xs", "font-medium", "text-stone-500", "dark:text-stone-400"], [1, "font-mono", "text-xs", "text-stone-500", "dark:text-stone-400"], [1, "text-indigo-500"], ["type", "range", "formControlName", "bodyTopPadding", "min", "0", "max", "400", "step", "4", 1, "h-1.5", "w-full", "cursor-pointer", "appearance-none", "rounded-lg", "bg-stone-200", "accent-indigo-600", "dark:bg-gray-700"], [1, "mt-1", "text-[10px]", "text-stone-400", "dark:text-stone-500"], [1, "mb-1", "block", "text-xs", "font-medium", "text-stone-500", "dark:text-stone-400"], ["type", "button", 1, "mb-1", "flex", "min-h-16", "w-full", "items-start", "justify-between", "gap-2", "rounded-lg", "border", "border-dashed", "border-stone-300", "bg-white", "px-3", "py-2", "text-left", "text-xs", "transition-colors", "hover:border-indigo-300", "hover:bg-indigo-50", "dark:border-gray-600", "dark:bg-gray-950", "dark:hover:border-indigo-600", "dark:hover:bg-indigo-950/30", 3, "click"], [1, "min-w-0", "flex-1", "whitespace-pre-wrap", "line-clamp-3"], [1, "!h-4", "!w-4", "!text-[16px]", "shrink-0", "text-stone-400"], [1, "mb-1", "mt-2", "block", "text-[10px]", "text-stone-400"], ["formControlName", "legendPosition"], ["value", "left"], ["value", "center"], ["value", "right"], [1, "mb-1", "mt-3", "block", "text-xs", "font-medium", "text-stone-500", "dark:text-stone-400"], ["type", "button", 1, "mb-1", "flex", "min-h-20", "w-full", "items-start", "justify-between", "gap-2", "rounded-lg", "border", "border-dashed", "border-stone-300", "bg-white", "px-3", "py-2", "text-left", "text-xs", "transition-colors", "hover:border-indigo-300", "hover:bg-indigo-50", "dark:border-gray-600", "dark:bg-gray-950", "dark:hover:border-indigo-600", "dark:hover:bg-indigo-950/30", 3, "click"], [1, "min-w-0", "flex-1", "whitespace-pre-wrap", "line-clamp-4"], ["formControlName", "termsPosition"], [1, "mb-2", "flex", "items-center", "justify-between"], [1, "relative", "inline-flex", "items-center", "cursor-pointer"], ["type", "checkbox", "formControlName", "showPageNumbers", 1, "sr-only", "peer"], [1, "peer", "h-5", "w-9", "rounded-full", "bg-stone-200", "after:absolute", "after:left-[2px]", "after:top-[2px]", "after:h-4", "after:w-4", "after:rounded-full", "after:border", "after:border-stone-300", "after:bg-white", "after:transition-all", "after:content-['']", "peer-checked:bg-indigo-600", "peer-checked:after:translate-x-full", "peer-checked:after:border-white", "peer-focus:outline-none", "dark:bg-gray-700", "dark:after:border-gray-600"], ["appearance", "outline", 1, "w-full", "!text-xs"], ["type", "checkbox", "formControlName", "watermarkEnabled", 1, "sr-only", "peer"], [1, "space-y-3"], [1, "space-y-4", "rounded-xl", "border", "border-stone-100", "bg-stone-50", "p-4", "dark:border-gray-800", "dark:bg-gray-950/50"], ["formControlName", "securityEnabled", "color", "primary"], [1, "space-y-4", "border-t", "border-stone-200", "pt-2", "dark:border-gray-800"], ["formControlName", "signatureEnabled", "color", "primary"], [1, "mt-4", "border-t", "border-stone-100", "pt-4", "dark:border-gray-800"], [1, "mb-2", "text-sm", "font-semibold", "text-stone-950", "dark:text-white"], [1, "mb-3", "text-xs", "text-stone-500", "dark:text-stone-400"], [1, "text-xs", "italic", "text-stone-400", "dark:text-stone-500"], [1, "max-h-[240px]", "overflow-y-auto", "space-y-1", "pr-1"], [1, "relative", "group", "flex", "justify-center", "rounded-lg", "border", "border-stone-200", "bg-white", "p-2", "dark:border-gray-700", "dark:bg-gray-900/70"], ["alt", "Logo", 1, "h-12", "max-w-[180px]", "object-contain", 3, "src"], ["type", "button", 1, "absolute", "right-1", "top-1", "rounded-full", "bg-red-50", "p-1", "text-red-500", "opacity-0", "transition-opacity", "hover:bg-red-100", "group-hover:opacity-100", "dark:bg-red-950/40", "dark:text-red-300", "dark:hover:bg-red-950/60", 3, "click", "matTooltip"], [1, "!w-4", "!h-4", "!text-[16px]"], [1, "inline-flex", "w-full", "cursor-pointer", "items-center", "justify-center", "gap-2", "rounded-lg", "border", "border-dashed", "border-stone-300", "px-3", "py-2", "text-xs", "text-stone-500", "transition-colors", "hover:border-indigo-300", "hover:bg-indigo-50", "dark:border-gray-600", "dark:text-stone-400", "dark:hover:border-indigo-600", "dark:hover:bg-indigo-950/30"], [1, "!text-base"], ["type", "file", "accept", "image/png,image/jpeg,image/svg+xml,image/webp", 1, "hidden", 3, "change"], [1, "grid", "grid-cols-2", "gap-2", "pt-1"], [1, "block"], [1, "text-[10px]", "text-stone-400", "dark:text-stone-500"], ["type", "number", "formControlName", "logoWidth", "min", "24", "max", "800", "step", "1", 1, "w-full", "rounded-md", "border", "border-stone-200", "px-2", "py-1.5", "text-xs", "dark:border-gray-700", "dark:bg-gray-950", "dark:text-white"], ["type", "number", "formControlName", "logoHeight", "min", "16", "max", "600", "step", "1", 1, "w-full", "rounded-md", "border", "border-stone-200", "px-2", "py-1.5", "text-xs", "dark:border-gray-700", "dark:bg-gray-950", "dark:text-white"], [1, "block", "pt-1"], ["type", "range", "min", "-180", "max", "180", "step", "1", "formControlName", "logoRotation", 1, "h-1.5", "w-full", "cursor-pointer", "appearance-none", "rounded-lg", "bg-stone-200", "accent-indigo-600", "dark:bg-gray-700"], [1, "flex", "items-center", "justify-between", "border-t", "border-stone-200", "pt-2", "dark:border-gray-800"], [1, "flex-1", "pr-2"], [1, "text-xs", "font-medium", "text-stone-700", "dark:text-stone-300"], [1, "mt-0.5", "text-[10px]", "text-stone-400", "dark:text-stone-500"], ["formControlName", "logoAutoFitContent", "color", "primary"], [1, "flex", "w-full", "cursor-pointer", "items-center", "justify-center", "gap-2", "rounded-lg", "border", "border-dashed", "border-stone-300", "px-3", "py-3", "text-sm", "text-stone-500", "transition-colors", "hover:border-indigo-300", "hover:bg-indigo-50", "dark:border-gray-600", "dark:text-stone-400", "dark:hover:border-indigo-600", "dark:hover:bg-indigo-950/30"], [1, "text-center", "text-xs", "text-stone-400", "dark:text-stone-500"], ["formControlName", "pageNumberPosition"], ["value", "top-left"], ["value", "top-center"], ["value", "top-right"], ["value", "bottom-left"], ["value", "bottom-center"], ["value", "bottom-right"], [1, "flex", "gap-1"], ["type", "button", 1, "flex-1", "rounded-lg", "border", "py-2", "text-xs", "transition-colors", "text-stone-700", "dark:text-stone-300", 3, "click", "ngClass"], [1, "text-xs", "text-amber-500", "dark:text-amber-300"], [1, "flex", "items-center", "justify-between", "mb-1"], ["type", "range", "formControlName", "watermarkOpacity", "min", "0.01", "max", "0.5", "step", "0.01", 1, "h-1.5", "w-full", "cursor-pointer", "appearance-none", "rounded-lg", "bg-stone-200", "accent-indigo-600", "dark:bg-gray-700"], [1, "mb-1", "block", "text-xs", "text-stone-400", "dark:text-stone-500"], ["type", "range", "min", "-180", "max", "180", "step", "1", "formControlName", "watermarkRotation", 1, "h-1.5", "w-full", "cursor-pointer", "appearance-none", "rounded-lg", "bg-stone-200", "accent-indigo-600", "dark:bg-gray-700"], ["type", "text", "formControlName", "watermarkText", "maxlength", "100", 1, "w-full", "rounded-lg", "border", "border-stone-200", "px-3", "py-2", "text-xs", "dark:border-gray-700", "dark:bg-gray-950", "dark:text-white", 3, "placeholder"], [1, "relative"], ["formControlName", "securityPassword", 1, "w-full", "rounded-lg", "border", "border-stone-200", "px-3", "py-2", "pr-10", "text-sm", "dark:border-gray-700", "dark:bg-gray-950", "dark:text-white", 3, "type", "placeholder"], ["type", "button", 1, "absolute", "right-2", "top-1/2", "-translate-y-1/2", "text-stone-400", "hover:text-stone-600", "dark:text-stone-500", "dark:hover:text-stone-300", 3, "click"], ["type", "button", "mat-stroked-button", "", "color", "primary", 1, "w-full"], [1, "h-16", "object-contain", 3, "src"], ["type", "button", 1, "absolute", "right-1", "top-1", "rounded-full", "bg-red-50", "p-1", "text-red-500", "opacity-0", "transition-opacity", "hover:bg-red-100", "group-hover:opacity-100", "dark:bg-red-950/40", "dark:text-red-300", "dark:hover:bg-red-950/60", 3, "click"], ["type", "number", "formControlName", "signatureWidth", "min", "24", "max", "800", "step", "1", 1, "w-full", "rounded-md", "border", "border-stone-200", "px-2", "py-1.5", "text-xs", "dark:border-gray-700", "dark:bg-gray-950", "dark:text-white"], ["type", "number", "formControlName", "signatureHeight", "min", "16", "max", "600", "step", "1", 1, "w-full", "rounded-md", "border", "border-stone-200", "px-2", "py-1.5", "text-xs", "dark:border-gray-700", "dark:bg-gray-950", "dark:text-white"], ["type", "button", "mat-stroked-button", "", "color", "primary", 1, "w-full", 3, "click"], [1, "mr-2"], [1, "group", "flex", "items-center", "gap-2", "rounded", "px-2", "py-1.5", "text-xs", "hover:bg-stone-50", "dark:hover:bg-gray-800/50"], [1, "group", "flex", "items-center", "gap-2", "pt-1.5", "pb-0.5"], [1, "min-w-0", "flex-1", "truncate", "font-mono", "text-stone-700", "dark:text-stone-300"], [1, "max-w-[120px]", "truncate", "text-stone-400", "dark:text-stone-500", 3, "title"], ["mat-icon-button", "", 1, "!w-6", "!h-6", "!rounded", "opacity-0", "group-hover:opacity-100", "transition-opacity", 3, "click", "matTooltip"], [1, "!text-sm", "!w-4", "!h-4"], [1, "flex", "flex-1", "items-center", "justify-center", "gap-1.5", "rounded-lg", "px-2", "py-2", "text-xs", "font-medium", "transition-colors", 3, "click", "ngClass"], [1, "!h-4", "!w-4", "!text-base"], [1, "opacity-70"], [1, "mb-3", "rounded-2xl", "border", "border-stone-200/90", "bg-white", "p-4", "shadow-sm", "dark:border-gray-800", "dark:bg-gray-900/70"], [1, "mb-2", "flex", "items-start", "justify-between", "gap-2"], ["mat-stroked-button", "", "type", "button", 1, "!min-h-8", "shrink-0", "!text-xs"], [1, "text-xs", "text-amber-700", "dark:text-amber-400"], [1, "border-b", "border-stone-100", "px-4", "py-3", "dark:border-gray-800"], ["cdkDropList", "", 1, "max-h-[calc(100vh-260px)]", "overflow-y-auto", "p-2", 3, "cdkDropListConnectedTo", "cdkDropListSortingDisabled"], [1, "px-2", "py-6", "text-center", "text-xs", "text-stone-400", "dark:text-stone-500"], [1, "px-2", "py-6", "text-center", "text-xs", "italic", "text-stone-400", "dark:text-stone-500"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["mat-stroked-button", "", "type", "button", 1, "!min-h-8", "shrink-0", "!text-xs", 3, "click"], [1, "mb-3", "space-y-1"], [1, "rounded-lg", "border", "border-stone-100", "bg-stone-50/80", "px-2.5", "py-1.5", "text-xs", "dark:border-gray-800", "dark:bg-gray-950/50"], ["mat-flat-button", "", "color", "primary", "type", "button", 1, "w-full", "!min-h-9", "!text-sm", 3, "click", "disabled"], ["diameter", "18", 1, "inline-block"], [1, "mr-1", "!text-[18px]"], [1, "mt-2", "text-[11px]", "leading-relaxed", "text-stone-400"], [1, "font-medium", "text-stone-800", "dark:text-stone-200"], [1, "text-stone-400"], [1, "mb-1", "mt-3", "px-2", "text-[11px]", "font-semibold", "uppercase", "tracking-wide", "text-stone-400", "dark:text-stone-500"], [1, "mb-3", "text-sm", "font-semibold", "text-stone-950", "dark:text-white"], [1, "mb-3", "last:mb-0"], [1, "mb-1.5", "text-[11px]", "font-semibold", "uppercase", "tracking-wide", "text-stone-400", "dark:text-stone-500"], ["cdkDropList", "", 1, "flex", "flex-wrap", "gap-2", 3, "cdkDropListConnectedTo", "cdkDropListSortingDisabled"], ["cdkDrag", "", 1, "inline-flex", "items-center", "gap-1.5", "rounded-lg", "border", "border-stone-200", "px-3", "py-2", "text-sm", "text-stone-700", "transition-colors", "hover:border-indigo-300", "hover:bg-indigo-50", "dark:border-gray-700", "dark:text-stone-300", "dark:hover:border-indigo-600", "dark:hover:bg-indigo-950/30", 3, "cdkDragData"], ["cdkDrag", "", 1, "inline-flex", "items-center", "gap-1.5", "rounded-lg", "border", "border-stone-200", "px-3", "py-2", "text-sm", "text-stone-700", "transition-colors", "hover:border-indigo-300", "hover:bg-indigo-50", "dark:border-gray-700", "dark:text-stone-300", "dark:hover:border-indigo-600", "dark:hover:bg-indigo-950/30", 3, "click", "cdkDragData"], [1, "flex", "items-center", "justify-between", "border-b", "border-stone-100", "px-5", "py-3", "dark:border-gray-800"], [1, "text-xs", "font-medium", "text-stone-400", "dark:text-stone-500"], ["id", "report-layers-drop", "cdkDropList", "", 1, "max-h-[calc(100vh-300px)]", "overflow-y-auto", "p-3", "min-h-[200px]", 3, "cdkDropListDropped"], [1, "flex", "h-40", "flex-col", "items-center", "justify-center", "text-stone-300", "dark:text-stone-600"], ["cdkDrag", "", 1, "group", "mb-2", "flex", "cursor-pointer", "items-center", "gap-2", "rounded-lg", "border", "border-stone-200", "bg-white", "px-3", "py-2.5", "transition-colors", "hover:border-indigo-300", "dark:border-gray-700", "dark:bg-gray-900/70", "dark:hover:border-indigo-600", 3, "ngClass"], [1, "!text-4xl", "!w-10", "!h-10", "mb-2"], [1, "text-sm"], ["cdkDrag", "", 1, "group", "mb-2", "flex", "cursor-pointer", "items-center", "gap-2", "rounded-lg", "border", "border-stone-200", "bg-white", "px-3", "py-2.5", "transition-colors", "hover:border-indigo-300", "dark:border-gray-700", "dark:bg-gray-900/70", "dark:hover:border-indigo-600", 3, "click", "ngClass"], ["cdkDragHandle", "", 1, "flex", "h-6", "w-6", "shrink-0", "cursor-grab", "items-center", "justify-center", "rounded", "text-stone-300", "hover:text-stone-500", "dark:text-stone-600", "dark:hover:text-stone-400"], [1, "!text-sm"], [1, "shrink-0", "w-7", "h-7", "rounded-md", "flex", "items-center", "justify-center"], [1, "min-w-0", "flex-1"], [1, "truncate", "text-sm", "font-medium", "text-stone-800", "dark:text-stone-200"], [1, "truncate", "text-xs", "text-stone-400", "dark:text-stone-500"], [1, "shrink-0", "flex", "items-center", "gap-0.5", "opacity-0", "group-hover:opacity-100", "transition-opacity"], ["mat-icon-button", "", 1, "!w-7", "!h-7", 3, "click", "matTooltip"], [1, "!text-sm", "text-stone-400", "dark:text-stone-500"], [1, "!text-sm", "text-red-400"], [1, "rounded-md", "px-2.5", "py-1", "text-xs", "font-medium", "transition-colors", 3, "click", "ngClass"], [1, "rounded-2xl", "border", "border-stone-200/90", "bg-white", "p-5", "shadow-sm", "dark:border-gray-800", "dark:bg-gray-900/70"], [1, "mt-1", "text-sm", "text-stone-500", "dark:text-stone-400"], [1, "mt-4", "rounded-xl", "border", "border-dashed", "border-stone-200", "px-4", "py-3", "text-sm", "text-stone-500", "dark:border-gray-700", "dark:text-stone-400"], [1, "mt-4", "flex", "flex-wrap", "gap-3"], ["mat-stroked-button", "", 1, "!rounded-xl", 3, "click", "disabled"], [1, "px-5", "py-8", "text-center", "text-sm", "italic", "text-stone-400", "dark:text-stone-500"], [1, "divide-y", "divide-stone-100", "dark:divide-gray-800"], [1, "border-t", "border-stone-100", "px-5", "py-3", "dark:border-gray-800"], [1, "flex", "items-center", "gap-3", "px-5", "py-3"], [1, "!h-5", "!w-5", "shrink-0", "!text-xl", "text-stone-300", "dark:text-gray-700"], [1, "shrink-0", "rounded-full", "px-2.5", "py-0.5", "text-[11px]", "font-semibold", "uppercase", "tracking-wide", 3, "ngClass"], [1, "flex", "items-center", "gap-3", "py-1.5"], [1, "shrink-0", "rounded-full", "px-2", "py-0.5", "text-[10px]", "font-semibold", "uppercase", 3, "ngClass"], [1, "min-w-0", "flex-1", "truncate", "text-xs", "text-stone-600", "dark:text-stone-300"], [1, "shrink-0", "text-xs", "text-stone-400", "dark:text-stone-500"], [1, "mb-3", "flex", "items-center", "justify-between"], [1, "flex", "h-7", "w-7", "items-center", "justify-center", "rounded-lg", "bg-indigo-600", "text-white", "shadow-md", "shadow-indigo-200", "dark:shadow-none"], [1, "text-[10px]", "text-stone-500", "dark:text-stone-400"], [1, "flex", "gap-1", "rounded-xl", "bg-stone-100", "p-1", "dark:bg-gray-850"], ["type", "button", 1, "flex-1", "rounded-lg", "py-1", "text-center", "text-xs", "font-medium", "transition-colors", 3, "click", "ngClass"], [1, "rounded-lg", "border", "px-3", "py-2", "text-xs", 3, "ngClass"], ["rows", "3", 1, "w-full", "resize-none", "rounded-xl", "border", "border-stone-200", "bg-white", "px-3", "py-2", "text-xs", "text-stone-600", "focus:border-indigo-500", "focus:ring-1", "focus:ring-indigo-500", "dark:border-gray-700", "dark:bg-gray-950", "dark:text-stone-300", 3, "placeholder", "disabled"], ["type", "button", 1, "text-xs", "text-indigo-600", "hover:text-indigo-800", "dark:text-indigo-400", "dark:hover:text-indigo-300", "disabled:opacity-50", 3, "click", "disabled"], [1, "font-medium"], ["cdkDragHandle", "", 1, "flex", "cursor-grab", "select-none", "items-center", "justify-between", "rounded-t-xl", "border-b", "border-stone-100", "bg-stone-50", "px-3", "py-2", "active:cursor-grabbing", "dark:border-gray-800", "dark:bg-gray-950/50"], [1, "flex", "min-w-0", "items-center", "gap-2"], [1, "!h-4", "!w-4", "shrink-0", "!text-base", "text-stone-400", "dark:text-stone-500"], [1, "truncate", "text-sm", "font-semibold", "text-stone-950", "dark:text-white"], ["mat-icon-button", "", 1, "!w-7", "!h-7", "shrink-0", 3, "click"], [1, "overflow-y-auto", "p-4", "space-y-4"], [1, "space-y-3", "border-t", "border-stone-100", "pt-3", "dark:border-gray-800"], [1, "space-y-2", "border-t", "border-stone-100", "pt-3", "dark:border-gray-800"], ["type", "text", 1, "w-full", "rounded-lg", "border", "border-stone-200", "px-3", "py-2", "text-sm", "dark:border-gray-700", "dark:bg-gray-950", "dark:text-white", 3, "input", "value", "placeholder"], ["rows", "4", 1, "w-full", "rounded-lg", "border", "border-stone-200", "px-3", "py-2", "text-sm", "dark:border-gray-700", "dark:bg-gray-950", "dark:text-white", 3, "input", "value", "placeholder"], ["type", "text", "placeholder", "https://example.com/logo.png", 1, "w-full", "rounded-lg", "border", "border-stone-200", "px-3", "py-2", "font-mono", "text-sm", "dark:border-gray-700", "dark:bg-gray-950", "dark:text-white", 3, "input", "value"], ["type", "number", "min", "4", "max", "200", 1, "w-full", "rounded-lg", "border", "border-stone-200", "px-3", "py-2", "text-sm", "dark:border-gray-700", "dark:bg-gray-950", "dark:text-white", 3, "input", "value"], ["type", "color", 1, "h-9", "w-9", "cursor-pointer", "rounded-lg", "border", "border-stone-200", "dark:border-gray-700", 3, "input", "value"], [1, "mt-3"], ["type", "range", "min", "1", "max", "12", "step", "1", 1, "flex-1", "accent-indigo-600", 3, "input", "value"], [1, "w-8", "shrink-0", "text-center", "text-xs", "font-semibold", "text-stone-700", "dark:text-stone-300"], [1, "w-full", "rounded-lg", "border", "border-stone-200", "px-3", "py-2", "text-sm", "dark:border-gray-700", "dark:bg-gray-950", "dark:text-white", 3, "change", "value"], ["value", "solid"], ["value", "dashed"], ["value", "dotted"], ["type", "range", "min", "0", "max", "32", "step", "2", 1, "flex-1", "accent-indigo-600", 3, "input", "value"], [1, "grid", "grid-cols-2", "gap-2"], ["type", "number", "min", "1", "max", "1000", "placeholder", "20", 1, "w-full", "rounded-lg", "border", "border-stone-200", "px-3", "py-2", "text-sm", "dark:border-gray-700", "dark:bg-gray-950", "dark:text-white", 3, "input", "value"], ["type", "number", "min", "1", "max", "24", "placeholder", "8", 1, "w-full", "rounded-lg", "border", "border-stone-200", "px-3", "py-2", "text-sm", "dark:border-gray-700", "dark:bg-gray-950", "dark:text-white", 3, "input", "value"], [1, "flex", "items-center", "gap-1"], [1, "rounded", "px-1.5", "py-0.5", "text-xs", "text-stone-400", "hover:text-rose-500"], [1, "rounded", "px-1.5", "py-0.5", "text-xs", "text-indigo-600", "hover:bg-indigo-50", "dark:hover:bg-indigo-950/40", 3, "click"], [1, "rounded-lg", "bg-stone-50", "px-3", "py-2", "text-xs", "text-stone-400", "dark:bg-gray-950", "dark:text-stone-500"], [1, "mb-1.5", "flex", "items-center", "gap-1.5"], [1, "rounded", "px-1.5", "py-0.5", "text-xs", "text-stone-400", "hover:text-rose-500", 3, "click"], ["type", "text", 1, "w-1/2", "rounded-lg", "border", "border-stone-200", "px-2", "py-1.5", "font-mono", "text-xs", "dark:border-gray-700", "dark:bg-gray-950", "dark:text-white", 3, "input", "value", "placeholder"], ["type", "text", 1, "w-1/2", "rounded-lg", "border", "border-stone-200", "px-2", "py-1.5", "text-xs", "dark:border-gray-700", "dark:bg-gray-950", "dark:text-white", 3, "input", "value", "placeholder"], [1, "shrink-0", "rounded", "p-1", "text-stone-300", "hover:text-rose-500", 3, "click"], ["type", "number", "min", "1", "max", "4", 1, "w-full", "rounded-lg", "border", "border-stone-200", "px-3", "py-2", "text-sm", "dark:border-gray-700", "dark:bg-gray-950", "dark:text-white", 3, "input", "value"], ["rows", "3", 1, "w-full", "rounded-lg", "border", "border-stone-200", "px-3", "py-2", "text-sm", "dark:border-gray-700", "dark:bg-gray-950", "dark:text-white", 3, "input", "value", "placeholder"], ["type", "text", "placeholder", "{numeroPoliza}", 1, "w-full", "rounded-lg", "border", "border-stone-200", "px-3", "py-2", "text-sm", "dark:border-gray-700", "dark:bg-gray-950", "dark:text-white", 3, "input", "value"], ["rows", "2", 1, "w-full", "rounded-lg", "border", "border-stone-200", "px-3", "py-2", "text-sm", "dark:border-gray-700", "dark:bg-gray-950", "dark:text-white", 3, "input", "value", "placeholder"], ["type", "number", "min", "1", "max", "1000", "placeholder", "10", 1, "w-full", "rounded-lg", "border", "border-stone-200", "px-3", "py-2", "text-sm", "dark:border-gray-700", "dark:bg-gray-950", "dark:text-white", 3, "input", "value"], [1, "rounded-lg", "bg-indigo-50/60", "px-3", "py-2", "text-xs", "text-indigo-700", "dark:bg-indigo-950/30", "dark:text-indigo-300"], ["type", "text", 1, "w-full", "rounded-lg", "border", "border-stone-200", "px-3", "py-2", "font-mono", "text-sm", "dark:border-gray-700", "dark:bg-gray-950", "dark:text-white", 3, "change", "value", "placeholder"], [1, "mt-1", "text-xs", "text-stone-400", "dark:text-stone-500"], [1, "flex", "items-center", "gap-2", "text-xs", "text-stone-600", "dark:text-stone-300"], ["type", "checkbox", 1, "rounded", "border-stone-300", "text-indigo-600", 3, "change", "checked"], [1, "mb-1.5", "text-xs", "text-stone-400", "dark:text-stone-500"], [1, "mb-2", "space-y-1.5", "rounded-lg", "border", "border-stone-200", "p-2", "dark:border-gray-700"], [1, "flex", "items-center", "gap-1.5"], ["type", "text", 1, "min-w-0", "flex-1", "rounded", "border", "border-stone-200", "px-2", "py-1", "font-mono", "text-xs", "dark:border-gray-700", "dark:bg-gray-950", "dark:text-white", 3, "input", "value", "placeholder"], [1, "w-1/3", "rounded", "border", "border-stone-200", "px-1.5", "py-1", "text-xs", "dark:border-gray-700", "dark:bg-gray-950", "dark:text-white", 3, "change", "value"], ["type", "text", 1, "w-1/3", "min-w-0", "rounded", "border", "border-stone-200", "px-1.5", "py-1", "text-xs", "dark:border-gray-700", "dark:bg-gray-950", "dark:text-white", 3, "value", "placeholder"], ["type", "text", 1, "w-1/3", "min-w-0", "rounded", "border", "border-stone-200", "px-1.5", "py-1", "text-xs", "dark:border-gray-700", "dark:bg-gray-950", "dark:text-white", 3, "input", "value", "placeholder"], ["type", "text", 1, "w-full", "rounded-lg", "border", "border-stone-200", "px-3", "py-2", "text-sm", "dark:border-gray-700", "dark:bg-gray-950", "dark:text-white", 3, "value", "placeholder"], [1, "flex-1", "rounded-lg", "border", "py-2", "text-sm", "transition-colors", "text-stone-700", "dark:text-stone-300", 3, "ngClass"], ["type", "number", "min", "8", "max", "72", 1, "w-full", "rounded-lg", "border", "border-stone-200", "px-3", "py-2", "text-sm", "dark:border-gray-700", "dark:bg-gray-950", "dark:text-white", 3, "input", "value"], [1, "flex-1", "rounded-lg", "border", "py-2", "text-sm", "transition-colors", "text-stone-700", "dark:text-stone-300", 3, "click", "ngClass"], [1, "flex-1", "rounded-lg", "border", "py-2", "text-sm", "font-bold", "transition-colors", "text-stone-700", "dark:text-stone-300", 3, "click", "ngClass"], [1, "flex-1", "rounded-lg", "border", "py-2", "text-sm", "transition-colors", "text-stone-700", "dark:text-stone-300", 3, "click"], [1, "flex-1", "rounded-lg", "border", "py-2", "text-sm", "italic", "transition-colors", "text-stone-700", "dark:text-stone-300", 3, "click"], ["type", "color", 1, "h-8", "w-8", "cursor-pointer", "rounded", "border", "border-stone-200", "dark:border-gray-700", 3, "input", "value"], [1, "flex", "items-center", "gap-2", "text-xs", "text-stone-500"], ["type", "checkbox", 3, "change", "checked"], [1, "flex", "items-center", "justify-between", "text-xs", "text-stone-400", "dark:text-stone-500"], ["type", "range", "min", "1", "max", "12", "step", "1", 1, "h-1.5", "w-full", "cursor-pointer", "appearance-none", "rounded-lg", "bg-stone-200", "accent-indigo-600", 3, "input", "value"], ["type", "range", "min", "0", "max", "32", "step", "1", 1, "h-1.5", "w-full", "cursor-pointer", "appearance-none", "rounded-lg", "bg-stone-200", "accent-indigo-600", 3, "input", "value"], [1, "flex", "h-[600px]", "flex-col", "items-center", "justify-center", "gap-2", "text-stone-400", "dark:text-stone-500"], ["sandbox", "", "title", "Report preview", 1, "h-[80vh]", "min-h-[600px]", "w-full", "border-0", "bg-white", 3, "src"], [1, "!h-8", "!w-8", "!text-3xl"], [1, "rounded-lg", "border", "border-stone-200", "px-3", "py-1.5", "text-xs", "hover:bg-white", "dark:border-gray-700", 3, "click"], [1, "!h-8", "!w-8", "!text-3xl", "animate-pulse"], [1, "mt-2", "text-[11px]", "text-stone-400"], [1, "mt-3", "mb-1", "text-[11px]", "font-semibold", "uppercase", "tracking-wider", "text-stone-400"], ["cdkDropList", "", 1, "max-h-48", "space-y-1", "overflow-y-auto", 3, "cdkDropListDropped"], ["cdkDrag", "", 1, "flex", "items-center", "gap-2", "rounded-lg", "border", "border-stone-200", "px-2", "py-1", "text-xs", "text-stone-700", "dark:border-gray-700", "dark:text-stone-200"], ["cdkDragHandle", "", 1, "!h-4", "!w-4", "!text-base", "cursor-grab", "text-stone-400"], [1, "min-w-0", "flex-1", "truncate"], [1, "text-[11px]", "font-medium", "text-indigo-600", "hover:underline", "dark:text-indigo-400", 3, "click"], [1, "flex", "items-center", "gap-2", "rounded-lg", "border", "border-indigo-100", "bg-indigo-50/60", "px-3", "py-2", "dark:border-indigo-900/50", "dark:bg-indigo-950/30"], [1, "flex", "w-full", "items-center", "justify-center", "gap-2", "rounded-lg", "border", "border-dashed", "border-stone-300", "px-3", "py-2.5", "text-sm", "text-stone-500", "hover:border-indigo-300", "hover:text-indigo-600", "dark:border-gray-700", "dark:text-stone-400"], [1, "!h-4", "!w-4", "shrink-0", "!text-base", "text-indigo-500"], [1, "min-w-0", "flex-1", "truncate", "text-sm", "text-stone-700", "dark:text-stone-200", 3, "matTooltip"], [1, "shrink-0", "text-stone-400", "hover:text-red-500", 3, "click", "matTooltip"], [1, "flex", "w-full", "items-center", "justify-center", "gap-2", "rounded-lg", "border", "border-dashed", "border-stone-300", "px-3", "py-2.5", "text-sm", "text-stone-500", "hover:border-indigo-300", "hover:text-indigo-600", "dark:border-gray-700", "dark:text-stone-400", 3, "click"], ["type", "text", 1, "mt-2", "w-full", "rounded-lg", "border", "border-stone-200", "px-3", "py-2", "font-mono", "text-sm", "dark:border-gray-700", "dark:bg-gray-950", "dark:text-white", 3, "input", "value", "placeholder"], ["cdkDrag", "", 1, "group", "flex", "items-center", "gap-1.5", "rounded-lg", "px-1.5", "py-1", "hover:bg-stone-50", "dark:hover:bg-gray-800/50", 3, "cdkDragData"], [1, "flex", "h-5", "w-5", "shrink-0", "items-center", "justify-center", "rounded", "text-stone-400", "hover:text-stone-700", "dark:hover:text-stone-200"], [1, "h-5", "w-5", "shrink-0"], [1, "!h-4", "!w-4", "shrink-0", "!text-base", "text-stone-300", "dark:text-stone-600", 3, "matTooltip"], [1, "flex", "min-w-0", "flex-1", "items-baseline", "gap-2", "text-left", 3, "click", "matTooltip"], [1, "truncate", "text-xs", "font-medium", "text-stone-700", "dark:text-stone-300"], [1, "truncate", "text-[11px]", "text-stone-400", "dark:text-stone-500"], [1, "shrink-0", "rounded", "p-0.5", "text-indigo-500", "opacity-0", "transition-opacity", "group-hover:opacity-100", 3, "click", "matTooltip"], [1, "flex", "h-5", "w-5", "shrink-0", "items-center", "justify-center", "rounded", "text-stone-400", "hover:text-stone-700", "dark:hover:text-stone-200", 3, "click"]], template: function ReportBuilderComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 5)(1, "div", 6)(2, "div", 7)(3, "div", 8)(4, "div", 9)(5, "button", 10);
        \u0275\u0275pipe(6, "transloco");
        \u0275\u0275listener("click", function ReportBuilderComponent_Template_button_click_5_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.goBack());
        });
        \u0275\u0275elementStart(7, "mat-icon");
        \u0275\u0275text(8, "arrow_back");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 11)(10, "div", 12);
        \u0275\u0275element(11, "input", 13);
        \u0275\u0275pipe(12, "transloco");
        \u0275\u0275elementStart(13, "p", 14);
        \u0275\u0275text(14);
        \u0275\u0275pipe(15, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(16, "input", 15);
        \u0275\u0275pipe(17, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "div", 16);
        \u0275\u0275repeaterCreate(19, ReportBuilderComponent_For_20_Template, 5, 6, "button", 17, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "div", 9)(22, "button", 18);
        \u0275\u0275listener("click", function ReportBuilderComponent_Template_button_click_22_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.showSettingsDrawer.set(true));
        });
        \u0275\u0275elementStart(23, "span", 19)(24, "mat-icon", 20);
        \u0275\u0275text(25, "tune");
        \u0275\u0275elementEnd();
        \u0275\u0275text(26);
        \u0275\u0275pipe(27, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "button", 21);
        \u0275\u0275listener("click", function ReportBuilderComponent_Template_button_click_28_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.save());
        });
        \u0275\u0275elementStart(29, "span", 19);
        \u0275\u0275template(30, ReportBuilderComponent_Conditional_30_Template, 4, 3)(31, ReportBuilderComponent_Conditional_31_Template, 4, 3);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(32, "div", 22);
        \u0275\u0275repeaterCreate(33, ReportBuilderComponent_For_34_Template, 5, 6, "button", 23, _forTrack0);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(35, "div", 24)(36, "div", 25);
        \u0275\u0275template(37, ReportBuilderComponent_Conditional_37_Template, 185, 123);
        \u0275\u0275elementStart(38, "div", 26)(39, "div", 27)(40, "div", 28);
        \u0275\u0275repeaterCreate(41, ReportBuilderComponent_For_42_Template, 6, 6, "button", 29, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275template(43, ReportBuilderComponent_Conditional_43_Template, 26, 20)(44, ReportBuilderComponent_Conditional_44_Template, 6, 3, "div", 30)(45, ReportBuilderComponent_Conditional_45_Template, 16, 11, "div", 31);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(46, "div", 32)(47, "div", 33)(48, "div", 34)(49, "h3", 35);
        \u0275\u0275text(50);
        \u0275\u0275pipe(51, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "div", 36);
        \u0275\u0275template(53, ReportBuilderComponent_Conditional_53_Template, 3, 3, "span", 37)(54, ReportBuilderComponent_Conditional_54_Template, 7, 8, "div", 38)(55, ReportBuilderComponent_Conditional_55_Template, 3, 3, "span", 39);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(56, ReportBuilderComponent_Conditional_56_Template, 3, 3, "p", 40)(57, ReportBuilderComponent_Conditional_57_Template, 27, 17, "div", 41)(58, ReportBuilderComponent_Conditional_58_Template, 33, 20, "div", 42)(59, ReportBuilderComponent_Conditional_59_Template, 29, 21, "div", 43)(60, ReportBuilderComponent_Conditional_60_Template, 4, 1, "div", 44);
        \u0275\u0275elementStart(61, "div", 45);
        \u0275\u0275listener("cdkDropListDropped", function ReportBuilderComponent_Template_div_cdkDropListDropped_61_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onCanvasDrop($event));
        })("click", function ReportBuilderComponent_Template_div_click_61_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onCanvasBlankClick($event));
        });
        \u0275\u0275elementStart(62, "report-preview", 46, 0);
        \u0275\u0275listener("inlineTextChange", function ReportBuilderComponent_Template_report_preview_inlineTextChange_62_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onPreviewInlineText($event));
        })("overlaySelect", function ReportBuilderComponent_Template_report_preview_overlaySelect_62_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onPreviewOverlaySelect($event));
        })("backgroundClick", function ReportBuilderComponent_Template_report_preview_backgroundClick_62_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.clearPreviewSelection());
        })("signaturePositionChange", function ReportBuilderComponent_Template_report_preview_signaturePositionChange_62_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onSignaturePositionChange($event));
        })("signatureSizeChange", function ReportBuilderComponent_Template_report_preview_signatureSizeChange_62_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onSignatureSizeChange($event));
        })("logoPositionChange", function ReportBuilderComponent_Template_report_preview_logoPositionChange_62_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onLogoPositionChange($event));
        })("logoSizeChange", function ReportBuilderComponent_Template_report_preview_logoSizeChange_62_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onLogoSizeChange($event));
        })("logoRotationChange", function ReportBuilderComponent_Template_report_preview_logoRotationChange_62_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onLogoRotationChange($event));
        })("watermarkPositionChange", function ReportBuilderComponent_Template_report_preview_watermarkPositionChange_62_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onWatermarkPositionChange($event));
        })("watermarkSizeChange", function ReportBuilderComponent_Template_report_preview_watermarkSizeChange_62_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onWatermarkSizeChange($event));
        })("watermarkRotationChange", function ReportBuilderComponent_Template_report_preview_watermarkRotationChange_62_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onWatermarkRotationChange($event));
        });
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275template(64, ReportBuilderComponent_ng_template_64_Template, 6, 5, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(66, ReportBuilderComponent_ng_template_66_Template, 11, 8, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(68, ReportBuilderComponent_ng_template_68_Template, 16, 18, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        let tmp_27_0;
        let tmp_32_0;
        let tmp_33_0;
        let tmp_35_0;
        let tmp_36_0;
        let tmp_37_0;
        let tmp_39_0;
        let tmp_43_0;
        let tmp_44_0;
        let tmp_45_0;
        let tmp_46_0;
        let tmp_47_0;
        let tmp_48_0;
        let tmp_49_0;
        let tmp_50_0;
        let tmp_51_0;
        let tmp_52_0;
        let tmp_53_0;
        let tmp_54_0;
        let tmp_55_0;
        let tmp_56_0;
        let tmp_57_0;
        let tmp_58_0;
        let tmp_59_0;
        let tmp_60_0;
        let tmp_61_0;
        let tmp_62_0;
        let tmp_63_0;
        let tmp_64_0;
        let tmp_65_0;
        let tmp_66_0;
        let tmp_68_0;
        let tmp_69_0;
        let tmp_70_0;
        let tmp_71_0;
        let tmp_72_0;
        let tmp_73_0;
        let tmp_74_0;
        \u0275\u0275advance(5);
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(6, 71, "smartReport.back"));
        \u0275\u0275advance(4);
        \u0275\u0275property("formGroup", ctx.templateForm);
        \u0275\u0275advance(2);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(12, 73, "smartReport.templateNamePlaceholder"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 75, ctx.templateId() ? "smartReport.editReportTemplate" : "smartReport.newReportTemplate"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(17, 77, "smartReport.primaryColor"));
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.builderSteps);
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(27, 79, "smartReport.documentSettings"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.isSaving());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.isSaving() ? 30 : 31);
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.builderSteps);
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.showSettingsDrawer() ? 37 : -1);
        \u0275\u0275advance();
        \u0275\u0275classProp("hidden", ctx.builderStep() !== "prepare");
        \u0275\u0275advance(3);
        \u0275\u0275repeater(\u0275\u0275pureFunction3(86, _c4, \u0275\u0275pureFunction0(83, _c1), \u0275\u0275pureFunction0(84, _c2), \u0275\u0275pureFunction0(85, _c3)));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.railTab() === "data" ? 43 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.railTab() === "blocks" ? 44 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.railTab() === "layers" ? 45 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275classProp("hidden", ctx.builderStep() === "deliver");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(51, 81, "smartReport.preview"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.previewMode() === "exact" && ctx.isRenderingExact() ? 53 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.builderStep() === "prepare" ? 54 : ctx.builderStep() === "preview" ? 55 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.previewMode() === "edit" && ctx.builderStep() === "prepare" ? 56 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.builderStep() === "deliver" ? 57 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.builderStep() === "prepare" ? 58 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((tmp_27_0 = ctx.builderStep() === "prepare" && ctx.currentSelectedSection()) ? 59 : -1, tmp_27_0);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.previewMode() === "exact" && ctx.builderStep() !== "deliver" ? 60 : -1);
        \u0275\u0275advance();
        \u0275\u0275classProp("hidden", ctx.previewMode() !== "edit" || ctx.builderStep() === "deliver");
        \u0275\u0275property("id", ctx.canvasDropListId)("cdkDropListSortingDisabled", true);
        \u0275\u0275advance();
        \u0275\u0275property("template", \u0275\u0275pureFunction5(90, _c5, ctx.sections(), (tmp_32_0 = ctx.templateForm.get("primaryColor")) == null ? null : tmp_32_0.value, ((tmp_32_0 = ctx.templateForm.get("pageSize")) == null ? null : tmp_32_0.value) || "A4", (tmp_32_0 = ctx.template()) == null ? null : tmp_32_0.headerLogos, (tmp_32_0 = ctx.template()) == null ? null : tmp_32_0.sheetImages))("sheetImages", (tmp_33_0 = (tmp_33_0 = ctx.template()) == null ? null : tmp_33_0.sheetImages) !== null && tmp_33_0 !== void 0 ? tmp_33_0 : \u0275\u0275pureFunction0(96, _c6))("previewData", ctx.previewData())("primaryColor", ((tmp_35_0 = ctx.templateForm.get("primaryColor")) == null ? null : tmp_35_0.value) || "#4F46E5")("pageBackgroundColor", ((tmp_36_0 = ctx.templateForm.get("pageBackgroundColor")) == null ? null : tmp_36_0.value) || "#ffffff")("orientation", ((tmp_37_0 = ctx.templateForm.get("orientation")) == null ? null : tmp_37_0.value) || "portrait")("clickable", true)("selectedSectionId", (tmp_39_0 = (tmp_39_0 = ctx.currentSelectedSection()) == null ? null : tmp_39_0.id) !== null && tmp_39_0 !== void 0 ? tmp_39_0 : null)("selectedOverlay", ctx.selectedOverlay())("sectionClick", ctx.onPreviewSectionClick)("logoUrl", ctx.logoUrl())("legend", ((tmp_43_0 = ctx.templateForm.get("legend")) == null ? null : tmp_43_0.value) || "")("legendPosition", ((tmp_44_0 = ctx.templateForm.get("legendPosition")) == null ? null : tmp_44_0.value) || "left")("termsAndConditions", ((tmp_45_0 = ctx.templateForm.get("termsAndConditions")) == null ? null : tmp_45_0.value) || "")("termsPosition", ((tmp_46_0 = ctx.templateForm.get("termsPosition")) == null ? null : tmp_46_0.value) || "left")("showPageNumbers", ((tmp_47_0 = ctx.templateForm.get("showPageNumbers")) == null ? null : tmp_47_0.value) || false)("pageNumberPosition", ((tmp_48_0 = ctx.templateForm.get("pageNumberPosition")) == null ? null : tmp_48_0.value) || "bottom-center")("watermarkEnabled", ((tmp_49_0 = ctx.templateForm.get("watermarkEnabled")) == null ? null : tmp_49_0.value) || false)("watermarkType", ((tmp_50_0 = ctx.templateForm.get("watermarkType")) == null ? null : tmp_50_0.value) || "text")("watermarkLogoUrl", ((tmp_51_0 = ctx.template()) == null ? null : tmp_51_0.watermark == null ? null : tmp_51_0.watermark.logo) || void 0)("watermarkText", ((tmp_52_0 = ctx.templateForm.get("watermarkText")) == null ? null : tmp_52_0.value) || "CONFIDENTIAL")("watermarkOpacity", (tmp_53_0 = (tmp_53_0 = ctx.templateForm.get("watermarkOpacity")) == null ? null : tmp_53_0.value) !== null && tmp_53_0 !== void 0 ? tmp_53_0 : 0.08)("watermarkPattern", ((tmp_54_0 = ctx.templateForm.get("watermarkPattern")) == null ? null : tmp_54_0.value) || "single")("watermarkX", (tmp_55_0 = (tmp_55_0 = ctx.templateForm.get("watermarkX")) == null ? null : tmp_55_0.value) !== null && tmp_55_0 !== void 0 ? tmp_55_0 : 250)("watermarkY", (tmp_56_0 = (tmp_56_0 = ctx.templateForm.get("watermarkY")) == null ? null : tmp_56_0.value) !== null && tmp_56_0 !== void 0 ? tmp_56_0 : 420)("watermarkWidth", (tmp_57_0 = (tmp_57_0 = ctx.templateForm.get("watermarkWidth")) == null ? null : tmp_57_0.value) !== null && tmp_57_0 !== void 0 ? tmp_57_0 : 280)("watermarkHeight", (tmp_58_0 = (tmp_58_0 = ctx.templateForm.get("watermarkHeight")) == null ? null : tmp_58_0.value) !== null && tmp_58_0 !== void 0 ? tmp_58_0 : 160)("watermarkRotation", (tmp_59_0 = (tmp_59_0 = ctx.templateForm.get("watermarkRotation")) == null ? null : tmp_59_0.value) !== null && tmp_59_0 !== void 0 ? tmp_59_0 : -15)("signatureEnabled", ((tmp_60_0 = ctx.templateForm.get("signatureEnabled")) == null ? null : tmp_60_0.value) || false)("signatureImage", ((tmp_61_0 = ctx.templateForm.get("signatureImage")) == null ? null : tmp_61_0.value) || null)("signatureX", ((tmp_62_0 = ctx.templateForm.get("signatureX")) == null ? null : tmp_62_0.value) || 0)("signatureY", ((tmp_63_0 = ctx.templateForm.get("signatureY")) == null ? null : tmp_63_0.value) || 0)("signatureWidth", ((tmp_64_0 = ctx.templateForm.get("signatureWidth")) == null ? null : tmp_64_0.value) || 100)("signatureHeight", ((tmp_65_0 = ctx.templateForm.get("signatureHeight")) == null ? null : tmp_65_0.value) || 50)("signaturePage", ((tmp_66_0 = ctx.templateForm.get("signaturePage")) == null ? null : tmp_66_0.value) || 0)("logoEnabled", !!ctx.logoUrl())("logoX", (tmp_68_0 = (tmp_68_0 = ctx.templateForm.get("logoX")) == null ? null : tmp_68_0.value) !== null && tmp_68_0 !== void 0 ? tmp_68_0 : 32)("logoY", (tmp_69_0 = (tmp_69_0 = ctx.templateForm.get("logoY")) == null ? null : tmp_69_0.value) !== null && tmp_69_0 !== void 0 ? tmp_69_0 : 32)("logoWidth", (tmp_70_0 = (tmp_70_0 = ctx.templateForm.get("logoWidth")) == null ? null : tmp_70_0.value) !== null && tmp_70_0 !== void 0 ? tmp_70_0 : 160)("logoHeight", (tmp_71_0 = (tmp_71_0 = ctx.templateForm.get("logoHeight")) == null ? null : tmp_71_0.value) !== null && tmp_71_0 !== void 0 ? tmp_71_0 : 60)("logoRotation", (tmp_72_0 = (tmp_72_0 = ctx.templateForm.get("logoRotation")) == null ? null : tmp_72_0.value) !== null && tmp_72_0 !== void 0 ? tmp_72_0 : 0)("logoAutoFitContent", ((tmp_73_0 = ctx.templateForm.get("logoAutoFitContent")) == null ? null : tmp_73_0.value) || false)("bodyTopPadding", ((tmp_74_0 = ctx.templateForm.get("bodyTopPadding")) == null ? null : tmp_74_0.value) || 0);
      }
    }, dependencies: [
      CommonModule,
      NgClass,
      NgTemplateOutlet,
      SlicePipe,
      DecimalPipe,
      DatePipe,
      RouterModule,
      ReactiveFormsModule,
      \u0275NgNoValidate,
      NgSelectOption,
      \u0275NgSelectMultipleOption,
      DefaultValueAccessor,
      NumberValueAccessor,
      RangeValueAccessor,
      CheckboxControlValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      MaxLengthValidator,
      MinValidator,
      MaxValidator,
      FormGroupDirective,
      FormControlName,
      DragDropModule,
      CdkDropList,
      CdkDrag,
      CdkDragHandle,
      MatButtonModule,
      MatButton,
      MatIconButton,
      MatDialogModule,
      MatIconModule,
      MatIcon,
      MatFormFieldModule,
      MatFormField,
      MatLabel,
      MatInputModule,
      MatInput,
      MatSelectModule,
      MatSelect,
      MatOption,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatTooltipModule,
      MatTooltip,
      MatSnackBarModule,
      MatSlideToggleModule,
      MatSlideToggle,
      TranslocoModule,
      TranslocoPipe,
      ReportPreviewComponent
    ], encapsulation: 2, data: { animation: [fuseAnimations] } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReportBuilderComponent, [{
    type: Component,
    args: [{ selector: "report-builder", standalone: true, imports: [
      CommonModule,
      RouterModule,
      ReactiveFormsModule,
      DragDropModule,
      MatButtonModule,
      MatDialogModule,
      MatIconModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      MatProgressSpinnerModule,
      MatTooltipModule,
      MatSnackBarModule,
      MatSlideToggleModule,
      TranslocoModule,
      ReportPreviewComponent
    ], animations: [fuseAnimations], template: `<div class="min-h-screen w-full bg-stone-50 dark:bg-gray-950">\r
    <!-- ========== TOP BAR ========== -->\r
    <div class="sticky top-0 z-20 border-b border-stone-200/90 bg-white/90 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-950/90">\r
        <div class="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-3">\r
            <div class="flex items-center justify-between">\r
                <div class="flex items-center gap-3">\r
                    <button\r
                        mat-icon-button\r
                        (click)="goBack()"\r
                        [matTooltip]="'smartReport.back' | transloco"\r
                    >\r
                        <mat-icon>arrow_back</mat-icon>\r
                    </button>\r
                    <!--\r
                        Name and primary colour are the only settings inline; the other\r
                        ~25 controls live in the Document settings drawer so the canvas\r
                        is what the page is about.\r
                    -->\r
                    <div class="flex items-center gap-2" [formGroup]="templateForm">\r
                        <div class="min-w-0">\r
                            <input\r
                                type="text"\r
                                formControlName="name"\r
                                class="w-full min-w-0 max-w-[280px] truncate border-0 bg-transparent p-0 text-lg font-bold text-stone-950 outline-none placeholder:text-stone-300 dark:text-white dark:placeholder:text-stone-600"\r
                                [placeholder]="'smartReport.templateNamePlaceholder' | transloco"\r
                            />\r
                            <p class="text-xs text-stone-500 dark:text-stone-400">\r
                                {{\r
                                    (templateId()\r
                                        ? 'smartReport.editReportTemplate'\r
                                        : 'smartReport.newReportTemplate'\r
                                    ) | transloco\r
                                }}\r
                            </p>\r
                        </div>\r
                        <input\r
                            type="color"\r
                            formControlName="primaryColor"\r
                            class="h-8 w-8 shrink-0 cursor-pointer rounded-lg border border-stone-200 dark:border-gray-700"\r
                            [matTooltip]="'smartReport.primaryColor' | transloco"\r
                        />\r
                    </div>\r
                </div>\r
\r
                <!--\r
                    Prepare, Preview, Deliver.\r
                    A document has an order to it: build, check, send. Showing all three\r
                    at once said nothing about what to do next, and let a template be\r
                    emailed without its printed form ever being looked at.\r
                -->\r
                <div\r
                    class="hidden items-center gap-1 rounded-xl border border-stone-200 bg-stone-50 p-1 md:flex dark:border-gray-800 dark:bg-gray-900"\r
                >\r
                    @for (step of builderSteps; track step.key; let index = $index) {\r
                        <button\r
                            (click)="goToStep(step.key)"\r
                            class="inline-flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm font-medium transition-colors"\r
                            [ngClass]="\r
                                builderStep() === step.key\r
                                    ? 'bg-white text-stone-950 shadow-sm dark:bg-gray-800 dark:text-white'\r
                                    : 'text-stone-500 hover:text-stone-800 dark:text-stone-400 dark:hover:text-stone-200'\r
                            "\r
                        >\r
                            <span\r
                                class="flex h-5 w-5 items-center justify-center rounded-full text-[11px] font-semibold"\r
                                [ngClass]="\r
                                    builderStep() === step.key\r
                                        ? 'bg-indigo-600 text-white'\r
                                        : 'bg-stone-200 text-stone-600 dark:bg-gray-700 dark:text-stone-300'\r
                                "\r
                                >{{ index + 1 }}</span\r
                            >\r
                            {{ step.labelKey | transloco }}\r
                        </button>\r
                    }\r
                </div>\r
\r
                <div class="flex items-center gap-3">\r
                    <button\r
                        mat-stroked-button\r
                        (click)="showSettingsDrawer.set(true)"\r
                        class="!rounded-xl"\r
                    >\r
                        <span class="inline-flex items-center gap-2">\r
                            <mat-icon class="!text-lg">tune</mat-icon>\r
                            {{ 'smartReport.documentSettings' | transloco }}\r
                        </span>\r
                    </button>\r
                    <button\r
                        mat-flat-button\r
                        (click)="save()"\r
                        [disabled]="isSaving()"\r
                        class="!rounded-xl !bg-indigo-600 !text-white"\r
                    >\r
                        <span class="inline-flex items-center gap-2">\r
                            @if (isSaving()) {\r
                                <mat-icon class="animate-spin !text-lg">refresh</mat-icon>\r
                                {{ 'smartReport.saving' | transloco }}\r
                            } @else {\r
                                <mat-icon class="!text-lg">save</mat-icon>\r
                                {{ 'smartReport.saveTemplate' | transloco }}\r
                            }\r
                        </span>\r
                    </button>\r
                </div>\r
            </div>\r
\r
            <!-- Compact step switcher for narrow viewports (desktop uses the top-bar control). -->\r
            <div\r
                class="mt-3 flex items-center gap-1 rounded-xl border border-stone-200 bg-stone-50 p-1 md:hidden dark:border-gray-800 dark:bg-gray-900"\r
            >\r
                @for (step of builderSteps; track step.key; let index = $index) {\r
                    <button\r
                        (click)="goToStep(step.key)"\r
                        class="flex flex-1 items-center justify-center gap-1.5 rounded-lg px-2 py-1.5 text-xs font-medium transition-colors"\r
                        [ngClass]="\r
                            builderStep() === step.key\r
                                ? 'bg-white text-stone-950 shadow-sm dark:bg-gray-800 dark:text-white'\r
                                : 'text-stone-500 dark:text-stone-400'\r
                        "\r
                    >\r
                        <span\r
                            class="flex h-5 w-5 items-center justify-center rounded-full text-[11px] font-semibold"\r
                            [ngClass]="\r
                                builderStep() === step.key\r
                                    ? 'bg-indigo-600 text-white'\r
                                    : 'bg-stone-200 text-stone-600 dark:bg-gray-700 dark:text-stone-300'\r
                            "\r
                            >{{ index + 1 }}</span\r
                        >\r
                        {{ step.labelKey | transloco }}\r
                    </button>\r
                }\r
            </div>\r
        </div>\r
    </div>\r
\r
    <!-- ========== MAIN LAYOUT ========== -->\r
    <div class="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-6">\r
        <div class="flex gap-6 items-start">\r
            <!--\r
                ============================================\r
                DOCUMENT SETTINGS DRAWER\r
                ============================================\r
                Page setup, logo, watermark, security and signature. Fixed-position, so\r
                it sits over the canvas rather than competing with it for width.\r
            -->\r
            @if (showSettingsDrawer()) {\r
                <div\r
                    class="fixed inset-0 z-40 bg-stone-900/25 dark:bg-black/50"\r
                    (click)="showSettingsDrawer.set(false)"\r
                ></div>\r
                <aside\r
                    class="fixed right-0 top-0 z-50 flex h-screen w-full max-w-md flex-col border-l border-stone-200 bg-white dark:border-gray-800 dark:bg-gray-900"\r
                >\r
                    <div\r
                        class="flex shrink-0 items-center justify-between border-b border-stone-100 px-5 py-3 dark:border-gray-800"\r
                    >\r
                        <h3 class="text-sm font-semibold text-stone-950 dark:text-white">\r
                            {{ 'smartReport.documentSettings' | transloco }}\r
                        </h3>\r
                        <button mat-icon-button (click)="showSettingsDrawer.set(false)">\r
                            <mat-icon class="!text-base text-stone-400 dark:text-stone-500"\r
                                >close</mat-icon\r
                            >\r
                        </button>\r
                    </div>\r
\r
                    <div class="min-h-0 flex-1 overflow-y-auto p-5">\r
                    <form [formGroup]="templateForm" class="space-y-4">\r
                        <mat-form-field appearance="outline" class="w-full">\r
                            <mat-label>{{ 'smartReport.templateName' | transloco }}</mat-label>\r
                            <input\r
                                matInput\r
                                formControlName="name"\r
                                [placeholder]="'smartReport.templateNamePlaceholder' | transloco"\r
                            />\r
                        </mat-form-field>\r
\r
                        <mat-form-field appearance="outline" class="w-full">\r
                            <mat-label>{{\r
                                'smartReport.linkedConfigurationOptional' | transloco\r
                            }}</mat-label>\r
                            <mat-select\r
                                [value]="linkedConfigId() ?? ''"\r
                                (selectionChange)="setLinkedConfigId($event.value || null)"\r
                            >\r
                                <mat-option value="">{{\r
                                    'smartReport.noLinkedConfiguration' | transloco\r
                                }}</mat-option>\r
                                @for (config of configurations(); track config._id ?? config.id) {\r
                                    <mat-option [value]="config._id ?? config.id ?? ''">\r
                                        {{ getConfigOptionLabel(config) }}\r
                                    </mat-option>\r
                                }\r
                            </mat-select>\r
                        </mat-form-field>\r
\r
                        <div class="grid grid-cols-3 gap-3">\r
                            <mat-form-field appearance="outline">\r
                                <mat-label>{{ 'smartReport.pageSize' | transloco }}</mat-label>\r
                                <mat-select formControlName="pageSize">\r
                                    <mat-option value="A4">A4</mat-option>\r
                                    <mat-option value="Letter">Letter</mat-option>\r
                                    <mat-option value="Legal">Legal</mat-option>\r
                                </mat-select>\r
                            </mat-form-field>\r
\r
                            <mat-form-field appearance="outline">\r
                                <mat-label>{{ 'smartReport.orientation' | transloco }}</mat-label>\r
                                <mat-select formControlName="orientation">\r
                                    <mat-option value="portrait">{{\r
                                        'smartReport.portrait' | transloco\r
                                    }}</mat-option>\r
                                    <mat-option value="landscape">{{\r
                                        'smartReport.landscape' | transloco\r
                                    }}</mat-option>\r
                                </mat-select>\r
                            </mat-form-field>\r
\r
                            <mat-form-field appearance="outline">\r
                                <mat-label>{{ 'smartReport.pdfEngine' | transloco }}</mat-label>\r
                                <mat-select formControlName="pdfEngine">\r
                                    <mat-option value="puppeteer">{{\r
                                        'smartReport.pdfEngineHtml' | transloco\r
                                    }}</mat-option>\r
                                    <mat-option value="pdfkit">{{\r
                                        'smartReport.pdfEngineClassic' | transloco\r
                                    }}</mat-option>\r
                                </mat-select>\r
                            </mat-form-field>\r
                        </div>\r
\r
                        <div class="flex flex-wrap items-center gap-6">\r
                            <div class="flex items-center gap-3">\r
                                <label class="text-sm text-stone-600 dark:text-stone-400">{{\r
                                    'smartReport.primaryColor' | transloco\r
                                }}</label>\r
                                <input\r
                                    type="color"\r
                                    formControlName="primaryColor"\r
                                    class="h-9 w-9 cursor-pointer rounded-lg border border-stone-200 dark:border-gray-700"\r
                                />\r
                            </div>\r
                            <div class="flex items-center gap-3">\r
                                <label class="text-sm text-stone-600 dark:text-stone-400">{{\r
                                    'smartReport.pageBackgroundColor' | transloco\r
                                }}</label>\r
                                <input\r
                                    type="color"\r
                                    formControlName="pageBackgroundColor"\r
                                    class="h-9 w-9 cursor-pointer rounded-lg border border-stone-200 dark:border-gray-700"\r
                                />\r
                            </div>\r
                        </div>\r
\r
                        <!-- Workspace Logo (drag & resize on preview) -->\r
                        <div class="space-y-3 rounded-xl border border-stone-100 bg-stone-50 p-4 dark:border-gray-800 dark:bg-gray-950/50">\r
                            <div class="flex items-center gap-2">\r
                                <mat-icon class="!h-5 !w-5 !text-[20px] text-stone-400 dark:text-stone-500"\r
                                    >image</mat-icon\r
                                >\r
                                <span class="text-sm font-medium text-stone-700 dark:text-stone-300">{{\r
                                    'smartReport.workspaceLogo' | transloco\r
                                }}</span>\r
                            </div>\r
\r
                            @if (logoUrl()) {\r
                                <div\r
                                    class="relative group flex justify-center rounded-lg border border-stone-200 bg-white p-2 dark:border-gray-700 dark:bg-gray-900/70"\r
                                >\r
                                    <img\r
                                        [src]="logoUrl()"\r
                                        alt="Logo"\r
                                        class="h-12 max-w-[180px] object-contain"\r
                                    />\r
                                    <button\r
                                        type="button"\r
                                        (click)="removeLogo()"\r
                                        class="absolute right-1 top-1 rounded-full bg-red-50 p-1 text-red-500 opacity-0 transition-opacity hover:bg-red-100 group-hover:opacity-100 dark:bg-red-950/40 dark:text-red-300 dark:hover:bg-red-950/60"\r
                                        [matTooltip]="'smartReport.remove' | transloco"\r
                                    >\r
                                        <mat-icon class="!w-4 !h-4 !text-[16px]">close</mat-icon>\r
                                    </button>\r
                                </div>\r
                                <label\r
                                    class="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg border border-dashed border-stone-300 px-3 py-2 text-xs text-stone-500 transition-colors hover:border-indigo-300 hover:bg-indigo-50 dark:border-gray-600 dark:text-stone-400 dark:hover:border-indigo-600 dark:hover:bg-indigo-950/30"\r
                                >\r
                                    <mat-icon class="!text-base">upload</mat-icon>\r
                                    {{ 'smartReport.replaceLogo' | transloco }}\r
                                    <input\r
                                        type="file"\r
                                        accept="image/png,image/jpeg,image/svg+xml,image/webp"\r
                                        (change)="onLogoUpload($event)"\r
                                        class="hidden"\r
                                    />\r
                                </label>\r
                                <p class="text-xs text-stone-400 dark:text-stone-500">\r
                                    {{ 'smartReport.dragLogoToPosition' | transloco }}\r
                                </p>\r
\r
                                <!-- Precise width / height inputs -->\r
                                <div class="grid grid-cols-2 gap-2 pt-1">\r
                                    <label class="block">\r
                                        <span class="text-[10px] text-stone-400 dark:text-stone-500">\r
                                            {{ 'smartReport.width' | transloco }} (px)\r
                                        </span>\r
                                        <input\r
                                            type="number"\r
                                            formControlName="logoWidth"\r
                                            min="24"\r
                                            max="800"\r
                                            step="1"\r
                                            class="w-full rounded-md border border-stone-200 px-2 py-1.5 text-xs dark:border-gray-700 dark:bg-gray-950 dark:text-white"\r
                                        />\r
                                    </label>\r
                                    <label class="block">\r
                                        <span class="text-[10px] text-stone-400 dark:text-stone-500">\r
                                            {{ 'smartReport.height' | transloco }} (px)\r
                                        </span>\r
                                        <input\r
                                            type="number"\r
                                            formControlName="logoHeight"\r
                                            min="16"\r
                                            max="600"\r
                                            step="1"\r
                                            class="w-full rounded-md border border-stone-200 px-2 py-1.5 text-xs dark:border-gray-700 dark:bg-gray-950 dark:text-white"\r
                                        />\r
                                    </label>\r
                                </div>\r
                                <label class="block pt-1">\r
                                    <span class="text-[10px] text-stone-400 dark:text-stone-500">\r
                                        {{ 'smartReport.rotation' | transloco }}\r
                                        ({{ templateForm.get('logoRotation')?.value ?? 0 }}\xB0)\r
                                    </span>\r
                                    <input\r
                                        type="range"\r
                                        min="-180"\r
                                        max="180"\r
                                        step="1"\r
                                        formControlName="logoRotation"\r
                                        class="h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-stone-200 accent-indigo-600 dark:bg-gray-700"\r
                                    />\r
                                </label>\r
\r
                                <!-- Auto-fit content below logo -->\r
                                <div\r
                                    class="flex items-center justify-between border-t border-stone-200 pt-2 dark:border-gray-800"\r
                                >\r
                                    <div class="flex-1 pr-2">\r
                                        <p class="text-xs font-medium text-stone-700 dark:text-stone-300">\r
                                            {{ 'smartReport.autoFitBelowLogo' | transloco }}\r
                                        </p>\r
                                        <p class="mt-0.5 text-[10px] text-stone-400 dark:text-stone-500">\r
                                            {{ 'smartReport.autoFitContentHint' | transloco }}\r
                                        </p>\r
                                    </div>\r
                                    <mat-slide-toggle\r
                                        formControlName="logoAutoFitContent"\r
                                        color="primary"\r
                                    ></mat-slide-toggle>\r
                                </div>\r
                            } @else {\r
                                <label\r
                                    class="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg border border-dashed border-stone-300 px-3 py-3 text-sm text-stone-500 transition-colors hover:border-indigo-300 hover:bg-indigo-50 dark:border-gray-600 dark:text-stone-400 dark:hover:border-indigo-600 dark:hover:bg-indigo-950/30"\r
                                >\r
                                    <mat-icon class="!text-base">upload</mat-icon>\r
                                    {{ 'smartReport.uploadLogo' | transloco }}\r
                                    <input\r
                                        type="file"\r
                                        accept="image/png,image/jpeg,image/svg+xml,image/webp"\r
                                        (change)="onLogoUpload($event)"\r
                                        class="hidden"\r
                                    />\r
                                </label>\r
                                <p class="text-center text-xs text-stone-400 dark:text-stone-500">\r
                                    PNG, JPG, SVG &middot; max 500KB\r
                                </p>\r
                            }\r
                        </div>\r
\r
                        <!-- Content top padding -->\r
                        <div class="border-t border-stone-100 pt-3 dark:border-gray-800">\r
                            <div class="mb-1 flex items-center justify-between">\r
                                <label class="text-xs font-medium text-stone-500 dark:text-stone-400">{{\r
                                    'smartReport.contentTopPadding' | transloco\r
                                }}</label>\r
                                <span class="font-mono text-xs text-stone-500 dark:text-stone-400">\r
                                    {{ templateForm.get('bodyTopPadding')?.value || 0 }} px\r
                                    @if (\r
                                        (templateForm.get('bodyTopPadding')?.value || 0) === 0 &&\r
                                        getEffectiveContentPaddingTop() > 0\r
                                    ) {\r
                                        <span class="text-indigo-500">\r
                                            ({{ 'smartReport.autoFitLabel' | transloco }}:\r
                                            {{ getEffectiveContentPaddingTop() }} px)\r
                                        </span>\r
                                    }\r
                                </span>\r
                            </div>\r
                            <input\r
                                type="range"\r
                                formControlName="bodyTopPadding"\r
                                min="0"\r
                                max="400"\r
                                step="4"\r
                                class="h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-stone-200 accent-indigo-600 dark:bg-gray-700"\r
                            />\r
                            <p class="mt-1 text-[10px] text-stone-400 dark:text-stone-500">\r
                                {{ 'smartReport.contentTopPaddingHint' | transloco }}\r
                            </p>\r
                        </div>\r
\r
                        <!-- Footer Legend -->\r
                        <div class="border-t border-stone-100 pt-3 dark:border-gray-800">\r
                            <label class="mb-1 block text-xs font-medium text-stone-500 dark:text-stone-400">{{\r
                                'smartReport.footerCompany' | transloco\r
                            }}</label>\r
                            <button\r
                                type="button"\r
                                class="mb-1 flex min-h-16 w-full items-start justify-between gap-2 rounded-lg border border-dashed border-stone-300 bg-white px-3 py-2 text-left text-xs transition-colors hover:border-indigo-300 hover:bg-indigo-50 dark:border-gray-600 dark:bg-gray-950 dark:hover:border-indigo-600 dark:hover:bg-indigo-950/30"\r
                                (click)="openFooterTextDialog()"\r
                            >\r
                                <span\r
                                    class="min-w-0 flex-1 whitespace-pre-wrap line-clamp-3"\r
                                    [class.text-stone-400]="!templateForm.get('legend')?.value"\r
                                    [class.text-stone-600]="templateForm.get('legend')?.value"\r
                                >\r
                                    {{\r
                                        templateForm.get('legend')?.value ||\r
                                            ('visitaGuide.layoutOpenEditor' | transloco)\r
                                    }}\r
                                </span>\r
                                <mat-icon class="!h-4 !w-4 !text-[16px] shrink-0 text-stone-400">edit</mat-icon>\r
                            </button>\r
                            <label class="mb-1 mt-2 block text-[10px] text-stone-400">{{\r
                                'smartReport.footerAlign' | transloco\r
                            }}</label>\r
                            <mat-select formControlName="legendPosition">\r
                                <mat-option value="left">{{ 'smartReport.alignLeft' | transloco }}</mat-option>\r
                                <mat-option value="center">{{ 'smartReport.alignCenter' | transloco }}</mat-option>\r
                                <mat-option value="right">{{ 'smartReport.alignRight' | transloco }}</mat-option>\r
                            </mat-select>\r
                            <label class="mb-1 mt-3 block text-xs font-medium text-stone-500 dark:text-stone-400">{{\r
                                'smartReport.termsAndConditions' | transloco\r
                            }}</label>\r
                            <button\r
                                type="button"\r
                                class="mb-1 flex min-h-20 w-full items-start justify-between gap-2 rounded-lg border border-dashed border-stone-300 bg-white px-3 py-2 text-left text-xs transition-colors hover:border-indigo-300 hover:bg-indigo-50 dark:border-gray-600 dark:bg-gray-950 dark:hover:border-indigo-600 dark:hover:bg-indigo-950/30"\r
                                (click)="openTermsTextDialog()"\r
                            >\r
                                <span\r
                                    class="min-w-0 flex-1 whitespace-pre-wrap line-clamp-4"\r
                                    [class.text-stone-400]="!templateForm.get('termsAndConditions')?.value"\r
                                    [class.text-stone-600]="templateForm.get('termsAndConditions')?.value"\r
                                >\r
                                    {{\r
                                        templateForm.get('termsAndConditions')?.value ||\r
                                            ('visitaGuide.layoutOpenEditor' | transloco)\r
                                    }}\r
                                </span>\r
                                <mat-icon class="!h-4 !w-4 !text-[16px] shrink-0 text-stone-400">edit</mat-icon>\r
                            </button>\r
                            <label class="mb-1 mt-2 block text-[10px] text-stone-400">{{\r
                                'smartReport.footerAlign' | transloco\r
                            }}</label>\r
                            <mat-select formControlName="termsPosition">\r
                                <mat-option value="left">{{ 'smartReport.alignLeft' | transloco }}</mat-option>\r
                                <mat-option value="center">{{ 'smartReport.alignCenter' | transloco }}</mat-option>\r
                                <mat-option value="right">{{ 'smartReport.alignRight' | transloco }}</mat-option>\r
                            </mat-select>\r
                        </div>\r
\r
                        <!-- Pagination -->\r
                        <div class="border-t border-stone-100 pt-3 dark:border-gray-800">\r
                            <div class="mb-2 flex items-center justify-between">\r
                                <label class="text-xs font-medium text-stone-500 dark:text-stone-400">{{\r
                                    'smartReport.pageNumbers' | transloco\r
                                }}</label>\r
                                <label class="relative inline-flex items-center cursor-pointer">\r
                                    <input\r
                                        type="checkbox"\r
                                        formControlName="showPageNumbers"\r
                                        class="sr-only peer"\r
                                    />\r
                                    <div\r
                                        class="peer h-5 w-9 rounded-full bg-stone-200 after:absolute after:left-[2px] after:top-[2px] after:h-4 after:w-4 after:rounded-full after:border after:border-stone-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-indigo-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none dark:bg-gray-700 dark:after:border-gray-600"\r
                                    ></div>\r
                                </label>\r
                            </div>\r
                            @if (templateForm.get('showPageNumbers')?.value) {\r
                                <mat-form-field appearance="outline" class="w-full !text-xs">\r
                                    <mat-label>{{\r
                                        'smartReport.pageNumberPosition' | transloco\r
                                    }}</mat-label>\r
                                    <mat-select formControlName="pageNumberPosition">\r
                                        <mat-option value="top-left">\u2196 Top Left</mat-option>\r
                                        <mat-option value="top-center">\u2191 Top Center</mat-option>\r
                                        <mat-option value="top-right">\u2197 Top Right</mat-option>\r
                                        <mat-option value="bottom-left">\u2199 Bottom Left</mat-option>\r
                                        <mat-option value="bottom-center"\r
                                            >\u2193 Bottom Center</mat-option\r
                                        >\r
                                        <mat-option value="bottom-right"\r
                                            >\u2198 Bottom Right</mat-option\r
                                        >\r
                                    </mat-select>\r
                                </mat-form-field>\r
                            }\r
                        </div>\r
\r
                        <!-- Watermark -->\r
                        <div class="border-t border-stone-100 pt-3 dark:border-gray-800">\r
                            <div class="mb-2 flex items-center justify-between">\r
                                <label class="text-xs font-medium text-stone-500 dark:text-stone-400">{{\r
                                    'smartReport.watermark' | transloco\r
                                }}</label>\r
                                <label class="relative inline-flex items-center cursor-pointer">\r
                                    <input\r
                                        type="checkbox"\r
                                        formControlName="watermarkEnabled"\r
                                        class="sr-only peer"\r
                                    />\r
                                    <div\r
                                        class="peer h-5 w-9 rounded-full bg-stone-200 after:absolute after:left-[2px] after:top-[2px] after:h-4 after:w-4 after:rounded-full after:border after:border-stone-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-indigo-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none dark:bg-gray-700 dark:after:border-gray-600"\r
                                    ></div>\r
                                </label>\r
                            </div>\r
                            @if (templateForm.get('watermarkEnabled')?.value) {\r
                                <div class="space-y-3">\r
                                    <!-- Watermark type -->\r
                                    <div class="flex gap-1">\r
                                        <button\r
                                            type="button"\r
                                            (click)="onWatermarkTypeChange('text')"\r
                                            class="flex-1 rounded-lg border py-2 text-xs transition-colors text-stone-700 dark:text-stone-300"\r
                                            [ngClass]="\r
                                                templateForm.get('watermarkType')?.value === 'text'\r
                                                    ? 'border-indigo-300 bg-indigo-50 dark:border-indigo-600 dark:bg-indigo-950/30'\r
                                                    : 'border-stone-200 dark:border-gray-700'\r
                                            "\r
                                        >\r
                                            {{ 'smartReport.watermarkText' | transloco }}\r
                                        </button>\r
                                        <button\r
                                            type="button"\r
                                            (click)="onWatermarkTypeChange('logo')"\r
                                            class="flex-1 rounded-lg border py-2 text-xs transition-colors text-stone-700 dark:text-stone-300"\r
                                            [ngClass]="\r
                                                templateForm.get('watermarkType')?.value === 'logo'\r
                                                    ? 'border-indigo-300 bg-indigo-50 dark:border-indigo-600 dark:bg-indigo-950/30'\r
                                                    : 'border-stone-200 dark:border-gray-700'\r
                                            "\r
                                        >\r
                                            {{ 'smartReport.watermarkLogo' | transloco }}\r
                                        </button>\r
                                    </div>\r
\r
                                    <!-- Text input (only for text type) -->\r
                                    @if (templateForm.get('watermarkType')?.value === 'text') {\r
                                        <div>\r
                                            <input\r
                                                type="text"\r
                                                formControlName="watermarkText"\r
                                                class="w-full rounded-lg border border-stone-200 px-3 py-2 text-xs dark:border-gray-700 dark:bg-gray-950 dark:text-white"\r
                                                [placeholder]="\r
                                                    'smartReport.watermarkTextPlaceholder'\r
                                                        | transloco\r
                                                "\r
                                                maxlength="100"\r
                                            />\r
                                        </div>\r
                                    }\r
                                    @if (\r
                                        templateForm.get('watermarkType')?.value === 'logo' &&\r
                                        !logoUrl()\r
                                    ) {\r
                                        <p class="text-xs text-amber-500 dark:text-amber-300">\r
                                            {{ 'smartReport.watermarkLogoHint' | transloco }}\r
                                        </p>\r
                                    }\r
\r
                                    <!-- Opacity slider -->\r
                                    <div>\r
                                        <div class="flex items-center justify-between mb-1">\r
                                            <label class="text-xs text-stone-400 dark:text-stone-500">{{\r
                                                'smartReport.watermarkOpacity' | transloco\r
                                            }}</label>\r
                                            <span class="font-mono text-xs text-stone-500 dark:text-stone-400"\r
                                                >{{\r
                                                    templateForm.get('watermarkOpacity')?.value *\r
                                                        100 | number: '1.0-0'\r
                                                }}%</span\r
                                            >\r
                                        </div>\r
                                        <input\r
                                            type="range"\r
                                            formControlName="watermarkOpacity"\r
                                            min="0.01"\r
                                            max="0.5"\r
                                            step="0.01"\r
                                            class="h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-stone-200 accent-indigo-600 dark:bg-gray-700"\r
                                        />\r
                                    </div>\r
\r
                                    <!-- Pattern -->\r
                                    <div>\r
                                            <label class="mb-1 block text-xs text-stone-400 dark:text-stone-500">{{\r
                                            'smartReport.watermarkPattern' | transloco\r
                                        }}</label>\r
                                        <div class="flex gap-1">\r
                                            <button\r
                                                type="button"\r
                                                (click)="\r
                                                    templateForm\r
                                                        .get('watermarkPattern')\r
                                                        ?.setValue('single')\r
                                                "\r
                                                class="flex-1 rounded-lg border py-2 text-xs transition-colors text-stone-700 dark:text-stone-300"\r
                                                [ngClass]="\r
                                                    templateForm.get('watermarkPattern')?.value ===\r
                                                    'single'\r
                                                        ? 'border-indigo-300 bg-indigo-50 dark:border-indigo-600 dark:bg-indigo-950/30'\r
                                                        : 'border-stone-200 dark:border-gray-700'\r
                                                "\r
                                            >\r
                                                {{ 'smartReport.watermarkSingle' | transloco }}\r
                                            </button>\r
                                            <button\r
                                                type="button"\r
                                                (click)="\r
                                                    templateForm\r
                                                        .get('watermarkPattern')\r
                                                        ?.setValue('repeated')\r
                                                "\r
                                                class="flex-1 rounded-lg border py-2 text-xs transition-colors text-stone-700 dark:text-stone-300"\r
                                                [ngClass]="\r
                                                    templateForm.get('watermarkPattern')?.value ===\r
                                                    'repeated'\r
                                                        ? 'border-indigo-300 bg-indigo-50 dark:border-indigo-600 dark:bg-indigo-950/30'\r
                                                        : 'border-stone-200 dark:border-gray-700'\r
                                                "\r
                                            >\r
                                                {{ 'smartReport.watermarkRepeated' | transloco }}\r
                                            </button>\r
                                        </div>\r
                                    </div>\r
                                    <label class="mb-1 block text-xs text-stone-400 dark:text-stone-500">\r
                                        {{ 'smartReport.rotation' | transloco }}\r
                                        ({{ templateForm.get('watermarkRotation')?.value ?? -15 }}\xB0)\r
                                    </label>\r
                                    <input\r
                                        type="range"\r
                                        min="-180"\r
                                        max="180"\r
                                        step="1"\r
                                        formControlName="watermarkRotation"\r
                                        class="h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-stone-200 accent-indigo-600 dark:bg-gray-700"\r
                                    />\r
                                    <p class="text-[10px] text-stone-400 dark:text-stone-500">\r
                                        {{ 'smartReport.dragWatermarkToPosition' | transloco }}\r
                                    </p>\r
                                </div>\r
                            }\r
                        </div>\r
\r
                        <!-- Security Configuration -->\r
                        <div class="space-y-4 rounded-xl border border-stone-100 bg-stone-50 p-4 dark:border-gray-800 dark:bg-gray-950/50">\r
                            <div class="flex items-center justify-between">\r
                                <div class="flex items-center gap-2">\r
                                    <mat-icon class="!h-5 !w-5 !text-[20px] text-stone-400 dark:text-stone-500"\r
                                        >lock</mat-icon\r
                                    >\r
                                    <span class="text-sm font-medium text-stone-700 dark:text-stone-300">{{\r
                                        'smartReport.securityTitle' | transloco\r
                                    }}</span>\r
                                </div>\r
                                <mat-slide-toggle\r
                                    formControlName="securityEnabled"\r
                                    color="primary"\r
                                ></mat-slide-toggle>\r
                            </div>\r
\r
                            @if (templateForm.get('securityEnabled')?.value) {\r
                                <div class="space-y-4 border-t border-stone-200 pt-2 dark:border-gray-800">\r
                                    <!-- Password -->\r
                                    <div>\r
                                            <label class="mb-1 block text-xs text-stone-400 dark:text-stone-500">{{\r
                                            'smartReport.securityPassword' | transloco\r
                                        }}</label>\r
                                        <div class="relative">\r
                                            <input\r
                                                [type]="showPassword ? 'text' : 'password'"\r
                                                formControlName="securityPassword"\r
                                                class="w-full rounded-lg border border-stone-200 px-3 py-2 pr-10 text-sm dark:border-gray-700 dark:bg-gray-950 dark:text-white"\r
                                                [placeholder]="\r
                                                    'smartReport.securityPasswordPlaceholder'\r
                                                        | transloco\r
                                                "\r
                                            />\r
                                            <button\r
                                                type="button"\r
                                                (click)="showPassword = !showPassword"\r
                                                class="absolute right-2 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 dark:text-stone-500 dark:hover:text-stone-300"\r
                                            >\r
                                                <mat-icon class="!w-4 !h-4 !text-[16px]">{{\r
                                                    showPassword ? 'visibility_off' : 'visibility'\r
                                                }}</mat-icon>\r
                                            </button>\r
                                        </div>\r
                                        <p class="mt-1 text-[10px] text-stone-400 dark:text-stone-500">\r
                                            {{ 'smartReport.securityPasswordHint' | transloco }}\r
                                        </p>\r
                                    </div>\r
                                </div>\r
                            }\r
                        </div>\r
\r
                        <!-- Signature Configuration -->\r
                        <div class="space-y-4 rounded-xl border border-stone-100 bg-stone-50 p-4 dark:border-gray-800 dark:bg-gray-950/50">\r
                            <div class="flex items-center justify-between">\r
                                <div class="flex items-center gap-2">\r
                                    <mat-icon class="!h-5 !w-5 !text-[20px] text-stone-400 dark:text-stone-500"\r
                                        >draw</mat-icon\r
                                    >\r
                                    <span class="text-sm font-medium text-stone-700 dark:text-stone-300">{{ 'smartReport.signature' | transloco }}</span>\r
                                </div>\r
                                <mat-slide-toggle\r
                                    formControlName="signatureEnabled"\r
                                    color="primary"\r
                                ></mat-slide-toggle>\r
                            </div>\r
\r
                            @if (templateForm.get('signatureEnabled')?.value) {\r
                                <div class="space-y-4 border-t border-stone-200 pt-2 dark:border-gray-800">\r
                                    @if (templateForm.get('signatureImage')?.value) {\r
                                        <div\r
                                            class="relative group flex justify-center rounded-lg border border-stone-200 bg-white p-2 dark:border-gray-700 dark:bg-gray-900/70"\r
                                        >\r
                                            <img\r
                                                [src]="templateForm.get('signatureImage')?.value"\r
                                                class="h-16 object-contain"\r
                                            />\r
                                            <button\r
                                                type="button"\r
                                                (click)="\r
                                                    templateForm.patchValue({\r
                                                        signatureImage: null,\r
                                                    })\r
                                                "\r
                                                class="absolute right-1 top-1 rounded-full bg-red-50 p-1 text-red-500 opacity-0 transition-opacity hover:bg-red-100 group-hover:opacity-100 dark:bg-red-950/40 dark:text-red-300 dark:hover:bg-red-950/60"\r
                                            >\r
                                                <mat-icon class="!w-4 !h-4 !text-[16px]"\r
                                                    >close</mat-icon\r
                                                >\r
                                            </button>\r
                                        </div>\r
                                        <p class="text-xs text-stone-400 dark:text-stone-500">\r
                                            {{ 'smartReport.dragSignatureToPosition' | transloco }}\r
                                        </p>\r
\r
                                        <!-- Precise width / height inputs -->\r
                                        <div class="grid grid-cols-2 gap-2 pt-1">\r
                                            <label class="block">\r
                                                <span class="text-[10px] text-stone-400 dark:text-stone-500">\r
                                                    {{ 'smartReport.width' | transloco }} (px)\r
                                                </span>\r
                                                <input\r
                                                    type="number"\r
                                                    formControlName="signatureWidth"\r
                                                    min="24"\r
                                                    max="800"\r
                                                    step="1"\r
                                                    class="w-full rounded-md border border-stone-200 px-2 py-1.5 text-xs dark:border-gray-700 dark:bg-gray-950 dark:text-white"\r
                                                />\r
                                            </label>\r
                                            <label class="block">\r
                                                <span class="text-[10px] text-stone-400 dark:text-stone-500">\r
                                                    {{ 'smartReport.height' | transloco }} (px)\r
                                                </span>\r
                                                <input\r
                                                    type="number"\r
                                                    formControlName="signatureHeight"\r
                                                    min="16"\r
                                                    max="600"\r
                                                    step="1"\r
                                                    class="w-full rounded-md border border-stone-200 px-2 py-1.5 text-xs dark:border-gray-700 dark:bg-gray-950 dark:text-white"\r
                                                />\r
                                            </label>\r
                                        </div>\r
                                    } @else {\r
                                        <button\r
                                            type="button"\r
                                            mat-stroked-button\r
                                            color="primary"\r
                                            class="w-full"\r
                                            (click)="openSignatureDialog()"\r
                                        >\r
                                            <mat-icon class="mr-2">edit</mat-icon>\r
                                            {{ 'smartReport.drawSignature' | transloco }}\r
                                        </button>\r
                                    }\r
                                </div>\r
                            }\r
                        </div>\r
                    </form>\r
\r
                    <!-- Every resolvable path, for the rare case the palette is not enough. -->\r
                    <div class="mt-4 border-t border-stone-100 pt-4 dark:border-gray-800">\r
                        <h4 class="mb-2 text-sm font-semibold text-stone-950 dark:text-white">\r
                            {{ 'smartReport.helperData' | transloco }}\r
                        </h4>\r
                        <p class="mb-3 text-xs text-stone-500 dark:text-stone-400">\r
                            {{ 'smartReport.helperDataHint' | transloco }}\r
                        </p>\r
                    @if (helperDataPaths().length === 0) {\r
                        <p class="text-xs italic text-stone-400 dark:text-stone-500">\r
                            {{ 'smartReport.openFromReportViewer' | transloco }}\r
                        </p>\r
                    } @else {\r
                        <div class="max-h-[240px] overflow-y-auto space-y-1 pr-1">\r
                            @for (item of helperDataPaths(); track item.path) {\r
                                @if (item.type === 'leaf') {\r
                                    <div\r
                                        class="group flex items-center gap-2 rounded px-2 py-1.5 text-xs hover:bg-stone-50 dark:hover:bg-gray-800/50"\r
                                    >\r
                                        <code\r
                                            class="min-w-0 flex-1 truncate font-mono text-stone-700 dark:text-stone-300"\r
                                            >{{ item.path }}</code\r
                                        >\r
                                        <span\r
                                            class="max-w-[120px] truncate text-stone-400 dark:text-stone-500"\r
                                            [title]="item.value"\r
                                            >{{ item.value }}</span\r
                                        >\r
                                        <button\r
                                            mat-icon-button\r
                                            (click)="copyPathToClipboard(item.path)"\r
                                            class="!w-6 !h-6 !rounded opacity-0 group-hover:opacity-100 transition-opacity"\r
                                            [matTooltip]="'smartReport.copyPath' | transloco"\r
                                        >\r
                                            <mat-icon class="!text-sm !w-4 !h-4"\r
                                                >content_copy</mat-icon\r
                                            >\r
                                        </button>\r
                                    </div>\r
                                } @else {\r
                                    <div class="group flex items-center gap-2 pt-1.5 pb-0.5">\r
                                        <span class="text-xs font-medium text-stone-500 dark:text-stone-400">{{\r
                                            item.path\r
                                        }}</span>\r
                                        <button\r
                                            mat-icon-button\r
                                            (click)="copyPathToClipboard(item.path)"\r
                                            class="!w-6 !h-6 !rounded opacity-0 group-hover:opacity-100 transition-opacity"\r
                                            [matTooltip]="\r
                                                'smartReport.copyPathForTable' | transloco\r
                                            "\r
                                        >\r
                                            <mat-icon class="!text-sm !w-4 !h-4"\r
                                                >content_copy</mat-icon\r
                                            >\r
                                        </button>\r
                                    </div>\r
                                }\r
                            }\r
                        </div>\r
                    }\r
                    </div>\r
                    </div>\r
                </aside>\r
            }\r
\r
            <!-- ============================== -->\r
            <!-- LEFT RAIL: data, blocks, layers -->\r
            <!-- ============================== -->\r
            <!-- Authoring tools belong to Prepare; Preview and Deliver give the page the full width. -->\r
            <div class="w-full lg:w-[360px] shrink-0" [class.hidden]="builderStep() !== 'prepare'">\r
                <div class="sticky top-[88px] space-y-3">\r
                    <div\r
                        class="flex rounded-xl border border-stone-200/90 bg-white p-1 shadow-sm dark:border-gray-800 dark:bg-gray-900/70"\r
                    >\r
                        @for (\r
                            tab of [\r
                                { key: 'data', labelKey: 'smartReport.railData', icon: 'account_tree' },\r
                                { key: 'blocks', labelKey: 'smartReport.railBlocks', icon: 'widgets' },\r
                                { key: 'layers', labelKey: 'smartReport.railLayers', icon: 'layers' },\r
                            ];\r
                            track tab.key\r
                        ) {\r
                            <button\r
                                (click)="railTab.set($any(tab.key))"\r
                                class="flex flex-1 items-center justify-center gap-1.5 rounded-lg px-2 py-2 text-xs font-medium transition-colors"\r
                                [ngClass]="\r
                                    railTab() === tab.key\r
                                        ? 'bg-indigo-600 text-white'\r
                                        : 'text-stone-500 hover:bg-stone-50 dark:text-stone-400 dark:hover:bg-gray-800/50'\r
                                "\r
                            >\r
                                <mat-icon class="!h-4 !w-4 !text-base">{{ tab.icon }}</mat-icon>\r
                                {{ tab.labelKey | transloco }}\r
                                @if (tab.key === 'layers') {\r
                                    <span class="opacity-70">{{ sections().length }}</span>\r
                                }\r
                            </button>\r
                        }\r
                    </div>\r
\r
                    <!--\r
                        DATA PALETTE\r
                        Nodes come from the backend's introspection, so each one already\r
                        knows its path, a human label and the block type that fits its\r
                        shape. Clicking or dragging a node binds it: no dot notation.\r
                    -->\r
                    @if (railTab() === 'data') {\r
                        <div\r
                            class="mb-3 rounded-2xl border border-stone-200/90 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-900/70"\r
                        >\r
                            <div class="mb-2 flex items-start justify-between gap-2">\r
                                <div>\r
                                    <h3 class="text-sm font-semibold text-stone-950 dark:text-white">\r
                                        {{ 'smartReport.consultSectionTitle' | transloco }}\r
                                    </h3>\r
                                    <p class="text-xs text-stone-400 dark:text-stone-500">\r
                                        {{ 'smartReport.consultSectionHint' | transloco }}\r
                                    </p>\r
                                </div>\r
                                @if (linkedConfigId()) {\r
                                    <button\r
                                        mat-stroked-button\r
                                        type="button"\r
                                        class="!min-h-8 shrink-0 !text-xs"\r
                                        (click)="editLinkedConfiguration()"\r
                                    >\r
                                        {{ 'smartReport.consultEditConfig' | transloco }}\r
                                    </button>\r
                                }\r
                            </div>\r
\r
                            @if (!linkedConfigId()) {\r
                                <p class="text-xs text-amber-700 dark:text-amber-400">\r
                                    {{ 'smartReport.consultLinkConfigFirst' | transloco }}\r
                                </p>\r
                            } @else {\r
                                <ul class="mb-3 space-y-1">\r
                                    @for (step of consultSteps(); track step.sequence) {\r
                                        <li\r
                                            class="rounded-lg border border-stone-100 bg-stone-50/80 px-2.5 py-1.5 text-xs dark:border-gray-800 dark:bg-gray-950/50"\r
                                        >\r
                                            <span class="font-medium text-stone-800 dark:text-stone-200">{{\r
                                                consultStepLabel(step)\r
                                            }}</span>\r
                                            <span class="text-stone-400"> \xB7 results.{{ step.sequence }}</span>\r
                                        </li>\r
                                    }\r
                                </ul>\r
                                <button\r
                                    mat-flat-button\r
                                    color="primary"\r
                                    type="button"\r
                                    class="w-full !min-h-9 !text-sm"\r
                                    (click)="openAddConsultDialog()"\r
                                    [disabled]="isUpdatingConsults()"\r
                                >\r
                                    @if (isUpdatingConsults()) {\r
                                        <mat-spinner diameter="18" class="inline-block"></mat-spinner>\r
                                    } @else {\r
                                        <mat-icon class="mr-1 !text-[18px]">add</mat-icon>\r
                                    }\r
                                    {{ 'smartReport.consultAddButton' | transloco }}\r
                                </button>\r
                                <p class="mt-2 text-[11px] leading-relaxed text-stone-400">\r
                                    {{ 'smartReport.consultSampleHint' | transloco }}\r
                                </p>\r
                            }\r
                        </div>\r
\r
                        <div\r
                            class="rounded-2xl border border-stone-200/90 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900/70"\r
                        >\r
                            <div\r
                                class="border-b border-stone-100 px-4 py-3 dark:border-gray-800"\r
                            >\r
                                <h3 class="text-sm font-semibold text-stone-950 dark:text-white">\r
                                    {{ 'smartReport.dataPalette' | transloco }}\r
                                </h3>\r
                                <p class="text-xs text-stone-400 dark:text-stone-500">\r
                                    {{ 'smartReport.dataPaletteHint' | transloco }}\r
                                </p>\r
                            </div>\r
\r
                            <div\r
                                cdkDropList\r
                                [cdkDropListConnectedTo]="[canvasDropListId, 'report-layers-drop']"\r
                                [cdkDropListSortingDisabled]="true"\r
                                class="max-h-[calc(100vh-260px)] overflow-y-auto p-2"\r
                            >\r
                                @if (isIntrospecting() && dataNodes().length === 0) {\r
                                    <p\r
                                        class="px-2 py-6 text-center text-xs text-stone-400 dark:text-stone-500"\r
                                    >\r
                                        {{ 'smartReport.rendering' | transloco }}\r
                                    </p>\r
                                } @else if (dataNodes().length === 0) {\r
                                    <p\r
                                        class="px-2 py-6 text-center text-xs italic text-stone-400 dark:text-stone-500"\r
                                    >\r
                                        {{ 'smartReport.openFromReportViewer' | transloco }}\r
                                    </p>\r
                                }\r
\r
                                @for (node of dataNodes(); track node.path) {\r
                                    <ng-container\r
                                        [ngTemplateOutlet]="dataNodeRow"\r
                                        [ngTemplateOutletContext]="{ node: node, depth: 0 }"\r
                                    ></ng-container>\r
                                }\r
\r
                                @if (batchNodes().length > 0) {\r
                                    <p\r
                                        class="mb-1 mt-3 px-2 text-[11px] font-semibold uppercase tracking-wide text-stone-400 dark:text-stone-500"\r
                                    >\r
                                        {{ 'smartReport.batchFields' | transloco }}\r
                                    </p>\r
                                    @for (node of batchNodes(); track node.path) {\r
                                        <ng-container\r
                                            [ngTemplateOutlet]="dataNodeRow"\r
                                            [ngTemplateOutletContext]="{ node: node, depth: 0 }"\r
                                        ></ng-container>\r
                                    }\r
                                }\r
                            </div>\r
                        </div>\r
                    }\r
\r
                <!-- Add Sections toolbar -->\r
                @if (railTab() === 'blocks') {\r
                <div class="rounded-2xl border border-stone-200/90 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-900/70">\r
                    <h3 class="mb-3 text-sm font-semibold text-stone-950 dark:text-white">\r
                        {{ 'smartReport.addSections' | transloco }}\r
                    </h3>\r
                    @for (group of sectionGroups; track group.key) {\r
                        <div class="mb-3 last:mb-0">\r
                            <p\r
                                class="mb-1.5 text-[11px] font-semibold uppercase tracking-wide text-stone-400 dark:text-stone-500"\r
                            >\r
                                {{ group.labelKey | transloco }}\r
                            </p>\r
                            <div\r
                                cdkDropList\r
                                [cdkDropListConnectedTo]="[canvasDropListId, 'report-layers-drop']"\r
                                [cdkDropListSortingDisabled]="true"\r
                                class="flex flex-wrap gap-2"\r
                            >\r
                                @for (\r
                                    sectionType of sectionTypesForGroup(group.key);\r
                                    track sectionType.type\r
                                ) {\r
                                    <button\r
                                        cdkDrag\r
                                        [cdkDragData]="sectionType.type"\r
                                        (click)="addSection(sectionType.type)"\r
                                        class="inline-flex items-center gap-1.5 rounded-lg border border-stone-200 px-3 py-2 text-sm text-stone-700 transition-colors hover:border-indigo-300 hover:bg-indigo-50 dark:border-gray-700 dark:text-stone-300 dark:hover:border-indigo-600 dark:hover:bg-indigo-950/30"\r
                                    >\r
                                        <mat-icon\r
                                            class="!text-base text-stone-400 dark:text-stone-500"\r
                                            >{{ sectionType.icon }}</mat-icon\r
                                        >\r
                                        {{ sectionType.labelKey | transloco }}\r
                                    </button>\r
                                }\r
                            </div>\r
                        </div>\r
                    }\r
                </div>\r
                }\r
\r
                <!-- Section List (drag & drop) -->\r
                @if (railTab() === 'layers') {\r
                <div class="rounded-2xl border border-stone-200/90 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900/70">\r
                    <div\r
                        class="flex items-center justify-between border-b border-stone-100 px-5 py-3 dark:border-gray-800"\r
                    >\r
                        <div>\r
                            <h3 class="text-sm font-semibold text-stone-950 dark:text-white">\r
                                {{ 'smartReport.reportLayout' | transloco }}\r
                            </h3>\r
                            <p class="text-xs text-stone-400 dark:text-stone-500">\r
                                {{ 'smartReport.dragToReorder' | transloco }}\r
                            </p>\r
                        </div>\r
                        <span class="text-xs font-medium text-stone-400 dark:text-stone-500"\r
                            >{{ sections().length }} {{ 'smartReport.sections' | transloco }}</span\r
                        >\r
                    </div>\r
\r
                    <div\r
                        id="report-layers-drop"\r
                        cdkDropList\r
                        (cdkDropListDropped)="onDrop($event)"\r
                        class="max-h-[calc(100vh-300px)] overflow-y-auto p-3 min-h-[200px]"\r
                    >\r
                        @if (sections().length === 0) {\r
                            <div\r
                                class="flex h-40 flex-col items-center justify-center text-stone-300 dark:text-stone-600"\r
                            >\r
                                <mat-icon class="!text-4xl !w-10 !h-10 mb-2">add_box</mat-icon>\r
                                <p class="text-sm">\r
                                    {{ 'smartReport.addSectionsFromAbove' | transloco }}\r
                                </p>\r
                            </div>\r
                        }\r
\r
                        @for (section of sections(); track section.id) {\r
                            <div\r
                                cdkDrag\r
                                class="group mb-2 flex cursor-pointer items-center gap-2 rounded-lg border border-stone-200 bg-white px-3 py-2.5 transition-colors hover:border-indigo-300 dark:border-gray-700 dark:bg-gray-900/70 dark:hover:border-indigo-600"\r
                                [ngClass]="{\r
                                    'bg-indigo-50 ring-2 ring-indigo-500 dark:bg-indigo-950/30':\r
                                        currentSelectedSection()?.id === section.id,\r
                                }"\r
                                (click)="selectSection(section)"\r
                            >\r
                                <div\r
                                    cdkDragHandle\r
                                    class="flex h-6 w-6 shrink-0 cursor-grab items-center justify-center rounded text-stone-300 hover:text-stone-500 dark:text-stone-600 dark:hover:text-stone-400"\r
                                >\r
                                    <mat-icon class="!text-sm">drag_indicator</mat-icon>\r
                                </div>\r
\r
                                <div\r
                                    class="shrink-0 w-7 h-7 rounded-md flex items-center justify-center"\r
                                    [style.background]="\r
                                        templateForm.get('primaryColor')?.value + '15'\r
                                    "\r
                                >\r
                                    <mat-icon\r
                                        [style.color]="templateForm.get('primaryColor')?.value"\r
                                        class="!text-base"\r
                                        >{{ getSectionIcon(section.type) }}</mat-icon\r
                                    >\r
                                </div>\r
\r
                                <div class="min-w-0 flex-1">\r
                                    <p class="truncate text-sm font-medium text-stone-800 dark:text-stone-200">\r
                                        {{ getSectionLabel(section.type) }}\r
                                    </p>\r
                                    <p class="truncate text-xs text-stone-400 dark:text-stone-500">\r
                                        @if (section.label) {\r
                                            {{ section.label }}\r
                                        } @else if (section.staticContent) {\r
                                            {{ section.staticContent | slice: 0 : 30\r
                                            }}{{ section.staticContent.length > 30 ? '...' : '' }}\r
                                        } @else if (section.dataPath) {\r
                                            {{ section.dataPath }}\r
                                        } @else {\r
                                            {{\r
                                                'smartReport.sectionNumber'\r
                                                    | transloco: { num: section.order + 1 }\r
                                            }}\r
                                        }\r
                                    </p>\r
                                </div>\r
\r
                                <div\r
                                    class="shrink-0 flex items-center gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity"\r
                                >\r
                                    <button\r
                                        mat-icon-button\r
                                        (click)="\r
                                            duplicateSection(section); $event.stopPropagation()\r
                                        "\r
                                        [matTooltip]="'smartReport.duplicate' | transloco"\r
                                        class="!w-7 !h-7"\r
                                    >\r
                                        <mat-icon class="!text-sm text-stone-400 dark:text-stone-500"\r
                                            >content_copy</mat-icon\r
                                        >\r
                                    </button>\r
                                    <button\r
                                        mat-icon-button\r
                                        (click)="\r
                                            deleteSection(section.id); $event.stopPropagation()\r
                                        "\r
                                        [matTooltip]="'smartReport.delete' | transloco"\r
                                        class="!w-7 !h-7"\r
                                    >\r
                                        <mat-icon class="!text-sm text-red-400">delete</mat-icon>\r
                                    </button>\r
                                </div>\r
                            </div>\r
                        }\r
                    </div>\r
                </div>\r
                }\r
                </div>\r
            </div>\r
\r
            <!-- ============================== -->\r
            <!-- CENTRE: page canvas            -->\r
            <!-- ============================== -->\r
            <div class="flex-1 min-w-0">\r
                <div class="sticky top-20">\r
                    <div\r
                        class="flex flex-wrap items-center justify-between gap-2 mb-3"\r
                        [class.hidden]="builderStep() === 'deliver'"\r
                    >\r
                        <h3 class="text-sm font-semibold text-stone-500 dark:text-stone-400">\r
                            {{ 'smartReport.preview' | transloco }}\r
                        </h3>\r
\r
                        <div class="flex items-center gap-2">\r
                            @if (previewMode() === 'exact' && isRenderingExact()) {\r
                                <span\r
                                    class="text-xs text-stone-400 dark:text-stone-500"\r
                                    >{{ 'smartReport.rendering' | transloco }}</span\r
                                >\r
                            }\r
\r
                            <!--\r
                                Edit/Exact is only for Prepare. On Preview the step itself\r
                                locks Exact so the printed document cannot be swapped away.\r
                            -->\r
                            @if (builderStep() === 'prepare') {\r
                                <div\r
                                    class="inline-flex rounded-lg border border-stone-200 p-0.5 dark:border-gray-700"\r
                                >\r
                                    <button\r
                                        (click)="setPreviewMode('edit')"\r
                                        class="rounded-md px-2.5 py-1 text-xs font-medium transition-colors"\r
                                        [ngClass]="\r
                                            previewMode() === 'edit'\r
                                                ? 'bg-indigo-600 text-white'\r
                                                : 'text-stone-500 hover:text-stone-800 dark:text-stone-400'\r
                                        "\r
                                    >\r
                                        {{ 'smartReport.previewModeEdit' | transloco }}\r
                                    </button>\r
                                    <button\r
                                        (click)="setPreviewMode('exact')"\r
                                        class="rounded-md px-2.5 py-1 text-xs font-medium transition-colors"\r
                                        [ngClass]="\r
                                            previewMode() === 'exact'\r
                                                ? 'bg-indigo-600 text-white'\r
                                                : 'text-stone-500 hover:text-stone-800 dark:text-stone-400'\r
                                        "\r
                                    >\r
                                        {{ 'smartReport.previewModeExact' | transloco }}\r
                                    </button>\r
                                </div>\r
                            } @else if (builderStep() === 'preview') {\r
                                <span\r
                                    class="rounded-md bg-indigo-50 px-2.5 py-1 text-xs font-medium text-indigo-700 dark:bg-indigo-950/40 dark:text-indigo-300"\r
                                >\r
                                    {{ 'smartReport.previewModeExact' | transloco }}\r
                                </span>\r
                            }\r
                        </div>\r
                    </div>\r
\r
                    @if (previewMode() === 'edit' && builderStep() === 'prepare') {\r
                        <p class="mb-3 text-xs text-stone-400 dark:text-stone-500">\r
                            {{ 'smartReport.editModeHint' | transloco }}\r
                        </p>\r
                    }\r
\r
                    <!--\r
                        DELIVER\r
                        Sending reuses the sample-send endpoint, and the history is read\r
                        from \`SmartReport.emailHistory\` so this step reports what the batch\r
                        flow actually recorded rather than keeping its own log.\r
                    -->\r
                    @if (builderStep() === 'deliver') {\r
                        <div class="space-y-4">\r
                            <div\r
                                class="rounded-2xl border border-stone-200/90 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900/70"\r
                            >\r
                                <h3 class="text-sm font-semibold text-stone-950 dark:text-white">\r
                                    {{ 'smartReport.deliverTitle' | transloco }}\r
                                </h3>\r
                                <p class="mt-1 text-sm text-stone-500 dark:text-stone-400">\r
                                    {{ 'smartReport.deliverHint' | transloco }}\r
                                </p>\r
\r
                                @if (!templateId()) {\r
                                    <p\r
                                        class="mt-4 rounded-xl border border-dashed border-stone-200 px-4 py-3 text-sm text-stone-500 dark:border-gray-700 dark:text-stone-400"\r
                                    >\r
                                        {{ 'smartReport.saveTemplateFirst' | transloco }}\r
                                    </p>\r
                                }\r
\r
                                <div class="mt-4 flex flex-wrap gap-3">\r
                                    <button\r
                                        mat-flat-button\r
                                        (click)="sendSample()"\r
                                        [disabled]="\r
                                            !templateId() || isSendingSample() || isDownloadingSample()\r
                                        "\r
                                        class="!rounded-xl !bg-indigo-600 !text-white"\r
                                    >\r
                                        <span class="inline-flex items-center gap-2">\r
                                            @if (isSendingSample()) {\r
                                                <mat-icon class="animate-spin !text-lg">refresh</mat-icon>\r
                                                {{ 'smartReport.sendingSample' | transloco }}\r
                                            } @else {\r
                                                <mat-icon class="!text-lg">send</mat-icon>\r
                                                {{ 'smartReport.sendSample' | transloco }}\r
                                            }\r
                                        </span>\r
                                    </button>\r
                                    <button\r
                                        mat-stroked-button\r
                                        (click)="downloadSamplePdf()"\r
                                        [disabled]="\r
                                            !templateId() || isDownloadingSample() || isSendingSample()\r
                                        "\r
                                        class="!rounded-xl"\r
                                    >\r
                                        <span class="inline-flex items-center gap-2">\r
                                            @if (isDownloadingSample()) {\r
                                                <mat-icon class="animate-spin !text-lg">refresh</mat-icon>\r
                                                {{ 'smartReport.downloadingSample' | transloco }}\r
                                            } @else {\r
                                                <mat-icon class="!text-lg">file_download</mat-icon>\r
                                                {{ 'smartReport.downloadSample' | transloco }}\r
                                            }\r
                                        </span>\r
                                    </button>\r
                                </div>\r
                            </div>\r
\r
                            <div\r
                                class="rounded-2xl border border-stone-200/90 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900/70"\r
                            >\r
                                <div\r
                                    class="flex items-center justify-between border-b border-stone-100 px-5 py-3 dark:border-gray-800"\r
                                >\r
                                    <h3 class="text-sm font-semibold text-stone-950 dark:text-white">\r
                                        {{ 'smartReport.deliveryHistory' | transloco }}\r
                                    </h3>\r
                                    @if (isLoadingDeliveries()) {\r
                                        <span class="text-xs text-stone-400 dark:text-stone-500">{{\r
                                            'smartReport.rendering' | transloco\r
                                        }}</span>\r
                                    }\r
                                </div>\r
\r
                                @if (deliveries().length === 0) {\r
                                    <p\r
                                        class="px-5 py-8 text-center text-sm italic text-stone-400 dark:text-stone-500"\r
                                    >\r
                                        {{ 'smartReport.noDeliveries' | transloco }}\r
                                    </p>\r
                                } @else {\r
                                    <div class="divide-y divide-stone-100 dark:divide-gray-800">\r
                                        @for (report of deliveries(); track report._id) {\r
                                            <div class="flex items-center gap-3 px-5 py-3">\r
                                                <mat-icon\r
                                                    class="!h-5 !w-5 shrink-0 !text-xl text-stone-300 dark:text-gray-700"\r
                                                    >description</mat-icon\r
                                                >\r
                                                <div class="min-w-0 flex-1">\r
                                                    <p\r
                                                        class="truncate text-sm font-medium text-stone-800 dark:text-stone-200"\r
                                                    >\r
                                                        {{\r
                                                            report.name ||\r
                                                                ('smartReport.untitledReport' | transloco)\r
                                                        }}\r
                                                    </p>\r
                                                    <p class="text-xs text-stone-400 dark:text-stone-500">\r
                                                        {{\r
                                                            (report.emailHistory ?? []).length\r
                                                        }}\r
                                                        {{ 'smartReport.emailsSent' | transloco }}\r
                                                    </p>\r
                                                </div>\r
                                                <span\r
                                                    class="shrink-0 rounded-full px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide"\r
                                                    [ngClass]="statusClasses(report.status)"\r
                                                    >{{ report.status }}</span\r
                                                >\r
                                            </div>\r
                                        }\r
                                    </div>\r
                                }\r
\r
                                @if (deliveryHistory().length > 0) {\r
                                    <div\r
                                        class="border-t border-stone-100 px-5 py-3 dark:border-gray-800"\r
                                    >\r
                                        @for (\r
                                            entry of deliveryHistory();\r
                                            track entry.sentAt + entry.subject\r
                                        ) {\r
                                            <div class="flex items-center gap-3 py-1.5">\r
                                                <span\r
                                                    class="shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase"\r
                                                    [ngClass]="statusClasses(entry.status)"\r
                                                    >{{ entry.status }}</span\r
                                                >\r
                                                <span\r
                                                    class="min-w-0 flex-1 truncate text-xs text-stone-600 dark:text-stone-300"\r
                                                    >{{ entry.recipients.join(', ') }}</span\r
                                                >\r
                                                <span\r
                                                    class="shrink-0 text-xs text-stone-400 dark:text-stone-500"\r
                                                    >{{ entry.sentAt | date: 'short' }}</span\r
                                                >\r
                                            </div>\r
                                        }\r
                                    </div>\r
                                }\r
                            </div>\r
                        </div>\r
                    }\r
\r
                    <!-- AI Layout Assistant (Relocated and Upgraded) -->\r
                    @if (builderStep() === 'prepare') {\r
                    <div class="mb-4 rounded-2xl border border-indigo-100 bg-indigo-50/20 p-4 shadow-sm dark:border-indigo-950/30 dark:bg-indigo-950/10">\r
                        <div class="mb-3 flex items-center justify-between">\r
                            <div class="flex items-center gap-2">\r
                                <span class="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-600 text-white shadow-md shadow-indigo-200 dark:shadow-none">\r
                                    <mat-icon class="!text-sm !w-4 !h-4">auto_awesome</mat-icon>\r
                                </span>\r
                                <div>\r
                                    <h3 class="text-sm font-semibold text-stone-950 dark:text-white">\r
                                        {{ 'smartReport.aiLayoutAssistant' | transloco }}\r
                                    </h3>\r
                                    <p class="text-[10px] text-stone-500 dark:text-stone-400">\r
                                        {{ 'smartReport.aiLayoutAssistantHint' | transloco }}\r
                                    </p>\r
                                </div>\r
                            </div>\r
                        </div>\r
\r
                        <div class="space-y-3">\r
                            <!-- Segmented Mode Control -->\r
                            <div class="flex gap-1 rounded-xl bg-stone-100 p-1 dark:bg-gray-850">\r
                                <button\r
                                    type="button"\r
                                    (click)="aiMode.set('create')"\r
                                    class="flex-1 rounded-lg py-1 text-center text-xs font-medium transition-colors"\r
                                    [ngClass]="aiMode() === 'create' ? 'bg-white text-stone-900 shadow-sm dark:bg-gray-900 dark:text-white' : 'text-stone-500 hover:text-stone-700 dark:text-stone-400 dark:hover:text-stone-300'"\r
                                >\r
                                    Rebuild All\r
                                </button>\r
                                <button\r
                                    type="button"\r
                                    (click)="aiMode.set('edit')"\r
                                    class="flex-1 rounded-lg py-1 text-center text-xs font-medium transition-colors"\r
                                    [ngClass]="aiMode() === 'edit' ? 'bg-white text-stone-900 shadow-sm dark:bg-gray-900 dark:text-white' : 'text-stone-500 hover:text-stone-700 dark:text-stone-400 dark:hover:text-stone-300'"\r
                                >\r
                                    Edit Section\r
                                </button>\r
                                <button\r
                                    type="button"\r
                                    (click)="aiMode.set('append')"\r
                                    class="flex-1 rounded-lg py-1 text-center text-xs font-medium transition-colors"\r
                                    [ngClass]="aiMode() === 'append' ? 'bg-white text-stone-900 shadow-sm dark:bg-gray-900 dark:text-white' : 'text-stone-500 hover:text-stone-700 dark:text-stone-400 dark:hover:text-stone-300'"\r
                                >\r
                                    Add Section\r
                                </button>\r
                            </div>\r
\r
                            <!-- Selected Section Badge for Edit Mode -->\r
                            @if (aiMode() === 'edit') {\r
                                <div class="rounded-lg border px-3 py-2 text-xs"\r
                                     [ngClass]="currentSelectedSection() ? 'border-indigo-100 bg-indigo-50/40 text-indigo-900 dark:border-indigo-950/20 dark:bg-indigo-950/20 dark:text-indigo-200' : 'border-amber-100 bg-amber-50/40 text-amber-900 dark:border-amber-950/20 dark:bg-amber-950/20 dark:text-amber-200'"\r
                                >\r
                                    @if (currentSelectedSection(); as sel) {\r
                                        <span class="font-medium">Selected Section:</span> {{ getSectionLabel(sel.type) }} (Order: {{ sel.order + 1 }})\r
                                    } @else {\r
                                        <span class="font-medium">\u26A0\uFE0F No section selected:</span> Click on a section in the preview or left list to modify it.\r
                                    }\r
                                </div>\r
                            }\r
\r
                            <textarea\r
                                #aiPromptInput\r
                                class="w-full resize-none rounded-xl border border-stone-200 bg-white px-3 py-2 text-xs text-stone-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-950 dark:text-stone-300"\r
                                rows="3"\r
                                [placeholder]="\r
                                    aiMode() === 'edit'\r
                                        ? 'e.g., Center this header text and make it color #4F46E5'\r
                                        : aiMode() === 'append'\r
                                        ? 'e.g., Add a divider and a field section showing status'\r
                                        : ('smartReport.aiPromptPlaceholder' | transloco)\r
                                "\r
                                [disabled]="aiMode() === 'edit' && !currentSelectedSection()"\r
                            ></textarea>\r
\r
                            <div class="flex items-center justify-between">\r
                                <button\r
                                    type="button"\r
                                    (click)="\r
                                        aiPromptInput.value =\r
                                            aiMode() === 'edit'\r
                                                ? 'Center this text and make it color #4F46E5'\r
                                                : aiMode() === 'append'\r
                                                ? 'Add a divider line and a spacer'\r
                                                : 'Title at the top, divider, plate number, and details'\r
                                    "\r
                                    [disabled]="aiMode() === 'edit' && !currentSelectedSection()"\r
                                    class="text-xs text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 disabled:opacity-50"\r
                                >\r
                                    {{ 'smartReport.useSamplePrompt' | transloco }}\r
                                </button>\r
\r
                                <button\r
                                    mat-flat-button\r
                                    (click)="generateLayoutWithAI(aiPromptInput.value)"\r
                                    [disabled]="isGeneratingAI() || !aiPromptInput.value.trim() || (aiMode() === 'edit' && !currentSelectedSection())"\r
                                    class="!rounded-xl !bg-indigo-600 !text-white"\r
                                >\r
                                    <span class="inline-flex items-center gap-2">\r
                                        @if (isGeneratingAI()) {\r
                                            <mat-icon class="animate-spin !text-lg">refresh</mat-icon>\r
                                            {{ 'smartReport.generatingLayout' | transloco }}\r
                                        } @else {\r
                                            <mat-icon class="!text-lg">auto_awesome</mat-icon>\r
                                            {{ 'smartReport.generateLayout' | transloco }}\r
                                        }\r
                                    </span>\r
                                </button>\r
                            </div>\r
                        </div>\r
                    </div>\r
                    }\r
\r
                    <!-- Section Inspector (free-floating, draggable panel) -->\r
                    @if (builderStep() === 'prepare' && currentSelectedSection(); as sel) {\r
                        <div\r
                            cdkDrag\r
                            class="absolute right-2 top-12 z-40 flex max-h-[min(70vh,560px)] w-80 flex-col rounded-xl border border-indigo-200 bg-white shadow-2xl dark:border-indigo-800 dark:bg-gray-900"\r
                        >\r
                            <!-- Drag handle / title bar -->\r
                            <div\r
                                cdkDragHandle\r
                                class="flex cursor-grab select-none items-center justify-between rounded-t-xl border-b border-stone-100 bg-stone-50 px-3 py-2 active:cursor-grabbing dark:border-gray-800 dark:bg-gray-950/50"\r
                            >\r
                                <div class="flex min-w-0 items-center gap-2">\r
                                    <mat-icon\r
                                        class="!h-4 !w-4 shrink-0 !text-base text-stone-400 dark:text-stone-500"\r
                                        >drag_indicator</mat-icon\r
                                    >\r
                                    <h3 class="truncate text-sm font-semibold text-stone-950 dark:text-white">\r
                                        {{ 'smartReport.edit' | transloco }}\r
                                        {{ getSectionLabel(sel.type) }}\r
                                    </h3>\r
                                </div>\r
                                <button\r
                                    mat-icon-button\r
                                    (click)="selectedSection.set(null)"\r
                                    class="!w-7 !h-7 shrink-0"\r
                                >\r
                                    <mat-icon class="!text-base text-stone-400 dark:text-stone-500">close</mat-icon>\r
                                </button>\r
                            </div>\r
\r
                            <div class="overflow-y-auto p-4 space-y-4">\r
                                <!-- HEADER EDITOR -->\r
                                @if (sel.type === 'header') {\r
                                    <div>\r
                                        <label\r
                                            class="mb-1 block text-xs font-medium text-stone-500 dark:text-stone-400"\r
                                            >{{ 'smartReport.titleText' | transloco }}</label\r
                                        >\r
                                        <input\r
                                            type="text"\r
                                            [value]="sel.staticContent || ''"\r
                                            (input)="\r
                                                updateSection(sel.id, {\r
                                                    staticContent: $any($event.target).value,\r
                                                    label: $any($event.target).value,\r
                                                })\r
                                            "\r
                                            class="w-full rounded-lg border border-stone-200 px-3 py-2 text-sm dark:border-gray-700 dark:bg-gray-950 dark:text-white"\r
                                            [placeholder]="'smartReport.reportTitle' | transloco"\r
                                        />\r
                                    </div>\r
                                }\r
\r
                                <!-- TEXT EDITOR -->\r
                                @if (sel.type === 'text') {\r
                                    <div>\r
                                        <label\r
                                            class="mb-1 block text-xs font-medium text-stone-500 dark:text-stone-400"\r
                                            >{{ 'smartReport.content' | transloco }}</label\r
                                        >\r
                                        <textarea\r
                                            [value]="sel.staticContent || ''"\r
                                            (input)="\r
                                                updateSection(sel.id, {\r
                                                    staticContent: $any($event.target).value,\r
                                                })\r
                                            "\r
                                            class="w-full rounded-lg border border-stone-200 px-3 py-2 text-sm dark:border-gray-700 dark:bg-gray-950 dark:text-white"\r
                                            rows="4"\r
                                            [placeholder]="\r
                                                'smartReport.enterTextContent' | transloco\r
                                            "\r
                                        ></textarea>\r
                                    </div>\r
                                }\r
\r
                                <!-- FIELD EDITOR -->\r
                                @if (sel.type === 'field') {\r
                                    <div>\r
                                        <label\r
                                            class="mb-1 block text-xs font-medium text-stone-500 dark:text-stone-400"\r
                                            >{{ 'smartReport.label' | transloco }}</label\r
                                        >\r
                                        <input\r
                                            type="text"\r
                                            [value]="sel.label || ''"\r
                                            (input)="\r
                                                updateSection(sel.id, {\r
                                                    label: $any($event.target).value,\r
                                                })\r
                                            "\r
                                            class="w-full rounded-lg border border-stone-200 px-3 py-2 text-sm dark:border-gray-700 dark:bg-gray-950 dark:text-white"\r
                                            [placeholder]="'smartReport.fieldLabel' | transloco"\r
                                        />\r
                                    </div>\r
                                    <ng-container\r
                                        [ngTemplateOutlet]="dataBinding"\r
                                        [ngTemplateOutletContext]="{\r
                                            sel: sel,\r
                                            hintKey: 'smartReport.dotSeparatedPath',\r
                                        }"\r
                                    ></ng-container>\r
                                }\r
\r
                                <!-- TABLE EDITOR -->\r
                                @if (sel.type === 'table') {\r
                                    <div>\r
                                        <label\r
                                            class="mb-1 block text-xs font-medium text-stone-500 dark:text-stone-400"\r
                                            >{{ 'smartReport.tableTitle' | transloco }}</label\r
                                        >\r
                                        <input\r
                                            type="text"\r
                                            [value]="sel.label || ''"\r
                                            (input)="\r
                                                updateSection(sel.id, {\r
                                                    label: $any($event.target).value,\r
                                                })\r
                                            "\r
                                            class="w-full rounded-lg border border-stone-200 px-3 py-2 text-sm dark:border-gray-700 dark:bg-gray-950 dark:text-white"\r
                                            [placeholder]="'smartReport.tableLabel' | transloco"\r
                                        />\r
                                    </div>\r
                                    <ng-container\r
                                        [ngTemplateOutlet]="dataBinding"\r
                                        [ngTemplateOutletContext]="{\r
                                            sel: sel,\r
                                            hintKey: 'smartReport.pathToObject',\r
                                        }"\r
                                    ></ng-container>\r
                                    <ng-container [ngTemplateOutlet]="paramControls" [ngTemplateOutletContext]="{ sel: sel }"></ng-container>\r
                                }\r
\r
                                <!-- IMAGE EDITOR -->\r
                                @if (sel.type === 'image') {\r
                                    <div>\r
                                        <label\r
                                            class="mb-1 block text-xs font-medium text-stone-500 dark:text-stone-400"\r
                                            >{{ 'smartReport.imageUrl' | transloco }}</label\r
                                        >\r
                                        <input\r
                                            type="text"\r
                                            [value]="sel.staticContent || ''"\r
                                            (input)="\r
                                                updateSection(sel.id, {\r
                                                    staticContent: $any($event.target).value,\r
                                                })\r
                                            "\r
                                            class="w-full rounded-lg border border-stone-200 px-3 py-2 font-mono text-sm dark:border-gray-700 dark:bg-gray-950 dark:text-white"\r
                                            placeholder="https://example.com/logo.png"\r
                                        />\r
                                    </div>\r
                                    <div>\r
                                        <label\r
                                            class="mb-1 block text-xs font-medium text-stone-500 dark:text-stone-400"\r
                                            >{{ 'smartReport.altText' | transloco }}</label\r
                                        >\r
                                        <input\r
                                            type="text"\r
                                            [value]="sel.label || ''"\r
                                            (input)="\r
                                                updateSection(sel.id, {\r
                                                    label: $any($event.target).value,\r
                                                })\r
                                            "\r
                                            class="w-full rounded-lg border border-stone-200 px-3 py-2 text-sm dark:border-gray-700 dark:bg-gray-950 dark:text-white"\r
                                            [placeholder]="'smartReport.companyLogo' | transloco"\r
                                        />\r
                                    </div>\r
                                }\r
\r
                                <!-- SPACER EDITOR -->\r
                                @if (sel.type === 'spacer') {\r
                                    <div>\r
                                        <label\r
                                            class="mb-1 block text-xs font-medium text-stone-500 dark:text-stone-400"\r
                                            >{{ 'smartReport.heightPx' | transloco }}</label\r
                                        >\r
                                        <input\r
                                            type="number"\r
                                            [value]="sel.style?.padding || 16"\r
                                            (input)="\r
                                                updateSectionStyle(\r
                                                    'padding',\r
                                                    $any($event.target).value\r
                                                )\r
                                            "\r
                                            class="w-full rounded-lg border border-stone-200 px-3 py-2 text-sm dark:border-gray-700 dark:bg-gray-950 dark:text-white"\r
                                            min="4"\r
                                            max="200"\r
                                        />\r
                                    </div>\r
                                }\r
\r
                                <!-- DIVIDER EDITOR -->\r
                                @if (sel.type === 'divider') {\r
                                    <div>\r
                                        <label\r
                                            class="mb-1 block text-xs font-medium text-stone-500 dark:text-stone-400"\r
                                            >{{ 'smartReport.color' | transloco }}</label\r
                                        >\r
                                        <input\r
                                            type="color"\r
                                            [value]="sel.style?.color || '#E5E7EB'"\r
                                            (input)="updateStyleColor($any($event.target).value)"\r
                                            class="h-9 w-9 cursor-pointer rounded-lg border border-stone-200 dark:border-gray-700"\r
                                        />\r
                                    </div>\r
                                    <div class="mt-3">\r
                                        <label\r
                                            class="mb-1 block text-xs font-medium text-stone-500 dark:text-stone-400"\r
                                            >{{ 'visitaGuide.layoutLineWidth' | transloco }}</label\r
                                        >\r
                                        <div class="flex items-center gap-2">\r
                                            <input\r
                                                type="range"\r
                                                min="1"\r
                                                max="12"\r
                                                step="1"\r
                                                class="flex-1 accent-indigo-600"\r
                                                [value]="sel.rowLineWidth ?? 1"\r
                                                (input)="\r
                                                    updateSection(sel.id, {\r
                                                        rowLineWidth: +$any($event.target).value,\r
                                                    })\r
                                                "\r
                                            />\r
                                            <span\r
                                                class="w-8 shrink-0 text-center text-xs font-semibold text-stone-700 dark:text-stone-300"\r
                                                >{{ sel.rowLineWidth ?? 1 }}px</span\r
                                            >\r
                                        </div>\r
                                    </div>\r
                                    <div class="mt-3">\r
                                        <label\r
                                            class="mb-1 block text-xs font-medium text-stone-500 dark:text-stone-400"\r
                                            >{{ 'smartReport.lineStyle' | transloco }}</label\r
                                        >\r
                                        <select\r
                                            class="w-full rounded-lg border border-stone-200 px-3 py-2 text-sm dark:border-gray-700 dark:bg-gray-950 dark:text-white"\r
                                            [value]="sel.rowLineStyle || 'solid'"\r
                                            (change)="\r
                                                updateSection(sel.id, {\r
                                                    rowLineStyle: $any($event.target).value,\r
                                                })\r
                                            "\r
                                        >\r
                                            <option value="solid">{{ 'smartReport.lineStyleSolid' | transloco }}</option>\r
                                            <option value="dashed">{{ 'smartReport.lineStyleDashed' | transloco }}</option>\r
                                            <option value="dotted">{{ 'smartReport.lineStyleDotted' | transloco }}</option>\r
                                        </select>\r
                                    </div>\r
                                    <div class="mt-3">\r
                                        <label\r
                                            class="mb-1 block text-xs font-medium text-stone-500 dark:text-stone-400"\r
                                            >{{ 'smartReport.dividerSpacing' | transloco }}</label\r
                                        >\r
                                        <div class="flex items-center gap-2">\r
                                            <input\r
                                                type="range"\r
                                                min="0"\r
                                                max="32"\r
                                                step="2"\r
                                                class="flex-1 accent-indigo-600"\r
                                                [value]="sel.style?.padding ?? 4"\r
                                                (input)="updateDividerSpacing(sel, $any($event.target).value)"\r
                                            />\r
                                            <span\r
                                                class="w-8 shrink-0 text-center text-xs font-semibold text-stone-700 dark:text-stone-300"\r
                                                >{{ sel.style?.padding ?? 4 }}px</span\r
                                            >\r
                                        </div>\r
                                    </div>\r
                                }\r
\r
                                @if (sel.type === 'shape') {\r
                                    <div>\r
                                        <label\r
                                            class="mb-1 block text-xs font-medium text-stone-500 dark:text-stone-400"\r
                                            >{{ 'visitaGuide.layoutShapeKind' | transloco }}</label\r
                                        >\r
                                        <select\r
                                            class="w-full rounded-lg border border-stone-200 px-3 py-2 text-sm dark:border-gray-700 dark:bg-gray-950 dark:text-white"\r
                                            [value]="sel.shape || sel.staticContent || 'rectangle'"\r
                                            (change)="\r
                                                updateSection(sel.id, {\r
                                                    shape: $any($event.target).value,\r
                                                    staticContent: $any($event.target).value,\r
                                                })\r
                                            "\r
                                        >\r
                                            @for (kind of shapeKinds; track kind) {\r
                                                <option [value]="kind">\r
                                                    {{ shapeLabelKey(kind) | transloco }}\r
                                                </option>\r
                                            }\r
                                        </select>\r
                                    </div>\r
                                    <div class="mt-3">\r
                                        <label\r
                                            class="mb-1 block text-xs font-medium text-stone-500 dark:text-stone-400"\r
                                            >{{ 'visitaGuide.layoutShapeFill' | transloco }}</label\r
                                        >\r
                                        <input\r
                                            type="color"\r
                                            [value]="sel.style?.color || '#4F46E5'"\r
                                            (input)="updateStyleColor($any($event.target).value)"\r
                                            class="h-9 w-9 cursor-pointer rounded-lg border border-stone-200 dark:border-gray-700"\r
                                        />\r
                                    </div>\r
                                    @if ((sel.shape || sel.staticContent) === 'line') {\r
                                        <div class="mt-3">\r
                                            <label\r
                                                class="mb-1 block text-xs font-medium text-stone-500 dark:text-stone-400"\r
                                                >{{ 'visitaGuide.layoutLineWidth' | transloco }}</label\r
                                            >\r
                                            <div class="flex items-center gap-2">\r
                                                <input\r
                                                    type="range"\r
                                                    min="1"\r
                                                    max="12"\r
                                                    step="1"\r
                                                    class="flex-1 accent-indigo-600"\r
                                                    [value]="sel.rowLineWidth ?? 1"\r
                                                    (input)="\r
                                                        updateSection(sel.id, {\r
                                                            rowLineWidth: +$any($event.target).value,\r
                                                        })\r
                                                    "\r
                                                />\r
                                                <span\r
                                                    class="w-8 shrink-0 text-center text-xs font-semibold text-stone-700 dark:text-stone-300"\r
                                                    >{{ sel.rowLineWidth ?? 1 }}px</span\r
                                                >\r
                                            </div>\r
                                        </div>\r
                                        <div class="mt-3">\r
                                            <label\r
                                                class="mb-1 block text-xs font-medium text-stone-500 dark:text-stone-400"\r
                                                >{{ 'smartReport.lineStyle' | transloco }}</label\r
                                            >\r
                                            <select\r
                                                class="w-full rounded-lg border border-stone-200 px-3 py-2 text-sm dark:border-gray-700 dark:bg-gray-950 dark:text-white"\r
                                                [value]="sel.rowLineStyle || 'solid'"\r
                                                (change)="\r
                                                    updateSection(sel.id, {\r
                                                        rowLineStyle: $any($event.target).value,\r
                                                    })\r
                                                "\r
                                            >\r
                                                <option value="solid">{{ 'smartReport.lineStyleSolid' | transloco }}</option>\r
                                                <option value="dashed">{{ 'smartReport.lineStyleDashed' | transloco }}</option>\r
                                                <option value="dotted">{{ 'smartReport.lineStyleDotted' | transloco }}</option>\r
                                            </select>\r
                                        </div>\r
                                    }\r
                                }\r
\r
                                <!-- LABEL + DATA PATH (rich data-bound sections) -->\r
                                @if (\r
                                    sel.type === 'dataTable' ||\r
                                    sel.type === 'keyValueGrid' ||\r
                                    sel.type === 'badge' ||\r
                                    sel.type === 'card' ||\r
                                    sel.type === 'repeater'\r
                                ) {\r
                                    <div>\r
                                        <label\r
                                            class="mb-1 block text-xs font-medium text-stone-500 dark:text-stone-400"\r
                                            >{{ 'smartReport.label' | transloco }}</label\r
                                        >\r
                                        <input\r
                                            type="text"\r
                                            [value]="sel.label || ''"\r
                                            (input)="\r
                                                updateSection(sel.id, {\r
                                                    label: $any($event.target).value,\r
                                                })\r
                                            "\r
                                            class="w-full rounded-lg border border-stone-200 px-3 py-2 text-sm dark:border-gray-700 dark:bg-gray-950 dark:text-white"\r
                                            [placeholder]="'smartReport.fieldLabel' | transloco"\r
                                        />\r
                                    </div>\r
                                    <ng-container\r
                                        [ngTemplateOutlet]="dataBinding"\r
                                        [ngTemplateOutletContext]="{\r
                                            sel: sel,\r
                                            hintKey:\r
                                                sel.type === 'dataTable' || sel.type === 'repeater'\r
                                                    ? 'smartReport.pathToArray'\r
                                                    : 'smartReport.dotSeparatedPath',\r
                                        }"\r
                                    ></ng-container>\r
                                }\r
\r
                                <!-- DATA TABLE EDITOR -->\r
                                @if (sel.type === 'dataTable') {\r
                                    <div class="grid grid-cols-2 gap-2">\r
                                        <div>\r
                                            <label\r
                                                class="mb-1 block text-xs font-medium text-stone-500 dark:text-stone-400"\r
                                                >{{ 'smartReport.maxRows' | transloco }}</label\r
                                            >\r
                                            <input\r
                                                type="number"\r
                                                min="1"\r
                                                max="1000"\r
                                                [value]="sel.maxRows ?? ''"\r
                                                (input)="\r
                                                    updateSectionNumber(\r
                                                        sel.id,\r
                                                        'maxRows',\r
                                                        $any($event.target).value\r
                                                    )\r
                                                "\r
                                                class="w-full rounded-lg border border-stone-200 px-3 py-2 text-sm dark:border-gray-700 dark:bg-gray-950 dark:text-white"\r
                                                placeholder="20"\r
                                            />\r
                                        </div>\r
                                        <div>\r
                                            <label\r
                                                class="mb-1 block text-xs font-medium text-stone-500 dark:text-stone-400"\r
                                                >{{ 'smartReport.maxColumns' | transloco }}</label\r
                                            >\r
                                            <input\r
                                                type="number"\r
                                                min="1"\r
                                                max="24"\r
                                                [value]="sel.maxColumns ?? ''"\r
                                                (input)="\r
                                                    updateSectionNumber(\r
                                                        sel.id,\r
                                                        'maxColumns',\r
                                                        $any($event.target).value\r
                                                    )\r
                                                "\r
                                                class="w-full rounded-lg border border-stone-200 px-3 py-2 text-sm dark:border-gray-700 dark:bg-gray-950 dark:text-white"\r
                                                placeholder="8"\r
                                            />\r
                                        </div>\r
                                    </div>\r
\r
                                    <div>\r
                                        <div class="mb-1 flex items-center justify-between">\r
                                            <label\r
                                                class="text-xs font-medium text-stone-500 dark:text-stone-400"\r
                                                >{{ 'smartReport.columns' | transloco }}</label\r
                                            >\r
                                            <div class="flex items-center gap-1">\r
                                                @if ((sel.columns || []).length > 0) {\r
                                                    <button\r
                                                        (click)="clearColumns()"\r
                                                        class="rounded px-1.5 py-0.5 text-xs text-stone-400 hover:text-rose-500"\r
                                                    >\r
                                                        {{ 'smartReport.autoColumns' | transloco }}\r
                                                    </button>\r
                                                }\r
                                                <button\r
                                                    (click)="addColumn()"\r
                                                    class="rounded px-1.5 py-0.5 text-xs text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-950/40"\r
                                                >\r
                                                    + {{ 'smartReport.addColumn' | transloco }}\r
                                                </button>\r
                                            </div>\r
                                        </div>\r
\r
                                        @if ((sel.columns || []).length === 0) {\r
                                            <p\r
                                                class="rounded-lg bg-stone-50 px-3 py-2 text-xs text-stone-400 dark:bg-gray-950 dark:text-stone-500"\r
                                            >\r
                                                {{ 'smartReport.columnsDerived' | transloco }}\r
                                            </p>\r
                                        }\r
\r
                                        @for (column of sel.columns || []; track $index) {\r
                                            <div class="mb-1.5 flex items-center gap-1.5">\r
                                                <input\r
                                                    type="text"\r
                                                    [value]="column.key"\r
                                                    (input)="\r
                                                        updateColumn($index, {\r
                                                            key: $any($event.target).value,\r
                                                        })\r
                                                    "\r
                                                    class="w-1/2 rounded-lg border border-stone-200 px-2 py-1.5 font-mono text-xs dark:border-gray-700 dark:bg-gray-950 dark:text-white"\r
                                                    [placeholder]="\r
                                                        'smartReport.columnKey' | transloco\r
                                                    "\r
                                                />\r
                                                <input\r
                                                    type="text"\r
                                                    [value]="column.label || ''"\r
                                                    (input)="\r
                                                        updateColumn($index, {\r
                                                            label: $any($event.target).value,\r
                                                        })\r
                                                    "\r
                                                    class="w-1/2 rounded-lg border border-stone-200 px-2 py-1.5 text-xs dark:border-gray-700 dark:bg-gray-950 dark:text-white"\r
                                                    [placeholder]="\r
                                                        'smartReport.columnLabel' | transloco\r
                                                    "\r
                                                />\r
                                                <button\r
                                                    (click)="removeColumn($index)"\r
                                                    class="shrink-0 rounded p-1 text-stone-300 hover:text-rose-500"\r
                                                >\r
                                                    <mat-icon class="!h-4 !w-4 !text-base"\r
                                                        >close</mat-icon\r
                                                    >\r
                                                </button>\r
                                            </div>\r
                                        }\r
                                    </div>\r
                                }\r
\r
                                <!-- KEY VALUE GRID EDITOR -->\r
                                @if (sel.type === 'keyValueGrid') {\r
                                    <div>\r
                                        <label\r
                                            class="mb-1 block text-xs font-medium text-stone-500 dark:text-stone-400"\r
                                            >{{ 'smartReport.columnsPerRow' | transloco }}</label\r
                                        >\r
                                        <input\r
                                            type="number"\r
                                            min="1"\r
                                            max="4"\r
                                            [value]="sel.columnsPerRow ?? 2"\r
                                            (input)="\r
                                                updateSectionNumber(\r
                                                    sel.id,\r
                                                    'columnsPerRow',\r
                                                    $any($event.target).value\r
                                                )\r
                                            "\r
                                            class="w-full rounded-lg border border-stone-200 px-3 py-2 text-sm dark:border-gray-700 dark:bg-gray-950 dark:text-white"\r
                                        />\r
                                    </div>\r
                                    <ng-container [ngTemplateOutlet]="paramControls" [ngTemplateOutletContext]="{ sel: sel }"></ng-container>\r
                                }\r
\r
                                <!-- CARD EDITOR -->\r
                                @if (sel.type === 'card') {\r
                                    <div>\r
                                        <label\r
                                            class="mb-1 block text-xs font-medium text-stone-500 dark:text-stone-400"\r
                                            >{{ 'smartReport.cardBody' | transloco }}</label\r
                                        >\r
                                        <textarea\r
                                            rows="3"\r
                                            [value]="sel.staticContent || ''"\r
                                            (input)="\r
                                                updateSection(sel.id, {\r
                                                    staticContent: $any($event.target).value,\r
                                                })\r
                                            "\r
                                            class="w-full rounded-lg border border-stone-200 px-3 py-2 text-sm dark:border-gray-700 dark:bg-gray-950 dark:text-white"\r
                                            [placeholder]="\r
                                                'smartReport.placeholderSupported' | transloco\r
                                            "\r
                                        ></textarea>\r
                                    </div>\r
                                    <ng-container [ngTemplateOutlet]="paramControls" [ngTemplateOutletContext]="{ sel: sel }"></ng-container>\r
                                }\r
\r
                                <!-- REPEATER EDITOR -->\r
                                @if (sel.type === 'repeater') {\r
                                    <div>\r
                                        <label\r
                                            class="mb-1 block text-xs font-medium text-stone-500 dark:text-stone-400"\r
                                            >{{ 'smartReport.itemTitle' | transloco }}</label\r
                                        >\r
                                        <input\r
                                            type="text"\r
                                            [value]="sel.itemTitle || ''"\r
                                            (input)="\r
                                                updateSection(sel.id, {\r
                                                    itemTitle: $any($event.target).value,\r
                                                })\r
                                            "\r
                                            class="w-full rounded-lg border border-stone-200 px-3 py-2 text-sm dark:border-gray-700 dark:bg-gray-950 dark:text-white"\r
                                            placeholder="{numeroPoliza}"\r
                                        />\r
                                    </div>\r
                                    <div>\r
                                        <label\r
                                            class="mb-1 block text-xs font-medium text-stone-500 dark:text-stone-400"\r
                                            >{{ 'smartReport.itemTemplate' | transloco }}</label\r
                                        >\r
                                        <textarea\r
                                            rows="2"\r
                                            [value]="sel.itemTemplate || ''"\r
                                            (input)="\r
                                                updateSection(sel.id, {\r
                                                    itemTemplate: $any($event.target).value,\r
                                                })\r
                                            "\r
                                            class="w-full rounded-lg border border-stone-200 px-3 py-2 text-sm dark:border-gray-700 dark:bg-gray-950 dark:text-white"\r
                                            [placeholder]="\r
                                                'smartReport.itemTemplateHint' | transloco\r
                                            "\r
                                        ></textarea>\r
                                    </div>\r
                                    <div>\r
                                        <label\r
                                            class="mb-1 block text-xs font-medium text-stone-500 dark:text-stone-400"\r
                                            >{{ 'smartReport.maxItems' | transloco }}</label\r
                                        >\r
                                        <input\r
                                            type="number"\r
                                            min="1"\r
                                            max="1000"\r
                                            [value]="sel.maxRows ?? ''"\r
                                            (input)="\r
                                                updateSectionNumber(\r
                                                    sel.id,\r
                                                    'maxRows',\r
                                                    $any($event.target).value\r
                                                )\r
                                            "\r
                                            class="w-full rounded-lg border border-stone-200 px-3 py-2 text-sm dark:border-gray-700 dark:bg-gray-950 dark:text-white"\r
                                            placeholder="10"\r
                                        />\r
                                    </div>\r
                                }\r
\r
                                <!-- REPORT BLOCKS EDITOR -->\r
                                @if (sel.type === 'reportBlocks') {\r
                                    <p\r
                                        class="rounded-lg bg-indigo-50/60 px-3 py-2 text-xs text-indigo-700 dark:bg-indigo-950/30 dark:text-indigo-300"\r
                                    >\r
                                        {{ 'smartReport.reportBlocksHint' | transloco }}\r
                                    </p>\r
                                    <div>\r
                                        <label\r
                                            class="mb-1 block text-xs font-medium text-stone-500 dark:text-stone-400"\r
                                            >{{ 'smartReport.blockIds' | transloco }}</label\r
                                        >\r
                                        <input\r
                                            type="text"\r
                                            [value]="(sel.blockIds || []).join(', ')"\r
                                            (change)="updateBlockIds($any($event.target).value)"\r
                                            class="w-full rounded-lg border border-stone-200 px-3 py-2 font-mono text-sm dark:border-gray-700 dark:bg-gray-950 dark:text-white"\r
                                            [placeholder]="'smartReport.allBlocks' | transloco"\r
                                        />\r
                                        <p class="mt-1 text-xs text-stone-400 dark:text-stone-500">\r
                                            {{ 'smartReport.blockIdsHint' | transloco }}\r
                                        </p>\r
                                    </div>\r
                                    <label class="flex items-center gap-2 text-xs text-stone-600 dark:text-stone-300">\r
                                        <input\r
                                            type="checkbox"\r
                                            [checked]="sel.showDisplayRows !== false"\r
                                            (change)="\r
                                                updateSection(sel.id, {\r
                                                    showDisplayRows: $any($event.target).checked,\r
                                                })\r
                                            "\r
                                            class="rounded border-stone-300 text-indigo-600"\r
                                        />\r
                                        {{ 'smartReport.showDisplayRows' | transloco }}\r
                                    </label>\r
                                }\r
\r
                                <!-- BADGE VARIANT + DATA-DRIVEN COLOUR RULES -->\r
                                @if (\r
                                    sel.type === 'badge' ||\r
                                    sel.type === 'card' ||\r
                                    sel.type === 'keyValueGrid' ||\r
                                    sel.type === 'dataTable'\r
                                ) {\r
                                    <div\r
                                        class="space-y-3 border-t border-stone-100 pt-3 dark:border-gray-800"\r
                                    >\r
                                        <div>\r
                                            <label\r
                                                class="mb-1 block text-xs font-medium text-stone-500 dark:text-stone-400"\r
                                                >{{ 'smartReport.variant' | transloco }}</label\r
                                            >\r
                                            <select\r
                                                [value]="sel.style?.variant || 'neutral'"\r
                                                (change)="\r
                                                    updateSectionStyle(\r
                                                        'variant',\r
                                                        $any($event.target).value\r
                                                    )\r
                                                "\r
                                                class="w-full rounded-lg border border-stone-200 px-3 py-2 text-sm dark:border-gray-700 dark:bg-gray-950 dark:text-white"\r
                                            >\r
                                                @for (variant of styleVariants; track variant) {\r
                                                    <option [value]="variant">\r
                                                        {{\r
                                                            'smartReport.variant_' + variant\r
                                                                | transloco\r
                                                        }}\r
                                                    </option>\r
                                                }\r
                                            </select>\r
                                        </div>\r
\r
                                        <div>\r
                                            <div class="mb-1 flex items-center justify-between">\r
                                                <label\r
                                                    class="text-xs font-medium text-stone-500 dark:text-stone-400"\r
                                                    >{{\r
                                                        'smartReport.variantRules' | transloco\r
                                                    }}</label\r
                                                >\r
                                                <button\r
                                                    (click)="addVariantRule()"\r
                                                    class="rounded px-1.5 py-0.5 text-xs text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-950/40"\r
                                                >\r
                                                    + {{ 'smartReport.addRule' | transloco }}\r
                                                </button>\r
                                            </div>\r
                                            <p\r
                                                class="mb-1.5 text-xs text-stone-400 dark:text-stone-500"\r
                                            >\r
                                                {{ 'smartReport.variantRulesHint' | transloco }}\r
                                            </p>\r
\r
                                            @for (\r
                                                rule of sel.style?.variantRules || [];\r
                                                track $index\r
                                            ) {\r
                                                <div\r
                                                    class="mb-2 space-y-1.5 rounded-lg border border-stone-200 p-2 dark:border-gray-700"\r
                                                >\r
                                                    <div class="flex items-center gap-1.5">\r
                                                        <input\r
                                                            type="text"\r
                                                            [value]="rule.field"\r
                                                            (input)="\r
                                                                updateVariantRule($index, {\r
                                                                    field: $any($event.target).value,\r
                                                                })\r
                                                            "\r
                                                            class="min-w-0 flex-1 rounded border border-stone-200 px-2 py-1 font-mono text-xs dark:border-gray-700 dark:bg-gray-950 dark:text-white"\r
                                                            [placeholder]="\r
                                                                'smartReport.ruleField' | transloco\r
                                                            "\r
                                                        />\r
                                                        <button\r
                                                            (click)="removeVariantRule($index)"\r
                                                            class="shrink-0 rounded p-1 text-stone-300 hover:text-rose-500"\r
                                                        >\r
                                                            <mat-icon class="!h-4 !w-4 !text-base"\r
                                                                >close</mat-icon\r
                                                            >\r
                                                        </button>\r
                                                    </div>\r
                                                    <div class="flex items-center gap-1.5">\r
                                                        <select\r
                                                            [value]="rule.operator"\r
                                                            (change)="\r
                                                                updateVariantRule($index, {\r
                                                                    operator: $any($event.target)\r
                                                                        .value,\r
                                                                })\r
                                                            "\r
                                                            class="w-1/3 rounded border border-stone-200 px-1.5 py-1 text-xs dark:border-gray-700 dark:bg-gray-950 dark:text-white"\r
                                                        >\r
                                                            @for (\r
                                                                operator of conditionOperators;\r
                                                                track operator\r
                                                            ) {\r
                                                                <option [value]="operator">\r
                                                                    {{ operator }}\r
                                                                </option>\r
                                                            }\r
                                                        </select>\r
                                                        @if (operatorNeedsValue(rule.operator)) {\r
                                                            <input\r
                                                                type="text"\r
                                                                [value]="rule.value ?? ''"\r
                                                                (input)="\r
                                                                    updateVariantRule($index, {\r
                                                                        value: $any($event.target)\r
                                                                            .value,\r
                                                                    })\r
                                                                "\r
                                                                class="w-1/3 min-w-0 rounded border border-stone-200 px-1.5 py-1 text-xs dark:border-gray-700 dark:bg-gray-950 dark:text-white"\r
                                                                [placeholder]="\r
                                                                    'smartReport.ruleValue'\r
                                                                        | transloco\r
                                                                "\r
                                                            />\r
                                                        }\r
                                                        <select\r
                                                            [value]="rule.variant"\r
                                                            (change)="\r
                                                                updateVariantRule($index, {\r
                                                                    variant: $any($event.target)\r
                                                                        .value,\r
                                                                })\r
                                                            "\r
                                                            class="w-1/3 rounded border border-stone-200 px-1.5 py-1 text-xs dark:border-gray-700 dark:bg-gray-950 dark:text-white"\r
                                                        >\r
                                                            @for (\r
                                                                variant of styleVariants;\r
                                                                track variant\r
                                                            ) {\r
                                                                <option [value]="variant">\r
                                                                    {{ variant }}\r
                                                                </option>\r
                                                            }\r
                                                        </select>\r
                                                    </div>\r
                                                </div>\r
                                            }\r
                                        </div>\r
                                    </div>\r
                                }\r
\r
                                <!-- EMPTY STATE HANDLING (data-bound sections) -->\r
                                @if (isDataBound(sel.type)) {\r
                                    <div\r
                                        class="space-y-2 border-t border-stone-100 pt-3 dark:border-gray-800"\r
                                    >\r
                                        <label\r
                                            class="flex items-center gap-2 text-xs text-stone-600 dark:text-stone-300"\r
                                        >\r
                                            <input\r
                                                type="checkbox"\r
                                                [checked]="!!sel.showWhenEmpty"\r
                                                (change)="\r
                                                    updateSection(sel.id, {\r
                                                        showWhenEmpty: $any($event.target).checked,\r
                                                    })\r
                                                "\r
                                                class="rounded border-stone-300 text-indigo-600"\r
                                            />\r
                                            {{ 'smartReport.showWhenEmpty' | transloco }}\r
                                        </label>\r
                                        @if (sel.showWhenEmpty) {\r
                                            <input\r
                                                type="text"\r
                                                [value]="sel.emptyMessage || ''"\r
                                                (input)="\r
                                                    updateSection(sel.id, {\r
                                                        emptyMessage: $any($event.target).value,\r
                                                    })\r
                                                "\r
                                                class="w-full rounded-lg border border-stone-200 px-3 py-2 text-sm dark:border-gray-700 dark:bg-gray-950 dark:text-white"\r
                                                [placeholder]="\r
                                                    'smartReport.emptyMessage' | transloco\r
                                                "\r
                                            />\r
                                        }\r
                                    </div>\r
                                }\r
\r
                                <!-- STYLE OPTIONS (for text-bearing sections) -->\r
                                @if (\r
                                    sel.type === 'header' ||\r
                                    sel.type === 'text' ||\r
                                    sel.type === 'field' ||\r
                                    sel.type === 'table' ||\r
                                    sel.type === 'dataTable' ||\r
                                    sel.type === 'keyValueGrid' ||\r
                                    sel.type === 'card' ||\r
                                    sel.type === 'badge' ||\r
                                    sel.type === 'repeater'\r
                                ) {\r
                                    <div class="space-y-3 border-t border-stone-100 pt-3 dark:border-gray-800">\r
                                        <h4 class="text-xs font-medium text-stone-500 dark:text-stone-400">\r
                                            {{ 'smartReport.style' | transloco }}\r
                                        </h4>\r
\r
                                        <!-- Text Align -->\r
                                        <div>\r
                                            <label class="mb-1 block text-xs text-stone-400 dark:text-stone-500">{{\r
                                                'smartReport.textAlign' | transloco\r
                                            }}</label>\r
                                            <div class="flex gap-1">\r
                                                @for (\r
                                                    align of textAlignOptions;\r
                                                    track align\r
                                                ) {\r
                                                    <button\r
                                                        (click)="updateTextAlign(align)"\r
                                                        class="flex-1 rounded-lg border py-2 text-sm transition-colors text-stone-700 dark:text-stone-300"\r
                                                        [ngClass]="\r
                                                            sel.style?.textAlign === align\r
                                                                ? 'border-indigo-300 bg-indigo-50 dark:border-indigo-600 dark:bg-indigo-950/30'\r
                                                                : 'border-stone-200 dark:border-gray-700'\r
                                                        "\r
                                                    >\r
                                                        <mat-icon class="!text-base"\r
                                                            >format_align_{{ align }}</mat-icon\r
                                                        >\r
                                                    </button>\r
                                                }\r
                                            </div>\r
                                        </div>\r
\r
                                        <!-- Font Size -->\r
                                        <div>\r
                                            <label class="mb-1 block text-xs text-stone-400 dark:text-stone-500">{{\r
                                                'smartReport.fontSize' | transloco\r
                                            }}</label>\r
                                            <input\r
                                                type="number"\r
                                                [value]="sel.style?.fontSize || 14"\r
                                                (input)="\r
                                                    updateFontSize(+$any($event.target).value)\r
                                                "\r
                                                class="w-full rounded-lg border border-stone-200 px-3 py-2 text-sm dark:border-gray-700 dark:bg-gray-950 dark:text-white"\r
                                                min="8"\r
                                                max="72"\r
                                            />\r
                                        </div>\r
\r
                                        <!-- Font Weight -->\r
                                        <div>\r
                                            <label class="mb-1 block text-xs text-stone-400 dark:text-stone-500">{{\r
                                                'smartReport.fontWeight' | transloco\r
                                            }}</label>\r
                                            <div class="flex gap-1">\r
                                                <button\r
                                                    (click)="updateFontWeight('normal')"\r
                                                    class="flex-1 rounded-lg border py-2 text-sm transition-colors text-stone-700 dark:text-stone-300"\r
                                                    [ngClass]="\r
                                                        sel.style?.fontWeight !== 'bold'\r
                                                            ? 'border-indigo-300 bg-indigo-50 dark:border-indigo-600 dark:bg-indigo-950/30'\r
                                                            : 'border-stone-200 dark:border-gray-700'\r
                                                    "\r
                                                >\r
                                                    {{ 'smartReport.normal' | transloco }}\r
                                                </button>\r
                                                <button\r
                                                    (click)="updateFontWeight('bold')"\r
                                                    class="flex-1 rounded-lg border py-2 text-sm font-bold transition-colors text-stone-700 dark:text-stone-300"\r
                                                    [ngClass]="\r
                                                        sel.style?.fontWeight === 'bold'\r
                                                            ? 'border-indigo-300 bg-indigo-50 dark:border-indigo-600 dark:bg-indigo-950/30'\r
                                                            : 'border-stone-200 dark:border-gray-700'\r
                                                    "\r
                                                >\r
                                                    {{ 'smartReport.bold' | transloco }}\r
                                                </button>\r
                                            </div>\r
                                        </div>\r
\r
                                        <div>\r
                                            <label class="mb-1 block text-xs text-stone-400 dark:text-stone-500">{{\r
                                                'smartReport.italic' | transloco\r
                                            }}</label>\r
                                            <div class="flex gap-1">\r
                                                <button\r
                                                    (click)="updateFontStyle('normal')"\r
                                                    class="flex-1 rounded-lg border py-2 text-sm transition-colors text-stone-700 dark:text-stone-300"\r
                                                    [class.border-indigo-300]="sel.style?.fontStyle !== 'italic'"\r
                                                    [class.bg-indigo-50]="sel.style?.fontStyle !== 'italic'"\r
                                                    [class.border-stone-200]="sel.style?.fontStyle === 'italic'"\r
                                                >\r
                                                    {{ 'smartReport.normal' | transloco }}\r
                                                </button>\r
                                                <button\r
                                                    (click)="updateFontStyle('italic')"\r
                                                    class="flex-1 rounded-lg border py-2 text-sm italic transition-colors text-stone-700 dark:text-stone-300"\r
                                                    [class.border-indigo-300]="sel.style?.fontStyle === 'italic'"\r
                                                    [class.bg-indigo-50]="sel.style?.fontStyle === 'italic'"\r
                                                    [class.border-stone-200]="sel.style?.fontStyle !== 'italic'"\r
                                                >\r
                                                    {{ 'smartReport.italic' | transloco }}\r
                                                </button>\r
                                            </div>\r
                                        </div>\r
\r
                                        <div>\r
                                            <label class="mb-1 block text-xs text-stone-400 dark:text-stone-500">{{\r
                                                'smartReport.fontFamily' | transloco\r
                                            }}</label>\r
                                            <select\r
                                                class="w-full rounded-lg border border-stone-200 px-3 py-2 text-sm dark:border-gray-700 dark:bg-gray-950 dark:text-white"\r
                                                [value]="fontFamilyIndex(sel)"\r
                                                (change)="updateFontFamilyByIndex($any($event.target).value)"\r
                                            >\r
                                                @for (font of reportFonts; track font.value; let i = $index) {\r
                                                    <option [value]="i">\r
                                                        {{ font.labelKey | transloco }}\r
                                                    </option>\r
                                                }\r
                                            </select>\r
                                        </div>\r
\r
                                        <!-- Text Color -->\r
                                        <div class="flex items-center gap-3">\r
                                            <label class="text-xs text-stone-400 dark:text-stone-500">{{\r
                                                'smartReport.textColor' | transloco\r
                                            }}</label>\r
                                            <input\r
                                                type="color"\r
                                                [value]="sel.style?.color || '#111827'"\r
                                                (input)="\r
                                                    updateStyleColor($any($event.target).value)\r
                                                "\r
                                                class="h-8 w-8 cursor-pointer rounded border border-stone-200 dark:border-gray-700"\r
                                            />\r
                                        </div>\r
                                        @if (showsParamControls(sel.type)) {\r
                                            <div class="flex items-center gap-3">\r
                                                <label class="text-xs text-stone-400 dark:text-stone-500">{{\r
                                                    'smartReport.labelColor' | transloco\r
                                                }}</label>\r
                                                <input\r
                                                    type="color"\r
                                                    [value]="sel.style?.labelColor || sel.style?.color || '#6B7280'"\r
                                                    (input)="\r
                                                        updateSectionStyle(\r
                                                            'labelColor',\r
                                                            $any($event.target).value\r
                                                        )\r
                                                    "\r
                                                    class="h-8 w-8 cursor-pointer rounded border border-stone-200 dark:border-gray-700"\r
                                                />\r
                                            </div>\r
                                            <div class="flex items-center gap-3">\r
                                                <label class="text-xs text-stone-400 dark:text-stone-500">{{\r
                                                    'smartReport.valueColor' | transloco\r
                                                }}</label>\r
                                                <input\r
                                                    type="color"\r
                                                    [value]="sel.style?.valueColor || sel.style?.color || '#111827'"\r
                                                    (input)="\r
                                                        updateSectionStyle(\r
                                                            'valueColor',\r
                                                            $any($event.target).value\r
                                                        )\r
                                                    "\r
                                                    class="h-8 w-8 cursor-pointer rounded border border-stone-200 dark:border-gray-700"\r
                                                />\r
                                            </div>\r
                                        }\r
                                        <div class="flex items-center gap-3">\r
                                            <label class="text-xs text-stone-400 dark:text-stone-500">{{\r
                                                'smartReport.blockBackground' | transloco\r
                                            }}</label>\r
                                            <input\r
                                                type="color"\r
                                                [value]="sel.style?.backgroundColor || '#ffffff'"\r
                                                (input)="\r
                                                    updateBgColor($any($event.target).value)\r
                                                "\r
                                                class="h-8 w-8 cursor-pointer rounded border border-stone-200 dark:border-gray-700"\r
                                            />\r
                                        </div>\r
                                        <label class="flex items-center gap-2 text-xs text-stone-500">\r
                                            <input\r
                                                type="checkbox"\r
                                                [checked]="(sel.style?.borderWidth || 0) > 0"\r
                                                (change)="\r
                                                    updateSectionStyle(\r
                                                        'borderWidth',\r
                                                        $any($event.target).checked ? 1 : 0\r
                                                    )\r
                                                "\r
                                            />\r
                                            {{ 'smartReport.blockBorder' | transloco }}\r
                                        </label>\r
                                        @if ((sel.style?.borderWidth || 0) > 0) {\r
                                            <div class="flex items-center gap-3">\r
                                                <label class="text-xs text-stone-400 dark:text-stone-500">{{\r
                                                    'smartReport.blockBorderColor' | transloco\r
                                                }}</label>\r
                                                <input\r
                                                    type="color"\r
                                                    [value]="sel.style?.borderColor || '#d6d3d1'"\r
                                                    (input)="\r
                                                        updateSectionStyle(\r
                                                            'borderColor',\r
                                                            $any($event.target).value\r
                                                        )\r
                                                    "\r
                                                    class="h-8 w-8 cursor-pointer rounded border border-stone-200 dark:border-gray-700"\r
                                                />\r
                                            </div>\r
                                            <label class="flex items-center justify-between text-xs text-stone-400 dark:text-stone-500">\r
                                                <span>{{ 'smartReport.blockBorderWidth' | transloco }}</span>\r
                                                <span>{{ sel.style?.borderWidth || 1 }} px</span>\r
                                            </label>\r
                                            <input\r
                                                type="range"\r
                                                min="1"\r
                                                max="12"\r
                                                step="1"\r
                                                [value]="sel.style?.borderWidth || 1"\r
                                                (input)="\r
                                                    updateSectionStyle(\r
                                                        'borderWidth',\r
                                                        Number($any($event.target).value)\r
                                                    )\r
                                                "\r
                                                class="h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-stone-200 accent-indigo-600"\r
                                            />\r
                                            <label class="flex items-center justify-between text-xs text-stone-400 dark:text-stone-500">\r
                                                <span>{{ 'smartReport.blockBorderRadius' | transloco }}</span>\r
                                                <span>{{ sel.style?.borderRadius || 0 }} px</span>\r
                                            </label>\r
                                            <input\r
                                                type="range"\r
                                                min="0"\r
                                                max="32"\r
                                                step="1"\r
                                                [value]="sel.style?.borderRadius || 0"\r
                                                (input)="\r
                                                    updateSectionStyle(\r
                                                        'borderRadius',\r
                                                        Number($any($event.target).value)\r
                                                    )\r
                                                "\r
                                                class="h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-stone-200 accent-indigo-600"\r
                                            />\r
                                        }\r
                                    </div>\r
                                }\r
                            </div>\r
                        </div>\r
                    }\r
\r
                    <!--\r
                        Exact preview: HTML from the backend renderer, shown in a\r
                        sandboxed iframe. \`sandbox\` with no tokens gives the document an\r
                        opaque origin and disables scripts, so report content \u2014 which can\r
                        include third-party data \u2014 cannot reach the application.\r
                    -->\r
                    @if (previewMode() === 'exact' && builderStep() !== 'deliver') {\r
                        <div\r
                            class="overflow-hidden rounded-2xl border border-stone-200/90 bg-stone-100 shadow-sm dark:border-gray-800 dark:bg-gray-900"\r
                        >\r
                            @if (exactPreviewError()) {\r
                                <div\r
                                    class="flex h-[600px] flex-col items-center justify-center gap-2 text-stone-400 dark:text-stone-500"\r
                                >\r
                                    <mat-icon class="!h-8 !w-8 !text-3xl">error_outline</mat-icon>\r
                                    <p class="text-sm">{{ exactPreviewError() }}</p>\r
                                    <button\r
                                        (click)="setPreviewMode('exact')"\r
                                        class="rounded-lg border border-stone-200 px-3 py-1.5 text-xs hover:bg-white dark:border-gray-700"\r
                                    >\r
                                        {{ 'smartReport.retry' | transloco }}\r
                                    </button>\r
                                </div>\r
                            } @else if (exactPreviewUrl()) {\r
                                <iframe\r
                                    [src]="exactPreviewUrl()"\r
                                    sandbox\r
                                    title="Report preview"\r
                                    class="h-[80vh] min-h-[600px] w-full border-0 bg-white"\r
                                ></iframe>\r
                            } @else {\r
                                <div\r
                                    class="flex h-[600px] flex-col items-center justify-center gap-2 text-stone-400 dark:text-stone-500"\r
                                >\r
                                    <mat-icon class="!h-8 !w-8 !text-3xl animate-pulse"\r
                                        >description</mat-icon\r
                                    >\r
                                    <p class="text-sm">{{ 'smartReport.rendering' | transloco }}</p>\r
                                </div>\r
                            }\r
                        </div>\r
                    }\r
\r
                    <!--\r
                        Authoring canvas: selectable blocks and draggable overlays, and\r
                        the drop target for palette drags. Sorting is off because the\r
                        paginated preview is not a flat list; a node dropped here is\r
                        appended, and the Layers rail is where order is chosen precisely.\r
                    -->\r
                    <div\r
                        [id]="canvasDropListId"\r
                        cdkDropList\r
                        [cdkDropListSortingDisabled]="true"\r
                        (cdkDropListDropped)="onCanvasDrop($event)"\r
                        (click)="onCanvasBlankClick($event)"\r
                        [class.hidden]="previewMode() !== 'edit' || builderStep() === 'deliver'"\r
                    >\r
                    <report-preview\r
                        #samplePreview\r
                        [template]="{\r
                            sections: sections(),\r
                            primaryColor: templateForm.get('primaryColor')?.value,\r
                            pageSize: templateForm.get('pageSize')?.value || 'A4',\r
                            headerLogos: template()?.headerLogos,\r
                            sheetImages: template()?.sheetImages,\r
                        }"\r
                        [sheetImages]="template()?.sheetImages ?? []"\r
                        [previewData]="previewData()"\r
                        [primaryColor]="templateForm.get('primaryColor')?.value || '#4F46E5'"\r
                        [pageBackgroundColor]="\r
                            templateForm.get('pageBackgroundColor')?.value || '#ffffff'\r
                        "\r
                        [orientation]="templateForm.get('orientation')?.value || 'portrait'"\r
                        [clickable]="true"\r
                        [selectedSectionId]="currentSelectedSection()?.id ?? null"\r
                        [selectedOverlay]="selectedOverlay()"\r
                        [sectionClick]="onPreviewSectionClick"\r
                        (inlineTextChange)="onPreviewInlineText($event)"\r
                        (overlaySelect)="onPreviewOverlaySelect($event)"\r
                        (backgroundClick)="clearPreviewSelection()"\r
                        [logoUrl]="logoUrl()"\r
                        [legend]="templateForm.get('legend')?.value || ''"\r
                        [legendPosition]="templateForm.get('legendPosition')?.value || 'left'"\r
                        [termsAndConditions]="templateForm.get('termsAndConditions')?.value || ''"\r
                        [termsPosition]="templateForm.get('termsPosition')?.value || 'left'"\r
                        [showPageNumbers]="templateForm.get('showPageNumbers')?.value || false"\r
                        [pageNumberPosition]="\r
                            templateForm.get('pageNumberPosition')?.value || 'bottom-center'\r
                        "\r
                        [watermarkEnabled]="templateForm.get('watermarkEnabled')?.value || false"\r
                        [watermarkType]="templateForm.get('watermarkType')?.value || 'text'"\r
                        [watermarkLogoUrl]="template()?.watermark?.logo || undefined"\r
                        [watermarkText]="templateForm.get('watermarkText')?.value || 'CONFIDENTIAL'"\r
                        [watermarkOpacity]="templateForm.get('watermarkOpacity')?.value ?? 0.08"\r
                        [watermarkPattern]="templateForm.get('watermarkPattern')?.value || 'single'"\r
                        [watermarkX]="templateForm.get('watermarkX')?.value ?? 250"\r
                        [watermarkY]="templateForm.get('watermarkY')?.value ?? 420"\r
                        [watermarkWidth]="templateForm.get('watermarkWidth')?.value ?? 280"\r
                        [watermarkHeight]="templateForm.get('watermarkHeight')?.value ?? 160"\r
                        [watermarkRotation]="templateForm.get('watermarkRotation')?.value ?? -15"\r
                        [signatureEnabled]="templateForm.get('signatureEnabled')?.value || false"\r
                        [signatureImage]="templateForm.get('signatureImage')?.value || null"\r
                        [signatureX]="templateForm.get('signatureX')?.value || 0"\r
                        [signatureY]="templateForm.get('signatureY')?.value || 0"\r
                        [signatureWidth]="templateForm.get('signatureWidth')?.value || 100"\r
                        [signatureHeight]="templateForm.get('signatureHeight')?.value || 50"\r
                        [signaturePage]="templateForm.get('signaturePage')?.value || 0"\r
                        [logoEnabled]="!!logoUrl()"\r
                        [logoX]="templateForm.get('logoX')?.value ?? 32"\r
                        [logoY]="templateForm.get('logoY')?.value ?? 32"\r
                        [logoWidth]="templateForm.get('logoWidth')?.value ?? 160"\r
                        [logoHeight]="templateForm.get('logoHeight')?.value ?? 60"\r
                        [logoRotation]="templateForm.get('logoRotation')?.value ?? 0"\r
                        [logoAutoFitContent]="\r
                            templateForm.get('logoAutoFitContent')?.value || false\r
                        "\r
                        [bodyTopPadding]="templateForm.get('bodyTopPadding')?.value || 0"\r
                        (signaturePositionChange)="onSignaturePositionChange($event)"\r
                        (signatureSizeChange)="onSignatureSizeChange($event)"\r
                        (logoPositionChange)="onLogoPositionChange($event)"\r
                        (logoSizeChange)="onLogoSizeChange($event)"\r
                        (logoRotationChange)="onLogoRotationChange($event)"\r
                        (watermarkPositionChange)="onWatermarkPositionChange($event)"\r
                        (watermarkSizeChange)="onWatermarkSizeChange($event)"\r
                        (watermarkRotationChange)="onWatermarkRotationChange($event)"\r
                    />\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
    </div>\r
</div>\r
\r
<!--\r
    How a block says where its content comes from.\r
\r
    A bound block shows the field's human name, because that is what the author\r
    recognises; the dot-notation path is the machine's business and only appears\r
    behind "Edit path" for the cases the palette cannot express, such as a payload\r
    the current sample does not contain.\r
-->\r
<ng-template #paramControls let-sel="sel">\r
    <label class="flex items-center gap-2 text-xs text-stone-600 dark:text-stone-300">\r
        <input\r
            type="checkbox"\r
            [checked]="sel.showRowLines !== false"\r
            (change)="setShowRowLines(sel, $any($event.target).checked)"\r
        />\r
        {{ 'smartReport.showRowLines' | transloco }}\r
    </label>\r
    @if (sectionParamOptions(sel).length > 0) {\r
        <p class="mt-3 mb-1 text-[11px] font-semibold uppercase tracking-wider text-stone-400">\r
            {{ 'smartReport.visibleParams' | transloco }}\r
        </p>\r
        <div\r
            cdkDropList\r
            class="max-h-48 space-y-1 overflow-y-auto"\r
            (cdkDropListDropped)="onSectionParamDrop(sel, $event)"\r
        >\r
            @for (param of sectionParamOptions(sel); track param.key) {\r
                <div\r
                    cdkDrag\r
                    class="flex items-center gap-2 rounded-lg border border-stone-200 px-2 py-1 text-xs text-stone-700 dark:border-gray-700 dark:text-stone-200"\r
                >\r
                    <mat-icon cdkDragHandle class="!h-4 !w-4 !text-base cursor-grab text-stone-400">drag_indicator</mat-icon>\r
                    <input\r
                        type="checkbox"\r
                        [checked]="isSectionParamVisible(sel, param.key)"\r
                        (change)="\r
                            setSectionParamVisible(sel, param.key, $any($event.target).checked)\r
                        "\r
                    />\r
                    <span class="min-w-0 flex-1 truncate">{{ param.label }}</span>\r
                </div>\r
            }\r
        </div>\r
    } @else {\r
        <p class="mt-2 text-[11px] text-stone-400">{{ 'smartReport.noSimpleParams' | transloco }}</p>\r
    }\r
</ng-template>\r
\r
<ng-template #dataBinding let-sel="sel" let-hintKey="hintKey">\r
    <div>\r
        <div class="mb-1 flex items-center justify-between">\r
            <label class="text-xs font-medium text-stone-500 dark:text-stone-400">{{\r
                'smartReport.dataSource' | transloco\r
            }}</label>\r
            <button\r
                (click)="showAdvancedPath.set(!showAdvancedPath())"\r
                class="text-[11px] font-medium text-indigo-600 hover:underline dark:text-indigo-400"\r
            >\r
                {{\r
                    (showAdvancedPath() ? 'smartReport.hidePath' : 'smartReport.editPath')\r
                        | transloco\r
                }}\r
            </button>\r
        </div>\r
\r
        @if (sel.dataPath) {\r
            <div\r
                class="flex items-center gap-2 rounded-lg border border-indigo-100 bg-indigo-50/60 px-3 py-2 dark:border-indigo-900/50 dark:bg-indigo-950/30"\r
            >\r
                <mat-icon class="!h-4 !w-4 shrink-0 !text-base text-indigo-500"\r
                    >account_tree</mat-icon\r
                >\r
                <span\r
                    class="min-w-0 flex-1 truncate text-sm text-stone-700 dark:text-stone-200"\r
                    [matTooltip]="sel.dataPath"\r
                    >{{ dataLabelFor(sel.dataPath) }}</span\r
                >\r
                <button\r
                    (click)="updateSection(sel.id, { dataPath: '' })"\r
                    class="shrink-0 text-stone-400 hover:text-red-500"\r
                    [matTooltip]="'smartReport.unbind' | transloco"\r
                >\r
                    <mat-icon class="!h-4 !w-4 !text-base">close</mat-icon>\r
                </button>\r
            </div>\r
        } @else {\r
            <button\r
                (click)="railTab.set('data')"\r
                class="flex w-full items-center justify-center gap-2 rounded-lg border border-dashed border-stone-300 px-3 py-2.5 text-sm text-stone-500 hover:border-indigo-300 hover:text-indigo-600 dark:border-gray-700 dark:text-stone-400"\r
            >\r
                <mat-icon class="!h-4 !w-4 !text-base">account_tree</mat-icon>\r
                {{ 'smartReport.chooseFromData' | transloco }}\r
            </button>\r
        }\r
\r
        @if (showAdvancedPath()) {\r
            <input\r
                type="text"\r
                [value]="sel.dataPath || ''"\r
                (input)="updateSection(sel.id, { dataPath: $any($event.target).value })"\r
                class="mt-2 w-full rounded-lg border border-stone-200 px-3 py-2 font-mono text-sm dark:border-gray-700 dark:bg-gray-950 dark:text-white"\r
                [placeholder]="'smartReport.dataPathPlaceholder' | transloco"\r
            />\r
            <p class="mt-1 text-xs text-stone-400 dark:text-stone-500">\r
                {{ hintKey | transloco }}\r
            </p>\r
        }\r
    </div>\r
</ng-template>\r
\r
<!--\r
    One row of the data palette, recursive over children.\r
\r
    Each row carries the block the backend recommended for that node's shape, so\r
    clicking or dragging it produces a bound section with its label, path and columns\r
    already filled in.\r
-->\r
<ng-template #dataNodeRow let-node="node" let-depth="depth">\r
    <div\r
        cdkDrag\r
        [cdkDragData]="node"\r
        class="group flex items-center gap-1.5 rounded-lg px-1.5 py-1 hover:bg-stone-50 dark:hover:bg-gray-800/50"\r
        [style.padding-left.px]="6 + depth * 12"\r
    >\r
        @if (node.children?.length) {\r
            <button\r
                (click)="toggleNode(node.path)"\r
                class="flex h-5 w-5 shrink-0 items-center justify-center rounded text-stone-400 hover:text-stone-700 dark:hover:text-stone-200"\r
            >\r
                <mat-icon class="!h-4 !w-4 !text-base">{{\r
                    isExpanded(node.path) ? 'expand_more' : 'chevron_right'\r
                }}</mat-icon>\r
            </button>\r
        } @else {\r
            <span class="h-5 w-5 shrink-0"></span>\r
        }\r
\r
        <mat-icon\r
            class="!h-4 !w-4 shrink-0 !text-base text-stone-300 dark:text-stone-600"\r
            [matTooltip]="getSectionLabel(node.sectionType)"\r
            >{{ nodeIcon(node) }}</mat-icon\r
        >\r
\r
        <button\r
            (click)="addNodeSection(node)"\r
            class="flex min-w-0 flex-1 items-baseline gap-2 text-left"\r
            [matTooltip]="node.path"\r
        >\r
            <span class="truncate text-xs font-medium text-stone-700 dark:text-stone-300">{{\r
                node.label\r
            }}</span>\r
            <span class="truncate text-[11px] text-stone-400 dark:text-stone-500">{{\r
                node.count !== undefined\r
                    ? ('smartReport.structuralRows' | transloco: { count: node.count })\r
                    : node.sample\r
            }}</span>\r
        </button>\r
\r
        <button\r
            (click)="addNodeSection(node)"\r
            class="shrink-0 rounded p-0.5 text-indigo-500 opacity-0 transition-opacity group-hover:opacity-100"\r
            [matTooltip]="'smartReport.addBoundBlock' | transloco"\r
        >\r
            <mat-icon class="!h-4 !w-4 !text-base">add_circle_outline</mat-icon>\r
        </button>\r
    </div>\r
\r
    @if (node.children?.length && isExpanded(node.path)) {\r
        @for (child of node.children; track child.path) {\r
            <ng-container\r
                [ngTemplateOutlet]="dataNodeRow"\r
                [ngTemplateOutletContext]="{ node: child, depth: depth + 1 }"\r
            ></ng-container>\r
        }\r
    }\r
</ng-template>\r
` }]
  }], () => [], { _samplePreview: [{
    type: ViewChild,
    args: ["samplePreview"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReportBuilderComponent, { className: "ReportBuilderComponent", filePath: "src/app/modules/smart-batch/report-builder/report-builder.component.ts", lineNumber: 117 });
})();
export {
  ReportBuilderComponent
};
//# sourceMappingURL=chunk-LIERJCTH.js.map
