import {
  CreatePersonAlreadyExistsResultComponent
} from "./chunk-HC73HLQV.js";
import {
  DemoResultActionsComponent
} from "./chunk-ZD622R6J.js";
import {
  DemoSandboxResultBannerComponent
} from "./chunk-ATI2CBSL.js";
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
  fileToBase64,
  isPersonAlreadySetError
} from "./chunk-YULMXIQT.js";
import "./chunk-M4M2RXHQ.js";
import "./chunk-B4YUVLJ7.js";
import "./chunk-FWYUPNZS.js";
import "./chunk-VWOHFVN5.js";
import "./chunk-TXEVGTMX.js";
import "./chunk-6VDSDVMZ.js";
import "./chunk-BCBZJBUY.js";
import "./chunk-WSS6AKQE.js";
import "./chunk-EVWXSBKG.js";
import "./chunk-M5KDIZH5.js";
import "./chunk-OIBNGD5S.js";
import "./chunk-WOW6NB5H.js";
import "./chunk-YSJP7SXK.js";
import "./chunk-J762DGD5.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  RangeValueAccessor,
  RequiredValidator,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-DVRFI3SJ.js";
import {
  TranslocoModule,
  TranslocoPipe,
  TranslocoService
} from "./chunk-R5W3A6HI.js";
import {
  Router
} from "./chunk-HYFP557I.js";
import "./chunk-PMCYMBOC.js";
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
  __async
} from "./chunk-F5M2C4EZ.js";

// src/app/modules/smart-enroll/demos/pages/create-person-with-liveness/create-person-with-liveness-demo.component.ts
var _c0 = ["fileInput"];
var _c1 = (a0) => ({ score: a0 });
var _c2 = (a0) => ({ count: a0 });
function CreatePersonWithLivenessDemoComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "smartEnrollDemos.createPersonWithLiveness.heroTitleResult"), " ");
  }
}
function CreatePersonWithLivenessDemoComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "smartEnrollDemos.createPersonWithLiveness.heroTitleConflict"), " ");
  }
}
function CreatePersonWithLivenessDemoComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "smartEnrollDemos.createPersonWithLiveness.heroTitleForm"), " ");
  }
}
function CreatePersonWithLivenessDemoComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "smartEnrollDemos.createPersonWithLiveness.heroSubtitleResult"), " ");
  }
}
function CreatePersonWithLivenessDemoComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "smartEnrollDemos.createPersonWithLiveness.heroSubtitleConflict"), " ");
  }
}
function CreatePersonWithLivenessDemoComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "smartEnrollDemos.createPersonWithLiveness.heroSubtitleForm"), " ");
  }
}
function CreatePersonWithLivenessDemoComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 4);
  }
}
function CreatePersonWithLivenessDemoComponent_Conditional_11_Conditional_95_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-demo-raster-image", 46);
  }
  if (rf & 2) {
    const preview_r3 = ctx.$implicit;
    \u0275\u0275property("src", preview_r3)("width", 80)("height", 80);
  }
}
function CreatePersonWithLivenessDemoComponent_Conditional_11_Conditional_95_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275repeaterCreate(1, CreatePersonWithLivenessDemoComponent_Conditional_11_Conditional_95_For_2_Template, 1, 3, "app-demo-raster-image", 46, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.previews);
  }
}
function CreatePersonWithLivenessDemoComponent_Conditional_11_Conditional_98_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44)(1, "span", 47);
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
function CreatePersonWithLivenessDemoComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 11);
    \u0275\u0275listener("ngSubmit", function CreatePersonWithLivenessDemoComponent_Conditional_11_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.handleSubmit());
    });
    \u0275\u0275elementStart(1, "div", 12)(2, "div")(3, "label", 13);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementStart(6, "span", 14);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "input", 15);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275twoWayListener("ngModelChange", function CreatePersonWithLivenessDemoComponent_Conditional_11_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.name, $event) || (ctx_r1.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div")(12, "label", 16);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "transloco");
    \u0275\u0275elementStart(15, "span", 14);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "select", 17);
    \u0275\u0275twoWayListener("ngModelChange", function CreatePersonWithLivenessDemoComponent_Conditional_11_Template_select_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.gender, $event) || (ctx_r1.gender = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(19, "option", 18);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "option", 19);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "transloco");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(25, "div", 12)(26, "div")(27, "label", 20);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "transloco");
    \u0275\u0275elementStart(30, "span", 14);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "input", 21);
    \u0275\u0275twoWayListener("ngModelChange", function CreatePersonWithLivenessDemoComponent_Conditional_11_Template_input_ngModelChange_33_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.dob, $event) || (ctx_r1.dob = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div")(35, "label", 22);
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "input", 23);
    \u0275\u0275pipe(39, "transloco");
    \u0275\u0275twoWayListener("ngModelChange", function CreatePersonWithLivenessDemoComponent_Conditional_11_Template_input_ngModelChange_38_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.nationality, $event) || (ctx_r1.nationality = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(40, "div")(41, "label", 24);
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "transloco");
    \u0275\u0275elementStart(44, "span", 14);
    \u0275\u0275text(45);
    \u0275\u0275pipe(46, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "input", 25);
    \u0275\u0275pipe(48, "transloco");
    \u0275\u0275twoWayListener("ngModelChange", function CreatePersonWithLivenessDemoComponent_Conditional_11_Template_input_ngModelChange_47_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.collectionId, $event) || (ctx_r1.collectionId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "div", 26)(50, "div")(51, "label", 27);
    \u0275\u0275text(52);
    \u0275\u0275pipe(53, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "input", 28);
    \u0275\u0275twoWayListener("ngModelChange", function CreatePersonWithLivenessDemoComponent_Conditional_11_Template_input_ngModelChange_54_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.livenessMinScore, $event) || (ctx_r1.livenessMinScore = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "div")(56, "label", 27);
    \u0275\u0275text(57);
    \u0275\u0275pipe(58, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "input", 29);
    \u0275\u0275twoWayListener("ngModelChange", function CreatePersonWithLivenessDemoComponent_Conditional_11_Template_input_ngModelChange_59_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.minScore, $event) || (ctx_r1.minScore = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "div")(61, "label", 27);
    \u0275\u0275text(62);
    \u0275\u0275pipe(63, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "select", 30);
    \u0275\u0275twoWayListener("ngModelChange", function CreatePersonWithLivenessDemoComponent_Conditional_11_Template_select_ngModelChange_64_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchMode, $event) || (ctx_r1.searchMode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(65, "option", 31);
    \u0275\u0275text(66, "FAST");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "option", 32);
    \u0275\u0275text(68, "ACCURATE");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(69, "div")(70, "label", 27);
    \u0275\u0275text(71);
    \u0275\u0275pipe(72, "transloco");
    \u0275\u0275elementStart(73, "span", 14);
    \u0275\u0275text(74);
    \u0275\u0275pipe(75, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(76, "div", 33);
    \u0275\u0275element(77, "app-demo-choose-one-callout", 34);
    \u0275\u0275pipe(78, "transloco");
    \u0275\u0275elementStart(79, "section", 35);
    \u0275\u0275element(80, "app-demo-capture-option-heading", 36);
    \u0275\u0275pipe(81, "transloco");
    \u0275\u0275pipe(82, "transloco");
    \u0275\u0275elementStart(83, "app-demo-scanner-shell")(84, "div", 37)(85, "app-face-guided-camera", 38);
    \u0275\u0275listener("captured", function CreatePersonWithLivenessDemoComponent_Conditional_11_Template_app_face_guided_camera_captured_85_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFaceCapture($event));
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275element(86, "app-demo-or-divider");
    \u0275\u0275elementStart(87, "section", 39);
    \u0275\u0275element(88, "app-demo-capture-option-heading", 40);
    \u0275\u0275pipe(89, "transloco");
    \u0275\u0275pipe(90, "transloco");
    \u0275\u0275elementStart(91, "app-demo-upload-image-button", 41);
    \u0275\u0275pipe(92, "transloco");
    \u0275\u0275pipe(93, "transloco");
    \u0275\u0275pipe(94, "transloco");
    \u0275\u0275listener("clicked", function CreatePersonWithLivenessDemoComponent_Conditional_11_Template_app_demo_upload_image_button_clicked_91_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.triggerFilePicker());
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(95, CreatePersonWithLivenessDemoComponent_Conditional_11_Conditional_95_Template, 3, 0, "div", 42);
    \u0275\u0275elementStart(96, "input", 43, 0);
    \u0275\u0275listener("change", function CreatePersonWithLivenessDemoComponent_Conditional_11_Template_input_change_96_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFilesSelected($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(98, CreatePersonWithLivenessDemoComponent_Conditional_11_Conditional_98_Template, 4, 1, "div", 44);
    \u0275\u0275elementStart(99, "button", 45);
    \u0275\u0275text(100);
    \u0275\u0275pipe(101, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 41, "smartEnrollDemos.createPersonWithLiveness.fullNameLabel"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 43, "smartEnrollDemos.common.requiredStar"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.name);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(10, 45, "smartEnrollDemos.createPersonWithLiveness.namePlaceholder"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 47, "smartEnrollDemos.createPersonWithLiveness.genderLabel"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 49, "smartEnrollDemos.common.requiredStar"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.gender);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 51, "smartEnrollDemos.common.male"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 53, "smartEnrollDemos.common.female"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(29, 55, "smartEnrollDemos.createPersonWithLiveness.dobLabel"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(32, 57, "smartEnrollDemos.common.requiredStar"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.dob);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(37, 59, "smartEnrollDemos.createPersonWithLiveness.nationalityLabel"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.nationality);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(39, 61, "smartEnrollDemos.createPersonWithLiveness.nationalityPlaceholder"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(43, 63, "smartEnrollDemos.createPersonWithLiveness.collectionIdLabel"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(46, 65, "smartEnrollDemos.common.requiredStar"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.collectionId);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(48, 67, "smartEnrollDemos.createPersonWithLiveness.collectionIdPlaceholder"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(53, 69, "smartEnrollDemos.createPersonWithLiveness.livenessMinLabel", \u0275\u0275pureFunction1(100, _c1, ctx_r1.livenessMinScore.toFixed(2))), " ");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.livenessMinScore);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(58, 72, "smartEnrollDemos.createPersonWithLiveness.matchMinLabel", \u0275\u0275pureFunction1(102, _c1, ctx_r1.minScore.toFixed(2))), " ");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.minScore);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(63, 75, "smartEnrollDemos.createPersonWithLiveness.searchModeLabel"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchMode);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(72, 77, "smartEnrollDemos.createPersonWithLiveness.faceImagesLabel"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(75, 79, "smartEnrollDemos.common.requiredStar"));
    \u0275\u0275advance(3);
    \u0275\u0275property("description", \u0275\u0275pipeBind1(78, 81, "smartEnrollDemos.createPersonWithLiveness.chooseOneDescription"));
    \u0275\u0275advance(3);
    \u0275\u0275property("title", \u0275\u0275pipeBind1(81, 83, "smartEnrollDemos.createPersonWithLiveness.cameraTitle"))("subtitle", \u0275\u0275pipeBind1(82, 85, "smartEnrollDemos.createPersonWithLiveness.cameraSubtitle"));
    \u0275\u0275advance(5);
    \u0275\u0275property("fillFrame", true)("hideIdleExplainer", true)("captureSuccessFeedbackMs", 750);
    \u0275\u0275advance(3);
    \u0275\u0275property("title", \u0275\u0275pipeBind1(89, 87, "smartEnrollDemos.createPersonWithLiveness.uploadTitle"))("subtitle", \u0275\u0275pipeBind1(90, 89, "smartEnrollDemos.createPersonWithLiveness.uploadSubtitle"));
    \u0275\u0275advance(3);
    \u0275\u0275property("primaryText", ctx_r1.images.length ? \u0275\u0275pipeBind2(92, 91, "smartEnrollDemos.common.imagesAddMore", \u0275\u0275pureFunction1(104, _c2, ctx_r1.images.length)) : \u0275\u0275pipeBind1(93, 94, "smartEnrollDemos.common.uploadFaceImages"))("secondaryText", \u0275\u0275pipeBind1(94, 96, "smartEnrollDemos.common.jpegPngGallery"));
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.previews.length > 0 ? 95 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.error ? 98 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.images.length);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(101, 98, "smartEnrollDemos.createPersonWithLiveness.submit"), " ");
  }
}
function CreatePersonWithLivenessDemoComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "div", 48);
    \u0275\u0275elementStart(2, "p", 49);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "smartEnrollDemos.createPersonWithLiveness.processing"));
  }
}
function CreatePersonWithLivenessDemoComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-create-person-already-exists-result", 50);
    \u0275\u0275listener("editForm", function CreatePersonWithLivenessDemoComponent_Conditional_13_Template_app_create_person_already_exists_result_editForm_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.backToFormFromConflict());
    })("backToDemos", function CreatePersonWithLivenessDemoComponent_Conditional_13_Template_app_create_person_already_exists_result_backToDemos_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.backToDemos());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("previews", ctx_r1.previews);
  }
}
function CreatePersonWithLivenessDemoComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "app-demo-sandbox-result-banner");
    \u0275\u0275elementStart(2, "div", 51)(3, "div", 52)(4, "span", 53);
    \u0275\u0275text(5, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 54);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "pre", 55);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "json");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "app-demo-result-actions", 56);
    \u0275\u0275pipe(13, "transloco");
    \u0275\u0275pipe(14, "transloco");
    \u0275\u0275listener("secondary", function CreatePersonWithLivenessDemoComponent_Conditional_14_Template_app_demo_result_actions_secondary_12_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.reset());
    })("primary", function CreatePersonWithLivenessDemoComponent_Conditional_14_Template_app_demo_result_actions_primary_12_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.backToDemos());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 5, "smartEnrollDemos.createPersonWithLiveness.successTitle"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 7, ctx_r1.result));
    \u0275\u0275advance(2);
    \u0275\u0275property("secondaryLabel", \u0275\u0275pipeBind1(13, 9, "smartEnrollDemos.createPersonWithLiveness.tryAgain"))("primaryLabel", \u0275\u0275pipeBind1(14, 11, "smartEnrollDemos.common.backToDemos"))("primaryRouterLink", null);
  }
}
function CreatePersonWithLivenessDemoComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "details", 9)(1, "summary", 57)(2, "span", 58)(3, "span", 59);
    \u0275\u0275text(4, "menu_book");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 60);
    \u0275\u0275text(8, " expand_more ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 61)(10, "p");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "transloco");
    \u0275\u0275elementStart(13, "a", 62);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "p");
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "transloco");
    \u0275\u0275elementStart(19, "a", 63);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "p", 64);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div")(26, "p", 65);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "p", 64);
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 66)(33, "table", 67)(34, "thead")(35, "tr", 68)(36, "th", 69);
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "th", 70);
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(42, "tbody")(43, "tr", 71)(44, "td", 72);
    \u0275\u0275text(45, "Content-Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "td", 73);
    \u0275\u0275text(47, "application/json");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "tr")(49, "td", 72);
    \u0275\u0275text(50, "Authorization");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "td", 73);
    \u0275\u0275text(52, "Bearer <token>");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(53, "div", 66)(54, "table", 67)(55, "thead")(56, "tr", 68)(57, "th", 74);
    \u0275\u0275text(58);
    \u0275\u0275pipe(59, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "th", 74);
    \u0275\u0275text(61);
    \u0275\u0275pipe(62, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "th", 75);
    \u0275\u0275text(64);
    \u0275\u0275pipe(65, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(66, "tbody", 3)(67, "tr", 76)(68, "td", 77);
    \u0275\u0275text(69);
    \u0275\u0275pipe(70, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "td");
    \u0275\u0275text(72);
    \u0275\u0275pipe(73, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "td");
    \u0275\u0275text(75);
    \u0275\u0275pipe(76, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(77, "tr", 76)(78, "td", 77);
    \u0275\u0275text(79);
    \u0275\u0275pipe(80, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "td");
    \u0275\u0275text(82);
    \u0275\u0275pipe(83, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "td");
    \u0275\u0275text(85);
    \u0275\u0275pipe(86, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(87, "tr", 76)(88, "td", 77);
    \u0275\u0275text(89);
    \u0275\u0275pipe(90, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(91, "td");
    \u0275\u0275text(92);
    \u0275\u0275pipe(93, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "td");
    \u0275\u0275text(95);
    \u0275\u0275pipe(96, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(97, "tr", 76)(98, "td", 77);
    \u0275\u0275text(99);
    \u0275\u0275pipe(100, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(101, "td");
    \u0275\u0275text(102);
    \u0275\u0275pipe(103, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(104, "td");
    \u0275\u0275text(105);
    \u0275\u0275pipe(106, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(107, "tr", 76)(108, "td", 77);
    \u0275\u0275text(109);
    \u0275\u0275pipe(110, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(111, "td");
    \u0275\u0275text(112);
    \u0275\u0275pipe(113, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(114, "td");
    \u0275\u0275text(115);
    \u0275\u0275pipe(116, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(117, "tr", 76)(118, "td", 77);
    \u0275\u0275text(119);
    \u0275\u0275pipe(120, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(121, "td");
    \u0275\u0275text(122);
    \u0275\u0275pipe(123, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(124, "td");
    \u0275\u0275text(125);
    \u0275\u0275pipe(126, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(127, "tr", 76)(128, "td", 77);
    \u0275\u0275text(129);
    \u0275\u0275pipe(130, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(131, "td");
    \u0275\u0275text(132);
    \u0275\u0275pipe(133, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(134, "td");
    \u0275\u0275text(135);
    \u0275\u0275pipe(136, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(137, "tr", 76)(138, "td", 77);
    \u0275\u0275text(139);
    \u0275\u0275pipe(140, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(141, "td");
    \u0275\u0275text(142);
    \u0275\u0275pipe(143, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(144, "td");
    \u0275\u0275text(145);
    \u0275\u0275pipe(146, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(147, "tr", 78)(148, "td", 77);
    \u0275\u0275text(149);
    \u0275\u0275pipe(150, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(151, "td");
    \u0275\u0275text(152);
    \u0275\u0275pipe(153, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(154, "td");
    \u0275\u0275text(155);
    \u0275\u0275pipe(156, "transloco");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(157, "pre", 55);
    \u0275\u0275text(158);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(159, "ul", 79)(160, "li");
    \u0275\u0275text(161);
    \u0275\u0275pipe(162, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(163, "li");
    \u0275\u0275text(164);
    \u0275\u0275pipe(165, "transloco");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 43, "smartEnrollDemos.createPersonWithLiveness.apiRefSummary"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 45, "smartEnrollDemos.createPersonWithLiveness.apiRefDocsEnLead"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 47, "smartEnrollDemos.createPersonWithLiveness.apiRefDocsEnLink"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 49, "smartEnrollDemos.createPersonWithLiveness.apiRefDocsEsLead"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 51, "smartEnrollDemos.createPersonWithLiveness.apiRefDocsEsLink"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 53, "smartEnrollDemos.createPersonWithLiveness.apiRefBody"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(28, 55, "smartEnrollDemos.createPersonWithLiveness.apiRefEndpoint"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(31, 57, "smartEnrollDemos.createPersonWithLiveness.apiRefEndpointDesc"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(38, 59, "smartEnrollDemos.common.tableHeader"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(41, 61, "smartEnrollDemos.common.tableValue"));
    \u0275\u0275advance(18);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(59, 63, "smartEnrollDemos.common.tableParam"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(62, 65, "smartEnrollDemos.common.tableReq"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(65, 67, "smartEnrollDemos.common.tableDescription"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(70, 69, "smartEnrollDemos.createPersonWithLiveness.paramName"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(73, 71, "smartEnrollDemos.common.yes"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(76, 73, "smartEnrollDemos.createPersonWithLiveness.paramNameDesc"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(80, 75, "smartEnrollDemos.createPersonWithLiveness.paramImages"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(83, 77, "smartEnrollDemos.common.yes"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(86, 79, "smartEnrollDemos.createPersonWithLiveness.paramImagesDesc"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(90, 81, "smartEnrollDemos.createPersonWithLiveness.paramGender"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(93, 83, "smartEnrollDemos.common.yes"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(96, 85, "smartEnrollDemos.createPersonWithLiveness.paramGenderDesc"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(100, 87, "smartEnrollDemos.createPersonWithLiveness.paramDob"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(103, 89, "smartEnrollDemos.common.yes"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(106, 91, "smartEnrollDemos.createPersonWithLiveness.paramDobDesc"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(110, 93, "smartEnrollDemos.createPersonWithLiveness.paramCollectionId"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(113, 95, "smartEnrollDemos.common.yes"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(116, 97, "smartEnrollDemos.createPersonWithLiveness.paramCollectionIdDesc"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(120, 99, "smartEnrollDemos.createPersonWithLiveness.paramLivenessMin"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(123, 101, "smartEnrollDemos.common.yes"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(126, 103, "smartEnrollDemos.createPersonWithLiveness.paramLivenessMinDesc"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(130, 105, "smartEnrollDemos.createPersonWithLiveness.paramMinScore"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(133, 107, "smartEnrollDemos.common.yes"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(136, 109, "smartEnrollDemos.createPersonWithLiveness.paramMinScoreDesc"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(140, 111, "smartEnrollDemos.createPersonWithLiveness.paramSearchMode"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(143, 113, "smartEnrollDemos.common.yes"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(146, 115, "smartEnrollDemos.createPersonWithLiveness.paramSearchModeDesc"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(150, 117, "smartEnrollDemos.createPersonWithLiveness.paramNationality"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(153, 119, "smartEnrollDemos.common.no"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(156, 121, "smartEnrollDemos.createPersonWithLiveness.paramNationalityDesc"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.apiFetchExample);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(162, 123, "smartEnrollDemos.createPersonWithLiveness.bullet1"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(165, 125, "smartEnrollDemos.createPersonWithLiveness.bullet2"));
  }
}
var DOCS_BASE = "https://docs.verifik.co";
var RELATED_DOC_HREFS = [
  `${DOCS_BASE}/resources/the-person-object`,
  `${DOCS_BASE}/resources/list-all-persons`,
  `${DOCS_BASE}/resources/retrieve-a-person`,
  `${DOCS_BASE}/resources/persons/update-a-person`,
  `${DOCS_BASE}/resources/persons/delete-a-person`,
  `${DOCS_BASE}/resources/create-a-person-with-liveness/`,
  "/smart-enroll/demos/update-person",
  "/smart-enroll/demos/delete-person"
];
var RELATED_DOC_BADGE_MUTED = [true, false, false, false, false, false, false, false];
var CreatePersonWithLivenessDemoComponent = class _CreatePersonWithLivenessDemoComponent {
  constructor() {
    this._api = inject(BiometricsDemoApiService);
    this._router = inject(Router);
    this._transloco = inject(TranslocoService);
    this._cdr = inject(ChangeDetectorRef);
    this.authChecked = false;
    this.step = "form";
    this.name = "";
    this.gender = "M";
    this.dob = "";
    this.collectionId = "";
    this.nationality = "";
    this.livenessMinScore = 0.65;
    this.minScore = 0.8;
    this.searchMode = "FAST";
    this.images = [];
    this.previews = [];
    this.result = null;
    this.error = null;
    this.relatedDocs = [];
    this.apiFetchExample = `await fetch("https://api.verifik.co/v2/face-recognition/persons/search-live-face", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: \`Bearer \${accessToken}\`,
  },
  body: JSON.stringify({
    name: "Jane Doe",
    gender: "F",
    date_of_birth: "1990-01-15",
    collection_id: "<collectionMongoId>",
    liveness_min_score: 0.65,
    min_score: 0.8,
    search_mode: "FAST",
    nationality: "CO",
    images: ["<base64>", "<base64>"],
  }),
});`;
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
    return this.step !== "result" && this.step !== "conflict";
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
  handleSubmit() {
    if (!this.images.length)
      return;
    this.step = "processing";
    this.error = null;
    this._cdr.markForCheck();
    this._api.createPersonWithLiveness({
      name: this.name,
      images: this.images,
      gender: this.gender,
      date_of_birth: this.dob,
      collection_id: this.collectionId,
      liveness_min_score: this.livenessMinScore,
      min_score: this.minScore,
      search_mode: this.searchMode,
      nationality: this.nationality || void 0
    }).subscribe({
      next: (data) => {
        this.result = data;
        this.step = "result";
        this._cdr.markForCheck();
      },
      error: (err) => {
        if (isPersonAlreadySetError(err)) {
          this.step = "conflict";
          this._cdr.markForCheck();
          return;
        }
        this.error = err.error ?? err.message ?? "Request failed";
        this.step = "form";
        this._cdr.markForCheck();
      }
    });
  }
  reset() {
    this.step = "form";
    this.name = "";
    this.gender = "M";
    this.dob = "";
    this.collectionId = "";
    this.nationality = "";
    this.livenessMinScore = 0.65;
    this.minScore = 0.8;
    this.searchMode = "FAST";
    this.images = [];
    this.previews = [];
    this.result = null;
    this.error = null;
  }
  backToFormFromConflict() {
    this.step = "form";
    this.error = null;
  }
  backToDemos() {
    void this._router.navigate(["/smart-enroll/demos"]);
  }
  buildRelatedDocs() {
    return RELATED_DOC_HREFS.map((href, i) => ({
      href,
      title: this._transloco.translate(`smartEnrollDemos.createPersonWithLiveness.relatedDocs.${i}.title`),
      description: this._transloco.translate(`smartEnrollDemos.createPersonWithLiveness.relatedDocs.${i}.description`),
      badge: this._transloco.translate(`smartEnrollDemos.createPersonWithLiveness.relatedDocs.${i}.badge`),
      badgeMuted: RELATED_DOC_BADGE_MUTED[i]
    }));
  }
  static {
    this.\u0275fac = function CreatePersonWithLivenessDemoComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CreatePersonWithLivenessDemoComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CreatePersonWithLivenessDemoComponent, selectors: [["app-create-person-with-liveness-demo"]], viewQuery: function CreatePersonWithLivenessDemoComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.fileInput = _t.first);
      }
    }, decls: 17, vars: 5, consts: [["fileInput", ""], [1, "mb-8"], [1, "text-3xl", "font-black", "tracking-tight", "text-on-surface", "mb-2"], [1, "text-on-surface-variant"], [1, "h-60", "rounded-xl", "bg-surface-container-high", "animate-pulse"], [1, "space-y-5"], [1, "flex", "flex-col", "items-center", "justify-center", "py-20", "gap-4"], [3, "previews"], [1, "space-y-4"], [1, "mt-10", "rounded-xl", "border", "border-outline-variant/20", "bg-surface-container-low/50", "text-left", "max-w-3xl", "mx-auto", "w-full", "px-4", "py-3", "group"], [3, "items"], [1, "space-y-5", 3, "ngSubmit"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "gap-5"], ["for", "plv-name", 1, "block", "text-sm", "font-semibold", "text-on-surface", "mb-1.5"], [1, "text-error"], ["id", "plv-name", "type", "text", "required", "", "name", "name", 1, "w-full", "bg-surface-container-low", "border", "border-outline-variant/30", "rounded-lg", "px-4", "py-3", "text-on-surface", "placeholder-on-surface-variant/50", "text-sm", "focus:outline-none", "focus:border-primary/60", "transition-colors", 3, "ngModelChange", "ngModel", "placeholder"], ["for", "plv-gender", 1, "block", "text-sm", "font-semibold", "text-on-surface", "mb-1.5"], ["id", "plv-gender", "name", "gender", 1, "w-full", "bg-surface-container-low", "border", "border-outline-variant/30", "rounded-lg", "px-4", "py-3", "text-on-surface", "text-sm", "focus:outline-none", "focus:border-primary/60", "transition-colors", 3, "ngModelChange", "ngModel"], ["value", "M"], ["value", "F"], ["for", "plv-dob", 1, "block", "text-sm", "font-semibold", "text-on-surface", "mb-1.5"], ["id", "plv-dob", "type", "date", "required", "", "name", "dob", 1, "w-full", "bg-surface-container-low", "border", "border-outline-variant/30", "rounded-lg", "px-4", "py-3", "text-on-surface", "text-sm", "focus:outline-none", "focus:border-primary/60", "transition-colors", 3, "ngModelChange", "ngModel"], ["for", "plv-nat", 1, "block", "text-sm", "font-semibold", "text-on-surface", "mb-1.5"], ["id", "plv-nat", "type", "text", "name", "nationality", 1, "w-full", "bg-surface-container-low", "border", "border-outline-variant/30", "rounded-lg", "px-4", "py-3", "text-on-surface", "placeholder-on-surface-variant/50", "text-sm", "focus:outline-none", "focus:border-primary/60", "transition-colors", 3, "ngModelChange", "ngModel", "placeholder"], ["for", "plv-col", 1, "block", "text-sm", "font-semibold", "text-on-surface", "mb-1.5"], ["id", "plv-col", "type", "text", "required", "", "name", "collectionId", 1, "w-full", "bg-surface-container-low", "border", "border-outline-variant/30", "rounded-lg", "px-4", "py-3", "text-on-surface", "placeholder-on-surface-variant/50", "text-sm", "focus:outline-none", "focus:border-primary/60", "transition-colors", 3, "ngModelChange", "ngModel", "placeholder"], [1, "grid", "grid-cols-1", "sm:grid-cols-3", "gap-5"], [1, "block", "text-sm", "font-semibold", "text-on-surface", "mb-1.5"], ["type", "range", "min", "0.5", "max", "1", "step", "0.01", "name", "livenessMinScore", 1, "w-full", 3, "ngModelChange", "ngModel"], ["type", "range", "min", "0.5", "max", "1", "step", "0.01", "name", "minScore", 1, "w-full", 3, "ngModelChange", "ngModel"], ["name", "searchMode", 1, "w-full", "bg-surface-container-low", "border", "border-outline-variant/30", "rounded-lg", "px-3", "py-2", "text-on-surface", "text-sm", "focus:outline-none", "focus:border-primary/60", 3, "ngModelChange", "ngModel"], ["value", "FAST"], ["value", "ACCURATE"], [1, "mb-3", "space-y-5"], [3, "description"], ["aria-labelledby", "create-person-live-camera-heading"], ["label", "A", "id", "create-person-live-camera-heading", 3, "title", "subtitle"], [1, "flex", "min-h-0", "flex-1", "flex-col"], [3, "captured", "fillFrame", "hideIdleExplainer", "captureSuccessFeedbackMs"], ["aria-labelledby", "create-person-live-upload-heading"], ["label", "B", "id", "create-person-live-upload-heading", 3, "title", "subtitle"], ["icon", "add_photo_alternate", 3, "clicked", "primaryText", "secondaryText"], [1, "flex", "flex-wrap", "gap-2", "mb-3"], ["type", "file", "accept", "image/*", "multiple", "", 1, "hidden", 3, "change"], [1, "px-4", "py-3", "bg-error-container/20", "border", "border-error/20", "rounded-lg", "flex", "items-center", "gap-2", "text-sm", "text-error"], ["type", "submit", 1, "demo-btn-primary", 3, "disabled"], ["alt", "", "className", "w-20 h-20 object-cover rounded-lg border border-frost", 3, "src", "width", "height"], [1, "material-symbols-outlined", "text-sm"], [1, "w-12", "h-12", "border-2", "border-primary", "border-t-transparent", "rounded-full", "animate-spin"], [1, "text-on-surface", "font-semibold"], [3, "editForm", "backToDemos", "previews"], [1, "rounded-2xl", "bg-surface-container-low", "border", "border-primary/20", "p-6"], [1, "flex", "items-center", "gap-3", "mb-4"], [1, "material-symbols-outlined", "text-primary", "text-2xl"], [1, "font-bold", "text-on-surface"], [1, "text-[0.65rem]", "font-mono", "bg-surface-container-high/80", "rounded-lg", "p-3", "overflow-x-auto", "text-on-surface", "whitespace-pre-wrap"], [3, "secondary", "primary", "secondaryLabel", "primaryLabel", "primaryRouterLink"], [1, "cursor-pointer", "list-none", "font-bold", "text-sm", "text-primary", "flex", "items-center", "justify-between", "gap-2"], [1, "flex", "items-center", "gap-2"], [1, "material-symbols-outlined", "text-lg"], [1, "material-symbols-outlined", "text-on-surface-variant/70", "group-open:rotate-180", "transition-transform"], [1, "mt-4", "space-y-4", "text-sm", "text-on-surface-variant", "border-t", "border-outline-variant/15", "pt-4"], ["href", "https://docs.verifik.co/resources/create-a-person-with-liveness/", "target", "_blank", "rel", "noopener noreferrer", 1, "text-primary", "underline", "underline-offset-2"], ["href", "https://docs.verifik.co/verifik-es/resources/personas/crear-una-persona-con-deteccion-de-vida/", "target", "_blank", "rel", "noopener noreferrer", 1, "text-primary", "underline", "underline-offset-2"], [1, "text-xs", "leading-relaxed"], [1, "font-mono", "text-xs", "text-on-surface", "mb-1"], [1, "overflow-x-auto"], [1, "w-full", "text-xs", "border-collapse"], [1, "border-b", "border-outline-variant/20"], [1, "text-left", "py-2", "pr-2", "font-semibold", "text-on-surface"], [1, "text-left", "py-2", "font-semibold", "text-on-surface"], [1, "border-b", "border-outline-variant/10"], [1, "py-2", "pr-2", "font-mono"], [1, "font-mono"], [1, "text-left", "py-2", "pr-1"], [1, "text-left", "py-2"], [1, "border-b", "border-outline-variant/10", "align-top"], [1, "py-2", "font-mono", "text-primary"], [1, "align-top"], [1, "list-disc", "pl-5", "space-y-1", "text-xs"]], template: function CreatePersonWithLivenessDemoComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-demo-page-shell")(1, "div", 1)(2, "h2", 2);
        \u0275\u0275template(3, CreatePersonWithLivenessDemoComponent_Conditional_3_Template, 2, 3)(4, CreatePersonWithLivenessDemoComponent_Conditional_4_Template, 2, 3)(5, CreatePersonWithLivenessDemoComponent_Conditional_5_Template, 2, 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p", 3);
        \u0275\u0275template(7, CreatePersonWithLivenessDemoComponent_Conditional_7_Template, 2, 3)(8, CreatePersonWithLivenessDemoComponent_Conditional_8_Template, 2, 3)(9, CreatePersonWithLivenessDemoComponent_Conditional_9_Template, 2, 3);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(10, CreatePersonWithLivenessDemoComponent_Conditional_10_Template, 1, 0, "div", 4)(11, CreatePersonWithLivenessDemoComponent_Conditional_11_Template, 102, 106, "form", 5)(12, CreatePersonWithLivenessDemoComponent_Conditional_12_Template, 5, 3, "div", 6)(13, CreatePersonWithLivenessDemoComponent_Conditional_13_Template, 1, 1, "app-create-person-already-exists-result", 7)(14, CreatePersonWithLivenessDemoComponent_Conditional_14_Template, 15, 13, "div", 8)(15, CreatePersonWithLivenessDemoComponent_Conditional_15_Template, 166, 127, "details", 9);
        \u0275\u0275element(16, "app-demo-related-docs-section", 10);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.step === "result" ? 3 : ctx.step === "conflict" ? 4 : 5);
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.step === "result" ? 7 : ctx.step === "conflict" ? 8 : 9);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(!ctx.authChecked ? 10 : ctx.step === "form" ? 11 : ctx.step === "processing" ? 12 : ctx.step === "conflict" ? 13 : 14);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(ctx.showApiReference ? 15 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("items", ctx.relatedDocs);
      }
    }, dependencies: [
      CommonModule,
      JsonPipe,
      FormsModule,
      \u0275NgNoValidate,
      NgSelectOption,
      \u0275NgSelectMultipleOption,
      DefaultValueAccessor,
      RangeValueAccessor,
      SelectControlValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      RequiredValidator,
      NgModel,
      NgForm,
      TranslocoModule,
      TranslocoPipe,
      DemoPageShellComponent,
      DemoRelatedDocsSectionComponent,
      CreatePersonAlreadyExistsResultComponent,
      DemoCaptureOptionHeadingComponent,
      DemoChooseOneCalloutComponent,
      DemoOrDividerComponent,
      DemoScannerShellComponent,
      DemoUploadImageButtonComponent,
      DemoRasterImageComponent,
      FaceGuidedCameraComponent,
      DemoResultActionsComponent,
      DemoSandboxResultBannerComponent
    ], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CreatePersonWithLivenessDemoComponent, [{
    type: Component,
    args: [{ selector: "app-create-person-with-liveness-demo", standalone: true, imports: [
      CommonModule,
      FormsModule,
      TranslocoModule,
      DemoPageShellComponent,
      DemoRelatedDocsSectionComponent,
      CreatePersonAlreadyExistsResultComponent,
      DemoCaptureOptionHeadingComponent,
      DemoChooseOneCalloutComponent,
      DemoOrDividerComponent,
      DemoScannerShellComponent,
      DemoUploadImageButtonComponent,
      DemoRasterImageComponent,
      FaceGuidedCameraComponent,
      DemoResultActionsComponent,
      DemoSandboxResultBannerComponent
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `<app-demo-page-shell>\r
    <div class="mb-8">\r
        <h2 class="text-3xl font-black tracking-tight text-on-surface mb-2">\r
            @if (step === 'result') {\r
                {{ 'smartEnrollDemos.createPersonWithLiveness.heroTitleResult' | transloco }}\r
            } @else if (step === 'conflict') {\r
                {{ 'smartEnrollDemos.createPersonWithLiveness.heroTitleConflict' | transloco }}\r
            } @else {\r
                {{ 'smartEnrollDemos.createPersonWithLiveness.heroTitleForm' | transloco }}\r
            }\r
        </h2>\r
        <p class="text-on-surface-variant">\r
            @if (step === 'result') {\r
                {{ 'smartEnrollDemos.createPersonWithLiveness.heroSubtitleResult' | transloco }}\r
            } @else if (step === 'conflict') {\r
                {{ 'smartEnrollDemos.createPersonWithLiveness.heroSubtitleConflict' | transloco }}\r
            } @else {\r
                {{ 'smartEnrollDemos.createPersonWithLiveness.heroSubtitleForm' | transloco }}\r
            }\r
        </p>\r
    </div>\r
\r
    @if (!authChecked) {\r
        <div class="h-60 rounded-xl bg-surface-container-high animate-pulse"></div>\r
    } @else if (step === 'form') {\r
        <form (ngSubmit)="handleSubmit()" class="space-y-5">\r
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">\r
                <div>\r
                    <label class="block text-sm font-semibold text-on-surface mb-1.5" for="plv-name">\r
                        {{ 'smartEnrollDemos.createPersonWithLiveness.fullNameLabel' | transloco }}\r
                        <span class="text-error">{{ 'smartEnrollDemos.common.requiredStar' | transloco }}</span>\r
                    </label>\r
                    <input\r
                        id="plv-name"\r
                        type="text"\r
                        required\r
                        [(ngModel)]="name"\r
                        name="name"\r
                        [placeholder]="'smartEnrollDemos.createPersonWithLiveness.namePlaceholder' | transloco"\r
                        class="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg px-4 py-3 text-on-surface placeholder-on-surface-variant/50 text-sm focus:outline-none focus:border-primary/60 transition-colors"\r
                    />\r
                </div>\r
                <div>\r
                    <label class="block text-sm font-semibold text-on-surface mb-1.5" for="plv-gender">\r
                        {{ 'smartEnrollDemos.createPersonWithLiveness.genderLabel' | transloco }}\r
                        <span class="text-error">{{ 'smartEnrollDemos.common.requiredStar' | transloco }}</span>\r
                    </label>\r
                    <select\r
                        id="plv-gender"\r
                        [(ngModel)]="gender"\r
                        name="gender"\r
                        class="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg px-4 py-3 text-on-surface text-sm focus:outline-none focus:border-primary/60 transition-colors"\r
                    >\r
                        <option value="M">{{ 'smartEnrollDemos.common.male' | transloco }}</option>\r
                        <option value="F">{{ 'smartEnrollDemos.common.female' | transloco }}</option>\r
                    </select>\r
                </div>\r
            </div>\r
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">\r
                <div>\r
                    <label class="block text-sm font-semibold text-on-surface mb-1.5" for="plv-dob">\r
                        {{ 'smartEnrollDemos.createPersonWithLiveness.dobLabel' | transloco }}\r
                        <span class="text-error">{{ 'smartEnrollDemos.common.requiredStar' | transloco }}</span>\r
                    </label>\r
                    <input\r
                        id="plv-dob"\r
                        type="date"\r
                        required\r
                        [(ngModel)]="dob"\r
                        name="dob"\r
                        class="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg px-4 py-3 text-on-surface text-sm focus:outline-none focus:border-primary/60 transition-colors"\r
                    />\r
                </div>\r
                <div>\r
                    <label class="block text-sm font-semibold text-on-surface mb-1.5" for="plv-nat">\r
                        {{ 'smartEnrollDemos.createPersonWithLiveness.nationalityLabel' | transloco }}\r
                    </label>\r
                    <input\r
                        id="plv-nat"\r
                        type="text"\r
                        [(ngModel)]="nationality"\r
                        name="nationality"\r
                        [placeholder]="'smartEnrollDemos.createPersonWithLiveness.nationalityPlaceholder' | transloco"\r
                        class="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg px-4 py-3 text-on-surface placeholder-on-surface-variant/50 text-sm focus:outline-none focus:border-primary/60 transition-colors"\r
                    />\r
                </div>\r
            </div>\r
            <div>\r
                <label class="block text-sm font-semibold text-on-surface mb-1.5" for="plv-col">\r
                    {{ 'smartEnrollDemos.createPersonWithLiveness.collectionIdLabel' | transloco }}\r
                    <span class="text-error">{{ 'smartEnrollDemos.common.requiredStar' | transloco }}</span>\r
                </label>\r
                <input\r
                    id="plv-col"\r
                    type="text"\r
                    required\r
                    [(ngModel)]="collectionId"\r
                    name="collectionId"\r
                    [placeholder]="'smartEnrollDemos.createPersonWithLiveness.collectionIdPlaceholder' | transloco"\r
                    class="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg px-4 py-3 text-on-surface placeholder-on-surface-variant/50 text-sm focus:outline-none focus:border-primary/60 transition-colors"\r
                />\r
            </div>\r
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-5">\r
                <div>\r
                    <label class="block text-sm font-semibold text-on-surface mb-1.5">\r
                        {{ 'smartEnrollDemos.createPersonWithLiveness.livenessMinLabel' | transloco: { score: livenessMinScore.toFixed(2) } }}\r
                    </label>\r
                    <input\r
                        type="range"\r
                        min="0.5"\r
                        max="1"\r
                        step="0.01"\r
                        [(ngModel)]="livenessMinScore"\r
                        name="livenessMinScore"\r
                        class="w-full"\r
                    />\r
                </div>\r
                <div>\r
                    <label class="block text-sm font-semibold text-on-surface mb-1.5">\r
                        {{ 'smartEnrollDemos.createPersonWithLiveness.matchMinLabel' | transloco: { score: minScore.toFixed(2) } }}\r
                    </label>\r
                    <input type="range" min="0.5" max="1" step="0.01" [(ngModel)]="minScore" name="minScore" class="w-full" />\r
                </div>\r
                <div>\r
                    <label class="block text-sm font-semibold text-on-surface mb-1.5">\r
                        {{ 'smartEnrollDemos.createPersonWithLiveness.searchModeLabel' | transloco }}\r
                    </label>\r
                    <select\r
                        [(ngModel)]="searchMode"\r
                        name="searchMode"\r
                        class="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg px-3 py-2 text-on-surface text-sm focus:outline-none focus:border-primary/60"\r
                    >\r
                        <option value="FAST">FAST</option>\r
                        <option value="ACCURATE">ACCURATE</option>\r
                    </select>\r
                </div>\r
            </div>\r
            <div>\r
                <label class="block text-sm font-semibold text-on-surface mb-1.5">\r
                    {{ 'smartEnrollDemos.createPersonWithLiveness.faceImagesLabel' | transloco }}\r
                    <span class="text-error">{{ 'smartEnrollDemos.common.requiredStar' | transloco }}</span>\r
                </label>\r
                <div class="mb-3 space-y-5">\r
                    <app-demo-choose-one-callout\r
                        [description]="'smartEnrollDemos.createPersonWithLiveness.chooseOneDescription' | transloco"\r
                    />\r
                    <section aria-labelledby="create-person-live-camera-heading">\r
                        <app-demo-capture-option-heading\r
                            label="A"\r
                            id="create-person-live-camera-heading"\r
                            [title]="'smartEnrollDemos.createPersonWithLiveness.cameraTitle' | transloco"\r
                            [subtitle]="'smartEnrollDemos.createPersonWithLiveness.cameraSubtitle' | transloco"\r
                        />\r
                        <app-demo-scanner-shell>\r
                            <div class="flex min-h-0 flex-1 flex-col">\r
                                <app-face-guided-camera\r
                                    [fillFrame]="true"\r
                                    [hideIdleExplainer]="true"\r
                                    [captureSuccessFeedbackMs]="750"\r
                                    (captured)="onFaceCapture($event)"\r
                                />\r
                            </div>\r
                        </app-demo-scanner-shell>\r
                    </section>\r
                    <app-demo-or-divider />\r
                    <section aria-labelledby="create-person-live-upload-heading">\r
                        <app-demo-capture-option-heading\r
                            label="B"\r
                            id="create-person-live-upload-heading"\r
                            [title]="'smartEnrollDemos.createPersonWithLiveness.uploadTitle' | transloco"\r
                            [subtitle]="'smartEnrollDemos.createPersonWithLiveness.uploadSubtitle' | transloco"\r
                        />\r
                        <app-demo-upload-image-button\r
                            (clicked)="triggerFilePicker()"\r
                            [primaryText]="\r
                                images.length\r
                                    ? ('smartEnrollDemos.common.imagesAddMore' | transloco: { count: images.length })\r
                                    : ('smartEnrollDemos.common.uploadFaceImages' | transloco)\r
                            "\r
                            [secondaryText]="'smartEnrollDemos.common.jpegPngGallery' | transloco"\r
                            icon="add_photo_alternate"\r
                        />\r
                    </section>\r
                </div>\r
                @if (previews.length > 0) {\r
                    <div class="flex flex-wrap gap-2 mb-3">\r
                        @for (preview of previews; track $index) {\r
                            <app-demo-raster-image\r
                                [src]="preview"\r
                                alt=""\r
                                [width]="80"\r
                                [height]="80"\r
                                className="w-20 h-20 object-cover rounded-lg border border-frost"\r
                            />\r
                        }\r
                    </div>\r
                }\r
                <input\r
                    #fileInput\r
                    type="file"\r
                    accept="image/*"\r
                    multiple\r
                    class="hidden"\r
                    (change)="onFilesSelected($event)"\r
                />\r
            </div>\r
            @if (error) {\r
                <div class="px-4 py-3 bg-error-container/20 border border-error/20 rounded-lg flex items-center gap-2 text-sm text-error">\r
                    <span class="material-symbols-outlined text-sm">error_outline</span>\r
                    {{ error }}\r
                </div>\r
            }\r
            <button\r
                type="submit"\r
                [disabled]="!images.length"\r
                class="demo-btn-primary"\r
            >\r
                {{ 'smartEnrollDemos.createPersonWithLiveness.submit' | transloco }}\r
            </button>\r
        </form>\r
    } @else if (step === 'processing') {\r
        <div class="flex flex-col items-center justify-center py-20 gap-4">\r
            <div class="w-12 h-12 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>\r
            <p class="text-on-surface font-semibold">{{ 'smartEnrollDemos.createPersonWithLiveness.processing' | transloco }}</p>\r
        </div>\r
    } @else if (step === 'conflict') {\r
        <app-create-person-already-exists-result\r
            [previews]="previews"\r
            (editForm)="backToFormFromConflict()"\r
            (backToDemos)="backToDemos()"\r
        />\r
    } @else {\r
        <div class="space-y-4">\r
            <app-demo-sandbox-result-banner />\r
            <div class="rounded-2xl bg-surface-container-low border border-primary/20 p-6">\r
                <div class="flex items-center gap-3 mb-4">\r
                    <span class="material-symbols-outlined text-primary text-2xl">check_circle</span>\r
                    <p class="font-bold text-on-surface">{{ 'smartEnrollDemos.createPersonWithLiveness.successTitle' | transloco }}</p>\r
                </div>\r
                <pre class="text-[0.65rem] font-mono bg-surface-container-high/80 rounded-lg p-3 overflow-x-auto text-on-surface whitespace-pre-wrap">{{\r
                    result | json\r
                }}</pre>\r
            </div>\r
            <app-demo-result-actions\r
                [secondaryLabel]="'smartEnrollDemos.createPersonWithLiveness.tryAgain' | transloco"\r
                [primaryLabel]="'smartEnrollDemos.common.backToDemos' | transloco"\r
                [primaryRouterLink]="null"\r
                (secondary)="reset()"\r
                (primary)="backToDemos()"\r
            />\r
        </div>\r
    }\r
\r
    @if (showApiReference) {\r
        <details class="mt-10 rounded-xl border border-outline-variant/20 bg-surface-container-low/50 text-left max-w-3xl mx-auto w-full px-4 py-3 group">\r
            <summary class="cursor-pointer list-none font-bold text-sm text-primary flex items-center justify-between gap-2">\r
                <span class="flex items-center gap-2">\r
                    <span class="material-symbols-outlined text-lg">menu_book</span>\r
                    {{ 'smartEnrollDemos.createPersonWithLiveness.apiRefSummary' | transloco }}\r
                </span>\r
                <span class="material-symbols-outlined text-on-surface-variant/70 group-open:rotate-180 transition-transform">\r
                    expand_more\r
                </span>\r
            </summary>\r
            <div class="mt-4 space-y-4 text-sm text-on-surface-variant border-t border-outline-variant/15 pt-4">\r
                <p>\r
                    {{ 'smartEnrollDemos.createPersonWithLiveness.apiRefDocsEnLead' | transloco }}\r
                    <a\r
                        href="https://docs.verifik.co/resources/create-a-person-with-liveness/"\r
                        target="_blank"\r
                        rel="noopener noreferrer"\r
                        class="text-primary underline underline-offset-2"\r
                    >\r
                        {{ 'smartEnrollDemos.createPersonWithLiveness.apiRefDocsEnLink' | transloco }}\r
                    </a>\r
                </p>\r
                <p>\r
                    {{ 'smartEnrollDemos.createPersonWithLiveness.apiRefDocsEsLead' | transloco }}\r
                    <a\r
                        href="https://docs.verifik.co/verifik-es/resources/personas/crear-una-persona-con-deteccion-de-vida/"\r
                        target="_blank"\r
                        rel="noopener noreferrer"\r
                        class="text-primary underline underline-offset-2"\r
                    >\r
                        {{ 'smartEnrollDemos.createPersonWithLiveness.apiRefDocsEsLink' | transloco }}\r
                    </a>\r
                </p>\r
                <p class="text-xs leading-relaxed">{{ 'smartEnrollDemos.createPersonWithLiveness.apiRefBody' | transloco }}</p>\r
                <div>\r
                    <p class="font-mono text-xs text-on-surface mb-1">{{ 'smartEnrollDemos.createPersonWithLiveness.apiRefEndpoint' | transloco }}</p>\r
                    <p class="text-xs leading-relaxed">{{ 'smartEnrollDemos.createPersonWithLiveness.apiRefEndpointDesc' | transloco }}</p>\r
                </div>\r
                <div class="overflow-x-auto">\r
                    <table class="w-full text-xs border-collapse">\r
                        <thead>\r
                            <tr class="border-b border-outline-variant/20">\r
                                <th class="text-left py-2 pr-2 font-semibold text-on-surface">{{ 'smartEnrollDemos.common.tableHeader' | transloco }}</th>\r
                                <th class="text-left py-2 font-semibold text-on-surface">{{ 'smartEnrollDemos.common.tableValue' | transloco }}</th>\r
                            </tr>\r
                        </thead>\r
                        <tbody>\r
                            <tr class="border-b border-outline-variant/10">\r
                                <td class="py-2 pr-2 font-mono">Content-Type</td>\r
                                <td class="font-mono">application/json</td>\r
                            </tr>\r
                            <tr>\r
                                <td class="py-2 pr-2 font-mono">Authorization</td>\r
                                <td class="font-mono">Bearer &lt;token&gt;</td>\r
                            </tr>\r
                        </tbody>\r
                    </table>\r
                </div>\r
                <div class="overflow-x-auto">\r
                    <table class="w-full text-xs border-collapse">\r
                        <thead>\r
                            <tr class="border-b border-outline-variant/20">\r
                                <th class="text-left py-2 pr-1">{{ 'smartEnrollDemos.common.tableParam' | transloco }}</th>\r
                                <th class="text-left py-2 pr-1">{{ 'smartEnrollDemos.common.tableReq' | transloco }}</th>\r
                                <th class="text-left py-2">{{ 'smartEnrollDemos.common.tableDescription' | transloco }}</th>\r
                            </tr>\r
                        </thead>\r
                        <tbody class="text-on-surface-variant">\r
                            <tr class="border-b border-outline-variant/10 align-top">\r
                                <td class="py-2 font-mono text-primary">{{ 'smartEnrollDemos.createPersonWithLiveness.paramName' | transloco }}</td>\r
                                <td>{{ 'smartEnrollDemos.common.yes' | transloco }}</td>\r
                                <td>{{ 'smartEnrollDemos.createPersonWithLiveness.paramNameDesc' | transloco }}</td>\r
                            </tr>\r
                            <tr class="border-b border-outline-variant/10 align-top">\r
                                <td class="py-2 font-mono text-primary">{{ 'smartEnrollDemos.createPersonWithLiveness.paramImages' | transloco }}</td>\r
                                <td>{{ 'smartEnrollDemos.common.yes' | transloco }}</td>\r
                                <td>{{ 'smartEnrollDemos.createPersonWithLiveness.paramImagesDesc' | transloco }}</td>\r
                            </tr>\r
                            <tr class="border-b border-outline-variant/10 align-top">\r
                                <td class="py-2 font-mono text-primary">{{ 'smartEnrollDemos.createPersonWithLiveness.paramGender' | transloco }}</td>\r
                                <td>{{ 'smartEnrollDemos.common.yes' | transloco }}</td>\r
                                <td>{{ 'smartEnrollDemos.createPersonWithLiveness.paramGenderDesc' | transloco }}</td>\r
                            </tr>\r
                            <tr class="border-b border-outline-variant/10 align-top">\r
                                <td class="py-2 font-mono text-primary">{{ 'smartEnrollDemos.createPersonWithLiveness.paramDob' | transloco }}</td>\r
                                <td>{{ 'smartEnrollDemos.common.yes' | transloco }}</td>\r
                                <td>{{ 'smartEnrollDemos.createPersonWithLiveness.paramDobDesc' | transloco }}</td>\r
                            </tr>\r
                            <tr class="border-b border-outline-variant/10 align-top">\r
                                <td class="py-2 font-mono text-primary">{{ 'smartEnrollDemos.createPersonWithLiveness.paramCollectionId' | transloco }}</td>\r
                                <td>{{ 'smartEnrollDemos.common.yes' | transloco }}</td>\r
                                <td>{{ 'smartEnrollDemos.createPersonWithLiveness.paramCollectionIdDesc' | transloco }}</td>\r
                            </tr>\r
                            <tr class="border-b border-outline-variant/10 align-top">\r
                                <td class="py-2 font-mono text-primary">{{ 'smartEnrollDemos.createPersonWithLiveness.paramLivenessMin' | transloco }}</td>\r
                                <td>{{ 'smartEnrollDemos.common.yes' | transloco }}</td>\r
                                <td>{{ 'smartEnrollDemos.createPersonWithLiveness.paramLivenessMinDesc' | transloco }}</td>\r
                            </tr>\r
                            <tr class="border-b border-outline-variant/10 align-top">\r
                                <td class="py-2 font-mono text-primary">{{ 'smartEnrollDemos.createPersonWithLiveness.paramMinScore' | transloco }}</td>\r
                                <td>{{ 'smartEnrollDemos.common.yes' | transloco }}</td>\r
                                <td>{{ 'smartEnrollDemos.createPersonWithLiveness.paramMinScoreDesc' | transloco }}</td>\r
                            </tr>\r
                            <tr class="border-b border-outline-variant/10 align-top">\r
                                <td class="py-2 font-mono text-primary">{{ 'smartEnrollDemos.createPersonWithLiveness.paramSearchMode' | transloco }}</td>\r
                                <td>{{ 'smartEnrollDemos.common.yes' | transloco }}</td>\r
                                <td>{{ 'smartEnrollDemos.createPersonWithLiveness.paramSearchModeDesc' | transloco }}</td>\r
                            </tr>\r
                            <tr class="align-top">\r
                                <td class="py-2 font-mono text-primary">{{ 'smartEnrollDemos.createPersonWithLiveness.paramNationality' | transloco }}</td>\r
                                <td>{{ 'smartEnrollDemos.common.no' | transloco }}</td>\r
                                <td>{{ 'smartEnrollDemos.createPersonWithLiveness.paramNationalityDesc' | transloco }}</td>\r
                            </tr>\r
                        </tbody>\r
                    </table>\r
                </div>\r
                <pre class="text-[0.65rem] font-mono bg-surface-container-high/80 rounded-lg p-3 overflow-x-auto text-on-surface whitespace-pre-wrap">{{ apiFetchExample }}</pre>\r
                <ul class="list-disc pl-5 space-y-1 text-xs">\r
                    <li>{{ 'smartEnrollDemos.createPersonWithLiveness.bullet1' | transloco }}</li>\r
                    <li>{{ 'smartEnrollDemos.createPersonWithLiveness.bullet2' | transloco }}</li>\r
                </ul>\r
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CreatePersonWithLivenessDemoComponent, { className: "CreatePersonWithLivenessDemoComponent", filePath: "src/app/modules/smart-enroll/demos/pages/create-person-with-liveness/create-person-with-liveness-demo.component.ts", lineNumber: 72 });
})();
export {
  CreatePersonWithLivenessDemoComponent
};
//# sourceMappingURL=chunk-2GF3SZIC.js.map
