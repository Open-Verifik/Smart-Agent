import {
  formatFleetLookupUsd
} from "./chunk-WDEOZECQ.js";
import {
  FleetNavComponent,
  SmartFleetService
} from "./chunk-GHIW2F4Y.js";
import {
  SubscriptionService
} from "./chunk-X5UH5JHC.js";
import {
  AuthRequiredGateService
} from "./chunk-QPU67QFB.js";
import {
  extractClientSettingsPayload,
  invoiceBillingDetailsComplete
} from "./chunk-FY4LH25C.js";
import {
  FuseConfirmationService
} from "./chunk-KFR5LC4M.js";
import "./chunk-6FS3LBOZ.js";
import {
  MatSnackBar
} from "./chunk-TXEVGTMX.js";
import "./chunk-CM2VR6FV.js";
import "./chunk-4U26N45P.js";
import "./chunk-WIGHP2N4.js";
import "./chunk-JURKDGMK.js";
import "./chunk-RM2644J3.js";
import "./chunk-AICPTZP5.js";
import "./chunk-VURK6DEU.js";
import "./chunk-E7WYNRWC.js";
import "./chunk-HWNQWMK7.js";
import "./chunk-ZQKMV4NA.js";
import "./chunk-OJPCXVQ6.js";
import "./chunk-6VDSDVMZ.js";
import "./chunk-BCBZJBUY.js";
import "./chunk-WSS6AKQE.js";
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
  NgModel,
  RangeValueAccessor
} from "./chunk-DVRFI3SJ.js";
import {
  TranslocoDirective,
  TranslocoModule,
  TranslocoService
} from "./chunk-R5W3A6HI.js";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-HYFP557I.js";
import {
  environment
} from "./chunk-PMCYMBOC.js";
import {
  CommonModule,
  Component,
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
  HttpClient,
  NgClass,
  NgTemplateOutlet,
  computed,
  firstValueFrom,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
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
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtextInterpolate5
} from "./chunk-PNPEHISK.js";
import {
  __async
} from "./chunk-F5M2C4EZ.js";

// src/app/modules/smart-fleet/plans/fleet-plans.component.ts
var _c0 = (a0) => ({ date: a0 });
var _c1 = (a0, a1) => ({ brand: a0, last4: a1 });
var _c2 = (a0) => ({ count: a0 });
var _c3 = (a0, a1) => ({ min: a0, max: a1 });
var _c4 = (a0, a1) => ({ credits: a0, usd: a1 });
var _c5 = (a0, a1, a2) => ({ credits: a0, usd: a1, count: a2 });
var _forTrack0 = ($index, $item) => $item.featureCode;
function FleetPlansComponent_ng_container_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275listener("click", function FleetPlansComponent_ng_container_0_Conditional_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goBack());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "arrow_back");
    \u0275\u0275elementEnd()();
  }
}
function FleetPlansComponent_ng_container_0_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "mat-spinner", 13);
    \u0275\u0275elementEnd();
  }
}
function FleetPlansComponent_ng_container_0_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "mat-icon", 14);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r3("smartFleet.plans.loadFailed"));
  }
}
function FleetPlansComponent_ng_container_0_Conditional_17_Conditional_0_Conditional_0_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r3("smartFleet.plans.statusPaymentFailed"));
  }
}
function FleetPlansComponent_ng_container_0_Conditional_17_Conditional_0_Conditional_0_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r3("smartFleet.plans.statusCancelling"));
  }
}
function FleetPlansComponent_ng_container_0_Conditional_17_Conditional_0_Conditional_0_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r3("smartFleet.plans.statusActive"));
  }
}
function FleetPlansComponent_ng_container_0_Conditional_17_Conditional_0_Conditional_0_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "mat-icon", 14);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r3("smartFleet.plans.paymentFailedHint"));
  }
}
function FleetPlansComponent_ng_container_0_Conditional_17_Conditional_0_Conditional_0_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const current_r5 = \u0275\u0275nextContext();
    const t_r3 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r3("smartFleet.plans.endsOn", \u0275\u0275pureFunction1(4, _c0, \u0275\u0275pipeBind2(2, 1, current_r5.cancelAt || current_r5.endDate, "longDate"))));
  }
}
function FleetPlansComponent_ng_container_0_Conditional_17_Conditional_0_Conditional_0_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const current_r5 = \u0275\u0275nextContext();
    const t_r3 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r3("smartFleet.plans.nextPayment", \u0275\u0275pureFunction1(4, _c0, \u0275\u0275pipeBind2(2, 1, current_r5.endDate, "longDate"))));
  }
}
function FleetPlansComponent_ng_container_0_Conditional_17_Conditional_0_Conditional_0_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 60);
    \u0275\u0275elementStart(1, "span", 61);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(4).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r1.cardLogo("link"), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("smartFleet.plans.paidWithLink"));
  }
}
function FleetPlansComponent_ng_container_0_Conditional_17_Conditional_0_Conditional_0_Conditional_31_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 64);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const current_r5 = \u0275\u0275nextContext(2);
    const t_r3 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3("", t_r3("smartFleet.plans.expires"), " ", current_r5.cardExpMonth, "/", current_r5.cardExpYear, "");
  }
}
function FleetPlansComponent_ng_container_0_Conditional_17_Conditional_0_Conditional_0_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 62);
    \u0275\u0275elementStart(1, "div", 63)(2, "span", 61);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, FleetPlansComponent_ng_container_0_Conditional_17_Conditional_0_Conditional_0_Conditional_31_Conditional_4_Template, 2, 3, "span", 64);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const current_r5 = \u0275\u0275nextContext();
    const t_r3 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r1.cardLogo(current_r5.cardBrand), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r3("smartFleet.plans.cardEnding", \u0275\u0275pureFunction2(3, _c1, current_r5.cardBrand, current_r5.lastFour)));
    \u0275\u0275advance();
    \u0275\u0275conditional(current_r5.cardExpMonth ? 4 : -1);
  }
}
function FleetPlansComponent_ng_container_0_Conditional_17_Conditional_0_Conditional_0_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 65);
    \u0275\u0275text(1, "credit_card_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 66);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r3("smartFleet.plans.noCard"));
  }
}
function FleetPlansComponent_ng_container_0_Conditional_17_Conditional_0_Conditional_0_ng_container_85_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function FleetPlansComponent_ng_container_0_Conditional_17_Conditional_0_Conditional_0_Conditional_89_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 67);
    \u0275\u0275listener("click", function FleetPlansComponent_ng_container_0_Conditional_17_Conditional_0_Conditional_0_Conditional_89_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.resumePlan());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(4).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r1.isWorking());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r3("smartFleet.plans.resume"), " ");
  }
}
function FleetPlansComponent_ng_container_0_Conditional_17_Conditional_0_Conditional_0_Conditional_90_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 68);
    \u0275\u0275listener("click", function FleetPlansComponent_ng_container_0_Conditional_17_Conditional_0_Conditional_0_Conditional_90_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.cancelPlan());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(4).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r1.isWorking());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r3("smartFleet.plans.cancel"), " ");
  }
}
function FleetPlansComponent_ng_container_0_Conditional_17_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 16)(2, "div", 17)(3, "div", 18)(4, "mat-icon");
    \u0275\u0275text(5, "workspace_premium");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div")(7, "p", 19);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "h2", 20);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 21);
    \u0275\u0275element(12, "span", 22);
    \u0275\u0275template(13, FleetPlansComponent_ng_container_0_Conditional_17_Conditional_0_Conditional_0_Conditional_13_Template, 2, 1, "span")(14, FleetPlansComponent_ng_container_0_Conditional_17_Conditional_0_Conditional_0_Conditional_14_Template, 2, 1, "span")(15, FleetPlansComponent_ng_container_0_Conditional_17_Conditional_0_Conditional_0_Conditional_15_Template, 2, 1, "span");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(16, FleetPlansComponent_ng_container_0_Conditional_17_Conditional_0_Conditional_0_Conditional_16_Template, 5, 1, "div", 11);
    \u0275\u0275elementStart(17, "div", 23)(18, "div", 24)(19, "div", 25);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 26);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "currency");
    \u0275\u0275elementStart(24, "span", 27);
    \u0275\u0275text(25, "USD");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 28);
    \u0275\u0275template(27, FleetPlansComponent_ng_container_0_Conditional_17_Conditional_0_Conditional_0_Conditional_27_Template, 3, 6, "span")(28, FleetPlansComponent_ng_container_0_Conditional_17_Conditional_0_Conditional_0_Conditional_28_Template, 3, 6, "span");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 29);
    \u0275\u0275template(30, FleetPlansComponent_ng_container_0_Conditional_17_Conditional_0_Conditional_0_Conditional_30_Template, 3, 2)(31, FleetPlansComponent_ng_container_0_Conditional_17_Conditional_0_Conditional_0_Conditional_31_Template, 5, 6)(32, FleetPlansComponent_ng_container_0_Conditional_17_Conditional_0_Conditional_0_Conditional_32_Template, 4, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 30)(34, "div", 31)(35, "div", 32)(36, "mat-icon");
    \u0275\u0275text(37, "directions_car");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 33)(39, "span", 34);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "span", 35);
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "mat-icon", 36);
    \u0275\u0275text(45, "check_circle");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 31)(47, "div", 37)(48, "mat-icon");
    \u0275\u0275text(49, "local_shipping");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div", 33)(51, "span", 34);
    \u0275\u0275text(52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "span", 35);
    \u0275\u0275text(54);
    \u0275\u0275pipe(55, "number");
    \u0275\u0275pipe(56, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "mat-icon", 38);
    \u0275\u0275text(58);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "div", 31)(60, "div", 39)(61, "mat-icon");
    \u0275\u0275text(62, "payments");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "div", 33)(64, "span", 34);
    \u0275\u0275text(65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "span", 35);
    \u0275\u0275text(67);
    \u0275\u0275pipe(68, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(69, "mat-icon", 36);
    \u0275\u0275text(70, "check_circle");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(71, "div", 31)(72, "div", 40)(73, "mat-icon");
    \u0275\u0275text(74, "description");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(75, "div", 33)(76, "span", 34);
    \u0275\u0275text(77);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "span", 35);
    \u0275\u0275text(79);
    \u0275\u0275pipe(80, "number");
    \u0275\u0275elementStart(81, "span", 41);
    \u0275\u0275text(82);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(83, "mat-icon", 36);
    \u0275\u0275text(84, "receipt_long");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(85, FleetPlansComponent_ng_container_0_Conditional_17_Conditional_0_Conditional_0_ng_container_85_Template, 1, 0, "ng-container", 42);
    \u0275\u0275elementStart(86, "div", 43)(87, "button", 44);
    \u0275\u0275listener("click", function FleetPlansComponent_ng_container_0_Conditional_17_Conditional_0_Conditional_0_Template_button_click_87_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.manageBilling());
    });
    \u0275\u0275text(88);
    \u0275\u0275elementEnd();
    \u0275\u0275template(89, FleetPlansComponent_ng_container_0_Conditional_17_Conditional_0_Conditional_0_Conditional_89_Template, 2, 2, "button", 45)(90, FleetPlansComponent_ng_container_0_Conditional_17_Conditional_0_Conditional_0_Conditional_90_Template, 2, 2, "button", 46);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(91, "div", 47)(92, "div", 48)(93, "div", 49)(94, "div", 50)(95, "mat-icon");
    \u0275\u0275text(96, "auto_awesome");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(97, "span");
    \u0275\u0275text(98);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(99, "h2", 51);
    \u0275\u0275text(100);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(101, "p", 52);
    \u0275\u0275text(102);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(103, "div", 53)(104, "div", 54)(105, "mat-icon");
    \u0275\u0275text(106, "local_shipping");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(107, "div", 55)(108, "mat-icon");
    \u0275\u0275text(109, "notifications_active");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(110, "div", 56)(111, "mat-icon");
    \u0275\u0275text(112, "description");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(113, "div", 57)(114, "button", 58);
    \u0275\u0275listener("click", function FleetPlansComponent_ng_container_0_Conditional_17_Conditional_0_Conditional_0_Template_button_click_114_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.changeView("change"));
    });
    \u0275\u0275elementStart(115, "span");
    \u0275\u0275text(116);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(117, "mat-icon");
    \u0275\u0275text(118, "arrow_forward");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(119, "span", 59);
    \u0275\u0275text(120);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_21_0;
    let tmp_22_0;
    let tmp_23_0;
    let tmp_27_0;
    const current_r5 = ctx;
    const t_r3 = \u0275\u0275nextContext(3).$implicit;
    const creditsInfo_r8 = \u0275\u0275reference(19);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("payment-failed", current_r5.paymentFailedAt);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", current_r5.tier || "plus");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(t_r3("smartFleet.plans.yourPlan"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(current_r5.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", current_r5.paymentFailedAt ? "error" : current_r5.cancelAtPeriodEnd ? "warning" : "success");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(current_r5.paymentFailedAt ? 13 : current_r5.cancelAtPeriodEnd ? 14 : 15);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(current_r5.paymentFailedAt ? 16 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r3("smartFleet.plans.monthlyValue"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(23, 35, ctx_r1.planMonthlyTotal()), " ");
    \u0275\u0275advance(5);
    \u0275\u0275conditional(current_r5.cancelAtPeriodEnd ? 27 : current_r5.endDate ? 28 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(current_r5.cardBrand === "link" ? 30 : current_r5.cardBrand && current_r5.lastFour ? 31 : 32);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(t_r3("smartFleet.plans.vehicleSlots"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(43, 37, current_r5.assetLimit));
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(t_r3("smartFleet.plans.vehiclesInUse"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(55, 39, ctx_r1.activeAssets()), " / ", \u0275\u0275pipeBind1(56, 41, (tmp_21_0 = ctx_r1.usage()) == null ? null : tmp_21_0.limit), "");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r1.activeAssets() < ((tmp_22_0 = (tmp_22_0 = ctx_r1.usage()) == null ? null : tmp_22_0.limit) !== null && tmp_22_0 !== void 0 ? tmp_22_0 : 0));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.activeAssets() < ((tmp_23_0 = (tmp_23_0 = ctx_r1.usage()) == null ? null : tmp_23_0.limit) !== null && tmp_23_0 !== void 0 ? tmp_23_0 : 0) ? "check_circle" : "error_outline", " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(t_r3("smartFleet.plans.pricePerVehicle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(68, 43, current_r5.amount));
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(t_r3("smartFleet.plans.reportCreditsMonth"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(80, 45, ((tmp_27_0 = ctx_r1.reports()) == null ? null : tmp_27_0.credits) || 0, "1.0-2"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("(", ctx_r1.formatUsd(ctx_r1.reportsCreditsMonth()), ")");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngTemplateOutlet", creditsInfo_r8);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("error", current_r5.paymentFailedAt);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r3("smartFleet.plans.manageBilling"), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(current_r5.cancelAtPeriodEnd ? 89 : 90);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(t_r3("smartFleet.plans.upgradeAvailable"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("smartFleet.plans.betterPlan"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("smartFleet.plans.betterPlanText"));
    \u0275\u0275advance(14);
    \u0275\u0275textInterpolate(t_r3("smartFleet.plans.explorePlans"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r3("smartFleet.plans.noCommitment"));
  }
}
function FleetPlansComponent_ng_container_0_Conditional_17_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, FleetPlansComponent_ng_container_0_Conditional_17_Conditional_0_Conditional_0_Template, 121, 48);
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional((tmp_5_0 = ctx_r1.plan()) ? 0 : -1, tmp_5_0);
  }
}
function FleetPlansComponent_ng_container_0_Conditional_17_Conditional_1_For_7_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 82);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const key_r11 = \u0275\u0275nextContext(2).$implicit;
    const t_r3 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275classProp("current-plan-badge--offset", key_r11 === "business");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r3("smartFleet.plans.currentPlanBadge"), " ");
  }
}
function FleetPlansComponent_ng_container_0_Conditional_17_Conditional_1_For_7_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 90);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(5).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r3("smartFleet.plans.bestPrice"));
  }
}
function FleetPlansComponent_ng_container_0_Conditional_17_Conditional_1_For_7_Conditional_0_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "mat-icon");
    \u0275\u0275text(2, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(5).$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r3("smartFleet.plans.benefitLowerPrice"));
  }
}
function FleetPlansComponent_ng_container_0_Conditional_17_Conditional_1_For_7_Conditional_0_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 96);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(5).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r3("smartFleet.plans.notAvailableHint"), " ");
  }
}
function FleetPlansComponent_ng_container_0_Conditional_17_Conditional_1_For_7_Conditional_0_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(5).$implicit;
    \u0275\u0275textInterpolate1(" ", t_r3("smartFleet.plans.notAvailable"), " ");
  }
}
function FleetPlansComponent_ng_container_0_Conditional_17_Conditional_1_For_7_Conditional_0_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(5).$implicit;
    \u0275\u0275textInterpolate1(" ", t_r3("smartFleet.plans.tooManyVehicles"), " ");
  }
}
function FleetPlansComponent_ng_container_0_Conditional_17_Conditional_1_For_7_Conditional_0_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const key_r11 = \u0275\u0275nextContext(2).$implicit;
    const t_r3 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isCurrentTier(key_r11) ? t_r3("smartFleet.plans.adjustSlots") : t_r3("smartFleet.plans.viewPlan"), " ");
  }
}
function FleetPlansComponent_ng_container_0_Conditional_17_Conditional_1_For_7_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 72);
    \u0275\u0275template(1, FleetPlansComponent_ng_container_0_Conditional_17_Conditional_1_For_7_Conditional_0_Conditional_1_Template, 2, 3, "div", 89)(2, FleetPlansComponent_ng_container_0_Conditional_17_Conditional_1_For_7_Conditional_0_Conditional_2_Template, 2, 1, "div", 90);
    \u0275\u0275elementStart(3, "div", 91);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 74)(6, "span", 84);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 85);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "p", 76);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 92)(14, "div", 93)(15, "span", 94);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 95);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 93)(21, "span", 94);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 95);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 77)(26, "p", 78);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "ul", 79)(29, "li")(30, "mat-icon");
    \u0275\u0275text(31, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275text(32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "li")(34, "mat-icon");
    \u0275\u0275text(35, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275text(36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "li")(38, "mat-icon");
    \u0275\u0275text(39, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275text(40);
    \u0275\u0275elementEnd();
    \u0275\u0275template(41, FleetPlansComponent_ng_container_0_Conditional_17_Conditional_1_For_7_Conditional_0_Conditional_41_Template, 4, 1, "li");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(42, FleetPlansComponent_ng_container_0_Conditional_17_Conditional_1_For_7_Conditional_0_Conditional_42_Template, 2, 1, "p", 96);
    \u0275\u0275elementStart(43, "button", 97);
    \u0275\u0275listener("click", function FleetPlansComponent_ng_container_0_Conditional_17_Conditional_1_For_7_Conditional_0_Template_button_click_43_listener() {
      \u0275\u0275restoreView(_r10);
      const key_r11 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.changeView("select", key_r11));
    });
    \u0275\u0275template(44, FleetPlansComponent_ng_container_0_Conditional_17_Conditional_1_For_7_Conditional_0_Conditional_44_Template, 1, 1)(45, FleetPlansComponent_ng_container_0_Conditional_17_Conditional_1_For_7_Conditional_0_Conditional_45_Template, 1, 1)(46, FleetPlansComponent_ng_container_0_Conditional_17_Conditional_1_For_7_Conditional_0_Conditional_46_Template, 1, 1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_23_0;
    const tier_r12 = ctx;
    const key_r11 = \u0275\u0275nextContext().$implicit;
    const t_r3 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("featured", key_r11 === "business")("select-plan-card--current", ctx_r1.isCurrentTier(key_r11));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isCurrentTier(key_r11) ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(key_r11 === "business" ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", key_r11);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r3("smartFleet.plans.tier." + key_r11));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 25, (tmp_23_0 = tier_r12.amount) !== null && tmp_23_0 !== void 0 ? tmp_23_0 : 0));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("/", t_r3("smartFleet.plans.perVehicleMonth"), "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r3("smartFleet.plans.vehicleRange", \u0275\u0275pureFunction2(29, _c3, tier_r12.minAssets, tier_r12.maxAssets)), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r3("smartFleet.plans.startingAt"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(19, 27, ctx_r1.tierStartingPrice(key_r11)), "/", t_r3("smartFleet.plans.month"), "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r3("smartFleet.plans.usageCredits"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("smartFleet.plans.perEndpointUsd"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r3("smartFleet.plans.included"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(t_r3("smartFleet.plans.benefitMonitoring"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r3("smartFleet.plans.benefitAlerts"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r3("smartFleet.plans.benefitReports"));
    \u0275\u0275advance();
    \u0275\u0275conditional(key_r11 === "business" ? 41 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!tier_r12.available ? 42 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", key_r11)("disabled", !tier_r12.available || !ctx_r1.tierFits(key_r11));
    \u0275\u0275advance();
    \u0275\u0275conditional(!tier_r12.available ? 44 : !ctx_r1.tierFits(key_r11) ? 45 : 46);
  }
}
function FleetPlansComponent_ng_container_0_Conditional_17_Conditional_1_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, FleetPlansComponent_ng_container_0_Conditional_17_Conditional_1_For_7_Conditional_0_Template, 47, 32, "div", 88);
  }
  if (rf & 2) {
    let tmp_15_0;
    const key_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275conditional((tmp_15_0 = ctx_r1.tierOf(key_r11)) ? 0 : -1, tmp_15_0);
  }
}
function FleetPlansComponent_ng_container_0_Conditional_17_Conditional_1_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 82);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r3("smartFleet.plans.currentPlanBadge"));
  }
}
function FleetPlansComponent_ng_container_0_Conditional_17_Conditional_1_Conditional_62_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 98);
    \u0275\u0275listener("click", function FleetPlansComponent_ng_container_0_Conditional_17_Conditional_1_Conditional_62_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.cancelPlan());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "arrow_forward");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r1.isWorking());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r3("smartFleet.plans.switchToFree"), " ");
  }
}
function FleetPlansComponent_ng_container_0_Conditional_17_Conditional_1_ng_container_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function FleetPlansComponent_ng_container_0_Conditional_17_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "h2", 69);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 70);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 71);
    \u0275\u0275repeaterCreate(6, FleetPlansComponent_ng_container_0_Conditional_17_Conditional_1_For_7_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(8, "div", 72)(9, "div", 73);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 74)(12, "span", 75);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "p", 76);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 77)(18, "p", 78);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "ul", 79)(21, "li")(22, "mat-icon");
    \u0275\u0275text(23, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "li")(26, "mat-icon");
    \u0275\u0275text(27, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "li")(30, "mat-icon");
    \u0275\u0275text(31, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "button", 80);
    \u0275\u0275listener("click", function FleetPlansComponent_ng_container_0_Conditional_17_Conditional_1_Template_button_click_33_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.purchaseEnterprise());
    });
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(35, "div", 81);
    \u0275\u0275template(36, FleetPlansComponent_ng_container_0_Conditional_17_Conditional_1_Conditional_36_Template, 2, 1, "div", 82);
    \u0275\u0275elementStart(37, "div", 83);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 74)(40, "span", 84);
    \u0275\u0275text(41, "$0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "span", 85);
    \u0275\u0275text(43);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "p", 76);
    \u0275\u0275text(45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 77)(47, "p", 78);
    \u0275\u0275text(48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "ul", 79)(50, "li")(51, "mat-icon");
    \u0275\u0275text(52, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275text(53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "li")(55, "mat-icon");
    \u0275\u0275text(56, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275text(57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "li")(59, "mat-icon");
    \u0275\u0275text(60, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275text(61);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(62, FleetPlansComponent_ng_container_0_Conditional_17_Conditional_1_Conditional_62_Template, 4, 2, "button", 86);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "div", 87);
    \u0275\u0275template(64, FleetPlansComponent_ng_container_0_Conditional_17_Conditional_1_ng_container_64_Template, 1, 0, "ng-container", 42);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_10_0;
    let tmp_20_0;
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    const creditsInfo_r8 = \u0275\u0275reference(19);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("smartFleet.plans.selectPlan"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("smartFleet.plans.chooseBestPlan"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.tierKeys);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r3("smartFleet.plans.tier.enterprise"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r3("smartFleet.plans.contactSales"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("+", \u0275\u0275pipeBind1(16, 23, (tmp_10_0 = ctx_r1.usage()) == null ? null : tmp_10_0.enterpriseFrom), " ", t_r3("smartFleet.plans.vehicles"), "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r3("smartFleet.plans.included"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(t_r3("smartFleet.plans.everythingInBusiness"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r3("smartFleet.plans.customPricing"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r3("smartFleet.plans.dedicatedSupport"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r3("smartFleet.plans.contactSales"), " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("select-plan-card--current", ctx_r1.isCurrentTier("free"));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isCurrentTier("free") ? 36 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("smartFleet.plans.tier.free"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("/", t_r3("smartFleet.plans.month"), "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("smartFleet.plans.freeRange", \u0275\u0275pureFunction1(25, _c2, (tmp_20_0 = (tmp_20_0 = ctx_r1.usage()) == null ? null : tmp_20_0.freeLimit) !== null && tmp_20_0 !== void 0 ? tmp_20_0 : 0)));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r3("smartFleet.plans.included"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(t_r3("smartFleet.plans.freeSetup"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r3("smartFleet.plans.benefitReports"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r3("smartFleet.plans.freeNoRuns"));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isRenewing() ? 62 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", creditsInfo_r8);
  }
}
function FleetPlansComponent_ng_container_0_Conditional_17_Conditional_2_Conditional_0_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 108);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(4).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r3("smartFleet.plans.minHint", \u0275\u0275pureFunction1(1, _c2, ctx_r1.activeAssets())));
  }
}
function FleetPlansComponent_ng_container_0_Conditional_17_Conditional_2_Conditional_0_Conditional_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 122);
  }
}
function FleetPlansComponent_ng_container_0_Conditional_17_Conditional_2_Conditional_0_Conditional_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275textInterpolate1(" ", t_r3("smartFleet.plans.noChange"), " ");
  }
}
function FleetPlansComponent_ng_container_0_Conditional_17_Conditional_2_Conditional_0_Conditional_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275textInterpolate1(" ", t_r3("smartFleet.plans.applyChange"), " ");
  }
}
function FleetPlansComponent_ng_container_0_Conditional_17_Conditional_2_Conditional_0_Conditional_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275textInterpolate1(" ", t_r3("smartFleet.plans.purchase"), " ");
  }
}
function FleetPlansComponent_ng_container_0_Conditional_17_Conditional_2_Conditional_0_ng_container_77_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function FleetPlansComponent_ng_container_0_Conditional_17_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 99)(1, "h2", 100);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 101);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 102)(6, "span", 103);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 104)(10, "div", 105)(11, "input", 106);
    \u0275\u0275listener("ngModelChange", function FleetPlansComponent_ng_container_0_Conditional_17_Conditional_2_Conditional_0_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.setSlots($event));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "span", 103);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 107)(16, "strong");
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, FleetPlansComponent_ng_container_0_Conditional_17_Conditional_2_Conditional_0_Conditional_20_Template, 2, 3, "p", 108);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 109)(22, "div", 110)(23, "div", 111)(24, "div", 112)(25, "mat-icon");
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span");
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "span", 113);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 114)(32, "span", 27);
    \u0275\u0275text(33, "$");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "span", 115);
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "span", 28);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(39, "div", 116)(40, "div", 117)(41, "mat-icon");
    \u0275\u0275text(42, "directions_car");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "span", 95);
    \u0275\u0275text(44);
    \u0275\u0275pipe(45, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "span", 94);
    \u0275\u0275text(47);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(48, "div", 118);
    \u0275\u0275elementStart(49, "div", 117)(50, "mat-icon");
    \u0275\u0275text(51, "payments");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "span", 95);
    \u0275\u0275text(53);
    \u0275\u0275pipe(54, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "span", 94);
    \u0275\u0275text(56);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(57, "div", 118);
    \u0275\u0275elementStart(58, "div", 117)(59, "mat-icon");
    \u0275\u0275text(60, "toll");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "span", 95);
    \u0275\u0275text(62);
    \u0275\u0275pipe(63, "number");
    \u0275\u0275elementStart(64, "span", 119);
    \u0275\u0275text(65);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(66, "span", 94);
    \u0275\u0275text(67);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(68, "div", 120)(69, "button", 121);
    \u0275\u0275listener("click", function FleetPlansComponent_ng_container_0_Conditional_17_Conditional_2_Conditional_0_Template_button_click_69_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.checkout());
    });
    \u0275\u0275template(70, FleetPlansComponent_ng_container_0_Conditional_17_Conditional_2_Conditional_0_Conditional_70_Template, 1, 0, "mat-spinner", 122)(71, FleetPlansComponent_ng_container_0_Conditional_17_Conditional_2_Conditional_0_Conditional_71_Template, 1, 1)(72, FleetPlansComponent_ng_container_0_Conditional_17_Conditional_2_Conditional_0_Conditional_72_Template, 1, 1)(73, FleetPlansComponent_ng_container_0_Conditional_17_Conditional_2_Conditional_0_Conditional_73_Template, 1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "p", 123);
    \u0275\u0275text(75);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(76, "div", 87);
    \u0275\u0275template(77, FleetPlansComponent_ng_container_0_Conditional_17_Conditional_2_Conditional_0_ng_container_77_Template, 1, 0, "ng-container", 42);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_29_0;
    const selected_r15 = ctx;
    const t_r3 = \u0275\u0275nextContext(3).$implicit;
    const creditsInfo_r8 = \u0275\u0275reference(19);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("smartFleet.plans.howManyVehicles"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r3("smartFleet.plans.selectVolume", \u0275\u0275pureFunction2(50, _c3, ctx_r1.sliderMin(), ctx_r1.sliderMax())), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 34, ctx_r1.sliderMin()));
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("--track-fill-percentage", ctx_r1.sliderPercent() + "%");
    \u0275\u0275advance();
    \u0275\u0275property("min", ctx_r1.sliderMin())("max", ctx_r1.sliderMax())("ngModel", ctx_r1.slots());
    \u0275\u0275attribute("aria-label", t_r3("smartFleet.plans.vehicles"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 36, ctx_r1.sliderMax()));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 38, ctx_r1.slots()));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r3("smartFleet.plans.vehicles"), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.activeAssets() > selected_r15.minAssets ? 20 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", "checkout-" + selected_r15.key);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", "header-" + selected_r15.key);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", selected_r15.key);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(selected_r15.key === "plus" ? "star" : "diamond");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(selected_r15.name || t_r3("smartFleet.plans.tier." + selected_r15.key));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("smartFleet.plans.perVehicle"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(36, 40, ctx_r1.monthlyTotal(), "1.0-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("/", t_r3("smartFleet.plans.month"), "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(45, 43, ctx_r1.slots()));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r3("smartFleet.plans.vehicles"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(54, 45, (tmp_29_0 = selected_r15.amount) !== null && tmp_29_0 !== void 0 ? tmp_29_0 : 0));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r3("smartFleet.plans.pricePerVehicle"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("~", \u0275\u0275pipeBind2(63, 47, ctx_r1.monitoringCredits(), "1.0-2"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("(", ctx_r1.formatUsd(ctx_r1.monitoringCredits()), ")");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("smartFleet.plans.monitoringCredits"));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isWorking() || ctx_r1.isUnchanged())("ngClass", selected_r15.key);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isWorking() ? 70 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isUnchanged() ? 71 : ctx_r1.isRenewing() ? 72 : 73);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.isRenewing() ? t_r3("smartFleet.plans.prorationHint") : t_r3("smartFleet.plans.stripeHint"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", creditsInfo_r8);
  }
}
function FleetPlansComponent_ng_container_0_Conditional_17_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, FleetPlansComponent_ng_container_0_Conditional_17_Conditional_2_Conditional_0_Template, 78, 53);
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional((tmp_5_0 = ctx_r1.tier()) ? 0 : -1, tmp_5_0);
  }
}
function FleetPlansComponent_ng_container_0_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, FleetPlansComponent_ng_container_0_Conditional_17_Conditional_0_Template, 1, 1)(1, FleetPlansComponent_ng_container_0_Conditional_17_Conditional_1_Template, 65, 27)(2, FleetPlansComponent_ng_container_0_Conditional_17_Conditional_2_Template, 1, 1);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r1.view() === "current" ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.view() === "change" ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.view() === "select" ? 2 : -1);
  }
}
function FleetPlansComponent_ng_container_0_ng_template_18_Conditional_41_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 148)(1, "span", 150);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 151);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const line_r16 = ctx.$implicit;
    const t_r3 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(line_r16.featureCode);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate5(" ", line_r16.checksPerMonth, " \xD7 ", \u0275\u0275pipeBind2(5, 6, line_r16.pricePerCheck, "1.0-4"), " = ", \u0275\u0275pipeBind2(6, 9, line_r16.creditsPerAsset, "1.0-2"), " ", t_r3("smartFleet.plans.creditsPerAssetMonth"), " \xB7 ", ctx_r1.formatUsd(line_r16.creditsPerAsset), " ");
  }
}
function FleetPlansComponent_ng_container_0_ng_template_18_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 143)(1, "p", 129);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 146);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "ul", 147);
    \u0275\u0275repeaterCreate(6, FleetPlansComponent_ng_container_0_ng_template_18_Conditional_41_For_7_Template, 7, 12, "li", 148, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 149);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r3("smartFleet.plans.creditsBreakdownTitle"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r3("smartFleet.plans.creditsBreakdownHint"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.creditBreakdown());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r3("smartFleet.plans.creditsPerAssetSummary", \u0275\u0275pureFunction2(6, _c4, \u0275\u0275pipeBind2(10, 3, ctx_r1.creditsPerAssetMonth(), "1.0-2"), ctx_r1.formatUsd(ctx_r1.creditsPerAssetMonth()))), " ");
  }
}
function FleetPlansComponent_ng_container_0_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 124)(1, "h3", 125);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 126);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 127)(6, "div", 128)(7, "p", 129);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 130);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 131)(12, "p", 132);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p", 133);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "h4", 134);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "p", 135);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 136)(21, "div", 137)(22, "div", 138)(23, "mat-icon");
    \u0275\u0275text(24, "event_repeat");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 139)(26, "span", 140);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span", 141);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "div", 137)(32, "div", 142)(33, "mat-icon");
    \u0275\u0275text(34, "description");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 139)(36, "span", 140);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "span", 141);
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "number");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(41, FleetPlansComponent_ng_container_0_ng_template_18_Conditional_41_Template, 11, 9, "div", 143);
    \u0275\u0275elementStart(42, "a", 144)(43, "mat-icon", 145);
    \u0275\u0275text(44, "add_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(45);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_13_0;
    let tmp_15_0;
    const t_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("smartFleet.plans.pricingModelTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("smartFleet.plans.pricingModelBody"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r3("smartFleet.plans.subscriptionBlockTitle"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r3("smartFleet.plans.subscriptionBlockBody"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r3("smartFleet.plans.usageBlockTitle"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r3("smartFleet.plans.usageBlockBody"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("smartFleet.plans.creditsTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("smartFleet.plans.creditsSubtitle"));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(t_r3("smartFleet.plans.creditsMonitoring"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("smartFleet.plans.creditsMonitoringValueUsd", \u0275\u0275pureFunction2(20, _c4, \u0275\u0275pipeBind2(30, 14, ((tmp_13_0 = ctx_r1.overview()) == null ? null : tmp_13_0.projectedMonthlyCredits == null ? null : tmp_13_0.projectedMonthlyCredits.totalCredits) || 0, "1.0-2"), ctx_r1.formatUsd(((tmp_13_0 = ctx_r1.overview()) == null ? null : tmp_13_0.projectedMonthlyCredits == null ? null : tmp_13_0.projectedMonthlyCredits.totalCredits) || 0))));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(t_r3("smartFleet.plans.creditsReports"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("smartFleet.plans.creditsReportsValueUsd", \u0275\u0275pureFunction3(23, _c5, \u0275\u0275pipeBind2(40, 17, ((tmp_15_0 = ctx_r1.reports()) == null ? null : tmp_15_0.credits) || 0, "1.0-2"), ctx_r1.formatUsd(ctx_r1.reportsCreditsMonth()), ((tmp_15_0 = ctx_r1.reports()) == null ? null : tmp_15_0.vehicles) || 0)));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.creditBreakdown().length ? 41 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r3("smartFleet.plans.addCredits"), " ");
  }
}
function FleetPlansComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 2)(2, "div", 3)(3, "div", 4);
    \u0275\u0275element(4, "fleet-nav");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 5);
    \u0275\u0275template(6, FleetPlansComponent_ng_container_0_Conditional_6_Template, 3, 0, "button", 6);
    \u0275\u0275elementStart(7, "div", 7)(8, "mat-icon");
    \u0275\u0275text(9, "local_shipping");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div")(11, "h1", 8);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p", 9);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(15, FleetPlansComponent_ng_container_0_Conditional_15_Template, 2, 0, "div", 10)(16, FleetPlansComponent_ng_container_0_Conditional_16_Template, 5, 1, "div", 11)(17, FleetPlansComponent_ng_container_0_Conditional_17_Template, 3, 3);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(18, FleetPlansComponent_ng_container_0_ng_template_18_Template, 46, 27, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r1.view() === "select" || ctx_r1.view() === "change" && ctx_r1.plan() ? 6 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(t_r3("smartFleet.plans.title"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("smartFleet.plans.subtitle"));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isLoading() && !ctx_r1.overview() ? 15 : ctx_r1.loadFailed() && !ctx_r1.overview() ? 16 : 17);
  }
}
var PLANS_URL = "/smart-fleet/plans";
var CARD_LOGOS = {
  amex: "https://cdn.verifik.co/assets/billing-svg/AmericanExpressLogo.svg",
  link: "https://cdn.verifik.co/assets/billing-svg/StripeLinkLogo.svg",
  mastercard: "https://cdn.verifik.co/assets/billing-svg/MasterCardLogo.svg",
  visa: "https://cdn.verifik.co/assets/billing-svg/VisaLogo.svg"
};
var ENTERPRISE_URLS = {
  es: "https://api.whatsapp.com/send?phone=573208184565&text=%C2%A1Hola!%20estoy%20interesado%20en%20un%20plan%20enterprise%20de%20Smart%20Fleet.",
  en: "https://api.whatsapp.com/send?phone=573208184565&text=Hello!%20I%20am%20interested%20in%20a%20Smart%20Fleet%20enterprise%20plan."
};
var FleetPlansComponent = class _FleetPlansComponent {
  constructor() {
    this._fleet = inject(SmartFleetService);
    this._subscriptions = inject(SubscriptionService);
    this._http = inject(HttpClient);
    this._route = inject(ActivatedRoute);
    this._router = inject(Router);
    this._authGate = inject(AuthRequiredGateService);
    this._confirm = inject(FuseConfirmationService);
    this._snackBar = inject(MatSnackBar);
    this._transloco = inject(TranslocoService);
    this.tierKeys = ["plus", "business"];
    this.overview = signal(null);
    this.isLoading = signal(true);
    this.loadFailed = signal(false);
    this.isWorking = signal(false);
    this.view = signal("change");
    this.selectedTier = signal(null);
    this.slots = signal(1);
    this.plan = computed(() => this.overview()?.plan ?? null);
    this.usage = computed(() => this.overview()?.usage ?? null);
    this.reports = computed(() => this.overview()?.reports ?? null);
    this.activeAssets = computed(() => this.usage()?.activeAssets ?? 0);
    this.isRenewing = computed(() => Boolean(this.plan() && !this.plan().cancelAtPeriodEnd));
    this.tier = computed(() => this._tierOf(this.selectedTier()));
    this.sliderMin = computed(() => {
      const tier = this.tier();
      return tier ? Math.min(tier.maxAssets, Math.max(tier.minAssets, this.activeAssets())) : 1;
    });
    this.sliderMax = computed(() => this.tier()?.maxAssets ?? 1);
    this.sliderPercent = computed(() => {
      const span = this.sliderMax() - this.sliderMin();
      return span > 0 ? (this.slots() - this.sliderMin()) / span * 100 : 100;
    });
    this.monthlyTotal = computed(() => this.slots() * Number(this.tier()?.amount ?? 0));
    this.planMonthlyTotal = computed(() => (this.plan()?.assetLimit ?? 0) * Number(this.plan()?.amount ?? 0));
    this.monitoringCredits = computed(() => this.slots() * (this.overview()?.projectedMonthlyCredits?.creditsPerAsset ?? 0));
    this.creditBreakdown = computed(() => this.overview()?.projectedMonthlyCredits?.breakdown ?? []);
    this.reportsCreditsMonth = computed(() => this.reports()?.credits ?? 0);
    this.isUnchanged = computed(() => this.isRenewing() && this.plan()?.tier === this.selectedTier() && this.plan()?.assetLimit === this.slots());
  }
  ngOnInit() {
    this._authGate.runWithAuthOrDialog({
      onAuthenticated: () => this._enter(),
      panelClass: "auth-required-dialog"
    });
  }
  tierOf(key) {
    return this._tierOf(key);
  }
  isCurrentTier(key) {
    if (key === "free")
      return !this.isRenewing();
    return this.isRenewing() && this.plan()?.tier === key;
  }
  /** A tier is out of reach once the fleet already has more active vehicles than it covers. */
  tierFits(key) {
    const tier = this._tierOf(key);
    return Boolean(tier) && this.activeAssets() <= tier.maxAssets;
  }
  tierStartingPrice(key) {
    const tier = this._tierOf(key);
    return tier ? tier.minAssets * Number(tier.amount ?? 0) : 0;
  }
  creditsPerAssetMonth() {
    return this.overview()?.projectedMonthlyCredits?.creditsPerAsset ?? 0;
  }
  formatUsd(credits) {
    return formatFleetLookupUsd(credits);
  }
  cardLogo(brand) {
    return CARD_LOGOS[String(brand || "").toLowerCase()] || "";
  }
  changeView(view, tier) {
    this.view.set(view);
    this.selectedTier.set(tier ?? null);
    if (!tier)
      return;
    const plan = this.plan();
    this.setSlots(plan?.tier === tier ? plan.assetLimit : this.sliderMin());
  }
  goBack() {
    this.changeView(this.view() === "select" || !this.plan() ? "change" : "current");
  }
  setSlots(value) {
    const parsed = Math.floor(Number(value));
    const min = this.sliderMin();
    this.slots.set(Math.min(this.sliderMax(), Math.max(min, Number.isFinite(parsed) ? parsed : min)));
  }
  purchaseEnterprise() {
    const lang = this._transloco.getActiveLang() === "es" ? "es" : "en";
    window.open(ENTERPRISE_URLS[lang], "_blank");
  }
  checkout() {
    return __async(this, null, function* () {
      const tier = this.tier();
      if (!tier || this.isWorking() || this.isUnchanged())
        return;
      if (!tier.available) {
        this._toast("smartFleet.plans.unavailable");
        return;
      }
      if (this.isRenewing()) {
        yield this._applyChange(tier);
        return;
      }
      if (!(yield this._billingDetailsReady()))
        return;
      this.isWorking.set(true);
      try {
        const response = yield firstValueFrom(this._fleet.startPlanCheckout(tier.key, this.slots()));
        const url = response?.data?.url;
        if (url) {
          window.location.href = url;
          return;
        }
        this._toast("smartFleet.plans.checkoutFailed");
      } catch (error) {
        this._toastError("smartFleet.plans.checkoutFailed", error);
      }
      this.isWorking.set(false);
    });
  }
  cancelPlan() {
    return __async(this, null, function* () {
      const plan = this.plan();
      if (!plan || this.isWorking())
        return;
      const confirmed = yield this._ask("smartFleet.plans.cancelTitle", "smartFleet.plans.cancelMessage", {
        date: plan.endDate ? new Date(plan.endDate).toLocaleDateString() : "",
        free: this.usage()?.freeLimit ?? 0
      }, "warn");
      if (!confirmed)
        return;
      yield this._run(() => firstValueFrom(this._fleet.cancelPlan()), "smartFleet.plans.cancelDone", "smartFleet.plans.cancelFailed");
    });
  }
  resumePlan() {
    return __async(this, null, function* () {
      if (!this.plan() || this.isWorking())
        return;
      yield this._run(() => firstValueFrom(this._fleet.resumePlan()), "smartFleet.plans.resumeDone", "smartFleet.plans.resumeFailed");
    });
  }
  manageBilling() {
    this._subscriptions.createPortalSession({}).subscribe({
      next: (result) => {
        const url = result?.data?.url;
        if (url)
          window.location.href = url;
      },
      error: () => this._toast("smartFleet.plans.portalFailed")
    });
  }
  _tierOf(key) {
    if (!key)
      return null;
    return this.overview()?.tiers?.find((tier) => tier.key === key) ?? null;
  }
  _applyChange(tier) {
    return __async(this, null, function* () {
      const plan = this.plan();
      const raising = this.monthlyTotal() > this.planMonthlyTotal();
      const confirmed = yield this._ask("smartFleet.plans.changeTitle", raising ? "smartFleet.plans.changeUpMessage" : "smartFleet.plans.changeDownMessage", {
        from: plan.assetLimit,
        to: this.slots(),
        plan: tier.name || tier.key,
        total: this._money(this.monthlyTotal())
      });
      if (!confirmed)
        return;
      this.isWorking.set(true);
      try {
        yield firstValueFrom(this._fleet.updatePlanQuantity(tier.key, this.slots()));
        this._toast("smartFleet.plans.changeDone", { count: this.slots() });
        yield this._load();
        this.changeView("current");
      } catch (error) {
        this._toastError("smartFleet.plans.changeFailed", error);
      } finally {
        this.isWorking.set(false);
      }
    });
  }
  _enter() {
    return __async(this, null, function* () {
      const sessionId = this._route.snapshot.queryParamMap.get("session_id")?.trim();
      if (sessionId) {
        void this._router.navigate([], {
          queryParams: { session_id: null },
          queryParamsHandling: "merge",
          replaceUrl: true
        });
        try {
          yield firstValueFrom(this._subscriptions.confirmCheckoutSession(sessionId));
          this._toast("smartFleet.plans.subscribed");
        } catch (error) {
          console.error("[SmartFleet] confirm checkout session error", error);
        }
      }
      yield this._load();
      this.changeView(this.plan() ? "current" : "change");
    });
  }
  _load() {
    return __async(this, null, function* () {
      this.isLoading.set(true);
      this.loadFailed.set(false);
      try {
        const response = yield firstValueFrom(this._fleet.getPlanOverview());
        this.overview.set(response.data);
      } catch (error) {
        console.error("[SmartFleet] plan overview error", error);
        this.loadFailed.set(true);
      } finally {
        this.isLoading.set(false);
      }
    });
  }
  _run(action, doneKey, failKey) {
    return __async(this, null, function* () {
      this.isWorking.set(true);
      try {
        yield action();
        this._toast(doneKey);
        yield this._load();
      } catch (error) {
        this._toastError(failKey, error);
      } finally {
        this.isWorking.set(false);
      }
    });
  }
  _billingDetailsReady() {
    return __async(this, null, function* () {
      try {
        const response = yield firstValueFrom(this._http.get(`${environment.apiUrl}/v2/client-settings`, { params: { findOne: "true" } }));
        const settings = extractClientSettingsPayload(response);
        if (invoiceBillingDetailsComplete(settings?.invoiceSettings))
          return true;
      } catch {
        return true;
      }
      const goToBilling = yield this._ask("smartFleet.plans.billingTitle", "smartFleet.plans.billingMessage", {}, "primary", "smartFleet.plans.billingGo");
      if (goToBilling) {
        void this._router.navigate(["/settings", "billing-details"], { queryParams: { returnUrl: PLANS_URL } });
      }
      return false;
    });
  }
  _ask(titleKey, messageKey, params, color = "primary", confirmKey = "smartFleet.plans.confirm") {
    return __async(this, null, function* () {
      const result = yield firstValueFrom(this._confirm.open({
        title: this._transloco.translate(titleKey),
        message: this._transloco.translate(messageKey, params),
        icon: { show: true, name: color === "warn" ? "heroicons_outline:exclamation-triangle" : "heroicons_outline:truck", color },
        actions: {
          confirm: { show: true, label: this._transloco.translate(confirmKey), color },
          cancel: { show: true, label: this._transloco.translate("smartFleet.plans.back") }
        }
      }).afterClosed());
      return result === "confirmed";
    });
  }
  _money(value) {
    return new Intl.NumberFormat(this._transloco.getActiveLang() === "es" ? "es-CO" : "en-US", {
      style: "currency",
      currency: (this.tier()?.currency || "USD").toUpperCase(),
      maximumFractionDigits: 2
    }).format(value);
  }
  _toast(key, params = {}) {
    this._snackBar.open(this._transloco.translate(key, params), void 0, { duration: 4500 });
  }
  _toastError(key, error) {
    console.error("[SmartFleet] plan error", error);
    const message = String(error?.error?.message || "");
    const known = {
      fleet_plan_below_active_assets: "smartFleet.plans.belowActive",
      fleet_plan_tier_too_small: "smartFleet.plans.tierTooSmall",
      smart_fleet_plan_unavailable: "smartFleet.plans.unavailable",
      smart_fleet_plan_already_active: "smartFleet.plans.alreadyActive"
    };
    const knownKey = Object.keys(known).find((code) => message.includes(code));
    this._toast(knownKey ? known[knownKey] : key, { count: this.activeAssets() });
  }
  static {
    this.\u0275fac = function FleetPlansComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FleetPlansComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FleetPlansComponent, selectors: [["fleet-plans"]], decls: 1, vars: 0, consts: [["creditsInfo", ""], [4, "transloco"], [1, "plans-container", "w-full", "flex", "justify-center"], [1, "w-full", "max-w-5xl", "px-4", "sm:px-8", "py-8"], [1, "mb-6"], [1, "current-plan-header", "flex", "items-center", "gap-4", "mb-8"], ["mat-icon-button", "", "type", "button", 1, "back-button"], [1, "header-icon"], [1, "current-plan-title"], [1, "current-plan-subtitle"], [1, "flex", "justify-center", "py-16"], [1, "payment-alert"], ["mat-icon-button", "", "type", "button", 1, "back-button", 3, "click"], ["diameter", "40"], [1, "text-red-500"], [1, "plan-card", "mb-6", "animate-fadeIn"], [1, "card-header"], [1, "flex", "items-center", "gap-3"], [1, "card-icon", 3, "ngClass"], [1, "text-sm", "text-gray-500"], [1, "font-semibold", "text-gray-900", "text-lg"], [1, "status-badge", 3, "ngClass"], [1, "status-dot"], [1, "card-body"], [1, "price-section"], [1, "price-label"], [1, "price-amount"], [1, "price-currency"], [1, "price-period"], [1, "payment-method"], [1, "features-grid"], [1, "feature-card"], [1, "feature-icon", "biometrics"], [1, "feature-content"], [1, "feature-label"], [1, "feature-value"], [1, "feature-status", "active"], [1, "feature-icon", "email"], [1, "feature-status"], [1, "feature-icon", "whitelabel"], [1, "feature-icon", "api"], [1, "text-sm", "font-normal", "text-gray-500"], [4, "ngTemplateOutlet"], [1, "card-actions", "flex", "flex-wrap", "gap-3"], ["mat-flat-button", "", "type", "button", 1, "action-button", "primary", 3, "click"], ["mat-stroked-button", "", "type", "button", 3, "disabled"], ["mat-button", "", "color", "warn", "type", "button", 3, "disabled"], [1, "upgrade-section", "animate-fadeIn"], [1, "upgrade-header"], [1, "upgrade-header-content"], [1, "upgrade-badge"], [1, "upgrade-headline"], [1, "upgrade-subheadline"], [1, "upgrade-illustration"], [1, "floating-icon", "icon-1"], [1, "floating-icon", "icon-2"], [1, "floating-icon", "icon-3"], [1, "upgrade-cta"], ["mat-flat-button", "", "type", "button", 1, "upgrade-button", 3, "click"], [1, "upgrade-hint"], ["alt", "Link", 1, "h-8", "w-12", "object-contain", 3, "src"], [1, "payment-text"], ["alt", "card", 1, "h-8", "w-12", "object-contain", 3, "src"], [1, "payment-details"], [1, "payment-expiry"], [1, "text-gray-400"], [1, "payment-text", "text-gray-500"], ["mat-stroked-button", "", "type", "button", 3, "click", "disabled"], ["mat-button", "", "color", "warn", "type", "button", 3, "click", "disabled"], [1, "text-2xl", "font-semibold", "text-gray-900"], [1, "text-gray-500", "mt-1"], [1, "plans-grid"], [1, "select-plan-card", "animate-fadeIn"], [1, "plan-badge", "enterprise"], [1, "plan-pricing"], [1, "plan-price", "custom"], [1, "plan-range"], [1, "plan-includes"], [1, "includes-title"], [1, "includes-list"], ["mat-flat-button", "", "type", "button", 1, "select-button", "enterprise", 3, "click"], [1, "select-plan-card", "free-plan-card", "animate-fadeIn", "mt-6"], [1, "current-plan-badge"], [1, "plan-badge", "free"], [1, "plan-price"], [1, "plan-period"], ["mat-stroked-button", "", "type", "button", 1, "select-button", "free", 3, "disabled"], [1, "mt-6"], [1, "select-plan-card", "animate-fadeIn", 3, "featured", "select-plan-card--current"], [1, "current-plan-badge", 3, "current-plan-badge--offset"], [1, "featured-badge"], [1, "plan-badge", 3, "ngClass"], [1, "plan-features"], [1, "plan-stat"], [1, "stat-label"], [1, "stat-value"], [1, "mt-2", "text-center", "text-xs", "text-amber-700", "dark:text-amber-300"], ["mat-flat-button", "", "type", "button", 1, "select-button", 3, "click", "ngClass", "disabled"], ["mat-stroked-button", "", "type", "button", 1, "select-button", "free", 3, "click", "disabled"], [1, "landing-slider-section", "animate-fadeIn"], [1, "landing-slider-title"], [1, "landing-slider-subtitle"], [1, "landing-slider-track"], [1, "track-label"], [1, "track-slider"], [1, "range-slider"], ["step", "1", "type", "range", 1, "range-slider__input", 3, "ngModelChange", "min", "max", "ngModel"], [1, "landing-slider-pill"], [1, "mt-3", "text-center", "text-sm", "text-gray-500"], [1, "checkout-card", "animate-fadeIn", 3, "ngClass"], [1, "checkout-header", 3, "ngClass"], [1, "checkout-plan-info"], [1, "checkout-badge", 3, "ngClass"], [1, "checkout-plan-type"], [1, "checkout-price"], [1, "price-value"], [1, "checkout-stats"], [1, "stat-item"], [1, "stat-divider"], [1, "text-xs", "font-normal", "opacity-80"], [1, "checkout-actions"], ["mat-flat-button", "", "type", "button", 1, "checkout-button", 3, "click", "disabled", "ngClass"], ["diameter", "20", 1, "mr-2"], [1, "mt-3", "text-center", "text-xs", "text-gray-500"], [1, "optional-section", "fleet-plans-cost-detail"], [1, "optional-title", "text-lg"], [1, "optional-subtitle", "text-base", "leading-relaxed"], [1, "mt-4", "grid", "gap-3", "sm:grid-cols-2"], [1, "rounded-xl", "border", "border-stone-200", "bg-white", "p-4", "dark:border-gray-700", "dark:bg-gray-900"], [1, "text-sm", "font-semibold", "text-stone-800", "dark:text-stone-100"], [1, "mt-1", "text-sm", "text-stone-600", "dark:text-stone-300"], [1, "rounded-xl", "border", "border-sky-200", "bg-sky-50/80", "p-4", "dark:border-sky-900/50", "dark:bg-sky-950/30"], [1, "text-sm", "font-semibold", "text-sky-900", "dark:text-sky-100"], [1, "mt-1", "text-sm", "text-sky-900/90", "dark:text-sky-100/90"], [1, "optional-title", "mt-6", "text-base"], [1, "optional-subtitle", "text-sm"], [1, "optional-grid"], [1, "optional-card"], [1, "optional-icon", "sms"], [1, "optional-content"], [1, "optional-label"], [1, "optional-value"], [1, "optional-icon", "whatsapp"], [1, "mt-5", "rounded-xl", "border", "border-stone-200", "bg-stone-50/60", "p-4", "dark:border-gray-700", "dark:bg-gray-950/40"], ["routerLink", "/add-credits", 1, "mt-5", "inline-flex", "items-center", "gap-1", "text-base", "font-medium", "text-primary", "hover:underline"], [1, "icon-size-5", "text-current"], [1, "mt-1", "text-xs", "text-stone-500", "dark:text-stone-400"], [1, "mt-3", "space-y-2"], [1, "flex", "flex-col", "gap-1", "border-b", "border-stone-200/80", "pb-2", "last:border-0", "dark:border-gray-700/80", "sm:flex-row", "sm:items-center", "sm:justify-between"], [1, "mt-3", "text-sm", "text-stone-600", "dark:text-stone-300"], [1, "font-mono", "text-xs", "sm:text-sm"], [1, "tabular-nums", "text-right", "text-xs", "sm:text-sm", "text-stone-600", "dark:text-stone-300"]], template: function FleetPlansComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, FleetPlansComponent_ng_container_0_Template, 20, 4, "ng-container", 1);
      }
    }, dependencies: [CommonModule, NgClass, NgTemplateOutlet, DecimalPipe, CurrencyPipe, DatePipe, FormsModule, DefaultValueAccessor, RangeValueAccessor, NgControlStatus, NgModel, RouterModule, RouterLink, TranslocoModule, TranslocoDirective, MatButtonModule, MatButton, MatIconButton, MatIconModule, MatIcon, MatProgressSpinnerModule, MatProgressSpinner, FleetNavComponent], styles: ['\n\n[_nghost-%COMP%] {\n  width: 100%;\n  display: block;\n}\n.plans-container[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 64px);\n  background:\n    linear-gradient(\n      180deg,\n      #f8fafc 0%,\n      #ffffff 100%);\n}\n.current-plan-header[_ngcontent-%COMP%]   .current-plan-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #0f0f2d;\n  margin: 0;\n  letter-spacing: -0.02em;\n}\n.current-plan-header[_ngcontent-%COMP%]   .current-plan-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #6b7280;\n  margin: 4px 0 0;\n}\n.back-button[_ngcontent-%COMP%] {\n  color: #2b3af0;\n  transition: all 0.2s ease;\n}\n.back-button[_ngcontent-%COMP%]:hover {\n  background: rgba(43, 58, 240, 0.06);\n  transform: translateX(-2px);\n}\n.header-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  min-width: 48px;\n  min-height: 48px;\n  flex-shrink: 0;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #2b3af0 0%,\n      #4f5af6 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 4px 14px rgba(43, 58, 240, 0.25);\n}\n.header-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 24px;\n  width: 24px;\n  height: 24px;\n  min-width: 24px;\n  min-height: 24px;\n  flex-shrink: 0;\n  line-height: 24px;\n}\n.plan-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 20px;\n  border: 1px solid #e5e7eb;\n  overflow: hidden;\n  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.04);\n  transition: all 0.3s ease;\n}\n.plan-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);\n}\n.plan-card.payment-failed[_ngcontent-%COMP%] {\n  border-color: #fecaca;\n}\n.card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  background:\n    linear-gradient(\n      135deg,\n      #f3f4f6 0%,\n      #f5f5f5 100%);\n  border-bottom: 1px solid #e5e7eb;\n}\n@media (max-width: 640px) {\n  .card-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 12px;\n  }\n}\n.card-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease;\n}\n.card-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 22px;\n  width: 22px;\n  height: 22px;\n}\n.card-icon.free[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #6b7280 0%,\n      #9ca3af 100%);\n  box-shadow: 0 2px 8px rgba(107, 114, 128, 0.3);\n}\n.card-icon.plus[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #2b3af0 0%,\n      #4f5af6 100%);\n  box-shadow: 0 2px 8px rgba(43, 58, 240, 0.3);\n}\n.card-icon.business[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #0f0f2d 0%,\n      #1a1a4a 100%);\n  box-shadow: 0 2px 8px rgba(15, 15, 45, 0.3);\n}\n.card-icon.enterprise[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #1f2937 0%,\n      #374151 100%);\n  box-shadow: 0 2px 8px rgba(31, 41, 55, 0.3);\n}\n.status-badge[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  font-weight: 500;\n  padding: 6px 14px;\n  border-radius: 20px;\n}\n.status-badge.success[_ngcontent-%COMP%] {\n  color: #2b3af0;\n  background: rgba(43, 58, 240, 0.06);\n}\n.status-badge.success[_ngcontent-%COMP%]   .status-dot[_ngcontent-%COMP%] {\n  background: #2b3af0;\n}\n.status-badge.warning[_ngcontent-%COMP%] {\n  color: #f59e0b;\n  background: rgba(245, 158, 11, 0.1);\n}\n.status-badge.warning[_ngcontent-%COMP%]   .status-dot[_ngcontent-%COMP%] {\n  background: #f59e0b;\n}\n.status-badge.error[_ngcontent-%COMP%] {\n  color: #ef4444;\n  background: rgba(239, 68, 68, 0.1);\n}\n.status-badge.error[_ngcontent-%COMP%]   .status-dot[_ngcontent-%COMP%] {\n  background: #ef4444;\n}\n.status-badge[_ngcontent-%COMP%]   .status-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_pulse 2s infinite;\n}\n.payment-alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px 24px;\n  background:\n    linear-gradient(\n      135deg,\n      #fef2f2 0%,\n      #fee2e2 100%);\n  border-bottom: 1px solid #fecaca;\n  font-size: 14px;\n  color: #dc2626;\n  font-weight: 500;\n}\n.card-body[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.price-section[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 24px;\n  background:\n    linear-gradient(\n      135deg,\n      #f3f4f6 0%,\n      #e5e7eb 100%);\n  border-radius: 16px;\n  margin-bottom: 24px;\n}\n.price-section[_ngcontent-%COMP%]   .price-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6b7280;\n  font-weight: 500;\n  margin-bottom: 8px;\n}\n.price-section[_ngcontent-%COMP%]   .price-amount[_ngcontent-%COMP%] {\n  font-size: 42px;\n  font-weight: 700;\n  color: #0f0f2d;\n  line-height: 1;\n}\n.price-section[_ngcontent-%COMP%]   .price-amount[_ngcontent-%COMP%]   .price-currency[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 500;\n  color: #6b7280;\n}\n.price-section[_ngcontent-%COMP%]   .price-period[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6b7280;\n  margin-top: 8px;\n}\n.payment-method[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 16px;\n  background: #f9fafb;\n  border-radius: 12px;\n  margin-bottom: 24px;\n}\n.payment-method[_ngcontent-%COMP%]   .payment-icon.link[_ngcontent-%COMP%] {\n  color: #1f2937;\n}\n.payment-method[_ngcontent-%COMP%]   .payment-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.payment-method[_ngcontent-%COMP%]   .payment-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #374151;\n}\n.payment-method[_ngcontent-%COMP%]   .payment-expiry[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6b7280;\n}\n.usage-dashboard[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.usage-period[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n  padding: 14px 16px;\n  background: rgba(43, 58, 240, 0.06);\n  border: 1px solid rgba(43, 58, 240, 0.12);\n  border-radius: 12px;\n}\n@media (max-width: 640px) {\n  .usage-period[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 6px;\n  }\n}\n.usage-period__title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  font-weight: 700;\n  color: #0f0f2d;\n}\n.usage-period__reset[_ngcontent-%COMP%] {\n  margin: 2px 0 0;\n  font-size: 13px;\n  font-weight: 600;\n  color: #2b3af0;\n}\n.usage-period__date[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 12px;\n  color: #6b7280;\n  text-align: right;\n}\n@media (max-width: 640px) {\n  .usage-period__date[_ngcontent-%COMP%] {\n    text-align: left;\n  }\n}\n.usage-gauges[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 16px;\n}\n@media (max-width: 640px) {\n  .usage-gauges[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.usage-bars[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  padding: 16px;\n  background: #ffffff;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n}\n.features-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 16px;\n  margin-bottom: 24px;\n}\n@media (max-width: 640px) {\n  .features-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.feature-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px;\n  background: #ffffff;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  transition: all 0.2s ease;\n}\n.feature-card[_ngcontent-%COMP%]:hover {\n  border-color: #d1d5db;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);\n}\n.feature-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.feature-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.feature-icon.email[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(43, 58, 240, 0.12) 0%,\n      rgba(79, 90, 246, 0.12) 100%);\n  color: #2b3af0;\n}\n.feature-icon.whitelabel[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(15, 15, 45, 0.08) 0%,\n      rgba(15, 15, 45, 0.12) 100%);\n  color: #0f0f2d;\n}\n.feature-icon.biometrics[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(43, 58, 240, 0.08) 0%,\n      rgba(43, 58, 240, 0.15) 100%);\n  color: #2b3af0;\n}\n.feature-icon.api[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(79, 90, 246, 0.08) 0%,\n      rgba(79, 90, 246, 0.15) 100%);\n  color: #4f5af6;\n}\n.feature-content[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.feature-content[_ngcontent-%COMP%]   .feature-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6b7280;\n}\n.feature-content[_ngcontent-%COMP%]   .feature-value[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 600;\n  color: #111827;\n}\n.feature-status[_ngcontent-%COMP%] {\n  font-size: 20px !important;\n  width: 20px !important;\n  height: 20px !important;\n  color: #d1d5db;\n}\n.feature-status.active[_ngcontent-%COMP%] {\n  color: #2b3af0;\n}\n.optional-section[_ngcontent-%COMP%] {\n  padding: 20px;\n  background: #f9fafb;\n  border-radius: 16px;\n  margin-bottom: 24px;\n}\n.optional-section[_ngcontent-%COMP%]   .optional-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #111827;\n  margin-bottom: 4px;\n}\n.optional-section[_ngcontent-%COMP%]   .optional-subtitle[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6b7280;\n  margin-bottom: 16px;\n}\n.optional-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 12px;\n}\n@media (max-width: 640px) {\n  .optional-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.optional-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 12px;\n  padding: 14px;\n  background: #ffffff;\n  border: 1px solid #e5e7eb;\n  border-radius: 10px;\n}\n.optional-icon[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.optional-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.optional-icon.sms[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(43, 58, 240, 0.08) 0%,\n      rgba(43, 58, 240, 0.15) 100%);\n  color: #2b3af0;\n}\n.optional-icon.whatsapp[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(79, 90, 246, 0.08) 0%,\n      rgba(79, 90, 246, 0.15) 100%);\n  color: #4f5af6;\n}\n.optional-content[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 100px;\n}\n.optional-content[_ngcontent-%COMP%]   .optional-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 13px;\n  font-weight: 500;\n  color: #374151;\n}\n.optional-content[_ngcontent-%COMP%]   .optional-value[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11px;\n  color: #9ca3af;\n}\n.optional-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 12px;\n  font-weight: 500;\n  color: #2b3af0;\n  text-decoration: none;\n  transition: color 0.2s ease;\n}\n.optional-link[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.optional-link[_ngcontent-%COMP%]:hover {\n  color: #0f0f2d;\n}\n.card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.action-button[_ngcontent-%COMP%] {\n  border-radius: 50px;\n  padding: 12px 32px;\n  font-weight: 500;\n  font-size: 15px;\n  transition: all 0.2s ease;\n}\n.action-button.primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #2b3af0 0%,\n      #0f0f2d 100%);\n  color: white;\n  box-shadow: 0 4px 14px rgba(43, 58, 240, 0.3);\n}\n.action-button.primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(43, 58, 240, 0.4);\n}\n.action-button.primary.error[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ef4444 0%,\n      #dc2626 100%);\n  box-shadow: 0 4px 14px rgba(239, 68, 68, 0.3);\n}\n.action-button.secondary[_ngcontent-%COMP%] {\n  border-color: #2b3af0;\n  color: #2b3af0;\n}\n.action-button.secondary[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  transition: transform 0.2s ease;\n}\n.action-button.secondary[_ngcontent-%COMP%]:hover {\n  background: rgba(43, 58, 240, 0.06);\n}\n.action-button.secondary[_ngcontent-%COMP%]:hover   mat-icon[_ngcontent-%COMP%] {\n  transform: translateX(4px);\n}\n.upgrade-section[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #0f0f2d 0%,\n      #1a1a4a 50%,\n      #0f0f2d 100%);\n  border-radius: 24px;\n  overflow: hidden;\n  position: relative;\n}\n.upgrade-section[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background-image:\n    radial-gradient(\n      circle at 1px 1px,\n      rgba(255, 255, 255, 0.03) 1px,\n      transparent 0);\n  background-size: 24px 24px;\n  pointer-events: none;\n}\n.upgrade-section[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: -50%;\n  right: -20%;\n  width: 60%;\n  height: 200%;\n  background:\n    radial-gradient(\n      ellipse,\n      rgba(43, 58, 240, 0.15) 0%,\n      transparent 70%);\n  pointer-events: none;\n}\n.upgrade-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  padding: 32px 32px 24px;\n  position: relative;\n  z-index: 1;\n}\n@media (max-width: 640px) {\n  .upgrade-header[_ngcontent-%COMP%] {\n    padding: 24px 20px 16px;\n  }\n}\n.upgrade-header-content[_ngcontent-%COMP%] {\n  flex: 1;\n  max-width: 480px;\n}\n.upgrade-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 12px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(43, 58, 240, 0.2) 0%,\n      rgba(79, 90, 246, 0.2) 100%);\n  border: 1px solid rgba(43, 58, 240, 0.3);\n  border-radius: 20px;\n  margin-bottom: 16px;\n}\n.upgrade-badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n  color: white;\n}\n.upgrade-badge[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: white;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.upgrade-headline[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  color: #ffffff;\n  margin-bottom: 8px;\n  line-height: 1.2;\n}\n@media (max-width: 640px) {\n  .upgrade-headline[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n}\n.upgrade-subheadline[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #94a3b8;\n  line-height: 1.5;\n  margin: 0;\n}\n.upgrade-illustration[_ngcontent-%COMP%] {\n  position: relative;\n  width: 120px;\n  height: 100px;\n  flex-shrink: 0;\n}\n@media (max-width: 768px) {\n  .upgrade-illustration[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.floating-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 12px;\n  animation: _ngcontent-%COMP%_float 3s ease-in-out infinite;\n}\n.floating-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.floating-icon.icon-1[_ngcontent-%COMP%] {\n  top: 0;\n  left: 20px;\n  width: 44px;\n  height: 44px;\n  background:\n    linear-gradient(\n      135deg,\n      #2b3af0 0%,\n      #0f0f2d 100%);\n  box-shadow: 0 8px 24px rgba(43, 58, 240, 0.4);\n}\n.floating-icon.icon-1[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: white;\n}\n.floating-icon.icon-2[_ngcontent-%COMP%] {\n  top: 30px;\n  right: 0;\n  width: 40px;\n  height: 40px;\n  background:\n    linear-gradient(\n      135deg,\n      #4f5af6 0%,\n      #2b3af0 100%);\n  box-shadow: 0 8px 24px rgba(79, 90, 246, 0.4);\n  animation-delay: 0.5s;\n}\n.floating-icon.icon-2[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: white;\n}\n.floating-icon.icon-3[_ngcontent-%COMP%] {\n  bottom: 0;\n  left: 40px;\n  width: 36px;\n  height: 36px;\n  background:\n    linear-gradient(\n      135deg,\n      #0f0f2d 0%,\n      #1a1a4a 100%);\n  box-shadow: 0 8px 24px rgba(15, 15, 45, 0.4);\n  animation-delay: 1s;\n}\n.floating-icon.icon-3[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n@keyframes _ngcontent-%COMP%_float {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-8px);\n  }\n}\n.upgrade-benefits[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n  padding: 0 32px 24px;\n  position: relative;\n  z-index: 1;\n}\n@media (max-width: 768px) {\n  .upgrade-benefits[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 12px;\n    padding: 0 20px 20px;\n  }\n}\n.benefit-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 16px;\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  border-radius: 12px;\n  transition: all 0.2s ease;\n}\n.benefit-item[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.05);\n  border-color: rgba(255, 255, 255, 0.1);\n}\n.benefit-icon[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  background: rgba(43, 58, 240, 0.15);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.benefit-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: #4f5af6;\n}\n.benefit-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.benefit-text[_ngcontent-%COMP%]   .benefit-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #ffffff;\n}\n.benefit-text[_ngcontent-%COMP%]   .benefit-desc[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #64748b;\n  line-height: 1.4;\n}\n.upgrade-cta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 24px 32px 32px;\n  position: relative;\n  z-index: 1;\n}\n@media (max-width: 640px) {\n  .upgrade-cta[_ngcontent-%COMP%] {\n    flex-direction: column;\n    padding: 20px;\n    gap: 12px;\n  }\n}\n.upgrade-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 14px 28px !important;\n  background:\n    linear-gradient(\n      135deg,\n      #2b3af0 0%,\n      #0f0f2d 100%) !important;\n  border: none !important;\n  border-radius: 50px !important;\n  font-size: 15px !important;\n  font-weight: 600 !important;\n  color: white !important;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  box-shadow: 0 4px 16px rgba(43, 58, 240, 0.4);\n}\n.upgrade-button[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(43, 58, 240, 0.5);\n}\n.upgrade-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  transition: transform 0.2s ease;\n}\n.upgrade-button[_ngcontent-%COMP%]:hover   mat-icon[_ngcontent-%COMP%] {\n  transform: translateX(4px);\n}\n@media (max-width: 640px) {\n  .upgrade-button[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n}\n.upgrade-hint[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #64748b;\n}\n@media (max-width: 640px) {\n  .upgrade-hint[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n.plans-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 24px;\n  margin-bottom: 24px;\n}\n@media (max-width: 1024px) {\n  .plans-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 640px) {\n  .plans-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.select-plan-card[_ngcontent-%COMP%] {\n  position: relative;\n  background: #ffffff;\n  border: 1px solid #e5e7eb;\n  border-radius: 20px;\n  padding: 24px;\n  transition: all 0.3s ease;\n  display: flex;\n  flex-direction: column;\n}\n.select-plan-card[_ngcontent-%COMP%]:hover {\n  border-color: #d1d5db;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);\n  transform: translateY(-4px);\n}\n.select-plan-card.featured[_ngcontent-%COMP%] {\n  border: 2px solid #2b3af0;\n  box-shadow: 0 8px 32px rgba(43, 58, 240, 0.15);\n}\n.select-plan-card.featured[_ngcontent-%COMP%]   .featured-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -12px;\n  left: 50%;\n  transform: translateX(-50%);\n  background:\n    linear-gradient(\n      135deg,\n      #2b3af0 0%,\n      #0f0f2d 100%);\n  color: white;\n  font-size: 11px;\n  font-weight: 600;\n  padding: 4px 12px;\n  border-radius: 20px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.select-plan-card--current[_ngcontent-%COMP%] {\n  border: 2px solid #059669;\n  box-shadow: 0 8px 28px rgba(5, 150, 105, 0.14);\n}\n.select-plan-card--current.featured[_ngcontent-%COMP%] {\n  border: 2px solid #059669;\n  box-shadow: 0 8px 28px rgba(5, 150, 105, 0.18);\n}\n.current-plan-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -12px;\n  left: 16px;\n  z-index: 2;\n  background:\n    linear-gradient(\n      135deg,\n      #059669 0%,\n      #047857 100%);\n  color: white;\n  font-size: 11px;\n  font-weight: 600;\n  padding: 4px 12px;\n  border-radius: 20px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  box-shadow: 0 2px 8px rgba(5, 150, 105, 0.35);\n}\n.current-plan-badge--offset[_ngcontent-%COMP%] {\n  top: 22px;\n  left: 12px;\n}\n.plan-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 6px 14px;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 600;\n  margin-bottom: 16px;\n  width: fit-content;\n}\n.plan-badge.free[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f3f4f6 0%,\n      #e5e7eb 100%);\n  color: #6b7280;\n}\n.plan-badge.plus[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(43, 58, 240, 0.08) 0%,\n      rgba(43, 58, 240, 0.15) 100%);\n  color: #2b3af0;\n}\n.plan-badge.business[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(15, 15, 45, 0.08) 0%,\n      rgba(15, 15, 45, 0.15) 100%);\n  color: #0f0f2d;\n}\n.plan-badge.enterprise[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #1f2937 0%,\n      #374151 100%);\n  color: white;\n}\n.plan-pricing[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.plan-pricing[_ngcontent-%COMP%]   .plan-price[_ngcontent-%COMP%] {\n  font-size: 36px;\n  font-weight: 700;\n  color: #111827;\n}\n.plan-pricing[_ngcontent-%COMP%]   .plan-price.custom[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.plan-pricing[_ngcontent-%COMP%]   .plan-period[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #6b7280;\n  font-weight: 400;\n}\n.plan-range[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6b7280;\n  margin-bottom: 20px;\n}\n.plan-features[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  padding: 16px 0;\n  border-top: 1px solid #e5e7eb;\n  border-bottom: 1px solid #e5e7eb;\n  margin-bottom: 20px;\n}\n@media (max-width: 480px) {\n  .plan-features[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 12px;\n  }\n}\n.plan-stat[_ngcontent-%COMP%] {\n  flex: 1;\n  text-align: center;\n}\n.plan-stat[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11px;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 4px;\n}\n.plan-stat[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  font-weight: 600;\n  color: #374151;\n}\n.plan-includes[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-bottom: 20px;\n}\n.plan-includes[_ngcontent-%COMP%]   .includes-title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #374151;\n  margin-bottom: 12px;\n}\n.plan-includes[_ngcontent-%COMP%]   .includes-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.plan-includes[_ngcontent-%COMP%]   .includes-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  color: #6b7280;\n  padding: 6px 0;\n}\n.plan-includes[_ngcontent-%COMP%]   .includes-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n  color: #2b3af0;\n}\n.select-button[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 50px;\n  padding: 14px;\n  font-weight: 600;\n  font-size: 14px;\n  transition: all 0.2s ease;\n  margin-top: auto;\n}\n.select-button.free[_ngcontent-%COMP%] {\n  border-color: #6b7280;\n  color: #6b7280;\n}\n.select-button.free[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n.select-button.free[_ngcontent-%COMP%]:hover {\n  background: rgba(107, 114, 128, 0.05);\n}\n.select-button.plus[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #2b3af0 0%,\n      #4f5af6 100%);\n  color: white;\n}\n.select-button.plus[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 14px rgba(43, 58, 240, 0.4);\n  transform: translateY(-2px);\n}\n.select-button.business[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #0f0f2d 0%,\n      #1a1a4a 100%);\n  color: white;\n}\n.select-button.business[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 14px rgba(15, 15, 45, 0.4);\n  transform: translateY(-2px);\n}\n.select-button.enterprise[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #1f2937 0%,\n      #111827 100%);\n  color: white;\n}\n.select-button.enterprise[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 14px rgba(31, 41, 55, 0.4);\n  transform: translateY(-2px);\n}\n.free-plan-card[_ngcontent-%COMP%] {\n  border: 1px solid rgba(107, 114, 128, 0.2);\n  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);\n}\n.free-plan-card[_ngcontent-%COMP%]:hover {\n  border-color: rgba(107, 114, 128, 0.35);\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);\n}\n.free-plan-card[_ngcontent-%COMP%]   .plan-badge.free[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f3f4f6 0%,\n      #e5e7eb 100%);\n  color: #6b7280;\n}\n.free-plan-card[_ngcontent-%COMP%]   .plan-price[_ngcontent-%COMP%] {\n  color: #0f0f2d;\n}\n.free-plan-card[_ngcontent-%COMP%]   .plan-period[_ngcontent-%COMP%] {\n  color: #6b7280;\n}\n.free-plan-card[_ngcontent-%COMP%]   .plan-range[_ngcontent-%COMP%] {\n  color: #6b7280;\n}\n.free-plan-desc[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6b7280;\n  line-height: 1.5;\n  margin: 0 0 20px;\n}\n.free-plan-desc[_ngcontent-%COMP%]     .font-semibold, \n.free-plan-desc[_ngcontent-%COMP%]     b {\n  color: #2b3af0;\n  font-weight: 600;\n}\n.free-plan-desc[_ngcontent-%COMP%]     .text-verifik-vivid-blue {\n  color: #2b3af0 !important;\n}\n.slider-section[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.slider-section[_ngcontent-%COMP%]   .slider-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: #111827;\n  text-align: center;\n  margin-bottom: 32px;\n}\n.selected-plan-card[_ngcontent-%COMP%] {\n  display: flex;\n  background: #ffffff;\n  border: 1px solid #e5e7eb;\n  border-radius: 20px;\n  overflow: hidden;\n  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);\n}\n@media (max-width: 768px) {\n  .selected-plan-card[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.selected-plan-left[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1;\n  padding: 32px;\n  display: flex;\n  flex-direction: column;\n}\n.selected-plan-left[_ngcontent-%COMP%]   .close-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 16px;\n  left: 16px;\n  color: #6b7280;\n}\n.selected-plan-left[_ngcontent-%COMP%]   .close-button[_ngcontent-%COMP%]:hover {\n  background: rgba(107, 114, 128, 0.1);\n}\n.selected-pricing[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 24px 0;\n}\n.selected-pricing[_ngcontent-%COMP%]   .pricing-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6b7280;\n  margin-bottom: 8px;\n}\n.selected-pricing[_ngcontent-%COMP%]   .pricing-amount[_ngcontent-%COMP%] {\n  font-size: 36px;\n  font-weight: 700;\n  color: #0f0f2d;\n}\n.selected-pricing[_ngcontent-%COMP%]   .pricing-amount[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 400;\n  color: #6b7280;\n}\n.selected-pricing[_ngcontent-%COMP%]   .pricing-enrolls[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #2b3af0;\n  margin-top: 8px;\n}\n.selected-stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  padding: 16px;\n  background: #f9fafb;\n  border-radius: 12px;\n  margin-bottom: 24px;\n}\n.selected-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%] {\n  flex: 1;\n  text-align: center;\n}\n.selected-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11px;\n  color: #9ca3af;\n  text-transform: uppercase;\n  margin-bottom: 4px;\n}\n.selected-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  font-weight: 600;\n  color: #374151;\n}\n.selected-includes[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.selected-includes[_ngcontent-%COMP%]   .includes-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #374151;\n  margin-bottom: 12px;\n}\n.selected-includes[_ngcontent-%COMP%]   .includes-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.selected-includes[_ngcontent-%COMP%]   .includes-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 14px;\n  color: #6b7280;\n  padding: 8px 0;\n}\n.selected-includes[_ngcontent-%COMP%]   .includes-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: #2b3af0;\n}\n.purchase-button[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 50px;\n  padding: 16px;\n  font-weight: 600;\n  font-size: 15px;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease;\n  margin-top: auto;\n}\n.purchase-button.free[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #6b7280 0%,\n      #4b5563 100%);\n}\n.purchase-button.plus[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #2b3af0 0%,\n      #4f5af6 100%);\n}\n.purchase-button.business[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #0f0f2d 0%,\n      #1a1a4a 100%);\n}\n.purchase-button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(43, 58, 240, 0.25);\n}\n.purchase-button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.purchase-button[_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n.selected-plan-right[_ngcontent-%COMP%] {\n  flex: 1.2;\n  border-left: 1px solid #e5e7eb;\n  display: flex;\n  flex-direction: column;\n}\n@media (max-width: 768px) {\n  .selected-plan-right[_ngcontent-%COMP%] {\n    border-left: none;\n    border-top: 1px solid #e5e7eb;\n  }\n}\n.plan-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 160px;\n  object-fit: cover;\n  background:\n    linear-gradient(\n      135deg,\n      #2b3af0 0%,\n      #0f0f2d 100%);\n}\n.plan-description[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.plan-description[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: #111827;\n  margin-bottom: 12px;\n}\n.plan-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6b7280;\n  line-height: 1.6;\n}\n.features-table[_ngcontent-%COMP%] {\n  padding: 0 24px;\n  flex: 1;\n}\n.features-table[_ngcontent-%COMP%]   .table-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 12px 16px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(43, 58, 240, 0.08) 0%,\n      rgba(43, 58, 240, 0.12) 100%);\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 600;\n  color: #2b3af0;\n  margin-bottom: 8px;\n}\n.features-table[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 12px 16px;\n  border-bottom: 1px solid #f3f4f6;\n  font-size: 14px;\n}\n.features-table[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  color: #374151;\n}\n.features-table[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   .table-value[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #2b3af0;\n}\n.plan-footer[_ngcontent-%COMP%] {\n  padding: 24px;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n}\n.plan-footer[_ngcontent-%COMP%]   .pricing-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 20px;\n  background: #2b3af0;\n  color: white;\n  border-radius: 50px;\n  font-size: 13px;\n  font-weight: 500;\n  text-decoration: none;\n  transition: all 0.2s ease;\n}\n.plan-footer[_ngcontent-%COMP%]   .pricing-link[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.plan-footer[_ngcontent-%COMP%]   .pricing-link[_ngcontent-%COMP%]:hover {\n  background: #0f0f2d;\n}\n.plan-footer[_ngcontent-%COMP%]   .terms-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.plan-footer[_ngcontent-%COMP%]   .terms-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #6b7280;\n  text-decoration: none;\n}\n.plan-footer[_ngcontent-%COMP%]   .terms-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.range-slider[_ngcontent-%COMP%] {\n  position: relative;\n  height: 30px;\n  margin: 40px 0;\n}\n.range-slider[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 9px;\n  left: 0;\n  height: 12px;\n  width: var(--track-fill-percentage, 0%);\n  background:\n    linear-gradient(\n      90deg,\n      #2b3af0 0%,\n      #4f5af6 100%);\n  border-radius: 6px;\n  transition: width 0.1s ease;\n  z-index: 0;\n}\n.range-slider__dots[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  left: 0;\n  position: absolute;\n  top: 10px;\n  width: 100%;\n  z-index: -1;\n  padding: 0 15px;\n}\n.range-slider__dot[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: #2b3af0;\n  border-radius: 50%;\n  display: block;\n  height: 10px;\n  width: 10px;\n}\n.range-slider__value[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -36px;\n  left: 50%;\n  transform: translateX(-50%);\n  height: 20px;\n  white-space: nowrap;\n  font-size: 12px;\n  font-weight: 500;\n  color: #6b7280;\n}\n.range-slider__input[_ngcontent-%COMP%] {\n  appearance: none;\n  background-color: transparent;\n  height: 30px;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n}\n.range-slider__input[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.range-slider__input[_ngcontent-%COMP%]::-webkit-slider-runnable-track {\n  background-color: #e5e7eb;\n  cursor: pointer;\n  height: 12px;\n  width: 100%;\n  border-radius: 6px;\n}\n.range-slider__input[_ngcontent-%COMP%]::-webkit-slider-thumb {\n  appearance: none;\n  background: #2b3af0;\n  border-radius: 50%;\n  border: 2px solid white;\n  box-shadow: 0 0 0 4px white, 0 2px 8px rgba(0, 0, 0, 0.15);\n  cursor: pointer;\n  height: 30px;\n  margin-top: -9px;\n  width: 30px;\n  z-index: 2;\n  position: relative;\n  transition: transform 0.1s ease;\n}\n.range-slider__input[_ngcontent-%COMP%]::-webkit-slider-thumb:hover {\n  transform: scale(1.1);\n}\n.range-slider__input[_ngcontent-%COMP%]::-moz-range-track {\n  width: 100%;\n  height: 12px;\n  cursor: pointer;\n  border-radius: 6px;\n  background-color: #e5e7eb;\n}\n.range-slider__input[_ngcontent-%COMP%]::-moz-range-thumb {\n  appearance: none;\n  background: #2b3af0;\n  border-radius: 50%;\n  border: 2px solid white;\n  box-shadow: 0 0 0 4px white, 0 2px 8px rgba(0, 0, 0, 0.15);\n  cursor: pointer;\n  height: 30px;\n  width: 30px;\n}\n.landing-slider-section[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(43, 58, 240, 0.04) 0%,\n      rgba(79, 90, 246, 0.06) 100%);\n  border: 1px solid rgba(43, 58, 240, 0.12);\n  border-radius: 20px;\n  padding: 32px;\n  margin-bottom: 24px;\n  text-align: center;\n}\n@media (max-width: 640px) {\n  .landing-slider-section[_ngcontent-%COMP%] {\n    padding: 24px 16px;\n  }\n}\n.landing-slider-title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: #0f0f2d;\n  margin: 0 0 8px;\n}\n.landing-slider-subtitle[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6b7280;\n  margin: 0 0 28px;\n}\n.landing-slider-track[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 20px;\n}\n.landing-slider-track[_ngcontent-%COMP%]   .track-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #6b7280;\n  white-space: nowrap;\n  min-width: 50px;\n}\n.landing-slider-track[_ngcontent-%COMP%]   .track-label[_ngcontent-%COMP%]:first-child {\n  text-align: right;\n}\n.landing-slider-track[_ngcontent-%COMP%]   .track-label[_ngcontent-%COMP%]:last-child {\n  text-align: left;\n}\n.landing-slider-track[_ngcontent-%COMP%]   .track-slider[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.landing-slider-track[_ngcontent-%COMP%]   .track-slider[_ngcontent-%COMP%]   .range-slider[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.landing-slider-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background:\n    linear-gradient(\n      135deg,\n      #2b3af0 0%,\n      #0f0f2d 100%);\n  color: white;\n  padding: 12px 24px;\n  border-radius: 50px;\n  font-size: 15px;\n  font-weight: 500;\n  box-shadow: 0 4px 16px rgba(43, 58, 240, 0.3);\n}\n.landing-slider-pill[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n}\n.volume-change-summary[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  max-width: 28rem;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 20px 20px 18px;\n  border-radius: 16px;\n  background: #ffffff;\n  border: 1px solid rgba(15, 15, 45, 0.08);\n  box-shadow:\n    0 0 0 1px rgba(255, 255, 255, 0.8) inset,\n    0 1px 2px rgba(15, 15, 45, 0.04),\n    0 8px 24px rgba(15, 15, 45, 0.06);\n}\n.volume-change-summary__head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  margin-bottom: 18px;\n  text-align: left;\n}\n.volume-change-summary__head-icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 40px;\n  height: 40px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      145deg,\n      rgba(99, 102, 241, 0.12) 0%,\n      rgba(43, 58, 240, 0.08) 100%);\n  border: 1px solid rgba(99, 102, 241, 0.2);\n}\n.volume-change-summary__head-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n  width: 22px;\n  height: 22px;\n  color: #4338ca;\n}\n.volume-change-summary__head-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 0;\n}\n.volume-change-summary__eyebrow[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  color: #6b7280;\n}\n.volume-change-summary__title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 600;\n  color: #111827;\n  letter-spacing: -0.01em;\n  line-height: 1.35;\n}\n.volume-change-summary__compare[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr auto 1fr;\n  gap: 10px;\n  align-items: stretch;\n}\n.volume-change-summary__panel[_ngcontent-%COMP%] {\n  padding: 14px 12px;\n  border-radius: 12px;\n  background: #f9fafb;\n  border: 1px solid rgba(15, 15, 45, 0.06);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  gap: 4px;\n  transition:\n    border-color 0.2s ease,\n    box-shadow 0.2s ease,\n    background 0.2s ease;\n}\n.volume-change-summary__panel--from[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      #fafafa 0%,\n      #f3f4f6 100%);\n}\n.volume-change-summary__panel--to[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      #fafbff 0%,\n      #f5f5ff 100%);\n  border-color: rgba(67, 56, 202, 0.12);\n}\n.volume-change-summary__panel--highlight[_ngcontent-%COMP%] {\n  border-color: rgba(43, 58, 240, 0.35);\n  box-shadow: 0 0 0 3px rgba(43, 58, 240, 0.12);\n  background:\n    linear-gradient(\n      180deg,\n      #f8f9ff 0%,\n      #eef2ff 100%);\n}\n.volume-change-summary__panel-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: #6b7280;\n}\n.volume-change-summary__panel-value[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  font-variant-numeric: tabular-nums;\n  letter-spacing: -0.03em;\n  color: #0f0f2d;\n  line-height: 1.1;\n}\n.volume-change-summary__panel-unit[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #9ca3af;\n}\n.volume-change-summary__mid[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 44px;\n  align-self: center;\n}\n.volume-change-summary__mid-icon[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 999px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #ffffff;\n  border: 1px solid rgba(15, 15, 45, 0.1);\n  box-shadow: 0 2px 6px rgba(15, 15, 45, 0.06);\n}\n.volume-change-summary__mid-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: #4338ca;\n}\n.volume-change-summary__hint[_ngcontent-%COMP%] {\n  margin: 14px 0 0;\n  padding-top: 12px;\n  border-top: 1px solid rgba(15, 15, 45, 0.06);\n  font-size: 13px;\n  line-height: 1.45;\n  color: #6b7280;\n  text-align: center;\n}\n@media (max-width: 480px) {\n  .volume-change-summary__compare[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 12px;\n  }\n  .volume-change-summary__mid[_ngcontent-%COMP%] {\n    width: 100%;\n    min-width: 0;\n    padding: 4px 0;\n  }\n  .volume-change-summary__mid-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    transform: rotate(90deg);\n  }\n}\n.checkout-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 24px;\n  border: 1px solid rgba(43, 58, 240, 0.12);\n  overflow: hidden;\n  box-shadow: 0 8px 40px rgba(15, 15, 45, 0.08);\n}\n.checkout-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 24px 32px;\n  color: white;\n}\n.checkout-header.header-free[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #6b7280 0%,\n      #4b5563 100%);\n}\n.checkout-header.header-plus[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #2b3af0 0%,\n      #4f5af6 100%);\n}\n.checkout-header.header-business[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #0f0f2d 0%,\n      #1a1a4a 100%);\n}\n@media (max-width: 640px) {\n  .checkout-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 16px;\n    padding: 20px 24px;\n  }\n}\n.checkout-plan-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.checkout-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 16px;\n  border-radius: 50px;\n  font-size: 14px;\n  font-weight: 600;\n  width: fit-content;\n}\n.checkout-badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.checkout-badge.free[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2);\n  color: white;\n}\n.checkout-badge.plus[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2);\n  color: white;\n}\n.checkout-badge.business[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.15);\n  color: white;\n}\n.checkout-plan-type[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: rgba(255, 255, 255, 0.8);\n  padding-left: 4px;\n}\n.checkout-price[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 2px;\n}\n.checkout-price[_ngcontent-%COMP%]   .price-from[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.7);\n  margin-right: 8px;\n}\n.checkout-price[_ngcontent-%COMP%]   .price-currency[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 600;\n}\n.checkout-price[_ngcontent-%COMP%]   .price-value[_ngcontent-%COMP%] {\n  font-size: 42px;\n  font-weight: 700;\n  line-height: 1;\n}\n.checkout-price[_ngcontent-%COMP%]   .price-period[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: rgba(255, 255, 255, 0.8);\n  margin-left: 4px;\n}\n@media (max-width: 640px) {\n  .checkout-price[_ngcontent-%COMP%]   .price-value[_ngcontent-%COMP%] {\n    font-size: 32px;\n  }\n}\n.checkout-stats[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 24px 32px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(43, 58, 240, 0.04) 0%,\n      rgba(79, 90, 246, 0.06) 100%);\n  border-bottom: 1px solid rgba(43, 58, 240, 0.08);\n}\n@media (max-width: 768px) {\n  .checkout-stats[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    gap: 16px;\n    padding: 20px 24px;\n  }\n}\n.checkout-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  gap: 4px;\n  min-width: 80px;\n}\n.checkout-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  color: #2b3af0;\n  margin-bottom: 4px;\n}\n.checkout-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #0f0f2d;\n}\n.checkout-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6b7280;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n}\n.checkout-stats[_ngcontent-%COMP%]   .stat-divider[_ngcontent-%COMP%] {\n  width: 1px;\n  background: rgba(43, 58, 240, 0.15);\n  margin: 0 8px;\n}\n@media (max-width: 768px) {\n  .checkout-stats[_ngcontent-%COMP%]   .stat-divider[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.checkout-features[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 32px;\n  padding: 28px 32px;\n  border-bottom: 1px solid rgba(43, 58, 240, 0.08);\n}\n@media (max-width: 640px) {\n  .checkout-features[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 24px;\n    padding: 24px;\n  }\n}\n.features-column[_ngcontent-%COMP%]   .features-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 14px;\n  font-weight: 600;\n  margin: 0 0 16px;\n}\n.features-column[_ngcontent-%COMP%]   .features-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.features-column[_ngcontent-%COMP%]   .features-title.included-title[_ngcontent-%COMP%] {\n  color: #2b3af0;\n}\n.features-column[_ngcontent-%COMP%]   .features-title.included-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #2b3af0;\n}\n.features-column[_ngcontent-%COMP%]   .features-title.extra-title[_ngcontent-%COMP%] {\n  color: #0f0f2d;\n}\n.features-column[_ngcontent-%COMP%]   .features-title.extra-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #0f0f2d;\n}\n.features-column[_ngcontent-%COMP%]   .features-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.features-column[_ngcontent-%COMP%]   .features-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 0;\n  font-size: 14px;\n  color: #6b7280;\n  border-bottom: 1px solid rgba(107, 114, 128, 0.1);\n}\n.features-column[_ngcontent-%COMP%]   .features-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.features-column[_ngcontent-%COMP%]   .features-list.included[_ngcontent-%COMP%]   .feature-count[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #2b3af0;\n}\n.features-column[_ngcontent-%COMP%]   .features-list.included[_ngcontent-%COMP%]   .feature-check[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n  color: #2b3af0;\n}\n.features-column[_ngcontent-%COMP%]   .features-list.extra[_ngcontent-%COMP%]   .feature-price[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #0f0f2d;\n}\n.features-column[_ngcontent-%COMP%]   .features-list.extra[_ngcontent-%COMP%]   .extras-link[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #2b3af0;\n  text-decoration: none;\n  font-weight: 500;\n}\n.features-column[_ngcontent-%COMP%]   .features-list.extra[_ngcontent-%COMP%]   .extras-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.extra-bio-notice[_ngcontent-%COMP%] {\n  margin: 0 32px 24px;\n  border: 1px solid rgba(43, 58, 240, 0.15);\n  border-radius: 12px;\n  overflow: hidden;\n}\n@media (max-width: 640px) {\n  .extra-bio-notice[_ngcontent-%COMP%] {\n    margin: 0 24px 24px;\n  }\n}\n.extra-bio-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 14px 16px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(43, 58, 240, 0.06) 0%,\n      rgba(79, 90, 246, 0.08) 100%);\n  cursor: pointer;\n  transition: background 0.2s ease;\n}\n.extra-bio-header[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(43, 58, 240, 0.1) 0%,\n      rgba(79, 90, 246, 0.12) 100%);\n}\n.extra-bio-header[_ngcontent-%COMP%]   .extra-bio-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.extra-bio-header[_ngcontent-%COMP%]   .extra-bio-left[_ngcontent-%COMP%]   .info-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: #2b3af0;\n}\n.extra-bio-header[_ngcontent-%COMP%]   .extra-bio-left[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #0f0f2d;\n}\n.extra-bio-header[_ngcontent-%COMP%]   .expand-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  color: #6b7280;\n  transition: transform 0.3s ease;\n}\n.extra-bio-header[_ngcontent-%COMP%]   .expand-icon.expanded[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.extra-bio-body[_ngcontent-%COMP%] {\n  padding: 16px;\n  background: white;\n  animation: _ngcontent-%COMP%_slideDown 0.3s ease-out;\n}\n.extra-bio-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6b7280;\n  line-height: 1.6;\n  margin: 0 0 16px;\n}\n.extra-bio-body[_ngcontent-%COMP%]   .extra-bio-costs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.extra-bio-body[_ngcontent-%COMP%]   .extra-bio-costs[_ngcontent-%COMP%]   .bio-cost-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 14px;\n  background: rgba(43, 58, 240, 0.04);\n  border-radius: 8px;\n  font-size: 13px;\n}\n.extra-bio-body[_ngcontent-%COMP%]   .extra-bio-costs[_ngcontent-%COMP%]   .bio-cost-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #6b7280;\n}\n.extra-bio-body[_ngcontent-%COMP%]   .extra-bio-costs[_ngcontent-%COMP%]   .bio-cost-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #0f0f2d;\n  font-weight: 600;\n}\n@keyframes _ngcontent-%COMP%_slideDown {\n  from {\n    opacity: 0;\n    max-height: 0;\n  }\n  to {\n    opacity: 1;\n    max-height: 300px;\n  }\n}\n.checkout-actions[_ngcontent-%COMP%] {\n  padding: 24px 32px 32px;\n  text-align: center;\n}\n@media (max-width: 640px) {\n  .checkout-actions[_ngcontent-%COMP%] {\n    padding: 24px;\n  }\n}\n.checkout-button[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 400px;\n  border-radius: 50px !important;\n  padding: 16px 32px !important;\n  font-size: 16px !important;\n  font-weight: 600 !important;\n  color: white !important;\n  display: inline-flex !important;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  transition: all 0.2s ease;\n  border: none !important;\n}\n.checkout-button.free[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #6b7280 0%,\n      #4b5563 100%) !important;\n}\n.checkout-button.plus[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #2b3af0 0%,\n      #4f5af6 100%) !important;\n  box-shadow: 0 4px 20px rgba(43, 58, 240, 0.35);\n}\n.checkout-button.business[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #0f0f2d 0%,\n      #1a1a4a 100%) !important;\n  box-shadow: 0 4px 20px rgba(15, 15, 45, 0.35);\n}\n.checkout-button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 28px rgba(43, 58, 240, 0.4);\n}\n.checkout-button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.checkout-button[_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n.checkout-terms[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6b7280;\n  margin-top: 16px;\n}\n.checkout-terms[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #2b3af0;\n  text-decoration: none;\n  font-weight: 500;\n}\n.checkout-terms[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.5;\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.animate-fadeIn[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 0.4s ease-out forwards;\n  opacity: 0;\n}\n.dark[_nghost-%COMP%]   .plans-container[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .plans-container[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      #0b0b18 0%,\n      #0f0f1f 100%);\n}\n.dark[_nghost-%COMP%]   .current-plan-title[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .current-plan-title[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .current-plan-header[_ngcontent-%COMP%]   .current-plan-title[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .current-plan-header[_ngcontent-%COMP%]   .current-plan-title[_ngcontent-%COMP%] {\n  color: #f8fafc;\n}\n.dark[_nghost-%COMP%]   .current-plan-subtitle[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .current-plan-subtitle[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .current-plan-header[_ngcontent-%COMP%]   .current-plan-subtitle[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .current-plan-header[_ngcontent-%COMP%]   .current-plan-subtitle[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .text-gray-900[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .text-gray-900[_ngcontent-%COMP%] {\n  color: #f8fafc !important;\n}\n.dark[_nghost-%COMP%]   .text-gray-500[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .text-gray-500[_ngcontent-%COMP%] {\n  color: #94a3b8 !important;\n}\n.dark[_nghost-%COMP%]   .text-gray-400[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .text-gray-400[_ngcontent-%COMP%] {\n  color: rgba(148, 163, 184, 0.75) !important;\n}\n.dark[_nghost-%COMP%]   .plan-card[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .plan-card[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .select-plan-card[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .select-plan-card[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .checkout-card[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .checkout-card[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .volume-change-summary[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .volume-change-summary[_ngcontent-%COMP%] {\n  background: #11122a;\n  border-color: rgba(255, 255, 255, 0.08);\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4), 0 12px 32px rgba(0, 0, 0, 0.35);\n}\n.dark[_nghost-%COMP%]   .plan-card[_ngcontent-%COMP%]:hover, .dark   [_nghost-%COMP%]   .plan-card[_ngcontent-%COMP%]:hover, \n.dark[_nghost-%COMP%]   .select-plan-card[_ngcontent-%COMP%]:hover, .dark   [_nghost-%COMP%]   .select-plan-card[_ngcontent-%COMP%]:hover, \n.dark[_nghost-%COMP%]   .checkout-card[_ngcontent-%COMP%]:hover, .dark   [_nghost-%COMP%]   .checkout-card[_ngcontent-%COMP%]:hover, \n.dark[_nghost-%COMP%]   .volume-change-summary[_ngcontent-%COMP%]:hover, .dark   [_nghost-%COMP%]   .volume-change-summary[_ngcontent-%COMP%]:hover {\n  border-color: rgba(43, 58, 240, 0.35);\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.45), 0 16px 40px rgba(0, 0, 0, 0.45);\n}\n.dark[_nghost-%COMP%]   .plan-card.payment-failed[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .plan-card.payment-failed[_ngcontent-%COMP%] {\n  border-color: rgba(248, 113, 113, 0.45);\n}\n.dark[_nghost-%COMP%]   .select-plan-card.featured[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .select-plan-card.featured[_ngcontent-%COMP%] {\n  border-color: #2b3af0;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4), 0 12px 28px rgba(43, 58, 240, 0.25);\n}\n.dark[_nghost-%COMP%]   .select-plan-card.featured[_ngcontent-%COMP%]:hover, .dark   [_nghost-%COMP%]   .select-plan-card.featured[_ngcontent-%COMP%]:hover {\n  border-color: #4f5af6;\n}\n.dark[_nghost-%COMP%]   .select-plan-card--current[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .select-plan-card--current[_ngcontent-%COMP%] {\n  border-color: #34d399;\n  box-shadow: 0 8px 28px rgba(52, 211, 153, 0.2);\n}\n.dark[_nghost-%COMP%]   .select-plan-card--current.featured[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .select-plan-card--current.featured[_ngcontent-%COMP%] {\n  border-color: #34d399;\n  box-shadow: 0 8px 28px rgba(52, 211, 153, 0.22);\n}\n.dark[_nghost-%COMP%]   .free-plan-card[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .free-plan-card[_ngcontent-%COMP%] {\n  border-color: rgba(255, 255, 255, 0.08);\n  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.35);\n}\n.dark[_nghost-%COMP%]   .free-plan-card[_ngcontent-%COMP%]:hover, .dark   [_nghost-%COMP%]   .free-plan-card[_ngcontent-%COMP%]:hover {\n  border-color: rgba(148, 163, 184, 0.25);\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);\n}\n.dark[_nghost-%COMP%]   .free-plan-card[_ngcontent-%COMP%]   .plan-badge.free[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .free-plan-card[_ngcontent-%COMP%]   .plan-badge.free[_ngcontent-%COMP%] {\n  background: rgba(148, 163, 184, 0.16);\n  color: #cbd5e1;\n}\n.dark[_nghost-%COMP%]   .free-plan-card[_ngcontent-%COMP%]   .plan-price[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .free-plan-card[_ngcontent-%COMP%]   .plan-price[_ngcontent-%COMP%] {\n  color: #f8fafc;\n}\n.dark[_nghost-%COMP%]   .free-plan-card[_ngcontent-%COMP%]   .plan-period[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .free-plan-card[_ngcontent-%COMP%]   .plan-period[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .free-plan-card[_ngcontent-%COMP%]   .plan-range[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .free-plan-card[_ngcontent-%COMP%]   .plan-range[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .card-header[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.04) 0%,\n      rgba(255, 255, 255, 0.02) 100%);\n  border-bottom-color: rgba(255, 255, 255, 0.08);\n}\n.dark[_nghost-%COMP%]   .card-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .card-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #f8fafc !important;\n}\n.dark[_nghost-%COMP%]   .price-section[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .price-section[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .payment-method[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .payment-method[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .optional-section[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .optional-section[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .selected-stats[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .selected-stats[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.04);\n}\n.dark[_nghost-%COMP%]   .price-section[_ngcontent-%COMP%]   .price-label[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .price-section[_ngcontent-%COMP%]   .price-label[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .price-section[_ngcontent-%COMP%]   .price-period[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .price-section[_ngcontent-%COMP%]   .price-period[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .price-section[_ngcontent-%COMP%]   .price-amount[_ngcontent-%COMP%]   .price-currency[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .price-section[_ngcontent-%COMP%]   .price-amount[_ngcontent-%COMP%]   .price-currency[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .price-section[_ngcontent-%COMP%]   .price-amount[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .price-section[_ngcontent-%COMP%]   .price-amount[_ngcontent-%COMP%] {\n  color: #f8fafc;\n}\n.dark[_nghost-%COMP%]   .payment-method[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .payment-method[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.04);\n}\n.dark[_nghost-%COMP%]   .payment-method[_ngcontent-%COMP%]   .payment-icon.link[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .payment-method[_ngcontent-%COMP%]   .payment-icon.link[_ngcontent-%COMP%] {\n  color: #cbd5f5;\n}\n.dark[_nghost-%COMP%]   .payment-method[_ngcontent-%COMP%]   .payment-text[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .payment-method[_ngcontent-%COMP%]   .payment-text[_ngcontent-%COMP%] {\n  color: #cbd5f5;\n}\n.dark[_nghost-%COMP%]   .payment-method[_ngcontent-%COMP%]   .payment-expiry[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .payment-method[_ngcontent-%COMP%]   .payment-expiry[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .feature-card[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .feature-card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.04);\n  border-color: rgba(255, 255, 255, 0.08);\n}\n.dark[_nghost-%COMP%]   .feature-card[_ngcontent-%COMP%]:hover, .dark   [_nghost-%COMP%]   .feature-card[_ngcontent-%COMP%]:hover {\n  border-color: rgba(43, 58, 240, 0.25);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.35);\n}\n.dark[_nghost-%COMP%]   .feature-content[_ngcontent-%COMP%]   .feature-label[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .feature-content[_ngcontent-%COMP%]   .feature-label[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .feature-content[_ngcontent-%COMP%]   .feature-value[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .feature-content[_ngcontent-%COMP%]   .feature-value[_ngcontent-%COMP%] {\n  color: #f8fafc;\n}\n.dark[_nghost-%COMP%]   .feature-icon.whitelabel[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .feature-icon.whitelabel[_ngcontent-%COMP%] {\n  color: #cbd5f5;\n}\n.dark[_nghost-%COMP%]   .feature-status[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .feature-status[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.18);\n}\n.dark[_nghost-%COMP%]   .feature-status.active[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .feature-status.active[_ngcontent-%COMP%] {\n  color: #4f5af6;\n}\n.dark[_nghost-%COMP%]   .optional-section[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .optional-section[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.04);\n}\n.dark[_nghost-%COMP%]   .optional-section[_ngcontent-%COMP%]   .optional-title[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .optional-section[_ngcontent-%COMP%]   .optional-title[_ngcontent-%COMP%] {\n  color: #f8fafc;\n}\n.dark[_nghost-%COMP%]   .optional-section[_ngcontent-%COMP%]   .optional-subtitle[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .optional-section[_ngcontent-%COMP%]   .optional-subtitle[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .optional-card[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .optional-card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.03);\n  border-color: rgba(255, 255, 255, 0.08);\n}\n.dark[_nghost-%COMP%]   .optional-card[_ngcontent-%COMP%]   .optional-label[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .optional-card[_ngcontent-%COMP%]   .optional-label[_ngcontent-%COMP%] {\n  color: #cbd5f5;\n}\n.dark[_nghost-%COMP%]   .optional-card[_ngcontent-%COMP%]   .optional-value[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .optional-card[_ngcontent-%COMP%]   .optional-value[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .optional-card[_ngcontent-%COMP%]   .optional-link[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .optional-card[_ngcontent-%COMP%]   .optional-link[_ngcontent-%COMP%] {\n  color: #4f5af6;\n}\n.dark[_nghost-%COMP%]   .optional-card[_ngcontent-%COMP%]   .optional-link[_ngcontent-%COMP%]:hover, .dark   [_nghost-%COMP%]   .optional-card[_ngcontent-%COMP%]   .optional-link[_ngcontent-%COMP%]:hover {\n  color: white;\n}\n.dark[_nghost-%COMP%]   .status-badge.success[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .status-badge.success[_ngcontent-%COMP%] {\n  background: rgba(43, 58, 240, 0.18);\n  color: #4f5af6;\n}\n.dark[_nghost-%COMP%]   .status-badge.warning[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .status-badge.warning[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.18);\n  color: #fbbf24;\n}\n.dark[_nghost-%COMP%]   .status-badge.error[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .status-badge.error[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.18);\n  color: #f87171;\n}\n.dark[_nghost-%COMP%]   .payment-alert[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .payment-alert[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(127, 29, 29, 0.35) 0%,\n      rgba(127, 29, 29, 0.25) 100%);\n  border-bottom-color: rgba(248, 113, 113, 0.35);\n  color: #fca5a5;\n}\n.dark[_nghost-%COMP%]   .payment-alert[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .payment-alert[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #f87171;\n}\n.dark[_nghost-%COMP%]   .plan-pricing[_ngcontent-%COMP%]   .plan-price[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .plan-pricing[_ngcontent-%COMP%]   .plan-price[_ngcontent-%COMP%] {\n  color: #f8fafc;\n}\n.dark[_nghost-%COMP%]   .plan-pricing[_ngcontent-%COMP%]   .plan-price.custom[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .plan-pricing[_ngcontent-%COMP%]   .plan-price.custom[_ngcontent-%COMP%] {\n  color: #f8fafc;\n}\n.dark[_nghost-%COMP%]   .plan-pricing[_ngcontent-%COMP%]   .plan-period[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .plan-pricing[_ngcontent-%COMP%]   .plan-period[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .plan-range[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .plan-range[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .free-plan-desc[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .free-plan-desc[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .plan-range[_ngcontent-%COMP%]     .font-semibold, .dark   [_nghost-%COMP%]   .plan-range[_ngcontent-%COMP%]     .font-semibold, \n.dark[_nghost-%COMP%]   .plan-range[_ngcontent-%COMP%]     b, .dark   [_nghost-%COMP%]   .plan-range[_ngcontent-%COMP%]     b, \n.dark[_nghost-%COMP%]   .free-plan-desc[_ngcontent-%COMP%]     .font-semibold, .dark   [_nghost-%COMP%]   .free-plan-desc[_ngcontent-%COMP%]     .font-semibold, \n.dark[_nghost-%COMP%]   .free-plan-desc[_ngcontent-%COMP%]     b, .dark   [_nghost-%COMP%]   .free-plan-desc[_ngcontent-%COMP%]     b {\n  color: #4f5af6;\n}\n.dark[_nghost-%COMP%]   .plan-range[_ngcontent-%COMP%]     .text-verifik-vivid-blue, .dark   [_nghost-%COMP%]   .plan-range[_ngcontent-%COMP%]     .text-verifik-vivid-blue, \n.dark[_nghost-%COMP%]   .free-plan-desc[_ngcontent-%COMP%]     .text-verifik-vivid-blue, .dark   [_nghost-%COMP%]   .free-plan-desc[_ngcontent-%COMP%]     .text-verifik-vivid-blue {\n  color: #4f5af6 !important;\n}\n.dark[_nghost-%COMP%]   .plan-features[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .plan-features[_ngcontent-%COMP%] {\n  border-top-color: rgba(255, 255, 255, 0.06);\n  border-bottom-color: rgba(255, 255, 255, 0.06);\n}\n.dark[_nghost-%COMP%]   .plan-stat[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .plan-stat[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .plan-stat[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .plan-stat[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  color: #f8fafc;\n}\n.dark[_nghost-%COMP%]   .plan-includes[_ngcontent-%COMP%]   .includes-title[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .plan-includes[_ngcontent-%COMP%]   .includes-title[_ngcontent-%COMP%] {\n  color: #f8fafc;\n}\n.dark[_nghost-%COMP%]   .plan-includes[_ngcontent-%COMP%]   .includes-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .plan-includes[_ngcontent-%COMP%]   .includes-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  color: #cbd5f5;\n}\n.dark[_nghost-%COMP%]   .plan-includes[_ngcontent-%COMP%]   .includes-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .plan-includes[_ngcontent-%COMP%]   .includes-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #4f5af6;\n}\n.dark[_nghost-%COMP%]   .plan-badge.free[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .plan-badge.free[_ngcontent-%COMP%] {\n  background: rgba(148, 163, 184, 0.16);\n  color: #cbd5e1;\n}\n.dark[_nghost-%COMP%]   .plan-badge.plus[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .plan-badge.plus[_ngcontent-%COMP%] {\n  background: rgba(79, 90, 246, 0.22);\n  color: #4f5af6;\n}\n.dark[_nghost-%COMP%]   .plan-badge.business[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .plan-badge.business[_ngcontent-%COMP%] {\n  background: rgba(79, 90, 246, 0.22);\n  color: white;\n}\n.dark[_nghost-%COMP%]   .plan-badge.enterprise[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .plan-badge.enterprise[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #1f2937 0%,\n      #0b0b18 100%);\n  color: white;\n}\n.dark[_nghost-%COMP%]   .select-button.free[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .select-button.free[_ngcontent-%COMP%] {\n  border-color: rgba(148, 163, 184, 0.45);\n  color: #cbd5f5;\n}\n.dark[_nghost-%COMP%]   .select-button.free[_ngcontent-%COMP%]:hover, .dark   [_nghost-%COMP%]   .select-button.free[_ngcontent-%COMP%]:hover {\n  background: rgba(148, 163, 184, 0.12);\n}\n.dark[_nghost-%COMP%]   .landing-slider-section[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .landing-slider-section[_ngcontent-%COMP%] {\n  background: rgba(43, 58, 240, 0.08);\n  border-color: rgba(79, 90, 246, 0.18);\n}\n.dark[_nghost-%COMP%]   .landing-slider-title[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .landing-slider-title[_ngcontent-%COMP%] {\n  color: #f8fafc;\n}\n.dark[_nghost-%COMP%]   .landing-slider-subtitle[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .landing-slider-subtitle[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .landing-slider-track[_ngcontent-%COMP%]   .track-label[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .landing-slider-track[_ngcontent-%COMP%]   .track-label[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .landing-slider-pill[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .landing-slider-pill[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #2b3af0 0%,\n      #3730a3 100%);\n  color: white;\n  box-shadow: 0 4px 16px rgba(43, 58, 240, 0.45);\n}\n.dark[_nghost-%COMP%]   .volume-change-summary__head-icon[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .volume-change-summary__head-icon[_ngcontent-%COMP%] {\n  background: rgba(79, 90, 246, 0.15);\n  border-color: rgba(99, 102, 241, 0.3);\n}\n.dark[_nghost-%COMP%]   .volume-change-summary__head-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .volume-change-summary__head-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #4f5af6;\n}\n.dark[_nghost-%COMP%]   .volume-change-summary__eyebrow[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .volume-change-summary__eyebrow[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .volume-change-summary__panel-label[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .volume-change-summary__panel-label[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .volume-change-summary__panel-unit[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .volume-change-summary__panel-unit[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .volume-change-summary__hint[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .volume-change-summary__hint[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .volume-change-summary__title[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .volume-change-summary__title[_ngcontent-%COMP%] {\n  color: #f8fafc;\n}\n.dark[_nghost-%COMP%]   .volume-change-summary__panel[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .volume-change-summary__panel[_ngcontent-%COMP%] {\n  border-color: rgba(255, 255, 255, 0.08);\n}\n.dark[_nghost-%COMP%]   .volume-change-summary__panel--from[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .volume-change-summary__panel--from[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.04);\n}\n.dark[_nghost-%COMP%]   .volume-change-summary__panel--to[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .volume-change-summary__panel--to[_ngcontent-%COMP%] {\n  background: rgba(43, 58, 240, 0.08);\n  border-color: rgba(67, 56, 202, 0.25);\n}\n.dark[_nghost-%COMP%]   .volume-change-summary__panel--to.volume-change-summary__panel--highlight[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .volume-change-summary__panel--to.volume-change-summary__panel--highlight[_ngcontent-%COMP%] {\n  border-color: rgba(43, 58, 240, 0.45);\n  box-shadow: 0 0 0 2px rgba(43, 58, 240, 0.15);\n  background: rgba(43, 58, 240, 0.12);\n}\n.dark[_nghost-%COMP%]   .volume-change-summary__panel-value[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .volume-change-summary__panel-value[_ngcontent-%COMP%] {\n  color: #f8fafc;\n}\n.dark[_nghost-%COMP%]   .volume-change-summary__mid-icon[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .volume-change-summary__mid-icon[_ngcontent-%COMP%] {\n  background: #11122a;\n  border-color: rgba(255, 255, 255, 0.08);\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.35);\n}\n.dark[_nghost-%COMP%]   .volume-change-summary__mid-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .volume-change-summary__mid-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #4f5af6;\n}\n.dark[_nghost-%COMP%]   .volume-change-summary__hint[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .volume-change-summary__hint[_ngcontent-%COMP%] {\n  border-top-color: rgba(255, 255, 255, 0.06);\n}\n.dark[_nghost-%COMP%]   .checkout-card[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .checkout-card[_ngcontent-%COMP%] {\n  border-color: rgba(79, 90, 246, 0.18);\n}\n.dark[_nghost-%COMP%]   .checkout-stats[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .checkout-stats[_ngcontent-%COMP%] {\n  background: rgba(43, 58, 240, 0.08);\n  border-bottom-color: rgba(79, 90, 246, 0.18);\n}\n.dark[_nghost-%COMP%]   .checkout-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .checkout-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #4f5af6;\n}\n.dark[_nghost-%COMP%]   .checkout-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .checkout-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  color: #f8fafc;\n}\n.dark[_nghost-%COMP%]   .checkout-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .checkout-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .checkout-stats[_ngcontent-%COMP%]   .stat-divider[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .checkout-stats[_ngcontent-%COMP%]   .stat-divider[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.12);\n}\n.dark[_nghost-%COMP%]   .checkout-features[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .checkout-features[_ngcontent-%COMP%] {\n  border-bottom-color: rgba(79, 90, 246, 0.18);\n}\n.dark[_nghost-%COMP%]   .checkout-features[_ngcontent-%COMP%]   .features-column[_ngcontent-%COMP%]   .features-title.included-title[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .checkout-features[_ngcontent-%COMP%]   .features-column[_ngcontent-%COMP%]   .features-title.included-title[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .checkout-features[_ngcontent-%COMP%]   .features-column[_ngcontent-%COMP%]   .features-title.included-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .checkout-features[_ngcontent-%COMP%]   .features-column[_ngcontent-%COMP%]   .features-title.included-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #4f5af6;\n}\n.dark[_nghost-%COMP%]   .checkout-features[_ngcontent-%COMP%]   .features-column[_ngcontent-%COMP%]   .features-title.extra-title[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .checkout-features[_ngcontent-%COMP%]   .features-column[_ngcontent-%COMP%]   .features-title.extra-title[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .checkout-features[_ngcontent-%COMP%]   .features-column[_ngcontent-%COMP%]   .features-title.extra-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .checkout-features[_ngcontent-%COMP%]   .features-column[_ngcontent-%COMP%]   .features-title.extra-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #f8fafc;\n}\n.dark[_nghost-%COMP%]   .checkout-features[_ngcontent-%COMP%]   .features-column[_ngcontent-%COMP%]   .features-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .checkout-features[_ngcontent-%COMP%]   .features-column[_ngcontent-%COMP%]   .features-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  color: #cbd5f5;\n  border-bottom-color: rgba(255, 255, 255, 0.06);\n}\n.dark[_nghost-%COMP%]   .checkout-features[_ngcontent-%COMP%]   .features-column[_ngcontent-%COMP%]   .features-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .feature-count[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .checkout-features[_ngcontent-%COMP%]   .features-column[_ngcontent-%COMP%]   .features-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .feature-count[_ngcontent-%COMP%] {\n  color: #4f5af6;\n}\n.dark[_nghost-%COMP%]   .checkout-features[_ngcontent-%COMP%]   .features-column[_ngcontent-%COMP%]   .features-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .feature-check[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .checkout-features[_ngcontent-%COMP%]   .features-column[_ngcontent-%COMP%]   .features-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .feature-check[_ngcontent-%COMP%] {\n  color: #34d399;\n}\n.dark[_nghost-%COMP%]   .checkout-features[_ngcontent-%COMP%]   .features-column[_ngcontent-%COMP%]   .features-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .feature-price[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .checkout-features[_ngcontent-%COMP%]   .features-column[_ngcontent-%COMP%]   .features-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .feature-price[_ngcontent-%COMP%] {\n  color: #cbd5f5;\n}\n.dark[_nghost-%COMP%]   .checkout-features[_ngcontent-%COMP%]   .features-column[_ngcontent-%COMP%]   .features-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .extras-link[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .checkout-features[_ngcontent-%COMP%]   .features-column[_ngcontent-%COMP%]   .features-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .extras-link[_ngcontent-%COMP%] {\n  color: #4f5af6;\n}\n.dark[_nghost-%COMP%]   .extra-bio-notice[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .extra-bio-notice[_ngcontent-%COMP%] {\n  border-color: rgba(79, 90, 246, 0.2);\n}\n.dark[_nghost-%COMP%]   .extra-bio-header[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .extra-bio-header[_ngcontent-%COMP%] {\n  background: rgba(43, 58, 240, 0.12);\n}\n.dark[_nghost-%COMP%]   .extra-bio-header[_ngcontent-%COMP%]:hover, .dark   [_nghost-%COMP%]   .extra-bio-header[_ngcontent-%COMP%]:hover {\n  background: rgba(43, 58, 240, 0.18);\n}\n.dark[_nghost-%COMP%]   .extra-bio-header[_ngcontent-%COMP%]   .extra-bio-left[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .extra-bio-header[_ngcontent-%COMP%]   .extra-bio-left[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #f8fafc;\n}\n.dark[_nghost-%COMP%]   .extra-bio-header[_ngcontent-%COMP%]   .extra-bio-left[_ngcontent-%COMP%]   .info-icon[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .extra-bio-header[_ngcontent-%COMP%]   .extra-bio-left[_ngcontent-%COMP%]   .info-icon[_ngcontent-%COMP%] {\n  color: #4f5af6;\n}\n.dark[_nghost-%COMP%]   .extra-bio-header[_ngcontent-%COMP%]   .expand-icon[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .extra-bio-header[_ngcontent-%COMP%]   .expand-icon[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .extra-bio-body[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .extra-bio-body[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.02);\n}\n.dark[_nghost-%COMP%]   .extra-bio-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .extra-bio-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .extra-bio-body[_ngcontent-%COMP%]   .extra-bio-costs[_ngcontent-%COMP%]   .bio-cost-item[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .extra-bio-body[_ngcontent-%COMP%]   .extra-bio-costs[_ngcontent-%COMP%]   .bio-cost-item[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid rgba(79, 90, 246, 0.15);\n}\n.dark[_nghost-%COMP%]   .extra-bio-body[_ngcontent-%COMP%]   .extra-bio-costs[_ngcontent-%COMP%]   .bio-cost-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .extra-bio-body[_ngcontent-%COMP%]   .extra-bio-costs[_ngcontent-%COMP%]   .bio-cost-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #cbd5f5;\n}\n.dark[_nghost-%COMP%]   .extra-bio-body[_ngcontent-%COMP%]   .extra-bio-costs[_ngcontent-%COMP%]   .bio-cost-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .extra-bio-body[_ngcontent-%COMP%]   .extra-bio-costs[_ngcontent-%COMP%]   .bio-cost-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #f8fafc;\n  font-weight: 600;\n}\n.dark[_nghost-%COMP%]   .checkout-terms[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .checkout-terms[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .checkout-terms[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .checkout-terms[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #4f5af6;\n}\n.dark[_nghost-%COMP%]   .range-slider[_ngcontent-%COMP%]   .range-slider__value[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .range-slider[_ngcontent-%COMP%]   .range-slider__value[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .range-slider[_ngcontent-%COMP%]   .range-slider__input[_ngcontent-%COMP%]::-webkit-slider-runnable-track, .dark   [_nghost-%COMP%]   .range-slider[_ngcontent-%COMP%]   .range-slider__input[_ngcontent-%COMP%]::-webkit-slider-runnable-track {\n  background-color: rgba(255, 255, 255, 0.14);\n}\n.dark[_nghost-%COMP%]   .range-slider[_ngcontent-%COMP%]   .range-slider__input[_ngcontent-%COMP%]::-webkit-slider-thumb, .dark   [_nghost-%COMP%]   .range-slider[_ngcontent-%COMP%]   .range-slider__input[_ngcontent-%COMP%]::-webkit-slider-thumb {\n  border-color: #11122a !important;\n  box-shadow: 0 0 0 4px #11122a, 0 2px 10px rgba(43, 58, 240, 0.45);\n}\n.dark[_nghost-%COMP%]   .range-slider[_ngcontent-%COMP%]   .range-slider__input[_ngcontent-%COMP%]::-moz-range-track, .dark   [_nghost-%COMP%]   .range-slider[_ngcontent-%COMP%]   .range-slider__input[_ngcontent-%COMP%]::-moz-range-track {\n  background-color: rgba(255, 255, 255, 0.14);\n}\n.dark[_nghost-%COMP%]   .range-slider[_ngcontent-%COMP%]   .range-slider__input[_ngcontent-%COMP%]::-moz-range-thumb, .dark   [_nghost-%COMP%]   .range-slider[_ngcontent-%COMP%]   .range-slider__input[_ngcontent-%COMP%]::-moz-range-thumb {\n  border-color: #11122a !important;\n  box-shadow: 0 0 0 4px #11122a, 0 2px 10px rgba(43, 58, 240, 0.45);\n}\n.dark[_nghost-%COMP%]   .selected-plan-card[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .selected-plan-card[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .features-table[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .features-table[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%] {\n  background: transparent;\n  border-color: rgba(255, 255, 255, 0.08);\n}\n.dark[_nghost-%COMP%]   .features-table[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child, .dark   [_nghost-%COMP%]   .features-table[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  color: #cbd5f5;\n}\n.dark[_nghost-%COMP%]   .plan-description[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .plan-description[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #f8fafc;\n}\n.dark[_nghost-%COMP%]   .plan-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .plan-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .slider-section[_ngcontent-%COMP%]   .slider-title[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .slider-section[_ngcontent-%COMP%]   .slider-title[_ngcontent-%COMP%] {\n  color: #f8fafc;\n}\n.dark[_nghost-%COMP%]   .upgrade-hint[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .upgrade-hint[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .back-button[_ngcontent-%COMP%]:hover, .dark   [_nghost-%COMP%]   .back-button[_ngcontent-%COMP%]:hover {\n  background: rgba(43, 58, 240, 0.15);\n}\n.dark[_nghost-%COMP%]   .usage-period[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .usage-period[_ngcontent-%COMP%] {\n  background: rgba(43, 58, 240, 0.16);\n  border-color: rgba(79, 90, 246, 0.28);\n}\n.dark[_nghost-%COMP%]   .usage-period__title[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .usage-period__title[_ngcontent-%COMP%] {\n  color: #f8fafc;\n}\n.dark[_nghost-%COMP%]   .usage-period__reset[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .usage-period__reset[_ngcontent-%COMP%] {\n  color: rgb(147, 197, 253);\n}\n.dark[_nghost-%COMP%]   .usage-period__date[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .usage-period__date[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .usage-bars[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .usage-bars[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.04);\n  border-color: rgba(255, 255, 255, 0.1);\n}\n/*# sourceMappingURL=smart-enroll-plans.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FleetPlansComponent, [{
    type: Component,
    args: [{ selector: "fleet-plans", standalone: true, imports: [
      CommonModule,
      FormsModule,
      RouterModule,
      TranslocoModule,
      MatButtonModule,
      MatIconModule,
      MatProgressSpinnerModule,
      FleetNavComponent
    ], template: `<ng-container *transloco="let t">\r
    <div class="plans-container w-full flex justify-center">\r
        <div class="w-full max-w-5xl px-4 sm:px-8 py-8">\r
            <div class="mb-6">\r
                <fleet-nav />\r
            </div>\r
\r
            <div class="current-plan-header flex items-center gap-4 mb-8">\r
                @if (view() === 'select' || (view() === 'change' && plan())) {\r
                    <button (click)="goBack()" class="back-button" mat-icon-button type="button">\r
                        <mat-icon>arrow_back</mat-icon>\r
                    </button>\r
                }\r
                <div class="header-icon">\r
                    <mat-icon>local_shipping</mat-icon>\r
                </div>\r
                <div>\r
                    <h1 class="current-plan-title">{{ t('smartFleet.plans.title') }}</h1>\r
                    <p class="current-plan-subtitle">{{ t('smartFleet.plans.subtitle') }}</p>\r
                </div>\r
            </div>\r
\r
            @if (isLoading() && !overview()) {\r
                <div class="flex justify-center py-16"><mat-spinner diameter="40"></mat-spinner></div>\r
            } @else if (loadFailed() && !overview()) {\r
                <div class="payment-alert">\r
                    <mat-icon class="text-red-500">error_outline</mat-icon>\r
                    <span>{{ t('smartFleet.plans.loadFailed') }}</span>\r
                </div>\r
            } @else {\r
                <!-- Current plan -->\r
                @if (view() === 'current') {\r
                  @if (plan(); as current) {\r
                    <div class="plan-card mb-6 animate-fadeIn" [class.payment-failed]="current.paymentFailedAt">\r
                        <div class="card-header">\r
                            <div class="flex items-center gap-3">\r
                                <div class="card-icon" [ngClass]="current.tier || 'plus'">\r
                                    <mat-icon>workspace_premium</mat-icon>\r
                                </div>\r
                                <div>\r
                                    <p class="text-sm text-gray-500">{{ t('smartFleet.plans.yourPlan') }}</p>\r
                                    <h2 class="font-semibold text-gray-900 text-lg">{{ current.name }}</h2>\r
                                </div>\r
                            </div>\r
                            <div\r
                                class="status-badge"\r
                                [ngClass]="current.paymentFailedAt ? 'error' : current.cancelAtPeriodEnd ? 'warning' : 'success'"\r
                            >\r
                                <span class="status-dot"></span>\r
                                @if (current.paymentFailedAt) {\r
                                    <span>{{ t('smartFleet.plans.statusPaymentFailed') }}</span>\r
                                } @else if (current.cancelAtPeriodEnd) {\r
                                    <span>{{ t('smartFleet.plans.statusCancelling') }}</span>\r
                                } @else {\r
                                    <span>{{ t('smartFleet.plans.statusActive') }}</span>\r
                                }\r
                            </div>\r
                        </div>\r
\r
                        @if (current.paymentFailedAt) {\r
                            <div class="payment-alert">\r
                                <mat-icon class="text-red-500">error_outline</mat-icon>\r
                                <span>{{ t('smartFleet.plans.paymentFailedHint') }}</span>\r
                            </div>\r
                        }\r
\r
                        <div class="card-body">\r
                            <div class="price-section">\r
                                <div class="price-label">{{ t('smartFleet.plans.monthlyValue') }}</div>\r
                                <div class="price-amount">\r
                                    {{ planMonthlyTotal() | currency }} <span class="price-currency">USD</span>\r
                                </div>\r
                                <div class="price-period">\r
                                    @if (current.cancelAtPeriodEnd) {\r
                                        <span>{{ t('smartFleet.plans.endsOn', { date: (current.cancelAt || current.endDate | date: 'longDate') }) }}</span>\r
                                    } @else if (current.endDate) {\r
                                        <span>{{ t('smartFleet.plans.nextPayment', { date: (current.endDate | date: 'longDate') }) }}</span>\r
                                    }\r
                                </div>\r
                            </div>\r
\r
                            <div class="payment-method">\r
                                @if (current.cardBrand === 'link') {\r
                                    <img [src]="cardLogo('link')" class="h-8 w-12 object-contain" alt="Link" />\r
                                    <span class="payment-text">{{ t('smartFleet.plans.paidWithLink') }}</span>\r
                                } @else if (current.cardBrand && current.lastFour) {\r
                                    <img [src]="cardLogo(current.cardBrand)" class="h-8 w-12 object-contain" alt="card" />\r
                                    <div class="payment-details">\r
                                        <span class="payment-text">{{\r
                                            t('smartFleet.plans.cardEnding', { brand: current.cardBrand, last4: current.lastFour })\r
                                        }}</span>\r
                                        @if (current.cardExpMonth) {\r
                                            <span class="payment-expiry"\r
                                                >{{ t('smartFleet.plans.expires') }} {{ current.cardExpMonth }}/{{ current.cardExpYear }}</span\r
                                            >\r
                                        }\r
                                    </div>\r
                                } @else {\r
                                    <mat-icon class="text-gray-400">credit_card_off</mat-icon>\r
                                    <span class="payment-text text-gray-500">{{ t('smartFleet.plans.noCard') }}</span>\r
                                }\r
                            </div>\r
\r
                            <div class="features-grid">\r
                                <div class="feature-card">\r
                                    <div class="feature-icon biometrics">\r
                                        <mat-icon>directions_car</mat-icon>\r
                                    </div>\r
                                    <div class="feature-content">\r
                                        <span class="feature-label">{{ t('smartFleet.plans.vehicleSlots') }}</span>\r
                                        <span class="feature-value">{{ current.assetLimit | number }}</span>\r
                                    </div>\r
                                    <mat-icon class="feature-status active">check_circle</mat-icon>\r
                                </div>\r
\r
                                <div class="feature-card">\r
                                    <div class="feature-icon email">\r
                                        <mat-icon>local_shipping</mat-icon>\r
                                    </div>\r
                                    <div class="feature-content">\r
                                        <span class="feature-label">{{ t('smartFleet.plans.vehiclesInUse') }}</span>\r
                                        <span class="feature-value">{{ activeAssets() | number }} / {{ usage()?.limit | number }}</span>\r
                                    </div>\r
                                    <mat-icon class="feature-status" [class.active]="activeAssets() < (usage()?.limit ?? 0)">\r
                                        {{ activeAssets() < (usage()?.limit ?? 0) ? 'check_circle' : 'error_outline' }}\r
                                    </mat-icon>\r
                                </div>\r
\r
                                <div class="feature-card">\r
                                    <div class="feature-icon whitelabel">\r
                                        <mat-icon>payments</mat-icon>\r
                                    </div>\r
                                    <div class="feature-content">\r
                                        <span class="feature-label">{{ t('smartFleet.plans.pricePerVehicle') }}</span>\r
                                        <span class="feature-value">{{ current.amount | currency }}</span>\r
                                    </div>\r
                                    <mat-icon class="feature-status active">check_circle</mat-icon>\r
                                </div>\r
\r
                                <div class="feature-card">\r
                                    <div class="feature-icon api">\r
                                        <mat-icon>description</mat-icon>\r
                                    </div>\r
                                    <div class="feature-content">\r
                                        <span class="feature-label">{{ t('smartFleet.plans.reportCreditsMonth') }}</span>\r
                                        <span class="feature-value"\r
                                            >{{ reports()?.credits || 0 | number: '1.0-2' }}\r
                                            <span class="text-sm font-normal text-gray-500"\r
                                                >({{ formatUsd(reportsCreditsMonth()) }})</span\r
                                            ></span\r
                                        >\r
                                    </div>\r
                                    <mat-icon class="feature-status active">receipt_long</mat-icon>\r
                                </div>\r
                            </div>\r
\r
                            <ng-container *ngTemplateOutlet="creditsInfo" />\r
\r
                            <div class="card-actions flex flex-wrap gap-3">\r
                                <button\r
                                    (click)="manageBilling()"\r
                                    class="action-button primary"\r
                                    [class.error]="current.paymentFailedAt"\r
                                    mat-flat-button\r
                                    type="button"\r
                                >\r
                                    {{ t('smartFleet.plans.manageBilling') }}\r
                                </button>\r
                                @if (current.cancelAtPeriodEnd) {\r
                                    <button mat-stroked-button type="button" [disabled]="isWorking()" (click)="resumePlan()">\r
                                        {{ t('smartFleet.plans.resume') }}\r
                                    </button>\r
                                } @else {\r
                                    <button mat-button color="warn" type="button" [disabled]="isWorking()" (click)="cancelPlan()">\r
                                        {{ t('smartFleet.plans.cancel') }}\r
                                    </button>\r
                                }\r
                            </div>\r
                        </div>\r
                    </div>\r
\r
                    <div class="upgrade-section animate-fadeIn">\r
                        <div class="upgrade-header">\r
                            <div class="upgrade-header-content">\r
                                <div class="upgrade-badge">\r
                                    <mat-icon>auto_awesome</mat-icon>\r
                                    <span>{{ t('smartFleet.plans.upgradeAvailable') }}</span>\r
                                </div>\r
                                <h2 class="upgrade-headline">{{ t('smartFleet.plans.betterPlan') }}</h2>\r
                                <p class="upgrade-subheadline">{{ t('smartFleet.plans.betterPlanText') }}</p>\r
                            </div>\r
                            <div class="upgrade-illustration">\r
                                <div class="floating-icon icon-1"><mat-icon>local_shipping</mat-icon></div>\r
                                <div class="floating-icon icon-2"><mat-icon>notifications_active</mat-icon></div>\r
                                <div class="floating-icon icon-3"><mat-icon>description</mat-icon></div>\r
                            </div>\r
                        </div>\r
                        <div class="upgrade-cta">\r
                            <button (click)="changeView('change')" class="upgrade-button" mat-flat-button type="button">\r
                                <span>{{ t('smartFleet.plans.explorePlans') }}</span>\r
                                <mat-icon>arrow_forward</mat-icon>\r
                            </button>\r
                            <span class="upgrade-hint">{{ t('smartFleet.plans.noCommitment') }}</span>\r
                        </div>\r
                    </div>\r
                  }\r
                }\r
\r
                <!-- Plan grid -->\r
                @if (view() === 'change') {\r
                    <div class="mb-6">\r
                        <h2 class="text-2xl font-semibold text-gray-900">{{ t('smartFleet.plans.selectPlan') }}</h2>\r
                        <p class="text-gray-500 mt-1">{{ t('smartFleet.plans.chooseBestPlan') }}</p>\r
                    </div>\r
\r
                    <div class="plans-grid">\r
                        @for (key of tierKeys; track key) {\r
                            @if (tierOf(key); as tier) {\r
                                <div\r
                                    class="select-plan-card animate-fadeIn"\r
                                    [class.featured]="key === 'business'"\r
                                    [class.select-plan-card--current]="isCurrentTier(key)"\r
                                >\r
                                    @if (isCurrentTier(key)) {\r
                                        <div class="current-plan-badge" [class.current-plan-badge--offset]="key === 'business'">\r
                                            {{ t('smartFleet.plans.currentPlanBadge') }}\r
                                        </div>\r
                                    }\r
                                    @if (key === 'business') {\r
                                        <div class="featured-badge">{{ t('smartFleet.plans.bestPrice') }}</div>\r
                                    }\r
                                    <div class="plan-badge" [ngClass]="key">{{ t('smartFleet.plans.tier.' + key) }}</div>\r
                                    <div class="plan-pricing">\r
                                        <span class="plan-price">{{ tier.amount ?? 0 | currency }}</span>\r
                                        <span class="plan-period">/{{ t('smartFleet.plans.perVehicleMonth') }}</span>\r
                                    </div>\r
                                    <p class="plan-range">\r
                                        {{ t('smartFleet.plans.vehicleRange', { min: tier.minAssets, max: tier.maxAssets }) }}\r
                                    </p>\r
                                    <div class="plan-features">\r
                                        <div class="plan-stat">\r
                                            <span class="stat-label">{{ t('smartFleet.plans.startingAt') }}</span>\r
                                            <span class="stat-value">{{ tierStartingPrice(key) | currency }}/{{ t('smartFleet.plans.month') }}</span>\r
                                        </div>\r
                                        <div class="plan-stat">\r
                                            <span class="stat-label">{{ t('smartFleet.plans.usageCredits') }}</span>\r
                                            <span class="stat-value">{{ t('smartFleet.plans.perEndpointUsd') }}</span>\r
                                        </div>\r
                                    </div>\r
                                    <div class="plan-includes">\r
                                        <p class="includes-title">{{ t('smartFleet.plans.included') }}</p>\r
                                        <ul class="includes-list">\r
                                            <li><mat-icon>check</mat-icon>{{ t('smartFleet.plans.benefitMonitoring') }}</li>\r
                                            <li><mat-icon>check</mat-icon>{{ t('smartFleet.plans.benefitAlerts') }}</li>\r
                                            <li><mat-icon>check</mat-icon>{{ t('smartFleet.plans.benefitReports') }}</li>\r
                                            @if (key === 'business') {\r
                                                <li><mat-icon>check</mat-icon>{{ t('smartFleet.plans.benefitLowerPrice') }}</li>\r
                                            }\r
                                        </ul>\r
                                    </div>\r
                                    @if (!tier.available) {\r
                                        <p class="mt-2 text-center text-xs text-amber-700 dark:text-amber-300">\r
                                            {{ t('smartFleet.plans.notAvailableHint') }}\r
                                        </p>\r
                                    }\r
                                    <button\r
                                        (click)="changeView('select', key)"\r
                                        class="select-button"\r
                                        [ngClass]="key"\r
                                        mat-flat-button\r
                                        type="button"\r
                                        [disabled]="!tier.available || !tierFits(key)"\r
                                    >\r
                                        @if (!tier.available) {\r
                                            {{ t('smartFleet.plans.notAvailable') }}\r
                                        } @else if (!tierFits(key)) {\r
                                            {{ t('smartFleet.plans.tooManyVehicles') }}\r
                                        } @else {\r
                                            {{ isCurrentTier(key) ? t('smartFleet.plans.adjustSlots') : t('smartFleet.plans.viewPlan') }}\r
                                        }\r
                                    </button>\r
                                </div>\r
                            }\r
                        }\r
\r
                        <div class="select-plan-card animate-fadeIn">\r
                            <div class="plan-badge enterprise">{{ t('smartFleet.plans.tier.enterprise') }}</div>\r
                            <div class="plan-pricing">\r
                                <span class="plan-price custom">{{ t('smartFleet.plans.contactSales') }}</span>\r
                            </div>\r
                            <p class="plan-range">+{{ usage()?.enterpriseFrom | number }} {{ t('smartFleet.plans.vehicles') }}</p>\r
                            <div class="plan-includes">\r
                                <p class="includes-title">{{ t('smartFleet.plans.included') }}</p>\r
                                <ul class="includes-list">\r
                                    <li><mat-icon>check</mat-icon>{{ t('smartFleet.plans.everythingInBusiness') }}</li>\r
                                    <li><mat-icon>check</mat-icon>{{ t('smartFleet.plans.customPricing') }}</li>\r
                                    <li><mat-icon>check</mat-icon>{{ t('smartFleet.plans.dedicatedSupport') }}</li>\r
                                </ul>\r
                            </div>\r
                            <button (click)="purchaseEnterprise()" class="select-button enterprise" mat-flat-button type="button">\r
                                {{ t('smartFleet.plans.contactSales') }}\r
                            </button>\r
                        </div>\r
                    </div>\r
\r
                    <div class="select-plan-card free-plan-card animate-fadeIn mt-6" [class.select-plan-card--current]="isCurrentTier('free')">\r
                        @if (isCurrentTier('free')) {\r
                            <div class="current-plan-badge">{{ t('smartFleet.plans.currentPlanBadge') }}</div>\r
                        }\r
                        <div class="plan-badge free">{{ t('smartFleet.plans.tier.free') }}</div>\r
                        <div class="plan-pricing">\r
                            <span class="plan-price">$0</span>\r
                            <span class="plan-period">/{{ t('smartFleet.plans.month') }}</span>\r
                        </div>\r
                        <p class="plan-range">{{ t('smartFleet.plans.freeRange', { count: usage()?.freeLimit ?? 0 }) }}</p>\r
                        <div class="plan-includes">\r
                            <p class="includes-title">{{ t('smartFleet.plans.included') }}</p>\r
                            <ul class="includes-list">\r
                                <li><mat-icon>check</mat-icon>{{ t('smartFleet.plans.freeSetup') }}</li>\r
                                <li><mat-icon>check</mat-icon>{{ t('smartFleet.plans.benefitReports') }}</li>\r
                                <li><mat-icon>close</mat-icon>{{ t('smartFleet.plans.freeNoRuns') }}</li>\r
                            </ul>\r
                        </div>\r
                        @if (isRenewing()) {\r
                            <button (click)="cancelPlan()" class="select-button free" mat-stroked-button type="button" [disabled]="isWorking()">\r
                                {{ t('smartFleet.plans.switchToFree') }}\r
                                <mat-icon>arrow_forward</mat-icon>\r
                            </button>\r
                        }\r
                    </div>\r
\r
                    <div class="mt-6">\r
                        <ng-container *ngTemplateOutlet="creditsInfo" />\r
                    </div>\r
                }\r
\r
                <!-- Slots + checkout -->\r
                @if (view() === 'select') {\r
                  @if (tier(); as selected) {\r
                    <div class="landing-slider-section animate-fadeIn">\r
                        <h2 class="landing-slider-title">{{ t('smartFleet.plans.howManyVehicles') }}</h2>\r
                        <p class="landing-slider-subtitle">\r
                            {{ t('smartFleet.plans.selectVolume', { min: sliderMin(), max: sliderMax() }) }}\r
                        </p>\r
                        <div class="landing-slider-track">\r
                            <span class="track-label">{{ sliderMin() | number }}</span>\r
                            <div class="track-slider">\r
                                <div class="range-slider" [style.--track-fill-percentage]="sliderPercent() + '%'">\r
                                    <input\r
                                        [min]="sliderMin()"\r
                                        [max]="sliderMax()"\r
                                        step="1"\r
                                        [ngModel]="slots()"\r
                                        (ngModelChange)="setSlots($event)"\r
                                        class="range-slider__input"\r
                                        type="range"\r
                                        [attr.aria-label]="t('smartFleet.plans.vehicles')"\r
                                    />\r
                                </div>\r
                            </div>\r
                            <span class="track-label">{{ sliderMax() | number }}</span>\r
                        </div>\r
                        <div class="landing-slider-pill">\r
                            <strong>{{ slots() | number }}</strong> {{ t('smartFleet.plans.vehicles') }}\r
                        </div>\r
                        @if (activeAssets() > selected.minAssets) {\r
                            <p class="mt-3 text-center text-sm text-gray-500">{{ t('smartFleet.plans.minHint', { count: activeAssets() }) }}</p>\r
                        }\r
                    </div>\r
\r
                    <div class="checkout-card animate-fadeIn" [ngClass]="'checkout-' + selected.key">\r
                        <div class="checkout-header" [ngClass]="'header-' + selected.key">\r
                            <div class="checkout-plan-info">\r
                                <div class="checkout-badge" [ngClass]="selected.key">\r
                                    <mat-icon>{{ selected.key === 'plus' ? 'star' : 'diamond' }}</mat-icon>\r
                                    <span>{{ selected.name || t('smartFleet.plans.tier.' + selected.key) }}</span>\r
                                </div>\r
                                <span class="checkout-plan-type">{{ t('smartFleet.plans.perVehicle') }}</span>\r
                            </div>\r
                            <div class="checkout-price">\r
                                <span class="price-currency">$</span>\r
                                <span class="price-value">{{ monthlyTotal() | number: '1.0-2' }}</span>\r
                                <span class="price-period">/{{ t('smartFleet.plans.month') }}</span>\r
                            </div>\r
                        </div>\r
                        <div class="checkout-stats">\r
                            <div class="stat-item">\r
                                <mat-icon>directions_car</mat-icon>\r
                                <span class="stat-value">{{ slots() | number }}</span>\r
                                <span class="stat-label">{{ t('smartFleet.plans.vehicles') }}</span>\r
                            </div>\r
                            <div class="stat-divider"></div>\r
                            <div class="stat-item">\r
                                <mat-icon>payments</mat-icon>\r
                                <span class="stat-value">{{ selected.amount ?? 0 | currency }}</span>\r
                                <span class="stat-label">{{ t('smartFleet.plans.pricePerVehicle') }}</span>\r
                            </div>\r
                            <div class="stat-divider"></div>\r
                            <div class="stat-item">\r
                                <mat-icon>toll</mat-icon>\r
                                <span class="stat-value"\r
                                    >~{{ monitoringCredits() | number: '1.0-2' }}\r
                                    <span class="text-xs font-normal opacity-80">({{ formatUsd(monitoringCredits()) }})</span></span\r
                                >\r
                                <span class="stat-label">{{ t('smartFleet.plans.monitoringCredits') }}</span>\r
                            </div>\r
                        </div>\r
                        <div class="checkout-actions">\r
                            <button\r
                                (click)="checkout()"\r
                                [disabled]="isWorking() || isUnchanged()"\r
                                class="checkout-button"\r
                                [ngClass]="selected.key"\r
                                mat-flat-button\r
                                type="button"\r
                            >\r
                                @if (isWorking()) {\r
                                    <mat-spinner diameter="20" class="mr-2"></mat-spinner>\r
                                }\r
                                @if (isUnchanged()) {\r
                                    {{ t('smartFleet.plans.noChange') }}\r
                                } @else if (isRenewing()) {\r
                                    {{ t('smartFleet.plans.applyChange') }}\r
                                } @else {\r
                                    {{ t('smartFleet.plans.purchase') }}\r
                                }\r
                            </button>\r
                            <p class="mt-3 text-center text-xs text-gray-500">\r
                                {{ isRenewing() ? t('smartFleet.plans.prorationHint') : t('smartFleet.plans.stripeHint') }}\r
                            </p>\r
                        </div>\r
                    </div>\r
\r
                    <div class="mt-6">\r
                        <ng-container *ngTemplateOutlet="creditsInfo" />\r
                    </div>\r
                  }\r
                }\r
            }\r
        </div>\r
    </div>\r
\r
    <ng-template #creditsInfo>\r
        <div class="optional-section fleet-plans-cost-detail">\r
            <h3 class="optional-title text-lg">{{ t('smartFleet.plans.pricingModelTitle') }}</h3>\r
            <p class="optional-subtitle text-base leading-relaxed">{{ t('smartFleet.plans.pricingModelBody') }}</p>\r
\r
            <div class="mt-4 grid gap-3 sm:grid-cols-2">\r
                <div class="rounded-xl border border-stone-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-900">\r
                    <p class="text-sm font-semibold text-stone-800 dark:text-stone-100">\r
                        {{ t('smartFleet.plans.subscriptionBlockTitle') }}\r
                    </p>\r
                    <p class="mt-1 text-sm text-stone-600 dark:text-stone-300">\r
                        {{ t('smartFleet.plans.subscriptionBlockBody') }}\r
                    </p>\r
                </div>\r
                <div class="rounded-xl border border-sky-200 bg-sky-50/80 p-4 dark:border-sky-900/50 dark:bg-sky-950/30">\r
                    <p class="text-sm font-semibold text-sky-900 dark:text-sky-100">\r
                        {{ t('smartFleet.plans.usageBlockTitle') }}\r
                    </p>\r
                    <p class="mt-1 text-sm text-sky-900/90 dark:text-sky-100/90">\r
                        {{ t('smartFleet.plans.usageBlockBody') }}\r
                    </p>\r
                </div>\r
            </div>\r
\r
            <h4 class="optional-title mt-6 text-base">{{ t('smartFleet.plans.creditsTitle') }}</h4>\r
            <p class="optional-subtitle text-sm">{{ t('smartFleet.plans.creditsSubtitle') }}</p>\r
            <div class="optional-grid">\r
                <div class="optional-card">\r
                    <div class="optional-icon sms">\r
                        <mat-icon>event_repeat</mat-icon>\r
                    </div>\r
                    <div class="optional-content">\r
                        <span class="optional-label">{{ t('smartFleet.plans.creditsMonitoring') }}</span>\r
                        <span class="optional-value">{{\r
                            t('smartFleet.plans.creditsMonitoringValueUsd', {\r
                                credits: (overview()?.projectedMonthlyCredits?.totalCredits || 0 | number: '1.0-2'),\r
                                usd: formatUsd(overview()?.projectedMonthlyCredits?.totalCredits || 0),\r
                            })\r
                        }}</span>\r
                    </div>\r
                </div>\r
                <div class="optional-card">\r
                    <div class="optional-icon whatsapp">\r
                        <mat-icon>description</mat-icon>\r
                    </div>\r
                    <div class="optional-content">\r
                        <span class="optional-label">{{ t('smartFleet.plans.creditsReports') }}</span>\r
                        <span class="optional-value">{{\r
                            t('smartFleet.plans.creditsReportsValueUsd', {\r
                                credits: (reports()?.credits || 0 | number: '1.0-2'),\r
                                usd: formatUsd(reportsCreditsMonth()),\r
                                count: reports()?.vehicles || 0,\r
                            })\r
                        }}</span>\r
                    </div>\r
                </div>\r
            </div>\r
\r
            @if (creditBreakdown().length) {\r
                <div class="mt-5 rounded-xl border border-stone-200 bg-stone-50/60 p-4 dark:border-gray-700 dark:bg-gray-950/40">\r
                    <p class="text-sm font-semibold text-stone-800 dark:text-stone-100">\r
                        {{ t('smartFleet.plans.creditsBreakdownTitle') }}\r
                    </p>\r
                    <p class="mt-1 text-xs text-stone-500 dark:text-stone-400">\r
                        {{ t('smartFleet.plans.creditsBreakdownHint') }}\r
                    </p>\r
                    <ul class="mt-3 space-y-2">\r
                        @for (line of creditBreakdown(); track line.featureCode) {\r
                            <li class="flex flex-col gap-1 border-b border-stone-200/80 pb-2 last:border-0 dark:border-gray-700/80 sm:flex-row sm:items-center sm:justify-between">\r
                                <span class="font-mono text-xs sm:text-sm">{{ line.featureCode }}</span>\r
                                <span class="tabular-nums text-right text-xs sm:text-sm text-stone-600 dark:text-stone-300">\r
                                    {{ line.checksPerMonth }} \xD7 {{ line.pricePerCheck | number: '1.0-4' }} =\r
                                    {{ line.creditsPerAsset | number: '1.0-2' }}\r
                                    {{ t('smartFleet.plans.creditsPerAssetMonth') }}\r
                                    \xB7 {{ formatUsd(line.creditsPerAsset) }}\r
                                </span>\r
                            </li>\r
                        }\r
                    </ul>\r
                    <p class="mt-3 text-sm text-stone-600 dark:text-stone-300">\r
                        {{\r
                            t('smartFleet.plans.creditsPerAssetSummary', {\r
                                credits: creditsPerAssetMonth() | number: '1.0-2',\r
                                usd: formatUsd(creditsPerAssetMonth()),\r
                            })\r
                        }}\r
                    </p>\r
                </div>\r
            }\r
\r
            <a routerLink="/add-credits" class="mt-5 inline-flex items-center gap-1 text-base font-medium text-primary hover:underline">\r
                <mat-icon class="icon-size-5 text-current">add_circle</mat-icon>\r
                {{ t('smartFleet.plans.addCredits') }}\r
            </a>\r
        </div>\r
    </ng-template>\r
</ng-container>\r
`, styles: ['/* src/app/modules/smart-enroll/plans/smart-enroll-plans.component.scss */\n:host {\n  width: 100%;\n  display: block;\n}\n.plans-container {\n  min-height: calc(100vh - 64px);\n  background:\n    linear-gradient(\n      180deg,\n      #f8fafc 0%,\n      #ffffff 100%);\n}\n.current-plan-header .current-plan-title {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #0f0f2d;\n  margin: 0;\n  letter-spacing: -0.02em;\n}\n.current-plan-header .current-plan-subtitle {\n  font-size: 0.875rem;\n  color: #6b7280;\n  margin: 4px 0 0;\n}\n.back-button {\n  color: #2b3af0;\n  transition: all 0.2s ease;\n}\n.back-button:hover {\n  background: rgba(43, 58, 240, 0.06);\n  transform: translateX(-2px);\n}\n.header-icon {\n  width: 48px;\n  height: 48px;\n  min-width: 48px;\n  min-height: 48px;\n  flex-shrink: 0;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #2b3af0 0%,\n      #4f5af6 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 4px 14px rgba(43, 58, 240, 0.25);\n}\n.header-icon mat-icon {\n  color: white;\n  font-size: 24px;\n  width: 24px;\n  height: 24px;\n  min-width: 24px;\n  min-height: 24px;\n  flex-shrink: 0;\n  line-height: 24px;\n}\n.plan-card {\n  background: #ffffff;\n  border-radius: 20px;\n  border: 1px solid #e5e7eb;\n  overflow: hidden;\n  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.04);\n  transition: all 0.3s ease;\n}\n.plan-card:hover {\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);\n}\n.plan-card.payment-failed {\n  border-color: #fecaca;\n}\n.card-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  background:\n    linear-gradient(\n      135deg,\n      #f3f4f6 0%,\n      #f5f5f5 100%);\n  border-bottom: 1px solid #e5e7eb;\n}\n@media (max-width: 640px) {\n  .card-header {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 12px;\n  }\n}\n.card-icon {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease;\n}\n.card-icon mat-icon {\n  color: white;\n  font-size: 22px;\n  width: 22px;\n  height: 22px;\n}\n.card-icon.free {\n  background:\n    linear-gradient(\n      135deg,\n      #6b7280 0%,\n      #9ca3af 100%);\n  box-shadow: 0 2px 8px rgba(107, 114, 128, 0.3);\n}\n.card-icon.plus {\n  background:\n    linear-gradient(\n      135deg,\n      #2b3af0 0%,\n      #4f5af6 100%);\n  box-shadow: 0 2px 8px rgba(43, 58, 240, 0.3);\n}\n.card-icon.business {\n  background:\n    linear-gradient(\n      135deg,\n      #0f0f2d 0%,\n      #1a1a4a 100%);\n  box-shadow: 0 2px 8px rgba(15, 15, 45, 0.3);\n}\n.card-icon.enterprise {\n  background:\n    linear-gradient(\n      135deg,\n      #1f2937 0%,\n      #374151 100%);\n  box-shadow: 0 2px 8px rgba(31, 41, 55, 0.3);\n}\n.status-badge {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  font-weight: 500;\n  padding: 6px 14px;\n  border-radius: 20px;\n}\n.status-badge.success {\n  color: #2b3af0;\n  background: rgba(43, 58, 240, 0.06);\n}\n.status-badge.success .status-dot {\n  background: #2b3af0;\n}\n.status-badge.warning {\n  color: #f59e0b;\n  background: rgba(245, 158, 11, 0.1);\n}\n.status-badge.warning .status-dot {\n  background: #f59e0b;\n}\n.status-badge.error {\n  color: #ef4444;\n  background: rgba(239, 68, 68, 0.1);\n}\n.status-badge.error .status-dot {\n  background: #ef4444;\n}\n.status-badge .status-dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  animation: pulse 2s infinite;\n}\n.payment-alert {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px 24px;\n  background:\n    linear-gradient(\n      135deg,\n      #fef2f2 0%,\n      #fee2e2 100%);\n  border-bottom: 1px solid #fecaca;\n  font-size: 14px;\n  color: #dc2626;\n  font-weight: 500;\n}\n.card-body {\n  padding: 24px;\n}\n.price-section {\n  text-align: center;\n  padding: 24px;\n  background:\n    linear-gradient(\n      135deg,\n      #f3f4f6 0%,\n      #e5e7eb 100%);\n  border-radius: 16px;\n  margin-bottom: 24px;\n}\n.price-section .price-label {\n  font-size: 14px;\n  color: #6b7280;\n  font-weight: 500;\n  margin-bottom: 8px;\n}\n.price-section .price-amount {\n  font-size: 42px;\n  font-weight: 700;\n  color: #0f0f2d;\n  line-height: 1;\n}\n.price-section .price-amount .price-currency {\n  font-size: 18px;\n  font-weight: 500;\n  color: #6b7280;\n}\n.price-section .price-period {\n  font-size: 13px;\n  color: #6b7280;\n  margin-top: 8px;\n}\n.payment-method {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 16px;\n  background: #f9fafb;\n  border-radius: 12px;\n  margin-bottom: 24px;\n}\n.payment-method .payment-icon.link {\n  color: #1f2937;\n}\n.payment-method .payment-details {\n  display: flex;\n  flex-direction: column;\n}\n.payment-method .payment-text {\n  font-size: 14px;\n  font-weight: 500;\n  color: #374151;\n}\n.payment-method .payment-expiry {\n  font-size: 12px;\n  color: #6b7280;\n}\n.usage-dashboard {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.usage-period {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n  padding: 14px 16px;\n  background: rgba(43, 58, 240, 0.06);\n  border: 1px solid rgba(43, 58, 240, 0.12);\n  border-radius: 12px;\n}\n@media (max-width: 640px) {\n  .usage-period {\n    flex-direction: column;\n    gap: 6px;\n  }\n}\n.usage-period__title {\n  margin: 0;\n  font-size: 14px;\n  font-weight: 700;\n  color: #0f0f2d;\n}\n.usage-period__reset {\n  margin: 2px 0 0;\n  font-size: 13px;\n  font-weight: 600;\n  color: #2b3af0;\n}\n.usage-period__date {\n  margin: 0;\n  font-size: 12px;\n  color: #6b7280;\n  text-align: right;\n}\n@media (max-width: 640px) {\n  .usage-period__date {\n    text-align: left;\n  }\n}\n.usage-gauges {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 16px;\n}\n@media (max-width: 640px) {\n  .usage-gauges {\n    grid-template-columns: 1fr;\n  }\n}\n.usage-bars {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  padding: 16px;\n  background: #ffffff;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n}\n.features-grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 16px;\n  margin-bottom: 24px;\n}\n@media (max-width: 640px) {\n  .features-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.feature-card {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px;\n  background: #ffffff;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  transition: all 0.2s ease;\n}\n.feature-card:hover {\n  border-color: #d1d5db;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);\n}\n.feature-icon {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.feature-icon mat-icon {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.feature-icon.email {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(43, 58, 240, 0.12) 0%,\n      rgba(79, 90, 246, 0.12) 100%);\n  color: #2b3af0;\n}\n.feature-icon.whitelabel {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(15, 15, 45, 0.08) 0%,\n      rgba(15, 15, 45, 0.12) 100%);\n  color: #0f0f2d;\n}\n.feature-icon.biometrics {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(43, 58, 240, 0.08) 0%,\n      rgba(43, 58, 240, 0.15) 100%);\n  color: #2b3af0;\n}\n.feature-icon.api {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(79, 90, 246, 0.08) 0%,\n      rgba(79, 90, 246, 0.15) 100%);\n  color: #4f5af6;\n}\n.feature-content {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.feature-content .feature-label {\n  font-size: 13px;\n  color: #6b7280;\n}\n.feature-content .feature-value {\n  font-size: 15px;\n  font-weight: 600;\n  color: #111827;\n}\n.feature-status {\n  font-size: 20px !important;\n  width: 20px !important;\n  height: 20px !important;\n  color: #d1d5db;\n}\n.feature-status.active {\n  color: #2b3af0;\n}\n.optional-section {\n  padding: 20px;\n  background: #f9fafb;\n  border-radius: 16px;\n  margin-bottom: 24px;\n}\n.optional-section .optional-title {\n  font-size: 16px;\n  font-weight: 600;\n  color: #111827;\n  margin-bottom: 4px;\n}\n.optional-section .optional-subtitle {\n  font-size: 13px;\n  color: #6b7280;\n  margin-bottom: 16px;\n}\n.optional-grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 12px;\n}\n@media (max-width: 640px) {\n  .optional-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.optional-card {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 12px;\n  padding: 14px;\n  background: #ffffff;\n  border: 1px solid #e5e7eb;\n  border-radius: 10px;\n}\n.optional-icon {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.optional-icon mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.optional-icon.sms {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(43, 58, 240, 0.08) 0%,\n      rgba(43, 58, 240, 0.15) 100%);\n  color: #2b3af0;\n}\n.optional-icon.whatsapp {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(79, 90, 246, 0.08) 0%,\n      rgba(79, 90, 246, 0.15) 100%);\n  color: #4f5af6;\n}\n.optional-content {\n  flex: 1;\n  min-width: 100px;\n}\n.optional-content .optional-label {\n  display: block;\n  font-size: 13px;\n  font-weight: 500;\n  color: #374151;\n}\n.optional-content .optional-value {\n  display: block;\n  font-size: 11px;\n  color: #9ca3af;\n}\n.optional-link {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 12px;\n  font-weight: 500;\n  color: #2b3af0;\n  text-decoration: none;\n  transition: color 0.2s ease;\n}\n.optional-link mat-icon {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.optional-link:hover {\n  color: #0f0f2d;\n}\n.card-actions {\n  display: flex;\n  justify-content: center;\n}\n.action-button {\n  border-radius: 50px;\n  padding: 12px 32px;\n  font-weight: 500;\n  font-size: 15px;\n  transition: all 0.2s ease;\n}\n.action-button.primary {\n  background:\n    linear-gradient(\n      135deg,\n      #2b3af0 0%,\n      #0f0f2d 100%);\n  color: white;\n  box-shadow: 0 4px 14px rgba(43, 58, 240, 0.3);\n}\n.action-button.primary:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(43, 58, 240, 0.4);\n}\n.action-button.primary.error {\n  background:\n    linear-gradient(\n      135deg,\n      #ef4444 0%,\n      #dc2626 100%);\n  box-shadow: 0 4px 14px rgba(239, 68, 68, 0.3);\n}\n.action-button.secondary {\n  border-color: #2b3af0;\n  color: #2b3af0;\n}\n.action-button.secondary mat-icon {\n  margin-left: 8px;\n  transition: transform 0.2s ease;\n}\n.action-button.secondary:hover {\n  background: rgba(43, 58, 240, 0.06);\n}\n.action-button.secondary:hover mat-icon {\n  transform: translateX(4px);\n}\n.upgrade-section {\n  background:\n    linear-gradient(\n      135deg,\n      #0f0f2d 0%,\n      #1a1a4a 50%,\n      #0f0f2d 100%);\n  border-radius: 24px;\n  overflow: hidden;\n  position: relative;\n}\n.upgrade-section::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background-image:\n    radial-gradient(\n      circle at 1px 1px,\n      rgba(255, 255, 255, 0.03) 1px,\n      transparent 0);\n  background-size: 24px 24px;\n  pointer-events: none;\n}\n.upgrade-section::after {\n  content: "";\n  position: absolute;\n  top: -50%;\n  right: -20%;\n  width: 60%;\n  height: 200%;\n  background:\n    radial-gradient(\n      ellipse,\n      rgba(43, 58, 240, 0.15) 0%,\n      transparent 70%);\n  pointer-events: none;\n}\n.upgrade-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  padding: 32px 32px 24px;\n  position: relative;\n  z-index: 1;\n}\n@media (max-width: 640px) {\n  .upgrade-header {\n    padding: 24px 20px 16px;\n  }\n}\n.upgrade-header-content {\n  flex: 1;\n  max-width: 480px;\n}\n.upgrade-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 12px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(43, 58, 240, 0.2) 0%,\n      rgba(79, 90, 246, 0.2) 100%);\n  border: 1px solid rgba(43, 58, 240, 0.3);\n  border-radius: 20px;\n  margin-bottom: 16px;\n}\n.upgrade-badge mat-icon {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n  color: white;\n}\n.upgrade-badge span {\n  font-size: 12px;\n  font-weight: 600;\n  color: white;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.upgrade-headline {\n  font-size: 28px;\n  font-weight: 700;\n  color: #ffffff;\n  margin-bottom: 8px;\n  line-height: 1.2;\n}\n@media (max-width: 640px) {\n  .upgrade-headline {\n    font-size: 22px;\n  }\n}\n.upgrade-subheadline {\n  font-size: 15px;\n  color: #94a3b8;\n  line-height: 1.5;\n  margin: 0;\n}\n.upgrade-illustration {\n  position: relative;\n  width: 120px;\n  height: 100px;\n  flex-shrink: 0;\n}\n@media (max-width: 768px) {\n  .upgrade-illustration {\n    display: none;\n  }\n}\n.floating-icon {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 12px;\n  animation: float 3s ease-in-out infinite;\n}\n.floating-icon mat-icon {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.floating-icon.icon-1 {\n  top: 0;\n  left: 20px;\n  width: 44px;\n  height: 44px;\n  background:\n    linear-gradient(\n      135deg,\n      #2b3af0 0%,\n      #0f0f2d 100%);\n  box-shadow: 0 8px 24px rgba(43, 58, 240, 0.4);\n}\n.floating-icon.icon-1 mat-icon {\n  color: white;\n}\n.floating-icon.icon-2 {\n  top: 30px;\n  right: 0;\n  width: 40px;\n  height: 40px;\n  background:\n    linear-gradient(\n      135deg,\n      #4f5af6 0%,\n      #2b3af0 100%);\n  box-shadow: 0 8px 24px rgba(79, 90, 246, 0.4);\n  animation-delay: 0.5s;\n}\n.floating-icon.icon-2 mat-icon {\n  color: white;\n}\n.floating-icon.icon-3 {\n  bottom: 0;\n  left: 40px;\n  width: 36px;\n  height: 36px;\n  background:\n    linear-gradient(\n      135deg,\n      #0f0f2d 0%,\n      #1a1a4a 100%);\n  box-shadow: 0 8px 24px rgba(15, 15, 45, 0.4);\n  animation-delay: 1s;\n}\n.floating-icon.icon-3 mat-icon {\n  color: white;\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n@keyframes float {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-8px);\n  }\n}\n.upgrade-benefits {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n  padding: 0 32px 24px;\n  position: relative;\n  z-index: 1;\n}\n@media (max-width: 768px) {\n  .upgrade-benefits {\n    grid-template-columns: 1fr;\n    gap: 12px;\n    padding: 0 20px 20px;\n  }\n}\n.benefit-item {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 16px;\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  border-radius: 12px;\n  transition: all 0.2s ease;\n}\n.benefit-item:hover {\n  background: rgba(255, 255, 255, 0.05);\n  border-color: rgba(255, 255, 255, 0.1);\n}\n.benefit-icon {\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  background: rgba(43, 58, 240, 0.15);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.benefit-icon mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: #4f5af6;\n}\n.benefit-text {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.benefit-text .benefit-title {\n  font-size: 14px;\n  font-weight: 600;\n  color: #ffffff;\n}\n.benefit-text .benefit-desc {\n  font-size: 12px;\n  color: #64748b;\n  line-height: 1.4;\n}\n.upgrade-cta {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 24px 32px 32px;\n  position: relative;\n  z-index: 1;\n}\n@media (max-width: 640px) {\n  .upgrade-cta {\n    flex-direction: column;\n    padding: 20px;\n    gap: 12px;\n  }\n}\n.upgrade-button {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 14px 28px !important;\n  background:\n    linear-gradient(\n      135deg,\n      #2b3af0 0%,\n      #0f0f2d 100%) !important;\n  border: none !important;\n  border-radius: 50px !important;\n  font-size: 15px !important;\n  font-weight: 600 !important;\n  color: white !important;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  box-shadow: 0 4px 16px rgba(43, 58, 240, 0.4);\n}\n.upgrade-button:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(43, 58, 240, 0.5);\n}\n.upgrade-button mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  transition: transform 0.2s ease;\n}\n.upgrade-button:hover mat-icon {\n  transform: translateX(4px);\n}\n@media (max-width: 640px) {\n  .upgrade-button {\n    width: 100%;\n    justify-content: center;\n  }\n}\n.upgrade-hint {\n  font-size: 13px;\n  color: #64748b;\n}\n@media (max-width: 640px) {\n  .upgrade-hint {\n    text-align: center;\n  }\n}\n.plans-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 24px;\n  margin-bottom: 24px;\n}\n@media (max-width: 1024px) {\n  .plans-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 640px) {\n  .plans-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.select-plan-card {\n  position: relative;\n  background: #ffffff;\n  border: 1px solid #e5e7eb;\n  border-radius: 20px;\n  padding: 24px;\n  transition: all 0.3s ease;\n  display: flex;\n  flex-direction: column;\n}\n.select-plan-card:hover {\n  border-color: #d1d5db;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);\n  transform: translateY(-4px);\n}\n.select-plan-card.featured {\n  border: 2px solid #2b3af0;\n  box-shadow: 0 8px 32px rgba(43, 58, 240, 0.15);\n}\n.select-plan-card.featured .featured-badge {\n  position: absolute;\n  top: -12px;\n  left: 50%;\n  transform: translateX(-50%);\n  background:\n    linear-gradient(\n      135deg,\n      #2b3af0 0%,\n      #0f0f2d 100%);\n  color: white;\n  font-size: 11px;\n  font-weight: 600;\n  padding: 4px 12px;\n  border-radius: 20px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.select-plan-card--current {\n  border: 2px solid #059669;\n  box-shadow: 0 8px 28px rgba(5, 150, 105, 0.14);\n}\n.select-plan-card--current.featured {\n  border: 2px solid #059669;\n  box-shadow: 0 8px 28px rgba(5, 150, 105, 0.18);\n}\n.current-plan-badge {\n  position: absolute;\n  top: -12px;\n  left: 16px;\n  z-index: 2;\n  background:\n    linear-gradient(\n      135deg,\n      #059669 0%,\n      #047857 100%);\n  color: white;\n  font-size: 11px;\n  font-weight: 600;\n  padding: 4px 12px;\n  border-radius: 20px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  box-shadow: 0 2px 8px rgba(5, 150, 105, 0.35);\n}\n.current-plan-badge--offset {\n  top: 22px;\n  left: 12px;\n}\n.plan-badge {\n  display: inline-flex;\n  align-items: center;\n  padding: 6px 14px;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 600;\n  margin-bottom: 16px;\n  width: fit-content;\n}\n.plan-badge.free {\n  background:\n    linear-gradient(\n      135deg,\n      #f3f4f6 0%,\n      #e5e7eb 100%);\n  color: #6b7280;\n}\n.plan-badge.plus {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(43, 58, 240, 0.08) 0%,\n      rgba(43, 58, 240, 0.15) 100%);\n  color: #2b3af0;\n}\n.plan-badge.business {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(15, 15, 45, 0.08) 0%,\n      rgba(15, 15, 45, 0.15) 100%);\n  color: #0f0f2d;\n}\n.plan-badge.enterprise {\n  background:\n    linear-gradient(\n      135deg,\n      #1f2937 0%,\n      #374151 100%);\n  color: white;\n}\n.plan-pricing {\n  margin-bottom: 8px;\n}\n.plan-pricing .plan-price {\n  font-size: 36px;\n  font-weight: 700;\n  color: #111827;\n}\n.plan-pricing .plan-price.custom {\n  font-size: 24px;\n}\n.plan-pricing .plan-period {\n  font-size: 16px;\n  color: #6b7280;\n  font-weight: 400;\n}\n.plan-range {\n  font-size: 14px;\n  color: #6b7280;\n  margin-bottom: 20px;\n}\n.plan-features {\n  display: flex;\n  gap: 16px;\n  padding: 16px 0;\n  border-top: 1px solid #e5e7eb;\n  border-bottom: 1px solid #e5e7eb;\n  margin-bottom: 20px;\n}\n@media (max-width: 480px) {\n  .plan-features {\n    flex-direction: column;\n    gap: 12px;\n  }\n}\n.plan-stat {\n  flex: 1;\n  text-align: center;\n}\n.plan-stat .stat-label {\n  display: block;\n  font-size: 11px;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 4px;\n}\n.plan-stat .stat-value {\n  display: block;\n  font-size: 14px;\n  font-weight: 600;\n  color: #374151;\n}\n.plan-includes {\n  flex: 1;\n  margin-bottom: 20px;\n}\n.plan-includes .includes-title {\n  font-size: 13px;\n  font-weight: 600;\n  color: #374151;\n  margin-bottom: 12px;\n}\n.plan-includes .includes-list {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.plan-includes .includes-list li {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  color: #6b7280;\n  padding: 6px 0;\n}\n.plan-includes .includes-list li mat-icon {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n  color: #2b3af0;\n}\n.select-button {\n  width: 100%;\n  border-radius: 50px;\n  padding: 14px;\n  font-weight: 600;\n  font-size: 14px;\n  transition: all 0.2s ease;\n  margin-top: auto;\n}\n.select-button.free {\n  border-color: #6b7280;\n  color: #6b7280;\n}\n.select-button.free mat-icon {\n  margin-left: 8px;\n}\n.select-button.free:hover {\n  background: rgba(107, 114, 128, 0.05);\n}\n.select-button.plus {\n  background:\n    linear-gradient(\n      135deg,\n      #2b3af0 0%,\n      #4f5af6 100%);\n  color: white;\n}\n.select-button.plus:hover {\n  box-shadow: 0 4px 14px rgba(43, 58, 240, 0.4);\n  transform: translateY(-2px);\n}\n.select-button.business {\n  background:\n    linear-gradient(\n      135deg,\n      #0f0f2d 0%,\n      #1a1a4a 100%);\n  color: white;\n}\n.select-button.business:hover {\n  box-shadow: 0 4px 14px rgba(15, 15, 45, 0.4);\n  transform: translateY(-2px);\n}\n.select-button.enterprise {\n  background:\n    linear-gradient(\n      135deg,\n      #1f2937 0%,\n      #111827 100%);\n  color: white;\n}\n.select-button.enterprise:hover {\n  box-shadow: 0 4px 14px rgba(31, 41, 55, 0.4);\n  transform: translateY(-2px);\n}\n.free-plan-card {\n  border: 1px solid rgba(107, 114, 128, 0.2);\n  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);\n}\n.free-plan-card:hover {\n  border-color: rgba(107, 114, 128, 0.35);\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);\n}\n.free-plan-card .plan-badge.free {\n  background:\n    linear-gradient(\n      135deg,\n      #f3f4f6 0%,\n      #e5e7eb 100%);\n  color: #6b7280;\n}\n.free-plan-card .plan-price {\n  color: #0f0f2d;\n}\n.free-plan-card .plan-period {\n  color: #6b7280;\n}\n.free-plan-card .plan-range {\n  color: #6b7280;\n}\n.free-plan-desc {\n  font-size: 14px;\n  color: #6b7280;\n  line-height: 1.5;\n  margin: 0 0 20px;\n}\n.free-plan-desc ::ng-deep .font-semibold,\n.free-plan-desc ::ng-deep b {\n  color: #2b3af0;\n  font-weight: 600;\n}\n.free-plan-desc ::ng-deep .text-verifik-vivid-blue {\n  color: #2b3af0 !important;\n}\n.slider-section {\n  margin-bottom: 32px;\n}\n.slider-section .slider-title {\n  font-size: 20px;\n  font-weight: 600;\n  color: #111827;\n  text-align: center;\n  margin-bottom: 32px;\n}\n.selected-plan-card {\n  display: flex;\n  background: #ffffff;\n  border: 1px solid #e5e7eb;\n  border-radius: 20px;\n  overflow: hidden;\n  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);\n}\n@media (max-width: 768px) {\n  .selected-plan-card {\n    flex-direction: column;\n  }\n}\n.selected-plan-left {\n  position: relative;\n  flex: 1;\n  padding: 32px;\n  display: flex;\n  flex-direction: column;\n}\n.selected-plan-left .close-button {\n  position: absolute;\n  top: 16px;\n  left: 16px;\n  color: #6b7280;\n}\n.selected-plan-left .close-button:hover {\n  background: rgba(107, 114, 128, 0.1);\n}\n.selected-pricing {\n  text-align: center;\n  margin: 24px 0;\n}\n.selected-pricing .pricing-label {\n  font-size: 14px;\n  color: #6b7280;\n  margin-bottom: 8px;\n}\n.selected-pricing .pricing-amount {\n  font-size: 36px;\n  font-weight: 700;\n  color: #0f0f2d;\n}\n.selected-pricing .pricing-amount span {\n  font-size: 16px;\n  font-weight: 400;\n  color: #6b7280;\n}\n.selected-pricing .pricing-enrolls {\n  font-size: 16px;\n  font-weight: 600;\n  color: #2b3af0;\n  margin-top: 8px;\n}\n.selected-stats {\n  display: flex;\n  gap: 16px;\n  padding: 16px;\n  background: #f9fafb;\n  border-radius: 12px;\n  margin-bottom: 24px;\n}\n.selected-stats .stat-item {\n  flex: 1;\n  text-align: center;\n}\n.selected-stats .stat-item .stat-label {\n  display: block;\n  font-size: 11px;\n  color: #9ca3af;\n  text-transform: uppercase;\n  margin-bottom: 4px;\n}\n.selected-stats .stat-item .stat-value {\n  display: block;\n  font-size: 14px;\n  font-weight: 600;\n  color: #374151;\n}\n.selected-includes {\n  margin-bottom: 24px;\n}\n.selected-includes .includes-title {\n  font-size: 14px;\n  font-weight: 600;\n  color: #374151;\n  margin-bottom: 12px;\n}\n.selected-includes .includes-list {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.selected-includes .includes-list li {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 14px;\n  color: #6b7280;\n  padding: 8px 0;\n}\n.selected-includes .includes-list li mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: #2b3af0;\n}\n.purchase-button {\n  width: 100%;\n  border-radius: 50px;\n  padding: 16px;\n  font-weight: 600;\n  font-size: 15px;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease;\n  margin-top: auto;\n}\n.purchase-button.free {\n  background:\n    linear-gradient(\n      135deg,\n      #6b7280 0%,\n      #4b5563 100%);\n}\n.purchase-button.plus {\n  background:\n    linear-gradient(\n      135deg,\n      #2b3af0 0%,\n      #4f5af6 100%);\n}\n.purchase-button.business {\n  background:\n    linear-gradient(\n      135deg,\n      #0f0f2d 0%,\n      #1a1a4a 100%);\n}\n.purchase-button:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(43, 58, 240, 0.25);\n}\n.purchase-button:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.purchase-button mat-spinner {\n  margin-right: 8px;\n}\n.selected-plan-right {\n  flex: 1.2;\n  border-left: 1px solid #e5e7eb;\n  display: flex;\n  flex-direction: column;\n}\n@media (max-width: 768px) {\n  .selected-plan-right {\n    border-left: none;\n    border-top: 1px solid #e5e7eb;\n  }\n}\n.plan-image {\n  width: 100%;\n  height: 160px;\n  object-fit: cover;\n  background:\n    linear-gradient(\n      135deg,\n      #2b3af0 0%,\n      #0f0f2d 100%);\n}\n.plan-description {\n  padding: 24px;\n}\n.plan-description h3 {\n  font-size: 20px;\n  font-weight: 600;\n  color: #111827;\n  margin-bottom: 12px;\n}\n.plan-description p {\n  font-size: 14px;\n  color: #6b7280;\n  line-height: 1.6;\n}\n.features-table {\n  padding: 0 24px;\n  flex: 1;\n}\n.features-table .table-header {\n  display: flex;\n  justify-content: space-between;\n  padding: 12px 16px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(43, 58, 240, 0.08) 0%,\n      rgba(43, 58, 240, 0.12) 100%);\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 600;\n  color: #2b3af0;\n  margin-bottom: 8px;\n}\n.features-table .table-row {\n  display: flex;\n  justify-content: space-between;\n  padding: 12px 16px;\n  border-bottom: 1px solid #f3f4f6;\n  font-size: 14px;\n}\n.features-table .table-row span:first-child {\n  color: #374151;\n}\n.features-table .table-row .table-value {\n  font-weight: 600;\n  color: #2b3af0;\n}\n.plan-footer {\n  padding: 24px;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n}\n.plan-footer .pricing-link {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 20px;\n  background: #2b3af0;\n  color: white;\n  border-radius: 50px;\n  font-size: 13px;\n  font-weight: 500;\n  text-decoration: none;\n  transition: all 0.2s ease;\n}\n.plan-footer .pricing-link mat-icon {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.plan-footer .pricing-link:hover {\n  background: #0f0f2d;\n}\n.plan-footer .terms-text {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.plan-footer .terms-text a {\n  color: #6b7280;\n  text-decoration: none;\n}\n.plan-footer .terms-text a:hover {\n  text-decoration: underline;\n}\n.range-slider {\n  position: relative;\n  height: 30px;\n  margin: 40px 0;\n}\n.range-slider::before {\n  content: "";\n  position: absolute;\n  top: 9px;\n  left: 0;\n  height: 12px;\n  width: var(--track-fill-percentage, 0%);\n  background:\n    linear-gradient(\n      90deg,\n      #2b3af0 0%,\n      #4f5af6 100%);\n  border-radius: 6px;\n  transition: width 0.1s ease;\n  z-index: 0;\n}\n.range-slider__dots {\n  display: flex;\n  justify-content: space-between;\n  left: 0;\n  position: absolute;\n  top: 10px;\n  width: 100%;\n  z-index: -1;\n  padding: 0 15px;\n}\n.range-slider__dot {\n  position: relative;\n  background-color: #2b3af0;\n  border-radius: 50%;\n  display: block;\n  height: 10px;\n  width: 10px;\n}\n.range-slider__value {\n  position: absolute;\n  top: -36px;\n  left: 50%;\n  transform: translateX(-50%);\n  height: 20px;\n  white-space: nowrap;\n  font-size: 12px;\n  font-weight: 500;\n  color: #6b7280;\n}\n.range-slider__input {\n  appearance: none;\n  background-color: transparent;\n  height: 30px;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n}\n.range-slider__input:focus {\n  outline: none;\n}\n.range-slider__input::-webkit-slider-runnable-track {\n  background-color: #e5e7eb;\n  cursor: pointer;\n  height: 12px;\n  width: 100%;\n  border-radius: 6px;\n}\n.range-slider__input::-webkit-slider-thumb {\n  appearance: none;\n  background: #2b3af0;\n  border-radius: 50%;\n  border: 2px solid white;\n  box-shadow: 0 0 0 4px white, 0 2px 8px rgba(0, 0, 0, 0.15);\n  cursor: pointer;\n  height: 30px;\n  margin-top: -9px;\n  width: 30px;\n  z-index: 2;\n  position: relative;\n  transition: transform 0.1s ease;\n}\n.range-slider__input::-webkit-slider-thumb:hover {\n  transform: scale(1.1);\n}\n.range-slider__input::-moz-range-track {\n  width: 100%;\n  height: 12px;\n  cursor: pointer;\n  border-radius: 6px;\n  background-color: #e5e7eb;\n}\n.range-slider__input::-moz-range-thumb {\n  appearance: none;\n  background: #2b3af0;\n  border-radius: 50%;\n  border: 2px solid white;\n  box-shadow: 0 0 0 4px white, 0 2px 8px rgba(0, 0, 0, 0.15);\n  cursor: pointer;\n  height: 30px;\n  width: 30px;\n}\n.landing-slider-section {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(43, 58, 240, 0.04) 0%,\n      rgba(79, 90, 246, 0.06) 100%);\n  border: 1px solid rgba(43, 58, 240, 0.12);\n  border-radius: 20px;\n  padding: 32px;\n  margin-bottom: 24px;\n  text-align: center;\n}\n@media (max-width: 640px) {\n  .landing-slider-section {\n    padding: 24px 16px;\n  }\n}\n.landing-slider-title {\n  font-size: 22px;\n  font-weight: 700;\n  color: #0f0f2d;\n  margin: 0 0 8px;\n}\n.landing-slider-subtitle {\n  font-size: 14px;\n  color: #6b7280;\n  margin: 0 0 28px;\n}\n.landing-slider-track {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 20px;\n}\n.landing-slider-track .track-label {\n  font-size: 13px;\n  font-weight: 600;\n  color: #6b7280;\n  white-space: nowrap;\n  min-width: 50px;\n}\n.landing-slider-track .track-label:first-child {\n  text-align: right;\n}\n.landing-slider-track .track-label:last-child {\n  text-align: left;\n}\n.landing-slider-track .track-slider {\n  flex: 1;\n  min-width: 0;\n}\n.landing-slider-track .track-slider .range-slider {\n  margin: 0;\n}\n.landing-slider-pill {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background:\n    linear-gradient(\n      135deg,\n      #2b3af0 0%,\n      #0f0f2d 100%);\n  color: white;\n  padding: 12px 24px;\n  border-radius: 50px;\n  font-size: 15px;\n  font-weight: 500;\n  box-shadow: 0 4px 16px rgba(43, 58, 240, 0.3);\n}\n.landing-slider-pill strong {\n  font-size: 20px;\n  font-weight: 700;\n}\n.volume-change-summary {\n  margin-top: 24px;\n  max-width: 28rem;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 20px 20px 18px;\n  border-radius: 16px;\n  background: #ffffff;\n  border: 1px solid rgba(15, 15, 45, 0.08);\n  box-shadow:\n    0 0 0 1px rgba(255, 255, 255, 0.8) inset,\n    0 1px 2px rgba(15, 15, 45, 0.04),\n    0 8px 24px rgba(15, 15, 45, 0.06);\n}\n.volume-change-summary__head {\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  margin-bottom: 18px;\n  text-align: left;\n}\n.volume-change-summary__head-icon {\n  flex-shrink: 0;\n  width: 40px;\n  height: 40px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      145deg,\n      rgba(99, 102, 241, 0.12) 0%,\n      rgba(43, 58, 240, 0.08) 100%);\n  border: 1px solid rgba(99, 102, 241, 0.2);\n}\n.volume-change-summary__head-icon mat-icon {\n  font-size: 22px;\n  width: 22px;\n  height: 22px;\n  color: #4338ca;\n}\n.volume-change-summary__head-text {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 0;\n}\n.volume-change-summary__eyebrow {\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  color: #6b7280;\n}\n.volume-change-summary__title {\n  font-size: 15px;\n  font-weight: 600;\n  color: #111827;\n  letter-spacing: -0.01em;\n  line-height: 1.35;\n}\n.volume-change-summary__compare {\n  display: grid;\n  grid-template-columns: 1fr auto 1fr;\n  gap: 10px;\n  align-items: stretch;\n}\n.volume-change-summary__panel {\n  padding: 14px 12px;\n  border-radius: 12px;\n  background: #f9fafb;\n  border: 1px solid rgba(15, 15, 45, 0.06);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  gap: 4px;\n  transition:\n    border-color 0.2s ease,\n    box-shadow 0.2s ease,\n    background 0.2s ease;\n}\n.volume-change-summary__panel--from {\n  background:\n    linear-gradient(\n      180deg,\n      #fafafa 0%,\n      #f3f4f6 100%);\n}\n.volume-change-summary__panel--to {\n  background:\n    linear-gradient(\n      180deg,\n      #fafbff 0%,\n      #f5f5ff 100%);\n  border-color: rgba(67, 56, 202, 0.12);\n}\n.volume-change-summary__panel--highlight {\n  border-color: rgba(43, 58, 240, 0.35);\n  box-shadow: 0 0 0 3px rgba(43, 58, 240, 0.12);\n  background:\n    linear-gradient(\n      180deg,\n      #f8f9ff 0%,\n      #eef2ff 100%);\n}\n.volume-change-summary__panel-label {\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: #6b7280;\n}\n.volume-change-summary__panel-value {\n  font-size: 28px;\n  font-weight: 700;\n  font-variant-numeric: tabular-nums;\n  letter-spacing: -0.03em;\n  color: #0f0f2d;\n  line-height: 1.1;\n}\n.volume-change-summary__panel-unit {\n  font-size: 12px;\n  font-weight: 500;\n  color: #9ca3af;\n}\n.volume-change-summary__mid {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 44px;\n  align-self: center;\n}\n.volume-change-summary__mid-icon {\n  width: 32px;\n  height: 32px;\n  border-radius: 999px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #ffffff;\n  border: 1px solid rgba(15, 15, 45, 0.1);\n  box-shadow: 0 2px 6px rgba(15, 15, 45, 0.06);\n}\n.volume-change-summary__mid-icon mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: #4338ca;\n}\n.volume-change-summary__hint {\n  margin: 14px 0 0;\n  padding-top: 12px;\n  border-top: 1px solid rgba(15, 15, 45, 0.06);\n  font-size: 13px;\n  line-height: 1.45;\n  color: #6b7280;\n  text-align: center;\n}\n@media (max-width: 480px) {\n  .volume-change-summary__compare {\n    grid-template-columns: 1fr;\n    gap: 12px;\n  }\n  .volume-change-summary__mid {\n    width: 100%;\n    min-width: 0;\n    padding: 4px 0;\n  }\n  .volume-change-summary__mid-icon mat-icon {\n    transform: rotate(90deg);\n  }\n}\n.checkout-card {\n  background: #ffffff;\n  border-radius: 24px;\n  border: 1px solid rgba(43, 58, 240, 0.12);\n  overflow: hidden;\n  box-shadow: 0 8px 40px rgba(15, 15, 45, 0.08);\n}\n.checkout-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 24px 32px;\n  color: white;\n}\n.checkout-header.header-free {\n  background:\n    linear-gradient(\n      135deg,\n      #6b7280 0%,\n      #4b5563 100%);\n}\n.checkout-header.header-plus {\n  background:\n    linear-gradient(\n      135deg,\n      #2b3af0 0%,\n      #4f5af6 100%);\n}\n.checkout-header.header-business {\n  background:\n    linear-gradient(\n      135deg,\n      #0f0f2d 0%,\n      #1a1a4a 100%);\n}\n@media (max-width: 640px) {\n  .checkout-header {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 16px;\n    padding: 20px 24px;\n  }\n}\n.checkout-plan-info {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.checkout-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 16px;\n  border-radius: 50px;\n  font-size: 14px;\n  font-weight: 600;\n  width: fit-content;\n}\n.checkout-badge mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.checkout-badge.free {\n  background: rgba(255, 255, 255, 0.2);\n  color: white;\n}\n.checkout-badge.plus {\n  background: rgba(255, 255, 255, 0.2);\n  color: white;\n}\n.checkout-badge.business {\n  background: rgba(255, 255, 255, 0.15);\n  color: white;\n}\n.checkout-plan-type {\n  font-size: 13px;\n  color: rgba(255, 255, 255, 0.8);\n  padding-left: 4px;\n}\n.checkout-price {\n  display: flex;\n  align-items: baseline;\n  gap: 2px;\n}\n.checkout-price .price-from {\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.7);\n  margin-right: 8px;\n}\n.checkout-price .price-currency {\n  font-size: 24px;\n  font-weight: 600;\n}\n.checkout-price .price-value {\n  font-size: 42px;\n  font-weight: 700;\n  line-height: 1;\n}\n.checkout-price .price-period {\n  font-size: 16px;\n  color: rgba(255, 255, 255, 0.8);\n  margin-left: 4px;\n}\n@media (max-width: 640px) {\n  .checkout-price .price-value {\n    font-size: 32px;\n  }\n}\n.checkout-stats {\n  display: flex;\n  padding: 24px 32px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(43, 58, 240, 0.04) 0%,\n      rgba(79, 90, 246, 0.06) 100%);\n  border-bottom: 1px solid rgba(43, 58, 240, 0.08);\n}\n@media (max-width: 768px) {\n  .checkout-stats {\n    flex-wrap: wrap;\n    gap: 16px;\n    padding: 20px 24px;\n  }\n}\n.checkout-stats .stat-item {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  gap: 4px;\n  min-width: 80px;\n}\n.checkout-stats .stat-item mat-icon {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  color: #2b3af0;\n  margin-bottom: 4px;\n}\n.checkout-stats .stat-item .stat-value {\n  font-size: 18px;\n  font-weight: 700;\n  color: #0f0f2d;\n}\n.checkout-stats .stat-item .stat-label {\n  font-size: 11px;\n  color: #6b7280;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n}\n.checkout-stats .stat-divider {\n  width: 1px;\n  background: rgba(43, 58, 240, 0.15);\n  margin: 0 8px;\n}\n@media (max-width: 768px) {\n  .checkout-stats .stat-divider {\n    display: none;\n  }\n}\n.checkout-features {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 32px;\n  padding: 28px 32px;\n  border-bottom: 1px solid rgba(43, 58, 240, 0.08);\n}\n@media (max-width: 640px) {\n  .checkout-features {\n    grid-template-columns: 1fr;\n    gap: 24px;\n    padding: 24px;\n  }\n}\n.features-column .features-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 14px;\n  font-weight: 600;\n  margin: 0 0 16px;\n}\n.features-column .features-title mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.features-column .features-title.included-title {\n  color: #2b3af0;\n}\n.features-column .features-title.included-title mat-icon {\n  color: #2b3af0;\n}\n.features-column .features-title.extra-title {\n  color: #0f0f2d;\n}\n.features-column .features-title.extra-title mat-icon {\n  color: #0f0f2d;\n}\n.features-column .features-list {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.features-column .features-list li {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 0;\n  font-size: 14px;\n  color: #6b7280;\n  border-bottom: 1px solid rgba(107, 114, 128, 0.1);\n}\n.features-column .features-list li:last-child {\n  border-bottom: none;\n}\n.features-column .features-list.included .feature-count {\n  font-weight: 600;\n  color: #2b3af0;\n}\n.features-column .features-list.included .feature-check {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n  color: #2b3af0;\n}\n.features-column .features-list.extra .feature-price {\n  font-size: 12px;\n  font-weight: 600;\n  color: #0f0f2d;\n}\n.features-column .features-list.extra .extras-link {\n  font-size: 12px;\n  color: #2b3af0;\n  text-decoration: none;\n  font-weight: 500;\n}\n.features-column .features-list.extra .extras-link:hover {\n  text-decoration: underline;\n}\n.extra-bio-notice {\n  margin: 0 32px 24px;\n  border: 1px solid rgba(43, 58, 240, 0.15);\n  border-radius: 12px;\n  overflow: hidden;\n}\n@media (max-width: 640px) {\n  .extra-bio-notice {\n    margin: 0 24px 24px;\n  }\n}\n.extra-bio-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 14px 16px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(43, 58, 240, 0.06) 0%,\n      rgba(79, 90, 246, 0.08) 100%);\n  cursor: pointer;\n  transition: background 0.2s ease;\n}\n.extra-bio-header:hover {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(43, 58, 240, 0.1) 0%,\n      rgba(79, 90, 246, 0.12) 100%);\n}\n.extra-bio-header .extra-bio-left {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.extra-bio-header .extra-bio-left .info-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: #2b3af0;\n}\n.extra-bio-header .extra-bio-left span {\n  font-size: 14px;\n  font-weight: 500;\n  color: #0f0f2d;\n}\n.extra-bio-header .expand-icon {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  color: #6b7280;\n  transition: transform 0.3s ease;\n}\n.extra-bio-header .expand-icon.expanded {\n  transform: rotate(180deg);\n}\n.extra-bio-body {\n  padding: 16px;\n  background: white;\n  animation: slideDown 0.3s ease-out;\n}\n.extra-bio-body p {\n  font-size: 13px;\n  color: #6b7280;\n  line-height: 1.6;\n  margin: 0 0 16px;\n}\n.extra-bio-body .extra-bio-costs {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.extra-bio-body .extra-bio-costs .bio-cost-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 14px;\n  background: rgba(43, 58, 240, 0.04);\n  border-radius: 8px;\n  font-size: 13px;\n}\n.extra-bio-body .extra-bio-costs .bio-cost-item span {\n  color: #6b7280;\n}\n.extra-bio-body .extra-bio-costs .bio-cost-item strong {\n  color: #0f0f2d;\n  font-weight: 600;\n}\n@keyframes slideDown {\n  from {\n    opacity: 0;\n    max-height: 0;\n  }\n  to {\n    opacity: 1;\n    max-height: 300px;\n  }\n}\n.checkout-actions {\n  padding: 24px 32px 32px;\n  text-align: center;\n}\n@media (max-width: 640px) {\n  .checkout-actions {\n    padding: 24px;\n  }\n}\n.checkout-button {\n  width: 100%;\n  max-width: 400px;\n  border-radius: 50px !important;\n  padding: 16px 32px !important;\n  font-size: 16px !important;\n  font-weight: 600 !important;\n  color: white !important;\n  display: inline-flex !important;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  transition: all 0.2s ease;\n  border: none !important;\n}\n.checkout-button.free {\n  background:\n    linear-gradient(\n      135deg,\n      #6b7280 0%,\n      #4b5563 100%) !important;\n}\n.checkout-button.plus {\n  background:\n    linear-gradient(\n      135deg,\n      #2b3af0 0%,\n      #4f5af6 100%) !important;\n  box-shadow: 0 4px 20px rgba(43, 58, 240, 0.35);\n}\n.checkout-button.business {\n  background:\n    linear-gradient(\n      135deg,\n      #0f0f2d 0%,\n      #1a1a4a 100%) !important;\n  box-shadow: 0 4px 20px rgba(15, 15, 45, 0.35);\n}\n.checkout-button:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 28px rgba(43, 58, 240, 0.4);\n}\n.checkout-button:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.checkout-button mat-spinner {\n  margin-right: 8px;\n}\n.checkout-terms {\n  font-size: 12px;\n  color: #6b7280;\n  margin-top: 16px;\n}\n.checkout-terms a {\n  color: #2b3af0;\n  text-decoration: none;\n  font-weight: 500;\n}\n.checkout-terms a:hover {\n  text-decoration: underline;\n}\n@keyframes pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.5;\n  }\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.animate-fadeIn {\n  animation: fadeIn 0.4s ease-out forwards;\n  opacity: 0;\n}\n:host-context(.dark) .plans-container {\n  background:\n    linear-gradient(\n      180deg,\n      #0b0b18 0%,\n      #0f0f1f 100%);\n}\n:host-context(.dark) .current-plan-title,\n:host-context(.dark) .current-plan-header .current-plan-title {\n  color: #f8fafc;\n}\n:host-context(.dark) .current-plan-subtitle,\n:host-context(.dark) .current-plan-header .current-plan-subtitle {\n  color: #94a3b8;\n}\n:host-context(.dark) .text-gray-900 {\n  color: #f8fafc !important;\n}\n:host-context(.dark) .text-gray-500 {\n  color: #94a3b8 !important;\n}\n:host-context(.dark) .text-gray-400 {\n  color: rgba(148, 163, 184, 0.75) !important;\n}\n:host-context(.dark) .plan-card,\n:host-context(.dark) .select-plan-card,\n:host-context(.dark) .checkout-card,\n:host-context(.dark) .volume-change-summary {\n  background: #11122a;\n  border-color: rgba(255, 255, 255, 0.08);\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4), 0 12px 32px rgba(0, 0, 0, 0.35);\n}\n:host-context(.dark) .plan-card:hover,\n:host-context(.dark) .select-plan-card:hover,\n:host-context(.dark) .checkout-card:hover,\n:host-context(.dark) .volume-change-summary:hover {\n  border-color: rgba(43, 58, 240, 0.35);\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.45), 0 16px 40px rgba(0, 0, 0, 0.45);\n}\n:host-context(.dark) .plan-card.payment-failed {\n  border-color: rgba(248, 113, 113, 0.45);\n}\n:host-context(.dark) .select-plan-card.featured {\n  border-color: #2b3af0;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4), 0 12px 28px rgba(43, 58, 240, 0.25);\n}\n:host-context(.dark) .select-plan-card.featured:hover {\n  border-color: #4f5af6;\n}\n:host-context(.dark) .select-plan-card--current {\n  border-color: #34d399;\n  box-shadow: 0 8px 28px rgba(52, 211, 153, 0.2);\n}\n:host-context(.dark) .select-plan-card--current.featured {\n  border-color: #34d399;\n  box-shadow: 0 8px 28px rgba(52, 211, 153, 0.22);\n}\n:host-context(.dark) .free-plan-card {\n  border-color: rgba(255, 255, 255, 0.08);\n  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.35);\n}\n:host-context(.dark) .free-plan-card:hover {\n  border-color: rgba(148, 163, 184, 0.25);\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);\n}\n:host-context(.dark) .free-plan-card .plan-badge.free {\n  background: rgba(148, 163, 184, 0.16);\n  color: #cbd5e1;\n}\n:host-context(.dark) .free-plan-card .plan-price {\n  color: #f8fafc;\n}\n:host-context(.dark) .free-plan-card .plan-period,\n:host-context(.dark) .free-plan-card .plan-range {\n  color: #94a3b8;\n}\n:host-context(.dark) .card-header {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.04) 0%,\n      rgba(255, 255, 255, 0.02) 100%);\n  border-bottom-color: rgba(255, 255, 255, 0.08);\n}\n:host-context(.dark) .card-header h2 {\n  color: #f8fafc !important;\n}\n:host-context(.dark) .price-section,\n:host-context(.dark) .payment-method,\n:host-context(.dark) .optional-section,\n:host-context(.dark) .selected-stats {\n  background: rgba(255, 255, 255, 0.04);\n}\n:host-context(.dark) .price-section .price-label,\n:host-context(.dark) .price-section .price-period,\n:host-context(.dark) .price-section .price-amount .price-currency {\n  color: #94a3b8;\n}\n:host-context(.dark) .price-section .price-amount {\n  color: #f8fafc;\n}\n:host-context(.dark) .payment-method {\n  background: rgba(255, 255, 255, 0.04);\n}\n:host-context(.dark) .payment-method .payment-icon.link {\n  color: #cbd5f5;\n}\n:host-context(.dark) .payment-method .payment-text {\n  color: #cbd5f5;\n}\n:host-context(.dark) .payment-method .payment-expiry {\n  color: #94a3b8;\n}\n:host-context(.dark) .feature-card {\n  background: rgba(255, 255, 255, 0.04);\n  border-color: rgba(255, 255, 255, 0.08);\n}\n:host-context(.dark) .feature-card:hover {\n  border-color: rgba(43, 58, 240, 0.25);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.35);\n}\n:host-context(.dark) .feature-content .feature-label {\n  color: #94a3b8;\n}\n:host-context(.dark) .feature-content .feature-value {\n  color: #f8fafc;\n}\n:host-context(.dark) .feature-icon.whitelabel {\n  color: #cbd5f5;\n}\n:host-context(.dark) .feature-status {\n  color: rgba(255, 255, 255, 0.18);\n}\n:host-context(.dark) .feature-status.active {\n  color: #4f5af6;\n}\n:host-context(.dark) .optional-section {\n  background: rgba(255, 255, 255, 0.04);\n}\n:host-context(.dark) .optional-section .optional-title {\n  color: #f8fafc;\n}\n:host-context(.dark) .optional-section .optional-subtitle {\n  color: #94a3b8;\n}\n:host-context(.dark) .optional-card {\n  background: rgba(255, 255, 255, 0.03);\n  border-color: rgba(255, 255, 255, 0.08);\n}\n:host-context(.dark) .optional-card .optional-label {\n  color: #cbd5f5;\n}\n:host-context(.dark) .optional-card .optional-value {\n  color: #94a3b8;\n}\n:host-context(.dark) .optional-card .optional-link {\n  color: #4f5af6;\n}\n:host-context(.dark) .optional-card .optional-link:hover {\n  color: white;\n}\n:host-context(.dark) .status-badge.success {\n  background: rgba(43, 58, 240, 0.18);\n  color: #4f5af6;\n}\n:host-context(.dark) .status-badge.warning {\n  background: rgba(245, 158, 11, 0.18);\n  color: #fbbf24;\n}\n:host-context(.dark) .status-badge.error {\n  background: rgba(239, 68, 68, 0.18);\n  color: #f87171;\n}\n:host-context(.dark) .payment-alert {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(127, 29, 29, 0.35) 0%,\n      rgba(127, 29, 29, 0.25) 100%);\n  border-bottom-color: rgba(248, 113, 113, 0.35);\n  color: #fca5a5;\n}\n:host-context(.dark) .payment-alert mat-icon {\n  color: #f87171;\n}\n:host-context(.dark) .plan-pricing .plan-price {\n  color: #f8fafc;\n}\n:host-context(.dark) .plan-pricing .plan-price.custom {\n  color: #f8fafc;\n}\n:host-context(.dark) .plan-pricing .plan-period {\n  color: #94a3b8;\n}\n:host-context(.dark) .plan-range,\n:host-context(.dark) .free-plan-desc {\n  color: #94a3b8;\n}\n:host-context(.dark) .plan-range ::ng-deep .font-semibold,\n:host-context(.dark) .plan-range ::ng-deep b,\n:host-context(.dark) .free-plan-desc ::ng-deep .font-semibold,\n:host-context(.dark) .free-plan-desc ::ng-deep b {\n  color: #4f5af6;\n}\n:host-context(.dark) .plan-range ::ng-deep .text-verifik-vivid-blue,\n:host-context(.dark) .free-plan-desc ::ng-deep .text-verifik-vivid-blue {\n  color: #4f5af6 !important;\n}\n:host-context(.dark) .plan-features {\n  border-top-color: rgba(255, 255, 255, 0.06);\n  border-bottom-color: rgba(255, 255, 255, 0.06);\n}\n:host-context(.dark) .plan-stat .stat-label {\n  color: #94a3b8;\n}\n:host-context(.dark) .plan-stat .stat-value {\n  color: #f8fafc;\n}\n:host-context(.dark) .plan-includes .includes-title {\n  color: #f8fafc;\n}\n:host-context(.dark) .plan-includes .includes-list li {\n  color: #cbd5f5;\n}\n:host-context(.dark) .plan-includes .includes-list li mat-icon {\n  color: #4f5af6;\n}\n:host-context(.dark) .plan-badge.free {\n  background: rgba(148, 163, 184, 0.16);\n  color: #cbd5e1;\n}\n:host-context(.dark) .plan-badge.plus {\n  background: rgba(79, 90, 246, 0.22);\n  color: #4f5af6;\n}\n:host-context(.dark) .plan-badge.business {\n  background: rgba(79, 90, 246, 0.22);\n  color: white;\n}\n:host-context(.dark) .plan-badge.enterprise {\n  background:\n    linear-gradient(\n      135deg,\n      #1f2937 0%,\n      #0b0b18 100%);\n  color: white;\n}\n:host-context(.dark) .select-button.free {\n  border-color: rgba(148, 163, 184, 0.45);\n  color: #cbd5f5;\n}\n:host-context(.dark) .select-button.free:hover {\n  background: rgba(148, 163, 184, 0.12);\n}\n:host-context(.dark) .landing-slider-section {\n  background: rgba(43, 58, 240, 0.08);\n  border-color: rgba(79, 90, 246, 0.18);\n}\n:host-context(.dark) .landing-slider-title {\n  color: #f8fafc;\n}\n:host-context(.dark) .landing-slider-subtitle,\n:host-context(.dark) .landing-slider-track .track-label {\n  color: #94a3b8;\n}\n:host-context(.dark) .landing-slider-pill {\n  background:\n    linear-gradient(\n      135deg,\n      #2b3af0 0%,\n      #3730a3 100%);\n  color: white;\n  box-shadow: 0 4px 16px rgba(43, 58, 240, 0.45);\n}\n:host-context(.dark) .volume-change-summary__head-icon {\n  background: rgba(79, 90, 246, 0.15);\n  border-color: rgba(99, 102, 241, 0.3);\n}\n:host-context(.dark) .volume-change-summary__head-icon mat-icon {\n  color: #4f5af6;\n}\n:host-context(.dark) .volume-change-summary__eyebrow,\n:host-context(.dark) .volume-change-summary__panel-label,\n:host-context(.dark) .volume-change-summary__panel-unit,\n:host-context(.dark) .volume-change-summary__hint {\n  color: #94a3b8;\n}\n:host-context(.dark) .volume-change-summary__title {\n  color: #f8fafc;\n}\n:host-context(.dark) .volume-change-summary__panel {\n  border-color: rgba(255, 255, 255, 0.08);\n}\n:host-context(.dark) .volume-change-summary__panel--from {\n  background: rgba(255, 255, 255, 0.04);\n}\n:host-context(.dark) .volume-change-summary__panel--to {\n  background: rgba(43, 58, 240, 0.08);\n  border-color: rgba(67, 56, 202, 0.25);\n}\n:host-context(.dark) .volume-change-summary__panel--to.volume-change-summary__panel--highlight {\n  border-color: rgba(43, 58, 240, 0.45);\n  box-shadow: 0 0 0 2px rgba(43, 58, 240, 0.15);\n  background: rgba(43, 58, 240, 0.12);\n}\n:host-context(.dark) .volume-change-summary__panel-value {\n  color: #f8fafc;\n}\n:host-context(.dark) .volume-change-summary__mid-icon {\n  background: #11122a;\n  border-color: rgba(255, 255, 255, 0.08);\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.35);\n}\n:host-context(.dark) .volume-change-summary__mid-icon mat-icon {\n  color: #4f5af6;\n}\n:host-context(.dark) .volume-change-summary__hint {\n  border-top-color: rgba(255, 255, 255, 0.06);\n}\n:host-context(.dark) .checkout-card {\n  border-color: rgba(79, 90, 246, 0.18);\n}\n:host-context(.dark) .checkout-stats {\n  background: rgba(43, 58, 240, 0.08);\n  border-bottom-color: rgba(79, 90, 246, 0.18);\n}\n:host-context(.dark) .checkout-stats .stat-item mat-icon {\n  color: #4f5af6;\n}\n:host-context(.dark) .checkout-stats .stat-item .stat-value {\n  color: #f8fafc;\n}\n:host-context(.dark) .checkout-stats .stat-item .stat-label {\n  color: #94a3b8;\n}\n:host-context(.dark) .checkout-stats .stat-divider {\n  background: rgba(255, 255, 255, 0.12);\n}\n:host-context(.dark) .checkout-features {\n  border-bottom-color: rgba(79, 90, 246, 0.18);\n}\n:host-context(.dark) .checkout-features .features-column .features-title.included-title,\n:host-context(.dark) .checkout-features .features-column .features-title.included-title mat-icon {\n  color: #4f5af6;\n}\n:host-context(.dark) .checkout-features .features-column .features-title.extra-title,\n:host-context(.dark) .checkout-features .features-column .features-title.extra-title mat-icon {\n  color: #f8fafc;\n}\n:host-context(.dark) .checkout-features .features-column .features-list li {\n  color: #cbd5f5;\n  border-bottom-color: rgba(255, 255, 255, 0.06);\n}\n:host-context(.dark) .checkout-features .features-column .features-list li .feature-count {\n  color: #4f5af6;\n}\n:host-context(.dark) .checkout-features .features-column .features-list li .feature-check {\n  color: #34d399;\n}\n:host-context(.dark) .checkout-features .features-column .features-list li .feature-price {\n  color: #cbd5f5;\n}\n:host-context(.dark) .checkout-features .features-column .features-list li .extras-link {\n  color: #4f5af6;\n}\n:host-context(.dark) .extra-bio-notice {\n  border-color: rgba(79, 90, 246, 0.2);\n}\n:host-context(.dark) .extra-bio-header {\n  background: rgba(43, 58, 240, 0.12);\n}\n:host-context(.dark) .extra-bio-header:hover {\n  background: rgba(43, 58, 240, 0.18);\n}\n:host-context(.dark) .extra-bio-header .extra-bio-left span {\n  color: #f8fafc;\n}\n:host-context(.dark) .extra-bio-header .extra-bio-left .info-icon {\n  color: #4f5af6;\n}\n:host-context(.dark) .extra-bio-header .expand-icon {\n  color: #94a3b8;\n}\n:host-context(.dark) .extra-bio-body {\n  background: rgba(255, 255, 255, 0.02);\n}\n:host-context(.dark) .extra-bio-body p {\n  color: #94a3b8;\n}\n:host-context(.dark) .extra-bio-body .extra-bio-costs .bio-cost-item {\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid rgba(79, 90, 246, 0.15);\n}\n:host-context(.dark) .extra-bio-body .extra-bio-costs .bio-cost-item span {\n  color: #cbd5f5;\n}\n:host-context(.dark) .extra-bio-body .extra-bio-costs .bio-cost-item strong {\n  color: #f8fafc;\n  font-weight: 600;\n}\n:host-context(.dark) .checkout-terms {\n  color: #94a3b8;\n}\n:host-context(.dark) .checkout-terms a {\n  color: #4f5af6;\n}\n:host-context(.dark) .range-slider .range-slider__value {\n  color: #94a3b8;\n}\n:host-context(.dark) .range-slider .range-slider__input::-webkit-slider-runnable-track {\n  background-color: rgba(255, 255, 255, 0.14);\n}\n:host-context(.dark) .range-slider .range-slider__input::-webkit-slider-thumb {\n  border-color: #11122a !important;\n  box-shadow: 0 0 0 4px #11122a, 0 2px 10px rgba(43, 58, 240, 0.45);\n}\n:host-context(.dark) .range-slider .range-slider__input::-moz-range-track {\n  background-color: rgba(255, 255, 255, 0.14);\n}\n:host-context(.dark) .range-slider .range-slider__input::-moz-range-thumb {\n  border-color: #11122a !important;\n  box-shadow: 0 0 0 4px #11122a, 0 2px 10px rgba(43, 58, 240, 0.45);\n}\n:host-context(.dark) .selected-plan-card,\n:host-context(.dark) .features-table .table-row {\n  background: transparent;\n  border-color: rgba(255, 255, 255, 0.08);\n}\n:host-context(.dark) .features-table .table-row span:first-child {\n  color: #cbd5f5;\n}\n:host-context(.dark) .plan-description h3 {\n  color: #f8fafc;\n}\n:host-context(.dark) .plan-description p {\n  color: #94a3b8;\n}\n:host-context(.dark) .slider-section .slider-title {\n  color: #f8fafc;\n}\n:host-context(.dark) .upgrade-hint {\n  color: #94a3b8;\n}\n:host-context(.dark) .back-button:hover {\n  background: rgba(43, 58, 240, 0.15);\n}\n:host-context(.dark) .usage-period {\n  background: rgba(43, 58, 240, 0.16);\n  border-color: rgba(79, 90, 246, 0.28);\n}\n:host-context(.dark) .usage-period__title {\n  color: #f8fafc;\n}\n:host-context(.dark) .usage-period__reset {\n  color: rgb(147, 197, 253);\n}\n:host-context(.dark) .usage-period__date {\n  color: #94a3b8;\n}\n:host-context(.dark) .usage-bars {\n  background: rgba(255, 255, 255, 0.04);\n  border-color: rgba(255, 255, 255, 0.1);\n}\n/*# sourceMappingURL=smart-enroll-plans.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FleetPlansComponent, { className: "FleetPlansComponent", filePath: "src/app/modules/smart-fleet/plans/fleet-plans.component.ts", lineNumber: 56 });
})();
export {
  FleetPlansComponent
};
//# sourceMappingURL=chunk-2SUUB76Y.js.map
