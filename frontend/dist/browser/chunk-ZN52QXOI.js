import {
  DEFAULT_PHONE_COUNTRY_CODE,
  DocumentVerificationTypeListComponent,
  PHONE_COUNTRY_CODES,
  SetupFormFactory,
  buildCountryCheckSections,
  criminalCheckDocs,
  criminalCheckDocsUrl,
  isCountryCheckSelected,
  toggleCountryCheck
} from "./chunk-GAGWMRKB.js";
import {
  PROJECT_DEFAULT_LANGUAGES,
  STRICT_URL_PATTERN,
  SmartAccessLeaveDialogComponent,
  SwatchPickerComponent
} from "./chunk-2OD64O5W.js";
import "./chunk-YEP6AUSV.js";
import {
  MatSlider,
  MatSliderModule,
  MatSliderThumb
} from "./chunk-J7TSFZZL.js";
import {
  draftProjectName
} from "./chunk-XMUYQNJV.js";
import {
  MatButtonToggle,
  MatButtonToggleGroup,
  MatButtonToggleModule
} from "./chunk-JSHIWGJY.js";
import {
  FileDropZoneComponent
} from "./chunk-V3C2O2FI.js";
import {
  MatAutocomplete,
  MatAutocompleteModule,
  MatAutocompleteTrigger
} from "./chunk-O6FC6GSO.js";
import {
  MatSlideToggle,
  MatSlideToggleModule
} from "./chunk-GXL6XPV2.js";
import {
  FuseConfirmationService
} from "./chunk-3SSPUNFY.js";
import "./chunk-6FS3LBOZ.js";
import {
  MatSnackBar,
  MatSnackBarModule
} from "./chunk-N6A4QSA6.js";
import "./chunk-H3UX3NVF.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-LVI7H6QB.js";
import {
  MatCheckbox,
  MatCheckboxModule
} from "./chunk-X2PSIDHT.js";
import "./chunk-BQZ6NKDU.js";
import {
  CountryService
} from "./chunk-ENWXGLEW.js";
import "./chunk-JURKDGMK.js";
import {
  MatOption,
  MatSelect,
  MatSelectModule,
  MatSelectTrigger
} from "./chunk-DT4JVZCC.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-DMXREZDX.js";
import "./chunk-CPZD6RE6.js";
import "./chunk-W5MZFF7W.js";
import {
  MatFormField,
  MatFormFieldModule,
  MatHint,
  MatLabel,
  MatSuffix
} from "./chunk-QUFOCOZK.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-KIEFKQUB.js";
import {
  MatDialog,
  MatDialogClose,
  MatDialogModule
} from "./chunk-HVUVGZ2L.js";
import "./chunk-OIBNGD5S.js";
import "./chunk-5HABGTLH.js";
import {
  MatAnchor,
  MatButton,
  MatButtonModule,
  MatIconButton
} from "./chunk-PJFCLQ64.js";
import "./chunk-PDWCMJ4H.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-6Z76B4PC.js";
import "./chunk-GX5GK4J6.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControl,
  FormControlDirective,
  FormControlName,
  FormGroupDirective,
  FormGroupName,
  MaxLengthValidator,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  RequiredValidator,
  Validators
} from "./chunk-JBF67GMG.js";
import {
  TranslocoDirective,
  TranslocoModule,
  TranslocoService,
  takeUntilDestroyed
} from "./chunk-FWBWCXY5.js";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-QL64NPDU.js";
import {
  environment
} from "./chunk-3V5B4ZWC.js";
import {
  BehaviorSubject,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  DestroyRef,
  HttpClient,
  Injectable,
  Input,
  Subject,
  ViewChild,
  catchError,
  inject,
  of,
  setClassMetadata,
  signal,
  takeUntil,
  throwError,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵreadContextLet,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstoreLet,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-YWP2Y7QK.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-F5M2C4EZ.js";

// src/app/modules/human-authn/projects/setup/steps/details-step.component.ts
var _c0 = (a0) => ({ name: a0 });
var _c1 = (a0) => ({ language: a0 });
var _c2 = (a0) => ({ count: a0 });
var _c3 = (a0, a1) => ({ name: a0, email: a1 });
var _forTrack0 = ($index, $item) => $item.code;
var _forTrack1 = ($index, $item) => $item.country;
function HumanAuthnDetailsStepComponent_ng_container_0_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2("humanAuthnProjects.setup.details.fieldRequired"));
  }
}
function HumanAuthnDetailsStepComponent_ng_container_0_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const t_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ((tmp_4_0 = ctx_r2.form.get("contactEmail")) == null ? null : tmp_4_0.hasError("email")) ? t_r2("humanAuthnProjects.setup.details.emailInvalid") : t_r2("humanAuthnProjects.setup.details.fieldRequired"), " ");
  }
}
function HumanAuthnDetailsStepComponent_ng_container_0_For_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const language_r4 = ctx.$implicit;
    \u0275\u0275property("value", language_r4.code);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(language_r4.label);
  }
}
function HumanAuthnDetailsStepComponent_ng_container_0_Conditional_76_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 50);
    \u0275\u0275listener("click", function HumanAuthnDetailsStepComponent_ng_container_0_Conditional_76_For_2_Template_button_click_2_listener() {
      const country_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.removeCountry(country_r6));
    });
    \u0275\u0275elementStart(3, "mat-icon");
    \u0275\u0275text(4, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const country_r6 = ctx.$implicit;
    const t_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.countryLabel(country_r6), " ");
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", t_r2("humanAuthnProjects.setup.details.countriesRemove"));
  }
}
function HumanAuthnDetailsStepComponent_ng_container_0_Conditional_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275repeaterCreate(1, HumanAuthnDetailsStepComponent_ng_container_0_Conditional_76_For_2_Template, 5, 2, "span", 49, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.allowedCountries);
  }
}
function HumanAuthnDetailsStepComponent_ng_container_0_For_84_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const country_r7 = ctx.$implicit;
    const t_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("value", country_r7.country);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2(country_r7.name));
  }
}
function HumanAuthnDetailsStepComponent_ng_container_0_Conditional_85_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2("humanAuthnProjects.setup.details.fieldRequired"));
  }
}
function HumanAuthnDetailsStepComponent_ng_container_0_Conditional_103_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const t_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ((tmp_4_0 = ctx_r2.form.get("privacyUrl")) == null ? null : tmp_4_0.hasError("pattern")) ? t_r2("humanAuthnProjects.setup.details.urlInvalid") : t_r2("humanAuthnProjects.setup.details.urlRequired"), " ");
  }
}
function HumanAuthnDetailsStepComponent_ng_container_0_Conditional_108_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const t_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ((tmp_4_0 = ctx_r2.form.get("termsAndConditionsUrl")) == null ? null : tmp_4_0.hasError("pattern")) ? t_r2("humanAuthnProjects.setup.details.urlInvalid") : t_r2("humanAuthnProjects.setup.details.urlRequired"), " ");
  }
}
function HumanAuthnDetailsStepComponent_ng_container_0_Conditional_127_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2("humanAuthnProjects.setup.details.fieldRequired"));
  }
}
function HumanAuthnDetailsStepComponent_ng_container_0_Conditional_133_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const t_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ((tmp_4_0 = ctx_r2.form.get("dataProtection.email")) == null ? null : tmp_4_0.hasError("email")) ? t_r2("humanAuthnProjects.setup.details.emailInvalid") : t_r2("humanAuthnProjects.setup.details.fieldRequired"), " ");
  }
}
function HumanAuthnDetailsStepComponent_ng_container_0_Conditional_139_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2("humanAuthnProjects.setup.details.fieldRequired"));
  }
}
function HumanAuthnDetailsStepComponent_ng_container_0_Conditional_150_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2("humanAuthnProjects.setup.details.fieldRequired"));
  }
}
function HumanAuthnDetailsStepComponent_ng_container_0_Conditional_156_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2("humanAuthnProjects.setup.details.fieldRequired"));
  }
}
function HumanAuthnDetailsStepComponent_ng_container_0_For_163_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const country_r8 = ctx.$implicit;
    const t_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("value", country_r8.country);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2(country_r8.name));
  }
}
function HumanAuthnDetailsStepComponent_ng_container_0_Conditional_164_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2("humanAuthnProjects.setup.details.fieldRequired"));
  }
}
function HumanAuthnDetailsStepComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0, 2);
    \u0275\u0275elementStart(1, "div", 3)(2, "header", 4)(3, "div")(4, "span", 5);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h2");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 6)(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "strong");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 7)(16, "section", 8)(17, "div", 9)(18, "span");
    \u0275\u0275text(19, "01");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div")(21, "h3");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "p");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 10)(26, "article", 11)(27, "span", 12)(28, "mat-icon");
    \u0275\u0275text(29, "label");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 13)(31, "span", 14)(32, "strong");
    \u0275\u0275text(33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "small");
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "span", 15);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 16)(39, "mat-form-field", 17)(40, "mat-label");
    \u0275\u0275text(41);
    \u0275\u0275elementEnd();
    \u0275\u0275element(42, "input", 18);
    \u0275\u0275elementStart(43, "mat-hint", 19)(44, "span");
    \u0275\u0275text(45);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(46, HumanAuthnDetailsStepComponent_ng_container_0_Conditional_46_Template, 2, 1, "p", 20);
    \u0275\u0275elementStart(47, "p", 21);
    \u0275\u0275text(48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "mat-form-field", 17)(50, "mat-label");
    \u0275\u0275text(51);
    \u0275\u0275elementEnd();
    \u0275\u0275element(52, "input", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275template(53, HumanAuthnDetailsStepComponent_ng_container_0_Conditional_53_Template, 2, 1, "p", 20);
    \u0275\u0275elementStart(54, "p", 21);
    \u0275\u0275text(55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "mat-form-field", 17)(57, "mat-label");
    \u0275\u0275text(58);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "mat-select", 23);
    \u0275\u0275repeaterCreate(60, HumanAuthnDetailsStepComponent_ng_container_0_For_61_Template, 2, 2, "mat-option", 24, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(62, "p", 21);
    \u0275\u0275text(63);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(64, "article", 11)(65, "span", 12)(66, "mat-icon");
    \u0275\u0275text(67, "public");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(68, "div", 13)(69, "span", 14)(70, "strong");
    \u0275\u0275text(71);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "small");
    \u0275\u0275text(73);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(74, "span", 15);
    \u0275\u0275text(75);
    \u0275\u0275elementEnd();
    \u0275\u0275template(76, HumanAuthnDetailsStepComponent_ng_container_0_Conditional_76_Template, 3, 0, "div", 25);
    \u0275\u0275elementStart(77, "mat-form-field", 17)(78, "mat-label");
    \u0275\u0275text(79);
    \u0275\u0275elementEnd();
    \u0275\u0275element(80, "input", 26);
    \u0275\u0275elementStart(81, "mat-autocomplete", 27, 0);
    \u0275\u0275listener("optionSelected", function HumanAuthnDetailsStepComponent_ng_container_0_Template_mat_autocomplete_optionSelected_81_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onAllowedCountryPicked($event));
    });
    \u0275\u0275repeaterCreate(83, HumanAuthnDetailsStepComponent_ng_container_0_For_84_Template, 2, 2, "mat-option", 24, _forTrack1);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(85, HumanAuthnDetailsStepComponent_ng_container_0_Conditional_85_Template, 2, 1, "p", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(86, "article", 11)(87, "span", 12)(88, "mat-icon");
    \u0275\u0275text(89, "link");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(90, "div", 13)(91, "span", 14)(92, "strong");
    \u0275\u0275text(93);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "small");
    \u0275\u0275text(95);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(96, "span", 15);
    \u0275\u0275text(97);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(98, "div", 16)(99, "mat-form-field", 17)(100, "mat-label");
    \u0275\u0275text(101);
    \u0275\u0275elementEnd();
    \u0275\u0275element(102, "input", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275template(103, HumanAuthnDetailsStepComponent_ng_container_0_Conditional_103_Template, 2, 1, "p", 20);
    \u0275\u0275elementStart(104, "mat-form-field", 17)(105, "mat-label");
    \u0275\u0275text(106);
    \u0275\u0275elementEnd();
    \u0275\u0275element(107, "input", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275template(108, HumanAuthnDetailsStepComponent_ng_container_0_Conditional_108_Template, 2, 1, "p", 20);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(109, "article", 30)(110, "span", 12)(111, "mat-icon");
    \u0275\u0275text(112, "gavel");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(113, "div", 13)(114, "span", 14)(115, "strong");
    \u0275\u0275text(116);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(117, "small");
    \u0275\u0275text(118);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(119, "span", 15);
    \u0275\u0275text(120);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(121, "div", 31)(122, "div")(123, "mat-form-field", 17)(124, "mat-label");
    \u0275\u0275text(125);
    \u0275\u0275elementEnd();
    \u0275\u0275element(126, "input", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275template(127, HumanAuthnDetailsStepComponent_ng_container_0_Conditional_127_Template, 2, 1, "p", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(128, "div")(129, "mat-form-field", 17)(130, "mat-label");
    \u0275\u0275text(131);
    \u0275\u0275elementEnd();
    \u0275\u0275element(132, "input", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275template(133, HumanAuthnDetailsStepComponent_ng_container_0_Conditional_133_Template, 2, 1, "p", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(134, "div", 34)(135, "mat-form-field", 17)(136, "mat-label");
    \u0275\u0275text(137);
    \u0275\u0275elementEnd();
    \u0275\u0275element(138, "input", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275template(139, HumanAuthnDetailsStepComponent_ng_container_0_Conditional_139_Template, 2, 1, "p", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(140, "div", 34)(141, "mat-form-field", 17)(142, "mat-label");
    \u0275\u0275text(143);
    \u0275\u0275elementEnd();
    \u0275\u0275element(144, "input", 36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(145, "div")(146, "mat-form-field", 17)(147, "mat-label");
    \u0275\u0275text(148);
    \u0275\u0275elementEnd();
    \u0275\u0275element(149, "input", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275template(150, HumanAuthnDetailsStepComponent_ng_container_0_Conditional_150_Template, 2, 1, "p", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(151, "div")(152, "mat-form-field", 17)(153, "mat-label");
    \u0275\u0275text(154);
    \u0275\u0275elementEnd();
    \u0275\u0275element(155, "input", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275template(156, HumanAuthnDetailsStepComponent_ng_container_0_Conditional_156_Template, 2, 1, "p", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(157, "div", 34)(158, "mat-form-field", 17)(159, "mat-label");
    \u0275\u0275text(160);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(161, "mat-select", 39);
    \u0275\u0275repeaterCreate(162, HumanAuthnDetailsStepComponent_ng_container_0_For_163_Template, 2, 2, "mat-option", 24, _forTrack1);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(164, HumanAuthnDetailsStepComponent_ng_container_0_Conditional_164_Template, 2, 1, "p", 20);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(165, "aside", 40)(166, "div", 41)(167, "span");
    \u0275\u0275text(168, "02");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(169, "div")(170, "h3");
    \u0275\u0275text(171);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(172, "p");
    \u0275\u0275text(173);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(174, "div", 42)(175, "article")(176, "mat-icon");
    \u0275\u0275text(177, "group");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(178, "div")(179, "strong");
    \u0275\u0275text(180);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(181, "p");
    \u0275\u0275text(182);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(183, "article")(184, "mat-icon");
    \u0275\u0275text(185, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(186, "div")(187, "strong");
    \u0275\u0275text(188);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(189, "p");
    \u0275\u0275text(190);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(191, "p");
    \u0275\u0275text(192);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(193, "p", 43)(194, "span");
    \u0275\u0275text(195);
    \u0275\u0275elementEnd();
    \u0275\u0275text(196);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(197, "p", 43)(198, "span");
    \u0275\u0275text(199);
    \u0275\u0275elementEnd();
    \u0275\u0275text(200);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(201, "article")(202, "mat-icon");
    \u0275\u0275text(203, "gavel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(204, "div")(205, "strong");
    \u0275\u0275text(206);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(207, "p");
    \u0275\u0275text(208);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(209, "section", 44)(210, "div", 9)(211, "span");
    \u0275\u0275text(212, "03");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(213, "div")(214, "h3");
    \u0275\u0275text(215);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(216, "p");
    \u0275\u0275text(217);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(218, "div", 45)(219, "article")(220, "span", 46)(221, "mat-icon");
    \u0275\u0275text(222, "label");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(223, "div")(224, "strong");
    \u0275\u0275text(225);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(226, "p");
    \u0275\u0275text(227);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(228, "article")(229, "span", 47)(230, "mat-icon");
    \u0275\u0275text(231, "public");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(232, "div")(233, "strong");
    \u0275\u0275text(234);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(235, "p");
    \u0275\u0275text(236);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(237, "article")(238, "span", 48)(239, "mat-icon");
    \u0275\u0275text(240, "gavel");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(241, "div")(242, "strong");
    \u0275\u0275text(243);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(244, "p");
    \u0275\u0275text(245);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r2 = ctx.$implicit;
    const allowedCountriesAuto_r9 = \u0275\u0275reference(82);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r2.form);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(t_r2("humanAuthnProjects.setup.details.eyebrow"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2("humanAuthnProjects.setup.details.title"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2("humanAuthnProjects.setup.details.subtitle"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r2("humanAuthnProjects.setup.details.currentChoice"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.projectName || t_r2("humanAuthnProjects.setup.details.nameRequiredChip"));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(t_r2("humanAuthnProjects.setup.details.fieldsTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2("humanAuthnProjects.setup.details.fieldsHelp"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("field-card--ready", !!ctx_r2.projectName);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(t_r2("humanAuthnProjects.setup.details.identityTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2("humanAuthnProjects.setup.details.required"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2("humanAuthnProjects.setup.details.identityBody"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r2("humanAuthnProjects.setup.details.nameLabel"));
    \u0275\u0275advance();
    \u0275\u0275property("maxlength", ctx_r2.MAX_NAME_LENGTH + 1);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("counter--warning", ctx_r2.nameLengthStatus === "warning")("counter--danger", ctx_r2.nameLengthStatus === "danger");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r2.nameLength, "/", ctx_r2.MAX_NAME_LENGTH, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.showError("name") ? 46 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2("humanAuthnProjects.setup.details.nameHint"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r2("humanAuthnProjects.setup.details.contactEmailLabel"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.showError("contactEmail") ? 53 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2("humanAuthnProjects.setup.details.contactEmailHint"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r2("humanAuthnProjects.setup.details.languageLabel"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.defaultLanguages);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r2("humanAuthnProjects.setup.details.languageHint"));
    \u0275\u0275advance();
    \u0275\u0275classProp("field-card--ready", ctx_r2.allowedCountries.length > 0);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(t_r2("humanAuthnProjects.setup.details.countriesTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2("humanAuthnProjects.setup.details.required"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2("humanAuthnProjects.setup.details.countriesBody"));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.allowedCountries.length ? 76 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r2("humanAuthnProjects.setup.details.countriesAdd"));
    \u0275\u0275advance();
    \u0275\u0275property("formControl", ctx_r2.allowedCountryFilterCtrl)("placeholder", t_r2("humanAuthnProjects.setup.details.countriesSearch"))("matAutocomplete", allowedCountriesAuto_r9);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.filteredAllowedCountries);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.showError("allowedCountries") ? 85 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("field-card--ready", ctx_r2.privacySet && ctx_r2.termsSet);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(t_r2("humanAuthnProjects.setup.details.urlsTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2("humanAuthnProjects.setup.details.required"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2("humanAuthnProjects.setup.details.urlsBody"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r2("humanAuthnProjects.setup.details.privacyLabel"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.showError("privacyUrl") ? 103 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r2("humanAuthnProjects.setup.details.termsLabel"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.showError("termsAndConditionsUrl") ? 108 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("field-card--ready", !!ctx_r2.officerName);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(t_r2("humanAuthnProjects.setup.details.officerTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2("humanAuthnProjects.setup.details.required"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2("humanAuthnProjects.setup.details.officerBody"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(t_r2("humanAuthnProjects.setup.details.officerName"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.showError("dataProtection.name") ? 127 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r2("humanAuthnProjects.setup.details.officerEmail"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.showError("dataProtection.email") ? 133 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r2("humanAuthnProjects.setup.details.officerAddress"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.showError("dataProtection.address") ? 139 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r2("humanAuthnProjects.setup.details.officerAddress2"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(t_r2("humanAuthnProjects.setup.details.officerCity"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.showError("dataProtection.city") ? 150 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r2("humanAuthnProjects.setup.details.officerPostal"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.showError("dataProtection.postalCode") ? 156 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r2("humanAuthnProjects.setup.details.officerCountry"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.officerCountries);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.showError("dataProtection.country") ? 164 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(t_r2("humanAuthnProjects.setup.details.howTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2("humanAuthnProjects.setup.details.howHelp"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(t_r2("humanAuthnProjects.setup.details.teamTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2("humanAuthnProjects.setup.details.teamBody", \u0275\u0275pureFunction1(87, _c0, ctx_r2.projectName || t_r2("humanAuthnProjects.setup.details.nameRequiredChip"))));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(t_r2("humanAuthnProjects.setup.details.personTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2("humanAuthnProjects.setup.details.personLanguage", \u0275\u0275pureFunction1(89, _c1, ctx_r2.languageLabel)));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.allowsWorld ? t_r2("humanAuthnProjects.setup.details.personCountriesWorld") : ctx_r2.allowedCountries.length ? t_r2("humanAuthnProjects.setup.details.personCountriesCount", \u0275\u0275pureFunction1(91, _c2, ctx_r2.allowedCountries.length)) : t_r2("humanAuthnProjects.setup.details.personCountriesNone"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r2("humanAuthnProjects.setup.details.privacyLabel"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.privacyUrl || t_r2("humanAuthnProjects.setup.details.personPrivacyOff"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r2("humanAuthnProjects.setup.details.termsLabel"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.termsUrl || t_r2("humanAuthnProjects.setup.details.personTermsOff"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(t_r2("humanAuthnProjects.setup.details.officerRowTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.officerName ? t_r2("humanAuthnProjects.setup.details.officerReady", \u0275\u0275pureFunction2(93, _c3, ctx_r2.officerName, ctx_r2.officerEmail)) : t_r2("humanAuthnProjects.setup.details.officerMissing"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(t_r2("humanAuthnProjects.setup.details.factsTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2("humanAuthnProjects.setup.details.factsHelp"));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(t_r2("humanAuthnProjects.setup.details.factNameTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2("humanAuthnProjects.setup.details.factNameBody"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(t_r2("humanAuthnProjects.setup.details.factCountriesTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2("humanAuthnProjects.setup.details.factCountriesBody"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(t_r2("humanAuthnProjects.setup.details.factOfficerTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2("humanAuthnProjects.setup.details.factOfficerBody"));
  }
}
var HumanAuthnDetailsStepComponent = class _HumanAuthnDetailsStepComponent {
  constructor() {
    this._countries = inject(CountryService);
    this._transloco = inject(TranslocoService);
    this._cdr = inject(ChangeDetectorRef);
    this._destroyRef = inject(DestroyRef);
    this.MAX_NAME_LENGTH = 60;
    this.defaultLanguages = PROJECT_DEFAULT_LANGUAGES;
    this.allowedCountryFilterCtrl = new FormControl("", { nonNullable: true });
  }
  ngOnInit() {
    this.form?.valueChanges.pipe(takeUntilDestroyed(this._destroyRef)).subscribe(() => this._cdr.markForCheck());
    this.allowedCountryFilterCtrl.valueChanges.pipe(takeUntilDestroyed(this._destroyRef)).subscribe(() => this._cdr.markForCheck());
    this._transloco.langChanges$.pipe(takeUntilDestroyed(this._destroyRef)).subscribe(() => this._cdr.markForCheck());
  }
  get projectName() {
    return `${this.form?.get("name")?.value || ""}`.trim();
  }
  get nameLength() {
    return this.form?.get("name")?.value?.length || 0;
  }
  get nameLengthStatus() {
    if (this.nameLength > this.MAX_NAME_LENGTH)
      return "danger";
    if (this.nameLength > this.MAX_NAME_LENGTH * 0.8)
      return "warning";
    return "safe";
  }
  get allowedCountries() {
    return this.form?.get("allowedCountries")?.value || [];
  }
  get allowsWorld() {
    return this.allowedCountries.includes("All");
  }
  get languageLabel() {
    const code = this.form?.get("defaultLanguage")?.value;
    return this.defaultLanguages.find((language) => language.code === code)?.label || code || "";
  }
  get privacyUrl() {
    return this._urlValue("privacyUrl");
  }
  get termsUrl() {
    return this._urlValue("termsAndConditionsUrl");
  }
  get privacySet() {
    return this._urlReady("privacyUrl");
  }
  get termsSet() {
    return this._urlReady("termsAndConditionsUrl");
  }
  get officerName() {
    return `${this.form?.get("dataProtection.name")?.value || ""}`.trim();
  }
  get officerEmail() {
    return `${this.form?.get("dataProtection.email")?.value || ""}`.trim();
  }
  get filteredAllowedCountries() {
    const term = this.allowedCountryFilterCtrl.value.trim().toLowerCase();
    const selected = new Set(this.allowedCountries);
    return this._countries.ipCountries.filter((country) => {
      if (selected.has(country.country))
        return false;
      const label = this._transloco.translate(country.name).toLowerCase();
      const code = (country.code || "").toLowerCase();
      const key = (country.country || "").toLowerCase();
      if (!term)
        return true;
      return label.includes(term) || code.includes(term) || key.includes(term);
    });
  }
  get officerCountries() {
    return this._countries.countries.filter((country) => country.country.toLowerCase() !== "all");
  }
  showError(path) {
    const control = this.form?.get(path);
    return !!control && control.invalid && (control.touched || control.dirty);
  }
  countryLabel(country) {
    if (country === "All")
      return this._transloco.translate("country_name.world");
    const found = this._countries.countries.find((option) => option.country === country);
    return found ? this._transloco.translate(found.name) : country;
  }
  onAllowedCountryPicked(event) {
    const code = event.option.value;
    const option = this._countries.ipCountries.find((country) => country.country === code);
    this.allowedCountryFilterCtrl.setValue("", { emitEvent: false });
    if (option)
      this._addCountry(option);
    this._cdr.markForCheck();
  }
  removeCountry(country) {
    const values = new Set(this.allowedCountries);
    values.delete(country);
    this._setCountries(Array.from(values));
  }
  _addCountry(country) {
    if (country.country === "All") {
      this._setCountries(["All"]);
      return;
    }
    const values = new Set(this.allowedCountries);
    values.delete("All");
    values.add(country.country);
    this._setCountries(Array.from(values));
  }
  _setCountries(countries) {
    const control = this.form?.get("allowedCountries");
    control?.setValue(countries);
    control?.markAsDirty();
  }
  _urlValue(path) {
    const control = this.form?.get(path);
    const value = `${control?.value || ""}`.trim();
    return value && !control?.invalid ? value : "";
  }
  _urlReady(path) {
    return !!this._urlValue(path);
  }
  static {
    this.\u0275fac = function HumanAuthnDetailsStepComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HumanAuthnDetailsStepComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HumanAuthnDetailsStepComponent, selectors: [["human-authn-details-step"]], inputs: { form: "form" }, decls: 1, vars: 0, consts: [["allowedCountriesAuto", "matAutocomplete"], [3, "formGroup", 4, "transloco"], [3, "formGroup"], [1, "details-screen"], [1, "details-hero"], [1, "details-hero__eyebrow"], [1, "details-hero__choice"], [1, "details-decision"], [1, "fields"], [1, "section-heading"], [1, "field-list"], [1, "field-card"], [1, "field-card__icon"], [1, "field-card__content"], [1, "field-card__title"], [1, "field-card__body"], [1, "input-stack"], ["appearance", "outline", "subscriptSizing", "dynamic"], ["matInput", "", "formControlName", "name", "autocomplete", "off", 3, "maxlength"], ["align", "end"], [1, "field-error"], [1, "field-note"], ["matInput", "", "formControlName", "contactEmail", "type", "email", "autocomplete", "email"], ["formControlName", "defaultLanguage"], [3, "value"], [1, "chips"], ["matInput", "", "type", "text", "autocomplete", "off", 3, "formControl", "placeholder", "matAutocomplete"], [3, "optionSelected"], ["matInput", "", "formControlName", "privacyUrl", "type", "url", "placeholder", "https://", "autocomplete", "off"], ["matInput", "", "formControlName", "termsAndConditionsUrl", "type", "url", "placeholder", "https://", "autocomplete", "off"], ["formGroupName", "dataProtection", 1, "field-card"], [1, "input-grid"], ["matInput", "", "formControlName", "name", "autocomplete", "name"], ["matInput", "", "formControlName", "email", "type", "email", "autocomplete", "email"], [1, "span-2"], ["matInput", "", "formControlName", "address", "autocomplete", "street-address"], ["matInput", "", "formControlName", "address2", "autocomplete", "address-line2"], ["matInput", "", "formControlName", "city", "autocomplete", "address-level2"], ["matInput", "", "formControlName", "postalCode", "autocomplete", "postal-code"], ["formControlName", "country"], ["aria-live", "polite", 1, "details-explainer"], [1, "section-heading", "section-heading--light"], [1, "audience"], [1, "audience-link"], [1, "details-facts"], [1, "fact-items"], [1, "fact-items__icon", "fact-items__icon--name"], [1, "fact-items__icon", "fact-items__icon--countries"], [1, "fact-items__icon", "fact-items__icon--officer"], [1, "chip"], ["type", "button", 3, "click"]], template: function HumanAuthnDetailsStepComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, HumanAuthnDetailsStepComponent_ng_container_0_Template, 246, 96, "ng-container", 1);
      }
    }, dependencies: [
      CommonModule,
      ReactiveFormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      MaxLengthValidator,
      FormControlDirective,
      FormGroupDirective,
      FormControlName,
      FormGroupName,
      MatAutocompleteModule,
      MatAutocomplete,
      MatOption,
      MatAutocompleteTrigger,
      MatFormFieldModule,
      MatFormField,
      MatLabel,
      MatHint,
      MatIconModule,
      MatIcon,
      MatInputModule,
      MatInput,
      MatSelectModule,
      MatSelect,
      TranslocoModule,
      TranslocoDirective
    ], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.details-screen[_ngcontent-%COMP%] {\n  margin-inline: auto;\n  width: min(100%, 76rem);\n}\n.details-hero[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 2rem;\n  margin-bottom: 2rem;\n  padding: 0.5rem 0.25rem;\n}\n.details-hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  max-width: 42rem;\n  margin: 0.35rem 0 0;\n  color: #1c1917;\n  font-size: clamp(1.75rem, 3vw, 2.55rem);\n  font-weight: 680;\n  letter-spacing: -0.045em;\n  line-height: 1.05;\n}\n.details-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 42rem;\n  margin: 0.75rem 0 0;\n  color: #78716c;\n  font-size: 0.88rem;\n  line-height: 1.6;\n}\n.details-hero__eyebrow[_ngcontent-%COMP%] {\n  color: #78716c;\n  font-size: 0.65rem;\n  font-weight: 750;\n  letter-spacing: 0.16em;\n  text-transform: uppercase;\n}\n.details-hero__choice[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 0 0 auto;\n  flex-direction: column;\n  align-items: flex-end;\n  max-width: 18rem;\n  padding: 0.75rem 1rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 0.9rem;\n  background: white;\n}\n.details-hero__choice[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #a8a29e;\n  font-size: 0.62rem;\n  font-weight: 650;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n.details-hero__choice[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  margin-top: 0.15rem;\n  color: #292524;\n  font-size: 0.82rem;\n  text-align: right;\n}\n.details-decision[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1.15fr) minmax(20rem, 0.85fr);\n  overflow: hidden;\n  border: 1px solid #d6d3d1;\n  border-radius: 1.5rem;\n  background: white;\n  box-shadow: 0 1px 2px rgba(28, 25, 23, 0.03), 0 18px 45px rgba(28, 25, 23, 0.05);\n}\n.fields[_ngcontent-%COMP%], \n.details-explainer[_ngcontent-%COMP%], \n.details-facts[_ngcontent-%COMP%] {\n  padding: 1.75rem;\n}\n.details-explainer[_ngcontent-%COMP%] {\n  background: #1c1917;\n  color: white;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.8rem;\n  margin-bottom: 1.25rem;\n}\n.section-heading[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: grid;\n  flex: 0 0 1.8rem;\n  width: 1.8rem;\n  height: 1.8rem;\n  place-items: center;\n  border-radius: 999px;\n  background: #292524;\n  color: white;\n  font-size: 0.62rem;\n  font-weight: 750;\n}\n.section-heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #292524;\n  font-size: 0.95rem;\n  font-weight: 680;\n}\n.section-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.25rem 0 0;\n  color: #78716c;\n  font-size: 0.72rem;\n  line-height: 1.45;\n}\n.section-heading--light[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  background: white;\n  color: #1c1917;\n}\n.section-heading--light[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: white;\n}\n.section-heading--light[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #a8a29e;\n}\n.field-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.8rem;\n}\n.field-card[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr);\n  gap: 1rem;\n  padding: 1.15rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 1rem;\n  background: #fafaf9;\n}\n.field-card--ready[_ngcontent-%COMP%] {\n  border-color: #292524;\n  background: white;\n  box-shadow: inset 0 0 0 1px #292524;\n}\n.field-card__icon[_ngcontent-%COMP%] {\n  display: grid;\n  width: 2.6rem;\n  height: 2.6rem;\n  place-items: center;\n  border-radius: 0.8rem;\n  background: #e7e5e4;\n  color: #44403c;\n}\n.field-card__icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 1.25rem;\n  height: 1.25rem;\n  font-size: 1.25rem;\n}\n.field-card--ready[_ngcontent-%COMP%]   .field-card__icon[_ngcontent-%COMP%] {\n  background: #292524;\n  color: white;\n}\n.field-card__title[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 0.45rem;\n}\n.field-card__title[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #292524;\n  font-size: 0.92rem;\n}\n.field-card__title[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  padding: 0.12rem 0.4rem;\n  border-radius: 999px;\n  background: #e7e5e4;\n  color: #57534e;\n  font-size: 0.62rem;\n  font-weight: 700;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n}\n.field-card__body[_ngcontent-%COMP%], \n.field-note[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0.4rem 0 0;\n  color: #78716c;\n  font-size: 0.75rem;\n  line-height: 1.45;\n}\n.input-stack[_ngcontent-%COMP%], \n.input-grid[_ngcontent-%COMP%] {\n  margin-top: 0.85rem;\n}\n.input-stack[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.65rem;\n}\n.input-stack[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.input-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.65rem 0.8rem;\n}\n.input-grid[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.span-2[_ngcontent-%COMP%] {\n  grid-column: span 2;\n  min-width: 0;\n}\n.chips[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.4rem;\n  margin-top: 0.75rem;\n}\n.chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.2rem;\n  padding: 0.2rem 0.35rem 0.2rem 0.65rem;\n  border-radius: 999px;\n  background: #e7e5e4;\n  color: #292524;\n  font-size: 0.72rem;\n  font-weight: 650;\n}\n.chip[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: grid;\n  width: 1.2rem;\n  height: 1.2rem;\n  place-items: center;\n  border: 0;\n  border-radius: 999px;\n  background: transparent;\n  color: #57534e;\n}\n.chip[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 0.85rem;\n  height: 0.85rem;\n  font-size: 0.85rem;\n}\n.field-error[_ngcontent-%COMP%] {\n  margin: 0.15rem 0 0;\n  color: #b91c1c;\n  font-size: 0.72rem;\n}\n.counter--warning[_ngcontent-%COMP%] {\n  color: #b45309;\n}\n.counter--danger[_ngcontent-%COMP%] {\n  color: #b91c1c;\n}\n.audience[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.audience[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  padding: 0.9rem;\n  border: 1px solid #44403c;\n  border-radius: 0.9rem;\n  background: #292524;\n}\n.audience[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]    > mat-icon[_ngcontent-%COMP%] {\n  width: 1.2rem;\n  height: 1.2rem;\n  color: #e7e5e4;\n  font-size: 1.2rem;\n}\n.audience[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.82rem;\n}\n.audience[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.3rem 0 0;\n  color: #d6d3d1;\n  font-size: 0.72rem;\n  line-height: 1.45;\n}\n.audience-link[_ngcontent-%COMP%] {\n  display: block;\n  overflow-wrap: anywhere;\n}\n.audience-link[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.15rem;\n  color: #a8a29e;\n  font-size: 0.62rem;\n  font-weight: 650;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n}\n.details-facts[_ngcontent-%COMP%] {\n  margin-top: 1.25rem;\n  border: 1px solid #d6d3d1;\n  border-radius: 1.5rem;\n  background: white;\n}\n.fact-items[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 0.8rem;\n}\n.fact-items[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  padding: 0.9rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 0.9rem;\n  background: #fafaf9;\n}\n.fact-items[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #292524;\n  font-size: 0.78rem;\n}\n.fact-items[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.25rem 0 0;\n  color: #78716c;\n  font-size: 0.68rem;\n  line-height: 1.45;\n}\n.fact-items__icon[_ngcontent-%COMP%] {\n  display: grid;\n  flex: 0 0 2rem;\n  width: 2rem;\n  height: 2rem;\n  place-items: center;\n  border-radius: 0.6rem;\n}\n.fact-items__icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n  font-size: 1rem;\n}\n.fact-items__icon--name[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  color: #1d4ed8;\n}\n.fact-items__icon--countries[_ngcontent-%COMP%] {\n  background: #ecfdf5;\n  color: #047857;\n}\n.fact-items__icon--officer[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #b45309;\n}\n.dark[_nghost-%COMP%]   .details-hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .details-hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .section-heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .section-heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .field-card__title[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .field-card__title[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .chip[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .chip[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .fact-items[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .fact-items[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .details-hero__choice[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .details-hero__choice[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #f8fafc;\n}\n.dark[_nghost-%COMP%]   .details-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .details-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .details-hero__eyebrow[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .details-hero__eyebrow[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .section-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .section-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .field-card__body[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .field-card__body[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .field-note[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .field-note[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .fact-items[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .fact-items[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .details-hero__choice[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .details-hero__choice[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .details-hero__choice[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .details-hero__choice[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .details-decision[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .details-decision[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .details-facts[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .details-facts[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .field-card[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .field-card[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .fact-items[_ngcontent-%COMP%]   article[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .fact-items[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  border-color: #334155;\n  background: #0f172a;\n}\n.dark[_nghost-%COMP%]   .details-decision[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .details-decision[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .details-facts[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .details-facts[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .details-hero__choice[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .details-hero__choice[_ngcontent-%COMP%] {\n  background: #1e293b;\n}\n.dark[_nghost-%COMP%]   .fields[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .fields[_ngcontent-%COMP%] {\n  background: #1e293b;\n}\n.dark[_nghost-%COMP%]   .field-card--ready[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .field-card--ready[_ngcontent-%COMP%] {\n  border-color: #e2e8f0;\n  box-shadow: inset 0 0 0 1px #e2e8f0;\n}\n.dark[_nghost-%COMP%]   .field-card__icon[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .field-card__icon[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .field-card__title[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .field-card__title[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .chip[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .chip[_ngcontent-%COMP%] {\n  background: #334155;\n  color: #e2e8f0;\n}\n.dark[_nghost-%COMP%]   .chip[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .chip[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #e2e8f0;\n}\n.dark[_nghost-%COMP%]   .field-card--ready[_ngcontent-%COMP%]   .field-card__icon[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .field-card--ready[_ngcontent-%COMP%]   .field-card__icon[_ngcontent-%COMP%] {\n  background: #e2e8f0;\n  color: #0f172a;\n}\n.dark[_nghost-%COMP%]   .section-heading[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .section-heading[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  background: #cbd5e1;\n  color: #0f172a;\n}\n.dark[_nghost-%COMP%]   .details-explainer[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .details-explainer[_ngcontent-%COMP%] {\n  background: #0f172a;\n}\n.dark[_nghost-%COMP%]   .section-heading--light[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .section-heading--light[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  background: #e2e8f0;\n  color: #0f172a;\n}\n.dark[_nghost-%COMP%]   .section-heading--light[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .section-heading--light[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .audience[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .audience[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #f8fafc;\n}\n.dark[_nghost-%COMP%]   .audience[_ngcontent-%COMP%]   article[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .audience[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  border-color: #475569;\n  background: #1e293b;\n}\n.dark[_nghost-%COMP%]   .fact-items__icon--name[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .fact-items__icon--name[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.16);\n  color: #93c5fd;\n}\n.dark[_nghost-%COMP%]   .fact-items__icon--countries[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .fact-items__icon--countries[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.14);\n  color: #6ee7b7;\n}\n.dark[_nghost-%COMP%]   .fact-items__icon--officer[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .fact-items__icon--officer[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.16);\n  color: #fcd34d;\n}\n@media (max-width: 980px) {\n  .details-decision[_ngcontent-%COMP%], \n   .fact-items[_ngcontent-%COMP%], \n   .input-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .span-2[_ngcontent-%COMP%] {\n    grid-column: auto;\n  }\n}\n@media (max-width: 680px) {\n  .details-hero[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n  .details-hero__choice[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    max-width: none;\n  }\n  .details-hero__choice[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    text-align: left;\n  }\n  .fields[_ngcontent-%COMP%], \n   .details-explainer[_ngcontent-%COMP%], \n   .details-facts[_ngcontent-%COMP%] {\n    padding: 1.25rem;\n  }\n}\n/*# sourceMappingURL=details-step.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HumanAuthnDetailsStepComponent, [{
    type: Component,
    args: [{ selector: "human-authn-details-step", standalone: true, imports: [
      CommonModule,
      ReactiveFormsModule,
      MatAutocompleteModule,
      MatFormFieldModule,
      MatIconModule,
      MatInputModule,
      MatSelectModule,
      TranslocoModule
    ], template: `<ng-container *transloco="let t" [formGroup]="form">\r
    <div class="details-screen">\r
        <header class="details-hero">\r
            <div>\r
                <span class="details-hero__eyebrow">{{ t('humanAuthnProjects.setup.details.eyebrow') }}</span>\r
                <h2>{{ t('humanAuthnProjects.setup.details.title') }}</h2>\r
                <p>{{ t('humanAuthnProjects.setup.details.subtitle') }}</p>\r
            </div>\r
            <div class="details-hero__choice">\r
                <span>{{ t('humanAuthnProjects.setup.details.currentChoice') }}</span>\r
                <strong>{{ projectName || t('humanAuthnProjects.setup.details.nameRequiredChip') }}</strong>\r
            </div>\r
        </header>\r
\r
        <div class="details-decision">\r
            <section class="fields">\r
                <div class="section-heading">\r
                    <span>01</span>\r
                    <div>\r
                        <h3>{{ t('humanAuthnProjects.setup.details.fieldsTitle') }}</h3>\r
                        <p>{{ t('humanAuthnProjects.setup.details.fieldsHelp') }}</p>\r
                    </div>\r
                </div>\r
\r
                <div class="field-list">\r
                    <article class="field-card" [class.field-card--ready]="!!projectName">\r
                        <span class="field-card__icon"><mat-icon>label</mat-icon></span>\r
                        <div class="field-card__content">\r
                            <span class="field-card__title">\r
                                <strong>{{ t('humanAuthnProjects.setup.details.identityTitle') }}</strong>\r
                                <small>{{ t('humanAuthnProjects.setup.details.required') }}</small>\r
                            </span>\r
                            <span class="field-card__body">{{ t('humanAuthnProjects.setup.details.identityBody') }}</span>\r
                            <div class="input-stack">\r
                                <mat-form-field appearance="outline" subscriptSizing="dynamic">\r
                                    <mat-label>{{ t('humanAuthnProjects.setup.details.nameLabel') }}</mat-label>\r
                                    <input matInput formControlName="name" [maxlength]="MAX_NAME_LENGTH + 1" autocomplete="off" />\r
                                    <mat-hint align="end">\r
                                        <span [class.counter--warning]="nameLengthStatus === 'warning'" [class.counter--danger]="nameLengthStatus === 'danger'">\r
                                            {{ nameLength }}/{{ MAX_NAME_LENGTH }}\r
                                        </span>\r
                                    </mat-hint>\r
                                </mat-form-field>\r
                                @if (showError('name')) {\r
                                    <p class="field-error">{{ t('humanAuthnProjects.setup.details.fieldRequired') }}</p>\r
                                }\r
                                <p class="field-note">{{ t('humanAuthnProjects.setup.details.nameHint') }}</p>\r
\r
                                <mat-form-field appearance="outline" subscriptSizing="dynamic">\r
                                    <mat-label>{{ t('humanAuthnProjects.setup.details.contactEmailLabel') }}</mat-label>\r
                                    <input matInput formControlName="contactEmail" type="email" autocomplete="email" />\r
                                </mat-form-field>\r
                                @if (showError('contactEmail')) {\r
                                    <p class="field-error">\r
                                        {{\r
                                            form.get('contactEmail')?.hasError('email')\r
                                                ? t('humanAuthnProjects.setup.details.emailInvalid')\r
                                                : t('humanAuthnProjects.setup.details.fieldRequired')\r
                                        }}\r
                                    </p>\r
                                }\r
                                <p class="field-note">{{ t('humanAuthnProjects.setup.details.contactEmailHint') }}</p>\r
\r
                                <mat-form-field appearance="outline" subscriptSizing="dynamic">\r
                                    <mat-label>{{ t('humanAuthnProjects.setup.details.languageLabel') }}</mat-label>\r
                                    <mat-select formControlName="defaultLanguage">\r
                                        @for (language of defaultLanguages; track language.code) {\r
                                            <mat-option [value]="language.code">{{ language.label }}</mat-option>\r
                                        }\r
                                    </mat-select>\r
                                </mat-form-field>\r
                                <p class="field-note">{{ t('humanAuthnProjects.setup.details.languageHint') }}</p>\r
                            </div>\r
                        </div>\r
                    </article>\r
\r
                    <article class="field-card" [class.field-card--ready]="allowedCountries.length > 0">\r
                        <span class="field-card__icon"><mat-icon>public</mat-icon></span>\r
                        <div class="field-card__content">\r
                            <span class="field-card__title">\r
                                <strong>{{ t('humanAuthnProjects.setup.details.countriesTitle') }}</strong>\r
                                <small>{{ t('humanAuthnProjects.setup.details.required') }}</small>\r
                            </span>\r
                            <span class="field-card__body">{{ t('humanAuthnProjects.setup.details.countriesBody') }}</span>\r
                            @if (allowedCountries.length) {\r
                                <div class="chips">\r
                                    @for (country of allowedCountries; track country) {\r
                                        <span class="chip">\r
                                            {{ countryLabel(country) }}\r
                                            <button\r
                                                type="button"\r
                                                (click)="removeCountry(country)"\r
                                                [attr.aria-label]="t('humanAuthnProjects.setup.details.countriesRemove')"\r
                                            >\r
                                                <mat-icon>close</mat-icon>\r
                                            </button>\r
                                        </span>\r
                                    }\r
                                </div>\r
                            }\r
                            <mat-form-field appearance="outline" subscriptSizing="dynamic">\r
                                <mat-label>{{ t('humanAuthnProjects.setup.details.countriesAdd') }}</mat-label>\r
                                <input\r
                                    matInput\r
                                    type="text"\r
                                    autocomplete="off"\r
                                    [formControl]="allowedCountryFilterCtrl"\r
                                    [placeholder]="t('humanAuthnProjects.setup.details.countriesSearch')"\r
                                    [matAutocomplete]="allowedCountriesAuto"\r
                                />\r
                                <mat-autocomplete #allowedCountriesAuto="matAutocomplete" (optionSelected)="onAllowedCountryPicked($event)">\r
                                    @for (country of filteredAllowedCountries; track country.country) {\r
                                        <mat-option [value]="country.country">{{ t(country.name) }}</mat-option>\r
                                    }\r
                                </mat-autocomplete>\r
                            </mat-form-field>\r
                            @if (showError('allowedCountries')) {\r
                                <p class="field-error">{{ t('humanAuthnProjects.setup.details.fieldRequired') }}</p>\r
                            }\r
                        </div>\r
                    </article>\r
\r
                    <article class="field-card" [class.field-card--ready]="privacySet && termsSet">\r
                        <span class="field-card__icon"><mat-icon>link</mat-icon></span>\r
                        <div class="field-card__content">\r
                            <span class="field-card__title">\r
                                <strong>{{ t('humanAuthnProjects.setup.details.urlsTitle') }}</strong>\r
                                <small>{{ t('humanAuthnProjects.setup.details.required') }}</small>\r
                            </span>\r
                            <span class="field-card__body">{{ t('humanAuthnProjects.setup.details.urlsBody') }}</span>\r
                            <div class="input-stack">\r
                                <mat-form-field appearance="outline" subscriptSizing="dynamic">\r
                                    <mat-label>{{ t('humanAuthnProjects.setup.details.privacyLabel') }}</mat-label>\r
                                    <input matInput formControlName="privacyUrl" type="url" placeholder="https://" autocomplete="off" />\r
                                </mat-form-field>\r
                                @if (showError('privacyUrl')) {\r
                                    <p class="field-error">\r
                                        {{\r
                                            form.get('privacyUrl')?.hasError('pattern')\r
                                                ? t('humanAuthnProjects.setup.details.urlInvalid')\r
                                                : t('humanAuthnProjects.setup.details.urlRequired')\r
                                        }}\r
                                    </p>\r
                                }\r
                                <mat-form-field appearance="outline" subscriptSizing="dynamic">\r
                                    <mat-label>{{ t('humanAuthnProjects.setup.details.termsLabel') }}</mat-label>\r
                                    <input matInput formControlName="termsAndConditionsUrl" type="url" placeholder="https://" autocomplete="off" />\r
                                </mat-form-field>\r
                                @if (showError('termsAndConditionsUrl')) {\r
                                    <p class="field-error">\r
                                        {{\r
                                            form.get('termsAndConditionsUrl')?.hasError('pattern')\r
                                                ? t('humanAuthnProjects.setup.details.urlInvalid')\r
                                                : t('humanAuthnProjects.setup.details.urlRequired')\r
                                        }}\r
                                    </p>\r
                                }\r
                            </div>\r
                        </div>\r
                    </article>\r
\r
                    <article class="field-card" formGroupName="dataProtection" [class.field-card--ready]="!!officerName">\r
                        <span class="field-card__icon"><mat-icon>gavel</mat-icon></span>\r
                        <div class="field-card__content">\r
                            <span class="field-card__title">\r
                                <strong>{{ t('humanAuthnProjects.setup.details.officerTitle') }}</strong>\r
                                <small>{{ t('humanAuthnProjects.setup.details.required') }}</small>\r
                            </span>\r
                            <span class="field-card__body">{{ t('humanAuthnProjects.setup.details.officerBody') }}</span>\r
                            <div class="input-grid">\r
                                <div>\r
                                    <mat-form-field appearance="outline" subscriptSizing="dynamic">\r
                                        <mat-label>{{ t('humanAuthnProjects.setup.details.officerName') }}</mat-label>\r
                                        <input matInput formControlName="name" autocomplete="name" />\r
                                    </mat-form-field>\r
                                    @if (showError('dataProtection.name')) {\r
                                        <p class="field-error">{{ t('humanAuthnProjects.setup.details.fieldRequired') }}</p>\r
                                    }\r
                                </div>\r
                                <div>\r
                                    <mat-form-field appearance="outline" subscriptSizing="dynamic">\r
                                        <mat-label>{{ t('humanAuthnProjects.setup.details.officerEmail') }}</mat-label>\r
                                        <input matInput formControlName="email" type="email" autocomplete="email" />\r
                                    </mat-form-field>\r
                                    @if (showError('dataProtection.email')) {\r
                                        <p class="field-error">\r
                                            {{\r
                                                form.get('dataProtection.email')?.hasError('email')\r
                                                    ? t('humanAuthnProjects.setup.details.emailInvalid')\r
                                                    : t('humanAuthnProjects.setup.details.fieldRequired')\r
                                            }}\r
                                        </p>\r
                                    }\r
                                </div>\r
                                <div class="span-2">\r
                                    <mat-form-field appearance="outline" subscriptSizing="dynamic">\r
                                        <mat-label>{{ t('humanAuthnProjects.setup.details.officerAddress') }}</mat-label>\r
                                        <input matInput formControlName="address" autocomplete="street-address" />\r
                                    </mat-form-field>\r
                                    @if (showError('dataProtection.address')) {\r
                                        <p class="field-error">{{ t('humanAuthnProjects.setup.details.fieldRequired') }}</p>\r
                                    }\r
                                </div>\r
                                <div class="span-2">\r
                                    <mat-form-field appearance="outline" subscriptSizing="dynamic">\r
                                        <mat-label>{{ t('humanAuthnProjects.setup.details.officerAddress2') }}</mat-label>\r
                                        <input matInput formControlName="address2" autocomplete="address-line2" />\r
                                    </mat-form-field>\r
                                </div>\r
                                <div>\r
                                    <mat-form-field appearance="outline" subscriptSizing="dynamic">\r
                                        <mat-label>{{ t('humanAuthnProjects.setup.details.officerCity') }}</mat-label>\r
                                        <input matInput formControlName="city" autocomplete="address-level2" />\r
                                    </mat-form-field>\r
                                    @if (showError('dataProtection.city')) {\r
                                        <p class="field-error">{{ t('humanAuthnProjects.setup.details.fieldRequired') }}</p>\r
                                    }\r
                                </div>\r
                                <div>\r
                                    <mat-form-field appearance="outline" subscriptSizing="dynamic">\r
                                        <mat-label>{{ t('humanAuthnProjects.setup.details.officerPostal') }}</mat-label>\r
                                        <input matInput formControlName="postalCode" autocomplete="postal-code" />\r
                                    </mat-form-field>\r
                                    @if (showError('dataProtection.postalCode')) {\r
                                        <p class="field-error">{{ t('humanAuthnProjects.setup.details.fieldRequired') }}</p>\r
                                    }\r
                                </div>\r
                                <div class="span-2">\r
                                    <mat-form-field appearance="outline" subscriptSizing="dynamic">\r
                                        <mat-label>{{ t('humanAuthnProjects.setup.details.officerCountry') }}</mat-label>\r
                                        <mat-select formControlName="country">\r
                                            @for (country of officerCountries; track country.country) {\r
                                                <mat-option [value]="country.country">{{ t(country.name) }}</mat-option>\r
                                            }\r
                                        </mat-select>\r
                                    </mat-form-field>\r
                                    @if (showError('dataProtection.country')) {\r
                                        <p class="field-error">{{ t('humanAuthnProjects.setup.details.fieldRequired') }}</p>\r
                                    }\r
                                </div>\r
                            </div>\r
                        </div>\r
                    </article>\r
                </div>\r
            </section>\r
\r
            <aside class="details-explainer" aria-live="polite">\r
                <div class="section-heading section-heading--light">\r
                    <span>02</span>\r
                    <div>\r
                        <h3>{{ t('humanAuthnProjects.setup.details.howTitle') }}</h3>\r
                        <p>{{ t('humanAuthnProjects.setup.details.howHelp') }}</p>\r
                    </div>\r
                </div>\r
                <div class="audience">\r
                    <article>\r
                        <mat-icon>group</mat-icon>\r
                        <div>\r
                            <strong>{{ t('humanAuthnProjects.setup.details.teamTitle') }}</strong>\r
                            <p>{{ t('humanAuthnProjects.setup.details.teamBody', { name: projectName || t('humanAuthnProjects.setup.details.nameRequiredChip') }) }}</p>\r
                        </div>\r
                    </article>\r
                    <article>\r
                        <mat-icon>person</mat-icon>\r
                        <div>\r
                            <strong>{{ t('humanAuthnProjects.setup.details.personTitle') }}</strong>\r
                            <p>{{ t('humanAuthnProjects.setup.details.personLanguage', { language: languageLabel }) }}</p>\r
                            <p>\r
                                {{\r
                                    allowsWorld\r
                                        ? t('humanAuthnProjects.setup.details.personCountriesWorld')\r
                                        : allowedCountries.length\r
                                          ? t('humanAuthnProjects.setup.details.personCountriesCount', { count: allowedCountries.length })\r
                                          : t('humanAuthnProjects.setup.details.personCountriesNone')\r
                                }}\r
                            </p>\r
                            <p class="audience-link">\r
                                <span>{{ t('humanAuthnProjects.setup.details.privacyLabel') }}</span>\r
                                {{ privacyUrl || t('humanAuthnProjects.setup.details.personPrivacyOff') }}\r
                            </p>\r
                            <p class="audience-link">\r
                                <span>{{ t('humanAuthnProjects.setup.details.termsLabel') }}</span>\r
                                {{ termsUrl || t('humanAuthnProjects.setup.details.personTermsOff') }}\r
                            </p>\r
                        </div>\r
                    </article>\r
                    <article>\r
                        <mat-icon>gavel</mat-icon>\r
                        <div>\r
                            <strong>{{ t('humanAuthnProjects.setup.details.officerRowTitle') }}</strong>\r
                            <p>\r
                                {{\r
                                    officerName\r
                                        ? t('humanAuthnProjects.setup.details.officerReady', { name: officerName, email: officerEmail })\r
                                        : t('humanAuthnProjects.setup.details.officerMissing')\r
                                }}\r
                            </p>\r
                        </div>\r
                    </article>\r
                </div>\r
            </aside>\r
        </div>\r
\r
        <section class="details-facts">\r
            <div class="section-heading">\r
                <span>03</span>\r
                <div>\r
                    <h3>{{ t('humanAuthnProjects.setup.details.factsTitle') }}</h3>\r
                    <p>{{ t('humanAuthnProjects.setup.details.factsHelp') }}</p>\r
                </div>\r
            </div>\r
            <div class="fact-items">\r
                <article>\r
                    <span class="fact-items__icon fact-items__icon--name"><mat-icon>label</mat-icon></span>\r
                    <div>\r
                        <strong>{{ t('humanAuthnProjects.setup.details.factNameTitle') }}</strong>\r
                        <p>{{ t('humanAuthnProjects.setup.details.factNameBody') }}</p>\r
                    </div>\r
                </article>\r
                <article>\r
                    <span class="fact-items__icon fact-items__icon--countries"><mat-icon>public</mat-icon></span>\r
                    <div>\r
                        <strong>{{ t('humanAuthnProjects.setup.details.factCountriesTitle') }}</strong>\r
                        <p>{{ t('humanAuthnProjects.setup.details.factCountriesBody') }}</p>\r
                    </div>\r
                </article>\r
                <article>\r
                    <span class="fact-items__icon fact-items__icon--officer"><mat-icon>gavel</mat-icon></span>\r
                    <div>\r
                        <strong>{{ t('humanAuthnProjects.setup.details.factOfficerTitle') }}</strong>\r
                        <p>{{ t('humanAuthnProjects.setup.details.factOfficerBody') }}</p>\r
                    </div>\r
                </article>\r
            </div>\r
        </section>\r
    </div>\r
</ng-container>\r
`, styles: ["/* src/app/modules/human-authn/projects/setup/steps/details-step.component.scss */\n:host {\n  display: block;\n}\n.details-screen {\n  margin-inline: auto;\n  width: min(100%, 76rem);\n}\n.details-hero {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 2rem;\n  margin-bottom: 2rem;\n  padding: 0.5rem 0.25rem;\n}\n.details-hero h2 {\n  max-width: 42rem;\n  margin: 0.35rem 0 0;\n  color: #1c1917;\n  font-size: clamp(1.75rem, 3vw, 2.55rem);\n  font-weight: 680;\n  letter-spacing: -0.045em;\n  line-height: 1.05;\n}\n.details-hero p {\n  max-width: 42rem;\n  margin: 0.75rem 0 0;\n  color: #78716c;\n  font-size: 0.88rem;\n  line-height: 1.6;\n}\n.details-hero__eyebrow {\n  color: #78716c;\n  font-size: 0.65rem;\n  font-weight: 750;\n  letter-spacing: 0.16em;\n  text-transform: uppercase;\n}\n.details-hero__choice {\n  display: flex;\n  flex: 0 0 auto;\n  flex-direction: column;\n  align-items: flex-end;\n  max-width: 18rem;\n  padding: 0.75rem 1rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 0.9rem;\n  background: white;\n}\n.details-hero__choice span {\n  color: #a8a29e;\n  font-size: 0.62rem;\n  font-weight: 650;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n.details-hero__choice strong {\n  margin-top: 0.15rem;\n  color: #292524;\n  font-size: 0.82rem;\n  text-align: right;\n}\n.details-decision {\n  display: grid;\n  grid-template-columns: minmax(0, 1.15fr) minmax(20rem, 0.85fr);\n  overflow: hidden;\n  border: 1px solid #d6d3d1;\n  border-radius: 1.5rem;\n  background: white;\n  box-shadow: 0 1px 2px rgba(28, 25, 23, 0.03), 0 18px 45px rgba(28, 25, 23, 0.05);\n}\n.fields,\n.details-explainer,\n.details-facts {\n  padding: 1.75rem;\n}\n.details-explainer {\n  background: #1c1917;\n  color: white;\n}\n.section-heading {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.8rem;\n  margin-bottom: 1.25rem;\n}\n.section-heading > span {\n  display: grid;\n  flex: 0 0 1.8rem;\n  width: 1.8rem;\n  height: 1.8rem;\n  place-items: center;\n  border-radius: 999px;\n  background: #292524;\n  color: white;\n  font-size: 0.62rem;\n  font-weight: 750;\n}\n.section-heading h3 {\n  margin: 0;\n  color: #292524;\n  font-size: 0.95rem;\n  font-weight: 680;\n}\n.section-heading p {\n  margin: 0.25rem 0 0;\n  color: #78716c;\n  font-size: 0.72rem;\n  line-height: 1.45;\n}\n.section-heading--light > span {\n  background: white;\n  color: #1c1917;\n}\n.section-heading--light h3 {\n  color: white;\n}\n.section-heading--light p {\n  color: #a8a29e;\n}\n.field-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0.8rem;\n}\n.field-card {\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr);\n  gap: 1rem;\n  padding: 1.15rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 1rem;\n  background: #fafaf9;\n}\n.field-card--ready {\n  border-color: #292524;\n  background: white;\n  box-shadow: inset 0 0 0 1px #292524;\n}\n.field-card__icon {\n  display: grid;\n  width: 2.6rem;\n  height: 2.6rem;\n  place-items: center;\n  border-radius: 0.8rem;\n  background: #e7e5e4;\n  color: #44403c;\n}\n.field-card__icon mat-icon {\n  width: 1.25rem;\n  height: 1.25rem;\n  font-size: 1.25rem;\n}\n.field-card--ready .field-card__icon {\n  background: #292524;\n  color: white;\n}\n.field-card__title {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 0.45rem;\n}\n.field-card__title strong {\n  color: #292524;\n  font-size: 0.92rem;\n}\n.field-card__title small {\n  padding: 0.12rem 0.4rem;\n  border-radius: 999px;\n  background: #e7e5e4;\n  color: #57534e;\n  font-size: 0.62rem;\n  font-weight: 700;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n}\n.field-card__body,\n.field-note {\n  display: block;\n  margin: 0.4rem 0 0;\n  color: #78716c;\n  font-size: 0.75rem;\n  line-height: 1.45;\n}\n.input-stack,\n.input-grid {\n  margin-top: 0.85rem;\n}\n.input-stack {\n  display: flex;\n  flex-direction: column;\n  gap: 0.65rem;\n}\n.input-stack mat-form-field {\n  width: 100%;\n}\n.input-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.65rem 0.8rem;\n}\n.input-grid mat-form-field {\n  width: 100%;\n}\n.span-2 {\n  grid-column: span 2;\n  min-width: 0;\n}\n.chips {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.4rem;\n  margin-top: 0.75rem;\n}\n.chip {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.2rem;\n  padding: 0.2rem 0.35rem 0.2rem 0.65rem;\n  border-radius: 999px;\n  background: #e7e5e4;\n  color: #292524;\n  font-size: 0.72rem;\n  font-weight: 650;\n}\n.chip button {\n  display: grid;\n  width: 1.2rem;\n  height: 1.2rem;\n  place-items: center;\n  border: 0;\n  border-radius: 999px;\n  background: transparent;\n  color: #57534e;\n}\n.chip mat-icon {\n  width: 0.85rem;\n  height: 0.85rem;\n  font-size: 0.85rem;\n}\n.field-error {\n  margin: 0.15rem 0 0;\n  color: #b91c1c;\n  font-size: 0.72rem;\n}\n.counter--warning {\n  color: #b45309;\n}\n.counter--danger {\n  color: #b91c1c;\n}\n.audience {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.audience article {\n  display: flex;\n  gap: 0.75rem;\n  padding: 0.9rem;\n  border: 1px solid #44403c;\n  border-radius: 0.9rem;\n  background: #292524;\n}\n.audience article > mat-icon {\n  width: 1.2rem;\n  height: 1.2rem;\n  color: #e7e5e4;\n  font-size: 1.2rem;\n}\n.audience article strong {\n  display: block;\n  font-size: 0.82rem;\n}\n.audience article p {\n  margin: 0.3rem 0 0;\n  color: #d6d3d1;\n  font-size: 0.72rem;\n  line-height: 1.45;\n}\n.audience-link {\n  display: block;\n  overflow-wrap: anywhere;\n}\n.audience-link span {\n  display: block;\n  margin-bottom: 0.15rem;\n  color: #a8a29e;\n  font-size: 0.62rem;\n  font-weight: 650;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n}\n.details-facts {\n  margin-top: 1.25rem;\n  border: 1px solid #d6d3d1;\n  border-radius: 1.5rem;\n  background: white;\n}\n.fact-items {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 0.8rem;\n}\n.fact-items article {\n  display: flex;\n  gap: 0.75rem;\n  padding: 0.9rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 0.9rem;\n  background: #fafaf9;\n}\n.fact-items article strong {\n  color: #292524;\n  font-size: 0.78rem;\n}\n.fact-items article p {\n  margin: 0.25rem 0 0;\n  color: #78716c;\n  font-size: 0.68rem;\n  line-height: 1.45;\n}\n.fact-items__icon {\n  display: grid;\n  flex: 0 0 2rem;\n  width: 2rem;\n  height: 2rem;\n  place-items: center;\n  border-radius: 0.6rem;\n}\n.fact-items__icon mat-icon {\n  width: 1rem;\n  height: 1rem;\n  font-size: 1rem;\n}\n.fact-items__icon--name {\n  background: #eff6ff;\n  color: #1d4ed8;\n}\n.fact-items__icon--countries {\n  background: #ecfdf5;\n  color: #047857;\n}\n.fact-items__icon--officer {\n  background: #fef3c7;\n  color: #b45309;\n}\n:host-context(.dark) .details-hero h2,\n:host-context(.dark) .section-heading h3,\n:host-context(.dark) .field-card__title strong,\n:host-context(.dark) .chip,\n:host-context(.dark) .fact-items strong,\n:host-context(.dark) .details-hero__choice strong {\n  color: #f8fafc;\n}\n:host-context(.dark) .details-hero p,\n:host-context(.dark) .details-hero__eyebrow,\n:host-context(.dark) .section-heading p,\n:host-context(.dark) .field-card__body,\n:host-context(.dark) .field-note,\n:host-context(.dark) .fact-items p,\n:host-context(.dark) .details-hero__choice span {\n  color: #94a3b8;\n}\n:host-context(.dark) .details-hero__choice,\n:host-context(.dark) .details-decision,\n:host-context(.dark) .details-facts,\n:host-context(.dark) .field-card,\n:host-context(.dark) .fact-items article {\n  border-color: #334155;\n  background: #0f172a;\n}\n:host-context(.dark) .details-decision,\n:host-context(.dark) .details-facts,\n:host-context(.dark) .details-hero__choice {\n  background: #1e293b;\n}\n:host-context(.dark) .fields {\n  background: #1e293b;\n}\n:host-context(.dark) .field-card--ready {\n  border-color: #e2e8f0;\n  box-shadow: inset 0 0 0 1px #e2e8f0;\n}\n:host-context(.dark) .field-card__icon,\n:host-context(.dark) .field-card__title small,\n:host-context(.dark) .chip {\n  background: #334155;\n  color: #e2e8f0;\n}\n:host-context(.dark) .chip button {\n  color: #e2e8f0;\n}\n:host-context(.dark) .field-card--ready .field-card__icon {\n  background: #e2e8f0;\n  color: #0f172a;\n}\n:host-context(.dark) .section-heading > span {\n  background: #cbd5e1;\n  color: #0f172a;\n}\n:host-context(.dark) .details-explainer {\n  background: #0f172a;\n}\n:host-context(.dark) .section-heading--light > span {\n  background: #e2e8f0;\n  color: #0f172a;\n}\n:host-context(.dark) .section-heading--light h3,\n:host-context(.dark) .audience strong {\n  color: #f8fafc;\n}\n:host-context(.dark) .audience article {\n  border-color: #475569;\n  background: #1e293b;\n}\n:host-context(.dark) .fact-items__icon--name {\n  background: rgba(59, 130, 246, 0.16);\n  color: #93c5fd;\n}\n:host-context(.dark) .fact-items__icon--countries {\n  background: rgba(16, 185, 129, 0.14);\n  color: #6ee7b7;\n}\n:host-context(.dark) .fact-items__icon--officer {\n  background: rgba(245, 158, 11, 0.16);\n  color: #fcd34d;\n}\n@media (max-width: 980px) {\n  .details-decision,\n  .fact-items,\n  .input-grid {\n    grid-template-columns: 1fr;\n  }\n  .span-2 {\n    grid-column: auto;\n  }\n}\n@media (max-width: 680px) {\n  .details-hero {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n  .details-hero__choice {\n    align-items: flex-start;\n    max-width: none;\n  }\n  .details-hero__choice strong {\n    text-align: left;\n  }\n  .fields,\n  .details-explainer,\n  .details-facts {\n    padding: 1.25rem;\n  }\n}\n/*# sourceMappingURL=details-step.component.css.map */\n"] }]
  }], null, { form: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HumanAuthnDetailsStepComponent, { className: "HumanAuthnDetailsStepComponent", filePath: "src/app/modules/human-authn/projects/setup/steps/details-step.component.ts", lineNumber: 33 });
})();

// src/app/modules/human-authn/projects/setup/steps/documents-step.component.ts
var _c02 = ["checkDetailsDialog"];
var _c12 = () => ({ number: 1 });
var _c22 = () => ["skip", "optional", "mandatory"];
var _c32 = () => ({ number: 2 });
var _c4 = (a0, a1) => ({ countries: a0, documents: a1 });
var _c5 = () => ({ number: 3 });
var _c6 = (a0, a1) => ({ methods: a0, attempts: a1 });
var _c7 = () => ({ number: 4 });
var _c8 = (a0) => ({ count: a0 });
var _c9 = (a0) => ({ country: a0 });
var _forTrack02 = ($index, $item) => $item.value;
var _forTrack12 = ($index, $item) => $item.country;
function HumanAuthnDocumentsStepComponent_ng_container_0_Conditional_1_For_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-button-toggle", 18)(1, "span", 36)(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "small");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const value_r1 = ctx.$implicit;
    const t_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("value", value_r1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r2("humanAuthnProjects.setup.documents.requirement." + value_r1));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2("humanAuthnProjects.setup.documents.requirementDetail." + value_r1));
  }
}
function HumanAuthnDocumentsStepComponent_ng_container_0_Conditional_1_Conditional_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "mat-icon");
    \u0275\u0275text(2, "lock_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r2("humanAuthnProjects.setup.documents.enableToConfigure"));
  }
}
function HumanAuthnDocumentsStepComponent_ng_container_0_Conditional_1_Conditional_59_Conditional_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2("smartEnrollProjects.setup.documents.types.errors.atLeastOne"));
  }
}
function HumanAuthnDocumentsStepComponent_ng_container_0_Conditional_1_Conditional_59_Conditional_1_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2("smartEnrollProjects.setup.documents.types.errors.duplicateCountries"));
  }
}
function HumanAuthnDocumentsStepComponent_ng_container_0_Conditional_1_Conditional_59_Conditional_1_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2("smartEnrollProjects.setup.documents.types.errors.allMustBeValid"));
  }
}
function HumanAuthnDocumentsStepComponent_ng_container_0_Conditional_1_Conditional_59_Conditional_1_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2("smartEnrollProjects.setup.documents.types.errors.emptyCountry"));
  }
}
function HumanAuthnDocumentsStepComponent_ng_container_0_Conditional_1_Conditional_59_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "mat-icon");
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275template(4, HumanAuthnDocumentsStepComponent_ng_container_0_Conditional_1_Conditional_59_Conditional_1_Conditional_4_Template, 2, 1, "span")(5, HumanAuthnDocumentsStepComponent_ng_container_0_Conditional_1_Conditional_59_Conditional_1_Conditional_5_Template, 2, 1, "span")(6, HumanAuthnDocumentsStepComponent_ng_container_0_Conditional_1_Conditional_59_Conditional_1_Conditional_6_Template, 2, 1, "span")(7, HumanAuthnDocumentsStepComponent_ng_container_0_Conditional_1_Conditional_59_Conditional_1_Conditional_7_Template, 2, 1, "span");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r2.documentTypesErrorKeys.includes("atLeastOneDocumentVerificationTypeRequired") ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.documentTypesErrorKeys.includes("duplicateCountriesNotAllowed") ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.documentTypesErrorKeys.includes("allDocumentVerificationTypesMustBeValid") ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.documentTypesErrorKeys.includes("emptyCountryValuesNotAllowed") ? 7 : -1);
  }
}
function HumanAuthnDocumentsStepComponent_ng_container_0_Conditional_1_Conditional_59_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "document-verification-type-list", 38);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275property("form", ctx_r2.form)("documentTypes", ctx_r2.documentTypesFormArray);
  }
}
function HumanAuthnDocumentsStepComponent_ng_container_0_Conditional_1_Conditional_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275template(1, HumanAuthnDocumentsStepComponent_ng_container_0_Conditional_1_Conditional_59_Conditional_1_Template, 8, 4, "div", 37)(2, HumanAuthnDocumentsStepComponent_ng_container_0_Conditional_1_Conditional_59_Conditional_2_Template, 1, 2, "document-verification-type-list", 38);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.documentTypesErrorKeys.length ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.documentTypesFormArray ? 2 : -1);
  }
}
function HumanAuthnDocumentsStepComponent_ng_container_0_Conditional_1_Conditional_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "mat-icon");
    \u0275\u0275text(2, "lock_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r2("humanAuthnProjects.setup.documents.enableToConfigure"));
  }
}
function HumanAuthnDocumentsStepComponent_ng_container_0_Conditional_1_Conditional_76_For_9_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 48);
    \u0275\u0275text(1, "check_circle");
    \u0275\u0275elementEnd();
  }
}
function HumanAuthnDocumentsStepComponent_ng_container_0_Conditional_1_Conditional_76_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 47);
    \u0275\u0275listener("click", function HumanAuthnDocumentsStepComponent_ng_container_0_Conditional_1_Conditional_76_For_9_Template_button_click_0_listener() {
      const method_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.toggleVerificationMethod(method_r5.value));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, HumanAuthnDocumentsStepComponent_ng_container_0_Conditional_1_Conditional_76_For_9_Conditional_5_Template, 2, 0, "mat-icon", 48);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const method_r5 = ctx.$implicit;
    const t_r2 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("method-option--selected", ctx_r2.isVerificationMethodSelected(method_r5.value));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(method_r5.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2(method_r5.labelKey));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isVerificationMethodSelected(method_r5.value) ? 5 : -1);
  }
}
function HumanAuthnDocumentsStepComponent_ng_container_0_Conditional_1_Conditional_76_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 43);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2("smartEnrollProjects.setup.documents.method.required"));
  }
}
function HumanAuthnDocumentsStepComponent_ng_container_0_Conditional_1_Conditional_76_For_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const n_r6 = ctx.$implicit;
    const t_r2 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275property("value", n_r6);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", n_r6 === 1 ? t_r2("smartEnrollProjects.setup.documents.attempts.one") : t_r2("smartEnrollProjects.setup.documents.attempts.many", \u0275\u0275pureFunction1(2, _c8, n_r6)), " ");
  }
}
function HumanAuthnDocumentsStepComponent_ng_container_0_Conditional_1_Conditional_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 39)(2, "div", 40)(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 41);
    \u0275\u0275repeaterCreate(8, HumanAuthnDocumentsStepComponent_ng_container_0_Conditional_1_Conditional_76_For_9_Template, 6, 5, "button", 42, _forTrack02);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, HumanAuthnDocumentsStepComponent_ng_container_0_Conditional_1_Conditional_76_Conditional_10_Template, 2, 1, "p", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 44)(12, "div", 40)(13, "strong");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "mat-form-field", 45)(18, "mat-label");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "mat-select", 46);
    \u0275\u0275repeaterCreate(21, HumanAuthnDocumentsStepComponent_ng_container_0_Conditional_1_Conditional_76_For_22_Template, 2, 4, "mat-option", 18, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const methodsCtrl_r7 = \u0275\u0275readContextLet(60);
    const t_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r2("smartEnrollProjects.setup.documents.method.title"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2("smartEnrollProjects.setup.documents.method.help"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.verificationMethods);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((methodsCtrl_r7 == null ? null : methodsCtrl_r7.dirty) && (methodsCtrl_r7 == null ? null : methodsCtrl_r7.errors == null ? null : methodsCtrl_r7.errors["required"]) ? 10 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r2("smartEnrollProjects.setup.documents.attempts.title"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2("smartEnrollProjects.setup.documents.attempts.subtitle"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r2("smartEnrollProjects.setup.documents.attempts.limit"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.attemptOptions);
  }
}
function HumanAuthnDocumentsStepComponent_ng_container_0_Conditional_1_Conditional_91_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "mat-icon");
    \u0275\u0275text(2, "lock_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r2("humanAuthnProjects.setup.documents.enableToConfigure"));
  }
}
function HumanAuthnDocumentsStepComponent_ng_container_0_Conditional_1_Conditional_92_Conditional_11_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 43);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2("smartEnrollProjects.setup.documents.screening.requiresVerification"));
  }
}
function HumanAuthnDocumentsStepComponent_ng_container_0_Conditional_1_Conditional_92_Conditional_11_Conditional_20_For_10_Conditional_9_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 66)(1, "mat-checkbox", 67);
    \u0275\u0275listener("change", function HumanAuthnDocumentsStepComponent_ng_container_0_Conditional_1_Conditional_92_Conditional_11_Conditional_20_For_10_Conditional_9_For_2_Template_mat_checkbox_change_1_listener() {
      const check_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(8);
      return \u0275\u0275resetView(ctx_r2.toggleCriminalEndpoint(check_r9.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 68)(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "small");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 69);
    \u0275\u0275listener("click", function HumanAuthnDocumentsStepComponent_ng_container_0_Conditional_1_Conditional_92_Conditional_11_Conditional_20_For_10_Conditional_9_For_2_Template_button_click_7_listener($event) {
      const check_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(8);
      return \u0275\u0275resetView(ctx_r2.openCheckDetails($event, check_r9));
    });
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const check_r9 = ctx.$implicit;
    const t_r2 = \u0275\u0275nextContext(7).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("check-card--selected", ctx_r2.isEndpointSelected(check_r9.value));
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r2.isEndpointSelected(check_r9.value));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r2(check_r9.titleKey));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2(check_r9.descriptionKey));
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", t_r2("smartEnrollProjects.setup.documents.screening.aboutTooltip"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r2(check_r9.sourceKey), " ");
  }
}
function HumanAuthnDocumentsStepComponent_ng_container_0_Conditional_1_Conditional_92_Conditional_11_Conditional_20_For_10_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62);
    \u0275\u0275repeaterCreate(1, HumanAuthnDocumentsStepComponent_ng_container_0_Conditional_1_Conditional_92_Conditional_11_Conditional_20_For_10_Conditional_9_For_2_Template, 9, 7, "label", 63, _forTrack02);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const section_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(section_r10.checks);
  }
}
function HumanAuthnDocumentsStepComponent_ng_container_0_Conditional_1_Conditional_92_Conditional_11_Conditional_20_For_10_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 65)(1, "mat-icon");
    \u0275\u0275text(2, "info_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(6).$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r2("smartEnrollProjects.setup.documents.screening.noCountryChecks"));
  }
}
function HumanAuthnDocumentsStepComponent_ng_container_0_Conditional_1_Conditional_92_Conditional_11_Conditional_20_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 58)(1, "header", 61)(2, "div")(3, "span", 64);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h5");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, HumanAuthnDocumentsStepComponent_ng_container_0_Conditional_1_Conditional_92_Conditional_11_Conditional_20_For_10_Conditional_9_Template, 3, 0, "div", 62)(10, HumanAuthnDocumentsStepComponent_ng_container_0_Conditional_1_Conditional_92_Conditional_11_Conditional_20_For_10_Conditional_10_Template, 5, 1, "div", 65);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const section_r10 = ctx.$implicit;
    const t_r2 = \u0275\u0275nextContext(5).$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.setup.documents.screening.countryChecks"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(section_r10.country);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2("smartEnrollProjects.setup.documents.screening.countryDescription", \u0275\u0275pureFunction1(4, _c9, section_r10.country)));
    \u0275\u0275advance();
    \u0275\u0275conditional(section_r10.checks.length ? 9 : 10);
  }
}
function HumanAuthnDocumentsStepComponent_ng_container_0_Conditional_1_Conditional_92_Conditional_11_Conditional_20_For_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 66)(1, "mat-checkbox", 67);
    \u0275\u0275listener("change", function HumanAuthnDocumentsStepComponent_ng_container_0_Conditional_1_Conditional_92_Conditional_11_Conditional_20_For_22_Template_mat_checkbox_change_1_listener() {
      const check_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r2.toggleCriminalEndpoint(check_r12.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 68)(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "small");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 69);
    \u0275\u0275listener("click", function HumanAuthnDocumentsStepComponent_ng_container_0_Conditional_1_Conditional_92_Conditional_11_Conditional_20_For_22_Template_button_click_7_listener($event) {
      const check_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r2.openCheckDetails($event, check_r12));
    });
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const check_r12 = ctx.$implicit;
    const t_r2 = \u0275\u0275nextContext(5).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("check-card--selected", ctx_r2.isEndpointSelected(check_r12.value));
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r2.isEndpointSelected(check_r12.value));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r2(check_r12.titleKey));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2(check_r12.descriptionKey));
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", t_r2("smartEnrollProjects.setup.documents.screening.aboutTooltip"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r2(check_r12.sourceKey), " ");
  }
}
function HumanAuthnDocumentsStepComponent_ng_container_0_Conditional_1_Conditional_92_Conditional_11_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56)(1, "div", 57)(2, "div")(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h4");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(9, HumanAuthnDocumentsStepComponent_ng_container_0_Conditional_1_Conditional_92_Conditional_11_Conditional_20_For_10_Template, 11, 6, "section", 58, _forTrack12);
    \u0275\u0275elementStart(11, "section", 59)(12, "span", 60);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "header", 61)(15, "div")(16, "h5");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "p");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 62);
    \u0275\u0275repeaterCreate(21, HumanAuthnDocumentsStepComponent_ng_container_0_Conditional_1_Conditional_92_Conditional_11_Conditional_20_For_22_Template, 9, 7, "label", 63, _forTrack02);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(4).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r2("smartEnrollProjects.setup.documents.screening.catalogEyebrow"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2("smartEnrollProjects.setup.documents.screening.catalogTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2("smartEnrollProjects.setup.documents.screening.catalogDescription"));
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.countryCheckSections);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.setup.documents.screening.globalChecks"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r2("smartEnrollProjects.setup.documents.screening.internationalTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2("smartEnrollProjects.setup.documents.screening.internationalDescription"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.internationalChecks);
  }
}
function HumanAuthnDocumentsStepComponent_ng_container_0_Conditional_1_Conditional_92_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, HumanAuthnDocumentsStepComponent_ng_container_0_Conditional_1_Conditional_92_Conditional_11_Conditional_0_Template, 2, 1, "p", 43);
    \u0275\u0275elementStart(1, "div", 52)(2, "label", 53);
    \u0275\u0275element(3, "mat-checkbox", 54);
    \u0275\u0275elementStart(4, "mat-icon");
    \u0275\u0275text(5, "account_balance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span")(7, "strong");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "small");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "label", 53);
    \u0275\u0275element(12, "mat-checkbox", 55);
    \u0275\u0275elementStart(13, "mat-icon");
    \u0275\u0275text(14, "security");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span")(16, "strong");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "small");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(20, HumanAuthnDocumentsStepComponent_ng_container_0_Conditional_1_Conditional_92_Conditional_11_Conditional_20_Template, 23, 6, "div", 56);
  }
  if (rf & 2) {
    let tmp_12_0;
    const t_r2 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional((ctx_r2.formGroup == null ? null : ctx_r2.formGroup.errors == null ? null : ctx_r2.formGroup.errors["screeningRequiresVerification"]) ? 0 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(t_r2("smartEnrollProjects.setup.documents.screening.informationVerification"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2("smartEnrollProjects.setup.documents.screening.informationVerificationDescription"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(t_r2("smartEnrollProjects.setup.documents.screening.criminalHistory"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2("smartEnrollProjects.setup.documents.screening.criminalHistoryDescription"));
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r2.formGroup == null ? null : (tmp_12_0 = ctx_r2.formGroup.get("criminalHistoryVerification")) == null ? null : tmp_12_0.value) ? 20 : -1);
  }
}
function HumanAuthnDocumentsStepComponent_ng_container_0_Conditional_1_Conditional_92_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 49)(2, "div", 50)(3, "mat-icon");
    \u0275\u0275text(4, "manage_search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(10, "mat-slide-toggle", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, HumanAuthnDocumentsStepComponent_ng_container_0_Conditional_1_Conditional_92_Conditional_11_Template, 21, 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(t_r2("smartEnrollProjects.setup.documents.screening.title"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2("humanAuthnProjects.setup.documents.screeningToggleHelp"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.screeningOn ? 11 : -1);
  }
}
function HumanAuthnDocumentsStepComponent_ng_container_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "header", 3)(2, "div")(3, "span", 4);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 5)(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "strong");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 6)(15, "section", 7)(16, "div", 8)(17, "span");
    \u0275\u0275text(18, "01");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div")(20, "h3");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "p");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 9)(25, "ol", 10)(26, "li", 11)(27, "span", 12);
    \u0275\u0275text(28, "1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "section", 13)(30, "header", 14)(31, "div")(32, "span", 15);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "h3");
    \u0275\u0275text(35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "p");
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "span", 16);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "mat-button-toggle-group", 17);
    \u0275\u0275repeaterCreate(41, HumanAuthnDocumentsStepComponent_ng_container_0_Conditional_1_For_42_Template, 6, 3, "mat-button-toggle", 18, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerStart(43, 19);
    \u0275\u0275elementStart(44, "li", 11)(45, "span", 12);
    \u0275\u0275text(46, "2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "section", 20)(48, "header", 14)(49, "div")(50, "span", 15);
    \u0275\u0275text(51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "h3");
    \u0275\u0275text(53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "p");
    \u0275\u0275text(55);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "span", 16);
    \u0275\u0275text(57);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(58, HumanAuthnDocumentsStepComponent_ng_container_0_Conditional_1_Conditional_58_Template, 5, 1, "div", 21)(59, HumanAuthnDocumentsStepComponent_ng_container_0_Conditional_1_Conditional_59_Template, 3, 2, "div", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275declareLet(60);
    \u0275\u0275elementStart(61, "li", 11)(62, "span", 12);
    \u0275\u0275text(63, "3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "section", 20)(65, "header", 14)(66, "div")(67, "span", 15);
    \u0275\u0275text(68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "h3");
    \u0275\u0275text(70);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "p");
    \u0275\u0275text(72);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(73, "span", 16);
    \u0275\u0275text(74);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(75, HumanAuthnDocumentsStepComponent_ng_container_0_Conditional_1_Conditional_75_Template, 5, 1, "div", 21)(76, HumanAuthnDocumentsStepComponent_ng_container_0_Conditional_1_Conditional_76_Template, 23, 6, "div", 23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(77, "li", 11)(78, "span", 12);
    \u0275\u0275text(79, "4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "section", 20)(81, "header", 14)(82, "div")(83, "span", 15);
    \u0275\u0275text(84);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "h3");
    \u0275\u0275text(86);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "p");
    \u0275\u0275text(88);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(89, "span", 16);
    \u0275\u0275text(90);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(91, HumanAuthnDocumentsStepComponent_ng_container_0_Conditional_1_Conditional_91_Template, 5, 1, "div", 21)(92, HumanAuthnDocumentsStepComponent_ng_container_0_Conditional_1_Conditional_92_Template, 12, 3, "div", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(93, "aside", 24)(94, "div", 25)(95, "span");
    \u0275\u0275text(96, "02");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(97, "div")(98, "h3");
    \u0275\u0275text(99);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(100, "p");
    \u0275\u0275text(101);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(102, "ol", 26)(103, "li")(104, "mat-icon");
    \u0275\u0275text(105, "assignment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(106, "span");
    \u0275\u0275text(107);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(108, "li")(109, "mat-icon");
    \u0275\u0275text(110, "public");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(111, "span");
    \u0275\u0275text(112);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(113, "li")(114, "mat-icon");
    \u0275\u0275text(115, "photo_camera");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(116, "span");
    \u0275\u0275text(117);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(118, "li", 27)(119, "mat-icon");
    \u0275\u0275text(120);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(121, "span");
    \u0275\u0275text(122);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(123, "div", 28)(124, "span", 29);
    \u0275\u0275text(125);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(126, "h4");
    \u0275\u0275text(127);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(128, "p");
    \u0275\u0275text(129);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(130, "div", 30)(131, "mat-icon");
    \u0275\u0275text(132);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(133, "span");
    \u0275\u0275text(134);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(135, "section", 31)(136, "div", 8)(137, "span");
    \u0275\u0275text(138, "03");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(139, "div")(140, "h3");
    \u0275\u0275text(141);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(142, "p");
    \u0275\u0275text(143);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(144, "div", 32)(145, "article")(146, "span", 33)(147, "mat-icon");
    \u0275\u0275text(148, "face");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(149, "div")(150, "strong");
    \u0275\u0275text(151);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(152, "p");
    \u0275\u0275text(153);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(154, "article")(155, "span", 34)(156, "mat-icon");
    \u0275\u0275text(157, "public");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(158, "div")(159, "strong");
    \u0275\u0275text(160);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(161, "p");
    \u0275\u0275text(162);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(163, "article")(164, "span", 35)(165, "mat-icon");
    \u0275\u0275text(166, "manage_search");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(167, "div")(168, "strong");
    \u0275\u0275text(169);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(170, "p");
    \u0275\u0275text(171);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r2("humanAuthnProjects.setup.documents.eyebrow"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2("humanAuthnProjects.setup.documents.title"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2("humanAuthnProjects.setup.documents.subtitle"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r2("humanAuthnProjects.setup.documents.currentChoice"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2("humanAuthnProjects.setup.documents.requirement." + ctx_r2.requirementValue));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(t_r2("humanAuthnProjects.setup.documents.recordTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2("humanAuthnProjects.setup.documents.recordHelp"));
    \u0275\u0275advance(6);
    \u0275\u0275property("formGroup", ctx_r2.stepFormGroup);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.setup.documents.journey.stage", \u0275\u0275pureFunction0(56, _c12)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2("smartEnrollProjects.setup.documents.journey.requirementTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2("humanAuthnProjects.setup.documents.requirementHelp"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r2("humanAuthnProjects.setup.documents.requirement." + ctx_r2.requirementValue), " ");
    \u0275\u0275advance();
    \u0275\u0275property("hideSingleSelectionIndicator", true);
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(57, _c22));
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx_r2.formGroup);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("documents-panel--error", !ctx_r2.isNotRequired && ctx_r2.documentTypesErrorKeys.length);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.setup.documents.journey.stage", \u0275\u0275pureFunction0(58, _c32)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2("smartEnrollProjects.setup.documents.types.title"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2("humanAuthnProjects.setup.documents.typesHelp"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.setup.documents.journey.documentSummary", \u0275\u0275pureFunction2(59, _c4, ctx_r2.configuredCountriesCount, ctx_r2.selectedDocumentsCount)), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isNotRequired ? 58 : 59);
    \u0275\u0275advance(2);
    const methodsCtrl_r13 = \u0275\u0275storeLet(ctx_r2.formGroup == null ? null : ctx_r2.formGroup.get("verificationMethods"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("documents-panel--error", !ctx_r2.isNotRequired && (methodsCtrl_r13 == null ? null : methodsCtrl_r13.dirty) && (methodsCtrl_r13 == null ? null : methodsCtrl_r13.errors == null ? null : methodsCtrl_r13.errors["required"]));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.setup.documents.journey.stage", \u0275\u0275pureFunction0(62, _c5)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2("smartEnrollProjects.setup.documents.journey.collectionTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2("humanAuthnProjects.setup.documents.collectionHelp"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r2("humanAuthnProjects.setup.documents.collectionSummary", \u0275\u0275pureFunction2(63, _c6, ctx_r2.verificationMethodsValue.length, ctx_r2.attemptLimit)), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isNotRequired ? 75 : 76);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("documents-panel--error", !ctx_r2.isNotRequired && (ctx_r2.formGroup == null ? null : ctx_r2.formGroup.errors == null ? null : ctx_r2.formGroup.errors["screeningRequiresVerification"]));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.setup.documents.journey.stage", \u0275\u0275pureFunction0(66, _c7)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2("smartEnrollProjects.setup.documents.journey.screeningTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2("humanAuthnProjects.setup.documents.screeningHelp"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.screeningOn ? t_r2("smartEnrollProjects.setup.documents.journey.screeningSummary", \u0275\u0275pureFunction1(67, _c8, ctx_r2.screeningChecksCount)) : t_r2("humanAuthnProjects.setup.documents.screeningOffLabel"), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isNotRequired ? 91 : 92);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(t_r2("humanAuthnProjects.setup.documents.howTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2("humanAuthnProjects.setup.documents.howHelp"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(t_r2("humanAuthnProjects.setup.documents.requirement." + ctx_r2.requirementValue));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r2.isNotRequired ? t_r2("humanAuthnProjects.setup.documents.notCollected") : t_r2("humanAuthnProjects.setup.documents.typesSummary", \u0275\u0275pureFunction2(69, _c4, ctx_r2.configuredCountriesCount, ctx_r2.selectedDocumentsCount)), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r2.isNotRequired ? t_r2("humanAuthnProjects.setup.documents.notCollected") : t_r2("humanAuthnProjects.setup.documents.collectionSummary", \u0275\u0275pureFunction2(72, _c6, ctx_r2.verificationMethodsValue.length, ctx_r2.attemptLimit)), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.screeningOn && !ctx_r2.isNotRequired ? "manage_search" : "lock");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r2(ctx_r2.screeningOn && !ctx_r2.isNotRequired ? "humanAuthnProjects.setup.documents.screeningOnLabel" : "humanAuthnProjects.setup.documents.screeningOffLabel"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r2("humanAuthnProjects.setup.documents.selectedPath"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2("humanAuthnProjects.setup.documents.path." + ctx_r2.requirementValue + "Title"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2("humanAuthnProjects.setup.documents.path." + ctx_r2.requirementValue + "Body"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.screeningOn && !ctx_r2.isNotRequired ? "manage_search" : "description");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r2(ctx_r2.screeningOn && !ctx_r2.isNotRequired ? "humanAuthnProjects.setup.documents.screeningOn" : "humanAuthnProjects.setup.documents.screeningOff"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(t_r2("humanAuthnProjects.setup.documents.factsTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2("humanAuthnProjects.setup.documents.factsHelp"));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(t_r2("humanAuthnProjects.setup.documents.factCompareTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2("humanAuthnProjects.setup.documents.factCompareBody"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(t_r2("humanAuthnProjects.setup.documents.factTypesTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2("humanAuthnProjects.setup.documents.factTypesBody"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(t_r2("humanAuthnProjects.setup.documents.factScreeningTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2("humanAuthnProjects.setup.documents.factScreeningBody"));
  }
}
function HumanAuthnDocumentsStepComponent_ng_container_0_ng_template_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70)(1, "div", 71)(2, "div", 72)(3, "span", 73);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2", 74);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 75)(8, "mat-icon");
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 76)(11, "p", 77);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 78)(14, "a", 79);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "a", 80);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r2(ctx_r2.selectedCheck.sourceKey));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2(ctx_r2.selectedCheck.titleKey));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(t_r2(ctx_r2.selectedCheck.aboutKey));
    \u0275\u0275advance(2);
    \u0275\u0275property("href", ctx_r2.docsUrl(ctx_r2.selectedCheck), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.setup.documents.screening.readDocs"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("href", ctx_r2.postmanUrl(ctx_r2.selectedCheck), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.setup.documents.screening.tryInPostman"), " ");
  }
}
function HumanAuthnDocumentsStepComponent_ng_container_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, HumanAuthnDocumentsStepComponent_ng_container_0_ng_template_2_Conditional_0_Template, 18, 7, "div", 70);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r2.selectedCheck ? 0 : -1);
  }
}
function HumanAuthnDocumentsStepComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, HumanAuthnDocumentsStepComponent_ng_container_0_Conditional_1_Template, 172, 75, "div", 2)(2, HumanAuthnDocumentsStepComponent_ng_container_0_ng_template_2_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isFormReady ? 1 : -1);
  }
}
var HumanAuthnDocumentsStepComponent = class _HumanAuthnDocumentsStepComponent {
  constructor() {
    this.loading = false;
    this.saving = false;
    this._cdr = inject(ChangeDetectorRef);
    this._destroyRef = inject(DestroyRef);
    this._dialog = inject(MatDialog);
    this._confirm = inject(FuseConfirmationService);
    this._transloco = inject(TranslocoService);
    this._previousDocumentStepValue = null;
    this._legacyColombiaSources = ["colombia_api_inpec", "colombia_api_identity_lookup_procuraduria"];
    this.attemptOptions = [1, 2, 3, 4, 5];
    this.verificationMethods = [
      { value: "upload", labelKey: "smartEnrollProjects.setup.documents.method.upload", icon: "file_upload" },
      { value: "scan", labelKey: "smartEnrollProjects.setup.documents.method.scan", icon: "photo_camera" }
    ];
    this.internationalChecks = [
      this._checkOption("world_api_interpol", "interpol"),
      this._checkOption("world_api_fbi", "fbi"),
      this._checkOption("world_api_dea", "dea"),
      this._checkOption("world_api_europol", "europol"),
      this._checkOption("world_api_ofac", "ofac"),
      this._checkOption("world_api_onu", "un")
    ];
    this.colombiaSources = [
      this._checkOption("colombia_api_inpec", "colombia.inpec"),
      this._checkOption("colombia_api_identity_lookup_procuraduria", "colombia.procuraduria"),
      this._checkOption("colombia_api_police_rnmc", "colombia.rnmc"),
      this._checkOption("colombia_special_api_police_identity_lookup", "colombia.police")
    ];
    this.selectedCheck = null;
  }
  ngOnInit() {
    if (!this.isFormReady)
      return;
    this.formGroup.valueChanges.pipe(takeUntilDestroyed(this._destroyRef)).subscribe(() => this._cdr.markForCheck());
    this._watchDocumentRequirement();
  }
  get documentTypesFormArray() {
    return this.formGroup?.get("documentTypes") || null;
  }
  get stepFormGroup() {
    return this.form?.get("projectFlow.steps") || null;
  }
  get isFormReady() {
    return !this.loading && !!this.form && !!this.formGroup && !!this.stepFormGroup && !!this.documentTypesFormArray;
  }
  get requirementValue() {
    return this.stepFormGroup?.get("document")?.value || "skip";
  }
  get isNotRequired() {
    return this.requirementValue === "skip";
  }
  get countryCheckSections() {
    const countries = this.documentTypesFormArray?.controls.map((control) => String(control.get("country")?.value || "").trim()).filter(Boolean) || [];
    return buildCountryCheckSections(countries, { colombia: this.colombiaSources });
  }
  get configuredCountriesCount() {
    return this.documentTypesFormArray?.controls.filter((control) => !!control.get("country")?.value).length || 0;
  }
  get selectedDocumentsCount() {
    return this.documentTypesFormArray?.controls.reduce((total, documentControl) => {
      const configurations = documentControl.get("configurations");
      if (!configurations)
        return total;
      return total + this._selectedTemplates(configurations);
    }, 0) || 0;
  }
  get attemptLimit() {
    return Number(this.formGroup?.get("attemptLimit")?.value || 1);
  }
  get screeningOn() {
    return !!this.formGroup?.get("screening")?.value;
  }
  get screeningChecksCount() {
    return ["informationVerification", "criminalHistoryVerification"].filter((key) => !!this.formGroup?.get(key)?.value).length;
  }
  get verificationMethodsValue() {
    return this.formGroup?.get("verificationMethods")?.value || [];
  }
  get criminalEndpointsValue() {
    return this.formGroup?.get("criminalHistoryVerificationEndpoints")?.value || [];
  }
  get documentTypesErrorKeys() {
    const errs = this.documentTypesFormArray?.errors;
    if (!errs)
      return [];
    return Object.keys(errs).filter((key) => errs[key] === true);
  }
  isVerificationMethodSelected(method) {
    return this.verificationMethodsValue.includes(method);
  }
  toggleVerificationMethod(method) {
    const ctrl = this.formGroup?.get("verificationMethods");
    if (!ctrl)
      return;
    const current = this.verificationMethodsValue;
    const next = current.includes(method) ? current.filter((value) => value !== method) : [...current, method];
    ctrl.setValue(next);
    ctrl.markAsDirty();
    ctrl.markAsTouched();
    this._cdr.markForCheck();
  }
  isEndpointSelected(endpoint) {
    const current = this.criminalEndpointsValue;
    const colombiaCodes = this.colombiaSources.map((source) => source.value);
    if (!colombiaCodes.includes(endpoint))
      return current.includes(endpoint);
    return isCountryCheckSelected(current, endpoint, colombiaCodes, this._legacyColombiaSources);
  }
  toggleCriminalEndpoint(endpoint) {
    const colombiaCodes = this.colombiaSources.map((source) => source.value);
    const ctrl = this.formGroup?.get("criminalHistoryVerificationEndpoints");
    if (!ctrl)
      return;
    const current = this.criminalEndpointsValue;
    const next = colombiaCodes.includes(endpoint) ? toggleCountryCheck(current, endpoint, colombiaCodes, this._legacyColombiaSources) : current.includes(endpoint) ? current.filter((code) => code !== endpoint) : [...current, endpoint];
    ctrl.setValue(next);
    ctrl.markAsDirty();
    this._cdr.markForCheck();
  }
  openCheckDetails(event, check) {
    event.preventDefault();
    event.stopPropagation();
    this.selectedCheck = check;
    if (!this.checkDetailsDialog)
      return;
    this._dialog.open(this.checkDetailsDialog, { width: "560px", maxHeight: "90vh", autoFocus: false });
  }
  docsUrl(check) {
    return criminalCheckDocsUrl(check.docs, this._transloco.getActiveLang());
  }
  postmanUrl(check) {
    return `/postman?code=${encodeURIComponent(check.value)}`;
  }
  _selectedTemplates(configurations) {
    return configurations.controls.reduce((total, configuration) => {
      const templates = configuration.get("documentTemplates");
      return total + (templates?.controls.filter((template) => !!template.get("promptTemplate")?.value).length || 0);
    }, 0);
  }
  _watchDocumentRequirement() {
    const documentControl = this.stepFormGroup?.get("document");
    if (!documentControl)
      return;
    this._previousDocumentStepValue = documentControl.value;
    documentControl.valueChanges.pipe(takeUntilDestroyed(this._destroyRef)).subscribe((value) => {
      if (value === "skip" && this._previousDocumentStepValue !== "skip") {
        this._confirmSkipDocumentVerification(documentControl);
        return;
      }
      this._previousDocumentStepValue = value;
      this._cdr.markForCheck();
    });
  }
  _confirmSkipDocumentVerification(documentControl) {
    const t = (key) => this._transloco.translate(key) ?? key;
    const ref = this._confirm.open({
      title: t("smartEnrollProjects.setup.documents.confirm_skip_title"),
      message: t("smartEnrollProjects.setup.documents.confirm_skip_message"),
      actions: {
        confirm: { show: true, label: t("smartEnrollProjects.setup.documents.confirm_skip_yes"), color: "warn" },
        cancel: { show: true, label: t("smartEnrollProjects.setup.documents.confirm_skip_back") }
      }
    });
    ref.afterClosed().subscribe((result) => {
      if (result === "confirmed") {
        this._previousDocumentStepValue = "skip";
      } else {
        documentControl?.setValue(this._previousDocumentStepValue, { emitEvent: false });
      }
      this._cdr.markForCheck();
    });
  }
  _checkOption(value, key) {
    const baseKey = `smartEnrollProjects.setup.documents.screening.checks.${key}`;
    return {
      value,
      titleKey: `${baseKey}.title`,
      descriptionKey: `${baseKey}.description`,
      sourceKey: `${baseKey}.source`,
      aboutKey: `${baseKey}.about`,
      docs: criminalCheckDocs[value]
    };
  }
  static {
    this.\u0275fac = function HumanAuthnDocumentsStepComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HumanAuthnDocumentsStepComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HumanAuthnDocumentsStepComponent, selectors: [["human-authn-documents-step"]], viewQuery: function HumanAuthnDocumentsStepComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c02, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.checkDetailsDialog = _t.first);
      }
    }, inputs: { form: "form", formGroup: "formGroup", loading: "loading", saving: "saving" }, decls: 1, vars: 0, consts: [["checkDetailsDialog", ""], [4, "transloco"], [1, "docs-screen"], [1, "docs-hero"], [1, "docs-hero__eyebrow"], [1, "docs-hero__choice"], [1, "docs-decision"], [1, "docs-record"], [1, "section-heading"], [1, "documents-journey"], [1, "documents-timeline"], [1, "documents-stage"], ["aria-hidden", "true", 1, "documents-stage__marker"], [1, "documents-panel", 3, "formGroup"], [1, "documents-panel__header"], [1, "documents-panel__eyebrow"], [1, "documents-panel__status"], ["formControlName", "document", 1, "requirement-options", 3, "hideSingleSelectionIndicator"], [3, "value"], [3, "formGroup"], [1, "documents-panel"], [1, "disabled-stage"], [1, "documents-panel__body"], [1, "documents-panel__body", "collection-policy"], ["aria-live", "polite", 1, "docs-explainer"], [1, "section-heading", "section-heading--light"], [1, "docs-flow"], [1, "docs-flow__result"], [1, "docs-path"], [1, "docs-path__label"], [1, "docs-path__result"], [1, "docs-facts"], [1, "fact-items"], [1, "fact-items__icon", "fact-items__icon--compare"], [1, "fact-items__icon", "fact-items__icon--types"], [1, "fact-items__icon", "fact-items__icon--screening"], [1, "requirement-option"], [1, "validation-summary"], ["target", "personal", 1, "document-editor", 3, "form", "documentTypes"], [1, "policy-section"], [1, "policy-section__copy"], [1, "method-options"], ["type", "button", 1, "method-option", 3, "method-option--selected"], [1, "field-error"], [1, "policy-section", "policy-section--attempts"], ["appearance", "outline", "subscriptSizing", "dynamic"], ["formControlName", "attemptLimit", "required", ""], ["type", "button", 1, "method-option", 3, "click"], [1, "method-option__check"], [1, "setting-row"], [1, "setting-row__copy"], ["formControlName", "screening"], [1, "screening-options"], [1, "screening-option"], ["formControlName", "informationVerification"], ["formControlName", "criminalHistoryVerification"], [1, "criminal-check-catalog"], [1, "criminal-check-catalog__intro"], [1, "check-scope"], [1, "check-scope", "check-scope--international"], [1, "check-scope__badge", "check-scope__badge--floating"], [1, "check-scope__header"], [1, "check-card-grid"], [1, "check-card", 3, "check-card--selected"], [1, "check-scope__badge"], [1, "check-scope__empty"], [1, "check-card"], [3, "change", "checked"], [1, "check-card__copy"], ["type", "button", "matTooltipPosition", "above", 1, "check-card__source", 3, "click", "matTooltip"], [1, "flex", "max-h-[90vh]", "flex-col", "overflow-hidden", "rounded-lg", "bg-white", "dark:bg-gray-900"], [1, "flex", "items-start", "justify-between", "gap-4", "border-b", "border-stone-200", "bg-stone-50", "p-5", "dark:border-gray-700", "dark:bg-gray-900/60"], [1, "flex", "min-w-0", "flex-col", "items-start", "gap-2"], [1, "check-card__source"], [1, "m-0", "text-lg", "font-semibold", "text-stone-900", "dark:text-white"], ["mat-icon-button", "", "mat-dialog-close", ""], [1, "flex-1", "overflow-y-auto", "p-5"], [1, "m-0", "text-sm", "leading-relaxed", "text-stone-600", "dark:text-stone-300"], [1, "flex", "flex-wrap", "justify-end", "gap-2", "border-t", "border-stone-200", "p-4", "dark:border-gray-700"], ["mat-stroked-button", "", "target", "_blank", "rel", "noopener noreferrer", 3, "href"], ["mat-flat-button", "", "color", "primary", "target", "_blank", "rel", "noopener noreferrer", 3, "href"]], template: function HumanAuthnDocumentsStepComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, HumanAuthnDocumentsStepComponent_ng_container_0_Template, 4, 1, "ng-container", 1);
      }
    }, dependencies: [
      CommonModule,
      ReactiveFormsModule,
      NgControlStatus,
      NgControlStatusGroup,
      RequiredValidator,
      FormGroupDirective,
      FormControlName,
      MatButtonModule,
      MatAnchor,
      MatIconButton,
      MatButtonToggleModule,
      MatButtonToggleGroup,
      MatButtonToggle,
      MatCheckboxModule,
      MatCheckbox,
      MatDialogModule,
      MatDialogClose,
      MatFormFieldModule,
      MatFormField,
      MatLabel,
      MatIconModule,
      MatIcon,
      MatSelectModule,
      MatSelect,
      MatOption,
      MatSlideToggleModule,
      MatSlideToggle,
      MatTooltipModule,
      MatTooltip,
      TranslocoModule,
      TranslocoDirective,
      DocumentVerificationTypeListComponent
    ], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.documents-journey[_ngcontent-%COMP%] {\n  margin-inline: auto;\n  width: min(100%, 58rem);\n}\n.documents-intro[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n  margin-bottom: 2rem;\n  padding: 1.25rem 1.5rem;\n  border: 1px solid rgba(214, 211, 209, 0.8);\n  border-radius: 1.25rem;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.96),\n      rgba(245, 245, 244, 0.72));\n}\n.documents-intro[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #1c1917;\n  font-size: 1.05rem;\n  font-weight: 650;\n  letter-spacing: -0.015em;\n}\n.documents-intro[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 46rem;\n  margin: 0.3rem 0 0;\n  color: #78716c;\n  font-size: 0.78rem;\n  line-height: 1.55;\n}\n.documents-intro__icon[_ngcontent-%COMP%] {\n  display: grid;\n  flex: 0 0 2.5rem;\n  width: 2.5rem;\n  height: 2.5rem;\n  place-items: center;\n  border-radius: 0.8rem;\n  background: #1c1917;\n  color: white;\n}\n.documents-intro__icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 1.25rem;\n  height: 1.25rem;\n  font-size: 1.25rem;\n}\n.documents-timeline[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.documents-timeline[_ngcontent-%COMP%]::before {\n  position: absolute;\n  top: 1.15rem;\n  bottom: 1.15rem;\n  left: 1.15rem;\n  width: 1px;\n  background: linear-gradient(#292524, #d6d3d1);\n  content: "";\n}\n.documents-stage[_ngcontent-%COMP%] {\n  position: relative;\n  display: grid;\n  grid-template-columns: 2.3rem minmax(0, 1fr);\n  gap: 1rem;\n}\n.documents-stage__marker[_ngcontent-%COMP%] {\n  z-index: 1;\n  display: grid;\n  width: 2.3rem;\n  height: 2.3rem;\n  place-items: center;\n  border: 4px solid #fafaf9;\n  border-radius: 999px;\n  background: #292524;\n  color: white;\n  font-size: 0.75rem;\n  font-weight: 700;\n}\n.documents-panel[_ngcontent-%COMP%] {\n  overflow: hidden;\n  border: 1px solid rgba(214, 211, 209, 0.9);\n  border-radius: 1.25rem;\n  background: white;\n  box-shadow: 0 1px 2px rgba(28, 25, 23, 0.03), 0 12px 30px rgba(28, 25, 23, 0.035);\n}\n.documents-panel--error[_ngcontent-%COMP%] {\n  border-color: #f87171;\n}\n.documents-panel__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 1rem;\n  padding: 1.4rem 1.5rem 1.25rem;\n  border-bottom: 1px solid #f5f5f4;\n}\n.documents-panel__header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0.15rem 0 0;\n  color: #1c1917;\n  font-size: 1.05rem;\n  font-weight: 650;\n  letter-spacing: -0.015em;\n}\n.documents-panel__header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 39rem;\n  margin: 0.35rem 0 0;\n  color: #78716c;\n  font-size: 0.76rem;\n  line-height: 1.5;\n}\n.documents-panel__eyebrow[_ngcontent-%COMP%] {\n  color: #a8a29e;\n  font-size: 0.64rem;\n  font-weight: 700;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n}\n.documents-panel__status[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  padding: 0.35rem 0.65rem;\n  border-radius: 999px;\n  background: #f5f5f4;\n  color: #57534e;\n  font-size: 0.68rem;\n  font-weight: 650;\n  white-space: nowrap;\n}\n.documents-panel__body[_ngcontent-%COMP%] {\n  padding: 1.25rem 1.5rem 1.5rem;\n}\n.requirement-options[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 0.75rem;\n  width: auto;\n  margin: 1.25rem 1.5rem 1.5rem;\n  border: 0;\n}\n.requirement-options[_ngcontent-%COMP%]     .mat-button-toggle {\n  border: 1px solid #e7e5e4;\n  border-radius: 0.9rem;\n  background: #fafaf9;\n}\n.requirement-options[_ngcontent-%COMP%]     .mat-button-toggle-checked {\n  border-color: #292524;\n  background: #f5f5f4;\n  box-shadow: inset 0 0 0 1px #292524;\n}\n.requirement-options[_ngcontent-%COMP%]     .mat-button-toggle-label-content {\n  width: 100%;\n  padding: 0.9rem 1rem;\n  line-height: normal;\n  white-space: normal;\n}\n.requirement-option[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 3.2rem;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 0.3rem;\n  text-align: left;\n}\n.requirement-option[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #292524;\n  font-size: 0.8rem;\n  font-weight: 650;\n}\n.requirement-option[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #78716c;\n  font-size: 0.66rem;\n  line-height: 1.35;\n}\n.setting-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1.5rem;\n  margin: 1.25rem 1.5rem 1.5rem;\n}\n.setting-row__copy[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.85rem;\n}\n.setting-row__copy[_ngcontent-%COMP%]    > mat-icon[_ngcontent-%COMP%] {\n  margin-top: 0.1rem;\n  color: #78716c;\n}\n.setting-row__copy[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.2rem;\n}\n.setting-row__copy[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #292524;\n  font-size: 0.84rem;\n  font-weight: 650;\n}\n.setting-row__copy[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #78716c;\n  font-size: 0.72rem;\n  line-height: 1.45;\n}\n.disabled-stage[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.65rem;\n  margin: 1.25rem 1.5rem 1.5rem;\n  padding: 0.9rem 1rem;\n  border: 1px dashed #d6d3d1;\n  border-radius: 0.85rem;\n  background: #fafaf9;\n  color: #78716c;\n  font-size: 0.72rem;\n}\n.disabled-stage[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n  color: #a8a29e;\n  font-size: 1rem;\n}\n.validation-summary[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.65rem;\n  margin-bottom: 1rem;\n  padding: 0.8rem 0.9rem;\n  border-radius: 0.75rem;\n  background: #fef2f2;\n  color: #b91c1c;\n  font-size: 0.72rem;\n}\n.validation-summary[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n  font-size: 1rem;\n}\n.validation-summary[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.document-editor[_ngcontent-%COMP%] {\n  display: block;\n}\n  .document-editor [id^=doc-country-] {\n  border-radius: 0.9rem !important;\n  background: #fafaf9 !important;\n  box-shadow: none;\n}\n  .document-editor [id^=doc-country-] > div:first-child {\n  align-items: center;\n}\n  .document-editor [id^=doc-country-] [mat-stroked-button] {\n  min-height: 2.2rem;\n}\n  .document-editor > div > button[mat-stroked-button] {\n  margin-top: 0.25rem;\n  border-style: dashed;\n}\n.collection-policy[_ngcontent-%COMP%], \n.policy-section[_ngcontent-%COMP%], \n.policy-section__copy[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.collection-policy[_ngcontent-%COMP%] {\n  gap: 1.25rem;\n}\n.policy-section[_ngcontent-%COMP%] {\n  gap: 0.8rem;\n}\n.policy-section[_ngcontent-%COMP%]    + .policy-section[_ngcontent-%COMP%] {\n  padding-top: 1.25rem;\n  border-top: 1px solid #f5f5f4;\n}\n.policy-section__copy[_ngcontent-%COMP%] {\n  gap: 0.2rem;\n}\n.policy-section__copy[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #292524;\n  font-size: 0.84rem;\n  font-weight: 650;\n}\n.policy-section__copy[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #78716c;\n  font-size: 0.72rem;\n  line-height: 1.45;\n}\n.policy-section--attempts[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) minmax(12rem, 15rem);\n  align-items: center;\n  gap: 1.5rem;\n}\n.policy-section--attempts[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.method-options[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 0.75rem;\n}\n.method-option[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  min-height: 3.6rem;\n  padding: 0.8rem 0.9rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 0.85rem;\n  background: #fafaf9;\n  color: #57534e;\n  text-align: left;\n  transition:\n    border-color 160ms ease,\n    background-color 160ms ease,\n    transform 160ms ease;\n}\n.method-option[_ngcontent-%COMP%]:hover {\n  border-color: #a8a29e;\n  background: white;\n  transform: translateY(-1px);\n}\n.method-option[_ngcontent-%COMP%]    > mat-icon[_ngcontent-%COMP%] {\n  color: #78716c;\n}\n.method-option--selected[_ngcontent-%COMP%] {\n  border-color: #292524;\n  background: #f5f5f4;\n  box-shadow: inset 0 0 0 1px #292524;\n  color: #292524;\n  font-weight: 650;\n}\n.method-option__check[_ngcontent-%COMP%] {\n  margin-left: auto;\n  color: #166534 !important;\n}\n.field-error[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #dc2626;\n  font-size: 0.72rem;\n}\n.screening-options[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 0.75rem;\n  margin-top: 1.25rem;\n}\n.screening-option[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto auto minmax(0, 1fr);\n  align-items: flex-start;\n  gap: 0.65rem;\n  min-height: 5rem;\n  padding: 0.9rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 0.9rem;\n  background: #fafaf9;\n}\n.screening-option[_ngcontent-%COMP%]    > mat-icon[_ngcontent-%COMP%] {\n  margin-top: 0.2rem;\n  color: #78716c;\n}\n.screening-option[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.screening-option[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #292524;\n  font-size: 0.78rem;\n  font-weight: 650;\n}\n.screening-option[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #78716c;\n  font-size: 0.66rem;\n  line-height: 1.4;\n}\n.criminal-check-catalog[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  margin-top: 1rem;\n  padding: 1rem;\n  border: 1px solid #d6d3d1;\n  border-radius: 1rem;\n  background: #fafaf9;\n}\n.criminal-check-catalog__intro[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: end;\n  justify-content: space-between;\n  gap: 1.5rem;\n  padding: 0.15rem 0.2rem 0.25rem;\n}\n.criminal-check-catalog__intro[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n}\n.criminal-check-catalog__intro[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #2563eb;\n  font-size: 0.64rem;\n  font-weight: 750;\n  letter-spacing: 0.11em;\n  text-transform: uppercase;\n}\n.criminal-check-catalog__intro[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0.18rem 0 0;\n  color: #1c1917;\n  font-size: 1rem;\n  font-weight: 700;\n  letter-spacing: -0.015em;\n}\n.criminal-check-catalog__intro[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 31rem;\n  margin: 0;\n  color: #78716c;\n  font-size: 0.72rem;\n  line-height: 1.5;\n  text-align: right;\n}\n.check-scope[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 0.9rem;\n  background: #fff;\n}\n.check-scope--international[_ngcontent-%COMP%] {\n  position: relative;\n  margin-top: 0.35rem;\n  border-color: #dbeafe;\n  background: #f8fbff;\n}\n.check-scope__header[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(10rem, 0.7fr) minmax(14rem, 1.3fr);\n  gap: 1rem;\n  align-items: end;\n  margin-bottom: 0.85rem;\n}\n.check-scope__header[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.65rem;\n}\n.check-scope__header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #292524;\n  font-size: 0.86rem;\n  font-weight: 700;\n}\n.check-scope__header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #78716c;\n  font-size: 0.68rem;\n  line-height: 1.45;\n  text-align: right;\n}\n.check-scope__badge[_ngcontent-%COMP%], \n.check-card__source[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: fit-content;\n  align-items: center;\n  border-radius: 999px;\n  font-size: 0.58rem;\n  font-weight: 700;\n  letter-spacing: 0.045em;\n  text-transform: uppercase;\n}\n.check-scope__badge[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.48rem;\n  background: #e7e5e4;\n  color: #57534e;\n}\n.check-scope--international[_ngcontent-%COMP%]    > .check-scope__badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 1rem;\n  z-index: 1;\n  transform: translateY(-50%);\n  white-space: nowrap;\n  border: 1px solid #bfdbfe;\n  background: #f8fbff;\n  color: #1d4ed8;\n}\n.check-card-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 0.65rem;\n}\n.check-card[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr);\n  gap: 0.65rem;\n  min-height: 7rem;\n  padding: 0.8rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 0.78rem;\n  background: #fff;\n  cursor: pointer;\n  transition:\n    border-color 160ms ease,\n    box-shadow 160ms ease,\n    transform 160ms ease;\n}\n.check-card[_ngcontent-%COMP%]:hover {\n  border-color: #a8a29e;\n  box-shadow: 0 5px 16px rgba(28, 25, 23, 0.06);\n  transform: translateY(-1px);\n}\n.check-card--selected[_ngcontent-%COMP%] {\n  border-color: #93c5fd;\n  box-shadow: inset 0 0 0 1px #bfdbfe;\n}\n.check-card__copy[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 0;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 0.3rem;\n}\n.check-card__copy[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #292524;\n  font-size: 0.76rem;\n  font-weight: 700;\n}\n.check-card__copy[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #78716c;\n  font-size: 0.65rem;\n  line-height: 1.45;\n}\n.check-card__source[_ngcontent-%COMP%] {\n  margin-top: auto;\n  padding: 0.22rem 0.43rem;\n  background: #eff6ff;\n  color: #1d4ed8;\n}\nbutton.check-card__source[_ngcontent-%COMP%] {\n  border: 0;\n  font-family: inherit;\n  line-height: 1.2;\n  cursor: pointer;\n}\nbutton.check-card__source[_ngcontent-%COMP%]:hover, \nbutton.check-card__source[_ngcontent-%COMP%]:focus-visible {\n  background: #dbeafe;\n  outline: 2px solid #93c5fd;\n  outline-offset: 2px;\n}\n.check-scope__empty[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem;\n  border-radius: 0.65rem;\n  background: #f5f5f4;\n  color: #78716c;\n  font-size: 0.7rem;\n}\n.check-scope__empty[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n  font-size: 1rem;\n}\n.dark[_nghost-%COMP%]   .documents-intro[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .documents-intro[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .documents-panel[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .documents-panel[_ngcontent-%COMP%] {\n  border-color: #374151;\n  background: #111827;\n}\n.dark[_nghost-%COMP%]   .documents-intro[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .documents-intro[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .documents-panel__header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .documents-panel__header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .requirement-option[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .requirement-option[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .setting-row__copy[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .setting-row__copy[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .policy-section__copy[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .policy-section__copy[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .screening-option[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .screening-option[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #f9fafb;\n}\n.dark[_nghost-%COMP%]   .documents-intro[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .documents-intro[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .documents-panel__header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .documents-panel__header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .requirement-option[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .requirement-option[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .setting-row__copy[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .setting-row__copy[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .policy-section__copy[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .policy-section__copy[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .screening-option[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .screening-option[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #9ca3af;\n}\n.dark[_nghost-%COMP%]   .documents-stage__marker[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .documents-stage__marker[_ngcontent-%COMP%] {\n  border-color: #030712;\n  background: #f3f4f6;\n  color: #111827;\n}\n.dark[_nghost-%COMP%]   .documents-timeline[_ngcontent-%COMP%]::before, .dark   [_nghost-%COMP%]   .documents-timeline[_ngcontent-%COMP%]::before {\n  background: linear-gradient(#f3f4f6, #374151);\n}\n.dark[_nghost-%COMP%]   .documents-panel__header[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .documents-panel__header[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .policy-section[_ngcontent-%COMP%]    + .policy-section[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .policy-section[_ngcontent-%COMP%]    + .policy-section[_ngcontent-%COMP%] {\n  border-color: #1f2937;\n}\n.dark[_nghost-%COMP%]   .documents-panel__status[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .documents-panel__status[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .disabled-stage[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .disabled-stage[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .method-option[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .method-option[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .screening-option[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .screening-option[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .criminal-check-catalog[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .criminal-check-catalog[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .check-scope[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .check-scope[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .requirement-options[_ngcontent-%COMP%]     .mat-button-toggle, .dark   [_nghost-%COMP%]   .requirement-options[_ngcontent-%COMP%]     .mat-button-toggle {\n  border-color: #374151;\n  background: #1f2937;\n  color: #d1d5db;\n}\n.dark[_nghost-%COMP%]   .requirement-options[_ngcontent-%COMP%]     .mat-button-toggle-checked, .dark   [_nghost-%COMP%]   .requirement-options[_ngcontent-%COMP%]     .mat-button-toggle-checked, \n.dark[_nghost-%COMP%]   .method-option--selected[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .method-option--selected[_ngcontent-%COMP%] {\n  border-color: #d1d5db;\n  background: #374151;\n  box-shadow: inset 0 0 0 1px #d1d5db;\n  color: #f9fafb;\n}\n.dark[_nghost-%COMP%]   .check-scope--international[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .check-scope--international[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .check-card[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .check-card[_ngcontent-%COMP%] {\n  border-color: #4b5563;\n  background: #111827;\n}\n.dark[_nghost-%COMP%]   .check-card--selected[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .check-card--selected[_ngcontent-%COMP%] {\n  border-color: #60a5fa;\n  box-shadow: inset 0 0 0 1px #1d4ed8;\n}\n.dark[_nghost-%COMP%]   .criminal-check-catalog__intro[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .criminal-check-catalog__intro[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .check-scope__header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .check-scope__header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .check-card__copy[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .check-card__copy[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #f9fafb;\n}\n.dark[_nghost-%COMP%]   .criminal-check-catalog__intro[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .criminal-check-catalog__intro[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .check-scope__header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .check-scope__header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .check-card__copy[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .check-card__copy[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #9ca3af;\n}\n.dark[_nghost-%COMP%]   .check-scope__badge[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .check-scope__badge[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .check-scope__empty[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .check-scope__empty[_ngcontent-%COMP%] {\n  background: #374151;\n  color: #d1d5db;\n}\n.dark[_nghost-%COMP%]   .check-scope__badge--floating[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .check-scope__badge--floating[_ngcontent-%COMP%] {\n  border-color: #1d4ed8;\n  background: #111827;\n  color: #bfdbfe;\n}\n.dark[_nghost-%COMP%]   .check-card__source[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .check-card__source[_ngcontent-%COMP%] {\n  background: #1e3a8a;\n  color: #dbeafe;\n}\n.dark[_nghost-%COMP%]   button.check-card__source[_ngcontent-%COMP%]:hover, .dark   [_nghost-%COMP%]   button.check-card__source[_ngcontent-%COMP%]:hover, \n.dark[_nghost-%COMP%]   button.check-card__source[_ngcontent-%COMP%]:focus-visible, .dark   [_nghost-%COMP%]   button.check-card__source[_ngcontent-%COMP%]:focus-visible {\n  background: #1d4ed8;\n  outline-color: #93c5fd;\n}\n.dark[_nghost-%COMP%]   .validation-summary[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .validation-summary[_ngcontent-%COMP%] {\n  background: rgba(127, 29, 29, 0.35);\n  color: #fecaca;\n}\n.dark[_nghost-%COMP%]     .document-editor [id^=doc-country-], .dark   [_nghost-%COMP%]     .document-editor [id^=doc-country-] {\n  border-color: #374151 !important;\n  background: #1f2937 !important;\n}\n@media (max-width: 720px) {\n  .documents-intro[_ngcontent-%COMP%] {\n    margin-bottom: 1.5rem;\n  }\n  .documents-timeline[_ngcontent-%COMP%]::before {\n    display: none;\n  }\n  .documents-stage[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .documents-stage__marker[_ngcontent-%COMP%] {\n    margin: 0 0 -0.7rem 1rem;\n  }\n  .documents-panel__header[_ngcontent-%COMP%] {\n    padding-top: 1.7rem;\n  }\n  .requirement-options[_ngcontent-%COMP%], \n   .method-options[_ngcontent-%COMP%], \n   .screening-options[_ngcontent-%COMP%], \n   .check-card-grid[_ngcontent-%COMP%], \n   .check-scope__header[_ngcontent-%COMP%], \n   .policy-section--attempts[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .criminal-check-catalog__intro[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n    gap: 0.5rem;\n  }\n  .criminal-check-catalog__intro[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    text-align: left;\n  }\n  .check-scope__header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    text-align: left;\n  }\n  .documents-panel__header[_ngcontent-%COMP%], \n   .setting-row[_ngcontent-%COMP%] {\n    align-items: flex-start;\n  }\n}\n/*# sourceMappingURL=documents.component.css.map */', "\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.documents-journey[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0;\n}\n.docs-screen[_ngcontent-%COMP%] {\n  margin-inline: auto;\n  width: min(100%, 76rem);\n}\n.docs-hero[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 2rem;\n  margin-bottom: 2rem;\n  padding: 0.5rem 0.25rem;\n}\n.docs-hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  max-width: 42rem;\n  margin: 0.35rem 0 0;\n  color: #1c1917;\n  font-size: clamp(1.75rem, 3vw, 2.55rem);\n  font-weight: 680;\n  letter-spacing: -0.045em;\n  line-height: 1.05;\n}\n.docs-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 42rem;\n  margin: 0.75rem 0 0;\n  color: #78716c;\n  font-size: 0.88rem;\n  line-height: 1.6;\n}\n.docs-hero__eyebrow[_ngcontent-%COMP%] {\n  color: #78716c;\n  font-size: 0.65rem;\n  font-weight: 750;\n  letter-spacing: 0.16em;\n  text-transform: uppercase;\n}\n.docs-hero__choice[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 0 0 auto;\n  flex-direction: column;\n  align-items: flex-end;\n  max-width: 16rem;\n  padding: 0.75rem 1rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 0.9rem;\n  background: white;\n}\n.docs-hero__choice[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #a8a29e;\n  font-size: 0.62rem;\n  font-weight: 650;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n.docs-hero__choice[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  margin-top: 0.15rem;\n  color: #292524;\n  font-size: 0.82rem;\n}\n.docs-decision[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1.35fr) minmax(18rem, 0.65fr);\n  overflow: hidden;\n  border: 1px solid #d6d3d1;\n  border-radius: 1.5rem;\n  background: white;\n  box-shadow: 0 1px 2px rgba(28, 25, 23, 0.03), 0 18px 45px rgba(28, 25, 23, 0.05);\n}\n.docs-record[_ngcontent-%COMP%], \n.docs-explainer[_ngcontent-%COMP%], \n.docs-facts[_ngcontent-%COMP%] {\n  padding: 1.75rem;\n}\n.docs-explainer[_ngcontent-%COMP%] {\n  background: #1c1917;\n  color: white;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.8rem;\n  margin-bottom: 1.25rem;\n}\n.section-heading[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: grid;\n  flex: 0 0 1.8rem;\n  width: 1.8rem;\n  height: 1.8rem;\n  place-items: center;\n  border-radius: 999px;\n  background: #292524;\n  color: white;\n  font-size: 0.62rem;\n  font-weight: 750;\n}\n.section-heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #292524;\n  font-size: 0.95rem;\n  font-weight: 680;\n}\n.section-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.25rem 0 0;\n  color: #78716c;\n  font-size: 0.72rem;\n  line-height: 1.45;\n}\n.section-heading--light[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  background: white;\n  color: #1c1917;\n}\n.section-heading--light[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: white;\n}\n.section-heading--light[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #a8a29e;\n}\n.docs-flow[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.55rem;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.docs-flow[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.7rem;\n  padding: 0.7rem 0.8rem;\n  border: 1px solid #44403c;\n  border-radius: 0.8rem;\n  background: #292524;\n}\n.docs-flow[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 1.15rem;\n  height: 1.15rem;\n  color: #e7e5e4;\n  font-size: 1.15rem;\n}\n.docs-flow[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #f5f5f4;\n  font-size: 0.75rem;\n  font-weight: 650;\n}\n.docs-flow__result[_ngcontent-%COMP%] {\n  border-color: #e7e5e4;\n  background: white;\n}\n.docs-flow__result[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], \n.docs-flow__result[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #1c1917;\n}\n.docs-path[_ngcontent-%COMP%] {\n  margin-top: 1.25rem;\n  padding-top: 1.15rem;\n  border-top: 1px solid #44403c;\n}\n.docs-path[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0.35rem 0 0;\n  font-size: 1rem;\n  font-weight: 680;\n}\n.docs-path[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  margin: 0.4rem 0 0;\n  color: #d6d3d1;\n  font-size: 0.75rem;\n  line-height: 1.5;\n}\n.docs-path__label[_ngcontent-%COMP%] {\n  color: #a8a29e;\n  font-size: 0.62rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n.docs-path__result[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.55rem;\n  margin-top: 0.9rem;\n  padding: 0.75rem 0.85rem;\n  border: 1px solid #44403c;\n  border-radius: 0.8rem;\n  background: #292524;\n  color: #f5f5f4;\n  font-size: 0.72rem;\n  line-height: 1.45;\n}\n.docs-path__result[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n  font-size: 1rem;\n}\n.docs-facts[_ngcontent-%COMP%] {\n  margin-top: 1.25rem;\n  border: 1px solid #d6d3d1;\n  border-radius: 1.5rem;\n  background: white;\n}\n.fact-items[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 0.8rem;\n}\n.fact-items[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  padding: 0.9rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 0.9rem;\n  background: #fafaf9;\n}\n.fact-items[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #292524;\n  font-size: 0.78rem;\n}\n.fact-items[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.25rem 0 0;\n  color: #78716c;\n  font-size: 0.68rem;\n  line-height: 1.45;\n}\n.fact-items__icon[_ngcontent-%COMP%] {\n  display: grid;\n  flex: 0 0 2rem;\n  width: 2rem;\n  height: 2rem;\n  place-items: center;\n  border-radius: 0.6rem;\n}\n.fact-items__icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n  font-size: 1rem;\n}\n.fact-items__icon--compare[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  color: #1d4ed8;\n}\n.fact-items__icon--types[_ngcontent-%COMP%] {\n  background: #f5f5f4;\n  color: #44403c;\n}\n.fact-items__icon--screening[_ngcontent-%COMP%] {\n  background: #fff7ed;\n  color: #c2410c;\n}\n.dark[_nghost-%COMP%]   .docs-hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .docs-hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .section-heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .section-heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .fact-items[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .fact-items[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .docs-hero__choice[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .docs-hero__choice[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #f8fafc;\n}\n.dark[_nghost-%COMP%]   .docs-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .docs-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .docs-hero__eyebrow[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .docs-hero__eyebrow[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .section-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .section-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .fact-items[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .fact-items[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .docs-hero__choice[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .docs-hero__choice[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .docs-hero__choice[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .docs-hero__choice[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .docs-decision[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .docs-decision[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .docs-facts[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .docs-facts[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .fact-items[_ngcontent-%COMP%]   article[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .fact-items[_ngcontent-%COMP%]   article[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .docs-record[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .docs-record[_ngcontent-%COMP%] {\n  border-color: #334155;\n  background: #1e293b;\n}\n.dark[_nghost-%COMP%]   .section-heading[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .section-heading[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  background: #cbd5e1;\n  color: #0f172a;\n}\n.dark[_nghost-%COMP%]   .docs-explainer[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .docs-explainer[_ngcontent-%COMP%] {\n  background: #0f172a;\n}\n.dark[_nghost-%COMP%]   .section-heading--light[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .section-heading--light[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  background: #e2e8f0;\n  color: #0f172a;\n}\n.dark[_nghost-%COMP%]   .section-heading--light[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .section-heading--light[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .docs-path[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .docs-path[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #f8fafc;\n}\n.dark[_nghost-%COMP%]   .docs-flow[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .docs-flow[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .docs-path__result[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .docs-path__result[_ngcontent-%COMP%] {\n  border-color: #475569;\n  background: #1e293b;\n}\n.dark[_nghost-%COMP%]   .docs-flow__result[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .docs-flow__result[_ngcontent-%COMP%] {\n  background: #e2e8f0;\n}\n.dark[_nghost-%COMP%]   .docs-flow__result[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .docs-flow__result[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .docs-flow__result[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .docs-flow__result[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #0f172a;\n}\n.dark[_nghost-%COMP%]   .docs-path[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .docs-path[_ngcontent-%COMP%] {\n  border-top-color: #475569;\n}\n@media (max-width: 980px) {\n  .docs-decision[_ngcontent-%COMP%], \n   .fact-items[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 720px) {\n  .docs-hero[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n  .docs-hero__choice[_ngcontent-%COMP%] {\n    align-items: flex-start;\n  }\n  .docs-record[_ngcontent-%COMP%], \n   .docs-explainer[_ngcontent-%COMP%], \n   .docs-facts[_ngcontent-%COMP%] {\n    padding: 1.25rem;\n  }\n}\n/*# sourceMappingURL=documents-step.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HumanAuthnDocumentsStepComponent, [{
    type: Component,
    args: [{ selector: "human-authn-documents-step", standalone: true, imports: [
      CommonModule,
      ReactiveFormsModule,
      MatButtonModule,
      MatButtonToggleModule,
      MatCheckboxModule,
      MatDialogModule,
      MatFormFieldModule,
      MatIconModule,
      MatSelectModule,
      MatSlideToggleModule,
      MatTooltipModule,
      TranslocoModule,
      DocumentVerificationTypeListComponent
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `<ng-container *transloco="let t">\r
    @if (isFormReady) {\r
        <div class="docs-screen">\r
            <header class="docs-hero">\r
                <div>\r
                    <span class="docs-hero__eyebrow">{{ t('humanAuthnProjects.setup.documents.eyebrow') }}</span>\r
                    <h2>{{ t('humanAuthnProjects.setup.documents.title') }}</h2>\r
                    <p>{{ t('humanAuthnProjects.setup.documents.subtitle') }}</p>\r
                </div>\r
                <div class="docs-hero__choice">\r
                    <span>{{ t('humanAuthnProjects.setup.documents.currentChoice') }}</span>\r
                    <strong>{{ t('humanAuthnProjects.setup.documents.requirement.' + requirementValue) }}</strong>\r
                </div>\r
            </header>\r
\r
            <div class="docs-decision">\r
                <section class="docs-record">\r
                    <div class="section-heading">\r
                        <span>01</span>\r
                        <div>\r
                            <h3>{{ t('humanAuthnProjects.setup.documents.recordTitle') }}</h3>\r
                            <p>{{ t('humanAuthnProjects.setup.documents.recordHelp') }}</p>\r
                        </div>\r
                    </div>\r
\r
                    <div class="documents-journey">\r
                        <ol class="documents-timeline">\r
                            <li class="documents-stage">\r
                                <span class="documents-stage__marker" aria-hidden="true">1</span>\r
                                <section class="documents-panel" [formGroup]="stepFormGroup">\r
                                    <header class="documents-panel__header">\r
                                        <div>\r
                                            <span class="documents-panel__eyebrow">\r
                                                {{ t('smartEnrollProjects.setup.documents.journey.stage', { number: 1 }) }}\r
                                            </span>\r
                                            <h3>{{ t('smartEnrollProjects.setup.documents.journey.requirementTitle') }}</h3>\r
                                            <p>{{ t('humanAuthnProjects.setup.documents.requirementHelp') }}</p>\r
                                        </div>\r
                                        <span class="documents-panel__status">\r
                                            {{ t('humanAuthnProjects.setup.documents.requirement.' + requirementValue) }}\r
                                        </span>\r
                                    </header>\r
                                    <mat-button-toggle-group formControlName="document" class="requirement-options" [hideSingleSelectionIndicator]="true">\r
                                        @for (value of ['skip', 'optional', 'mandatory']; track value) {\r
                                            <mat-button-toggle [value]="value">\r
                                                <span class="requirement-option">\r
                                                    <strong>{{ t('humanAuthnProjects.setup.documents.requirement.' + value) }}</strong>\r
                                                    <small>{{ t('humanAuthnProjects.setup.documents.requirementDetail.' + value) }}</small>\r
                                                </span>\r
                                            </mat-button-toggle>\r
                                        }\r
                                    </mat-button-toggle-group>\r
                                </section>\r
                            </li>\r
\r
                            <ng-container [formGroup]="formGroup">\r
                                <li class="documents-stage">\r
                                    <span class="documents-stage__marker" aria-hidden="true">2</span>\r
                                    <section class="documents-panel" [class.documents-panel--error]="!isNotRequired && documentTypesErrorKeys.length">\r
                                        <header class="documents-panel__header">\r
                                            <div>\r
                                                <span class="documents-panel__eyebrow">\r
                                                    {{ t('smartEnrollProjects.setup.documents.journey.stage', { number: 2 }) }}\r
                                                </span>\r
                                                <h3>{{ t('smartEnrollProjects.setup.documents.types.title') }}</h3>\r
                                                <p>{{ t('humanAuthnProjects.setup.documents.typesHelp') }}</p>\r
                                            </div>\r
                                            <span class="documents-panel__status">\r
                                                {{\r
                                                    t('smartEnrollProjects.setup.documents.journey.documentSummary', {\r
                                                        countries: configuredCountriesCount,\r
                                                        documents: selectedDocumentsCount,\r
                                                    })\r
                                                }}\r
                                            </span>\r
                                        </header>\r
                                        @if (isNotRequired) {\r
                                            <div class="disabled-stage">\r
                                                <mat-icon>lock_outline</mat-icon>\r
                                                <span>{{ t('humanAuthnProjects.setup.documents.enableToConfigure') }}</span>\r
                                            </div>\r
                                        } @else {\r
                                            <div class="documents-panel__body">\r
                                                @if (documentTypesErrorKeys.length) {\r
                                                    <div class="validation-summary">\r
                                                        <mat-icon>error_outline</mat-icon>\r
                                                        <div>\r
                                                            @if (documentTypesErrorKeys.includes('atLeastOneDocumentVerificationTypeRequired')) {\r
                                                                <span>{{ t('smartEnrollProjects.setup.documents.types.errors.atLeastOne') }}</span>\r
                                                            }\r
                                                            @if (documentTypesErrorKeys.includes('duplicateCountriesNotAllowed')) {\r
                                                                <span>{{ t('smartEnrollProjects.setup.documents.types.errors.duplicateCountries') }}</span>\r
                                                            }\r
                                                            @if (documentTypesErrorKeys.includes('allDocumentVerificationTypesMustBeValid')) {\r
                                                                <span>{{ t('smartEnrollProjects.setup.documents.types.errors.allMustBeValid') }}</span>\r
                                                            }\r
                                                            @if (documentTypesErrorKeys.includes('emptyCountryValuesNotAllowed')) {\r
                                                                <span>{{ t('smartEnrollProjects.setup.documents.types.errors.emptyCountry') }}</span>\r
                                                            }\r
                                                        </div>\r
                                                    </div>\r
                                                }\r
                                                @if (documentTypesFormArray) {\r
                                                    <document-verification-type-list\r
                                                        class="document-editor"\r
                                                        [form]="form"\r
                                                        [documentTypes]="documentTypesFormArray"\r
                                                        target="personal"\r
                                                    ></document-verification-type-list>\r
                                                }\r
                                            </div>\r
                                        }\r
                                    </section>\r
                                </li>\r
\r
                                @let methodsCtrl = formGroup?.get('verificationMethods');\r
                                <li class="documents-stage">\r
                                    <span class="documents-stage__marker" aria-hidden="true">3</span>\r
                                    <section\r
                                        class="documents-panel"\r
                                        [class.documents-panel--error]="!isNotRequired && methodsCtrl?.dirty && methodsCtrl?.errors?.['required']"\r
                                    >\r
                                        <header class="documents-panel__header">\r
                                            <div>\r
                                                <span class="documents-panel__eyebrow">\r
                                                    {{ t('smartEnrollProjects.setup.documents.journey.stage', { number: 3 }) }}\r
                                                </span>\r
                                                <h3>{{ t('smartEnrollProjects.setup.documents.journey.collectionTitle') }}</h3>\r
                                                <p>{{ t('humanAuthnProjects.setup.documents.collectionHelp') }}</p>\r
                                            </div>\r
                                            <span class="documents-panel__status">\r
                                                {{\r
                                                    t('humanAuthnProjects.setup.documents.collectionSummary', {\r
                                                        methods: verificationMethodsValue.length,\r
                                                        attempts: attemptLimit,\r
                                                    })\r
                                                }}\r
                                            </span>\r
                                        </header>\r
                                        @if (isNotRequired) {\r
                                            <div class="disabled-stage">\r
                                                <mat-icon>lock_outline</mat-icon>\r
                                                <span>{{ t('humanAuthnProjects.setup.documents.enableToConfigure') }}</span>\r
                                            </div>\r
                                        } @else {\r
                                            <div class="documents-panel__body collection-policy">\r
                                                <div class="policy-section">\r
                                                    <div class="policy-section__copy">\r
                                                        <strong>{{ t('smartEnrollProjects.setup.documents.method.title') }}</strong>\r
                                                        <span>{{ t('smartEnrollProjects.setup.documents.method.help') }}</span>\r
                                                    </div>\r
                                                    <div class="method-options">\r
                                                        @for (method of verificationMethods; track method.value) {\r
                                                            <button\r
                                                                type="button"\r
                                                                class="method-option"\r
                                                                [class.method-option--selected]="isVerificationMethodSelected(method.value)"\r
                                                                (click)="toggleVerificationMethod(method.value)"\r
                                                            >\r
                                                                <mat-icon>{{ method.icon }}</mat-icon>\r
                                                                <span>{{ t(method.labelKey) }}</span>\r
                                                                @if (isVerificationMethodSelected(method.value)) {\r
                                                                    <mat-icon class="method-option__check">check_circle</mat-icon>\r
                                                                }\r
                                                            </button>\r
                                                        }\r
                                                    </div>\r
                                                    @if (methodsCtrl?.dirty && methodsCtrl?.errors?.['required']) {\r
                                                        <p class="field-error">{{ t('smartEnrollProjects.setup.documents.method.required') }}</p>\r
                                                    }\r
                                                </div>\r
                                                <div class="policy-section policy-section--attempts">\r
                                                    <div class="policy-section__copy">\r
                                                        <strong>{{ t('smartEnrollProjects.setup.documents.attempts.title') }}</strong>\r
                                                        <span>{{ t('smartEnrollProjects.setup.documents.attempts.subtitle') }}</span>\r
                                                    </div>\r
                                                    <mat-form-field appearance="outline" subscriptSizing="dynamic">\r
                                                        <mat-label>{{ t('smartEnrollProjects.setup.documents.attempts.limit') }}</mat-label>\r
                                                        <mat-select formControlName="attemptLimit" required>\r
                                                            @for (n of attemptOptions; track n) {\r
                                                                <mat-option [value]="n">\r
                                                                    {{\r
                                                                        n === 1\r
                                                                            ? t('smartEnrollProjects.setup.documents.attempts.one')\r
                                                                            : t('smartEnrollProjects.setup.documents.attempts.many', { count: n })\r
                                                                    }}\r
                                                                </mat-option>\r
                                                            }\r
                                                        </mat-select>\r
                                                    </mat-form-field>\r
                                                </div>\r
                                            </div>\r
                                        }\r
                                    </section>\r
                                </li>\r
\r
                                <li class="documents-stage">\r
                                    <span class="documents-stage__marker" aria-hidden="true">4</span>\r
                                    <section class="documents-panel" [class.documents-panel--error]="!isNotRequired && formGroup?.errors?.['screeningRequiresVerification']">\r
                                        <header class="documents-panel__header">\r
                                            <div>\r
                                                <span class="documents-panel__eyebrow">\r
                                                    {{ t('smartEnrollProjects.setup.documents.journey.stage', { number: 4 }) }}\r
                                                </span>\r
                                                <h3>{{ t('smartEnrollProjects.setup.documents.journey.screeningTitle') }}</h3>\r
                                                <p>{{ t('humanAuthnProjects.setup.documents.screeningHelp') }}</p>\r
                                            </div>\r
                                            <span class="documents-panel__status">\r
                                                {{\r
                                                    screeningOn\r
                                                        ? t('smartEnrollProjects.setup.documents.journey.screeningSummary', { count: screeningChecksCount })\r
                                                        : t('humanAuthnProjects.setup.documents.screeningOffLabel')\r
                                                }}\r
                                            </span>\r
                                        </header>\r
                                        @if (isNotRequired) {\r
                                            <div class="disabled-stage">\r
                                                <mat-icon>lock_outline</mat-icon>\r
                                                <span>{{ t('humanAuthnProjects.setup.documents.enableToConfigure') }}</span>\r
                                            </div>\r
                                        } @else {\r
                                            <div class="documents-panel__body">\r
                                                <div class="setting-row">\r
                                                    <div class="setting-row__copy">\r
                                                        <mat-icon>manage_search</mat-icon>\r
                                                        <div>\r
                                                            <strong>{{ t('smartEnrollProjects.setup.documents.screening.title') }}</strong>\r
                                                            <span>{{ t('humanAuthnProjects.setup.documents.screeningToggleHelp') }}</span>\r
                                                        </div>\r
                                                    </div>\r
                                                    <mat-slide-toggle formControlName="screening"></mat-slide-toggle>\r
                                                </div>\r
                                                @if (screeningOn) {\r
                                                    @if (formGroup?.errors?.['screeningRequiresVerification']) {\r
                                                        <p class="field-error">{{ t('smartEnrollProjects.setup.documents.screening.requiresVerification') }}</p>\r
                                                    }\r
                                                    <div class="screening-options">\r
                                                        <label class="screening-option">\r
                                                            <mat-checkbox formControlName="informationVerification"></mat-checkbox>\r
                                                            <mat-icon>account_balance</mat-icon>\r
                                                            <span>\r
                                                                <strong>{{ t('smartEnrollProjects.setup.documents.screening.informationVerification') }}</strong>\r
                                                                <small>{{ t('smartEnrollProjects.setup.documents.screening.informationVerificationDescription') }}</small>\r
                                                            </span>\r
                                                        </label>\r
                                                        <label class="screening-option">\r
                                                            <mat-checkbox formControlName="criminalHistoryVerification"></mat-checkbox>\r
                                                            <mat-icon>security</mat-icon>\r
                                                            <span>\r
                                                                <strong>{{ t('smartEnrollProjects.setup.documents.screening.criminalHistory') }}</strong>\r
                                                                <small>{{ t('smartEnrollProjects.setup.documents.screening.criminalHistoryDescription') }}</small>\r
                                                            </span>\r
                                                        </label>\r
                                                    </div>\r
                                                    @if (formGroup?.get('criminalHistoryVerification')?.value) {\r
                                                        <div class="criminal-check-catalog">\r
                                                            <div class="criminal-check-catalog__intro">\r
                                                                <div>\r
                                                                    <span>{{ t('smartEnrollProjects.setup.documents.screening.catalogEyebrow') }}</span>\r
                                                                    <h4>{{ t('smartEnrollProjects.setup.documents.screening.catalogTitle') }}</h4>\r
                                                                </div>\r
                                                                <p>{{ t('smartEnrollProjects.setup.documents.screening.catalogDescription') }}</p>\r
                                                            </div>\r
                                                            @for (section of countryCheckSections; track section.country) {\r
                                                                <section class="check-scope">\r
                                                                    <header class="check-scope__header">\r
                                                                        <div>\r
                                                                            <span class="check-scope__badge">\r
                                                                                {{ t('smartEnrollProjects.setup.documents.screening.countryChecks') }}\r
                                                                            </span>\r
                                                                            <h5>{{ section.country }}</h5>\r
                                                                        </div>\r
                                                                        <p>{{ t('smartEnrollProjects.setup.documents.screening.countryDescription', { country: section.country }) }}</p>\r
                                                                    </header>\r
                                                                    @if (section.checks.length) {\r
                                                                        <div class="check-card-grid">\r
                                                                            @for (check of section.checks; track check.value) {\r
                                                                                <label class="check-card" [class.check-card--selected]="isEndpointSelected(check.value)">\r
                                                                                    <mat-checkbox\r
                                                                                        [checked]="isEndpointSelected(check.value)"\r
                                                                                        (change)="toggleCriminalEndpoint(check.value)"\r
                                                                                    ></mat-checkbox>\r
                                                                                    <span class="check-card__copy">\r
                                                                                        <strong>{{ t(check.titleKey) }}</strong>\r
                                                                                        <small>{{ t(check.descriptionKey) }}</small>\r
                                                                                        <button\r
                                                                                            type="button"\r
                                                                                            class="check-card__source"\r
                                                                                            [matTooltip]="t('smartEnrollProjects.setup.documents.screening.aboutTooltip')"\r
                                                                                            matTooltipPosition="above"\r
                                                                                            (click)="openCheckDetails($event, check)"\r
                                                                                        >\r
                                                                                            {{ t(check.sourceKey) }}\r
                                                                                        </button>\r
                                                                                    </span>\r
                                                                                </label>\r
                                                                            }\r
                                                                        </div>\r
                                                                    } @else {\r
                                                                        <div class="check-scope__empty">\r
                                                                            <mat-icon>info_outline</mat-icon>\r
                                                                            <span>{{ t('smartEnrollProjects.setup.documents.screening.noCountryChecks') }}</span>\r
                                                                        </div>\r
                                                                    }\r
                                                                </section>\r
                                                            }\r
                                                            <section class="check-scope check-scope--international">\r
                                                                <span class="check-scope__badge check-scope__badge--floating">\r
                                                                    {{ t('smartEnrollProjects.setup.documents.screening.globalChecks') }}\r
                                                                </span>\r
                                                                <header class="check-scope__header">\r
                                                                    <div>\r
                                                                        <h5>{{ t('smartEnrollProjects.setup.documents.screening.internationalTitle') }}</h5>\r
                                                                    </div>\r
                                                                    <p>{{ t('smartEnrollProjects.setup.documents.screening.internationalDescription') }}</p>\r
                                                                </header>\r
                                                                <div class="check-card-grid">\r
                                                                    @for (check of internationalChecks; track check.value) {\r
                                                                        <label class="check-card" [class.check-card--selected]="isEndpointSelected(check.value)">\r
                                                                            <mat-checkbox\r
                                                                                [checked]="isEndpointSelected(check.value)"\r
                                                                                (change)="toggleCriminalEndpoint(check.value)"\r
                                                                            ></mat-checkbox>\r
                                                                            <span class="check-card__copy">\r
                                                                                <strong>{{ t(check.titleKey) }}</strong>\r
                                                                                <small>{{ t(check.descriptionKey) }}</small>\r
                                                                                <button\r
                                                                                    type="button"\r
                                                                                    class="check-card__source"\r
                                                                                    [matTooltip]="t('smartEnrollProjects.setup.documents.screening.aboutTooltip')"\r
                                                                                    matTooltipPosition="above"\r
                                                                                    (click)="openCheckDetails($event, check)"\r
                                                                                >\r
                                                                                    {{ t(check.sourceKey) }}\r
                                                                                </button>\r
                                                                            </span>\r
                                                                        </label>\r
                                                                    }\r
                                                                </div>\r
                                                            </section>\r
                                                        </div>\r
                                                    }\r
                                                }\r
                                            </div>\r
                                        }\r
                                    </section>\r
                                </li>\r
                            </ng-container>\r
                        </ol>\r
                    </div>\r
                </section>\r
\r
                <aside class="docs-explainer" aria-live="polite">\r
                    <div class="section-heading section-heading--light">\r
                        <span>02</span>\r
                        <div>\r
                            <h3>{{ t('humanAuthnProjects.setup.documents.howTitle') }}</h3>\r
                            <p>{{ t('humanAuthnProjects.setup.documents.howHelp') }}</p>\r
                        </div>\r
                    </div>\r
                    <ol class="docs-flow">\r
                        <li>\r
                            <mat-icon>assignment</mat-icon>\r
                            <span>{{ t('humanAuthnProjects.setup.documents.requirement.' + requirementValue) }}</span>\r
                        </li>\r
                        <li>\r
                            <mat-icon>public</mat-icon>\r
                            <span>\r
                                {{\r
                                    isNotRequired\r
                                        ? t('humanAuthnProjects.setup.documents.notCollected')\r
                                        : t('humanAuthnProjects.setup.documents.typesSummary', {\r
                                              countries: configuredCountriesCount,\r
                                              documents: selectedDocumentsCount,\r
                                          })\r
                                }}\r
                            </span>\r
                        </li>\r
                        <li>\r
                            <mat-icon>photo_camera</mat-icon>\r
                            <span>\r
                                {{\r
                                    isNotRequired\r
                                        ? t('humanAuthnProjects.setup.documents.notCollected')\r
                                        : t('humanAuthnProjects.setup.documents.collectionSummary', {\r
                                              methods: verificationMethodsValue.length,\r
                                              attempts: attemptLimit,\r
                                          })\r
                                }}\r
                            </span>\r
                        </li>\r
                        <li class="docs-flow__result">\r
                            <mat-icon>{{ screeningOn && !isNotRequired ? 'manage_search' : 'lock' }}</mat-icon>\r
                            <span>\r
                                {{\r
                                    t(\r
                                        screeningOn && !isNotRequired\r
                                            ? 'humanAuthnProjects.setup.documents.screeningOnLabel'\r
                                            : 'humanAuthnProjects.setup.documents.screeningOffLabel'\r
                                    )\r
                                }}\r
                            </span>\r
                        </li>\r
                    </ol>\r
                    <div class="docs-path">\r
                        <span class="docs-path__label">{{ t('humanAuthnProjects.setup.documents.selectedPath') }}</span>\r
                        <h4>{{ t('humanAuthnProjects.setup.documents.path.' + requirementValue + 'Title') }}</h4>\r
                        <p>{{ t('humanAuthnProjects.setup.documents.path.' + requirementValue + 'Body') }}</p>\r
                        <div class="docs-path__result">\r
                            <mat-icon>{{ screeningOn && !isNotRequired ? 'manage_search' : 'description' }}</mat-icon>\r
                            <span>\r
                                {{\r
                                    t(\r
                                        screeningOn && !isNotRequired\r
                                            ? 'humanAuthnProjects.setup.documents.screeningOn'\r
                                            : 'humanAuthnProjects.setup.documents.screeningOff'\r
                                    )\r
                                }}\r
                            </span>\r
                        </div>\r
                    </div>\r
                </aside>\r
            </div>\r
\r
            <section class="docs-facts">\r
                <div class="section-heading">\r
                    <span>03</span>\r
                    <div>\r
                        <h3>{{ t('humanAuthnProjects.setup.documents.factsTitle') }}</h3>\r
                        <p>{{ t('humanAuthnProjects.setup.documents.factsHelp') }}</p>\r
                    </div>\r
                </div>\r
                <div class="fact-items">\r
                    <article>\r
                        <span class="fact-items__icon fact-items__icon--compare"><mat-icon>face</mat-icon></span>\r
                        <div>\r
                            <strong>{{ t('humanAuthnProjects.setup.documents.factCompareTitle') }}</strong>\r
                            <p>{{ t('humanAuthnProjects.setup.documents.factCompareBody') }}</p>\r
                        </div>\r
                    </article>\r
                    <article>\r
                        <span class="fact-items__icon fact-items__icon--types"><mat-icon>public</mat-icon></span>\r
                        <div>\r
                            <strong>{{ t('humanAuthnProjects.setup.documents.factTypesTitle') }}</strong>\r
                            <p>{{ t('humanAuthnProjects.setup.documents.factTypesBody') }}</p>\r
                        </div>\r
                    </article>\r
                    <article>\r
                        <span class="fact-items__icon fact-items__icon--screening"><mat-icon>manage_search</mat-icon></span>\r
                        <div>\r
                            <strong>{{ t('humanAuthnProjects.setup.documents.factScreeningTitle') }}</strong>\r
                            <p>{{ t('humanAuthnProjects.setup.documents.factScreeningBody') }}</p>\r
                        </div>\r
                    </article>\r
                </div>\r
            </section>\r
        </div>\r
    }\r
\r
    <ng-template #checkDetailsDialog>\r
        @if (selectedCheck) {\r
            <div class="flex max-h-[90vh] flex-col overflow-hidden rounded-lg bg-white dark:bg-gray-900">\r
                <div class="flex items-start justify-between gap-4 border-b border-stone-200 bg-stone-50 p-5 dark:border-gray-700 dark:bg-gray-900/60">\r
                    <div class="flex min-w-0 flex-col items-start gap-2">\r
                        <span class="check-card__source">{{ t(selectedCheck.sourceKey) }}</span>\r
                        <h2 class="m-0 text-lg font-semibold text-stone-900 dark:text-white">{{ t(selectedCheck.titleKey) }}</h2>\r
                    </div>\r
                    <button mat-icon-button mat-dialog-close>\r
                        <mat-icon>close</mat-icon>\r
                    </button>\r
                </div>\r
                <div class="flex-1 overflow-y-auto p-5">\r
                    <p class="m-0 text-sm leading-relaxed text-stone-600 dark:text-stone-300">{{ t(selectedCheck.aboutKey) }}</p>\r
                </div>\r
                <div class="flex flex-wrap justify-end gap-2 border-t border-stone-200 p-4 dark:border-gray-700">\r
                    <a mat-stroked-button [href]="docsUrl(selectedCheck)" target="_blank" rel="noopener noreferrer">\r
                        {{ t('smartEnrollProjects.setup.documents.screening.readDocs') }}\r
                    </a>\r
                    <a mat-flat-button color="primary" [href]="postmanUrl(selectedCheck)" target="_blank" rel="noopener noreferrer">\r
                        {{ t('smartEnrollProjects.setup.documents.screening.tryInPostman') }}\r
                    </a>\r
                </div>\r
            </div>\r
        }\r
    </ng-template>\r
</ng-container>\r
`, styles: ['/* src/app/modules/smart-enroll/projects/setup/steps/documents/documents.component.scss */\n:host {\n  display: block;\n}\n.documents-journey {\n  margin-inline: auto;\n  width: min(100%, 58rem);\n}\n.documents-intro {\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n  margin-bottom: 2rem;\n  padding: 1.25rem 1.5rem;\n  border: 1px solid rgba(214, 211, 209, 0.8);\n  border-radius: 1.25rem;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.96),\n      rgba(245, 245, 244, 0.72));\n}\n.documents-intro h2 {\n  margin: 0;\n  color: #1c1917;\n  font-size: 1.05rem;\n  font-weight: 650;\n  letter-spacing: -0.015em;\n}\n.documents-intro p {\n  max-width: 46rem;\n  margin: 0.3rem 0 0;\n  color: #78716c;\n  font-size: 0.78rem;\n  line-height: 1.55;\n}\n.documents-intro__icon {\n  display: grid;\n  flex: 0 0 2.5rem;\n  width: 2.5rem;\n  height: 2.5rem;\n  place-items: center;\n  border-radius: 0.8rem;\n  background: #1c1917;\n  color: white;\n}\n.documents-intro__icon mat-icon {\n  width: 1.25rem;\n  height: 1.25rem;\n  font-size: 1.25rem;\n}\n.documents-timeline {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.documents-timeline::before {\n  position: absolute;\n  top: 1.15rem;\n  bottom: 1.15rem;\n  left: 1.15rem;\n  width: 1px;\n  background: linear-gradient(#292524, #d6d3d1);\n  content: "";\n}\n.documents-stage {\n  position: relative;\n  display: grid;\n  grid-template-columns: 2.3rem minmax(0, 1fr);\n  gap: 1rem;\n}\n.documents-stage__marker {\n  z-index: 1;\n  display: grid;\n  width: 2.3rem;\n  height: 2.3rem;\n  place-items: center;\n  border: 4px solid #fafaf9;\n  border-radius: 999px;\n  background: #292524;\n  color: white;\n  font-size: 0.75rem;\n  font-weight: 700;\n}\n.documents-panel {\n  overflow: hidden;\n  border: 1px solid rgba(214, 211, 209, 0.9);\n  border-radius: 1.25rem;\n  background: white;\n  box-shadow: 0 1px 2px rgba(28, 25, 23, 0.03), 0 12px 30px rgba(28, 25, 23, 0.035);\n}\n.documents-panel--error {\n  border-color: #f87171;\n}\n.documents-panel__header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 1rem;\n  padding: 1.4rem 1.5rem 1.25rem;\n  border-bottom: 1px solid #f5f5f4;\n}\n.documents-panel__header h3 {\n  margin: 0.15rem 0 0;\n  color: #1c1917;\n  font-size: 1.05rem;\n  font-weight: 650;\n  letter-spacing: -0.015em;\n}\n.documents-panel__header p {\n  max-width: 39rem;\n  margin: 0.35rem 0 0;\n  color: #78716c;\n  font-size: 0.76rem;\n  line-height: 1.5;\n}\n.documents-panel__eyebrow {\n  color: #a8a29e;\n  font-size: 0.64rem;\n  font-weight: 700;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n}\n.documents-panel__status {\n  flex: 0 0 auto;\n  padding: 0.35rem 0.65rem;\n  border-radius: 999px;\n  background: #f5f5f4;\n  color: #57534e;\n  font-size: 0.68rem;\n  font-weight: 650;\n  white-space: nowrap;\n}\n.documents-panel__body {\n  padding: 1.25rem 1.5rem 1.5rem;\n}\n.requirement-options {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 0.75rem;\n  width: auto;\n  margin: 1.25rem 1.5rem 1.5rem;\n  border: 0;\n}\n.requirement-options ::ng-deep .mat-button-toggle {\n  border: 1px solid #e7e5e4;\n  border-radius: 0.9rem;\n  background: #fafaf9;\n}\n.requirement-options ::ng-deep .mat-button-toggle-checked {\n  border-color: #292524;\n  background: #f5f5f4;\n  box-shadow: inset 0 0 0 1px #292524;\n}\n.requirement-options ::ng-deep .mat-button-toggle-label-content {\n  width: 100%;\n  padding: 0.9rem 1rem;\n  line-height: normal;\n  white-space: normal;\n}\n.requirement-option {\n  display: flex;\n  min-height: 3.2rem;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 0.3rem;\n  text-align: left;\n}\n.requirement-option strong {\n  color: #292524;\n  font-size: 0.8rem;\n  font-weight: 650;\n}\n.requirement-option small {\n  color: #78716c;\n  font-size: 0.66rem;\n  line-height: 1.35;\n}\n.setting-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1.5rem;\n  margin: 1.25rem 1.5rem 1.5rem;\n}\n.setting-row__copy {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.85rem;\n}\n.setting-row__copy > mat-icon {\n  margin-top: 0.1rem;\n  color: #78716c;\n}\n.setting-row__copy div {\n  display: flex;\n  flex-direction: column;\n  gap: 0.2rem;\n}\n.setting-row__copy strong {\n  color: #292524;\n  font-size: 0.84rem;\n  font-weight: 650;\n}\n.setting-row__copy span {\n  color: #78716c;\n  font-size: 0.72rem;\n  line-height: 1.45;\n}\n.disabled-stage {\n  display: flex;\n  align-items: center;\n  gap: 0.65rem;\n  margin: 1.25rem 1.5rem 1.5rem;\n  padding: 0.9rem 1rem;\n  border: 1px dashed #d6d3d1;\n  border-radius: 0.85rem;\n  background: #fafaf9;\n  color: #78716c;\n  font-size: 0.72rem;\n}\n.disabled-stage mat-icon {\n  width: 1rem;\n  height: 1rem;\n  color: #a8a29e;\n  font-size: 1rem;\n}\n.validation-summary {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.65rem;\n  margin-bottom: 1rem;\n  padding: 0.8rem 0.9rem;\n  border-radius: 0.75rem;\n  background: #fef2f2;\n  color: #b91c1c;\n  font-size: 0.72rem;\n}\n.validation-summary mat-icon {\n  width: 1rem;\n  height: 1rem;\n  font-size: 1rem;\n}\n.validation-summary div {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.document-editor {\n  display: block;\n}\n::ng-deep .document-editor [id^=doc-country-] {\n  border-radius: 0.9rem !important;\n  background: #fafaf9 !important;\n  box-shadow: none;\n}\n::ng-deep .document-editor [id^=doc-country-] > div:first-child {\n  align-items: center;\n}\n::ng-deep .document-editor [id^=doc-country-] [mat-stroked-button] {\n  min-height: 2.2rem;\n}\n::ng-deep .document-editor > div > button[mat-stroked-button] {\n  margin-top: 0.25rem;\n  border-style: dashed;\n}\n.collection-policy,\n.policy-section,\n.policy-section__copy {\n  display: flex;\n  flex-direction: column;\n}\n.collection-policy {\n  gap: 1.25rem;\n}\n.policy-section {\n  gap: 0.8rem;\n}\n.policy-section + .policy-section {\n  padding-top: 1.25rem;\n  border-top: 1px solid #f5f5f4;\n}\n.policy-section__copy {\n  gap: 0.2rem;\n}\n.policy-section__copy strong {\n  color: #292524;\n  font-size: 0.84rem;\n  font-weight: 650;\n}\n.policy-section__copy span {\n  color: #78716c;\n  font-size: 0.72rem;\n  line-height: 1.45;\n}\n.policy-section--attempts {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) minmax(12rem, 15rem);\n  align-items: center;\n  gap: 1.5rem;\n}\n.policy-section--attempts mat-form-field {\n  width: 100%;\n}\n.method-options {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 0.75rem;\n}\n.method-option {\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  min-height: 3.6rem;\n  padding: 0.8rem 0.9rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 0.85rem;\n  background: #fafaf9;\n  color: #57534e;\n  text-align: left;\n  transition:\n    border-color 160ms ease,\n    background-color 160ms ease,\n    transform 160ms ease;\n}\n.method-option:hover {\n  border-color: #a8a29e;\n  background: white;\n  transform: translateY(-1px);\n}\n.method-option > mat-icon {\n  color: #78716c;\n}\n.method-option--selected {\n  border-color: #292524;\n  background: #f5f5f4;\n  box-shadow: inset 0 0 0 1px #292524;\n  color: #292524;\n  font-weight: 650;\n}\n.method-option__check {\n  margin-left: auto;\n  color: #166534 !important;\n}\n.field-error {\n  margin: 0;\n  color: #dc2626;\n  font-size: 0.72rem;\n}\n.screening-options {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 0.75rem;\n  margin-top: 1.25rem;\n}\n.screening-option {\n  display: grid;\n  grid-template-columns: auto auto minmax(0, 1fr);\n  align-items: flex-start;\n  gap: 0.65rem;\n  min-height: 5rem;\n  padding: 0.9rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 0.9rem;\n  background: #fafaf9;\n}\n.screening-option > mat-icon {\n  margin-top: 0.2rem;\n  color: #78716c;\n}\n.screening-option > span {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.screening-option strong {\n  color: #292524;\n  font-size: 0.78rem;\n  font-weight: 650;\n}\n.screening-option small {\n  color: #78716c;\n  font-size: 0.66rem;\n  line-height: 1.4;\n}\n.criminal-check-catalog {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  margin-top: 1rem;\n  padding: 1rem;\n  border: 1px solid #d6d3d1;\n  border-radius: 1rem;\n  background: #fafaf9;\n}\n.criminal-check-catalog__intro {\n  display: flex;\n  align-items: end;\n  justify-content: space-between;\n  gap: 1.5rem;\n  padding: 0.15rem 0.2rem 0.25rem;\n}\n.criminal-check-catalog__intro > div {\n  flex: 0 0 auto;\n}\n.criminal-check-catalog__intro span {\n  color: #2563eb;\n  font-size: 0.64rem;\n  font-weight: 750;\n  letter-spacing: 0.11em;\n  text-transform: uppercase;\n}\n.criminal-check-catalog__intro h4 {\n  margin: 0.18rem 0 0;\n  color: #1c1917;\n  font-size: 1rem;\n  font-weight: 700;\n  letter-spacing: -0.015em;\n}\n.criminal-check-catalog__intro p {\n  max-width: 31rem;\n  margin: 0;\n  color: #78716c;\n  font-size: 0.72rem;\n  line-height: 1.5;\n  text-align: right;\n}\n.check-scope {\n  padding: 1rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 0.9rem;\n  background: #fff;\n}\n.check-scope--international {\n  position: relative;\n  margin-top: 0.35rem;\n  border-color: #dbeafe;\n  background: #f8fbff;\n}\n.check-scope__header {\n  display: grid;\n  grid-template-columns: minmax(10rem, 0.7fr) minmax(14rem, 1.3fr);\n  gap: 1rem;\n  align-items: end;\n  margin-bottom: 0.85rem;\n}\n.check-scope__header > div {\n  display: flex;\n  align-items: center;\n  gap: 0.65rem;\n}\n.check-scope__header h5 {\n  margin: 0;\n  color: #292524;\n  font-size: 0.86rem;\n  font-weight: 700;\n}\n.check-scope__header p {\n  margin: 0;\n  color: #78716c;\n  font-size: 0.68rem;\n  line-height: 1.45;\n  text-align: right;\n}\n.check-scope__badge,\n.check-card__source {\n  display: inline-flex;\n  width: fit-content;\n  align-items: center;\n  border-radius: 999px;\n  font-size: 0.58rem;\n  font-weight: 700;\n  letter-spacing: 0.045em;\n  text-transform: uppercase;\n}\n.check-scope__badge {\n  padding: 0.25rem 0.48rem;\n  background: #e7e5e4;\n  color: #57534e;\n}\n.check-scope--international > .check-scope__badge {\n  position: absolute;\n  top: 0;\n  left: 1rem;\n  z-index: 1;\n  transform: translateY(-50%);\n  white-space: nowrap;\n  border: 1px solid #bfdbfe;\n  background: #f8fbff;\n  color: #1d4ed8;\n}\n.check-card-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 0.65rem;\n}\n.check-card {\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr);\n  gap: 0.65rem;\n  min-height: 7rem;\n  padding: 0.8rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 0.78rem;\n  background: #fff;\n  cursor: pointer;\n  transition:\n    border-color 160ms ease,\n    box-shadow 160ms ease,\n    transform 160ms ease;\n}\n.check-card:hover {\n  border-color: #a8a29e;\n  box-shadow: 0 5px 16px rgba(28, 25, 23, 0.06);\n  transform: translateY(-1px);\n}\n.check-card--selected {\n  border-color: #93c5fd;\n  box-shadow: inset 0 0 0 1px #bfdbfe;\n}\n.check-card__copy {\n  display: flex;\n  min-width: 0;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 0.3rem;\n}\n.check-card__copy strong {\n  color: #292524;\n  font-size: 0.76rem;\n  font-weight: 700;\n}\n.check-card__copy small {\n  color: #78716c;\n  font-size: 0.65rem;\n  line-height: 1.45;\n}\n.check-card__source {\n  margin-top: auto;\n  padding: 0.22rem 0.43rem;\n  background: #eff6ff;\n  color: #1d4ed8;\n}\nbutton.check-card__source {\n  border: 0;\n  font-family: inherit;\n  line-height: 1.2;\n  cursor: pointer;\n}\nbutton.check-card__source:hover,\nbutton.check-card__source:focus-visible {\n  background: #dbeafe;\n  outline: 2px solid #93c5fd;\n  outline-offset: 2px;\n}\n.check-scope__empty {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem;\n  border-radius: 0.65rem;\n  background: #f5f5f4;\n  color: #78716c;\n  font-size: 0.7rem;\n}\n.check-scope__empty mat-icon {\n  width: 1rem;\n  height: 1rem;\n  font-size: 1rem;\n}\n:host-context(.dark) .documents-intro,\n:host-context(.dark) .documents-panel {\n  border-color: #374151;\n  background: #111827;\n}\n:host-context(.dark) .documents-intro h2,\n:host-context(.dark) .documents-panel__header h3,\n:host-context(.dark) .requirement-option strong,\n:host-context(.dark) .setting-row__copy strong,\n:host-context(.dark) .policy-section__copy strong,\n:host-context(.dark) .screening-option strong {\n  color: #f9fafb;\n}\n:host-context(.dark) .documents-intro p,\n:host-context(.dark) .documents-panel__header p,\n:host-context(.dark) .requirement-option small,\n:host-context(.dark) .setting-row__copy span,\n:host-context(.dark) .policy-section__copy span,\n:host-context(.dark) .screening-option small {\n  color: #9ca3af;\n}\n:host-context(.dark) .documents-stage__marker {\n  border-color: #030712;\n  background: #f3f4f6;\n  color: #111827;\n}\n:host-context(.dark) .documents-timeline::before {\n  background: linear-gradient(#f3f4f6, #374151);\n}\n:host-context(.dark) .documents-panel__header,\n:host-context(.dark) .policy-section + .policy-section {\n  border-color: #1f2937;\n}\n:host-context(.dark) .documents-panel__status,\n:host-context(.dark) .disabled-stage,\n:host-context(.dark) .method-option,\n:host-context(.dark) .screening-option,\n:host-context(.dark) .criminal-check-catalog,\n:host-context(.dark) .check-scope,\n:host-context(.dark) .requirement-options ::ng-deep .mat-button-toggle {\n  border-color: #374151;\n  background: #1f2937;\n  color: #d1d5db;\n}\n:host-context(.dark) .requirement-options ::ng-deep .mat-button-toggle-checked,\n:host-context(.dark) .method-option--selected {\n  border-color: #d1d5db;\n  background: #374151;\n  box-shadow: inset 0 0 0 1px #d1d5db;\n  color: #f9fafb;\n}\n:host-context(.dark) .check-scope--international,\n:host-context(.dark) .check-card {\n  border-color: #4b5563;\n  background: #111827;\n}\n:host-context(.dark) .check-card--selected {\n  border-color: #60a5fa;\n  box-shadow: inset 0 0 0 1px #1d4ed8;\n}\n:host-context(.dark) .criminal-check-catalog__intro h4,\n:host-context(.dark) .check-scope__header h5,\n:host-context(.dark) .check-card__copy strong {\n  color: #f9fafb;\n}\n:host-context(.dark) .criminal-check-catalog__intro p,\n:host-context(.dark) .check-scope__header p,\n:host-context(.dark) .check-card__copy small {\n  color: #9ca3af;\n}\n:host-context(.dark) .check-scope__badge,\n:host-context(.dark) .check-scope__empty {\n  background: #374151;\n  color: #d1d5db;\n}\n:host-context(.dark) .check-scope__badge--floating {\n  border-color: #1d4ed8;\n  background: #111827;\n  color: #bfdbfe;\n}\n:host-context(.dark) .check-card__source {\n  background: #1e3a8a;\n  color: #dbeafe;\n}\n:host-context(.dark) button.check-card__source:hover,\n:host-context(.dark) button.check-card__source:focus-visible {\n  background: #1d4ed8;\n  outline-color: #93c5fd;\n}\n:host-context(.dark) .validation-summary {\n  background: rgba(127, 29, 29, 0.35);\n  color: #fecaca;\n}\n:host-context(.dark) ::ng-deep .document-editor [id^=doc-country-] {\n  border-color: #374151 !important;\n  background: #1f2937 !important;\n}\n@media (max-width: 720px) {\n  .documents-intro {\n    margin-bottom: 1.5rem;\n  }\n  .documents-timeline::before {\n    display: none;\n  }\n  .documents-stage {\n    display: block;\n  }\n  .documents-stage__marker {\n    margin: 0 0 -0.7rem 1rem;\n  }\n  .documents-panel__header {\n    padding-top: 1.7rem;\n  }\n  .requirement-options,\n  .method-options,\n  .screening-options,\n  .check-card-grid,\n  .check-scope__header,\n  .policy-section--attempts {\n    grid-template-columns: 1fr;\n  }\n  .criminal-check-catalog__intro {\n    align-items: flex-start;\n    flex-direction: column;\n    gap: 0.5rem;\n  }\n  .criminal-check-catalog__intro p {\n    text-align: left;\n  }\n  .check-scope__header p {\n    text-align: left;\n  }\n  .documents-panel__header,\n  .setting-row {\n    align-items: flex-start;\n  }\n}\n/*# sourceMappingURL=documents.component.css.map */\n', "/* src/app/modules/human-authn/projects/setup/steps/documents-step.component.scss */\n:host {\n  display: block;\n}\n.documents-journey {\n  width: 100%;\n  margin: 0;\n}\n.docs-screen {\n  margin-inline: auto;\n  width: min(100%, 76rem);\n}\n.docs-hero {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 2rem;\n  margin-bottom: 2rem;\n  padding: 0.5rem 0.25rem;\n}\n.docs-hero h2 {\n  max-width: 42rem;\n  margin: 0.35rem 0 0;\n  color: #1c1917;\n  font-size: clamp(1.75rem, 3vw, 2.55rem);\n  font-weight: 680;\n  letter-spacing: -0.045em;\n  line-height: 1.05;\n}\n.docs-hero p {\n  max-width: 42rem;\n  margin: 0.75rem 0 0;\n  color: #78716c;\n  font-size: 0.88rem;\n  line-height: 1.6;\n}\n.docs-hero__eyebrow {\n  color: #78716c;\n  font-size: 0.65rem;\n  font-weight: 750;\n  letter-spacing: 0.16em;\n  text-transform: uppercase;\n}\n.docs-hero__choice {\n  display: flex;\n  flex: 0 0 auto;\n  flex-direction: column;\n  align-items: flex-end;\n  max-width: 16rem;\n  padding: 0.75rem 1rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 0.9rem;\n  background: white;\n}\n.docs-hero__choice span {\n  color: #a8a29e;\n  font-size: 0.62rem;\n  font-weight: 650;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n.docs-hero__choice strong {\n  margin-top: 0.15rem;\n  color: #292524;\n  font-size: 0.82rem;\n}\n.docs-decision {\n  display: grid;\n  grid-template-columns: minmax(0, 1.35fr) minmax(18rem, 0.65fr);\n  overflow: hidden;\n  border: 1px solid #d6d3d1;\n  border-radius: 1.5rem;\n  background: white;\n  box-shadow: 0 1px 2px rgba(28, 25, 23, 0.03), 0 18px 45px rgba(28, 25, 23, 0.05);\n}\n.docs-record,\n.docs-explainer,\n.docs-facts {\n  padding: 1.75rem;\n}\n.docs-explainer {\n  background: #1c1917;\n  color: white;\n}\n.section-heading {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.8rem;\n  margin-bottom: 1.25rem;\n}\n.section-heading > span {\n  display: grid;\n  flex: 0 0 1.8rem;\n  width: 1.8rem;\n  height: 1.8rem;\n  place-items: center;\n  border-radius: 999px;\n  background: #292524;\n  color: white;\n  font-size: 0.62rem;\n  font-weight: 750;\n}\n.section-heading h3 {\n  margin: 0;\n  color: #292524;\n  font-size: 0.95rem;\n  font-weight: 680;\n}\n.section-heading p {\n  margin: 0.25rem 0 0;\n  color: #78716c;\n  font-size: 0.72rem;\n  line-height: 1.45;\n}\n.section-heading--light > span {\n  background: white;\n  color: #1c1917;\n}\n.section-heading--light h3 {\n  color: white;\n}\n.section-heading--light p {\n  color: #a8a29e;\n}\n.docs-flow {\n  display: flex;\n  flex-direction: column;\n  gap: 0.55rem;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.docs-flow li {\n  display: flex;\n  align-items: center;\n  gap: 0.7rem;\n  padding: 0.7rem 0.8rem;\n  border: 1px solid #44403c;\n  border-radius: 0.8rem;\n  background: #292524;\n}\n.docs-flow li mat-icon {\n  width: 1.15rem;\n  height: 1.15rem;\n  color: #e7e5e4;\n  font-size: 1.15rem;\n}\n.docs-flow li span {\n  color: #f5f5f4;\n  font-size: 0.75rem;\n  font-weight: 650;\n}\n.docs-flow__result {\n  border-color: #e7e5e4;\n  background: white;\n}\n.docs-flow__result mat-icon,\n.docs-flow__result span {\n  color: #1c1917;\n}\n.docs-path {\n  margin-top: 1.25rem;\n  padding-top: 1.15rem;\n  border-top: 1px solid #44403c;\n}\n.docs-path h4 {\n  margin: 0.35rem 0 0;\n  font-size: 1rem;\n  font-weight: 680;\n}\n.docs-path > p {\n  margin: 0.4rem 0 0;\n  color: #d6d3d1;\n  font-size: 0.75rem;\n  line-height: 1.5;\n}\n.docs-path__label {\n  color: #a8a29e;\n  font-size: 0.62rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n.docs-path__result {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.55rem;\n  margin-top: 0.9rem;\n  padding: 0.75rem 0.85rem;\n  border: 1px solid #44403c;\n  border-radius: 0.8rem;\n  background: #292524;\n  color: #f5f5f4;\n  font-size: 0.72rem;\n  line-height: 1.45;\n}\n.docs-path__result mat-icon {\n  width: 1rem;\n  height: 1rem;\n  font-size: 1rem;\n}\n.docs-facts {\n  margin-top: 1.25rem;\n  border: 1px solid #d6d3d1;\n  border-radius: 1.5rem;\n  background: white;\n}\n.fact-items {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 0.8rem;\n}\n.fact-items article {\n  display: flex;\n  gap: 0.75rem;\n  padding: 0.9rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 0.9rem;\n  background: #fafaf9;\n}\n.fact-items article strong {\n  color: #292524;\n  font-size: 0.78rem;\n}\n.fact-items article p {\n  margin: 0.25rem 0 0;\n  color: #78716c;\n  font-size: 0.68rem;\n  line-height: 1.45;\n}\n.fact-items__icon {\n  display: grid;\n  flex: 0 0 2rem;\n  width: 2rem;\n  height: 2rem;\n  place-items: center;\n  border-radius: 0.6rem;\n}\n.fact-items__icon mat-icon {\n  width: 1rem;\n  height: 1rem;\n  font-size: 1rem;\n}\n.fact-items__icon--compare {\n  background: #eff6ff;\n  color: #1d4ed8;\n}\n.fact-items__icon--types {\n  background: #f5f5f4;\n  color: #44403c;\n}\n.fact-items__icon--screening {\n  background: #fff7ed;\n  color: #c2410c;\n}\n:host-context(.dark) .docs-hero h2,\n:host-context(.dark) .section-heading h3,\n:host-context(.dark) .fact-items strong,\n:host-context(.dark) .docs-hero__choice strong {\n  color: #f8fafc;\n}\n:host-context(.dark) .docs-hero p,\n:host-context(.dark) .docs-hero__eyebrow,\n:host-context(.dark) .section-heading p,\n:host-context(.dark) .fact-items p,\n:host-context(.dark) .docs-hero__choice span {\n  color: #94a3b8;\n}\n:host-context(.dark) .docs-hero__choice,\n:host-context(.dark) .docs-decision,\n:host-context(.dark) .docs-facts,\n:host-context(.dark) .fact-items article,\n:host-context(.dark) .docs-record {\n  border-color: #334155;\n  background: #1e293b;\n}\n:host-context(.dark) .section-heading > span {\n  background: #cbd5e1;\n  color: #0f172a;\n}\n:host-context(.dark) .docs-explainer {\n  background: #0f172a;\n}\n:host-context(.dark) .section-heading--light > span {\n  background: #e2e8f0;\n  color: #0f172a;\n}\n:host-context(.dark) .section-heading--light h3,\n:host-context(.dark) .docs-path h4 {\n  color: #f8fafc;\n}\n:host-context(.dark) .docs-flow li,\n:host-context(.dark) .docs-path__result {\n  border-color: #475569;\n  background: #1e293b;\n}\n:host-context(.dark) .docs-flow__result {\n  background: #e2e8f0;\n}\n:host-context(.dark) .docs-flow__result mat-icon,\n:host-context(.dark) .docs-flow__result span {\n  color: #0f172a;\n}\n:host-context(.dark) .docs-path {\n  border-top-color: #475569;\n}\n@media (max-width: 980px) {\n  .docs-decision,\n  .fact-items {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 720px) {\n  .docs-hero {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n  .docs-hero__choice {\n    align-items: flex-start;\n  }\n  .docs-record,\n  .docs-explainer,\n  .docs-facts {\n    padding: 1.25rem;\n  }\n}\n/*# sourceMappingURL=documents-step.component.css.map */\n"] }]
  }], null, { form: [{
    type: Input
  }], formGroup: [{
    type: Input
  }], loading: [{
    type: Input
  }], saving: [{
    type: Input
  }], checkDetailsDialog: [{
    type: ViewChild,
    args: ["checkDetailsDialog"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HumanAuthnDocumentsStepComponent, { className: "HumanAuthnDocumentsStepComponent", filePath: "src/app/modules/human-authn/projects/setup/steps/documents-step.component.ts", lineNumber: 56 });
})();

// src/app/modules/human-authn/projects/setup/human-authn-setup.service.ts
var HumanAuthnSetupService = class _HumanAuthnSetupService {
  constructor() {
    this._http = inject(HttpClient);
    this._projectId$ = new BehaviorSubject("new");
    this._project$ = new BehaviorSubject(null);
    this._stepIndex$ = new BehaviorSubject(0);
    this.projectId = "new";
    this.project = null;
    this.stepIndex = 0;
    this.steps = [
      "humanAuthnProjects.setup.steps.basic",
      "humanAuthnProjects.setup.steps.signup",
      "humanAuthnProjects.setup.steps.documents",
      "humanAuthnProjects.setup.steps.humanAuthn",
      "humanAuthnProjects.setup.steps.storage",
      "humanAuthnProjects.setup.steps.integrations",
      "humanAuthnProjects.setup.steps.ui"
    ];
    this.formKeys = {
      0: [
        "name",
        "allowedCountries",
        "contactEmail",
        "defaultLanguage",
        "privacyUrl",
        "termsAndConditionsUrl",
        "dataProtection.name",
        "dataProtection.email",
        "dataProtection.address",
        "dataProtection.city",
        "dataProtection.country",
        "dataProtection.postalCode"
      ],
      1: [
        "projectFlow.signUpForm.email",
        "projectFlow.signUpForm.phone",
        "projectFlow.signUpForm.fullName"
      ],
      2: ["projectFlow.steps.document"],
      3: ["projectFlow.humanAuthn.mode", "projectFlow.humanAuthn.outputFormat", "projectFlow.humanAuthn.tolerance"],
      4: ["projectFlow.storage.provider"],
      5: ["projectFlow.integrations.redirectUrl"],
      6: ["branding.backgroundColor"]
    };
  }
  get apiUrl() {
    return environment.apiUrl;
  }
  get authHeaders() {
    const token = localStorage.getItem("accessToken");
    return token ? { Authorization: `Bearer ${token}` } : {};
  }
  get project$() {
    return this._project$.asObservable();
  }
  get projectId$() {
    return this._projectId$.asObservable();
  }
  get stepIndex$() {
    return this._stepIndex$.asObservable();
  }
  setProjectId(id) {
    this.projectId = id;
    this._projectId$.next(id);
  }
  setProject(project) {
    this.project = project;
    this._project$.next(project);
  }
  setStepIndex(step) {
    this.stepIndex = step;
    this._stepIndex$.next(step);
  }
  getDefaultProject() {
    return {
      name: "",
      target: "personal",
      version: 3,
      currentStep: 0,
      allowedCountries: [],
      contactEmail: "",
      defaultLanguage: "en",
      privacyUrl: "",
      termsAndConditionsUrl: "",
      dataProtection: {
        address: "",
        address2: "",
        city: "",
        country: "",
        email: "",
        name: "",
        postalCode: ""
      },
      branding: {
        backgroundColor: "#ffffff",
        buttonColor: "#3f3f46",
        buttonTextColor: "#ffffff",
        image: "",
        imageBackgroundColor: "#ffffff",
        logo: "",
        textColor: "#3f3f46",
        titleColor: "#3f3f46"
      },
      projectFlows: [this.getDefaultProjectFlow()]
    };
  }
  getDefaultProjectFlow() {
    return {
      type: "humanAuthn",
      target: "personal",
      status: "draft",
      version: 3,
      humanAuthn: {
        mode: "standard",
        livenessAtCreation: false,
        outputFormat: "string",
        tolerance: "REGULAR",
        compareMinScore: 0.85,
        verifierKey: "",
        publicDataKeys: ["fullName"]
      },
      storage: { provider: "ipfs" },
      integrations: { redirectUrl: "", webhook: null },
      steps: { document: "skip", humanAuthn: "mandatory" },
      documents: {
        attemptLimit: 3,
        criminalHistoryVerification: false,
        documentTypes: [],
        informationVerification: false,
        screening: false,
        verificationMethods: []
      },
      signUpForm: {
        additionalFields: [],
        allowAdditionalFields: false,
        countryCode: "",
        email: false,
        emailGateway: "none",
        fullName: true,
        fullNameStyle: "together",
        phone: false,
        phoneGateway: "sms",
        showPrivacyNotice: false,
        showTermsAndConditions: false
      }
    };
  }
  requestProject(id) {
    return this._http.get(`${this.apiUrl}/v3/projects/${id}`, {
      params: { populates: "projectFlows", projectFlowType: "humanAuthn" },
      headers: this.authHeaders
    }).pipe(catchError((err) => throwError(() => err)));
  }
  createProject(data) {
    return this._http.post(`${this.apiUrl}/v3/projects`, __spreadProps(__spreadValues({}, data), {
      projectFlowType: "humanAuthn",
      target: "personal"
    }), { headers: this.authHeaders }).pipe(catchError((err) => throwError(() => err)));
  }
  updateProject(id, data) {
    return this._http.put(`${this.apiUrl}/v3/projects/${id}`, __spreadProps(__spreadValues({}, data), {
      projectFlowType: "humanAuthn",
      target: "personal"
    }), { headers: this.authHeaders }).pipe(catchError((err) => throwError(() => err)));
  }
  getWebhooks() {
    return this._http.get(`${this.apiUrl}/v2/webhooks`, {
      headers: this.authHeaders
    }).pipe(catchError((err) => throwError(() => err)));
  }
  static {
    this.\u0275fac = function HumanAuthnSetupService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HumanAuthnSetupService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _HumanAuthnSetupService, factory: _HumanAuthnSetupService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HumanAuthnSetupService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/modules/human-authn/projects/setup/steps/integrations-step.component.ts
var _c03 = (a0) => ({ name: a0 });
var _forTrack03 = ($index, $item) => $item._id;
function HumanAuthnIntegrationsStepComponent_ng_container_0_Conditional_57_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" ", t_r1("humanAuthnProjects.setup.integrations.redirectRequiredError"), " ");
  }
}
function HumanAuthnIntegrationsStepComponent_ng_container_0_Conditional_57_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" ", t_r1("humanAuthnProjects.setup.integrations.redirectInvalid"), " ");
  }
}
function HumanAuthnIntegrationsStepComponent_ng_container_0_Conditional_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 18);
    \u0275\u0275template(1, HumanAuthnIntegrationsStepComponent_ng_container_0_Conditional_57_Conditional_1_Template, 1, 1)(2, HumanAuthnIntegrationsStepComponent_ng_container_0_Conditional_57_Conditional_2_Template, 1, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r1.redirectControl == null ? null : ctx_r1.redirectControl.hasError("required")) ? 1 : (ctx_r1.redirectControl == null ? null : ctx_r1.redirectControl.hasError("pattern")) ? 2 : -1);
  }
}
function HumanAuthnIntegrationsStepComponent_ng_container_0_For_90_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const webhook_r3 = ctx.$implicit;
    \u0275\u0275property("value", webhook_r3._id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(webhook_r3.name || webhook_r3._id);
  }
}
function HumanAuthnIntegrationsStepComponent_ng_container_0_Conditional_91_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r1("humanAuthnProjects.setup.integrations.noWebhooksMessage"));
  }
}
function HumanAuthnIntegrationsStepComponent_ng_container_0_Conditional_130_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 36)(5, "mat-icon");
    \u0275\u0275text(6, "webhook");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r1("humanAuthnProjects.setup.integrations.withWebhookTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r1("humanAuthnProjects.setup.integrations.withWebhookBody", \u0275\u0275pureFunction1(3, _c03, ctx_r1.selectedWebhookName)), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.selectedWebhookName);
  }
}
function HumanAuthnIntegrationsStepComponent_ng_container_0_Conditional_131_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 36)(5, "mat-icon");
    \u0275\u0275text(6, "notifications_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r1("humanAuthnProjects.setup.integrations.noWebhookTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r1("humanAuthnProjects.setup.integrations.noWebhookBody"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(t_r1("humanAuthnProjects.setup.integrations.flowSkipped"));
  }
}
function HumanAuthnIntegrationsStepComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0, 1);
    \u0275\u0275elementStart(1, "div", 2)(2, "header", 3)(3, "div")(4, "span", 4);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h2");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 5)(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "strong");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "em");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 6)(18, "section", 7)(19, "div", 8)(20, "span");
    \u0275\u0275text(21, "01");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div")(23, "h3");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "p");
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 9)(28, "article", 10)(29, "span", 11)(30, "mat-icon");
    \u0275\u0275text(31, "open_in_browser");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 12)(33, "span", 13)(34, "strong");
    \u0275\u0275text(35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "small");
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "span", 14);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "span", 15)(41, "span")(42, "mat-icon");
    \u0275\u0275text(43, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275text(44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "span")(46, "mat-icon");
    \u0275\u0275text(47, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275text(48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "span")(50, "mat-icon");
    \u0275\u0275text(51, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275text(52);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "mat-form-field", 16)(54, "mat-label");
    \u0275\u0275text(55);
    \u0275\u0275elementEnd();
    \u0275\u0275element(56, "input", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275template(57, HumanAuthnIntegrationsStepComponent_ng_container_0_Conditional_57_Template, 3, 1, "p", 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "article", 10)(59, "span", 11)(60, "mat-icon");
    \u0275\u0275text(61, "webhook");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(62, "div", 12)(63, "span", 13)(64, "strong");
    \u0275\u0275text(65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "small");
    \u0275\u0275text(67);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(68, "span", 14);
    \u0275\u0275text(69);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "span", 15)(71, "span")(72, "mat-icon");
    \u0275\u0275text(73, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275text(74);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "span")(76, "mat-icon");
    \u0275\u0275text(77, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275text(78);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "span")(80, "mat-icon");
    \u0275\u0275text(81, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275text(82);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(83, "mat-form-field", 16)(84, "mat-label");
    \u0275\u0275text(85);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "mat-select", 19)(87, "mat-option", 20);
    \u0275\u0275text(88);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(89, HumanAuthnIntegrationsStepComponent_ng_container_0_For_90_Template, 2, 2, "mat-option", 20, _forTrack03);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(91, HumanAuthnIntegrationsStepComponent_ng_container_0_Conditional_91_Template, 2, 1, "p", 21);
    \u0275\u0275elementStart(92, "a", 22);
    \u0275\u0275text(93);
    \u0275\u0275elementStart(94, "mat-icon");
    \u0275\u0275text(95, "open_in_new");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(96, "aside", 23)(97, "div", 24)(98, "span");
    \u0275\u0275text(99, "02");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(100, "div")(101, "h3");
    \u0275\u0275text(102);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(103, "p");
    \u0275\u0275text(104);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(105, "div", 25)(106, "div", 26)(107, "mat-icon");
    \u0275\u0275text(108, "task_alt");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(109, "span");
    \u0275\u0275text(110);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(111, "span", 27)(112, "mat-icon");
    \u0275\u0275text(113, "arrow_forward");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(114, "div", 28)(115, "mat-icon");
    \u0275\u0275text(116, "open_in_browser");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(117, "span");
    \u0275\u0275text(118);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(119, "span", 27)(120, "mat-icon");
    \u0275\u0275text(121, "arrow_forward");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(122, "div", 26)(123, "mat-icon");
    \u0275\u0275text(124);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(125, "span");
    \u0275\u0275text(126);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(127, "div", 29)(128, "span", 30);
    \u0275\u0275text(129);
    \u0275\u0275elementEnd();
    \u0275\u0275template(130, HumanAuthnIntegrationsStepComponent_ng_container_0_Conditional_130_Template, 9, 5)(131, HumanAuthnIntegrationsStepComponent_ng_container_0_Conditional_131_Template, 9, 3);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(132, "section", 31)(133, "div", 8)(134, "span");
    \u0275\u0275text(135, "03");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(136, "div")(137, "h3");
    \u0275\u0275text(138);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(139, "p");
    \u0275\u0275text(140);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(141, "div", 32)(142, "article")(143, "span", 33)(144, "mat-icon");
    \u0275\u0275text(145, "person");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(146, "div")(147, "strong");
    \u0275\u0275text(148);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(149, "p");
    \u0275\u0275text(150);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(151, "article")(152, "span", 34)(153, "mat-icon");
    \u0275\u0275text(154, "dns");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(155, "div")(156, "strong");
    \u0275\u0275text(157);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(158, "p");
    \u0275\u0275text(159);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(160, "article")(161, "span", 35)(162, "mat-icon");
    \u0275\u0275text(163, "call_split");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(164, "div")(165, "strong");
    \u0275\u0275text(166);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(167, "p");
    \u0275\u0275text(168);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(t_r1("humanAuthnProjects.setup.integrations.eyebrow"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r1("humanAuthnProjects.setup.integrations.title"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r1("humanAuthnProjects.setup.integrations.subtitle"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r1("humanAuthnProjects.setup.integrations.currentChoice"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.redirectHost || t_r1("humanAuthnProjects.setup.integrations.redirectRequired"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r1(ctx_r1.hasWebhook ? "humanAuthnProjects.setup.integrations.webhookOn" : "humanAuthnProjects.setup.integrations.webhookOff"));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(t_r1("humanAuthnProjects.setup.integrations.destinationsTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r1("humanAuthnProjects.setup.integrations.destinationsHelp"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("destination--ready", !!ctx_r1.redirectHost);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(t_r1("humanAuthnProjects.setup.integrations.redirectTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r1("humanAuthnProjects.setup.integrations.redirectRequiredBadge"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r1("humanAuthnProjects.setup.integrations.redirectBody"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", t_r1("humanAuthnProjects.setup.integrations.redirectBenefitPerson"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r1("humanAuthnProjects.setup.integrations.redirectBenefitHttps"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r1("humanAuthnProjects.setup.integrations.redirectBenefitIndependent"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r1("humanAuthnProjects.setup.integrations.redirectLabel"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional((ctx_r1.redirectControl == null ? null : ctx_r1.redirectControl.invalid) && ((ctx_r1.redirectControl == null ? null : ctx_r1.redirectControl.touched) || (ctx_r1.redirectControl == null ? null : ctx_r1.redirectControl.dirty)) ? 57 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("destination--ready", ctx_r1.hasWebhook);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(t_r1("humanAuthnProjects.setup.integrations.webhookTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r1("humanAuthnProjects.setup.integrations.webhookOptionalBadge"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r1("humanAuthnProjects.setup.integrations.webhookBody"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", t_r1("humanAuthnProjects.setup.integrations.webhookBenefitServer"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r1("humanAuthnProjects.setup.integrations.webhookBenefitExisting"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r1("humanAuthnProjects.setup.integrations.webhookBenefitOptional"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r1("humanAuthnProjects.setup.integrations.webhookSelect"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r1("humanAuthnProjects.setup.integrations.noWebhook"));
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.webhooks);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.webhooks.length ? 91 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r1("humanAuthnProjects.setup.integrations.manageWebhooks"), " ");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(t_r1("humanAuthnProjects.setup.integrations.howTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r1("humanAuthnProjects.setup.integrations.howHelp"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(t_r1("humanAuthnProjects.setup.integrations.flowFinish"));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(t_r1("humanAuthnProjects.setup.integrations.flowBrowser"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("integrations-flow__node--server", ctx_r1.hasWebhook)("integrations-flow__node--skipped", !ctx_r1.hasWebhook);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.hasWebhook ? "dns" : "notifications_off");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r1(ctx_r1.hasWebhook ? "humanAuthnProjects.setup.integrations.flowServer" : "humanAuthnProjects.setup.integrations.flowSkipped"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r1("humanAuthnProjects.setup.integrations.selectedPath"));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.hasWebhook ? 130 : 131);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(t_r1("humanAuthnProjects.setup.integrations.channelsTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r1("humanAuthnProjects.setup.integrations.channelsHelp"));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(t_r1("humanAuthnProjects.setup.integrations.personTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r1("humanAuthnProjects.setup.integrations.personBody"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(t_r1("humanAuthnProjects.setup.integrations.serverTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r1("humanAuthnProjects.setup.integrations.serverBody"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(t_r1("humanAuthnProjects.setup.integrations.separateTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r1("humanAuthnProjects.setup.integrations.separateBody"));
  }
}
var HumanAuthnIntegrationsStepComponent = class _HumanAuthnIntegrationsStepComponent {
  constructor() {
    this._setup = inject(HumanAuthnSetupService);
    this.webhooks = [];
  }
  ngOnInit() {
    this._setup.getWebhooks().subscribe({
      next: (res) => {
        this.webhooks = res?.data ?? [];
      }
    });
  }
  get redirectControl() {
    return this.form?.get("projectFlow.integrations.redirectUrl") ?? null;
  }
  get webhookId() {
    return this.form?.get("projectFlow.integrations.webhook")?.value || null;
  }
  get hasWebhook() {
    return !!this.webhookId;
  }
  get redirectHost() {
    const value = `${this.redirectControl?.value || ""}`.trim();
    if (!value || this.redirectControl?.invalid)
      return null;
    try {
      return new URL(value).host;
    } catch {
      return null;
    }
  }
  get selectedWebhookName() {
    const match = this.webhooks.find((webhook) => webhook._id === this.webhookId);
    return match?.name || match?._id || this.webhookId || "";
  }
  static {
    this.\u0275fac = function HumanAuthnIntegrationsStepComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HumanAuthnIntegrationsStepComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HumanAuthnIntegrationsStepComponent, selectors: [["human-authn-integrations-step"]], inputs: { form: "form" }, decls: 1, vars: 0, consts: [[3, "formGroup", 4, "transloco"], [3, "formGroup"], ["formGroupName", "projectFlow", 1, "integrations-screen"], [1, "integrations-hero"], [1, "integrations-hero__eyebrow"], [1, "integrations-hero__choice"], ["formGroupName", "integrations", 1, "integrations-decision"], [1, "destinations"], [1, "section-heading"], [1, "destination-list"], [1, "destination"], [1, "destination__icon"], [1, "destination__content"], [1, "destination__title"], [1, "destination__body"], [1, "destination__benefits"], ["appearance", "outline", "subscriptSizing", "dynamic"], ["matInput", "", "type", "url", "formControlName", "redirectUrl", "placeholder", "https://", "required", ""], [1, "field-error"], ["formControlName", "webhook"], [3, "value"], [1, "destination__empty"], ["routerLink", "/smart-monitor/webhooks", 1, "manage-link"], ["aria-live", "polite", 1, "integrations-explainer"], [1, "section-heading", "section-heading--light"], [1, "integrations-flow"], [1, "integrations-flow__node"], [1, "integrations-flow__line"], [1, "integrations-flow__node", "integrations-flow__node--browser"], [1, "selected-path"], [1, "selected-path__label"], [1, "integrations-channels"], [1, "channel-items"], [1, "channel-items__icon", "channel-items__icon--person"], [1, "channel-items__icon", "channel-items__icon--server"], [1, "channel-items__icon", "channel-items__icon--separate"], [1, "selected-path__result"]], template: function HumanAuthnIntegrationsStepComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, HumanAuthnIntegrationsStepComponent_ng_container_0_Template, 169, 52, "ng-container", 0);
      }
    }, dependencies: [
      CommonModule,
      ReactiveFormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      RequiredValidator,
      FormGroupDirective,
      FormControlName,
      FormGroupName,
      MatFormFieldModule,
      MatFormField,
      MatLabel,
      MatIconModule,
      MatIcon,
      MatInputModule,
      MatInput,
      MatSelectModule,
      MatSelect,
      MatOption,
      RouterLink,
      TranslocoModule,
      TranslocoDirective
    ], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.integrations-screen[_ngcontent-%COMP%] {\n  margin-inline: auto;\n  width: min(100%, 76rem);\n}\n.integrations-hero[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 2rem;\n  margin-bottom: 2rem;\n  padding: 0.5rem 0.25rem;\n}\n.integrations-hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  max-width: 42rem;\n  margin: 0.35rem 0 0;\n  color: #1c1917;\n  font-size: clamp(1.75rem, 3vw, 2.55rem);\n  font-weight: 680;\n  letter-spacing: -0.045em;\n  line-height: 1.05;\n}\n.integrations-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 42rem;\n  margin: 0.75rem 0 0;\n  color: #78716c;\n  font-size: 0.88rem;\n  line-height: 1.6;\n}\n.integrations-hero__eyebrow[_ngcontent-%COMP%] {\n  color: #78716c;\n  font-size: 0.65rem;\n  font-weight: 750;\n  letter-spacing: 0.16em;\n  text-transform: uppercase;\n}\n.integrations-hero__choice[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 0 0 auto;\n  flex-direction: column;\n  align-items: flex-end;\n  max-width: 16rem;\n  padding: 0.75rem 1rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 0.9rem;\n  background: white;\n}\n.integrations-hero__choice[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #a8a29e;\n  font-size: 0.62rem;\n  font-weight: 650;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n.integrations-hero__choice[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  margin-top: 0.15rem;\n  color: #292524;\n  font-size: 0.82rem;\n  text-align: right;\n  overflow-wrap: anywhere;\n}\n.integrations-hero__choice[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  margin-top: 0.2rem;\n  color: #78716c;\n  font-size: 0.72rem;\n  font-style: normal;\n  font-weight: 600;\n}\n.integrations-decision[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1.08fr) minmax(22rem, 0.92fr);\n  overflow: hidden;\n  border: 1px solid #d6d3d1;\n  border-radius: 1.5rem;\n  background: white;\n  box-shadow: 0 1px 2px rgba(28, 25, 23, 0.03), 0 18px 45px rgba(28, 25, 23, 0.05);\n}\n.destinations[_ngcontent-%COMP%], \n.integrations-explainer[_ngcontent-%COMP%] {\n  padding: 1.75rem;\n}\n.integrations-explainer[_ngcontent-%COMP%] {\n  background: #1c1917;\n  color: white;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.8rem;\n  margin-bottom: 1.25rem;\n}\n.section-heading[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: grid;\n  flex: 0 0 1.8rem;\n  width: 1.8rem;\n  height: 1.8rem;\n  place-items: center;\n  border-radius: 999px;\n  background: #292524;\n  color: white;\n  font-size: 0.62rem;\n  font-weight: 750;\n}\n.section-heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #292524;\n  font-size: 0.95rem;\n  font-weight: 680;\n  letter-spacing: -0.015em;\n}\n.section-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.25rem 0 0;\n  color: #78716c;\n  font-size: 0.72rem;\n  line-height: 1.45;\n}\n.section-heading--light[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  background: white;\n  color: #1c1917;\n}\n.section-heading--light[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: white;\n}\n.section-heading--light[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #a8a29e;\n}\n.destination-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.8rem;\n}\n.destination[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr);\n  align-items: flex-start;\n  gap: 1rem;\n  padding: 1.15rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 1rem;\n  background: #fafaf9;\n}\n.destination--ready[_ngcontent-%COMP%] {\n  border-color: #292524;\n  background: white;\n  box-shadow: inset 0 0 0 1px #292524, 0 8px 22px rgba(28, 25, 23, 0.06);\n}\n.destination__icon[_ngcontent-%COMP%] {\n  display: grid;\n  width: 2.6rem;\n  height: 2.6rem;\n  place-items: center;\n  border-radius: 0.8rem;\n  background: #e7e5e4;\n  color: #44403c;\n}\n.destination__icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 1.25rem;\n  height: 1.25rem;\n  font-size: 1.25rem;\n}\n.destination--ready[_ngcontent-%COMP%]   .destination__icon[_ngcontent-%COMP%] {\n  background: #292524;\n  color: white;\n}\n.destination__content[_ngcontent-%COMP%], \n.destination__benefits[_ngcontent-%COMP%], \n.destination__benefits[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n}\n.destination__content[_ngcontent-%COMP%], \n.destination__benefits[_ngcontent-%COMP%] {\n  min-width: 0;\n  flex-direction: column;\n}\n.destination__title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.55rem;\n}\n.destination__title[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #292524;\n  font-size: 0.9rem;\n  font-weight: 680;\n}\n.destination__title[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  padding: 0.2rem 0.45rem;\n  border-radius: 999px;\n  background: #e7e5e4;\n  color: #57534e;\n  font-size: 0.58rem;\n  font-weight: 700;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n}\n.destination__body[_ngcontent-%COMP%] {\n  margin-top: 0.35rem;\n  color: #78716c;\n  font-size: 0.72rem;\n  line-height: 1.45;\n}\n.destination__benefits[_ngcontent-%COMP%] {\n  gap: 0.3rem;\n  margin-top: 0.75rem;\n  color: #57534e;\n  font-size: 0.66rem;\n}\n.destination__benefits[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  align-items: center;\n  gap: 0.35rem;\n}\n.destination__benefits[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 0.85rem;\n  height: 0.85rem;\n  color: #166534;\n  font-size: 0.85rem;\n  font-weight: 700;\n}\n.destination[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 0.9rem;\n}\n.field-error[_ngcontent-%COMP%], \n.destination__empty[_ngcontent-%COMP%] {\n  margin: 0.35rem 0 0;\n  font-size: 0.72rem;\n  line-height: 1.4;\n}\n.field-error[_ngcontent-%COMP%] {\n  color: #b91c1c;\n}\n.destination__empty[_ngcontent-%COMP%] {\n  color: #78716c;\n}\n.manage-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.3rem;\n  margin-top: 0.7rem;\n  color: #292524;\n  font-size: 0.75rem;\n  font-weight: 650;\n  text-underline-offset: 0.15rem;\n}\n.manage-link[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 0.9rem;\n  height: 0.9rem;\n  font-size: 0.9rem;\n}\n.integrations-flow[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr auto 1fr auto 1fr;\n  align-items: center;\n  gap: 0.45rem;\n  margin: 1.8rem 0;\n}\n.integrations-flow__node[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 0;\n  min-height: 5.2rem;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  padding: 0.65rem;\n  border: 1px solid #44403c;\n  border-radius: 0.8rem;\n  background: #292524;\n  text-align: center;\n}\n.integrations-flow__node[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #d6d3d1;\n}\n.integrations-flow__node[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #d6d3d1;\n  font-size: 0.62rem;\n  font-weight: 600;\n  line-height: 1.3;\n}\n.integrations-flow__node--browser[_ngcontent-%COMP%], \n.integrations-flow__node--server[_ngcontent-%COMP%] {\n  border-color: #a8a29e;\n  background: white;\n}\n.integrations-flow__node--browser[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], \n.integrations-flow__node--browser[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.integrations-flow__node--server[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], \n.integrations-flow__node--server[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #1c1917;\n}\n.integrations-flow__node--skipped[_ngcontent-%COMP%] {\n  border-style: dashed;\n  border-color: #57534e;\n  background: transparent;\n}\n.integrations-flow__node--skipped[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], \n.integrations-flow__node--skipped[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #a8a29e;\n}\n.integrations-flow__line[_ngcontent-%COMP%] {\n  color: #78716c;\n}\n.integrations-flow__line[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n  font-size: 1rem;\n}\n.selected-path[_ngcontent-%COMP%] {\n  padding-top: 1.25rem;\n  border-top: 1px solid #44403c;\n}\n.selected-path[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0.35rem 0 0;\n  color: white;\n  font-size: 1rem;\n  font-weight: 650;\n}\n.selected-path[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  margin: 0.55rem 0 0;\n  color: #a8a29e;\n  font-size: 0.72rem;\n  line-height: 1.55;\n}\n.selected-path__label[_ngcontent-%COMP%] {\n  color: #78716c;\n  font-size: 0.6rem;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n}\n.selected-path__result[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.55rem;\n  margin-top: 1rem;\n  padding: 0.75rem 0.85rem;\n  border: 1px solid #44403c;\n  border-radius: 0.75rem;\n  background: #292524;\n  color: #d6d3d1;\n  font-size: 0.68rem;\n}\n.selected-path__result[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n  font-size: 1rem;\n}\n.selected-path__result[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  min-width: 0;\n  overflow-wrap: anywhere;\n}\n.integrations-channels[_ngcontent-%COMP%] {\n  margin-top: 1.25rem;\n  padding: 1.5rem 1.75rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 1.25rem;\n  background: white;\n}\n.channel-items[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 0.75rem;\n}\n.channel-items[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.75rem;\n  padding: 0.9rem;\n  border: 1px solid #f5f5f4;\n  border-radius: 0.85rem;\n  background: #fafaf9;\n}\n.channel-items[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #292524;\n  font-size: 0.75rem;\n  font-weight: 650;\n}\n.channel-items[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.25rem 0 0;\n  color: #78716c;\n  font-size: 0.65rem;\n  line-height: 1.45;\n}\n.channel-items__icon[_ngcontent-%COMP%] {\n  display: grid;\n  flex: 0 0 2rem;\n  width: 2rem;\n  height: 2rem;\n  place-items: center;\n  border-radius: 0.6rem;\n}\n.channel-items__icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n  font-size: 1rem;\n}\n.channel-items__icon--person[_ngcontent-%COMP%] {\n  background: #ecfdf5;\n  color: #047857;\n}\n.channel-items__icon--server[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  color: #1d4ed8;\n}\n.channel-items__icon--separate[_ngcontent-%COMP%] {\n  background: #f5f5f4;\n  color: #57534e;\n}\n.dark[_nghost-%COMP%]   .integrations-hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .integrations-hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .section-heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .section-heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .destination__title[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .destination__title[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .channel-items[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .channel-items[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .integrations-hero__choice[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .integrations-hero__choice[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .manage-link[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .manage-link[_ngcontent-%COMP%] {\n  color: #f8fafc;\n}\n.dark[_nghost-%COMP%]   .integrations-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .integrations-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .integrations-hero__eyebrow[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .integrations-hero__eyebrow[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .section-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .section-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .destination__body[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .destination__body[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .destination__benefits[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .destination__benefits[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .destination__empty[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .destination__empty[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .channel-items[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .channel-items[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .integrations-hero__choice[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .integrations-hero__choice[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .integrations-hero__choice[_ngcontent-%COMP%]   em[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .integrations-hero__choice[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .integrations-hero__choice[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .integrations-hero__choice[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .integrations-decision[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .integrations-decision[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .integrations-channels[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .integrations-channels[_ngcontent-%COMP%] {\n  border-color: rgba(148, 163, 184, 0.18);\n  background: #1e293b;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);\n}\n.dark[_nghost-%COMP%]   .destinations[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .destinations[_ngcontent-%COMP%] {\n  background: #1e293b;\n}\n.dark[_nghost-%COMP%]   .section-heading[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .section-heading[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  background: #cbd5e1;\n  color: #0f172a;\n}\n.dark[_nghost-%COMP%]   .destination[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .destination[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .channel-items[_ngcontent-%COMP%]   article[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .channel-items[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  border-color: #334155;\n  background: #0f172a;\n}\n.dark[_nghost-%COMP%]   .destination--ready[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .destination--ready[_ngcontent-%COMP%] {\n  border-color: #e2e8f0;\n  background: #0f172a;\n  box-shadow: inset 0 0 0 1px #e2e8f0;\n}\n.dark[_nghost-%COMP%]   .destination__icon[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .destination__icon[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .destination__title[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .destination__title[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  background: #334155;\n  color: #e2e8f0;\n}\n.dark[_nghost-%COMP%]   .destination--ready[_ngcontent-%COMP%]   .destination__icon[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .destination--ready[_ngcontent-%COMP%]   .destination__icon[_ngcontent-%COMP%] {\n  background: #e2e8f0;\n  color: #0f172a;\n}\n.dark[_nghost-%COMP%]   .destination__benefits[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .destination__benefits[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #6ee7b7;\n}\n.dark[_nghost-%COMP%]   .field-error[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .field-error[_ngcontent-%COMP%] {\n  color: #fda4af;\n}\n.dark[_nghost-%COMP%]   .integrations-explainer[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .integrations-explainer[_ngcontent-%COMP%] {\n  background: #1e293b;\n}\n.dark[_nghost-%COMP%]   .section-heading--light[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .section-heading--light[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  background: #e2e8f0;\n  color: #0f172a;\n}\n.dark[_nghost-%COMP%]   .section-heading--light[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .section-heading--light[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #f8fafc;\n}\n.dark[_nghost-%COMP%]   .section-heading--light[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .section-heading--light[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .integrations-flow__node[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .integrations-flow__node[_ngcontent-%COMP%] {\n  border-color: #475569;\n  background: #334155;\n}\n.dark[_nghost-%COMP%]   .integrations-flow__node[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .integrations-flow__node[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .integrations-flow__node[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .integrations-flow__node[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #e2e8f0;\n}\n.dark[_nghost-%COMP%]   .integrations-flow__node--browser[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .integrations-flow__node--browser[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .integrations-flow__node--server[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .integrations-flow__node--server[_ngcontent-%COMP%] {\n  border-color: #cbd5e1;\n  background: #e2e8f0;\n}\n.dark[_nghost-%COMP%]   .integrations-flow__node--browser[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .integrations-flow__node--browser[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .integrations-flow__node--browser[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .integrations-flow__node--browser[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .integrations-flow__node--server[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .integrations-flow__node--server[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .integrations-flow__node--server[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .integrations-flow__node--server[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #0f172a;\n}\n.dark[_nghost-%COMP%]   .integrations-flow__node--skipped[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .integrations-flow__node--skipped[_ngcontent-%COMP%] {\n  border-color: #64748b;\n  background: transparent;\n}\n.dark[_nghost-%COMP%]   .integrations-flow__node--skipped[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .integrations-flow__node--skipped[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .integrations-flow__node--skipped[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .integrations-flow__node--skipped[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .integrations-flow__line[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .integrations-flow__line[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .selected-path[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .selected-path[_ngcontent-%COMP%] {\n  border-top-color: #475569;\n}\n.dark[_nghost-%COMP%]   .selected-path[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .selected-path[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #f8fafc;\n}\n.dark[_nghost-%COMP%]   .selected-path[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .selected-path[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .selected-path__label[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .selected-path__label[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n.dark[_nghost-%COMP%]   .selected-path__result[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .selected-path__result[_ngcontent-%COMP%] {\n  border-color: #475569;\n  background: #334155;\n  color: #e2e8f0;\n}\n.dark[_nghost-%COMP%]   .channel-items__icon--person[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .channel-items__icon--person[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.14);\n  color: #6ee7b7;\n}\n.dark[_nghost-%COMP%]   .channel-items__icon--server[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .channel-items__icon--server[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.16);\n  color: #93c5fd;\n}\n.dark[_nghost-%COMP%]   .channel-items__icon--separate[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .channel-items__icon--separate[_ngcontent-%COMP%] {\n  background: #334155;\n  color: #cbd5e1;\n}\n@media (max-width: 900px) {\n  .integrations-decision[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 680px) {\n  .integrations-hero[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n  .integrations-hero__choice[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    max-width: none;\n  }\n  .integrations-hero__choice[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    text-align: left;\n  }\n  .destinations[_ngcontent-%COMP%], \n   .integrations-explainer[_ngcontent-%COMP%], \n   .integrations-channels[_ngcontent-%COMP%] {\n    padding: 1.25rem;\n  }\n  .integrations-flow[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .integrations-flow__line[_ngcontent-%COMP%] {\n    display: grid;\n    place-items: center;\n    transform: rotate(90deg);\n  }\n  .channel-items[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=integrations-step.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HumanAuthnIntegrationsStepComponent, [{
    type: Component,
    args: [{ selector: "human-authn-integrations-step", standalone: true, imports: [
      CommonModule,
      ReactiveFormsModule,
      MatFormFieldModule,
      MatIconModule,
      MatInputModule,
      MatSelectModule,
      RouterLink,
      TranslocoModule
    ], template: `<ng-container *transloco="let t" [formGroup]="form">\r
    <div class="integrations-screen" formGroupName="projectFlow">\r
        <header class="integrations-hero">\r
            <div>\r
                <span class="integrations-hero__eyebrow">{{ t('humanAuthnProjects.setup.integrations.eyebrow') }}</span>\r
                <h2>{{ t('humanAuthnProjects.setup.integrations.title') }}</h2>\r
                <p>{{ t('humanAuthnProjects.setup.integrations.subtitle') }}</p>\r
            </div>\r
            <div class="integrations-hero__choice">\r
                <span>{{ t('humanAuthnProjects.setup.integrations.currentChoice') }}</span>\r
                <strong>{{ redirectHost || t('humanAuthnProjects.setup.integrations.redirectRequired') }}</strong>\r
                <em>{{ t(hasWebhook ? 'humanAuthnProjects.setup.integrations.webhookOn' : 'humanAuthnProjects.setup.integrations.webhookOff') }}</em>\r
            </div>\r
        </header>\r
\r
        <div class="integrations-decision" formGroupName="integrations">\r
            <section class="destinations">\r
                <div class="section-heading">\r
                    <span>01</span>\r
                    <div>\r
                        <h3>{{ t('humanAuthnProjects.setup.integrations.destinationsTitle') }}</h3>\r
                        <p>{{ t('humanAuthnProjects.setup.integrations.destinationsHelp') }}</p>\r
                    </div>\r
                </div>\r
\r
                <div class="destination-list">\r
                    <article class="destination" [class.destination--ready]="!!redirectHost">\r
                        <span class="destination__icon">\r
                            <mat-icon>open_in_browser</mat-icon>\r
                        </span>\r
                        <div class="destination__content">\r
                            <span class="destination__title">\r
                                <strong>{{ t('humanAuthnProjects.setup.integrations.redirectTitle') }}</strong>\r
                                <small>{{ t('humanAuthnProjects.setup.integrations.redirectRequiredBadge') }}</small>\r
                            </span>\r
                            <span class="destination__body">{{ t('humanAuthnProjects.setup.integrations.redirectBody') }}</span>\r
                            <span class="destination__benefits">\r
                                <span>\r
                                    <mat-icon>check</mat-icon>\r
                                    {{ t('humanAuthnProjects.setup.integrations.redirectBenefitPerson') }}\r
                                </span>\r
                                <span>\r
                                    <mat-icon>check</mat-icon>\r
                                    {{ t('humanAuthnProjects.setup.integrations.redirectBenefitHttps') }}\r
                                </span>\r
                                <span>\r
                                    <mat-icon>check</mat-icon>\r
                                    {{ t('humanAuthnProjects.setup.integrations.redirectBenefitIndependent') }}\r
                                </span>\r
                            </span>\r
\r
                            <mat-form-field appearance="outline" subscriptSizing="dynamic">\r
                                <mat-label>{{ t('humanAuthnProjects.setup.integrations.redirectLabel') }}</mat-label>\r
                                <input matInput type="url" formControlName="redirectUrl" placeholder="https://" required />\r
                            </mat-form-field>\r
                            @if (redirectControl?.invalid && (redirectControl?.touched || redirectControl?.dirty)) {\r
                                <p class="field-error">\r
                                    @if (redirectControl?.hasError('required')) {\r
                                        {{ t('humanAuthnProjects.setup.integrations.redirectRequiredError') }}\r
                                    } @else if (redirectControl?.hasError('pattern')) {\r
                                        {{ t('humanAuthnProjects.setup.integrations.redirectInvalid') }}\r
                                    }\r
                                </p>\r
                            }\r
                        </div>\r
                    </article>\r
\r
                    <article class="destination" [class.destination--ready]="hasWebhook">\r
                        <span class="destination__icon">\r
                            <mat-icon>webhook</mat-icon>\r
                        </span>\r
                        <div class="destination__content">\r
                            <span class="destination__title">\r
                                <strong>{{ t('humanAuthnProjects.setup.integrations.webhookTitle') }}</strong>\r
                                <small>{{ t('humanAuthnProjects.setup.integrations.webhookOptionalBadge') }}</small>\r
                            </span>\r
                            <span class="destination__body">{{ t('humanAuthnProjects.setup.integrations.webhookBody') }}</span>\r
                            <span class="destination__benefits">\r
                                <span>\r
                                    <mat-icon>check</mat-icon>\r
                                    {{ t('humanAuthnProjects.setup.integrations.webhookBenefitServer') }}\r
                                </span>\r
                                <span>\r
                                    <mat-icon>check</mat-icon>\r
                                    {{ t('humanAuthnProjects.setup.integrations.webhookBenefitExisting') }}\r
                                </span>\r
                                <span>\r
                                    <mat-icon>check</mat-icon>\r
                                    {{ t('humanAuthnProjects.setup.integrations.webhookBenefitOptional') }}\r
                                </span>\r
                            </span>\r
\r
                            <mat-form-field appearance="outline" subscriptSizing="dynamic">\r
                                <mat-label>{{ t('humanAuthnProjects.setup.integrations.webhookSelect') }}</mat-label>\r
                                <mat-select formControlName="webhook">\r
                                    <mat-option [value]="null">{{ t('humanAuthnProjects.setup.integrations.noWebhook') }}</mat-option>\r
                                    @for (webhook of webhooks; track webhook._id) {\r
                                        <mat-option [value]="webhook._id">{{ webhook.name || webhook._id }}</mat-option>\r
                                    }\r
                                </mat-select>\r
                            </mat-form-field>\r
\r
                            @if (!webhooks.length) {\r
                                <p class="destination__empty">{{ t('humanAuthnProjects.setup.integrations.noWebhooksMessage') }}</p>\r
                            }\r
\r
                            <a routerLink="/smart-monitor/webhooks" class="manage-link">\r
                                {{ t('humanAuthnProjects.setup.integrations.manageWebhooks') }}\r
                                <mat-icon>open_in_new</mat-icon>\r
                            </a>\r
                        </div>\r
                    </article>\r
                </div>\r
            </section>\r
\r
            <aside class="integrations-explainer" aria-live="polite">\r
                <div class="section-heading section-heading--light">\r
                    <span>02</span>\r
                    <div>\r
                        <h3>{{ t('humanAuthnProjects.setup.integrations.howTitle') }}</h3>\r
                        <p>{{ t('humanAuthnProjects.setup.integrations.howHelp') }}</p>\r
                    </div>\r
                </div>\r
\r
                <div class="integrations-flow">\r
                    <div class="integrations-flow__node">\r
                        <mat-icon>task_alt</mat-icon>\r
                        <span>{{ t('humanAuthnProjects.setup.integrations.flowFinish') }}</span>\r
                    </div>\r
                    <span class="integrations-flow__line"><mat-icon>arrow_forward</mat-icon></span>\r
                    <div class="integrations-flow__node integrations-flow__node--browser">\r
                        <mat-icon>open_in_browser</mat-icon>\r
                        <span>{{ t('humanAuthnProjects.setup.integrations.flowBrowser') }}</span>\r
                    </div>\r
                    <span class="integrations-flow__line"><mat-icon>arrow_forward</mat-icon></span>\r
                    <div\r
                        class="integrations-flow__node"\r
                        [class.integrations-flow__node--server]="hasWebhook"\r
                        [class.integrations-flow__node--skipped]="!hasWebhook"\r
                    >\r
                        <mat-icon>{{ hasWebhook ? 'dns' : 'notifications_off' }}</mat-icon>\r
                        <span>\r
                            {{\r
                                t(\r
                                    hasWebhook\r
                                        ? 'humanAuthnProjects.setup.integrations.flowServer'\r
                                        : 'humanAuthnProjects.setup.integrations.flowSkipped'\r
                                )\r
                            }}\r
                        </span>\r
                    </div>\r
                </div>\r
\r
                <div class="selected-path">\r
                    <span class="selected-path__label">{{ t('humanAuthnProjects.setup.integrations.selectedPath') }}</span>\r
                    @if (hasWebhook) {\r
                        <h4>{{ t('humanAuthnProjects.setup.integrations.withWebhookTitle') }}</h4>\r
                        <p>\r
                            {{\r
                                t('humanAuthnProjects.setup.integrations.withWebhookBody', {\r
                                    name: selectedWebhookName,\r
                                })\r
                            }}\r
                        </p>\r
                        <div class="selected-path__result">\r
                            <mat-icon>webhook</mat-icon>\r
                            <span>{{ selectedWebhookName }}</span>\r
                        </div>\r
                    } @else {\r
                        <h4>{{ t('humanAuthnProjects.setup.integrations.noWebhookTitle') }}</h4>\r
                        <p>{{ t('humanAuthnProjects.setup.integrations.noWebhookBody') }}</p>\r
                        <div class="selected-path__result">\r
                            <mat-icon>notifications_off</mat-icon>\r
                            <span>{{ t('humanAuthnProjects.setup.integrations.flowSkipped') }}</span>\r
                        </div>\r
                    }\r
                </div>\r
            </aside>\r
        </div>\r
\r
        <section class="integrations-channels">\r
            <div class="section-heading">\r
                <span>03</span>\r
                <div>\r
                    <h3>{{ t('humanAuthnProjects.setup.integrations.channelsTitle') }}</h3>\r
                    <p>{{ t('humanAuthnProjects.setup.integrations.channelsHelp') }}</p>\r
                </div>\r
            </div>\r
\r
            <div class="channel-items">\r
                <article>\r
                    <span class="channel-items__icon channel-items__icon--person"><mat-icon>person</mat-icon></span>\r
                    <div>\r
                        <strong>{{ t('humanAuthnProjects.setup.integrations.personTitle') }}</strong>\r
                        <p>{{ t('humanAuthnProjects.setup.integrations.personBody') }}</p>\r
                    </div>\r
                </article>\r
                <article>\r
                    <span class="channel-items__icon channel-items__icon--server"><mat-icon>dns</mat-icon></span>\r
                    <div>\r
                        <strong>{{ t('humanAuthnProjects.setup.integrations.serverTitle') }}</strong>\r
                        <p>{{ t('humanAuthnProjects.setup.integrations.serverBody') }}</p>\r
                    </div>\r
                </article>\r
                <article>\r
                    <span class="channel-items__icon channel-items__icon--separate"><mat-icon>call_split</mat-icon></span>\r
                    <div>\r
                        <strong>{{ t('humanAuthnProjects.setup.integrations.separateTitle') }}</strong>\r
                        <p>{{ t('humanAuthnProjects.setup.integrations.separateBody') }}</p>\r
                    </div>\r
                </article>\r
            </div>\r
        </section>\r
    </div>\r
</ng-container>\r
`, styles: ["/* src/app/modules/human-authn/projects/setup/steps/integrations-step.component.scss */\n:host {\n  display: block;\n}\n.integrations-screen {\n  margin-inline: auto;\n  width: min(100%, 76rem);\n}\n.integrations-hero {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 2rem;\n  margin-bottom: 2rem;\n  padding: 0.5rem 0.25rem;\n}\n.integrations-hero h2 {\n  max-width: 42rem;\n  margin: 0.35rem 0 0;\n  color: #1c1917;\n  font-size: clamp(1.75rem, 3vw, 2.55rem);\n  font-weight: 680;\n  letter-spacing: -0.045em;\n  line-height: 1.05;\n}\n.integrations-hero p {\n  max-width: 42rem;\n  margin: 0.75rem 0 0;\n  color: #78716c;\n  font-size: 0.88rem;\n  line-height: 1.6;\n}\n.integrations-hero__eyebrow {\n  color: #78716c;\n  font-size: 0.65rem;\n  font-weight: 750;\n  letter-spacing: 0.16em;\n  text-transform: uppercase;\n}\n.integrations-hero__choice {\n  display: flex;\n  flex: 0 0 auto;\n  flex-direction: column;\n  align-items: flex-end;\n  max-width: 16rem;\n  padding: 0.75rem 1rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 0.9rem;\n  background: white;\n}\n.integrations-hero__choice span {\n  color: #a8a29e;\n  font-size: 0.62rem;\n  font-weight: 650;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n.integrations-hero__choice strong {\n  margin-top: 0.15rem;\n  color: #292524;\n  font-size: 0.82rem;\n  text-align: right;\n  overflow-wrap: anywhere;\n}\n.integrations-hero__choice em {\n  margin-top: 0.2rem;\n  color: #78716c;\n  font-size: 0.72rem;\n  font-style: normal;\n  font-weight: 600;\n}\n.integrations-decision {\n  display: grid;\n  grid-template-columns: minmax(0, 1.08fr) minmax(22rem, 0.92fr);\n  overflow: hidden;\n  border: 1px solid #d6d3d1;\n  border-radius: 1.5rem;\n  background: white;\n  box-shadow: 0 1px 2px rgba(28, 25, 23, 0.03), 0 18px 45px rgba(28, 25, 23, 0.05);\n}\n.destinations,\n.integrations-explainer {\n  padding: 1.75rem;\n}\n.integrations-explainer {\n  background: #1c1917;\n  color: white;\n}\n.section-heading {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.8rem;\n  margin-bottom: 1.25rem;\n}\n.section-heading > span {\n  display: grid;\n  flex: 0 0 1.8rem;\n  width: 1.8rem;\n  height: 1.8rem;\n  place-items: center;\n  border-radius: 999px;\n  background: #292524;\n  color: white;\n  font-size: 0.62rem;\n  font-weight: 750;\n}\n.section-heading h3 {\n  margin: 0;\n  color: #292524;\n  font-size: 0.95rem;\n  font-weight: 680;\n  letter-spacing: -0.015em;\n}\n.section-heading p {\n  margin: 0.25rem 0 0;\n  color: #78716c;\n  font-size: 0.72rem;\n  line-height: 1.45;\n}\n.section-heading--light > span {\n  background: white;\n  color: #1c1917;\n}\n.section-heading--light h3 {\n  color: white;\n}\n.section-heading--light p {\n  color: #a8a29e;\n}\n.destination-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0.8rem;\n}\n.destination {\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr);\n  align-items: flex-start;\n  gap: 1rem;\n  padding: 1.15rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 1rem;\n  background: #fafaf9;\n}\n.destination--ready {\n  border-color: #292524;\n  background: white;\n  box-shadow: inset 0 0 0 1px #292524, 0 8px 22px rgba(28, 25, 23, 0.06);\n}\n.destination__icon {\n  display: grid;\n  width: 2.6rem;\n  height: 2.6rem;\n  place-items: center;\n  border-radius: 0.8rem;\n  background: #e7e5e4;\n  color: #44403c;\n}\n.destination__icon mat-icon {\n  width: 1.25rem;\n  height: 1.25rem;\n  font-size: 1.25rem;\n}\n.destination--ready .destination__icon {\n  background: #292524;\n  color: white;\n}\n.destination__content,\n.destination__benefits,\n.destination__benefits span {\n  display: flex;\n}\n.destination__content,\n.destination__benefits {\n  min-width: 0;\n  flex-direction: column;\n}\n.destination__title {\n  display: flex;\n  align-items: center;\n  gap: 0.55rem;\n}\n.destination__title strong {\n  color: #292524;\n  font-size: 0.9rem;\n  font-weight: 680;\n}\n.destination__title small {\n  padding: 0.2rem 0.45rem;\n  border-radius: 999px;\n  background: #e7e5e4;\n  color: #57534e;\n  font-size: 0.58rem;\n  font-weight: 700;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n}\n.destination__body {\n  margin-top: 0.35rem;\n  color: #78716c;\n  font-size: 0.72rem;\n  line-height: 1.45;\n}\n.destination__benefits {\n  gap: 0.3rem;\n  margin-top: 0.75rem;\n  color: #57534e;\n  font-size: 0.66rem;\n}\n.destination__benefits span {\n  align-items: center;\n  gap: 0.35rem;\n}\n.destination__benefits mat-icon {\n  width: 0.85rem;\n  height: 0.85rem;\n  color: #166534;\n  font-size: 0.85rem;\n  font-weight: 700;\n}\n.destination mat-form-field {\n  width: 100%;\n  margin-top: 0.9rem;\n}\n.field-error,\n.destination__empty {\n  margin: 0.35rem 0 0;\n  font-size: 0.72rem;\n  line-height: 1.4;\n}\n.field-error {\n  color: #b91c1c;\n}\n.destination__empty {\n  color: #78716c;\n}\n.manage-link {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.3rem;\n  margin-top: 0.7rem;\n  color: #292524;\n  font-size: 0.75rem;\n  font-weight: 650;\n  text-underline-offset: 0.15rem;\n}\n.manage-link mat-icon {\n  width: 0.9rem;\n  height: 0.9rem;\n  font-size: 0.9rem;\n}\n.integrations-flow {\n  display: grid;\n  grid-template-columns: 1fr auto 1fr auto 1fr;\n  align-items: center;\n  gap: 0.45rem;\n  margin: 1.8rem 0;\n}\n.integrations-flow__node {\n  display: flex;\n  min-width: 0;\n  min-height: 5.2rem;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  padding: 0.65rem;\n  border: 1px solid #44403c;\n  border-radius: 0.8rem;\n  background: #292524;\n  text-align: center;\n}\n.integrations-flow__node mat-icon {\n  color: #d6d3d1;\n}\n.integrations-flow__node span {\n  color: #d6d3d1;\n  font-size: 0.62rem;\n  font-weight: 600;\n  line-height: 1.3;\n}\n.integrations-flow__node--browser,\n.integrations-flow__node--server {\n  border-color: #a8a29e;\n  background: white;\n}\n.integrations-flow__node--browser mat-icon,\n.integrations-flow__node--browser span,\n.integrations-flow__node--server mat-icon,\n.integrations-flow__node--server span {\n  color: #1c1917;\n}\n.integrations-flow__node--skipped {\n  border-style: dashed;\n  border-color: #57534e;\n  background: transparent;\n}\n.integrations-flow__node--skipped mat-icon,\n.integrations-flow__node--skipped span {\n  color: #a8a29e;\n}\n.integrations-flow__line {\n  color: #78716c;\n}\n.integrations-flow__line mat-icon {\n  width: 1rem;\n  height: 1rem;\n  font-size: 1rem;\n}\n.selected-path {\n  padding-top: 1.25rem;\n  border-top: 1px solid #44403c;\n}\n.selected-path h4 {\n  margin: 0.35rem 0 0;\n  color: white;\n  font-size: 1rem;\n  font-weight: 650;\n}\n.selected-path > p {\n  margin: 0.55rem 0 0;\n  color: #a8a29e;\n  font-size: 0.72rem;\n  line-height: 1.55;\n}\n.selected-path__label {\n  color: #78716c;\n  font-size: 0.6rem;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n}\n.selected-path__result {\n  display: flex;\n  align-items: center;\n  gap: 0.55rem;\n  margin-top: 1rem;\n  padding: 0.75rem 0.85rem;\n  border: 1px solid #44403c;\n  border-radius: 0.75rem;\n  background: #292524;\n  color: #d6d3d1;\n  font-size: 0.68rem;\n}\n.selected-path__result mat-icon {\n  width: 1rem;\n  height: 1rem;\n  font-size: 1rem;\n}\n.selected-path__result span {\n  min-width: 0;\n  overflow-wrap: anywhere;\n}\n.integrations-channels {\n  margin-top: 1.25rem;\n  padding: 1.5rem 1.75rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 1.25rem;\n  background: white;\n}\n.channel-items {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 0.75rem;\n}\n.channel-items article {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.75rem;\n  padding: 0.9rem;\n  border: 1px solid #f5f5f4;\n  border-radius: 0.85rem;\n  background: #fafaf9;\n}\n.channel-items strong {\n  color: #292524;\n  font-size: 0.75rem;\n  font-weight: 650;\n}\n.channel-items p {\n  margin: 0.25rem 0 0;\n  color: #78716c;\n  font-size: 0.65rem;\n  line-height: 1.45;\n}\n.channel-items__icon {\n  display: grid;\n  flex: 0 0 2rem;\n  width: 2rem;\n  height: 2rem;\n  place-items: center;\n  border-radius: 0.6rem;\n}\n.channel-items__icon mat-icon {\n  width: 1rem;\n  height: 1rem;\n  font-size: 1rem;\n}\n.channel-items__icon--person {\n  background: #ecfdf5;\n  color: #047857;\n}\n.channel-items__icon--server {\n  background: #eff6ff;\n  color: #1d4ed8;\n}\n.channel-items__icon--separate {\n  background: #f5f5f4;\n  color: #57534e;\n}\n:host-context(.dark) .integrations-hero h2,\n:host-context(.dark) .section-heading h3,\n:host-context(.dark) .destination__title strong,\n:host-context(.dark) .channel-items strong,\n:host-context(.dark) .integrations-hero__choice strong,\n:host-context(.dark) .manage-link {\n  color: #f8fafc;\n}\n:host-context(.dark) .integrations-hero p,\n:host-context(.dark) .integrations-hero__eyebrow,\n:host-context(.dark) .section-heading p,\n:host-context(.dark) .destination__body,\n:host-context(.dark) .destination__benefits,\n:host-context(.dark) .destination__empty,\n:host-context(.dark) .channel-items p,\n:host-context(.dark) .integrations-hero__choice span,\n:host-context(.dark) .integrations-hero__choice em {\n  color: #94a3b8;\n}\n:host-context(.dark) .integrations-hero__choice,\n:host-context(.dark) .integrations-decision,\n:host-context(.dark) .integrations-channels {\n  border-color: rgba(148, 163, 184, 0.18);\n  background: #1e293b;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);\n}\n:host-context(.dark) .destinations {\n  background: #1e293b;\n}\n:host-context(.dark) .section-heading > span {\n  background: #cbd5e1;\n  color: #0f172a;\n}\n:host-context(.dark) .destination,\n:host-context(.dark) .channel-items article {\n  border-color: #334155;\n  background: #0f172a;\n}\n:host-context(.dark) .destination--ready {\n  border-color: #e2e8f0;\n  background: #0f172a;\n  box-shadow: inset 0 0 0 1px #e2e8f0;\n}\n:host-context(.dark) .destination__icon,\n:host-context(.dark) .destination__title small {\n  background: #334155;\n  color: #e2e8f0;\n}\n:host-context(.dark) .destination--ready .destination__icon {\n  background: #e2e8f0;\n  color: #0f172a;\n}\n:host-context(.dark) .destination__benefits mat-icon {\n  color: #6ee7b7;\n}\n:host-context(.dark) .field-error {\n  color: #fda4af;\n}\n:host-context(.dark) .integrations-explainer {\n  background: #1e293b;\n}\n:host-context(.dark) .section-heading--light > span {\n  background: #e2e8f0;\n  color: #0f172a;\n}\n:host-context(.dark) .section-heading--light h3 {\n  color: #f8fafc;\n}\n:host-context(.dark) .section-heading--light p {\n  color: #94a3b8;\n}\n:host-context(.dark) .integrations-flow__node {\n  border-color: #475569;\n  background: #334155;\n}\n:host-context(.dark) .integrations-flow__node mat-icon,\n:host-context(.dark) .integrations-flow__node span {\n  color: #e2e8f0;\n}\n:host-context(.dark) .integrations-flow__node--browser,\n:host-context(.dark) .integrations-flow__node--server {\n  border-color: #cbd5e1;\n  background: #e2e8f0;\n}\n:host-context(.dark) .integrations-flow__node--browser mat-icon,\n:host-context(.dark) .integrations-flow__node--browser span,\n:host-context(.dark) .integrations-flow__node--server mat-icon,\n:host-context(.dark) .integrations-flow__node--server span {\n  color: #0f172a;\n}\n:host-context(.dark) .integrations-flow__node--skipped {\n  border-color: #64748b;\n  background: transparent;\n}\n:host-context(.dark) .integrations-flow__node--skipped mat-icon,\n:host-context(.dark) .integrations-flow__node--skipped span {\n  color: #94a3b8;\n}\n:host-context(.dark) .integrations-flow__line {\n  color: #94a3b8;\n}\n:host-context(.dark) .selected-path {\n  border-top-color: #475569;\n}\n:host-context(.dark) .selected-path h4 {\n  color: #f8fafc;\n}\n:host-context(.dark) .selected-path > p {\n  color: #94a3b8;\n}\n:host-context(.dark) .selected-path__label {\n  color: #64748b;\n}\n:host-context(.dark) .selected-path__result {\n  border-color: #475569;\n  background: #334155;\n  color: #e2e8f0;\n}\n:host-context(.dark) .channel-items__icon--person {\n  background: rgba(16, 185, 129, 0.14);\n  color: #6ee7b7;\n}\n:host-context(.dark) .channel-items__icon--server {\n  background: rgba(59, 130, 246, 0.16);\n  color: #93c5fd;\n}\n:host-context(.dark) .channel-items__icon--separate {\n  background: #334155;\n  color: #cbd5e1;\n}\n@media (max-width: 900px) {\n  .integrations-decision {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 680px) {\n  .integrations-hero {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n  .integrations-hero__choice {\n    align-items: flex-start;\n    max-width: none;\n  }\n  .integrations-hero__choice strong {\n    text-align: left;\n  }\n  .destinations,\n  .integrations-explainer,\n  .integrations-channels {\n    padding: 1.25rem;\n  }\n  .integrations-flow {\n    grid-template-columns: 1fr;\n  }\n  .integrations-flow__line {\n    display: grid;\n    place-items: center;\n    transform: rotate(90deg);\n  }\n  .channel-items {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=integrations-step.component.css.map */\n"] }]
  }], null, { form: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HumanAuthnIntegrationsStepComponent, { className: "HumanAuthnIntegrationsStepComponent", filePath: "src/app/modules/human-authn/projects/setup/steps/integrations-step.component.ts", lineNumber: 28 });
})();

// src/app/modules/human-authn/projects/setup/steps/signup-step.component.ts
var _c04 = ["countryCodeSearchInput"];
var _c13 = () => [];
var _c23 = (a0) => ({ channel: a0 });
var _forTrack04 = ($index, $item) => $item.value;
var _forTrack13 = ($index, $item) => $item.code;
function HumanAuthnSignupStepComponent_ng_container_0_Conditional_69_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 50);
    \u0275\u0275listener("click", function HumanAuthnSignupStepComponent_ng_container_0_Conditional_69_Conditional_35_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.clearCountryCodeSearch($event));
    });
    \u0275\u0275elementStart(1, "mat-icon", 51);
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function HumanAuthnSignupStepComponent_ng_container_0_Conditional_69_For_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 49)(1, "span", 43);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 44);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const country_r5 = ctx.$implicit;
    \u0275\u0275property("value", country_r5.code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(country_r5.code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(country_r5.name);
  }
}
function HumanAuthnSignupStepComponent_ng_container_0_Conditional_69_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38)(1, "button", 39);
    \u0275\u0275listener("click", function HumanAuthnSignupStepComponent_ng_container_0_Conditional_69_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPhoneChannelChange("whatsapp", !ctx_r1.phoneWhatsappChecked));
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span")(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "button", 39);
    \u0275\u0275listener("click", function HumanAuthnSignupStepComponent_ng_container_0_Conditional_69_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPhoneChannelChange("sms", !ctx_r1.phoneSmsChecked));
    });
    \u0275\u0275elementStart(8, "mat-icon");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span")(11, "strong");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "button", 39);
    \u0275\u0275listener("click", function HumanAuthnSignupStepComponent_ng_container_0_Conditional_69_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPhoneChannelChange("none", true));
    });
    \u0275\u0275elementStart(14, "mat-icon");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span")(17, "strong");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(19, "p", 40);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "mat-form-field", 41)(22, "mat-label");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "mat-select", 42);
    \u0275\u0275listener("openedChange", function HumanAuthnSignupStepComponent_ng_container_0_Conditional_69_Template_mat_select_openedChange_24_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView($event && ctx_r1.onCountryCodeSelectOpened());
    });
    \u0275\u0275elementStart(25, "mat-select-trigger")(26, "span", 43);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span", 44);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 45);
    \u0275\u0275listener("click", function HumanAuthnSignupStepComponent_ng_container_0_Conditional_69_Template_div_click_30_listener($event) {
      \u0275\u0275restoreView(_r3);
      return \u0275\u0275resetView($event.stopPropagation());
    })("keydown", function HumanAuthnSignupStepComponent_ng_container_0_Conditional_69_Template_div_keydown_30_listener($event) {
      \u0275\u0275restoreView(_r3);
      return \u0275\u0275resetView($event.stopPropagation());
    })("mousedown", function HumanAuthnSignupStepComponent_ng_container_0_Conditional_69_Template_div_mousedown_30_listener($event) {
      \u0275\u0275restoreView(_r3);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(31, "mat-icon", 46);
    \u0275\u0275text(32, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "input", 47, 0);
    \u0275\u0275listener("click", function HumanAuthnSignupStepComponent_ng_container_0_Conditional_69_Template_input_click_33_listener($event) {
      \u0275\u0275restoreView(_r3);
      return \u0275\u0275resetView($event.stopPropagation());
    })("input", function HumanAuthnSignupStepComponent_ng_container_0_Conditional_69_Template_input_input_33_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onCountryCodeSearchChange($event.target.value));
    })("keydown", function HumanAuthnSignupStepComponent_ng_container_0_Conditional_69_Template_input_keydown_33_listener($event) {
      \u0275\u0275restoreView(_r3);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(35, HumanAuthnSignupStepComponent_ng_container_0_Conditional_69_Conditional_35_Template, 3, 0, "button", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(36, HumanAuthnSignupStepComponent_ng_container_0_Conditional_69_For_37_Template, 5, 3, "mat-option", 49, _forTrack13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275attribute("aria-label", t_r6("humanAuthnProjects.setup.signup.channelHelp"));
    \u0275\u0275advance();
    \u0275\u0275classProp("option--selected", ctx_r1.phoneWhatsappChecked);
    \u0275\u0275attribute("aria-checked", ctx_r1.phoneWhatsappChecked);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.phoneWhatsappChecked ? "check_box" : "check_box_outline_blank");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r6("humanAuthnProjects.setup.signup.channelWhatsapp"));
    \u0275\u0275advance();
    \u0275\u0275classProp("option--selected", ctx_r1.phoneSmsChecked);
    \u0275\u0275attribute("aria-checked", ctx_r1.phoneSmsChecked);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.phoneSmsChecked ? "check_box" : "check_box_outline_blank");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r6("humanAuthnProjects.setup.signup.channelSms"));
    \u0275\u0275advance();
    \u0275\u0275classProp("option--selected", ctx_r1.phoneGateway === "none");
    \u0275\u0275attribute("aria-checked", ctx_r1.phoneGateway === "none");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.phoneGateway === "none" ? "check_box" : "check_box_outline_blank");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r6("humanAuthnProjects.setup.signup.channelNone"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r6("humanAuthnProjects.setup.signup.channelHelp"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r6("humanAuthnProjects.setup.signup.countryCode"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.countryCode);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.selectedCountryName);
    \u0275\u0275advance(4);
    \u0275\u0275property("placeholder", t_r6("humanAuthnProjects.setup.signup.searchCountry"))("value", ctx_r1.countryCodeSearchTerm);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.countryCodeSearchTerm ? 35 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.filteredPhoneCountryCodes);
  }
}
function HumanAuthnSignupStepComponent_ng_container_0_Conditional_84_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "button", 17);
    \u0275\u0275listener("click", function HumanAuthnSignupStepComponent_ng_container_0_Conditional_84_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setEmailVerified(true));
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span")(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "em");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "button", 17);
    \u0275\u0275listener("click", function HumanAuthnSignupStepComponent_ng_container_0_Conditional_84_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setEmailVerified(false));
    });
    \u0275\u0275elementStart(10, "mat-icon");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span")(13, "strong");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "em");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const t_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275attribute("aria-label", t_r6("humanAuthnProjects.setup.signup.emailTitle"));
    \u0275\u0275advance();
    \u0275\u0275classProp("option--selected", ctx_r1.emailVerified);
    \u0275\u0275attribute("aria-checked", ctx_r1.emailVerified);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.emailVerified ? "check_circle" : "radio_button_unchecked");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r6("humanAuthnProjects.setup.signup.emailVerify"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r6("humanAuthnProjects.setup.signup.emailVerifyBody"));
    \u0275\u0275advance();
    \u0275\u0275classProp("option--selected", !ctx_r1.emailVerified);
    \u0275\u0275attribute("aria-checked", !ctx_r1.emailVerified);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(!ctx_r1.emailVerified ? "check_circle" : "radio_button_unchecked");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r6("humanAuthnProjects.setup.signup.emailPlain"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r6("humanAuthnProjects.setup.signup.emailPlainBody"));
  }
}
function HumanAuthnSignupStepComponent_ng_container_0_Conditional_99_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 39);
    \u0275\u0275listener("click", function HumanAuthnSignupStepComponent_ng_container_0_Conditional_99_For_2_Template_button_click_0_listener() {
      const field_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleAdditionalField(field_r9.value, !ctx_r1.additionalFieldChecked(field_r9.value)));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span")(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const field_r9 = ctx.$implicit;
    const t_r6 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("option--selected", ctx_r1.additionalFieldChecked(field_r9.value));
    \u0275\u0275attribute("aria-checked", ctx_r1.additionalFieldChecked(field_r9.value));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.additionalFieldChecked(field_r9.value) ? "check_box" : "check_box_outline_blank");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r6(field_r9.labelKey));
  }
}
function HumanAuthnSignupStepComponent_ng_container_0_Conditional_99_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275repeaterCreate(1, HumanAuthnSignupStepComponent_ng_container_0_Conditional_99_For_2_Template, 6, 5, "button", 52, _forTrack04);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275attribute("aria-label", t_r6("humanAuthnProjects.setup.signup.extrasTitle"));
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.additionalFields);
  }
}
function HumanAuthnSignupStepComponent_ng_container_0_Conditional_116_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.termsUrl || t_r6("humanAuthnProjects.setup.signup.urlMissing"));
  }
}
function HumanAuthnSignupStepComponent_ng_container_0_Conditional_122_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.privacyUrl || t_r6("humanAuthnProjects.setup.signup.urlMissing"));
  }
}
function HumanAuthnSignupStepComponent_ng_container_0_Conditional_136_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 30)(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "i");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r6("humanAuthnProjects.setup.signup.sampleFirstName"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r6("humanAuthnProjects.setup.signup.sampleLastName"));
  }
}
function HumanAuthnSignupStepComponent_ng_container_0_Conditional_137_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "i");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r6("humanAuthnProjects.setup.signup.sampleFullName"));
  }
}
function HumanAuthnSignupStepComponent_ng_container_0_Conditional_138_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "i")(4, "b");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "em");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r6("humanAuthnProjects.setup.signup.samplePhone"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.countryCode);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.phoneGateway === "none" ? t_r6("humanAuthnProjects.setup.signup.phoneTypedHint") : t_r6("humanAuthnProjects.setup.signup.phoneCodeHint", \u0275\u0275pureFunction1(3, _c23, t_r6(ctx_r1.phoneChannelKey))), " ");
  }
}
function HumanAuthnSignupStepComponent_ng_container_0_Conditional_139_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "i");
    \u0275\u0275elementStart(4, "em");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r6("humanAuthnProjects.setup.signup.sampleEmail"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.emailVerified ? t_r6("humanAuthnProjects.setup.signup.emailCodeHint") : t_r6("humanAuthnProjects.setup.signup.emailTypedHint"), " ");
  }
}
function HumanAuthnSignupStepComponent_ng_container_0_For_141_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "i");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const field_r10 = ctx.$implicit;
    const t_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r6(field_r10.labelKey));
  }
}
function HumanAuthnSignupStepComponent_ng_container_0_Conditional_142_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 31)(1, "mat-icon");
    \u0275\u0275text(2, "check_box_outline_blank");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r6("humanAuthnProjects.setup.signup.termsSample"));
  }
}
function HumanAuthnSignupStepComponent_ng_container_0_Conditional_143_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 31)(1, "mat-icon");
    \u0275\u0275text(2, "check_box_outline_blank");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r6("humanAuthnProjects.setup.signup.privacySample"));
  }
}
function HumanAuthnSignupStepComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0, 2);
    \u0275\u0275elementStart(1, "div", 3)(2, "header", 4)(3, "div")(4, "span", 5);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h2");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 6)(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "strong");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 7)(16, "section", 8)(17, "div", 9)(18, "span");
    \u0275\u0275text(19, "01");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div")(21, "h3");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "p");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 10)(26, "article", 11)(27, "span", 12)(28, "mat-icon");
    \u0275\u0275text(29, "person");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 13)(31, "span", 14)(32, "strong");
    \u0275\u0275text(33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "small");
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "span", 15);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 16)(39, "button", 17);
    \u0275\u0275listener("click", function HumanAuthnSignupStepComponent_ng_container_0_Template_button_click_39_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setNameStyle("separate"));
    });
    \u0275\u0275elementStart(40, "mat-icon");
    \u0275\u0275text(41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "span")(43, "strong");
    \u0275\u0275text(44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "em");
    \u0275\u0275text(46);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(47, "button", 17);
    \u0275\u0275listener("click", function HumanAuthnSignupStepComponent_ng_container_0_Template_button_click_47_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setNameStyle("together"));
    });
    \u0275\u0275elementStart(48, "mat-icon");
    \u0275\u0275text(49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "span")(51, "strong");
    \u0275\u0275text(52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "em");
    \u0275\u0275text(54);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(55, "article", 18)(56, "span", 12)(57, "mat-icon");
    \u0275\u0275text(58, "smartphone");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "div", 13)(60, "div", 19)(61, "span", 14)(62, "strong");
    \u0275\u0275text(63);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "small");
    \u0275\u0275text(65);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(66, "mat-slide-toggle", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "span", 15);
    \u0275\u0275text(68);
    \u0275\u0275elementEnd();
    \u0275\u0275template(69, HumanAuthnSignupStepComponent_ng_container_0_Conditional_69_Template, 38, 23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(70, "article", 18)(71, "span", 12)(72, "mat-icon");
    \u0275\u0275text(73, "mail");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(74, "div", 13)(75, "div", 19)(76, "span", 14)(77, "strong");
    \u0275\u0275text(78);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "small");
    \u0275\u0275text(80);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(81, "mat-slide-toggle", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "span", 15);
    \u0275\u0275text(83);
    \u0275\u0275elementEnd();
    \u0275\u0275template(84, HumanAuthnSignupStepComponent_ng_container_0_Conditional_84_Template, 17, 13, "div", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(85, "article", 18)(86, "span", 12)(87, "mat-icon");
    \u0275\u0275text(88, "playlist_add");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(89, "div", 13)(90, "div", 19)(91, "span", 14)(92, "strong");
    \u0275\u0275text(93);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "small");
    \u0275\u0275text(95);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(96, "mat-slide-toggle", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(97, "span", 15);
    \u0275\u0275text(98);
    \u0275\u0275elementEnd();
    \u0275\u0275template(99, HumanAuthnSignupStepComponent_ng_container_0_Conditional_99_Template, 3, 1, "div", 23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(100, "article", 18)(101, "span", 12)(102, "mat-icon");
    \u0275\u0275text(103, "gavel");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(104, "div", 13)(105, "span", 14)(106, "strong");
    \u0275\u0275text(107);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(108, "small");
    \u0275\u0275text(109);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(110, "span", 15);
    \u0275\u0275text(111);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(112, "div", 24)(113, "div")(114, "strong");
    \u0275\u0275text(115);
    \u0275\u0275elementEnd();
    \u0275\u0275template(116, HumanAuthnSignupStepComponent_ng_container_0_Conditional_116_Template, 2, 1, "p");
    \u0275\u0275elementEnd();
    \u0275\u0275element(117, "mat-slide-toggle", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(118, "div", 24)(119, "div")(120, "strong");
    \u0275\u0275text(121);
    \u0275\u0275elementEnd();
    \u0275\u0275template(122, HumanAuthnSignupStepComponent_ng_container_0_Conditional_122_Template, 2, 1, "p");
    \u0275\u0275elementEnd();
    \u0275\u0275element(123, "mat-slide-toggle", 26);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(124, "aside", 27)(125, "div", 28)(126, "span");
    \u0275\u0275text(127, "02");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(128, "div")(129, "h3");
    \u0275\u0275text(130);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(131, "p");
    \u0275\u0275text(132);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(133, "div", 29)(134, "h4");
    \u0275\u0275text(135);
    \u0275\u0275elementEnd();
    \u0275\u0275template(136, HumanAuthnSignupStepComponent_ng_container_0_Conditional_136_Template, 8, 2)(137, HumanAuthnSignupStepComponent_ng_container_0_Conditional_137_Template, 4, 1, "div", 30)(138, HumanAuthnSignupStepComponent_ng_container_0_Conditional_138_Template, 8, 5, "div", 30)(139, HumanAuthnSignupStepComponent_ng_container_0_Conditional_139_Template, 6, 2, "div", 30);
    \u0275\u0275repeaterCreate(140, HumanAuthnSignupStepComponent_ng_container_0_For_141_Template, 4, 1, "div", 30, _forTrack04);
    \u0275\u0275template(142, HumanAuthnSignupStepComponent_ng_container_0_Conditional_142_Template, 4, 1, "p", 31)(143, HumanAuthnSignupStepComponent_ng_container_0_Conditional_143_Template, 4, 1, "p", 31);
    \u0275\u0275elementStart(144, "span", 32);
    \u0275\u0275text(145);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(146, "section", 33)(147, "div", 9)(148, "span");
    \u0275\u0275text(149, "03");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(150, "div")(151, "h3");
    \u0275\u0275text(152);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(153, "p");
    \u0275\u0275text(154);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(155, "div", 34)(156, "article")(157, "span", 35)(158, "mat-icon");
    \u0275\u0275text(159, "person");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(160, "div")(161, "strong");
    \u0275\u0275text(162);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(163, "p");
    \u0275\u0275text(164);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(165, "article")(166, "span", 36)(167, "mat-icon");
    \u0275\u0275text(168, "verified_user");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(169, "div")(170, "strong");
    \u0275\u0275text(171);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(172, "p");
    \u0275\u0275text(173);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(174, "article")(175, "span", 37)(176, "mat-icon");
    \u0275\u0275text(177, "tune");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(178, "div")(179, "strong");
    \u0275\u0275text(180);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(181, "p");
    \u0275\u0275text(182);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(t_r6("humanAuthnProjects.setup.signup.eyebrow"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r6("humanAuthnProjects.setup.signup.title"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r6("humanAuthnProjects.setup.signup.subtitle"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r6("humanAuthnProjects.setup.signup.currentChoice"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.collectedSummary);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(t_r6("humanAuthnProjects.setup.signup.fieldsTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r6("humanAuthnProjects.setup.signup.fieldsHelp"));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(t_r6("humanAuthnProjects.setup.signup.nameTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r6("humanAuthnProjects.setup.signup.nameRequired"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r6("humanAuthnProjects.setup.signup.nameBody"));
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", t_r6("humanAuthnProjects.setup.signup.nameTitle"));
    \u0275\u0275advance();
    \u0275\u0275classProp("option--selected", ctx_r1.nameStyle === "separate");
    \u0275\u0275attribute("aria-checked", ctx_r1.nameStyle === "separate");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.nameStyle === "separate" ? "check_circle" : "radio_button_unchecked");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r6("humanAuthnProjects.setup.signup.nameSeparate"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r6("humanAuthnProjects.setup.signup.nameSeparateBody"));
    \u0275\u0275advance();
    \u0275\u0275classProp("option--selected", ctx_r1.nameStyle === "together");
    \u0275\u0275attribute("aria-checked", ctx_r1.nameStyle === "together");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.nameStyle === "together" ? "check_circle" : "radio_button_unchecked");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r6("humanAuthnProjects.setup.signup.nameTogether"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r6("humanAuthnProjects.setup.signup.nameTogetherBody"));
    \u0275\u0275advance();
    \u0275\u0275classProp("field-card--ready", ctx_r1.phoneOn);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(t_r6("humanAuthnProjects.setup.signup.phoneTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r6("humanAuthnProjects.setup.signup.optional"));
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", t_r6("humanAuthnProjects.setup.signup.phoneTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r6("humanAuthnProjects.setup.signup.phoneBody"));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.phoneOn ? 69 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("field-card--ready", ctx_r1.emailOn);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(t_r6("humanAuthnProjects.setup.signup.emailTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r6("humanAuthnProjects.setup.signup.optional"));
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", t_r6("humanAuthnProjects.setup.signup.emailTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r6("humanAuthnProjects.setup.signup.emailBody"));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.emailOn ? 84 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("field-card--ready", ctx_r1.extrasOn && ctx_r1.selectedExtras.length > 0);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(t_r6("humanAuthnProjects.setup.signup.extrasTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r6("humanAuthnProjects.setup.signup.optional"));
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", t_r6("humanAuthnProjects.setup.signup.extrasTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r6("humanAuthnProjects.setup.signup.extrasBody"));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.extrasOn ? 99 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("field-card--ready", ctx_r1.termsOn || ctx_r1.privacyOn);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(t_r6("humanAuthnProjects.setup.signup.legalTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r6("humanAuthnProjects.setup.signup.optional"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r6("humanAuthnProjects.setup.signup.legalBody"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r6("humanAuthnProjects.setup.signup.termsToggle"));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.termsOn ? 116 : -1);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", t_r6("humanAuthnProjects.setup.signup.termsToggle"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r6("humanAuthnProjects.setup.signup.privacyToggle"));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.privacyOn ? 122 : -1);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", t_r6("humanAuthnProjects.setup.signup.privacyToggle"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(t_r6("humanAuthnProjects.setup.signup.howTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r6("humanAuthnProjects.setup.signup.howHelp"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r6("humanAuthnProjects.setup.signup.sampleTitle"));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.nameStyle === "separate" ? 136 : 137);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.phoneOn ? 138 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.emailOn ? 139 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.extrasOn ? ctx_r1.selectedExtras : \u0275\u0275pureFunction0(73, _c13));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.termsOn ? 142 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.privacyOn ? 143 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r6("humanAuthnProjects.setup.signup.sampleContinue"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(t_r6("humanAuthnProjects.setup.signup.factsTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r6("humanAuthnProjects.setup.signup.factsHelp"));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(t_r6("humanAuthnProjects.setup.signup.factNameTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r6("humanAuthnProjects.setup.signup.factNameBody"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(t_r6("humanAuthnProjects.setup.signup.factContactTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r6("humanAuthnProjects.setup.signup.factContactBody"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(t_r6("humanAuthnProjects.setup.signup.factOptionalTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r6("humanAuthnProjects.setup.signup.factOptionalBody"));
  }
}
var phoneGatewayFromChannels = (whatsapp, sms) => {
  if (whatsapp && sms)
    return "both";
  if (whatsapp)
    return "whatsapp";
  if (sms)
    return "sms";
  return "none";
};
var ADDITIONAL_FIELDS = [
  { value: "gender", labelKey: "humanAuthnProjects.setup.signup.fieldGender" },
  { value: "country", labelKey: "humanAuthnProjects.setup.signup.fieldCountry" },
  { value: "dateOfBirth", labelKey: "humanAuthnProjects.setup.signup.fieldDateOfBirth" },
  { value: "address", labelKey: "humanAuthnProjects.setup.signup.fieldAddress" },
  { value: "age", labelKey: "humanAuthnProjects.setup.signup.fieldAge" },
  { value: "postalCode", labelKey: "humanAuthnProjects.setup.signup.fieldPostalCode" }
];
var HumanAuthnSignupStepComponent = class _HumanAuthnSignupStepComponent {
  constructor() {
    this._cdr = inject(ChangeDetectorRef);
    this._destroyRef = inject(DestroyRef);
    this._transloco = inject(TranslocoService);
    this.additionalFields = ADDITIONAL_FIELDS;
    this.allPhoneCountryCodes = PHONE_COUNTRY_CODES;
    this.filteredPhoneCountryCodes = PHONE_COUNTRY_CODES;
    this.countryCodeSearchTerm = "";
  }
  ngOnInit() {
    this.signUp?.valueChanges.pipe(takeUntilDestroyed(this._destroyRef)).subscribe(() => this._cdr.markForCheck());
    this._transloco.langChanges$.pipe(takeUntilDestroyed(this._destroyRef)).subscribe(() => this._cdr.markForCheck());
  }
  get signUp() {
    return this.form?.get("projectFlow.signUpForm") || null;
  }
  get nameStyle() {
    return this.signUp?.get("fullNameStyle")?.value === "separate" ? "separate" : "together";
  }
  get phoneOn() {
    return !!this.signUp?.get("phone")?.value;
  }
  get emailOn() {
    return !!this.signUp?.get("email")?.value;
  }
  get extrasOn() {
    return !!this.signUp?.get("allowAdditionalFields")?.value;
  }
  get termsOn() {
    return !!this.signUp?.get("showTermsAndConditions")?.value;
  }
  get privacyOn() {
    return !!this.signUp?.get("showPrivacyNotice")?.value;
  }
  get phoneGateway() {
    return this.signUp?.get("phoneGateway")?.value || "none";
  }
  get phoneWhatsappChecked() {
    return this.phoneGateway === "whatsapp" || this.phoneGateway === "both";
  }
  get phoneSmsChecked() {
    return this.phoneGateway === "sms" || this.phoneGateway === "both";
  }
  get emailVerified() {
    return this.signUp?.get("emailGateway")?.value === "mailgun";
  }
  get countryCode() {
    return this.signUp?.get("countryCode")?.value || "";
  }
  get selectedCountryName() {
    return this.allPhoneCountryCodes.find((country) => country.code === this.countryCode)?.name || "";
  }
  get termsUrl() {
    return `${this.form?.get("termsAndConditionsUrl")?.value || ""}`.trim();
  }
  get privacyUrl() {
    return `${this.form?.get("privacyUrl")?.value || ""}`.trim();
  }
  get selectedExtras() {
    const values = this.signUp?.get("additionalFields")?.value;
    if (!Array.isArray(values))
      return [];
    return this.additionalFields.filter((field) => values.includes(field.value));
  }
  get collectedSummary() {
    const parts = [this._transloco.translate("humanAuthnProjects.setup.signup.summaryName")];
    if (this.phoneOn)
      parts.push(this._transloco.translate("humanAuthnProjects.setup.signup.summaryPhone"));
    if (this.emailOn)
      parts.push(this._transloco.translate("humanAuthnProjects.setup.signup.summaryEmail"));
    if (this.extrasOn && this.selectedExtras.length) {
      parts.push(this._transloco.translate("humanAuthnProjects.setup.signup.summaryExtras", { count: this.selectedExtras.length }));
    }
    return parts.join(" \xB7 ");
  }
  get phoneChannelKey() {
    if (this.phoneGateway === "both")
      return "humanAuthnProjects.setup.signup.channelBothLabel";
    if (this.phoneGateway === "whatsapp")
      return "humanAuthnProjects.setup.signup.channelWhatsapp";
    if (this.phoneGateway === "sms")
      return "humanAuthnProjects.setup.signup.channelSms";
    return "";
  }
  setNameStyle(style) {
    this.signUp?.get("fullNameStyle")?.setValue(style);
    this.signUp?.markAsDirty();
  }
  /**
   * WhatsApp and SMS can both be on. Choosing "no code" clears them.
   * @param channel
   * @param checked
   */
  onPhoneChannelChange(channel, checked) {
    const control = this.signUp?.get("phoneGateway");
    if (!control)
      return;
    if (channel === "none") {
      if (checked)
        control.setValue("none");
    } else {
      control.setValue(phoneGatewayFromChannels(channel === "whatsapp" ? checked : this.phoneWhatsappChecked, channel === "sms" ? checked : this.phoneSmsChecked));
    }
    this.signUp?.markAsDirty();
    this._cdr.markForCheck();
  }
  setEmailVerified(verified) {
    this.signUp?.get("emailGateway")?.setValue(verified ? "mailgun" : "none");
    this.signUp?.markAsDirty();
  }
  additionalFieldChecked(value) {
    return this.selectedExtras.some((field) => field.value === value);
  }
  toggleAdditionalField(value, checked) {
    const control = this.signUp?.get("additionalFields");
    if (!control)
      return;
    const current = [...control.value || []];
    if (checked && !current.includes(value))
      current.push(value);
    if (!checked) {
      const index = current.indexOf(value);
      if (index >= 0)
        current.splice(index, 1);
    }
    control.setValue(current);
    this.signUp?.markAsDirty();
    this._cdr.markForCheck();
  }
  onCountryCodeSearchChange(searchTerm) {
    this.countryCodeSearchTerm = searchTerm;
    const term = searchTerm.toLowerCase().trim();
    this.filteredPhoneCountryCodes = term ? this.allPhoneCountryCodes.filter((country) => country.code.toLowerCase().includes(term) || country.name.toLowerCase().includes(term)) : this.allPhoneCountryCodes;
    this._cdr.markForCheck();
  }
  onCountryCodeSelectOpened() {
    this.countryCodeSearchTerm = "";
    this.filteredPhoneCountryCodes = this.allPhoneCountryCodes;
    this._cdr.markForCheck();
    setTimeout(() => this.countryCodeSearchInput?.nativeElement?.focus(), 100);
  }
  clearCountryCodeSearch(event) {
    event.preventDefault();
    event.stopPropagation();
    this.onCountryCodeSearchChange("");
    setTimeout(() => this.countryCodeSearchInput?.nativeElement?.focus(), 0);
  }
  static {
    this.\u0275fac = function HumanAuthnSignupStepComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HumanAuthnSignupStepComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HumanAuthnSignupStepComponent, selectors: [["human-authn-signup-step"]], viewQuery: function HumanAuthnSignupStepComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c04, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.countryCodeSearchInput = _t.first);
      }
    }, inputs: { form: "form" }, decls: 1, vars: 0, consts: [["countryCodeSearchInput", ""], [3, "formGroup", 4, "transloco"], [3, "formGroup"], ["formGroupName", "projectFlow", 1, "signup-screen"], [1, "signup-hero"], [1, "signup-hero__eyebrow"], [1, "signup-hero__choice"], ["formGroupName", "signUpForm", 1, "signup-decision"], [1, "fields"], [1, "section-heading"], [1, "field-list"], [1, "field-card", "field-card--ready"], [1, "field-card__icon"], [1, "field-card__content"], [1, "field-card__title"], [1, "field-card__body"], ["role", "radiogroup", 1, "option-list"], ["type", "button", "role", "radio", 1, "option", 3, "click"], [1, "field-card"], [1, "field-card__head"], ["formControlName", "phone"], ["formControlName", "email"], ["formControlName", "allowAdditionalFields"], ["role", "group", 1, "option-list", "option-list--grid"], [1, "legal-row"], ["formControlName", "showTermsAndConditions"], ["formControlName", "showPrivacyNotice"], ["aria-live", "polite", 1, "signup-explainer"], [1, "section-heading", "section-heading--light"], ["aria-hidden", "true", 1, "sample"], [1, "sample-field"], [1, "sample-legal"], [1, "sample-button"], [1, "signup-facts"], [1, "fact-items"], [1, "fact-items__icon", "fact-items__icon--name"], [1, "fact-items__icon", "fact-items__icon--contact"], [1, "fact-items__icon", "fact-items__icon--optional"], ["role", "group", 1, "option-list"], ["type", "button", "role", "checkbox", 1, "option", 3, "click"], [1, "field-note"], ["appearance", "outline", "subscriptSizing", "dynamic", 1, "country-field"], ["formControlName", "countryCode", 3, "openedChange"], [1, "font-semibold"], [1, "ml-2", "text-stone-500"], [1, "sticky", "top-0", "z-10", "flex", "items-center", "gap-2", "bg-white", "px-3", "py-2", "dark:bg-gray-900", 3, "click", "keydown", "mousedown"], [1, "!h-4", "!w-4", "text-stone-400"], ["type", "text", 1, "w-full", "bg-transparent", "text-sm", "outline-none", "placeholder:text-stone-400", 3, "click", "input", "keydown", "placeholder", "value"], ["mat-icon-button", "", "type", "button", 1, "!h-6", "!w-6", "!min-w-0"], [3, "value"], ["mat-icon-button", "", "type", "button", 1, "!h-6", "!w-6", "!min-w-0", 3, "click"], [1, "!h-4", "!w-4"], ["type", "button", "role", "checkbox", 1, "option", 3, "option--selected"]], template: function HumanAuthnSignupStepComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, HumanAuthnSignupStepComponent_ng_container_0_Template, 183, 74, "ng-container", 1);
      }
    }, dependencies: [
      CommonModule,
      ReactiveFormsModule,
      NgControlStatus,
      NgControlStatusGroup,
      FormGroupDirective,
      FormControlName,
      FormGroupName,
      MatButtonModule,
      MatIconButton,
      MatFormFieldModule,
      MatFormField,
      MatLabel,
      MatIconModule,
      MatIcon,
      MatSelectModule,
      MatSelect,
      MatSelectTrigger,
      MatOption,
      MatSlideToggleModule,
      MatSlideToggle,
      TranslocoModule,
      TranslocoDirective
    ], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.signup-screen[_ngcontent-%COMP%] {\n  margin-inline: auto;\n  width: min(100%, 76rem);\n}\n.signup-hero[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 2rem;\n  margin-bottom: 2rem;\n  padding: 0.5rem 0.25rem;\n}\n.signup-hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  max-width: 42rem;\n  margin: 0.35rem 0 0;\n  color: #1c1917;\n  font-size: clamp(1.75rem, 3vw, 2.55rem);\n  font-weight: 680;\n  letter-spacing: -0.045em;\n  line-height: 1.05;\n}\n.signup-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 42rem;\n  margin: 0.75rem 0 0;\n  color: #78716c;\n  font-size: 0.88rem;\n  line-height: 1.6;\n}\n.signup-hero__eyebrow[_ngcontent-%COMP%] {\n  color: #78716c;\n  font-size: 0.65rem;\n  font-weight: 750;\n  letter-spacing: 0.16em;\n  text-transform: uppercase;\n}\n.signup-hero__choice[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 0 0 auto;\n  flex-direction: column;\n  align-items: flex-end;\n  max-width: 18rem;\n  padding: 0.75rem 1rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 0.9rem;\n  background: white;\n}\n.signup-hero__choice[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #a8a29e;\n  font-size: 0.62rem;\n  font-weight: 650;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n.signup-hero__choice[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  margin-top: 0.15rem;\n  color: #292524;\n  font-size: 0.82rem;\n  text-align: right;\n}\n.signup-decision[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1.15fr) minmax(20rem, 0.85fr);\n  overflow: hidden;\n  border: 1px solid #d6d3d1;\n  border-radius: 1.5rem;\n  background: white;\n  box-shadow: 0 1px 2px rgba(28, 25, 23, 0.03), 0 18px 45px rgba(28, 25, 23, 0.05);\n}\n.fields[_ngcontent-%COMP%], \n.signup-explainer[_ngcontent-%COMP%], \n.signup-facts[_ngcontent-%COMP%] {\n  padding: 1.75rem;\n}\n.signup-explainer[_ngcontent-%COMP%] {\n  background: #1c1917;\n  color: white;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.8rem;\n  margin-bottom: 1.25rem;\n}\n.section-heading[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: grid;\n  flex: 0 0 1.8rem;\n  width: 1.8rem;\n  height: 1.8rem;\n  place-items: center;\n  border-radius: 999px;\n  background: #292524;\n  color: white;\n  font-size: 0.62rem;\n  font-weight: 750;\n}\n.section-heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #292524;\n  font-size: 0.95rem;\n  font-weight: 680;\n  letter-spacing: -0.015em;\n}\n.section-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.25rem 0 0;\n  color: #78716c;\n  font-size: 0.72rem;\n  line-height: 1.45;\n}\n.section-heading--light[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  background: white;\n  color: #1c1917;\n}\n.section-heading--light[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: white;\n}\n.section-heading--light[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #a8a29e;\n}\n.field-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.8rem;\n}\n.field-card[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr);\n  gap: 1rem;\n  padding: 1.15rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 1rem;\n  background: #fafaf9;\n}\n.field-card--ready[_ngcontent-%COMP%] {\n  border-color: #292524;\n  background: white;\n  box-shadow: inset 0 0 0 1px #292524;\n}\n.field-card__icon[_ngcontent-%COMP%] {\n  display: grid;\n  width: 2.6rem;\n  height: 2.6rem;\n  place-items: center;\n  border-radius: 0.8rem;\n  background: #e7e5e4;\n  color: #44403c;\n}\n.field-card__icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 1.25rem;\n  height: 1.25rem;\n  font-size: 1.25rem;\n}\n.field-card--ready[_ngcontent-%COMP%]   .field-card__icon[_ngcontent-%COMP%] {\n  background: #292524;\n  color: white;\n}\n.field-card__head[_ngcontent-%COMP%], \n.legal-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 1rem;\n}\n.field-card__title[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 0.45rem;\n}\n.field-card__title[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #292524;\n  font-size: 0.92rem;\n}\n.field-card__title[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  padding: 0.12rem 0.4rem;\n  border-radius: 999px;\n  background: #e7e5e4;\n  color: #57534e;\n  font-size: 0.62rem;\n  font-weight: 700;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n}\n.field-card__body[_ngcontent-%COMP%], \n.field-note[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0.4rem 0 0;\n  color: #78716c;\n  font-size: 0.75rem;\n  line-height: 1.45;\n}\n.option-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.45rem;\n  margin-top: 0.85rem;\n}\n.option-list--grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n}\n.option[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.55rem;\n  width: 100%;\n  padding: 0.7rem 0.75rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 0.75rem;\n  background: white;\n  color: #44403c;\n  text-align: left;\n}\n.option[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 1.1rem;\n  height: 1.1rem;\n  margin-top: 0.05rem;\n  color: #a8a29e;\n  font-size: 1.1rem;\n}\n.option[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.option[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  display: block;\n}\n.option[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #292524;\n  font-size: 0.78rem;\n  font-weight: 650;\n}\n.option[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  margin-top: 0.1rem;\n  color: #78716c;\n  font-size: 0.68rem;\n  font-style: normal;\n  line-height: 1.35;\n}\n.option[_ngcontent-%COMP%]:focus-visible {\n  outline: 3px solid rgba(59, 130, 246, 0.35);\n  outline-offset: 2px;\n}\n.option--selected[_ngcontent-%COMP%] {\n  border-color: #292524;\n}\n.option--selected[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #047857;\n}\n.country-field[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  max-width: 22rem;\n  margin-top: 0.85rem;\n}\n.legal-row[_ngcontent-%COMP%] {\n  margin-top: 0.85rem;\n  padding-top: 0.75rem;\n  border-top: 1px solid #e7e5e4;\n}\n.legal-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #292524;\n  font-size: 0.78rem;\n}\n.legal-row[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.2rem 0 0;\n  color: #78716c;\n  font-size: 0.68rem;\n  line-height: 1.4;\n  overflow-wrap: anywhere;\n}\n.sample[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border: 1px solid #44403c;\n  border-radius: 1rem;\n  background: #292524;\n}\n.sample[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 0.9rem;\n  font-size: 0.95rem;\n  font-weight: 680;\n}\n.sample-field[_ngcontent-%COMP%] {\n  margin-bottom: 0.7rem;\n}\n.sample-field[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.sample-field[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  display: block;\n}\n.sample-field[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-bottom: 0.25rem;\n  color: #d6d3d1;\n  font-size: 0.68rem;\n}\n.sample-field[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  min-height: 2.1rem;\n  padding: 0 0.7rem;\n  border: 1px solid #57534e;\n  border-radius: 0.55rem;\n  background: #1c1917;\n  font-style: normal;\n}\n.sample-field[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: #e7e5e4;\n  font-size: 0.75rem;\n  font-weight: 650;\n}\n.sample-field[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  margin-top: 0.25rem;\n  color: #a8a29e;\n  font-size: 0.65rem;\n  font-style: normal;\n}\n.sample-legal[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  margin: 0.35rem 0;\n  color: #d6d3d1;\n  font-size: 0.72rem;\n}\n.sample-legal[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n  font-size: 1rem;\n}\n.sample-button[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 0.9rem;\n  padding: 0.65rem 0.8rem;\n  border-radius: 0.65rem;\n  background: white;\n  color: #1c1917;\n  font-size: 0.78rem;\n  font-weight: 700;\n  text-align: center;\n}\n.signup-facts[_ngcontent-%COMP%] {\n  margin-top: 1.25rem;\n  border: 1px solid #d6d3d1;\n  border-radius: 1.5rem;\n  background: white;\n}\n.fact-items[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 0.8rem;\n}\n.fact-items[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  padding: 0.9rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 0.9rem;\n  background: #fafaf9;\n}\n.fact-items[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #292524;\n  font-size: 0.78rem;\n}\n.fact-items[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.25rem 0 0;\n  color: #78716c;\n  font-size: 0.68rem;\n  line-height: 1.45;\n}\n.fact-items__icon[_ngcontent-%COMP%] {\n  display: grid;\n  flex: 0 0 2rem;\n  width: 2rem;\n  height: 2rem;\n  place-items: center;\n  border-radius: 0.6rem;\n}\n.fact-items__icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n  font-size: 1rem;\n}\n.fact-items__icon--name[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  color: #1d4ed8;\n}\n.fact-items__icon--contact[_ngcontent-%COMP%] {\n  background: #ecfdf5;\n  color: #047857;\n}\n.fact-items__icon--optional[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #b45309;\n}\n.dark[_nghost-%COMP%]   .signup-hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .signup-hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .section-heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .section-heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .field-card__title[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .field-card__title[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .option[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .option[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .legal-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .legal-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .fact-items[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .fact-items[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .signup-hero__choice[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .signup-hero__choice[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #f8fafc;\n}\n.dark[_nghost-%COMP%]   .signup-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .signup-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .signup-hero__eyebrow[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .signup-hero__eyebrow[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .section-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .section-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .field-card__body[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .field-card__body[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .field-note[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .field-note[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .option[_ngcontent-%COMP%]   em[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .option[_ngcontent-%COMP%]   em[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .legal-row[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .legal-row[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .fact-items[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .fact-items[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .signup-hero__choice[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .signup-hero__choice[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .signup-hero__choice[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .signup-hero__choice[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .signup-decision[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .signup-decision[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .signup-facts[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .signup-facts[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .field-card[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .field-card[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .option[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .option[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .fact-items[_ngcontent-%COMP%]   article[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .fact-items[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  border-color: #334155;\n  background: #0f172a;\n}\n.dark[_nghost-%COMP%]   .signup-decision[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .signup-decision[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .signup-facts[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .signup-facts[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .signup-hero__choice[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .signup-hero__choice[_ngcontent-%COMP%] {\n  background: #1e293b;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);\n}\n.dark[_nghost-%COMP%]   .fields[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .fields[_ngcontent-%COMP%] {\n  background: #1e293b;\n}\n.dark[_nghost-%COMP%]   .field-card--ready[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .field-card--ready[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .option--selected[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .option--selected[_ngcontent-%COMP%] {\n  border-color: #e2e8f0;\n  box-shadow: inset 0 0 0 1px #e2e8f0;\n}\n.dark[_nghost-%COMP%]   .field-card__icon[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .field-card__icon[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .field-card__title[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .field-card__title[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  background: #334155;\n  color: #e2e8f0;\n}\n.dark[_nghost-%COMP%]   .field-card--ready[_ngcontent-%COMP%]   .field-card__icon[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .field-card--ready[_ngcontent-%COMP%]   .field-card__icon[_ngcontent-%COMP%] {\n  background: #e2e8f0;\n  color: #0f172a;\n}\n.dark[_nghost-%COMP%]   .option[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .option[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n.dark[_nghost-%COMP%]   .option--selected[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .option--selected[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #6ee7b7;\n}\n.dark[_nghost-%COMP%]   .legal-row[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .legal-row[_ngcontent-%COMP%] {\n  border-top-color: #334155;\n}\n.dark[_nghost-%COMP%]   .section-heading[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .section-heading[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  background: #cbd5e1;\n  color: #0f172a;\n}\n.dark[_nghost-%COMP%]   .signup-explainer[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .signup-explainer[_ngcontent-%COMP%] {\n  background: #0f172a;\n}\n.dark[_nghost-%COMP%]   .section-heading--light[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .section-heading--light[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  background: #e2e8f0;\n  color: #0f172a;\n}\n.dark[_nghost-%COMP%]   .section-heading--light[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .section-heading--light[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .sample[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .sample[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #f8fafc;\n}\n.dark[_nghost-%COMP%]   .sample[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .sample[_ngcontent-%COMP%] {\n  border-color: #475569;\n  background: #1e293b;\n}\n.dark[_nghost-%COMP%]   .sample-field[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .sample-field[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  border-color: #475569;\n  background: #0f172a;\n}\n.dark[_nghost-%COMP%]   .sample-button[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .sample-button[_ngcontent-%COMP%] {\n  background: #e2e8f0;\n  color: #0f172a;\n}\n.dark[_nghost-%COMP%]   .fact-items__icon--name[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .fact-items__icon--name[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.16);\n  color: #93c5fd;\n}\n.dark[_nghost-%COMP%]   .fact-items__icon--contact[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .fact-items__icon--contact[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.14);\n  color: #6ee7b7;\n}\n.dark[_nghost-%COMP%]   .fact-items__icon--optional[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .fact-items__icon--optional[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.16);\n  color: #fcd34d;\n}\n@media (max-width: 980px) {\n  .signup-decision[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .fact-items[_ngcontent-%COMP%], \n   .option-list--grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 680px) {\n  .signup-hero[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n  .signup-hero__choice[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    max-width: none;\n  }\n  .signup-hero__choice[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    text-align: left;\n  }\n  .fields[_ngcontent-%COMP%], \n   .signup-explainer[_ngcontent-%COMP%], \n   .signup-facts[_ngcontent-%COMP%] {\n    padding: 1.25rem;\n  }\n}\n/*# sourceMappingURL=signup-step.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HumanAuthnSignupStepComponent, [{
    type: Component,
    args: [{ selector: "human-authn-signup-step", standalone: true, imports: [
      CommonModule,
      ReactiveFormsModule,
      MatButtonModule,
      MatFormFieldModule,
      MatIconModule,
      MatSelectModule,
      MatSlideToggleModule,
      TranslocoModule
    ], template: `<ng-container *transloco="let t" [formGroup]="form">\r
    <div class="signup-screen" formGroupName="projectFlow">\r
        <header class="signup-hero">\r
            <div>\r
                <span class="signup-hero__eyebrow">{{ t('humanAuthnProjects.setup.signup.eyebrow') }}</span>\r
                <h2>{{ t('humanAuthnProjects.setup.signup.title') }}</h2>\r
                <p>{{ t('humanAuthnProjects.setup.signup.subtitle') }}</p>\r
            </div>\r
            <div class="signup-hero__choice">\r
                <span>{{ t('humanAuthnProjects.setup.signup.currentChoice') }}</span>\r
                <strong>{{ collectedSummary }}</strong>\r
            </div>\r
        </header>\r
\r
        <div class="signup-decision" formGroupName="signUpForm">\r
            <section class="fields">\r
                <div class="section-heading">\r
                    <span>01</span>\r
                    <div>\r
                        <h3>{{ t('humanAuthnProjects.setup.signup.fieldsTitle') }}</h3>\r
                        <p>{{ t('humanAuthnProjects.setup.signup.fieldsHelp') }}</p>\r
                    </div>\r
                </div>\r
\r
                <div class="field-list">\r
                    <article class="field-card field-card--ready">\r
                        <span class="field-card__icon"><mat-icon>person</mat-icon></span>\r
                        <div class="field-card__content">\r
                            <span class="field-card__title">\r
                                <strong>{{ t('humanAuthnProjects.setup.signup.nameTitle') }}</strong>\r
                                <small>{{ t('humanAuthnProjects.setup.signup.nameRequired') }}</small>\r
                            </span>\r
                            <span class="field-card__body">{{ t('humanAuthnProjects.setup.signup.nameBody') }}</span>\r
                            <div class="option-list" role="radiogroup" [attr.aria-label]="t('humanAuthnProjects.setup.signup.nameTitle')">\r
                                <button\r
                                    type="button"\r
                                    role="radio"\r
                                    class="option"\r
                                    [class.option--selected]="nameStyle === 'separate'"\r
                                    [attr.aria-checked]="nameStyle === 'separate'"\r
                                    (click)="setNameStyle('separate')"\r
                                >\r
                                    <mat-icon>{{ nameStyle === 'separate' ? 'check_circle' : 'radio_button_unchecked' }}</mat-icon>\r
                                    <span>\r
                                        <strong>{{ t('humanAuthnProjects.setup.signup.nameSeparate') }}</strong>\r
                                        <em>{{ t('humanAuthnProjects.setup.signup.nameSeparateBody') }}</em>\r
                                    </span>\r
                                </button>\r
                                <button\r
                                    type="button"\r
                                    role="radio"\r
                                    class="option"\r
                                    [class.option--selected]="nameStyle === 'together'"\r
                                    [attr.aria-checked]="nameStyle === 'together'"\r
                                    (click)="setNameStyle('together')"\r
                                >\r
                                    <mat-icon>{{ nameStyle === 'together' ? 'check_circle' : 'radio_button_unchecked' }}</mat-icon>\r
                                    <span>\r
                                        <strong>{{ t('humanAuthnProjects.setup.signup.nameTogether') }}</strong>\r
                                        <em>{{ t('humanAuthnProjects.setup.signup.nameTogetherBody') }}</em>\r
                                    </span>\r
                                </button>\r
                            </div>\r
                        </div>\r
                    </article>\r
\r
                    <article class="field-card" [class.field-card--ready]="phoneOn">\r
                        <span class="field-card__icon"><mat-icon>smartphone</mat-icon></span>\r
                        <div class="field-card__content">\r
                            <div class="field-card__head">\r
                                <span class="field-card__title">\r
                                    <strong>{{ t('humanAuthnProjects.setup.signup.phoneTitle') }}</strong>\r
                                    <small>{{ t('humanAuthnProjects.setup.signup.optional') }}</small>\r
                                </span>\r
                                <mat-slide-toggle formControlName="phone" [attr.aria-label]="t('humanAuthnProjects.setup.signup.phoneTitle')"></mat-slide-toggle>\r
                            </div>\r
                            <span class="field-card__body">{{ t('humanAuthnProjects.setup.signup.phoneBody') }}</span>\r
                            @if (phoneOn) {\r
                                <div class="option-list" role="group" [attr.aria-label]="t('humanAuthnProjects.setup.signup.channelHelp')">\r
                                    <button\r
                                        type="button"\r
                                        role="checkbox"\r
                                        class="option"\r
                                        [class.option--selected]="phoneWhatsappChecked"\r
                                        [attr.aria-checked]="phoneWhatsappChecked"\r
                                        (click)="onPhoneChannelChange('whatsapp', !phoneWhatsappChecked)"\r
                                    >\r
                                        <mat-icon>{{ phoneWhatsappChecked ? 'check_box' : 'check_box_outline_blank' }}</mat-icon>\r
                                        <span><strong>{{ t('humanAuthnProjects.setup.signup.channelWhatsapp') }}</strong></span>\r
                                    </button>\r
                                    <button\r
                                        type="button"\r
                                        role="checkbox"\r
                                        class="option"\r
                                        [class.option--selected]="phoneSmsChecked"\r
                                        [attr.aria-checked]="phoneSmsChecked"\r
                                        (click)="onPhoneChannelChange('sms', !phoneSmsChecked)"\r
                                    >\r
                                        <mat-icon>{{ phoneSmsChecked ? 'check_box' : 'check_box_outline_blank' }}</mat-icon>\r
                                        <span><strong>{{ t('humanAuthnProjects.setup.signup.channelSms') }}</strong></span>\r
                                    </button>\r
                                    <button\r
                                        type="button"\r
                                        role="checkbox"\r
                                        class="option"\r
                                        [class.option--selected]="phoneGateway === 'none'"\r
                                        [attr.aria-checked]="phoneGateway === 'none'"\r
                                        (click)="onPhoneChannelChange('none', true)"\r
                                    >\r
                                        <mat-icon>{{ phoneGateway === 'none' ? 'check_box' : 'check_box_outline_blank' }}</mat-icon>\r
                                        <span><strong>{{ t('humanAuthnProjects.setup.signup.channelNone') }}</strong></span>\r
                                    </button>\r
                                </div>\r
                                <p class="field-note">{{ t('humanAuthnProjects.setup.signup.channelHelp') }}</p>\r
                                <mat-form-field appearance="outline" subscriptSizing="dynamic" class="country-field">\r
                                    <mat-label>{{ t('humanAuthnProjects.setup.signup.countryCode') }}</mat-label>\r
                                    <mat-select\r
                                        formControlName="countryCode"\r
                                        (openedChange)="$event && onCountryCodeSelectOpened()"\r
                                    >\r
                                        <mat-select-trigger>\r
                                            <span class="font-semibold">{{ countryCode }}</span>\r
                                            <span class="ml-2 text-stone-500">{{ selectedCountryName }}</span>\r
                                        </mat-select-trigger>\r
                                        <div\r
                                            class="sticky top-0 z-10 flex items-center gap-2 bg-white px-3 py-2 dark:bg-gray-900"\r
                                            (click)="$event.stopPropagation()"\r
                                            (keydown)="$event.stopPropagation()"\r
                                            (mousedown)="$event.stopPropagation()"\r
                                        >\r
                                            <mat-icon class="!h-4 !w-4 text-stone-400">search</mat-icon>\r
                                            <input\r
                                                #countryCodeSearchInput\r
                                                type="text"\r
                                                class="w-full bg-transparent text-sm outline-none placeholder:text-stone-400"\r
                                                [placeholder]="t('humanAuthnProjects.setup.signup.searchCountry')"\r
                                                [value]="countryCodeSearchTerm"\r
                                                (click)="$event.stopPropagation()"\r
                                                (input)="onCountryCodeSearchChange($any($event.target).value)"\r
                                                (keydown)="$event.stopPropagation()"\r
                                            />\r
                                            @if (countryCodeSearchTerm) {\r
                                                <button mat-icon-button type="button" class="!h-6 !w-6 !min-w-0" (click)="clearCountryCodeSearch($event)">\r
                                                    <mat-icon class="!h-4 !w-4">close</mat-icon>\r
                                                </button>\r
                                            }\r
                                        </div>\r
                                        @for (country of filteredPhoneCountryCodes; track country.code) {\r
                                            <mat-option [value]="country.code">\r
                                                <span class="font-semibold">{{ country.code }}</span>\r
                                                <span class="ml-2 text-stone-500">{{ country.name }}</span>\r
                                            </mat-option>\r
                                        }\r
                                    </mat-select>\r
                                </mat-form-field>\r
                            }\r
                        </div>\r
                    </article>\r
\r
                    <article class="field-card" [class.field-card--ready]="emailOn">\r
                        <span class="field-card__icon"><mat-icon>mail</mat-icon></span>\r
                        <div class="field-card__content">\r
                            <div class="field-card__head">\r
                                <span class="field-card__title">\r
                                    <strong>{{ t('humanAuthnProjects.setup.signup.emailTitle') }}</strong>\r
                                    <small>{{ t('humanAuthnProjects.setup.signup.optional') }}</small>\r
                                </span>\r
                                <mat-slide-toggle formControlName="email" [attr.aria-label]="t('humanAuthnProjects.setup.signup.emailTitle')"></mat-slide-toggle>\r
                            </div>\r
                            <span class="field-card__body">{{ t('humanAuthnProjects.setup.signup.emailBody') }}</span>\r
                            @if (emailOn) {\r
                                <div class="option-list" role="radiogroup" [attr.aria-label]="t('humanAuthnProjects.setup.signup.emailTitle')">\r
                                    <button\r
                                        type="button"\r
                                        role="radio"\r
                                        class="option"\r
                                        [class.option--selected]="emailVerified"\r
                                        [attr.aria-checked]="emailVerified"\r
                                        (click)="setEmailVerified(true)"\r
                                    >\r
                                        <mat-icon>{{ emailVerified ? 'check_circle' : 'radio_button_unchecked' }}</mat-icon>\r
                                        <span>\r
                                            <strong>{{ t('humanAuthnProjects.setup.signup.emailVerify') }}</strong>\r
                                            <em>{{ t('humanAuthnProjects.setup.signup.emailVerifyBody') }}</em>\r
                                        </span>\r
                                    </button>\r
                                    <button\r
                                        type="button"\r
                                        role="radio"\r
                                        class="option"\r
                                        [class.option--selected]="!emailVerified"\r
                                        [attr.aria-checked]="!emailVerified"\r
                                        (click)="setEmailVerified(false)"\r
                                    >\r
                                        <mat-icon>{{ !emailVerified ? 'check_circle' : 'radio_button_unchecked' }}</mat-icon>\r
                                        <span>\r
                                            <strong>{{ t('humanAuthnProjects.setup.signup.emailPlain') }}</strong>\r
                                            <em>{{ t('humanAuthnProjects.setup.signup.emailPlainBody') }}</em>\r
                                        </span>\r
                                    </button>\r
                                </div>\r
                            }\r
                        </div>\r
                    </article>\r
\r
                    <article class="field-card" [class.field-card--ready]="extrasOn && selectedExtras.length > 0">\r
                        <span class="field-card__icon"><mat-icon>playlist_add</mat-icon></span>\r
                        <div class="field-card__content">\r
                            <div class="field-card__head">\r
                                <span class="field-card__title">\r
                                    <strong>{{ t('humanAuthnProjects.setup.signup.extrasTitle') }}</strong>\r
                                    <small>{{ t('humanAuthnProjects.setup.signup.optional') }}</small>\r
                                </span>\r
                                <mat-slide-toggle\r
                                    formControlName="allowAdditionalFields"\r
                                    [attr.aria-label]="t('humanAuthnProjects.setup.signup.extrasTitle')"\r
                                ></mat-slide-toggle>\r
                            </div>\r
                            <span class="field-card__body">{{ t('humanAuthnProjects.setup.signup.extrasBody') }}</span>\r
                            @if (extrasOn) {\r
                                <div class="option-list option-list--grid" role="group" [attr.aria-label]="t('humanAuthnProjects.setup.signup.extrasTitle')">\r
                                    @for (field of additionalFields; track field.value) {\r
                                        <button\r
                                            type="button"\r
                                            role="checkbox"\r
                                            class="option"\r
                                            [class.option--selected]="additionalFieldChecked(field.value)"\r
                                            [attr.aria-checked]="additionalFieldChecked(field.value)"\r
                                            (click)="toggleAdditionalField(field.value, !additionalFieldChecked(field.value))"\r
                                        >\r
                                            <mat-icon>{{ additionalFieldChecked(field.value) ? 'check_box' : 'check_box_outline_blank' }}</mat-icon>\r
                                            <span><strong>{{ t(field.labelKey) }}</strong></span>\r
                                        </button>\r
                                    }\r
                                </div>\r
                            }\r
                        </div>\r
                    </article>\r
\r
                    <article class="field-card" [class.field-card--ready]="termsOn || privacyOn">\r
                        <span class="field-card__icon"><mat-icon>gavel</mat-icon></span>\r
                        <div class="field-card__content">\r
                            <span class="field-card__title">\r
                                <strong>{{ t('humanAuthnProjects.setup.signup.legalTitle') }}</strong>\r
                                <small>{{ t('humanAuthnProjects.setup.signup.optional') }}</small>\r
                            </span>\r
                            <span class="field-card__body">{{ t('humanAuthnProjects.setup.signup.legalBody') }}</span>\r
                            <div class="legal-row">\r
                                <div>\r
                                    <strong>{{ t('humanAuthnProjects.setup.signup.termsToggle') }}</strong>\r
                                    @if (termsOn) {\r
                                        <p>{{ termsUrl || t('humanAuthnProjects.setup.signup.urlMissing') }}</p>\r
                                    }\r
                                </div>\r
                                <mat-slide-toggle\r
                                    formControlName="showTermsAndConditions"\r
                                    [attr.aria-label]="t('humanAuthnProjects.setup.signup.termsToggle')"\r
                                ></mat-slide-toggle>\r
                            </div>\r
                            <div class="legal-row">\r
                                <div>\r
                                    <strong>{{ t('humanAuthnProjects.setup.signup.privacyToggle') }}</strong>\r
                                    @if (privacyOn) {\r
                                        <p>{{ privacyUrl || t('humanAuthnProjects.setup.signup.urlMissing') }}</p>\r
                                    }\r
                                </div>\r
                                <mat-slide-toggle\r
                                    formControlName="showPrivacyNotice"\r
                                    [attr.aria-label]="t('humanAuthnProjects.setup.signup.privacyToggle')"\r
                                ></mat-slide-toggle>\r
                            </div>\r
                        </div>\r
                    </article>\r
                </div>\r
            </section>\r
\r
            <aside class="signup-explainer" aria-live="polite">\r
                <div class="section-heading section-heading--light">\r
                    <span>02</span>\r
                    <div>\r
                        <h3>{{ t('humanAuthnProjects.setup.signup.howTitle') }}</h3>\r
                        <p>{{ t('humanAuthnProjects.setup.signup.howHelp') }}</p>\r
                    </div>\r
                </div>\r
\r
                <div class="sample" aria-hidden="true">\r
                    <h4>{{ t('humanAuthnProjects.setup.signup.sampleTitle') }}</h4>\r
                    @if (nameStyle === 'separate') {\r
                        <div class="sample-field">\r
                            <span>{{ t('humanAuthnProjects.setup.signup.sampleFirstName') }}</span>\r
                            <i></i>\r
                        </div>\r
                        <div class="sample-field">\r
                            <span>{{ t('humanAuthnProjects.setup.signup.sampleLastName') }}</span>\r
                            <i></i>\r
                        </div>\r
                    } @else {\r
                        <div class="sample-field">\r
                            <span>{{ t('humanAuthnProjects.setup.signup.sampleFullName') }}</span>\r
                            <i></i>\r
                        </div>\r
                    }\r
                    @if (phoneOn) {\r
                        <div class="sample-field">\r
                            <span>{{ t('humanAuthnProjects.setup.signup.samplePhone') }}</span>\r
                            <i><b>{{ countryCode }}</b></i>\r
                            <em>\r
                                {{\r
                                    phoneGateway === 'none'\r
                                        ? t('humanAuthnProjects.setup.signup.phoneTypedHint')\r
                                        : t('humanAuthnProjects.setup.signup.phoneCodeHint', { channel: t(phoneChannelKey) })\r
                                }}\r
                            </em>\r
                        </div>\r
                    }\r
                    @if (emailOn) {\r
                        <div class="sample-field">\r
                            <span>{{ t('humanAuthnProjects.setup.signup.sampleEmail') }}</span>\r
                            <i></i>\r
                            <em>\r
                                {{\r
                                    emailVerified\r
                                        ? t('humanAuthnProjects.setup.signup.emailCodeHint')\r
                                        : t('humanAuthnProjects.setup.signup.emailTypedHint')\r
                                }}\r
                            </em>\r
                        </div>\r
                    }\r
                    @for (field of extrasOn ? selectedExtras : []; track field.value) {\r
                        <div class="sample-field">\r
                            <span>{{ t(field.labelKey) }}</span>\r
                            <i></i>\r
                        </div>\r
                    }\r
                    @if (termsOn) {\r
                        <p class="sample-legal"><mat-icon>check_box_outline_blank</mat-icon>{{ t('humanAuthnProjects.setup.signup.termsSample') }}</p>\r
                    }\r
                    @if (privacyOn) {\r
                        <p class="sample-legal"><mat-icon>check_box_outline_blank</mat-icon>{{ t('humanAuthnProjects.setup.signup.privacySample') }}</p>\r
                    }\r
                    <span class="sample-button">{{ t('humanAuthnProjects.setup.signup.sampleContinue') }}</span>\r
                </div>\r
            </aside>\r
        </div>\r
\r
        <section class="signup-facts">\r
            <div class="section-heading">\r
                <span>03</span>\r
                <div>\r
                    <h3>{{ t('humanAuthnProjects.setup.signup.factsTitle') }}</h3>\r
                    <p>{{ t('humanAuthnProjects.setup.signup.factsHelp') }}</p>\r
                </div>\r
            </div>\r
            <div class="fact-items">\r
                <article>\r
                    <span class="fact-items__icon fact-items__icon--name"><mat-icon>person</mat-icon></span>\r
                    <div>\r
                        <strong>{{ t('humanAuthnProjects.setup.signup.factNameTitle') }}</strong>\r
                        <p>{{ t('humanAuthnProjects.setup.signup.factNameBody') }}</p>\r
                    </div>\r
                </article>\r
                <article>\r
                    <span class="fact-items__icon fact-items__icon--contact"><mat-icon>verified_user</mat-icon></span>\r
                    <div>\r
                        <strong>{{ t('humanAuthnProjects.setup.signup.factContactTitle') }}</strong>\r
                        <p>{{ t('humanAuthnProjects.setup.signup.factContactBody') }}</p>\r
                    </div>\r
                </article>\r
                <article>\r
                    <span class="fact-items__icon fact-items__icon--optional"><mat-icon>tune</mat-icon></span>\r
                    <div>\r
                        <strong>{{ t('humanAuthnProjects.setup.signup.factOptionalTitle') }}</strong>\r
                        <p>{{ t('humanAuthnProjects.setup.signup.factOptionalBody') }}</p>\r
                    </div>\r
                </article>\r
            </div>\r
        </section>\r
    </div>\r
</ng-container>\r
`, styles: ["/* src/app/modules/human-authn/projects/setup/steps/signup-step.component.scss */\n:host {\n  display: block;\n}\n.signup-screen {\n  margin-inline: auto;\n  width: min(100%, 76rem);\n}\n.signup-hero {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 2rem;\n  margin-bottom: 2rem;\n  padding: 0.5rem 0.25rem;\n}\n.signup-hero h2 {\n  max-width: 42rem;\n  margin: 0.35rem 0 0;\n  color: #1c1917;\n  font-size: clamp(1.75rem, 3vw, 2.55rem);\n  font-weight: 680;\n  letter-spacing: -0.045em;\n  line-height: 1.05;\n}\n.signup-hero p {\n  max-width: 42rem;\n  margin: 0.75rem 0 0;\n  color: #78716c;\n  font-size: 0.88rem;\n  line-height: 1.6;\n}\n.signup-hero__eyebrow {\n  color: #78716c;\n  font-size: 0.65rem;\n  font-weight: 750;\n  letter-spacing: 0.16em;\n  text-transform: uppercase;\n}\n.signup-hero__choice {\n  display: flex;\n  flex: 0 0 auto;\n  flex-direction: column;\n  align-items: flex-end;\n  max-width: 18rem;\n  padding: 0.75rem 1rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 0.9rem;\n  background: white;\n}\n.signup-hero__choice span {\n  color: #a8a29e;\n  font-size: 0.62rem;\n  font-weight: 650;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n.signup-hero__choice strong {\n  margin-top: 0.15rem;\n  color: #292524;\n  font-size: 0.82rem;\n  text-align: right;\n}\n.signup-decision {\n  display: grid;\n  grid-template-columns: minmax(0, 1.15fr) minmax(20rem, 0.85fr);\n  overflow: hidden;\n  border: 1px solid #d6d3d1;\n  border-radius: 1.5rem;\n  background: white;\n  box-shadow: 0 1px 2px rgba(28, 25, 23, 0.03), 0 18px 45px rgba(28, 25, 23, 0.05);\n}\n.fields,\n.signup-explainer,\n.signup-facts {\n  padding: 1.75rem;\n}\n.signup-explainer {\n  background: #1c1917;\n  color: white;\n}\n.section-heading {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.8rem;\n  margin-bottom: 1.25rem;\n}\n.section-heading > span {\n  display: grid;\n  flex: 0 0 1.8rem;\n  width: 1.8rem;\n  height: 1.8rem;\n  place-items: center;\n  border-radius: 999px;\n  background: #292524;\n  color: white;\n  font-size: 0.62rem;\n  font-weight: 750;\n}\n.section-heading h3 {\n  margin: 0;\n  color: #292524;\n  font-size: 0.95rem;\n  font-weight: 680;\n  letter-spacing: -0.015em;\n}\n.section-heading p {\n  margin: 0.25rem 0 0;\n  color: #78716c;\n  font-size: 0.72rem;\n  line-height: 1.45;\n}\n.section-heading--light > span {\n  background: white;\n  color: #1c1917;\n}\n.section-heading--light h3 {\n  color: white;\n}\n.section-heading--light p {\n  color: #a8a29e;\n}\n.field-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0.8rem;\n}\n.field-card {\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr);\n  gap: 1rem;\n  padding: 1.15rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 1rem;\n  background: #fafaf9;\n}\n.field-card--ready {\n  border-color: #292524;\n  background: white;\n  box-shadow: inset 0 0 0 1px #292524;\n}\n.field-card__icon {\n  display: grid;\n  width: 2.6rem;\n  height: 2.6rem;\n  place-items: center;\n  border-radius: 0.8rem;\n  background: #e7e5e4;\n  color: #44403c;\n}\n.field-card__icon mat-icon {\n  width: 1.25rem;\n  height: 1.25rem;\n  font-size: 1.25rem;\n}\n.field-card--ready .field-card__icon {\n  background: #292524;\n  color: white;\n}\n.field-card__head,\n.legal-row {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 1rem;\n}\n.field-card__title {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 0.45rem;\n}\n.field-card__title strong {\n  color: #292524;\n  font-size: 0.92rem;\n}\n.field-card__title small {\n  padding: 0.12rem 0.4rem;\n  border-radius: 999px;\n  background: #e7e5e4;\n  color: #57534e;\n  font-size: 0.62rem;\n  font-weight: 700;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n}\n.field-card__body,\n.field-note {\n  display: block;\n  margin: 0.4rem 0 0;\n  color: #78716c;\n  font-size: 0.75rem;\n  line-height: 1.45;\n}\n.option-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0.45rem;\n  margin-top: 0.85rem;\n}\n.option-list--grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n}\n.option {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.55rem;\n  width: 100%;\n  padding: 0.7rem 0.75rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 0.75rem;\n  background: white;\n  color: #44403c;\n  text-align: left;\n}\n.option mat-icon {\n  width: 1.1rem;\n  height: 1.1rem;\n  margin-top: 0.05rem;\n  color: #a8a29e;\n  font-size: 1.1rem;\n}\n.option strong,\n.option em {\n  display: block;\n}\n.option strong {\n  color: #292524;\n  font-size: 0.78rem;\n  font-weight: 650;\n}\n.option em {\n  margin-top: 0.1rem;\n  color: #78716c;\n  font-size: 0.68rem;\n  font-style: normal;\n  line-height: 1.35;\n}\n.option:focus-visible {\n  outline: 3px solid rgba(59, 130, 246, 0.35);\n  outline-offset: 2px;\n}\n.option--selected {\n  border-color: #292524;\n}\n.option--selected mat-icon {\n  color: #047857;\n}\n.country-field {\n  display: block;\n  width: 100%;\n  max-width: 22rem;\n  margin-top: 0.85rem;\n}\n.legal-row {\n  margin-top: 0.85rem;\n  padding-top: 0.75rem;\n  border-top: 1px solid #e7e5e4;\n}\n.legal-row strong {\n  color: #292524;\n  font-size: 0.78rem;\n}\n.legal-row p {\n  margin: 0.2rem 0 0;\n  color: #78716c;\n  font-size: 0.68rem;\n  line-height: 1.4;\n  overflow-wrap: anywhere;\n}\n.sample {\n  padding: 1rem;\n  border: 1px solid #44403c;\n  border-radius: 1rem;\n  background: #292524;\n}\n.sample h4 {\n  margin: 0 0 0.9rem;\n  font-size: 0.95rem;\n  font-weight: 680;\n}\n.sample-field {\n  margin-bottom: 0.7rem;\n}\n.sample-field span,\n.sample-field em {\n  display: block;\n}\n.sample-field span {\n  margin-bottom: 0.25rem;\n  color: #d6d3d1;\n  font-size: 0.68rem;\n}\n.sample-field i {\n  display: flex;\n  align-items: center;\n  min-height: 2.1rem;\n  padding: 0 0.7rem;\n  border: 1px solid #57534e;\n  border-radius: 0.55rem;\n  background: #1c1917;\n  font-style: normal;\n}\n.sample-field b {\n  color: #e7e5e4;\n  font-size: 0.75rem;\n  font-weight: 650;\n}\n.sample-field em {\n  margin-top: 0.25rem;\n  color: #a8a29e;\n  font-size: 0.65rem;\n  font-style: normal;\n}\n.sample-legal {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  margin: 0.35rem 0;\n  color: #d6d3d1;\n  font-size: 0.72rem;\n}\n.sample-legal mat-icon {\n  width: 1rem;\n  height: 1rem;\n  font-size: 1rem;\n}\n.sample-button {\n  display: block;\n  margin-top: 0.9rem;\n  padding: 0.65rem 0.8rem;\n  border-radius: 0.65rem;\n  background: white;\n  color: #1c1917;\n  font-size: 0.78rem;\n  font-weight: 700;\n  text-align: center;\n}\n.signup-facts {\n  margin-top: 1.25rem;\n  border: 1px solid #d6d3d1;\n  border-radius: 1.5rem;\n  background: white;\n}\n.fact-items {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 0.8rem;\n}\n.fact-items article {\n  display: flex;\n  gap: 0.75rem;\n  padding: 0.9rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 0.9rem;\n  background: #fafaf9;\n}\n.fact-items article strong {\n  color: #292524;\n  font-size: 0.78rem;\n}\n.fact-items article p {\n  margin: 0.25rem 0 0;\n  color: #78716c;\n  font-size: 0.68rem;\n  line-height: 1.45;\n}\n.fact-items__icon {\n  display: grid;\n  flex: 0 0 2rem;\n  width: 2rem;\n  height: 2rem;\n  place-items: center;\n  border-radius: 0.6rem;\n}\n.fact-items__icon mat-icon {\n  width: 1rem;\n  height: 1rem;\n  font-size: 1rem;\n}\n.fact-items__icon--name {\n  background: #eff6ff;\n  color: #1d4ed8;\n}\n.fact-items__icon--contact {\n  background: #ecfdf5;\n  color: #047857;\n}\n.fact-items__icon--optional {\n  background: #fef3c7;\n  color: #b45309;\n}\n:host-context(.dark) .signup-hero h2,\n:host-context(.dark) .section-heading h3,\n:host-context(.dark) .field-card__title strong,\n:host-context(.dark) .option strong,\n:host-context(.dark) .legal-row strong,\n:host-context(.dark) .fact-items strong,\n:host-context(.dark) .signup-hero__choice strong {\n  color: #f8fafc;\n}\n:host-context(.dark) .signup-hero p,\n:host-context(.dark) .signup-hero__eyebrow,\n:host-context(.dark) .section-heading p,\n:host-context(.dark) .field-card__body,\n:host-context(.dark) .field-note,\n:host-context(.dark) .option em,\n:host-context(.dark) .legal-row p,\n:host-context(.dark) .fact-items p,\n:host-context(.dark) .signup-hero__choice span {\n  color: #94a3b8;\n}\n:host-context(.dark) .signup-hero__choice,\n:host-context(.dark) .signup-decision,\n:host-context(.dark) .signup-facts,\n:host-context(.dark) .field-card,\n:host-context(.dark) .option,\n:host-context(.dark) .fact-items article {\n  border-color: #334155;\n  background: #0f172a;\n}\n:host-context(.dark) .signup-decision,\n:host-context(.dark) .signup-facts,\n:host-context(.dark) .signup-hero__choice {\n  background: #1e293b;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);\n}\n:host-context(.dark) .fields {\n  background: #1e293b;\n}\n:host-context(.dark) .field-card--ready,\n:host-context(.dark) .option--selected {\n  border-color: #e2e8f0;\n  box-shadow: inset 0 0 0 1px #e2e8f0;\n}\n:host-context(.dark) .field-card__icon,\n:host-context(.dark) .field-card__title small {\n  background: #334155;\n  color: #e2e8f0;\n}\n:host-context(.dark) .field-card--ready .field-card__icon {\n  background: #e2e8f0;\n  color: #0f172a;\n}\n:host-context(.dark) .option mat-icon {\n  color: #64748b;\n}\n:host-context(.dark) .option--selected mat-icon {\n  color: #6ee7b7;\n}\n:host-context(.dark) .legal-row {\n  border-top-color: #334155;\n}\n:host-context(.dark) .section-heading > span {\n  background: #cbd5e1;\n  color: #0f172a;\n}\n:host-context(.dark) .signup-explainer {\n  background: #0f172a;\n}\n:host-context(.dark) .section-heading--light > span {\n  background: #e2e8f0;\n  color: #0f172a;\n}\n:host-context(.dark) .section-heading--light h3,\n:host-context(.dark) .sample h4 {\n  color: #f8fafc;\n}\n:host-context(.dark) .sample {\n  border-color: #475569;\n  background: #1e293b;\n}\n:host-context(.dark) .sample-field i {\n  border-color: #475569;\n  background: #0f172a;\n}\n:host-context(.dark) .sample-button {\n  background: #e2e8f0;\n  color: #0f172a;\n}\n:host-context(.dark) .fact-items__icon--name {\n  background: rgba(59, 130, 246, 0.16);\n  color: #93c5fd;\n}\n:host-context(.dark) .fact-items__icon--contact {\n  background: rgba(16, 185, 129, 0.14);\n  color: #6ee7b7;\n}\n:host-context(.dark) .fact-items__icon--optional {\n  background: rgba(245, 158, 11, 0.16);\n  color: #fcd34d;\n}\n@media (max-width: 980px) {\n  .signup-decision {\n    grid-template-columns: 1fr;\n  }\n  .fact-items,\n  .option-list--grid {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 680px) {\n  .signup-hero {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n  .signup-hero__choice {\n    align-items: flex-start;\n    max-width: none;\n  }\n  .signup-hero__choice strong {\n    text-align: left;\n  }\n  .fields,\n  .signup-explainer,\n  .signup-facts {\n    padding: 1.25rem;\n  }\n}\n/*# sourceMappingURL=signup-step.component.css.map */\n"] }]
  }], null, { form: [{
    type: Input
  }], countryCodeSearchInput: [{
    type: ViewChild,
    args: ["countryCodeSearchInput"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HumanAuthnSignupStepComponent, { className: "HumanAuthnSignupStepComponent", filePath: "src/app/modules/human-authn/projects/setup/steps/signup-step.component.ts", lineNumber: 61 });
})();

// src/app/modules/human-authn/projects/setup/steps/ui-step.component.ts
function HumanAuthnUiStepComponent_ng_container_0_Conditional_1_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "img", 30);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 41);
    \u0275\u0275listener("click", function HumanAuthnUiStepComponent_ng_container_0_Conditional_1_Conditional_52_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.clearImage("logo"));
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx, \u0275\u0275sanitizeUrl)("alt", t_r3("humanAuthnProjects.setup.ui.logoAlt"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("humanAuthnProjects.setup.ui.currentLogo"));
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", t_r3("humanAuthnProjects.setup.ui.removeLogo"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r3("humanAuthnProjects.setup.ui.removeLogo"), " ");
  }
}
function HumanAuthnUiStepComponent_ng_container_0_Conditional_1_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "file-drop-zone", 42);
    \u0275\u0275listener("attachmentUploaded", function HumanAuthnUiStepComponent_ng_container_0_Conditional_1_Conditional_53_Template_file_drop_zone_attachmentUploaded_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onAttachmentUploaded("logo", $event));
    })("uploadError", function HumanAuthnUiStepComponent_ng_container_0_Conditional_1_Conditional_53_Template_file_drop_zone_uploadError_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onUploadError("logo", $event));
    })("fileError", function HumanAuthnUiStepComponent_ng_container_0_Conditional_1_Conditional_53_Template_file_drop_zone_fileError_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onFileError("logo", $event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("accept", ctx_r1.imageAccept)("maxFileSize", ctx_r1.logoMaxSize)("expirationDays", 0);
  }
}
function HumanAuthnUiStepComponent_ng_container_0_Conditional_1_Conditional_79_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "img", 30);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 41);
    \u0275\u0275listener("click", function HumanAuthnUiStepComponent_ng_container_0_Conditional_1_Conditional_79_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.clearImage("image"));
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx, \u0275\u0275sanitizeUrl)("alt", t_r3("humanAuthnProjects.setup.ui.bannerAlt"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("humanAuthnProjects.setup.ui.currentBanner"));
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", t_r3("humanAuthnProjects.setup.ui.removeBanner"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r3("humanAuthnProjects.setup.ui.removeBanner"), " ");
  }
}
function HumanAuthnUiStepComponent_ng_container_0_Conditional_1_Conditional_80_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "file-drop-zone", 42);
    \u0275\u0275listener("attachmentUploaded", function HumanAuthnUiStepComponent_ng_container_0_Conditional_1_Conditional_80_Template_file_drop_zone_attachmentUploaded_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onAttachmentUploaded("image", $event));
    })("uploadError", function HumanAuthnUiStepComponent_ng_container_0_Conditional_1_Conditional_80_Template_file_drop_zone_uploadError_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onUploadError("image", $event));
    })("fileError", function HumanAuthnUiStepComponent_ng_container_0_Conditional_1_Conditional_80_Template_file_drop_zone_fileError_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onFileError("image", $event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("accept", ctx_r1.imageAccept)("maxFileSize", ctx_r1.imageMaxSize)("expirationDays", 0);
  }
}
function HumanAuthnUiStepComponent_ng_container_0_Conditional_1_Conditional_127_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 30);
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("src", ctx, \u0275\u0275sanitizeUrl)("alt", t_r3("humanAuthnProjects.setup.ui.logoAlt"));
  }
}
function HumanAuthnUiStepComponent_ng_container_0_Conditional_1_Conditional_128_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r3("humanAuthnProjects.setup.ui.logoPlaceholder"));
  }
}
function HumanAuthnUiStepComponent_ng_container_0_Conditional_1_Conditional_135_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275element(1, "img", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("background", ctx_r1.color("imageBackgroundColor"));
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx, \u0275\u0275sanitizeUrl)("alt", t_r3("humanAuthnProjects.setup.ui.bannerAlt"));
  }
}
function HumanAuthnUiStepComponent_ng_container_0_Conditional_1_Conditional_139_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r3("humanAuthnProjects.setup.ui.withBannerTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("humanAuthnProjects.setup.ui.withBannerBody"));
  }
}
function HumanAuthnUiStepComponent_ng_container_0_Conditional_1_Conditional_140_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r3("humanAuthnProjects.setup.ui.noBannerTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("humanAuthnProjects.setup.ui.noBannerBody"));
  }
}
function HumanAuthnUiStepComponent_ng_container_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "header", 2)(2, "div")(3, "span", 3);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 4)(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "strong");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "em");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 5)(17, "section", 6)(18, "div", 7)(19, "span");
    \u0275\u0275text(20, "01");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div")(22, "h3");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "p");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 8)(27, "article", 9)(28, "span", 10)(29, "mat-icon");
    \u0275\u0275text(30, "image");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 11)(32, "span", 12)(33, "strong");
    \u0275\u0275text(34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "small");
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "span", 13);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "span", 14)(40, "span")(41, "mat-icon");
    \u0275\u0275text(42, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275text(43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "span")(45, "mat-icon");
    \u0275\u0275text(46, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275text(47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "span")(49, "mat-icon");
    \u0275\u0275text(50, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275text(51);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(52, HumanAuthnUiStepComponent_ng_container_0_Conditional_1_Conditional_52_Template, 8, 5, "div", 15)(53, HumanAuthnUiStepComponent_ng_container_0_Conditional_1_Conditional_53_Template, 1, 3, "file-drop-zone", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "article", 9)(55, "span", 10)(56, "mat-icon");
    \u0275\u0275text(57, "panorama");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "div", 11)(59, "span", 12)(60, "strong");
    \u0275\u0275text(61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "small");
    \u0275\u0275text(63);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(64, "span", 13);
    \u0275\u0275text(65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "span", 14)(67, "span")(68, "mat-icon");
    \u0275\u0275text(69, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275text(70);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "span")(72, "mat-icon");
    \u0275\u0275text(73, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275text(74);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "span")(76, "mat-icon");
    \u0275\u0275text(77, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275text(78);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(79, HumanAuthnUiStepComponent_ng_container_0_Conditional_1_Conditional_79_Template, 8, 5, "div", 15)(80, HumanAuthnUiStepComponent_ng_container_0_Conditional_1_Conditional_80_Template, 1, 3, "file-drop-zone", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(81, "article", 17)(82, "span", 10)(83, "mat-icon");
    \u0275\u0275text(84, "palette");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(85, "div", 11)(86, "span", 12)(87, "strong");
    \u0275\u0275text(88);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(89, "span", 13);
    \u0275\u0275text(90);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(91, "div", 18)(92, "div", 19);
    \u0275\u0275element(93, "swatch-picker", 20);
    \u0275\u0275elementStart(94, "p");
    \u0275\u0275text(95);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(96, "div", 19);
    \u0275\u0275element(97, "swatch-picker", 21);
    \u0275\u0275elementStart(98, "p");
    \u0275\u0275text(99);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(100, "div", 19);
    \u0275\u0275element(101, "swatch-picker", 22);
    \u0275\u0275elementStart(102, "p");
    \u0275\u0275text(103);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(104, "div", 19);
    \u0275\u0275element(105, "swatch-picker", 23);
    \u0275\u0275elementStart(106, "p");
    \u0275\u0275text(107);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(108, "div", 19);
    \u0275\u0275element(109, "swatch-picker", 24);
    \u0275\u0275elementStart(110, "p");
    \u0275\u0275text(111);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(112, "div", 19);
    \u0275\u0275element(113, "swatch-picker", 25);
    \u0275\u0275elementStart(114, "p");
    \u0275\u0275text(115);
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(116, "aside", 26)(117, "div", 27)(118, "span");
    \u0275\u0275text(119, "02");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(120, "div")(121, "h3");
    \u0275\u0275text(122);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(123, "p");
    \u0275\u0275text(124);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(125, "div", 28)(126, "div", 29);
    \u0275\u0275template(127, HumanAuthnUiStepComponent_ng_container_0_Conditional_1_Conditional_127_Template, 1, 2, "img", 30)(128, HumanAuthnUiStepComponent_ng_container_0_Conditional_1_Conditional_128_Template, 2, 1, "span", 31);
    \u0275\u0275elementStart(129, "strong");
    \u0275\u0275text(130);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(131, "p");
    \u0275\u0275text(132);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(133, "span", 32);
    \u0275\u0275text(134);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(135, HumanAuthnUiStepComponent_ng_container_0_Conditional_1_Conditional_135_Template, 2, 4, "div", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(136, "div", 34)(137, "span", 35);
    \u0275\u0275text(138);
    \u0275\u0275elementEnd();
    \u0275\u0275template(139, HumanAuthnUiStepComponent_ng_container_0_Conditional_1_Conditional_139_Template, 4, 2)(140, HumanAuthnUiStepComponent_ng_container_0_Conditional_1_Conditional_140_Template, 4, 2);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(141, "section", 36)(142, "div", 7)(143, "span");
    \u0275\u0275text(144, "03");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(145, "div")(146, "h3");
    \u0275\u0275text(147);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(148, "p");
    \u0275\u0275text(149);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(150, "div", 37)(151, "article")(152, "span", 38)(153, "mat-icon");
    \u0275\u0275text(154, "image");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(155, "div")(156, "strong");
    \u0275\u0275text(157);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(158, "p");
    \u0275\u0275text(159);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(160, "article")(161, "span", 39)(162, "mat-icon");
    \u0275\u0275text(163, "palette");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(164, "div")(165, "strong");
    \u0275\u0275text(166);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(167, "p");
    \u0275\u0275text(168);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(169, "article")(170, "span", 40)(171, "mat-icon");
    \u0275\u0275text(172, "view_sidebar");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(173, "div")(174, "strong");
    \u0275\u0275text(175);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(176, "p");
    \u0275\u0275text(177);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    let tmp_18_0;
    let tmp_26_0;
    let tmp_58_0;
    let tmp_66_0;
    const t_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r3("humanAuthnProjects.setup.ui.eyebrow"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("humanAuthnProjects.setup.ui.title"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("humanAuthnProjects.setup.ui.subtitle"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r3("humanAuthnProjects.setup.ui.currentChoice"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3(ctx_r1.hasLogo ? "humanAuthnProjects.setup.ui.logoOn" : "humanAuthnProjects.setup.ui.logoOff"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3(ctx_r1.hasBanner ? "humanAuthnProjects.setup.ui.bannerOn" : "humanAuthnProjects.setup.ui.bannerOff"));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(t_r3("humanAuthnProjects.setup.ui.changeTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("humanAuthnProjects.setup.ui.changeHelp"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("choice--ready", ctx_r1.hasLogo);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(t_r3("humanAuthnProjects.setup.ui.logoTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("humanAuthnProjects.setup.ui.optional"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("humanAuthnProjects.setup.ui.logoBody"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(t_r3("humanAuthnProjects.setup.ui.logoBenefitHeader"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r3("humanAuthnProjects.setup.ui.logoBenefitFormat"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r3("humanAuthnProjects.setup.ui.logoBenefitSize"));
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_18_0 = ctx_r1.imageValue("logo")) ? 52 : 53, tmp_18_0);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("choice--ready", ctx_r1.hasBanner);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(t_r3("humanAuthnProjects.setup.ui.bannerTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("humanAuthnProjects.setup.ui.optional"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("humanAuthnProjects.setup.ui.bannerBody"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(t_r3("humanAuthnProjects.setup.ui.bannerBenefitSide"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r3("humanAuthnProjects.setup.ui.bannerBenefitOptional"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r3("humanAuthnProjects.setup.ui.bannerBenefitSize"));
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_26_0 = ctx_r1.imageValue("image")) ? 79 : 80, tmp_26_0);
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx_r1.brandingFormGroup);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(t_r3("humanAuthnProjects.setup.ui.colorsTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("humanAuthnProjects.setup.ui.colorsBody"));
    \u0275\u0275advance(3);
    \u0275\u0275property("colors", ctx_r1.titleColors)("label", t_r3("humanAuthnProjects.setup.ui.colorTitle"))("required", true);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("humanAuthnProjects.setup.ui.colorTitleHelp"));
    \u0275\u0275advance(2);
    \u0275\u0275property("colors", ctx_r1.textColors)("label", t_r3("humanAuthnProjects.setup.ui.colorText"))("required", true);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("humanAuthnProjects.setup.ui.colorTextHelp"));
    \u0275\u0275advance(2);
    \u0275\u0275property("colors", ctx_r1.buttonColors)("label", t_r3("humanAuthnProjects.setup.ui.colorButton"))("required", true);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("humanAuthnProjects.setup.ui.colorButtonHelp"));
    \u0275\u0275advance(2);
    \u0275\u0275property("colors", ctx_r1.buttonTextColors)("label", t_r3("humanAuthnProjects.setup.ui.colorButtonText"))("required", true);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("humanAuthnProjects.setup.ui.colorButtonTextHelp"));
    \u0275\u0275advance(2);
    \u0275\u0275property("colors", ctx_r1.backgroundColors)("label", t_r3("humanAuthnProjects.setup.ui.colorBackground"))("required", true);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("humanAuthnProjects.setup.ui.colorBackgroundHelp"));
    \u0275\u0275advance(2);
    \u0275\u0275property("colors", ctx_r1.imageBackgroundColors)("label", t_r3("humanAuthnProjects.setup.ui.colorImageBackground"))("required", true);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("humanAuthnProjects.setup.ui.colorImageBackgroundHelp"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(t_r3("humanAuthnProjects.setup.ui.howTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("humanAuthnProjects.setup.ui.howHelp"));
    \u0275\u0275advance();
    \u0275\u0275classProp("sample--split", ctx_r1.hasBanner);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ctx_r1.color("backgroundColor"));
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_58_0 = ctx_r1.imageValue("logo")) ? 127 : 128, tmp_58_0);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("color", ctx_r1.color("titleColor"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r3("humanAuthnProjects.setup.ui.sampleTitle"));
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r1.color("textColor"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r3("humanAuthnProjects.setup.ui.sampleBody"));
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ctx_r1.color("buttonColor"))("color", ctx_r1.color("buttonTextColor"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r3("humanAuthnProjects.setup.ui.sampleButton"), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_66_0 = ctx_r1.imageValue("image")) ? 135 : -1, tmp_66_0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r3("humanAuthnProjects.setup.ui.selectedPath"));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.hasBanner ? 139 : 140);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(t_r3("humanAuthnProjects.setup.ui.factsTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("humanAuthnProjects.setup.ui.factsHelp"));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(t_r3("humanAuthnProjects.setup.ui.markTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("humanAuthnProjects.setup.ui.markBody"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(t_r3("humanAuthnProjects.setup.ui.paletteTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("humanAuthnProjects.setup.ui.paletteBody"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(t_r3("humanAuthnProjects.setup.ui.widthTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("humanAuthnProjects.setup.ui.widthBody"));
  }
}
function HumanAuthnUiStepComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, HumanAuthnUiStepComponent_ng_container_0_Conditional_1_Template, 178, 82, "div", 1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isFormReady ? 1 : -1);
  }
}
var HALF_MEGABYTE = 0.5 * 1024 * 1024;
var TWO_MEGABYTES = 2 * 1024 * 1024;
var HumanAuthnUiStepComponent = class _HumanAuthnUiStepComponent {
  constructor() {
    this.loading = false;
    this.saving = false;
    this._cdr = inject(ChangeDetectorRef);
    this._snack = inject(MatSnackBar);
    this._transloco = inject(TranslocoService);
    this.logoMaxSize = HALF_MEGABYTE;
    this.imageMaxSize = TWO_MEGABYTES;
    this.imageAccept = ".jpg,.jpeg,.png";
    this.titleColors = [
      "#2563eb",
      "#4f46e5",
      "#7c3aed",
      "#9333ea",
      "#c026d3",
      "#db2777",
      "#e11d48",
      "#dc2626",
      "#ea580c",
      "#d97706",
      "#16a34a",
      "#0891b2"
    ];
    this.textColors = [
      "#0f172a",
      "#111827",
      "#1c1917",
      "#1e3a8a",
      "#3730a3",
      "#4c1d95",
      "#581c87",
      "#86198f",
      "#9d174d",
      "#7f1d1d",
      "#7c2d12",
      "#3f3f46"
    ];
    this.buttonColors = [
      "#2563eb",
      "#1d4ed8",
      "#4f46e5",
      "#6d28d9",
      "#9333ea",
      "#db2777",
      "#e11d48",
      "#dc2626",
      "#ea580c",
      "#16a34a",
      "#0d9488",
      "#0f172a"
    ];
    this.buttonTextColors = [
      "#ffffff",
      "#f8fafc",
      "#f1f5f9",
      "#e0e7ff",
      "#dbeafe",
      "#cffafe",
      "#dcfce7",
      "#fef3c7",
      "#ffedd5",
      "#ffe4e6",
      "#fae8ff",
      "#f5f5f4"
    ];
    this.backgroundColors = [
      "#ffffff",
      "#fafafa",
      "#f8fafc",
      "#f0f9ff",
      "#eff6ff",
      "#eef2ff",
      "#faf5ff",
      "#fdf4ff",
      "#fdf2f8",
      "#fff1f2",
      "#fff7ed",
      "#f0fdf4"
    ];
    this.imageBackgroundColors = [
      "#ffffff",
      "#f9fafb",
      "#f5f5f4",
      "#e7e5e4",
      "#f0f9ff",
      "#dbeafe",
      "#e0e7ff",
      "#ede9fe",
      "#fce7f3",
      "#dcfce7",
      "#fef3c7",
      "#ffedd5"
    ];
  }
  get isFormReady() {
    return !this.loading && !!this.form && !!this.brandingFormGroup;
  }
  get brandingFormGroup() {
    return this.form?.get("branding") || null;
  }
  get hasLogo() {
    return !!this.imageValue("logo");
  }
  get hasBanner() {
    return !!this.imageValue("image");
  }
  imageValue(forControl) {
    const value = this.brandingFormGroup?.get(forControl)?.value;
    return value || null;
  }
  color(name) {
    return this.brandingFormGroup?.get(name)?.value || "";
  }
  onAttachmentUploaded(forControl, payload) {
    const ctrl = this.brandingFormGroup?.get(forControl);
    if (!ctrl)
      return;
    ctrl.setValue(payload?.attachment?.url || "");
    ctrl.markAsTouched();
    ctrl.markAsDirty();
    ctrl.setErrors(null);
    ctrl.updateValueAndValidity();
    this._notifyUploaded(payload?.attachment?.name);
    this._cdr.markForCheck();
  }
  onUploadError(forControl, payload) {
    const ctrl = this.brandingFormGroup?.get(forControl);
    if (!ctrl)
      return;
    const message = payload?.error || this._transloco.translate("humanAuthnProjects.setup.ui.uploadFailed");
    ctrl.setErrors({ uploadFailed: message });
    this._snack.open(message, this._transloco.translate("close"), { duration: 3e3 });
    this._cdr.markForCheck();
  }
  onFileError(_forControl, payload) {
    this._snack.open(payload?.error || "", this._transloco.translate("close"), { duration: 3e3 });
  }
  clearImage(forControl) {
    const ctrl = this.brandingFormGroup?.get(forControl);
    if (!ctrl)
      return;
    ctrl.setValue("");
    ctrl.markAsDirty();
    ctrl.markAsTouched();
    ctrl.setErrors(null);
    ctrl.updateValueAndValidity();
    this._cdr.markForCheck();
  }
  _notifyUploaded(name) {
    const truncatedName = name && name.length > 50 ? `${name.slice(0, 47)}...` : name || "";
    this._snack.open(this._transloco.translate("humanAuthnProjects.setup.ui.uploadedSuccessfully", { name: truncatedName }), this._transloco.translate("close"), { duration: 3e3 });
  }
  static {
    this.\u0275fac = function HumanAuthnUiStepComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HumanAuthnUiStepComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HumanAuthnUiStepComponent, selectors: [["human-authn-ui-step"]], inputs: { form: "form", loading: "loading", saving: "saving" }, decls: 1, vars: 0, consts: [[4, "transloco"], [1, "ui-screen"], [1, "ui-hero"], [1, "ui-hero__eyebrow"], [1, "ui-hero__choice"], [1, "ui-decision"], [1, "choices"], [1, "section-heading"], [1, "choice-list"], [1, "choice"], [1, "choice__icon"], [1, "choice__content"], [1, "choice__title"], [1, "choice__body"], [1, "choice__benefits"], [1, "current-file"], ["source", "project", 3, "accept", "maxFileSize", "expirationDays"], [1, "choice", "choice--colors", 3, "formGroup"], [1, "color-fields"], [1, "color-field"], ["formControlName", "titleColor", 3, "colors", "label", "required"], ["formControlName", "textColor", 3, "colors", "label", "required"], ["formControlName", "buttonColor", 3, "colors", "label", "required"], ["formControlName", "buttonTextColor", 3, "colors", "label", "required"], ["formControlName", "backgroundColor", 3, "colors", "label", "required"], ["formControlName", "imageBackgroundColor", 3, "colors", "label", "required"], ["aria-live", "polite", 1, "ui-explainer"], [1, "section-heading", "section-heading--light"], [1, "sample"], [1, "sample__form"], [3, "src", "alt"], [1, "sample__logo"], [1, "sample__action"], [1, "sample__banner", 3, "background"], [1, "selected-path"], [1, "selected-path__label"], [1, "ui-facts"], [1, "fact-items"], [1, "fact-items__icon", "fact-items__icon--logo"], [1, "fact-items__icon", "fact-items__icon--colors"], [1, "fact-items__icon", "fact-items__icon--banner"], ["mat-stroked-button", "", "type", "button", "color", "warn", 3, "click"], ["source", "project", 3, "attachmentUploaded", "uploadError", "fileError", "accept", "maxFileSize", "expirationDays"], [1, "sample__banner"]], template: function HumanAuthnUiStepComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, HumanAuthnUiStepComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
      }
    }, dependencies: [
      CommonModule,
      ReactiveFormsModule,
      NgControlStatus,
      NgControlStatusGroup,
      RequiredValidator,
      FormGroupDirective,
      FormControlName,
      MatButtonModule,
      MatButton,
      MatIconModule,
      MatIcon,
      MatSnackBarModule,
      TranslocoModule,
      TranslocoDirective,
      FileDropZoneComponent,
      SwatchPickerComponent
    ], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.ui-screen[_ngcontent-%COMP%] {\n  margin-inline: auto;\n  width: min(100%, 76rem);\n}\n.ui-hero[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 2rem;\n  margin-bottom: 2rem;\n  padding: 0.5rem 0.25rem;\n}\n.ui-hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  max-width: 42rem;\n  margin: 0.35rem 0 0;\n  color: #1c1917;\n  font-size: clamp(1.75rem, 3vw, 2.55rem);\n  font-weight: 680;\n  letter-spacing: -0.045em;\n  line-height: 1.05;\n}\n.ui-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 42rem;\n  margin: 0.75rem 0 0;\n  color: #78716c;\n  font-size: 0.88rem;\n  line-height: 1.6;\n}\n.ui-hero__eyebrow[_ngcontent-%COMP%] {\n  color: #78716c;\n  font-size: 0.65rem;\n  font-weight: 750;\n  letter-spacing: 0.16em;\n  text-transform: uppercase;\n}\n.ui-hero__choice[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 0 0 auto;\n  flex-direction: column;\n  align-items: flex-end;\n  padding: 0.75rem 1rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 0.9rem;\n  background: white;\n}\n.ui-hero__choice[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #a8a29e;\n  font-size: 0.62rem;\n  font-weight: 650;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n.ui-hero__choice[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  margin-top: 0.15rem;\n  color: #292524;\n  font-size: 0.82rem;\n}\n.ui-hero__choice[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  margin-top: 0.2rem;\n  color: #78716c;\n  font-size: 0.72rem;\n  font-style: normal;\n  font-weight: 600;\n}\n.ui-decision[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1.08fr) minmax(22rem, 0.92fr);\n  overflow: hidden;\n  border: 1px solid #d6d3d1;\n  border-radius: 1.5rem;\n  background: white;\n  box-shadow: 0 1px 2px rgba(28, 25, 23, 0.03), 0 18px 45px rgba(28, 25, 23, 0.05);\n}\n.choices[_ngcontent-%COMP%], \n.ui-explainer[_ngcontent-%COMP%] {\n  padding: 1.75rem;\n}\n.ui-explainer[_ngcontent-%COMP%] {\n  background: #1c1917;\n  color: white;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.8rem;\n  margin-bottom: 1.25rem;\n}\n.section-heading[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: grid;\n  flex: 0 0 1.8rem;\n  width: 1.8rem;\n  height: 1.8rem;\n  place-items: center;\n  border-radius: 999px;\n  background: #292524;\n  color: white;\n  font-size: 0.62rem;\n  font-weight: 750;\n}\n.section-heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #292524;\n  font-size: 0.95rem;\n  font-weight: 680;\n  letter-spacing: -0.015em;\n}\n.section-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.25rem 0 0;\n  color: #78716c;\n  font-size: 0.72rem;\n  line-height: 1.45;\n}\n.section-heading--light[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  background: white;\n  color: #1c1917;\n}\n.section-heading--light[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: white;\n}\n.section-heading--light[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #a8a29e;\n}\n.choice-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.8rem;\n}\n.choice[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr);\n  align-items: flex-start;\n  gap: 1rem;\n  padding: 1.15rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 1rem;\n  background: #fafaf9;\n}\n.choice--ready[_ngcontent-%COMP%], \n.choice--colors[_ngcontent-%COMP%] {\n  border-color: #292524;\n  background: white;\n  box-shadow: inset 0 0 0 1px #292524, 0 8px 22px rgba(28, 25, 23, 0.06);\n}\n.choice__icon[_ngcontent-%COMP%] {\n  display: grid;\n  width: 2.6rem;\n  height: 2.6rem;\n  place-items: center;\n  border-radius: 0.8rem;\n  background: #e7e5e4;\n  color: #44403c;\n}\n.choice__icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 1.25rem;\n  height: 1.25rem;\n  font-size: 1.25rem;\n}\n.choice--ready[_ngcontent-%COMP%]   .choice__icon[_ngcontent-%COMP%], \n.choice--colors[_ngcontent-%COMP%]   .choice__icon[_ngcontent-%COMP%] {\n  background: #292524;\n  color: white;\n}\n.choice__content[_ngcontent-%COMP%], \n.choice__benefits[_ngcontent-%COMP%], \n.choice__benefits[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n}\n.choice__content[_ngcontent-%COMP%], \n.choice__benefits[_ngcontent-%COMP%] {\n  min-width: 0;\n  flex-direction: column;\n}\n.choice__title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.55rem;\n}\n.choice__title[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #292524;\n  font-size: 0.9rem;\n  font-weight: 680;\n}\n.choice__title[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  padding: 0.2rem 0.45rem;\n  border-radius: 999px;\n  background: #e7e5e4;\n  color: #57534e;\n  font-size: 0.58rem;\n  font-weight: 700;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n}\n.choice__body[_ngcontent-%COMP%] {\n  margin-top: 0.35rem;\n  color: #78716c;\n  font-size: 0.72rem;\n  line-height: 1.45;\n}\n.choice__benefits[_ngcontent-%COMP%] {\n  gap: 0.3rem;\n  margin-top: 0.75rem;\n  color: #57534e;\n  font-size: 0.66rem;\n}\n.choice__benefits[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  align-items: center;\n  gap: 0.35rem;\n}\n.choice__benefits[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 0.85rem;\n  height: 0.85rem;\n  color: #166534;\n  font-size: 0.85rem;\n  font-weight: 700;\n}\n.current-file[_ngcontent-%COMP%], \n.color-fields[_ngcontent-%COMP%] {\n  margin-top: 0.9rem;\n}\n.current-file[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.75rem;\n  border: 1px dashed #d6d3d1;\n  border-radius: 0.85rem;\n  background: white;\n}\n.current-file[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 3.5rem;\n  height: 3.5rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 0.6rem;\n  object-fit: contain;\n  background: #fafaf9;\n}\n.current-file[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 8rem;\n  color: #292524;\n  font-size: 0.78rem;\n  font-weight: 650;\n}\n.current-file[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n  margin-right: 0.25rem;\n  font-size: 1rem;\n}\nfile-drop-zone[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 0.9rem;\n}\n.color-fields[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.7rem;\n}\n.color-field[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.35rem 0 0;\n  color: #78716c;\n  font-size: 0.66rem;\n  line-height: 1.4;\n}\n.sample[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  overflow: hidden;\n  min-height: 16rem;\n  margin-top: 0.5rem;\n  border: 1px solid #44403c;\n  border-radius: 1rem;\n}\n.sample--split[_ngcontent-%COMP%] {\n  grid-template-columns: 1.15fr 0.85fr;\n}\n.sample__form[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 0;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 0.65rem;\n  padding: 1.25rem;\n}\n.sample__form[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 6rem;\n  height: 2rem;\n  object-fit: contain;\n}\n.sample__form[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  font-weight: 680;\n  letter-spacing: -0.02em;\n  line-height: 1.2;\n}\n.sample__form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.72rem;\n  line-height: 1.45;\n}\n.sample__logo[_ngcontent-%COMP%] {\n  color: #a8a29e;\n  font-size: 0.62rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n.sample__action[_ngcontent-%COMP%] {\n  margin-top: 0.35rem;\n  padding: 0.45rem 0.9rem;\n  border-radius: 999px;\n  font-size: 0.72rem;\n  font-weight: 650;\n}\n.sample__banner[_ngcontent-%COMP%] {\n  display: grid;\n  min-height: 8rem;\n  place-items: center;\n}\n.sample__banner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.selected-path[_ngcontent-%COMP%] {\n  padding-top: 1.25rem;\n  margin-top: 1.25rem;\n  border-top: 1px solid #44403c;\n}\n.selected-path[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0.35rem 0 0;\n  color: white;\n  font-size: 1rem;\n  font-weight: 650;\n}\n.selected-path[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  margin: 0.55rem 0 0;\n  color: #a8a29e;\n  font-size: 0.72rem;\n  line-height: 1.55;\n}\n.selected-path__label[_ngcontent-%COMP%] {\n  color: #78716c;\n  font-size: 0.6rem;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n}\n.ui-facts[_ngcontent-%COMP%] {\n  margin-top: 1.25rem;\n  padding: 1.5rem 1.75rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 1.25rem;\n  background: white;\n}\n.fact-items[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 0.75rem;\n}\n.fact-items[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.75rem;\n  padding: 0.9rem;\n  border: 1px solid #f5f5f4;\n  border-radius: 0.85rem;\n  background: #fafaf9;\n}\n.fact-items[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #292524;\n  font-size: 0.75rem;\n  font-weight: 650;\n}\n.fact-items[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.25rem 0 0;\n  color: #78716c;\n  font-size: 0.65rem;\n  line-height: 1.45;\n}\n.fact-items__icon[_ngcontent-%COMP%] {\n  display: grid;\n  flex: 0 0 2rem;\n  width: 2rem;\n  height: 2rem;\n  place-items: center;\n  border-radius: 0.6rem;\n}\n.fact-items__icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n  font-size: 1rem;\n}\n.fact-items__icon--logo[_ngcontent-%COMP%] {\n  background: #ecfdf5;\n  color: #047857;\n}\n.fact-items__icon--colors[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  color: #1d4ed8;\n}\n.fact-items__icon--banner[_ngcontent-%COMP%] {\n  background: #f5f5f4;\n  color: #57534e;\n}\n.dark[_nghost-%COMP%]   .ui-hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .ui-hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .section-heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .section-heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .choice__title[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .choice__title[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .current-file[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .current-file[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .fact-items[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .fact-items[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .ui-hero__choice[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .ui-hero__choice[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #f8fafc;\n}\n.dark[_nghost-%COMP%]   .ui-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .ui-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .ui-hero__eyebrow[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .ui-hero__eyebrow[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .section-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .section-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .choice__body[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .choice__body[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .choice__benefits[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .choice__benefits[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .color-field[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .color-field[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .fact-items[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .fact-items[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .ui-hero__choice[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .ui-hero__choice[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .ui-hero__choice[_ngcontent-%COMP%]   em[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .ui-hero__choice[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .ui-hero__choice[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .ui-hero__choice[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .ui-decision[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .ui-decision[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .ui-facts[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .ui-facts[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .current-file[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .current-file[_ngcontent-%COMP%] {\n  border-color: rgba(148, 163, 184, 0.18);\n  background: #1e293b;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);\n}\n.dark[_nghost-%COMP%]   .choices[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .choices[_ngcontent-%COMP%] {\n  background: #1e293b;\n}\n.dark[_nghost-%COMP%]   .section-heading[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .section-heading[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  background: #cbd5e1;\n  color: #0f172a;\n}\n.dark[_nghost-%COMP%]   .choice[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .choice[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .fact-items[_ngcontent-%COMP%]   article[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .fact-items[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  border-color: #334155;\n  background: #0f172a;\n}\n.dark[_nghost-%COMP%]   .choice--ready[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .choice--ready[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .choice--colors[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .choice--colors[_ngcontent-%COMP%] {\n  border-color: #e2e8f0;\n  background: #0f172a;\n  box-shadow: inset 0 0 0 1px #e2e8f0;\n}\n.dark[_nghost-%COMP%]   .choice__icon[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .choice__icon[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .choice__title[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .choice__title[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  background: #334155;\n  color: #e2e8f0;\n}\n.dark[_nghost-%COMP%]   .choice--ready[_ngcontent-%COMP%]   .choice__icon[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .choice--ready[_ngcontent-%COMP%]   .choice__icon[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .choice--colors[_ngcontent-%COMP%]   .choice__icon[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .choice--colors[_ngcontent-%COMP%]   .choice__icon[_ngcontent-%COMP%] {\n  background: #e2e8f0;\n  color: #0f172a;\n}\n.dark[_nghost-%COMP%]   .choice__benefits[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .choice__benefits[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #6ee7b7;\n}\n.dark[_nghost-%COMP%]   .ui-explainer[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .ui-explainer[_ngcontent-%COMP%] {\n  background: #1e293b;\n}\n.dark[_nghost-%COMP%]   .section-heading--light[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .section-heading--light[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  background: #e2e8f0;\n  color: #0f172a;\n}\n.dark[_nghost-%COMP%]   .section-heading--light[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .section-heading--light[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #f8fafc;\n}\n.dark[_nghost-%COMP%]   .section-heading--light[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .section-heading--light[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .sample[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .sample[_ngcontent-%COMP%] {\n  border-color: #475569;\n}\n.dark[_nghost-%COMP%]   .selected-path[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .selected-path[_ngcontent-%COMP%] {\n  border-top-color: #475569;\n}\n.dark[_nghost-%COMP%]   .selected-path[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .selected-path[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #f8fafc;\n}\n.dark[_nghost-%COMP%]   .selected-path[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .selected-path[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .selected-path__label[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .selected-path__label[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .sample__logo[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .sample__logo[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .fact-items__icon--logo[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .fact-items__icon--logo[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.14);\n  color: #6ee7b7;\n}\n.dark[_nghost-%COMP%]   .fact-items__icon--colors[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .fact-items__icon--colors[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.16);\n  color: #93c5fd;\n}\n.dark[_nghost-%COMP%]   .fact-items__icon--banner[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .fact-items__icon--banner[_ngcontent-%COMP%] {\n  background: #334155;\n  color: #cbd5e1;\n}\n@media (max-width: 1100px) {\n  .ui-decision[_ngcontent-%COMP%], \n   .sample--split[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 680px) {\n  .ui-hero[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n  .ui-hero__choice[_ngcontent-%COMP%] {\n    align-items: flex-start;\n  }\n  .choices[_ngcontent-%COMP%], \n   .ui-explainer[_ngcontent-%COMP%], \n   .ui-facts[_ngcontent-%COMP%] {\n    padding: 1.25rem;\n  }\n  .fact-items[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=ui-step.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HumanAuthnUiStepComponent, [{
    type: Component,
    args: [{ selector: "human-authn-ui-step", standalone: true, imports: [
      CommonModule,
      ReactiveFormsModule,
      MatButtonModule,
      MatIconModule,
      MatSnackBarModule,
      TranslocoModule,
      FileDropZoneComponent,
      SwatchPickerComponent
    ], template: `<ng-container *transloco="let t">\r
    @if (isFormReady) {\r
        <div class="ui-screen">\r
            <header class="ui-hero">\r
                <div>\r
                    <span class="ui-hero__eyebrow">{{ t('humanAuthnProjects.setup.ui.eyebrow') }}</span>\r
                    <h2>{{ t('humanAuthnProjects.setup.ui.title') }}</h2>\r
                    <p>{{ t('humanAuthnProjects.setup.ui.subtitle') }}</p>\r
                </div>\r
                <div class="ui-hero__choice">\r
                    <span>{{ t('humanAuthnProjects.setup.ui.currentChoice') }}</span>\r
                    <strong>{{ t(hasLogo ? 'humanAuthnProjects.setup.ui.logoOn' : 'humanAuthnProjects.setup.ui.logoOff') }}</strong>\r
                    <em>{{ t(hasBanner ? 'humanAuthnProjects.setup.ui.bannerOn' : 'humanAuthnProjects.setup.ui.bannerOff') }}</em>\r
                </div>\r
            </header>\r
\r
            <div class="ui-decision">\r
                <section class="choices">\r
                    <div class="section-heading">\r
                        <span>01</span>\r
                        <div>\r
                            <h3>{{ t('humanAuthnProjects.setup.ui.changeTitle') }}</h3>\r
                            <p>{{ t('humanAuthnProjects.setup.ui.changeHelp') }}</p>\r
                        </div>\r
                    </div>\r
\r
                    <div class="choice-list">\r
                        <article class="choice" [class.choice--ready]="hasLogo">\r
                            <span class="choice__icon"><mat-icon>image</mat-icon></span>\r
                            <div class="choice__content">\r
                                <span class="choice__title">\r
                                    <strong>{{ t('humanAuthnProjects.setup.ui.logoTitle') }}</strong>\r
                                    <small>{{ t('humanAuthnProjects.setup.ui.optional') }}</small>\r
                                </span>\r
                                <span class="choice__body">{{ t('humanAuthnProjects.setup.ui.logoBody') }}</span>\r
                                <span class="choice__benefits">\r
                                    <span><mat-icon>check</mat-icon>{{ t('humanAuthnProjects.setup.ui.logoBenefitHeader') }}</span>\r
                                    <span><mat-icon>check</mat-icon>{{ t('humanAuthnProjects.setup.ui.logoBenefitFormat') }}</span>\r
                                    <span><mat-icon>check</mat-icon>{{ t('humanAuthnProjects.setup.ui.logoBenefitSize') }}</span>\r
                                </span>\r
                                @if (imageValue('logo'); as src) {\r
                                    <div class="current-file">\r
                                        <img [src]="src" [alt]="t('humanAuthnProjects.setup.ui.logoAlt')" />\r
                                        <span>{{ t('humanAuthnProjects.setup.ui.currentLogo') }}</span>\r
                                        <button\r
                                            mat-stroked-button\r
                                            type="button"\r
                                            color="warn"\r
                                            (click)="clearImage('logo')"\r
                                            [attr.aria-label]="t('humanAuthnProjects.setup.ui.removeLogo')"\r
                                        >\r
                                            <mat-icon>delete</mat-icon>\r
                                            {{ t('humanAuthnProjects.setup.ui.removeLogo') }}\r
                                        </button>\r
                                    </div>\r
                                } @else {\r
                                    <file-drop-zone\r
                                        [accept]="imageAccept"\r
                                        [maxFileSize]="logoMaxSize"\r
                                        [expirationDays]="0"\r
                                        source="project"\r
                                        (attachmentUploaded)="onAttachmentUploaded('logo', $event)"\r
                                        (uploadError)="onUploadError('logo', $event)"\r
                                        (fileError)="onFileError('logo', $event)"\r
                                    ></file-drop-zone>\r
                                }\r
                            </div>\r
                        </article>\r
\r
                        <article class="choice" [class.choice--ready]="hasBanner">\r
                            <span class="choice__icon"><mat-icon>panorama</mat-icon></span>\r
                            <div class="choice__content">\r
                                <span class="choice__title">\r
                                    <strong>{{ t('humanAuthnProjects.setup.ui.bannerTitle') }}</strong>\r
                                    <small>{{ t('humanAuthnProjects.setup.ui.optional') }}</small>\r
                                </span>\r
                                <span class="choice__body">{{ t('humanAuthnProjects.setup.ui.bannerBody') }}</span>\r
                                <span class="choice__benefits">\r
                                    <span><mat-icon>check</mat-icon>{{ t('humanAuthnProjects.setup.ui.bannerBenefitSide') }}</span>\r
                                    <span><mat-icon>check</mat-icon>{{ t('humanAuthnProjects.setup.ui.bannerBenefitOptional') }}</span>\r
                                    <span><mat-icon>check</mat-icon>{{ t('humanAuthnProjects.setup.ui.bannerBenefitSize') }}</span>\r
                                </span>\r
                                @if (imageValue('image'); as src) {\r
                                    <div class="current-file">\r
                                        <img [src]="src" [alt]="t('humanAuthnProjects.setup.ui.bannerAlt')" />\r
                                        <span>{{ t('humanAuthnProjects.setup.ui.currentBanner') }}</span>\r
                                        <button\r
                                            mat-stroked-button\r
                                            type="button"\r
                                            color="warn"\r
                                            (click)="clearImage('image')"\r
                                            [attr.aria-label]="t('humanAuthnProjects.setup.ui.removeBanner')"\r
                                        >\r
                                            <mat-icon>delete</mat-icon>\r
                                            {{ t('humanAuthnProjects.setup.ui.removeBanner') }}\r
                                        </button>\r
                                    </div>\r
                                } @else {\r
                                    <file-drop-zone\r
                                        [accept]="imageAccept"\r
                                        [maxFileSize]="imageMaxSize"\r
                                        [expirationDays]="0"\r
                                        source="project"\r
                                        (attachmentUploaded)="onAttachmentUploaded('image', $event)"\r
                                        (uploadError)="onUploadError('image', $event)"\r
                                        (fileError)="onFileError('image', $event)"\r
                                    ></file-drop-zone>\r
                                }\r
                            </div>\r
                        </article>\r
\r
                        <article class="choice choice--colors" [formGroup]="brandingFormGroup!">\r
                            <span class="choice__icon"><mat-icon>palette</mat-icon></span>\r
                            <div class="choice__content">\r
                                <span class="choice__title">\r
                                    <strong>{{ t('humanAuthnProjects.setup.ui.colorsTitle') }}</strong>\r
                                </span>\r
                                <span class="choice__body">{{ t('humanAuthnProjects.setup.ui.colorsBody') }}</span>\r
                                <div class="color-fields">\r
                                    <div class="color-field">\r
                                        <swatch-picker\r
                                            formControlName="titleColor"\r
                                            [colors]="titleColors"\r
                                            [label]="t('humanAuthnProjects.setup.ui.colorTitle')"\r
                                            [required]="true"\r
                                        ></swatch-picker>\r
                                        <p>{{ t('humanAuthnProjects.setup.ui.colorTitleHelp') }}</p>\r
                                    </div>\r
                                    <div class="color-field">\r
                                        <swatch-picker\r
                                            formControlName="textColor"\r
                                            [colors]="textColors"\r
                                            [label]="t('humanAuthnProjects.setup.ui.colorText')"\r
                                            [required]="true"\r
                                        ></swatch-picker>\r
                                        <p>{{ t('humanAuthnProjects.setup.ui.colorTextHelp') }}</p>\r
                                    </div>\r
                                    <div class="color-field">\r
                                        <swatch-picker\r
                                            formControlName="buttonColor"\r
                                            [colors]="buttonColors"\r
                                            [label]="t('humanAuthnProjects.setup.ui.colorButton')"\r
                                            [required]="true"\r
                                        ></swatch-picker>\r
                                        <p>{{ t('humanAuthnProjects.setup.ui.colorButtonHelp') }}</p>\r
                                    </div>\r
                                    <div class="color-field">\r
                                        <swatch-picker\r
                                            formControlName="buttonTextColor"\r
                                            [colors]="buttonTextColors"\r
                                            [label]="t('humanAuthnProjects.setup.ui.colorButtonText')"\r
                                            [required]="true"\r
                                        ></swatch-picker>\r
                                        <p>{{ t('humanAuthnProjects.setup.ui.colorButtonTextHelp') }}</p>\r
                                    </div>\r
                                    <div class="color-field">\r
                                        <swatch-picker\r
                                            formControlName="backgroundColor"\r
                                            [colors]="backgroundColors"\r
                                            [label]="t('humanAuthnProjects.setup.ui.colorBackground')"\r
                                            [required]="true"\r
                                        ></swatch-picker>\r
                                        <p>{{ t('humanAuthnProjects.setup.ui.colorBackgroundHelp') }}</p>\r
                                    </div>\r
                                    <div class="color-field">\r
                                        <swatch-picker\r
                                            formControlName="imageBackgroundColor"\r
                                            [colors]="imageBackgroundColors"\r
                                            [label]="t('humanAuthnProjects.setup.ui.colorImageBackground')"\r
                                            [required]="true"\r
                                        ></swatch-picker>\r
                                        <p>{{ t('humanAuthnProjects.setup.ui.colorImageBackgroundHelp') }}</p>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                        </article>\r
                    </div>\r
                </section>\r
\r
                <aside class="ui-explainer" aria-live="polite">\r
                    <div class="section-heading section-heading--light">\r
                        <span>02</span>\r
                        <div>\r
                            <h3>{{ t('humanAuthnProjects.setup.ui.howTitle') }}</h3>\r
                            <p>{{ t('humanAuthnProjects.setup.ui.howHelp') }}</p>\r
                        </div>\r
                    </div>\r
\r
                    <div class="sample" [class.sample--split]="hasBanner">\r
                        <div class="sample__form" [style.background]="color('backgroundColor')">\r
                            @if (imageValue('logo'); as src) {\r
                                <img [src]="src" [alt]="t('humanAuthnProjects.setup.ui.logoAlt')" />\r
                            } @else {\r
                                <span class="sample__logo">{{ t('humanAuthnProjects.setup.ui.logoPlaceholder') }}</span>\r
                            }\r
                            <strong [style.color]="color('titleColor')">{{ t('humanAuthnProjects.setup.ui.sampleTitle') }}</strong>\r
                            <p [style.color]="color('textColor')">{{ t('humanAuthnProjects.setup.ui.sampleBody') }}</p>\r
                            <span class="sample__action" [style.background]="color('buttonColor')" [style.color]="color('buttonTextColor')">\r
                                {{ t('humanAuthnProjects.setup.ui.sampleButton') }}\r
                            </span>\r
                        </div>\r
                        @if (imageValue('image'); as src) {\r
                            <div class="sample__banner" [style.background]="color('imageBackgroundColor')">\r
                                <img [src]="src" [alt]="t('humanAuthnProjects.setup.ui.bannerAlt')" />\r
                            </div>\r
                        }\r
                    </div>\r
\r
                    <div class="selected-path">\r
                        <span class="selected-path__label">{{ t('humanAuthnProjects.setup.ui.selectedPath') }}</span>\r
                        @if (hasBanner) {\r
                            <h4>{{ t('humanAuthnProjects.setup.ui.withBannerTitle') }}</h4>\r
                            <p>{{ t('humanAuthnProjects.setup.ui.withBannerBody') }}</p>\r
                        } @else {\r
                            <h4>{{ t('humanAuthnProjects.setup.ui.noBannerTitle') }}</h4>\r
                            <p>{{ t('humanAuthnProjects.setup.ui.noBannerBody') }}</p>\r
                        }\r
                    </div>\r
                </aside>\r
            </div>\r
\r
            <section class="ui-facts">\r
                <div class="section-heading">\r
                    <span>03</span>\r
                    <div>\r
                        <h3>{{ t('humanAuthnProjects.setup.ui.factsTitle') }}</h3>\r
                        <p>{{ t('humanAuthnProjects.setup.ui.factsHelp') }}</p>\r
                    </div>\r
                </div>\r
                <div class="fact-items">\r
                    <article>\r
                        <span class="fact-items__icon fact-items__icon--logo"><mat-icon>image</mat-icon></span>\r
                        <div>\r
                            <strong>{{ t('humanAuthnProjects.setup.ui.markTitle') }}</strong>\r
                            <p>{{ t('humanAuthnProjects.setup.ui.markBody') }}</p>\r
                        </div>\r
                    </article>\r
                    <article>\r
                        <span class="fact-items__icon fact-items__icon--colors"><mat-icon>palette</mat-icon></span>\r
                        <div>\r
                            <strong>{{ t('humanAuthnProjects.setup.ui.paletteTitle') }}</strong>\r
                            <p>{{ t('humanAuthnProjects.setup.ui.paletteBody') }}</p>\r
                        </div>\r
                    </article>\r
                    <article>\r
                        <span class="fact-items__icon fact-items__icon--banner"><mat-icon>view_sidebar</mat-icon></span>\r
                        <div>\r
                            <strong>{{ t('humanAuthnProjects.setup.ui.widthTitle') }}</strong>\r
                            <p>{{ t('humanAuthnProjects.setup.ui.widthBody') }}</p>\r
                        </div>\r
                    </article>\r
                </div>\r
            </section>\r
        </div>\r
    }\r
</ng-container>\r
`, styles: ["/* src/app/modules/human-authn/projects/setup/steps/ui-step.component.scss */\n:host {\n  display: block;\n}\n.ui-screen {\n  margin-inline: auto;\n  width: min(100%, 76rem);\n}\n.ui-hero {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 2rem;\n  margin-bottom: 2rem;\n  padding: 0.5rem 0.25rem;\n}\n.ui-hero h2 {\n  max-width: 42rem;\n  margin: 0.35rem 0 0;\n  color: #1c1917;\n  font-size: clamp(1.75rem, 3vw, 2.55rem);\n  font-weight: 680;\n  letter-spacing: -0.045em;\n  line-height: 1.05;\n}\n.ui-hero p {\n  max-width: 42rem;\n  margin: 0.75rem 0 0;\n  color: #78716c;\n  font-size: 0.88rem;\n  line-height: 1.6;\n}\n.ui-hero__eyebrow {\n  color: #78716c;\n  font-size: 0.65rem;\n  font-weight: 750;\n  letter-spacing: 0.16em;\n  text-transform: uppercase;\n}\n.ui-hero__choice {\n  display: flex;\n  flex: 0 0 auto;\n  flex-direction: column;\n  align-items: flex-end;\n  padding: 0.75rem 1rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 0.9rem;\n  background: white;\n}\n.ui-hero__choice span {\n  color: #a8a29e;\n  font-size: 0.62rem;\n  font-weight: 650;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n.ui-hero__choice strong {\n  margin-top: 0.15rem;\n  color: #292524;\n  font-size: 0.82rem;\n}\n.ui-hero__choice em {\n  margin-top: 0.2rem;\n  color: #78716c;\n  font-size: 0.72rem;\n  font-style: normal;\n  font-weight: 600;\n}\n.ui-decision {\n  display: grid;\n  grid-template-columns: minmax(0, 1.08fr) minmax(22rem, 0.92fr);\n  overflow: hidden;\n  border: 1px solid #d6d3d1;\n  border-radius: 1.5rem;\n  background: white;\n  box-shadow: 0 1px 2px rgba(28, 25, 23, 0.03), 0 18px 45px rgba(28, 25, 23, 0.05);\n}\n.choices,\n.ui-explainer {\n  padding: 1.75rem;\n}\n.ui-explainer {\n  background: #1c1917;\n  color: white;\n}\n.section-heading {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.8rem;\n  margin-bottom: 1.25rem;\n}\n.section-heading > span {\n  display: grid;\n  flex: 0 0 1.8rem;\n  width: 1.8rem;\n  height: 1.8rem;\n  place-items: center;\n  border-radius: 999px;\n  background: #292524;\n  color: white;\n  font-size: 0.62rem;\n  font-weight: 750;\n}\n.section-heading h3 {\n  margin: 0;\n  color: #292524;\n  font-size: 0.95rem;\n  font-weight: 680;\n  letter-spacing: -0.015em;\n}\n.section-heading p {\n  margin: 0.25rem 0 0;\n  color: #78716c;\n  font-size: 0.72rem;\n  line-height: 1.45;\n}\n.section-heading--light > span {\n  background: white;\n  color: #1c1917;\n}\n.section-heading--light h3 {\n  color: white;\n}\n.section-heading--light p {\n  color: #a8a29e;\n}\n.choice-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0.8rem;\n}\n.choice {\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr);\n  align-items: flex-start;\n  gap: 1rem;\n  padding: 1.15rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 1rem;\n  background: #fafaf9;\n}\n.choice--ready,\n.choice--colors {\n  border-color: #292524;\n  background: white;\n  box-shadow: inset 0 0 0 1px #292524, 0 8px 22px rgba(28, 25, 23, 0.06);\n}\n.choice__icon {\n  display: grid;\n  width: 2.6rem;\n  height: 2.6rem;\n  place-items: center;\n  border-radius: 0.8rem;\n  background: #e7e5e4;\n  color: #44403c;\n}\n.choice__icon mat-icon {\n  width: 1.25rem;\n  height: 1.25rem;\n  font-size: 1.25rem;\n}\n.choice--ready .choice__icon,\n.choice--colors .choice__icon {\n  background: #292524;\n  color: white;\n}\n.choice__content,\n.choice__benefits,\n.choice__benefits span {\n  display: flex;\n}\n.choice__content,\n.choice__benefits {\n  min-width: 0;\n  flex-direction: column;\n}\n.choice__title {\n  display: flex;\n  align-items: center;\n  gap: 0.55rem;\n}\n.choice__title strong {\n  color: #292524;\n  font-size: 0.9rem;\n  font-weight: 680;\n}\n.choice__title small {\n  padding: 0.2rem 0.45rem;\n  border-radius: 999px;\n  background: #e7e5e4;\n  color: #57534e;\n  font-size: 0.58rem;\n  font-weight: 700;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n}\n.choice__body {\n  margin-top: 0.35rem;\n  color: #78716c;\n  font-size: 0.72rem;\n  line-height: 1.45;\n}\n.choice__benefits {\n  gap: 0.3rem;\n  margin-top: 0.75rem;\n  color: #57534e;\n  font-size: 0.66rem;\n}\n.choice__benefits span {\n  align-items: center;\n  gap: 0.35rem;\n}\n.choice__benefits mat-icon {\n  width: 0.85rem;\n  height: 0.85rem;\n  color: #166534;\n  font-size: 0.85rem;\n  font-weight: 700;\n}\n.current-file,\n.color-fields {\n  margin-top: 0.9rem;\n}\n.current-file {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.75rem;\n  border: 1px dashed #d6d3d1;\n  border-radius: 0.85rem;\n  background: white;\n}\n.current-file img {\n  width: 3.5rem;\n  height: 3.5rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 0.6rem;\n  object-fit: contain;\n  background: #fafaf9;\n}\n.current-file span {\n  flex: 1;\n  min-width: 8rem;\n  color: #292524;\n  font-size: 0.78rem;\n  font-weight: 650;\n}\n.current-file button mat-icon {\n  width: 1rem;\n  height: 1rem;\n  margin-right: 0.25rem;\n  font-size: 1rem;\n}\nfile-drop-zone {\n  display: block;\n  margin-top: 0.9rem;\n}\n.color-fields {\n  display: flex;\n  flex-direction: column;\n  gap: 0.7rem;\n}\n.color-field p {\n  margin: 0.35rem 0 0;\n  color: #78716c;\n  font-size: 0.66rem;\n  line-height: 1.4;\n}\n.sample {\n  display: grid;\n  grid-template-columns: 1fr;\n  overflow: hidden;\n  min-height: 16rem;\n  margin-top: 0.5rem;\n  border: 1px solid #44403c;\n  border-radius: 1rem;\n}\n.sample--split {\n  grid-template-columns: 1.15fr 0.85fr;\n}\n.sample__form {\n  display: flex;\n  min-width: 0;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 0.65rem;\n  padding: 1.25rem;\n}\n.sample__form img {\n  max-width: 6rem;\n  height: 2rem;\n  object-fit: contain;\n}\n.sample__form strong {\n  font-size: 1.05rem;\n  font-weight: 680;\n  letter-spacing: -0.02em;\n  line-height: 1.2;\n}\n.sample__form p {\n  margin: 0;\n  font-size: 0.72rem;\n  line-height: 1.45;\n}\n.sample__logo {\n  color: #a8a29e;\n  font-size: 0.62rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n.sample__action {\n  margin-top: 0.35rem;\n  padding: 0.45rem 0.9rem;\n  border-radius: 999px;\n  font-size: 0.72rem;\n  font-weight: 650;\n}\n.sample__banner {\n  display: grid;\n  min-height: 8rem;\n  place-items: center;\n}\n.sample__banner img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.selected-path {\n  padding-top: 1.25rem;\n  margin-top: 1.25rem;\n  border-top: 1px solid #44403c;\n}\n.selected-path h4 {\n  margin: 0.35rem 0 0;\n  color: white;\n  font-size: 1rem;\n  font-weight: 650;\n}\n.selected-path > p {\n  margin: 0.55rem 0 0;\n  color: #a8a29e;\n  font-size: 0.72rem;\n  line-height: 1.55;\n}\n.selected-path__label {\n  color: #78716c;\n  font-size: 0.6rem;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n}\n.ui-facts {\n  margin-top: 1.25rem;\n  padding: 1.5rem 1.75rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 1.25rem;\n  background: white;\n}\n.fact-items {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 0.75rem;\n}\n.fact-items article {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.75rem;\n  padding: 0.9rem;\n  border: 1px solid #f5f5f4;\n  border-radius: 0.85rem;\n  background: #fafaf9;\n}\n.fact-items strong {\n  color: #292524;\n  font-size: 0.75rem;\n  font-weight: 650;\n}\n.fact-items p {\n  margin: 0.25rem 0 0;\n  color: #78716c;\n  font-size: 0.65rem;\n  line-height: 1.45;\n}\n.fact-items__icon {\n  display: grid;\n  flex: 0 0 2rem;\n  width: 2rem;\n  height: 2rem;\n  place-items: center;\n  border-radius: 0.6rem;\n}\n.fact-items__icon mat-icon {\n  width: 1rem;\n  height: 1rem;\n  font-size: 1rem;\n}\n.fact-items__icon--logo {\n  background: #ecfdf5;\n  color: #047857;\n}\n.fact-items__icon--colors {\n  background: #eff6ff;\n  color: #1d4ed8;\n}\n.fact-items__icon--banner {\n  background: #f5f5f4;\n  color: #57534e;\n}\n:host-context(.dark) .ui-hero h2,\n:host-context(.dark) .section-heading h3,\n:host-context(.dark) .choice__title strong,\n:host-context(.dark) .current-file span,\n:host-context(.dark) .fact-items strong,\n:host-context(.dark) .ui-hero__choice strong {\n  color: #f8fafc;\n}\n:host-context(.dark) .ui-hero p,\n:host-context(.dark) .ui-hero__eyebrow,\n:host-context(.dark) .section-heading p,\n:host-context(.dark) .choice__body,\n:host-context(.dark) .choice__benefits,\n:host-context(.dark) .color-field p,\n:host-context(.dark) .fact-items p,\n:host-context(.dark) .ui-hero__choice span,\n:host-context(.dark) .ui-hero__choice em {\n  color: #94a3b8;\n}\n:host-context(.dark) .ui-hero__choice,\n:host-context(.dark) .ui-decision,\n:host-context(.dark) .ui-facts,\n:host-context(.dark) .current-file {\n  border-color: rgba(148, 163, 184, 0.18);\n  background: #1e293b;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);\n}\n:host-context(.dark) .choices {\n  background: #1e293b;\n}\n:host-context(.dark) .section-heading > span {\n  background: #cbd5e1;\n  color: #0f172a;\n}\n:host-context(.dark) .choice,\n:host-context(.dark) .fact-items article {\n  border-color: #334155;\n  background: #0f172a;\n}\n:host-context(.dark) .choice--ready,\n:host-context(.dark) .choice--colors {\n  border-color: #e2e8f0;\n  background: #0f172a;\n  box-shadow: inset 0 0 0 1px #e2e8f0;\n}\n:host-context(.dark) .choice__icon,\n:host-context(.dark) .choice__title small {\n  background: #334155;\n  color: #e2e8f0;\n}\n:host-context(.dark) .choice--ready .choice__icon,\n:host-context(.dark) .choice--colors .choice__icon {\n  background: #e2e8f0;\n  color: #0f172a;\n}\n:host-context(.dark) .choice__benefits mat-icon {\n  color: #6ee7b7;\n}\n:host-context(.dark) .ui-explainer {\n  background: #1e293b;\n}\n:host-context(.dark) .section-heading--light > span {\n  background: #e2e8f0;\n  color: #0f172a;\n}\n:host-context(.dark) .section-heading--light h3 {\n  color: #f8fafc;\n}\n:host-context(.dark) .section-heading--light p {\n  color: #94a3b8;\n}\n:host-context(.dark) .sample {\n  border-color: #475569;\n}\n:host-context(.dark) .selected-path {\n  border-top-color: #475569;\n}\n:host-context(.dark) .selected-path h4 {\n  color: #f8fafc;\n}\n:host-context(.dark) .selected-path > p {\n  color: #94a3b8;\n}\n:host-context(.dark) .selected-path__label,\n:host-context(.dark) .sample__logo {\n  color: #94a3b8;\n}\n:host-context(.dark) .fact-items__icon--logo {\n  background: rgba(16, 185, 129, 0.14);\n  color: #6ee7b7;\n}\n:host-context(.dark) .fact-items__icon--colors {\n  background: rgba(59, 130, 246, 0.16);\n  color: #93c5fd;\n}\n:host-context(.dark) .fact-items__icon--banner {\n  background: #334155;\n  color: #cbd5e1;\n}\n@media (max-width: 1100px) {\n  .ui-decision,\n  .sample--split {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 680px) {\n  .ui-hero {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n  .ui-hero__choice {\n    align-items: flex-start;\n  }\n  .choices,\n  .ui-explainer,\n  .ui-facts {\n    padding: 1.25rem;\n  }\n  .fact-items {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=ui-step.component.css.map */\n"] }]
  }], null, { form: [{
    type: Input
  }], loading: [{
    type: Input
  }], saving: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HumanAuthnUiStepComponent, { className: "HumanAuthnUiStepComponent", filePath: "src/app/modules/human-authn/projects/setup/steps/ui-step.component.ts", lineNumber: 31 });
})();

// src/app/modules/human-authn/projects/setup/steps/human-authn-step.component.ts
var _c05 = () => ({ number: 1 });
var _c14 = () => ({ number: 2 });
var _c24 = (a0, a1) => ({ selected: a0, total: a1 });
var _c33 = () => ({ number: 3 });
var _c42 = () => ({ number: 4 });
var _forTrack05 = ($index, $item) => $item.key;
function HumanAuthnModeStepComponent_ng_container_0_For_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const value_r2 = ctx.$implicit;
    const t_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("value", value_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r3("humanAuthnProjects.setup.humanAuthn.tolerance." + value_r2), " ");
  }
}
function HumanAuthnModeStepComponent_ng_container_0_Conditional_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 48)(2, "div")(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 49);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "mat-slider", 50);
    \u0275\u0275element(10, "input", 51);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r3("humanAuthnProjects.setup.humanAuthn.compareTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("humanAuthnProjects.setup.humanAuthn.compareHelp"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.compareMinScoreDisplayValue);
  }
}
function HumanAuthnModeStepComponent_ng_container_0_Conditional_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "mat-icon");
    \u0275\u0275text(2, "description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(t_r3("humanAuthnProjects.setup.humanAuthn.compareTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("humanAuthnProjects.setup.humanAuthn.compareUnavailable"));
  }
}
function HumanAuthnModeStepComponent_ng_container_0_For_83_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 52)(1, "mat-checkbox", 53);
    \u0275\u0275listener("change", function HumanAuthnModeStepComponent_ng_container_0_For_83_Template_mat_checkbox_change_1_listener($event) {
      const option_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.togglePublicKey(option_r6.key, $event.checked));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 54);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const option_r6 = ctx.$implicit;
    const t_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("public-field--disabled", !option_r6.available);
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r3.isPublicKeySelected(option_r6.key))("disabled", !option_r6.available);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r3("humanAuthnProjects.setup.humanAuthn.publicData." + option_r6.key), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r3(option_r6.available ? "humanAuthnProjects.setup.humanAuthn.source." + option_r6.source : "humanAuthnProjects.setup.humanAuthn.enableSource." + option_r6.source), " ");
  }
}
function HumanAuthnModeStepComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 1)(2, "header", 2)(3, "div")(4, "span", 3);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h2");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 4)(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "strong");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "em");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 5)(18, "section", 6)(19, "div", 7)(20, "span");
    \u0275\u0275text(21, "01");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div")(23, "h3");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "p");
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerStart(27, 8);
    \u0275\u0275elementStart(28, "ol", 9)(29, "li", 10)(30, "span", 11);
    \u0275\u0275text(31, "1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "article", 12)(33, "header", 13)(34, "div")(35, "span", 14);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "h3");
    \u0275\u0275text(38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "p");
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "span", 15);
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 16)(44, "div", 17)(45, "mat-icon");
    \u0275\u0275text(46, "camera_front");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "div")(48, "strong");
    \u0275\u0275text(49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "span");
    \u0275\u0275text(51);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(52, "mat-slide-toggle", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "div", 19)(54, "div", 20)(55, "strong");
    \u0275\u0275text(56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "span");
    \u0275\u0275text(58);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "mat-form-field", 21)(60, "mat-label");
    \u0275\u0275text(61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "mat-select", 22);
    \u0275\u0275repeaterCreate(63, HumanAuthnModeStepComponent_ng_container_0_For_64_Template, 2, 2, "mat-option", 23, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(65, HumanAuthnModeStepComponent_ng_container_0_Conditional_65_Template, 11, 3, "div", 24)(66, HumanAuthnModeStepComponent_ng_container_0_Conditional_66_Template, 8, 2, "div", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(67, "li", 10)(68, "span", 11);
    \u0275\u0275text(69, "2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "article", 12)(71, "header", 13)(72, "div")(73, "span", 14);
    \u0275\u0275text(74);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "h3");
    \u0275\u0275text(76);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "p");
    \u0275\u0275text(78);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(79, "span", 15);
    \u0275\u0275text(80);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(81, "div", 26);
    \u0275\u0275repeaterCreate(82, HumanAuthnModeStepComponent_ng_container_0_For_83_Template, 5, 6, "label", 27, _forTrack05);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(84, "li", 10)(85, "span", 11);
    \u0275\u0275text(86, "3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "article", 12)(88, "header", 13)(89, "div")(90, "span", 14);
    \u0275\u0275text(91);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(92, "h3");
    \u0275\u0275text(93);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "p");
    \u0275\u0275text(95);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(96, "span", 15);
    \u0275\u0275text(97);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(98, "div", 16)(99, "div", 17)(100, "mat-icon");
    \u0275\u0275text(101, "face_retouching_natural");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(102, "div")(103, "strong");
    \u0275\u0275text(104);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(105, "span");
    \u0275\u0275text(106);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(107, "mat-slide-toggle", 28);
    \u0275\u0275listener("change", function HumanAuthnModeStepComponent_ng_container_0_Template_mat_slide_toggle_change_107_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onRequireLivenessChange($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(108, "div", 19)(109, "div", 20)(110, "strong");
    \u0275\u0275text(111);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(112, "span");
    \u0275\u0275text(113);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(114, "mat-form-field", 21)(115, "mat-label");
    \u0275\u0275text(116);
    \u0275\u0275elementEnd();
    \u0275\u0275element(117, "input", 29);
    \u0275\u0275elementStart(118, "button", 30);
    \u0275\u0275listener("click", function HumanAuthnModeStepComponent_ng_container_0_Template_button_click_118_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.hideVerifierKey = !ctx_r3.hideVerifierKey);
    });
    \u0275\u0275elementStart(119, "mat-icon");
    \u0275\u0275text(120);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(121, "li", 10)(122, "span", 11);
    \u0275\u0275text(123, "4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(124, "article", 12)(125, "header", 13)(126, "div")(127, "span", 14);
    \u0275\u0275text(128);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(129, "h3");
    \u0275\u0275text(130);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(131, "p");
    \u0275\u0275text(132);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(133, "span", 15);
    \u0275\u0275text(134);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(135, "mat-button-toggle-group", 31)(136, "mat-button-toggle", 32)(137, "span", 33)(138, "mat-icon");
    \u0275\u0275text(139, "data_object");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(140, "span")(141, "strong");
    \u0275\u0275text(142);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(143, "small");
    \u0275\u0275text(144);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(145, "mat-button-toggle", 34)(146, "span", 33)(147, "mat-icon");
    \u0275\u0275text(148, "qr_code_2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(149, "span")(150, "strong");
    \u0275\u0275text(151);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(152, "small");
    \u0275\u0275text(153);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(154, "div", 35)(155, "mat-icon");
    \u0275\u0275text(156, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(157, "span");
    \u0275\u0275text(158);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(159, "aside", 36)(160, "div", 37)(161, "span");
    \u0275\u0275text(162, "02");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(163, "div")(164, "h3");
    \u0275\u0275text(165);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(166, "p");
    \u0275\u0275text(167);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(168, "ol", 38)(169, "li")(170, "mat-icon");
    \u0275\u0275text(171, "fingerprint");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(172, "span");
    \u0275\u0275text(173);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(174, "li")(175, "mat-icon");
    \u0275\u0275text(176, "visibility");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(177, "span");
    \u0275\u0275text(178);
    \u0275\u0275elementStart(179, "small");
    \u0275\u0275text(180);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(181, "li")(182, "mat-icon");
    \u0275\u0275text(183);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(184, "span");
    \u0275\u0275text(185);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(186, "li", 39)(187, "mat-icon");
    \u0275\u0275text(188);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(189, "span");
    \u0275\u0275text(190);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(191, "div", 40)(192, "span", 41);
    \u0275\u0275text(193);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(194, "h4");
    \u0275\u0275text(195);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(196, "p");
    \u0275\u0275text(197);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(198, "div", 42)(199, "mat-icon");
    \u0275\u0275text(200);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(201, "span");
    \u0275\u0275text(202);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(203, "section", 43)(204, "div", 7)(205, "span");
    \u0275\u0275text(206, "03");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(207, "div")(208, "h3");
    \u0275\u0275text(209);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(210, "p");
    \u0275\u0275text(211);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(212, "div", 44)(213, "article")(214, "span", 45)(215, "mat-icon");
    \u0275\u0275text(216, "face_retouching_off");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(217, "div")(218, "strong");
    \u0275\u0275text(219);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(220, "p");
    \u0275\u0275text(221);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(222, "article")(223, "span", 46)(224, "mat-icon");
    \u0275\u0275text(225, "visibility");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(226, "div")(227, "strong");
    \u0275\u0275text(228);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(229, "p");
    \u0275\u0275text(230);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(231, "article")(232, "span", 47)(233, "mat-icon");
    \u0275\u0275text(234, "verified_user");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(235, "div")(236, "strong");
    \u0275\u0275text(237);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(238, "p");
    \u0275\u0275text(239);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_8_0;
    let tmp_45_0;
    let tmp_59_0;
    let tmp_60_0;
    const t_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r3.form);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r3("humanAuthnProjects.setup.humanAuthn.eyebrow"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("humanAuthnProjects.setup.humanAuthn.journeyTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("humanAuthnProjects.setup.humanAuthn.privacy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r3("humanAuthnProjects.setup.humanAuthn.currentChoice"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r3(ctx_r3.requireLiveness ? "humanAuthnProjects.setup.humanAuthn.accessActive" : "humanAuthnProjects.setup.humanAuthn.accessStandard"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r3(((tmp_8_0 = ctx_r3.humanAuthnGroup.get("outputFormat")) == null ? null : tmp_8_0.value) === "qrCode" ? "humanAuthnProjects.setup.humanAuthn.outputQr" : "humanAuthnProjects.setup.humanAuthn.outputString"), " ");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(t_r3("humanAuthnProjects.setup.humanAuthn.recordTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("humanAuthnProjects.setup.humanAuthn.recordHelp"));
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(t_r3("humanAuthnProjects.setup.humanAuthn.stageLabel", \u0275\u0275pureFunction0(71, _c05)));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("humanAuthnProjects.setup.humanAuthn.verifyStageTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("humanAuthnProjects.setup.humanAuthn.verifyStageHelp"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r3(ctx_r3.livenessEnabled ? "humanAuthnProjects.setup.humanAuthn.verificationActive" : "humanAuthnProjects.setup.humanAuthn.verificationStandard"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(t_r3("humanAuthnProjects.setup.humanAuthn.livenessAtCreation"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("humanAuthnProjects.setup.humanAuthn.livenessAtCreationHelp"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("setting-block--disabled", !ctx_r3.livenessEnabled);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r3("humanAuthnProjects.setup.humanAuthn.toleranceTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("humanAuthnProjects.setup.humanAuthn.toleranceHelp"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r3("humanAuthnProjects.setup.humanAuthn.toleranceTitle"));
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r3.livenessEnabled);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.tolerances);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.documentEnabled ? 65 : 66);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(t_r3("humanAuthnProjects.setup.humanAuthn.stageLabel", \u0275\u0275pureFunction0(72, _c14)));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("humanAuthnProjects.setup.humanAuthn.publicDataTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("humanAuthnProjects.setup.humanAuthn.publicDataHelp"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r3("humanAuthnProjects.setup.humanAuthn.publicDataCount", \u0275\u0275pureFunction2(73, _c24, ctx_r3.selectedPublicDataCount, ctx_r3.publicDataOptions.length)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r3.publicDataOptions);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(t_r3("humanAuthnProjects.setup.humanAuthn.stageLabel", \u0275\u0275pureFunction0(76, _c33)));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("humanAuthnProjects.setup.humanAuthn.protectStageTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("humanAuthnProjects.setup.humanAuthn.protectStageHelp"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r3(ctx_r3.requireLiveness ? "humanAuthnProjects.setup.humanAuthn.accessActive" : "humanAuthnProjects.setup.humanAuthn.accessStandard"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(t_r3("humanAuthnProjects.setup.humanAuthn.requireLiveness"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("humanAuthnProjects.setup.humanAuthn.requireLivenessHelp"));
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r3.requireLiveness);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r3("humanAuthnProjects.setup.humanAuthn.verifierKeyTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("humanAuthnProjects.setup.humanAuthn.verifierKeyHelp"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r3("humanAuthnProjects.setup.humanAuthn.verifierKeyLabel"));
    \u0275\u0275advance();
    \u0275\u0275property("type", ctx_r3.hideVerifierKey ? "password" : "text");
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", t_r3("humanAuthnProjects.setup.humanAuthn.verifierKeyToggle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.hideVerifierKey ? "visibility" : "visibility_off");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(t_r3("humanAuthnProjects.setup.humanAuthn.stageLabel", \u0275\u0275pureFunction0(77, _c42)));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("humanAuthnProjects.setup.humanAuthn.outputFormatTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("humanAuthnProjects.setup.humanAuthn.outputFormatHelp"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r3(((tmp_45_0 = ctx_r3.humanAuthnGroup.get("outputFormat")) == null ? null : tmp_45_0.value) === "qrCode" ? "humanAuthnProjects.setup.humanAuthn.outputQr" : "humanAuthnProjects.setup.humanAuthn.outputString"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("hideSingleSelectionIndicator", true);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(t_r3("humanAuthnProjects.setup.humanAuthn.outputString"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("humanAuthnProjects.setup.humanAuthn.outputStringHelp"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(t_r3("humanAuthnProjects.setup.humanAuthn.outputQr"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("humanAuthnProjects.setup.humanAuthn.outputQrHelp"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(t_r3("humanAuthnProjects.setup.humanAuthn.readySummary"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(t_r3("humanAuthnProjects.setup.humanAuthn.howTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("humanAuthnProjects.setup.humanAuthn.howHelp"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(t_r3("humanAuthnProjects.setup.humanAuthn.flowChecked"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", t_r3("humanAuthnProjects.setup.humanAuthn.flowPublic"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r3("humanAuthnProjects.setup.humanAuthn.publicDataCount", \u0275\u0275pureFunction2(78, _c24, ctx_r3.selectedPublicDataCount, ctx_r3.publicDataOptions.length)), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.requireLiveness ? "face" : "lock");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r3(ctx_r3.requireLiveness ? "humanAuthnProjects.setup.humanAuthn.accessActive" : "humanAuthnProjects.setup.humanAuthn.accessStandard"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(((tmp_59_0 = ctx_r3.humanAuthnGroup.get("outputFormat")) == null ? null : tmp_59_0.value) === "qrCode" ? "qr_code_2" : "data_object");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r3(((tmp_60_0 = ctx_r3.humanAuthnGroup.get("outputFormat")) == null ? null : tmp_60_0.value) === "qrCode" ? "humanAuthnProjects.setup.humanAuthn.outputQr" : "humanAuthnProjects.setup.humanAuthn.outputString"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r3("humanAuthnProjects.setup.humanAuthn.selectedPath"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r3(ctx_r3.requireLiveness ? "humanAuthnProjects.setup.humanAuthn.activeTitle" : "humanAuthnProjects.setup.humanAuthn.standardTitle"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r3(ctx_r3.requireLiveness ? "humanAuthnProjects.setup.humanAuthn.activeBody" : "humanAuthnProjects.setup.humanAuthn.standardBody"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.documentEnabled ? "face" : "description");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r3(ctx_r3.documentEnabled ? "humanAuthnProjects.setup.humanAuthn.compareOn" : "humanAuthnProjects.setup.humanAuthn.compareOff"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(t_r3("humanAuthnProjects.setup.humanAuthn.factsTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("humanAuthnProjects.setup.humanAuthn.factsHelp"));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(t_r3("humanAuthnProjects.setup.humanAuthn.factTemplateTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("humanAuthnProjects.setup.humanAuthn.factTemplateBody"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(t_r3("humanAuthnProjects.setup.humanAuthn.factPublicTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("humanAuthnProjects.setup.humanAuthn.factPublicBody"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(t_r3("humanAuthnProjects.setup.humanAuthn.factActiveTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("humanAuthnProjects.setup.humanAuthn.factActiveBody"));
  }
}
var HUMAN_AUTHN_TOLERANCES = ["SOFT", "REGULAR", "HARDENED", "REGULAR_HARD", "REGULAR_SOFT"];
var HUMAN_AUTHN_PUBLIC_DATA_KEYS = ["fullName", "email", "phone", "documentNumber"];
var PUBLIC_DATA_SOURCES = {
  fullName: "signup",
  email: "signup",
  phone: "signup",
  documentNumber: "documents"
};
var HumanAuthnModeStepComponent = class _HumanAuthnModeStepComponent {
  constructor() {
    this.tolerances = HUMAN_AUTHN_TOLERANCES;
    this.hideVerifierKey = true;
  }
  get humanAuthnGroup() {
    return this.form.get("projectFlow.humanAuthn");
  }
  get requireLiveness() {
    return this.humanAuthnGroup?.get("mode")?.value === "active_user";
  }
  get livenessEnabled() {
    return this.requireLiveness || !!this.humanAuthnGroup?.get("livenessAtCreation")?.value;
  }
  get documentEnabled() {
    return this.form.get("projectFlow.steps.document")?.value !== "skip";
  }
  get compareMinScoreDisplayValue() {
    return `${Math.floor((this.humanAuthnGroup?.get("compareMinScore")?.value || 0) * 100)}%`;
  }
  get publicDataOptions() {
    const availableKeys = this.availablePublicDataKeys();
    return HUMAN_AUTHN_PUBLIC_DATA_KEYS.map((key) => ({
      key,
      available: availableKeys.includes(key),
      source: PUBLIC_DATA_SOURCES[key]
    }));
  }
  get selectedPublicDataCount() {
    return this.availablePublicDataKeys().filter((key) => this.isPublicKeySelected(key)).length;
  }
  availablePublicDataKeys() {
    const keys = [];
    if (this.form.get("projectFlow.signUpForm.fullName")?.value)
      keys.push("fullName");
    if (this.form.get("projectFlow.signUpForm.email")?.value)
      keys.push("email");
    if (this.form.get("projectFlow.signUpForm.phone")?.value)
      keys.push("phone");
    if (this.documentEnabled)
      keys.push("documentNumber");
    return keys;
  }
  isPublicKeySelected(key) {
    return (this.humanAuthnGroup?.get("publicDataKeys")?.value || []).includes(key);
  }
  onRequireLivenessChange(event) {
    this.humanAuthnGroup.get("mode")?.setValue(event.checked ? "active_user" : "standard");
    this.humanAuthnGroup.get("mode")?.markAsDirty();
    this.humanAuthnGroup.get("tolerance")?.setValue(event.checked ? "HARDENED" : "REGULAR");
    this.humanAuthnGroup.get("tolerance")?.markAsDirty();
  }
  togglePublicKey(key, checked) {
    const control = this.humanAuthnGroup.get("publicDataKeys");
    const current = [...control?.value || []];
    const next = checked ? [.../* @__PURE__ */ new Set([...current, key])] : current.filter((item) => item !== key);
    control?.setValue(next);
    control?.markAsDirty();
  }
  static {
    this.\u0275fac = function HumanAuthnModeStepComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HumanAuthnModeStepComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HumanAuthnModeStepComponent, selectors: [["human-authn-mode-step"]], inputs: { form: "form" }, decls: 1, vars: 0, consts: [[4, "transloco"], [1, "ha-screen", 3, "formGroup"], [1, "ha-hero"], [1, "ha-hero__eyebrow"], [1, "ha-hero__choice"], [1, "ha-decision"], ["formGroupName", "projectFlow", 1, "ha-record"], [1, "section-heading"], ["formGroupName", "humanAuthn"], [1, "journey-timeline"], [1, "journey-stage"], ["aria-hidden", "true", 1, "journey-stage__marker"], [1, "journey-panel"], [1, "journey-panel__header"], [1, "journey-panel__eyebrow"], [1, "journey-panel__status"], [1, "setting-row"], [1, "setting-row__copy"], ["formControlName", "livenessAtCreation"], [1, "setting-block"], [1, "setting-block__copy"], ["appearance", "outline", "subscriptSizing", "dynamic"], ["formControlName", "tolerance", 3, "disabled"], [3, "value"], [1, "score-block"], [1, "unavailable-note"], [1, "public-fields"], [1, "public-field", 3, "public-field--disabled"], [3, "change", "checked"], ["matInput", "", "formControlName", "verifierKey", "autocomplete", "new-password", "maxlength", "128", 3, "type"], ["mat-icon-button", "", "matSuffix", "", "type", "button", 3, "click"], ["formControlName", "outputFormat", "aria-label", "HumanID output format", 1, "output-options", 3, "hideSingleSelectionIndicator"], ["value", "string"], [1, "output-option"], ["value", "qrCode"], [1, "journey-complete"], ["aria-live", "polite", 1, "ha-explainer"], [1, "section-heading", "section-heading--light"], [1, "ha-flow"], [1, "ha-flow__result"], [1, "ha-path"], [1, "ha-path__label"], [1, "ha-path__result"], [1, "ha-facts"], [1, "fact-items"], [1, "fact-items__icon", "fact-items__icon--private"], [1, "fact-items__icon", "fact-items__icon--public"], [1, "fact-items__icon", "fact-items__icon--active"], [1, "score-block__header"], [1, "score-block__value"], ["min", "0.7", "max", "0.95", "step", "0.01", "discrete", ""], ["matSliderThumb", "", "formControlName", "compareMinScore"], [1, "public-field"], [3, "change", "checked", "disabled"], [1, "public-field__source"]], template: function HumanAuthnModeStepComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, HumanAuthnModeStepComponent_ng_container_0_Template, 240, 81, "ng-container", 0);
      }
    }, dependencies: [
      CommonModule,
      ReactiveFormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      MaxLengthValidator,
      FormGroupDirective,
      FormControlName,
      FormGroupName,
      MatButtonModule,
      MatIconButton,
      MatButtonToggleModule,
      MatButtonToggleGroup,
      MatButtonToggle,
      MatCheckboxModule,
      MatCheckbox,
      MatFormFieldModule,
      MatFormField,
      MatLabel,
      MatSuffix,
      MatIconModule,
      MatIcon,
      MatInputModule,
      MatInput,
      MatSelectModule,
      MatSelect,
      MatOption,
      MatSlideToggleModule,
      MatSlideToggle,
      MatSliderModule,
      MatSlider,
      MatSliderThumb,
      TranslocoModule,
      TranslocoDirective
    ], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.ha-screen[_ngcontent-%COMP%] {\n  margin-inline: auto;\n  width: min(100%, 76rem);\n}\n.ha-hero[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 2rem;\n  margin-bottom: 2rem;\n  padding: 0.5rem 0.25rem;\n}\n.ha-hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  max-width: 42rem;\n  margin: 0.35rem 0 0;\n  color: #1c1917;\n  font-size: clamp(1.75rem, 3vw, 2.55rem);\n  font-weight: 680;\n  letter-spacing: -0.045em;\n  line-height: 1.05;\n}\n.ha-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 42rem;\n  margin: 0.75rem 0 0;\n  color: #78716c;\n  font-size: 0.88rem;\n  line-height: 1.6;\n}\n.ha-hero__eyebrow[_ngcontent-%COMP%] {\n  color: #78716c;\n  font-size: 0.65rem;\n  font-weight: 750;\n  letter-spacing: 0.16em;\n  text-transform: uppercase;\n}\n.ha-hero__choice[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 0 0 auto;\n  flex-direction: column;\n  align-items: flex-end;\n  max-width: 16rem;\n  padding: 0.75rem 1rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 0.9rem;\n  background: white;\n}\n.ha-hero__choice[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #a8a29e;\n  font-size: 0.62rem;\n  font-weight: 650;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n.ha-hero__choice[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.ha-hero__choice[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  color: #292524;\n  font-style: normal;\n}\n.ha-hero__choice[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  margin-top: 0.15rem;\n  font-size: 0.82rem;\n}\n.ha-hero__choice[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  margin-top: 0.1rem;\n  font-size: 0.72rem;\n}\n.ha-decision[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1.15fr) minmax(20rem, 0.85fr);\n  overflow: hidden;\n  border: 1px solid #d6d3d1;\n  border-radius: 1.5rem;\n  background: white;\n  box-shadow: 0 1px 2px rgba(28, 25, 23, 0.03), 0 18px 45px rgba(28, 25, 23, 0.05);\n}\n.ha-record[_ngcontent-%COMP%], \n.ha-explainer[_ngcontent-%COMP%], \n.ha-facts[_ngcontent-%COMP%] {\n  padding: 1.75rem;\n}\n.ha-explainer[_ngcontent-%COMP%] {\n  background: #1c1917;\n  color: white;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.8rem;\n  margin-bottom: 1.25rem;\n}\n.section-heading[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: grid;\n  flex: 0 0 1.8rem;\n  width: 1.8rem;\n  height: 1.8rem;\n  place-items: center;\n  border-radius: 999px;\n  background: #292524;\n  color: white;\n  font-size: 0.62rem;\n  font-weight: 750;\n}\n.section-heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #292524;\n  font-size: 0.95rem;\n  font-weight: 680;\n}\n.section-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.25rem 0 0;\n  color: #78716c;\n  font-size: 0.72rem;\n  line-height: 1.45;\n}\n.section-heading--light[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  background: white;\n  color: #1c1917;\n}\n.section-heading--light[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: white;\n}\n.section-heading--light[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #a8a29e;\n}\n.ha-flow[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.55rem;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.ha-flow[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.7rem;\n  padding: 0.7rem 0.8rem;\n  border: 1px solid #44403c;\n  border-radius: 0.8rem;\n  background: #292524;\n}\n.ha-flow[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 1.15rem;\n  height: 1.15rem;\n  color: #e7e5e4;\n  font-size: 1.15rem;\n}\n.ha-flow[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  color: #f5f5f4;\n  font-size: 0.75rem;\n  font-weight: 650;\n}\n.ha-flow[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #a8a29e;\n  font-size: 0.65rem;\n  font-weight: 550;\n}\n.ha-flow__result[_ngcontent-%COMP%] {\n  border-color: #e7e5e4;\n  background: white;\n}\n.ha-flow__result[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], \n.ha-flow__result[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #1c1917;\n}\n.ha-path[_ngcontent-%COMP%] {\n  margin-top: 1.25rem;\n  padding-top: 1.15rem;\n  border-top: 1px solid #44403c;\n}\n.ha-path[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0.35rem 0 0;\n  font-size: 1rem;\n  font-weight: 680;\n}\n.ha-path[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  margin: 0.4rem 0 0;\n  color: #d6d3d1;\n  font-size: 0.75rem;\n  line-height: 1.5;\n}\n.ha-path__label[_ngcontent-%COMP%] {\n  color: #a8a29e;\n  font-size: 0.62rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n.ha-path__result[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.55rem;\n  margin-top: 0.9rem;\n  padding: 0.75rem 0.85rem;\n  border: 1px solid #44403c;\n  border-radius: 0.8rem;\n  background: #292524;\n  color: #f5f5f4;\n  font-size: 0.72rem;\n  line-height: 1.45;\n}\n.ha-path__result[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n  font-size: 1rem;\n}\n.ha-facts[_ngcontent-%COMP%] {\n  margin-top: 1.25rem;\n  border: 1px solid #d6d3d1;\n  border-radius: 1.5rem;\n  background: white;\n}\n.fact-items[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 0.8rem;\n}\n.fact-items[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  padding: 0.9rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 0.9rem;\n  background: #fafaf9;\n}\n.fact-items[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #292524;\n  font-size: 0.78rem;\n}\n.fact-items[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.25rem 0 0;\n  color: #78716c;\n  font-size: 0.68rem;\n  line-height: 1.45;\n}\n.fact-items__icon[_ngcontent-%COMP%] {\n  display: grid;\n  flex: 0 0 2rem;\n  width: 2rem;\n  height: 2rem;\n  place-items: center;\n  border-radius: 0.6rem;\n}\n.fact-items__icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n  font-size: 1rem;\n}\n.fact-items__icon--private[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #b91c1c;\n}\n.fact-items__icon--public[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  color: #1d4ed8;\n}\n.fact-items__icon--active[_ngcontent-%COMP%] {\n  background: #ecfdf5;\n  color: #047857;\n}\n.journey-intro[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n  margin-bottom: 2rem;\n  padding: 1.25rem 1.5rem;\n  border: 1px solid rgba(214, 211, 209, 0.8);\n  border-radius: 1.25rem;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.96),\n      rgba(245, 245, 244, 0.72));\n}\n.journey-intro[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #1c1917;\n  font-size: 1.05rem;\n  font-weight: 650;\n  letter-spacing: -0.015em;\n}\n.journey-intro[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 46rem;\n  margin: 0.3rem 0 0;\n  color: #78716c;\n  font-size: 0.78rem;\n  line-height: 1.55;\n}\n.journey-intro__icon[_ngcontent-%COMP%] {\n  display: grid;\n  flex: 0 0 2.5rem;\n  width: 2.5rem;\n  height: 2.5rem;\n  place-items: center;\n  border-radius: 0.8rem;\n  background: #1c1917;\n  color: white;\n}\n.journey-intro__icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 1.25rem;\n  height: 1.25rem;\n  font-size: 1.25rem;\n}\n.journey-timeline[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.journey-timeline[_ngcontent-%COMP%]::before {\n  position: absolute;\n  top: 1.15rem;\n  bottom: 1.15rem;\n  left: 1.15rem;\n  width: 1px;\n  background: linear-gradient(#292524, #d6d3d1);\n  content: "";\n}\n.journey-stage[_ngcontent-%COMP%] {\n  position: relative;\n  display: grid;\n  grid-template-columns: 2.3rem minmax(0, 1fr);\n  gap: 1rem;\n}\n.journey-stage__marker[_ngcontent-%COMP%] {\n  z-index: 1;\n  display: grid;\n  width: 2.3rem;\n  height: 2.3rem;\n  place-items: center;\n  border: 4px solid white;\n  border-radius: 999px;\n  background: #292524;\n  color: white;\n  font-size: 0.75rem;\n  font-weight: 700;\n}\n.journey-panel[_ngcontent-%COMP%] {\n  overflow: hidden;\n  border: 1px solid rgba(214, 211, 209, 0.9);\n  border-radius: 1.25rem;\n  background: white;\n  box-shadow: 0 1px 2px rgba(28, 25, 23, 0.03), 0 12px 30px rgba(28, 25, 23, 0.035);\n}\n.journey-panel__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 1rem;\n  padding: 1.4rem 1.5rem 1.25rem;\n  border-bottom: 1px solid #f5f5f4;\n}\n.journey-panel__header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0.15rem 0 0;\n  color: #1c1917;\n  font-size: 1.05rem;\n  font-weight: 650;\n  letter-spacing: -0.015em;\n}\n.journey-panel__header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 38rem;\n  margin: 0.35rem 0 0;\n  color: #78716c;\n  font-size: 0.76rem;\n  line-height: 1.5;\n}\n.journey-panel__eyebrow[_ngcontent-%COMP%] {\n  color: #a8a29e;\n  font-size: 0.64rem;\n  font-weight: 700;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n}\n.journey-panel__status[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  padding: 0.35rem 0.65rem;\n  border-radius: 999px;\n  background: #f5f5f4;\n  color: #57534e;\n  font-size: 0.68rem;\n  font-weight: 650;\n  white-space: nowrap;\n}\n.setting-row[_ngcontent-%COMP%], \n.setting-block[_ngcontent-%COMP%], \n.score-block[_ngcontent-%COMP%], \n.unavailable-note[_ngcontent-%COMP%] {\n  margin: 1.25rem 1.5rem;\n}\n.setting-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1.5rem;\n}\n.setting-row__copy[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.85rem;\n}\n.setting-row__copy[_ngcontent-%COMP%]    > mat-icon[_ngcontent-%COMP%] {\n  margin-top: 0.1rem;\n  color: #78716c;\n}\n.setting-row__copy[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], \n.setting-block__copy[_ngcontent-%COMP%], \n.score-block__header[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], \n.unavailable-note[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.2rem;\n}\n.setting-row__copy[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.setting-block__copy[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.score-block__header[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.unavailable-note[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #292524;\n  font-size: 0.84rem;\n  font-weight: 650;\n}\n.setting-row__copy[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.setting-block__copy[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.score-block__header[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.unavailable-note[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #78716c;\n  font-size: 0.72rem;\n  line-height: 1.45;\n}\n.setting-block[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) minmax(12rem, 15rem);\n  align-items: center;\n  gap: 1.5rem;\n  padding-top: 1.25rem;\n  border-top: 1px solid #f5f5f4;\n  transition: opacity 160ms ease;\n}\n.setting-block[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.setting-block--disabled[_ngcontent-%COMP%] {\n  opacity: 0.48;\n}\n.score-block[_ngcontent-%COMP%] {\n  padding: 1rem 1.1rem 0.8rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 1rem;\n  background: #fafaf9;\n}\n.score-block[_ngcontent-%COMP%]   mat-slider[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 0.65rem;\n}\n.score-block__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n}\n.score-block__value[_ngcontent-%COMP%] {\n  color: #1c1917;\n  font-size: 1.6rem;\n  font-weight: 700;\n  letter-spacing: -0.04em;\n}\n.unavailable-note[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.8rem;\n  padding: 1rem 1.1rem;\n  border: 1px dashed #d6d3d1;\n  border-radius: 1rem;\n  background: #fafaf9;\n}\n.unavailable-note[_ngcontent-%COMP%]    > mat-icon[_ngcontent-%COMP%] {\n  color: #a8a29e;\n}\n.public-fields[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 0.75rem;\n  padding: 1.25rem 1.5rem 1.5rem;\n}\n.public-field[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 4.8rem;\n  flex-direction: column;\n  justify-content: center;\n  gap: 0.2rem;\n  padding: 0.7rem 0.9rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 0.9rem;\n  background: #fafaf9;\n  transition:\n    border-color 160ms ease,\n    background-color 160ms ease,\n    transform 160ms ease;\n}\n.public-field[_ngcontent-%COMP%]:not(.public-field--disabled):hover {\n  border-color: #a8a29e;\n  background: white;\n  transform: translateY(-1px);\n}\n.public-field--disabled[_ngcontent-%COMP%] {\n  border-style: dashed;\n  opacity: 0.62;\n}\n.public-field__source[_ngcontent-%COMP%] {\n  margin-left: 2rem;\n  color: #a8a29e;\n  font-size: 0.64rem;\n  font-weight: 600;\n}\n.output-options[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 0.75rem;\n  width: auto;\n  margin: 1.25rem 1.5rem;\n  border: 0;\n}\n.output-options[_ngcontent-%COMP%]     .mat-button-toggle {\n  border: 1px solid #e7e5e4;\n  border-radius: 1rem;\n  background: #fafaf9;\n}\n.output-options[_ngcontent-%COMP%]     .mat-button-toggle-checked {\n  border-color: #292524;\n  background: #f5f5f4;\n  box-shadow: inset 0 0 0 1px #292524;\n}\n.output-options[_ngcontent-%COMP%]     .mat-button-toggle-label-content {\n  width: 100%;\n  padding: 1rem 1.1rem;\n  line-height: normal;\n  white-space: normal;\n}\n.output-option[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.8rem;\n  text-align: left;\n}\n.output-option[_ngcontent-%COMP%]    > mat-icon[_ngcontent-%COMP%] {\n  color: #57534e;\n}\n.output-option[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.3rem;\n}\n.output-option[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #292524;\n  font-size: 0.84rem;\n  font-weight: 650;\n}\n.output-option[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #78716c;\n  font-size: 0.68rem;\n  line-height: 1.4;\n}\n.journey-complete[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  margin: 0 1.5rem 1.5rem;\n  padding: 0.8rem 1rem;\n  border-radius: 0.8rem;\n  background: #f0fdf4;\n  color: #166534;\n  font-size: 0.72rem;\n  font-weight: 600;\n}\n.journey-complete[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 1.1rem;\n  height: 1.1rem;\n  font-size: 1.1rem;\n}\n.dark[_nghost-%COMP%]   .ha-hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .ha-hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .section-heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .section-heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .fact-items[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .fact-items[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .ha-hero__choice[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .ha-hero__choice[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .ha-hero__choice[_ngcontent-%COMP%]   em[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .ha-hero__choice[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  color: #f8fafc;\n}\n.dark[_nghost-%COMP%]   .ha-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .ha-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .ha-hero__eyebrow[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .ha-hero__eyebrow[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .section-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .section-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .fact-items[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .fact-items[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .ha-hero__choice[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .ha-hero__choice[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .ha-hero__choice[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .ha-hero__choice[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .ha-decision[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .ha-decision[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .ha-facts[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .ha-facts[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .fact-items[_ngcontent-%COMP%]   article[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .fact-items[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  border-color: #334155;\n  background: #0f172a;\n}\n.dark[_nghost-%COMP%]   .ha-decision[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .ha-decision[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .ha-facts[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .ha-facts[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .ha-hero__choice[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .ha-hero__choice[_ngcontent-%COMP%] {\n  background: #1e293b;\n}\n.dark[_nghost-%COMP%]   .ha-record[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .ha-record[_ngcontent-%COMP%] {\n  background: #1e293b;\n}\n.dark[_nghost-%COMP%]   .section-heading[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .section-heading[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  background: #cbd5e1;\n  color: #0f172a;\n}\n.dark[_nghost-%COMP%]   .ha-explainer[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .ha-explainer[_ngcontent-%COMP%] {\n  background: #0f172a;\n}\n.dark[_nghost-%COMP%]   .section-heading--light[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .section-heading--light[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  background: #e2e8f0;\n  color: #0f172a;\n}\n.dark[_nghost-%COMP%]   .section-heading--light[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .section-heading--light[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .ha-path[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .ha-path[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #f8fafc;\n}\n.dark[_nghost-%COMP%]   .ha-flow[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .ha-flow[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .ha-path__result[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .ha-path__result[_ngcontent-%COMP%] {\n  border-color: #475569;\n  background: #1e293b;\n}\n.dark[_nghost-%COMP%]   .ha-flow__result[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .ha-flow__result[_ngcontent-%COMP%] {\n  background: #e2e8f0;\n}\n.dark[_nghost-%COMP%]   .ha-flow__result[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .ha-flow__result[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .ha-flow__result[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .ha-flow__result[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #0f172a;\n}\n.dark[_nghost-%COMP%]   .ha-path[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .ha-path[_ngcontent-%COMP%] {\n  border-top-color: #475569;\n}\n.dark[_nghost-%COMP%]   .fact-items__icon--private[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .fact-items__icon--private[_ngcontent-%COMP%] {\n  background: rgba(244, 63, 94, 0.14);\n  color: #fda4af;\n}\n.dark[_nghost-%COMP%]   .fact-items__icon--public[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .fact-items__icon--public[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.16);\n  color: #93c5fd;\n}\n.dark[_nghost-%COMP%]   .fact-items__icon--active[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .fact-items__icon--active[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.14);\n  color: #6ee7b7;\n}\n.dark[_nghost-%COMP%]   .journey-intro[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .journey-intro[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .journey-panel[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .journey-panel[_ngcontent-%COMP%] {\n  border-color: #374151;\n  background: #111827;\n}\n.dark[_nghost-%COMP%]   .journey-intro[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .journey-intro[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .journey-panel__header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .journey-panel__header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .setting-row__copy[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .setting-row__copy[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .setting-block__copy[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .setting-block__copy[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .score-block__header[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .score-block__header[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .unavailable-note[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .unavailable-note[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .score-block__value[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .score-block__value[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .output-option[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .output-option[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #f9fafb;\n}\n.dark[_nghost-%COMP%]   .journey-intro[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .journey-intro[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .journey-panel__header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .journey-panel__header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .setting-row__copy[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .setting-row__copy[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .setting-block__copy[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .setting-block__copy[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .score-block__header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .score-block__header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .unavailable-note[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .unavailable-note[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .output-option[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .output-option[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #9ca3af;\n}\n.dark[_nghost-%COMP%]   .journey-stage__marker[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .journey-stage__marker[_ngcontent-%COMP%] {\n  border-color: #1e293b;\n  background: #f3f4f6;\n  color: #111827;\n}\n.dark[_nghost-%COMP%]   .journey-timeline[_ngcontent-%COMP%]::before, .dark   [_nghost-%COMP%]   .journey-timeline[_ngcontent-%COMP%]::before {\n  background: linear-gradient(#f3f4f6, #374151);\n}\n.dark[_nghost-%COMP%]   .journey-panel__header[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .journey-panel__header[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .setting-block[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .setting-block[_ngcontent-%COMP%] {\n  border-color: #1f2937;\n}\n.dark[_nghost-%COMP%]   .journey-panel__status[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .journey-panel__status[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .score-block[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .score-block[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .unavailable-note[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .unavailable-note[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .public-field[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .public-field[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .output-options[_ngcontent-%COMP%]     .mat-button-toggle, .dark   [_nghost-%COMP%]   .output-options[_ngcontent-%COMP%]     .mat-button-toggle {\n  border-color: #374151;\n  background: #1f2937;\n  color: #d1d5db;\n}\n.dark[_nghost-%COMP%]   .output-options[_ngcontent-%COMP%]     .mat-button-toggle-checked, .dark   [_nghost-%COMP%]   .output-options[_ngcontent-%COMP%]     .mat-button-toggle-checked {\n  border-color: #d1d5db;\n  background: #374151;\n  box-shadow: inset 0 0 0 1px #d1d5db;\n}\n.dark[_nghost-%COMP%]   .journey-complete[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .journey-complete[_ngcontent-%COMP%] {\n  background: rgba(20, 83, 45, 0.35);\n  color: #bbf7d0;\n}\n@media (max-width: 980px) {\n  .ha-decision[_ngcontent-%COMP%], \n   .fact-items[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 720px) {\n  .ha-hero[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n  .ha-hero__choice[_ngcontent-%COMP%] {\n    align-items: flex-start;\n  }\n  .ha-record[_ngcontent-%COMP%], \n   .ha-explainer[_ngcontent-%COMP%], \n   .ha-facts[_ngcontent-%COMP%] {\n    padding: 1.25rem;\n  }\n  .journey-intro[_ngcontent-%COMP%] {\n    margin-bottom: 1.5rem;\n  }\n  .journey-timeline[_ngcontent-%COMP%]::before {\n    display: none;\n  }\n  .journey-stage[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .journey-stage__marker[_ngcontent-%COMP%] {\n    margin: 0 0 -0.7rem 1rem;\n  }\n  .journey-panel__header[_ngcontent-%COMP%], \n   .setting-row[_ngcontent-%COMP%] {\n    align-items: flex-start;\n  }\n  .journey-panel__header[_ngcontent-%COMP%] {\n    padding-top: 1.7rem;\n  }\n  .setting-block[_ngcontent-%COMP%], \n   .public-fields[_ngcontent-%COMP%], \n   .output-options[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .setting-row[_ngcontent-%COMP%] {\n    gap: 1rem;\n  }\n}\n/*# sourceMappingURL=human-authn-step.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HumanAuthnModeStepComponent, [{
    type: Component,
    args: [{ selector: "human-authn-mode-step", standalone: true, imports: [
      CommonModule,
      ReactiveFormsModule,
      MatButtonModule,
      MatButtonToggleModule,
      MatCheckboxModule,
      MatFormFieldModule,
      MatIconModule,
      MatInputModule,
      MatSelectModule,
      MatSlideToggleModule,
      MatSliderModule,
      TranslocoModule
    ], template: `<ng-container *transloco="let t">\r
    <div class="ha-screen" [formGroup]="form">\r
        <header class="ha-hero">\r
            <div>\r
                <span class="ha-hero__eyebrow">{{ t('humanAuthnProjects.setup.humanAuthn.eyebrow') }}</span>\r
                <h2>{{ t('humanAuthnProjects.setup.humanAuthn.journeyTitle') }}</h2>\r
                <p>{{ t('humanAuthnProjects.setup.humanAuthn.privacy') }}</p>\r
            </div>\r
            <div class="ha-hero__choice">\r
                <span>{{ t('humanAuthnProjects.setup.humanAuthn.currentChoice') }}</span>\r
                <strong>\r
                    {{\r
                        t(\r
                            requireLiveness\r
                                ? 'humanAuthnProjects.setup.humanAuthn.accessActive'\r
                                : 'humanAuthnProjects.setup.humanAuthn.accessStandard'\r
                        )\r
                    }}\r
                </strong>\r
                <em>\r
                    {{\r
                        t(\r
                            humanAuthnGroup.get('outputFormat')?.value === 'qrCode'\r
                                ? 'humanAuthnProjects.setup.humanAuthn.outputQr'\r
                                : 'humanAuthnProjects.setup.humanAuthn.outputString'\r
                        )\r
                    }}\r
                </em>\r
            </div>\r
        </header>\r
\r
        <div class="ha-decision">\r
            <section class="ha-record" formGroupName="projectFlow">\r
                <div class="section-heading">\r
                    <span>01</span>\r
                    <div>\r
                        <h3>{{ t('humanAuthnProjects.setup.humanAuthn.recordTitle') }}</h3>\r
                        <p>{{ t('humanAuthnProjects.setup.humanAuthn.recordHelp') }}</p>\r
                    </div>\r
                </div>\r
                <ng-container formGroupName="humanAuthn">\r
                <ol class="journey-timeline">\r
                    <li class="journey-stage">\r
                        <span class="journey-stage__marker" aria-hidden="true">1</span>\r
                        <article class="journey-panel">\r
                            <header class="journey-panel__header">\r
                                <div>\r
                                    <span class="journey-panel__eyebrow">{{ t('humanAuthnProjects.setup.humanAuthn.stageLabel', { number: 1 }) }}</span>\r
                                    <h3>{{ t('humanAuthnProjects.setup.humanAuthn.verifyStageTitle') }}</h3>\r
                                    <p>{{ t('humanAuthnProjects.setup.humanAuthn.verifyStageHelp') }}</p>\r
                                </div>\r
                                <span class="journey-panel__status">\r
                                    {{\r
                                        t(\r
                                            livenessEnabled\r
                                                ? 'humanAuthnProjects.setup.humanAuthn.verificationActive'\r
                                                : 'humanAuthnProjects.setup.humanAuthn.verificationStandard'\r
                                        )\r
                                    }}\r
                                </span>\r
                            </header>\r
\r
                            <div class="setting-row">\r
                                <div class="setting-row__copy">\r
                                    <mat-icon>camera_front</mat-icon>\r
                                    <div>\r
                                        <strong>{{ t('humanAuthnProjects.setup.humanAuthn.livenessAtCreation') }}</strong>\r
                                        <span>{{ t('humanAuthnProjects.setup.humanAuthn.livenessAtCreationHelp') }}</span>\r
                                    </div>\r
                                </div>\r
                                <mat-slide-toggle formControlName="livenessAtCreation"></mat-slide-toggle>\r
                            </div>\r
\r
                            <div class="setting-block" [class.setting-block--disabled]="!livenessEnabled">\r
                                <div class="setting-block__copy">\r
                                    <strong>{{ t('humanAuthnProjects.setup.humanAuthn.toleranceTitle') }}</strong>\r
                                    <span>{{ t('humanAuthnProjects.setup.humanAuthn.toleranceHelp') }}</span>\r
                                </div>\r
                                <mat-form-field appearance="outline" subscriptSizing="dynamic">\r
                                    <mat-label>{{ t('humanAuthnProjects.setup.humanAuthn.toleranceTitle') }}</mat-label>\r
                                    <mat-select formControlName="tolerance" [disabled]="!livenessEnabled">\r
                                        @for (value of tolerances; track value) {\r
                                            <mat-option [value]="value">\r
                                                {{ t('humanAuthnProjects.setup.humanAuthn.tolerance.' + value) }}\r
                                            </mat-option>\r
                                        }\r
                                    </mat-select>\r
                                </mat-form-field>\r
                            </div>\r
\r
                            @if (documentEnabled) {\r
                                <div class="score-block">\r
                                    <div class="score-block__header">\r
                                        <div>\r
                                            <strong>{{ t('humanAuthnProjects.setup.humanAuthn.compareTitle') }}</strong>\r
                                            <span>{{ t('humanAuthnProjects.setup.humanAuthn.compareHelp') }}</span>\r
                                        </div>\r
                                        <span class="score-block__value">{{ compareMinScoreDisplayValue }}</span>\r
                                    </div>\r
                                    <mat-slider min="0.7" max="0.95" step="0.01" discrete>\r
                                        <input matSliderThumb formControlName="compareMinScore" />\r
                                    </mat-slider>\r
                                </div>\r
                            } @else {\r
                                <div class="unavailable-note">\r
                                    <mat-icon>description</mat-icon>\r
                                    <div>\r
                                        <strong>{{ t('humanAuthnProjects.setup.humanAuthn.compareTitle') }}</strong>\r
                                        <span>{{ t('humanAuthnProjects.setup.humanAuthn.compareUnavailable') }}</span>\r
                                    </div>\r
                                </div>\r
                            }\r
                        </article>\r
                    </li>\r
\r
                    <li class="journey-stage">\r
                        <span class="journey-stage__marker" aria-hidden="true">2</span>\r
                        <article class="journey-panel">\r
                            <header class="journey-panel__header">\r
                                <div>\r
                                    <span class="journey-panel__eyebrow">{{ t('humanAuthnProjects.setup.humanAuthn.stageLabel', { number: 2 }) }}</span>\r
                                    <h3>{{ t('humanAuthnProjects.setup.humanAuthn.publicDataTitle') }}</h3>\r
                                    <p>{{ t('humanAuthnProjects.setup.humanAuthn.publicDataHelp') }}</p>\r
                                </div>\r
                                <span class="journey-panel__status">\r
                                    {{\r
                                        t('humanAuthnProjects.setup.humanAuthn.publicDataCount', {\r
                                            selected: selectedPublicDataCount,\r
                                            total: publicDataOptions.length,\r
                                        })\r
                                    }}\r
                                </span>\r
                            </header>\r
\r
                            <div class="public-fields">\r
                                @for (option of publicDataOptions; track option.key) {\r
                                    <label class="public-field" [class.public-field--disabled]="!option.available">\r
                                        <mat-checkbox\r
                                            [checked]="isPublicKeySelected(option.key)"\r
                                            [disabled]="!option.available"\r
                                            (change)="togglePublicKey(option.key, $event.checked)"\r
                                        >\r
                                            {{ t('humanAuthnProjects.setup.humanAuthn.publicData.' + option.key) }}\r
                                        </mat-checkbox>\r
                                        <span class="public-field__source">\r
                                            {{\r
                                                t(\r
                                                    option.available\r
                                                        ? 'humanAuthnProjects.setup.humanAuthn.source.' + option.source\r
                                                        : 'humanAuthnProjects.setup.humanAuthn.enableSource.' + option.source\r
                                                )\r
                                            }}\r
                                        </span>\r
                                    </label>\r
                                }\r
                            </div>\r
                        </article>\r
                    </li>\r
\r
                    <li class="journey-stage">\r
                        <span class="journey-stage__marker" aria-hidden="true">3</span>\r
                        <article class="journey-panel">\r
                            <header class="journey-panel__header">\r
                                <div>\r
                                    <span class="journey-panel__eyebrow">{{ t('humanAuthnProjects.setup.humanAuthn.stageLabel', { number: 3 }) }}</span>\r
                                    <h3>{{ t('humanAuthnProjects.setup.humanAuthn.protectStageTitle') }}</h3>\r
                                    <p>{{ t('humanAuthnProjects.setup.humanAuthn.protectStageHelp') }}</p>\r
                                </div>\r
                                <span class="journey-panel__status">\r
                                    {{\r
                                        t(\r
                                            requireLiveness\r
                                                ? 'humanAuthnProjects.setup.humanAuthn.accessActive'\r
                                                : 'humanAuthnProjects.setup.humanAuthn.accessStandard'\r
                                        )\r
                                    }}\r
                                </span>\r
                            </header>\r
\r
                            <div class="setting-row">\r
                                <div class="setting-row__copy">\r
                                    <mat-icon>face_retouching_natural</mat-icon>\r
                                    <div>\r
                                        <strong>{{ t('humanAuthnProjects.setup.humanAuthn.requireLiveness') }}</strong>\r
                                        <span>{{ t('humanAuthnProjects.setup.humanAuthn.requireLivenessHelp') }}</span>\r
                                    </div>\r
                                </div>\r
                                <mat-slide-toggle [checked]="requireLiveness" (change)="onRequireLivenessChange($event)"></mat-slide-toggle>\r
                            </div>\r
\r
                            <div class="setting-block">\r
                                <div class="setting-block__copy">\r
                                    <strong>{{ t('humanAuthnProjects.setup.humanAuthn.verifierKeyTitle') }}</strong>\r
                                    <span>{{ t('humanAuthnProjects.setup.humanAuthn.verifierKeyHelp') }}</span>\r
                                </div>\r
                                <mat-form-field appearance="outline" subscriptSizing="dynamic">\r
                                    <mat-label>{{ t('humanAuthnProjects.setup.humanAuthn.verifierKeyLabel') }}</mat-label>\r
                                    <input\r
                                        matInput\r
                                        formControlName="verifierKey"\r
                                        [type]="hideVerifierKey ? 'password' : 'text'"\r
                                        autocomplete="new-password"\r
                                        maxlength="128"\r
                                    />\r
                                    <button\r
                                        mat-icon-button\r
                                        matSuffix\r
                                        type="button"\r
                                        (click)="hideVerifierKey = !hideVerifierKey"\r
                                        [attr.aria-label]="t('humanAuthnProjects.setup.humanAuthn.verifierKeyToggle')"\r
                                    >\r
                                        <mat-icon>{{ hideVerifierKey ? 'visibility' : 'visibility_off' }}</mat-icon>\r
                                    </button>\r
                                </mat-form-field>\r
                            </div>\r
                        </article>\r
                    </li>\r
\r
                    <li class="journey-stage">\r
                        <span class="journey-stage__marker" aria-hidden="true">4</span>\r
                        <article class="journey-panel">\r
                            <header class="journey-panel__header">\r
                                <div>\r
                                    <span class="journey-panel__eyebrow">{{ t('humanAuthnProjects.setup.humanAuthn.stageLabel', { number: 4 }) }}</span>\r
                                    <h3>{{ t('humanAuthnProjects.setup.humanAuthn.outputFormatTitle') }}</h3>\r
                                    <p>{{ t('humanAuthnProjects.setup.humanAuthn.outputFormatHelp') }}</p>\r
                                </div>\r
                                <span class="journey-panel__status">\r
                                    {{\r
                                        t(\r
                                            humanAuthnGroup.get('outputFormat')?.value === 'qrCode'\r
                                                ? 'humanAuthnProjects.setup.humanAuthn.outputQr'\r
                                                : 'humanAuthnProjects.setup.humanAuthn.outputString'\r
                                        )\r
                                    }}\r
                                </span>\r
                            </header>\r
\r
                            <mat-button-toggle-group\r
                                formControlName="outputFormat"\r
                                class="output-options"\r
                                [hideSingleSelectionIndicator]="true"\r
                                aria-label="HumanID output format"\r
                            >\r
                                <mat-button-toggle value="string">\r
                                    <span class="output-option">\r
                                        <mat-icon>data_object</mat-icon>\r
                                        <span>\r
                                            <strong>{{ t('humanAuthnProjects.setup.humanAuthn.outputString') }}</strong>\r
                                            <small>{{ t('humanAuthnProjects.setup.humanAuthn.outputStringHelp') }}</small>\r
                                        </span>\r
                                    </span>\r
                                </mat-button-toggle>\r
                                <mat-button-toggle value="qrCode">\r
                                    <span class="output-option">\r
                                        <mat-icon>qr_code_2</mat-icon>\r
                                        <span>\r
                                            <strong>{{ t('humanAuthnProjects.setup.humanAuthn.outputQr') }}</strong>\r
                                            <small>{{ t('humanAuthnProjects.setup.humanAuthn.outputQrHelp') }}</small>\r
                                        </span>\r
                                    </span>\r
                                </mat-button-toggle>\r
                            </mat-button-toggle-group>\r
\r
                            <div class="journey-complete">\r
                                <mat-icon>check_circle</mat-icon>\r
                                <span>{{ t('humanAuthnProjects.setup.humanAuthn.readySummary') }}</span>\r
                            </div>\r
                        </article>\r
                    </li>\r
                </ol>\r
                </ng-container>\r
            </section>\r
\r
            <aside class="ha-explainer" aria-live="polite">\r
                <div class="section-heading section-heading--light">\r
                    <span>02</span>\r
                    <div>\r
                        <h3>{{ t('humanAuthnProjects.setup.humanAuthn.howTitle') }}</h3>\r
                        <p>{{ t('humanAuthnProjects.setup.humanAuthn.howHelp') }}</p>\r
                    </div>\r
                </div>\r
\r
                <ol class="ha-flow">\r
                    <li>\r
                        <mat-icon>fingerprint</mat-icon>\r
                        <span>{{ t('humanAuthnProjects.setup.humanAuthn.flowChecked') }}</span>\r
                    </li>\r
                    <li>\r
                        <mat-icon>visibility</mat-icon>\r
                        <span>\r
                            {{ t('humanAuthnProjects.setup.humanAuthn.flowPublic') }}\r
                            <small>\r
                                {{\r
                                    t('humanAuthnProjects.setup.humanAuthn.publicDataCount', {\r
                                        selected: selectedPublicDataCount,\r
                                        total: publicDataOptions.length,\r
                                    })\r
                                }}\r
                            </small>\r
                        </span>\r
                    </li>\r
                    <li>\r
                        <mat-icon>{{ requireLiveness ? 'face' : 'lock' }}</mat-icon>\r
                        <span>\r
                            {{\r
                                t(\r
                                    requireLiveness\r
                                        ? 'humanAuthnProjects.setup.humanAuthn.accessActive'\r
                                        : 'humanAuthnProjects.setup.humanAuthn.accessStandard'\r
                                )\r
                            }}\r
                        </span>\r
                    </li>\r
                    <li class="ha-flow__result">\r
                        <mat-icon>{{ humanAuthnGroup.get('outputFormat')?.value === 'qrCode' ? 'qr_code_2' : 'data_object' }}</mat-icon>\r
                        <span>\r
                            {{\r
                                t(\r
                                    humanAuthnGroup.get('outputFormat')?.value === 'qrCode'\r
                                        ? 'humanAuthnProjects.setup.humanAuthn.outputQr'\r
                                        : 'humanAuthnProjects.setup.humanAuthn.outputString'\r
                                )\r
                            }}\r
                        </span>\r
                    </li>\r
                </ol>\r
\r
                <div class="ha-path">\r
                    <span class="ha-path__label">{{ t('humanAuthnProjects.setup.humanAuthn.selectedPath') }}</span>\r
                    <h4>\r
                        {{\r
                            t(\r
                                requireLiveness\r
                                    ? 'humanAuthnProjects.setup.humanAuthn.activeTitle'\r
                                    : 'humanAuthnProjects.setup.humanAuthn.standardTitle'\r
                            )\r
                        }}\r
                    </h4>\r
                    <p>\r
                        {{\r
                            t(\r
                                requireLiveness\r
                                    ? 'humanAuthnProjects.setup.humanAuthn.activeBody'\r
                                    : 'humanAuthnProjects.setup.humanAuthn.standardBody'\r
                            )\r
                        }}\r
                    </p>\r
                    <div class="ha-path__result">\r
                        <mat-icon>{{ documentEnabled ? 'face' : 'description' }}</mat-icon>\r
                        <span>\r
                            {{\r
                                t(\r
                                    documentEnabled\r
                                        ? 'humanAuthnProjects.setup.humanAuthn.compareOn'\r
                                        : 'humanAuthnProjects.setup.humanAuthn.compareOff'\r
                                )\r
                            }}\r
                        </span>\r
                    </div>\r
                </div>\r
            </aside>\r
        </div>\r
\r
        <section class="ha-facts">\r
            <div class="section-heading">\r
                <span>03</span>\r
                <div>\r
                    <h3>{{ t('humanAuthnProjects.setup.humanAuthn.factsTitle') }}</h3>\r
                    <p>{{ t('humanAuthnProjects.setup.humanAuthn.factsHelp') }}</p>\r
                </div>\r
            </div>\r
            <div class="fact-items">\r
                <article>\r
                    <span class="fact-items__icon fact-items__icon--private"><mat-icon>face_retouching_off</mat-icon></span>\r
                    <div>\r
                        <strong>{{ t('humanAuthnProjects.setup.humanAuthn.factTemplateTitle') }}</strong>\r
                        <p>{{ t('humanAuthnProjects.setup.humanAuthn.factTemplateBody') }}</p>\r
                    </div>\r
                </article>\r
                <article>\r
                    <span class="fact-items__icon fact-items__icon--public"><mat-icon>visibility</mat-icon></span>\r
                    <div>\r
                        <strong>{{ t('humanAuthnProjects.setup.humanAuthn.factPublicTitle') }}</strong>\r
                        <p>{{ t('humanAuthnProjects.setup.humanAuthn.factPublicBody') }}</p>\r
                    </div>\r
                </article>\r
                <article>\r
                    <span class="fact-items__icon fact-items__icon--active"><mat-icon>verified_user</mat-icon></span>\r
                    <div>\r
                        <strong>{{ t('humanAuthnProjects.setup.humanAuthn.factActiveTitle') }}</strong>\r
                        <p>{{ t('humanAuthnProjects.setup.humanAuthn.factActiveBody') }}</p>\r
                    </div>\r
                </article>\r
            </div>\r
        </section>\r
    </div>\r
</ng-container>\r
`, styles: ['/* src/app/modules/human-authn/projects/setup/steps/human-authn-step.component.scss */\n:host {\n  display: block;\n}\n.ha-screen {\n  margin-inline: auto;\n  width: min(100%, 76rem);\n}\n.ha-hero {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 2rem;\n  margin-bottom: 2rem;\n  padding: 0.5rem 0.25rem;\n}\n.ha-hero h2 {\n  max-width: 42rem;\n  margin: 0.35rem 0 0;\n  color: #1c1917;\n  font-size: clamp(1.75rem, 3vw, 2.55rem);\n  font-weight: 680;\n  letter-spacing: -0.045em;\n  line-height: 1.05;\n}\n.ha-hero p {\n  max-width: 42rem;\n  margin: 0.75rem 0 0;\n  color: #78716c;\n  font-size: 0.88rem;\n  line-height: 1.6;\n}\n.ha-hero__eyebrow {\n  color: #78716c;\n  font-size: 0.65rem;\n  font-weight: 750;\n  letter-spacing: 0.16em;\n  text-transform: uppercase;\n}\n.ha-hero__choice {\n  display: flex;\n  flex: 0 0 auto;\n  flex-direction: column;\n  align-items: flex-end;\n  max-width: 16rem;\n  padding: 0.75rem 1rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 0.9rem;\n  background: white;\n}\n.ha-hero__choice span {\n  color: #a8a29e;\n  font-size: 0.62rem;\n  font-weight: 650;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n.ha-hero__choice strong,\n.ha-hero__choice em {\n  color: #292524;\n  font-style: normal;\n}\n.ha-hero__choice strong {\n  margin-top: 0.15rem;\n  font-size: 0.82rem;\n}\n.ha-hero__choice em {\n  margin-top: 0.1rem;\n  font-size: 0.72rem;\n}\n.ha-decision {\n  display: grid;\n  grid-template-columns: minmax(0, 1.15fr) minmax(20rem, 0.85fr);\n  overflow: hidden;\n  border: 1px solid #d6d3d1;\n  border-radius: 1.5rem;\n  background: white;\n  box-shadow: 0 1px 2px rgba(28, 25, 23, 0.03), 0 18px 45px rgba(28, 25, 23, 0.05);\n}\n.ha-record,\n.ha-explainer,\n.ha-facts {\n  padding: 1.75rem;\n}\n.ha-explainer {\n  background: #1c1917;\n  color: white;\n}\n.section-heading {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.8rem;\n  margin-bottom: 1.25rem;\n}\n.section-heading > span {\n  display: grid;\n  flex: 0 0 1.8rem;\n  width: 1.8rem;\n  height: 1.8rem;\n  place-items: center;\n  border-radius: 999px;\n  background: #292524;\n  color: white;\n  font-size: 0.62rem;\n  font-weight: 750;\n}\n.section-heading h3 {\n  margin: 0;\n  color: #292524;\n  font-size: 0.95rem;\n  font-weight: 680;\n}\n.section-heading p {\n  margin: 0.25rem 0 0;\n  color: #78716c;\n  font-size: 0.72rem;\n  line-height: 1.45;\n}\n.section-heading--light > span {\n  background: white;\n  color: #1c1917;\n}\n.section-heading--light h3 {\n  color: white;\n}\n.section-heading--light p {\n  color: #a8a29e;\n}\n.ha-flow {\n  display: flex;\n  flex-direction: column;\n  gap: 0.55rem;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.ha-flow li {\n  display: flex;\n  align-items: center;\n  gap: 0.7rem;\n  padding: 0.7rem 0.8rem;\n  border: 1px solid #44403c;\n  border-radius: 0.8rem;\n  background: #292524;\n}\n.ha-flow li mat-icon {\n  width: 1.15rem;\n  height: 1.15rem;\n  color: #e7e5e4;\n  font-size: 1.15rem;\n}\n.ha-flow li span {\n  display: flex;\n  flex-direction: column;\n  color: #f5f5f4;\n  font-size: 0.75rem;\n  font-weight: 650;\n}\n.ha-flow li span small {\n  color: #a8a29e;\n  font-size: 0.65rem;\n  font-weight: 550;\n}\n.ha-flow__result {\n  border-color: #e7e5e4;\n  background: white;\n}\n.ha-flow__result mat-icon,\n.ha-flow__result span {\n  color: #1c1917;\n}\n.ha-path {\n  margin-top: 1.25rem;\n  padding-top: 1.15rem;\n  border-top: 1px solid #44403c;\n}\n.ha-path h4 {\n  margin: 0.35rem 0 0;\n  font-size: 1rem;\n  font-weight: 680;\n}\n.ha-path > p {\n  margin: 0.4rem 0 0;\n  color: #d6d3d1;\n  font-size: 0.75rem;\n  line-height: 1.5;\n}\n.ha-path__label {\n  color: #a8a29e;\n  font-size: 0.62rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n.ha-path__result {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.55rem;\n  margin-top: 0.9rem;\n  padding: 0.75rem 0.85rem;\n  border: 1px solid #44403c;\n  border-radius: 0.8rem;\n  background: #292524;\n  color: #f5f5f4;\n  font-size: 0.72rem;\n  line-height: 1.45;\n}\n.ha-path__result mat-icon {\n  width: 1rem;\n  height: 1rem;\n  font-size: 1rem;\n}\n.ha-facts {\n  margin-top: 1.25rem;\n  border: 1px solid #d6d3d1;\n  border-radius: 1.5rem;\n  background: white;\n}\n.fact-items {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 0.8rem;\n}\n.fact-items article {\n  display: flex;\n  gap: 0.75rem;\n  padding: 0.9rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 0.9rem;\n  background: #fafaf9;\n}\n.fact-items article strong {\n  color: #292524;\n  font-size: 0.78rem;\n}\n.fact-items article p {\n  margin: 0.25rem 0 0;\n  color: #78716c;\n  font-size: 0.68rem;\n  line-height: 1.45;\n}\n.fact-items__icon {\n  display: grid;\n  flex: 0 0 2rem;\n  width: 2rem;\n  height: 2rem;\n  place-items: center;\n  border-radius: 0.6rem;\n}\n.fact-items__icon mat-icon {\n  width: 1rem;\n  height: 1rem;\n  font-size: 1rem;\n}\n.fact-items__icon--private {\n  background: #fef2f2;\n  color: #b91c1c;\n}\n.fact-items__icon--public {\n  background: #eff6ff;\n  color: #1d4ed8;\n}\n.fact-items__icon--active {\n  background: #ecfdf5;\n  color: #047857;\n}\n.journey-intro {\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n  margin-bottom: 2rem;\n  padding: 1.25rem 1.5rem;\n  border: 1px solid rgba(214, 211, 209, 0.8);\n  border-radius: 1.25rem;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.96),\n      rgba(245, 245, 244, 0.72));\n}\n.journey-intro h2 {\n  margin: 0;\n  color: #1c1917;\n  font-size: 1.05rem;\n  font-weight: 650;\n  letter-spacing: -0.015em;\n}\n.journey-intro p {\n  max-width: 46rem;\n  margin: 0.3rem 0 0;\n  color: #78716c;\n  font-size: 0.78rem;\n  line-height: 1.55;\n}\n.journey-intro__icon {\n  display: grid;\n  flex: 0 0 2.5rem;\n  width: 2.5rem;\n  height: 2.5rem;\n  place-items: center;\n  border-radius: 0.8rem;\n  background: #1c1917;\n  color: white;\n}\n.journey-intro__icon mat-icon {\n  width: 1.25rem;\n  height: 1.25rem;\n  font-size: 1.25rem;\n}\n.journey-timeline {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.journey-timeline::before {\n  position: absolute;\n  top: 1.15rem;\n  bottom: 1.15rem;\n  left: 1.15rem;\n  width: 1px;\n  background: linear-gradient(#292524, #d6d3d1);\n  content: "";\n}\n.journey-stage {\n  position: relative;\n  display: grid;\n  grid-template-columns: 2.3rem minmax(0, 1fr);\n  gap: 1rem;\n}\n.journey-stage__marker {\n  z-index: 1;\n  display: grid;\n  width: 2.3rem;\n  height: 2.3rem;\n  place-items: center;\n  border: 4px solid white;\n  border-radius: 999px;\n  background: #292524;\n  color: white;\n  font-size: 0.75rem;\n  font-weight: 700;\n}\n.journey-panel {\n  overflow: hidden;\n  border: 1px solid rgba(214, 211, 209, 0.9);\n  border-radius: 1.25rem;\n  background: white;\n  box-shadow: 0 1px 2px rgba(28, 25, 23, 0.03), 0 12px 30px rgba(28, 25, 23, 0.035);\n}\n.journey-panel__header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 1rem;\n  padding: 1.4rem 1.5rem 1.25rem;\n  border-bottom: 1px solid #f5f5f4;\n}\n.journey-panel__header h3 {\n  margin: 0.15rem 0 0;\n  color: #1c1917;\n  font-size: 1.05rem;\n  font-weight: 650;\n  letter-spacing: -0.015em;\n}\n.journey-panel__header p {\n  max-width: 38rem;\n  margin: 0.35rem 0 0;\n  color: #78716c;\n  font-size: 0.76rem;\n  line-height: 1.5;\n}\n.journey-panel__eyebrow {\n  color: #a8a29e;\n  font-size: 0.64rem;\n  font-weight: 700;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n}\n.journey-panel__status {\n  flex: 0 0 auto;\n  padding: 0.35rem 0.65rem;\n  border-radius: 999px;\n  background: #f5f5f4;\n  color: #57534e;\n  font-size: 0.68rem;\n  font-weight: 650;\n  white-space: nowrap;\n}\n.setting-row,\n.setting-block,\n.score-block,\n.unavailable-note {\n  margin: 1.25rem 1.5rem;\n}\n.setting-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1.5rem;\n}\n.setting-row__copy {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.85rem;\n}\n.setting-row__copy > mat-icon {\n  margin-top: 0.1rem;\n  color: #78716c;\n}\n.setting-row__copy div,\n.setting-block__copy,\n.score-block__header div,\n.unavailable-note div {\n  display: flex;\n  flex-direction: column;\n  gap: 0.2rem;\n}\n.setting-row__copy div strong,\n.setting-block__copy strong,\n.score-block__header div strong,\n.unavailable-note div strong {\n  color: #292524;\n  font-size: 0.84rem;\n  font-weight: 650;\n}\n.setting-row__copy div span,\n.setting-block__copy span,\n.score-block__header div span,\n.unavailable-note div span {\n  color: #78716c;\n  font-size: 0.72rem;\n  line-height: 1.45;\n}\n.setting-block {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) minmax(12rem, 15rem);\n  align-items: center;\n  gap: 1.5rem;\n  padding-top: 1.25rem;\n  border-top: 1px solid #f5f5f4;\n  transition: opacity 160ms ease;\n}\n.setting-block mat-form-field {\n  width: 100%;\n}\n.setting-block--disabled {\n  opacity: 0.48;\n}\n.score-block {\n  padding: 1rem 1.1rem 0.8rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 1rem;\n  background: #fafaf9;\n}\n.score-block mat-slider {\n  width: 100%;\n  margin-top: 0.65rem;\n}\n.score-block__header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n}\n.score-block__value {\n  color: #1c1917;\n  font-size: 1.6rem;\n  font-weight: 700;\n  letter-spacing: -0.04em;\n}\n.unavailable-note {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.8rem;\n  padding: 1rem 1.1rem;\n  border: 1px dashed #d6d3d1;\n  border-radius: 1rem;\n  background: #fafaf9;\n}\n.unavailable-note > mat-icon {\n  color: #a8a29e;\n}\n.public-fields {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 0.75rem;\n  padding: 1.25rem 1.5rem 1.5rem;\n}\n.public-field {\n  display: flex;\n  min-height: 4.8rem;\n  flex-direction: column;\n  justify-content: center;\n  gap: 0.2rem;\n  padding: 0.7rem 0.9rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 0.9rem;\n  background: #fafaf9;\n  transition:\n    border-color 160ms ease,\n    background-color 160ms ease,\n    transform 160ms ease;\n}\n.public-field:not(.public-field--disabled):hover {\n  border-color: #a8a29e;\n  background: white;\n  transform: translateY(-1px);\n}\n.public-field--disabled {\n  border-style: dashed;\n  opacity: 0.62;\n}\n.public-field__source {\n  margin-left: 2rem;\n  color: #a8a29e;\n  font-size: 0.64rem;\n  font-weight: 600;\n}\n.output-options {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 0.75rem;\n  width: auto;\n  margin: 1.25rem 1.5rem;\n  border: 0;\n}\n.output-options ::ng-deep .mat-button-toggle {\n  border: 1px solid #e7e5e4;\n  border-radius: 1rem;\n  background: #fafaf9;\n}\n.output-options ::ng-deep .mat-button-toggle-checked {\n  border-color: #292524;\n  background: #f5f5f4;\n  box-shadow: inset 0 0 0 1px #292524;\n}\n.output-options ::ng-deep .mat-button-toggle-label-content {\n  width: 100%;\n  padding: 1rem 1.1rem;\n  line-height: normal;\n  white-space: normal;\n}\n.output-option {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.8rem;\n  text-align: left;\n}\n.output-option > mat-icon {\n  color: #57534e;\n}\n.output-option > span {\n  display: flex;\n  flex-direction: column;\n  gap: 0.3rem;\n}\n.output-option strong {\n  color: #292524;\n  font-size: 0.84rem;\n  font-weight: 650;\n}\n.output-option small {\n  color: #78716c;\n  font-size: 0.68rem;\n  line-height: 1.4;\n}\n.journey-complete {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  margin: 0 1.5rem 1.5rem;\n  padding: 0.8rem 1rem;\n  border-radius: 0.8rem;\n  background: #f0fdf4;\n  color: #166534;\n  font-size: 0.72rem;\n  font-weight: 600;\n}\n.journey-complete mat-icon {\n  width: 1.1rem;\n  height: 1.1rem;\n  font-size: 1.1rem;\n}\n:host-context(.dark) .ha-hero h2,\n:host-context(.dark) .section-heading h3,\n:host-context(.dark) .fact-items strong,\n:host-context(.dark) .ha-hero__choice strong,\n:host-context(.dark) .ha-hero__choice em {\n  color: #f8fafc;\n}\n:host-context(.dark) .ha-hero p,\n:host-context(.dark) .ha-hero__eyebrow,\n:host-context(.dark) .section-heading p,\n:host-context(.dark) .fact-items p,\n:host-context(.dark) .ha-hero__choice span {\n  color: #94a3b8;\n}\n:host-context(.dark) .ha-hero__choice,\n:host-context(.dark) .ha-decision,\n:host-context(.dark) .ha-facts,\n:host-context(.dark) .fact-items article {\n  border-color: #334155;\n  background: #0f172a;\n}\n:host-context(.dark) .ha-decision,\n:host-context(.dark) .ha-facts,\n:host-context(.dark) .ha-hero__choice {\n  background: #1e293b;\n}\n:host-context(.dark) .ha-record {\n  background: #1e293b;\n}\n:host-context(.dark) .section-heading > span {\n  background: #cbd5e1;\n  color: #0f172a;\n}\n:host-context(.dark) .ha-explainer {\n  background: #0f172a;\n}\n:host-context(.dark) .section-heading--light > span {\n  background: #e2e8f0;\n  color: #0f172a;\n}\n:host-context(.dark) .section-heading--light h3,\n:host-context(.dark) .ha-path h4 {\n  color: #f8fafc;\n}\n:host-context(.dark) .ha-flow li,\n:host-context(.dark) .ha-path__result {\n  border-color: #475569;\n  background: #1e293b;\n}\n:host-context(.dark) .ha-flow__result {\n  background: #e2e8f0;\n}\n:host-context(.dark) .ha-flow__result mat-icon,\n:host-context(.dark) .ha-flow__result span {\n  color: #0f172a;\n}\n:host-context(.dark) .ha-path {\n  border-top-color: #475569;\n}\n:host-context(.dark) .fact-items__icon--private {\n  background: rgba(244, 63, 94, 0.14);\n  color: #fda4af;\n}\n:host-context(.dark) .fact-items__icon--public {\n  background: rgba(59, 130, 246, 0.16);\n  color: #93c5fd;\n}\n:host-context(.dark) .fact-items__icon--active {\n  background: rgba(16, 185, 129, 0.14);\n  color: #6ee7b7;\n}\n:host-context(.dark) .journey-intro,\n:host-context(.dark) .journey-panel {\n  border-color: #374151;\n  background: #111827;\n}\n:host-context(.dark) .journey-intro h2,\n:host-context(.dark) .journey-panel__header h3,\n:host-context(.dark) .setting-row__copy strong,\n:host-context(.dark) .setting-block__copy strong,\n:host-context(.dark) .score-block__header strong,\n:host-context(.dark) .unavailable-note strong,\n:host-context(.dark) .score-block__value,\n:host-context(.dark) .output-option strong {\n  color: #f9fafb;\n}\n:host-context(.dark) .journey-intro p,\n:host-context(.dark) .journey-panel__header p,\n:host-context(.dark) .setting-row__copy span,\n:host-context(.dark) .setting-block__copy span,\n:host-context(.dark) .score-block__header span,\n:host-context(.dark) .unavailable-note span,\n:host-context(.dark) .output-option small {\n  color: #9ca3af;\n}\n:host-context(.dark) .journey-stage__marker {\n  border-color: #1e293b;\n  background: #f3f4f6;\n  color: #111827;\n}\n:host-context(.dark) .journey-timeline::before {\n  background: linear-gradient(#f3f4f6, #374151);\n}\n:host-context(.dark) .journey-panel__header,\n:host-context(.dark) .setting-block {\n  border-color: #1f2937;\n}\n:host-context(.dark) .journey-panel__status,\n:host-context(.dark) .score-block,\n:host-context(.dark) .unavailable-note,\n:host-context(.dark) .public-field,\n:host-context(.dark) .output-options ::ng-deep .mat-button-toggle {\n  border-color: #374151;\n  background: #1f2937;\n  color: #d1d5db;\n}\n:host-context(.dark) .output-options ::ng-deep .mat-button-toggle-checked {\n  border-color: #d1d5db;\n  background: #374151;\n  box-shadow: inset 0 0 0 1px #d1d5db;\n}\n:host-context(.dark) .journey-complete {\n  background: rgba(20, 83, 45, 0.35);\n  color: #bbf7d0;\n}\n@media (max-width: 980px) {\n  .ha-decision,\n  .fact-items {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 720px) {\n  .ha-hero {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n  .ha-hero__choice {\n    align-items: flex-start;\n  }\n  .ha-record,\n  .ha-explainer,\n  .ha-facts {\n    padding: 1.25rem;\n  }\n  .journey-intro {\n    margin-bottom: 1.5rem;\n  }\n  .journey-timeline::before {\n    display: none;\n  }\n  .journey-stage {\n    display: block;\n  }\n  .journey-stage__marker {\n    margin: 0 0 -0.7rem 1rem;\n  }\n  .journey-panel__header,\n  .setting-row {\n    align-items: flex-start;\n  }\n  .journey-panel__header {\n    padding-top: 1.7rem;\n  }\n  .setting-block,\n  .public-fields,\n  .output-options {\n    grid-template-columns: 1fr;\n  }\n  .setting-row {\n    gap: 1rem;\n  }\n}\n/*# sourceMappingURL=human-authn-step.component.css.map */\n'] }]
  }], null, { form: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HumanAuthnModeStepComponent, { className: "HumanAuthnModeStepComponent", filePath: "src/app/modules/human-authn/projects/setup/steps/human-authn-step.component.ts", lineNumber: 46 });
})();

// src/app/modules/human-authn/projects/setup/steps/storage-step.component.ts
var _c06 = (a0) => ({ provider: a0 });
var _forTrack06 = ($index, $item) => $item.value;
function HumanAuthnStorageStepComponent_ng_container_0_For_27_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r4("humanAuthnProjects.setup.storage.default"));
  }
}
function HumanAuthnStorageStepComponent_ng_container_0_For_27_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span")(1, "mat-icon");
    \u0275\u0275text(2, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const benefitKey_r5 = ctx.$implicit;
    const t_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r4(benefitKey_r5), " ");
  }
}
function HumanAuthnStorageStepComponent_ng_container_0_For_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 24);
    \u0275\u0275listener("click", function HumanAuthnStorageStepComponent_ng_container_0_For_27_Template_button_click_0_listener() {
      const option_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setProvider(option_r2.value));
    });
    \u0275\u0275elementStart(1, "span", 25)(2, "mat-icon");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "span", 26)(5, "span", 27)(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, HumanAuthnStorageStepComponent_ng_container_0_For_27_Conditional_8_Template, 2, 1, "small");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 28);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 29);
    \u0275\u0275repeaterCreate(12, HumanAuthnStorageStepComponent_ng_container_0_For_27_For_13_Template, 4, 1, "span", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "mat-icon", 30);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const option_r2 = ctx.$implicit;
    const t_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("provider-option--selected", ctx_r2.provider === option_r2.value);
    \u0275\u0275attribute("aria-checked", ctx_r2.provider === option_r2.value)("aria-label", t_r4("humanAuthnProjects.setup.storage.selectProvider", \u0275\u0275pureFunction1(9, _c06, t_r4(option_r2.titleKey))));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(option_r2.icon);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r4(option_r2.titleKey));
    \u0275\u0275advance();
    \u0275\u0275conditional(option_r2.value === "ipfs" ? 8 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4(option_r2.bodyKey));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(option_r2.benefitKeys);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.provider === option_r2.value ? "check_circle" : "radio_button_unchecked", " ");
  }
}
function HumanAuthnStorageStepComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 1)(2, "header", 2)(3, "div")(4, "span", 3);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h2");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 4)(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "strong");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 5)(16, "section", 6)(17, "div", 7)(18, "span");
    \u0275\u0275text(19, "01");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div")(21, "h3");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "p");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 8);
    \u0275\u0275repeaterCreate(26, HumanAuthnStorageStepComponent_ng_container_0_For_27_Template, 16, 11, "button", 9, _forTrack06);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "aside", 10)(29, "div", 11)(30, "span");
    \u0275\u0275text(31, "02");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div")(33, "h3");
    \u0275\u0275text(34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "p");
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "div", 12)(38, "div", 13)(39, "mat-icon");
    \u0275\u0275text(40, "fingerprint");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "span");
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "span", 14)(44, "mat-icon");
    \u0275\u0275text(45, "arrow_forward");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 15)(47, "mat-icon");
    \u0275\u0275text(48, "enhanced_encryption");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "span");
    \u0275\u0275text(50);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "span", 14)(52, "mat-icon");
    \u0275\u0275text(53, "arrow_forward");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "div", 16)(55, "mat-icon");
    \u0275\u0275text(56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "span");
    \u0275\u0275text(58);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(59, "div", 17)(60, "span", 18);
    \u0275\u0275text(61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "h4");
    \u0275\u0275text(63);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "p");
    \u0275\u0275text(65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "div", 19)(67, "mat-icon");
    \u0275\u0275text(68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "span");
    \u0275\u0275text(70);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(71, "section", 20)(72, "div", 7)(73, "span");
    \u0275\u0275text(74, "03");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "div")(76, "h3");
    \u0275\u0275text(77);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "p");
    \u0275\u0275text(79);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(80, "div", 21)(81, "article")(82, "span", 22)(83, "mat-icon");
    \u0275\u0275text(84, "enhanced_encryption");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(85, "div")(86, "strong");
    \u0275\u0275text(87);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "p");
    \u0275\u0275text(89);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(90, "article")(91, "span", 22)(92, "mat-icon");
    \u0275\u0275text(93, "visibility");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(94, "div")(95, "strong");
    \u0275\u0275text(96);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(97, "p");
    \u0275\u0275text(98);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(99, "article")(100, "span", 23)(101, "mat-icon");
    \u0275\u0275text(102, "face_retouching_off");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(103, "div")(104, "strong");
    \u0275\u0275text(105);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(106, "p");
    \u0275\u0275text(107);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r4 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(t_r4("humanAuthnProjects.setup.storage.eyebrow"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4("humanAuthnProjects.setup.storage.title"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4("humanAuthnProjects.setup.storage.subtitle"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r4("humanAuthnProjects.setup.storage.currentChoice"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4(ctx_r2.selectedProvider.titleKey));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(t_r4("humanAuthnProjects.setup.storage.chooseTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4("humanAuthnProjects.setup.storage.chooseHelp"));
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", t_r4("humanAuthnProjects.setup.storage.chooseTitle"));
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.providers);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(t_r4("humanAuthnProjects.setup.storage.howTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4("humanAuthnProjects.setup.storage.howHelp"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(t_r4("humanAuthnProjects.setup.storage.flowHumanId"));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(t_r4("humanAuthnProjects.setup.storage.flowEncrypted"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.selectedProvider.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.provider === "none" ? t_r4("humanAuthnProjects.setup.storage.flowApiResponse") : t_r4(ctx_r2.selectedProvider.titleKey), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r4("humanAuthnProjects.setup.storage.selectedPath"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4("humanAuthnProjects.setup.storage.detail." + ctx_r2.provider + "Title"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4("humanAuthnProjects.setup.storage.detail." + ctx_r2.provider + "Body"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.selectedProvider.resultIcon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4("humanAuthnProjects.setup.storage.detail." + ctx_r2.provider + "Result"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", t_r4(ctx_r2.provider === "none" ? "humanAuthnProjects.setup.storage.noneTrustTitle" : "humanAuthnProjects.setup.storage.trustTitle"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r4(ctx_r2.provider === "none" ? "humanAuthnProjects.setup.storage.noneTrustHelp" : "humanAuthnProjects.setup.storage.trustHelp"), " ");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(t_r4("humanAuthnProjects.setup.storage.encryptedProofTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4("humanAuthnProjects.setup.storage.encryptedProofBody"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(t_r4("humanAuthnProjects.setup.storage.publicFieldsTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4("humanAuthnProjects.setup.storage.publicFieldsBody"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(t_r4("humanAuthnProjects.setup.storage.faceTemplateTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4("humanAuthnProjects.setup.storage.faceTemplateBody"));
  }
}
var HumanAuthnStorageStepComponent = class _HumanAuthnStorageStepComponent {
  constructor() {
    this.providers = [
      {
        value: "ipfs",
        icon: "hub",
        resultIcon: "link",
        titleKey: "humanAuthnProjects.setup.storage.ipfsTitle",
        bodyKey: "humanAuthnProjects.setup.storage.ipfsBody",
        benefitKeys: [
          "humanAuthnProjects.setup.storage.ipfsBenefitIndex",
          "humanAuthnProjects.setup.storage.ipfsBenefitGateway",
          "humanAuthnProjects.setup.storage.sameEncryptedPayload"
        ]
      },
      {
        value: "cloud",
        icon: "cloud_queue",
        resultIcon: "cloud_done",
        titleKey: "humanAuthnProjects.setup.storage.cloudTitle",
        bodyKey: "humanAuthnProjects.setup.storage.cloudBody",
        benefitKeys: [
          "humanAuthnProjects.setup.storage.cloudBenefitManaged",
          "humanAuthnProjects.setup.storage.cloudBenefitHosted",
          "humanAuthnProjects.setup.storage.sameEncryptedPayload"
        ]
      },
      {
        value: "none",
        icon: "reply",
        resultIcon: "api",
        titleKey: "humanAuthnProjects.setup.storage.noneTitle",
        bodyKey: "humanAuthnProjects.setup.storage.noneBody",
        benefitKeys: [
          "humanAuthnProjects.setup.storage.noneBenefitApi",
          "humanAuthnProjects.setup.storage.noneBenefitNoPersistence",
          "humanAuthnProjects.setup.storage.sameEncryptedPayload"
        ]
      }
    ];
  }
  get provider() {
    return this.form?.get("projectFlow.storage.provider")?.value || "ipfs";
  }
  get selectedProvider() {
    return this.providers.find((option) => option.value === this.provider) || this.providers[0];
  }
  setProvider(provider) {
    const control = this.form.get("projectFlow.storage.provider");
    control?.setValue(provider);
    control?.markAsDirty();
  }
  static {
    this.\u0275fac = function HumanAuthnStorageStepComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HumanAuthnStorageStepComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HumanAuthnStorageStepComponent, selectors: [["human-authn-storage-step"]], inputs: { form: "form" }, decls: 1, vars: 0, consts: [[4, "transloco"], [1, "storage-screen"], [1, "storage-hero"], [1, "storage-hero__eyebrow"], [1, "storage-hero__choice"], [1, "storage-decision"], [1, "provider-section"], [1, "section-heading"], ["role", "radiogroup", 1, "provider-options"], ["type", "button", "role", "radio", 1, "provider-option", 3, "provider-option--selected"], ["aria-live", "polite", 1, "storage-explainer"], [1, "section-heading", "section-heading--light"], [1, "storage-flow"], [1, "storage-flow__node"], [1, "storage-flow__line"], [1, "storage-flow__node", "storage-flow__node--secure"], [1, "storage-flow__node", "storage-flow__node--provider"], [1, "selected-provider"], [1, "selected-provider__label"], [1, "selected-provider__result"], [1, "storage-trust"], [1, "trust-items"], [1, "trust-items__icon", "trust-items__icon--stored"], [1, "trust-items__icon", "trust-items__icon--private"], ["type", "button", "role", "radio", 1, "provider-option", 3, "click"], [1, "provider-option__icon"], [1, "provider-option__content"], [1, "provider-option__title"], [1, "provider-option__body"], [1, "provider-option__benefits"], [1, "provider-option__check"]], template: function HumanAuthnStorageStepComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, HumanAuthnStorageStepComponent_ng_container_0_Template, 108, 27, "ng-container", 0);
      }
    }, dependencies: [CommonModule, ReactiveFormsModule, MatIconModule, MatIcon, TranslocoModule, TranslocoDirective], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.storage-screen[_ngcontent-%COMP%] {\n  margin-inline: auto;\n  width: min(100%, 76rem);\n}\n.storage-hero[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 2rem;\n  margin-bottom: 2rem;\n  padding: 0.5rem 0.25rem;\n}\n.storage-hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  max-width: 42rem;\n  margin: 0.35rem 0 0;\n  color: #1c1917;\n  font-size: clamp(1.75rem, 3vw, 2.55rem);\n  font-weight: 680;\n  letter-spacing: -0.045em;\n  line-height: 1.05;\n}\n.storage-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 42rem;\n  margin: 0.75rem 0 0;\n  color: #78716c;\n  font-size: 0.88rem;\n  line-height: 1.6;\n}\n.storage-hero__eyebrow[_ngcontent-%COMP%] {\n  color: #78716c;\n  font-size: 0.65rem;\n  font-weight: 750;\n  letter-spacing: 0.16em;\n  text-transform: uppercase;\n}\n.storage-hero__choice[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 0 0 auto;\n  flex-direction: column;\n  align-items: flex-end;\n  padding: 0.75rem 1rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 0.9rem;\n  background: white;\n}\n.storage-hero__choice[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #a8a29e;\n  font-size: 0.62rem;\n  font-weight: 650;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n.storage-hero__choice[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  margin-top: 0.15rem;\n  color: #292524;\n  font-size: 0.82rem;\n}\n.storage-decision[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1.08fr) minmax(22rem, 0.92fr);\n  overflow: hidden;\n  border: 1px solid #d6d3d1;\n  border-radius: 1.5rem;\n  background: white;\n  box-shadow: 0 1px 2px rgba(28, 25, 23, 0.03), 0 18px 45px rgba(28, 25, 23, 0.05);\n}\n.provider-section[_ngcontent-%COMP%], \n.storage-explainer[_ngcontent-%COMP%] {\n  padding: 1.75rem;\n}\n.storage-explainer[_ngcontent-%COMP%] {\n  background: #1c1917;\n  color: white;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.8rem;\n  margin-bottom: 1.25rem;\n}\n.section-heading[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: grid;\n  flex: 0 0 1.8rem;\n  width: 1.8rem;\n  height: 1.8rem;\n  place-items: center;\n  border-radius: 999px;\n  background: #292524;\n  color: white;\n  font-size: 0.62rem;\n  font-weight: 750;\n}\n.section-heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #292524;\n  font-size: 0.95rem;\n  font-weight: 680;\n  letter-spacing: -0.015em;\n}\n.section-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.25rem 0 0;\n  color: #78716c;\n  font-size: 0.72rem;\n  line-height: 1.45;\n}\n.section-heading--light[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  background: white;\n  color: #1c1917;\n}\n.section-heading--light[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: white;\n}\n.section-heading--light[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #a8a29e;\n}\n.provider-options[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.8rem;\n}\n.provider-option[_ngcontent-%COMP%] {\n  position: relative;\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr) auto;\n  align-items: flex-start;\n  gap: 1rem;\n  width: 100%;\n  padding: 1.15rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 1rem;\n  background: #fafaf9;\n  color: #292524;\n  text-align: left;\n  transition:\n    border-color 160ms ease,\n    box-shadow 160ms ease,\n    transform 160ms ease,\n    background-color 160ms ease;\n}\n.provider-option[_ngcontent-%COMP%]:hover {\n  border-color: #a8a29e;\n  background: white;\n  transform: translateY(-1px);\n}\n.provider-option[_ngcontent-%COMP%]:focus-visible {\n  outline: 3px solid rgba(59, 130, 246, 0.35);\n  outline-offset: 2px;\n}\n.provider-option--selected[_ngcontent-%COMP%] {\n  border-color: #292524;\n  background: white;\n  box-shadow: inset 0 0 0 1px #292524, 0 8px 22px rgba(28, 25, 23, 0.06);\n}\n.provider-option__icon[_ngcontent-%COMP%] {\n  display: grid;\n  width: 2.6rem;\n  height: 2.6rem;\n  place-items: center;\n  border-radius: 0.8rem;\n  background: #e7e5e4;\n  color: #44403c;\n}\n.provider-option__icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 1.25rem;\n  height: 1.25rem;\n  font-size: 1.25rem;\n}\n.provider-option--selected[_ngcontent-%COMP%]   .provider-option__icon[_ngcontent-%COMP%] {\n  background: #292524;\n  color: white;\n}\n.provider-option__content[_ngcontent-%COMP%], \n.provider-option__benefits[_ngcontent-%COMP%], \n.provider-option__benefits[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n}\n.provider-option__content[_ngcontent-%COMP%], \n.provider-option__benefits[_ngcontent-%COMP%] {\n  flex-direction: column;\n}\n.provider-option__title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.55rem;\n}\n.provider-option__title[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 680;\n}\n.provider-option__title[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  padding: 0.2rem 0.45rem;\n  border-radius: 999px;\n  background: #e7e5e4;\n  color: #57534e;\n  font-size: 0.58rem;\n  font-weight: 700;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n}\n.provider-option__body[_ngcontent-%COMP%] {\n  margin-top: 0.35rem;\n  color: #78716c;\n  font-size: 0.72rem;\n  line-height: 1.45;\n}\n.provider-option__benefits[_ngcontent-%COMP%] {\n  gap: 0.3rem;\n  margin-top: 0.75rem;\n  color: #57534e;\n  font-size: 0.66rem;\n}\n.provider-option__benefits[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  align-items: center;\n  gap: 0.35rem;\n}\n.provider-option__benefits[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 0.85rem;\n  height: 0.85rem;\n  color: #166534;\n  font-size: 0.85rem;\n  font-weight: 700;\n}\n.provider-option__check[_ngcontent-%COMP%] {\n  width: 1.2rem;\n  height: 1.2rem;\n  color: #a8a29e;\n  font-size: 1.2rem;\n}\n.provider-option--selected[_ngcontent-%COMP%]   .provider-option__check[_ngcontent-%COMP%] {\n  color: #166534;\n}\n.storage-flow[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr auto 1fr auto 1fr;\n  align-items: center;\n  gap: 0.45rem;\n  margin: 1.8rem 0;\n}\n.storage-flow__node[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 0;\n  min-height: 5.2rem;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  padding: 0.65rem;\n  border: 1px solid #44403c;\n  border-radius: 0.8rem;\n  background: #292524;\n  text-align: center;\n}\n.storage-flow__node[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #d6d3d1;\n}\n.storage-flow__node[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #d6d3d1;\n  font-size: 0.62rem;\n  font-weight: 600;\n  line-height: 1.3;\n}\n.storage-flow__node--secure[_ngcontent-%COMP%] {\n  border-color: #57534e;\n  background: #44403c;\n}\n.storage-flow__node--provider[_ngcontent-%COMP%] {\n  border-color: #a8a29e;\n  background: white;\n}\n.storage-flow__node--provider[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], \n.storage-flow__node--provider[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #1c1917;\n}\n.storage-flow__line[_ngcontent-%COMP%] {\n  color: #78716c;\n}\n.storage-flow__line[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n  font-size: 1rem;\n}\n.selected-provider[_ngcontent-%COMP%] {\n  padding-top: 1.25rem;\n  border-top: 1px solid #44403c;\n}\n.selected-provider[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0.35rem 0 0;\n  color: white;\n  font-size: 1rem;\n  font-weight: 650;\n}\n.selected-provider[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  margin: 0.55rem 0 0;\n  color: #a8a29e;\n  font-size: 0.72rem;\n  line-height: 1.55;\n}\n.selected-provider__label[_ngcontent-%COMP%] {\n  color: #78716c;\n  font-size: 0.6rem;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n}\n.selected-provider__result[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.55rem;\n  margin-top: 1rem;\n  padding: 0.75rem 0.85rem;\n  border: 1px solid #44403c;\n  border-radius: 0.75rem;\n  background: #292524;\n  color: #d6d3d1;\n  font-size: 0.68rem;\n}\n.selected-provider__result[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n  font-size: 1rem;\n}\n.storage-trust[_ngcontent-%COMP%] {\n  margin-top: 1.25rem;\n  padding: 1.5rem 1.75rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 1.25rem;\n  background: white;\n}\n.trust-items[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 0.75rem;\n}\n.trust-items[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.75rem;\n  padding: 0.9rem;\n  border: 1px solid #f5f5f4;\n  border-radius: 0.85rem;\n  background: #fafaf9;\n}\n.trust-items[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #292524;\n  font-size: 0.75rem;\n  font-weight: 650;\n}\n.trust-items[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.25rem 0 0;\n  color: #78716c;\n  font-size: 0.65rem;\n  line-height: 1.45;\n}\n.trust-items__icon[_ngcontent-%COMP%] {\n  display: grid;\n  flex: 0 0 2rem;\n  width: 2rem;\n  height: 2rem;\n  place-items: center;\n  border-radius: 0.6rem;\n}\n.trust-items__icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n  font-size: 1rem;\n}\n.trust-items__icon--stored[_ngcontent-%COMP%] {\n  background: #ecfdf5;\n  color: #047857;\n}\n.trust-items__icon--private[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #b91c1c;\n}\n.dark[_nghost-%COMP%]   .storage-hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .storage-hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .section-heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .section-heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .provider-option[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .provider-option[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .provider-option__title[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .provider-option__title[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .trust-items[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .trust-items[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .storage-hero__choice[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .storage-hero__choice[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #f8fafc;\n}\n.dark[_nghost-%COMP%]   .storage-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .storage-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .storage-hero__eyebrow[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .storage-hero__eyebrow[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .section-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .section-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .provider-option__body[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .provider-option__body[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .provider-option__benefits[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .provider-option__benefits[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .trust-items[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .trust-items[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .storage-hero__choice[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .storage-hero__choice[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .storage-hero__choice[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .storage-hero__choice[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .storage-decision[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .storage-decision[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .storage-trust[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .storage-trust[_ngcontent-%COMP%] {\n  border-color: rgba(148, 163, 184, 0.18);\n  background: #1e293b;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);\n}\n.dark[_nghost-%COMP%]   .provider-section[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .provider-section[_ngcontent-%COMP%] {\n  background: #1e293b;\n}\n.dark[_nghost-%COMP%]   .section-heading[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .section-heading[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  background: #cbd5e1;\n  color: #0f172a;\n}\n.dark[_nghost-%COMP%]   .provider-option[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .provider-option[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .trust-items[_ngcontent-%COMP%]   article[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .trust-items[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  border-color: #334155;\n  background: #0f172a;\n}\n.dark[_nghost-%COMP%]   .provider-option[_ngcontent-%COMP%]:hover, .dark   [_nghost-%COMP%]   .provider-option[_ngcontent-%COMP%]:hover {\n  border-color: #64748b;\n  background: #334155;\n}\n.dark[_nghost-%COMP%]   .provider-option--selected[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .provider-option--selected[_ngcontent-%COMP%] {\n  border-color: #e2e8f0;\n  background: #0f172a;\n  box-shadow: inset 0 0 0 1px #e2e8f0;\n}\n.dark[_nghost-%COMP%]   .provider-option__icon[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .provider-option__icon[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .provider-option__title[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .provider-option__title[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  background: #334155;\n  color: #e2e8f0;\n}\n.dark[_nghost-%COMP%]   .provider-option--selected[_ngcontent-%COMP%]   .provider-option__icon[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .provider-option--selected[_ngcontent-%COMP%]   .provider-option__icon[_ngcontent-%COMP%] {\n  background: #e2e8f0;\n  color: #0f172a;\n}\n.dark[_nghost-%COMP%]   .provider-option__benefits[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .provider-option__benefits[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .provider-option--selected[_ngcontent-%COMP%]   .provider-option__check[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .provider-option--selected[_ngcontent-%COMP%]   .provider-option__check[_ngcontent-%COMP%] {\n  color: #6ee7b7;\n}\n.dark[_nghost-%COMP%]   .provider-option__check[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .provider-option__check[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n.dark[_nghost-%COMP%]   .storage-explainer[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .storage-explainer[_ngcontent-%COMP%] {\n  background: #1e293b;\n}\n.dark[_nghost-%COMP%]   .section-heading--light[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .section-heading--light[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  background: #e2e8f0;\n  color: #0f172a;\n}\n.dark[_nghost-%COMP%]   .section-heading--light[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .section-heading--light[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #f8fafc;\n}\n.dark[_nghost-%COMP%]   .section-heading--light[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .section-heading--light[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .storage-flow__node[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .storage-flow__node[_ngcontent-%COMP%] {\n  border-color: #475569;\n  background: #334155;\n}\n.dark[_nghost-%COMP%]   .storage-flow__node[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .storage-flow__node[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .storage-flow__node[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .storage-flow__node[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #e2e8f0;\n}\n.dark[_nghost-%COMP%]   .storage-flow__node--secure[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .storage-flow__node--secure[_ngcontent-%COMP%] {\n  border-color: #64748b;\n  background: #475569;\n}\n.dark[_nghost-%COMP%]   .storage-flow__node--provider[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .storage-flow__node--provider[_ngcontent-%COMP%] {\n  border-color: #cbd5e1;\n  background: #e2e8f0;\n}\n.dark[_nghost-%COMP%]   .storage-flow__node--provider[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .storage-flow__node--provider[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .storage-flow__node--provider[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .storage-flow__node--provider[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #0f172a;\n}\n.dark[_nghost-%COMP%]   .storage-flow__line[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .storage-flow__line[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .selected-provider[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .selected-provider[_ngcontent-%COMP%] {\n  border-top-color: #475569;\n}\n.dark[_nghost-%COMP%]   .selected-provider[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .selected-provider[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #f8fafc;\n}\n.dark[_nghost-%COMP%]   .selected-provider[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .selected-provider[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .selected-provider__label[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .selected-provider__label[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n.dark[_nghost-%COMP%]   .selected-provider__result[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .selected-provider__result[_ngcontent-%COMP%] {\n  border-color: #475569;\n  background: #334155;\n  color: #e2e8f0;\n}\n.dark[_nghost-%COMP%]   .trust-items__icon--stored[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .trust-items__icon--stored[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.14);\n  color: #6ee7b7;\n}\n.dark[_nghost-%COMP%]   .trust-items__icon--private[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .trust-items__icon--private[_ngcontent-%COMP%] {\n  background: rgba(244, 63, 94, 0.14);\n  color: #fda4af;\n}\n@media (max-width: 900px) {\n  .storage-decision[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .storage-explainer[_ngcontent-%COMP%] {\n    min-height: auto;\n  }\n}\n@media (max-width: 680px) {\n  .storage-hero[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n  .storage-hero__choice[_ngcontent-%COMP%] {\n    align-items: flex-start;\n  }\n  .provider-section[_ngcontent-%COMP%], \n   .storage-explainer[_ngcontent-%COMP%], \n   .storage-trust[_ngcontent-%COMP%] {\n    padding: 1.25rem;\n  }\n  .storage-flow[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .storage-flow__line[_ngcontent-%COMP%] {\n    display: grid;\n    place-items: center;\n    transform: rotate(90deg);\n  }\n  .trust-items[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=storage-step.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HumanAuthnStorageStepComponent, [{
    type: Component,
    args: [{ selector: "human-authn-storage-step", standalone: true, imports: [CommonModule, ReactiveFormsModule, MatIconModule, TranslocoModule], template: `<ng-container *transloco="let t">\r
    <div class="storage-screen">\r
        <header class="storage-hero">\r
            <div>\r
                <span class="storage-hero__eyebrow">{{ t('humanAuthnProjects.setup.storage.eyebrow') }}</span>\r
                <h2>{{ t('humanAuthnProjects.setup.storage.title') }}</h2>\r
                <p>{{ t('humanAuthnProjects.setup.storage.subtitle') }}</p>\r
            </div>\r
            <div class="storage-hero__choice">\r
                <span>{{ t('humanAuthnProjects.setup.storage.currentChoice') }}</span>\r
                <strong>{{ t(selectedProvider.titleKey) }}</strong>\r
            </div>\r
        </header>\r
\r
        <div class="storage-decision">\r
            <section class="provider-section">\r
                <div class="section-heading">\r
                    <span>01</span>\r
                    <div>\r
                        <h3>{{ t('humanAuthnProjects.setup.storage.chooseTitle') }}</h3>\r
                        <p>{{ t('humanAuthnProjects.setup.storage.chooseHelp') }}</p>\r
                    </div>\r
                </div>\r
\r
                <div class="provider-options" role="radiogroup" [attr.aria-label]="t('humanAuthnProjects.setup.storage.chooseTitle')">\r
                    @for (option of providers; track option.value) {\r
                        <button\r
                            type="button"\r
                            role="radio"\r
                            class="provider-option"\r
                            [class.provider-option--selected]="provider === option.value"\r
                            [attr.aria-checked]="provider === option.value"\r
                            [attr.aria-label]="\r
                                t('humanAuthnProjects.setup.storage.selectProvider', {\r
                                    provider: t(option.titleKey),\r
                                })\r
                            "\r
                            (click)="setProvider(option.value)"\r
                        >\r
                            <span class="provider-option__icon">\r
                                <mat-icon>{{ option.icon }}</mat-icon>\r
                            </span>\r
                            <span class="provider-option__content">\r
                                <span class="provider-option__title">\r
                                    <strong>{{ t(option.titleKey) }}</strong>\r
                                    @if (option.value === 'ipfs') {\r
                                        <small>{{ t('humanAuthnProjects.setup.storage.default') }}</small>\r
                                    }\r
                                </span>\r
                                <span class="provider-option__body">{{ t(option.bodyKey) }}</span>\r
                                <span class="provider-option__benefits">\r
                                    @for (benefitKey of option.benefitKeys; track benefitKey) {\r
                                        <span>\r
                                            <mat-icon>check</mat-icon>\r
                                            {{ t(benefitKey) }}\r
                                        </span>\r
                                    }\r
                                </span>\r
                            </span>\r
                            <mat-icon class="provider-option__check">\r
                                {{ provider === option.value ? 'check_circle' : 'radio_button_unchecked' }}\r
                            </mat-icon>\r
                        </button>\r
                    }\r
                </div>\r
            </section>\r
\r
            <aside class="storage-explainer" aria-live="polite">\r
                <div class="section-heading section-heading--light">\r
                    <span>02</span>\r
                    <div>\r
                        <h3>{{ t('humanAuthnProjects.setup.storage.howTitle') }}</h3>\r
                        <p>{{ t('humanAuthnProjects.setup.storage.howHelp') }}</p>\r
                    </div>\r
                </div>\r
\r
                <div class="storage-flow">\r
                    <div class="storage-flow__node">\r
                        <mat-icon>fingerprint</mat-icon>\r
                        <span>{{ t('humanAuthnProjects.setup.storage.flowHumanId') }}</span>\r
                    </div>\r
                    <span class="storage-flow__line"><mat-icon>arrow_forward</mat-icon></span>\r
                    <div class="storage-flow__node storage-flow__node--secure">\r
                        <mat-icon>enhanced_encryption</mat-icon>\r
                        <span>{{ t('humanAuthnProjects.setup.storage.flowEncrypted') }}</span>\r
                    </div>\r
                    <span class="storage-flow__line"><mat-icon>arrow_forward</mat-icon></span>\r
                    <div class="storage-flow__node storage-flow__node--provider">\r
                        <mat-icon>{{ selectedProvider.icon }}</mat-icon>\r
                        <span>\r
                            {{\r
                                provider === 'none'\r
                                    ? t('humanAuthnProjects.setup.storage.flowApiResponse')\r
                                    : t(selectedProvider.titleKey)\r
                            }}\r
                        </span>\r
                    </div>\r
                </div>\r
\r
                <div class="selected-provider">\r
                    <span class="selected-provider__label">{{ t('humanAuthnProjects.setup.storage.selectedPath') }}</span>\r
                    <h4>{{ t('humanAuthnProjects.setup.storage.detail.' + provider + 'Title') }}</h4>\r
                    <p>{{ t('humanAuthnProjects.setup.storage.detail.' + provider + 'Body') }}</p>\r
                    <div class="selected-provider__result">\r
                        <mat-icon>{{ selectedProvider.resultIcon }}</mat-icon>\r
                        <span>{{ t('humanAuthnProjects.setup.storage.detail.' + provider + 'Result') }}</span>\r
                    </div>\r
                </div>\r
            </aside>\r
        </div>\r
\r
        <section class="storage-trust">\r
            <div class="section-heading">\r
                <span>03</span>\r
                <div>\r
                    <h3>\r
                        {{\r
                            t(\r
                                provider === 'none'\r
                                    ? 'humanAuthnProjects.setup.storage.noneTrustTitle'\r
                                    : 'humanAuthnProjects.setup.storage.trustTitle'\r
                            )\r
                        }}\r
                    </h3>\r
                    <p>\r
                        {{\r
                            t(\r
                                provider === 'none'\r
                                    ? 'humanAuthnProjects.setup.storage.noneTrustHelp'\r
                                    : 'humanAuthnProjects.setup.storage.trustHelp'\r
                            )\r
                        }}\r
                    </p>\r
                </div>\r
            </div>\r
\r
            <div class="trust-items">\r
                <article>\r
                    <span class="trust-items__icon trust-items__icon--stored"><mat-icon>enhanced_encryption</mat-icon></span>\r
                    <div>\r
                        <strong>{{ t('humanAuthnProjects.setup.storage.encryptedProofTitle') }}</strong>\r
                        <p>{{ t('humanAuthnProjects.setup.storage.encryptedProofBody') }}</p>\r
                    </div>\r
                </article>\r
                <article>\r
                    <span class="trust-items__icon trust-items__icon--stored"><mat-icon>visibility</mat-icon></span>\r
                    <div>\r
                        <strong>{{ t('humanAuthnProjects.setup.storage.publicFieldsTitle') }}</strong>\r
                        <p>{{ t('humanAuthnProjects.setup.storage.publicFieldsBody') }}</p>\r
                    </div>\r
                </article>\r
                <article>\r
                    <span class="trust-items__icon trust-items__icon--private"><mat-icon>face_retouching_off</mat-icon></span>\r
                    <div>\r
                        <strong>{{ t('humanAuthnProjects.setup.storage.faceTemplateTitle') }}</strong>\r
                        <p>{{ t('humanAuthnProjects.setup.storage.faceTemplateBody') }}</p>\r
                    </div>\r
                </article>\r
            </div>\r
        </section>\r
    </div>\r
</ng-container>\r
`, styles: ["/* src/app/modules/human-authn/projects/setup/steps/storage-step.component.scss */\n:host {\n  display: block;\n}\n.storage-screen {\n  margin-inline: auto;\n  width: min(100%, 76rem);\n}\n.storage-hero {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 2rem;\n  margin-bottom: 2rem;\n  padding: 0.5rem 0.25rem;\n}\n.storage-hero h2 {\n  max-width: 42rem;\n  margin: 0.35rem 0 0;\n  color: #1c1917;\n  font-size: clamp(1.75rem, 3vw, 2.55rem);\n  font-weight: 680;\n  letter-spacing: -0.045em;\n  line-height: 1.05;\n}\n.storage-hero p {\n  max-width: 42rem;\n  margin: 0.75rem 0 0;\n  color: #78716c;\n  font-size: 0.88rem;\n  line-height: 1.6;\n}\n.storage-hero__eyebrow {\n  color: #78716c;\n  font-size: 0.65rem;\n  font-weight: 750;\n  letter-spacing: 0.16em;\n  text-transform: uppercase;\n}\n.storage-hero__choice {\n  display: flex;\n  flex: 0 0 auto;\n  flex-direction: column;\n  align-items: flex-end;\n  padding: 0.75rem 1rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 0.9rem;\n  background: white;\n}\n.storage-hero__choice span {\n  color: #a8a29e;\n  font-size: 0.62rem;\n  font-weight: 650;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n.storage-hero__choice strong {\n  margin-top: 0.15rem;\n  color: #292524;\n  font-size: 0.82rem;\n}\n.storage-decision {\n  display: grid;\n  grid-template-columns: minmax(0, 1.08fr) minmax(22rem, 0.92fr);\n  overflow: hidden;\n  border: 1px solid #d6d3d1;\n  border-radius: 1.5rem;\n  background: white;\n  box-shadow: 0 1px 2px rgba(28, 25, 23, 0.03), 0 18px 45px rgba(28, 25, 23, 0.05);\n}\n.provider-section,\n.storage-explainer {\n  padding: 1.75rem;\n}\n.storage-explainer {\n  background: #1c1917;\n  color: white;\n}\n.section-heading {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.8rem;\n  margin-bottom: 1.25rem;\n}\n.section-heading > span {\n  display: grid;\n  flex: 0 0 1.8rem;\n  width: 1.8rem;\n  height: 1.8rem;\n  place-items: center;\n  border-radius: 999px;\n  background: #292524;\n  color: white;\n  font-size: 0.62rem;\n  font-weight: 750;\n}\n.section-heading h3 {\n  margin: 0;\n  color: #292524;\n  font-size: 0.95rem;\n  font-weight: 680;\n  letter-spacing: -0.015em;\n}\n.section-heading p {\n  margin: 0.25rem 0 0;\n  color: #78716c;\n  font-size: 0.72rem;\n  line-height: 1.45;\n}\n.section-heading--light > span {\n  background: white;\n  color: #1c1917;\n}\n.section-heading--light h3 {\n  color: white;\n}\n.section-heading--light p {\n  color: #a8a29e;\n}\n.provider-options {\n  display: flex;\n  flex-direction: column;\n  gap: 0.8rem;\n}\n.provider-option {\n  position: relative;\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr) auto;\n  align-items: flex-start;\n  gap: 1rem;\n  width: 100%;\n  padding: 1.15rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 1rem;\n  background: #fafaf9;\n  color: #292524;\n  text-align: left;\n  transition:\n    border-color 160ms ease,\n    box-shadow 160ms ease,\n    transform 160ms ease,\n    background-color 160ms ease;\n}\n.provider-option:hover {\n  border-color: #a8a29e;\n  background: white;\n  transform: translateY(-1px);\n}\n.provider-option:focus-visible {\n  outline: 3px solid rgba(59, 130, 246, 0.35);\n  outline-offset: 2px;\n}\n.provider-option--selected {\n  border-color: #292524;\n  background: white;\n  box-shadow: inset 0 0 0 1px #292524, 0 8px 22px rgba(28, 25, 23, 0.06);\n}\n.provider-option__icon {\n  display: grid;\n  width: 2.6rem;\n  height: 2.6rem;\n  place-items: center;\n  border-radius: 0.8rem;\n  background: #e7e5e4;\n  color: #44403c;\n}\n.provider-option__icon mat-icon {\n  width: 1.25rem;\n  height: 1.25rem;\n  font-size: 1.25rem;\n}\n.provider-option--selected .provider-option__icon {\n  background: #292524;\n  color: white;\n}\n.provider-option__content,\n.provider-option__benefits,\n.provider-option__benefits span {\n  display: flex;\n}\n.provider-option__content,\n.provider-option__benefits {\n  flex-direction: column;\n}\n.provider-option__title {\n  display: flex;\n  align-items: center;\n  gap: 0.55rem;\n}\n.provider-option__title strong {\n  font-size: 0.9rem;\n  font-weight: 680;\n}\n.provider-option__title small {\n  padding: 0.2rem 0.45rem;\n  border-radius: 999px;\n  background: #e7e5e4;\n  color: #57534e;\n  font-size: 0.58rem;\n  font-weight: 700;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n}\n.provider-option__body {\n  margin-top: 0.35rem;\n  color: #78716c;\n  font-size: 0.72rem;\n  line-height: 1.45;\n}\n.provider-option__benefits {\n  gap: 0.3rem;\n  margin-top: 0.75rem;\n  color: #57534e;\n  font-size: 0.66rem;\n}\n.provider-option__benefits span {\n  align-items: center;\n  gap: 0.35rem;\n}\n.provider-option__benefits mat-icon {\n  width: 0.85rem;\n  height: 0.85rem;\n  color: #166534;\n  font-size: 0.85rem;\n  font-weight: 700;\n}\n.provider-option__check {\n  width: 1.2rem;\n  height: 1.2rem;\n  color: #a8a29e;\n  font-size: 1.2rem;\n}\n.provider-option--selected .provider-option__check {\n  color: #166534;\n}\n.storage-flow {\n  display: grid;\n  grid-template-columns: 1fr auto 1fr auto 1fr;\n  align-items: center;\n  gap: 0.45rem;\n  margin: 1.8rem 0;\n}\n.storage-flow__node {\n  display: flex;\n  min-width: 0;\n  min-height: 5.2rem;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  padding: 0.65rem;\n  border: 1px solid #44403c;\n  border-radius: 0.8rem;\n  background: #292524;\n  text-align: center;\n}\n.storage-flow__node mat-icon {\n  color: #d6d3d1;\n}\n.storage-flow__node span {\n  color: #d6d3d1;\n  font-size: 0.62rem;\n  font-weight: 600;\n  line-height: 1.3;\n}\n.storage-flow__node--secure {\n  border-color: #57534e;\n  background: #44403c;\n}\n.storage-flow__node--provider {\n  border-color: #a8a29e;\n  background: white;\n}\n.storage-flow__node--provider mat-icon,\n.storage-flow__node--provider span {\n  color: #1c1917;\n}\n.storage-flow__line {\n  color: #78716c;\n}\n.storage-flow__line mat-icon {\n  width: 1rem;\n  height: 1rem;\n  font-size: 1rem;\n}\n.selected-provider {\n  padding-top: 1.25rem;\n  border-top: 1px solid #44403c;\n}\n.selected-provider h4 {\n  margin: 0.35rem 0 0;\n  color: white;\n  font-size: 1rem;\n  font-weight: 650;\n}\n.selected-provider > p {\n  margin: 0.55rem 0 0;\n  color: #a8a29e;\n  font-size: 0.72rem;\n  line-height: 1.55;\n}\n.selected-provider__label {\n  color: #78716c;\n  font-size: 0.6rem;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n}\n.selected-provider__result {\n  display: flex;\n  align-items: center;\n  gap: 0.55rem;\n  margin-top: 1rem;\n  padding: 0.75rem 0.85rem;\n  border: 1px solid #44403c;\n  border-radius: 0.75rem;\n  background: #292524;\n  color: #d6d3d1;\n  font-size: 0.68rem;\n}\n.selected-provider__result mat-icon {\n  width: 1rem;\n  height: 1rem;\n  font-size: 1rem;\n}\n.storage-trust {\n  margin-top: 1.25rem;\n  padding: 1.5rem 1.75rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 1.25rem;\n  background: white;\n}\n.trust-items {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 0.75rem;\n}\n.trust-items article {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.75rem;\n  padding: 0.9rem;\n  border: 1px solid #f5f5f4;\n  border-radius: 0.85rem;\n  background: #fafaf9;\n}\n.trust-items strong {\n  color: #292524;\n  font-size: 0.75rem;\n  font-weight: 650;\n}\n.trust-items p {\n  margin: 0.25rem 0 0;\n  color: #78716c;\n  font-size: 0.65rem;\n  line-height: 1.45;\n}\n.trust-items__icon {\n  display: grid;\n  flex: 0 0 2rem;\n  width: 2rem;\n  height: 2rem;\n  place-items: center;\n  border-radius: 0.6rem;\n}\n.trust-items__icon mat-icon {\n  width: 1rem;\n  height: 1rem;\n  font-size: 1rem;\n}\n.trust-items__icon--stored {\n  background: #ecfdf5;\n  color: #047857;\n}\n.trust-items__icon--private {\n  background: #fef2f2;\n  color: #b91c1c;\n}\n:host-context(.dark) .storage-hero h2,\n:host-context(.dark) .section-heading h3,\n:host-context(.dark) .provider-option,\n:host-context(.dark) .provider-option__title strong,\n:host-context(.dark) .trust-items strong,\n:host-context(.dark) .storage-hero__choice strong {\n  color: #f8fafc;\n}\n:host-context(.dark) .storage-hero p,\n:host-context(.dark) .storage-hero__eyebrow,\n:host-context(.dark) .section-heading p,\n:host-context(.dark) .provider-option__body,\n:host-context(.dark) .provider-option__benefits,\n:host-context(.dark) .trust-items p,\n:host-context(.dark) .storage-hero__choice span {\n  color: #94a3b8;\n}\n:host-context(.dark) .storage-hero__choice,\n:host-context(.dark) .storage-decision,\n:host-context(.dark) .storage-trust {\n  border-color: rgba(148, 163, 184, 0.18);\n  background: #1e293b;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);\n}\n:host-context(.dark) .provider-section {\n  background: #1e293b;\n}\n:host-context(.dark) .section-heading > span {\n  background: #cbd5e1;\n  color: #0f172a;\n}\n:host-context(.dark) .provider-option,\n:host-context(.dark) .trust-items article {\n  border-color: #334155;\n  background: #0f172a;\n}\n:host-context(.dark) .provider-option:hover {\n  border-color: #64748b;\n  background: #334155;\n}\n:host-context(.dark) .provider-option--selected {\n  border-color: #e2e8f0;\n  background: #0f172a;\n  box-shadow: inset 0 0 0 1px #e2e8f0;\n}\n:host-context(.dark) .provider-option__icon,\n:host-context(.dark) .provider-option__title small {\n  background: #334155;\n  color: #e2e8f0;\n}\n:host-context(.dark) .provider-option--selected .provider-option__icon {\n  background: #e2e8f0;\n  color: #0f172a;\n}\n:host-context(.dark) .provider-option__benefits mat-icon,\n:host-context(.dark) .provider-option--selected .provider-option__check {\n  color: #6ee7b7;\n}\n:host-context(.dark) .provider-option__check {\n  color: #64748b;\n}\n:host-context(.dark) .storage-explainer {\n  background: #1e293b;\n}\n:host-context(.dark) .section-heading--light > span {\n  background: #e2e8f0;\n  color: #0f172a;\n}\n:host-context(.dark) .section-heading--light h3 {\n  color: #f8fafc;\n}\n:host-context(.dark) .section-heading--light p {\n  color: #94a3b8;\n}\n:host-context(.dark) .storage-flow__node {\n  border-color: #475569;\n  background: #334155;\n}\n:host-context(.dark) .storage-flow__node mat-icon,\n:host-context(.dark) .storage-flow__node span {\n  color: #e2e8f0;\n}\n:host-context(.dark) .storage-flow__node--secure {\n  border-color: #64748b;\n  background: #475569;\n}\n:host-context(.dark) .storage-flow__node--provider {\n  border-color: #cbd5e1;\n  background: #e2e8f0;\n}\n:host-context(.dark) .storage-flow__node--provider mat-icon,\n:host-context(.dark) .storage-flow__node--provider span {\n  color: #0f172a;\n}\n:host-context(.dark) .storage-flow__line {\n  color: #94a3b8;\n}\n:host-context(.dark) .selected-provider {\n  border-top-color: #475569;\n}\n:host-context(.dark) .selected-provider h4 {\n  color: #f8fafc;\n}\n:host-context(.dark) .selected-provider > p {\n  color: #94a3b8;\n}\n:host-context(.dark) .selected-provider__label {\n  color: #64748b;\n}\n:host-context(.dark) .selected-provider__result {\n  border-color: #475569;\n  background: #334155;\n  color: #e2e8f0;\n}\n:host-context(.dark) .trust-items__icon--stored {\n  background: rgba(16, 185, 129, 0.14);\n  color: #6ee7b7;\n}\n:host-context(.dark) .trust-items__icon--private {\n  background: rgba(244, 63, 94, 0.14);\n  color: #fda4af;\n}\n@media (max-width: 900px) {\n  .storage-decision {\n    grid-template-columns: 1fr;\n  }\n  .storage-explainer {\n    min-height: auto;\n  }\n}\n@media (max-width: 680px) {\n  .storage-hero {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n  .storage-hero__choice {\n    align-items: flex-start;\n  }\n  .provider-section,\n  .storage-explainer,\n  .storage-trust {\n    padding: 1.25rem;\n  }\n  .storage-flow {\n    grid-template-columns: 1fr;\n  }\n  .storage-flow__line {\n    display: grid;\n    place-items: center;\n    transform: rotate(90deg);\n  }\n  .trust-items {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=storage-step.component.css.map */\n"] }]
  }], null, { form: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HumanAuthnStorageStepComponent, { className: "HumanAuthnStorageStepComponent", filePath: "src/app/modules/human-authn/projects/setup/steps/storage-step.component.ts", lineNumber: 25 });
})();

// src/app/modules/human-authn/projects/setup/human-authn-setup-host.component.ts
function HumanAuthnSetupHostComponent_ng_container_0_For_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275listener("click", function HumanAuthnSetupHostComponent_ng_container_0_For_19_Template_button_click_0_listener() {
      const \u0275$index_34_r4 = \u0275\u0275restoreView(_r3).$index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToStep(\u0275$index_34_r4));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r5 = ctx.$implicit;
    const \u0275$index_34_r4 = ctx.$index;
    const t_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("border-stone-900", \u0275$index_34_r4 === ctx_r1.stepIndex)("border-stone-200", \u0275$index_34_r4 !== ctx_r1.stepIndex);
    \u0275\u0275property("disabled", ctx_r1.saving() || ctx_r1.loading());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r6(step_r5), " ");
  }
}
function HumanAuthnSetupHostComponent_ng_container_0_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-spinner", 12);
  }
}
function HumanAuthnSetupHostComponent_ng_container_0_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r6("humanAuthnProjects.loadError"));
  }
}
function HumanAuthnSetupHostComponent_ng_container_0_Conditional_23_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "human-authn-details-step", 16);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("form", ctx_r1.form);
  }
}
function HumanAuthnSetupHostComponent_ng_container_0_Conditional_23_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "human-authn-signup-step", 16);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("form", ctx_r1.form);
  }
}
function HumanAuthnSetupHostComponent_ng_container_0_Conditional_23_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "human-authn-documents-step", 17);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("form", ctx_r1.form)("formGroup", ctx_r1.documentsFormGroup())("loading", ctx_r1.loading())("saving", ctx_r1.saving());
  }
}
function HumanAuthnSetupHostComponent_ng_container_0_Conditional_23_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "human-authn-mode-step", 16);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("form", ctx_r1.form);
  }
}
function HumanAuthnSetupHostComponent_ng_container_0_Conditional_23_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "human-authn-storage-step", 16);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("form", ctx_r1.form);
  }
}
function HumanAuthnSetupHostComponent_ng_container_0_Conditional_23_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "human-authn-integrations-step", 16);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("form", ctx_r1.form);
  }
}
function HumanAuthnSetupHostComponent_ng_container_0_Conditional_23_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "human-authn-ui-step", 18);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("form", ctx_r1.form)("loading", ctx_r1.loading())("saving", ctx_r1.saving());
  }
}
function HumanAuthnSetupHostComponent_ng_container_0_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 14);
    \u0275\u0275template(1, HumanAuthnSetupHostComponent_ng_container_0_Conditional_23_Conditional_1_Template, 1, 1, "human-authn-details-step", 16)(2, HumanAuthnSetupHostComponent_ng_container_0_Conditional_23_Conditional_2_Template, 1, 1, "human-authn-signup-step", 16)(3, HumanAuthnSetupHostComponent_ng_container_0_Conditional_23_Conditional_3_Template, 1, 4, "human-authn-documents-step", 17)(4, HumanAuthnSetupHostComponent_ng_container_0_Conditional_23_Conditional_4_Template, 1, 1, "human-authn-mode-step", 16)(5, HumanAuthnSetupHostComponent_ng_container_0_Conditional_23_Conditional_5_Template, 1, 1, "human-authn-storage-step", 16)(6, HumanAuthnSetupHostComponent_ng_container_0_Conditional_23_Conditional_6_Template, 1, 1, "human-authn-integrations-step", 16)(7, HumanAuthnSetupHostComponent_ng_container_0_Conditional_23_Conditional_7_Template, 1, 3, "human-authn-ui-step", 18);
    \u0275\u0275elementStart(8, "div", 19)(9, "button", 20);
    \u0275\u0275listener("click", function HumanAuthnSetupHostComponent_ng_container_0_Conditional_23_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.previousStep());
    });
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 21);
    \u0275\u0275listener("click", function HumanAuthnSetupHostComponent_ng_container_0_Conditional_23_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.nextStep());
    });
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const t_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.stepIndex === 0 ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.stepIndex === 1 ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.stepIndex === 2 ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.stepIndex === 3 ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.stepIndex === 4 ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.stepIndex === 5 ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.stepIndex === 6 ? 7 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r6("humanAuthnProjects.setup.back"));
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.isFormValidForStep(ctx_r1.stepIndex) || ctx_r1.saving());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.stepIndex === ctx_r1.steps.length - 1 ? t_r6("humanAuthnProjects.setup.finish") : t_r6("humanAuthnProjects.setup.next"), " ");
  }
}
function HumanAuthnSetupHostComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 1)(2, "header", 2)(3, "div", 3)(4, "div", 4)(5, "a", 5);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8, "/");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 6)(12, "button", 7);
    \u0275\u0275listener("click", function HumanAuthnSetupHostComponent_ng_container_0_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.previousStep());
    });
    \u0275\u0275elementStart(13, "mat-icon");
    \u0275\u0275text(14, "arrow_back");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "h1", 8);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "nav", 9);
    \u0275\u0275repeaterCreate(18, HumanAuthnSetupHostComponent_ng_container_0_For_19_Template, 2, 6, "button", 10, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "main", 11);
    \u0275\u0275template(21, HumanAuthnSetupHostComponent_ng_container_0_Conditional_21_Template, 1, 0, "mat-progress-spinner", 12)(22, HumanAuthnSetupHostComponent_ng_container_0_Conditional_22_Template, 2, 1, "p", 13)(23, HumanAuthnSetupHostComponent_ng_container_0_Conditional_23_Template, 13, 10, "section", 14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const t_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(t_r6("humanAuthnProjects.title"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r6("humanAuthnProjects.setup.title"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r1.projectId === "new" ? t_r6("humanAuthnProjects.setup.newProject") : ctx_r1.form == null ? null : (tmp_4_0 = ctx_r1.form.get("name")) == null ? null : tmp_4_0.value, " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.steps);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.loading() ? 21 : ctx_r1.loadFailed() ? 22 : ctx_r1.form ? 23 : -1);
  }
}
var HumanAuthnSetupHostComponent = class _HumanAuthnSetupHostComponent {
  constructor() {
    this._route = inject(ActivatedRoute);
    this._router = inject(Router);
    this._fb = inject(FormBuilder);
    this._setup = inject(HumanAuthnSetupService);
    this._factory = inject(SetupFormFactory);
    this._cdr = inject(ChangeDetectorRef);
    this._snack = inject(MatSnackBar);
    this._transloco = inject(TranslocoService);
    this._dialog = inject(MatDialog);
    this._unsub$ = new Subject();
    this.loading = signal(true);
    this.saving = signal(false);
    this.loadFailed = signal(false);
    this.projectId = "new";
    this.stepIndex = 0;
    this._hydrated = false;
    this.steps = this._setup.steps;
    this.isFormValidForStep = (stepIndex) => {
      if (!this.form)
        return false;
      const keys = this._setup.formKeys[stepIndex] || [];
      if (stepIndex === 2 && this.form.get("projectFlow.steps.document")?.value === "skip")
        return true;
      return keys.every((key) => !this.form.get(key)?.invalid);
    };
  }
  ngOnInit() {
    const snapshot = this._route.snapshot.params;
    this.projectId = snapshot["projectId"] || "new";
    this.stepIndex = Number(snapshot["step"] || 0);
    this._setup.setProjectId(this.projectId);
    this._setup.setStepIndex(this.stepIndex);
    this._route.params.pipe(takeUntil(this._unsub$)).subscribe((params) => {
      this.projectId = params["projectId"] || this.projectId;
      this.stepIndex = Number(params["step"] ?? this.stepIndex);
      this._setup.setProjectId(this.projectId);
      this._setup.setStepIndex(this.stepIndex);
      this.form?.get("currentStep")?.setValue(this.stepIndex + 1, { emitEvent: false });
      this._cdr.markForCheck();
    });
    if (this.projectId !== "new") {
      this._setup.requestProject(this.projectId).subscribe({
        next: (res) => {
          const project = res?.data;
          if (!`${project?.name || ""}`.trim()) {
            this._failLoad();
            return;
          }
          this._setup.setProject(project);
          this._initForm(project);
          this._hydrated = true;
        },
        error: () => this._failLoad()
      });
      return;
    }
    this._initForm(this._setup.getDefaultProject());
    this._hydrated = true;
  }
  ngOnDestroy() {
    this._unsub$.next();
    this._unsub$.complete();
  }
  _failLoad() {
    this.loading.set(false);
    this.loadFailed.set(true);
    this._snack.open(this._transloco.translate("humanAuthnProjects.loadError"), this._transloco.translate("close"), { duration: 3e3 });
    this._cdr.markForCheck();
  }
  _initForm(project) {
    const flow = project?.projectFlows?.[0] || this._setup.getDefaultProjectFlow();
    this.form = this._fb.group({
      name: [project.name || "", Validators.required],
      target: ["personal"],
      version: [3],
      currentStep: [this.stepIndex + 1],
      lastStep: [Number(project?.lastStep ?? 0)],
      allowedCountries: [project.allowedCountries || [], Validators.required],
      contactEmail: [project.contactEmail || "", [Validators.required, Validators.email]],
      defaultLanguage: [project.defaultLanguage || "en", Validators.required],
      privacyUrl: [project.privacyUrl || "", [Validators.required, Validators.pattern(STRICT_URL_PATTERN)]],
      termsAndConditionsUrl: [
        project.termsAndConditionsUrl || "",
        [Validators.required, Validators.pattern(STRICT_URL_PATTERN)]
      ],
      dataProtection: this._fb.group({
        name: [project.dataProtection?.name || "", Validators.required],
        email: [project.dataProtection?.email || "", [Validators.required, Validators.email]],
        address: [project.dataProtection?.address || "", Validators.required],
        address2: [project.dataProtection?.address2 || ""],
        city: [project.dataProtection?.city || "", Validators.required],
        country: [project.dataProtection?.country || "", Validators.required],
        postalCode: [project.dataProtection?.postalCode || "", Validators.required]
      }),
      branding: this._fb.group({
        backgroundColor: [project.branding?.backgroundColor || "#ffffff"],
        buttonColor: [project.branding?.buttonColor || "#3f3f46"],
        buttonTextColor: [project.branding?.buttonTextColor || "#ffffff"],
        image: [project.branding?.image || ""],
        imageBackgroundColor: [project.branding?.imageBackgroundColor || "#ffffff"],
        logo: [project.branding?.logo || ""],
        textColor: [project.branding?.textColor || "#3f3f46"],
        titleColor: [project.branding?.titleColor || "#3f3f46"]
      }),
      projectFlow: this._fb.group({
        type: ["humanAuthn"],
        target: ["personal"],
        status: [flow.status || "draft"],
        version: [3],
        humanAuthn: this._fb.group({
          mode: [flow.humanAuthn?.mode || "standard", Validators.required],
          livenessAtCreation: [!!flow.humanAuthn?.livenessAtCreation],
          outputFormat: [flow.humanAuthn?.outputFormat || "string", Validators.required],
          tolerance: [
            flow.humanAuthn?.tolerance || (flow.humanAuthn?.mode === "active_user" ? "HARDENED" : "REGULAR"),
            Validators.required
          ],
          compareMinScore: [flow.humanAuthn?.compareMinScore ?? 0.85, [Validators.min(0.7), Validators.max(0.95)]],
          verifierKey: [flow.humanAuthn?.verifierKey || "", [Validators.maxLength(128)]],
          publicDataKeys: [this._defaultPublicDataKeys(flow)]
        }),
        storage: this._fb.group({
          provider: [flow.storage?.provider || "ipfs", Validators.required]
        }),
        integrations: this._fb.group({
          redirectUrl: [flow.integrations?.redirectUrl || "", [Validators.required, Validators.pattern(STRICT_URL_PATTERN)]],
          webhook: [flow.integrations?.webhook || null]
        }),
        signUpForm: this._fb.group({
          additionalFields: [flow.signUpForm?.additionalFields || []],
          allowAdditionalFields: [!!flow.signUpForm?.allowAdditionalFields],
          countryCode: [flow.signUpForm?.countryCode || DEFAULT_PHONE_COUNTRY_CODE],
          email: [!!flow.signUpForm?.email],
          emailGateway: [flow.signUpForm?.emailGateway || "none"],
          fullName: [true],
          fullNameStyle: [flow.signUpForm?.fullNameStyle || "together"],
          phone: [!!flow.signUpForm?.phone],
          phoneGateway: [flow.signUpForm?.phoneGateway || "sms"],
          showPrivacyNotice: [!!flow.signUpForm?.showPrivacyNotice],
          showTermsAndConditions: [!!flow.signUpForm?.showTermsAndConditions]
        }),
        documents: this._fb.group({
          attemptLimit: [flow.documents?.attemptLimit || 3],
          criminalHistoryVerification: [!!flow.documents?.criminalHistoryVerification],
          criminalHistoryVerificationEndpoints: [flow.documents?.criminalHistoryVerificationEndpoints || []],
          documentTypes: this._factory.createDocumentTypesWithDefaults(flow.documents?.documentTypes || [], "personal"),
          informationVerification: [!!flow.documents?.informationVerification],
          screening: [!!flow.documents?.screening],
          verificationMethods: [flow.documents?.verificationMethods || []]
        }),
        steps: this._fb.group({
          document: [flow.steps?.document || "skip"],
          humanAuthn: ["mandatory"]
        })
      })
    });
    this._bindPublicDataKeyAvailability(flow);
    this.loading.set(false);
    this._cdr.markForCheck();
  }
  confirmNavigation() {
    return this._dialog.open(SmartAccessLeaveDialogComponent, {
      autoFocus: "dialog",
      data: { i18nPrefix: "humanAuthnProjects.setup.leave" },
      maxWidth: "96vw",
      panelClass: "smart-access-leave-dialog-panel",
      width: "min(920px, calc(100vw - 1.5rem))"
    });
  }
  savedLastStep() {
    const fromProject = Number(this._setup.project?.lastStep ?? 0);
    const fromForm = Number(this.form?.get("lastStep")?.value ?? 0);
    const projectStep = Number.isFinite(fromProject) ? fromProject : 0;
    const formStep = Number.isFinite(fromForm) ? fromForm : 0;
    return Math.max(projectStep, formStep);
  }
  rememberWizardProgress(progress, status) {
    this._setup.setProject(__spreadValues(__spreadProps(__spreadValues({}, this._setup.project || {}), {
      currentStep: progress.currentStep,
      lastStep: progress.lastStep
    }), status ? { status } : {}));
    this.form?.get("currentStep")?.setValue(progress.currentStep, { emitEvent: false });
    this.form?.get("lastStep")?.setValue(progress.lastStep, { emitEvent: false });
  }
  saveDraft(progress) {
    if (!this._hydrated || !this.form || this.saving())
      return of();
    this.saving.set(true);
    const payload = this._prepareDraftData(this.form.getRawValue(), progress);
    const request$ = this.projectId !== "new" ? this._setup.updateProject(this.projectId, payload) : this._setup.createProject(payload);
    return request$.pipe(catchError((err) => throwError(() => err)));
  }
  nextStep() {
    if (!this.isFormValidForStep(this.stepIndex))
      return;
    if (this.stepIndex === this.steps.length - 1) {
      this._router.navigate(["/human-authn/projects"]);
      return;
    }
    this._router.navigate(["/human-authn/projects", this.projectId, "setup", this.stepIndex + 1]);
  }
  previousStep() {
    if (this.stepIndex === 0) {
      this._router.navigate(["/human-authn/projects"]);
      return;
    }
    this._router.navigate(["/human-authn/projects", this.projectId, "setup", this.stepIndex - 1]);
  }
  goToStep(step) {
    if (this.saving() || this.loading())
      return;
    if (step > this.stepIndex && !this.isFormValidForStep(this.stepIndex))
      return;
    this._router.navigate(["/human-authn/projects", this.projectId, "setup", step]);
  }
  saveProject(progress) {
    if (!this._hydrated || !this.form || this.saving() || !this.isFormValidForStep(this.stepIndex))
      return of();
    this.saving.set(true);
    const payload = __spreadValues(__spreadValues({}, this._preparePayload(this.form.getRawValue())), progress ? { currentStep: progress.currentStep, lastStep: progress.lastStep } : {});
    const request$ = this.projectId !== "new" ? this._setup.updateProject(this.projectId, payload) : this._setup.createProject(payload);
    return request$.pipe(catchError((err) => throwError(() => err)));
  }
  updateProjectId(id) {
    this.projectId = id;
    this._setup.setProjectId(id);
  }
  documentsFormGroup() {
    return this.form.get("projectFlow.documents");
  }
  /**
   * Stores the project identity without the current step's flow section.
   * Create seeds a draft HumanAuthn flow on the server; an update leaves the saved flow in place.
   */
  _prepareDraftData(value, progress) {
    const language = `${value?.defaultLanguage || "en"}`;
    return {
      allowedCountries: Array.isArray(value?.allowedCountries) ? value.allowedCountries : [],
      branding: value?.branding,
      contactEmail: `${value?.contactEmail ?? ""}`,
      currentStep: progress.currentStep,
      dataProtection: value?.dataProtection,
      defaultLanguage: language || "en",
      lastStep: progress.lastStep,
      name: draftProjectName(value?.name, this._transloco.translate("humanAuthnProjects.setup.draft_name")),
      privacyUrl: `${value?.privacyUrl ?? ""}`,
      status: "draft",
      target: "personal",
      termsAndConditionsUrl: `${value?.termsAndConditionsUrl ?? ""}`,
      version: 3
    };
  }
  _flowIdentity(projectFlow) {
    return {
      type: "humanAuthn",
      target: "personal",
      status: projectFlow?.status || "draft",
      version: 3
    };
  }
  _preparePayload(value) {
    const { projectFlow, branding, dataProtection } = value;
    const flow = this._flowIdentity(projectFlow);
    if (this.stepIndex === 0) {
      return {
        name: value.name,
        allowedCountries: value.allowedCountries,
        contactEmail: value.contactEmail,
        defaultLanguage: value.defaultLanguage,
        privacyUrl: value.privacyUrl,
        termsAndConditionsUrl: value.termsAndConditionsUrl,
        currentStep: this.stepIndex + 1,
        dataProtection,
        target: "personal",
        projectFlow: __spreadProps(__spreadValues({}, flow), {
          humanAuthn: this._humanAuthnPayload(projectFlow),
          steps: projectFlow?.steps || { document: "skip", humanAuthn: "mandatory" }
        })
      };
    }
    if (this.stepIndex === 1)
      return { projectFlow: __spreadProps(__spreadValues({}, flow), { signUpForm: projectFlow.signUpForm }) };
    if (this.stepIndex === 2) {
      return {
        projectFlow: __spreadProps(__spreadValues({}, flow), {
          steps: projectFlow.steps,
          documents: projectFlow.steps.document === "skip" ? {} : projectFlow.documents
        })
      };
    }
    if (this.stepIndex === 3) {
      return {
        projectFlow: __spreadProps(__spreadValues({}, flow), {
          humanAuthn: this._humanAuthnPayload(projectFlow),
          steps: projectFlow.steps
        })
      };
    }
    if (this.stepIndex === 4)
      return { projectFlow: __spreadProps(__spreadValues({}, flow), { storage: projectFlow.storage }) };
    if (this.stepIndex === 5)
      return { projectFlow: __spreadProps(__spreadValues({}, flow), { integrations: projectFlow.integrations }) };
    return { branding };
  }
  _defaultPublicDataKeys(flow) {
    const available = this._availablePublicDataKeys(flow);
    if (!Array.isArray(flow?.humanAuthn?.publicDataKeys))
      return available;
    return flow.humanAuthn.publicDataKeys.filter((key) => available.includes(key));
  }
  _bindPublicDataKeyAvailability(flow) {
    const seen = new Set(this._availablePublicDataKeys(flow));
    const sync = () => {
      const available = this._availablePublicDataKeys(this.form.get("projectFlow")?.value);
      const control = this.form.get("projectFlow.humanAuthn.publicDataKeys");
      const current = control?.value || [];
      const added = available.filter((key) => !seen.has(key));
      available.forEach((key) => seen.add(key));
      const next = [.../* @__PURE__ */ new Set([...current.filter((key) => available.includes(key)), ...added])];
      if (JSON.stringify(next) !== JSON.stringify(current))
        control?.setValue(next);
    };
    this.form.get("projectFlow.signUpForm")?.valueChanges.pipe(takeUntil(this._unsub$)).subscribe(sync);
    this.form.get("projectFlow.steps.document")?.valueChanges.pipe(takeUntil(this._unsub$)).subscribe(sync);
  }
  _availablePublicDataKeys(flow) {
    const keys = [];
    if (flow?.signUpForm?.fullName !== false)
      keys.push("fullName");
    if (flow?.signUpForm?.email)
      keys.push("email");
    if (flow?.signUpForm?.phone)
      keys.push("phone");
    if (flow?.steps?.document && flow.steps.document !== "skip")
      keys.push("documentNumber");
    return keys;
  }
  _humanAuthnPayload(projectFlow) {
    const humanAuthn = projectFlow?.humanAuthn || {};
    const mode = humanAuthn.mode === "active_user" ? "active_user" : "standard";
    return {
      mode,
      livenessAtCreation: !!humanAuthn.livenessAtCreation,
      outputFormat: humanAuthn.outputFormat === "qrCode" ? "qrCode" : "string",
      tolerance: humanAuthn.tolerance || (mode === "active_user" ? "HARDENED" : "REGULAR"),
      compareMinScore: humanAuthn.compareMinScore ?? 0.85,
      verifierKey: `${humanAuthn.verifierKey || ""}`.trim(),
      publicDataKeys: this._availablePublicDataKeys(projectFlow).filter((key) => (humanAuthn.publicDataKeys || ["fullName"]).includes(key))
    };
  }
  static {
    this.\u0275fac = function HumanAuthnSetupHostComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HumanAuthnSetupHostComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HumanAuthnSetupHostComponent, selectors: [["human-authn-setup-host"]], hostAttrs: [1, "flex", "min-w-0", "w-full", "flex-auto"], decls: 1, vars: 0, consts: [[4, "transloco"], [1, "flex", "min-h-screen", "min-w-0", "w-full", "flex-auto", "flex-col", "bg-stone-50", "dark:bg-gray-950"], [1, "border-b", "border-stone-200", "bg-white", "px-5", "py-6", "dark:border-gray-800", "dark:bg-gray-950", "md:px-8"], [1, "flex", "w-full", "flex-col", "gap-4"], [1, "flex", "items-center", "gap-2", "text-xs", "text-stone-500"], ["routerLink", "/human-authn/projects", 1, "underline"], [1, "flex", "items-center", "gap-3"], ["mat-icon-button", "", "type", "button", 3, "click"], [1, "text-2xl", "font-semibold"], [1, "flex", "flex-wrap", "gap-2"], ["type", "button", 1, "rounded-full", "border", "px-3", "py-1", "text-xs", 3, "border-stone-900", "border-stone-200", "disabled"], [1, "grid", "w-full", "min-w-0", "flex-auto", "gap-8", "px-5", "py-8", "md:px-8", "xl:grid-cols-1"], ["diameter", "40", "mode", "indeterminate"], [1, "text-sm", "text-stone-600"], [1, "min-w-0", "w-full"], ["type", "button", 1, "rounded-full", "border", "px-3", "py-1", "text-xs", 3, "click", "disabled"], [3, "form"], [3, "form", "formGroup", "loading", "saving"], [3, "form", "loading", "saving"], [1, "mt-8", "flex", "justify-between"], ["mat-stroked-button", "", "type", "button", 3, "click"], ["mat-flat-button", "", "color", "primary", "type", "button", 3, "click", "disabled"]], template: function HumanAuthnSetupHostComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, HumanAuthnSetupHostComponent_ng_container_0_Template, 24, 4, "ng-container", 0);
      }
    }, dependencies: [
      CommonModule,
      ReactiveFormsModule,
      NgControlStatusGroup,
      FormGroupDirective,
      RouterModule,
      RouterLink,
      MatButtonModule,
      MatButton,
      MatIconButton,
      MatIconModule,
      MatIcon,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatSnackBarModule,
      TranslocoModule,
      TranslocoDirective,
      HumanAuthnDocumentsStepComponent,
      HumanAuthnDetailsStepComponent,
      HumanAuthnSignupStepComponent,
      HumanAuthnModeStepComponent,
      HumanAuthnUiStepComponent,
      HumanAuthnStorageStepComponent,
      HumanAuthnIntegrationsStepComponent
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HumanAuthnSetupHostComponent, [{
    type: Component,
    args: [{ selector: "human-authn-setup-host", standalone: true, imports: [
      CommonModule,
      ReactiveFormsModule,
      RouterModule,
      MatButtonModule,
      MatIconModule,
      MatProgressSpinnerModule,
      MatSnackBarModule,
      TranslocoModule,
      HumanAuthnDocumentsStepComponent,
      HumanAuthnDetailsStepComponent,
      HumanAuthnSignupStepComponent,
      HumanAuthnModeStepComponent,
      HumanAuthnUiStepComponent,
      HumanAuthnStorageStepComponent,
      HumanAuthnIntegrationsStepComponent
    ], host: {
      class: "flex min-w-0 w-full flex-auto"
    }, template: `<ng-container *transloco="let t">\r
    <div class="flex min-h-screen min-w-0 w-full flex-auto flex-col bg-stone-50 dark:bg-gray-950">\r
        <header class="border-b border-stone-200 bg-white px-5 py-6 dark:border-gray-800 dark:bg-gray-950 md:px-8">\r
            <div class="flex w-full flex-col gap-4">\r
                <div class="flex items-center gap-2 text-xs text-stone-500">\r
                    <a routerLink="/human-authn/projects" class="underline">{{ t('humanAuthnProjects.title') }}</a>\r
                    <span>/</span>\r
                    <span>{{ t('humanAuthnProjects.setup.title') }}</span>\r
                </div>\r
                <div class="flex items-center gap-3">\r
                    <button mat-icon-button type="button" (click)="previousStep()">\r
                        <mat-icon>arrow_back</mat-icon>\r
                    </button>\r
                    <h1 class="text-2xl font-semibold">\r
                        {{ projectId === 'new' ? t('humanAuthnProjects.setup.newProject') : form?.get('name')?.value }}\r
                    </h1>\r
                </div>\r
                <nav class="flex flex-wrap gap-2">\r
                    @for (step of steps; track step; let i = $index) {\r
                        <button\r
                            type="button"\r
                            class="rounded-full border px-3 py-1 text-xs"\r
                            [class.border-stone-900]="i === stepIndex"\r
                            [class.border-stone-200]="i !== stepIndex"\r
                            [disabled]="saving() || loading()"\r
                            (click)="goToStep(i)"\r
                        >\r
                            {{ t(step) }}\r
                        </button>\r
                    }\r
                </nav>\r
            </div>\r
        </header>\r
\r
        <main\r
            class="grid w-full min-w-0 flex-auto gap-8 px-5 py-8 md:px-8 xl:grid-cols-1"\r
        >\r
            @if (loading()) {\r
                <mat-progress-spinner diameter="40" mode="indeterminate"></mat-progress-spinner>\r
            } @else if (loadFailed()) {\r
                <p class="text-sm text-stone-600">{{ t('humanAuthnProjects.loadError') }}</p>\r
            } @else if (form) {\r
                <section class="min-w-0 w-full">\r
                    @if (stepIndex === 0) {\r
                        <human-authn-details-step [form]="form"></human-authn-details-step>\r
                    }\r
                    @if (stepIndex === 1) {\r
                        <human-authn-signup-step [form]="form"></human-authn-signup-step>\r
                    }\r
                    @if (stepIndex === 2) {\r
                        <human-authn-documents-step\r
                            [form]="form"\r
                            [formGroup]="documentsFormGroup()"\r
                            [loading]="loading()"\r
                            [saving]="saving()"\r
                        ></human-authn-documents-step>\r
                    }\r
                    @if (stepIndex === 3) {\r
                        <human-authn-mode-step [form]="form"></human-authn-mode-step>\r
                    }\r
                    @if (stepIndex === 4) {\r
                        <human-authn-storage-step [form]="form"></human-authn-storage-step>\r
                    }\r
                    @if (stepIndex === 5) {\r
                        <human-authn-integrations-step [form]="form"></human-authn-integrations-step>\r
                    }\r
                    @if (stepIndex === 6) {\r
                        <human-authn-ui-step [form]="form" [loading]="loading()" [saving]="saving()"></human-authn-ui-step>\r
                    }\r
                    <div class="mt-8 flex justify-between">\r
                        <button mat-stroked-button type="button" (click)="previousStep()">{{ t('humanAuthnProjects.setup.back') }}</button>\r
                        <button mat-flat-button color="primary" type="button" [disabled]="!isFormValidForStep(stepIndex) || saving()" (click)="nextStep()">\r
                            {{ stepIndex === steps.length - 1 ? t('humanAuthnProjects.setup.finish') : t('humanAuthnProjects.setup.next') }}\r
                        </button>\r
                    </div>\r
                </section>\r
            }\r
        </main>\r
    </div>\r
</ng-container>\r
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HumanAuthnSetupHostComponent, { className: "HumanAuthnSetupHostComponent", filePath: "src/app/modules/human-authn/projects/setup/human-authn-setup-host.component.ts", lineNumber: 58 });
})();
export {
  HumanAuthnSetupHostComponent
};
//# sourceMappingURL=chunk-ZN52QXOI.js.map
