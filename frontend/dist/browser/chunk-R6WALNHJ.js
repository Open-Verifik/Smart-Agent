import {
  FleetVehicleIconComponent
} from "./chunk-VGVWIWMT.js";
import {
  FleetChannelIconComponent,
  fleetChannelTone
} from "./chunk-B4UFJXDE.js";
import {
  FLEET_GROUP_COLOR_DEFAULT,
  FLEET_GROUP_ICON_DEFAULT,
  FleetNavComponent,
  SmartFleetService,
  fleetAssetSupportsCheck,
  normalizeFleetGroup,
  parseFleetPhones
} from "./chunk-GHIW2F4Y.js";
import {
  AuthRequiredGateService
} from "./chunk-QPU67QFB.js";
import {
  FuseConfirmationService
} from "./chunk-KFR5LC4M.js";
import "./chunk-6FS3LBOZ.js";
import {
  MatSnackBar,
  MatSnackBarModule
} from "./chunk-TXEVGTMX.js";
import "./chunk-H3UX3NVF.js";
import {
  MatTooltip,
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
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-DVRFI3SJ.js";
import {
  TranslocoModule,
  TranslocoPipe,
  TranslocoService,
  takeUntilDestroyed
} from "./chunk-R5W3A6HI.js";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-HYFP557I.js";
import "./chunk-PMCYMBOC.js";
import {
  CommonModule,
  Component,
  DatePipe,
  DestroyRef,
  Input,
  NgClass,
  NgForOf,
  NgIf,
  ViewEncapsulation,
  catchError,
  computed,
  firstValueFrom,
  forkJoin,
  inject,
  map,
  of,
  setClassMetadata,
  signal,
  switchMap,
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
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵreference,
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
  ɵɵtextInterpolate3
} from "./chunk-PNPEHISK.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-F5M2C4EZ.js";

// src/app/modules/smart-fleet/watch-rules/fleet-asset-rules-board.component.ts
var _c0 = () => ({ scope: "fleet" });
var _c1 = (a0) => ({ plate: a0 });
var _c2 = (a0) => ({ group: a0 });
var _c3 = (a0) => ({ asset: a0 });
var _c4 = (a0) => ({ name: a0 });
var _c5 = (a0) => ({ count: a0 });
var _c6 = (a0, a1, a2) => ({ "bg-emerald-50 text-emerald-900": a0, "bg-amber-50 text-amber-900": a1, "bg-red-50 text-red-900": a2 });
function FleetAssetRulesBoardComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, "smartFleet.rules.boardTitle", \u0275\u0275pureFunction1(4, _c1, ctx_r0.plateLabel())));
  }
}
function FleetAssetRulesBoardComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, "smartFleet.rules.boardGroupTitle", \u0275\u0275pureFunction1(4, _c2, ctx_r0.groupName)));
  }
}
function FleetAssetRulesBoardComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "smartFleet.rules.boardFleetTitle"));
  }
}
function FleetAssetRulesBoardComponent_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "smartFleet.rules.boardLibraryTitle"));
  }
}
function FleetAssetRulesBoardComponent_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "smartFleet.rules.boardSubtitle"));
  }
}
function FleetAssetRulesBoardComponent_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "smartFleet.rules.boardGroupSubtitle"));
  }
}
function FleetAssetRulesBoardComponent_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "smartFleet.rules.boardFleetSubtitle"));
  }
}
function FleetAssetRulesBoardComponent_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "smartFleet.rules.boardLibrarySubtitle"));
  }
}
function FleetAssetRulesBoardComponent_a_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 8);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("bg-stone-900", ctx_r0.mode() === "asset")("text-white", ctx_r0.mode() === "asset")("text-stone-600", ctx_r0.mode() !== "asset");
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction1(10, _c3, ctx_r0.assetId));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 8, "smartFleet.rules.scopeAsset"), " ");
  }
}
function FleetAssetRulesBoardComponent_a_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 8);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const name_r2 = ctx.ngIf;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("bg-stone-900", ctx_r0.mode() === "group")("text-white", ctx_r0.mode() === "group")("text-stone-600", ctx_r0.mode() !== "group");
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction1(11, _c2, name_r2));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 8, "smartFleet.rules.scopeGroupNamed", \u0275\u0275pureFunction1(13, _c4, name_r2)), " ");
  }
}
function FleetAssetRulesBoardComponent_mat_spinner_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 15);
  }
}
function FleetAssetRulesBoardComponent_div_23_p_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 20);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "smartFleet.rules.coversEmpty"), " ");
  }
}
function FleetAssetRulesBoardComponent_div_23_div_5_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const vehicle_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(vehicle_r3.plate || vehicle_r3.vin);
  }
}
function FleetAssetRulesBoardComponent_div_23_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275template(1, FleetAssetRulesBoardComponent_div_23_div_5_span_1_Template, 2, 1, "span", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.covered());
  }
}
function FleetAssetRulesBoardComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "p", 17);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, FleetAssetRulesBoardComponent_div_23_p_4_Template, 3, 3, "p", 18)(5, FleetAssetRulesBoardComponent_div_23_div_5_Template, 2, 1, "div", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 3, "smartFleet.rules.coversTitle", \u0275\u0275pureFunction1(6, _c5, ctx_r0.covered().length)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r0.covered().length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.covered().length);
  }
}
function FleetAssetRulesBoardComponent_div_24_li_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 29);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rule_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(2, 2, "smartFleet.checkType." + rule_r4.checkType), " \xB7 ", \u0275\u0275pipeBind1(3, 4, "smartFleet.frequency." + (rule_r4.frequency || "weekly")), " ");
  }
}
function FleetAssetRulesBoardComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "p", 25);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 26);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "ul", 27);
    \u0275\u0275template(8, FleetAssetRulesBoardComponent_div_24_li_8_Template, 4, 6, "li", 28);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 3, "smartFleet.rules.inheritedTitle", \u0275\u0275pureFunction1(8, _c2, (tmp_1_0 = ctx_r0.asset()) == null ? null : tmp_1_0.group)), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 6, "smartFleet.rules.inheritedHint"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r0.inherited());
  }
}
function FleetAssetRulesBoardComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275element(1, "mat-spinner", 31);
    \u0275\u0275elementEnd();
  }
}
function FleetAssetRulesBoardComponent_div_26_p_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 44);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "smartFleet.rules.allAdded"), " ");
  }
}
function FleetAssetRulesBoardComponent_div_26_button_10_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 50);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const check_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.blockedReason(check_r6));
  }
}
function FleetAssetRulesBoardComponent_div_26_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 45);
    \u0275\u0275listener("click", function FleetAssetRulesBoardComponent_div_26_button_10_Template_button_click_0_listener() {
      const check_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.addCheck(check_r6));
    });
    \u0275\u0275elementStart(1, "span", 2)(2, "span", 46);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 47);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, FleetAssetRulesBoardComponent_div_26_button_10_span_7_Template, 2, 1, "span", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 49);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const check_r6 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", !ctx_r0.isReady(check_r6));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 9, "smartFleet.checkType." + check_r6.checkType));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.endpointLabel(check_r6));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isReady(check_r6));
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-indigo-600", ctx_r0.isReady(check_r6))("bg-stone-300", !ctx_r0.isReady(check_r6));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 11, "smartFleet.rules.addCheck"));
  }
}
function FleetAssetRulesBoardComponent_div_26_label_18_option_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 54);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const vehicle_r8 = ctx.$implicit;
    \u0275\u0275property("value", vehicle_r8._id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", vehicle_r8.plate || vehicle_r8.vin, " ");
  }
}
function FleetAssetRulesBoardComponent_div_26_label_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 51)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "select", 52);
    \u0275\u0275listener("ngModelChange", function FleetAssetRulesBoardComponent_div_26_label_18_Template_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.testAssetId.set($event));
    });
    \u0275\u0275template(5, FleetAssetRulesBoardComponent_div_26_label_18_option_5_Template, 2, 2, "option", 53);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "smartFleet.rules.testOn"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r0.testAssetId());
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.testPool());
  }
}
function FleetAssetRulesBoardComponent_div_26_p_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 55);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "smartFleet.rules.testNeedVehicle"), " ");
  }
}
function FleetAssetRulesBoardComponent_div_26_p_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 56);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "smartFleet.rules.emptyMonitored"), " ");
  }
}
function FleetAssetRulesBoardComponent_div_26_article_22_label_12_option_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 54);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const vehicle_r12 = ctx.$implicit;
    \u0275\u0275property("value", vehicle_r12._id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", vehicle_r12.plate || vehicle_r12.vin, " ");
  }
}
function FleetAssetRulesBoardComponent_div_26_article_22_label_12_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 78);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "smartFleet.rules.assignEmpty"));
  }
}
function FleetAssetRulesBoardComponent_div_26_article_22_label_12_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 78);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "smartFleet.rules.assignVehicleHint"));
  }
}
function FleetAssetRulesBoardComponent_div_26_article_22_label_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 73)(1, "span", 74);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "select", 75);
    \u0275\u0275listener("ngModelChange", function FleetAssetRulesBoardComponent_div_26_article_22_label_12_Template_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r11);
      const card_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.setAssignAsset(card_r10, $event));
    });
    \u0275\u0275elementStart(5, "option", 76);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, FleetAssetRulesBoardComponent_div_26_article_22_label_12_option_8_Template, 2, 2, "option", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, FleetAssetRulesBoardComponent_div_26_article_22_label_12_span_9_Template, 3, 3, "span", 77)(10, FleetAssetRulesBoardComponent_div_26_article_22_label_12_span_10_Template, 3, 3, "span", 77);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const card_r10 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 6, "smartFleet.rules.assignVehicle"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", card_r10.assignAssetId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 8, "smartFleet.rules.assignNone"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.vehiclesFor(card_r10.check));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.vehiclesFor(card_r10.check).length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.vehiclesFor(card_r10.check).length);
  }
}
function FleetAssetRulesBoardComponent_div_26_article_22_button_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 79);
    \u0275\u0275listener("click", function FleetAssetRulesBoardComponent_div_26_article_22_button_17_Template_button_click_0_listener() {
      const frequency_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const card_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.setFrequency(card_r10, frequency_r14));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const frequency_r14 = ctx.$implicit;
    const card_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classProp("bg-stone-900", card_r10.frequency === frequency_r14)("text-white", card_r10.frequency === frequency_r14)("text-stone-600", card_r10.frequency !== frequency_r14)("hover:bg-stone-100", card_r10.frequency !== frequency_r14);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 9, "smartFleet.frequency." + frequency_r14), " ");
  }
}
function FleetAssetRulesBoardComponent_div_26_article_22_label_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 27)(1, "span", 78);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 80);
    \u0275\u0275listener("ngModelChange", function FleetAssetRulesBoardComponent_div_26_article_22_label_18_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r15);
      const card_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.setIntervalDays(card_r10, $event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const card_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "smartFleet.rules.intervalDaysLabel"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", card_r10.intervalDays);
  }
}
function FleetAssetRulesBoardComponent_div_26_article_22_label_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 27)(1, "span", 78);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 81);
    \u0275\u0275listener("ngModelChange", function FleetAssetRulesBoardComponent_div_26_article_22_label_19_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r16);
      const card_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.setThresholdDays(card_r10, $event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const card_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "smartFleet.rules.thresholdDays"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", card_r10.thresholdDays);
  }
}
function FleetAssetRulesBoardComponent_div_26_article_22_button_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 82);
    \u0275\u0275listener("click", function FleetAssetRulesBoardComponent_div_26_article_22_button_24_Template_button_click_0_listener() {
      const channel_r18 = \u0275\u0275restoreView(_r17).$implicit;
      const card_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleChannel(card_r10, channel_r18));
    });
    \u0275\u0275elementStart(1, "span", 83);
    \u0275\u0275element(2, "fleet-channel-icon", 84);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const channel_r18 = ctx.$implicit;
    const card_r10 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("border-indigo-600", card_r10.channels.includes(channel_r18))("bg-indigo-600", card_r10.channels.includes(channel_r18))("text-white", card_r10.channels.includes(channel_r18))("border-stone-200", !card_r10.channels.includes(channel_r18))("bg-white", !card_r10.channels.includes(channel_r18))("text-stone-800", !card_r10.channels.includes(channel_r18))("dark:border-gray-700", !card_r10.channels.includes(channel_r18))("dark:bg-gray-900", !card_r10.channels.includes(channel_r18))("dark:text-stone-100", !card_r10.channels.includes(channel_r18));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.channelTone(channel_r18, card_r10.channels.includes(channel_r18)));
    \u0275\u0275advance();
    \u0275\u0275property("channel", channel_r18);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 21, "smartFleet.channel." + channel_r18), " ");
  }
}
function FleetAssetRulesBoardComponent_div_26_article_22_label_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 27)(1, "span", 78);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 85);
    \u0275\u0275listener("ngModelChange", function FleetAssetRulesBoardComponent_div_26_article_22_label_25_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r19);
      const card_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.setEmail(card_r10, $event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const card_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "smartFleet.rules.emailRecipients"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", card_r10.emailRecipients);
  }
}
function FleetAssetRulesBoardComponent_div_26_article_22_label_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 27)(1, "span", 78);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 86);
    \u0275\u0275listener("ngModelChange", function FleetAssetRulesBoardComponent_div_26_article_22_label_26_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r20);
      const card_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.setSms(card_r10, $event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const card_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "smartFleet.rules.smsRecipients"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", card_r10.smsRecipients);
  }
}
function FleetAssetRulesBoardComponent_div_26_article_22_label_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 27)(1, "span", 78);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 86);
    \u0275\u0275listener("ngModelChange", function FleetAssetRulesBoardComponent_div_26_article_22_label_27_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r21);
      const card_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.setWhatsapp(card_r10, $event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const card_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "smartFleet.rules.whatsappRecipients"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", card_r10.whatsappRecipients);
  }
}
function FleetAssetRulesBoardComponent_div_26_article_22_label_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 27)(1, "span", 78);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 87);
    \u0275\u0275listener("ngModelChange", function FleetAssetRulesBoardComponent_div_26_article_22_label_28_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r22);
      const card_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.setWebhook(card_r10, $event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const card_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "smartFleet.rules.webhookUrl"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", card_r10.webhookUrl);
  }
}
function FleetAssetRulesBoardComponent_div_26_article_22_mat_spinner_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 88);
  }
}
function FleetAssetRulesBoardComponent_div_26_article_22_div_35_ul_3_li_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "span", 93);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r23 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", row_r23.label, ":");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r23.value, " ");
  }
}
function FleetAssetRulesBoardComponent_div_26_article_22_div_35_ul_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 91);
    \u0275\u0275template(1, FleetAssetRulesBoardComponent_div_26_article_22_div_35_ul_3_li_1_Template, 4, 2, "li", 92);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.testResult().rows);
  }
}
function FleetAssetRulesBoardComponent_div_26_article_22_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 89)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, FleetAssetRulesBoardComponent_div_26_article_22_div_35_ul_3_Template, 2, 1, "ul", 90);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(3, _c6, ctx_r0.testResult().tone === "ok", ctx_r0.testResult().tone === "warn", ctx_r0.testResult().tone === "error"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.testResult().message);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.testResult().rows.length);
  }
}
function FleetAssetRulesBoardComponent_div_26_article_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 57)(1, "div", 58)(2, "div", 2)(3, "p", 34);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 59);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 60);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275listener("click", function FleetAssetRulesBoardComponent_div_26_article_22_Template_button_click_8_listener() {
      const card_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.removeCard(card_r10));
    });
    \u0275\u0275elementStart(10, "mat-icon", 61);
    \u0275\u0275text(11, "delete");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(12, FleetAssetRulesBoardComponent_div_26_article_22_label_12_Template, 11, 10, "label", 62);
    \u0275\u0275elementStart(13, "p", 63);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 64);
    \u0275\u0275template(17, FleetAssetRulesBoardComponent_div_26_article_22_button_17_Template, 3, 11, "button", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, FleetAssetRulesBoardComponent_div_26_article_22_label_18_Template, 5, 4, "label", 66)(19, FleetAssetRulesBoardComponent_div_26_article_22_label_19_Template, 5, 4, "label", 66);
    \u0275\u0275elementStart(20, "p", 63);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 67);
    \u0275\u0275template(24, FleetAssetRulesBoardComponent_div_26_article_22_button_24_Template, 5, 23, "button", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275template(25, FleetAssetRulesBoardComponent_div_26_article_22_label_25_Template, 5, 4, "label", 66)(26, FleetAssetRulesBoardComponent_div_26_article_22_label_26_Template, 5, 4, "label", 66)(27, FleetAssetRulesBoardComponent_div_26_article_22_label_27_Template, 5, 4, "label", 66)(28, FleetAssetRulesBoardComponent_div_26_article_22_label_28_Template, 5, 4, "label", 66);
    \u0275\u0275elementStart(29, "div", 69)(30, "button", 70);
    \u0275\u0275pipe(31, "transloco");
    \u0275\u0275listener("click", function FleetAssetRulesBoardComponent_div_26_article_22_Template_button_click_30_listener() {
      const card_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.test(card_r10));
    });
    \u0275\u0275template(32, FleetAssetRulesBoardComponent_div_26_article_22_mat_spinner_32_Template, 1, 0, "mat-spinner", 71);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(35, FleetAssetRulesBoardComponent_div_26_article_22_div_35_Template, 4, 7, "div", 72);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_21_0;
    const card_r10 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 19, "smartFleet.checkType." + card_r10.check.checkType), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.endpointLabel(card_r10.check), " ");
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(9, 21, "smartFleet.rules.removeEndpoint"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r0.mode() === "library");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 23, "smartFleet.rules.period"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r0.frequencies);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", card_r10.frequency === "custom");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", card_r10.check.kind === "threshold");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 25, "smartFleet.rules.notifyVia"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r0.channelOptions);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", card_r10.channels.includes("email"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", card_r10.channels.includes("sms"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", card_r10.channels.includes("whatsapp"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", card_r10.channels.includes("webhook"));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r0.canTest(card_r10))("matTooltip", \u0275\u0275pipeBind1(31, 27, "smartFleet.rules.testHint"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.testingCheck() === card_r10.check.checkType);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(34, 29, "smartFleet.rules.test"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ((tmp_21_0 = ctx_r0.testResult()) == null ? null : tmp_21_0.checkType) === card_r10.check.checkType);
  }
}
function FleetAssetRulesBoardComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "section", 33)(2, "h3", 34);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 26);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, FleetAssetRulesBoardComponent_div_26_p_8_Template, 3, 3, "p", 35);
    \u0275\u0275elementStart(9, "div", 36);
    \u0275\u0275template(10, FleetAssetRulesBoardComponent_div_26_button_10_Template, 11, 13, "button", 37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "section", 38)(12, "h3", 34);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p", 26);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, FleetAssetRulesBoardComponent_div_26_label_18_Template, 6, 5, "label", 39)(19, FleetAssetRulesBoardComponent_div_26_p_19_Template, 3, 3, "p", 40);
    \u0275\u0275elementStart(20, "div", 41);
    \u0275\u0275template(21, FleetAssetRulesBoardComponent_div_26_p_21_Template, 3, 3, "p", 42)(22, FleetAssetRulesBoardComponent_div_26_article_22_Template, 36, 31, "article", 43);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 10, "smartFleet.rules.availableTitle"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 12, "smartFleet.rules.dragHint"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r0.available().length);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.available());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 14, "smartFleet.rules.monitoredTitle"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 16, "smartFleet.rules.dropHint"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.mode() !== "asset" && ctx_r0.testPool().length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.mode() !== "asset" && !ctx_r0.testPool().length);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r0.monitored().length);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.monitored());
  }
}
var FleetAssetRulesBoardComponent = class _FleetAssetRulesBoardComponent {
  constructor() {
    this._fleetService = inject(SmartFleetService);
    this._transloco = inject(TranslocoService);
    this._snackBar = inject(MatSnackBar);
    this._assetId = "";
    this._groupName = "";
    this.library = false;
    this.asset = signal(null);
    this.covered = signal([]);
    this.testPool = signal([]);
    this.testAssetId = signal("");
    this.testingCheck = signal(null);
    this.testResult = signal(null);
    this.inherited = signal([]);
    this.checks = signal([]);
    this.monitored = signal([]);
    this.pendingDelete = signal([]);
    this.isLoading = signal(true);
    this.isSaving = signal(false);
    this.frequencies = ["daily", "weekly", "biweekly", "monthly", "custom"];
    this.channelOptions = ["email", "webhook", "inApp", "sms", "whatsapp"];
    this.available = computed(() => {
      const used = new Set(this.monitored().map((card) => card.check.checkType));
      return this.checks().filter((check) => !used.has(check.checkType));
    });
    this.canSave = computed(() => {
      if (this.isSaving() || this.isLoading())
        return false;
      if (!this.monitored().length && !this.pendingDelete().length)
        return false;
      return this.monitored().every((card) => this._cardIsValid(card));
    });
  }
  set assetId(value) {
    if (!value || value === this._assetId)
      return;
    this._assetId = value;
    this._load();
  }
  get assetId() {
    return this._assetId;
  }
  set groupName(value) {
    if (!value || value === this._groupName)
      return;
    this._groupName = value;
    this._load();
  }
  get groupName() {
    return this._groupName;
  }
  ngOnInit() {
    if (!this._assetId && !this._groupName)
      this._load();
  }
  channelTone(channel, selected) {
    return selected ? "bg-white/20 text-white" : fleetChannelTone(channel);
  }
  mode() {
    if (this.library)
      return "library";
    if (this.assetId)
      return "asset";
    if (this.groupName)
      return "group";
    return "fleet";
  }
  linkedGroup() {
    if (this.groupName)
      return this.groupName;
    return this.asset()?.group || null;
  }
  plateLabel() {
    const asset = this.asset();
    return asset?.plate || asset?.vin || "\u2014";
  }
  endpointLabel(check) {
    const path = this._pathForAsset(check);
    if (path?.url)
      return `${(path.method || "GET").toUpperCase()} ${path.url}`;
    if (check.url)
      return `${(check.method || "GET").toUpperCase()} ${check.url}`;
    return check.featureCode;
  }
  vehiclesFor(check) {
    return this.testPool().filter((asset) => fleetAssetSupportsCheck(check, asset));
  }
  setAssignAsset(card, assetId) {
    this._patch(card, { assignAssetId: assetId || "" });
  }
  blockedReason(check) {
    const asset = this.asset();
    const plateOnly = Boolean(asset?.plate?.trim()) && !asset?.ownerDocumentNumber?.trim() && !asset?.vin?.trim();
    const needsDocument = (check.requiresByPlate || check.endpoints?.byPlate?.requires || []).includes("ownerDocumentNumber");
    if (plateOnly && needsDocument) {
      return this._transloco.translate("smartFleet.rules.notReadyPlateOnly");
    }
    return this._transloco.translate("smartFleet.rules.notReady");
  }
  isReady(check) {
    if (!this.assetId)
      return true;
    const asset = this.asset();
    if (!asset)
      return false;
    return fleetAssetSupportsCheck(check, asset);
  }
  addCheck(check) {
    if (!check?.checkType || !this.isReady(check))
      return;
    if (this.monitored().some((card) => card.check.checkType === check.checkType))
      return;
    this.monitored.update((cards) => [...cards, this._cardFromCheck(check)]);
  }
  removeCard(card) {
    if (card.ruleId) {
      this.pendingDelete.update((ids) => ids.includes(card.ruleId) ? ids : [...ids, card.ruleId]);
    }
    this.monitored.update((cards) => cards.filter((entry) => entry !== card));
  }
  setFrequency(card, frequency) {
    this._patch(card, { frequency });
  }
  setIntervalDays(card, value) {
    this._patch(card, { intervalDays: Number(value) });
  }
  setThresholdDays(card, value) {
    this._patch(card, { thresholdDays: Number(value) });
  }
  toggleChannel(card, channel) {
    const channels = card.channels.includes(channel) ? card.channels.filter((entry) => entry !== channel) : [...card.channels, channel];
    this._patch(card, { channels });
  }
  setEmail(card, value) {
    this._patch(card, { emailRecipients: value });
  }
  setWebhook(card, value) {
    this._patch(card, { webhookUrl: value });
  }
  setSms(card, value) {
    this._patch(card, { smsRecipients: value });
  }
  setWhatsapp(card, value) {
    this._patch(card, { whatsappRecipients: value });
  }
  canTest(card) {
    return this._cardIsValid(card) && !this.testingCheck() && !this.isSaving() && Boolean(this._testVehicle()?._id);
  }
  /**
   * Persist this card, then run the vehicle's checks now. The server only executes
   * saved rules, so the test writes this one before calling check-now.
   */
  test(card) {
    const vehicle = this._testVehicle();
    if (!vehicle?._id || !this.canTest(card))
      return;
    if (!fleetAssetSupportsCheck(card.check, vehicle)) {
      this.testResult.set({
        checkType: card.check.checkType,
        tone: "warn",
        message: this._transloco.translate("smartFleet.rules.notReadyPlateOnly"),
        rows: []
      });
      return;
    }
    this.testingCheck.set(card.check.checkType);
    this.testResult.set(null);
    const request$ = card.ruleId ? this._fleetService.updateWatchRule(card.ruleId, this._payload(card)) : this._fleetService.createWatchRule(this._payload(card));
    request$.pipe(switchMap((saved) => {
      const id = saved.data?._id;
      if (id && card.ruleId !== id) {
        card.ruleId = id;
        this.monitored.update((cards) => [...cards]);
      }
      return this._fleetService.checkAssetNow(vehicle._id);
    }), switchMap((check) => this._fleetService.getAssetTimeline(vehicle._id, { checkType: card.check.checkType, limit: 1 }).pipe(map((timeline) => ({ check, snapshot: this._firstSnapshot(timeline) })), catchError(() => of({ check, snapshot: null }))))).subscribe({
      next: ({ check, snapshot }) => {
        this.testingCheck.set(null);
        this._presentTest(card, vehicle, check.data, snapshot);
      },
      error: (err) => {
        this.testingCheck.set(null);
        console.error("[SmartFleet] test rule error", err);
        this.testResult.set({
          checkType: card.check.checkType,
          tone: "error",
          message: this._testErrorMessage(err),
          rows: []
        });
      }
    });
  }
  save() {
    if (!this.canSave())
      return;
    const creates = this.monitored().filter((card) => !card.ruleId).map((card) => this._fleetService.createWatchRule(this._payload(card)));
    const updates = this.monitored().filter((card) => card.ruleId).map((card) => this._fleetService.updateWatchRule(card.ruleId, this._payload(card)));
    const deletes = this.pendingDelete().map((id) => this._fleetService.deleteWatchRule(id));
    const requests = [...creates, ...updates, ...deletes];
    if (!requests.length)
      return;
    this.isSaving.set(true);
    forkJoin(requests.length ? requests : [of(null)]).subscribe({
      next: () => {
        this.isSaving.set(false);
        this._snackBar.open(this._transloco.translate("smartFleet.rules.boardSaved"), void 0, {
          duration: 3e3
        });
        this._load();
      },
      error: (err) => {
        this.isSaving.set(false);
        console.error("[SmartFleet] save asset rules error", err);
        this._snackBar.open(this._transloco.translate("smartFleet.rules.boardFailed"), void 0, {
          duration: 5e3
        });
      }
    });
  }
  _load() {
    this.isLoading.set(true);
    const rulesRequest = this.assetId ? this._fleetService.listWatchRules({ asset: this.assetId }) : this.groupName ? this._fleetService.listWatchRules({ group: this.groupName }) : this._fleetService.listWatchRules();
    forkJoin({
      asset: this.assetId ? this._fleetService.getAsset(this.assetId) : of(null),
      checks: this._fleetService.getAvailableChecks("co"),
      rules: rulesRequest,
      fleet: this.mode() === "asset" ? of(null) : this._fleetService.listAssets()
    }).subscribe({
      next: ({ asset, checks, rules, fleet }) => {
        const catalog = checks.data?.checks ?? [];
        const current = asset?.data ?? null;
        this.asset.set(current);
        this.checks.set(catalog);
        this.pendingDelete.set([]);
        this.monitored.set((rules.data ?? []).filter((rule) => this._ruleMatchesScope(rule)).map((rule) => this._cardFromRule(rule, catalog)));
        const pool = this.assetId ? [] : (fleet?.data ?? []).filter((entry) => this.groupName ? entry.group === this.groupName : true);
        this.testPool.set(pool);
        this.covered.set(this.groupName ? pool : []);
        if (!pool.some((entry) => entry._id === this.testAssetId())) {
          this.testAssetId.set(pool[0]?._id ?? "");
        }
        this.inherited.set([]);
        this.isLoading.set(false);
        const inheritedGroup = !this.groupName ? current?.group : null;
        if (inheritedGroup)
          this._loadInherited(inheritedGroup);
      },
      error: (err) => {
        this.isLoading.set(false);
        console.error("[SmartFleet] load asset rules error", err);
        this._snackBar.open(this._transloco.translate("smartFleet.rules.boardFailed"), void 0, {
          duration: 5e3
        });
      }
    });
  }
  _loadInherited(group) {
    this._fleetService.listWatchRules({ group }).subscribe({
      next: (response) => {
        this.inherited.set((response.data ?? []).filter((rule) => {
          const asset = rule.asset;
          const hasAsset = Boolean(asset && (typeof asset === "string" ? asset : asset._id));
          return !hasAsset && rule.group === group;
        }));
      },
      error: (err) => console.error("[SmartFleet] inherited group rules error", err)
    });
  }
  _ruleMatchesScope(rule) {
    if (rule.unassigned)
      return this.library;
    if (this.library)
      return false;
    if (this.assetId)
      return this._ruleBelongsToAsset(rule);
    const asset = rule.asset;
    const hasAsset = Boolean(asset && (typeof asset === "string" ? asset : asset._id));
    if (hasAsset)
      return false;
    if (this.groupName)
      return rule.group === this.groupName;
    return !rule.group;
  }
  _ruleBelongsToAsset(rule) {
    const asset = rule.asset;
    if (!asset)
      return false;
    if (typeof asset === "string")
      return asset === this.assetId;
    return asset._id === this.assetId;
  }
  _cardFromCheck(check) {
    return {
      check,
      frequency: "weekly",
      intervalDays: 7,
      thresholdDays: check.defaultThresholdDays,
      channels: ["inApp"],
      emailRecipients: "",
      webhookUrl: "",
      smsRecipients: "",
      whatsappRecipients: "",
      assignAssetId: ""
    };
  }
  _cardFromRule(rule, catalog) {
    const check = catalog.find((entry) => entry.checkType === rule.checkType) ?? {
      checkType: rule.checkType,
      featureCode: rule.featureCode || rule.checkType,
      kind: rule.kind || "delta",
      defaultThresholdDays: rule.thresholdDays ?? null,
      defaultSeverity: rule.severity || "info"
    };
    return {
      ruleId: rule._id,
      check,
      frequency: rule.frequency || "weekly",
      intervalDays: rule.intervalDays || 7,
      thresholdDays: rule.thresholdDays ?? check.defaultThresholdDays,
      channels: [...rule.channels || ["inApp"]],
      emailRecipients: (rule.emailRecipients || []).join(", "),
      webhookUrl: rule.webhookUrl || "",
      smsRecipients: (rule.smsRecipients || []).join(", "),
      whatsappRecipients: (rule.whatsappRecipients || []).join(", "),
      assignAssetId: ""
    };
  }
  _payload(card) {
    const assignedId = this.mode() === "library" ? card.assignAssetId : "";
    return __spreadProps(__spreadValues({
      checkType: card.check.checkType,
      frequency: card.frequency,
      channels: card.channels,
      asset: this.mode() === "asset" ? this.assetId : assignedId || null,
      group: this.mode() === "group" ? this.groupName : null,
      unassigned: this.mode() === "library" && !assignedId,
      intervalDays: card.frequency === "custom" ? Number(card.intervalDays) : null
    }, card.check.kind === "threshold" && card.thresholdDays !== null ? { thresholdDays: Number(card.thresholdDays) } : {}), {
      emailRecipients: card.channels.includes("email") ? card.emailRecipients.split(",").map((value) => value.trim()).filter(Boolean) : [],
      webhookUrl: card.channels.includes("webhook") ? card.webhookUrl.trim() || null : null,
      smsRecipients: card.channels.includes("sms") ? parseFleetPhones(card.smsRecipients) : [],
      whatsappRecipients: card.channels.includes("whatsapp") ? parseFleetPhones(card.whatsappRecipients) : []
    });
  }
  _testVehicle() {
    if (this.assetId)
      return this.asset();
    return this.testPool().find((entry) => entry._id === this.testAssetId()) ?? null;
  }
  _presentTest(card, vehicle, check, snapshot) {
    const plate = vehicle.plate || vehicle.vin || "\u2014";
    const rows = this._snapshotRows(snapshot);
    const failed = snapshot?.isSuccessful === false;
    const settled = Boolean(check?.settled);
    const recent = check?.reason === "no_due_rules" && rows.length > 0;
    if (failed) {
      this.testResult.set({
        checkType: card.check.checkType,
        tone: "error",
        message: (typeof snapshot?.error === "string" ? snapshot.error : snapshot?.error?.message) || this._transloco.translate("smartFleet.rules.testFailed"),
        rows
      });
      return;
    }
    if (settled || recent) {
      this.testResult.set({
        checkType: card.check.checkType,
        tone: settled ? "ok" : "warn",
        message: this._transloco.translate(settled ? "smartFleet.rules.testOk" : "smartFleet.rules.testRecent", {
          plate
        }),
        rows
      });
      return;
    }
    this.testResult.set({
      checkType: card.check.checkType,
      tone: "warn",
      message: this._skipMessage(check?.reason),
      rows
    });
  }
  _firstSnapshot(timeline) {
    const payload = timeline.data;
    if (Array.isArray(payload))
      return payload[0] ?? null;
    return payload?.snapshots?.[0] ?? null;
  }
  _snapshotRows(snapshot) {
    const normalized = snapshot?.normalized ?? {};
    const rows = [];
    for (const [label, value] of Object.entries(normalized)) {
      if (rows.length >= 5)
        break;
      if (value === null || value === void 0 || value === "")
        continue;
      if (typeof value === "object")
        continue;
      rows.push({ label, value: String(value) });
    }
    return rows;
  }
  _skipMessage(reason) {
    if (!reason)
      return this._transloco.translate("smartFleet.assets.checkQueued");
    const known = [
      "no_active_rules",
      "no_due_rules",
      "insufficient_credits",
      "client_inactive",
      "missing_identifiers"
    ];
    return known.includes(reason) ? this._transloco.translate(`smartFleet.assets.checkSkipped.${reason}`) : reason;
  }
  _testErrorMessage(err) {
    const detail = err?.error;
    const code = detail?.message || detail?.code || "";
    const known = [
      "no_active_rules",
      "no_due_rules",
      "insufficient_credits",
      "client_inactive",
      "missing_identifiers"
    ];
    const key = known.find((entry) => String(code).includes(entry));
    return key ? this._transloco.translate(`smartFleet.assets.checkSkipped.${key}`) : this._transloco.translate("smartFleet.rules.testFailed");
  }
  _cardIsValid(card) {
    if (!card.channels.length)
      return false;
    if (card.frequency === "custom") {
      const days = Number(card.intervalDays);
      if (!Number.isFinite(days) || days < 1 || days > 90)
        return false;
    }
    if (card.channels.includes("email") && !card.emailRecipients.trim())
      return false;
    if (card.channels.includes("webhook") && !card.webhookUrl.trim())
      return false;
    if (card.channels.includes("sms") && card.smsRecipients.trim() && !parseFleetPhones(card.smsRecipients).length) {
      return false;
    }
    if (card.channels.includes("whatsapp") && card.whatsappRecipients.trim() && !parseFleetPhones(card.whatsappRecipients).length) {
      return false;
    }
    return true;
  }
  _patch(card, patch) {
    Object.assign(card, patch);
    this.monitored.update((cards) => [...cards]);
  }
  _pathForAsset(check) {
    const asset = this.asset();
    const hasPlate = Boolean(asset?.plate?.trim() && asset?.ownerDocumentType?.trim() && asset?.ownerDocumentNumber?.trim());
    if (hasPlate && check.endpoints?.byPlate)
      return check.endpoints.byPlate;
    if (asset?.vin?.trim() && check.endpoints?.byVin)
      return check.endpoints.byVin;
    return check.endpoints?.byPlate || check.endpoints?.byVin || null;
  }
  static {
    this.\u0275fac = function FleetAssetRulesBoardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FleetAssetRulesBoardComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FleetAssetRulesBoardComponent, selectors: [["fleet-asset-rules-board"]], inputs: { assetId: "assetId", groupName: "groupName", library: "library" }, decls: 27, vars: 30, consts: [[1, "rounded-2xl", "border", "border-indigo-200", "bg-white", "p-5", "shadow-sm", "dark:border-indigo-900", "dark:bg-gray-900"], [1, "flex", "flex-wrap", "items-start", "justify-between", "gap-3"], [1, "min-w-0"], [1, "text-base", "font-semibold", "text-stone-900", "dark:text-white"], [4, "ngIf"], [1, "mt-1", "text-sm", "text-stone-500", "dark:text-stone-400"], [1, "mt-3", "flex", "flex-wrap", "gap-1"], ["routerLink", "/smart-fleet/watch-rules", "class", "rounded-lg px-2.5 py-1 text-xs font-medium", 3, "queryParams", "bg-stone-900", "text-white", "text-stone-600", 4, "ngIf"], ["routerLink", "/smart-fleet/watch-rules", 1, "rounded-lg", "px-2.5", "py-1", "text-xs", "font-medium", 3, "queryParams"], ["mat-flat-button", "", "color", "primary", "type", "button", 1, "shrink-0", "rounded-xl", "!px-6", "!py-2", 3, "click", "disabled"], ["diameter", "18", "class", "mr-2", 4, "ngIf"], ["class", "mt-4 rounded-xl border border-indigo-100 bg-indigo-50/70 p-3 dark:border-indigo-900 dark:bg-indigo-950/30", 4, "ngIf"], ["class", "mt-4 rounded-xl border border-stone-200 bg-stone-50 p-3 dark:border-gray-800 dark:bg-gray-950/40", 4, "ngIf"], ["class", "flex justify-center py-16", 4, "ngIf"], ["class", "mt-5 flex flex-col gap-5", 4, "ngIf"], ["diameter", "18", 1, "mr-2"], [1, "mt-4", "rounded-xl", "border", "border-indigo-100", "bg-indigo-50/70", "p-3", "dark:border-indigo-900", "dark:bg-indigo-950/30"], [1, "text-sm", "font-medium", "text-indigo-950", "dark:text-indigo-100"], ["class", "mt-1 text-xs text-indigo-800 dark:text-indigo-200", 4, "ngIf"], ["class", "mt-2 flex flex-wrap gap-1.5", 4, "ngIf"], [1, "mt-1", "text-xs", "text-indigo-800", "dark:text-indigo-200"], [1, "mt-2", "flex", "flex-wrap", "gap-1.5"], ["class", "rounded-lg bg-white px-2 py-1 font-mono text-xs font-semibold text-stone-800 dark:bg-gray-900 dark:text-stone-100", 4, "ngFor", "ngForOf"], [1, "rounded-lg", "bg-white", "px-2", "py-1", "font-mono", "text-xs", "font-semibold", "text-stone-800", "dark:bg-gray-900", "dark:text-stone-100"], [1, "mt-4", "rounded-xl", "border", "border-stone-200", "bg-stone-50", "p-3", "dark:border-gray-800", "dark:bg-gray-950/40"], [1, "text-sm", "font-medium", "text-stone-900", "dark:text-white"], [1, "mt-1", "text-xs", "text-stone-500"], [1, "mt-2", "flex", "flex-col", "gap-1"], ["class", "text-sm text-stone-700 dark:text-stone-200", 4, "ngFor", "ngForOf"], [1, "text-sm", "text-stone-700", "dark:text-stone-200"], [1, "flex", "justify-center", "py-16"], ["diameter", "36"], [1, "mt-5", "flex", "flex-col", "gap-5"], [1, "rounded-2xl", "border", "border-stone-200", "bg-stone-50", "p-4", "dark:border-gray-800", "dark:bg-gray-950/40"], [1, "text-sm", "font-semibold", "text-stone-900", "dark:text-white"], ["class", "mt-3 text-sm text-stone-500", 4, "ngIf"], [1, "mt-3", "grid", "gap-2", "sm:grid-cols-2"], ["type", "button", "class", "flex items-center justify-between gap-3 rounded-xl border border-stone-200 bg-white p-3 text-left disabled:cursor-not-allowed disabled:opacity-60 dark:border-gray-700 dark:bg-gray-900", 3, "disabled", "click", 4, "ngFor", "ngForOf"], [1, "rounded-2xl", "border", "border-indigo-200", "bg-indigo-50/40", "p-4", "dark:border-indigo-900", "dark:bg-indigo-950/20"], ["class", "mt-3 flex items-center gap-2 text-xs text-stone-600 dark:text-stone-300", 4, "ngIf"], ["class", "mt-2 text-xs text-amber-700 dark:text-amber-300", 4, "ngIf"], [1, "mt-3", "flex", "flex-col", "gap-3"], ["class", "rounded-xl border border-dashed border-indigo-300 px-3 py-8 text-center text-sm text-stone-500", 4, "ngIf"], ["class", "rounded-xl border border-stone-200 bg-white p-3 dark:border-gray-700 dark:bg-gray-900", 4, "ngFor", "ngForOf"], [1, "mt-3", "text-sm", "text-stone-500"], ["type", "button", 1, "flex", "items-center", "justify-between", "gap-3", "rounded-xl", "border", "border-stone-200", "bg-white", "p-3", "text-left", "disabled:cursor-not-allowed", "disabled:opacity-60", "dark:border-gray-700", "dark:bg-gray-900", 3, "click", "disabled"], [1, "block", "text-sm", "font-semibold", "text-stone-900", "dark:text-white"], [1, "mt-1", "block", "truncate", "font-mono", "text-xs", "text-stone-500"], ["class", "mt-1 block text-xs text-amber-700 dark:text-amber-300", 4, "ngIf"], [1, "shrink-0", "rounded-lg", "px-3", "py-1.5", "text-xs", "font-semibold", "text-white"], [1, "mt-1", "block", "text-xs", "text-amber-700", "dark:text-amber-300"], [1, "mt-3", "flex", "items-center", "gap-2", "text-xs", "text-stone-600", "dark:text-stone-300"], [1, "rounded-lg", "border", "border-stone-200", "bg-white", "px-2", "py-1", "text-xs", "dark:border-gray-700", "dark:bg-gray-950", "dark:text-white", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "mt-2", "text-xs", "text-amber-700", "dark:text-amber-300"], [1, "rounded-xl", "border", "border-dashed", "border-indigo-300", "px-3", "py-8", "text-center", "text-sm", "text-stone-500"], [1, "rounded-xl", "border", "border-stone-200", "bg-white", "p-3", "dark:border-gray-700", "dark:bg-gray-900"], [1, "flex", "items-start", "justify-between", "gap-2"], [1, "mt-0.5", "truncate", "font-mono", "text-xs", "text-stone-500"], ["type", "button", 1, "flex", "h-9", "w-9", "shrink-0", "items-center", "justify-center", "rounded-lg", "text-red-600", "hover:bg-red-50", "dark:text-red-400", "dark:hover:bg-red-950/40", 3, "click", "matTooltip"], [1, "icon-size-5"], ["class", "mt-3 flex flex-col gap-1", 4, "ngIf"], [1, "mt-3", "text-xs", "font-medium", "uppercase", "text-stone-500"], [1, "mt-2", "flex", "flex-wrap", "gap-1"], ["type", "button", "class", "rounded-lg px-2.5 py-1 text-xs font-medium transition-colors", 3, "bg-stone-900", "text-white", "text-stone-600", "hover:bg-stone-100", "click", 4, "ngFor", "ngForOf"], ["class", "mt-2 flex flex-col gap-1", 4, "ngIf"], [1, "mt-2", "flex", "flex-wrap", "gap-2"], ["type", "button", "class", "inline-flex items-center gap-2.5 rounded-xl border px-3 py-1.5 text-sm font-medium transition-colors", 3, "border-indigo-600", "bg-indigo-600", "text-white", "border-stone-200", "bg-white", "text-stone-800", "dark:border-gray-700", "dark:bg-gray-900", "dark:text-stone-100", "click", 4, "ngFor", "ngForOf"], [1, "mt-3", "flex", "items-center", "gap-2"], ["type", "button", 1, "inline-flex", "items-center", "gap-1.5", "rounded-lg", "border", "border-stone-300", "px-2.5", "py-1", "text-xs", "font-medium", "text-stone-800", "disabled:opacity-50", "dark:border-gray-600", "dark:text-stone-100", 3, "click", "disabled", "matTooltip"], ["diameter", "14", 4, "ngIf"], ["class", "mt-2 rounded-lg px-3 py-2 text-xs", 3, "ngClass", 4, "ngIf"], [1, "mt-3", "flex", "flex-col", "gap-1"], [1, "text-xs", "font-medium", "uppercase", "text-stone-500"], [1, "rounded-lg", "border", "border-stone-200", "bg-white", "px-2", "py-1.5", "text-sm", "dark:border-gray-700", "dark:bg-gray-950", "dark:text-white", 3, "ngModelChange", "ngModel"], ["value", ""], ["class", "text-xs text-stone-500", 4, "ngIf"], [1, "text-xs", "text-stone-500"], ["type", "button", 1, "rounded-lg", "px-2.5", "py-1", "text-xs", "font-medium", "transition-colors", 3, "click"], ["type", "number", "min", "1", "max", "90", 1, "rounded-lg", "border", "border-stone-200", "bg-white", "px-3", "py-1.5", "text-sm", "dark:border-gray-700", "dark:bg-gray-950", "dark:text-white", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "0", "max", "365", 1, "rounded-lg", "border", "border-stone-200", "bg-white", "px-3", "py-1.5", "text-sm", "dark:border-gray-700", "dark:bg-gray-950", "dark:text-white", 3, "ngModelChange", "ngModel"], ["type", "button", 1, "inline-flex", "items-center", "gap-2.5", "rounded-xl", "border", "px-3", "py-1.5", "text-sm", "font-medium", "transition-colors", 3, "click"], [1, "flex", "h-9", "w-9", "shrink-0", "items-center", "justify-center", "rounded-lg", 3, "ngClass"], [3, "channel"], ["type", "text", "placeholder", "ops@empresa.com", 1, "rounded-lg", "border", "border-stone-200", "bg-white", "px-3", "py-1.5", "text-sm", "dark:border-gray-700", "dark:bg-gray-950", "dark:text-white", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "+573001112233", 1, "rounded-lg", "border", "border-stone-200", "bg-white", "px-3", "py-1.5", "text-sm", "dark:border-gray-700", "dark:bg-gray-950", "dark:text-white", 3, "ngModelChange", "ngModel"], ["type", "url", "placeholder", "https://ejemplo.com/hooks/flota", 1, "rounded-lg", "border", "border-stone-200", "bg-white", "px-3", "py-1.5", "text-sm", "dark:border-gray-700", "dark:bg-gray-950", "dark:text-white", 3, "ngModelChange", "ngModel"], ["diameter", "14"], [1, "mt-2", "rounded-lg", "px-3", "py-2", "text-xs", 3, "ngClass"], ["class", "mt-1 flex flex-col gap-0.5", 4, "ngIf"], [1, "mt-1", "flex", "flex-col", "gap-0.5"], [4, "ngFor", "ngForOf"], [1, "font-medium"]], template: function FleetAssetRulesBoardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3);
        \u0275\u0275template(4, FleetAssetRulesBoardComponent_ng_container_4_Template, 3, 6, "ng-container", 4)(5, FleetAssetRulesBoardComponent_ng_container_5_Template, 3, 6, "ng-container", 4)(6, FleetAssetRulesBoardComponent_ng_container_6_Template, 3, 3, "ng-container", 4)(7, FleetAssetRulesBoardComponent_ng_container_7_Template, 3, 3, "ng-container", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p", 5);
        \u0275\u0275template(9, FleetAssetRulesBoardComponent_ng_container_9_Template, 3, 3, "ng-container", 4)(10, FleetAssetRulesBoardComponent_ng_container_10_Template, 3, 3, "ng-container", 4)(11, FleetAssetRulesBoardComponent_ng_container_11_Template, 3, 3, "ng-container", 4)(12, FleetAssetRulesBoardComponent_ng_container_12_Template, 3, 3, "ng-container", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div", 6);
        \u0275\u0275template(14, FleetAssetRulesBoardComponent_a_14_Template, 3, 12, "a", 7)(15, FleetAssetRulesBoardComponent_a_15_Template, 3, 15, "a", 7);
        \u0275\u0275elementStart(16, "a", 8);
        \u0275\u0275text(17);
        \u0275\u0275pipe(18, "transloco");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(19, "button", 9);
        \u0275\u0275listener("click", function FleetAssetRulesBoardComponent_Template_button_click_19_listener() {
          return ctx.save();
        });
        \u0275\u0275template(20, FleetAssetRulesBoardComponent_mat_spinner_20_Template, 1, 0, "mat-spinner", 10);
        \u0275\u0275text(21);
        \u0275\u0275pipe(22, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(23, FleetAssetRulesBoardComponent_div_23_Template, 6, 8, "div", 11)(24, FleetAssetRulesBoardComponent_div_24_Template, 9, 10, "div", 12)(25, FleetAssetRulesBoardComponent_div_25_Template, 2, 0, "div", 13)(26, FleetAssetRulesBoardComponent_div_26_Template, 23, 18, "div", 14);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", ctx.mode() === "asset");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.mode() === "group");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.mode() === "fleet");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.mode() === "library");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.mode() === "asset");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.mode() === "group");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.mode() === "fleet");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.mode() === "library");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.assetId);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.linkedGroup());
        \u0275\u0275advance();
        \u0275\u0275classProp("bg-stone-900", ctx.mode() === "fleet")("text-white", ctx.mode() === "fleet")("text-stone-600", ctx.mode() !== "fleet");
        \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(29, _c0));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 25, "smartFleet.rules.scopeFleet"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", !ctx.canSave());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isSaving());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 27, "smartFleet.rules.saveBoard"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !ctx.isLoading() && ctx.mode() === "group");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isLoading() && ctx.mode() === "asset" && ctx.inherited().length);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isLoading());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isLoading());
      }
    }, dependencies: [
      CommonModule,
      NgClass,
      NgForOf,
      NgIf,
      FormsModule,
      NgSelectOption,
      \u0275NgSelectMultipleOption,
      DefaultValueAccessor,
      NumberValueAccessor,
      SelectControlValueAccessor,
      NgControlStatus,
      MinValidator,
      MaxValidator,
      NgModel,
      TranslocoModule,
      TranslocoPipe,
      RouterModule,
      RouterLink,
      MatButtonModule,
      MatButton,
      MatIconModule,
      MatIcon,
      MatTooltipModule,
      MatTooltip,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatSnackBarModule,
      FleetChannelIconComponent
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FleetAssetRulesBoardComponent, [{
    type: Component,
    args: [{ selector: "fleet-asset-rules-board", standalone: true, imports: [
      CommonModule,
      FormsModule,
      TranslocoModule,
      RouterModule,
      MatButtonModule,
      MatIconModule,
      MatTooltipModule,
      MatProgressSpinnerModule,
      MatSnackBarModule,
      FleetChannelIconComponent
    ], encapsulation: ViewEncapsulation.None, template: `<div\r
    class="rounded-2xl border border-indigo-200 bg-white p-5 shadow-sm dark:border-indigo-900 dark:bg-gray-900"\r
>\r
    <div class="flex flex-wrap items-start justify-between gap-3">\r
        <div class="min-w-0">\r
            <h2 class="text-base font-semibold text-stone-900 dark:text-white">\r
                <ng-container *ngIf="mode() === 'asset'">{{\r
                    'smartFleet.rules.boardTitle' | transloco: { plate: plateLabel() }\r
                }}</ng-container>\r
                <ng-container *ngIf="mode() === 'group'">{{\r
                    'smartFleet.rules.boardGroupTitle' | transloco: { group: groupName }\r
                }}</ng-container>\r
                <ng-container *ngIf="mode() === 'fleet'">{{\r
                    'smartFleet.rules.boardFleetTitle' | transloco\r
                }}</ng-container>\r
                <ng-container *ngIf="mode() === 'library'">{{\r
                    'smartFleet.rules.boardLibraryTitle' | transloco\r
                }}</ng-container>\r
            </h2>\r
            <p class="mt-1 text-sm text-stone-500 dark:text-stone-400">\r
                <ng-container *ngIf="mode() === 'asset'">{{\r
                    'smartFleet.rules.boardSubtitle' | transloco\r
                }}</ng-container>\r
                <ng-container *ngIf="mode() === 'group'">{{\r
                    'smartFleet.rules.boardGroupSubtitle' | transloco\r
                }}</ng-container>\r
                <ng-container *ngIf="mode() === 'fleet'">{{\r
                    'smartFleet.rules.boardFleetSubtitle' | transloco\r
                }}</ng-container>\r
                <ng-container *ngIf="mode() === 'library'">{{\r
                    'smartFleet.rules.boardLibrarySubtitle' | transloco\r
                }}</ng-container>\r
            </p>\r
            <div class="mt-3 flex flex-wrap gap-1">\r
                <a\r
                    *ngIf="assetId"\r
                    routerLink="/smart-fleet/watch-rules"\r
                    [queryParams]="{ asset: assetId }"\r
                    class="rounded-lg px-2.5 py-1 text-xs font-medium"\r
                    [class.bg-stone-900]="mode() === 'asset'"\r
                    [class.text-white]="mode() === 'asset'"\r
                    [class.text-stone-600]="mode() !== 'asset'"\r
                >\r
                    {{ 'smartFleet.rules.scopeAsset' | transloco }}\r
                </a>\r
                <a\r
                    *ngIf="linkedGroup() as name"\r
                    routerLink="/smart-fleet/watch-rules"\r
                    [queryParams]="{ group: name }"\r
                    class="rounded-lg px-2.5 py-1 text-xs font-medium"\r
                    [class.bg-stone-900]="mode() === 'group'"\r
                    [class.text-white]="mode() === 'group'"\r
                    [class.text-stone-600]="mode() !== 'group'"\r
                >\r
                    {{ 'smartFleet.rules.scopeGroupNamed' | transloco: { name: name } }}\r
                </a>\r
                <a\r
                    routerLink="/smart-fleet/watch-rules"\r
                    [queryParams]="{ scope: 'fleet' }"\r
                    class="rounded-lg px-2.5 py-1 text-xs font-medium"\r
                    [class.bg-stone-900]="mode() === 'fleet'"\r
                    [class.text-white]="mode() === 'fleet'"\r
                    [class.text-stone-600]="mode() !== 'fleet'"\r
                >\r
                    {{ 'smartFleet.rules.scopeFleet' | transloco }}\r
                </a>\r
            </div>\r
        </div>\r
        <button\r
            mat-flat-button\r
            color="primary"\r
            type="button"\r
            [disabled]="!canSave()"\r
            (click)="save()"\r
            class="shrink-0 rounded-xl !px-6 !py-2"\r
        >\r
            <mat-spinner *ngIf="isSaving()" diameter="18" class="mr-2"></mat-spinner>\r
            {{ 'smartFleet.rules.saveBoard' | transloco }}\r
        </button>\r
    </div>\r
\r
    <div class="mt-4 rounded-xl border border-indigo-100 bg-indigo-50/70 p-3 dark:border-indigo-900 dark:bg-indigo-950/30" *ngIf="!isLoading() && mode() === 'group'">\r
        <p class="text-sm font-medium text-indigo-950 dark:text-indigo-100">\r
            {{ 'smartFleet.rules.coversTitle' | transloco: { count: covered().length } }}\r
        </p>\r
        <p class="mt-1 text-xs text-indigo-800 dark:text-indigo-200" *ngIf="!covered().length">\r
            {{ 'smartFleet.rules.coversEmpty' | transloco }}\r
        </p>\r
        <div class="mt-2 flex flex-wrap gap-1.5" *ngIf="covered().length">\r
            <span\r
                *ngFor="let vehicle of covered()"\r
                class="rounded-lg bg-white px-2 py-1 font-mono text-xs font-semibold text-stone-800 dark:bg-gray-900 dark:text-stone-100"\r
                >{{ vehicle.plate || vehicle.vin }}</span\r
            >\r
        </div>\r
    </div>\r
\r
    <div\r
        class="mt-4 rounded-xl border border-stone-200 bg-stone-50 p-3 dark:border-gray-800 dark:bg-gray-950/40"\r
        *ngIf="!isLoading() && mode() === 'asset' && inherited().length"\r
    >\r
        <p class="text-sm font-medium text-stone-900 dark:text-white">\r
            {{ 'smartFleet.rules.inheritedTitle' | transloco: { group: asset()?.group } }}\r
        </p>\r
        <p class="mt-1 text-xs text-stone-500">{{ 'smartFleet.rules.inheritedHint' | transloco }}</p>\r
        <ul class="mt-2 flex flex-col gap-1">\r
            <li *ngFor="let rule of inherited()" class="text-sm text-stone-700 dark:text-stone-200">\r
                {{ 'smartFleet.checkType.' + rule.checkType | transloco }}\r
                \xB7 {{ 'smartFleet.frequency.' + (rule.frequency || 'weekly') | transloco }}\r
            </li>\r
        </ul>\r
    </div>\r
\r
    <div class="flex justify-center py-16" *ngIf="isLoading()">\r
        <mat-spinner diameter="36"></mat-spinner>\r
    </div>\r
\r
    <div class="mt-5 flex flex-col gap-5" *ngIf="!isLoading()">\r
        <section class="rounded-2xl border border-stone-200 bg-stone-50 p-4 dark:border-gray-800 dark:bg-gray-950/40">\r
            <h3 class="text-sm font-semibold text-stone-900 dark:text-white">\r
                {{ 'smartFleet.rules.availableTitle' | transloco }}\r
            </h3>\r
            <p class="mt-1 text-xs text-stone-500">{{ 'smartFleet.rules.dragHint' | transloco }}</p>\r
            <p class="mt-3 text-sm text-stone-500" *ngIf="!available().length">\r
                {{ 'smartFleet.rules.allAdded' | transloco }}\r
            </p>\r
            <div class="mt-3 grid gap-2 sm:grid-cols-2">\r
                <button\r
                    *ngFor="let check of available()"\r
                    type="button"\r
                    (click)="addCheck(check)"\r
                    [disabled]="!isReady(check)"\r
                    class="flex items-center justify-between gap-3 rounded-xl border border-stone-200 bg-white p-3 text-left disabled:cursor-not-allowed disabled:opacity-60 dark:border-gray-700 dark:bg-gray-900"\r
                >\r
                    <span class="min-w-0">\r
                        <span class="block text-sm font-semibold text-stone-900 dark:text-white">{{\r
                            'smartFleet.checkType.' + check.checkType | transloco\r
                        }}</span>\r
                        <span class="mt-1 block truncate font-mono text-xs text-stone-500">{{\r
                            endpointLabel(check)\r
                        }}</span>\r
                        <span class="mt-1 block text-xs text-amber-700 dark:text-amber-300" *ngIf="!isReady(check)">{{\r
                            blockedReason(check)\r
                        }}</span>\r
                    </span>\r
                    <span\r
                        class="shrink-0 rounded-lg px-3 py-1.5 text-xs font-semibold text-white"\r
                        [class.bg-indigo-600]="isReady(check)"\r
                        [class.bg-stone-300]="!isReady(check)"\r
                        >{{ 'smartFleet.rules.addCheck' | transloco }}</span\r
                    >\r
                </button>\r
            </div>\r
        </section>\r
\r
        <section class="rounded-2xl border border-indigo-200 bg-indigo-50/40 p-4 dark:border-indigo-900 dark:bg-indigo-950/20">\r
            <h3 class="text-sm font-semibold text-stone-900 dark:text-white">\r
                {{ 'smartFleet.rules.monitoredTitle' | transloco }}\r
            </h3>\r
            <p class="mt-1 text-xs text-stone-500">{{ 'smartFleet.rules.dropHint' | transloco }}</p>\r
            <label\r
                class="mt-3 flex items-center gap-2 text-xs text-stone-600 dark:text-stone-300"\r
                *ngIf="mode() !== 'asset' && testPool().length"\r
            >\r
                <span>{{ 'smartFleet.rules.testOn' | transloco }}</span>\r
                <select\r
                    class="rounded-lg border border-stone-200 bg-white px-2 py-1 text-xs dark:border-gray-700 dark:bg-gray-950 dark:text-white"\r
                    [ngModel]="testAssetId()"\r
                    (ngModelChange)="testAssetId.set($event)"\r
                >\r
                    <option *ngFor="let vehicle of testPool()" [value]="vehicle._id">\r
                        {{ vehicle.plate || vehicle.vin }}\r
                    </option>\r
                </select>\r
            </label>\r
            <p\r
                class="mt-2 text-xs text-amber-700 dark:text-amber-300"\r
                *ngIf="mode() !== 'asset' && !testPool().length"\r
            >\r
                {{ 'smartFleet.rules.testNeedVehicle' | transloco }}\r
            </p>\r
            <div class="mt-3 flex flex-col gap-3">\r
                <p\r
                    *ngIf="!monitored().length"\r
                    class="rounded-xl border border-dashed border-indigo-300 px-3 py-8 text-center text-sm text-stone-500"\r
                >\r
                    {{ 'smartFleet.rules.emptyMonitored' | transloco }}\r
                </p>\r
                <article\r
                    *ngFor="let card of monitored()"\r
                    class="rounded-xl border border-stone-200 bg-white p-3 dark:border-gray-700 dark:bg-gray-900"\r
                >\r
                    <div class="flex items-start justify-between gap-2">\r
                        <div class="min-w-0">\r
                            <p class="text-sm font-semibold text-stone-900 dark:text-white">\r
                                {{ 'smartFleet.checkType.' + card.check.checkType | transloco }}\r
                            </p>\r
                            <p class="mt-0.5 truncate font-mono text-xs text-stone-500">\r
                                {{ endpointLabel(card.check) }}\r
                            </p>\r
                        </div>\r
                        <button\r
                            type="button"\r
                            (click)="removeCard(card)"\r
                            [matTooltip]="'smartFleet.rules.removeEndpoint' | transloco"\r
                            class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-950/40"\r
                        >\r
                            <mat-icon class="icon-size-5">delete</mat-icon>\r
                        </button>\r
                    </div>\r
                    <label class="mt-3 flex flex-col gap-1" *ngIf="mode() === 'library'">\r
                        <span class="text-xs font-medium uppercase text-stone-500">{{\r
                            'smartFleet.rules.assignVehicle' | transloco\r
                        }}</span>\r
                        <select\r
                            class="rounded-lg border border-stone-200 bg-white px-2 py-1.5 text-sm dark:border-gray-700 dark:bg-gray-950 dark:text-white"\r
                            [ngModel]="card.assignAssetId"\r
                            (ngModelChange)="setAssignAsset(card, $event)"\r
                        >\r
                            <option value="">{{ 'smartFleet.rules.assignNone' | transloco }}</option>\r
                            <option *ngFor="let vehicle of vehiclesFor(card.check)" [value]="vehicle._id">\r
                                {{ vehicle.plate || vehicle.vin }}\r
                            </option>\r
                        </select>\r
                        <span class="text-xs text-stone-500" *ngIf="!vehiclesFor(card.check).length">{{\r
                            'smartFleet.rules.assignEmpty' | transloco\r
                        }}</span>\r
                        <span class="text-xs text-stone-500" *ngIf="vehiclesFor(card.check).length">{{\r
                            'smartFleet.rules.assignVehicleHint' | transloco\r
                        }}</span>\r
                    </label>\r
\r
                    <p class="mt-3 text-xs font-medium uppercase text-stone-500">\r
                        {{ 'smartFleet.rules.period' | transloco }}\r
                    </p>\r
                    <div class="mt-2 flex flex-wrap gap-1">\r
                        <button\r
                            *ngFor="let frequency of frequencies"\r
                            type="button"\r
                            (click)="setFrequency(card, frequency)"\r
                            class="rounded-lg px-2.5 py-1 text-xs font-medium transition-colors"\r
                            [class.bg-stone-900]="card.frequency === frequency"\r
                            [class.text-white]="card.frequency === frequency"\r
                            [class.text-stone-600]="card.frequency !== frequency"\r
                            [class.hover:bg-stone-100]="card.frequency !== frequency"\r
                        >\r
                            {{ 'smartFleet.frequency.' + frequency | transloco }}\r
                        </button>\r
                    </div>\r
                    <label class="mt-2 flex flex-col gap-1" *ngIf="card.frequency === 'custom'">\r
                        <span class="text-xs text-stone-500">{{\r
                            'smartFleet.rules.intervalDaysLabel' | transloco\r
                        }}</span>\r
                        <input\r
                            type="number"\r
                            min="1"\r
                            max="90"\r
                            [ngModel]="card.intervalDays"\r
                            (ngModelChange)="setIntervalDays(card, $event)"\r
                            class="rounded-lg border border-stone-200 bg-white px-3 py-1.5 text-sm dark:border-gray-700 dark:bg-gray-950 dark:text-white"\r
                        />\r
                    </label>\r
                    <label class="mt-2 flex flex-col gap-1" *ngIf="card.check.kind === 'threshold'">\r
                        <span class="text-xs text-stone-500">{{\r
                            'smartFleet.rules.thresholdDays' | transloco\r
                        }}</span>\r
                        <input\r
                            type="number"\r
                            min="0"\r
                            max="365"\r
                            [ngModel]="card.thresholdDays"\r
                            (ngModelChange)="setThresholdDays(card, $event)"\r
                            class="rounded-lg border border-stone-200 bg-white px-3 py-1.5 text-sm dark:border-gray-700 dark:bg-gray-950 dark:text-white"\r
                        />\r
                    </label>\r
\r
                    <p class="mt-3 text-xs font-medium uppercase text-stone-500">\r
                        {{ 'smartFleet.rules.notifyVia' | transloco }}\r
                    </p>\r
                    <div class="mt-2 flex flex-wrap gap-2">\r
                        <button\r
                            *ngFor="let channel of channelOptions"\r
                            type="button"\r
                            (click)="toggleChannel(card, channel)"\r
                            class="inline-flex items-center gap-2.5 rounded-xl border px-3 py-1.5 text-sm font-medium transition-colors"\r
                            [class.border-indigo-600]="card.channels.includes(channel)"\r
                            [class.bg-indigo-600]="card.channels.includes(channel)"\r
                            [class.text-white]="card.channels.includes(channel)"\r
                            [class.border-stone-200]="!card.channels.includes(channel)"\r
                            [class.bg-white]="!card.channels.includes(channel)"\r
                            [class.text-stone-800]="!card.channels.includes(channel)"\r
                            [class.dark:border-gray-700]="!card.channels.includes(channel)"\r
                            [class.dark:bg-gray-900]="!card.channels.includes(channel)"\r
                            [class.dark:text-stone-100]="!card.channels.includes(channel)"\r
                        >\r
                            <span\r
                                class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"\r
                                [ngClass]="channelTone(channel, card.channels.includes(channel))"\r
                            >\r
                                <fleet-channel-icon [channel]="channel" />\r
                            </span>\r
                            {{ 'smartFleet.channel.' + channel | transloco }}\r
                        </button>\r
                    </div>\r
                    <label class="mt-2 flex flex-col gap-1" *ngIf="card.channels.includes('email')">\r
                        <span class="text-xs text-stone-500">{{\r
                            'smartFleet.rules.emailRecipients' | transloco\r
                        }}</span>\r
                        <input\r
                            type="text"\r
                            [ngModel]="card.emailRecipients"\r
                            (ngModelChange)="setEmail(card, $event)"\r
                            placeholder="ops@empresa.com"\r
                            class="rounded-lg border border-stone-200 bg-white px-3 py-1.5 text-sm dark:border-gray-700 dark:bg-gray-950 dark:text-white"\r
                        />\r
                    </label>\r
                    <label class="mt-2 flex flex-col gap-1" *ngIf="card.channels.includes('sms')">\r
                        <span class="text-xs text-stone-500">{{\r
                            'smartFleet.rules.smsRecipients' | transloco\r
                        }}</span>\r
                        <input\r
                            type="text"\r
                            [ngModel]="card.smsRecipients"\r
                            (ngModelChange)="setSms(card, $event)"\r
                            placeholder="+573001112233"\r
                            class="rounded-lg border border-stone-200 bg-white px-3 py-1.5 text-sm dark:border-gray-700 dark:bg-gray-950 dark:text-white"\r
                        />\r
                    </label>\r
                    <label class="mt-2 flex flex-col gap-1" *ngIf="card.channels.includes('whatsapp')">\r
                        <span class="text-xs text-stone-500">{{\r
                            'smartFleet.rules.whatsappRecipients' | transloco\r
                        }}</span>\r
                        <input\r
                            type="text"\r
                            [ngModel]="card.whatsappRecipients"\r
                            (ngModelChange)="setWhatsapp(card, $event)"\r
                            placeholder="+573001112233"\r
                            class="rounded-lg border border-stone-200 bg-white px-3 py-1.5 text-sm dark:border-gray-700 dark:bg-gray-950 dark:text-white"\r
                        />\r
                    </label>\r
                    <label class="mt-2 flex flex-col gap-1" *ngIf="card.channels.includes('webhook')">\r
                        <span class="text-xs text-stone-500">{{\r
                            'smartFleet.rules.webhookUrl' | transloco\r
                        }}</span>\r
                        <input\r
                            type="url"\r
                            [ngModel]="card.webhookUrl"\r
                            (ngModelChange)="setWebhook(card, $event)"\r
                            placeholder="https://ejemplo.com/hooks/flota"\r
                            class="rounded-lg border border-stone-200 bg-white px-3 py-1.5 text-sm dark:border-gray-700 dark:bg-gray-950 dark:text-white"\r
                        />\r
                    </label>\r
\r
                    <div class="mt-3 flex items-center gap-2">\r
                        <button\r
                            type="button"\r
                            (click)="test(card)"\r
                            [disabled]="!canTest(card)"\r
                            [matTooltip]="'smartFleet.rules.testHint' | transloco"\r
                            class="inline-flex items-center gap-1.5 rounded-lg border border-stone-300 px-2.5 py-1 text-xs font-medium text-stone-800 disabled:opacity-50 dark:border-gray-600 dark:text-stone-100"\r
                        >\r
                            <mat-spinner\r
                                *ngIf="testingCheck() === card.check.checkType"\r
                                diameter="14"\r
                            ></mat-spinner>\r
                            {{ 'smartFleet.rules.test' | transloco }}\r
                        </button>\r
                    </div>\r
                    <div\r
                        *ngIf="testResult()?.checkType === card.check.checkType"\r
                        class="mt-2 rounded-lg px-3 py-2 text-xs"\r
                        [ngClass]="{\r
                            'bg-emerald-50 text-emerald-900': testResult()!.tone === 'ok',\r
                            'bg-amber-50 text-amber-900': testResult()!.tone === 'warn',\r
                            'bg-red-50 text-red-900': testResult()!.tone === 'error'\r
                        }"\r
                    >\r
                        <p>{{ testResult()!.message }}</p>\r
                        <ul class="mt-1 flex flex-col gap-0.5" *ngIf="testResult()!.rows.length">\r
                            <li *ngFor="let row of testResult()!.rows">\r
                                <span class="font-medium">{{ row.label }}:</span> {{ row.value }}\r
                            </li>\r
                        </ul>\r
                    </div>\r
                </article>\r
            </div>\r
        </section>\r
    </div>\r
</div>\r
` }]
  }], null, { assetId: [{
    type: Input
  }], groupName: [{
    type: Input
  }], library: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FleetAssetRulesBoardComponent, { className: "FleetAssetRulesBoardComponent", filePath: "src/app/modules/smart-fleet/watch-rules/fleet-asset-rules-board.component.ts", lineNumber: 66 });
})();

// src/app/modules/smart-fleet/watch-rules/fleet-watch-rules.component.ts
var _c02 = (a0) => ({ count: a0 });
var _c12 = () => ({ add: 1 });
var _c22 = (a0) => ({ checks: a0 });
var _c32 = (a0, a1) => ({ assets: a0, credits: a1 });
var _c42 = (a0, a1) => ({ current: a0, projected: a1 });
var _c52 = () => [];
var _c62 = (a0) => ({ interval: a0 });
var _c7 = (a0) => ["/smart-fleet/assets", a0];
var _c8 = (a0, a1) => ({ "bg-indigo-50 dark:bg-indigo-950/30": a0, "opacity-50": a1 });
var _c9 = () => ["/smart-fleet/watch-rules"];
var _c10 = (a0) => ({ days: a0 });
function FleetWatchRulesComponent_button_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275listener("click", function FleetWatchRulesComponent_button_17_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearTarget());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "smartFleet.rules.changeTarget"), " ");
  }
}
function FleetWatchRulesComponent_section_20_div_44_p_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 38)(1, "a", 39);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "smartFleet.rules.pickGroupEmpty"));
  }
}
function FleetWatchRulesComponent_section_20_div_44_li_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "button", 40);
    \u0275\u0275listener("click", function FleetWatchRulesComponent_section_20_div_44_li_3_Template_button_click_1_listener() {
      const group_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openTarget({ group: group_r5 }));
    });
    \u0275\u0275elementStart(2, "span", 41);
    \u0275\u0275element(3, "fleet-vehicle-icon", 42)(4, "span", 43);
    \u0275\u0275elementStart(5, "span", 44);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 45);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const group_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("color", ctx_r1.groupColor(group_r5));
    \u0275\u0275property("icon", ctx_r1.groupIcon(group_r5));
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ctx_r1.groupColor(group_r5));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(group_r5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.groupSize(group_r5));
  }
}
function FleetWatchRulesComponent_section_20_div_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275template(1, FleetWatchRulesComponent_section_20_div_44_p_1_Template, 4, 3, "p", 35);
    \u0275\u0275elementStart(2, "ul", 36);
    \u0275\u0275template(3, FleetWatchRulesComponent_section_20_div_44_li_3_Template, 9, 7, "li", 37);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.groups().length);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.groups());
  }
}
function FleetWatchRulesComponent_section_20_div_45_p_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 38)(1, "a", 46);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(4, _c12));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "smartFleet.rules.pickAssetEmpty"));
  }
}
function FleetWatchRulesComponent_section_20_div_45_li_3_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 50);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const asset_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(asset_r7.group);
  }
}
function FleetWatchRulesComponent_section_20_div_45_li_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "button", 47);
    \u0275\u0275listener("click", function FleetWatchRulesComponent_section_20_div_45_li_3_Template_button_click_1_listener() {
      const asset_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openTarget({ asset: asset_r7._id }));
    });
    \u0275\u0275elementStart(2, "span", 48);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, FleetWatchRulesComponent_section_20_div_45_li_3_span_4_Template, 2, 1, "span", 49);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const asset_r7 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(asset_r7.plate || asset_r7.vin);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", asset_r7.group);
  }
}
function FleetWatchRulesComponent_section_20_div_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275template(1, FleetWatchRulesComponent_section_20_div_45_p_1_Template, 4, 5, "p", 35);
    \u0275\u0275elementStart(2, "ul", 36);
    \u0275\u0275template(3, FleetWatchRulesComponent_section_20_div_45_li_3_Template, 5, 2, "li", 37);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.assets().length);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.assets());
  }
}
function FleetWatchRulesComponent_section_20_div_46_li_5_option_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 61);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const vehicle_r10 = ctx.$implicit;
    \u0275\u0275property("value", vehicle_r10._id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", vehicle_r10.plate || vehicle_r10.vin, " ");
  }
}
function FleetWatchRulesComponent_section_20_div_46_li_5_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 62);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "smartFleet.rules.assignEmpty"));
  }
}
function FleetWatchRulesComponent_section_20_div_46_li_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 55)(1, "span", 56);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "select", 57);
    \u0275\u0275listener("change", function FleetWatchRulesComponent_section_20_div_46_li_5_Template_select_change_4_listener($event) {
      const rule_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.assignRule(rule_r9, $event.target.value, $event));
    });
    \u0275\u0275elementStart(5, "option", 58);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, FleetWatchRulesComponent_section_20_div_46_li_5_option_8_Template, 2, 2, "option", 59);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, FleetWatchRulesComponent_section_20_div_46_li_5_span_9_Template, 3, 3, "span", 60);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rule_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 5, "smartFleet.checkType." + rule_r9.checkType));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.assigningRuleId() === rule_r9._id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 7, "smartFleet.rules.assignNone"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.vehiclesForRule(rule_r9));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.vehiclesForRule(rule_r9).length);
  }
}
function FleetWatchRulesComponent_section_20_div_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51)(1, "h3", 52);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ul", 53);
    \u0275\u0275template(5, FleetWatchRulesComponent_section_20_div_46_li_5_Template, 10, 9, "li", 54);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "smartFleet.rules.boardLibraryTitle"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.unassignedRules());
  }
}
function FleetWatchRulesComponent_section_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 23)(1, "h2", 24);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 25);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 26)(8, "button", 27);
    \u0275\u0275listener("click", function FleetWatchRulesComponent_section_20_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.choosePick("asset"));
    });
    \u0275\u0275elementStart(9, "mat-icon", 28);
    \u0275\u0275text(10, "directions_car");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 29);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 30);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "button", 27);
    \u0275\u0275listener("click", function FleetWatchRulesComponent_section_20_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.choosePick("group"));
    });
    \u0275\u0275elementStart(18, "mat-icon", 28);
    \u0275\u0275text(19, "workspaces");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 29);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 30);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "button", 31);
    \u0275\u0275listener("click", function FleetWatchRulesComponent_section_20_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.choosePick("fleet"));
    });
    \u0275\u0275elementStart(27, "mat-icon", 28);
    \u0275\u0275text(28, "local_shipping");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span", 29);
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span", 30);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "button", 31);
    \u0275\u0275listener("click", function FleetWatchRulesComponent_section_20_Template_button_click_35_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.choosePick("library"));
    });
    \u0275\u0275elementStart(36, "mat-icon", 28);
    \u0275\u0275text(37, "bookmark_add");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "span", 29);
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "span", 30);
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(44, FleetWatchRulesComponent_section_20_div_44_Template, 4, 2, "div", 32)(45, FleetWatchRulesComponent_section_20_div_45_Template, 4, 2, "div", 32)(46, FleetWatchRulesComponent_section_20_div_46_Template, 6, 4, "div", 33);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 29, "smartFleet.rules.pickTitle"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 31, "smartFleet.rules.pickHint"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("border-indigo-500", ctx_r1.pickKind() === "asset")("bg-indigo-50", ctx_r1.pickKind() === "asset")("border-stone-200", ctx_r1.pickKind() !== "asset")("dark:border-gray-700", ctx_r1.pickKind() !== "asset");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 33, "smartFleet.rules.scope_asset"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 35, "smartFleet.rules.pickAssetHint"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("border-indigo-500", ctx_r1.pickKind() === "group")("bg-indigo-50", ctx_r1.pickKind() === "group")("border-stone-200", ctx_r1.pickKind() !== "group")("dark:border-gray-700", ctx_r1.pickKind() !== "group");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 37, "smartFleet.rules.scope_group"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 39, "smartFleet.rules.pickGroupHint"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(31, 41, "smartFleet.rules.scope_fleet"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(34, 43, "smartFleet.rules.pickFleetHint", \u0275\u0275pureFunction1(50, _c02, ctx_r1.assets().length)));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(40, 46, "smartFleet.rules.pickLibraryCard"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(43, 48, "smartFleet.rules.pickLibraryCardHint"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.pickKind() === "group");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.pickKind() === "asset");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.unassignedRules().length);
  }
}
function FleetWatchRulesComponent_fleet_asset_rules_board_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "fleet-asset-rules-board");
  }
}
function FleetWatchRulesComponent_fleet_asset_rules_board_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "fleet-asset-rules-board", 63);
  }
  if (rf & 2) {
    \u0275\u0275property("library", true);
  }
}
function FleetWatchRulesComponent_fleet_asset_rules_board_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "fleet-asset-rules-board", 64);
  }
  if (rf & 2) {
    const assetId_r11 = ctx.ngIf;
    \u0275\u0275property("assetId", assetId_r11);
  }
}
function FleetWatchRulesComponent_fleet_asset_rules_board_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "fleet-asset-rules-board", 65);
  }
  if (rf & 2) {
    const groupName_r12 = ctx.ngIf;
    \u0275\u0275property("groupName", groupName_r12);
  }
}
function FleetWatchRulesComponent_div_25_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 88);
    \u0275\u0275listener("click", function FleetWatchRulesComponent_div_25_button_12_Template_button_click_0_listener() {
      const scope_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setScope(scope_r15));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const scope_r15 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("bg-stone-900", ctx_r1.draft().scope === scope_r15)("text-white", ctx_r1.draft().scope === scope_r15)("text-stone-600", ctx_r1.draft().scope !== scope_r15)("hover:bg-stone-100", ctx_r1.draft().scope !== scope_r15);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 9, "smartFleet.rules.scope_" + scope_r15), " ");
  }
}
function FleetWatchRulesComponent_div_25_label_14_option_8_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const asset_r17 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u2014 ", asset_r17.nickname, "");
  }
}
function FleetWatchRulesComponent_div_25_label_14_option_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 91);
    \u0275\u0275text(1);
    \u0275\u0275template(2, FleetWatchRulesComponent_div_25_label_14_option_8_ng_container_2_Template, 2, 1, "ng-container", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const asset_r17 = ctx.$implicit;
    \u0275\u0275property("ngValue", asset_r17._id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", asset_r17.plate || asset_r17.vin, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", asset_r17.nickname);
  }
}
function FleetWatchRulesComponent_div_25_label_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 89)(1, "span", 77);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "select", 90);
    \u0275\u0275listener("ngModelChange", function FleetWatchRulesComponent_div_25_label_14_Template_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setField("asset", $event));
    });
    \u0275\u0275elementStart(5, "option", 91);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, FleetWatchRulesComponent_div_25_label_14_option_8_Template, 3, 3, "option", 92);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 5, "smartFleet.rules.asset"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.draft().asset);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", void 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 7, "smartFleet.rules.selectAsset"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.assets());
  }
}
function FleetWatchRulesComponent_div_25_label_15_option_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 91);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const group_r19 = ctx.$implicit;
    \u0275\u0275property("ngValue", group_r19);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", group_r19, " ");
  }
}
function FleetWatchRulesComponent_div_25_label_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 89)(1, "span", 77);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "select", 93);
    \u0275\u0275listener("ngModelChange", function FleetWatchRulesComponent_div_25_label_15_Template_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setField("group", $event));
    });
    \u0275\u0275elementStart(5, "option", 91);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, FleetWatchRulesComponent_div_25_label_15_option_8_Template, 2, 2, "option", 92);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 5, "smartFleet.rules.group"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.draft().group);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", void 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 7, "smartFleet.rules.selectGroup"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.groups());
  }
}
function FleetWatchRulesComponent_div_25_button_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 94);
    \u0275\u0275listener("click", function FleetWatchRulesComponent_div_25_button_24_Template_button_click_0_listener() {
      const check_r21 = \u0275\u0275restoreView(_r20).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectCheck(check_r21.checkType));
    });
    \u0275\u0275elementStart(1, "span", 52);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 95);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const check_r21 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("border-indigo-500", ctx_r1.draft().checkType === check_r21.checkType)("bg-indigo-50", ctx_r1.draft().checkType === check_r21.checkType)("border-stone-200", ctx_r1.draft().checkType !== check_r21.checkType)("hover:border-indigo-300", ctx_r1.draft().checkType !== check_r21.checkType);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 10, "smartFleet.checkType." + check_r21.checkType));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 12, "smartFleet.rules.kind_" + check_r21.kind));
  }
}
function FleetWatchRulesComponent_div_25_div_25_div_4_div_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 108);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\xB7 ", \u0275\u0275pipeBind1(2, 1, "smartFleet.rules.apiPathActive"), "");
  }
}
function FleetWatchRulesComponent_div_25_div_25_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 102)(1, "p", 103);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275template(4, FleetWatchRulesComponent_div_25_div_25_div_4_div_1_span_4_Template, 3, 3, "span", 104);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 105);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 106);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275elementStart(10, "span", 107);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const platePath_r22 = ctx.ngIf;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngClass", ctx_r1.selectedAssetResolvedPath() === "plate" ? "bg-white/80 ring-1 ring-indigo-400 dark:bg-gray-950/60" : "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, "smartFleet.rules.apiPathPlate"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.selectedAssetResolvedPath() === "plate");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.endpointPathLabel(platePath_r22), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 8, "smartFleet.rules.apiRequestParams"), ": ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(platePath_r22.requires.join(", "));
  }
}
function FleetWatchRulesComponent_div_25_div_25_div_4_div_2_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 108);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\xB7 ", \u0275\u0275pipeBind1(2, 1, "smartFleet.rules.apiPathActive"), "");
  }
}
function FleetWatchRulesComponent_div_25_div_25_div_4_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 102)(1, "p", 103);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275template(4, FleetWatchRulesComponent_div_25_div_25_div_4_div_2_span_4_Template, 3, 3, "span", 104);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 105);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 106);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275elementStart(10, "span", 107);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const vinPath_r23 = ctx.ngIf;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngClass", ctx_r1.selectedAssetResolvedPath() === "vin" ? "bg-white/80 ring-1 ring-indigo-400 dark:bg-gray-950/60" : "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, "smartFleet.rules.apiPathVin"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.selectedAssetResolvedPath() === "vin");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.endpointPathLabel(vinPath_r23), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 8, "smartFleet.rules.apiRequestParams"), ": ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(vinPath_r23.requires.join(", "));
  }
}
function FleetWatchRulesComponent_div_25_div_25_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 100);
    \u0275\u0275template(1, FleetWatchRulesComponent_div_25_div_25_div_4_div_1_Template, 12, 10, "div", 101)(2, FleetWatchRulesComponent_div_25_div_25_div_4_div_2_Template, 12, 10, "div", 101);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const check_r24 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", check_r24.endpoints == null ? null : check_r24.endpoints.byPlate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", check_r24.endpoints == null ? null : check_r24.endpoints.byVin);
  }
}
function FleetWatchRulesComponent_div_25_div_25_ng_template_5_p_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 113);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const check_r24 = \u0275\u0275nextContext(3).ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 ", check_r24.featureCode, "");
  }
}
function FleetWatchRulesComponent_div_25_div_25_ng_template_5_p_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 106);
    \u0275\u0275text(1);
    \u0275\u0275template(2, FleetWatchRulesComponent_div_25_div_25_ng_template_5_p_2_span_2_Template, 2, 1, "span", 112);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const check_r24 = \u0275\u0275nextContext(2).ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", check_r24.featureName || check_r24.featureCode, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", check_r24.featureName);
  }
}
function FleetWatchRulesComponent_div_25_div_25_ng_template_5_p_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 114);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementStart(3, "span", 107);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const check_r24 = \u0275\u0275nextContext(2).ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, "smartFleet.rules.apiRequestParams"), ": ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(check_r24.requires.join(", "));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 5, "smartFleet.rules.apiRequestParamsFromAsset"), " ");
  }
}
function FleetWatchRulesComponent_div_25_div_25_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 109);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, FleetWatchRulesComponent_div_25_div_25_ng_template_5_p_2_Template, 3, 2, "p", 110)(3, FleetWatchRulesComponent_div_25_div_25_ng_template_5_p_3_Template, 7, 7, "p", 111);
  }
  if (rf & 2) {
    const check_r24 = \u0275\u0275nextContext().ngIf;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.apiRequestLabel(check_r24), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", check_r24.featureName || check_r24.featureCode);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", check_r24.requires == null ? null : check_r24.requires.length);
  }
}
function FleetWatchRulesComponent_div_25_div_25_p_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 115);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const check_r24 = \u0275\u0275nextContext().ngIf;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, "smartFleet.rules.apiRequestShared", \u0275\u0275pureFunction1(4, _c22, ctx_r1.sharedCheckLabels(check_r24.sharedWith))), " ");
  }
}
function FleetWatchRulesComponent_div_25_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 96)(1, "p", 97);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, FleetWatchRulesComponent_div_25_div_25_div_4_Template, 3, 2, "div", 98)(5, FleetWatchRulesComponent_div_25_div_25_ng_template_5_Template, 4, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(7, FleetWatchRulesComponent_div_25_div_25_p_7_Template, 3, 6, "p", 99);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const check_r24 = ctx.ngIf;
    const singleEndpoint_r25 = \u0275\u0275reference(6);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, "smartFleet.rules.apiRequestTitle"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (check_r24.endpoints == null ? null : check_r24.endpoints.byPlate) || (check_r24.endpoints == null ? null : check_r24.endpoints.byVin))("ngIfElse", singleEndpoint_r25);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", check_r24.sharedWith == null ? null : check_r24.sharedWith.length);
  }
}
function FleetWatchRulesComponent_div_25_div_26_p_7_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 121);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const condition_r26 = \u0275\u0275nextContext(2).ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" (", condition_r26.watchPath, ")");
  }
}
function FleetWatchRulesComponent_div_25_div_26_p_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 114)(1, "span", 119);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275template(6, FleetWatchRulesComponent_div_25_div_26_p_7_span_6_Template, 2, 1, "span", 120);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const condition_r26 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 3, "smartFleet.rules.conditionWatches"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 5, condition_r26.watchLabelKey), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", condition_r26.watchPath);
  }
}
function FleetWatchRulesComponent_div_25_div_26_p_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 106)(1, "span", 119);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const condition_r26 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 2, "smartFleet.rules.conditionOkStatus"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", condition_r26.okStatuses.join(", "), " ");
  }
}
function FleetWatchRulesComponent_div_25_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 116)(1, "p", 117);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 118);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, FleetWatchRulesComponent_div_25_div_26_p_7_Template, 7, 7, "p", 111)(8, FleetWatchRulesComponent_div_25_div_26_p_8_Template, 5, 4, "p", 110);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const condition_r26 = ctx.ngIf;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, "smartFleet.rules.conditionTitle"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 6, condition_r26.summaryKey), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", condition_r26.watchLabelKey);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", condition_r26.okStatuses == null ? null : condition_r26.okStatuses.length);
  }
}
function FleetWatchRulesComponent_div_25_button_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 122);
    \u0275\u0275listener("click", function FleetWatchRulesComponent_div_25_button_37_Template_button_click_0_listener() {
      const frequency_r28 = \u0275\u0275restoreView(_r27).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setFrequency(frequency_r28));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const frequency_r28 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("bg-stone-900", ctx_r1.draft().frequency === frequency_r28)("text-white", ctx_r1.draft().frequency === frequency_r28)("text-stone-600", ctx_r1.draft().frequency !== frequency_r28)("hover:bg-stone-100", ctx_r1.draft().frequency !== frequency_r28);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 9, "smartFleet.frequency." + frequency_r28), " ");
  }
}
function FleetWatchRulesComponent_div_25_label_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 123)(1, "span", 77);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 124);
    \u0275\u0275listener("ngModelChange", function FleetWatchRulesComponent_div_25_label_38_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r29);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setField("intervalDays", $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 125);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "smartFleet.rules.intervalDaysLabel"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.draft().intervalDays);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 5, "smartFleet.rules.intervalDaysHint"));
  }
}
function FleetWatchRulesComponent_div_25_label_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 89)(1, "span", 77);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 126);
    \u0275\u0275listener("ngModelChange", function FleetWatchRulesComponent_div_25_label_39_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r30);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setField("thresholdDays", $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 125);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, ctx_r1.thresholdLabelKey()));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.draft().thresholdDays);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 5, "smartFleet.rules.thresholdHintSpecific"));
  }
}
function FleetWatchRulesComponent_div_25_div_40_li_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 129)(1, "span", 130);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const run_r31 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", run_r31.index, ".");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 2, run_r31.at, "medium"), " ");
  }
}
function FleetWatchRulesComponent_div_25_div_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 81)(1, "h3", 52);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ol", 127);
    \u0275\u0275template(5, FleetWatchRulesComponent_div_25_div_40_li_5_Template, 5, 5, "li", 128);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "smartFleet.rules.draftNextRuns"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.draftNextRuns());
  }
}
function FleetWatchRulesComponent_div_25_button_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 131);
    \u0275\u0275listener("click", function FleetWatchRulesComponent_div_25_button_46_Template_button_click_0_listener() {
      const channel_r33 = \u0275\u0275restoreView(_r32).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleChannel(channel_r33));
    });
    \u0275\u0275elementStart(1, "span", 132);
    \u0275\u0275element(2, "fleet-channel-icon", 133);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const channel_r33 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("border-indigo-600", ctx_r1.isChannelSelected(channel_r33))("bg-indigo-600", ctx_r1.isChannelSelected(channel_r33))("text-white", ctx_r1.isChannelSelected(channel_r33))("border-stone-200", !ctx_r1.isChannelSelected(channel_r33))("bg-white", !ctx_r1.isChannelSelected(channel_r33))("text-stone-800", !ctx_r1.isChannelSelected(channel_r33))("hover:border-stone-300", !ctx_r1.isChannelSelected(channel_r33))("dark:border-gray-700", !ctx_r1.isChannelSelected(channel_r33))("dark:bg-gray-900", !ctx_r1.isChannelSelected(channel_r33))("dark:text-stone-100", !ctx_r1.isChannelSelected(channel_r33));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.channelTone(channel_r33, ctx_r1.isChannelSelected(channel_r33)));
    \u0275\u0275advance();
    \u0275\u0275property("channel", channel_r33);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 23, "smartFleet.channel." + channel_r33), " ");
  }
}
function FleetWatchRulesComponent_div_25_label_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 89)(1, "span", 77);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 134);
    \u0275\u0275listener("ngModelChange", function FleetWatchRulesComponent_div_25_label_48_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r34);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setField("emailRecipients", $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 125);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "smartFleet.rules.emailRecipients"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.draft().emailRecipients);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 5, "smartFleet.rules.emailHint"));
  }
}
function FleetWatchRulesComponent_div_25_label_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 89)(1, "span", 77);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 135);
    \u0275\u0275listener("ngModelChange", function FleetWatchRulesComponent_div_25_label_49_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r35);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setField("smsRecipients", $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 125);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "smartFleet.rules.smsRecipients"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.draft().smsRecipients);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 5, "smartFleet.rules.smsHint"));
  }
}
function FleetWatchRulesComponent_div_25_label_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 89)(1, "span", 77);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 136);
    \u0275\u0275listener("ngModelChange", function FleetWatchRulesComponent_div_25_label_50_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r36);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setField("whatsappRecipients", $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 125);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "smartFleet.rules.whatsappRecipients"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.draft().whatsappRecipients);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 5, "smartFleet.rules.whatsappHint"));
  }
}
function FleetWatchRulesComponent_div_25_label_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 89)(1, "span", 77);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 137);
    \u0275\u0275listener("ngModelChange", function FleetWatchRulesComponent_div_25_label_51_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r37);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setField("webhookUrl", $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 125);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementStart(8, "a", 138);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 5, "smartFleet.rules.webhookUrl"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.draft().webhookUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 7, "smartFleet.rules.webhookHint"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("href", ctx_r1.webhookDocsUrl, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 9, "smartFleet.rules.webhookDocs"));
  }
}
function FleetWatchRulesComponent_div_25_div_52_mat_spinner_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 143);
  }
}
function FleetWatchRulesComponent_div_25_div_52_ng_container_8_div_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 147)(1, "span", 107);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const entry_r38 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.endpointLabelForFeature(entry_r38.featureCode));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("", entry_r38.checksPerMonth, " \xD7 ", entry_r38.pricePerCheck, " = ", entry_r38.creditsPerAsset, "");
  }
}
function FleetWatchRulesComponent_div_25_div_52_ng_container_8_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 123);
    \u0275\u0275template(1, FleetWatchRulesComponent_div_25_div_52_ng_container_8_div_7_div_1_Template, 5, 4, "div", 146);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r39 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", data_r39.rule.breakdown);
  }
}
function FleetWatchRulesComponent_div_25_div_52_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p", 144);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 145);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, FleetWatchRulesComponent_div_25_div_52_ng_container_8_div_7_Template, 2, 1, "div", 79);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const data_r39 = ctx.ngIf;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 3, "smartFleet.rules.estimateSummary", \u0275\u0275pureFunction2(9, _c32, data_r39.scope.assetCount, data_r39.rule.totalCredits)), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 6, "smartFleet.rules.estimateFleetTotal", \u0275\u0275pureFunction2(12, _c42, data_r39.currentFleetMonthly.totalCredits, data_r39.projectedFleetMonthly)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", data_r39.rule.breakdown.length);
  }
}
function FleetWatchRulesComponent_div_25_div_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 139)(1, "div", 140)(2, "mat-icon", 141);
    \u0275\u0275text(3, "calculate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 52);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, FleetWatchRulesComponent_div_25_div_52_mat_spinner_7_Template, 1, 0, "mat-spinner", 142);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, FleetWatchRulesComponent_div_25_div_52_ng_container_8_Template, 8, 15, "ng-container", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 3, "smartFleet.rules.estimateTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.isEstimating());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.estimate());
  }
}
function FleetWatchRulesComponent_div_25_mat_spinner_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 148);
  }
}
function FleetWatchRulesComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "h2", 24);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 66)(5, "h3", 52);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 67);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 68);
    \u0275\u0275template(12, FleetWatchRulesComponent_div_25_button_12_Template, 3, 11, "button", 69);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 70);
    \u0275\u0275template(14, FleetWatchRulesComponent_div_25_label_14_Template, 9, 9, "label", 71)(15, FleetWatchRulesComponent_div_25_label_15_Template, 9, 9, "label", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 72)(17, "h3", 52);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 67);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 73);
    \u0275\u0275template(24, FleetWatchRulesComponent_div_25_button_24_Template, 7, 14, "button", 74);
    \u0275\u0275elementEnd();
    \u0275\u0275template(25, FleetWatchRulesComponent_div_25_div_25_Template, 8, 6, "div", 75)(26, FleetWatchRulesComponent_div_25_div_26_Template, 9, 8, "div", 76);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 72)(28, "h3", 52);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 70)(32, "div")(33, "span", 77);
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 68);
    \u0275\u0275template(37, FleetWatchRulesComponent_div_25_button_37_Template, 3, 11, "button", 78);
    \u0275\u0275elementEnd();
    \u0275\u0275template(38, FleetWatchRulesComponent_div_25_label_38_Template, 8, 7, "label", 79);
    \u0275\u0275elementEnd();
    \u0275\u0275template(39, FleetWatchRulesComponent_div_25_label_39_Template, 8, 7, "label", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275template(40, FleetWatchRulesComponent_div_25_div_40_Template, 6, 4, "div", 80);
    \u0275\u0275elementStart(41, "div", 81)(42, "span", 77);
    \u0275\u0275text(43);
    \u0275\u0275pipe(44, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 82);
    \u0275\u0275template(46, FleetWatchRulesComponent_div_25_button_46_Template, 5, 25, "button", 83);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div", 70);
    \u0275\u0275template(48, FleetWatchRulesComponent_div_25_label_48_Template, 8, 7, "label", 71)(49, FleetWatchRulesComponent_div_25_label_49_Template, 8, 7, "label", 71)(50, FleetWatchRulesComponent_div_25_label_50_Template, 8, 7, "label", 71)(51, FleetWatchRulesComponent_div_25_label_51_Template, 11, 11, "label", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275template(52, FleetWatchRulesComponent_div_25_div_52_Template, 9, 5, "div", 84);
    \u0275\u0275elementStart(53, "div", 85)(54, "button", 86);
    \u0275\u0275listener("click", function FleetWatchRulesComponent_div_25_Template_button_click_54_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275template(55, FleetWatchRulesComponent_div_25_mat_spinner_55_Template, 1, 0, "mat-spinner", 87);
    \u0275\u0275text(56);
    \u0275\u0275pipe(57, "transloco");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_11_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 27, ctx_r1.formTitleKey()), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 29, "smartFleet.rules.stepWho"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 31, "smartFleet.rules.scope"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.scopes);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.draft().scope === "asset");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.draft().scope === "group");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 33, "smartFleet.rules.stepWhat"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 35, "smartFleet.rules.checkType"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.availableChecks());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedCheck());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_11_0 = ctx_r1.selectedCheck()) == null ? null : tmp_11_0.condition);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(30, 37, "smartFleet.rules.stepWhen"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(35, 39, "smartFleet.rules.frequency"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.frequencies);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.draft().frequency === "custom");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.needsThreshold());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.draft().checkType);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(44, 41, "smartFleet.rules.channels"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.channelOptions);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.isChannelSelected("email"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isChannelSelected("sms"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isChannelSelected("whatsapp"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isChannelSelected("webhook"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.draft().checkType);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r1.canSave() || ctx_r1.isSaving());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isSaving());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(57, 43, "smartFleet.rules.save"), " ");
  }
}
function FleetWatchRulesComponent_div_26_span_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 162);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const channel_r41 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "smartFleet.channel." + channel_r41));
  }
}
function FleetWatchRulesComponent_div_26_p_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 163);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r42 = ctx.ngIf;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(2, 2, "smartFleet.rules.affectsCount", \u0275\u0275pureFunction1(8, _c02, data_r42.assetCount)), " \xB7 ", \u0275\u0275pipeBind2(3, 5, "smartFleet.rules.intervalNote", \u0275\u0275pureFunction1(10, _c62, ctx_r1.intervalLabel(data_r42.intervalMs))), " ");
  }
}
function FleetWatchRulesComponent_div_26_div_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 164);
    \u0275\u0275element(1, "mat-spinner", 165);
    \u0275\u0275elementEnd();
  }
}
function FleetWatchRulesComponent_div_26_ol_52_li_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 168)(1, "span", 169);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 170);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const run_r43 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(run_r43.index);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 2, run_r43.at, "medium"));
  }
}
function FleetWatchRulesComponent_div_26_ol_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ol", 166);
    \u0275\u0275template(1, FleetWatchRulesComponent_div_26_ol_52_li_1_Template, 6, 5, "li", 167);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.schedule().nextRuns);
  }
}
function FleetWatchRulesComponent_div_26_p_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 171);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "smartFleet.rules.noUpcoming"), " ");
  }
}
function FleetWatchRulesComponent_div_26_div_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 164);
    \u0275\u0275element(1, "mat-spinner", 165);
    \u0275\u0275elementEnd();
  }
}
function FleetWatchRulesComponent_div_26_ul_59_li_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 176);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const asset_r44 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(asset_r44.nickname);
  }
}
function FleetWatchRulesComponent_div_26_ul_59_li_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 173)(1, "a", 174);
    \u0275\u0275text(2);
    \u0275\u0275template(3, FleetWatchRulesComponent_div_26_ul_59_li_1_span_3_Template, 2, 1, "span", 175);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 95);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const asset_r44 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(9, _c7, asset_r44.assetId));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", asset_r44.plate || asset_r44.nickname || asset_r44.assetId, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", asset_r44.nickname && asset_r44.plate);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(asset_r44.nextCheckAt ? \u0275\u0275pipeBind2(6, 4, asset_r44.nextCheckAt, "short") : \u0275\u0275pipeBind1(7, 7, "smartFleet.rules.dueSoon"));
  }
}
function FleetWatchRulesComponent_div_26_ul_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 166);
    \u0275\u0275template(1, FleetWatchRulesComponent_div_26_ul_59_li_1_Template, 8, 11, "li", 172);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.schedule().upcomingAssets);
  }
}
function FleetWatchRulesComponent_div_26_p_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 171);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "smartFleet.rules.noUpcoming"), " ");
  }
}
function FleetWatchRulesComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 4)(2, "div", 7)(3, "h2", 24);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 9);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 149)(10, "button", 150);
    \u0275\u0275listener("click", function FleetWatchRulesComponent_div_26_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r40);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editFromDetail());
    });
    \u0275\u0275elementStart(11, "mat-icon", 151);
    \u0275\u0275text(12, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 152);
    \u0275\u0275pipe(16, "transloco");
    \u0275\u0275listener("click", function FleetWatchRulesComponent_div_26_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r40);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDetail());
    });
    \u0275\u0275elementStart(17, "mat-icon");
    \u0275\u0275text(18, "close");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(19, "div", 153)(20, "div")(21, "span", 77);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "p", 154);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div")(27, "span", 77);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "p", 154);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div")(33, "span", 77);
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "p", 155);
    \u0275\u0275template(37, FleetWatchRulesComponent_div_26_span_37_Template, 3, 3, "span", 156);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div")(39, "span", 77);
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "p", 154);
    \u0275\u0275text(43);
    \u0275\u0275pipe(44, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(45, FleetWatchRulesComponent_div_26_p_45_Template, 4, 12, "p", 157);
    \u0275\u0275elementStart(46, "div", 158)(47, "div")(48, "h3", 52);
    \u0275\u0275text(49);
    \u0275\u0275pipe(50, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(51, FleetWatchRulesComponent_div_26_div_51_Template, 2, 0, "div", 159)(52, FleetWatchRulesComponent_div_26_ol_52_Template, 2, 1, "ol", 160)(53, FleetWatchRulesComponent_div_26_p_53_Template, 3, 3, "p", 161);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "div")(55, "h3", 52);
    \u0275\u0275text(56);
    \u0275\u0275pipe(57, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(58, FleetWatchRulesComponent_div_26_div_58_Template, 2, 0, "div", 159)(59, FleetWatchRulesComponent_div_26_ul_59_Template, 2, 1, "ul", 160)(60, FleetWatchRulesComponent_div_26_p_60_Template, 3, 3, "p", 161);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_17_0;
    let tmp_18_0;
    let tmp_21_0;
    let tmp_22_0;
    const rule_r45 = ctx.ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 23, "smartFleet.rules.details"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate3(" ", \u0275\u0275pipeBind1(8, 25, "smartFleet.checkType." + rule_r45.checkType), " \xB7 ", ctx_r1.scopeLabel(rule_r45), " \xB7 ", ctx_r1.frequencyLabel(rule_r45), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 27, "smartFleet.rules.edit"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(16, 29, "smartFleet.cancel"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 31, "smartFleet.rules.scope"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.scopeLabel(rule_r45));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(29, 33, "smartFleet.rules.frequency"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.frequencyLabel(rule_r45), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(35, 35, "smartFleet.rules.channels"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", rule_r45.channels || \u0275\u0275pureFunction0(46, _c52));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(41, 37, "smartFleet.rules.lastTriggered"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", rule_r45.lastTriggeredAt ? \u0275\u0275pipeBind2(44, 39, rule_r45.lastTriggeredAt, "medium") : "\u2014", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.schedule());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(50, 42, "smartFleet.rules.nextRuns"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.isLoadingSchedule());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isLoadingSchedule() && ((tmp_17_0 = ctx_r1.schedule()) == null ? null : tmp_17_0.nextRuns == null ? null : tmp_17_0.nextRuns.length));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isLoadingSchedule() && !((tmp_18_0 = ctx_r1.schedule()) == null ? null : tmp_18_0.nextRuns == null ? null : tmp_18_0.nextRuns.length));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(57, 44, "smartFleet.rules.upcomingVehicles"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.isLoadingSchedule());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isLoadingSchedule() && ((tmp_21_0 = ctx_r1.schedule()) == null ? null : tmp_21_0.upcomingAssets == null ? null : tmp_21_0.upcomingAssets.length));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isLoadingSchedule() && !((tmp_22_0 = ctx_r1.schedule()) == null ? null : tmp_22_0.upcomingAssets == null ? null : tmp_22_0.upcomingAssets.length));
  }
}
function FleetWatchRulesComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 177);
    \u0275\u0275element(1, "mat-spinner", 178);
    \u0275\u0275elementEnd();
  }
}
function FleetWatchRulesComponent_p_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 179);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "smartFleet.rules.empty"), " ");
  }
}
function FleetWatchRulesComponent_table_30_tr_20_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 196);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rule_r47 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, "smartFleet.rules.thresholdSummary", \u0275\u0275pureFunction1(4, _c10, rule_r47.thresholdDays)));
  }
}
function FleetWatchRulesComponent_table_30_tr_20_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 197);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const channel_r48 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "smartFleet.channel." + channel_r48));
  }
}
function FleetWatchRulesComponent_table_30_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r46 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 186);
    \u0275\u0275listener("click", function FleetWatchRulesComponent_table_30_tr_20_Template_tr_click_0_listener() {
      const rule_r47 = \u0275\u0275restoreView(_r46).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openDetail(rule_r47));
    });
    \u0275\u0275elementStart(1, "td", 183)(2, "span", 187);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, FleetWatchRulesComponent_table_30_tr_20_span_5_Template, 3, 6, "span", 188);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 183)(7, "a", 189);
    \u0275\u0275listener("click", function FleetWatchRulesComponent_table_30_tr_20_Template_a_click_7_listener($event) {
      \u0275\u0275restoreView(_r46);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td", 190);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 183);
    \u0275\u0275template(12, FleetWatchRulesComponent_table_30_tr_20_span_12_Template, 3, 3, "span", 191);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 192);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 183)(17, "div", 193)(18, "button", 152);
    \u0275\u0275pipe(19, "transloco");
    \u0275\u0275listener("click", function FleetWatchRulesComponent_table_30_tr_20_Template_button_click_18_listener($event) {
      const rule_r47 = \u0275\u0275restoreView(_r46).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.openTarget(ctx_r1.targetQuery(rule_r47));
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(20, "mat-icon", 194);
    \u0275\u0275text(21, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "button", 152);
    \u0275\u0275pipe(23, "transloco");
    \u0275\u0275listener("click", function FleetWatchRulesComponent_table_30_tr_20_Template_button_click_22_listener($event) {
      const rule_r47 = \u0275\u0275restoreView(_r46).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleRule(rule_r47, $event));
    });
    \u0275\u0275elementStart(24, "mat-icon", 194);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "button", 195);
    \u0275\u0275pipe(27, "transloco");
    \u0275\u0275listener("click", function FleetWatchRulesComponent_table_30_tr_20_Template_button_click_26_listener($event) {
      const rule_r47 = \u0275\u0275restoreView(_r46).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteRule(rule_r47, $event));
    });
    \u0275\u0275elementStart(28, "mat-icon", 194);
    \u0275\u0275text(29, "delete");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const rule_r47 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(24, _c8, ((tmp_3_0 = ctx_r1.detailRule()) == null ? null : tmp_3_0._id) === rule_r47._id, !rule_r47.isActive));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 13, "smartFleet.checkType." + rule_r47.checkType));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", rule_r47.thresholdDays);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(27, _c9))("queryParams", ctx_r1.targetQuery(rule_r47));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.scopeLabel(rule_r47));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.frequencyLabel(rule_r47), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", rule_r47.channels);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", rule_r47.lastTriggeredAt ? \u0275\u0275pipeBind2(15, 15, rule_r47.lastTriggeredAt, "short") : "\u2014", " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(19, 18, "smartFleet.rules.edit"));
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(23, 20, rule_r47.isActive ? "smartFleet.rules.pause" : "smartFleet.rules.resume"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(rule_r47.isActive ? "pause" : "play_arrow");
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(27, 22, "smartFleet.rules.delete"));
  }
}
function FleetWatchRulesComponent_table_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 180)(1, "thead", 181)(2, "tr", 182)(3, "th", 183);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 183);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 183);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 183);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 183);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "th", 183);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "tbody", 184);
    \u0275\u0275template(20, FleetWatchRulesComponent_table_30_tr_20_Template, 30, 28, "tr", 185);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 6, "smartFleet.rules.check"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 8, "smartFleet.rules.scope"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 10, "smartFleet.rules.frequency"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 12, "smartFleet.rules.channels"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 14, "smartFleet.rules.lastTriggered"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.rules());
  }
}
var FLEET_WEBHOOK_DOCS_URL = "https://docs.verifik.co/resources/smart-fleet-webhooks";
var EMPTY_DRAFT = {
  scope: "fleet",
  frequency: "weekly",
  intervalDays: 3,
  channels: ["email", "inApp"],
  emailRecipients: "",
  smsRecipients: "",
  whatsappRecipients: ""
};
var FREQUENCY_DAYS = {
  daily: 1,
  weekly: 7,
  biweekly: 14,
  monthly: 30
};
var MS_PER_DAY = 24 * 60 * 60 * 1e3;
var FleetWatchRulesComponent = class _FleetWatchRulesComponent {
  constructor() {
    this._fleetService = inject(SmartFleetService);
    this._authGate = inject(AuthRequiredGateService);
    this._transloco = inject(TranslocoService);
    this._snackBar = inject(MatSnackBar);
    this._confirm = inject(FuseConfirmationService);
    this._route = inject(ActivatedRoute);
    this._router = inject(Router);
    this._destroyRef = inject(DestroyRef);
    this.rules = this._fleetService.watchRules;
    this.isLoading = this._fleetService.isLoadingRules;
    this.availableChecks = signal([]);
    this.assets = signal([]);
    this.savedGroups = signal([]);
    this.groups = computed(() => {
      const names = new Set(this.savedGroups().map((group) => group.name));
      for (const asset of this.assets()) {
        if (asset.group)
          names.add(asset.group);
      }
      return [...names].sort((left, right) => left.localeCompare(right));
    });
    this.frequencies = [
      "daily",
      "weekly",
      "biweekly",
      "monthly",
      "custom"
    ];
    this.channelOptions = ["email", "webhook", "inApp", "sms", "whatsapp"];
    this.scopes = ["fleet", "group", "asset"];
    this.webhookDocsUrl = FLEET_WEBHOOK_DOCS_URL;
    this.showForm = signal(false);
    this.composeAssetId = signal(null);
    this.composeGroup = signal(null);
    this.composeFleet = signal(false);
    this.composeLibrary = signal(false);
    this.composing = computed(() => Boolean(this.composeAssetId() || this.composeGroup() || this.composeFleet() || this.composeLibrary()));
    this.assigningRuleId = signal(null);
    this.pickKind = signal(null);
    this.isSaving = signal(false);
    this.editingRuleId = signal(null);
    this.draft = signal(__spreadValues({}, EMPTY_DRAFT));
    this.estimate = signal(null);
    this.isEstimating = signal(false);
    this.detailRule = signal(null);
    this.schedule = signal(null);
    this.isLoadingSchedule = signal(false);
    this.selectedCheck = computed(() => this.availableChecks().find((check) => check.checkType === this.draft().checkType));
    this.selectedAssetResolvedPath = computed(() => {
      const draft = this.draft();
      if (draft.scope !== "asset" || !draft.asset)
        return null;
      const asset = this.assets().find((entry) => entry._id === draft.asset);
      if (!asset)
        return null;
      const hasPlatePath = Boolean(asset.plate?.trim() && asset.ownerDocumentType?.trim() && asset.ownerDocumentNumber?.trim());
      if (hasPlatePath)
        return "plate";
      if (asset.vin?.trim())
        return "vin";
      return null;
    });
    this.needsThreshold = computed(() => this.selectedCheck()?.kind === "threshold");
    this.thresholdLabelKey = computed(() => {
      const checkType = this.selectedCheck()?.checkType;
      if (checkType === "soat")
        return "smartFleet.rules.thresholdDaysSoat";
      if (checkType === "rtm")
        return "smartFleet.rules.thresholdDaysRtm";
      return "smartFleet.rules.thresholdDays";
    });
    this.formTitleKey = computed(() => this.editingRuleId() ? "smartFleet.rules.editRule" : "smartFleet.rules.addRule");
    this.canSave = computed(() => {
      const draft = this.draft();
      if (!draft.checkType)
        return false;
      if (draft.scope === "asset" && !draft.asset)
        return false;
      if (draft.scope === "group" && !draft.group)
        return false;
      if (draft.frequency === "custom") {
        const days = Number(draft.intervalDays);
        if (!Number.isFinite(days) || days < 1 || days > 90)
          return false;
      }
      return true;
    });
    this.draftNextRuns = computed(() => {
      const draft = this.draft();
      const presetDays = draft.frequency === "custom" ? null : FREQUENCY_DAYS[draft.frequency];
      const days = draft.frequency === "custom" ? Math.max(1, Number(draft.intervalDays) || 7) : presetDays ?? 7;
      const intervalMs = days * MS_PER_DAY;
      const anchor = Date.now();
      return Array.from({ length: 10 }, (_, index) => ({
        index: index + 1,
        at: new Date(anchor + index * intervalMs)
      }));
    });
  }
  groupColor(name) {
    return this.savedGroups().find((group) => group.name === name)?.color || FLEET_GROUP_COLOR_DEFAULT;
  }
  groupIcon(name) {
    return this.savedGroups().find((group) => group.name === name)?.icon || FLEET_GROUP_ICON_DEFAULT;
  }
  channelTone(channel, selected) {
    return selected ? "bg-white/20 text-white" : fleetChannelTone(channel);
  }
  ngOnInit() {
    this._route.queryParamMap.pipe(takeUntilDestroyed(this._destroyRef)).subscribe((params) => {
      const editing = Boolean(params.get("edit"));
      this.composeAssetId.set(editing ? null : params.get("asset"));
      this.composeGroup.set(editing || params.get("asset") ? null : params.get("group"));
      const bare = !editing && !params.get("asset") && !params.get("group");
      this.composeFleet.set(bare && params.get("scope") === "fleet");
      this.composeLibrary.set(bare && params.get("scope") === "library");
      if (this.composing())
        this.showForm.set(false);
    });
    this._authGate.runWithAuthOrDialog({
      onAuthenticated: () => this._load(),
      panelClass: "auth-required-dialog"
    });
  }
  toggleForm() {
    this.closeDetail();
    this.showForm.update((open) => !open);
    if (!this.showForm()) {
      this._resetForm();
    }
  }
  openDetail(rule) {
    this.showForm.set(false);
    this._resetForm();
    this.detailRule.set(rule);
    this.schedule.set(null);
    this.isLoadingSchedule.set(true);
    this._fleetService.getWatchRuleSchedule(rule._id).subscribe({
      next: (response) => {
        this.schedule.set(response.data ?? null);
        this.isLoadingSchedule.set(false);
      },
      error: (err) => {
        this.isLoadingSchedule.set(false);
        console.error("[SmartFleet] getWatchRuleSchedule error", err);
        this._snackBar.open(this._transloco.translate("smartFleet.rules.scheduleFailed"), void 0, { duration: 5e3 });
      }
    });
  }
  closeDetail() {
    this.detailRule.set(null);
    this.schedule.set(null);
    this.isLoadingSchedule.set(false);
  }
  editFromDetail() {
    const rule = this.detailRule();
    if (!rule)
      return;
    this.closeDetail();
    this.openTarget(this.targetQuery(rule));
  }
  /** Fleet and unassigned open at once. A vehicle or a group first shows that list. */
  choosePick(kind) {
    if (kind === "fleet") {
      this.openTarget({ scope: "fleet" });
      return;
    }
    if (kind === "library") {
      this.openTarget({ scope: "library" });
      return;
    }
    this.pickKind.set(this.pickKind() === kind ? null : kind);
  }
  /** Same three targets as the vehicles step: one vehicle, one group, or the whole fleet. */
  openTarget(query) {
    this.showForm.set(false);
    this._router.navigate(["/smart-fleet/watch-rules"], { queryParams: query });
  }
  clearTarget() {
    this.showForm.set(false);
    this._router.navigate(["/smart-fleet/watch-rules"]);
  }
  targetQuery(rule) {
    const assetId = typeof rule.asset === "string" ? rule.asset : rule.asset?._id;
    if (rule.unassigned)
      return { scope: "library" };
    if (assetId)
      return { asset: assetId };
    if (rule.group)
      return { group: rule.group };
    return { scope: "fleet" };
  }
  unassignedRules() {
    return this.rules().filter((rule) => rule.unassigned);
  }
  vehiclesForRule(rule) {
    const check = this.availableChecks().find((entry) => entry.checkType === rule.checkType);
    if (!check)
      return [];
    return this.assets().filter((asset) => fleetAssetSupportsCheck(check, asset));
  }
  assignRule(rule, assetId, event) {
    event.stopPropagation();
    if (!rule._id || !assetId)
      return;
    this.assigningRuleId.set(rule._id);
    this._fleetService.updateWatchRule(rule._id, { asset: assetId, group: null, unassigned: false }).subscribe({
      next: () => {
        this.assigningRuleId.set(null);
        this._snackBar.open(this._transloco.translate("smartFleet.rules.assigned"), void 0, {
          duration: 3e3
        });
        this._loadRules();
      },
      error: (err) => {
        this.assigningRuleId.set(null);
        console.error("[SmartFleet] assign rule error", err);
        this._snackBar.open(this._transloco.translate("smartFleet.rules.assignFailed"), void 0, {
          duration: 5e3
        });
      }
    });
  }
  groupSize(name) {
    return this.assets().filter((asset) => asset.group === name).length;
  }
  intervalLabel(intervalMs) {
    if (!intervalMs)
      return "\u2014";
    const hours = Math.round(intervalMs / (60 * 60 * 1e3));
    if (hours < 48) {
      return this._transloco.translate("smartFleet.rules.intervalHours", { hours });
    }
    const days = Math.round(hours / 24);
    return this._transloco.translate("smartFleet.rules.intervalDays", { days });
  }
  _resetForm() {
    this.draft.set(__spreadValues({}, EMPTY_DRAFT));
    this.editingRuleId.set(null);
    this.estimate.set(null);
  }
  setScope(scope) {
    this.draft.update((draft) => __spreadProps(__spreadValues({}, draft), { scope, asset: void 0, group: void 0 }));
    this._refreshEstimate();
  }
  selectCheck(checkType) {
    const definition = this.availableChecks().find((check) => check.checkType === checkType);
    this.draft.update((draft) => __spreadProps(__spreadValues({}, draft), {
      checkType,
      thresholdDays: definition?.defaultThresholdDays ?? void 0
    }));
    this._refreshEstimate();
  }
  setFrequency(frequency) {
    this.draft.update((draft) => __spreadProps(__spreadValues({}, draft), {
      frequency,
      intervalDays: frequency === "custom" ? draft.intervalDays || 3 : draft.intervalDays
    }));
    this._refreshEstimate();
  }
  setField(field, value) {
    this.draft.update((draft) => __spreadProps(__spreadValues({}, draft), { [field]: value }));
    if (field === "asset" || field === "group" || field === "intervalDays") {
      this._refreshEstimate();
    }
  }
  apiRequestLabel(check) {
    if (!check?.url)
      return check?.featureCode || "\u2014";
    return `${(check.method || "GET").toUpperCase()} ${check.url}`;
  }
  endpointPathLabel(path) {
    if (!path?.url)
      return path?.featureCode || "\u2014";
    return `${(path.method || "GET").toUpperCase()} ${path.url}`;
  }
  endpointLabelForFeature(featureCode) {
    if (!featureCode)
      return "\u2014";
    const check = this.availableChecks().find((entry) => entry.featureCode === featureCode);
    const label = this.apiRequestLabel(check);
    return label === "\u2014" ? featureCode : label;
  }
  sharedCheckLabels(types) {
    if (!types?.length)
      return "";
    return types.map((type) => this._transloco.translate(`smartFleet.checkType.${type}`)).join(", ");
  }
  frequencyLabel(rule) {
    const frequency = rule.frequency || "weekly";
    const base = this._transloco.translate(`smartFleet.frequency.${frequency}`);
    if (frequency === "custom" && rule.intervalDays) {
      return this._transloco.translate("smartFleet.rules.customFrequencySummary", {
        days: rule.intervalDays
      });
    }
    return base;
  }
  toggleChannel(channel) {
    this.draft.update((draft) => __spreadProps(__spreadValues({}, draft), {
      channels: draft.channels.includes(channel) ? draft.channels.filter((entry) => entry !== channel) : [...draft.channels, channel]
    }));
  }
  isChannelSelected(channel) {
    return this.draft().channels.includes(channel);
  }
  startEdit(rule, event) {
    event?.stopPropagation();
    this.closeDetail();
    const assetId = typeof rule.asset === "string" ? rule.asset : rule.asset?._id || void 0;
    this.editingRuleId.set(rule._id);
    this.draft.set({
      scope: assetId ? "asset" : rule.group ? "group" : "fleet",
      asset: assetId,
      group: rule.group || void 0,
      checkType: rule.checkType,
      frequency: rule.frequency || "weekly",
      intervalDays: rule.intervalDays || 3,
      thresholdDays: rule.thresholdDays,
      channels: [...rule.channels || ["email", "inApp"]],
      emailRecipients: (rule.emailRecipients || []).join(", "),
      webhookUrl: rule.webhookUrl || void 0,
      smsRecipients: (rule.smsRecipients || []).join(", "),
      whatsappRecipients: (rule.whatsappRecipients || []).join(", ")
    });
    this.showForm.set(true);
    this._refreshEstimate();
  }
  save() {
    if (!this.canSave() || this.isSaving())
      return;
    const draft = this.draft();
    const editingId = this.editingRuleId();
    const detailId = this.detailRule()?._id;
    this.isSaving.set(true);
    const rule = __spreadProps(__spreadValues({
      checkType: draft.checkType,
      frequency: draft.frequency,
      channels: draft.channels,
      asset: draft.scope === "asset" ? draft.asset : null,
      group: draft.scope === "group" ? draft.group : null,
      intervalDays: draft.frequency === "custom" ? Number(draft.intervalDays) : null
    }, this.needsThreshold() && draft.thresholdDays !== void 0 ? { thresholdDays: Number(draft.thresholdDays) } : {}), {
      webhookUrl: draft.webhookUrl || null,
      emailRecipients: draft.emailRecipients ? draft.emailRecipients.split(",").map((value) => value.trim()).filter(Boolean) : [],
      smsRecipients: draft.channels.includes("sms") ? parseFleetPhones(draft.smsRecipients) : [],
      whatsappRecipients: draft.channels.includes("whatsapp") ? parseFleetPhones(draft.whatsappRecipients) : []
    });
    const request$ = editingId ? this._fleetService.updateWatchRule(editingId, rule) : this._fleetService.createWatchRule(rule);
    request$.subscribe({
      next: (response) => {
        this.isSaving.set(false);
        this.showForm.set(false);
        this._resetForm();
        this._snackBar.open(this._transloco.translate(editingId ? "smartFleet.rules.updated" : "smartFleet.rules.created"), void 0, { duration: 3e3 });
        this._loadRules(() => {
          const savedId = editingId || response.data?._id;
          if (detailId && savedId && detailId === savedId) {
            const refreshed = this.rules().find((entry) => entry._id === savedId);
            if (refreshed)
              this.openDetail(refreshed);
          }
        });
      },
      error: (err) => {
        this.isSaving.set(false);
        this._reportFailure(editingId ? "smartFleet.rules.updateFailed" : "smartFleet.rules.createFailed", err);
      }
    });
  }
  toggleRule(rule, event) {
    event?.stopPropagation();
    this._fleetService.updateWatchRule(rule._id, { isActive: !rule.isActive }).subscribe({
      next: () => {
        this._loadRules();
        if (this.detailRule()?._id === rule._id) {
          this.openDetail(__spreadProps(__spreadValues({}, rule), { isActive: !rule.isActive }));
        }
      },
      error: (err) => this._reportFailure("smartFleet.rules.updateFailed", err)
    });
  }
  deleteRule(rule, event) {
    return __async(this, null, function* () {
      event?.stopPropagation();
      const confirmed = yield firstValueFrom(this._confirm.open({
        title: this._transloco.translate("smartFleet.rules.deleteTitle"),
        message: this._transloco.translate("smartFleet.rules.deleteConfirmation", {
          name: rule.name || rule.checkType
        }),
        actions: {
          confirm: {
            label: this._transloco.translate("smartFleet.rules.deleteConfirm")
          },
          cancel: { label: this._transloco.translate("smartFleet.cancel") }
        }
      }).afterClosed());
      if (confirmed !== "confirmed")
        return;
      this._fleetService.deleteWatchRule(rule._id).subscribe({
        next: () => {
          if (this.detailRule()?._id === rule._id)
            this.closeDetail();
          this._loadRules();
        },
        error: (err) => this._reportFailure("smartFleet.rules.deleteFailed", err)
      });
    });
  }
  scopeLabel(rule) {
    if (rule.unassigned)
      return this._transloco.translate("smartFleet.rules.scopeUnassigned");
    if (rule.asset) {
      const asset = typeof rule.asset === "string" ? null : rule.asset;
      return asset?.plate || this._transloco.translate("smartFleet.rules.scopeAsset");
    }
    if (rule.group)
      return rule.group;
    return this._transloco.translate("smartFleet.rules.scopeFleet");
  }
  _load() {
    this._loadRules(() => this._applyQueryParams());
    this._fleetService.getAvailableChecks("co").subscribe({
      next: (response) => this.availableChecks.set(response.data?.checks ?? []),
      error: (err) => console.error("[SmartFleet] getAvailableChecks error", err)
    });
    this._fleetService.getAssets({ perPage: 200, isActive: true }).subscribe({
      next: (response) => this.assets.set(response.data ?? []),
      error: (err) => console.error("[SmartFleet] getAssets error", err)
    });
    this._fleetService.listGroups().subscribe({
      next: (response) => this.savedGroups.set((response.data ?? []).map((entry) => normalizeFleetGroup(entry))),
      error: (err) => console.error("[SmartFleet] listGroups error", err)
    });
  }
  /**
   * Deep-links from the vehicle detail page: create scoped to an asset, or open edit.
   */
  _applyQueryParams() {
    const params = this._route.snapshot.queryParamMap;
    const editId = params.get("edit");
    const assetId = params.get("asset");
    const create = params.get("create");
    if (editId) {
      const rule = this.rules().find((entry) => entry._id === editId);
      if (rule)
        this.openTarget(this.targetQuery(rule));
      return;
    }
    if (assetId || params.get("group") || params.get("scope") === "fleet")
      return;
    if (create === "1")
      this.clearTarget();
  }
  _loadRules(onLoaded) {
    this._fleetService.getWatchRules().subscribe({
      next: () => onLoaded?.(),
      error: (err) => this._reportFailure("smartFleet.rules.loadFailed", err)
    });
  }
  /**
   * Live cost preview. Per-vehicle daily checks add up fast, and bill shock is the fastest
   * way to lose a monitoring subscription, so the number is shown before the rule is saved.
   */
  _refreshEstimate() {
    const draft = this.draft();
    if (!draft.checkType) {
      this.estimate.set(null);
      return;
    }
    this.isEstimating.set(true);
    this._fleetService.estimateWatchRule(__spreadValues(__spreadValues(__spreadValues({
      checkType: draft.checkType,
      frequency: draft.frequency
    }, draft.frequency === "custom" && draft.intervalDays ? { intervalDays: Number(draft.intervalDays) } : {}), draft.scope === "asset" && draft.asset ? { asset: draft.asset } : {}), draft.scope === "group" && draft.group ? { group: draft.group } : {})).subscribe({
      next: (response) => {
        this.estimate.set(response.data);
        this.isEstimating.set(false);
      },
      error: (err) => {
        this.isEstimating.set(false);
        console.error("[SmartFleet] estimateWatchRule error", err);
      }
    });
  }
  _reportFailure(key, error) {
    const detail = error?.error;
    const message = this._transloco.translate(key);
    console.error("[SmartFleet]", key, error);
    this._snackBar.open(detail?.message ? `${message}: ${detail.message}` : message, this._transloco.translate("smartFleet.dismiss"), { duration: 6e3 });
  }
  static {
    this.\u0275fac = function FleetWatchRulesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FleetWatchRulesComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FleetWatchRulesComponent, selectors: [["fleet-watch-rules"]], decls: 31, vars: 20, consts: [["singleEndpoint", ""], [1, "flex", "min-h-screen", "min-w-0", "flex-auto", "flex-col", "bg-stone-50", "dark:bg-gray-950"], [1, "border-b", "border-stone-200/90", "bg-white/90", "px-5", "py-6", "backdrop-blur-sm", "dark:border-gray-800", "dark:bg-gray-950/90", "md:px-8", "md:py-8"], [1, "mx-auto", "flex", "w-full", "max-w-7xl", "flex-col", "gap-5"], [1, "flex", "flex-wrap", "items-start", "justify-between", "gap-3"], [1, "flex", "min-w-0", "items-start", "gap-3"], ["mat-icon-button", "", "type", "button", "routerLink", "/smart-fleet", 1, "shrink-0", "!text-stone-600", "dark:!text-stone-300", 3, "matTooltip"], [1, "min-w-0"], [1, "text-2xl", "font-semibold", "tracking-tight", "text-stone-900", "dark:text-white", "md:text-3xl"], [1, "mt-1", "text-sm", "text-stone-500", "dark:text-stone-400"], ["mat-stroked-button", "", "type", "button", "class", "shrink-0 rounded-xl !px-6 !py-2", 3, "click", 4, "ngIf"], [1, "flex", "flex-auto", "flex-col", "px-5", "py-8", "md:px-8", "md:py-10"], [1, "mx-auto", "flex", "w-full", "max-w-7xl", "flex-col", "gap-6"], ["class", "rounded-2xl border border-stone-200/90 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900", 4, "ngIf"], [4, "ngIf"], [3, "library", 4, "ngIf"], [3, "assetId", 4, "ngIf"], [3, "groupName", 4, "ngIf"], [1, "overflow-hidden", "rounded-2xl", "border", "border-stone-200/90", "bg-white", "shadow-sm", "dark:border-gray-800", "dark:bg-gray-900"], ["class", "flex justify-center py-16", 4, "ngIf"], ["class", "px-5 py-12 text-center text-sm text-stone-500 dark:text-stone-400", 4, "ngIf"], ["class", "w-full", 4, "ngIf"], ["mat-stroked-button", "", "type", "button", 1, "shrink-0", "rounded-xl", "!px-6", "!py-2", 3, "click"], [1, "rounded-2xl", "border", "border-stone-200/90", "bg-white", "p-5", "shadow-sm", "dark:border-gray-800", "dark:bg-gray-900"], [1, "text-base", "font-semibold", "text-stone-900", "dark:text-white"], [1, "mt-1", "max-w-3xl", "text-sm", "text-stone-500", "dark:text-stone-400"], [1, "mt-4", "grid", "gap-3", "sm:grid-cols-2", "xl:grid-cols-4"], ["type", "button", 1, "rounded-2xl", "border", "p-4", "text-left", 3, "click"], [1, "icon-size-6", "text-indigo-600"], [1, "mt-3", "block", "text-sm", "font-semibold", "text-stone-900", "dark:text-white"], [1, "mt-1", "block", "text-xs", "text-stone-500"], ["type", "button", 1, "rounded-2xl", "border", "border-stone-200", "p-4", "text-left", "hover:border-indigo-300", "dark:border-gray-700", 3, "click"], ["class", "mt-4 rounded-2xl border border-stone-200 p-4 dark:border-gray-700", 4, "ngIf"], ["class", "mt-6 border-t border-stone-200 pt-4 dark:border-gray-800", 4, "ngIf"], [1, "mt-4", "rounded-2xl", "border", "border-stone-200", "p-4", "dark:border-gray-700"], ["class", "text-sm text-stone-500", 4, "ngIf"], [1, "flex", "max-h-64", "flex-col", "gap-1", "overflow-auto"], [4, "ngFor", "ngForOf"], [1, "text-sm", "text-stone-500"], ["routerLink", "/smart-fleet/assets", 1, "font-medium", "text-indigo-700", "hover:underline"], ["type", "button", 1, "flex", "w-full", "items-center", "justify-between", "rounded-lg", "px-2", "py-2", "text-left", "text-sm", "hover:bg-stone-100", "dark:hover:bg-gray-800", 3, "click"], [1, "flex", "min-w-0", "items-center", "gap-2"], [1, "h-5", "w-8", "shrink-0", 3, "icon"], [1, "h-3", "w-3", "shrink-0", "rounded-full"], [1, "truncate", "font-medium", "text-stone-900", "dark:text-white"], [1, "shrink-0", "text-xs", "text-stone-500"], ["routerLink", "/smart-fleet/assets", 1, "font-medium", "text-indigo-700", "hover:underline", 3, "queryParams"], ["type", "button", 1, "flex", "w-full", "items-center", "justify-between", "gap-2", "rounded-lg", "px-2", "py-2", "text-left", "text-sm", "hover:bg-stone-100", "dark:hover:bg-gray-800", 3, "click"], [1, "truncate", "font-mono", "font-medium", "text-stone-900", "dark:text-white"], ["class", "shrink-0 truncate text-xs text-stone-500", 4, "ngIf"], [1, "shrink-0", "truncate", "text-xs", "text-stone-500"], [1, "mt-6", "border-t", "border-stone-200", "pt-4", "dark:border-gray-800"], [1, "text-sm", "font-semibold", "text-stone-900", "dark:text-white"], [1, "mt-3", "flex", "flex-col", "gap-2"], ["class", "flex flex-wrap items-center justify-between gap-2 rounded-xl border border-stone-200 px-3 py-2 dark:border-gray-700", 4, "ngFor", "ngForOf"], [1, "flex", "flex-wrap", "items-center", "justify-between", "gap-2", "rounded-xl", "border", "border-stone-200", "px-3", "py-2", "dark:border-gray-700"], [1, "text-sm", "font-medium", "text-stone-900", "dark:text-white"], [1, "rounded-lg", "border", "border-stone-200", "bg-white", "px-2", "py-1.5", "text-sm", "dark:border-gray-700", "dark:bg-gray-950", "dark:text-white", 3, "change", "disabled"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "w-full text-xs text-stone-500", 4, "ngIf"], [3, "value"], [1, "w-full", "text-xs", "text-stone-500"], [3, "library"], [3, "assetId"], [3, "groupName"], [1, "mt-5"], [1, "mt-3", "block", "text-xs", "font-medium", "uppercase", "text-stone-500"], [1, "mt-2", "flex", "flex-wrap", "gap-1"], ["type", "button", "class", "rounded-xl px-4 py-2 text-sm font-medium transition-colors", 3, "bg-stone-900", "text-white", "text-stone-600", "hover:bg-stone-100", "click", 4, "ngFor", "ngForOf"], [1, "mt-4", "grid", "gap-4", "md:grid-cols-2"], ["class", "flex flex-col gap-1", 4, "ngIf"], [1, "mt-6", "border-t", "border-stone-200/90", "pt-5", "dark:border-gray-800"], [1, "mt-2", "grid", "gap-2", "md:grid-cols-3"], ["type", "button", "class", "flex flex-col items-start gap-1 rounded-xl border p-3 text-left transition-colors", 3, "border-indigo-500", "bg-indigo-50", "border-stone-200", "hover:border-indigo-300", "click", 4, "ngFor", "ngForOf"], ["class", "mt-3 rounded-xl border border-indigo-200 bg-indigo-50/70 p-4 dark:border-indigo-900 dark:bg-indigo-950/30", 4, "ngIf"], ["class", "mt-3 rounded-xl border border-stone-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-950/40", 4, "ngIf"], [1, "text-xs", "font-medium", "uppercase", "text-stone-500"], ["type", "button", "class", "rounded-xl px-3 py-1.5 text-sm font-medium transition-colors", 3, "bg-stone-900", "text-white", "text-stone-600", "hover:bg-stone-100", "click", 4, "ngFor", "ngForOf"], ["class", "mt-3 flex flex-col gap-1", 4, "ngIf"], ["class", "mt-4", 4, "ngIf"], [1, "mt-4"], [1, "mt-2", "flex", "flex-wrap", "gap-2"], ["type", "button", "class", "inline-flex items-center gap-2.5 rounded-xl border px-3 py-1.5 text-sm font-medium transition-colors", 3, "border-indigo-600", "bg-indigo-600", "text-white", "border-stone-200", "bg-white", "text-stone-800", "hover:border-stone-300", "dark:border-gray-700", "dark:bg-gray-900", "dark:text-stone-100", "click", 4, "ngFor", "ngForOf"], ["class", "mt-5 rounded-xl border border-stone-200/90 bg-stone-50 p-4 dark:border-gray-800 dark:bg-gray-950/50", 4, "ngIf"], [1, "mt-5", "flex", "justify-end"], ["mat-flat-button", "", "color", "primary", "type", "button", 1, "rounded-xl", "!px-6", "!py-2", 3, "click", "disabled"], ["diameter", "18", "class", "mr-2", 4, "ngIf"], ["type", "button", 1, "rounded-xl", "px-4", "py-2", "text-sm", "font-medium", "transition-colors", 3, "click"], [1, "flex", "flex-col", "gap-1"], ["name", "asset", 1, "rounded-xl", "border", "border-stone-200", "bg-white", "px-3", "py-2", "text-sm", "text-stone-900", "focus:border-indigo-400", "focus:outline-none", "dark:border-gray-700", "dark:bg-gray-950", "dark:text-white", 3, "ngModelChange", "ngModel"], [3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["name", "group", 1, "rounded-xl", "border", "border-stone-200", "bg-white", "px-3", "py-2", "text-sm", "text-stone-900", "focus:border-indigo-400", "focus:outline-none", "dark:border-gray-700", "dark:bg-gray-950", "dark:text-white", 3, "ngModelChange", "ngModel"], ["type", "button", 1, "flex", "flex-col", "items-start", "gap-1", "rounded-xl", "border", "p-3", "text-left", "transition-colors", 3, "click"], [1, "text-xs", "text-stone-500", "dark:text-stone-400"], [1, "mt-3", "rounded-xl", "border", "border-indigo-200", "bg-indigo-50/70", "p-4", "dark:border-indigo-900", "dark:bg-indigo-950/30"], [1, "text-xs", "font-medium", "uppercase", "tracking-wide", "text-indigo-700", "dark:text-indigo-300"], ["class", "mt-3 space-y-3", 4, "ngIf", "ngIfElse"], ["class", "mt-2 text-xs text-amber-800 dark:text-amber-200", 4, "ngIf"], [1, "mt-3", "space-y-3"], ["class", "rounded-lg p-2", 3, "ngClass", 4, "ngIf"], [1, "rounded-lg", "p-2", 3, "ngClass"], [1, "text-xs", "font-semibold", "text-stone-700", "dark:text-stone-200"], ["class", "ml-1 font-medium text-indigo-600 dark:text-indigo-300", 4, "ngIf"], [1, "mt-1", "font-mono", "text-sm", "font-semibold", "text-stone-900", "dark:text-white"], [1, "mt-1", "text-xs", "text-stone-600", "dark:text-stone-300"], [1, "font-mono"], [1, "ml-1", "font-medium", "text-indigo-600", "dark:text-indigo-300"], [1, "mt-2", "font-mono", "text-sm", "font-semibold", "text-stone-900", "dark:text-white"], ["class", "mt-1 text-xs text-stone-600 dark:text-stone-300", 4, "ngIf"], ["class", "mt-2 text-xs text-stone-600 dark:text-stone-300", 4, "ngIf"], ["class", "text-stone-400", 4, "ngIf"], [1, "text-stone-400"], [1, "mt-2", "text-xs", "text-stone-600", "dark:text-stone-300"], [1, "mt-2", "text-xs", "text-amber-800", "dark:text-amber-200"], [1, "mt-3", "rounded-xl", "border", "border-stone-200", "bg-white", "p-4", "dark:border-gray-800", "dark:bg-gray-950/40"], [1, "text-xs", "font-medium", "uppercase", "tracking-wide", "text-stone-500"], [1, "mt-2", "text-sm", "text-stone-800", "dark:text-stone-200"], [1, "font-semibold"], ["class", "font-mono text-stone-400", 4, "ngIf"], [1, "font-mono", "text-stone-400"], ["type", "button", 1, "rounded-xl", "px-3", "py-1.5", "text-sm", "font-medium", "transition-colors", 3, "click"], [1, "mt-3", "flex", "flex-col", "gap-1"], ["type", "number", "min", "1", "max", "90", "name", "intervalDays", 1, "rounded-xl", "border", "border-stone-200", "bg-white", "px-3", "py-2", "text-sm", "text-stone-900", "focus:border-indigo-400", "focus:outline-none", "dark:border-gray-700", "dark:bg-gray-950", "dark:text-white", 3, "ngModelChange", "ngModel"], [1, "text-xs", "text-stone-500"], ["type", "number", "min", "0", "max", "365", "name", "thresholdDays", 1, "rounded-xl", "border", "border-stone-200", "bg-white", "px-3", "py-2", "text-sm", "text-stone-900", "focus:border-indigo-400", "focus:outline-none", "dark:border-gray-700", "dark:bg-gray-950", "dark:text-white", 3, "ngModelChange", "ngModel"], [1, "mt-2", "grid", "gap-1", "sm:grid-cols-2", "lg:grid-cols-2"], ["class", "rounded-lg bg-stone-50 px-3 py-2 text-xs text-stone-700 dark:bg-gray-950/50 dark:text-stone-300", 4, "ngFor", "ngForOf"], [1, "rounded-lg", "bg-stone-50", "px-3", "py-2", "text-xs", "text-stone-700", "dark:bg-gray-950/50", "dark:text-stone-300"], [1, "font-semibold", "text-stone-500"], ["type", "button", 1, "inline-flex", "items-center", "gap-2.5", "rounded-xl", "border", "px-3", "py-1.5", "text-sm", "font-medium", "transition-colors", 3, "click"], [1, "flex", "h-9", "w-9", "shrink-0", "items-center", "justify-center", "rounded-lg", 3, "ngClass"], [3, "channel"], ["type", "text", "name", "emailRecipients", "placeholder", "ops@company.com, fleet@company.com", 1, "rounded-xl", "border", "border-stone-200", "bg-white", "px-3", "py-2", "text-sm", "text-stone-900", "focus:border-indigo-400", "focus:outline-none", "dark:border-gray-700", "dark:bg-gray-950", "dark:text-white", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "smsRecipients", "placeholder", "+573001112233", 1, "rounded-xl", "border", "border-stone-200", "bg-white", "px-3", "py-2", "text-sm", "text-stone-900", "focus:border-indigo-400", "focus:outline-none", "dark:border-gray-700", "dark:bg-gray-950", "dark:text-white", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "whatsappRecipients", "placeholder", "+573001112233", 1, "rounded-xl", "border", "border-stone-200", "bg-white", "px-3", "py-2", "text-sm", "text-stone-900", "focus:border-indigo-400", "focus:outline-none", "dark:border-gray-700", "dark:bg-gray-950", "dark:text-white", 3, "ngModelChange", "ngModel"], ["type", "url", "name", "webhookUrl", "placeholder", "https://example.com/hooks/fleet", 1, "rounded-xl", "border", "border-stone-200", "bg-white", "px-3", "py-2", "text-sm", "text-stone-900", "focus:border-indigo-400", "focus:outline-none", "dark:border-gray-700", "dark:bg-gray-950", "dark:text-white", 3, "ngModelChange", "ngModel"], ["target", "_blank", "rel", "noopener noreferrer", 1, "font-semibold", "text-indigo-600", "underline", "underline-offset-2", "dark:text-indigo-400", 3, "href"], [1, "mt-5", "rounded-xl", "border", "border-stone-200/90", "bg-stone-50", "p-4", "dark:border-gray-800", "dark:bg-gray-950/50"], [1, "flex", "flex-wrap", "items-center", "gap-2"], [1, "icon-size-5", "text-stone-500"], ["diameter", "16", 4, "ngIf"], ["diameter", "16"], [1, "mt-2", "text-sm", "text-stone-700", "dark:text-stone-300"], [1, "mt-1", "text-xs", "text-stone-500", "dark:text-stone-400"], ["class", "flex items-center justify-between text-xs text-stone-600 dark:text-stone-300", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "justify-between", "text-xs", "text-stone-600", "dark:text-stone-300"], ["diameter", "18", 1, "mr-2"], [1, "flex", "shrink-0", "items-center", "gap-2"], ["mat-stroked-button", "", "type", "button", 1, "rounded-xl", 3, "click"], [1, "mr-1", "icon-size-4"], ["mat-icon-button", "", "type", "button", 3, "click", "matTooltip"], [1, "mt-4", "grid", "gap-3", "sm:grid-cols-2", "lg:grid-cols-4"], [1, "mt-1", "text-sm", "text-stone-900", "dark:text-white"], [1, "mt-1", "flex", "flex-wrap", "gap-1"], ["class", "rounded-full bg-stone-100 px-2 py-0.5 text-xs font-medium text-stone-600 dark:bg-gray-800 dark:text-stone-300", 4, "ngFor", "ngForOf"], ["class", "mt-3 text-xs text-stone-500 dark:text-stone-400", 4, "ngIf"], [1, "mt-5", "grid", "gap-6", "lg:grid-cols-2"], ["class", "mt-3 flex justify-center py-8", 4, "ngIf"], ["class", "mt-3 divide-y divide-stone-200/90 dark:divide-gray-800", 4, "ngIf"], ["class", "mt-3 text-sm text-stone-500 dark:text-stone-400", 4, "ngIf"], [1, "rounded-full", "bg-stone-100", "px-2", "py-0.5", "text-xs", "font-medium", "text-stone-600", "dark:bg-gray-800", "dark:text-stone-300"], [1, "mt-3", "text-xs", "text-stone-500", "dark:text-stone-400"], [1, "mt-3", "flex", "justify-center", "py-8"], ["diameter", "28"], [1, "mt-3", "divide-y", "divide-stone-200/90", "dark:divide-gray-800"], ["class", "flex items-center gap-3 py-2 text-sm", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "gap-3", "py-2", "text-sm"], [1, "flex", "h-6", "w-6", "shrink-0", "items-center", "justify-center", "rounded-full", "bg-stone-100", "text-xs", "font-semibold", "text-stone-600", "dark:bg-gray-800", "dark:text-stone-300"], [1, "text-stone-900", "dark:text-white"], [1, "mt-3", "text-sm", "text-stone-500", "dark:text-stone-400"], ["class", "flex flex-wrap items-center justify-between gap-2 py-2 text-sm", 4, "ngFor", "ngForOf"], [1, "flex", "flex-wrap", "items-center", "justify-between", "gap-2", "py-2", "text-sm"], [1, "font-semibold", "text-indigo-600", "underline-offset-4", "hover:underline", "dark:text-indigo-400", 3, "routerLink"], ["class", "ml-1 font-normal text-stone-500", 4, "ngIf"], [1, "ml-1", "font-normal", "text-stone-500"], [1, "flex", "justify-center", "py-16"], ["diameter", "36"], [1, "px-5", "py-12", "text-center", "text-sm", "text-stone-500", "dark:text-stone-400"], [1, "w-full"], [1, "bg-stone-50", "dark:bg-gray-950/50"], [1, "text-left", "text-xs", "font-medium", "uppercase", "text-stone-500"], [1, "px-5", "py-3"], [1, "divide-y", "divide-stone-200/90", "dark:divide-gray-800"], ["class", "cursor-pointer text-sm transition-colors hover:bg-stone-50 dark:hover:bg-gray-800/50", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "cursor-pointer", "text-sm", "transition-colors", "hover:bg-stone-50", "dark:hover:bg-gray-800/50", 3, "click", "ngClass"], [1, "font-semibold", "text-stone-900", "dark:text-white"], ["class", "ml-2 text-xs text-stone-500", 4, "ngIf"], [1, "font-medium", "text-indigo-700", "hover:underline", "dark:text-indigo-300", 3, "click", "routerLink", "queryParams"], [1, "px-5", "py-3", "text-stone-600", "dark:text-stone-300"], ["class", "mr-1 rounded-full bg-stone-100 px-2 py-0.5 text-xs font-medium text-stone-600 dark:bg-gray-800 dark:text-stone-300", 4, "ngFor", "ngForOf"], [1, "px-5", "py-3", "text-xs", "text-stone-500", "dark:text-stone-400"], [1, "flex", "items-center", "justify-end", "gap-1"], [1, "icon-size-5"], ["mat-icon-button", "", "type", "button", 1, "!text-red-500", 3, "click", "matTooltip"], [1, "ml-2", "text-xs", "text-stone-500"], [1, "mr-1", "rounded-full", "bg-stone-100", "px-2", "py-0.5", "text-xs", "font-medium", "text-stone-600", "dark:bg-gray-800", "dark:text-stone-300"]], template: function FleetWatchRulesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "header", 2)(2, "div", 3);
        \u0275\u0275element(3, "fleet-nav");
        \u0275\u0275elementStart(4, "div", 4)(5, "div", 5)(6, "button", 6);
        \u0275\u0275pipe(7, "transloco");
        \u0275\u0275elementStart(8, "mat-icon");
        \u0275\u0275text(9, "arrow_back");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "div", 7)(11, "h1", 8);
        \u0275\u0275text(12);
        \u0275\u0275pipe(13, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "p", 9);
        \u0275\u0275text(15);
        \u0275\u0275pipe(16, "transloco");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(17, FleetWatchRulesComponent_button_17_Template, 3, 3, "button", 10);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(18, "main", 11)(19, "div", 12);
        \u0275\u0275template(20, FleetWatchRulesComponent_section_20_Template, 47, 52, "section", 13)(21, FleetWatchRulesComponent_fleet_asset_rules_board_21_Template, 1, 0, "fleet-asset-rules-board", 14)(22, FleetWatchRulesComponent_fleet_asset_rules_board_22_Template, 1, 1, "fleet-asset-rules-board", 15)(23, FleetWatchRulesComponent_fleet_asset_rules_board_23_Template, 1, 1, "fleet-asset-rules-board", 16)(24, FleetWatchRulesComponent_fleet_asset_rules_board_24_Template, 1, 1, "fleet-asset-rules-board", 17)(25, FleetWatchRulesComponent_div_25_Template, 58, 45, "div", 13)(26, FleetWatchRulesComponent_div_26_Template, 61, 47, "div", 13);
        \u0275\u0275elementStart(27, "div", 18);
        \u0275\u0275template(28, FleetWatchRulesComponent_div_28_Template, 2, 0, "div", 19)(29, FleetWatchRulesComponent_p_29_Template, 3, 3, "p", 20)(30, FleetWatchRulesComponent_table_30_Template, 21, 16, "table", 21);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(7, 14, "smartFleet.back"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 16, "smartFleet.rules.title"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 18, "smartFleet.rules.subtitle"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.composing());
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", !ctx.composing());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.composeFleet());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.composeLibrary());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.composeAssetId());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.composeGroup());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showForm());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.detailRule());
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.isLoading() && !ctx.rules().length);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isLoading() && !ctx.rules().length);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.rules().length);
      }
    }, dependencies: [
      CommonModule,
      NgClass,
      NgForOf,
      NgIf,
      DatePipe,
      FormsModule,
      NgSelectOption,
      \u0275NgSelectMultipleOption,
      DefaultValueAccessor,
      NumberValueAccessor,
      SelectControlValueAccessor,
      NgControlStatus,
      MinValidator,
      MaxValidator,
      NgModel,
      TranslocoModule,
      TranslocoPipe,
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
      FleetNavComponent,
      FleetAssetRulesBoardComponent,
      FleetChannelIconComponent,
      FleetVehicleIconComponent
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FleetWatchRulesComponent, [{
    type: Component,
    args: [{ selector: "fleet-watch-rules", standalone: true, imports: [
      CommonModule,
      FormsModule,
      TranslocoModule,
      RouterModule,
      MatButtonModule,
      MatIconModule,
      MatTooltipModule,
      MatProgressSpinnerModule,
      MatSnackBarModule,
      FleetNavComponent,
      FleetAssetRulesBoardComponent,
      FleetChannelIconComponent,
      FleetVehicleIconComponent
    ], encapsulation: ViewEncapsulation.None, template: `<div class="flex min-h-screen min-w-0 flex-auto flex-col bg-stone-50 dark:bg-gray-950">\r
    <header\r
        class="border-b border-stone-200/90 bg-white/90 px-5 py-6 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-950/90 md:px-8 md:py-8"\r
    >\r
        <div class="mx-auto flex w-full max-w-7xl flex-col gap-5">\r
            <fleet-nav />\r
\r
            <div class="flex flex-wrap items-start justify-between gap-3">\r
                <div class="flex min-w-0 items-start gap-3">\r
                    <button\r
                        mat-icon-button\r
                        type="button"\r
                        routerLink="/smart-fleet"\r
                        [matTooltip]="'smartFleet.back' | transloco"\r
                        class="shrink-0 !text-stone-600 dark:!text-stone-300"\r
                    >\r
                        <mat-icon>arrow_back</mat-icon>\r
                    </button>\r
                    <div class="min-w-0">\r
                        <h1\r
                            class="text-2xl font-semibold tracking-tight text-stone-900 dark:text-white md:text-3xl"\r
                        >\r
                            {{ 'smartFleet.rules.title' | transloco }}\r
                        </h1>\r
                        <p class="mt-1 text-sm text-stone-500 dark:text-stone-400">\r
                            {{ 'smartFleet.rules.subtitle' | transloco }}\r
                        </p>\r
                    </div>\r
                </div>\r
                <button\r
                    *ngIf="composing()"\r
                    mat-stroked-button\r
                    type="button"\r
                    (click)="clearTarget()"\r
                    class="shrink-0 rounded-xl !px-6 !py-2"\r
                >\r
                    {{ 'smartFleet.rules.changeTarget' | transloco }}\r
                </button>\r
            </div>\r
        </div>\r
    </header>\r
\r
    <main class="flex flex-auto flex-col px-5 py-8 md:px-8 md:py-10">\r
        <div class="mx-auto flex w-full max-w-7xl flex-col gap-6">\r
            <section\r
                *ngIf="!composing()"\r
                class="rounded-2xl border border-stone-200/90 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900"\r
            >\r
                <h2 class="text-base font-semibold text-stone-900 dark:text-white">\r
                    {{ 'smartFleet.rules.pickTitle' | transloco }}\r
                </h2>\r
                <p class="mt-1 max-w-3xl text-sm text-stone-500 dark:text-stone-400">\r
                    {{ 'smartFleet.rules.pickHint' | transloco }}\r
                </p>\r
                <div class="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">\r
                    <button\r
                        type="button"\r
                        (click)="choosePick('asset')"\r
                        class="rounded-2xl border p-4 text-left"\r
                        [class.border-indigo-500]="pickKind() === 'asset'"\r
                        [class.bg-indigo-50]="pickKind() === 'asset'"\r
                        [class.border-stone-200]="pickKind() !== 'asset'"\r
                        [class.dark:border-gray-700]="pickKind() !== 'asset'"\r
                    >\r
                        <mat-icon class="icon-size-6 text-indigo-600">directions_car</mat-icon>\r
                        <span class="mt-3 block text-sm font-semibold text-stone-900 dark:text-white">{{\r
                            'smartFleet.rules.scope_asset' | transloco\r
                        }}</span>\r
                        <span class="mt-1 block text-xs text-stone-500">{{\r
                            'smartFleet.rules.pickAssetHint' | transloco\r
                        }}</span>\r
                    </button>\r
                    <button\r
                        type="button"\r
                        (click)="choosePick('group')"\r
                        class="rounded-2xl border p-4 text-left"\r
                        [class.border-indigo-500]="pickKind() === 'group'"\r
                        [class.bg-indigo-50]="pickKind() === 'group'"\r
                        [class.border-stone-200]="pickKind() !== 'group'"\r
                        [class.dark:border-gray-700]="pickKind() !== 'group'"\r
                    >\r
                        <mat-icon class="icon-size-6 text-indigo-600">workspaces</mat-icon>\r
                        <span class="mt-3 block text-sm font-semibold text-stone-900 dark:text-white">{{\r
                            'smartFleet.rules.scope_group' | transloco\r
                        }}</span>\r
                        <span class="mt-1 block text-xs text-stone-500">{{\r
                            'smartFleet.rules.pickGroupHint' | transloco\r
                        }}</span>\r
                    </button>\r
                    <button\r
                        type="button"\r
                        (click)="choosePick('fleet')"\r
                        class="rounded-2xl border border-stone-200 p-4 text-left hover:border-indigo-300 dark:border-gray-700"\r
                    >\r
                        <mat-icon class="icon-size-6 text-indigo-600">local_shipping</mat-icon>\r
                        <span class="mt-3 block text-sm font-semibold text-stone-900 dark:text-white">{{\r
                            'smartFleet.rules.scope_fleet' | transloco\r
                        }}</span>\r
                        <span class="mt-1 block text-xs text-stone-500">{{\r
                            'smartFleet.rules.pickFleetHint' | transloco: { count: assets().length }\r
                        }}</span>\r
                    </button>\r
                    <button\r
                        type="button"\r
                        (click)="choosePick('library')"\r
                        class="rounded-2xl border border-stone-200 p-4 text-left hover:border-indigo-300 dark:border-gray-700"\r
                    >\r
                        <mat-icon class="icon-size-6 text-indigo-600">bookmark_add</mat-icon>\r
                        <span class="mt-3 block text-sm font-semibold text-stone-900 dark:text-white">{{\r
                            'smartFleet.rules.pickLibraryCard' | transloco\r
                        }}</span>\r
                        <span class="mt-1 block text-xs text-stone-500">{{\r
                            'smartFleet.rules.pickLibraryCardHint' | transloco\r
                        }}</span>\r
                    </button>\r
                </div>\r
\r
                <div *ngIf="pickKind() === 'group'" class="mt-4 rounded-2xl border border-stone-200 p-4 dark:border-gray-700">\r
                    <p *ngIf="!groups().length" class="text-sm text-stone-500">\r
                        <a routerLink="/smart-fleet/assets" class="font-medium text-indigo-700 hover:underline">{{\r
                            'smartFleet.rules.pickGroupEmpty' | transloco\r
                        }}</a>\r
                    </p>\r
                    <ul class="flex max-h-64 flex-col gap-1 overflow-auto">\r
                        <li *ngFor="let group of groups()">\r
                            <button\r
                                type="button"\r
                                class="flex w-full items-center justify-between rounded-lg px-2 py-2 text-left text-sm hover:bg-stone-100 dark:hover:bg-gray-800"\r
                                (click)="openTarget({ group: group })"\r
                            >\r
                                <span class="flex min-w-0 items-center gap-2">\r
                                    <fleet-vehicle-icon\r
                                        [icon]="groupIcon(group)"\r
                                        class="h-5 w-8 shrink-0"\r
                                        [style.color]="groupColor(group)"\r
                                    ></fleet-vehicle-icon>\r
                                    <span\r
                                        class="h-3 w-3 shrink-0 rounded-full"\r
                                        [style.background]="groupColor(group)"\r
                                    ></span>\r
                                    <span class="truncate font-medium text-stone-900 dark:text-white">{{ group }}</span>\r
                                </span>\r
                                <span class="shrink-0 text-xs text-stone-500">{{ groupSize(group) }}</span>\r
                            </button>\r
                        </li>\r
                    </ul>\r
                </div>\r
\r
                <div *ngIf="pickKind() === 'asset'" class="mt-4 rounded-2xl border border-stone-200 p-4 dark:border-gray-700">\r
                    <p *ngIf="!assets().length" class="text-sm text-stone-500">\r
                        <a\r
                            routerLink="/smart-fleet/assets"\r
                            [queryParams]="{ add: 1 }"\r
                            class="font-medium text-indigo-700 hover:underline"\r
                            >{{ 'smartFleet.rules.pickAssetEmpty' | transloco }}</a\r
                        >\r
                    </p>\r
                    <ul class="flex max-h-64 flex-col gap-1 overflow-auto">\r
                        <li *ngFor="let asset of assets()">\r
                            <button\r
                                type="button"\r
                                class="flex w-full items-center justify-between gap-2 rounded-lg px-2 py-2 text-left text-sm hover:bg-stone-100 dark:hover:bg-gray-800"\r
                                (click)="openTarget({ asset: asset._id! })"\r
                            >\r
                                <span class="truncate font-mono font-medium text-stone-900 dark:text-white">{{\r
                                    asset.plate || asset.vin\r
                                }}</span>\r
                                <span class="shrink-0 truncate text-xs text-stone-500" *ngIf="asset.group">{{\r
                                    asset.group\r
                                }}</span>\r
                            </button>\r
                        </li>\r
                    </ul>\r
                </div>\r
\r
                <div *ngIf="unassignedRules().length" class="mt-6 border-t border-stone-200 pt-4 dark:border-gray-800">\r
                    <h3 class="text-sm font-semibold text-stone-900 dark:text-white">\r
                        {{ 'smartFleet.rules.boardLibraryTitle' | transloco }}\r
                    </h3>\r
                    <ul class="mt-3 flex flex-col gap-2">\r
                        <li\r
                            *ngFor="let rule of unassignedRules()"\r
                            class="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-stone-200 px-3 py-2 dark:border-gray-700"\r
                        >\r
                            <span class="text-sm font-medium text-stone-900 dark:text-white">{{\r
                                'smartFleet.checkType.' + rule.checkType | transloco\r
                            }}</span>\r
                            <select\r
                                class="rounded-lg border border-stone-200 bg-white px-2 py-1.5 text-sm dark:border-gray-700 dark:bg-gray-950 dark:text-white"\r
                                [disabled]="assigningRuleId() === rule._id"\r
                                (change)="assignRule(rule, $any($event.target).value, $event)"\r
                            >\r
                                <option value="">{{ 'smartFleet.rules.assignNone' | transloco }}</option>\r
                                <option *ngFor="let vehicle of vehiclesForRule(rule)" [value]="vehicle._id">\r
                                    {{ vehicle.plate || vehicle.vin }}\r
                                </option>\r
                            </select>\r
                            <span class="w-full text-xs text-stone-500" *ngIf="!vehiclesForRule(rule).length">{{\r
                                'smartFleet.rules.assignEmpty' | transloco\r
                            }}</span>\r
                        </li>\r
                    </ul>\r
                </div>\r
            </section>\r
            <fleet-asset-rules-board *ngIf="composeFleet()" />\r
            <fleet-asset-rules-board *ngIf="composeLibrary()" [library]="true" />\r
            <fleet-asset-rules-board\r
                *ngIf="composeAssetId() as assetId"\r
                [assetId]="assetId"\r
            />\r
            <fleet-asset-rules-board\r
                *ngIf="composeGroup() as groupName"\r
                [groupName]="groupName"\r
            />\r
            <!-- Rule form -->\r
            <div\r
                *ngIf="showForm()"\r
                class="rounded-2xl border border-stone-200/90 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900"\r
            >\r
                <h2 class="text-base font-semibold text-stone-900 dark:text-white">\r
                    {{ formTitleKey() | transloco }}\r
                </h2>\r
\r
                <!-- Scope -->\r
                <div class="mt-5">\r
                    <h3 class="text-sm font-semibold text-stone-900 dark:text-white">\r
                        {{ 'smartFleet.rules.stepWho' | transloco }}\r
                    </h3>\r
                    <span class="mt-3 block text-xs font-medium uppercase text-stone-500">{{\r
                        'smartFleet.rules.scope' | transloco\r
                    }}</span>\r
                    <div class="mt-2 flex flex-wrap gap-1">\r
                        <button\r
                            *ngFor="let scope of scopes"\r
                            type="button"\r
                            (click)="setScope(scope)"\r
                            class="rounded-xl px-4 py-2 text-sm font-medium transition-colors"\r
                            [class.bg-stone-900]="draft().scope === scope"\r
                            [class.text-white]="draft().scope === scope"\r
                            [class.text-stone-600]="draft().scope !== scope"\r
                            [class.hover:bg-stone-100]="draft().scope !== scope"\r
                        >\r
                            {{ 'smartFleet.rules.scope_' + scope | transloco }}\r
                        </button>\r
                    </div>\r
                </div>\r
\r
                <div class="mt-4 grid gap-4 md:grid-cols-2">\r
                    <label class="flex flex-col gap-1" *ngIf="draft().scope === 'asset'">\r
                        <span class="text-xs font-medium uppercase text-stone-500">{{\r
                            'smartFleet.rules.asset' | transloco\r
                        }}</span>\r
                        <select\r
                            [ngModel]="draft().asset"\r
                            (ngModelChange)="setField('asset', $event)"\r
                            name="asset"\r
                            class="rounded-xl border border-stone-200 bg-white px-3 py-2 text-sm text-stone-900 focus:border-indigo-400 focus:outline-none dark:border-gray-700 dark:bg-gray-950 dark:text-white"\r
                        >\r
                            <option [ngValue]="undefined">\r
                                {{ 'smartFleet.rules.selectAsset' | transloco }}\r
                            </option>\r
                            <option *ngFor="let asset of assets()" [ngValue]="asset._id">\r
                                {{ asset.plate || asset.vin }}\r
                                <ng-container *ngIf="asset.nickname">\r
                                    \u2014 {{ asset.nickname }}</ng-container\r
                                >\r
                            </option>\r
                        </select>\r
                    </label>\r
\r
                    <label class="flex flex-col gap-1" *ngIf="draft().scope === 'group'">\r
                        <span class="text-xs font-medium uppercase text-stone-500">{{\r
                            'smartFleet.rules.group' | transloco\r
                        }}</span>\r
                        <select\r
                            [ngModel]="draft().group"\r
                            (ngModelChange)="setField('group', $event)"\r
                            name="group"\r
                            class="rounded-xl border border-stone-200 bg-white px-3 py-2 text-sm text-stone-900 focus:border-indigo-400 focus:outline-none dark:border-gray-700 dark:bg-gray-950 dark:text-white"\r
                        >\r
                            <option [ngValue]="undefined">\r
                                {{ 'smartFleet.rules.selectGroup' | transloco }}\r
                            </option>\r
                            <option *ngFor="let group of groups()" [ngValue]="group">\r
                                {{ group }}\r
                            </option>\r
                        </select>\r
                    </label>\r
                </div>\r
\r
                <!-- Check type -->\r
                <div class="mt-6 border-t border-stone-200/90 pt-5 dark:border-gray-800">\r
                    <h3 class="text-sm font-semibold text-stone-900 dark:text-white">\r
                        {{ 'smartFleet.rules.stepWhat' | transloco }}\r
                    </h3>\r
                    <span class="mt-3 block text-xs font-medium uppercase text-stone-500">{{\r
                        'smartFleet.rules.checkType' | transloco\r
                    }}</span>\r
                    <div class="mt-2 grid gap-2 md:grid-cols-3">\r
                        <button\r
                            *ngFor="let check of availableChecks()"\r
                            type="button"\r
                            (click)="selectCheck(check.checkType)"\r
                            class="flex flex-col items-start gap-1 rounded-xl border p-3 text-left transition-colors"\r
                            [class.border-indigo-500]="draft().checkType === check.checkType"\r
                            [class.bg-indigo-50]="draft().checkType === check.checkType"\r
                            [class.border-stone-200]="draft().checkType !== check.checkType"\r
                            [class.hover:border-indigo-300]="draft().checkType !== check.checkType"\r
                        >\r
                            <span class="text-sm font-semibold text-stone-900 dark:text-white">{{\r
                                'smartFleet.checkType.' + check.checkType | transloco\r
                            }}</span>\r
                            <span class="text-xs text-stone-500 dark:text-stone-400">{{\r
                                'smartFleet.rules.kind_' + check.kind | transloco\r
                            }}</span>\r
                        </button>\r
                    </div>\r
\r
                    <div\r
                        *ngIf="selectedCheck() as check"\r
                        class="mt-3 rounded-xl border border-indigo-200 bg-indigo-50/70 p-4 dark:border-indigo-900 dark:bg-indigo-950/30"\r
                    >\r
                        <p class="text-xs font-medium uppercase tracking-wide text-indigo-700 dark:text-indigo-300">\r
                            {{ 'smartFleet.rules.apiRequestTitle' | transloco }}\r
                        </p>\r
\r
                        <div class="mt-3 space-y-3" *ngIf="check.endpoints?.byPlate || check.endpoints?.byVin; else singleEndpoint">\r
                            <div\r
                                *ngIf="check.endpoints?.byPlate as platePath"\r
                                class="rounded-lg p-2"\r
                                [ngClass]="\r
                                    selectedAssetResolvedPath() === 'plate'\r
                                        ? 'bg-white/80 ring-1 ring-indigo-400 dark:bg-gray-950/60'\r
                                        : ''\r
                                "\r
                            >\r
                                <p class="text-xs font-semibold text-stone-700 dark:text-stone-200">\r
                                    {{ 'smartFleet.rules.apiPathPlate' | transloco }}\r
                                    <span\r
                                        *ngIf="selectedAssetResolvedPath() === 'plate'"\r
                                        class="ml-1 font-medium text-indigo-600 dark:text-indigo-300"\r
                                        >\xB7 {{ 'smartFleet.rules.apiPathActive' | transloco }}</span\r
                                    >\r
                                </p>\r
                                <p class="mt-1 font-mono text-sm font-semibold text-stone-900 dark:text-white">\r
                                    {{ endpointPathLabel(platePath) }}\r
                                </p>\r
                                <p class="mt-1 text-xs text-stone-600 dark:text-stone-300">\r
                                    {{ 'smartFleet.rules.apiRequestParams' | transloco }}:\r
                                    <span class="font-mono">{{ platePath.requires.join(', ') }}</span>\r
                                </p>\r
                            </div>\r
                            <div\r
                                *ngIf="check.endpoints?.byVin as vinPath"\r
                                class="rounded-lg p-2"\r
                                [ngClass]="\r
                                    selectedAssetResolvedPath() === 'vin'\r
                                        ? 'bg-white/80 ring-1 ring-indigo-400 dark:bg-gray-950/60'\r
                                        : ''\r
                                "\r
                            >\r
                                <p class="text-xs font-semibold text-stone-700 dark:text-stone-200">\r
                                    {{ 'smartFleet.rules.apiPathVin' | transloco }}\r
                                    <span\r
                                        *ngIf="selectedAssetResolvedPath() === 'vin'"\r
                                        class="ml-1 font-medium text-indigo-600 dark:text-indigo-300"\r
                                        >\xB7 {{ 'smartFleet.rules.apiPathActive' | transloco }}</span\r
                                    >\r
                                </p>\r
                                <p class="mt-1 font-mono text-sm font-semibold text-stone-900 dark:text-white">\r
                                    {{ endpointPathLabel(vinPath) }}\r
                                </p>\r
                                <p class="mt-1 text-xs text-stone-600 dark:text-stone-300">\r
                                    {{ 'smartFleet.rules.apiRequestParams' | transloco }}:\r
                                    <span class="font-mono">{{ vinPath.requires.join(', ') }}</span>\r
                                </p>\r
                            </div>\r
                        </div>\r
\r
                        <ng-template #singleEndpoint>\r
                            <p class="mt-2 font-mono text-sm font-semibold text-stone-900 dark:text-white">\r
                                {{ apiRequestLabel(check) }}\r
                            </p>\r
                            <p\r
                                class="mt-1 text-xs text-stone-600 dark:text-stone-300"\r
                                *ngIf="check.featureName || check.featureCode"\r
                            >\r
                                {{ check.featureName || check.featureCode }}\r
                                <span class="text-stone-400" *ngIf="check.featureName">\r
                                    \xB7 {{ check.featureCode }}</span\r
                                >\r
                            </p>\r
                            <p\r
                                class="mt-2 text-xs text-stone-600 dark:text-stone-300"\r
                                *ngIf="check.requires?.length"\r
                            >\r
                                {{ 'smartFleet.rules.apiRequestParams' | transloco }}:\r
                                <span class="font-mono">{{ check.requires.join(', ') }}</span>\r
                                {{ 'smartFleet.rules.apiRequestParamsFromAsset' | transloco }}\r
                            </p>\r
                        </ng-template>\r
\r
                        <p\r
                            class="mt-2 text-xs text-amber-800 dark:text-amber-200"\r
                            *ngIf="check.sharedWith?.length"\r
                        >\r
                            {{\r
                                'smartFleet.rules.apiRequestShared'\r
                                    | transloco: { checks: sharedCheckLabels(check.sharedWith) }\r
                            }}\r
                        </p>\r
                    </div>\r
\r
                    <!-- Check-specific alert condition -->\r
                    <div\r
                        *ngIf="selectedCheck()?.condition as condition"\r
                        class="mt-3 rounded-xl border border-stone-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-950/40"\r
                    >\r
                        <p class="text-xs font-medium uppercase tracking-wide text-stone-500">\r
                            {{ 'smartFleet.rules.conditionTitle' | transloco }}\r
                        </p>\r
                        <p class="mt-2 text-sm text-stone-800 dark:text-stone-200">\r
                            {{ condition.summaryKey | transloco }}\r
                        </p>\r
                        <p\r
                            class="mt-2 text-xs text-stone-600 dark:text-stone-300"\r
                            *ngIf="condition.watchLabelKey"\r
                        >\r
                            <span class="font-semibold">{{ 'smartFleet.rules.conditionWatches' | transloco }}:</span>\r
                            {{ condition.watchLabelKey | transloco }}\r
                            <span class="font-mono text-stone-400" *ngIf="condition.watchPath">\r
                                ({{ condition.watchPath }})</span\r
                            >\r
                        </p>\r
                        <p\r
                            class="mt-1 text-xs text-stone-600 dark:text-stone-300"\r
                            *ngIf="condition.okStatuses?.length"\r
                        >\r
                            <span class="font-semibold">{{ 'smartFleet.rules.conditionOkStatus' | transloco }}:</span>\r
                            {{ condition.okStatuses.join(', ') }}\r
                        </p>\r
                    </div>\r
                </div>\r
\r
                <div class="mt-6 border-t border-stone-200/90 pt-5 dark:border-gray-800">\r
                    <h3 class="text-sm font-semibold text-stone-900 dark:text-white">\r
                        {{ 'smartFleet.rules.stepWhen' | transloco }}\r
                    </h3>\r
                </div>\r
\r
                <div class="mt-4 grid gap-4 md:grid-cols-2">\r
                    <div>\r
                        <span class="text-xs font-medium uppercase text-stone-500">{{\r
                            'smartFleet.rules.frequency' | transloco\r
                        }}</span>\r
                        <div class="mt-2 flex flex-wrap gap-1">\r
                            <button\r
                                *ngFor="let frequency of frequencies"\r
                                type="button"\r
                                (click)="setFrequency(frequency)"\r
                                class="rounded-xl px-3 py-1.5 text-sm font-medium transition-colors"\r
                                [class.bg-stone-900]="draft().frequency === frequency"\r
                                [class.text-white]="draft().frequency === frequency"\r
                                [class.text-stone-600]="draft().frequency !== frequency"\r
                                [class.hover:bg-stone-100]="draft().frequency !== frequency"\r
                            >\r
                                {{ 'smartFleet.frequency.' + frequency | transloco }}\r
                            </button>\r
                        </div>\r
\r
                        <label\r
                            class="mt-3 flex flex-col gap-1"\r
                            *ngIf="draft().frequency === 'custom'"\r
                        >\r
                            <span class="text-xs font-medium uppercase text-stone-500">{{\r
                                'smartFleet.rules.intervalDaysLabel' | transloco\r
                            }}</span>\r
                            <input\r
                                type="number"\r
                                min="1"\r
                                max="90"\r
                                [ngModel]="draft().intervalDays"\r
                                (ngModelChange)="setField('intervalDays', $event)"\r
                                name="intervalDays"\r
                                class="rounded-xl border border-stone-200 bg-white px-3 py-2 text-sm text-stone-900 focus:border-indigo-400 focus:outline-none dark:border-gray-700 dark:bg-gray-950 dark:text-white"\r
                            />\r
                            <span class="text-xs text-stone-500">{{\r
                                'smartFleet.rules.intervalDaysHint' | transloco\r
                            }}</span>\r
                        </label>\r
                    </div>\r
\r
                    <label class="flex flex-col gap-1" *ngIf="needsThreshold()">\r
                        <span class="text-xs font-medium uppercase text-stone-500">{{\r
                            thresholdLabelKey() | transloco\r
                        }}</span>\r
                        <input\r
                            type="number"\r
                            min="0"\r
                            max="365"\r
                            [ngModel]="draft().thresholdDays"\r
                            (ngModelChange)="setField('thresholdDays', $event)"\r
                            name="thresholdDays"\r
                            class="rounded-xl border border-stone-200 bg-white px-3 py-2 text-sm text-stone-900 focus:border-indigo-400 focus:outline-none dark:border-gray-700 dark:bg-gray-950 dark:text-white"\r
                        />\r
                        <span class="text-xs text-stone-500">{{\r
                            'smartFleet.rules.thresholdHintSpecific' | transloco\r
                        }}</span>\r
                    </label>\r
                </div>\r
\r
                <!-- Live next-10 preview for the selected cadence -->\r
                <div class="mt-4" *ngIf="draft().checkType">\r
                    <h3 class="text-sm font-semibold text-stone-900 dark:text-white">\r
                        {{ 'smartFleet.rules.draftNextRuns' | transloco }}\r
                    </h3>\r
                    <ol class="mt-2 grid gap-1 sm:grid-cols-2 lg:grid-cols-2">\r
                        <li\r
                            *ngFor="let run of draftNextRuns()"\r
                            class="rounded-lg bg-stone-50 px-3 py-2 text-xs text-stone-700 dark:bg-gray-950/50 dark:text-stone-300"\r
                        >\r
                            <span class="font-semibold text-stone-500">{{ run.index }}.</span>\r
                            {{ run.at | date: 'medium' }}\r
                        </li>\r
                    </ol>\r
                </div>\r
\r
                <!-- Channels -->\r
                <div class="mt-4">\r
                    <span class="text-xs font-medium uppercase text-stone-500">{{\r
                        'smartFleet.rules.channels' | transloco\r
                    }}</span>\r
                    <div class="mt-2 flex flex-wrap gap-2">\r
                        <button\r
                            *ngFor="let channel of channelOptions"\r
                            type="button"\r
                            (click)="toggleChannel(channel)"\r
                            class="inline-flex items-center gap-2.5 rounded-xl border px-3 py-1.5 text-sm font-medium transition-colors"\r
                            [class.border-indigo-600]="isChannelSelected(channel)"\r
                            [class.bg-indigo-600]="isChannelSelected(channel)"\r
                            [class.text-white]="isChannelSelected(channel)"\r
                            [class.border-stone-200]="!isChannelSelected(channel)"\r
                            [class.bg-white]="!isChannelSelected(channel)"\r
                            [class.text-stone-800]="!isChannelSelected(channel)"\r
                            [class.hover:border-stone-300]="!isChannelSelected(channel)"\r
                            [class.dark:border-gray-700]="!isChannelSelected(channel)"\r
                            [class.dark:bg-gray-900]="!isChannelSelected(channel)"\r
                            [class.dark:text-stone-100]="!isChannelSelected(channel)"\r
                        >\r
                            <span\r
                                class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"\r
                                [ngClass]="channelTone(channel, isChannelSelected(channel))"\r
                            >\r
                                <fleet-channel-icon [channel]="channel" />\r
                            </span>\r
                            {{ 'smartFleet.channel.' + channel | transloco }}\r
                        </button>\r
                    </div>\r
                </div>\r
\r
                <div class="mt-4 grid gap-4 md:grid-cols-2">\r
                    <label class="flex flex-col gap-1" *ngIf="isChannelSelected('email')">\r
                        <span class="text-xs font-medium uppercase text-stone-500">{{\r
                            'smartFleet.rules.emailRecipients' | transloco\r
                        }}</span>\r
                        <input\r
                            type="text"\r
                            [ngModel]="draft().emailRecipients"\r
                            (ngModelChange)="setField('emailRecipients', $event)"\r
                            name="emailRecipients"\r
                            placeholder="ops@company.com, fleet@company.com"\r
                            class="rounded-xl border border-stone-200 bg-white px-3 py-2 text-sm text-stone-900 focus:border-indigo-400 focus:outline-none dark:border-gray-700 dark:bg-gray-950 dark:text-white"\r
                        />\r
                        <span class="text-xs text-stone-500">{{\r
                            'smartFleet.rules.emailHint' | transloco\r
                        }}</span>\r
                    </label>\r
\r
                    <label class="flex flex-col gap-1" *ngIf="isChannelSelected('sms')">\r
                        <span class="text-xs font-medium uppercase text-stone-500">{{\r
                            'smartFleet.rules.smsRecipients' | transloco\r
                        }}</span>\r
                        <input\r
                            type="text"\r
                            [ngModel]="draft().smsRecipients"\r
                            (ngModelChange)="setField('smsRecipients', $event)"\r
                            name="smsRecipients"\r
                            placeholder="+573001112233"\r
                            class="rounded-xl border border-stone-200 bg-white px-3 py-2 text-sm text-stone-900 focus:border-indigo-400 focus:outline-none dark:border-gray-700 dark:bg-gray-950 dark:text-white"\r
                        />\r
                        <span class="text-xs text-stone-500">{{ 'smartFleet.rules.smsHint' | transloco }}</span>\r
                    </label>\r
\r
                    <label class="flex flex-col gap-1" *ngIf="isChannelSelected('whatsapp')">\r
                        <span class="text-xs font-medium uppercase text-stone-500">{{\r
                            'smartFleet.rules.whatsappRecipients' | transloco\r
                        }}</span>\r
                        <input\r
                            type="text"\r
                            [ngModel]="draft().whatsappRecipients"\r
                            (ngModelChange)="setField('whatsappRecipients', $event)"\r
                            name="whatsappRecipients"\r
                            placeholder="+573001112233"\r
                            class="rounded-xl border border-stone-200 bg-white px-3 py-2 text-sm text-stone-900 focus:border-indigo-400 focus:outline-none dark:border-gray-700 dark:bg-gray-950 dark:text-white"\r
                        />\r
                        <span class="text-xs text-stone-500">{{\r
                            'smartFleet.rules.whatsappHint' | transloco\r
                        }}</span>\r
                    </label>\r
\r
                    <label class="flex flex-col gap-1" *ngIf="isChannelSelected('webhook')">\r
                        <span class="text-xs font-medium uppercase text-stone-500">{{\r
                            'smartFleet.rules.webhookUrl' | transloco\r
                        }}</span>\r
                        <input\r
                            type="url"\r
                            [ngModel]="draft().webhookUrl"\r
                            (ngModelChange)="setField('webhookUrl', $event)"\r
                            name="webhookUrl"\r
                            placeholder="https://example.com/hooks/fleet"\r
                            class="rounded-xl border border-stone-200 bg-white px-3 py-2 text-sm text-stone-900 focus:border-indigo-400 focus:outline-none dark:border-gray-700 dark:bg-gray-950 dark:text-white"\r
                        />\r
                        <span class="text-xs text-stone-500">\r
                            {{ 'smartFleet.rules.webhookHint' | transloco }}\r
                            <a\r
                                [href]="webhookDocsUrl"\r
                                target="_blank"\r
                                rel="noopener noreferrer"\r
                                class="font-semibold text-indigo-600 underline underline-offset-2 dark:text-indigo-400"\r
                                >{{ 'smartFleet.rules.webhookDocs' | transloco }}</a\r
                            >\r
                        </span>\r
                    </label>\r
                </div>\r
\r
                <!-- Live cost estimate -->\r
                <div\r
                    class="mt-5 rounded-xl border border-stone-200/90 bg-stone-50 p-4 dark:border-gray-800 dark:bg-gray-950/50"\r
                    *ngIf="draft().checkType"\r
                >\r
                    <div class="flex flex-wrap items-center gap-2">\r
                        <mat-icon class="icon-size-5 text-stone-500">calculate</mat-icon>\r
                        <span class="text-sm font-semibold text-stone-900 dark:text-white">{{\r
                            'smartFleet.rules.estimateTitle' | transloco\r
                        }}</span>\r
                        <mat-spinner *ngIf="isEstimating()" diameter="16"></mat-spinner>\r
                    </div>\r
\r
                    <ng-container *ngIf="estimate() as data">\r
                        <p class="mt-2 text-sm text-stone-700 dark:text-stone-300">\r
                            {{\r
                                'smartFleet.rules.estimateSummary'\r
                                    | transloco\r
                                        : {\r
                                              assets: data.scope.assetCount,\r
                                              credits: data.rule.totalCredits\r
                                          }\r
                            }}\r
                        </p>\r
                        <p class="mt-1 text-xs text-stone-500 dark:text-stone-400">\r
                            {{\r
                                'smartFleet.rules.estimateFleetTotal'\r
                                    | transloco\r
                                        : {\r
                                              current: data.currentFleetMonthly.totalCredits,\r
                                              projected: data.projectedFleetMonthly\r
                                          }\r
                            }}\r
                        </p>\r
                        <div class="mt-3 flex flex-col gap-1" *ngIf="data.rule.breakdown.length">\r
                            <div\r
                                *ngFor="let entry of data.rule.breakdown"\r
                                class="flex items-center justify-between text-xs text-stone-600 dark:text-stone-300"\r
                            >\r
                                <span class="font-mono">{{\r
                                    endpointLabelForFeature(entry.featureCode)\r
                                }}</span>\r
                                <span\r
                                    >{{ entry.checksPerMonth }} \xD7\r
                                    {{ entry.pricePerCheck }} =\r
                                    {{ entry.creditsPerAsset }}</span\r
                                >\r
                            </div>\r
                        </div>\r
                    </ng-container>\r
                </div>\r
\r
                <div class="mt-5 flex justify-end">\r
                    <button\r
                        mat-flat-button\r
                        color="primary"\r
                        type="button"\r
                        [disabled]="!canSave() || isSaving()"\r
                        (click)="save()"\r
                        class="rounded-xl !px-6 !py-2"\r
                    >\r
                        <mat-spinner *ngIf="isSaving()" diameter="18" class="mr-2"></mat-spinner>\r
                        {{ 'smartFleet.rules.save' | transloco }}\r
                    </button>\r
                </div>\r
            </div>\r
\r
            <!-- Rule detail + schedule -->\r
            <div\r
                *ngIf="detailRule() as rule"\r
                class="rounded-2xl border border-stone-200/90 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900"\r
            >\r
                <div class="flex flex-wrap items-start justify-between gap-3">\r
                    <div class="min-w-0">\r
                        <h2 class="text-base font-semibold text-stone-900 dark:text-white">\r
                            {{ 'smartFleet.rules.details' | transloco }}\r
                        </h2>\r
                        <p class="mt-1 text-sm text-stone-500 dark:text-stone-400">\r
                            {{ 'smartFleet.checkType.' + rule.checkType | transloco }}\r
                            \xB7 {{ scopeLabel(rule) }}\r
                            \xB7 {{ frequencyLabel(rule) }}\r
                        </p>\r
                    </div>\r
                    <div class="flex shrink-0 items-center gap-2">\r
                        <button\r
                            mat-stroked-button\r
                            type="button"\r
                            (click)="editFromDetail()"\r
                            class="rounded-xl"\r
                        >\r
                            <mat-icon class="mr-1 icon-size-4">edit</mat-icon>\r
                            {{ 'smartFleet.rules.edit' | transloco }}\r
                        </button>\r
                        <button\r
                            mat-icon-button\r
                            type="button"\r
                            (click)="closeDetail()"\r
                            [matTooltip]="'smartFleet.cancel' | transloco"\r
                        >\r
                            <mat-icon>close</mat-icon>\r
                        </button>\r
                    </div>\r
                </div>\r
\r
                <div class="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">\r
                    <div>\r
                        <span class="text-xs font-medium uppercase text-stone-500">{{\r
                            'smartFleet.rules.scope' | transloco\r
                        }}</span>\r
                        <p class="mt-1 text-sm text-stone-900 dark:text-white">{{ scopeLabel(rule) }}</p>\r
                    </div>\r
                    <div>\r
                        <span class="text-xs font-medium uppercase text-stone-500">{{\r
                            'smartFleet.rules.frequency' | transloco\r
                        }}</span>\r
                        <p class="mt-1 text-sm text-stone-900 dark:text-white">\r
                            {{ frequencyLabel(rule) }}\r
                        </p>\r
                    </div>\r
                    <div>\r
                        <span class="text-xs font-medium uppercase text-stone-500">{{\r
                            'smartFleet.rules.channels' | transloco\r
                        }}</span>\r
                        <p class="mt-1 flex flex-wrap gap-1">\r
                            <span\r
                                *ngFor="let channel of rule.channels || []"\r
                                class="rounded-full bg-stone-100 px-2 py-0.5 text-xs font-medium text-stone-600 dark:bg-gray-800 dark:text-stone-300"\r
                                >{{ 'smartFleet.channel.' + channel | transloco }}</span\r
                            >\r
                        </p>\r
                    </div>\r
                    <div>\r
                        <span class="text-xs font-medium uppercase text-stone-500">{{\r
                            'smartFleet.rules.lastTriggered' | transloco\r
                        }}</span>\r
                        <p class="mt-1 text-sm text-stone-900 dark:text-white">\r
                            {{ rule.lastTriggeredAt ? (rule.lastTriggeredAt | date: 'medium') : '\u2014' }}\r
                        </p>\r
                    </div>\r
                </div>\r
\r
                <p\r
                    class="mt-3 text-xs text-stone-500 dark:text-stone-400"\r
                    *ngIf="schedule() as data"\r
                >\r
                    {{ 'smartFleet.rules.affectsCount' | transloco: { count: data.assetCount } }}\r
                    \xB7\r
                    {{ 'smartFleet.rules.intervalNote' | transloco: { interval: intervalLabel(data.intervalMs) } }}\r
                </p>\r
\r
                <div class="mt-5 grid gap-6 lg:grid-cols-2">\r
                    <div>\r
                        <h3 class="text-sm font-semibold text-stone-900 dark:text-white">\r
                            {{ 'smartFleet.rules.nextRuns' | transloco }}\r
                        </h3>\r
                        <div class="mt-3 flex justify-center py-8" *ngIf="isLoadingSchedule()">\r
                            <mat-spinner diameter="28"></mat-spinner>\r
                        </div>\r
                        <ol\r
                            class="mt-3 divide-y divide-stone-200/90 dark:divide-gray-800"\r
                            *ngIf="!isLoadingSchedule() && schedule()?.nextRuns?.length"\r
                        >\r
                            <li\r
                                *ngFor="let run of schedule()!.nextRuns"\r
                                class="flex items-center gap-3 py-2 text-sm"\r
                            >\r
                                <span\r
                                    class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-stone-100 text-xs font-semibold text-stone-600 dark:bg-gray-800 dark:text-stone-300"\r
                                    >{{ run.index }}</span\r
                                >\r
                                <span class="text-stone-900 dark:text-white">{{\r
                                    run.at | date: 'medium'\r
                                }}</span>\r
                            </li>\r
                        </ol>\r
                        <p\r
                            class="mt-3 text-sm text-stone-500 dark:text-stone-400"\r
                            *ngIf="!isLoadingSchedule() && !schedule()?.nextRuns?.length"\r
                        >\r
                            {{ 'smartFleet.rules.noUpcoming' | transloco }}\r
                        </p>\r
                    </div>\r
\r
                    <div>\r
                        <h3 class="text-sm font-semibold text-stone-900 dark:text-white">\r
                            {{ 'smartFleet.rules.upcomingVehicles' | transloco }}\r
                        </h3>\r
                        <div class="mt-3 flex justify-center py-8" *ngIf="isLoadingSchedule()">\r
                            <mat-spinner diameter="28"></mat-spinner>\r
                        </div>\r
                        <ul\r
                            class="mt-3 divide-y divide-stone-200/90 dark:divide-gray-800"\r
                            *ngIf="!isLoadingSchedule() && schedule()?.upcomingAssets?.length"\r
                        >\r
                            <li\r
                                *ngFor="let asset of schedule()!.upcomingAssets"\r
                                class="flex flex-wrap items-center justify-between gap-2 py-2 text-sm"\r
                            >\r
                                <a\r
                                    class="font-semibold text-indigo-600 underline-offset-4 hover:underline dark:text-indigo-400"\r
                                    [routerLink]="['/smart-fleet/assets', asset.assetId]"\r
                                >\r
                                    {{ asset.plate || asset.nickname || asset.assetId }}\r
                                    <span\r
                                        class="ml-1 font-normal text-stone-500"\r
                                        *ngIf="asset.nickname && asset.plate"\r
                                        >{{ asset.nickname }}</span\r
                                    >\r
                                </a>\r
                                <span class="text-xs text-stone-500 dark:text-stone-400">{{\r
                                    asset.nextCheckAt\r
                                        ? (asset.nextCheckAt | date: 'short')\r
                                        : ('smartFleet.rules.dueSoon' | transloco)\r
                                }}</span>\r
                            </li>\r
                        </ul>\r
                        <p\r
                            class="mt-3 text-sm text-stone-500 dark:text-stone-400"\r
                            *ngIf="!isLoadingSchedule() && !schedule()?.upcomingAssets?.length"\r
                        >\r
                            {{ 'smartFleet.rules.noUpcoming' | transloco }}\r
                        </p>\r
                    </div>\r
                </div>\r
            </div>\r
\r
            <!-- Rules list -->\r
            <div\r
                class="overflow-hidden rounded-2xl border border-stone-200/90 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900"\r
            >\r
                <div class="flex justify-center py-16" *ngIf="isLoading() && !rules().length">\r
                    <mat-spinner diameter="36"></mat-spinner>\r
                </div>\r
\r
                <p\r
                    class="px-5 py-12 text-center text-sm text-stone-500 dark:text-stone-400"\r
                    *ngIf="!isLoading() && !rules().length"\r
                >\r
                    {{ 'smartFleet.rules.empty' | transloco }}\r
                </p>\r
\r
                <table class="w-full" *ngIf="rules().length">\r
                    <thead class="bg-stone-50 dark:bg-gray-950/50">\r
                        <tr class="text-left text-xs font-medium uppercase text-stone-500">\r
                            <th class="px-5 py-3">{{ 'smartFleet.rules.check' | transloco }}</th>\r
                            <th class="px-5 py-3">{{ 'smartFleet.rules.scope' | transloco }}</th>\r
                            <th class="px-5 py-3">{{ 'smartFleet.rules.frequency' | transloco }}</th>\r
                            <th class="px-5 py-3">{{ 'smartFleet.rules.channels' | transloco }}</th>\r
                            <th class="px-5 py-3">\r
                                {{ 'smartFleet.rules.lastTriggered' | transloco }}\r
                            </th>\r
                            <th class="px-5 py-3"></th>\r
                        </tr>\r
                    </thead>\r
                    <tbody class="divide-y divide-stone-200/90 dark:divide-gray-800">\r
                        <tr\r
                            *ngFor="let rule of rules()"\r
                            class="cursor-pointer text-sm transition-colors hover:bg-stone-50 dark:hover:bg-gray-800/50"\r
                            [ngClass]="{\r
                                'bg-indigo-50 dark:bg-indigo-950/30': detailRule()?._id === rule._id,\r
                                'opacity-50': !rule.isActive\r
                            }"\r
                            (click)="openDetail(rule)"\r
                        >\r
                            <td class="px-5 py-3">\r
                                <span class="font-semibold text-stone-900 dark:text-white">{{\r
                                    'smartFleet.checkType.' + rule.checkType | transloco\r
                                }}</span>\r
                                <span\r
                                    class="ml-2 text-xs text-stone-500"\r
                                    *ngIf="rule.thresholdDays"\r
                                    >{{\r
                                        'smartFleet.rules.thresholdSummary'\r
                                            | transloco: { days: rule.thresholdDays }\r
                                    }}</span\r
                                >\r
                            </td>\r
                            <td class="px-5 py-3">\r
                                <a\r
                                    class="font-medium text-indigo-700 hover:underline dark:text-indigo-300"\r
                                    [routerLink]="['/smart-fleet/watch-rules']"\r
                                    [queryParams]="targetQuery(rule)"\r
                                    (click)="$event.stopPropagation()"\r
                                    >{{ scopeLabel(rule) }}</a\r
                                >\r
                            </td>\r
                            <td class="px-5 py-3 text-stone-600 dark:text-stone-300">\r
                                {{ frequencyLabel(rule) }}\r
                            </td>\r
                            <td class="px-5 py-3">\r
                                <span\r
                                    *ngFor="let channel of rule.channels"\r
                                    class="mr-1 rounded-full bg-stone-100 px-2 py-0.5 text-xs font-medium text-stone-600 dark:bg-gray-800 dark:text-stone-300"\r
                                    >{{ 'smartFleet.channel.' + channel | transloco }}</span\r
                                >\r
                            </td>\r
                            <td class="px-5 py-3 text-xs text-stone-500 dark:text-stone-400">\r
                                {{ rule.lastTriggeredAt ? (rule.lastTriggeredAt | date: 'short') : '\u2014' }}\r
                            </td>\r
                            <td class="px-5 py-3">\r
                                <div class="flex items-center justify-end gap-1">\r
                                    <button\r
                                        mat-icon-button\r
                                        type="button"\r
                                        (click)="openTarget(targetQuery(rule)); $event.stopPropagation()"\r
                                        [matTooltip]="'smartFleet.rules.edit' | transloco"\r
                                    >\r
                                        <mat-icon class="icon-size-5">edit</mat-icon>\r
                                    </button>\r
                                    <button\r
                                        mat-icon-button\r
                                        type="button"\r
                                        (click)="toggleRule(rule, $event)"\r
                                        [matTooltip]="\r
                                            (rule.isActive\r
                                                ? 'smartFleet.rules.pause'\r
                                                : 'smartFleet.rules.resume'\r
                                            ) | transloco\r
                                        "\r
                                    >\r
                                        <mat-icon class="icon-size-5">{{\r
                                            rule.isActive ? 'pause' : 'play_arrow'\r
                                        }}</mat-icon>\r
                                    </button>\r
                                    <button\r
                                        mat-icon-button\r
                                        type="button"\r
                                        (click)="deleteRule(rule, $event)"\r
                                        [matTooltip]="'smartFleet.rules.delete' | transloco"\r
                                        class="!text-red-500"\r
                                    >\r
                                        <mat-icon class="icon-size-5">delete</mat-icon>\r
                                    </button>\r
                                </div>\r
                            </td>\r
                        </tr>\r
                    </tbody>\r
                </table>\r
            </div>\r
        </div>\r
    </main>\r
</div>\r
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FleetWatchRulesComponent, { className: "FleetWatchRulesComponent", filePath: "src/app/modules/smart-fleet/watch-rules/fleet-watch-rules.component.ts", lineNumber: 105 });
})();
export {
  FLEET_WEBHOOK_DOCS_URL,
  FleetWatchRulesComponent
};
//# sourceMappingURL=chunk-R6WALNHJ.js.map
