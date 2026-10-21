import {
  FleetNavComponent,
  SmartFleetService
} from "./chunk-GHIW2F4Y.js";
import {
  AuthRequiredGateService
} from "./chunk-QPU67QFB.js";
import "./chunk-H3UX3NVF.js";
import {
  MatTooltipModule
} from "./chunk-FTSXFXXU.js";
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
  MatButtonModule
} from "./chunk-YSJP7SXK.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-CQIQSUBU.js";
import "./chunk-J762DGD5.js";
import "./chunk-DVRFI3SJ.js";
import {
  TranslocoModule,
  TranslocoPipe
} from "./chunk-R5W3A6HI.js";
import {
  Router,
  RouterLink,
  RouterModule
} from "./chunk-HYFP557I.js";
import "./chunk-PMCYMBOC.js";
import {
  CommonModule,
  Component,
  NgClass,
  NgForOf,
  NgIf,
  ViewEncapsulation,
  computed,
  firstValueFrom,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
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
  ɵɵpureFunction3,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-PNPEHISK.js";
import {
  __async
} from "./chunk-F5M2C4EZ.js";

// src/app/modules/smart-fleet/dashboard/fleet-dashboard.component.ts
var _c0 = () => ({ add: 1 });
var _c1 = (a0) => ({ credits: a0 });
var _c2 = () => [30, 60, 90];
var _c3 = (a0) => ({ days: a0 });
var _c4 = (a0) => ({ checks: a0 });
var _c5 = (a0) => ({ count: a0 });
var _c6 = (a0) => ["/smart-fleet/assets", a0];
var _c7 = (a0, a1, a2) => ({ status: a0, limit: a1, billed: a2 });
var _c8 = (a0) => ({ limit: a0 });
function FleetDashboardComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275element(1, "mat-spinner", 17);
    \u0275\u0275elementEnd();
  }
}
function FleetDashboardComponent_ng_container_20_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68)(1, "mat-icon", 69);
    \u0275\u0275text(2, "warning");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 70);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "a", 71);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(5, 2, "smartFleet.dashboard.runwayWarning", \u0275\u0275pureFunction1(7, _c3, (tmp_5_0 = ctx_r1.runway()) == null ? null : tmp_5_0.daysOfRunway)), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 5, "smartFleet.dashboard.addCredits"), " ");
  }
}
function FleetDashboardComponent_ng_container_20_p_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 72);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, "smartFleet.dashboard.weekExpired", \u0275\u0275pureFunction1(4, _c5, ctx_r1.expiredCount())), " ");
  }
}
function FleetDashboardComponent_ng_container_20_p_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 73);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.uncoveredLabel(), " ");
  }
}
function FleetDashboardComponent_ng_container_20_span_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 74);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r3 = \u0275\u0275nextContext().ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r1.severityClasses("critical"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", data_r3.alerts.severity.open.critical, " ", \u0275\u0275pipeBind1(2, 3, "smartFleet.severity.critical"), "");
  }
}
function FleetDashboardComponent_ng_container_20_span_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 74);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r3 = \u0275\u0275nextContext().ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r1.severityClasses("warning"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", data_r3.alerts.severity.open.warning, " ", \u0275\u0275pipeBind1(2, 3, "smartFleet.severity.warning"), "");
  }
}
function FleetDashboardComponent_ng_container_20_span_84_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 74);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r3 = \u0275\u0275nextContext().ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r1.severityClasses("info"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", data_r3.alerts.severity.open.info, " ", \u0275\u0275pipeBind1(2, 3, "smartFleet.severity.info"), "");
  }
}
function FleetDashboardComponent_ng_container_20_ng_container_111_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, "smartFleet.dashboard.runwayDays", \u0275\u0275pureFunction1(4, _c3, (tmp_5_0 = ctx_r1.runway()) == null ? null : tmp_5_0.daysOfRunway)), " ");
  }
}
function FleetDashboardComponent_ng_container_20_ng_template_112_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(1, 1, "smartFleet.dashboard.noMonitoringYet"));
  }
}
function FleetDashboardComponent_ng_container_20_button_120_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 75);
    \u0275\u0275listener("click", function FleetDashboardComponent_ng_container_20_button_120_Template_button_click_0_listener() {
      const option_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setHorizon(option_r5));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("bg-stone-900", ctx_r1.horizonDays() === option_r5)("text-white", ctx_r1.horizonDays() === option_r5)("text-stone-600", ctx_r1.horizonDays() !== option_r5)("hover:bg-stone-100", ctx_r1.horizonDays() !== option_r5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 9, "smartFleet.dashboard.horizonDays", \u0275\u0275pureFunction1(12, _c3, option_r5)), " ");
  }
}
function FleetDashboardComponent_ng_container_20_p_121_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 76);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "smartFleet.dashboard.nothingExpiring"), " ");
  }
}
function FleetDashboardComponent_ng_container_20_div_122_a_1_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const entry_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, "smartFleet.dashboard.inDays", \u0275\u0275pureFunction1(4, _c3, entry_r6.daysRemaining)));
  }
}
function FleetDashboardComponent_ng_container_20_div_122_a_1_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(1, 1, "smartFleet.dashboard.expired"));
  }
}
function FleetDashboardComponent_ng_container_20_div_122_a_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 79)(1, "span", 80);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 81);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 82);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 83);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 74);
    \u0275\u0275template(11, FleetDashboardComponent_ng_container_20_div_122_a_1_ng_container_11_Template, 3, 6, "ng-container", 56)(12, FleetDashboardComponent_ng_container_20_div_122_a_1_ng_template_12_Template, 2, 3, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const entry_r6 = ctx.$implicit;
    const expiredLabel_r7 = \u0275\u0275reference(13);
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(10, _c6, entry_r6.asset));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(entry_r6.plate || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(entry_r6.nickname || entry_r6.group || "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 8, "smartFleet.checkType." + entry_r6.checkType));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(entry_r6.expiresAt));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.expiryClasses(entry_r6.daysRemaining));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", entry_r6.daysRemaining >= 0)("ngIfElse", expiredLabel_r7);
  }
}
function FleetDashboardComponent_ng_container_20_div_122_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 77);
    \u0275\u0275template(1, FleetDashboardComponent_ng_container_20_div_122_a_1_Template, 14, 12, "a", 78);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.expiring());
  }
}
function FleetDashboardComponent_ng_container_20_div_134_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 84)(1, "span", 85);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 86);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r8 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "smartFleet.checkType." + row_r8.checkType));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", row_r8.credits, " (", row_r8.checks, ")");
  }
}
function FleetDashboardComponent_ng_container_20_p_135_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 87);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "smartFleet.dashboard.noSpendYet"), " ");
  }
}
function FleetDashboardComponent_ng_container_20_ng_container_140_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p", 88);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 89);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const planData_r9 = ctx.ngIf;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 3, "smartFleet.dashboard.planSummary", \u0275\u0275pureFunction3(8, _c7, planData_r9.status, planData_r9.assetLimit, planData_r9.billedQuantity)), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(6, 6, "smartFleet.dashboard.renewsOn"), " ", ctx_r1.formatDate(planData_r9.endDate), " ");
  }
}
function FleetDashboardComponent_ng_container_20_ng_template_141_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 88);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 90);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 2, "smartFleet.dashboard.freeTier", \u0275\u0275pureFunction1(7, _c8, (tmp_5_0 = ctx_r1.assets()) == null ? null : tmp_5_0.limit)), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 5, "smartFleet.dashboard.upgrade"), " ");
  }
}
function FleetDashboardComponent_ng_container_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, FleetDashboardComponent_ng_container_20_div_1_Template, 9, 9, "div", 18);
    \u0275\u0275elementStart(2, "section", 19)(3, "div", 20)(4, "h2", 21);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 9);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 22)(11, "button", 23);
    \u0275\u0275listener("click", function FleetDashboardComponent_ng_container_20_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.scrollToExpiring());
    });
    \u0275\u0275elementStart(12, "mat-icon", 24);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 7)(15, "p", 25);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "p", 26);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, FleetDashboardComponent_ng_container_20_p_20_Template, 3, 6, "p", 27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "a", 28)(22, "mat-icon", 24);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 7)(25, "p", 25);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "p", 26);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(30, FleetDashboardComponent_ng_container_20_p_30_Template, 2, 1, "p", 29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "a", 30)(32, "mat-icon", 24);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 7)(35, "p", 25);
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "p", 26);
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "transloco");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(41, "section", 31)(42, "div", 20)(43, "h2", 21);
    \u0275\u0275text(44);
    \u0275\u0275pipe(45, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "p", 9);
    \u0275\u0275text(47);
    \u0275\u0275pipe(48, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "div", 32)(50, "a", 33)(51, "div", 34)(52, "div", 35)(53, "mat-icon", 36);
    \u0275\u0275text(54, "directions_car");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "div", 7)(56, "span", 37);
    \u0275\u0275text(57);
    \u0275\u0275pipe(58, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "span", 38);
    \u0275\u0275text(60);
    \u0275\u0275elementStart(61, "span", 39);
    \u0275\u0275text(62);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(63, "div", 40);
    \u0275\u0275element(64, "div", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "span", 42);
    \u0275\u0275listener("click", function FleetDashboardComponent_ng_container_20_Template_span_click_65_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openPlans($event));
    })("keydown.enter", function FleetDashboardComponent_ng_container_20_Template_span_keydown_enter_65_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openPlans($event));
    });
    \u0275\u0275elementStart(66, "mat-icon", 43);
    \u0275\u0275text(67, "credit_card");
    \u0275\u0275elementEnd();
    \u0275\u0275text(68);
    \u0275\u0275pipe(69, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(70, "a", 44)(71, "div", 34)(72, "div", 45)(73, "mat-icon", 46);
    \u0275\u0275text(74, "notifications_active");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(75, "div", 7)(76, "span", 37);
    \u0275\u0275text(77);
    \u0275\u0275pipe(78, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "span", 38);
    \u0275\u0275text(80);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(81, "div", 47);
    \u0275\u0275template(82, FleetDashboardComponent_ng_container_20_span_82_Template, 3, 5, "span", 48)(83, FleetDashboardComponent_ng_container_20_span_83_Template, 3, 5, "span", 48)(84, FleetDashboardComponent_ng_container_20_span_84_Template, 3, 5, "span", 48);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(85, "a", 49)(86, "div", 34)(87, "div", 50)(88, "mat-icon", 51);
    \u0275\u0275text(89, "rule");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(90, "div", 7)(91, "span", 37);
    \u0275\u0275text(92);
    \u0275\u0275pipe(93, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "span", 38);
    \u0275\u0275text(95);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(96, "p", 52);
    \u0275\u0275text(97);
    \u0275\u0275pipe(98, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(99, "div", 53)(100, "div", 34)(101, "div", 54)(102, "mat-icon", 55);
    \u0275\u0275text(103, "savings");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(104, "div", 7)(105, "span", 37);
    \u0275\u0275text(106);
    \u0275\u0275pipe(107, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(108, "span", 38);
    \u0275\u0275text(109);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(110, "p", 52);
    \u0275\u0275template(111, FleetDashboardComponent_ng_container_20_ng_container_111_Template, 3, 6, "ng-container", 56)(112, FleetDashboardComponent_ng_container_20_ng_template_112_Template, 2, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(114, "div", 57)(115, "div", 58)(116, "h2", 21);
    \u0275\u0275text(117);
    \u0275\u0275pipe(118, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(119, "div", 59);
    \u0275\u0275template(120, FleetDashboardComponent_ng_container_20_button_120_Template, 3, 14, "button", 60);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(121, FleetDashboardComponent_ng_container_20_p_121_Template, 3, 3, "p", 61)(122, FleetDashboardComponent_ng_container_20_div_122_Template, 2, 1, "div", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(123, "div", 63)(124, "div", 53)(125, "h2", 21);
    \u0275\u0275text(126);
    \u0275\u0275pipe(127, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(128, "p", 64);
    \u0275\u0275text(129);
    \u0275\u0275elementStart(130, "span", 39);
    \u0275\u0275text(131);
    \u0275\u0275pipe(132, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(133, "div", 65);
    \u0275\u0275template(134, FleetDashboardComponent_ng_container_20_div_134_Template, 6, 5, "div", 66)(135, FleetDashboardComponent_ng_container_20_p_135_Template, 3, 3, "p", 67);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(136, "div", 53)(137, "h2", 21);
    \u0275\u0275text(138);
    \u0275\u0275pipe(139, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(140, FleetDashboardComponent_ng_container_20_ng_container_140_Template, 7, 12, "ng-container", 56)(141, FleetDashboardComponent_ng_container_20_ng_template_141_Template, 6, 9, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_13_0;
    let tmp_14_0;
    let tmp_15_0;
    let tmp_18_0;
    let tmp_23_0;
    let tmp_40_0;
    let tmp_42_0;
    let tmp_43_0;
    let tmp_49_0;
    let tmp_50_0;
    let tmp_51_0;
    let tmp_52_0;
    let tmp_53_0;
    const data_r3 = ctx.ngIf;
    const noBurn_r10 = \u0275\u0275reference(113);
    const noPlan_r11 = \u0275\u0275reference(142);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isRunwayLow());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 56, "smartFleet.dashboard.weekTitle"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 58, "smartFleet.dashboard.weekHint"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r1.dueThisWeek().length ? "border-red-200 bg-red-50 hover:bg-red-100 dark:border-red-900/50 dark:bg-red-950/30" : "border-stone-200 bg-stone-50 dark:border-gray-800 dark:bg-gray-950/40");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.dueThisWeek().length ? "text-red-600 dark:text-red-400" : "text-emerald-600 dark:text-emerald-400");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.dueThisWeek().length ? "event_busy" : "event_available");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.dueThisWeek().length, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 60, "smartFleet.dashboard.weekDue"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.expiredCount());
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ((tmp_13_0 = ctx_r1.uncoveredAssets()) == null ? null : tmp_13_0.length) ? "border-amber-200 bg-amber-50 hover:bg-amber-100 dark:border-amber-900/50 dark:bg-amber-950/30" : "border-stone-200 bg-stone-50 dark:border-gray-800 dark:bg-gray-950/40");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ((tmp_14_0 = ctx_r1.uncoveredAssets()) == null ? null : tmp_14_0.length) ? "text-amber-600 dark:text-amber-400" : "text-emerald-600 dark:text-emerald-400");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(((tmp_15_0 = ctx_r1.uncoveredAssets()) == null ? null : tmp_15_0.length) ? "rule" : "verified");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.uncoveredAssets() === null ? "\u2014" : ctx_r1.uncoveredAssets().length, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(29, 62, "smartFleet.dashboard.weekNoRules"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (tmp_18_0 = ctx_r1.uncoveredAssets()) == null ? null : tmp_18_0.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.creditShortfall() ? "border-red-200 bg-red-50 hover:bg-red-100 dark:border-red-900/50 dark:bg-red-950/30" : "border-stone-200 bg-stone-50 dark:border-gray-800 dark:bg-gray-950/40");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.creditShortfall() ? "text-red-600 dark:text-red-400" : "text-emerald-600 dark:text-emerald-400");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.creditShortfall() ? "savings" : "check_circle");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.creditShortfall() || \u0275\u0275pipeBind1(37, 64, "smartFleet.dashboard.weekCreditsOk"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(40, 66, ctx_r1.creditShortfall() ? "smartFleet.dashboard.weekCreditsShort" : "smartFleet.dashboard.weekCreditsEnough", \u0275\u0275pureFunction1(96, _c1, (tmp_23_0 = (tmp_23_0 = ctx_r1.projected()) == null ? null : tmp_23_0.totalCredits) !== null && tmp_23_0 !== void 0 ? tmp_23_0 : 0)), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(45, 69, "smartFleet.dashboard.snapshotTitle"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(48, 71, "smartFleet.dashboard.snapshotHint"), " ");
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(58, 73, "smartFleet.dashboard.activeAssets"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", data_r3.assets.active, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("/ ", data_r3.assets.limit, "");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r1.assetUsagePercent(), "%");
    \u0275\u0275classProp("bg-indigo-500", !ctx_r1.isNearAssetLimit())("bg-amber-500", ctx_r1.isNearAssetLimit());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(69, 75, ctx_r1.isNearAssetLimit() ? "smartFleet.dashboard.expandPlan" : "smartFleet.dashboard.managePlan"), " ");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(78, 77, "smartFleet.dashboard.openAlerts"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(data_r3.alerts.openTotal);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", data_r3.alerts.severity.open.critical);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", data_r3.alerts.severity.open.warning);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", data_r3.alerts.severity.open.info);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(93, 79, "smartFleet.dashboard.activeRules"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(data_r3.rules.active);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(98, 81, "smartFleet.dashboard.projectedMonthly", \u0275\u0275pureFunction1(98, _c1, (tmp_40_0 = ctx_r1.projected()) == null ? null : tmp_40_0.totalCredits)), " ");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(107, 84, "smartFleet.dashboard.creditBalance"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((tmp_42_0 = ctx_r1.runway()) == null ? null : tmp_42_0.balance);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ((tmp_43_0 = ctx_r1.runway()) == null ? null : tmp_43_0.daysOfRunway) !== null)("ngIfElse", noBurn_r10);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(118, 86, "smartFleet.dashboard.expiringSoon"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(100, _c2));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.expiring().length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.expiring().length);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(127, 88, "smartFleet.dashboard.spendTitle", \u0275\u0275pureFunction1(101, _c3, (tmp_49_0 = ctx_r1.spend()) == null ? null : tmp_49_0.windowDays)), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (tmp_50_0 = ctx_r1.spend()) == null ? null : tmp_50_0.totalCredits, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(132, 91, "smartFleet.dashboard.creditsAcross", \u0275\u0275pureFunction1(103, _c4, (tmp_51_0 = ctx_r1.spend()) == null ? null : tmp_51_0.totalChecks)));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", (tmp_52_0 = ctx_r1.spend()) == null ? null : tmp_52_0.byCheckType);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !((tmp_53_0 = ctx_r1.spend()) == null ? null : tmp_53_0.byCheckType == null ? null : tmp_53_0.byCheckType.length));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(139, 94, "smartFleet.dashboard.planTitle"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.plan())("ngIfElse", noPlan_r11);
  }
}
var FleetDashboardComponent = class _FleetDashboardComponent {
  constructor() {
    this._fleetService = inject(SmartFleetService);
    this._authGate = inject(AuthRequiredGateService);
    this._router = inject(Router);
    this.dashboard = this._fleetService.dashboard;
    this.isLoading = this._fleetService.isLoadingDashboard;
    this.horizonDays = signal(60);
    this.assets = computed(() => this.dashboard()?.assets ?? null);
    this.alerts = computed(() => this.dashboard()?.alerts ?? null);
    this.runway = computed(() => this.dashboard()?.runway ?? null);
    this.spend = computed(() => this.dashboard()?.spend ?? null);
    this.projected = computed(() => this.dashboard()?.projectedMonthlyCredits ?? null);
    this.plan = computed(() => this.dashboard()?.plan ?? null);
    this.expiring = computed(() => this.dashboard()?.expiringSoon.entries ?? []);
    this.assetUsagePercent = computed(() => {
      const assets = this.assets();
      if (!assets?.limit)
        return 0;
      return Math.min(100, Math.round(assets.active / assets.limit * 100));
    });
    this.isNearAssetLimit = computed(() => this.assetUsagePercent() >= 80);
    this.isRunwayLow = computed(() => {
      const runway = this.runway();
      return runway?.daysOfRunway !== null && (runway?.daysOfRunway ?? 999) <= 7;
    });
    this.dueThisWeek = computed(() => this.expiring().filter((entry) => entry.daysRemaining <= 7));
    this.expiredCount = computed(() => this.expiring().filter((entry) => entry.daysRemaining < 0).length);
    this.uncoveredAssets = signal(null);
    this.creditShortfall = computed(() => {
      const runway = this.runway();
      const projected = this.projected()?.totalCredits ?? 0;
      if (!runway || !projected)
        return 0;
      return Math.max(0, Math.ceil(projected - runway.balance));
    });
  }
  /** Rendered inside the assets card link, so it must not let the outer navigation run. */
  openPlans(event) {
    event.preventDefault();
    event.stopPropagation();
    void this._router.navigate(["/smart-fleet/plans"]);
  }
  ngOnInit() {
    this._authGate.runWithAuthOrDialog({
      onAuthenticated: () => {
        this.reload();
        void this._loadCoverage();
      },
      panelClass: "auth-required-dialog"
    });
  }
  uncoveredLabel() {
    const assets = this.uncoveredAssets() ?? [];
    const names = assets.slice(0, 3).map((asset) => asset.plate || asset.vin || asset.nickname || "\u2014");
    return assets.length > 3 ? `${names.join(", ")} +${assets.length - 3}` : names.join(", ");
  }
  scrollToExpiring() {
    document.getElementById("fleet-expiring")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  _loadCoverage() {
    return __async(this, null, function* () {
      try {
        const [assets, rules] = yield Promise.all([
          this._fleetService.findAllAssets({ isActive: true }),
          firstValueFrom(this._fleetService.listWatchRules())
        ]);
        const active = (rules.data ?? []).filter((rule) => rule.isActive !== false && !rule.unassigned);
        const assetIdOf = (rule) => typeof rule.asset === "string" ? rule.asset : rule.asset?._id || null;
        const fleetWide = active.some((rule) => !assetIdOf(rule) && !rule.group);
        if (fleetWide) {
          this.uncoveredAssets.set([]);
          return;
        }
        const byAsset = new Set(active.map(assetIdOf).filter(Boolean));
        const byGroup = new Set(active.map((rule) => rule.group).filter(Boolean));
        this.uncoveredAssets.set(assets.filter((asset) => !(asset._id && byAsset.has(asset._id)) && !(asset.group && byGroup.has(asset.group))));
      } catch (err) {
        console.error("[SmartFleet] coverage summary error", err);
        this.uncoveredAssets.set(null);
      }
    });
  }
  reload() {
    this._fleetService.getDashboard({ horizonDays: this.horizonDays() }).subscribe({
      error: (err) => console.error("[SmartFleet] getDashboard error", err)
    });
  }
  setHorizon(days) {
    this.horizonDays.set(days);
    this.reload();
  }
  severityClasses(severity) {
    switch (severity) {
      case "critical":
        return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300";
      case "warning":
        return "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300";
      default:
        return "bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300";
    }
  }
  expiryClasses(daysRemaining) {
    if (daysRemaining < 0)
      return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300";
    if (daysRemaining <= 15)
      return "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300";
    return "bg-stone-100 text-stone-600 dark:bg-gray-800 dark:text-stone-300";
  }
  formatDate(value) {
    if (!value)
      return "\u2014";
    return new Date(value).toLocaleDateString();
  }
  static {
    this.\u0275fac = function FleetDashboardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FleetDashboardComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FleetDashboardComponent, selectors: [["fleet-dashboard"]], decls: 21, vars: 13, consts: [["noBurn", ""], ["noPlan", ""], ["expiredLabel", ""], [1, "flex", "min-h-screen", "min-w-0", "flex-auto", "flex-col", "bg-stone-50", "dark:bg-gray-950"], [1, "border-b", "border-stone-200/90", "bg-white/90", "px-5", "py-6", "backdrop-blur-sm", "dark:border-gray-800", "dark:bg-gray-950/90", "md:px-8", "md:py-8"], [1, "mx-auto", "flex", "w-full", "max-w-7xl", "flex-col", "gap-5"], [1, "flex", "flex-wrap", "items-start", "justify-between", "gap-3"], [1, "min-w-0"], [1, "text-2xl", "font-semibold", "tracking-tight", "text-stone-900", "dark:text-white", "md:text-3xl"], [1, "mt-1", "text-sm", "text-stone-500", "dark:text-stone-400"], ["mat-flat-button", "", "color", "primary", "type", "button", "routerLink", "/smart-fleet/assets", 1, "shrink-0", "rounded-xl", "!px-6", "!py-2", 3, "queryParams"], [1, "mr-2", "icon-size-5"], [1, "flex", "flex-auto", "flex-col", "px-5", "py-8", "md:px-8", "md:py-10"], [1, "mx-auto", "flex", "w-full", "max-w-7xl", "flex-col", "gap-6"], ["class", "flex justify-center py-16", 4, "ngIf"], [4, "ngIf"], [1, "flex", "justify-center", "py-16"], ["diameter", "40"], ["class", "flex flex-wrap items-center gap-3 rounded-2xl border border-amber-300 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-900/20", 4, "ngIf"], [1, "rounded-2xl", "border", "border-stone-200/90", "bg-white", "shadow-sm", "dark:border-gray-800", "dark:bg-gray-900"], [1, "border-b", "border-stone-200/90", "px-5", "py-4", "dark:border-gray-800"], [1, "text-base", "font-semibold", "text-stone-900", "dark:text-white"], [1, "grid", "gap-3", "p-5", "md:grid-cols-3"], ["type", "button", 1, "flex", "items-start", "gap-3", "rounded-2xl", "border", "p-4", "text-left", "transition-colors", 3, "click", "ngClass"], [1, "icon-size-6", 3, "ngClass"], [1, "text-2xl", "font-bold", "text-stone-900", "dark:text-white"], [1, "text-sm", "font-medium", "text-stone-700", "dark:text-stone-200"], ["class", "mt-0.5 text-xs text-red-700 dark:text-red-300", 4, "ngIf"], ["routerLink", "/smart-fleet/watch-rules", 1, "flex", "items-start", "gap-3", "rounded-2xl", "border", "p-4", "transition-colors", 3, "ngClass"], ["class", "mt-0.5 truncate text-xs text-amber-800 dark:text-amber-300", 4, "ngIf"], ["routerLink", "/add-credits", 1, "flex", "items-start", "gap-3", "rounded-2xl", "border", "p-4", "transition-colors", 3, "ngClass"], [1, "overflow-hidden", "rounded-2xl", "border", "border-stone-200/90", "bg-white", "shadow-sm", "dark:border-gray-800", "dark:bg-gray-900"], [1, "grid", "grid-cols-2", "gap-4", "bg-stone-50/80", "p-5", "dark:bg-gray-950/40", "md:grid-cols-4"], ["routerLink", "/smart-fleet/assets", 1, "rounded-2xl", "border", "border-stone-200/90", "bg-white", "p-5", "shadow-sm", "transition-all", "hover:border-indigo-300", "hover:shadow-md", "dark:border-gray-800", "dark:bg-gray-900", "dark:hover:border-indigo-700"], [1, "flex", "items-center", "gap-3"], [1, "flex", "h-10", "w-10", "shrink-0", "items-center", "justify-center", "rounded-lg", "bg-indigo-100", "dark:bg-indigo-900/30"], [1, "icon-size-5", "text-indigo-600", "dark:text-indigo-400"], [1, "block", "text-xs", "font-medium", "uppercase", "text-stone-500", "dark:text-stone-400"], [1, "text-xl", "font-bold", "text-stone-900", "dark:text-white"], [1, "text-sm", "font-normal", "text-stone-500"], [1, "mt-3", "h-1.5", "w-full", "overflow-hidden", "rounded-full", "bg-stone-100", "dark:bg-gray-800"], [1, "h-full", "rounded-full", "transition-all"], ["role", "link", "tabindex", "0", 1, "mt-2", "inline-flex", "items-center", "gap-1", "text-xs", "font-medium", "text-indigo-600", "hover:underline", "dark:text-indigo-300", 3, "click", "keydown.enter"], [1, "icon-size-4", "text-current"], ["routerLink", "/smart-fleet/alerts", 1, "rounded-2xl", "border", "border-stone-200/90", "bg-white", "p-5", "shadow-sm", "transition-all", "hover:border-red-300", "hover:shadow-md", "dark:border-gray-800", "dark:bg-gray-900", "dark:hover:border-red-800"], [1, "flex", "h-10", "w-10", "shrink-0", "items-center", "justify-center", "rounded-lg", "bg-red-100", "dark:bg-red-900/30"], [1, "icon-size-5", "text-red-600", "dark:text-red-400"], [1, "mt-3", "flex", "flex-wrap", "gap-1.5"], ["class", "rounded-full px-2 py-0.5 text-xs font-semibold", 3, "ngClass", 4, "ngIf"], ["routerLink", "/smart-fleet/watch-rules", 1, "rounded-2xl", "border", "border-stone-200/90", "bg-white", "p-5", "shadow-sm", "transition-all", "hover:border-purple-300", "hover:shadow-md", "dark:border-gray-800", "dark:bg-gray-900", "dark:hover:border-purple-800"], [1, "flex", "h-10", "w-10", "shrink-0", "items-center", "justify-center", "rounded-lg", "bg-purple-100", "dark:bg-purple-900/30"], [1, "icon-size-5", "text-purple-600", "dark:text-purple-400"], [1, "mt-3", "text-xs", "text-stone-500", "dark:text-stone-400"], [1, "rounded-2xl", "border", "border-stone-200/90", "bg-white", "p-5", "shadow-sm", "dark:border-gray-800", "dark:bg-gray-900"], [1, "flex", "h-10", "w-10", "shrink-0", "items-center", "justify-center", "rounded-lg", "bg-emerald-100", "dark:bg-emerald-900/30"], [1, "icon-size-5", "text-emerald-600", "dark:text-emerald-400"], [4, "ngIf", "ngIfElse"], ["id", "fleet-expiring", 1, "scroll-mt-6", "rounded-2xl", "border", "border-stone-200/90", "bg-white", "shadow-sm", "dark:border-gray-800", "dark:bg-gray-900"], [1, "flex", "flex-wrap", "items-center", "justify-between", "gap-3", "border-b", "border-stone-200/90", "px-5", "py-4", "dark:border-gray-800"], [1, "flex", "gap-1"], ["type", "button", "class", "rounded-lg px-3 py-1 text-xs font-medium transition-colors", 3, "bg-stone-900", "text-white", "text-stone-600", "hover:bg-stone-100", "click", 4, "ngFor", "ngForOf"], ["class", "px-5 py-8 text-center text-sm text-stone-500 dark:text-stone-400", 4, "ngIf"], ["class", "divide-y divide-stone-200/90 dark:divide-gray-800", 4, "ngIf"], [1, "grid", "gap-4", "md:grid-cols-2"], [1, "mt-1", "text-2xl", "font-bold", "text-stone-900", "dark:text-white"], [1, "mt-4", "flex", "flex-col", "gap-2"], ["class", "flex items-center justify-between text-sm", 4, "ngFor", "ngForOf"], ["class", "text-sm text-stone-500 dark:text-stone-400", 4, "ngIf"], [1, "flex", "flex-wrap", "items-center", "gap-3", "rounded-2xl", "border", "border-amber-300", "bg-amber-50", "p-4", "dark:border-amber-800", "dark:bg-amber-900/20"], [1, "icon-size-5", "text-amber-600", "dark:text-amber-400"], [1, "text-sm", "font-medium", "text-amber-900", "dark:text-amber-200"], ["routerLink", "/add-credits", 1, "text-sm", "font-semibold", "text-amber-900", "underline", "underline-offset-4", "dark:text-amber-200"], [1, "mt-0.5", "text-xs", "text-red-700", "dark:text-red-300"], [1, "mt-0.5", "truncate", "text-xs", "text-amber-800", "dark:text-amber-300"], [1, "rounded-full", "px-2", "py-0.5", "text-xs", "font-semibold", 3, "ngClass"], ["type", "button", 1, "rounded-lg", "px-3", "py-1", "text-xs", "font-medium", "transition-colors", 3, "click"], [1, "px-5", "py-8", "text-center", "text-sm", "text-stone-500", "dark:text-stone-400"], [1, "divide-y", "divide-stone-200/90", "dark:divide-gray-800"], ["class", "flex flex-wrap items-center gap-3 px-5 py-3 transition-colors hover:bg-stone-50 dark:hover:bg-gray-800/50", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "flex", "flex-wrap", "items-center", "gap-3", "px-5", "py-3", "transition-colors", "hover:bg-stone-50", "dark:hover:bg-gray-800/50", 3, "routerLink"], [1, "rounded-lg", "bg-stone-100", "px-2", "py-1", "font-mono", "text-sm", "font-semibold", "text-stone-800", "dark:bg-gray-800", "dark:text-stone-200"], [1, "text-sm", "text-stone-600", "dark:text-stone-300"], [1, "rounded-full", "bg-stone-100", "px-2", "py-0.5", "text-xs", "font-medium", "uppercase", "text-stone-600", "dark:bg-gray-800", "dark:text-stone-300"], [1, "ml-auto", "text-xs", "text-stone-500", "dark:text-stone-400"], [1, "flex", "items-center", "justify-between", "text-sm"], [1, "text-stone-600", "dark:text-stone-300"], [1, "font-medium", "text-stone-900", "dark:text-white"], [1, "text-sm", "text-stone-500", "dark:text-stone-400"], [1, "mt-2", "text-sm", "text-stone-600", "dark:text-stone-300"], [1, "mt-1", "text-xs", "text-stone-500", "dark:text-stone-400"], ["routerLink", "/subscription-plans", 1, "mt-3", "inline-flex", "items-center", "gap-1", "text-sm", "font-semibold", "text-indigo-600", "underline", "underline-offset-4", "dark:text-indigo-400"]], template: function FleetDashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 3)(1, "header", 4)(2, "div", 5);
        \u0275\u0275element(3, "fleet-nav");
        \u0275\u0275elementStart(4, "div", 6)(5, "div", 7)(6, "h1", 8);
        \u0275\u0275text(7);
        \u0275\u0275pipe(8, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "p", 9);
        \u0275\u0275text(10);
        \u0275\u0275pipe(11, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "button", 10)(13, "mat-icon", 11);
        \u0275\u0275text(14, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(15);
        \u0275\u0275pipe(16, "transloco");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(17, "main", 12)(18, "div", 13);
        \u0275\u0275template(19, FleetDashboardComponent_div_19_Template, 2, 0, "div", 14)(20, FleetDashboardComponent_ng_container_20_Template, 143, 105, "ng-container", 15);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 6, "smartFleet.title"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 8, "smartFleet.subtitle"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(12, _c0));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 10, "smartFleet.assets.addAsset"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", ctx.isLoading() && !ctx.dashboard());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.dashboard());
      }
    }, dependencies: [
      CommonModule,
      NgClass,
      NgForOf,
      NgIf,
      TranslocoModule,
      TranslocoPipe,
      RouterModule,
      RouterLink,
      MatButtonModule,
      MatButton,
      MatIconModule,
      MatIcon,
      MatTooltipModule,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      FleetNavComponent
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FleetDashboardComponent, [{
    type: Component,
    args: [{ selector: "fleet-dashboard", standalone: true, imports: [
      CommonModule,
      TranslocoModule,
      RouterModule,
      MatButtonModule,
      MatIconModule,
      MatTooltipModule,
      MatProgressSpinnerModule,
      FleetNavComponent
    ], encapsulation: ViewEncapsulation.None, template: `<div class="flex min-h-screen min-w-0 flex-auto flex-col bg-stone-50 dark:bg-gray-950">\r
    <header\r
        class="border-b border-stone-200/90 bg-white/90 px-5 py-6 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-950/90 md:px-8 md:py-8"\r
    >\r
        <div class="mx-auto flex w-full max-w-7xl flex-col gap-5">\r
            <fleet-nav />\r
\r
            <div class="flex flex-wrap items-start justify-between gap-3">\r
                <div class="min-w-0">\r
                    <h1\r
                        class="text-2xl font-semibold tracking-tight text-stone-900 dark:text-white md:text-3xl"\r
                    >\r
                        {{ 'smartFleet.title' | transloco }}\r
                    </h1>\r
                    <p class="mt-1 text-sm text-stone-500 dark:text-stone-400">\r
                        {{ 'smartFleet.subtitle' | transloco }}\r
                    </p>\r
                </div>\r
                <button\r
                    mat-flat-button\r
                    color="primary"\r
                    type="button"\r
                    routerLink="/smart-fleet/assets"\r
                    [queryParams]="{ add: 1 }"\r
                    class="shrink-0 rounded-xl !px-6 !py-2"\r
                >\r
                    <mat-icon class="mr-2 icon-size-5">add</mat-icon>\r
                    {{ 'smartFleet.assets.addAsset' | transloco }}\r
                </button>\r
            </div>\r
        </div>\r
    </header>\r
\r
    <main class="flex flex-auto flex-col px-5 py-8 md:px-8 md:py-10">\r
        <div class="mx-auto flex w-full max-w-7xl flex-col gap-6">\r
            <div class="flex justify-center py-16" *ngIf="isLoading() && !dashboard()">\r
                <mat-spinner diameter="40"></mat-spinner>\r
            </div>\r
\r
            <ng-container *ngIf="dashboard() as data">\r
                <!-- Runway warning: the credit balance is what silently stops monitoring -->\r
                <div\r
                    *ngIf="isRunwayLow()"\r
                    class="flex flex-wrap items-center gap-3 rounded-2xl border border-amber-300 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-900/20"\r
                >\r
                    <mat-icon class="icon-size-5 text-amber-600 dark:text-amber-400"\r
                        >warning</mat-icon\r
                    >\r
                    <span class="text-sm font-medium text-amber-900 dark:text-amber-200">\r
                        {{\r
                            'smartFleet.dashboard.runwayWarning'\r
                                | transloco: { days: runway()?.daysOfRunway }\r
                        }}\r
                    </span>\r
                    <a\r
                        routerLink="/add-credits"\r
                        class="text-sm font-semibold text-amber-900 underline underline-offset-4 dark:text-amber-200"\r
                    >\r
                        {{ 'smartFleet.dashboard.addCredits' | transloco }}\r
                    </a>\r
                </div>\r
\r
                <!-- What needs attention this week -->\r
                <section\r
                    class="rounded-2xl border border-stone-200/90 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900"\r
                >\r
                    <div class="border-b border-stone-200/90 px-5 py-4 dark:border-gray-800">\r
                        <h2 class="text-base font-semibold text-stone-900 dark:text-white">\r
                            {{ 'smartFleet.dashboard.weekTitle' | transloco }}\r
                        </h2>\r
                        <p class="mt-1 text-sm text-stone-500 dark:text-stone-400">\r
                            {{ 'smartFleet.dashboard.weekHint' | transloco }}\r
                        </p>\r
                    </div>\r
                    <div class="grid gap-3 p-5 md:grid-cols-3">\r
                        <button\r
                            type="button"\r
                            (click)="scrollToExpiring()"\r
                            class="flex items-start gap-3 rounded-2xl border p-4 text-left transition-colors"\r
                            [ngClass]="\r
                                dueThisWeek().length\r
                                    ? 'border-red-200 bg-red-50 hover:bg-red-100 dark:border-red-900/50 dark:bg-red-950/30'\r
                                    : 'border-stone-200 bg-stone-50 dark:border-gray-800 dark:bg-gray-950/40'\r
                            "\r
                        >\r
                            <mat-icon\r
                                class="icon-size-6"\r
                                [ngClass]="dueThisWeek().length ? 'text-red-600 dark:text-red-400' : 'text-emerald-600 dark:text-emerald-400'"\r
                                >{{ dueThisWeek().length ? 'event_busy' : 'event_available' }}</mat-icon\r
                            >\r
                            <div class="min-w-0">\r
                                <p class="text-2xl font-bold text-stone-900 dark:text-white">\r
                                    {{ dueThisWeek().length }}\r
                                </p>\r
                                <p class="text-sm font-medium text-stone-700 dark:text-stone-200">\r
                                    {{ 'smartFleet.dashboard.weekDue' | transloco }}\r
                                </p>\r
                                <p *ngIf="expiredCount()" class="mt-0.5 text-xs text-red-700 dark:text-red-300">\r
                                    {{ 'smartFleet.dashboard.weekExpired' | transloco: { count: expiredCount() } }}\r
                                </p>\r
                            </div>\r
                        </button>\r
\r
                        <a\r
                            routerLink="/smart-fleet/watch-rules"\r
                            class="flex items-start gap-3 rounded-2xl border p-4 transition-colors"\r
                            [ngClass]="\r
                                uncoveredAssets()?.length\r
                                    ? 'border-amber-200 bg-amber-50 hover:bg-amber-100 dark:border-amber-900/50 dark:bg-amber-950/30'\r
                                    : 'border-stone-200 bg-stone-50 dark:border-gray-800 dark:bg-gray-950/40'\r
                            "\r
                        >\r
                            <mat-icon\r
                                class="icon-size-6"\r
                                [ngClass]="uncoveredAssets()?.length ? 'text-amber-600 dark:text-amber-400' : 'text-emerald-600 dark:text-emerald-400'"\r
                                >{{ uncoveredAssets()?.length ? 'rule' : 'verified' }}</mat-icon\r
                            >\r
                            <div class="min-w-0">\r
                                <p class="text-2xl font-bold text-stone-900 dark:text-white">\r
                                    {{ uncoveredAssets() === null ? '\u2014' : uncoveredAssets()!.length }}\r
                                </p>\r
                                <p class="text-sm font-medium text-stone-700 dark:text-stone-200">\r
                                    {{ 'smartFleet.dashboard.weekNoRules' | transloco }}\r
                                </p>\r
                                <p\r
                                    *ngIf="uncoveredAssets()?.length"\r
                                    class="mt-0.5 truncate text-xs text-amber-800 dark:text-amber-300"\r
                                >\r
                                    {{ uncoveredLabel() }}\r
                                </p>\r
                            </div>\r
                        </a>\r
\r
                        <a\r
                            routerLink="/add-credits"\r
                            class="flex items-start gap-3 rounded-2xl border p-4 transition-colors"\r
                            [ngClass]="\r
                                creditShortfall()\r
                                    ? 'border-red-200 bg-red-50 hover:bg-red-100 dark:border-red-900/50 dark:bg-red-950/30'\r
                                    : 'border-stone-200 bg-stone-50 dark:border-gray-800 dark:bg-gray-950/40'\r
                            "\r
                        >\r
                            <mat-icon\r
                                class="icon-size-6"\r
                                [ngClass]="creditShortfall() ? 'text-red-600 dark:text-red-400' : 'text-emerald-600 dark:text-emerald-400'"\r
                                >{{ creditShortfall() ? 'savings' : 'check_circle' }}</mat-icon\r
                            >\r
                            <div class="min-w-0">\r
                                <p class="text-2xl font-bold text-stone-900 dark:text-white">\r
                                    {{ creditShortfall() || ('smartFleet.dashboard.weekCreditsOk' | transloco) }}\r
                                </p>\r
                                <p class="text-sm font-medium text-stone-700 dark:text-stone-200">\r
                                    {{\r
                                        (creditShortfall()\r
                                            ? 'smartFleet.dashboard.weekCreditsShort'\r
                                            : 'smartFleet.dashboard.weekCreditsEnough'\r
                                        ) | transloco: { credits: projected()?.totalCredits ?? 0 }\r
                                    }}\r
                                </p>\r
                            </div>\r
                        </a>\r
                    </div>\r
                </section>\r
\r
                <!-- What the account has right now -->\r
                <section\r
                    class="overflow-hidden rounded-2xl border border-stone-200/90 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900"\r
                >\r
                    <div class="border-b border-stone-200/90 px-5 py-4 dark:border-gray-800">\r
                        <h2 class="text-base font-semibold text-stone-900 dark:text-white">\r
                            {{ 'smartFleet.dashboard.snapshotTitle' | transloco }}\r
                        </h2>\r
                        <p class="mt-1 text-sm text-stone-500 dark:text-stone-400">\r
                            {{ 'smartFleet.dashboard.snapshotHint' | transloco }}\r
                        </p>\r
                    </div>\r
                    <div class="grid grid-cols-2 gap-4 bg-stone-50/80 p-5 dark:bg-gray-950/40 md:grid-cols-4">\r
                    <a\r
                        routerLink="/smart-fleet/assets"\r
                        class="rounded-2xl border border-stone-200/90 bg-white p-5 shadow-sm transition-all hover:border-indigo-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-indigo-700"\r
                    >\r
                        <div class="flex items-center gap-3">\r
                            <div\r
                                class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-100 dark:bg-indigo-900/30"\r
                            >\r
                                <mat-icon class="icon-size-5 text-indigo-600 dark:text-indigo-400"\r
                                    >directions_car</mat-icon\r
                                >\r
                            </div>\r
                            <div class="min-w-0">\r
                                <span\r
                                    class="block text-xs font-medium uppercase text-stone-500 dark:text-stone-400"\r
                                    >{{ 'smartFleet.dashboard.activeAssets' | transloco }}</span\r
                                >\r
                                <span class="text-xl font-bold text-stone-900 dark:text-white"\r
                                    >{{ data.assets.active }}\r
                                    <span class="text-sm font-normal text-stone-500"\r
                                        >/ {{ data.assets.limit }}</span\r
                                    ></span\r
                                >\r
                            </div>\r
                        </div>\r
                        <div class="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-stone-100 dark:bg-gray-800">\r
                            <div\r
                                class="h-full rounded-full transition-all"\r
                                [class.bg-indigo-500]="!isNearAssetLimit()"\r
                                [class.bg-amber-500]="isNearAssetLimit()"\r
                                [style.width.%]="assetUsagePercent()"\r
                            ></div>\r
                        </div>\r
                        <span\r
                            role="link"\r
                            tabindex="0"\r
                            class="mt-2 inline-flex items-center gap-1 text-xs font-medium text-indigo-600 hover:underline dark:text-indigo-300"\r
                            (click)="openPlans($event)"\r
                            (keydown.enter)="openPlans($event)"\r
                        >\r
                            <mat-icon class="icon-size-4 text-current">credit_card</mat-icon>\r
                            {{ (isNearAssetLimit() ? 'smartFleet.dashboard.expandPlan' : 'smartFleet.dashboard.managePlan') | transloco }}\r
                        </span>\r
                    </a>\r
\r
                    <a\r
                        routerLink="/smart-fleet/alerts"\r
                        class="rounded-2xl border border-stone-200/90 bg-white p-5 shadow-sm transition-all hover:border-red-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-red-800"\r
                    >\r
                        <div class="flex items-center gap-3">\r
                            <div\r
                                class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-100 dark:bg-red-900/30"\r
                            >\r
                                <mat-icon class="icon-size-5 text-red-600 dark:text-red-400"\r
                                    >notifications_active</mat-icon\r
                                >\r
                            </div>\r
                            <div class="min-w-0">\r
                                <span\r
                                    class="block text-xs font-medium uppercase text-stone-500 dark:text-stone-400"\r
                                    >{{ 'smartFleet.dashboard.openAlerts' | transloco }}</span\r
                                >\r
                                <span class="text-xl font-bold text-stone-900 dark:text-white">{{\r
                                    data.alerts.openTotal\r
                                }}</span>\r
                            </div>\r
                        </div>\r
                        <div class="mt-3 flex flex-wrap gap-1.5">\r
                            <span\r
                                *ngIf="data.alerts.severity.open.critical"\r
                                class="rounded-full px-2 py-0.5 text-xs font-semibold"\r
                                [ngClass]="severityClasses('critical')"\r
                                >{{ data.alerts.severity.open.critical }}\r
                                {{ 'smartFleet.severity.critical' | transloco }}</span\r
                            >\r
                            <span\r
                                *ngIf="data.alerts.severity.open.warning"\r
                                class="rounded-full px-2 py-0.5 text-xs font-semibold"\r
                                [ngClass]="severityClasses('warning')"\r
                                >{{ data.alerts.severity.open.warning }}\r
                                {{ 'smartFleet.severity.warning' | transloco }}</span\r
                            >\r
                            <span\r
                                *ngIf="data.alerts.severity.open.info"\r
                                class="rounded-full px-2 py-0.5 text-xs font-semibold"\r
                                [ngClass]="severityClasses('info')"\r
                                >{{ data.alerts.severity.open.info }}\r
                                {{ 'smartFleet.severity.info' | transloco }}</span\r
                            >\r
                        </div>\r
                    </a>\r
\r
                    <a\r
                        routerLink="/smart-fleet/watch-rules"\r
                        class="rounded-2xl border border-stone-200/90 bg-white p-5 shadow-sm transition-all hover:border-purple-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-purple-800"\r
                    >\r
                        <div class="flex items-center gap-3">\r
                            <div\r
                                class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900/30"\r
                            >\r
                                <mat-icon class="icon-size-5 text-purple-600 dark:text-purple-400"\r
                                    >rule</mat-icon\r
                                >\r
                            </div>\r
                            <div class="min-w-0">\r
                                <span\r
                                    class="block text-xs font-medium uppercase text-stone-500 dark:text-stone-400"\r
                                    >{{ 'smartFleet.dashboard.activeRules' | transloco }}</span\r
                                >\r
                                <span class="text-xl font-bold text-stone-900 dark:text-white">{{\r
                                    data.rules.active\r
                                }}</span>\r
                            </div>\r
                        </div>\r
                        <p class="mt-3 text-xs text-stone-500 dark:text-stone-400">\r
                            {{\r
                                'smartFleet.dashboard.projectedMonthly'\r
                                    | transloco: { credits: projected()?.totalCredits }\r
                            }}\r
                        </p>\r
                    </a>\r
\r
                    <div\r
                        class="rounded-2xl border border-stone-200/90 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900"\r
                    >\r
                        <div class="flex items-center gap-3">\r
                            <div\r
                                class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-900/30"\r
                            >\r
                                <mat-icon class="icon-size-5 text-emerald-600 dark:text-emerald-400"\r
                                    >savings</mat-icon\r
                                >\r
                            </div>\r
                            <div class="min-w-0">\r
                                <span\r
                                    class="block text-xs font-medium uppercase text-stone-500 dark:text-stone-400"\r
                                    >{{ 'smartFleet.dashboard.creditBalance' | transloco }}</span\r
                                >\r
                                <span class="text-xl font-bold text-stone-900 dark:text-white">{{\r
                                    runway()?.balance\r
                                }}</span>\r
                            </div>\r
                        </div>\r
                        <p class="mt-3 text-xs text-stone-500 dark:text-stone-400">\r
                            <ng-container *ngIf="runway()?.daysOfRunway !== null; else noBurn">\r
                                {{\r
                                    'smartFleet.dashboard.runwayDays'\r
                                        | transloco: { days: runway()?.daysOfRunway }\r
                                }}\r
                            </ng-container>\r
                            <ng-template #noBurn>{{\r
                                'smartFleet.dashboard.noMonitoringYet' | transloco\r
                            }}</ng-template>\r
                        </p>\r
                    </div>\r
                    </div>\r
                </section>\r
\r
                <!-- Expiring soon -->\r
                <div\r
                    id="fleet-expiring"\r
                    class="scroll-mt-6 rounded-2xl border border-stone-200/90 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900"\r
                >\r
                    <div\r
                        class="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200/90 px-5 py-4 dark:border-gray-800"\r
                    >\r
                        <h2 class="text-base font-semibold text-stone-900 dark:text-white">\r
                            {{ 'smartFleet.dashboard.expiringSoon' | transloco }}\r
                        </h2>\r
                        <div class="flex gap-1">\r
                            <button\r
                                *ngFor="let option of [30, 60, 90]"\r
                                type="button"\r
                                (click)="setHorizon(option)"\r
                                class="rounded-lg px-3 py-1 text-xs font-medium transition-colors"\r
                                [class.bg-stone-900]="horizonDays() === option"\r
                                [class.text-white]="horizonDays() === option"\r
                                [class.text-stone-600]="horizonDays() !== option"\r
                                [class.hover:bg-stone-100]="horizonDays() !== option"\r
                            >\r
                                {{ 'smartFleet.dashboard.horizonDays' | transloco: { days: option } }}\r
                            </button>\r
                        </div>\r
                    </div>\r
\r
                    <p\r
                        class="px-5 py-8 text-center text-sm text-stone-500 dark:text-stone-400"\r
                        *ngIf="!expiring().length"\r
                    >\r
                        {{ 'smartFleet.dashboard.nothingExpiring' | transloco }}\r
                    </p>\r
\r
                    <div class="divide-y divide-stone-200/90 dark:divide-gray-800" *ngIf="expiring().length">\r
                        <a\r
                            *ngFor="let entry of expiring()"\r
                            [routerLink]="['/smart-fleet/assets', entry.asset]"\r
                            class="flex flex-wrap items-center gap-3 px-5 py-3 transition-colors hover:bg-stone-50 dark:hover:bg-gray-800/50"\r
                        >\r
                            <span\r
                                class="rounded-lg bg-stone-100 px-2 py-1 font-mono text-sm font-semibold text-stone-800 dark:bg-gray-800 dark:text-stone-200"\r
                                >{{ entry.plate || '\u2014' }}</span\r
                            >\r
                            <span class="text-sm text-stone-600 dark:text-stone-300">{{\r
                                entry.nickname || entry.group || ''\r
                            }}</span>\r
                            <span\r
                                class="rounded-full bg-stone-100 px-2 py-0.5 text-xs font-medium uppercase text-stone-600 dark:bg-gray-800 dark:text-stone-300"\r
                                >{{ 'smartFleet.checkType.' + entry.checkType | transloco }}</span\r
                            >\r
                            <span class="ml-auto text-xs text-stone-500 dark:text-stone-400">{{\r
                                formatDate(entry.expiresAt)\r
                            }}</span>\r
                            <span\r
                                class="rounded-full px-2 py-0.5 text-xs font-semibold"\r
                                [ngClass]="expiryClasses(entry.daysRemaining)"\r
                            >\r
                                <ng-container *ngIf="entry.daysRemaining >= 0; else expiredLabel">{{\r
                                    'smartFleet.dashboard.inDays'\r
                                        | transloco: { days: entry.daysRemaining }\r
                                }}</ng-container>\r
                                <ng-template #expiredLabel>{{\r
                                    'smartFleet.dashboard.expired' | transloco\r
                                }}</ng-template>\r
                            </span>\r
                        </a>\r
                    </div>\r
                </div>\r
\r
                <!-- Spend -->\r
                <div class="grid gap-4 md:grid-cols-2">\r
                    <div\r
                        class="rounded-2xl border border-stone-200/90 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900"\r
                    >\r
                        <h2 class="text-base font-semibold text-stone-900 dark:text-white">\r
                            {{\r
                                'smartFleet.dashboard.spendTitle'\r
                                    | transloco: { days: spend()?.windowDays }\r
                            }}\r
                        </h2>\r
                        <p class="mt-1 text-2xl font-bold text-stone-900 dark:text-white">\r
                            {{ spend()?.totalCredits }}\r
                            <span class="text-sm font-normal text-stone-500"\r
                                >{{ 'smartFleet.dashboard.creditsAcross' | transloco: { checks: spend()?.totalChecks } }}</span\r
                            >\r
                        </p>\r
                        <div class="mt-4 flex flex-col gap-2">\r
                            <div\r
                                *ngFor="let row of spend()?.byCheckType"\r
                                class="flex items-center justify-between text-sm"\r
                            >\r
                                <span class="text-stone-600 dark:text-stone-300">{{\r
                                    'smartFleet.checkType.' + row.checkType | transloco\r
                                }}</span>\r
                                <span class="font-medium text-stone-900 dark:text-white"\r
                                    >{{ row.credits }} ({{ row.checks }})</span\r
                                >\r
                            </div>\r
                            <p\r
                                class="text-sm text-stone-500 dark:text-stone-400"\r
                                *ngIf="!spend()?.byCheckType?.length"\r
                            >\r
                                {{ 'smartFleet.dashboard.noSpendYet' | transloco }}\r
                            </p>\r
                        </div>\r
                    </div>\r
\r
                    <div\r
                        class="rounded-2xl border border-stone-200/90 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900"\r
                    >\r
                        <h2 class="text-base font-semibold text-stone-900 dark:text-white">\r
                            {{ 'smartFleet.dashboard.planTitle' | transloco }}\r
                        </h2>\r
                        <ng-container *ngIf="plan() as planData; else noPlan">\r
                            <p class="mt-2 text-sm text-stone-600 dark:text-stone-300">\r
                                {{\r
                                    'smartFleet.dashboard.planSummary'\r
                                        | transloco\r
                                            : {\r
                                                  status: planData.status,\r
                                                  limit: planData.assetLimit,\r
                                                  billed: planData.billedQuantity\r
                                              }\r
                                }}\r
                            </p>\r
                            <p class="mt-1 text-xs text-stone-500 dark:text-stone-400">\r
                                {{ 'smartFleet.dashboard.renewsOn' | transloco }}\r
                                {{ formatDate(planData.endDate) }}\r
                            </p>\r
                        </ng-container>\r
                        <ng-template #noPlan>\r
                            <p class="mt-2 text-sm text-stone-600 dark:text-stone-300">\r
                                {{\r
                                    'smartFleet.dashboard.freeTier'\r
                                        | transloco: { limit: assets()?.limit }\r
                                }}\r
                            </p>\r
                            <a\r
                                routerLink="/subscription-plans"\r
                                class="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-indigo-600 underline underline-offset-4 dark:text-indigo-400"\r
                            >\r
                                {{ 'smartFleet.dashboard.upgrade' | transloco }}\r
                            </a>\r
                        </ng-template>\r
                    </div>\r
                </div>\r
            </ng-container>\r
        </div>\r
    </main>\r
</div>\r
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FleetDashboardComponent, { className: "FleetDashboardComponent", filePath: "src/app/modules/smart-fleet/dashboard/fleet-dashboard.component.ts", lineNumber: 30 });
})();

// src/app/modules/smart-fleet/smart-fleet.routes.ts
var smart_fleet_routes_default = [
  {
    path: "",
    component: FleetDashboardComponent
  },
  {
    path: "assets",
    loadComponent: () => import("./chunk-NHZJWBV7.js").then((m) => m.FleetAssetsComponent)
  },
  {
    path: "assets/:id",
    loadComponent: () => import("./chunk-INC6VWGY.js").then((m) => m.FleetAssetDetailComponent)
  },
  {
    path: "watch-rules",
    loadComponent: () => import("./chunk-R6WALNHJ.js").then((m) => m.FleetWatchRulesComponent)
  },
  {
    path: "alerts",
    loadComponent: () => import("./chunk-3M7O3KZD.js").then((m) => m.FleetAlertsComponent)
  },
  {
    path: "plans",
    loadComponent: () => import("./chunk-2SUUB76Y.js").then((m) => m.FleetPlansComponent)
  }
];
export {
  smart_fleet_routes_default as default
};
//# sourceMappingURL=chunk-LWS4UVT4.js.map
