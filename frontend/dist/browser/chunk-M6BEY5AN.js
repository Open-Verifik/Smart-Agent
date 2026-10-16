import {
  extractRequiredFieldsFromConfig,
  getStepCompatibilityViews
} from "./chunk-T3ZUDNVS.js";
import {
  SmartBatchService
} from "./chunk-QIGUIW2F.js";
import {
  isClientVisibleBatchDependencyField
} from "./chunk-USONFPXP.js";
import {
  MatSnackBar,
  MatSnackBarModule
} from "./chunk-TXEVGTMX.js";
import "./chunk-JURKDGMK.js";
import {
  MatSelectModule
} from "./chunk-RM2644J3.js";
import {
  MatInputModule
} from "./chunk-AICPTZP5.js";
import "./chunk-VURK6DEU.js";
import "./chunk-E7WYNRWC.js";
import {
  MatFormFieldModule
} from "./chunk-HWNQWMK7.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-UUIVQBYS.js";
import "./chunk-OIBNGD5S.js";
import "./chunk-WOW6NB5H.js";
import {
  MatButtonModule
} from "./chunk-YSJP7SXK.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-CQIQSUBU.js";
import "./chunk-J762DGD5.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-DVRFI3SJ.js";
import {
  TranslocoDirective,
  TranslocoModule,
  TranslocoService,
  takeUntilDestroyed
} from "./chunk-R5W3A6HI.js";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-HYFP557I.js";
import "./chunk-KTYFS5OT.js";
import {
  CommonModule,
  Component,
  DestroyRef,
  NgClass,
  NgForOf,
  NgIf,
  NgTemplateOutlet,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-PNPEHISK.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-F5M2C4EZ.js";

// src/app/modules/smart-batch/quick-validate/quick-validate.component.ts
var _c0 = (a0) => ["/smart-batch", a0];
var _c1 = (a0, a1) => ["/smart-batch", a0, "batch", a1];
var _c2 = () => ({ tab: "templates" });
var _c3 = () => [];
var _c4 = (a0, a1) => ({ whenField: a0, values: a1 });
var _c5 = (a0) => ({ sequence: a0 });
var _c6 = (a0) => ({ field: a0 });
var _c7 = (a0) => ({ values: a0 });
var _forTrack0 = ($index, $item) => $item.field;
var _forTrack1 = ($index, $item) => $item.sequence;
function QuickValidateComponent_ng_container_0_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275element(2, "mat-icon", 9);
    \u0275\u0275elementStart(3, "a", 21);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(4, _c0, ctx_r2.configId()));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2("smartBatchLanding.title"));
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction2(6, _c1, ctx_r2.configId(), ctx_r2.batchId()));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.pageSubtitle());
  }
}
function QuickValidateComponent_ng_container_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275element(2, "mat-icon", 9);
    \u0275\u0275elementStart(3, "a", 21);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2("smartBatchLanding.title"));
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(3, _c0, ctx_r2.configId()));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.pageSubtitle());
  }
}
function QuickValidateComponent_ng_container_0_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(2, _c2));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2("smartBatchLanding.title"));
  }
}
function QuickValidateComponent_ng_container_0_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", t_r2("batchProcessing.addOneRecordDesc"), " ");
  }
}
function QuickValidateComponent_ng_container_0_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.pageSubtitle(), " ");
  }
}
function QuickValidateComponent_ng_container_0_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275element(1, "mat-spinner", 23);
    \u0275\u0275elementStart(2, "p", 24);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r2("smartBatchLanding.loadingConfigurations"), " ");
  }
}
function QuickValidateComponent_ng_container_0_Conditional_27_Conditional_17_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 41);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function QuickValidateComponent_ng_container_0_Conditional_27_Conditional_17_For_2_Conditional_4_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r6 = ctx.$implicit;
    \u0275\u0275property("value", opt_r6);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r6);
  }
}
function QuickValidateComponent_ng_container_0_Conditional_27_Conditional_17_For_2_Conditional_4_Conditional_4_For_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 50);
    \u0275\u0275text(1, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 51)(3, "span", 52);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const view_r7 = \u0275\u0275nextContext().$implicit;
    const t_r2 = \u0275\u0275nextContext(6).$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(view_r7.stepName);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u2014 ", t_r2("smartBatchSystemPresets.stepWillRun"), " ");
  }
}
function QuickValidateComponent_ng_container_0_Conditional_27_Conditional_17_For_2_Conditional_4_Conditional_4_For_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 53);
    \u0275\u0275text(1, "skip_next");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 54)(3, "span", 52);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const view_r7 = \u0275\u0275nextContext().$implicit;
    const t_r2 = \u0275\u0275nextContext(6).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(view_r7.stepName);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" \u2014 ", t_r2("smartBatchSystemPresets.stepWillSkip"), ": ", ctx_r2.stepSkipReason(view_r7), " ");
  }
}
function QuickValidateComponent_ng_container_0_Conditional_27_Conditional_17_For_2_Conditional_4_Conditional_4_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 49);
    \u0275\u0275template(1, QuickValidateComponent_ng_container_0_Conditional_27_Conditional_17_For_2_Conditional_4_Conditional_4_For_5_Conditional_1_Template, 6, 2)(2, QuickValidateComponent_ng_container_0_Conditional_27_Conditional_17_For_2_Conditional_4_Conditional_4_For_5_Conditional_2_Template, 6, 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const view_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(view_r7.compatible ? 1 : 2);
  }
}
function QuickValidateComponent_ng_container_0_Conditional_27_Conditional_17_For_2_Conditional_4_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46)(1, "p", 47);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ul", 48);
    \u0275\u0275repeaterCreate(4, QuickValidateComponent_ng_container_0_Conditional_27_Conditional_17_For_2_Conditional_4_Conditional_4_For_5_Template, 3, 1, "li", 49, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(5).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r2("smartBatchSystemPresets.documentTypeCompatibilityTitle"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.stepCompatibilityViews());
  }
}
function QuickValidateComponent_ng_container_0_Conditional_27_Conditional_17_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "select", 43);
    \u0275\u0275element(1, "option", 44);
    \u0275\u0275repeaterCreate(2, QuickValidateComponent_ng_container_0_Conditional_27_Conditional_17_For_2_Conditional_4_For_3_Template, 2, 2, "option", 45, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, QuickValidateComponent_ng_container_0_Conditional_27_Conditional_17_For_2_Conditional_4_Conditional_4_Template, 6, 1, "div", 46);
  }
  if (rf & 2) {
    const field_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275property("id", field_r8.field)("formControlName", field_r8.field);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(field_r8.enumValues);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(field_r8.field === "documentType" && ctx_r2.showStepCompatibility() ? 4 : -1);
  }
}
function QuickValidateComponent_ng_container_0_Conditional_27_Conditional_17_For_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "input", 42);
  }
  if (rf & 2) {
    const field_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("id", field_r8.field)("formControlName", field_r8.field)("placeholder", field_r8.field);
  }
}
function QuickValidateComponent_ng_container_0_Conditional_27_Conditional_17_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "label", 40);
    \u0275\u0275text(2);
    \u0275\u0275template(3, QuickValidateComponent_ng_container_0_Conditional_27_Conditional_17_For_2_Conditional_3_Template, 2, 0, "span", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, QuickValidateComponent_ng_container_0_Conditional_27_Conditional_17_For_2_Conditional_4_Template, 5, 3)(5, QuickValidateComponent_ng_container_0_Conditional_27_Conditional_17_For_2_Conditional_5_Template, 1, 3, "input", 42);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const field_r8 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("for", field_r8.field);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.fieldLabel(field_r8), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(field_r8.required ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((field_r8.enumValues == null ? null : field_r8.enumValues.length) ? 4 : 5);
  }
}
function QuickValidateComponent_ng_container_0_Conditional_27_Conditional_17_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 39);
  }
}
function QuickValidateComponent_ng_container_0_Conditional_27_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 37);
    \u0275\u0275listener("ngSubmit", function QuickValidateComponent_ng_container_0_Conditional_27_Conditional_17_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.submit());
    });
    \u0275\u0275repeaterCreate(1, QuickValidateComponent_ng_container_0_Conditional_27_Conditional_17_For_2_Template, 6, 4, "div", null, _forTrack0);
    \u0275\u0275elementStart(3, "button", 38);
    \u0275\u0275template(4, QuickValidateComponent_ng_container_0_Conditional_27_Conditional_17_Conditional_4_Template, 1, 0, "mat-spinner", 39);
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r2.form);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.requiredFields());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.form.invalid || ctx_r2.isSubmitting());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isSubmitting() ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2("smartBatchSystemPresets.runValidation"));
  }
}
function QuickValidateComponent_ng_container_0_Conditional_27_div_18_ng_template_1_mat_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 72);
    \u0275\u0275text(1, "priority_high");
    \u0275\u0275elementEnd();
  }
}
function QuickValidateComponent_ng_container_0_Conditional_27_div_18_ng_template_1_mat_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 72);
    \u0275\u0275text(1, "rule_folder");
    \u0275\u0275elementEnd();
  }
}
function QuickValidateComponent_ng_container_0_Conditional_27_div_18_ng_template_1_mat_icon_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 72);
    \u0275\u0275text(1, "remove");
    \u0275\u0275elementEnd();
  }
}
function QuickValidateComponent_ng_container_0_Conditional_27_div_18_ng_template_1_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 73);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2("createBatch.required"));
  }
}
function QuickValidateComponent_ng_container_0_Conditional_27_div_18_ng_template_1_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 74);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2("createBatch.fieldConditional"));
  }
}
function QuickValidateComponent_ng_container_0_Conditional_27_div_18_ng_template_1_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 75);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2("createBatch.optional"));
  }
}
function QuickValidateComponent_ng_container_0_Conditional_27_div_18_ng_template_1_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 76);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u2022 ", t_r2("createBatch.options"), " ");
  }
}
function QuickValidateComponent_ng_container_0_Conditional_27_div_18_ng_template_1_p_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 77);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const field_r9 = \u0275\u0275nextContext().field;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", field_r9.description, " ");
  }
}
function QuickValidateComponent_ng_container_0_Conditional_27_div_18_ng_template_1_p_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 78);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_8_0;
    const field_r9 = \u0275\u0275nextContext().field;
    const t_r2 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r2("createBatch.fieldConditionalDetail", \u0275\u0275pureFunction2(2, _c4, (tmp_8_0 = field_r9.requiredWhen == null ? null : field_r9.requiredWhen.field) !== null && tmp_8_0 !== void 0 ? tmp_8_0 : "", ((field_r9.requiredWhen == null ? null : field_r9.requiredWhen.in) || \u0275\u0275pureFunction0(1, _c3)).join(", "))), " ");
  }
}
function QuickValidateComponent_ng_container_0_Conditional_27_div_18_ng_template_1_div_15_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 81);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const val_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", val_r10, " ");
  }
}
function QuickValidateComponent_ng_container_0_Conditional_27_div_18_ng_template_1_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 79);
    \u0275\u0275template(1, QuickValidateComponent_ng_container_0_Conditional_27_div_18_ng_template_1_div_15_span_1_Template, 2, 1, "span", 80);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const field_r9 = \u0275\u0275nextContext().field;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", field_r9.enumValues);
  }
}
function QuickValidateComponent_ng_container_0_Conditional_27_div_18_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60)(1, "div", 61);
    \u0275\u0275template(2, QuickValidateComponent_ng_container_0_Conditional_27_div_18_ng_template_1_mat_icon_2_Template, 2, 0, "mat-icon", 62)(3, QuickValidateComponent_ng_container_0_Conditional_27_div_18_ng_template_1_mat_icon_3_Template, 2, 0, "mat-icon", 62)(4, QuickValidateComponent_ng_container_0_Conditional_27_div_18_ng_template_1_mat_icon_4_Template, 2, 0, "mat-icon", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 15)(6, "div", 63)(7, "code", 64);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, QuickValidateComponent_ng_container_0_Conditional_27_div_18_ng_template_1_span_9_Template, 2, 1, "span", 65)(10, QuickValidateComponent_ng_container_0_Conditional_27_div_18_ng_template_1_span_10_Template, 2, 1, "span", 66)(11, QuickValidateComponent_ng_container_0_Conditional_27_div_18_ng_template_1_span_11_Template, 2, 1, "span", 67)(12, QuickValidateComponent_ng_container_0_Conditional_27_div_18_ng_template_1_span_12_Template, 2, 1, "span", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, QuickValidateComponent_ng_container_0_Conditional_27_div_18_ng_template_1_p_13_Template, 2, 1, "p", 69)(14, QuickValidateComponent_ng_container_0_Conditional_27_div_18_ng_template_1_p_14_Template, 2, 5, "p", 70)(15, QuickValidateComponent_ng_container_0_Conditional_27_div_18_ng_template_1_div_15_Template, 2, 1, "div", 71);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const field_r9 = ctx.field;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngClass", field_r9.required ? "border-orange-200 dark:border-orange-800/50" : ctx_r2.fieldHasConditionalRule(field_r9) ? "border-sky-200 dark:border-sky-800/50" : "border-stone-200 dark:border-gray-700");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", field_r9.required ? "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400" : ctx_r2.fieldHasConditionalRule(field_r9) ? "bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300" : "bg-stone-100 text-stone-500 dark:bg-gray-700");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", field_r9.required);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !field_r9.required && ctx_r2.fieldHasConditionalRule(field_r9));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !field_r9.required && !ctx_r2.fieldHasConditionalRule(field_r9));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(field_r9.field);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", field_r9.required);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !field_r9.required && ctx_r2.fieldHasConditionalRule(field_r9));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !field_r9.required && !ctx_r2.fieldHasConditionalRule(field_r9));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", field_r9.enumValues == null ? null : field_r9.enumValues.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", field_r9.description);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.fieldHasConditionalRule(field_r9) && !field_r9.required);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", field_r9.enumValues == null ? null : field_r9.enumValues.length);
  }
}
function QuickValidateComponent_ng_container_0_Conditional_27_div_18_div_9_code_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "code", 88);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const view_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(view_r11.code);
  }
}
function QuickValidateComponent_ng_container_0_Conditional_27_div_18_div_9_ng_container_7_ng_container_11_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function QuickValidateComponent_ng_container_0_Conditional_27_div_18_div_9_ng_container_7_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, QuickValidateComponent_ng_container_0_Conditional_27_div_18_div_9_ng_container_7_ng_container_11_ng_container_1_Template, 1, 0, "ng-container", 98);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const field_r12 = ctx.$implicit;
    \u0275\u0275nextContext(3);
    const expectedFieldCard_r13 = \u0275\u0275reference(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", expectedFieldCard_r13)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c6, field_r12));
  }
}
function QuickValidateComponent_ng_container_0_Conditional_27_div_18_div_9_ng_container_7_p_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 99);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const values_r14 = ctx.ngIf;
    const t_r2 = \u0275\u0275nextContext(5).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r2("createBatch.dateOfBirthConditionalHint", \u0275\u0275pureFunction1(1, _c7, values_r14)), " ");
  }
}
function QuickValidateComponent_ng_container_0_Conditional_27_div_18_div_9_ng_container_7_ng_container_17_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function QuickValidateComponent_ng_container_0_Conditional_27_div_18_div_9_ng_container_7_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, QuickValidateComponent_ng_container_0_Conditional_27_div_18_div_9_ng_container_7_ng_container_17_ng_container_1_Template, 1, 0, "ng-container", 98);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const field_r15 = ctx.$implicit;
    \u0275\u0275nextContext(3);
    const expectedFieldCard_r13 = \u0275\u0275reference(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", expectedFieldCard_r13)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c6, field_r15));
  }
}
function QuickValidateComponent_ng_container_0_Conditional_27_div_18_div_9_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 89)(2, "mat-icon", 90);
    \u0275\u0275text(3, "alt_route");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 91);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 92)(7, "div", 93)(8, "h6", 94);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 95);
    \u0275\u0275template(11, QuickValidateComponent_ng_container_0_Conditional_27_div_18_div_9_ng_container_7_ng_container_11_Template, 2, 4, "ng-container", 96);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 93)(13, "h6", 94);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, QuickValidateComponent_ng_container_0_Conditional_27_div_18_div_9_ng_container_7_p_15_Template, 2, 3, "p", 97);
    \u0275\u0275elementStart(16, "div", 95);
    \u0275\u0275template(17, QuickValidateComponent_ng_container_0_Conditional_27_div_18_div_9_ng_container_7_ng_container_17_Template, 2, 4, "ng-container", 96);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const xor_r16 = ctx.ngIf;
    const t_r2 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", t_r2("createBatch.endpointXorRule"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r2("createBatch.searchModeOptionFullName"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", xor_r16.nameFields);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r2("createBatch.searchModeOptionDocument"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", xor_r16.dobWhenValues);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", xor_r16.documentFields);
  }
}
function QuickValidateComponent_ng_container_0_Conditional_27_div_18_div_9_ng_template_8_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p", 100);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(5).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r2("createBatch.endpointNoFieldsRequired"), " ");
  }
}
function QuickValidateComponent_ng_container_0_Conditional_27_div_18_div_9_ng_template_8_ng_template_1_div_1_ng_container_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function QuickValidateComponent_ng_container_0_Conditional_27_div_18_div_9_ng_template_8_ng_template_1_div_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, QuickValidateComponent_ng_container_0_Conditional_27_div_18_div_9_ng_template_8_ng_template_1_div_1_ng_container_4_ng_container_1_Template, 1, 0, "ng-container", 98);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const field_r17 = ctx.$implicit;
    \u0275\u0275nextContext(5);
    const expectedFieldCard_r13 = \u0275\u0275reference(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", expectedFieldCard_r13)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c6, field_r17));
  }
}
function QuickValidateComponent_ng_container_0_Conditional_27_div_18_div_9_ng_template_8_ng_template_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "h6", 102);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 95);
    \u0275\u0275template(4, QuickValidateComponent_ng_container_0_Conditional_27_div_18_div_9_ng_template_8_ng_template_1_div_1_ng_container_4_Template, 2, 4, "ng-container", 96);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const view_r11 = \u0275\u0275nextContext(3).$implicit;
    const t_r2 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r2("createBatch.endpointRequiredFieldsLabel"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", view_r11.requiredFields);
  }
}
function QuickValidateComponent_ng_container_0_Conditional_27_div_18_div_9_ng_template_8_ng_template_1_div_2_ng_container_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function QuickValidateComponent_ng_container_0_Conditional_27_div_18_div_9_ng_template_8_ng_template_1_div_2_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, QuickValidateComponent_ng_container_0_Conditional_27_div_18_div_9_ng_template_8_ng_template_1_div_2_ng_container_4_ng_container_1_Template, 1, 0, "ng-container", 98);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const field_r18 = ctx.$implicit;
    \u0275\u0275nextContext(5);
    const expectedFieldCard_r13 = \u0275\u0275reference(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", expectedFieldCard_r13)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c6, field_r18));
  }
}
function QuickValidateComponent_ng_container_0_Conditional_27_div_18_div_9_ng_template_8_ng_template_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "h6", 102);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 95);
    \u0275\u0275template(4, QuickValidateComponent_ng_container_0_Conditional_27_div_18_div_9_ng_template_8_ng_template_1_div_2_ng_container_4_Template, 2, 4, "ng-container", 96);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const view_r11 = \u0275\u0275nextContext(3).$implicit;
    const t_r2 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r2("createBatch.endpointConditionalFieldsLabel"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", view_r11.conditionalFields);
  }
}
function QuickValidateComponent_ng_container_0_Conditional_27_div_18_div_9_ng_template_8_ng_template_1_div_3_ng_container_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function QuickValidateComponent_ng_container_0_Conditional_27_div_18_div_9_ng_template_8_ng_template_1_div_3_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, QuickValidateComponent_ng_container_0_Conditional_27_div_18_div_9_ng_template_8_ng_template_1_div_3_ng_container_4_ng_container_1_Template, 1, 0, "ng-container", 98);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const field_r19 = ctx.$implicit;
    \u0275\u0275nextContext(5);
    const expectedFieldCard_r13 = \u0275\u0275reference(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", expectedFieldCard_r13)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c6, field_r19));
  }
}
function QuickValidateComponent_ng_container_0_Conditional_27_div_18_div_9_ng_template_8_ng_template_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "h6", 102);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 95);
    \u0275\u0275template(4, QuickValidateComponent_ng_container_0_Conditional_27_div_18_div_9_ng_template_8_ng_template_1_div_3_ng_container_4_Template, 2, 4, "ng-container", 96);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const view_r11 = \u0275\u0275nextContext(3).$implicit;
    const t_r2 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r2("createBatch.endpointOptionalFieldsLabel"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", view_r11.optionalFields);
  }
}
function QuickValidateComponent_ng_container_0_Conditional_27_div_18_div_9_ng_template_8_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58);
    \u0275\u0275template(1, QuickValidateComponent_ng_container_0_Conditional_27_div_18_div_9_ng_template_8_ng_template_1_div_1_Template, 5, 2, "div", 101)(2, QuickValidateComponent_ng_container_0_Conditional_27_div_18_div_9_ng_template_8_ng_template_1_div_2_Template, 5, 2, "div", 101)(3, QuickValidateComponent_ng_container_0_Conditional_27_div_18_div_9_ng_template_8_ng_template_1_div_3_Template, 5, 2, "div", 101);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const view_r11 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", view_r11.requiredFields.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", view_r11.conditionalFields.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", view_r11.optionalFields.length > 0);
  }
}
function QuickValidateComponent_ng_container_0_Conditional_27_div_18_div_9_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, QuickValidateComponent_ng_container_0_Conditional_27_div_18_div_9_ng_template_8_ng_container_0_Template, 3, 1, "ng-container", 87)(1, QuickValidateComponent_ng_container_0_Conditional_27_div_18_div_9_ng_template_8_ng_template_1_Template, 4, 3, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const nonEmptyFlat_r20 = \u0275\u0275reference(2);
    const view_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("ngIf", view_r11.requiredFields.length === 0 && view_r11.conditionalFields.length === 0 && view_r11.optionalFields.length === 0)("ngIfElse", nonEmptyFlat_r20);
  }
}
function QuickValidateComponent_ng_container_0_Conditional_27_div_18_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 82)(1, "div", 83)(2, "span", 84);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h5", 85);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, QuickValidateComponent_ng_container_0_Conditional_27_div_18_div_9_code_6_Template, 2, 1, "code", 86);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, QuickValidateComponent_ng_container_0_Conditional_27_div_18_div_9_ng_container_7_Template, 18, 6, "ng-container", 87)(8, QuickValidateComponent_ng_container_0_Conditional_27_div_18_div_9_ng_template_8_Template, 3, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const view_r11 = ctx.$implicit;
    const flatLayout_r21 = \u0275\u0275reference(9);
    const t_r2 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r2("createBatch.endpointStepLabel", \u0275\u0275pureFunction1(5, _c5, view_r11.sequence)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", view_r11.name, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", view_r11.code);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", view_r11.xor)("ngIfElse", flatLayout_r21);
  }
}
function QuickValidateComponent_ng_container_0_Conditional_27_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55);
    \u0275\u0275template(1, QuickValidateComponent_ng_container_0_Conditional_27_div_18_ng_template_1_Template, 16, 13, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementStart(3, "div")(4, "h4", 56);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 57);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 58);
    \u0275\u0275template(9, QuickValidateComponent_ng_container_0_Conditional_27_div_18_div_9_Template, 10, 7, "div", 59);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", t_r2("createBatch.expectedFieldsHeading"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r2("createBatch.perEndpointIntro"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.endpointFieldsViews());
  }
}
function QuickValidateComponent_ng_container_0_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25)(1, "button", 26);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 27);
    \u0275\u0275listener("click", function QuickValidateComponent_ng_container_0_Conditional_27_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.goToBatchUpload());
    });
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 28)(6, "div", 29)(7, "div", 30)(8, "div", 31)(9, "div", 32)(10, "mat-icon");
    \u0275\u0275text(11, "edit_document");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div")(13, "h2", 33);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p", 34);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(17, QuickValidateComponent_ng_container_0_Conditional_27_Conditional_17_Template, 7, 4, "form", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(18, QuickValidateComponent_ng_container_0_Conditional_27_div_18_Template, 10, 3, "div", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r2("smartBatchSystemPresets.singleRecordTab"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r2("smartBatchSystemPresets.batchUploadTab"), " ");
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1(" ", t_r2("smartBatchSystemPresets.inputDetailsTitle"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r2("smartBatchSystemPresets.inputDetailsDesc"), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.form ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.endpointFieldsViews().length > 0);
  }
}
function QuickValidateComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 4)(2, "header", 5)(3, "div", 6)(4, "div", 7)(5, "a", 8);
    \u0275\u0275text(6, "Verifik");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "mat-icon", 9);
    \u0275\u0275template(8, QuickValidateComponent_ng_container_0_Conditional_8_Template, 5, 9)(9, QuickValidateComponent_ng_container_0_Conditional_9_Template, 5, 5)(10, QuickValidateComponent_ng_container_0_Conditional_10_Template, 2, 3, "a", 10);
    \u0275\u0275element(11, "mat-icon", 9);
    \u0275\u0275elementStart(12, "span", 11);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 12)(15, "button", 13);
    \u0275\u0275listener("click", function QuickValidateComponent_ng_container_0_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goBack());
    });
    \u0275\u0275elementStart(16, "mat-icon", 14);
    \u0275\u0275text(17, "arrow_back");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 15)(19, "h1", 16);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "p", 17);
    \u0275\u0275template(22, QuickValidateComponent_ng_container_0_Conditional_22_Template, 1, 1)(23, QuickValidateComponent_ng_container_0_Conditional_23_Template, 1, 1);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(24, "main", 18)(25, "div", 19);
    \u0275\u0275template(26, QuickValidateComponent_ng_container_0_Conditional_26_Template, 4, 1, "div", 20)(27, QuickValidateComponent_ng_container_0_Conditional_27_Template, 19, 6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275conditional(ctx_r2.isAppendMode() ? 8 : ctx_r2.from() === "dashboard" ? 9 : 10);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(t_r2(ctx_r2.pageTitleKey()));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", t_r2("smartBatchSystemPresets.back"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", t_r2(ctx_r2.pageTitleKey()), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.isAppendMode() ? 22 : 23);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r2.isLoading() ? 26 : 27);
  }
}
var QuickValidateComponent = class _QuickValidateComponent {
  constructor() {
    this._smartBatchService = inject(SmartBatchService);
    this._route = inject(ActivatedRoute);
    this._router = inject(Router);
    this._formBuilder = inject(FormBuilder);
    this._snackBar = inject(MatSnackBar);
    this._transloco = inject(TranslocoService);
    this._destroyRef = inject(DestroyRef);
    this.configId = signal("");
    this.batchId = signal(null);
    this.configuration = signal(null);
    this.batch = signal(null);
    this.isLoading = signal(true);
    this.isSubmitting = signal(false);
    this.from = signal(null);
    this.documentTypeValue = signal("");
    this.isAppendMode = computed(() => !!this.batchId());
    this.requiredFields = computed(() => extractRequiredFieldsFromConfig(this.configuration()));
    this.hasDocumentTypeField = computed(() => this.requiredFields().some((field) => field.field === "documentType"));
    this.stepCompatibilityViews = computed(() => {
      const documentType = this.documentTypeValue().trim();
      if (!documentType)
        return [];
      const formValues = this.form?.value ?? {};
      return getStepCompatibilityViews(this.configuration(), __spreadProps(__spreadValues({}, formValues), {
        documentType
      }));
    });
    this.showStepCompatibility = computed(() => this.hasDocumentTypeField() && this.stepCompatibilityViews().length > 0);
    this.pageTitleKey = computed(() => this.isAppendMode() ? "batchProcessing.addOneRecordTitle" : "smartBatchSystemPresets.quickValidateTitle");
    this.pageSubtitle = computed(() => {
      if (this.isAppendMode()) {
        return this.batch()?.name ?? this.configuration()?.name ?? "";
      }
      return this.configuration()?.name ?? "";
    });
    this.endpointFieldsViews = computed(() => {
      const config = this.configuration();
      if (!config || !config.steps)
        return [];
      return config.steps.filter((step) => step.enabled !== false).map((step) => this.buildEndpointFieldsView(step));
    });
  }
  ngOnInit() {
    this._route.params.subscribe((params) => {
      const id = params["configId"];
      const batchId = params["batchId"] ?? null;
      this.configId.set(id);
      this.batchId.set(batchId);
      this._loadConfiguration(id);
      if (batchId) {
        this._loadBatch(batchId);
      } else {
        this.batch.set(null);
      }
    });
    this._route.queryParams.subscribe((queryParams) => {
      this.from.set(queryParams["from"] ?? null);
    });
  }
  _loadConfiguration(id) {
    this.isLoading.set(true);
    this._smartBatchService.getConfiguration(id).subscribe({
      next: (res) => {
        this.configuration.set(res.data);
        this._buildForm(this.requiredFields());
        this.isLoading.set(false);
      },
      error: () => {
        this.isLoading.set(false);
      }
    });
  }
  _loadBatch(id) {
    this._smartBatchService.getSmartBatch(id).subscribe({
      next: (res) => {
        this.batch.set(res.data);
      }
    });
  }
  _buildForm(fields) {
    const group = {};
    fields.forEach((field) => {
      const validators = field.required ? [Validators.required] : [];
      group[field.field] = ["", validators];
    });
    this.form = this._formBuilder.group(group);
    this.documentTypeValue.set("");
    const documentTypeControl = this.form.get("documentType");
    if (documentTypeControl) {
      documentTypeControl.valueChanges.pipe(takeUntilDestroyed(this._destroyRef)).subscribe((value) => {
        this.documentTypeValue.set(value != null ? String(value) : "");
      });
    }
  }
  goToBatchUpload() {
    if (this.isAppendMode()) {
      this._router.navigate([
        "/smart-batch",
        this.configId(),
        "batch",
        this.batchId(),
        "inputs"
      ]);
      return;
    }
    this._router.navigate(["/smart-batch", this.configId(), "batch", "new"]);
  }
  goBack() {
    if (this.isAppendMode()) {
      this._router.navigate(["/smart-batch", this.configId(), "batch", this.batchId()]);
      return;
    }
    if (this.from() === "dashboard") {
      this._router.navigate(["/smart-batch", this.configId()]);
      return;
    }
    this._router.navigate(["/smart-batch/workspace"], { queryParams: { tab: "templates" } });
  }
  submit() {
    if (!this.form || this.form.invalid || !this.configId()) {
      return;
    }
    this.isSubmitting.set(true);
    const row = __spreadValues({}, this.form.value);
    if (this.isAppendMode()) {
      this._submitAppend(row);
      return;
    }
    this._submitNewBatch(row);
  }
  _submitAppend(row) {
    const batchId = this.batchId();
    if (!batchId) {
      this.isSubmitting.set(false);
      return;
    }
    const priorTotalRows = this.batch()?.totalRows ?? 0;
    this._smartBatchService.appendSmartBatchRows(batchId, [row]).subscribe({
      next: () => {
        this._router.navigate(["/smart-batch", this.configId(), "batch", batchId], {
          queryParams: { autostart: "1", rowIndex: String(priorTotalRows) }
        });
      },
      error: () => {
        this.isSubmitting.set(false);
        this._snackBar.open(this._transloco.translate("batchProcessing.appendFailed"), void 0, { duration: 4e3 });
      }
    });
  }
  _submitNewBatch(row) {
    const configName = this.configuration()?.name ?? "Quick validation";
    this._smartBatchService.createSmartBatch({
      batchConfiguration: this.configId(),
      name: `${configName} \u2014 ${(/* @__PURE__ */ new Date()).toISOString().slice(0, 16)}`,
      rows: [row]
    }).subscribe({
      next: (res) => {
        const batchId = res.data._id;
        if (!batchId) {
          this.isSubmitting.set(false);
          return;
        }
        this._router.navigate(["/smart-batch", this.configId(), "batch", batchId], {
          queryParams: { autostart: "1", reportOnComplete: "1", rowIndex: "0" }
        });
      },
      error: () => {
        this.isSubmitting.set(false);
      }
    });
  }
  fieldLabel(field) {
    return field.description || field.field;
  }
  stepSkipReason(view) {
    const reason = view.skipReason;
    if (!reason)
      return "";
    return this._transloco.translate("smartBatchSystemPresets.skipReasonDocumentType", {
      documentType: reason.value,
      stepName: view.stepName,
      allowedValues: reason.allowedValues.join(", ")
    });
  }
  normalizeDependencyGroup(d) {
    if (d.dependencyGroup == null)
      return null;
    const s = String(d.dependencyGroup).trim();
    return s.length ? s : null;
  }
  buildEndpointFieldsView(step) {
    const feature = step.appFeature;
    const fields = (feature?.dependencies || []).filter((dep) => dep?.field && isClientVisibleBatchDependencyField(String(dep.field))).map((dep) => ({
      field: String(dep.field),
      required: dep.required || false,
      stepName: feature?.name || "Unknown Step",
      stepSequence: step.sequence,
      enumValues: dep.enum || void 0,
      type: dep.type || "string",
      description: dep.description || void 0,
      dependencyGroup: dep.dependencyGroup,
      requiredWhen: dep.requiredWhen,
      dateFormat: dep.dateFormat || void 0
    }));
    const xor = this.computeXorFieldGroups(fields);
    const baseView = {
      sequence: step.sequence,
      name: feature?.name || "Unknown Step",
      code: feature?.code || "",
      enabled: step.enabled !== false
    };
    if (xor) {
      return __spreadProps(__spreadValues({}, baseView), {
        xor,
        requiredFields: [],
        conditionalFields: [],
        optionalFields: []
      });
    }
    const requiredFields = fields.filter((f) => f.required).sort((a, b) => a.field.localeCompare(b.field));
    const conditionalFields = fields.filter((f) => !f.required && this.fieldHasConditionalRule(f)).sort((a, b) => a.field.localeCompare(b.field));
    const optionalFields = fields.filter((f) => !f.required && !this.fieldHasConditionalRule(f)).sort((a, b) => a.field.localeCompare(b.field));
    return __spreadProps(__spreadValues({}, baseView), {
      xor: null,
      requiredFields,
      conditionalFields,
      optionalFields
    });
  }
  computeXorFieldGroups(fields) {
    const minimal = fields.map((f) => ({
      field: f.field,
      dependencyGroup: f.dependencyGroup,
      requiredWhen: f.requiredWhen
    }));
    const xor = this.buildXorGroupMetadata(minimal);
    if (!xor)
      return null;
    const { docGroupIds, nameGroupIds } = xor;
    const nameFields = fields.filter((f) => {
      const g = this.normalizeDependencyGroup(f);
      return g !== null && nameGroupIds.has(g);
    }).sort((a, b) => a.field.localeCompare(b.field));
    const docOrder = ["documentType", "documentNumber", "dateOfBirth", "expirationDate"];
    const docFields = fields.filter((f) => {
      const g = this.normalizeDependencyGroup(f);
      return g !== null && docGroupIds.has(g);
    });
    const documentFields = [...docFields].sort((a, b) => {
      const ia = docOrder.indexOf(a.field);
      const ib = docOrder.indexOf(b.field);
      if (ia === -1 && ib === -1)
        return a.field.localeCompare(b.field);
      if (ia === -1)
        return 1;
      if (ib === -1)
        return -1;
      return ia - ib;
    });
    const dob = documentFields.find((d) => d.field === "dateOfBirth" && d.requiredWhen?.in?.length);
    const dobWhenValues = dob?.requiredWhen?.in?.join(", ") ?? null;
    if (nameFields.length === 0 || documentFields.length === 0)
      return null;
    return { nameFields, documentFields, dobWhenValues };
  }
  buildXorGroupMetadata(deps) {
    const grouped = /* @__PURE__ */ new Map();
    for (const d of deps) {
      const g = this.normalizeDependencyGroup(d);
      if (g === null)
        continue;
      if (!grouped.has(g))
        grouped.set(g, []);
      grouped.get(g).push(d);
    }
    if (grouped.size < 2)
      return null;
    const docGroupIds = /* @__PURE__ */ new Set();
    const nameGroupIds = /* @__PURE__ */ new Set();
    for (const [gid, list] of grouped) {
      if (list.some((x) => x.field === "documentType" || x.field === "documentNumber")) {
        docGroupIds.add(gid);
      }
      if (list.some((x) => x.field === "fullName")) {
        nameGroupIds.add(gid);
      }
    }
    if (docGroupIds.size === 0 || nameGroupIds.size === 0)
      return null;
    return { docGroupIds, nameGroupIds };
  }
  fieldHasConditionalRule(field) {
    const w = field.requiredWhen;
    return Boolean(w?.field && Array.isArray(w.in) && w.in.length > 0);
  }
  static {
    this.\u0275fac = function QuickValidateComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _QuickValidateComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _QuickValidateComponent, selectors: [["quick-validate"]], decls: 1, vars: 0, consts: [["expectedFieldCard", ""], ["flatLayout", ""], ["nonEmptyFlat", ""], [4, "transloco"], [1, "flex", "min-h-screen", "min-w-0", "flex-auto", "flex-col", "bg-stone-50", "dark:bg-gray-950"], [1, "border-b", "border-stone-200/90", "bg-white/90", "px-5", "py-6", "backdrop-blur-sm", "dark:border-gray-800", "dark:bg-gray-950/90", "md:px-8", "md:py-8"], [1, "mx-auto", "flex", "w-full", "max-w-3xl", "flex-col", "gap-5"], [1, "flex", "flex-wrap", "items-center", "text-xs", "font-medium", "leading-none", "text-stone-500", "dark:text-stone-400"], ["routerLink", "/home", 1, "cursor-pointer", "text-stone-700", "underline-offset-4", "hover:underline", "dark:text-stone-300"], ["svgIcon", "heroicons_solid:chevron-right", 1, "icon-size-4", "mx-2", "text-stone-400"], ["routerLink", "/smart-batch/workspace", 1, "cursor-pointer", "text-stone-700", "underline-offset-4", "hover:underline", "dark:text-stone-300", 3, "queryParams"], [1, "cursor-default", "text-stone-600", "dark:text-stone-300"], [1, "flex", "items-start", "gap-4"], ["type", "button", 1, "mt-0.5", "inline-flex", "h-10", "w-10", "shrink-0", "items-center", "justify-center", "rounded-xl", "border", "border-stone-200", "bg-white", "text-stone-700", "transition", "hover:bg-stone-50", "dark:border-gray-800", "dark:bg-gray-900", "dark:text-stone-200", "dark:hover:bg-gray-800", 3, "click"], [1, "!h-5", "!w-5", "!text-[20px]"], [1, "min-w-0", "flex-1"], [1, "text-2xl", "font-semibold", "tracking-tight", "text-stone-950", "dark:text-white", "md:text-3xl"], [1, "mt-2", "text-sm", "leading-6", "text-stone-500", "dark:text-stone-400", "md:text-base"], [1, "flex", "flex-auto", "flex-col", "px-5", "py-8", "md:px-8", "md:py-10"], [1, "mx-auto", "w-full", "max-w-6xl"], [1, "flex", "flex-col", "items-center", "justify-center", "rounded-2xl", "border", "border-dashed", "border-stone-200", "py-20", "text-center", "dark:border-gray-800"], [1, "cursor-pointer", "text-stone-700", "underline-offset-4", "hover:underline", "dark:text-stone-300", 3, "routerLink"], ["routerLink", "/smart-batch/workspace", 1, "cursor-pointer", "text-stone-700", "underline-offset-4", "hover:underline", "dark:text-stone-300"], ["diameter", "40"], [1, "mt-4", "text-sm", "text-stone-500", "dark:text-stone-400"], [1, "mb-6", "inline-flex", "rounded-xl", "border", "border-stone-200", "bg-white", "p-1", "dark:border-gray-800", "dark:bg-gray-900/70"], ["type", "button", 1, "rounded-lg", "bg-stone-950", "px-4", "py-2", "text-sm", "font-medium", "text-white", "dark:bg-white", "dark:text-gray-950"], ["type", "button", 1, "rounded-lg", "px-4", "py-2", "text-sm", "font-medium", "text-stone-600", "transition", "hover:bg-stone-50", "dark:text-stone-300", "dark:hover:bg-gray-800", 3, "click"], [1, "grid", "grid-cols-1", "gap-8", "lg:grid-cols-12"], [1, "lg:col-span-7"], [1, "rounded-2xl", "border", "border-stone-200/90", "bg-white", "p-5", "shadow-sm", "dark:border-gray-800", "dark:bg-gray-900/70", "md:p-6"], [1, "mb-6", "flex", "items-start", "gap-3"], [1, "flex", "h-10", "w-10", "shrink-0", "items-center", "justify-center", "rounded-xl", "border", "border-stone-200", "bg-stone-50", "text-stone-700", "dark:border-gray-800", "dark:bg-gray-950", "dark:text-stone-200"], [1, "text-base", "font-semibold", "text-stone-950", "dark:text-white"], [1, "mt-1", "text-sm", "text-stone-500", "dark:text-stone-400"], [1, "flex", "flex-col", "gap-5", 3, "formGroup"], ["class", "lg:col-span-5", 4, "ngIf"], [1, "flex", "flex-col", "gap-5", 3, "ngSubmit", "formGroup"], ["type", "submit", 1, "mt-2", "inline-flex", "min-h-11", "w-full", "items-center", "justify-center", "gap-2", "rounded-xl", "bg-stone-950", "px-4", "text-sm", "font-medium", "text-white", "transition", "hover:bg-stone-800", "disabled:cursor-not-allowed", "disabled:opacity-50", "dark:bg-white", "dark:text-gray-950", "dark:hover:bg-stone-200", 3, "disabled"], ["diameter", "18"], [1, "mb-1.5", "block", "text-sm", "font-medium", "text-stone-700", "dark:text-stone-300", 3, "for"], [1, "text-red-500"], [1, "w-full", "rounded-xl", "border", "border-stone-200", "bg-white", "px-4", "py-3", "text-sm", "text-stone-950", "outline-none", "transition", "placeholder:text-stone-400", "focus:border-stone-950", "focus:ring-2", "focus:ring-stone-200", "dark:border-gray-700", "dark:bg-gray-950", "dark:text-white", "dark:placeholder:text-stone-500", "dark:focus:border-white", "dark:focus:ring-gray-800", 3, "id", "formControlName", "placeholder"], [1, "w-full", "rounded-xl", "border", "border-stone-200", "bg-white", "px-4", "py-3", "text-sm", "text-stone-950", "outline-none", "transition", "focus:border-stone-950", "focus:ring-2", "focus:ring-stone-200", "dark:border-gray-700", "dark:bg-gray-950", "dark:text-white", "dark:focus:border-white", "dark:focus:ring-gray-800", 3, "id", "formControlName"], ["value", "", "disabled", "", "selected", "", "hidden", ""], [3, "value"], [1, "mt-3", "rounded-xl", "border", "border-stone-200", "bg-stone-50/80", "p-3", "dark:border-gray-800", "dark:bg-gray-950/40"], [1, "mb-2", "text-xs", "font-semibold", "uppercase", "tracking-wide", "text-stone-600", "dark:text-stone-400"], [1, "space-y-2"], [1, "flex", "items-start", "gap-2", "text-xs", "leading-relaxed"], [1, "!h-4", "!w-4", "shrink-0", "text-emerald-600", "dark:text-emerald-400"], [1, "text-stone-700", "dark:text-stone-300"], [1, "font-medium"], [1, "!h-4", "!w-4", "shrink-0", "text-amber-600", "dark:text-amber-400"], [1, "text-amber-900", "dark:text-amber-100"], [1, "lg:col-span-5"], [1, "mb-3", "text-sm", "font-semibold", "uppercase", "tracking-wider", "text-stone-700", "dark:text-stone-300"], [1, "mb-4", "text-xs", "leading-relaxed", "text-stone-500", "dark:text-stone-400"], [1, "space-y-4"], ["class", "rounded-2xl border border-stone-200/90 bg-white p-4 dark:border-gray-800 dark:bg-gray-900/70", 4, "ngFor", "ngForOf"], [1, "flex", "items-start", "gap-3", "rounded-xl", "border", "bg-white", "p-3", "dark:bg-gray-800/60", 3, "ngClass"], [1, "flex", "h-6", "w-6", "shrink-0", "items-center", "justify-center", "rounded-full", "text-xs", "font-bold", 3, "ngClass"], ["class", "icon-size-4", 4, "ngIf"], [1, "flex", "flex-wrap", "items-center", "gap-2"], [1, "rounded", "bg-stone-100", "px-1.5", "py-0.5", "text-sm", "font-medium", "text-stone-900", "dark:bg-gray-700", "dark:text-white"], ["class", "text-[10px] font-bold uppercase text-orange-600 dark:text-orange-400", 4, "ngIf"], ["class", "text-[10px] font-bold uppercase text-sky-700 dark:text-sky-300", 4, "ngIf"], ["class", "text-[10px] font-medium uppercase text-stone-400", 4, "ngIf"], ["class", "text-[10px] font-medium uppercase text-violet-600 dark:text-violet-400", 4, "ngIf"], ["class", "mt-1 text-xs leading-relaxed text-stone-500 dark:text-stone-400", 4, "ngIf"], ["class", "mt-1.5 text-xs leading-relaxed text-sky-800 dark:text-sky-200", 4, "ngIf"], ["class", "mt-2 flex flex-wrap gap-1", 4, "ngIf"], [1, "icon-size-4"], [1, "text-[10px]", "font-bold", "uppercase", "text-orange-600", "dark:text-orange-400"], [1, "text-[10px]", "font-bold", "uppercase", "text-sky-700", "dark:text-sky-300"], [1, "text-[10px]", "font-medium", "uppercase", "text-stone-400"], [1, "text-[10px]", "font-medium", "uppercase", "text-violet-600", "dark:text-violet-400"], [1, "mt-1", "text-xs", "leading-relaxed", "text-stone-500", "dark:text-stone-400"], [1, "mt-1.5", "text-xs", "leading-relaxed", "text-sky-800", "dark:text-sky-200"], [1, "mt-2", "flex", "flex-wrap", "gap-1"], ["class", "rounded border border-violet-200 bg-violet-50 px-1.5 py-0.5 text-[10px] text-violet-700 dark:border-violet-800/50 dark:bg-violet-900/20 dark:text-violet-300", 4, "ngFor", "ngForOf"], [1, "rounded", "border", "border-violet-200", "bg-violet-50", "px-1.5", "py-0.5", "text-[10px]", "text-violet-700", "dark:border-violet-800/50", "dark:bg-violet-900/20", "dark:text-violet-300"], [1, "rounded-2xl", "border", "border-stone-200/90", "bg-white", "p-4", "dark:border-gray-800", "dark:bg-gray-900/70"], [1, "mb-4", "flex", "flex-wrap", "items-center", "gap-2"], [1, "rounded", "bg-stone-200", "px-2", "py-0.5", "text-[10px]", "font-semibold", "uppercase", "tracking-wide", "text-stone-700", "dark:bg-gray-800", "dark:text-stone-200"], [1, "text-xs", "font-semibold", "text-stone-900", "dark:text-white"], ["class", "rounded bg-stone-100 px-1.5 py-0.5 text-[10px] font-medium text-stone-600 dark:bg-gray-800 dark:text-stone-300", 4, "ngIf"], [4, "ngIf", "ngIfElse"], [1, "rounded", "bg-stone-100", "px-1.5", "py-0.5", "text-[10px]", "font-medium", "text-stone-600", "dark:bg-gray-800", "dark:text-stone-300"], [1, "mb-3", "flex", "items-start", "gap-2", "rounded-xl", "border", "border-indigo-200", "bg-indigo-50/80", "p-3", "dark:border-indigo-800/50", "dark:bg-indigo-950/30"], [1, "icon-size-4", "shrink-0", "text-indigo-600", "dark:text-indigo-300"], [1, "text-[11px]", "leading-relaxed", "text-indigo-900", "dark:text-indigo-100"], [1, "grid", "grid-cols-1", "gap-4"], [1, "rounded-xl", "border", "border-stone-200/90", "bg-stone-50/50", "p-3", "dark:border-gray-800", "dark:bg-gray-900/40"], [1, "mb-3", "text-[10px]", "font-bold", "uppercase", "tracking-wider", "text-stone-700", "dark:text-stone-300"], [1, "grid", "grid-cols-1", "gap-3"], [4, "ngFor", "ngForOf"], ["class", "mb-3 text-[11px] leading-relaxed text-stone-600 dark:text-stone-400", 4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "mb-3", "text-[11px]", "leading-relaxed", "text-stone-600", "dark:text-stone-400"], [1, "text-[11px]", "text-stone-500", "dark:text-stone-400"], [4, "ngIf"], [1, "mb-2", "text-[10px]", "font-bold", "uppercase", "tracking-wider", "text-stone-700", "dark:text-stone-300"]], template: function QuickValidateComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, QuickValidateComponent_ng_container_0_Template, 28, 6, "ng-container", 3);
      }
    }, dependencies: [
      CommonModule,
      NgClass,
      NgForOf,
      NgIf,
      NgTemplateOutlet,
      RouterModule,
      RouterLink,
      ReactiveFormsModule,
      \u0275NgNoValidate,
      NgSelectOption,
      \u0275NgSelectMultipleOption,
      DefaultValueAccessor,
      SelectControlValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      FormGroupDirective,
      FormControlName,
      MatButtonModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      MatIconModule,
      MatIcon,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatSnackBarModule,
      TranslocoDirective,
      TranslocoModule
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QuickValidateComponent, [{
    type: Component,
    args: [{ selector: "quick-validate", standalone: true, imports: [
      CommonModule,
      RouterModule,
      ReactiveFormsModule,
      MatButtonModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      MatIconModule,
      MatProgressSpinnerModule,
      MatSnackBarModule,
      TranslocoDirective,
      TranslocoModule
    ], template: `<ng-container *transloco="let t">\r
    <div class="flex min-h-screen min-w-0 flex-auto flex-col bg-stone-50 dark:bg-gray-950">\r
        <header\r
            class="border-b border-stone-200/90 bg-white/90 px-5 py-6 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-950/90 md:px-8 md:py-8"\r
        >\r
            <div class="mx-auto flex w-full max-w-3xl flex-col gap-5">\r
                <div\r
                    class="flex flex-wrap items-center text-xs font-medium leading-none text-stone-500 dark:text-stone-400"\r
                >\r
                    <a\r
                        routerLink="/home"\r
                        class="cursor-pointer text-stone-700 underline-offset-4 hover:underline dark:text-stone-300"\r
                        >Verifik</a\r
                    >\r
                    <mat-icon class="icon-size-4 mx-2 text-stone-400" svgIcon="heroicons_solid:chevron-right"></mat-icon>\r
                    @if (isAppendMode()) {\r
                        <a\r
                            [routerLink]="['/smart-batch', configId()]"\r
                            class="cursor-pointer text-stone-700 underline-offset-4 hover:underline dark:text-stone-300"\r
                            >{{ t('smartBatchLanding.title') }}</a\r
                        >\r
                        <mat-icon class="icon-size-4 mx-2 text-stone-400" svgIcon="heroicons_solid:chevron-right"></mat-icon>\r
                        <a\r
                            [routerLink]="['/smart-batch', configId(), 'batch', batchId()]"\r
                            class="cursor-pointer text-stone-700 underline-offset-4 hover:underline dark:text-stone-300"\r
                            >{{ pageSubtitle() }}</a\r
                        >\r
                    } @else if (from() === 'dashboard') {\r
                        <a\r
                            routerLink="/smart-batch/workspace"\r
                            class="cursor-pointer text-stone-700 underline-offset-4 hover:underline dark:text-stone-300"\r
                            >{{ t('smartBatchLanding.title') }}</a\r
                        >\r
                        <mat-icon class="icon-size-4 mx-2 text-stone-400" svgIcon="heroicons_solid:chevron-right"></mat-icon>\r
                        <a\r
                            [routerLink]="['/smart-batch', configId()]"\r
                            class="cursor-pointer text-stone-700 underline-offset-4 hover:underline dark:text-stone-300"\r
                            >{{ pageSubtitle() }}</a\r
                        >\r
                    } @else {\r
                        <a\r
                            routerLink="/smart-batch/workspace"\r
                            [queryParams]="{ tab: 'templates' }"\r
                            class="cursor-pointer text-stone-700 underline-offset-4 hover:underline dark:text-stone-300"\r
                            >{{ t('smartBatchLanding.title') }}</a\r
                        >\r
                    }\r
                    <mat-icon class="icon-size-4 mx-2 text-stone-400" svgIcon="heroicons_solid:chevron-right"></mat-icon>\r
                    <span class="cursor-default text-stone-600 dark:text-stone-300">{{\r
                        t(pageTitleKey())\r
                    }}</span>\r
                </div>\r
\r
                <div class="flex items-start gap-4">\r
                    <button\r
                        type="button"\r
                        (click)="goBack()"\r
                        class="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-stone-200 bg-white text-stone-700 transition hover:bg-stone-50 dark:border-gray-800 dark:bg-gray-900 dark:text-stone-200 dark:hover:bg-gray-800"\r
                        [attr.aria-label]="t('smartBatchSystemPresets.back')"\r
                    >\r
                        <mat-icon class="!h-5 !w-5 !text-[20px]">arrow_back</mat-icon>\r
                    </button>\r
                    <div class="min-w-0 flex-1">\r
                        <h1 class="text-2xl font-semibold tracking-tight text-stone-950 dark:text-white md:text-3xl">\r
                            {{ t(pageTitleKey()) }}\r
                        </h1>\r
                        <p class="mt-2 text-sm leading-6 text-stone-500 dark:text-stone-400 md:text-base">\r
                            @if (isAppendMode()) {\r
                                {{ t('batchProcessing.addOneRecordDesc') }}\r
                            } @else {\r
                                {{ pageSubtitle() }}\r
                            }\r
                        </p>\r
                    </div>\r
                </div>\r
            </div>\r
        </header>\r
\r
        <main class="flex flex-auto flex-col px-5 py-8 md:px-8 md:py-10">\r
            <div class="mx-auto w-full max-w-6xl">\r
                @if (isLoading()) {\r
                    <div\r
                        class="flex flex-col items-center justify-center rounded-2xl border border-dashed border-stone-200 py-20 text-center dark:border-gray-800"\r
                    >\r
                        <mat-spinner diameter="40"></mat-spinner>\r
                        <p class="mt-4 text-sm text-stone-500 dark:text-stone-400">\r
                            {{ t('smartBatchLanding.loadingConfigurations') }}\r
                        </p>\r
                    </div>\r
                } @else {\r
                    <div\r
                        class="mb-6 inline-flex rounded-xl border border-stone-200 bg-white p-1 dark:border-gray-800 dark:bg-gray-900/70"\r
                    >\r
                        <button\r
                            type="button"\r
                            class="rounded-lg bg-stone-950 px-4 py-2 text-sm font-medium text-white dark:bg-white dark:text-gray-950"\r
                        >\r
                            {{ t('smartBatchSystemPresets.singleRecordTab') }}\r
                        </button>\r
                        <button\r
                            type="button"\r
                            (click)="goToBatchUpload()"\r
                            class="rounded-lg px-4 py-2 text-sm font-medium text-stone-600 transition hover:bg-stone-50 dark:text-stone-300 dark:hover:bg-gray-800"\r
                        >\r
                            {{ t('smartBatchSystemPresets.batchUploadTab') }}\r
                        </button>\r
                    </div>\r
\r
                    <div class="grid grid-cols-1 gap-8 lg:grid-cols-12">\r
                        <!-- Left Column: Input Details Form -->\r
                        <div class="lg:col-span-7">\r
                            <div\r
                                class="rounded-2xl border border-stone-200/90 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900/70 md:p-6"\r
                            >\r
                                <div class="mb-6 flex items-start gap-3">\r
                                    <div\r
                                        class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-stone-200 bg-stone-50 text-stone-700 dark:border-gray-800 dark:bg-gray-950 dark:text-stone-200"\r
                                    >\r
                                        <mat-icon>edit_document</mat-icon>\r
                                    </div>\r
                                    <div>\r
                                        <h2 class="text-base font-semibold text-stone-950 dark:text-white">\r
                                            {{ t('smartBatchSystemPresets.inputDetailsTitle') }}\r
                                        </h2>\r
                                        <p class="mt-1 text-sm text-stone-500 dark:text-stone-400">\r
                                            {{ t('smartBatchSystemPresets.inputDetailsDesc') }}\r
                                        </p>\r
                                    </div>\r
                                </div>\r
\r
                                @if (form) {\r
                                    <form [formGroup]="form" (ngSubmit)="submit()" class="flex flex-col gap-5">\r
                                        @for (field of requiredFields(); track field.field) {\r
                                            <div>\r
                                                <label\r
                                                    class="mb-1.5 block text-sm font-medium text-stone-700 dark:text-stone-300"\r
                                                    [for]="field.field"\r
                                                >\r
                                                    {{ fieldLabel(field) }}\r
                                                    @if (field.required) {\r
                                                        <span class="text-red-500">*</span>\r
                                                    }\r
                                                </label>\r
                                                @if (field.enumValues?.length) {\r
                                                    <select\r
                                                        [id]="field.field"\r
                                                        [formControlName]="field.field"\r
                                                        class="w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm text-stone-950 outline-none transition focus:border-stone-950 focus:ring-2 focus:ring-stone-200 dark:border-gray-700 dark:bg-gray-950 dark:text-white dark:focus:border-white dark:focus:ring-gray-800"\r
                                                    >\r
                                                        <option value="" disabled selected hidden></option>\r
                                                        @for (opt of field.enumValues; track opt) {\r
                                                            <option [value]="opt">{{ opt }}</option>\r
                                                        }\r
                                                    </select>\r
                                                    @if (field.field === 'documentType' && showStepCompatibility()) {\r
                                                        <div\r
                                                            class="mt-3 rounded-xl border border-stone-200 bg-stone-50/80 p-3 dark:border-gray-800 dark:bg-gray-950/40"\r
                                                        >\r
                                                            <p\r
                                                                class="mb-2 text-xs font-semibold uppercase tracking-wide text-stone-600 dark:text-stone-400"\r
                                                            >\r
                                                                {{\r
                                                                    t(\r
                                                                        'smartBatchSystemPresets.documentTypeCompatibilityTitle'\r
                                                                    )\r
                                                                }}\r
                                                            </p>\r
                                                            <ul class="space-y-2">\r
                                                                @for (\r
                                                                    view of stepCompatibilityViews();\r
                                                                    track view.sequence\r
                                                                ) {\r
                                                                    <li\r
                                                                        class="flex items-start gap-2 text-xs leading-relaxed"\r
                                                                    >\r
                                                                        @if (view.compatible) {\r
                                                                            <mat-icon\r
                                                                                class="!h-4 !w-4 shrink-0 text-emerald-600 dark:text-emerald-400"\r
                                                                                >check_circle</mat-icon\r
                                                                            >\r
                                                                            <span\r
                                                                                class="text-stone-700 dark:text-stone-300"\r
                                                                            >\r
                                                                                <span class="font-medium">{{\r
                                                                                    view.stepName\r
                                                                                }}</span>\r
                                                                                \u2014\r
                                                                                {{\r
                                                                                    t(\r
                                                                                        'smartBatchSystemPresets.stepWillRun'\r
                                                                                    )\r
                                                                                }}\r
                                                                            </span>\r
                                                                        } @else {\r
                                                                            <mat-icon\r
                                                                                class="!h-4 !w-4 shrink-0 text-amber-600 dark:text-amber-400"\r
                                                                                >skip_next</mat-icon\r
                                                                            >\r
                                                                            <span\r
                                                                                class="text-amber-900 dark:text-amber-100"\r
                                                                            >\r
                                                                                <span class="font-medium">{{\r
                                                                                    view.stepName\r
                                                                                }}</span>\r
                                                                                \u2014\r
                                                                                {{\r
                                                                                    t(\r
                                                                                        'smartBatchSystemPresets.stepWillSkip'\r
                                                                                    )\r
                                                                                }}:\r
                                                                                {{ stepSkipReason(view) }}\r
                                                                            </span>\r
                                                                        }\r
                                                                    </li>\r
                                                                }\r
                                                            </ul>\r
                                                        </div>\r
                                                    }\r
                                                } @else {\r
                                                    <input\r
                                                        [id]="field.field"\r
                                                        [formControlName]="field.field"\r
                                                        class="w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm text-stone-950 outline-none transition placeholder:text-stone-400 focus:border-stone-950 focus:ring-2 focus:ring-stone-200 dark:border-gray-700 dark:bg-gray-950 dark:text-white dark:placeholder:text-stone-500 dark:focus:border-white dark:focus:ring-gray-800"\r
                                                        [placeholder]="field.field"\r
                                                    />\r
                                                }\r
                                            </div>\r
                                        }\r
\r
                                        <button\r
                                            type="submit"\r
                                            class="mt-2 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-stone-950 px-4 text-sm font-medium text-white transition hover:bg-stone-800 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-white dark:text-gray-950 dark:hover:bg-stone-200"\r
                                            [disabled]="form.invalid || isSubmitting()"\r
                                        >\r
                                            @if (isSubmitting()) {\r
                                                <mat-spinner diameter="18"></mat-spinner>\r
                                            }\r
                                            <span>{{ t('smartBatchSystemPresets.runValidation') }}</span>\r
                                        </button>\r
                                    </form>\r
                                }\r
                            </div>\r
                        </div>\r
\r
                        <!-- Right Column: Expected fields / steps helper -->\r
                        <div class="lg:col-span-5" *ngIf="endpointFieldsViews().length > 0">\r
                            <!-- Expected field cards: shared template (flat grid or XOR grouped layout) -->\r
                            <ng-template #expectedFieldCard let-field="field">\r
                                <div\r
                                    class="flex items-start gap-3 rounded-xl border bg-white p-3 dark:bg-gray-800/60"\r
                                    [ngClass]="\r
                                        field.required\r
                                            ? 'border-orange-200 dark:border-orange-800/50'\r
                                            : fieldHasConditionalRule(field)\r
                                              ? 'border-sky-200 dark:border-sky-800/50'\r
                                              : 'border-stone-200 dark:border-gray-700'\r
                                    "\r
                                >\r
                                    <div\r
                                        class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold"\r
                                        [ngClass]="\r
                                            field.required\r
                                                ? 'bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400'\r
                                                : fieldHasConditionalRule(field)\r
                                                  ? 'bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300'\r
                                                  : 'bg-stone-100 text-stone-500 dark:bg-gray-700'\r
                                        "\r
                                    >\r
                                        <mat-icon *ngIf="field.required" class="icon-size-4"\r
                                            >priority_high</mat-icon\r
                                        >\r
                                        <mat-icon\r
                                            *ngIf="!field.required && fieldHasConditionalRule(field)"\r
                                            class="icon-size-4"\r
                                            >rule_folder</mat-icon\r
                                        >\r
                                        <mat-icon\r
                                            *ngIf="!field.required && !fieldHasConditionalRule(field)"\r
                                            class="icon-size-4"\r
                                            >remove</mat-icon\r
                                        >\r
                                    </div>\r
                                    <div class="min-w-0 flex-1">\r
                                        <div class="flex flex-wrap items-center gap-2">\r
                                            <code\r
                                                class="rounded bg-stone-100 px-1.5 py-0.5 text-sm font-medium text-stone-900 dark:bg-gray-700 dark:text-white"\r
                                                >{{ field.field }}</code\r
                                            >\r
                                            <span\r
                                                *ngIf="field.required"\r
                                                class="text-[10px] font-bold uppercase text-orange-600 dark:text-orange-400"\r
                                                >{{ t('createBatch.required') }}</span\r
                                            >\r
                                            <span\r
                                                *ngIf="\r
                                                    !field.required && fieldHasConditionalRule(field)\r
                                                "\r
                                                class="text-[10px] font-bold uppercase text-sky-700 dark:text-sky-300"\r
                                                >{{ t('createBatch.fieldConditional') }}</span\r
                                            >\r
                                            <span\r
                                                *ngIf="\r
                                                    !field.required && !fieldHasConditionalRule(field)\r
                                                "\r
                                                class="text-[10px] font-medium uppercase text-stone-400"\r
                                                >{{ t('createBatch.optional') }}</span\r
                                            >\r
                                            <span\r
                                                *ngIf="field.enumValues?.length"\r
                                                class="text-[10px] font-medium uppercase text-violet-600 dark:text-violet-400"\r
                                            >\r
                                                \u2022 {{ t('createBatch.options') }}\r
                                            </span>\r
                                        </div>\r
                                        <p\r
                                            *ngIf="field.description"\r
                                            class="mt-1 text-xs leading-relaxed text-stone-500 dark:text-stone-400"\r
                                        >\r
                                            {{ field.description }}\r
                                        </p>\r
                                        <p\r
                                            *ngIf="\r
                                                fieldHasConditionalRule(field) && !field.required\r
                                            "\r
                                            class="mt-1.5 text-xs leading-relaxed text-sky-800 dark:text-sky-200"\r
                                        >\r
                                            {{\r
                                                t('createBatch.fieldConditionalDetail', {\r
                                                    whenField: field.requiredWhen?.field ?? '',\r
                                                    values: (field.requiredWhen?.in || []).join(', ')\r
                                                })\r
                                            }}\r
                                        </p>\r
                                        <div\r
                                            *ngIf="field.enumValues?.length"\r
                                            class="mt-2 flex flex-wrap gap-1"\r
                                        >\r
                                            <span\r
                                                *ngFor="let val of field.enumValues"\r
                                                class="rounded border border-violet-200 bg-violet-50 px-1.5 py-0.5 text-[10px] text-violet-700 dark:border-violet-800/50 dark:bg-violet-900/20 dark:text-violet-300"\r
                                            >\r
                                                {{ val }}\r
                                            </span>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                            </ng-template>\r
\r
                            <div>\r
                                <h4\r
                                    class="mb-3 text-sm font-semibold uppercase tracking-wider text-stone-700 dark:text-stone-300"\r
                                >\r
                                    {{ t('createBatch.expectedFieldsHeading') }}\r
                                </h4>\r
                                <p\r
                                    class="mb-4 text-xs leading-relaxed text-stone-500 dark:text-stone-400"\r
                                >\r
                                    {{ t('createBatch.perEndpointIntro') }}\r
                                </p>\r
\r
                                <div class="space-y-4">\r
                                    <div\r
                                        *ngFor="let view of endpointFieldsViews()"\r
                                        class="rounded-2xl border border-stone-200/90 bg-white p-4 dark:border-gray-800 dark:bg-gray-900/70"\r
                                    >\r
                                        <div class="mb-4 flex flex-wrap items-center gap-2">\r
                                            <span\r
                                                class="rounded bg-stone-200 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-stone-700 dark:bg-gray-800 dark:text-stone-200"\r
                                            >\r
                                                {{\r
                                                    t('createBatch.endpointStepLabel', { sequence: view.sequence })\r
                                                }}\r
                                            </span>\r
                                            <h5 class="text-xs font-semibold text-stone-900 dark:text-white">\r
                                                {{ view.name }}\r
                                            </h5>\r
                                            <code\r
                                                *ngIf="view.code"\r
                                                class="rounded bg-stone-100 px-1.5 py-0.5 text-[10px] font-medium text-stone-600 dark:bg-gray-800 dark:text-stone-300"\r
                                                >{{ view.code }}</code\r
                                            >\r
                                        </div>\r
\r
                                        <ng-container *ngIf="view.xor as xor; else flatLayout">\r
                                            <div\r
                                                class="mb-3 flex items-start gap-2 rounded-xl border border-indigo-200 bg-indigo-50/80 p-3 dark:border-indigo-800/50 dark:bg-indigo-950/30"\r
                                            >\r
                                                <mat-icon\r
                                                    class="icon-size-4 shrink-0 text-indigo-600 dark:text-indigo-300"\r
                                                    >alt_route</mat-icon\r
                                                >\r
                                                <p class="text-[11px] leading-relaxed text-indigo-900 dark:text-indigo-100">\r
                                                    {{ t('createBatch.endpointXorRule') }}\r
                                                </p>\r
                                            </div>\r
                                            <div class="grid grid-cols-1 gap-4">\r
                                                <div\r
                                                    class="rounded-xl border border-stone-200/90 bg-stone-50/50 p-3 dark:border-gray-800 dark:bg-gray-900/40"\r
                                                >\r
                                                    <h6\r
                                                        class="mb-3 text-[10px] font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300"\r
                                                    >\r
                                                        {{ t('createBatch.searchModeOptionFullName') }}\r
                                                    </h6>\r
                                                    <div class="grid grid-cols-1 gap-3">\r
                                                        <ng-container\r
                                                            *ngFor="let field of xor.nameFields"\r
                                                        >\r
                                                            <ng-container\r
                                                                *ngTemplateOutlet="\r
                                                                    expectedFieldCard;\r
                                                                    context: { field: field }\r
                                                                "\r
                                                            ></ng-container>\r
                                                        </ng-container>\r
                                                    </div>\r
                                                </div>\r
                                                <div\r
                                                    class="rounded-xl border border-stone-200/90 bg-stone-50/50 p-3 dark:border-gray-800 dark:bg-gray-900/40"\r
                                                >\r
                                                    <h6\r
                                                        class="mb-3 text-[10px] font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300"\r
                                                    >\r
                                                        {{ t('createBatch.searchModeOptionDocument') }}\r
                                                    </h6>\r
                                                    <p\r
                                                        *ngIf="xor.dobWhenValues as values"\r
                                                        class="mb-3 text-[11px] leading-relaxed text-stone-600 dark:text-stone-400"\r
                                                    >\r
                                                        {{\r
                                                            t('createBatch.dateOfBirthConditionalHint', { values: values })\r
                                                        }}\r
                                                    </p>\r
                                                    <div class="grid grid-cols-1 gap-3">\r
                                                        <ng-container\r
                                                            *ngFor="let field of xor.documentFields"\r
                                                        >\r
                                                            <ng-container\r
                                                                *ngTemplateOutlet="\r
                                                                    expectedFieldCard;\r
                                                                    context: { field: field }\r
                                                                "\r
                                                            ></ng-container>\r
                                                        </ng-container>\r
                                                    </div>\r
                                                </div>\r
                                            </div>\r
                                        </ng-container>\r
\r
                                        <ng-template #flatLayout>\r
                                            <ng-container\r
                                                *ngIf="\r
                                                    view.requiredFields.length === 0 &&\r
                                                        view.conditionalFields.length === 0 &&\r
                                                        view.optionalFields.length === 0;\r
                                                    else nonEmptyFlat\r
                                                "\r
                                            >\r
                                                <p class="text-[11px] text-stone-500 dark:text-stone-400">\r
                                                    {{ t('createBatch.endpointNoFieldsRequired') }}\r
                                                </p>\r
                                            </ng-container>\r
                                            <ng-template #nonEmptyFlat>\r
                                                <div class="space-y-4">\r
                                                    <div *ngIf="view.requiredFields.length > 0">\r
                                                        <h6\r
                                                            class="mb-2 text-[10px] font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300"\r
                                                        >\r
                                                            {{ t('createBatch.endpointRequiredFieldsLabel') }}\r
                                                        </h6>\r
                                                        <div class="grid grid-cols-1 gap-3">\r
                                                            <ng-container\r
                                                                *ngFor="let field of view.requiredFields"\r
                                                            >\r
                                                                <ng-container\r
                                                                    *ngTemplateOutlet="\r
                                                                        expectedFieldCard;\r
                                                                        context: { field: field }\r
                                                                    "\r
                                                                ></ng-container>\r
                                                            </ng-container>\r
                                                        </div>\r
                                                    </div>\r
                                                    <div *ngIf="view.conditionalFields.length > 0">\r
                                                        <h6\r
                                                            class="mb-2 text-[10px] font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300"\r
                                                        >\r
                                                            {{ t('createBatch.endpointConditionalFieldsLabel') }}\r
                                                        </h6>\r
                                                        <div class="grid grid-cols-1 gap-3">\r
                                                            <ng-container\r
                                                                *ngFor="\r
                                                                    let field of view.conditionalFields\r
                                                                "\r
                                                            >\r
                                                                <ng-container\r
                                                                    *ngTemplateOutlet="\r
                                                                        expectedFieldCard;\r
                                                                        context: { field: field }\r
                                                                    "\r
                                                                ></ng-container>\r
                                                            </ng-container>\r
                                                        </div>\r
                                                    </div>\r
                                                    <div *ngIf="view.optionalFields.length > 0">\r
                                                        <h6\r
                                                            class="mb-2 text-[10px] font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300"\r
                                                        >\r
                                                            {{ t('createBatch.endpointOptionalFieldsLabel') }}\r
                                                        </h6>\r
                                                        <div class="grid grid-cols-1 gap-3">\r
                                                            <ng-container\r
                                                                *ngFor="let field of view.optionalFields"\r
                                                            >\r
                                                                <ng-container\r
                                                                    *ngTemplateOutlet="\r
                                                                        expectedFieldCard;\r
                                                                        context: { field: field }\r
                                                                    "\r
                                                                ></ng-container>\r
                                                            </ng-container>\r
                                                        </div>\r
                                                    </div>\r
                                                </div>\r
                                            </ng-template>\r
                                        </ng-template>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                        </div>\r
                    </div>\r
                }\r
            </div>\r
        </main>\r
    </div>\r
</ng-container>\r
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(QuickValidateComponent, { className: "QuickValidateComponent", filePath: "src/app/modules/smart-batch/quick-validate/quick-validate.component.ts", lineNumber: 84 });
})();
export {
  QuickValidateComponent
};
//# sourceMappingURL=chunk-M6BEY5AN.js.map
