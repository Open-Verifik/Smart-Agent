import {
  DemoScannerShellComponent
} from "./chunk-4YJHDTUQ.js";
import {
  DemoCaptureOptionHeadingComponent,
  DemoChooseOneCalloutComponent,
  DemoOrDividerComponent,
  FaceGuidedCameraComponent
} from "./chunk-DCFVZDVI.js";
import {
  DemoUploadImageButtonComponent
} from "./chunk-TDKQRHA6.js";
import {
  DemoRasterImageComponent
} from "./chunk-ZLWP3B24.js";
import {
  DemoRelatedDocsSectionComponent
} from "./chunk-QCUB3VMU.js";
import {
  BiometricsDemoApiService,
  DemoPageShellComponent,
  fileToBase64
} from "./chunk-QDU3MPYG.js";
import "./chunk-45PTEIW3.js";
import "./chunk-B4YUVLJ7.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  RangeValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-5EV2TUYF.js";
import {
  TranslocoModule,
  TranslocoPipe,
  TranslocoService
} from "./chunk-VENEX45A.js";
import "./chunk-DM2XPT7T.js";
import "./chunk-KTYFS5OT.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  JsonPipe,
  NgClass,
  ViewChild,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-I5BUD46C.js";
import {
  __async
} from "./chunk-F5M2C4EZ.js";

// src/app/modules/smart-enroll/demos/pages/detect-face/detect-face-demo.component.ts
var _c0 = ["fileInput"];
var _c1 = (a0) => ({ score: a0 });
function DetectFaceDemoComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 4);
  }
}
function DetectFaceDemoComponent_Conditional_9_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "app-demo-choose-one-callout", 19);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementStart(3, "section", 20);
    \u0275\u0275element(4, "app-demo-capture-option-heading", 21);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementStart(7, "app-demo-scanner-shell")(8, "div", 22)(9, "app-face-guided-camera", 23);
    \u0275\u0275listener("captured", function DetectFaceDemoComponent_Conditional_9_Conditional_16_Template_app_face_guided_camera_captured_9_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onCapture($event));
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275element(10, "app-demo-or-divider");
    \u0275\u0275elementStart(11, "section", 24);
    \u0275\u0275element(12, "app-demo-capture-option-heading", 25);
    \u0275\u0275pipe(13, "transloco");
    \u0275\u0275pipe(14, "transloco");
    \u0275\u0275elementStart(15, "app-demo-upload-image-button", 26);
    \u0275\u0275pipe(16, "transloco");
    \u0275\u0275pipe(17, "transloco");
    \u0275\u0275listener("clicked", function DetectFaceDemoComponent_Conditional_9_Conditional_16_Template_app_demo_upload_image_button_clicked_15_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.triggerFilePicker());
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("description", \u0275\u0275pipeBind1(2, 11, "smartEnrollDemos.detectFace.chooseOneDescription"));
    \u0275\u0275advance(3);
    \u0275\u0275property("title", \u0275\u0275pipeBind1(5, 13, "smartEnrollDemos.detectFace.cameraTitle"))("subtitle", \u0275\u0275pipeBind1(6, 15, "smartEnrollDemos.detectFace.cameraSubtitle"));
    \u0275\u0275advance(5);
    \u0275\u0275property("fillFrame", true)("hideIdleExplainer", true)("disabled", ctx_r1.loading)("captureSuccessFeedbackMs", 750);
    \u0275\u0275advance(3);
    \u0275\u0275property("title", \u0275\u0275pipeBind1(13, 17, "smartEnrollDemos.detectFace.uploadTitle"))("subtitle", \u0275\u0275pipeBind1(14, 19, "smartEnrollDemos.detectFace.uploadSubtitle"));
    \u0275\u0275advance(3);
    \u0275\u0275property("primaryText", \u0275\u0275pipeBind1(16, 21, "smartEnrollDemos.detectFace.uploadPrimary"))("secondaryText", \u0275\u0275pipeBind1(17, 23, "smartEnrollDemos.detectFace.uploadSecondary"));
  }
}
function DetectFaceDemoComponent_Conditional_9_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "app-demo-raster-image", 27);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", ctx_r1.previewHighlighted ? "border-emerald-400/50 ring-4 ring-emerald-400/20" : "border-frost");
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.preview)("alt", \u0275\u0275pipeBind1(2, 3, "smartEnrollDemos.detectFace.previewAlt"));
  }
}
function DetectFaceDemoComponent_Conditional_9_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function DetectFaceDemoComponent_Conditional_9_Conditional_18_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.handleDetect());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, ctx_r1.loading ? "smartEnrollDemos.detectFace.detecting" : "smartEnrollDemos.detectFace.detectFaces"), " ");
  }
}
function DetectFaceDemoComponent_Conditional_9_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "span", 29);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.error, " ");
  }
}
function DetectFaceDemoComponent_Conditional_9_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 30)(2, "p", 31);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 32);
    \u0275\u0275listener("click", function DetectFaceDemoComponent_Conditional_9_Conditional_22_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.reset());
    });
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "pre", 33);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "json");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 3, "smartEnrollDemos.detectFace.resultTitle"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 5, "smartEnrollDemos.detectFace.reset"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 7, ctx_r1.result));
  }
}
function DetectFaceDemoComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 8)(2, "div")(3, "label", 9);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 10);
    \u0275\u0275twoWayListener("ngModelChange", function DetectFaceDemoComponent_Conditional_9_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.minScore, $event) || (ctx_r1.minScore = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div")(8, "label", 9);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "select", 11);
    \u0275\u0275twoWayListener("ngModelChange", function DetectFaceDemoComponent_Conditional_9_Template_select_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchMode, $event) || (ctx_r1.searchMode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(12, "option", 12);
    \u0275\u0275text(13, "FAST");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "option", 13);
    \u0275\u0275text(15, "ACCURATE");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(16, DetectFaceDemoComponent_Conditional_9_Conditional_16_Template, 18, 25, "div", 5)(17, DetectFaceDemoComponent_Conditional_9_Conditional_17_Template, 3, 5, "div", 14)(18, DetectFaceDemoComponent_Conditional_9_Conditional_18_Template, 3, 4, "button", 15);
    \u0275\u0275elementStart(19, "input", 16, 0);
    \u0275\u0275listener("change", function DetectFaceDemoComponent_Conditional_9_Template_input_change_19_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFileSelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, DetectFaceDemoComponent_Conditional_9_Conditional_21_Template, 4, 1, "div", 17)(22, DetectFaceDemoComponent_Conditional_9_Conditional_22_Template, 11, 9, "div", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(5, 9, "smartEnrollDemos.detectFace.minScoreLabel", \u0275\u0275pureFunction1(14, _c1, ctx_r1.minScore.toFixed(2))), " ");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.minScore);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 12, "smartEnrollDemos.detectFace.searchModeLabel"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchMode);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(!ctx_r1.image ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.preview && ctx_r1.image ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.image ? 18 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.error ? 21 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.result ? 22 : -1);
  }
}
function DetectFaceDemoComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "details", 6)(1, "summary", 34)(2, "span", 35)(3, "span", 36);
    \u0275\u0275text(4, "menu_book");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 37);
    \u0275\u0275text(8, "expand_more");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 38)(10, "p", 39);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "transloco");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 2, "smartEnrollDemos.detectFace.apiRefSummary"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 4, "smartEnrollDemos.detectFace.apiRefBody"));
  }
}
var DOCS_BASE = "https://docs.verifik.co";
var RELATED_DOC_HREFS = [
  `${DOCS_BASE}/biometrics/search`,
  `${DOCS_BASE}/biometrics/search-live-face`,
  `${DOCS_BASE}/biometrics/search-active-user`,
  `${DOCS_BASE}/biometrics/liveness`,
  `${DOCS_BASE}/biometrics/compare`,
  `${DOCS_BASE}/biometrics/compare-with-liveness`
];
var DetectFaceDemoComponent = class _DetectFaceDemoComponent {
  constructor() {
    this._api = inject(BiometricsDemoApiService);
    this._transloco = inject(TranslocoService);
    this._cdr = inject(ChangeDetectorRef);
    this._previewHighlightTimeout = null;
    this.authChecked = false;
    this.image = null;
    this.preview = null;
    this.previewHighlighted = false;
    this.minScore = 0.75;
    this.searchMode = "FAST";
    this.loading = false;
    this.result = null;
    this.error = null;
    this.relatedDocs = [];
  }
  ngOnInit() {
    if (!this._api.ensureAuthenticated()) {
      this.authChecked = true;
      return;
    }
    this.authChecked = true;
    this.relatedDocs = this.buildRelatedDocs();
  }
  ngOnDestroy() {
    if (this._previewHighlightTimeout)
      clearTimeout(this._previewHighlightTimeout);
  }
  get showApiReference() {
    return this.result === null;
  }
  pulsePreview() {
    if (this._previewHighlightTimeout)
      clearTimeout(this._previewHighlightTimeout);
    this.previewHighlighted = true;
    this._previewHighlightTimeout = setTimeout(() => {
      this.previewHighlighted = false;
      this._previewHighlightTimeout = null;
      this._cdr.markForCheck();
    }, 2200);
    this._cdr.markForCheck();
  }
  onCapture(event) {
    this.preview = event.dataUrl;
    this.image = event.base64;
    this.pulsePreview();
  }
  triggerFilePicker() {
    this.fileInput?.nativeElement.click();
  }
  onFileSelected(event) {
    return __async(this, null, function* () {
      const file = event.target.files?.[0];
      if (!file)
        return;
      this.image = yield fileToBase64(file);
      this.preview = URL.createObjectURL(file);
      this.pulsePreview();
      this._cdr.markForCheck();
    });
  }
  handleDetect() {
    if (!this._api.ensureAuthenticated() || !this.image)
      return;
    this.loading = true;
    this.error = null;
    this.result = null;
    this._cdr.markForCheck();
    this._api.detectFace({ image: this.image, min_score: this.minScore, search_mode: this.searchMode }).subscribe({
      next: (data) => {
        this.result = data;
        this.loading = false;
        this._cdr.markForCheck();
      },
      error: (err) => {
        this.error = err.error ?? err.message ?? "Request failed";
        this.loading = false;
        this._cdr.markForCheck();
      }
    });
  }
  reset() {
    if (this._previewHighlightTimeout) {
      clearTimeout(this._previewHighlightTimeout);
      this._previewHighlightTimeout = null;
    }
    this.image = null;
    this.preview = null;
    this.result = null;
    this.error = null;
    this.previewHighlighted = false;
    this._cdr.markForCheck();
  }
  buildRelatedDocs() {
    return RELATED_DOC_HREFS.map((href, i) => ({
      href,
      title: this._transloco.translate(`smartEnrollDemos.detectFace.relatedDocs.${i}.title`),
      description: this._transloco.translate(`smartEnrollDemos.detectFace.relatedDocs.${i}.description`),
      badge: this._transloco.translate(`smartEnrollDemos.detectFace.relatedDocs.${i}.badge`),
      badgeMuted: false
    }));
  }
  static {
    this.\u0275fac = function DetectFaceDemoComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DetectFaceDemoComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DetectFaceDemoComponent, selectors: [["app-detect-face-demo"]], viewQuery: function DetectFaceDemoComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.fileInput = _t.first);
      }
    }, decls: 12, vars: 9, consts: [["fileInput", ""], [1, "mb-8"], [1, "text-3xl", "font-black", "tracking-tight", "text-on-surface", "mb-2"], [1, "text-on-surface-variant"], [1, "h-40", "rounded-xl", "bg-surface-container-high", "animate-pulse"], [1, "space-y-5"], [1, "mt-10", "rounded-xl", "border", "border-outline-variant/20", "bg-surface-container-low/50", "text-left", "max-w-3xl", "mx-auto", "w-full", "px-4", "py-3", "group"], [3, "items"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "gap-5"], [1, "block", "text-sm", "font-semibold", "text-on-surface", "mb-1.5"], ["type", "range", "min", "0.5", "max", "1", "step", "0.01", "name", "minScore", 1, "w-full", 3, "ngModelChange", "ngModel"], ["name", "searchMode", 1, "w-full", "bg-surface-container-low", "border", "border-outline-variant/30", "rounded-lg", "px-3", "py-2", "text-on-surface", "text-sm", "focus:outline-none", "focus:border-primary/60", 3, "ngModelChange", "ngModel"], ["value", "FAST"], ["value", "ACCURATE"], [1, "overflow-hidden", "rounded-xl", "border", "transition-all", "duration-300", 3, "ngClass"], ["type", "button", 1, "demo-btn-primary", 3, "disabled"], ["type", "file", "accept", "image/*", 1, "hidden", 3, "change"], [1, "px-4", "py-3", "bg-error-container/20", "border", "border-error/20", "rounded-lg", "flex", "items-center", "gap-2", "text-sm", "text-error"], [1, "rounded-2xl", "bg-surface-container-low", "border", "border-primary/20", "p-6", "space-y-3"], [3, "description"], ["aria-labelledby", "detect-face-camera-heading"], ["label", "A", "id", "detect-face-camera-heading", 3, "title", "subtitle"], [1, "flex", "min-h-0", "flex-1", "flex-col"], [3, "captured", "fillFrame", "hideIdleExplainer", "disabled", "captureSuccessFeedbackMs"], ["aria-labelledby", "detect-face-upload-heading"], ["label", "B", "id", "detect-face-upload-heading", 3, "title", "subtitle"], [3, "clicked", "primaryText", "secondaryText"], ["className", "w-full aspect-video object-cover", 3, "src", "alt"], ["type", "button", 1, "demo-btn-primary", 3, "click", "disabled"], [1, "material-symbols-outlined", "text-sm"], [1, "flex", "items-center", "justify-between"], [1, "font-bold", "text-on-surface"], ["type", "button", 1, "text-xs", "text-primary", "underline", 3, "click"], [1, "text-[0.65rem]", "font-mono", "bg-surface-container-high/80", "rounded-lg", "p-3", "overflow-x-auto", "text-on-surface", "whitespace-pre-wrap"], [1, "cursor-pointer", "list-none", "font-bold", "text-sm", "text-primary", "flex", "items-center", "justify-between", "gap-2"], [1, "flex", "items-center", "gap-2"], [1, "material-symbols-outlined", "text-lg"], [1, "material-symbols-outlined", "text-on-surface-variant/70", "group-open:rotate-180", "transition-transform"], [1, "mt-4", "text-sm", "text-on-surface-variant", "border-t", "border-outline-variant/15", "pt-4"], [1, "text-xs", "leading-relaxed"]], template: function DetectFaceDemoComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-demo-page-shell")(1, "div", 1)(2, "h2", 2);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6);
        \u0275\u0275pipe(7, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(8, DetectFaceDemoComponent_Conditional_8_Template, 1, 0, "div", 4)(9, DetectFaceDemoComponent_Conditional_9_Template, 23, 16, "div", 5)(10, DetectFaceDemoComponent_Conditional_10_Template, 13, 6, "details", 6);
        \u0275\u0275element(11, "app-demo-related-docs-section", 7);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 5, ctx.result ? "smartEnrollDemos.detectFace.heroTitleComplete" : "smartEnrollDemos.detectFace.heroTitleInitial"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 7, ctx.result ? "smartEnrollDemos.detectFace.heroSubtitleComplete" : "smartEnrollDemos.detectFace.heroSubtitleInitial"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.authChecked ? 8 : 9);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.showApiReference ? 10 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("items", ctx.relatedDocs);
      }
    }, dependencies: [
      CommonModule,
      NgClass,
      JsonPipe,
      FormsModule,
      NgSelectOption,
      \u0275NgSelectMultipleOption,
      DefaultValueAccessor,
      RangeValueAccessor,
      SelectControlValueAccessor,
      NgControlStatus,
      NgModel,
      TranslocoModule,
      TranslocoPipe,
      DemoPageShellComponent,
      DemoRelatedDocsSectionComponent,
      DemoChooseOneCalloutComponent,
      DemoCaptureOptionHeadingComponent,
      DemoOrDividerComponent,
      DemoScannerShellComponent,
      DemoUploadImageButtonComponent,
      DemoRasterImageComponent,
      FaceGuidedCameraComponent
    ], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DetectFaceDemoComponent, [{
    type: Component,
    args: [{ selector: "app-detect-face-demo", standalone: true, imports: [
      CommonModule,
      FormsModule,
      JsonPipe,
      TranslocoModule,
      DemoPageShellComponent,
      DemoRelatedDocsSectionComponent,
      DemoChooseOneCalloutComponent,
      DemoCaptureOptionHeadingComponent,
      DemoOrDividerComponent,
      DemoScannerShellComponent,
      DemoUploadImageButtonComponent,
      DemoRasterImageComponent,
      FaceGuidedCameraComponent
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `<app-demo-page-shell>\r
    <div class="mb-8">\r
        <h2 class="text-3xl font-black tracking-tight text-on-surface mb-2">\r
            {{ (result ? 'smartEnrollDemos.detectFace.heroTitleComplete' : 'smartEnrollDemos.detectFace.heroTitleInitial') | transloco }}\r
        </h2>\r
        <p class="text-on-surface-variant">\r
            {{ (result ? 'smartEnrollDemos.detectFace.heroSubtitleComplete' : 'smartEnrollDemos.detectFace.heroSubtitleInitial') | transloco }}\r
        </p>\r
    </div>\r
\r
    @if (!authChecked) {\r
        <div class="h-40 rounded-xl bg-surface-container-high animate-pulse"></div>\r
    } @else {\r
        <div class="space-y-5">\r
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">\r
                <div>\r
                    <label class="block text-sm font-semibold text-on-surface mb-1.5">\r
                        {{ 'smartEnrollDemos.detectFace.minScoreLabel' | transloco: { score: minScore.toFixed(2) } }}\r
                    </label>\r
                    <input type="range" min="0.5" max="1" step="0.01" [(ngModel)]="minScore" name="minScore" class="w-full" />\r
                </div>\r
                <div>\r
                    <label class="block text-sm font-semibold text-on-surface mb-1.5">{{ 'smartEnrollDemos.detectFace.searchModeLabel' | transloco }}</label>\r
                    <select [(ngModel)]="searchMode" name="searchMode" class="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg px-3 py-2 text-on-surface text-sm focus:outline-none focus:border-primary/60">\r
                        <option value="FAST">FAST</option>\r
                        <option value="ACCURATE">ACCURATE</option>\r
                    </select>\r
                </div>\r
            </div>\r
\r
            @if (!image) {\r
                <div class="space-y-5">\r
                    <app-demo-choose-one-callout [description]="'smartEnrollDemos.detectFace.chooseOneDescription' | transloco" />\r
                    <section aria-labelledby="detect-face-camera-heading">\r
                        <app-demo-capture-option-heading label="A" id="detect-face-camera-heading" [title]="'smartEnrollDemos.detectFace.cameraTitle' | transloco" [subtitle]="'smartEnrollDemos.detectFace.cameraSubtitle' | transloco" />\r
                        <app-demo-scanner-shell>\r
                            <div class="flex min-h-0 flex-1 flex-col">\r
                                <app-face-guided-camera [fillFrame]="true" [hideIdleExplainer]="true" [disabled]="loading" [captureSuccessFeedbackMs]="750" (captured)="onCapture($event)" />\r
                            </div>\r
                        </app-demo-scanner-shell>\r
                    </section>\r
                    <app-demo-or-divider />\r
                    <section aria-labelledby="detect-face-upload-heading">\r
                        <app-demo-capture-option-heading label="B" id="detect-face-upload-heading" [title]="'smartEnrollDemos.detectFace.uploadTitle' | transloco" [subtitle]="'smartEnrollDemos.detectFace.uploadSubtitle' | transloco" />\r
                        <app-demo-upload-image-button (clicked)="triggerFilePicker()" [primaryText]="'smartEnrollDemos.detectFace.uploadPrimary' | transloco" [secondaryText]="'smartEnrollDemos.detectFace.uploadSecondary' | transloco" />\r
                    </section>\r
                </div>\r
            }\r
\r
            @if (preview && image) {\r
                <div\r
                    class="overflow-hidden rounded-xl border transition-all duration-300"\r
                    [ngClass]="previewHighlighted ? 'border-emerald-400/50 ring-4 ring-emerald-400/20' : 'border-frost'"\r
                >\r
                    <app-demo-raster-image [src]="preview" [alt]="'smartEnrollDemos.detectFace.previewAlt' | transloco" className="w-full aspect-video object-cover" />\r
                </div>\r
            }\r
\r
            @if (image) {\r
                <button type="button" (click)="handleDetect()" [disabled]="loading" class="demo-btn-primary">\r
                    {{ (loading ? 'smartEnrollDemos.detectFace.detecting' : 'smartEnrollDemos.detectFace.detectFaces') | transloco }}\r
                </button>\r
            }\r
\r
            <input #fileInput type="file" accept="image/*" class="hidden" (change)="onFileSelected($event)" />\r
\r
            @if (error) {\r
                <div class="px-4 py-3 bg-error-container/20 border border-error/20 rounded-lg flex items-center gap-2 text-sm text-error">\r
                    <span class="material-symbols-outlined text-sm">error_outline</span>\r
                    {{ error }}\r
                </div>\r
            }\r
\r
            @if (result) {\r
                <div class="rounded-2xl bg-surface-container-low border border-primary/20 p-6 space-y-3">\r
                    <div class="flex items-center justify-between">\r
                        <p class="font-bold text-on-surface">{{ 'smartEnrollDemos.detectFace.resultTitle' | transloco }}</p>\r
                        <button type="button" (click)="reset()" class="text-xs text-primary underline">{{ 'smartEnrollDemos.detectFace.reset' | transloco }}</button>\r
                    </div>\r
                    <pre class="text-[0.65rem] font-mono bg-surface-container-high/80 rounded-lg p-3 overflow-x-auto text-on-surface whitespace-pre-wrap">{{ result | json }}</pre>\r
                </div>\r
            }\r
        </div>\r
    }\r
\r
    @if (showApiReference) {\r
        <details class="mt-10 rounded-xl border border-outline-variant/20 bg-surface-container-low/50 text-left max-w-3xl mx-auto w-full px-4 py-3 group">\r
            <summary class="cursor-pointer list-none font-bold text-sm text-primary flex items-center justify-between gap-2">\r
                <span class="flex items-center gap-2">\r
                    <span class="material-symbols-outlined text-lg">menu_book</span>\r
                    {{ 'smartEnrollDemos.detectFace.apiRefSummary' | transloco }}\r
                </span>\r
                <span class="material-symbols-outlined text-on-surface-variant/70 group-open:rotate-180 transition-transform">expand_more</span>\r
            </summary>\r
            <div class="mt-4 text-sm text-on-surface-variant border-t border-outline-variant/15 pt-4">\r
                <p class="text-xs leading-relaxed">{{ 'smartEnrollDemos.detectFace.apiRefBody' | transloco }}</p>\r
            </div>\r
        </details>\r
    }\r
\r
    <app-demo-related-docs-section [items]="relatedDocs" />\r
</app-demo-page-shell>\r
` }]
  }], null, { fileInput: [{
    type: ViewChild,
    args: ["fileInput"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DetectFaceDemoComponent, { className: "DetectFaceDemoComponent", filePath: "src/app/modules/smart-enroll/demos/pages/detect-face/detect-face-demo.component.ts", lineNumber: 60 });
})();
export {
  DetectFaceDemoComponent
};
//# sourceMappingURL=chunk-KECZDUHJ.js.map
