import {
  StatusCheckService
} from "./chunk-ZHR6FTPN.js";
import "./chunk-LPSMXQSY.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-EL6Z63TT.js";
import {
  DateTime
} from "./chunk-BAVSUFW7.js";
import "./chunk-H3UX3NVF.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-6KHU2J3U.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-LHOHCIQM.js";
import "./chunk-OIBNGD5S.js";
import {
  TranslocoModule,
  TranslocoPipe
} from "./chunk-VHMFS3U6.js";
import "./chunk-R4RYJRMO.js";
import "./chunk-32YYYLAD.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-SE37W2G4.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  MatButton,
  MatButtonModule,
  NgClass,
  NgForOf,
  NgIf,
  Subject,
  inject,
  setClassMetadata,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-YTOBX75K.js";
import "./chunk-KTESVR3Q.js";

// src/app/modules/smart-monitor/incidents/incident-detail/incident-detail.component.ts
var _c0 = (a0) => ({ count: a0 });
function IncidentDetailComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "mat-spinner", 9);
    \u0275\u0275elementEnd();
  }
}
function IncidentDetailComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "mat-icon", 11);
    \u0275\u0275text(2, "search_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 12);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "smartMonitor.incidentNotFound"));
  }
}
function IncidentDetailComponent_ng_container_10_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "span", 23);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 24);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "smartMonitor.resolved"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.formatDate(ctx_r0.incident.endDate));
  }
}
function IncidentDetailComponent_ng_container_10_div_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "mat-icon", 33);
    \u0275\u0275text(2, "article");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 34);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 35);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 2, "smartMonitor.noPublicUpdates"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 4, "smartMonitor.investigatingMessage"), " ");
  }
}
function IncidentDetailComponent_ng_container_10_div_38_ng_container_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 50);
  }
  if (rf & 2) {
    const log_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", ctx_r0.getCategoryCfg(log_r2.category).connectorClass);
  }
}
function IncidentDetailComponent_ng_container_10_div_38_ng_container_1_p_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const log_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", log_r2.publicLog, " ");
  }
}
function IncidentDetailComponent_ng_container_10_div_38_ng_container_1_p_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 52);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "smartMonitor.automaticSystemUpdate"), " ");
  }
}
function IncidentDetailComponent_ng_container_10_div_38_ng_container_1_p_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 52);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "smartMonitor.noDetailsProvided"), " ");
  }
}
function IncidentDetailComponent_ng_container_10_div_38_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 38)(2, "div", 39)(3, "div", 40)(4, "mat-icon", 41);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, IncidentDetailComponent_ng_container_10_div_38_ng_container_1_div_6_Template, 1, 1, "div", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 43)(8, "div", 44)(9, "span", 45);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 46);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 47);
    \u0275\u0275template(15, IncidentDetailComponent_ng_container_10_div_38_ng_container_1_p_15_Template, 2, 1, "p", 48)(16, IncidentDetailComponent_ng_container_10_div_38_ng_container_1_p_16_Template, 3, 3, "p", 49)(17, IncidentDetailComponent_ng_container_10_div_38_ng_container_1_p_17_Template, 3, 3, "p", 49);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const log_r2 = ctx.$implicit;
    const last_r3 = ctx.last;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r0.getCategoryCfg(log_r2.category).classes);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getCategoryCfg(log_r2.category).icon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !last_r3);
    \u0275\u0275advance();
    \u0275\u0275classProp("pb-0", last_r3);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r0.getCategoryCfg(log_r2.category).classes);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 12, ctx_r0.getCategoryCfg(log_r2.category).labelKey), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("matTooltip", ctx_r0.formatDate(log_r2.createdAt));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatRelative(log_r2.createdAt), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", log_r2.publicLog);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !log_r2.publicLog && log_r2.automaticMessage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !log_r2.publicLog && !log_r2.automaticMessage);
  }
}
function IncidentDetailComponent_ng_container_10_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275template(1, IncidentDetailComponent_ng_container_10_div_38_ng_container_1_Template, 18, 14, "ng-container", 37);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.logs);
  }
}
function IncidentDetailComponent_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 13)(2, "div", 14)(3, "div", 15)(4, "div", 16)(5, "h2", 17);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 18);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "span", 19);
    \u0275\u0275element(11, "span", 20);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 21)(15, "div", 22)(16, "span", 23);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 24);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 22)(22, "span", 23);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 24);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(27, IncidentDetailComponent_ng_container_10_div_27_Template, 6, 4, "div", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 26)(29, "h3", 27)(30, "mat-icon", 28);
    \u0275\u0275text(31, "timeline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "transloco");
    \u0275\u0275elementStart(34, "span", 29);
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(37, IncidentDetailComponent_ng_container_10_div_37_Template, 9, 6, "div", 30)(38, IncidentDetailComponent_ng_container_10_div_38_Template, 2, 1, "div", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r0.getServiceName() || \u0275\u0275pipeBind1(7, 14, "smartMonitor.unknownService"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.incident.code, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.getStatusCfg(ctx_r0.incident.status).classes);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.getStatusCfg(ctx_r0.incident.status).dotClass);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 16, ctx_r0.getStatusCfg(ctx_r0.incident.status).labelKey), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 18, "smartMonitor.started"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.formatDate(ctx_r0.incident.startDate));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 20, "smartMonitor.duration"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.formatDuration(ctx_r0.incident.duration));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.incident.endDate);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(33, 22, "smartMonitor.incidentLog"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(36, 24, "smartMonitor.updatesCount", \u0275\u0275pureFunction1(27, _c0, ctx_r0.logs.length)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.logs.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.logs.length > 0);
  }
}
var IncidentDetailComponent = class _IncidentDetailComponent {
  constructor() {
    this._service = inject(StatusCheckService);
    this._route = inject(ActivatedRoute);
    this._router = inject(Router);
    this._cdr = inject(ChangeDetectorRef);
    this._unsubscribeAll = new Subject();
    this.loading = true;
    this.incident = null;
    this.logs = [];
    this.categoryConfig = {
      investigating: {
        labelKey: "smartMonitor.categoryInvestigating",
        icon: "search",
        classes: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 border-blue-200 dark:border-blue-800",
        connectorClass: "bg-blue-300 dark:bg-blue-700"
      },
      identified: {
        labelKey: "smartMonitor.categoryIdentified",
        icon: "manage_search",
        classes: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400 border-orange-200 dark:border-orange-800",
        connectorClass: "bg-orange-300 dark:bg-orange-700"
      },
      fixing: {
        labelKey: "smartMonitor.categoryFixing",
        icon: "build",
        classes: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400 border-yellow-200 dark:border-yellow-800",
        connectorClass: "bg-yellow-300 dark:bg-yellow-700"
      },
      resolved: {
        labelKey: "smartMonitor.categoryResolved",
        icon: "check_circle",
        classes: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 border-green-200 dark:border-green-800",
        connectorClass: "bg-green-300 dark:bg-green-700"
      },
      privateNote: {
        labelKey: "smartMonitor.categoryNote",
        icon: "sticky_note_2",
        classes: "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400 border-gray-200 dark:border-gray-700",
        connectorClass: "bg-gray-300 dark:bg-gray-700"
      }
    };
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
    const id = this._route.snapshot.paramMap.get("id");
    if (id) {
      this._loadIncident(id);
    }
  }
  ngOnDestroy() {
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }
  _loadIncident(id) {
    this._service.getIncidents({ _id: id, populates: ["appFeature", "resolution"] }).pipe(takeUntil(this._unsubscribeAll)).subscribe({
      next: (result) => {
        const data = result.data || result;
        this.incident = Array.isArray(data) ? data[0] : data;
        this._loadLogs(id);
      },
      error: () => {
        this.loading = false;
        this._cdr.markForCheck();
      }
    });
  }
  _loadLogs(incidentId) {
    this._service.getIncidentLogs({
      where_incident: incidentId,
      sort: "createdAt"
      // Chronological order
    }).pipe(takeUntil(this._unsubscribeAll)).subscribe({
      next: (result) => {
        const rawLogs = result.data || result || [];
        this.logs = rawLogs.filter((log) => log.category !== "privateNote");
        this.loading = false;
        this._cdr.markForCheck();
      },
      error: () => {
        this.loading = false;
        this._cdr.markForCheck();
      }
    });
  }
  getCategoryCfg(category) {
    return this.categoryConfig[category] ?? this.categoryConfig["investigating"];
  }
  getStatusCfg(status) {
    return this.statusConfig[status] ?? this.statusConfig["closed"];
  }
  getServiceName() {
    return this.incident?.appFeature?.name || this.incident?.code || "";
  }
  formatDate(dateStr) {
    if (!dateStr)
      return "N/A";
    return DateTime.fromISO(dateStr).toLocaleString(DateTime.DATETIME_MED);
  }
  formatRelative(dateStr) {
    if (!dateStr)
      return "";
    return DateTime.fromISO(dateStr).toRelative() ?? "";
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
  goBack() {
    this._router.navigate(["/smart-monitor/incidents"]);
  }
  static {
    this.\u0275fac = function IncidentDetailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _IncidentDetailComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _IncidentDetailComponent, selectors: [["incident-detail"]], decls: 11, vars: 6, consts: [[1, "flex", "flex-col", "flex-auto", "min-w-0", "bg-gray-50", "dark:bg-gray-900", "min-h-screen"], [1, "flex", "flex-col", "w-full", "max-w-3xl", "mx-auto", "p-6", "md:p-8"], [1, "mb-6"], ["mat-button", "", 1, "-ml-2", "text-gray-500", "hover:text-gray-900", "dark:hover:text-white", 3, "click"], [1, "icon-size-4", "mr-1"], ["class", "flex flex-auto justify-center items-center py-24", 4, "ngIf"], ["class", "flex flex-col items-center justify-center py-24 text-center", 4, "ngIf"], [4, "ngIf"], [1, "flex", "flex-auto", "justify-center", "items-center", "py-24"], ["diameter", "56"], [1, "flex", "flex-col", "items-center", "justify-center", "py-24", "text-center"], [1, "icon-size-16", "text-gray-300", "dark:text-gray-600", "mb-4"], [1, "text-lg", "font-medium", "text-gray-600", "dark:text-gray-400"], [1, "bg-white", "dark:bg-gray-800", "rounded-2xl", "shadow-sm", "border", "border-gray-200", "dark:border-gray-700", "overflow-hidden", "mb-8"], [1, "p-6", "border-b", "border-gray-100", "dark:border-gray-700/50"], [1, "flex", "items-start", "justify-between", "gap-4"], [1, "min-w-0"], [1, "text-xl", "font-bold", "text-gray-900", "dark:text-white", "leading-tight"], [1, "text-sm", "text-gray-400", "font-mono", "mt-0.5"], [1, "flex-shrink-0", "inline-flex", "items-center", "gap-2", "px-3", "py-1.5", "rounded-full", "text-sm", "font-semibold", 3, "ngClass"], [1, "w-2", "h-2", "rounded-full", 3, "ngClass"], [1, "grid", "grid-cols-2", "sm:grid-cols-3", "gap-0", "divide-x", "divide-y", "divide-gray-100", "dark:divide-gray-700/50"], [1, "px-5", "py-4", "flex", "flex-col", "gap-0.5"], [1, "text-xs", "font-semibold", "uppercase", "tracking-wide", "text-gray-400"], [1, "text-sm", "font-medium", "text-gray-800", "dark:text-gray-200"], ["class", "px-5 py-4 flex flex-col gap-0.5", 4, "ngIf"], [1, "mb-4"], [1, "text-base", "font-semibold", "text-gray-700", "dark:text-gray-300", "mb-5", "flex", "items-center", "gap-2"], [1, "icon-size-5", "text-gray-400"], [1, "ml-2", "text-xs", "font-medium", "bg-gray-100", "dark:bg-gray-700", "text-gray-500", "dark:text-gray-400", "px-2", "py-0.5", "rounded-full"], ["class", "flex flex-col items-center justify-center py-12 text-center bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700", 4, "ngIf"], ["class", "relative flex flex-col gap-0", 4, "ngIf"], [1, "flex", "flex-col", "items-center", "justify-center", "py-12", "text-center", "bg-white", "dark:bg-gray-800", "rounded-2xl", "border", "border-gray-200", "dark:border-gray-700"], [1, "icon-size-12", "text-gray-300", "dark:text-gray-600", "mb-3"], [1, "text-gray-500", "dark:text-gray-400"], [1, "text-gray-400", "dark:text-gray-500", "text-sm", "mt-1"], [1, "relative", "flex", "flex-col", "gap-0"], [4, "ngFor", "ngForOf"], [1, "flex", "gap-4"], [1, "flex", "flex-col", "items-center", "flex-shrink-0"], [1, "flex", "items-center", "justify-center", "w-8", "h-8", "rounded-full", "border-2", "z-10", 3, "ngClass"], [1, "icon-size-4"], ["class", "timeline-connector w-0.5 flex-auto my-1 min-h-[1.5rem]", 3, "ngClass", 4, "ngIf"], [1, "flex-auto", "pb-6"], [1, "flex", "flex-wrap", "items-center", "gap-2", "mb-2"], [1, "inline-flex", "items-center", "px-2.5", "py-0.5", "rounded-full", "text-xs", "font-semibold", "border", 3, "ngClass"], [1, "text-xs", "text-gray-400", "dark:text-gray-500", 3, "matTooltip"], [1, "bg-white", "dark:bg-gray-800", "rounded-xl", "border", "border-gray-200", "dark:border-gray-700", "px-4", "py-3", "text-sm", "text-gray-700", "dark:text-gray-300", "leading-relaxed"], ["class", "whitespace-pre-wrap", 4, "ngIf"], ["class", "text-gray-400 italic text-xs", 4, "ngIf"], [1, "timeline-connector", "w-0.5", "flex-auto", "my-1", "min-h-[1.5rem]", 3, "ngClass"], [1, "whitespace-pre-wrap"], [1, "text-gray-400", "italic", "text-xs"]], template: function IncidentDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3);
        \u0275\u0275listener("click", function IncidentDetailComponent_Template_button_click_3_listener() {
          return ctx.goBack();
        });
        \u0275\u0275elementStart(4, "mat-icon", 4);
        \u0275\u0275text(5, "arrow_back");
        \u0275\u0275elementEnd();
        \u0275\u0275text(6);
        \u0275\u0275pipe(7, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(8, IncidentDetailComponent_div_8_Template, 2, 0, "div", 5)(9, IncidentDetailComponent_div_9_Template, 6, 3, "div", 6)(10, IncidentDetailComponent_ng_container_10_Template, 39, 29, "ng-container", 7);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 4, "smartMonitor.backToIncidents"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading && !ctx.incident);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading && ctx.incident);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, TranslocoModule, TranslocoPipe, MatProgressSpinnerModule, MatProgressSpinner, MatButtonModule, MatButton, MatIconModule, MatIcon, MatTooltipModule, MatTooltip], styles: ["\n\nincident-detail[_ngcontent-%COMP%] {\n  display: block;\n}\n.timeline-connector[_ngcontent-%COMP%] {\n  width: 2px;\n  flex-shrink: 0;\n}\n/*# sourceMappingURL=incident-detail.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IncidentDetailComponent, [{
    type: Component,
    args: [{ selector: "incident-detail", standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, imports: [
      CommonModule,
      TranslocoModule,
      MatProgressSpinnerModule,
      MatButtonModule,
      MatIconModule,
      MatTooltipModule
    ], template: `<div class="flex flex-col flex-auto min-w-0 bg-gray-50 dark:bg-gray-900 min-h-screen">
    <div class="flex flex-col w-full max-w-3xl mx-auto p-6 md:p-8">
        <!-- Back button -->
        <div class="mb-6">
            <button
                mat-button
                (click)="goBack()"
                class="-ml-2 text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
                <mat-icon class="icon-size-4 mr-1">arrow_back</mat-icon>
                {{ 'smartMonitor.backToIncidents' | transloco }}
            </button>
        </div>

        <!-- Loading -->
        <div *ngIf="loading" class="flex flex-auto justify-center items-center py-24">
            <mat-spinner diameter="56"></mat-spinner>
        </div>

        <!-- Not Found -->
        <div
            *ngIf="!loading && !incident"
            class="flex flex-col items-center justify-center py-24 text-center"
        >
            <mat-icon class="icon-size-16 text-gray-300 dark:text-gray-600 mb-4"
                >search_off</mat-icon
            >
            <p class="text-lg font-medium text-gray-600 dark:text-gray-400">{{ 'smartMonitor.incidentNotFound' | transloco }}</p>
        </div>

        <!-- Incident Detail -->
        <ng-container *ngIf="!loading && incident">
            <!-- Incident Header Card -->
            <div
                class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden mb-8"
            >
                <div class="p-6 border-b border-gray-100 dark:border-gray-700/50">
                    <div class="flex items-start justify-between gap-4">
                        <div class="min-w-0">
                            <h2
                                class="text-xl font-bold text-gray-900 dark:text-white leading-tight"
                            >
                                {{ getServiceName() || ('smartMonitor.unknownService' | transloco) }}
                            </h2>
                            <p class="text-sm text-gray-400 font-mono mt-0.5">
                                {{ incident.code }}
                            </p>
                        </div>
                        <span
                            class="flex-shrink-0 inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-semibold"
                            [ngClass]="getStatusCfg(incident.status).classes"
                        >
                            <span
                                class="w-2 h-2 rounded-full"
                                [ngClass]="getStatusCfg(incident.status).dotClass"
                            ></span>
                            {{ getStatusCfg(incident.status).labelKey | transloco }}
                        </span>
                    </div>
                </div>

                <!-- Metadata grid -->
                <div
                    class="grid grid-cols-2 sm:grid-cols-3 gap-0 divide-x divide-y divide-gray-100 dark:divide-gray-700/50"
                >
                    <div class="px-5 py-4 flex flex-col gap-0.5">
                        <span class="text-xs font-semibold uppercase tracking-wide text-gray-400"
                            >{{ 'smartMonitor.started' | transloco }}</span
                        >
                        <span class="text-sm font-medium text-gray-800 dark:text-gray-200">{{
                            formatDate(incident.startDate)
                        }}</span>
                    </div>
                    <div class="px-5 py-4 flex flex-col gap-0.5">
                        <span class="text-xs font-semibold uppercase tracking-wide text-gray-400"
                            >{{ 'smartMonitor.duration' | transloco }}</span
                        >
                        <span class="text-sm font-medium text-gray-800 dark:text-gray-200">{{
                            formatDuration(incident.duration)
                        }}</span>
                    </div>
                    <div *ngIf="incident.endDate" class="px-5 py-4 flex flex-col gap-0.5">
                        <span class="text-xs font-semibold uppercase tracking-wide text-gray-400"
                            >{{ 'smartMonitor.resolved' | transloco }}</span
                        >
                        <span class="text-sm font-medium text-gray-800 dark:text-gray-200">{{
                            formatDate(incident.endDate)
                        }}</span>
                    </div>
                </div>
            </div>

            <!-- Timeline Section -->
            <div class="mb-4">
                <h3
                    class="text-base font-semibold text-gray-700 dark:text-gray-300 mb-5 flex items-center gap-2"
                >
                    <mat-icon class="icon-size-5 text-gray-400">timeline</mat-icon>
                    {{ 'smartMonitor.incidentLog' | transloco }}
                    <span
                        class="ml-2 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 px-2 py-0.5 rounded-full"
                    >
                        {{ 'smartMonitor.updatesCount' | transloco: { count: logs.length } }}
                    </span>
                </h3>

                <!-- No logs -->
                <div
                    *ngIf="logs.length === 0"
                    class="flex flex-col items-center justify-center py-12 text-center bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700"
                >
                    <mat-icon class="icon-size-12 text-gray-300 dark:text-gray-600 mb-3"
                        >article</mat-icon
                    >
                    <p class="text-gray-500 dark:text-gray-400">
                        {{ 'smartMonitor.noPublicUpdates' | transloco }}
                    </p>
                    <p class="text-gray-400 dark:text-gray-500 text-sm mt-1">
                        {{ 'smartMonitor.investigatingMessage' | transloco }}
                    </p>
                </div>

                <!-- Timeline entries -->
                <div *ngIf="logs.length > 0" class="relative flex flex-col gap-0">
                    <ng-container *ngFor="let log of logs; let i = index; let last = last">
                        <div class="flex gap-4">
                            <!-- Left rail: icon + connector -->
                            <div class="flex flex-col items-center flex-shrink-0">
                                <!-- Icon circle -->
                                <div
                                    class="flex items-center justify-center w-8 h-8 rounded-full border-2 z-10"
                                    [ngClass]="getCategoryCfg(log.category).classes"
                                >
                                    <mat-icon class="icon-size-4">{{
                                        getCategoryCfg(log.category).icon
                                    }}</mat-icon>
                                </div>
                                <!-- Connector line -->
                                <div
                                    *ngIf="!last"
                                    class="timeline-connector w-0.5 flex-auto my-1 min-h-[1.5rem]"
                                    [ngClass]="getCategoryCfg(log.category).connectorClass"
                                ></div>
                            </div>

                            <!-- Content -->
                            <div class="flex-auto pb-6" [class.pb-0]="last">
                                <!-- Category badge + timestamp -->
                                <div class="flex flex-wrap items-center gap-2 mb-2">
                                    <span
                                        class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border"
                                        [ngClass]="getCategoryCfg(log.category).classes"
                                    >
                                        {{ getCategoryCfg(log.category).labelKey | transloco }}
                                    </span>
                                    <span
                                        class="text-xs text-gray-400 dark:text-gray-500"
                                        [matTooltip]="formatDate(log.createdAt)"
                                    >
                                        {{ formatRelative(log.createdAt) }}
                                    </span>
                                </div>

                                <!-- Public log message -->
                                <div
                                    class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 px-4 py-3 text-sm text-gray-700 dark:text-gray-300 leading-relaxed"
                                >
                                    <p *ngIf="log.publicLog" class="whitespace-pre-wrap">
                                        {{ log.publicLog }}
                                    </p>
                                    <p
                                        *ngIf="!log.publicLog && log.automaticMessage"
                                        class="text-gray-400 italic text-xs"
                                    >
                                        {{ 'smartMonitor.automaticSystemUpdate' | transloco }}
                                    </p>
                                    <p
                                        *ngIf="!log.publicLog && !log.automaticMessage"
                                        class="text-gray-400 italic text-xs"
                                    >
                                        {{ 'smartMonitor.noDetailsProvided' | transloco }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </ng-container>
                </div>
            </div>
        </ng-container>
    </div>
</div>
`, styles: ["/* src/app/modules/smart-monitor/incidents/incident-detail/incident-detail.component.scss */\nincident-detail {\n  display: block;\n}\n.timeline-connector {\n  width: 2px;\n  flex-shrink: 0;\n}\n/*# sourceMappingURL=incident-detail.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(IncidentDetailComponent, { className: "IncidentDetailComponent", filePath: "src/app/modules/smart-monitor/incidents/incident-detail/incident-detail.component.ts", lineNumber: 35 });
})();
export {
  IncidentDetailComponent
};
//# sourceMappingURL=chunk-LAW4O4MR.js.map
