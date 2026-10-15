import {
  createdAtRangeParams
} from "./chunk-M7M3MPVE.js";
import {
  toHttpParams
} from "./chunk-JZSKUZFS.js";
import {
  MatDateRangeInput,
  MatDateRangePicker,
  MatDatepickerModule,
  MatDatepickerToggle,
  MatEndDate,
  MatStartDate
} from "./chunk-OJXNREQO.js";
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
  MatTableModule
} from "./chunk-QYYZQSTG.js";
import {
  MatButtonToggle,
  MatButtonToggleGroup,
  MatButtonToggleModule
} from "./chunk-ZSN6BN6T.js";
import {
  MatPaginator,
  MatPaginatorModule
} from "./chunk-AIP4IBNC.js";
import {
  POSTMAN_HISTORY_PREFILL_STORAGE_KEY
} from "./chunk-XWZEZCTG.js";
import {
  formatHistoryCostCredits,
  getHistoryBillingTooltipParams,
  isDynamicQueryPremiumAdjustment
} from "./chunk-XV7JRBNY.js";
import {
  getAppFeatureCatalogCopy
} from "./chunk-ZK2UTJXV.js";
import "./chunk-LFV2WSNG.js";
import {
  utils,
  writeFileSync
} from "./chunk-P2TQI6AF.js";
import {
  DateTime
} from "./chunk-KW3PRW6P.js";
import "./chunk-LA674MUO.js";
import {
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger
} from "./chunk-C3RXWDTM.js";
import {
  MatSnackBar,
  MatSnackBarModule
} from "./chunk-O4LKJP5L.js";
import {
  AgentWalletService
} from "./chunk-UO34MIWZ.js";
import "./chunk-H3UX3NVF.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-NRO2XGZE.js";
import "./chunk-ZUERA2CK.js";
import "./chunk-W2APQW4E.js";
import "./chunk-JURKDGMK.js";
import {
  MatSelectModule
} from "./chunk-DW2XB3R4.js";
import {
  MatInputModule
} from "./chunk-WXNXCCYE.js";
import "./chunk-BYQUUNDI.js";
import "./chunk-PDLCCGUT.js";
import {
  MatFormField,
  MatFormFieldModule,
  MatLabel,
  MatSuffix
} from "./chunk-GG23NHUM.js";
import "./chunk-V36MHRLI.js";
import "./chunk-EVWXSBKG.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-CTAWHRE6.js";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogModule,
  MatDialogRef
} from "./chunk-WKFG3L4B.js";
import "./chunk-OIBNGD5S.js";
import "./chunk-7FACNXV2.js";
import {
  MatButton,
  MatButtonModule,
  MatIconButton
} from "./chunk-NBA3XD53.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-EIYDU75T.js";
import "./chunk-IXSC6NFZ.js";
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
} from "./chunk-5EV2TUYF.js";
import {
  TranslocoDirective,
  TranslocoModule,
  TranslocoService
} from "./chunk-VENEX45A.js";
import {
  ActivatedRoute,
  Router,
  RouterLink
} from "./chunk-DM2XPT7T.js";
import {
  environment
} from "./chunk-KTYFS5OT.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  HttpClient,
  Injectable,
  JsonPipe,
  NgClass,
  Subject,
  ViewEncapsulation,
  catchError,
  computed,
  debounceTime,
  finalize,
  firstValueFrom,
  inject,
  map,
  of,
  setClassMetadata,
  signal,
  switchMap,
  takeUntil,
  tap,
  throwError,
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
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-I5BUD46C.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-F5M2C4EZ.js";

// src/app/modules/history/history.service.ts
var LIST_COLUMNS = "_id statusCode status code endpoint method createdAt cost billingAdjustmentType billingStandardCost billingStandardCode paymentTx paymentAmount params";
var HistoryService = class _HistoryService {
  constructor() {
    this._httpClient = inject(HttpClient);
    this.requests = signal([]);
    this.total = signal(0);
    this.loading = signal(false);
    this.error = signal(null);
    this.pageSize = signal(10);
    this.pageIndex = signal(0);
    this.getHistory = (params = {}) => {
      this.loading.set(true);
      this.error.set(null);
      return this._httpClient.get(`${environment.apiUrl}/v2/api-requests`, {
        headers: this._authHeaders(),
        params: toHttpParams(this._listQuery(params))
      }).pipe(tap((response) => {
        this.requests.set(response.data || []);
        this.total.set(response.total || 0);
        this.loading.set(false);
      }), catchError((err) => {
        this.requests.set([]);
        this.total.set(0);
        this.error.set("Failed to load history");
        this.loading.set(false);
        return throwError(() => err);
      }));
    };
    this.listForExport = (params = {}) => this._httpClient.get(`${environment.apiUrl}/v2/api-requests`, {
      headers: this._authHeaders(),
      params: toHttpParams(this._listQuery(params))
    });
    this.getPublicHistory = (wallet, page = 1, limit = 10) => {
      this.loading.set(true);
      this.error.set(null);
      return this._httpClient.get(`${environment.apiUrl}/v2/public/api-requests`, {
        params: toHttpParams({
          wallet,
          page,
          limit,
          sort: "-createdAt"
        })
      }).pipe(tap((response) => {
        this.requests.set(response.data || []);
        this.total.set(response.total || 0);
      }), catchError((err) => {
        this.error.set("Failed to load history");
        return throwError(() => err);
      }), finalize(() => this.loading.set(false)));
    };
    this.listPublicForExport = (wallet, page = 1, limit = 200) => this._httpClient.get(`${environment.apiUrl}/v2/public/api-requests`, {
      params: toHttpParams({
        wallet,
        page,
        limit,
        sort: "-createdAt"
      })
    });
    this.getRequestDetail = (id) => this._httpClient.get(`${environment.apiUrl}/v2/api-requests/${id}/data`, {
      headers: this._authHeaders()
    });
    this.getFeatureCatalog = () => this._httpClient.get(`${environment.apiUrl}/v2/app-features`, {
      headers: this._authHeaders(),
      params: toHttpParams({ columns: "code name nameES", lean: true })
    }).pipe(map((res) => Array.isArray(res) ? res : res?.data || []));
    this.getTopSales = (params = {}) => this._httpClient.get(`${environment.apiUrl}/v2/api-requests/top-sales`, {
      headers: this._authHeaders(),
      params: toHttpParams(params)
    }).pipe(map((res) => Array.isArray(res) ? res : res?.data || []));
    this._listQuery = (params = {}) => ({
      columns: LIST_COLUMNS,
      lean: true,
      sort: "-createdAt",
      page: params.page ?? 1,
      limit: params.limit ?? 10,
      like_code: params.like_code,
      where_code: params.where_code,
      historyBucket: params.historyBucket,
      whereGTE_createdAt: params.whereGTE_createdAt,
      whereLTE_createdAt: params.whereLTE_createdAt
    });
    this._authHeaders = () => {
      const token = localStorage.getItem("accessToken");
      return token ? { Authorization: `Bearer ${token}` } : {};
    };
  }
  static {
    this.\u0275fac = function HistoryService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HistoryService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _HistoryService, factory: _HistoryService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HistoryService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/modules/history/history-request-dialog.component.ts
function HistoryRequestDialogComponent_div_0_Conditional_1_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const request_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(request_r3.statusCode);
  }
}
function HistoryRequestDialogComponent_div_0_Conditional_1_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const request_r3 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatDate(request_r3.createdAt), " ");
  }
}
function HistoryRequestDialogComponent_div_0_Conditional_1_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275element(1, "mat-spinner", 20);
    \u0275\u0275elementStart(2, "p", 21);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r4("history.table.loading"));
  }
}
function HistoryRequestDialogComponent_div_0_Conditional_1_Conditional_24_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r4("history.notChargedExplanation"), " ");
  }
}
function HistoryRequestDialogComponent_div_0_Conditional_1_Conditional_24_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 23)(1, "span", 28);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 29);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "dl", 30)(6, "div", 31)(7, "dt", 32);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "dd", 33);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 31)(12, "dt", 32);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "dd", 34);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const billing_r5 = ctx;
    const t_r4 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r4("history.dynamicQuery.badge"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r4("history.dynamicQuery.detailExplanation"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r4("history.dynamicQuery.standardCredits"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", billing_r5.standard, " credits");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r4("history.dynamicQuery.chargedCredits"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", billing_r5.charged, " credits");
  }
}
function HistoryRequestDialogComponent_div_0_Conditional_1_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, HistoryRequestDialogComponent_div_0_Conditional_1_Conditional_24_Conditional_0_Template, 2, 1, "p", 22)(1, HistoryRequestDialogComponent_div_0_Conditional_1_Conditional_24_Conditional_1_Template, 16, 6, "section", 23);
    \u0275\u0275elementStart(2, "section", 24)(3, "h3", 25);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "pre", 26);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "json");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "section", 24)(9, "h3", 25);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "pre", 27);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "json");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_6_0;
    const request_r3 = \u0275\u0275nextContext();
    const t_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.isNotCharged(request_r3) ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_6_0 = !ctx_r1.isNotCharged(request_r3) && ctx_r1.hasDynamicQueryBilling(request_r3) && ctx_r1.getDynamicQueryTooltipParams(request_r3)) ? 1 : -1, tmp_6_0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r4("history.table.parameters"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 6, request_r3.params));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r4("history.response"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 8, request_r3.apiResponse));
  }
}
function HistoryRequestDialogComponent_div_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "header", 2)(1, "div", 3)(2, "div", 4)(3, "mat-icon", 5);
    \u0275\u0275text(4, "data_object");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 6)(6, "h2", 7);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 8);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "button", 9);
    \u0275\u0275listener("click", function HistoryRequestDialogComponent_div_0_Conditional_1_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275elementStart(11, "mat-icon", 5);
    \u0275\u0275text(12, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 10)(14, "span", 11);
    \u0275\u0275text(15);
    \u0275\u0275template(16, HistoryRequestDialogComponent_div_0_Conditional_1_Conditional_16_Template, 2, 1, "span", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 13);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, HistoryRequestDialogComponent_div_0_Conditional_1_Conditional_19_Template, 2, 1, "span", 13);
    \u0275\u0275elementStart(20, "span", 14);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 15);
    \u0275\u0275template(23, HistoryRequestDialogComponent_div_0_Conditional_1_Conditional_23_Template, 4, 1, "div", 16)(24, HistoryRequestDialogComponent_div_0_Conditional_1_Conditional_24_Template, 14, 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "section", 17)(26, "button", 18);
    \u0275\u0275listener("click", function HistoryRequestDialogComponent_div_0_Conditional_1_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.repeat());
    });
    \u0275\u0275elementStart(27, "mat-icon", 19);
    \u0275\u0275text(28, "replay");
    \u0275\u0275elementEnd();
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const request_r3 = ctx;
    const t_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", request_r3.code || request_r3.endpoint, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", request_r3.endpoint || request_r3.code, " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngClass", ctx_r1.historyStatusClass(request_r3));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.historyStatusLabel(request_r3), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(request_r3.statusCode ? 16 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.isNotCharged(request_r3) ? t_r4("history.notCharged") : ctx_r1.formatCost(request_r3.cost), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(request_r3.createdAt ? 19 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", request_r3.method || "GET", " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.loading() ? 23 : 24);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", !ctx_r1.canRepeatRequest(request_r3));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r4("history.actions.repeat"), " ");
  }
}
function HistoryRequestDialogComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275template(1, HistoryRequestDialogComponent_div_0_Conditional_1_Template, 30, 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_2_0 = ctx_r1.request()) ? 1 : -1, tmp_2_0);
  }
}
var HistoryRequestDialogComponent = class _HistoryRequestDialogComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this._dialogRef = inject(MatDialogRef);
    this._historyService = inject(HistoryService);
    this._transloco = inject(TranslocoService);
    this._destroy$ = new Subject();
    this.request = signal(__spreadValues({}, this._data));
    this.loading = signal(true);
    this.close = () => {
      this._dialogRef.close();
    };
    this.repeat = () => {
      const request = this.request();
      if (!request?.code)
        return;
      this._dialogRef.close({ repeat: true, request });
    };
    this.canRepeatRequest = (request) => !!request?.code;
    this.formatDate = (date) => {
      if (!date)
        return "\u2014";
      if (typeof date === "number")
        return DateTime.fromMillis(date).toFormat("LLL dd, yyyy h:mma");
      const parsed = DateTime.fromISO(date);
      return parsed.isValid ? parsed.toFormat("LLL dd, yyyy h:mma") : "\u2014";
    };
    this.formatCost = (cost) => {
      const formatted = formatHistoryCostCredits(cost);
      return formatted === "-" ? "\u2014" : `${formatted} credits`;
    };
    this.isNotCharged = (row) => this._resolveHistoryStatus(row) === "pending";
    this.hasDynamicQueryBilling = (request) => isDynamicQueryPremiumAdjustment(request);
    this.getDynamicQueryTooltipParams = (request) => getHistoryBillingTooltipParams(request);
    this.historyStatusClass = (row) => {
      const status = this._resolveHistoryStatus(row);
      if (status === "success")
        return "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300";
      if (status === "failed")
        return "bg-red-100 text-red-700 dark:bg-red-950/40 dark:text-red-300";
      return "bg-stone-100 text-stone-600 dark:bg-gray-800 dark:text-stone-300";
    };
    this.historyStatusLabel = (row) => {
      const status = this._resolveHistoryStatus(row);
      if (status === "failed")
        return this._transloco.translate("history.statusFailed");
      if (status === "pending")
        return this._transloco.translate("history.statusPending");
      return this._transloco.translate("history.statusSuccess");
    };
    this._resolveHistoryStatus = (row) => {
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
    };
  }
  ngOnInit() {
    this._historyService.getRequestDetail(this._data._id).pipe(takeUntil(this._destroy$)).subscribe({
      next: (res) => {
        this.request.set(__spreadValues(__spreadValues({}, this._data), res.data));
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }
  static {
    this.\u0275fac = function HistoryRequestDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HistoryRequestDialogComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HistoryRequestDialogComponent, selectors: [["history-request-dialog"]], decls: 1, vars: 0, consts: [["class", "flex max-h-[min(40rem,calc(100dvh-2rem))] flex-col overflow-hidden bg-white dark:bg-gray-900", 4, "transloco"], [1, "flex", "max-h-[min(40rem,calc(100dvh-2rem))]", "flex-col", "overflow-hidden", "bg-white", "dark:bg-gray-900"], [1, "flex", "shrink-0", "items-start", "justify-between", "gap-4", "border-b", "border-stone-200/90", "px-5", "py-5", "dark:border-gray-800", "md:px-6"], [1, "flex", "min-w-0", "items-start", "gap-3"], [1, "flex", "h-10", "w-10", "shrink-0", "items-center", "justify-center", "rounded-xl", "border", "border-stone-200", "bg-stone-50", "text-stone-700", "dark:border-gray-800", "dark:bg-gray-950", "dark:text-stone-200"], [1, "!h-5", "!w-5", "!text-xl"], [1, "min-w-0"], [1, "truncate", "text-xl", "font-semibold", "tracking-tight", "text-stone-950", "dark:text-white"], [1, "mt-1", "truncate", "text-sm", "leading-6", "text-stone-500", "dark:text-stone-400"], ["type", "button", 1, "inline-flex", "h-9", "w-9", "shrink-0", "items-center", "justify-center", "rounded-xl", "border", "border-stone-200", "text-stone-500", "transition", "hover:bg-stone-50", "hover:text-stone-800", "dark:border-gray-700", "dark:text-stone-400", "dark:hover:bg-gray-800", "dark:hover:text-stone-200", 3, "click"], [1, "flex", "shrink-0", "flex-wrap", "gap-2", "border-b", "border-stone-200/90", "px-5", "py-4", "dark:border-gray-800", "md:px-6"], [1, "inline-flex", "items-center", "gap-1.5", "rounded-full", "px-2.5", "py-1", "text-xs", "font-semibold", 3, "ngClass"], [1, "font-mono", "font-medium", "opacity-80"], [1, "rounded-full", "border", "border-stone-200", "bg-stone-50", "px-2.5", "py-1", "text-xs", "font-medium", "text-stone-600", "dark:border-gray-700", "dark:bg-gray-950", "dark:text-stone-300"], [1, "rounded-full", "border", "border-stone-200", "bg-stone-50", "px-2.5", "py-1", "font-mono", "text-xs", "font-semibold", "text-stone-600", "dark:border-gray-700", "dark:bg-gray-950", "dark:text-stone-300"], [1, "flex", "min-h-0", "flex-1", "flex-col", "gap-5", "overflow-y-auto", "px-5", "py-6", "md:px-6"], [1, "flex", "flex-1", "flex-col", "items-center", "justify-center", "px-6", "py-16"], [1, "flex", "shrink-0", "flex-wrap", "gap-2", "border-t", "border-stone-100", "px-5", "py-4", "dark:border-gray-800", "md:px-6"], ["mat-stroked-button", "", "type", "button", 1, "!rounded-xl", 3, "click", "disabled"], [1, "mr-1", "!h-4", "!w-4"], ["diameter", "36"], [1, "mt-4", "text-sm", "text-stone-500", "dark:text-stone-400"], [1, "text-sm", "leading-6", "text-stone-600", "dark:text-stone-300"], [1, "flex", "flex-col", "gap-3", "rounded-2xl", "border", "border-amber-200/80", "bg-amber-50/70", "p-4", "dark:border-amber-900/40", "dark:bg-amber-950/20"], [1, "flex", "flex-col", "gap-2"], [1, "text-xs", "font-semibold", "uppercase", "tracking-[0.14em]", "text-stone-500", "dark:text-stone-400"], [1, "max-h-56", "overflow-auto", "rounded-xl", "border", "border-stone-200/80", "bg-stone-50", "p-4", "text-xs", "leading-5", "text-stone-800", "dark:border-gray-800", "dark:bg-gray-950", "dark:text-stone-200"], [1, "max-h-80", "overflow-auto", "rounded-xl", "border", "border-stone-200/80", "bg-stone-50", "p-4", "text-xs", "leading-5", "text-stone-800", "dark:border-gray-800", "dark:bg-gray-950", "dark:text-stone-200"], [1, "w-fit", "rounded-full", "bg-amber-100", "px-2.5", "py-1", "text-[10px]", "font-bold", "uppercase", "tracking-wide", "text-amber-800", "dark:bg-amber-900/40", "dark:text-amber-200"], [1, "text-sm", "leading-6", "text-stone-700", "dark:text-stone-300"], [1, "grid", "grid-cols-1", "gap-3", "text-sm"], [1, "flex", "flex-col", "gap-1", "rounded-xl", "border", "border-amber-100", "bg-white/80", "px-3", "py-2", "dark:border-amber-900/30", "dark:bg-gray-950/40"], [1, "text-xs", "font-semibold", "uppercase", "tracking-wide", "text-stone-500", "dark:text-stone-400"], [1, "font-mono", "font-semibold", "text-stone-900", "dark:text-white"], [1, "font-mono", "font-semibold", "text-amber-800", "dark:text-amber-200"]], template: function HistoryRequestDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, HistoryRequestDialogComponent_div_0_Template, 2, 1, "div", 0);
      }
    }, dependencies: [CommonModule, NgClass, JsonPipe, MatButtonModule, MatButton, MatDialogModule, MatIconModule, MatIcon, MatProgressSpinnerModule, MatProgressSpinner, TranslocoModule, TranslocoDirective], styles: ["/* src/app/modules/history/history-request-dialog.component.scss */\n.history-request-dialog .mat-mdc-dialog-container {\n  --mdc-dialog-container-shape: 1rem;\n}\n.history-request-dialog .mdc-dialog__surface {\n  border-radius: 1rem;\n  overflow: hidden;\n  padding: 0;\n}\n.history-request-dialog mat-icon {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=history-request-dialog.component.css.map */\n"], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HistoryRequestDialogComponent, [{
    type: Component,
    args: [{ selector: "history-request-dialog", standalone: true, imports: [CommonModule, MatButtonModule, MatDialogModule, MatIconModule, MatProgressSpinnerModule, TranslocoModule], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: `<div class="flex max-h-[min(40rem,calc(100dvh-2rem))] flex-col overflow-hidden bg-white dark:bg-gray-900" *transloco="let t">\r
    @if (request(); as request) {\r
        <header class="flex shrink-0 items-start justify-between gap-4 border-b border-stone-200/90 px-5 py-5 dark:border-gray-800 md:px-6">\r
            <div class="flex min-w-0 items-start gap-3">\r
                <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-stone-200 bg-stone-50 text-stone-700 dark:border-gray-800 dark:bg-gray-950 dark:text-stone-200">\r
                    <mat-icon class="!h-5 !w-5 !text-xl">data_object</mat-icon>\r
                </div>\r
                <div class="min-w-0">\r
                    <h2 class="truncate text-xl font-semibold tracking-tight text-stone-950 dark:text-white">\r
                        {{ request.code || request.endpoint }}\r
                    </h2>\r
                    <p class="mt-1 truncate text-sm leading-6 text-stone-500 dark:text-stone-400">\r
                        {{ request.endpoint || request.code }}\r
                    </p>\r
                </div>\r
            </div>\r
            <button\r
                type="button"\r
                class="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-stone-200 text-stone-500 transition hover:bg-stone-50 hover:text-stone-800 dark:border-gray-700 dark:text-stone-400 dark:hover:bg-gray-800 dark:hover:text-stone-200"\r
                (click)="close()"\r
            >\r
                <mat-icon class="!h-5 !w-5 !text-xl">close</mat-icon>\r
            </button>\r
        </header>\r
\r
        <div class="flex shrink-0 flex-wrap gap-2 border-b border-stone-200/90 px-5 py-4 dark:border-gray-800 md:px-6">\r
            <span class="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold" [ngClass]="historyStatusClass(request)">\r
                {{ historyStatusLabel(request) }}\r
                @if (request.statusCode) {\r
                    <span class="font-mono font-medium opacity-80">{{ request.statusCode }}</span>\r
                }\r
            </span>\r
            <span class="rounded-full border border-stone-200 bg-stone-50 px-2.5 py-1 text-xs font-medium text-stone-600 dark:border-gray-700 dark:bg-gray-950 dark:text-stone-300">\r
                {{ isNotCharged(request) ? t('history.notCharged') : formatCost(request.cost) }}\r
            </span>\r
            @if (request.createdAt) {\r
                <span class="rounded-full border border-stone-200 bg-stone-50 px-2.5 py-1 text-xs font-medium text-stone-600 dark:border-gray-700 dark:bg-gray-950 dark:text-stone-300">\r
                    {{ formatDate(request.createdAt) }}\r
                </span>\r
            }\r
            <span class="rounded-full border border-stone-200 bg-stone-50 px-2.5 py-1 font-mono text-xs font-semibold text-stone-600 dark:border-gray-700 dark:bg-gray-950 dark:text-stone-300">\r
                {{ request.method || 'GET' }}\r
            </span>\r
        </div>\r
\r
        <div class="flex min-h-0 flex-1 flex-col gap-5 overflow-y-auto px-5 py-6 md:px-6">\r
            @if (loading()) {\r
                <div class="flex flex-1 flex-col items-center justify-center px-6 py-16">\r
                    <mat-spinner diameter="36"></mat-spinner>\r
                    <p class="mt-4 text-sm text-stone-500 dark:text-stone-400">{{ t('history.table.loading') }}</p>\r
                </div>\r
            } @else {\r
                @if (isNotCharged(request)) {\r
                    <p class="text-sm leading-6 text-stone-600 dark:text-stone-300">\r
                        {{ t('history.notChargedExplanation') }}\r
                    </p>\r
                }\r
                @if (!isNotCharged(request) && hasDynamicQueryBilling(request) && getDynamicQueryTooltipParams(request); as billing) {\r
                    <section class="flex flex-col gap-3 rounded-2xl border border-amber-200/80 bg-amber-50/70 p-4 dark:border-amber-900/40 dark:bg-amber-950/20">\r
                        <span class="w-fit rounded-full bg-amber-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-amber-800 dark:bg-amber-900/40 dark:text-amber-200">\r
                            {{ t('history.dynamicQuery.badge') }}\r
                        </span>\r
                        <p class="text-sm leading-6 text-stone-700 dark:text-stone-300">\r
                            {{ t('history.dynamicQuery.detailExplanation') }}\r
                        </p>\r
                        <dl class="grid grid-cols-1 gap-3 text-sm">\r
                            <div class="flex flex-col gap-1 rounded-xl border border-amber-100 bg-white/80 px-3 py-2 dark:border-amber-900/30 dark:bg-gray-950/40">\r
                                <dt class="text-xs font-semibold uppercase tracking-wide text-stone-500 dark:text-stone-400">\r
                                    {{ t('history.dynamicQuery.standardCredits') }}\r
                                </dt>\r
                                <dd class="font-mono font-semibold text-stone-900 dark:text-white">{{ billing.standard }} credits</dd>\r
                            </div>\r
                            <div class="flex flex-col gap-1 rounded-xl border border-amber-100 bg-white/80 px-3 py-2 dark:border-amber-900/30 dark:bg-gray-950/40">\r
                                <dt class="text-xs font-semibold uppercase tracking-wide text-stone-500 dark:text-stone-400">\r
                                    {{ t('history.dynamicQuery.chargedCredits') }}\r
                                </dt>\r
                                <dd class="font-mono font-semibold text-amber-800 dark:text-amber-200">{{ billing.charged }} credits</dd>\r
                            </div>\r
                        </dl>\r
                    </section>\r
                }\r
\r
                <section class="flex flex-col gap-2">\r
                    <h3 class="text-xs font-semibold uppercase tracking-[0.14em] text-stone-500 dark:text-stone-400">\r
                        {{ t('history.table.parameters') }}\r
                    </h3>\r
                    <pre class="max-h-56 overflow-auto rounded-xl border border-stone-200/80 bg-stone-50 p-4 text-xs leading-5 text-stone-800 dark:border-gray-800 dark:bg-gray-950 dark:text-stone-200">{{ request.params | json }}</pre>\r
                </section>\r
                <section class="flex flex-col gap-2">\r
                    <h3 class="text-xs font-semibold uppercase tracking-[0.14em] text-stone-500 dark:text-stone-400">\r
                        {{ t('history.response') }}\r
                    </h3>\r
                    <pre class="max-h-80 overflow-auto rounded-xl border border-stone-200/80 bg-stone-50 p-4 text-xs leading-5 text-stone-800 dark:border-gray-800 dark:bg-gray-950 dark:text-stone-200">{{ request.apiResponse | json }}</pre>\r
                </section>\r
            }\r
        </div>\r
\r
        <section class="flex shrink-0 flex-wrap gap-2 border-t border-stone-100 px-5 py-4 dark:border-gray-800 md:px-6">\r
            <button\r
                mat-stroked-button\r
                type="button"\r
                class="!rounded-xl"\r
                [disabled]="!canRepeatRequest(request)"\r
                (click)="repeat()"\r
            >\r
                <mat-icon class="mr-1 !h-4 !w-4">replay</mat-icon>\r
                {{ t('history.actions.repeat') }}\r
            </button>\r
        </section>\r
    }\r
</div>\r
`, styles: ["/* src/app/modules/history/history-request-dialog.component.scss */\n.history-request-dialog .mat-mdc-dialog-container {\n  --mdc-dialog-container-shape: 1rem;\n}\n.history-request-dialog .mdc-dialog__surface {\n  border-radius: 1rem;\n  overflow: hidden;\n  padding: 0;\n}\n.history-request-dialog mat-icon {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=history-request-dialog.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HistoryRequestDialogComponent, { className: "HistoryRequestDialogComponent", filePath: "src/app/modules/history/history-request-dialog.component.ts", lineNumber: 34 });
})();

// src/app/modules/history/history.component.ts
var _c0 = (a0) => ({ count: a0 });
var _c1 = () => ({});
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item._id;
function HistoryComponent_div_0_Conditional_22_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-button-toggle", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const preset_r4 = ctx.$implicit;
    const t_r5 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("value", preset_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r5(ctx_r1.datePresetKey(preset_r4)));
  }
}
function HistoryComponent_div_0_Conditional_22_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 31)(1, "mat-label");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-date-range-input", 36)(4, "input", 37);
    \u0275\u0275listener("dateChange", function HistoryComponent_div_0_Conditional_22_Conditional_17_Template_input_dateChange_4_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onCustomRangeChange());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 38);
    \u0275\u0275listener("dateChange", function HistoryComponent_div_0_Conditional_22_Conditional_17_Template_input_dateChange_5_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onCustomRangeChange());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275element(6, "mat-datepicker-toggle", 39)(7, "mat-date-range-picker", null, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const picker_r7 = \u0275\u0275reference(8);
    const t_r5 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r5("history.dateRange"));
    \u0275\u0275advance();
    \u0275\u0275property("rangePicker", picker_r7);
    \u0275\u0275advance();
    \u0275\u0275property("formControl", ctx_r1.rangeStart)("placeholder", t_r5("history.dateStart"));
    \u0275\u0275advance();
    \u0275\u0275property("formControl", ctx_r1.rangeEnd)("placeholder", t_r5("history.dateEnd"));
    \u0275\u0275advance();
    \u0275\u0275property("for", picker_r7);
  }
}
function HistoryComponent_div_0_Conditional_22_For_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("value", item_r8._id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.endpointDisplayName(item_r8));
  }
}
function HistoryComponent_div_0_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 21)(2, "div", 22)(3, "div", 23)(4, "mat-icon", 24);
    \u0275\u0275text(5, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 25);
    \u0275\u0275listener("ngModelChange", function HistoryComponent_div_0_Conditional_22_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onSearchInput($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 26);
    \u0275\u0275listener("click", function HistoryComponent_div_0_Conditional_22_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.clearFilters());
    });
    \u0275\u0275elementStart(8, "mat-icon", 27);
    \u0275\u0275text(9, "filter_list_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 28)(13, "div", 19)(14, "mat-button-toggle-group", 29);
    \u0275\u0275listener("change", function HistoryComponent_div_0_Conditional_22_Template_mat_button_toggle_group_change_14_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDatePresetChange($event.value));
    });
    \u0275\u0275repeaterCreate(15, HistoryComponent_div_0_Conditional_22_For_16_Template, 2, 2, "mat-button-toggle", 30, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, HistoryComponent_div_0_Conditional_22_Conditional_17_Template, 9, 7, "mat-form-field", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 32)(19, "label", 33);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "select", 34);
    \u0275\u0275listener("ngModelChange", function HistoryComponent_div_0_Conditional_22_Template_select_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onServiceFilterChange($event));
    });
    \u0275\u0275elementStart(22, "option", 35);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(24, HistoryComponent_div_0_Conditional_22_For_25_Template, 2, 2, "option", 30, _forTrack1);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const t_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("placeholder", t_r5("history.search"))("ngModel", ctx_r1.searchText);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.disabledClearFilters || ctx_r1.filtersBusy());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r5("history.clearFilters"));
    \u0275\u0275advance(3);
    \u0275\u0275property("value", ctx_r1.datePreset)("disabled", ctx_r1.filtersBusy());
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.datePresets);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.datePreset === "custom" ? 17 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r5("history.filterService"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.serviceFilter)("disabled", ctx_r1.filtersBusy());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r5("history.filterServiceAll"));
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.topEndpoints());
  }
}
function HistoryComponent_div_0_Conditional_23_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 43);
    \u0275\u0275listener("click", function HistoryComponent_div_0_Conditional_23_For_5_Template_button_click_0_listener() {
      const item_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.filterByEndpoint(item_r10._id));
    });
    \u0275\u0275elementStart(1, "div", 44)(2, "div", 45)(3, "mat-icon", 27);
    \u0275\u0275text(4, "query_stats");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 46)(6, "p", 47);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 48);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 49);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    const t_r5 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r1.endpointCardClasses(item_r10._id));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r1.endpointDisplayName(item_r10), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r10.total, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r5("history.requests"), " ");
  }
}
function HistoryComponent_div_0_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 19)(1, "h2", 40);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 41);
    \u0275\u0275repeaterCreate(4, HistoryComponent_div_0_Conditional_23_For_5_Template, 12, 4, "button", 42, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r5("history.topEndpointsTitle"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.topEndpoints());
  }
}
function HistoryComponent_div_0_For_25_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 56);
  }
}
function HistoryComponent_div_0_For_25_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 57);
    \u0275\u0275text(1, "download");
    \u0275\u0275elementEnd();
  }
}
function HistoryComponent_div_0_For_25_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275element(1, "mat-spinner", 65);
    \u0275\u0275elementStart(2, "p", 66);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r5 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r5("history.table.loading"));
  }
}
function HistoryComponent_div_0_For_25_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64)(1, "div", 67)(2, "mat-icon");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "h3", 68);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 69);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const section_r12 = \u0275\u0275nextContext().$implicit;
    const t_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.sectionIcon(section_r12.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r5(ctx_r1.sectionEmptyTitleKey(section_r12.id)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r5(ctx_r1.sectionEmptySubtitleKey(section_r12.id)), " ");
  }
}
function HistoryComponent_div_0_For_25_Conditional_41_th_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 94);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r5 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r5("history.table.status"), " ");
  }
}
function HistoryComponent_div_0_For_25_Conditional_41_td_4_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 97);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r14 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r14.statusCode);
  }
}
function HistoryComponent_div_0_For_25_Conditional_41_td_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 95)(1, "span", 96);
    \u0275\u0275text(2);
    \u0275\u0275template(3, HistoryComponent_div_0_For_25_Conditional_41_td_4_Conditional_3_Template, 2, 1, "span", 97);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r14 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.historyStatusClass(row_r14));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.historyStatusLabel(row_r14), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r14.statusCode ? 3 : -1);
  }
}
function HistoryComponent_div_0_For_25_Conditional_41_th_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 94);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r5 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r5("history.table.service"), " ");
  }
}
function HistoryComponent_div_0_For_25_Conditional_41_td_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 95)(1, "div", 98)(2, "span", 99);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 100);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r15 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.featureTitle(row_r15.code));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r15.endpoint || row_r15.project);
  }
}
function HistoryComponent_div_0_For_25_Conditional_41_th_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 94);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r5 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r5("history.table.document"), " ");
  }
}
function HistoryComponent_div_0_For_25_Conditional_41_td_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 101);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r16 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.documentLabel(row_r16), " ");
  }
}
function HistoryComponent_div_0_For_25_Conditional_41_th_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 94);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r5 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r5("history.table.txHash"), " ");
  }
}
function HistoryComponent_div_0_For_25_Conditional_41_td_13_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 102)(1, "a", 104);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 105);
    \u0275\u0275listener("click", function HistoryComponent_div_0_For_25_Conditional_41_td_13_Conditional_1_Template_button_click_3_listener($event) {
      \u0275\u0275restoreView(_r17);
      const row_r18 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      ctx_r1.copyText(row_r18.paymentTx);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(4, "mat-icon", 106);
    \u0275\u0275text(5, "content_copy");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r18 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("href", ctx_r1.snowtraceUrl + "/tx/" + row_r18.paymentTx, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.shortHash(row_r18.paymentTx), " ");
  }
}
function HistoryComponent_div_0_For_25_Conditional_41_td_13_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 103);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function HistoryComponent_div_0_For_25_Conditional_41_td_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 95);
    \u0275\u0275template(1, HistoryComponent_div_0_For_25_Conditional_41_td_13_Conditional_1_Template, 6, 2, "div", 102)(2, HistoryComponent_div_0_For_25_Conditional_41_td_13_Conditional_2_Template, 2, 0, "span", 103);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r18 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r18.paymentTx ? 1 : 2);
  }
}
function HistoryComponent_div_0_For_25_Conditional_41_th_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 94);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r5 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r5("history.table.amount"), " ");
  }
}
function HistoryComponent_div_0_For_25_Conditional_41_td_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 107);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "span", 108);
    \u0275\u0275text(3, "AVAX");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r19 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r19.paymentAmount || row_r19.cost || "\u2014", " ");
  }
}
function HistoryComponent_div_0_For_25_Conditional_41_th_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 94);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r5 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r5("history.table.date"), " ");
  }
}
function HistoryComponent_div_0_For_25_Conditional_41_td_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 109);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r20 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatDate(row_r20.createdAt || row_r20.timestamp), " ");
  }
}
function HistoryComponent_div_0_For_25_Conditional_41_th_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 94);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r5 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r5("history.table.cost"), " ");
  }
}
function HistoryComponent_div_0_For_25_Conditional_41_td_22_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 112);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r5 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r5("history.notCharged"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r5("history.notChargedExplanation"));
  }
}
function HistoryComponent_div_0_For_25_Conditional_41_td_22_Conditional_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 113);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r21 = \u0275\u0275nextContext(2).$implicit;
    const t_r5 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("matTooltip", t_r5(ctx_r1.getDynamicQueryTooltipKey(), ctx_r1.getDynamicQueryTooltipParams(row_r21) || \u0275\u0275pureFunction0(2, _c1)));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r5("history.dynamicQuery.badge"), " ");
  }
}
function HistoryComponent_div_0_For_25_Conditional_41_td_22_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, HistoryComponent_div_0_For_25_Conditional_41_td_22_Conditional_3_Conditional_2_Template, 2, 3, "span", 113);
  }
  if (rf & 2) {
    const row_r21 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.formatCost(row_r21.cost));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.hasDynamicQueryBilling(row_r21) ? 2 : -1);
  }
}
function HistoryComponent_div_0_For_25_Conditional_41_td_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 110)(1, "div", 111);
    \u0275\u0275template(2, HistoryComponent_div_0_For_25_Conditional_41_td_22_Conditional_2_Template, 4, 2)(3, HistoryComponent_div_0_For_25_Conditional_41_td_22_Conditional_3_Template, 3, 2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r21 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.isNotCharged(row_r21) ? 2 : 3);
  }
}
function HistoryComponent_div_0_For_25_Conditional_41_th_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 114);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r5 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r5("history.table.actions"), " ");
  }
}
function HistoryComponent_div_0_For_25_Conditional_41_td_25_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 121);
    \u0275\u0275listener("click", function HistoryComponent_div_0_For_25_Conditional_41_td_25_Conditional_2_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r23);
      const row_r24 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.openDetail(row_r24, $event));
    });
    \u0275\u0275elementStart(1, "mat-icon", 119);
    \u0275\u0275text(2, "visibility");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r5 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275property("matTooltip", t_r5("history.actions.viewDetails"));
  }
}
function HistoryComponent_div_0_For_25_Conditional_41_td_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 115)(1, "div", 116);
    \u0275\u0275template(2, HistoryComponent_div_0_For_25_Conditional_41_td_25_Conditional_2_Template, 3, 1, "button", 117);
    \u0275\u0275elementStart(3, "button", 118);
    \u0275\u0275listener("click", function HistoryComponent_div_0_For_25_Conditional_41_td_25_Template_button_click_3_listener($event) {
      const row_r24 = \u0275\u0275restoreView(_r22).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      ctx_r1.repeatRequest(row_r24);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(4, "mat-icon", 119);
    \u0275\u0275text(5, "replay");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 120);
    \u0275\u0275listener("click", function HistoryComponent_div_0_For_25_Conditional_41_td_25_Template_button_click_6_listener($event) {
      const row_r24 = \u0275\u0275restoreView(_r22).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      ctx_r1.repeatRequest(row_r24);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(7, "mat-icon", 119);
    \u0275\u0275text(8, "open_in_new");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const row_r24 = ctx.$implicit;
    const t_r5 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.mode() === "credits" ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.canRepeatRequest(row_r24))("matTooltip", ctx_r1.canRepeatRequest(row_r24) ? t_r5("history.actions.repeatTooltip") : t_r5("history.actions.repeatUnavailable"));
    \u0275\u0275advance(3);
    \u0275\u0275property("matTooltip", t_r5("history.openInApi"))("disabled", !row_r24.code);
  }
}
function HistoryComponent_div_0_For_25_Conditional_41_tr_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 122);
  }
}
function HistoryComponent_div_0_For_25_Conditional_41_tr_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 123);
    \u0275\u0275listener("click", function HistoryComponent_div_0_For_25_Conditional_41_tr_27_Template_tr_click_0_listener() {
      const row_r26 = \u0275\u0275restoreView(_r25).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.mode() === "credits" && ctx_r1.openDetail(row_r26));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("cursor-pointer", ctx_r1.mode() === "credits");
  }
}
function HistoryComponent_div_0_For_25_Conditional_41_For_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const size_r27 = ctx.$implicit;
    \u0275\u0275property("value", size_r27);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(size_r27);
  }
}
function HistoryComponent_div_0_For_25_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 70)(1, "table", 71);
    \u0275\u0275elementContainerStart(2, 72);
    \u0275\u0275template(3, HistoryComponent_div_0_For_25_Conditional_41_th_3_Template, 2, 1, "th", 73)(4, HistoryComponent_div_0_For_25_Conditional_41_td_4_Template, 4, 3, "td", 74);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(5, 75);
    \u0275\u0275template(6, HistoryComponent_div_0_For_25_Conditional_41_th_6_Template, 2, 1, "th", 73)(7, HistoryComponent_div_0_For_25_Conditional_41_td_7_Template, 6, 2, "td", 74);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(8, 76);
    \u0275\u0275template(9, HistoryComponent_div_0_For_25_Conditional_41_th_9_Template, 2, 1, "th", 73)(10, HistoryComponent_div_0_For_25_Conditional_41_td_10_Template, 2, 1, "td", 77);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(11, 78);
    \u0275\u0275template(12, HistoryComponent_div_0_For_25_Conditional_41_th_12_Template, 2, 1, "th", 73)(13, HistoryComponent_div_0_For_25_Conditional_41_td_13_Template, 3, 1, "td", 74);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(14, 79);
    \u0275\u0275template(15, HistoryComponent_div_0_For_25_Conditional_41_th_15_Template, 2, 1, "th", 73)(16, HistoryComponent_div_0_For_25_Conditional_41_td_16_Template, 4, 1, "td", 80);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(17, 81);
    \u0275\u0275template(18, HistoryComponent_div_0_For_25_Conditional_41_th_18_Template, 2, 1, "th", 73)(19, HistoryComponent_div_0_For_25_Conditional_41_td_19_Template, 2, 1, "td", 82);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(20, 83);
    \u0275\u0275template(21, HistoryComponent_div_0_For_25_Conditional_41_th_21_Template, 2, 1, "th", 73)(22, HistoryComponent_div_0_For_25_Conditional_41_td_22_Template, 4, 1, "td", 84);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(23, 85);
    \u0275\u0275template(24, HistoryComponent_div_0_For_25_Conditional_41_th_24_Template, 2, 1, "th", 86)(25, HistoryComponent_div_0_For_25_Conditional_41_td_25_Template, 9, 5, "td", 87);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(26, HistoryComponent_div_0_For_25_Conditional_41_tr_26_Template, 1, 0, "tr", 88)(27, HistoryComponent_div_0_For_25_Conditional_41_tr_27_Template, 1, 2, "tr", 89);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 90)(29, "label", 91)(30, "select", 92);
    \u0275\u0275listener("change", function HistoryComponent_div_0_For_25_Conditional_41_Template_select_change_30_listener($event) {
      \u0275\u0275restoreView(_r13);
      const section_r12 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPageSizeChange(section_r12.id, +$event.target.value));
    });
    \u0275\u0275repeaterCreate(31, HistoryComponent_div_0_For_25_Conditional_41_For_32_Template, 2, 2, "option", 30, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "mat-paginator", 93);
    \u0275\u0275listener("page", function HistoryComponent_div_0_For_25_Conditional_41_Template_mat_paginator_page_33_listener($event) {
      \u0275\u0275restoreView(_r13);
      const section_r12 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPaginatorEvent(section_r12.id, $event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const section_r12 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("dataSource", section_r12.rows);
    \u0275\u0275advance(25);
    \u0275\u0275property("matHeaderRowDef", ctx_r1.displayedColumns)("matHeaderRowDefSticky", true);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx_r1.displayedColumns);
    \u0275\u0275advance(3);
    \u0275\u0275property("value", section_r12.pageSize);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.pageSizeOptions);
    \u0275\u0275advance(2);
    \u0275\u0275property("length", section_r12.total)("pageSize", section_r12.pageSize)("pageIndex", section_r12.pageIndex)("hidePageSize", true);
  }
}
function HistoryComponent_div_0_For_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 50)(2, "div", 44)(3, "div", 51)(4, "mat-icon");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div")(7, "h2", 52);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 53);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 54)(12, "button", 55);
    \u0275\u0275template(13, HistoryComponent_div_0_For_25_Conditional_13_Template, 1, 0, "mat-spinner", 56)(14, HistoryComponent_div_0_For_25_Conditional_14_Template, 2, 0, "mat-icon", 57);
    \u0275\u0275text(15);
    \u0275\u0275elementStart(16, "mat-icon", 58);
    \u0275\u0275text(17, "arrow_drop_down");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "mat-menu", null, 1)(20, "button", 59);
    \u0275\u0275listener("click", function HistoryComponent_div_0_For_25_Template_button_click_20_listener() {
      const section_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.exportList("xlsx", section_r12.id));
    });
    \u0275\u0275elementStart(21, "mat-icon");
    \u0275\u0275text(22, "table_chart");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "button", 59);
    \u0275\u0275listener("click", function HistoryComponent_div_0_For_25_Template_button_click_25_listener() {
      const section_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.exportList("csv", section_r12.id));
    });
    \u0275\u0275elementStart(26, "mat-icon");
    \u0275\u0275text(27, "description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span");
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "button", 59);
    \u0275\u0275listener("click", function HistoryComponent_div_0_For_25_Template_button_click_30_listener() {
      const section_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.exportList("json", section_r12.id));
    });
    \u0275\u0275elementStart(31, "mat-icon");
    \u0275\u0275text(32, "data_object");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "span");
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(35, "div", 60);
    \u0275\u0275element(36, "span", 61);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "div", 62);
    \u0275\u0275template(39, HistoryComponent_div_0_For_25_Conditional_39_Template, 4, 1, "div", 63)(40, HistoryComponent_div_0_For_25_Conditional_40_Template, 8, 3, "div", 64)(41, HistoryComponent_div_0_For_25_Conditional_41_Template, 34, 9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const section_r12 = ctx.$implicit;
    const exportMenu_r28 = \u0275\u0275reference(19);
    const t_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r1.sectionIconWellClass(section_r12.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.sectionIcon(section_r12.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r5(ctx_r1.sectionTitleKey(section_r12.id)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r5(ctx_r1.sectionSubtitleKey(section_r12.id), \u0275\u0275pureFunction1(17, _c0, section_r12.total)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("matMenuTriggerFor", exportMenu_r28)("disabled", section_r12.exporting || section_r12.total === 0);
    \u0275\u0275advance();
    \u0275\u0275conditional(section_r12.exporting ? 13 : 14);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", section_r12.exporting ? t_r5("history.exporting") : t_r5("history.export"), " ");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(t_r5("history.exportAsExcel"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(t_r5("history.exportAsCsv"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(t_r5("history.exportAsJson"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-emerald-400", !section_r12.loading)("bg-amber-400", section_r12.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", section_r12.loading ? t_r5("history.table.loading") : t_r5("history.table.live"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(section_r12.loading ? 39 : !section_r12.rows.length ? 40 : 41);
  }
}
function HistoryComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "header", 4)(2, "div", 5)(3, "div", 6)(4, "a", 7);
    \u0275\u0275text(5, " Verifik ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "mat-icon", 8);
    \u0275\u0275elementStart(7, "span", 9);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 10)(10, "div", 11)(11, "h1", 12);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p", 13);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 14)(16, "button", 15);
    \u0275\u0275listener("click", function HistoryComponent_div_0_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setMode("credits"));
    });
    \u0275\u0275text(17, " CREDITS ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 15);
    \u0275\u0275listener("click", function HistoryComponent_div_0_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setMode("x402"));
    });
    \u0275\u0275text(19, " x402 ");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(20, "main", 16)(21, "div", 17);
    \u0275\u0275template(22, HistoryComponent_div_0_Conditional_22_Template, 26, 11, "div", 18)(23, HistoryComponent_div_0_Conditional_23_Template, 6, 1, "section", 19);
    \u0275\u0275repeaterCreate(24, HistoryComponent_div_0_For_25_Template, 42, 19, "div", 20, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const t_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(t_r5("nav.history"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r5("history.title"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r5("history.subtitle"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-stone-950", ctx_r1.mode() === "credits")("text-white", ctx_r1.mode() === "credits")("text-stone-500", ctx_r1.mode() !== "credits")("dark:bg-white", ctx_r1.mode() === "credits")("dark:text-gray-950", ctx_r1.mode() === "credits");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-stone-950", ctx_r1.mode() === "x402")("text-white", ctx_r1.mode() === "x402")("text-stone-500", ctx_r1.mode() !== "x402")("dark:bg-white", ctx_r1.mode() === "x402")("dark:text-gray-950", ctx_r1.mode() === "x402");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.mode() === "credits" ? 22 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.mode() === "credits" && ctx_r1.topEndpoints().length ? 23 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.visibleSections());
  }
}
var EXPORT_MAX = 1e4;
var EXPORT_INPUT_KEYS = ["documentType", "documentNumber", "plate", "vin", "business", "fullName"];
var EXPORT_PAGE_SIZE = 200;
var DEFAULT_PAGE_SIZE = 10;
var CREDIT_SECTIONS = ["success", "failed", "pending"];
var emptyListResponse = () => ({
  data: [],
  total: 0,
  limit: DEFAULT_PAGE_SIZE,
  page: 1,
  pages: 0
});
var createSection = (id) => ({
  id,
  rows: [],
  total: 0,
  loading: true,
  exporting: false,
  pageIndex: 0,
  pageSize: DEFAULT_PAGE_SIZE
});
var HistoryComponent = class _HistoryComponent {
  constructor() {
    this._historyService = inject(HistoryService);
    this._dialog = inject(MatDialog);
    this._walletService = inject(AgentWalletService);
    this._router = inject(Router);
    this._route = inject(ActivatedRoute);
    this._cdr = inject(ChangeDetectorRef);
    this._snack = inject(MatSnackBar);
    this._transloco = inject(TranslocoService);
    this._searchChange$ = new Subject();
    this._reloadX402$ = new Subject();
    this._sectionReload$ = {
      success: new Subject(),
      failed: new Subject(),
      pending: new Subject()
    };
    this._destroy$ = new Subject();
    this._sectionCopy = {
      success: {
        title: "history.logSuccessTitle",
        subtitle: "history.logSuccessSubtitle",
        emptyTitle: "history.emptySuccessTitle",
        emptySubtitle: "history.emptySuccessSubtitle",
        icon: "check_circle",
        iconWell: "border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-900/50 dark:bg-emerald-950/40 dark:text-emerald-300"
      },
      failed: {
        title: "history.logFailedTitle",
        subtitle: "history.logFailedSubtitle",
        emptyTitle: "history.emptyFailedTitle",
        emptySubtitle: "history.emptyFailedSubtitle",
        icon: "error_outline",
        iconWell: "border-red-200 bg-red-50 text-red-700 dark:border-red-900/50 dark:bg-red-950/40 dark:text-red-300"
      },
      pending: {
        title: "history.logPendingTitle",
        subtitle: "history.logPendingSubtitle",
        emptyTitle: "history.emptyPendingTitle",
        emptySubtitle: "history.emptyPendingSubtitle",
        icon: "hourglass_empty",
        iconWell: "border-stone-200 bg-stone-50 text-stone-600 dark:border-gray-800 dark:bg-gray-950 dark:text-stone-300"
      },
      x402: {
        title: "history.tableTitle",
        subtitle: "history.tableSubtitle",
        emptyTitle: "history.emptyTitle",
        emptySubtitle: "history.emptySubtitle",
        icon: "history",
        iconWell: "border-stone-200 bg-stone-50 text-stone-700 dark:border-gray-800 dark:bg-gray-950 dark:text-stone-200"
      }
    };
    this.datePresets = ["all", "today", "this_week", "this_month", "custom"];
    this.pageSizeOptions = [10, 25, 50];
    this.rangeStart = new FormControl(null);
    this.rangeEnd = new FormControl(null);
    this.sections = signal({
      success: createSection("success"),
      failed: createSection("failed"),
      pending: createSection("pending"),
      x402: createSection("x402")
    });
    this.mode = signal("credits");
    this.visibleSections = computed(() => {
      const sections = this.sections();
      if (this.mode() === "x402")
        return [sections.x402];
      return CREDIT_SECTIONS.map((id) => sections[id]);
    });
    this.filtersBusy = computed(() => this.visibleSections().some((section) => section.loading));
    this.displayedColumns = ["status", "service", "document", "date", "cost", "actions"];
    this.datePreset = "all";
    this.searchText = "";
    this.serviceFilter = "";
    this.topEndpoints = signal([]);
    this.featureCatalog = signal({});
    this.setMode = (mode) => {
      this._router.navigate([], {
        relativeTo: this._route,
        queryParams: { view: mode === "x402" ? "x402" : null },
        queryParamsHandling: "merge"
      });
    };
    this.loadData = () => {
      if (this.mode() === "x402") {
        this._reloadSection("x402");
        return;
      }
      CREDIT_SECTIONS.forEach((bucket) => this._reloadSection(bucket));
      this._loadTopSales();
    };
    this.onSearchInput = (value) => {
      this.searchText = value?.trim() || "";
      this._searchChange$.next(this.searchText);
    };
    this.onServiceFilterChange = (value) => {
      this.serviceFilter = value || "";
      this._resetVisiblePages();
      this.loadData();
    };
    this.onDatePresetChange = (value) => {
      this.datePreset = value;
      if (value !== "custom") {
        this.rangeStart.setValue(null, { emitEvent: false });
        this.rangeEnd.setValue(null, { emitEvent: false });
        this._resetVisiblePages();
        this.loadData();
        return;
      }
      this._cdr.markForCheck();
    };
    this.onCustomRangeChange = () => {
      const start = this.rangeStart.value;
      const end = this.rangeEnd.value;
      if (!start?.isValid || !end?.isValid)
        return;
      this._resetVisiblePages();
      this.loadData();
    };
    this.filterByEndpoint = (code) => {
      this.serviceFilter = code;
      this._resetVisiblePages();
      this.loadData();
      this._cdr.markForCheck();
    };
    this.isEndpointSelected = (code) => this.serviceFilter === code;
    this.endpointCardClasses = (code) => {
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
    };
    this.clearFilters = () => {
      this.searchText = "";
      this.serviceFilter = "";
      this.datePreset = "all";
      this.rangeStart.setValue(null, { emitEvent: false });
      this.rangeEnd.setValue(null, { emitEvent: false });
      this._resetVisiblePages();
      this.loadData();
      this._cdr.markForCheck();
    };
    this.onPaginatorEvent = (sectionId, event) => {
      const section = this.sections()[sectionId];
      const pageSizeChanged = event.pageSize !== section.pageSize;
      this._patchSection(sectionId, {
        pageIndex: pageSizeChanged ? 0 : event.pageIndex,
        pageSize: event.pageSize
      });
      this._reloadSection(sectionId);
    };
    this.onPageSizeChange = (sectionId, pageSize) => {
      const section = this.sections()[sectionId];
      if (!pageSize || pageSize === section.pageSize)
        return;
      this._patchSection(sectionId, { pageIndex: 0, pageSize });
      this._reloadSection(sectionId);
    };
    this.sectionTitleKey = (id) => this._sectionCopy[id].title;
    this.sectionSubtitleKey = (id) => this._sectionCopy[id].subtitle;
    this.sectionEmptyTitleKey = (id) => this._sectionCopy[id].emptyTitle;
    this.sectionEmptySubtitleKey = (id) => this._sectionCopy[id].emptySubtitle;
    this.sectionIcon = (id) => this._sectionCopy[id].icon;
    this.sectionIconWellClass = (id) => this._sectionCopy[id].iconWell;
    this.openDetail = (request, event) => {
      if (this.mode() !== "credits")
        return;
      event?.stopPropagation();
      this._dialog.open(HistoryRequestDialogComponent, {
        data: request,
        autoFocus: false,
        width: "32rem",
        maxWidth: "calc(100vw - 2rem)",
        maxHeight: "min(40rem, calc(100dvh - 2rem))",
        panelClass: "history-request-dialog"
      }).afterClosed().pipe(takeUntil(this._destroy$)).subscribe((result) => {
        if (result?.repeat)
          this.repeatRequest(result.request);
      });
    };
    this.copyText = (text) => {
      navigator.clipboard.writeText(text);
    };
    this.shortHash = (hash) => {
      if (!hash)
        return "";
      return `${hash.substring(0, 6)}...${hash.substring(hash.length - 4)}`;
    };
    this.formatDate = (date) => {
      if (!date)
        return "\u2014";
      if (typeof date === "number")
        return DateTime.fromMillis(date).toFormat("LLL dd, yyyy h:mma");
      const parsed = DateTime.fromISO(date);
      return parsed.isValid ? parsed.toFormat("LLL dd, yyyy h:mma") : "\u2014";
    };
    this.formatCost = (cost) => {
      const formatted = formatHistoryCostCredits(cost);
      return formatted === "-" ? "\u2014" : `${formatted} credits`;
    };
    this.documentLabel = (row) => {
      const params = row?.params;
      if (!params || typeof params !== "object")
        return "\u2014";
      const preferred = ["documentNumber", "plate", "vin", "business", "checkId", "licenseNumber", "fullName", "citizenIdentifier"];
      for (const key of preferred) {
        const value = params[key];
        if (value != null && value !== "" && typeof value !== "object")
          return String(value);
      }
      const first = Object.entries(params).find(([key, value]) => !key.startsWith("_") && value != null && value !== "" && typeof value !== "object");
      return first ? String(first[1]) : "\u2014";
    };
    this.formatServiceLabel = (code) => code.split(/[-_]/).filter(Boolean).map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(" ");
    this.endpointDisplayName = (item) => this.featureTitle(item._id, item.feature);
    this.featureTitle = (code, feature) => {
      if (!code)
        return "\u2014";
      const catalogTitle = getAppFeatureCatalogCopy(this._transloco, code).title;
      if (catalogTitle)
        return catalogTitle;
      const meta = feature || this.featureCatalog()[code];
      const lang = this._transloco.getActiveLang();
      const fromCatalog = lang === "es" ? meta?.nameES || meta?.name : meta?.name;
      if (fromCatalog && fromCatalog !== code)
        return fromCatalog;
      return this.formatServiceLabel(code);
    };
    this.resolveHistoryStatus = (row) => {
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
    };
    this.historyStatusClass = (row) => {
      const status = this.resolveHistoryStatus(row);
      if (status === "success")
        return "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300";
      if (status === "failed")
        return "bg-red-100 text-red-700 dark:bg-red-950/40 dark:text-red-300";
      return "bg-stone-100 text-stone-600 dark:bg-gray-800 dark:text-stone-300";
    };
    this.historyStatusLabel = (row) => {
      const status = this.resolveHistoryStatus(row);
      if (status === "failed")
        return this._t("history.statusFailed");
      if (status === "pending")
        return this._t("history.statusPending");
      return this._t("history.statusSuccess");
    };
    this.isNotCharged = (row) => this.resolveHistoryStatus(row) === "pending";
    this.hasDynamicQueryBilling = (request) => isDynamicQueryPremiumAdjustment(request);
    this.getDynamicQueryTooltipKey = () => "history.dynamicQuery.tooltip";
    this.getDynamicQueryTooltipParams = (request) => getHistoryBillingTooltipParams(request);
    this.canRepeatRequest = (request) => !!request?.code;
    this.repeatRequest = (request) => {
      if (!this.canRepeatRequest(request))
        return;
      const payload = {
        v: 1,
        source: "history",
        code: request.code,
        paramValues: this._buildRepeatParams(request.params),
        paymentMode: this.mode(),
        method: request.method,
        requestId: request._id
      };
      sessionStorage.setItem(POSTMAN_HISTORY_PREFILL_STORAGE_KEY, JSON.stringify(payload));
      this._router.navigate(["/postman"], { queryParams: { code: request.code } });
    };
    this.datePresetKey = (preset) => {
      const keys = {
        all: "history.filterDateAll",
        today: "history.filterDateToday",
        this_week: "history.filterDateThisWeek",
        this_month: "history.filterDateThisMonth",
        custom: "history.filterDateCustom"
      };
      return keys[preset];
    };
    this.exportList = (format, sectionId) => __async(this, null, function* () {
      const section = this.sections()[sectionId];
      if (section.exporting || section.total === 0)
        return;
      this._patchSection(sectionId, { exporting: true });
      try {
        const { rows, total } = yield this._collectExportRows(sectionId);
        const sorted = this._sortByDateDesc(rows);
        if (!sorted.length) {
          this._snack.open(this._t("history.exportEmpty"), void 0, { duration: 3e3 });
          return;
        }
        this._writeExportFile(format, sorted, sectionId);
        if (total > sorted.length) {
          this._snack.open(this._t("history.exportTruncated", { exported: sorted.length, total }), void 0, { duration: 4500 });
        }
      } catch {
        this._snack.open(this._t("history.exportFailed"), void 0, { duration: 3e3 });
      } finally {
        this._patchSection(sectionId, { exporting: false });
        this._cdr.markForCheck();
      }
    });
    this._syncColumns = () => {
      this.displayedColumns = this.mode() === "credits" ? ["status", "service", "document", "date", "cost", "actions"] : ["service", "transactionHash", "amount", "date", "actions"];
    };
    this._reloadSection = (sectionId) => {
      this._patchSection(sectionId, { loading: true });
      if (sectionId === "x402") {
        this._reloadX402$.next();
        return;
      }
      this._sectionReload$[sectionId].next();
    };
    this._patchSection = (id, patch) => {
      this.sections.update((current) => __spreadProps(__spreadValues({}, current), {
        [id]: __spreadValues(__spreadValues({}, current[id]), patch)
      }));
    };
    this._applyFetched = (id, response) => {
      this._patchSection(id, {
        rows: response.data || [],
        total: response.total || 0,
        loading: false
      });
      this._cdr.markForCheck();
    };
    this._resetVisiblePages = () => {
      const ids = this.mode() === "x402" ? ["x402"] : [...CREDIT_SECTIONS];
      ids.forEach((id) => this._patchSection(id, { pageIndex: 0 }));
    };
    this._fetchCreditSection = (bucket) => this._historyService.listForExport(this._buildFilterParams(bucket)).pipe(catchError(() => of(emptyListResponse())));
    this._fetchX402Section = () => {
      const wallet = this._walletService.getAddress();
      const section = this.sections().x402;
      if (!wallet)
        return of(emptyListResponse());
      return this._historyService.listPublicForExport(wallet, section.pageIndex + 1, section.pageSize).pipe(catchError(() => of(emptyListResponse())));
    };
    this._buildFilterParams = (bucket) => {
      const section = this.sections()[bucket];
      const params = {
        page: section.pageIndex + 1,
        limit: section.pageSize,
        historyBucket: bucket
      };
      if (this.searchText)
        params.like_code = this.searchText.toLowerCase();
      if (this.serviceFilter)
        params.where_code = this.serviceFilter;
      const range = this._dateRangeForPreset(this.datePreset);
      if (range) {
        Object.assign(params, createdAtRangeParams(range.start, range.end));
      }
      return params;
    };
    this._dateRangeForPreset = (preset) => {
      if (preset === "all")
        return null;
      if (preset === "custom")
        return this._customDateRange();
      const now = DateTime.now();
      if (preset === "today")
        return { start: now.startOf("day"), end: now.endOf("day") };
      if (preset === "this_week")
        return { start: now.startOf("week"), end: now.endOf("week") };
      if (preset === "this_month")
        return { start: now.startOf("month"), end: now.endOf("month") };
      return null;
    };
    this._customDateRange = () => {
      const start = this.rangeStart.value;
      const end = this.rangeEnd.value;
      if (!start?.isValid || !end?.isValid)
        return null;
      return { start: start.startOf("day"), end: end.endOf("day") };
    };
    this._collectExportRows = (sectionId) => __async(this, null, function* () {
      const rows = [];
      let page = 1;
      let total = 0;
      let pages = 1;
      while (rows.length < EXPORT_MAX && page <= pages) {
        const response = yield this._fetchExportPage(sectionId, page);
        total = response.total || 0;
        pages = response.pages || 1;
        rows.push(...response.data || []);
        if (!response.data?.length || rows.length >= total)
          break;
        page += 1;
      }
      return { rows: rows.slice(0, EXPORT_MAX), total };
    });
    this._fetchExportPage = (sectionId, page) => {
      if (sectionId === "x402") {
        const wallet = this._walletService.getAddress();
        if (!wallet)
          return Promise.resolve({ data: [], total: 0, limit: EXPORT_PAGE_SIZE, page, pages: 0 });
        return firstValueFrom(this._historyService.listPublicForExport(wallet, page, EXPORT_PAGE_SIZE));
      }
      return firstValueFrom(this._historyService.listForExport(__spreadProps(__spreadValues({}, this._buildFilterParams(sectionId)), {
        page,
        limit: EXPORT_PAGE_SIZE
      })));
    };
    this._sortByDateDesc = (rows) => [...rows].sort((left, right) => this._rowTime(right) - this._rowTime(left));
    this._rowTime = (row) => {
      if (row.createdAt) {
        const parsed = DateTime.fromISO(row.createdAt);
        if (parsed.isValid)
          return parsed.toMillis();
      }
      if (typeof row.timestamp === "number")
        return row.timestamp;
      if (typeof row.timestamp === "string") {
        const parsed = DateTime.fromISO(row.timestamp);
        if (parsed.isValid)
          return parsed.toMillis();
      }
      return 0;
    };
    this._writeExportFile = (format, rows, sectionId) => {
      const fileName = this._exportFileName(format, sectionId);
      if (format === "json") {
        const payload = rows.map((row) => this._mapExportJson(row));
        this._downloadBlob(new Blob([JSON.stringify(payload, null, 2)], { type: "application/json;charset=utf-8;" }), fileName);
        return;
      }
      const inputKeys = EXPORT_INPUT_KEYS.filter((key) => rows.some((row) => this._scalarParam(row, key)));
      const sheet = utils.json_to_sheet(rows.map((row) => this._mapExportSheetRow(row, inputKeys)));
      if (format === "csv") {
        this._downloadBlob(new Blob([`\uFEFF${utils.sheet_to_csv(sheet)}`], { type: "text/csv;charset=utf-8;" }), fileName);
        return;
      }
      const workbook = utils.book_new();
      utils.book_append_sheet(workbook, sheet, "History");
      writeFileSync(workbook, fileName);
    };
    this._scalarParam = (row, key) => {
      const params = row.params;
      if (!params || typeof params !== "object")
        return "";
      const value = params[key];
      if (value == null || value === "" || typeof value === "object")
        return "";
      return String(value);
    };
    this._exportDocument = (row) => {
      const label = this.documentLabel(row);
      return label === "\u2014" ? "" : label;
    };
    this._exportCost = (row) => this.isNotCharged(row) ? this._t("history.notCharged") : this.formatCost(row.cost);
    this._exportParams = (row) => {
      const params = row.params;
      if (!params || typeof params !== "object")
        return {};
      return Object.entries(params).reduce((acc, [key, value]) => {
        if (!key.startsWith("_"))
          acc[key] = value;
        return acc;
      }, {});
    };
    this._mapExportJson = (row) => {
      const inputs = EXPORT_INPUT_KEYS.reduce((acc, key) => {
        const value = this._scalarParam(row, key);
        if (value)
          acc[key] = value;
        return acc;
      }, {});
      return __spreadProps(__spreadValues({
        status: this.historyStatusLabel(row),
        statusCode: row.statusCode ?? null,
        service: this.featureTitle(row.code),
        code: row.code ?? "",
        endpoint: row.endpoint ?? "",
        document: this._exportDocument(row)
      }, inputs), {
        createdAt: row.createdAt ?? "",
        cost: this._exportCost(row),
        params: this._exportParams(row)
      });
    };
    this._mapExportSheetRow = (row, inputKeys) => {
      const record = {
        [this._t("history.table.status")]: this.historyStatusLabel(row),
        [this._t("history.table.statusCode")]: row.statusCode ?? "",
        [this._t("history.table.service")]: this.featureTitle(row.code),
        [this._t("history.table.code")]: row.code ?? "",
        [this._t("history.table.endpoint")]: row.endpoint ?? "",
        [this._t("history.table.document")]: this._exportDocument(row)
      };
      inputKeys.forEach((key) => {
        record[this._t(`history.table.${key}`)] = this._scalarParam(row, key);
      });
      record[this._t("history.table.date")] = this.formatDate(row.createdAt || row.timestamp);
      record[this._t("history.table.cost")] = this._exportCost(row);
      return record;
    };
    this._exportFileName = (format, sectionId) => {
      const range = this._dateRangeForPreset(this.datePreset);
      const from = range?.start.toFormat("yyyy-MM-dd") ?? "all";
      const to = range?.end.toFormat("yyyy-MM-dd") ?? "all";
      const stamp = DateTime.now().toFormat("yyyy-MM-dd_HHmm");
      return `smartcheck-history_${sectionId}_${from}_${to}_${stamp}.${format}`;
    };
    this._downloadBlob = (blob, fileName) => {
      const url = URL.createObjectURL(blob);
      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = fileName;
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);
      URL.revokeObjectURL(url);
    };
    this._t = (key, params) => this._transloco.translate(key, params);
    this._loadFeatureCatalog = () => {
      this._historyService.getFeatureCatalog().pipe(takeUntil(this._destroy$)).subscribe({
        next: (rows) => {
          const catalog = {};
          rows.forEach((row) => {
            if (row?.code)
              catalog[row.code] = row;
          });
          this.featureCatalog.set(catalog);
          this._cdr.markForCheck();
        },
        error: () => this.featureCatalog.set({})
      });
    };
    this._loadTopSales = () => {
      if (this.mode() !== "credits")
        return;
      const range = this._dateRangeForPreset(this.datePreset);
      const params = { source: "requests", limit: 5 };
      if (range)
        Object.assign(params, createdAtRangeParams(range.start, range.end));
      this._historyService.getTopSales(params).subscribe({
        next: (rows) => {
          this.topEndpoints.set(rows.slice(0, 5));
          this._cdr.markForCheck();
        },
        error: () => this.topEndpoints.set([])
      });
    };
    this._buildRepeatParams = (params) => {
      if (!params || typeof params !== "object")
        return {};
      return Object.keys(params).reduce((acc, key) => {
        if (!key.startsWith("_"))
          acc[key] = params[key];
        return acc;
      }, {});
    };
  }
  ngOnInit() {
    CREDIT_SECTIONS.forEach((bucket) => {
      this._sectionReload$[bucket].pipe(switchMap(() => this._fetchCreditSection(bucket)), takeUntil(this._destroy$)).subscribe((response) => this._applyFetched(bucket, response));
    });
    this._reloadX402$.pipe(switchMap(() => this._fetchX402Section()), takeUntil(this._destroy$)).subscribe((response) => this._applyFetched("x402", response));
    this._searchChange$.pipe(debounceTime(350), takeUntil(this._destroy$)).subscribe(() => {
      this._resetVisiblePages();
      this.loadData();
    });
    this._route.queryParams.pipe(takeUntil(this._destroy$)).subscribe((params) => {
      const targetMode = params["view"] === "x402" ? "x402" : "credits";
      if (this.mode() !== targetMode) {
        this.mode.set(targetMode);
        this._resetVisiblePages();
      }
      this._syncColumns();
      this.loadData();
    });
    this._loadFeatureCatalog();
  }
  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }
  get disabledClearFilters() {
    return !this.searchText && !this.serviceFilter && this.datePreset === "all";
  }
  get snowtraceUrl() {
    if (environment.isTestnet !== void 0) {
      return environment.isTestnet ? "https://testnet.snowtrace.io" : "https://snowtrace.io";
    }
    if (environment.chainId) {
      return environment.chainId === 43113 ? "https://testnet.snowtrace.io" : "https://snowtrace.io";
    }
    const rpcUrl = environment.rpcUrl || "";
    const isTestnet = rpcUrl.includes("test") || rpcUrl.includes("fuji") || rpcUrl.includes("43113");
    return isTestnet ? "https://testnet.snowtrace.io" : "https://snowtrace.io";
  }
  static {
    this.\u0275fac = function HistoryComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HistoryComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HistoryComponent, selectors: [["history"]], hostAttrs: [1, "flex", "flex-auto", "min-w-0", "w-full"], decls: 1, vars: 0, consts: [["picker", ""], ["exportMenu", "matMenu"], ["class", "flex min-h-0 min-w-0 w-full flex-auto flex-col overflow-auto bg-stone-50 dark:bg-gray-950", 4, "transloco"], [1, "flex", "min-h-0", "min-w-0", "w-full", "flex-auto", "flex-col", "overflow-auto", "bg-stone-50", "dark:bg-gray-950"], [1, "border-b", "border-stone-200/90", "bg-white/90", "px-5", "py-6", "backdrop-blur-sm", "dark:border-gray-800", "dark:bg-gray-950/90", "md:px-8", "md:py-8"], [1, "mx-auto", "flex", "w-full", "max-w-7xl", "flex-col", "gap-5"], [1, "flex", "flex-wrap", "items-center", "text-xs", "font-medium", "leading-none", "text-stone-500", "dark:text-stone-400"], ["routerLink", "/home", 1, "cursor-pointer", "text-stone-700", "underline-offset-4", "hover:underline", "dark:text-stone-300"], ["svgIcon", "heroicons_solid:chevron-right", 1, "icon-size-4", "mx-2", "text-stone-400"], [1, "cursor-default", "text-stone-600", "dark:text-stone-300"], [1, "flex", "flex-wrap", "items-start", "justify-between", "gap-4"], [1, "max-w-2xl"], [1, "text-2xl", "font-semibold", "tracking-tight", "text-stone-950", "dark:text-white", "md:text-3xl"], [1, "mt-2", "text-sm", "leading-6", "text-stone-500", "dark:text-stone-400", "md:text-base"], [1, "flex", "items-center", "rounded-xl", "border", "border-stone-200", "bg-white", "p-1", "shadow-sm", "dark:border-gray-800", "dark:bg-gray-900"], ["type", "button", 1, "rounded-lg", "px-3", "py-2", "text-xs", "font-semibold", "transition-all", 3, "click"], [1, "flex", "flex-auto", "flex-col", "px-5", "py-8", "md:px-8", "md:py-10"], [1, "mx-auto", "flex", "w-full", "max-w-7xl", "flex-col", "gap-6"], [1, "rounded-2xl", "border", "border-stone-200/90", "bg-white", "p-5", "shadow-sm", "dark:border-gray-800", "dark:bg-gray-900/70", "md:p-6"], [1, "flex", "flex-col", "gap-3"], [1, "overflow-hidden", "rounded-2xl", "border", "border-stone-200/90", "bg-white", "shadow-sm", "dark:border-gray-800", "dark:bg-gray-900/70"], [1, "flex", "flex-col", "gap-4"], [1, "flex", "flex-col", "gap-4", "lg:flex-row", "lg:items-center", "lg:justify-between"], [1, "relative", "min-w-0", "flex-1"], [1, "pointer-events-none", "absolute", "left-3", "top-1/2", "!h-4", "!w-4", "-translate-y-1/2", "text-stone-400"], ["type", "text", 1, "h-11", "w-full", "rounded-xl", "border", "border-stone-200", "bg-stone-50", "pl-10", "pr-4", "text-sm", "text-stone-900", "outline-none", "transition", "focus:border-stone-400", "focus:bg-white", "dark:border-gray-700", "dark:bg-gray-950", "dark:text-stone-100", "placeholder:text-stone-400", "dark:placeholder:text-stone-500", "dark:focus:border-gray-500", "dark:focus:bg-gray-950", 3, "ngModelChange", "placeholder", "ngModel"], ["type", "button", 1, "inline-flex", "min-h-10", "shrink-0", "items-center", "justify-center", "gap-2", "rounded-xl", "border", "border-stone-200", "px-4", "text-sm", "font-medium", "text-stone-800", "transition", "hover:bg-stone-50", "disabled:cursor-not-allowed", "disabled:opacity-60", "dark:border-gray-700", "dark:text-stone-100", "dark:hover:bg-gray-800", 3, "click", "disabled"], [1, "!h-4", "!w-4", "!text-base"], [1, "flex", "flex-col", "gap-3", "xl:flex-row", "xl:flex-wrap", "xl:items-center"], [1, "rounded-xl", 3, "change", "value", "disabled"], [3, "value"], ["appearance", "outline", "subscriptSizing", "dynamic", 1, "history-date-range", "w-full", "sm:w-80"], [1, "min-w-[220px]", "flex-1"], [1, "mb-1.5", "block", "text-xs", "font-medium", "uppercase", "tracking-[0.12em]", "text-stone-500", "dark:text-stone-400"], [1, "h-11", "w-full", "rounded-xl", "border", "border-stone-200", "bg-stone-50", "px-4", "text-sm", "text-stone-900", "outline-none", "transition", "focus:border-stone-400", "focus:bg-white", "dark:border-gray-700", "dark:bg-gray-950", "dark:text-stone-100", "dark:focus:border-gray-500", 3, "ngModelChange", "ngModel", "disabled"], ["value", ""], [3, "rangePicker"], ["matStartDate", "", 3, "dateChange", "formControl", "placeholder"], ["matEndDate", "", 3, "dateChange", "formControl", "placeholder"], ["matIconSuffix", "", 3, "for"], [1, "text-sm", "font-semibold", "text-stone-950", "dark:text-white"], [1, "grid", "gap-4", "sm:grid-cols-2"], ["type", "button", 1, "flex", "flex-col", "gap-3", "rounded-2xl", "border", "p-4", "text-left", "transition", "hover:border-stone-300", "hover:shadow-sm", "dark:hover:border-gray-600", 3, "ngClass"], ["type", "button", 1, "flex", "flex-col", "gap-3", "rounded-2xl", "border", "p-4", "text-left", "transition", "hover:border-stone-300", "hover:shadow-sm", "dark:hover:border-gray-600", 3, "click", "ngClass"], [1, "flex", "items-start", "gap-3"], [1, "flex", "h-9", "w-9", "shrink-0", "items-center", "justify-center", "rounded-lg", "border", "border-stone-200", "bg-stone-50", "text-stone-700", "dark:border-gray-800", "dark:bg-gray-950", "dark:text-stone-200"], [1, "min-w-0", "flex-1"], [1, "text-sm", "font-medium", "leading-5", "text-stone-950", "dark:text-white"], [1, "mt-1", "text-2xl", "font-semibold", "tracking-tight", "text-stone-950", "dark:text-white"], [1, "text-xs", "text-stone-500", "dark:text-stone-400"], [1, "flex", "flex-col", "gap-3", "border-b", "border-stone-200/80", "p-5", "dark:border-gray-800", "md:flex-row", "md:items-center", "md:justify-between", "md:p-6"], [1, "flex", "h-10", "w-10", "shrink-0", "items-center", "justify-center", "rounded-xl", "border", 3, "ngClass"], [1, "text-base", "font-semibold", "text-stone-950", "dark:text-white"], [1, "mt-1", "text-sm", "text-stone-500", "dark:text-stone-400"], [1, "flex", "flex-wrap", "items-center", "gap-2"], ["mat-stroked-button", "", "type", "button", 1, "!rounded-xl", 3, "matMenuTriggerFor", "disabled"], ["diameter", "16", 1, "mr-2"], [1, "mr-1", "!h-4", "!w-4"], [1, "!h-4", "!w-4"], ["mat-menu-item", "", "type", "button", 3, "click"], [1, "flex", "items-center", "gap-2", "rounded-full", "bg-stone-100", "px-3", "py-1", "text-xs", "font-medium", "text-stone-500", "dark:bg-gray-800", "dark:text-gray-400"], [1, "h-2", "w-2", "rounded-full"], [1, "p-5", "md:p-6"], [1, "flex", "flex-col", "items-center", "justify-center", "rounded-xl", "border", "border-dashed", "border-stone-200", "py-14", "text-center", "dark:border-gray-800"], [1, "flex", "flex-col", "items-center", "justify-center", "rounded-xl", "border", "border-dashed", "border-stone-200", "px-5", "py-14", "text-center", "dark:border-gray-800"], ["diameter", "40"], [1, "mt-4", "text-sm", "text-stone-500", "dark:text-stone-400"], [1, "flex", "h-12", "w-12", "items-center", "justify-center", "rounded-xl", "bg-stone-100", "text-stone-500", "dark:bg-gray-800", "dark:text-stone-300"], [1, "mt-4", "text-base", "font-semibold", "text-stone-950", "dark:text-white"], [1, "mt-1", "max-w-sm", "text-sm", "text-stone-500", "dark:text-stone-400"], [1, "overflow-x-auto", "rounded-xl", "border", "border-stone-200/80", "dark:border-gray-800"], ["mat-table", "", 1, "w-full", "min-w-[720px]", "bg-transparent", 3, "dataSource"], ["matColumnDef", "status"], ["mat-header-cell", "", "class", "!border-b !border-stone-200/80 !bg-stone-50/80 !px-4 !py-3 text-xs font-semibold uppercase tracking-[0.12em] text-stone-500 dark:!border-gray-800 dark:!bg-gray-950/50 dark:text-stone-400", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "!px-4 !py-4", 4, "matCellDef"], ["matColumnDef", "service"], ["matColumnDef", "document"], ["mat-cell", "", "class", "!px-4 !py-4 font-mono text-sm text-stone-800 dark:text-stone-200", 4, "matCellDef"], ["matColumnDef", "transactionHash"], ["matColumnDef", "amount"], ["mat-cell", "", "class", "!px-4 !py-4 font-mono text-xs text-emerald-600 dark:text-emerald-400", 4, "matCellDef"], ["matColumnDef", "date"], ["mat-cell", "", "class", "!px-4 !py-4 text-sm text-stone-600 dark:text-stone-300", 4, "matCellDef"], ["matColumnDef", "cost"], ["mat-cell", "", "class", "!px-4 !py-4 text-sm font-medium text-stone-700 dark:text-stone-200", 4, "matCellDef"], ["matColumnDef", "actions"], ["mat-header-cell", "", "class", "!border-b !border-stone-200/80 !bg-stone-50/80 !px-4 !py-3 text-right text-xs font-semibold uppercase tracking-[0.12em] text-stone-500 dark:!border-gray-800 dark:!bg-gray-950/50 dark:text-stone-400", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "!px-4 !py-4 text-right", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", "class", "border-b border-stone-100 transition hover:bg-stone-50/80 dark:border-gray-800 dark:hover:bg-gray-800/40", 3, "cursor-pointer", "click", 4, "matRowDef", "matRowDefColumns"], [1, "mt-4", "flex", "flex-wrap", "items-center", "justify-end", "gap-3"], [1, "flex", "items-center", "gap-2", "text-sm", "text-stone-500", "dark:text-stone-400"], [1, "rounded-lg", "border", "border-stone-200", "bg-white", "px-2", "py-1", "text-sm", "text-stone-800", "dark:border-gray-700", "dark:bg-gray-900", "dark:text-stone-200", 3, "change", "value"], [1, "!bg-transparent", 3, "page", "length", "pageSize", "pageIndex", "hidePageSize"], ["mat-header-cell", "", 1, "!border-b", "!border-stone-200/80", "!bg-stone-50/80", "!px-4", "!py-3", "text-xs", "font-semibold", "uppercase", "tracking-[0.12em]", "text-stone-500", "dark:!border-gray-800", "dark:!bg-gray-950/50", "dark:text-stone-400"], ["mat-cell", "", 1, "!px-4", "!py-4"], [1, "inline-flex", "items-center", "gap-1.5", "rounded-full", "px-2.5", "py-1", "text-xs", "font-semibold", 3, "ngClass"], [1, "font-mono", "font-medium", "opacity-80"], [1, "flex", "flex-col", "gap-1"], [1, "font-semibold", "text-stone-950", "dark:text-white"], [1, "font-mono", "text-xs", "text-stone-500", "dark:text-stone-400"], ["mat-cell", "", 1, "!px-4", "!py-4", "font-mono", "text-sm", "text-stone-800", "dark:text-stone-200"], [1, "flex", "items-center", "gap-1"], [1, "text-xs", "text-stone-400"], ["target", "_blank", "rel", "noopener noreferrer", 1, "font-mono", "text-xs", "font-medium", "text-blue-600", "underline-offset-4", "hover:underline", "dark:text-blue-400", 3, "href"], ["mat-icon-button", "", "type", "button", 1, "!h-7", "!w-7", 3, "click"], [1, "icon-size-3"], ["mat-cell", "", 1, "!px-4", "!py-4", "font-mono", "text-xs", "text-emerald-600", "dark:text-emerald-400"], [1, "text-stone-400"], ["mat-cell", "", 1, "!px-4", "!py-4", "text-sm", "text-stone-600", "dark:text-stone-300"], ["mat-cell", "", 1, "!px-4", "!py-4", "text-sm", "font-medium", "text-stone-700", "dark:text-stone-200"], [1, "inline-flex", "flex-col", "items-start", "gap-1"], [1, "max-w-56", "text-xs", "font-normal", "leading-5", "text-stone-500", "dark:text-stone-400"], [1, "rounded-full", "bg-amber-100", "px-2", "py-0.5", "text-[10px]", "font-bold", "uppercase", "tracking-wide", "text-amber-800", "dark:bg-amber-900/40", "dark:text-amber-200", 3, "matTooltip"], ["mat-header-cell", "", 1, "!border-b", "!border-stone-200/80", "!bg-stone-50/80", "!px-4", "!py-3", "text-right", "text-xs", "font-semibold", "uppercase", "tracking-[0.12em]", "text-stone-500", "dark:!border-gray-800", "dark:!bg-gray-950/50", "dark:text-stone-400"], ["mat-cell", "", 1, "!px-4", "!py-4", "text-right"], [1, "inline-flex", "items-center", "gap-1"], ["mat-icon-button", "", "type", "button", 1, "!rounded-lg", "hover:!bg-stone-100", "dark:hover:!bg-gray-800", 3, "matTooltip"], ["mat-icon-button", "", "type", "button", 1, "!rounded-lg", "hover:!bg-stone-100", "dark:hover:!bg-gray-800", 3, "click", "disabled", "matTooltip"], [1, "!text-stone-600", "dark:!text-stone-300"], ["mat-icon-button", "", "type", "button", 1, "!rounded-lg", "hover:!bg-stone-100", "dark:hover:!bg-gray-800", 3, "click", "matTooltip", "disabled"], ["mat-icon-button", "", "type", "button", 1, "!rounded-lg", "hover:!bg-stone-100", "dark:hover:!bg-gray-800", 3, "click", "matTooltip"], ["mat-header-row", ""], ["mat-row", "", 1, "border-b", "border-stone-100", "transition", "hover:bg-stone-50/80", "dark:border-gray-800", "dark:hover:bg-gray-800/40", 3, "click"]], template: function HistoryComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, HistoryComponent_div_0_Template, 26, 25, "div", 2);
      }
    }, dependencies: [
      CommonModule,
      NgClass,
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
    ], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex: 1 1 auto;\n  min-height: 0;\n  min-width: 0;\n  width: 100%;\n}\n[_nghost-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n[_nghost-%COMP%]   mat-button-toggle-group[_ngcontent-%COMP%] {\n  border-radius: 0.75rem;\n  overflow: hidden;\n}\n[_nghost-%COMP%]   .history-date-range[_ngcontent-%COMP%]   .mat-mdc-form-field-infix[_ngcontent-%COMP%] {\n  min-height: 2.5rem;\n}\n/*# sourceMappingURL=history.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HistoryComponent, [{
    type: Component,
    args: [{ selector: "history", standalone: true, imports: [
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
      MatSnackBarModule,
      MatTableModule,
      MatTooltipModule,
      TranslocoModule
    ], changeDetection: ChangeDetectionStrategy.OnPush, host: {
      class: "flex flex-auto min-w-0 w-full"
    }, template: `<div class="flex min-h-0 min-w-0 w-full flex-auto flex-col overflow-auto bg-stone-50 dark:bg-gray-950" *transloco="let t">\r
            <header class="border-b border-stone-200/90 bg-white/90 px-5 py-6 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-950/90 md:px-8 md:py-8">\r
                <div class="mx-auto flex w-full max-w-7xl flex-col gap-5">\r
                    <div class="flex flex-wrap items-center text-xs font-medium leading-none text-stone-500 dark:text-stone-400">\r
                        <a routerLink="/home" class="cursor-pointer text-stone-700 underline-offset-4 hover:underline dark:text-stone-300">\r
                            Verifik\r
                        </a>\r
                        <mat-icon class="icon-size-4 mx-2 text-stone-400" svgIcon="heroicons_solid:chevron-right"></mat-icon>\r
                        <span class="cursor-default text-stone-600 dark:text-stone-300">{{ t('nav.history') }}</span>\r
                    </div>\r
\r
                    <div class="flex flex-wrap items-start justify-between gap-4">\r
                        <div class="max-w-2xl">\r
                            <h1 class="text-2xl font-semibold tracking-tight text-stone-950 dark:text-white md:text-3xl">\r
                                {{ t('history.title') }}\r
                            </h1>\r
                            <p class="mt-2 text-sm leading-6 text-stone-500 dark:text-stone-400 md:text-base">\r
                                {{ t('history.subtitle') }}\r
                            </p>\r
                        </div>\r
                        <div class="flex items-center rounded-xl border border-stone-200 bg-white p-1 shadow-sm dark:border-gray-800 dark:bg-gray-900">\r
                            <button\r
                                type="button"\r
                                class="rounded-lg px-3 py-2 text-xs font-semibold transition-all"\r
                                [class.bg-stone-950]="mode() === 'credits'"\r
                                [class.text-white]="mode() === 'credits'"\r
                                [class.text-stone-500]="mode() !== 'credits'"\r
                                [class.dark:bg-white]="mode() === 'credits'"\r
                                [class.dark:text-gray-950]="mode() === 'credits'"\r
                                (click)="setMode('credits')"\r
                            >\r
                                CREDITS\r
                            </button>\r
                            <button\r
                                type="button"\r
                                class="rounded-lg px-3 py-2 text-xs font-semibold transition-all"\r
                                [class.bg-stone-950]="mode() === 'x402'"\r
                                [class.text-white]="mode() === 'x402'"\r
                                [class.text-stone-500]="mode() !== 'x402'"\r
                                [class.dark:bg-white]="mode() === 'x402'"\r
                                [class.dark:text-gray-950]="mode() === 'x402'"\r
                                (click)="setMode('x402')"\r
                            >\r
                                x402\r
                            </button>\r
                        </div>\r
                    </div>\r
                </div>\r
            </header>\r
\r
            <main class="flex flex-auto flex-col px-5 py-8 md:px-8 md:py-10">\r
                <div class="mx-auto flex w-full max-w-7xl flex-col gap-6">\r
                    @if (mode() === 'credits') {\r
                        <div class="rounded-2xl border border-stone-200/90 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900/70 md:p-6">\r
                            <div class="flex flex-col gap-4">\r
                                <div class="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">\r
                                    <div class="relative min-w-0 flex-1">\r
                                        <mat-icon class="pointer-events-none absolute left-3 top-1/2 !h-4 !w-4 -translate-y-1/2 text-stone-400">search</mat-icon>\r
                                        <input\r
                                            type="text"\r
                                            class="h-11 w-full rounded-xl border border-stone-200 bg-stone-50 pl-10 pr-4 text-sm text-stone-900 outline-none transition focus:border-stone-400 focus:bg-white dark:border-gray-700 dark:bg-gray-950 dark:text-stone-100 placeholder:text-stone-400 dark:placeholder:text-stone-500 dark:focus:border-gray-500 dark:focus:bg-gray-950"\r
                                            [placeholder]="t('history.search')"\r
                                            [ngModel]="searchText"\r
                                            (ngModelChange)="onSearchInput($event)"\r
                                        />\r
                                    </div>\r
                                    <button\r
                                        type="button"\r
                                        class="inline-flex min-h-10 shrink-0 items-center justify-center gap-2 rounded-xl border border-stone-200 px-4 text-sm font-medium text-stone-800 transition hover:bg-stone-50 disabled:cursor-not-allowed disabled:opacity-60 dark:border-gray-700 dark:text-stone-100 dark:hover:bg-gray-800"\r
                                        (click)="clearFilters()"\r
                                        [disabled]="disabledClearFilters || filtersBusy()"\r
                                    >\r
                                        <mat-icon class="!h-4 !w-4 !text-base">filter_list_off</mat-icon>\r
                                        <span>{{ t('history.clearFilters') }}</span>\r
                                    </button>\r
                                </div>\r
\r
                                <div class="flex flex-col gap-3 xl:flex-row xl:flex-wrap xl:items-center">\r
                                    <div class="flex flex-col gap-3">\r
                                        <mat-button-toggle-group\r
                                            [value]="datePreset"\r
                                            (change)="onDatePresetChange($event.value)"\r
                                            [disabled]="filtersBusy()"\r
                                            class="rounded-xl"\r
                                        >\r
                                            @for (preset of datePresets; track preset) {\r
                                                <mat-button-toggle [value]="preset">{{ t(datePresetKey(preset)) }}</mat-button-toggle>\r
                                            }\r
                                        </mat-button-toggle-group>\r
                                        @if (datePreset === 'custom') {\r
                                            <mat-form-field appearance="outline" class="history-date-range w-full sm:w-80" subscriptSizing="dynamic">\r
                                                <mat-label>{{ t('history.dateRange') }}</mat-label>\r
                                                <mat-date-range-input [rangePicker]="picker">\r
                                                    <input\r
                                                        matStartDate\r
                                                        [formControl]="rangeStart"\r
                                                        (dateChange)="onCustomRangeChange()"\r
                                                        [placeholder]="t('history.dateStart')"\r
                                                    />\r
                                                    <input\r
                                                        matEndDate\r
                                                        [formControl]="rangeEnd"\r
                                                        (dateChange)="onCustomRangeChange()"\r
                                                        [placeholder]="t('history.dateEnd')"\r
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
                                            {{ t('history.filterService') }}\r
                                        </label>\r
                                        <select\r
                                            class="h-11 w-full rounded-xl border border-stone-200 bg-stone-50 px-4 text-sm text-stone-900 outline-none transition focus:border-stone-400 focus:bg-white dark:border-gray-700 dark:bg-gray-950 dark:text-stone-100 dark:focus:border-gray-500"\r
                                            [ngModel]="serviceFilter"\r
                                            (ngModelChange)="onServiceFilterChange($event)"\r
                                            [disabled]="filtersBusy()"\r
                                        >\r
                                            <option value="">{{ t('history.filterServiceAll') }}</option>\r
                                            @for (item of topEndpoints(); track item._id) {\r
                                                <option [value]="item._id">{{ endpointDisplayName(item) }}</option>\r
                                            }\r
                                        </select>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                        </div>\r
                    }\r
\r
                    @if (mode() === 'credits' && topEndpoints().length) {\r
                        <section class="flex flex-col gap-3">\r
                            <h2 class="text-sm font-semibold text-stone-950 dark:text-white">\r
                                {{ t('history.topEndpointsTitle') }}\r
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
                                                <mat-icon class="!h-4 !w-4 !text-base">query_stats</mat-icon>\r
                                            </div>\r
                                            <div class="min-w-0 flex-1">\r
                                                <p class="text-sm font-medium leading-5 text-stone-950 dark:text-white">\r
                                                    {{ endpointDisplayName(item) }}\r
                                                </p>\r
                                                <p class="mt-1 text-2xl font-semibold tracking-tight text-stone-950 dark:text-white">\r
                                                    {{ item.total }}\r
                                                </p>\r
                                                <p class="text-xs text-stone-500 dark:text-stone-400">\r
                                                    {{ t('history.requests') }}\r
                                                </p>\r
                                            </div>\r
                                        </div>\r
                                    </button>\r
                                }\r
                            </div>\r
                        </section>\r
                    }\r
\r
                    @for (section of visibleSections(); track section.id) {\r
                    <div class="overflow-hidden rounded-2xl border border-stone-200/90 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900/70">\r
                        <div class="flex flex-col gap-3 border-b border-stone-200/80 p-5 dark:border-gray-800 md:flex-row md:items-center md:justify-between md:p-6">\r
                            <div class="flex items-start gap-3">\r
                                <div\r
                                    class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border"\r
                                    [ngClass]="sectionIconWellClass(section.id)"\r
                                >\r
                                    <mat-icon>{{ sectionIcon(section.id) }}</mat-icon>\r
                                </div>\r
                                <div>\r
                                    <h2 class="text-base font-semibold text-stone-950 dark:text-white">\r
                                        {{ t(sectionTitleKey(section.id)) }}\r
                                    </h2>\r
                                    <p class="mt-1 text-sm text-stone-500 dark:text-stone-400">\r
                                        {{ t(sectionSubtitleKey(section.id), { count: section.total }) }}\r
                                    </p>\r
                                </div>\r
                            </div>\r
                            <div class="flex flex-wrap items-center gap-2">\r
                                <button\r
                                    mat-stroked-button\r
                                    type="button"\r
                                    class="!rounded-xl"\r
                                    [matMenuTriggerFor]="exportMenu"\r
                                    [disabled]="section.exporting || section.total === 0"\r
                                >\r
                                    @if (section.exporting) {\r
                                        <mat-spinner class="mr-2" diameter="16"></mat-spinner>\r
                                    } @else {\r
                                        <mat-icon class="mr-1 !h-4 !w-4">download</mat-icon>\r
                                    }\r
                                    {{ section.exporting ? t('history.exporting') : t('history.export') }}\r
                                    <mat-icon class="!h-4 !w-4">arrow_drop_down</mat-icon>\r
                                </button>\r
                                <mat-menu #exportMenu="matMenu">\r
                                    <button mat-menu-item type="button" (click)="exportList('xlsx', section.id)">\r
                                        <mat-icon>table_chart</mat-icon>\r
                                        <span>{{ t('history.exportAsExcel') }}</span>\r
                                    </button>\r
                                    <button mat-menu-item type="button" (click)="exportList('csv', section.id)">\r
                                        <mat-icon>description</mat-icon>\r
                                        <span>{{ t('history.exportAsCsv') }}</span>\r
                                    </button>\r
                                    <button mat-menu-item type="button" (click)="exportList('json', section.id)">\r
                                        <mat-icon>data_object</mat-icon>\r
                                        <span>{{ t('history.exportAsJson') }}</span>\r
                                    </button>\r
                                </mat-menu>\r
                                <div class="flex items-center gap-2 rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-500 dark:bg-gray-800 dark:text-gray-400">\r
                                    <span class="h-2 w-2 rounded-full" [class.bg-emerald-400]="!section.loading" [class.bg-amber-400]="section.loading"></span>\r
                                    {{ section.loading ? t('history.table.loading') : t('history.table.live') }}\r
                                </div>\r
                            </div>\r
                        </div>\r
\r
                        <div class="p-5 md:p-6">\r
                            @if (section.loading) {\r
                                <div class="flex flex-col items-center justify-center rounded-xl border border-dashed border-stone-200 py-14 text-center dark:border-gray-800">\r
                                    <mat-spinner diameter="40"></mat-spinner>\r
                                    <p class="mt-4 text-sm text-stone-500 dark:text-stone-400">{{ t('history.table.loading') }}</p>\r
                                </div>\r
                            } @else if (!section.rows.length) {\r
                                <div class="flex flex-col items-center justify-center rounded-xl border border-dashed border-stone-200 px-5 py-14 text-center dark:border-gray-800">\r
                                    <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-stone-100 text-stone-500 dark:bg-gray-800 dark:text-stone-300">\r
                                        <mat-icon>{{ sectionIcon(section.id) }}</mat-icon>\r
                                    </div>\r
                                    <h3 class="mt-4 text-base font-semibold text-stone-950 dark:text-white">\r
                                        {{ t(sectionEmptyTitleKey(section.id)) }}\r
                                    </h3>\r
                                    <p class="mt-1 max-w-sm text-sm text-stone-500 dark:text-stone-400">\r
                                        {{ t(sectionEmptySubtitleKey(section.id)) }}\r
                                    </p>\r
                                </div>\r
                            } @else {\r
                                <div class="overflow-x-auto rounded-xl border border-stone-200/80 dark:border-gray-800">\r
                                    <table mat-table [dataSource]="section.rows" class="w-full min-w-[720px] bg-transparent">\r
                                        <ng-container matColumnDef="status">\r
                                            <th mat-header-cell *matHeaderCellDef class="!border-b !border-stone-200/80 !bg-stone-50/80 !px-4 !py-3 text-xs font-semibold uppercase tracking-[0.12em] text-stone-500 dark:!border-gray-800 dark:!bg-gray-950/50 dark:text-stone-400">\r
                                                {{ t('history.table.status') }}\r
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
                                                {{ t('history.table.service') }}\r
                                            </th>\r
                                            <td mat-cell *matCellDef="let row" class="!px-4 !py-4">\r
                                                <div class="flex flex-col gap-1">\r
                                                    <span class="font-semibold text-stone-950 dark:text-white">{{ featureTitle(row.code) }}</span>\r
                                                    <span class="font-mono text-xs text-stone-500 dark:text-stone-400">{{ row.endpoint || row.project }}</span>\r
                                                </div>\r
                                            </td>\r
                                        </ng-container>\r
\r
                                        <ng-container matColumnDef="document">\r
                                            <th mat-header-cell *matHeaderCellDef class="!border-b !border-stone-200/80 !bg-stone-50/80 !px-4 !py-3 text-xs font-semibold uppercase tracking-[0.12em] text-stone-500 dark:!border-gray-800 dark:!bg-gray-950/50 dark:text-stone-400">\r
                                                {{ t('history.table.document') }}\r
                                            </th>\r
                                            <td mat-cell *matCellDef="let row" class="!px-4 !py-4 font-mono text-sm text-stone-800 dark:text-stone-200">\r
                                                {{ documentLabel(row) }}\r
                                            </td>\r
                                        </ng-container>\r
\r
                                        <ng-container matColumnDef="transactionHash">\r
                                            <th mat-header-cell *matHeaderCellDef class="!border-b !border-stone-200/80 !bg-stone-50/80 !px-4 !py-3 text-xs font-semibold uppercase tracking-[0.12em] text-stone-500 dark:!border-gray-800 dark:!bg-gray-950/50 dark:text-stone-400">\r
                                                {{ t('history.table.txHash') }}\r
                                            </th>\r
                                            <td mat-cell *matCellDef="let row" class="!px-4 !py-4">\r
                                                @if (row.paymentTx) {\r
                                                    <div class="flex items-center gap-1">\r
                                                        <a\r
                                                            [href]="snowtraceUrl + '/tx/' + row.paymentTx"\r
                                                            target="_blank"\r
                                                            rel="noopener noreferrer"\r
                                                            class="font-mono text-xs font-medium text-blue-600 underline-offset-4 hover:underline dark:text-blue-400"\r
                                                        >\r
                                                            {{ shortHash(row.paymentTx) }}\r
                                                        </a>\r
                                                        <button mat-icon-button type="button" class="!h-7 !w-7" (click)="copyText(row.paymentTx); $event.stopPropagation()">\r
                                                            <mat-icon class="icon-size-3">content_copy</mat-icon>\r
                                                        </button>\r
                                                    </div>\r
                                                } @else {\r
                                                    <span class="text-xs text-stone-400">\u2014</span>\r
                                                }\r
                                            </td>\r
                                        </ng-container>\r
\r
                                        <ng-container matColumnDef="amount">\r
                                            <th mat-header-cell *matHeaderCellDef class="!border-b !border-stone-200/80 !bg-stone-50/80 !px-4 !py-3 text-xs font-semibold uppercase tracking-[0.12em] text-stone-500 dark:!border-gray-800 dark:!bg-gray-950/50 dark:text-stone-400">\r
                                                {{ t('history.table.amount') }}\r
                                            </th>\r
                                            <td mat-cell *matCellDef="let row" class="!px-4 !py-4 font-mono text-xs text-emerald-600 dark:text-emerald-400">\r
                                                {{ row.paymentAmount || row.cost || '\u2014' }}\r
                                                <span class="text-stone-400">AVAX</span>\r
                                            </td>\r
                                        </ng-container>\r
\r
                                        <ng-container matColumnDef="date">\r
                                            <th mat-header-cell *matHeaderCellDef class="!border-b !border-stone-200/80 !bg-stone-50/80 !px-4 !py-3 text-xs font-semibold uppercase tracking-[0.12em] text-stone-500 dark:!border-gray-800 dark:!bg-gray-950/50 dark:text-stone-400">\r
                                                {{ t('history.table.date') }}\r
                                            </th>\r
                                            <td mat-cell *matCellDef="let row" class="!px-4 !py-4 text-sm text-stone-600 dark:text-stone-300">\r
                                                {{ formatDate(row.createdAt || row.timestamp) }}\r
                                            </td>\r
                                        </ng-container>\r
\r
                                        <ng-container matColumnDef="cost">\r
                                            <th mat-header-cell *matHeaderCellDef class="!border-b !border-stone-200/80 !bg-stone-50/80 !px-4 !py-3 text-xs font-semibold uppercase tracking-[0.12em] text-stone-500 dark:!border-gray-800 dark:!bg-gray-950/50 dark:text-stone-400">\r
                                                {{ t('history.table.cost') }}\r
                                            </th>\r
                                            <td mat-cell *matCellDef="let row" class="!px-4 !py-4 text-sm font-medium text-stone-700 dark:text-stone-200">\r
                                                <div class="inline-flex flex-col items-start gap-1">\r
                                                    @if (isNotCharged(row)) {\r
                                                        <span>{{ t('history.notCharged') }}</span>\r
                                                        <span class="max-w-56 text-xs font-normal leading-5 text-stone-500 dark:text-stone-400">{{ t('history.notChargedExplanation') }}</span>\r
                                                    } @else {\r
                                                        <span>{{ formatCost(row.cost) }}</span>\r
                                                        @if (hasDynamicQueryBilling(row)) {\r
                                                            <span\r
                                                                class="rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-amber-800 dark:bg-amber-900/40 dark:text-amber-200"\r
                                                                [matTooltip]="t(getDynamicQueryTooltipKey(), getDynamicQueryTooltipParams(row) || {})"\r
                                                            >\r
                                                                {{ t('history.dynamicQuery.badge') }}\r
                                                            </span>\r
                                                        }\r
                                                    }\r
                                                </div>\r
                                            </td>\r
                                        </ng-container>\r
\r
                                        <ng-container matColumnDef="actions">\r
                                            <th mat-header-cell *matHeaderCellDef class="!border-b !border-stone-200/80 !bg-stone-50/80 !px-4 !py-3 text-right text-xs font-semibold uppercase tracking-[0.12em] text-stone-500 dark:!border-gray-800 dark:!bg-gray-950/50 dark:text-stone-400">\r
                                                {{ t('history.table.actions') }}\r
                                            </th>\r
                                            <td mat-cell *matCellDef="let row" class="!px-4 !py-4 text-right">\r
                                                <div class="inline-flex items-center gap-1">\r
                                                    @if (mode() === 'credits') {\r
                                                        <button\r
                                                            mat-icon-button\r
                                                            type="button"\r
                                                            class="!rounded-lg hover:!bg-stone-100 dark:hover:!bg-gray-800"\r
                                                            [matTooltip]="t('history.actions.viewDetails')"\r
                                                            (click)="openDetail(row, $event)"\r
                                                        >\r
                                                            <mat-icon class="!text-stone-600 dark:!text-stone-300">visibility</mat-icon>\r
                                                        </button>\r
                                                    }\r
                                                    <button\r
                                                        mat-icon-button\r
                                                        type="button"\r
                                                        class="!rounded-lg hover:!bg-stone-100 dark:hover:!bg-gray-800"\r
                                                        [disabled]="!canRepeatRequest(row)"\r
                                                        [matTooltip]="canRepeatRequest(row) ? t('history.actions.repeatTooltip') : t('history.actions.repeatUnavailable')"\r
                                                        (click)="repeatRequest(row); $event.stopPropagation()"\r
                                                    >\r
                                                        <mat-icon class="!text-stone-600 dark:!text-stone-300">replay</mat-icon>\r
                                                    </button>\r
                                                    <button\r
                                                        mat-icon-button\r
                                                        type="button"\r
                                                        class="!rounded-lg hover:!bg-stone-100 dark:hover:!bg-gray-800"\r
                                                        [matTooltip]="t('history.openInApi')"\r
                                                        [disabled]="!row.code"\r
                                                        (click)="repeatRequest(row); $event.stopPropagation()"\r
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
                                            [class.cursor-pointer]="mode() === 'credits'"\r
                                            (click)="mode() === 'credits' && openDetail(row)"\r
                                        ></tr>\r
                                    </table>\r
                                </div>\r
\r
                                <div class="mt-4 flex flex-wrap items-center justify-end gap-3">\r
                                    <label class="flex items-center gap-2 text-sm text-stone-500 dark:text-stone-400">\r
                                        <select\r
                                            class="rounded-lg border border-stone-200 bg-white px-2 py-1 text-sm text-stone-800 dark:border-gray-700 dark:bg-gray-900 dark:text-stone-200"\r
                                            [value]="section.pageSize"\r
                                            (change)="onPageSizeChange(section.id, +$any($event.target).value)"\r
                                        >\r
                                            @for (size of pageSizeOptions; track size) {\r
                                                <option [value]="size">{{ size }}</option>\r
                                            }\r
                                        </select>\r
                                    </label>\r
                                    <mat-paginator\r
                                        class="!bg-transparent"\r
                                        [length]="section.total"\r
                                        [pageSize]="section.pageSize"\r
                                        [pageIndex]="section.pageIndex"\r
                                        [hidePageSize]="true"\r
                                        (page)="onPaginatorEvent(section.id, $event)"\r
                                    ></mat-paginator>\r
                                </div>\r
                            }\r
                        </div>\r
                    </div>\r
                    }\r
                </div>\r
            </main>\r
        </div>\r
`, styles: ["/* src/app/modules/history/history.component.scss */\n:host {\n  display: flex;\n  flex: 1 1 auto;\n  min-height: 0;\n  min-width: 0;\n  width: 100%;\n}\n:host mat-icon {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n:host mat-button-toggle-group {\n  border-radius: 0.75rem;\n  overflow: hidden;\n}\n:host .history-date-range .mat-mdc-form-field-infix {\n  min-height: 2.5rem;\n}\n/*# sourceMappingURL=history.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HistoryComponent, { className: "HistoryComponent", filePath: "src/app/modules/history/history.component.ts", lineNumber: 134 });
})();

// src/app/modules/history/history.routes.ts
var history_routes_default = [
  {
    path: "",
    component: HistoryComponent
  }
];
export {
  history_routes_default as default
};
//# sourceMappingURL=chunk-T4LW4R3E.js.map
