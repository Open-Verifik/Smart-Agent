import {
  FleetChannelIconComponent
} from "./chunk-BIALBKKF.js";
import {
  FleetNavComponent,
  SmartFleetService
} from "./chunk-4NPR4CK5.js";
import {
  AuthRequiredGateService
} from "./chunk-A6DA237F.js";
import {
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger
} from "./chunk-C3RXWDTM.js";
import {
  MatSnackBar,
  MatSnackBarModule
} from "./chunk-O4LKJP5L.js";
import "./chunk-H3UX3NVF.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-NRO2XGZE.js";
import "./chunk-RKG2MQOF.js";
import "./chunk-QDHC3TI3.js";
import "./chunk-W2APQW4E.js";
import "./chunk-JURKDGMK.js";
import "./chunk-DW2XB3R4.js";
import "./chunk-WXNXCCYE.js";
import "./chunk-BYQUUNDI.js";
import "./chunk-PDLCCGUT.js";
import "./chunk-GG23NHUM.js";
import "./chunk-A4N7R4VF.js";
import "./chunk-64R62RHA.js";
import "./chunk-6VQY5BEJ.js";
import "./chunk-F5BVEUVX.js";
import "./chunk-V36MHRLI.js";
import "./chunk-EVWXSBKG.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-CTAWHRE6.js";
import "./chunk-WKFG3L4B.js";
import "./chunk-OIBNGD5S.js";
import "./chunk-7FACNXV2.js";
import {
  MatButton,
  MatButtonModule,
  MatIconButton
} from "./chunk-NBA3XD53.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-EIYDU75T.js";
import "./chunk-IXSC6NFZ.js";
import {
  FormsModule
} from "./chunk-5EV2TUYF.js";
import {
  TranslocoModule,
  TranslocoPipe,
  TranslocoService
} from "./chunk-VENEX45A.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-DM2XPT7T.js";
import "./chunk-KTYFS5OT.js";
import {
  CommonModule,
  Component,
  NgClass,
  NgForOf,
  NgIf,
  ViewEncapsulation,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-I5BUD46C.js";
import {
  __spreadValues
} from "./chunk-F5M2C4EZ.js";

// src/app/modules/smart-fleet/alerts/fleet-alerts.component.ts
var _c0 = (a0) => ({ count: a0 });
var _c1 = (a0) => ["/smart-fleet/assets", a0];
var _c2 = (a0, a1, a2) => ({ start: a0, end: a1, total: a2 });
var _c3 = (a0, a1) => ({ page: a0, pages: a1 });
function FleetAlertsComponent_button_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 26);
    \u0275\u0275listener("click", function FleetAlertsComponent_button_18_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.acknowledgeSelected());
    });
    \u0275\u0275elementStart(1, "mat-icon", 13);
    \u0275\u0275text(2, "done_all");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r2.isAcknowledging());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 2, "smartFleet.alerts.acknowledgeSelected", \u0275\u0275pureFunction1(5, _c0, ctx_r2.selectedCount())), " ");
  }
}
function FleetAlertsComponent_button_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 27);
    \u0275\u0275listener("click", function FleetAlertsComponent_button_34_Template_button_click_0_listener() {
      const option_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setStatus(option_r5));
    });
    \u0275\u0275elementStart(1, "mat-icon", 28);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("bg-stone-900", ctx_r2.status() === option_r5)("text-white", ctx_r2.status() === option_r5)("text-stone-600", ctx_r2.status() !== option_r5)("hover:bg-stone-100", ctx_r2.status() !== option_r5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.statusIcon(option_r5));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 10, "smartFleet.alerts.status_" + option_r5), " ");
  }
}
function FleetAlertsComponent_button_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 29);
    \u0275\u0275listener("click", function FleetAlertsComponent_button_36_Template_button_click_0_listener() {
      const option_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setSeverity(option_r7));
    });
    \u0275\u0275elementStart(1, "mat-icon", 28);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("ring-2", ctx_r2.severity() === option_r7)("ring-offset-1", ctx_r2.severity() === option_r7);
    \u0275\u0275property("ngClass", ctx_r2.severityClasses(option_r7));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.severityIcon(option_r7));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 7, "smartFleet.severity." + option_r7), " ");
  }
}
function FleetAlertsComponent_div_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275element(1, "mat-spinner", 31);
    \u0275\u0275elementEnd();
  }
}
function FleetAlertsComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "span", 33)(2, "mat-icon", 34);
    \u0275\u0275text(3, "notifications_off");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "p", 35);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 1, "smartFleet.alerts.empty"), " ");
  }
}
function FleetAlertsComponent_div_42_div_8_a_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 58)(1, "mat-icon", 28);
    \u0275\u0275text(2, "directions_car");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const alert_r10 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c1, ctx_r2.assetId(alert_r10)));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.assetLabel(alert_r10), " ");
  }
}
function FleetAlertsComponent_div_42_div_8_p_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 59);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const alert_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", alert_r10.message, " ");
  }
}
function FleetAlertsComponent_div_42_div_8_span_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 60);
    \u0275\u0275element(1, "fleet-channel-icon", 61);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const delivery_r11 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", ctx_r2.deliveryTone(delivery_r11.status))("matTooltip", ctx_r2.deliveryLabel(delivery_r11.channel, delivery_r11.status));
    \u0275\u0275advance();
    \u0275\u0275property("channel", delivery_r11.channel);
  }
}
function FleetAlertsComponent_div_42_div_8_button_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 62);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275listener("click", function FleetAlertsComponent_div_42_div_8_button_26_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const alert_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.acknowledge(alert_r10));
    });
    \u0275\u0275elementStart(3, "mat-icon", 63);
    \u0275\u0275text(4, "done");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 3, "smartFleet.alerts.acknowledge"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 5, "smartFleet.alerts.acknowledge"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 7, "smartFleet.alerts.acknowledge"), " ");
  }
}
function FleetAlertsComponent_div_42_div_8_span_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 64)(1, "mat-icon", 28);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "smartFleet.alerts.acknowledged"), " ");
  }
}
function FleetAlertsComponent_div_42_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41)(1, "input", 42);
    \u0275\u0275listener("change", function FleetAlertsComponent_div_42_div_8_Template_input_change_1_listener() {
      const alert_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleSelection(alert_r10));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 43)(3, "mat-icon", 44);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 45)(6, "div", 46)(7, "span", 47)(8, "mat-icon", 28);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 48);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, FleetAlertsComponent_div_42_div_8_a_15_Template, 4, 4, "a", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p", 50);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, FleetAlertsComponent_div_42_div_8_p_18_Template, 2, 1, "p", 51);
    \u0275\u0275elementStart(19, "div", 52)(20, "span", 53)(21, "mat-icon", 28);
    \u0275\u0275text(22, "schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275template(24, FleetAlertsComponent_div_42_div_8_span_24_Template, 2, 3, "span", 54);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 55);
    \u0275\u0275template(26, FleetAlertsComponent_div_42_div_8_button_26_Template, 7, 9, "button", 56)(27, FleetAlertsComponent_div_42_div_8_span_27_Template, 5, 3, "span", 57);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const alert_r10 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("opacity-60", alert_r10.acknowledgedAt || alert_r10.resolvedAt);
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r2.isSelected(alert_r10));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r2.severityClasses(alert_r10.severity));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.alertIcon(alert_r10.type));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r2.severityClasses(alert_r10.severity));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.severityIcon(alert_r10.severity));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 16, "smartFleet.severity." + alert_r10.severity), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 18, ctx_r2.checkLabelKey(alert_r10.type)));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.assetId(alert_r10));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", alert_r10.title, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", alert_r10.message);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r2.formatDate(alert_r10.detectedAt), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", alert_r10.deliveries);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !alert_r10.acknowledgedAt);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", alert_r10.acknowledgedAt);
  }
}
function FleetAlertsComponent_div_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 36)(2, "input", 37);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275listener("change", function FleetAlertsComponent_div_42_Template_input_change_2_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleSelectAll());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 38);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 39);
    \u0275\u0275template(8, FleetAlertsComponent_div_42_div_8_Template, 28, 20, "div", 40);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r2.allSelected());
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(3, 4, "smartFleet.alerts.selectAll"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 6, "smartFleet.alerts.selectAll"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.alerts());
  }
}
function FleetAlertsComponent_div_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 65)(1, "span", 66);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 67)(5, "button", 68);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275listener("click", function FleetAlertsComponent_div_43_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.previousPage());
    });
    \u0275\u0275elementStart(7, "mat-icon");
    \u0275\u0275text(8, "chevron_left");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "span", 66);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 68);
    \u0275\u0275pipe(13, "transloco");
    \u0275\u0275listener("click", function FleetAlertsComponent_div_43_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.nextPage());
    });
    \u0275\u0275elementStart(14, "mat-icon");
    \u0275\u0275text(15, "chevron_right");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 6, "smartFleet.alerts.paginationRange", \u0275\u0275pureFunction3(16, _c2, ctx_r2.rangeStart(), ctx_r2.rangeEnd(), ctx_r2.total())), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", !ctx_r2.canGoPrevious())("matTooltip", \u0275\u0275pipeBind1(6, 9, "smartFleet.previousPage"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(11, 11, "smartFleet.pageOf", \u0275\u0275pureFunction2(20, _c3, ctx_r2.page(), ctx_r2.pages())), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r2.canGoNext())("matTooltip", \u0275\u0275pipeBind1(13, 14, "smartFleet.nextPage"));
  }
}
var FleetAlertsComponent = class _FleetAlertsComponent {
  constructor() {
    this._fleetService = inject(SmartFleetService);
    this._authGate = inject(AuthRequiredGateService);
    this._transloco = inject(TranslocoService);
    this._snackBar = inject(MatSnackBar);
    this.alerts = this._fleetService.alerts;
    this.isLoading = this._fleetService.isLoadingAlerts;
    this._pagination = this._fleetService.alertsPage;
    this.page = computed(() => this._pagination().page);
    this.pages = computed(() => this._pagination().pages);
    this.total = computed(() => this._pagination().total);
    this.rangeStart = computed(() => {
      const state = this._pagination();
      return state.total === 0 ? 0 : (state.page - 1) * state.perPage + 1;
    });
    this.rangeEnd = computed(() => {
      const state = this._pagination();
      return Math.min(state.page * state.perPage, state.total);
    });
    this.canGoPrevious = computed(() => this.page() > 1 && !this.isLoading());
    this.canGoNext = computed(() => this.page() < this.pages() && !this.isLoading());
    this.statuses = ["open", "acknowledged", "resolved", "all"];
    this.severities = ["critical", "warning", "info"];
    this.status = signal("open");
    this.severity = signal(null);
    this.selected = signal(/* @__PURE__ */ new Set());
    this.isAcknowledging = signal(false);
    this.isExporting = signal(false);
    this.selectedCount = computed(() => this.selected().size);
    this.hasSelection = computed(() => this.selectedCount() > 0);
    this.allSelected = computed(() => {
      const alerts = this.alerts();
      return alerts.length > 0 && alerts.every((alert) => this.selected().has(alert._id));
    });
  }
  ngOnInit() {
    this._authGate.runWithAuthOrDialog({
      onAuthenticated: () => this.loadPage(1),
      panelClass: "auth-required-dialog"
    });
  }
  loadPage(page) {
    this.selected.set(/* @__PURE__ */ new Set());
    this._fleetService.getAlerts(__spreadValues({
      page,
      status: this.status()
    }, this.severity() ? { severity: this.severity() } : {})).subscribe({
      error: (err) => this._reportFailure("smartFleet.alerts.loadFailed", err)
    });
  }
  setStatus(status) {
    this.status.set(status);
    this.loadPage(1);
  }
  setSeverity(severity) {
    this.severity.set(this.severity() === severity ? null : severity);
    this.loadPage(1);
  }
  previousPage() {
    if (this.canGoPrevious())
      this.loadPage(this.page() - 1);
  }
  nextPage() {
    if (this.canGoNext())
      this.loadPage(this.page() + 1);
  }
  toggleSelection(alert) {
    this.selected.update((current) => {
      const next = new Set(current);
      if (next.has(alert._id))
        next.delete(alert._id);
      else
        next.add(alert._id);
      return next;
    });
  }
  isSelected(alert) {
    return this.selected().has(alert._id);
  }
  toggleSelectAll() {
    if (this.allSelected()) {
      this.selected.set(/* @__PURE__ */ new Set());
      return;
    }
    this.selected.set(new Set(this.alerts().map((alert) => alert._id)));
  }
  acknowledgeSelected() {
    if (!this.hasSelection() || this.isAcknowledging())
      return;
    this.isAcknowledging.set(true);
    this._fleetService.acknowledgeAlerts([...this.selected()]).subscribe({
      next: (response) => {
        this.isAcknowledging.set(false);
        this._snackBar.open(this._transloco.translate("smartFleet.alerts.acknowledgedCount", {
          count: response.data.acknowledged
        }), void 0, { duration: 3e3 });
        this.loadPage(this.page());
      },
      error: (err) => {
        this.isAcknowledging.set(false);
        this._reportFailure("smartFleet.alerts.acknowledgeFailed", err);
      }
    });
  }
  acknowledge(alert) {
    this._fleetService.acknowledgeAlert(alert._id).subscribe({
      next: () => this.loadPage(this.page()),
      error: (err) => this._reportFailure("smartFleet.alerts.acknowledgeFailed", err)
    });
  }
  /** Exported server-side so the file matches what the backend considers an alert. */
  export(format) {
    this.isExporting.set(true);
    this._fleetService.exportAlerts(__spreadValues({
      format
    }, this.severity() ? { severity: this.severity() } : {})).subscribe({
      next: (blob) => {
        this.isExporting.set(false);
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `fleet-alerts.${format}`;
        link.click();
        URL.revokeObjectURL(url);
      },
      error: (err) => {
        this.isExporting.set(false);
        this._reportFailure("smartFleet.alerts.exportFailed", err);
      }
    });
  }
  assetLabel(alert) {
    const asset = alert.asset;
    if (!asset || typeof asset === "string")
      return "\u2014";
    return asset.plate || asset.vin || asset.nickname || "\u2014";
  }
  assetId(alert) {
    const asset = alert.asset;
    if (!asset)
      return null;
    return typeof asset === "string" ? asset : asset._id ?? null;
  }
  statusIcon(status) {
    switch (status) {
      case "open":
        return "notifications";
      case "acknowledged":
        return "done";
      case "resolved":
        return "task_alt";
      default:
        return "inbox";
    }
  }
  severityIcon(severity) {
    switch (severity) {
      case "critical":
        return "error";
      case "warning":
        return "warning_amber";
      default:
        return "info";
    }
  }
  alertIcon(type) {
    if (type.startsWith("soat"))
      return "verified_user";
    if (type.startsWith("rtm"))
      return "build";
    if (type === "new_comparendo" || type === "fine_amount_changed")
      return "gavel";
    if (type === "ownership_changed")
      return "badge";
    if (type === "new_claim")
      return "car_crash";
    if (type === "check_failed")
      return "cloud_off";
    return "notifications";
  }
  checkLabelKey(type) {
    if (type.startsWith("soat"))
      return "smartFleet.checkType.soat";
    if (type.startsWith("rtm"))
      return "smartFleet.checkType.rtm";
    if (type === "new_comparendo" || type === "fine_amount_changed")
      return "smartFleet.checkType.comparendos";
    if (type === "ownership_changed")
      return "smartFleet.checkType.ownership";
    if (type === "new_claim")
      return "smartFleet.checkType.claims";
    if (type === "check_failed")
      return "smartFleet.alerts.checkFailed";
    return "smartFleet.checkType.custom";
  }
  deliveryTone(status) {
    switch (status) {
      case "sent":
        return "bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-200";
      case "failed":
        return "bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-200";
      case "skipped":
        return "bg-stone-100 text-stone-400 dark:bg-gray-800 dark:text-stone-500";
      default:
        return "bg-stone-100 text-stone-600 dark:bg-gray-800 dark:text-stone-300";
    }
  }
  deliveryLabel(channel, status) {
    const name = this._transloco.translate("smartFleet.channel." + channel);
    const state = this._transloco.translate("smartFleet.alerts.delivery." + status);
    return `${name}: ${state}`;
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
  formatDate(value) {
    if (!value)
      return "\u2014";
    return new Date(value).toLocaleString();
  }
  _reportFailure(key, error) {
    const detail = error?.error;
    const message = this._transloco.translate(key);
    console.error("[SmartFleet]", key, error);
    this._snackBar.open(detail?.message ? `${message}: ${detail.message}` : message, this._transloco.translate("smartFleet.dismiss"), { duration: 6e3 });
  }
  static {
    this.\u0275fac = function FleetAlertsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FleetAlertsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FleetAlertsComponent, selectors: [["fleet-alerts"]], decls: 44, vars: 21, consts: [["exportMenu", "matMenu"], [1, "flex", "min-h-screen", "min-w-0", "flex-auto", "flex-col", "bg-stone-50", "dark:bg-gray-950"], [1, "border-b", "border-stone-200/90", "bg-white/90", "px-5", "py-6", "backdrop-blur-sm", "dark:border-gray-800", "dark:bg-gray-950/90", "md:px-8", "md:py-8"], [1, "mx-auto", "flex", "w-full", "max-w-7xl", "flex-col", "gap-5"], [1, "flex", "flex-wrap", "items-start", "justify-between", "gap-3"], [1, "flex", "min-w-0", "items-start", "gap-3"], ["mat-icon-button", "", "type", "button", "routerLink", "/smart-fleet", 1, "shrink-0", "!text-stone-600", "dark:!text-stone-300", 3, "matTooltip"], [1, "min-w-0"], [1, "text-2xl", "font-semibold", "tracking-tight", "text-stone-900", "dark:text-white", "md:text-3xl"], [1, "mt-1", "text-sm", "text-stone-500", "dark:text-stone-400"], [1, "flex", "shrink-0", "flex-wrap", "items-center", "gap-2"], ["mat-stroked-button", "", "type", "button", "class", "rounded-xl !px-5 !py-2", 3, "disabled", "click", 4, "ngIf"], ["mat-stroked-button", "", "type", "button", 1, "rounded-xl", "!px-5", "!py-2", 3, "matMenuTriggerFor", "disabled"], [1, "mr-2", "icon-size-5"], ["mat-menu-item", "", "type", "button", 3, "click"], [1, "flex", "flex-wrap", "items-center", "gap-4"], [1, "flex", "flex-wrap", "gap-1"], ["type", "button", "class", "inline-flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-sm font-medium transition-colors", 3, "bg-stone-900", "text-white", "text-stone-600", "hover:bg-stone-100", "click", 4, "ngFor", "ngForOf"], ["type", "button", "class", "inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold transition-all", 3, "ngClass", "ring-2", "ring-offset-1", "click", 4, "ngFor", "ngForOf"], [1, "flex", "flex-auto", "flex-col", "px-5", "py-8", "md:px-8", "md:py-10"], [1, "mx-auto", "flex", "w-full", "max-w-7xl", "flex-col", "gap-6"], [1, "overflow-hidden", "rounded-2xl", "border", "border-stone-200/90", "bg-white", "shadow-sm", "dark:border-gray-800", "dark:bg-gray-900"], ["class", "flex justify-center py-16", 4, "ngIf"], ["class", "flex flex-col items-center gap-2 px-5 py-16 text-center", 4, "ngIf"], [4, "ngIf"], ["class", "flex flex-wrap items-center justify-between gap-3", 4, "ngIf"], ["mat-stroked-button", "", "type", "button", 1, "rounded-xl", "!px-5", "!py-2", 3, "click", "disabled"], ["type", "button", 1, "inline-flex", "items-center", "gap-1.5", "rounded-xl", "px-3", "py-1.5", "text-sm", "font-medium", "transition-colors", 3, "click"], [1, "icon-size-4"], ["type", "button", 1, "inline-flex", "items-center", "gap-1", "rounded-full", "px-3", "py-1", "text-xs", "font-semibold", "transition-all", 3, "click", "ngClass"], [1, "flex", "justify-center", "py-16"], ["diameter", "36"], [1, "flex", "flex-col", "items-center", "gap-2", "px-5", "py-16", "text-center"], [1, "flex", "h-14", "w-14", "items-center", "justify-center", "rounded-2xl", "bg-stone-100", "text-stone-400", "dark:bg-gray-800"], [1, "icon-size-8"], [1, "text-sm", "text-stone-500", "dark:text-stone-400"], [1, "flex", "items-center", "gap-3", "border-b", "border-stone-200/90", "bg-stone-50", "px-5", "py-3", "dark:border-gray-800", "dark:bg-gray-950/50"], ["type", "checkbox", 1, "h-4", "w-4", "rounded", "border-stone-300", "text-indigo-600", 3, "change", "checked"], [1, "text-xs", "font-medium", "uppercase", "text-stone-500"], [1, "divide-y", "divide-stone-200/90", "dark:divide-gray-800"], ["class", "flex flex-wrap items-start gap-3 px-5 py-4 transition-colors hover:bg-stone-50 dark:hover:bg-gray-800/50", 3, "opacity-60", 4, "ngFor", "ngForOf"], [1, "flex", "flex-wrap", "items-start", "gap-3", "px-5", "py-4", "transition-colors", "hover:bg-stone-50", "dark:hover:bg-gray-800/50"], ["type", "checkbox", 1, "mt-1", "h-4", "w-4", "shrink-0", "rounded", "border-stone-300", "text-indigo-600", 3, "change", "checked"], [1, "flex", "h-12", "w-12", "shrink-0", "items-center", "justify-center", "rounded-2xl", 3, "ngClass"], [1, "icon-size-6"], [1, "min-w-0", "flex-1"], [1, "flex", "flex-wrap", "items-center", "gap-2"], [1, "inline-flex", "items-center", "gap-1", "rounded-full", "px-2", "py-0.5", "text-[11px]", "font-semibold", 3, "ngClass"], [1, "text-xs", "font-medium", "text-stone-500"], ["class", "inline-flex items-center gap-1 rounded-lg bg-stone-100 px-2 py-0.5 font-mono text-xs font-semibold text-stone-800 hover:bg-stone-200 dark:bg-gray-800 dark:text-stone-200", 3, "routerLink", 4, "ngIf"], [1, "mt-1.5", "text-sm", "font-semibold", "text-stone-900", "dark:text-white"], ["class", "mt-1 text-xs text-stone-600 dark:text-stone-300", 4, "ngIf"], [1, "mt-2", "flex", "flex-wrap", "items-center", "gap-2"], [1, "inline-flex", "items-center", "gap-1", "text-xs", "text-stone-400"], ["class", "flex h-8 w-8 items-center justify-center rounded-lg", 3, "ngClass", "matTooltip", 4, "ngFor", "ngForOf"], [1, "flex", "shrink-0", "items-center", "gap-2"], ["type", "button", "class", "inline-flex items-center gap-1.5 rounded-xl border border-stone-200 px-3 py-2 text-sm font-medium text-stone-700 hover:bg-stone-50 dark:border-gray-700 dark:text-stone-200 dark:hover:bg-gray-800", 3, "matTooltip", "click", 4, "ngIf"], ["class", "inline-flex items-center gap-1 text-xs font-medium text-emerald-600 dark:text-emerald-400", 4, "ngIf"], [1, "inline-flex", "items-center", "gap-1", "rounded-lg", "bg-stone-100", "px-2", "py-0.5", "font-mono", "text-xs", "font-semibold", "text-stone-800", "hover:bg-stone-200", "dark:bg-gray-800", "dark:text-stone-200", 3, "routerLink"], [1, "mt-1", "text-xs", "text-stone-600", "dark:text-stone-300"], [1, "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-lg", 3, "ngClass", "matTooltip"], [3, "channel"], ["type", "button", 1, "inline-flex", "items-center", "gap-1.5", "rounded-xl", "border", "border-stone-200", "px-3", "py-2", "text-sm", "font-medium", "text-stone-700", "hover:bg-stone-50", "dark:border-gray-700", "dark:text-stone-200", "dark:hover:bg-gray-800", 3, "click", "matTooltip"], [1, "icon-size-5"], [1, "inline-flex", "items-center", "gap-1", "text-xs", "font-medium", "text-emerald-600", "dark:text-emerald-400"], [1, "flex", "flex-wrap", "items-center", "justify-between", "gap-3"], [1, "text-xs", "text-stone-500", "dark:text-stone-400"], [1, "flex", "items-center", "gap-2"], ["mat-icon-button", "", "type", "button", 3, "click", "disabled", "matTooltip"]], template: function FleetAlertsComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
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
        \u0275\u0275elementStart(17, "div", 10);
        \u0275\u0275template(18, FleetAlertsComponent_button_18_Template, 5, 7, "button", 11);
        \u0275\u0275elementStart(19, "button", 12)(20, "mat-icon", 13);
        \u0275\u0275text(21, "download");
        \u0275\u0275elementEnd();
        \u0275\u0275text(22);
        \u0275\u0275pipe(23, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "mat-menu", null, 0)(26, "button", 14);
        \u0275\u0275listener("click", function FleetAlertsComponent_Template_button_click_26_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.export("csv"));
        });
        \u0275\u0275text(27, "CSV");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "button", 14);
        \u0275\u0275listener("click", function FleetAlertsComponent_Template_button_click_28_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.export("xlsx"));
        });
        \u0275\u0275text(29, "XLSX");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "button", 14);
        \u0275\u0275listener("click", function FleetAlertsComponent_Template_button_click_30_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.export("jsonl"));
        });
        \u0275\u0275text(31, "JSONL");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(32, "div", 15)(33, "div", 16);
        \u0275\u0275template(34, FleetAlertsComponent_button_34_Template, 5, 12, "button", 17);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "div", 16);
        \u0275\u0275template(36, FleetAlertsComponent_button_36_Template, 5, 9, "button", 18);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(37, "main", 19)(38, "div", 20)(39, "div", 21);
        \u0275\u0275template(40, FleetAlertsComponent_div_40_Template, 2, 0, "div", 22)(41, FleetAlertsComponent_div_41_Template, 7, 3, "div", 23)(42, FleetAlertsComponent_div_42_Template, 9, 8, "div", 24);
        \u0275\u0275elementEnd();
        \u0275\u0275template(43, FleetAlertsComponent_div_43_Template, 16, 23, "div", 25);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        const exportMenu_r14 = \u0275\u0275reference(25);
        \u0275\u0275advance(6);
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(7, 13, "smartFleet.back"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 15, "smartFleet.alerts.title"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 17, "smartFleet.alerts.subtitle"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.hasSelection());
        \u0275\u0275advance();
        \u0275\u0275property("matMenuTriggerFor", exportMenu_r14)("disabled", ctx.isExporting());
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(23, 19, "smartFleet.alerts.export"), " ");
        \u0275\u0275advance(12);
        \u0275\u0275property("ngForOf", ctx.statuses);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.severities);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", ctx.isLoading() && !ctx.alerts().length);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isLoading() && !ctx.alerts().length);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.alerts().length);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.pages() > 1);
      }
    }, dependencies: [
      CommonModule,
      NgClass,
      NgForOf,
      NgIf,
      FormsModule,
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
      MatMenuModule,
      MatMenu,
      MatMenuItem,
      MatMenuTrigger,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatSnackBarModule,
      FleetNavComponent,
      FleetChannelIconComponent
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FleetAlertsComponent, [{
    type: Component,
    args: [{ selector: "fleet-alerts", standalone: true, imports: [
      CommonModule,
      FormsModule,
      TranslocoModule,
      RouterModule,
      MatButtonModule,
      MatIconModule,
      MatTooltipModule,
      MatMenuModule,
      MatProgressSpinnerModule,
      MatSnackBarModule,
      FleetNavComponent,
      FleetChannelIconComponent
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
                            {{ 'smartFleet.alerts.title' | transloco }}\r
                        </h1>\r
                        <p class="mt-1 text-sm text-stone-500 dark:text-stone-400">\r
                            {{ 'smartFleet.alerts.subtitle' | transloco }}\r
                        </p>\r
                    </div>\r
                </div>\r
\r
                <div class="flex shrink-0 flex-wrap items-center gap-2">\r
                    <button\r
                        mat-stroked-button\r
                        type="button"\r
                        *ngIf="hasSelection()"\r
                        [disabled]="isAcknowledging()"\r
                        (click)="acknowledgeSelected()"\r
                        class="rounded-xl !px-5 !py-2"\r
                    >\r
                        <mat-icon class="mr-2 icon-size-5">done_all</mat-icon>\r
                        {{\r
                            'smartFleet.alerts.acknowledgeSelected'\r
                                | transloco: { count: selectedCount() }\r
                        }}\r
                    </button>\r
                    <button\r
                        mat-stroked-button\r
                        type="button"\r
                        [matMenuTriggerFor]="exportMenu"\r
                        [disabled]="isExporting()"\r
                        class="rounded-xl !px-5 !py-2"\r
                    >\r
                        <mat-icon class="mr-2 icon-size-5">download</mat-icon>\r
                        {{ 'smartFleet.alerts.export' | transloco }}\r
                    </button>\r
                    <mat-menu #exportMenu="matMenu">\r
                        <button mat-menu-item type="button" (click)="export('csv')">CSV</button>\r
                        <button mat-menu-item type="button" (click)="export('xlsx')">XLSX</button>\r
                        <button mat-menu-item type="button" (click)="export('jsonl')">JSONL</button>\r
                    </mat-menu>\r
                </div>\r
            </div>\r
\r
            <!-- Filters -->\r
            <div class="flex flex-wrap items-center gap-4">\r
                <div class="flex flex-wrap gap-1">\r
                    <button\r
                        *ngFor="let option of statuses"\r
                        type="button"\r
                        (click)="setStatus(option)"\r
                        class="inline-flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-sm font-medium transition-colors"\r
                        [class.bg-stone-900]="status() === option"\r
                        [class.text-white]="status() === option"\r
                        [class.text-stone-600]="status() !== option"\r
                        [class.hover:bg-stone-100]="status() !== option"\r
                    >\r
                        <mat-icon class="icon-size-4">{{ statusIcon(option) }}</mat-icon>\r
                        {{ 'smartFleet.alerts.status_' + option | transloco }}\r
                    </button>\r
                </div>\r
\r
                <div class="flex flex-wrap gap-1">\r
                    <button\r
                        *ngFor="let option of severities"\r
                        type="button"\r
                        (click)="setSeverity(option)"\r
                        class="inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold transition-all"\r
                        [ngClass]="severityClasses(option)"\r
                        [class.ring-2]="severity() === option"\r
                        [class.ring-offset-1]="severity() === option"\r
                    >\r
                        <mat-icon class="icon-size-4">{{ severityIcon(option) }}</mat-icon>\r
                        {{ 'smartFleet.severity.' + option | transloco }}\r
                    </button>\r
                </div>\r
            </div>\r
        </div>\r
    </header>\r
\r
    <main class="flex flex-auto flex-col px-5 py-8 md:px-8 md:py-10">\r
        <div class="mx-auto flex w-full max-w-7xl flex-col gap-6">\r
            <div\r
                class="overflow-hidden rounded-2xl border border-stone-200/90 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900"\r
            >\r
                <div class="flex justify-center py-16" *ngIf="isLoading() && !alerts().length">\r
                    <mat-spinner diameter="36"></mat-spinner>\r
                </div>\r
\r
                <div\r
                    class="flex flex-col items-center gap-2 px-5 py-16 text-center"\r
                    *ngIf="!isLoading() && !alerts().length"\r
                >\r
                    <span\r
                        class="flex h-14 w-14 items-center justify-center rounded-2xl bg-stone-100 text-stone-400 dark:bg-gray-800"\r
                    >\r
                        <mat-icon class="icon-size-8">notifications_off</mat-icon>\r
                    </span>\r
                    <p class="text-sm text-stone-500 dark:text-stone-400">\r
                        {{ 'smartFleet.alerts.empty' | transloco }}\r
                    </p>\r
                </div>\r
\r
                <div *ngIf="alerts().length">\r
                    <div\r
                        class="flex items-center gap-3 border-b border-stone-200/90 bg-stone-50 px-5 py-3 dark:border-gray-800 dark:bg-gray-950/50"\r
                    >\r
                        <input\r
                            type="checkbox"\r
                            [checked]="allSelected()"\r
                            (change)="toggleSelectAll()"\r
                            class="h-4 w-4 rounded border-stone-300 text-indigo-600"\r
                            [attr.aria-label]="'smartFleet.alerts.selectAll' | transloco"\r
                        />\r
                        <span class="text-xs font-medium uppercase text-stone-500">{{\r
                            'smartFleet.alerts.selectAll' | transloco\r
                        }}</span>\r
                    </div>\r
\r
                    <div class="divide-y divide-stone-200/90 dark:divide-gray-800">\r
                        <div\r
                            *ngFor="let alert of alerts()"\r
                            class="flex flex-wrap items-start gap-3 px-5 py-4 transition-colors hover:bg-stone-50 dark:hover:bg-gray-800/50"\r
                            [class.opacity-60]="alert.acknowledgedAt || alert.resolvedAt"\r
                        >\r
                            <input\r
                                type="checkbox"\r
                                [checked]="isSelected(alert)"\r
                                (change)="toggleSelection(alert)"\r
                                class="mt-1 h-4 w-4 shrink-0 rounded border-stone-300 text-indigo-600"\r
                            />\r
\r
                            <span\r
                                class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl"\r
                                [ngClass]="severityClasses(alert.severity)"\r
                            >\r
                                <mat-icon class="icon-size-6">{{ alertIcon(alert.type) }}</mat-icon>\r
                            </span>\r
\r
                            <div class="min-w-0 flex-1">\r
                                <div class="flex flex-wrap items-center gap-2">\r
                                    <span\r
                                        class="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-semibold"\r
                                        [ngClass]="severityClasses(alert.severity)"\r
                                    >\r
                                        <mat-icon class="icon-size-4">{{ severityIcon(alert.severity) }}</mat-icon>\r
                                        {{ 'smartFleet.severity.' + alert.severity | transloco }}\r
                                    </span>\r
                                    <span class="text-xs font-medium text-stone-500">{{\r
                                        checkLabelKey(alert.type) | transloco\r
                                    }}</span>\r
                                    <a\r
                                        *ngIf="assetId(alert)"\r
                                        [routerLink]="['/smart-fleet/assets', assetId(alert)]"\r
                                        class="inline-flex items-center gap-1 rounded-lg bg-stone-100 px-2 py-0.5 font-mono text-xs font-semibold text-stone-800 hover:bg-stone-200 dark:bg-gray-800 dark:text-stone-200"\r
                                    >\r
                                        <mat-icon class="icon-size-4">directions_car</mat-icon>\r
                                        {{ assetLabel(alert) }}\r
                                    </a>\r
                                </div>\r
                                <p class="mt-1.5 text-sm font-semibold text-stone-900 dark:text-white">\r
                                    {{ alert.title }}\r
                                </p>\r
                                <p class="mt-1 text-xs text-stone-600 dark:text-stone-300" *ngIf="alert.message">\r
                                    {{ alert.message }}\r
                                </p>\r
                                <div class="mt-2 flex flex-wrap items-center gap-2">\r
                                    <span class="inline-flex items-center gap-1 text-xs text-stone-400">\r
                                        <mat-icon class="icon-size-4">schedule</mat-icon>\r
                                        {{ formatDate(alert.detectedAt) }}\r
                                    </span>\r
                                    <span\r
                                        *ngFor="let delivery of alert.deliveries"\r
                                        class="flex h-8 w-8 items-center justify-center rounded-lg"\r
                                        [ngClass]="deliveryTone(delivery.status)"\r
                                        [matTooltip]="deliveryLabel(delivery.channel, delivery.status)"\r
                                    >\r
                                        <fleet-channel-icon [channel]="delivery.channel" />\r
                                    </span>\r
                                </div>\r
                            </div>\r
\r
                            <div class="flex shrink-0 items-center gap-2">\r
                                <button\r
                                    type="button"\r
                                    *ngIf="!alert.acknowledgedAt"\r
                                    (click)="acknowledge(alert)"\r
                                    [matTooltip]="'smartFleet.alerts.acknowledge' | transloco"\r
                                    [attr.aria-label]="'smartFleet.alerts.acknowledge' | transloco"\r
                                    class="inline-flex items-center gap-1.5 rounded-xl border border-stone-200 px-3 py-2 text-sm font-medium text-stone-700 hover:bg-stone-50 dark:border-gray-700 dark:text-stone-200 dark:hover:bg-gray-800"\r
                                >\r
                                    <mat-icon class="icon-size-5">done</mat-icon>\r
                                    {{ 'smartFleet.alerts.acknowledge' | transloco }}\r
                                </button>\r
                                <span\r
                                    class="inline-flex items-center gap-1 text-xs font-medium text-emerald-600 dark:text-emerald-400"\r
                                    *ngIf="alert.acknowledgedAt"\r
                                >\r
                                    <mat-icon class="icon-size-4">check_circle</mat-icon>\r
                                    {{ 'smartFleet.alerts.acknowledged' | transloco }}\r
                                </span>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
\r
            <!-- Pagination -->\r
            <div class="flex flex-wrap items-center justify-between gap-3" *ngIf="pages() > 1">\r
                <span class="text-xs text-stone-500 dark:text-stone-400">\r
                    {{\r
                        'smartFleet.alerts.paginationRange'\r
                            | transloco: { start: rangeStart(), end: rangeEnd(), total: total() }\r
                    }}\r
                </span>\r
                <div class="flex items-center gap-2">\r
                    <button\r
                        mat-icon-button\r
                        type="button"\r
                        [disabled]="!canGoPrevious()"\r
                        (click)="previousPage()"\r
                        [matTooltip]="'smartFleet.previousPage' | transloco"\r
                    >\r
                        <mat-icon>chevron_left</mat-icon>\r
                    </button>\r
                    <span class="text-xs text-stone-500 dark:text-stone-400">\r
                        {{ 'smartFleet.pageOf' | transloco: { page: page(), pages: pages() } }}\r
                    </span>\r
                    <button\r
                        mat-icon-button\r
                        type="button"\r
                        [disabled]="!canGoNext()"\r
                        (click)="nextPage()"\r
                        [matTooltip]="'smartFleet.nextPage' | transloco"\r
                    >\r
                        <mat-icon>chevron_right</mat-icon>\r
                    </button>\r
                </div>\r
            </div>\r
        </div>\r
    </main>\r
</div>\r
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FleetAlertsComponent, { className: "FleetAlertsComponent", filePath: "src/app/modules/smart-fleet/alerts/fleet-alerts.component.ts", lineNumber: 44 });
})();
export {
  FleetAlertsComponent
};
//# sourceMappingURL=chunk-7IYVWU5E.js.map
