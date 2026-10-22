import {
  DemoScannerShellComponent
} from "./chunk-SAHCC2IE.js";
import {
  DemoCaptureOptionHeadingComponent,
  DemoChooseOneCalloutComponent,
  DemoOrDividerComponent,
  FaceGuidedCameraComponent
} from "./chunk-FRGGYDRL.js";
import {
  DemoUploadImageButtonComponent
} from "./chunk-5FLWF3FU.js";
import {
  DemoRasterImageComponent
} from "./chunk-6KU663MO.js";
import {
  DemoRelatedDocsSectionComponent
} from "./chunk-PBSKPAJ2.js";
import {
  BiometricsDemoApiService,
  DemoPageShellComponent,
  DemoStageCardComponent,
  DemoStageHeroComponent,
  fileToBase64
} from "./chunk-6YAJI7WI.js";
import "./chunk-QGSXQIBB.js";
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
} from "./chunk-JBF67GMG.js";
import {
  TranslocoModule,
  TranslocoPipe,
  TranslocoService
} from "./chunk-FWBWCXY5.js";
import "./chunk-QL64NPDU.js";
import "./chunk-3V5B4ZWC.js";
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
} from "./chunk-YWP2Y7QK.js";
import {
  __async,
  __spreadValues
} from "./chunk-F5M2C4EZ.js";

// src/app/modules/smart-enroll/demos/pages/search-crops/search-crops-demo.component.ts
var _c0 = ["fileInput"];
var _c1 = (a0) => ({ score: a0 });
var _c2 = (a0) => ({ count: a0 });
function SearchCropsDemoComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "h2", 7);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 8);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "smartEnrollDemos.searchCrops.heroTitleInitial"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 4, "smartEnrollDemos.searchCrops.heroSubtitleInitial"), " ");
  }
}
function SearchCropsDemoComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-demo-stage-hero", 2);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275pipe(3, "transloco");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("eyebrow", \u0275\u0275pipeBind1(1, 3, "smartEnrollDemos.demoStage.detection"))("title", \u0275\u0275pipeBind1(2, 5, ctx_r0.result ? "smartEnrollDemos.searchCrops.heroTitleComplete" : "smartEnrollDemos.searchCrops.heroTitleInitial"))("subtitle", \u0275\u0275pipeBind1(3, 7, ctx_r0.result ? "smartEnrollDemos.searchCrops.heroSubtitleComplete" : "smartEnrollDemos.searchCrops.heroSubtitleInitial"));
  }
}
function SearchCropsDemoComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 3);
  }
}
function SearchCropsDemoComponent_Conditional_4_Conditional_54_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-demo-raster-image", 33);
  }
  if (rf & 2) {
    const preview_r3 = ctx.$implicit;
    \u0275\u0275property("src", preview_r3)("width", 80)("height", 80);
  }
}
function SearchCropsDemoComponent_Conditional_4_Conditional_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275repeaterCreate(1, SearchCropsDemoComponent_Conditional_4_Conditional_54_For_2_Template, 1, 3, "app-demo-raster-image", 33, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.previews);
  }
}
function SearchCropsDemoComponent_Conditional_4_Conditional_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "span", 34);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.error, " ");
  }
}
function SearchCropsDemoComponent_Conditional_4_Conditional_61_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 35)(2, "p", 36);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 37);
    \u0275\u0275listener("click", function SearchCropsDemoComponent_Conditional_4_Conditional_61_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.reset());
    });
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "pre", 38);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "json");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 3, "smartEnrollDemos.searchCrops.resultTitle"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 5, "smartEnrollDemos.searchCrops.reset"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 7, ctx_r0.result));
  }
}
function SearchCropsDemoComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 9)(2, "app-demo-stage-card", 10);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementStart(5, "div", 11)(6, "div")(7, "label", 12);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "input", 13);
    \u0275\u0275twoWayListener("ngModelChange", function SearchCropsDemoComponent_Conditional_4_Template_input_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.minScore, $event) || (ctx_r0.minScore = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div")(12, "label", 12);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "select", 14);
    \u0275\u0275twoWayListener("ngModelChange", function SearchCropsDemoComponent_Conditional_4_Template_select_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.searchMode, $event) || (ctx_r0.searchMode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(16, "option", 15);
    \u0275\u0275text(17, "FAST");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "option", 16);
    \u0275\u0275text(19, "ACCURATE");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div")(21, "label", 12);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "input", 17);
    \u0275\u0275pipe(25, "transloco");
    \u0275\u0275twoWayListener("ngModelChange", function SearchCropsDemoComponent_Conditional_4_Template_input_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.collectionId, $event) || (ctx_r0.collectionId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div")(27, "label", 12);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "input", 18);
    \u0275\u0275pipe(31, "transloco");
    \u0275\u0275twoWayListener("ngModelChange", function SearchCropsDemoComponent_Conditional_4_Template_input_ngModelChange_30_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.maxResults, $event) || (ctx_r0.maxResults = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(32, "app-demo-stage-card", 19);
    \u0275\u0275pipe(33, "transloco");
    \u0275\u0275pipe(34, "transloco");
    \u0275\u0275elementStart(35, "div", 4);
    \u0275\u0275element(36, "app-demo-choose-one-callout", 20);
    \u0275\u0275pipe(37, "transloco");
    \u0275\u0275elementStart(38, "section", 21);
    \u0275\u0275element(39, "app-demo-capture-option-heading", 22);
    \u0275\u0275pipe(40, "transloco");
    \u0275\u0275pipe(41, "transloco");
    \u0275\u0275elementStart(42, "app-demo-scanner-shell")(43, "div", 23)(44, "app-face-guided-camera", 24);
    \u0275\u0275listener("captured", function SearchCropsDemoComponent_Conditional_4_Template_app_face_guided_camera_captured_44_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onFaceCapture($event));
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275element(45, "app-demo-or-divider");
    \u0275\u0275elementStart(46, "section", 25);
    \u0275\u0275element(47, "app-demo-capture-option-heading", 26);
    \u0275\u0275pipe(48, "transloco");
    \u0275\u0275pipe(49, "transloco");
    \u0275\u0275elementStart(50, "app-demo-upload-image-button", 27);
    \u0275\u0275pipe(51, "transloco");
    \u0275\u0275pipe(52, "transloco");
    \u0275\u0275pipe(53, "transloco");
    \u0275\u0275listener("clicked", function SearchCropsDemoComponent_Conditional_4_Template_app_demo_upload_image_button_clicked_50_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.triggerFilePicker());
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(54, SearchCropsDemoComponent_Conditional_4_Conditional_54_Template, 3, 0, "div", 28);
    \u0275\u0275elementStart(55, "button", 29);
    \u0275\u0275listener("click", function SearchCropsDemoComponent_Conditional_4_Template_button_click_55_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.handleSearch());
    });
    \u0275\u0275text(56);
    \u0275\u0275pipe(57, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "input", 30, 0);
    \u0275\u0275listener("change", function SearchCropsDemoComponent_Conditional_4_Template_input_change_58_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onFilesSelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(60, SearchCropsDemoComponent_Conditional_4_Conditional_60_Template, 4, 1, "div", 31);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(61, SearchCropsDemoComponent_Conditional_4_Conditional_61_Template, 11, 9, "div", 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("title", \u0275\u0275pipeBind1(3, 29, "smartEnrollDemos.demoStage.settingsTitle"))("help", \u0275\u0275pipeBind1(4, 31, "smartEnrollDemos.demoStage.settingsHelp"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(9, 33, "smartEnrollDemos.searchCrops.minScoreLabel", \u0275\u0275pureFunction1(69, _c1, ctx_r0.minScore.toFixed(2))), " ");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.minScore);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 36, "smartEnrollDemos.searchCrops.searchModeLabel"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.searchMode);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 38, "smartEnrollDemos.searchCrops.collectionIdLabel"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.collectionId);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(25, 40, "smartEnrollDemos.searchCrops.optionalPlaceholder"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(29, 42, "smartEnrollDemos.searchCrops.maxResultsLabel"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.maxResults);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(31, 44, "smartEnrollDemos.searchCrops.optionalPlaceholder"));
    \u0275\u0275advance(2);
    \u0275\u0275property("title", \u0275\u0275pipeBind1(33, 46, "smartEnrollDemos.personForm.faceTitle"))("help", \u0275\u0275pipeBind1(34, 48, "smartEnrollDemos.personForm.faceHelp"));
    \u0275\u0275advance(4);
    \u0275\u0275property("description", \u0275\u0275pipeBind1(37, 50, "smartEnrollDemos.searchCrops.chooseOneDescription"));
    \u0275\u0275advance(3);
    \u0275\u0275property("title", \u0275\u0275pipeBind1(40, 52, "smartEnrollDemos.searchCrops.cameraTitle"))("subtitle", \u0275\u0275pipeBind1(41, 54, "smartEnrollDemos.searchCrops.cameraSubtitle"));
    \u0275\u0275advance(5);
    \u0275\u0275property("fillFrame", true)("hideIdleExplainer", true)("captureSuccessFeedbackMs", 750);
    \u0275\u0275advance(3);
    \u0275\u0275property("title", \u0275\u0275pipeBind1(48, 56, "smartEnrollDemos.searchCrops.uploadTitle"))("subtitle", \u0275\u0275pipeBind1(49, 58, "smartEnrollDemos.searchCrops.uploadSubtitle"));
    \u0275\u0275advance(3);
    \u0275\u0275property("primaryText", ctx_r0.images.length ? \u0275\u0275pipeBind2(51, 60, "smartEnrollDemos.common.imagesAddMore", \u0275\u0275pureFunction1(71, _c2, ctx_r0.images.length)) : \u0275\u0275pipeBind1(52, 63, "smartEnrollDemos.common.uploadFaceImages"))("secondaryText", \u0275\u0275pipeBind1(53, 65, "smartEnrollDemos.common.jpegPngGallery"));
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r0.previews.length > 0 ? 54 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r0.images.length || ctx_r0.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(57, 67, ctx_r0.loading ? "smartEnrollDemos.searchCrops.searching" : "smartEnrollDemos.searchCrops.search"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r0.error ? 60 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.result ? 61 : -1);
  }
}
function SearchCropsDemoComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "details", 5)(1, "summary", 39)(2, "span", 40)(3, "span", 41);
    \u0275\u0275text(4, "menu_book");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 42);
    \u0275\u0275text(8, "expand_more");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 43)(10, "p", 44);
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
    }, decls: 7, vars: 4, consts: [["fileInput", ""], [1, "mb-8"], [3, "eyebrow", "title", "subtitle"], [1, "h-40", "rounded-xl", "bg-surface-container-high", "animate-pulse"], [1, "space-y-5"], [1, "mt-10", "rounded-xl", "border", "border-outline-variant/20", "bg-surface-container-low/50", "text-left", "max-w-3xl", "mx-auto", "w-full", "px-4", "py-3", "group"], [3, "items"], [1, "mb-2", "text-3xl", "font-black", "tracking-tight", "text-on-surface"], [1, "text-on-surface-variant"], [1, "grid", "grid-cols-1", "items-start", "gap-5", "xl:grid-cols-2"], ["number", "01", 3, "title", "help"], [1, "grid", "grid-cols-1", "gap-5"], [1, "block", "text-sm", "font-semibold", "text-on-surface", "mb-1.5"], ["type", "range", "min", "0.2", "max", "1", "step", "0.01", "name", "minScore", 1, "w-full", 3, "ngModelChange", "ngModel"], ["name", "searchMode", 1, "w-full", "bg-surface-container-low", "border", "border-outline-variant/30", "rounded-lg", "px-3", "py-2", "text-on-surface", "text-sm", "focus:outline-none", "focus:border-primary/60", 3, "ngModelChange", "ngModel"], ["value", "FAST"], ["value", "ACCURATE"], ["type", "text", "name", "collectionId", 1, "w-full", "bg-surface-container-low", "border", "border-outline-variant/30", "rounded-lg", "px-3", "py-2", "text-on-surface", "placeholder-on-surface-variant/50", "text-sm", "focus:outline-none", "focus:border-primary/60", 3, "ngModelChange", "ngModel", "placeholder"], ["type", "number", "min", "1", "name", "maxResults", 1, "w-full", "bg-surface-container-low", "border", "border-outline-variant/30", "rounded-lg", "px-3", "py-2", "text-on-surface", "placeholder-on-surface-variant/50", "text-sm", "focus:outline-none", "focus:border-primary/60", 3, "ngModelChange", "ngModel", "placeholder"], ["number", "02", 3, "title", "help"], [3, "description"], ["aria-labelledby", "search-crops-camera-heading"], ["label", "A", "id", "search-crops-camera-heading", 3, "title", "subtitle"], [1, "flex", "min-h-0", "flex-1", "flex-col"], [3, "captured", "fillFrame", "hideIdleExplainer", "captureSuccessFeedbackMs"], ["aria-labelledby", "search-crops-upload-heading"], ["label", "B", "id", "search-crops-upload-heading", 3, "title", "subtitle"], ["icon", "add_photo_alternate", 3, "clicked", "primaryText", "secondaryText"], [1, "flex", "flex-wrap", "gap-2"], ["type", "button", 1, "demo-btn-primary", 3, "click", "disabled"], ["type", "file", "accept", "image/*", "multiple", "", 1, "hidden", 3, "change"], [1, "px-4", "py-3", "bg-error-container/20", "border", "border-error/20", "rounded-lg", "flex", "items-center", "gap-2", "text-sm", "text-error"], [1, "rounded-2xl", "bg-surface-container-low", "border", "border-primary/20", "p-6", "space-y-3"], ["alt", "", "className", "w-20 h-20 object-cover rounded-lg border border-frost", 3, "src", "width", "height"], [1, "material-symbols-outlined", "text-sm"], [1, "flex", "items-center", "justify-between"], [1, "font-bold", "text-on-surface"], ["type", "button", 1, "text-xs", "text-primary", "underline", 3, "click"], [1, "text-[0.65rem]", "font-mono", "bg-surface-container-high/80", "rounded-lg", "p-3", "overflow-x-auto", "text-on-surface", "whitespace-pre-wrap"], [1, "cursor-pointer", "list-none", "font-bold", "text-sm", "text-primary", "flex", "items-center", "justify-between", "gap-2"], [1, "flex", "items-center", "gap-2"], [1, "material-symbols-outlined", "text-lg"], [1, "material-symbols-outlined", "text-on-surface-variant/70", "group-open:rotate-180", "transition-transform"], [1, "mt-4", "text-sm", "text-on-surface-variant", "border-t", "border-outline-variant/15", "pt-4"], [1, "text-xs", "leading-relaxed"]], template: function SearchCropsDemoComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-demo-page-shell");
        \u0275\u0275template(1, SearchCropsDemoComponent_Conditional_1_Template, 7, 6, "div", 1)(2, SearchCropsDemoComponent_Conditional_2_Template, 4, 9, "app-demo-stage-hero", 2)(3, SearchCropsDemoComponent_Conditional_3_Template, 1, 0, "div", 3)(4, SearchCropsDemoComponent_Conditional_4_Template, 62, 73, "div", 4)(5, SearchCropsDemoComponent_Conditional_5_Template, 13, 6, "details", 5);
        \u0275\u0275element(6, "app-demo-related-docs-section", 6);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.authChecked ? 1 : 2);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.authChecked ? 3 : 4);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.showApiReference ? 5 : -1);
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
      DemoStageHeroComponent,
      DemoStageCardComponent,
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
      DemoStageHeroComponent,
      DemoStageCardComponent,
      DemoRelatedDocsSectionComponent,
      DemoChooseOneCalloutComponent,
      DemoCaptureOptionHeadingComponent,
      DemoOrDividerComponent,
      DemoScannerShellComponent,
      DemoUploadImageButtonComponent,
      DemoRasterImageComponent,
      FaceGuidedCameraComponent
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `<app-demo-page-shell>\r
    @if (!authChecked) {\r
        <div class="mb-8">\r
            <h2 class="mb-2 text-3xl font-black tracking-tight text-on-surface">\r
                {{ 'smartEnrollDemos.searchCrops.heroTitleInitial' | transloco }}\r
            </h2>\r
            <p class="text-on-surface-variant">\r
                {{ 'smartEnrollDemos.searchCrops.heroSubtitleInitial' | transloco }}\r
            </p>\r
        </div>\r
    } @else {\r
        <app-demo-stage-hero\r
            [eyebrow]="'smartEnrollDemos.demoStage.detection' | transloco"\r
            [title]="(result ? 'smartEnrollDemos.searchCrops.heroTitleComplete' : 'smartEnrollDemos.searchCrops.heroTitleInitial') | transloco"\r
            [subtitle]="(result ? 'smartEnrollDemos.searchCrops.heroSubtitleComplete' : 'smartEnrollDemos.searchCrops.heroSubtitleInitial') | transloco"\r
        />\r
    }\r
\r
    @if (!authChecked) {\r
        <div class="h-40 rounded-xl bg-surface-container-high animate-pulse"></div>\r
    } @else {\r
        <div class="space-y-5">\r
        <div class="grid grid-cols-1 items-start gap-5 xl:grid-cols-2">\r
            <app-demo-stage-card\r
                number="01"\r
                [title]="'smartEnrollDemos.demoStage.settingsTitle' | transloco"\r
                [help]="'smartEnrollDemos.demoStage.settingsHelp' | transloco"\r
            >\r
            <div class="grid grid-cols-1 gap-5">\r
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
            </app-demo-stage-card>\r
\r
            <app-demo-stage-card\r
                number="02"\r
                [title]="'smartEnrollDemos.personForm.faceTitle' | transloco"\r
                [help]="'smartEnrollDemos.personForm.faceHelp' | transloco"\r
            >\r
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
            </app-demo-stage-card>\r
        </div>\r
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SearchCropsDemoComponent, { className: "SearchCropsDemoComponent", filePath: "src/app/modules/smart-enroll/demos/pages/search-crops/search-crops-demo.component.ts", lineNumber: 63 });
})();
export {
  SearchCropsDemoComponent
};
//# sourceMappingURL=chunk-5GPAQ2EL.js.map
