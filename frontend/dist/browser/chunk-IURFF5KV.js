import {
  StatusCheckService
} from "./chunk-PHRBPGHD.js";
import {
  MatSlideToggleModule
} from "./chunk-LWBSNRLX.js";
import "./chunk-R2WNBORJ.js";
import "./chunk-35CQNCAH.js";
import {
  DateTime
} from "./chunk-BAVSUFW7.js";
import {
  gs
} from "./chunk-U4HL2KVY.js";
import "./chunk-H3UX3NVF.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-FD5UKZMK.js";
import {
  MatDialog,
  MatDialogModule
} from "./chunk-P2CAABEU.js";
import "./chunk-3PFCPE6U.js";
import "./chunk-4KMFYS6V.js";
import "./chunk-DZ5DWUCE.js";
import "./chunk-RVVUGFOS.js";
import "./chunk-MJXNRHWH.js";
import {
  MatOption,
  MatOptionModule,
  MatSelect,
  MatSelectModule
} from "./chunk-LTHY76JY.js";
import "./chunk-AY5C2ZOO.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-BY4NG7V4.js";
import {
  MatFormField,
  MatFormFieldModule,
  MatPrefix,
  MatSuffix
} from "./chunk-RNRTLQ3J.js";
import "./chunk-6OJR6OMX.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  ReactiveFormsModule
} from "./chunk-S7CME3IL.js";
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
import "./chunk-BIHX2IQ4.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-HZQU4G6R.js";
import {
  ChangeDetectorRef,
  CommonModule,
  Component,
  CurrencyPipe,
  DecimalPipe,
  MatButtonModule,
  MatIconButton,
  NgClass,
  NgForOf,
  NgIf,
  Subject,
  catchError,
  forkJoin,
  inject,
  of,
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind4,
  ɵɵproperty,
  ɵɵpureFunction3,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-LLRZIRCV.js";
import {
  __async
} from "./chunk-KTESVR3Q.js";

// src/app/modules/status-check/status-check.component.ts
var _c0 = (a0, a1, a2) => ({ "bg-green-500": a0, "bg-red-500": a1, "bg-gray-200 dark:bg-gray-700": a2 });
function StatusCheckComponent_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 26);
    \u0275\u0275listener("click", function StatusCheckComponent_button_13_Template_button_click_0_listener() {
      const country_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleCountry(country_r2.name));
    });
    \u0275\u0275elementStart(1, "span", 27);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const country_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("bg-white", ctx_r2.selectedCountry !== country_r2.name)("shadow-sm", ctx_r2.selectedCountry !== country_r2.name)("border-gray-200", ctx_r2.selectedCountry !== country_r2.name)("bg-gray-900", ctx_r2.selectedCountry === country_r2.name)("text-white", ctx_r2.selectedCountry === country_r2.name)("border-transparent", ctx_r2.selectedCountry === country_r2.name);
    \u0275\u0275property("matTooltip", country_r2.name + " (" + country_r2.count + ")");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getCountryFlag(country_r2.name));
  }
}
function StatusCheckComponent_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
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
    \u0275\u0275elementStart(0, "mat-option", 17);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r4 = ctx.$implicit;
    \u0275\u0275property("value", cat_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "categories." + cat_r4), " ");
  }
}
function StatusCheckComponent_button_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 29);
    \u0275\u0275listener("click", function StatusCheckComponent_button_37_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.filterData(""));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function StatusCheckComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275element(1, "mat-spinner", 31);
    \u0275\u0275elementEnd();
  }
}
function StatusCheckComponent_div_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "mat-icon", 33);
    \u0275\u0275text(2, "cloud_off");
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
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 2, "network.no_services"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 4, "network.no_services_desc"), " ");
  }
}
function StatusCheckComponent_div_40_div_1_img_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 66);
  }
  if (rf & 2) {
    const item_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r2.getFlagUrl(item_r7.subject.method.country), \u0275\u0275sanitizeUrl)("alt", item_r7.subject.method.country);
  }
}
function StatusCheckComponent_div_40_div_1_div_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67);
    \u0275\u0275element(1, "div", 68);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("id", "chart-" + item_r7.subject.method.code);
  }
}
function StatusCheckComponent_div_40_div_1_div_41_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "div", 72);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const it_r8 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(2, _c0, it_r8.status === "ok", it_r8.status !== "ok" && it_r8.status !== "awaiting", it_r8.status === "awaiting"))("matTooltip", ctx_r2.formatDate(it_r8.createdAt) + (it_r8.responseTime ? " - " + it_r8.responseTime + "ms" : ""));
  }
}
function StatusCheckComponent_div_40_div_1_div_41_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "network.no_data"), " ");
  }
}
function StatusCheckComponent_div_40_div_1_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69);
    \u0275\u0275template(1, StatusCheckComponent_div_40_div_1_div_41_ng_container_1_Template, 2, 6, "ng-container", 70)(2, StatusCheckComponent_div_40_div_1_div_41_div_2_Template, 3, 3, "div", 71);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", item_r7.data);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !item_r7.data || item_r7.data.length === 0);
  }
}
function StatusCheckComponent_div_40_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38)(1, "div", 39)(2, "div", 40)(3, "div", 41)(4, "h3", 42);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 43)(7, "span", 44);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 45);
    \u0275\u0275text(11, "\u2022");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "currency");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(15, StatusCheckComponent_div_40_div_1_img_15_Template, 1, 2, "img", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 47)(17, "mat-icon", 48);
    \u0275\u0275text(18, "link");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 49);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 50)(22, "div", 51)(23, "span", 52);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "transloco");
    \u0275\u0275pipe(26, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 53)(28, "button", 54);
    \u0275\u0275pipe(29, "transloco");
    \u0275\u0275pipe(30, "transloco");
    \u0275\u0275listener("click", function StatusCheckComponent_div_40_div_1_Template_button_click_28_listener() {
      const item_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openDialog(item_r7));
    });
    \u0275\u0275elementStart(31, "mat-icon", 55);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 56)(34, "button", 57);
    \u0275\u0275listener("click", function StatusCheckComponent_div_40_div_1_Template_button_click_34_listener() {
      const item_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleView(item_r7, "uptime"));
    });
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "button", 57);
    \u0275\u0275listener("click", function StatusCheckComponent_div_40_div_1_Template_button_click_37_listener() {
      const item_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleView(item_r7, "graph"));
    });
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "transloco");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(40, StatusCheckComponent_div_40_div_1_div_40_Template, 2, 1, "div", 58)(41, StatusCheckComponent_div_40_div_1_div_41_Template, 3, 2, "div", 59);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 60)(43, "div", 61)(44, "span", 62);
    \u0275\u0275text(45);
    \u0275\u0275pipe(46, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "span", 63);
    \u0275\u0275text(48);
    \u0275\u0275pipe(49, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div", 64)(51, "span", 62);
    \u0275\u0275text(52);
    \u0275\u0275pipe(53, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "span", 65);
    \u0275\u0275text(55);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("title", item_r7.subject.method.currentTranslation);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r7.subject.method.currentTranslation, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 47, "categories." + item_r7.subject.method.baseCategory), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(14, 49, item_r7.subject.method.price, "USD", "symbol", "1.3-3"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", item_r7.subject.method.country !== "All");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(item_r7.subject.method.url);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", item_r7.subject.showGraph ? \u0275\u0275pipeBind1(25, 54, "network.response_time") : \u0275\u0275pipeBind1(26, 56, "network.uptime_history"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("text-primary-600", item_r7.subject.isSubscribed)("bg-primary-50", item_r7.subject.isSubscribed)("border-primary-200", item_r7.subject.isSubscribed);
    \u0275\u0275property("matTooltip", item_r7.subject.isSubscribed ? \u0275\u0275pipeBind1(29, 58, "network.alerts.active") : \u0275\u0275pipeBind1(30, 60, "network.alerts.enable"));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("animate-pulse", item_r7.subject.isSubscribed);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r7.subject.isSubscribed ? "notifications_active" : "notifications_none");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-white", !item_r7.subject.showGraph)("shadow-sm", !item_r7.subject.showGraph)("text-gray-900", !item_r7.subject.showGraph)("text-gray-500", item_r7.subject.showGraph);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(36, 62, "network.status"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-white", item_r7.subject.showGraph)("shadow-sm", item_r7.subject.showGraph)("text-primary-600", item_r7.subject.showGraph)("text-gray-500", !item_r7.subject.showGraph);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(39, 64, "network.latency"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", item_r7.subject.showGraph);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !item_r7.subject.showGraph);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(46, 66, "network.uptime"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("text-green-600", item_r7.subject.percentage >= 98)("text-yellow-600", item_r7.subject.percentage < 98 && item_r7.subject.percentage >= 90)("text-red-600", item_r7.subject.percentage < 90);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(49, 68, item_r7.subject.percentage, "1.0-2"), "% ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(53, 71, "network.last_check"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.formatDate(item_r7.subject.lastDate) || "N/A", " ");
  }
}
function StatusCheckComponent_div_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275template(1, StatusCheckComponent_div_40_div_1_Template, 56, 73, "div", 37);
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
          return a.subject.percentage < b.subject.percentage ? 1 : -1;
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
        perPage: 50,
        sort: "-createdAt"
      };
      promises.push({
        method,
        promise: this._statusCheckService.getStatusRecord(payload).pipe(catchError(() => of({ data: [] })))
      });
    }
    return promises;
  }
  processStatusRecord(listStatusRecord, method) {
    if (listStatusRecord && listStatusRecord.length < 50) {
      const filler = {
        group: "apiRequest",
        status: "awaiting",
        responseTime: 0,
        createdAt: null
      };
      const copyList = [...listStatusRecord];
      const needed = 50 - listStatusRecord.length;
      for (let i = 0; i < needed; i++) {
        copyList.push(filler);
      }
      listStatusRecord = copyList.reverse();
    } else if (listStatusRecord) {
      listStatusRecord = [...listStatusRecord].reverse();
    }
    let errorCount = 0;
    const validPoints = listStatusRecord.filter((x) => x.status && x.status !== "awaiting");
    validPoints.forEach((singleData) => {
      if (singleData.status !== "ok") {
        errorCount += 1;
      }
    });
    const percentage = validPoints.length > 0 ? (validPoints.length - errorCount) * 100 / validPoints.length : 100;
    const firstDate = listStatusRecord.find((x) => x.createdAt)?.createdAt;
    const lastDate = listStatusRecord[listStatusRecord.length - 1]?.createdAt;
    const record = {
      data: listStatusRecord,
      subject: {
        method,
        showGraph: false,
        percentage,
        firstDate,
        lastDate,
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
    import("./chunk-RGTYPSE5.js").then(({ SubscribeComponent }) => {
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
  // Copied from PostmanComponent
  getCountryFlag(country) {
    const map = {
      Colombia: "\u{1F1E8}\u{1F1F4}",
      "United States": "\u{1F1FA}\u{1F1F8}",
      Peru: "\u{1F1F5}\u{1F1EA}",
      world: "\u{1F310}",
      Mexico: "\u{1F1F2}\u{1F1FD}",
      Brazil: "\u{1F1E7}\u{1F1F7}",
      Chile: "\u{1F1E8}\u{1F1F1}",
      Argentina: "\u{1F1E6}\u{1F1F7}",
      Ecuador: "\u{1F1EA}\u{1F1E8}",
      Venezuela: "\u{1F1FB}\u{1F1EA}",
      Bolivia: "\u{1F1E7}\u{1F1F4}",
      Uruguay: "\u{1F1FA}\u{1F1FE}",
      Paraguay: "\u{1F1F5}\u{1F1FE}",
      Panama: "\u{1F1F5}\u{1F1E6}",
      "Costa Rica": "\u{1F1E8}\u{1F1F7}",
      Guatemala: "\u{1F1EC}\u{1F1F9}",
      Honduras: "\u{1F1ED}\u{1F1F3}",
      "El Salvador": "\u{1F1F8}\u{1F1FB}",
      "Dominican Republic": "\u{1F1E9}\u{1F1F4}",
      "Rep\xFAblica Dominicana": "\u{1F1E9}\u{1F1F4}",
      Canada: "\u{1F1E8}\u{1F1E6}",
      Spain: "\u{1F1EA}\u{1F1F8}"
    };
    return map[country] || "\u{1F3F3}\uFE0F";
  }
  // Keep strict flag url for image if needed, but we are using emojis for filter
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StatusCheckComponent, selectors: [["status-check"]], decls: 41, vars: 46, consts: [[1, "flex", "flex-col", "flex-auto", "min-w-0", "bg-gray-50", "dark:bg-gray-900", "min-h-screen"], [1, "flex", "flex-col", "w-full", "max-w-7xl", "mx-auto", "p-6", "md:p-8"], [1, "flex", "flex-col", "py-6", "mb-8", "border-b", "border-gray-200", "dark:border-gray-800"], [1, "flex", "items-center", "justify-between", "mb-6"], [1, "text-3xl", "font-bold", "tracking-tight", "text-gray-900", "dark:text-white"], [1, "text-lg", "text-gray-500", "dark:text-gray-400", "mt-1"], [1, "flex", "flex-col", "lg:flex-row", "lg:items-center", "justify-between", "gap-6"], [1, "flex", "items-center", "gap-1.5", "overflow-x-auto", "scrollbar-hide", "mask-gradient", "p-1", "-ml-1", "pl-1", "lg:max-w-[60%]"], ["class", "h-9 w-9 min-w-[2.25rem] flex items-center justify-center rounded-full border transition-all duration-200 relative group text-lg flex-shrink-0 aspect-square", 3, "bg-white", "shadow-sm", "border-gray-200", "bg-gray-900", "text-white", "border-transparent", "matTooltip", "click", 4, "ngFor", "ngForOf"], ["class", "text-sm text-gray-400 italic", 4, "ngIf"], [1, "flex", "flex-col", "sm:flex-row", "items-center", "gap-4", "w-full", "lg:w-auto"], ["type", "button", 1, "h-9", "px-3", "inline-flex", "items-center", "gap-2", "rounded-full", "border", "shadow-sm", "transition-all", "text-sm", "font-medium", "leading-none", "whitespace-nowrap", "flex-shrink-0", "dark:bg-gray-800", "dark:text-gray-200", "dark:border-gray-700", 3, "click", "matTooltip"], [1, "icon-size-4", "leading-none"], [1, "whitespace-nowrap"], [1, "w-full", "sm:w-48", "fuse-mat-dense", 3, "subscriptSizing"], ["matPrefix", "", 1, "icon-size-5", "text-gray-500", "ml-2", "mr-2"], [3, "selectionChange", "value", "placeholder"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], [1, "w-full", "sm:w-72", "fuse-mat-dense", 3, "subscriptSizing"], ["matPrefix", "", 1, "icon-size-5", "text-gray-500"], ["matInput", "", 3, "ngModelChange", "ngModel", "placeholder"], ["matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click", 4, "ngIf"], ["class", "flex flex-auto justify-center items-center py-20", 4, "ngIf"], ["class", "flex flex-col items-center justify-center py-20 text-center", 4, "ngIf"], ["class", "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", 4, "ngIf"], [1, "h-9", "w-9", "min-w-[2.25rem]", "flex", "items-center", "justify-center", "rounded-full", "border", "transition-all", "duration-200", "relative", "group", "text-lg", "flex-shrink-0", "aspect-square", 3, "click", "matTooltip"], [1, "leading-none"], [1, "text-sm", "text-gray-400", "italic"], ["matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click"], [1, "flex", "flex-auto", "justify-center", "items-center", "py-20"], ["diameter", "64"], [1, "flex", "flex-col", "items-center", "justify-center", "py-20", "text-center"], [1, "icon-size-24", "text-gray-300", "dark:text-gray-600", "mb-4"], [1, "text-xl", "font-medium", "text-gray-600", "dark:text-gray-400"], [1, "text-gray-500", "dark:text-gray-500", "max-w-sm", "mx-auto", "mt-2"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-3", "gap-6"], ["class", "flex flex-col bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden transition-shadow hover:shadow-md", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "flex", "flex-col", "bg-white", "dark:bg-gray-800", "rounded-2xl", "shadow-sm", "border", "border-gray-200", "dark:border-gray-700", "overflow-hidden", "transition-shadow", "hover:shadow-md"], [1, "p-5", "border-b", "border-gray-100", "dark:border-gray-700/50", "bg-gray-50/30", "dark:bg-gray-800/50"], [1, "flex", "items-start", "justify-between"], [1, "flex", "flex-col", "min-w-0"], [1, "text-lg", "font-semibold", "text-gray-900", "dark:text-white", "truncate", 3, "title"], [1, "flex", "items-center", "mt-1", "space-x-2", "text-sm", "text-gray-500", "dark:text-gray-400"], [1, "uppercase", "tracking-wider", "text-xs", "font-medium", "px-2", "py-0.5", "rounded", "bg-gray-100", "dark:bg-gray-700", "text-gray-600", "dark:text-gray-300"], [1, "text-gray-300", "dark:text-gray-600", "px-1"], ["class", "w-6 h-auto rounded shadow-sm flex-shrink-0", 3, "src", "alt", 4, "ngIf"], [1, "flex", "items-center", "mt-3", "text-sm", "text-gray-500", "dark:text-gray-400", "font-mono", "bg-gray-50", "dark:bg-gray-900/50", "px-3", "py-1.5", "rounded-md", "border", "border-gray-100", "dark:border-gray-800"], [1, "icon-size-4", "mr-2", "text-gray-400"], [1, "truncate"], [1, "flex-auto", "p-5"], [1, "flex", "items-center", "justify-between", "mb-4"], [1, "text-sm", "font-medium", "text-gray-500", "dark:text-gray-400"], [1, "flex", "items-center", "gap-3"], [1, "flex", "items-center", "justify-center", "w-8", "h-8", "rounded-lg", "border", "border-gray-200", "dark:border-gray-700", "transition-all", "hover:bg-gray-50", "dark:hover:bg-gray-800", 3, "click", "matTooltip"], [1, "icon-size-4"], [1, "flex", "bg-gray-100", "dark:bg-gray-700", "p-1", "rounded-lg"], [1, "px-3", "py-1", "text-xs", "font-medium", "rounded-md", "transition-all", 3, "click"], ["class", "h-20 w-full overflow-hidden", 4, "ngIf"], ["class", "h-20 w-full flex items-end justify-between space-x-0.5", 4, "ngIf"], [1, "px-5", "py-4", "bg-gray-50/50", "dark:bg-gray-800/30", "border-t", "border-gray-100", "dark:border-gray-800", "flex", "items-center", "justify-between"], [1, "flex", "flex-col"], [1, "text-xs", "text-gray-400", "uppercase", "font-semibold", "tracking-wide"], [1, "text-lg", "font-bold"], [1, "text-right", "flex", "flex-col", "items-end"], [1, "text-sm", "font-medium", "text-gray-700", "dark:text-gray-300"], [1, "w-6", "h-auto", "rounded", "shadow-sm", "flex-shrink-0", 3, "src", "alt"], [1, "h-20", "w-full", "overflow-hidden"], [1, "w-full", "h-full", 3, "id"], [1, "h-20", "w-full", "flex", "items-end", "justify-between", "space-x-0.5"], [4, "ngFor", "ngForOf"], ["class", "w-full h-full flex items-center justify-center text-gray-400 text-sm", 4, "ngIf"], ["matTooltipPosition", "above", 1, "status-tick", "w-full", "flex-1", "rounded-sm", "transition-all", "hover:opacity-80", 3, "ngClass", "matTooltip"], [1, "w-full", "h-full", "flex", "items-center", "justify-center", "text-gray-400", "text-sm"]], template: function StatusCheckComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div")(5, "h2", 4);
        \u0275\u0275text(6);
        \u0275\u0275pipe(7, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p", 5);
        \u0275\u0275text(9);
        \u0275\u0275pipe(10, "transloco");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(11, "div", 6)(12, "div", 7);
        \u0275\u0275template(13, StatusCheckComponent_button_13_Template, 3, 14, "button", 8)(14, StatusCheckComponent_span_14_Template, 3, 3, "span", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "div", 10)(16, "button", 11);
        \u0275\u0275pipe(17, "transloco");
        \u0275\u0275listener("click", function StatusCheckComponent_Template_button_click_16_listener() {
          return ctx.toggleSubscribedFilter();
        });
        \u0275\u0275elementStart(18, "mat-icon", 12);
        \u0275\u0275text(19);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "span", 13);
        \u0275\u0275text(21);
        \u0275\u0275pipe(22, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "mat-form-field", 14)(24, "mat-icon", 15);
        \u0275\u0275text(25, "category");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "mat-select", 16);
        \u0275\u0275pipe(27, "transloco");
        \u0275\u0275listener("selectionChange", function StatusCheckComponent_Template_mat_select_selectionChange_26_listener($event) {
          return ctx.setCategory($event.value);
        });
        \u0275\u0275elementStart(28, "mat-option", 17);
        \u0275\u0275text(29);
        \u0275\u0275pipe(30, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275template(31, StatusCheckComponent_mat_option_31_Template, 3, 4, "mat-option", 18);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(32, "mat-form-field", 19)(33, "mat-icon", 20);
        \u0275\u0275text(34, "search");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "input", 21);
        \u0275\u0275pipe(36, "transloco");
        \u0275\u0275listener("ngModelChange", function StatusCheckComponent_Template_input_ngModelChange_35_listener($event) {
          return ctx.filterData($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(37, StatusCheckComponent_button_37_Template, 3, 0, "button", 22);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(38, StatusCheckComponent_div_38_Template, 2, 0, "div", 23)(39, StatusCheckComponent_div_39_Template, 9, 6, "div", 24)(40, StatusCheckComponent_div_40_Template, 2, 2, "div", 25);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 32, "network.title"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 34, "network.subtitle"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275property("ngForOf", ctx.countries);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.countries.length === 0 && !ctx.loading);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("bg-primary-600", ctx.showOnlySubscribed)("text-white", ctx.showOnlySubscribed)("border-primary-600", ctx.showOnlySubscribed)("bg-white", !ctx.showOnlySubscribed)("text-gray-700", !ctx.showOnlySubscribed)("border-gray-200", !ctx.showOnlySubscribed);
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(17, 36, "network.alerts.filter_subscribed_tooltip"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.showOnlySubscribed ? "notifications_active" : "notifications_none");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 38, "network.alerts.filter_subscribed"));
        \u0275\u0275advance(2);
        \u0275\u0275property("subscriptSizing", "dynamic");
        \u0275\u0275advance(3);
        \u0275\u0275property("value", ctx.selectedCategory)("placeholder", \u0275\u0275pipeBind1(27, 40, "categories.label"));
        \u0275\u0275advance(2);
        \u0275\u0275property("value", null);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(30, 42, "categories.all"));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.categories);
        \u0275\u0275advance();
        \u0275\u0275property("subscriptSizing", "dynamic");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngModel", ctx.searchInput)("placeholder", \u0275\u0275pipeBind1(36, 44, "network.search_placeholder"));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.searchInput);
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
      MatDialogModule
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
      MatDialogModule
    ], template: `<div class="flex flex-col flex-auto min-w-0 bg-gray-50 dark:bg-gray-900 min-h-screen">
    <div class="flex flex-col w-full max-w-7xl mx-auto p-6 md:p-8">
        <!-- Header -->
        <!-- Header -->
        <div class="flex flex-col py-6 mb-8 border-b border-gray-200 dark:border-gray-800">
            <div class="flex items-center justify-between mb-6">
                <div>
                    <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {{ 'network.title' | transloco }}
                    </h2>
                    <p class="text-lg text-gray-500 dark:text-gray-400 mt-1">
                        {{ 'network.subtitle' | transloco }}
                    </p>
                </div>
            </div>

            <!-- Filters Toolbar -->
            <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <!-- Country Filters (Pill Style) -->
                <div
                    class="flex items-center gap-1.5 overflow-x-auto scrollbar-hide mask-gradient p-1 -ml-1 pl-1 lg:max-w-[60%]"
                >
                    <button
                        *ngFor="let country of countries"
                        (click)="toggleCountry(country.name)"
                        [class.bg-white]="selectedCountry !== country.name"
                        [class.shadow-sm]="selectedCountry !== country.name"
                        [class.border-gray-200]="selectedCountry !== country.name"
                        [class.bg-gray-900]="selectedCountry === country.name"
                        [class.text-white]="selectedCountry === country.name"
                        [class.border-transparent]="selectedCountry === country.name"
                        class="h-9 w-9 min-w-[2.25rem] flex items-center justify-center rounded-full border transition-all duration-200 relative group text-lg flex-shrink-0 aspect-square"
                        [matTooltip]="country.name + ' (' + country.count + ')'"
                    >
                        <span class="leading-none">{{ getCountryFlag(country.name) }}</span>
                    </button>
                    <span
                        *ngIf="countries.length === 0 && !loading"
                        class="text-sm text-gray-400 italic"
                        >{{ 'network.no_filters' | transloco }}</span
                    >
                </div>

                <!-- Input Filters -->
                <div class="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
                    <!-- Subscribed-only Toggle -->
                    <button
                        type="button"
                        (click)="toggleSubscribedFilter()"
                        [class.bg-primary-600]="showOnlySubscribed"
                        [class.text-white]="showOnlySubscribed"
                        [class.border-primary-600]="showOnlySubscribed"
                        [class.bg-white]="!showOnlySubscribed"
                        [class.text-gray-700]="!showOnlySubscribed"
                        [class.border-gray-200]="!showOnlySubscribed"
                        class="h-9 px-3 inline-flex items-center gap-2 rounded-full border shadow-sm transition-all text-sm font-medium leading-none whitespace-nowrap flex-shrink-0 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700"
                        [matTooltip]="'network.alerts.filter_subscribed_tooltip' | transloco"
                    >
                        <mat-icon class="icon-size-4 leading-none">{{ showOnlySubscribed ? 'notifications_active' : 'notifications_none' }}</mat-icon>
                        <span class="whitespace-nowrap">{{ 'network.alerts.filter_subscribed' | transloco }}</span>
                    </button>

                    <!-- Category Dropdown -->
                    <mat-form-field
                        class="w-full sm:w-48 fuse-mat-dense"
                        [subscriptSizing]="'dynamic'"
                    >
                        <mat-icon matPrefix class="icon-size-5 text-gray-500 ml-2 mr-2"
                            >category</mat-icon
                        >
                        <mat-select
                            [value]="selectedCategory"
                            (selectionChange)="setCategory($event.value)"
                            [placeholder]="'categories.label' | transloco"
                        >
                            <mat-option [value]="null">{{
                                'categories.all' | transloco
                            }}</mat-option>
                            <mat-option *ngFor="let cat of categories" [value]="cat">
                                {{ 'categories.' + cat | transloco }}
                            </mat-option>
                        </mat-select>
                    </mat-form-field>

                    <!-- Search -->
                    <mat-form-field
                        class="w-full sm:w-72 fuse-mat-dense"
                        [subscriptSizing]="'dynamic'"
                    >
                        <mat-icon matPrefix class="icon-size-5 text-gray-500">search</mat-icon>
                        <input
                            matInput
                            [ngModel]="searchInput"
                            (ngModelChange)="filterData($event)"
                            [placeholder]="'network.search_placeholder' | transloco"
                        />
                        <button
                            *ngIf="searchInput"
                            matSuffix
                            mat-icon-button
                            aria-label="Clear"
                            (click)="filterData('')"
                        >
                            <mat-icon>close</mat-icon>
                        </button>
                    </mat-form-field>
                </div>
            </div>
        </div>

        <!-- Loading -->
        <div *ngIf="loading" class="flex flex-auto justify-center items-center py-20">
            <mat-spinner diameter="64"></mat-spinner>
        </div>

        <!-- Empty State -->
        <div
            *ngIf="!loading && filteredData.length === 0"
            class="flex flex-col items-center justify-center py-20 text-center"
        >
            <mat-icon class="icon-size-24 text-gray-300 dark:text-gray-600 mb-4"
                >cloud_off</mat-icon
            >
            <p class="text-xl font-medium text-gray-600 dark:text-gray-400">
                {{ 'network.no_services' | transloco }}
            </p>
            <p class="text-gray-500 dark:text-gray-500 max-w-sm mx-auto mt-2">
                {{ 'network.no_services_desc' | transloco }}
            </p>
        </div>

        <!-- Content Grid -->
        <div
            *ngIf="!loading && filteredData.length > 0"
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
            <div
                *ngFor="let item of filteredData; trackBy: item?.subject?.method?.code"
                class="flex flex-col bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden transition-shadow hover:shadow-md"
            >
                <!-- Card Header -->
                <div
                    class="p-5 border-b border-gray-100 dark:border-gray-700/50 bg-gray-50/30 dark:bg-gray-800/50"
                >
                    <div class="flex items-start justify-between">
                        <div class="flex flex-col min-w-0">
                            <h3
                                class="text-lg font-semibold text-gray-900 dark:text-white truncate"
                                [title]="item.subject.method.currentTranslation"
                            >
                                {{ item.subject.method.currentTranslation }}
                            </h3>
                            <div
                                class="flex items-center mt-1 space-x-2 text-sm text-gray-500 dark:text-gray-400"
                            >
                                <span
                                    class="uppercase tracking-wider text-xs font-medium px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
                                >
                                    {{
                                        'categories.' + item.subject.method.baseCategory | transloco
                                    }}
                                </span>
                                <span class="text-gray-300 dark:text-gray-600 px-1">\u2022</span>
                                <span>{{
                                    item.subject.method.price | currency: 'USD' : 'symbol' : '1.3-3'
                                }}</span>
                            </div>
                        </div>
                        <img
                            *ngIf="item.subject.method.country !== 'All'"
                            [src]="getFlagUrl(item.subject.method.country)"
                            class="w-6 h-auto rounded shadow-sm flex-shrink-0"
                            [alt]="item.subject.method.country"
                        />
                    </div>

                    <div
                        class="flex items-center mt-3 text-sm text-gray-500 dark:text-gray-400 font-mono bg-gray-50 dark:bg-gray-900/50 px-3 py-1.5 rounded-md border border-gray-100 dark:border-gray-800"
                    >
                        <mat-icon class="icon-size-4 mr-2 text-gray-400">link</mat-icon>
                        <span class="truncate">{{ item.subject.method.url }}</span>
                    </div>
                </div>

                <!-- Card Content -->
                <div class="flex-auto p-5">
                    <div class="flex items-center justify-between mb-4">
                        <span class="text-sm font-medium text-gray-500 dark:text-gray-400">
                            {{
                                item.subject.showGraph
                                    ? ('network.response_time' | transloco)
                                    : ('network.uptime_history' | transloco)
                            }}
                        </span>

                        <div class="flex items-center gap-3">
                            <!-- Alert Toggle -->
                            <button
                                (click)="openDialog(item)"
                                [class.text-primary-600]="item.subject.isSubscribed"
                                [class.bg-primary-50]="item.subject.isSubscribed"
                                [class.border-primary-200]="item.subject.isSubscribed"
                                class="flex items-center justify-center w-8 h-8 rounded-lg border border-gray-200 dark:border-gray-700 transition-all hover:bg-gray-50 dark:hover:bg-gray-800"
                                [matTooltip]="
                                    item.subject.isSubscribed
                                        ? ('network.alerts.active' | transloco)
                                        : ('network.alerts.enable' | transloco)
                                "
                            >
                                <mat-icon
                                    class="icon-size-4"
                                    [class.animate-pulse]="item.subject.isSubscribed"
                                    >{{
                                        item.subject.isSubscribed
                                            ? 'notifications_active'
                                            : 'notifications_none'
                                    }}</mat-icon
                                >
                            </button>

                            <!-- Toggle -->
                            <div class="flex bg-gray-100 dark:bg-gray-700 p-1 rounded-lg">
                                <button
                                    class="px-3 py-1 text-xs font-medium rounded-md transition-all"
                                    [class.bg-white]="!item.subject.showGraph"
                                    [class.shadow-sm]="!item.subject.showGraph"
                                    [class.text-gray-900]="!item.subject.showGraph"
                                    [class.text-gray-500]="item.subject.showGraph"
                                    (click)="toggleView(item, 'uptime')"
                                >
                                    {{ 'network.status' | transloco }}
                                </button>
                                <button
                                    class="px-3 py-1 text-xs font-medium rounded-md transition-all"
                                    [class.bg-white]="item.subject.showGraph"
                                    [class.shadow-sm]="item.subject.showGraph"
                                    [class.text-primary-600]="item.subject.showGraph"
                                    [class.text-gray-500]="!item.subject.showGraph"
                                    (click)="toggleView(item, 'graph')"
                                >
                                    {{ 'network.latency' | transloco }}
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Graph View -->
                    <div *ngIf="item.subject.showGraph" class="h-20 w-full overflow-hidden">
                        <div [id]="'chart-' + item.subject.method.code" class="w-full h-full"></div>
                    </div>

                    <!-- Status View -->
                    <div
                        *ngIf="!item.subject.showGraph"
                        class="h-20 w-full flex items-end justify-between space-x-0.5"
                    >
                        <ng-container *ngFor="let it of item.data">
                            <div
                                class="status-tick w-full flex-1 rounded-sm transition-all hover:opacity-80"
                                [ngClass]="{
                                    'bg-green-500': it.status === 'ok',
                                    'bg-red-500': it.status !== 'ok' && it.status !== 'awaiting',
                                    'bg-gray-200 dark:bg-gray-700': it.status === 'awaiting',
                                }"
                                [matTooltip]="
                                    formatDate(it.createdAt) +
                                    (it.responseTime ? ' - ' + it.responseTime + 'ms' : '')
                                "
                                matTooltipPosition="above"
                            ></div>
                        </ng-container>
                        <div
                            *ngIf="!item.data || item.data.length === 0"
                            class="w-full h-full flex items-center justify-center text-gray-400 text-sm"
                        >
                            {{ 'network.no_data' | transloco }}
                        </div>
                    </div>
                </div>

                <!-- Footer -->
                <div
                    class="px-5 py-4 bg-gray-50/50 dark:bg-gray-800/30 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between"
                >
                    <div class="flex flex-col">
                        <span class="text-xs text-gray-400 uppercase font-semibold tracking-wide">{{
                            'network.uptime' | transloco
                        }}</span>
                        <span
                            class="text-lg font-bold"
                            [class.text-green-600]="item.subject.percentage >= 98"
                            [class.text-yellow-600]="
                                item.subject.percentage < 98 && item.subject.percentage >= 90
                            "
                            [class.text-red-600]="item.subject.percentage < 90"
                        >
                            {{ item.subject.percentage | number: '1.0-2' }}%
                        </span>
                    </div>

                    <div class="text-right flex flex-col items-end">
                        <span class="text-xs text-gray-400 uppercase font-semibold tracking-wide">{{
                            'network.last_check' | transloco
                        }}</span>
                        <span class="text-sm font-medium text-gray-700 dark:text-gray-300">
                            {{ formatDate(item.subject.lastDate) || 'N/A' }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`, styles: ["/* src/app/modules/status-check/status-check.component.scss */\n.status-tick {\n  height: 1.5rem;\n  width: 0.375rem;\n  border-radius: 0.125rem;\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 200ms;\n}\n.status-tick:hover {\n  --tw-scale-x: 1.25;\n  --tw-scale-y: 1.25;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n/*# sourceMappingURL=status-check.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StatusCheckComponent, { className: "StatusCheckComponent", filePath: "src/app/modules/status-check/status-check.component.ts", lineNumber: 49 });
})();
export {
  StatusCheckComponent
};
//# sourceMappingURL=chunk-IURFF5KV.js.map
