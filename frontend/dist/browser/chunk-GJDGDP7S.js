import {
  CreatePersonAlreadyExistsResultComponent
} from "./chunk-TZEGSPGH.js";
import {
  CreatePersonResultComponent
} from "./chunk-BS57QTVO.js";
import "./chunk-VVQ65S6A.js";
import "./chunk-Q7ZENBRV.js";
import {
  CollectionMultiSelectComponent
} from "./chunk-RIMODHJZ.js";
import "./chunk-VY7PIZXV.js";
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
import "./chunk-CRJOXNLH.js";
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
  fileToBase64,
  isPersonAlreadySetError
} from "./chunk-6YAJI7WI.js";
import {
  NationalitySelectComponent,
  isCatalogNationality,
  nationalityDisplayName,
  normalizeNationalityCode
} from "./chunk-ZR4RFQ5X.js";
import "./chunk-QGSXQIBB.js";
import "./chunk-B4YUVLJ7.js";
import {
  CountryService
} from "./chunk-ENWXGLEW.js";
import "./chunk-JURKDGMK.js";
import "./chunk-DT4JVZCC.js";
import "./chunk-W5MZFF7W.js";
import "./chunk-QUFOCOZK.js";
import "./chunk-5HABGTLH.js";
import "./chunk-PDWCMJ4H.js";
import "./chunk-GX5GK4J6.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  RequiredValidator,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-JBF67GMG.js";
import {
  TranslocoModule,
  TranslocoPipe,
  TranslocoService
} from "./chunk-FWBWCXY5.js";
import {
  Router
} from "./chunk-QL64NPDU.js";
import "./chunk-3V5B4ZWC.js";
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
  __async
} from "./chunk-F5M2C4EZ.js";

// src/app/modules/smart-enroll/demos/pages/create-person/create-person-demo.component.ts
var _c0 = ["fileInput"];
var _c1 = (a0) => ({ count: a0 });
function CreatePersonDemoComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-demo-stage-hero", 1);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275pipe(4, "transloco");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("eyebrow", \u0275\u0275pipeBind1(1, 5, "smartEnrollDemos.demoStage.enroll"))("title", \u0275\u0275pipeBind1(2, 7, "smartEnrollDemos.createPerson.heroTitleForm"))("subtitle", \u0275\u0275pipeBind1(3, 9, "smartEnrollDemos.createPerson.heroSubtitleForm"))("chipLabel", \u0275\u0275pipeBind1(4, 11, "smartEnrollDemos.createPerson.nationalityLabel"))("chipValue", ctx_r0.nationalityChip);
  }
}
function CreatePersonDemoComponent_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "smartEnrollDemos.createPerson.heroTitleResult"), " ");
  }
}
function CreatePersonDemoComponent_Conditional_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "smartEnrollDemos.createPerson.heroTitleConflict"), " ");
  }
}
function CreatePersonDemoComponent_Conditional_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "smartEnrollDemos.createPerson.heroTitleForm"), " ");
  }
}
function CreatePersonDemoComponent_Conditional_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "smartEnrollDemos.createPerson.heroSubtitleResult"), " ");
  }
}
function CreatePersonDemoComponent_Conditional_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "smartEnrollDemos.createPerson.heroSubtitleConflict"), " ");
  }
}
function CreatePersonDemoComponent_Conditional_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "smartEnrollDemos.createPerson.heroSubtitleForm"), " ");
  }
}
function CreatePersonDemoComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "h2", 10);
    \u0275\u0275template(2, CreatePersonDemoComponent_Conditional_2_Conditional_2_Template, 2, 3)(3, CreatePersonDemoComponent_Conditional_2_Conditional_3_Template, 2, 3)(4, CreatePersonDemoComponent_Conditional_2_Conditional_4_Template, 2, 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 11);
    \u0275\u0275template(6, CreatePersonDemoComponent_Conditional_2_Conditional_6_Template, 2, 3)(7, CreatePersonDemoComponent_Conditional_2_Conditional_7_Template, 2, 3)(8, CreatePersonDemoComponent_Conditional_2_Conditional_8_Template, 2, 3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.step === "result" ? 2 : ctx_r0.step === "conflict" ? 3 : 4);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r0.step === "result" ? 6 : ctx_r0.step === "conflict" ? 7 : 8);
  }
}
function CreatePersonDemoComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 3);
  }
}
function CreatePersonDemoComponent_Conditional_4_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "span", 44);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.collectionsError, " ");
  }
}
function CreatePersonDemoComponent_Conditional_4_Conditional_72_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-demo-raster-image", 45);
  }
  if (rf & 2) {
    const preview_r3 = ctx.$implicit;
    \u0275\u0275property("src", preview_r3)("width", 80)("height", 80);
  }
}
function CreatePersonDemoComponent_Conditional_4_Conditional_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275repeaterCreate(1, CreatePersonDemoComponent_Conditional_4_Conditional_72_For_2_Template, 1, 3, "app-demo-raster-image", 45, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.previews);
  }
}
function CreatePersonDemoComponent_Conditional_4_Conditional_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "span", 44);
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
function CreatePersonDemoComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 12);
    \u0275\u0275listener("ngSubmit", function CreatePersonDemoComponent_Conditional_4_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.handleSubmit());
    });
    \u0275\u0275elementStart(1, "app-demo-stage-card", 13);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementStart(4, "div", 14)(5, "div", 15)(6, "label", 16);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementStart(9, "span", 17);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "input", 18);
    \u0275\u0275pipe(13, "transloco");
    \u0275\u0275twoWayListener("ngModelChange", function CreatePersonDemoComponent_Conditional_4_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.name, $event) || (ctx_r0.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div")(15, "label", 19);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "transloco");
    \u0275\u0275elementStart(18, "span", 17);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "select", 20);
    \u0275\u0275twoWayListener("ngModelChange", function CreatePersonDemoComponent_Conditional_4_Template_select_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.gender, $event) || (ctx_r0.gender = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(22, "option", 21);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "option", 22);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div")(29, "label", 23);
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "transloco");
    \u0275\u0275elementStart(32, "span", 17);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "input", 24);
    \u0275\u0275twoWayListener("ngModelChange", function CreatePersonDemoComponent_Conditional_4_Template_input_ngModelChange_35_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.dob, $event) || (ctx_r0.dob = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 15)(37, "label", 25);
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "app-nationality-select", 26);
    \u0275\u0275twoWayListener("ngModelChange", function CreatePersonDemoComponent_Conditional_4_Template_app_nationality_select_ngModelChange_40_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.nationality, $event) || (ctx_r0.nationality = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 15)(42, "label", 27);
    \u0275\u0275text(43);
    \u0275\u0275pipe(44, "transloco");
    \u0275\u0275elementStart(45, "span", 17);
    \u0275\u0275text(46);
    \u0275\u0275pipe(47, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(48, CreatePersonDemoComponent_Conditional_4_Conditional_48_Template, 4, 1, "div", 28);
    \u0275\u0275elementStart(49, "app-collection-multi-select", 29);
    \u0275\u0275listener("selectedIdsChange", function CreatePersonDemoComponent_Conditional_4_Template_app_collection_multi_select_selectedIdsChange_49_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.selectedCollectionIds = $event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(50, "app-demo-stage-card", 30);
    \u0275\u0275pipe(51, "transloco");
    \u0275\u0275pipe(52, "transloco");
    \u0275\u0275elementStart(53, "div", 31);
    \u0275\u0275element(54, "app-demo-choose-one-callout", 32);
    \u0275\u0275pipe(55, "transloco");
    \u0275\u0275elementStart(56, "section", 33);
    \u0275\u0275element(57, "app-demo-capture-option-heading", 34);
    \u0275\u0275pipe(58, "transloco");
    \u0275\u0275pipe(59, "transloco");
    \u0275\u0275elementStart(60, "app-demo-scanner-shell")(61, "div", 35)(62, "app-face-guided-camera", 36);
    \u0275\u0275listener("captured", function CreatePersonDemoComponent_Conditional_4_Template_app_face_guided_camera_captured_62_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onFaceCapture($event));
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275element(63, "app-demo-or-divider");
    \u0275\u0275elementStart(64, "section", 37);
    \u0275\u0275element(65, "app-demo-capture-option-heading", 38);
    \u0275\u0275pipe(66, "transloco");
    \u0275\u0275pipe(67, "transloco");
    \u0275\u0275elementStart(68, "app-demo-upload-image-button", 39);
    \u0275\u0275pipe(69, "transloco");
    \u0275\u0275pipe(70, "transloco");
    \u0275\u0275pipe(71, "transloco");
    \u0275\u0275listener("clicked", function CreatePersonDemoComponent_Conditional_4_Template_app_demo_upload_image_button_clicked_68_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.triggerFilePicker());
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(72, CreatePersonDemoComponent_Conditional_4_Conditional_72_Template, 3, 0, "div", 40);
    \u0275\u0275elementStart(73, "input", 41, 0);
    \u0275\u0275listener("change", function CreatePersonDemoComponent_Conditional_4_Template_input_change_73_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onFilesSelected($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(75, CreatePersonDemoComponent_Conditional_4_Conditional_75_Template, 4, 1, "div", 42);
    \u0275\u0275elementStart(76, "button", 43);
    \u0275\u0275text(77);
    \u0275\u0275pipe(78, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("title", \u0275\u0275pipeBind1(2, 39, "smartEnrollDemos.personForm.identityTitle"))("help", \u0275\u0275pipeBind1(3, 41, "smartEnrollDemos.personForm.identityHelp"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 43, "smartEnrollDemos.createPerson.fullNameLabel"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 45, "smartEnrollDemos.common.requiredStar"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.name);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(13, 47, "smartEnrollDemos.createPerson.namePlaceholder"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 49, "smartEnrollDemos.createPerson.genderLabel"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 51, "smartEnrollDemos.common.requiredStar"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.gender);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 53, "smartEnrollDemos.common.male"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 55, "smartEnrollDemos.common.female"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(31, 57, "smartEnrollDemos.createPerson.dobLabel"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(34, 59, "smartEnrollDemos.common.requiredStar"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.dob);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(39, 61, "smartEnrollDemos.createPerson.nationalityLabel"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.nationality);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(44, 63, "smartEnrollDemos.createPerson.collectionsLabel"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(47, 65, "smartEnrollDemos.common.requiredStar"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.collectionsError ? 48 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("items", ctx_r0.collectionItems)("selectedIds", ctx_r0.selectedCollectionIds)("loading", ctx_r0.collectionsLoading)("emptySlot", ctx_r0.noCollectionsEmptySlot);
    \u0275\u0275advance();
    \u0275\u0275property("title", \u0275\u0275pipeBind1(51, 67, "smartEnrollDemos.personForm.faceTitle"))("help", \u0275\u0275pipeBind1(52, 69, "smartEnrollDemos.personForm.faceHelp"));
    \u0275\u0275advance(4);
    \u0275\u0275property("description", \u0275\u0275pipeBind1(55, 71, "smartEnrollDemos.createPerson.chooseOneDescription"));
    \u0275\u0275advance(3);
    \u0275\u0275property("title", \u0275\u0275pipeBind1(58, 73, "smartEnrollDemos.createPerson.cameraTitle"))("subtitle", \u0275\u0275pipeBind1(59, 75, "smartEnrollDemos.createPerson.cameraSubtitle"));
    \u0275\u0275advance(5);
    \u0275\u0275property("fillFrame", true)("hideIdleExplainer", true)("captureSuccessFeedbackMs", 750);
    \u0275\u0275advance(3);
    \u0275\u0275property("title", \u0275\u0275pipeBind1(66, 77, "smartEnrollDemos.createPerson.uploadTitle"))("subtitle", \u0275\u0275pipeBind1(67, 79, "smartEnrollDemos.createPerson.uploadSubtitle"));
    \u0275\u0275advance(3);
    \u0275\u0275property("primaryText", ctx_r0.images.length ? \u0275\u0275pipeBind2(69, 81, "smartEnrollDemos.common.imagesAddMore", \u0275\u0275pureFunction1(90, _c1, ctx_r0.images.length)) : \u0275\u0275pipeBind1(70, 84, "smartEnrollDemos.common.uploadFaceImages"))("secondaryText", \u0275\u0275pipeBind1(71, 86, "smartEnrollDemos.common.jpegPngGallery"));
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r0.previews.length > 0 ? 72 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.error ? 75 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r0.images.length || !ctx_r0.selectedCollectionIds.length || ctx_r0.collectionsLoading || ctx_r0.nationalityBlocked);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(78, 88, "smartEnrollDemos.createPerson.submit"), " ");
  }
}
function CreatePersonDemoComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "div", 46);
    \u0275\u0275elementStart(2, "p", 47);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "smartEnrollDemos.createPerson.processing"));
  }
}
function CreatePersonDemoComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-create-person-already-exists-result", 48);
    \u0275\u0275listener("editForm", function CreatePersonDemoComponent_Conditional_6_Template_app_create_person_already_exists_result_editForm_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.backToFormFromConflict());
    })("backToDemos", function CreatePersonDemoComponent_Conditional_6_Template_app_create_person_already_exists_result_backToDemos_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.backToDemos());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("previews", ctx_r0.previews);
  }
}
function CreatePersonDemoComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-create-person-result", 49);
    \u0275\u0275listener("enrollAnother", function CreatePersonDemoComponent_Conditional_7_Template_app_create_person_result_enrollAnother_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.reset());
    })("backToDemos", function CreatePersonDemoComponent_Conditional_7_Template_app_create_person_result_backToDemos_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.backToDemos());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("result", ctx_r0.result);
  }
}
function CreatePersonDemoComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "details", 8)(1, "summary", 50)(2, "span", 51)(3, "span", 52);
    \u0275\u0275text(4, "menu_book");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 53);
    \u0275\u0275text(8, " expand_more ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 54)(10, "p");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "transloco");
    \u0275\u0275elementStart(13, "a", 55);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "p", 56);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div")(20, "p", 57);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "p", 56);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 58)(27, "table", 59)(28, "thead")(29, "tr", 60)(30, "th", 61);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "th", 62);
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "tbody")(37, "tr", 63)(38, "td", 64);
    \u0275\u0275text(39, "Content-Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "td", 65);
    \u0275\u0275text(41, "application/json");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "tr")(43, "td", 64);
    \u0275\u0275text(44, "Authorization");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "td", 65);
    \u0275\u0275text(46, "Bearer <token>");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(47, "div", 58)(48, "table", 59)(49, "thead")(50, "tr", 60)(51, "th", 66);
    \u0275\u0275text(52);
    \u0275\u0275pipe(53, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "th", 66);
    \u0275\u0275text(55);
    \u0275\u0275pipe(56, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "th", 67);
    \u0275\u0275text(58);
    \u0275\u0275pipe(59, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(60, "tbody", 11)(61, "tr", 68)(62, "td", 69);
    \u0275\u0275text(63);
    \u0275\u0275pipe(64, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "td");
    \u0275\u0275text(66);
    \u0275\u0275pipe(67, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "td");
    \u0275\u0275text(69);
    \u0275\u0275pipe(70, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(71, "tr", 68)(72, "td", 69);
    \u0275\u0275text(73);
    \u0275\u0275pipe(74, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "td");
    \u0275\u0275text(76);
    \u0275\u0275pipe(77, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "td");
    \u0275\u0275text(79);
    \u0275\u0275pipe(80, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(81, "tr", 68)(82, "td", 69);
    \u0275\u0275text(83);
    \u0275\u0275pipe(84, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "td");
    \u0275\u0275text(86);
    \u0275\u0275pipe(87, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "td");
    \u0275\u0275text(89);
    \u0275\u0275pipe(90, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(91, "tr", 68)(92, "td", 69);
    \u0275\u0275text(93);
    \u0275\u0275pipe(94, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(95, "td");
    \u0275\u0275text(96);
    \u0275\u0275pipe(97, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(98, "td");
    \u0275\u0275text(99);
    \u0275\u0275pipe(100, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(101, "tr", 68)(102, "td", 69);
    \u0275\u0275text(103);
    \u0275\u0275pipe(104, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(105, "td");
    \u0275\u0275text(106);
    \u0275\u0275pipe(107, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(108, "td");
    \u0275\u0275text(109);
    \u0275\u0275pipe(110, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(111, "tr", 70)(112, "td", 69);
    \u0275\u0275text(113);
    \u0275\u0275pipe(114, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(115, "td");
    \u0275\u0275text(116);
    \u0275\u0275pipe(117, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(118, "td");
    \u0275\u0275text(119);
    \u0275\u0275pipe(120, "transloco");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(121, "pre", 71);
    \u0275\u0275text(122);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(123, "pre", 71);
    \u0275\u0275text(124);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(125, "ul", 72)(126, "li");
    \u0275\u0275text(127);
    \u0275\u0275pipe(128, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(129, "li");
    \u0275\u0275text(130);
    \u0275\u0275pipe(131, "transloco");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 33, "smartEnrollDemos.createPerson.apiRefSummary"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 35, "smartEnrollDemos.createPerson.apiRefOfficialDocs"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 37, "smartEnrollDemos.createPerson.apiRefLinkLabel"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 39, "smartEnrollDemos.createPerson.apiRefBody"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 41, "smartEnrollDemos.createPerson.apiRefEndpoint"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 43, "smartEnrollDemos.createPerson.apiRefEndpointDesc"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(32, 45, "smartEnrollDemos.common.tableHeader"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(35, 47, "smartEnrollDemos.common.tableValue"));
    \u0275\u0275advance(18);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(53, 49, "smartEnrollDemos.common.tableParam"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(56, 51, "smartEnrollDemos.common.tableReq"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(59, 53, "smartEnrollDemos.common.tableDescription"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(64, 55, "smartEnrollDemos.createPerson.paramName"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(67, 57, "smartEnrollDemos.common.yes"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(70, 59, "smartEnrollDemos.createPerson.paramNameDesc"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(74, 61, "smartEnrollDemos.createPerson.paramImages"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(77, 63, "smartEnrollDemos.common.yes"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(80, 65, "smartEnrollDemos.createPerson.paramImagesDesc"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(84, 67, "smartEnrollDemos.createPerson.paramGender"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(87, 69, "smartEnrollDemos.common.yes"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(90, 71, "smartEnrollDemos.createPerson.paramGenderDesc"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(94, 73, "smartEnrollDemos.createPerson.paramDob"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(97, 75, "smartEnrollDemos.common.yes"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(100, 77, "smartEnrollDemos.createPerson.paramDobDesc"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(104, 79, "smartEnrollDemos.createPerson.paramCollections"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(107, 81, "smartEnrollDemos.common.yes"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(110, 83, "smartEnrollDemos.createPerson.paramCollectionsDesc"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(114, 85, "smartEnrollDemos.createPerson.paramNationality"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(117, 87, "smartEnrollDemos.common.no"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(120, 89, "smartEnrollDemos.createPerson.paramNationalityDesc"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.apiFetchExample);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.apiResponseExample);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(128, 91, "smartEnrollDemos.createPerson.bullet1"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(131, 93, "smartEnrollDemos.createPerson.bullet2"));
  }
}
var DOCS_BASE = "https://docs.verifik.co";
var RELATED_DOC_HREFS = [
  `${DOCS_BASE}/resources/the-person-object`,
  `${DOCS_BASE}/resources/list-all-persons`,
  `${DOCS_BASE}/resources/retrieve-a-person`,
  `${DOCS_BASE}/resources/persons/update-a-person`,
  `${DOCS_BASE}/resources/persons/delete-a-person`,
  "/smart-enroll/demos/update-person",
  "/smart-enroll/demos/delete-person"
];
var RELATED_DOC_BADGE_MUTED = [true, false, false, false, false, false, false];
var CreatePersonDemoComponent = class _CreatePersonDemoComponent {
  constructor() {
    this._api = inject(BiometricsDemoApiService);
    this._router = inject(Router);
    this._transloco = inject(TranslocoService);
    this._cdr = inject(ChangeDetectorRef);
    this._countries = inject(CountryService);
    this.authChecked = false;
    this.step = "form";
    this.name = "";
    this.gender = "M";
    this.dob = "";
    this.collectionItems = [];
    this.collectionsLoading = false;
    this.collectionsError = null;
    this.selectedCollectionIds = [];
    this.nationality = "";
    this.images = [];
    this.previews = [];
    this.result = null;
    this.error = null;
    this.relatedDocs = [];
    this.noCollectionsEmptySlot = "";
    this.apiFetchExample = `await fetch("https://api.verifik.co/v2/face-recognition/persons", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: \`Bearer \${accessToken}\`,
  },
  body: JSON.stringify({
    name: "Jane Doe",
    gender: "F",
    date_of_birth: "1990-01-15",
    collections: ["<collectionMongoId>"],
    nationality: "CO",
    images: ["<base64>", "<base64>"],
  }),
});`;
    this.apiResponseExample = `// 200 OK \u2014 example shape
{
  "data": {
    "id": "\u2026",
    "name": "Jane Doe",
    "gender": "F",
    "date_of_birth": "1990-01-15",
    "collections": ["\u2026"],
    "\u2026": "\u2026"
  }
}`;
  }
  ngOnInit() {
    if (!this._api.ensureAuthenticated()) {
      this.authChecked = true;
      return;
    }
    this.authChecked = true;
    this.relatedDocs = this.buildRelatedDocs();
    this.noCollectionsEmptySlot = this.buildNoCollectionsEmptySlot();
    this.loadCollections();
  }
  get nationalityChip() {
    return nationalityDisplayName(this.nationality, this._countries.countries, (key) => this._transloco.translate(key), this._transloco.translate("smartEnrollDemos.personForm.nationalityNotSet"));
  }
  get nationalityBlocked() {
    return !isCatalogNationality(this.nationality, this._countries.countries);
  }
  get showApiReference() {
    return this.step !== "result" && this.step !== "conflict";
  }
  loadCollections() {
    this.collectionsLoading = true;
    this.collectionsError = null;
    this._cdr.markForCheck();
    this._api.listCollections().subscribe({
      next: (items) => {
        this.collectionItems = items;
        this.collectionsLoading = false;
        this._cdr.markForCheck();
      },
      error: (err) => {
        this.collectionsError = err.error ?? err.message ?? "Failed to load collections";
        this.collectionItems = [];
        this.collectionsLoading = false;
        this._cdr.markForCheck();
      }
    });
  }
  appendCapturedImage(preview, b64) {
    this.images = [...this.images, b64];
    this.previews = [...this.previews, preview];
    this._cdr.markForCheck();
  }
  onFaceCapture(event) {
    this.appendCapturedImage(event.dataUrl, event.base64);
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
    if (!this.images.length || !this.selectedCollectionIds.length || this.nationalityBlocked)
      return;
    this.step = "processing";
    this.error = null;
    this._cdr.markForCheck();
    this._api.createPerson({
      name: this.name,
      images: this.images,
      gender: this.gender,
      date_of_birth: this.dob,
      collections: this.selectedCollectionIds,
      nationality: normalizeNationalityCode(this.nationality) || void 0
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
    this.selectedCollectionIds = [];
    this.nationality = "";
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
  buildNoCollectionsEmptySlot() {
    const lead = this._transloco.translate("smartEnrollDemos.createPerson.noCollectionsLead");
    const cta = this._transloco.translate("smartEnrollDemos.createPerson.noCollectionsCta");
    const tail = this._transloco.translate("smartEnrollDemos.createPerson.noCollectionsTail");
    return `${lead} <a href="/smart-enroll/demos/create-collection" class="text-primary font-semibold underline underline-offset-2">${cta}</a> ${tail}`;
  }
  buildRelatedDocs() {
    return RELATED_DOC_HREFS.map((href, i) => ({
      href,
      title: this._transloco.translate(`smartEnrollDemos.createPerson.relatedDocs.${i}.title`),
      description: this._transloco.translate(`smartEnrollDemos.createPerson.relatedDocs.${i}.description`),
      badge: this._transloco.translate(`smartEnrollDemos.createPerson.relatedDocs.${i}.badge`),
      badgeMuted: RELATED_DOC_BADGE_MUTED[i]
    }));
  }
  static {
    this.\u0275fac = function CreatePersonDemoComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CreatePersonDemoComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CreatePersonDemoComponent, selectors: [["app-create-person-demo"]], viewQuery: function CreatePersonDemoComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.fileInput = _t.first);
      }
    }, decls: 10, vars: 4, consts: [["fileInput", ""], [3, "eyebrow", "title", "subtitle", "chipLabel", "chipValue"], [1, "mb-8"], [1, "h-60", "rounded-xl", "bg-surface-container-high", "animate-pulse"], [1, "grid", "grid-cols-1", "items-start", "gap-5", "xl:grid-cols-2"], [1, "flex", "flex-col", "items-center", "justify-center", "py-20", "gap-4"], [3, "previews"], [3, "result"], [1, "mt-10", "rounded-xl", "border", "border-outline-variant/20", "bg-surface-container-low/50", "text-left", "max-w-3xl", "mx-auto", "w-full", "px-4", "py-3", "group"], [3, "items"], [1, "text-3xl", "font-black", "tracking-tight", "text-on-surface", "mb-2"], [1, "text-on-surface-variant"], [1, "grid", "grid-cols-1", "items-start", "gap-5", "xl:grid-cols-2", 3, "ngSubmit"], ["number", "01", 3, "title", "help"], [1, "grid", "grid-cols-1", "gap-5", "sm:grid-cols-2"], [1, "sm:col-span-2"], ["for", "p-name", 1, "mb-1.5", "block", "text-sm", "font-semibold", "text-on-surface"], [1, "text-error"], ["id", "p-name", "type", "text", "required", "", "name", "name", 1, "w-full", "rounded-lg", "border", "border-outline-variant/30", "bg-surface-container-low", "px-4", "py-3", "text-sm", "text-on-surface", "outline-none", "transition-colors", "placeholder:text-on-surface-variant/50", "focus:border-primary/60", 3, "ngModelChange", "ngModel", "placeholder"], ["for", "p-gender", 1, "mb-1.5", "block", "text-sm", "font-semibold", "text-on-surface"], ["id", "p-gender", "name", "gender", 1, "w-full", "rounded-lg", "border", "border-outline-variant/30", "bg-surface-container-low", "px-4", "py-3", "text-sm", "text-on-surface", "outline-none", "transition-colors", "focus:border-primary/60", 3, "ngModelChange", "ngModel"], ["value", "M"], ["value", "F"], ["for", "p-dob", 1, "mb-1.5", "block", "text-sm", "font-semibold", "text-on-surface"], ["id", "p-dob", "type", "date", "required", "", "name", "dob", 1, "w-full", "rounded-lg", "border", "border-outline-variant/30", "bg-surface-container-low", "px-4", "py-3", "text-sm", "text-on-surface", "outline-none", "transition-colors", "focus:border-primary/60", 3, "ngModelChange", "ngModel"], ["for", "p-nat", 1, "mb-1.5", "block", "text-sm", "font-semibold", "text-on-surface"], ["inputId", "p-nat", "name", "nationality", 3, "ngModelChange", "ngModel"], ["for", "p-col", 1, "mb-1.5", "block", "text-sm", "font-semibold", "text-on-surface"], [1, "mb-2", "flex", "items-center", "gap-1.5", "text-sm", "text-error"], ["labelId", "p-col", 3, "selectedIdsChange", "items", "selectedIds", "loading", "emptySlot"], ["number", "02", 3, "title", "help"], [1, "mb-3", "space-y-5"], [3, "description"], ["aria-labelledby", "create-person-camera-heading"], ["label", "A", "id", "create-person-camera-heading", 3, "title", "subtitle"], [1, "flex", "min-h-0", "flex-1", "flex-col"], [3, "captured", "fillFrame", "hideIdleExplainer", "captureSuccessFeedbackMs"], ["aria-labelledby", "create-person-upload-heading"], ["label", "B", "id", "create-person-upload-heading", 3, "title", "subtitle"], ["icon", "add_photo_alternate", 3, "clicked", "primaryText", "secondaryText"], [1, "mb-3", "flex", "flex-wrap", "gap-2"], ["type", "file", "accept", "image/*", "multiple", "", 1, "hidden", 3, "change"], [1, "flex", "items-center", "gap-2", "rounded-lg", "border", "border-error/20", "bg-error-container/20", "px-4", "py-3", "text-sm", "text-error", "xl:col-span-2"], ["type", "submit", 1, "demo-btn-primary", "xl:col-span-2", 3, "disabled"], [1, "material-symbols-outlined", "text-sm"], ["alt", "", "className", "w-20 h-20 object-cover rounded-lg border border-frost", 3, "src", "width", "height"], [1, "w-12", "h-12", "border-2", "border-primary", "border-t-transparent", "rounded-full", "animate-spin"], [1, "text-on-surface", "font-semibold"], [3, "editForm", "backToDemos", "previews"], [3, "enrollAnother", "backToDemos", "result"], [1, "cursor-pointer", "list-none", "font-bold", "text-sm", "text-primary", "flex", "items-center", "justify-between", "gap-2"], [1, "flex", "items-center", "gap-2"], [1, "material-symbols-outlined", "text-lg"], [1, "material-symbols-outlined", "text-on-surface-variant/70", "group-open:rotate-180", "transition-transform"], [1, "mt-4", "space-y-4", "text-sm", "text-on-surface-variant", "border-t", "border-outline-variant/15", "pt-4"], ["href", "https://docs.verifik.co/resources/create-a-person/", "target", "_blank", "rel", "noopener noreferrer", 1, "text-primary", "underline", "underline-offset-2"], [1, "text-xs", "leading-relaxed"], [1, "font-mono", "text-xs", "text-on-surface", "mb-1"], [1, "overflow-x-auto"], [1, "w-full", "text-xs", "border-collapse"], [1, "border-b", "border-outline-variant/20"], [1, "text-left", "py-2", "pr-2", "font-semibold", "text-on-surface"], [1, "text-left", "py-2", "font-semibold", "text-on-surface"], [1, "border-b", "border-outline-variant/10"], [1, "py-2", "pr-2", "font-mono"], [1, "font-mono"], [1, "text-left", "py-2", "pr-1"], [1, "text-left", "py-2"], [1, "border-b", "border-outline-variant/10", "align-top"], [1, "py-2", "font-mono", "text-primary"], [1, "align-top"], [1, "text-[0.65rem]", "font-mono", "bg-surface-container-high/80", "rounded-lg", "p-3", "overflow-x-auto", "text-on-surface", "whitespace-pre-wrap"], [1, "list-disc", "pl-5", "space-y-1", "text-xs"]], template: function CreatePersonDemoComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-demo-page-shell");
        \u0275\u0275template(1, CreatePersonDemoComponent_Conditional_1_Template, 5, 13, "app-demo-stage-hero", 1)(2, CreatePersonDemoComponent_Conditional_2_Template, 9, 2, "div", 2)(3, CreatePersonDemoComponent_Conditional_3_Template, 1, 0, "div", 3)(4, CreatePersonDemoComponent_Conditional_4_Template, 79, 92, "form", 4)(5, CreatePersonDemoComponent_Conditional_5_Template, 5, 3, "div", 5)(6, CreatePersonDemoComponent_Conditional_6_Template, 1, 1, "app-create-person-already-exists-result", 6)(7, CreatePersonDemoComponent_Conditional_7_Template, 1, 1, "app-create-person-result", 7)(8, CreatePersonDemoComponent_Conditional_8_Template, 132, 95, "details", 8);
        \u0275\u0275element(9, "app-demo-related-docs-section", 9);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.step === "form" && ctx.authChecked ? 1 : 2);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.authChecked ? 3 : ctx.step === "form" ? 4 : ctx.step === "processing" ? 5 : ctx.step === "conflict" ? 6 : 7);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(ctx.showApiReference ? 8 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("items", ctx.relatedDocs);
      }
    }, dependencies: [
      CommonModule,
      FormsModule,
      \u0275NgNoValidate,
      NgSelectOption,
      \u0275NgSelectMultipleOption,
      DefaultValueAccessor,
      SelectControlValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      RequiredValidator,
      NgModel,
      NgForm,
      TranslocoModule,
      TranslocoPipe,
      DemoPageShellComponent,
      DemoStageHeroComponent,
      DemoStageCardComponent,
      DemoRelatedDocsSectionComponent,
      CollectionMultiSelectComponent,
      CreatePersonResultComponent,
      CreatePersonAlreadyExistsResultComponent,
      DemoCaptureOptionHeadingComponent,
      DemoChooseOneCalloutComponent,
      DemoOrDividerComponent,
      DemoScannerShellComponent,
      DemoUploadImageButtonComponent,
      DemoRasterImageComponent,
      FaceGuidedCameraComponent,
      NationalitySelectComponent
    ], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CreatePersonDemoComponent, [{
    type: Component,
    args: [{ selector: "app-create-person-demo", standalone: true, imports: [
      CommonModule,
      FormsModule,
      TranslocoModule,
      DemoPageShellComponent,
      DemoStageHeroComponent,
      DemoStageCardComponent,
      DemoRelatedDocsSectionComponent,
      CollectionMultiSelectComponent,
      CreatePersonResultComponent,
      CreatePersonAlreadyExistsResultComponent,
      DemoCaptureOptionHeadingComponent,
      DemoChooseOneCalloutComponent,
      DemoOrDividerComponent,
      DemoScannerShellComponent,
      DemoUploadImageButtonComponent,
      DemoRasterImageComponent,
      FaceGuidedCameraComponent,
      NationalitySelectComponent
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `<app-demo-page-shell>\r
    @if (step === 'form' && authChecked) {\r
        <app-demo-stage-hero\r
            [eyebrow]="'smartEnrollDemos.demoStage.enroll' | transloco"\r
            [title]="'smartEnrollDemos.createPerson.heroTitleForm' | transloco"\r
            [subtitle]="'smartEnrollDemos.createPerson.heroSubtitleForm' | transloco"\r
            [chipLabel]="'smartEnrollDemos.createPerson.nationalityLabel' | transloco"\r
            [chipValue]="nationalityChip"\r
        />\r
    } @else {\r
        <div class="mb-8">\r
            <h2 class="text-3xl font-black tracking-tight text-on-surface mb-2">\r
                @if (step === 'result') {\r
                    {{ 'smartEnrollDemos.createPerson.heroTitleResult' | transloco }}\r
                } @else if (step === 'conflict') {\r
                    {{ 'smartEnrollDemos.createPerson.heroTitleConflict' | transloco }}\r
                } @else {\r
                    {{ 'smartEnrollDemos.createPerson.heroTitleForm' | transloco }}\r
                }\r
            </h2>\r
            <p class="text-on-surface-variant">\r
                @if (step === 'result') {\r
                    {{ 'smartEnrollDemos.createPerson.heroSubtitleResult' | transloco }}\r
                } @else if (step === 'conflict') {\r
                    {{ 'smartEnrollDemos.createPerson.heroSubtitleConflict' | transloco }}\r
                } @else {\r
                    {{ 'smartEnrollDemos.createPerson.heroSubtitleForm' | transloco }}\r
                }\r
            </p>\r
        </div>\r
    }\r
\r
    @if (!authChecked) {\r
        <div class="h-60 rounded-xl bg-surface-container-high animate-pulse"></div>\r
    } @else if (step === 'form') {\r
        <form (ngSubmit)="handleSubmit()" class="grid grid-cols-1 items-start gap-5 xl:grid-cols-2">\r
            <app-demo-stage-card\r
                number="01"\r
                [title]="'smartEnrollDemos.personForm.identityTitle' | transloco"\r
                [help]="'smartEnrollDemos.personForm.identityHelp' | transloco"\r
            >\r
                <div class="grid grid-cols-1 gap-5 sm:grid-cols-2">\r
                    <div class="sm:col-span-2">\r
                        <label class="mb-1.5 block text-sm font-semibold text-on-surface" for="p-name">\r
                            {{ 'smartEnrollDemos.createPerson.fullNameLabel' | transloco }}\r
                            <span class="text-error">{{ 'smartEnrollDemos.common.requiredStar' | transloco }}</span>\r
                        </label>\r
                        <input\r
                            id="p-name"\r
                            type="text"\r
                            required\r
                            [(ngModel)]="name"\r
                            name="name"\r
                            [placeholder]="'smartEnrollDemos.createPerson.namePlaceholder' | transloco"\r
                            class="w-full rounded-lg border border-outline-variant/30 bg-surface-container-low px-4 py-3 text-sm text-on-surface outline-none transition-colors placeholder:text-on-surface-variant/50 focus:border-primary/60"\r
                        />\r
                    </div>\r
                    <div>\r
                        <label class="mb-1.5 block text-sm font-semibold text-on-surface" for="p-gender">\r
                            {{ 'smartEnrollDemos.createPerson.genderLabel' | transloco }}\r
                            <span class="text-error">{{ 'smartEnrollDemos.common.requiredStar' | transloco }}</span>\r
                        </label>\r
                        <select\r
                            id="p-gender"\r
                            [(ngModel)]="gender"\r
                            name="gender"\r
                            class="w-full rounded-lg border border-outline-variant/30 bg-surface-container-low px-4 py-3 text-sm text-on-surface outline-none transition-colors focus:border-primary/60"\r
                        >\r
                            <option value="M">{{ 'smartEnrollDemos.common.male' | transloco }}</option>\r
                            <option value="F">{{ 'smartEnrollDemos.common.female' | transloco }}</option>\r
                        </select>\r
                    </div>\r
                    <div>\r
                        <label class="mb-1.5 block text-sm font-semibold text-on-surface" for="p-dob">\r
                            {{ 'smartEnrollDemos.createPerson.dobLabel' | transloco }}\r
                            <span class="text-error">{{ 'smartEnrollDemos.common.requiredStar' | transloco }}</span>\r
                        </label>\r
                        <input\r
                            id="p-dob"\r
                            type="date"\r
                            required\r
                            [(ngModel)]="dob"\r
                            name="dob"\r
                            class="w-full rounded-lg border border-outline-variant/30 bg-surface-container-low px-4 py-3 text-sm text-on-surface outline-none transition-colors focus:border-primary/60"\r
                        />\r
                    </div>\r
                    <div class="sm:col-span-2">\r
                        <label class="mb-1.5 block text-sm font-semibold text-on-surface" for="p-nat">\r
                            {{ 'smartEnrollDemos.createPerson.nationalityLabel' | transloco }}\r
                        </label>\r
                        <app-nationality-select inputId="p-nat" name="nationality" [(ngModel)]="nationality" />\r
                    </div>\r
                    <div class="sm:col-span-2">\r
                        <label class="mb-1.5 block text-sm font-semibold text-on-surface" for="p-col">\r
                            {{ 'smartEnrollDemos.createPerson.collectionsLabel' | transloco }}\r
                            <span class="text-error">{{ 'smartEnrollDemos.common.requiredStar' | transloco }}</span>\r
                        </label>\r
                        @if (collectionsError) {\r
                            <div class="mb-2 flex items-center gap-1.5 text-sm text-error">\r
                                <span class="material-symbols-outlined text-sm">error_outline</span>\r
                                {{ collectionsError }}\r
                            </div>\r
                        }\r
                        <app-collection-multi-select\r
                            labelId="p-col"\r
                            [items]="collectionItems"\r
                            [selectedIds]="selectedCollectionIds"\r
                            (selectedIdsChange)="selectedCollectionIds = $event"\r
                            [loading]="collectionsLoading"\r
                            [emptySlot]="noCollectionsEmptySlot"\r
                        />\r
                    </div>\r
                </div>\r
            </app-demo-stage-card>\r
\r
            <app-demo-stage-card\r
                number="02"\r
                [title]="'smartEnrollDemos.personForm.faceTitle' | transloco"\r
                [help]="'smartEnrollDemos.personForm.faceHelp' | transloco"\r
            >\r
                <div class="mb-3 space-y-5">\r
                    <app-demo-choose-one-callout\r
                        [description]="'smartEnrollDemos.createPerson.chooseOneDescription' | transloco"\r
                    />\r
                    <section aria-labelledby="create-person-camera-heading">\r
                        <app-demo-capture-option-heading\r
                            label="A"\r
                            id="create-person-camera-heading"\r
                            [title]="'smartEnrollDemos.createPerson.cameraTitle' | transloco"\r
                            [subtitle]="'smartEnrollDemos.createPerson.cameraSubtitle' | transloco"\r
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
                    <section aria-labelledby="create-person-upload-heading">\r
                        <app-demo-capture-option-heading\r
                            label="B"\r
                            id="create-person-upload-heading"\r
                            [title]="'smartEnrollDemos.createPerson.uploadTitle' | transloco"\r
                            [subtitle]="'smartEnrollDemos.createPerson.uploadSubtitle' | transloco"\r
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
                    <div class="mb-3 flex flex-wrap gap-2">\r
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
            </app-demo-stage-card>\r
\r
            @if (error) {\r
                <div class="flex items-center gap-2 rounded-lg border border-error/20 bg-error-container/20 px-4 py-3 text-sm text-error xl:col-span-2">\r
                    <span class="material-symbols-outlined text-sm">error_outline</span>\r
                    {{ error }}\r
                </div>\r
            }\r
            <button\r
                type="submit"\r
                [disabled]="!images.length || !selectedCollectionIds.length || collectionsLoading || nationalityBlocked"\r
                class="demo-btn-primary xl:col-span-2"\r
            >\r
                {{ 'smartEnrollDemos.createPerson.submit' | transloco }}\r
            </button>\r
        </form>\r
    } @else if (step === 'processing') {\r
        <div class="flex flex-col items-center justify-center py-20 gap-4">\r
            <div class="w-12 h-12 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>\r
            <p class="text-on-surface font-semibold">{{ 'smartEnrollDemos.createPerson.processing' | transloco }}</p>\r
        </div>\r
    } @else if (step === 'conflict') {\r
        <app-create-person-already-exists-result\r
            [previews]="previews"\r
            (editForm)="backToFormFromConflict()"\r
            (backToDemos)="backToDemos()"\r
        />\r
    } @else {\r
        <app-create-person-result\r
            [result]="result"\r
            (enrollAnother)="reset()"\r
            (backToDemos)="backToDemos()"\r
        />\r
    }\r
\r
    @if (showApiReference) {\r
        <details class="mt-10 rounded-xl border border-outline-variant/20 bg-surface-container-low/50 text-left max-w-3xl mx-auto w-full px-4 py-3 group">\r
            <summary class="cursor-pointer list-none font-bold text-sm text-primary flex items-center justify-between gap-2">\r
                <span class="flex items-center gap-2">\r
                    <span class="material-symbols-outlined text-lg">menu_book</span>\r
                    {{ 'smartEnrollDemos.createPerson.apiRefSummary' | transloco }}\r
                </span>\r
                <span class="material-symbols-outlined text-on-surface-variant/70 group-open:rotate-180 transition-transform">\r
                    expand_more\r
                </span>\r
            </summary>\r
            <div class="mt-4 space-y-4 text-sm text-on-surface-variant border-t border-outline-variant/15 pt-4">\r
                <p>\r
                    {{ 'smartEnrollDemos.createPerson.apiRefOfficialDocs' | transloco }}\r
                    <a\r
                        href="https://docs.verifik.co/resources/create-a-person/"\r
                        target="_blank"\r
                        rel="noopener noreferrer"\r
                        class="text-primary underline underline-offset-2"\r
                    >\r
                        {{ 'smartEnrollDemos.createPerson.apiRefLinkLabel' | transloco }}\r
                    </a>\r
                </p>\r
                <p class="text-xs leading-relaxed">{{ 'smartEnrollDemos.createPerson.apiRefBody' | transloco }}</p>\r
                <div>\r
                    <p class="font-mono text-xs text-on-surface mb-1">{{ 'smartEnrollDemos.createPerson.apiRefEndpoint' | transloco }}</p>\r
                    <p class="text-xs leading-relaxed">{{ 'smartEnrollDemos.createPerson.apiRefEndpointDesc' | transloco }}</p>\r
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
                                <td class="py-2 font-mono text-primary">{{ 'smartEnrollDemos.createPerson.paramName' | transloco }}</td>\r
                                <td>{{ 'smartEnrollDemos.common.yes' | transloco }}</td>\r
                                <td>{{ 'smartEnrollDemos.createPerson.paramNameDesc' | transloco }}</td>\r
                            </tr>\r
                            <tr class="border-b border-outline-variant/10 align-top">\r
                                <td class="py-2 font-mono text-primary">{{ 'smartEnrollDemos.createPerson.paramImages' | transloco }}</td>\r
                                <td>{{ 'smartEnrollDemos.common.yes' | transloco }}</td>\r
                                <td>{{ 'smartEnrollDemos.createPerson.paramImagesDesc' | transloco }}</td>\r
                            </tr>\r
                            <tr class="border-b border-outline-variant/10 align-top">\r
                                <td class="py-2 font-mono text-primary">{{ 'smartEnrollDemos.createPerson.paramGender' | transloco }}</td>\r
                                <td>{{ 'smartEnrollDemos.common.yes' | transloco }}</td>\r
                                <td>{{ 'smartEnrollDemos.createPerson.paramGenderDesc' | transloco }}</td>\r
                            </tr>\r
                            <tr class="border-b border-outline-variant/10 align-top">\r
                                <td class="py-2 font-mono text-primary">{{ 'smartEnrollDemos.createPerson.paramDob' | transloco }}</td>\r
                                <td>{{ 'smartEnrollDemos.common.yes' | transloco }}</td>\r
                                <td>{{ 'smartEnrollDemos.createPerson.paramDobDesc' | transloco }}</td>\r
                            </tr>\r
                            <tr class="border-b border-outline-variant/10 align-top">\r
                                <td class="py-2 font-mono text-primary">{{ 'smartEnrollDemos.createPerson.paramCollections' | transloco }}</td>\r
                                <td>{{ 'smartEnrollDemos.common.yes' | transloco }}</td>\r
                                <td>{{ 'smartEnrollDemos.createPerson.paramCollectionsDesc' | transloco }}</td>\r
                            </tr>\r
                            <tr class="align-top">\r
                                <td class="py-2 font-mono text-primary">{{ 'smartEnrollDemos.createPerson.paramNationality' | transloco }}</td>\r
                                <td>{{ 'smartEnrollDemos.common.no' | transloco }}</td>\r
                                <td>{{ 'smartEnrollDemos.createPerson.paramNationalityDesc' | transloco }}</td>\r
                            </tr>\r
                        </tbody>\r
                    </table>\r
                </div>\r
                <pre class="text-[0.65rem] font-mono bg-surface-container-high/80 rounded-lg p-3 overflow-x-auto text-on-surface whitespace-pre-wrap">{{ apiFetchExample }}</pre>\r
                <pre class="text-[0.65rem] font-mono bg-surface-container-high/80 rounded-lg p-3 overflow-x-auto text-on-surface whitespace-pre-wrap">{{ apiResponseExample }}</pre>\r
                <ul class="list-disc pl-5 space-y-1 text-xs">\r
                    <li>{{ 'smartEnrollDemos.createPerson.bullet1' | transloco }}</li>\r
                    <li>{{ 'smartEnrollDemos.createPerson.bullet2' | transloco }}</li>\r
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CreatePersonDemoComponent, { className: "CreatePersonDemoComponent", filePath: "src/app/modules/smart-enroll/demos/pages/create-person/create-person-demo.component.ts", lineNumber: 82 });
})();
export {
  CreatePersonDemoComponent
};
//# sourceMappingURL=chunk-GJDGDP7S.js.map
