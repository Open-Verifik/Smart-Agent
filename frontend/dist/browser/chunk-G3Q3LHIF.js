import {
  CreditsService,
  clearPlateReportDraft,
  readPlateReportDraft,
  writePlateReportDraft
} from "./chunk-BN2XYZ62.js";
import {
  defaultSystemKey
} from "./chunk-7G5ODJOP.js";
import "./chunk-YR6ZLJHC.js";
import {
  SmartReportService
} from "./chunk-RKCOT5XT.js";
import {
  BatchBrowserRunnerService
} from "./chunk-OLZUTVF6.js";
import "./chunk-JCIM3ZHA.js";
import "./chunk-T3ZUDNVS.js";
import {
  SmartBatchService
} from "./chunk-DP7W4Q6V.js";
import {
  SubscriptionService
} from "./chunk-X5UH5JHC.js";
import "./chunk-USONFPXP.js";
import {
  VerifikApiService
} from "./chunk-74XWQYK4.js";
import {
  PaymentService
} from "./chunk-VWOHFVN5.js";
import {
  CountryService
} from "./chunk-4U26N45P.js";
import {
  AuthService
} from "./chunk-OJPCXVQ6.js";
import {
  UserService
} from "./chunk-6VDSDVMZ.js";
import "./chunk-BCBZJBUY.js";
import {
  SessionService
} from "./chunk-WSS6AKQE.js";
import "./chunk-EVWXSBKG.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-UUIVQBYS.js";
import "./chunk-M5KDIZH5.js";
import "./chunk-OIBNGD5S.js";
import "./chunk-WOW6NB5H.js";
import {
  MatButton,
  MatButtonModule
} from "./chunk-YSJP7SXK.js";
import {
  MatIconModule
} from "./chunk-CQIQSUBU.js";
import "./chunk-J762DGD5.js";
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
} from "./chunk-DVRFI3SJ.js";
import {
  TranslocoDirective,
  TranslocoModule,
  TranslocoService
} from "./chunk-R5W3A6HI.js";
import {
  ActivatedRoute,
  Router,
  RouterModule
} from "./chunk-HYFP557I.js";
import {
  environment
} from "./chunk-PMCYMBOC.js";
import {
  CommonModule,
  Component,
  DestroyRef,
  firstValueFrom,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
} from "./chunk-PNPEHISK.js";
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
var _c0 = (a0) => ({ email: a0 });
var _forTrack0 = ($index, $item) => $item.countryCode;
function PlateReportComponent_ng_container_0_Conditional_9_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2("plateReport.signedIn"));
  }
}
function PlateReportComponent_ng_container_0_Conditional_9_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2("plateReport.pendingNotice"));
  }
}
function PlateReportComponent_ng_container_0_Conditional_9_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const country_r4 = ctx.$implicit;
    \u0275\u0275property("value", country_r4.countryCode);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" ", country_r4.flag, " ", country_r4.name, " (", country_r4.dialCode, ") ");
  }
}
function PlateReportComponent_ng_container_0_Conditional_9_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2(ctx));
  }
}
function PlateReportComponent_ng_container_0_Conditional_9_Conditional_24_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.errorDetail());
  }
}
function PlateReportComponent_ng_container_0_Conditional_9_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 14);
    \u0275\u0275text(1);
    \u0275\u0275template(2, PlateReportComponent_ng_container_0_Conditional_9_Conditional_24_Conditional_2_Template, 2, 1, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r2(ctx), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.errorDetail() ? 2 : -1);
  }
}
function PlateReportComponent_ng_container_0_Conditional_9_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 16);
  }
}
function PlateReportComponent_ng_container_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275template(0, PlateReportComponent_ng_container_0_Conditional_9_Conditional_0_Template, 2, 1, "p", 6)(1, PlateReportComponent_ng_container_0_Conditional_9_Conditional_1_Template, 2, 1, "p", 6);
    \u0275\u0275elementStart(2, "form", 7);
    \u0275\u0275listener("ngSubmit", function PlateReportComponent_ng_container_0_Conditional_9_Template_form_ngSubmit_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.submitForm());
    });
    \u0275\u0275elementStart(3, "label", 8)(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 9);
    \u0275\u0275listener("ngModelChange", function PlateReportComponent_ng_container_0_Conditional_9_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.plate.set($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "label", 8)(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "select", 10);
    \u0275\u0275listener("ngModelChange", function PlateReportComponent_ng_container_0_Conditional_9_Template_select_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.countryCode.set($event));
    });
    \u0275\u0275repeaterCreate(11, PlateReportComponent_ng_container_0_Conditional_9_For_12_Template, 2, 4, "option", 11, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "label", 8)(14, "span");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "input", 12);
    \u0275\u0275listener("ngModelChange", function PlateReportComponent_ng_container_0_Conditional_9_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.phone.set($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "label", 8)(18, "span");
    \u0275\u0275text(19);
    \u0275\u0275elementStart(20, "small");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "input", 13);
    \u0275\u0275listener("ngModelChange", function PlateReportComponent_ng_container_0_Conditional_9_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.personName.set($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(23, PlateReportComponent_ng_container_0_Conditional_9_Conditional_23_Template, 2, 1, "p", 14)(24, PlateReportComponent_ng_container_0_Conditional_9_Conditional_24_Template, 3, 2, "p", 14);
    \u0275\u0275elementStart(25, "button", 15);
    \u0275\u0275template(26, PlateReportComponent_ng_container_0_Conditional_9_Conditional_26_Template, 1, 0, "mat-spinner", 16);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_22_0;
    let tmp_23_0;
    const t_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r2.signedIn() ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.pendingNotice() ? 1 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r2("plateReport.plate"));
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r2.plate())("placeholder", t_r2("plateReport.platePlaceholder"))("disabled", ctx_r2.busy());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r2("plateReport.country"));
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r2.countryCode())("disabled", ctx_r2.busy());
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.countries);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r2("plateReport.phone"));
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r2.phone())("placeholder", t_r2("plateReport.phonePlaceholder"))("disabled", ctx_r2.busy());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", t_r2("plateReport.name"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("(", t_r2("plateReport.optional"), ")");
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r2.personName())("placeholder", t_r2("plateReport.namePlaceholder"))("disabled", ctx_r2.busy());
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_22_0 = ctx_r2.fieldError()) ? 23 : -1, tmp_22_0);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_23_0 = ctx_r2.errorKey()) ? 24 : -1, tmp_23_0);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.busy());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.busy() ? 26 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.pendingNotice() ? t_r2("plateReport.continuePending") : t_r2("plateReport.continue"), " ");
  }
}
function PlateReportComponent_ng_container_0_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "mat-spinner", 17);
    \u0275\u0275elementStart(2, "h2");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r2("plateReport.workingTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2(ctx_r2.statusKey()));
  }
}
function PlateReportComponent_ng_container_0_Conditional_11_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2(ctx));
  }
}
function PlateReportComponent_ng_container_0_Conditional_11_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 16);
  }
}
function PlateReportComponent_ng_container_0_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "h2");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p", 4);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, PlateReportComponent_ng_container_0_Conditional_11_Conditional_4_Template, 2, 1, "p", 14);
    \u0275\u0275elementStart(5, "button", 18);
    \u0275\u0275listener("click", function PlateReportComponent_ng_container_0_Conditional_11_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.pay());
    });
    \u0275\u0275template(6, PlateReportComponent_ng_container_0_Conditional_11_Conditional_6_Template, 1, 0, "mat-spinner", 16);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_5_0;
    const t_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2("plateReport.paymentTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2("plateReport.paymentBody"));
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_5_0 = ctx_r2.errorKey()) ? 4 : -1, tmp_5_0);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.busy());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.busy() ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r2("plateReport.pay"), " ");
  }
}
function PlateReportComponent_ng_container_0_Conditional_12_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2("plateReport.partial"));
  }
}
function PlateReportComponent_ng_container_0_Conditional_12_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2("plateReport.emailSent", \u0275\u0275pureFunction1(1, _c0, ctx_r2.deliveryEmail())));
  }
}
function PlateReportComponent_ng_container_0_Conditional_12_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2(ctx));
  }
}
function PlateReportComponent_ng_container_0_Conditional_12_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 16);
  }
}
function PlateReportComponent_ng_container_0_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "h2");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p", 4);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, PlateReportComponent_ng_container_0_Conditional_12_Conditional_4_Template, 2, 1, "p", 6)(5, PlateReportComponent_ng_container_0_Conditional_12_Conditional_5_Template, 2, 3, "p", 6)(6, PlateReportComponent_ng_container_0_Conditional_12_Conditional_6_Template, 2, 1, "p", 14);
    \u0275\u0275elementStart(7, "button", 19);
    \u0275\u0275listener("click", function PlateReportComponent_ng_container_0_Conditional_12_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.download());
    });
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 20)(10, "label", 8)(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 21);
    \u0275\u0275listener("ngModelChange", function PlateReportComponent_ng_container_0_Conditional_12_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.contact.set($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "button", 22);
    \u0275\u0275listener("click", function PlateReportComponent_ng_container_0_Conditional_12_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.sendEmail());
    });
    \u0275\u0275template(15, PlateReportComponent_ng_container_0_Conditional_12_Conditional_15_Template, 1, 0, "mat-spinner", 16);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "button", 23);
    \u0275\u0275listener("click", function PlateReportComponent_ng_container_0_Conditional_12_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.reset());
    });
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_7_0;
    const t_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2("plateReport.readyTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2("plateReport.readyBody"));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.partial() ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.emailSent() ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_7_0 = ctx_r2.errorKey()) ? 6 : -1, tmp_7_0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r2("plateReport.download"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r2("plateReport.sendEmailTo"));
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r2.contact())("placeholder", t_r2("plateReport.emailPlaceholder"))("disabled", ctx_r2.busy());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.busy() || !ctx_r2.deliveryEmail());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.busy() ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r2("plateReport.sendEmail"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2("plateReport.newReport"));
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
    \u0275\u0275template(9, PlateReportComponent_ng_container_0_Conditional_9_Template, 28, 23)(10, PlateReportComponent_ng_container_0_Conditional_10_Template, 6, 2, "div", 5)(11, PlateReportComponent_ng_container_0_Conditional_11_Template, 8, 6)(12, PlateReportComponent_ng_container_0_Conditional_12_Template, 19, 14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(t_r2("plateReport.title"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2("plateReport.subtitle"));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.phase() === "form" ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.phase() === "working" ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.phase() === "payment" ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.phase() === "ready" ? 12 : -1);
  }
}
var VEHICLE_PRESET = defaultSystemKey("vehicle", "co");
var POLL_MS = 2500;
var POLL_LIMIT_MS = 4 * 60 * 1e3;
var PlateReportComponent = class _PlateReportComponent {
  constructor() {
    this._auth = inject(AuthService);
    this._verifik = inject(VerifikApiService);
    this._session = inject(SessionService);
    this._users = inject(UserService);
    this._countries = inject(CountryService);
    this._batches = inject(SmartBatchService);
    this._reports = inject(SmartReportService);
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
    inject(DestroyRef).onDestroy(() => {
      this._left = true;
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
      this.pendingNotice.set(Boolean(draft.batchId));
    }
    const resume = this._route.snapshot.queryParamMap.get("continuar") === "1";
    const boldOrderId = this._route.snapshot.queryParamMap.get("bold-order-id");
    if (boldOrderId) {
      void this._handleBoldReturn(boldOrderId);
    } else if (resume && draft?.batchId && this.signedIn()) {
      void this.continueFromDraft();
    }
  }
  _handleBoldReturn(orderId) {
    return __async(this, null, function* () {
      this.phase.set("working");
      this.busy.set(true);
      try {
        const result = yield firstValueFrom(this._payment.confirmBoldPurchase(orderId));
        const status = result?.data?.transaction?.status;
        if (status === "approved" || result?.data?.finalized) {
          this._paid = true;
          this._remember();
          yield firstValueFrom(this._auth.refreshSession());
          yield this.startReport();
          return;
        }
        if (result?.data?.pending) {
          this.errorKey.set("plateReport.paymentPending");
          this.phase.set("payment");
          return;
        }
        this.errorKey.set("plateReport.paymentPending");
        this.phase.set("payment");
      } catch {
        this.phase.set("payment");
      } finally {
        this.busy.set(false);
      }
    });
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
        this.phase.set("payment");
      } catch (error) {
        this._showError("plateReport.genericError", error);
        this.phase.set("form");
      } finally {
        this.busy.set(false);
      }
    });
  }
  statusKey() {
    const step = this.workingStep();
    if (step === "account")
      return "plateReport.workingAccount";
    if (step === "run")
      return "plateReport.workingRun";
    if (step === "pdf")
      return "plateReport.workingPdf";
    return "plateReport.workingClone";
  }
  pay() {
    return __async(this, null, function* () {
      if (this.busy())
        return;
      this.busy.set(true);
      this.errorKey.set(null);
      this._remember("after-payment");
      try {
        const response = yield firstValueFrom(this._payment.createBoldCheckout({
          amount: 6,
          // 6 USD ~ 24,000 COP
          currency: "COP",
          origin: "smart_agent"
        }));
        const config = response.data;
        if (config.mode === "redirect") {
          this._payment.redirectToBoldCheckout(config);
          return;
        }
        yield this._payment.loadBoldCheckoutScript();
        this._payment.openBoldCheckout(config);
        this.errorKey.set("plateReport.paymentPending");
      } catch (error) {
        console.error("Failed to open Bold checkout:", error);
        this._showError("plateReport.genericError", error);
      } finally {
        this.busy.set(false);
      }
    });
  }
  continueFromDraft() {
    return __async(this, null, function* () {
      if (!this._batchId || !this._session.isTokenValid()) {
        this.phase.set("form");
        return;
      }
      yield this.startReport();
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
        const quote = yield firstValueFrom(this._batches.getBatchEstimate(this._batchId));
        this.estimate.set(quote.data);
        if (!quote.data.sufficientCredits && existing.data.status !== "processing") {
          this._remember("after-payment");
          this.phase.set("payment");
          return;
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
        const accountMessage = this._errorMessage(error);
        if (accountMessage === "account" || accountMessage === "Project_not_allowed") {
          this.errorKey.set("plateReport.accountFailed");
          this.errorDetail.set("");
          this.phase.set("form");
          return;
        }
        if (accountMessage === "signUpForm_validation_not_passed") {
          this.errorKey.set("plateReport.verificationRequired");
          this.errorDetail.set("");
          this.phase.set("form");
          return;
        }
        const code = this._errorCode(error);
        if (code === "insufficient_credits" || /credit/i.test(this._errorMessage(error))) {
          this._remember("after-payment");
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
      clearPlateReportDraft();
      this.phase.set("ready");
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
   * Opens the current session, or creates a basic account from the name, phone, and email.
   * The contact is stored as given. This step does not send or require a verification code.
   */
  _ensureBasicAccount() {
    return __async(this, null, function* () {
      if (this._session.isTokenValid()) {
        this.signedIn.set(true);
        try {
          yield firstValueFrom(this._users.updateClient({ name: this.personName() }));
        } catch {
        }
        return;
      }
      this.workingStep.set("account");
      const country = this.selectedCountry();
      const rawPhone = this.phone().trim();
      const phone = rawPhone ? nationalPhone(rawPhone, country.dialCode) : "";
      const email = this.contact().trim();
      const registrationPayload = __spreadValues(__spreadValues({
        projectFlow: yield this._onboardingFlowId(),
        fullName: this.personName() || void 0
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PlateReportComponent, selectors: [["plate-report"]], decls: 1, vars: 0, consts: [[4, "transloco"], [1, "plate-report"], [1, "plate-report__card"], [1, "plate-report__kicker"], [1, "plate-report__lead"], ["role", "status", 1, "plate-report__status"], [1, "plate-report__note"], [3, "ngSubmit"], [1, "plate-report__field"], ["name", "plate", "autocomplete", "off", "autocapitalize", "characters", "required", "", 3, "ngModelChange", "ngModel", "placeholder", "disabled"], ["name", "country", 3, "ngModelChange", "ngModel", "disabled"], [3, "value"], ["name", "phone", "type", "tel", "inputmode", "tel", "autocomplete", "tel", "required", "", 3, "ngModelChange", "ngModel", "placeholder", "disabled"], ["name", "name", "autocomplete", "name", 3, "ngModelChange", "ngModel", "placeholder", "disabled"], ["role", "alert", 1, "plate-report__error"], ["mat-flat-button", "", "color", "primary", "type", "submit", 1, "plate-report__submit", 3, "disabled"], ["diameter", "18"], ["diameter", "36"], ["mat-flat-button", "", "color", "primary", "type", "button", 1, "plate-report__submit", 3, "click", "disabled"], ["mat-flat-button", "", "color", "primary", "type", "button", 1, "plate-report__submit", 3, "click"], [1, "plate-report__email-delivery", 2, "margin-top", "1.25rem", "border-top", "1px solid rgba(15, 23, 42, 0.08)", "padding-top", "1.25rem"], ["type", "email", "inputmode", "email", "autocomplete", "email", 3, "ngModelChange", "ngModel", "placeholder", "disabled"], ["mat-stroked-button", "", "type", "button", 1, "plate-report__submit", 3, "click", "disabled"], ["mat-button", "", "type", "button", 2, "margin-top", "0.75rem", 3, "click"]], template: function PlateReportComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, PlateReportComponent_ng_container_0_Template, 13, 6, "ng-container", 0);
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
      MatProgressSpinnerModule,
      MatProgressSpinner,
      TranslocoModule,
      TranslocoDirective
    ], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  min-height: 100%;\n  background:\n    radial-gradient(\n      900px 420px at 0% -10%,\n      rgba(37, 99, 235, 0.12),\n      transparent 55%),\n    linear-gradient(\n      180deg,\n      rgb(248, 250, 252) 0%,\n      rgb(241, 245, 249) 100%);\n}\n.dark[_nghost-%COMP%], .dark   [_nghost-%COMP%] {\n  background:\n    radial-gradient(\n      900px 420px at 0% -10%,\n      rgba(59, 130, 246, 0.18),\n      transparent 55%),\n    linear-gradient(\n      180deg,\n      rgb(15, 23, 42) 0%,\n      rgb(2, 6, 23) 100%);\n}\n.plate-report[_ngcontent-%COMP%] {\n  max-width: 32rem;\n  margin: 0 auto;\n  padding: 1.25rem 1rem 3rem;\n}\n.plate-report__card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid rgba(15, 23, 42, 0.08);\n  border-radius: 1.25rem;\n  padding: 1.5rem 1.25rem 1.75rem;\n  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.06);\n}\n.dark[_nghost-%COMP%]   .plate-report__card[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .plate-report__card[_ngcontent-%COMP%] {\n  background: rgb(15, 23, 42);\n  border-color: rgba(148, 163, 184, 0.2);\n  color: #e2e8f0;\n}\n.plate-report__kicker[_ngcontent-%COMP%] {\n  margin: 0 0 0.35rem;\n  font-size: 0.75rem;\n  font-weight: 700;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n  color: rgb(37, 99, 235);\n}\nh1[_ngcontent-%COMP%], \nh2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.65rem;\n  line-height: 1.2;\n  font-weight: 650;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  margin-bottom: 0.5rem;\n}\n.plate-report__lead[_ngcontent-%COMP%] {\n  margin: 0.6rem 0 1.25rem;\n  color: rgb(71, 85, 105);\n  line-height: 1.5;\n}\n.dark[_nghost-%COMP%]   .plate-report__lead[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .plate-report__lead[_ngcontent-%COMP%] {\n  color: rgb(148, 163, 184);\n}\n.plate-report__note[_ngcontent-%COMP%] {\n  margin: 0 0 1rem;\n  padding: 0.75rem 0.9rem;\n  border-radius: 0.8rem;\n  background: rgb(239, 246, 255);\n  color: rgb(30, 64, 175);\n  line-height: 1.45;\n}\n.plate-report__field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.35rem;\n  margin-bottom: 0.9rem;\n  font-weight: 600;\n}\n.plate-report__field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.plate-report__field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  min-height: 3rem;\n  border-radius: 0.8rem;\n  border: 1px solid rgb(203, 213, 225);\n  padding: 0 0.9rem;\n  font: inherit;\n  font-weight: 500;\n  background: #fff;\n}\n.dark[_nghost-%COMP%]   .plate-report__field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .plate-report__field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .plate-report__field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .plate-report__field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  background: rgb(15, 23, 42);\n  color: #e2e8f0;\n  border-color: rgb(71, 85, 105);\n}\n.plate-report__switch[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.5rem;\n  margin-bottom: 0.9rem;\n}\n.plate-report__switch[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-height: 2.75rem;\n  border-radius: 999px;\n  border: 1px solid rgb(203, 213, 225);\n  background: transparent;\n  font: inherit;\n  font-weight: 600;\n}\n.plate-report__switch[_ngcontent-%COMP%]   button.is-active[_ngcontent-%COMP%] {\n  background: rgb(37, 99, 235);\n  border-color: rgb(37, 99, 235);\n  color: #fff;\n}\n.plate-report__submit[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 3rem;\n  margin-top: 0.4rem;\n  border-radius: 0.9rem !important;\n}\n.plate-report__row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 0.4rem;\n}\n.plate-report__error[_ngcontent-%COMP%] {\n  margin: 0 0 0.8rem;\n  color: rgb(190, 18, 60);\n  line-height: 1.4;\n}\n.plate-report__error[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.85rem;\n}\n.plate-report__status[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 0.75rem;\n  padding: 0.5rem 0 0.25rem;\n}\n.plate-report__link[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-top: 0.9rem;\n  color: rgb(37, 99, 235);\n}\n@media (min-width: 720px) {\n  .plate-report[_ngcontent-%COMP%] {\n    padding-top: 2.5rem;\n  }\n  .plate-report__card[_ngcontent-%COMP%] {\n    padding: 2rem 1.75rem 2rem;\n  }\n}\n/*# sourceMappingURL=plate-report.component.css.map */"] });
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
            @if (phase() === 'form') {\r
                @if (signedIn()) {\r
                    <p class="plate-report__note">{{ t('plateReport.signedIn') }}</p>\r
                }\r
                @if (pendingNotice()) {\r
                    <p class="plate-report__note">{{ t('plateReport.pendingNotice') }}</p>\r
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
                        {{ pendingNotice() ? t('plateReport.continuePending') : t('plateReport.continue') }}\r
                    </button>\r
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
                @if (errorKey(); as key) {\r
                    <p class="plate-report__error" role="alert">{{ t(key) }}</p>\r
                }\r
                <button mat-flat-button color="primary" type="button" class="plate-report__submit" (click)="pay()" [disabled]="busy()">\r
                    @if (busy()) {\r
                        <mat-spinner diameter="18"></mat-spinner>\r
                    }\r
                    {{ t('plateReport.pay') }}\r
                </button>\r
            }\r
\r
            @if (phase() === 'ready') {\r
                <h2>{{ t('plateReport.readyTitle') }}</h2>\r
                <p class="plate-report__lead">{{ t('plateReport.readyBody') }}</p>\r
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
`, styles: ["/* src/app/modules/plate-report/plate-report.component.scss */\n:host {\n  display: block;\n  min-height: 100%;\n  background:\n    radial-gradient(\n      900px 420px at 0% -10%,\n      rgba(37, 99, 235, 0.12),\n      transparent 55%),\n    linear-gradient(\n      180deg,\n      rgb(248, 250, 252) 0%,\n      rgb(241, 245, 249) 100%);\n}\n:host-context(.dark) {\n  background:\n    radial-gradient(\n      900px 420px at 0% -10%,\n      rgba(59, 130, 246, 0.18),\n      transparent 55%),\n    linear-gradient(\n      180deg,\n      rgb(15, 23, 42) 0%,\n      rgb(2, 6, 23) 100%);\n}\n.plate-report {\n  max-width: 32rem;\n  margin: 0 auto;\n  padding: 1.25rem 1rem 3rem;\n}\n.plate-report__card {\n  background: #fff;\n  border: 1px solid rgba(15, 23, 42, 0.08);\n  border-radius: 1.25rem;\n  padding: 1.5rem 1.25rem 1.75rem;\n  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.06);\n}\n:host-context(.dark) .plate-report__card {\n  background: rgb(15, 23, 42);\n  border-color: rgba(148, 163, 184, 0.2);\n  color: #e2e8f0;\n}\n.plate-report__kicker {\n  margin: 0 0 0.35rem;\n  font-size: 0.75rem;\n  font-weight: 700;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n  color: rgb(37, 99, 235);\n}\nh1,\nh2 {\n  margin: 0;\n  font-size: 1.65rem;\n  line-height: 1.2;\n  font-weight: 650;\n}\nh2 {\n  font-size: 1.25rem;\n  margin-bottom: 0.5rem;\n}\n.plate-report__lead {\n  margin: 0.6rem 0 1.25rem;\n  color: rgb(71, 85, 105);\n  line-height: 1.5;\n}\n:host-context(.dark) .plate-report__lead {\n  color: rgb(148, 163, 184);\n}\n.plate-report__note {\n  margin: 0 0 1rem;\n  padding: 0.75rem 0.9rem;\n  border-radius: 0.8rem;\n  background: rgb(239, 246, 255);\n  color: rgb(30, 64, 175);\n  line-height: 1.45;\n}\n.plate-report__field {\n  display: flex;\n  flex-direction: column;\n  gap: 0.35rem;\n  margin-bottom: 0.9rem;\n  font-weight: 600;\n}\n.plate-report__field input,\n.plate-report__field select {\n  min-height: 3rem;\n  border-radius: 0.8rem;\n  border: 1px solid rgb(203, 213, 225);\n  padding: 0 0.9rem;\n  font: inherit;\n  font-weight: 500;\n  background: #fff;\n}\n:host-context(.dark) .plate-report__field input,\n:host-context(.dark) .plate-report__field select {\n  background: rgb(15, 23, 42);\n  color: #e2e8f0;\n  border-color: rgb(71, 85, 105);\n}\n.plate-report__switch {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.5rem;\n  margin-bottom: 0.9rem;\n}\n.plate-report__switch button {\n  min-height: 2.75rem;\n  border-radius: 999px;\n  border: 1px solid rgb(203, 213, 225);\n  background: transparent;\n  font: inherit;\n  font-weight: 600;\n}\n.plate-report__switch button.is-active {\n  background: rgb(37, 99, 235);\n  border-color: rgb(37, 99, 235);\n  color: #fff;\n}\n.plate-report__submit {\n  width: 100%;\n  min-height: 3rem;\n  margin-top: 0.4rem;\n  border-radius: 0.9rem !important;\n}\n.plate-report__row {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 0.4rem;\n}\n.plate-report__error {\n  margin: 0 0 0.8rem;\n  color: rgb(190, 18, 60);\n  line-height: 1.4;\n}\n.plate-report__error span {\n  display: block;\n  font-size: 0.85rem;\n}\n.plate-report__status {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 0.75rem;\n  padding: 0.5rem 0 0.25rem;\n}\n.plate-report__link {\n  display: inline-block;\n  margin-top: 0.9rem;\n  color: rgb(37, 99, 235);\n}\n@media (min-width: 720px) {\n  .plate-report {\n    padding-top: 2.5rem;\n  }\n  .plate-report__card {\n    padding: 2rem 1.75rem 2rem;\n  }\n}\n/*# sourceMappingURL=plate-report.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PlateReportComponent, { className: "PlateReportComponent", filePath: "src/app/modules/plate-report/plate-report.component.ts", lineNumber: 64 });
})();
export {
  PlateReportComponent
};
//# sourceMappingURL=chunk-G3Q3LHIF.js.map
