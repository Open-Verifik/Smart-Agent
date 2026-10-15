import {
  HumanIdJsonKeyValueFieldComponent,
  HumanIdLivenessToggleComponent,
  HumanIdStructuredResultComponent
} from "./chunk-S4E7QXO2.js";
import "./chunk-IQYQUAUX.js";
import "./chunk-Q7ZENBRV.js";
import {
  DemoCaptureOptionHeadingComponent,
  DemoChooseOneCalloutComponent,
  DemoOrDividerComponent,
  FaceGuidedCameraComponent
} from "./chunk-DCFVZDVI.js";
import {
  DemoUploadImageButtonComponent
} from "./chunk-TDKQRHA6.js";
import "./chunk-I4NQXRI6.js";
import {
  DemoRelatedDocsSectionComponent
} from "./chunk-QCUB3VMU.js";
import {
  BiometricsDemoApiService,
  DEMO_HUMANID_PRIVATE_DATA_DEFAULT,
  DemoPageShellComponent,
  fileToBase64,
  getDemoOs,
  isLivenessApiErrorCode,
  translateLivenessApiError
} from "./chunk-QDU3MPYG.js";
import "./chunk-45PTEIW3.js";
import "./chunk-B4YUVLJ7.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  RequiredValidator,
  ɵNgNoValidate
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
  ViewChild,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
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
  __spreadValues
} from "./chunk-F5M2C4EZ.js";

// src/app/modules/smart-enroll/demos/pages/humanid-create-qr/humanid-create-qr-demo.component.ts
var _c0 = ["publicDataField"];
var _c1 = ["metadataField"];
var _c2 = ["fileInput"];
function HumanidCreateQrDemoComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 6);
  }
}
function HumanidCreateQrDemoComponent_Conditional_9_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "app-demo-choose-one-callout", 34);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275element(2, "app-demo-capture-option-heading", 35);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementStart(5, "app-face-guided-camera", 36);
    \u0275\u0275listener("captured", function HumanidCreateQrDemoComponent_Conditional_9_Conditional_26_Template_app_face_guided_camera_captured_5_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onCapture($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "app-demo-or-divider")(7, "app-demo-capture-option-heading", 37);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275elementStart(10, "app-demo-upload-image-button", 38);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275pipe(12, "transloco");
    \u0275\u0275listener("clicked", function HumanidCreateQrDemoComponent_Conditional_9_Conditional_26_Template_app_demo_upload_image_button_clicked_10_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.triggerFaceUpload());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 39, 2);
    \u0275\u0275listener("change", function HumanidCreateQrDemoComponent_Conditional_9_Conditional_26_Template_input_change_13_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onFile($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("description", \u0275\u0275pipeBind1(1, 7, "smartEnrollDemos.humanidCreateQr.chooseOneDescription"));
    \u0275\u0275advance(2);
    \u0275\u0275property("title", \u0275\u0275pipeBind1(3, 9, "smartEnrollDemos.humanidCreateQr.cameraTitle"))("subtitle", \u0275\u0275pipeBind1(4, 11, "smartEnrollDemos.humanidCreateQr.cameraSubtitle"));
    \u0275\u0275advance(5);
    \u0275\u0275property("title", \u0275\u0275pipeBind1(8, 13, "smartEnrollDemos.humanidCreateQr.uploadTitle"))("subtitle", \u0275\u0275pipeBind1(9, 15, "smartEnrollDemos.humanidCreateQr.uploadSubtitle"));
    \u0275\u0275advance(3);
    \u0275\u0275property("primaryText", \u0275\u0275pipeBind1(11, 17, "smartEnrollDemos.humanidCreateQr.uploadPrimary"))("secondaryText", \u0275\u0275pipeBind1(12, 19, "smartEnrollDemos.common.jpegPngGallery"));
  }
}
function HumanidCreateQrDemoComponent_Conditional_9_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "img", 40);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275elementStart(2, "button", 41);
    \u0275\u0275listener("click", function HumanidCreateQrDemoComponent_Conditional_9_Conditional_27_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.clearFace());
    });
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.facePreview, \u0275\u0275sanitizeUrl)("alt", \u0275\u0275pipeBind1(1, 3, "smartEnrollDemos.humanidCreateQr.facePreviewAlt"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 5, "smartEnrollDemos.humanidCreateQr.changeFaceImage"));
  }
}
function HumanidCreateQrDemoComponent_Conditional_9_For_64_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 42);
    \u0275\u0275listener("click", function HumanidCreateQrDemoComponent_Conditional_9_For_64_Template_button_click_0_listener() {
      const opt_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.tolerance = opt_r6);
    });
    \u0275\u0275elementStart(1, "span", 43);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const opt_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selected-tolerance", ctx_r1.tolerance === opt_r6);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(opt_r6);
  }
}
function HumanidCreateQrDemoComponent_Conditional_9_Conditional_71_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 44);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, "smartEnrollDemos.humanidCreateQr.errorLivenessFailedTitle"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.error);
  }
}
function HumanidCreateQrDemoComponent_Conditional_9_Conditional_71_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.error, " ");
  }
}
function HumanidCreateQrDemoComponent_Conditional_9_Conditional_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275template(1, HumanidCreateQrDemoComponent_Conditional_9_Conditional_71_Conditional_1_Template, 5, 4)(2, HumanidCreateQrDemoComponent_Conditional_9_Conditional_71_Conditional_2_Template, 1, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isLivenessError(ctx_r1.errorCode) ? 1 : 2);
  }
}
function HumanidCreateQrDemoComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 11);
    \u0275\u0275listener("submit", function HumanidCreateQrDemoComponent_Conditional_9_Template_form_submit_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submit($event));
    });
    \u0275\u0275elementStart(1, "section", 12)(2, "div")(3, "label", 13);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementStart(6, "span", 14);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "input", 15);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275twoWayListener("ngModelChange", function HumanidCreateQrDemoComponent_Conditional_9_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.identifier, $event) || (ctx_r1.identifier = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "app-human-id-json-key-value-field", 16, 0);
    \u0275\u0275pipe(13, "transloco");
    \u0275\u0275pipe(14, "transloco");
    \u0275\u0275twoWayListener("valueChange", function HumanidCreateQrDemoComponent_Conditional_9_Template_app_human_id_json_key_value_field_valueChange_11_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.publicData, $event) || (ctx_r1.publicData = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "app-human-id-json-key-value-field", 16, 1);
    \u0275\u0275pipe(17, "transloco");
    \u0275\u0275pipe(18, "transloco");
    \u0275\u0275twoWayListener("valueChange", function HumanidCreateQrDemoComponent_Conditional_9_Template_app_human_id_json_key_value_field_valueChange_15_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.metadata, $event) || (ctx_r1.metadata = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "section", 12)(20, "p", 17);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "transloco");
    \u0275\u0275elementStart(23, "span", 14);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(26, HumanidCreateQrDemoComponent_Conditional_9_Conditional_26_Template, 15, 21)(27, HumanidCreateQrDemoComponent_Conditional_9_Conditional_27_Template, 5, 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "section", 12)(29, "header", 18)(30, "span", 19);
    \u0275\u0275text(31, "3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div")(33, "h3", 20);
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "p", 21);
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(39, "p", 22);
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "app-human-id-liveness-toggle", 23);
    \u0275\u0275pipe(43, "transloco");
    \u0275\u0275pipe(44, "transloco");
    \u0275\u0275pipe(45, "transloco");
    \u0275\u0275pipe(46, "transloco");
    \u0275\u0275pipe(47, "transloco");
    \u0275\u0275listener("enabledChange", function HumanidCreateQrDemoComponent_Conditional_9_Template_app_human_id_liveness_toggle_enabledChange_42_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.livenessDetectionPriorCreation = $event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "app-human-id-liveness-toggle", 24);
    \u0275\u0275pipe(49, "transloco");
    \u0275\u0275pipe(50, "transloco");
    \u0275\u0275pipe(51, "transloco");
    \u0275\u0275pipe(52, "transloco");
    \u0275\u0275pipe(53, "transloco");
    \u0275\u0275pipe(54, "transloco");
    \u0275\u0275listener("enabledChange", function HumanidCreateQrDemoComponent_Conditional_9_Template_app_human_id_liveness_toggle_enabledChange_48_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.requireLiveness = $event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "div")(56, "p", 25);
    \u0275\u0275text(57);
    \u0275\u0275pipe(58, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "p", 26);
    \u0275\u0275text(60);
    \u0275\u0275pipe(61, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "div", 27);
    \u0275\u0275repeaterCreate(63, HumanidCreateQrDemoComponent_Conditional_9_For_64_Template, 3, 3, "button", 28, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(65, "div")(66, "label", 29);
    \u0275\u0275text(67);
    \u0275\u0275pipe(68, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "input", 30);
    \u0275\u0275pipe(70, "transloco");
    \u0275\u0275twoWayListener("ngModelChange", function HumanidCreateQrDemoComponent_Conditional_9_Template_input_ngModelChange_69_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.password, $event) || (ctx_r1.password = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(71, HumanidCreateQrDemoComponent_Conditional_9_Conditional_71_Template, 3, 1, "div", 31);
    \u0275\u0275elementStart(72, "button", 32)(73, "span", 33);
    \u0275\u0275text(74, "qr_code_2");
    \u0275\u0275elementEnd();
    \u0275\u0275text(75);
    \u0275\u0275pipe(76, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(5, 40, "smartEnrollDemos.humanidCreateQr.identifierLabel"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 42, "smartEnrollDemos.common.requiredStar"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.identifier);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(10, 44, "smartEnrollDemos.humanidCreateQr.identifierPlaceholder"));
    \u0275\u0275advance(2);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(13, 46, "smartEnrollDemos.humanidCreateQr.publicDataLabel"))("required", true)("hint", \u0275\u0275pipeBind1(14, 48, "smartEnrollDemos.humanidCreateQr.publicDataHint"));
    \u0275\u0275twoWayProperty("value", ctx_r1.publicData);
    \u0275\u0275advance(4);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(17, 50, "smartEnrollDemos.humanidCreateQr.metadataLabel"))("required", true)("hint", \u0275\u0275pipeBind1(18, 52, "smartEnrollDemos.humanidCreateQr.metadataHint"));
    \u0275\u0275twoWayProperty("value", ctx_r1.metadata);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(22, 54, "smartEnrollDemos.humanidCreateQr.faceImageLabel"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 56, "smartEnrollDemos.common.requiredStar"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.faceB64 ? 26 : 27);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(35, 58, "smartEnrollDemos.humanidCreateQr.step3Title"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(38, 60, "smartEnrollDemos.humanidCreateQr.step3Subtitle"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(41, 62, "smartEnrollDemos.humanidCreateQr.livenessSettingsIntro"));
    \u0275\u0275advance(2);
    \u0275\u0275property("stageLabel", \u0275\u0275pipeBind1(43, 64, "smartEnrollDemos.humanidCreateQr.livenessOnEncryptStage"))("title", \u0275\u0275pipeBind1(44, 66, "smartEnrollDemos.humanidCreateQr.livenessOnEncryptTitle"))("hint", \u0275\u0275pipeBind1(45, 68, "smartEnrollDemos.humanidCreateQr.livenessOnEncryptHint"))("enabled", ctx_r1.livenessDetectionPriorCreation)("onLabel", \u0275\u0275pipeBind1(46, 70, "smartEnrollDemos.humanidCreateQr.unlockLivenessOn"))("offLabel", \u0275\u0275pipeBind1(47, 72, "smartEnrollDemos.humanidCreateQr.unlockLivenessOff"));
    \u0275\u0275advance(6);
    \u0275\u0275property("stageLabel", \u0275\u0275pipeBind1(49, 74, "smartEnrollDemos.humanidCreateQr.livenessOnDecryptStage"))("title", \u0275\u0275pipeBind1(50, 76, "smartEnrollDemos.humanidCreateQr.livenessOnDecryptTitle"))("hint", \u0275\u0275pipeBind1(51, 78, "smartEnrollDemos.humanidCreateQr.livenessOnDecryptHint"))("enabled", ctx_r1.requireLiveness)("showRecommended", true)("recommendedLabel", \u0275\u0275pipeBind1(52, 80, "smartEnrollDemos.humanidCreateQr.recommendedBadge"))("onLabel", \u0275\u0275pipeBind1(53, 82, "smartEnrollDemos.humanidCreateQr.unlockLivenessOn"))("offLabel", \u0275\u0275pipeBind1(54, 84, "smartEnrollDemos.humanidCreateQr.unlockLivenessOff"));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(58, 86, "smartEnrollDemos.humanidCreateQr.unlockToleranceTitle"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(61, 88, "smartEnrollDemos.humanidCreateQr.unlockToleranceHint"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.toleranceOptions);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(68, 90, "smartEnrollDemos.humanidCreateQr.passwordOptionalLabel"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.password);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(70, 92, "smartEnrollDemos.humanidCreateQr.passwordPlaceholder"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.error ? 71 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.faceB64);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(76, 94, "smartEnrollDemos.humanidCreateQr.submitCta"), " ");
  }
}
function HumanidCreateQrDemoComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "div", 45);
    \u0275\u0275elementStart(2, "p", 44);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "smartEnrollDemos.humanidCreateQr.processing"));
  }
}
function HumanidCreateQrDemoComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-human-id-structured-result", 46);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275listener("createAnother", function HumanidCreateQrDemoComponent_Conditional_11_Template_app_human_id_structured_result_createAnother_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.reset());
    })("backToDemos", function HumanidCreateQrDemoComponent_Conditional_11_Template_app_human_id_structured_result_backToDemos_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.backToDemos());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("result", ctx_r1.result)("zelfQrPngDataUrl", ctx_r1.qrDataUrl)("successTitle", \u0275\u0275pipeBind1(1, 5, "smartEnrollDemos.humanidCreateQr.resultSuccessTitle"))("successDescription", \u0275\u0275pipeBind1(2, 7, "smartEnrollDemos.humanidCreateQr.resultSuccessDescription"))("createAnotherLabel", \u0275\u0275pipeBind1(3, 9, "smartEnrollDemos.common.createAnother"));
  }
}
var DOCS_BASE = "https://docs.verifik.co";
var RELATED_DOC_HREFS = [
  `${DOCS_BASE}/biometrics/humanID-encrypt-qr-code`,
  `${DOCS_BASE}/biometrics/humanID-encrypt`,
  `${DOCS_BASE}/biometrics/humanID-decrypt`,
  `${DOCS_BASE}/biometrics/humanID-preview`,
  `${DOCS_BASE}/biometrics/liveness`
];
var RELATED_DOC_BADGE_MUTED = [false, false, false, false, false];
var HumanidCreateQrDemoComponent = class _HumanidCreateQrDemoComponent {
  constructor() {
    this.authChecked = false;
    this.step = "form";
    this.identifier = "";
    this.livenessDetectionPriorCreation = false;
    this.requireLiveness = true;
    this.tolerance = "HARDENED";
    this.facePreview = null;
    this.faceB64 = null;
    this.publicData = { name: "Jane Doe", documentNumber: "12345678" };
    this.metadata = __spreadValues({}, DEMO_HUMANID_PRIVATE_DATA_DEFAULT);
    this.password = "";
    this.result = null;
    this.qrDataUrl = null;
    this.error = null;
    this.errorCode = null;
    this.relatedDocs = [];
    this.toleranceOptions = ["SOFT", "REGULAR", "HARDENED"];
    this._api = inject(BiometricsDemoApiService);
    this._cdr = inject(ChangeDetectorRef);
    this._transloco = inject(TranslocoService);
    this._router = inject(Router);
  }
  ngOnInit() {
    if (!this._api.ensureAuthenticated()) {
      this.authChecked = true;
      return;
    }
    this.authChecked = true;
    this.relatedDocs = this.buildRelatedDocs();
  }
  onFile(event) {
    const file = event.target.files?.[0];
    if (!file)
      return;
    void fileToBase64(file).then((b64) => {
      this.faceB64 = b64;
      this.facePreview = URL.createObjectURL(file);
      this._cdr.markForCheck();
    });
  }
  onCapture(payload) {
    this.facePreview = payload.dataUrl;
    this.faceB64 = payload.base64;
    this._cdr.markForCheck();
  }
  clearFace() {
    this.faceB64 = null;
    this.facePreview = null;
    this._cdr.markForCheck();
  }
  triggerFaceUpload() {
    this.fileInput?.nativeElement.click();
  }
  submit(event) {
    event.preventDefault();
    if (!this._api.ensureAuthenticated() || !this.faceB64)
      return;
    const pub = this.publicDataField?.commitJsonIfNeeded();
    if (pub == null) {
      this.error = this._transloco.translate("smartEnrollDemos.humanidCreateQr.errorPublicDataJson");
      this._cdr.markForCheck();
      return;
    }
    const meta = this.metadataField?.commitJsonIfNeeded();
    if (meta == null) {
      this.error = this._transloco.translate("smartEnrollDemos.humanidCreateQr.errorMetadataJson");
      this._cdr.markForCheck();
      return;
    }
    if (Object.keys(pub).length === 0 || Object.keys(meta).length === 0) {
      this.error = this._transloco.translate("smartEnrollDemos.humanidCreateQr.errorKeysRequired");
      this._cdr.markForCheck();
      return;
    }
    this.step = "processing";
    this.error = null;
    this.errorCode = null;
    this._cdr.markForCheck();
    this._api.createHumanIdQr({
      publicData: pub,
      faceBase64: this.faceB64,
      metadata: meta,
      os: getDemoOs(),
      identifier: this.identifier,
      livenessDetectionPriorCreation: this.livenessDetectionPriorCreation,
      requireLiveness: this.requireLiveness,
      tolerance: this.tolerance,
      password: this.password || void 0,
      includeCost: true
    }).subscribe({
      next: (data) => {
        const envelope = data;
        const innerData = envelope?.["data"] ?? envelope;
        this.qrDataUrl = typeof innerData?.["humanIDQR"] === "string" ? innerData["humanIDQR"] : null;
        this.result = envelope;
        this.step = "result";
        this._cdr.markForCheck();
      },
      error: (err) => {
        this.errorCode = err.code ?? null;
        this.error = translateLivenessApiError((key) => this._transloco.translate(key), err);
        this.step = "form";
        this._cdr.markForCheck();
      }
    });
  }
  isLivenessError(code) {
    return isLivenessApiErrorCode(code);
  }
  reset() {
    this.step = "form";
    this.faceB64 = null;
    this.facePreview = null;
    this.result = null;
    this.qrDataUrl = null;
    this.error = null;
    this.errorCode = null;
    this.publicData = { name: "Jane Doe", documentNumber: "12345678" };
    this.metadata = __spreadValues({}, DEMO_HUMANID_PRIVATE_DATA_DEFAULT);
    this._cdr.markForCheck();
  }
  backToDemos() {
    void this._router.navigate(["/smart-enroll/demos"]);
  }
  buildRelatedDocs() {
    return RELATED_DOC_HREFS.map((href, i) => ({
      href,
      title: this._transloco.translate(`smartEnrollDemos.humanidCreateQr.relatedDocs.${i}.title`),
      description: this._transloco.translate(`smartEnrollDemos.humanidCreateQr.relatedDocs.${i}.description`),
      badge: this._transloco.translate(`smartEnrollDemos.humanidCreateQr.relatedDocs.${i}.badge`),
      badgeMuted: RELATED_DOC_BADGE_MUTED[i]
    }));
  }
  static {
    this.\u0275fac = function HumanidCreateQrDemoComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HumanidCreateQrDemoComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HumanidCreateQrDemoComponent, selectors: [["app-humanid-create-qr-demo"]], viewQuery: function HumanidCreateQrDemoComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
        \u0275\u0275viewQuery(_c1, 5);
        \u0275\u0275viewQuery(_c2, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.publicDataField = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.metadataField = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.fileInput = _t.first);
      }
    }, decls: 13, vars: 8, consts: [["publicDataField", ""], ["metadataField", ""], ["fileInput", ""], [1, "mb-8", "mt-6"], [1, "text-3xl", "font-black", "tracking-tight", "text-on-surface", "mb-2"], [1, "text-on-surface-variant"], [1, "h-60", "rounded-xl", "bg-surface-container-high", "animate-pulse"], [1, "space-y-6"], [1, "flex", "flex-col", "items-center", "justify-center", "py-20", "gap-4"], [3, "result", "zelfQrPngDataUrl", "successTitle", "successDescription", "createAnotherLabel"], [3, "items"], [1, "space-y-6", 3, "submit"], [1, "rounded-2xl", "border", "border-outline-variant/25", "bg-surface-container-low/40", "p-5", "sm:p-6", "space-y-5"], ["for", "hid-qr-identifier", 1, "block", "text-sm", "font-semibold", "text-on-surface", "mb-1.5"], [1, "text-error"], ["id", "hid-qr-identifier", "type", "text", "required", "", "name", "identifier", 1, "w-full", "bg-surface-container-low", "border", "border-outline-variant/30", "rounded-lg", "px-4", "py-3", "text-on-surface", "text-sm", "focus:outline-none", "focus:border-primary/60", 3, "ngModelChange", "ngModel", "placeholder"], [3, "valueChange", "label", "required", "hint", "value"], [1, "text-sm", "font-semibold", "text-on-surface"], [1, "flex", "items-start", "gap-3"], [1, "flex", "h-8", "w-8", "shrink-0", "items-center", "justify-center", "rounded-lg", "bg-primary/15", "text-sm", "font-bold", "text-primary"], [1, "text-base", "font-bold", "text-on-surface"], [1, "text-sm", "text-on-surface-variant"], [1, "human-id-liveness-callout"], ["stage", "encrypt", 3, "enabledChange", "stageLabel", "title", "hint", "enabled", "onLabel", "offLabel"], ["stage", "decrypt", 3, "enabledChange", "stageLabel", "title", "hint", "enabled", "showRecommended", "recommendedLabel", "onLabel", "offLabel"], [1, "text-sm", "font-semibold", "mb-1"], [1, "text-xs", "text-on-surface-variant", "mb-3"], [1, "grid", "grid-cols-1", "sm:grid-cols-3", "gap-2"], ["type", "button", 1, "text-left", "rounded-xl", "border", "px-3", "py-2.5", 3, "selected-tolerance"], ["for", "hid-qr-pw", 1, "block", "text-sm", "font-semibold", "mb-1.5"], ["id", "hid-qr-pw", "type", "text", "name", "password", 1, "w-full", "bg-surface-container-low", "border", "border-outline-variant/30", "rounded-lg", "px-4", "py-3", "text-sm", "focus:outline-none", "focus:border-primary/60", 3, "ngModelChange", "ngModel", "placeholder"], [1, "px-4", "py-3", "bg-error-container/20", "border", "border-error/20", "rounded-lg", "text-sm", "text-error"], ["type", "submit", 1, "demo-btn-primary", 3, "disabled"], ["aria-hidden", "true", 1, "material-symbols-outlined", "text-lg"], [3, "description"], ["label", "A", "id", "humanid-create-qr-camera-heading", 3, "title", "subtitle"], [3, "captured"], ["label", "B", "id", "humanid-create-qr-upload-heading", 3, "title", "subtitle"], [3, "clicked", "primaryText", "secondaryText"], ["type", "file", "accept", "image/*", 1, "hidden", 3, "change"], [1, "w-full", "aspect-video", "rounded-xl", "border", "border-frost", "object-cover", "mb-3", 3, "src", "alt"], ["type", "button", 1, "text-sm", "text-primary", "underline", 3, "click"], ["type", "button", 1, "text-left", "rounded-xl", "border", "px-3", "py-2.5", 3, "click"], [1, "text-sm", "font-semibold"], [1, "font-semibold"], [1, "w-12", "h-12", "border-2", "border-primary", "border-t-transparent", "rounded-full", "animate-spin"], [3, "createAnother", "backToDemos", "result", "zelfQrPngDataUrl", "successTitle", "successDescription", "createAnotherLabel"]], template: function HumanidCreateQrDemoComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-demo-page-shell")(1, "div", 3)(2, "h2", 4);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 5);
        \u0275\u0275text(6);
        \u0275\u0275pipe(7, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(8, HumanidCreateQrDemoComponent_Conditional_8_Template, 1, 0, "div", 6)(9, HumanidCreateQrDemoComponent_Conditional_9_Template, 77, 96, "form", 7)(10, HumanidCreateQrDemoComponent_Conditional_10_Template, 5, 3, "div", 8)(11, HumanidCreateQrDemoComponent_Conditional_11_Template, 4, 11, "app-human-id-structured-result", 9);
        \u0275\u0275element(12, "app-demo-related-docs-section", 10);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 4, ctx.step === "result" ? "smartEnrollDemos.humanidCreateQr.heroTitleResult" : "smartEnrollDemos.humanidCreateQr.heroTitleForm"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 6, "smartEnrollDemos.humanidCreateQr.heroSubtitle"));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.authChecked ? 8 : ctx.step === "form" ? 9 : ctx.step === "processing" ? 10 : 11);
        \u0275\u0275advance(4);
        \u0275\u0275property("items", ctx.relatedDocs);
      }
    }, dependencies: [
      CommonModule,
      FormsModule,
      \u0275NgNoValidate,
      DefaultValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      RequiredValidator,
      NgModel,
      NgForm,
      TranslocoModule,
      TranslocoPipe,
      DemoPageShellComponent,
      DemoRelatedDocsSectionComponent,
      DemoChooseOneCalloutComponent,
      DemoCaptureOptionHeadingComponent,
      FaceGuidedCameraComponent,
      DemoOrDividerComponent,
      DemoUploadImageButtonComponent,
      HumanIdJsonKeyValueFieldComponent,
      HumanIdLivenessToggleComponent,
      HumanIdStructuredResultComponent
    ], styles: ['@charset "UTF-8";\n\n\n\n.smart-enroll-demos[_ngcontent-%COMP%] {\n  --color-surface: 250 250 249;\n  --color-surface-container-lowest: 255 255 255;\n  --color-surface-container-low: 255 255 255;\n  --color-surface-container: 245 245 244;\n  --color-surface-container-high: 231 229 228;\n  --color-surface-container-highest: 214 211 209;\n  --color-surface-bright: 255 255 255;\n  --color-surface-dim: 250 250 249;\n  --color-surface-variant: 231 229 228;\n  --color-surface-tint: 38 66 255;\n  --color-primary: 38 66 255;\n  --color-primary-fixed: 239 246 255;\n  --color-primary-fixed-dim: 219 234 254;\n  --color-primary-container: 219 234 254;\n  --color-on-primary: 255 255 255;\n  --color-on-primary-fixed: 28 25 23;\n  --color-on-primary-fixed-variant: 30 58 138;\n  --color-on-primary-container: 28 25 23;\n  --color-inverse-primary: 59 130 246;\n  --color-secondary: 87 83 78;\n  --color-secondary-fixed: 245 245 244;\n  --color-secondary-fixed-dim: 231 229 228;\n  --color-secondary-container: 231 229 228;\n  --color-on-secondary: 28 25 23;\n  --color-on-secondary-fixed: 28 25 23;\n  --color-on-secondary-fixed-variant: 68 64 60;\n  --color-on-secondary-container: 68 64 60;\n  --color-tertiary: 13 148 136;\n  --color-tertiary-fixed: 204 251 241;\n  --color-tertiary-fixed-dim: 153 246 228;\n  --color-tertiary-container: 204 251 241;\n  --color-on-tertiary: 255 255 255;\n  --color-on-tertiary-fixed: 19 78 74;\n  --color-on-tertiary-fixed-variant: 17 94 89;\n  --color-on-tertiary-container: 19 78 74;\n  --color-background: 250 250 249;\n  --color-on-background: 28 25 23;\n  --color-on-surface: 28 25 23;\n  --color-on-surface-variant: 87 83 78;\n  --color-inverse-surface: 28 25 23;\n  --color-inverse-on-surface: 250 250 249;\n  --color-outline: 168 162 158;\n  --color-outline-variant: 214 211 209;\n  --color-error: 185 28 28;\n  --color-error-container: 254 226 226;\n  --color-on-error: 255 255 255;\n  --color-on-error-container: 127 29 29;\n  --frost: rgb(38 66 255 / 0.12);\n  --frost-variant: rgb(38 66 255 / 0.06);\n  --shadow-ambient: 0 8px 40px rgb(28 25 23 / 0.08);\n  --shadow-float: 0 16px 60px rgb(28 25 23 / 0.12);\n  --shadow-glow: 0 0 40px rgb(38 66 255 / 0.08);\n  --shadow-scan-line: 0 0 15px rgb(38 66 255 / 0.35);\n  --shadow-primary: 0 1px 2px rgb(38 66 255 / 0.12), 0 4px 14px rgb(38 66 255 / 0.16);\n  --shadow-ring-frost: 0 0 0 1px rgb(38 66 255 / 0.12);\n  --bg-primary-gradient:\n    linear-gradient(\n      135deg,\n      #2642ff 0%,\n      #1a2f99 100%);\n  --utility-primary-cta:\n    linear-gradient(\n      135deg,\n      #2642ff 0%,\n      #1a2f99 100%);\n  --utility-primary-cta-color: 255 255 255;\n  --utility-text-gradient-from: 38 66 255;\n  --utility-text-gradient-to: 26 47 153;\n  --utility-scanning-ring-outer: 38 66 255;\n  --utility-scanning-ring-inner: 26 47 153;\n  background-color: rgb(var(--color-surface));\n  color: rgb(var(--color-on-surface));\n  min-height: 100%;\n  width: 100%;\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  font-family: "Material Symbols Outlined", sans-serif;\n  font-weight: normal;\n  font-style: normal;\n  line-height: 1;\n  letter-spacing: normal;\n  text-transform: none;\n  display: inline-block;\n  white-space: nowrap;\n  word-wrap: normal;\n  direction: ltr;\n  font-variation-settings:\n    "FILL" 0,\n    "wght" 400,\n    "GRAD" 0,\n    "opsz" 24;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .glass-panel-dark[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.9);\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  border-bottom: 1px solid rgb(var(--color-outline-variant)/0.35);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .scan-line[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 28;\n  pointer-events: none;\n  width: 100%;\n  height: 2px;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgb(var(--color-surface-tint)),\n      transparent);\n  box-shadow: var(--shadow-scan-line);\n  animation: _ngcontent-%COMP%_demoScanAnim 3s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_demoScanAnim {\n  0% {\n    top: 20%;\n    opacity: 0;\n  }\n  20% {\n    opacity: 1;\n  }\n  80% {\n    opacity: 1;\n  }\n  100% {\n    top: 80%;\n    opacity: 0;\n  }\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .scanner-corner-tl[_ngcontent-%COMP%], \n.smart-enroll-demos[_ngcontent-%COMP%]   .scanner-corner-tr[_ngcontent-%COMP%], \n.smart-enroll-demos[_ngcontent-%COMP%]   .scanner-corner-bl[_ngcontent-%COMP%], \n.smart-enroll-demos[_ngcontent-%COMP%]   .scanner-corner-br[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 30;\n  pointer-events: none;\n  width: 2rem;\n  height: 2rem;\n  border-color: rgb(var(--color-surface-tint));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .scanner-corner-tl[_ngcontent-%COMP%] {\n  top: 1.5rem;\n  left: 1.5rem;\n  border-top: 2px solid;\n  border-left: 2px solid;\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .scanner-corner-tr[_ngcontent-%COMP%] {\n  top: 1.5rem;\n  right: 1.5rem;\n  border-top: 2px solid;\n  border-right: 2px solid;\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .scanner-corner-bl[_ngcontent-%COMP%] {\n  bottom: 1.5rem;\n  left: 1.5rem;\n  border-bottom: 2px solid;\n  border-left: 2px solid;\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .scanner-corner-br[_ngcontent-%COMP%] {\n  bottom: 1.5rem;\n  right: 1.5rem;\n  border-bottom: 2px solid;\n  border-right: 2px solid;\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .blueprint-grid[_ngcontent-%COMP%] {\n  background-image: radial-gradient(rgb(var(--color-primary)/0.45) 0.5px, transparent 0.5px);\n  background-size: 20px 20px;\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .bg-primary-cta[_ngcontent-%COMP%] {\n  background: var(--utility-primary-cta);\n  color: rgb(var(--utility-primary-cta-color));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .demo-btn-primary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: 100%;\n  min-height: 2.75rem;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  border-radius: 0.75rem;\n  border: 1px solid rgba(28, 25, 23, 0.08);\n  background-color: rgb(28, 25, 23);\n  padding: 0.75rem 1.25rem;\n  font-size: 0.875rem;\n  font-weight: 600;\n  letter-spacing: -0.01em;\n  color: rgb(255, 255, 255);\n  box-shadow: 0 1px 2px rgba(28, 25, 23, 0.06);\n  text-decoration: none;\n  transition:\n    background-color 150ms ease,\n    border-color 150ms ease,\n    transform 100ms ease;\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .demo-btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: rgb(41, 37, 36);\n  border-color: rgba(28, 25, 23, 0.12);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .demo-btn-primary[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: scale(0.99);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .demo-btn-primary[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n  opacity: 0.45;\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .demo-btn-primary.demo-btn-inline[_ngcontent-%COMP%] {\n  width: auto;\n  flex: 1 1 0;\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .demo-btn-secondary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: 100%;\n  min-height: 2.75rem;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  border-radius: 0.75rem;\n  border: 1px solid rgb(231, 229, 228);\n  background-color: rgb(255, 255, 255);\n  padding: 0.75rem 1.25rem;\n  font-size: 0.875rem;\n  font-weight: 600;\n  letter-spacing: -0.01em;\n  color: rgb(28, 25, 23);\n  transition:\n    background-color 150ms ease,\n    border-color 150ms ease,\n    transform 100ms ease;\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .demo-btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: rgb(250, 250, 249);\n  border-color: rgb(214, 211, 209);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .demo-btn-secondary[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: scale(0.99);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .demo-btn-secondary[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n  opacity: 0.45;\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .demo-btn-secondary.demo-btn-inline[_ngcontent-%COMP%] {\n  width: auto;\n  flex: 1 1 0;\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .shadow-primary[_ngcontent-%COMP%] {\n  box-shadow: var(--shadow-primary);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .shadow-ring-frost[_ngcontent-%COMP%] {\n  box-shadow: var(--shadow-ring-frost);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .shadow-ambient[_ngcontent-%COMP%] {\n  box-shadow: var(--shadow-ambient);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .border-frost[_ngcontent-%COMP%] {\n  border-color: var(--frost);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .scanning-ring[_ngcontent-%COMP%] {\n  box-shadow: 0 0 20px 2px rgb(var(--utility-scanning-ring-outer)/0.25), inset 0 0 20px 2px rgb(var(--utility-scanning-ring-inner)/0.15);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .bg-surface[_ngcontent-%COMP%] {\n  background-color: rgb(var(--color-surface));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .bg-surface-container[_ngcontent-%COMP%] {\n  background-color: rgb(var(--color-surface-container));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .bg-surface-container-low[_ngcontent-%COMP%] {\n  background-color: rgb(var(--color-surface-container-low));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .bg-surface-container-high[_ngcontent-%COMP%] {\n  background-color: rgb(var(--color-surface-container-high));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .bg-surface-container-lowest[_ngcontent-%COMP%] {\n  background-color: rgb(var(--color-surface-container-lowest));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .bg-error-container\\/20[_ngcontent-%COMP%] {\n  background-color: rgb(var(--color-error-container)/0.2);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .text-on-surface[_ngcontent-%COMP%] {\n  color: rgb(var(--color-on-surface));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .text-on-surface-variant[_ngcontent-%COMP%] {\n  color: rgb(var(--color-on-surface-variant));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .text-on-primary-container[_ngcontent-%COMP%] {\n  color: rgb(var(--color-on-primary-container));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .text-primary[_ngcontent-%COMP%] {\n  color: rgb(var(--color-primary));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .text-error[_ngcontent-%COMP%] {\n  color: rgb(var(--color-error));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .border-outline-variant\\/20[_ngcontent-%COMP%] {\n  border-color: rgb(var(--color-outline-variant)/0.2);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .border-outline-variant\\/30[_ngcontent-%COMP%] {\n  border-color: rgb(var(--color-outline-variant)/0.3);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .border-outline-variant\\/15[_ngcontent-%COMP%] {\n  border-color: rgb(var(--color-outline-variant)/0.15);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .border-outline-variant\\/10[_ngcontent-%COMP%] {\n  border-color: rgb(var(--color-outline-variant)/0.1);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .border-error\\/20[_ngcontent-%COMP%] {\n  border-color: rgb(var(--color-error)/0.2);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .border-error[_ngcontent-%COMP%] {\n  border-color: rgb(var(--color-error));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .placeholder-on-surface-variant\\/50[_ngcontent-%COMP%]::placeholder {\n  color: rgb(var(--color-on-surface-variant)/0.5);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .hover\\:bg-surface-container[_ngcontent-%COMP%]:hover {\n  background-color: rgb(var(--color-surface-container));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .focus\\:border-primary\\/60[_ngcontent-%COMP%]:focus {\n  border-color: rgb(var(--color-primary)/0.6);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .hover\\:border-primary\\/40[_ngcontent-%COMP%]:hover {\n  border-color: rgb(var(--color-primary)/0.4);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .ring-primary-20[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 4px rgba(38, 66, 255, 0.2);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .bg-primary-10[_ngcontent-%COMP%] {\n  background: rgba(38, 66, 255, 0.06);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .selected-liveness[_ngcontent-%COMP%] {\n  border-color: rgb(var(--color-primary)/0.4);\n  background: rgb(var(--color-primary)/0.06);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .human-id-liveness-toggle[_ngcontent-%COMP%] {\n  border-color: rgb(var(--color-outline-variant)/0.3);\n  background: rgb(var(--color-surface-container-low));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .human-id-liveness-toggle[_ngcontent-%COMP%]:hover {\n  border-color: rgb(var(--color-outline-variant)/0.5);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .human-id-liveness-toggle--on[_ngcontent-%COMP%] {\n  border-color: rgb(var(--color-primary)/0.4);\n  background: rgb(var(--color-primary)/0.06);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .human-id-liveness-toggle__icon[_ngcontent-%COMP%] {\n  background: rgb(var(--color-surface-container));\n  color: rgb(var(--color-on-surface-variant));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .human-id-liveness-toggle__icon--on[_ngcontent-%COMP%] {\n  background: rgb(var(--color-primary)/0.15);\n  color: rgb(var(--color-primary));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .human-id-liveness-toggle__stage[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  border-radius: 9999px;\n  padding: 0.125rem 0.5rem;\n  font-size: 0.625rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .human-id-liveness-toggle__stage--encrypt[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.15);\n  color: rgb(180, 83, 9);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .human-id-liveness-toggle__stage--decrypt[_ngcontent-%COMP%] {\n  background: rgb(var(--color-primary)/0.12);\n  color: rgb(var(--color-primary));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .human-id-liveness-toggle__track[_ngcontent-%COMP%] {\n  background: rgb(var(--color-surface-container-high));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .human-id-liveness-toggle__track--on[_ngcontent-%COMP%] {\n  background: rgb(var(--color-primary));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .human-id-liveness-callout[_ngcontent-%COMP%] {\n  border: 1px solid rgb(var(--color-outline-variant)/0.25);\n  background: rgb(var(--color-surface-container-low));\n  border-radius: 0.75rem;\n  padding: 0.875rem 1rem;\n  font-size: 0.8125rem;\n  line-height: 1.5;\n  color: rgb(var(--color-on-surface-variant));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .selected-tolerance[_ngcontent-%COMP%] {\n  border-color: rgb(var(--color-primary)/0.5);\n  background: rgb(var(--color-primary)/0.08);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .demo-range-input[_ngcontent-%COMP%] {\n  accent-color: rgb(var(--color-primary));\n  height: 0.5rem;\n  cursor: pointer;\n}\n.dark[_ngcontent-%COMP%]   .smart-enroll-demos[_ngcontent-%COMP%] {\n  --color-surface: 15 23 42;\n  --color-surface-container-lowest: 2 6 23;\n  --color-surface-container-low: 15 23 42;\n  --color-surface-container: 30 41 59;\n  --color-surface-container-high: 51 65 85;\n  --color-surface-container-highest: 71 85 105;\n  --color-surface-bright: 30 41 59;\n  --color-surface-dim: 2 6 23;\n  --color-surface-variant: 51 65 85;\n  --color-surface-tint: 37 99 235;\n  --color-primary: 96 165 250;\n  --color-primary-fixed: 239 246 255;\n  --color-primary-fixed-dim: 191 219 254;\n  --color-primary-container: 37 99 235;\n  --color-on-primary: 255 255 255;\n  --color-on-primary-fixed: 15 23 42;\n  --color-on-primary-fixed-variant: 30 58 138;\n  --color-on-primary-container: 248 250 252;\n  --color-inverse-primary: 59 130 246;\n  --color-secondary: 148 163 184;\n  --color-secondary-fixed: 226 232 240;\n  --color-secondary-fixed-dim: 148 163 184;\n  --color-secondary-container: 51 65 85;\n  --color-on-secondary: 248 250 252;\n  --color-on-secondary-fixed: 15 23 42;\n  --color-on-secondary-fixed-variant: 51 65 85;\n  --color-on-secondary-container: 203 213 225;\n  --color-tertiary: 45 212 191;\n  --color-tertiary-fixed: 204 251 241;\n  --color-tertiary-fixed-dim: 94 234 212;\n  --color-tertiary-container: 13 148 136;\n  --color-on-tertiary: 4 47 46;\n  --color-on-tertiary-fixed: 19 78 74;\n  --color-on-tertiary-fixed-variant: 17 94 89;\n  --color-on-tertiary-container: 248 250 252;\n  --color-background: 15 23 42;\n  --color-on-background: 248 250 252;\n  --color-on-surface: 248 250 252;\n  --color-on-surface-variant: 148 163 184;\n  --color-inverse-surface: 248 250 252;\n  --color-inverse-on-surface: 15 23 42;\n  --color-outline: 100 116 139;\n  --color-outline-variant: 51 65 85;\n  --color-error: 252 165 165;\n  --color-error-container: 127 29 29;\n  --color-on-error: 127 29 29;\n  --color-on-error-container: 254 226 226;\n  --frost: rgb(96 165 250 / 0.12);\n  --frost-variant: rgb(96 165 250 / 0.06);\n  --shadow-ambient: 0 8px 40px rgb(2 6 23 / 0.35);\n  --shadow-float: 0 16px 60px rgb(2 6 23 / 0.45);\n  --shadow-glow: 0 0 40px rgb(37 99 235 / 0.1);\n  --shadow-scan-line: 0 0 15px rgb(96 165 250 / 0.4);\n  --shadow-primary: 0 1px 2px rgb(37 99 235 / 0.12), 0 4px 14px rgb(37 99 235 / 0.16);\n  --shadow-ring-frost: 0 0 0 1px rgb(96 165 250 / 0.12);\n  --utility-primary-cta-color: 255 255 255;\n  --utility-text-gradient-from: 96 165 250;\n  --utility-text-gradient-to: 37 99 235;\n  --utility-scanning-ring-outer: 96 165 250;\n  --utility-scanning-ring-inner: 37 99 235;\n  background-color: rgb(var(--color-surface));\n  color: rgb(var(--color-on-surface));\n}\n.dark[_ngcontent-%COMP%]   .smart-enroll-demos[_ngcontent-%COMP%]   .glass-panel-dark[_ngcontent-%COMP%] {\n  background: rgb(var(--color-surface-container)/0.85);\n  border-bottom-color: rgb(var(--color-outline-variant)/0.35);\n}\n.dark[_ngcontent-%COMP%]   .smart-enroll-demos[_ngcontent-%COMP%]   .demo-btn-primary[_ngcontent-%COMP%] {\n  border-color: rgba(255, 255, 255, 0.1);\n  background-color: rgb(248, 250, 252);\n  color: rgb(15, 23, 42);\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);\n}\n.dark[_ngcontent-%COMP%]   .smart-enroll-demos[_ngcontent-%COMP%]   .demo-btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: rgb(226, 232, 240);\n  border-color: rgba(255, 255, 255, 0.15);\n}\n.dark[_ngcontent-%COMP%]   .smart-enroll-demos[_ngcontent-%COMP%]   .demo-btn-secondary[_ngcontent-%COMP%] {\n  border-color: rgb(var(--color-outline-variant));\n  background-color: rgb(var(--color-surface-container));\n  color: rgb(var(--color-on-surface));\n}\n.dark[_ngcontent-%COMP%]   .smart-enroll-demos[_ngcontent-%COMP%]   .demo-btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: rgb(var(--color-surface-container-high));\n  border-color: rgb(var(--color-outline));\n}\n.dark[_ngcontent-%COMP%]   .smart-enroll-demos[_ngcontent-%COMP%]   .human-id-liveness-toggle__stage--encrypt[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.12);\n  color: rgb(251, 191, 36);\n}\n.dark[_ngcontent-%COMP%]   .smart-enroll-demos[_ngcontent-%COMP%]   input[type=date][_ngcontent-%COMP%] {\n  color-scheme: dark;\n}\n.dark[_ngcontent-%COMP%]   .smart-enroll-demos[_ngcontent-%COMP%]   input[type=date][_ngcontent-%COMP%]::-webkit-calendar-picker-indicator {\n  cursor: pointer;\n  opacity: 0.85;\n  filter: invert(1);\n}\n.smart-enroll-demos-hub[_ngcontent-%COMP%]   .demo-card[_ngcontent-%COMP%], \n.human-authn-demos-hub[_ngcontent-%COMP%]   .demo-card[_ngcontent-%COMP%] {\n  transition: all 0.3s;\n}\n.smart-enroll-demos-hub[_ngcontent-%COMP%]   .demo-card[_ngcontent-%COMP%]:hover, \n.human-authn-demos-hub[_ngcontent-%COMP%]   .demo-card[_ngcontent-%COMP%]:hover {\n  border-color: rgba(96, 165, 250, 0.35);\n  background: rgba(255, 255, 255, 0.02);\n  box-shadow: 0 0 0 1px rgba(96, 165, 250, 0.12);\n}\n.dark[_ngcontent-%COMP%]   .smart-enroll-demos-hub[_ngcontent-%COMP%]   .demo-card[_ngcontent-%COMP%]:hover, \n.dark[_ngcontent-%COMP%]   .human-authn-demos-hub[_ngcontent-%COMP%]   .demo-card[_ngcontent-%COMP%]:hover {\n  border-color: rgba(96, 165, 250, 0.35);\n  background: rgba(30, 41, 59, 0.5);\n  box-shadow: 0 0 0 1px rgba(96, 165, 250, 0.12);\n}\n/*# sourceMappingURL=_demos-theme.css.map */'], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HumanidCreateQrDemoComponent, [{
    type: Component,
    args: [{ selector: "app-humanid-create-qr-demo", standalone: true, imports: [
      CommonModule,
      FormsModule,
      TranslocoModule,
      DemoPageShellComponent,
      DemoRelatedDocsSectionComponent,
      DemoChooseOneCalloutComponent,
      DemoCaptureOptionHeadingComponent,
      FaceGuidedCameraComponent,
      DemoOrDividerComponent,
      DemoUploadImageButtonComponent,
      HumanIdJsonKeyValueFieldComponent,
      HumanIdLivenessToggleComponent,
      HumanIdStructuredResultComponent
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `<app-demo-page-shell>\r
    <div class="mb-8 mt-6">\r
        <h2 class="text-3xl font-black tracking-tight text-on-surface mb-2">\r
            {{ (step === 'result' ? 'smartEnrollDemos.humanidCreateQr.heroTitleResult' : 'smartEnrollDemos.humanidCreateQr.heroTitleForm') | transloco }}\r
        </h2>\r
        <p class="text-on-surface-variant">{{ 'smartEnrollDemos.humanidCreateQr.heroSubtitle' | transloco }}</p>\r
    </div>\r
\r
    @if (!authChecked) {\r
        <div class="h-60 rounded-xl bg-surface-container-high animate-pulse"></div>\r
    } @else if (step === 'form') {\r
        <form class="space-y-6" (submit)="submit($event)">\r
            <section class="rounded-2xl border border-outline-variant/25 bg-surface-container-low/40 p-5 sm:p-6 space-y-5">\r
                <div>\r
                    <label class="block text-sm font-semibold text-on-surface mb-1.5" for="hid-qr-identifier">{{ 'smartEnrollDemos.humanidCreateQr.identifierLabel' | transloco }} <span class="text-error">{{ 'smartEnrollDemos.common.requiredStar' | transloco }}</span></label>\r
                    <input id="hid-qr-identifier" type="text" required [(ngModel)]="identifier" name="identifier" [placeholder]="'smartEnrollDemos.humanidCreateQr.identifierPlaceholder' | transloco" class="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg px-4 py-3 text-on-surface text-sm focus:outline-none focus:border-primary/60" />\r
                </div>\r
                <app-human-id-json-key-value-field #publicDataField [label]="'smartEnrollDemos.humanidCreateQr.publicDataLabel' | transloco" [required]="true" [hint]="'smartEnrollDemos.humanidCreateQr.publicDataHint' | transloco" [(value)]="publicData" />\r
                <app-human-id-json-key-value-field #metadataField [label]="'smartEnrollDemos.humanidCreateQr.metadataLabel' | transloco" [required]="true" [hint]="'smartEnrollDemos.humanidCreateQr.metadataHint' | transloco" [(value)]="metadata" />\r
            </section>\r
\r
            <section class="rounded-2xl border border-outline-variant/25 bg-surface-container-low/40 p-5 sm:p-6 space-y-5">\r
                <p class="text-sm font-semibold text-on-surface">{{ 'smartEnrollDemos.humanidCreateQr.faceImageLabel' | transloco }} <span class="text-error">{{ 'smartEnrollDemos.common.requiredStar' | transloco }}</span></p>\r
                @if (!faceB64) {\r
                    <app-demo-choose-one-callout [description]="'smartEnrollDemos.humanidCreateQr.chooseOneDescription' | transloco" />\r
                    <app-demo-capture-option-heading label="A" id="humanid-create-qr-camera-heading" [title]="'smartEnrollDemos.humanidCreateQr.cameraTitle' | transloco" [subtitle]="'smartEnrollDemos.humanidCreateQr.cameraSubtitle' | transloco" />\r
                    <app-face-guided-camera (captured)="onCapture($event)" />\r
                    <app-demo-or-divider />\r
                    <app-demo-capture-option-heading label="B" id="humanid-create-qr-upload-heading" [title]="'smartEnrollDemos.humanidCreateQr.uploadTitle' | transloco" [subtitle]="'smartEnrollDemos.humanidCreateQr.uploadSubtitle' | transloco" />\r
                    <app-demo-upload-image-button (clicked)="triggerFaceUpload()" [primaryText]="'smartEnrollDemos.humanidCreateQr.uploadPrimary' | transloco" [secondaryText]="'smartEnrollDemos.common.jpegPngGallery' | transloco" />\r
                    <input #fileInput type="file" accept="image/*" class="hidden" (change)="onFile($event)" />\r
                } @else {\r
                    <img [src]="facePreview" [alt]="'smartEnrollDemos.humanidCreateQr.facePreviewAlt' | transloco" class="w-full aspect-video rounded-xl border border-frost object-cover mb-3" />\r
                    <button type="button" (click)="clearFace()" class="text-sm text-primary underline">{{ 'smartEnrollDemos.humanidCreateQr.changeFaceImage' | transloco }}</button>\r
                }\r
            </section>\r
\r
            <section class="rounded-2xl border border-outline-variant/25 bg-surface-container-low/40 p-5 sm:p-6 space-y-5">\r
                <header class="flex items-start gap-3">\r
                    <span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-sm font-bold text-primary">3</span>\r
                    <div>\r
                        <h3 class="text-base font-bold text-on-surface">{{ 'smartEnrollDemos.humanidCreateQr.step3Title' | transloco }}</h3>\r
                        <p class="text-sm text-on-surface-variant">{{ 'smartEnrollDemos.humanidCreateQr.step3Subtitle' | transloco }}</p>\r
                    </div>\r
                </header>\r
\r
                <p class="human-id-liveness-callout">{{ 'smartEnrollDemos.humanidCreateQr.livenessSettingsIntro' | transloco }}</p>\r
\r
                <app-human-id-liveness-toggle\r
                    stage="encrypt"\r
                    [stageLabel]="'smartEnrollDemos.humanidCreateQr.livenessOnEncryptStage' | transloco"\r
                    [title]="'smartEnrollDemos.humanidCreateQr.livenessOnEncryptTitle' | transloco"\r
                    [hint]="'smartEnrollDemos.humanidCreateQr.livenessOnEncryptHint' | transloco"\r
                    [enabled]="livenessDetectionPriorCreation"\r
                    [onLabel]="'smartEnrollDemos.humanidCreateQr.unlockLivenessOn' | transloco"\r
                    [offLabel]="'smartEnrollDemos.humanidCreateQr.unlockLivenessOff' | transloco"\r
                    (enabledChange)="livenessDetectionPriorCreation = $event"\r
                />\r
\r
                <app-human-id-liveness-toggle\r
                    stage="decrypt"\r
                    [stageLabel]="'smartEnrollDemos.humanidCreateQr.livenessOnDecryptStage' | transloco"\r
                    [title]="'smartEnrollDemos.humanidCreateQr.livenessOnDecryptTitle' | transloco"\r
                    [hint]="'smartEnrollDemos.humanidCreateQr.livenessOnDecryptHint' | transloco"\r
                    [enabled]="requireLiveness"\r
                    [showRecommended]="true"\r
                    [recommendedLabel]="'smartEnrollDemos.humanidCreateQr.recommendedBadge' | transloco"\r
                    [onLabel]="'smartEnrollDemos.humanidCreateQr.unlockLivenessOn' | transloco"\r
                    [offLabel]="'smartEnrollDemos.humanidCreateQr.unlockLivenessOff' | transloco"\r
                    (enabledChange)="requireLiveness = $event"\r
                />\r
\r
                <div>\r
                    <p class="text-sm font-semibold mb-1">{{ 'smartEnrollDemos.humanidCreateQr.unlockToleranceTitle' | transloco }}</p>\r
                    <p class="text-xs text-on-surface-variant mb-3">{{ 'smartEnrollDemos.humanidCreateQr.unlockToleranceHint' | transloco }}</p>\r
                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-2">\r
                        @for (opt of toleranceOptions; track opt) {\r
                            <button\r
                                type="button"\r
                                (click)="tolerance = opt"\r
                                class="text-left rounded-xl border px-3 py-2.5"\r
                                [class.selected-tolerance]="tolerance === opt"\r
                            >\r
                                <span class="text-sm font-semibold">{{ opt }}</span>\r
                            </button>\r
                        }\r
                    </div>\r
                </div>\r
                <div>\r
                    <label class="block text-sm font-semibold mb-1.5" for="hid-qr-pw">{{ 'smartEnrollDemos.humanidCreateQr.passwordOptionalLabel' | transloco }}</label>\r
                    <input id="hid-qr-pw" type="text" [(ngModel)]="password" name="password" [placeholder]="'smartEnrollDemos.humanidCreateQr.passwordPlaceholder' | transloco" class="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary/60" />\r
                </div>\r
            </section>\r
\r
            @if (error) {\r
                <div class="px-4 py-3 bg-error-container/20 border border-error/20 rounded-lg text-sm text-error">\r
                    @if (isLivenessError(errorCode)) {\r
                        <p class="font-semibold">{{ 'smartEnrollDemos.humanidCreateQr.errorLivenessFailedTitle' | transloco }}</p>\r
                        <p>{{ error }}</p>\r
                    } @else {\r
                        {{ error }}\r
                    }\r
                </div>\r
            }\r
\r
            <button type="submit" [disabled]="!faceB64" class="demo-btn-primary">\r
                <span class="material-symbols-outlined text-lg" aria-hidden="true">qr_code_2</span>\r
                {{ 'smartEnrollDemos.humanidCreateQr.submitCta' | transloco }}\r
            </button>\r
        </form>\r
    } @else if (step === 'processing') {\r
        <div class="flex flex-col items-center justify-center py-20 gap-4">\r
            <div class="w-12 h-12 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>\r
            <p class="font-semibold">{{ 'smartEnrollDemos.humanidCreateQr.processing' | transloco }}</p>\r
        </div>\r
    } @else {\r
        <app-human-id-structured-result\r
            [result]="result"\r
            [zelfQrPngDataUrl]="qrDataUrl"\r
            [successTitle]="'smartEnrollDemos.humanidCreateQr.resultSuccessTitle' | transloco"\r
            [successDescription]="'smartEnrollDemos.humanidCreateQr.resultSuccessDescription' | transloco"\r
            [createAnotherLabel]="'smartEnrollDemos.common.createAnother' | transloco"\r
            (createAnother)="reset()"\r
            (backToDemos)="backToDemos()"\r
        />\r
    }\r
\r
    <app-demo-related-docs-section [items]="relatedDocs" />\r
</app-demo-page-shell>\r
`, styles: ['@charset "UTF-8";\n\n/* src/app/modules/smart-enroll/demos/styles/_demos-theme.scss */\n.smart-enroll-demos {\n  --color-surface: 250 250 249;\n  --color-surface-container-lowest: 255 255 255;\n  --color-surface-container-low: 255 255 255;\n  --color-surface-container: 245 245 244;\n  --color-surface-container-high: 231 229 228;\n  --color-surface-container-highest: 214 211 209;\n  --color-surface-bright: 255 255 255;\n  --color-surface-dim: 250 250 249;\n  --color-surface-variant: 231 229 228;\n  --color-surface-tint: 38 66 255;\n  --color-primary: 38 66 255;\n  --color-primary-fixed: 239 246 255;\n  --color-primary-fixed-dim: 219 234 254;\n  --color-primary-container: 219 234 254;\n  --color-on-primary: 255 255 255;\n  --color-on-primary-fixed: 28 25 23;\n  --color-on-primary-fixed-variant: 30 58 138;\n  --color-on-primary-container: 28 25 23;\n  --color-inverse-primary: 59 130 246;\n  --color-secondary: 87 83 78;\n  --color-secondary-fixed: 245 245 244;\n  --color-secondary-fixed-dim: 231 229 228;\n  --color-secondary-container: 231 229 228;\n  --color-on-secondary: 28 25 23;\n  --color-on-secondary-fixed: 28 25 23;\n  --color-on-secondary-fixed-variant: 68 64 60;\n  --color-on-secondary-container: 68 64 60;\n  --color-tertiary: 13 148 136;\n  --color-tertiary-fixed: 204 251 241;\n  --color-tertiary-fixed-dim: 153 246 228;\n  --color-tertiary-container: 204 251 241;\n  --color-on-tertiary: 255 255 255;\n  --color-on-tertiary-fixed: 19 78 74;\n  --color-on-tertiary-fixed-variant: 17 94 89;\n  --color-on-tertiary-container: 19 78 74;\n  --color-background: 250 250 249;\n  --color-on-background: 28 25 23;\n  --color-on-surface: 28 25 23;\n  --color-on-surface-variant: 87 83 78;\n  --color-inverse-surface: 28 25 23;\n  --color-inverse-on-surface: 250 250 249;\n  --color-outline: 168 162 158;\n  --color-outline-variant: 214 211 209;\n  --color-error: 185 28 28;\n  --color-error-container: 254 226 226;\n  --color-on-error: 255 255 255;\n  --color-on-error-container: 127 29 29;\n  --frost: rgb(38 66 255 / 0.12);\n  --frost-variant: rgb(38 66 255 / 0.06);\n  --shadow-ambient: 0 8px 40px rgb(28 25 23 / 0.08);\n  --shadow-float: 0 16px 60px rgb(28 25 23 / 0.12);\n  --shadow-glow: 0 0 40px rgb(38 66 255 / 0.08);\n  --shadow-scan-line: 0 0 15px rgb(38 66 255 / 0.35);\n  --shadow-primary: 0 1px 2px rgb(38 66 255 / 0.12), 0 4px 14px rgb(38 66 255 / 0.16);\n  --shadow-ring-frost: 0 0 0 1px rgb(38 66 255 / 0.12);\n  --bg-primary-gradient:\n    linear-gradient(\n      135deg,\n      #2642ff 0%,\n      #1a2f99 100%);\n  --utility-primary-cta:\n    linear-gradient(\n      135deg,\n      #2642ff 0%,\n      #1a2f99 100%);\n  --utility-primary-cta-color: 255 255 255;\n  --utility-text-gradient-from: 38 66 255;\n  --utility-text-gradient-to: 26 47 153;\n  --utility-scanning-ring-outer: 38 66 255;\n  --utility-scanning-ring-inner: 26 47 153;\n  background-color: rgb(var(--color-surface));\n  color: rgb(var(--color-on-surface));\n  min-height: 100%;\n  width: 100%;\n}\n.smart-enroll-demos .material-symbols-outlined {\n  font-family: "Material Symbols Outlined", sans-serif;\n  font-weight: normal;\n  font-style: normal;\n  line-height: 1;\n  letter-spacing: normal;\n  text-transform: none;\n  display: inline-block;\n  white-space: nowrap;\n  word-wrap: normal;\n  direction: ltr;\n  font-variation-settings:\n    "FILL" 0,\n    "wght" 400,\n    "GRAD" 0,\n    "opsz" 24;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.smart-enroll-demos .glass-panel-dark {\n  background: rgba(255, 255, 255, 0.9);\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  border-bottom: 1px solid rgb(var(--color-outline-variant)/0.35);\n}\n.smart-enroll-demos .scan-line {\n  position: absolute;\n  z-index: 28;\n  pointer-events: none;\n  width: 100%;\n  height: 2px;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgb(var(--color-surface-tint)),\n      transparent);\n  box-shadow: var(--shadow-scan-line);\n  animation: demoScanAnim 3s linear infinite;\n}\n@keyframes demoScanAnim {\n  0% {\n    top: 20%;\n    opacity: 0;\n  }\n  20% {\n    opacity: 1;\n  }\n  80% {\n    opacity: 1;\n  }\n  100% {\n    top: 80%;\n    opacity: 0;\n  }\n}\n.smart-enroll-demos .scanner-corner-tl,\n.smart-enroll-demos .scanner-corner-tr,\n.smart-enroll-demos .scanner-corner-bl,\n.smart-enroll-demos .scanner-corner-br {\n  position: absolute;\n  z-index: 30;\n  pointer-events: none;\n  width: 2rem;\n  height: 2rem;\n  border-color: rgb(var(--color-surface-tint));\n}\n.smart-enroll-demos .scanner-corner-tl {\n  top: 1.5rem;\n  left: 1.5rem;\n  border-top: 2px solid;\n  border-left: 2px solid;\n}\n.smart-enroll-demos .scanner-corner-tr {\n  top: 1.5rem;\n  right: 1.5rem;\n  border-top: 2px solid;\n  border-right: 2px solid;\n}\n.smart-enroll-demos .scanner-corner-bl {\n  bottom: 1.5rem;\n  left: 1.5rem;\n  border-bottom: 2px solid;\n  border-left: 2px solid;\n}\n.smart-enroll-demos .scanner-corner-br {\n  bottom: 1.5rem;\n  right: 1.5rem;\n  border-bottom: 2px solid;\n  border-right: 2px solid;\n}\n.smart-enroll-demos .blueprint-grid {\n  background-image: radial-gradient(rgb(var(--color-primary)/0.45) 0.5px, transparent 0.5px);\n  background-size: 20px 20px;\n}\n.smart-enroll-demos .bg-primary-cta {\n  background: var(--utility-primary-cta);\n  color: rgb(var(--utility-primary-cta-color));\n}\n.smart-enroll-demos .demo-btn-primary {\n  display: inline-flex;\n  width: 100%;\n  min-height: 2.75rem;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  border-radius: 0.75rem;\n  border: 1px solid rgba(28, 25, 23, 0.08);\n  background-color: rgb(28, 25, 23);\n  padding: 0.75rem 1.25rem;\n  font-size: 0.875rem;\n  font-weight: 600;\n  letter-spacing: -0.01em;\n  color: rgb(255, 255, 255);\n  box-shadow: 0 1px 2px rgba(28, 25, 23, 0.06);\n  text-decoration: none;\n  transition:\n    background-color 150ms ease,\n    border-color 150ms ease,\n    transform 100ms ease;\n}\n.smart-enroll-demos .demo-btn-primary:hover:not(:disabled) {\n  background-color: rgb(41, 37, 36);\n  border-color: rgba(28, 25, 23, 0.12);\n}\n.smart-enroll-demos .demo-btn-primary:active:not(:disabled) {\n  transform: scale(0.99);\n}\n.smart-enroll-demos .demo-btn-primary:disabled {\n  cursor: not-allowed;\n  opacity: 0.45;\n}\n.smart-enroll-demos .demo-btn-primary.demo-btn-inline {\n  width: auto;\n  flex: 1 1 0;\n}\n.smart-enroll-demos .demo-btn-secondary {\n  display: inline-flex;\n  width: 100%;\n  min-height: 2.75rem;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  border-radius: 0.75rem;\n  border: 1px solid rgb(231, 229, 228);\n  background-color: rgb(255, 255, 255);\n  padding: 0.75rem 1.25rem;\n  font-size: 0.875rem;\n  font-weight: 600;\n  letter-spacing: -0.01em;\n  color: rgb(28, 25, 23);\n  transition:\n    background-color 150ms ease,\n    border-color 150ms ease,\n    transform 100ms ease;\n}\n.smart-enroll-demos .demo-btn-secondary:hover:not(:disabled) {\n  background-color: rgb(250, 250, 249);\n  border-color: rgb(214, 211, 209);\n}\n.smart-enroll-demos .demo-btn-secondary:active:not(:disabled) {\n  transform: scale(0.99);\n}\n.smart-enroll-demos .demo-btn-secondary:disabled {\n  cursor: not-allowed;\n  opacity: 0.45;\n}\n.smart-enroll-demos .demo-btn-secondary.demo-btn-inline {\n  width: auto;\n  flex: 1 1 0;\n}\n.smart-enroll-demos .shadow-primary {\n  box-shadow: var(--shadow-primary);\n}\n.smart-enroll-demos .shadow-ring-frost {\n  box-shadow: var(--shadow-ring-frost);\n}\n.smart-enroll-demos .shadow-ambient {\n  box-shadow: var(--shadow-ambient);\n}\n.smart-enroll-demos .border-frost {\n  border-color: var(--frost);\n}\n.smart-enroll-demos .scanning-ring {\n  box-shadow: 0 0 20px 2px rgb(var(--utility-scanning-ring-outer)/0.25), inset 0 0 20px 2px rgb(var(--utility-scanning-ring-inner)/0.15);\n}\n.smart-enroll-demos .bg-surface {\n  background-color: rgb(var(--color-surface));\n}\n.smart-enroll-demos .bg-surface-container {\n  background-color: rgb(var(--color-surface-container));\n}\n.smart-enroll-demos .bg-surface-container-low {\n  background-color: rgb(var(--color-surface-container-low));\n}\n.smart-enroll-demos .bg-surface-container-high {\n  background-color: rgb(var(--color-surface-container-high));\n}\n.smart-enroll-demos .bg-surface-container-lowest {\n  background-color: rgb(var(--color-surface-container-lowest));\n}\n.smart-enroll-demos .bg-error-container\\/20 {\n  background-color: rgb(var(--color-error-container)/0.2);\n}\n.smart-enroll-demos .text-on-surface {\n  color: rgb(var(--color-on-surface));\n}\n.smart-enroll-demos .text-on-surface-variant {\n  color: rgb(var(--color-on-surface-variant));\n}\n.smart-enroll-demos .text-on-primary-container {\n  color: rgb(var(--color-on-primary-container));\n}\n.smart-enroll-demos .text-primary {\n  color: rgb(var(--color-primary));\n}\n.smart-enroll-demos .text-error {\n  color: rgb(var(--color-error));\n}\n.smart-enroll-demos .border-outline-variant\\/20 {\n  border-color: rgb(var(--color-outline-variant)/0.2);\n}\n.smart-enroll-demos .border-outline-variant\\/30 {\n  border-color: rgb(var(--color-outline-variant)/0.3);\n}\n.smart-enroll-demos .border-outline-variant\\/15 {\n  border-color: rgb(var(--color-outline-variant)/0.15);\n}\n.smart-enroll-demos .border-outline-variant\\/10 {\n  border-color: rgb(var(--color-outline-variant)/0.1);\n}\n.smart-enroll-demos .border-error\\/20 {\n  border-color: rgb(var(--color-error)/0.2);\n}\n.smart-enroll-demos .border-error {\n  border-color: rgb(var(--color-error));\n}\n.smart-enroll-demos .placeholder-on-surface-variant\\/50::placeholder {\n  color: rgb(var(--color-on-surface-variant)/0.5);\n}\n.smart-enroll-demos .hover\\:bg-surface-container:hover {\n  background-color: rgb(var(--color-surface-container));\n}\n.smart-enroll-demos .focus\\:border-primary\\/60:focus {\n  border-color: rgb(var(--color-primary)/0.6);\n}\n.smart-enroll-demos .hover\\:border-primary\\/40:hover {\n  border-color: rgb(var(--color-primary)/0.4);\n}\n.smart-enroll-demos .ring-primary-20 {\n  box-shadow: 0 0 0 4px rgba(38, 66, 255, 0.2);\n}\n.smart-enroll-demos .bg-primary-10 {\n  background: rgba(38, 66, 255, 0.06);\n}\n.smart-enroll-demos .selected-liveness {\n  border-color: rgb(var(--color-primary)/0.4);\n  background: rgb(var(--color-primary)/0.06);\n}\n.smart-enroll-demos .human-id-liveness-toggle {\n  border-color: rgb(var(--color-outline-variant)/0.3);\n  background: rgb(var(--color-surface-container-low));\n}\n.smart-enroll-demos .human-id-liveness-toggle:hover {\n  border-color: rgb(var(--color-outline-variant)/0.5);\n}\n.smart-enroll-demos .human-id-liveness-toggle--on {\n  border-color: rgb(var(--color-primary)/0.4);\n  background: rgb(var(--color-primary)/0.06);\n}\n.smart-enroll-demos .human-id-liveness-toggle__icon {\n  background: rgb(var(--color-surface-container));\n  color: rgb(var(--color-on-surface-variant));\n}\n.smart-enroll-demos .human-id-liveness-toggle__icon--on {\n  background: rgb(var(--color-primary)/0.15);\n  color: rgb(var(--color-primary));\n}\n.smart-enroll-demos .human-id-liveness-toggle__stage {\n  display: inline-flex;\n  align-items: center;\n  border-radius: 9999px;\n  padding: 0.125rem 0.5rem;\n  font-size: 0.625rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n.smart-enroll-demos .human-id-liveness-toggle__stage--encrypt {\n  background: rgba(245, 158, 11, 0.15);\n  color: rgb(180, 83, 9);\n}\n.smart-enroll-demos .human-id-liveness-toggle__stage--decrypt {\n  background: rgb(var(--color-primary)/0.12);\n  color: rgb(var(--color-primary));\n}\n.smart-enroll-demos .human-id-liveness-toggle__track {\n  background: rgb(var(--color-surface-container-high));\n}\n.smart-enroll-demos .human-id-liveness-toggle__track--on {\n  background: rgb(var(--color-primary));\n}\n.smart-enroll-demos .human-id-liveness-callout {\n  border: 1px solid rgb(var(--color-outline-variant)/0.25);\n  background: rgb(var(--color-surface-container-low));\n  border-radius: 0.75rem;\n  padding: 0.875rem 1rem;\n  font-size: 0.8125rem;\n  line-height: 1.5;\n  color: rgb(var(--color-on-surface-variant));\n}\n.smart-enroll-demos .selected-tolerance {\n  border-color: rgb(var(--color-primary)/0.5);\n  background: rgb(var(--color-primary)/0.08);\n}\n.smart-enroll-demos .demo-range-input {\n  accent-color: rgb(var(--color-primary));\n  height: 0.5rem;\n  cursor: pointer;\n}\n.dark .smart-enroll-demos {\n  --color-surface: 15 23 42;\n  --color-surface-container-lowest: 2 6 23;\n  --color-surface-container-low: 15 23 42;\n  --color-surface-container: 30 41 59;\n  --color-surface-container-high: 51 65 85;\n  --color-surface-container-highest: 71 85 105;\n  --color-surface-bright: 30 41 59;\n  --color-surface-dim: 2 6 23;\n  --color-surface-variant: 51 65 85;\n  --color-surface-tint: 37 99 235;\n  --color-primary: 96 165 250;\n  --color-primary-fixed: 239 246 255;\n  --color-primary-fixed-dim: 191 219 254;\n  --color-primary-container: 37 99 235;\n  --color-on-primary: 255 255 255;\n  --color-on-primary-fixed: 15 23 42;\n  --color-on-primary-fixed-variant: 30 58 138;\n  --color-on-primary-container: 248 250 252;\n  --color-inverse-primary: 59 130 246;\n  --color-secondary: 148 163 184;\n  --color-secondary-fixed: 226 232 240;\n  --color-secondary-fixed-dim: 148 163 184;\n  --color-secondary-container: 51 65 85;\n  --color-on-secondary: 248 250 252;\n  --color-on-secondary-fixed: 15 23 42;\n  --color-on-secondary-fixed-variant: 51 65 85;\n  --color-on-secondary-container: 203 213 225;\n  --color-tertiary: 45 212 191;\n  --color-tertiary-fixed: 204 251 241;\n  --color-tertiary-fixed-dim: 94 234 212;\n  --color-tertiary-container: 13 148 136;\n  --color-on-tertiary: 4 47 46;\n  --color-on-tertiary-fixed: 19 78 74;\n  --color-on-tertiary-fixed-variant: 17 94 89;\n  --color-on-tertiary-container: 248 250 252;\n  --color-background: 15 23 42;\n  --color-on-background: 248 250 252;\n  --color-on-surface: 248 250 252;\n  --color-on-surface-variant: 148 163 184;\n  --color-inverse-surface: 248 250 252;\n  --color-inverse-on-surface: 15 23 42;\n  --color-outline: 100 116 139;\n  --color-outline-variant: 51 65 85;\n  --color-error: 252 165 165;\n  --color-error-container: 127 29 29;\n  --color-on-error: 127 29 29;\n  --color-on-error-container: 254 226 226;\n  --frost: rgb(96 165 250 / 0.12);\n  --frost-variant: rgb(96 165 250 / 0.06);\n  --shadow-ambient: 0 8px 40px rgb(2 6 23 / 0.35);\n  --shadow-float: 0 16px 60px rgb(2 6 23 / 0.45);\n  --shadow-glow: 0 0 40px rgb(37 99 235 / 0.1);\n  --shadow-scan-line: 0 0 15px rgb(96 165 250 / 0.4);\n  --shadow-primary: 0 1px 2px rgb(37 99 235 / 0.12), 0 4px 14px rgb(37 99 235 / 0.16);\n  --shadow-ring-frost: 0 0 0 1px rgb(96 165 250 / 0.12);\n  --utility-primary-cta-color: 255 255 255;\n  --utility-text-gradient-from: 96 165 250;\n  --utility-text-gradient-to: 37 99 235;\n  --utility-scanning-ring-outer: 96 165 250;\n  --utility-scanning-ring-inner: 37 99 235;\n  background-color: rgb(var(--color-surface));\n  color: rgb(var(--color-on-surface));\n}\n.dark .smart-enroll-demos .glass-panel-dark {\n  background: rgb(var(--color-surface-container)/0.85);\n  border-bottom-color: rgb(var(--color-outline-variant)/0.35);\n}\n.dark .smart-enroll-demos .demo-btn-primary {\n  border-color: rgba(255, 255, 255, 0.1);\n  background-color: rgb(248, 250, 252);\n  color: rgb(15, 23, 42);\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);\n}\n.dark .smart-enroll-demos .demo-btn-primary:hover:not(:disabled) {\n  background-color: rgb(226, 232, 240);\n  border-color: rgba(255, 255, 255, 0.15);\n}\n.dark .smart-enroll-demos .demo-btn-secondary {\n  border-color: rgb(var(--color-outline-variant));\n  background-color: rgb(var(--color-surface-container));\n  color: rgb(var(--color-on-surface));\n}\n.dark .smart-enroll-demos .demo-btn-secondary:hover:not(:disabled) {\n  background-color: rgb(var(--color-surface-container-high));\n  border-color: rgb(var(--color-outline));\n}\n.dark .smart-enroll-demos .human-id-liveness-toggle__stage--encrypt {\n  background: rgba(245, 158, 11, 0.12);\n  color: rgb(251, 191, 36);\n}\n.dark .smart-enroll-demos input[type=date] {\n  color-scheme: dark;\n}\n.dark .smart-enroll-demos input[type=date]::-webkit-calendar-picker-indicator {\n  cursor: pointer;\n  opacity: 0.85;\n  filter: invert(1);\n}\n.smart-enroll-demos-hub .demo-card,\n.human-authn-demos-hub .demo-card {\n  transition: all 0.3s;\n}\n.smart-enroll-demos-hub .demo-card:hover,\n.human-authn-demos-hub .demo-card:hover {\n  border-color: rgba(96, 165, 250, 0.35);\n  background: rgba(255, 255, 255, 0.02);\n  box-shadow: 0 0 0 1px rgba(96, 165, 250, 0.12);\n}\n.dark .smart-enroll-demos-hub .demo-card:hover,\n.dark .human-authn-demos-hub .demo-card:hover {\n  border-color: rgba(96, 165, 250, 0.35);\n  background: rgba(30, 41, 59, 0.5);\n  box-shadow: 0 0 0 1px rgba(96, 165, 250, 0.12);\n}\n/*# sourceMappingURL=_demos-theme.css.map */\n'] }]
  }], null, { publicDataField: [{
    type: ViewChild,
    args: ["publicDataField"]
  }], metadataField: [{
    type: ViewChild,
    args: ["metadataField"]
  }], fileInput: [{
    type: ViewChild,
    args: ["fileInput"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HumanidCreateQrDemoComponent, { className: "HumanidCreateQrDemoComponent", filePath: "src/app/modules/smart-enroll/demos/pages/humanid-create-qr/humanid-create-qr-demo.component.ts", lineNumber: 66 });
})();
export {
  HumanidCreateQrDemoComponent
};
//# sourceMappingURL=chunk-ZOPMGROB.js.map
