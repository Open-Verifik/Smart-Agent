import {
  DemoScannerShellComponent
} from "./chunk-MOO2AP2F.js";
import {
  DemoCaptureOptionHeadingComponent,
  DemoChooseOneCalloutComponent,
  DemoOrDividerComponent,
  FaceGuidedCameraComponent
} from "./chunk-P2NNO7TD.js";
import {
  DemoUploadImageButtonComponent
} from "./chunk-P4F7DUX6.js";
import {
  DemoRasterImageComponent
} from "./chunk-T2IPWVBN.js";
import {
  DemoRelatedDocsSectionComponent
} from "./chunk-N5HGB6KO.js";
import {
  BiometricsDemoApiService,
  DemoPageShellComponent,
  fileToBase64
} from "./chunk-VXZEB53O.js";
import "./chunk-M4M2RXHQ.js";
import "./chunk-B4YUVLJ7.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  RangeValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-DVRFI3SJ.js";
import {
  TranslocoModule,
  TranslocoPipe,
  TranslocoService
} from "./chunk-R5W3A6HI.js";
import "./chunk-HYFP557I.js";
import "./chunk-KTYFS5OT.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  JsonPipe,
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
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
} from "./chunk-PNPEHISK.js";
import {
  __async,
  __spreadValues
} from "./chunk-F5M2C4EZ.js";

// src/app/modules/smart-enroll/demos/pages/search-crops/search-crops-demo.component.ts
var _c0 = ["fileInput"];
var _c1 = (a0) => ({ score: a0 });
var _c2 = (a0) => ({ count: a0 });
function SearchCropsDemoComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 4);
  }
}
function SearchCropsDemoComponent_Conditional_9_Conditional_47_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-demo-raster-image", 29);
  }
  if (rf & 2) {
    const preview_r3 = ctx.$implicit;
    \u0275\u0275property("src", preview_r3)("width", 80)("height", 80);
  }
}
function SearchCropsDemoComponent_Conditional_9_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275repeaterCreate(1, SearchCropsDemoComponent_Conditional_9_Conditional_47_For_2_Template, 1, 3, "app-demo-raster-image", 29, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.previews);
  }
}
function SearchCropsDemoComponent_Conditional_9_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "span", 30);
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
function SearchCropsDemoComponent_Conditional_9_Conditional_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 31)(2, "p", 32);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 33);
    \u0275\u0275listener("click", function SearchCropsDemoComponent_Conditional_9_Conditional_54_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.reset());
    });
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "pre", 34);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "json");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 3, "smartEnrollDemos.searchCrops.resultTitle"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 5, "smartEnrollDemos.searchCrops.reset"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 7, ctx_r1.result));
  }
}
function SearchCropsDemoComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 8)(2, "div")(3, "label", 9);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 10);
    \u0275\u0275twoWayListener("ngModelChange", function SearchCropsDemoComponent_Conditional_9_Template_input_ngModelChange_6_listener($event) {
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
    \u0275\u0275twoWayListener("ngModelChange", function SearchCropsDemoComponent_Conditional_9_Template_select_ngModelChange_11_listener($event) {
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
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div")(17, "label", 9);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "input", 14);
    \u0275\u0275pipe(21, "transloco");
    \u0275\u0275twoWayListener("ngModelChange", function SearchCropsDemoComponent_Conditional_9_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.collectionId, $event) || (ctx_r1.collectionId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div")(23, "label", 9);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "input", 15);
    \u0275\u0275pipe(27, "transloco");
    \u0275\u0275twoWayListener("ngModelChange", function SearchCropsDemoComponent_Conditional_9_Template_input_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.maxResults, $event) || (ctx_r1.maxResults = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 5);
    \u0275\u0275element(29, "app-demo-choose-one-callout", 16);
    \u0275\u0275pipe(30, "transloco");
    \u0275\u0275elementStart(31, "section", 17);
    \u0275\u0275element(32, "app-demo-capture-option-heading", 18);
    \u0275\u0275pipe(33, "transloco");
    \u0275\u0275pipe(34, "transloco");
    \u0275\u0275elementStart(35, "app-demo-scanner-shell")(36, "div", 19)(37, "app-face-guided-camera", 20);
    \u0275\u0275listener("captured", function SearchCropsDemoComponent_Conditional_9_Template_app_face_guided_camera_captured_37_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFaceCapture($event));
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275element(38, "app-demo-or-divider");
    \u0275\u0275elementStart(39, "section", 21);
    \u0275\u0275element(40, "app-demo-capture-option-heading", 22);
    \u0275\u0275pipe(41, "transloco");
    \u0275\u0275pipe(42, "transloco");
    \u0275\u0275elementStart(43, "app-demo-upload-image-button", 23);
    \u0275\u0275pipe(44, "transloco");
    \u0275\u0275pipe(45, "transloco");
    \u0275\u0275pipe(46, "transloco");
    \u0275\u0275listener("clicked", function SearchCropsDemoComponent_Conditional_9_Template_app_demo_upload_image_button_clicked_43_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.triggerFilePicker());
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(47, SearchCropsDemoComponent_Conditional_9_Conditional_47_Template, 3, 0, "div", 24);
    \u0275\u0275elementStart(48, "button", 25);
    \u0275\u0275listener("click", function SearchCropsDemoComponent_Conditional_9_Template_button_click_48_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.handleSearch());
    });
    \u0275\u0275text(49);
    \u0275\u0275pipe(50, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "input", 26, 0);
    \u0275\u0275listener("change", function SearchCropsDemoComponent_Conditional_9_Template_input_change_51_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFilesSelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(53, SearchCropsDemoComponent_Conditional_9_Conditional_53_Template, 4, 1, "div", 27)(54, SearchCropsDemoComponent_Conditional_9_Conditional_54_Template, 11, 9, "div", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(5, 25, "smartEnrollDemos.searchCrops.minScoreLabel", \u0275\u0275pureFunction1(57, _c1, ctx_r1.minScore.toFixed(2))), " ");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.minScore);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 28, "smartEnrollDemos.searchCrops.searchModeLabel"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchMode);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 30, "smartEnrollDemos.searchCrops.collectionIdLabel"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.collectionId);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(21, 32, "smartEnrollDemos.searchCrops.optionalPlaceholder"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 34, "smartEnrollDemos.searchCrops.maxResultsLabel"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.maxResults);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(27, 36, "smartEnrollDemos.searchCrops.optionalPlaceholder"));
    \u0275\u0275advance(3);
    \u0275\u0275property("description", \u0275\u0275pipeBind1(30, 38, "smartEnrollDemos.searchCrops.chooseOneDescription"));
    \u0275\u0275advance(3);
    \u0275\u0275property("title", \u0275\u0275pipeBind1(33, 40, "smartEnrollDemos.searchCrops.cameraTitle"))("subtitle", \u0275\u0275pipeBind1(34, 42, "smartEnrollDemos.searchCrops.cameraSubtitle"));
    \u0275\u0275advance(5);
    \u0275\u0275property("fillFrame", true)("hideIdleExplainer", true)("captureSuccessFeedbackMs", 750);
    \u0275\u0275advance(3);
    \u0275\u0275property("title", \u0275\u0275pipeBind1(41, 44, "smartEnrollDemos.searchCrops.uploadTitle"))("subtitle", \u0275\u0275pipeBind1(42, 46, "smartEnrollDemos.searchCrops.uploadSubtitle"));
    \u0275\u0275advance(3);
    \u0275\u0275property("primaryText", ctx_r1.images.length ? \u0275\u0275pipeBind2(44, 48, "smartEnrollDemos.common.imagesAddMore", \u0275\u0275pureFunction1(59, _c2, ctx_r1.images.length)) : \u0275\u0275pipeBind1(45, 51, "smartEnrollDemos.common.uploadFaceImages"))("secondaryText", \u0275\u0275pipeBind1(46, 53, "smartEnrollDemos.common.jpegPngGallery"));
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.previews.length > 0 ? 47 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.images.length || ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(50, 55, ctx_r1.loading ? "smartEnrollDemos.searchCrops.searching" : "smartEnrollDemos.searchCrops.search"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.error ? 53 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.result ? 54 : -1);
  }
}
function SearchCropsDemoComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "details", 6)(1, "summary", 35)(2, "span", 36)(3, "span", 37);
    \u0275\u0275text(4, "menu_book");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 38);
    \u0275\u0275text(8, "expand_more");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 39)(10, "p", 40);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "transloco");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 2, "smartEnrollDemos.searchCrops.apiRefSummary"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 4, "smartEnrollDemos.searchCrops.apiRefBody"));
  }
}
var DOCS_BASE = "https://docs.verifik.co";
var RELATED_DOC_HREFS = [
  `${DOCS_BASE}/biometrics/search`,
  `${DOCS_BASE}/biometrics/search-live-face`,
  `${DOCS_BASE}/biometrics/search-active-user`,
  `${DOCS_BASE}/biometrics/verify-face`,
  `${DOCS_BASE}/verifik-biometrics-apis/liveness/face-detection`,
  `${DOCS_BASE}/resources/list-all-persons`
];
var SearchCropsDemoComponent = class _SearchCropsDemoComponent {
  constructor() {
    this._api = inject(BiometricsDemoApiService);
    this._transloco = inject(TranslocoService);
    this._cdr = inject(ChangeDetectorRef);
    this.authChecked = false;
    this.images = [];
    this.previews = [];
    this.minScore = 0.75;
    this.searchMode = "FAST";
    this.collectionId = "";
    this.maxResults = "";
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
  get showApiReference() {
    return this.result === null;
  }
  onFaceCapture(event) {
    this.images = [...this.images, event.base64];
    this.previews = [...this.previews, event.dataUrl];
    this._cdr.markForCheck();
  }
  triggerFilePicker() {
    this.fileInput?.nativeElement.click();
  }
  onFilesSelected(event) {
    return __async(this, null, function* () {
      const input = event.target;
      const files = input.files;
      if (!files?.length)
        return;
      const fileList = Array.from(files);
      const b64s = yield Promise.all(fileList.map((f) => fileToBase64(f)));
      const urls = fileList.map((f) => URL.createObjectURL(f));
      this.images = [...this.images, ...b64s];
      this.previews = [...this.previews, ...urls];
      input.value = "";
      this._cdr.markForCheck();
    });
  }
  handleSearch() {
    if (!this._api.ensureAuthenticated() || !this.images.length)
      return;
    const maxParsed = this.maxResults.trim() === "" ? void 0 : Number.parseInt(this.maxResults, 10);
    this.loading = true;
    this.error = null;
    this.result = null;
    this._cdr.markForCheck();
    this._api.searchCrops(__spreadValues({
      images: this.images,
      min_score: this.minScore,
      search_mode: this.searchMode,
      collection_id: this.collectionId || void 0
    }, maxParsed !== void 0 && !Number.isNaN(maxParsed) ? { max_results: maxParsed } : {})).subscribe({
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
    this.images = [];
    this.previews = [];
    this.collectionId = "";
    this.maxResults = "";
    this.result = null;
    this.error = null;
    this._cdr.markForCheck();
  }
  buildRelatedDocs() {
    return RELATED_DOC_HREFS.map((href, i) => ({
      href,
      title: this._transloco.translate(`smartEnrollDemos.searchCrops.relatedDocs.${i}.title`),
      description: this._transloco.translate(`smartEnrollDemos.searchCrops.relatedDocs.${i}.description`),
      badge: this._transloco.translate(`smartEnrollDemos.searchCrops.relatedDocs.${i}.badge`),
      badgeMuted: false
    }));
  }
  static {
    this.\u0275fac = function SearchCropsDemoComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SearchCropsDemoComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SearchCropsDemoComponent, selectors: [["app-search-crops-demo"]], viewQuery: function SearchCropsDemoComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.fileInput = _t.first);
      }
    }, decls: 12, vars: 9, consts: [["fileInput", ""], [1, "mb-8"], [1, "text-3xl", "font-black", "tracking-tight", "text-on-surface", "mb-2"], [1, "text-on-surface-variant"], [1, "h-40", "rounded-xl", "bg-surface-container-high", "animate-pulse"], [1, "space-y-5"], [1, "mt-10", "rounded-xl", "border", "border-outline-variant/20", "bg-surface-container-low/50", "text-left", "max-w-3xl", "mx-auto", "w-full", "px-4", "py-3", "group"], [3, "items"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "lg:grid-cols-4", "gap-5"], [1, "block", "text-sm", "font-semibold", "text-on-surface", "mb-1.5"], ["type", "range", "min", "0.2", "max", "1", "step", "0.01", "name", "minScore", 1, "w-full", 3, "ngModelChange", "ngModel"], ["name", "searchMode", 1, "w-full", "bg-surface-container-low", "border", "border-outline-variant/30", "rounded-lg", "px-3", "py-2", "text-on-surface", "text-sm", "focus:outline-none", "focus:border-primary/60", 3, "ngModelChange", "ngModel"], ["value", "FAST"], ["value", "ACCURATE"], ["type", "text", "name", "collectionId", 1, "w-full", "bg-surface-container-low", "border", "border-outline-variant/30", "rounded-lg", "px-3", "py-2", "text-on-surface", "placeholder-on-surface-variant/50", "text-sm", "focus:outline-none", "focus:border-primary/60", 3, "ngModelChange", "ngModel", "placeholder"], ["type", "number", "min", "1", "name", "maxResults", 1, "w-full", "bg-surface-container-low", "border", "border-outline-variant/30", "rounded-lg", "px-3", "py-2", "text-on-surface", "placeholder-on-surface-variant/50", "text-sm", "focus:outline-none", "focus:border-primary/60", 3, "ngModelChange", "ngModel", "placeholder"], [3, "description"], ["aria-labelledby", "search-crops-camera-heading"], ["label", "A", "id", "search-crops-camera-heading", 3, "title", "subtitle"], [1, "flex", "min-h-0", "flex-1", "flex-col"], [3, "captured", "fillFrame", "hideIdleExplainer", "captureSuccessFeedbackMs"], ["aria-labelledby", "search-crops-upload-heading"], ["label", "B", "id", "search-crops-upload-heading", 3, "title", "subtitle"], ["icon", "add_photo_alternate", 3, "clicked", "primaryText", "secondaryText"], [1, "flex", "flex-wrap", "gap-2"], ["type", "button", 1, "demo-btn-primary", 3, "click", "disabled"], ["type", "file", "accept", "image/*", "multiple", "", 1, "hidden", 3, "change"], [1, "px-4", "py-3", "bg-error-container/20", "border", "border-error/20", "rounded-lg", "flex", "items-center", "gap-2", "text-sm", "text-error"], [1, "rounded-2xl", "bg-surface-container-low", "border", "border-primary/20", "p-6", "space-y-3"], ["alt", "", "className", "w-20 h-20 object-cover rounded-lg border border-frost", 3, "src", "width", "height"], [1, "material-symbols-outlined", "text-sm"], [1, "flex", "items-center", "justify-between"], [1, "font-bold", "text-on-surface"], ["type", "button", 1, "text-xs", "text-primary", "underline", 3, "click"], [1, "text-[0.65rem]", "font-mono", "bg-surface-container-high/80", "rounded-lg", "p-3", "overflow-x-auto", "text-on-surface", "whitespace-pre-wrap"], [1, "cursor-pointer", "list-none", "font-bold", "text-sm", "text-primary", "flex", "items-center", "justify-between", "gap-2"], [1, "flex", "items-center", "gap-2"], [1, "material-symbols-outlined", "text-lg"], [1, "material-symbols-outlined", "text-on-surface-variant/70", "group-open:rotate-180", "transition-transform"], [1, "mt-4", "text-sm", "text-on-surface-variant", "border-t", "border-outline-variant/15", "pt-4"], [1, "text-xs", "leading-relaxed"]], template: function SearchCropsDemoComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-demo-page-shell")(1, "div", 1)(2, "h2", 2);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6);
        \u0275\u0275pipe(7, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(8, SearchCropsDemoComponent_Conditional_8_Template, 1, 0, "div", 4)(9, SearchCropsDemoComponent_Conditional_9_Template, 55, 61, "div", 5)(10, SearchCropsDemoComponent_Conditional_10_Template, 13, 6, "details", 6);
        \u0275\u0275element(11, "app-demo-related-docs-section", 7);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 5, ctx.result ? "smartEnrollDemos.searchCrops.heroTitleComplete" : "smartEnrollDemos.searchCrops.heroTitleInitial"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 7, ctx.result ? "smartEnrollDemos.searchCrops.heroSubtitleComplete" : "smartEnrollDemos.searchCrops.heroSubtitleInitial"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.authChecked ? 8 : 9);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.showApiReference ? 10 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("items", ctx.relatedDocs);
      }
    }, dependencies: [
      CommonModule,
      JsonPipe,
      FormsModule,
      NgSelectOption,
      \u0275NgSelectMultipleOption,
      DefaultValueAccessor,
      NumberValueAccessor,
      RangeValueAccessor,
      SelectControlValueAccessor,
      NgControlStatus,
      MinValidator,
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SearchCropsDemoComponent, [{
    type: Component,
    args: [{ selector: "app-search-crops-demo", standalone: true, imports: [
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
            {{ (result ? 'smartEnrollDemos.searchCrops.heroTitleComplete' : 'smartEnrollDemos.searchCrops.heroTitleInitial') | transloco }}\r
        </h2>\r
        <p class="text-on-surface-variant">\r
            {{ (result ? 'smartEnrollDemos.searchCrops.heroSubtitleComplete' : 'smartEnrollDemos.searchCrops.heroSubtitleInitial') | transloco }}\r
        </p>\r
    </div>\r
\r
    @if (!authChecked) {\r
        <div class="h-40 rounded-xl bg-surface-container-high animate-pulse"></div>\r
    } @else {\r
        <div class="space-y-5">\r
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">\r
                <div>\r
                    <label class="block text-sm font-semibold text-on-surface mb-1.5">\r
                        {{ 'smartEnrollDemos.searchCrops.minScoreLabel' | transloco: { score: minScore.toFixed(2) } }}\r
                    </label>\r
                    <input type="range" min="0.2" max="1" step="0.01" [(ngModel)]="minScore" name="minScore" class="w-full" />\r
                </div>\r
                <div>\r
                    <label class="block text-sm font-semibold text-on-surface mb-1.5">{{ 'smartEnrollDemos.searchCrops.searchModeLabel' | transloco }}</label>\r
                    <select [(ngModel)]="searchMode" name="searchMode" class="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg px-3 py-2 text-on-surface text-sm focus:outline-none focus:border-primary/60">\r
                        <option value="FAST">FAST</option>\r
                        <option value="ACCURATE">ACCURATE</option>\r
                    </select>\r
                </div>\r
                <div>\r
                    <label class="block text-sm font-semibold text-on-surface mb-1.5">{{ 'smartEnrollDemos.searchCrops.collectionIdLabel' | transloco }}</label>\r
                    <input type="text" [(ngModel)]="collectionId" name="collectionId" [placeholder]="'smartEnrollDemos.searchCrops.optionalPlaceholder' | transloco" class="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg px-3 py-2 text-on-surface placeholder-on-surface-variant/50 text-sm focus:outline-none focus:border-primary/60" />\r
                </div>\r
                <div>\r
                    <label class="block text-sm font-semibold text-on-surface mb-1.5">{{ 'smartEnrollDemos.searchCrops.maxResultsLabel' | transloco }}</label>\r
                    <input type="number" min="1" [(ngModel)]="maxResults" name="maxResults" [placeholder]="'smartEnrollDemos.searchCrops.optionalPlaceholder' | transloco" class="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg px-3 py-2 text-on-surface placeholder-on-surface-variant/50 text-sm focus:outline-none focus:border-primary/60" />\r
                </div>\r
            </div>\r
\r
            <div class="space-y-5">\r
                <app-demo-choose-one-callout [description]="'smartEnrollDemos.searchCrops.chooseOneDescription' | transloco" />\r
                <section aria-labelledby="search-crops-camera-heading">\r
                    <app-demo-capture-option-heading label="A" id="search-crops-camera-heading" [title]="'smartEnrollDemos.searchCrops.cameraTitle' | transloco" [subtitle]="'smartEnrollDemos.searchCrops.cameraSubtitle' | transloco" />\r
                    <app-demo-scanner-shell>\r
                        <div class="flex min-h-0 flex-1 flex-col">\r
                            <app-face-guided-camera [fillFrame]="true" [hideIdleExplainer]="true" [captureSuccessFeedbackMs]="750" (captured)="onFaceCapture($event)" />\r
                        </div>\r
                    </app-demo-scanner-shell>\r
                </section>\r
                <app-demo-or-divider />\r
                <section aria-labelledby="search-crops-upload-heading">\r
                    <app-demo-capture-option-heading label="B" id="search-crops-upload-heading" [title]="'smartEnrollDemos.searchCrops.uploadTitle' | transloco" [subtitle]="'smartEnrollDemos.searchCrops.uploadSubtitle' | transloco" />\r
                    <app-demo-upload-image-button (clicked)="triggerFilePicker()" [primaryText]="images.length ? ('smartEnrollDemos.common.imagesAddMore' | transloco: { count: images.length }) : ('smartEnrollDemos.common.uploadFaceImages' | transloco)" [secondaryText]="'smartEnrollDemos.common.jpegPngGallery' | transloco" icon="add_photo_alternate" />\r
                </section>\r
            </div>\r
\r
            @if (previews.length > 0) {\r
                <div class="flex flex-wrap gap-2">\r
                    @for (preview of previews; track $index) {\r
                        <app-demo-raster-image [src]="preview" alt="" [width]="80" [height]="80" className="w-20 h-20 object-cover rounded-lg border border-frost" />\r
                    }\r
                </div>\r
            }\r
\r
            <button type="button" (click)="handleSearch()" [disabled]="!images.length || loading" class="demo-btn-primary">\r
                {{ (loading ? 'smartEnrollDemos.searchCrops.searching' : 'smartEnrollDemos.searchCrops.search') | transloco }}\r
            </button>\r
\r
            <input #fileInput type="file" accept="image/*" multiple class="hidden" (change)="onFilesSelected($event)" />\r
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
                        <p class="font-bold text-on-surface">{{ 'smartEnrollDemos.searchCrops.resultTitle' | transloco }}</p>\r
                        <button type="button" (click)="reset()" class="text-xs text-primary underline">{{ 'smartEnrollDemos.searchCrops.reset' | transloco }}</button>\r
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
                    {{ 'smartEnrollDemos.searchCrops.apiRefSummary' | transloco }}\r
                </span>\r
                <span class="material-symbols-outlined text-on-surface-variant/70 group-open:rotate-180 transition-transform">expand_more</span>\r
            </summary>\r
            <div class="mt-4 text-sm text-on-surface-variant border-t border-outline-variant/15 pt-4">\r
                <p class="text-xs leading-relaxed">{{ 'smartEnrollDemos.searchCrops.apiRefBody' | transloco }}</p>\r
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SearchCropsDemoComponent, { className: "SearchCropsDemoComponent", filePath: "src/app/modules/smart-enroll/demos/pages/search-crops/search-crops-demo.component.ts", lineNumber: 59 });
})();
export {
  SearchCropsDemoComponent
};
//# sourceMappingURL=chunk-3W2H7AEN.js.map
