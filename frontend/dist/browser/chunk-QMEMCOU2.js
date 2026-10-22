import {
  StatusCheckService
} from "./chunk-FSDNSGIB.js";
import {
  gs
} from "./chunk-6H3L32AF.js";
import {
  UsageApiService
} from "./chunk-OVSGGC5D.js";
import "./chunk-NNMFBAZF.js";
import {
  postmanCountryFlagUi
} from "./chunk-LFV2WSNG.js";
import "./chunk-SHPJBY32.js";
import {
  DateTime
} from "./chunk-KW3PRW6P.js";
import "./chunk-BSFB775C.js";
import {
  MatSlideToggleModule
} from "./chunk-GXL6XPV2.js";
import {
  getVerifikDocsUrls
} from "./chunk-Z6YVHGZ4.js";
import "./chunk-H3UX3NVF.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-LVI7H6QB.js";
import "./chunk-BQZ6NKDU.js";
import "./chunk-JURKDGMK.js";
import {
  MatOption,
  MatOptionModule,
  MatSelect,
  MatSelectModule
} from "./chunk-DT4JVZCC.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-DMXREZDX.js";
import "./chunk-CPZD6RE6.js";
import "./chunk-W5MZFF7W.js";
import {
  MatFormField,
  MatFormFieldModule,
  MatPrefix,
  MatSuffix
} from "./chunk-QUFOCOZK.js";
import "./chunk-2W6CKTFA.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-KIEFKQUB.js";
import {
  MatDialog,
  MatDialogModule
} from "./chunk-HVUVGZ2L.js";
import "./chunk-OIBNGD5S.js";
import "./chunk-5HABGTLH.js";
import {
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
  FormsModule,
  NgControlStatus,
  NgModel,
  ReactiveFormsModule
} from "./chunk-JBF67GMG.js";
import {
  TranslocoDirective,
  TranslocoModule,
  TranslocoPipe,
  TranslocoService,
  takeUntilDestroyed
} from "./chunk-FWBWCXY5.js";
import "./chunk-3V5B4ZWC.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  CurrencyPipe,
  DecimalPipe,
  DestroyRef,
  NgClass,
  NgForOf,
  NgIf,
  Subject,
  catchError,
  computed,
  forkJoin,
  inject,
  of,
  setClassMetadata,
  signal,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdeclareLet,
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
  ɵɵpipeBind4,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵpureFunction4,
  ɵɵpureFunction5,
  ɵɵreadContextLet,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstoreLet,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-YWP2Y7QK.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-F5M2C4EZ.js";

// src/app/modules/status-check/availability-card/availability-card.component.ts
var _c0 = (a0) => ({ target: a0 });
var _c1 = (a0, a1) => ({ met: a0, total: a1 });
var _c2 = (a0, a1, a2) => ({ ok: a0, failed: a1, excluded: a2 });
var _forTrack0 = ($index, $item) => $item.month;
var _forTrack1 = ($index, $item) => $item.code;
function AvailabilityCardComponent_ng_container_0_Conditional_1_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r1("network.availability.monthsMet", \u0275\u0275pureFunction2(1, _c1, ctx_r1.monthsMet(), ctx_r1.closedMonths().length)), " ");
  }
}
function AvailabilityCardComponent_ng_container_0_Conditional_1_Case_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 6);
  }
}
function AvailabilityCardComponent_ng_container_0_Conditional_1_Case_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r1("network.availability.error"));
  }
}
function AvailabilityCardComponent_ng_container_0_Conditional_1_Case_11_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r1("network.availability.empty"));
  }
}
function AvailabilityCardComponent_ng_container_0_Conditional_1_Case_11_Conditional_1_For_7_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "number");
  }
  if (rf & 2) {
    const bar_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, bar_r3.percent, "1.1-2"), "% ");
  }
}
function AvailabilityCardComponent_ng_container_0_Conditional_1_Case_11_Conditional_1_For_7_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u2014 ");
  }
}
function AvailabilityCardComponent_ng_container_0_Conditional_1_Case_11_Conditional_1_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "span", 18);
    \u0275\u0275template(2, AvailabilityCardComponent_ng_container_0_Conditional_1_Case_11_Conditional_1_For_7_Conditional_2_Template, 2, 4)(3, AvailabilityCardComponent_ng_container_0_Conditional_1_Case_11_Conditional_1_For_7_Conditional_3_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "div", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bar_r3 = ctx.$implicit;
    const t_r1 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275conditional(bar_r3.percent !== null ? 2 : 3);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(bar_r3.tone);
    \u0275\u0275styleProp("height", bar_r3.height, "%");
    \u0275\u0275classProp("opacity-60", bar_r3.partial);
    \u0275\u0275property("matTooltip", t_r1("network.availability.barTooltip", \u0275\u0275pureFunction3(8, _c2, bar_r3.successes, bar_r3.serviceFailures, bar_r3.clientErrors)));
  }
}
function AvailabilityCardComponent_ng_container_0_Conditional_1_Case_11_Conditional_1_For_10_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(5).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r1("network.availability.partial"));
  }
}
function AvailabilityCardComponent_ng_container_0_Conditional_1_Case_11_Conditional_1_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1);
    \u0275\u0275template(2, AvailabilityCardComponent_ng_container_0_Conditional_1_Case_11_Conditional_1_For_10_Conditional_2_Template, 2, 1, "span", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bar_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", bar_r4.label, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(bar_r4.partial ? 2 : -1);
  }
}
function AvailabilityCardComponent_ng_container_0_Conditional_1_Case_11_Conditional_1_Conditional_11_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 23)(1, "span", 24);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 25);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_17_0;
    const service_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(service_r5.name || service_r5.code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(5, 2, ((tmp_17_0 = service_r5.sli) !== null && tmp_17_0 !== void 0 ? tmp_17_0 : 0) * 100, "1.1-2"), "%");
  }
}
function AvailabilityCardComponent_ng_container_0_Conditional_1_Case_11_Conditional_1_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "p", 21);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ul", 22);
    \u0275\u0275repeaterCreate(4, AvailabilityCardComponent_ng_container_0_Conditional_1_Case_11_Conditional_1_Conditional_11_For_5_Template, 6, 5, "li", 23, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(4).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r1("network.availability.belowTarget"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.weakServices());
  }
}
function AvailabilityCardComponent_ng_container_0_Conditional_1_Case_11_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 11)(2, "span", 12);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 13);
    \u0275\u0275repeaterCreate(6, AvailabilityCardComponent_ng_container_0_Conditional_1_Case_11_Conditional_1_For_7_Template, 5, 12, "div", 14, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 15);
    \u0275\u0275repeaterCreate(9, AvailabilityCardComponent_ng_container_0_Conditional_1_Case_11_Conditional_1_For_10_Template, 3, 2, "span", 16, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, AvailabilityCardComponent_ng_container_0_Conditional_1_Case_11_Conditional_1_Conditional_11_Template, 6, 1, "div", 17);
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275attribute("aria-label", t_r1("network.availability.title"));
    \u0275\u0275advance();
    \u0275\u0275styleProp("bottom", ctx_r1.targetOffset(), "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r1("network.availability.targetLine", \u0275\u0275pureFunction1(8, _c0, \u0275\u0275pipeBind2(4, 5, ctx_r1.target() * 100, "1.0-1"))), " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.bars());
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.bars());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.weakServices().length ? 11 : -1);
  }
}
function AvailabilityCardComponent_ng_container_0_Conditional_1_Case_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AvailabilityCardComponent_ng_container_0_Conditional_1_Case_11_Conditional_0_Template, 2, 1, "p", 7)(1, AvailabilityCardComponent_ng_container_0_Conditional_1_Case_11_Conditional_1_Template, 12, 10);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(!ctx_r1.hasData() ? 0 : 1);
  }
}
function AvailabilityCardComponent_ng_container_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 1)(1, "div", 2)(2, "div")(3, "h3", 3);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 4);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, AvailabilityCardComponent_ng_container_0_Conditional_1_Conditional_8_Template, 2, 4, "div", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, AvailabilityCardComponent_ng_container_0_Conditional_1_Case_9_Template, 1, 0, "div", 6)(10, AvailabilityCardComponent_ng_container_0_Conditional_1_Case_10_Template, 2, 1, "p", 7)(11, AvailabilityCardComponent_ng_container_0_Conditional_1_Case_11_Template, 2, 1);
    \u0275\u0275elementStart(12, "p", 8);
    \u0275\u0275text(13);
    \u0275\u0275elementStart(14, "a", 9);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_7_0;
    const t_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275attribute("aria-busy", ctx_r1.state() === "loading");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r1("network.availability.title"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r1("network.availability.subtitle", \u0275\u0275pureFunction1(11, _c0, \u0275\u0275pipeBind2(7, 8, ctx_r1.target() * 100, "1.0-1"))), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.state() === "ready" && ctx_r1.closedMonths().length ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_7_0 = ctx_r1.state()) === "loading" ? 9 : tmp_7_0 === "error" ? 10 : tmp_7_0 === "ready" ? 11 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r1("network.availability.footnote"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("href", ctx_r1.docsUrl(), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r1("network.availability.docs"));
  }
}
function AvailabilityCardComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, AvailabilityCardComponent_ng_container_0_Conditional_1_Template, 16, 13, "section", 1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.state() !== "hidden" ? 1 : -1);
  }
}
var BAR_TONES = { met: "bg-emerald-500", missed: "bg-rose-500", none: "bg-gray-200 dark:bg-gray-800" };
var CHART_FLOOR = 0.9;
var AvailabilityCardComponent = class _AvailabilityCardComponent {
  constructor() {
    this._usageApi = inject(UsageApiService);
    this._transloco = inject(TranslocoService);
    this._destroyRef = inject(DestroyRef);
    this.state = signal("loading");
    this.report = signal(null);
    this.target = computed(() => this.report()?.target ?? 0.95);
    this.targetOffset = computed(() => this._barHeight(this.target()));
    this.bars = computed(() => {
      const lang = this._transloco.getActiveLang() || "en";
      const formatter = new Intl.DateTimeFormat(lang === "es" ? "es" : "en", { month: "short", year: "numeric", timeZone: "UTC" });
      return (this.report()?.months ?? []).map((month) => __spreadProps(__spreadValues({}, month), {
        label: formatter.format(/* @__PURE__ */ new Date(`${month.month}-01T00:00:00Z`)),
        percent: month.sli === null ? null : month.sli * 100,
        height: month.sli === null ? 0 : this._barHeight(month.sli),
        tone: month.met === true ? BAR_TONES.met : month.met === false ? BAR_TONES.missed : BAR_TONES.none
      }));
    });
    this.hasData = computed(() => this.bars().some((bar) => bar.sli !== null));
    this.closedMonths = computed(() => this.bars().filter((bar) => !bar.partial && bar.sli !== null));
    this.monthsMet = computed(() => this.closedMonths().filter((bar) => bar.met).length);
    this.weakServices = computed(() => {
      const latest = [...this.bars()].reverse().find((bar) => bar.sli !== null);
      if (!latest)
        return [];
      return latest.services.filter((service) => service.sli !== null && service.sli < this.target()).sort((a, b) => (a.sli ?? 0) - (b.sli ?? 0)).slice(0, 3);
    });
    this.docsUrl = () => getVerifikDocsUrls(this._transloco.getActiveLang()).usageApi;
    this._barHeight = (sli) => {
      const clamped = Math.min(1, Math.max(CHART_FLOOR, sli));
      return Math.max(4, (clamped - CHART_FLOOR) / (1 - CHART_FLOOR) * 100);
    };
  }
  ngOnInit() {
    if (!localStorage.getItem("accessToken")) {
      this.state.set("hidden");
      return;
    }
    this._usageApi.getAvailability(6).pipe(takeUntilDestroyed(this._destroyRef)).subscribe({
      next: (report) => {
        this.report.set(report);
        this.state.set("ready");
      },
      error: (error) => this.state.set(error?.status === 401 || error?.status === 403 ? "hidden" : "error")
    });
  }
  static {
    this.\u0275fac = function AvailabilityCardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AvailabilityCardComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AvailabilityCardComponent, selectors: [["app-availability-card"]], decls: 1, vars: 0, consts: [[4, "transloco"], [1, "mb-8", "rounded-2xl", "border", "border-gray-200", "bg-white", "p-6", "shadow-sm", "dark:border-gray-800", "dark:bg-gray-950"], [1, "flex", "flex-col", "gap-2", "md:flex-row", "md:items-start", "md:justify-between"], [1, "text-lg", "font-semibold", "text-gray-900", "dark:text-white"], [1, "mt-1", "max-w-2xl", "text-sm", "leading-6", "text-gray-500", "dark:text-gray-400"], [1, "shrink-0", "rounded-xl", "bg-gray-50", "px-4", "py-2", "text-sm", "text-gray-700", "dark:bg-gray-900", "dark:text-gray-200"], [1, "mt-6", "h-40", "animate-pulse", "rounded-xl", "bg-gray-100", "dark:bg-gray-900"], [1, "mt-6", "text-sm", "text-gray-500", "dark:text-gray-400"], [1, "mt-5", "text-xs", "leading-5", "text-gray-500", "dark:text-gray-400"], ["target", "_blank", "rel", "noopener noreferrer", 1, "font-medium", "text-gray-800", "underline", "underline-offset-2", "dark:text-gray-200", 3, "href"], ["role", "list", 1, "relative", "mt-6", "h-40"], [1, "pointer-events-none", "absolute", "inset-x-0", "border-t", "border-dashed", "border-amber-500/70"], [1, "absolute", "-top-5", "left-0", "text-[11px]", "font-medium", "text-amber-600", "dark:text-amber-400"], [1, "flex", "h-full", "items-end", "gap-3"], ["role", "listitem", 1, "flex", "h-full", "flex-1", "flex-col", "items-center", "justify-end"], [1, "mt-2", "flex", "gap-3"], [1, "flex-1", "text-center", "text-xs", "text-gray-500", "dark:text-gray-400"], [1, "mt-5", "border-t", "border-gray-100", "pt-4", "dark:border-gray-800"], [1, "mb-1", "text-xs", "font-semibold", "tabular-nums", "text-gray-800", "dark:text-gray-100"], [1, "w-full", "max-w-14", "rounded-t-lg", "transition-[height]", "duration-500", 3, "matTooltip"], [1, "block", "text-[10px]", "uppercase", "tracking-wide"], [1, "text-xs", "font-medium", "uppercase", "tracking-[0.12em]", "text-gray-500", "dark:text-gray-400"], [1, "mt-2", "space-y-1"], [1, "flex", "justify-between", "gap-4", "text-sm", "text-gray-700", "dark:text-gray-200"], [1, "truncate"], [1, "tabular-nums", "text-rose-600", "dark:text-rose-400"]], template: function AvailabilityCardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, AvailabilityCardComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
      }
    }, dependencies: [DecimalPipe, MatIconModule, MatTooltipModule, MatTooltip, TranslocoModule, TranslocoDirective], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AvailabilityCardComponent, [{
    type: Component,
    args: [{ selector: "app-availability-card", standalone: true, imports: [DecimalPipe, MatIconModule, MatTooltipModule, TranslocoModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `<ng-container *transloco="let t">\r
    @if (state() !== 'hidden') {\r
        <section\r
            class="mb-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950"\r
            [attr.aria-busy]="state() === 'loading'"\r
        >\r
            <div class="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">\r
                <div>\r
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{{ t('network.availability.title') }}</h3>\r
                    <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-500 dark:text-gray-400">\r
                        {{ t('network.availability.subtitle', { target: (target() * 100 | number: '1.0-1') }) }}\r
                    </p>\r
                </div>\r
                @if (state() === 'ready' && closedMonths().length) {\r
                    <div class="shrink-0 rounded-xl bg-gray-50 px-4 py-2 text-sm text-gray-700 dark:bg-gray-900 dark:text-gray-200">\r
                        {{ t('network.availability.monthsMet', { met: monthsMet(), total: closedMonths().length }) }}\r
                    </div>\r
                }\r
            </div>\r
\r
            @switch (state()) {\r
                @case ('loading') {\r
                    <div class="mt-6 h-40 animate-pulse rounded-xl bg-gray-100 dark:bg-gray-900"></div>\r
                }\r
                @case ('error') {\r
                    <p class="mt-6 text-sm text-gray-500 dark:text-gray-400">{{ t('network.availability.error') }}</p>\r
                }\r
                @case ('ready') {\r
                    @if (!hasData()) {\r
                        <p class="mt-6 text-sm text-gray-500 dark:text-gray-400">{{ t('network.availability.empty') }}</p>\r
                    } @else {\r
                        <div class="relative mt-6 h-40" role="list" [attr.aria-label]="t('network.availability.title')">\r
                            <div\r
                                class="pointer-events-none absolute inset-x-0 border-t border-dashed border-amber-500/70"\r
                                [style.bottom.%]="targetOffset()"\r
                            >\r
                                <span class="absolute -top-5 left-0 text-[11px] font-medium text-amber-600 dark:text-amber-400">\r
                                    {{ t('network.availability.targetLine', { target: (target() * 100 | number: '1.0-1') }) }}\r
                                </span>\r
                            </div>\r
                            <div class="flex h-full items-end gap-3">\r
                                @for (bar of bars(); track bar.month) {\r
                                    <div class="flex h-full flex-1 flex-col items-center justify-end" role="listitem">\r
                                        <span class="mb-1 text-xs font-semibold tabular-nums text-gray-800 dark:text-gray-100">\r
                                            @if (bar.percent !== null) {\r
                                                {{ bar.percent | number: '1.1-2' }}%\r
                                            } @else {\r
                                                \u2014\r
                                            }\r
                                        </span>\r
                                        <div\r
                                            class="w-full max-w-14 rounded-t-lg transition-[height] duration-500"\r
                                            [class]="bar.tone"\r
                                            [class.opacity-60]="bar.partial"\r
                                            [style.height.%]="bar.height"\r
                                            [matTooltip]="t('network.availability.barTooltip', { ok: bar.successes, failed: bar.serviceFailures, excluded: bar.clientErrors })"\r
                                        ></div>\r
                                    </div>\r
                                }\r
                            </div>\r
                        </div>\r
                        <div class="mt-2 flex gap-3">\r
                            @for (bar of bars(); track bar.month) {\r
                                <span class="flex-1 text-center text-xs text-gray-500 dark:text-gray-400">\r
                                    {{ bar.label }}\r
                                    @if (bar.partial) {\r
                                        <span class="block text-[10px] uppercase tracking-wide">{{ t('network.availability.partial') }}</span>\r
                                    }\r
                                </span>\r
                            }\r
                        </div>\r
\r
                        @if (weakServices().length) {\r
                            <div class="mt-5 border-t border-gray-100 pt-4 dark:border-gray-800">\r
                                <p class="text-xs font-medium uppercase tracking-[0.12em] text-gray-500 dark:text-gray-400">\r
                                    {{ t('network.availability.belowTarget') }}\r
                                </p>\r
                                <ul class="mt-2 space-y-1">\r
                                    @for (service of weakServices(); track service.code) {\r
                                        <li class="flex justify-between gap-4 text-sm text-gray-700 dark:text-gray-200">\r
                                            <span class="truncate">{{ service.name || service.code }}</span>\r
                                            <span class="tabular-nums text-rose-600 dark:text-rose-400">{{ (service.sli ?? 0) * 100 | number: '1.1-2' }}%</span>\r
                                        </li>\r
                                    }\r
                                </ul>\r
                            </div>\r
                        }\r
                    }\r
                }\r
            }\r
\r
            <p class="mt-5 text-xs leading-5 text-gray-500 dark:text-gray-400">\r
                {{ t('network.availability.footnote') }}\r
                <a class="font-medium text-gray-800 underline underline-offset-2 dark:text-gray-200" [href]="docsUrl()" target="_blank" rel="noopener noreferrer">{{\r
                    t('network.availability.docs')\r
                }}</a>\r
            </p>\r
        </section>\r
    }\r
</ng-container>\r
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AvailabilityCardComponent, { className: "AvailabilityCardComponent", filePath: "src/app/modules/status-check/availability-card/availability-card.component.ts", lineNumber: 34 });
})();

// src/app/modules/status-check/status-lane.util.ts
var DOWN_STATUSES = ["failed", "timedOut"];
var UP_STATUSES = ["ok", "noData"];
var DEGRADED_STATUSES = ["degraded"];
var UNMEASURED_STATUSES = ["configError", "billingBlocked", "authError", "inconclusive"];
var AWAITING = "awaiting";
var HISTORY_POINTS = 50;
var laneOf = (status) => {
  if (!status || status === AWAITING)
    return "awaiting";
  if (UP_STATUSES.includes(status))
    return "up";
  if (DEGRADED_STATUSES.includes(status))
    return "degraded";
  if (DOWN_STATUSES.includes(status))
    return "down";
  if (UNMEASURED_STATUSES.includes(status))
    return "unmeasured";
  return "unmeasured";
};
var isMeasured = (status) => {
  const lane = laneOf(status);
  return lane === "up" || lane === "degraded" || lane === "down";
};
var uptimePercentage = (points) => {
  const measured = (points || []).filter((point) => isMeasured(point?.status));
  if (measured.length === 0)
    return null;
  const downCount = measured.filter((point) => laneOf(point.status) === "down").length;
  return (measured.length - downCount) * 100 / measured.length;
};
var measuredCount = (points) => (points || []).filter((point) => isMeasured(point?.status)).length;
var cardStatus = (latestTick, fallbackStatus) => latestTick?.status || fallbackStatus || AWAITING;
var probeHistory = (records, limit) => (records || []).filter((record) => record?.bucketMinutes == null).slice(0, limit);
var HISTORY_FILLER = {
  group: "apiRequest",
  status: AWAITING,
  responseTime: 0,
  createdAt: null
};
var adminChartPoints = (records, limit = HISTORY_POINTS) => {
  const probes = probeHistory(records, limit);
  const padding = Array.from({ length: Math.max(0, limit - probes.length) }, () => __spreadValues({}, HISTORY_FILLER));
  return [...probes, ...padding].reverse();
};
var latestChartPoint = (points) => [...points || []].reverse().find((point) => point?.createdAt && point.status !== AWAITING) || null;

// src/app/modules/status-check/status-check.component.ts
var _c02 = (a0, a1, a2, a3) => ({ "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300": a0, "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-200": a1, "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300": a2, "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300": a3 });
var _c12 = (a0, a1, a2, a3, a4) => ({ "bg-green-500": a0, "bg-amber-400": a1, "bg-red-500": a2, "bg-slate-400 dark:bg-slate-500": a3, "bg-gray-100 dark:bg-gray-800": a4 });
function StatusCheckComponent_button_13_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 29);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const ui_r4 = \u0275\u0275readContextLet(1);
    \u0275\u0275property("src", ui_r4.src, \u0275\u0275sanitizeUrl);
  }
}
function StatusCheckComponent_button_13_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 32);
    \u0275\u0275text(1, " public ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const country_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("text-white", ctx_r2.selectedCountry === country_r2.name)("text-gray-700", ctx_r2.selectedCountry !== country_r2.name);
  }
}
function StatusCheckComponent_button_13_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const country_r2 = \u0275\u0275nextContext().$implicit;
    const ui_r4 = \u0275\u0275readContextLet(1);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("text-white", ctx_r2.selectedCountry === country_r2.name)("text-gray-800", ctx_r2.selectedCountry !== country_r2.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ui_r4.text, " ");
  }
}
function StatusCheckComponent_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function StatusCheckComponent_button_13_Template_button_click_0_listener() {
      const country_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleCountry(country_r2.name));
    });
    \u0275\u0275declareLet(1);
    \u0275\u0275template(2, StatusCheckComponent_button_13_Case_2_Template, 1, 1, "img", 29)(3, StatusCheckComponent_button_13_Case_3_Template, 2, 4, "mat-icon", 30)(4, StatusCheckComponent_button_13_Case_4_Template, 2, 5, "span", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_10_0;
    const country_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("bg-white", ctx_r2.selectedCountry !== country_r2.name)("shadow-sm", ctx_r2.selectedCountry !== country_r2.name)("border-gray-200", ctx_r2.selectedCountry !== country_r2.name)("bg-gray-900", ctx_r2.selectedCountry === country_r2.name)("text-white", ctx_r2.selectedCountry === country_r2.name)("border-transparent", ctx_r2.selectedCountry === country_r2.name);
    \u0275\u0275property("matTooltip", country_r2.name + " (" + country_r2.count + ")");
    \u0275\u0275advance();
    const ui_r5 = \u0275\u0275storeLet(ctx_r2.countryFlagUi(country_r2.name));
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_10_0 = ui_r5.k) === "img" ? 2 : tmp_10_0 === "globe" ? 3 : tmp_10_0 === "initials" ? 4 : -1);
  }
}
function StatusCheckComponent_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 34);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "network.no_filters"));
  }
}
function StatusCheckComponent_mat_option_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 18);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r6 = ctx.$implicit;
    \u0275\u0275property("value", cat_r6);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "categories." + cat_r6), " ");
  }
}
function StatusCheckComponent_button_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 35);
    \u0275\u0275listener("click", function StatusCheckComponent_button_37_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.filterData(""));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function StatusCheckComponent_div_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "span", 37);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 38);
    \u0275\u0275element(5, "span", 39);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 38);
    \u0275\u0275element(9, "span", 40);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 38);
    \u0275\u0275element(13, "span", 41);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 38);
    \u0275\u0275element(17, "span", 42);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 5, "network.legend"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 7, "network.lanes.up"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 9, "network.lanes.degraded"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 11, "network.lanes.down"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 13, "network.lanes.unmeasured"), " ");
  }
}
function StatusCheckComponent_div_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275element(1, "mat-spinner", 44);
    \u0275\u0275elementEnd();
  }
}
function StatusCheckComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45)(1, "mat-icon", 46);
    \u0275\u0275text(2, "cloud_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 47);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 48);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 2, "network.no_services"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 4, "network.no_services_desc"), " ");
  }
}
function StatusCheckComponent_div_42_div_1_img_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 82);
  }
  if (rf & 2) {
    const item_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r2.getFlagUrl(item_r9.subject.method.country), \u0275\u0275sanitizeUrl)("alt", item_r9.subject.method.country);
  }
}
function StatusCheckComponent_div_42_div_1_div_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 83);
    \u0275\u0275element(1, "div", 84);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("id", "chart-" + item_r9.subject.method.code);
  }
}
function StatusCheckComponent_div_42_div_1_div_46_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "div", 88);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const it_r10 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction5(2, _c12, ctx_r2.isUp(it_r10.status), ctx_r2.isDegraded(it_r10.status), ctx_r2.isDown(it_r10.status), ctx_r2.isUnmeasured(it_r10.status), ctx_r2.isAwaiting(it_r10.status)))("matTooltip", ctx_r2.tickTooltip(it_r10));
  }
}
function StatusCheckComponent_div_42_div_1_div_46_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 89);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "network.no_data"), " ");
  }
}
function StatusCheckComponent_div_42_div_1_div_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 85);
    \u0275\u0275template(1, StatusCheckComponent_div_42_div_1_div_46_ng_container_1_Template, 2, 8, "ng-container", 86)(2, StatusCheckComponent_div_42_div_1_div_46_div_2_Template, 3, 3, "div", 87);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", item_r9.data);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !item_r9.data || item_r9.data.length === 0);
  }
}
function StatusCheckComponent_div_42_div_1_span_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 90);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classProp("text-green-600", item_r9.subject.percentage >= 98)("text-yellow-600", item_r9.subject.percentage < 98 && item_r9.subject.percentage >= 90)("text-red-600", item_r9.subject.percentage < 90);
    \u0275\u0275property("matTooltip", item_r9.subject.measuredPoints + " " + \u0275\u0275pipeBind1(1, 8, "network.measured_points"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 10, item_r9.subject.percentage, "1.0-2"), "% ");
  }
}
function StatusCheckComponent_div_42_div_1_ng_template_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 91);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275text(2, "\u2014");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "network.not_measured"));
  }
}
function StatusCheckComponent_div_42_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 51)(1, "div", 52)(2, "div", 53)(3, "div", 54)(4, "div", 55)(5, "h3", 56);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 57);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "p", 58);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 59)(12, "span", 60);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 61);
    \u0275\u0275text(16, "\u2022");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "currency");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(20, StatusCheckComponent_div_42_div_1_img_20_Template, 1, 2, "img", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 63)(22, "mat-icon", 64);
    \u0275\u0275text(23, "link");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 65);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 66)(27, "div", 67)(28, "span", 68);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "transloco");
    \u0275\u0275pipe(31, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 69)(33, "button", 70);
    \u0275\u0275pipe(34, "transloco");
    \u0275\u0275pipe(35, "transloco");
    \u0275\u0275listener("click", function StatusCheckComponent_div_42_div_1_Template_button_click_33_listener() {
      const item_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openDialog(item_r9));
    });
    \u0275\u0275elementStart(36, "mat-icon", 71);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 72)(39, "button", 73);
    \u0275\u0275listener("click", function StatusCheckComponent_div_42_div_1_Template_button_click_39_listener() {
      const item_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleView(item_r9, "uptime"));
    });
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "button", 73);
    \u0275\u0275listener("click", function StatusCheckComponent_div_42_div_1_Template_button_click_42_listener() {
      const item_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleView(item_r9, "graph"));
    });
    \u0275\u0275text(43);
    \u0275\u0275pipe(44, "transloco");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(45, StatusCheckComponent_div_42_div_1_div_45_Template, 2, 1, "div", 74)(46, StatusCheckComponent_div_42_div_1_div_46_Template, 3, 2, "div", 75);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "div", 76)(48, "div", 77)(49, "span", 78);
    \u0275\u0275text(50);
    \u0275\u0275pipe(51, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(52, StatusCheckComponent_div_42_div_1_span_52_Template, 4, 13, "span", 79)(53, StatusCheckComponent_div_42_div_1_ng_template_53_Template, 3, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "div", 80)(56, "span", 78);
    \u0275\u0275text(57);
    \u0275\u0275pipe(58, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "span", 81);
    \u0275\u0275text(60);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const noUptime_r11 = \u0275\u0275reference(54);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("title", item_r9.subject.method.currentTranslation);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r9.subject.method.currentTranslation, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(68, _c02, ctx_r2.currentLane(item_r9) === "up", ctx_r2.currentLane(item_r9) === "degraded", ctx_r2.currentLane(item_r9) === "down", ctx_r2.currentLane(item_r9) === "unmeasured" || ctx_r2.currentLane(item_r9) === "awaiting"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.laneLabel(item_r9.subject.currentStatus), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.publicMessageFor(item_r9), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 45, "categories." + item_r9.subject.method.baseCategory), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(19, 47, item_r9.subject.method.price, "USD", "symbol", "1.3-3"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", item_r9.subject.method.country !== "All");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(item_r9.subject.method.url);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", item_r9.subject.showGraph ? \u0275\u0275pipeBind1(30, 52, "network.response_time") : \u0275\u0275pipeBind1(31, 54, "network.uptime_history"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("text-primary-600", item_r9.subject.isSubscribed)("bg-primary-50", item_r9.subject.isSubscribed)("border-primary-200", item_r9.subject.isSubscribed);
    \u0275\u0275property("matTooltip", item_r9.subject.isSubscribed ? \u0275\u0275pipeBind1(34, 56, "network.alerts.active") : \u0275\u0275pipeBind1(35, 58, "network.alerts.enable"));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("animate-pulse", item_r9.subject.isSubscribed);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r9.subject.isSubscribed ? "notifications_active" : "notifications_none");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-white", !item_r9.subject.showGraph)("shadow-sm", !item_r9.subject.showGraph)("text-gray-900", !item_r9.subject.showGraph)("text-gray-500", item_r9.subject.showGraph);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(41, 60, "network.status"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-white", item_r9.subject.showGraph)("shadow-sm", item_r9.subject.showGraph)("text-primary-600", item_r9.subject.showGraph)("text-gray-500", !item_r9.subject.showGraph);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(44, 62, "network.latency"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", item_r9.subject.showGraph);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !item_r9.subject.showGraph);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(51, 64, "network.uptime"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", item_r9.subject.percentage !== null)("ngIfElse", noUptime_r11);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(58, 66, "network.last_check"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.formatDate(item_r9.subject.lastDate) || "N/A", " ");
  }
}
function StatusCheckComponent_div_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275template(1, StatusCheckComponent_div_42_div_1_Template, 61, 73, "div", 50);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.filteredData)("ngForTrackBy", ctx_r2.item == null ? null : ctx_r2.item.subject == null ? null : ctx_r2.item.subject.method == null ? null : ctx_r2.item.subject.method.code);
  }
}
var StatusCheckComponent = class _StatusCheckComponent {
  constructor() {
    this._statusCheckService = inject(StatusCheckService);
    this._cdr = inject(ChangeDetectorRef);
    this._translocoService = inject(TranslocoService);
    this._dialog = inject(MatDialog);
    this._unsubscribeAll = new Subject();
    this.dataSource = [];
    this.filteredData = [];
    this.loading = false;
    this.searchInput = "";
    this.selectedCountry = null;
    this.selectedCategory = null;
    this.showOnlySubscribed = false;
    this.countries = [];
    this.categories = [];
    this.featureCodes = [];
    this.sameCodeData = [
      "colombia_api_vehicle_complete_by_vin",
      "colombia_api_vehicle_complete_by_plate"
    ];
    this.sameData = [];
    this.activeCharts = /* @__PURE__ */ new Map();
    this._subscriptions = [];
  }
  ngOnInit() {
    this.loading = true;
    this.getFeatures();
    this.getSubscriptions();
    this._translocoService.langChanges$.pipe(takeUntil(this._unsubscribeAll)).subscribe(() => {
      this.updateTranslations();
    });
  }
  ngAfterViewInit() {
  }
  ngOnDestroy() {
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
    this.activeCharts.forEach((chart) => chart.destroy());
    this.activeCharts.clear();
  }
  getFeatures() {
    this._statusCheckService.getAppFeatures({
      in_group: ["apiRequest", "biometrics", "faceRecognition"],
      where_isAvailable: true,
      wherenot_legacy: true,
      sort: "code"
    }).pipe(takeUntil(this._unsubscribeAll)).subscribe({
      next: (result) => {
        const listUserFeatures = [];
        const data = result.data || result;
        if (Array.isArray(data)) {
          data.forEach((e) => {
            if (e.code !== "pdf_generator" && e.code !== "online_postman") {
              listUserFeatures.push({
                code: e.code,
                name: e.name,
                url: e.url,
                country: e.country,
                currentTranslation: "",
                // Will be set by updateTranslations
                baseCategory: e.baseCategory,
                group: e.group,
                price: e.price
              });
            }
          });
        }
        this.featureCodes = listUserFeatures;
        this.updateTranslations();
        this.calculateFilters();
        this.getUptimes();
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
        this._cdr.markForCheck();
      }
    });
  }
  getSubscriptions() {
    this._statusCheckService.getIncidentsSubscriptions({ populates: ["appFeature"] }).pipe(takeUntil(this._unsubscribeAll)).subscribe({
      next: (result) => {
        this._subscriptions = result.data || result;
        this.updateSubscriptionInfo();
      }
    });
  }
  updateSubscriptionInfo() {
    if (!this.dataSource.length || !this._subscriptions.length)
      return;
    this.dataSource.forEach((item) => {
      const found = this._subscriptions.find((sub) => sub.appFeature?.code === item.subject.method.code);
      item.subject.isSubscribed = !!found;
      item.subject.subscription = found || null;
    });
    this.applyFilters();
    this._cdr.markForCheck();
  }
  updateTranslations() {
    if (!this.featureCodes.length)
      return;
    this.featureCodes.forEach((f) => {
      const key = `appFeatures.${f.code}.title`;
      const translated = this._translocoService.translate(key);
      f.currentTranslation = translated !== key ? translated : f.name;
    });
    if (this.dataSource.length) {
      this.dataSource.forEach((item) => {
        const f = item.subject.method;
        const key = `appFeatures.${f.code}.title`;
        const translated = this._translocoService.translate(key);
        f.currentTranslation = translated !== key ? translated : f.name;
      });
    }
    this._cdr.markForCheck();
  }
  calculateFilters() {
    const countryCounts = {};
    this.featureCodes.forEach((f) => {
      if (f.country) {
        countryCounts[f.country] = (countryCounts[f.country] || 0) + 1;
      }
    });
    this.countries = Object.entries(countryCounts).map(([name, count]) => ({ name, count })).sort((a, b) => b.count - a.count);
    const cats = /* @__PURE__ */ new Set();
    this.featureCodes.forEach((f) => {
      if (f.baseCategory) {
        cats.add(f.baseCategory.toLowerCase());
      }
      if (["biometrics", "facerecognition", "faceverification"].includes(f.group?.toLowerCase()) || f.baseCategory?.toLowerCase() === "biometrics" || f.baseCategory?.toLowerCase() === "faceverification") {
        cats.add("biometrics");
      }
    });
    this.categories = Array.from(cats).sort();
  }
  getUptimes() {
    const promises = this.generatePromises(this.featureCodes);
    const methodMap = promises.map((p) => p.method);
    const obsList = promises.map((p) => p.promise);
    if (obsList.length === 0) {
      this.loading = false;
      return;
    }
    this.dataSource = [];
    this.sameData = [];
    forkJoin(obsList).pipe(takeUntil(this._unsubscribeAll)).subscribe({
      next: (results) => {
        for (let index = 0; index < results.length; index++) {
          const resultData = results[index]?.data || [];
          const method = methodMap[index];
          if (this.sameCodeData.includes(method.code)) {
            if (!this.sameData.length) {
              this.sameData = resultData;
            }
            this.processStatusRecord([...this.sameData], method);
            continue;
          }
          this.processStatusRecord(resultData, method);
        }
        this.dataSource.sort((a, b) => {
          const left = a.subject.percentage;
          const right = b.subject.percentage;
          if (left === null && right === null)
            return 0;
          if (left === null)
            return 1;
          if (right === null)
            return -1;
          return right - left;
        });
        this.applyFilters();
        this.loading = false;
        this._cdr.markForCheck();
      },
      error: (err) => {
        this.loading = false;
        this._cdr.markForCheck();
      },
      complete: () => {
        this.updateSubscriptionInfo();
      }
    });
  }
  generatePromises(features) {
    const promises = [];
    for (const method of features) {
      const payload = {
        where_code: method.code,
        page: 1,
        perPage: HISTORY_POINTS,
        sort: "-createdAt"
      };
      promises.push({
        method,
        promise: this._statusCheckService.getStatusRecord(payload).pipe(catchError(() => of({ data: [] })))
      });
    }
    return promises;
  }
  // Status lanes, so the template can colour a bar by what it means
  isUp(status) {
    return laneOf(status) === "up";
  }
  isDegraded(status) {
    return laneOf(status) === "degraded";
  }
  isDown(status) {
    return laneOf(status) === "down";
  }
  /** We looked and learned nothing. Rendered distinctly from an interval nobody reported. */
  isUnmeasured(status) {
    return laneOf(status) === "unmeasured";
  }
  isAwaiting(status) {
    return laneOf(status) === "awaiting";
  }
  /**
   * Same as Admin details `tickTooltip`: time · status · ms · source · N req.
   */
  tickTooltip(point) {
    if (this.isAwaiting(point?.status)) {
      return this._translocoService.translate("network.no_data");
    }
    const parts = [
      this.formatDate(point.createdAt),
      point.status,
      point.responseTime ? `${point.responseTime}ms` : null,
      point.source || null,
      point.trafficSamples ? `${point.trafficSamples} req` : null
    ];
    return parts.filter(Boolean).join(" \xB7 ");
  }
  /**
   * Latest measured point on the card (ignores awaiting fillers).
   */
  latestPoint(item) {
    return latestChartPoint(item?.data);
  }
  currentLane(item) {
    return laneOf(this.latestPoint(item)?.status);
  }
  publicMessageFor(item) {
    const point = this.latestPoint(item);
    if (point?.publicMessage)
      return point.publicMessage;
    const lane = this.currentLane(item);
    if (lane === "down") {
      return this._translocoService.translate("network.lanes.outage_message");
    }
    if (lane === "unmeasured" || lane === "awaiting") {
      return this._translocoService.translate("network.lanes.limited_message");
    }
    if (lane === "degraded") {
      return this._translocoService.translate("network.lanes.degraded_message");
    }
    return this._translocoService.translate("network.lanes.operational_message");
  }
  laneLabel(status) {
    const lane = laneOf(status);
    return this._translocoService.translate(`network.lanes.${lane}`);
  }
  processStatusRecord(listStatusRecord, method) {
    const points = adminChartPoints(listStatusRecord, HISTORY_POINTS);
    const latest = latestChartPoint(points);
    const record = {
      data: points,
      subject: {
        method,
        showGraph: false,
        /**
         * Only the down lane is downtime, the unmeasured lane is left out of the
         * denominator, and nothing measurable yields null rather than 100.
         */
        percentage: uptimePercentage(points),
        measuredPoints: measuredCount(points),
        firstDate: points.find((point) => point.createdAt)?.createdAt,
        lastDate: latest?.createdAt,
        currentStatus: cardStatus(latest),
        publicMessage: latest?.publicMessage || null,
        isSubscribed: false,
        subscription: null
      }
    };
    this.dataSource.push(record);
  }
  toggleView(item, mode) {
    return __async(this, null, function* () {
      const id = item.subject.method.code;
      if (this.activeCharts.has(id)) {
        this.activeCharts.get(id).destroy();
        this.activeCharts.delete(id);
      }
      if (mode === "uptime") {
        item.subject.showGraph = false;
      } else {
        item.subject.showGraph = true;
        this._cdr.detectChanges();
        setTimeout(() => {
          const chartDiv = document.getElementById(`chart-${id}`);
          if (chartDiv) {
            const options = this.getGraphOptions(item.data);
            const chart = new gs(chartDiv, options);
            chart.render();
            this.activeCharts.set(id, chart);
          }
        }, 0);
      }
    });
  }
  getGraphOptions(data) {
    const responseTimes = data.map((d) => d.responseTime || 0);
    return {
      series: [
        {
          name: this._translocoService.translate("network.latency_unit"),
          data: responseTimes
        }
      ],
      chart: {
        type: "line",
        height: 80,
        sparkline: {
          enabled: true
        },
        animations: {
          enabled: false
        }
      },
      stroke: {
        curve: "smooth",
        width: 2
      },
      colors: ["#4f46e5"],
      tooltip: {
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function(seriesName) {
              return "";
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
  }
  // Unified Filter
  applyFilters() {
    let data = [...this.dataSource];
    if (this.searchInput) {
      const lowerQuery = this.searchInput.toLowerCase();
      data = data.filter((item) => {
        const m = item.subject.method;
        return m.name && m.name.toLowerCase().includes(lowerQuery) || m.url && m.url.toLowerCase().includes(lowerQuery) || m.currentTranslation && m.currentTranslation.toLowerCase().includes(lowerQuery);
      });
    }
    if (this.selectedCountry) {
      data = data.filter((item) => item.subject.method.country === this.selectedCountry);
    }
    if (this.selectedCategory) {
      if (this.selectedCategory === "biometrics") {
        data = data.filter((item) => ["biometrics", "facerecognition", "faceverification"].includes(item.subject.method.group?.toLowerCase()) || item.subject.method.baseCategory?.toLowerCase() === "biometrics" || item.subject.method.baseCategory?.toLowerCase() === "faceverification");
      } else {
        data = data.filter((item) => item.subject.method.baseCategory?.toLowerCase() === this.selectedCategory.toLowerCase());
      }
    }
    if (this.showOnlySubscribed) {
      data = data.filter((item) => item.subject?.isSubscribed);
    }
    this.filteredData = data;
  }
  toggleSubscribedFilter() {
    this.showOnlySubscribed = !this.showOnlySubscribed;
    this.applyFilters();
  }
  openDialog(item) {
    import("./chunk-VPWW7BVC.js").then(({ SubscribeComponent }) => {
      const dialogRef = this._dialog.open(SubscribeComponent, {
        data: item,
        width: "100%",
        maxWidth: "480px",
        maxHeight: "90vh",
        panelClass: "subscribe-dialog-panel"
      });
      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          if (result.create || result.update) {
            item.subject.isSubscribed = true;
            item.subject.subscription = result.subscription;
          } else if (result.delete) {
            item.subject.isSubscribed = false;
            item.subject.subscription = null;
          }
          this.applyFilters();
          this._cdr.markForCheck();
        }
      });
    });
  }
  filterData(query) {
    this.searchInput = query;
    this.applyFilters();
  }
  toggleCountry(country) {
    if (this.selectedCountry === country) {
      this.selectedCountry = null;
    } else {
      this.selectedCountry = country;
    }
    this.applyFilters();
  }
  setCategory(category) {
    this.selectedCategory = category;
    this.applyFilters();
  }
  formatDate(dateStr) {
    if (!dateStr)
      return "";
    return DateTime.fromISO(dateStr).toLocaleString(DateTime.DATETIME_MED);
  }
  countryFlagUi(country) {
    return postmanCountryFlagUi(country);
  }
  // Card thumbnails stay SVG images. The filter chips use flag pictures, not emoji.
  getFlagUrl(countryCode) {
    if (!countryCode || countryCode === "All")
      return "";
    return `https://cdn.verifik.co/assets/flags/${countryCode}.svg`;
  }
  static {
    this.\u0275fac = function StatusCheckComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StatusCheckComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StatusCheckComponent, selectors: [["status-check"]], decls: 43, vars: 47, consts: [["noUptime", ""], [1, "flex", "flex-col", "flex-auto", "min-w-0", "bg-gray-50", "dark:bg-gray-900", "min-h-screen"], [1, "flex", "flex-col", "w-full", "max-w-7xl", "mx-auto", "p-6", "md:p-8"], [1, "flex", "flex-col", "py-6", "mb-8", "border-b", "border-gray-200", "dark:border-gray-800"], [1, "flex", "items-center", "justify-between", "mb-6"], [1, "text-3xl", "font-bold", "tracking-tight", "text-gray-900", "dark:text-white"], [1, "text-lg", "text-gray-500", "dark:text-gray-400", "mt-1"], [1, "flex", "flex-col", "lg:flex-row", "lg:items-center", "justify-between", "gap-6"], [1, "flex", "items-center", "gap-1.5", "overflow-x-auto", "scrollbar-hide", "mask-gradient", "p-1", "-ml-1", "pl-1", "lg:max-w-[60%]"], ["class", "h-9 w-9 min-w-[2.25rem] flex items-center justify-center rounded-full border transition-all duration-200 relative group text-lg flex-shrink-0 aspect-square", 3, "bg-white", "shadow-sm", "border-gray-200", "bg-gray-900", "text-white", "border-transparent", "matTooltip", "click", 4, "ngFor", "ngForOf"], ["class", "text-sm text-gray-400 italic", 4, "ngIf"], [1, "flex", "flex-col", "sm:flex-row", "items-center", "gap-4", "w-full", "lg:w-auto"], ["type", "button", 1, "h-9", "px-3", "inline-flex", "items-center", "gap-2", "rounded-full", "border", "shadow-sm", "transition-all", "text-sm", "font-medium", "leading-none", "whitespace-nowrap", "flex-shrink-0", "dark:bg-gray-800", "dark:text-gray-200", "dark:border-gray-700", 3, "click", "matTooltip"], [1, "icon-size-4", "leading-none"], [1, "whitespace-nowrap"], [1, "w-full", "sm:w-48", "fuse-mat-dense", 3, "subscriptSizing"], ["matPrefix", "", 1, "icon-size-5", "text-gray-500", "ml-2", "mr-2"], [3, "selectionChange", "value", "placeholder"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], [1, "w-full", "sm:w-72", "fuse-mat-dense", 3, "subscriptSizing"], ["matPrefix", "", 1, "icon-size-5", "text-gray-500"], ["matInput", "", 3, "ngModelChange", "ngModel", "placeholder"], ["matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click", 4, "ngIf"], ["class", "mb-6 flex flex-wrap items-center gap-3 text-xs text-gray-500 dark:text-gray-400", 4, "ngIf"], ["class", "flex flex-auto justify-center items-center py-20", 4, "ngIf"], ["class", "flex flex-col items-center justify-center py-20 text-center", 4, "ngIf"], ["class", "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", 4, "ngIf"], [1, "h-9", "w-9", "min-w-[2.25rem]", "flex", "items-center", "justify-center", "rounded-full", "border", "transition-all", "duration-200", "relative", "group", "text-lg", "flex-shrink-0", "aspect-square", 3, "click", "matTooltip"], ["alt", "", "width", "20", "height", "20", "decoding", "async", "loading", "lazy", 1, "h-5", "w-5", "rounded-full", "object-cover", 3, "src"], [1, "!h-5", "!w-5", "!text-[20px]", 3, "text-white", "text-gray-700"], [1, "text-[10px]", "font-bold", "leading-none", 3, "text-white", "text-gray-800"], [1, "!h-5", "!w-5", "!text-[20px]"], [1, "text-[10px]", "font-bold", "leading-none"], [1, "text-sm", "text-gray-400", "italic"], ["matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click"], [1, "mb-6", "flex", "flex-wrap", "items-center", "gap-3", "text-xs", "text-gray-500", "dark:text-gray-400"], [1, "font-semibold", "uppercase", "tracking-wide", "text-gray-400"], [1, "inline-flex", "items-center", "gap-1.5"], [1, "h-2.5", "w-2.5", "rounded-sm", "bg-green-500"], [1, "h-2.5", "w-2.5", "rounded-sm", "bg-amber-400"], [1, "h-2.5", "w-2.5", "rounded-sm", "bg-red-500"], [1, "h-2.5", "w-2.5", "rounded-sm", "bg-slate-400"], [1, "flex", "flex-auto", "justify-center", "items-center", "py-20"], ["diameter", "64"], [1, "flex", "flex-col", "items-center", "justify-center", "py-20", "text-center"], [1, "icon-size-24", "text-gray-300", "dark:text-gray-600", "mb-4"], [1, "text-xl", "font-medium", "text-gray-600", "dark:text-gray-400"], [1, "text-gray-500", "dark:text-gray-500", "max-w-sm", "mx-auto", "mt-2"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-3", "gap-6"], ["class", "flex flex-col bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden transition-shadow hover:shadow-md", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "flex", "flex-col", "bg-white", "dark:bg-gray-800", "rounded-2xl", "shadow-sm", "border", "border-gray-200", "dark:border-gray-700", "overflow-hidden", "transition-shadow", "hover:shadow-md"], [1, "p-5", "border-b", "border-gray-100", "dark:border-gray-700/50", "bg-gray-50/30", "dark:bg-gray-800/50"], [1, "flex", "items-start", "justify-between", "gap-3"], [1, "flex", "flex-col", "min-w-0"], [1, "flex", "items-center", "gap-2", "min-w-0"], [1, "text-lg", "font-semibold", "text-gray-900", "dark:text-white", "truncate", 3, "title"], [1, "inline-flex", "shrink-0", "items-center", "rounded-full", "px-2", "py-0.5", "text-[10px]", "font-semibold", "uppercase", "tracking-wide", 3, "ngClass"], [1, "mt-1.5", "text-sm", "leading-5", "text-gray-500", "dark:text-gray-400", "line-clamp-2"], [1, "flex", "items-center", "mt-2", "space-x-2", "text-sm", "text-gray-500", "dark:text-gray-400"], [1, "uppercase", "tracking-wider", "text-xs", "font-medium", "px-2", "py-0.5", "rounded", "bg-gray-100", "dark:bg-gray-700", "text-gray-600", "dark:text-gray-300"], [1, "text-gray-300", "dark:text-gray-600", "px-1"], ["class", "w-6 h-auto rounded shadow-sm flex-shrink-0", 3, "src", "alt", 4, "ngIf"], [1, "flex", "items-center", "mt-3", "text-sm", "text-gray-500", "dark:text-gray-400", "font-mono", "bg-gray-50", "dark:bg-gray-900/50", "px-3", "py-1.5", "rounded-md", "border", "border-gray-100", "dark:border-gray-800"], [1, "icon-size-4", "mr-2", "text-gray-400"], [1, "truncate"], [1, "flex-auto", "p-5"], [1, "flex", "items-center", "justify-between", "mb-4"], [1, "text-sm", "font-medium", "text-gray-500", "dark:text-gray-400"], [1, "flex", "items-center", "gap-3"], [1, "flex", "items-center", "justify-center", "w-8", "h-8", "rounded-lg", "border", "border-gray-200", "dark:border-gray-700", "transition-all", "hover:bg-gray-50", "dark:hover:bg-gray-800", 3, "click", "matTooltip"], [1, "icon-size-4"], [1, "flex", "bg-gray-100", "dark:bg-gray-700", "p-1", "rounded-lg"], [1, "px-3", "py-1", "text-xs", "font-medium", "rounded-md", "transition-all", 3, "click"], ["class", "h-20 w-full overflow-hidden", 4, "ngIf"], ["class", "h-20 w-full flex items-end justify-between space-x-0.5", 4, "ngIf"], [1, "px-5", "py-4", "bg-gray-50/50", "dark:bg-gray-800/30", "border-t", "border-gray-100", "dark:border-gray-800", "flex", "items-center", "justify-between"], [1, "flex", "flex-col"], [1, "text-xs", "text-gray-400", "uppercase", "font-semibold", "tracking-wide"], ["class", "text-lg font-bold", 3, "text-green-600", "text-yellow-600", "text-red-600", "matTooltip", 4, "ngIf", "ngIfElse"], [1, "text-right", "flex", "flex-col", "items-end"], [1, "text-sm", "font-medium", "text-gray-700", "dark:text-gray-300"], [1, "w-6", "h-auto", "rounded", "shadow-sm", "flex-shrink-0", 3, "src", "alt"], [1, "h-20", "w-full", "overflow-hidden"], [1, "w-full", "h-full", 3, "id"], [1, "h-20", "w-full", "flex", "items-end", "justify-between", "space-x-0.5"], [4, "ngFor", "ngForOf"], ["class", "w-full h-full flex items-center justify-center text-gray-400 text-sm", 4, "ngIf"], ["matTooltipPosition", "above", 1, "status-tick", "w-full", "flex-1", "rounded-sm", "transition-all", "hover:opacity-80", 3, "ngClass", "matTooltip"], [1, "w-full", "h-full", "flex", "items-center", "justify-center", "text-gray-400", "text-sm"], [1, "text-lg", "font-bold", 3, "matTooltip"], [1, "text-lg", "font-bold", "text-gray-400", 3, "matTooltip"]], template: function StatusCheckComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div")(5, "h2", 5);
        \u0275\u0275text(6);
        \u0275\u0275pipe(7, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p", 6);
        \u0275\u0275text(9);
        \u0275\u0275pipe(10, "transloco");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(11, "div", 7)(12, "div", 8);
        \u0275\u0275template(13, StatusCheckComponent_button_13_Template, 5, 15, "button", 9)(14, StatusCheckComponent_span_14_Template, 3, 3, "span", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "div", 11)(16, "button", 12);
        \u0275\u0275pipe(17, "transloco");
        \u0275\u0275listener("click", function StatusCheckComponent_Template_button_click_16_listener() {
          return ctx.toggleSubscribedFilter();
        });
        \u0275\u0275elementStart(18, "mat-icon", 13);
        \u0275\u0275text(19);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "span", 14);
        \u0275\u0275text(21);
        \u0275\u0275pipe(22, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "mat-form-field", 15)(24, "mat-icon", 16);
        \u0275\u0275text(25, "category");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "mat-select", 17);
        \u0275\u0275pipe(27, "transloco");
        \u0275\u0275listener("selectionChange", function StatusCheckComponent_Template_mat_select_selectionChange_26_listener($event) {
          return ctx.setCategory($event.value);
        });
        \u0275\u0275elementStart(28, "mat-option", 18);
        \u0275\u0275text(29);
        \u0275\u0275pipe(30, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275template(31, StatusCheckComponent_mat_option_31_Template, 3, 4, "mat-option", 19);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(32, "mat-form-field", 20)(33, "mat-icon", 21);
        \u0275\u0275text(34, "search");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "input", 22);
        \u0275\u0275pipe(36, "transloco");
        \u0275\u0275listener("ngModelChange", function StatusCheckComponent_Template_input_ngModelChange_35_listener($event) {
          return ctx.filterData($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(37, StatusCheckComponent_button_37_Template, 3, 0, "button", 23);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275element(38, "app-availability-card");
        \u0275\u0275template(39, StatusCheckComponent_div_39_Template, 20, 15, "div", 24)(40, StatusCheckComponent_div_40_Template, 2, 0, "div", 25)(41, StatusCheckComponent_div_41_Template, 9, 6, "div", 26)(42, StatusCheckComponent_div_42_Template, 2, 2, "div", 27);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 33, "network.title"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 35, "network.subtitle"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275property("ngForOf", ctx.countries);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.countries.length === 0 && !ctx.loading);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("bg-primary-600", ctx.showOnlySubscribed)("text-white", ctx.showOnlySubscribed)("border-primary-600", ctx.showOnlySubscribed)("bg-white", !ctx.showOnlySubscribed)("text-gray-700", !ctx.showOnlySubscribed)("border-gray-200", !ctx.showOnlySubscribed);
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(17, 37, "network.alerts.filter_subscribed_tooltip"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.showOnlySubscribed ? "notifications_active" : "notifications_none");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 39, "network.alerts.filter_subscribed"));
        \u0275\u0275advance(2);
        \u0275\u0275property("subscriptSizing", "dynamic");
        \u0275\u0275advance(3);
        \u0275\u0275property("value", ctx.selectedCategory)("placeholder", \u0275\u0275pipeBind1(27, 41, "categories.label"));
        \u0275\u0275advance(2);
        \u0275\u0275property("value", null);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(30, 43, "categories.all"));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.categories);
        \u0275\u0275advance();
        \u0275\u0275property("subscriptSizing", "dynamic");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngModel", ctx.searchInput)("placeholder", \u0275\u0275pipeBind1(36, 45, "network.search_placeholder"));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.searchInput);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading && ctx.filteredData.length === 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading && ctx.filteredData.length > 0);
      }
    }, dependencies: [
      CommonModule,
      NgClass,
      NgForOf,
      NgIf,
      DecimalPipe,
      CurrencyPipe,
      TranslocoModule,
      TranslocoPipe,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatButtonModule,
      MatIconButton,
      MatIconModule,
      MatIcon,
      MatFormFieldModule,
      MatFormField,
      MatPrefix,
      MatSuffix,
      MatInputModule,
      MatInput,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      ReactiveFormsModule,
      MatSlideToggleModule,
      MatTooltipModule,
      MatTooltip,
      MatSelectModule,
      MatSelect,
      MatOption,
      MatOptionModule,
      MatDialogModule,
      AvailabilityCardComponent
    ], styles: ["\n\n.status-tick[_ngcontent-%COMP%] {\n  height: 1.5rem;\n  width: 0.375rem;\n  border-radius: 0.125rem;\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 200ms;\n}\n.status-tick[_ngcontent-%COMP%]:hover {\n  --tw-scale-x: 1.25;\n  --tw-scale-y: 1.25;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n/*# sourceMappingURL=status-check.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StatusCheckComponent, [{
    type: Component,
    args: [{ selector: "status-check", standalone: true, imports: [
      CommonModule,
      TranslocoModule,
      MatProgressSpinnerModule,
      MatButtonModule,
      MatIconModule,
      MatFormFieldModule,
      MatInputModule,
      FormsModule,
      ReactiveFormsModule,
      MatSlideToggleModule,
      MatTooltipModule,
      MatSelectModule,
      MatOptionModule,
      MatDialogModule,
      AvailabilityCardComponent
    ], template: `<div class="flex flex-col flex-auto min-w-0 bg-gray-50 dark:bg-gray-900 min-h-screen">\r
    <div class="flex flex-col w-full max-w-7xl mx-auto p-6 md:p-8">\r
        <!-- Header -->\r
        <!-- Header -->\r
        <div class="flex flex-col py-6 mb-8 border-b border-gray-200 dark:border-gray-800">\r
            <div class="flex items-center justify-between mb-6">\r
                <div>\r
                    <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">\r
                        {{ 'network.title' | transloco }}\r
                    </h2>\r
                    <p class="text-lg text-gray-500 dark:text-gray-400 mt-1">\r
                        {{ 'network.subtitle' | transloco }}\r
                    </p>\r
                </div>\r
            </div>\r
\r
            <!-- Filters Toolbar -->\r
            <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-6">\r
                <!-- Country Filters (Pill Style) -->\r
                <div\r
                    class="flex items-center gap-1.5 overflow-x-auto scrollbar-hide mask-gradient p-1 -ml-1 pl-1 lg:max-w-[60%]"\r
                >\r
                    <button\r
                        *ngFor="let country of countries"\r
                        (click)="toggleCountry(country.name)"\r
                        [class.bg-white]="selectedCountry !== country.name"\r
                        [class.shadow-sm]="selectedCountry !== country.name"\r
                        [class.border-gray-200]="selectedCountry !== country.name"\r
                        [class.bg-gray-900]="selectedCountry === country.name"\r
                        [class.text-white]="selectedCountry === country.name"\r
                        [class.border-transparent]="selectedCountry === country.name"\r
                        class="h-9 w-9 min-w-[2.25rem] flex items-center justify-center rounded-full border transition-all duration-200 relative group text-lg flex-shrink-0 aspect-square"\r
                        [matTooltip]="country.name + ' (' + country.count + ')'"\r
                    >\r
                        @let ui = countryFlagUi(country.name);\r
                        @switch (ui.k) {\r
                            @case ('img') {\r
                                <img\r
                                    [src]="ui.src"\r
                                    alt=""\r
                                    width="20"\r
                                    height="20"\r
                                    decoding="async"\r
                                    loading="lazy"\r
                                    class="h-5 w-5 rounded-full object-cover"\r
                                />\r
                            }\r
                            @case ('globe') {\r
                                <mat-icon\r
                                    class="!h-5 !w-5 !text-[20px]"\r
                                    [class.text-white]="selectedCountry === country.name"\r
                                    [class.text-gray-700]="selectedCountry !== country.name"\r
                                >\r
                                    public\r
                                </mat-icon>\r
                            }\r
                            @case ('initials') {\r
                                <span\r
                                    class="text-[10px] font-bold leading-none"\r
                                    [class.text-white]="selectedCountry === country.name"\r
                                    [class.text-gray-800]="selectedCountry !== country.name"\r
                                >\r
                                    {{ ui.text }}\r
                                </span>\r
                            }\r
                        }\r
                    </button>\r
                    <span\r
                        *ngIf="countries.length === 0 && !loading"\r
                        class="text-sm text-gray-400 italic"\r
                        >{{ 'network.no_filters' | transloco }}</span\r
                    >\r
                </div>\r
\r
                <!-- Input Filters -->\r
                <div class="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">\r
                    <!-- Subscribed-only Toggle -->\r
                    <button\r
                        type="button"\r
                        (click)="toggleSubscribedFilter()"\r
                        [class.bg-primary-600]="showOnlySubscribed"\r
                        [class.text-white]="showOnlySubscribed"\r
                        [class.border-primary-600]="showOnlySubscribed"\r
                        [class.bg-white]="!showOnlySubscribed"\r
                        [class.text-gray-700]="!showOnlySubscribed"\r
                        [class.border-gray-200]="!showOnlySubscribed"\r
                        class="h-9 px-3 inline-flex items-center gap-2 rounded-full border shadow-sm transition-all text-sm font-medium leading-none whitespace-nowrap flex-shrink-0 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700"\r
                        [matTooltip]="'network.alerts.filter_subscribed_tooltip' | transloco"\r
                    >\r
                        <mat-icon class="icon-size-4 leading-none">{{ showOnlySubscribed ? 'notifications_active' : 'notifications_none' }}</mat-icon>\r
                        <span class="whitespace-nowrap">{{ 'network.alerts.filter_subscribed' | transloco }}</span>\r
                    </button>\r
\r
                    <!-- Category Dropdown -->\r
                    <mat-form-field\r
                        class="w-full sm:w-48 fuse-mat-dense"\r
                        [subscriptSizing]="'dynamic'"\r
                    >\r
                        <mat-icon matPrefix class="icon-size-5 text-gray-500 ml-2 mr-2"\r
                            >category</mat-icon\r
                        >\r
                        <mat-select\r
                            [value]="selectedCategory"\r
                            (selectionChange)="setCategory($event.value)"\r
                            [placeholder]="'categories.label' | transloco"\r
                        >\r
                            <mat-option [value]="null">{{\r
                                'categories.all' | transloco\r
                            }}</mat-option>\r
                            <mat-option *ngFor="let cat of categories" [value]="cat">\r
                                {{ 'categories.' + cat | transloco }}\r
                            </mat-option>\r
                        </mat-select>\r
                    </mat-form-field>\r
\r
                    <!-- Search -->\r
                    <mat-form-field\r
                        class="w-full sm:w-72 fuse-mat-dense"\r
                        [subscriptSizing]="'dynamic'"\r
                    >\r
                        <mat-icon matPrefix class="icon-size-5 text-gray-500">search</mat-icon>\r
                        <input\r
                            matInput\r
                            [ngModel]="searchInput"\r
                            (ngModelChange)="filterData($event)"\r
                            [placeholder]="'network.search_placeholder' | transloco"\r
                        />\r
                        <button\r
                            *ngIf="searchInput"\r
                            matSuffix\r
                            mat-icon-button\r
                            aria-label="Clear"\r
                            (click)="filterData('')"\r
                        >\r
                            <mat-icon>close</mat-icon>\r
                        </button>\r
                    </mat-form-field>\r
                </div>\r
            </div>\r
        </div>\r
\r
        <app-availability-card />\r
\r
        <!-- Lane legend -->\r
        <div\r
            *ngIf="!loading"\r
            class="mb-6 flex flex-wrap items-center gap-3 text-xs text-gray-500 dark:text-gray-400"\r
        >\r
            <span class="font-semibold uppercase tracking-wide text-gray-400">{{\r
                'network.legend' | transloco\r
            }}</span>\r
            <span class="inline-flex items-center gap-1.5">\r
                <span class="h-2.5 w-2.5 rounded-sm bg-green-500"></span>\r
                {{ 'network.lanes.up' | transloco }}\r
            </span>\r
            <span class="inline-flex items-center gap-1.5">\r
                <span class="h-2.5 w-2.5 rounded-sm bg-amber-400"></span>\r
                {{ 'network.lanes.degraded' | transloco }}\r
            </span>\r
            <span class="inline-flex items-center gap-1.5">\r
                <span class="h-2.5 w-2.5 rounded-sm bg-red-500"></span>\r
                {{ 'network.lanes.down' | transloco }}\r
            </span>\r
            <span class="inline-flex items-center gap-1.5">\r
                <span class="h-2.5 w-2.5 rounded-sm bg-slate-400"></span>\r
                {{ 'network.lanes.unmeasured' | transloco }}\r
            </span>\r
        </div>\r
\r
        <!-- Loading -->\r
        <div *ngIf="loading" class="flex flex-auto justify-center items-center py-20">\r
            <mat-spinner diameter="64"></mat-spinner>\r
        </div>\r
\r
        <!-- Empty State -->\r
        <div\r
            *ngIf="!loading && filteredData.length === 0"\r
            class="flex flex-col items-center justify-center py-20 text-center"\r
        >\r
            <mat-icon class="icon-size-24 text-gray-300 dark:text-gray-600 mb-4"\r
                >cloud_off</mat-icon\r
            >\r
            <p class="text-xl font-medium text-gray-600 dark:text-gray-400">\r
                {{ 'network.no_services' | transloco }}\r
            </p>\r
            <p class="text-gray-500 dark:text-gray-500 max-w-sm mx-auto mt-2">\r
                {{ 'network.no_services_desc' | transloco }}\r
            </p>\r
        </div>\r
\r
        <!-- Content Grid -->\r
        <div\r
            *ngIf="!loading && filteredData.length > 0"\r
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"\r
        >\r
            <div\r
                *ngFor="let item of filteredData; trackBy: item?.subject?.method?.code"\r
                class="flex flex-col bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden transition-shadow hover:shadow-md"\r
            >\r
                <!-- Card Header -->\r
                <div\r
                    class="p-5 border-b border-gray-100 dark:border-gray-700/50 bg-gray-50/30 dark:bg-gray-800/50"\r
                >\r
                    <div class="flex items-start justify-between gap-3">\r
                        <div class="flex flex-col min-w-0">\r
                            <div class="flex items-center gap-2 min-w-0">\r
                                <h3\r
                                    class="text-lg font-semibold text-gray-900 dark:text-white truncate"\r
                                    [title]="item.subject.method.currentTranslation"\r
                                >\r
                                    {{ item.subject.method.currentTranslation }}\r
                                </h3>\r
                                <span\r
                                    class="inline-flex shrink-0 items-center rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide"\r
                                    [ngClass]="{\r
                                        'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300':\r
                                            currentLane(item) === 'up',\r
                                        'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-200':\r
                                            currentLane(item) === 'degraded',\r
                                        'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300':\r
                                            currentLane(item) === 'down',\r
                                        'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300':\r
                                            currentLane(item) === 'unmeasured' ||\r
                                            currentLane(item) === 'awaiting',\r
                                    }"\r
                                >\r
                                    {{ laneLabel(item.subject.currentStatus) }}\r
                                </span>\r
                            </div>\r
                            <p\r
                                class="mt-1.5 text-sm leading-5 text-gray-500 dark:text-gray-400 line-clamp-2"\r
                            >\r
                                {{ publicMessageFor(item) }}\r
                            </p>\r
                            <div\r
                                class="flex items-center mt-2 space-x-2 text-sm text-gray-500 dark:text-gray-400"\r
                            >\r
                                <span\r
                                    class="uppercase tracking-wider text-xs font-medium px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"\r
                                >\r
                                    {{\r
                                        'categories.' + item.subject.method.baseCategory | transloco\r
                                    }}\r
                                </span>\r
                                <span class="text-gray-300 dark:text-gray-600 px-1">\u2022</span>\r
                                <span>{{\r
                                    item.subject.method.price | currency: 'USD' : 'symbol' : '1.3-3'\r
                                }}</span>\r
                            </div>\r
                        </div>\r
                        <img\r
                            *ngIf="item.subject.method.country !== 'All'"\r
                            [src]="getFlagUrl(item.subject.method.country)"\r
                            class="w-6 h-auto rounded shadow-sm flex-shrink-0"\r
                            [alt]="item.subject.method.country"\r
                        />\r
                    </div>\r
\r
                    <div\r
                        class="flex items-center mt-3 text-sm text-gray-500 dark:text-gray-400 font-mono bg-gray-50 dark:bg-gray-900/50 px-3 py-1.5 rounded-md border border-gray-100 dark:border-gray-800"\r
                    >\r
                        <mat-icon class="icon-size-4 mr-2 text-gray-400">link</mat-icon>\r
                        <span class="truncate">{{ item.subject.method.url }}</span>\r
                    </div>\r
                </div>\r
\r
                <!-- Card Content -->\r
                <div class="flex-auto p-5">\r
                    <div class="flex items-center justify-between mb-4">\r
                        <span class="text-sm font-medium text-gray-500 dark:text-gray-400">\r
                            {{\r
                                item.subject.showGraph\r
                                    ? ('network.response_time' | transloco)\r
                                    : ('network.uptime_history' | transloco)\r
                            }}\r
                        </span>\r
\r
                        <div class="flex items-center gap-3">\r
                            <!-- Alert Toggle -->\r
                            <button\r
                                (click)="openDialog(item)"\r
                                [class.text-primary-600]="item.subject.isSubscribed"\r
                                [class.bg-primary-50]="item.subject.isSubscribed"\r
                                [class.border-primary-200]="item.subject.isSubscribed"\r
                                class="flex items-center justify-center w-8 h-8 rounded-lg border border-gray-200 dark:border-gray-700 transition-all hover:bg-gray-50 dark:hover:bg-gray-800"\r
                                [matTooltip]="\r
                                    item.subject.isSubscribed\r
                                        ? ('network.alerts.active' | transloco)\r
                                        : ('network.alerts.enable' | transloco)\r
                                "\r
                            >\r
                                <mat-icon\r
                                    class="icon-size-4"\r
                                    [class.animate-pulse]="item.subject.isSubscribed"\r
                                    >{{\r
                                        item.subject.isSubscribed\r
                                            ? 'notifications_active'\r
                                            : 'notifications_none'\r
                                    }}</mat-icon\r
                                >\r
                            </button>\r
\r
                            <!-- Toggle -->\r
                            <div class="flex bg-gray-100 dark:bg-gray-700 p-1 rounded-lg">\r
                                <button\r
                                    class="px-3 py-1 text-xs font-medium rounded-md transition-all"\r
                                    [class.bg-white]="!item.subject.showGraph"\r
                                    [class.shadow-sm]="!item.subject.showGraph"\r
                                    [class.text-gray-900]="!item.subject.showGraph"\r
                                    [class.text-gray-500]="item.subject.showGraph"\r
                                    (click)="toggleView(item, 'uptime')"\r
                                >\r
                                    {{ 'network.status' | transloco }}\r
                                </button>\r
                                <button\r
                                    class="px-3 py-1 text-xs font-medium rounded-md transition-all"\r
                                    [class.bg-white]="item.subject.showGraph"\r
                                    [class.shadow-sm]="item.subject.showGraph"\r
                                    [class.text-primary-600]="item.subject.showGraph"\r
                                    [class.text-gray-500]="!item.subject.showGraph"\r
                                    (click)="toggleView(item, 'graph')"\r
                                >\r
                                    {{ 'network.latency' | transloco }}\r
                                </button>\r
                            </div>\r
                        </div>\r
                    </div>\r
\r
                    <!-- Graph View -->\r
                    <div *ngIf="item.subject.showGraph" class="h-20 w-full overflow-hidden">\r
                        <div [id]="'chart-' + item.subject.method.code" class="w-full h-full"></div>\r
                    </div>\r
\r
                    <!-- Status View -->\r
                    <div\r
                        *ngIf="!item.subject.showGraph"\r
                        class="h-20 w-full flex items-end justify-between space-x-0.5"\r
                    >\r
                        <ng-container *ngFor="let it of item.data">\r
                            <div\r
                                class="status-tick w-full flex-1 rounded-sm transition-all hover:opacity-80"\r
                                [ngClass]="{\r
                                    'bg-green-500': isUp(it.status),\r
                                    'bg-amber-400': isDegraded(it.status),\r
                                    'bg-red-500': isDown(it.status),\r
                                    'bg-slate-400 dark:bg-slate-500': isUnmeasured(it.status),\r
                                    'bg-gray-100 dark:bg-gray-800': isAwaiting(it.status),\r
                                }"\r
                                [matTooltip]="tickTooltip(it)"\r
                                matTooltipPosition="above"\r
                            ></div>\r
                        </ng-container>\r
                        <div\r
                            *ngIf="!item.data || item.data.length === 0"\r
                            class="w-full h-full flex items-center justify-center text-gray-400 text-sm"\r
                        >\r
                            {{ 'network.no_data' | transloco }}\r
                        </div>\r
                    </div>\r
                </div>\r
\r
                <!-- Footer -->\r
                <div\r
                    class="px-5 py-4 bg-gray-50/50 dark:bg-gray-800/30 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between"\r
                >\r
                    <div class="flex flex-col">\r
                        <span class="text-xs text-gray-400 uppercase font-semibold tracking-wide">{{\r
                            'network.uptime' | transloco\r
                        }}</span>\r
                        <!-- Null means nothing measurable happened, which is not 100%. -->\r
                        <span\r
                            *ngIf="item.subject.percentage !== null; else noUptime"\r
                            class="text-lg font-bold"\r
                            [class.text-green-600]="item.subject.percentage >= 98"\r
                            [class.text-yellow-600]="\r
                                item.subject.percentage < 98 && item.subject.percentage >= 90\r
                            "\r
                            [class.text-red-600]="item.subject.percentage < 90"\r
                            [matTooltip]="\r
                                item.subject.measuredPoints + ' ' + ('network.measured_points' | transloco)\r
                            "\r
                        >\r
                            {{ item.subject.percentage | number: '1.0-2' }}%\r
                        </span>\r
                        <ng-template #noUptime>\r
                            <span\r
                                class="text-lg font-bold text-gray-400"\r
                                [matTooltip]="'network.not_measured' | transloco"\r
                                >&mdash;</span\r
                            >\r
                        </ng-template>\r
                    </div>\r
\r
                    <div class="text-right flex flex-col items-end">\r
                        <span class="text-xs text-gray-400 uppercase font-semibold tracking-wide">{{\r
                            'network.last_check' | transloco\r
                        }}</span>\r
                        <span class="text-sm font-medium text-gray-700 dark:text-gray-300">\r
                            {{ formatDate(item.subject.lastDate) || 'N/A' }}\r
                        </span>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
    </div>\r
</div>\r
`, styles: ["/* src/app/modules/status-check/status-check.component.scss */\n.status-tick {\n  height: 1.5rem;\n  width: 0.375rem;\n  border-radius: 0.125rem;\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 200ms;\n}\n.status-tick:hover {\n  --tw-scale-x: 1.25;\n  --tw-scale-y: 1.25;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n/*# sourceMappingURL=status-check.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StatusCheckComponent, { className: "StatusCheckComponent", filePath: "src/app/modules/status-check/status-check.component.ts", lineNumber: 62 });
})();
export {
  StatusCheckComponent
};
//# sourceMappingURL=chunk-QMEMCOU2.js.map
