import {
  ChangeDetectionStrategy,
  Component,
  NgModule,
  NgZone,
  PLATFORM_ID,
  asapScheduler,
  inject,
  input,
  isPlatformBrowser,
  output,
  setClassMetadata,
  signal,
  viewChild,
  ɵɵNgOnChangesFeature,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵqueryAdvance,
  ɵɵviewQuerySignal
} from "./chunk-YWP2Y7QK.js";
import {
  __async
} from "./chunk-F5M2C4EZ.js";

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
      } = yield import("./chunk-FXRMUBX7.js");
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

// src/app/core/usage/country-geo.ts
var COUNTRY_CENTROIDS = {
  AR: [-34.6, -64],
  BO: [-16.5, -64.7],
  BR: [-14.2, -51.9],
  CA: [56.1, -106.3],
  CL: [-33.4, -70.7],
  CO: [4.6, -74.1],
  CR: [9.9, -84.1],
  CU: [21.5, -79.5],
  DE: [51.2, 10.4],
  DO: [18.7, -70.2],
  EC: [-1.8, -78.2],
  ES: [40.4, -3.7],
  FR: [46.2, 2.2],
  GB: [54, -2],
  GT: [15.8, -90.2],
  HN: [15.2, -86.2],
  IT: [41.9, 12.6],
  MX: [23.6, -102.6],
  NI: [12.9, -85.2],
  PA: [8.5, -80.8],
  PE: [-9.2, -75],
  PR: [18.2, -66.6],
  PT: [39.4, -8.2],
  PY: [-23.4, -58.4],
  SV: [13.8, -88.9],
  US: [39.8, -98.6],
  UY: [-32.5, -55.8],
  VE: [6.4, -66.6]
};
var countryName = (code, lang) => {
  try {
    return new Intl.DisplayNames([lang || "en"], { type: "region" }).of(code) || code;
  } catch {
    return code;
  }
};
var anglesForLocation = (lat, lng) => [
  Math.PI - (lng * Math.PI / 180 - Math.PI / 2),
  lat * Math.PI / 180
];

export {
  ChartComponent,
  NgApexchartsModule,
  COUNTRY_CENTROIDS,
  countryName,
  anglesForLocation
};
//# sourceMappingURL=chunk-T6XXGLUD.js.map
