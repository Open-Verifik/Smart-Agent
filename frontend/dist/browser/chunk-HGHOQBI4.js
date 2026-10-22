import {
  MatDrawer,
  MatDrawerContainer,
  MatDrawerContent,
  MatSidenavModule
} from "./chunk-5L5GJUAE.js";
import {
  createdAtRangeParams
} from "./chunk-M7M3MPVE.js";
import {
  MatDateRangeInput,
  MatDateRangePicker,
  MatDatepickerModule,
  MatDatepickerToggle,
  MatEndDate,
  MatStartDate
} from "./chunk-OE53JTO2.js";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable,
  MatTableDataSource,
  MatTableModule
} from "./chunk-XL5FUCYU.js";
import {
  MatButtonToggle,
  MatButtonToggleGroup,
  MatButtonToggleModule
} from "./chunk-JSHIWGJY.js";
import {
  MatPaginator,
  MatPaginatorModule
} from "./chunk-PI7X3PUO.js";
import {
  utils,
  writeFileSync
} from "./chunk-P2TQI6AF.js";
import {
  toHttpParams
} from "./chunk-NNMFBAZF.js";
import {
  FACE_RECOGNITION_CODES,
  isFaceRecognitionCode
} from "./chunk-VAHIF73V.js";
import {
  DateTime
} from "./chunk-KW3PRW6P.js";
import "./chunk-BSFB775C.js";
import {
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger
} from "./chunk-E5CL2DVE.js";
import {
  MatSnackBar,
  MatSnackBarModule
} from "./chunk-N6A4QSA6.js";
import "./chunk-H3UX3NVF.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-LVI7H6QB.js";
import "./chunk-JURKDGMK.js";
import {
  MatSelectModule
} from "./chunk-DT4JVZCC.js";
import {
  MatInputModule
} from "./chunk-DMXREZDX.js";
import "./chunk-CPZD6RE6.js";
import "./chunk-W5MZFF7W.js";
import {
  MatFormField,
  MatFormFieldModule,
  MatLabel,
  MatSuffix
} from "./chunk-QUFOCOZK.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-KIEFKQUB.js";
import "./chunk-OIBNGD5S.js";
import "./chunk-5HABGTLH.js";
import {
  MatButton,
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
  FormControl,
  FormControlDirective,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-JBF67GMG.js";
import {
  TranslocoDirective,
  TranslocoModule,
  TranslocoService
} from "./chunk-FWBWCXY5.js";
import {
  Router,
  RouterLink
} from "./chunk-QL64NPDU.js";
import {
  environment
} from "./chunk-3V5B4ZWC.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  EMPTY,
  HttpClient,
  Injectable,
  JsonPipe,
  NgClass,
  Subject,
  ViewChild,
  catchError,
  debounceTime,
  firstValueFrom,
  inject,
  map,
  setClassMetadata,
  signal,
  switchMap,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-YWP2Y7QK.js";
import {
  __async,
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-F5M2C4EZ.js";

// src/app/modules/smart-enroll/usage-history/usage-history.service.ts
var USAGE_HISTORY_LIST_COLUMNS = "_id statusCode status code endpoint createdAt cost";
var SmartEnrollUsageHistoryService = class _SmartEnrollUsageHistoryService {
  constructor() {
    this._http = inject(HttpClient);
  }
  get apiUrl() {
    return environment.apiUrl;
  }
  authHeaders() {
    const token = localStorage.getItem("accessToken");
    return token ? { Authorization: `Bearer ${token}` } : {};
  }
  listRequests(params = {}) {
    const _a = params, { like_code, where_code } = _a, rest = __objRest(_a, ["like_code", "where_code"]);
    const query = __spreadValues({
      columns: USAGE_HISTORY_LIST_COLUMNS,
      in_group: where_code ? void 0 : "faceRecognition",
      lean: true,
      sort: "-createdAt"
    }, rest);
    if (where_code)
      query["where_code"] = where_code;
    if (like_code)
      query["like_code"] = like_code;
    return this._http.get(`${this.apiUrl}/v2/api-requests`, {
      headers: this.authHeaders(),
      params: toHttpParams(query)
    });
  }
  getRequestDetail(id) {
    return this._http.get(`${this.apiUrl}/v2/api-requests/${id}/data`, {
      headers: this.authHeaders()
    });
  }
  getTopSales(params = {}) {
    return this._http.get(`${this.apiUrl}/v2/api-requests/top-sales`, {
      headers: this.authHeaders(),
      params: toHttpParams(params)
    }).pipe(map((res) => {
      const rows = Array.isArray(res) ? res : res?.data || [];
      return rows.filter((r) => isFaceRecognitionCode(r._id || r.feature?.code));
    }));
  }
  getMonthlyMetrics(year) {
    return this._http.get(`${this.apiUrl}/v2/api-requests/monthly`, {
      headers: this.authHeaders(),
      params: toHttpParams({ year })
    });
  }
  static {
    this.\u0275fac = function SmartEnrollUsageHistoryService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SmartEnrollUsageHistoryService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SmartEnrollUsageHistoryService, factory: _SmartEnrollUsageHistoryService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SmartEnrollUsageHistoryService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/modules/smart-enroll/usage-history/usage-history.component.ts
var _c0 = ["drawer"];
var _c1 = (a0) => ({ count: a0 });
var _c2 = (a0) => ({ page: a0 });
var _forTrack0 = ($index, $item) => $item._id;
function SmartEnrollUsageHistoryComponent_mat_drawer_container_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "mat-spinner", 59);
    \u0275\u0275elementStart(2, "p", 60);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r2("smartEnrollUsageHistory.loading"));
  }
}
function SmartEnrollUsageHistoryComponent_mat_drawer_container_0_Conditional_5_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 70);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.detail().statusCode);
  }
}
function SmartEnrollUsageHistoryComponent_mat_drawer_container_0_Conditional_5_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 71);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.formatDate(ctx_r3.detail().createdAt), " ");
  }
}
function SmartEnrollUsageHistoryComponent_mat_drawer_container_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "header", 61)(1, "div", 62)(2, "div", 45)(3, "mat-icon", 63);
    \u0275\u0275text(4, "data_object");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 64)(6, "h2", 65);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 66);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "button", 67);
    \u0275\u0275listener("click", function SmartEnrollUsageHistoryComponent_mat_drawer_container_0_Conditional_5_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.closeDrawer());
    });
    \u0275\u0275elementStart(11, "mat-icon", 63);
    \u0275\u0275text(12, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 68)(14, "span", 69);
    \u0275\u0275text(15);
    \u0275\u0275template(16, SmartEnrollUsageHistoryComponent_mat_drawer_container_0_Conditional_5_Conditional_16_Template, 2, 1, "span", 70);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 71);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, SmartEnrollUsageHistoryComponent_mat_drawer_container_0_Conditional_5_Conditional_19_Template, 2, 1, "span", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 72)(21, "section", 73)(22, "h3", 74);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "pre", 75);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "json");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "section", 73)(28, "h3", 74);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "pre", 76);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "json");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r3.detail().code || ctx_r3.detail().endpoint, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r3.detail().endpoint, " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngClass", ctx_r3.historyStatusClass(ctx_r3.detail()));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.historyStatusLabel(ctx_r3.detail()), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.detail().statusCode ? 16 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r3.formatCost(ctx_r3.detail().cost), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.detail().createdAt ? 19 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollUsageHistory.parameters"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 11, ctx_r3.detail().params));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollUsageHistory.response"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(32, 13, ctx_r3.detail().apiResponse));
  }
}
function SmartEnrollUsageHistoryComponent_mat_drawer_container_0_For_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-button-toggle", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const preset_r5 = ctx.$implicit;
    const t_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("value", preset_r5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2(ctx_r3.datePresetKey(preset_r5)));
  }
}
function SmartEnrollUsageHistoryComponent_mat_drawer_container_0_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 37)(1, "mat-label");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-date-range-input", 77)(4, "input", 78);
    \u0275\u0275listener("dateChange", function SmartEnrollUsageHistoryComponent_mat_drawer_container_0_Conditional_52_Template_input_dateChange_4_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.onCustomRangeChange());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 79);
    \u0275\u0275listener("dateChange", function SmartEnrollUsageHistoryComponent_mat_drawer_container_0_Conditional_52_Template_input_dateChange_5_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.onCustomRangeChange());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275element(6, "mat-datepicker-toggle", 80)(7, "mat-date-range-picker", null, 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const picker_r7 = \u0275\u0275reference(8);
    const t_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2("smartEnrollUsageHistory.dateRange"));
    \u0275\u0275advance();
    \u0275\u0275property("rangePicker", picker_r7);
    \u0275\u0275advance();
    \u0275\u0275property("formControl", ctx_r3.rangeStart)("placeholder", t_r2("smartEnrollUsageHistory.dateStart"));
    \u0275\u0275advance();
    \u0275\u0275property("formControl", ctx_r3.rangeEnd)("placeholder", t_r2("smartEnrollUsageHistory.dateEnd"));
    \u0275\u0275advance();
    \u0275\u0275property("for", picker_r7);
  }
}
function SmartEnrollUsageHistoryComponent_mat_drawer_container_0_For_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const code_r8 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", code_r8);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.formatServiceLabel(code_r8));
  }
}
function SmartEnrollUsageHistoryComponent_mat_drawer_container_0_Conditional_61_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 84);
    \u0275\u0275listener("click", function SmartEnrollUsageHistoryComponent_mat_drawer_container_0_Conditional_61_For_5_Template_button_click_0_listener() {
      const item_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.filterByEndpoint(item_r10._id));
    });
    \u0275\u0275elementStart(1, "div", 44)(2, "div", 85)(3, "mat-icon", 28);
    \u0275\u0275text(4, "face");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 86)(6, "p", 87);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 88);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 89);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    const t_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r3.endpointCardClasses(item_r10._id));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r3.endpointDisplayName(item_r10), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r10.total, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollUsageHistory.requests"), " ");
  }
}
function SmartEnrollUsageHistoryComponent_mat_drawer_container_0_Conditional_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 35)(1, "h2", 81);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 82);
    \u0275\u0275repeaterCreate(4, SmartEnrollUsageHistoryComponent_mat_drawer_container_0_Conditional_61_For_5_Template, 12, 4, "button", 83, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollUsageHistory.topEndpointsTitle"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r3.topEndpoints());
  }
}
function SmartEnrollUsageHistoryComponent_mat_drawer_container_0_Conditional_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollUsageHistory.tableSubtitle", \u0275\u0275pureFunction1(1, _c1, ctx_r3.total())), " ");
  }
}
function SmartEnrollUsageHistoryComponent_mat_drawer_container_0_Conditional_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollUsageHistory.tableSubtitlePageOnly", \u0275\u0275pureFunction1(1, _c2, ctx_r3.pageIndex() + 1)), " ");
  }
}
function SmartEnrollUsageHistoryComponent_mat_drawer_container_0_Conditional_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 50);
  }
}
function SmartEnrollUsageHistoryComponent_mat_drawer_container_0_Conditional_77_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 51);
    \u0275\u0275text(1, "download");
    \u0275\u0275elementEnd();
  }
}
function SmartEnrollUsageHistoryComponent_mat_drawer_container_0_Conditional_102_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275element(1, "mat-spinner", 90);
    \u0275\u0275elementStart(2, "p", 60);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r2("smartEnrollUsageHistory.loading"));
  }
}
function SmartEnrollUsageHistoryComponent_mat_drawer_container_0_Conditional_103_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58)(1, "div", 91)(2, "mat-icon");
    \u0275\u0275text(3, "insights");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "h3", 92);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 93);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollUsageHistory.emptyTitle"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollUsageHistory.emptySubtitle"), " ");
  }
}
function SmartEnrollUsageHistoryComponent_mat_drawer_container_0_Conditional_104_th_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 113);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollUsageHistory.status"), " ");
  }
}
function SmartEnrollUsageHistoryComponent_mat_drawer_container_0_Conditional_104_td_4_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 70);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r12.statusCode);
  }
}
function SmartEnrollUsageHistoryComponent_mat_drawer_container_0_Conditional_104_td_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 114)(1, "span", 69);
    \u0275\u0275text(2);
    \u0275\u0275template(3, SmartEnrollUsageHistoryComponent_mat_drawer_container_0_Conditional_104_td_4_Conditional_3_Template, 2, 1, "span", 70);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r12 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r3.historyStatusClass(row_r12));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.historyStatusLabel(row_r12), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r12.statusCode ? 3 : -1);
  }
}
function SmartEnrollUsageHistoryComponent_mat_drawer_container_0_Conditional_104_th_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 113);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollUsageHistory.service"), " ");
  }
}
function SmartEnrollUsageHistoryComponent_mat_drawer_container_0_Conditional_104_td_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 114)(1, "div", 115)(2, "span", 116);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 117);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r13 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r13.code || row_r13.endpoint);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r13.endpoint);
  }
}
function SmartEnrollUsageHistoryComponent_mat_drawer_container_0_Conditional_104_th_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 113);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollUsageHistory.date"), " ");
  }
}
function SmartEnrollUsageHistoryComponent_mat_drawer_container_0_Conditional_104_td_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 118);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r14 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.formatDate(row_r14.createdAt), " ");
  }
}
function SmartEnrollUsageHistoryComponent_mat_drawer_container_0_Conditional_104_th_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 113);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollUsageHistory.cost"), " ");
  }
}
function SmartEnrollUsageHistoryComponent_mat_drawer_container_0_Conditional_104_td_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 119);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r15 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.formatCost(row_r15.cost), " ");
  }
}
function SmartEnrollUsageHistoryComponent_mat_drawer_container_0_Conditional_104_th_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 120);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollPeople.actions"), " ");
  }
}
function SmartEnrollUsageHistoryComponent_mat_drawer_container_0_Conditional_104_td_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 121)(1, "div", 122)(2, "button", 123);
    \u0275\u0275listener("click", function SmartEnrollUsageHistoryComponent_mat_drawer_container_0_Conditional_104_td_16_Template_button_click_2_listener() {
      const row_r17 = \u0275\u0275restoreView(_r16).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.openInApi(row_r17));
    });
    \u0275\u0275elementStart(3, "mat-icon", 124);
    \u0275\u0275text(4, "open_in_new");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const row_r17 = ctx.$implicit;
    const t_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("matTooltip", t_r2("smartEnrollUsageHistory.openInApi"))("disabled", !row_r17.code);
  }
}
function SmartEnrollUsageHistoryComponent_mat_drawer_container_0_Conditional_104_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 125);
  }
}
function SmartEnrollUsageHistoryComponent_mat_drawer_container_0_Conditional_104_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 126);
  }
}
function SmartEnrollUsageHistoryComponent_mat_drawer_container_0_Conditional_104_For_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const size_r18 = ctx.$implicit;
    \u0275\u0275property("value", size_r18);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(size_r18);
  }
}
function SmartEnrollUsageHistoryComponent_mat_drawer_container_0_Conditional_104_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 94)(1, "table", 95);
    \u0275\u0275elementContainerStart(2, 96);
    \u0275\u0275template(3, SmartEnrollUsageHistoryComponent_mat_drawer_container_0_Conditional_104_th_3_Template, 2, 1, "th", 97)(4, SmartEnrollUsageHistoryComponent_mat_drawer_container_0_Conditional_104_td_4_Template, 4, 3, "td", 98);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(5, 99);
    \u0275\u0275template(6, SmartEnrollUsageHistoryComponent_mat_drawer_container_0_Conditional_104_th_6_Template, 2, 1, "th", 97)(7, SmartEnrollUsageHistoryComponent_mat_drawer_container_0_Conditional_104_td_7_Template, 6, 2, "td", 98);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(8, 100);
    \u0275\u0275template(9, SmartEnrollUsageHistoryComponent_mat_drawer_container_0_Conditional_104_th_9_Template, 2, 1, "th", 97)(10, SmartEnrollUsageHistoryComponent_mat_drawer_container_0_Conditional_104_td_10_Template, 2, 1, "td", 101);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(11, 102);
    \u0275\u0275template(12, SmartEnrollUsageHistoryComponent_mat_drawer_container_0_Conditional_104_th_12_Template, 2, 1, "th", 97)(13, SmartEnrollUsageHistoryComponent_mat_drawer_container_0_Conditional_104_td_13_Template, 2, 1, "td", 103);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(14, 104);
    \u0275\u0275template(15, SmartEnrollUsageHistoryComponent_mat_drawer_container_0_Conditional_104_th_15_Template, 2, 1, "th", 105)(16, SmartEnrollUsageHistoryComponent_mat_drawer_container_0_Conditional_104_td_16_Template, 5, 2, "td", 106);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(17, SmartEnrollUsageHistoryComponent_mat_drawer_container_0_Conditional_104_tr_17_Template, 1, 0, "tr", 107)(18, SmartEnrollUsageHistoryComponent_mat_drawer_container_0_Conditional_104_tr_18_Template, 1, 0, "tr", 108);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 109)(20, "label", 110)(21, "select", 111);
    \u0275\u0275listener("change", function SmartEnrollUsageHistoryComponent_mat_drawer_container_0_Conditional_104_Template_select_change_21_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.onPageSizeChange(+$event.target.value));
    });
    \u0275\u0275repeaterCreate(22, SmartEnrollUsageHistoryComponent_mat_drawer_container_0_Conditional_104_For_23_Template, 2, 2, "option", 36, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "mat-paginator", 112);
    \u0275\u0275listener("page", function SmartEnrollUsageHistoryComponent_mat_drawer_container_0_Conditional_104_Template_mat_paginator_page_24_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.onPaginatorEvent($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("dataSource", ctx_r3.dataSource);
    \u0275\u0275advance(16);
    \u0275\u0275property("matHeaderRowDef", ctx_r3.displayedColumns)("matHeaderRowDefSticky", true);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx_r3.displayedColumns);
    \u0275\u0275advance(3);
    \u0275\u0275property("value", ctx_r3.pageSize());
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.pageSizeOptions);
    \u0275\u0275advance(2);
    \u0275\u0275property("length", ctx_r3.paginatorLength)("pageSize", ctx_r3.pageSize())("pageIndex", ctx_r3.pageIndex())("hidePageSize", true);
  }
}
function SmartEnrollUsageHistoryComponent_mat_drawer_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-drawer-container", 4)(1, "mat-drawer", 5, 0)(3, "div", 6);
    \u0275\u0275template(4, SmartEnrollUsageHistoryComponent_mat_drawer_container_0_Conditional_4_Template, 4, 1, "div", 7)(5, SmartEnrollUsageHistoryComponent_mat_drawer_container_0_Conditional_5_Template, 33, 15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-drawer-content")(7, "div", 8)(8, "header", 9)(9, "div", 10)(10, "div", 11)(11, "a", 12);
    \u0275\u0275text(12, " Verifik ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "mat-icon", 13);
    \u0275\u0275elementStart(14, "a", 14);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "mat-icon", 13);
    \u0275\u0275elementStart(17, "span", 15);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 16)(20, "h1", 17);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "p", 18);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(24, "main", 19)(25, "div", 20)(26, "div", 21)(27, "div", 22)(28, "div", 23)(29, "div", 24)(30, "mat-icon", 25);
    \u0275\u0275text(31, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "input", 26);
    \u0275\u0275listener("ngModelChange", function SmartEnrollUsageHistoryComponent_mat_drawer_container_0_Template_input_ngModelChange_32_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onSearchInput($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "button", 27);
    \u0275\u0275listener("click", function SmartEnrollUsageHistoryComponent_mat_drawer_container_0_Template_button_click_33_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.clearFilters());
    });
    \u0275\u0275elementStart(34, "mat-icon", 28);
    \u0275\u0275text(35, "filter_list_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "span");
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "div", 29)(39, "mat-button-toggle-group", 30);
    \u0275\u0275listener("change", function SmartEnrollUsageHistoryComponent_mat_drawer_container_0_Template_mat_button_toggle_group_change_39_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onStatusFilterChange($event.value));
    });
    \u0275\u0275elementStart(40, "mat-button-toggle", 31);
    \u0275\u0275text(41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "mat-button-toggle", 32);
    \u0275\u0275text(43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "mat-button-toggle", 33);
    \u0275\u0275text(45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "mat-button-toggle", 34);
    \u0275\u0275text(47);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div", 35)(49, "mat-button-toggle-group", 30);
    \u0275\u0275listener("change", function SmartEnrollUsageHistoryComponent_mat_drawer_container_0_Template_mat_button_toggle_group_change_49_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onDatePresetChange($event.value));
    });
    \u0275\u0275repeaterCreate(50, SmartEnrollUsageHistoryComponent_mat_drawer_container_0_For_51_Template, 2, 2, "mat-button-toggle", 36, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275template(52, SmartEnrollUsageHistoryComponent_mat_drawer_container_0_Conditional_52_Template, 9, 7, "mat-form-field", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "div", 38)(54, "label", 39);
    \u0275\u0275text(55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "select", 40);
    \u0275\u0275listener("ngModelChange", function SmartEnrollUsageHistoryComponent_mat_drawer_container_0_Template_select_ngModelChange_56_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onServiceFilterChange($event));
    });
    \u0275\u0275elementStart(57, "option", 41);
    \u0275\u0275text(58);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(59, SmartEnrollUsageHistoryComponent_mat_drawer_container_0_For_60_Template, 2, 2, "option", 36, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275template(61, SmartEnrollUsageHistoryComponent_mat_drawer_container_0_Conditional_61_Template, 6, 1, "section", 35);
    \u0275\u0275elementStart(62, "div", 42)(63, "div", 43)(64, "div", 44)(65, "div", 45)(66, "mat-icon");
    \u0275\u0275text(67, "history");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(68, "div")(69, "h2", 46);
    \u0275\u0275text(70);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "p", 47);
    \u0275\u0275template(72, SmartEnrollUsageHistoryComponent_mat_drawer_container_0_Conditional_72_Template, 1, 3)(73, SmartEnrollUsageHistoryComponent_mat_drawer_container_0_Conditional_73_Template, 1, 3);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(74, "div", 48)(75, "button", 49);
    \u0275\u0275template(76, SmartEnrollUsageHistoryComponent_mat_drawer_container_0_Conditional_76_Template, 1, 0, "mat-spinner", 50)(77, SmartEnrollUsageHistoryComponent_mat_drawer_container_0_Conditional_77_Template, 2, 0, "mat-icon", 51);
    \u0275\u0275text(78);
    \u0275\u0275elementStart(79, "mat-icon", 52);
    \u0275\u0275text(80, "arrow_drop_down");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(81, "mat-menu", null, 1)(83, "button", 53);
    \u0275\u0275listener("click", function SmartEnrollUsageHistoryComponent_mat_drawer_container_0_Template_button_click_83_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.exportList("xlsx"));
    });
    \u0275\u0275elementStart(84, "mat-icon");
    \u0275\u0275text(85, "table_chart");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "span");
    \u0275\u0275text(87);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(88, "button", 53);
    \u0275\u0275listener("click", function SmartEnrollUsageHistoryComponent_mat_drawer_container_0_Template_button_click_88_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.exportList("csv"));
    });
    \u0275\u0275elementStart(89, "mat-icon");
    \u0275\u0275text(90, "description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(91, "span");
    \u0275\u0275text(92);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(93, "button", 53);
    \u0275\u0275listener("click", function SmartEnrollUsageHistoryComponent_mat_drawer_container_0_Template_button_click_93_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.exportList("json"));
    });
    \u0275\u0275elementStart(94, "mat-icon");
    \u0275\u0275text(95, "data_object");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(96, "span");
    \u0275\u0275text(97);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(98, "div", 54);
    \u0275\u0275element(99, "span", 55);
    \u0275\u0275text(100);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(101, "div", 56);
    \u0275\u0275template(102, SmartEnrollUsageHistoryComponent_mat_drawer_container_0_Conditional_102_Template, 4, 1, "div", 57)(103, SmartEnrollUsageHistoryComponent_mat_drawer_container_0_Conditional_103_Template, 8, 2, "div", 58)(104, SmartEnrollUsageHistoryComponent_mat_drawer_container_0_Conditional_104_Template, 25, 9);
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    const t_r2 = ctx.$implicit;
    const exportMenu_r19 = \u0275\u0275reference(82);
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r3.detailLoading() ? 4 : ctx_r3.detail() ? 5 : -1);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate1(" ", t_r2("nav.smart_enroll"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r2("smartEnrollUsageHistory.title"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollUsageHistory.title"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollUsageHistory.subtitle"), " ");
    \u0275\u0275advance(9);
    \u0275\u0275property("placeholder", t_r2("smartEnrollUsageHistory.search"))("ngModel", ctx_r3.searchText);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r3.disabledClearFilters || ctx_r3.loading());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r2("smartEnrollUsageHistory.clearFilters"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r3.statusFilter)("disabled", ctx_r3.loading());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2("smartEnrollUsageHistory.filterStatusAll"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2("smartEnrollUsageHistory.filterStatusSuccess"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2("smartEnrollUsageHistory.filterStatusFailed"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2("smartEnrollUsageHistory.filterStatusPending"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r3.datePreset)("disabled", ctx_r3.loading());
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.datePresets);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.datePreset === "custom" ? 52 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollUsageHistory.filterService"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r3.serviceFilter)("disabled", ctx_r3.loading());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2("smartEnrollUsageHistory.filterServiceAll"));
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.serviceCodes);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.topEndpoints().length ? 61 : -1);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollUsageHistory.tableTitle"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.total() !== null && ctx_r3.total() >= 0 ? 72 : 73);
    \u0275\u0275advance(3);
    \u0275\u0275property("matMenuTriggerFor", exportMenu_r19)("disabled", ctx_r3.exporting() || !ctx_r3.canExport);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.exporting() ? 76 : 77);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r3.exporting() ? t_r2("smartEnrollUsageHistory.exporting") : t_r2("smartEnrollUsageHistory.export"), " ");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(t_r2("smartEnrollUsageHistory.exportAsExcel"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(t_r2("smartEnrollUsageHistory.exportAsCsv"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(t_r2("smartEnrollUsageHistory.exportAsJson"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-emerald-400", !ctx_r3.loading())("bg-amber-400", ctx_r3.loading());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.loading() ? t_r2("smartEnrollUsageHistory.loading") : t_r2("smartEnrollUsageHistory.live"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.loading() ? 102 : !ctx_r3.dataSource.data.length ? 103 : 104);
  }
}
var EXPORT_MAX = 1e4;
var EXPORT_PAGE_SIZE = 200;
var SmartEnrollUsageHistoryComponent = class _SmartEnrollUsageHistoryComponent {
  constructor() {
    this._service = inject(SmartEnrollUsageHistoryService);
    this._router = inject(Router);
    this._cdr = inject(ChangeDetectorRef);
    this._transloco = inject(TranslocoService);
    this._snack = inject(MatSnackBar);
    this._searchChange$ = new Subject();
    this._reload$ = new Subject();
    this._destroy$ = new Subject();
    this.serviceCodes = [...FACE_RECOGNITION_CODES];
    this.datePresets = ["all", "today", "this_week", "this_month", "custom"];
    this.displayedColumns = ["status", "service", "date", "cost", "actions"];
    this.pageSizeOptions = [10, 25, 50];
    this.dataSource = new MatTableDataSource([]);
    this.rangeStart = new FormControl(null);
    this.rangeEnd = new FormControl(null);
    this.datePreset = "all";
    this.loading = signal(false);
    this.exporting = signal(false);
    this.searchText = "";
    this.serviceFilter = "";
    this.statusFilter = "all";
    this.total = signal(null);
    this.pageIndex = signal(0);
    this.pageSize = signal(10);
    this.topEndpoints = signal([]);
    this.detail = signal(null);
    this.detailLoading = signal(false);
  }
  ngOnInit() {
    this._reload$.pipe(switchMap(() => {
      this.loading.set(true);
      const params = __spreadValues({
        page: this.pageIndex() + 1,
        limit: this.pageSize()
      }, this._buildFilterParams());
      return this._service.listRequests(params).pipe(catchError(() => {
        this.dataSource.data = [];
        this.total.set(null);
        this.loading.set(false);
        this._cdr.markForCheck();
        return EMPTY;
      }));
    }), takeUntil(this._destroy$)).subscribe((res) => {
      this.dataSource.data = res.data || [];
      this.total.set(res.total ?? null);
      this.loading.set(false);
      this._cdr.markForCheck();
    });
    this._searchChange$.pipe(debounceTime(350), takeUntil(this._destroy$)).subscribe(() => {
      this.pageIndex.set(0);
      this.loadData();
    });
    this.loadData();
    this._loadTopSales();
  }
  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }
  get paginatorLength() {
    const exact = this.total();
    if (exact !== null && exact >= 0)
      return exact;
    const page = this.pageIndex();
    const size = this.pageSize();
    const rows = this.dataSource.data.length;
    return page * size + rows + (rows >= size ? 1 : 0);
  }
  get disabledClearFilters() {
    return !this.searchText && this.statusFilter === "all" && !this.serviceFilter && this.datePreset === "all";
  }
  get canExport() {
    const total = this.total();
    if (total != null)
      return total > 0;
    return this.dataSource.data.length > 0;
  }
  loadData() {
    this._reload$.next();
  }
  onSearchInput(value) {
    this.searchText = value?.trim() || "";
    this._searchChange$.next(this.searchText);
  }
  onStatusFilterChange(value) {
    this.statusFilter = value;
    this.pageIndex.set(0);
    this.loadData();
  }
  onServiceFilterChange(value) {
    this.serviceFilter = value || "";
    this.pageIndex.set(0);
    this.loadData();
  }
  onDatePresetChange(value) {
    this.datePreset = value;
    this.pageIndex.set(0);
    if (value !== "custom") {
      this.rangeStart.setValue(null, { emitEvent: false });
      this.rangeEnd.setValue(null, { emitEvent: false });
      this.loadData();
      return;
    }
    this._cdr.markForCheck();
  }
  onCustomRangeChange() {
    const start = this.rangeStart.value;
    const end = this.rangeEnd.value;
    if (!start?.isValid || !end?.isValid)
      return;
    this.pageIndex.set(0);
    this.loadData();
  }
  filterByEndpoint(code) {
    this.serviceFilter = code;
    this.pageIndex.set(0);
    this.loadData();
    this._cdr.markForCheck();
  }
  isEndpointSelected(code) {
    return this.serviceFilter === code;
  }
  endpointCardClasses(code) {
    const selected = this.isEndpointSelected(code);
    return {
      "border-indigo-300": selected,
      "bg-indigo-50": selected,
      "dark:border-indigo-700": selected,
      "dark:bg-indigo-950/30": selected,
      "border-stone-200/90": !selected,
      "bg-white": !selected,
      "dark:border-gray-800": !selected,
      "dark:bg-gray-900/70": !selected
    };
  }
  clearFilters() {
    this.searchText = "";
    this.statusFilter = "all";
    this.serviceFilter = "";
    this.datePreset = "all";
    this.rangeStart.setValue(null, { emitEvent: false });
    this.rangeEnd.setValue(null, { emitEvent: false });
    this.pageIndex.set(0);
    this.loadData();
    this._cdr.markForCheck();
  }
  onPaginatorEvent(event) {
    this.pageIndex.set(event.pageIndex);
    this.pageSize.set(event.pageSize);
    this.loadData();
  }
  onPageSizeChange(pageSize) {
    if (!pageSize || pageSize === this.pageSize())
      return;
    this.pageIndex.set(0);
    this.pageSize.set(pageSize);
    this.loadData();
  }
  openDetail(row) {
    this.detail.set(null);
    this.detailLoading.set(true);
    this.drawer?.open();
    this._service.getRequestDetail(row._id).subscribe({
      next: (res) => {
        this.detail.set(__spreadValues(__spreadValues({}, row), res.data));
        this.detailLoading.set(false);
        this._cdr.markForCheck();
      },
      error: () => {
        this.detailLoading.set(false);
        this._cdr.markForCheck();
      }
    });
  }
  closeDrawer() {
    this.drawer?.close();
    this.detail.set(null);
  }
  openInApi(row) {
    if (!row.code)
      return;
    this._router.navigate(["/smart-enroll/api"], {
      queryParams: { code: row.code }
    });
  }
  formatDate(value) {
    if (!value)
      return "\u2014";
    return DateTime.fromISO(value).toFormat("LLL dd, yyyy h:mma");
  }
  formatCost(cost) {
    if (cost == null)
      return "\u2014";
    return `$${Number(cost).toFixed(4)}`;
  }
  formatServiceLabel(code) {
    return code.replace(/^face_recognition_/, "").split("_").map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(" ");
  }
  endpointDisplayName(item) {
    return item.feature?.name || this.formatServiceLabel(item._id);
  }
  resolveHistoryStatus(row) {
    if (row?.historyStatus === "success" || row?.historyStatus === "failed" || row?.historyStatus === "pending") {
      return row.historyStatus;
    }
    if (row?.status === "failed" || row?.status === "timed-out")
      return "failed";
    if (row?.status === "queue")
      return "pending";
    if (row?.status === "ok" && row.statusCode != null && row.statusCode >= 400)
      return "failed";
    if (row?.status === "ok")
      return "success";
    return "pending";
  }
  historyStatusClass(row) {
    const status = this.resolveHistoryStatus(row);
    if (status === "success")
      return "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300";
    if (status === "failed")
      return "bg-red-100 text-red-700 dark:bg-red-950/40 dark:text-red-300";
    return "bg-stone-100 text-stone-600 dark:bg-gray-800 dark:text-stone-300";
  }
  historyStatusLabel(row) {
    const status = this.resolveHistoryStatus(row);
    if (status === "failed")
      return this._t("smartEnrollUsageHistory.statusFailed");
    if (status === "pending")
      return this._t("smartEnrollUsageHistory.statusPending");
    return this._t("smartEnrollUsageHistory.statusSuccess");
  }
  datePresetKey(preset) {
    const keys = {
      all: "smartEnrollUsageHistory.filterDateAll",
      today: "smartEnrollUsageHistory.filterDateToday",
      this_week: "smartEnrollUsageHistory.filterDateThisWeek",
      this_month: "smartEnrollUsageHistory.filterDateThisMonth",
      custom: "smartEnrollUsageHistory.filterDateCustom"
    };
    return keys[preset];
  }
  /**
   * Downloads every filtered SmartEnroll row, not just the current page.
   */
  exportList(format) {
    return __async(this, null, function* () {
      if (this.exporting() || !this.canExport)
        return;
      this.exporting.set(true);
      this._cdr.markForCheck();
      try {
        const { rows, total } = yield this._collectExportRows();
        if (!rows.length) {
          this._snack.open(this._t("smartEnrollUsageHistory.exportEmpty"), void 0, { duration: 3e3 });
          return;
        }
        this._writeExportFile(format, rows);
        if (total > rows.length) {
          this._snack.open(this._t("smartEnrollUsageHistory.exportTruncated", { exported: rows.length, total }), void 0, { duration: 4500 });
        }
      } catch {
        this._snack.open(this._t("smartEnrollUsageHistory.exportFailed"), void 0, { duration: 3e3 });
      } finally {
        this.exporting.set(false);
        this._cdr.markForCheck();
      }
    });
  }
  _buildFilterParams() {
    const params = {};
    if (this.searchText)
      params.like_code = this.searchText.toLowerCase();
    if (this.serviceFilter)
      params.where_code = this.serviceFilter;
    params.historyBucket = this.statusFilter;
    const range = this._dateRangeForPreset(this.datePreset);
    if (range) {
      Object.assign(params, createdAtRangeParams(range.start, range.end));
    }
    return params;
  }
  _dateRangeForPreset(preset) {
    if (preset === "all")
      return null;
    if (preset === "custom")
      return this._customDateRange();
    const now = DateTime.now();
    switch (preset) {
      case "today":
        return { start: now.startOf("day"), end: now.endOf("day") };
      case "this_week":
        return { start: now.startOf("week"), end: now.endOf("week") };
      case "this_month":
        return { start: now.startOf("month"), end: now.endOf("month") };
      default:
        return null;
    }
  }
  _customDateRange() {
    const start = this.rangeStart.value;
    const end = this.rangeEnd.value;
    if (!start?.isValid || !end?.isValid)
      return null;
    return { start: start.startOf("day"), end: end.endOf("day") };
  }
  _collectExportRows() {
    return __async(this, null, function* () {
      const rows = [];
      let page = 1;
      let total = 0;
      while (rows.length < EXPORT_MAX) {
        const response = yield firstValueFrom(this._service.listRequests(__spreadProps(__spreadValues({}, this._buildFilterParams()), {
          page,
          limit: EXPORT_PAGE_SIZE
        })));
        const chunk = response.data || [];
        total = response.total ?? total;
        rows.push(...chunk);
        if (!chunk.length || chunk.length < EXPORT_PAGE_SIZE || total && rows.length >= total)
          break;
        page += 1;
      }
      return { rows: rows.slice(0, EXPORT_MAX), total: total || rows.length };
    });
  }
  _writeExportFile(format, rows) {
    const fileName = this._exportFileName(format);
    if (format === "json") {
      this._downloadBlob(new Blob([JSON.stringify(rows.map((row) => this._mapExportJson(row)), null, 2)], {
        type: "application/json;charset=utf-8;"
      }), fileName);
      return;
    }
    const sheet = utils.json_to_sheet(rows.map((row) => this._mapExportSheetRow(row)));
    if (format === "csv") {
      this._downloadBlob(new Blob([`\uFEFF${utils.sheet_to_csv(sheet)}`], { type: "text/csv;charset=utf-8;" }), fileName);
      return;
    }
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, sheet, "History");
    writeFileSync(workbook, fileName);
  }
  _mapExportJson(row) {
    return {
      statusCode: row.statusCode ?? null,
      status: row.status ?? "",
      code: row.code ?? "",
      endpoint: row.endpoint ?? "",
      method: row.method ?? "",
      createdAt: row.createdAt ?? "",
      cost: row.cost ?? null
    };
  }
  _mapExportSheetRow(row) {
    return {
      [this._t("smartEnrollUsageHistory.statusCode")]: row.statusCode ?? "",
      [this._t("smartEnrollUsageHistory.status")]: row.status ?? "",
      [this._t("smartEnrollUsageHistory.service")]: row.code ?? "",
      [this._t("smartEnrollUsageHistory.endpoint")]: row.endpoint ?? "",
      [this._t("smartEnrollUsageHistory.date")]: this.formatDate(row.createdAt),
      [this._t("smartEnrollUsageHistory.cost")]: row.cost ?? ""
    };
  }
  _exportFileName(format) {
    const range = this._dateRangeForPreset(this.datePreset);
    const from = range?.start.toFormat("yyyy-MM-dd") ?? "all";
    const to = range?.end.toFormat("yyyy-MM-dd") ?? "all";
    return `smartenroll-history_${from}_${to}_${DateTime.now().toFormat("yyyy-MM-dd_HHmm")}.${format}`;
  }
  _downloadBlob(blob, fileName) {
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = fileName;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
    URL.revokeObjectURL(url);
  }
  _t(key, params) {
    return this._transloco.translate(key, params);
  }
  _loadTopSales() {
    const year = DateTime.now().toFormat("yyyy");
    this._service.getTopSales({ year }).subscribe({
      next: (rows) => {
        this.topEndpoints.set(rows.slice(0, 5));
        this._cdr.markForCheck();
      },
      error: () => this.topEndpoints.set([])
    });
  }
  static {
    this.\u0275fac = function SmartEnrollUsageHistoryComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SmartEnrollUsageHistoryComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SmartEnrollUsageHistoryComponent, selectors: [["app-smart-enroll-usage-history"]], viewQuery: function SmartEnrollUsageHistoryComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.drawer = _t.first);
      }
    }, hostAttrs: [1, "flex", "flex-auto", "min-w-0", "w-full"], decls: 1, vars: 0, consts: [["drawer", ""], ["exportMenu", "matMenu"], ["picker", ""], ["class", "usage-history-container h-full min-h-0 w-full bg-stone-50 dark:bg-gray-950", 4, "transloco"], [1, "usage-history-container", "h-full", "min-h-0", "w-full", "bg-stone-50", "dark:bg-gray-950"], ["mode", "over", "position", "end", 1, "usage-history-drawer", "w-full", "max-w-lg", "border-l", "border-stone-200/90", "dark:border-gray-800"], [1, "flex", "h-full", "flex-col", "overflow-hidden", "bg-white", "dark:bg-gray-900/70"], [1, "flex", "flex-1", "flex-col", "items-center", "justify-center", "px-6", "py-16"], [1, "flex", "h-full", "min-h-0", "min-w-0", "flex-auto", "flex-col", "overflow-auto"], [1, "border-b", "border-stone-200/90", "bg-white/90", "px-5", "py-6", "backdrop-blur-sm", "dark:border-gray-800", "dark:bg-gray-950/90", "md:px-8", "md:py-8"], [1, "mx-auto", "flex", "w-full", "max-w-7xl", "flex-col", "gap-5"], [1, "flex", "flex-wrap", "items-center", "text-xs", "font-medium", "leading-none", "text-stone-500", "dark:text-stone-400"], ["routerLink", "/home", 1, "cursor-pointer", "text-stone-700", "underline-offset-4", "hover:underline", "dark:text-stone-300"], ["svgIcon", "heroicons_solid:chevron-right", 1, "icon-size-4", "mx-2", "text-stone-400"], ["routerLink", "/smart-enroll/projects", 1, "cursor-pointer", "text-stone-700", "underline-offset-4", "hover:underline", "dark:text-stone-300"], [1, "cursor-default", "text-stone-600", "dark:text-stone-300"], [1, "max-w-2xl"], [1, "text-2xl", "font-semibold", "tracking-tight", "text-stone-950", "dark:text-white", "md:text-3xl"], [1, "mt-2", "text-sm", "leading-6", "text-stone-500", "dark:text-stone-400", "md:text-base"], [1, "flex", "flex-auto", "flex-col", "px-5", "py-8", "md:px-8", "md:py-10"], [1, "mx-auto", "flex", "w-full", "max-w-7xl", "flex-col", "gap-6"], [1, "rounded-2xl", "border", "border-stone-200/90", "bg-white", "p-5", "shadow-sm", "dark:border-gray-800", "dark:bg-gray-900/70", "md:p-6"], [1, "flex", "flex-col", "gap-4"], [1, "flex", "flex-col", "gap-4", "lg:flex-row", "lg:items-center", "lg:justify-between"], [1, "relative", "min-w-0", "flex-1"], [1, "pointer-events-none", "absolute", "left-3", "top-1/2", "!h-4", "!w-4", "-translate-y-1/2", "text-stone-400"], ["type", "text", 1, "h-11", "w-full", "rounded-xl", "border", "border-stone-200", "bg-stone-50", "pl-10", "pr-4", "text-sm", "text-stone-900", "outline-none", "transition", "focus:border-stone-400", "focus:bg-white", "dark:border-gray-700", "dark:bg-gray-950", "dark:text-stone-100", "placeholder:text-stone-400", "dark:placeholder:text-stone-500", "dark:focus:border-gray-500", "dark:focus:bg-gray-950", 3, "ngModelChange", "placeholder", "ngModel"], ["type", "button", 1, "inline-flex", "min-h-10", "shrink-0", "items-center", "justify-center", "gap-2", "rounded-xl", "border", "border-stone-200", "px-4", "text-sm", "font-medium", "text-stone-800", "transition", "hover:bg-stone-50", "disabled:cursor-not-allowed", "disabled:opacity-60", "dark:border-gray-700", "dark:text-stone-100", "dark:hover:bg-gray-800", 3, "click", "disabled"], [1, "!h-4", "!w-4", "!text-base"], [1, "flex", "flex-col", "gap-3", "xl:flex-row", "xl:flex-wrap", "xl:items-center"], [1, "rounded-xl", 3, "change", "value", "disabled"], ["value", "all"], ["value", "success"], ["value", "failed"], ["value", "pending"], [1, "flex", "flex-col", "gap-3"], [3, "value"], ["appearance", "outline", "subscriptSizing", "dynamic", 1, "history-date-range", "w-full", "sm:w-80"], [1, "min-w-[220px]", "flex-1"], [1, "mb-1.5", "block", "text-xs", "font-medium", "uppercase", "tracking-[0.12em]", "text-stone-500", "dark:text-stone-400"], [1, "h-11", "w-full", "rounded-xl", "border", "border-stone-200", "bg-stone-50", "px-4", "text-sm", "text-stone-900", "outline-none", "transition", "focus:border-stone-400", "focus:bg-white", "dark:border-gray-700", "dark:bg-gray-950", "dark:text-stone-100", "placeholder:text-stone-400", "dark:placeholder:text-stone-500", "dark:focus:border-gray-500", "dark:focus:bg-gray-950", 3, "ngModelChange", "ngModel", "disabled"], ["value", ""], [1, "overflow-hidden", "rounded-2xl", "border", "border-stone-200/90", "bg-white", "shadow-sm", "dark:border-gray-800", "dark:bg-gray-900/70"], [1, "flex", "flex-col", "gap-3", "border-b", "border-stone-200/80", "p-5", "dark:border-gray-800", "md:flex-row", "md:items-center", "md:justify-between", "md:p-6"], [1, "flex", "items-start", "gap-3"], [1, "flex", "h-10", "w-10", "shrink-0", "items-center", "justify-center", "rounded-xl", "border", "border-stone-200", "bg-stone-50", "text-stone-700", "dark:border-gray-800", "dark:bg-gray-950", "dark:text-stone-200"], [1, "text-base", "font-semibold", "text-stone-950", "dark:text-white"], [1, "mt-1", "text-sm", "text-stone-500", "dark:text-stone-400"], [1, "flex", "flex-wrap", "items-center", "gap-2"], ["mat-stroked-button", "", "type", "button", 1, "!rounded-xl", 3, "matMenuTriggerFor", "disabled"], ["diameter", "16", 1, "mr-2"], [1, "mr-1", "!h-4", "!w-4"], [1, "!h-4", "!w-4"], ["mat-menu-item", "", "type", "button", 3, "click"], [1, "flex", "items-center", "gap-2", "rounded-full", "bg-stone-100", "px-3", "py-1", "text-xs", "font-medium", "text-stone-500", "dark:bg-gray-800", "dark:text-gray-400"], [1, "h-2", "w-2", "rounded-full"], [1, "p-5", "md:p-6"], [1, "flex", "flex-col", "items-center", "justify-center", "rounded-xl", "border", "border-dashed", "border-stone-200", "py-14", "text-center", "dark:border-gray-800"], [1, "flex", "flex-col", "items-center", "justify-center", "rounded-xl", "border", "border-dashed", "border-stone-200", "px-5", "py-14", "text-center", "dark:border-gray-800"], ["diameter", "36"], [1, "mt-4", "text-sm", "text-stone-500", "dark:text-stone-400"], [1, "flex", "items-start", "justify-between", "gap-4", "border-b", "border-stone-200/90", "px-5", "py-5", "dark:border-gray-800", "md:px-6"], [1, "flex", "min-w-0", "items-start", "gap-3"], [1, "!h-5", "!w-5", "!text-xl"], [1, "min-w-0"], [1, "truncate", "text-xl", "font-semibold", "tracking-tight", "text-stone-950", "dark:text-white"], [1, "mt-1", "truncate", "text-sm", "leading-6", "text-stone-500", "dark:text-stone-400"], ["type", "button", 1, "inline-flex", "h-9", "w-9", "shrink-0", "items-center", "justify-center", "rounded-xl", "border", "border-stone-200", "text-stone-500", "transition", "hover:bg-stone-50", "hover:text-stone-800", "dark:border-gray-700", "dark:text-stone-400", "dark:hover:bg-gray-800", "dark:hover:text-stone-200", 3, "click"], [1, "flex", "flex-wrap", "gap-2", "border-b", "border-stone-200/90", "px-5", "py-4", "dark:border-gray-800", "md:px-6"], [1, "inline-flex", "items-center", "gap-1.5", "rounded-full", "px-2.5", "py-1", "text-xs", "font-semibold", 3, "ngClass"], [1, "font-mono", "font-medium", "opacity-80"], [1, "rounded-full", "border", "border-stone-200", "bg-stone-50", "px-2.5", "py-1", "text-xs", "font-medium", "text-stone-600", "dark:border-gray-700", "dark:bg-gray-950", "dark:text-stone-300"], [1, "flex", "flex-1", "flex-col", "gap-5", "overflow-y-auto", "px-5", "py-6", "md:px-6"], [1, "flex", "flex-col", "gap-2"], [1, "text-xs", "font-semibold", "uppercase", "tracking-[0.14em]", "text-stone-500", "dark:text-stone-400"], [1, "max-h-56", "overflow-auto", "rounded-xl", "border", "border-stone-200/80", "bg-stone-50", "p-4", "text-xs", "leading-5", "text-stone-800", "dark:border-gray-800", "dark:bg-gray-950", "dark:text-stone-200"], [1, "max-h-80", "overflow-auto", "rounded-xl", "border", "border-stone-200/80", "bg-stone-50", "p-4", "text-xs", "leading-5", "text-stone-800", "dark:border-gray-800", "dark:bg-gray-950", "dark:text-stone-200"], [3, "rangePicker"], ["matStartDate", "", 3, "dateChange", "formControl", "placeholder"], ["matEndDate", "", 3, "dateChange", "formControl", "placeholder"], ["matIconSuffix", "", 3, "for"], [1, "text-sm", "font-semibold", "text-stone-950", "dark:text-white"], [1, "grid", "gap-4", "sm:grid-cols-2"], ["type", "button", 1, "flex", "flex-col", "gap-3", "rounded-2xl", "border", "p-4", "text-left", "transition", "hover:border-stone-300", "hover:shadow-sm", "dark:hover:border-gray-600", 3, "ngClass"], ["type", "button", 1, "flex", "flex-col", "gap-3", "rounded-2xl", "border", "p-4", "text-left", "transition", "hover:border-stone-300", "hover:shadow-sm", "dark:hover:border-gray-600", 3, "click", "ngClass"], [1, "flex", "h-9", "w-9", "shrink-0", "items-center", "justify-center", "rounded-lg", "border", "border-stone-200", "bg-stone-50", "text-stone-700", "dark:border-gray-800", "dark:bg-gray-950", "dark:text-stone-200"], [1, "min-w-0", "flex-1"], [1, "text-sm", "font-medium", "leading-5", "text-stone-950", "dark:text-white"], [1, "mt-1", "text-2xl", "font-semibold", "tracking-tight", "text-stone-950", "dark:text-white"], [1, "text-xs", "text-stone-500", "dark:text-stone-400"], ["diameter", "40"], [1, "flex", "h-12", "w-12", "items-center", "justify-center", "rounded-xl", "bg-stone-100", "text-stone-500", "dark:bg-gray-800", "dark:text-stone-300"], [1, "mt-4", "text-base", "font-semibold", "text-stone-950", "dark:text-white"], [1, "mt-1", "max-w-sm", "text-sm", "text-stone-500", "dark:text-stone-400"], [1, "overflow-x-auto", "rounded-xl", "border", "border-stone-200/80", "dark:border-gray-800"], ["mat-table", "", 1, "w-full", "min-w-[720px]", "bg-transparent", 3, "dataSource"], ["matColumnDef", "status"], ["mat-header-cell", "", "class", "!border-b !border-stone-200/80 !bg-stone-50/80 !px-4 !py-3 text-xs font-semibold uppercase tracking-[0.12em] text-stone-500 dark:!border-gray-800 dark:!bg-gray-950/50 dark:text-stone-400", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "!px-4 !py-4", 4, "matCellDef"], ["matColumnDef", "service"], ["matColumnDef", "date"], ["mat-cell", "", "class", "!px-4 !py-4 text-sm text-stone-600 dark:text-stone-300", 4, "matCellDef"], ["matColumnDef", "cost"], ["mat-cell", "", "class", "!px-4 !py-4 text-sm font-medium text-stone-700 dark:text-stone-200", 4, "matCellDef"], ["matColumnDef", "actions"], ["mat-header-cell", "", "class", "!border-b !border-stone-200/80 !bg-stone-50/80 !px-4 !py-3 text-right text-xs font-semibold uppercase tracking-[0.12em] text-stone-500 dark:!border-gray-800 dark:!bg-gray-950/50 dark:text-stone-400", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "!px-4 !py-4 text-right", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", "class", "border-b border-stone-100 transition hover:bg-stone-50/80 dark:border-gray-800 dark:hover:bg-gray-800/40", 4, "matRowDef", "matRowDefColumns"], [1, "mt-4", "flex", "flex-wrap", "items-center", "justify-end", "gap-3"], [1, "flex", "items-center", "gap-2", "text-sm", "text-stone-500", "dark:text-stone-400"], [1, "rounded-lg", "border", "border-stone-200", "bg-white", "px-2", "py-1", "text-sm", "text-stone-800", "dark:border-gray-700", "dark:bg-gray-900", "dark:text-stone-200", 3, "change", "value"], [1, "!bg-transparent", 3, "page", "length", "pageSize", "pageIndex", "hidePageSize"], ["mat-header-cell", "", 1, "!border-b", "!border-stone-200/80", "!bg-stone-50/80", "!px-4", "!py-3", "text-xs", "font-semibold", "uppercase", "tracking-[0.12em]", "text-stone-500", "dark:!border-gray-800", "dark:!bg-gray-950/50", "dark:text-stone-400"], ["mat-cell", "", 1, "!px-4", "!py-4"], [1, "flex", "flex-col", "gap-1"], [1, "font-semibold", "text-stone-950", "dark:text-white"], [1, "font-mono", "text-xs", "text-stone-500", "dark:text-stone-400"], ["mat-cell", "", 1, "!px-4", "!py-4", "text-sm", "text-stone-600", "dark:text-stone-300"], ["mat-cell", "", 1, "!px-4", "!py-4", "text-sm", "font-medium", "text-stone-700", "dark:text-stone-200"], ["mat-header-cell", "", 1, "!border-b", "!border-stone-200/80", "!bg-stone-50/80", "!px-4", "!py-3", "text-right", "text-xs", "font-semibold", "uppercase", "tracking-[0.12em]", "text-stone-500", "dark:!border-gray-800", "dark:!bg-gray-950/50", "dark:text-stone-400"], ["mat-cell", "", 1, "!px-4", "!py-4", "text-right"], [1, "inline-flex", "items-center", "gap-1"], ["mat-icon-button", "", "type", "button", 1, "!rounded-lg", "hover:!bg-stone-100", "dark:hover:!bg-gray-800", 3, "click", "matTooltip", "disabled"], [1, "!text-stone-600", "dark:!text-stone-300"], ["mat-header-row", ""], ["mat-row", "", 1, "border-b", "border-stone-100", "transition", "hover:bg-stone-50/80", "dark:border-gray-800", "dark:hover:bg-gray-800/40"]], template: function SmartEnrollUsageHistoryComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, SmartEnrollUsageHistoryComponent_mat_drawer_container_0_Template, 105, 38, "mat-drawer-container", 3);
      }
    }, dependencies: [
      CommonModule,
      NgClass,
      JsonPipe,
      FormsModule,
      NgSelectOption,
      \u0275NgSelectMultipleOption,
      DefaultValueAccessor,
      SelectControlValueAccessor,
      NgControlStatus,
      NgModel,
      ReactiveFormsModule,
      FormControlDirective,
      RouterLink,
      MatButtonModule,
      MatButton,
      MatIconButton,
      MatButtonToggleModule,
      MatButtonToggleGroup,
      MatButtonToggle,
      MatDatepickerModule,
      MatDatepickerToggle,
      MatDateRangeInput,
      MatStartDate,
      MatEndDate,
      MatDateRangePicker,
      MatFormFieldModule,
      MatFormField,
      MatLabel,
      MatSuffix,
      MatIconModule,
      MatIcon,
      MatInputModule,
      MatMenuModule,
      MatMenu,
      MatMenuItem,
      MatMenuTrigger,
      MatPaginatorModule,
      MatPaginator,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatSelectModule,
      MatSidenavModule,
      MatDrawer,
      MatDrawerContainer,
      MatDrawerContent,
      MatSnackBarModule,
      MatTableModule,
      MatTable,
      MatHeaderCellDef,
      MatHeaderRowDef,
      MatColumnDef,
      MatCellDef,
      MatRowDef,
      MatHeaderCell,
      MatCell,
      MatHeaderRow,
      MatRow,
      MatTooltipModule,
      MatTooltip,
      TranslocoModule,
      TranslocoDirective
    ], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex: 1 1 auto;\n  min-height: 0;\n  min-width: 0;\n  width: 100%;\n}\n.usage-history-container[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.usage-history-container[_ngcontent-%COMP%]   mat-button-toggle-group[_ngcontent-%COMP%] {\n  border-radius: 0.75rem;\n  overflow: hidden;\n}\n.usage-history-container[_ngcontent-%COMP%]   .usage-history-drawer[_ngcontent-%COMP%]   .mat-drawer-inner-container[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.usage-history-container[_ngcontent-%COMP%]   .history-date-range[_ngcontent-%COMP%]   .mat-mdc-form-field-infix[_ngcontent-%COMP%] {\n  min-height: 2.5rem;\n}\n/*# sourceMappingURL=usage-history.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SmartEnrollUsageHistoryComponent, [{
    type: Component,
    args: [{ selector: "app-smart-enroll-usage-history", standalone: true, imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      RouterLink,
      MatButtonModule,
      MatButtonToggleModule,
      MatDatepickerModule,
      MatFormFieldModule,
      MatIconModule,
      MatInputModule,
      MatMenuModule,
      MatPaginatorModule,
      MatProgressSpinnerModule,
      MatSelectModule,
      MatSidenavModule,
      MatSnackBarModule,
      MatTableModule,
      MatTooltipModule,
      TranslocoModule
    ], changeDetection: ChangeDetectionStrategy.OnPush, host: {
      class: "flex flex-auto min-w-0 w-full"
    }, template: `<mat-drawer-container class="usage-history-container h-full min-h-0 w-full bg-stone-50 dark:bg-gray-950" *transloco="let t">\r
    <mat-drawer\r
        #drawer\r
        mode="over"\r
        position="end"\r
        class="usage-history-drawer w-full max-w-lg border-l border-stone-200/90 dark:border-gray-800"\r
    >\r
        <div class="flex h-full flex-col overflow-hidden bg-white dark:bg-gray-900/70">\r
            @if (detailLoading()) {\r
                <div class="flex flex-1 flex-col items-center justify-center px-6 py-16">\r
                    <mat-spinner diameter="36"></mat-spinner>\r
                    <p class="mt-4 text-sm text-stone-500 dark:text-stone-400">{{ t('smartEnrollUsageHistory.loading') }}</p>\r
                </div>\r
            } @else if (detail()) {\r
                <header class="flex items-start justify-between gap-4 border-b border-stone-200/90 px-5 py-5 dark:border-gray-800 md:px-6">\r
                    <div class="flex min-w-0 items-start gap-3">\r
                        <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-stone-200 bg-stone-50 text-stone-700 dark:border-gray-800 dark:bg-gray-950 dark:text-stone-200">\r
                            <mat-icon class="!h-5 !w-5 !text-xl">data_object</mat-icon>\r
                        </div>\r
                        <div class="min-w-0">\r
                            <h2 class="truncate text-xl font-semibold tracking-tight text-stone-950 dark:text-white">\r
                                {{ detail()!.code || detail()!.endpoint }}\r
                            </h2>\r
                            <p class="mt-1 truncate text-sm leading-6 text-stone-500 dark:text-stone-400">\r
                                {{ detail()!.endpoint }}\r
                            </p>\r
                        </div>\r
                    </div>\r
                    <button\r
                        type="button"\r
                        class="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-stone-200 text-stone-500 transition hover:bg-stone-50 hover:text-stone-800 dark:border-gray-700 dark:text-stone-400 dark:hover:bg-gray-800 dark:hover:text-stone-200"\r
                        (click)="closeDrawer()"\r
                    >\r
                        <mat-icon class="!h-5 !w-5 !text-xl">close</mat-icon>\r
                    </button>\r
                </header>\r
\r
                <div class="flex flex-wrap gap-2 border-b border-stone-200/90 px-5 py-4 dark:border-gray-800 md:px-6">\r
                    <span class="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold" [ngClass]="historyStatusClass(detail())">\r
                        {{ historyStatusLabel(detail()) }}\r
                        @if (detail()!.statusCode) {\r
                            <span class="font-mono font-medium opacity-80">{{ detail()!.statusCode }}</span>\r
                        }\r
                    </span>\r
                    <span class="rounded-full border border-stone-200 bg-stone-50 px-2.5 py-1 text-xs font-medium text-stone-600 dark:border-gray-700 dark:bg-gray-950 dark:text-stone-300">\r
                        {{ formatCost(detail()!.cost) }}\r
                    </span>\r
                    @if (detail()!.createdAt) {\r
                        <span class="rounded-full border border-stone-200 bg-stone-50 px-2.5 py-1 text-xs font-medium text-stone-600 dark:border-gray-700 dark:bg-gray-950 dark:text-stone-300">\r
                            {{ formatDate(detail()!.createdAt) }}\r
                        </span>\r
                    }\r
                </div>\r
\r
                <div class="flex flex-1 flex-col gap-5 overflow-y-auto px-5 py-6 md:px-6">\r
                    <section class="flex flex-col gap-2">\r
                        <h3 class="text-xs font-semibold uppercase tracking-[0.14em] text-stone-500 dark:text-stone-400">\r
                            {{ t('smartEnrollUsageHistory.parameters') }}\r
                        </h3>\r
                        <pre class="max-h-56 overflow-auto rounded-xl border border-stone-200/80 bg-stone-50 p-4 text-xs leading-5 text-stone-800 dark:border-gray-800 dark:bg-gray-950 dark:text-stone-200">{{ detail()!.params | json }}</pre>\r
                    </section>\r
                    <section class="flex flex-col gap-2">\r
                        <h3 class="text-xs font-semibold uppercase tracking-[0.14em] text-stone-500 dark:text-stone-400">\r
                            {{ t('smartEnrollUsageHistory.response') }}\r
                        </h3>\r
                        <pre class="max-h-80 overflow-auto rounded-xl border border-stone-200/80 bg-stone-50 p-4 text-xs leading-5 text-stone-800 dark:border-gray-800 dark:bg-gray-950 dark:text-stone-200">{{ detail()!.apiResponse | json }}</pre>\r
                    </section>\r
                </div>\r
            }\r
        </div>\r
    </mat-drawer>\r
\r
    <mat-drawer-content>\r
        <div class="flex h-full min-h-0 min-w-0 flex-auto flex-col overflow-auto">\r
            <header class="border-b border-stone-200/90 bg-white/90 px-5 py-6 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-950/90 md:px-8 md:py-8">\r
                <div class="mx-auto flex w-full max-w-7xl flex-col gap-5">\r
                    <div class="flex flex-wrap items-center text-xs font-medium leading-none text-stone-500 dark:text-stone-400">\r
                        <a routerLink="/home" class="cursor-pointer text-stone-700 underline-offset-4 hover:underline dark:text-stone-300">\r
                            Verifik\r
                        </a>\r
                        <mat-icon class="icon-size-4 mx-2 text-stone-400" svgIcon="heroicons_solid:chevron-right"></mat-icon>\r
                        <a routerLink="/smart-enroll/projects" class="cursor-pointer text-stone-700 underline-offset-4 hover:underline dark:text-stone-300">\r
                            {{ t('nav.smart_enroll') }}\r
                        </a>\r
                        <mat-icon class="icon-size-4 mx-2 text-stone-400" svgIcon="heroicons_solid:chevron-right"></mat-icon>\r
                        <span class="cursor-default text-stone-600 dark:text-stone-300">{{ t('smartEnrollUsageHistory.title') }}</span>\r
                    </div>\r
\r
                    <div class="max-w-2xl">\r
                        <h1 class="text-2xl font-semibold tracking-tight text-stone-950 dark:text-white md:text-3xl">\r
                            {{ t('smartEnrollUsageHistory.title') }}\r
                        </h1>\r
                        <p class="mt-2 text-sm leading-6 text-stone-500 dark:text-stone-400 md:text-base">\r
                            {{ t('smartEnrollUsageHistory.subtitle') }}\r
                        </p>\r
                    </div>\r
                </div>\r
            </header>\r
\r
            <main class="flex flex-auto flex-col px-5 py-8 md:px-8 md:py-10">\r
                <div class="mx-auto flex w-full max-w-7xl flex-col gap-6">\r
                    <!-- Toolbar -->\r
                    <div class="rounded-2xl border border-stone-200/90 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900/70 md:p-6">\r
                        <div class="flex flex-col gap-4">\r
                            <div class="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">\r
                                <div class="relative min-w-0 flex-1">\r
                                    <mat-icon class="pointer-events-none absolute left-3 top-1/2 !h-4 !w-4 -translate-y-1/2 text-stone-400">search</mat-icon>\r
                                    <input\r
                                        type="text"\r
                                        class="h-11 w-full rounded-xl border border-stone-200 bg-stone-50 pl-10 pr-4 text-sm text-stone-900 outline-none transition focus:border-stone-400 focus:bg-white dark:border-gray-700 dark:bg-gray-950 dark:text-stone-100 placeholder:text-stone-400 dark:placeholder:text-stone-500 dark:focus:border-gray-500 dark:focus:bg-gray-950"\r
                                        [placeholder]="t('smartEnrollUsageHistory.search')"\r
                                        [ngModel]="searchText"\r
                                        (ngModelChange)="onSearchInput($event)"\r
                                    />\r
                                </div>\r
\r
                                <button\r
                                    type="button"\r
                                    class="inline-flex min-h-10 shrink-0 items-center justify-center gap-2 rounded-xl border border-stone-200 px-4 text-sm font-medium text-stone-800 transition hover:bg-stone-50 disabled:cursor-not-allowed disabled:opacity-60 dark:border-gray-700 dark:text-stone-100 dark:hover:bg-gray-800"\r
                                    (click)="clearFilters()"\r
                                    [disabled]="disabledClearFilters || loading()"\r
                                >\r
                                    <mat-icon class="!h-4 !w-4 !text-base">filter_list_off</mat-icon>\r
                                    <span>{{ t('smartEnrollUsageHistory.clearFilters') }}</span>\r
                                </button>\r
                            </div>\r
\r
                            <div class="flex flex-col gap-3 xl:flex-row xl:flex-wrap xl:items-center">\r
                                <mat-button-toggle-group\r
                                    [value]="statusFilter"\r
                                    (change)="onStatusFilterChange($event.value)"\r
                                    [disabled]="loading()"\r
                                    class="rounded-xl"\r
                                >\r
                                    <mat-button-toggle value="all">{{ t('smartEnrollUsageHistory.filterStatusAll') }}</mat-button-toggle>\r
                                    <mat-button-toggle value="success">{{ t('smartEnrollUsageHistory.filterStatusSuccess') }}</mat-button-toggle>\r
                                    <mat-button-toggle value="failed">{{ t('smartEnrollUsageHistory.filterStatusFailed') }}</mat-button-toggle>\r
                                    <mat-button-toggle value="pending">{{ t('smartEnrollUsageHistory.filterStatusPending') }}</mat-button-toggle>\r
                                </mat-button-toggle-group>\r
\r
                                <div class="flex flex-col gap-3">\r
                                    <mat-button-toggle-group\r
                                        [value]="datePreset"\r
                                        (change)="onDatePresetChange($event.value)"\r
                                        [disabled]="loading()"\r
                                        class="rounded-xl"\r
                                    >\r
                                        @for (preset of datePresets; track preset) {\r
                                            <mat-button-toggle [value]="preset">{{ t(datePresetKey(preset)) }}</mat-button-toggle>\r
                                        }\r
                                    </mat-button-toggle-group>\r
                                    @if (datePreset === 'custom') {\r
                                        <mat-form-field appearance="outline" class="history-date-range w-full sm:w-80" subscriptSizing="dynamic">\r
                                            <mat-label>{{ t('smartEnrollUsageHistory.dateRange') }}</mat-label>\r
                                            <mat-date-range-input [rangePicker]="picker">\r
                                                <input\r
                                                    matStartDate\r
                                                    [formControl]="rangeStart"\r
                                                    (dateChange)="onCustomRangeChange()"\r
                                                    [placeholder]="t('smartEnrollUsageHistory.dateStart')"\r
                                                />\r
                                                <input\r
                                                    matEndDate\r
                                                    [formControl]="rangeEnd"\r
                                                    (dateChange)="onCustomRangeChange()"\r
                                                    [placeholder]="t('smartEnrollUsageHistory.dateEnd')"\r
                                                />\r
                                            </mat-date-range-input>\r
                                            <mat-datepicker-toggle matIconSuffix [for]="picker"></mat-datepicker-toggle>\r
                                            <mat-date-range-picker #picker></mat-date-range-picker>\r
                                        </mat-form-field>\r
                                    }\r
                                </div>\r
\r
                                <div class="min-w-[220px] flex-1">\r
                                    <label class="mb-1.5 block text-xs font-medium uppercase tracking-[0.12em] text-stone-500 dark:text-stone-400">\r
                                        {{ t('smartEnrollUsageHistory.filterService') }}\r
                                    </label>\r
                                    <select\r
                                        class="h-11 w-full rounded-xl border border-stone-200 bg-stone-50 px-4 text-sm text-stone-900 outline-none transition focus:border-stone-400 focus:bg-white dark:border-gray-700 dark:bg-gray-950 dark:text-stone-100 placeholder:text-stone-400 dark:placeholder:text-stone-500 dark:focus:border-gray-500 dark:focus:bg-gray-950"\r
                                        [ngModel]="serviceFilter"\r
                                        (ngModelChange)="onServiceFilterChange($event)"\r
                                        [disabled]="loading()"\r
                                    >\r
                                        <option value="">{{ t('smartEnrollUsageHistory.filterServiceAll') }}</option>\r
                                        @for (code of serviceCodes; track code) {\r
                                            <option [value]="code">{{ formatServiceLabel(code) }}</option>\r
                                        }\r
                                    </select>\r
                                </div>\r
                            </div>\r
                        </div>\r
                    </div>\r
\r
                    <!-- Top endpoints -->\r
                    @if (topEndpoints().length) {\r
                        <section class="flex flex-col gap-3">\r
                            <h2 class="text-sm font-semibold text-stone-950 dark:text-white">\r
                                {{ t('smartEnrollUsageHistory.topEndpointsTitle') }}\r
                            </h2>\r
                            <div class="grid gap-4 sm:grid-cols-2">\r
                                @for (item of topEndpoints(); track item._id) {\r
                                    <button\r
                                        type="button"\r
                                        class="flex flex-col gap-3 rounded-2xl border p-4 text-left transition hover:border-stone-300 hover:shadow-sm dark:hover:border-gray-600"\r
                                        [ngClass]="endpointCardClasses(item._id)"\r
                                        (click)="filterByEndpoint(item._id)"\r
                                    >\r
                                        <div class="flex items-start gap-3">\r
                                            <div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-stone-200 bg-stone-50 text-stone-700 dark:border-gray-800 dark:bg-gray-950 dark:text-stone-200">\r
                                                <mat-icon class="!h-4 !w-4 !text-base">face</mat-icon>\r
                                            </div>\r
                                            <div class="min-w-0 flex-1">\r
                                                <p class="text-sm font-medium leading-5 text-stone-950 dark:text-white">\r
                                                    {{ endpointDisplayName(item) }}\r
                                                </p>\r
                                                <p class="mt-1 text-2xl font-semibold tracking-tight text-stone-950 dark:text-white">\r
                                                    {{ item.total }}\r
                                                </p>\r
                                                <p class="text-xs text-stone-500 dark:text-stone-400">\r
                                                    {{ t('smartEnrollUsageHistory.requests') }}\r
                                                </p>\r
                                            </div>\r
                                        </div>\r
                                    </button>\r
                                }\r
                            </div>\r
                        </section>\r
                    }\r
\r
                    <!-- Requests table -->\r
                    <div class="overflow-hidden rounded-2xl border border-stone-200/90 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900/70">\r
                        <div class="flex flex-col gap-3 border-b border-stone-200/80 p-5 dark:border-gray-800 md:flex-row md:items-center md:justify-between md:p-6">\r
                            <div class="flex items-start gap-3">\r
                                <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-stone-200 bg-stone-50 text-stone-700 dark:border-gray-800 dark:bg-gray-950 dark:text-stone-200">\r
                                    <mat-icon>history</mat-icon>\r
                                </div>\r
                                <div>\r
                                    <h2 class="text-base font-semibold text-stone-950 dark:text-white">\r
                                        {{ t('smartEnrollUsageHistory.tableTitle') }}\r
                                    </h2>\r
                                    <p class="mt-1 text-sm text-stone-500 dark:text-stone-400">\r
                                        @if (total() !== null && total()! >= 0) {\r
                                            {{ t('smartEnrollUsageHistory.tableSubtitle', { count: total() }) }}\r
                                        } @else {\r
                                            {{ t('smartEnrollUsageHistory.tableSubtitlePageOnly', { page: pageIndex() + 1 }) }}\r
                                        }\r
                                    </p>\r
                                </div>\r
                            </div>\r
\r
                            <div class="flex flex-wrap items-center gap-2">\r
                                <button\r
                                    mat-stroked-button\r
                                    type="button"\r
                                    class="!rounded-xl"\r
                                    [matMenuTriggerFor]="exportMenu"\r
                                    [disabled]="exporting() || !canExport"\r
                                >\r
                                    @if (exporting()) {\r
                                        <mat-spinner class="mr-2" diameter="16"></mat-spinner>\r
                                    } @else {\r
                                        <mat-icon class="mr-1 !h-4 !w-4">download</mat-icon>\r
                                    }\r
                                    {{ exporting() ? t('smartEnrollUsageHistory.exporting') : t('smartEnrollUsageHistory.export') }}\r
                                    <mat-icon class="!h-4 !w-4">arrow_drop_down</mat-icon>\r
                                </button>\r
                                <mat-menu #exportMenu="matMenu">\r
                                    <button mat-menu-item type="button" (click)="exportList('xlsx')">\r
                                        <mat-icon>table_chart</mat-icon>\r
                                        <span>{{ t('smartEnrollUsageHistory.exportAsExcel') }}</span>\r
                                    </button>\r
                                    <button mat-menu-item type="button" (click)="exportList('csv')">\r
                                        <mat-icon>description</mat-icon>\r
                                        <span>{{ t('smartEnrollUsageHistory.exportAsCsv') }}</span>\r
                                    </button>\r
                                    <button mat-menu-item type="button" (click)="exportList('json')">\r
                                        <mat-icon>data_object</mat-icon>\r
                                        <span>{{ t('smartEnrollUsageHistory.exportAsJson') }}</span>\r
                                    </button>\r
                                </mat-menu>\r
                                <div class="flex items-center gap-2 rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-500 dark:bg-gray-800 dark:text-gray-400">\r
                                    <span class="h-2 w-2 rounded-full" [class.bg-emerald-400]="!loading()" [class.bg-amber-400]="loading()"></span>\r
                                    {{ loading() ? t('smartEnrollUsageHistory.loading') : t('smartEnrollUsageHistory.live') }}\r
                                </div>\r
                            </div>\r
                        </div>\r
\r
                        <div class="p-5 md:p-6">\r
                            @if (loading()) {\r
                                <div class="flex flex-col items-center justify-center rounded-xl border border-dashed border-stone-200 py-14 text-center dark:border-gray-800">\r
                                    <mat-spinner diameter="40"></mat-spinner>\r
                                    <p class="mt-4 text-sm text-stone-500 dark:text-stone-400">{{ t('smartEnrollUsageHistory.loading') }}</p>\r
                                </div>\r
                            } @else if (!dataSource.data.length) {\r
                                <div class="flex flex-col items-center justify-center rounded-xl border border-dashed border-stone-200 px-5 py-14 text-center dark:border-gray-800">\r
                                    <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-stone-100 text-stone-500 dark:bg-gray-800 dark:text-stone-300">\r
                                        <mat-icon>insights</mat-icon>\r
                                    </div>\r
                                    <h3 class="mt-4 text-base font-semibold text-stone-950 dark:text-white">\r
                                        {{ t('smartEnrollUsageHistory.emptyTitle') }}\r
                                    </h3>\r
                                    <p class="mt-1 max-w-sm text-sm text-stone-500 dark:text-stone-400">\r
                                        {{ t('smartEnrollUsageHistory.emptySubtitle') }}\r
                                    </p>\r
                                </div>\r
                            } @else {\r
                                <div class="overflow-x-auto rounded-xl border border-stone-200/80 dark:border-gray-800">\r
                                    <table mat-table [dataSource]="dataSource" class="w-full min-w-[720px] bg-transparent">\r
                                        <ng-container matColumnDef="status">\r
                                            <th mat-header-cell *matHeaderCellDef class="!border-b !border-stone-200/80 !bg-stone-50/80 !px-4 !py-3 text-xs font-semibold uppercase tracking-[0.12em] text-stone-500 dark:!border-gray-800 dark:!bg-gray-950/50 dark:text-stone-400">\r
                                                {{ t('smartEnrollUsageHistory.status') }}\r
                                            </th>\r
                                            <td mat-cell *matCellDef="let row" class="!px-4 !py-4">\r
                                                <span class="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold" [ngClass]="historyStatusClass(row)">\r
                                                    {{ historyStatusLabel(row) }}\r
                                                    @if (row.statusCode) {\r
                                                        <span class="font-mono font-medium opacity-80">{{ row.statusCode }}</span>\r
                                                    }\r
                                                </span>\r
                                            </td>\r
                                        </ng-container>\r
\r
                                        <ng-container matColumnDef="service">\r
                                            <th mat-header-cell *matHeaderCellDef class="!border-b !border-stone-200/80 !bg-stone-50/80 !px-4 !py-3 text-xs font-semibold uppercase tracking-[0.12em] text-stone-500 dark:!border-gray-800 dark:!bg-gray-950/50 dark:text-stone-400">\r
                                                {{ t('smartEnrollUsageHistory.service') }}\r
                                            </th>\r
                                            <td mat-cell *matCellDef="let row" class="!px-4 !py-4">\r
                                                <div class="flex flex-col gap-1">\r
                                                    <span class="font-semibold text-stone-950 dark:text-white">{{ row.code || row.endpoint }}</span>\r
                                                    <span class="font-mono text-xs text-stone-500 dark:text-stone-400">{{ row.endpoint }}</span>\r
                                                </div>\r
                                            </td>\r
                                        </ng-container>\r
\r
                                        <ng-container matColumnDef="date">\r
                                            <th mat-header-cell *matHeaderCellDef class="!border-b !border-stone-200/80 !bg-stone-50/80 !px-4 !py-3 text-xs font-semibold uppercase tracking-[0.12em] text-stone-500 dark:!border-gray-800 dark:!bg-gray-950/50 dark:text-stone-400">\r
                                                {{ t('smartEnrollUsageHistory.date') }}\r
                                            </th>\r
                                            <td mat-cell *matCellDef="let row" class="!px-4 !py-4 text-sm text-stone-600 dark:text-stone-300">\r
                                                {{ formatDate(row.createdAt) }}\r
                                            </td>\r
                                        </ng-container>\r
\r
                                        <ng-container matColumnDef="cost">\r
                                            <th mat-header-cell *matHeaderCellDef class="!border-b !border-stone-200/80 !bg-stone-50/80 !px-4 !py-3 text-xs font-semibold uppercase tracking-[0.12em] text-stone-500 dark:!border-gray-800 dark:!bg-gray-950/50 dark:text-stone-400">\r
                                                {{ t('smartEnrollUsageHistory.cost') }}\r
                                            </th>\r
                                            <td mat-cell *matCellDef="let row" class="!px-4 !py-4 text-sm font-medium text-stone-700 dark:text-stone-200">\r
                                                {{ formatCost(row.cost) }}\r
                                            </td>\r
                                        </ng-container>\r
\r
                                        <ng-container matColumnDef="actions">\r
                                            <th mat-header-cell *matHeaderCellDef class="!border-b !border-stone-200/80 !bg-stone-50/80 !px-4 !py-3 text-right text-xs font-semibold uppercase tracking-[0.12em] text-stone-500 dark:!border-gray-800 dark:!bg-gray-950/50 dark:text-stone-400">\r
                                                {{ t('smartEnrollPeople.actions') }}\r
                                            </th>\r
                                            <td mat-cell *matCellDef="let row" class="!px-4 !py-4 text-right">\r
                                                <div class="inline-flex items-center gap-1">\r
                                                    <button\r
                                                        mat-icon-button\r
                                                        type="button"\r
                                                        class="!rounded-lg hover:!bg-stone-100 dark:hover:!bg-gray-800"\r
                                                        [matTooltip]="t('smartEnrollUsageHistory.openInApi')"\r
                                                        [disabled]="!row.code"\r
                                                        (click)="openInApi(row)"\r
                                                    >\r
                                                        <mat-icon class="!text-stone-600 dark:!text-stone-300">open_in_new</mat-icon>\r
                                                    </button>\r
                                                </div>\r
                                            </td>\r
                                        </ng-container>\r
\r
                                        <tr mat-header-row *matHeaderRowDef="displayedColumns; sticky: true"></tr>\r
                                        <tr\r
                                            mat-row\r
                                            *matRowDef="let row; columns: displayedColumns"\r
                                            class="border-b border-stone-100 transition hover:bg-stone-50/80 dark:border-gray-800 dark:hover:bg-gray-800/40"\r
                                        ></tr>\r
                                    </table>\r
                                </div>\r
\r
                                <div class="mt-4 flex flex-wrap items-center justify-end gap-3">\r
                                    <label class="flex items-center gap-2 text-sm text-stone-500 dark:text-stone-400">\r
                                        <select\r
                                            class="rounded-lg border border-stone-200 bg-white px-2 py-1 text-sm text-stone-800 dark:border-gray-700 dark:bg-gray-900 dark:text-stone-200"\r
                                            [value]="pageSize()"\r
                                            (change)="onPageSizeChange(+$any($event.target).value)"\r
                                        >\r
                                            @for (size of pageSizeOptions; track size) {\r
                                                <option [value]="size">{{ size }}</option>\r
                                            }\r
                                        </select>\r
                                    </label>\r
                                    <mat-paginator\r
                                        class="!bg-transparent"\r
                                        [length]="paginatorLength"\r
                                        [pageSize]="pageSize()"\r
                                        [pageIndex]="pageIndex()"\r
                                        [hidePageSize]="true"\r
                                        (page)="onPaginatorEvent($event)"\r
                                    ></mat-paginator>\r
                                </div>\r
                            }\r
                        </div>\r
                    </div>\r
                </div>\r
            </main>\r
        </div>\r
    </mat-drawer-content>\r
</mat-drawer-container>\r
`, styles: ["/* src/app/modules/smart-enroll/usage-history/usage-history.component.scss */\n:host {\n  display: flex;\n  flex: 1 1 auto;\n  min-height: 0;\n  min-width: 0;\n  width: 100%;\n}\n.usage-history-container mat-icon {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.usage-history-container mat-button-toggle-group {\n  border-radius: 0.75rem;\n  overflow: hidden;\n}\n.usage-history-container .usage-history-drawer .mat-drawer-inner-container {\n  overflow: hidden;\n}\n.usage-history-container .history-date-range .mat-mdc-form-field-infix {\n  min-height: 2.5rem;\n}\n/*# sourceMappingURL=usage-history.component.css.map */\n"] }]
  }], null, { drawer: [{
    type: ViewChild,
    args: ["drawer"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SmartEnrollUsageHistoryComponent, { className: "SmartEnrollUsageHistoryComponent", filePath: "src/app/modules/smart-enroll/usage-history/usage-history.component.ts", lineNumber: 82 });
})();
export {
  SmartEnrollUsageHistoryComponent
};
//# sourceMappingURL=chunk-HGHOQBI4.js.map
