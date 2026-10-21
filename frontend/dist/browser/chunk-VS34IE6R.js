import {
  DemoSandboxResultBannerComponent
} from "./chunk-ATI2CBSL.js";
import {
  DemoScannerShellComponent
} from "./chunk-MOO2AP2F.js";
import {
  DemoCaptureOptionHeadingComponent,
  DemoChooseOneCalloutComponent,
  DemoOrDividerComponent,
  FaceGuidedCameraComponent
} from "./chunk-P2NNO7TD.js";
import {
  DemoUploadImageButtonComponent
} from "./chunk-P4F7DUX6.js";
import {
  formatScore,
  isPlainObject
} from "./chunk-CRJOXNLH.js";
import {
  DemoRasterImageComponent
} from "./chunk-T2IPWVBN.js";
import {
  DemoRelatedDocsSectionComponent
} from "./chunk-N5HGB6KO.js";
import {
  BiometricsDemoApiService,
  DemoPageShellComponent,
  fileToBase64,
  getDemoOs
} from "./chunk-YULMXIQT.js";
import "./chunk-M4M2RXHQ.js";
import "./chunk-B4YUVLJ7.js";
import "./chunk-FWYUPNZS.js";
import "./chunk-VWOHFVN5.js";
import "./chunk-TXEVGTMX.js";
import "./chunk-6VDSDVMZ.js";
import "./chunk-BCBZJBUY.js";
import "./chunk-WSS6AKQE.js";
import "./chunk-EVWXSBKG.js";
import "./chunk-M5KDIZH5.js";
import "./chunk-OIBNGD5S.js";
import "./chunk-WOW6NB5H.js";
import "./chunk-YSJP7SXK.js";
import "./chunk-J762DGD5.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  RangeValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-DVRFI3SJ.js";
import {
  TranslocoModule,
  TranslocoPipe,
  TranslocoService
} from "./chunk-R5W3A6HI.js";
import "./chunk-HYFP557I.js";
import "./chunk-PMCYMBOC.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  EventEmitter,
  Input,
  JsonPipe,
  NgClass,
  Output,
  ViewChild,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-PNPEHISK.js";
import {
  __async
} from "./chunk-F5M2C4EZ.js";

// src/app/modules/smart-enroll/demos/shared/search-active-user-result.component.ts
var _c0 = (a0, a1) => ({ "bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 shadow-sm border border-slate-200/20": a0, "text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 bg-transparent": a1 });
var _c1 = (a0) => ({ n: a0 });
function SearchActiveUserResultComponent_Conditional_8_Conditional_8_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "dt", 14);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "dd");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 6, "smartEnrollDemos.searchActiveUserResult.passedField"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("text-emerald-400", ctx_r1.liveness["passed"])("text-error", !ctx_r1.liveness["passed"]);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 8, ctx_r1.liveness["passed"] ? "smartEnrollDemos.common.yes" : "smartEnrollDemos.common.no"), " ");
  }
}
function SearchActiveUserResultComponent_Conditional_8_Conditional_8_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "dt", 14);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "dd", 15);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "smartEnrollDemos.searchActiveUserResult.score"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.formatScoreValue(ctx_r1.liveness["score"]));
  }
}
function SearchActiveUserResultComponent_Conditional_8_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "p", 11);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "dl", 12);
    \u0275\u0275template(5, SearchActiveUserResultComponent_Conditional_8_Conditional_8_Conditional_5_Template, 7, 10, "div", 13)(6, SearchActiveUserResultComponent_Conditional_8_Conditional_8_Conditional_6_Template, 6, 4, "div", 13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "smartEnrollDemos.searchActiveUserResult.liveness"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(typeof ctx_r1.liveness["passed"] === "boolean" ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(typeof ctx_r1.liveness["score"] === "number" ? 6 : -1);
  }
}
function SearchActiveUserResultComponent_Conditional_8_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "smartEnrollDemos.searchActiveUserResult.noMatchesThreshold"), " ");
  }
}
function SearchActiveUserResultComponent_Conditional_8_Conditional_10_For_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const match_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(match_r3["id"]);
  }
}
function SearchActiveUserResultComponent_Conditional_8_Conditional_10_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 16)(2, "div")(3, "p", 17);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 6);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, SearchActiveUserResultComponent_Conditional_8_Conditional_10_For_2_Conditional_9_Template, 2, 1, "p", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 19)(11, "p", 20);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p", 21);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const match_r3 = ctx.$implicit;
    const \u0275$index_64_r4 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 5, "smartEnrollDemos.searchActiveUserResult.matchNumber", \u0275\u0275pureFunction1(12, _c1, \u0275$index_64_r4 + 1)));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(match_r3["name"] || \u0275\u0275pipeBind1(8, 8, "smartEnrollDemos.common.unknownPerson"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(match_r3["id"] ? 9 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 10, "smartEnrollDemos.searchActiveUserResult.similarity"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.formatScoreValue(typeof match_r3["score"] === "number" ? match_r3["score"] : null));
  }
}
function SearchActiveUserResultComponent_Conditional_8_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275repeaterCreate(1, SearchActiveUserResultComponent_Conditional_8_Conditional_10_For_2_Template, 16, 14, "div", 8, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.matches);
  }
}
function SearchActiveUserResultComponent_Conditional_8_Conditional_11_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.signature.message);
  }
}
function SearchActiveUserResultComponent_Conditional_8_Conditional_11_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 18);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(2, 2, "smartEnrollDemos.searchActiveUserResult.requestIdPrefix"), " ", ctx_r1.requestId, "");
  }
}
function SearchActiveUserResultComponent_Conditional_8_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "p", 22);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, SearchActiveUserResultComponent_Conditional_8_Conditional_11_Conditional_4_Template, 2, 1, "p", 23)(5, SearchActiveUserResultComponent_Conditional_8_Conditional_11_Conditional_5_Template, 3, 4, "p", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "smartEnrollDemos.searchActiveUserResult.responseSignature"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional((ctx_r1.signature == null ? null : ctx_r1.signature.message) ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.requestId ? 5 : -1);
  }
}
function SearchActiveUserResultComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 5)(2, "p", 6);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 7);
    \u0275\u0275listener("click", function SearchActiveUserResultComponent_Conditional_8_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.reset.emit());
    });
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, SearchActiveUserResultComponent_Conditional_8_Conditional_8_Template, 7, 5, "div", 8)(9, SearchActiveUserResultComponent_Conditional_8_Conditional_9_Template, 3, 3, "div", 9)(10, SearchActiveUserResultComponent_Conditional_8_Conditional_10_Template, 3, 0, "div", 4)(11, SearchActiveUserResultComponent_Conditional_8_Conditional_11_Template, 6, 5, "div", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 5, "smartEnrollDemos.searchActiveUserResult.activeUserSearchResults"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 7, "smartEnrollDemos.searchActiveUserResult.reset"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.liveness ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.matches.length === 0 ? 9 : 10);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.signature || ctx_r1.requestId ? 11 : -1);
  }
}
function SearchActiveUserResultComponent_Conditional_9_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "smartEnrollDemos.searchActiveUserResult.copied"), " ");
  }
}
function SearchActiveUserResultComponent_Conditional_9_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "smartEnrollDemos.searchActiveUserResult.copyFailed"), " ");
  }
}
function SearchActiveUserResultComponent_Conditional_9_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "smartEnrollDemos.searchActiveUserResult.copy"), " ");
  }
}
function SearchActiveUserResultComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "p", 6);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 7);
    \u0275\u0275listener("click", function SearchActiveUserResultComponent_Conditional_9_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.copyRaw());
    });
    \u0275\u0275template(6, SearchActiveUserResultComponent_Conditional_9_Conditional_6_Template, 2, 3)(7, SearchActiveUserResultComponent_Conditional_9_Conditional_7_Template, 2, 3)(8, SearchActiveUserResultComponent_Conditional_9_Conditional_8_Template, 2, 3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "pre", 24);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "json");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 3, "smartEnrollDemos.searchActiveUserResult.rawResponse"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.copyState === "copied" ? 6 : ctx_r1.copyState === "error" ? 7 : 8);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 5, ctx_r1.result));
  }
}
var SearchActiveUserResultComponent = class _SearchActiveUserResultComponent {
  constructor() {
    this.result = null;
    this.reset = new EventEmitter();
    this.activeTab = "matches";
    this.copyState = "idle";
    this.matches = [];
    this.liveness = null;
    this.signature = null;
    this.requestId = "";
    this._transloco = inject(TranslocoService);
    this._cdr = inject(ChangeDetectorRef);
  }
  ngOnChanges() {
    this.parseResult();
  }
  setTab(tab) {
    this.activeTab = tab;
    this._cdr.markForCheck();
  }
  copyRaw() {
    return __async(this, null, function* () {
      if (!this.result)
        return;
      try {
        yield navigator.clipboard.writeText(JSON.stringify(this.result, null, 2));
        this.copyState = "copied";
      } catch {
        this.copyState = "error";
      }
      this._cdr.markForCheck();
      window.setTimeout(() => {
        this.copyState = "idle";
        this._cdr.markForCheck();
      }, 1800);
    });
  }
  formatScoreValue(score) {
    return formatScore(score, this._transloco.translate("smartEnrollDemos.common.scoreNA"));
  }
  parseResult() {
    const data = isPlainObject(this.result?.["data"]) ? this.result["data"] : null;
    this.liveness = isPlainObject(data?.["liveness"]) ? data["liveness"] : null;
    this.matches = Array.isArray(data?.["persons"]) ? data["persons"].filter(isPlainObject) : [];
    const sig = this.result?.["signature"];
    this.signature = isPlainObject(sig) ? {
      dateTime: typeof sig["dateTime"] === "string" ? sig["dateTime"] : "",
      message: typeof sig["message"] === "string" ? sig["message"] : ""
    } : null;
    this.requestId = typeof this.result?.["id"] === "string" ? this.result["id"] : "";
  }
  static {
    this.\u0275fac = function SearchActiveUserResultComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SearchActiveUserResultComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SearchActiveUserResultComponent, selectors: [["app-search-active-user-result"]], inputs: { result: "result" }, outputs: { reset: "reset" }, features: [\u0275\u0275NgOnChangesFeature], decls: 10, vars: 15, consts: [[1, "rounded-2xl", "bg-surface-container-low", "border", "border-primary/20", "p-6", "space-y-4"], [1, "inline-flex", "rounded-xl", "p-1", "bg-slate-100/80", "dark:bg-slate-900/80", "border", "border-slate-200/60", "dark:border-slate-800/60", "gap-1.5"], ["type", "button", 1, "px-3", "py-1.5", "text-xs", "font-semibold", "rounded-lg", "transition-all", "duration-150", 3, "click", "ngClass"], [1, "space-y-4"], [1, "space-y-3"], [1, "flex", "items-center", "justify-between"], [1, "font-bold", "text-on-surface"], ["type", "button", 1, "text-xs", "text-primary", "underline", 3, "click"], [1, "rounded-xl", "border", "border-outline-variant/20", "bg-surface-container-high/40", "p-4"], [1, "rounded-xl", "border", "border-outline-variant/20", "bg-surface-container-high/40", "p-4", "text-sm", "text-on-surface-variant"], [1, "rounded-xl", "border", "border-outline-variant/20", "bg-surface-container-high/30", "p-4", "text-sm", "space-y-1"], [1, "font-semibold", "text-on-surface", "mb-2"], [1, "space-y-1.5", "text-sm"], [1, "grid", "grid-cols-1", "sm:grid-cols-[minmax(0,10rem)_1fr]", "gap-x-3", "gap-y-1"], [1, "text-on-surface-variant", "font-medium"], [1, "text-on-surface"], [1, "flex", "flex-col", "sm:flex-row", "sm:items-start", "sm:justify-between", "gap-3"], [1, "text-sm", "text-on-surface-variant"], [1, "font-mono", "text-xs", "text-on-surface-variant", "break-all"], [1, "rounded-lg", "bg-primary/10", "border", "border-primary/25", "px-3", "py-2"], [1, "text-[0.65rem]", "uppercase", "tracking-wide", "text-primary/80"], [1, "font-bold", "text-primary"], [1, "font-semibold", "text-on-surface"], [1, "text-on-surface-variant"], [1, "text-[0.65rem]", "font-mono", "bg-surface-container-high/80", "rounded-lg", "p-3", "overflow-x-auto", "text-on-surface", "whitespace-pre-wrap"]], template: function SearchActiveUserResultComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "button", 2);
        \u0275\u0275listener("click", function SearchActiveUserResultComponent_Template_button_click_2_listener() {
          return ctx.setTab("matches");
        });
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "button", 2);
        \u0275\u0275listener("click", function SearchActiveUserResultComponent_Template_button_click_5_listener() {
          return ctx.setTab("raw");
        });
        \u0275\u0275text(6);
        \u0275\u0275pipe(7, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(8, SearchActiveUserResultComponent_Conditional_8_Template, 12, 9, "div", 3)(9, SearchActiveUserResultComponent_Conditional_9_Template, 12, 7, "div", 4);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(9, _c0, ctx.activeTab === "matches", ctx.activeTab !== "matches"));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 5, "smartEnrollDemos.searchActiveUserResult.tabMatches"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(12, _c0, ctx.activeTab === "raw", ctx.activeTab !== "raw"));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 7, "smartEnrollDemos.searchActiveUserResult.tabRaw"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.activeTab === "matches" ? 8 : 9);
      }
    }, dependencies: [CommonModule, NgClass, JsonPipe, TranslocoModule, TranslocoPipe], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SearchActiveUserResultComponent, [{
    type: Component,
    args: [{ selector: "app-search-active-user-result", standalone: true, imports: [CommonModule, TranslocoModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="rounded-2xl bg-surface-container-low border border-primary/20 p-6 space-y-4">\r
    <div class="inline-flex rounded-xl p-1 bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200/60 dark:border-slate-800/60 gap-1.5">\r
        <button\r
            type="button"\r
            (click)="setTab('matches')"\r
            class="px-3 py-1.5 text-xs font-semibold rounded-lg transition-all duration-150"\r
            [ngClass]="{\r
                'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 shadow-sm border border-slate-200/20': activeTab === 'matches',\r
                'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 bg-transparent': activeTab !== 'matches'\r
            }"\r
        >\r
            {{ 'smartEnrollDemos.searchActiveUserResult.tabMatches' | transloco }}\r
        </button>\r
        <button\r
            type="button"\r
            (click)="setTab('raw')"\r
            class="px-3 py-1.5 text-xs font-semibold rounded-lg transition-all duration-150"\r
            [ngClass]="{\r
                'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 shadow-sm border border-slate-200/20': activeTab === 'raw',\r
                'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 bg-transparent': activeTab !== 'raw'\r
            }"\r
        >\r
            {{ 'smartEnrollDemos.searchActiveUserResult.tabRaw' | transloco }}\r
        </button>\r
    </div>\r
\r
    @if (activeTab === 'matches') {\r
        <div class="space-y-4">\r
            <div class="flex items-center justify-between">\r
                <p class="font-bold text-on-surface">{{ 'smartEnrollDemos.searchActiveUserResult.activeUserSearchResults' | transloco }}</p>\r
                <button type="button" (click)="reset.emit()" class="text-xs text-primary underline">{{ 'smartEnrollDemos.searchActiveUserResult.reset' | transloco }}</button>\r
            </div>\r
\r
            @if (liveness) {\r
                <div class="rounded-xl border border-outline-variant/20 bg-surface-container-high/40 p-4">\r
                    <p class="font-semibold text-on-surface mb-2">{{ 'smartEnrollDemos.searchActiveUserResult.liveness' | transloco }}</p>\r
                    <dl class="space-y-1.5 text-sm">\r
                        @if (typeof liveness['passed'] === 'boolean') {\r
                            <div class="grid grid-cols-1 sm:grid-cols-[minmax(0,10rem)_1fr] gap-x-3 gap-y-1">\r
                                <dt class="text-on-surface-variant font-medium">{{ 'smartEnrollDemos.searchActiveUserResult.passedField' | transloco }}</dt>\r
                                <dd [class.text-emerald-400]="liveness['passed']" [class.text-error]="!liveness['passed']">\r
                                    {{ (liveness['passed'] ? 'smartEnrollDemos.common.yes' : 'smartEnrollDemos.common.no') | transloco }}\r
                                </dd>\r
                            </div>\r
                        }\r
                        @if (typeof liveness['score'] === 'number') {\r
                            <div class="grid grid-cols-1 sm:grid-cols-[minmax(0,10rem)_1fr] gap-x-3 gap-y-1">\r
                                <dt class="text-on-surface-variant font-medium">{{ 'smartEnrollDemos.searchActiveUserResult.score' | transloco }}</dt>\r
                                <dd class="text-on-surface">{{ formatScoreValue(liveness['score']) }}</dd>\r
                            </div>\r
                        }\r
                    </dl>\r
                </div>\r
            }\r
\r
            @if (matches.length === 0) {\r
                <div class="rounded-xl border border-outline-variant/20 bg-surface-container-high/40 p-4 text-sm text-on-surface-variant">\r
                    {{ 'smartEnrollDemos.searchActiveUserResult.noMatchesThreshold' | transloco }}\r
                </div>\r
            } @else {\r
                <div class="space-y-3">\r
                    @for (match of matches; track $index; let i = $index) {\r
                        <div class="rounded-xl border border-outline-variant/20 bg-surface-container-high/40 p-4">\r
                            <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">\r
                                <div>\r
                                    <p class="text-sm text-on-surface-variant">{{ 'smartEnrollDemos.searchActiveUserResult.matchNumber' | transloco: { n: i + 1 } }}</p>\r
                                    <p class="font-bold text-on-surface">{{ match['name'] || ('smartEnrollDemos.common.unknownPerson' | transloco) }}</p>\r
                                    @if (match['id']) { <p class="font-mono text-xs text-on-surface-variant break-all">{{ match['id'] }}</p> }\r
                                </div>\r
                                <div class="rounded-lg bg-primary/10 border border-primary/25 px-3 py-2">\r
                                    <p class="text-[0.65rem] uppercase tracking-wide text-primary/80">{{ 'smartEnrollDemos.searchActiveUserResult.similarity' | transloco }}</p>\r
                                    <p class="font-bold text-primary">{{ formatScoreValue(typeof match['score'] === 'number' ? match['score'] : null) }}</p>\r
                                </div>\r
                            </div>\r
                        </div>\r
                    }\r
                </div>\r
            }\r
\r
            @if (signature || requestId) {\r
                <div class="rounded-xl border border-outline-variant/20 bg-surface-container-high/30 p-4 text-sm space-y-1">\r
                    <p class="font-semibold text-on-surface">{{ 'smartEnrollDemos.searchActiveUserResult.responseSignature' | transloco }}</p>\r
                    @if (signature?.message) { <p class="text-on-surface-variant">{{ signature!.message }}</p> }\r
                    @if (requestId) { <p class="font-mono text-xs text-on-surface-variant break-all">{{ 'smartEnrollDemos.searchActiveUserResult.requestIdPrefix' | transloco }} {{ requestId }}</p> }\r
                </div>\r
            }\r
        </div>\r
    } @else {\r
        <div class="space-y-3">\r
            <div class="flex items-center justify-between">\r
                <p class="font-bold text-on-surface">{{ 'smartEnrollDemos.searchActiveUserResult.rawResponse' | transloco }}</p>\r
                <button type="button" (click)="copyRaw()" class="text-xs text-primary underline">\r
                    @if (copyState === 'copied') { {{ 'smartEnrollDemos.searchActiveUserResult.copied' | transloco }} }\r
                    @else if (copyState === 'error') { {{ 'smartEnrollDemos.searchActiveUserResult.copyFailed' | transloco }} }\r
                    @else { {{ 'smartEnrollDemos.searchActiveUserResult.copy' | transloco }} }\r
                </button>\r
            </div>\r
            <pre class="text-[0.65rem] font-mono bg-surface-container-high/80 rounded-lg p-3 overflow-x-auto text-on-surface whitespace-pre-wrap">{{ result | json }}</pre>\r
        </div>\r
    }\r
</div>\r
` }]
  }], null, { result: [{
    type: Input,
    args: [{ required: true }]
  }], reset: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SearchActiveUserResultComponent, { className: "SearchActiveUserResultComponent", filePath: "src/app/modules/smart-enroll/demos/shared/search-active-user-result.component.ts", lineNumber: 24 });
})();

// src/app/modules/smart-enroll/demos/pages/search-active-user/search-active-user-demo.component.ts
var _c02 = ["fileInput"];
var _c12 = (a0) => ({ score: a0 });
function SearchActiveUserDemoComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 4);
  }
}
function SearchActiveUserDemoComponent_Conditional_9_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "app-demo-choose-one-callout", 20);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementStart(3, "section", 21);
    \u0275\u0275element(4, "app-demo-capture-option-heading", 22);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementStart(7, "app-demo-scanner-shell")(8, "div", 23)(9, "app-face-guided-camera", 24);
    \u0275\u0275listener("captured", function SearchActiveUserDemoComponent_Conditional_9_Conditional_27_Template_app_face_guided_camera_captured_9_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onCapture($event));
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275element(10, "app-demo-or-divider");
    \u0275\u0275elementStart(11, "section", 25);
    \u0275\u0275element(12, "app-demo-capture-option-heading", 26);
    \u0275\u0275pipe(13, "transloco");
    \u0275\u0275pipe(14, "transloco");
    \u0275\u0275elementStart(15, "app-demo-upload-image-button", 27);
    \u0275\u0275pipe(16, "transloco");
    \u0275\u0275pipe(17, "transloco");
    \u0275\u0275listener("clicked", function SearchActiveUserDemoComponent_Conditional_9_Conditional_27_Template_app_demo_upload_image_button_clicked_15_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.triggerFilePicker());
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("description", \u0275\u0275pipeBind1(2, 11, "smartEnrollDemos.searchActiveUser.chooseOneDescription"));
    \u0275\u0275advance(3);
    \u0275\u0275property("title", \u0275\u0275pipeBind1(5, 13, "smartEnrollDemos.searchActiveUser.cameraTitle"))("subtitle", \u0275\u0275pipeBind1(6, 15, "smartEnrollDemos.searchActiveUser.cameraSubtitle"));
    \u0275\u0275advance(5);
    \u0275\u0275property("fillFrame", true)("hideIdleExplainer", true)("disabled", ctx_r1.loading)("captureSuccessFeedbackMs", 750);
    \u0275\u0275advance(3);
    \u0275\u0275property("title", \u0275\u0275pipeBind1(13, 17, "smartEnrollDemos.searchActiveUser.uploadTitle"))("subtitle", \u0275\u0275pipeBind1(14, 19, "smartEnrollDemos.searchActiveUser.uploadSubtitle"));
    \u0275\u0275advance(3);
    \u0275\u0275property("primaryText", \u0275\u0275pipeBind1(16, 21, "smartEnrollDemos.searchActiveUser.uploadPrimary"))("secondaryText", \u0275\u0275pipeBind1(17, 23, "smartEnrollDemos.searchActiveUser.uploadSecondary"));
  }
}
function SearchActiveUserDemoComponent_Conditional_9_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275element(1, "app-demo-raster-image", 28);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", ctx_r1.previewHighlighted ? "border-emerald-400/50 ring-4 ring-emerald-400/20" : "border-frost");
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.preview)("alt", \u0275\u0275pipeBind1(2, 3, "smartEnrollDemos.searchActiveUser.previewAlt"));
  }
}
function SearchActiveUserDemoComponent_Conditional_9_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 29);
    \u0275\u0275listener("click", function SearchActiveUserDemoComponent_Conditional_9_Conditional_29_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.handleSearch());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, ctx_r1.loading ? "smartEnrollDemos.searchActiveUser.searching" : "smartEnrollDemos.searchActiveUser.searchActiveUser"), " ");
  }
}
function SearchActiveUserDemoComponent_Conditional_9_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "span", 30);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.error, " ");
  }
}
function SearchActiveUserDemoComponent_Conditional_9_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "app-demo-sandbox-result-banner");
    \u0275\u0275elementStart(1, "app-search-active-user-result", 31);
    \u0275\u0275listener("reset", function SearchActiveUserDemoComponent_Conditional_9_Conditional_33_Template_app_search_active_user_result_reset_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.reset());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("result", ctx_r1.result);
  }
}
function SearchActiveUserDemoComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 8)(2, "div")(3, "label", 9);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 10);
    \u0275\u0275twoWayListener("ngModelChange", function SearchActiveUserDemoComponent_Conditional_9_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.livenessMinScore, $event) || (ctx_r1.livenessMinScore = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div")(8, "label", 9);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 11);
    \u0275\u0275twoWayListener("ngModelChange", function SearchActiveUserDemoComponent_Conditional_9_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.minScore, $event) || (ctx_r1.minScore = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div")(13, "label", 9);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "select", 12);
    \u0275\u0275twoWayListener("ngModelChange", function SearchActiveUserDemoComponent_Conditional_9_Template_select_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchMode, $event) || (ctx_r1.searchMode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(17, "option", 13);
    \u0275\u0275text(18, "FAST");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "option", 14);
    \u0275\u0275text(20, "ACCURATE");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div")(22, "label", 9);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "input", 15);
    \u0275\u0275pipe(26, "transloco");
    \u0275\u0275twoWayListener("ngModelChange", function SearchActiveUserDemoComponent_Conditional_9_Template_input_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.collectionId, $event) || (ctx_r1.collectionId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(27, SearchActiveUserDemoComponent_Conditional_9_Conditional_27_Template, 18, 25, "div", 5)(28, SearchActiveUserDemoComponent_Conditional_9_Conditional_28_Template, 3, 5, "div", 16)(29, SearchActiveUserDemoComponent_Conditional_9_Conditional_29_Template, 3, 4, "button", 17);
    \u0275\u0275elementStart(30, "input", 18, 0);
    \u0275\u0275listener("change", function SearchActiveUserDemoComponent_Conditional_9_Template_input_change_30_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFileSelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(32, SearchActiveUserDemoComponent_Conditional_9_Conditional_32_Template, 4, 1, "div", 19)(33, SearchActiveUserDemoComponent_Conditional_9_Conditional_33_Template, 2, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(5, 14, "smartEnrollDemos.searchActiveUser.livenessMinLabel", \u0275\u0275pureFunction1(26, _c12, ctx_r1.livenessMinScore.toFixed(2))), " ");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.livenessMinScore);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(10, 17, "smartEnrollDemos.searchActiveUser.searchMinLabel", \u0275\u0275pureFunction1(28, _c12, ctx_r1.minScore.toFixed(2))), " ");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.minScore);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 20, "smartEnrollDemos.searchActiveUser.searchModeLabel"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchMode);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 22, "smartEnrollDemos.searchActiveUser.collectionIdLabel"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.collectionId);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(26, 24, "smartEnrollDemos.searchActiveUser.optionalPlaceholder"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.image ? 27 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.preview && ctx_r1.image ? 28 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.image ? 29 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.error ? 32 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.result ? 33 : -1);
  }
}
function SearchActiveUserDemoComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "details", 6)(1, "summary", 32)(2, "span", 33)(3, "span", 34);
    \u0275\u0275text(4, "menu_book");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 35);
    \u0275\u0275text(8, "expand_more");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 36)(10, "p");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "transloco");
    \u0275\u0275elementStart(13, "a", 37);
    \u0275\u0275text(14, "docs.verifik.co/biometrics/search-active-user");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "p", 38);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "transloco");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 4, "smartEnrollDemos.searchActiveUser.apiRefSummary"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 6, "smartEnrollDemos.common.officialDocsLead"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 8, "smartEnrollDemos.searchActiveUser.apiRefLinkSuffix"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 10, "smartEnrollDemos.searchActiveUser.apiRefBody"));
  }
}
var DOCS_BASE = "https://docs.verifik.co";
var RELATED_DOC_HREFS = [
  `${DOCS_BASE}/resources/the-person-object`,
  `${DOCS_BASE}/resources/list-all-persons`,
  `${DOCS_BASE}/resources/retrieve-a-person`,
  `${DOCS_BASE}/resources/persons/update-a-person`,
  `${DOCS_BASE}/resources/persons/delete-a-person`,
  `${DOCS_BASE}/biometrics/search-active-user`
];
var RELATED_DOC_BADGE_MUTED = [true, false, false, false, false, false];
var SearchActiveUserDemoComponent = class _SearchActiveUserDemoComponent {
  constructor() {
    this._api = inject(BiometricsDemoApiService);
    this._transloco = inject(TranslocoService);
    this._cdr = inject(ChangeDetectorRef);
    this._previewHighlightTimeout = null;
    this.authChecked = false;
    this.image = null;
    this.preview = null;
    this.previewHighlighted = false;
    this.livenessMinScore = 0.65;
    this.minScore = 0.75;
    this.searchMode = "FAST";
    this.collectionId = "";
    this.loading = false;
    this.result = null;
    this.error = null;
    this.relatedDocs = [];
  }
  ngOnInit() {
    if (!this._api.ensureAuthenticated()) {
      this.authChecked = true;
      return;
    }
    this.authChecked = true;
    this.relatedDocs = this.buildRelatedDocs();
  }
  ngOnDestroy() {
    if (this._previewHighlightTimeout)
      clearTimeout(this._previewHighlightTimeout);
  }
  get showApiReference() {
    return this.result === null;
  }
  pulsePreview() {
    if (this._previewHighlightTimeout)
      clearTimeout(this._previewHighlightTimeout);
    this.previewHighlighted = true;
    this._previewHighlightTimeout = setTimeout(() => {
      this.previewHighlighted = false;
      this._previewHighlightTimeout = null;
      this._cdr.markForCheck();
    }, 2200);
    this._cdr.markForCheck();
  }
  onCapture(event) {
    this.preview = event.dataUrl;
    this.image = event.base64;
    this.pulsePreview();
  }
  triggerFilePicker() {
    this.fileInput?.nativeElement.click();
  }
  onFileSelected(event) {
    return __async(this, null, function* () {
      const file = event.target.files?.[0];
      if (!file)
        return;
      this.image = yield fileToBase64(file);
      this.preview = URL.createObjectURL(file);
      this.pulsePreview();
      this._cdr.markForCheck();
    });
  }
  handleSearch() {
    if (!this._api.ensureAuthenticated() || !this.image)
      return;
    this.loading = true;
    this.error = null;
    this.result = null;
    this._cdr.markForCheck();
    this._api.searchActiveUser({
      image: this.image,
      os: getDemoOs(),
      liveness_min_score: this.livenessMinScore,
      min_score: this.minScore,
      search_mode: this.searchMode,
      collection_id: this.collectionId || void 0
    }).subscribe({
      next: (data) => {
        this.result = data;
        this.loading = false;
        this._cdr.markForCheck();
      },
      error: (err) => {
        this.error = err.error ?? err.message ?? "Request failed";
        this.loading = false;
        this._cdr.markForCheck();
      }
    });
  }
  reset() {
    if (this._previewHighlightTimeout) {
      clearTimeout(this._previewHighlightTimeout);
      this._previewHighlightTimeout = null;
    }
    this.image = null;
    this.preview = null;
    this.result = null;
    this.error = null;
    this.previewHighlighted = false;
    this._cdr.markForCheck();
  }
  buildRelatedDocs() {
    return RELATED_DOC_HREFS.map((href, i) => ({
      href,
      title: this._transloco.translate(`smartEnrollDemos.searchActiveUser.relatedDocs.${i}.title`),
      description: this._transloco.translate(`smartEnrollDemos.searchActiveUser.relatedDocs.${i}.description`),
      badge: this._transloco.translate(`smartEnrollDemos.searchActiveUser.relatedDocs.${i}.badge`),
      badgeMuted: RELATED_DOC_BADGE_MUTED[i]
    }));
  }
  static {
    this.\u0275fac = function SearchActiveUserDemoComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SearchActiveUserDemoComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SearchActiveUserDemoComponent, selectors: [["app-search-active-user-demo"]], viewQuery: function SearchActiveUserDemoComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c02, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.fileInput = _t.first);
      }
    }, decls: 12, vars: 9, consts: [["fileInput", ""], [1, "mb-8"], [1, "text-3xl", "font-black", "tracking-tight", "text-on-surface", "mb-2"], [1, "text-on-surface-variant"], [1, "h-40", "rounded-xl", "bg-surface-container-high", "animate-pulse"], [1, "space-y-5"], [1, "mt-10", "rounded-xl", "border", "border-outline-variant/20", "bg-surface-container-low/50", "text-left", "max-w-3xl", "mx-auto", "w-full", "px-4", "py-3", "group"], [3, "items"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "lg:grid-cols-4", "gap-5"], [1, "block", "text-sm", "font-semibold", "text-on-surface", "mb-1.5"], ["type", "range", "min", "0.5", "max", "1", "step", "0.01", "name", "livenessMinScore", 1, "w-full", 3, "ngModelChange", "ngModel"], ["type", "range", "min", "0.5", "max", "1", "step", "0.01", "name", "minScore", 1, "w-full", 3, "ngModelChange", "ngModel"], ["name", "searchMode", 1, "w-full", "bg-surface-container-low", "border", "border-outline-variant/30", "rounded-lg", "px-3", "py-2", "text-on-surface", "text-sm", "focus:outline-none", "focus:border-primary/60", 3, "ngModelChange", "ngModel"], ["value", "FAST"], ["value", "ACCURATE"], ["type", "text", "name", "collectionId", 1, "w-full", "bg-surface-container-low", "border", "border-outline-variant/30", "rounded-lg", "px-3", "py-2", "text-on-surface", "placeholder-on-surface-variant/50", "text-sm", "focus:outline-none", "focus:border-primary/60", 3, "ngModelChange", "ngModel", "placeholder"], [1, "overflow-hidden", "rounded-xl", "border", "transition-all", "duration-300", 3, "ngClass"], ["type", "button", 1, "demo-btn-primary", 3, "disabled"], ["type", "file", "accept", "image/*", 1, "hidden", 3, "change"], [1, "px-4", "py-3", "bg-error-container/20", "border", "border-error/20", "rounded-lg", "flex", "items-center", "gap-2", "text-sm", "text-error"], [3, "description"], ["aria-labelledby", "search-active-user-camera-heading"], ["label", "A", "id", "search-active-user-camera-heading", 3, "title", "subtitle"], [1, "flex", "min-h-0", "flex-1", "flex-col"], [3, "captured", "fillFrame", "hideIdleExplainer", "disabled", "captureSuccessFeedbackMs"], ["aria-labelledby", "search-active-user-upload-heading"], ["label", "B", "id", "search-active-user-upload-heading", 3, "title", "subtitle"], [3, "clicked", "primaryText", "secondaryText"], ["className", "w-full aspect-video object-cover", 3, "src", "alt"], ["type", "button", 1, "demo-btn-primary", 3, "click", "disabled"], [1, "material-symbols-outlined", "text-sm"], [3, "reset", "result"], [1, "cursor-pointer", "list-none", "font-bold", "text-sm", "text-primary", "flex", "items-center", "justify-between", "gap-2"], [1, "flex", "items-center", "gap-2"], [1, "material-symbols-outlined", "text-lg"], [1, "material-symbols-outlined", "text-on-surface-variant/70", "group-open:rotate-180", "transition-transform"], [1, "mt-4", "space-y-4", "text-sm", "text-on-surface-variant", "border-t", "border-outline-variant/15", "pt-4"], ["href", "https://docs.verifik.co/biometrics/search-active-user", "target", "_blank", "rel", "noopener noreferrer", 1, "text-primary", "underline", "underline-offset-2"], [1, "text-xs", "leading-relaxed"]], template: function SearchActiveUserDemoComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-demo-page-shell")(1, "div", 1)(2, "h2", 2);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6);
        \u0275\u0275pipe(7, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(8, SearchActiveUserDemoComponent_Conditional_8_Template, 1, 0, "div", 4)(9, SearchActiveUserDemoComponent_Conditional_9_Template, 34, 30, "div", 5)(10, SearchActiveUserDemoComponent_Conditional_10_Template, 20, 12, "details", 6);
        \u0275\u0275element(11, "app-demo-related-docs-section", 7);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 5, ctx.result ? "smartEnrollDemos.searchActiveUser.heroTitleComplete" : "smartEnrollDemos.searchActiveUser.heroTitleInitial"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 7, ctx.result ? "smartEnrollDemos.searchActiveUser.heroSubtitleComplete" : "smartEnrollDemos.searchActiveUser.heroSubtitleInitial"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.authChecked ? 8 : 9);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.showApiReference ? 10 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("items", ctx.relatedDocs);
      }
    }, dependencies: [
      CommonModule,
      NgClass,
      FormsModule,
      NgSelectOption,
      \u0275NgSelectMultipleOption,
      DefaultValueAccessor,
      RangeValueAccessor,
      SelectControlValueAccessor,
      NgControlStatus,
      NgModel,
      TranslocoModule,
      TranslocoPipe,
      DemoPageShellComponent,
      DemoRelatedDocsSectionComponent,
      DemoChooseOneCalloutComponent,
      DemoCaptureOptionHeadingComponent,
      DemoOrDividerComponent,
      DemoScannerShellComponent,
      DemoUploadImageButtonComponent,
      DemoRasterImageComponent,
      FaceGuidedCameraComponent,
      SearchActiveUserResultComponent,
      DemoSandboxResultBannerComponent
    ], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SearchActiveUserDemoComponent, [{
    type: Component,
    args: [{ selector: "app-search-active-user-demo", standalone: true, imports: [
      CommonModule,
      FormsModule,
      TranslocoModule,
      DemoPageShellComponent,
      DemoRelatedDocsSectionComponent,
      DemoChooseOneCalloutComponent,
      DemoCaptureOptionHeadingComponent,
      DemoOrDividerComponent,
      DemoScannerShellComponent,
      DemoUploadImageButtonComponent,
      DemoRasterImageComponent,
      FaceGuidedCameraComponent,
      SearchActiveUserResultComponent,
      DemoSandboxResultBannerComponent
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `<app-demo-page-shell>\r
    <div class="mb-8">\r
        <h2 class="text-3xl font-black tracking-tight text-on-surface mb-2">\r
            {{ (result ? 'smartEnrollDemos.searchActiveUser.heroTitleComplete' : 'smartEnrollDemos.searchActiveUser.heroTitleInitial') | transloco }}\r
        </h2>\r
        <p class="text-on-surface-variant">\r
            {{ (result ? 'smartEnrollDemos.searchActiveUser.heroSubtitleComplete' : 'smartEnrollDemos.searchActiveUser.heroSubtitleInitial') | transloco }}\r
        </p>\r
    </div>\r
\r
    @if (!authChecked) {\r
        <div class="h-40 rounded-xl bg-surface-container-high animate-pulse"></div>\r
    } @else {\r
        <div class="space-y-5">\r
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">\r
                <div>\r
                    <label class="block text-sm font-semibold text-on-surface mb-1.5">\r
                        {{ 'smartEnrollDemos.searchActiveUser.livenessMinLabel' | transloco: { score: livenessMinScore.toFixed(2) } }}\r
                    </label>\r
                    <input type="range" min="0.5" max="1" step="0.01" [(ngModel)]="livenessMinScore" name="livenessMinScore" class="w-full" />\r
                </div>\r
                <div>\r
                    <label class="block text-sm font-semibold text-on-surface mb-1.5">\r
                        {{ 'smartEnrollDemos.searchActiveUser.searchMinLabel' | transloco: { score: minScore.toFixed(2) } }}\r
                    </label>\r
                    <input type="range" min="0.5" max="1" step="0.01" [(ngModel)]="minScore" name="minScore" class="w-full" />\r
                </div>\r
                <div>\r
                    <label class="block text-sm font-semibold text-on-surface mb-1.5">{{ 'smartEnrollDemos.searchActiveUser.searchModeLabel' | transloco }}</label>\r
                    <select [(ngModel)]="searchMode" name="searchMode" class="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg px-3 py-2 text-on-surface text-sm focus:outline-none focus:border-primary/60">\r
                        <option value="FAST">FAST</option>\r
                        <option value="ACCURATE">ACCURATE</option>\r
                    </select>\r
                </div>\r
                <div>\r
                    <label class="block text-sm font-semibold text-on-surface mb-1.5">{{ 'smartEnrollDemos.searchActiveUser.collectionIdLabel' | transloco }}</label>\r
                    <input type="text" [(ngModel)]="collectionId" name="collectionId" [placeholder]="'smartEnrollDemos.searchActiveUser.optionalPlaceholder' | transloco" class="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg px-3 py-2 text-on-surface placeholder-on-surface-variant/50 text-sm focus:outline-none focus:border-primary/60" />\r
                </div>\r
            </div>\r
\r
            @if (!image) {\r
                <div class="space-y-5">\r
                    <app-demo-choose-one-callout [description]="'smartEnrollDemos.searchActiveUser.chooseOneDescription' | transloco" />\r
                    <section aria-labelledby="search-active-user-camera-heading">\r
                        <app-demo-capture-option-heading label="A" id="search-active-user-camera-heading" [title]="'smartEnrollDemos.searchActiveUser.cameraTitle' | transloco" [subtitle]="'smartEnrollDemos.searchActiveUser.cameraSubtitle' | transloco" />\r
                        <app-demo-scanner-shell>\r
                            <div class="flex min-h-0 flex-1 flex-col">\r
                                <app-face-guided-camera [fillFrame]="true" [hideIdleExplainer]="true" [disabled]="loading" [captureSuccessFeedbackMs]="750" (captured)="onCapture($event)" />\r
                            </div>\r
                        </app-demo-scanner-shell>\r
                    </section>\r
                    <app-demo-or-divider />\r
                    <section aria-labelledby="search-active-user-upload-heading">\r
                        <app-demo-capture-option-heading label="B" id="search-active-user-upload-heading" [title]="'smartEnrollDemos.searchActiveUser.uploadTitle' | transloco" [subtitle]="'smartEnrollDemos.searchActiveUser.uploadSubtitle' | transloco" />\r
                        <app-demo-upload-image-button (clicked)="triggerFilePicker()" [primaryText]="'smartEnrollDemos.searchActiveUser.uploadPrimary' | transloco" [secondaryText]="'smartEnrollDemos.searchActiveUser.uploadSecondary' | transloco" />\r
                    </section>\r
                </div>\r
            }\r
\r
            @if (preview && image) {\r
                <div\r
                    class="overflow-hidden rounded-xl border transition-all duration-300"\r
                    [ngClass]="previewHighlighted ? 'border-emerald-400/50 ring-4 ring-emerald-400/20' : 'border-frost'"\r
                >\r
                    <app-demo-raster-image [src]="preview" [alt]="'smartEnrollDemos.searchActiveUser.previewAlt' | transloco" className="w-full aspect-video object-cover" />\r
                </div>\r
            }\r
\r
            @if (image) {\r
                <button type="button" (click)="handleSearch()" [disabled]="loading" class="demo-btn-primary">\r
                    {{ (loading ? 'smartEnrollDemos.searchActiveUser.searching' : 'smartEnrollDemos.searchActiveUser.searchActiveUser') | transloco }}\r
                </button>\r
            }\r
\r
            <input #fileInput type="file" accept="image/*" class="hidden" (change)="onFileSelected($event)" />\r
\r
            @if (error) {\r
                <div class="px-4 py-3 bg-error-container/20 border border-error/20 rounded-lg flex items-center gap-2 text-sm text-error">\r
                    <span class="material-symbols-outlined text-sm">error_outline</span>\r
                    {{ error }}\r
                </div>\r
            }\r
\r
            @if (result) {\r
                <app-demo-sandbox-result-banner />\r
                <app-search-active-user-result [result]="result" (reset)="reset()" />\r
            }\r
        </div>\r
    }\r
\r
    @if (showApiReference) {\r
        <details class="mt-10 rounded-xl border border-outline-variant/20 bg-surface-container-low/50 text-left max-w-3xl mx-auto w-full px-4 py-3 group">\r
            <summary class="cursor-pointer list-none font-bold text-sm text-primary flex items-center justify-between gap-2">\r
                <span class="flex items-center gap-2">\r
                    <span class="material-symbols-outlined text-lg">menu_book</span>\r
                    {{ 'smartEnrollDemos.searchActiveUser.apiRefSummary' | transloco }}\r
                </span>\r
                <span class="material-symbols-outlined text-on-surface-variant/70 group-open:rotate-180 transition-transform">expand_more</span>\r
            </summary>\r
            <div class="mt-4 space-y-4 text-sm text-on-surface-variant border-t border-outline-variant/15 pt-4">\r
                <p>\r
                    {{ 'smartEnrollDemos.common.officialDocsLead' | transloco }}\r
                    <a href="https://docs.verifik.co/biometrics/search-active-user" target="_blank" rel="noopener noreferrer" class="text-primary underline underline-offset-2">docs.verifik.co/biometrics/search-active-user</a>\r
                    {{ 'smartEnrollDemos.searchActiveUser.apiRefLinkSuffix' | transloco }}\r
                </p>\r
                <p class="text-xs leading-relaxed">{{ 'smartEnrollDemos.searchActiveUser.apiRefBody' | transloco }}</p>\r
            </div>\r
        </details>\r
    }\r
\r
    <app-demo-related-docs-section [items]="relatedDocs" />\r
</app-demo-page-shell>\r
` }]
  }], null, { fileInput: [{
    type: ViewChild,
    args: ["fileInput"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SearchActiveUserDemoComponent, { className: "SearchActiveUserDemoComponent", filePath: "src/app/modules/smart-enroll/demos/pages/search-active-user/search-active-user-demo.component.ts", lineNumber: 65 });
})();
export {
  SearchActiveUserDemoComponent
};
//# sourceMappingURL=chunk-VS34IE6R.js.map
