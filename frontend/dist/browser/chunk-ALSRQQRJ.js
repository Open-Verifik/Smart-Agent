import {
  AuthModalComponent
} from "./chunk-6CFBAEWH.js";
import "./chunk-VCSAO77O.js";
import {
  SessionService
} from "./chunk-C35Z3CDX.js";
import {
  MatDialog,
  MatDialogModule,
  MatDialogRef
} from "./chunk-P2CAABEU.js";
import {
  UserService
} from "./chunk-6JQSEQ6B.js";
import "./chunk-Y5VEUI6L.js";
import "./chunk-3PFCPE6U.js";
import {
  Router,
  RouterLink
} from "./chunk-NLVEQCVI.js";
import "./chunk-MJXNRHWH.js";
import "./chunk-LTHY76JY.js";
import "./chunk-AY5C2ZOO.js";
import "./chunk-BY4NG7V4.js";
import "./chunk-RNRTLQ3J.js";
import "./chunk-6OJR6OMX.js";
import "./chunk-S7CME3IL.js";
import "./chunk-OIBNGD5S.js";
import {
  TranslocoModule,
  TranslocoPipe,
  TranslocoService
} from "./chunk-KU43NSH4.js";
import "./chunk-VK5CCBZ3.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-WH2N6KB4.js";
import {
  environment
} from "./chunk-BIHX2IQ4.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-HZQU4G6R.js";
import {
  ChangeDetectionStrategy,
  CommonModule,
  Component,
  DatePipe,
  DecimalPipe,
  HttpClient,
  Injectable,
  MatAnchor,
  MatButton,
  MatButtonModule,
  MatIconButton,
  NgModule,
  NgZone,
  PLATFORM_ID,
  asapScheduler,
  catchError,
  computed,
  effect,
  finalize,
  forkJoin,
  inject,
  input,
  isPlatformBrowser,
  map,
  of,
  output,
  setClassMetadata,
  signal,
  tap,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
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
  ɵɵqueryAdvance,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuerySignal
} from "./chunk-LLRZIRCV.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-KTESVR3Q.js";

// node_modules/ng-apexcharts/fesm2022/ng-apexcharts.mjs
var _c0 = ["chart"];
var ChartComponent = class _ChartComponent {
  constructor() {
    this.chart = input();
    this.annotations = input();
    this.colors = input();
    this.dataLabels = input();
    this.series = input();
    this.stroke = input();
    this.labels = input();
    this.legend = input();
    this.markers = input();
    this.noData = input();
    this.fill = input();
    this.tooltip = input();
    this.plotOptions = input();
    this.responsive = input();
    this.xaxis = input();
    this.yaxis = input();
    this.forecastDataPoints = input();
    this.grid = input();
    this.states = input();
    this.title = input();
    this.subtitle = input();
    this.theme = input();
    this.autoUpdateSeries = input(true);
    this.chartReady = output();
    this.chartInstance = signal(null);
    this.chartElement = viewChild.required("chart");
    this.ngZone = inject(NgZone);
    this.isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  }
  ngOnChanges(changes) {
    if (!this.isBrowser) return;
    this.ngZone.runOutsideAngular(() => {
      asapScheduler.schedule(() => this.hydrate(changes));
    });
  }
  ngOnDestroy() {
    this.destroy();
  }
  hydrate(changes) {
    const shouldUpdateSeries = this.autoUpdateSeries() && Object.keys(changes).filter((c) => c !== "series").length === 0;
    if (shouldUpdateSeries) {
      this.updateSeries(this.series(), true);
      return;
    }
    this.createElement();
  }
  createElement() {
    return __async(this, null, function* () {
      const {
        default: ApexCharts
      } = yield import("./chunk-NGNQDYLL.js");
      window.ApexCharts ||= ApexCharts;
      const options = {};
      const properties = ["annotations", "chart", "colors", "dataLabels", "series", "stroke", "labels", "legend", "fill", "tooltip", "plotOptions", "responsive", "markers", "noData", "xaxis", "yaxis", "forecastDataPoints", "grid", "states", "title", "subtitle", "theme"];
      properties.forEach((property) => {
        const value = this[property]();
        if (value) {
          options[property] = value;
        }
      });
      this.destroy();
      const chartInstance = this.ngZone.runOutsideAngular(() => new ApexCharts(this.chartElement().nativeElement, options));
      this.chartInstance.set(chartInstance);
      this.render();
      this.chartReady.emit({
        chartObj: chartInstance
      });
    });
  }
  render() {
    return this.ngZone.runOutsideAngular(() => this.chartInstance()?.render());
  }
  updateOptions(options, redrawPaths, animate, updateSyncedCharts) {
    return this.ngZone.runOutsideAngular(() => this.chartInstance()?.updateOptions(options, redrawPaths, animate, updateSyncedCharts));
  }
  updateSeries(newSeries, animate) {
    return this.ngZone.runOutsideAngular(() => this.chartInstance()?.updateSeries(newSeries, animate));
  }
  appendSeries(newSeries, animate) {
    this.ngZone.runOutsideAngular(() => this.chartInstance()?.appendSeries(newSeries, animate));
  }
  appendData(newData) {
    this.ngZone.runOutsideAngular(() => this.chartInstance()?.appendData(newData));
  }
  highlightSeries(seriesName) {
    return this.ngZone.runOutsideAngular(() => this.chartInstance()?.highlightSeries(seriesName));
  }
  toggleSeries(seriesName) {
    return this.ngZone.runOutsideAngular(() => this.chartInstance()?.toggleSeries(seriesName));
  }
  showSeries(seriesName) {
    this.ngZone.runOutsideAngular(() => this.chartInstance()?.showSeries(seriesName));
  }
  hideSeries(seriesName) {
    this.ngZone.runOutsideAngular(() => this.chartInstance()?.hideSeries(seriesName));
  }
  resetSeries() {
    this.ngZone.runOutsideAngular(() => this.chartInstance()?.resetSeries());
  }
  zoomX(min, max) {
    this.ngZone.runOutsideAngular(() => this.chartInstance()?.zoomX(min, max));
  }
  toggleDataPointSelection(seriesIndex, dataPointIndex) {
    this.ngZone.runOutsideAngular(() => this.chartInstance()?.toggleDataPointSelection(seriesIndex, dataPointIndex));
  }
  destroy() {
    this.chartInstance()?.destroy();
    this.chartInstance.set(null);
  }
  setLocale(localeName) {
    this.ngZone.runOutsideAngular(() => this.chartInstance()?.setLocale(localeName));
  }
  paper() {
    this.ngZone.runOutsideAngular(() => this.chartInstance()?.paper());
  }
  addXaxisAnnotation(options, pushToMemory, context) {
    this.ngZone.runOutsideAngular(() => this.chartInstance()?.addXaxisAnnotation(options, pushToMemory, context));
  }
  addYaxisAnnotation(options, pushToMemory, context) {
    this.ngZone.runOutsideAngular(() => this.chartInstance()?.addYaxisAnnotation(options, pushToMemory, context));
  }
  addPointAnnotation(options, pushToMemory, context) {
    this.ngZone.runOutsideAngular(() => this.chartInstance()?.addPointAnnotation(options, pushToMemory, context));
  }
  removeAnnotation(id, options) {
    this.ngZone.runOutsideAngular(() => this.chartInstance()?.removeAnnotation(id, options));
  }
  clearAnnotations(options) {
    this.ngZone.runOutsideAngular(() => this.chartInstance()?.clearAnnotations(options));
  }
  dataURI(options) {
    return this.chartInstance()?.dataURI(options);
  }
  static {
    this.\u0275fac = function ChartComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ChartComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _ChartComponent,
      selectors: [["apx-chart"]],
      viewQuery: function ChartComponent_Query(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275viewQuerySignal(ctx.chartElement, _c0, 5);
        }
        if (rf & 2) {
          \u0275\u0275queryAdvance();
        }
      },
      inputs: {
        chart: [1, "chart"],
        annotations: [1, "annotations"],
        colors: [1, "colors"],
        dataLabels: [1, "dataLabels"],
        series: [1, "series"],
        stroke: [1, "stroke"],
        labels: [1, "labels"],
        legend: [1, "legend"],
        markers: [1, "markers"],
        noData: [1, "noData"],
        fill: [1, "fill"],
        tooltip: [1, "tooltip"],
        plotOptions: [1, "plotOptions"],
        responsive: [1, "responsive"],
        xaxis: [1, "xaxis"],
        yaxis: [1, "yaxis"],
        forecastDataPoints: [1, "forecastDataPoints"],
        grid: [1, "grid"],
        states: [1, "states"],
        title: [1, "title"],
        subtitle: [1, "subtitle"],
        theme: [1, "theme"],
        autoUpdateSeries: [1, "autoUpdateSeries"]
      },
      outputs: {
        chartReady: "chartReady"
      },
      features: [\u0275\u0275NgOnChangesFeature],
      decls: 2,
      vars: 0,
      consts: [["chart", ""]],
      template: function ChartComponent_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275element(0, "div", null, 0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChartComponent, [{
    type: Component,
    args: [{
      selector: "apx-chart",
      template: `<div #chart></div>`,
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true
    }]
  }], null, null);
})();
var declarations = [ChartComponent];
var NgApexchartsModule = class _NgApexchartsModule {
  static {
    this.\u0275fac = function NgApexchartsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgApexchartsModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _NgApexchartsModule,
      imports: [ChartComponent],
      exports: [ChartComponent]
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgApexchartsModule, [{
    type: NgModule,
    args: [{
      imports: [declarations],
      exports: [declarations]
    }]
  }], null, null);
})();

// src/app/modules/home/home.service.ts
var HomeService = class _HomeService {
  constructor() {
    this._httpClient = inject(HttpClient);
    this._sessionService = inject(SessionService);
    this.countData = signal(null);
    this.monthlyData = signal(null);
    this.topSalesData = signal(null);
    this.dashboardData = signal(null);
    this.loading = signal(false);
    this.error = signal(null);
  }
  /**
   * Fetch stats when authenticated. Uses year/month params for count, monthly,
   * top-sales; pulls the full dashboard payload (expenses, distribution,
   * lastMonthRequests, topCodes) from `/v2/clients/dashboard`.
   */
  fetchStats() {
    if (!this._sessionService.hasValidAuthentication()) {
      this.countData.set(null);
      this.monthlyData.set(null);
      this.topSalesData.set(null);
      this.dashboardData.set(null);
      return;
    }
    this.loading.set(true);
    this.error.set(null);
    const year = (/* @__PURE__ */ new Date()).getFullYear();
    const month = (/* @__PURE__ */ new Date()).getMonth() + 1;
    const apiUrl = environment.apiUrl;
    const token = localStorage.getItem("accessToken");
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    const count$ = this._httpClient.get(`${apiUrl}/v2/api-requests/count`, {
      params: { year: year.toString(), month: month.toString() },
      headers
    }).pipe(tap((data) => this.countData.set(Array.isArray(data) ? data : [])), catchError(() => {
      this.error.set("Failed to load stats");
      this.countData.set(null);
      return of(null);
    }));
    const monthly$ = this._httpClient.get(`${apiUrl}/v2/api-requests/monthly`, {
      params: { year: year.toString() },
      headers
    }).pipe(tap((data) => this.monthlyData.set(Array.isArray(data) ? data : [])), catchError(() => {
      this.monthlyData.set(null);
      return of(null);
    }));
    const topSales$ = this._httpClient.get(`${apiUrl}/v2/api-requests/top-sales`, {
      params: { year: year.toString(), month: month.toString() },
      headers
    }).pipe(tap((data) => this.topSalesData.set(Array.isArray(data) ? data : [])), catchError(() => {
      this.topSalesData.set(null);
      return of(null);
    }));
    const dashboard$ = this._httpClient.get(`${apiUrl}/v2/clients/dashboard`, {
      params: {
        weeklyExpenses: "1",
        monthlyExpenses: "1",
        yearlyExpenses: "1",
        topCodes: "1",
        distribution: "1",
        lastMonthRequests: "1"
      },
      headers
    }).pipe(map((response) => response && "data" in response ? response.data : response), tap((data) => this.dashboardData.set(data ?? null)), catchError(() => {
      this.dashboardData.set(null);
      return of(null);
    }));
    forkJoin({ count: count$, monthly: monthly$, topSales: topSales$, dashboard: dashboard$ }).pipe(finalize(() => this.loading.set(false))).subscribe();
  }
  /** Aggregated totals from count data for the current client */
  getAggregatedTotals() {
    const data = this.countData();
    if (!data || data.length === 0) {
      return { total: 0, ok: 0, failed: 0, credits: 0 };
    }
    return data.reduce((acc, item) => ({
      total: acc.total + (item.total ?? 0),
      ok: acc.ok + (item.ok ?? 0),
      failed: acc.failed + (item.failed ?? 0),
      credits: acc.credits + (item.credits ?? 0)
    }), { total: 0, ok: 0, failed: 0, credits: 0 });
  }
  static {
    this.\u0275fac = function HomeService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HomeService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _HomeService, factory: _HomeService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomeService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/modules/home/tutorial-modal/tutorial-modal.component.ts
var _c02 = (a0, a1) => ({ current: a0, total: a1 });
function HomeTutorialModalComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "mat-icon", 20);
    \u0275\u0275text(2, "lightbulb");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 21);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, ctx_r0.currentStepData().tipKey));
  }
}
function HomeTutorialModalComponent_For_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 22);
  }
  if (rf & 2) {
    const $index_r2 = ctx.$index;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("bg-indigo-500", $index_r2 === ctx_r0.currentStep())("bg-slate-300", $index_r2 !== ctx_r0.currentStep())("dark:bg-slate-600", $index_r2 !== ctx_r0.currentStep());
  }
}
function HomeTutorialModalComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 23);
    \u0275\u0275listener("click", function HomeTutorialModalComponent_Conditional_32_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.nextStep());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementStart(3, "mat-icon", 24);
    \u0275\u0275text(4, "arrow_forward");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "home.tutorial.next"), " ");
  }
}
function HomeTutorialModalComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 23);
    \u0275\u0275listener("click", function HomeTutorialModalComponent_Conditional_33_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.close());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementStart(3, "mat-icon", 24);
    \u0275\u0275text(4, "rocket_launch");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "home.tutorial.getStarted"), " ");
  }
}
var HomeTutorialModalComponent = class _HomeTutorialModalComponent {
  constructor() {
    this._dialogRef = inject(MatDialogRef);
    this.currentStep = signal(0);
    this.steps = [
      {
        icon: "waving_hand",
        titleKey: "home.tutorial.step0Title",
        descriptionKey: "home.tutorial.step0Desc",
        tipKey: "home.tutorial.step0Tip"
      },
      {
        icon: "chat",
        titleKey: "home.tutorial.step1Title",
        descriptionKey: "home.tutorial.step1Desc"
      },
      {
        icon: "terminal",
        titleKey: "home.tutorial.step2Title",
        descriptionKey: "home.tutorial.step2Desc"
      },
      {
        icon: "cloud_upload",
        titleKey: "home.tutorial.step3Title",
        descriptionKey: "home.tutorial.step3Desc",
        tipKey: "home.tutorial.step3Tip"
      },
      {
        icon: "build",
        titleKey: "home.tutorial.step4Title",
        descriptionKey: "home.tutorial.step4Desc"
      },
      {
        icon: "credit_card",
        titleKey: "home.tutorial.step5Title",
        descriptionKey: "home.tutorial.step5Desc"
      }
    ];
    this.currentStepData = () => this.steps[this.currentStep()];
    this.progressPercent = () => (this.currentStep() + 1) / this.steps.length * 100;
  }
  nextStep() {
    if (this.currentStep() < this.steps.length - 1) {
      this.currentStep.update((v) => v + 1);
    }
  }
  prevStep() {
    if (this.currentStep() > 0) {
      this.currentStep.update((v) => v - 1);
    }
  }
  close() {
    this._dialogRef.close();
  }
  static {
    this.\u0275fac = function HomeTutorialModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HomeTutorialModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeTutorialModalComponent, selectors: [["home-tutorial-modal"]], decls: 34, vars: 22, consts: [[1, "flex", "flex-col", "w-full", "max-w-lg"], [1, "relative", "px-6", "pt-6", "pb-4"], [1, "absolute", "top-0", "left-0", "right-0", "h-1", "bg-slate-200", "dark:bg-slate-700"], [1, "h-full", "bg-gradient-to-r", "from-indigo-500", "to-purple-600", "transition-all", "duration-300"], [1, "flex", "items-center", "justify-between"], [1, "text-xs", "font-medium", "text-slate-500", "dark:text-slate-400"], ["mat-icon-button", "", 1, "!-mr-2", 3, "click"], [1, "px-6", "pb-6"], [1, "flex", "flex-col", "items-center", "text-center", "py-8"], [1, "w-20", "h-20", "rounded-2xl", "bg-gradient-to-br", "from-indigo-500", "to-purple-600", "flex", "items-center", "justify-center", "mb-6", "shadow-lg", "shadow-indigo-500/25", "animate-pulse"], [1, "!w-10", "!h-10", "text-white", "icon-size-10"], [1, "text-xl", "font-bold", "text-slate-900", "dark:text-white", "mb-3"], [1, "text-slate-600", "dark:text-slate-400", "text-sm", "leading-relaxed", "max-w-md"], [1, "mt-4", "flex", "items-start", "gap-2", "p-3", "rounded-lg", "bg-amber-50", "dark:bg-amber-900/20", "border", "border-amber-200", "dark:border-amber-800/50", "text-left"], [1, "flex", "items-center", "justify-between", "pt-4", "border-t", "border-slate-200", "dark:border-slate-700"], ["mat-button", "", 1, "!text-slate-600", 3, "click", "disabled"], [1, "mr-1"], [1, "flex", "gap-1.5"], [1, "w-2", "h-2", "rounded-full", "transition-all", "duration-300", 3, "bg-indigo-500", "bg-slate-300", "dark:bg-slate-600"], ["mat-flat-button", "", "color", "primary"], [1, "text-amber-500", "!w-5", "!h-5", "shrink-0", "icon-size-5"], [1, "text-xs", "text-amber-700", "dark:text-amber-300"], [1, "w-2", "h-2", "rounded-full", "transition-all", "duration-300"], ["mat-flat-button", "", "color", "primary", 3, "click"], [1, "ml-1"]], template: function HomeTutorialModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
        \u0275\u0275element(3, "div", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 4)(5, "span", 5);
        \u0275\u0275text(6);
        \u0275\u0275pipe(7, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "button", 6);
        \u0275\u0275listener("click", function HomeTutorialModalComponent_Template_button_click_8_listener() {
          return ctx.close();
        });
        \u0275\u0275elementStart(9, "mat-icon");
        \u0275\u0275text(10, "close");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(11, "div", 7)(12, "div", 8)(13, "div", 9)(14, "mat-icon", 10);
        \u0275\u0275text(15);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "h2", 11);
        \u0275\u0275text(17);
        \u0275\u0275pipe(18, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "p", 12);
        \u0275\u0275text(20);
        \u0275\u0275pipe(21, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275template(22, HomeTutorialModalComponent_Conditional_22_Template, 6, 3, "div", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "div", 14)(24, "button", 15);
        \u0275\u0275listener("click", function HomeTutorialModalComponent_Template_button_click_24_listener() {
          return ctx.prevStep();
        });
        \u0275\u0275elementStart(25, "mat-icon", 16);
        \u0275\u0275text(26, "arrow_back");
        \u0275\u0275elementEnd();
        \u0275\u0275text(27);
        \u0275\u0275pipe(28, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "div", 17);
        \u0275\u0275repeaterCreate(30, HomeTutorialModalComponent_For_31_Template, 1, 6, "span", 18, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd();
        \u0275\u0275template(32, HomeTutorialModalComponent_Conditional_32_Template, 5, 3, "button", 19)(33, HomeTutorialModalComponent_Conditional_33_Template, 5, 3, "button", 19);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275styleProp("width", ctx.progressPercent(), "%");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(7, 10, "home.tutorial.stepOf", \u0275\u0275pureFunction2(19, _c02, ctx.currentStep() + 1, ctx.steps.length)), " ");
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate(ctx.currentStepData().icon);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 13, ctx.currentStepData().titleKey), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 15, ctx.currentStepData().descriptionKey), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.currentStepData().tipKey ? 22 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.currentStep() === 0);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(28, 17, "home.tutorial.back"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.steps);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.currentStep() < ctx.steps.length - 1 ? 32 : 33);
      }
    }, dependencies: [
      CommonModule,
      MatDialogModule,
      MatButtonModule,
      MatButton,
      MatIconButton,
      MatIconModule,
      MatIcon,
      TranslocoModule,
      TranslocoPipe
    ], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=tutorial-modal.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomeTutorialModalComponent, [{
    type: Component,
    args: [{ selector: "home-tutorial-modal", standalone: true, imports: [
      CommonModule,
      MatDialogModule,
      MatButtonModule,
      MatIconModule,
      TranslocoModule
    ], template: `
        <div class="flex flex-col w-full max-w-lg">
            <!-- Header with progress -->
            <div class="relative px-6 pt-6 pb-4">
                <div class="absolute top-0 left-0 right-0 h-1 bg-slate-200 dark:bg-slate-700">
                    <div
                        class="h-full bg-gradient-to-r from-indigo-500 to-purple-600 transition-all duration-300"
                        [style.width.%]="progressPercent()"
                    ></div>
                </div>
                <div class="flex items-center justify-between">
                    <span class="text-xs font-medium text-slate-500 dark:text-slate-400">
                        {{ 'home.tutorial.stepOf' | transloco: { current: currentStep() + 1, total: steps.length } }}
                    </span>
                    <button mat-icon-button (click)="close()" class="!-mr-2">
                        <mat-icon>close</mat-icon>
                    </button>
                </div>
            </div>

            <!-- Content -->
            <div class="px-6 pb-6">
                <div class="flex flex-col items-center text-center py-8">
                    <!-- Animated Icon -->
                    <div
                        class="w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mb-6 shadow-lg shadow-indigo-500/25 animate-pulse"
                    >
                        <mat-icon class="!w-10 !h-10 text-white icon-size-10">{{
                            currentStepData().icon
                        }}</mat-icon>
                    </div>

                    <!-- Title -->
                    <h2 class="text-xl font-bold text-slate-900 dark:text-white mb-3">
                        {{ currentStepData().titleKey | transloco }}
                    </h2>

                    <!-- Description -->
                    <p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-md">
                        {{ currentStepData().descriptionKey | transloco }}
                    </p>

                    <!-- Tip -->
                    @if (currentStepData().tipKey) {
                        <div
                            class="mt-4 flex items-start gap-2 p-3 rounded-lg bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/50 text-left"
                        >
                            <mat-icon class="text-amber-500 !w-5 !h-5 shrink-0 icon-size-5">lightbulb</mat-icon>
                            <span class="text-xs text-amber-700 dark:text-amber-300">{{
                                currentStepData().tipKey | transloco
                            }}</span>
                        </div>
                    }
                </div>

                <!-- Navigation -->
                <div
                    class="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-700"
                >
                    <button
                        mat-button
                        (click)="prevStep()"
                        [disabled]="currentStep() === 0"
                        class="!text-slate-600"
                    >
                        <mat-icon class="mr-1">arrow_back</mat-icon>
                        {{ 'home.tutorial.back' | transloco }}
                    </button>

                    <div class="flex gap-1.5">
                        @for (step of steps; track $index) {
                            <span
                                class="w-2 h-2 rounded-full transition-all duration-300"
                                [class.bg-indigo-500]="$index === currentStep()"
                                [class.bg-slate-300]="$index !== currentStep()"
                                [class.dark:bg-slate-600]="$index !== currentStep()"
                            ></span>
                        }
                    </div>

                    @if (currentStep() < steps.length - 1) {
                        <button mat-flat-button color="primary" (click)="nextStep()">
                            {{ 'home.tutorial.next' | transloco }}
                            <mat-icon class="ml-1">arrow_forward</mat-icon>
                        </button>
                    } @else {
                        <button mat-flat-button color="primary" (click)="close()">
                            {{ 'home.tutorial.getStarted' | transloco }}
                            <mat-icon class="ml-1">rocket_launch</mat-icon>
                        </button>
                    }
                </div>
            </div>
        </div>
    `, styles: ["/* angular:styles/component:scss;aca37b045377af9e61ae87ec9ceba230614f528def48741d3190431076d12a3b;/Users/miguel/Smart-Agent/frontend/src/app/modules/home/tutorial-modal/tutorial-modal.component.ts */\n:host {\n  display: block;\n}\n/*# sourceMappingURL=tutorial-modal.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeTutorialModalComponent, { className: "HomeTutorialModalComponent", filePath: "src/app/modules/home/tutorial-modal/tutorial-modal.component.ts", lineNumber: 128 });
})();

// src/app/modules/home/home.component.ts
var _c03 = (a0) => ({ expiresAt: a0 });
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.code;
function HomeComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 4)(1, "div", 16)(2, "div", 17)(3, "div", 18)(4, "mat-icon", 19);
    \u0275\u0275text(5, "verified");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 20)(7, "p", 21);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "h2", 22);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p", 23);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p", 24);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p", 25);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "date");
    \u0275\u0275pipe(22, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 26)(24, "a", 27)(25, "mat-icon", 15);
    \u0275\u0275text(26, "payments");
    \u0275\u0275elementEnd();
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "transloco");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 6, "addCredits.promo.weekOneUsd50.badge"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 8, "addCredits.promo.weekOneUsd50.title"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 10, "addCredits.promo.weekOneUsd50.body"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 12, "addCredits.promo.weekOneUsd50.accountCreatedNotice"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(22, 17, "addCredits.promo.weekOneUsd50.deadline", \u0275\u0275pureFunction1(22, _c03, \u0275\u0275pipeBind2(21, 14, (tmp_5_0 = ctx_r0.weekOneUsd50Promotion()) == null ? null : tmp_5_0.expiresAt, "medium") || "")), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(28, 20, "addCredits.purchaseCredits"), " ");
  }
}
function HomeComponent_Conditional_13_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275element(1, "mat-spinner", 30);
    \u0275\u0275elementStart(2, "span", 31);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "home.stats.loading"));
  }
}
function HomeComponent_Conditional_13_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275declareLet(0);
    \u0275\u0275elementStart(1, "div", 29)(2, "div", 32)(3, "div", 33);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 34);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 32)(9, "div", 35);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 34);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 32)(15, "div", 36);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 34);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 32)(21, "div", 33);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 34);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "transloco");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const totals_r2 = \u0275\u0275nextContext(2).getTotals();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(totals_r2.total);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 8, "home.stats.totalValidations"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(totals_r2.ok);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 10, "home.stats.successful"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(totals_r2.failed);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 12, "home.stats.failed"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(23, 14, totals_r2.credits, "1.0-3"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 17, "home.stats.creditsUsed"));
  }
}
function HomeComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, HomeComponent_Conditional_13_Conditional_0_Template, 5, 3, "div", 28)(1, HomeComponent_Conditional_13_Conditional_1_Template, 27, 19, "div", 29);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.loading() ? 0 : 1);
  }
}
function HomeComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "p", 13);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 14);
    \u0275\u0275listener("click", function HomeComponent_Conditional_14_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.openAuthModal());
    });
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "home.stats.signInPrompt"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 4, "home.stats.signIn"), " ");
  }
}
function HomeComponent_Conditional_15_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "apx-chart", 43);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("chart", ctx_r0.chartWeeklyExpenses.chart)("colors", ctx_r0.chartWeeklyExpenses.colors)("series", ctx_r0.chartWeeklyExpenses.series)("stroke", ctx_r0.chartWeeklyExpenses.stroke)("tooltip", ctx_r0.chartWeeklyExpenses.tooltip)("xaxis", ctx_r0.chartWeeklyExpenses.xaxis)("yaxis", ctx_r0.chartWeeklyExpenses.yaxis);
  }
}
function HomeComponent_Conditional_15_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "apx-chart", 43);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("chart", ctx_r0.chartMonthlyExpenses.chart)("colors", ctx_r0.chartMonthlyExpenses.colors)("series", ctx_r0.chartMonthlyExpenses.series)("stroke", ctx_r0.chartMonthlyExpenses.stroke)("tooltip", ctx_r0.chartMonthlyExpenses.tooltip)("xaxis", ctx_r0.chartMonthlyExpenses.xaxis)("yaxis", ctx_r0.chartMonthlyExpenses.yaxis);
  }
}
function HomeComponent_Conditional_15_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "apx-chart", 43);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("chart", ctx_r0.chartYearlyExpenses.chart)("colors", ctx_r0.chartYearlyExpenses.colors)("series", ctx_r0.chartYearlyExpenses.series)("stroke", ctx_r0.chartYearlyExpenses.stroke)("tooltip", ctx_r0.chartYearlyExpenses.tooltip)("xaxis", ctx_r0.chartYearlyExpenses.xaxis)("yaxis", ctx_r0.chartYearlyExpenses.yaxis);
  }
}
function HomeComponent_Conditional_15_Conditional_35_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "apx-chart", 60);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("chart", ctx_r0.chartLastMonth.chart)("colors", ctx_r0.chartLastMonth.colors)("dataLabels", ctx_r0.chartLastMonth.dataLabels)("grid", ctx_r0.chartLastMonth.grid)("legend", ctx_r0.chartLastMonth.legend)("series", ctx_r0.chartLastMonth.series)("stroke", ctx_r0.chartLastMonth.stroke)("tooltip", ctx_r0.chartLastMonth.tooltip)("xaxis", ctx_r0.chartLastMonth.xaxis)("yaxis", ctx_r0.chartLastMonth.yaxis);
  }
}
function HomeComponent_Conditional_15_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44)(1, "div", 47)(2, "h3", 48);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 53);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275declareLet(8)(9)(10);
    \u0275\u0275elementStart(11, "div", 54)(12, "div", 55)(13, "div", 56);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 57)(17, "span");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 58);
    \u0275\u0275text(20, "100%");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 55)(22, "div", 56);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 57)(26, "span");
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span", 58);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "div", 55)(31, "div", 56);
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 57)(35, "span");
    \u0275\u0275text(36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "span", 59);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(39, "div", 51);
    \u0275\u0275template(40, HomeComponent_Conditional_15_Conditional_35_Conditional_40_Template, 1, 10, "apx-chart", 60);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const last30_r4 = ctx;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 11, "home.stats.last30Days"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("30 ", \u0275\u0275pipeBind1(7, 13, "home.stats.days"), "");
    const okSum_r5 = ctx_r0.sumSeries(last30_r4.series == null ? null : last30_r4.series[0] == null ? null : last30_r4.series[0].data);
    const notFoundSum_r6 = ctx_r0.sumSeries(last30_r4.series == null ? null : last30_r4.series[1] == null ? null : last30_r4.series[1].data);
    const totalReq_r7 = last30_r4.amount || okSum_r5 + notFoundSum_r6;
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 15, "home.stats.requestsTotal"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(totalReq_r7);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 17, "home.stats.requestsSuccess"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(okSum_r5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.percentOf(okSum_r5, totalReq_r7), "%");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(33, 19, "home.stats.requestsNotFound"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(notFoundSum_r6);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.percentOf(notFoundSum_r6, totalReq_r7), "%");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.chartLastMonth ? 40 : -1);
  }
}
function HomeComponent_Conditional_15_Conditional_42_Conditional_1_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 67);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const top_r8 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", top_r8.failed, " ", \u0275\u0275pipeBind1(2, 2, "home.stats.failed"), " ");
  }
}
function HomeComponent_Conditional_15_Conditional_42_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61)(1, "div", 64);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 65);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 66);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, HomeComponent_Conditional_15_Conditional_42_Conditional_1_Conditional_8_Template, 3, 4, "span", 67);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const top_r8 = ctx;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 4, "home.stats.top1"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(top_r8.count);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(top_r8.displayName);
    \u0275\u0275advance();
    \u0275\u0275conditional(top_r8.failed > 0 ? 8 : -1);
  }
}
function HomeComponent_Conditional_15_Conditional_42_Conditional_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 67);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const top_r9 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", top_r9.failed, " ", \u0275\u0275pipeBind1(2, 2, "home.stats.failed"), " ");
  }
}
function HomeComponent_Conditional_15_Conditional_42_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62)(1, "div", 64);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 65);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 66);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, HomeComponent_Conditional_15_Conditional_42_Conditional_2_Conditional_8_Template, 3, 4, "span", 67);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const top_r9 = ctx;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 4, "home.stats.top2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(top_r9.count);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(top_r9.displayName);
    \u0275\u0275advance();
    \u0275\u0275conditional(top_r9.failed > 0 ? 8 : -1);
  }
}
function HomeComponent_Conditional_15_Conditional_42_For_4_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 70);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const top_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", top_r10.failed, " ", \u0275\u0275pipeBind1(2, 2, "home.stats.failed"), " ");
  }
}
function HomeComponent_Conditional_15_Conditional_42_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63)(1, "div", 64);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 68);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 69);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, HomeComponent_Conditional_15_Conditional_42_For_4_Conditional_8_Template, 3, 4, "span", 70);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const top_r10 = ctx.$implicit;
    const $index_r11 = ctx.$index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 4, "home.stats.top" + ($index_r11 + 3)));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(top_r10.count);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(top_r10.displayName);
    \u0275\u0275advance();
    \u0275\u0275conditional(top_r10.failed > 0 ? 8 : -1);
  }
}
function HomeComponent_Conditional_15_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275template(1, HomeComponent_Conditional_15_Conditional_42_Conditional_1_Template, 9, 6, "div", 61)(2, HomeComponent_Conditional_15_Conditional_42_Conditional_2_Template, 9, 6, "div", 62);
    \u0275\u0275repeaterCreate(3, HomeComponent_Conditional_15_Conditional_42_For_4_Template, 9, 6, "div", 63, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_3_0 = ctx_r0.podium()[0]) ? 1 : -1, tmp_3_0);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_4_0 = ctx_r0.podium()[1]) ? 2 : -1, tmp_4_0);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.podium().slice(2));
  }
}
function HomeComponent_Conditional_15_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 50);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "home.stats.noData"), " ");
  }
}
function HomeComponent_Conditional_15_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "apx-chart", 52);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("chart", ctx_r0.chartUsageLine.chart)("colors", ctx_r0.chartUsageLine.colors)("dataLabels", ctx_r0.chartUsageLine.dataLabels)("grid", ctx_r0.chartUsageLine.grid)("labels", ctx_r0.chartUsageLine.labels)("legend", ctx_r0.chartUsageLine.legend)("plotOptions", ctx_r0.chartUsageLine.plotOptions)("series", ctx_r0.chartUsageLine.series)("states", ctx_r0.chartUsageLine.states)("stroke", ctx_r0.chartUsageLine.stroke)("tooltip", ctx_r0.chartUsageLine.tooltip)("xaxis", ctx_r0.chartUsageLine.xaxis)("yaxis", ctx_r0.chartUsageLine.yaxis);
  }
}
function HomeComponent_Conditional_15_Conditional_51_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "apx-chart", 71);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("chart", ctx_r0.chartDistribution.chart)("colors", ctx_r0.chartDistribution.colors)("dataLabels", ctx_r0.chartDistribution.dataLabels)("markers", ctx_r0.chartDistribution.markers)("plotOptions", ctx_r0.chartDistribution.plotOptions)("series", ctx_r0.chartDistribution.series)("stroke", ctx_r0.chartDistribution.stroke)("tooltip", ctx_r0.chartDistribution.tooltip)("xaxis", ctx_r0.chartDistribution.xaxis)("yaxis", ctx_r0.chartDistribution.yaxis);
  }
}
function HomeComponent_Conditional_15_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44)(1, "div", 47)(2, "h3", 48);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 53);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 51);
    \u0275\u0275template(9, HomeComponent_Conditional_15_Conditional_51_Conditional_9_Template, 1, 10, "apx-chart", 71);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 3, "home.stats.serviceDistribution"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("30 ", \u0275\u0275pipeBind1(7, 5, "home.stats.days"), "");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.chartDistribution ? 9 : -1);
  }
}
function HomeComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 7)(1, "div", 37)(2, "div", 38)(3, "div", 39);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 40);
    \u0275\u0275text(7);
    \u0275\u0275elementStart(8, "span", 41);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 42);
    \u0275\u0275template(12, HomeComponent_Conditional_15_Conditional_12_Template, 1, 7, "apx-chart", 43);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 38)(14, "div", 39);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 40);
    \u0275\u0275text(18);
    \u0275\u0275elementStart(19, "span", 41);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 42);
    \u0275\u0275template(23, HomeComponent_Conditional_15_Conditional_23_Template, 1, 7, "apx-chart", 43);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 38)(25, "div", 39);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 40);
    \u0275\u0275text(29);
    \u0275\u0275elementStart(30, "span", 41);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 42);
    \u0275\u0275template(34, HomeComponent_Conditional_15_Conditional_34_Template, 1, 7, "apx-chart", 43);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(35, HomeComponent_Conditional_15_Conditional_35_Template, 41, 21, "div", 44);
    \u0275\u0275elementStart(36, "div", 45)(37, "div", 46)(38, "div", 47)(39, "h3", 48);
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(42, HomeComponent_Conditional_15_Conditional_42_Template, 5, 2, "div", 49)(43, HomeComponent_Conditional_15_Conditional_43_Template, 3, 3, "p", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 46)(45, "div", 47)(46, "h3", 48);
    \u0275\u0275text(47);
    \u0275\u0275pipe(48, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "div", 51);
    \u0275\u0275template(50, HomeComponent_Conditional_15_Conditional_50_Template, 1, 13, "apx-chart", 52);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(51, HomeComponent_Conditional_15_Conditional_51_Template, 10, 7, "div", 44);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_14_0;
    const dashboard_r12 = ctx;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 18, "home.stats.weeklyExpenses"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatCredits(dashboard_r12.weeklyExpenses == null ? null : dashboard_r12.weeklyExpenses.amount), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 20, "home.stats.creditsUnit"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.chartWeeklyExpenses ? 12 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 22, "home.stats.monthlyExpenses"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatCredits(dashboard_r12.monthlyExpenses == null ? null : dashboard_r12.monthlyExpenses.amount), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 24, "home.stats.creditsUnit"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.chartMonthlyExpenses ? 23 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 26, "home.stats.yearlyExpenses"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatCredits(dashboard_r12.yearlyExpenses == null ? null : dashboard_r12.yearlyExpenses.amount), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(32, 28, "home.stats.creditsUnit"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.chartYearlyExpenses ? 34 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_14_0 = dashboard_r12.lastMonthRequests) ? 35 : -1, tmp_14_0);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(41, 30, "home.stats.topEndpoints"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.podium().length > 0 ? 42 : 43);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(48, 32, "home.stats.weeklyUsage"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.chartUsageLine ? 50 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(dashboard_r12.distribution ? 51 : -1);
  }
}
function HomeComponent_For_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 10)(1, "div", 72)(2, "mat-icon");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div")(5, "div", 73);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 74);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r13 = ctx.$implicit;
    \u0275\u0275property("routerLink", item_r13.link);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r13.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 4, item_r13.titleKey));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 6, item_r13.subtitleKey));
  }
}
var HomeComponent = class _HomeComponent {
  constructor() {
    this._homeService = inject(HomeService);
    this._sessionService = inject(SessionService);
    this._matDialog = inject(MatDialog);
    this._transloco = inject(TranslocoService);
    this._router = inject(Router);
    this._userService = inject(UserService);
    this.isAuthenticated = signal(false);
    this.loading = this._homeService.loading;
    this.dashboardData = this._homeService.dashboardData;
    this.chartWeeklyExpenses = null;
    this.chartMonthlyExpenses = null;
    this.chartYearlyExpenses = null;
    this.chartDistribution = null;
    this.chartLastMonth = null;
    this.chartUsageLine = null;
    this.weekOneUsd50Promotion = signal(void 0);
    this.showWeekOneUsd50PromoBanner = computed(() => Boolean(this.weekOneUsd50Promotion()?.eligible));
    this.podium = computed(() => {
      const overall = this.dashboardData()?.topCodes?.overall ?? [];
      const failedByCode = /* @__PURE__ */ new Map();
      for (const entry of this._homeService.topSalesData() ?? []) {
        failedByCode.set(entry._id, entry.failed ?? 0);
      }
      return overall.slice(0, 5).map((entry) => ({
        code: entry._id,
        count: entry.count ?? 0,
        failed: failedByCode.get(entry._id) ?? 0,
        displayName: this.getApiDisplayName(entry._id)
      }));
    });
    this.shortcuts = [
      { id: "chat", titleKey: "home.shortcuts.chat", subtitleKey: "nav.ai_validation", link: "/chat", icon: "chat_bubble" },
      { id: "postman", titleKey: "home.shortcuts.postman", subtitleKey: "nav.api_testing", link: "/postman", icon: "terminal" },
      { id: "smart-batch", titleKey: "home.shortcuts.smartBatch", subtitleKey: "nav.batch_automation", link: "/smart-batch", icon: "queue" },
      { id: "history", titleKey: "home.shortcuts.history", subtitleKey: "nav.history_subtitle", link: "/history", icon: "history" },
      { id: "smart-scan", titleKey: "home.shortcuts.smartScan", subtitleKey: "nav.scan_documents", link: "/smart-enroll/smart-scan", icon: "document_scanner" },
      { id: "status-check", titleKey: "home.shortcuts.statusCheck", subtitleKey: "nav.system_health", link: "/smart-monitor/status-check", icon: "monitor_heart" },
      { id: "incidents", titleKey: "home.shortcuts.incidents", subtitleKey: "nav.active_incidents", link: "/smart-monitor/incidents", icon: "warning" },
      { id: "webhooks", titleKey: "home.shortcuts.webhooks", subtitleKey: "nav.webhooks_subtitle", link: "/smart-monitor/webhooks", icon: "link" },
      { id: "smart-reduce", titleKey: "home.shortcuts.smartReduce", subtitleKey: "nav.resize_compress_images", link: "/smart-tools/smart-reduce", icon: "image" },
      { id: "subscription-plans", titleKey: "home.shortcuts.subscriptionPlans", subtitleKey: "nav.manage_subscription", link: "/subscription-plans", icon: "credit_card" },
      { id: "add-credits", titleKey: "home.shortcuts.addCredits", subtitleKey: "nav.purchase_credits", link: "/add-credits", icon: "add_circle" }
    ];
    effect(() => {
      const data = this.dashboardData();
      if (!data) {
        this._resetCharts();
        return;
      }
      this._buildCharts(data);
    });
  }
  ngOnInit() {
    this.isAuthenticated.set(this._sessionService.hasValidAuthentication());
    if (this.isAuthenticated()) {
      this._userService.get().pipe(catchError((err) => {
        console.error("Failed to load session for promotions:", err);
        return of(null);
      })).subscribe((user) => {
        const promo = user?.promotion;
        this.weekOneUsd50Promotion.set(promo?.kind === "smart_agent_week1_usd50" ? promo : void 0);
      });
    }
    this._installApexSvgFix();
    this._homeService.fetchStats();
  }
  getTotals() {
    return this._homeService.getAggregatedTotals();
  }
  /** Display name for API code - uses appFeatures translation or falls back to code */
  getApiDisplayName(code) {
    const key = `appFeatures.${code}.title`;
    const translated = this._transloco.translate(key);
    return translated !== key ? translated : code;
  }
  /** Sum helper for KPIs above the last-30-days chart. */
  sumSeries(data) {
    if (!Array.isArray(data))
      return 0;
    return data.reduce((acc, val) => acc + (Number(val) || 0), 0);
  }
  /** Percentage helper, safe against div-by-zero. */
  percentOf(part, total) {
    if (!total)
      return "0";
    return (part * 100 / total).toFixed(1);
  }
  /** Format a credit amount for the expenses sparklines. */
  formatCredits(value) {
    const n = Math.abs(Number(value) || 0);
    return n.toFixed(2);
  }
  openAuthModal() {
    this._matDialog.open(AuthModalComponent, {
      panelClass: "auth-modal-dialog",
      width: "400px"
    });
  }
  openTutorial() {
    this._matDialog.open(HomeTutorialModalComponent, {
      panelClass: "tutorial-modal-dialog",
      maxWidth: "500px"
    });
  }
  _resetCharts() {
    this.chartWeeklyExpenses = null;
    this.chartMonthlyExpenses = null;
    this.chartYearlyExpenses = null;
    this.chartDistribution = null;
    this.chartLastMonth = null;
    this.chartUsageLine = null;
  }
  _buildCharts(data) {
    this.chartWeeklyExpenses = data.weeklyExpenses ? this._buildExpenseSparkline(data.weeklyExpenses, "#22D3EE") : null;
    this.chartMonthlyExpenses = data.monthlyExpenses ? this._buildExpenseSparkline(data.monthlyExpenses, "#4ADE80") : null;
    this.chartYearlyExpenses = data.yearlyExpenses ? this._buildExpenseSparkline(data.yearlyExpenses, "#FB7185") : null;
    this.chartLastMonth = data.lastMonthRequests ? this._buildLastMonthArea(data.lastMonthRequests) : null;
    this.chartDistribution = data.distribution ? this._buildDistributionRadar(data.distribution) : null;
    this.chartUsageLine = data.topCodes ? this._buildUsageLine(data.topCodes) : null;
  }
  _buildExpenseSparkline(seriesData, color) {
    const data = (seriesData.series ?? []).map((num) => Math.abs(Number(num) || 0));
    return {
      chart: {
        animations: { enabled: false },
        fontFamily: "inherit",
        foreColor: "inherit",
        height: "100%",
        type: "line",
        sparkline: { enabled: true }
      },
      colors: [color],
      series: [{ name: "Credits", data }],
      stroke: { curve: "smooth" },
      tooltip: { theme: "dark" },
      xaxis: {
        type: "category",
        categories: seriesData.labels ?? []
      },
      yaxis: {
        labels: {
          formatter: (val) => this.formatCredits(val)
        }
      }
    };
  }
  _buildLastMonthArea(seriesData) {
    return {
      chart: {
        animations: { enabled: false },
        fontFamily: "inherit",
        foreColor: "inherit",
        height: "100%",
        type: "area",
        toolbar: { show: false },
        zoom: { enabled: false }
      },
      colors: ["#64748B", "#94A3B8"],
      dataLabels: { enabled: false },
      fill: {
        colors: ["#64748B", "#94A3B8"],
        opacity: 0.5
      },
      grid: {
        show: false,
        padding: { bottom: -40, left: 0, right: 0 }
      },
      legend: { show: false },
      series: seriesData.series ?? [],
      stroke: { curve: "smooth", width: 2 },
      tooltip: {
        followCursor: true,
        theme: "dark",
        x: { format: "MMM dd, yyyy" }
      },
      xaxis: {
        axisBorder: { show: false },
        labels: {
          offsetY: -20,
          rotate: 0,
          style: { colors: "rgb(148, 163, 184)" }
        },
        tickAmount: 3,
        tooltip: { enabled: false },
        type: "category",
        categories: seriesData.labels ?? []
      },
      yaxis: {
        labels: {
          style: { colors: "rgb(148, 163, 184)" }
        },
        max: (max) => max + 5,
        min: (min) => min - 5,
        show: false,
        tickAmount: 5
      }
    };
  }
  _buildDistributionRadar(distribution) {
    const counts = distribution.series?.[1]?.data ?? [];
    const total = counts.reduce((acc, val) => acc + (Number(val) || 0), 0);
    const percentages = counts.map((value) => Number(((Number(value) || 0) * 100 / (total || 1)).toFixed(2)));
    return {
      chart: {
        fontFamily: "inherit",
        foreColor: "inherit",
        height: "100%",
        type: "radar",
        sparkline: { enabled: true }
      },
      colors: ["#818CF8"],
      dataLabels: {
        enabled: true,
        formatter: (val) => `${val}%`,
        textAnchor: "start",
        style: { fontSize: "13px", fontWeight: 500 },
        background: { borderWidth: 0, padding: 4 },
        offsetY: -15
      },
      markers: {
        strokeColors: "#818CF8",
        strokeWidth: 4
      },
      plotOptions: {
        radar: {
          polygons: {
            strokeColors: "rgba(148, 163, 184, 0.3)",
            connectorColors: "rgba(148, 163, 184, 0.3)"
          }
        }
      },
      series: [{ name: "Distribution", data: percentages }],
      stroke: { width: 2 },
      tooltip: {
        theme: "dark",
        y: { formatter: (val) => `${val}%` }
      },
      xaxis: {
        labels: {
          show: true,
          style: { fontSize: "12px", fontWeight: "500" }
        },
        type: "category",
        categories: distribution.categories ?? []
      },
      yaxis: {
        max: (max) => parseInt((max + 10).toFixed(0), 10),
        tickAmount: 7
      }
    };
  }
  _buildUsageLine(topCodes) {
    const aggregated = (topCodes.series ?? []).map((bucket) => bucket.reduce((acc, curr) => acc + (Number(curr?.count) || 0), 0));
    return {
      chart: {
        fontFamily: "inherit",
        foreColor: "inherit",
        height: "100%",
        type: "line",
        toolbar: { show: false },
        zoom: { enabled: false }
      },
      colors: ["#64748B", "#94A3B8"],
      dataLabels: {
        enabled: true,
        enabledOnSeries: [0],
        background: { borderWidth: 0 }
      },
      grid: { borderColor: "rgba(148, 163, 184, 0.2)" },
      labels: topCodes.labels ?? [],
      legend: { show: false },
      plotOptions: { bar: { columnWidth: "50%" } },
      series: [
        {
          name: "Usages",
          type: "line",
          data: aggregated
        }
      ],
      states: {
        hover: { filter: { type: "darken", value: 0.75 } }
      },
      stroke: { width: [3, 0] },
      tooltip: { followCursor: true, theme: "dark" },
      xaxis: {
        axisBorder: { show: false },
        axisTicks: { color: "rgba(148, 163, 184, 0.2)" },
        labels: { style: { colors: "rgb(148, 163, 184)" } },
        tooltip: { enabled: false }
      },
      yaxis: {
        labels: {
          offsetX: -16,
          style: { colors: "rgb(148, 163, 184)" }
        }
      }
    };
  }
  /**
   * Install ApexCharts global mounted/updated hook to fix `url(#id)` references on
   * SVG fills that get broken when a `<base>` tag is present (renders gradients as
   * black). Ported from verifik-client-panel dashboard.
   */
  _installApexSvgFix() {
    const apexGlobal = window["Apex"] ?? {};
    window["Apex"] = __spreadProps(__spreadValues({}, apexGlobal), {
      chart: __spreadProps(__spreadValues({}, apexGlobal.chart ?? {}), {
        events: __spreadProps(__spreadValues({}, (apexGlobal.chart && apexGlobal.chart.events) ?? {}), {
          mounted: (chart) => this._fixSvgFill(chart.el),
          updated: (chart) => this._fixSvgFill(chart.el)
        })
      })
    });
  }
  _fixSvgFill(element) {
    if (!element)
      return;
    const currentURL = this._router.url;
    Array.from(element.querySelectorAll("*[fill]")).filter((el) => el.getAttribute("fill")?.indexOf("url(") !== -1).forEach((el) => {
      const attrVal = el.getAttribute("fill");
      el.setAttribute("fill", `url(${currentURL}${attrVal.slice(attrVal.indexOf("#"))}`);
    });
  }
  static {
    this.\u0275fac = function HomeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HomeComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], decls: 35, vars: 24, consts: [[1, "home-container"], [1, "mb-8"], [1, "text-2xl", "font-bold", "text-slate-900", "dark:text-white", "mb-2"], [1, "text-slate-600", "dark:text-slate-400", "text-sm", "max-w-2xl"], [1, "mb-8", "rounded-2xl", "border", "border-emerald-200/80", "bg-gradient-to-br", "from-emerald-50", "via-white", "to-teal-50/80", "px-5", "py-6", "dark:border-emerald-900/60", "dark:from-emerald-950/50", "dark:via-gray-950", "dark:to-gray-950", "md:px-8"], [1, "text-lg", "font-semibold", "text-slate-800", "dark:text-slate-200", "mb-4"], [1, "stat-card", "p-6", "text-center"], [1, "dashboard-charts", "mb-8"], [1, "shortcuts-section"], [1, "shortcuts-grid"], [1, "shortcut-card", 3, "routerLink"], [1, "tutorial-section"], [1, "text-lg", "font-semibold", "text-slate-800", "dark:text-slate-200", "mb-2"], [1, "text-slate-600", "dark:text-slate-400", "text-sm", "mb-4"], ["mat-flat-button", "", "color", "primary", 3, "click"], [1, "mr-2"], [1, "flex", "flex-col", "gap-6", "sm:flex-row", "sm:items-start", "sm:justify-between"], [1, "flex", "min-w-0", "flex-1", "items-start", "gap-4"], [1, "flex", "h-11", "w-11", "shrink-0", "items-center", "justify-center", "rounded-xl", "bg-emerald-600/15", "text-emerald-700", "dark:bg-emerald-400/15", "dark:text-emerald-300"], [2, "transform", "scale(1.08)"], [1, "min-w-0", "space-y-2"], [1, "inline-flex", "rounded-full", "border", "border-emerald-200/90", "bg-emerald-100", "px-3", "py-1", "text-[11px]", "font-semibold", "uppercase", "tracking-[0.2em]", "text-emerald-900", "dark:border-emerald-800", "dark:bg-emerald-900/50", "dark:text-emerald-200"], [1, "text-lg", "font-semibold", "leading-snug", "text-emerald-950", "dark:text-emerald-50"], [1, "max-w-3xl", "text-sm", "leading-relaxed", "text-emerald-950/95", "dark:text-emerald-100/95"], [1, "text-xs", "font-medium", "leading-relaxed", "text-emerald-900", "dark:text-emerald-200"], [1, "text-sm", "font-semibold", "text-emerald-950", "dark:text-emerald-50"], [1, "shrink-0", "sm:pt-1"], ["mat-flat-button", "", "color", "primary", "routerLink", "/add-credits", 1, "rounded-xl"], [1, "flex", "items-center", "gap-2", "py-8"], [1, "stats-grid"], ["diameter", "24"], [1, "text-slate-500", "text-sm"], [1, "stat-card"], [1, "stat-value"], [1, "stat-label"], [1, "stat-value", "text-green-600", "dark:text-green-400"], [1, "stat-value", "text-red-600", "dark:text-red-400"], [1, "charts-grid", "charts-grid-3"], [1, "chart-card", "chart-card-sparkline"], [1, "chart-card-label"], [1, "chart-card-value"], [1, "chart-card-unit"], [1, "chart-card-spark"], [1, "w-full", "h-full", "block", 3, "chart", "colors", "series", "stroke", "tooltip", "xaxis", "yaxis"], [1, "chart-card", "mt-6"], [1, "charts-grid", "charts-grid-2", "mt-6"], [1, "chart-card"], [1, "chart-card-header"], [1, "chart-card-title"], [1, "podium-grid"], [1, "text-sm", "text-slate-500", "dark:text-slate-400"], [1, "chart-card-tall"], [1, "w-full", "h-full", "block", 3, "chart", "colors", "dataLabels", "grid", "labels", "legend", "plotOptions", "series", "states", "stroke", "tooltip", "xaxis", "yaxis"], [1, "chart-card-pill"], [1, "kpi-row"], [1, "kpi-card"], [1, "kpi-label"], [1, "kpi-value"], [1, "kpi-pct", "kpi-pct-positive"], [1, "kpi-pct", "kpi-pct-negative"], [1, "w-full", "h-full", "block", 3, "chart", "colors", "dataLabels", "grid", "legend", "series", "stroke", "tooltip", "xaxis", "yaxis"], [1, "podium-card", "podium-card-primary"], [1, "podium-card", "podium-card-secondary"], [1, "podium-card", "podium-card-small"], [1, "podium-rank"], [1, "podium-count"], [1, "podium-name"], [1, "api-failed-badge", "mt-2"], [1, "podium-count", "podium-count-small"], [1, "podium-name", "podium-name-small"], [1, "api-failed-badge", "mt-1"], [1, "w-full", "h-full", "block", 3, "chart", "colors", "dataLabels", "markers", "plotOptions", "series", "stroke", "tooltip", "xaxis", "yaxis"], [1, "shortcut-icon"], [1, "shortcut-title"], [1, "shortcut-subtitle"]], template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6);
        \u0275\u0275pipe(7, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(8, HomeComponent_Conditional_8_Template, 29, 24, "section", 4);
        \u0275\u0275elementStart(9, "section", 1)(10, "h2", 5);
        \u0275\u0275text(11);
        \u0275\u0275pipe(12, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275template(13, HomeComponent_Conditional_13_Template, 2, 1)(14, HomeComponent_Conditional_14_Template, 7, 6, "div", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275template(15, HomeComponent_Conditional_15_Template, 52, 34, "section", 7);
        \u0275\u0275elementStart(16, "section", 8)(17, "h2", 5);
        \u0275\u0275text(18);
        \u0275\u0275pipe(19, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "div", 9);
        \u0275\u0275repeaterCreate(21, HomeComponent_For_22_Template, 11, 8, "a", 10, _forTrack0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "section", 11)(24, "h2", 12);
        \u0275\u0275text(25);
        \u0275\u0275pipe(26, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "p", 13);
        \u0275\u0275text(28);
        \u0275\u0275pipe(29, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "button", 14);
        \u0275\u0275listener("click", function HomeComponent_Template_button_click_30_listener() {
          return ctx.openTutorial();
        });
        \u0275\u0275elementStart(31, "mat-icon", 15);
        \u0275\u0275text(32, "school");
        \u0275\u0275elementEnd();
        \u0275\u0275text(33);
        \u0275\u0275pipe(34, "transloco");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        let tmp_5_0;
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 10, "home.welcome.title"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 12, "home.welcome.subtitle"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.isAuthenticated() && ctx.showWeekOneUsd50PromoBanner() ? 8 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 14, "home.stats.title"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.isAuthenticated() ? 13 : 14);
        \u0275\u0275advance(2);
        \u0275\u0275conditional((tmp_5_0 = ctx.isAuthenticated() && !ctx.loading() && ctx.dashboardData()) ? 15 : -1, tmp_5_0);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 16, "home.shortcuts.title"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.shortcuts);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(26, 18, "home.tutorial.title"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(29, 20, "home.tutorial.description"), " ");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(34, 22, "home.tutorial.start"), " ");
      }
    }, dependencies: [
      CommonModule,
      DecimalPipe,
      DatePipe,
      MatButtonModule,
      MatAnchor,
      MatButton,
      MatIconModule,
      MatIcon,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      NgApexchartsModule,
      ChartComponent,
      RouterLink,
      TranslocoModule,
      TranslocoPipe
    ], styles: ['@charset "UTF-8";\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n  min-height: 100%;\n}\n.home-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 2rem 1.5rem;\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));\n  gap: 1rem;\n  margin-bottom: 2rem;\n}\n.stat-card[_ngcontent-%COMP%] {\n  padding: 1.25rem;\n  border-radius: 12px;\n  border: 1px solid rgba(148, 163, 184, 0.2);\n  background: rgba(248, 250, 252, 0.5);\n}\n.dark[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%] {\n  background: rgba(15, 23, 42, 0.5);\n  border-color: rgba(148, 163, 184, 0.1);\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: rgb(15, 23, 42);\n}\n.dark[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  color: rgb(248, 250, 252);\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: rgb(100, 116, 139);\n  margin-top: 0.25rem;\n}\n.dark[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  color: rgb(148, 163, 184);\n}\n.shortcuts-section[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.shortcuts-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));\n  gap: 1rem;\n}\n.shortcut-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n  padding: 1.25rem;\n  border-radius: 12px;\n  border: 1px solid rgba(148, 163, 184, 0.2);\n  background: rgba(255, 255, 255, 0.8);\n  text-decoration: none;\n  color: inherit;\n  transition: all 0.2s ease;\n}\n.shortcut-card[_ngcontent-%COMP%]:hover {\n  border-color: rgb(99, 102, 241);\n  background: rgba(99, 102, 241, 0.05);\n  transform: translateY(-2px);\n}\n.dark[_ngcontent-%COMP%]   .shortcut-card[_ngcontent-%COMP%] {\n  background: rgba(15, 23, 42, 0.6);\n  border-color: rgba(148, 163, 184, 0.1);\n}\n.dark[_ngcontent-%COMP%]   .shortcut-card[_ngcontent-%COMP%]:hover {\n  border-color: rgb(99, 102, 241);\n  background: rgba(99, 102, 241, 0.1);\n}\n.shortcut-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  background: rgba(99, 102, 241, 0.1);\n  color: rgb(99, 102, 241);\n}\n.shortcut-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 1rem;\n  margin-bottom: 0.25rem;\n}\n.shortcut-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: rgb(100, 116, 139);\n}\n.dark[_ngcontent-%COMP%]   .shortcut-subtitle[_ngcontent-%COMP%] {\n  color: rgb(148, 163, 184);\n}\n.tutorial-section[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  border-radius: 12px;\n  border: 1px solid rgba(148, 163, 184, 0.2);\n  background: rgba(248, 250, 252, 0.5);\n}\n.dark[_ngcontent-%COMP%]   .tutorial-section[_ngcontent-%COMP%] {\n  background: rgba(15, 23, 42, 0.5);\n  border-color: rgba(148, 163, 184, 0.1);\n}\n.top-apis-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.top-apis-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.875rem 1.25rem;\n  border-radius: 12px;\n  background: rgba(255, 255, 255, 0.5);\n  border: 1px solid rgba(148, 163, 184, 0.1);\n  transition: all 0.2s ease;\n}\n.top-apis-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background: rgb(255, 255, 255);\n  border-color: rgba(99, 102, 241, 0.3);\n  transform: translateX(4px);\n}\n.dark[_ngcontent-%COMP%]   .top-apis-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  background: rgba(30, 41, 59, 0.4);\n  border-color: rgba(148, 163, 184, 0.05);\n}\n.dark[_ngcontent-%COMP%]   .top-apis-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background: rgba(30, 41, 59, 0.8);\n  border-color: rgba(99, 102, 241, 0.4);\n}\n.api-badges[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n}\n.api-count-badge[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.75rem;\n  border-radius: 9999px;\n  font-size: 0.7rem;\n  font-weight: 600;\n  background: rgba(99, 102, 241, 0.1);\n  color: rgb(79, 70, 229);\n}\n.dark[_ngcontent-%COMP%]   .api-count-badge[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.2);\n  color: rgb(165, 180, 252);\n}\n.api-failed-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.25rem 0.75rem;\n  border-radius: 9999px;\n  font-size: 0.7rem;\n  font-weight: 600;\n  background: rgba(239, 68, 68, 0.1);\n  color: rgb(185, 28, 28);\n}\n.dark[_ngcontent-%COMP%]   .api-failed-badge[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.18);\n  color: rgb(252, 165, 165);\n}\n.dashboard-charts[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.charts-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1rem;\n}\n.charts-grid-3[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n}\n.charts-grid-2[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));\n}\n.chart-card[_ngcontent-%COMP%] {\n  padding: 1.25rem;\n  border-radius: 16px;\n  border: 1px solid rgba(148, 163, 184, 0.2);\n  background: rgba(255, 255, 255, 0.85);\n  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);\n}\n.dark[_ngcontent-%COMP%]   .chart-card[_ngcontent-%COMP%] {\n  background: rgba(15, 23, 42, 0.6);\n  border-color: rgba(148, 163, 184, 0.1);\n  box-shadow: none;\n}\n.chart-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.75rem;\n  margin-bottom: 1.25rem;\n}\n.chart-card-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: rgb(15, 23, 42);\n}\n.dark[_ngcontent-%COMP%]   .chart-card-title[_ngcontent-%COMP%] {\n  color: rgb(248, 250, 252);\n}\n.chart-card-pill[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.75rem;\n  border-radius: 9999px;\n  background: rgba(148, 163, 184, 0.15);\n  color: rgb(71, 85, 105);\n  font-size: 0.7rem;\n  font-weight: 600;\n}\n.dark[_ngcontent-%COMP%]   .chart-card-pill[_ngcontent-%COMP%] {\n  background: rgba(148, 163, 184, 0.2);\n  color: rgb(203, 213, 225);\n}\n.chart-card-label[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 500;\n  color: rgb(100, 116, 139);\n}\n.dark[_ngcontent-%COMP%]   .chart-card-label[_ngcontent-%COMP%] {\n  color: rgb(148, 163, 184);\n}\n.chart-card-value[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n  font-size: 1.75rem;\n  font-weight: 700;\n  color: rgb(15, 23, 42);\n  line-height: 1.1;\n}\n.dark[_ngcontent-%COMP%]   .chart-card-value[_ngcontent-%COMP%] {\n  color: rgb(248, 250, 252);\n}\n.chart-card-unit[_ngcontent-%COMP%] {\n  margin-left: 0.4rem;\n  font-size: 0.85rem;\n  font-weight: 500;\n  color: rgb(100, 116, 139);\n}\n.dark[_ngcontent-%COMP%]   .chart-card-unit[_ngcontent-%COMP%] {\n  color: rgb(148, 163, 184);\n}\n.chart-card-spark[_ngcontent-%COMP%] {\n  height: 64px;\n  margin-top: 1rem;\n  margin-left: -0.5rem;\n  margin-right: -0.5rem;\n}\n.chart-card-tall[_ngcontent-%COMP%] {\n  position: relative;\n  height: 320px;\n  width: 100%;\n}\n.kpi-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n}\n.kpi-card[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border-radius: 12px;\n  background: rgba(248, 250, 252, 0.8);\n  border: 1px solid rgba(148, 163, 184, 0.15);\n}\n.dark[_ngcontent-%COMP%]   .kpi-card[_ngcontent-%COMP%] {\n  background: rgba(30, 41, 59, 0.4);\n  border-color: rgba(148, 163, 184, 0.08);\n}\n.kpi-label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 500;\n  color: rgb(100, 116, 139);\n}\n.dark[_ngcontent-%COMP%]   .kpi-label[_ngcontent-%COMP%] {\n  color: rgb(148, 163, 184);\n}\n.kpi-value[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n  display: flex;\n  align-items: baseline;\n  gap: 0.5rem;\n  font-size: 1.75rem;\n  font-weight: 700;\n  color: rgb(15, 23, 42);\n  line-height: 1.1;\n}\n.dark[_ngcontent-%COMP%]   .kpi-value[_ngcontent-%COMP%] {\n  color: rgb(248, 250, 252);\n}\n.kpi-pct[_ngcontent-%COMP%] {\n  padding: 0.15rem 0.6rem;\n  border-radius: 9999px;\n  font-size: 0.7rem;\n  font-weight: 600;\n}\n.kpi-pct-positive[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.12);\n  color: rgb(21, 128, 61);\n}\n.dark[_ngcontent-%COMP%]   .kpi-pct-positive[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.2);\n  color: rgb(134, 239, 172);\n}\n.kpi-pct-negative[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.12);\n  color: rgb(185, 28, 28);\n}\n.dark[_ngcontent-%COMP%]   .kpi-pct-negative[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.2);\n  color: rgb(252, 165, 165);\n}\n.podium-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  gap: 0.75rem;\n}\n.podium-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  padding: 1rem;\n  border-radius: 12px;\n  border: 1px solid transparent;\n}\n.podium-card-primary[_ngcontent-%COMP%] {\n  grid-column: span 6;\n  background: rgba(99, 102, 241, 0.08);\n  border-color: rgba(99, 102, 241, 0.2);\n  padding: 1.5rem 1rem;\n}\n@media (min-width: 640px) {\n  .podium-card-primary[_ngcontent-%COMP%] {\n    grid-column: span 3;\n  }\n}\n.dark[_ngcontent-%COMP%]   .podium-card-primary[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.12);\n  border-color: rgba(99, 102, 241, 0.25);\n}\n.podium-card-secondary[_ngcontent-%COMP%] {\n  grid-column: span 6;\n  background: rgba(20, 184, 166, 0.08);\n  border-color: rgba(20, 184, 166, 0.2);\n  padding: 1.5rem 1rem;\n}\n@media (min-width: 640px) {\n  .podium-card-secondary[_ngcontent-%COMP%] {\n    grid-column: span 3;\n  }\n}\n.dark[_ngcontent-%COMP%]   .podium-card-secondary[_ngcontent-%COMP%] {\n  background: rgba(20, 184, 166, 0.12);\n  border-color: rgba(20, 184, 166, 0.25);\n}\n.podium-card-small[_ngcontent-%COMP%] {\n  grid-column: span 6;\n  background: rgba(148, 163, 184, 0.08);\n  border-color: rgba(148, 163, 184, 0.18);\n}\n@media (min-width: 640px) {\n  .podium-card-small[_ngcontent-%COMP%] {\n    grid-column: span 2;\n  }\n}\n.dark[_ngcontent-%COMP%]   .podium-card-small[_ngcontent-%COMP%] {\n  background: rgba(148, 163, 184, 0.1);\n  border-color: rgba(148, 163, 184, 0.15);\n}\n.podium-rank[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: rgb(100, 116, 139);\n}\n.podium-card-primary[_ngcontent-%COMP%]   .podium-rank[_ngcontent-%COMP%] {\n  color: rgb(79, 70, 229);\n}\n.podium-card-secondary[_ngcontent-%COMP%]   .podium-rank[_ngcontent-%COMP%] {\n  color: rgb(13, 148, 136);\n}\n.dark[_ngcontent-%COMP%]   .podium-rank[_ngcontent-%COMP%] {\n  color: rgb(148, 163, 184);\n}\n.dark[_ngcontent-%COMP%]   .podium-card-primary[_ngcontent-%COMP%]   .podium-rank[_ngcontent-%COMP%] {\n  color: rgb(165, 180, 252);\n}\n.dark[_ngcontent-%COMP%]   .podium-card-secondary[_ngcontent-%COMP%]   .podium-rank[_ngcontent-%COMP%] {\n  color: rgb(94, 234, 212);\n}\n.podium-count[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n  font-size: 2.25rem;\n  font-weight: 700;\n  line-height: 1;\n  color: rgb(15, 23, 42);\n}\n.podium-card-primary[_ngcontent-%COMP%]   .podium-count[_ngcontent-%COMP%] {\n  color: rgb(49, 46, 129);\n}\n.podium-card-secondary[_ngcontent-%COMP%]   .podium-count[_ngcontent-%COMP%] {\n  color: rgb(19, 78, 74);\n}\n.dark[_ngcontent-%COMP%]   .podium-count[_ngcontent-%COMP%] {\n  color: rgb(248, 250, 252);\n}\n.dark[_ngcontent-%COMP%]   .podium-card-primary[_ngcontent-%COMP%]   .podium-count[_ngcontent-%COMP%] {\n  color: rgb(199, 210, 254);\n}\n.dark[_ngcontent-%COMP%]   .podium-card-secondary[_ngcontent-%COMP%]   .podium-count[_ngcontent-%COMP%] {\n  color: rgb(153, 246, 228);\n}\n.podium-count-small[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.podium-name[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n  font-size: 0.85rem;\n  font-weight: 500;\n  color: rgb(71, 85, 105);\n  overflow-wrap: anywhere;\n}\n.podium-card-primary[_ngcontent-%COMP%]   .podium-name[_ngcontent-%COMP%] {\n  color: rgb(67, 56, 202);\n}\n.podium-card-secondary[_ngcontent-%COMP%]   .podium-name[_ngcontent-%COMP%] {\n  color: rgb(15, 118, 110);\n}\n.dark[_ngcontent-%COMP%]   .podium-name[_ngcontent-%COMP%] {\n  color: rgb(203, 213, 225);\n}\n.dark[_ngcontent-%COMP%]   .podium-card-primary[_ngcontent-%COMP%]   .podium-name[_ngcontent-%COMP%] {\n  color: rgb(199, 210, 254);\n}\n.dark[_ngcontent-%COMP%]   .podium-card-secondary[_ngcontent-%COMP%]   .podium-name[_ngcontent-%COMP%] {\n  color: rgb(153, 246, 228);\n}\n.podium-name-small[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n/*# sourceMappingURL=home.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomeComponent, [{
    type: Component,
    args: [{ selector: "app-home", standalone: true, imports: [
      CommonModule,
      MatButtonModule,
      MatIconModule,
      MatProgressSpinnerModule,
      NgApexchartsModule,
      RouterLink,
      TranslocoModule
    ], template: `<div class="home-container">
    <!-- Welcome / Hero -->
    <div class="mb-8">
        <h1 class="text-2xl font-bold text-slate-900 dark:text-white mb-2">
            {{ 'home.welcome.title' | transloco }}
        </h1>
        <p class="text-slate-600 dark:text-slate-400 text-sm max-w-2xl">
            {{ 'home.welcome.subtitle' | transloco }}
        </p>
    </div>

    @if (isAuthenticated() && showWeekOneUsd50PromoBanner()) {
        <section
            class="mb-8 rounded-2xl border border-emerald-200/80 bg-gradient-to-br from-emerald-50 via-white to-teal-50/80 px-5 py-6 dark:border-emerald-900/60 dark:from-emerald-950/50 dark:via-gray-950 dark:to-gray-950 md:px-8"
        >
            <div class="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                <div class="flex min-w-0 flex-1 items-start gap-4">
                    <div
                        class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-600/15 text-emerald-700 dark:bg-emerald-400/15 dark:text-emerald-300"
                    >
                        <mat-icon style="transform: scale(1.08)">verified</mat-icon>
                    </div>
                    <div class="min-w-0 space-y-2">
                        <p
                            class="inline-flex rounded-full border border-emerald-200/90 bg-emerald-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-900 dark:border-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-200"
                        >
                            {{ 'addCredits.promo.weekOneUsd50.badge' | transloco }}
                        </p>
                        <h2 class="text-lg font-semibold leading-snug text-emerald-950 dark:text-emerald-50">
                            {{ 'addCredits.promo.weekOneUsd50.title' | transloco }}
                        </h2>
                        <p class="max-w-3xl text-sm leading-relaxed text-emerald-950/95 dark:text-emerald-100/95">
                            {{ 'addCredits.promo.weekOneUsd50.body' | transloco }}
                        </p>
                        <p class="text-xs font-medium leading-relaxed text-emerald-900 dark:text-emerald-200">
                            {{ 'addCredits.promo.weekOneUsd50.accountCreatedNotice' | transloco }}
                        </p>
                        <p class="text-sm font-semibold text-emerald-950 dark:text-emerald-50">
                            {{
                                'addCredits.promo.weekOneUsd50.deadline'
                                    | transloco
                                        : {
                                              expiresAt:
                                                  (weekOneUsd50Promotion()?.expiresAt | date: 'medium') || '',
                                          }
                            }}
                        </p>
                    </div>
                </div>
                <div class="shrink-0 sm:pt-1">
                    <a
                        mat-flat-button
                        color="primary"
                        routerLink="/add-credits"
                        class="rounded-xl"
                    >
                        <mat-icon class="mr-2">payments</mat-icon>
                        {{ 'addCredits.purchaseCredits' | transloco }}
                    </a>
                </div>
            </div>
        </section>
    }

    <!-- Statistics Section -->
    <section class="mb-8">
        <h2 class="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-4">
            {{ 'home.stats.title' | transloco }}
        </h2>

        @if (isAuthenticated()) {
            @if (loading()) {
                <div class="flex items-center gap-2 py-8">
                    <mat-spinner diameter="24"></mat-spinner>
                    <span class="text-slate-500 text-sm">{{ 'home.stats.loading' | transloco }}</span>
                </div>
            } @else {
                @let totals = getTotals();
                <div class="stats-grid">
                    <div class="stat-card">
                        <div class="stat-value">{{ totals.total }}</div>
                        <div class="stat-label">{{ 'home.stats.totalValidations' | transloco }}</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-value text-green-600 dark:text-green-400">{{ totals.ok }}</div>
                        <div class="stat-label">{{ 'home.stats.successful' | transloco }}</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-value text-red-600 dark:text-red-400">{{ totals.failed }}</div>
                        <div class="stat-label">{{ 'home.stats.failed' | transloco }}</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-value">{{ totals.credits | number: '1.0-3' }}</div>
                        <div class="stat-label">{{ 'home.stats.creditsUsed' | transloco }}</div>
                    </div>
                </div>
            }
        } @else {
            <div class="stat-card p-6 text-center">
                <p class="text-slate-600 dark:text-slate-400 text-sm mb-4">
                    {{ 'home.stats.signInPrompt' | transloco }}
                </p>
                <button mat-flat-button color="primary" (click)="openAuthModal()">
                    {{ 'home.stats.signIn' | transloco }}
                </button>
            </div>
        }
    </section>

    <!-- Dashboard Charts Section (only when authenticated and data has loaded) -->
    @if (isAuthenticated() && !loading() && dashboardData(); as dashboard) {
        <section class="dashboard-charts mb-8">
            <!-- Row 1: Expense Sparklines (weekly / monthly / yearly) -->
            <div class="charts-grid charts-grid-3">
                <div class="chart-card chart-card-sparkline">
                    <div class="chart-card-label">{{ 'home.stats.weeklyExpenses' | transloco }}</div>
                    <div class="chart-card-value">
                        {{ formatCredits(dashboard.weeklyExpenses?.amount) }}
                        <span class="chart-card-unit">{{ 'home.stats.creditsUnit' | transloco }}</span>
                    </div>
                    <div class="chart-card-spark">
                        @if (chartWeeklyExpenses) {
                            <apx-chart
                                class="w-full h-full block"
                                [chart]="chartWeeklyExpenses.chart!"
                                [colors]="chartWeeklyExpenses.colors!"
                                [series]="chartWeeklyExpenses.series!"
                                [stroke]="chartWeeklyExpenses.stroke!"
                                [tooltip]="chartWeeklyExpenses.tooltip!"
                                [xaxis]="chartWeeklyExpenses.xaxis!"
                                [yaxis]="chartWeeklyExpenses.yaxis!"
                            ></apx-chart>
                        }
                    </div>
                </div>

                <div class="chart-card chart-card-sparkline">
                    <div class="chart-card-label">{{ 'home.stats.monthlyExpenses' | transloco }}</div>
                    <div class="chart-card-value">
                        {{ formatCredits(dashboard.monthlyExpenses?.amount) }}
                        <span class="chart-card-unit">{{ 'home.stats.creditsUnit' | transloco }}</span>
                    </div>
                    <div class="chart-card-spark">
                        @if (chartMonthlyExpenses) {
                            <apx-chart
                                class="w-full h-full block"
                                [chart]="chartMonthlyExpenses.chart!"
                                [colors]="chartMonthlyExpenses.colors!"
                                [series]="chartMonthlyExpenses.series!"
                                [stroke]="chartMonthlyExpenses.stroke!"
                                [tooltip]="chartMonthlyExpenses.tooltip!"
                                [xaxis]="chartMonthlyExpenses.xaxis!"
                                [yaxis]="chartMonthlyExpenses.yaxis!"
                            ></apx-chart>
                        }
                    </div>
                </div>

                <div class="chart-card chart-card-sparkline">
                    <div class="chart-card-label">{{ 'home.stats.yearlyExpenses' | transloco }}</div>
                    <div class="chart-card-value">
                        {{ formatCredits(dashboard.yearlyExpenses?.amount) }}
                        <span class="chart-card-unit">{{ 'home.stats.creditsUnit' | transloco }}</span>
                    </div>
                    <div class="chart-card-spark">
                        @if (chartYearlyExpenses) {
                            <apx-chart
                                class="w-full h-full block"
                                [chart]="chartYearlyExpenses.chart!"
                                [colors]="chartYearlyExpenses.colors!"
                                [series]="chartYearlyExpenses.series!"
                                [stroke]="chartYearlyExpenses.stroke!"
                                [tooltip]="chartYearlyExpenses.tooltip!"
                                [xaxis]="chartYearlyExpenses.xaxis!"
                                [yaxis]="chartYearlyExpenses.yaxis!"
                            ></apx-chart>
                        }
                    </div>
                </div>
            </div>

            <!-- Row 2: Last 30 days requests (KPIs + area chart) -->
            @if (dashboard.lastMonthRequests; as last30) {
                <div class="chart-card mt-6">
                    <div class="chart-card-header">
                        <h3 class="chart-card-title">{{ 'home.stats.last30Days' | transloco }}</h3>
                        <span class="chart-card-pill">30 {{ 'home.stats.days' | transloco }}</span>
                    </div>

                    @let okSum = sumSeries(last30.series?.[0]?.data);
                    @let notFoundSum = sumSeries(last30.series?.[1]?.data);
                    @let totalReq = last30.amount || (okSum + notFoundSum);
                    <div class="kpi-row">
                        <div class="kpi-card">
                            <div class="kpi-label">{{ 'home.stats.requestsTotal' | transloco }}</div>
                            <div class="kpi-value">
                                <span>{{ totalReq }}</span>
                                <span class="kpi-pct kpi-pct-positive">100%</span>
                            </div>
                        </div>
                        <div class="kpi-card">
                            <div class="kpi-label">{{ 'home.stats.requestsSuccess' | transloco }}</div>
                            <div class="kpi-value">
                                <span>{{ okSum }}</span>
                                <span class="kpi-pct kpi-pct-positive">{{ percentOf(okSum, totalReq) }}%</span>
                            </div>
                        </div>
                        <div class="kpi-card">
                            <div class="kpi-label">{{ 'home.stats.requestsNotFound' | transloco }}</div>
                            <div class="kpi-value">
                                <span>{{ notFoundSum }}</span>
                                <span class="kpi-pct kpi-pct-negative">{{ percentOf(notFoundSum, totalReq) }}%</span>
                            </div>
                        </div>
                    </div>

                    <div class="chart-card-tall">
                        @if (chartLastMonth) {
                            <apx-chart
                                class="w-full h-full block"
                                [chart]="chartLastMonth.chart!"
                                [colors]="chartLastMonth.colors!"
                                [dataLabels]="chartLastMonth.dataLabels!"
                                [grid]="chartLastMonth.grid!"
                                [legend]="chartLastMonth.legend!"
                                [series]="chartLastMonth.series!"
                                [stroke]="chartLastMonth.stroke!"
                                [tooltip]="chartLastMonth.tooltip!"
                                [xaxis]="chartLastMonth.xaxis!"
                                [yaxis]="chartLastMonth.yaxis!"
                            ></apx-chart>
                        }
                    </div>
                </div>
            }

            <!-- Row 3: Top endpoints podium + Weekly usage line -->
            <div class="charts-grid charts-grid-2 mt-6">
                <div class="chart-card">
                    <div class="chart-card-header">
                        <h3 class="chart-card-title">{{ 'home.stats.topEndpoints' | transloco }}</h3>
                    </div>

                    @if (podium().length > 0) {
                        <div class="podium-grid">
                            @if (podium()[0]; as top) {
                                <div class="podium-card podium-card-primary">
                                    <div class="podium-rank">{{ 'home.stats.top1' | transloco }}</div>
                                    <div class="podium-count">{{ top.count }}</div>
                                    <div class="podium-name">{{ top.displayName }}</div>
                                    @if (top.failed > 0) {
                                        <span class="api-failed-badge mt-2">
                                            {{ top.failed }} {{ 'home.stats.failed' | transloco }}
                                        </span>
                                    }
                                </div>
                            }
                            @if (podium()[1]; as top) {
                                <div class="podium-card podium-card-secondary">
                                    <div class="podium-rank">{{ 'home.stats.top2' | transloco }}</div>
                                    <div class="podium-count">{{ top.count }}</div>
                                    <div class="podium-name">{{ top.displayName }}</div>
                                    @if (top.failed > 0) {
                                        <span class="api-failed-badge mt-2">
                                            {{ top.failed }} {{ 'home.stats.failed' | transloco }}
                                        </span>
                                    }
                                </div>
                            }
                            @for (top of podium().slice(2); track top.code) {
                                <div class="podium-card podium-card-small">
                                    <div class="podium-rank">{{ 'home.stats.top' + ($index + 3) | transloco }}</div>
                                    <div class="podium-count podium-count-small">{{ top.count }}</div>
                                    <div class="podium-name podium-name-small">{{ top.displayName }}</div>
                                    @if (top.failed > 0) {
                                        <span class="api-failed-badge mt-1">
                                            {{ top.failed }} {{ 'home.stats.failed' | transloco }}
                                        </span>
                                    }
                                </div>
                            }
                        </div>
                    } @else {
                        <p class="text-sm text-slate-500 dark:text-slate-400">
                            {{ 'home.stats.noData' | transloco }}
                        </p>
                    }
                </div>

                <div class="chart-card">
                    <div class="chart-card-header">
                        <h3 class="chart-card-title">{{ 'home.stats.weeklyUsage' | transloco }}</h3>
                    </div>
                    <div class="chart-card-tall">
                        @if (chartUsageLine) {
                            <apx-chart
                                class="w-full h-full block"
                                [chart]="chartUsageLine.chart!"
                                [colors]="chartUsageLine.colors!"
                                [dataLabels]="chartUsageLine.dataLabels!"
                                [grid]="chartUsageLine.grid!"
                                [labels]="chartUsageLine.labels!"
                                [legend]="chartUsageLine.legend!"
                                [plotOptions]="chartUsageLine.plotOptions!"
                                [series]="chartUsageLine.series!"
                                [states]="chartUsageLine.states!"
                                [stroke]="chartUsageLine.stroke!"
                                [tooltip]="chartUsageLine.tooltip!"
                                [xaxis]="chartUsageLine.xaxis!"
                                [yaxis]="chartUsageLine.yaxis!"
                            ></apx-chart>
                        }
                    </div>
                </div>
            </div>

            <!-- Row 4: Distribution radar -->
            @if (dashboard.distribution) {
                <div class="chart-card mt-6">
                    <div class="chart-card-header">
                        <h3 class="chart-card-title">{{ 'home.stats.serviceDistribution' | transloco }}</h3>
                        <span class="chart-card-pill">30 {{ 'home.stats.days' | transloco }}</span>
                    </div>
                    <div class="chart-card-tall">
                        @if (chartDistribution) {
                            <apx-chart
                                class="w-full h-full block"
                                [chart]="chartDistribution.chart!"
                                [colors]="chartDistribution.colors!"
                                [dataLabels]="chartDistribution.dataLabels!"
                                [markers]="chartDistribution.markers!"
                                [plotOptions]="chartDistribution.plotOptions!"
                                [series]="chartDistribution.series!"
                                [stroke]="chartDistribution.stroke!"
                                [tooltip]="chartDistribution.tooltip!"
                                [xaxis]="chartDistribution.xaxis!"
                                [yaxis]="chartDistribution.yaxis!"
                            ></apx-chart>
                        }
                    </div>
                </div>
            }
        </section>
    }

    <!-- Helper Shortcuts -->
    <section class="shortcuts-section">
        <h2 class="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-4">
            {{ 'home.shortcuts.title' | transloco }}
        </h2>
        <div class="shortcuts-grid">
            @for (item of shortcuts; track item.id) {
                <a [routerLink]="item.link" class="shortcut-card">
                    <div class="shortcut-icon">
                        <mat-icon>{{ item.icon }}</mat-icon>
                    </div>
                    <div>
                        <div class="shortcut-title">{{ item.titleKey | transloco }}</div>
                        <div class="shortcut-subtitle">{{ item.subtitleKey | transloco }}</div>
                    </div>
                </a>
            }
        </div>
    </section>

    <!-- Tutorial Section -->
    <section class="tutorial-section">
        <h2 class="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">
            {{ 'home.tutorial.title' | transloco }}
        </h2>
        <p class="text-slate-600 dark:text-slate-400 text-sm mb-4">
            {{ 'home.tutorial.description' | transloco }}
        </p>
        <button mat-flat-button color="primary" (click)="openTutorial()">
            <mat-icon class="mr-2">school</mat-icon>
            {{ 'home.tutorial.start' | transloco }}
        </button>
    </section>
</div>
`, styles: ['@charset "UTF-8";\n\n/* src/app/modules/home/home.component.scss */\n:host {\n  display: block;\n  min-height: 100%;\n}\n.home-container {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 2rem 1.5rem;\n}\n.stats-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));\n  gap: 1rem;\n  margin-bottom: 2rem;\n}\n.stat-card {\n  padding: 1.25rem;\n  border-radius: 12px;\n  border: 1px solid rgba(148, 163, 184, 0.2);\n  background: rgba(248, 250, 252, 0.5);\n}\n.dark .stat-card {\n  background: rgba(15, 23, 42, 0.5);\n  border-color: rgba(148, 163, 184, 0.1);\n}\n.stat-value {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: rgb(15, 23, 42);\n}\n.dark .stat-value {\n  color: rgb(248, 250, 252);\n}\n.stat-label {\n  font-size: 0.75rem;\n  color: rgb(100, 116, 139);\n  margin-top: 0.25rem;\n}\n.dark .stat-label {\n  color: rgb(148, 163, 184);\n}\n.shortcuts-section {\n  margin-bottom: 2rem;\n}\n.shortcuts-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));\n  gap: 1rem;\n}\n.shortcut-card {\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n  padding: 1.25rem;\n  border-radius: 12px;\n  border: 1px solid rgba(148, 163, 184, 0.2);\n  background: rgba(255, 255, 255, 0.8);\n  text-decoration: none;\n  color: inherit;\n  transition: all 0.2s ease;\n}\n.shortcut-card:hover {\n  border-color: rgb(99, 102, 241);\n  background: rgba(99, 102, 241, 0.05);\n  transform: translateY(-2px);\n}\n.dark .shortcut-card {\n  background: rgba(15, 23, 42, 0.6);\n  border-color: rgba(148, 163, 184, 0.1);\n}\n.dark .shortcut-card:hover {\n  border-color: rgb(99, 102, 241);\n  background: rgba(99, 102, 241, 0.1);\n}\n.shortcut-icon {\n  width: 48px;\n  height: 48px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  background: rgba(99, 102, 241, 0.1);\n  color: rgb(99, 102, 241);\n}\n.shortcut-title {\n  font-weight: 600;\n  font-size: 1rem;\n  margin-bottom: 0.25rem;\n}\n.shortcut-subtitle {\n  font-size: 0.8rem;\n  color: rgb(100, 116, 139);\n}\n.dark .shortcut-subtitle {\n  color: rgb(148, 163, 184);\n}\n.tutorial-section {\n  padding: 1.5rem;\n  border-radius: 12px;\n  border: 1px solid rgba(148, 163, 184, 0.2);\n  background: rgba(248, 250, 252, 0.5);\n}\n.dark .tutorial-section {\n  background: rgba(15, 23, 42, 0.5);\n  border-color: rgba(148, 163, 184, 0.1);\n}\n.top-apis-list {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.top-apis-list li {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.875rem 1.25rem;\n  border-radius: 12px;\n  background: rgba(255, 255, 255, 0.5);\n  border: 1px solid rgba(148, 163, 184, 0.1);\n  transition: all 0.2s ease;\n}\n.top-apis-list li:hover {\n  background: rgb(255, 255, 255);\n  border-color: rgba(99, 102, 241, 0.3);\n  transform: translateX(4px);\n}\n.dark .top-apis-list li {\n  background: rgba(30, 41, 59, 0.4);\n  border-color: rgba(148, 163, 184, 0.05);\n}\n.dark .top-apis-list li:hover {\n  background: rgba(30, 41, 59, 0.8);\n  border-color: rgba(99, 102, 241, 0.4);\n}\n.api-badges {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n}\n.api-count-badge {\n  padding: 0.25rem 0.75rem;\n  border-radius: 9999px;\n  font-size: 0.7rem;\n  font-weight: 600;\n  background: rgba(99, 102, 241, 0.1);\n  color: rgb(79, 70, 229);\n}\n.dark .api-count-badge {\n  background: rgba(99, 102, 241, 0.2);\n  color: rgb(165, 180, 252);\n}\n.api-failed-badge {\n  display: inline-block;\n  padding: 0.25rem 0.75rem;\n  border-radius: 9999px;\n  font-size: 0.7rem;\n  font-weight: 600;\n  background: rgba(239, 68, 68, 0.1);\n  color: rgb(185, 28, 28);\n}\n.dark .api-failed-badge {\n  background: rgba(239, 68, 68, 0.18);\n  color: rgb(252, 165, 165);\n}\n.dashboard-charts {\n  display: flex;\n  flex-direction: column;\n}\n.charts-grid {\n  display: grid;\n  gap: 1rem;\n}\n.charts-grid-3 {\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n}\n.charts-grid-2 {\n  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));\n}\n.chart-card {\n  padding: 1.25rem;\n  border-radius: 16px;\n  border: 1px solid rgba(148, 163, 184, 0.2);\n  background: rgba(255, 255, 255, 0.85);\n  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);\n}\n.dark .chart-card {\n  background: rgba(15, 23, 42, 0.6);\n  border-color: rgba(148, 163, 184, 0.1);\n  box-shadow: none;\n}\n.chart-card-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.75rem;\n  margin-bottom: 1.25rem;\n}\n.chart-card-title {\n  font-size: 1rem;\n  font-weight: 600;\n  color: rgb(15, 23, 42);\n}\n.dark .chart-card-title {\n  color: rgb(248, 250, 252);\n}\n.chart-card-pill {\n  padding: 0.25rem 0.75rem;\n  border-radius: 9999px;\n  background: rgba(148, 163, 184, 0.15);\n  color: rgb(71, 85, 105);\n  font-size: 0.7rem;\n  font-weight: 600;\n}\n.dark .chart-card-pill {\n  background: rgba(148, 163, 184, 0.2);\n  color: rgb(203, 213, 225);\n}\n.chart-card-label {\n  font-size: 0.85rem;\n  font-weight: 500;\n  color: rgb(100, 116, 139);\n}\n.dark .chart-card-label {\n  color: rgb(148, 163, 184);\n}\n.chart-card-value {\n  margin-top: 0.5rem;\n  font-size: 1.75rem;\n  font-weight: 700;\n  color: rgb(15, 23, 42);\n  line-height: 1.1;\n}\n.dark .chart-card-value {\n  color: rgb(248, 250, 252);\n}\n.chart-card-unit {\n  margin-left: 0.4rem;\n  font-size: 0.85rem;\n  font-weight: 500;\n  color: rgb(100, 116, 139);\n}\n.dark .chart-card-unit {\n  color: rgb(148, 163, 184);\n}\n.chart-card-spark {\n  height: 64px;\n  margin-top: 1rem;\n  margin-left: -0.5rem;\n  margin-right: -0.5rem;\n}\n.chart-card-tall {\n  position: relative;\n  height: 320px;\n  width: 100%;\n}\n.kpi-row {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n}\n.kpi-card {\n  padding: 1rem;\n  border-radius: 12px;\n  background: rgba(248, 250, 252, 0.8);\n  border: 1px solid rgba(148, 163, 184, 0.15);\n}\n.dark .kpi-card {\n  background: rgba(30, 41, 59, 0.4);\n  border-color: rgba(148, 163, 184, 0.08);\n}\n.kpi-label {\n  font-size: 0.8rem;\n  font-weight: 500;\n  color: rgb(100, 116, 139);\n}\n.dark .kpi-label {\n  color: rgb(148, 163, 184);\n}\n.kpi-value {\n  margin-top: 0.5rem;\n  display: flex;\n  align-items: baseline;\n  gap: 0.5rem;\n  font-size: 1.75rem;\n  font-weight: 700;\n  color: rgb(15, 23, 42);\n  line-height: 1.1;\n}\n.dark .kpi-value {\n  color: rgb(248, 250, 252);\n}\n.kpi-pct {\n  padding: 0.15rem 0.6rem;\n  border-radius: 9999px;\n  font-size: 0.7rem;\n  font-weight: 600;\n}\n.kpi-pct-positive {\n  background: rgba(34, 197, 94, 0.12);\n  color: rgb(21, 128, 61);\n}\n.dark .kpi-pct-positive {\n  background: rgba(34, 197, 94, 0.2);\n  color: rgb(134, 239, 172);\n}\n.kpi-pct-negative {\n  background: rgba(239, 68, 68, 0.12);\n  color: rgb(185, 28, 28);\n}\n.dark .kpi-pct-negative {\n  background: rgba(239, 68, 68, 0.2);\n  color: rgb(252, 165, 165);\n}\n.podium-grid {\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  gap: 0.75rem;\n}\n.podium-card {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  padding: 1rem;\n  border-radius: 12px;\n  border: 1px solid transparent;\n}\n.podium-card-primary {\n  grid-column: span 6;\n  background: rgba(99, 102, 241, 0.08);\n  border-color: rgba(99, 102, 241, 0.2);\n  padding: 1.5rem 1rem;\n}\n@media (min-width: 640px) {\n  .podium-card-primary {\n    grid-column: span 3;\n  }\n}\n.dark .podium-card-primary {\n  background: rgba(99, 102, 241, 0.12);\n  border-color: rgba(99, 102, 241, 0.25);\n}\n.podium-card-secondary {\n  grid-column: span 6;\n  background: rgba(20, 184, 166, 0.08);\n  border-color: rgba(20, 184, 166, 0.2);\n  padding: 1.5rem 1rem;\n}\n@media (min-width: 640px) {\n  .podium-card-secondary {\n    grid-column: span 3;\n  }\n}\n.dark .podium-card-secondary {\n  background: rgba(20, 184, 166, 0.12);\n  border-color: rgba(20, 184, 166, 0.25);\n}\n.podium-card-small {\n  grid-column: span 6;\n  background: rgba(148, 163, 184, 0.08);\n  border-color: rgba(148, 163, 184, 0.18);\n}\n@media (min-width: 640px) {\n  .podium-card-small {\n    grid-column: span 2;\n  }\n}\n.dark .podium-card-small {\n  background: rgba(148, 163, 184, 0.1);\n  border-color: rgba(148, 163, 184, 0.15);\n}\n.podium-rank {\n  font-size: 0.7rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: rgb(100, 116, 139);\n}\n.podium-card-primary .podium-rank {\n  color: rgb(79, 70, 229);\n}\n.podium-card-secondary .podium-rank {\n  color: rgb(13, 148, 136);\n}\n.dark .podium-rank {\n  color: rgb(148, 163, 184);\n}\n.dark .podium-card-primary .podium-rank {\n  color: rgb(165, 180, 252);\n}\n.dark .podium-card-secondary .podium-rank {\n  color: rgb(94, 234, 212);\n}\n.podium-count {\n  margin-top: 0.5rem;\n  font-size: 2.25rem;\n  font-weight: 700;\n  line-height: 1;\n  color: rgb(15, 23, 42);\n}\n.podium-card-primary .podium-count {\n  color: rgb(49, 46, 129);\n}\n.podium-card-secondary .podium-count {\n  color: rgb(19, 78, 74);\n}\n.dark .podium-count {\n  color: rgb(248, 250, 252);\n}\n.dark .podium-card-primary .podium-count {\n  color: rgb(199, 210, 254);\n}\n.dark .podium-card-secondary .podium-count {\n  color: rgb(153, 246, 228);\n}\n.podium-count-small {\n  font-size: 1.5rem;\n}\n.podium-name {\n  margin-top: 0.5rem;\n  font-size: 0.85rem;\n  font-weight: 500;\n  color: rgb(71, 85, 105);\n  overflow-wrap: anywhere;\n}\n.podium-card-primary .podium-name {\n  color: rgb(67, 56, 202);\n}\n.podium-card-secondary .podium-name {\n  color: rgb(15, 118, 110);\n}\n.dark .podium-name {\n  color: rgb(203, 213, 225);\n}\n.dark .podium-card-primary .podium-name {\n  color: rgb(199, 210, 254);\n}\n.dark .podium-card-secondary .podium-name {\n  color: rgb(153, 246, 228);\n}\n.podium-name-small {\n  font-size: 0.75rem;\n}\n/*# sourceMappingURL=home.component.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src/app/modules/home/home.component.ts", lineNumber: 49 });
})();

// src/app/modules/home/home.routes.ts
var home_routes_default = [
  {
    path: "",
    component: HomeComponent
  }
];
export {
  home_routes_default as default
};
//# sourceMappingURL=chunk-ALSRQQRJ.js.map
