import {
  SmartScanService
} from "./chunk-GQYOR2D7.js";
import "./chunk-JURKDGMK.js";
import {
  MatOption,
  MatSelect,
  MatSelectModule
} from "./chunk-RM2644J3.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-AICPTZP5.js";
import "./chunk-VURK6DEU.js";
import "./chunk-E7WYNRWC.js";
import {
  MatFormField,
  MatFormFieldModule,
  MatLabel
} from "./chunk-HWNQWMK7.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-UUIVQBYS.js";
import "./chunk-WOW6NB5H.js";
import {
  MatButton,
  MatButtonModule,
  MatIconButton
} from "./chunk-YSJP7SXK.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-CQIQSUBU.js";
import "./chunk-J762DGD5.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-DVRFI3SJ.js";
import {
  TranslocoModule,
  TranslocoPipe,
  TranslocoService
} from "./chunk-R5W3A6HI.js";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-HYFP557I.js";
import "./chunk-PMCYMBOC.js";
import {
  ChangeDetectorRef,
  CommonModule,
  Component,
  Location,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
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
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-PNPEHISK.js";
import "./chunk-F5M2C4EZ.js";

// src/app/modules/smart-enroll/smart-scan/document-type-wizard/document-type-wizard.component.ts
var _c0 = (a0) => ({ country: a0 });
var _c1 = () => ({});
var _c2 = () => [];
var _forTrack0 = ($index, $item) => $item._id;
var _forTrack1 = ($index, $item) => $item.field;
var _forTrack2 = ($index, $item) => $item.key;
function DocumentTypeWizardComponent_For_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("click", function DocumentTypeWizardComponent_For_22_Template_button_click_0_listener() {
      const \u0275$index_34_r2 = \u0275\u0275restoreView(_r1).$index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goToStep(\u0275$index_34_r2));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r4 = ctx.$implicit;
    const \u0275$index_34_r2 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("wizard-pill--current", ctx_r2.isStepCurrent(\u0275$index_34_r2));
    \u0275\u0275property("disabled", ctx_r2.saving || ctx_r2.loading || !ctx_r2.openedAsEdit && \u0275$index_34_r2 > ctx_r2.stepIndex);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 4, "smartScan.wizard.steps." + step_r4), " ");
  }
}
function DocumentTypeWizardComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "mat-progress-spinner", 12);
    \u0275\u0275elementEnd();
  }
}
function DocumentTypeWizardComponent_Conditional_25_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.errorMessage);
  }
}
function DocumentTypeWizardComponent_Conditional_25_Conditional_21_For_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 38);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    \u0275\u0275property("value", item_r7);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, "smartScan.categories." + item_r7));
  }
}
function DocumentTypeWizardComponent_Conditional_25_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "span");
    \u0275\u0275text(2, "01");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "h3");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "article", 28)(11, "span", 29)(12, "mat-icon");
    \u0275\u0275text(13, "badge");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 30)(15, "span", 31)(16, "strong");
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "small");
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "span", 32);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 33)(26, "mat-form-field", 34)(27, "mat-label");
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "input", 35);
    \u0275\u0275twoWayListener("ngModelChange", function DocumentTypeWizardComponent_Conditional_25_Conditional_21_Template_input_ngModelChange_30_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.name, $event) || (ctx_r2.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "mat-form-field", 34)(32, "mat-label");
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "input", 35);
    \u0275\u0275listener("ngModelChange", function DocumentTypeWizardComponent_Conditional_25_Conditional_21_Template_input_ngModelChange_35_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onCodeInput($event));
    });
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(36, "article", 28)(37, "span", 29)(38, "mat-icon");
    \u0275\u0275text(39, "category");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 30)(41, "span", 31)(42, "strong");
    \u0275\u0275text(43);
    \u0275\u0275pipe(44, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "span", 32);
    \u0275\u0275text(46);
    \u0275\u0275pipe(47, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "div", 36)(49, "mat-form-field", 34)(50, "mat-label");
    \u0275\u0275text(51);
    \u0275\u0275pipe(52, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "mat-select", 37);
    \u0275\u0275twoWayListener("ngModelChange", function DocumentTypeWizardComponent_Conditional_25_Conditional_21_Template_mat_select_ngModelChange_53_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.category, $event) || (ctx_r2.category = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(54, DocumentTypeWizardComponent_Conditional_25_Conditional_21_For_55_Template, 3, 4, "mat-option", 38, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "mat-form-field", 34)(57, "mat-label");
    \u0275\u0275text(58);
    \u0275\u0275pipe(59, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "input", 35);
    \u0275\u0275twoWayListener("ngModelChange", function DocumentTypeWizardComponent_Conditional_25_Conditional_21_Template_input_ngModelChange_60_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.version, $event) || (ctx_r2.version = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 19, "smartScan.wizard.details.sectionTitle"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 21, "smartScan.wizard.details.sectionHelp"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("field-card--ready", ctx_r2.identityReady);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 23, "smartScan.wizard.details.identityTitle"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 25, "smartScan.wizard.details.required"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 27, "smartScan.wizard.details.identityBody"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(29, 29, "smartScan.wizard.name"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(34, 31, "smartScan.wizard.code"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r2.code);
    \u0275\u0275advance();
    \u0275\u0275classProp("field-card--ready", !!ctx_r2.category);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(44, 33, "smartScan.wizard.details.classificationTitle"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(47, 35, "smartScan.wizard.details.classificationBody"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(52, 37, "smartScan.wizard.category"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.category);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.categories);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(59, 39, "smartScan.wizard.version"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.version);
  }
}
function DocumentTypeWizardComponent_Conditional_25_Conditional_22_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 42);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("src", ctx_r2.frontImage, \u0275\u0275sanitizeUrl);
  }
}
function DocumentTypeWizardComponent_Conditional_25_Conditional_22_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "upload");
    \u0275\u0275elementEnd();
  }
}
function DocumentTypeWizardComponent_Conditional_25_Conditional_22_Conditional_45_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 42);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275property("src", ctx_r2.backImage, \u0275\u0275sanitizeUrl);
  }
}
function DocumentTypeWizardComponent_Conditional_25_Conditional_22_Conditional_45_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "upload");
    \u0275\u0275elementEnd();
  }
}
function DocumentTypeWizardComponent_Conditional_25_Conditional_22_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 28)(1, "span", 29)(2, "mat-icon");
    \u0275\u0275text(3, "flip");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 30)(5, "span", 31)(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "small");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "label", 41);
    \u0275\u0275template(13, DocumentTypeWizardComponent_Conditional_25_Conditional_22_Conditional_45_Conditional_13_Template, 1, 1, "img", 42)(14, DocumentTypeWizardComponent_Conditional_25_Conditional_22_Conditional_45_Conditional_14_Template, 2, 0, "mat-icon");
    \u0275\u0275elementStart(15, "input", 43);
    \u0275\u0275listener("change", function DocumentTypeWizardComponent_Conditional_25_Conditional_22_Conditional_45_Template_input_change_15_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.onImageSelected($event, "back"));
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("field-card--ready", !!ctx_r2.backImage);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 5, "smartScan.wizard.backImage"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 7, "smartScan.wizard.details.required"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.backImage ? 13 : 14);
  }
}
function DocumentTypeWizardComponent_Conditional_25_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "span");
    \u0275\u0275text(2, "01");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "h3");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 39)(11, "button", 40);
    \u0275\u0275listener("click", function DocumentTypeWizardComponent_Conditional_25_Conditional_22_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onRequiresBackSideChange(false));
    });
    \u0275\u0275elementStart(12, "mat-icon");
    \u0275\u0275text(13, "crop_portrait");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "strong");
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "button", 40);
    \u0275\u0275listener("click", function DocumentTypeWizardComponent_Conditional_25_Conditional_22_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onRequiresBackSideChange(true));
    });
    \u0275\u0275elementStart(21, "mat-icon");
    \u0275\u0275text(22, "flip");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "strong");
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span");
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "article", 28)(30, "span", 29)(31, "mat-icon");
    \u0275\u0275text(32, "image");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 30)(34, "span", 31)(35, "strong");
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "small");
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "label", 41);
    \u0275\u0275template(42, DocumentTypeWizardComponent_Conditional_25_Conditional_22_Conditional_42_Template, 1, 1, "img", 42)(43, DocumentTypeWizardComponent_Conditional_25_Conditional_22_Conditional_43_Template, 2, 0, "mat-icon");
    \u0275\u0275elementStart(44, "input", 43);
    \u0275\u0275listener("change", function DocumentTypeWizardComponent_Conditional_25_Conditional_22_Template_input_change_44_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onImageSelected($event, "front"));
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(45, DocumentTypeWizardComponent_Conditional_25_Conditional_22_Conditional_45_Template, 16, 9, "article", 44);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 16, "smartScan.wizard.sidesStep.sectionTitle"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 18, "smartScan.wizard.sidesStep.sectionHelp"));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("side-choice--ready", !ctx_r2.requiresBackSide);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 20, "smartScan.wizard.frontOnly"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 22, "smartScan.wizard.sidesStep.frontBody"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("side-choice--ready", ctx_r2.requiresBackSide);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 24, "smartScan.wizard.bothSides"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(28, 26, "smartScan.wizard.sidesStep.backBody"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("field-card--ready", !!ctx_r2.frontImage);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(37, 28, "smartScan.wizard.frontImage"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(40, 30, "smartScan.wizard.details.required"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.frontImage ? 42 : 43);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.requiresBackSide ? 45 : -1);
  }
}
function DocumentTypeWizardComponent_Conditional_25_Conditional_23_For_11_For_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 38);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const type_r14 = ctx.$implicit;
    \u0275\u0275property("value", type_r14);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(type_r14);
  }
}
function DocumentTypeWizardComponent_Conditional_25_Conditional_23_For_11_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 38);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("value", 1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, "smartScan.wizard.backPage"));
  }
}
function DocumentTypeWizardComponent_Conditional_25_Conditional_23_For_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 28)(1, "span", 29)(2, "mat-icon");
    \u0275\u0275text(3, "data_object");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 30)(5, "span", 31)(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 45);
    \u0275\u0275listener("click", function DocumentTypeWizardComponent_Conditional_25_Conditional_23_For_11_Template_button_click_9_listener() {
      const $index_r12 = \u0275\u0275restoreView(_r11).$index;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.removeField(ctx_r2.fields, $index_r12));
    });
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "span", 32);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 36)(16, "mat-form-field", 34)(17, "mat-label");
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "input", 35);
    \u0275\u0275twoWayListener("ngModelChange", function DocumentTypeWizardComponent_Conditional_25_Conditional_23_For_11_Template_input_ngModelChange_20_listener($event) {
      const field_r13 = \u0275\u0275restoreView(_r11).$implicit;
      \u0275\u0275twoWayBindingSet(field_r13.name, $event) || (field_r13.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "mat-form-field", 34)(22, "mat-label");
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "input", 35);
    \u0275\u0275twoWayListener("ngModelChange", function DocumentTypeWizardComponent_Conditional_25_Conditional_23_For_11_Template_input_ngModelChange_25_listener($event) {
      const field_r13 = \u0275\u0275restoreView(_r11).$implicit;
      \u0275\u0275twoWayBindingSet(field_r13.mapKey, $event) || (field_r13.mapKey = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "mat-form-field", 34)(27, "mat-label");
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "mat-select", 37);
    \u0275\u0275twoWayListener("ngModelChange", function DocumentTypeWizardComponent_Conditional_25_Conditional_23_For_11_Template_mat_select_ngModelChange_30_listener($event) {
      const field_r13 = \u0275\u0275restoreView(_r11).$implicit;
      \u0275\u0275twoWayBindingSet(field_r13.type, $event) || (field_r13.type = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(31, DocumentTypeWizardComponent_Conditional_25_Conditional_23_For_11_For_32_Template, 2, 2, "mat-option", 38, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "mat-form-field", 34)(34, "mat-label");
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "mat-select", 37);
    \u0275\u0275twoWayListener("ngModelChange", function DocumentTypeWizardComponent_Conditional_25_Conditional_23_For_11_Template_mat_select_ngModelChange_37_listener($event) {
      const field_r13 = \u0275\u0275restoreView(_r11).$implicit;
      \u0275\u0275twoWayBindingSet(field_r13.page, $event) || (field_r13.page = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(38, "mat-option", 38);
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(41, DocumentTypeWizardComponent_Conditional_25_Conditional_23_For_11_Conditional_41_Template, 3, 4, "mat-option", 38);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const field_r13 = ctx.$implicit;
    const $index_r12 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("field-card--ready", !!(field_r13.name.trim() && field_r13.mapKey.trim()));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(8, 17, "smartScan.wizard.fieldsStep.fieldTitle"), " ", $index_r12 + 1, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 19, "smartScan.wizard.remove"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 21, "smartScan.wizard.fieldsStep.fieldBody"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 23, "smartScan.wizard.fieldName"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", field_r13.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 25, "smartScan.wizard.mapKey"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", field_r13.mapKey);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(29, 27, "smartScan.wizard.fieldType"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", field_r13.type);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.fieldTypes);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(36, 29, "smartScan.wizard.page"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", field_r13.page);
    \u0275\u0275advance();
    \u0275\u0275property("value", 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(40, 31, "smartScan.wizard.frontPage"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.requiresBackSide ? 41 : -1);
  }
}
function DocumentTypeWizardComponent_Conditional_25_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "span");
    \u0275\u0275text(2, "01");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "h3");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275repeaterCreate(10, DocumentTypeWizardComponent_Conditional_25_Conditional_23_For_11_Template, 42, 33, "article", 44, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementStart(12, "button", 24);
    \u0275\u0275listener("click", function DocumentTypeWizardComponent_Conditional_25_Conditional_23_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.addField(ctx_r2.fields));
    });
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 3, "smartScan.wizard.fieldsStep.sectionTitle"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 5, "smartScan.wizard.fieldsStep.sectionHelp"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.fields);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 7, "smartScan.wizard.addField"), " ");
  }
}
function DocumentTypeWizardComponent_Conditional_25_Conditional_24_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-spinner", 12);
  }
}
function DocumentTypeWizardComponent_Conditional_25_Conditional_24_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 28)(1, "span", 29)(2, "mat-icon");
    \u0275\u0275text(3, "travel_explore");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 30)(5, "span", 31)(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 1, "smartScan.wizard.noSmartCheck"));
  }
}
function DocumentTypeWizardComponent_Conditional_25_Conditional_24_Conditional_12_For_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 38);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const feature_r16 = ctx.$implicit;
    \u0275\u0275property("value", feature_r16._id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(feature_r16.name);
  }
}
function DocumentTypeWizardComponent_Conditional_25_Conditional_24_Conditional_12_For_23_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function DocumentTypeWizardComponent_Conditional_25_Conditional_24_Conditional_12_For_23_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 38);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const key_r19 = ctx.$implicit;
    \u0275\u0275property("value", key_r19);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(key_r19);
  }
}
function DocumentTypeWizardComponent_Conditional_25_Conditional_24_Conditional_12_For_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36)(1, "p", 48);
    \u0275\u0275text(2);
    \u0275\u0275template(3, DocumentTypeWizardComponent_Conditional_25_Conditional_24_Conditional_12_For_23_Conditional_3_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 34)(5, "mat-label");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "mat-select", 37);
    \u0275\u0275twoWayListener("ngModelChange", function DocumentTypeWizardComponent_Conditional_25_Conditional_24_Conditional_12_For_23_Template_mat_select_ngModelChange_8_listener($event) {
      const dependency_r18 = \u0275\u0275restoreView(_r17).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r2.fieldMap[dependency_r18.field], $event) || (ctx_r2.fieldMap[dependency_r18.field] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(9, "mat-option", 47);
    \u0275\u0275text(10, "\u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(11, DocumentTypeWizardComponent_Conditional_25_Conditional_24_Conditional_12_For_23_For_12_Template, 2, 2, "mat-option", 38, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const dependency_r18 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", dependency_r18.field, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(dependency_r18.required ? 3 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 4, "smartScan.wizard.mapDependency"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.fieldMap[dependency_r18.field]);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.mapKeys);
  }
}
function DocumentTypeWizardComponent_Conditional_25_Conditional_24_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 28)(1, "span", 29)(2, "mat-icon");
    \u0275\u0275text(3, "verified");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 30)(5, "span", 31)(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "span", 32);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-form-field", 46)(13, "mat-label");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "mat-select", 37);
    \u0275\u0275listener("ngModelChange", function DocumentTypeWizardComponent_Conditional_25_Conditional_24_Conditional_12_Template_mat_select_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.onFeatureChange($event));
    });
    \u0275\u0275elementStart(17, "mat-option", 47);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(20, DocumentTypeWizardComponent_Conditional_25_Conditional_24_Conditional_12_For_21_Template, 2, 2, "mat-option", 38, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(22, DocumentTypeWizardComponent_Conditional_25_Conditional_24_Conditional_12_For_23_Template, 13, 6, "div", 36, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("field-card--ready", !!ctx_r2.selectedFeatureId);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 7, "smartScan.wizard.smartCheck"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 9, "smartScan.wizard.smartCheckHint"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 11, "smartScan.wizard.smartCheck"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r2.selectedFeatureId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 13, "smartScan.wizard.skipSmartCheck"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.features);
    \u0275\u0275advance(2);
    \u0275\u0275repeater((ctx_r2.selectedFeature == null ? null : ctx_r2.selectedFeature.dependencies) || \u0275\u0275pureFunction0(15, _c2));
  }
}
function DocumentTypeWizardComponent_Conditional_25_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "span");
    \u0275\u0275text(2, "01");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "h3");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(10, DocumentTypeWizardComponent_Conditional_25_Conditional_24_Conditional_10_Template, 1, 0, "mat-progress-spinner", 12)(11, DocumentTypeWizardComponent_Conditional_25_Conditional_24_Conditional_11_Template, 9, 3, "article", 28)(12, DocumentTypeWizardComponent_Conditional_25_Conditional_24_Conditional_12_Template, 24, 16, "article", 44);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 3, "smartScan.wizard.smartCheckStep.sectionTitle"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 5, "smartScan.wizard.smartCheckStep.sectionHelp"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.featuresLoading ? 10 : !ctx_r2.features.length ? 11 : 12);
  }
}
function DocumentTypeWizardComponent_Conditional_25_Conditional_25_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 42);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("src", ctx_r2.frontImage, \u0275\u0275sanitizeUrl);
  }
}
function DocumentTypeWizardComponent_Conditional_25_Conditional_25_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275element(1, "img", 42);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r2.backImage, \u0275\u0275sanitizeUrl);
  }
}
function DocumentTypeWizardComponent_Conditional_25_Conditional_25_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 51);
  }
}
function DocumentTypeWizardComponent_Conditional_25_Conditional_25_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "smartScan.wizard.fieldsStep.tryExtract"), " ");
  }
}
function DocumentTypeWizardComponent_Conditional_25_Conditional_25_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.extractionError);
  }
}
function DocumentTypeWizardComponent_Conditional_25_Conditional_25_Conditional_11_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article")(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r21 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r21.key);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r21.value);
  }
}
function DocumentTypeWizardComponent_Conditional_25_Conditional_25_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53)(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(4, DocumentTypeWizardComponent_Conditional_25_Conditional_25_Conditional_11_For_5_Template, 5, 2, "article", null, _forTrack2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "smartScan.wizard.fieldsStep.extractionResult"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.extractionRows);
  }
}
function DocumentTypeWizardComponent_Conditional_25_Conditional_25_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 52);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "smartScan.wizard.fieldsStep.extractionEmpty"));
  }
}
function DocumentTypeWizardComponent_Conditional_25_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "aside", 20)(1, "div", 49);
    \u0275\u0275template(2, DocumentTypeWizardComponent_Conditional_25_Conditional_25_Conditional_2_Template, 1, 1, "img", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, DocumentTypeWizardComponent_Conditional_25_Conditional_25_Conditional_3_Template, 2, 1, "div", 49);
    \u0275\u0275elementStart(4, "button", 50);
    \u0275\u0275listener("click", function DocumentTypeWizardComponent_Conditional_25_Conditional_25_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.tryExtraction());
    });
    \u0275\u0275template(5, DocumentTypeWizardComponent_Conditional_25_Conditional_25_Conditional_5_Template, 1, 0, "mat-spinner", 51)(6, DocumentTypeWizardComponent_Conditional_25_Conditional_25_Conditional_6_Template, 2, 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 52);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, DocumentTypeWizardComponent_Conditional_25_Conditional_25_Conditional_10_Template, 2, 1, "p", 13)(11, DocumentTypeWizardComponent_Conditional_25_Conditional_25_Conditional_11_Template, 6, 3, "div", 53)(12, DocumentTypeWizardComponent_Conditional_25_Conditional_25_Conditional_12_Template, 3, 3, "p", 52);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.frontImage ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.requiresBackSide && ctx_r2.backImage ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r2.canTryExtraction());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.extracting ? 5 : 6);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 7, "smartScan.wizard.fieldsStep.tryExtractHint"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.extractionError ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.extractionRows.length ? 11 : ctx_r2.extractionAttempted && !ctx_r2.extracting && !ctx_r2.extractionError ? 12 : -1);
  }
}
function DocumentTypeWizardComponent_Conditional_25_Conditional_26_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article")(1, "mat-icon");
    \u0275\u0275text(2, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const note_r22 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(note_r22);
  }
}
function DocumentTypeWizardComponent_Conditional_25_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "aside", 21)(1, "div", 54)(2, "span");
    \u0275\u0275text(3, "02");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "h3");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 55);
    \u0275\u0275repeaterCreate(12, DocumentTypeWizardComponent_Conditional_25_Conditional_26_For_13_Template, 5, 1, "article", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 2, "smartScan.wizard." + ctx_r2.stepCopyKey + ".explainTitle"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 4, "smartScan.wizard." + ctx_r2.stepCopyKey + ".explainHelp"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.explainerNotes);
  }
}
function DocumentTypeWizardComponent_Conditional_25_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 22)(1, "article")(2, "span", 56)(3, "mat-icon");
    \u0275\u0275text(4, "tag");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div")(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "article")(13, "span", 57)(14, "mat-icon");
    \u0275\u0275text(15, "public");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div")(17, "strong");
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "p");
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "article")(24, "span", 58)(25, "mat-icon");
    \u0275\u0275text(26, "lock");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div")(28, "strong");
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "p");
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "transloco");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 6, "smartScan.wizard.details.factCodeTitle"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 8, "smartScan.wizard.details.factCodeBody"));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 10, "smartScan.wizard.details.factCountryTitle"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 12, "smartScan.wizard.details.factCountryBody"));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(30, 14, "smartScan.wizard.details.factPrivateTitle"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(33, 16, "smartScan.wizard.details.factPrivateBody"));
  }
}
function DocumentTypeWizardComponent_Conditional_25_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-spinner", 26);
  }
}
function DocumentTypeWizardComponent_Conditional_25_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275pipe(2, "transloco");
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.selectedFeatureId ? \u0275\u0275pipeBind1(1, 1, "smartScan.wizard.finish") : \u0275\u0275pipeBind1(2, 3, "smartScan.wizard.skip"), " ");
  }
}
function DocumentTypeWizardComponent_Conditional_25_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "smartScan.wizard.next"), " ");
  }
}
function DocumentTypeWizardComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275template(0, DocumentTypeWizardComponent_Conditional_25_Conditional_0_Template, 2, 1, "p", 13);
    \u0275\u0275elementStart(1, "div", 14)(2, "header", 15)(3, "div")(4, "span", 16);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h2");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 17)(14, "span");
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "strong");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 18)(20, "section", 19);
    \u0275\u0275template(21, DocumentTypeWizardComponent_Conditional_25_Conditional_21_Template, 61, 41)(22, DocumentTypeWizardComponent_Conditional_25_Conditional_22_Template, 46, 32)(23, DocumentTypeWizardComponent_Conditional_25_Conditional_23_Template, 15, 9)(24, DocumentTypeWizardComponent_Conditional_25_Conditional_24_Template, 13, 7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(25, DocumentTypeWizardComponent_Conditional_25_Conditional_25_Template, 13, 9, "aside", 20)(26, DocumentTypeWizardComponent_Conditional_25_Conditional_26_Template, 14, 6, "aside", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275template(27, DocumentTypeWizardComponent_Conditional_25_Conditional_27_Template, 34, 18, "section", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 23)(29, "button", 24);
    \u0275\u0275listener("click", function DocumentTypeWizardComponent_Conditional_25_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.previousStep());
    });
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "button", 25);
    \u0275\u0275listener("click", function DocumentTypeWizardComponent_Conditional_25_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.nextStep());
    });
    \u0275\u0275template(33, DocumentTypeWizardComponent_Conditional_25_Conditional_33_Template, 1, 0, "mat-progress-spinner", 26)(34, DocumentTypeWizardComponent_Conditional_25_Conditional_34_Template, 3, 5)(35, DocumentTypeWizardComponent_Conditional_25_Conditional_35_Template, 2, 3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r2.errorMessage ? 0 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 15, "smartScan.wizard." + ctx_r2.stepCopyKey + ".eyebrow"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 17, "smartScan.wizard." + ctx_r2.stepCopyKey + ".title"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 19, "smartScan.wizard." + ctx_r2.stepCopyKey + ".subtitle"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 21, "smartScan.wizard." + ctx_r2.stepCopyKey + ".choiceLabel"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.choiceLabel);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.stepIndex === 0 ? 21 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.stepIndex === 1 ? 22 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.stepIndex === 2 ? 23 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.stepIndex === 3 ? 24 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.stepIndex === 2 ? 25 : 26);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.stepIndex === 0 ? 27 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(31, 23, "smartScan.wizard.back"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r2.canGoNext());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.saving ? 33 : ctx_r2.stepIndex === ctx_r2.steps.length - 1 ? 34 : 35);
  }
}
var DocumentTypeWizardComponent = class _DocumentTypeWizardComponent {
  constructor() {
    this._route = inject(ActivatedRoute);
    this._router = inject(Router);
    this._location = inject(Location);
    this._scanService = inject(SmartScanService);
    this._transloco = inject(TranslocoService);
    this._cdr = inject(ChangeDetectorRef);
    this.steps = ["details", "sides", "fields", "smartCheck"];
    this.categories = [
      "government_id",
      "passport",
      "license",
      "criminal",
      "bank_document",
      "tax_document",
      "business_document",
      "draft"
    ];
    this.fieldTypes = ["string", "number", "date", "boolean"];
    this.country = "";
    this.stepIndex = 0;
    this.saving = false;
    this.loading = false;
    this.openedAsEdit = false;
    this.errorMessage = "";
    this.name = "";
    this.code = "";
    this.category = "government_id";
    this.version = "";
    this.requiresBackSide = true;
    this.frontImage = "";
    this.backImage = "";
    this.fields = [this.emptyField(0)];
    this.documentTypeId = "";
    this.defaultTemplateId = "";
    this.features = [];
    this.featuresLoading = false;
    this.selectedFeatureId = "";
    this.fieldMap = {};
    this.extracting = false;
    this.extractionAttempted = false;
    this.extractionError = "";
    this.extractionRows = [];
  }
  ngOnInit() {
    const id = this._route.snapshot.paramMap.get("id");
    if (id) {
      this.openedAsEdit = true;
      this.documentTypeId = id;
      this.loadForEdit(id);
      return;
    }
    this.country = this._route.snapshot.queryParamMap.get("country") || "";
    if (!this.country) {
      this._router.navigate(["/smart-enroll/smart-scan/new"]);
    }
  }
  get selectedFeature() {
    return this.features.find((feature) => feature._id === this.selectedFeatureId);
  }
  get mapKeys() {
    const keys = this.fields.map((field) => field.mapKey);
    return [...new Set(keys.map((key) => key.trim()).filter(Boolean))];
  }
  isStepCurrent(index) {
    return this.stepIndex === index;
  }
  goToStep(index) {
    if (this.saving || this.loading || index < 0 || index >= this.steps.length || index === this.stepIndex)
      return;
    if (!this.openedAsEdit && index > this.stepIndex)
      return;
    if (index < this.stepIndex) {
      this.moveToStep(index);
      return;
    }
    if (this.stepIndex <= 2) {
      if (!this.canGoNext())
        return;
      if (index > this.stepIndex + 1 && !this.canSaveProgress())
        return;
      this.persistProgress(index);
      return;
    }
    this.moveToStep(index);
  }
  canTryExtraction() {
    if (this.saving || this.extracting || !this.frontImage)
      return false;
    return !this.requiresBackSide || Boolean(this.backImage);
  }
  tryExtraction() {
    if (!this.canTryExtraction())
      return;
    this.extractionError = "";
    this.runExtraction();
  }
  get countryLabel() {
    const normalized = this.country.trim().toLowerCase().replace(/[\s-]+/g, "_");
    const key = `smartScan.countries.${normalized}`;
    const translated = this._transloco.translate(key);
    if (translated === key) {
      return this.country.replace(/_/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
    }
    return translated;
  }
  get identityReady() {
    return Boolean(this.name.trim() && this.code.trim());
  }
  get filledFieldCount() {
    return this.fields.filter((field) => field.name.trim() && field.mapKey.trim()).length;
  }
  get choiceLabel() {
    if (this.stepIndex === 0)
      return this.countryLabel;
    if (this.stepIndex === 1) {
      return this._transloco.translate(this.requiresBackSide ? "smartScan.wizard.bothSides" : "smartScan.wizard.frontOnly");
    }
    if (this.stepIndex === 2) {
      return this._transloco.translate("smartScan.wizard.fieldsStep.choice", { count: this.filledFieldCount });
    }
    return this.selectedFeature?.name || this._transloco.translate("smartScan.wizard.skipSmartCheck");
  }
  get stepCopyKey() {
    return ["details", "sidesStep", "fieldsStep", "smartCheckStep"][this.stepIndex] || "details";
  }
  get explainerNotes() {
    const notes = {
      details: ["noteCountry", "noteCode", "noteCategory"],
      sidesStep: ["noteFront", "noteBack", "noteImages"],
      fieldsStep: ["noteMapKey", "notePage", "notePrivate"],
      smartCheckStep: ["noteOptional", "noteMap", "noteSkip"]
    };
    return (notes[this.stepCopyKey] || []).map((note) => this._transloco.translate(`smartScan.wizard.${this.stepCopyKey}.${note}`));
  }
  canGoNext() {
    if (this.saving || this.loading)
      return false;
    if (this.stepIndex === 0)
      return Boolean(this.name.trim() && this.code.trim() && this.category);
    if (this.stepIndex === 1) {
      if (!this.frontImage)
        return false;
      return !this.requiresBackSide || Boolean(this.backImage);
    }
    if (this.stepIndex === 2)
      return this.fields.some((field) => field.name.trim() && field.mapKey.trim());
    return true;
  }
  previousStep() {
    if (this.stepIndex === 0) {
      this.backToScan();
      return;
    }
    this.stepIndex -= 1;
    this.errorMessage = "";
  }
  nextStep() {
    if (!this.canGoNext())
      return;
    this.errorMessage = "";
    if (this.stepIndex <= 2) {
      this.persistProgress(this.stepIndex + 1);
      return;
    }
    if (this.stepIndex === this.steps.length - 1) {
      this.finish();
    }
  }
  backToScan() {
    this._router.navigate(["/smart-enroll/smart-scan/new"], {
      queryParams: this.country ? { country: this.country } : {}
    });
  }
  onCodeInput(value) {
    this.code = value.toUpperCase().replace(/[^A-Z0-9_]/g, "");
  }
  onRequiresBackSideChange(bothSides) {
    this.requiresBackSide = bothSides;
    if (!bothSides) {
      this.backImage = "";
      this.fields.forEach((field) => {
        if (field.page === 1)
          field.page = 0;
      });
    }
  }
  onImageSelected(event, side) {
    const file = event.target.files?.[0];
    if (!file || !file.type.startsWith("image/"))
      return;
    const reader = new FileReader();
    reader.onload = () => {
      const result = typeof reader.result === "string" ? reader.result : "";
      if (side === "front")
        this.frontImage = result;
      else
        this.backImage = result;
      this._cdr.markForCheck();
    };
    reader.readAsDataURL(file);
  }
  addField(target = this.fields) {
    target.push(this.emptyField(0));
  }
  removeField(target, index) {
    if (target.length === 1)
      return;
    target.splice(index, 1);
  }
  onFeatureChange(featureId) {
    this.selectedFeatureId = featureId;
    this.fieldMap = {};
    for (const dependency of this.selectedFeature?.dependencies || []) {
      const match = this.mapKeys.find((key) => key === dependency.field);
      if (match)
        this.fieldMap[dependency.field] = match;
    }
  }
  persistProgress(nextIndex) {
    if (this.documentTypeId) {
      this.updateOwnedDocumentType(nextIndex);
      return;
    }
    this.createDocumentType(nextIndex);
  }
  createDocumentType(nextIndex) {
    this.saving = true;
    this._scanService.createDocumentType({
      name: this.name.trim(),
      code: this.code.trim(),
      category: this.category,
      country: this.country,
      version: this.version.trim() || void 0,
      fields: this.cleanFields(this.fields),
      frontImage: this.frontImage,
      backImage: this.requiresBackSide ? this.backImage : "",
      requiresBackSide: this.requiresBackSide
    }).subscribe({
      next: (response) => {
        this.documentTypeId = response.data?._id || "";
        this.defaultTemplateId = response.data?.promptTemplate?._id || "";
        this.adoptSavedImages(response.data);
        this.rememberDocumentUrl();
        this.afterOwnedSave(nextIndex);
      },
      error: (err) => this.fail(err)
    });
  }
  loadFeatures() {
    this.featuresLoading = true;
    this._scanService.getSmartCheckFeatures(this.country).subscribe({
      next: (response) => {
        const rows = Array.isArray(response.data) ? response.data : [];
        this.features = rows.filter((feature) => feature.smartCheckEnabled);
        this.featuresLoading = false;
        this._cdr.markForCheck();
      },
      error: () => {
        this.features = [];
        this.featuresLoading = false;
        this._cdr.markForCheck();
      }
    });
  }
  finish() {
    if (!this.selectedFeatureId) {
      this.backToScan();
      return;
    }
    const smartCheckFieldMap = (this.selectedFeature?.dependencies || []).map((dependency) => ({
      dependencyField: dependency.field,
      mapKey: this.fieldMap[dependency.field] || ""
    })).filter((row) => row.mapKey);
    this.saving = true;
    this._scanService.updateDocumentType(this.documentTypeId, {
      appFeature: this.selectedFeatureId,
      smartCheckFieldMap
    }).subscribe({
      next: () => this.backToScan(),
      error: (err) => this.fail(err)
    });
  }
  fail(err) {
    this.saving = false;
    this.errorMessage = err?.error?.message || err?.message || this._transloco.translate("smartScan.wizard.saveError");
    this._cdr.markForCheck();
  }
  cleanFields(fields) {
    return fields.filter((field) => field.name.trim() && field.mapKey.trim()).map((field) => ({
      name: field.name.trim(),
      type: field.type || "string",
      mapKey: field.mapKey.trim(),
      page: this.requiresBackSide ? field.page : 0
    }));
  }
  emptyField(page) {
    return { name: "", type: "string", mapKey: "", page };
  }
  loadForEdit(id) {
    this.loading = true;
    this._scanService.getDocumentType(id).subscribe({
      next: (response) => {
        const documentType = response?.data;
        if (!documentType?.client) {
          this.backToScan();
          return;
        }
        this.applyLoadedType(documentType);
        this.loadOwnedTemplates(id, documentType.name);
      },
      error: () => this.backToScan()
    });
  }
  applyLoadedType(documentType) {
    this.country = documentType.country || "";
    this.name = documentType.name || "";
    this.code = documentType.code || "";
    this.category = documentType.category || "government_id";
    this.version = documentType.version || "";
    this.frontImage = documentType.frontImage || "";
    this.backImage = documentType.backImage || "";
    this.requiresBackSide = Boolean(documentType.backImage);
    this.fields = this.copyFields(documentType.fields);
    this.selectedFeatureId = this.featureId(documentType.appFeature);
    this.fieldMap = {};
    for (const row of documentType.smartCheckFieldMap || []) {
      if (row.dependencyField && row.mapKey)
        this.fieldMap[row.dependencyField] = row.mapKey;
    }
  }
  loadOwnedTemplates(documentTypeId, documentName) {
    this._scanService.getPromptTemplates(documentTypeId).subscribe({
      next: (response) => {
        const rows = Array.isArray(response.data) ? response.data : [];
        this.splitTemplates(rows, documentName);
        this.loading = false;
        this._cdr.markForCheck();
      },
      error: () => {
        this.loading = false;
        this._cdr.markForCheck();
      }
    });
  }
  splitTemplates(rows, documentName) {
    const named = rows.find((row) => row.name === documentName) || rows[0];
    this.defaultTemplateId = named?._id || "";
  }
  updateOwnedDocumentType(nextIndex = 3) {
    this.saving = true;
    const fields = this.cleanFields(this.fields);
    this._scanService.updateDocumentType(this.documentTypeId, {
      name: this.name.trim(),
      code: this.code.trim(),
      category: this.category,
      country: this.country,
      version: this.version.trim() || null,
      fields,
      frontImage: this.frontImage,
      backImage: this.requiresBackSide ? this.backImage : ""
    }).subscribe({
      next: (response) => {
        this.adoptSavedImages(response.data);
        this.syncDefaultTemplate(fields, nextIndex);
      },
      error: (err) => this.fail(err)
    });
  }
  syncDefaultTemplate(fields, nextIndex) {
    if (!this.defaultTemplateId) {
      this.afterOwnedSave(nextIndex);
      return;
    }
    this._scanService.updatePromptTemplate(this.defaultTemplateId, {
      active: true,
      country: this.country,
      description: this.name.trim(),
      documentCategory: this.category,
      fields,
      format: "json",
      name: this.name.trim(),
      requiresBackSide: this.requiresBackSide
    }).subscribe({
      next: () => this.afterOwnedSave(nextIndex),
      error: (err) => this.fail(err)
    });
  }
  afterOwnedSave(nextIndex) {
    this.saving = false;
    this.rememberDocumentUrl();
    if (nextIndex !== this.stepIndex)
      this.moveToStep(nextIndex);
    this._cdr.markForCheck();
  }
  rememberDocumentUrl() {
    if (!this.documentTypeId)
      return;
    const url = this._router.serializeUrl(this._router.createUrlTree(["/smart-enroll/smart-scan/document-type", this.documentTypeId]));
    this._location.replaceState(url);
    this.openedAsEdit = true;
  }
  adoptSavedImages(documentType) {
    if (!documentType?.frontImage && !documentType?.backImage)
      return;
    if (documentType.frontImage)
      this.frontImage = documentType.frontImage;
    this.backImage = documentType.backImage || "";
  }
  runExtraction() {
    if (!this.frontImage)
      return;
    this.extracting = true;
    this.extractionError = "";
    this._scanService.identifyDocumentFields(this.frontImage, this.requiresBackSide ? this.backImage : void 0).subscribe({
      next: (response) => {
        const rows = Array.isArray(response?.data) ? response.data : [];
        const fields = this.toDocumentFields(rows);
        if (fields.length)
          this.fields = fields;
        this.extractionRows = fields.map((field) => ({ key: field.mapKey, value: field.name }));
        this.extractionAttempted = true;
        this.extracting = false;
        this._cdr.markForCheck();
      },
      error: (err) => {
        this.extracting = false;
        this.extractionError = err?.error?.message || err?.message || this._transloco.translate("smartScan.wizard.fieldsStep.extractionError");
        this._cdr.markForCheck();
      }
    });
  }
  toDocumentFields(rows) {
    const fields = rows.filter((field) => field?.name?.trim() && field?.mapKey?.trim()).map((field) => ({
      name: field.name.trim(),
      mapKey: field.mapKey.trim(),
      type: this.normalizeFieldType(field.type),
      page: this.requiresBackSide && (Number(field.page) === 1 || Number(field.page) === 2) ? 1 : 0
    }));
    return fields;
  }
  normalizeFieldType(type) {
    const normalized = (type || "").toLowerCase();
    if (normalized === "string" || normalized === "number" || normalized === "date" || normalized === "boolean") {
      return normalized;
    }
    return "string";
  }
  canSaveProgress() {
    if (!this.name.trim() || !this.code.trim() || !this.category || !this.frontImage)
      return false;
    if (this.requiresBackSide && !this.backImage)
      return false;
    return this.fields.some((field) => field.name.trim() && field.mapKey.trim());
  }
  moveToStep(index) {
    this.stepIndex = index;
    this.errorMessage = "";
    if (this.steps[index] === "smartCheck")
      this.loadFeatures();
  }
  copyFields(fields) {
    if (!fields?.length)
      return [this.emptyField(0)];
    return fields.map((field) => ({
      name: field.name,
      type: field.type || "string",
      mapKey: field.mapKey || "",
      page: field.page || 0
    }));
  }
  featureId(value) {
    if (!value)
      return "";
    if (typeof value === "string")
      return value;
    return value._id || "";
  }
  static {
    this.\u0275fac = function DocumentTypeWizardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DocumentTypeWizardComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DocumentTypeWizardComponent, selectors: [["document-type-wizard"]], decls: 26, vars: 18, consts: [[1, "wizard-page"], [1, "wizard-header"], [1, "wizard-header__inner"], [1, "wizard-crumb"], ["routerLink", "/smart-enroll/smart-scan/new", 3, "queryParams"], [1, "wizard-header__title"], ["mat-icon-button", "", "type", "button", 3, "click"], [1, "wizard-pills"], ["type", "button", 1, "wizard-pill", 3, "wizard-pill--current", "disabled"], [1, "wizard-main"], [1, "wizard-loading"], ["type", "button", 1, "wizard-pill", 3, "click", "disabled"], ["mode", "indeterminate", "diameter", "36"], [1, "wizard-error"], [1, "wizard-screen"], [1, "wizard-hero"], [1, "wizard-hero__eyebrow"], [1, "wizard-hero__choice"], [1, "wizard-decision"], [1, "wizard-form"], [1, "wizard-samples"], [1, "wizard-explainer"], [1, "wizard-facts"], [1, "wizard-actions"], ["mat-stroked-button", "", "type", "button", 3, "click"], ["mat-flat-button", "", "color", "primary", "type", "button", 1, "wizard-next", 3, "click", "disabled"], ["mode", "indeterminate", "diameter", "18"], [1, "section-heading"], [1, "field-card"], [1, "field-card__icon"], [1, "field-card__content"], [1, "field-card__title"], [1, "field-card__body"], [1, "input-stack"], ["appearance", "outline", "subscriptSizing", "dynamic"], ["matInput", "", 3, "ngModelChange", "ngModel"], [1, "input-grid"], [3, "ngModelChange", "ngModel"], [3, "value"], [1, "side-choices"], ["type", "button", 1, "side-choice", 3, "click"], [1, "image-drop"], ["alt", "", 1, "image-drop__preview", 3, "src"], ["type", "file", "accept", "image/*", 3, "change"], [1, "field-card", 3, "field-card--ready"], ["type", "button", 1, "text-button", 3, "click"], ["appearance", "outline", "subscriptSizing", "dynamic", 1, "input-stack"], ["value", ""], [1, "dependency-name"], [1, "sample-frame"], ["mat-stroked-button", "", "type", "button", 1, "try-extract", 3, "click", "disabled"], ["diameter", "18"], [1, "try-extract__hint"], [1, "extraction-list"], [1, "section-heading", "section-heading--light"], [1, "explainer-notes"], [1, "fact-icon", "fact-icon--code"], [1, "fact-icon", "fact-icon--country"], [1, "fact-icon", "fact-icon--private"]], template: function DocumentTypeWizardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "div", 2)(3, "div", 3)(4, "a", 4);
        \u0275\u0275text(5);
        \u0275\u0275pipe(6, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "span");
        \u0275\u0275text(8, "/");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "span");
        \u0275\u0275text(10);
        \u0275\u0275pipe(11, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "div", 5)(13, "button", 6);
        \u0275\u0275pipe(14, "transloco");
        \u0275\u0275listener("click", function DocumentTypeWizardComponent_Template_button_click_13_listener() {
          return ctx.previousStep();
        });
        \u0275\u0275elementStart(15, "mat-icon");
        \u0275\u0275text(16, "arrow_back");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "h1");
        \u0275\u0275text(18);
        \u0275\u0275pipe(19, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "nav", 7);
        \u0275\u0275repeaterCreate(21, DocumentTypeWizardComponent_For_22_Template, 3, 6, "button", 8, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(23, "main", 9);
        \u0275\u0275template(24, DocumentTypeWizardComponent_Conditional_24_Template, 2, 0, "div", 10)(25, DocumentTypeWizardComponent_Conditional_25_Template, 36, 25);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275property("queryParams", ctx.country ? \u0275\u0275pureFunction1(15, _c0, ctx.country) : \u0275\u0275pureFunction0(17, _c1));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 7, "smartScan.wizard.breadcrumbScan"), " ");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 9, ctx.openedAsEdit ? "smartScan.wizard.editTitle" : "smartScan.wizard.title"));
        \u0275\u0275advance(3);
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(14, 11, "smartScan.wizard.back"));
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 13, ctx.openedAsEdit ? "smartScan.wizard.editTitle" : "smartScan.wizard.title"));
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.steps);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.loading ? 24 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.loading ? 25 : -1);
      }
    }, dependencies: [
      CommonModule,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      RouterModule,
      RouterLink,
      MatButtonModule,
      MatButton,
      MatIconButton,
      MatFormFieldModule,
      MatFormField,
      MatLabel,
      MatIconModule,
      MatIcon,
      MatInputModule,
      MatInput,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatSelectModule,
      MatSelect,
      MatOption,
      TranslocoModule,
      TranslocoPipe
    ], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  min-height: 100%;\n}\n.wizard-page[_ngcontent-%COMP%] {\n  min-height: 100%;\n  background: #fafaf9;\n  color: #1c1917;\n}\n.wizard-header[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #e7e5e4;\n  background: rgba(255, 255, 255, 0.92);\n}\n.wizard-header__inner[_ngcontent-%COMP%], \n.wizard-main[_ngcontent-%COMP%] {\n  width: min(100%, 76rem);\n  margin: 0 auto;\n  padding: 1.25rem 1.5rem 0;\n}\n.wizard-crumb[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.4rem;\n  color: #78716c;\n  font-size: 0.75rem;\n}\n.wizard-crumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: inherit;\n  text-decoration: none;\n}\n.wizard-header__title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.35rem;\n  margin-top: 0.75rem;\n}\n.wizard-header__title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.5rem;\n  font-weight: 600;\n  letter-spacing: -0.02em;\n}\n.wizard-pills[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  margin: 1rem 0 1.1rem;\n}\n.wizard-pill[_ngcontent-%COMP%] {\n  border: 1px solid #e7e5e4;\n  background: #fff;\n  color: #57534e;\n  border-radius: 999px;\n  padding: 0.35rem 0.8rem;\n  font-size: 0.75rem;\n  cursor: pointer;\n}\n.wizard-pill--current[_ngcontent-%COMP%] {\n  border-color: #1c1917;\n  background: #1c1917;\n  color: #fff;\n}\n.wizard-pill[_ngcontent-%COMP%]:disabled:not(.wizard-pill--current) {\n  opacity: 0.4;\n  cursor: default;\n}\n.wizard-main[_ngcontent-%COMP%] {\n  padding-bottom: 2.5rem;\n}\n.wizard-loading[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  min-height: 16rem;\n}\n.wizard-error[_ngcontent-%COMP%] {\n  margin: 1rem 0 0;\n  color: #b91c1c;\n  font-size: 0.875rem;\n}\n.wizard-screen[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1.25rem;\n  padding-top: 1.5rem;\n}\n.wizard-hero[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 1.5rem;\n}\n.wizard-hero__eyebrow[_ngcontent-%COMP%] {\n  color: #78716c;\n  font-size: 0.65rem;\n  font-weight: 700;\n  letter-spacing: 0.16em;\n  text-transform: uppercase;\n}\n.wizard-hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0.35rem 0 0;\n  font-size: clamp(1.75rem, 3vw, 2.55rem);\n  font-weight: 600;\n  letter-spacing: -0.03em;\n  line-height: 1.05;\n}\n.wizard-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 40rem;\n  margin: 0.55rem 0 0;\n  color: #78716c;\n  font-size: 0.95rem;\n}\n.wizard-hero__choice[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.15rem;\n  min-width: 9rem;\n  padding: 0.7rem 0.9rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 0.9rem;\n  background: #fff;\n}\n.wizard-hero__choice[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #78716c;\n  font-size: 0.68rem;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n}\n.wizard-hero__choice[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n}\n.wizard-decision[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1.15fr) minmax(16rem, 0.85fr);\n  overflow: hidden;\n  border: 1px solid #d6d3d1;\n  border-radius: 1.5rem;\n  background: #fff;\n}\n.wizard-form[_ngcontent-%COMP%], \n.wizard-explainer[_ngcontent-%COMP%], \n.wizard-samples[_ngcontent-%COMP%] {\n  display: grid;\n  align-content: start;\n  gap: 0.9rem;\n  padding: 1.25rem;\n}\n.wizard-explainer[_ngcontent-%COMP%] {\n  background: #1c1917;\n  color: #fafaf9;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  align-items: flex-start;\n}\n.section-heading[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 1.7rem;\n  height: 1.7rem;\n  border-radius: 999px;\n  background: #f5f5f4;\n  color: #44403c;\n  font-size: 0.72rem;\n  font-weight: 700;\n}\n.section-heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.95rem;\n}\n.section-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.15rem 0 0;\n  color: #78716c;\n  font-size: 0.8rem;\n}\n.section-heading--light[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  background: #292524;\n  color: #fafaf9;\n}\n.section-heading--light[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #a8a29e;\n}\n.field-card[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr);\n  gap: 0.85rem;\n  padding: 0.95rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 1rem;\n}\n.field-card--ready[_ngcontent-%COMP%] {\n  box-shadow: inset 0 0 0 1px #292524;\n}\n.field-card__icon[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 2.25rem;\n  height: 2.25rem;\n  border-radius: 0.7rem;\n  background: #f5f5f4;\n  color: #44403c;\n}\n.field-card__content[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.55rem;\n  min-width: 0;\n}\n.field-card__title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.5rem;\n}\n.field-card__title[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.92rem;\n}\n.field-card__title[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #78716c;\n  font-size: 0.72rem;\n}\n.field-card__body[_ngcontent-%COMP%] {\n  color: #78716c;\n  font-size: 0.82rem;\n}\n.input-stack[_ngcontent-%COMP%], \n.input-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.65rem;\n}\n.input-grid[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  align-items: center;\n}\n.side-choices[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.75rem;\n}\n.side-choice[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.25rem;\n  padding: 0.9rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 1rem;\n  background: #fff;\n  color: inherit;\n  text-align: left;\n  cursor: pointer;\n}\n.side-choice[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.92rem;\n}\n.side-choice[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #78716c;\n  font-size: 0.78rem;\n}\n.side-choice--ready[_ngcontent-%COMP%] {\n  box-shadow: inset 0 0 0 1px #292524;\n}\n.image-drop[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  min-height: 10rem;\n  overflow: hidden;\n  border: 1px dashed #d6d3d1;\n  border-radius: 0.8rem;\n  background: #f5f5f4;\n  cursor: pointer;\n}\n.image-drop[_ngcontent-%COMP%]:not(:has(img)) {\n  width: min(100%, 28rem);\n  aspect-ratio: 1.586/1;\n}\n.image-drop[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: none;\n}\n.image-drop__preview[_ngcontent-%COMP%] {\n  display: block;\n  width: auto;\n  max-width: 100%;\n  height: auto;\n  max-height: 24rem;\n  object-fit: contain;\n}\n.wizard-samples[_ngcontent-%COMP%] {\n  background: #fff;\n}\n.sample-frame[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  min-height: 8rem;\n  overflow: hidden;\n  border: 1px solid #e7e5e4;\n  border-radius: 0.8rem;\n  background: #f5f5f4;\n}\n.try-extract[_ngcontent-%COMP%] {\n  justify-self: start;\n}\n.try-extract__hint[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #78716c;\n  font-size: 0.8rem;\n}\n.extraction-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.45rem;\n}\n.extraction-list[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.85rem;\n}\n.extraction-list[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.1rem;\n  padding: 0.55rem 0.7rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 0.7rem;\n}\n.extraction-list[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #78716c;\n  font-size: 0.72rem;\n  font-weight: 600;\n}\n.extraction-list[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  word-break: break-word;\n}\n.text-button[_ngcontent-%COMP%] {\n  border: 0;\n  background: transparent;\n  color: #78716c;\n  font-size: 0.75rem;\n  cursor: pointer;\n}\n.dependency-name[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.85rem;\n}\n.dependency-name[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #b91c1c;\n}\n.explainer-notes[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.75rem;\n}\n.explainer-notes[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.55rem;\n  align-items: flex-start;\n}\n.explainer-notes[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #d6d3d1;\n  font-size: 0.84rem;\n  line-height: 1.45;\n}\n.explainer-notes[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n  font-size: 1rem;\n  color: #a8a29e;\n}\n.wizard-facts[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 0.75rem;\n}\n.wizard-facts[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.7rem;\n  padding: 0.9rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 1rem;\n  background: #fff;\n}\n.wizard-facts[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.86rem;\n}\n.wizard-facts[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.2rem 0 0;\n  color: #78716c;\n  font-size: 0.78rem;\n}\n.fact-icon[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 2rem;\n  height: 2rem;\n  border-radius: 0.6rem;\n  background: #f5f5f4;\n}\n.wizard-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 1.75rem;\n}\n.wizard-next.mat-mdc-unelevated-button[_ngcontent-%COMP%] {\n  --mdc-protected-button-container-color: #1c1917;\n  --mdc-protected-button-label-text-color: #fff;\n}\n[_nghost-%COMP%]   .wizard-next.mat-mdc-unelevated-button.mat-mdc-button-disabled[_ngcontent-%COMP%] {\n  opacity: 1;\n  background-color: #d6d3d1;\n  color: #44403c;\n  --mdc-protected-button-disabled-label-text-color: #44403c;\n  --fuse-text-disabled: #44403c;\n  --fuse-text-disabled-rgb:\n    68,\n    64,\n    60;\n}\n.dark[_nghost-%COMP%]   .wizard-page[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .wizard-page[_ngcontent-%COMP%] {\n  background: #0f172a;\n  color: #e2e8f0;\n}\n.dark[_nghost-%COMP%]   .wizard-header[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .wizard-header[_ngcontent-%COMP%] {\n  border-color: #334155;\n  background: rgba(15, 23, 42, 0.92);\n}\n.dark[_nghost-%COMP%]   .wizard-crumb[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .wizard-crumb[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .wizard-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .wizard-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .wizard-hero__choice[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .wizard-hero__choice[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .section-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .section-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .field-card__body[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .field-card__body[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .field-card__title[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .field-card__title[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .side-choice[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .side-choice[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .wizard-facts[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .wizard-facts[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .wizard-pill[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .wizard-pill[_ngcontent-%COMP%] {\n  border-color: #334155;\n  background: #1e293b;\n  color: #cbd5e1;\n}\n.dark[_nghost-%COMP%]   .wizard-pill--current[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .wizard-pill--current[_ngcontent-%COMP%] {\n  border-color: #f8fafc;\n  background: #f8fafc;\n  color: #0f172a;\n}\n.dark[_nghost-%COMP%]   .wizard-hero__choice[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .wizard-hero__choice[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .wizard-decision[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .wizard-decision[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .field-card[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .field-card[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .side-choice[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .side-choice[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .wizard-facts[_ngcontent-%COMP%]   article[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .wizard-facts[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  border-color: #334155;\n  background: #1e293b;\n}\n.dark[_nghost-%COMP%]   .wizard-explainer[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .wizard-explainer[_ngcontent-%COMP%] {\n  background: #020617;\n}\n.dark[_nghost-%COMP%]   .wizard-samples[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .wizard-samples[_ngcontent-%COMP%] {\n  background: #1e293b;\n}\n.dark[_nghost-%COMP%]   .sample-frame[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .sample-frame[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .extraction-list[_ngcontent-%COMP%]   article[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .extraction-list[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  border-color: #334155;\n  background: #0f172a;\n}\n.dark[_nghost-%COMP%]   .try-extract__hint[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .try-extract__hint[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .extraction-list[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .extraction-list[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .section-heading[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .section-heading[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .field-card__icon[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .field-card__icon[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .fact-icon[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .fact-icon[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .image-drop[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .image-drop[_ngcontent-%COMP%] {\n  background: #334155;\n  color: #e2e8f0;\n}\n.dark[_nghost-%COMP%]   .section-heading--light[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .section-heading--light[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  background: #1e293b;\n}\n.dark[_nghost-%COMP%]   .field-card--ready[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .field-card--ready[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .side-choice--ready[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .side-choice--ready[_ngcontent-%COMP%] {\n  box-shadow: inset 0 0 0 1px #e2e8f0;\n}\n.dark[_nghost-%COMP%]   .wizard-next.mat-mdc-unelevated-button[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .wizard-next.mat-mdc-unelevated-button[_ngcontent-%COMP%] {\n  --mdc-protected-button-container-color: #f8fafc;\n  --mdc-protected-button-label-text-color: #0f172a;\n}\n.dark[_nghost-%COMP%]   .wizard-next.mat-mdc-unelevated-button.mat-mdc-button-disabled[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .wizard-next.mat-mdc-unelevated-button.mat-mdc-button-disabled[_ngcontent-%COMP%] {\n  background-color: #334155;\n  color: #e2e8f0;\n  --mdc-protected-button-disabled-label-text-color: #e2e8f0;\n  --fuse-text-disabled: #e2e8f0;\n  --fuse-text-disabled-rgb:\n    226,\n    232,\n    240;\n}\n.dark[_nghost-%COMP%]   .explainer-notes[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .explainer-notes[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #cbd5e1;\n}\n@media (max-width: 980px) {\n  .wizard-decision[_ngcontent-%COMP%], \n   .wizard-facts[_ngcontent-%COMP%], \n   .input-grid[_ngcontent-%COMP%], \n   .side-choices[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .wizard-hero[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\n/*# sourceMappingURL=document-type-wizard.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DocumentTypeWizardComponent, [{
    type: Component,
    args: [{ selector: "document-type-wizard", standalone: true, imports: [
      CommonModule,
      FormsModule,
      RouterModule,
      MatButtonModule,
      MatFormFieldModule,
      MatIconModule,
      MatInputModule,
      MatProgressSpinnerModule,
      MatSelectModule,
      TranslocoModule
    ], template: `<div class="wizard-page">\r
    <header class="wizard-header">\r
        <div class="wizard-header__inner">\r
            <div class="wizard-crumb">\r
                <a routerLink="/smart-enroll/smart-scan/new" [queryParams]="country ? { country: country } : {}">\r
                    {{ 'smartScan.wizard.breadcrumbScan' | transloco }}\r
                </a>\r
                <span>/</span>\r
                <span>{{ (openedAsEdit ? 'smartScan.wizard.editTitle' : 'smartScan.wizard.title') | transloco }}</span>\r
            </div>\r
            <div class="wizard-header__title">\r
                <button mat-icon-button type="button" (click)="previousStep()" [attr.aria-label]="'smartScan.wizard.back' | transloco">\r
                    <mat-icon>arrow_back</mat-icon>\r
                </button>\r
                <h1>{{ (openedAsEdit ? 'smartScan.wizard.editTitle' : 'smartScan.wizard.title') | transloco }}</h1>\r
            </div>\r
            <nav class="wizard-pills">\r
                @for (step of steps; track step; let i = $index) {\r
                    <button\r
                        type="button"\r
                        class="wizard-pill"\r
                        [class.wizard-pill--current]="isStepCurrent(i)"\r
                        [disabled]="saving || loading || (!openedAsEdit && i > stepIndex)"\r
                        (click)="goToStep(i)"\r
                    >\r
                        {{ 'smartScan.wizard.steps.' + step | transloco }}\r
                    </button>\r
                }\r
            </nav>\r
        </div>\r
    </header>\r
\r
    <main class="wizard-main">\r
        @if (loading) {\r
            <div class="wizard-loading">\r
                <mat-progress-spinner mode="indeterminate" diameter="36"></mat-progress-spinner>\r
            </div>\r
        }\r
        @if (!loading) {\r
            @if (errorMessage) {\r
                <p class="wizard-error">{{ errorMessage }}</p>\r
            }\r
\r
        <div class="wizard-screen">\r
            <header class="wizard-hero">\r
                <div>\r
                    <span class="wizard-hero__eyebrow">{{ 'smartScan.wizard.' + stepCopyKey + '.eyebrow' | transloco }}</span>\r
                    <h2>{{ 'smartScan.wizard.' + stepCopyKey + '.title' | transloco }}</h2>\r
                    <p>{{ 'smartScan.wizard.' + stepCopyKey + '.subtitle' | transloco }}</p>\r
                </div>\r
                <div class="wizard-hero__choice">\r
                    <span>{{ 'smartScan.wizard.' + stepCopyKey + '.choiceLabel' | transloco }}</span>\r
                    <strong>{{ choiceLabel }}</strong>\r
                </div>\r
            </header>\r
\r
            <div class="wizard-decision">\r
                <section class="wizard-form">\r
                    @if (stepIndex === 0) {\r
                        <div class="section-heading">\r
                            <span>01</span>\r
                            <div>\r
                                <h3>{{ 'smartScan.wizard.details.sectionTitle' | transloco }}</h3>\r
                                <p>{{ 'smartScan.wizard.details.sectionHelp' | transloco }}</p>\r
                            </div>\r
                        </div>\r
                        <article class="field-card" [class.field-card--ready]="identityReady">\r
                            <span class="field-card__icon"><mat-icon>badge</mat-icon></span>\r
                            <div class="field-card__content">\r
                                <span class="field-card__title">\r
                                    <strong>{{ 'smartScan.wizard.details.identityTitle' | transloco }}</strong>\r
                                    <small>{{ 'smartScan.wizard.details.required' | transloco }}</small>\r
                                </span>\r
                                <span class="field-card__body">{{ 'smartScan.wizard.details.identityBody' | transloco }}</span>\r
                                <div class="input-stack">\r
                                    <mat-form-field appearance="outline" subscriptSizing="dynamic">\r
                                        <mat-label>{{ 'smartScan.wizard.name' | transloco }}</mat-label>\r
                                        <input matInput [(ngModel)]="name" />\r
                                    </mat-form-field>\r
                                    <mat-form-field appearance="outline" subscriptSizing="dynamic">\r
                                        <mat-label>{{ 'smartScan.wizard.code' | transloco }}</mat-label>\r
                                        <input matInput [ngModel]="code" (ngModelChange)="onCodeInput($event)" />\r
                                    </mat-form-field>\r
                                </div>\r
                            </div>\r
                        </article>\r
                        <article class="field-card" [class.field-card--ready]="!!category">\r
                            <span class="field-card__icon"><mat-icon>category</mat-icon></span>\r
                            <div class="field-card__content">\r
                                <span class="field-card__title">\r
                                    <strong>{{ 'smartScan.wizard.details.classificationTitle' | transloco }}</strong>\r
                                </span>\r
                                <span class="field-card__body">{{ 'smartScan.wizard.details.classificationBody' | transloco }}</span>\r
                                <div class="input-grid">\r
                                    <mat-form-field appearance="outline" subscriptSizing="dynamic">\r
                                        <mat-label>{{ 'smartScan.wizard.category' | transloco }}</mat-label>\r
                                        <mat-select [(ngModel)]="category">\r
                                            @for (item of categories; track item) {\r
                                                <mat-option [value]="item">{{ 'smartScan.categories.' + item | transloco }}</mat-option>\r
                                            }\r
                                        </mat-select>\r
                                    </mat-form-field>\r
                                    <mat-form-field appearance="outline" subscriptSizing="dynamic">\r
                                        <mat-label>{{ 'smartScan.wizard.version' | transloco }}</mat-label>\r
                                        <input matInput [(ngModel)]="version" />\r
                                    </mat-form-field>\r
                                </div>\r
                            </div>\r
                        </article>\r
                    }\r
\r
                    @if (stepIndex === 1) {\r
                        <div class="section-heading">\r
                            <span>01</span>\r
                            <div>\r
                                <h3>{{ 'smartScan.wizard.sidesStep.sectionTitle' | transloco }}</h3>\r
                                <p>{{ 'smartScan.wizard.sidesStep.sectionHelp' | transloco }}</p>\r
                            </div>\r
                        </div>\r
                        <div class="side-choices">\r
                            <button type="button" class="side-choice" [class.side-choice--ready]="!requiresBackSide" (click)="onRequiresBackSideChange(false)">\r
                                <mat-icon>crop_portrait</mat-icon>\r
                                <strong>{{ 'smartScan.wizard.frontOnly' | transloco }}</strong>\r
                                <span>{{ 'smartScan.wizard.sidesStep.frontBody' | transloco }}</span>\r
                            </button>\r
                            <button type="button" class="side-choice" [class.side-choice--ready]="requiresBackSide" (click)="onRequiresBackSideChange(true)">\r
                                <mat-icon>flip</mat-icon>\r
                                <strong>{{ 'smartScan.wizard.bothSides' | transloco }}</strong>\r
                                <span>{{ 'smartScan.wizard.sidesStep.backBody' | transloco }}</span>\r
                            </button>\r
                        </div>\r
                        <article class="field-card" [class.field-card--ready]="!!frontImage">\r
                            <span class="field-card__icon"><mat-icon>image</mat-icon></span>\r
                            <div class="field-card__content">\r
                                <span class="field-card__title">\r
                                    <strong>{{ 'smartScan.wizard.frontImage' | transloco }}</strong>\r
                                    <small>{{ 'smartScan.wizard.details.required' | transloco }}</small>\r
                                </span>\r
                                <label class="image-drop">\r
                                    @if (frontImage) {\r
                                        <img class="image-drop__preview" [src]="frontImage" alt="" />\r
                                    } @else {\r
                                        <mat-icon>upload</mat-icon>\r
                                    }\r
                                    <input type="file" accept="image/*" (change)="onImageSelected($event, 'front')" />\r
                                </label>\r
                            </div>\r
                        </article>\r
                        @if (requiresBackSide) {\r
                            <article class="field-card" [class.field-card--ready]="!!backImage">\r
                                <span class="field-card__icon"><mat-icon>flip</mat-icon></span>\r
                                <div class="field-card__content">\r
                                    <span class="field-card__title">\r
                                        <strong>{{ 'smartScan.wizard.backImage' | transloco }}</strong>\r
                                        <small>{{ 'smartScan.wizard.details.required' | transloco }}</small>\r
                                    </span>\r
                                    <label class="image-drop">\r
                                        @if (backImage) {\r
                                            <img class="image-drop__preview" [src]="backImage" alt="" />\r
                                        } @else {\r
                                            <mat-icon>upload</mat-icon>\r
                                        }\r
                                        <input type="file" accept="image/*" (change)="onImageSelected($event, 'back')" />\r
                                    </label>\r
                                </div>\r
                            </article>\r
                        }\r
                    }\r
\r
                    @if (stepIndex === 2) {\r
                        <div class="section-heading">\r
                            <span>01</span>\r
                            <div>\r
                                <h3>{{ 'smartScan.wizard.fieldsStep.sectionTitle' | transloco }}</h3>\r
                                <p>{{ 'smartScan.wizard.fieldsStep.sectionHelp' | transloco }}</p>\r
                            </div>\r
                        </div>\r
                        @for (field of fields; track $index) {\r
                            <article class="field-card" [class.field-card--ready]="!!(field.name.trim() && field.mapKey.trim())">\r
                                <span class="field-card__icon"><mat-icon>data_object</mat-icon></span>\r
                                <div class="field-card__content">\r
                                    <span class="field-card__title">\r
                                        <strong>{{ 'smartScan.wizard.fieldsStep.fieldTitle' | transloco }} {{ $index + 1 }}</strong>\r
                                        <button type="button" class="text-button" (click)="removeField(fields, $index)">\r
                                            {{ 'smartScan.wizard.remove' | transloco }}\r
                                        </button>\r
                                    </span>\r
                                    <span class="field-card__body">{{ 'smartScan.wizard.fieldsStep.fieldBody' | transloco }}</span>\r
                                    <div class="input-grid">\r
                                        <mat-form-field appearance="outline" subscriptSizing="dynamic">\r
                                            <mat-label>{{ 'smartScan.wizard.fieldName' | transloco }}</mat-label>\r
                                            <input matInput [(ngModel)]="field.name" />\r
                                        </mat-form-field>\r
                                        <mat-form-field appearance="outline" subscriptSizing="dynamic">\r
                                            <mat-label>{{ 'smartScan.wizard.mapKey' | transloco }}</mat-label>\r
                                            <input matInput [(ngModel)]="field.mapKey" />\r
                                        </mat-form-field>\r
                                        <mat-form-field appearance="outline" subscriptSizing="dynamic">\r
                                            <mat-label>{{ 'smartScan.wizard.fieldType' | transloco }}</mat-label>\r
                                            <mat-select [(ngModel)]="field.type">\r
                                                @for (type of fieldTypes; track type) {\r
                                                    <mat-option [value]="type">{{ type }}</mat-option>\r
                                                }\r
                                            </mat-select>\r
                                        </mat-form-field>\r
                                        <mat-form-field appearance="outline" subscriptSizing="dynamic">\r
                                            <mat-label>{{ 'smartScan.wizard.page' | transloco }}</mat-label>\r
                                            <mat-select [(ngModel)]="field.page">\r
                                                <mat-option [value]="0">{{ 'smartScan.wizard.frontPage' | transloco }}</mat-option>\r
                                                @if (requiresBackSide) {\r
                                                    <mat-option [value]="1">{{ 'smartScan.wizard.backPage' | transloco }}</mat-option>\r
                                                }\r
                                            </mat-select>\r
                                        </mat-form-field>\r
                                    </div>\r
                                </div>\r
                            </article>\r
                        }\r
                        <button mat-stroked-button type="button" (click)="addField(fields)">\r
                            {{ 'smartScan.wizard.addField' | transloco }}\r
                        </button>\r
                    }\r
\r
                    @if (stepIndex === 3) {\r
                        <div class="section-heading">\r
                            <span>01</span>\r
                            <div>\r
                                <h3>{{ 'smartScan.wizard.smartCheckStep.sectionTitle' | transloco }}</h3>\r
                                <p>{{ 'smartScan.wizard.smartCheckStep.sectionHelp' | transloco }}</p>\r
                            </div>\r
                        </div>\r
                        @if (featuresLoading) {\r
                            <mat-progress-spinner mode="indeterminate" diameter="36"></mat-progress-spinner>\r
                        } @else if (!features.length) {\r
                            <article class="field-card">\r
                                <span class="field-card__icon"><mat-icon>travel_explore</mat-icon></span>\r
                                <div class="field-card__content">\r
                                    <span class="field-card__title">\r
                                        <strong>{{ 'smartScan.wizard.noSmartCheck' | transloco }}</strong>\r
                                    </span>\r
                                </div>\r
                            </article>\r
                        } @else {\r
                            <article class="field-card" [class.field-card--ready]="!!selectedFeatureId">\r
                                <span class="field-card__icon"><mat-icon>verified</mat-icon></span>\r
                                <div class="field-card__content">\r
                                    <span class="field-card__title">\r
                                        <strong>{{ 'smartScan.wizard.smartCheck' | transloco }}</strong>\r
                                    </span>\r
                                    <span class="field-card__body">{{ 'smartScan.wizard.smartCheckHint' | transloco }}</span>\r
                                    <mat-form-field appearance="outline" class="input-stack" subscriptSizing="dynamic">\r
                                        <mat-label>{{ 'smartScan.wizard.smartCheck' | transloco }}</mat-label>\r
                                        <mat-select [ngModel]="selectedFeatureId" (ngModelChange)="onFeatureChange($event)">\r
                                            <mat-option value="">{{ 'smartScan.wizard.skipSmartCheck' | transloco }}</mat-option>\r
                                            @for (feature of features; track feature._id) {\r
                                                <mat-option [value]="feature._id">{{ feature.name }}</mat-option>\r
                                            }\r
                                        </mat-select>\r
                                    </mat-form-field>\r
                                    @for (dependency of selectedFeature?.dependencies || []; track dependency.field) {\r
                                        <div class="input-grid">\r
                                            <p class="dependency-name">\r
                                                {{ dependency.field }}\r
                                                @if (dependency.required) {\r
                                                    <span>*</span>\r
                                                }\r
                                            </p>\r
                                            <mat-form-field appearance="outline" subscriptSizing="dynamic">\r
                                                <mat-label>{{ 'smartScan.wizard.mapDependency' | transloco }}</mat-label>\r
                                                <mat-select [(ngModel)]="fieldMap[dependency.field]">\r
                                                    <mat-option value="">\u2014</mat-option>\r
                                                    @for (key of mapKeys; track key) {\r
                                                        <mat-option [value]="key">{{ key }}</mat-option>\r
                                                    }\r
                                                </mat-select>\r
                                            </mat-form-field>\r
                                        </div>\r
                                    }\r
                                </div>\r
                            </article>\r
                        }\r
                    }\r
                </section>\r
\r
                @if (stepIndex === 2) {\r
                    <aside class="wizard-samples">\r
                        <div class="sample-frame">\r
                            @if (frontImage) {\r
                                <img class="image-drop__preview" [src]="frontImage" alt="" />\r
                            }\r
                        </div>\r
                        @if (requiresBackSide && backImage) {\r
                            <div class="sample-frame">\r
                                <img class="image-drop__preview" [src]="backImage" alt="" />\r
                            </div>\r
                        }\r
                        <button\r
                            mat-stroked-button\r
                            type="button"\r
                            class="try-extract"\r
                            [disabled]="!canTryExtraction()"\r
                            (click)="tryExtraction()"\r
                        >\r
                            @if (extracting) {\r
                                <mat-spinner diameter="18"></mat-spinner>\r
                            } @else {\r
                                {{ 'smartScan.wizard.fieldsStep.tryExtract' | transloco }}\r
                            }\r
                        </button>\r
                        <p class="try-extract__hint">{{ 'smartScan.wizard.fieldsStep.tryExtractHint' | transloco }}</p>\r
                        @if (extractionError) {\r
                            <p class="wizard-error">{{ extractionError }}</p>\r
                        }\r
                        @if (extractionRows.length) {\r
                            <div class="extraction-list">\r
                                <h3>{{ 'smartScan.wizard.fieldsStep.extractionResult' | transloco }}</h3>\r
                                @for (row of extractionRows; track row.key) {\r
                                    <article>\r
                                        <strong>{{ row.key }}</strong>\r
                                        <span>{{ row.value }}</span>\r
                                    </article>\r
                                }\r
                            </div>\r
                        } @else if (extractionAttempted && !extracting && !extractionError) {\r
                            <p class="try-extract__hint">{{ 'smartScan.wizard.fieldsStep.extractionEmpty' | transloco }}</p>\r
                        }\r
                    </aside>\r
                } @else {\r
                    <aside class="wizard-explainer">\r
                        <div class="section-heading section-heading--light">\r
                            <span>02</span>\r
                            <div>\r
                                <h3>{{ 'smartScan.wizard.' + stepCopyKey + '.explainTitle' | transloco }}</h3>\r
                                <p>{{ 'smartScan.wizard.' + stepCopyKey + '.explainHelp' | transloco }}</p>\r
                            </div>\r
                        </div>\r
                        <div class="explainer-notes">\r
                            @for (note of explainerNotes; track note) {\r
                                <article>\r
                                    <mat-icon>info</mat-icon>\r
                                    <p>{{ note }}</p>\r
                                </article>\r
                            }\r
                        </div>\r
                    </aside>\r
                }\r
            </div>\r
\r
            @if (stepIndex === 0) {\r
                <section class="wizard-facts">\r
                    <article>\r
                        <span class="fact-icon fact-icon--code"><mat-icon>tag</mat-icon></span>\r
                        <div>\r
                            <strong>{{ 'smartScan.wizard.details.factCodeTitle' | transloco }}</strong>\r
                            <p>{{ 'smartScan.wizard.details.factCodeBody' | transloco }}</p>\r
                        </div>\r
                    </article>\r
                    <article>\r
                        <span class="fact-icon fact-icon--country"><mat-icon>public</mat-icon></span>\r
                        <div>\r
                            <strong>{{ 'smartScan.wizard.details.factCountryTitle' | transloco }}</strong>\r
                            <p>{{ 'smartScan.wizard.details.factCountryBody' | transloco }}</p>\r
                        </div>\r
                    </article>\r
                    <article>\r
                        <span class="fact-icon fact-icon--private"><mat-icon>lock</mat-icon></span>\r
                        <div>\r
                            <strong>{{ 'smartScan.wizard.details.factPrivateTitle' | transloco }}</strong>\r
                            <p>{{ 'smartScan.wizard.details.factPrivateBody' | transloco }}</p>\r
                        </div>\r
                    </article>\r
                </section>\r
            }\r
        </div>\r
\r
        <div class="wizard-actions">\r
            <button mat-stroked-button type="button" (click)="previousStep()">\r
                {{ 'smartScan.wizard.back' | transloco }}\r
            </button>\r
            <button mat-flat-button color="primary" class="wizard-next" type="button" [disabled]="!canGoNext()" (click)="nextStep()">\r
                @if (saving) {\r
                    <mat-progress-spinner mode="indeterminate" diameter="18"></mat-progress-spinner>\r
                } @else if (stepIndex === steps.length - 1) {\r
                    {{ selectedFeatureId ? ('smartScan.wizard.finish' | transloco) : ('smartScan.wizard.skip' | transloco) }}\r
                } @else {\r
                    {{ 'smartScan.wizard.next' | transloco }}\r
                }\r
            </button>\r
        </div>\r
        }\r
    </main>\r
</div>\r
`, styles: ["/* src/app/modules/smart-enroll/smart-scan/document-type-wizard/document-type-wizard.component.scss */\n:host {\n  display: block;\n  min-height: 100%;\n}\n.wizard-page {\n  min-height: 100%;\n  background: #fafaf9;\n  color: #1c1917;\n}\n.wizard-header {\n  border-bottom: 1px solid #e7e5e4;\n  background: rgba(255, 255, 255, 0.92);\n}\n.wizard-header__inner,\n.wizard-main {\n  width: min(100%, 76rem);\n  margin: 0 auto;\n  padding: 1.25rem 1.5rem 0;\n}\n.wizard-crumb {\n  display: flex;\n  gap: 0.4rem;\n  color: #78716c;\n  font-size: 0.75rem;\n}\n.wizard-crumb a {\n  color: inherit;\n  text-decoration: none;\n}\n.wizard-header__title {\n  display: flex;\n  align-items: center;\n  gap: 0.35rem;\n  margin-top: 0.75rem;\n}\n.wizard-header__title h1 {\n  margin: 0;\n  font-size: 1.5rem;\n  font-weight: 600;\n  letter-spacing: -0.02em;\n}\n.wizard-pills {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  margin: 1rem 0 1.1rem;\n}\n.wizard-pill {\n  border: 1px solid #e7e5e4;\n  background: #fff;\n  color: #57534e;\n  border-radius: 999px;\n  padding: 0.35rem 0.8rem;\n  font-size: 0.75rem;\n  cursor: pointer;\n}\n.wizard-pill--current {\n  border-color: #1c1917;\n  background: #1c1917;\n  color: #fff;\n}\n.wizard-pill:disabled:not(.wizard-pill--current) {\n  opacity: 0.4;\n  cursor: default;\n}\n.wizard-main {\n  padding-bottom: 2.5rem;\n}\n.wizard-loading {\n  display: grid;\n  place-items: center;\n  min-height: 16rem;\n}\n.wizard-error {\n  margin: 1rem 0 0;\n  color: #b91c1c;\n  font-size: 0.875rem;\n}\n.wizard-screen {\n  display: grid;\n  gap: 1.25rem;\n  padding-top: 1.5rem;\n}\n.wizard-hero {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 1.5rem;\n}\n.wizard-hero__eyebrow {\n  color: #78716c;\n  font-size: 0.65rem;\n  font-weight: 700;\n  letter-spacing: 0.16em;\n  text-transform: uppercase;\n}\n.wizard-hero h2 {\n  margin: 0.35rem 0 0;\n  font-size: clamp(1.75rem, 3vw, 2.55rem);\n  font-weight: 600;\n  letter-spacing: -0.03em;\n  line-height: 1.05;\n}\n.wizard-hero p {\n  max-width: 40rem;\n  margin: 0.55rem 0 0;\n  color: #78716c;\n  font-size: 0.95rem;\n}\n.wizard-hero__choice {\n  display: grid;\n  gap: 0.15rem;\n  min-width: 9rem;\n  padding: 0.7rem 0.9rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 0.9rem;\n  background: #fff;\n}\n.wizard-hero__choice span {\n  color: #78716c;\n  font-size: 0.68rem;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n}\n.wizard-hero__choice strong {\n  font-size: 0.95rem;\n}\n.wizard-decision {\n  display: grid;\n  grid-template-columns: minmax(0, 1.15fr) minmax(16rem, 0.85fr);\n  overflow: hidden;\n  border: 1px solid #d6d3d1;\n  border-radius: 1.5rem;\n  background: #fff;\n}\n.wizard-form,\n.wizard-explainer,\n.wizard-samples {\n  display: grid;\n  align-content: start;\n  gap: 0.9rem;\n  padding: 1.25rem;\n}\n.wizard-explainer {\n  background: #1c1917;\n  color: #fafaf9;\n}\n.section-heading {\n  display: flex;\n  gap: 0.75rem;\n  align-items: flex-start;\n}\n.section-heading > span {\n  display: grid;\n  place-items: center;\n  width: 1.7rem;\n  height: 1.7rem;\n  border-radius: 999px;\n  background: #f5f5f4;\n  color: #44403c;\n  font-size: 0.72rem;\n  font-weight: 700;\n}\n.section-heading h3 {\n  margin: 0;\n  font-size: 0.95rem;\n}\n.section-heading p {\n  margin: 0.15rem 0 0;\n  color: #78716c;\n  font-size: 0.8rem;\n}\n.section-heading--light > span {\n  background: #292524;\n  color: #fafaf9;\n}\n.section-heading--light p {\n  color: #a8a29e;\n}\n.field-card {\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr);\n  gap: 0.85rem;\n  padding: 0.95rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 1rem;\n}\n.field-card--ready {\n  box-shadow: inset 0 0 0 1px #292524;\n}\n.field-card__icon {\n  display: grid;\n  place-items: center;\n  width: 2.25rem;\n  height: 2.25rem;\n  border-radius: 0.7rem;\n  background: #f5f5f4;\n  color: #44403c;\n}\n.field-card__content {\n  display: grid;\n  gap: 0.55rem;\n  min-width: 0;\n}\n.field-card__title {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.5rem;\n}\n.field-card__title strong {\n  font-size: 0.92rem;\n}\n.field-card__title small {\n  color: #78716c;\n  font-size: 0.72rem;\n}\n.field-card__body {\n  color: #78716c;\n  font-size: 0.82rem;\n}\n.input-stack,\n.input-grid {\n  display: grid;\n  gap: 0.65rem;\n}\n.input-grid {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  align-items: center;\n}\n.side-choices {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.75rem;\n}\n.side-choice {\n  display: grid;\n  gap: 0.25rem;\n  padding: 0.9rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 1rem;\n  background: #fff;\n  color: inherit;\n  text-align: left;\n  cursor: pointer;\n}\n.side-choice strong {\n  font-size: 0.92rem;\n}\n.side-choice span {\n  color: #78716c;\n  font-size: 0.78rem;\n}\n.side-choice--ready {\n  box-shadow: inset 0 0 0 1px #292524;\n}\n.image-drop {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  min-height: 10rem;\n  overflow: hidden;\n  border: 1px dashed #d6d3d1;\n  border-radius: 0.8rem;\n  background: #f5f5f4;\n  cursor: pointer;\n}\n.image-drop:not(:has(img)) {\n  width: min(100%, 28rem);\n  aspect-ratio: 1.586/1;\n}\n.image-drop input {\n  display: none;\n}\n.image-drop__preview {\n  display: block;\n  width: auto;\n  max-width: 100%;\n  height: auto;\n  max-height: 24rem;\n  object-fit: contain;\n}\n.wizard-samples {\n  background: #fff;\n}\n.sample-frame {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  min-height: 8rem;\n  overflow: hidden;\n  border: 1px solid #e7e5e4;\n  border-radius: 0.8rem;\n  background: #f5f5f4;\n}\n.try-extract {\n  justify-self: start;\n}\n.try-extract__hint {\n  margin: 0;\n  color: #78716c;\n  font-size: 0.8rem;\n}\n.extraction-list {\n  display: grid;\n  gap: 0.45rem;\n}\n.extraction-list h3 {\n  margin: 0;\n  font-size: 0.85rem;\n}\n.extraction-list article {\n  display: grid;\n  gap: 0.1rem;\n  padding: 0.55rem 0.7rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 0.7rem;\n}\n.extraction-list strong {\n  color: #78716c;\n  font-size: 0.72rem;\n  font-weight: 600;\n}\n.extraction-list span {\n  font-size: 0.9rem;\n  word-break: break-word;\n}\n.text-button {\n  border: 0;\n  background: transparent;\n  color: #78716c;\n  font-size: 0.75rem;\n  cursor: pointer;\n}\n.dependency-name {\n  margin: 0;\n  font-size: 0.85rem;\n}\n.dependency-name span {\n  color: #b91c1c;\n}\n.explainer-notes {\n  display: grid;\n  gap: 0.75rem;\n}\n.explainer-notes article {\n  display: flex;\n  gap: 0.55rem;\n  align-items: flex-start;\n}\n.explainer-notes p {\n  margin: 0;\n  color: #d6d3d1;\n  font-size: 0.84rem;\n  line-height: 1.45;\n}\n.explainer-notes mat-icon {\n  width: 1rem;\n  height: 1rem;\n  font-size: 1rem;\n  color: #a8a29e;\n}\n.wizard-facts {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 0.75rem;\n}\n.wizard-facts article {\n  display: flex;\n  gap: 0.7rem;\n  padding: 0.9rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 1rem;\n  background: #fff;\n}\n.wizard-facts strong {\n  display: block;\n  font-size: 0.86rem;\n}\n.wizard-facts p {\n  margin: 0.2rem 0 0;\n  color: #78716c;\n  font-size: 0.78rem;\n}\n.fact-icon {\n  display: grid;\n  place-items: center;\n  width: 2rem;\n  height: 2rem;\n  border-radius: 0.6rem;\n  background: #f5f5f4;\n}\n.wizard-actions {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 1.75rem;\n}\n.wizard-next.mat-mdc-unelevated-button {\n  --mdc-protected-button-container-color: #1c1917;\n  --mdc-protected-button-label-text-color: #fff;\n}\n:host .wizard-next.mat-mdc-unelevated-button.mat-mdc-button-disabled {\n  opacity: 1;\n  background-color: #d6d3d1;\n  color: #44403c;\n  --mdc-protected-button-disabled-label-text-color: #44403c;\n  --fuse-text-disabled: #44403c;\n  --fuse-text-disabled-rgb:\n    68,\n    64,\n    60;\n}\n:host-context(.dark) .wizard-page {\n  background: #0f172a;\n  color: #e2e8f0;\n}\n:host-context(.dark) .wizard-header {\n  border-color: #334155;\n  background: rgba(15, 23, 42, 0.92);\n}\n:host-context(.dark) .wizard-crumb,\n:host-context(.dark) .wizard-hero p,\n:host-context(.dark) .wizard-hero__choice span,\n:host-context(.dark) .section-heading p,\n:host-context(.dark) .field-card__body,\n:host-context(.dark) .field-card__title small,\n:host-context(.dark) .side-choice span,\n:host-context(.dark) .wizard-facts p {\n  color: #94a3b8;\n}\n:host-context(.dark) .wizard-pill {\n  border-color: #334155;\n  background: #1e293b;\n  color: #cbd5e1;\n}\n:host-context(.dark) .wizard-pill--current {\n  border-color: #f8fafc;\n  background: #f8fafc;\n  color: #0f172a;\n}\n:host-context(.dark) .wizard-hero__choice,\n:host-context(.dark) .wizard-decision,\n:host-context(.dark) .field-card,\n:host-context(.dark) .side-choice,\n:host-context(.dark) .wizard-facts article {\n  border-color: #334155;\n  background: #1e293b;\n}\n:host-context(.dark) .wizard-explainer {\n  background: #020617;\n}\n:host-context(.dark) .wizard-samples {\n  background: #1e293b;\n}\n:host-context(.dark) .sample-frame,\n:host-context(.dark) .extraction-list article {\n  border-color: #334155;\n  background: #0f172a;\n}\n:host-context(.dark) .try-extract__hint,\n:host-context(.dark) .extraction-list strong {\n  color: #94a3b8;\n}\n:host-context(.dark) .section-heading > span,\n:host-context(.dark) .field-card__icon,\n:host-context(.dark) .fact-icon,\n:host-context(.dark) .image-drop {\n  background: #334155;\n  color: #e2e8f0;\n}\n:host-context(.dark) .section-heading--light > span {\n  background: #1e293b;\n}\n:host-context(.dark) .field-card--ready,\n:host-context(.dark) .side-choice--ready {\n  box-shadow: inset 0 0 0 1px #e2e8f0;\n}\n:host-context(.dark) .wizard-next.mat-mdc-unelevated-button {\n  --mdc-protected-button-container-color: #f8fafc;\n  --mdc-protected-button-label-text-color: #0f172a;\n}\n:host-context(.dark) .wizard-next.mat-mdc-unelevated-button.mat-mdc-button-disabled {\n  background-color: #334155;\n  color: #e2e8f0;\n  --mdc-protected-button-disabled-label-text-color: #e2e8f0;\n  --fuse-text-disabled: #e2e8f0;\n  --fuse-text-disabled-rgb:\n    226,\n    232,\n    240;\n}\n:host-context(.dark) .explainer-notes p {\n  color: #cbd5e1;\n}\n@media (max-width: 980px) {\n  .wizard-decision,\n  .wizard-facts,\n  .input-grid,\n  .side-choices {\n    grid-template-columns: 1fr;\n  }\n  .wizard-hero {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\n/*# sourceMappingURL=document-type-wizard.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DocumentTypeWizardComponent, { className: "DocumentTypeWizardComponent", filePath: "src/app/modules/smart-enroll/smart-scan/document-type-wizard/document-type-wizard.component.ts", lineNumber: 33 });
})();
export {
  DocumentTypeWizardComponent
};
//# sourceMappingURL=chunk-PAMEU5O7.js.map
