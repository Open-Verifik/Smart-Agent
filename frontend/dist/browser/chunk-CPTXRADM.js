import {
  AuthModalComponent
} from "./chunk-3W2P7LZN.js";
import "./chunk-GFJLSNKF.js";
import "./chunk-E7LVUBZB.js";
import "./chunk-ZWSCRV34.js";
import "./chunk-LPSMXQSY.js";
import "./chunk-MJXNRHWH.js";
import "./chunk-346ISJSG.js";
import "./chunk-HZKTYM3F.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-EL6Z63TT.js";
import {
  SessionService
} from "./chunk-OVR3OJIF.js";
import {
  MatDialog,
  MatDialogModule,
  MatDialogRef
} from "./chunk-KCV7S453.js";
import "./chunk-Y5VEUI6L.js";
import {
  RouterLink
} from "./chunk-LHOHCIQM.js";
import "./chunk-AY2HQ4EH.js";
import "./chunk-SYP4RNRN.js";
import "./chunk-3YVZWUPK.js";
import "./chunk-L4JZMXIC.js";
import "./chunk-2W5F3UIW.js";
import "./chunk-TX3AVWPC.js";
import "./chunk-OIBNGD5S.js";
import {
  TranslocoModule,
  TranslocoPipe,
  TranslocoService
} from "./chunk-VHMFS3U6.js";
import "./chunk-R4RYJRMO.js";
import {
  environment
} from "./chunk-32YYYLAD.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-SE37W2G4.js";
import {
  CommonModule,
  Component,
  DecimalPipe,
  HttpClient,
  Injectable,
  MatButton,
  MatButtonModule,
  MatIconButton,
  catchError,
  finalize,
  forkJoin,
  inject,
  of,
  setClassMetadata,
  signal,
  tap,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
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
  ɵɵpureFunction2,
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
  ɵɵtextInterpolate2
} from "./chunk-YTOBX75K.js";
import "./chunk-KTESVR3Q.js";

// src/app/modules/home/home.service.ts
var HomeService = class _HomeService {
  constructor() {
    this._httpClient = inject(HttpClient);
    this._sessionService = inject(SessionService);
    this.countData = signal(null);
    this.monthlyData = signal(null);
    this.topSalesData = signal(null);
    this.loading = signal(false);
    this.error = signal(null);
  }
  /**
   * Fetch stats when authenticated. Uses year/month params for count, monthly, top-sales.
   */
  fetchStats() {
    if (!this._sessionService.hasValidAuthentication()) {
      this.countData.set(null);
      this.monthlyData.set(null);
      this.topSalesData.set(null);
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
    forkJoin({ count: count$, monthly: monthly$, topSales: topSales$ }).pipe(finalize(() => this.loading.set(false))).subscribe();
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
var _c0 = (a0, a1) => ({ current: a0, total: a1 });
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
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(7, 10, "home.tutorial.stepOf", \u0275\u0275pureFunction2(19, _c0, ctx.currentStep() + 1, ctx.steps.length)), " ");
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
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item._id;
function HomeComponent_Conditional_12_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "mat-spinner", 15);
    \u0275\u0275elementStart(2, "span", 16);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "home.stats.loading"));
  }
}
function HomeComponent_Conditional_12_Conditional_1_Conditional_27_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "span", 26);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 27);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const api_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getApiDisplayName(api_r1._id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", api_r1.total, " ", \u0275\u0275pipeBind1(5, 3, "home.stats.requests"), "");
  }
}
function HomeComponent_Conditional_12_Conditional_1_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "h3", 24);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ul", 25);
    \u0275\u0275repeaterCreate(5, HomeComponent_Conditional_12_Conditional_1_Conditional_27_For_6_Template, 6, 5, "li", null, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "home.stats.topApis"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.getTopApis());
  }
}
function HomeComponent_Conditional_12_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275declareLet(0);
    \u0275\u0275elementStart(1, "div", 17)(2, "div", 18)(3, "div", 19);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 20);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 18)(9, "div", 21);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 20);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 18)(15, "div", 22);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 20);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 18)(21, "div", 19);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 20);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(27, HomeComponent_Conditional_12_Conditional_1_Conditional_27_Template, 7, 3, "div", 23);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    const totals_r3 = ctx_r1.getTotals();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(totals_r3.total);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 9, "home.stats.totalValidations"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(totals_r3.ok);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 11, "home.stats.successful"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(totals_r3.failed);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 13, "home.stats.failed"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(23, 15, totals_r3.credits, "1.0-3"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 18, "home.stats.creditsUsed"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.getTopApis().length > 0 ? 27 : -1);
  }
}
function HomeComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, HomeComponent_Conditional_12_Conditional_0_Template, 5, 3, "div", 14)(1, HomeComponent_Conditional_12_Conditional_1_Template, 28, 20);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.loading() ? 0 : 1);
  }
}
function HomeComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "p", 11);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 12);
    \u0275\u0275listener("click", function HomeComponent_Conditional_13_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openAuthModal());
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
function HomeComponent_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 8)(1, "div", 28)(2, "mat-icon");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div")(5, "div", 29);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 30);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    \u0275\u0275property("routerLink", item_r5.link);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r5.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 4, item_r5.titleKey));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 6, item_r5.subtitleKey));
  }
}
var HomeComponent = class _HomeComponent {
  constructor() {
    this._homeService = inject(HomeService);
    this._sessionService = inject(SessionService);
    this._matDialog = inject(MatDialog);
    this._transloco = inject(TranslocoService);
    this.isAuthenticated = signal(false);
    this.loading = this._homeService.loading;
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
  }
  ngOnInit() {
    this.isAuthenticated.set(this._sessionService.hasValidAuthentication());
    this._homeService.fetchStats();
  }
  getTotals() {
    return this._homeService.getAggregatedTotals();
  }
  getTopApis() {
    const data = this._homeService.topSalesData();
    return (data ?? []).slice(0, 5);
  }
  /** Display name for API code - uses appFeatures translation or falls back to code */
  getApiDisplayName(code) {
    const key = `appFeatures.${code}.title`;
    const translated = this._transloco.translate(key);
    return translated !== key ? translated : code;
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
  static {
    this.\u0275fac = function HomeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HomeComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], decls: 33, vars: 22, consts: [[1, "home-container"], [1, "mb-8"], [1, "text-2xl", "font-bold", "text-slate-900", "dark:text-white", "mb-2"], [1, "text-slate-600", "dark:text-slate-400", "text-sm", "max-w-2xl"], [1, "text-lg", "font-semibold", "text-slate-800", "dark:text-slate-200", "mb-4"], [1, "stat-card", "p-6", "text-center"], [1, "shortcuts-section"], [1, "shortcuts-grid"], [1, "shortcut-card", 3, "routerLink"], [1, "tutorial-section"], [1, "text-lg", "font-semibold", "text-slate-800", "dark:text-slate-200", "mb-2"], [1, "text-slate-600", "dark:text-slate-400", "text-sm", "mb-4"], ["mat-flat-button", "", "color", "primary", 3, "click"], [1, "mr-2"], [1, "flex", "items-center", "gap-2", "py-8"], ["diameter", "24"], [1, "text-slate-500", "text-sm"], [1, "stats-grid"], [1, "stat-card"], [1, "stat-value"], [1, "stat-label"], [1, "stat-value", "text-green-600", "dark:text-green-400"], [1, "stat-value", "text-red-600", "dark:text-red-400"], [1, "mt-6"], [1, "text-sm", "font-medium", "text-slate-600", "dark:text-slate-400", "mb-3"], [1, "top-apis-list"], [1, "text-sm", "text-slate-700", "dark:text-slate-300"], [1, "api-count-badge"], [1, "shortcut-icon"], [1, "shortcut-title"], [1, "shortcut-subtitle"]], template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6);
        \u0275\u0275pipe(7, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "section", 1)(9, "h2", 4);
        \u0275\u0275text(10);
        \u0275\u0275pipe(11, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275template(12, HomeComponent_Conditional_12_Template, 2, 1)(13, HomeComponent_Conditional_13_Template, 7, 6, "div", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "section", 6)(15, "h2", 4);
        \u0275\u0275text(16);
        \u0275\u0275pipe(17, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "div", 7);
        \u0275\u0275repeaterCreate(19, HomeComponent_For_20_Template, 11, 8, "a", 8, _forTrack0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "section", 9)(22, "h2", 10);
        \u0275\u0275text(23);
        \u0275\u0275pipe(24, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "p", 11);
        \u0275\u0275text(26);
        \u0275\u0275pipe(27, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "button", 12);
        \u0275\u0275listener("click", function HomeComponent_Template_button_click_28_listener() {
          return ctx.openTutorial();
        });
        \u0275\u0275elementStart(29, "mat-icon", 13);
        \u0275\u0275text(30, "school");
        \u0275\u0275elementEnd();
        \u0275\u0275text(31);
        \u0275\u0275pipe(32, "transloco");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 8, "home.welcome.title"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 10, "home.welcome.subtitle"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 12, "home.stats.title"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.isAuthenticated() ? 12 : 13);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 14, "home.shortcuts.title"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.shortcuts);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(24, 16, "home.tutorial.title"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(27, 18, "home.tutorial.description"), " ");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(32, 20, "home.tutorial.start"), " ");
      }
    }, dependencies: [
      CommonModule,
      DecimalPipe,
      MatButtonModule,
      MatButton,
      MatIconModule,
      MatIcon,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      RouterLink,
      TranslocoModule,
      TranslocoPipe
    ], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  min-height: 100%;\n}\n.home-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 2rem 1.5rem;\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));\n  gap: 1rem;\n  margin-bottom: 2rem;\n}\n.stat-card[_ngcontent-%COMP%] {\n  padding: 1.25rem;\n  border-radius: 12px;\n  border: 1px solid rgba(148, 163, 184, 0.2);\n  background: rgba(248, 250, 252, 0.5);\n}\n.dark[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%] {\n  background: rgba(15, 23, 42, 0.5);\n  border-color: rgba(148, 163, 184, 0.1);\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: rgb(15, 23, 42);\n}\n.dark[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  color: rgb(248, 250, 252);\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: rgb(100, 116, 139);\n  margin-top: 0.25rem;\n}\n.dark[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  color: rgb(148, 163, 184);\n}\n.shortcuts-section[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.shortcuts-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));\n  gap: 1rem;\n}\n.shortcut-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n  padding: 1.25rem;\n  border-radius: 12px;\n  border: 1px solid rgba(148, 163, 184, 0.2);\n  background: rgba(255, 255, 255, 0.8);\n  text-decoration: none;\n  color: inherit;\n  transition: all 0.2s ease;\n}\n.shortcut-card[_ngcontent-%COMP%]:hover {\n  border-color: rgb(99, 102, 241);\n  background: rgba(99, 102, 241, 0.05);\n  transform: translateY(-2px);\n}\n.dark[_ngcontent-%COMP%]   .shortcut-card[_ngcontent-%COMP%] {\n  background: rgba(15, 23, 42, 0.6);\n  border-color: rgba(148, 163, 184, 0.1);\n}\n.dark[_ngcontent-%COMP%]   .shortcut-card[_ngcontent-%COMP%]:hover {\n  border-color: rgb(99, 102, 241);\n  background: rgba(99, 102, 241, 0.1);\n}\n.shortcut-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  background: rgba(99, 102, 241, 0.1);\n  color: rgb(99, 102, 241);\n}\n.shortcut-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 1rem;\n  margin-bottom: 0.25rem;\n}\n.shortcut-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: rgb(100, 116, 139);\n}\n.dark[_ngcontent-%COMP%]   .shortcut-subtitle[_ngcontent-%COMP%] {\n  color: rgb(148, 163, 184);\n}\n.tutorial-section[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  border-radius: 12px;\n  border: 1px solid rgba(148, 163, 184, 0.2);\n  background: rgba(248, 250, 252, 0.5);\n}\n.dark[_ngcontent-%COMP%]   .tutorial-section[_ngcontent-%COMP%] {\n  background: rgba(15, 23, 42, 0.5);\n  border-color: rgba(148, 163, 184, 0.1);\n}\n.top-apis-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.top-apis-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.875rem 1.25rem;\n  border-radius: 12px;\n  background: rgba(255, 255, 255, 0.5);\n  border: 1px solid rgba(148, 163, 184, 0.1);\n  transition: all 0.2s ease;\n}\n.top-apis-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background: rgb(255, 255, 255);\n  border-color: rgba(99, 102, 241, 0.3);\n  transform: translateX(4px);\n}\n.dark[_ngcontent-%COMP%]   .top-apis-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  background: rgba(30, 41, 59, 0.4);\n  border-color: rgba(148, 163, 184, 0.05);\n}\n.dark[_ngcontent-%COMP%]   .top-apis-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background: rgba(30, 41, 59, 0.8);\n  border-color: rgba(99, 102, 241, 0.4);\n}\n.api-count-badge[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.75rem;\n  border-radius: 9999px;\n  font-size: 0.7rem;\n  font-weight: 600;\n  background: rgba(99, 102, 241, 0.1);\n  color: rgb(79, 70, 229);\n}\n.dark[_ngcontent-%COMP%]   .api-count-badge[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.2);\n  color: rgb(165, 180, 252);\n}\n/*# sourceMappingURL=home.component.css.map */"] });
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

                @if (getTopApis().length > 0) {
                    <div class="mt-6">
                        <h3 class="text-sm font-medium text-slate-600 dark:text-slate-400 mb-3">
                            {{ 'home.stats.topApis' | transloco }}
                        </h3>
                        <ul class="top-apis-list">
                            @for (api of getTopApis(); track api._id) {
                                <li>
                                    <span class="text-sm text-slate-700 dark:text-slate-300">{{ getApiDisplayName(api._id) }}</span>
                                    <span class="api-count-badge">{{ api.total }} {{ 'home.stats.requests' | transloco }}</span>
                                </li>
                            }
                        </ul>
                    </div>
                }
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
`, styles: ["/* src/app/modules/home/home.component.scss */\n:host {\n  display: block;\n  min-height: 100%;\n}\n.home-container {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 2rem 1.5rem;\n}\n.stats-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));\n  gap: 1rem;\n  margin-bottom: 2rem;\n}\n.stat-card {\n  padding: 1.25rem;\n  border-radius: 12px;\n  border: 1px solid rgba(148, 163, 184, 0.2);\n  background: rgba(248, 250, 252, 0.5);\n}\n.dark .stat-card {\n  background: rgba(15, 23, 42, 0.5);\n  border-color: rgba(148, 163, 184, 0.1);\n}\n.stat-value {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: rgb(15, 23, 42);\n}\n.dark .stat-value {\n  color: rgb(248, 250, 252);\n}\n.stat-label {\n  font-size: 0.75rem;\n  color: rgb(100, 116, 139);\n  margin-top: 0.25rem;\n}\n.dark .stat-label {\n  color: rgb(148, 163, 184);\n}\n.shortcuts-section {\n  margin-bottom: 2rem;\n}\n.shortcuts-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));\n  gap: 1rem;\n}\n.shortcut-card {\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n  padding: 1.25rem;\n  border-radius: 12px;\n  border: 1px solid rgba(148, 163, 184, 0.2);\n  background: rgba(255, 255, 255, 0.8);\n  text-decoration: none;\n  color: inherit;\n  transition: all 0.2s ease;\n}\n.shortcut-card:hover {\n  border-color: rgb(99, 102, 241);\n  background: rgba(99, 102, 241, 0.05);\n  transform: translateY(-2px);\n}\n.dark .shortcut-card {\n  background: rgba(15, 23, 42, 0.6);\n  border-color: rgba(148, 163, 184, 0.1);\n}\n.dark .shortcut-card:hover {\n  border-color: rgb(99, 102, 241);\n  background: rgba(99, 102, 241, 0.1);\n}\n.shortcut-icon {\n  width: 48px;\n  height: 48px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  background: rgba(99, 102, 241, 0.1);\n  color: rgb(99, 102, 241);\n}\n.shortcut-title {\n  font-weight: 600;\n  font-size: 1rem;\n  margin-bottom: 0.25rem;\n}\n.shortcut-subtitle {\n  font-size: 0.8rem;\n  color: rgb(100, 116, 139);\n}\n.dark .shortcut-subtitle {\n  color: rgb(148, 163, 184);\n}\n.tutorial-section {\n  padding: 1.5rem;\n  border-radius: 12px;\n  border: 1px solid rgba(148, 163, 184, 0.2);\n  background: rgba(248, 250, 252, 0.5);\n}\n.dark .tutorial-section {\n  background: rgba(15, 23, 42, 0.5);\n  border-color: rgba(148, 163, 184, 0.1);\n}\n.top-apis-list {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.top-apis-list li {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.875rem 1.25rem;\n  border-radius: 12px;\n  background: rgba(255, 255, 255, 0.5);\n  border: 1px solid rgba(148, 163, 184, 0.1);\n  transition: all 0.2s ease;\n}\n.top-apis-list li:hover {\n  background: rgb(255, 255, 255);\n  border-color: rgba(99, 102, 241, 0.3);\n  transform: translateX(4px);\n}\n.dark .top-apis-list li {\n  background: rgba(30, 41, 59, 0.4);\n  border-color: rgba(148, 163, 184, 0.05);\n}\n.dark .top-apis-list li:hover {\n  background: rgba(30, 41, 59, 0.8);\n  border-color: rgba(99, 102, 241, 0.4);\n}\n.api-count-badge {\n  padding: 0.25rem 0.75rem;\n  border-radius: 9999px;\n  font-size: 0.7rem;\n  font-weight: 600;\n  background: rgba(99, 102, 241, 0.1);\n  color: rgb(79, 70, 229);\n}\n.dark .api-count-badge {\n  background: rgba(99, 102, 241, 0.2);\n  color: rgb(165, 180, 252);\n}\n/*# sourceMappingURL=home.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src/app/modules/home/home.component.ts", lineNumber: 36 });
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
//# sourceMappingURL=chunk-CPTXRADM.js.map
