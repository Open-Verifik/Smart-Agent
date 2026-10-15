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
  DemoResultActionsComponent
} from "./chunk-I4NQXRI6.js";
import {
  BiometricsDemoApiService,
  DEFAULT_FACE_COMPARE_MIN_SCORE,
  DemoPageShellComponent,
  fileToBase64,
  parseFaceCompareResult
} from "./chunk-QDU3MPYG.js";
import "./chunk-45PTEIW3.js";
import "./chunk-B4YUVLJ7.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  RangeValueAccessor
} from "./chunk-5EV2TUYF.js";
import {
  TranslocoModule,
  TranslocoPipe,
  TranslocoService
} from "./chunk-VENEX45A.js";
import {
  Router
} from "./chunk-DM2XPT7T.js";
import "./chunk-KTYFS5OT.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
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
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
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

// src/app/modules/smart-enroll/demos/pages/face-comparison/face-comparison-demo.component.ts
var _c0 = ["sourceFileInput"];
var _c1 = ["targetFileInput"];
var _c2 = (a0, a1, a2) => ({ "bg-primary text-on-primary": a0, "bg-primary-container ring-4 ring-primary-container/20": a1, "bg-surface-container-high border border-outline-variant text-on-surface-variant/50": a2 });
var _c3 = (a0) => [a0];
var _c4 = (a0) => ({ data: a0, key: "source", label: "smartEnrollDemos.faceComparison.slotSource" });
var _c5 = (a0) => ({ data: a0, key: "target", label: "smartEnrollDemos.faceComparison.slotTarget" });
var _c6 = (a0, a1) => [a0, a1];
var _c7 = (a0) => ({ score: a0 });
function _forTrack0($index, $item) {
  return this.step;
}
var _forTrack1 = ($index, $item) => $item.key;
function FaceComparisonDemoComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 2);
  }
}
function FaceComparisonDemoComponent_Conditional_2_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 12);
    \u0275\u0275text(1, "check");
    \u0275\u0275elementEnd();
  }
}
function FaceComparisonDemoComponent_Conditional_2_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const \u0275$index_9_r1 = \u0275\u0275nextContext().$index;
    \u0275\u0275textInterpolate1(" ", \u0275$index_9_r1 + 1, " ");
  }
}
function FaceComparisonDemoComponent_Conditional_2_For_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 14);
  }
  if (rf & 2) {
    const \u0275$index_9_r1 = \u0275\u0275nextContext().$index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", ctx_r1.step > \u0275$index_9_r1 + 1 ? "bg-primary" : "bg-outline-variant/30");
  }
}
function FaceComparisonDemoComponent_Conditional_2_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 10)(2, "div", 11);
    \u0275\u0275template(3, FaceComparisonDemoComponent_Conditional_2_For_2_Conditional_3_Template, 2, 0, "span", 12)(4, FaceComparisonDemoComponent_Conditional_2_For_2_Conditional_4_Template, 1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 13);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, FaceComparisonDemoComponent_Conditional_2_For_2_Conditional_8_Template, 1, 1, "div", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const label_r3 = ctx.$implicit;
    const \u0275$index_9_r1 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(7, _c2, ctx_r1.step > \u0275$index_9_r1 + 1, ctx_r1.step === \u0275$index_9_r1 + 1, ctx_r1.step < \u0275$index_9_r1 + 1));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.step > \u0275$index_9_r1 + 1 ? 3 : 4);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r1.step === \u0275$index_9_r1 + 1 ? "text-primary" : "text-on-surface-variant/50");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 5, label_r3), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(\u0275$index_9_r1 < 2 ? 8 : -1);
  }
}
function FaceComparisonDemoComponent_Conditional_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "smartEnrollDemos.faceComparison.headlineSource"), " ");
  }
}
function FaceComparisonDemoComponent_Conditional_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "smartEnrollDemos.faceComparison.headlineTarget"), " ");
  }
}
function FaceComparisonDemoComponent_Conditional_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "smartEnrollDemos.faceComparison.headlineAnalysis"), " ");
  }
}
function FaceComparisonDemoComponent_Conditional_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "smartEnrollDemos.faceComparison.subIdleSource"), " ");
  }
}
function FaceComparisonDemoComponent_Conditional_2_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "smartEnrollDemos.faceComparison.subIdleTarget"), " ");
  }
}
function FaceComparisonDemoComponent_Conditional_2_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "smartEnrollDemos.faceComparison.subLoading"), " ");
  }
}
function FaceComparisonDemoComponent_Conditional_2_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "smartEnrollDemos.faceComparison.subResult"), " ");
  }
}
function FaceComparisonDemoComponent_Conditional_2_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "smartEnrollDemos.faceComparison.subProcessing"), " ");
  }
}
function FaceComparisonDemoComponent_Conditional_2_Conditional_14_Conditional_1_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-demo-raster-image", 25);
  }
  if (rf & 2) {
    const slot_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", slot_r5.data.preview);
  }
}
function FaceComparisonDemoComponent_Conditional_2_Conditional_14_Conditional_1_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "span", 28);
    \u0275\u0275text(2, "face");
    \u0275\u0275elementEnd()();
  }
}
function FaceComparisonDemoComponent_Conditional_2_Conditional_14_Conditional_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 24);
    \u0275\u0275template(2, FaceComparisonDemoComponent_Conditional_2_Conditional_14_Conditional_1_For_2_Conditional_2_Template, 1, 1, "app-demo-raster-image", 25)(3, FaceComparisonDemoComponent_Conditional_2_Conditional_14_Conditional_1_For_2_Conditional_3_Template, 3, 0, "div", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 27);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const slot_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.highlightSlot === slot_r5.key ? "ring-4 ring-emerald-400/35" : "border-outline-variant/30");
    \u0275\u0275advance();
    \u0275\u0275conditional(slot_r5.data.preview ? 2 : 3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 3, slot_r5.label));
  }
}
function FaceComparisonDemoComponent_Conditional_2_Conditional_14_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275repeaterCreate(1, FaceComparisonDemoComponent_Conditional_2_Conditional_14_Conditional_1_For_2_Template, 7, 5, "div", 23, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction2(4, _c6, \u0275\u0275pureFunction1(0, _c4, ctx_r1.source), \u0275\u0275pureFunction1(2, _c5, ctx_r1.target)));
  }
}
function FaceComparisonDemoComponent_Conditional_2_Conditional_14_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "label", 29);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 30)(5, "input", 31);
    \u0275\u0275twoWayListener("ngModelChange", function FaceComparisonDemoComponent_Conditional_2_Conditional_14_Conditional_2_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.compareMinScore, $event) || (ctx_r1.compareMinScore = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 32);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "smartEnrollDemos.faceComparison.compareMinScoreLabel"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.compareMinScore);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.compareMinScore.toFixed(2));
  }
}
function FaceComparisonDemoComponent_Conditional_2_Conditional_14_For_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-face-guided-camera", 33);
    \u0275\u0275listener("captured", function FaceComparisonDemoComponent_Conditional_2_Conditional_14_For_11_Template_app_face_guided_camera_captured_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onCapture($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("fillFrame", true)("hideIdleExplainer", true)("captureSuccessFeedbackMs", 750);
  }
}
function FaceComparisonDemoComponent_Conditional_2_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275template(1, FaceComparisonDemoComponent_Conditional_2_Conditional_14_Conditional_1_Template, 3, 7, "div", 15)(2, FaceComparisonDemoComponent_Conditional_2_Conditional_14_Conditional_2_Template, 8, 5, "div");
    \u0275\u0275element(3, "app-demo-choose-one-callout", 16);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275element(5, "app-demo-capture-option-heading", 17);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementStart(8, "app-demo-scanner-shell")(9, "div", 18);
    \u0275\u0275repeaterCreate(10, FaceComparisonDemoComponent_Conditional_2_Conditional_14_For_11_Template, 1, 3, "app-face-guided-camera", 19, _forTrack0, true);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(12, "app-demo-or-divider")(13, "app-demo-capture-option-heading", 20);
    \u0275\u0275pipe(14, "transloco");
    \u0275\u0275pipe(15, "transloco");
    \u0275\u0275elementStart(16, "app-demo-upload-image-button", 21);
    \u0275\u0275pipe(17, "transloco");
    \u0275\u0275pipe(18, "transloco");
    \u0275\u0275listener("clicked", function FaceComparisonDemoComponent_Conditional_2_Conditional_14_Template_app_demo_upload_image_button_clicked_16_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.triggerUpload(ctx_r1.currentSlot));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "input", 22, 0);
    \u0275\u0275listener("change", function FaceComparisonDemoComponent_Conditional_2_Conditional_14_Template_input_change_19_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onFileSelected($event, "source"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "input", 22, 1);
    \u0275\u0275listener("change", function FaceComparisonDemoComponent_Conditional_2_Conditional_14_Template_input_change_21_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onFileSelected($event, "target"));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.source.preview || ctx_r1.target.preview ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.step === 1 ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("description", \u0275\u0275pipeBind1(4, 9, "smartEnrollDemos.faceComparison.chooseOneDescription"));
    \u0275\u0275advance(2);
    \u0275\u0275property("title", \u0275\u0275pipeBind1(6, 11, "smartEnrollDemos.faceComparison.cameraTitle"))("subtitle", \u0275\u0275pipeBind1(7, 13, "smartEnrollDemos.faceComparison.cameraSubtitle"));
    \u0275\u0275advance(5);
    \u0275\u0275repeater(\u0275\u0275pureFunction1(23, _c3, ctx_r1.step));
    \u0275\u0275advance(3);
    \u0275\u0275property("title", \u0275\u0275pipeBind1(14, 15, "smartEnrollDemos.faceComparison.uploadTitle"))("subtitle", \u0275\u0275pipeBind1(15, 17, "smartEnrollDemos.faceComparison.uploadSubtitle"));
    \u0275\u0275advance(3);
    \u0275\u0275property("primaryText", \u0275\u0275pipeBind1(17, 19, "smartEnrollDemos.faceComparison.uploadPrimary"))("secondaryText", \u0275\u0275pipeBind1(18, 21, "smartEnrollDemos.common.jpegPngGallery"));
  }
}
function FaceComparisonDemoComponent_Conditional_2_Conditional_15_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275element(1, "div", 37);
    \u0275\u0275elementStart(2, "p", 38);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "smartEnrollDemos.faceComparison.analyzing"));
  }
}
function FaceComparisonDemoComponent_Conditional_2_Conditional_15_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35)(1, "h2", 39);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 40);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 41)(7, "div", 42)(8, "p", 43);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 44);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 42)(14, "p", 45);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "p", 44);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "app-demo-result-actions", 46);
    \u0275\u0275pipe(21, "transloco");
    \u0275\u0275pipe(22, "transloco");
    \u0275\u0275listener("secondary", function FaceComparisonDemoComponent_Conditional_2_Conditional_15_Conditional_2_Template_app_demo_result_actions_secondary_20_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.reset());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", ctx_r1.result.match ? "bg-surface-container-low border-primary/20" : "bg-error-container/10 border-error/20");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 9, ctx_r1.result.match ? "smartEnrollDemos.faceComparison.matchConfirmed" : "smartEnrollDemos.faceComparison.noMatch"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.resultMessage());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", (ctx_r1.result.score * 100).toFixed(1), "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(12, 11, "smartEnrollDemos.faceComparison.similarityMin", \u0275\u0275pureFunction1(22, _c7, ctx_r1.compareMinScore.toFixed(2))));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 14, ctx_r1.result.match ? "smartEnrollDemos.faceComparison.verdictMatch" : "smartEnrollDemos.faceComparison.verdictDiff"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 16, "smartEnrollDemos.faceComparison.verdict"));
    \u0275\u0275advance(2);
    \u0275\u0275property("secondaryLabel", \u0275\u0275pipeBind1(21, 18, "smartEnrollDemos.faceComparison.tryAgain"))("primaryLabel", \u0275\u0275pipeBind1(22, 20, "smartEnrollDemos.common.backToDemos"));
  }
}
function FaceComparisonDemoComponent_Conditional_2_Conditional_15_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36)(1, "div", 47)(2, "span", 48);
    \u0275\u0275text(3, "error");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "h2", 49);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 40);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "app-demo-result-actions", 46);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275listener("secondary", function FaceComparisonDemoComponent_Conditional_2_Conditional_15_Conditional_3_Template_app_demo_result_actions_secondary_9_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.reset());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 4, "smartEnrollDemos.faceComparison.errorResultTitle"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.error);
    \u0275\u0275advance();
    \u0275\u0275property("secondaryLabel", \u0275\u0275pipeBind1(10, 6, "smartEnrollDemos.faceComparison.tryAgain"))("primaryLabel", \u0275\u0275pipeBind1(11, 8, "smartEnrollDemos.common.backToDemos"));
  }
}
function FaceComparisonDemoComponent_Conditional_2_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275template(1, FaceComparisonDemoComponent_Conditional_2_Conditional_15_Conditional_1_Template, 5, 3, "div", 34)(2, FaceComparisonDemoComponent_Conditional_2_Conditional_15_Conditional_2_Template, 23, 24, "div", 35)(3, FaceComparisonDemoComponent_Conditional_2_Conditional_15_Conditional_3_Template, 12, 10, "div", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isLoading ? 1 : ctx_r1.result ? 2 : ctx_r1.error ? 3 : -1);
  }
}
function FaceComparisonDemoComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275repeaterCreate(1, FaceComparisonDemoComponent_Conditional_2_For_2_Template, 9, 11, "div", 4, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 5)(4, "h2", 6);
    \u0275\u0275template(5, FaceComparisonDemoComponent_Conditional_2_Conditional_5_Template, 2, 3)(6, FaceComparisonDemoComponent_Conditional_2_Conditional_6_Template, 2, 3)(7, FaceComparisonDemoComponent_Conditional_2_Conditional_7_Template, 2, 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 7);
    \u0275\u0275template(9, FaceComparisonDemoComponent_Conditional_2_Conditional_9_Template, 2, 3)(10, FaceComparisonDemoComponent_Conditional_2_Conditional_10_Template, 2, 3)(11, FaceComparisonDemoComponent_Conditional_2_Conditional_11_Template, 2, 3)(12, FaceComparisonDemoComponent_Conditional_2_Conditional_12_Template, 2, 3)(13, FaceComparisonDemoComponent_Conditional_2_Conditional_13_Template, 2, 3);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(14, FaceComparisonDemoComponent_Conditional_2_Conditional_14_Template, 23, 25, "div", 8)(15, FaceComparisonDemoComponent_Conditional_2_Conditional_15_Template, 4, 1, "div", 9);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.stepLabels);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.step === 1 ? 5 : ctx_r1.step === 2 ? 6 : 7);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.step === 1 ? 9 : ctx_r1.step === 2 ? 10 : ctx_r1.isLoading ? 11 : ctx_r1.result ? 12 : 13);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.step === 1 || ctx_r1.step === 2 ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.step === 3 ? 15 : -1);
  }
}
var emptySlot = () => ({ preview: null, b64: null });
var FaceComparisonDemoComponent = class _FaceComparisonDemoComponent {
  constructor() {
    this.defaultMinScore = DEFAULT_FACE_COMPARE_MIN_SCORE;
    this.stepLabels = [
      "smartEnrollDemos.faceComparison.stepSource",
      "smartEnrollDemos.faceComparison.stepTarget",
      "smartEnrollDemos.faceComparison.stepAnalyze"
    ];
    this.authChecked = false;
    this.step = 1;
    this.source = emptySlot();
    this.target = emptySlot();
    this.isLoading = false;
    this.result = null;
    this.error = null;
    this.compareMinScore = DEFAULT_FACE_COMPARE_MIN_SCORE;
    this.highlightSlot = null;
    this._api = inject(BiometricsDemoApiService);
    this._cdr = inject(ChangeDetectorRef);
    this._router = inject(Router);
    this._transloco = inject(TranslocoService);
    this._highlightTimeout = null;
  }
  ngOnInit() {
    if (!this._api.ensureAuthenticated()) {
      this.authChecked = true;
      return;
    }
    this.authChecked = true;
  }
  ngOnDestroy() {
    if (this._highlightTimeout)
      clearTimeout(this._highlightTimeout);
  }
  get currentSlot() {
    return this.step === 1 ? "source" : "target";
  }
  pulseSlot(slot) {
    if (this._highlightTimeout)
      clearTimeout(this._highlightTimeout);
    this.highlightSlot = slot;
    this._highlightTimeout = setTimeout(() => {
      this.highlightSlot = null;
      this._highlightTimeout = null;
      this._cdr.markForCheck();
    }, 2200);
    this._cdr.markForCheck();
  }
  applyCapturedSlot(which, slot) {
    this.pulseSlot(which);
    if (which === "source") {
      this.source = slot;
      this.step = 2;
      this._cdr.markForCheck();
      return;
    }
    this.target = slot;
    if (this.source.b64)
      this.runComparison(this.source.b64, slot.b64);
  }
  onCapture(payload) {
    this.applyCapturedSlot(this.currentSlot, { preview: payload.dataUrl, b64: payload.base64 });
  }
  onFileSelected(event, which) {
    return __async(this, null, function* () {
      const file = event.target.files?.[0];
      if (!file)
        return;
      const b64 = yield fileToBase64(file);
      this.applyCapturedSlot(which, { preview: URL.createObjectURL(file), b64 });
    });
  }
  runComparison(srcB64, tgtB64) {
    if (!this._api.ensureAuthenticated())
      return;
    this.step = 3;
    this.isLoading = true;
    this.error = null;
    this.result = null;
    this._cdr.markForCheck();
    this._api.compareFaces({
      gallery: [srcB64],
      probe: [tgtB64],
      compare_min_score: this.compareMinScore
    }).subscribe({
      next: (data) => {
        this.result = parseFaceCompareResult(data);
        this.isLoading = false;
        this._cdr.markForCheck();
      },
      error: (err) => {
        this.error = err.error ?? err.message ?? "Request failed";
        this.isLoading = false;
        this._cdr.markForCheck();
      }
    });
  }
  reset() {
    if (this._highlightTimeout) {
      clearTimeout(this._highlightTimeout);
      this._highlightTimeout = null;
    }
    this.step = 1;
    this.source = emptySlot();
    this.target = emptySlot();
    this.result = null;
    this.error = null;
    this.highlightSlot = null;
    this.compareMinScore = DEFAULT_FACE_COMPARE_MIN_SCORE;
    this._cdr.markForCheck();
  }
  backToDemos() {
    void this._router.navigate(["/smart-enroll/demos"]);
  }
  triggerUpload(which) {
    if (which === "source")
      this.sourceFileInput?.nativeElement.click();
    else
      this.targetFileInput?.nativeElement.click();
  }
  resultMessage() {
    if (!this.result)
      return "";
    if (this.result.message)
      return this.result.message;
    return this._transloco.translate(this.result.match ? "smartEnrollDemos.faceComparison.fallbackMatch" : "smartEnrollDemos.faceComparison.fallbackNoMatch");
  }
  static {
    this.\u0275fac = function FaceComparisonDemoComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FaceComparisonDemoComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FaceComparisonDemoComponent, selectors: [["app-face-comparison-demo"]], viewQuery: function FaceComparisonDemoComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
        \u0275\u0275viewQuery(_c1, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sourceFileInput = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.targetFileInput = _t.first);
      }
    }, decls: 3, vars: 1, consts: [["sourceFileInput", ""], ["targetFileInput", ""], [1, "h-60", "rounded-xl", "bg-surface-container-high", "animate-pulse"], [1, "flex", "items-center", "justify-center", "mb-10", "pt-4", "gap-2"], [1, "flex", "items-center"], [1, "text-center", "mb-8"], [1, "text-4xl", "font-black", "tracking-tight", "text-on-surface", "mb-2"], [1, "text-on-surface-variant", "text-sm", "max-w-xl", "mx-auto"], [1, "max-w-2xl", "mx-auto", "space-y-5"], [1, "max-w-lg", "mx-auto"], [1, "flex", "flex-col", "items-center"], [1, "h-10", "w-10", "rounded-full", "flex", "items-center", "justify-center", "font-bold", "transition-all", 3, "ngClass"], [1, "material-symbols-outlined", "text-sm"], [1, "text-[0.6875rem]", "font-bold", "uppercase", "tracking-wider", "mt-2", 3, "ngClass"], [1, "w-12", "h-0.5", "mx-2", "mb-5", 3, "ngClass"], [1, "flex", "gap-4", "justify-center"], [3, "description"], ["label", "A", 3, "title", "subtitle"], [1, "flex", "min-h-0", "flex-1", "flex-col"], [3, "fillFrame", "hideIdleExplainer", "captureSuccessFeedbackMs"], ["label", "B", 3, "title", "subtitle"], [3, "clicked", "primaryText", "secondaryText"], ["type", "file", "accept", "image/*", 1, "hidden", 3, "change"], [1, "flex", "flex-col", "items-center", "gap-2"], [1, "relative", "w-16", "h-16", "rounded-full", "overflow-hidden", "border", "transition-all", 3, "ngClass"], ["alt", "", "className", "w-full h-full object-cover", 3, "src"], [1, "w-full", "h-full", "flex", "items-center", "justify-center", "bg-surface-container-high"], [1, "text-[10px]", "uppercase", "tracking-wide", "text-on-surface-variant"], [1, "material-symbols-outlined", "text-on-surface-variant/55"], ["for", "compare-min-score", 1, "block", "text-[0.6875rem]", "font-bold", "uppercase", "tracking-wider", "text-on-surface-variant", "mb-2"], [1, "flex", "items-center", "gap-4", "mb-4"], ["id", "compare-min-score", "type", "range", "min", "0.67", "max", "0.95", "step", "0.01", "name", "compareMinScore", 1, "demo-range-input", "flex-1", 3, "ngModelChange", "ngModel"], [1, "text-sm", "font-mono", "text-primary", "w-14", "shrink-0", "tabular-nums"], [3, "captured", "fillFrame", "hideIdleExplainer", "captureSuccessFeedbackMs"], [1, "text-center", "py-12"], [1, "rounded-2xl", "p-8", "text-center", "border", 3, "ngClass"], [1, "rounded-2xl", "border", "border-error/20", "bg-error-container/10", "p-8", "text-center"], [1, "w-16", "h-16", "rounded-full", "border-2", "border-primary/40", "border-t-primary", "animate-spin", "mx-auto", "mb-4"], [1, "text-on-surface-variant"], [1, "text-3xl", "font-black", "tracking-tight", "mb-2"], [1, "text-on-surface-variant", "mb-8"], [1, "grid", "grid-cols-2", "gap-4", "mb-8"], [1, "bg-surface-container", "rounded-lg", "p-4"], [1, "text-2xl", "font-black", "text-primary"], [1, "text-[10px]", "mt-1", "text-on-surface-variant", "uppercase"], [1, "text-2xl", "font-black", "text-on-surface"], [3, "secondary", "secondaryLabel", "primaryLabel"], [1, "mx-auto", "mb-6", "flex", "h-16", "w-16", "items-center", "justify-center", "rounded-full", "border", "border-error/25", "bg-error-container/30", "text-error"], [1, "material-symbols-outlined", "text-3xl"], [1, "text-2xl", "font-black", "tracking-tight", "mb-2"]], template: function FaceComparisonDemoComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-demo-page-shell");
        \u0275\u0275template(1, FaceComparisonDemoComponent_Conditional_1_Template, 1, 0, "div", 2)(2, FaceComparisonDemoComponent_Conditional_2_Template, 16, 4);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.authChecked ? 1 : 2);
      }
    }, dependencies: [
      CommonModule,
      NgClass,
      FormsModule,
      DefaultValueAccessor,
      RangeValueAccessor,
      NgControlStatus,
      NgModel,
      TranslocoModule,
      TranslocoPipe,
      DemoPageShellComponent,
      DemoChooseOneCalloutComponent,
      DemoCaptureOptionHeadingComponent,
      DemoOrDividerComponent,
      DemoScannerShellComponent,
      DemoUploadImageButtonComponent,
      DemoRasterImageComponent,
      FaceGuidedCameraComponent,
      DemoResultActionsComponent
    ], styles: ['@charset "UTF-8";\n\n\n\n.smart-enroll-demos[_ngcontent-%COMP%] {\n  --color-surface: 250 250 249;\n  --color-surface-container-lowest: 255 255 255;\n  --color-surface-container-low: 255 255 255;\n  --color-surface-container: 245 245 244;\n  --color-surface-container-high: 231 229 228;\n  --color-surface-container-highest: 214 211 209;\n  --color-surface-bright: 255 255 255;\n  --color-surface-dim: 250 250 249;\n  --color-surface-variant: 231 229 228;\n  --color-surface-tint: 38 66 255;\n  --color-primary: 38 66 255;\n  --color-primary-fixed: 239 246 255;\n  --color-primary-fixed-dim: 219 234 254;\n  --color-primary-container: 219 234 254;\n  --color-on-primary: 255 255 255;\n  --color-on-primary-fixed: 28 25 23;\n  --color-on-primary-fixed-variant: 30 58 138;\n  --color-on-primary-container: 28 25 23;\n  --color-inverse-primary: 59 130 246;\n  --color-secondary: 87 83 78;\n  --color-secondary-fixed: 245 245 244;\n  --color-secondary-fixed-dim: 231 229 228;\n  --color-secondary-container: 231 229 228;\n  --color-on-secondary: 28 25 23;\n  --color-on-secondary-fixed: 28 25 23;\n  --color-on-secondary-fixed-variant: 68 64 60;\n  --color-on-secondary-container: 68 64 60;\n  --color-tertiary: 13 148 136;\n  --color-tertiary-fixed: 204 251 241;\n  --color-tertiary-fixed-dim: 153 246 228;\n  --color-tertiary-container: 204 251 241;\n  --color-on-tertiary: 255 255 255;\n  --color-on-tertiary-fixed: 19 78 74;\n  --color-on-tertiary-fixed-variant: 17 94 89;\n  --color-on-tertiary-container: 19 78 74;\n  --color-background: 250 250 249;\n  --color-on-background: 28 25 23;\n  --color-on-surface: 28 25 23;\n  --color-on-surface-variant: 87 83 78;\n  --color-inverse-surface: 28 25 23;\n  --color-inverse-on-surface: 250 250 249;\n  --color-outline: 168 162 158;\n  --color-outline-variant: 214 211 209;\n  --color-error: 185 28 28;\n  --color-error-container: 254 226 226;\n  --color-on-error: 255 255 255;\n  --color-on-error-container: 127 29 29;\n  --frost: rgb(38 66 255 / 0.12);\n  --frost-variant: rgb(38 66 255 / 0.06);\n  --shadow-ambient: 0 8px 40px rgb(28 25 23 / 0.08);\n  --shadow-float: 0 16px 60px rgb(28 25 23 / 0.12);\n  --shadow-glow: 0 0 40px rgb(38 66 255 / 0.08);\n  --shadow-scan-line: 0 0 15px rgb(38 66 255 / 0.35);\n  --shadow-primary: 0 1px 2px rgb(38 66 255 / 0.12), 0 4px 14px rgb(38 66 255 / 0.16);\n  --shadow-ring-frost: 0 0 0 1px rgb(38 66 255 / 0.12);\n  --bg-primary-gradient:\n    linear-gradient(\n      135deg,\n      #2642ff 0%,\n      #1a2f99 100%);\n  --utility-primary-cta:\n    linear-gradient(\n      135deg,\n      #2642ff 0%,\n      #1a2f99 100%);\n  --utility-primary-cta-color: 255 255 255;\n  --utility-text-gradient-from: 38 66 255;\n  --utility-text-gradient-to: 26 47 153;\n  --utility-scanning-ring-outer: 38 66 255;\n  --utility-scanning-ring-inner: 26 47 153;\n  background-color: rgb(var(--color-surface));\n  color: rgb(var(--color-on-surface));\n  min-height: 100%;\n  width: 100%;\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  font-family: "Material Symbols Outlined", sans-serif;\n  font-weight: normal;\n  font-style: normal;\n  line-height: 1;\n  letter-spacing: normal;\n  text-transform: none;\n  display: inline-block;\n  white-space: nowrap;\n  word-wrap: normal;\n  direction: ltr;\n  font-variation-settings:\n    "FILL" 0,\n    "wght" 400,\n    "GRAD" 0,\n    "opsz" 24;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .glass-panel-dark[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.9);\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  border-bottom: 1px solid rgb(var(--color-outline-variant)/0.35);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .scan-line[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 28;\n  pointer-events: none;\n  width: 100%;\n  height: 2px;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgb(var(--color-surface-tint)),\n      transparent);\n  box-shadow: var(--shadow-scan-line);\n  animation: _ngcontent-%COMP%_demoScanAnim 3s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_demoScanAnim {\n  0% {\n    top: 20%;\n    opacity: 0;\n  }\n  20% {\n    opacity: 1;\n  }\n  80% {\n    opacity: 1;\n  }\n  100% {\n    top: 80%;\n    opacity: 0;\n  }\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .scanner-corner-tl[_ngcontent-%COMP%], \n.smart-enroll-demos[_ngcontent-%COMP%]   .scanner-corner-tr[_ngcontent-%COMP%], \n.smart-enroll-demos[_ngcontent-%COMP%]   .scanner-corner-bl[_ngcontent-%COMP%], \n.smart-enroll-demos[_ngcontent-%COMP%]   .scanner-corner-br[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 30;\n  pointer-events: none;\n  width: 2rem;\n  height: 2rem;\n  border-color: rgb(var(--color-surface-tint));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .scanner-corner-tl[_ngcontent-%COMP%] {\n  top: 1.5rem;\n  left: 1.5rem;\n  border-top: 2px solid;\n  border-left: 2px solid;\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .scanner-corner-tr[_ngcontent-%COMP%] {\n  top: 1.5rem;\n  right: 1.5rem;\n  border-top: 2px solid;\n  border-right: 2px solid;\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .scanner-corner-bl[_ngcontent-%COMP%] {\n  bottom: 1.5rem;\n  left: 1.5rem;\n  border-bottom: 2px solid;\n  border-left: 2px solid;\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .scanner-corner-br[_ngcontent-%COMP%] {\n  bottom: 1.5rem;\n  right: 1.5rem;\n  border-bottom: 2px solid;\n  border-right: 2px solid;\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .blueprint-grid[_ngcontent-%COMP%] {\n  background-image: radial-gradient(rgb(var(--color-primary)/0.45) 0.5px, transparent 0.5px);\n  background-size: 20px 20px;\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .bg-primary-cta[_ngcontent-%COMP%] {\n  background: var(--utility-primary-cta);\n  color: rgb(var(--utility-primary-cta-color));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .demo-btn-primary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: 100%;\n  min-height: 2.75rem;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  border-radius: 0.75rem;\n  border: 1px solid rgba(28, 25, 23, 0.08);\n  background-color: rgb(28, 25, 23);\n  padding: 0.75rem 1.25rem;\n  font-size: 0.875rem;\n  font-weight: 600;\n  letter-spacing: -0.01em;\n  color: rgb(255, 255, 255);\n  box-shadow: 0 1px 2px rgba(28, 25, 23, 0.06);\n  text-decoration: none;\n  transition:\n    background-color 150ms ease,\n    border-color 150ms ease,\n    transform 100ms ease;\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .demo-btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: rgb(41, 37, 36);\n  border-color: rgba(28, 25, 23, 0.12);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .demo-btn-primary[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: scale(0.99);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .demo-btn-primary[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n  opacity: 0.45;\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .demo-btn-primary.demo-btn-inline[_ngcontent-%COMP%] {\n  width: auto;\n  flex: 1 1 0;\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .demo-btn-secondary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: 100%;\n  min-height: 2.75rem;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  border-radius: 0.75rem;\n  border: 1px solid rgb(231, 229, 228);\n  background-color: rgb(255, 255, 255);\n  padding: 0.75rem 1.25rem;\n  font-size: 0.875rem;\n  font-weight: 600;\n  letter-spacing: -0.01em;\n  color: rgb(28, 25, 23);\n  transition:\n    background-color 150ms ease,\n    border-color 150ms ease,\n    transform 100ms ease;\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .demo-btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: rgb(250, 250, 249);\n  border-color: rgb(214, 211, 209);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .demo-btn-secondary[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: scale(0.99);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .demo-btn-secondary[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n  opacity: 0.45;\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .demo-btn-secondary.demo-btn-inline[_ngcontent-%COMP%] {\n  width: auto;\n  flex: 1 1 0;\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .shadow-primary[_ngcontent-%COMP%] {\n  box-shadow: var(--shadow-primary);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .shadow-ring-frost[_ngcontent-%COMP%] {\n  box-shadow: var(--shadow-ring-frost);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .shadow-ambient[_ngcontent-%COMP%] {\n  box-shadow: var(--shadow-ambient);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .border-frost[_ngcontent-%COMP%] {\n  border-color: var(--frost);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .scanning-ring[_ngcontent-%COMP%] {\n  box-shadow: 0 0 20px 2px rgb(var(--utility-scanning-ring-outer)/0.25), inset 0 0 20px 2px rgb(var(--utility-scanning-ring-inner)/0.15);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .bg-surface[_ngcontent-%COMP%] {\n  background-color: rgb(var(--color-surface));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .bg-surface-container[_ngcontent-%COMP%] {\n  background-color: rgb(var(--color-surface-container));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .bg-surface-container-low[_ngcontent-%COMP%] {\n  background-color: rgb(var(--color-surface-container-low));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .bg-surface-container-high[_ngcontent-%COMP%] {\n  background-color: rgb(var(--color-surface-container-high));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .bg-surface-container-lowest[_ngcontent-%COMP%] {\n  background-color: rgb(var(--color-surface-container-lowest));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .bg-error-container\\/20[_ngcontent-%COMP%] {\n  background-color: rgb(var(--color-error-container)/0.2);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .text-on-surface[_ngcontent-%COMP%] {\n  color: rgb(var(--color-on-surface));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .text-on-surface-variant[_ngcontent-%COMP%] {\n  color: rgb(var(--color-on-surface-variant));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .text-on-primary-container[_ngcontent-%COMP%] {\n  color: rgb(var(--color-on-primary-container));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .text-primary[_ngcontent-%COMP%] {\n  color: rgb(var(--color-primary));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .text-error[_ngcontent-%COMP%] {\n  color: rgb(var(--color-error));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .border-outline-variant\\/20[_ngcontent-%COMP%] {\n  border-color: rgb(var(--color-outline-variant)/0.2);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .border-outline-variant\\/30[_ngcontent-%COMP%] {\n  border-color: rgb(var(--color-outline-variant)/0.3);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .border-outline-variant\\/15[_ngcontent-%COMP%] {\n  border-color: rgb(var(--color-outline-variant)/0.15);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .border-outline-variant\\/10[_ngcontent-%COMP%] {\n  border-color: rgb(var(--color-outline-variant)/0.1);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .border-error\\/20[_ngcontent-%COMP%] {\n  border-color: rgb(var(--color-error)/0.2);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .border-error[_ngcontent-%COMP%] {\n  border-color: rgb(var(--color-error));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .placeholder-on-surface-variant\\/50[_ngcontent-%COMP%]::placeholder {\n  color: rgb(var(--color-on-surface-variant)/0.5);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .hover\\:bg-surface-container[_ngcontent-%COMP%]:hover {\n  background-color: rgb(var(--color-surface-container));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .focus\\:border-primary\\/60[_ngcontent-%COMP%]:focus {\n  border-color: rgb(var(--color-primary)/0.6);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .hover\\:border-primary\\/40[_ngcontent-%COMP%]:hover {\n  border-color: rgb(var(--color-primary)/0.4);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .ring-primary-20[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 4px rgba(38, 66, 255, 0.2);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .bg-primary-10[_ngcontent-%COMP%] {\n  background: rgba(38, 66, 255, 0.06);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .selected-liveness[_ngcontent-%COMP%] {\n  border-color: rgb(var(--color-primary)/0.4);\n  background: rgb(var(--color-primary)/0.06);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .human-id-liveness-toggle[_ngcontent-%COMP%] {\n  border-color: rgb(var(--color-outline-variant)/0.3);\n  background: rgb(var(--color-surface-container-low));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .human-id-liveness-toggle[_ngcontent-%COMP%]:hover {\n  border-color: rgb(var(--color-outline-variant)/0.5);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .human-id-liveness-toggle--on[_ngcontent-%COMP%] {\n  border-color: rgb(var(--color-primary)/0.4);\n  background: rgb(var(--color-primary)/0.06);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .human-id-liveness-toggle__icon[_ngcontent-%COMP%] {\n  background: rgb(var(--color-surface-container));\n  color: rgb(var(--color-on-surface-variant));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .human-id-liveness-toggle__icon--on[_ngcontent-%COMP%] {\n  background: rgb(var(--color-primary)/0.15);\n  color: rgb(var(--color-primary));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .human-id-liveness-toggle__stage[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  border-radius: 9999px;\n  padding: 0.125rem 0.5rem;\n  font-size: 0.625rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .human-id-liveness-toggle__stage--encrypt[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.15);\n  color: rgb(180, 83, 9);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .human-id-liveness-toggle__stage--decrypt[_ngcontent-%COMP%] {\n  background: rgb(var(--color-primary)/0.12);\n  color: rgb(var(--color-primary));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .human-id-liveness-toggle__track[_ngcontent-%COMP%] {\n  background: rgb(var(--color-surface-container-high));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .human-id-liveness-toggle__track--on[_ngcontent-%COMP%] {\n  background: rgb(var(--color-primary));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .human-id-liveness-callout[_ngcontent-%COMP%] {\n  border: 1px solid rgb(var(--color-outline-variant)/0.25);\n  background: rgb(var(--color-surface-container-low));\n  border-radius: 0.75rem;\n  padding: 0.875rem 1rem;\n  font-size: 0.8125rem;\n  line-height: 1.5;\n  color: rgb(var(--color-on-surface-variant));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .selected-tolerance[_ngcontent-%COMP%] {\n  border-color: rgb(var(--color-primary)/0.5);\n  background: rgb(var(--color-primary)/0.08);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .demo-range-input[_ngcontent-%COMP%] {\n  accent-color: rgb(var(--color-primary));\n  height: 0.5rem;\n  cursor: pointer;\n}\n.dark[_ngcontent-%COMP%]   .smart-enroll-demos[_ngcontent-%COMP%] {\n  --color-surface: 15 23 42;\n  --color-surface-container-lowest: 2 6 23;\n  --color-surface-container-low: 15 23 42;\n  --color-surface-container: 30 41 59;\n  --color-surface-container-high: 51 65 85;\n  --color-surface-container-highest: 71 85 105;\n  --color-surface-bright: 30 41 59;\n  --color-surface-dim: 2 6 23;\n  --color-surface-variant: 51 65 85;\n  --color-surface-tint: 37 99 235;\n  --color-primary: 96 165 250;\n  --color-primary-fixed: 239 246 255;\n  --color-primary-fixed-dim: 191 219 254;\n  --color-primary-container: 37 99 235;\n  --color-on-primary: 255 255 255;\n  --color-on-primary-fixed: 15 23 42;\n  --color-on-primary-fixed-variant: 30 58 138;\n  --color-on-primary-container: 248 250 252;\n  --color-inverse-primary: 59 130 246;\n  --color-secondary: 148 163 184;\n  --color-secondary-fixed: 226 232 240;\n  --color-secondary-fixed-dim: 148 163 184;\n  --color-secondary-container: 51 65 85;\n  --color-on-secondary: 248 250 252;\n  --color-on-secondary-fixed: 15 23 42;\n  --color-on-secondary-fixed-variant: 51 65 85;\n  --color-on-secondary-container: 203 213 225;\n  --color-tertiary: 45 212 191;\n  --color-tertiary-fixed: 204 251 241;\n  --color-tertiary-fixed-dim: 94 234 212;\n  --color-tertiary-container: 13 148 136;\n  --color-on-tertiary: 4 47 46;\n  --color-on-tertiary-fixed: 19 78 74;\n  --color-on-tertiary-fixed-variant: 17 94 89;\n  --color-on-tertiary-container: 248 250 252;\n  --color-background: 15 23 42;\n  --color-on-background: 248 250 252;\n  --color-on-surface: 248 250 252;\n  --color-on-surface-variant: 148 163 184;\n  --color-inverse-surface: 248 250 252;\n  --color-inverse-on-surface: 15 23 42;\n  --color-outline: 100 116 139;\n  --color-outline-variant: 51 65 85;\n  --color-error: 252 165 165;\n  --color-error-container: 127 29 29;\n  --color-on-error: 127 29 29;\n  --color-on-error-container: 254 226 226;\n  --frost: rgb(96 165 250 / 0.12);\n  --frost-variant: rgb(96 165 250 / 0.06);\n  --shadow-ambient: 0 8px 40px rgb(2 6 23 / 0.35);\n  --shadow-float: 0 16px 60px rgb(2 6 23 / 0.45);\n  --shadow-glow: 0 0 40px rgb(37 99 235 / 0.1);\n  --shadow-scan-line: 0 0 15px rgb(96 165 250 / 0.4);\n  --shadow-primary: 0 1px 2px rgb(37 99 235 / 0.12), 0 4px 14px rgb(37 99 235 / 0.16);\n  --shadow-ring-frost: 0 0 0 1px rgb(96 165 250 / 0.12);\n  --utility-primary-cta-color: 255 255 255;\n  --utility-text-gradient-from: 96 165 250;\n  --utility-text-gradient-to: 37 99 235;\n  --utility-scanning-ring-outer: 96 165 250;\n  --utility-scanning-ring-inner: 37 99 235;\n  background-color: rgb(var(--color-surface));\n  color: rgb(var(--color-on-surface));\n}\n.dark[_ngcontent-%COMP%]   .smart-enroll-demos[_ngcontent-%COMP%]   .glass-panel-dark[_ngcontent-%COMP%] {\n  background: rgb(var(--color-surface-container)/0.85);\n  border-bottom-color: rgb(var(--color-outline-variant)/0.35);\n}\n.dark[_ngcontent-%COMP%]   .smart-enroll-demos[_ngcontent-%COMP%]   .demo-btn-primary[_ngcontent-%COMP%] {\n  border-color: rgba(255, 255, 255, 0.1);\n  background-color: rgb(248, 250, 252);\n  color: rgb(15, 23, 42);\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);\n}\n.dark[_ngcontent-%COMP%]   .smart-enroll-demos[_ngcontent-%COMP%]   .demo-btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: rgb(226, 232, 240);\n  border-color: rgba(255, 255, 255, 0.15);\n}\n.dark[_ngcontent-%COMP%]   .smart-enroll-demos[_ngcontent-%COMP%]   .demo-btn-secondary[_ngcontent-%COMP%] {\n  border-color: rgb(var(--color-outline-variant));\n  background-color: rgb(var(--color-surface-container));\n  color: rgb(var(--color-on-surface));\n}\n.dark[_ngcontent-%COMP%]   .smart-enroll-demos[_ngcontent-%COMP%]   .demo-btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: rgb(var(--color-surface-container-high));\n  border-color: rgb(var(--color-outline));\n}\n.dark[_ngcontent-%COMP%]   .smart-enroll-demos[_ngcontent-%COMP%]   .human-id-liveness-toggle__stage--encrypt[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.12);\n  color: rgb(251, 191, 36);\n}\n.dark[_ngcontent-%COMP%]   .smart-enroll-demos[_ngcontent-%COMP%]   input[type=date][_ngcontent-%COMP%] {\n  color-scheme: dark;\n}\n.dark[_ngcontent-%COMP%]   .smart-enroll-demos[_ngcontent-%COMP%]   input[type=date][_ngcontent-%COMP%]::-webkit-calendar-picker-indicator {\n  cursor: pointer;\n  opacity: 0.85;\n  filter: invert(1);\n}\n.smart-enroll-demos-hub[_ngcontent-%COMP%]   .demo-card[_ngcontent-%COMP%], \n.human-authn-demos-hub[_ngcontent-%COMP%]   .demo-card[_ngcontent-%COMP%] {\n  transition: all 0.3s;\n}\n.smart-enroll-demos-hub[_ngcontent-%COMP%]   .demo-card[_ngcontent-%COMP%]:hover, \n.human-authn-demos-hub[_ngcontent-%COMP%]   .demo-card[_ngcontent-%COMP%]:hover {\n  border-color: rgba(96, 165, 250, 0.35);\n  background: rgba(255, 255, 255, 0.02);\n  box-shadow: 0 0 0 1px rgba(96, 165, 250, 0.12);\n}\n.dark[_ngcontent-%COMP%]   .smart-enroll-demos-hub[_ngcontent-%COMP%]   .demo-card[_ngcontent-%COMP%]:hover, \n.dark[_ngcontent-%COMP%]   .human-authn-demos-hub[_ngcontent-%COMP%]   .demo-card[_ngcontent-%COMP%]:hover {\n  border-color: rgba(96, 165, 250, 0.35);\n  background: rgba(30, 41, 59, 0.5);\n  box-shadow: 0 0 0 1px rgba(96, 165, 250, 0.12);\n}\n/*# sourceMappingURL=_demos-theme.css.map */'], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FaceComparisonDemoComponent, [{
    type: Component,
    args: [{ selector: "app-face-comparison-demo", standalone: true, imports: [
      CommonModule,
      FormsModule,
      TranslocoModule,
      DemoPageShellComponent,
      DemoChooseOneCalloutComponent,
      DemoCaptureOptionHeadingComponent,
      DemoOrDividerComponent,
      DemoScannerShellComponent,
      DemoUploadImageButtonComponent,
      DemoRasterImageComponent,
      FaceGuidedCameraComponent,
      DemoResultActionsComponent
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `<app-demo-page-shell>\r
    @if (!authChecked) {\r
        <div class="h-60 rounded-xl bg-surface-container-high animate-pulse"></div>\r
    } @else {\r
        <div class="flex items-center justify-center mb-10 pt-4 gap-2">\r
            @for (label of stepLabels; track label; let i = $index) {\r
                <div class="flex items-center">\r
                    <div class="flex flex-col items-center">\r
                        <div\r
                            class="h-10 w-10 rounded-full flex items-center justify-center font-bold transition-all"\r
                            [ngClass]="{\r
                                'bg-primary text-on-primary': step > i + 1,\r
                                'bg-primary-container ring-4 ring-primary-container/20': step === i + 1,\r
                                'bg-surface-container-high border border-outline-variant text-on-surface-variant/50': step < i + 1\r
                            }"\r
                        >\r
                            @if (step > i + 1) {\r
                                <span class="material-symbols-outlined text-sm">check</span>\r
                            } @else {\r
                                {{ i + 1 }}\r
                            }\r
                        </div>\r
                        <span class="text-[0.6875rem] font-bold uppercase tracking-wider mt-2" [ngClass]="step === i + 1 ? 'text-primary' : 'text-on-surface-variant/50'">\r
                            {{ label | transloco }}\r
                        </span>\r
                    </div>\r
                    @if (i < 2) {\r
                        <div class="w-12 h-0.5 mx-2 mb-5" [ngClass]="step > i + 1 ? 'bg-primary' : 'bg-outline-variant/30'"></div>\r
                    }\r
                </div>\r
            }\r
        </div>\r
\r
        <div class="text-center mb-8">\r
            <h2 class="text-4xl font-black tracking-tight text-on-surface mb-2">\r
                @if (step === 1) {\r
                    {{ 'smartEnrollDemos.faceComparison.headlineSource' | transloco }}\r
                } @else if (step === 2) {\r
                    {{ 'smartEnrollDemos.faceComparison.headlineTarget' | transloco }}\r
                } @else {\r
                    {{ 'smartEnrollDemos.faceComparison.headlineAnalysis' | transloco }}\r
                }\r
            </h2>\r
            <p class="text-on-surface-variant text-sm max-w-xl mx-auto">\r
                @if (step === 1) {\r
                    {{ 'smartEnrollDemos.faceComparison.subIdleSource' | transloco }}\r
                } @else if (step === 2) {\r
                    {{ 'smartEnrollDemos.faceComparison.subIdleTarget' | transloco }}\r
                } @else if (isLoading) {\r
                    {{ 'smartEnrollDemos.faceComparison.subLoading' | transloco }}\r
                } @else if (result) {\r
                    {{ 'smartEnrollDemos.faceComparison.subResult' | transloco }}\r
                } @else {\r
                    {{ 'smartEnrollDemos.faceComparison.subProcessing' | transloco }}\r
                }\r
            </p>\r
        </div>\r
\r
        @if (step === 1 || step === 2) {\r
            <div class="max-w-2xl mx-auto space-y-5">\r
                @if (source.preview || target.preview) {\r
                    <div class="flex gap-4 justify-center">\r
                        @for (slot of [{ data: source, key: 'source', label: 'smartEnrollDemos.faceComparison.slotSource' }, { data: target, key: 'target', label: 'smartEnrollDemos.faceComparison.slotTarget' }]; track slot.key) {\r
                            <div class="flex flex-col items-center gap-2">\r
                                <div class="relative w-16 h-16 rounded-full overflow-hidden border transition-all" [ngClass]="highlightSlot === slot.key ? 'ring-4 ring-emerald-400/35' : 'border-outline-variant/30'">\r
                                    @if (slot.data.preview) {\r
                                        <app-demo-raster-image [src]="slot.data.preview" alt="" className="w-full h-full object-cover" />\r
                                    } @else {\r
                                        <div class="w-full h-full flex items-center justify-center bg-surface-container-high">\r
                                            <span class="material-symbols-outlined text-on-surface-variant/55">face</span>\r
                                        </div>\r
                                    }\r
                                </div>\r
                                <span class="text-[10px] uppercase tracking-wide text-on-surface-variant">{{ slot.label | transloco }}</span>\r
                            </div>\r
                        }\r
                    </div>\r
                }\r
\r
                @if (step === 1) {\r
                    <div>\r
                        <label class="block text-[0.6875rem] font-bold uppercase tracking-wider text-on-surface-variant mb-2" for="compare-min-score">\r
                            {{ 'smartEnrollDemos.faceComparison.compareMinScoreLabel' | transloco }}\r
                        </label>\r
                        <div class="flex items-center gap-4 mb-4">\r
                            <input\r
                                id="compare-min-score"\r
                                type="range"\r
                                min="0.67"\r
                                max="0.95"\r
                                step="0.01"\r
                                [(ngModel)]="compareMinScore"\r
                                name="compareMinScore"\r
                                class="demo-range-input flex-1"\r
                            />\r
                            <span class="text-sm font-mono text-primary w-14 shrink-0 tabular-nums">{{ compareMinScore.toFixed(2) }}</span>\r
                        </div>\r
                    </div>\r
                }\r
\r
                <app-demo-choose-one-callout [description]="'smartEnrollDemos.faceComparison.chooseOneDescription' | transloco" />\r
                <app-demo-capture-option-heading label="A" [title]="'smartEnrollDemos.faceComparison.cameraTitle' | transloco" [subtitle]="'smartEnrollDemos.faceComparison.cameraSubtitle' | transloco" />\r
                <app-demo-scanner-shell>\r
                    <div class="flex min-h-0 flex-1 flex-col">\r
                        @for (_ of [step]; track step) {\r
                            <app-face-guided-camera\r
                                [fillFrame]="true"\r
                                [hideIdleExplainer]="true"\r
                                [captureSuccessFeedbackMs]="750"\r
                                (captured)="onCapture($event)"\r
                            />\r
                        }\r
                    </div>\r
                </app-demo-scanner-shell>\r
                <app-demo-or-divider />\r
                <app-demo-capture-option-heading label="B" [title]="'smartEnrollDemos.faceComparison.uploadTitle' | transloco" [subtitle]="'smartEnrollDemos.faceComparison.uploadSubtitle' | transloco" />\r
                <app-demo-upload-image-button (clicked)="triggerUpload(currentSlot)" [primaryText]="'smartEnrollDemos.faceComparison.uploadPrimary' | transloco" [secondaryText]="'smartEnrollDemos.common.jpegPngGallery' | transloco" />\r
                <input #sourceFileInput type="file" accept="image/*" class="hidden" (change)="onFileSelected($event, 'source')" />\r
                <input #targetFileInput type="file" accept="image/*" class="hidden" (change)="onFileSelected($event, 'target')" />\r
            </div>\r
        }\r
\r
        @if (step === 3) {\r
            <div class="max-w-lg mx-auto">\r
                @if (isLoading) {\r
                    <div class="text-center py-12">\r
                        <div class="w-16 h-16 rounded-full border-2 border-primary/40 border-t-primary animate-spin mx-auto mb-4"></div>\r
                        <p class="text-on-surface-variant">{{ 'smartEnrollDemos.faceComparison.analyzing' | transloco }}</p>\r
                    </div>\r
                } @else if (result) {\r
                    <div class="rounded-2xl p-8 text-center border" [ngClass]="result.match ? 'bg-surface-container-low border-primary/20' : 'bg-error-container/10 border-error/20'">\r
                        <h2 class="text-3xl font-black tracking-tight mb-2">\r
                            {{ (result.match ? 'smartEnrollDemos.faceComparison.matchConfirmed' : 'smartEnrollDemos.faceComparison.noMatch') | transloco }}\r
                        </h2>\r
                        <p class="text-on-surface-variant mb-8">{{ resultMessage() }}</p>\r
                        <div class="grid grid-cols-2 gap-4 mb-8">\r
                            <div class="bg-surface-container rounded-lg p-4">\r
                                <p class="text-2xl font-black text-primary">{{ (result.score * 100).toFixed(1) }}%</p>\r
                                <p class="text-[10px] mt-1 text-on-surface-variant uppercase">{{ 'smartEnrollDemos.faceComparison.similarityMin' | transloco: { score: compareMinScore.toFixed(2) } }}</p>\r
                            </div>\r
                            <div class="bg-surface-container rounded-lg p-4">\r
                                <p class="text-2xl font-black text-on-surface">{{ (result.match ? 'smartEnrollDemos.faceComparison.verdictMatch' : 'smartEnrollDemos.faceComparison.verdictDiff') | transloco }}</p>\r
                                <p class="text-[10px] mt-1 text-on-surface-variant uppercase">{{ 'smartEnrollDemos.faceComparison.verdict' | transloco }}</p>\r
                            </div>\r
                        </div>\r
                        <app-demo-result-actions\r
                            [secondaryLabel]="'smartEnrollDemos.faceComparison.tryAgain' | transloco"\r
                            [primaryLabel]="'smartEnrollDemos.common.backToDemos' | transloco"\r
                            (secondary)="reset()"\r
                        />\r
                    </div>\r
                } @else if (error) {\r
                    <div class="rounded-2xl border border-error/20 bg-error-container/10 p-8 text-center">\r
                        <div class="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-error/25 bg-error-container/30 text-error">\r
                            <span class="material-symbols-outlined text-3xl">error</span>\r
                        </div>\r
                        <h2 class="text-2xl font-black tracking-tight mb-2">\r
                            {{ 'smartEnrollDemos.faceComparison.errorResultTitle' | transloco }}\r
                        </h2>\r
                        <p class="text-on-surface-variant mb-8">{{ error }}</p>\r
                        <app-demo-result-actions\r
                            [secondaryLabel]="'smartEnrollDemos.faceComparison.tryAgain' | transloco"\r
                            [primaryLabel]="'smartEnrollDemos.common.backToDemos' | transloco"\r
                            (secondary)="reset()"\r
                        />\r
                    </div>\r
                }\r
            </div>\r
        }\r
    }\r
</app-demo-page-shell>\r
`, styles: ['@charset "UTF-8";\n\n/* src/app/modules/smart-enroll/demos/styles/_demos-theme.scss */\n.smart-enroll-demos {\n  --color-surface: 250 250 249;\n  --color-surface-container-lowest: 255 255 255;\n  --color-surface-container-low: 255 255 255;\n  --color-surface-container: 245 245 244;\n  --color-surface-container-high: 231 229 228;\n  --color-surface-container-highest: 214 211 209;\n  --color-surface-bright: 255 255 255;\n  --color-surface-dim: 250 250 249;\n  --color-surface-variant: 231 229 228;\n  --color-surface-tint: 38 66 255;\n  --color-primary: 38 66 255;\n  --color-primary-fixed: 239 246 255;\n  --color-primary-fixed-dim: 219 234 254;\n  --color-primary-container: 219 234 254;\n  --color-on-primary: 255 255 255;\n  --color-on-primary-fixed: 28 25 23;\n  --color-on-primary-fixed-variant: 30 58 138;\n  --color-on-primary-container: 28 25 23;\n  --color-inverse-primary: 59 130 246;\n  --color-secondary: 87 83 78;\n  --color-secondary-fixed: 245 245 244;\n  --color-secondary-fixed-dim: 231 229 228;\n  --color-secondary-container: 231 229 228;\n  --color-on-secondary: 28 25 23;\n  --color-on-secondary-fixed: 28 25 23;\n  --color-on-secondary-fixed-variant: 68 64 60;\n  --color-on-secondary-container: 68 64 60;\n  --color-tertiary: 13 148 136;\n  --color-tertiary-fixed: 204 251 241;\n  --color-tertiary-fixed-dim: 153 246 228;\n  --color-tertiary-container: 204 251 241;\n  --color-on-tertiary: 255 255 255;\n  --color-on-tertiary-fixed: 19 78 74;\n  --color-on-tertiary-fixed-variant: 17 94 89;\n  --color-on-tertiary-container: 19 78 74;\n  --color-background: 250 250 249;\n  --color-on-background: 28 25 23;\n  --color-on-surface: 28 25 23;\n  --color-on-surface-variant: 87 83 78;\n  --color-inverse-surface: 28 25 23;\n  --color-inverse-on-surface: 250 250 249;\n  --color-outline: 168 162 158;\n  --color-outline-variant: 214 211 209;\n  --color-error: 185 28 28;\n  --color-error-container: 254 226 226;\n  --color-on-error: 255 255 255;\n  --color-on-error-container: 127 29 29;\n  --frost: rgb(38 66 255 / 0.12);\n  --frost-variant: rgb(38 66 255 / 0.06);\n  --shadow-ambient: 0 8px 40px rgb(28 25 23 / 0.08);\n  --shadow-float: 0 16px 60px rgb(28 25 23 / 0.12);\n  --shadow-glow: 0 0 40px rgb(38 66 255 / 0.08);\n  --shadow-scan-line: 0 0 15px rgb(38 66 255 / 0.35);\n  --shadow-primary: 0 1px 2px rgb(38 66 255 / 0.12), 0 4px 14px rgb(38 66 255 / 0.16);\n  --shadow-ring-frost: 0 0 0 1px rgb(38 66 255 / 0.12);\n  --bg-primary-gradient:\n    linear-gradient(\n      135deg,\n      #2642ff 0%,\n      #1a2f99 100%);\n  --utility-primary-cta:\n    linear-gradient(\n      135deg,\n      #2642ff 0%,\n      #1a2f99 100%);\n  --utility-primary-cta-color: 255 255 255;\n  --utility-text-gradient-from: 38 66 255;\n  --utility-text-gradient-to: 26 47 153;\n  --utility-scanning-ring-outer: 38 66 255;\n  --utility-scanning-ring-inner: 26 47 153;\n  background-color: rgb(var(--color-surface));\n  color: rgb(var(--color-on-surface));\n  min-height: 100%;\n  width: 100%;\n}\n.smart-enroll-demos .material-symbols-outlined {\n  font-family: "Material Symbols Outlined", sans-serif;\n  font-weight: normal;\n  font-style: normal;\n  line-height: 1;\n  letter-spacing: normal;\n  text-transform: none;\n  display: inline-block;\n  white-space: nowrap;\n  word-wrap: normal;\n  direction: ltr;\n  font-variation-settings:\n    "FILL" 0,\n    "wght" 400,\n    "GRAD" 0,\n    "opsz" 24;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.smart-enroll-demos .glass-panel-dark {\n  background: rgba(255, 255, 255, 0.9);\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  border-bottom: 1px solid rgb(var(--color-outline-variant)/0.35);\n}\n.smart-enroll-demos .scan-line {\n  position: absolute;\n  z-index: 28;\n  pointer-events: none;\n  width: 100%;\n  height: 2px;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgb(var(--color-surface-tint)),\n      transparent);\n  box-shadow: var(--shadow-scan-line);\n  animation: demoScanAnim 3s linear infinite;\n}\n@keyframes demoScanAnim {\n  0% {\n    top: 20%;\n    opacity: 0;\n  }\n  20% {\n    opacity: 1;\n  }\n  80% {\n    opacity: 1;\n  }\n  100% {\n    top: 80%;\n    opacity: 0;\n  }\n}\n.smart-enroll-demos .scanner-corner-tl,\n.smart-enroll-demos .scanner-corner-tr,\n.smart-enroll-demos .scanner-corner-bl,\n.smart-enroll-demos .scanner-corner-br {\n  position: absolute;\n  z-index: 30;\n  pointer-events: none;\n  width: 2rem;\n  height: 2rem;\n  border-color: rgb(var(--color-surface-tint));\n}\n.smart-enroll-demos .scanner-corner-tl {\n  top: 1.5rem;\n  left: 1.5rem;\n  border-top: 2px solid;\n  border-left: 2px solid;\n}\n.smart-enroll-demos .scanner-corner-tr {\n  top: 1.5rem;\n  right: 1.5rem;\n  border-top: 2px solid;\n  border-right: 2px solid;\n}\n.smart-enroll-demos .scanner-corner-bl {\n  bottom: 1.5rem;\n  left: 1.5rem;\n  border-bottom: 2px solid;\n  border-left: 2px solid;\n}\n.smart-enroll-demos .scanner-corner-br {\n  bottom: 1.5rem;\n  right: 1.5rem;\n  border-bottom: 2px solid;\n  border-right: 2px solid;\n}\n.smart-enroll-demos .blueprint-grid {\n  background-image: radial-gradient(rgb(var(--color-primary)/0.45) 0.5px, transparent 0.5px);\n  background-size: 20px 20px;\n}\n.smart-enroll-demos .bg-primary-cta {\n  background: var(--utility-primary-cta);\n  color: rgb(var(--utility-primary-cta-color));\n}\n.smart-enroll-demos .demo-btn-primary {\n  display: inline-flex;\n  width: 100%;\n  min-height: 2.75rem;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  border-radius: 0.75rem;\n  border: 1px solid rgba(28, 25, 23, 0.08);\n  background-color: rgb(28, 25, 23);\n  padding: 0.75rem 1.25rem;\n  font-size: 0.875rem;\n  font-weight: 600;\n  letter-spacing: -0.01em;\n  color: rgb(255, 255, 255);\n  box-shadow: 0 1px 2px rgba(28, 25, 23, 0.06);\n  text-decoration: none;\n  transition:\n    background-color 150ms ease,\n    border-color 150ms ease,\n    transform 100ms ease;\n}\n.smart-enroll-demos .demo-btn-primary:hover:not(:disabled) {\n  background-color: rgb(41, 37, 36);\n  border-color: rgba(28, 25, 23, 0.12);\n}\n.smart-enroll-demos .demo-btn-primary:active:not(:disabled) {\n  transform: scale(0.99);\n}\n.smart-enroll-demos .demo-btn-primary:disabled {\n  cursor: not-allowed;\n  opacity: 0.45;\n}\n.smart-enroll-demos .demo-btn-primary.demo-btn-inline {\n  width: auto;\n  flex: 1 1 0;\n}\n.smart-enroll-demos .demo-btn-secondary {\n  display: inline-flex;\n  width: 100%;\n  min-height: 2.75rem;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  border-radius: 0.75rem;\n  border: 1px solid rgb(231, 229, 228);\n  background-color: rgb(255, 255, 255);\n  padding: 0.75rem 1.25rem;\n  font-size: 0.875rem;\n  font-weight: 600;\n  letter-spacing: -0.01em;\n  color: rgb(28, 25, 23);\n  transition:\n    background-color 150ms ease,\n    border-color 150ms ease,\n    transform 100ms ease;\n}\n.smart-enroll-demos .demo-btn-secondary:hover:not(:disabled) {\n  background-color: rgb(250, 250, 249);\n  border-color: rgb(214, 211, 209);\n}\n.smart-enroll-demos .demo-btn-secondary:active:not(:disabled) {\n  transform: scale(0.99);\n}\n.smart-enroll-demos .demo-btn-secondary:disabled {\n  cursor: not-allowed;\n  opacity: 0.45;\n}\n.smart-enroll-demos .demo-btn-secondary.demo-btn-inline {\n  width: auto;\n  flex: 1 1 0;\n}\n.smart-enroll-demos .shadow-primary {\n  box-shadow: var(--shadow-primary);\n}\n.smart-enroll-demos .shadow-ring-frost {\n  box-shadow: var(--shadow-ring-frost);\n}\n.smart-enroll-demos .shadow-ambient {\n  box-shadow: var(--shadow-ambient);\n}\n.smart-enroll-demos .border-frost {\n  border-color: var(--frost);\n}\n.smart-enroll-demos .scanning-ring {\n  box-shadow: 0 0 20px 2px rgb(var(--utility-scanning-ring-outer)/0.25), inset 0 0 20px 2px rgb(var(--utility-scanning-ring-inner)/0.15);\n}\n.smart-enroll-demos .bg-surface {\n  background-color: rgb(var(--color-surface));\n}\n.smart-enroll-demos .bg-surface-container {\n  background-color: rgb(var(--color-surface-container));\n}\n.smart-enroll-demos .bg-surface-container-low {\n  background-color: rgb(var(--color-surface-container-low));\n}\n.smart-enroll-demos .bg-surface-container-high {\n  background-color: rgb(var(--color-surface-container-high));\n}\n.smart-enroll-demos .bg-surface-container-lowest {\n  background-color: rgb(var(--color-surface-container-lowest));\n}\n.smart-enroll-demos .bg-error-container\\/20 {\n  background-color: rgb(var(--color-error-container)/0.2);\n}\n.smart-enroll-demos .text-on-surface {\n  color: rgb(var(--color-on-surface));\n}\n.smart-enroll-demos .text-on-surface-variant {\n  color: rgb(var(--color-on-surface-variant));\n}\n.smart-enroll-demos .text-on-primary-container {\n  color: rgb(var(--color-on-primary-container));\n}\n.smart-enroll-demos .text-primary {\n  color: rgb(var(--color-primary));\n}\n.smart-enroll-demos .text-error {\n  color: rgb(var(--color-error));\n}\n.smart-enroll-demos .border-outline-variant\\/20 {\n  border-color: rgb(var(--color-outline-variant)/0.2);\n}\n.smart-enroll-demos .border-outline-variant\\/30 {\n  border-color: rgb(var(--color-outline-variant)/0.3);\n}\n.smart-enroll-demos .border-outline-variant\\/15 {\n  border-color: rgb(var(--color-outline-variant)/0.15);\n}\n.smart-enroll-demos .border-outline-variant\\/10 {\n  border-color: rgb(var(--color-outline-variant)/0.1);\n}\n.smart-enroll-demos .border-error\\/20 {\n  border-color: rgb(var(--color-error)/0.2);\n}\n.smart-enroll-demos .border-error {\n  border-color: rgb(var(--color-error));\n}\n.smart-enroll-demos .placeholder-on-surface-variant\\/50::placeholder {\n  color: rgb(var(--color-on-surface-variant)/0.5);\n}\n.smart-enroll-demos .hover\\:bg-surface-container:hover {\n  background-color: rgb(var(--color-surface-container));\n}\n.smart-enroll-demos .focus\\:border-primary\\/60:focus {\n  border-color: rgb(var(--color-primary)/0.6);\n}\n.smart-enroll-demos .hover\\:border-primary\\/40:hover {\n  border-color: rgb(var(--color-primary)/0.4);\n}\n.smart-enroll-demos .ring-primary-20 {\n  box-shadow: 0 0 0 4px rgba(38, 66, 255, 0.2);\n}\n.smart-enroll-demos .bg-primary-10 {\n  background: rgba(38, 66, 255, 0.06);\n}\n.smart-enroll-demos .selected-liveness {\n  border-color: rgb(var(--color-primary)/0.4);\n  background: rgb(var(--color-primary)/0.06);\n}\n.smart-enroll-demos .human-id-liveness-toggle {\n  border-color: rgb(var(--color-outline-variant)/0.3);\n  background: rgb(var(--color-surface-container-low));\n}\n.smart-enroll-demos .human-id-liveness-toggle:hover {\n  border-color: rgb(var(--color-outline-variant)/0.5);\n}\n.smart-enroll-demos .human-id-liveness-toggle--on {\n  border-color: rgb(var(--color-primary)/0.4);\n  background: rgb(var(--color-primary)/0.06);\n}\n.smart-enroll-demos .human-id-liveness-toggle__icon {\n  background: rgb(var(--color-surface-container));\n  color: rgb(var(--color-on-surface-variant));\n}\n.smart-enroll-demos .human-id-liveness-toggle__icon--on {\n  background: rgb(var(--color-primary)/0.15);\n  color: rgb(var(--color-primary));\n}\n.smart-enroll-demos .human-id-liveness-toggle__stage {\n  display: inline-flex;\n  align-items: center;\n  border-radius: 9999px;\n  padding: 0.125rem 0.5rem;\n  font-size: 0.625rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n.smart-enroll-demos .human-id-liveness-toggle__stage--encrypt {\n  background: rgba(245, 158, 11, 0.15);\n  color: rgb(180, 83, 9);\n}\n.smart-enroll-demos .human-id-liveness-toggle__stage--decrypt {\n  background: rgb(var(--color-primary)/0.12);\n  color: rgb(var(--color-primary));\n}\n.smart-enroll-demos .human-id-liveness-toggle__track {\n  background: rgb(var(--color-surface-container-high));\n}\n.smart-enroll-demos .human-id-liveness-toggle__track--on {\n  background: rgb(var(--color-primary));\n}\n.smart-enroll-demos .human-id-liveness-callout {\n  border: 1px solid rgb(var(--color-outline-variant)/0.25);\n  background: rgb(var(--color-surface-container-low));\n  border-radius: 0.75rem;\n  padding: 0.875rem 1rem;\n  font-size: 0.8125rem;\n  line-height: 1.5;\n  color: rgb(var(--color-on-surface-variant));\n}\n.smart-enroll-demos .selected-tolerance {\n  border-color: rgb(var(--color-primary)/0.5);\n  background: rgb(var(--color-primary)/0.08);\n}\n.smart-enroll-demos .demo-range-input {\n  accent-color: rgb(var(--color-primary));\n  height: 0.5rem;\n  cursor: pointer;\n}\n.dark .smart-enroll-demos {\n  --color-surface: 15 23 42;\n  --color-surface-container-lowest: 2 6 23;\n  --color-surface-container-low: 15 23 42;\n  --color-surface-container: 30 41 59;\n  --color-surface-container-high: 51 65 85;\n  --color-surface-container-highest: 71 85 105;\n  --color-surface-bright: 30 41 59;\n  --color-surface-dim: 2 6 23;\n  --color-surface-variant: 51 65 85;\n  --color-surface-tint: 37 99 235;\n  --color-primary: 96 165 250;\n  --color-primary-fixed: 239 246 255;\n  --color-primary-fixed-dim: 191 219 254;\n  --color-primary-container: 37 99 235;\n  --color-on-primary: 255 255 255;\n  --color-on-primary-fixed: 15 23 42;\n  --color-on-primary-fixed-variant: 30 58 138;\n  --color-on-primary-container: 248 250 252;\n  --color-inverse-primary: 59 130 246;\n  --color-secondary: 148 163 184;\n  --color-secondary-fixed: 226 232 240;\n  --color-secondary-fixed-dim: 148 163 184;\n  --color-secondary-container: 51 65 85;\n  --color-on-secondary: 248 250 252;\n  --color-on-secondary-fixed: 15 23 42;\n  --color-on-secondary-fixed-variant: 51 65 85;\n  --color-on-secondary-container: 203 213 225;\n  --color-tertiary: 45 212 191;\n  --color-tertiary-fixed: 204 251 241;\n  --color-tertiary-fixed-dim: 94 234 212;\n  --color-tertiary-container: 13 148 136;\n  --color-on-tertiary: 4 47 46;\n  --color-on-tertiary-fixed: 19 78 74;\n  --color-on-tertiary-fixed-variant: 17 94 89;\n  --color-on-tertiary-container: 248 250 252;\n  --color-background: 15 23 42;\n  --color-on-background: 248 250 252;\n  --color-on-surface: 248 250 252;\n  --color-on-surface-variant: 148 163 184;\n  --color-inverse-surface: 248 250 252;\n  --color-inverse-on-surface: 15 23 42;\n  --color-outline: 100 116 139;\n  --color-outline-variant: 51 65 85;\n  --color-error: 252 165 165;\n  --color-error-container: 127 29 29;\n  --color-on-error: 127 29 29;\n  --color-on-error-container: 254 226 226;\n  --frost: rgb(96 165 250 / 0.12);\n  --frost-variant: rgb(96 165 250 / 0.06);\n  --shadow-ambient: 0 8px 40px rgb(2 6 23 / 0.35);\n  --shadow-float: 0 16px 60px rgb(2 6 23 / 0.45);\n  --shadow-glow: 0 0 40px rgb(37 99 235 / 0.1);\n  --shadow-scan-line: 0 0 15px rgb(96 165 250 / 0.4);\n  --shadow-primary: 0 1px 2px rgb(37 99 235 / 0.12), 0 4px 14px rgb(37 99 235 / 0.16);\n  --shadow-ring-frost: 0 0 0 1px rgb(96 165 250 / 0.12);\n  --utility-primary-cta-color: 255 255 255;\n  --utility-text-gradient-from: 96 165 250;\n  --utility-text-gradient-to: 37 99 235;\n  --utility-scanning-ring-outer: 96 165 250;\n  --utility-scanning-ring-inner: 37 99 235;\n  background-color: rgb(var(--color-surface));\n  color: rgb(var(--color-on-surface));\n}\n.dark .smart-enroll-demos .glass-panel-dark {\n  background: rgb(var(--color-surface-container)/0.85);\n  border-bottom-color: rgb(var(--color-outline-variant)/0.35);\n}\n.dark .smart-enroll-demos .demo-btn-primary {\n  border-color: rgba(255, 255, 255, 0.1);\n  background-color: rgb(248, 250, 252);\n  color: rgb(15, 23, 42);\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);\n}\n.dark .smart-enroll-demos .demo-btn-primary:hover:not(:disabled) {\n  background-color: rgb(226, 232, 240);\n  border-color: rgba(255, 255, 255, 0.15);\n}\n.dark .smart-enroll-demos .demo-btn-secondary {\n  border-color: rgb(var(--color-outline-variant));\n  background-color: rgb(var(--color-surface-container));\n  color: rgb(var(--color-on-surface));\n}\n.dark .smart-enroll-demos .demo-btn-secondary:hover:not(:disabled) {\n  background-color: rgb(var(--color-surface-container-high));\n  border-color: rgb(var(--color-outline));\n}\n.dark .smart-enroll-demos .human-id-liveness-toggle__stage--encrypt {\n  background: rgba(245, 158, 11, 0.12);\n  color: rgb(251, 191, 36);\n}\n.dark .smart-enroll-demos input[type=date] {\n  color-scheme: dark;\n}\n.dark .smart-enroll-demos input[type=date]::-webkit-calendar-picker-indicator {\n  cursor: pointer;\n  opacity: 0.85;\n  filter: invert(1);\n}\n.smart-enroll-demos-hub .demo-card,\n.human-authn-demos-hub .demo-card {\n  transition: all 0.3s;\n}\n.smart-enroll-demos-hub .demo-card:hover,\n.human-authn-demos-hub .demo-card:hover {\n  border-color: rgba(96, 165, 250, 0.35);\n  background: rgba(255, 255, 255, 0.02);\n  box-shadow: 0 0 0 1px rgba(96, 165, 250, 0.12);\n}\n.dark .smart-enroll-demos-hub .demo-card:hover,\n.dark .human-authn-demos-hub .demo-card:hover {\n  border-color: rgba(96, 165, 250, 0.35);\n  background: rgba(30, 41, 59, 0.5);\n  box-shadow: 0 0 0 1px rgba(96, 165, 250, 0.12);\n}\n/*# sourceMappingURL=_demos-theme.css.map */\n'] }]
  }], null, { sourceFileInput: [{
    type: ViewChild,
    args: ["sourceFileInput"]
  }], targetFileInput: [{
    type: ViewChild,
    args: ["targetFileInput"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FaceComparisonDemoComponent, { className: "FaceComparisonDemoComponent", filePath: "src/app/modules/smart-enroll/demos/pages/face-comparison/face-comparison-demo.component.ts", lineNumber: 56 });
})();
export {
  FaceComparisonDemoComponent
};
//# sourceMappingURL=chunk-4QJNTM2A.js.map
