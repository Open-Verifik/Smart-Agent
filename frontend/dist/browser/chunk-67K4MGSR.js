import {
  ScanToolSmartCheckResultComponent
} from "./chunk-IHKUSO6P.js";
import {
  ImagePreviewDialogComponent
} from "./chunk-5BUZNTKT.js";
import {
  MatChipsModule
} from "./chunk-YEP6AUSV.js";
import {
  SmartScanService
} from "./chunk-T477ZOJL.js";
import "./chunk-YSIFJH6G.js";
import {
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger
} from "./chunk-E5CL2DVE.js";
import "./chunk-JURKDGMK.js";
import {
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
  MatPrefix,
  MatSuffix
} from "./chunk-QUFOCOZK.js";
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
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
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
  RouterLink,
  RouterModule
} from "./chunk-QL64NPDU.js";
import "./chunk-3V5B4ZWC.js";
import {
  ChangeDetectorRef,
  CommonModule,
  Component,
  DestroyRef,
  JsonPipe,
  Location,
  LowerCasePipe,
  NgClass,
  NgTemplateOutlet,
  ViewChild,
  inject,
  input,
  output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdeclareLet,
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
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵqueryRefresh,
  ɵɵreadContextLet,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstoreLet,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-YWP2Y7QK.js";
import {
  __async
} from "./chunk-F5M2C4EZ.js";

// src/app/modules/smart-enroll/smart-scan/scan-tool/scan-tool-review-step.component.ts
var _c0 = () => ({ number: 1 });
var _c1 = (a0) => ({ name: a0 });
var _c2 = (a0) => ({ $implicit: a0 });
var _c3 = () => ({ number: 2 });
var _forTrack0 = ($index, $item) => $item.mapKey + $index;
function ScanToolReviewStepComponent_Conditional_24_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "code", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const feature_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(feature_r2.url);
  }
}
function ScanToolReviewStepComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 13);
    \u0275\u0275element(1, "span", 30)(2, "span", 31);
    \u0275\u0275elementStart(3, "span", 32)(4, "mat-icon");
    \u0275\u0275text(5, "verified");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 33)(7, "span", 34);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 35);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, ScanToolReviewStepComponent_Conditional_24_Conditional_13_Template, 2, 1, "code", 36);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const feature_r2 = ctx;
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 3, "smartScan.governmentCheckTitle"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(12, 5, "smartScan.governmentCheckLinked", \u0275\u0275pureFunction1(8, _c1, feature_r2.name)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(feature_r2.url ? 13 : -1);
  }
}
function ScanToolReviewStepComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 14);
    \u0275\u0275element(1, "span", 30)(2, "span", 31);
    \u0275\u0275elementStart(3, "span", 32)(4, "mat-icon");
    \u0275\u0275text(5, "verified");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 33)(7, "span", 34);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 35);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "button", 37);
    \u0275\u0275listener("click", function ScanToolReviewStepComponent_Conditional_25_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.connectCheck.emit());
    });
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 3, "smartScan.governmentCheckTitle"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 5, "smartScan.governmentCheckMissing"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 7, "smartScan.governmentCheckSetup"), " ");
  }
}
function ScanToolReviewStepComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "button", 38);
    \u0275\u0275listener("click", function ScanToolReviewStepComponent_Conditional_31_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.openImagePreview(ctx_r3.documentType().frontImage, ctx_r3.documentType().name));
    });
    \u0275\u0275element(2, "img", 39);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", ctx_r3.documentType().name);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r3.documentType().frontImage, \u0275\u0275sanitizeUrl)("alt", ctx_r3.documentType().name);
  }
}
function ScanToolReviewStepComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "span", 40);
    \u0275\u0275text(2, "Front side preview not available");
    \u0275\u0275elementEnd()();
  }
}
function ScanToolReviewStepComponent_Conditional_33_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "button", 38);
    \u0275\u0275listener("click", function ScanToolReviewStepComponent_Conditional_33_Conditional_0_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.openImagePreview(ctx_r3.documentType().backImage, ctx_r3.documentType().name));
    });
    \u0275\u0275element(2, "img", 39);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", ctx_r3.documentType().name);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r3.documentType().backImage, \u0275\u0275sanitizeUrl)("alt", ctx_r3.documentType().name + " (back)");
  }
}
function ScanToolReviewStepComponent_Conditional_33_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41)(1, "span", 40);
    \u0275\u0275text(2, "Back side preview not available");
    \u0275\u0275elementEnd()();
  }
}
function ScanToolReviewStepComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ScanToolReviewStepComponent_Conditional_33_Conditional_0_Template, 3, 3, "div", 18)(1, ScanToolReviewStepComponent_Conditional_33_Conditional_1_Template, 3, 0, "div", 41);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r3.documentType().backImage ? 0 : 1);
  }
}
function ScanToolReviewStepComponent_Conditional_45_For_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ScanToolReviewStepComponent_Conditional_45_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ScanToolReviewStepComponent_Conditional_45_For_2_ng_container_0_Template, 1, 0, "ng-container", 42);
  }
  if (rf & 2) {
    const field_r7 = ctx.$implicit;
    \u0275\u0275nextContext(2);
    const fieldChip_r8 = \u0275\u0275reference(61);
    \u0275\u0275property("ngTemplateOutlet", fieldChip_r8)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c2, field_r7));
  }
}
function ScanToolReviewStepComponent_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275repeaterCreate(1, ScanToolReviewStepComponent_Conditional_45_For_2_Template, 1, 4, "ng-container", null, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.frontFields());
  }
}
function ScanToolReviewStepComponent_Conditional_46_Conditional_10_For_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ScanToolReviewStepComponent_Conditional_46_Conditional_10_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ScanToolReviewStepComponent_Conditional_46_Conditional_10_For_2_ng_container_0_Template, 1, 0, "ng-container", 42);
  }
  if (rf & 2) {
    const field_r9 = ctx.$implicit;
    \u0275\u0275nextContext(3);
    const fieldChip_r8 = \u0275\u0275reference(61);
    \u0275\u0275property("ngTemplateOutlet", fieldChip_r8)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c2, field_r9));
  }
}
function ScanToolReviewStepComponent_Conditional_46_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275repeaterCreate(1, ScanToolReviewStepComponent_Conditional_46_Conditional_10_For_2_Template, 1, 4, "ng-container", null, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.backFields());
  }
}
function ScanToolReviewStepComponent_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "p", 21);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h4", 22);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 23);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, ScanToolReviewStepComponent_Conditional_46_Conditional_10_Template, 3, 0, "div", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 4, "smartScan.stageLabel", \u0275\u0275pureFunction0(11, _c3)), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 7, "smartScan.backPhotoTitle"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 9, "smartScan.backPhotoHelp"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.backFields().length > 0 ? 10 : -1);
  }
}
function ScanToolReviewStepComponent_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "mat-icon", 43);
    \u0275\u0275text(2, "list_alt");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 40);
    \u0275\u0275text(4, " Field definitions will be available after scanning. ");
    \u0275\u0275elementEnd()();
  }
}
function ScanToolReviewStepComponent_ng_template_60_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 47);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const field_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(field_r10.mapKey);
  }
}
function ScanToolReviewStepComponent_ng_template_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 44)(1, "mat-icon", 45);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 46)(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, ScanToolReviewStepComponent_ng_template_60_Conditional_6_Template, 2, 1, "span", 47);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const field_r10 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(field_r10.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(field_r10.mapKey ? 6 : -1);
  }
}
var ScanToolReviewStepComponent = class _ScanToolReviewStepComponent {
  constructor() {
    this._dialog = inject(MatDialog);
    this.documentType = input.required();
    this.requiresBackSide = input(false);
    this.frontFields = input([]);
    this.backFields = input([]);
    this.flag = input("");
    this.countryLabel = input("");
    this.categoryLabel = input("");
    this.changeDocument = output();
    this.proceed = output();
    this.changeFields = output();
    this.connectCheck = output();
  }
  linkedFeature() {
    const feature = this.documentType().appFeature;
    if (!feature || typeof feature === "string" || !feature.name)
      return null;
    return { name: feature.name, url: feature.url || "" };
  }
  /**
   * Opens the sample photo full screen so it can be zoomed.
   */
  openImagePreview(imageSrc, title) {
    if (!imageSrc)
      return;
    this._dialog.open(ImagePreviewDialogComponent, {
      data: { imageSrc, title },
      panelClass: "image-preview-dialog-panel",
      width: "100%",
      maxWidth: "100vw",
      maxHeight: "100vh",
      height: "100%"
    });
  }
  static {
    this.\u0275fac = function ScanToolReviewStepComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ScanToolReviewStepComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ScanToolReviewStepComponent, selectors: [["scan-tool-review-step"]], inputs: { documentType: [1, "documentType"], requiresBackSide: [1, "requiresBackSide"], frontFields: [1, "frontFields"], backFields: [1, "backFields"], flag: [1, "flag"], countryLabel: [1, "countryLabel"], categoryLabel: [1, "categoryLabel"] }, outputs: { changeDocument: "changeDocument", proceed: "proceed", changeFields: "changeFields", connectCheck: "connectCheck" }, decls: 62, vars: 48, consts: [["fieldChip", ""], [1, "scan-tool-panel", "overflow-hidden"], [1, "space-y-6", "p-6", "md:p-8"], [1, "scan-tool-strip"], [1, "text-base", "leading-none"], [1, "min-w-0", "flex-1"], [1, "text-sm", "font-semibold", "text-stone-900", "dark:text-white"], [1, "text-xs", "text-stone-600", "dark:text-stone-400"], [1, "mt-1", "text-[10px]", "font-semibold", "uppercase", "tracking-wide", "text-stone-400"], ["mat-stroked-button", "", "type", "button", 1, "scan-tool-mat-btn-pill", "shrink-0", "!text-xs", 3, "click"], [1, "text-sm", "text-stone-600", "dark:text-stone-300"], [1, "inline-flex", "items-center", "gap-1", "rounded-full", "px-2.5", "py-1", "text-xs", "font-medium", 3, "ngClass"], [1, "icon-size-3.5"], [1, "gov-check-banner", "gov-check-banner--linked"], [1, "gov-check-banner"], [1, "grid", "grid-cols-1", "gap-0", "divide-y", "divide-stone-100", "overflow-hidden", "rounded-2xl", "border", "border-stone-200/90", "lg:grid-cols-2", "lg:divide-x", "lg:divide-y-0", "dark:divide-gray-800", "dark:border-gray-700"], [1, "space-y-4", "p-6", "md:p-8"], [1, "text-xs", "font-semibold", "uppercase", "tracking-wider", "text-stone-500", "dark:text-stone-400"], [1, "overflow-hidden", "rounded-2xl", "border", "border-stone-200/90", "bg-stone-50/50", "dark:border-gray-700", "dark:bg-gray-950/50"], [1, "flex", "h-40", "items-center", "justify-center", "rounded-2xl", "border", "border-dashed", "border-stone-300", "bg-stone-50/50", "dark:border-gray-600", "dark:bg-gray-950/30"], [1, "rounded-2xl", "border", "border-stone-200/90", "p-4", "dark:border-gray-700"], [1, "text-[0.65rem]", "font-bold", "uppercase", "tracking-[0.14em]", "text-stone-400"], [1, "mt-1", "text-sm", "font-semibold", "text-stone-900", "dark:text-white"], [1, "mt-1", "text-xs", "leading-relaxed", "text-stone-500"], [1, "mt-3", "flex", "flex-wrap", "gap-2"], ["type", "button", 1, "font-semibold", "text-stone-900", "underline", "underline-offset-4", "dark:text-stone-100", 3, "click"], [1, "flex", "flex-col", "items-center", "justify-center", "py-10", "text-center"], [1, "flex", "flex-wrap", "gap-3", "pt-2"], ["mat-flat-button", "", "color", "primary", "type", "button", 1, "scan-tool-mat-btn-pill", 3, "click"], [1, "icon-size-4", "ml-1"], ["aria-hidden", "true", 1, "gov-check-banner__blob", "gov-check-banner__blob--tr"], ["aria-hidden", "true", 1, "gov-check-banner__blob", "gov-check-banner__blob--bl"], ["aria-hidden", "true", 1, "gov-check-banner__icon"], [1, "gov-check-banner__copy"], [1, "gov-check-banner__pill"], [1, "gov-check-banner__title"], [1, "gov-check-banner__url"], ["type", "button", 1, "gov-check-banner__cta", 3, "click"], ["type", "button", 1, "block", "w-full", "cursor-zoom-in", "border-0", "bg-transparent", "p-0", 3, "click"], [1, "max-h-56", "w-full", "object-contain", 3, "src", "alt"], [1, "text-sm", "text-stone-500", "dark:text-stone-400"], [1, "flex", "h-32", "items-center", "justify-center", "rounded-2xl", "border", "border-dashed", "border-stone-300", "bg-stone-50/50", "dark:border-gray-600", "dark:bg-gray-950/30"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "icon-size-10", "mb-2", "text-stone-300", "dark:text-stone-600"], [1, "inline-flex", "items-start", "gap-1.5", "rounded-xl", "border", "border-stone-200/80", "bg-stone-50/80", "px-3", "py-1.5", "text-xs", "font-medium", "text-stone-800", "dark:border-gray-700", "dark:bg-gray-800/50", "dark:text-stone-200"], [1, "icon-size-3.5", "mt-0.5", "text-stone-500", "dark:text-stone-400"], [1, "flex", "min-w-0", "flex-col", "items-start", "leading-tight"], [1, "mt-0.5", "font-mono", "text-[10px]", "font-normal", "text-stone-500", "dark:text-stone-400"]], template: function ScanToolReviewStepComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "span", 4);
        \u0275\u0275text(4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 5)(6, "p", 6);
        \u0275\u0275text(7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p", 7);
        \u0275\u0275text(9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "p", 8);
        \u0275\u0275text(11);
        \u0275\u0275pipe(12, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "button", 9);
        \u0275\u0275listener("click", function ScanToolReviewStepComponent_Template_button_click_13_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.changeDocument.emit());
        });
        \u0275\u0275text(14);
        \u0275\u0275pipe(15, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "p", 10);
        \u0275\u0275text(17);
        \u0275\u0275pipe(18, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "span", 11)(20, "mat-icon", 12);
        \u0275\u0275text(21);
        \u0275\u0275elementEnd();
        \u0275\u0275text(22);
        \u0275\u0275pipe(23, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275template(24, ScanToolReviewStepComponent_Conditional_24_Template, 14, 10, "section", 13)(25, ScanToolReviewStepComponent_Conditional_25_Template, 16, 9, "section", 14);
        \u0275\u0275elementStart(26, "div", 15)(27, "div", 16)(28, "h4", 17);
        \u0275\u0275text(29);
        \u0275\u0275pipe(30, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275template(31, ScanToolReviewStepComponent_Conditional_31_Template, 3, 3, "div", 18)(32, ScanToolReviewStepComponent_Conditional_32_Template, 3, 0, "div", 19)(33, ScanToolReviewStepComponent_Conditional_33_Template, 2, 1);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "div", 16)(35, "div", 20)(36, "p", 21);
        \u0275\u0275text(37);
        \u0275\u0275pipe(38, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "h4", 22);
        \u0275\u0275text(40);
        \u0275\u0275pipe(41, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "p", 23);
        \u0275\u0275text(43);
        \u0275\u0275pipe(44, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275template(45, ScanToolReviewStepComponent_Conditional_45_Template, 3, 0, "div", 24);
        \u0275\u0275elementEnd();
        \u0275\u0275template(46, ScanToolReviewStepComponent_Conditional_46_Template, 11, 12, "div", 20);
        \u0275\u0275elementStart(47, "p", 10);
        \u0275\u0275text(48);
        \u0275\u0275pipe(49, "transloco");
        \u0275\u0275elementStart(50, "button", 25);
        \u0275\u0275listener("click", function ScanToolReviewStepComponent_Template_button_click_50_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.changeFields.emit());
        });
        \u0275\u0275text(51);
        \u0275\u0275pipe(52, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(53, ScanToolReviewStepComponent_Conditional_53_Template, 5, 0, "div", 26);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(54, "div", 27)(55, "button", 28);
        \u0275\u0275listener("click", function ScanToolReviewStepComponent_Template_button_click_55_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.proceed.emit());
        });
        \u0275\u0275text(56);
        \u0275\u0275pipe(57, "transloco");
        \u0275\u0275elementStart(58, "mat-icon", 29);
        \u0275\u0275text(59, "arrow_forward");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275template(60, ScanToolReviewStepComponent_ng_template_60_Template, 7, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        let tmp_10_0;
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.flag());
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate2(" ", ctx.documentType().code, " \u2014 ", ctx.documentType().name, " ");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate2(" ", ctx.countryLabel(), " \xB7 ", ctx.categoryLabel(), " ");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 24, ctx.documentType().client ? "smartScan.yourFields" : "smartScan.verifikFields"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 26, "smartScan.changeDocument"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 28, ctx.requiresBackSide() ? "smartScan.backPhotoHelp" : "smartScan.onePhotoHelp"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngClass", ctx.requiresBackSide() ? "bg-amber-100/90 text-amber-900 dark:bg-amber-950/50 dark:text-amber-200" : "bg-stone-100 text-stone-700 dark:bg-gray-800 dark:text-stone-200");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.requiresBackSide() ? "flip" : "crop_portrait");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(23, 30, ctx.requiresBackSide() ? "smartScan.backRequired" : "smartScan.onePhoto"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional((tmp_10_0 = ctx.linkedFeature()) ? 24 : 25, tmp_10_0);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(30, 32, "smartScan.previewTitle"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.documentType().frontImage ? 31 : 32);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.requiresBackSide() ? 33 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(38, 34, "smartScan.stageLabel", \u0275\u0275pureFunction0(47, _c0)), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(41, 37, "smartScan.frontPhotoTitle"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(44, 39, "smartScan.frontPhotoHelp"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.frontFields().length > 0 ? 45 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.requiresBackSide() ? 46 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(49, 41, "smartScan.changeFieldsPrompt"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(52, 43, "smartScan.changeFieldsAction"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.frontFields().length === 0 && ctx.backFields().length === 0 ? 53 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(57, 45, "smartScan.proceedToScan"), " ");
      }
    }, dependencies: [CommonModule, NgClass, NgTemplateOutlet, MatButtonModule, MatButton, MatIconModule, MatIcon, TranslocoModule, TranslocoPipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.scan-tool-panel[_ngcontent-%COMP%] {\n  overflow: hidden;\n  border-radius: 1.5rem;\n  border-width: 1px;\n  border-color: rgb(231 229 228 / 0.9);\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);\n  box-shadow:\n    var(--tw-ring-offset-shadow, 0 0 #0000),\n    var(--tw-ring-shadow, 0 0 #0000),\n    var(--tw-shadow);\n}\n.scan-tool-panel[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(51 65 85 / var(--tw-border-opacity, 1));\n  background-color: rgb(15 23 42 / 0.5);\n}\n.scan-tool-panel[_ngcontent-%COMP%] {\n  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);\n}\n.scan-tool-strip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  border-radius: 1rem;\n  border-width: 1px;\n  border-color: rgb(231 229 228 / 0.9);\n  background-color: rgb(250 250 249 / 0.8);\n  padding: 1rem;\n}\n.scan-tool-strip[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(51 65 85 / var(--tw-border-opacity, 1));\n  background-color: rgb(15 23 42 / 0.4);\n}\n.gov-check-banner[_ngcontent-%COMP%] {\n  --banner-from: 238 242 255;\n  --banner-mid: 245 243 255;\n  --banner-to: 250 245 255;\n  --banner-border: 199 210 254;\n  --banner-accent: 79 70 229;\n  --banner-accent-2: 147 51 234;\n  --banner-icon: 67 56 202;\n  --banner-icon-2: 91 33 182;\n  --banner-ink: 30 27 75;\n  --banner-muted: 67 56 202;\n  position: relative;\n  isolation: isolate;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 12px 16px;\n  overflow: hidden;\n  padding: 16px;\n  border: 1px solid rgb(var(--banner-border)/0.85);\n  border-radius: 16px;\n  background:\n    linear-gradient(\n      105deg,\n      rgb(var(--banner-from)/0.95) 0%,\n      rgb(var(--banner-mid)/0.98) 45%,\n      rgb(var(--banner-to)/0.96) 100%);\n  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04), 0 12px 28px -18px rgb(var(--banner-accent)/0.55);\n}\n.gov-check-banner--linked[_ngcontent-%COMP%] {\n  --banner-from: 236 253 245;\n  --banner-mid: 240 253 250;\n  --banner-to: 255 255 255;\n  --banner-border: 167 243 208;\n  --banner-accent: 5 150 105;\n  --banner-accent-2: 13 148 136;\n  --banner-icon: 4 120 87;\n  --banner-icon-2: 6 95 70;\n  --banner-ink: 6 78 59;\n  --banner-muted: 4 120 87;\n}\n.gov-check-banner__blob[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 0;\n  border-radius: 50%;\n  pointer-events: none;\n  filter: blur(48px);\n  opacity: 0.34;\n}\n.gov-check-banner__blob--tr[_ngcontent-%COMP%] {\n  top: -64px;\n  right: -28px;\n  width: 150px;\n  height: 150px;\n  background:\n    radial-gradient(\n      circle,\n      rgb(var(--banner-accent)/0.95) 0%,\n      rgb(var(--banner-accent-2)) 55%,\n      transparent 100%);\n}\n.gov-check-banner__blob--bl[_ngcontent-%COMP%] {\n  bottom: -48px;\n  left: -24px;\n  width: 120px;\n  height: 120px;\n  background:\n    radial-gradient(\n      circle,\n      rgb(var(--banner-accent-2)/0.9) 0%,\n      rgb(var(--banner-accent)) 55%,\n      transparent 100%);\n}\n.gov-check-banner__icon[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: grid;\n  place-items: center;\n  flex: 0 0 auto;\n  width: 44px;\n  height: 44px;\n  border-radius: 14px;\n  background:\n    linear-gradient(\n      145deg,\n      rgb(var(--banner-icon)) 0%,\n      rgb(var(--banner-icon-2)) 100%);\n  color: #fff;\n  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.28), 0 10px 18px -10px rgb(var(--banner-icon)/0.9);\n}\n.gov-check-banner__icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n  min-width: 22px;\n  min-height: 22px;\n  font-size: 22px;\n  line-height: 22px;\n  color: #fff !important;\n}\n.gov-check-banner__copy[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  flex: 1 1 16rem;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 5px;\n  min-width: 0;\n}\n.gov-check-banner__pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  border: 1px solid rgb(var(--banner-accent)/0.25);\n  border-radius: 999px;\n  background: rgb(var(--banner-accent)/0.08);\n  padding: 2px 10px;\n  color: rgb(var(--banner-muted));\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.06em;\n  line-height: 1.4;\n  text-transform: uppercase;\n}\n.gov-check-banner__title[_ngcontent-%COMP%] {\n  margin: 0;\n  color: rgb(var(--banner-ink));\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 1.4;\n}\n.gov-check-banner__url[_ngcontent-%COMP%] {\n  color: rgb(var(--banner-muted));\n  font-family:\n    ui-monospace,\n    SFMono-Regular,\n    Menlo,\n    monospace;\n  font-size: 12px;\n}\n.gov-check-banner__cta[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  min-height: 36px;\n  padding: 0 14px;\n  border: 0;\n  border-radius: 10px;\n  background:\n    linear-gradient(\n      135deg,\n      rgb(var(--banner-accent)) 0%,\n      rgb(var(--banner-accent-2)) 100%);\n  color: #fff;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  box-shadow: 0 8px 16px -10px rgb(var(--banner-accent)/0.9);\n}\n.dark[_nghost-%COMP%]   .gov-check-banner[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .gov-check-banner[_ngcontent-%COMP%] {\n  --banner-from: 30 41 59;\n  --banner-mid: 30 27 75;\n  --banner-to: 49 46 129;\n  --banner-border: 67 56 202;\n  --banner-ink: 238 242 255;\n  --banner-muted: 199 210 254;\n  background:\n    linear-gradient(\n      105deg,\n      rgb(var(--banner-from)/0.92) 0%,\n      rgb(var(--banner-mid)/0.55) 50%,\n      rgb(var(--banner-to)/0.35) 100%);\n  border-color: rgb(var(--banner-border)/0.45);\n}\n.dark[_nghost-%COMP%]   .gov-check-banner--linked[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .gov-check-banner--linked[_ngcontent-%COMP%] {\n  --banner-from: 6 78 59;\n  --banner-mid: 15 23 42;\n  --banner-to: 19 78 74;\n  --banner-border: 6 95 70;\n  --banner-accent: 52 211 153;\n  --banner-accent-2: 45 212 191;\n  --banner-icon: 6 95 70;\n  --banner-icon-2: 4 120 87;\n  --banner-ink: 236 253 245;\n  --banner-muted: 167 243 208;\n}\n[_nghost-%COMP%]     .scan-tool-mat-btn-pill.mat-mdc-unelevated-button, \n[_nghost-%COMP%]     .scan-tool-mat-btn-pill.mat-mdc-outlined-button {\n  border-radius: 9999px;\n}\n/*# sourceMappingURL=scan-tool-review-step.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScanToolReviewStepComponent, [{
    type: Component,
    args: [{ selector: "scan-tool-review-step", standalone: true, imports: [CommonModule, MatButtonModule, MatIconModule, TranslocoModule], template: `<div class="scan-tool-panel overflow-hidden">\r
    <div class="space-y-6 p-6 md:p-8">\r
        <div class="scan-tool-strip">\r
            <span class="text-base leading-none">{{ flag() }}</span>\r
            <div class="min-w-0 flex-1">\r
                <p class="text-sm font-semibold text-stone-900 dark:text-white">\r
                    {{ documentType().code }} \u2014 {{ documentType().name }}\r
                </p>\r
                <p class="text-xs text-stone-600 dark:text-stone-400">\r
                    {{ countryLabel() }} \xB7 {{ categoryLabel() }}\r
                </p>\r
                <p class="mt-1 text-[10px] font-semibold uppercase tracking-wide text-stone-400">\r
                    {{ (documentType().client ? 'smartScan.yourFields' : 'smartScan.verifikFields') | transloco }}\r
                </p>\r
            </div>\r
            <button\r
                mat-stroked-button\r
                type="button"\r
                (click)="changeDocument.emit()"\r
                class="scan-tool-mat-btn-pill shrink-0 !text-xs"\r
            >\r
                {{ 'smartScan.changeDocument' | transloco }}\r
            </button>\r
        </div>\r
\r
        <p class="text-sm text-stone-600 dark:text-stone-300">\r
            {{ (requiresBackSide() ? 'smartScan.backPhotoHelp' : 'smartScan.onePhotoHelp') | transloco }}\r
        </p>\r
        <span\r
            class="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium"\r
            [ngClass]="requiresBackSide()\r
                ? 'bg-amber-100/90 text-amber-900 dark:bg-amber-950/50 dark:text-amber-200'\r
                : 'bg-stone-100 text-stone-700 dark:bg-gray-800 dark:text-stone-200'"\r
        >\r
            <mat-icon class="icon-size-3.5">{{ requiresBackSide() ? 'flip' : 'crop_portrait' }}</mat-icon>\r
            {{ (requiresBackSide() ? 'smartScan.backRequired' : 'smartScan.onePhoto') | transloco }}\r
        </span>\r
\r
        @if (linkedFeature(); as feature) {\r
            <section class="gov-check-banner gov-check-banner--linked">\r
                <span class="gov-check-banner__blob gov-check-banner__blob--tr" aria-hidden="true"></span>\r
                <span class="gov-check-banner__blob gov-check-banner__blob--bl" aria-hidden="true"></span>\r
                <span class="gov-check-banner__icon" aria-hidden="true">\r
                    <mat-icon>verified</mat-icon>\r
                </span>\r
                <div class="gov-check-banner__copy">\r
                    <span class="gov-check-banner__pill">{{ 'smartScan.governmentCheckTitle' | transloco }}</span>\r
                    <p class="gov-check-banner__title">\r
                        {{ 'smartScan.governmentCheckLinked' | transloco: { name: feature.name } }}\r
                    </p>\r
                    @if (feature.url) {\r
                        <code class="gov-check-banner__url">{{ feature.url }}</code>\r
                    }\r
                </div>\r
            </section>\r
        } @else {\r
            <section class="gov-check-banner">\r
                <span class="gov-check-banner__blob gov-check-banner__blob--tr" aria-hidden="true"></span>\r
                <span class="gov-check-banner__blob gov-check-banner__blob--bl" aria-hidden="true"></span>\r
                <span class="gov-check-banner__icon" aria-hidden="true">\r
                    <mat-icon>verified</mat-icon>\r
                </span>\r
                <div class="gov-check-banner__copy">\r
                    <span class="gov-check-banner__pill">{{ 'smartScan.governmentCheckTitle' | transloco }}</span>\r
                    <p class="gov-check-banner__title">\r
                        {{ 'smartScan.governmentCheckMissing' | transloco }}\r
                    </p>\r
                </div>\r
                <button type="button" class="gov-check-banner__cta" (click)="connectCheck.emit()">\r
                    {{ 'smartScan.governmentCheckSetup' | transloco }}\r
                </button>\r
            </section>\r
        }\r
\r
        <div\r
            class="grid grid-cols-1 gap-0 divide-y divide-stone-100 overflow-hidden rounded-2xl border border-stone-200/90 lg:grid-cols-2 lg:divide-x lg:divide-y-0 dark:divide-gray-800 dark:border-gray-700"\r
        >\r
            <div class="space-y-4 p-6 md:p-8">\r
                <h4 class="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400">\r
                    {{ 'smartScan.previewTitle' | transloco }}\r
                </h4>\r
                @if (documentType().frontImage) {\r
                    <div class="overflow-hidden rounded-2xl border border-stone-200/90 bg-stone-50/50 dark:border-gray-700 dark:bg-gray-950/50">\r
                        <button\r
                            type="button"\r
                            class="block w-full cursor-zoom-in border-0 bg-transparent p-0"\r
                            [attr.aria-label]="documentType().name"\r
                            (click)="openImagePreview(documentType().frontImage, documentType().name)"\r
                        >\r
                            <img\r
                                [src]="documentType().frontImage"\r
                                [alt]="documentType().name"\r
                                class="max-h-56 w-full object-contain"\r
                            />\r
                        </button>\r
                    </div>\r
                } @else {\r
                    <div class="flex h-40 items-center justify-center rounded-2xl border border-dashed border-stone-300 bg-stone-50/50 dark:border-gray-600 dark:bg-gray-950/30">\r
                        <span class="text-sm text-stone-500 dark:text-stone-400">Front side preview not available</span>\r
                    </div>\r
                }\r
                @if (requiresBackSide()) {\r
                    @if (documentType().backImage) {\r
                        <div class="overflow-hidden rounded-2xl border border-stone-200/90 bg-stone-50/50 dark:border-gray-700 dark:bg-gray-950/50">\r
                            <button\r
                                type="button"\r
                                class="block w-full cursor-zoom-in border-0 bg-transparent p-0"\r
                                [attr.aria-label]="documentType().name"\r
                                (click)="openImagePreview(documentType().backImage, documentType().name)"\r
                            >\r
                                <img\r
                                    [src]="documentType().backImage"\r
                                    [alt]="documentType().name + ' (back)'"\r
                                    class="max-h-56 w-full object-contain"\r
                                />\r
                            </button>\r
                        </div>\r
                    } @else {\r
                        <div class="flex h-32 items-center justify-center rounded-2xl border border-dashed border-stone-300 bg-stone-50/50 dark:border-gray-600 dark:bg-gray-950/30">\r
                            <span class="text-sm text-stone-500 dark:text-stone-400">Back side preview not available</span>\r
                        </div>\r
                    }\r
                }\r
            </div>\r
\r
            <div class="space-y-4 p-6 md:p-8">\r
                <div class="rounded-2xl border border-stone-200/90 p-4 dark:border-gray-700">\r
                    <p class="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-stone-400">\r
                        {{ 'smartScan.stageLabel' | transloco: { number: 1 } }}\r
                    </p>\r
                    <h4 class="mt-1 text-sm font-semibold text-stone-900 dark:text-white">\r
                        {{ 'smartScan.frontPhotoTitle' | transloco }}\r
                    </h4>\r
                    <p class="mt-1 text-xs leading-relaxed text-stone-500">\r
                        {{ 'smartScan.frontPhotoHelp' | transloco }}\r
                    </p>\r
                    @if (frontFields().length > 0) {\r
                        <div class="mt-3 flex flex-wrap gap-2">\r
                            @for (field of frontFields(); track field.mapKey + $index) {\r
                                <ng-container *ngTemplateOutlet="fieldChip; context: { $implicit: field }" />\r
                            }\r
                        </div>\r
                    }\r
                </div>\r
                @if (requiresBackSide()) {\r
                    <div class="rounded-2xl border border-stone-200/90 p-4 dark:border-gray-700">\r
                        <p class="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-stone-400">\r
                            {{ 'smartScan.stageLabel' | transloco: { number: 2 } }}\r
                        </p>\r
                        <h4 class="mt-1 text-sm font-semibold text-stone-900 dark:text-white">\r
                            {{ 'smartScan.backPhotoTitle' | transloco }}\r
                        </h4>\r
                        <p class="mt-1 text-xs leading-relaxed text-stone-500">\r
                            {{ 'smartScan.backPhotoHelp' | transloco }}\r
                        </p>\r
                        @if (backFields().length > 0) {\r
                            <div class="mt-3 flex flex-wrap gap-2">\r
                                @for (field of backFields(); track field.mapKey + $index) {\r
                                    <ng-container *ngTemplateOutlet="fieldChip; context: { $implicit: field }" />\r
                                }\r
                            </div>\r
                        }\r
                    </div>\r
                }\r
                <p class="text-sm text-stone-600 dark:text-stone-300">\r
                    {{ 'smartScan.changeFieldsPrompt' | transloco }}\r
                    <button\r
                        type="button"\r
                        class="font-semibold text-stone-900 underline underline-offset-4 dark:text-stone-100"\r
                        (click)="changeFields.emit()"\r
                    >\r
                        {{ 'smartScan.changeFieldsAction' | transloco }}\r
                    </button>\r
                </p>\r
                @if (frontFields().length === 0 && backFields().length === 0) {\r
                    <div class="flex flex-col items-center justify-center py-10 text-center">\r
                        <mat-icon class="icon-size-10 mb-2 text-stone-300 dark:text-stone-600">list_alt</mat-icon>\r
                        <p class="text-sm text-stone-500 dark:text-stone-400">\r
                            Field definitions will be available after scanning.\r
                        </p>\r
                    </div>\r
                }\r
            </div>\r
        </div>\r
\r
        <div class="flex flex-wrap gap-3 pt-2">\r
            <button mat-flat-button color="primary" type="button" (click)="proceed.emit()" class="scan-tool-mat-btn-pill">\r
                {{ 'smartScan.proceedToScan' | transloco }}\r
                <mat-icon class="icon-size-4 ml-1">arrow_forward</mat-icon>\r
            </button>\r
        </div>\r
    </div>\r
</div>\r
\r
<ng-template #fieldChip let-field>\r
    <span\r
        class="inline-flex items-start gap-1.5 rounded-xl border border-stone-200/80 bg-stone-50/80 px-3 py-1.5 text-xs font-medium text-stone-800 dark:border-gray-700 dark:bg-gray-800/50 dark:text-stone-200"\r
    >\r
        <mat-icon class="icon-size-3.5 mt-0.5 text-stone-500 dark:text-stone-400">check_circle</mat-icon>\r
        <span class="flex min-w-0 flex-col items-start leading-tight">\r
            <span>{{ field.name }}</span>\r
            @if (field.mapKey) {\r
                <span class="mt-0.5 font-mono text-[10px] font-normal text-stone-500 dark:text-stone-400">{{ field.mapKey }}</span>\r
            }\r
        </span>\r
    </span>\r
</ng-template>\r
`, styles: ["/* src/app/modules/smart-enroll/smart-scan/scan-tool/scan-tool-review-step.component.scss */\n:host {\n  display: block;\n}\n.scan-tool-panel {\n  overflow: hidden;\n  border-radius: 1.5rem;\n  border-width: 1px;\n  border-color: rgb(231 229 228 / 0.9);\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);\n  box-shadow:\n    var(--tw-ring-offset-shadow, 0 0 #0000),\n    var(--tw-ring-shadow, 0 0 #0000),\n    var(--tw-shadow);\n}\n.scan-tool-panel:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(51 65 85 / var(--tw-border-opacity, 1));\n  background-color: rgb(15 23 42 / 0.5);\n}\n.scan-tool-panel {\n  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);\n}\n.scan-tool-strip {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  border-radius: 1rem;\n  border-width: 1px;\n  border-color: rgb(231 229 228 / 0.9);\n  background-color: rgb(250 250 249 / 0.8);\n  padding: 1rem;\n}\n.scan-tool-strip:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(51 65 85 / var(--tw-border-opacity, 1));\n  background-color: rgb(15 23 42 / 0.4);\n}\n.gov-check-banner {\n  --banner-from: 238 242 255;\n  --banner-mid: 245 243 255;\n  --banner-to: 250 245 255;\n  --banner-border: 199 210 254;\n  --banner-accent: 79 70 229;\n  --banner-accent-2: 147 51 234;\n  --banner-icon: 67 56 202;\n  --banner-icon-2: 91 33 182;\n  --banner-ink: 30 27 75;\n  --banner-muted: 67 56 202;\n  position: relative;\n  isolation: isolate;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 12px 16px;\n  overflow: hidden;\n  padding: 16px;\n  border: 1px solid rgb(var(--banner-border)/0.85);\n  border-radius: 16px;\n  background:\n    linear-gradient(\n      105deg,\n      rgb(var(--banner-from)/0.95) 0%,\n      rgb(var(--banner-mid)/0.98) 45%,\n      rgb(var(--banner-to)/0.96) 100%);\n  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04), 0 12px 28px -18px rgb(var(--banner-accent)/0.55);\n}\n.gov-check-banner--linked {\n  --banner-from: 236 253 245;\n  --banner-mid: 240 253 250;\n  --banner-to: 255 255 255;\n  --banner-border: 167 243 208;\n  --banner-accent: 5 150 105;\n  --banner-accent-2: 13 148 136;\n  --banner-icon: 4 120 87;\n  --banner-icon-2: 6 95 70;\n  --banner-ink: 6 78 59;\n  --banner-muted: 4 120 87;\n}\n.gov-check-banner__blob {\n  position: absolute;\n  z-index: 0;\n  border-radius: 50%;\n  pointer-events: none;\n  filter: blur(48px);\n  opacity: 0.34;\n}\n.gov-check-banner__blob--tr {\n  top: -64px;\n  right: -28px;\n  width: 150px;\n  height: 150px;\n  background:\n    radial-gradient(\n      circle,\n      rgb(var(--banner-accent)/0.95) 0%,\n      rgb(var(--banner-accent-2)) 55%,\n      transparent 100%);\n}\n.gov-check-banner__blob--bl {\n  bottom: -48px;\n  left: -24px;\n  width: 120px;\n  height: 120px;\n  background:\n    radial-gradient(\n      circle,\n      rgb(var(--banner-accent-2)/0.9) 0%,\n      rgb(var(--banner-accent)) 55%,\n      transparent 100%);\n}\n.gov-check-banner__icon {\n  position: relative;\n  z-index: 1;\n  display: grid;\n  place-items: center;\n  flex: 0 0 auto;\n  width: 44px;\n  height: 44px;\n  border-radius: 14px;\n  background:\n    linear-gradient(\n      145deg,\n      rgb(var(--banner-icon)) 0%,\n      rgb(var(--banner-icon-2)) 100%);\n  color: #fff;\n  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.28), 0 10px 18px -10px rgb(var(--banner-icon)/0.9);\n}\n.gov-check-banner__icon mat-icon {\n  width: 22px;\n  height: 22px;\n  min-width: 22px;\n  min-height: 22px;\n  font-size: 22px;\n  line-height: 22px;\n  color: #fff !important;\n}\n.gov-check-banner__copy {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  flex: 1 1 16rem;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 5px;\n  min-width: 0;\n}\n.gov-check-banner__pill {\n  display: inline-flex;\n  align-items: center;\n  border: 1px solid rgb(var(--banner-accent)/0.25);\n  border-radius: 999px;\n  background: rgb(var(--banner-accent)/0.08);\n  padding: 2px 10px;\n  color: rgb(var(--banner-muted));\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.06em;\n  line-height: 1.4;\n  text-transform: uppercase;\n}\n.gov-check-banner__title {\n  margin: 0;\n  color: rgb(var(--banner-ink));\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 1.4;\n}\n.gov-check-banner__url {\n  color: rgb(var(--banner-muted));\n  font-family:\n    ui-monospace,\n    SFMono-Regular,\n    Menlo,\n    monospace;\n  font-size: 12px;\n}\n.gov-check-banner__cta {\n  position: relative;\n  z-index: 1;\n  min-height: 36px;\n  padding: 0 14px;\n  border: 0;\n  border-radius: 10px;\n  background:\n    linear-gradient(\n      135deg,\n      rgb(var(--banner-accent)) 0%,\n      rgb(var(--banner-accent-2)) 100%);\n  color: #fff;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  box-shadow: 0 8px 16px -10px rgb(var(--banner-accent)/0.9);\n}\n:host-context(.dark) .gov-check-banner {\n  --banner-from: 30 41 59;\n  --banner-mid: 30 27 75;\n  --banner-to: 49 46 129;\n  --banner-border: 67 56 202;\n  --banner-ink: 238 242 255;\n  --banner-muted: 199 210 254;\n  background:\n    linear-gradient(\n      105deg,\n      rgb(var(--banner-from)/0.92) 0%,\n      rgb(var(--banner-mid)/0.55) 50%,\n      rgb(var(--banner-to)/0.35) 100%);\n  border-color: rgb(var(--banner-border)/0.45);\n}\n:host-context(.dark) .gov-check-banner--linked {\n  --banner-from: 6 78 59;\n  --banner-mid: 15 23 42;\n  --banner-to: 19 78 74;\n  --banner-border: 6 95 70;\n  --banner-accent: 52 211 153;\n  --banner-accent-2: 45 212 191;\n  --banner-icon: 6 95 70;\n  --banner-icon-2: 4 120 87;\n  --banner-ink: 236 253 245;\n  --banner-muted: 167 243 208;\n}\n:host ::ng-deep .scan-tool-mat-btn-pill.mat-mdc-unelevated-button,\n:host ::ng-deep .scan-tool-mat-btn-pill.mat-mdc-outlined-button {\n  border-radius: 9999px;\n}\n/*# sourceMappingURL=scan-tool-review-step.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ScanToolReviewStepComponent, { className: "ScanToolReviewStepComponent", filePath: "src/app/modules/smart-enroll/smart-scan/scan-tool/scan-tool-review-step.component.ts", lineNumber: 17 });
})();

// src/app/modules/smart-enroll/smart-scan/scan-tool/scan-tool.component.ts
var _c02 = ["frontInput"];
var _c12 = ["backInput"];
var _c22 = ["editMenuTrigger"];
var _c32 = (a0, a1, a2) => ({ "border-stone-900 bg-stone-900 text-white dark:border-stone-100 dark:bg-stone-100 dark:text-stone-900": a0, "border-stone-200 bg-white text-stone-700 dark:border-gray-700 dark:bg-gray-900 dark:text-stone-200": a1, "border-stone-200/80 bg-stone-50 text-stone-400 dark:border-gray-800 dark:bg-gray-950 dark:text-stone-500": a2 });
var _c4 = () => ["/smart-enroll/smart-scan/document-type/new"];
var _c5 = (a0) => ({ country: a0 });
var _c6 = (a0, a1) => ({ "bg-emerald-50/80 dark:bg-emerald-950/30": a0, "bg-amber-50/80 dark:bg-amber-950/30": a1 });
var _c7 = (a0, a1) => ({ "text-emerald-600 dark:text-emerald-400": a0, "text-amber-600 dark:text-amber-400": a1 });
var _c8 = (a0, a1) => ({ "text-emerald-900 dark:text-emerald-200": a0, "text-amber-900 dark:text-amber-200": a1 });
var _c9 = (a0, a1) => ({ "border-emerald-300 bg-emerald-100/80 text-emerald-900 dark:border-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-100": a0, "border-amber-300 bg-amber-100/80 text-amber-900 dark:border-amber-800 dark:bg-amber-900/40 dark:text-amber-100": a1 });
var _c10 = (a0, a1, a2) => ({ "bg-emerald-500": a0, "bg-amber-500": a1, "bg-red-500": a2 });
var _c11 = (a0, a1, a2) => ({ "text-emerald-800 dark:text-emerald-300": a0, "text-amber-800 dark:text-amber-300": a1, "text-red-800 dark:text-red-300": a2 });
var _c122 = (a0, a1) => ({ "border-emerald-200/80 hover:bg-emerald-100/40 dark:border-emerald-900/40 dark:hover:bg-emerald-900/20": a0, "border-amber-200/80 hover:bg-amber-100/40 dark:border-amber-900/40 dark:hover:bg-amber-900/20": a1 });
var _c13 = (a0) => ({ "rotate-90": a0 });
var _c14 = (a0) => ({ "bg-stone-50/80 dark:bg-gray-800/40": a0 });
var _forTrack02 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.documentType._id;
var _forTrack2 = ($index, $item) => $item._id;
var _forTrack3 = ($index, $item) => $item.key;
function ScanToolComponent_For_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 20)(1, "button", 27);
    \u0275\u0275listener("click", function ScanToolComponent_For_33_Template_button_click_1_listener() {
      const s_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.goToFlowStep(s_r3.id));
    });
    \u0275\u0275elementStart(2, "span", 28);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 29);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const s_r3 = ctx.$implicit;
    const \u0275$index_49_r5 = ctx.$index;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r3.canOpenFlowStep(s_r3.id))("ngClass", \u0275\u0275pureFunction3(8, _c32, ctx_r3.isFlowStepCurrent(s_r3.id), ctx_r3.isFlowStepDone(s_r3.id), !ctx_r3.isFlowStepCurrent(s_r3.id) && !ctx_r3.isFlowStepDone(s_r3.id)));
    \u0275\u0275attribute("aria-current", ctx_r3.isFlowStepCurrent(s_r3.id) ? "step" : null);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r3.isFlowStepCurrent(s_r3.id) ? "bg-white text-stone-900 dark:bg-stone-900 dark:text-white" : "bg-stone-200 text-stone-700 dark:bg-gray-800 dark:text-stone-200");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275$index_49_r5 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 6, s_r3.labelKey));
  }
}
function ScanToolComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.errorMessage, " ");
  }
}
function ScanToolComponent_Conditional_35_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275element(1, "mat-progress-spinner", 49);
    \u0275\u0275elementEnd();
  }
}
function ScanToolComponent_Conditional_35_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 36);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "smartScan.yourDocumentsEmpty"), " ");
  }
}
function ScanToolComponent_Conditional_35_Conditional_16_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 54);
  }
  if (rf & 2) {
    const row_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", row_r7.documentType.backImage, \u0275\u0275sanitizeUrl)("alt", row_r7.documentType.name + " (back)");
  }
}
function ScanToolComponent_Conditional_35_Conditional_16_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 54);
  }
  if (rf & 2) {
    const row_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", row_r7.documentType.frontImage, \u0275\u0275sanitizeUrl)("alt", row_r7.documentType.name);
  }
}
function ScanToolComponent_Conditional_35_Conditional_16_For_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55);
    \u0275\u0275element(1, "mat-icon", 67);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("svgIcon", "heroicons_outline:identification");
  }
}
function ScanToolComponent_Conditional_35_Conditional_16_For_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 68);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275listener("click", function ScanToolComponent_Conditional_35_Conditional_16_For_2_Conditional_6_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const row_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.editDocumentType(row_r7.documentType, $event));
    });
    \u0275\u0275elementStart(2, "mat-icon", 69);
    \u0275\u0275text(3, "edit");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 1, "smartScan.editDocumentType"));
  }
}
function ScanToolComponent_Conditional_35_Conditional_16_For_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 70);
    \u0275\u0275listener("click", function ScanToolComponent_Conditional_35_Conditional_16_For_2_Conditional_7_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const row_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.flipCard(row_r7.documentType._id, $event));
    });
    \u0275\u0275elementStart(1, "mat-icon", 69);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.flippedCardId === row_r7.documentType._id ? "flip_to_front" : "flip");
  }
}
function ScanToolComponent_Conditional_35_Conditional_16_For_2_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\xB7");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.getCategoryLabel(row_r7.documentType.category));
  }
}
function ScanToolComponent_Conditional_35_Conditional_16_For_2_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 71);
    \u0275\u0275listener("click", function ScanToolComponent_Conditional_35_Conditional_16_For_2_Conditional_26_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const row_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.useMyFields(row_r7.documentType, $event));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "smartScan.useMyFields"), " ");
  }
}
function ScanToolComponent_Conditional_35_Conditional_16_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275listener("click", function ScanToolComponent_Conditional_35_Conditional_16_For_2_Template_div_click_0_listener() {
      const row_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.selectDocumentType(row_r7.documentType));
    })("contextmenu", function ScanToolComponent_Conditional_35_Conditional_16_For_2_Template_div_contextmenu_0_listener($event) {
      const row_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.onOwnedCardContextMenu($event, row_r7.documentType));
    });
    \u0275\u0275elementStart(1, "div", 52)(2, "div", 53);
    \u0275\u0275template(3, ScanToolComponent_Conditional_35_Conditional_16_For_2_Conditional_3_Template, 1, 2, "img", 54)(4, ScanToolComponent_Conditional_35_Conditional_16_For_2_Conditional_4_Template, 1, 2, "img", 54)(5, ScanToolComponent_Conditional_35_Conditional_16_For_2_Conditional_5_Template, 2, 1, "div", 55)(6, ScanToolComponent_Conditional_35_Conditional_16_For_2_Conditional_6_Template, 4, 3, "button", 56)(7, ScanToolComponent_Conditional_35_Conditional_16_For_2_Conditional_7_Template, 3, 1, "button", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 58)(9, "div", 59)(10, "span", 60);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 61);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p", 62);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 63)(18, "span", 64);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275template(22, ScanToolComponent_Conditional_35_Conditional_16_For_2_Conditional_22_Template, 4, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "p", 65);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(26, ScanToolComponent_Conditional_35_Conditional_16_For_2_Conditional_26_Template, 3, 3, "button", 66);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r7 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r3.flippedCardId === row_r7.documentType._id && row_r7.documentType.backImage ? 3 : row_r7.documentType.frontImage ? 4 : 5);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(row_r7.documentType.client ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r7.documentType.backImage ? 7 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(row_r7.documentType.code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 12, row_r7.owned ? "smartScan.yourFields" : "smartScan.verifikFields"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", row_r7.documentType.name, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.getFlag(row_r7.documentType.country || row_r7.country));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.getCountryLabel(row_r7.documentType.country || row_r7.country));
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r7.documentType.category ? 22 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(25, 14, "smartScan.lastUsed"), " ", ctx_r3.formatLastUsed(row_r7.lastUsedAt), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!row_r7.owned ? 26 : -1);
  }
}
function ScanToolComponent_Conditional_35_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275repeaterCreate(1, ScanToolComponent_Conditional_35_Conditional_16_For_2_Template, 27, 16, "div", 50, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.recentTypes);
  }
}
function ScanToolComponent_Conditional_35_Conditional_34_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 73);
    \u0275\u0275listener("click", function ScanToolComponent_Conditional_35_Conditional_34_For_2_Template_button_click_0_listener() {
      const c_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.toggleCountry(c_r12));
    });
    \u0275\u0275elementStart(1, "span", 64);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r12 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("scan-tool-pill--active", ctx_r3.selectedCountry === c_r12);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.getFlag(c_r12));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.getCountryLabel(c_r12));
  }
}
function ScanToolComponent_Conditional_35_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275repeaterCreate(1, ScanToolComponent_Conditional_35_Conditional_34_For_2_Template, 5, 4, "button", 72, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.countries);
  }
}
function ScanToolComponent_Conditional_35_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 44)(1, "span", 74)(2, "span", 64);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 75);
    \u0275\u0275listener("click", function ScanToolComponent_Conditional_35_Conditional_35_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.openCountryPicker());
    });
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.getFlag(ctx_r3.selectedCountry));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.getCountryLabel(ctx_r3.selectedCountry));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 3, "smartScan.changeCountry"), " ");
  }
}
function ScanToolComponent_Conditional_35_Conditional_36_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 85);
    \u0275\u0275listener("click", function ScanToolComponent_Conditional_35_Conditional_36_Conditional_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.searchQuery = "");
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function ScanToolComponent_Conditional_35_Conditional_36_For_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 83);
    \u0275\u0275listener("click", function ScanToolComponent_Conditional_35_Conditional_36_For_20_Template_button_click_0_listener() {
      const cat_r17 = \u0275\u0275restoreView(_r16).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.toggleCategory(cat_r17));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r17 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("scan-tool-text-filter--active", ctx_r3.selectedCategory === cat_r17);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.getCategoryLabel(cat_r17), " ");
  }
}
function ScanToolComponent_Conditional_35_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "mat-form-field", 76)(2, "mat-icon", 77);
    \u0275\u0275text(3, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 78);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275twoWayListener("ngModelChange", function ScanToolComponent_Conditional_35_Conditional_36_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r3 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r3.searchQuery, $event) || (ctx_r3.searchQuery = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, ScanToolComponent_Conditional_35_Conditional_36_Conditional_6_Template, 3, 0, "button", 79);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 22)(8, "div", 80)(9, "button", 81);
    \u0275\u0275listener("click", function ScanToolComponent_Conditional_35_Conditional_36_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.toggleMine(false));
    });
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 81);
    \u0275\u0275listener("click", function ScanToolComponent_Conditional_35_Conditional_36_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.toggleMine(true));
    });
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 82)(16, "button", 83);
    \u0275\u0275listener("click", function ScanToolComponent_Conditional_35_Conditional_36_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.selectedCategory = "");
    });
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(19, ScanToolComponent_Conditional_35_Conditional_36_For_20_Template, 2, 3, "button", 84, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.searchQuery);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(5, 12, "smartScan.searchPlaceholder"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.searchQuery ? 6 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("scan-tool-segment__option--active", !ctx_r3.showMine);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 14, "smartScan.mineFilterAll"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("scan-tool-segment__option--active", ctx_r3.showMine);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 16, "smartScan.mineFilterMine"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("scan-tool-text-filter--active", !ctx_r3.selectedCategory);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 18, "smartScan.allCategories"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r3.categories);
  }
}
function ScanToolComponent_Conditional_35_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 46);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275pipe(3, "lowercase");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r3.filteredDocumentTypes.length, " ", \u0275\u0275pipeBind1(3, 4, \u0275\u0275pipeBind1(2, 2, "smartScan.results")), " ");
  }
}
function ScanToolComponent_Conditional_35_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275element(1, "mat-icon", 86);
    \u0275\u0275elementStart(2, "p", 87);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("svgIcon", "heroicons_outline:document-magnifying-glass");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "smartScan.selectCountryToSeeTypes"), " ");
  }
}
function ScanToolComponent_Conditional_35_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275element(1, "mat-progress-spinner", 88);
    \u0275\u0275elementEnd();
  }
}
function ScanToolComponent_Conditional_35_Conditional_44_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 54);
  }
  if (rf & 2) {
    const dt_r19 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", dt_r19.backImage, \u0275\u0275sanitizeUrl)("alt", dt_r19.name + " (back)");
  }
}
function ScanToolComponent_Conditional_35_Conditional_44_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 54);
  }
  if (rf & 2) {
    const dt_r19 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", dt_r19.frontImage, \u0275\u0275sanitizeUrl)("alt", dt_r19.name);
  }
}
function ScanToolComponent_Conditional_35_Conditional_44_For_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55);
    \u0275\u0275element(1, "mat-icon", 67);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("svgIcon", "heroicons_outline:identification");
  }
}
function ScanToolComponent_Conditional_35_Conditional_44_For_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 68);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275listener("click", function ScanToolComponent_Conditional_35_Conditional_44_For_2_Conditional_6_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r20);
      const dt_r19 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.editDocumentType(dt_r19, $event));
    });
    \u0275\u0275elementStart(2, "mat-icon", 69);
    \u0275\u0275text(3, "edit");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 1, "smartScan.editDocumentType"));
  }
}
function ScanToolComponent_Conditional_35_Conditional_44_For_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 93);
    \u0275\u0275listener("click", function ScanToolComponent_Conditional_35_Conditional_44_For_2_Conditional_7_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r21);
      const dt_r19 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.flipCard(dt_r19._id, $event));
    });
    \u0275\u0275elementStart(1, "mat-icon", 69);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const dt_r19 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275property("title", ctx_r3.flippedCardId === dt_r19._id ? "Show front" : "Show back");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.flippedCardId === dt_r19._id ? "flip_to_front" : "flip");
  }
}
function ScanToolComponent_Conditional_35_Conditional_44_For_2_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 61);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "smartScan.yourFields"), " ");
  }
}
function ScanToolComponent_Conditional_35_Conditional_44_For_2_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 61);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "smartScan.verifikFields"), " ");
  }
}
function ScanToolComponent_Conditional_35_Conditional_44_For_2_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 71);
    \u0275\u0275listener("click", function ScanToolComponent_Conditional_35_Conditional_44_For_2_Conditional_25_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r22);
      const dt_r19 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.useMyFields(dt_r19, $event));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "smartScan.useMyFields"), " ");
  }
}
function ScanToolComponent_Conditional_35_Conditional_44_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275listener("click", function ScanToolComponent_Conditional_35_Conditional_44_For_2_Template_div_click_0_listener() {
      const dt_r19 = \u0275\u0275restoreView(_r18).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.selectDocumentType(dt_r19));
    })("contextmenu", function ScanToolComponent_Conditional_35_Conditional_44_For_2_Template_div_contextmenu_0_listener($event) {
      const dt_r19 = \u0275\u0275restoreView(_r18).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.onOwnedCardContextMenu($event, dt_r19));
    });
    \u0275\u0275elementStart(1, "div", 52)(2, "div", 53);
    \u0275\u0275template(3, ScanToolComponent_Conditional_35_Conditional_44_For_2_Conditional_3_Template, 1, 2, "img", 54)(4, ScanToolComponent_Conditional_35_Conditional_44_For_2_Conditional_4_Template, 1, 2, "img", 54)(5, ScanToolComponent_Conditional_35_Conditional_44_For_2_Conditional_5_Template, 2, 1, "div", 55)(6, ScanToolComponent_Conditional_35_Conditional_44_For_2_Conditional_6_Template, 4, 3, "button", 56)(7, ScanToolComponent_Conditional_35_Conditional_44_For_2_Conditional_7_Template, 3, 2, "button", 92);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 58)(9, "div", 59)(10, "span", 60);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, ScanToolComponent_Conditional_35_Conditional_44_For_2_Conditional_12_Template, 3, 3, "span", 61)(13, ScanToolComponent_Conditional_35_Conditional_44_For_2_Conditional_13_Template, 3, 3, "span", 61);
    \u0275\u0275elementStart(14, "p", 62);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 63)(17, "span", 64);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span");
    \u0275\u0275text(22, "\xB7");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(25, ScanToolComponent_Conditional_35_Conditional_44_For_2_Conditional_25_Template, 3, 3, "button", 66);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const dt_r19 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r3.flippedCardId === dt_r19._id && dt_r19.backImage ? 3 : dt_r19.frontImage ? 4 : 5);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(dt_r19.client ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(dt_r19.backImage ? 7 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(dt_r19.code);
    \u0275\u0275advance();
    \u0275\u0275conditional(dt_r19.client ? 12 : 13);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", dt_r19.name, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.getFlag(dt_r19.country));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.getCountryLabel(dt_r19.country));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r3.getCategoryLabel(dt_r19.category));
    \u0275\u0275advance();
    \u0275\u0275conditional(!dt_r19.client ? 25 : -1);
  }
}
function ScanToolComponent_Conditional_35_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275repeaterCreate(1, ScanToolComponent_Conditional_35_Conditional_44_For_2_Template, 26, 10, "div", 50, _forTrack2);
    \u0275\u0275elementStart(3, "a", 89)(4, "mat-icon", 90);
    \u0275\u0275text(5, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 91);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 65);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.filteredDocumentTypes);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(8, _c4))("queryParams", \u0275\u0275pureFunction1(9, _c5, ctx_r3.selectedCountry));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 4, "smartScan.addDocumentType"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 6, "smartScan.addDocumentTypeHint"), " ");
  }
}
function ScanToolComponent_Conditional_35_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275element(1, "mat-icon", 86);
    \u0275\u0275elementStart(2, "p", 87);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 94);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("svgIcon", "heroicons_outline:document-magnifying-glass");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 5, "smartScan.noDocTypes"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(9, _c4))("queryParams", \u0275\u0275pureFunction1(10, _c5, ctx_r3.selectedCountry));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 7, "smartScan.addDocumentType"), " ");
  }
}
function ScanToolComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 24)(2, "div", 30)(3, "section")(4, "div", 31)(5, "span", 32);
    \u0275\u0275text(6, "01");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div")(8, "h3", 33);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 34);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(14, ScanToolComponent_Conditional_35_Conditional_14_Template, 2, 0, "div", 35)(15, ScanToolComponent_Conditional_35_Conditional_15_Template, 3, 3, "p", 36)(16, ScanToolComponent_Conditional_35_Conditional_16_Template, 3, 0, "div", 37);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 24)(18, "div", 38)(19, "section", 39)(20, "div", 40)(21, "span", 41);
    \u0275\u0275text(22, "02");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div")(24, "h3", 33);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "p", 34);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "div")(31, "h3", 42);
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(34, ScanToolComponent_Conditional_35_Conditional_34_Template, 3, 0, "div", 43)(35, ScanToolComponent_Conditional_35_Conditional_35_Template, 9, 5, "div", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275template(36, ScanToolComponent_Conditional_35_Conditional_36_Template, 21, 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 45)(38, "h4", 42);
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(41, ScanToolComponent_Conditional_35_Conditional_41_Template, 4, 6, "p", 46)(42, ScanToolComponent_Conditional_35_Conditional_42_Template, 5, 4, "div", 47)(43, ScanToolComponent_Conditional_35_Conditional_43_Template, 2, 0, "div", 48)(44, ScanToolComponent_Conditional_35_Conditional_44_Template, 12, 11, "div", 37)(45, ScanToolComponent_Conditional_35_Conditional_45_Template, 8, 12, "div", 47);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 11, "smartScan.yourDocumentsTitle"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 13, "smartScan.yourDocumentsHelp"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.recentLoading ? 14 : ctx_r3.recentTypes.length === 0 ? 15 : 16);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(26, 15, "smartScan.allDocumentsTitle"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(29, 17, "smartScan.allDocumentsHelp"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(33, 19, "smartScan.selectCountry"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r3.selectedCountry || ctx_r3.countryPickerOpen ? 34 : 35);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.selectedCountry ? 36 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(40, 21, "smartScan.selectDocumentType"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.selectedCountry && !ctx_r3.documentTypesLoading ? 41 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r3.selectedCountry ? 42 : ctx_r3.documentTypesLoading ? 43 : ctx_r3.filteredDocumentTypes.length > 0 ? 44 : 45);
  }
}
function ScanToolComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "scan-tool-review-step", 95);
    \u0275\u0275listener("changeDocument", function ScanToolComponent_Conditional_36_Template_scan_tool_review_step_changeDocument_0_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.backToSelect());
    })("proceed", function ScanToolComponent_Conditional_36_Template_scan_tool_review_step_proceed_0_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.proceedToUpload());
    })("changeFields", function ScanToolComponent_Conditional_36_Template_scan_tool_review_step_changeFields_0_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.changeSelectedFields());
    })("connectCheck", function ScanToolComponent_Conditional_36_Template_scan_tool_review_step_connectCheck_0_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.connectGovernmentCheck());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("documentType", ctx_r3.selectedDocType())("requiresBackSide", ctx_r3.requiresBackSide)("frontFields", ctx_r3.selectedTemplateFields)("backFields", ctx_r3.selectedTemplateBackFields)("flag", ctx_r3.getFlag(ctx_r3.selectedDocType().country))("countryLabel", ctx_r3.getCountryLabel(ctx_r3.selectedDocType().country))("categoryLabel", ctx_r3.getCategoryLabel(ctx_r3.selectedDocType().category));
  }
}
function ScanToolComponent_Conditional_37_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 106);
    \u0275\u0275element(1, "img", 110);
    \u0275\u0275elementStart(2, "div", 98)(3, "p", 111);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 112);
    \u0275\u0275listener("click", function ScanToolComponent_Conditional_37_Conditional_26_Template_button_click_5_listener($event) {
      \u0275\u0275restoreView(_r25);
      const ctx_r3 = \u0275\u0275nextContext(2);
      ctx_r3.triggerFrontInput();
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r3.frontUrl, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r3.frontFile == null ? null : ctx_r3.frontFile.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 3, "smartReduce.changeImage"), " ");
  }
}
function ScanToolComponent_Conditional_37_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 107)(1, "mat-icon", 113);
    \u0275\u0275text(2, "cloud_upload");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 114);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 115);
    \u0275\u0275text(7, " JPG, JPEG, PNG ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 1, "smartScan.dropZone"), " ");
  }
}
function ScanToolComponent_Conditional_37_Conditional_28_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 106);
    \u0275\u0275element(1, "img", 117);
    \u0275\u0275elementStart(2, "div", 98)(3, "p", 111);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 112);
    \u0275\u0275listener("click", function ScanToolComponent_Conditional_37_Conditional_28_Conditional_10_Template_button_click_5_listener($event) {
      \u0275\u0275restoreView(_r27);
      const ctx_r3 = \u0275\u0275nextContext(3);
      ctx_r3.triggerBackInput();
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r3.backUrl, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r3.backFile == null ? null : ctx_r3.backFile.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 3, "smartReduce.changeImage"), " ");
  }
}
function ScanToolComponent_Conditional_37_Conditional_28_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 116)(1, "mat-icon", 118);
    \u0275\u0275text(2, "image");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 119);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 1, "smartScan.dropZone"), " ");
  }
}
function ScanToolComponent_Conditional_37_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "h4", 102);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 103);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 104);
    \u0275\u0275listener("click", function ScanToolComponent_Conditional_37_Conditional_28_Template_div_click_7_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.triggerBackInput());
    })("drop", function ScanToolComponent_Conditional_37_Conditional_28_Template_div_drop_7_listener($event) {
      \u0275\u0275restoreView(_r26);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.onDropBack($event));
    })("dragover", function ScanToolComponent_Conditional_37_Conditional_28_Template_div_dragover_7_listener($event) {
      \u0275\u0275restoreView(_r26);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.onDragOver($event));
    });
    \u0275\u0275elementStart(8, "input", 105, 3);
    \u0275\u0275listener("change", function ScanToolComponent_Conditional_37_Conditional_28_Template_input_change_8_listener($event) {
      \u0275\u0275restoreView(_r26);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.onBackSelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, ScanToolComponent_Conditional_37_Conditional_28_Conditional_10_Template, 8, 5, "div", 106)(11, ScanToolComponent_Conditional_37_Conditional_28_Conditional_11_Template, 6, 3, "div", 116);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, "smartScan.backPhotoTitle"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 6, "smartScan.backPhotoHelp"));
    \u0275\u0275advance(3);
    \u0275\u0275property("accept", ctx_r3.ACCEPTED);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.backUrl ? 10 : 11);
  }
}
function ScanToolComponent_Conditional_37_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 120);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "smartScan.scanning"), " ");
  }
}
function ScanToolComponent_Conditional_37_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "smartScan.scanDocument"), " ");
  }
}
function ScanToolComponent_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 96)(2, "div", 97)(3, "span", 64);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 98)(6, "p", 33);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 99);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 100);
    \u0275\u0275listener("click", function ScanToolComponent_Conditional_37_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.backToPreview());
    });
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "p", 101);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div")(17, "h4", 102);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "p", 103);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 104);
    \u0275\u0275listener("click", function ScanToolComponent_Conditional_37_Template_div_click_23_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.triggerFrontInput());
    })("drop", function ScanToolComponent_Conditional_37_Template_div_drop_23_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onDropFront($event));
    })("dragover", function ScanToolComponent_Conditional_37_Template_div_dragover_23_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onDragOver($event));
    });
    \u0275\u0275elementStart(24, "input", 105, 2);
    \u0275\u0275listener("change", function ScanToolComponent_Conditional_37_Template_input_change_24_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onFrontSelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(26, ScanToolComponent_Conditional_37_Conditional_26_Template, 8, 5, "div", 106)(27, ScanToolComponent_Conditional_37_Conditional_27_Template, 8, 3, "div", 107);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(28, ScanToolComponent_Conditional_37_Conditional_28_Template, 12, 8, "div");
    \u0275\u0275elementStart(29, "div", 108)(30, "button", 109);
    \u0275\u0275listener("click", function ScanToolComponent_Conditional_37_Template_button_click_30_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.scanDocument());
    });
    \u0275\u0275template(31, ScanToolComponent_Conditional_37_Conditional_31_Template, 3, 3)(32, ScanToolComponent_Conditional_37_Conditional_32_Template, 2, 3);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r3.getFlag((tmp_4_0 = (tmp_4_0 = ctx_r3.selectedDocType()) == null ? null : tmp_4_0.country) !== null && tmp_4_0 !== void 0 ? tmp_4_0 : ""));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", (tmp_5_0 = ctx_r3.selectedDocType()) == null ? null : tmp_5_0.code, " \u2014 ", (tmp_5_0 = ctx_r3.selectedDocType()) == null ? null : tmp_5_0.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", ctx_r3.getCountryLabel((tmp_6_0 = (tmp_6_0 = ctx_r3.selectedDocType()) == null ? null : tmp_6_0.country) !== null && tmp_6_0 !== void 0 ? tmp_6_0 : ""), " \xB7 ", ctx_r3.getCategoryLabel((tmp_6_0 = (tmp_6_0 = ctx_r3.selectedDocType()) == null ? null : tmp_6_0.category) !== null && tmp_6_0 !== void 0 ? tmp_6_0 : ""), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 14, "smartScan.changeDocument"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 16, ctx_r3.requiresBackSide ? "smartScan.uploadTwoSides" : "smartScan.onePhotoHelp"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 18, "smartScan.frontPhotoTitle"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 20, "smartScan.frontPhotoHelp"));
    \u0275\u0275advance(3);
    \u0275\u0275property("accept", ctx_r3.ACCEPTED);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.frontUrl ? 26 : 27);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.requiresBackSide ? 28 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r3.frontFile || ctx_r3.scanLoading());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.scanLoading() ? 31 : 32);
  }
}
function ScanToolComponent_Conditional_38_Conditional_1_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 136);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const classification_r29 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(classification_r29.detectedDocumentName);
  }
}
function ScanToolComponent_Conditional_38_Conditional_1_Conditional_31_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 144);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const classification_r29 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(2, _c8, classification_r29.isMatch, !classification_r29.isMatch));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", classification_r29.reason, " ");
  }
}
function ScanToolComponent_Conditional_38_Conditional_1_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 142);
    \u0275\u0275listener("click", function ScanToolComponent_Conditional_38_Conditional_1_Conditional_31_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r30);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.showClassificationReason = !ctx_r3.showClassificationReason);
    });
    \u0275\u0275elementStart(1, "mat-icon", 143);
    \u0275\u0275text(2, " chevron_right ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 132);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, ScanToolComponent_Conditional_38_Conditional_1_Conditional_31_Conditional_7_Template, 2, 5, "div", 144);
  }
  if (rf & 2) {
    const classification_r29 = \u0275\u0275nextContext();
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(8, _c122, classification_r29.isMatch, !classification_r29.isMatch));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(11, _c13, ctx_r3.showClassificationReason));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r3.showClassificationReason ? \u0275\u0275pipeBind1(5, 4, "smartScan.hideReason") : \u0275\u0275pipeBind1(6, 6, "smartScan.showReason"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r3.showClassificationReason ? 7 : -1);
  }
}
function ScanToolComponent_Conditional_38_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 121)(1, "div", 128)(2, "mat-icon", 129);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 98)(5, "p", 130);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 131)(10, "span", 132);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 133);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "mat-icon", 134);
    \u0275\u0275text(16, "arrow_forward");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 132);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 135);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275template(22, ScanToolComponent_Conditional_38_Conditional_1_Conditional_22_Template, 2, 1, "span", 136);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 137)(24, "span", 138);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 139);
    \u0275\u0275element(28, "div", 140);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span", 141);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(31, ScanToolComponent_Conditional_38_Conditional_1_Conditional_31_Template, 8, 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const classification_r29 = ctx;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(28, _c6, classification_r29.isMatch, !classification_r29.isMatch));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(31, _c7, classification_r29.isMatch, !classification_r29.isMatch));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", classification_r29.isMatch ? "check_circle" : "warning", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(34, _c8, classification_r29.isMatch, !classification_r29.isMatch));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", classification_r29.isMatch ? \u0275\u0275pipeBind1(7, 18, "smartScan.classificationMatch") : \u0275\u0275pipeBind1(8, 20, "smartScan.classificationMismatch"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 22, "smartScan.requestedType"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", classification_r29.requestedDocumentType, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 24, "smartScan.detectedType"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(37, _c9, classification_r29.isMatch, !classification_r29.isMatch));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", classification_r29.detectedDocumentType, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(classification_r29.detectedDocumentName ? 22 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 26, "smartScan.confidence"));
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("width", ctx_r3.confidencePercent, "%");
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(40, _c10, ctx_r3.confidencePercent >= 80, ctx_r3.confidencePercent >= 50 && ctx_r3.confidencePercent < 80, ctx_r3.confidencePercent < 50));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(44, _c11, ctx_r3.confidencePercent >= 80, ctx_r3.confidencePercent >= 50 && ctx_r3.confidencePercent < 80, ctx_r3.confidencePercent < 50));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r3.confidencePercent, "%");
    \u0275\u0275advance();
    \u0275\u0275conditional(classification_r29.reason ? 31 : -1);
  }
}
function ScanToolComponent_Conditional_38_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "pre", 145);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "json");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, ctx_r3.scanResult()));
  }
}
function ScanToolComponent_Conditional_38_Conditional_22_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 149)(1, "button", 153);
    \u0275\u0275listener("click", function ScanToolComponent_Conditional_38_Conditional_22_Conditional_14_Template_button_click_1_listener() {
      let tmp_7_0;
      \u0275\u0275restoreView(_r31);
      \u0275\u0275nextContext();
      const result_r32 = \u0275\u0275readContextLet(0);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.openImagePreview(result_r32.url, (tmp_7_0 = ctx_r3.selectedDocType()) == null ? null : tmp_7_0.name));
    });
    \u0275\u0275element(2, "img", 154);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const result_r32 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", result_r32.url, \u0275\u0275sanitizeUrl);
  }
}
function ScanToolComponent_Conditional_38_Conditional_22_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 149)(1, "button", 153);
    \u0275\u0275listener("click", function ScanToolComponent_Conditional_38_Conditional_22_Conditional_15_Template_button_click_1_listener() {
      let tmp_7_0;
      \u0275\u0275restoreView(_r33);
      \u0275\u0275nextContext();
      const result_r32 = \u0275\u0275readContextLet(0);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.openImagePreview(result_r32.backUrl, (tmp_7_0 = ctx_r3.selectedDocType()) == null ? null : tmp_7_0.name));
    });
    \u0275\u0275element(2, "img", 155);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const result_r32 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", result_r32.backUrl, \u0275\u0275sanitizeUrl);
  }
}
function ScanToolComponent_Conditional_38_Conditional_22_For_18_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h5", 157);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const section_r34 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, section_r34.labelKey), " ");
  }
}
function ScanToolComponent_Conditional_38_Conditional_22_For_18_Conditional_0_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 159)(1, "span", 157);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 160);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const f_r35 = ctx.$implicit;
    const \u0275$index_663_r36 = ctx.$index;
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(3, _c14, \u0275$index_663_r36 % 2 === 0));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(f_r35.key);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(f_r35.value);
  }
}
function ScanToolComponent_Conditional_38_Conditional_22_For_18_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 156);
    \u0275\u0275template(1, ScanToolComponent_Conditional_38_Conditional_22_For_18_Conditional_0_Conditional_1_Template, 3, 3, "h5", 157);
    \u0275\u0275elementStart(2, "div", 158);
    \u0275\u0275repeaterCreate(3, ScanToolComponent_Conditional_38_Conditional_22_For_18_Conditional_0_For_4_Template, 5, 5, "div", 159, _forTrack3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const section_r34 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(section_r34.labelKey ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(section_r34.fields);
  }
}
function ScanToolComponent_Conditional_38_Conditional_22_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ScanToolComponent_Conditional_38_Conditional_22_For_18_Conditional_0_Template, 5, 1, "div", 156);
  }
  if (rf & 2) {
    const section_r34 = ctx.$implicit;
    \u0275\u0275conditional(section_r34.fields.length ? 0 : -1);
  }
}
function ScanToolComponent_Conditional_38_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275declareLet(0);
    \u0275\u0275elementStart(1, "div", 127)(2, "section", 146)(3, "div", 147)(4, "span");
    \u0275\u0275text(5, "01");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div")(7, "h4");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 148);
    \u0275\u0275template(14, ScanToolComponent_Conditional_38_Conditional_22_Conditional_14_Template, 3, 1, "div", 149)(15, ScanToolComponent_Conditional_38_Conditional_22_Conditional_15_Template, 3, 1, "div", 149);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 150);
    \u0275\u0275repeaterCreate(17, ScanToolComponent_Conditional_38_Conditional_22_For_18_Template, 1, 1, null, null, _forTrack02);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "aside", 151);
    \u0275\u0275element(20, "scan-tool-smart-check-result", 152);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    const result_r37 = \u0275\u0275storeLet(ctx_r3.scanResult());
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 7, "smartScan.extractedFields"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 9, ctx_r3.requiresBackSide ? "smartScan.backPhotoHelp" : "smartScan.onePhotoHelp"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(result_r37.url ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(result_r37.backUrl ? 15 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r3.extractionSections());
    \u0275\u0275advance(3);
    \u0275\u0275property("scanResult", result_r37)("documentType", ctx_r3.selectedDocType());
  }
}
function ScanToolComponent_Conditional_38_Conditional_23_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 149)(1, "button", 153);
    \u0275\u0275listener("click", function ScanToolComponent_Conditional_38_Conditional_23_Conditional_3_Template_button_click_1_listener() {
      let tmp_6_0;
      \u0275\u0275restoreView(_r38);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.openImagePreview(ctx_r3.scanResult().url, (tmp_6_0 = ctx_r3.selectedDocType()) == null ? null : tmp_6_0.name));
    });
    \u0275\u0275element(2, "img", 164);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r3.scanResult().url, \u0275\u0275sanitizeUrl);
  }
}
function ScanToolComponent_Conditional_38_Conditional_23_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 149)(1, "button", 153);
    \u0275\u0275listener("click", function ScanToolComponent_Conditional_38_Conditional_23_Conditional_4_Template_button_click_1_listener() {
      let tmp_6_0;
      \u0275\u0275restoreView(_r39);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.openImagePreview(ctx_r3.scanResult().backUrl, (tmp_6_0 = ctx_r3.selectedDocType()) == null ? null : tmp_6_0.name));
    });
    \u0275\u0275element(2, "img", 165);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r3.scanResult().backUrl, \u0275\u0275sanitizeUrl);
  }
}
function ScanToolComponent_Conditional_38_Conditional_23_For_13_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h5", 157);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const section_r40 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, section_r40.labelKey), " ");
  }
}
function ScanToolComponent_Conditional_38_Conditional_23_For_13_Conditional_0_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 159)(1, "span", 157);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 160);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const f_r41 = ctx.$implicit;
    const \u0275$index_718_r42 = ctx.$index;
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(3, _c14, \u0275$index_718_r42 % 2 === 0));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(f_r41.key);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(f_r41.value);
  }
}
function ScanToolComponent_Conditional_38_Conditional_23_For_13_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 156);
    \u0275\u0275template(1, ScanToolComponent_Conditional_38_Conditional_23_For_13_Conditional_0_Conditional_1_Template, 3, 3, "h5", 157);
    \u0275\u0275elementStart(2, "div", 158);
    \u0275\u0275repeaterCreate(3, ScanToolComponent_Conditional_38_Conditional_23_For_13_Conditional_0_For_4_Template, 5, 5, "div", 159, _forTrack3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const section_r40 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(section_r40.labelKey ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(section_r40.fields);
  }
}
function ScanToolComponent_Conditional_38_Conditional_23_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ScanToolComponent_Conditional_38_Conditional_23_For_13_Conditional_0_Template, 5, 1, "div", 156);
  }
  if (rf & 2) {
    const section_r40 = ctx.$implicit;
    \u0275\u0275conditional(section_r40.fields.length ? 0 : -1);
  }
}
function ScanToolComponent_Conditional_38_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 96)(1, "div", 161)(2, "div", 148);
    \u0275\u0275template(3, ScanToolComponent_Conditional_38_Conditional_23_Conditional_3_Template, 3, 1, "div", 149)(4, ScanToolComponent_Conditional_38_Conditional_23_Conditional_4_Template, 3, 1, "div", 149);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 150)(6, "h4", 162);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 163);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(12, ScanToolComponent_Conditional_38_Conditional_23_For_13_Template, 1, 1, null, null, _forTrack02);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(((tmp_4_0 = ctx_r3.scanResult()) == null ? null : tmp_4_0.url) ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_5_0 = ctx_r3.scanResult()) == null ? null : tmp_5_0.backUrl) ? 4 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 4, "smartScan.extractedFields"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 6, ctx_r3.requiresBackSide ? "smartScan.backPhotoHelp" : "smartScan.onePhotoHelp"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r3.extractionSections());
  }
}
function ScanToolComponent_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275template(1, ScanToolComponent_Conditional_38_Conditional_1_Template, 32, 48, "div", 121);
    \u0275\u0275elementStart(2, "div", 122)(3, "h3", 123);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 43)(7, "button", 124);
    \u0275\u0275listener("click", function ScanToolComponent_Conditional_38_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.showRawJson = !ctx_r3.showRawJson);
    });
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 124);
    \u0275\u0275listener("click", function ScanToolComponent_Conditional_38_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.scanSimilar());
    });
    \u0275\u0275elementStart(11, "mat-icon", 125);
    \u0275\u0275text(12, "content_copy");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 124);
    \u0275\u0275listener("click", function ScanToolComponent_Conditional_38_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.reset());
    });
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 126);
    \u0275\u0275listener("click", function ScanToolComponent_Conditional_38_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.goToList());
    });
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(21, ScanToolComponent_Conditional_38_Conditional_21_Template, 4, 3, "div", 30)(22, ScanToolComponent_Conditional_38_Conditional_22_Template, 21, 11, "div", 127)(23, ScanToolComponent_Conditional_38_Conditional_23_Template, 14, 8, "div", 96);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_3_0 = ctx_r3.getClassification()) ? 1 : -1, tmp_3_0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 7, "smartScan.results"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 9, "smartScan.rawJson"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 11, "smartScan.scanSimilar"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 13, "smartScan.scanAnother"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(20, 15, "smartScan.viewInHistory"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.showRawJson ? 21 : ctx_r3.smartCheck && ctx_r3.scanResult() ? 22 : 23);
  }
}
var COUNTRY_FLAGS = {
  argentina: "\u{1F1E6}\u{1F1F7}",
  bolivia: "\u{1F1E7}\u{1F1F4}",
  brazil: "\u{1F1E7}\u{1F1F7}",
  canada: "\u{1F1E8}\u{1F1E6}",
  chile: "\u{1F1E8}\u{1F1F1}",
  colombia: "\u{1F1E8}\u{1F1F4}",
  "costa rica": "\u{1F1E8}\u{1F1F7}",
  cuba: "\u{1F1E8}\u{1F1FA}",
  "dominican republic": "\u{1F1E9}\u{1F1F4}",
  ecuador: "\u{1F1EA}\u{1F1E8}",
  "el salvador": "\u{1F1F8}\u{1F1FB}",
  guatemala: "\u{1F1EC}\u{1F1F9}",
  honduras: "\u{1F1ED}\u{1F1F3}",
  mexico: "\u{1F1F2}\u{1F1FD}",
  nicaragua: "\u{1F1F3}\u{1F1EE}",
  panama: "\u{1F1F5}\u{1F1E6}",
  paraguay: "\u{1F1F5}\u{1F1FE}",
  peru: "\u{1F1F5}\u{1F1EA}",
  "puerto rico": "\u{1F1F5}\u{1F1F7}",
  spain: "\u{1F1EA}\u{1F1F8}",
  "united states": "\u{1F1FA}\u{1F1F8}",
  uruguay: "\u{1F1FA}\u{1F1FE}",
  venezuela: "\u{1F1FB}\u{1F1EA}",
  portugal: "\u{1F1F5}\u{1F1F9}",
  france: "\u{1F1EB}\u{1F1F7}",
  germany: "\u{1F1E9}\u{1F1EA}",
  italy: "\u{1F1EE}\u{1F1F9}",
  "united kingdom": "\u{1F1EC}\u{1F1E7}",
  japan: "\u{1F1EF}\u{1F1F5}",
  "south korea": "\u{1F1F0}\u{1F1F7}",
  china: "\u{1F1E8}\u{1F1F3}",
  india: "\u{1F1EE}\u{1F1F3}",
  australia: "\u{1F1E6}\u{1F1FA}",
  "new zealand": "\u{1F1F3}\u{1F1FF}",
  "south africa": "\u{1F1FF}\u{1F1E6}",
  nigeria: "\u{1F1F3}\u{1F1EC}",
  kenya: "\u{1F1F0}\u{1F1EA}",
  egypt: "\u{1F1EA}\u{1F1EC}",
  "saudi arabia": "\u{1F1F8}\u{1F1E6}",
  "united arab emirates": "\u{1F1E6}\u{1F1EA}",
  israel: "\u{1F1EE}\u{1F1F1}",
  turkey: "\u{1F1F9}\u{1F1F7}",
  russia: "\u{1F1F7}\u{1F1FA}",
  poland: "\u{1F1F5}\u{1F1F1}",
  netherlands: "\u{1F1F3}\u{1F1F1}",
  belgium: "\u{1F1E7}\u{1F1EA}",
  switzerland: "\u{1F1E8}\u{1F1ED}",
  austria: "\u{1F1E6}\u{1F1F9}",
  sweden: "\u{1F1F8}\u{1F1EA}",
  norway: "\u{1F1F3}\u{1F1F4}",
  denmark: "\u{1F1E9}\u{1F1F0}",
  finland: "\u{1F1EB}\u{1F1EE}",
  ireland: "\u{1F1EE}\u{1F1EA}",
  philippines: "\u{1F1F5}\u{1F1ED}",
  thailand: "\u{1F1F9}\u{1F1ED}",
  indonesia: "\u{1F1EE}\u{1F1E9}",
  malaysia: "\u{1F1F2}\u{1F1FE}",
  singapore: "\u{1F1F8}\u{1F1EC}",
  vietnam: "\u{1F1FB}\u{1F1F3}",
  taiwan: "\u{1F1F9}\u{1F1FC}",
  "hong kong": "\u{1F1ED}\u{1F1F0}"
};
var ScanToolComponent = class _ScanToolComponent {
  constructor() {
    this._scanService = inject(SmartScanService);
    this._cdr = inject(ChangeDetectorRef);
    this._router = inject(Router);
    this._route = inject(ActivatedRoute);
    this._location = inject(Location);
    this._transloco = inject(TranslocoService);
    this._dialog = inject(MatDialog);
    this._destroyRef = inject(DestroyRef);
    this.step = "select";
    this.pendingStep = null;
    this.selectedCountry = "";
    this.countryPickerOpen = false;
    this.searchQuery = "";
    this.selectedCategory = "";
    this.countries = [];
    this.categories = [];
    this.documentTypesLoading = false;
    this.showMine = false;
    this.flippedCardId = null;
    this.recentTypes = [];
    this.recentLoading = false;
    this.requestedCode = "";
    this.requestedValidationId = "";
    this._countriesSub = null;
    this._documentTypesSub = null;
    this.lastCountry = "";
    this.lastCategory = "";
    this.lastSearchQuery = "";
    this.documentTypes = this._scanService.documentTypes;
    this.selectedDocType = this._scanService.selectedDocumentType;
    this.frontFile = null;
    this.frontUrl = null;
    this.backFile = null;
    this.backUrl = null;
    this.requiresBackSide = false;
    this.scanResult = this._scanService.scanResult;
    this.scanLoading = this._scanService.scanLoading;
    this.errorMessage = null;
    this.showRawJson = false;
    this.showClassificationReason = false;
    this.ACCEPTED = ".jpg,.jpeg,.png,image/jpeg,image/png";
    this.flowStepDefs = [
      { id: "select", labelKey: "smartScan.flowStepSelect" },
      { id: "preview", labelKey: "smartScan.flowStepReview" },
      { id: "upload", labelKey: "smartScan.flowStepUpload" },
      { id: "results", labelKey: "smartScan.flowStepResults" }
    ];
    this._flowStepOrder = ["select", "preview", "upload", "results"];
    this.menuX = 0;
    this.menuY = 0;
    this.contextDocumentType = null;
  }
  ngOnInit() {
    this._scanService.resetScanState();
    this._scanService.documentTypes.set([]);
    this.requestedCode = (this._route.snapshot.queryParamMap.get("documentType") || "").trim();
    this.requestedValidationId = (this._route.snapshot.queryParamMap.get("documentValidation") || "").trim();
    const requestedCountry = this._route.snapshot.queryParamMap.get("country") || "";
    this.bindStepToUrl();
    if (this.requestedValidationId)
      this.loadRequestedValidation(this.requestedValidationId);
    this.loadRecentTypes();
    this._countriesSub = this._scanService.getDocumentTypeCountries().subscribe({
      next: (countries) => {
        this.countries = countries;
        const match = countries.find((country) => country.toLowerCase() === requestedCountry.toLowerCase());
        if (match)
          this.toggleCountry(match);
        this._cdr.markForCheck();
      },
      error: () => {
        this.errorMessage = "Failed to load document types";
        this._cdr.markForCheck();
      }
    });
  }
  ngOnDestroy() {
    this._countriesSub?.unsubscribe();
    this._documentTypesSub?.unsubscribe();
  }
  get stepTitleKey() {
    const titles = {
      select: "smartScan.stepSelectTitle",
      preview: "smartScan.stepReviewTitle",
      upload: "smartScan.stepUploadTitle",
      results: "smartScan.stepResultsTitle"
    };
    return titles[this.step];
  }
  get stepHelpKey() {
    const help = {
      select: "smartScan.stepSelectHelp",
      preview: "smartScan.stepReviewHelp",
      upload: "smartScan.stepUploadHelp",
      results: "smartScan.stepResultsHelp"
    };
    return help[this.step];
  }
  get choiceLabel() {
    const selected = this.selectedDocType();
    if (!selected)
      return this._transloco.translate("smartScan.choiceNone");
    return `${selected.code} \u2014 ${selected.name}`;
  }
  get choiceDetail() {
    if (this.step === "upload" || this.step === "preview" || this.step === "results") {
      return this._transloco.translate(this.requiresBackSide ? "smartScan.backRequired" : "smartScan.onePhoto");
    }
    if (this.recentTypes.length) {
      return this._transloco.translate("smartScan.recentCount", { count: this.recentTypes.length });
    }
    return this._transloco.translate("smartScan.choiceCatalog");
  }
  formatLastUsed(value) {
    if (!value)
      return "";
    const date = new Date(value);
    if (Number.isNaN(date.getTime()))
      return "";
    return new Intl.DateTimeFormat(void 0, { month: "short", day: "numeric", year: "numeric" }).format(date);
  }
  /**
   * Opens the document photo full screen so it can be zoomed.
   */
  openImagePreview(imageSrc, title) {
    if (!imageSrc)
      return;
    this._dialog.open(ImagePreviewDialogComponent, {
      data: { imageSrc, title },
      panelClass: "image-preview-dialog-panel",
      width: "100%",
      maxWidth: "100vw",
      maxHeight: "100vh",
      height: "100%"
    });
  }
  useMyFields(documentType, event) {
    event?.stopPropagation();
    this._router.navigate(["/smart-enroll/smart-scan/document-type/new"], {
      queryParams: { fork: documentType._id }
    });
  }
  loadRecentTypes() {
    this.recentLoading = true;
    this._scanService.getRecentDocumentTypes().subscribe({
      next: (rows) => {
        this.recentTypes = rows;
        this.recentLoading = false;
        if (this.requestedCode)
          this.openRequestedType(this.requestedCode);
        this._cdr.markForCheck();
      },
      error: () => {
        this.recentLoading = false;
        if (this.requestedCode)
          this.openRequestedType(this.requestedCode);
        this._cdr.markForCheck();
      }
    });
  }
  openRequestedType(code) {
    const recent = this.recentTypes.find((row) => row.documentType?.code === code);
    if (recent?.documentType) {
      this.requestedCode = "";
      this.openRequestedDocument(recent.documentType);
      return;
    }
    this._scanService.getDocumentTypesByCode(code).subscribe({
      next: (types) => {
        const owned = types.find((type) => type.client);
        const chosen = owned || types[0];
        this.requestedCode = "";
        if (chosen)
          this.openRequestedDocument(chosen);
        else {
          this.pendingStep = null;
          this.writeStep(this.fallbackStep(), true);
        }
        this._cdr.markForCheck();
      },
      error: () => {
        this.requestedCode = "";
        this.pendingStep = null;
        this.writeStep(this.fallbackStep(), true);
      }
    });
  }
  getFlag(country) {
    const key = country?.toLowerCase().replace(/_/g, " ");
    return COUNTRY_FLAGS[key ?? ""] ?? "\u{1F3F3}\uFE0F";
  }
  getCountryLabel(country) {
    if (!country)
      return "";
    const normalized = country.trim().toLowerCase().replace(/[\s-]+/g, "_");
    const key = `smartScan.countries.${normalized}`;
    const translated = this._transloco.translate(key);
    if (translated === key) {
      return country.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
    }
    return translated;
  }
  getCategoryLabel(category) {
    if (!category)
      return "";
    const key = `smartScan.categories.${category}`;
    const translated = this._transloco.translate(key);
    if (translated === key) {
      return category.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
    }
    return translated;
  }
  toggleCountry(country) {
    if (this.selectedCountry === country) {
      this.clearCountrySelection();
      return;
    }
    this.selectedCountry = country;
    this.countryPickerOpen = false;
    this.selectedCategory = "";
    this.searchQuery = "";
    this.flippedCardId = null;
    this.loadDocumentTypes(country);
  }
  /**
   * Shows every country again without clearing the current choice.
   */
  openCountryPicker() {
    this.countryPickerOpen = true;
  }
  toggleCategory(category) {
    this.selectedCategory = this.selectedCategory === category ? "" : category;
  }
  toggleMine(mine) {
    if (this.showMine === mine || !this.selectedCountry)
      return;
    this.showMine = mine;
    this.selectedCategory = "";
    this.loadDocumentTypes(this.selectedCountry);
  }
  loadDocumentTypes(country) {
    if (!country)
      return;
    this._documentTypesSub?.unsubscribe();
    this.documentTypesLoading = true;
    this.categories = [];
    this._scanService.documentTypes.set([]);
    this._cdr.markForCheck();
    this._documentTypesSub = this._scanService.getDocumentTypes(country, this.showMine).subscribe({
      next: () => {
        const types = this._scanService.documentTypes();
        this.categories = [...new Set(types.map((t) => t.category).filter(Boolean))].sort();
        this.documentTypesLoading = false;
        this._cdr.markForCheck();
      },
      error: () => {
        this.documentTypesLoading = false;
        this.errorMessage = "Failed to load document types";
        this._cdr.markForCheck();
      }
    });
  }
  clearCountrySelection() {
    this._documentTypesSub?.unsubscribe();
    this._documentTypesSub = null;
    this.selectedCountry = "";
    this.selectedCategory = "";
    this.searchQuery = "";
    this.categories = [];
    this.documentTypesLoading = false;
    this.flippedCardId = null;
    this._scanService.documentTypes.set([]);
    this._cdr.markForCheck();
  }
  restoreSelectStep() {
    this.writeStep("select");
  }
  get filteredDocumentTypes() {
    if (!this.selectedCountry)
      return [];
    let types = this.documentTypes();
    if (this.selectedCategory) {
      types = types.filter((t) => t.category === this.selectedCategory);
    }
    if (this.searchQuery) {
      const q = this.searchQuery.toLowerCase();
      types = types.filter((t) => t.name?.toLowerCase().includes(q) || t.code?.toLowerCase().includes(q) || t.category?.toLowerCase().includes(q));
    }
    return types;
  }
  flipCard(id, event) {
    event.stopPropagation();
    this.flippedCardId = this.flippedCardId === id ? null : id;
  }
  onOwnedCardContextMenu(event, documentType) {
    if (!documentType.client)
      return;
    event.preventDefault();
    event.stopPropagation();
    this.contextDocumentType = documentType;
    this.menuX = event.clientX;
    this.menuY = event.clientY;
    this._cdr.detectChanges();
    this.editMenuTrigger?.openMenu();
  }
  editDocumentType(documentType, event) {
    event?.stopPropagation();
    this._router.navigate(["/smart-enroll/smart-scan/document-type", documentType._id]);
  }
  editContextDocumentType() {
    if (!this.contextDocumentType)
      return;
    this.editDocumentType(this.contextDocumentType);
  }
  selectDocumentType(dt) {
    this.pendingStep = null;
    this.openDocument(dt, "preview");
  }
  /**
   * Opens a document requested from the URL, keeping upload when that step was requested.
   */
  openRequestedDocument(dt) {
    if (this.pendingStep === "results" || this.requestedValidationId) {
      this.loadDocumentContext(dt);
      return;
    }
    const next = this.pendingStep === "upload" ? "upload" : "preview";
    this.pendingStep = null;
    this.openDocument(dt, next);
  }
  /**
   * Loads the document type and its templates without changing the active step.
   */
  loadDocumentContext(dt) {
    this._scanService.selectedDocumentType.set(dt);
    this._scanService.getPromptTemplates(dt._id).subscribe({
      next: () => {
        const tpl = this._scanService.promptTemplates()[0];
        this.requiresBackSide = tpl?.requiresBackSide ?? false;
        this._scanService.selectedPromptTemplate.set(tpl ?? null);
        this._cdr.markForCheck();
      },
      error: () => {
        this.requiresBackSide = false;
        this._cdr.markForCheck();
      }
    });
  }
  /**
   * Restores the scan result when reloading `?step=results&documentValidation=:id`.
   */
  loadRequestedValidation(id) {
    this._scanService.getScan(id).subscribe({
      next: (res) => {
        const scan = res?.data;
        this.requestedValidationId = "";
        if (!scan) {
          this.pendingStep = null;
          this.writeStep(this.fallbackStep(), true);
          return;
        }
        const score = scan.scoreValidation;
        const savedSmartCheck = scan.smartCheck ?? (score?.status ? score : null);
        const ocrCost = scan.cost?.ocr ?? scan.creditsCharged ?? score?.ocrCreditsCharged;
        const smartCheckCost = scan.cost?.smartCheck ?? score?.creditsCharged;
        this._scanService.scanResult.set({
          _id: scan._id,
          documentType: scan.documentType,
          documentNumber: scan.documentNumber,
          OCRExtraction: scan.OCRExtraction,
          status: scan.status,
          url: scan.url,
          backUrl: scan.backUrl,
          cost: scan.cost ?? (ocrCost != null || smartCheckCost != null ? {
            ocr: ocrCost || 0,
            smartCheck: smartCheckCost || 0,
            total: Number(((ocrCost || 0) + (smartCheckCost || 0)).toFixed(6))
          } : null),
          creditsCharged: ocrCost,
          smartCheck: savedSmartCheck,
          fieldMapping: scan.fieldMapping
        });
        const cls = this.getClassification();
        this.showClassificationReason = cls ? !cls.isMatch : false;
        if (!this.selectedDocType() && scan.documentType && !this.requestedCode) {
          this.openRequestedType(scan.documentType);
        }
        if (this.pendingStep === "results") {
          this.pendingStep = null;
          this.writeStep("results", true);
        }
        this._cdr.markForCheck();
      },
      error: () => {
        this.requestedValidationId = "";
        this.pendingStep = null;
        this.writeStep(this.fallbackStep(), true);
      }
    });
  }
  openDocument(dt, next) {
    this._scanService.selectedDocumentType.set(dt);
    this.lastCountry = this.selectedCountry;
    this.lastCategory = this.selectedCategory;
    this.lastSearchQuery = this.searchQuery;
    this._scanService.getPromptTemplates(dt._id).subscribe({
      next: () => {
        const templates = this._scanService.promptTemplates();
        const tpl = templates[0];
        this.requiresBackSide = tpl?.requiresBackSide ?? false;
        this._scanService.selectedPromptTemplate.set(tpl ?? null);
        this.writeStep(next);
        this._cdr.markForCheck();
      },
      error: () => {
        this.requiresBackSide = false;
        this.writeStep(next);
        this._cdr.markForCheck();
      }
    });
  }
  get selectedTemplateFields() {
    const tpl = this._scanService.selectedPromptTemplate();
    if (!tpl?.fields)
      return [];
    return tpl.fields.filter((f) => f.page === 0);
  }
  get selectedTemplateBackFields() {
    const tpl = this._scanService.selectedPromptTemplate();
    if (!tpl?.fields)
      return [];
    return tpl.fields.filter((f) => f.page === 1);
  }
  /**
   * Opens the field editor for an owned type, or starts a copy of a Verifik type.
   */
  changeSelectedFields() {
    const documentType = this.selectedDocType();
    if (!documentType)
      return;
    if (documentType.client) {
      this.editDocumentType(documentType);
      return;
    }
    this.useMyFields(documentType);
  }
  /**
   * Opens the SmartCheck step for an owned type, or starts a copy when the type is shared.
   */
  connectGovernmentCheck() {
    const documentType = this.selectedDocType();
    if (!documentType)
      return;
    if (documentType.client) {
      this._router.navigate(["/smart-enroll/smart-scan/document-type", documentType._id], {
        queryParams: { step: "smartCheck" }
      });
      return;
    }
    this.useMyFields(documentType);
  }
  proceedToUpload() {
    this.writeStep("upload");
  }
  backToSelect() {
    this.restoreSelectStep();
  }
  backToPreview() {
    this.writeStep("preview");
  }
  scanSimilar() {
    if (this.frontUrl)
      URL.revokeObjectURL(this.frontUrl);
    if (this.backUrl)
      URL.revokeObjectURL(this.backUrl);
    this.frontFile = null;
    this.frontUrl = null;
    this.backFile = null;
    this.backUrl = null;
    this._scanService.scanResult.set(null);
    this._scanService.selectedDocumentType.set(null);
    this._scanService.selectedPromptTemplate.set(null);
    this.showRawJson = false;
    this.restoreSelectStep();
  }
  triggerFrontInput() {
    this.frontInput?.nativeElement?.click();
  }
  triggerBackInput() {
    this.backInput?.nativeElement?.click();
  }
  onFrontSelected(event) {
    const input2 = event.target;
    const file = input2.files?.[0];
    if (file)
      this.loadFrontFile(file);
    input2.value = "";
  }
  onBackSelected(event) {
    const input2 = event.target;
    const file = input2.files?.[0];
    if (file)
      this.loadBackFile(file);
    input2.value = "";
  }
  onDropFront(event) {
    event.preventDefault();
    event.stopPropagation();
    const file = event.dataTransfer?.files?.[0];
    if (file)
      this.loadFrontFile(file);
  }
  onDropBack(event) {
    event.preventDefault();
    event.stopPropagation();
    const file = event.dataTransfer?.files?.[0];
    if (file)
      this.loadBackFile(file);
  }
  onDragOver(event) {
    event.preventDefault();
    event.stopPropagation();
  }
  loadFrontFile(file) {
    if (!file.type.startsWith("image/"))
      return;
    if (this.frontUrl)
      URL.revokeObjectURL(this.frontUrl);
    this.frontFile = file;
    this.frontUrl = URL.createObjectURL(file);
    this._cdr.markForCheck();
  }
  loadBackFile(file) {
    if (!file.type.startsWith("image/"))
      return;
    if (this.backUrl)
      URL.revokeObjectURL(this.backUrl);
    this.backFile = file;
    this.backUrl = URL.createObjectURL(file);
    this._cdr.markForCheck();
  }
  fileToBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }
  scanDocument() {
    return __async(this, null, function* () {
      const docType = this.selectedDocType();
      if (!docType || !this.frontFile)
        return;
      this.errorMessage = null;
      const image = yield this.fileToBase64(this.frontFile);
      const backImage = this.backFile ? yield this.fileToBase64(this.backFile) : void 0;
      const templateId = this._scanService.selectedPromptTemplate()?._id;
      this._scanService.scanDocument(docType.code, image, backImage, templateId).subscribe({
        next: () => {
          this.writeStep("results", true);
          const cls = this.getClassification();
          this.showClassificationReason = cls ? !cls.isMatch : false;
          this._cdr.markForCheck();
        },
        error: (err) => {
          this.errorMessage = err?.error?.message || err?.message || "Scan failed";
          this._cdr.markForCheck();
        }
      });
    });
  }
  reset() {
    if (this.frontUrl)
      URL.revokeObjectURL(this.frontUrl);
    if (this.backUrl)
      URL.revokeObjectURL(this.backUrl);
    this._scanService.resetScanState();
    this.frontFile = null;
    this.frontUrl = null;
    this.backFile = null;
    this.backUrl = null;
    this.clearCountrySelection();
    this.lastCountry = "";
    this.lastCategory = "";
    this.lastSearchQuery = "";
    this.showRawJson = false;
    this.writeStep("select");
    this._cdr.markForCheck();
  }
  goBack() {
    const navigationId = window.history.state?.navigationId;
    if (typeof navigationId === "number" && navigationId > 1) {
      this._location.back();
      return;
    }
    this._router.navigate(["/smart-enroll/smart-scan/list"]);
  }
  goToList() {
    this._router.navigate(["/smart-enroll/smart-scan/list"]);
  }
  getExtractionFields() {
    const extraction = this.scanResult()?.OCRExtraction;
    if (!extraction || typeof extraction !== "object")
      return [];
    return Object.entries(extraction).filter(([k]) => k !== "documentClassification" && k !== "smartCheck" && !k.startsWith("_")).map(([key, value]) => ({ key, value }));
  }
  extractionSections() {
    const rows = this.getExtractionFields();
    const { front, back } = this.sideKeys();
    if (!front.size && !back.size)
      return [{ id: "all", labelKey: "", fields: rows }];
    return [
      { id: "front", labelKey: "smartScan.frontPhotoTitle", fields: rows.filter((row) => front.has(row.key)) },
      {
        id: "back",
        labelKey: "smartScan.backPhotoTitle",
        fields: this.requiresBackSide ? rows.filter((row) => back.has(row.key)) : []
      },
      {
        id: "other",
        labelKey: "smartScan.otherFields",
        fields: rows.filter((row) => !front.has(row.key) && !back.has(row.key))
      }
    ];
  }
  sideKeys() {
    const mapping = this.scanResult()?.fieldMapping;
    if (mapping?.front || mapping?.back) {
      return {
        front: new Set(Object.keys(mapping.front || {})),
        back: new Set(Object.keys(mapping.back || {}))
      };
    }
    return {
      front: new Set(this.selectedTemplateFields.map((field) => field.mapKey).filter(Boolean)),
      back: new Set(this.selectedTemplateBackFields.map((field) => field.mapKey).filter(Boolean))
    };
  }
  get smartCheck() {
    return this.scanResult()?.smartCheck ?? null;
  }
  getClassification() {
    const extraction = this.scanResult()?.OCRExtraction;
    return extraction?.documentClassification ?? null;
  }
  get confidencePercent() {
    const cls = this.getClassification();
    return Math.round((cls?.confidence ?? 0) * 100);
  }
  canOpenFlowStep(stepId) {
    if (stepId === "select")
      return true;
    if (stepId === "preview" || stepId === "upload")
      return Boolean(this.selectedDocType());
    return Boolean(this.scanResult());
  }
  /**
   * Moves to a step the scan has already reached.
   */
  goToFlowStep(stepId) {
    if (stepId === this.step || !this.canOpenFlowStep(stepId))
      return;
    if (stepId === "select") {
      this.restoreSelectStep();
      return;
    }
    this.writeStep(stepId);
  }
  isFlowStepCurrent(stepId) {
    return this.step === stepId;
  }
  isFlowStepDone(stepId) {
    const currentIdx = this._flowStepOrder.indexOf(this.step);
    const stepIdx = this._flowStepOrder.indexOf(stepId);
    return stepIdx >= 0 && stepIdx < currentIdx;
  }
  /**
   * Keeps ?step= aligned with the visible scan step. Reading it never starts a scan.
   */
  bindStepToUrl() {
    this._route.queryParamMap.pipe(takeUntilDestroyed(this._destroyRef)).subscribe((params) => {
      this.syncStepFromParam(params.get("step"));
    });
  }
  syncStepFromParam(raw) {
    const requested = raw ? this.stepFromQuery(raw) : null;
    if (!requested) {
      this.writeStep("select", true);
      return;
    }
    if (!this.canOpenFlowStep(requested)) {
      if (this.requestedValidationId && requested === "results") {
        this.pendingStep = "results";
        return;
      }
      if (this.requestedCode && (requested === "preview" || requested === "upload")) {
        this.pendingStep = requested;
        return;
      }
      this.writeStep(this.fallbackStep(), true);
      return;
    }
    this.pendingStep = null;
    if (raw !== this.queryForStep(requested)) {
      this.writeStep(requested, true);
      return;
    }
    this.applyStep(requested);
  }
  stepFromQuery(value) {
    if (value === "select")
      return "select";
    if (value === "review" || value === "preview")
      return "preview";
    if (value === "upload")
      return "upload";
    if (value === "results")
      return "results";
    return null;
  }
  queryForStep(step) {
    return step === "preview" ? "review" : step;
  }
  fallbackStep() {
    if (this.scanResult())
      return "results";
    if (this.selectedDocType())
      return "preview";
    return "select";
  }
  writeStep(step, replaceUrl = false) {
    if (!this.canOpenFlowStep(step) && step !== "select")
      return;
    const queryStep = this.queryForStep(step);
    const validationId = step === "results" ? this.scanResult()?._id || null : null;
    this.applyStep(step);
    const currentParams = this._route.snapshot.queryParamMap;
    if (currentParams.get("step") === queryStep && (currentParams.get("documentValidation") || null) === validationId) {
      return;
    }
    this._router.navigate([], {
      relativeTo: this._route,
      queryParams: {
        step: queryStep,
        documentValidation: validationId
      },
      queryParamsHandling: "merge",
      replaceUrl
    });
  }
  applyStep(step) {
    if (step === "select" && this.step !== "select") {
      this.selectedCountry = this.lastCountry;
      this.selectedCategory = this.lastCategory;
      this.searchQuery = this.lastSearchQuery;
      if (this.selectedCountry && this.documentTypes().length === 0) {
        this.loadDocumentTypes(this.selectedCountry);
      }
    }
    if (this.step === step)
      return;
    this.step = step;
    this._cdr.markForCheck();
  }
  static {
    this.\u0275fac = function ScanToolComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ScanToolComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ScanToolComponent, selectors: [["scan-tool"]], viewQuery: function ScanToolComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c02, 5);
        \u0275\u0275viewQuery(_c12, 5);
        \u0275\u0275viewQuery(_c22, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.frontInput = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.backInput = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.editMenuTrigger = _t.first);
      }
    }, decls: 49, vars: 36, consts: [["editMenuTrigger", "matMenuTrigger"], ["ownedTypeMenu", "matMenu"], ["frontInput", ""], ["backInput", ""], [1, "scan-tool-root", "flex", "flex-col", "flex-auto", "min-w-0", "min-h-screen", "bg-stone-50", "dark:bg-gray-950"], [1, "flex", "flex-col", "w-full", "max-w-5xl", "mx-auto", "px-5", "py-10", "md:px-8", "md:py-12"], [1, "mb-8", "md:mb-10"], ["mat-stroked-button", "", "type", "button", 1, "mb-5", "!rounded-xl", "!border-stone-200", "!text-stone-700", "dark:!border-gray-700", "dark:!text-stone-200", 3, "click"], [1, "icon-size-5", "mr-1"], [1, "flex", "flex-col", "gap-6", "lg:flex-row", "lg:items-end", "lg:justify-between"], [1, "min-w-0", "flex-1", "space-y-2"], [1, "text-[0.65rem]", "font-bold", "uppercase", "tracking-[0.16em]", "text-stone-500"], [1, "text-3xl", "font-semibold", "tracking-tight", "text-stone-900", "dark:text-white", "md:text-4xl"], [1, "max-w-2xl", "text-sm", "leading-relaxed", "text-stone-600", "dark:text-stone-400"], [1, "text-xs", "leading-relaxed", "text-stone-500"], [1, "flex", "w-full", "max-w-xs", "flex-col", "items-start", "rounded-2xl", "border", "border-stone-200", "bg-white", "px-4", "py-3", "dark:border-gray-700", "dark:bg-gray-900", "lg:items-end"], [1, "text-[0.62rem]", "font-semibold", "uppercase", "tracking-wider", "text-stone-400"], [1, "mt-1", "text-sm", "text-stone-800", "dark:text-stone-100"], [1, "mt-0.5", "text-xs", "not-italic", "text-stone-500"], [1, "mb-8", "flex", "flex-col", "gap-2", "sm:flex-row", "sm:flex-wrap"], [1, "flex", "min-w-0", "flex-1"], [1, "mb-6", "rounded-2xl", "border", "border-red-200/90", "bg-red-50/90", "p-4", "text-sm", "text-red-800", "dark:border-red-900/50", "dark:bg-red-950/40", "dark:text-red-300"], [1, "flex", "flex-col", "gap-6"], [3, "documentType", "requiresBackSide", "frontFields", "backFields", "flag", "countryLabel", "categoryLabel"], [1, "scan-tool-panel", "overflow-hidden"], [1, "fixed", "z-50", "h-0", "w-0", 3, "matMenuTriggerFor"], ["mat-menu-item", "", "type", "button", 3, "click"], ["type", "button", 1, "flex", "min-w-0", "flex-1", "items-center", "gap-3", "rounded-2xl", "border", "px-3", "py-2", "text-left", "enabled:cursor-pointer", "disabled:cursor-default", 3, "click", "disabled", "ngClass"], [1, "grid", "h-7", "w-7", "shrink-0", "place-items-center", "rounded-full", "text-[11px]", "font-bold", 3, "ngClass"], [1, "truncate", "text-sm", "font-medium"], [1, "p-6", "md:p-8"], [1, "mb-4", "flex", "items-start", "gap-3"], [1, "grid", "h-7", "w-7", "shrink-0", "place-items-center", "rounded-full", "bg-stone-900", "text-[11px]", "font-bold", "text-white", "dark:bg-stone-100", "dark:text-stone-900"], [1, "text-sm", "font-semibold", "text-stone-900", "dark:text-white"], [1, "mt-1", "text-xs", "leading-relaxed", "text-stone-500"], [1, "flex", "justify-center", "py-8"], [1, "rounded-2xl", "border", "border-dashed", "border-stone-200", "px-4", "py-6", "text-sm", "text-stone-500", "dark:border-gray-700"], [1, "grid", "grid-cols-1", "gap-4", "sm:grid-cols-2", "lg:grid-cols-3"], [1, "space-y-8", "p-6", "md:p-8"], [1, "flex", "flex-col", "gap-10"], [1, "flex", "items-start", "gap-3"], [1, "grid", "h-7", "w-7", "shrink-0", "place-items-center", "rounded-full", "bg-stone-200", "text-[11px]", "font-bold", "text-stone-700", "dark:bg-gray-800", "dark:text-stone-200"], [1, "mb-4", "text-xs", "font-semibold", "uppercase", "tracking-wider", "text-stone-500", "dark:text-stone-400"], [1, "flex", "flex-wrap", "gap-2"], [1, "flex", "flex-wrap", "items-center", "gap-3"], [1, "border-t", "border-stone-100", "px-6", "py-6", "md:px-8", "md:py-8", "dark:border-gray-800"], [1, "mb-6", "text-sm", "text-stone-600", "dark:text-stone-400"], [1, "flex", "flex-col", "items-center", "justify-center", "rounded-2xl", "border", "border-dashed", "border-stone-200", "bg-stone-50/50", "py-16", "text-center", "dark:border-gray-700", "dark:bg-gray-950/30"], [1, "flex", "items-center", "justify-center", "py-16"], ["mode", "indeterminate", "diameter", "32"], [1, "doc-type-card", "cursor-pointer"], [1, "doc-type-card", "cursor-pointer", 3, "click", "contextmenu"], [1, "scan-tool-doc-card"], [1, "scan-tool-doc-card__media"], ["loading", "lazy", 1, "h-full", "w-full", "object-contain", 3, "src", "alt"], [1, "absolute", "inset-0", "flex", "items-center", "justify-center", "bg-gradient-to-br", "from-stone-100", "to-stone-200/80", "dark:from-gray-900", "dark:to-gray-950"], ["type", "button", "mat-icon-button", "", 1, "absolute", "left-1", "top-1", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-lg", "bg-black/40", "text-white", "hover:bg-black/60"], ["type", "button", "mat-icon-button", "", 1, "absolute", "right-1", "top-1", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-lg", "bg-black/40", "text-white", "hover:bg-black/60"], [1, "p-4"], [1, "min-w-0"], [1, "scan-tool-doc-card__code"], [1, "ml-2", "text-[10px]", "font-semibold", "uppercase", "tracking-wide", "text-stone-400"], [1, "mt-2", "truncate", "text-sm", "font-semibold", "text-stone-900", "dark:text-white"], [1, "mt-2", "flex", "flex-wrap", "items-center", "gap-1.5", "text-xs", "text-stone-500", "dark:text-stone-400"], [1, "text-base", "leading-none"], [1, "mt-1", "text-xs", "text-stone-500"], ["type", "button", 1, "mt-3", "text-xs", "font-semibold", "text-stone-900", "underline", "dark:text-stone-100"], [1, "icon-size-16", "text-stone-300", "dark:text-stone-600", 3, "svgIcon"], ["type", "button", "mat-icon-button", "", 1, "absolute", "left-1", "top-1", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-lg", "bg-black/40", "text-white", "hover:bg-black/60", 3, "click"], [1, "icon-size-4"], ["type", "button", "mat-icon-button", "", 1, "absolute", "right-1", "top-1", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-lg", "bg-black/40", "text-white", "hover:bg-black/60", 3, "click"], ["type", "button", 1, "mt-3", "text-xs", "font-semibold", "text-stone-900", "underline", "dark:text-stone-100", 3, "click"], ["type", "button", 1, "scan-tool-pill", 3, "scan-tool-pill--active"], ["type", "button", 1, "scan-tool-pill", 3, "click"], [1, "scan-tool-pill", "scan-tool-pill--active"], ["type", "button", 1, "text-sm", "font-semibold", "text-stone-900", "underline", "underline-offset-4", "dark:text-stone-100", 3, "click"], ["appearance", "outline", "subscriptSizing", "dynamic", 1, "scan-tool-search", "w-full"], ["matPrefix", "", 1, "mr-2", "text-stone-400"], ["matInput", "", 3, "ngModelChange", "ngModel", "placeholder"], ["matSuffix", "", "mat-icon-button", "", "type", "button"], ["role", "group", 1, "scan-tool-segment"], ["type", "button", 1, "scan-tool-segment__option", 3, "click"], [1, "flex", "flex-wrap", "items-center", "gap-x-5", "gap-y-2"], ["type", "button", 1, "scan-tool-text-filter", 3, "click"], ["type", "button", 1, "scan-tool-text-filter", 3, "scan-tool-text-filter--active"], ["matSuffix", "", "mat-icon-button", "", "type", "button", 3, "click"], [1, "icon-size-16", "mb-4", "text-stone-300", "dark:text-stone-600", 3, "svgIcon"], [1, "text-base", "font-medium", "text-stone-600", "dark:text-stone-400"], ["mode", "indeterminate", "diameter", "36"], [1, "doc-type-card", "flex", "min-h-64", "cursor-pointer", "flex-col", "items-center", "justify-center", "rounded-3xl", "border", "border-dashed", "border-stone-300", "bg-stone-50/70", "p-6", "text-center", "transition", "hover:border-stone-400", "dark:border-gray-600", "dark:bg-gray-950/40", 3, "routerLink", "queryParams"], [1, "icon-size-10", "mb-3", "text-stone-400"], [1, "text-sm", "font-semibold", "text-stone-800", "dark:text-stone-100"], ["type", "button", "mat-icon-button", "", 1, "absolute", "right-1", "top-1", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-lg", "bg-black/40", "text-white", "hover:bg-black/60", 3, "title"], ["type", "button", "mat-icon-button", "", 1, "absolute", "right-1", "top-1", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-lg", "bg-black/40", "text-white", "hover:bg-black/60", 3, "click", "title"], [1, "mt-4", "text-sm", "font-semibold", "text-stone-900", "underline", "dark:text-stone-100", 3, "routerLink", "queryParams"], [3, "changeDocument", "proceed", "changeFields", "connectCheck", "documentType", "requiresBackSide", "frontFields", "backFields", "flag", "countryLabel", "categoryLabel"], [1, "space-y-6", "p-6", "md:p-8"], [1, "scan-tool-strip"], [1, "min-w-0", "flex-1"], [1, "text-xs", "text-stone-600", "dark:text-stone-400"], ["mat-stroked-button", "", 1, "scan-tool-mat-btn-pill", "shrink-0", "!text-xs", 3, "click"], [1, "text-sm", "text-stone-600", "dark:text-stone-300"], [1, "mb-1", "text-xs", "font-semibold", "uppercase", "tracking-wider", "text-stone-600", "dark:text-stone-400"], [1, "mb-2", "text-xs", "text-stone-500"], [1, "scan-tool-dropzone", 3, "click", "drop", "dragover"], ["type", "file", 1, "hidden", 3, "change", "accept"], [1, "flex", "items-center", "gap-4", "p-4"], [1, "flex", "flex-col", "items-center", "justify-center", "px-6", "py-14"], [1, "flex", "flex-wrap", "gap-3", "pt-2"], ["mat-flat-button", "", "color", "primary", 1, "scan-tool-mat-btn-pill", 3, "click", "disabled"], ["alt", "Front", 1, "h-20", "w-28", "rounded-xl", "border", "border-stone-200", "object-cover", "dark:border-gray-700", 3, "src"], [1, "text-sm", "font-medium", "text-stone-900", "dark:text-white"], ["mat-stroked-button", "", 1, "scan-tool-mat-btn-pill", "mt-2", "!text-xs", 3, "click"], [1, "icon-size-12", "mb-3", "text-stone-400", "dark:text-stone-500"], [1, "text-base", "font-medium", "text-stone-800", "dark:text-stone-200"], [1, "mt-1", "text-xs", "text-stone-500", "dark:text-stone-400"], [1, "flex", "flex-col", "items-center", "justify-center", "px-6", "py-10"], ["alt", "Back", 1, "h-20", "w-28", "rounded-xl", "border", "border-stone-200", "object-cover", "dark:border-gray-700", 3, "src"], [1, "icon-size-10", "mb-2", "text-stone-400", "dark:text-stone-500"], [1, "text-sm", "font-medium", "text-stone-700", "dark:text-stone-300"], ["diameter", "20", 1, "mr-2", "inline-block"], [1, "border-b", "border-stone-200/80", "dark:border-gray-800", 3, "ngClass"], [1, "scan-tool-panel__header", "flex", "flex-wrap", "items-center", "justify-between", "gap-4", "px-5", "py-4", "md:px-6", "md:py-5"], [1, "text-lg", "font-semibold", "text-stone-900", "dark:text-white"], ["mat-stroked-button", "", 1, "scan-tool-mat-btn-pill", "!text-xs", "!border-stone-200", "dark:!border-gray-600", 3, "click"], [1, "icon-size-4", "mr-1"], ["mat-flat-button", "", "color", "primary", 1, "scan-tool-mat-btn-pill", "!text-xs", 3, "click"], [1, "scan-results-decision"], [1, "flex", "items-start", "gap-3", "p-5", "md:p-6"], [1, "icon-size-6", "mt-0.5", "shrink-0", 3, "ngClass"], [1, "text-base", "font-semibold", 3, "ngClass"], [1, "mt-3", "flex", "flex-wrap", "items-center", "gap-2"], [1, "text-xs", "font-medium", "uppercase", "tracking-wider", "text-stone-500", "dark:text-stone-400"], [1, "inline-flex", "items-center", "rounded-xl", "border", "border-stone-200/80", "bg-white/90", "px-2.5", "py-1", "font-mono", "text-xs", "font-bold", "text-stone-800", "dark:border-gray-600", "dark:bg-gray-900/70", "dark:text-stone-200"], [1, "icon-size-4", "text-stone-400"], [1, "inline-flex", "items-center", "rounded-xl", "border", "px-2.5", "py-1", "font-mono", "text-xs", "font-bold", 3, "ngClass"], [1, "text-sm", "text-stone-700", "dark:text-stone-300"], [1, "mt-4", "flex", "items-center", "gap-3"], [1, "whitespace-nowrap", "text-xs", "font-medium", "uppercase", "tracking-wider", "text-stone-500", "dark:text-stone-400"], [1, "h-2", "flex-1", "overflow-hidden", "rounded-full", "bg-white/60", "dark:bg-gray-800/60"], [1, "h-full", "rounded-full", "transition-all", "duration-500", 3, "ngClass"], [1, "min-w-[3rem]", "text-right", "text-sm", "font-semibold", "tabular-nums", 3, "ngClass"], [1, "flex", "cursor-pointer", "select-none", "items-center", "gap-2", "border-t", "px-5", "py-3", "dark:border-gray-700/80", 3, "click", "ngClass"], [1, "icon-size-4", "text-stone-500", "transition-transform", "dark:text-stone-400", 3, "ngClass"], [1, "px-5", "pb-5", "text-sm", "leading-relaxed", 3, "ngClass"], [1, "max-h-96", "overflow-auto", "rounded-2xl", "border", "border-stone-200/90", "bg-stone-100/80", "p-4", "font-mono", "text-xs", "dark:border-gray-700", "dark:bg-gray-900/60"], [1, "scan-results-record", "space-y-6"], [1, "results-section-heading"], [1, "space-y-4"], [1, "overflow-hidden", "rounded-3xl", "border", "border-stone-200/90", "bg-white", "dark:border-gray-700", "dark:bg-gray-900/50"], [1, "space-y-3"], [1, "scan-results-explainer"], [3, "scanResult", "documentType"], ["type", "button", 1, "block", "w-full", "cursor-zoom-in", "border-0", "bg-transparent", "p-0", 3, "click"], ["alt", "Document front", 1, "max-h-72", "w-full", "object-contain", 3, "src"], ["alt", "Document back", 1, "max-h-56", "w-full", "object-contain", 3, "src"], [1, "space-y-2"], [1, "text-sm", "font-medium", "text-stone-500", "dark:text-stone-400"], [1, "overflow-hidden", "rounded-2xl", "border", "border-stone-200/90", "dark:border-gray-700"], [1, "flex", "justify-between", "gap-4", "px-4", "py-3", 3, "ngClass"], [1, "break-all", "text-right", "text-sm", "font-medium", "text-stone-900", "dark:text-white"], [1, "grid", "grid-cols-1", "gap-6", "lg:grid-cols-2"], [1, "font-semibold", "text-stone-900", "dark:text-white"], [1, "text-xs", "text-stone-500"], ["alt", "Document front", 1, "max-h-80", "w-full", "object-contain", 3, "src"], ["alt", "Document back", 1, "max-h-60", "w-full", "object-contain", 3, "src"]], template: function ScanToolComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "header", 6)(3, "button", 7);
        \u0275\u0275listener("click", function ScanToolComponent_Template_button_click_3_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.goBack());
        });
        \u0275\u0275elementStart(4, "mat-icon", 8);
        \u0275\u0275text(5, "arrow_back");
        \u0275\u0275elementEnd();
        \u0275\u0275text(6);
        \u0275\u0275pipe(7, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 9)(9, "div", 10)(10, "p", 11);
        \u0275\u0275text(11);
        \u0275\u0275pipe(12, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "h1", 12);
        \u0275\u0275text(14);
        \u0275\u0275pipe(15, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "p", 13);
        \u0275\u0275text(17);
        \u0275\u0275pipe(18, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "p", 14);
        \u0275\u0275text(20);
        \u0275\u0275pipe(21, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "div", 15)(23, "span", 16);
        \u0275\u0275text(24);
        \u0275\u0275pipe(25, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "strong", 17);
        \u0275\u0275text(27);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "em", 18);
        \u0275\u0275text(29);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(30, "ol", 19);
        \u0275\u0275pipe(31, "transloco");
        \u0275\u0275repeaterCreate(32, ScanToolComponent_For_33_Template, 7, 12, "li", 20, _forTrack02);
        \u0275\u0275elementEnd();
        \u0275\u0275template(34, ScanToolComponent_Conditional_34_Template, 2, 1, "div", 21)(35, ScanToolComponent_Conditional_35_Template, 46, 23, "div", 22)(36, ScanToolComponent_Conditional_36_Template, 1, 7, "scan-tool-review-step", 23)(37, ScanToolComponent_Conditional_37_Template, 33, 22, "div", 24)(38, ScanToolComponent_Conditional_38_Template, 24, 17, "div", 24);
        \u0275\u0275elementEnd();
        \u0275\u0275element(39, "div", 25, 0);
        \u0275\u0275elementStart(41, "mat-menu", null, 1)(43, "button", 26);
        \u0275\u0275listener("click", function ScanToolComponent_Template_button_click_43_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.editContextDocumentType());
        });
        \u0275\u0275elementStart(44, "mat-icon");
        \u0275\u0275text(45, "edit");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "span");
        \u0275\u0275text(47);
        \u0275\u0275pipe(48, "transloco");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        const ownedTypeMenu_r43 = \u0275\u0275reference(42);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 20, "smartScan.back"), " ");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 22, "smartScan.journeyEyebrow"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 24, ctx.stepTitleKey), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 26, ctx.stepHelpKey), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 28, "smartScan.privacyNote"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(25, 30, "smartScan.currentChoice"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.choiceLabel);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.choiceDetail);
        \u0275\u0275advance();
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(31, 32, "smartScan.toolTitle"));
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.flowStepDefs);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.errorMessage ? 34 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.step === "select" ? 35 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.step === "preview" && ctx.selectedDocType() ? 36 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.step === "upload" ? 37 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.step === "results" && ctx.scanResult() ? 38 : -1);
        \u0275\u0275advance();
        \u0275\u0275styleProp("left", ctx.menuX, "px")("top", ctx.menuY, "px");
        \u0275\u0275property("matMenuTriggerFor", ownedTypeMenu_r43);
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(48, 34, "smartScan.editDocumentType"));
      }
    }, dependencies: [
      CommonModule,
      NgClass,
      LowerCasePipe,
      JsonPipe,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      RouterModule,
      RouterLink,
      MatButtonModule,
      MatButton,
      MatIconButton,
      MatDialogModule,
      MatIconModule,
      MatIcon,
      MatFormFieldModule,
      MatFormField,
      MatPrefix,
      MatSuffix,
      MatInputModule,
      MatInput,
      MatSelectModule,
      MatChipsModule,
      MatMenuModule,
      MatMenu,
      MatMenuItem,
      MatMenuTrigger,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      TranslocoModule,
      TranslocoPipe,
      ScanToolReviewStepComponent,
      ScanToolSmartCheckResultComponent
    ], styles: ['@charset "UTF-8";\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.scan-tool-root[_ngcontent-%COMP%] {\n  --st-radius: 1.25rem;\n  --st-radius-sm: 0.875rem;\n}\n.scan-tool-steps__item--current[_ngcontent-%COMP%] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(28 25 23 / var(--tw-bg-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);\n  box-shadow:\n    var(--tw-ring-offset-shadow, 0 0 #0000),\n    var(--tw-ring-shadow, 0 0 #0000),\n    var(--tw-shadow);\n}\n.scan-tool-steps__item--current[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(245 245 244 / var(--tw-bg-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(28 25 23 / var(--tw-text-opacity, 1));\n}\n.scan-tool-steps__item--done[_ngcontent-%COMP%] {\n  background-color: rgb(231 229 228 / 0.8);\n  --tw-text-opacity: 1;\n  color: rgb(68 64 60 / var(--tw-text-opacity, 1));\n}\n.scan-tool-steps__item--done[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(51 65 85 / var(--tw-bg-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(231 229 228 / var(--tw-text-opacity, 1));\n}\n.scan-tool-steps__item--todo[_ngcontent-%COMP%] {\n  border-width: 1px;\n  border-color: rgb(231 229 228 / 0.9);\n  background-color: rgb(255 255 255 / 0.8);\n  --tw-text-opacity: 1;\n  color: rgb(168 162 158 / var(--tw-text-opacity, 1));\n}\n.scan-tool-steps__item--todo[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(51 65 85 / var(--tw-border-opacity, 1));\n  background-color: rgb(15 23 42 / 0.4);\n  --tw-text-opacity: 1;\n  color: rgb(100 116 139 / var(--tw-text-opacity, 1));\n}\n.scan-tool-doc-card[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  border-radius: 1.5rem;\n  border-width: 1px;\n  border-color: rgb(231 229 228 / 0.9);\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 200ms;\n}\n.scan-tool-doc-card[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(51 65 85 / var(--tw-border-opacity, 1));\n  background-color: rgb(15 23 42 / 0.6);\n}\n.scan-tool-doc-card[_ngcontent-%COMP%] {\n  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);\n}\n.scan-tool-doc-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 12px 32px -12px rgba(15, 23, 42, 0.12);\n  --tw-border-opacity: 1;\n  border-color: rgb(214 211 209 / var(--tw-border-opacity, 1));\n}\n.scan-tool-doc-card[_ngcontent-%COMP%]:hover:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(71 85 105 / var(--tw-border-opacity, 1));\n}\n.scan-tool-doc-card__media[_ngcontent-%COMP%] {\n  position: relative;\n  height: 9rem;\n  overflow: hidden;\n  --tw-bg-opacity: 1;\n  background-color: rgb(245 245 244 / var(--tw-bg-opacity, 1));\n}\n.scan-tool-doc-card__media[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  background-color: rgb(2 6 23 / 0.8);\n}\n.scan-tool-doc-card__code[_ngcontent-%COMP%] {\n  display: inline-block;\n  border-radius: 0.375rem;\n  --tw-bg-opacity: 1;\n  background-color: rgb(245 245 244 / var(--tw-bg-opacity, 1));\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n  padding-top: 0.125rem;\n  padding-bottom: 0.125rem;\n  font-family:\n    "IBM Plex Mono",\n    ui-monospace,\n    SFMono-Regular,\n    Menlo,\n    Monaco,\n    Consolas,\n    "Liberation Mono",\n    "Courier New",\n    monospace;\n  font-size: 10px;\n  font-weight: 600;\n  letter-spacing: 0.025em;\n  --tw-text-opacity: 1;\n  color: rgb(87 83 78 / var(--tw-text-opacity, 1));\n}\n.scan-tool-doc-card__code[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(30 41 59 / var(--tw-bg-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(168 162 158 / var(--tw-text-opacity, 1));\n}\n.scan-tool-panel[_ngcontent-%COMP%] {\n  overflow: hidden;\n  border-radius: 1.5rem;\n  border-width: 1px;\n  border-color: rgb(231 229 228 / 0.9);\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);\n  box-shadow:\n    var(--tw-ring-offset-shadow, 0 0 #0000),\n    var(--tw-ring-shadow, 0 0 #0000),\n    var(--tw-shadow);\n}\n.scan-tool-panel[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(51 65 85 / var(--tw-border-opacity, 1));\n  background-color: rgb(15 23 42 / 0.5);\n}\n.scan-tool-panel[_ngcontent-%COMP%] {\n  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);\n}\n.scan-tool-panel__header[_ngcontent-%COMP%] {\n  border-bottom-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgb(245 245 244 / var(--tw-border-opacity, 1));\n}\n.scan-tool-panel__header[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(30 41 59 / var(--tw-border-opacity, 1));\n}\n.scan-tool-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.375rem;\n  border-radius: 9999px;\n  border-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgb(231 229 228 / var(--tw-border-opacity, 1));\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n  padding-left: 1rem;\n  padding-right: 1rem;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  font-size: 0.75rem;\n  font-weight: 500;\n  --tw-text-opacity: 1;\n  color: rgb(68 64 60 / var(--tw-text-opacity, 1));\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 200ms;\n}\n.scan-tool-pill[_ngcontent-%COMP%]:hover {\n  --tw-border-opacity: 1;\n  border-color: rgb(214 211 209 / var(--tw-border-opacity, 1));\n}\n.scan-tool-pill[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(51 65 85 / var(--tw-border-opacity, 1));\n  background-color: rgb(15 23 42 / 0.4);\n  --tw-text-opacity: 1;\n  color: rgb(231 229 228 / var(--tw-text-opacity, 1));\n}\n.scan-tool-pill[_ngcontent-%COMP%]:hover:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(71 85 105 / var(--tw-border-opacity, 1));\n}\n.scan-tool-pill--active[_ngcontent-%COMP%] {\n  --tw-border-opacity: 1;\n  border-color: rgb(28 25 23 / var(--tw-border-opacity, 1));\n  --tw-bg-opacity: 1;\n  background-color: rgb(28 25 23 / var(--tw-bg-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);\n  box-shadow:\n    var(--tw-ring-offset-shadow, 0 0 #0000),\n    var(--tw-ring-shadow, 0 0 #0000),\n    var(--tw-shadow);\n}\n.scan-tool-pill--active[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(245 245 244 / var(--tw-border-opacity, 1));\n  --tw-bg-opacity: 1;\n  background-color: rgb(245 245 244 / var(--tw-bg-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(28 25 23 / var(--tw-text-opacity, 1));\n}\n.scan-tool-chip[_ngcontent-%COMP%] {\n  border-radius: 9999px;\n  border-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgb(231 229 228 / var(--tw-border-opacity, 1));\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n  padding-left: 0.875rem;\n  padding-right: 0.875rem;\n  padding-top: 0.375rem;\n  padding-bottom: 0.375rem;\n  font-size: 0.625rem;\n  font-weight: 600;\n  --tw-text-opacity: 1;\n  color: rgb(87 83 78 / var(--tw-text-opacity, 1));\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 200ms;\n}\n.scan-tool-chip[_ngcontent-%COMP%]:hover {\n  --tw-border-opacity: 1;\n  border-color: rgb(214 211 209 / var(--tw-border-opacity, 1));\n}\n.scan-tool-chip[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(51 65 85 / var(--tw-border-opacity, 1));\n  background-color: rgb(15 23 42 / 0.4);\n  --tw-text-opacity: 1;\n  color: rgb(214 211 209 / var(--tw-text-opacity, 1));\n}\n.scan-tool-chip[_ngcontent-%COMP%]:hover:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(71 85 105 / var(--tw-border-opacity, 1));\n}\n.scan-tool-chip--active[_ngcontent-%COMP%] {\n  --tw-border-opacity: 1;\n  border-color: rgb(28 25 23 / var(--tw-border-opacity, 1));\n  --tw-bg-opacity: 1;\n  background-color: rgb(28 25 23 / var(--tw-bg-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n}\n.scan-tool-chip--active[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(245 245 244 / var(--tw-border-opacity, 1));\n  --tw-bg-opacity: 1;\n  background-color: rgb(245 245 244 / var(--tw-bg-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(28 25 23 / var(--tw-text-opacity, 1));\n}\n.scan-tool-segment[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: fit-content;\n  align-items: center;\n  gap: 0.25rem;\n  border-radius: 9999px;\n  --tw-bg-opacity: 1;\n  background-color: rgb(245 245 244 / var(--tw-bg-opacity, 1));\n  padding: 0.25rem;\n}\n.scan-tool-segment[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(30 41 59 / var(--tw-bg-opacity, 1));\n}\n.scan-tool-segment__option[_ngcontent-%COMP%] {\n  border-radius: 9999px;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  padding-top: 0.375rem;\n  padding-bottom: 0.375rem;\n  font-size: 0.625rem;\n  font-weight: 600;\n  --tw-text-opacity: 1;\n  color: rgb(120 113 108 / var(--tw-text-opacity, 1));\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.scan-tool-segment__option[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(168 162 158 / var(--tw-text-opacity, 1));\n}\n.scan-tool-segment__option--active[_ngcontent-%COMP%] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(28 25 23 / var(--tw-text-opacity, 1));\n  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);\n  box-shadow:\n    var(--tw-ring-offset-shadow, 0 0 #0000),\n    var(--tw-ring-shadow, 0 0 #0000),\n    var(--tw-shadow);\n}\n.scan-tool-segment__option--active[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(2 6 23 / var(--tw-bg-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(245 245 244 / var(--tw-text-opacity, 1));\n}\n.scan-tool-text-filter[_ngcontent-%COMP%] {\n  border-bottom-width: 2px;\n  border-color: transparent;\n  padding-bottom: 0.25rem;\n  font-size: 0.75rem;\n  font-weight: 500;\n  --tw-text-opacity: 1;\n  color: rgb(120 113 108 / var(--tw-text-opacity, 1));\n  transition-property:\n    color,\n    background-color,\n    border-color,\n    text-decoration-color,\n    fill,\n    stroke;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.scan-tool-text-filter[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(168 162 158 / var(--tw-text-opacity, 1));\n}\n.scan-tool-text-filter--active[_ngcontent-%COMP%] {\n  --tw-border-opacity: 1;\n  border-color: rgb(28 25 23 / var(--tw-border-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(28 25 23 / var(--tw-text-opacity, 1));\n}\n.scan-tool-text-filter--active[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(245 245 244 / var(--tw-border-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(245 245 244 / var(--tw-text-opacity, 1));\n}\n.scan-tool-dropzone[_ngcontent-%COMP%] {\n  cursor: pointer;\n  overflow: hidden;\n  border-radius: 1.5rem;\n  border-width: 2px;\n  border-style: dashed;\n  --tw-border-opacity: 1;\n  border-color: rgb(231 229 228 / var(--tw-border-opacity, 1));\n  background-color: rgb(250 250 249 / 0.5);\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 200ms;\n}\n.scan-tool-dropzone[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(51 65 85 / var(--tw-border-opacity, 1));\n  background-color: rgb(2 6 23 / 0.3);\n}\n.scan-tool-dropzone[_ngcontent-%COMP%]:hover {\n  --tw-border-opacity: 1;\n  border-color: rgb(168 162 158 / var(--tw-border-opacity, 1));\n  --tw-bg-opacity: 1;\n  background-color: rgb(250 250 249 / var(--tw-bg-opacity, 1));\n}\n.scan-tool-dropzone[_ngcontent-%COMP%]:hover:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(100 116 139 / var(--tw-border-opacity, 1));\n  background-color: rgb(15 23 42 / 0.4);\n}\n.scan-tool-strip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  border-radius: 1rem;\n  border-width: 1px;\n  border-color: rgb(231 229 228 / 0.9);\n  background-color: rgb(250 250 249 / 0.8);\n  padding: 1rem;\n}\n.scan-tool-strip[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(51 65 85 / var(--tw-border-opacity, 1));\n  background-color: rgb(15 23 42 / 0.4);\n}\n[_nghost-%COMP%]     .scan-tool-search .mat-mdc-text-field-wrapper {\n  background-color: transparent;\n}\n[_nghost-%COMP%]     .scan-tool-search .mdc-notched-outline .mdc-notched-outline__leading, \n[_nghost-%COMP%]     .scan-tool-search .mdc-notched-outline .mdc-notched-outline__notch, \n[_nghost-%COMP%]     .scan-tool-search .mdc-notched-outline .mdc-notched-outline__trailing {\n  border-color: rgb(231, 229, 228) !important;\n}\n[_nghost-%COMP%]     .scan-tool-search .mat-mdc-form-field-focus-overlay {\n  opacity: 0;\n}\n[_nghost-%COMP%]     .scan-tool-search.mat-focused .mdc-notched-outline .mdc-notched-outline__leading, \n[_nghost-%COMP%]     .scan-tool-search.mat-focused .mdc-notched-outline .mdc-notched-outline__notch, \n[_nghost-%COMP%]     .scan-tool-search.mat-focused .mdc-notched-outline .mdc-notched-outline__trailing {\n  border-color: rgb(120, 113, 108) !important;\n}\n[_nghost-%COMP%]     .dark .scan-tool-search .mdc-notched-outline .mdc-notched-outline__leading, \n[_nghost-%COMP%]     .dark .scan-tool-search .mdc-notched-outline .mdc-notched-outline__notch, \n[_nghost-%COMP%]     .dark .scan-tool-search .mdc-notched-outline .mdc-notched-outline__trailing {\n  border-color: rgb(63, 63, 70) !important;\n}\n[_nghost-%COMP%]     .dark .scan-tool-search.mat-focused .mdc-notched-outline .mdc-notched-outline__leading, \n[_nghost-%COMP%]     .dark .scan-tool-search.mat-focused .mdc-notched-outline .mdc-notched-outline__notch, \n[_nghost-%COMP%]     .dark .scan-tool-search.mat-focused .mdc-notched-outline .mdc-notched-outline__trailing {\n  border-color: rgb(161, 161, 170) !important;\n}\n[_nghost-%COMP%]     .scan-tool-mat-btn-pill.mat-mdc-unelevated-button, \n[_nghost-%COMP%]     .scan-tool-mat-btn-pill.mat-mdc-outlined-button {\n  border-radius: 9999px;\n}\n.doc-type-card[_ngcontent-%COMP%] {\n}\n.scan-results-decision[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1.15fr) minmax(22rem, 0.85fr);\n}\n@media (max-width: 1024px) {\n  .scan-results-decision[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.scan-results-record[_ngcontent-%COMP%], \n.scan-results-explainer[_ngcontent-%COMP%] {\n  padding: 1.75rem;\n}\n.scan-results-explainer[_ngcontent-%COMP%] {\n  background: #1c1917;\n  color: #fafaf9;\n}\n.results-section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.8rem;\n}\n.results-section-heading[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: grid;\n  flex: 0 0 1.8rem;\n  width: 1.8rem;\n  height: 1.8rem;\n  place-items: center;\n  border-radius: 999px;\n  background: #292524;\n  color: #fff;\n  font-size: 0.62rem;\n  font-weight: 750;\n}\n.results-section-heading[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #292524;\n  font-size: 0.95rem;\n  font-weight: 680;\n}\n.results-section-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.25rem 0 0;\n  color: #78716c;\n  font-size: 0.72rem;\n  line-height: 1.45;\n}\n.dark[_nghost-%COMP%]   .scan-results-explainer[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .scan-results-explainer[_ngcontent-%COMP%] {\n  background: #020617;\n}\n.dark[_nghost-%COMP%]   .results-section-heading[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .results-section-heading[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  background: #334155;\n}\n.dark[_nghost-%COMP%]   .results-section-heading[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .results-section-heading[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #f8fafc;\n}\n.dark[_nghost-%COMP%]   .results-section-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .results-section-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n/*# sourceMappingURL=scan-tool.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScanToolComponent, [{
    type: Component,
    args: [{ selector: "scan-tool", standalone: true, imports: [
      CommonModule,
      FormsModule,
      RouterModule,
      MatButtonModule,
      MatDialogModule,
      MatIconModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      MatChipsModule,
      MatMenuModule,
      MatProgressSpinnerModule,
      TranslocoModule,
      ScanToolReviewStepComponent,
      ScanToolSmartCheckResultComponent
    ], template: `<div\r
    class="scan-tool-root flex flex-col flex-auto min-w-0 min-h-screen bg-stone-50 dark:bg-gray-950"\r
>\r
    <div class="flex flex-col w-full max-w-5xl mx-auto px-5 py-10 md:px-8 md:py-12">\r
        <!-- Header -->\r
        <header class="mb-8 md:mb-10">\r
            <button\r
                mat-stroked-button\r
                type="button"\r
                class="mb-5 !rounded-xl !border-stone-200 !text-stone-700 dark:!border-gray-700 dark:!text-stone-200"\r
                (click)="goBack()"\r
            >\r
                <mat-icon class="icon-size-5 mr-1">arrow_back</mat-icon>\r
                {{ 'smartScan.back' | transloco }}\r
            </button>\r
            <div class="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">\r
                <div class="min-w-0 flex-1 space-y-2">\r
                    <p class="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-stone-500">\r
                        {{ 'smartScan.journeyEyebrow' | transloco }}\r
                    </p>\r
                    <h1 class="text-3xl font-semibold tracking-tight text-stone-900 dark:text-white md:text-4xl">\r
                        {{ stepTitleKey | transloco }}\r
                    </h1>\r
                    <p class="max-w-2xl text-sm leading-relaxed text-stone-600 dark:text-stone-400">\r
                        {{ stepHelpKey | transloco }}\r
                    </p>\r
                    <p class="text-xs leading-relaxed text-stone-500">\r
                        {{ 'smartScan.privacyNote' | transloco }}\r
                    </p>\r
                </div>\r
                <div\r
                    class="flex w-full max-w-xs flex-col items-start rounded-2xl border border-stone-200 bg-white px-4 py-3 dark:border-gray-700 dark:bg-gray-900 lg:items-end"\r
                >\r
                    <span class="text-[0.62rem] font-semibold uppercase tracking-wider text-stone-400">\r
                        {{ 'smartScan.currentChoice' | transloco }}\r
                    </span>\r
                    <strong class="mt-1 text-sm text-stone-800 dark:text-stone-100">{{ choiceLabel }}</strong>\r
                    <em class="mt-0.5 text-xs not-italic text-stone-500">{{ choiceDetail }}</em>\r
                </div>\r
            </div>\r
        </header>\r
\r
        <ol class="mb-8 flex flex-col gap-2 sm:flex-row sm:flex-wrap" [attr.aria-label]="'smartScan.toolTitle' | transloco">\r
            @for (s of flowStepDefs; track s.id; let i = $index) {\r
                <li class="flex min-w-0 flex-1">\r
                    <button\r
                        type="button"\r
                        class="flex min-w-0 flex-1 items-center gap-3 rounded-2xl border px-3 py-2 text-left enabled:cursor-pointer disabled:cursor-default"\r
                        [disabled]="!canOpenFlowStep(s.id)"\r
                        [attr.aria-current]="isFlowStepCurrent(s.id) ? 'step' : null"\r
                        (click)="goToFlowStep(s.id)"\r
                        [ngClass]="{\r
                            'border-stone-900 bg-stone-900 text-white dark:border-stone-100 dark:bg-stone-100 dark:text-stone-900':\r
                                isFlowStepCurrent(s.id),\r
                            'border-stone-200 bg-white text-stone-700 dark:border-gray-700 dark:bg-gray-900 dark:text-stone-200':\r
                                isFlowStepDone(s.id),\r
                            'border-stone-200/80 bg-stone-50 text-stone-400 dark:border-gray-800 dark:bg-gray-950 dark:text-stone-500':\r
                                !isFlowStepCurrent(s.id) && !isFlowStepDone(s.id),\r
                        }"\r
                    >\r
                        <span\r
                            class="grid h-7 w-7 shrink-0 place-items-center rounded-full text-[11px] font-bold"\r
                            [ngClass]="\r
                                isFlowStepCurrent(s.id)\r
                                    ? 'bg-white text-stone-900 dark:bg-stone-900 dark:text-white'\r
                                    : 'bg-stone-200 text-stone-700 dark:bg-gray-800 dark:text-stone-200'\r
                            "\r
                        >{{ i + 1 }}</span>\r
                        <span class="truncate text-sm font-medium">{{ s.labelKey | transloco }}</span>\r
                    </button>\r
                </li>\r
            }\r
        </ol>\r
\r
        @if (errorMessage) {\r
            <div\r
                class="mb-6 rounded-2xl border border-red-200/90 bg-red-50/90 p-4 text-sm text-red-800 dark:border-red-900/50 dark:bg-red-950/40 dark:text-red-300"\r
            >\r
                {{ errorMessage }}\r
            </div>\r
        }\r
\r
        <!-- ============================================ -->\r
        <!-- STEP 1: Select Country + Document Type       -->\r
        <!-- ============================================ -->\r
        @if (step === 'select') {\r
            <div class="flex flex-col gap-6">\r
            <div class="scan-tool-panel overflow-hidden">\r
                <div class="p-6 md:p-8">\r
                    <section>\r
                        <div class="mb-4 flex items-start gap-3">\r
                            <span class="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-stone-900 text-[11px] font-bold text-white dark:bg-stone-100 dark:text-stone-900">01</span>\r
                            <div>\r
                                <h3 class="text-sm font-semibold text-stone-900 dark:text-white">\r
                                    {{ 'smartScan.yourDocumentsTitle' | transloco }}\r
                                </h3>\r
                                <p class="mt-1 text-xs leading-relaxed text-stone-500">\r
                                    {{ 'smartScan.yourDocumentsHelp' | transloco }}\r
                                </p>\r
                            </div>\r
                        </div>\r
                        @if (recentLoading) {\r
                            <div class="flex justify-center py-8">\r
                                <mat-progress-spinner mode="indeterminate" diameter="32"></mat-progress-spinner>\r
                            </div>\r
                        } @else if (recentTypes.length === 0) {\r
                            <p class="rounded-2xl border border-dashed border-stone-200 px-4 py-6 text-sm text-stone-500 dark:border-gray-700">\r
                                {{ 'smartScan.yourDocumentsEmpty' | transloco }}\r
                            </p>\r
                        } @else {\r
                            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">\r
                                @for (row of recentTypes; track row.documentType._id) {\r
                                    <div\r
                                        class="doc-type-card cursor-pointer"\r
                                        (click)="selectDocumentType(row.documentType)"\r
                                        (contextmenu)="onOwnedCardContextMenu($event, row.documentType)"\r
                                    >\r
                                        <div class="scan-tool-doc-card">\r
                                            <div class="scan-tool-doc-card__media">\r
                                                @if (flippedCardId === row.documentType._id && row.documentType.backImage) {\r
                                                    <img\r
                                                        [src]="row.documentType.backImage"\r
                                                        [alt]="row.documentType.name + ' (back)'"\r
                                                        class="h-full w-full object-contain"\r
                                                        loading="lazy"\r
                                                    />\r
                                                } @else if (row.documentType.frontImage) {\r
                                                    <img\r
                                                        [src]="row.documentType.frontImage"\r
                                                        [alt]="row.documentType.name"\r
                                                        class="h-full w-full object-contain"\r
                                                        loading="lazy"\r
                                                    />\r
                                                } @else {\r
                                                    <div\r
                                                        class="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-stone-100 to-stone-200/80 dark:from-gray-900 dark:to-gray-950"\r
                                                    >\r
                                                        <mat-icon\r
                                                            class="icon-size-16 text-stone-300 dark:text-stone-600"\r
                                                            [svgIcon]="'heroicons_outline:identification'"\r
                                                        ></mat-icon>\r
                                                    </div>\r
                                                }\r
                                                @if (row.documentType.client) {\r
                                                    <button\r
                                                        type="button"\r
                                                        mat-icon-button\r
                                                        class="absolute left-1 top-1 flex h-8 w-8 items-center justify-center rounded-lg bg-black/40 text-white hover:bg-black/60"\r
                                                        (click)="editDocumentType(row.documentType, $event)"\r
                                                        [attr.aria-label]="'smartScan.editDocumentType' | transloco"\r
                                                    >\r
                                                        <mat-icon class="icon-size-4">edit</mat-icon>\r
                                                    </button>\r
                                                }\r
                                                @if (row.documentType.backImage) {\r
                                                    <button\r
                                                        type="button"\r
                                                        mat-icon-button\r
                                                        class="absolute right-1 top-1 flex h-8 w-8 items-center justify-center rounded-lg bg-black/40 text-white hover:bg-black/60"\r
                                                        (click)="flipCard(row.documentType._id, $event)"\r
                                                    >\r
                                                        <mat-icon class="icon-size-4">{{\r
                                                            flippedCardId === row.documentType._id\r
                                                                ? 'flip_to_front'\r
                                                                : 'flip'\r
                                                        }}</mat-icon>\r
                                                    </button>\r
                                                }\r
                                            </div>\r
                                            <div class="p-4">\r
                                                <div class="min-w-0">\r
                                                    <span class="scan-tool-doc-card__code">{{ row.documentType.code }}</span>\r
                                                    <span class="ml-2 text-[10px] font-semibold uppercase tracking-wide text-stone-400">\r
                                                        {{ (row.owned ? 'smartScan.yourFields' : 'smartScan.verifikFields') | transloco }}\r
                                                    </span>\r
                                                    <p class="mt-2 truncate text-sm font-semibold text-stone-900 dark:text-white">\r
                                                        {{ row.documentType.name }}\r
                                                    </p>\r
                                                </div>\r
                                                <div class="mt-2 flex flex-wrap items-center gap-1.5 text-xs text-stone-500 dark:text-stone-400">\r
                                                    <span class="text-base leading-none">{{ getFlag(row.documentType.country || row.country) }}</span>\r
                                                    <span>{{ getCountryLabel(row.documentType.country || row.country) }}</span>\r
                                                    @if (row.documentType.category) {\r
                                                        <span>\xB7</span>\r
                                                        <span>{{ getCategoryLabel(row.documentType.category) }}</span>\r
                                                    }\r
                                                </div>\r
                                                <p class="mt-1 text-xs text-stone-500">\r
                                                    {{ 'smartScan.lastUsed' | transloco }} {{ formatLastUsed(row.lastUsedAt) }}\r
                                                </p>\r
                                                @if (!row.owned) {\r
                                                    <button\r
                                                        type="button"\r
                                                        class="mt-3 text-xs font-semibold text-stone-900 underline dark:text-stone-100"\r
                                                        (click)="useMyFields(row.documentType, $event)"\r
                                                    >\r
                                                        {{ 'smartScan.useMyFields' | transloco }}\r
                                                    </button>\r
                                                }\r
                                            </div>\r
                                        </div>\r
                                    </div>\r
                                }\r
                            </div>\r
                        }\r
                    </section>\r
                </div>\r
            </div>\r
\r
            <div class="scan-tool-panel overflow-hidden">\r
                <div class="space-y-8 p-6 md:p-8">\r
                    <section class="flex flex-col gap-10">\r
                        <div class="flex items-start gap-3">\r
                            <span class="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-stone-200 text-[11px] font-bold text-stone-700 dark:bg-gray-800 dark:text-stone-200">02</span>\r
                            <div>\r
                                <h3 class="text-sm font-semibold text-stone-900 dark:text-white">\r
                                    {{ 'smartScan.allDocumentsTitle' | transloco }}\r
                                </h3>\r
                                <p class="mt-1 text-xs leading-relaxed text-stone-500">\r
                                    {{ 'smartScan.allDocumentsHelp' | transloco }}\r
                                </p>\r
                            </div>\r
                        </div>\r
                    <div>\r
                        <h3\r
                            class="mb-4 text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400"\r
                        >\r
                            {{ 'smartScan.selectCountry' | transloco }}\r
                        </h3>\r
                        @if (!selectedCountry || countryPickerOpen) {\r
                            <div class="flex flex-wrap gap-2">\r
                                @for (c of countries; track c) {\r
                                    <button\r
                                        type="button"\r
                                        (click)="toggleCountry(c)"\r
                                        class="scan-tool-pill"\r
                                        [class.scan-tool-pill--active]="selectedCountry === c"\r
                                    >\r
                                        <span class="text-base leading-none">{{ getFlag(c) }}</span>\r
                                        <span>{{ getCountryLabel(c) }}</span>\r
                                    </button>\r
                                }\r
                            </div>\r
                        } @else {\r
                            <div class="flex flex-wrap items-center gap-3">\r
                                <span class="scan-tool-pill scan-tool-pill--active">\r
                                    <span class="text-base leading-none">{{ getFlag(selectedCountry) }}</span>\r
                                    <span>{{ getCountryLabel(selectedCountry) }}</span>\r
                                </span>\r
                                <button\r
                                    type="button"\r
                                    class="text-sm font-semibold text-stone-900 underline underline-offset-4 dark:text-stone-100"\r
                                    (click)="openCountryPicker()"\r
                                >\r
                                    {{ 'smartScan.changeCountry' | transloco }}\r
                                </button>\r
                            </div>\r
                        }\r
                    </div>\r
\r
                    @if (selectedCountry) {\r
                        <div>\r
                            <mat-form-field\r
                                appearance="outline"\r
                                class="scan-tool-search w-full"\r
                                subscriptSizing="dynamic"\r
                            >\r
                                <mat-icon matPrefix class="mr-2 text-stone-400">search</mat-icon>\r
                                <input\r
                                    matInput\r
                                    [(ngModel)]="searchQuery"\r
                                    [placeholder]="'smartScan.searchPlaceholder' | transloco"\r
                                />\r
                                @if (searchQuery) {\r
                                    <button\r
                                        matSuffix\r
                                        mat-icon-button\r
                                        (click)="searchQuery = ''"\r
                                        type="button"\r
                                    >\r
                                        <mat-icon>close</mat-icon>\r
                                    </button>\r
                                }\r
                            </mat-form-field>\r
                        </div>\r
\r
                        <div class="flex flex-col gap-6">\r
                            <div class="scan-tool-segment" role="group">\r
                                <button\r
                                    type="button"\r
                                    (click)="toggleMine(false)"\r
                                    class="scan-tool-segment__option"\r
                                    [class.scan-tool-segment__option--active]="!showMine"\r
                                >\r
                                    {{ 'smartScan.mineFilterAll' | transloco }}\r
                                </button>\r
                                <button\r
                                    type="button"\r
                                    (click)="toggleMine(true)"\r
                                    class="scan-tool-segment__option"\r
                                    [class.scan-tool-segment__option--active]="showMine"\r
                                >\r
                                    {{ 'smartScan.mineFilterMine' | transloco }}\r
                                </button>\r
                            </div>\r
                            <div class="flex flex-wrap items-center gap-x-5 gap-y-2">\r
                                <button\r
                                    type="button"\r
                                    (click)="selectedCategory = ''"\r
                                    class="scan-tool-text-filter"\r
                                    [class.scan-tool-text-filter--active]="!selectedCategory"\r
                                >\r
                                    {{ 'smartScan.allCategories' | transloco }}\r
                                </button>\r
                                @for (cat of categories; track cat) {\r
                                    <button\r
                                        type="button"\r
                                        (click)="toggleCategory(cat)"\r
                                        class="scan-tool-text-filter"\r
                                        [class.scan-tool-text-filter--active]="selectedCategory === cat"\r
                                    >\r
                                        {{ getCategoryLabel(cat) }}\r
                                    </button>\r
                                }\r
                            </div>\r
                        </div>\r
                    }\r
                    </section>\r
                </div>\r
\r
                <div\r
                    class="border-t border-stone-100 px-6 py-6 md:px-8 md:py-8 dark:border-gray-800"\r
                >\r
                    <h4\r
                        class="mb-4 text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400"\r
                    >\r
                        {{ 'smartScan.selectDocumentType' | transloco }}\r
                    </h4>\r
                    @if (selectedCountry && !documentTypesLoading) {\r
                        <p class="mb-6 text-sm text-stone-600 dark:text-stone-400">\r
                            {{ filteredDocumentTypes.length }}\r
                            {{ 'smartScan.results' | transloco | lowercase }}\r
                        </p>\r
                    }\r
\r
                    @if (!selectedCountry) {\r
                        <div\r
                            class="flex flex-col items-center justify-center rounded-2xl border border-dashed border-stone-200 bg-stone-50/50 py-16 text-center dark:border-gray-700 dark:bg-gray-950/30"\r
                        >\r
                            <mat-icon\r
                                class="icon-size-16 mb-4 text-stone-300 dark:text-stone-600"\r
                                [svgIcon]="'heroicons_outline:document-magnifying-glass'"\r
                            ></mat-icon>\r
                            <p class="text-base font-medium text-stone-600 dark:text-stone-400">\r
                                {{ 'smartScan.selectCountryToSeeTypes' | transloco }}\r
                            </p>\r
                        </div>\r
                    } @else if (documentTypesLoading) {\r
                        <div class="flex items-center justify-center py-16">\r
                            <mat-progress-spinner\r
                                mode="indeterminate"\r
                                diameter="36"\r
                            ></mat-progress-spinner>\r
                        </div>\r
                    } @else if (filteredDocumentTypes.length > 0) {\r
                        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">\r
                            @for (dt of filteredDocumentTypes; track dt._id) {\r
                                <div\r
                                    class="doc-type-card cursor-pointer"\r
                                    (click)="selectDocumentType(dt)"\r
                                    (contextmenu)="onOwnedCardContextMenu($event, dt)"\r
                                >\r
                                    <div class="scan-tool-doc-card">\r
                                        <div class="scan-tool-doc-card__media">\r
                                            @if (flippedCardId === dt._id && dt.backImage) {\r
                                                <img\r
                                                    [src]="dt.backImage"\r
                                                    [alt]="dt.name + ' (back)'"\r
                                                    class="h-full w-full object-contain"\r
                                                    loading="lazy"\r
                                                />\r
                                            } @else if (dt.frontImage) {\r
                                                <img\r
                                                    [src]="dt.frontImage"\r
                                                    [alt]="dt.name"\r
                                                    class="h-full w-full object-contain"\r
                                                    loading="lazy"\r
                                                />\r
                                            } @else {\r
                                                <div\r
                                                    class="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-stone-100 to-stone-200/80 dark:from-gray-900 dark:to-gray-950"\r
                                                >\r
                                                    <mat-icon\r
                                                        class="icon-size-16 text-stone-300 dark:text-stone-600"\r
                                                        [svgIcon]="\r
                                                            'heroicons_outline:identification'\r
                                                        "\r
                                                    ></mat-icon>\r
                                                </div>\r
                                            }\r
                                            @if (dt.client) {\r
                                                <button\r
                                                    type="button"\r
                                                    mat-icon-button\r
                                                    class="absolute left-1 top-1 flex h-8 w-8 items-center justify-center rounded-lg bg-black/40 text-white hover:bg-black/60"\r
                                                    (click)="editDocumentType(dt, $event)"\r
                                                    [attr.aria-label]="'smartScan.editDocumentType' | transloco"\r
                                                >\r
                                                    <mat-icon class="icon-size-4">edit</mat-icon>\r
                                                </button>\r
                                            }\r
                                            @if (dt.backImage) {\r
                                                <button\r
                                                    type="button"\r
                                                    mat-icon-button\r
                                                    class="absolute right-1 top-1 flex h-8 w-8 items-center justify-center rounded-lg bg-black/40 text-white hover:bg-black/60"\r
                                                    (click)="flipCard(dt._id, $event)"\r
                                                    [title]="\r
                                                        flippedCardId === dt._id\r
                                                            ? 'Show front'\r
                                                            : 'Show back'\r
                                                    "\r
                                                >\r
                                                    <mat-icon class="icon-size-4">{{\r
                                                        flippedCardId === dt._id\r
                                                            ? 'flip_to_front'\r
                                                            : 'flip'\r
                                                    }}</mat-icon>\r
                                                </button>\r
                                            }\r
                                        </div>\r
                                        <div class="p-4">\r
                                            <div class="min-w-0">\r
                                                <span class="scan-tool-doc-card__code">{{\r
                                                    dt.code\r
                                                }}</span>\r
                                                @if (dt.client) {\r
                                                    <span class="ml-2 text-[10px] font-semibold uppercase tracking-wide text-stone-400">\r
                                                        {{ 'smartScan.yourFields' | transloco }}\r
                                                    </span>\r
                                                } @else {\r
                                                    <span class="ml-2 text-[10px] font-semibold uppercase tracking-wide text-stone-400">\r
                                                        {{ 'smartScan.verifikFields' | transloco }}\r
                                                    </span>\r
                                                }\r
                                                <p\r
                                                    class="mt-2 truncate text-sm font-semibold text-stone-900 dark:text-white"\r
                                                >\r
                                                    {{ dt.name }}\r
                                                </p>\r
                                            </div>\r
                                            <div\r
                                                class="mt-2 flex flex-wrap items-center gap-1.5 text-xs text-stone-500 dark:text-stone-400"\r
                                            >\r
                                                <span class="text-base leading-none">{{\r
                                                    getFlag(dt.country)\r
                                                }}</span>\r
                                                <span>{{ getCountryLabel(dt.country) }}</span>\r
                                                <span>\xB7</span>\r
                                                <span>{{ getCategoryLabel(dt.category) }}</span>\r
                                            </div>\r
                                            @if (!dt.client) {\r
                                                <button\r
                                                    type="button"\r
                                                    class="mt-3 text-xs font-semibold text-stone-900 underline dark:text-stone-100"\r
                                                    (click)="useMyFields(dt, $event)"\r
                                                >\r
                                                    {{ 'smartScan.useMyFields' | transloco }}\r
                                                </button>\r
                                            }\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                            }\r
                            <a\r
                                class="doc-type-card flex min-h-64 cursor-pointer flex-col items-center justify-center rounded-3xl border border-dashed border-stone-300 bg-stone-50/70 p-6 text-center transition hover:border-stone-400 dark:border-gray-600 dark:bg-gray-950/40"\r
                                [routerLink]="['/smart-enroll/smart-scan/document-type/new']"\r
                                [queryParams]="{ country: selectedCountry }"\r
                            >\r
                                <mat-icon class="icon-size-10 mb-3 text-stone-400">add</mat-icon>\r
                                <p class="text-sm font-semibold text-stone-800 dark:text-stone-100">\r
                                    {{ 'smartScan.addDocumentType' | transloco }}\r
                                </p>\r
                                <p class="mt-1 text-xs text-stone-500">\r
                                    {{ 'smartScan.addDocumentTypeHint' | transloco }}\r
                                </p>\r
                            </a>\r
                        </div>\r
                    } @else {\r
                        <div\r
                            class="flex flex-col items-center justify-center rounded-2xl border border-dashed border-stone-200 bg-stone-50/50 py-16 text-center dark:border-gray-700 dark:bg-gray-950/30"\r
                        >\r
                            <mat-icon\r
                                class="icon-size-16 mb-4 text-stone-300 dark:text-stone-600"\r
                                [svgIcon]="'heroicons_outline:document-magnifying-glass'"\r
                            ></mat-icon>\r
                            <p class="text-base font-medium text-stone-600 dark:text-stone-400">\r
                                {{ 'smartScan.noDocTypes' | transloco }}\r
                            </p>\r
                            <a\r
                                class="mt-4 text-sm font-semibold text-stone-900 underline dark:text-stone-100"\r
                                [routerLink]="['/smart-enroll/smart-scan/document-type/new']"\r
                                [queryParams]="{ country: selectedCountry }"\r
                            >\r
                                {{ 'smartScan.addDocumentType' | transloco }}\r
                            </a>\r
                        </div>\r
                    }\r
                </div>\r
            </div>\r
            </div>\r
        }\r
\r
        <!-- ============================================ -->\r
        <!-- STEP 2: Preview selected document            -->\r
        <!-- ============================================ -->\r
        @if (step === 'preview' && selectedDocType()) {\r
            <scan-tool-review-step\r
                [documentType]="selectedDocType()!"\r
                [requiresBackSide]="requiresBackSide"\r
                [frontFields]="selectedTemplateFields"\r
                [backFields]="selectedTemplateBackFields"\r
                [flag]="getFlag(selectedDocType()!.country)"\r
                [countryLabel]="getCountryLabel(selectedDocType()!.country)"\r
                [categoryLabel]="getCategoryLabel(selectedDocType()!.category)"\r
                (changeDocument)="backToSelect()"\r
                (proceed)="proceedToUpload()"\r
                (changeFields)="changeSelectedFields()"\r
                (connectCheck)="connectGovernmentCheck()"\r
            />\r
        }\r
\r
        <!-- ============================================ -->\r
        <!-- STEP 3: Upload Document                      -->\r
        <!-- ============================================ -->\r
        @if (step === 'upload') {\r
            <div class="scan-tool-panel overflow-hidden">\r
                <div class="space-y-6 p-6 md:p-8">\r
                    <div class="scan-tool-strip">\r
                        <span class="text-base leading-none">{{\r
                            getFlag(selectedDocType()?.country ?? '')\r
                        }}</span>\r
                        <div class="min-w-0 flex-1">\r
                            <p class="text-sm font-semibold text-stone-900 dark:text-white">\r
                                {{ selectedDocType()?.code }} \u2014 {{ selectedDocType()?.name }}\r
                            </p>\r
                            <p class="text-xs text-stone-600 dark:text-stone-400">\r
                                {{ getCountryLabel(selectedDocType()?.country ?? '') }} \xB7\r
                                {{ getCategoryLabel(selectedDocType()?.category ?? '') }}\r
                            </p>\r
                        </div>\r
                        <button\r
                            mat-stroked-button\r
                            (click)="backToPreview()"\r
                            class="scan-tool-mat-btn-pill shrink-0 !text-xs"\r
                        >\r
                            {{ 'smartScan.changeDocument' | transloco }}\r
                        </button>\r
                    </div>\r
\r
                    <p class="text-sm text-stone-600 dark:text-stone-300">\r
                        {{ (requiresBackSide ? 'smartScan.uploadTwoSides' : 'smartScan.onePhotoHelp') | transloco }}\r
                    </p>\r
                    <div>\r
                        <h4\r
                            class="mb-1 text-xs font-semibold uppercase tracking-wider text-stone-600 dark:text-stone-400"\r
                        >\r
                            {{ 'smartScan.frontPhotoTitle' | transloco }}\r
                        </h4>\r
                        <p class="mb-2 text-xs text-stone-500">{{ 'smartScan.frontPhotoHelp' | transloco }}</p>\r
                        <div\r
                            class="scan-tool-dropzone"\r
                            (click)="triggerFrontInput()"\r
                            (drop)="onDropFront($event)"\r
                            (dragover)="onDragOver($event)"\r
                        >\r
                            <input\r
                                #frontInput\r
                                type="file"\r
                                [accept]="ACCEPTED"\r
                                (change)="onFrontSelected($event)"\r
                                class="hidden"\r
                            />\r
                            @if (frontUrl) {\r
                                <div class="flex items-center gap-4 p-4">\r
                                    <img\r
                                        [src]="frontUrl"\r
                                        alt="Front"\r
                                        class="h-20 w-28 rounded-xl border border-stone-200 object-cover dark:border-gray-700"\r
                                    />\r
                                    <div class="min-w-0 flex-1">\r
                                        <p\r
                                            class="text-sm font-medium text-stone-900 dark:text-white"\r
                                        >\r
                                            {{ frontFile?.name }}\r
                                        </p>\r
                                        <button\r
                                            mat-stroked-button\r
                                            (click)="triggerFrontInput(); $event.stopPropagation()"\r
                                            class="scan-tool-mat-btn-pill mt-2 !text-xs"\r
                                        >\r
                                            {{ 'smartReduce.changeImage' | transloco }}\r
                                        </button>\r
                                    </div>\r
                                </div>\r
                            } @else {\r
                                <div class="flex flex-col items-center justify-center px-6 py-14">\r
                                    <mat-icon\r
                                        class="icon-size-12 mb-3 text-stone-400 dark:text-stone-500"\r
                                        >cloud_upload</mat-icon\r
                                    >\r
                                    <p\r
                                        class="text-base font-medium text-stone-800 dark:text-stone-200"\r
                                    >\r
                                        {{ 'smartScan.dropZone' | transloco }}\r
                                    </p>\r
                                    <p class="mt-1 text-xs text-stone-500 dark:text-stone-400">\r
                                        JPG, JPEG, PNG\r
                                    </p>\r
                                </div>\r
                            }\r
                        </div>\r
                    </div>\r
\r
                    @if (requiresBackSide) {\r
                        <div>\r
                            <h4\r
                                class="mb-1 text-xs font-semibold uppercase tracking-wider text-stone-600 dark:text-stone-400"\r
                            >\r
                                {{ 'smartScan.backPhotoTitle' | transloco }}\r
                            </h4>\r
                            <p class="mb-2 text-xs text-stone-500">{{ 'smartScan.backPhotoHelp' | transloco }}</p>\r
                            <div\r
                                class="scan-tool-dropzone"\r
                                (click)="triggerBackInput()"\r
                                (drop)="onDropBack($event)"\r
                                (dragover)="onDragOver($event)"\r
                            >\r
                                <input\r
                                    #backInput\r
                                    type="file"\r
                                    [accept]="ACCEPTED"\r
                                    (change)="onBackSelected($event)"\r
                                    class="hidden"\r
                                />\r
                                @if (backUrl) {\r
                                    <div class="flex items-center gap-4 p-4">\r
                                        <img\r
                                            [src]="backUrl"\r
                                            alt="Back"\r
                                            class="h-20 w-28 rounded-xl border border-stone-200 object-cover dark:border-gray-700"\r
                                        />\r
                                        <div class="min-w-0 flex-1">\r
                                            <p\r
                                                class="text-sm font-medium text-stone-900 dark:text-white"\r
                                            >\r
                                                {{ backFile?.name }}\r
                                            </p>\r
                                            <button\r
                                                mat-stroked-button\r
                                                (click)="\r
                                                    triggerBackInput(); $event.stopPropagation()\r
                                                "\r
                                                class="scan-tool-mat-btn-pill mt-2 !text-xs"\r
                                            >\r
                                                {{ 'smartReduce.changeImage' | transloco }}\r
                                            </button>\r
                                        </div>\r
                                    </div>\r
                                } @else {\r
                                    <div\r
                                        class="flex flex-col items-center justify-center px-6 py-10"\r
                                    >\r
                                        <mat-icon\r
                                            class="icon-size-10 mb-2 text-stone-400 dark:text-stone-500"\r
                                            >image</mat-icon\r
                                        >\r
                                        <p\r
                                            class="text-sm font-medium text-stone-700 dark:text-stone-300"\r
                                        >\r
                                            {{ 'smartScan.dropZone' | transloco }}\r
                                        </p>\r
                                    </div>\r
                                }\r
                            </div>\r
                        </div>\r
                    }\r
\r
                    <div class="flex flex-wrap gap-3 pt-2">\r
                        <button\r
                            mat-flat-button\r
                            color="primary"\r
                            (click)="scanDocument()"\r
                            [disabled]="!frontFile || scanLoading()"\r
                            class="scan-tool-mat-btn-pill"\r
                        >\r
                            @if (scanLoading()) {\r
                                <mat-spinner diameter="20" class="mr-2 inline-block"></mat-spinner>\r
                                {{ 'smartScan.scanning' | transloco }}\r
                            } @else {\r
                                {{ 'smartScan.scanDocument' | transloco }}\r
                            }\r
                        </button>\r
                    </div>\r
                </div>\r
            </div>\r
        }\r
\r
        <!-- ============================================ -->\r
        <!-- STEP 4: Results                              -->\r
        <!-- ============================================ -->\r
        @if (step === 'results' && scanResult()) {\r
            <div class="scan-tool-panel overflow-hidden">\r
                @if (getClassification(); as classification) {\r
                    <div\r
                        class="border-b border-stone-200/80 dark:border-gray-800"\r
                        [ngClass]="{\r
                            'bg-emerald-50/80 dark:bg-emerald-950/30': classification.isMatch,\r
                            'bg-amber-50/80 dark:bg-amber-950/30': !classification.isMatch,\r
                        }"\r
                    >\r
                        <div class="flex items-start gap-3 p-5 md:p-6">\r
                            <mat-icon\r
                                class="icon-size-6 mt-0.5 shrink-0"\r
                                [ngClass]="{\r
                                    'text-emerald-600 dark:text-emerald-400':\r
                                        classification.isMatch,\r
                                    'text-amber-600 dark:text-amber-400': !classification.isMatch,\r
                                }"\r
                            >\r
                                {{ classification.isMatch ? 'check_circle' : 'warning' }}\r
                            </mat-icon>\r
                            <div class="min-w-0 flex-1">\r
                                <p\r
                                    class="text-base font-semibold"\r
                                    [ngClass]="{\r
                                        'text-emerald-900 dark:text-emerald-200':\r
                                            classification.isMatch,\r
                                        'text-amber-900 dark:text-amber-200':\r
                                            !classification.isMatch,\r
                                    }"\r
                                >\r
                                    {{\r
                                        classification.isMatch\r
                                            ? ('smartScan.classificationMatch' | transloco)\r
                                            : ('smartScan.classificationMismatch' | transloco)\r
                                    }}\r
                                </p>\r
\r
                                <div class="mt-3 flex flex-wrap items-center gap-2">\r
                                    <span\r
                                        class="text-xs font-medium uppercase tracking-wider text-stone-500 dark:text-stone-400"\r
                                        >{{ 'smartScan.requestedType' | transloco }}</span\r
                                    >\r
                                    <span\r
                                        class="inline-flex items-center rounded-xl border border-stone-200/80 bg-white/90 px-2.5 py-1 font-mono text-xs font-bold text-stone-800 dark:border-gray-600 dark:bg-gray-900/70 dark:text-stone-200"\r
                                    >\r
                                        {{ classification.requestedDocumentType }}\r
                                    </span>\r
                                    <mat-icon class="icon-size-4 text-stone-400"\r
                                        >arrow_forward</mat-icon\r
                                    >\r
                                    <span\r
                                        class="text-xs font-medium uppercase tracking-wider text-stone-500 dark:text-stone-400"\r
                                        >{{ 'smartScan.detectedType' | transloco }}</span\r
                                    >\r
                                    <span\r
                                        class="inline-flex items-center rounded-xl border px-2.5 py-1 font-mono text-xs font-bold"\r
                                        [ngClass]="{\r
                                            'border-emerald-300 bg-emerald-100/80 text-emerald-900 dark:border-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-100':\r
                                                classification.isMatch,\r
                                            'border-amber-300 bg-amber-100/80 text-amber-900 dark:border-amber-800 dark:bg-amber-900/40 dark:text-amber-100':\r
                                                !classification.isMatch,\r
                                        }"\r
                                    >\r
                                        {{ classification.detectedDocumentType }}\r
                                    </span>\r
                                    @if (classification.detectedDocumentName) {\r
                                        <span class="text-sm text-stone-700 dark:text-stone-300">{{\r
                                            classification.detectedDocumentName\r
                                        }}</span>\r
                                    }\r
                                </div>\r
\r
                                <div class="mt-4 flex items-center gap-3">\r
                                    <span\r
                                        class="whitespace-nowrap text-xs font-medium uppercase tracking-wider text-stone-500 dark:text-stone-400"\r
                                        >{{ 'smartScan.confidence' | transloco }}</span\r
                                    >\r
                                    <div\r
                                        class="h-2 flex-1 overflow-hidden rounded-full bg-white/60 dark:bg-gray-800/60"\r
                                    >\r
                                        <div\r
                                            class="h-full rounded-full transition-all duration-500"\r
                                            [ngClass]="{\r
                                                'bg-emerald-500': confidencePercent >= 80,\r
                                                'bg-amber-500':\r
                                                    confidencePercent >= 50 &&\r
                                                    confidencePercent < 80,\r
                                                'bg-red-500': confidencePercent < 50,\r
                                            }"\r
                                            [style.width.%]="confidencePercent"\r
                                        ></div>\r
                                    </div>\r
                                    <span\r
                                        class="min-w-[3rem] text-right text-sm font-semibold tabular-nums"\r
                                        [ngClass]="{\r
                                            'text-emerald-800 dark:text-emerald-300':\r
                                                confidencePercent >= 80,\r
                                            'text-amber-800 dark:text-amber-300':\r
                                                confidencePercent >= 50 && confidencePercent < 80,\r
                                            'text-red-800 dark:text-red-300':\r
                                                confidencePercent < 50,\r
                                        }"\r
                                        >{{ confidencePercent }}%</span\r
                                    >\r
                                </div>\r
                            </div>\r
                        </div>\r
\r
                        @if (classification.reason) {\r
                            <div\r
                                class="flex cursor-pointer select-none items-center gap-2 border-t px-5 py-3 dark:border-gray-700/80"\r
                                [ngClass]="{\r
                                    'border-emerald-200/80 hover:bg-emerald-100/40 dark:border-emerald-900/40 dark:hover:bg-emerald-900/20':\r
                                        classification.isMatch,\r
                                    'border-amber-200/80 hover:bg-amber-100/40 dark:border-amber-900/40 dark:hover:bg-amber-900/20':\r
                                        !classification.isMatch,\r
                                }"\r
                                (click)="showClassificationReason = !showClassificationReason"\r
                            >\r
                                <mat-icon\r
                                    class="icon-size-4 text-stone-500 transition-transform dark:text-stone-400"\r
                                    [ngClass]="{ 'rotate-90': showClassificationReason }"\r
                                >\r
                                    chevron_right\r
                                </mat-icon>\r
                                <span\r
                                    class="text-xs font-medium uppercase tracking-wider text-stone-500 dark:text-stone-400"\r
                                >\r
                                    {{\r
                                        showClassificationReason\r
                                            ? ('smartScan.hideReason' | transloco)\r
                                            : ('smartScan.showReason' | transloco)\r
                                    }}\r
                                </span>\r
                            </div>\r
                            @if (showClassificationReason) {\r
                                <div\r
                                    class="px-5 pb-5 text-sm leading-relaxed"\r
                                    [ngClass]="{\r
                                        'text-emerald-900 dark:text-emerald-200':\r
                                            classification.isMatch,\r
                                        'text-amber-900 dark:text-amber-200':\r
                                            !classification.isMatch,\r
                                    }"\r
                                >\r
                                    {{ classification.reason }}\r
                                </div>\r
                            }\r
                        }\r
                    </div>\r
                }\r
\r
                <div\r
                    class="scan-tool-panel__header flex flex-wrap items-center justify-between gap-4 px-5 py-4 md:px-6 md:py-5"\r
                >\r
                    <h3 class="text-lg font-semibold text-stone-900 dark:text-white">\r
                        {{ 'smartScan.results' | transloco }}\r
                    </h3>\r
                    <div class="flex flex-wrap gap-2">\r
                        <button\r
                            mat-stroked-button\r
                            (click)="showRawJson = !showRawJson"\r
                            class="scan-tool-mat-btn-pill !text-xs !border-stone-200 dark:!border-gray-600"\r
                        >\r
                            {{ 'smartScan.rawJson' | transloco }}\r
                        </button>\r
                        <button\r
                            mat-stroked-button\r
                            (click)="scanSimilar()"\r
                            class="scan-tool-mat-btn-pill !text-xs !border-stone-200 dark:!border-gray-600"\r
                        >\r
                            <mat-icon class="icon-size-4 mr-1">content_copy</mat-icon>\r
                            {{ 'smartScan.scanSimilar' | transloco }}\r
                        </button>\r
                        <button\r
                            mat-stroked-button\r
                            (click)="reset()"\r
                            class="scan-tool-mat-btn-pill !text-xs !border-stone-200 dark:!border-gray-600"\r
                        >\r
                            {{ 'smartScan.scanAnother' | transloco }}\r
                        </button>\r
                        <button\r
                            mat-flat-button\r
                            color="primary"\r
                            (click)="goToList()"\r
                            class="scan-tool-mat-btn-pill !text-xs"\r
                        >\r
                            {{ 'smartScan.viewInHistory' | transloco }}\r
                        </button>\r
                    </div>\r
                </div>\r
\r
                @if (showRawJson) {\r
                    <div class="p-6 md:p-8">\r
                        <pre\r
                            class="max-h-96 overflow-auto rounded-2xl border border-stone-200/90 bg-stone-100/80 p-4 font-mono text-xs dark:border-gray-700 dark:bg-gray-900/60"\r
                            >{{ scanResult() | json }}</pre\r
                        >\r
                    </div>\r
                } @else if (smartCheck && scanResult()) {\r
                    @let result = scanResult()!;\r
                    <div class="scan-results-decision">\r
                        <section class="scan-results-record space-y-6">\r
                            <div class="results-section-heading">\r
                                <span>01</span>\r
                                <div>\r
                                    <h4>{{ 'smartScan.extractedFields' | transloco }}</h4>\r
                                    <p>{{ (requiresBackSide ? 'smartScan.backPhotoHelp' : 'smartScan.onePhotoHelp') | transloco }}</p>\r
                                </div>\r
                            </div>\r
\r
                            <div class="space-y-4">\r
                                @if (result.url) {\r
                                    <div\r
                                        class="overflow-hidden rounded-3xl border border-stone-200/90 bg-white dark:border-gray-700 dark:bg-gray-900/50"\r
                                    >\r
                                        <button\r
                                            type="button"\r
                                            class="block w-full cursor-zoom-in border-0 bg-transparent p-0"\r
                                            (click)="openImagePreview(result.url, selectedDocType()?.name)"\r
                                        >\r
                                            <img\r
                                                [src]="result.url"\r
                                                alt="Document front"\r
                                                class="max-h-72 w-full object-contain"\r
                                            />\r
                                        </button>\r
                                    </div>\r
                                }\r
                                @if (result.backUrl) {\r
                                    <div\r
                                        class="overflow-hidden rounded-3xl border border-stone-200/90 bg-white dark:border-gray-700 dark:bg-gray-900/50"\r
                                    >\r
                                        <button\r
                                            type="button"\r
                                            class="block w-full cursor-zoom-in border-0 bg-transparent p-0"\r
                                            (click)="openImagePreview(result.backUrl, selectedDocType()?.name)"\r
                                        >\r
                                            <img\r
                                                [src]="result.backUrl"\r
                                                alt="Document back"\r
                                                class="max-h-56 w-full object-contain"\r
                                            />\r
                                        </button>\r
                                    </div>\r
                                }\r
                            </div>\r
\r
                            <div class="space-y-3">\r
                                @for (section of extractionSections(); track section.id) {\r
                                    @if (section.fields.length) {\r
                                        <div class="space-y-2">\r
                                            @if (section.labelKey) {\r
                                                <h5 class="text-sm font-medium text-stone-500 dark:text-stone-400">\r
                                                    {{ section.labelKey | transloco }}\r
                                                </h5>\r
                                            }\r
                                            <div\r
                                                class="overflow-hidden rounded-2xl border border-stone-200/90 dark:border-gray-700"\r
                                            >\r
                                                @for (f of section.fields; track f.key; let i = $index) {\r
                                                    <div\r
                                                        class="flex justify-between gap-4 px-4 py-3"\r
                                                        [ngClass]="{\r
                                                            'bg-stone-50/80 dark:bg-gray-800/40': i % 2 === 0,\r
                                                        }"\r
                                                    >\r
                                                        <span\r
                                                            class="text-sm font-medium text-stone-500 dark:text-stone-400"\r
                                                            >{{ f.key }}</span\r
                                                        >\r
                                                        <span\r
                                                            class="break-all text-right text-sm font-medium text-stone-900 dark:text-white"\r
                                                            >{{ f.value }}</span\r
                                                        >\r
                                                    </div>\r
                                                }\r
                                            </div>\r
                                        </div>\r
                                    }\r
                                }\r
                            </div>\r
                        </section>\r
\r
                        <aside class="scan-results-explainer">\r
                            <scan-tool-smart-check-result\r
                                [scanResult]="result"\r
                                [documentType]="selectedDocType()"\r
                            />\r
                        </aside>\r
                    </div>\r
                } @else {\r
                    <div class="space-y-6 p-6 md:p-8">\r
                        <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">\r
                            <div class="space-y-4">\r
                                @if (scanResult()?.url) {\r
                                    <div\r
                                        class="overflow-hidden rounded-3xl border border-stone-200/90 bg-white dark:border-gray-700 dark:bg-gray-900/50"\r
                                    >\r
                                        <button\r
                                            type="button"\r
                                            class="block w-full cursor-zoom-in border-0 bg-transparent p-0"\r
                                            (click)="openImagePreview(scanResult()!.url, selectedDocType()?.name)"\r
                                        >\r
                                            <img\r
                                                [src]="scanResult()!.url"\r
                                                alt="Document front"\r
                                                class="max-h-80 w-full object-contain"\r
                                            />\r
                                        </button>\r
                                    </div>\r
                                }\r
                                @if (scanResult()?.backUrl) {\r
                                    <div\r
                                        class="overflow-hidden rounded-3xl border border-stone-200/90 bg-white dark:border-gray-700 dark:bg-gray-900/50"\r
                                    >\r
                                        <button\r
                                            type="button"\r
                                            class="block w-full cursor-zoom-in border-0 bg-transparent p-0"\r
                                            (click)="openImagePreview(scanResult()!.backUrl, selectedDocType()?.name)"\r
                                        >\r
                                            <img\r
                                                [src]="scanResult()!.backUrl"\r
                                                alt="Document back"\r
                                                class="max-h-60 w-full object-contain"\r
                                            />\r
                                        </button>\r
                                    </div>\r
                                }\r
                            </div>\r
\r
                            <div class="space-y-3">\r
                                <h4 class="font-semibold text-stone-900 dark:text-white">\r
                                    {{ 'smartScan.extractedFields' | transloco }}\r
                                </h4>\r
                                <p class="text-xs text-stone-500">\r
                                    {{ (requiresBackSide ? 'smartScan.backPhotoHelp' : 'smartScan.onePhotoHelp') | transloco }}\r
                                </p>\r
                                @for (section of extractionSections(); track section.id) {\r
                                    @if (section.fields.length) {\r
                                        <div class="space-y-2">\r
                                            @if (section.labelKey) {\r
                                                <h5 class="text-sm font-medium text-stone-500 dark:text-stone-400">\r
                                                    {{ section.labelKey | transloco }}\r
                                                </h5>\r
                                            }\r
                                            <div\r
                                                class="overflow-hidden rounded-2xl border border-stone-200/90 dark:border-gray-700"\r
                                            >\r
                                                @for (f of section.fields; track f.key; let i = $index) {\r
                                                    <div\r
                                                        class="flex justify-between gap-4 px-4 py-3"\r
                                                        [ngClass]="{\r
                                                            'bg-stone-50/80 dark:bg-gray-800/40': i % 2 === 0,\r
                                                        }"\r
                                                    >\r
                                                        <span\r
                                                            class="text-sm font-medium text-stone-500 dark:text-stone-400"\r
                                                            >{{ f.key }}</span\r
                                                        >\r
                                                        <span\r
                                                            class="break-all text-right text-sm font-medium text-stone-900 dark:text-white"\r
                                                            >{{ f.value }}</span\r
                                                        >\r
                                                    </div>\r
                                                }\r
                                            </div>\r
                                        </div>\r
                                    }\r
                                }\r
                            </div>\r
                        </div>\r
                    </div>\r
                }\r
            </div>\r
        }\r
    </div>\r
    <div\r
        class="fixed z-50 h-0 w-0"\r
        [style.left.px]="menuX"\r
        [style.top.px]="menuY"\r
        [matMenuTriggerFor]="ownedTypeMenu"\r
        #editMenuTrigger="matMenuTrigger"\r
    ></div>\r
    <mat-menu #ownedTypeMenu="matMenu">\r
        <button mat-menu-item type="button" (click)="editContextDocumentType()">\r
            <mat-icon>edit</mat-icon>\r
            <span>{{ 'smartScan.editDocumentType' | transloco }}</span>\r
        </button>\r
    </mat-menu>\r
</div>\r
`, styles: ['@charset "UTF-8";\n\n/* src/app/modules/smart-enroll/smart-scan/scan-tool/scan-tool.component.scss */\n:host {\n  display: block;\n}\n.scan-tool-root {\n  --st-radius: 1.25rem;\n  --st-radius-sm: 0.875rem;\n}\n.scan-tool-steps__item--current {\n  --tw-bg-opacity: 1;\n  background-color: rgb(28 25 23 / var(--tw-bg-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);\n  box-shadow:\n    var(--tw-ring-offset-shadow, 0 0 #0000),\n    var(--tw-ring-shadow, 0 0 #0000),\n    var(--tw-shadow);\n}\n.scan-tool-steps__item--current:where(.dark, .dark *) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(245 245 244 / var(--tw-bg-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(28 25 23 / var(--tw-text-opacity, 1));\n}\n.scan-tool-steps__item--done {\n  background-color: rgb(231 229 228 / 0.8);\n  --tw-text-opacity: 1;\n  color: rgb(68 64 60 / var(--tw-text-opacity, 1));\n}\n.scan-tool-steps__item--done:where(.dark, .dark *) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(51 65 85 / var(--tw-bg-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(231 229 228 / var(--tw-text-opacity, 1));\n}\n.scan-tool-steps__item--todo {\n  border-width: 1px;\n  border-color: rgb(231 229 228 / 0.9);\n  background-color: rgb(255 255 255 / 0.8);\n  --tw-text-opacity: 1;\n  color: rgb(168 162 158 / var(--tw-text-opacity, 1));\n}\n.scan-tool-steps__item--todo:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(51 65 85 / var(--tw-border-opacity, 1));\n  background-color: rgb(15 23 42 / 0.4);\n  --tw-text-opacity: 1;\n  color: rgb(100 116 139 / var(--tw-text-opacity, 1));\n}\n.scan-tool-doc-card {\n  position: relative;\n  overflow: hidden;\n  border-radius: 1.5rem;\n  border-width: 1px;\n  border-color: rgb(231 229 228 / 0.9);\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 200ms;\n}\n.scan-tool-doc-card:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(51 65 85 / var(--tw-border-opacity, 1));\n  background-color: rgb(15 23 42 / 0.6);\n}\n.scan-tool-doc-card {\n  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);\n}\n.scan-tool-doc-card:hover {\n  box-shadow: 0 12px 32px -12px rgba(15, 23, 42, 0.12);\n  --tw-border-opacity: 1;\n  border-color: rgb(214 211 209 / var(--tw-border-opacity, 1));\n}\n.scan-tool-doc-card:hover:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(71 85 105 / var(--tw-border-opacity, 1));\n}\n.scan-tool-doc-card__media {\n  position: relative;\n  height: 9rem;\n  overflow: hidden;\n  --tw-bg-opacity: 1;\n  background-color: rgb(245 245 244 / var(--tw-bg-opacity, 1));\n}\n.scan-tool-doc-card__media:where(.dark, .dark *) {\n  background-color: rgb(2 6 23 / 0.8);\n}\n.scan-tool-doc-card__code {\n  display: inline-block;\n  border-radius: 0.375rem;\n  --tw-bg-opacity: 1;\n  background-color: rgb(245 245 244 / var(--tw-bg-opacity, 1));\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n  padding-top: 0.125rem;\n  padding-bottom: 0.125rem;\n  font-family:\n    "IBM Plex Mono",\n    ui-monospace,\n    SFMono-Regular,\n    Menlo,\n    Monaco,\n    Consolas,\n    "Liberation Mono",\n    "Courier New",\n    monospace;\n  font-size: 10px;\n  font-weight: 600;\n  letter-spacing: 0.025em;\n  --tw-text-opacity: 1;\n  color: rgb(87 83 78 / var(--tw-text-opacity, 1));\n}\n.scan-tool-doc-card__code:where(.dark, .dark *) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(30 41 59 / var(--tw-bg-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(168 162 158 / var(--tw-text-opacity, 1));\n}\n.scan-tool-panel {\n  overflow: hidden;\n  border-radius: 1.5rem;\n  border-width: 1px;\n  border-color: rgb(231 229 228 / 0.9);\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);\n  box-shadow:\n    var(--tw-ring-offset-shadow, 0 0 #0000),\n    var(--tw-ring-shadow, 0 0 #0000),\n    var(--tw-shadow);\n}\n.scan-tool-panel:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(51 65 85 / var(--tw-border-opacity, 1));\n  background-color: rgb(15 23 42 / 0.5);\n}\n.scan-tool-panel {\n  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);\n}\n.scan-tool-panel__header {\n  border-bottom-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgb(245 245 244 / var(--tw-border-opacity, 1));\n}\n.scan-tool-panel__header:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(30 41 59 / var(--tw-border-opacity, 1));\n}\n.scan-tool-pill {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.375rem;\n  border-radius: 9999px;\n  border-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgb(231 229 228 / var(--tw-border-opacity, 1));\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n  padding-left: 1rem;\n  padding-right: 1rem;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  font-size: 0.75rem;\n  font-weight: 500;\n  --tw-text-opacity: 1;\n  color: rgb(68 64 60 / var(--tw-text-opacity, 1));\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 200ms;\n}\n.scan-tool-pill:hover {\n  --tw-border-opacity: 1;\n  border-color: rgb(214 211 209 / var(--tw-border-opacity, 1));\n}\n.scan-tool-pill:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(51 65 85 / var(--tw-border-opacity, 1));\n  background-color: rgb(15 23 42 / 0.4);\n  --tw-text-opacity: 1;\n  color: rgb(231 229 228 / var(--tw-text-opacity, 1));\n}\n.scan-tool-pill:hover:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(71 85 105 / var(--tw-border-opacity, 1));\n}\n.scan-tool-pill--active {\n  --tw-border-opacity: 1;\n  border-color: rgb(28 25 23 / var(--tw-border-opacity, 1));\n  --tw-bg-opacity: 1;\n  background-color: rgb(28 25 23 / var(--tw-bg-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);\n  box-shadow:\n    var(--tw-ring-offset-shadow, 0 0 #0000),\n    var(--tw-ring-shadow, 0 0 #0000),\n    var(--tw-shadow);\n}\n.scan-tool-pill--active:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(245 245 244 / var(--tw-border-opacity, 1));\n  --tw-bg-opacity: 1;\n  background-color: rgb(245 245 244 / var(--tw-bg-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(28 25 23 / var(--tw-text-opacity, 1));\n}\n.scan-tool-chip {\n  border-radius: 9999px;\n  border-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgb(231 229 228 / var(--tw-border-opacity, 1));\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n  padding-left: 0.875rem;\n  padding-right: 0.875rem;\n  padding-top: 0.375rem;\n  padding-bottom: 0.375rem;\n  font-size: 0.625rem;\n  font-weight: 600;\n  --tw-text-opacity: 1;\n  color: rgb(87 83 78 / var(--tw-text-opacity, 1));\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 200ms;\n}\n.scan-tool-chip:hover {\n  --tw-border-opacity: 1;\n  border-color: rgb(214 211 209 / var(--tw-border-opacity, 1));\n}\n.scan-tool-chip:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(51 65 85 / var(--tw-border-opacity, 1));\n  background-color: rgb(15 23 42 / 0.4);\n  --tw-text-opacity: 1;\n  color: rgb(214 211 209 / var(--tw-text-opacity, 1));\n}\n.scan-tool-chip:hover:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(71 85 105 / var(--tw-border-opacity, 1));\n}\n.scan-tool-chip--active {\n  --tw-border-opacity: 1;\n  border-color: rgb(28 25 23 / var(--tw-border-opacity, 1));\n  --tw-bg-opacity: 1;\n  background-color: rgb(28 25 23 / var(--tw-bg-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n}\n.scan-tool-chip--active:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(245 245 244 / var(--tw-border-opacity, 1));\n  --tw-bg-opacity: 1;\n  background-color: rgb(245 245 244 / var(--tw-bg-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(28 25 23 / var(--tw-text-opacity, 1));\n}\n.scan-tool-segment {\n  display: inline-flex;\n  width: fit-content;\n  align-items: center;\n  gap: 0.25rem;\n  border-radius: 9999px;\n  --tw-bg-opacity: 1;\n  background-color: rgb(245 245 244 / var(--tw-bg-opacity, 1));\n  padding: 0.25rem;\n}\n.scan-tool-segment:where(.dark, .dark *) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(30 41 59 / var(--tw-bg-opacity, 1));\n}\n.scan-tool-segment__option {\n  border-radius: 9999px;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  padding-top: 0.375rem;\n  padding-bottom: 0.375rem;\n  font-size: 0.625rem;\n  font-weight: 600;\n  --tw-text-opacity: 1;\n  color: rgb(120 113 108 / var(--tw-text-opacity, 1));\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.scan-tool-segment__option:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(168 162 158 / var(--tw-text-opacity, 1));\n}\n.scan-tool-segment__option--active {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(28 25 23 / var(--tw-text-opacity, 1));\n  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);\n  box-shadow:\n    var(--tw-ring-offset-shadow, 0 0 #0000),\n    var(--tw-ring-shadow, 0 0 #0000),\n    var(--tw-shadow);\n}\n.scan-tool-segment__option--active:where(.dark, .dark *) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(2 6 23 / var(--tw-bg-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(245 245 244 / var(--tw-text-opacity, 1));\n}\n.scan-tool-text-filter {\n  border-bottom-width: 2px;\n  border-color: transparent;\n  padding-bottom: 0.25rem;\n  font-size: 0.75rem;\n  font-weight: 500;\n  --tw-text-opacity: 1;\n  color: rgb(120 113 108 / var(--tw-text-opacity, 1));\n  transition-property:\n    color,\n    background-color,\n    border-color,\n    text-decoration-color,\n    fill,\n    stroke;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.scan-tool-text-filter:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(168 162 158 / var(--tw-text-opacity, 1));\n}\n.scan-tool-text-filter--active {\n  --tw-border-opacity: 1;\n  border-color: rgb(28 25 23 / var(--tw-border-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(28 25 23 / var(--tw-text-opacity, 1));\n}\n.scan-tool-text-filter--active:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(245 245 244 / var(--tw-border-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(245 245 244 / var(--tw-text-opacity, 1));\n}\n.scan-tool-dropzone {\n  cursor: pointer;\n  overflow: hidden;\n  border-radius: 1.5rem;\n  border-width: 2px;\n  border-style: dashed;\n  --tw-border-opacity: 1;\n  border-color: rgb(231 229 228 / var(--tw-border-opacity, 1));\n  background-color: rgb(250 250 249 / 0.5);\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 200ms;\n}\n.scan-tool-dropzone:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(51 65 85 / var(--tw-border-opacity, 1));\n  background-color: rgb(2 6 23 / 0.3);\n}\n.scan-tool-dropzone:hover {\n  --tw-border-opacity: 1;\n  border-color: rgb(168 162 158 / var(--tw-border-opacity, 1));\n  --tw-bg-opacity: 1;\n  background-color: rgb(250 250 249 / var(--tw-bg-opacity, 1));\n}\n.scan-tool-dropzone:hover:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(100 116 139 / var(--tw-border-opacity, 1));\n  background-color: rgb(15 23 42 / 0.4);\n}\n.scan-tool-strip {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  border-radius: 1rem;\n  border-width: 1px;\n  border-color: rgb(231 229 228 / 0.9);\n  background-color: rgb(250 250 249 / 0.8);\n  padding: 1rem;\n}\n.scan-tool-strip:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(51 65 85 / var(--tw-border-opacity, 1));\n  background-color: rgb(15 23 42 / 0.4);\n}\n:host ::ng-deep .scan-tool-search .mat-mdc-text-field-wrapper {\n  background-color: transparent;\n}\n:host ::ng-deep .scan-tool-search .mdc-notched-outline .mdc-notched-outline__leading,\n:host ::ng-deep .scan-tool-search .mdc-notched-outline .mdc-notched-outline__notch,\n:host ::ng-deep .scan-tool-search .mdc-notched-outline .mdc-notched-outline__trailing {\n  border-color: rgb(231, 229, 228) !important;\n}\n:host ::ng-deep .scan-tool-search .mat-mdc-form-field-focus-overlay {\n  opacity: 0;\n}\n:host ::ng-deep .scan-tool-search.mat-focused .mdc-notched-outline .mdc-notched-outline__leading,\n:host ::ng-deep .scan-tool-search.mat-focused .mdc-notched-outline .mdc-notched-outline__notch,\n:host ::ng-deep .scan-tool-search.mat-focused .mdc-notched-outline .mdc-notched-outline__trailing {\n  border-color: rgb(120, 113, 108) !important;\n}\n:host ::ng-deep .dark .scan-tool-search .mdc-notched-outline .mdc-notched-outline__leading,\n:host ::ng-deep .dark .scan-tool-search .mdc-notched-outline .mdc-notched-outline__notch,\n:host ::ng-deep .dark .scan-tool-search .mdc-notched-outline .mdc-notched-outline__trailing {\n  border-color: rgb(63, 63, 70) !important;\n}\n:host ::ng-deep .dark .scan-tool-search.mat-focused .mdc-notched-outline .mdc-notched-outline__leading,\n:host ::ng-deep .dark .scan-tool-search.mat-focused .mdc-notched-outline .mdc-notched-outline__notch,\n:host ::ng-deep .dark .scan-tool-search.mat-focused .mdc-notched-outline .mdc-notched-outline__trailing {\n  border-color: rgb(161, 161, 170) !important;\n}\n:host ::ng-deep .scan-tool-mat-btn-pill.mat-mdc-unelevated-button,\n:host ::ng-deep .scan-tool-mat-btn-pill.mat-mdc-outlined-button {\n  border-radius: 9999px;\n}\n.doc-type-card {\n}\n.scan-results-decision {\n  display: grid;\n  grid-template-columns: minmax(0, 1.15fr) minmax(22rem, 0.85fr);\n}\n@media (max-width: 1024px) {\n  .scan-results-decision {\n    grid-template-columns: 1fr;\n  }\n}\n.scan-results-record,\n.scan-results-explainer {\n  padding: 1.75rem;\n}\n.scan-results-explainer {\n  background: #1c1917;\n  color: #fafaf9;\n}\n.results-section-heading {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.8rem;\n}\n.results-section-heading > span {\n  display: grid;\n  flex: 0 0 1.8rem;\n  width: 1.8rem;\n  height: 1.8rem;\n  place-items: center;\n  border-radius: 999px;\n  background: #292524;\n  color: #fff;\n  font-size: 0.62rem;\n  font-weight: 750;\n}\n.results-section-heading h4 {\n  margin: 0;\n  color: #292524;\n  font-size: 0.95rem;\n  font-weight: 680;\n}\n.results-section-heading p {\n  margin: 0.25rem 0 0;\n  color: #78716c;\n  font-size: 0.72rem;\n  line-height: 1.45;\n}\n:host-context(.dark) .scan-results-explainer {\n  background: #020617;\n}\n:host-context(.dark) .results-section-heading > span {\n  background: #334155;\n}\n:host-context(.dark) .results-section-heading h4 {\n  color: #f8fafc;\n}\n:host-context(.dark) .results-section-heading p {\n  color: #94a3b8;\n}\n/*# sourceMappingURL=scan-tool.component.css.map */\n'] }]
  }], null, { frontInput: [{
    type: ViewChild,
    args: ["frontInput"]
  }], backInput: [{
    type: ViewChild,
    args: ["backInput"]
  }], editMenuTrigger: [{
    type: ViewChild,
    args: ["editMenuTrigger"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ScanToolComponent, { className: "ScanToolComponent", filePath: "src/app/modules/smart-enroll/smart-scan/scan-tool/scan-tool.component.ts", lineNumber: 82 });
})();
export {
  ScanToolComponent
};
//# sourceMappingURL=chunk-67K4MGSR.js.map
