import {
  Dk,
  FaceCropService,
  Ma
} from "./chunk-QGSXQIBB.js";
import {
  TranslocoModule,
  TranslocoService
} from "./chunk-FWBWCXY5.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-YWP2Y7QK.js";
import {
  __async
} from "./chunk-F5M2C4EZ.js";

// src/app/modules/smart-enroll/demos/shared/demo-capture-option-heading.component.ts
var DemoCaptureOptionHeadingComponent = class _DemoCaptureOptionHeadingComponent {
  constructor() {
    this.title = "";
    this.subtitle = "";
    this.id = "";
    this.className = "";
  }
  static {
    this.\u0275fac = function DemoCaptureOptionHeadingComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DemoCaptureOptionHeadingComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DemoCaptureOptionHeadingComponent, selectors: [["app-demo-capture-option-heading"]], inputs: { label: "label", title: "title", subtitle: "subtitle", id: "id", className: "className" }, decls: 8, vars: 6, consts: [[1, "mb-3", "flex", "items-center", "gap-2"], ["aria-hidden", "true", 1, "flex", "h-7", "w-7", "shrink-0", "items-center", "justify-center", "rounded-lg", "bg-primary/15", "text-xs", "font-bold", "text-primary"], [1, "text-sm", "font-bold", "tracking-tight", "text-on-surface", 3, "id"], [1, "text-xs", "text-on-surface-variant"]], template: function DemoCaptureOptionHeadingComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "span", 1);
        \u0275\u0275text(2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div")(4, "h3", 2);
        \u0275\u0275text(5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p", 3);
        \u0275\u0275text(7);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.className);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", ctx.label, " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("id", ctx.id || null);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.title);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.subtitle);
      }
    }, encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DemoCaptureOptionHeadingComponent, [{
    type: Component,
    args: [{ selector: "app-demo-capture-option-heading", standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, template: '<div class="mb-3 flex items-center gap-2" [class]="className">\r\n    <span\r\n        class="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-xs font-bold text-primary"\r\n        aria-hidden="true"\r\n    >\r\n        {{ label }}\r\n    </span>\r\n    <div>\r\n        <h3 [id]="id || null" class="text-sm font-bold tracking-tight text-on-surface">{{ title }}</h3>\r\n        <p class="text-xs text-on-surface-variant">{{ subtitle }}</p>\r\n    </div>\r\n</div>\r\n' }]
  }], null, { label: [{
    type: Input,
    args: [{ required: true }]
  }], title: [{
    type: Input,
    args: [{ required: true }]
  }], subtitle: [{
    type: Input,
    args: [{ required: true }]
  }], id: [{
    type: Input
  }], className: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DemoCaptureOptionHeadingComponent, { className: "DemoCaptureOptionHeadingComponent", filePath: "src/app/modules/smart-enroll/demos/shared/demo-capture-option-heading.component.ts", lineNumber: 9 });
})();

// src/app/modules/smart-enroll/demos/shared/demo-choose-one-callout.component.ts
var DemoChooseOneCalloutComponent = class _DemoChooseOneCalloutComponent {
  constructor() {
    this.title = "";
    this.description = "";
    this.className = "";
    this._transloco = inject(TranslocoService);
  }
  get resolvedTitle() {
    return this.title || this._transloco.translate("smartEnrollDemos.common.chooseOneDefaultTitle");
  }
  static {
    this.\u0275fac = function DemoChooseOneCalloutComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DemoChooseOneCalloutComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DemoChooseOneCalloutComponent, selectors: [["app-demo-choose-one-callout"]], inputs: { title: "title", description: "description", className: "className" }, decls: 5, vars: 4, consts: [[1, "rounded-xl", "border", "border-outline-variant/25", "bg-surface-container-low/40", "px-4", "py-3", "text-center", "sm:px-6"], [1, "label-meta", "mb-1", "text-primary"], [1, "text-sm", "text-on-surface-variant"]], template: function DemoChooseOneCalloutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "p", 1);
        \u0275\u0275text(2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "p", 2);
        \u0275\u0275text(4);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.className);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.resolvedTitle);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.description);
      }
    }, dependencies: [TranslocoModule], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DemoChooseOneCalloutComponent, [{
    type: Component,
    args: [{ selector: "app-demo-choose-one-callout", standalone: true, imports: [TranslocoModule], changeDetection: ChangeDetectionStrategy.OnPush, template: '<div\r\n    class="rounded-xl border border-outline-variant/25 bg-surface-container-low/40 px-4 py-3 text-center sm:px-6"\r\n    [class]="className"\r\n>\r\n    <p class="label-meta mb-1 text-primary">{{ resolvedTitle }}</p>\r\n    <p class="text-sm text-on-surface-variant">{{ description }}</p>\r\n</div>\r\n' }]
  }], null, { title: [{
    type: Input
  }], description: [{
    type: Input,
    args: [{ required: true }]
  }], className: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DemoChooseOneCalloutComponent, { className: "DemoChooseOneCalloutComponent", filePath: "src/app/modules/smart-enroll/demos/shared/demo-choose-one-callout.component.ts", lineNumber: 11 });
})();

// src/app/modules/smart-enroll/demos/shared/demo-or-divider.component.ts
var DemoOrDividerComponent = class _DemoOrDividerComponent {
  constructor() {
    this.label = "";
    this.className = "";
    this._transloco = inject(TranslocoService);
  }
  get resolvedLabel() {
    return this.label || this._transloco.translate("smartEnrollDemos.common.orDivider");
  }
  get ariaLabel() {
    return this._transloco.translate("smartEnrollDemos.common.orDividerAria");
  }
  static {
    this.\u0275fac = function DemoOrDividerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DemoOrDividerComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DemoOrDividerComponent, selectors: [["app-demo-or-divider"]], inputs: { label: "label", className: "className" }, decls: 5, vars: 4, consts: [["role", "separator", 1, "relative", "flex", "items-center", "gap-3", "py-1"], [1, "h-px", "flex-1", "bg-gradient-to-r", "from-transparent", "via-outline-variant/50", "to-transparent"], [1, "shrink-0", "rounded-full", "border", "border-outline-variant/40", "bg-surface-container-high", "px-3", "py-1", "text-[0.65rem]", "font-bold", "uppercase", "tracking-[0.2em]", "text-on-surface-variant/80"]], template: function DemoOrDividerComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "div", 1);
        \u0275\u0275elementStart(2, "span", 2);
        \u0275\u0275text(3);
        \u0275\u0275elementEnd();
        \u0275\u0275element(4, "div", 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.className);
        \u0275\u0275attribute("aria-label", ctx.ariaLabel);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.resolvedLabel, " ");
      }
    }, dependencies: [TranslocoModule], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DemoOrDividerComponent, [{
    type: Component,
    args: [{ selector: "app-demo-or-divider", standalone: true, imports: [TranslocoModule], changeDetection: ChangeDetectionStrategy.OnPush, template: '<div\r\n    class="relative flex items-center gap-3 py-1"\r\n    [class]="className"\r\n    role="separator"\r\n    [attr.aria-label]="ariaLabel"\r\n>\r\n    <div class="h-px flex-1 bg-gradient-to-r from-transparent via-outline-variant/50 to-transparent"></div>\r\n    <span\r\n        class="shrink-0 rounded-full border border-outline-variant/40 bg-surface-container-high px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-on-surface-variant/80"\r\n    >\r\n        {{ resolvedLabel }}\r\n    </span>\r\n    <div class="h-px flex-1 bg-gradient-to-r from-transparent via-outline-variant/50 to-transparent"></div>\r\n</div>\r\n' }]
  }], null, { label: [{
    type: Input
  }], className: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DemoOrDividerComponent, { className: "DemoOrDividerComponent", filePath: "src/app/modules/smart-enroll/demos/shared/demo-or-divider.component.ts", lineNumber: 11 });
})();

// src/app/modules/smart-enroll/demos/services/face-guided-capture.service.ts
var DEFAULT_GUIDE_ASPECT_RATIO = 0.75;
var DEFAULT_FACE_GUIDE = {
  minImageHeight: 240,
  minFaceBoxSide: 222,
  minFaceAreaRatio: 0.23,
  successFramesRequired: 3,
  ssdMinConfidence: 0.18
};
var CENTER_TOLERANCE_X_MULTIPLIER = 1.08;
var CENTER_TOLERANCE_Y_MULTIPLIER = 1.08;
var getCenterAndRadius = (imageHeight, imageWidth, aspectRatio = DEFAULT_GUIDE_ASPECT_RATIO) => {
  const data = {
    center: { x: imageWidth / 2, y: imageHeight / 2 },
    radius: { x: 0, y: 0 },
    margin: { y: imageHeight * 0.05, x: 0 }
  };
  data.margin.x = data.margin.y * 0.8;
  data.radius.y = imageHeight * 0.42;
  data.radius.x = data.radius.y * aspectRatio;
  if (data.radius.x * 2 >= imageWidth) {
    data.radius.x = imageWidth * 0.48;
    data.radius.y = data.radius.x / aspectRatio;
  }
  return data;
};
var inRange = (value, min, max) => value >= min && value <= max;
var evaluateCentering = (noseX, noseY, oval) => {
  const { center, margin } = oval;
  const marginX = margin.x * CENTER_TOLERANCE_X_MULTIPLIER;
  const marginY = margin.y * CENTER_TOLERANCE_Y_MULTIPLIER;
  const inRangeX = inRange(noseX, center.x - marginX, center.x + marginX);
  const inRangeY = inRange(noseY, center.y, center.y + marginY * 2.5);
  if (inRangeX && inRangeY) {
    return { ok: true, directions: "" };
  }
  let directions = "";
  if (!inRangeX)
    directions += noseX < center.x - marginX ? "\u2190" : "\u2192";
  if (!inRangeY)
    directions += noseY < center.y ? "\u2193" : "\u2191";
  return { ok: false, directions };
};
var evaluateFaceSize = (faceBoxWidth, faceBoxHeight, imageWidth, imageHeight, minFaceAreaRatio, minFaceBoxSide) => {
  const faceArea = faceBoxWidth * faceBoxHeight;
  const imageArea = imageWidth * imageHeight;
  const proportion = faceArea / imageArea;
  if (proportion < minFaceAreaRatio || faceBoxWidth < minFaceBoxSide || faceBoxHeight < minFaceBoxSide) {
    return { ok: false };
  }
  return { ok: true };
};
var evaluateGuidedFrame = (input) => {
  const { imageWidth, imageHeight, oval, noseX, noseY, faceBoxWidth, faceBoxHeight } = input;
  const centering = evaluateCentering(noseX, noseY, oval);
  const sizeOk = evaluateFaceSize(faceBoxWidth, faceBoxHeight, imageWidth, imageHeight, DEFAULT_FACE_GUIDE.minFaceAreaRatio, DEFAULT_FACE_GUIDE.minFaceBoxSide);
  if (!centering.ok) {
    return {
      error: {
        kind: "center",
        title: "Center your face",
        subtitle: "Align your face with the oval",
        directions: centering.directions
      },
      incrementStreak: false
    };
  }
  if (!sizeOk.ok) {
    return {
      error: {
        kind: "close",
        title: "Move closer",
        subtitle: "Your face should fill more of the frame"
      },
      incrementStreak: false
    };
  }
  return { error: null, incrementStreak: true };
};

// src/app/modules/smart-enroll/demos/shared/face-guided-camera.component.ts
var _c0 = ["video"];
var _c1 = ["mask"];
var _c2 = ["container"];
function FaceGuidedCameraComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.modelsError);
  }
}
function FaceGuidedCameraComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "span", 6);
    \u0275\u0275text(2, "face_retouching_natural");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 7);
    \u0275\u0275text(4, "Loading face detection\u2026");
    \u0275\u0275elementEnd()();
  }
}
function FaceGuidedCameraComponent_Conditional_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 16)(2, "span", 17);
    \u0275\u0275text(3, "check_circle");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "p", 18);
    \u0275\u0275text(5, "Photo captured");
    \u0275\u0275elementEnd()();
  }
}
function FaceGuidedCameraComponent_Conditional_2_Conditional_9_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 7);
    \u0275\u0275text(1, "Use the guided camera for automatic capture when your face is aligned.");
    \u0275\u0275elementEnd();
  }
}
function FaceGuidedCameraComponent_Conditional_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275template(1, FaceGuidedCameraComponent_Conditional_2_Conditional_9_Conditional_1_Template, 2, 0, "p", 7);
    \u0275\u0275elementStart(2, "button", 19);
    \u0275\u0275listener("click", function FaceGuidedCameraComponent_Conditional_2_Conditional_9_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.startCamera());
    });
    \u0275\u0275elementStart(3, "span", 20);
    \u0275\u0275text(4, "photo_camera");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.hideIdleExplainer ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.disabled || ctx_r0.cameraStarting);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.cameraStarting ? "Starting\u2026" : "Open camera", " ");
  }
}
function FaceGuidedCameraComponent_Conditional_2_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 14);
    \u0275\u0275text(1, "Photo captured");
    \u0275\u0275elementEnd();
  }
}
function FaceGuidedCameraComponent_Conditional_2_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p", 7);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.guideError.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.guideError.subtitle);
  }
}
function FaceGuidedCameraComponent_Conditional_2_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 15);
    \u0275\u0275text(1, "Hold still\u2026");
    \u0275\u0275elementEnd();
  }
}
function FaceGuidedCameraComponent_Conditional_2_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 7);
    \u0275\u0275text(1, "Align your face in the frame");
    \u0275\u0275elementEnd();
  }
}
function FaceGuidedCameraComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", null, 0)(3, "div", 8);
    \u0275\u0275element(4, "video", 9, 1)(6, "canvas", 10, 2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, FaceGuidedCameraComponent_Conditional_2_Conditional_8_Template, 6, 0, "div", 11)(9, FaceGuidedCameraComponent_Conditional_2_Conditional_9_Template, 6, 3, "div", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 13);
    \u0275\u0275template(11, FaceGuidedCameraComponent_Conditional_2_Conditional_11_Template, 2, 0, "p", 14)(12, FaceGuidedCameraComponent_Conditional_2_Conditional_12_Template, 4, 2)(13, FaceGuidedCameraComponent_Conditional_2_Conditional_13_Template, 2, 0, "p", 15)(14, FaceGuidedCameraComponent_Conditional_2_Conditional_14_Template, 2, 0, "p", 7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.fillFrame ? "flex h-full min-h-0 flex-1 flex-col gap-3" : "space-y-3");
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.viewfinderClass);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("scale-x-[-1]", ctx_r0.mirror);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r0.captureSuccess ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.streamActive ? 9 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.captureSuccess ? 11 : ctx_r0.guideError ? 12 : ctx_r0.statusOk ? 13 : 14);
  }
}
var coverLayout = (containerW, containerH, intrinsicW, intrinsicH) => {
  const scale = Math.max(containerW / intrinsicW, containerH / intrinsicH);
  const ox = (containerW - intrinsicW * scale) / 2;
  const oy = (containerH - intrinsicH * scale) / 2;
  return { scale, ox, oy };
};
var FaceGuidedCameraComponent = class _FaceGuidedCameraComponent {
  constructor() {
    this.disabled = false;
    this.mirror = true;
    this.hideIdleExplainer = false;
    this.fillFrame = false;
    this.captureSuccessFeedbackMs = 700;
    this.holdStillMs = 500;
    this.tickMs = 160;
    this.captured = new EventEmitter();
    this.captureError = new EventEmitter();
    this._faceCrop = inject(FaceCropService);
    this._cdr = inject(ChangeDetectorRef);
    this.stream = null;
    this.tickInterval = null;
    this.rafRetryRef = null;
    this.overlayRetryRef = null;
    this.captureTimeoutRef = null;
    this.holdStillTimeoutRef = null;
    this.resizeObserver = null;
    this.capturing = false;
    this.tickInFlight = false;
    this.overlayOk = false;
    this.dimRetryCount = 0;
    this.overlayRetryCount = 0;
    this.lastGoodFrame = null;
    this.maxDimRetries = 90;
    this.maxOverlayRetries = 30;
    this.modelsReady = false;
    this.modelsError = null;
    this.cameraStarting = false;
    this.streamActive = false;
    this.guideError = null;
    this.statusOk = false;
    this.captureSuccess = false;
  }
  ngOnInit() {
    void this._faceCrop.loadFaceModels().then(() => {
      this.modelsReady = true;
      this._cdr.markForCheck();
    }, (e) => {
      this.modelsError = e instanceof Error ? e.message : "Failed to load face models";
      this.captureError.emit(this.modelsError);
      this._cdr.markForCheck();
    });
  }
  ngOnDestroy() {
    this.stopStream();
  }
  get viewfinderClass() {
    return this.fillFrame ? "relative h-full w-full min-h-0 flex-1 overflow-hidden rounded-xl bg-black" : "relative w-full overflow-hidden rounded-xl bg-black aspect-video max-h-[min(78vh,640px)]";
  }
  startCamera() {
    return __async(this, null, function* () {
      if (this.disabled || !this.modelsReady || this.capturing)
        return;
      this.cameraStarting = true;
      this.captureSuccess = false;
      this.guideError = null;
      this._cdr.markForCheck();
      try {
        this.stream = yield navigator.mediaDevices.getUserMedia({
          video: { facingMode: "user", width: { ideal: 1280 }, height: { ideal: 720 } },
          audio: false
        });
        const video = this.videoRef?.nativeElement;
        if (!video)
          throw new Error("Camera preview unavailable");
        video.srcObject = this.stream;
        video.setAttribute("playsinline", "true");
        yield video.play();
        this.streamActive = true;
        this.clearHoldStill();
        this.lastGoodFrame = null;
        const startLoop = () => {
          this.drawPlaceholderFromVideo();
          if (this.tickInterval)
            clearInterval(this.tickInterval);
          this.tickInterval = setInterval(() => void this.runTick(), this.tickMs);
          this.connectResizeObserver();
        };
        let started = false;
        const onReady = () => {
          if (started)
            return;
          started = true;
          startLoop();
        };
        if (video.videoWidth > 0 && video.videoHeight > 0) {
          onReady();
        } else {
          video.addEventListener("loadedmetadata", onReady, { once: true });
          video.addEventListener("playing", onReady, { once: true });
        }
      } catch {
        const msg = "Camera access denied or unavailable";
        this.captureError.emit(msg);
        this.guideError = { kind: "no_face", title: "Camera blocked", subtitle: "Allow camera access or use file upload" };
      } finally {
        this.cameraStarting = false;
        this._cdr.markForCheck();
      }
    });
  }
  clearHoldStill() {
    if (this.holdStillTimeoutRef) {
      clearTimeout(this.holdStillTimeoutRef);
      this.holdStillTimeoutRef = null;
    }
  }
  stopStream() {
    if (this.tickInterval) {
      clearInterval(this.tickInterval);
      this.tickInterval = null;
    }
    if (this.rafRetryRef != null) {
      cancelAnimationFrame(this.rafRetryRef);
      this.rafRetryRef = null;
    }
    if (this.overlayRetryRef != null) {
      cancelAnimationFrame(this.overlayRetryRef);
      this.overlayRetryRef = null;
    }
    if (this.captureTimeoutRef) {
      clearTimeout(this.captureTimeoutRef);
      this.captureTimeoutRef = null;
    }
    this.clearHoldStill();
    this.disconnectResizeObserver();
    this.stream?.getTracks().forEach((t) => t.stop());
    this.stream = null;
    const video = this.videoRef?.nativeElement;
    if (video)
      video.srcObject = null;
    this.streamActive = false;
    this.capturing = false;
    this.tickInFlight = false;
    this.captureSuccess = false;
    this.statusOk = false;
    this.guideError = null;
    this.overlayOk = false;
    this.lastGoodFrame = null;
    this.dimRetryCount = 0;
    this.overlayRetryCount = 0;
  }
  beginCapture() {
    if (this.capturing)
      return;
    this.capturing = true;
    this.captureSuccess = true;
    this.clearHoldStill();
    if (this.tickInterval) {
      clearInterval(this.tickInterval);
      this.tickInterval = null;
    }
    this._cdr.markForCheck();
    const frame = this.lastGoodFrame;
    const finalize = () => {
      const video = this.videoRef?.nativeElement;
      const w = frame?.width || video?.videoWidth || 0;
      const h = frame?.height || video?.videoHeight || 0;
      const out = document.createElement("canvas");
      out.width = w;
      out.height = h;
      const ctx = out.getContext("2d");
      if (frame) {
        ctx?.drawImage(frame, 0, 0, w, h);
      } else if (video) {
        ctx?.drawImage(video, 0, 0, w, h);
      }
      const dataUrl = out.toDataURL("image/jpeg", 0.92);
      const comma = dataUrl.indexOf(",");
      const base64 = comma === -1 ? "" : dataUrl.slice(comma + 1);
      this.stopStream();
      this.captured.emit({ dataUrl, base64 });
      this._cdr.markForCheck();
    };
    if (this.captureSuccessFeedbackMs > 0) {
      this.captureTimeoutRef = setTimeout(() => {
        this.captureTimeoutRef = null;
        finalize();
      }, this.captureSuccessFeedbackMs);
    } else {
      finalize();
    }
  }
  armHoldStill() {
    if (this.holdStillTimeoutRef || this.capturing)
      return;
    this.holdStillTimeoutRef = setTimeout(() => {
      this.holdStillTimeoutRef = null;
      this.beginCapture();
    }, this.holdStillMs);
  }
  drawPlaceholderFromVideo() {
    const video = this.videoRef?.nativeElement;
    if (!video)
      return;
    const w = video.videoWidth;
    const h = video.videoHeight;
    if (!w || !h)
      return;
    this.drawOverlay(w, h, false);
  }
  connectResizeObserver() {
    const el = this.containerRef?.nativeElement;
    if (!el || typeof ResizeObserver === "undefined")
      return;
    this.disconnectResizeObserver();
    this.resizeObserver = new ResizeObserver(() => {
      const video = this.videoRef?.nativeElement;
      if (!video?.videoWidth || !video.videoHeight)
        return;
      this.drawOverlay(video.videoWidth, video.videoHeight, this.overlayOk);
    });
    this.resizeObserver.observe(el);
  }
  disconnectResizeObserver() {
    this.resizeObserver?.disconnect();
    this.resizeObserver = null;
  }
  drawOverlay(intrinsicW, intrinsicH, ok) {
    const canvas = this.maskRef?.nativeElement;
    const container = this.containerRef?.nativeElement;
    if (!canvas || !container)
      return;
    this.overlayOk = ok;
    const cw = container.clientWidth;
    const ch = container.clientHeight;
    if (!cw || !ch) {
      if (this.overlayRetryRef == null && this.overlayRetryCount < this.maxOverlayRetries) {
        this.overlayRetryCount += 1;
        this.overlayRetryRef = requestAnimationFrame(() => {
          this.overlayRetryRef = null;
          this.drawOverlay(intrinsicW, intrinsicH, ok);
        });
      }
      return;
    }
    this.overlayRetryCount = 0;
    canvas.width = cw;
    canvas.height = ch;
    const { scale, ox, oy } = coverLayout(cw, ch, intrinsicW, intrinsicH);
    const oval = getCenterAndRadius(intrinsicH, intrinsicW, DEFAULT_GUIDE_ASPECT_RATIO);
    const ctx = canvas.getContext("2d");
    if (!ctx)
      return;
    const cx = ox + oval.center.x * scale;
    const cy = oy + oval.center.y * scale;
    const rx = oval.radius.x * scale;
    const ry = oval.radius.y * scale;
    ctx.clearRect(0, 0, cw, ch);
    ctx.fillStyle = "rgba(255, 255, 255, 0.72)";
    ctx.fillRect(0, 0, cw, ch);
    ctx.globalCompositeOperation = "destination-out";
    ctx.fillStyle = "#fff";
    ctx.beginPath();
    ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalCompositeOperation = "source-over";
    ctx.beginPath();
    ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2);
    ctx.lineWidth = 4;
    ctx.strokeStyle = ok ? "#22c55e" : "#ef4444";
    ctx.stroke();
  }
  runTick() {
    return __async(this, null, function* () {
      const video = this.videoRef?.nativeElement;
      if (!video || this.capturing || this.disabled || this.tickInFlight)
        return;
      const w = video.videoWidth;
      const h = video.videoHeight;
      if (!w || !h) {
        if (this.dimRetryCount < this.maxDimRetries) {
          this.dimRetryCount += 1;
          this.rafRetryRef = requestAnimationFrame(() => {
            this.rafRetryRef = null;
            void this.runTick();
          });
        }
        return;
      }
      this.dimRetryCount = 0;
      this.tickInFlight = true;
      const oval = getCenterAndRadius(h, w, DEFAULT_GUIDE_ASPECT_RATIO);
      const canvas = document.createElement("canvas");
      canvas.width = w;
      canvas.height = h;
      canvas.getContext("2d")?.drawImage(video, 0, 0, w, h);
      try {
        yield this._faceCrop.ensureTfReady();
        if (this.capturing || this.disabled || !this.streamActive)
          return;
        const detections = yield Dk(canvas, new Ma({ minConfidence: DEFAULT_FACE_GUIDE.ssdMinConfidence })).withFaceLandmarks();
        if (this.capturing || this.disabled || !this.streamActive)
          return;
        if (!detections.length) {
          this.clearHoldStill();
          this.lastGoodFrame = null;
          this.guideError = { kind: "no_face", title: "No face detected", subtitle: "Position your face in the frame" };
          this.statusOk = false;
          this.drawOverlay(w, h, false);
          this._cdr.markForCheck();
          return;
        }
        const det = detections[0];
        const box = det.detection.box;
        const nose = det.landmarks.getNose()[3];
        const ev = evaluateGuidedFrame({
          imageWidth: w,
          imageHeight: h,
          oval,
          noseX: nose.x,
          noseY: nose.y,
          faceBoxWidth: box.width,
          faceBoxHeight: box.height
        });
        if (ev.error) {
          this.clearHoldStill();
          this.lastGoodFrame = null;
          this.guideError = ev.error;
          this.statusOk = false;
          this.drawOverlay(w, h, false);
          this._cdr.markForCheck();
          return;
        }
        this.lastGoodFrame = canvas;
        this.guideError = null;
        this.statusOk = true;
        this.drawOverlay(w, h, true);
        this.armHoldStill();
        this._cdr.markForCheck();
      } catch {
        this.clearHoldStill();
        this.lastGoodFrame = null;
        this.statusOk = false;
        this.guideError = { kind: "no_face", title: "Face detection unavailable", subtitle: "Reload the page or upload from gallery" };
        this.drawOverlay(w, h, false);
        this._cdr.markForCheck();
      } finally {
        this.tickInFlight = false;
      }
    });
  }
  static {
    this.\u0275fac = function FaceGuidedCameraComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FaceGuidedCameraComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FaceGuidedCameraComponent, selectors: [["app-face-guided-camera"]], viewQuery: function FaceGuidedCameraComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
        \u0275\u0275viewQuery(_c1, 5);
        \u0275\u0275viewQuery(_c2, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.videoRef = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.maskRef = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.containerRef = _t.first);
      }
    }, hostAttrs: [1, "flex", "min-h-0", "w-full", "flex-col"], hostVars: 4, hostBindings: function FaceGuidedCameraComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("flex-1", ctx.fillFrame)("h-full", ctx.fillFrame);
      }
    }, inputs: { disabled: "disabled", mirror: "mirror", hideIdleExplainer: "hideIdleExplainer", fillFrame: "fillFrame", captureSuccessFeedbackMs: "captureSuccessFeedbackMs", holdStillMs: "holdStillMs", tickMs: "tickMs" }, outputs: { captured: "captured", captureError: "captureError" }, decls: 3, vars: 1, consts: [["container", ""], ["video", ""], ["mask", ""], [1, "rounded-xl", "border", "border-outline-variant/30", "bg-surface-container-low", "p-4", "text-sm", "text-on-surface"], [1, "flex", "flex-col", "items-center", "justify-center", "gap-3", "rounded-xl", "border", "border-outline-variant/30", "bg-surface-container-low", "p-8"], [3, "class"], [1, "material-symbols-outlined", "text-4xl", "text-primary", "animate-pulse"], [1, "text-sm", "text-on-surface-variant"], [1, "absolute", "inset-0"], ["autoplay", "", "playsinline", "", "muted", "", 1, "absolute", "inset-0", "h-full", "w-full", "object-cover", "bg-black"], ["aria-hidden", "true", 1, "pointer-events-none", "absolute", "inset-0", "z-[1]", "h-full", "w-full"], [1, "absolute", "inset-0", "z-20", "flex", "flex-col", "items-center", "justify-center", "gap-3", "bg-emerald-950/45", "px-4", "text-center", "backdrop-blur-[2px]"], [1, "absolute", "inset-0", "flex", "flex-col", "items-center", "justify-center", "gap-3", "bg-surface-container-high/80", "z-10", "px-4", "text-center", "backdrop-blur-sm"], [1, "min-h-[4.5rem]", "text-center", "text-sm"], [1, "font-semibold", "text-green-400"], [1, "text-sm", "font-medium", "text-green-400"], [1, "flex", "h-16", "w-16", "items-center", "justify-center", "rounded-full", "border", "border-emerald-300/40", "bg-emerald-400/20"], [1, "material-symbols-outlined", "text-4xl", "text-emerald-200"], [1, "text-base", "font-semibold", "text-white"], ["type", "button", 1, "inline-flex", "items-center", "gap-2", "px-5", "py-3", "rounded-lg", "bg-primary-cta", "text-on-primary-container", "font-bold", "text-sm", "shadow-primary", "disabled:opacity-50", 3, "click", "disabled"], [1, "material-symbols-outlined", "text-lg"], [1, "font-semibold", "text-on-surface"]], template: function FaceGuidedCameraComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, FaceGuidedCameraComponent_Conditional_0_Template, 2, 1, "div", 3)(1, FaceGuidedCameraComponent_Conditional_1_Template, 5, 0, "div", 4)(2, FaceGuidedCameraComponent_Conditional_2_Template, 15, 9, "div", 5);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.modelsError ? 0 : !ctx.modelsReady ? 1 : 2);
      }
    }, dependencies: [CommonModule], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FaceGuidedCameraComponent, [{
    type: Component,
    args: [{ selector: "app-face-guided-camera", standalone: true, imports: [CommonModule], changeDetection: ChangeDetectionStrategy.OnPush, host: {
      class: "flex min-h-0 w-full flex-col",
      "[class.flex-1]": "fillFrame",
      "[class.h-full]": "fillFrame"
    }, template: `@if (modelsError) {\r
    <div class="rounded-xl border border-outline-variant/30 bg-surface-container-low p-4 text-sm text-on-surface">{{ modelsError }}</div>\r
} @else if (!modelsReady) {\r
    <div class="flex flex-col items-center justify-center gap-3 rounded-xl border border-outline-variant/30 bg-surface-container-low p-8">\r
        <span class="material-symbols-outlined text-4xl text-primary animate-pulse">face_retouching_natural</span>\r
        <p class="text-sm text-on-surface-variant">Loading face detection\u2026</p>\r
    </div>\r
} @else {\r
    <div [class]="fillFrame ? 'flex h-full min-h-0 flex-1 flex-col gap-3' : 'space-y-3'">\r
        <div #container [class]="viewfinderClass">\r
            <div class="absolute inset-0" [class.scale-x-[-1]]="mirror">\r
                <video #video class="absolute inset-0 h-full w-full object-cover bg-black" autoplay playsinline muted></video>\r
                <canvas #mask class="pointer-events-none absolute inset-0 z-[1] h-full w-full" aria-hidden="true"></canvas>\r
            </div>\r
            @if (captureSuccess) {\r
                <div class="absolute inset-0 z-20 flex flex-col items-center justify-center gap-3 bg-emerald-950/45 px-4 text-center backdrop-blur-[2px]">\r
                    <div class="flex h-16 w-16 items-center justify-center rounded-full border border-emerald-300/40 bg-emerald-400/20">\r
                        <span class="material-symbols-outlined text-4xl text-emerald-200">check_circle</span>\r
                    </div>\r
                    <p class="text-base font-semibold text-white">Photo captured</p>\r
                </div>\r
            }\r
            @if (!streamActive) {\r
                <div class="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-surface-container-high/80 z-10 px-4 text-center backdrop-blur-sm">\r
                    @if (!hideIdleExplainer) {\r
                        <p class="text-sm text-on-surface-variant">Use the guided camera for automatic capture when your face is aligned.</p>\r
                    }\r
                    <button\r
                        type="button"\r
                        [disabled]="disabled || cameraStarting"\r
                        (click)="startCamera()"\r
                        class="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-primary-cta text-on-primary-container font-bold text-sm shadow-primary disabled:opacity-50"\r
                    >\r
                        <span class="material-symbols-outlined text-lg">photo_camera</span>\r
                        {{ cameraStarting ? 'Starting\u2026' : 'Open camera' }}\r
                    </button>\r
                </div>\r
            }\r
        </div>\r
        <div class="min-h-[4.5rem] text-center text-sm">\r
            @if (captureSuccess) {\r
                <p class="font-semibold text-green-400">Photo captured</p>\r
            } @else if (guideError) {\r
                <p class="font-semibold text-on-surface">{{ guideError.title }}</p>\r
                <p class="text-sm text-on-surface-variant">{{ guideError.subtitle }}</p>\r
            } @else if (statusOk) {\r
                <p class="text-sm font-medium text-green-400">Hold still\u2026</p>\r
            } @else {\r
                <p class="text-sm text-on-surface-variant">Align your face in the frame</p>\r
            }\r
        </div>\r
    </div>\r
}\r
` }]
  }], null, { videoRef: [{
    type: ViewChild,
    args: ["video"]
  }], maskRef: [{
    type: ViewChild,
    args: ["mask"]
  }], containerRef: [{
    type: ViewChild,
    args: ["container"]
  }], disabled: [{
    type: Input
  }], mirror: [{
    type: Input
  }], hideIdleExplainer: [{
    type: Input
  }], fillFrame: [{
    type: Input
  }], captureSuccessFeedbackMs: [{
    type: Input
  }], holdStillMs: [{
    type: Input
  }], tickMs: [{
    type: Input
  }], captured: [{
    type: Output
  }], captureError: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FaceGuidedCameraComponent, { className: "FaceGuidedCameraComponent", filePath: "src/app/modules/smart-enroll/demos/shared/face-guided-camera.component.ts", lineNumber: 46 });
})();

export {
  DemoCaptureOptionHeadingComponent,
  DemoChooseOneCalloutComponent,
  DemoOrDividerComponent,
  FaceGuidedCameraComponent
};
//# sourceMappingURL=chunk-FRGGYDRL.js.map
