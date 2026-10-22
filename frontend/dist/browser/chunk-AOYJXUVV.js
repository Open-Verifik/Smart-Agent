import {
  CreditsService,
  clearPlateReportDraft,
  clearSavedPlateReport,
  readPlateReportDraft,
  readSavedPlateReport,
  writePlateReportDraft,
  writeSavedPlateReport
} from "./chunk-3PM3M5DV.js";
import {
  SmartFleetService,
  savedReportsOf
} from "./chunk-CRZKQ4LX.js";
import {
  defaultSystemKey
} from "./chunk-PPBPWIFJ.js";
import {
  BatchBrowserRunnerService
} from "./chunk-7DHOU4WH.js";
import "./chunk-N3CEHZSA.js";
import "./chunk-YR6ZLJHC.js";
import {
  SmartReportService
} from "./chunk-SPFBQX5T.js";
import "./chunk-T3ZUDNVS.js";
import {
  SmartBatchService
} from "./chunk-YYPGLQSF.js";
import {
  SubscriptionService
} from "./chunk-57KKTAQC.js";
import "./chunk-USONFPXP.js";
import {
  VerifikApiService
} from "./chunk-JDA6WF2Z.js";
import {
  PaymentService
} from "./chunk-BLPRNM4C.js";
import {
  CountryService
} from "./chunk-ENWXGLEW.js";
import {
  AuthService
} from "./chunk-6Y7NS256.js";
import {
  UserService
} from "./chunk-L5NPACLK.js";
import "./chunk-2W6CKTFA.js";
import {
  SessionService
} from "./chunk-BYA46NNG.js";
import "./chunk-EVWXSBKG.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-KIEFKQUB.js";
import {
  MatDialog
} from "./chunk-HVUVGZ2L.js";
import "./chunk-OIBNGD5S.js";
import "./chunk-5HABGTLH.js";
import {
  MatButton,
  MatButtonModule
} from "./chunk-PJFCLQ64.js";
import "./chunk-PDWCMJ4H.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-6Z76B4PC.js";
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
  TranslocoDirective,
  TranslocoModule,
  TranslocoService
} from "./chunk-FWBWCXY5.js";
import {
  ActivatedRoute,
  Router,
  RouterModule
} from "./chunk-QL64NPDU.js";
import {
  environment
} from "./chunk-3V5B4ZWC.js";
import {
  CommonModule,
  Component,
  DestroyRef,
  computed,
  effect,
  firstValueFrom,
  inject,
  setClassMetadata,
  signal,
  take,
  untracked,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate3
} from "./chunk-YWP2Y7QK.js";
import {
  __async,
  __spreadValues
} from "./chunk-F5M2C4EZ.js";

// src/app/modules/plate-report/plate-report.validation.ts
var normalizePlate = (value) => value.toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 7);
var isValidPlate = (value) => /^[A-Z0-9]{5,7}$/.test(value) && /[A-Z]/.test(value) && /\d/.test(value);
var normalizePersonName = (value) => value.trim().replace(/\s+/g, " ").slice(0, 80);
var isValidPersonName = (value) => value.trim().length >= 2 && new RegExp("\\p{L}", "u").test(value);
var isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
var isValidPhoneDigits = (value) => {
  const digits = value.replace(/\D/g, "");
  return digits.length >= 7 && digits.length <= 15;
};
var nationalPhone = (phone, dialCode) => {
  let digits = phone.replace(/\D/g, "");
  const prefix = dialCode.replace(/\D/g, "");
  if (prefix && digits.startsWith(prefix) && digits.length > prefix.length + 6) {
    digits = digits.slice(prefix.length);
  }
  return digits;
};

// src/app/modules/plate-report/plate-report.component.ts
var _c0 = (a0) => ({ total: a0 });
var _c1 = (a0) => ({ email: a0 });
var _forTrack0 = ($index, $item) => $item.countryCode;
var _forTrack1 = ($index, $item) => $item.code;
function PlateReportComponent_ng_container_0_Conditional_9_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 8);
  }
}
function PlateReportComponent_ng_container_0_Conditional_9_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const boldState_r1 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.boldReturnIcon(boldState_r1));
  }
}
function PlateReportComponent_ng_container_0_Conditional_9_Conditional_7_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 17);
  }
}
function PlateReportComponent_ng_container_0_Conditional_9_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 16);
    \u0275\u0275listener("click", function PlateReportComponent_ng_container_0_Conditional_9_Conditional_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.continueAfterPayment());
    });
    \u0275\u0275template(1, PlateReportComponent_ng_container_0_Conditional_9_Conditional_7_Conditional_1_Template, 1, 0, "mat-spinner", 17);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r1.busy());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.busy() ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r4("plateReport.bold.return.continue"), " ");
  }
}
function PlateReportComponent_ng_container_0_Conditional_9_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275listener("click", function PlateReportComponent_ng_container_0_Conditional_9_Conditional_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.checkPayment());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r1.busy() || !ctx_r1.orderIdForCheck());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r4("plateReport.bold.return.check"), " ");
  }
}
function PlateReportComponent_ng_container_0_Conditional_9_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 19);
    \u0275\u0275listener("click", function PlateReportComponent_ng_container_0_Conditional_9_Conditional_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.dismissBoldReturnNotice());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r4("plateReport.bold.return.dismiss"), " ");
  }
}
function PlateReportComponent_ng_container_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275template(1, PlateReportComponent_ng_container_0_Conditional_9_Conditional_1_Template, 1, 0, "mat-spinner", 8)(2, PlateReportComponent_ng_container_0_Conditional_9_Conditional_2_Template, 2, 1, "mat-icon", 9);
    \u0275\u0275elementStart(3, "div", 10)(4, "p", 11);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 12);
    \u0275\u0275template(7, PlateReportComponent_ng_container_0_Conditional_9_Conditional_7_Template, 3, 3, "button", 13)(8, PlateReportComponent_ng_container_0_Conditional_9_Conditional_8_Template, 2, 2, "button", 14)(9, PlateReportComponent_ng_container_0_Conditional_9_Conditional_9_Template, 2, 1, "button", 15);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const boldState_r1 = ctx;
    const t_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("plate-report__bold-banner--confirming", boldState_r1 === "confirming")("plate-report__bold-banner--approved", boldState_r1 === "approved")("plate-report__bold-banner--pending", boldState_r1 === "pending")("plate-report__bold-banner--failed", boldState_r1 === "failed")("plate-report__bold-banner--neutral", boldState_r1 === "abandoned" || boldState_r1 === "unknown");
    \u0275\u0275advance();
    \u0275\u0275conditional(boldState_r1 === "confirming" ? 1 : 2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r4("plateReport.bold.return." + boldState_r1));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(boldState_r1 === "approved" || ctx_r1.reportPaid() ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(boldState_r1 === "pending" || boldState_r1 === "unknown" ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(boldState_r1 !== "confirming" ? 9 : -1);
  }
}
function PlateReportComponent_ng_container_0_Conditional_10_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r4("plateReport.signedIn"));
  }
}
function PlateReportComponent_ng_container_0_Conditional_10_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r4("plateReport.paymentApprovedNeedPlate"));
  }
}
function PlateReportComponent_ng_container_0_Conditional_10_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r4("plateReport.pendingNotice"));
  }
}
function PlateReportComponent_ng_container_0_Conditional_10_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const country_r8 = ctx.$implicit;
    \u0275\u0275property("value", country_r8.countryCode);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" ", country_r8.flag, " ", country_r8.name, " (", country_r8.dialCode, ") ");
  }
}
function PlateReportComponent_ng_container_0_Conditional_10_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r4(ctx));
  }
}
function PlateReportComponent_ng_container_0_Conditional_10_Conditional_25_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.errorDetail());
  }
}
function PlateReportComponent_ng_container_0_Conditional_10_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 29);
    \u0275\u0275text(1);
    \u0275\u0275template(2, PlateReportComponent_ng_container_0_Conditional_10_Conditional_25_Conditional_2_Template, 2, 1, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r4(ctx), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.errorDetail() ? 2 : -1);
  }
}
function PlateReportComponent_ng_container_0_Conditional_10_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 31);
  }
}
function PlateReportComponent_ng_container_0_Conditional_10_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 33);
    \u0275\u0275listener("click", function PlateReportComponent_ng_container_0_Conditional_10_Conditional_29_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.signIn());
    });
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.needsSignIn() ? t_r4("plateReport.signInHint") : t_r4("plateReport.haveAccount"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.busy());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r4("plateReport.signIn"), " ");
  }
}
function PlateReportComponent_ng_container_0_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275template(0, PlateReportComponent_ng_container_0_Conditional_10_Conditional_0_Template, 2, 1, "p", 20)(1, PlateReportComponent_ng_container_0_Conditional_10_Conditional_1_Template, 2, 1, "p", 21)(2, PlateReportComponent_ng_container_0_Conditional_10_Conditional_2_Template, 2, 1, "p", 21);
    \u0275\u0275elementStart(3, "form", 22);
    \u0275\u0275listener("ngSubmit", function PlateReportComponent_ng_container_0_Conditional_10_Template_form_ngSubmit_3_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.submitForm());
    });
    \u0275\u0275elementStart(4, "label", 23)(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 24);
    \u0275\u0275listener("ngModelChange", function PlateReportComponent_ng_container_0_Conditional_10_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.plate.set($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "label", 23)(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "select", 25);
    \u0275\u0275listener("ngModelChange", function PlateReportComponent_ng_container_0_Conditional_10_Template_select_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.countryCode.set($event));
    });
    \u0275\u0275repeaterCreate(12, PlateReportComponent_ng_container_0_Conditional_10_For_13_Template, 2, 4, "option", 26, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "label", 23)(15, "span");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 27);
    \u0275\u0275listener("ngModelChange", function PlateReportComponent_ng_container_0_Conditional_10_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.phone.set($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "label", 23)(19, "span");
    \u0275\u0275text(20);
    \u0275\u0275elementStart(21, "small");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "input", 28);
    \u0275\u0275listener("ngModelChange", function PlateReportComponent_ng_container_0_Conditional_10_Template_input_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.personName.set($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(24, PlateReportComponent_ng_container_0_Conditional_10_Conditional_24_Template, 2, 1, "p", 29)(25, PlateReportComponent_ng_container_0_Conditional_10_Conditional_25_Template, 3, 2, "p", 29);
    \u0275\u0275elementStart(26, "button", 30);
    \u0275\u0275template(27, PlateReportComponent_ng_container_0_Conditional_10_Conditional_27_Template, 1, 0, "mat-spinner", 31);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275template(29, PlateReportComponent_ng_container_0_Conditional_10_Conditional_29_Template, 4, 3, "p", 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_22_0;
    let tmp_23_0;
    const t_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.signedIn() ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.reportPaid() && !ctx_r1.plate().trim() ? 1 : ctx_r1.pendingNotice() && !ctx_r1.boldReturnState() ? 2 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(t_r4("plateReport.plate"));
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.plate())("placeholder", t_r4("plateReport.platePlaceholder"))("disabled", ctx_r1.busy());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r4("plateReport.country"));
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.countryCode())("disabled", ctx_r1.busy());
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.countries);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r4("plateReport.phone"));
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.phone())("placeholder", t_r4("plateReport.phonePlaceholder"))("disabled", ctx_r1.busy());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", t_r4("plateReport.name"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("(", t_r4("plateReport.optional"), ")");
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.personName())("placeholder", t_r4("plateReport.namePlaceholder"))("disabled", ctx_r1.busy());
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_22_0 = ctx_r1.fieldError()) ? 24 : -1, tmp_22_0);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_23_0 = ctx_r1.errorKey()) ? 25 : -1, tmp_23_0);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.busy());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.busy() ? 27 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.reportPaid() ? t_r4("plateReport.continueToReady") : ctx_r1.pendingNotice() ? t_r4("plateReport.continuePending") : t_r4("plateReport.continue"), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.signedIn() ? 29 : -1);
  }
}
function PlateReportComponent_ng_container_0_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "mat-spinner", 34);
    \u0275\u0275elementStart(2, "h2");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r4("plateReport.workingTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4(ctx_r1.statusKey()));
  }
}
function PlateReportComponent_ng_container_0_Conditional_12_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 41);
    \u0275\u0275listener("click", function PlateReportComponent_ng_container_0_Conditional_12_For_6_Template_button_click_0_listener() {
      const option_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.selectCurrency(option_r11));
    });
    \u0275\u0275elementStart(1, "span", 42);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 43)(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "small");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const option_r11 = ctx.$implicit;
    const t_r4 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("is-active", ctx_r1.currency() === option_r11.code);
    \u0275\u0275property("disabled", option_r11.disabled || ctx_r1.busy());
    \u0275\u0275attribute("aria-checked", ctx_r1.currency() === option_r11.code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(option_r11.code);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r4(option_r11.labelKey));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4(option_r11.methodsKey));
  }
}
function PlateReportComponent_ng_container_0_Conditional_12_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r4("plateReport.quoteTotal", \u0275\u0275pureFunction1(1, _c0, ctx_r1.totalLabel())), " ");
  }
}
function PlateReportComponent_ng_container_0_Conditional_12_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r4("addCredits.purchaseDialog.bold.quoteLoading"));
  }
}
function PlateReportComponent_ng_container_0_Conditional_12_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r4("plateReport.fxUnavailable"));
  }
}
function PlateReportComponent_ng_container_0_Conditional_12_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r4("addCredits.purchaseDialog.bold.firstPurchasePseNote"));
  }
}
function PlateReportComponent_ng_container_0_Conditional_12_Conditional_11_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const key_r12 = \u0275\u0275nextContext();
    const t_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r4(key_r12));
  }
}
function PlateReportComponent_ng_container_0_Conditional_12_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, PlateReportComponent_ng_container_0_Conditional_12_Conditional_11_Conditional_0_Template, 2, 1, "p", 29);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(!ctx_r1.boldReturnState() ? 0 : -1);
  }
}
function PlateReportComponent_ng_container_0_Conditional_12_Conditional_12_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 31);
  }
}
function PlateReportComponent_ng_container_0_Conditional_12_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 44);
    \u0275\u0275listener("click", function PlateReportComponent_ng_container_0_Conditional_12_Conditional_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.pay());
    });
    \u0275\u0275template(1, PlateReportComponent_ng_container_0_Conditional_12_Conditional_12_Conditional_1_Template, 1, 0, "mat-spinner", 31);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", !ctx_r1.canPay());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.busy() ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.totalLabel() ? t_r4("plateReport.payAmount", \u0275\u0275pureFunction1(3, _c0, ctx_r1.totalLabel())) : t_r4("plateReport.pay"), " ");
  }
}
function PlateReportComponent_ng_container_0_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p", 4);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 35);
    \u0275\u0275repeaterCreate(5, PlateReportComponent_ng_container_0_Conditional_12_For_6_Template, 8, 7, "button", 36, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, PlateReportComponent_ng_container_0_Conditional_12_Conditional_7_Template, 2, 3, "p", 37)(8, PlateReportComponent_ng_container_0_Conditional_12_Conditional_8_Template, 2, 1, "p", 37)(9, PlateReportComponent_ng_container_0_Conditional_12_Conditional_9_Template, 2, 1, "p", 29)(10, PlateReportComponent_ng_container_0_Conditional_12_Conditional_10_Template, 2, 1, "p", 20)(11, PlateReportComponent_ng_container_0_Conditional_12_Conditional_11_Template, 1, 1)(12, PlateReportComponent_ng_container_0_Conditional_12_Conditional_12_Template, 3, 5, "button", 38);
    \u0275\u0275elementStart(13, "p", 39);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p", 40);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_10_0;
    const t_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r4("plateReport.paymentTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4("plateReport.paymentBody"));
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", t_r4("plateReport.currencyLabel"));
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.currencyOptions);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.totalLabel() ? 7 : ctx_r1.quoteLoading() ? 8 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.fxUnavailable() ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.pseOnly() ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_10_0 = ctx_r1.errorKey()) ? 11 : -1, tmp_10_0);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.canShowPayButton() ? 12 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4("plateReport.paymentHint"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4("plateReport.bold.embeddedHint"));
  }
}
function PlateReportComponent_ng_container_0_Conditional_13_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r4("plateReport.reused"));
  }
}
function PlateReportComponent_ng_container_0_Conditional_13_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r4("plateReport.savedNotice"));
  }
}
function PlateReportComponent_ng_container_0_Conditional_13_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r4("plateReport.partial"));
  }
}
function PlateReportComponent_ng_container_0_Conditional_13_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r4("plateReport.emailSent", \u0275\u0275pureFunction1(1, _c1, ctx_r1.deliveryEmail())));
  }
}
function PlateReportComponent_ng_container_0_Conditional_13_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r4(ctx));
  }
}
function PlateReportComponent_ng_container_0_Conditional_13_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 31);
  }
}
function PlateReportComponent_ng_container_0_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "h2");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p", 4);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, PlateReportComponent_ng_container_0_Conditional_13_Conditional_4_Template, 2, 1, "p", 20)(5, PlateReportComponent_ng_container_0_Conditional_13_Conditional_5_Template, 2, 1, "p", 20)(6, PlateReportComponent_ng_container_0_Conditional_13_Conditional_6_Template, 2, 1, "p", 20)(7, PlateReportComponent_ng_container_0_Conditional_13_Conditional_7_Template, 2, 3, "p", 20)(8, PlateReportComponent_ng_container_0_Conditional_13_Conditional_8_Template, 2, 1, "p", 29);
    \u0275\u0275elementStart(9, "button", 45);
    \u0275\u0275listener("click", function PlateReportComponent_ng_container_0_Conditional_13_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.download());
    });
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 46)(12, "label", 23)(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 47);
    \u0275\u0275listener("ngModelChange", function PlateReportComponent_ng_container_0_Conditional_13_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.contact.set($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "button", 48);
    \u0275\u0275listener("click", function PlateReportComponent_ng_container_0_Conditional_13_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.sendEmail());
    });
    \u0275\u0275template(17, PlateReportComponent_ng_container_0_Conditional_13_Conditional_17_Template, 1, 0, "mat-spinner", 31);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "button", 49);
    \u0275\u0275listener("click", function PlateReportComponent_ng_container_0_Conditional_13_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.reset());
    });
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_8_0;
    const t_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r4("plateReport.readyTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4("plateReport.readyBody"));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.reusedReport() ? 4 : ctx_r1.savedOnAccount() ? 5 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.partial() ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.emailSent() ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_8_0 = ctx_r1.errorKey()) ? 8 : -1, tmp_8_0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r4("plateReport.download"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r4("plateReport.sendEmailTo"));
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.contact())("placeholder", t_r4("plateReport.emailPlaceholder"))("disabled", ctx_r1.busy());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.busy() || !ctx_r1.deliveryEmail());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.busy() ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r4("plateReport.sendEmail"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4("plateReport.newReport"));
  }
}
function PlateReportComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "section", 1)(2, "div", 2)(3, "p", 3);
    \u0275\u0275text(4, "Verifik");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h1");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 4);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, PlateReportComponent_ng_container_0_Conditional_9_Template, 10, 15, "div", 5)(10, PlateReportComponent_ng_container_0_Conditional_10_Template, 30, 24)(11, PlateReportComponent_ng_container_0_Conditional_11_Template, 6, 2, "div", 6)(12, PlateReportComponent_ng_container_0_Conditional_12_Template, 17, 10)(13, PlateReportComponent_ng_container_0_Conditional_13_Template, 21, 15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const t_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(t_r4("plateReport.title"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4("plateReport.subtitle"));
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_4_0 = ctx_r1.showBoldBanner() && ctx_r1.boldReturnState()) ? 9 : -1, tmp_4_0);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.phase() === "form" ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.phase() === "working" ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.phase() === "payment" ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.phase() === "ready" ? 13 : -1);
  }
}
var VEHICLE_PRESET = defaultSystemKey("vehicle", "co");
var POLL_MS = 2500;
var POLL_LIMIT_MS = 4 * 60 * 1e3;
var REPORT_PRODUCT = "plate_report";
var BOLD_CONFIRM_ATTEMPTS = 5;
var BOLD_CONFIRM_ATTEMPTS_APPROVED_HINT = 18;
var BOLD_CONFIRM_RETRY_MS = 3e3;
var POST_PAYMENT_CREDIT_ATTEMPTS = 10;
var POST_PAYMENT_CREDIT_RETRY_MS = 2500;
var BOLD_RETURN_PATH = "/reporte-placa";
var BOLD_EMBEDDED_POLL_MS = 4e3;
var BOLD_EMBEDDED_POLL_MAX = 90;
var CURRENCY_OPTIONS = [
  {
    code: "COP",
    labelKey: "plateReport.currencyCop",
    methodsKey: "addCredits.purchaseDialog.bold.methodsCop",
    disabled: false
  },
  {
    code: "USD",
    labelKey: "plateReport.currencyUsd",
    methodsKey: "plateReport.currencyUsdSoon",
    disabled: true
  }
];
var PlateReportComponent = class _PlateReportComponent {
  constructor() {
    this._auth = inject(AuthService);
    this._verifik = inject(VerifikApiService);
    this._session = inject(SessionService);
    this._users = inject(UserService);
    this._countries = inject(CountryService);
    this._batches = inject(SmartBatchService);
    this._reports = inject(SmartReportService);
    this._fleet = inject(SmartFleetService);
    this._dialog = inject(MatDialog);
    this._runner = inject(BatchBrowserRunnerService);
    this._credits = inject(CreditsService);
    this._payment = inject(PaymentService);
    this._billing = inject(SubscriptionService);
    this._router = inject(Router);
    this._route = inject(ActivatedRoute);
    this._transloco = inject(TranslocoService);
    this._left = false;
    this._configId = "";
    this._batchId = "";
    this._templateId = "";
    this._reportId = "";
    this._pdfBase64 = "";
    this._engine = "puppeteer";
    this._paid = false;
    this.countries = this._countries.countryDialCodes;
    this.signedIn = signal(false);
    this.phase = signal("form");
    this.workingStep = signal("clone");
    this.busy = signal(false);
    this.channel = signal("email");
    this.plate = signal("");
    this.personName = signal("");
    this.phone = signal("");
    this.contact = signal("");
    this.countryCode = signal("co");
    this.fieldError = signal(null);
    this.errorKey = signal(null);
    this.errorDetail = signal("");
    this.estimate = signal(null);
    this.partial = signal(false);
    this.emailSent = signal(false);
    this.pendingNotice = signal(false);
    this.reusedReport = signal(false);
    this.savedOnAccount = signal(false);
    this.needsSignIn = signal(false);
    this.currencyOptions = CURRENCY_OPTIONS;
    this.currency = signal("COP");
    this.quote = signal(null);
    this.quoteLoading = signal(false);
    this.fxUnavailable = signal(false);
    this.policy = signal(null);
    this.pseOnly = computed(() => this.policy()?.restricted === true);
    this.awaitingOrder = signal(false);
    this.reportPaid = signal(false);
    this.boldReturnState = signal(null);
    this.totalLabel = computed(() => {
      const quote = this.quote();
      if (!quote || quote.currency !== "COP")
        return "";
      return `${new Intl.NumberFormat("es-CO").format(quote.total)} COP`;
    });
    this._orderId = "";
    this._boldReturnHandled = false;
    this._boldCheckoutPolls = 0;
    const destroyRef = inject(DestroyRef);
    destroyRef.onDestroy(() => {
      this._left = true;
      this._stopBoldCheckoutWatch();
    });
    effect(() => {
      if (this.phase() === "payment")
        untracked(() => void this._loadPaymentInfo());
    });
  }
  selectCurrency(option) {
    if (option.disabled || this.busy())
      return;
    this.currency.set(option.code);
  }
  _loadPaymentInfo() {
    return __async(this, null, function* () {
      this.fxUnavailable.set(false);
      this.quoteLoading.set(true);
      try {
        const policy = yield firstValueFrom(this._payment.getPurchasePolicy());
        this.policy.set(policy.data ?? null);
      } catch {
        this.policy.set(null);
      }
      try {
        const quote = yield firstValueFrom(this._payment.getBoldProductQuote(REPORT_PRODUCT));
        this.quote.set(quote.data ?? null);
      } catch (error) {
        this.quote.set(null);
        if (this._errorMessage(error).includes("bold_fx_unavailable"))
          this.fxUnavailable.set(true);
      } finally {
        this.quoteLoading.set(false);
      }
    });
  }
  ngOnInit() {
    this.signedIn.set(this._session.isTokenValid());
    const draft = readPlateReportDraft();
    if (draft) {
      this.plate.set(draft.plate);
      if (draft.name)
        this.personName.set(draft.name);
      this.channel.set(draft.channel);
      if (draft.phone) {
        this.phone.set(draft.phone);
        this.contact.set(draft.channel === "email" ? draft.contact : "");
      } else if (draft.channel === "phone") {
        this.phone.set(draft.contact);
      } else {
        this.contact.set(draft.contact);
      }
      if (draft.countryCode)
        this.countryCode.set(draft.countryCode);
      this._configId = draft.configId ?? "";
      this._batchId = draft.batchId ?? "";
      this._templateId = draft.templateId ?? "";
      this._paid = draft.paid ?? false;
      this.reportPaid.set(this._paid);
      this.pendingNotice.set(Boolean(draft.batchId));
      if (draft.boldOrderId)
        this._orderId = draft.boldOrderId;
    }
    const resume = this._route.snapshot.queryParamMap.get("continuar") === "1";
    const handleBoldReturnFromQuery = (params) => {
      const boldReturn = this._readBoldReturnQuery(params);
      if (boldReturn) {
        void this._handleBoldReturn(boldReturn.orderId, boldReturn.txHint);
      }
    };
    handleBoldReturnFromQuery(this._route.snapshot.queryParamMap);
    this._route.queryParamMap.pipe(take(1)).subscribe((params) => handleBoldReturnFromQuery(params));
    if (this._boldReturnHandled) {
    } else if (resume && this.signedIn()) {
      void this.continueAfterPayment();
    } else if (this.signedIn() && (this._paid || draft?.resume === "after-payment")) {
      if (this._paid) {
        void this.continueAfterPayment();
      } else if (this._orderId) {
        this.phase.set("payment");
        this.awaitingOrder.set(true);
        this.boldReturnState.set("pending");
      } else {
        void this._reconcileOpenPaymentAndContinue();
      }
    }
  }
  /**
   * Bold sends the customer back with `bold-order-id`. Credits are granted by Bold's webhook or by the
   * confirm call, whichever comes first, so the order is asked about a few times before giving up.
   */
  dismissBoldReturnNotice() {
    this.boldReturnState.set(null);
    this.errorKey.set(null);
  }
  boldReturnIcon(state) {
    if (state === "confirming")
      return "hourglass_top";
    if (state === "approved")
      return "check_circle";
    if (state === "pending")
      return "schedule";
    if (state === "abandoned")
      return "remove_shopping_cart";
    if (state === "unknown")
      return "help_outline";
    return "error_outline";
  }
  /**
   * Bold appends `bold-order-id` and often `bold-tx-status=approved` on the return URL
   * (see redirectionUrl in checkout config).
   */
  _readBoldReturnQuery(params) {
    if (this._boldReturnHandled)
      return null;
    const orderId = params.get("bold-order-id")?.trim();
    if (!orderId)
      return null;
    this._boldReturnHandled = true;
    const txHint = this._parseBoldTxStatus(params.get("bold-tx-status"));
    this._orderId = orderId;
    this._remember("after-payment");
    void this._router.navigate(["/reporte-placa"], { replaceUrl: true, queryParams: {} });
    return { orderId, txHint };
  }
  _startBoldCheckoutWatch(orderId) {
    this._stopBoldCheckoutWatch();
    this._boldCheckoutPolls = 0;
    this._boldCheckoutWatchTimer = setInterval(() => {
      void this._pollBoldCheckoutOnce(orderId);
    }, BOLD_EMBEDDED_POLL_MS);
  }
  _stopBoldCheckoutWatch() {
    if (this._boldCheckoutWatchTimer) {
      clearInterval(this._boldCheckoutWatchTimer);
      this._boldCheckoutWatchTimer = void 0;
    }
    this._boldCheckoutPolls = 0;
  }
  /** Detects approval while the embedded «Completaste el pago» screen is still open. */
  _pollBoldCheckoutOnce(orderId) {
    return __async(this, null, function* () {
      if (this._left || this.busy())
        return;
      if (this.phase() === "ready") {
        this._stopBoldCheckoutWatch();
        return;
      }
      if (this._boldCheckoutPolls >= BOLD_EMBEDDED_POLL_MAX) {
        this._stopBoldCheckoutWatch();
        return;
      }
      this._boldCheckoutPolls += 1;
      const state = yield this._confirmBoldOrder(orderId, "approved");
      if (state === "approved") {
        yield this._handleBoldReturn(orderId, "approved");
      }
    });
  }
  _parseBoldTxStatus(raw) {
    if (!raw)
      return null;
    const value = raw.trim().toLowerCase();
    if (value === "approved" || value === "success" || value === "paid")
      return "approved";
    if (value === "pending" || value === "processing")
      return "pending";
    if (value === "failed" || value === "rejected" || value === "declined")
      return "failed";
    return null;
  }
  _handleBoldReturn(orderId, txHint = null) {
    return __async(this, null, function* () {
      if (this.busy())
        return;
      this._stopBoldCheckoutWatch();
      this._orderId = orderId;
      this.awaitingOrder.set(false);
      this.errorKey.set(null);
      this.boldReturnState.set("confirming");
      this.workingStep.set("payment");
      this.phase.set("working");
      this.busy.set(true);
      this._remember("after-payment");
      try {
        let state = yield this._confirmBoldOrder(orderId, txHint);
        if (this._left)
          return;
        if (state === "pending" && txHint === "approved") {
          yield this._waitForCreditsAfterPayment();
          state = yield this._confirmBoldOrder(orderId, txHint);
        }
        if (state === "approved" || state === "pending" && txHint === "approved") {
          yield this._finishApprovedPayment(state === "pending");
          return;
        }
        if (state === "pending") {
          this.awaitingOrder.set(true);
          this.boldReturnState.set("pending");
          this._remember();
          void this._pollBoldOrderUntilSettled(orderId, txHint);
        } else {
          this._orderId = "";
          this.boldReturnState.set(state);
        }
        this.phase.set("payment");
      } catch (error) {
        console.error("[PlateReport] could not finish after the payment", error);
        if (txHint === "approved") {
          yield this._finishApprovedPayment(true);
          return;
        }
        this.boldReturnState.set("unknown");
        this._showError("plateReport.genericError", error);
        this.phase.set("payment");
      } finally {
        this.busy.set(false);
      }
    });
  }
  /** Credits granted; generate the PDF or ask for the plate if the draft was lost. */
  _finishApprovedPayment(syncPending = false) {
    return __async(this, null, function* () {
      this._orderId = "";
      this._paid = true;
      this.reportPaid.set(true);
      this.boldReturnState.set(syncPending ? "pending" : "approved");
      this._remember();
      try {
        yield firstValueFrom(this._auth.refreshSession());
      } catch {
      }
      this._credits.refreshBalance();
      if (!normalizePlate(this.plate())) {
        this.phase.set("form");
        this.pendingNotice.set(true);
        this.boldReturnState.set("approved");
        return;
      }
      yield this.startReport();
    });
  }
  /** Whether the primary «Pagar» button should show (not while a settled/pending Bold trip is active). */
  canShowPayButton() {
    if (this.reportPaid())
      return false;
    const banner = this.boldReturnState();
    if (!banner)
      return true;
    return banner === "failed" || banner === "abandoned";
  }
  orderIdForCheck() {
    return Boolean(this._orderId);
  }
  /** Hide the banner while the report runs; keep it for payment confirmation and checkout. */
  showBoldBanner() {
    const state = this.boldReturnState();
    if (!state)
      return false;
    if (this.phase() === "working" && this.workingStep() !== "payment")
      return false;
    return true;
  }
  /** Asks again for a payment that was still settling (PSE debits can take a few minutes). */
  checkPayment() {
    return __async(this, null, function* () {
      if (this.busy() || !this._orderId)
        return;
      yield this._handleBoldReturn(this._orderId, null);
    });
  }
  _confirmBoldOrder(orderId, txHint = null) {
    return __async(this, null, function* () {
      const maxAttempts = txHint === "approved" ? BOLD_CONFIRM_ATTEMPTS_APPROVED_HINT : BOLD_CONFIRM_ATTEMPTS;
      for (let attempt = 1; attempt <= maxAttempts; attempt++) {
        let state;
        try {
          const response = yield firstValueFrom(this._payment.confirmBoldPurchase(orderId));
          state = this._boldStateFromConfirm(response.data);
        } catch (error) {
          console.error("[PlateReport] could not confirm the Bold order", error);
          return "unknown";
        }
        if (state !== "pending" || attempt === maxAttempts)
          return state;
        yield this._sleep(BOLD_CONFIRM_RETRY_MS);
        if (this._left)
          return state;
      }
      return "pending";
    });
  }
  /** An order written off for never being paid also reads as `failed`, so that flag is checked first. */
  _boldStateFromConfirm(data) {
    if (data?.abandoned)
      return "abandoned";
    const status = data?.transaction?.status;
    if (status === "approved" || status === "failed" || status === "pending")
      return status;
    return "unknown";
  }
  selectedCountry() {
    return this.countries.find((country) => country.countryCode === this.countryCode()) ?? this.countries[0];
  }
  submitForm() {
    return __async(this, null, function* () {
      if (this.busy())
        return;
      this.fieldError.set(null);
      this.errorKey.set(null);
      this.needsSignIn.set(false);
      const personName = normalizePersonName(this.personName());
      this.personName.set(personName);
      if (personName && !isValidPersonName(personName)) {
        this.fieldError.set("plateReport.nameInvalid");
        return;
      }
      const plate = normalizePlate(this.plate());
      this.plate.set(plate);
      if (!isValidPlate(plate)) {
        this.fieldError.set("plateReport.plateInvalid");
        return;
      }
      const country = this.selectedCountry();
      const rawPhone = this.phone().trim();
      const phone = nationalPhone(rawPhone, country.dialCode);
      this.phone.set(phone);
      if (!isValidPhoneDigits(phone)) {
        this.fieldError.set("plateReport.phoneInvalid");
        return;
      }
      this.channel.set("phone");
      this._remember();
      if (this._paid) {
        yield this.startReport();
      } else {
        yield this._prepareAndShowPayment();
      }
    });
  }
  _prepareAndShowPayment() {
    return __async(this, null, function* () {
      this.phase.set("working");
      this.busy.set(true);
      this.errorKey.set(null);
      try {
        yield this._ensureBasicAccount();
        if (yield this._reuseSavedReport())
          return;
        this.phase.set("payment");
      } catch (error) {
        if (this._handleAccountError(error))
          return;
        this._showError("plateReport.genericError", error);
        this.phase.set("form");
      } finally {
        this.busy.set(false);
      }
    });
  }
  /**
   * Turns the account errors the API returns into something the client can act on.
   * Returns true when the error was an account error and the form is shown again.
   */
  _handleAccountError(error) {
    const message = this._errorMessage(error).toLowerCase();
    const show = (key, signIn = false) => {
      this.errorKey.set(key);
      this.errorDetail.set("");
      this.needsSignIn.set(signIn);
      this.phase.set("form");
      return true;
    };
    if (message.includes("is_registered_already"))
      return show("plateReport.accountExists", true);
    if (message.includes("onboarding_flow_not_published") || message.includes("project_not_found") || message.includes("projectflow_not_found") || message.includes("clientsmartenrollplan_not_found")) {
      return show("plateReport.accountUnavailable");
    }
    if (message === "account" || message === "project_not_allowed")
      return show("plateReport.accountFailed");
    if (message === "signupform_validation_not_passed")
      return show("plateReport.verificationRequired");
    return false;
  }
  /** For people who already have a Verifik account: sign in, then continue with the same data. */
  signIn() {
    return __async(this, null, function* () {
      if (this.busy())
        return;
      const { AuthModalComponent } = yield import("./chunk-DQCX6ETA.js");
      this._dialog.open(AuthModalComponent, { panelClass: "auth-modal-dialog", width: "400px", maxWidth: "100vw" }).afterClosed().subscribe(() => {
        this.signedIn.set(this._session.isTokenValid());
        if (!this.signedIn())
          return;
        this.needsSignIn.set(false);
        this.errorKey.set(null);
        void this.submitForm();
      });
    });
  }
  statusKey() {
    const step = this.workingStep();
    if (step === "account")
      return "plateReport.workingAccount";
    if (step === "payment")
      return "plateReport.workingPayment";
    if (step === "run")
      return "plateReport.workingRun";
    if (step === "pdf")
      return "plateReport.workingPdf";
    return "plateReport.workingClone";
  }
  /** Pesos are the only enabled currency, so the order is always made in COP. */
  canPay() {
    return !this.busy() && this.currency() === "COP" && !this.fxUnavailable();
  }
  /**
   * Opens the Bold order for the report, charged in pesos at the API's fixed price. A first purchase from a
   * Colombian account comes back as a hosted PSE link to navigate to; any other order opens Bold's modal.
   * Either way Bold returns to this page with `bold-order-id`, handled in {@link _handleBoldReturn}.
   */
  pay() {
    return __async(this, null, function* () {
      if (!this.canPay())
        return;
      this.busy.set(true);
      this.errorKey.set(null);
      this.errorDetail.set("");
      this._remember("after-payment");
      try {
        const response = yield firstValueFrom(this._payment.createBoldCheckout({
          product: REPORT_PRODUCT,
          currency: "COP",
          origin: "smart_agent",
          returnPath: BOLD_RETURN_PATH
        }));
        let config = this._payment.alignBoldReturnUrl(response.data, BOLD_RETURN_PATH);
        this._orderId = config.orderId;
        this._remember("after-payment");
        if (config.mode === "redirect") {
          config = this._payment.alignBoldReturnUrl(config, BOLD_RETURN_PATH);
          this._payment.redirectToBoldCheckout(config);
          return;
        }
        yield this._payment.loadBoldCheckoutScript();
        this._payment.openBoldCheckout(config);
        this._startBoldCheckoutWatch(config.orderId);
      } catch (error) {
        console.error("[PlateReport] could not open the Bold checkout", error);
        this.errorKey.set(this._paymentErrorKey(error));
        this.errorDetail.set("");
      } finally {
        this.busy.set(false);
      }
    });
  }
  /** Maps the API's purchase errors to text that makes sense for a single-report payment. */
  _paymentErrorKey(error) {
    const message = this._errorMessage(error);
    if (message.includes("bold_fx_unavailable")) {
      this.fxUnavailable.set(true);
      return "plateReport.fxUnavailable";
    }
    if (message.includes("first_purchase_requires_pse"))
      return "addCredits.purchaseDialog.errors.firstPurchaseRequiresPse";
    if (message.includes("duplicate_credit_purchase"))
      return "plateReport.paymentDuplicate";
    if (message.includes("must be at least") || message.includes("credit_purchase_invalid_amount")) {
      return "plateReport.paymentAmount";
    }
    if (message.includes("bold_not_configured") || message.includes("bold_voucher_lookup_failed") || message.includes("bold_payment_link") || message.includes("bold_checkout")) {
      return "plateReport.paymentUnavailable";
    }
    return "plateReport.paymentFailedToOpen";
  }
  continueFromDraft() {
    return __async(this, null, function* () {
      yield this.continueAfterPayment();
    });
  }
  /**
   * After a successful payment (or when returning from credits with a saved draft), run the batch
   * and land on the download / email screen.
   */
  continueAfterPayment() {
    return __async(this, null, function* () {
      if (this.busy())
        return;
      if (!this._session.isTokenValid()) {
        this.phase.set("form");
        return;
      }
      if (this._paid) {
        yield this.startReport();
        return;
      }
      if (this._orderId) {
        yield this._handleBoldReturn(this._orderId);
        return;
      }
      const settled = yield this._reconcileOpenPaymentAndContinue();
      if (!settled && this._batchId) {
        yield this.startReport();
      }
    });
  }
  _reconcileOpenPaymentAndContinue() {
    return __async(this, null, function* () {
      try {
        const response = yield firstValueFrom(this._payment.reconcileBoldOrders());
        const orders = response.data?.orders ?? [];
        const approved = orders.find((order) => order.state === "approved");
        if (!approved?.orderId)
          return false;
        yield this._handleBoldReturn(approved.orderId, "approved");
        return true;
      } catch (error) {
        console.error("[PlateReport] could not reconcile Bold orders", error);
        return false;
      }
    });
  }
  _pollBoldOrderUntilSettled(orderId, txHint = null) {
    return __async(this, null, function* () {
      const maxAttempts = txHint === "approved" ? BOLD_CONFIRM_ATTEMPTS_APPROVED_HINT : BOLD_CONFIRM_ATTEMPTS;
      for (let attempt = 2; attempt <= maxAttempts; attempt++) {
        yield this._sleep(BOLD_CONFIRM_RETRY_MS);
        if (this._left || this.phase() === "ready" || !this.awaitingOrder())
          return;
        const state = yield this._confirmBoldOrder(orderId, txHint);
        if (state === "approved") {
          this.awaitingOrder.set(false);
          yield this._finishApprovedPayment(false);
          return;
        }
        if (state !== "pending") {
          this.boldReturnState.set(state);
          return;
        }
      }
      if (txHint === "approved" || this._paid) {
        yield this._finishApprovedPayment(true);
      }
    });
  }
  download() {
    return __async(this, null, function* () {
      if (!this._pdfBase64)
        return;
      const blob = this._pdfBlob(this._pdfBase64);
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `reporte-${this.plate() || "vehiculo"}.pdf`;
      link.click();
      URL.revokeObjectURL(url);
    });
  }
  sendEmail() {
    return __async(this, null, function* () {
      if (this.busy() || !this._reportId)
        return;
      const email = this.deliveryEmail();
      if (!email) {
        this.fieldError.set("plateReport.emailInvalid");
        return;
      }
      this.fieldError.set(null);
      this.busy.set(true);
      this.emailSent.set(false);
      try {
        const language = this._transloco.getActiveLang().startsWith("es") ? "es" : "en";
        const response = yield firstValueFrom(this._reports.sendReportEmail(this._reportId, __spreadValues({
          recipients: [email],
          language,
          rowIndex: 0,
          subject: `Reporte vehicular ${this.plate()}`
        }, this._pdfBase64 ? { pdfBase64: this._pdfBase64 } : {})));
        this.emailSent.set(Boolean(response.success));
        if (!response.success)
          this.errorKey.set("plateReport.emailFailed");
      } catch (error) {
        this._showError("plateReport.emailFailed", error);
      } finally {
        this.busy.set(false);
      }
    });
  }
  reset() {
    clearPlateReportDraft();
    this.plate.set("");
    this.personName.set("");
    this.phone.set("");
    this.contact.set("");
    this._configId = "";
    this._batchId = "";
    this._templateId = "";
    this._reportId = "";
    this._pdfBase64 = "";
    this.estimate.set(null);
    this.partial.set(false);
    this.emailSent.set(false);
    this.pendingNotice.set(false);
    this.reusedReport.set(false);
    this.savedOnAccount.set(false);
    this.needsSignIn.set(false);
    this.reportPaid.set(false);
    this.awaitingOrder.set(false);
    this.boldReturnState.set(null);
    this._paid = false;
    this._orderId = "";
    this.errorKey.set(null);
    this.fieldError.set(null);
    this.phase.set("form");
  }
  deliveryEmail() {
    const email = this.contact().trim();
    return isValidEmail(email) ? email : "";
  }
  startReport() {
    return __async(this, null, function* () {
      if (this._left)
        return;
      if (this.boldReturnState() === "approved") {
        this.boldReturnState.set("confirming");
      }
      this.phase.set("working");
      this.busy.set(true);
      this.errorKey.set(null);
      this.errorDetail.set("");
      this.pendingNotice.set(false);
      try {
        yield this._ensureBasicAccount();
        if (!this._configId || !this._templateId) {
          this.workingStep.set("clone");
          const cloned = yield firstValueFrom(this._batches.cloneSystemPreset(VEHICLE_PRESET));
          this._configId = cloned.data.batchConfiguration._id ?? cloned.data.batchConfiguration.id ?? "";
          this._templateId = environment.plateReportTemplateId || cloned.data.template?._id || "";
          this._engine = cloned.data.template?.pdfEngine === "pdfkit" ? "pdfkit" : "puppeteer";
          if (!this._configId)
            throw new Error("missing config");
        }
        if (!this._batchId) {
          const created = yield firstValueFrom(this._batches.createSmartBatch({
            batchConfiguration: this._configId,
            name: `Reporte ${this.plate()}`,
            rows: [{ plate: this.plate() }]
          }));
          this._batchId = created.data._id ?? "";
          if (!this._batchId)
            throw new Error("missing batch");
        }
        this._remember();
        const existing = yield firstValueFrom(this._batches.getSmartBatch(this._batchId));
        if (this._isTerminal(existing.data.status) && this._hasUsableRow(existing.data)) {
          yield this._publish(existing.data);
          return;
        }
        this.workingStep.set("run");
        let quote = yield firstValueFrom(this._batches.getBatchEstimate(this._batchId));
        this.estimate.set(quote.data);
        if (!quote.data.sufficientCredits && existing.data.status !== "processing") {
          if (this._paid) {
            const creditsReady = yield this._waitForCreditsAfterPayment();
            if (creditsReady) {
              quote = yield firstValueFrom(this._batches.getBatchEstimate(this._batchId));
              this.estimate.set(quote.data);
            }
          }
          if (!quote.data.sufficientCredits) {
            this._remember("after-payment");
            this.reportPaid.set(this._paid);
            if (this._paid) {
              this.boldReturnState.set("approved");
            }
            this.phase.set("payment");
            return;
          }
        }
        if (!this._isTerminal(existing.data.status)) {
          if (existing.data.status !== "processing") {
            yield firstValueFrom(this._batches.startSmartBatch(this._batchId));
          }
          const finished = yield this._waitUntilDone();
          if (!this._hasUsableRow(finished)) {
            this.errorKey.set("plateReport.failed");
            this.phase.set("form");
            return;
          }
          yield this._publish(finished);
          return;
        }
        this.errorKey.set("plateReport.failed");
        this.phase.set("form");
      } catch (error) {
        if (this._handleAccountError(error))
          return;
        const code = this._errorCode(error);
        if (code === "insufficient_credits" || /credit/i.test(this._errorMessage(error))) {
          this._remember("after-payment");
          this.reportPaid.set(this._paid);
          if (this._paid) {
            this.boldReturnState.set("approved");
          }
          this.phase.set("payment");
          return;
        }
        this._showError("plateReport.genericError", error);
        this.phase.set("form");
      } finally {
        this.busy.set(false);
      }
    });
  }
  _waitUntilDone() {
    return __async(this, null, function* () {
      const started = Date.now();
      let last = null;
      const config = yield this._configuration();
      const runInBrowser = config?.executor === "browser";
      while (!this._left && Date.now() - started < POLL_LIMIT_MS) {
        const progress = yield firstValueFrom(this._batches.getBatchProgress(this._batchId));
        if (runInBrowser && progress.data.status === "processing" && !this._runner.running()) {
          const current = yield firstValueFrom(this._batches.getSmartBatch(this._batchId));
          yield this._runner.runBatch(current.data, config?.steps ?? [], () => void 0);
        }
        const loaded = yield firstValueFrom(this._batches.getSmartBatch(this._batchId));
        last = loaded.data;
        if (this._isTerminal(last.status))
          return last;
        yield this._sleep(POLL_MS);
      }
      if (last && this._isTerminal(last.status))
        return last;
      throw new Error("timeout");
    });
  }
  _publish(batch) {
    return __async(this, null, function* () {
      this.workingStep.set("pdf");
      this.partial.set((batch.partialRows ?? 0) > 0 || batch.rows?.some((row) => row.status === "partial") === true);
      const templateId = yield this._resolveTemplateId();
      const report = yield firstValueFrom(this._reports.createReport({
        template: templateId,
        smartBatch: this._batchId,
        name: `Reporte ${this.plate()}`
      }));
      this._reportId = report._id ?? "";
      const generated = yield firstValueFrom(this._reports.generateReport(this._reportId, {
        engine: this._engine,
        rowIndex: 0
      }));
      this._pdfBase64 = generated.pdf?.buffer ?? "";
      if (!this._pdfBase64 && this._reportId) {
        const blob = yield firstValueFrom(this._reports.downloadReport(this._reportId, 0));
        this._pdfBase64 = yield this._blobToBase64(blob);
      }
      if (!this._pdfBase64)
        throw new Error("pdf");
      yield this._saveGeneratedReport(this._reportId);
      this.reusedReport.set(false);
      clearPlateReportDraft();
      this.boldReturnState.set(null);
      this.phase.set("ready");
    });
  }
  /**
   * Stores the report on the account's vehicle (same place Smart Fleet reads from) and keeps a local copy
   * of the reference. A failure here never blocks the PDF the client already paid for.
   */
  _saveGeneratedReport(reportId) {
    return __async(this, null, function* () {
      const plate = this.plate();
      this.savedOnAccount.set(false);
      if (!plate || !reportId)
        return;
      const entry = { reportId, rowIndex: 0, createdAt: (/* @__PURE__ */ new Date()).toISOString() };
      writeSavedPlateReport(__spreadValues({ plate }, entry));
      try {
        const asset = (yield this._findVehicle(plate)) ?? (yield this._createVehicle(plate));
        if (!asset?._id)
          return;
        yield firstValueFrom(this._fleet.saveAssetReport(asset, entry));
        this.savedOnAccount.set(true);
      } catch (error) {
        console.error("[PlateReport] could not save the report on the account", error);
      }
    });
  }
  /** Returns true when a previously generated report for this plate was loaded. */
  _reuseSavedReport() {
    return __async(this, null, function* () {
      const plate = this.plate();
      if (!plate || !this._session.isTokenValid())
        return false;
      this.workingStep.set("pdf");
      let saved = null;
      try {
        const asset = yield this._findVehicle(plate);
        saved = (asset ? savedReportsOf(asset)[0] : null) ?? readSavedPlateReport(plate);
      } catch (error) {
        console.error("[PlateReport] could not look for a saved report", error);
        saved = readSavedPlateReport(plate);
      }
      if (!saved)
        return false;
      try {
        const blob = yield firstValueFrom(this._reports.downloadReport(saved.reportId, saved.rowIndex));
        const base64 = yield this._blobToBase64(blob);
        if (!base64)
          throw new Error("pdf");
        this._reportId = saved.reportId;
        this._pdfBase64 = base64;
        this.reusedReport.set(true);
        this.savedOnAccount.set(true);
        clearPlateReportDraft();
        this.phase.set("ready");
        return true;
      } catch (error) {
        console.error("[PlateReport] saved report could not be loaded", error);
        clearSavedPlateReport(plate);
        return false;
      }
    });
  }
  _findVehicle(plate) {
    return __async(this, null, function* () {
      const response = yield firstValueFrom(this._fleet.findAssets({ search: plate, perPage: 20 }));
      return (response.data ?? []).find((asset) => normalizePlate(asset.plate ?? "") === plate) ?? null;
    });
  }
  _createVehicle(plate) {
    return __async(this, null, function* () {
      const vehicle = { country: "co", type: "vehicle", plate, isActive: false };
      return (yield firstValueFrom(this._fleet.createAsset(vehicle))).data ?? null;
    });
  }
  _resolveTemplateId() {
    return __async(this, null, function* () {
      if (this._templateId)
        return this._templateId;
      if (environment.plateReportTemplateId) {
        this._templateId = environment.plateReportTemplateId;
        return this._templateId;
      }
      const config = yield this._configuration();
      const preferred = config?.preferredReportTemplate;
      const preferredId = typeof preferred === "string" ? preferred : preferred?._id;
      if (preferredId) {
        this._templateId = preferredId;
        return preferredId;
      }
      const templates = yield firstValueFrom(this._reports.getTemplates(this._configId));
      const template = templates[0];
      if (!template?._id)
        throw new Error("missing template");
      this._templateId = template._id;
      this._engine = template.pdfEngine === "pdfkit" ? "pdfkit" : "puppeteer";
      return template._id;
    });
  }
  _configuration() {
    return __async(this, null, function* () {
      if (!this._configId)
        return null;
      const response = yield firstValueFrom(this._batches.getConfiguration(this._configId));
      return response.data;
    });
  }
  /**
   * Uses the current session (a Verifik account or one created here earlier), or creates a basic account
   * in the report project from the phone and name. The basic account has no verification code step.
   *
   * An existing session is never edited: its profile belongs to the account, not to this form.
   */
  _ensureBasicAccount() {
    return __async(this, null, function* () {
      if (this._session.isTokenValid()) {
        this.signedIn.set(true);
        return;
      }
      this.workingStep.set("account");
      const country = this.selectedCountry();
      const rawPhone = this.phone().trim();
      const phone = rawPhone ? nationalPhone(rawPhone, country.dialCode) : "";
      const email = this.contact().trim();
      const registrationPayload = __spreadValues(__spreadValues({
        projectFlow: yield this._onboardingFlowId(),
        // The project flow requires a name; the form keeps it optional, so fall back to the phone.
        fullName: this.personName() || `Cliente ${phone || this.plate()}`
      }, email ? { email } : {}), phone ? { phone, countryCode: country.dialCode } : {});
      const created = yield firstValueFrom(this._verifik.createAppRegistration(environment.plateReportProjectId, registrationPayload));
      const data = created?.data ?? created;
      const registrationToken = data?.token || data?.accessToken;
      const registrationId = data?.appRegistration?._id || data?.appRegistration?.id;
      if (!registrationToken || !registrationId)
        throw new Error("account");
      const synced = yield firstValueFrom(this._verifik.syncAppRegistration(registrationToken, registrationId, {
        step: "skipKYC",
        status: "COMPLETED_WITHOUT_KYC"
      }));
      const completedToken = synced?.data?.token || synced?.token;
      if (!completedToken)
        throw new Error("account");
      const login = yield firstValueFrom(this._auth.simulateProjectLogin(completedToken, "onboarding"));
      const sessionToken = login?.data?.accessToken || login?.accessToken || completedToken;
      this._auth.accessToken = sessionToken;
      try {
        yield firstValueFrom(this._users.get());
      } catch {
      }
      this.signedIn.set(this._session.isTokenValid());
    });
  }
  /** App registration only accepts the onboarding flow, not the login flow. */
  _onboardingFlowId() {
    return __async(this, null, function* () {
      try {
        const project = yield firstValueFrom(this._verifik.getProject(environment.plateReportProjectId));
        const flows = project?.data?.projectFlows ?? project?.projectFlows ?? [];
        const onboarding = flows.find((flow) => flow.type === "onboarding" && flow.status === "active");
        if (onboarding?._id)
          return onboarding._id;
      } catch {
      }
      return environment.plateReportFlowId;
    });
  }
  _waitForCreditsAfterPayment() {
    return __async(this, null, function* () {
      for (let attempt = 1; attempt <= POST_PAYMENT_CREDIT_ATTEMPTS; attempt++) {
        try {
          yield firstValueFrom(this._auth.refreshSession());
        } catch {
        }
        this._credits.refreshBalance();
        if (this._batchId) {
          const quote = yield firstValueFrom(this._batches.getBatchEstimate(this._batchId));
          if (quote.data.sufficientCredits)
            return true;
        }
        if (attempt < POST_PAYMENT_CREDIT_ATTEMPTS)
          yield this._sleep(POST_PAYMENT_CREDIT_RETRY_MS);
        if (this._left)
          return false;
      }
      return false;
    });
  }
  _remember(resume) {
    writePlateReportDraft({
      plate: this.plate(),
      name: this.personName(),
      channel: this.channel(),
      contact: this.contact().trim(),
      phone: this.phone().trim(),
      countryCode: this.countryCode(),
      configId: this._configId || void 0,
      batchId: this._batchId || void 0,
      templateId: this._templateId || void 0,
      paid: this._paid,
      boldOrderId: this._orderId || void 0,
      resume
    });
  }
  _hasUsableRow(batch) {
    return (batch.rows ?? []).some((row) => row.status === "completed" || row.status === "partial" || row.results && Object.keys(row.results).length > 0);
  }
  _isTerminal(status) {
    return status === "completed" || status === "failed" || status === "cancelled";
  }
  _showError(key, error) {
    if (this._errorMessage(error) === "timeout") {
      this.errorKey.set("plateReport.timeout");
      this.errorDetail.set("");
      return;
    }
    this.errorKey.set(key);
    this.errorDetail.set(this._errorMessage(error));
  }
  _errorMessage(error) {
    const body = error?.error;
    return body?.message || error?.message || "";
  }
  _errorCode(error) {
    return error?.error?.code ?? "";
  }
  _pdfBlob(buffer) {
    const binary = atob(buffer);
    const bytes = new Uint8Array(binary.length);
    for (let index = 0; index < binary.length; index++)
      bytes[index] = binary.charCodeAt(index);
    return new Blob([bytes], { type: "application/pdf" });
  }
  _blobToBase64(blob) {
    return __async(this, null, function* () {
      const dataUrl = yield new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(String(reader.result ?? ""));
        reader.onerror = () => reject(reader.error);
        reader.readAsDataURL(blob);
      });
      const comma = dataUrl.indexOf(",");
      return comma >= 0 ? dataUrl.slice(comma + 1) : "";
    });
  }
  _sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  static {
    this.\u0275fac = function PlateReportComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PlateReportComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PlateReportComponent, selectors: [["plate-report"]], decls: 1, vars: 0, consts: [[4, "transloco"], [1, "plate-report"], [1, "plate-report__card"], [1, "plate-report__kicker"], [1, "plate-report__lead"], ["role", "status", 1, "plate-report__bold-banner", 3, "plate-report__bold-banner--confirming", "plate-report__bold-banner--approved", "plate-report__bold-banner--pending", "plate-report__bold-banner--failed", "plate-report__bold-banner--neutral"], ["role", "status", 1, "plate-report__status"], ["role", "status", 1, "plate-report__bold-banner"], ["diameter", "22"], [1, "plate-report__bold-icon"], [1, "plate-report__bold-copy"], [1, "plate-report__bold-text"], [1, "plate-report__bold-actions"], ["mat-flat-button", "", "color", "primary", "type", "button", 1, "plate-report__bold-btn", 3, "disabled"], ["mat-stroked-button", "", "type", "button", 1, "plate-report__bold-btn", 3, "disabled"], ["mat-button", "", "type", "button", 1, "plate-report__bold-btn", "plate-report__bold-btn--quiet"], ["mat-flat-button", "", "color", "primary", "type", "button", 1, "plate-report__bold-btn", 3, "click", "disabled"], ["diameter", "16"], ["mat-stroked-button", "", "type", "button", 1, "plate-report__bold-btn", 3, "click", "disabled"], ["mat-button", "", "type", "button", 1, "plate-report__bold-btn", "plate-report__bold-btn--quiet", 3, "click"], [1, "plate-report__note"], [1, "plate-report__note", "plate-report__note--resume"], [3, "ngSubmit"], [1, "plate-report__field"], ["name", "plate", "autocomplete", "off", "autocapitalize", "characters", "required", "", 3, "ngModelChange", "ngModel", "placeholder", "disabled"], ["name", "country", 3, "ngModelChange", "ngModel", "disabled"], [3, "value"], ["name", "phone", "type", "tel", "inputmode", "tel", "autocomplete", "tel", "required", "", 3, "ngModelChange", "ngModel", "placeholder", "disabled"], ["name", "name", "autocomplete", "name", 3, "ngModelChange", "ngModel", "placeholder", "disabled"], ["role", "alert", 1, "plate-report__error"], ["mat-flat-button", "", "color", "primary", "type", "submit", 1, "plate-report__submit", 3, "disabled"], ["diameter", "18"], [1, "plate-report__note", 2, "margin-top", "0.75rem"], ["mat-button", "", "color", "primary", "type", "button", 3, "click", "disabled"], ["diameter", "36"], ["role", "radiogroup", 1, "plate-report__currency"], ["type", "button", "role", "radio", 1, "plate-report__currency-option", 3, "is-active", "disabled"], [1, "plate-report__quote"], ["mat-flat-button", "", "color", "primary", "type", "button", 1, "plate-report__submit", 3, "disabled"], [1, "plate-report__hint"], [1, "plate-report__hint", "plate-report__hint--bold"], ["type", "button", "role", "radio", 1, "plate-report__currency-option", 3, "click", "disabled"], [1, "plate-report__currency-code"], [1, "plate-report__currency-text"], ["mat-flat-button", "", "color", "primary", "type", "button", 1, "plate-report__submit", 3, "click", "disabled"], ["mat-flat-button", "", "color", "primary", "type", "button", 1, "plate-report__submit", 3, "click"], [1, "plate-report__email-delivery", 2, "margin-top", "1.25rem", "border-top", "1px solid rgba(15, 23, 42, 0.08)", "padding-top", "1.25rem"], ["type", "email", "inputmode", "email", "autocomplete", "email", 3, "ngModelChange", "ngModel", "placeholder", "disabled"], ["mat-stroked-button", "", "type", "button", 1, "plate-report__submit", 3, "click", "disabled"], ["mat-button", "", "type", "button", 2, "margin-top", "0.75rem", 3, "click"]], template: function PlateReportComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, PlateReportComponent_ng_container_0_Template, 14, 7, "ng-container", 0);
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
      RouterModule,
      MatButtonModule,
      MatButton,
      MatIconModule,
      MatIcon,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      TranslocoModule,
      TranslocoDirective
    ], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  min-height: 100%;\n  background:\n    radial-gradient(\n      900px 420px at 0% -10%,\n      rgba(37, 99, 235, 0.12),\n      transparent 55%),\n    linear-gradient(\n      180deg,\n      rgb(248, 250, 252) 0%,\n      rgb(241, 245, 249) 100%);\n}\n.dark[_nghost-%COMP%], .dark   [_nghost-%COMP%] {\n  background:\n    radial-gradient(\n      900px 420px at 0% -10%,\n      rgba(59, 130, 246, 0.18),\n      transparent 55%),\n    linear-gradient(\n      180deg,\n      rgb(15, 23, 42) 0%,\n      rgb(2, 6, 23) 100%);\n}\n.plate-report[_ngcontent-%COMP%] {\n  max-width: 32rem;\n  margin: 0 auto;\n  padding: 1.25rem 1rem 3rem;\n}\n.plate-report__card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid rgba(15, 23, 42, 0.08);\n  border-radius: 1.25rem;\n  padding: 1.5rem 1.25rem 1.75rem;\n  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.06);\n}\n.dark[_nghost-%COMP%]   .plate-report__card[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .plate-report__card[_ngcontent-%COMP%] {\n  background: rgb(15, 23, 42);\n  border-color: rgba(148, 163, 184, 0.2);\n  color: #e2e8f0;\n}\n.plate-report__kicker[_ngcontent-%COMP%] {\n  margin: 0 0 0.35rem;\n  font-size: 0.75rem;\n  font-weight: 700;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n  color: rgb(37, 99, 235);\n}\nh1[_ngcontent-%COMP%], \nh2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.65rem;\n  line-height: 1.2;\n  font-weight: 650;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  margin-bottom: 0.5rem;\n}\n.plate-report__lead[_ngcontent-%COMP%] {\n  margin: 0.6rem 0 1.25rem;\n  color: rgb(71, 85, 105);\n  line-height: 1.5;\n}\n.dark[_nghost-%COMP%]   .plate-report__lead[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .plate-report__lead[_ngcontent-%COMP%] {\n  color: rgb(148, 163, 184);\n}\n.plate-report__note[_ngcontent-%COMP%] {\n  margin: 0 0 1rem;\n  padding: 0.75rem 0.9rem;\n  border-radius: 0.8rem;\n  background: rgb(239, 246, 255);\n  color: rgb(30, 64, 175);\n  line-height: 1.45;\n}\n.plate-report__note--resume[_ngcontent-%COMP%] {\n  background: rgb(238, 242, 255);\n  border: 1px solid rgb(199, 210, 254);\n  color: rgb(49, 46, 129);\n}\n.plate-report__bold-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.75rem;\n  margin: 0 0 1.25rem;\n  padding: 0.85rem 0.95rem;\n  border-radius: 0.9rem;\n  border: 1px solid transparent;\n  line-height: 1.45;\n}\n.plate-report__bold-banner--confirming[_ngcontent-%COMP%], \n.plate-report__bold-banner--neutral[_ngcontent-%COMP%] {\n  border-color: rgb(226, 232, 240);\n  background: rgb(248, 250, 252);\n  color: rgb(51, 65, 85);\n}\n.plate-report__bold-banner--approved[_ngcontent-%COMP%] {\n  border-color: rgb(167, 243, 208);\n  background: rgb(236, 253, 245);\n  color: rgb(6, 78, 59);\n}\n.plate-report__bold-banner--pending[_ngcontent-%COMP%] {\n  border-color: rgb(253, 230, 138);\n  background: rgb(255, 251, 235);\n  color: rgb(146, 64, 14);\n}\n.plate-report__bold-banner--failed[_ngcontent-%COMP%] {\n  border-color: rgb(254, 202, 202);\n  background: rgb(254, 242, 242);\n  color: rgb(153, 27, 27);\n}\n.dark[_nghost-%COMP%]   .plate-report__bold-banner--confirming[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .plate-report__bold-banner--confirming[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .plate-report__bold-banner--neutral[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .plate-report__bold-banner--neutral[_ngcontent-%COMP%] {\n  border-color: rgb(71, 85, 105);\n  background: rgba(30, 41, 59, 0.65);\n  color: rgb(226, 232, 240);\n}\n.dark[_nghost-%COMP%]   .plate-report__bold-banner--approved[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .plate-report__bold-banner--approved[_ngcontent-%COMP%] {\n  border-color: rgb(6, 95, 70);\n  background: rgba(6, 78, 59, 0.35);\n  color: rgb(167, 243, 208);\n}\n.dark[_nghost-%COMP%]   .plate-report__bold-banner--pending[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .plate-report__bold-banner--pending[_ngcontent-%COMP%] {\n  border-color: rgb(180, 83, 9);\n  background: rgba(120, 53, 15, 0.35);\n  color: rgb(253, 230, 138);\n}\n.dark[_nghost-%COMP%]   .plate-report__bold-banner--failed[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .plate-report__bold-banner--failed[_ngcontent-%COMP%] {\n  border-color: rgb(185, 28, 28);\n  background: rgba(127, 29, 29, 0.35);\n  color: rgb(254, 202, 202);\n}\n.plate-report__bold-icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 1.5rem;\n  height: 1.5rem;\n  font-size: 1.5rem;\n}\n.plate-report__bold-copy[_ngcontent-%COMP%] {\n  min-width: 0;\n  flex: 1;\n}\n.plate-report__bold-text[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.875rem;\n}\n.plate-report__bold-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.35rem;\n  margin-top: 0.65rem;\n}\n.plate-report__bold-btn[_ngcontent-%COMP%] {\n  min-height: 2.25rem !important;\n  border-radius: 0.65rem !important;\n  font-size: 0.8125rem !important;\n}\n.plate-report__bold-btn--quiet[_ngcontent-%COMP%] {\n  opacity: 0.85;\n}\n.plate-report__field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.35rem;\n  margin-bottom: 0.9rem;\n  font-weight: 600;\n}\n.plate-report__field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.plate-report__field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  min-height: 3rem;\n  border-radius: 0.8rem;\n  border: 1px solid rgb(203, 213, 225);\n  padding: 0 0.9rem;\n  font: inherit;\n  font-weight: 500;\n  background: #fff;\n}\n.dark[_nghost-%COMP%]   .plate-report__field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .plate-report__field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .plate-report__field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .plate-report__field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  background: rgb(15, 23, 42);\n  color: #e2e8f0;\n  border-color: rgb(71, 85, 105);\n}\n.plate-report__switch[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.5rem;\n  margin-bottom: 0.9rem;\n}\n.plate-report__switch[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-height: 2.75rem;\n  border-radius: 999px;\n  border: 1px solid rgb(203, 213, 225);\n  background: transparent;\n  font: inherit;\n  font-weight: 600;\n}\n.plate-report__switch[_ngcontent-%COMP%]   button.is-active[_ngcontent-%COMP%] {\n  background: rgb(37, 99, 235);\n  border-color: rgb(37, 99, 235);\n  color: #fff;\n}\n.plate-report__submit[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 3rem;\n  margin-top: 0.4rem;\n  border-radius: 0.9rem !important;\n}\n.plate-report__currency[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.5rem;\n  margin-bottom: 0.9rem;\n}\n.plate-report__currency-option[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  min-height: 3.5rem;\n  padding: 0.6rem 0.9rem;\n  border-radius: 0.9rem;\n  border: 1px solid rgb(203, 213, 225);\n  background: transparent;\n  color: inherit;\n  font: inherit;\n  text-align: left;\n  cursor: pointer;\n}\n.plate-report__currency-option.is-active[_ngcontent-%COMP%] {\n  border-color: rgb(37, 99, 235);\n  background: rgb(239, 246, 255);\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);\n  color: rgb(30, 41, 59);\n}\n.plate-report__currency-option[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n  opacity: 0.5;\n}\n.plate-report__currency-code[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 3rem;\n  height: 2rem;\n  border-radius: 0.5rem;\n  border: 1px solid rgb(203, 213, 225);\n  background: #fff;\n  color: rgb(15, 23, 42);\n  font-size: 0.85rem;\n  font-weight: 700;\n}\n.plate-report__currency-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.plate-report__currency-text[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: rgb(100, 116, 139);\n  font-size: 0.78rem;\n}\n.dark[_nghost-%COMP%]   .plate-report__currency-option[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .plate-report__currency-option[_ngcontent-%COMP%] {\n  border-color: rgb(71, 85, 105);\n}\n.dark[_nghost-%COMP%]   .plate-report__currency-option.is-active[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .plate-report__currency-option.is-active[_ngcontent-%COMP%] {\n  background: rgba(37, 99, 235, 0.18);\n  color: #e2e8f0;\n}\n.plate-report__quote[_ngcontent-%COMP%], \n.plate-report__hint[_ngcontent-%COMP%] {\n  margin: 0 0 0.9rem;\n  font-size: 0.85rem;\n  line-height: 1.45;\n  color: rgb(100, 116, 139);\n}\n.plate-report__hint[_ngcontent-%COMP%] {\n  margin: 0.75rem 0 0;\n  font-size: 0.8rem;\n}\n.plate-report__row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 0.4rem;\n}\n.plate-report__error[_ngcontent-%COMP%] {\n  margin: 0 0 0.8rem;\n  color: rgb(190, 18, 60);\n  line-height: 1.4;\n}\n.plate-report__error[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.85rem;\n}\n.plate-report__status[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 0.75rem;\n  padding: 0.5rem 0 0.25rem;\n}\n.plate-report__link[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-top: 0.9rem;\n  color: rgb(37, 99, 235);\n}\n@media (min-width: 720px) {\n  .plate-report[_ngcontent-%COMP%] {\n    padding-top: 2.5rem;\n  }\n  .plate-report__card[_ngcontent-%COMP%] {\n    padding: 2rem 1.75rem 2rem;\n  }\n}\n/*# sourceMappingURL=plate-report.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlateReportComponent, [{
    type: Component,
    args: [{ selector: "plate-report", standalone: true, imports: [
      CommonModule,
      FormsModule,
      RouterModule,
      MatButtonModule,
      MatIconModule,
      MatProgressSpinnerModule,
      TranslocoModule
    ], template: `<ng-container *transloco="let t">\r
    <section class="plate-report">\r
        <div class="plate-report__card">\r
            <p class="plate-report__kicker">Verifik</p>\r
            <h1>{{ t('plateReport.title') }}</h1>\r
            <p class="plate-report__lead">{{ t('plateReport.subtitle') }}</p>\r
\r
            @if (showBoldBanner() && boldReturnState(); as boldState) {\r
                <div\r
                    class="plate-report__bold-banner"\r
                    [class.plate-report__bold-banner--confirming]="boldState === 'confirming'"\r
                    [class.plate-report__bold-banner--approved]="boldState === 'approved'"\r
                    [class.plate-report__bold-banner--pending]="boldState === 'pending'"\r
                    [class.plate-report__bold-banner--failed]="boldState === 'failed'"\r
                    [class.plate-report__bold-banner--neutral]="\r
                        boldState === 'abandoned' || boldState === 'unknown'\r
                    "\r
                    role="status"\r
                >\r
                    @if (boldState === 'confirming') {\r
                        <mat-spinner diameter="22"></mat-spinner>\r
                    } @else {\r
                        <mat-icon class="plate-report__bold-icon">{{ boldReturnIcon(boldState) }}</mat-icon>\r
                    }\r
                    <div class="plate-report__bold-copy">\r
                        <p class="plate-report__bold-text">{{ t('plateReport.bold.return.' + boldState) }}</p>\r
                        <div class="plate-report__bold-actions">\r
                            @if (boldState === 'approved' || reportPaid()) {\r
                                <button\r
                                    mat-flat-button\r
                                    color="primary"\r
                                    type="button"\r
                                    class="plate-report__bold-btn"\r
                                    (click)="continueAfterPayment()"\r
                                    [disabled]="busy()"\r
                                >\r
                                    @if (busy()) {\r
                                        <mat-spinner diameter="16"></mat-spinner>\r
                                    }\r
                                    {{ t('plateReport.bold.return.continue') }}\r
                                </button>\r
                            }\r
                            @if (boldState === 'pending' || boldState === 'unknown') {\r
                                <button\r
                                    mat-stroked-button\r
                                    type="button"\r
                                    class="plate-report__bold-btn"\r
                                    (click)="checkPayment()"\r
                                    [disabled]="busy() || !orderIdForCheck()"\r
                                >\r
                                    {{ t('plateReport.bold.return.check') }}\r
                                </button>\r
                            }\r
                            @if (boldState !== 'confirming') {\r
                                <button\r
                                    mat-button\r
                                    type="button"\r
                                    class="plate-report__bold-btn plate-report__bold-btn--quiet"\r
                                    (click)="dismissBoldReturnNotice()"\r
                                >\r
                                    {{ t('plateReport.bold.return.dismiss') }}\r
                                </button>\r
                            }\r
                        </div>\r
                    </div>\r
                </div>\r
            }\r
\r
            @if (phase() === 'form') {\r
                @if (signedIn()) {\r
                    <p class="plate-report__note">{{ t('plateReport.signedIn') }}</p>\r
                }\r
                @if (reportPaid() && !plate().trim()) {\r
                    <p class="plate-report__note plate-report__note--resume">{{ t('plateReport.paymentApprovedNeedPlate') }}</p>\r
                } @else if (pendingNotice() && !boldReturnState()) {\r
                    <p class="plate-report__note plate-report__note--resume">{{ t('plateReport.pendingNotice') }}</p>\r
                }\r
\r
                <form (ngSubmit)="submitForm()">\r
                    <label class="plate-report__field">\r
                        <span>{{ t('plateReport.plate') }}</span>\r
                        <input\r
                            [ngModel]="plate()"\r
                            (ngModelChange)="plate.set($event)"\r
                            name="plate"\r
                            autocomplete="off"\r
                            autocapitalize="characters"\r
                            [placeholder]="t('plateReport.platePlaceholder')"\r
                            [disabled]="busy()"\r
                            required\r
                        />\r
                    </label>\r
\r
                    <label class="plate-report__field">\r
                        <span>{{ t('plateReport.country') }}</span>\r
                        <select\r
                            [ngModel]="countryCode()"\r
                            (ngModelChange)="countryCode.set($event)"\r
                            name="country"\r
                            [disabled]="busy()"\r
                        >\r
                            @for (country of countries; track country.countryCode) {\r
                                <option [value]="country.countryCode">\r
                                    {{ country.flag }} {{ country.name }} ({{ country.dialCode }})\r
                                </option>\r
                            }\r
                        </select>\r
                    </label>\r
\r
                    <label class="plate-report__field">\r
                        <span>{{ t('plateReport.phone') }}</span>\r
                        <input\r
                            [ngModel]="phone()"\r
                            (ngModelChange)="phone.set($event)"\r
                            name="phone"\r
                            type="tel"\r
                            inputmode="tel"\r
                            autocomplete="tel"\r
                            [placeholder]="t('plateReport.phonePlaceholder')"\r
                            [disabled]="busy()"\r
                            required\r
                        />\r
                    </label>\r
\r
                    <label class="plate-report__field">\r
                        <span>{{ t('plateReport.name') }} <small>({{ t('plateReport.optional') }})</small></span>\r
                        <input\r
                            [ngModel]="personName()"\r
                            (ngModelChange)="personName.set($event)"\r
                            name="name"\r
                            autocomplete="name"\r
                            [placeholder]="t('plateReport.namePlaceholder')"\r
                            [disabled]="busy()"\r
                        />\r
                    </label>\r
\r
                    @if (fieldError(); as key) {\r
                        <p class="plate-report__error" role="alert">{{ t(key) }}</p>\r
                    }\r
                    @if (errorKey(); as key) {\r
                        <p class="plate-report__error" role="alert">\r
                            {{ t(key) }}\r
                            @if (errorDetail()) {\r
                                <span>{{ errorDetail() }}</span>\r
                            }\r
                        </p>\r
                    }\r
\r
                    <button mat-flat-button color="primary" type="submit" class="plate-report__submit" [disabled]="busy()">\r
                        @if (busy()) {\r
                            <mat-spinner diameter="18"></mat-spinner>\r
                        }\r
                        {{\r
                            reportPaid()\r
                                ? t('plateReport.continueToReady')\r
                                : pendingNotice()\r
                                  ? t('plateReport.continuePending')\r
                                  : t('plateReport.continue')\r
                        }}\r
                    </button>\r
\r
                    @if (!signedIn()) {\r
                        <p class="plate-report__note" style="margin-top: 0.75rem;">\r
                            {{ needsSignIn() ? t('plateReport.signInHint') : t('plateReport.haveAccount') }}\r
                            <button\r
                                mat-button\r
                                color="primary"\r
                                type="button"\r
                                (click)="signIn()"\r
                                [disabled]="busy()"\r
                            >\r
                                {{ t('plateReport.signIn') }}\r
                            </button>\r
                        </p>\r
                    }\r
                </form>\r
            }\r
\r
            @if (phase() === 'working') {\r
                <div class="plate-report__status" role="status">\r
                    <mat-spinner diameter="36"></mat-spinner>\r
                    <h2>{{ t('plateReport.workingTitle') }}</h2>\r
                    <p>{{ t(statusKey()) }}</p>\r
                </div>\r
            }\r
\r
            @if (phase() === 'payment') {\r
                <h2>{{ t('plateReport.paymentTitle') }}</h2>\r
                <p class="plate-report__lead">{{ t('plateReport.paymentBody') }}</p>\r
\r
                <div class="plate-report__currency" role="radiogroup" [attr.aria-label]="t('plateReport.currencyLabel')">\r
                    @for (option of currencyOptions; track option.code) {\r
                        <button\r
                            type="button"\r
                            role="radio"\r
                            class="plate-report__currency-option"\r
                            [class.is-active]="currency() === option.code"\r
                            [attr.aria-checked]="currency() === option.code"\r
                            [disabled]="option.disabled || busy()"\r
                            (click)="selectCurrency(option)"\r
                        >\r
                            <span class="plate-report__currency-code">{{ option.code }}</span>\r
                            <span class="plate-report__currency-text">\r
                                <strong>{{ t(option.labelKey) }}</strong>\r
                                <small>{{ t(option.methodsKey) }}</small>\r
                            </span>\r
                        </button>\r
                    }\r
                </div>\r
\r
                @if (totalLabel()) {\r
                    <p class="plate-report__quote">\r
                        {{ t('plateReport.quoteTotal', { total: totalLabel() }) }}\r
                    </p>\r
                } @else if (quoteLoading()) {\r
                    <p class="plate-report__quote">{{ t('addCredits.purchaseDialog.bold.quoteLoading') }}</p>\r
                }\r
\r
                @if (fxUnavailable()) {\r
                    <p class="plate-report__error" role="alert">{{ t('plateReport.fxUnavailable') }}</p>\r
                }\r
\r
                @if (pseOnly()) {\r
                    <p class="plate-report__note">{{ t('addCredits.purchaseDialog.bold.firstPurchasePseNote') }}</p>\r
                }\r
\r
                @if (errorKey(); as key) {\r
                    @if (!boldReturnState()) {\r
                        <p class="plate-report__error" role="alert">{{ t(key) }}</p>\r
                    }\r
                }\r
\r
                @if (canShowPayButton()) {\r
                <button mat-flat-button color="primary" type="button" class="plate-report__submit" (click)="pay()" [disabled]="!canPay()">\r
                    @if (busy()) {\r
                        <mat-spinner diameter="18"></mat-spinner>\r
                    }\r
                    {{ totalLabel() ? t('plateReport.payAmount', { total: totalLabel() }) : t('plateReport.pay') }}\r
                </button>\r
                }\r
\r
                <p class="plate-report__hint">{{ t('plateReport.paymentHint') }}</p>\r
                <p class="plate-report__hint plate-report__hint--bold">{{ t('plateReport.bold.embeddedHint') }}</p>\r
            }\r
\r
            @if (phase() === 'ready') {\r
                <h2>{{ t('plateReport.readyTitle') }}</h2>\r
                <p class="plate-report__lead">{{ t('plateReport.readyBody') }}</p>\r
                @if (reusedReport()) {\r
                    <p class="plate-report__note">{{ t('plateReport.reused') }}</p>\r
                } @else if (savedOnAccount()) {\r
                    <p class="plate-report__note">{{ t('plateReport.savedNotice') }}</p>\r
                }\r
                @if (partial()) {\r
                    <p class="plate-report__note">{{ t('plateReport.partial') }}</p>\r
                }\r
                @if (emailSent()) {\r
                    <p class="plate-report__note">{{ t('plateReport.emailSent', { email: deliveryEmail() }) }}</p>\r
                }\r
                @if (errorKey(); as key) {\r
                    <p class="plate-report__error" role="alert">{{ t(key) }}</p>\r
                }\r
                <button mat-flat-button color="primary" type="button" class="plate-report__submit" (click)="download()">\r
                    {{ t('plateReport.download') }}\r
                </button>\r
\r
                <div class="plate-report__email-delivery" style="margin-top: 1.25rem; border-top: 1px solid rgba(15, 23, 42, 0.08); padding-top: 1.25rem;">\r
                    <label class="plate-report__field">\r
                        <span>{{ t('plateReport.sendEmailTo') }}</span>\r
                        <input\r
                            [ngModel]="contact()"\r
                            (ngModelChange)="contact.set($event)"\r
                            type="email"\r
                            inputmode="email"\r
                            autocomplete="email"\r
                            [placeholder]="t('plateReport.emailPlaceholder')"\r
                            [disabled]="busy()"\r
                        />\r
                    </label>\r
                    <button mat-stroked-button type="button" class="plate-report__submit" (click)="sendEmail()" [disabled]="busy() || !deliveryEmail()">\r
                        @if (busy()) {\r
                            <mat-spinner diameter="18"></mat-spinner>\r
                        }\r
                        {{ t('plateReport.sendEmail') }}\r
                    </button>\r
                </div>\r
\r
                <button mat-button type="button" style="margin-top: 0.75rem;" (click)="reset()">{{ t('plateReport.newReport') }}</button>\r
            }\r
        </div>\r
    </section>\r
</ng-container>\r
`, styles: ["/* src/app/modules/plate-report/plate-report.component.scss */\n:host {\n  display: block;\n  min-height: 100%;\n  background:\n    radial-gradient(\n      900px 420px at 0% -10%,\n      rgba(37, 99, 235, 0.12),\n      transparent 55%),\n    linear-gradient(\n      180deg,\n      rgb(248, 250, 252) 0%,\n      rgb(241, 245, 249) 100%);\n}\n:host-context(.dark) {\n  background:\n    radial-gradient(\n      900px 420px at 0% -10%,\n      rgba(59, 130, 246, 0.18),\n      transparent 55%),\n    linear-gradient(\n      180deg,\n      rgb(15, 23, 42) 0%,\n      rgb(2, 6, 23) 100%);\n}\n.plate-report {\n  max-width: 32rem;\n  margin: 0 auto;\n  padding: 1.25rem 1rem 3rem;\n}\n.plate-report__card {\n  background: #fff;\n  border: 1px solid rgba(15, 23, 42, 0.08);\n  border-radius: 1.25rem;\n  padding: 1.5rem 1.25rem 1.75rem;\n  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.06);\n}\n:host-context(.dark) .plate-report__card {\n  background: rgb(15, 23, 42);\n  border-color: rgba(148, 163, 184, 0.2);\n  color: #e2e8f0;\n}\n.plate-report__kicker {\n  margin: 0 0 0.35rem;\n  font-size: 0.75rem;\n  font-weight: 700;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n  color: rgb(37, 99, 235);\n}\nh1,\nh2 {\n  margin: 0;\n  font-size: 1.65rem;\n  line-height: 1.2;\n  font-weight: 650;\n}\nh2 {\n  font-size: 1.25rem;\n  margin-bottom: 0.5rem;\n}\n.plate-report__lead {\n  margin: 0.6rem 0 1.25rem;\n  color: rgb(71, 85, 105);\n  line-height: 1.5;\n}\n:host-context(.dark) .plate-report__lead {\n  color: rgb(148, 163, 184);\n}\n.plate-report__note {\n  margin: 0 0 1rem;\n  padding: 0.75rem 0.9rem;\n  border-radius: 0.8rem;\n  background: rgb(239, 246, 255);\n  color: rgb(30, 64, 175);\n  line-height: 1.45;\n}\n.plate-report__note--resume {\n  background: rgb(238, 242, 255);\n  border: 1px solid rgb(199, 210, 254);\n  color: rgb(49, 46, 129);\n}\n.plate-report__bold-banner {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.75rem;\n  margin: 0 0 1.25rem;\n  padding: 0.85rem 0.95rem;\n  border-radius: 0.9rem;\n  border: 1px solid transparent;\n  line-height: 1.45;\n}\n.plate-report__bold-banner--confirming,\n.plate-report__bold-banner--neutral {\n  border-color: rgb(226, 232, 240);\n  background: rgb(248, 250, 252);\n  color: rgb(51, 65, 85);\n}\n.plate-report__bold-banner--approved {\n  border-color: rgb(167, 243, 208);\n  background: rgb(236, 253, 245);\n  color: rgb(6, 78, 59);\n}\n.plate-report__bold-banner--pending {\n  border-color: rgb(253, 230, 138);\n  background: rgb(255, 251, 235);\n  color: rgb(146, 64, 14);\n}\n.plate-report__bold-banner--failed {\n  border-color: rgb(254, 202, 202);\n  background: rgb(254, 242, 242);\n  color: rgb(153, 27, 27);\n}\n:host-context(.dark) .plate-report__bold-banner--confirming,\n:host-context(.dark) .plate-report__bold-banner--neutral {\n  border-color: rgb(71, 85, 105);\n  background: rgba(30, 41, 59, 0.65);\n  color: rgb(226, 232, 240);\n}\n:host-context(.dark) .plate-report__bold-banner--approved {\n  border-color: rgb(6, 95, 70);\n  background: rgba(6, 78, 59, 0.35);\n  color: rgb(167, 243, 208);\n}\n:host-context(.dark) .plate-report__bold-banner--pending {\n  border-color: rgb(180, 83, 9);\n  background: rgba(120, 53, 15, 0.35);\n  color: rgb(253, 230, 138);\n}\n:host-context(.dark) .plate-report__bold-banner--failed {\n  border-color: rgb(185, 28, 28);\n  background: rgba(127, 29, 29, 0.35);\n  color: rgb(254, 202, 202);\n}\n.plate-report__bold-icon {\n  flex-shrink: 0;\n  width: 1.5rem;\n  height: 1.5rem;\n  font-size: 1.5rem;\n}\n.plate-report__bold-copy {\n  min-width: 0;\n  flex: 1;\n}\n.plate-report__bold-text {\n  margin: 0;\n  font-size: 0.875rem;\n}\n.plate-report__bold-actions {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.35rem;\n  margin-top: 0.65rem;\n}\n.plate-report__bold-btn {\n  min-height: 2.25rem !important;\n  border-radius: 0.65rem !important;\n  font-size: 0.8125rem !important;\n}\n.plate-report__bold-btn--quiet {\n  opacity: 0.85;\n}\n.plate-report__field {\n  display: flex;\n  flex-direction: column;\n  gap: 0.35rem;\n  margin-bottom: 0.9rem;\n  font-weight: 600;\n}\n.plate-report__field input,\n.plate-report__field select {\n  min-height: 3rem;\n  border-radius: 0.8rem;\n  border: 1px solid rgb(203, 213, 225);\n  padding: 0 0.9rem;\n  font: inherit;\n  font-weight: 500;\n  background: #fff;\n}\n:host-context(.dark) .plate-report__field input,\n:host-context(.dark) .plate-report__field select {\n  background: rgb(15, 23, 42);\n  color: #e2e8f0;\n  border-color: rgb(71, 85, 105);\n}\n.plate-report__switch {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.5rem;\n  margin-bottom: 0.9rem;\n}\n.plate-report__switch button {\n  min-height: 2.75rem;\n  border-radius: 999px;\n  border: 1px solid rgb(203, 213, 225);\n  background: transparent;\n  font: inherit;\n  font-weight: 600;\n}\n.plate-report__switch button.is-active {\n  background: rgb(37, 99, 235);\n  border-color: rgb(37, 99, 235);\n  color: #fff;\n}\n.plate-report__submit {\n  width: 100%;\n  min-height: 3rem;\n  margin-top: 0.4rem;\n  border-radius: 0.9rem !important;\n}\n.plate-report__currency {\n  display: grid;\n  gap: 0.5rem;\n  margin-bottom: 0.9rem;\n}\n.plate-report__currency-option {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  min-height: 3.5rem;\n  padding: 0.6rem 0.9rem;\n  border-radius: 0.9rem;\n  border: 1px solid rgb(203, 213, 225);\n  background: transparent;\n  color: inherit;\n  font: inherit;\n  text-align: left;\n  cursor: pointer;\n}\n.plate-report__currency-option.is-active {\n  border-color: rgb(37, 99, 235);\n  background: rgb(239, 246, 255);\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);\n  color: rgb(30, 41, 59);\n}\n.plate-report__currency-option:disabled {\n  cursor: not-allowed;\n  opacity: 0.5;\n}\n.plate-report__currency-code {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 3rem;\n  height: 2rem;\n  border-radius: 0.5rem;\n  border: 1px solid rgb(203, 213, 225);\n  background: #fff;\n  color: rgb(15, 23, 42);\n  font-size: 0.85rem;\n  font-weight: 700;\n}\n.plate-report__currency-text {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.plate-report__currency-text small {\n  color: rgb(100, 116, 139);\n  font-size: 0.78rem;\n}\n:host-context(.dark) .plate-report__currency-option {\n  border-color: rgb(71, 85, 105);\n}\n:host-context(.dark) .plate-report__currency-option.is-active {\n  background: rgba(37, 99, 235, 0.18);\n  color: #e2e8f0;\n}\n.plate-report__quote,\n.plate-report__hint {\n  margin: 0 0 0.9rem;\n  font-size: 0.85rem;\n  line-height: 1.45;\n  color: rgb(100, 116, 139);\n}\n.plate-report__hint {\n  margin: 0.75rem 0 0;\n  font-size: 0.8rem;\n}\n.plate-report__row {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 0.4rem;\n}\n.plate-report__error {\n  margin: 0 0 0.8rem;\n  color: rgb(190, 18, 60);\n  line-height: 1.4;\n}\n.plate-report__error span {\n  display: block;\n  font-size: 0.85rem;\n}\n.plate-report__status {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 0.75rem;\n  padding: 0.5rem 0 0.25rem;\n}\n.plate-report__link {\n  display: inline-block;\n  margin-top: 0.9rem;\n  color: rgb(37, 99, 235);\n}\n@media (min-width: 720px) {\n  .plate-report {\n    padding-top: 2.5rem;\n  }\n  .plate-report__card {\n    padding: 2rem 1.75rem 2rem;\n  }\n}\n/*# sourceMappingURL=plate-report.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PlateReportComponent, { className: "PlateReportComponent", filePath: "src/app/modules/plate-report/plate-report.component.ts", lineNumber: 130 });
})();
export {
  PlateReportComponent
};
//# sourceMappingURL=chunk-AOYJXUVV.js.map
