import {
  StatusCheckService
} from "./chunk-RGMTOVZU.js";
import {
  DateTime
} from "./chunk-KW3PRW6P.js";
import "./chunk-H3UX3NVF.js";
import {
  MatTooltipModule
} from "./chunk-NRO2XGZE.js";
import "./chunk-F5BVEUVX.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-CTAWHRE6.js";
import "./chunk-OIBNGD5S.js";
import "./chunk-7FACNXV2.js";
import {
  MatButton,
  MatButtonModule
} from "./chunk-NBA3XD53.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-EIYDU75T.js";
import "./chunk-IXSC6NFZ.js";
import {
  TranslocoModule,
  TranslocoPipe
} from "./chunk-VENEX45A.js";
import {
  Router
} from "./chunk-DM2XPT7T.js";
import "./chunk-KTYFS5OT.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  NgClass,
  NgForOf,
  NgIf,
  Subject,
  inject,
  setClassMetadata,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-I5BUD46C.js";
import "./chunk-F5M2C4EZ.js";

// src/app/modules/smart-monitor/incidents/incidents.component.ts
var _c0 = (a0) => ({ count: a0 });
function IncidentsComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275element(1, "mat-spinner", 12);
    \u0275\u0275elementEnd();
  }
}
function IncidentsComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 14)(2, "mat-icon", 15);
    \u0275\u0275text(3, "check_circle");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "h3", 16);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 17);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 2, "smartMonitor.allSystemsOperational"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 4, "smartMonitor.allSystemsDesc"), " ");
  }
}
function IncidentsComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 18)(2, "mat-icon", 19);
    \u0275\u0275text(3, "notifications_off");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "h3", 16);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 17);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 20);
    \u0275\u0275listener("click", function IncidentsComponent_div_16_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToStatusCheck());
    });
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 3, "smartMonitor.noIncidentMonitoringYet"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 5, "smartMonitor.noIncidentMonitoringDesc"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 7, "smartMonitor.goToStatusCheck"), " ");
  }
}
function IncidentsComponent_div_17_div_7_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "mat-icon", 38);
    \u0275\u0275text(2, "timelapse");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const incident_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.formatDuration(incident_r4.duration));
  }
}
function IncidentsComponent_div_17_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275listener("click", function IncidentsComponent_div_17_div_7_Template_div_click_0_listener() {
      const incident_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openDetail(incident_r4));
    });
    \u0275\u0275elementStart(1, "div", 27)(2, "div", 28)(3, "div", 29);
    \u0275\u0275element(4, "span", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 31)(6, "h3", 32);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 33);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "span", 34);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 35)(15, "div", 36)(16, "div", 37)(17, "mat-icon", 38);
    \u0275\u0275text(18, "schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span");
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(22, IncidentsComponent_div_17_div_7_div_22_Template, 5, 1, "div", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 40);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "transloco");
    \u0275\u0275elementStart(26, "mat-icon", 38);
    \u0275\u0275text(27, "arrow_forward");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const incident_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ctx_r1.getStatusCfg(incident_r4.status).dotClass);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getServiceName(incident_r4) || \u0275\u0275pipeBind1(8, 9, "smartMonitor.unknownService"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", incident_r4.code, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.getStatusCfg(incident_r4.status).classes);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 11, ctx_r1.getStatusCfg(incident_r4.status).labelKey), " ");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(21, 13, "smartMonitor.started"), " ", ctx_r1.formatDate(incident_r4.startDate), "");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", incident_r4.duration);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(25, 15, "smartMonitor.viewLogs"), " ");
  }
}
function IncidentsComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 22)(2, "mat-icon", 23);
    \u0275\u0275text(3, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 24);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, IncidentsComponent_div_17_div_7_Template, 28, 17, "div", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 2, "smartMonitor.activeIncidentsCount", \u0275\u0275pureFunction1(5, _c0, ctx_r1.incidents.length)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.incidents);
  }
}
var IncidentsComponent = class _IncidentsComponent {
  constructor() {
    this._service = inject(StatusCheckService);
    this._cdr = inject(ChangeDetectorRef);
    this._router = inject(Router);
    this._unsubscribeAll = new Subject();
    this.loading = true;
    this.incidents = [];
    this.subscriptions = [];
    this.statusConfig = {
      down: {
        labelKey: "smartMonitor.statusDown",
        classes: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
        dotClass: "bg-red-500 animate-pulse"
      },
      review: {
        labelKey: "smartMonitor.statusReview",
        classes: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",
        dotClass: "bg-yellow-500 animate-pulse"
      },
      up: {
        labelKey: "smartMonitor.statusUp",
        classes: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
        dotClass: "bg-green-500"
      },
      closed: {
        labelKey: "smartMonitor.statusClosed",
        classes: "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400",
        dotClass: "bg-gray-400"
      }
    };
  }
  ngOnInit() {
    this._loadSubscriptionsThenIncidents();
  }
  ngOnDestroy() {
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }
  _loadSubscriptionsThenIncidents() {
    this.loading = true;
    this._service.getIncidentsSubscriptions({ populates: ["appFeature"] }).pipe(takeUntil(this._unsubscribeAll)).subscribe({
      next: (result) => {
        this.subscriptions = result.data || result || [];
        this._loadIncidents();
      },
      error: () => {
        this.loading = false;
        this._cdr.markForCheck();
      }
    });
  }
  _loadIncidents() {
    if (!this.subscriptions.length) {
      this.loading = false;
      this._cdr.markForCheck();
      return;
    }
    const aliases = [...new Set(this.subscriptions.map((s) => s.alias).filter(Boolean))];
    const params = {
      in_status: ["down", "review"],
      populates: ["appFeature"],
      sort: "-createdAt"
    };
    if (aliases.length) {
      params.in_alias = aliases;
    }
    this._service.getIncidents(params).pipe(takeUntil(this._unsubscribeAll)).subscribe({
      next: (result) => {
        this.incidents = result.data || result || [];
        this.loading = false;
        this._cdr.markForCheck();
      },
      error: () => {
        this.loading = false;
        this._cdr.markForCheck();
      }
    });
  }
  getStatusCfg(status) {
    return this.statusConfig[status] ?? this.statusConfig["closed"];
  }
  formatDate(dateStr) {
    if (!dateStr)
      return "N/A";
    return DateTime.fromISO(dateStr).toLocaleString(DateTime.DATETIME_MED);
  }
  formatDuration(minutes) {
    if (!minutes)
      return "\u2014";
    if (minutes < 60)
      return `${minutes}m`;
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    return m ? `${h}h ${m}m` : `${h}h`;
  }
  getServiceName(incident) {
    return incident.appFeature?.name || incident.code || "";
  }
  goToStatusCheck() {
    this._router.navigate(["/smart-monitor/status-check"]);
  }
  openDetail(incident) {
    if (!incident?._id) {
      return;
    }
    this._router.navigate(["/smart-monitor/incidents", incident._id]);
  }
  static {
    this.\u0275fac = function IncidentsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _IncidentsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _IncidentsComponent, selectors: [["incidents"]], decls: 18, vars: 10, consts: [[1, "flex", "flex-col", "flex-auto", "min-w-0", "bg-gray-50", "dark:bg-gray-900", "min-h-screen"], [1, "flex", "flex-col", "w-full", "max-w-5xl", "mx-auto", "p-6", "md:p-8"], [1, "flex", "flex-col", "py-6", "mb-8", "border-b", "border-gray-200", "dark:border-gray-800"], [1, "flex", "items-center", "gap-3", "mb-1"], [1, "flex", "items-center", "justify-center", "w-10", "h-10", "rounded-xl", "bg-red-100", "dark:bg-red-900/30"], [1, "text-red-600", "dark:text-red-400", "icon-size-5"], [1, "text-2xl", "font-bold", "tracking-tight", "text-gray-900", "dark:text-white"], [1, "text-sm", "text-gray-500", "dark:text-gray-400"], ["class", "flex flex-auto justify-center items-center py-24", 4, "ngIf"], ["class", "flex flex-col items-center justify-center py-24 text-center", 4, "ngIf"], ["class", "flex flex-col gap-4", 4, "ngIf"], [1, "flex", "flex-auto", "justify-center", "items-center", "py-24"], ["diameter", "56"], [1, "flex", "flex-col", "items-center", "justify-center", "py-24", "text-center"], [1, "flex", "items-center", "justify-center", "w-20", "h-20", "rounded-full", "bg-green-100", "dark:bg-green-900/30", "mb-5"], [1, "icon-size-10", "text-green-500"], [1, "text-xl", "font-semibold", "text-gray-800", "dark:text-white", "mb-1"], [1, "text-gray-500", "dark:text-gray-400", "max-w-sm"], [1, "flex", "items-center", "justify-center", "w-20", "h-20", "rounded-full", "bg-gray-100", "dark:bg-gray-800", "mb-5"], [1, "icon-size-10", "text-gray-400"], ["mat-stroked-button", "", "type", "button", 1, "mt-6", 3, "click"], [1, "flex", "flex-col", "gap-4"], [1, "flex", "items-center", "gap-2", "px-4", "py-3", "rounded-xl", "bg-red-50", "dark:bg-red-900/20", "border", "border-red-200", "dark:border-red-800", "text-red-700", "dark:text-red-400"], [1, "icon-size-4", "flex-shrink-0"], [1, "text-sm", "font-medium"], ["class", "incident-card flex flex-col bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden cursor-pointer", 3, "click", 4, "ngFor", "ngForOf"], [1, "incident-card", "flex", "flex-col", "bg-white", "dark:bg-gray-800", "rounded-2xl", "shadow-sm", "border", "border-gray-200", "dark:border-gray-700", "overflow-hidden", "cursor-pointer", 3, "click"], [1, "flex", "items-start", "justify-between", "p-5", "border-b", "border-gray-100", "dark:border-gray-700/50"], [1, "flex", "items-start", "gap-4", "min-w-0"], [1, "flex-shrink-0", "pt-1"], [1, "inline-block", "w-3", "h-3", "rounded-full", 3, "ngClass"], [1, "min-w-0"], [1, "text-base", "font-semibold", "text-gray-900", "dark:text-white", "leading-tight"], [1, "text-xs", "text-gray-400", "dark:text-gray-500", "mt-0.5", "font-mono"], [1, "ml-4", "flex-shrink-0", "inline-flex", "items-center", "gap-1.5", "px-3", "py-1", "rounded-full", "text-xs", "font-semibold", 3, "ngClass"], [1, "flex", "items-center", "justify-between", "px-5", "py-3", "bg-gray-50/50", "dark:bg-gray-800/30"], [1, "flex", "items-center", "gap-6", "text-xs", "text-gray-500", "dark:text-gray-400"], [1, "flex", "items-center", "gap-1.5"], [1, "icon-size-3.5"], ["class", "flex items-center gap-1.5", 4, "ngIf"], [1, "flex", "items-center", "gap-1", "text-xs", "font-medium", "text-primary-600", "dark:text-primary-400"]], template: function IncidentsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "mat-icon", 5);
        \u0275\u0275text(6, "warning_amber");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div")(8, "h2", 6);
        \u0275\u0275text(9);
        \u0275\u0275pipe(10, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "p", 7);
        \u0275\u0275text(12);
        \u0275\u0275pipe(13, "transloco");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(14, IncidentsComponent_div_14_Template, 2, 0, "div", 8)(15, IncidentsComponent_div_15_Template, 10, 6, "div", 9)(16, IncidentsComponent_div_16_Template, 13, 9, "div", 9)(17, IncidentsComponent_div_17_Template, 8, 7, "div", 10);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 6, "smartMonitor.activeIncidents"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 8, "smartMonitor.incidentsSubtitle"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading && ctx.subscriptions.length > 0 && ctx.incidents.length === 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading && ctx.subscriptions.length === 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading && ctx.incidents.length > 0);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, TranslocoModule, TranslocoPipe, MatProgressSpinnerModule, MatProgressSpinner, MatButtonModule, MatButton, MatIconModule, MatIcon, MatTooltipModule], styles: ["\n\nincidents[_ngcontent-%COMP%] {\n  display: block;\n}\n.incident-card[_ngcontent-%COMP%] {\n  transition: box-shadow 0.2s ease, transform 0.15s ease;\n}\n.incident-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n}\n/*# sourceMappingURL=incidents.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IncidentsComponent, [{
    type: Component,
    args: [{ selector: "incidents", standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, imports: [
      CommonModule,
      TranslocoModule,
      MatProgressSpinnerModule,
      MatButtonModule,
      MatIconModule,
      MatTooltipModule
    ], template: `<div class="flex flex-col flex-auto min-w-0 bg-gray-50 dark:bg-gray-900 min-h-screen">\r
    <div class="flex flex-col w-full max-w-5xl mx-auto p-6 md:p-8">\r
        <!-- Header -->\r
        <div class="flex flex-col py-6 mb-8 border-b border-gray-200 dark:border-gray-800">\r
            <div class="flex items-center gap-3 mb-1">\r
                <div\r
                    class="flex items-center justify-center w-10 h-10 rounded-xl bg-red-100 dark:bg-red-900/30"\r
                >\r
                    <mat-icon class="text-red-600 dark:text-red-400 icon-size-5"\r
                        >warning_amber</mat-icon\r
                    >\r
                </div>\r
                <div>\r
                    <h2 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">\r
                        {{ 'smartMonitor.activeIncidents' | transloco }}\r
                    </h2>\r
                    <p class="text-sm text-gray-500 dark:text-gray-400">\r
                        {{ 'smartMonitor.incidentsSubtitle' | transloco }}\r
                    </p>\r
                </div>\r
            </div>\r
        </div>\r
\r
        <!-- Loading -->\r
        <div *ngIf="loading" class="flex flex-auto justify-center items-center py-24">\r
            <mat-spinner diameter="56"></mat-spinner>\r
        </div>\r
\r
        <!-- All-Clear Empty State (subscribed but no active incidents) -->\r
        <div\r
            *ngIf="!loading && subscriptions.length > 0 && incidents.length === 0"\r
            class="flex flex-col items-center justify-center py-24 text-center"\r
        >\r
            <div\r
                class="flex items-center justify-center w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 mb-5"\r
            >\r
                <mat-icon class="icon-size-10 text-green-500">check_circle</mat-icon>\r
            </div>\r
            <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-1">\r
                {{ 'smartMonitor.allSystemsOperational' | transloco }}\r
            </h3>\r
            <p class="text-gray-500 dark:text-gray-400 max-w-sm">\r
                {{ 'smartMonitor.allSystemsDesc' | transloco }}\r
            </p>\r
        </div>\r
\r
        <!-- No Subscriptions Empty State -->\r
        <div\r
            *ngIf="!loading && subscriptions.length === 0"\r
            class="flex flex-col items-center justify-center py-24 text-center"\r
        >\r
            <div\r
                class="flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 dark:bg-gray-800 mb-5"\r
            >\r
                <mat-icon class="icon-size-10 text-gray-400">notifications_off</mat-icon>\r
            </div>\r
            <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-1">\r
                {{ 'smartMonitor.noIncidentMonitoringYet' | transloco }}\r
            </h3>\r
            <p class="text-gray-500 dark:text-gray-400 max-w-sm">\r
                {{ 'smartMonitor.noIncidentMonitoringDesc' | transloco }}\r
            </p>\r
            <button\r
                mat-stroked-button\r
                class="mt-6"\r
                type="button"\r
                (click)="goToStatusCheck()"\r
            >\r
                {{ 'smartMonitor.goToStatusCheck' | transloco }}\r
            </button>\r
        </div>\r
\r
        <!-- Incidents List -->\r
        <div *ngIf="!loading && incidents.length > 0" class="flex flex-col gap-4">\r
            <!-- Summary banner -->\r
            <div\r
                class="flex items-center gap-2 px-4 py-3 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400"\r
            >\r
                <mat-icon class="icon-size-4 flex-shrink-0">error_outline</mat-icon>\r
                <span class="text-sm font-medium">\r
                    {{ 'smartMonitor.activeIncidentsCount' | transloco: { count: incidents.length } }}\r
                </span>\r
            </div>\r
\r
            <!-- Incident Cards -->\r
            <div\r
                *ngFor="let incident of incidents"\r
                class="incident-card flex flex-col bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden cursor-pointer"\r
                (click)="openDetail(incident)"\r
            >\r
                <!-- Card Header -->\r
                <div\r
                    class="flex items-start justify-between p-5 border-b border-gray-100 dark:border-gray-700/50"\r
                >\r
                    <div class="flex items-start gap-4 min-w-0">\r
                        <!-- Status dot -->\r
                        <div class="flex-shrink-0 pt-1">\r
                            <span\r
                                class="inline-block w-3 h-3 rounded-full"\r
                                [ngClass]="getStatusCfg(incident.status).dotClass"\r
                            ></span>\r
                        </div>\r
\r
                        <div class="min-w-0">\r
                            <h3\r
                                class="text-base font-semibold text-gray-900 dark:text-white leading-tight"\r
                            >\r
                                {{ getServiceName(incident) || ('smartMonitor.unknownService' | transloco) }}\r
                            </h3>\r
                            <p class="text-xs text-gray-400 dark:text-gray-500 mt-0.5 font-mono">\r
                                {{ incident.code }}\r
                            </p>\r
                        </div>\r
                    </div>\r
\r
                    <!-- Status Badge -->\r
                    <span\r
                        class="ml-4 flex-shrink-0 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold"\r
                        [ngClass]="getStatusCfg(incident.status).classes"\r
                    >\r
                        {{ getStatusCfg(incident.status).labelKey | transloco }}\r
                    </span>\r
                </div>\r
\r
                <!-- Card Footer -->\r
                <div\r
                    class="flex items-center justify-between px-5 py-3 bg-gray-50/50 dark:bg-gray-800/30"\r
                >\r
                    <div class="flex items-center gap-6 text-xs text-gray-500 dark:text-gray-400">\r
                        <div class="flex items-center gap-1.5">\r
                            <mat-icon class="icon-size-3.5">schedule</mat-icon>\r
                            <span>{{ 'smartMonitor.started' | transloco }} {{ formatDate(incident.startDate) }}</span>\r
                        </div>\r
                        <div *ngIf="incident.duration" class="flex items-center gap-1.5">\r
                            <mat-icon class="icon-size-3.5">timelapse</mat-icon>\r
                            <span>{{ formatDuration(incident.duration) }}</span>\r
                        </div>\r
                    </div>\r
                    <div\r
                        class="flex items-center gap-1 text-xs font-medium text-primary-600 dark:text-primary-400"\r
                    >\r
                        {{ 'smartMonitor.viewLogs' | transloco }}\r
                        <mat-icon class="icon-size-3.5">arrow_forward</mat-icon>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
    </div>\r
</div>\r
`, styles: ["/* src/app/modules/smart-monitor/incidents/incidents.component.scss */\nincidents {\n  display: block;\n}\n.incident-card {\n  transition: box-shadow 0.2s ease, transform 0.15s ease;\n}\n.incident-card:hover {\n  transform: translateY(-2px);\n}\n/*# sourceMappingURL=incidents.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(IncidentsComponent, { className: "IncidentsComponent", filePath: "src/app/modules/smart-monitor/incidents/incidents.component.ts", lineNumber: 35 });
})();
export {
  IncidentsComponent
};
//# sourceMappingURL=chunk-MUVIGWGE.js.map
