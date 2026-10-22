import {
  DemoResultActionsComponent
} from "./chunk-VY7PIZXV.js";
import {
  DemoSandboxResultBannerComponent
} from "./chunk-LIAMR5ZQ.js";
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
  DemoRelatedDocsSectionComponent
} from "./chunk-PBSKPAJ2.js";
import {
  BiometricsDemoApiService,
  DEFAULT_LIVENESS_STANDALONE_MIN_SCORE,
  DemoPageShellComponent,
  DemoStageCardComponent,
  DemoStageHeroComponent,
  applySandboxFaceFailMarker,
  fileToBase64,
  getDemoOs,
  imageUrlToRawBase64,
  parseLivenessResult,
  translateLivenessApiError
} from "./chunk-6YAJI7WI.js";
import "./chunk-QGSXQIBB.js";
import {
  isInsufficientCreditsError
} from "./chunk-B4YUVLJ7.js";
import {
  AccountEnvironmentService
} from "./chunk-LH7NVJQC.js";
import "./chunk-BLPRNM4C.js";
import "./chunk-N6A4QSA6.js";
import "./chunk-L5NPACLK.js";
import "./chunk-2W6CKTFA.js";
import "./chunk-BYA46NNG.js";
import "./chunk-EVWXSBKG.js";
import "./chunk-HVUVGZ2L.js";
import "./chunk-OIBNGD5S.js";
import "./chunk-5HABGTLH.js";
import "./chunk-PJFCLQ64.js";
import "./chunk-PDWCMJ4H.js";
import "./chunk-GX5GK4J6.js";
import {
  TranslocoModule,
  TranslocoPipe,
  TranslocoService
} from "./chunk-FWBWCXY5.js";
import {
  RouterLink
} from "./chunk-QL64NPDU.js";
import "./chunk-3V5B4ZWC.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  NgClass,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction3,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-YWP2Y7QK.js";
import "./chunk-F5M2C4EZ.js";

// src/app/modules/smart-enroll/demos/pages/liveness/liveness-demo.component.ts
var _c0 = () => ["smartEnrollDemos.liveness.stepCapture", "smartEnrollDemos.liveness.stepResult"];
var _c1 = (a0, a1, a2) => ({ "bg-primary text-on-primary": a0, "bg-primary-container ring-4 ring-primary-20": a1, "bg-surface-container-high border border-outline-variant text-on-surface-variant opacity-50": a2 });
var _forTrack0 = ($index, $item) => $item.src;
function LivenessDemoComponent_For_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1, "check");
    \u0275\u0275elementEnd();
  }
}
function LivenessDemoComponent_For_3_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const \u0275$index_5_r1 = \u0275\u0275nextContext().$index;
    \u0275\u0275textInterpolate1(" ", \u0275$index_5_r1 + 1, " ");
  }
}
function LivenessDemoComponent_For_3_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 13);
  }
  if (rf & 2) {
    const \u0275$index_5_r1 = \u0275\u0275nextContext().$index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r1.numericStep > \u0275$index_5_r1 + 1 ? "bg-primary" : "bg-outline-variant opacity-30");
  }
}
function LivenessDemoComponent_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 9)(2, "div", 10);
    \u0275\u0275template(3, LivenessDemoComponent_For_3_Conditional_3_Template, 2, 0, "span", 11)(4, LivenessDemoComponent_For_3_Conditional_4_Template, 1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 12);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, LivenessDemoComponent_For_3_Conditional_8_Template, 1, 1, "div", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const label_r3 = ctx.$implicit;
    const \u0275$index_5_r1 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(7, _c1, ctx_r1.numericStep > \u0275$index_5_r1 + 1, ctx_r1.numericStep === \u0275$index_5_r1 + 1, ctx_r1.numericStep < \u0275$index_5_r1 + 1));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.numericStep > \u0275$index_5_r1 + 1 ? 3 : 4);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r1.numericStep === \u0275$index_5_r1 + 1 ? "text-primary" : "text-on-surface-variant opacity-50");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 5, label_r3), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(\u0275$index_5_r1 < 1 ? 8 : -1);
  }
}
function LivenessDemoComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-demo-stage-hero", 3);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275pipe(3, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275property("eyebrow", \u0275\u0275pipeBind1(1, 3, "smartEnrollDemos.demoStage.humanAuthn"))("title", \u0275\u0275pipeBind1(2, 5, "smartEnrollDemos.liveness.heroLivenessDefault"))("subtitle", \u0275\u0275pipeBind1(3, 7, "smartEnrollDemos.liveness.heroCapture"));
  }
}
function LivenessDemoComponent_Conditional_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "smartEnrollDemos.liveness.errorResultTitle"), " ");
  }
}
function LivenessDemoComponent_Conditional_5_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "smartEnrollDemos.liveness.heroAnalysisComplete"), " ");
  }
}
function LivenessDemoComponent_Conditional_5_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "smartEnrollDemos.liveness.heroLivenessDefault"), " ");
  }
}
function LivenessDemoComponent_Conditional_5_Case_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "smartEnrollDemos.liveness.heroCapture"), " ");
  }
}
function LivenessDemoComponent_Conditional_5_Case_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "smartEnrollDemos.liveness.heroProcessing"), " ");
  }
}
function LivenessDemoComponent_Conditional_5_Case_8_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.result.message, " ");
  }
}
function LivenessDemoComponent_Conditional_5_Case_8_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "smartEnrollDemos.liveness.heroResultComplete"), " ");
  }
}
function LivenessDemoComponent_Conditional_5_Case_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, LivenessDemoComponent_Conditional_5_Case_8_Conditional_0_Template, 1, 1)(1, LivenessDemoComponent_Conditional_5_Case_8_Conditional_1_Template, 2, 3);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional((ctx_r1.result == null ? null : ctx_r1.result.isApiError) ? 0 : 1);
  }
}
function LivenessDemoComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "h2", 14);
    \u0275\u0275template(2, LivenessDemoComponent_Conditional_5_Conditional_2_Template, 2, 3)(3, LivenessDemoComponent_Conditional_5_Conditional_3_Template, 2, 3)(4, LivenessDemoComponent_Conditional_5_Conditional_4_Template, 2, 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 15);
    \u0275\u0275template(6, LivenessDemoComponent_Conditional_5_Case_6_Template, 2, 3)(7, LivenessDemoComponent_Conditional_5_Case_7_Template, 2, 3)(8, LivenessDemoComponent_Conditional_5_Case_8_Template, 2, 1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.step === "result" && (ctx_r1.result == null ? null : ctx_r1.result.isApiError) ? 2 : ctx_r1.step === "result" ? 3 : 4);
    \u0275\u0275advance(4);
    \u0275\u0275conditional((tmp_2_0 = ctx_r1.step) === "capture" ? 6 : tmp_2_0 === "processing" ? 7 : tmp_2_0 === "result" ? 8 : -1);
  }
}
function LivenessDemoComponent_Conditional_6_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "span", 32);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 33);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.error);
  }
}
function LivenessDemoComponent_Conditional_6_For_30_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 36);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "smartEnrollDemos.common.sampleFailHint"), " ");
  }
}
function LivenessDemoComponent_Conditional_6_For_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 34);
    \u0275\u0275listener("click", function LivenessDemoComponent_Conditional_6_For_30_Template_button_click_0_listener() {
      const sample_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.runSampleImage(sample_r6));
    });
    \u0275\u0275element(1, "img", 35);
    \u0275\u0275template(2, LivenessDemoComponent_Conditional_6_For_30_Conditional_2_Template, 3, 3, "span", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const sample_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", sample_r6.src, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275conditional(sample_r6.fail ? 2 : -1);
  }
}
function LivenessDemoComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275template(0, LivenessDemoComponent_Conditional_6_Conditional_0_Template, 5, 1, "div", 16);
    \u0275\u0275elementStart(1, "app-demo-stage-card", 17);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementStart(4, "div", 18)(5, "div", 19);
    \u0275\u0275element(6, "app-demo-choose-one-callout", 20);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementStart(8, "app-demo-scanner-shell")(9, "app-face-guided-camera", 21);
    \u0275\u0275listener("captured", function LivenessDemoComponent_Conditional_6_Template_app_face_guided_camera_captured_9_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCapture($event));
    })("captureError", function LivenessDemoComponent_Conditional_6_Template_app_face_guided_camera_captureError_9_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.error = $event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 22);
    \u0275\u0275element(11, "app-demo-or-divider")(12, "app-demo-capture-option-heading", 23);
    \u0275\u0275pipe(13, "transloco");
    \u0275\u0275pipe(14, "transloco");
    \u0275\u0275elementStart(15, "app-demo-upload-image-button", 24);
    \u0275\u0275pipe(16, "transloco");
    \u0275\u0275pipe(17, "transloco");
    \u0275\u0275pipe(18, "transloco");
    \u0275\u0275listener("fileSelected", function LivenessDemoComponent_Conditional_6_Template_app_demo_upload_image_button_fileSelected_15_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFileUpload($event));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 25)(20, "div", 26)(21, "h3", 27);
    \u0275\u0275element(22, "span", 28);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "p", 29);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 30);
    \u0275\u0275repeaterCreate(29, LivenessDemoComponent_Conditional_6_For_30_Template, 3, 2, "button", 31, _forTrack0);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.error ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("title", \u0275\u0275pipeBind1(2, 15, "smartEnrollDemos.demoStage.captureTitle"))("help", \u0275\u0275pipeBind1(3, 17, "smartEnrollDemos.demoStage.captureHelp"));
    \u0275\u0275advance(5);
    \u0275\u0275property("extraClass", "relative z-10 mb-4")("description", \u0275\u0275pipeBind1(7, 19, "smartEnrollDemos.liveness.chooseOneDescription"));
    \u0275\u0275advance(3);
    \u0275\u0275property("fillFrame", true)("disabled", ctx_r1.step !== "capture");
    \u0275\u0275advance(3);
    \u0275\u0275property("title", \u0275\u0275pipeBind1(13, 21, "smartEnrollDemos.liveness.uploadTitle"))("subtitle", \u0275\u0275pipeBind1(14, 23, "smartEnrollDemos.liveness.uploadSubtitle"));
    \u0275\u0275advance(3);
    \u0275\u0275property("useNativeInput", true)("loading", ctx_r1.uploadReading)("primaryText", ctx_r1.uploadReading ? \u0275\u0275pipeBind1(16, 25, "smartEnrollDemos.liveness.uploadReading") : \u0275\u0275pipeBind1(17, 27, "smartEnrollDemos.liveness.uploadPrimary"))("secondaryText", ctx_r1.uploadReading && ctx_r1.uploadFileName ? ctx_r1.uploadFileName : \u0275\u0275pipeBind1(18, 29, "smartEnrollDemos.liveness.uploadSecondary"));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(24, 31, "smartEnrollDemos.liveness.samplesTitle"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 33, "smartEnrollDemos.liveness.samplesDescription"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.sampleImages);
  }
}
function LivenessDemoComponent_Conditional_7_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 37);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.previewUrl, \u0275\u0275sanitizeUrl);
  }
}
function LivenessDemoComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275template(1, LivenessDemoComponent_Conditional_7_Conditional_1_Template, 1, 1, "img", 37);
    \u0275\u0275elementStart(2, "p", 38);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 39);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.previewUrl ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 3, "smartEnrollDemos.liveness.analyzingTitle"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 5, "smartEnrollDemos.liveness.engineLine"));
  }
}
function LivenessDemoComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "app-demo-sandbox-result-banner");
    \u0275\u0275elementStart(2, "div", 40)(3, "div", 41)(4, "span", 42);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "h2", 43);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 44);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 45)(12, "div", 46)(13, "p", 47);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p", 48);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 46)(19, "p", 49);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "p", 48);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 46)(26, "p", 47);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "p", 48);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "app-demo-result-actions", 50);
    \u0275\u0275pipe(32, "transloco");
    \u0275\u0275pipe(33, "transloco");
    \u0275\u0275listener("secondary", function LivenessDemoComponent_Conditional_8_Template_app_demo_result_actions_secondary_31_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.reset());
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r1.result.isLive ? "border-stone-200/90 bg-white dark:border-gray-800 dark:bg-gray-900/70" : "border-red-200/90 bg-white dark:border-red-900/60 dark:bg-gray-900/70");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.result.isLive ? "border-emerald-200/90 bg-emerald-50 text-emerald-700 dark:border-emerald-800 dark:bg-emerald-950/30 dark:text-emerald-300" : "border-red-200/90 bg-red-50 text-red-600 dark:border-red-900/60 dark:bg-red-950/30 dark:text-red-300");
    \u0275\u0275advance();
    \u0275\u0275styleProp("font-variation-settings", "'FILL' 1");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.result.isLive ? "verified_user" : "gpp_bad", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 16, ctx_r1.result.isLive ? "smartEnrollDemos.liveness.liveTitle" : "smartEnrollDemos.liveness.spoofTitle"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.result.message);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.result.confidence != null ? (ctx_r1.result.confidence * 100).toFixed(1) + "%" : "\u2014", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 18, "smartEnrollDemos.liveness.confidence"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r1.result.isLive ? "text-emerald-700 dark:text-emerald-300" : "text-red-600 dark:text-red-300");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 20, ctx_r1.result.isLive ? "smartEnrollDemos.liveness.pass" : "smartEnrollDemos.liveness.fail"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(24, 22, "smartEnrollDemos.liveness.verdict"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.result.price != null ? "$" + ctx_r1.result.price.toFixed(4) : "\u2014", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(30, 24, "smartEnrollDemos.liveness.cost"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("secondaryLabel", \u0275\u0275pipeBind1(32, 26, "smartEnrollDemos.liveness.tryAgain"))("primaryLabel", \u0275\u0275pipeBind1(33, 28, "smartEnrollDemos.common.backToDemos"));
  }
}
function LivenessDemoComponent_Conditional_9_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 58)(1, "span", 57);
    \u0275\u0275text(2, "add_card");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "smartEnrollDemos.common.addCredits"), " ");
  }
}
function LivenessDemoComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 51)(2, "div", 52)(3, "span", 42);
    \u0275\u0275text(4, "error");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "h2", 53);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 54);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 55)(11, "button", 56);
    \u0275\u0275listener("click", function LivenessDemoComponent_Conditional_9_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.reset());
    });
    \u0275\u0275elementStart(12, "span", 57);
    \u0275\u0275text(13, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, LivenessDemoComponent_Conditional_9_Conditional_16_Template, 5, 3, "a", 58);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275attribute("aria-labelledby", "liveness-api-error-title");
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("font-variation-settings", "'FILL' 1");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 7, "smartEnrollDemos.liveness.errorResultTitle"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.result.message);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 9, "smartEnrollDemos.liveness.tryAgain"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.result.isInsufficientCredits ? 16 : -1);
  }
}
var LIVENESS_SAMPLE_IMAGES = [
  { src: "/demos/assets/ppic1.jpg", fail: false },
  { src: "/demos/assets/ppic2.jpg", fail: false },
  { src: "/demos/assets/ppic3.jpg", fail: false },
  { src: "/demos/assets/ppic4.jpg", fail: false },
  { src: "/demos/assets/ppic5.jpg", fail: true },
  { src: "/demos/assets/ppic6.jpg", fail: true }
];
var DOCS_BASE = "https://docs.verifik.co";
var RELATED_DOC_HREFS = [
  `${DOCS_BASE}/biometrics/liveness`,
  `${DOCS_BASE}/biometrics/humanauthn`,
  `${DOCS_BASE}/biometrics/humanID-encrypt`,
  `${DOCS_BASE}/biometrics/humanID-encrypt-qr-code`,
  `${DOCS_BASE}/biometrics/humanID-decrypt`,
  `${DOCS_BASE}/biometrics/humanID-preview`
];
var RELATED_DOC_BADGE_MUTED = [false, false, false, false, false, false];
var LivenessDemoComponent = class _LivenessDemoComponent {
  constructor() {
    this.sampleImages = LIVENESS_SAMPLE_IMAGES;
    this.defaultMinScore = DEFAULT_LIVENESS_STANDALONE_MIN_SCORE;
    this.step = "capture";
    this.result = null;
    this.error = null;
    this.previewUrl = null;
    this.uploadReading = false;
    this.uploadFileName = null;
    this.relatedDocs = [];
    this._api = inject(BiometricsDemoApiService);
    this._cdr = inject(ChangeDetectorRef);
    this._transloco = inject(TranslocoService);
    this._accountEnv = inject(AccountEnvironmentService);
    this._api.ensureAuthenticated();
  }
  ngOnInit() {
    this.relatedDocs = this.buildRelatedDocs();
  }
  get numericStep() {
    return this.step === "capture" ? 1 : 2;
  }
  onFileUpload(event) {
    const input = event.target;
    const file = input.files?.[0];
    if (!file)
      return;
    this.uploadReading = true;
    this.uploadFileName = file.name;
    this.error = null;
    this._cdr.markForCheck();
    void fileToBase64(file).then((b64) => {
      this.previewUrl = URL.createObjectURL(file);
      this.uploadReading = false;
      input.value = "";
      this.runLiveness(b64);
    }).catch(() => {
      this.uploadReading = false;
      this.uploadFileName = null;
      input.value = "";
      this.error = this._transloco.translate("smartEnrollDemos.liveness.sampleLoadError");
      this._cdr.markForCheck();
    });
  }
  runSampleImage(sample) {
    void imageUrlToRawBase64(sample.src).then((b64) => {
      this.previewUrl = sample.src;
      const payload = this._accountEnv.isSandboxModeActive() && sample.fail ? applySandboxFaceFailMarker(b64) : b64;
      this.runLiveness(payload);
    }).catch(() => {
      this.error = this._transloco.translate("smartEnrollDemos.liveness.sampleLoadError");
      this._cdr.markForCheck();
    });
  }
  onCapture(payload) {
    this.previewUrl = payload.dataUrl;
    this.runLiveness(payload.base64);
  }
  runLiveness(base64Image) {
    if (!this._api.ensureAuthenticated()) {
      this.error = this._transloco.translate("smartEnrollDemos.common.mustBeSignedIn");
      this.uploadReading = false;
      this.uploadFileName = null;
      this._cdr.markForCheck();
      return;
    }
    this.step = "processing";
    this.error = null;
    this.result = null;
    this.uploadReading = false;
    this._cdr.markForCheck();
    this._api.detectLiveness({ os: getDemoOs(), image: base64Image, includeCost: true }).subscribe({
      next: (data) => {
        const parsed = parseLivenessResult(data);
        this.result = {
          isLive: parsed.passed,
          confidence: parsed.livenessScore,
          message: parsed.message || this._transloco.translate(parsed.passed ? "smartEnrollDemos.liveness.defaultPass" : "smartEnrollDemos.liveness.defaultFail"),
          price: parsed.creditsCharged,
          isApiError: false
        };
        this.error = null;
        this.step = "result";
        this._cdr.markForCheck();
      },
      error: (err) => {
        this.result = {
          isLive: false,
          confidence: null,
          message: translateLivenessApiError((key) => this._transloco.translate(key), err),
          price: typeof err?.creditsCharged === "number" ? err.creditsCharged : null,
          isApiError: true,
          isInsufficientCredits: isInsufficientCreditsError(err)
        };
        this.error = null;
        this.step = "result";
        this._cdr.markForCheck();
      }
    });
  }
  reset() {
    this.step = "capture";
    this.result = null;
    this.error = null;
    this.previewUrl = null;
    this.uploadReading = false;
    this.uploadFileName = null;
    this._cdr.markForCheck();
  }
  buildRelatedDocs() {
    return RELATED_DOC_HREFS.map((href, i) => ({
      href,
      title: this._transloco.translate(`smartEnrollDemos.liveness.relatedDocs.${i}.title`),
      description: this._transloco.translate(`smartEnrollDemos.liveness.relatedDocs.${i}.description`),
      badge: this._transloco.translate(`smartEnrollDemos.liveness.relatedDocs.${i}.badge`),
      badgeMuted: RELATED_DOC_BADGE_MUTED[i]
    }));
  }
  static {
    this.\u0275fac = function LivenessDemoComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LivenessDemoComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LivenessDemoComponent, selectors: [["app-liveness-demo"]], decls: 11, vars: 7, consts: [["sectionLink", "/human-authn/demos", "sectionLabelKey", "nav.human_authn", "demosLink", "/human-authn/demos"], [1, "flex", "items-center", "justify-center", "mb-10", "pt-4", "gap-2"], [1, "flex", "items-center"], [3, "eyebrow", "title", "subtitle"], [1, "mb-10"], [1, "flex", "flex-col", "items-center", "justify-center", "py-24"], [1, "max-w-xl", "mx-auto", "w-full"], ["role", "dialog", "aria-modal", "true", 1, "fixed", "inset-0", "z-[100]", "flex", "items-center", "justify-center", "p-4", "bg-black/60", "backdrop-blur-[2px]"], [3, "items"], [1, "flex", "flex-col", "items-center"], [1, "h-10", "w-10", "rounded-full", "flex", "items-center", "justify-center", "font-bold", "transition-all", 3, "ngClass"], [1, "material-symbols-outlined", "text-sm"], [1, "text-[0.6875rem]", "font-bold", "uppercase", "tracking-wider", "mt-2", 3, "ngClass"], [1, "w-12", "h-0.5", "mx-2", "mb-5", 3, "ngClass"], [1, "text-4xl", "md:text-5xl", "font-black", "tracking-tight", "text-on-surface", "mb-2"], [1, "text-on-surface-variant", "font-medium"], [1, "mb-6", "px-4", "py-3", "bg-error-container/20", "border", "border-error/20", "rounded-lg", "flex", "items-start", "gap-3", "max-w-3xl"], ["number", "01", 3, "title", "help"], [1, "grid", "grid-cols-1", "lg:grid-cols-12", "gap-8", "items-start"], [1, "lg:col-span-7", "bg-surface-container-low", "rounded-xl", "p-6", "relative", "overflow-hidden"], [3, "extraClass", "description"], [3, "captured", "captureError", "fillFrame", "disabled"], [1, "mt-6", "grid", "grid-cols-1", "gap-3"], ["label", "B", "headingId", "liveness-upload-heading", 3, "title", "subtitle"], ["id", "btn-upload-image", 3, "fileSelected", "useNativeInput", "loading", "primaryText", "secondaryText"], [1, "lg:col-span-5"], [1, "bg-surface-container", "rounded-xl", "p-5"], [1, "text-sm", "font-bold", "tracking-widest", "text-on-surface-variant", "uppercase", "mb-2", "flex", "items-center", "gap-2"], [1, "w-1.5", "h-1.5", "bg-primary", "rounded-full"], [1, "text-xs", "text-on-surface-variant", "mb-4"], [1, "grid", "grid-cols-3", "gap-2"], ["type", "button", 1, "relative", "aspect-square", "rounded-lg", "overflow-hidden", "border", "transition-all", "p-0", "cursor-pointer", "hover:border-primary/40"], [1, "material-symbols-outlined", "text-error", "text-base", "shrink-0", "mt-0.5"], [1, "text-sm", "text-on-error-container", "leading-5"], ["type", "button", 1, "relative", "aspect-square", "rounded-lg", "overflow-hidden", "border", "transition-all", "p-0", "cursor-pointer", "hover:border-primary/40", 3, "click"], ["alt", "", 1, "absolute", "inset-0", "w-full", "h-full", "object-cover", 3, "src"], [1, "absolute", "bottom-1", "left-1", "right-1", "rounded", "bg-black/65", "px-1", "py-0.5", "text-[9px]", "font-semibold", "uppercase", "tracking-wide", "text-white"], ["alt", "", 1, "w-32", "h-32", "rounded-full", "object-cover", "grayscale", "opacity-70", "mb-8", 3, "src"], [1, "text-lg", "font-semibold", "text-on-surface", "mb-2"], [1, "text-on-surface-variant", "text-sm", "font-mono"], [1, "rounded-2xl", "border", "p-8", "text-center", "shadow-sm", 3, "ngClass"], [1, "mx-auto", "mb-6", "flex", "h-20", "w-20", "items-center", "justify-center", "rounded-2xl", "border", 3, "ngClass"], [1, "material-symbols-outlined", "text-4xl"], [1, "text-3xl", "font-semibold", "tracking-tight", "text-stone-950", "dark:text-white", "mb-2"], [1, "text-sm", "leading-6", "text-stone-500", "dark:text-stone-400", "mb-8"], [1, "grid", "grid-cols-3", "gap-3", "mb-8"], [1, "rounded-xl", "border", "border-stone-200", "p-4", "dark:border-gray-800"], [1, "text-2xl", "font-semibold", "tracking-tight", "text-stone-950", "dark:text-white"], [1, "mt-1", "text-[11px]", "font-medium", "uppercase", "tracking-[0.18em]", "text-stone-400", "dark:text-stone-500"], [1, "text-2xl", "font-semibold", "tracking-tight", 3, "ngClass"], ["primaryRouterLink", "/human-authn/demos", 3, "secondary", "secondaryLabel", "primaryLabel"], [1, "w-full", "max-w-lg", "rounded-2xl", "border", "border-red-200/80", "bg-white", "p-8", "text-center", "shadow-xl", "shadow-black/30", "dark:border-red-900/60", "dark:bg-gray-900"], [1, "mx-auto", "mb-6", "flex", "h-20", "w-20", "items-center", "justify-center", "rounded-2xl", "border", "border-red-200/90", "bg-red-50", "text-red-600", "dark:border-red-900/60", "dark:bg-red-950/30", "dark:text-red-300"], ["id", "liveness-api-error-title", 1, "text-3xl", "font-semibold", "tracking-tight", "text-stone-950", "dark:text-white", "mb-3"], [1, "text-base", "leading-7", "text-stone-600", "dark:text-stone-300", "mb-8"], [1, "flex", "flex-col-reverse", "gap-3", "sm:flex-row"], ["type", "button", 1, "inline-flex", "min-h-12", "flex-1", "items-center", "justify-center", "gap-2", "rounded-xl", "border", "border-stone-200", "bg-white", "px-6", "py-3.5", "text-base", "font-semibold", "text-stone-950", "transition", "hover:bg-stone-50", "active:scale-[0.98]", "dark:border-gray-700", "dark:bg-gray-900", "dark:text-white", "dark:hover:bg-gray-800", 3, "click"], [1, "material-symbols-outlined", "text-xl"], ["routerLink", "/add-credits", 1, "inline-flex", "min-h-12", "flex-1", "items-center", "justify-center", "gap-2", "rounded-xl", "bg-stone-950", "px-6", "py-3.5", "text-base", "font-semibold", "text-white", "transition-opacity", "hover:opacity-90", "active:scale-[0.98]", "dark:bg-white", "dark:text-stone-950"]], template: function LivenessDemoComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-demo-page-shell", 0)(1, "div", 1);
        \u0275\u0275repeaterCreate(2, LivenessDemoComponent_For_3_Template, 9, 11, "div", 2, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275template(4, LivenessDemoComponent_Conditional_4_Template, 4, 9, "app-demo-stage-hero", 3)(5, LivenessDemoComponent_Conditional_5_Template, 9, 2, "div", 4)(6, LivenessDemoComponent_Conditional_6_Template, 31, 35)(7, LivenessDemoComponent_Conditional_7_Template, 8, 7, "div", 5)(8, LivenessDemoComponent_Conditional_8_Template, 34, 30, "div", 6)(9, LivenessDemoComponent_Conditional_9_Template, 17, 11, "div", 7);
        \u0275\u0275element(10, "app-demo-related-docs-section", 8);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275repeater(\u0275\u0275pureFunction0(6, _c0));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.step === "capture" ? 4 : 5);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.step === "capture" ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.step === "processing" ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.step === "result" && ctx.result && !ctx.result.isApiError ? 8 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.step === "result" && (ctx.result == null ? null : ctx.result.isApiError) && ctx.result ? 9 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("items", ctx.relatedDocs);
      }
    }, dependencies: [
      CommonModule,
      NgClass,
      RouterLink,
      TranslocoModule,
      TranslocoPipe,
      DemoPageShellComponent,
      DemoStageHeroComponent,
      DemoStageCardComponent,
      DemoRelatedDocsSectionComponent,
      DemoChooseOneCalloutComponent,
      DemoCaptureOptionHeadingComponent,
      DemoScannerShellComponent,
      FaceGuidedCameraComponent,
      DemoOrDividerComponent,
      DemoUploadImageButtonComponent,
      DemoResultActionsComponent,
      DemoSandboxResultBannerComponent
    ], styles: ['@charset "UTF-8";\n\n\n\n.smart-enroll-demos[_ngcontent-%COMP%] {\n  --color-surface: 250 250 249;\n  --color-surface-container-lowest: 255 255 255;\n  --color-surface-container-low: 255 255 255;\n  --color-surface-container: 245 245 244;\n  --color-surface-container-high: 231 229 228;\n  --color-surface-container-highest: 214 211 209;\n  --color-surface-bright: 255 255 255;\n  --color-surface-dim: 250 250 249;\n  --color-surface-variant: 231 229 228;\n  --color-surface-tint: 38 66 255;\n  --color-primary: 38 66 255;\n  --color-primary-fixed: 239 246 255;\n  --color-primary-fixed-dim: 219 234 254;\n  --color-primary-container: 219 234 254;\n  --color-on-primary: 255 255 255;\n  --color-on-primary-fixed: 28 25 23;\n  --color-on-primary-fixed-variant: 30 58 138;\n  --color-on-primary-container: 28 25 23;\n  --color-inverse-primary: 59 130 246;\n  --color-secondary: 87 83 78;\n  --color-secondary-fixed: 245 245 244;\n  --color-secondary-fixed-dim: 231 229 228;\n  --color-secondary-container: 231 229 228;\n  --color-on-secondary: 28 25 23;\n  --color-on-secondary-fixed: 28 25 23;\n  --color-on-secondary-fixed-variant: 68 64 60;\n  --color-on-secondary-container: 68 64 60;\n  --color-tertiary: 13 148 136;\n  --color-tertiary-fixed: 204 251 241;\n  --color-tertiary-fixed-dim: 153 246 228;\n  --color-tertiary-container: 204 251 241;\n  --color-on-tertiary: 255 255 255;\n  --color-on-tertiary-fixed: 19 78 74;\n  --color-on-tertiary-fixed-variant: 17 94 89;\n  --color-on-tertiary-container: 19 78 74;\n  --color-background: 250 250 249;\n  --color-on-background: 28 25 23;\n  --color-on-surface: 28 25 23;\n  --color-on-surface-variant: 87 83 78;\n  --color-inverse-surface: 28 25 23;\n  --color-inverse-on-surface: 250 250 249;\n  --color-outline: 168 162 158;\n  --color-outline-variant: 214 211 209;\n  --color-error: 185 28 28;\n  --color-error-container: 254 226 226;\n  --color-on-error: 255 255 255;\n  --color-on-error-container: 127 29 29;\n  --frost: rgb(38 66 255 / 0.12);\n  --frost-variant: rgb(38 66 255 / 0.06);\n  --shadow-ambient: 0 8px 40px rgb(28 25 23 / 0.08);\n  --shadow-float: 0 16px 60px rgb(28 25 23 / 0.12);\n  --shadow-glow: 0 0 40px rgb(38 66 255 / 0.08);\n  --shadow-scan-line: 0 0 15px rgb(38 66 255 / 0.35);\n  --shadow-primary: 0 1px 2px rgb(38 66 255 / 0.12), 0 4px 14px rgb(38 66 255 / 0.16);\n  --shadow-ring-frost: 0 0 0 1px rgb(38 66 255 / 0.12);\n  --bg-primary-gradient:\n    linear-gradient(\n      135deg,\n      #2642ff 0%,\n      #1a2f99 100%);\n  --utility-primary-cta:\n    linear-gradient(\n      135deg,\n      #2642ff 0%,\n      #1a2f99 100%);\n  --utility-primary-cta-color: 255 255 255;\n  --utility-text-gradient-from: 38 66 255;\n  --utility-text-gradient-to: 26 47 153;\n  --utility-scanning-ring-outer: 38 66 255;\n  --utility-scanning-ring-inner: 26 47 153;\n  background-color: rgb(var(--color-surface));\n  color: rgb(var(--color-on-surface));\n  min-height: 100%;\n  width: 100%;\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  font-family: "Material Symbols Outlined", sans-serif;\n  font-weight: normal;\n  font-style: normal;\n  line-height: 1;\n  letter-spacing: normal;\n  text-transform: none;\n  display: inline-block;\n  white-space: nowrap;\n  word-wrap: normal;\n  direction: ltr;\n  font-variation-settings:\n    "FILL" 0,\n    "wght" 400,\n    "GRAD" 0,\n    "opsz" 24;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .glass-panel-dark[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.9);\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  border-bottom: 1px solid rgb(var(--color-outline-variant)/0.35);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .scan-line[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 28;\n  pointer-events: none;\n  width: 100%;\n  height: 2px;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgb(var(--color-surface-tint)),\n      transparent);\n  box-shadow: var(--shadow-scan-line);\n  animation: _ngcontent-%COMP%_demoScanAnim 3s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_demoScanAnim {\n  0% {\n    top: 20%;\n    opacity: 0;\n  }\n  20% {\n    opacity: 1;\n  }\n  80% {\n    opacity: 1;\n  }\n  100% {\n    top: 80%;\n    opacity: 0;\n  }\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .scanner-corner-tl[_ngcontent-%COMP%], \n.smart-enroll-demos[_ngcontent-%COMP%]   .scanner-corner-tr[_ngcontent-%COMP%], \n.smart-enroll-demos[_ngcontent-%COMP%]   .scanner-corner-bl[_ngcontent-%COMP%], \n.smart-enroll-demos[_ngcontent-%COMP%]   .scanner-corner-br[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 30;\n  pointer-events: none;\n  width: 2rem;\n  height: 2rem;\n  border-color: rgb(var(--color-surface-tint));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .scanner-corner-tl[_ngcontent-%COMP%] {\n  top: 1.5rem;\n  left: 1.5rem;\n  border-top: 2px solid;\n  border-left: 2px solid;\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .scanner-corner-tr[_ngcontent-%COMP%] {\n  top: 1.5rem;\n  right: 1.5rem;\n  border-top: 2px solid;\n  border-right: 2px solid;\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .scanner-corner-bl[_ngcontent-%COMP%] {\n  bottom: 1.5rem;\n  left: 1.5rem;\n  border-bottom: 2px solid;\n  border-left: 2px solid;\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .scanner-corner-br[_ngcontent-%COMP%] {\n  bottom: 1.5rem;\n  right: 1.5rem;\n  border-bottom: 2px solid;\n  border-right: 2px solid;\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .blueprint-grid[_ngcontent-%COMP%] {\n  background-image: radial-gradient(rgb(var(--color-primary)/0.45) 0.5px, transparent 0.5px);\n  background-size: 20px 20px;\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .bg-primary-cta[_ngcontent-%COMP%] {\n  background: var(--utility-primary-cta);\n  color: rgb(var(--utility-primary-cta-color));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .demo-btn-primary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: 100%;\n  min-height: 2.75rem;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  border-radius: 0.75rem;\n  border: 1px solid rgba(28, 25, 23, 0.08);\n  background-color: rgb(28, 25, 23);\n  padding: 0.75rem 1.25rem;\n  font-size: 0.875rem;\n  font-weight: 600;\n  letter-spacing: -0.01em;\n  color: rgb(255, 255, 255);\n  box-shadow: 0 1px 2px rgba(28, 25, 23, 0.06);\n  text-decoration: none;\n  transition:\n    background-color 150ms ease,\n    border-color 150ms ease,\n    transform 100ms ease;\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .demo-btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: rgb(41, 37, 36);\n  border-color: rgba(28, 25, 23, 0.12);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .demo-btn-primary[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: scale(0.99);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .demo-btn-primary[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n  opacity: 0.45;\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .demo-btn-primary.demo-btn-inline[_ngcontent-%COMP%] {\n  width: auto;\n  flex: 1 1 0;\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .demo-btn-secondary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: 100%;\n  min-height: 2.75rem;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  border-radius: 0.75rem;\n  border: 1px solid rgb(231, 229, 228);\n  background-color: rgb(255, 255, 255);\n  padding: 0.75rem 1.25rem;\n  font-size: 0.875rem;\n  font-weight: 600;\n  letter-spacing: -0.01em;\n  color: rgb(28, 25, 23);\n  transition:\n    background-color 150ms ease,\n    border-color 150ms ease,\n    transform 100ms ease;\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .demo-btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: rgb(250, 250, 249);\n  border-color: rgb(214, 211, 209);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .demo-btn-secondary[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: scale(0.99);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .demo-btn-secondary[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n  opacity: 0.45;\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .demo-btn-secondary.demo-btn-inline[_ngcontent-%COMP%] {\n  width: auto;\n  flex: 1 1 0;\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .shadow-primary[_ngcontent-%COMP%] {\n  box-shadow: var(--shadow-primary);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .shadow-ring-frost[_ngcontent-%COMP%] {\n  box-shadow: var(--shadow-ring-frost);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .shadow-ambient[_ngcontent-%COMP%] {\n  box-shadow: var(--shadow-ambient);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .border-frost[_ngcontent-%COMP%] {\n  border-color: var(--frost);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .scanning-ring[_ngcontent-%COMP%] {\n  box-shadow: 0 0 20px 2px rgb(var(--utility-scanning-ring-outer)/0.25), inset 0 0 20px 2px rgb(var(--utility-scanning-ring-inner)/0.15);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .bg-surface[_ngcontent-%COMP%] {\n  background-color: rgb(var(--color-surface));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .bg-surface-container[_ngcontent-%COMP%] {\n  background-color: rgb(var(--color-surface-container));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .bg-surface-container-low[_ngcontent-%COMP%] {\n  background-color: rgb(var(--color-surface-container-low));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .bg-surface-container-high[_ngcontent-%COMP%] {\n  background-color: rgb(var(--color-surface-container-high));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .bg-surface-container-lowest[_ngcontent-%COMP%] {\n  background-color: rgb(var(--color-surface-container-lowest));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .bg-error-container\\/20[_ngcontent-%COMP%] {\n  background-color: rgb(var(--color-error-container)/0.2);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .text-on-surface[_ngcontent-%COMP%] {\n  color: rgb(var(--color-on-surface));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .text-on-surface-variant[_ngcontent-%COMP%] {\n  color: rgb(var(--color-on-surface-variant));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .text-on-primary-container[_ngcontent-%COMP%] {\n  color: rgb(var(--color-on-primary-container));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .text-primary[_ngcontent-%COMP%] {\n  color: rgb(var(--color-primary));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .text-error[_ngcontent-%COMP%] {\n  color: rgb(var(--color-error));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .border-outline-variant\\/20[_ngcontent-%COMP%] {\n  border-color: rgb(var(--color-outline-variant)/0.2);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .border-outline-variant\\/30[_ngcontent-%COMP%] {\n  border-color: rgb(var(--color-outline-variant)/0.3);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .border-outline-variant\\/15[_ngcontent-%COMP%] {\n  border-color: rgb(var(--color-outline-variant)/0.15);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .border-outline-variant\\/10[_ngcontent-%COMP%] {\n  border-color: rgb(var(--color-outline-variant)/0.1);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .border-error\\/20[_ngcontent-%COMP%] {\n  border-color: rgb(var(--color-error)/0.2);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .border-error[_ngcontent-%COMP%] {\n  border-color: rgb(var(--color-error));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .placeholder-on-surface-variant\\/50[_ngcontent-%COMP%]::placeholder {\n  color: rgb(var(--color-on-surface-variant)/0.5);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .hover\\:bg-surface-container[_ngcontent-%COMP%]:hover {\n  background-color: rgb(var(--color-surface-container));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .focus\\:border-primary\\/60[_ngcontent-%COMP%]:focus {\n  border-color: rgb(var(--color-primary)/0.6);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .hover\\:border-primary\\/40[_ngcontent-%COMP%]:hover {\n  border-color: rgb(var(--color-primary)/0.4);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .ring-primary-20[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 4px rgba(38, 66, 255, 0.2);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .bg-primary-10[_ngcontent-%COMP%] {\n  background: rgba(38, 66, 255, 0.06);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .selected-liveness[_ngcontent-%COMP%] {\n  border-color: rgb(var(--color-primary)/0.4);\n  background: rgb(var(--color-primary)/0.06);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .human-id-liveness-toggle[_ngcontent-%COMP%] {\n  border-color: rgb(var(--color-outline-variant)/0.3);\n  background: rgb(var(--color-surface-container-low));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .human-id-liveness-toggle[_ngcontent-%COMP%]:hover {\n  border-color: rgb(var(--color-outline-variant)/0.5);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .human-id-liveness-toggle--on[_ngcontent-%COMP%] {\n  border-color: rgb(var(--color-primary)/0.4);\n  background: rgb(var(--color-primary)/0.06);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .human-id-liveness-toggle__icon[_ngcontent-%COMP%] {\n  background: rgb(var(--color-surface-container));\n  color: rgb(var(--color-on-surface-variant));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .human-id-liveness-toggle__icon--on[_ngcontent-%COMP%] {\n  background: rgb(var(--color-primary)/0.15);\n  color: rgb(var(--color-primary));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .human-id-liveness-toggle__stage[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  border-radius: 9999px;\n  padding: 0.125rem 0.5rem;\n  font-size: 0.625rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .human-id-liveness-toggle__stage--encrypt[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.15);\n  color: rgb(180, 83, 9);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .human-id-liveness-toggle__stage--decrypt[_ngcontent-%COMP%] {\n  background: rgb(var(--color-primary)/0.12);\n  color: rgb(var(--color-primary));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .human-id-liveness-toggle__track[_ngcontent-%COMP%] {\n  background: rgb(var(--color-surface-container-high));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .human-id-liveness-toggle__track--on[_ngcontent-%COMP%] {\n  background: rgb(var(--color-primary));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .human-id-liveness-callout[_ngcontent-%COMP%] {\n  border: 1px solid rgb(var(--color-outline-variant)/0.25);\n  background: rgb(var(--color-surface-container-low));\n  border-radius: 0.75rem;\n  padding: 0.875rem 1rem;\n  font-size: 0.8125rem;\n  line-height: 1.5;\n  color: rgb(var(--color-on-surface-variant));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .selected-tolerance[_ngcontent-%COMP%] {\n  border-color: rgb(var(--color-primary)/0.5);\n  background: rgb(var(--color-primary)/0.08);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .demo-range-input[_ngcontent-%COMP%] {\n  accent-color: rgb(var(--color-primary));\n  height: 0.5rem;\n  cursor: pointer;\n}\n.dark[_ngcontent-%COMP%]   .smart-enroll-demos[_ngcontent-%COMP%] {\n  --color-surface: 15 23 42;\n  --color-surface-container-lowest: 2 6 23;\n  --color-surface-container-low: 15 23 42;\n  --color-surface-container: 30 41 59;\n  --color-surface-container-high: 51 65 85;\n  --color-surface-container-highest: 71 85 105;\n  --color-surface-bright: 30 41 59;\n  --color-surface-dim: 2 6 23;\n  --color-surface-variant: 51 65 85;\n  --color-surface-tint: 37 99 235;\n  --color-primary: 96 165 250;\n  --color-primary-fixed: 239 246 255;\n  --color-primary-fixed-dim: 191 219 254;\n  --color-primary-container: 37 99 235;\n  --color-on-primary: 255 255 255;\n  --color-on-primary-fixed: 15 23 42;\n  --color-on-primary-fixed-variant: 30 58 138;\n  --color-on-primary-container: 248 250 252;\n  --color-inverse-primary: 59 130 246;\n  --color-secondary: 148 163 184;\n  --color-secondary-fixed: 226 232 240;\n  --color-secondary-fixed-dim: 148 163 184;\n  --color-secondary-container: 51 65 85;\n  --color-on-secondary: 248 250 252;\n  --color-on-secondary-fixed: 15 23 42;\n  --color-on-secondary-fixed-variant: 51 65 85;\n  --color-on-secondary-container: 203 213 225;\n  --color-tertiary: 45 212 191;\n  --color-tertiary-fixed: 204 251 241;\n  --color-tertiary-fixed-dim: 94 234 212;\n  --color-tertiary-container: 13 148 136;\n  --color-on-tertiary: 4 47 46;\n  --color-on-tertiary-fixed: 19 78 74;\n  --color-on-tertiary-fixed-variant: 17 94 89;\n  --color-on-tertiary-container: 248 250 252;\n  --color-background: 15 23 42;\n  --color-on-background: 248 250 252;\n  --color-on-surface: 248 250 252;\n  --color-on-surface-variant: 148 163 184;\n  --color-inverse-surface: 248 250 252;\n  --color-inverse-on-surface: 15 23 42;\n  --color-outline: 100 116 139;\n  --color-outline-variant: 51 65 85;\n  --color-error: 252 165 165;\n  --color-error-container: 127 29 29;\n  --color-on-error: 127 29 29;\n  --color-on-error-container: 254 226 226;\n  --frost: rgb(96 165 250 / 0.12);\n  --frost-variant: rgb(96 165 250 / 0.06);\n  --shadow-ambient: 0 8px 40px rgb(2 6 23 / 0.35);\n  --shadow-float: 0 16px 60px rgb(2 6 23 / 0.45);\n  --shadow-glow: 0 0 40px rgb(37 99 235 / 0.1);\n  --shadow-scan-line: 0 0 15px rgb(96 165 250 / 0.4);\n  --shadow-primary: 0 1px 2px rgb(37 99 235 / 0.12), 0 4px 14px rgb(37 99 235 / 0.16);\n  --shadow-ring-frost: 0 0 0 1px rgb(96 165 250 / 0.12);\n  --utility-primary-cta-color: 255 255 255;\n  --utility-text-gradient-from: 96 165 250;\n  --utility-text-gradient-to: 37 99 235;\n  --utility-scanning-ring-outer: 96 165 250;\n  --utility-scanning-ring-inner: 37 99 235;\n  background-color: rgb(var(--color-surface));\n  color: rgb(var(--color-on-surface));\n}\n.dark[_ngcontent-%COMP%]   .smart-enroll-demos[_ngcontent-%COMP%]   .glass-panel-dark[_ngcontent-%COMP%] {\n  background: rgb(var(--color-surface-container)/0.85);\n  border-bottom-color: rgb(var(--color-outline-variant)/0.35);\n}\n.dark[_ngcontent-%COMP%]   .smart-enroll-demos[_ngcontent-%COMP%]   .demo-btn-primary[_ngcontent-%COMP%] {\n  border-color: rgba(255, 255, 255, 0.1);\n  background-color: rgb(248, 250, 252);\n  color: rgb(15, 23, 42);\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);\n}\n.dark[_ngcontent-%COMP%]   .smart-enroll-demos[_ngcontent-%COMP%]   .demo-btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: rgb(226, 232, 240);\n  border-color: rgba(255, 255, 255, 0.15);\n}\n.dark[_ngcontent-%COMP%]   .smart-enroll-demos[_ngcontent-%COMP%]   .demo-btn-secondary[_ngcontent-%COMP%] {\n  border-color: rgb(var(--color-outline-variant));\n  background-color: rgb(var(--color-surface-container));\n  color: rgb(var(--color-on-surface));\n}\n.dark[_ngcontent-%COMP%]   .smart-enroll-demos[_ngcontent-%COMP%]   .demo-btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: rgb(var(--color-surface-container-high));\n  border-color: rgb(var(--color-outline));\n}\n.dark[_ngcontent-%COMP%]   .smart-enroll-demos[_ngcontent-%COMP%]   .human-id-liveness-toggle__stage--encrypt[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.12);\n  color: rgb(251, 191, 36);\n}\n.dark[_ngcontent-%COMP%]   .smart-enroll-demos[_ngcontent-%COMP%]   input[type=date][_ngcontent-%COMP%] {\n  color-scheme: dark;\n}\n.dark[_ngcontent-%COMP%]   .smart-enroll-demos[_ngcontent-%COMP%]   input[type=date][_ngcontent-%COMP%]::-webkit-calendar-picker-indicator {\n  cursor: pointer;\n  opacity: 0.85;\n  filter: invert(1);\n}\n.smart-enroll-demos-hub[_ngcontent-%COMP%]   .demo-card[_ngcontent-%COMP%], \n.human-authn-demos-hub[_ngcontent-%COMP%]   .demo-card[_ngcontent-%COMP%] {\n  transition: all 0.3s;\n}\n.smart-enroll-demos-hub[_ngcontent-%COMP%]   .demo-card[_ngcontent-%COMP%]:hover, \n.human-authn-demos-hub[_ngcontent-%COMP%]   .demo-card[_ngcontent-%COMP%]:hover {\n  border-color: rgba(96, 165, 250, 0.35);\n  background: rgba(255, 255, 255, 0.02);\n  box-shadow: 0 0 0 1px rgba(96, 165, 250, 0.12);\n}\n.dark[_ngcontent-%COMP%]   .smart-enroll-demos-hub[_ngcontent-%COMP%]   .demo-card[_ngcontent-%COMP%]:hover, \n.dark[_ngcontent-%COMP%]   .human-authn-demos-hub[_ngcontent-%COMP%]   .demo-card[_ngcontent-%COMP%]:hover {\n  border-color: rgba(96, 165, 250, 0.35);\n  background: rgba(30, 41, 59, 0.5);\n  box-shadow: 0 0 0 1px rgba(96, 165, 250, 0.12);\n}\n/*# sourceMappingURL=_demos-theme.css.map */'], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LivenessDemoComponent, [{
    type: Component,
    args: [{ selector: "app-liveness-demo", standalone: true, imports: [
      CommonModule,
      RouterLink,
      TranslocoModule,
      DemoPageShellComponent,
      DemoStageHeroComponent,
      DemoStageCardComponent,
      DemoRelatedDocsSectionComponent,
      DemoChooseOneCalloutComponent,
      DemoCaptureOptionHeadingComponent,
      DemoScannerShellComponent,
      FaceGuidedCameraComponent,
      DemoOrDividerComponent,
      DemoUploadImageButtonComponent,
      DemoResultActionsComponent,
      DemoSandboxResultBannerComponent
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `<app-demo-page-shell sectionLink="/human-authn/demos" sectionLabelKey="nav.human_authn" demosLink="/human-authn/demos">\r
    <div class="flex items-center justify-center mb-10 pt-4 gap-2">\r
        @for (label of ['smartEnrollDemos.liveness.stepCapture', 'smartEnrollDemos.liveness.stepResult']; track label; let i = $index) {\r
            <div class="flex items-center">\r
                <div class="flex flex-col items-center">\r
                    <div\r
                        class="h-10 w-10 rounded-full flex items-center justify-center font-bold transition-all"\r
                        [ngClass]="{\r
                            'bg-primary text-on-primary': numericStep > i + 1,\r
                            'bg-primary-container ring-4 ring-primary-20': numericStep === i + 1,\r
                            'bg-surface-container-high border border-outline-variant text-on-surface-variant opacity-50': numericStep < i + 1\r
                        }"\r
                    >\r
                        @if (numericStep > i + 1) {\r
                            <span class="material-symbols-outlined text-sm">check</span>\r
                        } @else {\r
                            {{ i + 1 }}\r
                        }\r
                    </div>\r
                    <span class="text-[0.6875rem] font-bold uppercase tracking-wider mt-2" [ngClass]="numericStep === i + 1 ? 'text-primary' : 'text-on-surface-variant opacity-50'">\r
                        {{ label | transloco }}\r
                    </span>\r
                </div>\r
                @if (i < 1) {\r
                    <div class="w-12 h-0.5 mx-2 mb-5" [ngClass]="numericStep > i + 1 ? 'bg-primary' : 'bg-outline-variant opacity-30'"></div>\r
                }\r
            </div>\r
        }\r
    </div>\r
\r
    @if (step === 'capture') {\r
        <app-demo-stage-hero\r
            [eyebrow]="'smartEnrollDemos.demoStage.humanAuthn' | transloco"\r
            [title]="'smartEnrollDemos.liveness.heroLivenessDefault' | transloco"\r
            [subtitle]="'smartEnrollDemos.liveness.heroCapture' | transloco"\r
        />\r
    } @else {\r
    <div class="mb-10">\r
        <h2 class="text-4xl md:text-5xl font-black tracking-tight text-on-surface mb-2">\r
            @if (step === 'result' && result?.isApiError) {\r
                {{ 'smartEnrollDemos.liveness.errorResultTitle' | transloco }}\r
            } @else if (step === 'result') {\r
                {{ 'smartEnrollDemos.liveness.heroAnalysisComplete' | transloco }}\r
            } @else {\r
                {{ 'smartEnrollDemos.liveness.heroLivenessDefault' | transloco }}\r
            }\r
        </h2>\r
        <p class="text-on-surface-variant font-medium">\r
            @switch (step) {\r
                @case ('capture') {\r
                    {{ 'smartEnrollDemos.liveness.heroCapture' | transloco }}\r
                }\r
                @case ('processing') {\r
                    {{ 'smartEnrollDemos.liveness.heroProcessing' | transloco }}\r
                }\r
                @case ('result') {\r
                    @if (result?.isApiError) {\r
                        {{ result.message }}\r
                    } @else {\r
                        {{ 'smartEnrollDemos.liveness.heroResultComplete' | transloco }}\r
                    }\r
                }\r
            }\r
        </p>\r
    </div>\r
    }\r
\r
    @if (step === 'capture') {\r
        @if (error) {\r
            <div class="mb-6 px-4 py-3 bg-error-container/20 border border-error/20 rounded-lg flex items-start gap-3 max-w-3xl">\r
                <span class="material-symbols-outlined text-error text-base shrink-0 mt-0.5">error_outline</span>\r
                <span class="text-sm text-on-error-container leading-5">{{ error }}</span>\r
            </div>\r
        }\r
        <app-demo-stage-card\r
            number="01"\r
            [title]="'smartEnrollDemos.demoStage.captureTitle' | transloco"\r
            [help]="'smartEnrollDemos.demoStage.captureHelp' | transloco"\r
        >\r
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">\r
            <div class="lg:col-span-7 bg-surface-container-low rounded-xl p-6 relative overflow-hidden">\r
                <app-demo-choose-one-callout [extraClass]="'relative z-10 mb-4'" [description]="'smartEnrollDemos.liveness.chooseOneDescription' | transloco" />\r
                <app-demo-scanner-shell>\r
                    <app-face-guided-camera [fillFrame]="true" [disabled]="step !== 'capture'" (captured)="onCapture($event)" (captureError)="error = $event" />\r
                </app-demo-scanner-shell>\r
\r
                <div class="mt-6 grid grid-cols-1 gap-3">\r
                    <app-demo-or-divider />\r
                    <app-demo-capture-option-heading label="B" headingId="liveness-upload-heading" [title]="'smartEnrollDemos.liveness.uploadTitle' | transloco" [subtitle]="'smartEnrollDemos.liveness.uploadSubtitle' | transloco" />\r
                    <app-demo-upload-image-button\r
                        id="btn-upload-image"\r
                        [useNativeInput]="true"\r
                        [loading]="uploadReading"\r
                        [primaryText]="\r
                            uploadReading\r
                                ? ('smartEnrollDemos.liveness.uploadReading' | transloco)\r
                                : ('smartEnrollDemos.liveness.uploadPrimary' | transloco)\r
                        "\r
                        [secondaryText]="\r
                            uploadReading && uploadFileName\r
                                ? uploadFileName\r
                                : ('smartEnrollDemos.liveness.uploadSecondary' | transloco)\r
                        "\r
                        (fileSelected)="onFileUpload($event)"\r
                    />\r
                </div>\r
            </div>\r
\r
            <div class="lg:col-span-5">\r
                <div class="bg-surface-container rounded-xl p-5">\r
                    <h3 class="text-sm font-bold tracking-widest text-on-surface-variant uppercase mb-2 flex items-center gap-2">\r
                        <span class="w-1.5 h-1.5 bg-primary rounded-full"></span>\r
                        {{ 'smartEnrollDemos.liveness.samplesTitle' | transloco }}\r
                    </h3>\r
                    <p class="text-xs text-on-surface-variant mb-4">{{ 'smartEnrollDemos.liveness.samplesDescription' | transloco }}</p>\r
                    <div class="grid grid-cols-3 gap-2">\r
                        @for (sample of sampleImages; track sample.src) {\r
                            <button\r
                                type="button"\r
                                (click)="runSampleImage(sample)"\r
                                class="relative aspect-square rounded-lg overflow-hidden border transition-all p-0 cursor-pointer hover:border-primary/40"\r
                            >\r
                                <img [src]="sample.src" alt="" class="absolute inset-0 w-full h-full object-cover" />\r
                                @if (sample.fail) {\r
                                    <span class="absolute bottom-1 left-1 right-1 rounded bg-black/65 px-1 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-white">\r
                                        {{ 'smartEnrollDemos.common.sampleFailHint' | transloco }}\r
                                    </span>\r
                                }\r
                            </button>\r
                        }\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
        </app-demo-stage-card>\r
    }\r
\r
    @if (step === 'processing') {\r
        <div class="flex flex-col items-center justify-center py-24">\r
            @if (previewUrl) {\r
                <img [src]="previewUrl" alt="" class="w-32 h-32 rounded-full object-cover grayscale opacity-70 mb-8" />\r
            }\r
            <p class="text-lg font-semibold text-on-surface mb-2">{{ 'smartEnrollDemos.liveness.analyzingTitle' | transloco }}</p>\r
            <p class="text-on-surface-variant text-sm font-mono">{{ 'smartEnrollDemos.liveness.engineLine' | transloco }}</p>\r
        </div>\r
    }\r
\r
    @if (step === 'result' && result && !result.isApiError) {\r
        <div class="max-w-xl mx-auto w-full">\r
            <app-demo-sandbox-result-banner />\r
            <div\r
                class="rounded-2xl border p-8 text-center shadow-sm"\r
                [ngClass]="\r
                    result.isLive\r
                        ? 'border-stone-200/90 bg-white dark:border-gray-800 dark:bg-gray-900/70'\r
                        : 'border-red-200/90 bg-white dark:border-red-900/60 dark:bg-gray-900/70'\r
                "\r
            >\r
                <div\r
                    class="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl border"\r
                    [ngClass]="\r
                        result.isLive\r
                            ? 'border-emerald-200/90 bg-emerald-50 text-emerald-700 dark:border-emerald-800 dark:bg-emerald-950/30 dark:text-emerald-300'\r
                            : 'border-red-200/90 bg-red-50 text-red-600 dark:border-red-900/60 dark:bg-red-950/30 dark:text-red-300'\r
                    "\r
                >\r
                    <span class="material-symbols-outlined text-4xl" [style.font-variation-settings]="'\\'FILL\\' 1'">\r
                        {{ result.isLive ? 'verified_user' : 'gpp_bad' }}\r
                    </span>\r
                </div>\r
                <h2 class="text-3xl font-semibold tracking-tight text-stone-950 dark:text-white mb-2">\r
                    {{ (result.isLive ? 'smartEnrollDemos.liveness.liveTitle' : 'smartEnrollDemos.liveness.spoofTitle') | transloco }}\r
                </h2>\r
                <p class="text-sm leading-6 text-stone-500 dark:text-stone-400 mb-8">{{ result.message }}</p>\r
                <div class="grid grid-cols-3 gap-3 mb-8">\r
                    <div class="rounded-xl border border-stone-200 p-4 dark:border-gray-800">\r
                        <p class="text-2xl font-semibold tracking-tight text-stone-950 dark:text-white">\r
                            {{ result.confidence != null ? (result.confidence * 100).toFixed(1) + '%' : '\u2014' }}\r
                        </p>\r
                        <p class="mt-1 text-[11px] font-medium uppercase tracking-[0.18em] text-stone-400 dark:text-stone-500">\r
                            {{ 'smartEnrollDemos.liveness.confidence' | transloco }}\r
                        </p>\r
                    </div>\r
                    <div class="rounded-xl border border-stone-200 p-4 dark:border-gray-800">\r
                        <p\r
                            class="text-2xl font-semibold tracking-tight"\r
                            [ngClass]="result.isLive ? 'text-emerald-700 dark:text-emerald-300' : 'text-red-600 dark:text-red-300'"\r
                        >\r
                            {{ (result.isLive ? 'smartEnrollDemos.liveness.pass' : 'smartEnrollDemos.liveness.fail') | transloco }}\r
                        </p>\r
                        <p class="mt-1 text-[11px] font-medium uppercase tracking-[0.18em] text-stone-400 dark:text-stone-500">\r
                            {{ 'smartEnrollDemos.liveness.verdict' | transloco }}\r
                        </p>\r
                    </div>\r
                    <div class="rounded-xl border border-stone-200 p-4 dark:border-gray-800">\r
                        <p class="text-2xl font-semibold tracking-tight text-stone-950 dark:text-white">\r
                            {{ result.price != null ? '$' + result.price.toFixed(4) : '\u2014' }}\r
                        </p>\r
                        <p class="mt-1 text-[11px] font-medium uppercase tracking-[0.18em] text-stone-400 dark:text-stone-500">\r
                            {{ 'smartEnrollDemos.liveness.cost' | transloco }}\r
                        </p>\r
                    </div>\r
                </div>\r
                <app-demo-result-actions\r
                    [secondaryLabel]="'smartEnrollDemos.liveness.tryAgain' | transloco"\r
                    [primaryLabel]="'smartEnrollDemos.common.backToDemos' | transloco"\r
                    primaryRouterLink="/human-authn/demos"\r
                    (secondary)="reset()"\r
                />\r
            </div>\r
        </div>\r
    }\r
\r
    @if (step === 'result' && result?.isApiError && result) {\r
        <div\r
            class="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-[2px]"\r
            role="dialog"\r
            aria-modal="true"\r
            [attr.aria-labelledby]="'liveness-api-error-title'"\r
        >\r
            <div class="w-full max-w-lg rounded-2xl border border-red-200/80 bg-white p-8 text-center shadow-xl shadow-black/30 dark:border-red-900/60 dark:bg-gray-900">\r
                <div\r
                    class="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl border border-red-200/90 bg-red-50 text-red-600 dark:border-red-900/60 dark:bg-red-950/30 dark:text-red-300"\r
                >\r
                    <span class="material-symbols-outlined text-4xl" [style.font-variation-settings]="'\\'FILL\\' 1'">error</span>\r
                </div>\r
                <h2 id="liveness-api-error-title" class="text-3xl font-semibold tracking-tight text-stone-950 dark:text-white mb-3">\r
                    {{ 'smartEnrollDemos.liveness.errorResultTitle' | transloco }}\r
                </h2>\r
                <p class="text-base leading-7 text-stone-600 dark:text-stone-300 mb-8">{{ result.message }}</p>\r
                <div class="flex flex-col-reverse gap-3 sm:flex-row">\r
                    <button\r
                        type="button"\r
                        (click)="reset()"\r
                        class="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xl border border-stone-200 bg-white px-6 py-3.5 text-base font-semibold text-stone-950 transition hover:bg-stone-50 active:scale-[0.98] dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800"\r
                    >\r
                        <span class="material-symbols-outlined text-xl">refresh</span>\r
                        {{ 'smartEnrollDemos.liveness.tryAgain' | transloco }}\r
                    </button>\r
                    @if (result.isInsufficientCredits) {\r
                        <a\r
                            routerLink="/add-credits"\r
                            class="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-stone-950 px-6 py-3.5 text-base font-semibold text-white transition-opacity hover:opacity-90 active:scale-[0.98] dark:bg-white dark:text-stone-950"\r
                        >\r
                            <span class="material-symbols-outlined text-xl">add_card</span>\r
                            {{ 'smartEnrollDemos.common.addCredits' | transloco }}\r
                        </a>\r
                    }\r
                </div>\r
            </div>\r
        </div>\r
    }\r
\r
    <app-demo-related-docs-section [items]="relatedDocs" />\r
</app-demo-page-shell>\r
`, styles: ['@charset "UTF-8";\n\n/* src/app/modules/smart-enroll/demos/styles/_demos-theme.scss */\n.smart-enroll-demos {\n  --color-surface: 250 250 249;\n  --color-surface-container-lowest: 255 255 255;\n  --color-surface-container-low: 255 255 255;\n  --color-surface-container: 245 245 244;\n  --color-surface-container-high: 231 229 228;\n  --color-surface-container-highest: 214 211 209;\n  --color-surface-bright: 255 255 255;\n  --color-surface-dim: 250 250 249;\n  --color-surface-variant: 231 229 228;\n  --color-surface-tint: 38 66 255;\n  --color-primary: 38 66 255;\n  --color-primary-fixed: 239 246 255;\n  --color-primary-fixed-dim: 219 234 254;\n  --color-primary-container: 219 234 254;\n  --color-on-primary: 255 255 255;\n  --color-on-primary-fixed: 28 25 23;\n  --color-on-primary-fixed-variant: 30 58 138;\n  --color-on-primary-container: 28 25 23;\n  --color-inverse-primary: 59 130 246;\n  --color-secondary: 87 83 78;\n  --color-secondary-fixed: 245 245 244;\n  --color-secondary-fixed-dim: 231 229 228;\n  --color-secondary-container: 231 229 228;\n  --color-on-secondary: 28 25 23;\n  --color-on-secondary-fixed: 28 25 23;\n  --color-on-secondary-fixed-variant: 68 64 60;\n  --color-on-secondary-container: 68 64 60;\n  --color-tertiary: 13 148 136;\n  --color-tertiary-fixed: 204 251 241;\n  --color-tertiary-fixed-dim: 153 246 228;\n  --color-tertiary-container: 204 251 241;\n  --color-on-tertiary: 255 255 255;\n  --color-on-tertiary-fixed: 19 78 74;\n  --color-on-tertiary-fixed-variant: 17 94 89;\n  --color-on-tertiary-container: 19 78 74;\n  --color-background: 250 250 249;\n  --color-on-background: 28 25 23;\n  --color-on-surface: 28 25 23;\n  --color-on-surface-variant: 87 83 78;\n  --color-inverse-surface: 28 25 23;\n  --color-inverse-on-surface: 250 250 249;\n  --color-outline: 168 162 158;\n  --color-outline-variant: 214 211 209;\n  --color-error: 185 28 28;\n  --color-error-container: 254 226 226;\n  --color-on-error: 255 255 255;\n  --color-on-error-container: 127 29 29;\n  --frost: rgb(38 66 255 / 0.12);\n  --frost-variant: rgb(38 66 255 / 0.06);\n  --shadow-ambient: 0 8px 40px rgb(28 25 23 / 0.08);\n  --shadow-float: 0 16px 60px rgb(28 25 23 / 0.12);\n  --shadow-glow: 0 0 40px rgb(38 66 255 / 0.08);\n  --shadow-scan-line: 0 0 15px rgb(38 66 255 / 0.35);\n  --shadow-primary: 0 1px 2px rgb(38 66 255 / 0.12), 0 4px 14px rgb(38 66 255 / 0.16);\n  --shadow-ring-frost: 0 0 0 1px rgb(38 66 255 / 0.12);\n  --bg-primary-gradient:\n    linear-gradient(\n      135deg,\n      #2642ff 0%,\n      #1a2f99 100%);\n  --utility-primary-cta:\n    linear-gradient(\n      135deg,\n      #2642ff 0%,\n      #1a2f99 100%);\n  --utility-primary-cta-color: 255 255 255;\n  --utility-text-gradient-from: 38 66 255;\n  --utility-text-gradient-to: 26 47 153;\n  --utility-scanning-ring-outer: 38 66 255;\n  --utility-scanning-ring-inner: 26 47 153;\n  background-color: rgb(var(--color-surface));\n  color: rgb(var(--color-on-surface));\n  min-height: 100%;\n  width: 100%;\n}\n.smart-enroll-demos .material-symbols-outlined {\n  font-family: "Material Symbols Outlined", sans-serif;\n  font-weight: normal;\n  font-style: normal;\n  line-height: 1;\n  letter-spacing: normal;\n  text-transform: none;\n  display: inline-block;\n  white-space: nowrap;\n  word-wrap: normal;\n  direction: ltr;\n  font-variation-settings:\n    "FILL" 0,\n    "wght" 400,\n    "GRAD" 0,\n    "opsz" 24;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.smart-enroll-demos .glass-panel-dark {\n  background: rgba(255, 255, 255, 0.9);\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  border-bottom: 1px solid rgb(var(--color-outline-variant)/0.35);\n}\n.smart-enroll-demos .scan-line {\n  position: absolute;\n  z-index: 28;\n  pointer-events: none;\n  width: 100%;\n  height: 2px;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgb(var(--color-surface-tint)),\n      transparent);\n  box-shadow: var(--shadow-scan-line);\n  animation: demoScanAnim 3s linear infinite;\n}\n@keyframes demoScanAnim {\n  0% {\n    top: 20%;\n    opacity: 0;\n  }\n  20% {\n    opacity: 1;\n  }\n  80% {\n    opacity: 1;\n  }\n  100% {\n    top: 80%;\n    opacity: 0;\n  }\n}\n.smart-enroll-demos .scanner-corner-tl,\n.smart-enroll-demos .scanner-corner-tr,\n.smart-enroll-demos .scanner-corner-bl,\n.smart-enroll-demos .scanner-corner-br {\n  position: absolute;\n  z-index: 30;\n  pointer-events: none;\n  width: 2rem;\n  height: 2rem;\n  border-color: rgb(var(--color-surface-tint));\n}\n.smart-enroll-demos .scanner-corner-tl {\n  top: 1.5rem;\n  left: 1.5rem;\n  border-top: 2px solid;\n  border-left: 2px solid;\n}\n.smart-enroll-demos .scanner-corner-tr {\n  top: 1.5rem;\n  right: 1.5rem;\n  border-top: 2px solid;\n  border-right: 2px solid;\n}\n.smart-enroll-demos .scanner-corner-bl {\n  bottom: 1.5rem;\n  left: 1.5rem;\n  border-bottom: 2px solid;\n  border-left: 2px solid;\n}\n.smart-enroll-demos .scanner-corner-br {\n  bottom: 1.5rem;\n  right: 1.5rem;\n  border-bottom: 2px solid;\n  border-right: 2px solid;\n}\n.smart-enroll-demos .blueprint-grid {\n  background-image: radial-gradient(rgb(var(--color-primary)/0.45) 0.5px, transparent 0.5px);\n  background-size: 20px 20px;\n}\n.smart-enroll-demos .bg-primary-cta {\n  background: var(--utility-primary-cta);\n  color: rgb(var(--utility-primary-cta-color));\n}\n.smart-enroll-demos .demo-btn-primary {\n  display: inline-flex;\n  width: 100%;\n  min-height: 2.75rem;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  border-radius: 0.75rem;\n  border: 1px solid rgba(28, 25, 23, 0.08);\n  background-color: rgb(28, 25, 23);\n  padding: 0.75rem 1.25rem;\n  font-size: 0.875rem;\n  font-weight: 600;\n  letter-spacing: -0.01em;\n  color: rgb(255, 255, 255);\n  box-shadow: 0 1px 2px rgba(28, 25, 23, 0.06);\n  text-decoration: none;\n  transition:\n    background-color 150ms ease,\n    border-color 150ms ease,\n    transform 100ms ease;\n}\n.smart-enroll-demos .demo-btn-primary:hover:not(:disabled) {\n  background-color: rgb(41, 37, 36);\n  border-color: rgba(28, 25, 23, 0.12);\n}\n.smart-enroll-demos .demo-btn-primary:active:not(:disabled) {\n  transform: scale(0.99);\n}\n.smart-enroll-demos .demo-btn-primary:disabled {\n  cursor: not-allowed;\n  opacity: 0.45;\n}\n.smart-enroll-demos .demo-btn-primary.demo-btn-inline {\n  width: auto;\n  flex: 1 1 0;\n}\n.smart-enroll-demos .demo-btn-secondary {\n  display: inline-flex;\n  width: 100%;\n  min-height: 2.75rem;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  border-radius: 0.75rem;\n  border: 1px solid rgb(231, 229, 228);\n  background-color: rgb(255, 255, 255);\n  padding: 0.75rem 1.25rem;\n  font-size: 0.875rem;\n  font-weight: 600;\n  letter-spacing: -0.01em;\n  color: rgb(28, 25, 23);\n  transition:\n    background-color 150ms ease,\n    border-color 150ms ease,\n    transform 100ms ease;\n}\n.smart-enroll-demos .demo-btn-secondary:hover:not(:disabled) {\n  background-color: rgb(250, 250, 249);\n  border-color: rgb(214, 211, 209);\n}\n.smart-enroll-demos .demo-btn-secondary:active:not(:disabled) {\n  transform: scale(0.99);\n}\n.smart-enroll-demos .demo-btn-secondary:disabled {\n  cursor: not-allowed;\n  opacity: 0.45;\n}\n.smart-enroll-demos .demo-btn-secondary.demo-btn-inline {\n  width: auto;\n  flex: 1 1 0;\n}\n.smart-enroll-demos .shadow-primary {\n  box-shadow: var(--shadow-primary);\n}\n.smart-enroll-demos .shadow-ring-frost {\n  box-shadow: var(--shadow-ring-frost);\n}\n.smart-enroll-demos .shadow-ambient {\n  box-shadow: var(--shadow-ambient);\n}\n.smart-enroll-demos .border-frost {\n  border-color: var(--frost);\n}\n.smart-enroll-demos .scanning-ring {\n  box-shadow: 0 0 20px 2px rgb(var(--utility-scanning-ring-outer)/0.25), inset 0 0 20px 2px rgb(var(--utility-scanning-ring-inner)/0.15);\n}\n.smart-enroll-demos .bg-surface {\n  background-color: rgb(var(--color-surface));\n}\n.smart-enroll-demos .bg-surface-container {\n  background-color: rgb(var(--color-surface-container));\n}\n.smart-enroll-demos .bg-surface-container-low {\n  background-color: rgb(var(--color-surface-container-low));\n}\n.smart-enroll-demos .bg-surface-container-high {\n  background-color: rgb(var(--color-surface-container-high));\n}\n.smart-enroll-demos .bg-surface-container-lowest {\n  background-color: rgb(var(--color-surface-container-lowest));\n}\n.smart-enroll-demos .bg-error-container\\/20 {\n  background-color: rgb(var(--color-error-container)/0.2);\n}\n.smart-enroll-demos .text-on-surface {\n  color: rgb(var(--color-on-surface));\n}\n.smart-enroll-demos .text-on-surface-variant {\n  color: rgb(var(--color-on-surface-variant));\n}\n.smart-enroll-demos .text-on-primary-container {\n  color: rgb(var(--color-on-primary-container));\n}\n.smart-enroll-demos .text-primary {\n  color: rgb(var(--color-primary));\n}\n.smart-enroll-demos .text-error {\n  color: rgb(var(--color-error));\n}\n.smart-enroll-demos .border-outline-variant\\/20 {\n  border-color: rgb(var(--color-outline-variant)/0.2);\n}\n.smart-enroll-demos .border-outline-variant\\/30 {\n  border-color: rgb(var(--color-outline-variant)/0.3);\n}\n.smart-enroll-demos .border-outline-variant\\/15 {\n  border-color: rgb(var(--color-outline-variant)/0.15);\n}\n.smart-enroll-demos .border-outline-variant\\/10 {\n  border-color: rgb(var(--color-outline-variant)/0.1);\n}\n.smart-enroll-demos .border-error\\/20 {\n  border-color: rgb(var(--color-error)/0.2);\n}\n.smart-enroll-demos .border-error {\n  border-color: rgb(var(--color-error));\n}\n.smart-enroll-demos .placeholder-on-surface-variant\\/50::placeholder {\n  color: rgb(var(--color-on-surface-variant)/0.5);\n}\n.smart-enroll-demos .hover\\:bg-surface-container:hover {\n  background-color: rgb(var(--color-surface-container));\n}\n.smart-enroll-demos .focus\\:border-primary\\/60:focus {\n  border-color: rgb(var(--color-primary)/0.6);\n}\n.smart-enroll-demos .hover\\:border-primary\\/40:hover {\n  border-color: rgb(var(--color-primary)/0.4);\n}\n.smart-enroll-demos .ring-primary-20 {\n  box-shadow: 0 0 0 4px rgba(38, 66, 255, 0.2);\n}\n.smart-enroll-demos .bg-primary-10 {\n  background: rgba(38, 66, 255, 0.06);\n}\n.smart-enroll-demos .selected-liveness {\n  border-color: rgb(var(--color-primary)/0.4);\n  background: rgb(var(--color-primary)/0.06);\n}\n.smart-enroll-demos .human-id-liveness-toggle {\n  border-color: rgb(var(--color-outline-variant)/0.3);\n  background: rgb(var(--color-surface-container-low));\n}\n.smart-enroll-demos .human-id-liveness-toggle:hover {\n  border-color: rgb(var(--color-outline-variant)/0.5);\n}\n.smart-enroll-demos .human-id-liveness-toggle--on {\n  border-color: rgb(var(--color-primary)/0.4);\n  background: rgb(var(--color-primary)/0.06);\n}\n.smart-enroll-demos .human-id-liveness-toggle__icon {\n  background: rgb(var(--color-surface-container));\n  color: rgb(var(--color-on-surface-variant));\n}\n.smart-enroll-demos .human-id-liveness-toggle__icon--on {\n  background: rgb(var(--color-primary)/0.15);\n  color: rgb(var(--color-primary));\n}\n.smart-enroll-demos .human-id-liveness-toggle__stage {\n  display: inline-flex;\n  align-items: center;\n  border-radius: 9999px;\n  padding: 0.125rem 0.5rem;\n  font-size: 0.625rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n.smart-enroll-demos .human-id-liveness-toggle__stage--encrypt {\n  background: rgba(245, 158, 11, 0.15);\n  color: rgb(180, 83, 9);\n}\n.smart-enroll-demos .human-id-liveness-toggle__stage--decrypt {\n  background: rgb(var(--color-primary)/0.12);\n  color: rgb(var(--color-primary));\n}\n.smart-enroll-demos .human-id-liveness-toggle__track {\n  background: rgb(var(--color-surface-container-high));\n}\n.smart-enroll-demos .human-id-liveness-toggle__track--on {\n  background: rgb(var(--color-primary));\n}\n.smart-enroll-demos .human-id-liveness-callout {\n  border: 1px solid rgb(var(--color-outline-variant)/0.25);\n  background: rgb(var(--color-surface-container-low));\n  border-radius: 0.75rem;\n  padding: 0.875rem 1rem;\n  font-size: 0.8125rem;\n  line-height: 1.5;\n  color: rgb(var(--color-on-surface-variant));\n}\n.smart-enroll-demos .selected-tolerance {\n  border-color: rgb(var(--color-primary)/0.5);\n  background: rgb(var(--color-primary)/0.08);\n}\n.smart-enroll-demos .demo-range-input {\n  accent-color: rgb(var(--color-primary));\n  height: 0.5rem;\n  cursor: pointer;\n}\n.dark .smart-enroll-demos {\n  --color-surface: 15 23 42;\n  --color-surface-container-lowest: 2 6 23;\n  --color-surface-container-low: 15 23 42;\n  --color-surface-container: 30 41 59;\n  --color-surface-container-high: 51 65 85;\n  --color-surface-container-highest: 71 85 105;\n  --color-surface-bright: 30 41 59;\n  --color-surface-dim: 2 6 23;\n  --color-surface-variant: 51 65 85;\n  --color-surface-tint: 37 99 235;\n  --color-primary: 96 165 250;\n  --color-primary-fixed: 239 246 255;\n  --color-primary-fixed-dim: 191 219 254;\n  --color-primary-container: 37 99 235;\n  --color-on-primary: 255 255 255;\n  --color-on-primary-fixed: 15 23 42;\n  --color-on-primary-fixed-variant: 30 58 138;\n  --color-on-primary-container: 248 250 252;\n  --color-inverse-primary: 59 130 246;\n  --color-secondary: 148 163 184;\n  --color-secondary-fixed: 226 232 240;\n  --color-secondary-fixed-dim: 148 163 184;\n  --color-secondary-container: 51 65 85;\n  --color-on-secondary: 248 250 252;\n  --color-on-secondary-fixed: 15 23 42;\n  --color-on-secondary-fixed-variant: 51 65 85;\n  --color-on-secondary-container: 203 213 225;\n  --color-tertiary: 45 212 191;\n  --color-tertiary-fixed: 204 251 241;\n  --color-tertiary-fixed-dim: 94 234 212;\n  --color-tertiary-container: 13 148 136;\n  --color-on-tertiary: 4 47 46;\n  --color-on-tertiary-fixed: 19 78 74;\n  --color-on-tertiary-fixed-variant: 17 94 89;\n  --color-on-tertiary-container: 248 250 252;\n  --color-background: 15 23 42;\n  --color-on-background: 248 250 252;\n  --color-on-surface: 248 250 252;\n  --color-on-surface-variant: 148 163 184;\n  --color-inverse-surface: 248 250 252;\n  --color-inverse-on-surface: 15 23 42;\n  --color-outline: 100 116 139;\n  --color-outline-variant: 51 65 85;\n  --color-error: 252 165 165;\n  --color-error-container: 127 29 29;\n  --color-on-error: 127 29 29;\n  --color-on-error-container: 254 226 226;\n  --frost: rgb(96 165 250 / 0.12);\n  --frost-variant: rgb(96 165 250 / 0.06);\n  --shadow-ambient: 0 8px 40px rgb(2 6 23 / 0.35);\n  --shadow-float: 0 16px 60px rgb(2 6 23 / 0.45);\n  --shadow-glow: 0 0 40px rgb(37 99 235 / 0.1);\n  --shadow-scan-line: 0 0 15px rgb(96 165 250 / 0.4);\n  --shadow-primary: 0 1px 2px rgb(37 99 235 / 0.12), 0 4px 14px rgb(37 99 235 / 0.16);\n  --shadow-ring-frost: 0 0 0 1px rgb(96 165 250 / 0.12);\n  --utility-primary-cta-color: 255 255 255;\n  --utility-text-gradient-from: 96 165 250;\n  --utility-text-gradient-to: 37 99 235;\n  --utility-scanning-ring-outer: 96 165 250;\n  --utility-scanning-ring-inner: 37 99 235;\n  background-color: rgb(var(--color-surface));\n  color: rgb(var(--color-on-surface));\n}\n.dark .smart-enroll-demos .glass-panel-dark {\n  background: rgb(var(--color-surface-container)/0.85);\n  border-bottom-color: rgb(var(--color-outline-variant)/0.35);\n}\n.dark .smart-enroll-demos .demo-btn-primary {\n  border-color: rgba(255, 255, 255, 0.1);\n  background-color: rgb(248, 250, 252);\n  color: rgb(15, 23, 42);\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);\n}\n.dark .smart-enroll-demos .demo-btn-primary:hover:not(:disabled) {\n  background-color: rgb(226, 232, 240);\n  border-color: rgba(255, 255, 255, 0.15);\n}\n.dark .smart-enroll-demos .demo-btn-secondary {\n  border-color: rgb(var(--color-outline-variant));\n  background-color: rgb(var(--color-surface-container));\n  color: rgb(var(--color-on-surface));\n}\n.dark .smart-enroll-demos .demo-btn-secondary:hover:not(:disabled) {\n  background-color: rgb(var(--color-surface-container-high));\n  border-color: rgb(var(--color-outline));\n}\n.dark .smart-enroll-demos .human-id-liveness-toggle__stage--encrypt {\n  background: rgba(245, 158, 11, 0.12);\n  color: rgb(251, 191, 36);\n}\n.dark .smart-enroll-demos input[type=date] {\n  color-scheme: dark;\n}\n.dark .smart-enroll-demos input[type=date]::-webkit-calendar-picker-indicator {\n  cursor: pointer;\n  opacity: 0.85;\n  filter: invert(1);\n}\n.smart-enroll-demos-hub .demo-card,\n.human-authn-demos-hub .demo-card {\n  transition: all 0.3s;\n}\n.smart-enroll-demos-hub .demo-card:hover,\n.human-authn-demos-hub .demo-card:hover {\n  border-color: rgba(96, 165, 250, 0.35);\n  background: rgba(255, 255, 255, 0.02);\n  box-shadow: 0 0 0 1px rgba(96, 165, 250, 0.12);\n}\n.dark .smart-enroll-demos-hub .demo-card:hover,\n.dark .human-authn-demos-hub .demo-card:hover {\n  border-color: rgba(96, 165, 250, 0.35);\n  background: rgba(30, 41, 59, 0.5);\n  box-shadow: 0 0 0 1px rgba(96, 165, 250, 0.12);\n}\n/*# sourceMappingURL=_demos-theme.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LivenessDemoComponent, { className: "LivenessDemoComponent", filePath: "src/app/modules/smart-enroll/demos/pages/liveness/liveness-demo.component.ts", lineNumber: 90 });
})();
export {
  LivenessDemoComponent
};
//# sourceMappingURL=chunk-NP22OOKB.js.map
