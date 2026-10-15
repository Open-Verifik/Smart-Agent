import {
  CollectionMultiSelectComponent
} from "./chunk-CEAIEB3K.js";
import {
  formatDate,
  formatDob,
  formatScore,
  isPlainObject,
  parseCollectionEntries,
  parseThumbnails
} from "./chunk-CRJOXNLH.js";
import {
  DemoScannerShellComponent
} from "./chunk-4YJHDTUQ.js";
import {
  DemoCaptureOptionHeadingComponent,
  DemoChooseOneCalloutComponent,
  DemoOrDividerComponent,
  FaceGuidedCameraComponent
} from "./chunk-DCFVZDVI.js";
import {
  DemoUploadImageButtonComponent
} from "./chunk-TDKQRHA6.js";
import {
  DemoRasterImageComponent
} from "./chunk-ZLWP3B24.js";
import {
  DemoResultActionsComponent
} from "./chunk-I4NQXRI6.js";
import {
  DemoRelatedDocsSectionComponent
} from "./chunk-QCUB3VMU.js";
import {
  BiometricsDemoApiService,
  DemoPageShellComponent,
  fileToBase64
} from "./chunk-QDU3MPYG.js";
import "./chunk-45PTEIW3.js";
import "./chunk-B4YUVLJ7.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  RangeValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-5EV2TUYF.js";
import {
  TranslocoModule,
  TranslocoPipe,
  TranslocoService
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
} from "./chunk-I5BUD46C.js";
import {
  __async
} from "./chunk-F5M2C4EZ.js";

// src/app/modules/smart-enroll/demos/shared/search-person-result.component.ts
var _c0 = (a0, a1) => ({ "bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 shadow-sm border border-slate-200/20": a0, "text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 bg-transparent": a1 });
var _c1 = (a0) => ({ n: a0 });
var _forTrack0 = ($index, $item) => $item.id;
function SearchPersonResultComponent_Conditional_8_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "smartEnrollDemos.searchPersonResult.noMatchesThreshold"), " ");
  }
}
function SearchPersonResultComponent_Conditional_8_Conditional_9_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-demo-raster-image", 13);
  }
  if (rf & 2) {
    const match_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", match_r3.thumbnails[0].src)("alt", match_r3.name)("width", 64)("height", 64);
  }
}
function SearchPersonResultComponent_Conditional_8_Conditional_9_For_2_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const match_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(match_r3.id);
  }
}
function SearchPersonResultComponent_Conditional_8_Conditional_9_For_2_Conditional_17_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "dt", 21);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "dd", 22);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const match_r3 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "smartEnrollDemos.searchPersonResult.gender"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.formatGender(match_r3.gender));
  }
}
function SearchPersonResultComponent_Conditional_8_Conditional_9_For_2_Conditional_17_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "dt", 21);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "dd", 22);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const match_r3 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "smartEnrollDemos.searchPersonResult.dateOfBirth"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.formatDobValue(match_r3.dateOfBirth));
  }
}
function SearchPersonResultComponent_Conditional_8_Conditional_9_For_2_Conditional_17_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "dt", 21);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "dd", 22);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const match_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "smartEnrollDemos.searchPersonResult.nationality"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(match_r3.nationality);
  }
}
function SearchPersonResultComponent_Conditional_8_Conditional_9_For_2_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "dl", 19);
    \u0275\u0275template(1, SearchPersonResultComponent_Conditional_8_Conditional_9_For_2_Conditional_17_Conditional_1_Template, 6, 4, "div", 20)(2, SearchPersonResultComponent_Conditional_8_Conditional_9_For_2_Conditional_17_Conditional_2_Template, 6, 4, "div", 20)(3, SearchPersonResultComponent_Conditional_8_Conditional_9_For_2_Conditional_17_Conditional_3_Template, 6, 4, "div", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const match_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(match_r3.gender ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(match_r3.dateOfBirth ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(match_r3.nationality ? 3 : -1);
  }
}
function SearchPersonResultComponent_Conditional_8_Conditional_9_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 11)(2, "div", 12);
    \u0275\u0275template(3, SearchPersonResultComponent_Conditional_8_Conditional_9_For_2_Conditional_3_Template, 1, 4, "app-demo-raster-image", 13);
    \u0275\u0275elementStart(4, "div")(5, "p", 14);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 6);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, SearchPersonResultComponent_Conditional_8_Conditional_9_For_2_Conditional_10_Template, 2, 1, "p", 15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 16)(12, "p", 17);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p", 18);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(17, SearchPersonResultComponent_Conditional_8_Conditional_9_For_2_Conditional_17_Template, 4, 3, "dl", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const match_r3 = ctx.$implicit;
    const \u0275$index_34_r4 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(match_r3.thumbnails[0] ? 3 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(7, 7, "smartEnrollDemos.searchPersonResult.matchNumber", \u0275\u0275pureFunction1(12, _c1, \u0275$index_34_r4 + 1)), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(match_r3.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(match_r3.id ? 10 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 10, "smartEnrollDemos.searchPersonResult.similarity"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.formatScoreValue(match_r3.score));
    \u0275\u0275advance();
    \u0275\u0275conditional(match_r3.gender || match_r3.dateOfBirth || match_r3.nationality || match_r3.notes != null ? 17 : -1);
  }
}
function SearchPersonResultComponent_Conditional_8_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275repeaterCreate(1, SearchPersonResultComponent_Conditional_8_Conditional_9_For_2_Template, 18, 14, "div", 10, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.matches);
  }
}
function SearchPersonResultComponent_Conditional_8_Conditional_10_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.signature.message);
  }
}
function SearchPersonResultComponent_Conditional_8_Conditional_10_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 24);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(2, 2, "smartEnrollDemos.searchPersonResult.timestampPrefix"), " ", ctx_r1.signature.dateTime, " ");
  }
}
function SearchPersonResultComponent_Conditional_8_Conditional_10_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 15);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(2, 2, "smartEnrollDemos.searchPersonResult.requestIdPrefix"), " ", ctx_r1.requestId, " ");
  }
}
function SearchPersonResultComponent_Conditional_8_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "p", 23);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, SearchPersonResultComponent_Conditional_8_Conditional_10_Conditional_4_Template, 2, 1, "p", 24)(5, SearchPersonResultComponent_Conditional_8_Conditional_10_Conditional_5_Template, 3, 4, "p", 24)(6, SearchPersonResultComponent_Conditional_8_Conditional_10_Conditional_6_Template, 3, 4, "p", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 4, "smartEnrollDemos.searchPersonResult.responseSignature"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional((ctx_r1.signature == null ? null : ctx_r1.signature.message) ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r1.signature == null ? null : ctx_r1.signature.dateTime) ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.requestId ? 6 : -1);
  }
}
function SearchPersonResultComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 5)(2, "p", 6);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 7);
    \u0275\u0275listener("click", function SearchPersonResultComponent_Conditional_8_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.reset.emit());
    });
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, SearchPersonResultComponent_Conditional_8_Conditional_8_Template, 3, 3, "div", 8)(9, SearchPersonResultComponent_Conditional_8_Conditional_9_Template, 3, 0, "div", 4)(10, SearchPersonResultComponent_Conditional_8_Conditional_10_Template, 7, 6, "div", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 4, "smartEnrollDemos.searchPersonResult.searchResults"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 6, "smartEnrollDemos.searchPersonResult.reset"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.matches.length === 0 ? 8 : 9);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.signature || ctx_r1.requestId ? 10 : -1);
  }
}
function SearchPersonResultComponent_Conditional_9_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "smartEnrollDemos.searchPersonResult.copied"), " ");
  }
}
function SearchPersonResultComponent_Conditional_9_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "smartEnrollDemos.searchPersonResult.copyFailed"), " ");
  }
}
function SearchPersonResultComponent_Conditional_9_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "smartEnrollDemos.searchPersonResult.copy"), " ");
  }
}
function SearchPersonResultComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "p", 6);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 7);
    \u0275\u0275listener("click", function SearchPersonResultComponent_Conditional_9_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.copyRaw());
    });
    \u0275\u0275template(6, SearchPersonResultComponent_Conditional_9_Conditional_6_Template, 2, 3)(7, SearchPersonResultComponent_Conditional_9_Conditional_7_Template, 2, 3)(8, SearchPersonResultComponent_Conditional_9_Conditional_8_Template, 2, 3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "pre", 25);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "json");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 3, "smartEnrollDemos.searchPersonResult.rawResponse"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.copyState === "copied" ? 6 : ctx_r1.copyState === "error" ? 7 : 8);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 5, ctx_r1.result));
  }
}
var SearchPersonResultComponent = class _SearchPersonResultComponent {
  constructor() {
    this.result = null;
    this.reset = new EventEmitter();
    this.activeTab = "matches";
    this.copyState = "idle";
    this.matches = [];
    this.signature = null;
    this.requestId = "";
    this._transloco = inject(TranslocoService);
    this._cdr = inject(ChangeDetectorRef);
  }
  ngOnChanges() {
    this.parseResult();
  }
  formatGender(gender) {
    if (gender === "M")
      return this._transloco.translate("smartEnrollDemos.common.male");
    if (gender === "F")
      return this._transloco.translate("smartEnrollDemos.common.female");
    return gender;
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
  parseResult() {
    const rawMatches = Array.isArray(this.result?.["data"]) ? this.result["data"] : [];
    this.matches = rawMatches.filter(isPlainObject).map((person) => ({
      id: typeof person["id"] === "string" ? person["id"] : "",
      name: typeof person["name"] === "string" ? person["name"] : this._transloco.translate("smartEnrollDemos.common.unknownPerson"),
      gender: typeof person["gender"] === "string" ? person["gender"] : "",
      dateOfBirth: typeof person["date_of_birth"] === "string" ? person["date_of_birth"] : "",
      nationality: typeof person["nationality"] === "string" ? person["nationality"] : "",
      notes: person["notes"],
      score: typeof person["score"] === "number" ? person["score"] : null,
      createDate: typeof person["create_date"] === "string" ? person["create_date"] : "",
      modifiedDate: typeof person["modified_date"] === "string" ? person["modified_date"] : "",
      thumbnails: parseThumbnails(Array.isArray(person["thumbnails"]) ? person["thumbnails"] : []),
      collections: parseCollectionEntries(Array.isArray(person["collections"]) ? person["collections"] : [])
    })).sort((a, b) => (b.score ?? -1) - (a.score ?? -1));
    const sig = this.result?.["signature"];
    this.signature = isPlainObject(sig) ? {
      dateTime: typeof sig["dateTime"] === "string" ? sig["dateTime"] : "",
      message: typeof sig["message"] === "string" ? sig["message"] : ""
    } : null;
    this.requestId = typeof this.result?.["id"] === "string" ? this.result["id"] : "";
  }
  formatScoreValue(score) {
    return formatScore(score, this._transloco.translate("smartEnrollDemos.common.scoreNA"));
  }
  formatDateValue(value) {
    return formatDate(value);
  }
  formatDobValue(value) {
    return formatDob(value);
  }
  static {
    this.\u0275fac = function SearchPersonResultComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SearchPersonResultComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SearchPersonResultComponent, selectors: [["app-search-person-result"]], inputs: { result: "result" }, outputs: { reset: "reset" }, features: [\u0275\u0275NgOnChangesFeature], decls: 10, vars: 15, consts: [[1, "rounded-2xl", "bg-surface-container-low", "border", "border-primary/20", "p-6", "space-y-4"], [1, "inline-flex", "rounded-xl", "p-1", "bg-slate-100/80", "dark:bg-slate-900/80", "border", "border-slate-200/60", "dark:border-slate-800/60", "gap-1.5"], ["type", "button", 1, "px-3", "py-1.5", "text-xs", "font-semibold", "rounded-lg", "transition-all", "duration-150", 3, "click", "ngClass"], [1, "space-y-4"], [1, "space-y-3"], [1, "flex", "items-center", "justify-between"], [1, "font-bold", "text-on-surface"], ["type", "button", 1, "text-xs", "text-primary", "underline", 3, "click"], [1, "rounded-xl", "border", "border-outline-variant/20", "bg-surface-container-high/40", "p-4", "text-sm", "text-on-surface-variant"], [1, "rounded-xl", "border", "border-outline-variant/20", "bg-surface-container-high/30", "p-4", "text-sm", "space-y-1"], [1, "rounded-xl", "border", "border-outline-variant/20", "bg-surface-container-high/40", "p-4"], [1, "flex", "flex-col", "sm:flex-row", "sm:items-start", "sm:justify-between", "gap-3"], [1, "flex", "items-start", "gap-3"], ["className", "w-16 h-16 rounded-lg object-cover border border-outline-variant/25", 3, "src", "alt", "width", "height"], [1, "text-sm", "text-on-surface-variant"], [1, "font-mono", "text-xs", "text-on-surface-variant", "break-all"], [1, "rounded-lg", "bg-primary/10", "border", "border-primary/25", "px-3", "py-2"], [1, "text-[0.65rem]", "uppercase", "tracking-wide", "text-primary/80"], [1, "font-bold", "text-primary"], [1, "mt-4", "space-y-2", "text-sm"], [1, "grid", "grid-cols-1", "sm:grid-cols-[minmax(0,10rem)_1fr]", "gap-x-3", "gap-y-1"], [1, "text-on-surface-variant", "font-medium"], [1, "text-on-surface"], [1, "font-semibold", "text-on-surface"], [1, "text-on-surface-variant"], [1, "text-[0.65rem]", "font-mono", "bg-surface-container-high/80", "rounded-lg", "p-3", "overflow-x-auto", "text-on-surface", "whitespace-pre-wrap"]], template: function SearchPersonResultComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "button", 2);
        \u0275\u0275listener("click", function SearchPersonResultComponent_Template_button_click_2_listener() {
          return ctx.setTab("matches");
        });
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "button", 2);
        \u0275\u0275listener("click", function SearchPersonResultComponent_Template_button_click_5_listener() {
          return ctx.setTab("raw");
        });
        \u0275\u0275text(6);
        \u0275\u0275pipe(7, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(8, SearchPersonResultComponent_Conditional_8_Template, 11, 8, "div", 3)(9, SearchPersonResultComponent_Conditional_9_Template, 12, 7, "div", 4);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(9, _c0, ctx.activeTab === "matches", ctx.activeTab !== "matches"));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 5, "smartEnrollDemos.searchPersonResult.tabMatches"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(12, _c0, ctx.activeTab === "raw", ctx.activeTab !== "raw"));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 7, "smartEnrollDemos.searchPersonResult.tabRaw"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.activeTab === "matches" ? 8 : 9);
      }
    }, dependencies: [CommonModule, NgClass, JsonPipe, TranslocoModule, TranslocoPipe, DemoRasterImageComponent], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SearchPersonResultComponent, [{
    type: Component,
    args: [{ selector: "app-search-person-result", standalone: true, imports: [CommonModule, TranslocoModule, DemoRasterImageComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="rounded-2xl bg-surface-container-low border border-primary/20 p-6 space-y-4">\r
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
            {{ 'smartEnrollDemos.searchPersonResult.tabMatches' | transloco }}\r
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
            {{ 'smartEnrollDemos.searchPersonResult.tabRaw' | transloco }}\r
        </button>\r
    </div>\r
\r
    @if (activeTab === 'matches') {\r
        <div class="space-y-4">\r
            <div class="flex items-center justify-between">\r
                <p class="font-bold text-on-surface">{{ 'smartEnrollDemos.searchPersonResult.searchResults' | transloco }}</p>\r
                <button type="button" (click)="reset.emit()" class="text-xs text-primary underline">\r
                    {{ 'smartEnrollDemos.searchPersonResult.reset' | transloco }}\r
                </button>\r
            </div>\r
\r
            @if (matches.length === 0) {\r
                <div class="rounded-xl border border-outline-variant/20 bg-surface-container-high/40 p-4 text-sm text-on-surface-variant">\r
                    {{ 'smartEnrollDemos.searchPersonResult.noMatchesThreshold' | transloco }}\r
                </div>\r
            } @else {\r
                <div class="space-y-3">\r
                    @for (match of matches; track match.id; let i = $index) {\r
                        <div class="rounded-xl border border-outline-variant/20 bg-surface-container-high/40 p-4">\r
                            <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">\r
                                <div class="flex items-start gap-3">\r
                                    @if (match.thumbnails[0]) {\r
                                        <app-demo-raster-image\r
                                            [src]="match.thumbnails[0].src"\r
                                            [alt]="match.name"\r
                                            [width]="64"\r
                                            [height]="64"\r
                                            className="w-16 h-16 rounded-lg object-cover border border-outline-variant/25"\r
                                        />\r
                                    }\r
                                    <div>\r
                                        <p class="text-sm text-on-surface-variant">\r
                                            {{ 'smartEnrollDemos.searchPersonResult.matchNumber' | transloco: { n: i + 1 } }}\r
                                        </p>\r
                                        <p class="font-bold text-on-surface">{{ match.name }}</p>\r
                                        @if (match.id) {\r
                                            <p class="font-mono text-xs text-on-surface-variant break-all">{{ match.id }}</p>\r
                                        }\r
                                    </div>\r
                                </div>\r
                                <div class="rounded-lg bg-primary/10 border border-primary/25 px-3 py-2">\r
                                    <p class="text-[0.65rem] uppercase tracking-wide text-primary/80">\r
                                        {{ 'smartEnrollDemos.searchPersonResult.similarity' | transloco }}\r
                                    </p>\r
                                    <p class="font-bold text-primary">{{ formatScoreValue(match.score) }}</p>\r
                                </div>\r
                            </div>\r
                            @if (match.gender || match.dateOfBirth || match.nationality || match.notes != null) {\r
                                <dl class="mt-4 space-y-2 text-sm">\r
                                    @if (match.gender) {\r
                                        <div class="grid grid-cols-1 sm:grid-cols-[minmax(0,10rem)_1fr] gap-x-3 gap-y-1">\r
                                            <dt class="text-on-surface-variant font-medium">{{ 'smartEnrollDemos.searchPersonResult.gender' | transloco }}</dt>\r
                                            <dd class="text-on-surface">{{ formatGender(match.gender) }}</dd>\r
                                        </div>\r
                                    }\r
                                    @if (match.dateOfBirth) {\r
                                        <div class="grid grid-cols-1 sm:grid-cols-[minmax(0,10rem)_1fr] gap-x-3 gap-y-1">\r
                                            <dt class="text-on-surface-variant font-medium">{{ 'smartEnrollDemos.searchPersonResult.dateOfBirth' | transloco }}</dt>\r
                                            <dd class="text-on-surface">{{ formatDobValue(match.dateOfBirth) }}</dd>\r
                                        </div>\r
                                    }\r
                                    @if (match.nationality) {\r
                                        <div class="grid grid-cols-1 sm:grid-cols-[minmax(0,10rem)_1fr] gap-x-3 gap-y-1">\r
                                            <dt class="text-on-surface-variant font-medium">{{ 'smartEnrollDemos.searchPersonResult.nationality' | transloco }}</dt>\r
                                            <dd class="text-on-surface">{{ match.nationality }}</dd>\r
                                        </div>\r
                                    }\r
                                </dl>\r
                            }\r
                        </div>\r
                    }\r
                </div>\r
            }\r
\r
            @if (signature || requestId) {\r
                <div class="rounded-xl border border-outline-variant/20 bg-surface-container-high/30 p-4 text-sm space-y-1">\r
                    <p class="font-semibold text-on-surface">{{ 'smartEnrollDemos.searchPersonResult.responseSignature' | transloco }}</p>\r
                    @if (signature?.message) {\r
                        <p class="text-on-surface-variant">{{ signature!.message }}</p>\r
                    }\r
                    @if (signature?.dateTime) {\r
                        <p class="text-on-surface-variant">\r
                            {{ 'smartEnrollDemos.searchPersonResult.timestampPrefix' | transloco }} {{ signature!.dateTime }}\r
                        </p>\r
                    }\r
                    @if (requestId) {\r
                        <p class="font-mono text-xs text-on-surface-variant break-all">\r
                            {{ 'smartEnrollDemos.searchPersonResult.requestIdPrefix' | transloco }} {{ requestId }}\r
                        </p>\r
                    }\r
                </div>\r
            }\r
        </div>\r
    } @else {\r
        <div class="space-y-3">\r
            <div class="flex items-center justify-between">\r
                <p class="font-bold text-on-surface">{{ 'smartEnrollDemos.searchPersonResult.rawResponse' | transloco }}</p>\r
                <button type="button" (click)="copyRaw()" class="text-xs text-primary underline">\r
                    @if (copyState === 'copied') {\r
                        {{ 'smartEnrollDemos.searchPersonResult.copied' | transloco }}\r
                    } @else if (copyState === 'error') {\r
                        {{ 'smartEnrollDemos.searchPersonResult.copyFailed' | transloco }}\r
                    } @else {\r
                        {{ 'smartEnrollDemos.searchPersonResult.copy' | transloco }}\r
                    }\r
                </button>\r
            </div>\r
            <pre class="text-[0.65rem] font-mono bg-surface-container-high/80 rounded-lg p-3 overflow-x-auto text-on-surface whitespace-pre-wrap">{{\r
                result | json\r
            }}</pre>\r
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SearchPersonResultComponent, { className: "SearchPersonResultComponent", filePath: "src/app/modules/smart-enroll/demos/shared/search-person-result.component.ts", lineNumber: 47 });
})();

// src/app/modules/smart-enroll/demos/pages/search-person/search-person-demo.component.ts
var _c02 = ["fileInput"];
var _c12 = (a0) => ({ score: a0 });
var _c2 = (a0) => ({ count: a0 });
function SearchPersonDemoComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 4);
  }
}
function SearchPersonDemoComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "app-search-person-result", 8);
    \u0275\u0275listener("reset", function SearchPersonDemoComponent_Conditional_9_Template_app_search_person_result_reset_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.reset());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "app-demo-result-actions", 9);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275listener("secondary", function SearchPersonDemoComponent_Conditional_9_Template_app_demo_result_actions_secondary_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.reset());
    })("primary", function SearchPersonDemoComponent_Conditional_9_Template_app_demo_result_actions_primary_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.backToDemos());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("result", ctx_r1.result);
    \u0275\u0275advance();
    \u0275\u0275property("secondaryLabel", \u0275\u0275pipeBind1(3, 4, "smartEnrollDemos.searchPersonResult.reset"))("primaryLabel", \u0275\u0275pipeBind1(4, 6, "smartEnrollDemos.personResult.backToDemos"))("primaryRouterLink", null);
  }
}
function SearchPersonDemoComponent_Conditional_10_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "span", 34);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.collectionsError, " ");
  }
}
function SearchPersonDemoComponent_Conditional_10_Conditional_43_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-demo-raster-image", 35);
  }
  if (rf & 2) {
    const preview_r4 = ctx.$implicit;
    \u0275\u0275property("src", preview_r4)("width", 80)("height", 80);
  }
}
function SearchPersonDemoComponent_Conditional_10_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275repeaterCreate(1, SearchPersonDemoComponent_Conditional_10_Conditional_43_For_2_Template, 1, 3, "app-demo-raster-image", 35, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.previews);
  }
}
function SearchPersonDemoComponent_Conditional_10_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "span", 34);
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
function SearchPersonDemoComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 10)(2, "div", 11)(3, "div", 12)(4, "label", 13);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 14)(8, "input", 15);
    \u0275\u0275twoWayListener("ngModelChange", function SearchPersonDemoComponent_Conditional_10_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.minScore, $event) || (ctx_r1.minScore = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 12)(10, "label", 13);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "select", 16);
    \u0275\u0275twoWayListener("ngModelChange", function SearchPersonDemoComponent_Conditional_10_Template_select_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchMode, $event) || (ctx_r1.searchMode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(14, "option", 17);
    \u0275\u0275text(15, "FAST");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "option", 18);
    \u0275\u0275text(17, "ACCURATE");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 12)(19, "label", 19);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(22, SearchPersonDemoComponent_Conditional_10_Conditional_22_Template, 4, 1, "div", 20);
    \u0275\u0275elementStart(23, "app-collection-multi-select", 21);
    \u0275\u0275listener("selectedIdsChange", function SearchPersonDemoComponent_Conditional_10_Template_app_collection_multi_select_selectedIdsChange_23_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectedCollectionIds = $event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(24, "div", 5);
    \u0275\u0275element(25, "app-demo-choose-one-callout", 22);
    \u0275\u0275pipe(26, "transloco");
    \u0275\u0275elementStart(27, "section", 23);
    \u0275\u0275element(28, "app-demo-capture-option-heading", 24);
    \u0275\u0275pipe(29, "transloco");
    \u0275\u0275pipe(30, "transloco");
    \u0275\u0275elementStart(31, "app-demo-scanner-shell")(32, "div", 25)(33, "app-face-guided-camera", 26);
    \u0275\u0275listener("captured", function SearchPersonDemoComponent_Conditional_10_Template_app_face_guided_camera_captured_33_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFaceCapture($event));
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275element(34, "app-demo-or-divider");
    \u0275\u0275elementStart(35, "section", 27);
    \u0275\u0275element(36, "app-demo-capture-option-heading", 28);
    \u0275\u0275pipe(37, "transloco");
    \u0275\u0275pipe(38, "transloco");
    \u0275\u0275elementStart(39, "app-demo-upload-image-button", 29);
    \u0275\u0275pipe(40, "transloco");
    \u0275\u0275pipe(41, "transloco");
    \u0275\u0275pipe(42, "transloco");
    \u0275\u0275listener("clicked", function SearchPersonDemoComponent_Conditional_10_Template_app_demo_upload_image_button_clicked_39_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.triggerFilePicker());
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(43, SearchPersonDemoComponent_Conditional_10_Conditional_43_Template, 3, 0, "div", 30);
    \u0275\u0275elementStart(44, "button", 31);
    \u0275\u0275listener("click", function SearchPersonDemoComponent_Conditional_10_Template_button_click_44_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.handleSearch());
    });
    \u0275\u0275text(45);
    \u0275\u0275pipe(46, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "input", 32, 0);
    \u0275\u0275listener("change", function SearchPersonDemoComponent_Conditional_10_Template_input_change_47_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFilesSelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(49, SearchPersonDemoComponent_Conditional_10_Conditional_49_Template, 4, 1, "div", 33);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 24, "smartEnrollDemos.searchPerson.minScoreLabel", \u0275\u0275pureFunction1(50, _c12, ctx_r1.minScore.toFixed(2))), " ");
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.minScore);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 27, "smartEnrollDemos.searchPerson.searchModeLabel"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchMode);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 29, "smartEnrollDemos.searchPerson.collectionIdLabel"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.collectionsError ? 22 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("items", ctx_r1.collectionItems)("selectedIds", ctx_r1.selectedCollectionIds)("loading", ctx_r1.collectionsLoading)("emptySlot", ctx_r1.noCollectionsEmptySlot);
    \u0275\u0275advance(2);
    \u0275\u0275property("description", \u0275\u0275pipeBind1(26, 31, "smartEnrollDemos.searchPerson.chooseOneDescription"));
    \u0275\u0275advance(3);
    \u0275\u0275property("title", \u0275\u0275pipeBind1(29, 33, "smartEnrollDemos.searchPerson.cameraTitle"))("subtitle", \u0275\u0275pipeBind1(30, 35, "smartEnrollDemos.searchPerson.cameraSubtitle"));
    \u0275\u0275advance(5);
    \u0275\u0275property("fillFrame", true)("hideIdleExplainer", true)("captureSuccessFeedbackMs", 750);
    \u0275\u0275advance(3);
    \u0275\u0275property("title", \u0275\u0275pipeBind1(37, 37, "smartEnrollDemos.searchPerson.uploadTitle"))("subtitle", \u0275\u0275pipeBind1(38, 39, "smartEnrollDemos.searchPerson.uploadSubtitle"));
    \u0275\u0275advance(3);
    \u0275\u0275property("primaryText", ctx_r1.images.length ? \u0275\u0275pipeBind2(40, 41, "smartEnrollDemos.common.imagesAddMore", \u0275\u0275pureFunction1(52, _c2, ctx_r1.images.length)) : \u0275\u0275pipeBind1(41, 44, "smartEnrollDemos.common.uploadFaceImages"))("secondaryText", \u0275\u0275pipeBind1(42, 46, "smartEnrollDemos.common.jpegPngGallery"));
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.previews.length > 0 ? 43 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.images.length || ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(46, 48, ctx_r1.loading ? "smartEnrollDemos.searchPerson.searching" : "smartEnrollDemos.searchPerson.search"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.error ? 49 : -1);
  }
}
function SearchPersonDemoComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "details", 6)(1, "summary", 36)(2, "span", 37)(3, "span", 38);
    \u0275\u0275text(4, "menu_book");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 39);
    \u0275\u0275text(8, "expand_more");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 40)(10, "p");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "transloco");
    \u0275\u0275elementStart(13, "a", 41);
    \u0275\u0275text(14, "docs.verifik.co/biometrics/search");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "p", 42);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "transloco");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 4, "smartEnrollDemos.searchPerson.apiRefSummary"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 6, "smartEnrollDemos.common.officialDocsLead"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 8, "smartEnrollDemos.searchPerson.apiRefLinkSuffix"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 10, "smartEnrollDemos.searchPerson.apiRefBody"));
  }
}
var DOCS_BASE = "https://docs.verifik.co";
var RELATED_DOC_HREFS = [
  `${DOCS_BASE}/resources/the-person-object`,
  `${DOCS_BASE}/resources/list-all-persons`,
  `${DOCS_BASE}/resources/retrieve-a-person`,
  `${DOCS_BASE}/resources/persons/update-a-person`,
  `${DOCS_BASE}/resources/persons/delete-a-person`,
  `${DOCS_BASE}/biometrics/search`
];
var RELATED_DOC_BADGE_MUTED = [true, false, false, false, false, false];
var SearchPersonDemoComponent = class _SearchPersonDemoComponent {
  constructor() {
    this._api = inject(BiometricsDemoApiService);
    this._transloco = inject(TranslocoService);
    this._cdr = inject(ChangeDetectorRef);
    this._router = inject(Router);
    this.authChecked = false;
    this.images = [];
    this.previews = [];
    this.minScore = 0.75;
    this.searchMode = "FAST";
    this.collectionItems = [];
    this.collectionsLoading = false;
    this.collectionsError = null;
    this.selectedCollectionIds = [];
    this.noCollectionsEmptySlot = "";
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
    this.noCollectionsEmptySlot = this.buildNoCollectionsEmptySlot();
    this.loadCollections();
  }
  get showApiReference() {
    return this.result === null;
  }
  appendCapturedImage(preview, b64) {
    this.images = [...this.images, b64];
    this.previews = [...this.previews, preview];
    this._cdr.markForCheck();
  }
  onFaceCapture(event) {
    this.appendCapturedImage(event.dataUrl, event.base64);
  }
  triggerFilePicker() {
    this.fileInput?.nativeElement.click();
  }
  onFilesSelected(event) {
    return __async(this, null, function* () {
      const input = event.target;
      const files = input.files;
      if (!files?.length)
        return;
      const fileList = Array.from(files);
      const b64s = yield Promise.all(fileList.map((f) => fileToBase64(f)));
      const urls = fileList.map((f) => URL.createObjectURL(f));
      this.images = [...this.images, ...b64s];
      this.previews = [...this.previews, ...urls];
      input.value = "";
      this._cdr.markForCheck();
    });
  }
  handleSearch() {
    if (!this._api.ensureAuthenticated() || !this.images.length)
      return;
    this.loading = true;
    this.error = null;
    this.result = null;
    this._cdr.markForCheck();
    const selectedId = this.selectedCollectionIds[0];
    const selectedCollection = this.collectionItems.find((c) => c._id === selectedId);
    const collectionCode = selectedCollection ? selectedCollection.code : void 0;
    this._api.searchPersons({
      images: this.images,
      min_score: this.minScore,
      search_mode: this.searchMode,
      collection_id: collectionCode || void 0
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
    this.images = [];
    this.previews = [];
    this.selectedCollectionIds = [];
    this.result = null;
    this.error = null;
    this._cdr.markForCheck();
  }
  backToDemos() {
    void this._router.navigate(["/smart-enroll/demos"]);
  }
  loadCollections() {
    this.collectionsLoading = true;
    this.collectionsError = null;
    this._cdr.markForCheck();
    this._api.listCollections().subscribe({
      next: (items) => {
        this.collectionItems = items;
        this.collectionsLoading = false;
        this._cdr.markForCheck();
      },
      error: (err) => {
        this.collectionsError = err.error ?? err.message ?? "Failed to load collections";
        this.collectionItems = [];
        this.collectionsLoading = false;
        this._cdr.markForCheck();
      }
    });
  }
  buildNoCollectionsEmptySlot() {
    const lead = this._transloco.translate("smartEnrollDemos.createPerson.noCollectionsLead");
    const cta = this._transloco.translate("smartEnrollDemos.createPerson.noCollectionsCta");
    const tail = this._transloco.translate("smartEnrollDemos.createPerson.noCollectionsTail");
    return `${lead} <a href="/smart-enroll/demos/create-collection" class="text-primary font-semibold underline underline-offset-2">${cta}</a> ${tail}`;
  }
  buildRelatedDocs() {
    return RELATED_DOC_HREFS.map((href, i) => ({
      href,
      title: this._transloco.translate(`smartEnrollDemos.searchPerson.relatedDocs.${i}.title`),
      description: this._transloco.translate(`smartEnrollDemos.searchPerson.relatedDocs.${i}.description`),
      badge: this._transloco.translate(`smartEnrollDemos.searchPerson.relatedDocs.${i}.badge`),
      badgeMuted: RELATED_DOC_BADGE_MUTED[i]
    }));
  }
  static {
    this.\u0275fac = function SearchPersonDemoComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SearchPersonDemoComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SearchPersonDemoComponent, selectors: [["app-search-person-demo"]], viewQuery: function SearchPersonDemoComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c02, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.fileInput = _t.first);
      }
    }, decls: 13, vars: 9, consts: [["fileInput", ""], [1, "mb-8"], [1, "text-3xl", "font-black", "tracking-tight", "text-on-surface", "mb-2"], [1, "text-on-surface-variant"], [1, "h-40", "rounded-xl", "bg-surface-container-high", "animate-pulse"], [1, "space-y-5"], [1, "mt-10", "rounded-xl", "border", "border-outline-variant/20", "bg-surface-container-low/50", "text-left", "max-w-3xl", "mx-auto", "w-full", "px-4", "py-3", "group"], [3, "items"], [3, "reset", "result"], ["secondaryIcon", "search", 3, "secondary", "primary", "secondaryLabel", "primaryLabel", "primaryRouterLink"], [1, "bg-surface-container-low", "border", "border-outline-variant/15", "rounded-2xl", "p-5", "shadow-sm", "w-full"], [1, "grid", "grid-cols-1", "sm:grid-cols-3", "gap-6"], [1, "flex", "flex-col"], [1, "block", "text-sm", "font-semibold", "text-on-surface", "mb-1.5"], [1, "flex-1", "flex", "items-center", "min-h-[46px]"], ["type", "range", "min", "0.2", "max", "1", "step", "0.01", "name", "minScore", 1, "w-full", "accent-primary", 3, "ngModelChange", "ngModel"], ["name", "searchMode", 1, "w-full", "bg-surface-container-low", "border", "border-outline-variant/30", "rounded-lg", "px-4", "py-3", "text-on-surface", "text-sm", "focus:outline-none", "focus:border-primary/60", "transition-colors", 3, "ngModelChange", "ngModel"], ["value", "FAST"], ["value", "ACCURATE"], ["for", "s-col", 1, "block", "text-sm", "font-semibold", "text-on-surface", "mb-1.5"], [1, "mb-2", "text-sm", "text-error", "flex", "items-center", "gap-1.5"], ["labelId", "s-col", 3, "selectedIdsChange", "items", "selectedIds", "loading", "emptySlot"], [3, "description"], ["aria-labelledby", "search-person-camera-heading"], ["label", "A", "id", "search-person-camera-heading", 3, "title", "subtitle"], [1, "flex", "min-h-0", "flex-1", "flex-col"], [3, "captured", "fillFrame", "hideIdleExplainer", "captureSuccessFeedbackMs"], ["aria-labelledby", "search-person-upload-heading"], ["label", "B", "id", "search-person-upload-heading", 3, "title", "subtitle"], ["icon", "add_photo_alternate", 3, "clicked", "primaryText", "secondaryText"], [1, "flex", "flex-wrap", "gap-2"], ["type", "button", 1, "demo-btn-primary", 3, "click", "disabled"], ["type", "file", "accept", "image/*", "multiple", "", 1, "hidden", 3, "change"], [1, "px-4", "py-3", "bg-error-container/20", "border", "border-error/20", "rounded-lg", "flex", "items-center", "gap-2", "text-sm", "text-error"], [1, "material-symbols-outlined", "text-sm"], ["alt", "", "className", "w-20 h-20 object-cover rounded-lg border border-frost", 3, "src", "width", "height"], [1, "cursor-pointer", "list-none", "font-bold", "text-sm", "text-primary", "flex", "items-center", "justify-between", "gap-2"], [1, "flex", "items-center", "gap-2"], [1, "material-symbols-outlined", "text-lg"], [1, "material-symbols-outlined", "text-on-surface-variant/70", "group-open:rotate-180", "transition-transform"], [1, "mt-4", "space-y-4", "text-sm", "text-on-surface-variant", "border-t", "border-outline-variant/15", "pt-4"], ["href", "https://docs.verifik.co/biometrics/search", "target", "_blank", "rel", "noopener noreferrer", 1, "text-primary", "underline", "underline-offset-2"], [1, "text-xs", "leading-relaxed"]], template: function SearchPersonDemoComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-demo-page-shell")(1, "div", 1)(2, "h2", 2);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6);
        \u0275\u0275pipe(7, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(8, SearchPersonDemoComponent_Conditional_8_Template, 1, 0, "div", 4)(9, SearchPersonDemoComponent_Conditional_9_Template, 5, 8, "div", 5)(10, SearchPersonDemoComponent_Conditional_10_Template, 50, 54, "div", 5)(11, SearchPersonDemoComponent_Conditional_11_Template, 20, 12, "details", 6);
        \u0275\u0275element(12, "app-demo-related-docs-section", 7);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 5, ctx.result ? "smartEnrollDemos.searchPerson.heroTitleComplete" : "smartEnrollDemos.searchPerson.heroTitleInitial"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 7, ctx.result ? "smartEnrollDemos.searchPerson.heroSubtitleComplete" : "smartEnrollDemos.searchPerson.heroSubtitleInitial"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.authChecked ? 8 : ctx.result ? 9 : 10);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.showApiReference ? 11 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("items", ctx.relatedDocs);
      }
    }, dependencies: [
      CommonModule,
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
      SearchPersonResultComponent,
      CollectionMultiSelectComponent,
      DemoResultActionsComponent
    ], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SearchPersonDemoComponent, [{
    type: Component,
    args: [{ selector: "app-search-person-demo", standalone: true, imports: [
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
      SearchPersonResultComponent,
      CollectionMultiSelectComponent,
      DemoResultActionsComponent
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `<app-demo-page-shell>\r
    <div class="mb-8">\r
        <h2 class="text-3xl font-black tracking-tight text-on-surface mb-2">\r
            {{ (result ? 'smartEnrollDemos.searchPerson.heroTitleComplete' : 'smartEnrollDemos.searchPerson.heroTitleInitial') | transloco }}\r
        </h2>\r
        <p class="text-on-surface-variant">\r
            {{ (result ? 'smartEnrollDemos.searchPerson.heroSubtitleComplete' : 'smartEnrollDemos.searchPerson.heroSubtitleInitial') | transloco }}\r
        </p>\r
    </div>\r
\r
    @if (!authChecked) {\r
        <div class="h-40 rounded-xl bg-surface-container-high animate-pulse"></div>\r
    } @else if (result) {\r
        <div class="space-y-5">\r
            <app-search-person-result [result]="result" (reset)="reset()" />\r
\r
            <app-demo-result-actions\r
                [secondaryLabel]="'smartEnrollDemos.searchPersonResult.reset' | transloco"\r
                secondaryIcon="search"\r
                [primaryLabel]="'smartEnrollDemos.personResult.backToDemos' | transloco"\r
                [primaryRouterLink]="null"\r
                (secondary)="reset()"\r
                (primary)="backToDemos()"\r
            />\r
        </div>\r
    } @else {\r
        <div class="space-y-5">\r
            <div class="bg-surface-container-low border border-outline-variant/15 rounded-2xl p-5 shadow-sm w-full">\r
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">\r
                    <div class="flex flex-col">\r
                        <label class="block text-sm font-semibold text-on-surface mb-1.5">\r
                            {{ 'smartEnrollDemos.searchPerson.minScoreLabel' | transloco: { score: minScore.toFixed(2) } }}\r
                        </label>\r
                        <div class="flex-1 flex items-center min-h-[46px]">\r
                            <input type="range" min="0.2" max="1" step="0.01" [(ngModel)]="minScore" name="minScore" class="w-full accent-primary" />\r
                        </div>\r
                    </div>\r
                    <div class="flex flex-col">\r
                        <label class="block text-sm font-semibold text-on-surface mb-1.5">{{ 'smartEnrollDemos.searchPerson.searchModeLabel' | transloco }}</label>\r
                        <select [(ngModel)]="searchMode" name="searchMode" class="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg px-4 py-3 text-on-surface text-sm focus:outline-none focus:border-primary/60 transition-colors">\r
                            <option value="FAST">FAST</option>\r
                            <option value="ACCURATE">ACCURATE</option>\r
                        </select>\r
                    </div>\r
                    <div class="flex flex-col">\r
                        <label class="block text-sm font-semibold text-on-surface mb-1.5" for="s-col">\r
                            {{ 'smartEnrollDemos.searchPerson.collectionIdLabel' | transloco }}\r
                        </label>\r
                        @if (collectionsError) {\r
                            <div class="mb-2 text-sm text-error flex items-center gap-1.5">\r
                                <span class="material-symbols-outlined text-sm">error_outline</span>\r
                                {{ collectionsError }}\r
                            </div>\r
                        }\r
                        <app-collection-multi-select\r
                            labelId="s-col"\r
                            [items]="collectionItems"\r
                            [selectedIds]="selectedCollectionIds"\r
                            (selectedIdsChange)="selectedCollectionIds = $event"\r
                            [loading]="collectionsLoading"\r
                            [emptySlot]="noCollectionsEmptySlot"\r
                        />\r
                    </div>\r
                </div>\r
            </div>\r
\r
            <div class="space-y-5">\r
                <app-demo-choose-one-callout [description]="'smartEnrollDemos.searchPerson.chooseOneDescription' | transloco" />\r
                <section aria-labelledby="search-person-camera-heading">\r
                    <app-demo-capture-option-heading label="A" id="search-person-camera-heading" [title]="'smartEnrollDemos.searchPerson.cameraTitle' | transloco" [subtitle]="'smartEnrollDemos.searchPerson.cameraSubtitle' | transloco" />\r
                    <app-demo-scanner-shell>\r
                        <div class="flex min-h-0 flex-1 flex-col">\r
                            <app-face-guided-camera [fillFrame]="true" [hideIdleExplainer]="true" [captureSuccessFeedbackMs]="750" (captured)="onFaceCapture($event)" />\r
                        </div>\r
                    </app-demo-scanner-shell>\r
                </section>\r
                <app-demo-or-divider />\r
                <section aria-labelledby="search-person-upload-heading">\r
                    <app-demo-capture-option-heading label="B" id="search-person-upload-heading" [title]="'smartEnrollDemos.searchPerson.uploadTitle' | transloco" [subtitle]="'smartEnrollDemos.searchPerson.uploadSubtitle' | transloco" />\r
                    <app-demo-upload-image-button (clicked)="triggerFilePicker()" [primaryText]="images.length ? ('smartEnrollDemos.common.imagesAddMore' | transloco: { count: images.length }) : ('smartEnrollDemos.common.uploadFaceImages' | transloco)" [secondaryText]="'smartEnrollDemos.common.jpegPngGallery' | transloco" icon="add_photo_alternate" />\r
                </section>\r
            </div>\r
\r
            @if (previews.length > 0) {\r
                <div class="flex flex-wrap gap-2">\r
                    @for (preview of previews; track $index) {\r
                        <app-demo-raster-image [src]="preview" alt="" [width]="80" [height]="80" className="w-20 h-20 object-cover rounded-lg border border-frost" />\r
                    }\r
                </div>\r
            }\r
\r
            <button type="button" (click)="handleSearch()" [disabled]="!images.length || loading" class="demo-btn-primary">\r
                {{ (loading ? 'smartEnrollDemos.searchPerson.searching' : 'smartEnrollDemos.searchPerson.search') | transloco }}\r
            </button>\r
\r
            <input #fileInput type="file" accept="image/*" multiple class="hidden" (change)="onFilesSelected($event)" />\r
\r
            @if (error) {\r
                <div class="px-4 py-3 bg-error-container/20 border border-error/20 rounded-lg flex items-center gap-2 text-sm text-error">\r
                    <span class="material-symbols-outlined text-sm">error_outline</span>\r
                    {{ error }}\r
                </div>\r
            }\r
\r
        </div>\r
    }\r
\r
    @if (showApiReference) {\r
        <details class="mt-10 rounded-xl border border-outline-variant/20 bg-surface-container-low/50 text-left max-w-3xl mx-auto w-full px-4 py-3 group">\r
            <summary class="cursor-pointer list-none font-bold text-sm text-primary flex items-center justify-between gap-2">\r
                <span class="flex items-center gap-2">\r
                    <span class="material-symbols-outlined text-lg">menu_book</span>\r
                    {{ 'smartEnrollDemos.searchPerson.apiRefSummary' | transloco }}\r
                </span>\r
                <span class="material-symbols-outlined text-on-surface-variant/70 group-open:rotate-180 transition-transform">expand_more</span>\r
            </summary>\r
            <div class="mt-4 space-y-4 text-sm text-on-surface-variant border-t border-outline-variant/15 pt-4">\r
                <p>\r
                    {{ 'smartEnrollDemos.common.officialDocsLead' | transloco }}\r
                    <a href="https://docs.verifik.co/biometrics/search" target="_blank" rel="noopener noreferrer" class="text-primary underline underline-offset-2">docs.verifik.co/biometrics/search</a>\r
                    {{ 'smartEnrollDemos.searchPerson.apiRefLinkSuffix' | transloco }}\r
                </p>\r
                <p class="text-xs leading-relaxed">{{ 'smartEnrollDemos.searchPerson.apiRefBody' | transloco }}</p>\r
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SearchPersonDemoComponent, { className: "SearchPersonDemoComponent", filePath: "src/app/modules/smart-enroll/demos/pages/search-person/search-person-demo.component.ts", lineNumber: 67 });
})();
export {
  SearchPersonDemoComponent
};
//# sourceMappingURL=chunk-RAJ4L3DG.js.map
