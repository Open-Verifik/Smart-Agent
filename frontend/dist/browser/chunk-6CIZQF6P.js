import {
  WebhooksService
} from "./chunk-DLVDR6KR.js";
import {
  SmartBatchInputModeService
} from "./chunk-BBL6XUP3.js";
import {
  ReportTemplateThumbComponent
} from "./chunk-OJSQ2OZC.js";
import {
  availableCountries
} from "./chunk-PPBPWIFJ.js";
import {
  featureGroup,
  featureParamChips,
  humanizeParamField,
  matchesParamHighlight,
  paramEnumChipClass,
  paramFieldLabelKey,
  paramHighlightBadgeClass,
  paramHighlightCardClass,
  paramHighlightChipClass,
  paramHighlightSwatchClass,
  requiredParamChipClass
} from "./chunk-N3CEHZSA.js";
import {
  filterFeaturesForCountry,
  getCountryFlag,
  resolveDropdownCountry
} from "./chunk-YR6ZLJHC.js";
import {
  ReportPreviewComponent
} from "./chunk-OB3TXKFD.js";
import {
  SmartReportService,
  templateLayerZ
} from "./chunk-SPFBQX5T.js";
import {
  getPresetStepCount
} from "./chunk-T3ZUDNVS.js";
import {
  SmartBatchService
} from "./chunk-YYPGLQSF.js";
import {
  CdkDrag,
  CdkDropList,
  DragDropModule,
  moveItemInArray
} from "./chunk-MIGBUUA4.js";
import {
  AuthRequiredGateService
} from "./chunk-PJ7PXAOZ.js";
import {
  isClientVisibleBatchDependencyField
} from "./chunk-USONFPXP.js";
import "./chunk-SHPJBY32.js";
import "./chunk-BSFB775C.js";
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
import "./chunk-BQZ6NKDU.js";
import "./chunk-BXHN2UKT.js";
import "./chunk-ENWXGLEW.js";
import "./chunk-X7X3KIY2.js";
import "./chunk-JURKDGMK.js";
import {
  MatOption,
  MatSelect
} from "./chunk-DT4JVZCC.js";
import {
  MatInput
} from "./chunk-DMXREZDX.js";
import "./chunk-CPZD6RE6.js";
import "./chunk-W5MZFF7W.js";
import {
  MatError,
  MatFormField,
  MatLabel,
  MatPrefix,
  MatSuffix
} from "./chunk-QUFOCOZK.js";
import "./chunk-CO7JIY6V.js";
import "./chunk-6Y7NS256.js";
import "./chunk-L5NPACLK.js";
import "./chunk-2W6CKTFA.js";
import "./chunk-BYA46NNG.js";
import "./chunk-EVWXSBKG.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-KIEFKQUB.js";
import "./chunk-HVUVGZ2L.js";
import "./chunk-OIBNGD5S.js";
import "./chunk-5HABGTLH.js";
import {
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
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-JBF67GMG.js";
import {
  TranslocoDirective,
  TranslocoModule,
  TranslocoPipe,
  TranslocoService
} from "./chunk-FWBWCXY5.js";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-QL64NPDU.js";
import "./chunk-3V5B4ZWC.js";
import {
  CommonModule,
  Component,
  HostListener,
  Injectable,
  NgClass,
  NgForOf,
  NgIf,
  NgTemplateOutlet,
  UpperCasePipe,
  ViewEncapsulation,
  computed,
  firstValueFrom,
  inject,
  setClassMetadata,
  signal,
  take,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-YWP2Y7QK.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-F5M2C4EZ.js";

// src/app/modules/check-list/check-list-batch.util.ts
var readCheckListBatchPrefill = (query) => {
  const read = (key) => {
    if (typeof query.get === "function") {
      return query.get(key) || "";
    }
    return query[key] || "";
  };
  if (read("from") !== "check-list")
    return null;
  const codes = read("codes").split(",").map((code) => code.trim()).filter(Boolean);
  return {
    country: read("country").trim(),
    codes,
    name: read("name").trim()
  };
};

// src/app/modules/smart-batch/create/create-batch-config.component.ts
var _c0 = () => ["all", "citizen", "vehicle", "company", "other"];
var _c1 = (a0) => ({ query: a0 });
var _c2 = (a0) => ({ count: a0 });
var _forTrack0 = ($index, $item) => $item.id;
function CreateBatchConfigComponent_a_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 22);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "smartBatchLanding.workspaceTitle"), " ");
  }
}
function CreateBatchConfigComponent_mat_icon_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-icon", 5);
  }
}
function CreateBatchConfigComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage(), " ");
  }
}
function CreateBatchConfigComponent_ng_container_32_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1, " / ");
    \u0275\u0275elementEnd();
  }
}
function CreateBatchConfigComponent_ng_container_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, CreateBatchConfigComponent_ng_container_32_span_4_Template, 2, 0, "span", 24);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const label_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("font-semibold", ctx_r0.wizardStep() === i_r3 + 1)("text-stone-900", ctx_r0.wizardStep() === i_r3 + 1)("dark:text-white", ctx_r0.wizardStep() === i_r3 + 1)("text-stone-500", ctx_r0.wizardStep() !== i_r3 + 1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", i_r3 + 1, ". ", \u0275\u0275pipeBind1(3, 11, label_r2), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", i_r3 < ctx_r0.wizardLabels.length - 1);
  }
}
function CreateBatchConfigComponent_form_33_mat_option_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const country_r5 = ctx.$implicit;
    \u0275\u0275property("value", country_r5.code);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", country_r5.name, " ");
  }
}
function CreateBatchConfigComponent_form_33_div_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 49)(1, "mat-form-field", 33)(2, "mat-label");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "mat-select", 50)(6, "mat-option", 51);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "mat-option", 52);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-option", 53);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 54)(16, "mat-form-field", 55)(17, "mat-label");
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "mat-select", 56)(21, "mat-option", 57);
    \u0275\u0275text(22, "CSV");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "mat-option", 58);
    \u0275\u0275text(24, "Excel (XLSX)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "mat-option", 59);
    \u0275\u0275text(26, "JSONL");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "mat-form-field", 55)(28, "mat-label");
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "mat-select", 60)(32, "mat-option", 57);
    \u0275\u0275text(33, "CSV");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "mat-option", 58);
    \u0275\u0275text(35, "Excel (XLSX)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "mat-option", 59);
    \u0275\u0275text(37, "JSONL");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(38, "div", 61)(39, "p", 62);
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 63)(43, "button", 64);
    \u0275\u0275listener("click", function CreateBatchConfigComponent_form_33_div_44_Template_button_click_43_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.selectRunMode("queue"));
    });
    \u0275\u0275elementStart(44, "span", 65);
    \u0275\u0275text(45);
    \u0275\u0275pipe(46, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "span");
    \u0275\u0275text(48);
    \u0275\u0275pipe(49, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "button", 64);
    \u0275\u0275listener("click", function CreateBatchConfigComponent_form_33_div_44_Template_button_click_50_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.selectRunMode("browser"));
    });
    \u0275\u0275elementStart(51, "span", 65);
    \u0275\u0275text(52);
    \u0275\u0275pipe(53, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "span");
    \u0275\u0275text(55);
    \u0275\u0275pipe(56, "transloco");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 19, "createBatchConfig.mergeStrategy"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 21, "createBatchConfig.sequential"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 23, "createBatchConfig.parallelIndependent"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 25, "createBatchConfig.parallelWithFallback"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 27, "createBatchConfig.inputFieldsFormat"));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(30, 29, "createBatchConfig.resultOutputFormat"));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(41, 31, "createBatchConfig.runMode"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r0.runModeCardClass(ctx_r0.isAsyncSelected()));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(46, 33, "createBatchConfig.runModeAsync"));
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r0.runModeHintClass(ctx_r0.isAsyncSelected()));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(49, 35, "createBatchConfig.runModeAsyncHint"));
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r0.runModeCardClass(!ctx_r0.isAsyncSelected()));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(53, 37, "createBatchConfig.runModeSync"));
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r0.runModeHintClass(!ctx_r0.isAsyncSelected()));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(56, 39, "createBatchConfig.runModeSyncHint"));
  }
}
function CreateBatchConfigComponent_form_33_p_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 66);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "createBatchConfig.notificationsConfigure"), " ");
  }
}
function CreateBatchConfigComponent_form_33_div_60_mat_progress_spinner_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-spinner", 82);
  }
}
function CreateBatchConfigComponent_form_33_div_60_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "createBatchConfig.testWebhook"));
  }
}
function CreateBatchConfigComponent_form_33_div_60_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "createBatchConfig.testing"));
  }
}
function CreateBatchConfigComponent_form_33_div_60_p_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 83);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "createBatchConfig.webhookUrlHint"), " ");
  }
}
function CreateBatchConfigComponent_form_33_div_60_p_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 84);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "createBatchConfig.webhookMustTest"), " ");
  }
}
function CreateBatchConfigComponent_form_33_div_60_div_16_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" HTTP ", (tmp_4_0 = ctx_r0.testResult()) == null ? null : tmp_4_0.statusCode, " ");
  }
}
function CreateBatchConfigComponent_form_33_div_60_div_16_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (tmp_4_0 = ctx_r0.testResult()) == null ? null : tmp_4_0.message, "");
  }
}
function CreateBatchConfigComponent_form_33_div_60_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 85)(1, "span", 86);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, CreateBatchConfigComponent_form_33_div_60_div_16_span_4_Template, 2, 1, "span", 47)(5, CreateBatchConfigComponent_form_33_div_60_div_16_span_5_Template, 2, 1, "span", 47);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", ((tmp_3_0 = ctx_r0.testResult()) == null ? null : tmp_3_0.status) === "success" ? "border-green-200 bg-green-50 text-green-800 dark:border-green-800 dark:bg-green-950/40 dark:text-green-200" : "border-red-200 bg-red-50 text-red-800 dark:border-red-800 dark:bg-red-950/40 dark:text-red-200");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 4, ((tmp_4_0 = ctx_r0.testResult()) == null ? null : tmp_4_0.status) === "success" ? "createBatchConfig.testSuccess" : "createBatchConfig.testFailed"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (tmp_5_0 = ctx_r0.testResult()) == null ? null : tmp_5_0.statusCode);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_6_0 = ctx_r0.testResult()) == null ? null : tmp_6_0.message);
  }
}
function CreateBatchConfigComponent_form_33_div_60_span_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 87);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 88);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275listener("click", function CreateBatchConfigComponent_form_33_div_60_span_22_Template_button_click_2_listener() {
      const email_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.removeEmailChip(email_r9));
    });
    \u0275\u0275elementStart(4, "mat-icon", 89);
    \u0275\u0275text(5, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const email_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", email_r9, " ");
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(3, 2, "createBatchConfig.removeEmail"));
  }
}
function CreateBatchConfigComponent_form_33_div_60_p_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 90);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "createBatchConfig.invalidEmails"), " ");
  }
}
function CreateBatchConfigComponent_form_33_div_60_p_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 91);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "createBatchConfig.emailOnCompletionHint"), " ");
  }
}
function CreateBatchConfigComponent_form_33_div_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 67)(1, "div", 68)(2, "mat-form-field", 69)(3, "mat-label");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "input", 70);
    \u0275\u0275elementStart(7, "mat-error");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 71);
    \u0275\u0275listener("click", function CreateBatchConfigComponent_form_33_div_60_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.testWebhook());
    });
    \u0275\u0275template(11, CreateBatchConfigComponent_form_33_div_60_mat_progress_spinner_11_Template, 1, 0, "mat-progress-spinner", 72)(12, CreateBatchConfigComponent_form_33_div_60_span_12_Template, 3, 3, "span", 47)(13, CreateBatchConfigComponent_form_33_div_60_span_13_Template, 3, 3, "span", 47);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(14, CreateBatchConfigComponent_form_33_div_60_p_14_Template, 3, 3, "p", 73)(15, CreateBatchConfigComponent_form_33_div_60_p_15_Template, 3, 3, "p", 74)(16, CreateBatchConfigComponent_form_33_div_60_div_16_Template, 6, 6, "div", 75);
    \u0275\u0275elementStart(17, "div")(18, "label", 76);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 77);
    \u0275\u0275template(22, CreateBatchConfigComponent_form_33_div_60_span_22_Template, 6, 4, "span", 78);
    \u0275\u0275elementStart(23, "input", 79);
    \u0275\u0275pipe(24, "transloco");
    \u0275\u0275listener("input", function CreateBatchConfigComponent_form_33_div_60_Template_input_input_23_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onEmailInput($event.target.value));
    })("keydown", function CreateBatchConfigComponent_form_33_div_60_Template_input_keydown_23_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onEmailKeydown($event));
    })("blur", function CreateBatchConfigComponent_form_33_div_60_Template_input_blur_23_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onEmailBlur());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(25, CreateBatchConfigComponent_form_33_div_60_p_25_Template, 3, 3, "p", 80)(26, CreateBatchConfigComponent_form_33_div_60_p_26_Template, 3, 3, "p", 81);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_8_0;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 17, "createBatchConfig.webhookUrl"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 19, "createBatchConfig.invalidWebhookUrl"));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r0.canTestWebhook());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.testingWebhook());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.testingWebhook());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.testingWebhook());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !((tmp_8_0 = ctx_r0.step1Form.get("webhookUrl")) == null ? null : tmp_8_0.invalid) && !ctx_r0.testResult() && ctx_r0.isWebhookReady());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.currentWebhookUrl() && !ctx_r0.isWebhookReady() && !ctx_r0.testResult());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.testResult());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(20, 21, "createBatchConfig.emailOnCompletion"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("border-red-400", ctx_r0.emailDraftError());
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.emailChips());
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(24, 23, "createBatchConfig.emailChipPlaceholder"))("value", ctx_r0.emailDraft());
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.emailDraftError());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.emailDraftError());
  }
}
function CreateBatchConfigComponent_form_33_span_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "createBatchConfig.saving"));
  }
}
function CreateBatchConfigComponent_form_33_span_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "createBatchConfig.next"));
  }
}
function CreateBatchConfigComponent_form_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 26)(1, "section", 27)(2, "h2", 28);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 29)(6, "mat-form-field", 30)(7, "mat-label");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "input", 31);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275elementStart(12, "mat-error");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "mat-form-field", 30)(16, "mat-label");
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "textarea", 32);
    \u0275\u0275pipe(20, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "mat-form-field", 33)(22, "mat-label");
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "mat-select", 34);
    \u0275\u0275template(26, CreateBatchConfigComponent_form_33_mat_option_26_Template, 2, 2, "mat-option", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "mat-error");
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "transloco");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(30, "section", 36)(31, "button", 37);
    \u0275\u0275listener("click", function CreateBatchConfigComponent_form_33_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.advancedOpen.set(!ctx_r0.advancedOpen()));
    });
    \u0275\u0275elementStart(32, "div")(33, "p", 38);
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "h2", 39);
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "p", 40);
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "mat-icon", 41);
    \u0275\u0275text(43);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(44, CreateBatchConfigComponent_form_33_div_44_Template, 57, 41, "div", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "section", 36)(46, "button", 37);
    \u0275\u0275listener("click", function CreateBatchConfigComponent_form_33_Template_button_click_46_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.toggleNotifications());
    });
    \u0275\u0275elementStart(47, "div", 13)(48, "p", 43);
    \u0275\u0275text(49);
    \u0275\u0275pipe(50, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "h2", 39);
    \u0275\u0275text(52);
    \u0275\u0275pipe(53, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "p", 40);
    \u0275\u0275text(55);
    \u0275\u0275pipe(56, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(57, CreateBatchConfigComponent_form_33_p_57_Template, 3, 3, "p", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "mat-icon", 41);
    \u0275\u0275text(59);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(60, CreateBatchConfigComponent_form_33_div_60_Template, 27, 25, "div", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "div")(62, "button", 46);
    \u0275\u0275listener("click", function CreateBatchConfigComponent_form_33_Template_button_click_62_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onNext(1));
    });
    \u0275\u0275template(63, CreateBatchConfigComponent_form_33_span_63_Template, 3, 3, "span", 47)(64, CreateBatchConfigComponent_form_33_span_64_Template, 3, 3, "span", 47);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r0.step1Form);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 26, "createBatchConfig.basicInformation"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 28, "createBatchConfig.configurationName"));
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(11, 30, "createBatchConfig.namePlaceholder"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 32, "createBatchConfig.nameRequired"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 34, "createBatchConfig.description"));
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(20, 36, "createBatchConfig.descriptionPlaceholder"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 38, "createBatchConfig.country"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r0.countries());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(29, 40, "createBatchConfig.countryRequired"));
    \u0275\u0275advance(3);
    \u0275\u0275attribute("aria-expanded", ctx_r0.advancedOpen());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(35, 42, "createBatchConfig.advancedOptional"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(38, 44, "createBatchConfig.advancedTitle"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(41, 46, "createBatchConfig.advancedHint"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.advancedOpen() ? "expand_less" : "expand_more", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.advancedOpen());
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-expanded", ctx_r0.showNotificationFields());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(50, 48, "createBatchConfig.notificationsOptional"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(53, 50, "createBatchConfig.notifications"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(56, 52, "createBatchConfig.notificationsHint"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r0.showNotificationFields());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.showNotificationFields() ? "expand_less" : "expand_more", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.showNotificationFields());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r0.canContinueStep1());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isSavingStep());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isSavingStep());
  }
}
function CreateBatchConfigComponent_div_34_section_1_For_9_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "createBatchConfig.groupAll"), " ");
  }
}
function CreateBatchConfigComponent_div_34_section_1_For_9_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const group_r12 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.featureGroupLabel(group_r12), " ");
  }
}
function CreateBatchConfigComponent_div_34_section_1_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 119);
    \u0275\u0275listener("click", function CreateBatchConfigComponent_div_34_section_1_For_9_Template_button_click_0_listener() {
      const group_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.setEndpointGroupFilter(group_r12));
    });
    \u0275\u0275template(1, CreateBatchConfigComponent_div_34_section_1_For_9_Conditional_1_Template, 2, 3)(2, CreateBatchConfigComponent_div_34_section_1_For_9_Conditional_2_Template, 1, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const group_r12 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("border-stone-950", ctx_r0.endpointGroupFilter() === group_r12)("bg-stone-950", ctx_r0.endpointGroupFilter() === group_r12)("text-white", ctx_r0.endpointGroupFilter() === group_r12)("border-stone-200", ctx_r0.endpointGroupFilter() !== group_r12)("text-stone-600", ctx_r0.endpointGroupFilter() !== group_r12);
    \u0275\u0275advance();
    \u0275\u0275conditional(group_r12 === "all" ? 1 : 2);
  }
}
function CreateBatchConfigComponent_div_34_section_1_For_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 120);
    \u0275\u0275listener("click", function CreateBatchConfigComponent_div_34_section_1_For_15_Template_button_click_0_listener() {
      const highlight_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.setEndpointParamHighlight(highlight_r14.id));
    });
    \u0275\u0275element(1, "span", 121);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const highlight_r14 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", ctx_r0.highlightChipClass(highlight_r14.id));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.highlightSwatchClass(highlight_r14.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, highlight_r14.labelKey), " ");
  }
}
function CreateBatchConfigComponent_div_34_section_1_span_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("(", ctx_r0.filteredAvailableFeatures().length, " of ", ctx_r0.availableFeaturesForCountry().length, ")");
  }
}
function CreateBatchConfigComponent_div_34_section_1_span_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(", ctx_r0.availableFeaturesForCountry().length, ")");
  }
}
function CreateBatchConfigComponent_div_34_section_1_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 122);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "createBatchConfig.loadingFeatures"), " ");
  }
}
function CreateBatchConfigComponent_div_34_section_1_button_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 123);
    \u0275\u0275listener("click", function CreateBatchConfigComponent_div_34_section_1_button_35_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.endpointSearchQuery.set(""));
    });
    \u0275\u0275elementStart(1, "mat-icon", 124);
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function CreateBatchConfigComponent_div_34_section_1_ng_container_37_div_3_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 136);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275property("ngClass", ctx_r0.highlightBadgeClass());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, "visitaGuide.highlightMatch"));
  }
}
function CreateBatchConfigComponent_div_34_section_1_ng_container_37_div_3_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 137);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const feature_r17 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(feature_r17.description);
  }
}
function CreateBatchConfigComponent_div_34_section_1_ng_container_37_div_3_div_7_ng_container_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 142);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function CreateBatchConfigComponent_div_34_section_1_ng_container_37_div_3_div_7_ng_container_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 143);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const value_r18 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(7);
    \u0275\u0275property("ngClass", ctx_r0.paramEnumClass());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", value_r18, " ");
  }
}
function CreateBatchConfigComponent_div_34_section_1_ng_container_37_div_3_div_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 139);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275template(4, CreateBatchConfigComponent_div_34_section_1_ng_container_37_div_3_div_7_ng_container_1_span_4_Template, 2, 0, "span", 140);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, CreateBatchConfigComponent_div_34_section_1_ng_container_37_div_3_div_7_ng_container_1_span_5_Template, 2, 2, "span", 141);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const chip_r19 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(6);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.paramChipClass(chip_r19.required));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 4, ctx_r0.paramFilterLabelKey(chip_r19.field), ctx_r0.paramFilterLabelParams(chip_r19.field)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", chip_r19.required);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", chip_r19.enums);
  }
}
function CreateBatchConfigComponent_div_34_section_1_ng_container_37_div_3_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 138);
    \u0275\u0275template(1, CreateBatchConfigComponent_div_34_section_1_ng_container_37_div_3_div_7_ng_container_1_Template, 6, 7, "ng-container", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const feature_r17 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.featureParamFields(feature_r17));
  }
}
function CreateBatchConfigComponent_div_34_section_1_ng_container_37_div_3_mat_icon_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 144);
    \u0275\u0275text(1, "check_circle");
    \u0275\u0275elementEnd();
  }
}
function CreateBatchConfigComponent_div_34_section_1_ng_container_37_div_3_mat_icon_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 145);
    \u0275\u0275text(1, "add_circle_outline");
    \u0275\u0275elementEnd();
  }
}
function CreateBatchConfigComponent_div_34_section_1_ng_container_37_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 127);
    \u0275\u0275listener("click", function CreateBatchConfigComponent_div_34_section_1_ng_container_37_div_3_Template_div_click_0_listener() {
      const feature_r17 = \u0275\u0275restoreView(_r16).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.toggleFeature(feature_r17));
    });
    \u0275\u0275elementStart(1, "div", 128)(2, "div", 129)(3, "span", 130);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, CreateBatchConfigComponent_div_34_section_1_ng_container_37_div_3_span_5_Template, 3, 4, "span", 131)(6, CreateBatchConfigComponent_div_34_section_1_ng_container_37_div_3_span_6_Template, 2, 1, "span", 132)(7, CreateBatchConfigComponent_div_34_section_1_ng_container_37_div_3_div_7_Template, 2, 1, "div", 133);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, CreateBatchConfigComponent_div_34_section_1_ng_container_37_div_3_mat_icon_8_Template, 2, 0, "mat-icon", 134)(9, CreateBatchConfigComponent_div_34_section_1_ng_container_37_div_3_mat_icon_9_Template, 2, 0, "mat-icon", 135);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const feature_r17 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("opacity-40", ctx_r0.isEndpointDimmed(feature_r17));
    \u0275\u0275property("ngClass", ctx_r0.highlightCardClass(feature_r17));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(feature_r17.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isParamHighlighted(feature_r17));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", feature_r17.description);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.featureParamFields(feature_r17).length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isSelected(feature_r17));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isSelected(feature_r17));
  }
}
function CreateBatchConfigComponent_div_34_section_1_ng_container_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p", 125);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, CreateBatchConfigComponent_div_34_section_1_ng_container_37_div_3_Template, 10, 9, "div", 126);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const group_r20 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.featureGroupLabel(group_r20.id), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", group_r20.items);
  }
}
function CreateBatchConfigComponent_div_34_section_1_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 146)(1, "mat-icon", 147);
    \u0275\u0275text(2, "search_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 1, "createBatchConfig.noEndpointsMatch", \u0275\u0275pureFunction1(4, _c1, ctx_r0.endpointSearchQuery())));
  }
}
function CreateBatchConfigComponent_div_34_section_1_div_44_div_9_ng_container_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 142);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function CreateBatchConfigComponent_div_34_section_1_div_44_div_9_ng_container_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 143);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const value_r22 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(6);
    \u0275\u0275property("ngClass", ctx_r0.paramEnumClass());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", value_r22, " ");
  }
}
function CreateBatchConfigComponent_div_34_section_1_div_44_div_9_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 139);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275template(4, CreateBatchConfigComponent_div_34_section_1_div_44_div_9_ng_container_1_span_4_Template, 2, 0, "span", 140);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, CreateBatchConfigComponent_div_34_section_1_div_44_div_9_ng_container_1_span_5_Template, 2, 2, "span", 141);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const chip_r23 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.paramChipClass(chip_r23.required));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 4, ctx_r0.paramFilterLabelKey(chip_r23.field), ctx_r0.paramFilterLabelParams(chip_r23.field)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", chip_r23.required);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", chip_r23.enums);
  }
}
function CreateBatchConfigComponent_div_34_section_1_div_44_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 152);
    \u0275\u0275template(1, CreateBatchConfigComponent_div_34_section_1_div_44_div_9_ng_container_1_Template, 6, 7, "ng-container", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const feature_r24 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.featureParamFields(feature_r24));
  }
}
function CreateBatchConfigComponent_div_34_section_1_div_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 148)(1, "div", 128)(2, "span", 149);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 129)(5, "span", 130);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 137);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, CreateBatchConfigComponent_div_34_section_1_div_44_div_9_Template, 2, 1, "div", 150);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 151);
    \u0275\u0275listener("click", function CreateBatchConfigComponent_div_34_section_1_div_44_Template_button_click_10_listener($event) {
      const feature_r24 = \u0275\u0275restoreView(_r21).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      ctx_r0.toggleFeature(feature_r24);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(11, "mat-icon", 124);
    \u0275\u0275text(12, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const feature_r24 = ctx.$implicit;
    const i_r25 = ctx.index;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", i_r25 + 1, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(feature_r24.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.featureGroupLabel(ctx_r0.featureGroup(feature_r24)));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.featureParamFields(feature_r24).length);
  }
}
function CreateBatchConfigComponent_div_34_section_1_div_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 153)(1, "mat-icon", 154);
    \u0275\u0275text(2, "playlist_add");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 155);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "createBatchConfig.selectFeaturesToAdd"));
  }
}
function CreateBatchConfigComponent_div_34_section_1_span_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "createBatchConfig.saving"));
  }
}
function CreateBatchConfigComponent_div_34_section_1_span_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "createBatchConfig.next"));
  }
}
function CreateBatchConfigComponent_div_34_section_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section")(1, "h2", 92);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 93);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 94);
    \u0275\u0275repeaterCreate(8, CreateBatchConfigComponent_div_34_section_1_For_9_Template, 3, 11, "button", 95, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 96);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 94);
    \u0275\u0275repeaterCreate(14, CreateBatchConfigComponent_div_34_section_1_For_15_Template, 4, 5, "button", 97, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 98)(17, "div", 99)(18, "h3", 100);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "transloco");
    \u0275\u0275template(21, CreateBatchConfigComponent_div_34_section_1_span_21_Template, 2, 2, "span", 47)(22, CreateBatchConfigComponent_div_34_section_1_span_22_Template, 2, 1, "span", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275template(23, CreateBatchConfigComponent_div_34_section_1_div_23_Template, 3, 3, "div", 101);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 102)(25, "div", 103)(26, "div", 104);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 105)(30, "mat-form-field", 106)(31, "mat-icon", 107);
    \u0275\u0275text(32, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "input", 108);
    \u0275\u0275pipe(34, "transloco");
    \u0275\u0275listener("ngModelChange", function CreateBatchConfigComponent_div_34_section_1_Template_input_ngModelChange_33_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.endpointSearchQuery.set($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(35, CreateBatchConfigComponent_div_34_section_1_button_35_Template, 3, 0, "button", 109);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 110);
    \u0275\u0275template(37, CreateBatchConfigComponent_div_34_section_1_ng_container_37_Template, 4, 2, "ng-container", 19)(38, CreateBatchConfigComponent_div_34_section_1_div_38_Template, 6, 6, "div", 111);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 112)(40, "div", 113);
    \u0275\u0275text(41);
    \u0275\u0275pipe(42, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 114);
    \u0275\u0275listener("cdkDropListDropped", function CreateBatchConfigComponent_div_34_section_1_Template_div_cdkDropListDropped_43_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.drop($event));
    });
    \u0275\u0275template(44, CreateBatchConfigComponent_div_34_section_1_div_44_Template, 13, 4, "div", 115)(45, CreateBatchConfigComponent_div_34_section_1_div_45_Template, 6, 3, "div", 116);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(46, "div", 117)(47, "button", 118);
    \u0275\u0275listener("click", function CreateBatchConfigComponent_div_34_section_1_Template_button_click_47_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.goBack());
    });
    \u0275\u0275text(48);
    \u0275\u0275pipe(49, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "button", 46);
    \u0275\u0275listener("click", function CreateBatchConfigComponent_div_34_section_1_Template_button_click_50_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onNext(2));
    });
    \u0275\u0275template(51, CreateBatchConfigComponent_div_34_section_1_span_51_Template, 3, 3, "span", 47)(52, CreateBatchConfigComponent_div_34_section_1_span_52_Template, 3, 3, "span", 47);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 20, "createBatchConfig.selectEndpoints"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 22, "createBatchConfig.selectEndpointsHint"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(36, _c0));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 24, "visitaGuide.highlightHint"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.paramHighlightOptions);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(20, 26, "createBatchConfig.availableFeatures"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.endpointSearchQuery());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.endpointSearchQuery());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isLoadingFeatures());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(28, 28, "createBatchConfig.available"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275property("ngModel", ctx_r0.endpointSearchQuery())("placeholder", \u0275\u0275pipeBind1(34, 30, "createBatchConfig.searchPlaceholder"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.endpointSearchQuery());
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.groupedAvailableFeatures());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isLoadingFeatures() && ctx_r0.filteredAvailableFeatures().length === 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(42, 32, "createBatchConfig.selectedSteps"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r0.selectedFeatures());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.selectedFeatures().length === 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(49, 34, "createBatchConfig.back"));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.selectedFeatures().length === 0 || ctx_r0.isSavingStep());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isSavingStep());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isSavingStep());
  }
}
function CreateBatchConfigComponent_div_34_section_2_article_9_div_10_ng_container_5_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 175);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "createBatchConfig.required"));
  }
}
function CreateBatchConfigComponent_div_34_section_2_article_9_div_10_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 172)(2, "span", 173);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, CreateBatchConfigComponent_div_34_section_2_article_9_div_10_ng_container_5_span_4_Template, 3, 3, "span", 174);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const dep_r27 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(dep_r27.field);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", dep_r27.required);
  }
}
function CreateBatchConfigComponent_div_34_section_2_article_9_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "h4", 169);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 170);
    \u0275\u0275template(5, CreateBatchConfigComponent_div_34_section_2_article_9_div_10_ng_container_5_Template, 5, 2, "ng-container", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 171);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const feature_r28 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "createBatchConfig.requiredParameters"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r0.visibleDependencies(feature_r28));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 5, "createBatchConfig.parametersMappedHint"), " ");
  }
}
function CreateBatchConfigComponent_div_34_section_2_article_9_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 176);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "createBatchConfig.noParametersRequired"), " ");
  }
}
function CreateBatchConfigComponent_div_34_section_2_article_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 161)(1, "div", 162)(2, "div", 163)(3, "span", 164);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 165);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 166);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 167);
    \u0275\u0275template(10, CreateBatchConfigComponent_div_34_section_2_article_9_div_10_Template, 9, 7, "div", 47)(11, CreateBatchConfigComponent_div_34_section_2_article_9_div_11_Template, 3, 3, "div", 168);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const feature_r28 = ctx.$implicit;
    const i_r29 = ctx.index;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", i_r29 + 1, ".");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(feature_r28.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getEndpointDisplay(feature_r28));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.visibleDependencies(feature_r28).length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.visibleDependencies(feature_r28).length === 0);
  }
}
function CreateBatchConfigComponent_div_34_section_2_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "createBatchConfig.saving"));
  }
}
function CreateBatchConfigComponent_div_34_section_2_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "createBatchConfig.next"));
  }
}
function CreateBatchConfigComponent_div_34_section_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section")(1, "h2", 28);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 156)(5, "p", 157);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 158);
    \u0275\u0275template(9, CreateBatchConfigComponent_div_34_section_2_article_9_Template, 12, 5, "article", 159);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 160)(11, "button", 118);
    \u0275\u0275listener("click", function CreateBatchConfigComponent_div_34_section_2_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.goBack());
    });
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 46);
    \u0275\u0275listener("click", function CreateBatchConfigComponent_div_34_section_2_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onNext(3));
    });
    \u0275\u0275template(15, CreateBatchConfigComponent_div_34_section_2_span_15_Template, 3, 3, "span", 47)(16, CreateBatchConfigComponent_div_34_section_2_span_16_Template, 3, 3, "span", 47);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 7, "createBatchConfig.reviewParameters"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 9, "createBatchConfig.reviewParamsIntro"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r0.selectedFeatures());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 11, "createBatchConfig.back"));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.isSavingStep());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isSavingStep());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isSavingStep());
  }
}
function CreateBatchConfigComponent_div_34_section_3_div_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 195)(1, "span", 181);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 196);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "createBatchConfig.webhookUrl"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((tmp_4_0 = ctx_r0.step1Form.get("webhookUrl")) == null ? null : tmp_4_0.value);
  }
}
function CreateBatchConfigComponent_div_34_section_3_div_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 195)(1, "span", 181);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 196);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "createBatchConfig.emailOnCompletion"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.emailChips().join(", "));
  }
}
function CreateBatchConfigComponent_div_34_section_3_div_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 197)(1, "span", 198);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 182);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const feature_r31 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(feature_r31.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", (feature_r31.price || feature_r31.smartCheckPrice || 0).toFixed(2), "");
  }
}
function CreateBatchConfigComponent_div_34_section_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section")(1, "h2", 28);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 177)(5, "h3", 178);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 179)(9, "div", 180)(10, "div")(11, "span", 181);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 182);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div")(17, "span", 181);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 182);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div")(23, "span", 181);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span", 182);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div")(30, "span", 181);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "span", 183);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div")(36, "span", 181);
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "span", 182);
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(42, CreateBatchConfigComponent_div_34_section_3_div_42_Template, 6, 4, "div", 184)(43, CreateBatchConfigComponent_div_34_section_3_div_43_Template, 6, 4, "div", 184);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 185)(45, "h4", 186);
    \u0275\u0275text(46);
    \u0275\u0275pipe(47, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "div", 187)(49, "div", 188);
    \u0275\u0275template(50, CreateBatchConfigComponent_div_34_section_3_div_50_Template, 5, 2, "div", 189);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "div", 190)(52, "span", 191);
    \u0275\u0275text(53);
    \u0275\u0275pipe(54, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "span", 192);
    \u0275\u0275text(56);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(57, "div", 193)(58, "button", 118);
    \u0275\u0275listener("click", function CreateBatchConfigComponent_div_34_section_3_Template_button_click_58_listener() {
      \u0275\u0275restoreView(_r30);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.goBack());
    });
    \u0275\u0275text(59);
    \u0275\u0275pipe(60, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "button", 194);
    \u0275\u0275listener("click", function CreateBatchConfigComponent_div_34_section_3_Template_button_click_61_listener() {
      \u0275\u0275restoreView(_r30);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.submit());
    });
    \u0275\u0275text(62);
    \u0275\u0275pipe(63, "transloco");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_7_0;
    let tmp_11_0;
    let tmp_14_0;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 20, "createBatchConfig.reviewAndCreate"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 22, "createBatchConfig.summary"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 24, "createBatchConfig.configurationName"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((tmp_5_0 = ctx_r0.step1Form.get("name")) == null ? null : tmp_5_0.value);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 26, "createBatchConfig.country"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((tmp_7_0 = ctx_r0.step1Form.get("country")) == null ? null : tmp_7_0.value);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 28, "createBatchConfig.runMode"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(28, 30, ctx_r0.runModeLabelKey()));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(32, 32, "createBatchConfig.mergeStrategy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((tmp_11_0 = ctx_r0.step1Form.get("mergeStrategy")) == null ? null : tmp_11_0.value);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(38, 34, "createBatchConfig.totalSteps"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(41, 36, "createBatchConfig.stepsCount", \u0275\u0275pureFunction1(47, _c2, ctx_r0.selectedFeatures().length)));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (tmp_14_0 = ctx_r0.step1Form.get("webhookUrl")) == null ? null : tmp_14_0.value);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.emailChips().length);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(47, 39, "createBatchConfig.estimatedCostPerRecord"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r0.selectedFeatures());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(54, 41, "createBatchConfig.totalPerRecord"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("$", ctx_r0.totalCostPerRecord().toFixed(2), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(60, 43, "createBatchConfig.back"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(63, 45, ctx_r0.isEditMode() ? "createBatchConfig.updateConfiguration" : "createBatchConfig.createConfiguration"), " ");
  }
}
function CreateBatchConfigComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275template(1, CreateBatchConfigComponent_div_34_section_1_Template, 53, 37, "section", 47)(2, CreateBatchConfigComponent_div_34_section_2_Template, 17, 13, "section", 47)(3, CreateBatchConfigComponent_div_34_section_3_Template, 64, 49, "section", 47);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.wizardStep() === 2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.wizardStep() === 3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.wizardStep() === 4);
  }
}
var EMAIL_TOKEN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
var SMART_BATCH_TEST_TYPE = "smart_batch_batch_completed";
var parseEmailList = (value) => {
  const seen = /* @__PURE__ */ new Set();
  const emails = [];
  for (const token of (value || "").split(/[,;\n]+/)) {
    const email = token.trim();
    if (!email)
      continue;
    const key = email.toLowerCase();
    if (seen.has(key))
      continue;
    seen.add(key);
    emails.push(email);
  }
  return emails;
};
var CreateBatchConfigComponent = class _CreateBatchConfigComponent {
  constructor() {
    this._formBuilder = inject(FormBuilder);
    this._smartBatchService = inject(SmartBatchService);
    this._webhooksService = inject(WebhooksService);
    this._router = inject(Router);
    this._route = inject(ActivatedRoute);
    this._transloco = inject(TranslocoService);
    this._loadedConfig = null;
    this._checkListPrefill = null;
    this.isEditMode = signal(false);
    this.editConfigId = signal(null);
    this.isLoadingConfig = signal(false);
    this.isSavingStep = signal(false);
    this.errorMessage = signal(null);
    this.wizardStep = signal(1);
    this.testingWebhook = signal(false);
    this.testResult = signal(null);
    this.wizardLabels = [
      "createBatchConfig.basicInformation",
      "createBatchConfig.selectEndpoints",
      "createBatchConfig.reviewParameters",
      "createBatchConfig.reviewAndCreate"
    ];
    this.countries = signal(availableCountries().map((country) => ({
      code: country.name,
      name: `${getCountryFlag(country.name)} ${country.name}`
    })).sort((left, right) => left.code.localeCompare(right.code)));
    this.availableFeatures = signal([]);
    this.isLoadingFeatures = signal(false);
    this.step1Form = this._formBuilder.group({
      name: ["", [Validators.required, Validators.maxLength(150)]],
      description: ["", [Validators.maxLength(800)]],
      country: ["Colombia", Validators.required],
      inputFormat: ["csv", Validators.required],
      outputFormat: ["csv", Validators.required],
      mergeStrategy: ["sequential", Validators.required],
      executor: ["queue", Validators.required],
      webhookUrl: ["", [Validators.pattern(/^https?:\/\/.+/i)]]
    });
    this.emailChips = signal([]);
    this.emailDraft = signal("");
    this.emailDraftError = signal(false);
    this.notificationsOpen = signal(false);
    this.loadedWebhookUrl = "";
    this.verifiedWebhookUrl = signal(null);
    this.selectedFeatures = signal([]);
    this.endpointSearchQuery = signal("");
    this.endpointGroupFilter = signal("all");
    this.endpointParamHighlight = signal(null);
    this.paramHighlightOptions = [
      { id: "document-only", labelKey: "visitaGuide.highlightDocumentOnly" },
      { id: "plate-only", labelKey: "visitaGuide.highlightPlateOnly" },
      { id: "nit-only", labelKey: "visitaGuide.highlightNitOnly" }
    ];
    this.advancedOpen = signal(false);
    this.fromGuide = this._route.snapshot.queryParamMap.get("from") === "guide";
    this.selectedCountryForEndpoints = signal("");
    this.availableFeaturesForCountry = computed(() => {
      return filterFeaturesForCountry(this.availableFeatures(), this.selectedCountryForEndpoints());
    });
    this.filteredAvailableFeatures = computed(() => {
      const query = this.endpointSearchQuery().trim().toLowerCase();
      const group = this.endpointGroupFilter();
      const features = this.availableFeaturesForCountry().filter((feature) => {
        if (group !== "all" && this.featureGroup(feature) !== group)
          return false;
        if (!query)
          return true;
        const name = (feature.name ?? "").toLowerCase();
        const url = this.getEndpointDisplay(feature).toLowerCase();
        const code = (feature.code ?? "").toLowerCase();
        return name.includes(query) || url.includes(query) || code.includes(query);
      });
      return features;
    });
    this.groupedAvailableFeatures = computed(() => {
      const buckets = [
        { id: "citizen", items: [] },
        { id: "vehicle", items: [] },
        { id: "company", items: [] },
        { id: "other", items: [] }
      ];
      const highlight = this.endpointParamHighlight();
      for (const feature of this.filteredAvailableFeatures()) {
        const group = buckets.find((item) => item.id === this.featureGroup(feature));
        group?.items.push(feature);
      }
      if (highlight) {
        for (const bucket of buckets) {
          bucket.items.sort((left, right) => {
            const leftMatch = this.isParamHighlighted(left) ? 0 : 1;
            const rightMatch = this.isParamHighlighted(right) ? 0 : 1;
            return leftMatch - rightMatch;
          });
        }
      }
      return buckets.filter((bucket) => bucket.items.length > 0);
    });
    this.totalCostPerRecord = computed(() => {
      return this.selectedFeatures().reduce((sum, feature) => {
        return sum + (feature.price || feature.smartCheckPrice || 0);
      }, 0);
    });
    const id = this._route.snapshot.paramMap.get("id");
    this._checkListPrefill = readCheckListBatchPrefill(this._route.snapshot.queryParamMap);
    if (id) {
      this.isEditMode.set(true);
      this.editConfigId.set(id);
      this.loadConfiguration(id);
    }
    this.step1Form.get("country")?.valueChanges.subscribe((country) => {
      if (!country || this.isLoadingConfig())
        return;
      if (country === this.selectedCountryForEndpoints())
        return;
      this.fetchFeatures(country, { resetSelection: !this._checkListPrefill });
    });
    this.step1Form.get("webhookUrl")?.valueChanges.subscribe(() => this.testResult.set(null));
    if (!id) {
      if (this._checkListPrefill?.country) {
        this.step1Form.patchValue({
          country: this._checkListPrefill.country,
          name: this._checkListPrefill.name || this.step1Form.value.name,
          description: this._checkListPrefill.name ? `Created from Check List: ${this._checkListPrefill.name}` : this.step1Form.value.description
        }, { emitEvent: false });
      }
      const country = this.step1Form.get("country")?.value || "Colombia";
      this.fetchFeatures(country, { resetSelection: !this._checkListPrefill });
    }
  }
  loadConfiguration(id) {
    this.errorMessage.set(null);
    this.isLoadingConfig.set(true);
    this._smartBatchService.getConfiguration(id).subscribe({
      next: (res) => this.applyLoadedConfiguration(res.data),
      error: () => {
        this.isLoadingConfig.set(false);
        this.showError("createBatchConfig.loadFailed");
      }
    });
  }
  applyLoadedConfiguration(config) {
    this._loadedConfig = config;
    const countryValue = resolveDropdownCountry(config.country, this.countries().map((country) => country.code));
    this.step1Form.patchValue({
      name: config.name,
      description: config.description || "",
      country: countryValue,
      inputFormat: config.inputFormat,
      outputFormat: config.outputFormat,
      mergeStrategy: config.mergeStrategy,
      executor: config.executor === "queue" ? "queue" : "browser",
      webhookUrl: config.notification?.webhookUrl || ""
    }, { emitEvent: false });
    this.loadedWebhookUrl = (config.notification?.webhookUrl || "").trim();
    this.emailChips.set([...config.notification?.emailOnCompletion || []]);
    this.emailDraft.set("");
    this.emailDraftError.set(false);
    this.notificationsOpen.set(Boolean(this.loadedWebhookUrl || this.emailChips().length));
    this.selectedCountryForEndpoints.set(countryValue);
    this._smartBatchService.getAvailableFeatures().subscribe({
      next: (featuresRes) => {
        const features = featuresRes.data || [];
        this.availableFeatures.set(features);
        this.selectedFeatures.set(this.mapStepsToFeatures(config, features));
        this.isLoadingConfig.set(false);
      },
      error: () => {
        this.isLoadingConfig.set(false);
        this.showError("createBatchConfig.featuresLoadFailed");
      }
    });
  }
  mapStepsToFeatures(config, features) {
    return [...config.steps || []].sort((a, b) => a.sequence - b.sequence).map((step) => {
      if (typeof step.appFeature === "object" && step.appFeature) {
        return step.appFeature;
      }
      return features.find((feature) => feature._id === step.appFeature);
    }).filter((feature) => Boolean(feature));
  }
  fetchFeatures(country, options = {}) {
    this.isLoadingFeatures.set(true);
    if (options.resetSelection) {
      this.selectedFeatures.set([]);
    }
    this.endpointSearchQuery.set("");
    this.selectedCountryForEndpoints.set(country);
    this._smartBatchService.getAvailableFeatures().subscribe({
      next: (res) => {
        this.availableFeatures.set(res.data || []);
        this.applyCheckListPrefill(res.data || []);
        this.isLoadingFeatures.set(false);
      },
      error: () => {
        this.isLoadingFeatures.set(false);
        this.showError("createBatchConfig.featuresLoadFailed");
      }
    });
  }
  showError(key) {
    this.errorMessage.set(this._transloco.translate(key));
  }
  currentWebhookUrl() {
    return (this.step1Form.get("webhookUrl")?.value || "").trim();
  }
  canTestWebhook() {
    const control = this.step1Form.get("webhookUrl");
    return Boolean(this.currentWebhookUrl()) && !control?.invalid && !this.testingWebhook();
  }
  isWebhookReady() {
    const url = this.currentWebhookUrl();
    if (!url)
      return true;
    if (this.testingWebhook() || this.testResult()?.status === "fail")
      return false;
    if (this.verifiedWebhookUrl() === url)
      return true;
    return url === this.loadedWebhookUrl;
  }
  canContinueStep1() {
    return this.step1Form.valid && !this.isSavingStep() && this.isWebhookReady();
  }
  showNotificationFields() {
    return this.notificationsOpen() || !this.isWebhookReady();
  }
  toggleNotifications() {
    this.notificationsOpen.update((open) => !open);
  }
  testWebhook() {
    const url = this.currentWebhookUrl();
    if (!this.canTestWebhook())
      return;
    this.testingWebhook.set(true);
    this.testResult.set(null);
    this.verifiedWebhookUrl.set(null);
    this._webhooksService.test(url, SMART_BATCH_TEST_TYPE).subscribe({
      next: (response) => {
        this.testingWebhook.set(false);
        const result = response.data || null;
        this.testResult.set(result);
        if (result?.status === "success")
          this.verifiedWebhookUrl.set(url);
      },
      error: (error) => {
        this.testingWebhook.set(false);
        this.testResult.set({
          status: "fail",
          message: error.error?.message || this._transloco.translate("createBatchConfig.testFailed")
        });
      }
    });
  }
  addEmailChip(raw) {
    const emails = parseEmailList(raw);
    if (!emails.length)
      return;
    if (emails.some((email) => !EMAIL_TOKEN.test(email))) {
      this.emailDraftError.set(true);
      return;
    }
    this.emailChips.update((current) => {
      const seen = new Set(current.map((email) => email.toLowerCase()));
      const next = [...current];
      for (const email of emails) {
        const key = email.toLowerCase();
        if (seen.has(key))
          continue;
        seen.add(key);
        next.push(email);
      }
      return next;
    });
    this.emailDraft.set("");
    this.emailDraftError.set(false);
  }
  removeEmailChip(email) {
    this.emailChips.update((current) => current.filter((item) => item !== email));
  }
  onEmailKeydown(event) {
    const draft = this.emailDraft().trim();
    if (event.key === "Enter" || event.key === ",") {
      event.preventDefault();
      this.addEmailChip(draft);
      return;
    }
    if (event.key === "Backspace" && !draft && this.emailChips().length) {
      this.emailChips.update((current) => current.slice(0, -1));
    }
  }
  onEmailInput(value) {
    this.emailDraftError.set(false);
    if (value.includes(",") || value.includes(";")) {
      this.addEmailChip(value);
      return;
    }
    this.emailDraft.set(value);
  }
  onEmailBlur() {
    const draft = this.emailDraft().trim();
    if (draft)
      this.addEmailChip(draft);
  }
  // Feature Selection Logic
  applyCheckListPrefill(features) {
    const prefill = this._checkListPrefill;
    if (!prefill?.codes.length)
      return;
    const selected = features.filter((feature) => prefill.codes.includes(feature.code));
    if (selected.length)
      this.selectedFeatures.set(selected);
  }
  toggleFeature(feature) {
    const current = this.selectedFeatures();
    const index = current.findIndex((f) => f._id === feature._id);
    if (index >= 0) {
      this.selectedFeatures.update((features) => features.filter((f) => f._id !== feature._id));
    } else {
      this.selectedFeatures.update((features) => [...features, feature]);
    }
  }
  isSelected(feature) {
    return this.selectedFeatures().some((f) => f._id === feature._id);
  }
  featureGroup(feature) {
    return featureGroup(feature);
  }
  isParamHighlighted(feature) {
    return matchesParamHighlight(feature, this.endpointParamHighlight());
  }
  setEndpointParamHighlight(highlight) {
    this.endpointParamHighlight.update((current) => current === highlight ? null : highlight);
  }
  highlightChipClass(highlight) {
    return paramHighlightChipClass(highlight, this.endpointParamHighlight() === highlight);
  }
  highlightCardClass(feature) {
    return paramHighlightCardClass(this.endpointParamHighlight(), this.isParamHighlighted(feature));
  }
  isEndpointDimmed(feature) {
    if (this.isParamHighlighted(feature))
      return false;
    return Boolean(this.endpointParamHighlight()) || this.isSelected(feature);
  }
  highlightBadgeClass() {
    return paramHighlightBadgeClass(this.endpointParamHighlight());
  }
  highlightSwatchClass(highlight) {
    return paramHighlightSwatchClass(highlight);
  }
  featureParamFields(feature) {
    return featureParamChips(feature);
  }
  paramChipClass(required) {
    return requiredParamChipClass(required);
  }
  paramEnumClass() {
    return paramEnumChipClass;
  }
  paramFilterLabelKey(field) {
    return paramFieldLabelKey(field);
  }
  paramFilterLabelParams(field) {
    return { field: humanizeParamField(field) };
  }
  featureGroupLabel(group) {
    const keys = {
      citizen: "visitaGuide.entityPerson",
      vehicle: "visitaGuide.entityVehicle",
      company: "visitaGuide.entityCompany",
      other: "createBatchConfig.groupOther"
    };
    return this._transloco.translate(keys[group]);
  }
  setEndpointGroupFilter(group) {
    this.endpointGroupFilter.set(group);
  }
  backLink() {
    return this.fromGuide ? "/smart-batch" : "/smart-batch/workspace";
  }
  getEndpointDisplay(feature) {
    const url = feature?.url;
    if (!url)
      return feature?.code ?? "";
    return url.startsWith("/") ? url : "/" + url;
  }
  drop(event) {
    const currentList = this.selectedFeatures();
    moveItemInArray(currentList, event.previousIndex, event.currentIndex);
    this.selectedFeatures.set([...currentList]);
  }
  featureId(feature) {
    if (!feature)
      return void 0;
    return typeof feature === "object" ? feature._id : feature;
  }
  /** Build config from current form state and selected features. */
  buildConfigFromCurrentState() {
    const basicInfo = this.step1Form.value;
    const existingSteps = this._loadedConfig?.steps || [];
    const steps = this.selectedFeatures().map((feature, index) => {
      const previous = existingSteps.find((step) => this.featureId(step.appFeature) === feature._id);
      return {
        appFeature: feature._id,
        sequence: index + 1,
        enabled: previous?.enabled ?? true,
        parameterDefaults: previous?.parameterDefaults ?? {},
        maxRetries: previous?.maxRetries ?? 3,
        inputFieldMapping: previous?.inputFieldMapping ?? {},
        outputFieldsToKeep: previous?.outputFieldsToKeep ?? [],
        retryDelayBaseSeconds: Math.max(1, previous?.retryDelayBaseSeconds ?? 4),
        timeoutSeconds: Math.max(5, previous?.timeoutSeconds ?? 30)
      };
    });
    return {
      name: basicInfo.name,
      description: basicInfo.description,
      country: basicInfo.country,
      inputFormat: basicInfo.inputFormat,
      outputFormat: basicInfo.outputFormat,
      mergeStrategy: basicInfo.mergeStrategy,
      executor: this.currentRunMode(),
      notification: {
        webhookUrl: (basicInfo.webhookUrl || "").trim(),
        emailOnCompletion: this.emailChips()
      },
      steps,
      isActive: this._loadedConfig?.isActive ?? true
    };
  }
  currentRunMode() {
    return this.step1Form.get("executor")?.value === "queue" ? "queue" : "browser";
  }
  isAsyncSelected() {
    return this.currentRunMode() === "queue";
  }
  selectRunMode(mode) {
    this.step1Form.patchValue({ executor: mode });
  }
  runModeLabelKey() {
    return this.isAsyncSelected() ? "createBatchConfig.runModeAsync" : "createBatchConfig.runModeSync";
  }
  runModeCardClass(selected) {
    const base = "rounded-xl border-2 p-4 text-left transition";
    if (selected) {
      return `${base} border-stone-900 bg-stone-900 text-white dark:border-white dark:bg-white/10`;
    }
    return `${base} border-stone-200 dark:border-gray-700`;
  }
  runModeHintClass(selected) {
    if (selected)
      return "mt-1 block text-xs leading-relaxed text-stone-300";
    return "mt-1 block text-xs leading-relaxed text-stone-500 dark:text-stone-400";
  }
  goBack() {
    this.wizardStep.update((step) => Math.max(1, step - 1));
  }
  advanceWizard() {
    this.errorMessage.set(null);
    this.wizardStep.update((step) => Math.min(4, step + 1));
  }
  /** Save current step and advance wizard (edit mode only). */
  onNext(stepIndex) {
    if (this.isSavingStep())
      return;
    if (stepIndex === 1 && !this.canContinueStep1())
      return;
    if (stepIndex === 3) {
      this.advanceWizard();
      return;
    }
    if (this.isEditMode() && this.editConfigId()) {
      const config = this.buildConfigFromCurrentState();
      if (config.steps.length === 0) {
        this.advanceWizard();
        return;
      }
      this.isSavingStep.set(true);
      this._smartBatchService.updateConfiguration(this.editConfigId(), config).subscribe({
        next: () => {
          this.isSavingStep.set(false);
          this.advanceWizard();
        },
        error: (err) => {
          console.error("Error saving step", err);
          this.isSavingStep.set(false);
          this.showError("createBatchConfig.saveFailed");
        }
      });
    } else {
      this.advanceWizard();
    }
  }
  /** Submit final step (create or full update). */
  submit() {
    if (!this.canContinueStep1())
      return;
    if (this.selectedFeatures().length === 0)
      return;
    const config = this.buildConfigFromCurrentState();
    if (this.isEditMode() && this.editConfigId()) {
      this._smartBatchService.updateConfiguration(this.editConfigId(), config).subscribe({
        next: () => {
          this._router.navigate(["/smart-batch/workspace"]);
        },
        error: (err) => {
          console.error("Error updating batch", err);
          this.showError("createBatchConfig.saveFailed");
        }
      });
    } else {
      this._smartBatchService.createConfiguration(config).subscribe({
        next: (res) => {
          const id = res.data._id ?? res.data.id;
          if (id) {
            this._router.navigate(["/smart-batch", id]);
            return;
          }
          this._router.navigate(["/smart-batch/workspace"]);
        },
        error: (err) => {
          console.error("Error creating batch", err);
          this.showError("createBatchConfig.saveFailed");
        }
      });
    }
  }
  /** Dependencies shown in the wizard (hides internal-only fields such as `force`). */
  visibleDependencies(feature) {
    const deps = feature?.dependencies;
    if (!deps?.length)
      return [];
    return deps.filter((d) => d?.field && isClientVisibleBatchDependencyField(d.field));
  }
  static {
    this.\u0275fac = function CreateBatchConfigComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CreateBatchConfigComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CreateBatchConfigComponent, selectors: [["create-batch-config"]], decls: 35, vars: 25, consts: [[1, "flex", "min-h-screen", "min-w-0", "flex-auto", "flex-col", "bg-stone-50", "dark:bg-gray-950"], [1, "border-b", "border-stone-200/90", "bg-white/90", "px-5", "py-6", "backdrop-blur-sm", "dark:border-gray-800", "dark:bg-gray-950/90", "md:px-8", "md:py-8"], [1, "mx-auto", "flex", "w-full", "max-w-5xl", "flex-col", "gap-5"], [1, "flex", "flex-wrap", "items-center", "text-xs", "font-medium", "leading-none", "text-stone-500", "dark:text-stone-400"], ["routerLink", "/home", 1, "cursor-pointer", "text-stone-700", "underline-offset-4", "hover:underline", "dark:text-stone-300"], ["svgIcon", "heroicons_solid:chevron-right", 1, "icon-size-4", "mx-2", "text-stone-400"], ["routerLink", "/smart-batch", 1, "cursor-pointer", "text-stone-700", "underline-offset-4", "hover:underline", "dark:text-stone-300"], ["routerLink", "/smart-batch/workspace", "class", "cursor-pointer text-stone-700 underline-offset-4 hover:underline dark:text-stone-300", 4, "ngIf"], ["class", "icon-size-4 mx-2 text-stone-400", "svgIcon", "heroicons_solid:chevron-right", 4, "ngIf"], [1, "cursor-default", "text-stone-600", "dark:text-stone-300"], [1, "flex", "flex-wrap", "items-start", "justify-between", "gap-3"], [1, "flex", "min-w-0", "items-start", "gap-3"], ["mat-icon-button", "", "type", "button", 1, "shrink-0", "!text-stone-600", "dark:!text-stone-300", 3, "routerLink"], [1, "min-w-0"], [1, "text-2xl", "font-semibold", "tracking-tight", "text-stone-900", "dark:text-white", "md:text-3xl"], [1, "flex", "flex-auto", "flex-col", "px-5", "py-8", "md:px-8", "md:py-10"], [1, "mx-auto", "flex", "w-full", "max-w-5xl", "flex-col", "gap-6"], ["class", "rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-800/50 dark:bg-red-900/20 dark:text-red-300", "role", "alert", 4, "ngIf"], ["aria-label", "Wizard steps", 1, "flex", "flex-wrap", "items-center", "gap-x-4", "gap-y-2", "text-sm"], [4, "ngFor", "ngForOf"], ["class", "flex flex-col gap-6", 3, "formGroup", 4, "ngIf"], ["class", "rounded-2xl border border-stone-200/90 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900 md:p-8", 4, "ngIf"], ["routerLink", "/smart-batch/workspace", 1, "cursor-pointer", "text-stone-700", "underline-offset-4", "hover:underline", "dark:text-stone-300"], ["role", "alert", 1, "rounded-xl", "border", "border-red-200", "bg-red-50", "px-4", "py-3", "text-sm", "text-red-700", "dark:border-red-800/50", "dark:bg-red-900/20", "dark:text-red-300"], ["class", "hidden text-stone-300 dark:text-stone-600 sm:inline", "aria-hidden", "true", 4, "ngIf"], ["aria-hidden", "true", 1, "hidden", "text-stone-300", "dark:text-stone-600", "sm:inline"], [1, "flex", "flex-col", "gap-6", 3, "formGroup"], [1, "rounded-2xl", "border", "border-stone-200/90", "bg-white", "p-6", "shadow-sm", "dark:border-gray-800", "dark:bg-gray-900", "md:p-8"], [1, "mb-2", "text-base", "font-semibold", "text-stone-900", "dark:text-white"], [1, "grid", "grid-cols-1", "gap-6", "pt-4", "md:grid-cols-2"], ["appearance", "outline", 1, "col-span-2", "w-full"], ["matInput", "", "formControlName", "name", 3, "placeholder"], ["matInput", "", "formControlName", "description", "rows", "3", 3, "placeholder"], ["appearance", "outline", 1, "w-full"], ["formControlName", "country"], [3, "value", 4, "ngFor", "ngForOf"], [1, "rounded-2xl", "border", "border-dashed", "border-stone-300", "bg-stone-50/70", "p-5", "shadow-sm", "dark:border-gray-700", "dark:bg-gray-900/40", "md:p-6"], ["type", "button", 1, "flex", "w-full", "items-start", "justify-between", "gap-4", "text-left", 3, "click"], [1, "mb-1", "text-xs", "font-medium", "uppercase", "tracking-wider", "text-stone-400"], [1, "text-base", "font-semibold", "text-stone-900", "dark:text-white"], [1, "mt-1", "text-sm", "text-stone-500", "dark:text-stone-400"], [1, "mt-1", "shrink-0", "text-stone-400"], ["class", "mt-6 grid grid-cols-1 gap-6 md:grid-cols-2", 4, "ngIf"], [1, "mb-1", "text-xs", "font-medium", "uppercase", "tracking-wider", "text-stone-400", "dark:text-stone-500"], ["class", "mt-3 text-sm font-medium text-indigo-600 dark:text-indigo-400", 4, "ngIf"], ["class", "mt-6 flex flex-col gap-6", 4, "ngIf"], ["mat-flat-button", "", "color", "primary", "type", "button", 1, "rounded-xl", 3, "click", "disabled"], [4, "ngIf"], [3, "value"], [1, "mt-6", "grid", "grid-cols-1", "gap-6", "md:grid-cols-2"], ["formControlName", "mergeStrategy"], ["value", "sequential"], ["value", "parallel-independent"], ["value", "parallel-with-fallback"], [1, "grid", "grid-cols-2", "gap-6", "md:col-span-2"], ["appearance", "outline"], ["formControlName", "inputFormat"], ["value", "csv"], ["value", "xlsx"], ["value", "jsonl"], ["formControlName", "outputFormat"], [1, "md:col-span-2"], [1, "mb-2", "text-sm", "font-medium", "text-stone-700", "dark:text-stone-300"], [1, "grid", "grid-cols-1", "gap-3", "sm:grid-cols-2"], ["type", "button", 3, "click"], [1, "block", "text-sm", "font-semibold"], [1, "mt-3", "text-sm", "font-medium", "text-indigo-600", "dark:text-indigo-400"], [1, "mt-6", "flex", "flex-col", "gap-6"], [1, "flex", "flex-col", "gap-3", "md:flex-row", "md:items-start"], ["appearance", "outline", 1, "min-w-0", "flex-1"], ["matInput", "", "type", "url", "formControlName", "webhookUrl", "inputmode", "url", "autocomplete", "url", "placeholder", "https://example.com/webhooks/smart-batch"], ["mat-stroked-button", "", "type", "button", 1, "h-14", "shrink-0", "rounded-xl", "md:mt-1", 3, "click", "disabled"], ["class", "mr-2 inline-block", "diameter", "16", "mode", "indeterminate", 4, "ngIf"], ["class", "-mt-3 text-xs text-stone-500 dark:text-stone-400", 4, "ngIf"], ["class", "-mt-3 text-xs text-amber-700 dark:text-amber-300", 4, "ngIf"], ["class", "-mt-3 rounded-xl border px-3 py-2 text-sm", 3, "ngClass", 4, "ngIf"], [1, "mb-1.5", "block", "text-sm", "font-medium", "text-stone-700", "dark:text-stone-300"], [1, "flex", "min-h-14", "flex-wrap", "items-center", "gap-2", "rounded-xl", "border", "border-stone-300", "bg-white", "px-3", "py-2", "dark:border-gray-700", "dark:bg-gray-900"], ["class", "inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2.5 py-1 text-sm text-indigo-800 dark:bg-indigo-950/50 dark:text-indigo-200", 4, "ngFor", "ngForOf"], ["type", "email", 1, "min-w-[10rem]", "flex-1", "border-0", "bg-transparent", "py-1", "text-sm", "text-stone-900", "outline-none", "placeholder:text-stone-400", "dark:text-white", 3, "input", "keydown", "blur", "placeholder", "value"], ["class", "mt-1.5 text-xs text-red-600 dark:text-red-400", 4, "ngIf"], ["class", "mt-1.5 text-xs text-stone-500 dark:text-stone-400", 4, "ngIf"], ["diameter", "16", "mode", "indeterminate", 1, "mr-2", "inline-block"], [1, "-mt-3", "text-xs", "text-stone-500", "dark:text-stone-400"], [1, "-mt-3", "text-xs", "text-amber-700", "dark:text-amber-300"], [1, "-mt-3", "rounded-xl", "border", "px-3", "py-2", "text-sm", 3, "ngClass"], [1, "font-medium"], [1, "inline-flex", "items-center", "gap-1", "rounded-full", "bg-indigo-50", "px-2.5", "py-1", "text-sm", "text-indigo-800", "dark:bg-indigo-950/50", "dark:text-indigo-200"], ["type", "button", 1, "flex", "h-4", "w-4", "items-center", "justify-center", "rounded-full", "text-indigo-500", "hover:bg-indigo-100", "dark:hover:bg-indigo-900", 3, "click"], [1, "icon-size-3"], [1, "mt-1.5", "text-xs", "text-red-600", "dark:text-red-400"], [1, "mt-1.5", "text-xs", "text-stone-500", "dark:text-stone-400"], [1, "mb-1", "text-base", "font-semibold", "text-stone-900", "dark:text-white"], [1, "mb-4", "text-sm", "text-stone-500", "dark:text-stone-400"], [1, "mb-4", "flex", "flex-wrap", "gap-2"], ["type", "button", 1, "rounded-full", "border", "px-3", "py-1.5", "text-xs", "font-medium", "transition", 3, "border-stone-950", "bg-stone-950", "text-white", "border-stone-200", "text-stone-600"], [1, "mb-2", "text-xs", "text-stone-500", "dark:text-stone-400"], ["type", "button", 1, "inline-flex", "items-center", "gap-2", "rounded-full", "border", "px-3", "py-1.5", "text-xs", "font-medium", "transition", 3, "ngClass"], [1, "flex", "h-[600px]", "flex-col", "gap-6", "pt-4"], [1, "flex", "items-center", "justify-between"], [1, "text-sm", "font-medium", "uppercase", "text-stone-500", "dark:text-stone-400"], ["class", "text-xs text-blue-500", 4, "ngIf"], [1, "grid", "h-full", "min-h-0", "grid-cols-1", "gap-8", "md:grid-cols-2"], [1, "flex", "flex-col", "overflow-hidden", "rounded-xl", "border", "border-stone-200/90", "bg-white", "dark:border-gray-800", "dark:bg-gray-900/60"], [1, "border-b", "border-stone-200/90", "bg-stone-50/80", "px-4", "py-3", "text-sm", "font-medium", "dark:border-gray-800", "dark:bg-gray-800/40"], [1, "border-b", "border-stone-200/90", "p-2", "dark:border-gray-800"], ["appearance", "outline", "subscriptSizing", "dynamic", 1, "!mb-0", "w-full"], ["matPrefix", "", 1, "icon-size-5", "text-stone-400"], ["matInput", "", "type", "text", 1, "!py-1", 3, "ngModelChange", "ngModel", "placeholder"], ["mat-icon-button", "", "matSuffix", "", "type", "button", "aria-label", "Clear search", 3, "click", 4, "ngIf"], [1, "flex-1", "space-y-3", "overflow-y-auto", "p-2"], ["class", "flex flex-col items-center justify-center py-8 text-sm text-stone-400", 4, "ngIf"], [1, "flex", "flex-col", "overflow-hidden", "rounded-xl", "border", "border-blue-200/80", "bg-blue-50/60", "dark:border-blue-800/50", "dark:bg-blue-900/20"], [1, "border-b", "border-blue-200/80", "bg-blue-100/60", "px-4", "py-3", "text-sm", "font-medium", "text-blue-700", "dark:border-blue-800/50", "dark:bg-blue-900/30", "dark:text-blue-300"], ["cdkDropList", "", 1, "flex-1", "space-y-2", "overflow-y-auto", "p-2", 3, "cdkDropListDropped"], ["cdkDrag", "", "class", "flex cursor-move items-center justify-between gap-3 rounded-lg border border-stone-200 bg-white p-3 shadow-sm dark:border-gray-600 dark:bg-gray-900", 4, "ngFor", "ngForOf"], ["class", "flex h-full flex-col items-center justify-center text-stone-400 opacity-60", 4, "ngIf"], [1, "flex", "gap-3", "pt-4"], ["mat-button", "", "type", "button", 3, "click"], ["type", "button", 1, "rounded-full", "border", "px-3", "py-1.5", "text-xs", "font-medium", "transition", 3, "click"], ["type", "button", 1, "inline-flex", "items-center", "gap-2", "rounded-full", "border", "px-3", "py-1.5", "text-xs", "font-medium", "transition", 3, "click", "ngClass"], [1, "h-2.5", "w-2.5", "shrink-0", "rounded-full", 3, "ngClass"], [1, "text-xs", "text-blue-500"], ["mat-icon-button", "", "matSuffix", "", "type", "button", "aria-label", "Clear search", 3, "click"], [1, "icon-size-5"], [1, "sticky", "top-0", "z-[1]", "bg-white", "px-1", "py-1", "text-[11px]", "font-semibold", "uppercase", "tracking-wider", "text-stone-400", "dark:bg-gray-900/60"], ["class", "flex cursor-pointer select-none items-center justify-between rounded-lg border border-transparent p-3 transition-all hover:border-stone-200 hover:bg-stone-50 dark:hover:border-gray-600 dark:hover:bg-gray-800", 3, "opacity-40", "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "flex", "cursor-pointer", "select-none", "items-center", "justify-between", "rounded-lg", "border", "border-transparent", "p-3", "transition-all", "hover:border-stone-200", "hover:bg-stone-50", "dark:hover:border-gray-600", "dark:hover:bg-gray-800", 3, "click", "ngClass"], [1, "flex", "min-w-0", "flex-1", "items-center", "gap-3"], [1, "flex", "min-w-0", "flex-1", "flex-col"], [1, "text-sm", "font-medium", "text-stone-900", "dark:text-white"], ["class", "mt-0.5 inline-flex w-fit rounded-full px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide", 3, "ngClass", 4, "ngIf"], ["class", "truncate text-xs text-stone-500", 4, "ngIf"], ["class", "mt-2 flex flex-wrap gap-1", 4, "ngIf"], ["class", "icon-size-5 text-green-500", 4, "ngIf"], ["class", "icon-size-5 text-stone-300", 4, "ngIf"], [1, "mt-0.5", "inline-flex", "w-fit", "rounded-full", "px-2", "py-0.5", "text-[11px]", "font-semibold", "uppercase", "tracking-wide", 3, "ngClass"], [1, "truncate", "text-xs", "text-stone-500"], [1, "mt-2", "flex", "flex-wrap", "gap-1"], [1, "rounded-full", "border", "px-2", "py-0.5", "text-[10px]", "font-medium", 3, "ngClass"], ["class", "ml-0.5 font-bold", 4, "ngIf"], ["class", "rounded border px-1.5 py-0.5 text-[10px] font-medium", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "ml-0.5", "font-bold"], [1, "rounded", "border", "px-1.5", "py-0.5", "text-[10px]", "font-medium", 3, "ngClass"], [1, "icon-size-5", "text-green-500"], [1, "icon-size-5", "text-stone-300"], [1, "flex", "flex-col", "items-center", "justify-center", "py-8", "text-sm", "text-stone-400"], [1, "icon-size-10", "mb-2"], ["cdkDrag", "", 1, "flex", "cursor-move", "items-center", "justify-between", "gap-3", "rounded-lg", "border", "border-stone-200", "bg-white", "p-3", "shadow-sm", "dark:border-gray-600", "dark:bg-gray-900"], [1, "flex", "h-6", "w-6", "shrink-0", "items-center", "justify-center", "rounded-full", "bg-stone-100", "font-mono", "text-xs", "font-bold", "text-stone-500", "dark:bg-gray-800"], ["class", "mt-1 flex flex-wrap gap-1", 4, "ngIf"], ["mat-icon-button", "", "color", "warn", "type", "button", 3, "click"], [1, "mt-1", "flex", "flex-wrap", "gap-1"], [1, "flex", "h-full", "flex-col", "items-center", "justify-center", "text-stone-400", "opacity-60"], [1, "icon-size-8", "mb-2"], [1, "text-sm"], [1, "flex", "flex-col", "gap-4", "pt-4"], [1, "mb-2", "text-sm", "text-stone-500", "dark:text-stone-400"], [1, "flex", "flex-col", "gap-3"], ["class", "rounded-xl border border-stone-200/90 bg-white p-4 dark:border-gray-800 dark:bg-gray-900/80", 4, "ngFor", "ngForOf"], [1, "flex", "gap-3", "pt-6"], [1, "rounded-xl", "border", "border-stone-200/90", "bg-white", "p-4", "dark:border-gray-800", "dark:bg-gray-900/80"], [1, "flex", "w-full", "flex-col", "gap-0.5"], [1, "flex", "w-full", "items-center", "gap-2"], [1, "shrink-0", "font-mono", "text-xs", "text-stone-400"], [1, "min-w-0", "break-words", "font-medium", "text-stone-900", "dark:text-white"], [1, "pl-5", "font-mono", "text-xs", "text-blue-600", "dark:text-blue-400"], [1, "pt-4"], ["class", "text-sm italic text-stone-400", 4, "ngIf"], [1, "mb-3", "text-xs", "font-bold", "uppercase", "tracking-wider", "text-stone-500", "dark:text-stone-400"], [1, "flex", "flex-wrap", "gap-2"], [1, "mt-3", "text-xs", "text-stone-400", "dark:text-stone-500"], [1, "inline-flex", "items-center", "gap-2", "rounded-lg", "border", "border-stone-200", "bg-stone-100", "px-3", "py-1.5", "dark:border-gray-700", "dark:bg-gray-800"], [1, "text-sm", "font-medium", "text-stone-700", "dark:text-stone-300"], ["class", "text-xs font-medium text-orange-500", 4, "ngIf"], [1, "text-xs", "font-medium", "text-orange-500"], [1, "text-sm", "italic", "text-stone-400"], [1, "max-w-2xl", "pt-6"], [1, "mb-4", "text-lg", "font-bold", "text-stone-900", "dark:text-white"], [1, "space-y-4", "rounded-xl", "border", "border-stone-200/90", "bg-stone-50", "p-6", "dark:border-gray-800", "dark:bg-gray-800/40"], [1, "grid", "grid-cols-2", "gap-4"], [1, "block", "text-xs", "uppercase", "text-stone-500", "dark:text-stone-400"], [1, "font-medium", "text-stone-900", "dark:text-white"], [1, "font-medium", "capitalize", "text-stone-900", "dark:text-white"], ["class", "col-span-2", 4, "ngIf"], [1, "mt-8"], [1, "mb-3", "text-sm", "font-bold", "uppercase", "tracking-wider", "text-stone-500", "dark:text-stone-400"], [1, "rounded-xl", "border", "border-green-200", "bg-gradient-to-br", "from-green-50", "to-emerald-50", "p-5", "dark:border-green-800/30", "dark:from-green-900/20", "dark:to-emerald-900/10"], [1, "mb-4", "space-y-2"], ["class", "flex justify-between text-sm", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "justify-between", "border-t", "border-green-200", "pt-3", "dark:border-green-800/50"], [1, "font-medium", "text-green-700", "dark:text-green-300"], [1, "text-2xl", "font-bold", "text-green-700", "dark:text-green-300"], [1, "flex", "gap-3", "pt-8"], ["mat-flat-button", "", "color", "primary", "type", "button", 1, "rounded-xl", 3, "click"], [1, "col-span-2"], [1, "break-all", "font-medium", "text-stone-900", "dark:text-white"], [1, "flex", "justify-between", "text-sm"], [1, "text-stone-600", "dark:text-stone-400"]], template: function CreateBatchConfigComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "div", 2)(3, "div", 3)(4, "a", 4);
        \u0275\u0275text(5, " Verifik ");
        \u0275\u0275elementEnd();
        \u0275\u0275element(6, "mat-icon", 5);
        \u0275\u0275elementStart(7, "a", 6);
        \u0275\u0275text(8);
        \u0275\u0275pipe(9, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275element(10, "mat-icon", 5);
        \u0275\u0275template(11, CreateBatchConfigComponent_a_11_Template, 3, 3, "a", 7)(12, CreateBatchConfigComponent_mat_icon_12_Template, 1, 0, "mat-icon", 8);
        \u0275\u0275elementStart(13, "span", 9);
        \u0275\u0275text(14);
        \u0275\u0275pipe(15, "transloco");
        \u0275\u0275pipe(16, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "div", 10)(18, "div", 11)(19, "button", 12);
        \u0275\u0275pipe(20, "transloco");
        \u0275\u0275elementStart(21, "mat-icon");
        \u0275\u0275text(22, "arrow_back");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "div", 13)(24, "h1", 14);
        \u0275\u0275text(25);
        \u0275\u0275pipe(26, "transloco");
        \u0275\u0275pipe(27, "transloco");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(28, "main", 15)(29, "div", 16);
        \u0275\u0275template(30, CreateBatchConfigComponent_div_30_Template, 2, 1, "div", 17);
        \u0275\u0275elementStart(31, "nav", 18);
        \u0275\u0275template(32, CreateBatchConfigComponent_ng_container_32_Template, 5, 13, "ng-container", 19);
        \u0275\u0275elementEnd();
        \u0275\u0275template(33, CreateBatchConfigComponent_form_33_Template, 65, 54, "form", 20)(34, CreateBatchConfigComponent_div_34_Template, 4, 3, "div", 21);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 13, "visitaGuide.brand"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", !ctx.fromGuide);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.fromGuide);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(15, 15, ctx.isEditMode() ? "createBatchConfig.edit" : "createBatchConfig.create"), " ", \u0275\u0275pipeBind1(16, 17, "createBatchConfig.batchConfiguration"), " ");
        \u0275\u0275advance(5);
        \u0275\u0275property("routerLink", ctx.backLink());
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(20, 19, "batchDashboard.backToSmartBatch"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(26, 21, ctx.isEditMode() ? "createBatchConfig.edit" : "createBatchConfig.create"), " ", \u0275\u0275pipeBind1(27, 23, "createBatchConfig.batchConfiguration"), " ");
        \u0275\u0275advance(5);
        \u0275\u0275property("ngIf", ctx.errorMessage());
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.wizardLabels);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.wizardStep() === 1);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.wizardStep() !== 1);
      }
    }, dependencies: [
      CommonModule,
      NgClass,
      NgForOf,
      NgIf,
      FormsModule,
      \u0275NgNoValidate,
      DefaultValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      NgModel,
      ReactiveFormsModule,
      FormGroupDirective,
      FormControlName,
      RouterModule,
      RouterLink,
      MatButton,
      MatIconButton,
      MatInput,
      MatFormField,
      MatLabel,
      MatError,
      MatPrefix,
      MatSuffix,
      MatSelect,
      MatOption,
      MatIcon,
      MatProgressSpinner,
      DragDropModule,
      CdkDropList,
      CdkDrag,
      TranslocoModule,
      TranslocoPipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CreateBatchConfigComponent, [{
    type: Component,
    args: [{ selector: "create-batch-config", standalone: true, imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule,
      MatButton,
      MatIconButton,
      MatInput,
      MatFormField,
      MatLabel,
      MatError,
      MatPrefix,
      MatSuffix,
      MatSelect,
      MatOption,
      MatIcon,
      MatProgressSpinner,
      DragDropModule,
      TranslocoModule
    ], encapsulation: ViewEncapsulation.None, template: `<div class="flex min-h-screen min-w-0 flex-auto flex-col bg-stone-50 dark:bg-gray-950">\r
    <header\r
        class="border-b border-stone-200/90 bg-white/90 px-5 py-6 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-950/90 md:px-8 md:py-8"\r
    >\r
        <div class="mx-auto flex w-full max-w-5xl flex-col gap-5">\r
            <div\r
                class="flex flex-wrap items-center text-xs font-medium leading-none text-stone-500 dark:text-stone-400"\r
            >\r
                <a\r
                    routerLink="/home"\r
                    class="cursor-pointer text-stone-700 underline-offset-4 hover:underline dark:text-stone-300"\r
                >\r
                    Verifik\r
                </a>\r
                <mat-icon\r
                    class="icon-size-4 mx-2 text-stone-400"\r
                    svgIcon="heroicons_solid:chevron-right"\r
                ></mat-icon>\r
                <a\r
                    routerLink="/smart-batch"\r
                    class="cursor-pointer text-stone-700 underline-offset-4 hover:underline dark:text-stone-300"\r
                >\r
                    {{ 'visitaGuide.brand' | transloco }}\r
                </a>\r
                <mat-icon\r
                    class="icon-size-4 mx-2 text-stone-400"\r
                    svgIcon="heroicons_solid:chevron-right"\r
                ></mat-icon>\r
                <a\r
                    *ngIf="!fromGuide"\r
                    routerLink="/smart-batch/workspace"\r
                    class="cursor-pointer text-stone-700 underline-offset-4 hover:underline dark:text-stone-300"\r
                >\r
                    {{ 'smartBatchLanding.workspaceTitle' | transloco }}\r
                </a>\r
                <mat-icon\r
                    *ngIf="!fromGuide"\r
                    class="icon-size-4 mx-2 text-stone-400"\r
                    svgIcon="heroicons_solid:chevron-right"\r
                ></mat-icon>\r
                <span class="cursor-default text-stone-600 dark:text-stone-300">\r
                    {{ (isEditMode() ? 'createBatchConfig.edit' : 'createBatchConfig.create') | transloco }}\r
                    {{ 'createBatchConfig.batchConfiguration' | transloco }}\r
                </span>\r
            </div>\r
\r
            <div class="flex flex-wrap items-start justify-between gap-3">\r
                <div class="flex min-w-0 items-start gap-3">\r
                    <button\r
                        mat-icon-button\r
                        type="button"\r
                        [routerLink]="backLink()"\r
                        class="shrink-0 !text-stone-600 dark:!text-stone-300"\r
                        [attr.aria-label]="'batchDashboard.backToSmartBatch' | transloco"\r
                    >\r
                        <mat-icon>arrow_back</mat-icon>\r
                    </button>\r
                    <div class="min-w-0">\r
                        <h1\r
                            class="text-2xl font-semibold tracking-tight text-stone-900 dark:text-white md:text-3xl"\r
                        >\r
                            {{ (isEditMode() ? 'createBatchConfig.edit' : 'createBatchConfig.create') | transloco }}\r
                            {{ 'createBatchConfig.batchConfiguration' | transloco }}\r
                        </h1>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
    </header>\r
\r
    <main class="flex flex-auto flex-col px-5 py-8 md:px-8 md:py-10">\r
        <div class="mx-auto flex w-full max-w-5xl flex-col gap-6">\r
            <div\r
                *ngIf="errorMessage()"\r
                class="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-800/50 dark:bg-red-900/20 dark:text-red-300"\r
                role="alert"\r
            >\r
                {{ errorMessage() }}\r
            </div>\r
            <nav\r
                class="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm"\r
                aria-label="Wizard steps"\r
            >\r
                <ng-container *ngFor="let label of wizardLabels; let i = index">\r
                    <span\r
                        [class.font-semibold]="wizardStep() === i + 1"\r
                        [class.text-stone-900]="wizardStep() === i + 1"\r
                        [class.dark:text-white]="wizardStep() === i + 1"\r
                        [class.text-stone-500]="wizardStep() !== i + 1"\r
                    >\r
                        {{ i + 1 }}. {{ label | transloco }}\r
                    </span>\r
                    <span\r
                        *ngIf="i < wizardLabels.length - 1"\r
                        class="hidden text-stone-300 dark:text-stone-600 sm:inline"\r
                        aria-hidden="true"\r
                    >\r
                        /\r
                    </span>\r
                </ng-container>\r
            </nav>\r
\r
            <form\r
                *ngIf="wizardStep() === 1"\r
                [formGroup]="step1Form"\r
                class="flex flex-col gap-6"\r
            >\r
                <section\r
                    class="rounded-2xl border border-stone-200/90 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900 md:p-8"\r
                >\r
                        <h2 class="mb-2 text-base font-semibold text-stone-900 dark:text-white">\r
                            {{ 'createBatchConfig.basicInformation' | transloco }}\r
                        </h2>\r
                        <div class="grid grid-cols-1 gap-6 pt-4 md:grid-cols-2">\r
                            <mat-form-field appearance="outline" class="col-span-2 w-full">\r
                                <mat-label>{{ 'createBatchConfig.configurationName' | transloco }}</mat-label>\r
                                <input\r
                                    matInput\r
                                    formControlName="name"\r
                                    [placeholder]="'createBatchConfig.namePlaceholder' | transloco"\r
                                />\r
                                <mat-error>{{ 'createBatchConfig.nameRequired' | transloco }}</mat-error>\r
                            </mat-form-field>\r
\r
                            <mat-form-field appearance="outline" class="col-span-2 w-full">\r
                                <mat-label>{{ 'createBatchConfig.description' | transloco }}</mat-label>\r
                                <textarea\r
                                    matInput\r
                                    formControlName="description"\r
                                    rows="3"\r
                                    [placeholder]="'createBatchConfig.descriptionPlaceholder' | transloco"\r
                                ></textarea>\r
                            </mat-form-field>\r
\r
                            <mat-form-field appearance="outline" class="w-full">\r
                                <mat-label>{{ 'createBatchConfig.country' | transloco }}</mat-label>\r
                                <mat-select formControlName="country">\r
                                    <mat-option\r
                                        *ngFor="let country of countries()"\r
                                        [value]="country.code"\r
                                    >\r
                                        {{ country.name }}\r
                                    </mat-option>\r
                                </mat-select>\r
                                <mat-error>{{ 'createBatchConfig.countryRequired' | transloco }}</mat-error>\r
                            </mat-form-field>\r
                        </div>\r
                </section>\r
\r
                <section\r
                    class="rounded-2xl border border-dashed border-stone-300 bg-stone-50/70 p-5 shadow-sm dark:border-gray-700 dark:bg-gray-900/40 md:p-6"\r
                >\r
                    <button\r
                        type="button"\r
                        class="flex w-full items-start justify-between gap-4 text-left"\r
                        (click)="advancedOpen.set(!advancedOpen())"\r
                        [attr.aria-expanded]="advancedOpen()"\r
                    >\r
                        <div>\r
                            <p class="mb-1 text-xs font-medium uppercase tracking-wider text-stone-400">\r
                                {{ 'createBatchConfig.advancedOptional' | transloco }}\r
                            </p>\r
                            <h2 class="text-base font-semibold text-stone-900 dark:text-white">\r
                                {{ 'createBatchConfig.advancedTitle' | transloco }}\r
                            </h2>\r
                            <p class="mt-1 text-sm text-stone-500 dark:text-stone-400">\r
                                {{ 'createBatchConfig.advancedHint' | transloco }}\r
                            </p>\r
                        </div>\r
                        <mat-icon class="mt-1 shrink-0 text-stone-400">\r
                            {{ advancedOpen() ? 'expand_less' : 'expand_more' }}\r
                        </mat-icon>\r
                    </button>\r
                    <div class="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2" *ngIf="advancedOpen()">\r
                            <mat-form-field appearance="outline" class="w-full">\r
                                <mat-label>{{ 'createBatchConfig.mergeStrategy' | transloco }}</mat-label>\r
                                <mat-select formControlName="mergeStrategy">\r
                                    <mat-option value="sequential"\r
                                        >{{ 'createBatchConfig.sequential' | transloco }}</mat-option\r
                                    >\r
                                    <mat-option value="parallel-independent"\r
                                        >{{ 'createBatchConfig.parallelIndependent' | transloco }}</mat-option\r
                                    >\r
                                    <mat-option value="parallel-with-fallback"\r
                                        >{{ 'createBatchConfig.parallelWithFallback' | transloco }}</mat-option\r
                                    >\r
                                </mat-select>\r
                            </mat-form-field>\r
\r
                            <div class="grid grid-cols-2 gap-6 md:col-span-2">\r
                                <mat-form-field appearance="outline">\r
                                    <mat-label>{{ 'createBatchConfig.inputFieldsFormat' | transloco }}</mat-label>\r
                                    <mat-select formControlName="inputFormat">\r
                                        <mat-option value="csv">CSV</mat-option>\r
                                        <mat-option value="xlsx">Excel (XLSX)</mat-option>\r
                                        <mat-option value="jsonl">JSONL</mat-option>\r
                                    </mat-select>\r
                                </mat-form-field>\r
\r
                                <mat-form-field appearance="outline">\r
                                    <mat-label>{{ 'createBatchConfig.resultOutputFormat' | transloco }}</mat-label>\r
                                    <mat-select formControlName="outputFormat">\r
                                        <mat-option value="csv">CSV</mat-option>\r
                                        <mat-option value="xlsx">Excel (XLSX)</mat-option>\r
                                        <mat-option value="jsonl">JSONL</mat-option>\r
                                    </mat-select>\r
                                </mat-form-field>\r
                            </div>\r
\r
                            <div class="md:col-span-2">\r
                                <p class="mb-2 text-sm font-medium text-stone-700 dark:text-stone-300">\r
                                    {{ 'createBatchConfig.runMode' | transloco }}\r
                                </p>\r
                                <div class="grid grid-cols-1 gap-3 sm:grid-cols-2">\r
                                    <button type="button" [class]="runModeCardClass(isAsyncSelected())" (click)="selectRunMode('queue')">\r
                                        <span class="block text-sm font-semibold">{{ 'createBatchConfig.runModeAsync' | transloco }}</span>\r
                                        <span [class]="runModeHintClass(isAsyncSelected())">{{ 'createBatchConfig.runModeAsyncHint' | transloco }}</span>\r
                                    </button>\r
                                    <button type="button" [class]="runModeCardClass(!isAsyncSelected())" (click)="selectRunMode('browser')">\r
                                        <span class="block text-sm font-semibold">{{ 'createBatchConfig.runModeSync' | transloco }}</span>\r
                                        <span [class]="runModeHintClass(!isAsyncSelected())">{{ 'createBatchConfig.runModeSyncHint' | transloco }}</span>\r
                                    </button>\r
                                </div>\r
                            </div>\r
                    </div>\r
                </section>\r
\r
                <section\r
                    class="rounded-2xl border border-dashed border-stone-300 bg-stone-50/70 p-5 shadow-sm dark:border-gray-700 dark:bg-gray-900/40 md:p-6"\r
                >\r
                    <button\r
                        type="button"\r
                        class="flex w-full items-start justify-between gap-4 text-left"\r
                        (click)="toggleNotifications()"\r
                        [attr.aria-expanded]="showNotificationFields()"\r
                    >\r
                        <div class="min-w-0">\r
                            <p\r
                                class="mb-1 text-xs font-medium uppercase tracking-wider text-stone-400 dark:text-stone-500"\r
                            >\r
                                {{ 'createBatchConfig.notificationsOptional' | transloco }}\r
                            </p>\r
                            <h2 class="text-base font-semibold text-stone-900 dark:text-white">\r
                                {{ 'createBatchConfig.notifications' | transloco }}\r
                            </h2>\r
                            <p class="mt-1 text-sm text-stone-500 dark:text-stone-400">\r
                                {{ 'createBatchConfig.notificationsHint' | transloco }}\r
                            </p>\r
                            <p\r
                                *ngIf="!showNotificationFields()"\r
                                class="mt-3 text-sm font-medium text-indigo-600 dark:text-indigo-400"\r
                            >\r
                                {{ 'createBatchConfig.notificationsConfigure' | transloco }}\r
                            </p>\r
                        </div>\r
                        <mat-icon class="mt-1 shrink-0 text-stone-400">\r
                            {{ showNotificationFields() ? 'expand_less' : 'expand_more' }}\r
                        </mat-icon>\r
                    </button>\r
                    <div class="mt-6 flex flex-col gap-6" *ngIf="showNotificationFields()">\r
                            <div class="flex flex-col gap-3 md:flex-row md:items-start">\r
                                <mat-form-field appearance="outline" class="min-w-0 flex-1">\r
                                    <mat-label>{{ 'createBatchConfig.webhookUrl' | transloco }}</mat-label>\r
                                    <input\r
                                        matInput\r
                                        type="url"\r
                                        formControlName="webhookUrl"\r
                                        inputmode="url"\r
                                        autocomplete="url"\r
                                        placeholder="https://example.com/webhooks/smart-batch"\r
                                    />\r
                                    <mat-error>{{ 'createBatchConfig.invalidWebhookUrl' | transloco }}</mat-error>\r
                                </mat-form-field>\r
                                <button\r
                                    mat-stroked-button\r
                                    type="button"\r
                                    class="h-14 shrink-0 rounded-xl md:mt-1"\r
                                    (click)="testWebhook()"\r
                                    [disabled]="!canTestWebhook()"\r
                                >\r
                                    <mat-progress-spinner\r
                                        *ngIf="testingWebhook()"\r
                                        class="mr-2 inline-block"\r
                                        diameter="16"\r
                                        mode="indeterminate"\r
                                    ></mat-progress-spinner>\r
                                    <span *ngIf="!testingWebhook()">{{\r
                                        'createBatchConfig.testWebhook' | transloco\r
                                    }}</span>\r
                                    <span *ngIf="testingWebhook()">{{\r
                                        'createBatchConfig.testing' | transloco\r
                                    }}</span>\r
                                </button>\r
                            </div>\r
                            <p\r
                                class="-mt-3 text-xs text-stone-500 dark:text-stone-400"\r
                                *ngIf="!step1Form.get('webhookUrl')?.invalid && !testResult() && isWebhookReady()"\r
                            >\r
                                {{ 'createBatchConfig.webhookUrlHint' | transloco }}\r
                            </p>\r
                            <p\r
                                class="-mt-3 text-xs text-amber-700 dark:text-amber-300"\r
                                *ngIf="currentWebhookUrl() && !isWebhookReady() && !testResult()"\r
                            >\r
                                {{ 'createBatchConfig.webhookMustTest' | transloco }}\r
                            </p>\r
                            <div\r
                                class="-mt-3 rounded-xl border px-3 py-2 text-sm"\r
                                *ngIf="testResult()"\r
                                [ngClass]="\r
                                    testResult()?.status === 'success'\r
                                        ? 'border-green-200 bg-green-50 text-green-800 dark:border-green-800 dark:bg-green-950/40 dark:text-green-200'\r
                                        : 'border-red-200 bg-red-50 text-red-800 dark:border-red-800 dark:bg-red-950/40 dark:text-red-200'\r
                                "\r
                            >\r
                                <span class="font-medium">{{\r
                                    (testResult()?.status === 'success'\r
                                        ? 'createBatchConfig.testSuccess'\r
                                        : 'createBatchConfig.testFailed'\r
                                    ) | transloco\r
                                }}</span>\r
                                <span *ngIf="testResult()?.statusCode">\r
                                    HTTP {{ testResult()?.statusCode }}\r
                                </span>\r
                                <span *ngIf="testResult()?.message"> {{ testResult()?.message }}</span>\r
                            </div>\r
\r
                            <div>\r
                                <label class="mb-1.5 block text-sm font-medium text-stone-700 dark:text-stone-300">\r
                                    {{ 'createBatchConfig.emailOnCompletion' | transloco }}\r
                                </label>\r
                                <div\r
                                    class="flex min-h-14 flex-wrap items-center gap-2 rounded-xl border border-stone-300 bg-white px-3 py-2 dark:border-gray-700 dark:bg-gray-900"\r
                                    [class.border-red-400]="emailDraftError()"\r
                                >\r
                                    <span\r
                                        *ngFor="let email of emailChips()"\r
                                        class="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2.5 py-1 text-sm text-indigo-800 dark:bg-indigo-950/50 dark:text-indigo-200"\r
                                    >\r
                                        {{ email }}\r
                                        <button\r
                                            type="button"\r
                                            class="flex h-4 w-4 items-center justify-center rounded-full text-indigo-500 hover:bg-indigo-100 dark:hover:bg-indigo-900"\r
                                            (click)="removeEmailChip(email)"\r
                                            [attr.aria-label]="'createBatchConfig.removeEmail' | transloco"\r
                                        >\r
                                            <mat-icon class="icon-size-3">close</mat-icon>\r
                                        </button>\r
                                    </span>\r
                                    <input\r
                                        type="email"\r
                                        class="min-w-[10rem] flex-1 border-0 bg-transparent py-1 text-sm text-stone-900 outline-none placeholder:text-stone-400 dark:text-white"\r
                                        [placeholder]="'createBatchConfig.emailChipPlaceholder' | transloco"\r
                                        [value]="emailDraft()"\r
                                        (input)="onEmailInput($any($event.target).value)"\r
                                        (keydown)="onEmailKeydown($event)"\r
                                        (blur)="onEmailBlur()"\r
                                    />\r
                                </div>\r
                                <p\r
                                    class="mt-1.5 text-xs text-red-600 dark:text-red-400"\r
                                    *ngIf="emailDraftError()"\r
                                >\r
                                    {{ 'createBatchConfig.invalidEmails' | transloco }}\r
                                </p>\r
                                <p\r
                                    class="mt-1.5 text-xs text-stone-500 dark:text-stone-400"\r
                                    *ngIf="!emailDraftError()"\r
                                >\r
                                    {{ 'createBatchConfig.emailOnCompletionHint' | transloco }}\r
                                </p>\r
                            </div>\r
                    </div>\r
                </section>\r
\r
                <div>\r
                    <button\r
                        mat-flat-button\r
                        color="primary"\r
                        type="button"\r
                        class="rounded-xl"\r
                        (click)="onNext(1)"\r
                        [disabled]="!canContinueStep1()"\r
                    >\r
                        <span *ngIf="isSavingStep()">{{ 'createBatchConfig.saving' | transloco }}</span>\r
                        <span *ngIf="!isSavingStep()">{{ 'createBatchConfig.next' | transloco }}</span>\r
                    </button>\r
                </div>\r
            </form>\r
\r
            <div\r
                *ngIf="wizardStep() !== 1"\r
                class="rounded-2xl border border-stone-200/90 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900 md:p-8"\r
            >\r
                <section *ngIf="wizardStep() === 2">\r
                        <h2 class="mb-1 text-base font-semibold text-stone-900 dark:text-white">\r
                            {{ 'createBatchConfig.selectEndpoints' | transloco }}\r
                        </h2>\r
                        <p class="mb-4 text-sm text-stone-500 dark:text-stone-400">\r
                            {{ 'createBatchConfig.selectEndpointsHint' | transloco }}\r
                        </p>\r
                        <div class="mb-4 flex flex-wrap gap-2">\r
                            @for (group of ['all', 'citizen', 'vehicle', 'company', 'other']; track group) {\r
                                <button\r
                                    type="button"\r
                                    class="rounded-full border px-3 py-1.5 text-xs font-medium transition"\r
                                    [class.border-stone-950]="endpointGroupFilter() === group"\r
                                    [class.bg-stone-950]="endpointGroupFilter() === group"\r
                                    [class.text-white]="endpointGroupFilter() === group"\r
                                    [class.border-stone-200]="endpointGroupFilter() !== group"\r
                                    [class.text-stone-600]="endpointGroupFilter() !== group"\r
                                    (click)="setEndpointGroupFilter($any(group))"\r
                                >\r
                                    @if (group === 'all') {\r
                                        {{ 'createBatchConfig.groupAll' | transloco }}\r
                                    } @else {\r
                                        {{ featureGroupLabel($any(group)) }}\r
                                    }\r
                                </button>\r
                            }\r
                        </div>\r
                        <p class="mb-2 text-xs text-stone-500 dark:text-stone-400">\r
                            {{ 'visitaGuide.highlightHint' | transloco }}\r
                        </p>\r
                        <div class="mb-4 flex flex-wrap gap-2">\r
                            @for (highlight of paramHighlightOptions; track highlight.id) {\r
                                <button\r
                                    type="button"\r
                                    class="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium transition"\r
                                    [ngClass]="highlightChipClass(highlight.id)"\r
                                    (click)="setEndpointParamHighlight(highlight.id)"\r
                                >\r
                                    <span\r
                                        class="h-2.5 w-2.5 shrink-0 rounded-full"\r
                                        [ngClass]="highlightSwatchClass(highlight.id)"\r
                                    ></span>\r
                                    {{ highlight.labelKey | transloco }}\r
                                </button>\r
                            }\r
                        </div>\r
                        <div class="flex h-[600px] flex-col gap-6 pt-4">\r
                            <div class="flex items-center justify-between">\r
                                <h3 class="text-sm font-medium uppercase text-stone-500 dark:text-stone-400">\r
                                    {{ 'createBatchConfig.availableFeatures' | transloco }}\r
                                    <span *ngIf="endpointSearchQuery()"\r
                                        >({{ filteredAvailableFeatures().length }} of\r
                                        {{ availableFeaturesForCountry().length }})</span\r
                                    >\r
                                    <span *ngIf="!endpointSearchQuery()"\r
                                        >({{ availableFeaturesForCountry().length }})</span\r
                                    >\r
                                </h3>\r
                                <div *ngIf="isLoadingFeatures()" class="text-xs text-blue-500">\r
                                    {{ 'createBatchConfig.loadingFeatures' | transloco }}\r
                                </div>\r
                            </div>\r
\r
                            <div class="grid h-full min-h-0 grid-cols-1 gap-8 md:grid-cols-2">\r
                                <div\r
                                    class="flex flex-col overflow-hidden rounded-xl border border-stone-200/90 bg-white dark:border-gray-800 dark:bg-gray-900/60"\r
                                >\r
                                    <div\r
                                        class="border-b border-stone-200/90 bg-stone-50/80 px-4 py-3 text-sm font-medium dark:border-gray-800 dark:bg-gray-800/40"\r
                                    >\r
                                        {{ 'createBatchConfig.available' | transloco }}\r
                                    </div>\r
                                    <div class="border-b border-stone-200/90 p-2 dark:border-gray-800">\r
                                        <mat-form-field\r
                                            appearance="outline"\r
                                            class="!mb-0 w-full"\r
                                            subscriptSizing="dynamic"\r
                                        >\r
                                            <mat-icon matPrefix class="icon-size-5 text-stone-400"\r
                                                >search</mat-icon\r
                                            >\r
                                            <input\r
                                                matInput\r
                                                type="text"\r
                                                [ngModel]="endpointSearchQuery()"\r
                                                (ngModelChange)="endpointSearchQuery.set($event)"\r
                                                [placeholder]="'createBatchConfig.searchPlaceholder' | transloco"\r
                                                class="!py-1"\r
                                            />\r
                                            <button\r
                                                mat-icon-button\r
                                                matSuffix\r
                                                *ngIf="endpointSearchQuery()"\r
                                                (click)="endpointSearchQuery.set('')"\r
                                                type="button"\r
                                                aria-label="Clear search"\r
                                            >\r
                                                <mat-icon class="icon-size-5">close</mat-icon>\r
                                            </button>\r
                                        </mat-form-field>\r
                                    </div>\r
                                    <div class="flex-1 space-y-3 overflow-y-auto p-2">\r
                                        <ng-container *ngFor="let group of groupedAvailableFeatures()">\r
                                            <p\r
                                                class="sticky top-0 z-[1] bg-white px-1 py-1 text-[11px] font-semibold uppercase tracking-wider text-stone-400 dark:bg-gray-900/60"\r
                                            >\r
                                                {{ featureGroupLabel(group.id) }}\r
                                            </p>\r
                                            <div\r
                                                *ngFor="let feature of group.items"\r
                                                (click)="toggleFeature(feature)"\r
                                                [class.opacity-40]="isEndpointDimmed(feature)"\r
                                                [ngClass]="highlightCardClass(feature)"\r
                                                class="flex cursor-pointer select-none items-center justify-between rounded-lg border border-transparent p-3 transition-all hover:border-stone-200 hover:bg-stone-50 dark:hover:border-gray-600 dark:hover:bg-gray-800"\r
                                            >\r
                                                <div class="flex min-w-0 flex-1 items-center gap-3">\r
                                                    <div class="flex min-w-0 flex-1 flex-col">\r
                                                        <span\r
                                                            class="text-sm font-medium text-stone-900 dark:text-white"\r
                                                            >{{ feature.name }}</span\r
                                                        >\r
                                                        <span\r
                                                            *ngIf="isParamHighlighted(feature)"\r
                                                            class="mt-0.5 inline-flex w-fit rounded-full px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide"\r
                                                            [ngClass]="highlightBadgeClass()"\r
                                                            >{{ 'visitaGuide.highlightMatch' | transloco }}</span\r
                                                        >\r
                                                        <span\r
                                                            *ngIf="feature.description"\r
                                                            class="truncate text-xs text-stone-500"\r
                                                            >{{ feature.description }}</span\r
                                                        >\r
                                                        <div\r
                                                            *ngIf="featureParamFields(feature).length"\r
                                                            class="mt-2 flex flex-wrap gap-1"\r
                                                        >\r
                                                            <ng-container\r
                                                                *ngFor="let chip of featureParamFields(feature)"\r
                                                            >\r
                                                                <span\r
                                                                    class="rounded-full border px-2 py-0.5 text-[10px] font-medium"\r
                                                                    [ngClass]="paramChipClass(chip.required)"\r
                                                                >\r
                                                                    {{\r
                                                                        paramFilterLabelKey(chip.field)\r
                                                                            | transloco: paramFilterLabelParams(chip.field)\r
                                                                    }}\r
                                                                    <span *ngIf="chip.required" class="ml-0.5 font-bold">*</span>\r
                                                                </span>\r
                                                                <span\r
                                                                    *ngFor="let value of chip.enums"\r
                                                                    class="rounded border px-1.5 py-0.5 text-[10px] font-medium"\r
                                                                    [ngClass]="paramEnumClass()"\r
                                                                >\r
                                                                    {{ value }}\r
                                                                </span>\r
                                                            </ng-container>\r
                                                        </div>\r
                                                    </div>\r
                                                </div>\r
                                                <mat-icon\r
                                                    *ngIf="isSelected(feature)"\r
                                                    class="icon-size-5 text-green-500"\r
                                                    >check_circle</mat-icon\r
                                                >\r
                                                <mat-icon\r
                                                    *ngIf="!isSelected(feature)"\r
                                                    class="icon-size-5 text-stone-300"\r
                                                    >add_circle_outline</mat-icon\r
                                                >\r
                                            </div>\r
                                        </ng-container>\r
                                        <div\r
                                            *ngIf="\r
                                                !isLoadingFeatures() &&\r
                                                filteredAvailableFeatures().length === 0\r
                                            "\r
                                            class="flex flex-col items-center justify-center py-8 text-sm text-stone-400"\r
                                        >\r
                                            <mat-icon class="icon-size-10 mb-2">search_off</mat-icon>\r
                                            <span\r
                                                >{{\r
                                                    'createBatchConfig.noEndpointsMatch'\r
                                                        | transloco: { query: endpointSearchQuery() }\r
                                                }}</span\r
                                            >\r
                                        </div>\r
                                    </div>\r
                                </div>\r
\r
                                <div\r
                                    class="flex flex-col overflow-hidden rounded-xl border border-blue-200/80 bg-blue-50/60 dark:border-blue-800/50 dark:bg-blue-900/20"\r
                                >\r
                                    <div\r
                                        class="border-b border-blue-200/80 bg-blue-100/60 px-4 py-3 text-sm font-medium text-blue-700 dark:border-blue-800/50 dark:bg-blue-900/30 dark:text-blue-300"\r
                                    >\r
                                        {{ 'createBatchConfig.selectedSteps' | transloco }}\r
                                    </div>\r
                                    <div\r
                                        cdkDropList\r
                                        class="flex-1 space-y-2 overflow-y-auto p-2"\r
                                        (cdkDropListDropped)="drop($event)"\r
                                    >\r
                                        <div\r
                                            *ngFor="\r
                                                let feature of selectedFeatures();\r
                                                let i = index\r
                                            "\r
                                            cdkDrag\r
                                            class="flex cursor-move items-center justify-between gap-3 rounded-lg border border-stone-200 bg-white p-3 shadow-sm dark:border-gray-600 dark:bg-gray-900"\r
                                        >\r
                                            <div class="flex min-w-0 flex-1 items-center gap-3">\r
                                                <span\r
                                                    class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-stone-100 font-mono text-xs font-bold text-stone-500 dark:bg-gray-800"\r
                                                >\r
                                                    {{ i + 1 }}\r
                                                </span>\r
                                                <div class="flex min-w-0 flex-1 flex-col">\r
                                                    <span\r
                                                        class="text-sm font-medium text-stone-900 dark:text-white"\r
                                                        >{{ feature.name }}</span\r
                                                    >\r
                                                    <span class="truncate text-xs text-stone-500">{{\r
                                                        featureGroupLabel(featureGroup(feature))\r
                                                    }}</span>\r
                                                    <div\r
                                                        *ngIf="featureParamFields(feature).length"\r
                                                        class="mt-1 flex flex-wrap gap-1"\r
                                                    >\r
                                                        <ng-container\r
                                                            *ngFor="let chip of featureParamFields(feature)"\r
                                                        >\r
                                                            <span\r
                                                                class="rounded-full border px-2 py-0.5 text-[10px] font-medium"\r
                                                                [ngClass]="paramChipClass(chip.required)"\r
                                                            >\r
                                                                {{\r
                                                                    paramFilterLabelKey(chip.field)\r
                                                                        | transloco: paramFilterLabelParams(chip.field)\r
                                                                }}\r
                                                                <span *ngIf="chip.required" class="ml-0.5 font-bold">*</span>\r
                                                            </span>\r
                                                            <span\r
                                                                *ngFor="let value of chip.enums"\r
                                                                class="rounded border px-1.5 py-0.5 text-[10px] font-medium"\r
                                                                [ngClass]="paramEnumClass()"\r
                                                            >\r
                                                                {{ value }}\r
                                                            </span>\r
                                                        </ng-container>\r
                                                    </div>\r
                                                </div>\r
                                            </div>\r
                                            <button\r
                                                mat-icon-button\r
                                                color="warn"\r
                                                type="button"\r
                                                (click)="\r
                                                    toggleFeature(feature); $event.stopPropagation()\r
                                                "\r
                                            >\r
                                                <mat-icon class="icon-size-5">close</mat-icon>\r
                                            </button>\r
                                        </div>\r
\r
                                        <div\r
                                            *ngIf="selectedFeatures().length === 0"\r
                                            class="flex h-full flex-col items-center justify-center text-stone-400 opacity-60"\r
                                        >\r
                                            <mat-icon class="icon-size-8 mb-2">playlist_add</mat-icon>\r
                                            <span class="text-sm">{{\r
                                                'createBatchConfig.selectFeaturesToAdd' | transloco\r
                                            }}</span>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                            </div>\r
\r
                            <div class="flex gap-3 pt-4">\r
                                <button mat-button type="button" (click)="goBack()">{{\r
                                    'createBatchConfig.back' | transloco\r
                                }}</button>\r
                                <button\r
                                    mat-flat-button\r
                                    color="primary"\r
                                    type="button"\r
                                    class="rounded-xl"\r
                                    (click)="onNext(2)"\r
                                    [disabled]="selectedFeatures().length === 0 || isSavingStep()"\r
                                >\r
                                    <span *ngIf="isSavingStep()">{{ 'createBatchConfig.saving' | transloco }}</span>\r
                                    <span *ngIf="!isSavingStep()">{{ 'createBatchConfig.next' | transloco }}</span>\r
                                </button>\r
                            </div>\r
                        </div>\r
                </section>\r
\r
                <section *ngIf="wizardStep() === 3">\r
                        <h2 class="mb-2 text-base font-semibold text-stone-900 dark:text-white">\r
                            {{ 'createBatchConfig.reviewParameters' | transloco }}\r
                        </h2>\r
                        <div class="flex flex-col gap-4 pt-4">\r
                            <p class="mb-2 text-sm text-stone-500 dark:text-stone-400">\r
                                {{ 'createBatchConfig.reviewParamsIntro' | transloco }}\r
                            </p>\r
\r
                            <div class="flex flex-col gap-3">\r
                                <article\r
                                    *ngFor="let feature of selectedFeatures(); let i = index"\r
                                    class="rounded-xl border border-stone-200/90 bg-white p-4 dark:border-gray-800 dark:bg-gray-900/80"\r
                                >\r
                                    <div class="flex w-full flex-col gap-0.5">\r
                                        <div class="flex w-full items-center gap-2">\r
                                            <span class="shrink-0 font-mono text-xs text-stone-400"\r
                                                >{{ i + 1 }}.</span\r
                                            >\r
                                            <span\r
                                                class="min-w-0 break-words font-medium text-stone-900 dark:text-white"\r
                                                >{{ feature.name }}</span\r
                                            >\r
                                        </div>\r
                                        <span\r
                                            class="pl-5 font-mono text-xs text-blue-600 dark:text-blue-400"\r
                                            >{{ getEndpointDisplay(feature) }}</span\r
                                        >\r
                                    </div>\r
\r
                                    <div class="pt-4">\r
                                        <div *ngIf="visibleDependencies(feature).length > 0">\r
                                            <h4\r
                                                class="mb-3 text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400"\r
                                            >\r
                                                {{ 'createBatchConfig.requiredParameters' | transloco }}\r
                                            </h4>\r
                                            <div class="flex flex-wrap gap-2">\r
                                                <ng-container\r
                                                    *ngFor="let dep of visibleDependencies(feature)"\r
                                                >\r
                                                    <span\r
                                                        class="inline-flex items-center gap-2 rounded-lg border border-stone-200 bg-stone-100 px-3 py-1.5 dark:border-gray-700 dark:bg-gray-800"\r
                                                    >\r
                                                        <span\r
                                                            class="text-sm font-medium text-stone-700 dark:text-stone-300"\r
                                                            >{{ dep.field }}</span\r
                                                        >\r
                                                        <span\r
                                                            *ngIf="dep.required"\r
                                                            class="text-xs font-medium text-orange-500"\r
                                                            >{{ 'createBatchConfig.required' | transloco }}</span\r
                                                        >\r
                                                    </span>\r
                                                </ng-container>\r
                                            </div>\r
                                            <p class="mt-3 text-xs text-stone-400 dark:text-stone-500">\r
                                                {{ 'createBatchConfig.parametersMappedHint' | transloco }}\r
                                            </p>\r
                                        </div>\r
                                        <div\r
                                            *ngIf="visibleDependencies(feature).length === 0"\r
                                            class="text-sm italic text-stone-400"\r
                                        >\r
                                            {{ 'createBatchConfig.noParametersRequired' | transloco }}\r
                                        </div>\r
                                    </div>\r
                                </article>\r
                            </div>\r
\r
                            <div class="flex gap-3 pt-6">\r
                                <button mat-button type="button" (click)="goBack()">{{\r
                                    'createBatchConfig.back' | transloco\r
                                }}</button>\r
                                <button\r
                                    mat-flat-button\r
                                    color="primary"\r
                                    type="button"\r
                                    class="rounded-xl"\r
                                    (click)="onNext(3)"\r
                                    [disabled]="isSavingStep()"\r
                                >\r
                                    <span *ngIf="isSavingStep()">{{ 'createBatchConfig.saving' | transloco }}</span>\r
                                    <span *ngIf="!isSavingStep()">{{ 'createBatchConfig.next' | transloco }}</span>\r
                                </button>\r
                            </div>\r
                        </div>\r
                </section>\r
\r
                <section *ngIf="wizardStep() === 4">\r
                        <h2 class="mb-2 text-base font-semibold text-stone-900 dark:text-white">\r
                            {{ 'createBatchConfig.reviewAndCreate' | transloco }}\r
                        </h2>\r
                        <div class="max-w-2xl pt-6">\r
                            <h3 class="mb-4 text-lg font-bold text-stone-900 dark:text-white">\r
                                {{ 'createBatchConfig.summary' | transloco }}\r
                            </h3>\r
\r
                            <div\r
                                class="space-y-4 rounded-xl border border-stone-200/90 bg-stone-50 p-6 dark:border-gray-800 dark:bg-gray-800/40"\r
                            >\r
                                <div class="grid grid-cols-2 gap-4">\r
                                    <div>\r
                                        <span class="block text-xs uppercase text-stone-500 dark:text-stone-400"\r
                                            >{{ 'createBatchConfig.configurationName' | transloco }}</span\r
                                        >\r
                                        <span class="font-medium text-stone-900 dark:text-white">{{\r
                                            step1Form.get('name')?.value\r
                                        }}</span>\r
                                    </div>\r
                                    <div>\r
                                        <span class="block text-xs uppercase text-stone-500 dark:text-stone-400"\r
                                            >{{ 'createBatchConfig.country' | transloco }}</span\r
                                        >\r
                                        <span class="font-medium text-stone-900 dark:text-white">{{\r
                                            step1Form.get('country')?.value\r
                                        }}</span>\r
                                    </div>\r
                                    <div>\r
                                        <span class="block text-xs uppercase text-stone-500 dark:text-stone-400"\r
                                            >{{ 'createBatchConfig.runMode' | transloco }}</span\r
                                        >\r
                                        <span class="font-medium text-stone-900 dark:text-white">{{\r
                                            runModeLabelKey() | transloco\r
                                        }}</span>\r
                                    </div>\r
                                    <div>\r
                                        <span class="block text-xs uppercase text-stone-500 dark:text-stone-400"\r
                                            >{{ 'createBatchConfig.mergeStrategy' | transloco }}</span\r
                                        >\r
                                        <span\r
                                            class="font-medium capitalize text-stone-900 dark:text-white"\r
                                            >{{ step1Form.get('mergeStrategy')?.value }}</span\r
                                        >\r
                                    </div>\r
                                    <div>\r
                                        <span class="block text-xs uppercase text-stone-500 dark:text-stone-400"\r
                                            >{{ 'createBatchConfig.totalSteps' | transloco }}</span\r
                                        >\r
                                        <span class="font-medium text-stone-900 dark:text-white">{{\r
                                            'createBatchConfig.stepsCount'\r
                                                | transloco: { count: selectedFeatures().length }\r
                                        }}</span>\r
                                    </div>\r
                                    <div class="col-span-2" *ngIf="step1Form.get('webhookUrl')?.value">\r
                                        <span class="block text-xs uppercase text-stone-500 dark:text-stone-400"\r
                                            >{{ 'createBatchConfig.webhookUrl' | transloco }}</span\r
                                        >\r
                                        <span class="break-all font-medium text-stone-900 dark:text-white">{{\r
                                            step1Form.get('webhookUrl')?.value\r
                                        }}</span>\r
                                    </div>\r
                                    <div class="col-span-2" *ngIf="emailChips().length">\r
                                        <span class="block text-xs uppercase text-stone-500 dark:text-stone-400"\r
                                            >{{ 'createBatchConfig.emailOnCompletion' | transloco }}</span\r
                                        >\r
                                        <span class="break-all font-medium text-stone-900 dark:text-white">{{\r
                                            emailChips().join(', ')\r
                                        }}</span>\r
                                    </div>\r
                                </div>\r
                            </div>\r
\r
                            <div class="mt-8">\r
                                <h4\r
                                    class="mb-3 text-sm font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400"\r
                                >\r
                                    {{ 'createBatchConfig.estimatedCostPerRecord' | transloco }}\r
                                </h4>\r
                                <div\r
                                    class="rounded-xl border border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 p-5 dark:border-green-800/30 dark:from-green-900/20 dark:to-emerald-900/10"\r
                                >\r
                                    <div class="mb-4 space-y-2">\r
                                        <div\r
                                            *ngFor="let feature of selectedFeatures()"\r
                                            class="flex justify-between text-sm"\r
                                        >\r
                                            <span class="text-stone-600 dark:text-stone-400">{{\r
                                                feature.name\r
                                            }}</span>\r
                                            <span class="font-medium text-stone-900 dark:text-white"\r
                                                >\${{\r
                                                    (\r
                                                        feature.price ||\r
                                                        feature.smartCheckPrice ||\r
                                                        0\r
                                                    ).toFixed(2)\r
                                                }}</span\r
                                            >\r
                                        </div>\r
                                    </div>\r
                                    <div\r
                                        class="flex items-center justify-between border-t border-green-200 pt-3 dark:border-green-800/50"\r
                                    >\r
                                        <span class="font-medium text-green-700 dark:text-green-300"\r
                                            >{{ 'createBatchConfig.totalPerRecord' | transloco }}</span\r
                                        >\r
                                        <span class="text-2xl font-bold text-green-700 dark:text-green-300"\r
                                            >\${{ totalCostPerRecord().toFixed(2) }}</span\r
                                        >\r
                                    </div>\r
                                </div>\r
                            </div>\r
\r
                            <div class="flex gap-3 pt-8">\r
                                <button mat-button type="button" (click)="goBack()">{{\r
                                    'createBatchConfig.back' | transloco\r
                                }}</button>\r
                                <button mat-flat-button color="primary" type="button" class="rounded-xl" (click)="submit()">\r
                                    {{\r
                                        (isEditMode()\r
                                            ? 'createBatchConfig.updateConfiguration'\r
                                            : 'createBatchConfig.createConfiguration') | transloco\r
                                    }}\r
                                </button>\r
                            </div>\r
                        </div>\r
                </section>\r
            </div>\r
        </div>\r
    </main>\r
</div>\r
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CreateBatchConfigComponent, { className: "CreateBatchConfigComponent", filePath: "src/app/modules/smart-batch/create/create-batch-config.component.ts", lineNumber: 85 });
})();

// src/app/modules/smart-batch/smart-template-transfer.service.ts
var TEMPLATE_EXPORT_FORMAT = "verifik.smart-batch-template";
var TEMPLATE_EXPORT_VERSION = 1;
var TEMPLATE_IMPORT_MAX_BYTES = 25 * 1024 * 1024;
var TemplateImportError = class extends Error {
  constructor(code, detail = []) {
    super(code);
    this.code = code;
    this.detail = detail;
  }
};
var LOCAL_TEMPLATE_FIELDS = [
  "_id",
  "client",
  "batchConfiguration",
  "thumbnail",
  "createdAt",
  "updatedAt",
  "__v",
  "type",
  "systemKey",
  "nameKey",
  "descriptionKey",
  "presetSteps",
  "clonedFromSystemKey"
];
var SmartTemplateTransferService = class _SmartTemplateTransferService {
  constructor() {
    this._reports = inject(SmartReportService);
    this._batches = inject(SmartBatchService);
  }
  /** Template design plus the consultation steps it runs on, as a portable JSON file. */
  buildExport(templateId) {
    return __async(this, null, function* () {
      const template = yield firstValueFrom(this._reports.getTemplate(templateId));
      const configId = this._refId(template.batchConfiguration);
      let configuration = null;
      if (configId) {
        const response = yield firstValueFrom(this._batches.getConfiguration(configId));
        configuration = response?.data ? this._exportConfiguration(response.data, templateId) : null;
      }
      return {
        format: TEMPLATE_EXPORT_FORMAT,
        version: TEMPLATE_EXPORT_VERSION,
        exportedAt: (/* @__PURE__ */ new Date()).toISOString(),
        template: this._exportTemplate(template),
        configuration
      };
    });
  }
  downloadExport(file) {
    const blob = new Blob([JSON.stringify(file, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${this._fileSlug(file.template.name || "plantilla")}.verifik-template.json`;
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1e3);
  }
  readImportFile(file) {
    return __async(this, null, function* () {
      if (file.size > TEMPLATE_IMPORT_MAX_BYTES)
        throw new TemplateImportError("tooLarge");
      let parsed;
      try {
        parsed = JSON.parse(yield file.text());
      } catch {
        throw new TemplateImportError("invalidFile");
      }
      const data = parsed;
      if (!data || data.format !== TEMPLATE_EXPORT_FORMAT || !data.template || typeof data.template !== "object") {
        throw new TemplateImportError("invalidFile");
      }
      if (typeof data.version !== "number" || data.version > TEMPLATE_EXPORT_VERSION) {
        throw new TemplateImportError("unsupportedVersion");
      }
      if (!Array.isArray(data.template.sections))
        throw new TemplateImportError("invalidFile");
      return data;
    });
  }
  /**
   * Creates the consultation first, then the template linked to it. Feature codes are
   * resolved before anything is written, so a file that cannot be imported leaves no
   * half-created records behind.
   */
  importFile(file, existing) {
    return __async(this, null, function* () {
      const steps = file.configuration ? yield this._resolveSteps(file.configuration.steps) : null;
      let configurationId = null;
      if (file.configuration && steps) {
        const source = file.configuration;
        const payload = __spreadValues({
          name: this._uniqueName(source.name, existing.configurationNames, existing.suffix, 150),
          description: source.description,
          country: source.country,
          inputFormat: source.inputFormat || "csv",
          outputFormat: source.outputFormat || "csv",
          mergeStrategy: source.mergeStrategy || "sequential",
          steps
        }, source.executor ? { executor: source.executor } : {});
        try {
          const created = yield firstValueFrom(this._batches.createConfiguration(payload));
          configurationId = this._refId(created?.data ?? null);
        } catch (error) {
          console.error("[TemplateImport] configuration create error", error);
          throw new TemplateImportError("createFailed");
        }
      }
      const design = JSON.parse(JSON.stringify(file.template));
      const securityDisabled = Boolean(design.security?.enabled);
      for (const key of LOCAL_TEMPLATE_FIELDS)
        delete design[key];
      if (design.security)
        design.security = { enabled: false };
      let template;
      try {
        template = yield firstValueFrom(this._reports.createTemplate(__spreadValues(__spreadProps(__spreadValues({}, design), {
          name: this._uniqueName(design.name || "Plantilla", existing.templateNames, existing.suffix, 150),
          sections: design.sections ?? []
        }), configurationId ? { batchConfiguration: configurationId } : {})));
      } catch (error) {
        console.error("[TemplateImport] template create error", error);
        if (configurationId) {
          yield firstValueFrom(this._batches.deleteConfiguration(configurationId)).catch(() => void 0);
        }
        throw new TemplateImportError("createFailed");
      }
      if (configurationId && template._id && file.configuration?.usesTemplateAsDefault) {
        yield firstValueFrom(this._batches.updateConfiguration(configurationId, { preferredReportTemplate: template._id })).catch((error) => console.error("[TemplateImport] default template link error", error));
      }
      return { template, configurationId, securityDisabled };
    });
  }
  _exportTemplate(template) {
    const design = JSON.parse(JSON.stringify(template));
    for (const key of LOCAL_TEMPLATE_FIELDS)
      delete design[key];
    if (design.security)
      design.security = { enabled: design.security.enabled };
    return design;
  }
  _exportConfiguration(config, templateId) {
    const steps = [...config.steps ?? []].sort((a, b) => (a.sequence ?? 0) - (b.sequence ?? 0)).map((step) => this._exportStep(step)).filter((step) => Boolean(step));
    return {
      name: config.name,
      description: config.description,
      country: config.country,
      executor: config.executor,
      inputFormat: config.inputFormat,
      outputFormat: config.outputFormat,
      mergeStrategy: config.mergeStrategy,
      steps,
      usesTemplateAsDefault: this._refId(config.preferredReportTemplate ?? null) === templateId
    };
  }
  _exportStep(step) {
    const feature = typeof step.appFeature === "object" ? step.appFeature : null;
    if (!feature?.code)
      return null;
    const mapping = step.inputFieldMapping instanceof Map ? Object.fromEntries(step.inputFieldMapping) : step.inputFieldMapping;
    return {
      featureCode: feature.code,
      sequence: step.sequence,
      enabled: step.enabled !== false,
      parameterDefaults: step.parameterDefaults ?? {},
      inputFieldMapping: mapping ?? {},
      outputFieldsToKeep: step.outputFieldsToKeep ?? [],
      maxRetries: step.maxRetries,
      retryDelayBaseSeconds: step.retryDelayBaseSeconds,
      timeoutSeconds: step.timeoutSeconds
    };
  }
  _resolveSteps(steps) {
    return __async(this, null, function* () {
      const list = Array.isArray(steps) ? steps.filter((step) => step && typeof step.featureCode === "string") : [];
      const codes = [...new Set(list.map((step) => step.featureCode))];
      const ids = /* @__PURE__ */ new Map();
      yield Promise.all(codes.map((code) => __async(this, null, function* () {
        const feature = yield firstValueFrom(this._batches.getFeatureDetail(code));
        if (feature?._id)
          ids.set(code, feature._id);
      })));
      const missing = codes.filter((code) => !ids.has(code));
      if (missing.length)
        throw new TemplateImportError("missingFeatures", missing);
      return list.map((step, index) => __spreadValues(__spreadValues(__spreadValues({
        appFeature: ids.get(step.featureCode),
        sequence: Number(step.sequence) > 0 ? Number(step.sequence) : index + 1,
        enabled: step.enabled !== false,
        parameterDefaults: step.parameterDefaults ?? {},
        inputFieldMapping: step.inputFieldMapping ?? {},
        outputFieldsToKeep: step.outputFieldsToKeep ?? []
      }, step.maxRetries != null ? { maxRetries: step.maxRetries } : {}), step.retryDelayBaseSeconds != null ? { retryDelayBaseSeconds: step.retryDelayBaseSeconds } : {}), step.timeoutSeconds != null ? { timeoutSeconds: step.timeoutSeconds } : {}));
    });
  }
  _uniqueName(name, taken, suffix, maxLength) {
    const base = (name || "").trim() || "Plantilla";
    const used = new Set(taken.map((item) => item.trim().toLowerCase()));
    if (!used.has(base.toLowerCase()))
      return base.slice(0, maxLength);
    for (let attempt = 1; attempt < 100; attempt++) {
      const tail = attempt === 1 ? ` (${suffix})` : ` (${suffix} ${attempt})`;
      const candidate = `${base.slice(0, maxLength - tail.length)}${tail}`;
      if (!used.has(candidate.toLowerCase()))
        return candidate;
    }
    return base.slice(0, maxLength);
  }
  _refId(ref) {
    if (!ref)
      return null;
    if (typeof ref === "string")
      return ref;
    const id = ref._id ?? ref.id;
    return typeof id === "string" && id ? id : null;
  }
  _fileSlug(name) {
    return name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z0-9]+/g, "-").replace(/^-+|-+$/g, "").toLowerCase().slice(0, 60) || "plantilla";
  }
  static {
    this.\u0275fac = function SmartTemplateTransferService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SmartTemplateTransferService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SmartTemplateTransferService, factory: _SmartTemplateTransferService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SmartTemplateTransferService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/modules/smart-batch/smart-batch.component.ts
var _c02 = (a0, a1, a2) => ({ start: a0, end: a1, total: a2 });
var _c12 = (a0, a1) => ({ page: a0, pages: a1 });
var _c22 = (a0, a1) => ({ template: a0, icon: a1 });
var _c3 = (a0) => ({ template: a0, icon: "description" });
var _c4 = () => [];
function _forTrack02($index, $item) {
  let tmp_0_0;
  return (tmp_0_0 = $item._id) !== null && tmp_0_0 !== void 0 ? tmp_0_0 : $item.id;
}
var _forTrack1 = ($index, $item) => $item._id;
function SmartBatchComponent_ng_container_0_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 26);
    \u0275\u0275listener("click", function SmartBatchComponent_ng_container_0_Conditional_27_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.createConfiguration());
    });
    \u0275\u0275elementStart(1, "mat-icon", 27);
    \u0275\u0275text(2, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r4("smartBatchLanding.createConfiguration"), " ");
  }
}
function SmartBatchComponent_ng_container_0_Conditional_28_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-spinner", 29);
  }
}
function SmartBatchComponent_ng_container_0_Conditional_28_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 30);
    \u0275\u0275text(1, "upload_file");
    \u0275\u0275elementEnd();
  }
}
function SmartBatchComponent_ng_container_0_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function SmartBatchComponent_ng_container_0_Conditional_28_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      \u0275\u0275nextContext();
      const templateImportInput_r6 = \u0275\u0275reference(2);
      return \u0275\u0275resetView(templateImportInput_r6.click());
    });
    \u0275\u0275template(1, SmartBatchComponent_ng_container_0_Conditional_28_Conditional_1_Template, 1, 0, "mat-progress-spinner", 29)(2, SmartBatchComponent_ng_container_0_Conditional_28_Conditional_2_Template, 2, 0, "mat-icon", 30);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 31);
    \u0275\u0275listener("click", function SmartBatchComponent_ng_container_0_Conditional_28_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.createBlankTemplate());
    });
    \u0275\u0275elementStart(5, "mat-icon", 30);
    \u0275\u0275text(6, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r1.isImportingTemplate())("matTooltip", t_r4("smartBatchLanding.importTemplateHint"));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isImportingTemplate() ? 1 : 2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r4(ctx_r1.isImportingTemplate() ? "smartBatchLanding.importingTemplate" : "smartBatchLanding.importTemplate"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r4("smartBatchLanding.createBlankTemplate"), " ");
  }
}
function SmartBatchComponent_ng_container_0_Conditional_36_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275element(1, "mat-spinner", 34);
    \u0275\u0275elementStart(2, "p", 35);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r4("smartBatchLanding.loadingConfigurations"), " ");
  }
}
function SmartBatchComponent_ng_container_0_Conditional_36_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33)(1, "div", 36)(2, "mat-icon");
    \u0275\u0275text(3, "layers");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "h3", 37);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 38);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 39);
    \u0275\u0275listener("click", function SmartBatchComponent_ng_container_0_Conditional_36_Conditional_1_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.createConfiguration());
    });
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", t_r4("smartBatchLanding.noConfigurations"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r4("smartBatchLanding.noConfigurationsDesc"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r4("smartBatchLanding.createFirstConfiguration"), " ");
  }
}
function SmartBatchComponent_ng_container_0_Conditional_36_Conditional_2_For_2_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 54);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r4("smartBatchLanding.inactive"), " ");
  }
}
function SmartBatchComponent_ng_container_0_Conditional_36_Conditional_2_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 43);
    \u0275\u0275listener("click", function SmartBatchComponent_ng_container_0_Conditional_36_Conditional_2_For_2_Template_article_click_0_listener() {
      let tmp_16_0;
      const config_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.openDashboard((tmp_16_0 = (tmp_16_0 = config_r9._id) !== null && tmp_16_0 !== void 0 ? tmp_16_0 : config_r9.id) !== null && tmp_16_0 !== void 0 ? tmp_16_0 : ""));
    });
    \u0275\u0275elementStart(1, "div", 44)(2, "button", 45);
    \u0275\u0275listener("click", function SmartBatchComponent_ng_container_0_Conditional_36_Conditional_2_For_2_Template_button_click_2_listener($event) {
      let tmp_16_0;
      const config_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.editConfiguration((tmp_16_0 = (tmp_16_0 = config_r9._id) !== null && tmp_16_0 !== void 0 ? tmp_16_0 : config_r9.id) !== null && tmp_16_0 !== void 0 ? tmp_16_0 : "", $event));
    });
    \u0275\u0275elementStart(3, "mat-icon", 46);
    \u0275\u0275text(4, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 47);
    \u0275\u0275listener("click", function SmartBatchComponent_ng_container_0_Conditional_36_Conditional_2_For_2_Template_button_click_5_listener($event) {
      let tmp_16_0;
      const config_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.deleteConfiguration((tmp_16_0 = (tmp_16_0 = config_r9._id) !== null && tmp_16_0 !== void 0 ? tmp_16_0 : config_r9.id) !== null && tmp_16_0 !== void 0 ? tmp_16_0 : "", $event));
    });
    \u0275\u0275elementStart(6, "mat-icon", 46);
    \u0275\u0275text(7, "delete");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 48)(9, "div", 49);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 50)(12, "h3", 51);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 52)(15, "span", 53);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "uppercase");
    \u0275\u0275pipe(18, "uppercase");
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, SmartBatchComponent_ng_container_0_Conditional_36_Conditional_2_For_2_Conditional_19_Template, 2, 1, "span", 54);
    \u0275\u0275elementStart(20, "span", 55);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(22, "p", 56);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 57)(25, "div", 58)(26, "span", 59);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "p", 60);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 58)(31, "span", 59);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "p", 61);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const config_r9 = ctx.$implicit;
    const t_r4 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("matTooltip", t_r4("smartBatchLanding.edit"));
    \u0275\u0275advance(3);
    \u0275\u0275property("matTooltip", t_r4("smartBatchLanding.delete"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getCountryFlag(config_r9.country), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", config_r9.name, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(17, 15, config_r9.inputFormat), " \u2192 ", \u0275\u0275pipeBind1(18, 17, config_r9.outputFormat), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!config_r9.isActive ? 19 : -1);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.executorBadgeClasses(config_r9.executor));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r4(ctx_r1.executorBadgeKey(config_r9.executor)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", config_r9.description || t_r4("smartBatchLanding.noDescription"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r4("smartBatchLanding.steps"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", config_r9.steps.length, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r4("smartBatchLanding.strategy"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", config_r9.mergeStrategy.replace("-", " "), " ");
  }
}
function SmartBatchComponent_ng_container_0_Conditional_36_Conditional_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42)(1, "p", 62);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 63)(4, "button", 64);
    \u0275\u0275listener("click", function SmartBatchComponent_ng_container_0_Conditional_36_Conditional_2_Conditional_3_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.previousConfigPage());
    });
    \u0275\u0275elementStart(5, "mat-icon", 46);
    \u0275\u0275text(6, "chevron_left");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 62);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 64);
    \u0275\u0275listener("click", function SmartBatchComponent_ng_container_0_Conditional_36_Conditional_2_Conditional_3_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.nextConfigPage());
    });
    \u0275\u0275text(11);
    \u0275\u0275elementStart(12, "mat-icon", 46);
    \u0275\u0275text(13, "chevron_right");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r4("smartBatchLanding.paginationRange", \u0275\u0275pureFunction3(6, _c02, ctx_r1.configRangeStart(), ctx_r1.configRangeEnd(), ctx_r1.configTotal())), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r1.canGoPreviousConfigPage());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r4("smartBatchLanding.previousPage"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r4("smartBatchLanding.pageOf", \u0275\u0275pureFunction2(10, _c12, ctx_r1.configPage(), ctx_r1.configPages())), " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.canGoNextConfigPage());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r4("smartBatchLanding.nextPage"), " ");
  }
}
function SmartBatchComponent_ng_container_0_Conditional_36_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275repeaterCreate(1, SmartBatchComponent_ng_container_0_Conditional_36_Conditional_2_For_2_Template, 35, 19, "article", 41, _forTrack02);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, SmartBatchComponent_ng_container_0_Conditional_36_Conditional_2_Conditional_3_Template, 14, 13, "div", 42);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.configurations());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.configPages() > 1 ? 3 : -1);
  }
}
function SmartBatchComponent_ng_container_0_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SmartBatchComponent_ng_container_0_Conditional_36_Conditional_0_Template, 4, 1, "div", 32)(1, SmartBatchComponent_ng_container_0_Conditional_36_Conditional_1_Template, 10, 3, "div", 33)(2, SmartBatchComponent_ng_container_0_Conditional_36_Conditional_2_Template, 4, 1);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r1.isLoading() ? 0 : ctx_r1.configurations().length === 0 ? 1 : 2);
  }
}
function SmartBatchComponent_ng_container_0_Conditional_37_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275element(1, "mat-spinner", 34);
    \u0275\u0275elementStart(2, "p", 35);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.isCloningPreset() ? t_r4("smartBatchSystemPresets.cloning") : t_r4("smartBatchLanding.loadingTemplates"), " ");
  }
}
function SmartBatchComponent_ng_container_0_Conditional_37_Conditional_1_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73)(1, "report-template-thumb", 74)(2, "div", 75)(3, "span", 76)(4, "mat-icon", 77);
    \u0275\u0275text(5, "visibility");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const template_r11 = ctx.template;
    const icon_r12 = ctx.icon;
    const t_r4 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("template", template_r11)("icon", icon_r12);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", t_r4("smartBatchLanding.templatePreviewOpen"), " ");
  }
}
function SmartBatchComponent_ng_container_0_Conditional_37_Conditional_1_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 71);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r4("smartBatchSystemPresets.noSystemTemplates"), " ");
  }
}
function SmartBatchComponent_ng_container_0_Conditional_37_Conditional_1_Conditional_15_For_2_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 91);
    \u0275\u0275listener("click", function SmartBatchComponent_ng_container_0_Conditional_37_Conditional_1_Conditional_15_For_2_Conditional_26_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r15);
      const template_r14 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.useSystemTemplate(template_r14, $event));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "mat-icon", 30);
    \u0275\u0275text(3, "arrow_forward");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(5).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r4("smartBatchSystemPresets.useTemplate"), " ");
  }
}
function SmartBatchComponent_ng_container_0_Conditional_37_Conditional_1_Conditional_15_For_2_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 90);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(5).$implicit;
    \u0275\u0275property("matTooltip", t_r4("smartBatchLanding.comingSoonHint"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r4("smartBatchLanding.comingSoon"), " ");
  }
}
function SmartBatchComponent_ng_container_0_Conditional_37_Conditional_1_Conditional_15_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 79);
    \u0275\u0275listener("click", function SmartBatchComponent_ng_container_0_Conditional_37_Conditional_1_Conditional_15_For_2_Template_article_click_0_listener() {
      const template_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.openTemplatePreview(template_r14));
    });
    \u0275\u0275elementContainer(1, 80);
    \u0275\u0275elementStart(2, "div", 16)(3, "div", 81);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 82);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 83)(8, "mat-icon", 77);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "h3", 84);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p", 85);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 86)(16, "div", 87)(17, "span", 88);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p", 60);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 87)(22, "span", 88);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "p", 60);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(26, SmartBatchComponent_ng_container_0_Conditional_37_Conditional_1_Conditional_15_For_2_Conditional_26_Template, 4, 1, "button", 89)(27, SmartBatchComponent_ng_container_0_Conditional_37_Conditional_1_Conditional_15_For_2_Conditional_27_Template, 2, 2, "button", 90);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_28_0;
    const template_r14 = ctx.$implicit;
    \u0275\u0275nextContext(2);
    const templateThumb_r16 = \u0275\u0275reference(1);
    const t_r4 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", templateThumb_r16)("ngTemplateOutletContext", \u0275\u0275pureFunction2(13, _c22, template_r14, ctx_r1.getCategoryIcon(template_r14.category)));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getCountryFlag(template_r14.country), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getTierLabel(template_r14.tier), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.getCategoryIcon(template_r14.category));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getCategoryLabel(template_r14.category), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.templateTitle(template_r14), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.templateDescription(template_r14), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r4("smartBatchLanding.steps"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getStepCount(template_r14), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r4("smartBatchLanding.sections"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (tmp_28_0 = template_r14.sections == null ? null : template_r14.sections.length) !== null && tmp_28_0 !== void 0 ? tmp_28_0 : 0, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isSystemPresetAvailable(template_r14) ? 26 : 27);
  }
}
function SmartBatchComponent_ng_container_0_Conditional_37_Conditional_1_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275repeaterCreate(1, SmartBatchComponent_ng_container_0_Conditional_37_Conditional_1_Conditional_15_For_2_Template, 28, 16, "article", 78, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.systemTemplates());
  }
}
function SmartBatchComponent_ng_container_0_Conditional_37_Conditional_1_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 72)(1, "div", 36)(2, "mat-icon");
    \u0275\u0275text(3, "description");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "p", 92);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 39);
    \u0275\u0275listener("click", function SmartBatchComponent_ng_container_0_Conditional_37_Conditional_1_Conditional_28_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.createBlankTemplate());
    });
    \u0275\u0275elementStart(7, "mat-icon", 30);
    \u0275\u0275text(8, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 93);
    \u0275\u0275listener("click", function SmartBatchComponent_ng_container_0_Conditional_37_Conditional_1_Conditional_28_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r17);
      \u0275\u0275nextContext(3);
      const templateImportInput_r6 = \u0275\u0275reference(2);
      return \u0275\u0275resetView(templateImportInput_r6.click());
    });
    \u0275\u0275elementStart(11, "mat-icon", 30);
    \u0275\u0275text(12, "upload_file");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", t_r4("smartBatchLanding.createBlankTemplateHint"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r4("smartBatchLanding.createBlankTemplate"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.isImportingTemplate());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r4("smartBatchLanding.importTemplate"), " ");
  }
}
function SmartBatchComponent_ng_container_0_Conditional_37_Conditional_1_Conditional_29_For_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-spinner", 98);
  }
}
function SmartBatchComponent_ng_container_0_Conditional_37_Conditional_1_Conditional_29_For_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 46);
    \u0275\u0275text(1, "download");
    \u0275\u0275elementEnd();
  }
}
function SmartBatchComponent_ng_container_0_Conditional_37_Conditional_1_Conditional_29_For_2_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const template_r19 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getConfigName(template_r19.batchConfiguration), " ");
  }
}
function SmartBatchComponent_ng_container_0_Conditional_37_Conditional_1_Conditional_29_For_2_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(5).$implicit;
    \u0275\u0275textInterpolate1(" ", t_r4("smartBatchLanding.standalone"), " ");
  }
}
function SmartBatchComponent_ng_container_0_Conditional_37_Conditional_1_Conditional_29_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 95);
    \u0275\u0275listener("click", function SmartBatchComponent_ng_container_0_Conditional_37_Conditional_1_Conditional_29_For_2_Template_article_click_0_listener() {
      const template_r19 = \u0275\u0275restoreView(_r18).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.openTemplatePreview(template_r19));
    });
    \u0275\u0275elementStart(1, "div", 96)(2, "button", 45);
    \u0275\u0275listener("click", function SmartBatchComponent_ng_container_0_Conditional_37_Conditional_1_Conditional_29_For_2_Template_button_click_2_listener($event) {
      const template_r19 = \u0275\u0275restoreView(_r18).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.openTemplateEditor(template_r19, $event));
    });
    \u0275\u0275elementStart(3, "mat-icon", 46);
    \u0275\u0275text(4, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 97);
    \u0275\u0275listener("click", function SmartBatchComponent_ng_container_0_Conditional_37_Conditional_1_Conditional_29_For_2_Template_button_click_5_listener($event) {
      const template_r19 = \u0275\u0275restoreView(_r18).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.exportTemplate(template_r19, $event));
    });
    \u0275\u0275template(6, SmartBatchComponent_ng_container_0_Conditional_37_Conditional_1_Conditional_29_For_2_Conditional_6_Template, 1, 0, "mat-progress-spinner", 98)(7, SmartBatchComponent_ng_container_0_Conditional_37_Conditional_1_Conditional_29_For_2_Conditional_7_Template, 2, 0, "mat-icon", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 47);
    \u0275\u0275listener("click", function SmartBatchComponent_ng_container_0_Conditional_37_Conditional_1_Conditional_29_For_2_Template_button_click_8_listener($event) {
      let tmp_18_0;
      const template_r19 = \u0275\u0275restoreView(_r18).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.deleteTemplate((tmp_18_0 = template_r19._id) !== null && tmp_18_0 !== void 0 ? tmp_18_0 : "", $event));
    });
    \u0275\u0275elementStart(9, "mat-icon", 46);
    \u0275\u0275text(10, "delete");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainer(11, 80);
    \u0275\u0275elementStart(12, "h3", 99);
    \u0275\u0275element(13, "span", 100);
    \u0275\u0275elementStart(14, "span", 101);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "p", 102);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 57)(19, "div", 58)(20, "span", 88);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "p", 60);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 58)(25, "span", 88);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "p", 103);
    \u0275\u0275template(28, SmartBatchComponent_ng_container_0_Conditional_37_Conditional_1_Conditional_29_For_2_Conditional_28_Template, 1, 1)(29, SmartBatchComponent_ng_container_0_Conditional_37_Conditional_1_Conditional_29_For_2_Conditional_29_Template, 1, 1);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "button", 91);
    \u0275\u0275listener("click", function SmartBatchComponent_ng_container_0_Conditional_37_Conditional_1_Conditional_29_For_2_Template_button_click_30_listener($event) {
      const template_r19 = \u0275\u0275restoreView(_r18).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.useClientTemplate(template_r19, $event));
    });
    \u0275\u0275text(31);
    \u0275\u0275elementStart(32, "mat-icon", 30);
    \u0275\u0275text(33, "arrow_forward");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_28_0;
    const template_r19 = ctx.$implicit;
    \u0275\u0275nextContext(2);
    const templateThumb_r16 = \u0275\u0275reference(1);
    const t_r4 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("matTooltip", t_r4("smartBatchLanding.edit"));
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.exportingTemplateId() !== null)("matTooltip", t_r4("smartBatchLanding.exportTemplate"));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.exportingTemplateId() === template_r19._id ? 6 : 7);
    \u0275\u0275advance(2);
    \u0275\u0275property("matTooltip", t_r4("smartBatchLanding.delete"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngTemplateOutlet", templateThumb_r16)("ngTemplateOutletContext", \u0275\u0275pureFunction1(16, _c3, template_r19));
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", template_r19.identityColor || "#000000");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(template_r19.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", template_r19.description || t_r4("smartBatchLanding.noDescription"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r4("smartBatchLanding.sections"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (tmp_28_0 = template_r19.sections == null ? null : template_r19.sections.length) !== null && tmp_28_0 !== void 0 ? tmp_28_0 : 0, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r4("smartBatchLanding.linkedTo"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(template_r19.batchConfiguration ? 28 : 29);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r4("smartBatchSystemPresets.useTemplate"), " ");
  }
}
function SmartBatchComponent_ng_container_0_Conditional_37_Conditional_1_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275repeaterCreate(1, SmartBatchComponent_ng_container_0_Conditional_37_Conditional_1_Conditional_29_For_2_Template, 34, 18, "article", 94, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.clientTemplates());
  }
}
function SmartBatchComponent_ng_container_0_Conditional_37_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SmartBatchComponent_ng_container_0_Conditional_37_Conditional_1_ng_template_0_Template, 7, 3, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementStart(2, "section", 65)(3, "div", 66)(4, "div", 48)(5, "div", 67)(6, "mat-icon");
    \u0275\u0275text(7, "verified");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div")(9, "h2", 68);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 69);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(13, "div", 70);
    \u0275\u0275template(14, SmartBatchComponent_ng_container_0_Conditional_37_Conditional_1_Conditional_14_Template, 2, 1, "p", 71)(15, SmartBatchComponent_ng_container_0_Conditional_37_Conditional_1_Conditional_15_Template, 3, 0, "div", 40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "section", 65)(17, "div", 66)(18, "div", 48)(19, "div", 67)(20, "mat-icon");
    \u0275\u0275text(21, "folder_open");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div")(23, "h2", 68);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "p", 69);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(27, "div", 70);
    \u0275\u0275template(28, SmartBatchComponent_ng_container_0_Conditional_37_Conditional_1_Conditional_28_Template, 14, 4, "div", 72)(29, SmartBatchComponent_ng_container_0_Conditional_37_Conditional_1_Conditional_29_Template, 3, 0, "div", 40);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1(" ", t_r4("smartBatchSystemPresets.sectionTitle"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r4("smartBatchSystemPresets.sectionDesc"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.systemTemplates().length === 0 ? 14 : 15);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1(" ", t_r4("smartBatchSystemPresets.myTemplatesTitle"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r4("smartBatchLanding.noTemplatesDesc"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.clientTemplates().length === 0 ? 28 : 29);
  }
}
function SmartBatchComponent_ng_container_0_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SmartBatchComponent_ng_container_0_Conditional_37_Conditional_0_Template, 4, 1, "div", 32)(1, SmartBatchComponent_ng_container_0_Conditional_37_Conditional_1_Template, 30, 6);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r1.isLoadingTemplates() || ctx_r1.isCloningPreset() ? 0 : 1);
  }
}
function SmartBatchComponent_ng_container_0_Conditional_38_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 112);
    \u0275\u0275element(1, "mat-spinner", 114);
    \u0275\u0275elementStart(2, "p", 115);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r4("smartBatchLanding.templatePreviewLoading"));
  }
}
function SmartBatchComponent_ng_container_0_Conditional_38_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "report-preview", 113);
  }
  if (rf & 2) {
    let tmp_17_0;
    let tmp_18_0;
    let tmp_19_0;
    let tmp_20_0;
    let tmp_21_0;
    let tmp_22_0;
    let tmp_23_0;
    let tmp_24_0;
    let tmp_33_0;
    let tmp_35_0;
    let tmp_36_0;
    let tmp_37_0;
    let tmp_38_0;
    let tmp_39_0;
    let tmp_42_0;
    let tmp_43_0;
    let tmp_44_0;
    let tmp_45_0;
    let tmp_46_0;
    const preview_r21 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("template", preview_r21)("previewData", ctx_r1.previewData())("fullContent", true)("primaryColor", preview_r21.primaryColor || "#4F46E5")("pageBackgroundColor", preview_r21.pageBackgroundColor || "#ffffff")("orientation", preview_r21.orientation || "portrait")("pageSize", preview_r21.pageSize || "A4")("layerZ", ctx_r1.previewLayerZ(preview_r21))("clickable", false)("logoUrl", (preview_r21.headerLogos == null ? null : preview_r21.headerLogos.length) ? null : preview_r21.logo || null)("logoEnabled", !(preview_r21.headerLogos == null ? null : preview_r21.headerLogos.length) && !!preview_r21.logo)("logoX", (tmp_17_0 = preview_r21.logoSettings == null ? null : preview_r21.logoSettings.x) !== null && tmp_17_0 !== void 0 ? tmp_17_0 : 32)("logoY", (tmp_18_0 = preview_r21.logoSettings == null ? null : preview_r21.logoSettings.y) !== null && tmp_18_0 !== void 0 ? tmp_18_0 : 32)("logoWidth", (tmp_19_0 = preview_r21.logoSettings == null ? null : preview_r21.logoSettings.width) !== null && tmp_19_0 !== void 0 ? tmp_19_0 : 160)("logoHeight", (tmp_20_0 = preview_r21.logoSettings == null ? null : preview_r21.logoSettings.height) !== null && tmp_20_0 !== void 0 ? tmp_20_0 : 60)("logoRotation", (tmp_21_0 = preview_r21.logoSettings == null ? null : preview_r21.logoSettings.rotation) !== null && tmp_21_0 !== void 0 ? tmp_21_0 : 0)("logoAutoFitContent", (tmp_22_0 = preview_r21.logoSettings == null ? null : preview_r21.logoSettings.autoFitContent) !== null && tmp_22_0 !== void 0 ? tmp_22_0 : false)("sheetImages", (tmp_23_0 = preview_r21.sheetImages) !== null && tmp_23_0 !== void 0 ? tmp_23_0 : \u0275\u0275pureFunction0(43, _c4))("bodyTopPadding", (tmp_24_0 = preview_r21.bodyTopPadding) !== null && tmp_24_0 !== void 0 ? tmp_24_0 : 0)("legend", preview_r21.legend || "")("legendPosition", preview_r21.legendPosition || "left")("showPageNumbers", preview_r21.showPageNumbers || false)("pageNumberPosition", preview_r21.pageNumberPosition || "bottom-center")("watermarkEnabled", (preview_r21.watermark == null ? null : preview_r21.watermark.enabled) || false)("watermarkType", (preview_r21.watermark == null ? null : preview_r21.watermark.type) || "text")("watermarkLogoUrl", (preview_r21.watermark == null ? null : preview_r21.watermark.logo) || void 0)("watermarkText", (preview_r21.watermark == null ? null : preview_r21.watermark.text) || preview_r21.name || "CONFIDENTIAL")("watermarkOpacity", (tmp_33_0 = preview_r21.watermark == null ? null : preview_r21.watermark.opacity) !== null && tmp_33_0 !== void 0 ? tmp_33_0 : 0.08)("watermarkPattern", (preview_r21.watermark == null ? null : preview_r21.watermark.pattern) || "single")("watermarkX", (tmp_35_0 = preview_r21.watermark == null ? null : preview_r21.watermark.x) !== null && tmp_35_0 !== void 0 ? tmp_35_0 : 250)("watermarkY", (tmp_36_0 = preview_r21.watermark == null ? null : preview_r21.watermark.y) !== null && tmp_36_0 !== void 0 ? tmp_36_0 : 420)("watermarkWidth", (tmp_37_0 = preview_r21.watermark == null ? null : preview_r21.watermark.width) !== null && tmp_37_0 !== void 0 ? tmp_37_0 : 280)("watermarkHeight", (tmp_38_0 = preview_r21.watermark == null ? null : preview_r21.watermark.height) !== null && tmp_38_0 !== void 0 ? tmp_38_0 : 160)("watermarkRotation", (tmp_39_0 = preview_r21.watermark == null ? null : preview_r21.watermark.rotation) !== null && tmp_39_0 !== void 0 ? tmp_39_0 : -15)("signatureEnabled", !!((preview_r21.signature == null ? null : preview_r21.signature.enabled) && (preview_r21.signature == null ? null : preview_r21.signature.image)))("signatureImage", (preview_r21.signature == null ? null : preview_r21.signature.image) || null)("signatureX", (tmp_42_0 = preview_r21.signature == null ? null : preview_r21.signature.x) !== null && tmp_42_0 !== void 0 ? tmp_42_0 : 48)("signatureY", (tmp_43_0 = preview_r21.signature == null ? null : preview_r21.signature.y) !== null && tmp_43_0 !== void 0 ? tmp_43_0 : 720)("signatureWidth", (tmp_44_0 = preview_r21.signature == null ? null : preview_r21.signature.width) !== null && tmp_44_0 !== void 0 ? tmp_44_0 : 160)("signatureHeight", (tmp_45_0 = preview_r21.signature == null ? null : preview_r21.signature.height) !== null && tmp_45_0 !== void 0 ? tmp_45_0 : 64)("signaturePage", (tmp_46_0 = preview_r21.signature == null ? null : preview_r21.signature.page) !== null && tmp_46_0 !== void 0 ? tmp_46_0 : 0)("termsAndConditions", preview_r21.termsAndConditions || "")("termsPosition", preview_r21.termsPosition || "left");
  }
}
function SmartBatchComponent_ng_container_0_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 104);
    \u0275\u0275listener("click", function SmartBatchComponent_ng_container_0_Conditional_38_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeTemplatePreview());
    });
    \u0275\u0275elementStart(1, "div", 105);
    \u0275\u0275listener("click", function SmartBatchComponent_ng_container_0_Conditional_38_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r20);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 106)(3, "div", 107)(4, "p", 108);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h2", 109);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 110);
    \u0275\u0275listener("click", function SmartBatchComponent_ng_container_0_Conditional_38_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeTemplatePreview());
    });
    \u0275\u0275elementStart(9, "mat-icon");
    \u0275\u0275text(10, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 111);
    \u0275\u0275template(12, SmartBatchComponent_ng_container_0_Conditional_38_Conditional_12_Template, 4, 1, "div", 112)(13, SmartBatchComponent_ng_container_0_Conditional_38_Conditional_13_Template, 1, 44, "report-preview", 113);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", t_r4("smartBatchLanding.templatePreviewHint"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.templateTitle(ctx), " ");
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", t_r4("smartBatchLanding.templatePreviewClose"));
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.previewLoading() ? 12 : 13);
  }
}
function SmartBatchComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "input", 3, 0);
    \u0275\u0275listener("change", function SmartBatchComponent_ng_container_0_Template_input_change_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.importTemplate($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 4)(4, "header", 5)(5, "div", 6)(6, "div", 7)(7, "a", 8);
    \u0275\u0275text(8, "Verifik");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "mat-icon", 9);
    \u0275\u0275elementStart(10, "a", 10);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "mat-icon", 9);
    \u0275\u0275elementStart(13, "span", 11);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "a", 12)(16, "mat-icon", 13);
    \u0275\u0275text(17, "arrow_back");
    \u0275\u0275elementEnd();
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 14)(20, "div", 15)(21, "div", 16)(22, "h1", 17);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "p", 18);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 19);
    \u0275\u0275template(27, SmartBatchComponent_ng_container_0_Conditional_27_Template, 4, 1, "button", 20)(28, SmartBatchComponent_ng_container_0_Conditional_28_Template, 8, 5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 21)(30, "button", 22);
    \u0275\u0275listener("click", function SmartBatchComponent_ng_container_0_Template_button_click_30_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setActiveTab("configurations"));
    });
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "button", 22);
    \u0275\u0275listener("click", function SmartBatchComponent_ng_container_0_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setActiveTab("templates"));
    });
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(34, "main", 23)(35, "div", 24);
    \u0275\u0275template(36, SmartBatchComponent_ng_container_0_Conditional_36_Template, 3, 1)(37, SmartBatchComponent_ng_container_0_Conditional_37_Template, 2, 1);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(38, SmartBatchComponent_ng_container_0_Conditional_38_Template, 14, 4, "div", 25);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_30_0;
    const t_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(t_r4("visitaGuide.brand"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r4("smartBatchLanding.workspaceTitle"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r4("smartBatchLanding.backToGuide"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", t_r4("smartBatchLanding.title"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r4("smartBatchLanding.subtitle"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.activeTab() === "configurations" ? 27 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.activeTab() === "templates" ? 28 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-stone-950", ctx_r1.activeTab() === "configurations")("text-white", ctx_r1.activeTab() === "configurations")("dark:bg-white", ctx_r1.activeTab() === "configurations")("dark:text-gray-950", ctx_r1.activeTab() === "configurations")("text-stone-600", ctx_r1.activeTab() !== "configurations")("hover:bg-stone-50", ctx_r1.activeTab() !== "configurations")("dark:text-stone-300", ctx_r1.activeTab() !== "configurations")("dark:hover:bg-gray-800", ctx_r1.activeTab() !== "configurations");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r4("smartBatchLanding.configurationsTab"), " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-stone-950", ctx_r1.activeTab() === "templates")("text-white", ctx_r1.activeTab() === "templates")("dark:bg-white", ctx_r1.activeTab() === "templates")("dark:text-gray-950", ctx_r1.activeTab() === "templates")("text-stone-600", ctx_r1.activeTab() !== "templates")("hover:bg-stone-50", ctx_r1.activeTab() !== "templates")("dark:text-stone-300", ctx_r1.activeTab() !== "templates")("dark:hover:bg-gray-800", ctx_r1.activeTab() !== "templates");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r4("smartBatchLanding.reportTemplatesTab"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.activeTab() === "configurations" ? 36 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.activeTab() === "templates" ? 37 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_30_0 = ctx_r1.previewTemplate()) ? 38 : -1, tmp_30_0);
  }
}
var SmartBatchComponent = class _SmartBatchComponent {
  constructor() {
    this._smartBatchService = inject(SmartBatchService);
    this._smartReportService = inject(SmartReportService);
    this._router = inject(Router);
    this._route = inject(ActivatedRoute);
    this._transloco = inject(TranslocoService);
    this._authGate = inject(AuthRequiredGateService);
    this._inputModeService = inject(SmartBatchInputModeService);
    this._snackBar = inject(MatSnackBar);
    this._confirm = inject(FuseConfirmationService);
    this._transfer = inject(SmartTemplateTransferService);
    this.exportingTemplateId = signal(null);
    this.isImportingTemplate = signal(false);
    this.configurations = this._smartBatchService.configurations;
    this.isLoading = this._smartBatchService.isLoading;
    this._configPagination = this._smartBatchService.configurationsPage;
    this.configPage = computed(() => this._configPagination().page);
    this.configPages = computed(() => this._configPagination().pages);
    this.configTotal = computed(() => this._configPagination().total);
    this.configRangeStart = computed(() => {
      const state = this._configPagination();
      return state.total === 0 ? 0 : (state.page - 1) * state.perPage + 1;
    });
    this.configRangeEnd = computed(() => {
      const state = this._configPagination();
      return Math.min(state.page * state.perPage, state.total);
    });
    this.canGoPreviousConfigPage = computed(() => this.configPage() > 1 && !this.isLoading());
    this.canGoNextConfigPage = computed(() => this.configPage() < this.configPages() && !this.isLoading());
    this.activeTab = signal("configurations");
    this.templates = this._smartReportService.templates;
    this.isLoadingTemplates = this._smartReportService.isLoading;
    this.isCloningPreset = signal(false);
    this.isModeDialogOpen = signal(false);
    this.previewTemplate = signal(null);
    this.previewLoading = signal(false);
    this.previewData = computed(() => this._sampleFromTemplate(this.previewTemplate()));
    this._previewGen = 0;
    this.systemTemplates = computed(() => this.templates().filter((t) => t.type === "System").sort((a, b) => {
      const cat = (a.category ?? "").localeCompare(b.category ?? "");
      if (cat !== 0)
        return cat;
      return (a.tier ?? "").localeCompare(b.tier ?? "");
    }));
    this.clientTemplates = computed(() => this.templates().filter((t) => t.type !== "System"));
  }
  ngOnInit() {
    this._authGate.runWithAuthOrDialog({
      onAuthenticated: () => {
        const tab = this._route.snapshot.queryParamMap.get("tab");
        if (tab === "templates") {
          this.activeTab.set("templates");
        }
        this._route.queryParamMap.subscribe((params) => {
          const queryTab = params.get("tab");
          if (queryTab === "templates") {
            this.activeTab.set("templates");
          }
        });
        this._loadLandingData();
      },
      panelClass: "auth-required-dialog"
    });
  }
  ngOnDestroy() {
    this.closeTemplatePreview();
  }
  onEscapePreview() {
    if (this.previewTemplate())
      this.closeTemplatePreview();
  }
  openTemplatePreview(template) {
    const gen = ++this._previewGen;
    this.previewTemplate.set(template);
    this.previewLoading.set(true);
    const id = template._id;
    if (!id) {
      this._showPreview(template, gen);
      return;
    }
    this._smartReportService.getTemplate(id).subscribe({
      next: (full) => this._showPreview(full ?? template, gen),
      error: () => this._showPreview(template, gen)
    });
  }
  closeTemplatePreview() {
    this._previewGen += 1;
    this.previewTemplate.set(null);
    this.previewLoading.set(false);
  }
  _showPreview(template, gen) {
    if (gen !== this._previewGen)
      return;
    this.previewTemplate.set(template);
    this.previewLoading.set(false);
  }
  previewLayerZ(template) {
    return templateLayerZ(template);
  }
  _sampleFromTemplate(template) {
    const sample = template?.sampleData ?? {};
    return {
      batchName: sample.batchName || template?.name || "",
      rowIndex: sample.rowIndex ?? 0,
      inputData: sample.inputData ?? {},
      results: sample.results ?? {},
      errors: sample.errors,
      report: sample.report
    };
  }
  _loadLandingData() {
    this._smartBatchService.getConfigurations().subscribe({
      error: (err) => console.error("[SmartBatch] getConfigurations error", err)
    });
    this._smartReportService.getTemplates().subscribe({
      error: (err) => console.error("[SmartBatch] getTemplates error", err)
    });
  }
  setActiveTab(tab) {
    this.activeTab.set(tab);
  }
  previousConfigPage() {
    if (!this.canGoPreviousConfigPage())
      return;
    this._loadConfigPage(this.configPage() - 1);
  }
  nextConfigPage() {
    if (!this.canGoNextConfigPage())
      return;
    this._loadConfigPage(this.configPage() + 1);
  }
  _loadConfigPage(page) {
    this._smartBatchService.getConfigurations({ page }).subscribe({
      error: (err) => console.error("[SmartBatch] getConfigurations error", err)
    });
  }
  createConfiguration() {
    this._router.navigate(["/smart-batch/create"], { queryParams: { from: "guide" } });
  }
  createBlankTemplate() {
    this._router.navigate(["/smart-batch"], { queryParams: { start: "report" } });
  }
  useSystemTemplate(template, event) {
    event.stopPropagation();
    if (!template.systemKey)
      return;
    this._openUseTemplateDialog(template, (mode) => {
      this._cloneAndNavigate(template.systemKey, mode);
    });
  }
  useClientTemplate(template, event) {
    event.stopPropagation();
    const configId = this.resolveBatchConfigRef(template.batchConfiguration).id;
    if (!configId) {
      this._snackBar.open(this._transloco.translate("smartBatchSystemPresets.unlinkedTemplate"), void 0, { duration: 4e3 });
      return;
    }
    this._openUseTemplateDialog(template, (mode) => {
      this._navigateForMode(configId, mode);
    });
  }
  _openUseTemplateDialog(template, onMode) {
    if (this.isCloningPreset() || this.isModeDialogOpen())
      return;
    this.isModeDialogOpen.set(true);
    this._inputModeService.openModeDialog({ template, context: "useTemplate" }).pipe(take(1)).subscribe((mode) => {
      this.isModeDialogOpen.set(false);
      if (!mode)
        return;
      onMode(mode);
    });
  }
  _navigateForMode(configId, mode) {
    if (mode === "single") {
      this._router.navigate(["/smart-batch", configId, "quick-validate"]);
      return;
    }
    this._router.navigate(["/smart-batch", configId, "batch", "new"]);
  }
  _cloneAndNavigate(systemKey, mode) {
    if (this.isCloningPreset())
      return;
    this.isCloningPreset.set(true);
    this._smartBatchService.cloneSystemPreset(systemKey).subscribe({
      next: (res) => {
        this.isCloningPreset.set(false);
        const configId = res.data.batchConfiguration._id ?? res.data.batchConfiguration.id;
        if (!configId)
          return;
        if (res.data.reused) {
          this._snackBar.open(this._transloco.translate("smartBatchSystemPresets.reusedExisting"), void 0, { duration: 3500 });
        }
        this._smartBatchService.getConfigurations().subscribe();
        this._smartReportService.getTemplates().subscribe();
        this._navigateForMode(configId, mode);
      },
      error: (err) => {
        this.isCloningPreset.set(false);
        console.error("[SmartBatch] cloneSystemPreset error", err);
        this._snackBar.open(this._transloco.translate("smartBatchSystemPresets.cloneFailed"), void 0, { duration: 4e3 });
      }
    });
  }
  deleteConfiguration(id, event) {
    event.stopPropagation();
    this._openDeleteDialog("smartBatchLanding.deleteConfigConfirmation").subscribe((result) => {
      if (result !== "confirmed")
        return;
      this._smartBatchService.deleteConfiguration(id).subscribe(() => {
        const page = this.configurations().length === 0 ? Math.max(1, this.configPage() - 1) : this.configPage();
        this._loadConfigPage(page);
      });
    });
  }
  deleteTemplate(id, event) {
    event.stopPropagation();
    this._openDeleteDialog("smartBatchLanding.deleteConfirmation").subscribe((result) => {
      if (result !== "confirmed")
        return;
      this._smartReportService.deleteTemplate(id).subscribe();
    });
  }
  exportTemplate(template, event) {
    return __async(this, null, function* () {
      event.stopPropagation();
      const id = template._id;
      if (!id || this.exportingTemplateId())
        return;
      this.exportingTemplateId.set(id);
      try {
        this._transfer.downloadExport(yield this._transfer.buildExport(id));
        this._snackBar.open(this._transloco.translate("smartBatchLanding.exportDone"), void 0, { duration: 3e3 });
      } catch (error) {
        console.error("[SmartBatch] template export error", error);
        this._snackBar.open(this._transloco.translate("smartBatchLanding.exportFailed"), void 0, { duration: 4e3 });
      } finally {
        this.exportingTemplateId.set(null);
      }
    });
  }
  importTemplate(event) {
    return __async(this, null, function* () {
      const input = event.target;
      const file = input.files?.[0];
      input.value = "";
      if (!file || this.isImportingTemplate())
        return;
      this.isImportingTemplate.set(true);
      try {
        const data = yield this._transfer.readImportFile(file);
        const result = yield this._transfer.importFile(data, {
          templateNames: this.templates().map((item) => item.name ?? ""),
          configurationNames: this.configurations().map((item) => item.name ?? ""),
          suffix: this._transloco.translate("smartBatchLanding.importSuffix")
        });
        this._smartBatchService.getConfigurations({ page: this.configPage() }).subscribe();
        this._smartReportService.getTemplates().subscribe();
        this.activeTab.set("templates");
        const messageKey = result.securityDisabled ? "smartBatchLanding.importDoneNoPassword" : "smartBatchLanding.importDone";
        this._snackBar.open(this._transloco.translate(messageKey, { name: result.template.name }), void 0, { duration: result.securityDisabled ? 7e3 : 4e3 });
      } catch (error) {
        console.error("[SmartBatch] template import error", error);
        const code = error instanceof TemplateImportError ? error.code : "createFailed";
        const codes = error instanceof TemplateImportError ? error.detail.join(", ") : "";
        this._snackBar.open(this._transloco.translate(`smartBatchLanding.importError_${code}`, { codes }), void 0, { duration: 7e3 });
      } finally {
        this.isImportingTemplate.set(false);
      }
    });
  }
  _openDeleteDialog(messageKey) {
    return this._confirm.open({
      title: this._transloco.translate("smartBatchLanding.deleteTitle"),
      message: this._transloco.translate(messageKey),
      actions: {
        confirm: { label: this._transloco.translate("smartBatchLanding.deleteConfirm") },
        cancel: { label: this._transloco.translate("smartBatchLanding.deleteCancel") }
      }
    }).afterClosed();
  }
  openTemplateEditor(template, event) {
    event.stopPropagation();
    if (template.type === "System")
      return;
    const templateId = template._id ?? "";
    if (!templateId)
      return;
    const configId = this.resolveBatchConfigRef(template.batchConfiguration).id;
    void this._router.navigate(["/smart-batch"], {
      queryParams: __spreadValues({
        step: "layout",
        templateId,
        intent: "template"
      }, configId ? { configId } : {})
    });
  }
  resolveBatchConfigRef(ref) {
    if (!ref) {
      return { id: null, name: null };
    }
    const id = this._toConfigIdString(typeof ref === "string" ? ref : ref._id ?? ref.id);
    if (!id) {
      return { id: null, name: null };
    }
    const populatedName = typeof ref === "object" ? ref.name ?? null : null;
    const config = this.configurations().find((c) => this._toConfigIdString(c._id ?? c.id) === id);
    return {
      id,
      name: populatedName ?? config?.name ?? null
    };
  }
  getConfigName(configRef) {
    const resolved = this.resolveBatchConfigRef(configRef);
    return resolved.name ?? resolved.id ?? "";
  }
  _toConfigIdString(value) {
    if (value == null) {
      return null;
    }
    if (typeof value === "string") {
      return value;
    }
    if (typeof value === "object") {
      const record = value;
      const nestedId = record._id ?? record.id;
      if (nestedId != null && nestedId !== value) {
        return this._toConfigIdString(nestedId);
      }
      if (typeof record.toString === "function") {
        const asString = record.toString();
        if (asString && asString !== "[object Object]") {
          return asString;
        }
      }
    }
    return null;
  }
  templateTitle(template) {
    if (template.nameKey) {
      return this._transloco.translate(template.nameKey);
    }
    return template.name;
  }
  templateDescription(template) {
    if (template.descriptionKey) {
      return this._transloco.translate(template.descriptionKey);
    }
    return template.description ?? "";
  }
  getStepCount(template) {
    return getPresetStepCount(template);
  }
  getCategoryIcon(category) {
    const map = {
      citizen: "person",
      company: "business",
      vehicle: "directions_car"
    };
    return map[category ?? ""] ?? "description";
  }
  getTierLabel(tier) {
    if (tier === "comprehensive") {
      return this._transloco.translate("smartBatchSystemPresets.comprehensive");
    }
    return this._transloco.translate("smartBatchSystemPresets.essential");
  }
  executorBadgeKey(executor) {
    if (executor === "queue")
      return "createBatchConfig.runModeAsync";
    return "createBatchConfig.runModeSync";
  }
  executorBadgeClasses(executor) {
    if (executor === "queue") {
      return "border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-900/60 dark:bg-blue-950/30 dark:text-blue-300";
    }
    return "border-indigo-200 bg-indigo-50 text-indigo-700 dark:border-indigo-900/60 dark:bg-indigo-950/30 dark:text-indigo-300";
  }
  editConfiguration(id, event) {
    event.stopPropagation();
    this._router.navigate(["/smart-batch/edit", id]);
  }
  openDashboard(id) {
    if (!id)
      return;
    this._router.navigateByUrl(`/smart-batch/${id}`);
  }
  getCategoryLabel(category) {
    const map = {
      citizen: this._transloco.translate("smartBatchSystemPresets.citizen"),
      company: this._transloco.translate("smartBatchSystemPresets.company"),
      vehicle: this._transloco.translate("smartBatchSystemPresets.vehicle")
    };
    return map[category ?? ""] ?? category ?? "";
  }
  getCountryFlag(country) {
    return getCountryFlag(country);
  }
  isSystemPresetAvailable(template) {
    return Boolean(template.systemKey) && this.getStepCount(template) > 0;
  }
  static {
    this.\u0275fac = function SmartBatchComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SmartBatchComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SmartBatchComponent, selectors: [["smart-batch"]], hostBindings: function SmartBatchComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("keydown.escape", function SmartBatchComponent_keydown_escape_HostBindingHandler() {
          return ctx.onEscapePreview();
        }, false, \u0275\u0275resolveDocument);
      }
    }, decls: 1, vars: 0, consts: [["templateImportInput", ""], ["templateThumb", ""], [4, "transloco"], ["type", "file", "accept", ".json,application/json", 1, "hidden", 3, "change"], [1, "flex", "min-h-screen", "min-w-0", "flex-auto", "flex-col", "bg-stone-50", "dark:bg-gray-950"], [1, "border-b", "border-stone-200/90", "bg-white/90", "px-5", "py-6", "backdrop-blur-sm", "dark:border-gray-800", "dark:bg-gray-950/90", "md:px-8", "md:py-8"], [1, "mx-auto", "flex", "w-full", "max-w-7xl", "flex-col", "gap-5"], [1, "flex", "flex-wrap", "items-center", "text-xs", "font-medium", "leading-none", "text-stone-500", "dark:text-stone-400"], ["routerLink", "/home", 1, "cursor-pointer", "text-stone-700", "underline-offset-4", "hover:underline", "dark:text-stone-300"], ["svgIcon", "heroicons_solid:chevron-right", 1, "icon-size-4", "mx-2", "text-stone-400"], ["routerLink", "/smart-batch", 1, "cursor-pointer", "text-stone-700", "underline-offset-4", "hover:underline", "dark:text-stone-300"], [1, "cursor-default", "text-stone-600", "dark:text-stone-300"], ["routerLink", "/smart-batch", 1, "inline-flex", "w-fit", "items-center", "gap-2", "text-sm", "font-medium", "text-stone-700", "underline-offset-4", "hover:underline", "dark:text-stone-300"], [1, "icon-size-4"], [1, "flex", "flex-col", "gap-4", "lg:flex-row", "lg:items-end", "lg:justify-between"], [1, "max-w-2xl"], [1, "flex", "flex-wrap", "items-center", "gap-2"], [1, "text-2xl", "font-semibold", "tracking-tight", "text-stone-950", "dark:text-white", "md:text-3xl"], [1, "mt-2", "text-sm", "leading-6", "text-stone-500", "dark:text-stone-400", "md:text-base"], [1, "flex", "flex-wrap", "items-center", "gap-3"], ["mat-flat-button", "", "color", "primary", "type", "button", 1, "min-h-11", "shrink-0", "rounded-xl", "px-5"], [1, "inline-flex", "w-fit", "rounded-xl", "border", "border-stone-200", "bg-white", "p-1", "dark:border-gray-800", "dark:bg-gray-900/70"], ["type", "button", 1, "rounded-lg", "px-4", "py-2", "text-sm", "font-medium", "transition", 3, "click"], [1, "flex", "flex-auto", "flex-col", "px-5", "py-8", "md:px-8", "md:py-10"], [1, "mx-auto", "flex", "w-full", "max-w-7xl", "flex-col", "gap-8"], [1, "fixed", "inset-0", "z-50", "flex", "items-center", "justify-center", "bg-stone-950/70", "p-4"], ["mat-flat-button", "", "color", "primary", "type", "button", 1, "min-h-11", "shrink-0", "rounded-xl", "px-5", 3, "click"], [1, "mr-2", "icon-size-5"], ["type", "button", 1, "inline-flex", "min-h-11", "shrink-0", "items-center", "justify-center", "gap-2", "rounded-xl", "border", "border-stone-200", "px-5", "text-sm", "font-medium", "text-stone-800", "transition", "hover:bg-stone-50", "disabled:opacity-60", "dark:border-gray-700", "dark:text-stone-100", "dark:hover:bg-gray-800", 3, "click", "disabled", "matTooltip"], ["mode", "indeterminate", "diameter", "16"], [1, "!h-4", "!w-4", "!text-base"], ["type", "button", 1, "inline-flex", "min-h-11", "shrink-0", "items-center", "justify-center", "gap-2", "rounded-xl", "border", "border-stone-200", "px-5", "text-sm", "font-medium", "text-stone-800", "transition", "hover:bg-stone-50", "dark:border-gray-700", "dark:text-stone-100", "dark:hover:bg-gray-800", 3, "click"], [1, "flex", "flex-col", "items-center", "justify-center", "rounded-2xl", "border", "border-dashed", "border-stone-200", "py-20", "dark:border-gray-800"], [1, "flex", "flex-col", "items-center", "justify-center", "rounded-2xl", "border", "border-dashed", "border-stone-200", "px-5", "py-16", "text-center", "dark:border-gray-800"], ["diameter", "40"], [1, "mt-4", "text-sm", "text-stone-500", "dark:text-stone-400"], [1, "flex", "h-12", "w-12", "items-center", "justify-center", "rounded-xl", "bg-stone-100", "text-stone-500", "dark:bg-gray-800", "dark:text-stone-300"], [1, "mt-4", "text-base", "font-semibold", "text-stone-950", "dark:text-white"], [1, "mt-1", "max-w-sm", "text-sm", "text-stone-500", "dark:text-stone-400"], ["type", "button", 1, "mt-5", "inline-flex", "min-h-10", "items-center", "justify-center", "gap-2", "rounded-xl", "bg-stone-950", "px-4", "text-sm", "font-medium", "text-white", "transition", "hover:bg-stone-800", "dark:bg-white", "dark:text-gray-950", "dark:hover:bg-stone-200", 3, "click"], [1, "grid", "grid-cols-1", "gap-4", "md:grid-cols-2", "xl:grid-cols-3"], [1, "group", "relative", "cursor-pointer", "rounded-2xl", "border", "border-stone-200/90", "bg-white", "p-5", "shadow-sm", "transition", "hover:border-stone-300", "hover:shadow-md", "dark:border-gray-800", "dark:bg-gray-900/70", "dark:hover:border-gray-700"], [1, "mt-6", "flex", "items-center", "justify-between", "gap-4"], [1, "group", "relative", "cursor-pointer", "rounded-2xl", "border", "border-stone-200/90", "bg-white", "p-5", "shadow-sm", "transition", "hover:border-stone-300", "hover:shadow-md", "dark:border-gray-800", "dark:bg-gray-900/70", "dark:hover:border-gray-700", 3, "click"], [1, "absolute", "right-3", "top-3", "flex", "gap-1", "opacity-0", "transition", "group-hover:opacity-100"], ["type", "button", "mat-icon-button", "", 3, "click", "matTooltip"], [1, "icon-size-5"], ["type", "button", "mat-icon-button", "", "color", "warn", 3, "click", "matTooltip"], [1, "flex", "items-start", "gap-3"], [1, "flex", "h-11", "w-11", "shrink-0", "items-center", "justify-center", "rounded-xl", "border", "border-stone-200", "bg-stone-50", "text-xl", "dark:border-gray-800", "dark:bg-gray-950"], [1, "min-w-0", "pr-16"], [1, "line-clamp-1", "text-base", "font-semibold", "text-stone-950", "dark:text-white"], [1, "mt-2", "flex", "flex-wrap", "gap-2"], [1, "inline-flex", "rounded-full", "border", "border-stone-200", "bg-stone-50", "px-2.5", "py-0.5", "text-[11px]", "font-medium", "uppercase", "tracking-wide", "text-stone-600", "dark:border-gray-700", "dark:bg-gray-950", "dark:text-stone-300"], [1, "inline-flex", "rounded-full", "border", "border-red-200", "bg-red-50", "px-2.5", "py-0.5", "text-[11px]", "font-medium", "text-red-700", "dark:border-red-900/60", "dark:bg-red-950/30", "dark:text-red-300"], [1, "inline-flex", "rounded-full", "border", "px-2.5", "py-0.5", "text-[11px]", "font-medium", "uppercase", "tracking-wide"], [1, "mt-4", "line-clamp-2", "min-h-[2.5rem]", "text-sm", "leading-relaxed", "text-stone-500", "dark:text-stone-400"], [1, "mt-5", "grid", "grid-cols-2", "gap-3", "border-t", "border-stone-200/80", "pt-4", "dark:border-gray-800"], [1, "rounded-xl", "border", "border-stone-200", "p-3", "dark:border-gray-800"], [1, "text-xs", "font-medium", "uppercase", "tracking-[0.14em]", "text-stone-400", "dark:text-stone-500"], [1, "mt-1", "text-lg", "font-semibold", "text-stone-950", "dark:text-white"], [1, "mt-1", "truncate", "text-sm", "font-medium", "capitalize", "text-stone-950", "dark:text-white"], [1, "text-sm", "text-stone-500", "dark:text-stone-400"], [1, "flex", "items-center", "gap-2"], ["type", "button", "mat-stroked-button", "", 1, "rounded-xl", 3, "click", "disabled"], [1, "rounded-2xl", "border", "border-stone-200/90", "bg-white", "shadow-sm", "dark:border-gray-800", "dark:bg-gray-900/70"], [1, "border-b", "border-stone-200/80", "p-5", "dark:border-gray-800", "md:p-6"], [1, "flex", "h-10", "w-10", "shrink-0", "items-center", "justify-center", "rounded-xl", "border", "border-stone-200", "bg-stone-50", "text-stone-700", "dark:border-gray-800", "dark:bg-gray-950", "dark:text-stone-200"], [1, "text-base", "font-semibold", "text-stone-950", "dark:text-white"], [1, "mt-1", "text-sm", "text-stone-500", "dark:text-stone-400"], [1, "p-5", "md:p-6"], [1, "text-sm", "italic", "text-stone-400"], [1, "flex", "flex-col", "items-center", "justify-center", "rounded-xl", "border", "border-dashed", "border-stone-200", "px-5", "py-14", "text-center", "dark:border-gray-800"], [1, "relative", "mb-4"], [3, "template", "icon"], [1, "absolute", "inset-0", "flex", "items-end", "justify-center", "bg-gradient-to-t", "from-stone-950/70", "to-transparent", "pb-3", "opacity-0", "transition", "group-hover:opacity-100"], [1, "inline-flex", "items-center", "gap-1", "rounded-full", "bg-white/95", "px-3", "py-1", "text-[11px]", "font-medium", "text-stone-900"], [1, "!h-3.5", "!w-3.5", "!text-[14px]"], [1, "group", "flex", "h-full", "cursor-pointer", "flex-col", "rounded-2xl", "border", "border-stone-200", "bg-stone-50/50", "p-5", "transition", "hover:border-stone-300", "hover:bg-white", "dark:border-gray-800", "dark:bg-gray-950/40", "dark:hover:border-gray-700", "dark:hover:bg-gray-900/70"], [1, "group", "flex", "h-full", "cursor-pointer", "flex-col", "rounded-2xl", "border", "border-stone-200", "bg-stone-50/50", "p-5", "transition", "hover:border-stone-300", "hover:bg-white", "dark:border-gray-800", "dark:bg-gray-950/40", "dark:hover:border-gray-700", "dark:hover:bg-gray-900/70", 3, "click"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "flex", "h-11", "w-11", "shrink-0", "items-center", "justify-center", "rounded-xl", "border", "border-stone-200", "bg-white", "text-lg", "dark:border-gray-700", "dark:bg-gray-900"], [1, "inline-flex", "rounded-full", "border", "border-stone-200", "bg-white", "px-2.5", "py-0.5", "text-[11px]", "font-semibold", "uppercase", "tracking-wide", "text-stone-700", "dark:border-gray-700", "dark:bg-gray-900", "dark:text-stone-300"], [1, "inline-flex", "items-center", "gap-1", "rounded-full", "border", "border-stone-200", "bg-white", "px-2.5", "py-0.5", "text-[11px]", "font-medium", "text-stone-600", "dark:border-gray-700", "dark:bg-gray-900", "dark:text-stone-300"], [1, "mt-3", "line-clamp-2", "text-base", "font-semibold", "leading-snug", "text-stone-950", "dark:text-white"], [1, "mt-3", "line-clamp-2", "flex-1", "text-sm", "leading-relaxed", "text-stone-500", "dark:text-stone-400"], [1, "mt-5", "grid", "grid-cols-2", "gap-3"], [1, "rounded-xl", "border", "border-stone-200", "bg-white", "p-3", "dark:border-gray-800", "dark:bg-gray-900/70"], [1, "text-xs", "font-medium", "uppercase", "tracking-[0.14em]", "text-stone-400"], ["type", "button", 1, "mt-5", "inline-flex", "min-h-10", "w-full", "items-center", "justify-center", "gap-2", "rounded-xl", "bg-stone-950", "px-4", "text-sm", "font-medium", "text-white", "transition", "hover:bg-stone-800", "dark:bg-white", "dark:text-gray-950", "dark:hover:bg-stone-200"], ["type", "button", "disabled", "", 1, "mt-5", "inline-flex", "min-h-10", "w-full", "cursor-not-allowed", "items-center", "justify-center", "gap-2", "rounded-xl", "border", "border-stone-200", "bg-stone-100", "px-4", "text-sm", "font-medium", "text-stone-400", "dark:border-gray-800", "dark:bg-gray-900", "dark:text-stone-500", 3, "matTooltip"], ["type", "button", 1, "mt-5", "inline-flex", "min-h-10", "w-full", "items-center", "justify-center", "gap-2", "rounded-xl", "bg-stone-950", "px-4", "text-sm", "font-medium", "text-white", "transition", "hover:bg-stone-800", "dark:bg-white", "dark:text-gray-950", "dark:hover:bg-stone-200", 3, "click"], [1, "mt-4", "max-w-sm", "text-sm", "text-stone-500", "dark:text-stone-400"], ["type", "button", 1, "mt-2", "inline-flex", "min-h-10", "items-center", "justify-center", "gap-2", "rounded-xl", "px-4", "text-sm", "font-medium", "text-stone-700", "transition", "hover:bg-stone-100", "disabled:opacity-60", "dark:text-stone-200", "dark:hover:bg-gray-800", 3, "click", "disabled"], [1, "group", "relative", "flex", "h-full", "cursor-pointer", "flex-col", "rounded-2xl", "border", "border-stone-200", "bg-white", "p-5", "transition", "hover:border-stone-300", "hover:shadow-sm", "dark:border-gray-800", "dark:bg-gray-950/40", "dark:hover:border-gray-700"], [1, "group", "relative", "flex", "h-full", "cursor-pointer", "flex-col", "rounded-2xl", "border", "border-stone-200", "bg-white", "p-5", "transition", "hover:border-stone-300", "hover:shadow-sm", "dark:border-gray-800", "dark:bg-gray-950/40", "dark:hover:border-gray-700", 3, "click"], [1, "mb-3", "flex", "items-center", "justify-end", "gap-1"], ["type", "button", "mat-icon-button", "", 3, "click", "disabled", "matTooltip"], ["mode", "indeterminate", "diameter", "18"], [1, "mt-3", "flex", "items-center", "gap-2", "text-base", "font-semibold", "text-stone-950", "dark:text-white"], [1, "h-3", "w-3", "shrink-0", "rounded-full", "border", "border-black/10"], [1, "line-clamp-1"], [1, "mt-3", "line-clamp-2", "flex-1", "text-sm", "text-stone-500", "dark:text-stone-400"], [1, "mt-1", "truncate", "text-sm", "font-medium", "text-stone-950", "dark:text-white"], [1, "fixed", "inset-0", "z-50", "flex", "items-center", "justify-center", "bg-stone-950/70", "p-4", 3, "click"], [1, "flex", "max-h-[92vh]", "w-full", "max-w-6xl", "flex-col", "overflow-hidden", "rounded-2xl", "bg-white", "shadow-2xl", "dark:bg-gray-950", 3, "click"], [1, "flex", "items-start", "justify-between", "gap-4", "border-b", "border-stone-200", "px-5", "py-4", "dark:border-gray-800"], [1, "min-w-0"], [1, "text-xs", "font-medium", "uppercase", "tracking-wide", "text-stone-400"], [1, "mt-1", "truncate", "text-lg", "font-semibold", "text-stone-950", "dark:text-white"], ["type", "button", "mat-icon-button", "", 3, "click"], [1, "min-h-[50vh]", "flex-1", "overflow-auto", "bg-stone-100", "p-4", "dark:bg-gray-900", "sm:p-6"], [1, "flex", "min-h-[50vh]", "flex-col", "items-center", "justify-center", "gap-3"], [3, "template", "previewData", "fullContent", "primaryColor", "pageBackgroundColor", "orientation", "pageSize", "layerZ", "clickable", "logoUrl", "logoEnabled", "logoX", "logoY", "logoWidth", "logoHeight", "logoRotation", "logoAutoFitContent", "sheetImages", "bodyTopPadding", "legend", "legendPosition", "showPageNumbers", "pageNumberPosition", "watermarkEnabled", "watermarkType", "watermarkLogoUrl", "watermarkText", "watermarkOpacity", "watermarkPattern", "watermarkX", "watermarkY", "watermarkWidth", "watermarkHeight", "watermarkRotation", "signatureEnabled", "signatureImage", "signatureX", "signatureY", "signatureWidth", "signatureHeight", "signaturePage", "termsAndConditions", "termsPosition"], ["diameter", "36"], [1, "text-sm", "text-stone-500"]], template: function SmartBatchComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, SmartBatchComponent_ng_container_0_Template, 39, 44, "ng-container", 2);
      }
    }, dependencies: [
      CommonModule,
      NgTemplateOutlet,
      UpperCasePipe,
      TranslocoDirective,
      TranslocoModule,
      RouterModule,
      RouterLink,
      MatButtonModule,
      MatButton,
      MatIconButton,
      MatIconModule,
      MatIcon,
      MatTooltipModule,
      MatTooltip,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatSnackBarModule,
      ReportPreviewComponent,
      ReportTemplateThumbComponent
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SmartBatchComponent, [{
    type: Component,
    args: [{ selector: "smart-batch", standalone: true, imports: [
      CommonModule,
      TranslocoDirective,
      TranslocoModule,
      RouterModule,
      MatButtonModule,
      MatIconModule,
      MatTooltipModule,
      MatProgressSpinnerModule,
      MatSnackBarModule,
      ReportPreviewComponent,
      ReportTemplateThumbComponent
    ], encapsulation: ViewEncapsulation.None, template: `<ng-container *transloco="let t">\r
    <input\r
        #templateImportInput\r
        type="file"\r
        accept=".json,application/json"\r
        class="hidden"\r
        (change)="importTemplate($event)"\r
    />\r
    <div class="flex min-h-screen min-w-0 flex-auto flex-col bg-stone-50 dark:bg-gray-950">\r
        <header\r
            class="border-b border-stone-200/90 bg-white/90 px-5 py-6 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-950/90 md:px-8 md:py-8"\r
        >\r
            <div class="mx-auto flex w-full max-w-7xl flex-col gap-5">\r
                <div\r
                    class="flex flex-wrap items-center text-xs font-medium leading-none text-stone-500 dark:text-stone-400"\r
                >\r
                    <a\r
                        routerLink="/home"\r
                        class="cursor-pointer text-stone-700 underline-offset-4 hover:underline dark:text-stone-300"\r
                        >Verifik</a\r
                    >\r
                    <mat-icon class="icon-size-4 mx-2 text-stone-400" svgIcon="heroicons_solid:chevron-right"></mat-icon>\r
                    <a\r
                        routerLink="/smart-batch"\r
                        class="cursor-pointer text-stone-700 underline-offset-4 hover:underline dark:text-stone-300"\r
                        >{{ t('visitaGuide.brand') }}</a\r
                    >\r
                    <mat-icon class="icon-size-4 mx-2 text-stone-400" svgIcon="heroicons_solid:chevron-right"></mat-icon>\r
                    <span class="cursor-default text-stone-600 dark:text-stone-300">{{\r
                        t('smartBatchLanding.workspaceTitle')\r
                    }}</span>\r
                </div>\r
\r
                <a\r
                    routerLink="/smart-batch"\r
                    class="inline-flex w-fit items-center gap-2 text-sm font-medium text-stone-700 underline-offset-4 hover:underline dark:text-stone-300"\r
                >\r
                    <mat-icon class="icon-size-4">arrow_back</mat-icon>\r
                    {{ t('smartBatchLanding.backToGuide') }}\r
                </a>\r
\r
                <div class="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">\r
                    <div class="max-w-2xl">\r
                        <div class="flex flex-wrap items-center gap-2">\r
                            <h1 class="text-2xl font-semibold tracking-tight text-stone-950 dark:text-white md:text-3xl">\r
                                {{ t('smartBatchLanding.title') }}\r
                            </h1>\r
                        </div>\r
                        <p class="mt-2 text-sm leading-6 text-stone-500 dark:text-stone-400 md:text-base">\r
                            {{ t('smartBatchLanding.subtitle') }}\r
                        </p>\r
                    </div>\r
\r
                    <div class="flex flex-wrap items-center gap-3">\r
                        @if (activeTab() === 'configurations') {\r
                            <button\r
                                mat-flat-button\r
                                color="primary"\r
                                type="button"\r
                                class="min-h-11 shrink-0 rounded-xl px-5"\r
                                (click)="createConfiguration()"\r
                            >\r
                                <mat-icon class="mr-2 icon-size-5">add</mat-icon>\r
                                {{ t('smartBatchLanding.createConfiguration') }}\r
                            </button>\r
                        }\r
                        @if (activeTab() === 'templates') {\r
                            <button\r
                                type="button"\r
                                class="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-xl border border-stone-200 px-5 text-sm font-medium text-stone-800 transition hover:bg-stone-50 disabled:opacity-60 dark:border-gray-700 dark:text-stone-100 dark:hover:bg-gray-800"\r
                                [disabled]="isImportingTemplate()"\r
                                [matTooltip]="t('smartBatchLanding.importTemplateHint')"\r
                                (click)="templateImportInput.click()"\r
                            >\r
                                @if (isImportingTemplate()) {\r
                                    <mat-progress-spinner mode="indeterminate" diameter="16"></mat-progress-spinner>\r
                                } @else {\r
                                    <mat-icon class="!h-4 !w-4 !text-base">upload_file</mat-icon>\r
                                }\r
                                {{ t(isImportingTemplate() ? 'smartBatchLanding.importingTemplate' : 'smartBatchLanding.importTemplate') }}\r
                            </button>\r
                            <button\r
                                type="button"\r
                                class="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-xl border border-stone-200 px-5 text-sm font-medium text-stone-800 transition hover:bg-stone-50 dark:border-gray-700 dark:text-stone-100 dark:hover:bg-gray-800"\r
                                (click)="createBlankTemplate()"\r
                            >\r
                                <mat-icon class="!h-4 !w-4 !text-base">add</mat-icon>\r
                                {{ t('smartBatchLanding.createBlankTemplate') }}\r
                            </button>\r
                        }\r
                    </div>\r
                </div>\r
\r
                <div\r
                    class="inline-flex w-fit rounded-xl border border-stone-200 bg-white p-1 dark:border-gray-800 dark:bg-gray-900/70"\r
                >\r
                    <button\r
                        type="button"\r
                        class="rounded-lg px-4 py-2 text-sm font-medium transition"\r
                        [class.bg-stone-950]="activeTab() === 'configurations'"\r
                        [class.text-white]="activeTab() === 'configurations'"\r
                        [class.dark:bg-white]="activeTab() === 'configurations'"\r
                        [class.dark:text-gray-950]="activeTab() === 'configurations'"\r
                        [class.text-stone-600]="activeTab() !== 'configurations'"\r
                        [class.hover:bg-stone-50]="activeTab() !== 'configurations'"\r
                        [class.dark:text-stone-300]="activeTab() !== 'configurations'"\r
                        [class.dark:hover:bg-gray-800]="activeTab() !== 'configurations'"\r
                        (click)="setActiveTab('configurations')"\r
                    >\r
                        {{ t('smartBatchLanding.configurationsTab') }}\r
                    </button>\r
                    <button\r
                        type="button"\r
                        class="rounded-lg px-4 py-2 text-sm font-medium transition"\r
                        [class.bg-stone-950]="activeTab() === 'templates'"\r
                        [class.text-white]="activeTab() === 'templates'"\r
                        [class.dark:bg-white]="activeTab() === 'templates'"\r
                        [class.dark:text-gray-950]="activeTab() === 'templates'"\r
                        [class.text-stone-600]="activeTab() !== 'templates'"\r
                        [class.hover:bg-stone-50]="activeTab() !== 'templates'"\r
                        [class.dark:text-stone-300]="activeTab() !== 'templates'"\r
                        [class.dark:hover:bg-gray-800]="activeTab() !== 'templates'"\r
                        (click)="setActiveTab('templates')"\r
                    >\r
                        {{ t('smartBatchLanding.reportTemplatesTab') }}\r
                    </button>\r
                </div>\r
            </div>\r
        </header>\r
\r
        <main class="flex flex-auto flex-col px-5 py-8 md:px-8 md:py-10">\r
            <div class="mx-auto flex w-full max-w-7xl flex-col gap-8">\r
                @if (activeTab() === 'configurations') {\r
                    @if (isLoading()) {\r
                        <div\r
                            class="flex flex-col items-center justify-center rounded-2xl border border-dashed border-stone-200 py-20 dark:border-gray-800"\r
                        >\r
                            <mat-spinner diameter="40"></mat-spinner>\r
                            <p class="mt-4 text-sm text-stone-500 dark:text-stone-400">\r
                                {{ t('smartBatchLanding.loadingConfigurations') }}\r
                            </p>\r
                        </div>\r
                    } @else if (configurations().length === 0) {\r
                        <div\r
                            class="flex flex-col items-center justify-center rounded-2xl border border-dashed border-stone-200 px-5 py-16 text-center dark:border-gray-800"\r
                        >\r
                            <div\r
                                class="flex h-12 w-12 items-center justify-center rounded-xl bg-stone-100 text-stone-500 dark:bg-gray-800 dark:text-stone-300"\r
                            >\r
                                <mat-icon>layers</mat-icon>\r
                            </div>\r
                            <h3 class="mt-4 text-base font-semibold text-stone-950 dark:text-white">\r
                                {{ t('smartBatchLanding.noConfigurations') }}\r
                            </h3>\r
                            <p class="mt-1 max-w-sm text-sm text-stone-500 dark:text-stone-400">\r
                                {{ t('smartBatchLanding.noConfigurationsDesc') }}\r
                            </p>\r
                            <button\r
                                type="button"\r
                                class="mt-5 inline-flex min-h-10 items-center justify-center gap-2 rounded-xl bg-stone-950 px-4 text-sm font-medium text-white transition hover:bg-stone-800 dark:bg-white dark:text-gray-950 dark:hover:bg-stone-200"\r
                                (click)="createConfiguration()"\r
                            >\r
                                {{ t('smartBatchLanding.createFirstConfiguration') }}\r
                            </button>\r
                        </div>\r
                    } @else {\r
                        <div class="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">\r
                            @for (config of configurations(); track config._id ?? config.id) {\r
                                <article\r
                                    (click)="openDashboard(config._id ?? config.id ?? '')"\r
                                    class="group relative cursor-pointer rounded-2xl border border-stone-200/90 bg-white p-5 shadow-sm transition hover:border-stone-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900/70 dark:hover:border-gray-700"\r
                                >\r
                                    <div\r
                                        class="absolute right-3 top-3 flex gap-1 opacity-0 transition group-hover:opacity-100"\r
                                    >\r
                                        <button\r
                                            type="button"\r
                                            mat-icon-button\r
                                            (click)="editConfiguration(config._id ?? config.id ?? '', $event)"\r
                                            [matTooltip]="t('smartBatchLanding.edit')"\r
                                        >\r
                                            <mat-icon class="icon-size-5">edit</mat-icon>\r
                                        </button>\r
                                        <button\r
                                            type="button"\r
                                            mat-icon-button\r
                                            color="warn"\r
                                            (click)="deleteConfiguration(config._id ?? config.id ?? '', $event)"\r
                                            [matTooltip]="t('smartBatchLanding.delete')"\r
                                        >\r
                                            <mat-icon class="icon-size-5">delete</mat-icon>\r
                                        </button>\r
                                    </div>\r
\r
                                    <div class="flex items-start gap-3">\r
                                        <div\r
                                            class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-stone-200 bg-stone-50 text-xl dark:border-gray-800 dark:bg-gray-950"\r
                                        >\r
                                            {{ getCountryFlag(config.country) }}\r
                                        </div>\r
                                        <div class="min-w-0 pr-16">\r
                                            <h3\r
                                                class="line-clamp-1 text-base font-semibold text-stone-950 dark:text-white"\r
                                            >\r
                                                {{ config.name }}\r
                                            </h3>\r
                                            <div class="mt-2 flex flex-wrap gap-2">\r
                                                <span\r
                                                    class="inline-flex rounded-full border border-stone-200 bg-stone-50 px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wide text-stone-600 dark:border-gray-700 dark:bg-gray-950 dark:text-stone-300"\r
                                                >\r
                                                    {{ config.inputFormat | uppercase }} \u2192\r
                                                    {{ config.outputFormat | uppercase }}\r
                                                </span>\r
                                                @if (!config.isActive) {\r
                                                    <span\r
                                                        class="inline-flex rounded-full border border-red-200 bg-red-50 px-2.5 py-0.5 text-[11px] font-medium text-red-700 dark:border-red-900/60 dark:bg-red-950/30 dark:text-red-300"\r
                                                    >\r
                                                        {{ t('smartBatchLanding.inactive') }}\r
                                                    </span>\r
                                                }\r
                                                <span\r
                                                    class="inline-flex rounded-full border px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wide"\r
                                                    [class]="executorBadgeClasses(config.executor)"\r
                                                >\r
                                                    {{ t(executorBadgeKey(config.executor)) }}\r
                                                </span>\r
                                            </div>\r
                                        </div>\r
                                    </div>\r
\r
                                    <p\r
                                        class="mt-4 line-clamp-2 min-h-[2.5rem] text-sm leading-relaxed text-stone-500 dark:text-stone-400"\r
                                    >\r
                                        {{ config.description || t('smartBatchLanding.noDescription') }}\r
                                    </p>\r
\r
                                    <div\r
                                        class="mt-5 grid grid-cols-2 gap-3 border-t border-stone-200/80 pt-4 dark:border-gray-800"\r
                                    >\r
                                        <div class="rounded-xl border border-stone-200 p-3 dark:border-gray-800">\r
                                            <span\r
                                                class="text-xs font-medium uppercase tracking-[0.14em] text-stone-400 dark:text-stone-500"\r
                                                >{{ t('smartBatchLanding.steps') }}</span\r
                                            >\r
                                            <p class="mt-1 text-lg font-semibold text-stone-950 dark:text-white">\r
                                                {{ config.steps.length }}\r
                                            </p>\r
                                        </div>\r
                                        <div class="rounded-xl border border-stone-200 p-3 dark:border-gray-800">\r
                                            <span\r
                                                class="text-xs font-medium uppercase tracking-[0.14em] text-stone-400 dark:text-stone-500"\r
                                                >{{ t('smartBatchLanding.strategy') }}</span\r
                                            >\r
                                            <p\r
                                                class="mt-1 truncate text-sm font-medium capitalize text-stone-950 dark:text-white"\r
                                            >\r
                                                {{ config.mergeStrategy.replace('-', ' ') }}\r
                                            </p>\r
                                        </div>\r
                                    </div>\r
                                </article>\r
                            }\r
                        </div>\r
\r
                        @if (configPages() > 1) {\r
                            <div class="mt-6 flex items-center justify-between gap-4">\r
                                <p class="text-sm text-stone-500 dark:text-stone-400">\r
                                    {{\r
                                        t('smartBatchLanding.paginationRange', {\r
                                            start: configRangeStart(),\r
                                            end: configRangeEnd(),\r
                                            total: configTotal()\r
                                        })\r
                                    }}\r
                                </p>\r
\r
                                <div class="flex items-center gap-2">\r
                                    <button\r
                                        type="button"\r
                                        mat-stroked-button\r
                                        class="rounded-xl"\r
                                        [disabled]="!canGoPreviousConfigPage()"\r
                                        (click)="previousConfigPage()"\r
                                    >\r
                                        <mat-icon class="icon-size-5">chevron_left</mat-icon>\r
                                        {{ t('smartBatchLanding.previousPage') }}\r
                                    </button>\r
                                    <span class="text-sm text-stone-500 dark:text-stone-400">\r
                                        {{\r
                                            t('smartBatchLanding.pageOf', {\r
                                                page: configPage(),\r
                                                pages: configPages()\r
                                            })\r
                                        }}\r
                                    </span>\r
                                    <button\r
                                        type="button"\r
                                        mat-stroked-button\r
                                        class="rounded-xl"\r
                                        [disabled]="!canGoNextConfigPage()"\r
                                        (click)="nextConfigPage()"\r
                                    >\r
                                        {{ t('smartBatchLanding.nextPage') }}\r
                                        <mat-icon class="icon-size-5">chevron_right</mat-icon>\r
                                    </button>\r
                                </div>\r
                            </div>\r
                        }\r
                    }\r
                }\r
\r
                @if (activeTab() === 'templates') {\r
                    @if (isLoadingTemplates() || isCloningPreset()) {\r
                        <div\r
                            class="flex flex-col items-center justify-center rounded-2xl border border-dashed border-stone-200 py-20 dark:border-gray-800"\r
                        >\r
                            <mat-spinner diameter="40"></mat-spinner>\r
                            <p class="mt-4 text-sm text-stone-500 dark:text-stone-400">\r
                                {{\r
                                    isCloningPreset()\r
                                        ? t('smartBatchSystemPresets.cloning')\r
                                        : t('smartBatchLanding.loadingTemplates')\r
                                }}\r
                            </p>\r
                        </div>\r
                    } @else {\r
                        <ng-template #templateThumb let-template="template" let-icon="icon">\r
                            <div class="relative mb-4">\r
                                <report-template-thumb [template]="template" [icon]="icon">\r
                                    <div\r
                                        class="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-stone-950/70 to-transparent pb-3 opacity-0 transition group-hover:opacity-100"\r
                                    >\r
                                        <span\r
                                            class="inline-flex items-center gap-1 rounded-full bg-white/95 px-3 py-1 text-[11px] font-medium text-stone-900"\r
                                        >\r
                                            <mat-icon class="!h-3.5 !w-3.5 !text-[14px]">visibility</mat-icon>\r
                                            {{ t('smartBatchLanding.templatePreviewOpen') }}\r
                                        </span>\r
                                    </div>\r
                                </report-template-thumb>\r
                            </div>\r
                        </ng-template>\r
\r
                        <section\r
                            class="rounded-2xl border border-stone-200/90 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900/70"\r
                        >\r
                            <div class="border-b border-stone-200/80 p-5 dark:border-gray-800 md:p-6">\r
                                <div class="flex items-start gap-3">\r
                                    <div\r
                                        class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-stone-200 bg-stone-50 text-stone-700 dark:border-gray-800 dark:bg-gray-950 dark:text-stone-200"\r
                                    >\r
                                        <mat-icon>verified</mat-icon>\r
                                    </div>\r
                                    <div>\r
                                        <h2 class="text-base font-semibold text-stone-950 dark:text-white">\r
                                            {{ t('smartBatchSystemPresets.sectionTitle') }}\r
                                        </h2>\r
                                        <p class="mt-1 text-sm text-stone-500 dark:text-stone-400">\r
                                            {{ t('smartBatchSystemPresets.sectionDesc') }}\r
                                        </p>\r
                                    </div>\r
                                </div>\r
                            </div>\r
\r
                            <div class="p-5 md:p-6">\r
                                @if (systemTemplates().length === 0) {\r
                                    <p class="text-sm italic text-stone-400">\r
                                        {{ t('smartBatchSystemPresets.noSystemTemplates') }}\r
                                    </p>\r
                                } @else {\r
                                    <div class="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">\r
                                        @for (template of systemTemplates(); track template._id) {\r
                                            <article\r
                                                class="group flex h-full cursor-pointer flex-col rounded-2xl border border-stone-200 bg-stone-50/50 p-5 transition hover:border-stone-300 hover:bg-white dark:border-gray-800 dark:bg-gray-950/40 dark:hover:border-gray-700 dark:hover:bg-gray-900/70"\r
                                                (click)="openTemplatePreview(template)"\r
                                            >\r
                                                <ng-container\r
                                                    [ngTemplateOutlet]="templateThumb"\r
                                                    [ngTemplateOutletContext]="{\r
                                                        template: template,\r
                                                        icon: getCategoryIcon(template.category),\r
                                                    }"\r
                                                ></ng-container>\r
\r
                                                <div class="flex flex-wrap items-center gap-2">\r
                                                    <div\r
                                                        class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-stone-200 bg-white text-lg dark:border-gray-700 dark:bg-gray-900"\r
                                                    >\r
                                                        {{ getCountryFlag(template.country) }}\r
                                                    </div>\r
                                                    <span\r
                                                        class="inline-flex rounded-full border border-stone-200 bg-white px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-stone-700 dark:border-gray-700 dark:bg-gray-900 dark:text-stone-300"\r
                                                    >\r
                                                        {{ getTierLabel(template.tier) }}\r
                                                    </span>\r
                                                    <span\r
                                                        class="inline-flex items-center gap-1 rounded-full border border-stone-200 bg-white px-2.5 py-0.5 text-[11px] font-medium text-stone-600 dark:border-gray-700 dark:bg-gray-900 dark:text-stone-300"\r
                                                    >\r
                                                        <mat-icon class="!h-3.5 !w-3.5 !text-[14px]">{{\r
                                                            getCategoryIcon(template.category)\r
                                                        }}</mat-icon>\r
                                                        {{ getCategoryLabel(template.category) }}\r
                                                    </span>\r
                                                </div>\r
                                                <h3\r
                                                    class="mt-3 line-clamp-2 text-base font-semibold leading-snug text-stone-950 dark:text-white"\r
                                                >\r
                                                    {{ templateTitle(template) }}\r
                                                </h3>\r
\r
                                                <p\r
                                                    class="mt-3 line-clamp-2 flex-1 text-sm leading-relaxed text-stone-500 dark:text-stone-400"\r
                                                >\r
                                                    {{ templateDescription(template) }}\r
                                                </p>\r
\r
                                                <div class="mt-5 grid grid-cols-2 gap-3">\r
                                                    <div\r
                                                        class="rounded-xl border border-stone-200 bg-white p-3 dark:border-gray-800 dark:bg-gray-900/70"\r
                                                    >\r
                                                        <span\r
                                                            class="text-xs font-medium uppercase tracking-[0.14em] text-stone-400"\r
                                                            >{{ t('smartBatchLanding.steps') }}</span\r
                                                        >\r
                                                        <p\r
                                                            class="mt-1 text-lg font-semibold text-stone-950 dark:text-white"\r
                                                        >\r
                                                            {{ getStepCount(template) }}\r
                                                        </p>\r
                                                    </div>\r
                                                    <div\r
                                                        class="rounded-xl border border-stone-200 bg-white p-3 dark:border-gray-800 dark:bg-gray-900/70"\r
                                                    >\r
                                                        <span\r
                                                            class="text-xs font-medium uppercase tracking-[0.14em] text-stone-400"\r
                                                            >{{ t('smartBatchLanding.sections') }}</span\r
                                                        >\r
                                                        <p\r
                                                            class="mt-1 text-lg font-semibold text-stone-950 dark:text-white"\r
                                                        >\r
                                                            {{ template.sections?.length ?? 0 }}\r
                                                        </p>\r
                                                    </div>\r
                                                </div>\r
\r
                                                @if (isSystemPresetAvailable(template)) {\r
                                                    <button\r
                                                        type="button"\r
                                                        class="mt-5 inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-xl bg-stone-950 px-4 text-sm font-medium text-white transition hover:bg-stone-800 dark:bg-white dark:text-gray-950 dark:hover:bg-stone-200"\r
                                                        (click)="useSystemTemplate(template, $event)"\r
                                                    >\r
                                                        {{ t('smartBatchSystemPresets.useTemplate') }}\r
                                                        <mat-icon class="!h-4 !w-4 !text-base">arrow_forward</mat-icon>\r
                                                    </button>\r
                                                } @else {\r
                                                    <button\r
                                                        type="button"\r
                                                        disabled\r
                                                        class="mt-5 inline-flex min-h-10 w-full cursor-not-allowed items-center justify-center gap-2 rounded-xl border border-stone-200 bg-stone-100 px-4 text-sm font-medium text-stone-400 dark:border-gray-800 dark:bg-gray-900 dark:text-stone-500"\r
                                                        [matTooltip]="t('smartBatchLanding.comingSoonHint')"\r
                                                    >\r
                                                        {{ t('smartBatchLanding.comingSoon') }}\r
                                                    </button>\r
                                                }\r
                                            </article>\r
                                        }\r
                                    </div>\r
                                }\r
                            </div>\r
                        </section>\r
\r
                        <section\r
                            class="rounded-2xl border border-stone-200/90 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900/70"\r
                        >\r
                            <div class="border-b border-stone-200/80 p-5 dark:border-gray-800 md:p-6">\r
                                <div class="flex items-start gap-3">\r
                                    <div\r
                                        class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-stone-200 bg-stone-50 text-stone-700 dark:border-gray-800 dark:bg-gray-950 dark:text-stone-200"\r
                                    >\r
                                        <mat-icon>folder_open</mat-icon>\r
                                    </div>\r
                                    <div>\r
                                        <h2 class="text-base font-semibold text-stone-950 dark:text-white">\r
                                            {{ t('smartBatchSystemPresets.myTemplatesTitle') }}\r
                                        </h2>\r
                                        <p class="mt-1 text-sm text-stone-500 dark:text-stone-400">\r
                                            {{ t('smartBatchLanding.noTemplatesDesc') }}\r
                                        </p>\r
                                    </div>\r
                                </div>\r
                            </div>\r
\r
                            <div class="p-5 md:p-6">\r
                                @if (clientTemplates().length === 0) {\r
                                    <div\r
                                        class="flex flex-col items-center justify-center rounded-xl border border-dashed border-stone-200 px-5 py-14 text-center dark:border-gray-800"\r
                                    >\r
                                        <div\r
                                            class="flex h-12 w-12 items-center justify-center rounded-xl bg-stone-100 text-stone-500 dark:bg-gray-800 dark:text-stone-300"\r
                                        >\r
                                            <mat-icon>description</mat-icon>\r
                                        </div>\r
                                        <p class="mt-4 max-w-sm text-sm text-stone-500 dark:text-stone-400">\r
                                            {{ t('smartBatchLanding.createBlankTemplateHint') }}\r
                                        </p>\r
                                        <button\r
                                            type="button"\r
                                            class="mt-5 inline-flex min-h-10 items-center justify-center gap-2 rounded-xl bg-stone-950 px-4 text-sm font-medium text-white transition hover:bg-stone-800 dark:bg-white dark:text-gray-950 dark:hover:bg-stone-200"\r
                                            (click)="createBlankTemplate()"\r
                                        >\r
                                            <mat-icon class="!h-4 !w-4 !text-base">add</mat-icon>\r
                                            {{ t('smartBatchLanding.createBlankTemplate') }}\r
                                        </button>\r
                                        <button\r
                                            type="button"\r
                                            class="mt-2 inline-flex min-h-10 items-center justify-center gap-2 rounded-xl px-4 text-sm font-medium text-stone-700 transition hover:bg-stone-100 disabled:opacity-60 dark:text-stone-200 dark:hover:bg-gray-800"\r
                                            [disabled]="isImportingTemplate()"\r
                                            (click)="templateImportInput.click()"\r
                                        >\r
                                            <mat-icon class="!h-4 !w-4 !text-base">upload_file</mat-icon>\r
                                            {{ t('smartBatchLanding.importTemplate') }}\r
                                        </button>\r
                                    </div>\r
                                } @else {\r
                                    <div class="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">\r
                                        @for (template of clientTemplates(); track template._id) {\r
                                            <article\r
                                                class="group relative flex h-full cursor-pointer flex-col rounded-2xl border border-stone-200 bg-white p-5 transition hover:border-stone-300 hover:shadow-sm dark:border-gray-800 dark:bg-gray-950/40 dark:hover:border-gray-700"\r
                                                (click)="openTemplatePreview(template)"\r
                                            >\r
                                                <div class="mb-3 flex items-center justify-end gap-1">\r
                                                    <button\r
                                                        type="button"\r
                                                        mat-icon-button\r
                                                        (click)="openTemplateEditor(template, $event)"\r
                                                        [matTooltip]="t('smartBatchLanding.edit')"\r
                                                    >\r
                                                        <mat-icon class="icon-size-5">edit</mat-icon>\r
                                                    </button>\r
                                                    <button\r
                                                        type="button"\r
                                                        mat-icon-button\r
                                                        [disabled]="exportingTemplateId() !== null"\r
                                                        (click)="exportTemplate(template, $event)"\r
                                                        [matTooltip]="t('smartBatchLanding.exportTemplate')"\r
                                                    >\r
                                                        @if (exportingTemplateId() === template._id) {\r
                                                            <mat-progress-spinner mode="indeterminate" diameter="18"></mat-progress-spinner>\r
                                                        } @else {\r
                                                            <mat-icon class="icon-size-5">download</mat-icon>\r
                                                        }\r
                                                    </button>\r
                                                    <button\r
                                                        type="button"\r
                                                        mat-icon-button\r
                                                        color="warn"\r
                                                        (click)="deleteTemplate(template._id ?? '', $event)"\r
                                                        [matTooltip]="t('smartBatchLanding.delete')"\r
                                                    >\r
                                                        <mat-icon class="icon-size-5">delete</mat-icon>\r
                                                    </button>\r
                                                </div>\r
\r
                                                <ng-container\r
                                                    [ngTemplateOutlet]="templateThumb"\r
                                                    [ngTemplateOutletContext]="{\r
                                                        template: template,\r
                                                        icon: 'description',\r
                                                    }"\r
                                                ></ng-container>\r
\r
                                                <h3\r
                                                    class="mt-3 flex items-center gap-2 text-base font-semibold text-stone-950 dark:text-white"\r
                                                >\r
                                                    <span\r
                                                        class="h-3 w-3 shrink-0 rounded-full border border-black/10"\r
                                                        [style.background]="template.identityColor || '#000000'"\r
                                                    ></span>\r
                                                    <span class="line-clamp-1">{{ template.name }}</span>\r
                                                </h3>\r
                                                <p\r
                                                    class="mt-3 line-clamp-2 flex-1 text-sm text-stone-500 dark:text-stone-400"\r
                                                >\r
                                                    {{\r
                                                        template.description ||\r
                                                            t('smartBatchLanding.noDescription')\r
                                                    }}\r
                                                </p>\r
                                                <div\r
                                                    class="mt-5 grid grid-cols-2 gap-3 border-t border-stone-200/80 pt-4 dark:border-gray-800"\r
                                                >\r
                                                    <div class="rounded-xl border border-stone-200 p-3 dark:border-gray-800">\r
                                                        <span\r
                                                            class="text-xs font-medium uppercase tracking-[0.14em] text-stone-400"\r
                                                            >{{ t('smartBatchLanding.sections') }}</span\r
                                                        >\r
                                                        <p\r
                                                            class="mt-1 text-lg font-semibold text-stone-950 dark:text-white"\r
                                                        >\r
                                                            {{ template.sections?.length ?? 0 }}\r
                                                        </p>\r
                                                    </div>\r
                                                    <div class="rounded-xl border border-stone-200 p-3 dark:border-gray-800">\r
                                                        <span\r
                                                            class="text-xs font-medium uppercase tracking-[0.14em] text-stone-400"\r
                                                            >{{ t('smartBatchLanding.linkedTo') }}</span\r
                                                        >\r
                                                        <p\r
                                                            class="mt-1 truncate text-sm font-medium text-stone-950 dark:text-white"\r
                                                        >\r
                                                            @if (template.batchConfiguration) {\r
                                                                {{ getConfigName(template.batchConfiguration) }}\r
                                                            } @else {\r
                                                                {{ t('smartBatchLanding.standalone') }}\r
                                                            }\r
                                                        </p>\r
                                                    </div>\r
                                                </div>\r
\r
                                                <button\r
                                                    type="button"\r
                                                    class="mt-5 inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-xl bg-stone-950 px-4 text-sm font-medium text-white transition hover:bg-stone-800 dark:bg-white dark:text-gray-950 dark:hover:bg-stone-200"\r
                                                    (click)="useClientTemplate(template, $event)"\r
                                                >\r
                                                    {{ t('smartBatchSystemPresets.useTemplate') }}\r
                                                    <mat-icon class="!h-4 !w-4 !text-base">arrow_forward</mat-icon>\r
                                                </button>\r
                                            </article>\r
                                        }\r
                                    </div>\r
                                }\r
                            </div>\r
                        </section>\r
                    }\r
                }\r
            </div>\r
        </main>\r
    </div>\r
\r
    @if (previewTemplate(); as preview) {\r
        <div\r
            class="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/70 p-4"\r
            (click)="closeTemplatePreview()"\r
        >\r
            <div\r
                class="flex max-h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl dark:bg-gray-950"\r
                (click)="$event.stopPropagation()"\r
            >\r
                <div\r
                    class="flex items-start justify-between gap-4 border-b border-stone-200 px-5 py-4 dark:border-gray-800"\r
                >\r
                    <div class="min-w-0">\r
                        <p class="text-xs font-medium uppercase tracking-wide text-stone-400">\r
                            {{ t('smartBatchLanding.templatePreviewHint') }}\r
                        </p>\r
                        <h2 class="mt-1 truncate text-lg font-semibold text-stone-950 dark:text-white">\r
                            {{ templateTitle(preview) }}\r
                        </h2>\r
                    </div>\r
                    <button\r
                        type="button"\r
                        mat-icon-button\r
                        (click)="closeTemplatePreview()"\r
                        [attr.aria-label]="t('smartBatchLanding.templatePreviewClose')"\r
                    >\r
                        <mat-icon>close</mat-icon>\r
                    </button>\r
                </div>\r
                <div class="min-h-[50vh] flex-1 overflow-auto bg-stone-100 p-4 dark:bg-gray-900 sm:p-6">\r
                    @if (previewLoading()) {\r
                        <div class="flex min-h-[50vh] flex-col items-center justify-center gap-3">\r
                            <mat-spinner diameter="36"></mat-spinner>\r
                            <p class="text-sm text-stone-500">{{ t('smartBatchLanding.templatePreviewLoading') }}</p>\r
                        </div>\r
                    } @else {\r
                        <report-preview\r
                            [template]="preview"\r
                            [previewData]="previewData()"\r
                            [fullContent]="true"\r
                            [primaryColor]="preview.primaryColor || '#4F46E5'"\r
                            [pageBackgroundColor]="preview.pageBackgroundColor || '#ffffff'"\r
                            [orientation]="preview.orientation || 'portrait'"\r
                            [pageSize]="preview.pageSize || 'A4'"\r
                            [layerZ]="previewLayerZ(preview)"\r
                            [clickable]="false"\r
                            [logoUrl]="preview.headerLogos?.length ? null : preview.logo || null"\r
                            [logoEnabled]="!preview.headerLogos?.length && !!preview.logo"\r
                            [logoX]="preview.logoSettings?.x ?? 32"\r
                            [logoY]="preview.logoSettings?.y ?? 32"\r
                            [logoWidth]="preview.logoSettings?.width ?? 160"\r
                            [logoHeight]="preview.logoSettings?.height ?? 60"\r
                            [logoRotation]="preview.logoSettings?.rotation ?? 0"\r
                            [logoAutoFitContent]="preview.logoSettings?.autoFitContent ?? false"\r
                            [sheetImages]="preview.sheetImages ?? []"\r
                            [bodyTopPadding]="preview.bodyTopPadding ?? 0"\r
                            [legend]="preview.legend || ''"\r
                            [legendPosition]="preview.legendPosition || 'left'"\r
                            [showPageNumbers]="preview.showPageNumbers || false"\r
                            [pageNumberPosition]="preview.pageNumberPosition || 'bottom-center'"\r
                            [watermarkEnabled]="preview.watermark?.enabled || false"\r
                            [watermarkType]="preview.watermark?.type || 'text'"\r
                            [watermarkLogoUrl]="preview.watermark?.logo || undefined"\r
                            [watermarkText]="preview.watermark?.text || preview.name || 'CONFIDENTIAL'"\r
                            [watermarkOpacity]="preview.watermark?.opacity ?? 0.08"\r
                            [watermarkPattern]="preview.watermark?.pattern || 'single'"\r
                            [watermarkX]="preview.watermark?.x ?? 250"\r
                            [watermarkY]="preview.watermark?.y ?? 420"\r
                            [watermarkWidth]="preview.watermark?.width ?? 280"\r
                            [watermarkHeight]="preview.watermark?.height ?? 160"\r
                            [watermarkRotation]="preview.watermark?.rotation ?? -15"\r
                            [signatureEnabled]="!!(preview.signature?.enabled && preview.signature?.image)"\r
                            [signatureImage]="preview.signature?.image || null"\r
                            [signatureX]="preview.signature?.x ?? 48"\r
                            [signatureY]="preview.signature?.y ?? 720"\r
                            [signatureWidth]="preview.signature?.width ?? 160"\r
                            [signatureHeight]="preview.signature?.height ?? 64"\r
                            [signaturePage]="preview.signature?.page ?? 0"\r
                            [termsAndConditions]="preview.termsAndConditions || ''"\r
                            [termsPosition]="preview.termsPosition || 'left'"\r
                        ></report-preview>\r
                    }\r
                </div>\r
            </div>\r
        </div>\r
    }\r
</ng-container>\r
` }]
  }], null, { onEscapePreview: [{
    type: HostListener,
    args: ["document:keydown.escape"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SmartBatchComponent, { className: "SmartBatchComponent", filePath: "src/app/modules/smart-batch/smart-batch.component.ts", lineNumber: 41 });
})();

// src/app/modules/smart-batch/smart-batch.routes.ts
var smart_batch_routes_default = [
  {
    path: "",
    loadComponent: () => import("./chunk-IX67V4AE.js").then((m) => m.VisitaGuideComponent)
  },
  {
    path: "workspace",
    component: SmartBatchComponent
  },
  {
    path: "create",
    component: CreateBatchConfigComponent
  },
  {
    path: "edit/:id",
    component: CreateBatchConfigComponent
  },
  {
    path: "report-builder/:templateId",
    loadComponent: () => import("./chunk-Q2XIUGFD.js").then((m) => m.ReportBuilderComponent)
  },
  {
    path: "report-builder",
    loadComponent: () => import("./chunk-Q2XIUGFD.js").then((m) => m.ReportBuilderComponent)
  },
  {
    path: ":configId/report-builder/:templateId",
    loadComponent: () => import("./chunk-Q2XIUGFD.js").then((m) => m.ReportBuilderComponent)
  },
  {
    path: ":configId/report-builder",
    loadComponent: () => import("./chunk-Q2XIUGFD.js").then((m) => m.ReportBuilderComponent)
  },
  {
    path: ":configId/quick-validate",
    loadComponent: () => import("./chunk-BZJPMLBR.js").then((m) => m.QuickValidateComponent)
  },
  {
    path: ":configId/batch/new",
    loadComponent: () => import("./chunk-VJCBKLCC.js").then((m) => m.CreateBatchComponent)
  },
  {
    path: ":configId/batch/:batchId/inputs",
    loadComponent: () => import("./chunk-VJCBKLCC.js").then((m) => m.CreateBatchComponent)
  },
  {
    path: ":configId/batch/:batchId/quick-validate",
    loadComponent: () => import("./chunk-BZJPMLBR.js").then((m) => m.QuickValidateComponent)
  },
  {
    path: ":configId/batch/:batchId/report",
    loadComponent: () => import("./chunk-GDXPAM44.js").then((m) => m.ReportViewerComponent)
  },
  {
    path: ":configId/batch/:batchId",
    loadComponent: () => import("./chunk-VXXXVPSZ.js").then((m) => m.BatchProcessingComponent)
  },
  {
    path: ":configId",
    loadComponent: () => import("./chunk-HUDSRQFD.js").then((m) => m.BatchDashboardComponent)
  }
];
export {
  smart_batch_routes_default as default
};
//# sourceMappingURL=chunk-6CIZQF6P.js.map
