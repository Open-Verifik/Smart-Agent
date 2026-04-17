import {
  MatSort,
  MatSortHeader,
  MatSortModule
} from "./chunk-BR6STJR4.js";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatNoDataRow,
  MatRow,
  MatRowDef,
  MatTable,
  MatTableDataSource,
  MatTableModule
} from "./chunk-7XJE6LU4.js";
import {
  MatPaginator,
  MatPaginatorModule
} from "./chunk-RJTDXPAX.js";
import {
  DateTime
} from "./chunk-BAVSUFW7.js";
import {
  AgentWalletService
} from "./chunk-LH4KI4FV.js";
import "./chunk-H3UX3NVF.js";
import {
  MatTooltipModule
} from "./chunk-6KHU2J3U.js";
import "./chunk-WDYBDDAV.js";
import "./chunk-OVR3OJIF.js";
import "./chunk-KCV7S453.js";
import "./chunk-Y5VEUI6L.js";
import {
  ActivatedRoute,
  Router
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
  TranslocoPipe
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
  HttpClient,
  Injectable,
  MatButtonModule,
  MatIconButton,
  NgClass,
  NgForOf,
  NgIf,
  ViewChild,
  ViewEncapsulation,
  catchError,
  effect,
  finalize,
  inject,
  setClassMetadata,
  signal,
  tap,
  throwError,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-YTOBX75K.js";
import "./chunk-KTESVR3Q.js";

// src/app/modules/history/history.service.ts
var HistoryService = class _HistoryService {
  constructor(_httpClient) {
    this._httpClient = _httpClient;
    this.requests = signal([]);
    this.total = signal(0);
    this.loading = signal(false);
    this.error = signal(null);
    this.pageSize = signal(10);
    this.pageIndex = signal(0);
  }
  /**
   * Get API requests history
   * @param page Page number (0-indexed for MatPaginator, but backend might expect 1-indexed)
   * @param limit Number of items per page
   */
  getHistory(page = 1, limit = 10) {
    this.loading.set(true);
    this.error.set(null);
    const apiUrl = environment.apiUrl;
    const queryParams = {
      page: page.toString(),
      limit: limit.toString(),
      sort: "-createdAt"
      // sort by newest first
    };
    const token = localStorage.getItem("accessToken");
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    return this._httpClient.get(`${apiUrl}/v2/api-requests`, {
      params: queryParams,
      headers
    }).pipe(tap((response) => {
      this.requests.set(response.data || []);
      this.total.set(response.total || 0);
    }), catchError((err) => {
      console.error("Error fetching history:", err);
      this.error.set("Failed to load history");
      return throwError(() => err);
    }), finalize(() => {
      this.loading.set(false);
    }));
  }
  /**
   * Get Public API requests history (x402)
   */
  getPublicHistory(wallet, page = 1, limit = 10) {
    this.loading.set(true);
    this.error.set(null);
    const apiUrl = environment.apiUrl;
    const queryParams = {
      wallet,
      page: page.toString(),
      limit: limit.toString(),
      sort: "-createdAt"
    };
    return this._httpClient.get(`${apiUrl}/v2/public/api-requests`, {
      params: queryParams
    }).pipe(tap((response) => {
      this.requests.set(response.data || []);
      this.total.set(response.total || 0);
    }), catchError((err) => {
      console.error("Error fetching public history:", err);
      this.error.set("Failed to load history");
      return throwError(() => err);
    }), finalize(() => {
      this.loading.set(false);
    }));
  }
  static {
    this.\u0275fac = function HistoryService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HistoryService)(\u0275\u0275inject(HttpClient));
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
  }], () => [{ type: HttpClient }], null);
})();

// src/app/modules/history/history.component.ts
var _c0 = () => [5, 10, 25, 100];
function HistoryComponent_th_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 38);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "history.table.status"), " ");
  }
}
function HistoryComponent_td_26_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const request_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r1.getStatusColor(request_r1.statusCode));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r1.getStatusLabel(request_r1.statusCode), " (", request_r1.statusCode, ") ");
  }
}
function HistoryComponent_td_26_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 43);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "history.table.confirmed"), " ");
  }
}
function HistoryComponent_td_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 39);
    \u0275\u0275template(1, HistoryComponent_td_26_span_1_Template, 2, 3, "span", 40)(2, HistoryComponent_td_26_span_2_Template, 3, 3, "span", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const request_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", request_r1.statusCode);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !request_r1.statusCode);
  }
}
function HistoryComponent_th_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 44);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "history.table.service"), " ");
  }
}
function HistoryComponent_td_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 45)(1, "div", 46)(2, "span", 47);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 48);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const request_r3 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(request_r3.endpoint || request_r3.code || request_r3.serviceId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(request_r3.project);
  }
}
function HistoryComponent_th_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 49);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "history.table.parameters"));
  }
}
function HistoryComponent_td_32_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56)(1, "span", 57);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 58);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const param_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", param_r4.key, ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(param_r4.value);
  }
}
function HistoryComponent_td_32_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275template(1, HistoryComponent_td_32_div_4_div_1_Template, 5, 2, "div", 55);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const request_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.formatParams(request_r5.params));
  }
}
function HistoryComponent_td_32_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 59);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "history.table.noParams"));
  }
}
function HistoryComponent_td_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 45)(1, "div", 50)(2, "span", 51);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, HistoryComponent_td_32_div_4_Template, 2, 1, "div", 52)(5, HistoryComponent_td_32_span_5_Template, 3, 3, "span", 53);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const request_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(request_r5.method);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", request_r5.params);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !request_r5.params || ctx_r1.formatParams(request_r5.params).length === 0);
  }
}
function HistoryComponent_th_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 49);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "history.table.requestId"));
  }
}
function HistoryComponent_td_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 60);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const request_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", request_r6.requestId, " ");
  }
}
function HistoryComponent_th_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 49);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "history.table.amount"));
  }
}
function HistoryComponent_td_38_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "span", 63);
    \u0275\u0275text(3, "AVAX");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const request_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", request_r7.paymentAmount || request_r7.cost, " ");
  }
}
function HistoryComponent_td_38_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const request_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" $ ", request_r7.cost, " ");
  }
}
function HistoryComponent_td_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 61);
    \u0275\u0275template(1, HistoryComponent_td_38_ng_container_1_Template, 4, 1, "ng-container", 62)(2, HistoryComponent_td_38_ng_container_2_Template, 2, 1, "ng-container", 62);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.mode() === "x402");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.mode() !== "x402");
  }
}
function HistoryComponent_th_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 49);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "history.table.txHash"));
  }
}
function HistoryComponent_td_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 45)(1, "a", 64);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 65);
    \u0275\u0275listener("click", function HistoryComponent_td_41_Template_button_click_3_listener() {
      const request_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.copyText(request_r9.paymentTx));
    });
    \u0275\u0275elementStart(4, "mat-icon", 66);
    \u0275\u0275text(5, "content_copy");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const request_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("href", ctx_r1.snowtraceUrl + "/tx/" + request_r9.paymentTx, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.shortHash(request_r9.paymentTx), " ");
  }
}
function HistoryComponent_th_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 44);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "history.table.date"), " ");
  }
}
function HistoryComponent_td_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 67);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const request_r10 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatDate(request_r10.createdAt || request_r10.timestamp), " ");
  }
}
function HistoryComponent_th_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 68);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "history.table.duration"), " ");
  }
}
function HistoryComponent_td_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 69);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const request_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatDuration(request_r11.duration), " ");
  }
}
function HistoryComponent_tr_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 70);
  }
}
function HistoryComponent_tr_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 71);
  }
}
function HistoryComponent_tr_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 72)(2, "div", 73);
    \u0275\u0275element(3, "mat-icon", 74);
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", ctx_r1.displayedColumns.length);
    \u0275\u0275advance(2);
    \u0275\u0275property("svgIcon", "heroicons_outline:clipboard-document-list");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 3, "history.table.noRequests"));
  }
}
var HistoryComponent = class _HistoryComponent {
  constructor() {
    this.displayedColumns = ["status", "service", "parameters", "date", "duration"];
    this.dataSource = new MatTableDataSource([]);
    this._historyService = inject(HistoryService);
    this._walletService = inject(AgentWalletService);
    this._router = inject(Router);
    this._route = inject(ActivatedRoute);
    this.mode = signal("credits");
    this.requests = this._historyService.requests;
    this.total = this._historyService.total;
    this.loading = this._historyService.loading;
    this.pageSize = this._historyService.pageSize;
    this.pageIndex = this._historyService.pageIndex;
    effect(() => {
      const allRequests = this.requests();
      if (this.mode() === "credits") {
        this.dataSource.data = allRequests;
        this.displayedColumns = ["status", "service", "parameters", "date", "duration"];
      } else {
        this.dataSource.data = allRequests;
        this.displayedColumns = ["service", "transactionHash", "amount", "date"];
      }
    });
  }
  ngOnInit() {
    this._route.queryParams.subscribe((params) => {
      const view = params["view"];
      const targetMode = view === "x402" ? "x402" : "credits";
      if (this.mode() !== targetMode) {
        this.pageIndex.set(0);
        this.mode.set(targetMode);
      }
      this.loadData();
    });
  }
  setMode(mode) {
    this._router.navigate([], {
      relativeTo: this._route,
      queryParams: { view: mode === "x402" ? "x402" : null },
      queryParamsHandling: "merge"
    });
  }
  loadData() {
    if (this.mode() === "credits") {
      this._historyService.getHistory(this.pageIndex() + 1, this.pageSize()).subscribe();
    } else {
      const wallet = this._walletService.getAddress();
      if (wallet) {
        this._historyService.getPublicHistory(wallet, this.pageIndex() + 1, this.pageSize()).subscribe();
      }
    }
  }
  onPaginatorEvent(event) {
    this.pageIndex.set(event.pageIndex);
    this.pageSize.set(event.pageSize);
    this.loadData();
  }
  /**
   * Copy text helper
   */
  copyText(text) {
    navigator.clipboard.writeText(text);
  }
  shortHash(hash) {
    if (!hash)
      return "";
    return `${hash.substring(0, 6)}...${hash.substring(hash.length - 4)}`;
  }
  /**
   * Format date using Luxon
   */
  formatDate(date) {
    if (!date)
      return "-";
    if (typeof date === "number") {
      return DateTime.fromMillis(date).toFormat("MMM dd, yyyy HH:mm:ss");
    }
    return DateTime.fromISO(date).toFormat("MMM dd, yyyy HH:mm:ss");
  }
  /**
   * Get status color class
   */
  getStatusColor(statusCode) {
    if (statusCode >= 200 && statusCode < 300)
      return "text-green-600 bg-green-100 dark:bg-green-900/30 dark:text-green-400";
    if (statusCode === 404)
      return "text-orange-600 bg-orange-100 dark:bg-orange-900/30 dark:text-orange-400";
    return "text-red-600 bg-red-100 dark:bg-red-900/30 dark:text-red-400";
  }
  /**
   * Get status label
   */
  getStatusLabel(statusCode) {
    if (statusCode >= 200 && statusCode < 300)
      return "Success";
    if (statusCode === 404)
      return "Not Found";
    return "Failed";
  }
  /**
   * Format duration
   */
  formatDuration(ms) {
    if (!ms && ms !== 0)
      return "-";
    if (ms < 1e3)
      return `${ms}ms`;
    return `${(ms / 1e3).toFixed(2)}s`;
  }
  /**
   * Format parameters for display
   */
  formatParams(params) {
    if (!params || typeof params !== "object")
      return [];
    const filteredParams = Object.keys(params).filter((key) => !key.startsWith("_")).map((key) => ({ key, value: params[key] }));
    return filteredParams;
  }
  /**
   * Get the appropriate Snowtrace URL based on environment
   */
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HistoryComponent, selectors: [["history"]], viewQuery: function HistoryComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(MatPaginator, 5);
        \u0275\u0275viewQuery(MatSort, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.paginator = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sort = _t.first);
      }
    }, decls: 52, vars: 36, consts: [[1, "flex", "flex-col", "flex-auto", "min-w-0"], [1, "flex", "flex-col", "sm:flex-row", "flex-0", "sm:items-center", "sm:justify-between", "p-6", "sm:py-8", "sm:px-10", "border-b", "bg-card", "dark:bg-transparent"], [1, "flex-1", "min-w-0"], [1, "flex", "flex-wrap", "items-center", "font-medium", "text-xs", "text-secondary", "leading-none"], [1, "cursor-pointer", "text-primary-500", "hover:underline"], [1, "icon-size-4", "mx-2", "text-secondary", 3, "svgIcon"], [1, "cursor-default"], [1, "mt-2", "flex", "items-center", "justify-between"], [1, "text-3xl", "md:text-4xl", "font-extrabold", "tracking-tight", "leading-7", "sm:leading-10", "truncate"], [1, "flex", "items-center", "bg-white", "dark:bg-slate-800", "rounded-lg", "border", "border-slate-200", "dark:border-slate-700", "p-0.5", "ml-4"], [1, "px-3", "py-1.5", "rounded-md", "transition-all", "text-xs", "font-medium", 3, "click"], [1, "w-px", "h-4", "bg-slate-200", "dark:bg-slate-700", "mx-0.5"], [1, "flex", "flex-col", "flex-auto", "p-6", "sm:p-10"], [1, "flex", "flex-col", "bg-card", "shadow", "overflow-hidden", "rounded-2xl", "w-full"], [1, "overflow-x-auto"], ["mat-table", "", "matSort", "", 1, "w-full", "bg-transparent", 3, "dataSource"], ["matColumnDef", "status"], ["mat-header-cell", "", "mat-sort-header", "", "class", "pl-6", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "pl-6 py-4", 4, "matCellDef"], ["matColumnDef", "service"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "py-4", 4, "matCellDef"], ["matColumnDef", "parameters"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "requestId"], ["mat-cell", "", "class", "py-4 font-mono text-xs", 4, "matCellDef"], ["matColumnDef", "amount"], ["mat-cell", "", "class", "py-4 font-mono text-xs text-green-600", 4, "matCellDef"], ["matColumnDef", "transactionHash"], ["matColumnDef", "date"], ["mat-cell", "", "class", "py-4 whitespace-nowrap text-secondary", 4, "matCellDef"], ["matColumnDef", "duration"], ["mat-header-cell", "", "mat-sort-header", "", "class", "pr-6", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "pr-6 py-4 text-secondary text-right", 4, "matCellDef"], ["mat-header-row", "", "class", "h-12 text-xs font-semibold uppercase text-secondary bg-gray-50 dark:bg-black dark:bg-opacity-5", 4, "matHeaderRowDef"], ["mat-row", "", "class", "hover:bg-gray-50 dark:hover:bg-black dark:hover:bg-opacity-5 transition-colors cursor-default", 4, "matRowDef", "matRowDefColumns"], [4, "matNoDataRow"], ["aria-label", "Select page of requests", 1, "border-t", 3, "page", "length", "pageSize", "pageIndex", "pageSizeOptions", "showFirstLastButtons"], ["mat-header-cell", "", "mat-sort-header", "", 1, "pl-6"], ["mat-cell", "", 1, "pl-6", "py-4"], ["class", "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium", 3, "ngClass", 4, "ngIf"], ["class", "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-green-600 bg-green-100 dark:bg-green-900/30 dark:text-green-400", 4, "ngIf"], [1, "inline-flex", "items-center", "px-2.5", "py-0.5", "rounded-full", "text-xs", "font-medium", 3, "ngClass"], [1, "inline-flex", "items-center", "px-2.5", "py-0.5", "rounded-full", "text-xs", "font-medium", "text-green-600", "bg-green-100", "dark:bg-green-900/30", "dark:text-green-400"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", "", 1, "py-4"], [1, "flex", "flex-col"], [1, "font-medium", "text-slate-900", "dark:text-slate-100"], [1, "text-xs", "text-secondary", "mt-1"], ["mat-header-cell", ""], [1, "flex", "flex-col", "gap-1"], [1, "font-mono", "text-xs", "bg-slate-100", "dark:bg-slate-800", "px-1.5", "py-0.5", "rounded", "inline-block", "w-fit"], ["class", "flex flex-col gap-0.5 mt-1", 4, "ngIf"], ["class", "text-xs text-secondary italic", 4, "ngIf"], [1, "flex", "flex-col", "gap-0.5", "mt-1"], ["class", "text-xs text-secondary", 4, "ngFor", "ngForOf"], [1, "text-xs", "text-secondary"], [1, "font-medium", "text-slate-700", "dark:text-slate-300"], [1, "ml-1"], [1, "text-xs", "text-secondary", "italic"], ["mat-cell", "", 1, "py-4", "font-mono", "text-xs"], ["mat-cell", "", 1, "py-4", "font-mono", "text-xs", "text-green-600"], [4, "ngIf"], [1, "text-xs", "text-gray-500"], ["target", "_blank", 1, "text-blue-500", "hover:underline", "font-mono", "text-xs", 3, "href"], ["mat-icon-button", "", 1, "ml-1", "w-6", "h-6", 3, "click"], [1, "icon-size-3"], ["mat-cell", "", 1, "py-4", "whitespace-nowrap", "text-secondary"], ["mat-header-cell", "", "mat-sort-header", "", 1, "pr-6"], ["mat-cell", "", 1, "pr-6", "py-4", "text-secondary", "text-right"], ["mat-header-row", "", 1, "h-12", "text-xs", "font-semibold", "uppercase", "text-secondary", "bg-gray-50", "dark:bg-black", "dark:bg-opacity-5"], ["mat-row", "", 1, "hover:bg-gray-50", "dark:hover:bg-black", "dark:hover:bg-opacity-5", "transition-colors", "cursor-default"], [1, "p-8", "text-center", "text-secondary", "text-lg"], [1, "flex", "flex-col", "items-center", "justify-center"], [1, "icon-size-12", "mb-4", "text-hint", 3, "svgIcon"]], template: function HistoryComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "a", 4);
        \u0275\u0275text(5, "Verifik");
        \u0275\u0275elementEnd();
        \u0275\u0275element(6, "mat-icon", 5);
        \u0275\u0275elementStart(7, "span", 6);
        \u0275\u0275text(8);
        \u0275\u0275pipe(9, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "div", 7)(11, "h2", 8);
        \u0275\u0275text(12);
        \u0275\u0275pipe(13, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 9)(15, "button", 10);
        \u0275\u0275listener("click", function HistoryComponent_Template_button_click_15_listener() {
          return ctx.setMode("credits");
        });
        \u0275\u0275text(16, " CREDITS ");
        \u0275\u0275elementEnd();
        \u0275\u0275element(17, "div", 11);
        \u0275\u0275elementStart(18, "button", 10);
        \u0275\u0275listener("click", function HistoryComponent_Template_button_click_18_listener() {
          return ctx.setMode("x402");
        });
        \u0275\u0275text(19, " x402 ");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(20, "div", 12)(21, "div", 13)(22, "div", 14)(23, "table", 15);
        \u0275\u0275elementContainerStart(24, 16);
        \u0275\u0275template(25, HistoryComponent_th_25_Template, 3, 3, "th", 17)(26, HistoryComponent_td_26_Template, 3, 2, "td", 18);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(27, 19);
        \u0275\u0275template(28, HistoryComponent_th_28_Template, 3, 3, "th", 20)(29, HistoryComponent_td_29_Template, 6, 2, "td", 21);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(30, 22);
        \u0275\u0275template(31, HistoryComponent_th_31_Template, 3, 3, "th", 23)(32, HistoryComponent_td_32_Template, 6, 3, "td", 21);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(33, 24);
        \u0275\u0275template(34, HistoryComponent_th_34_Template, 3, 3, "th", 23)(35, HistoryComponent_td_35_Template, 2, 1, "td", 25);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(36, 26);
        \u0275\u0275template(37, HistoryComponent_th_37_Template, 3, 3, "th", 23)(38, HistoryComponent_td_38_Template, 3, 2, "td", 27);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(39, 28);
        \u0275\u0275template(40, HistoryComponent_th_40_Template, 3, 3, "th", 23)(41, HistoryComponent_td_41_Template, 6, 2, "td", 21);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(42, 29);
        \u0275\u0275template(43, HistoryComponent_th_43_Template, 3, 3, "th", 20)(44, HistoryComponent_td_44_Template, 2, 1, "td", 30);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(45, 31);
        \u0275\u0275template(46, HistoryComponent_th_46_Template, 3, 3, "th", 32)(47, HistoryComponent_td_47_Template, 2, 1, "td", 33);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275template(48, HistoryComponent_tr_48_Template, 1, 0, "tr", 34)(49, HistoryComponent_tr_49_Template, 1, 0, "tr", 35)(50, HistoryComponent_tr_50_Template, 7, 5, "tr", 36);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(51, "mat-paginator", 37);
        \u0275\u0275listener("page", function HistoryComponent_Template_mat_paginator_page_51_listener($event) {
          return ctx.onPaginatorEvent($event);
        });
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275property("svgIcon", "heroicons_solid:chevron-right");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 31, "nav.history"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 33, "history.title"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275classProp("bg-slate-100", ctx.mode() === "credits")("text-slate-900", ctx.mode() === "credits")("dark:bg-slate-700", ctx.mode() === "credits")("dark:text-white", ctx.mode() === "credits")("text-slate-500", ctx.mode() !== "credits");
        \u0275\u0275advance(3);
        \u0275\u0275classProp("bg-slate-100", ctx.mode() === "x402")("text-slate-900", ctx.mode() === "x402")("dark:bg-slate-700", ctx.mode() === "x402")("dark:text-white", ctx.mode() === "x402")("text-slate-500", ctx.mode() !== "x402");
        \u0275\u0275advance(5);
        \u0275\u0275property("dataSource", ctx.dataSource);
        \u0275\u0275advance(25);
        \u0275\u0275property("matHeaderRowDef", ctx.displayedColumns);
        \u0275\u0275advance();
        \u0275\u0275property("matRowDefColumns", ctx.displayedColumns);
        \u0275\u0275advance(2);
        \u0275\u0275property("length", ctx.total())("pageSize", ctx.pageSize())("pageIndex", ctx.pageIndex())("pageSizeOptions", \u0275\u0275pureFunction0(35, _c0))("showFirstLastButtons", true);
      }
    }, dependencies: [
      CommonModule,
      NgClass,
      NgForOf,
      NgIf,
      MatButtonModule,
      MatIconButton,
      MatIconModule,
      MatIcon,
      MatPaginatorModule,
      MatPaginator,
      MatSortModule,
      MatSort,
      MatSortHeader,
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
      MatNoDataRow,
      MatTooltipModule,
      TranslocoModule,
      TranslocoPipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HistoryComponent, [{
    type: Component,
    args: [{ selector: "history", standalone: true, imports: [
      CommonModule,
      MatButtonModule,
      MatIconModule,
      MatPaginatorModule,
      MatSortModule,
      MatTableModule,
      MatTooltipModule,
      TranslocoModule
    ], encapsulation: ViewEncapsulation.None, template: `<div class="flex flex-col flex-auto min-w-0">
  <!-- Header -->
  <div
    class="flex flex-col sm:flex-row flex-0 sm:items-center sm:justify-between p-6 sm:py-8 sm:px-10 border-b bg-card dark:bg-transparent"
  >
    <div class="flex-1 min-w-0">
      <!-- Breadcrumbs -->
      <div class="flex flex-wrap items-center font-medium text-xs text-secondary leading-none">
        <a class="cursor-pointer text-primary-500 hover:underline">Verifik</a>
        <mat-icon
          class="icon-size-4 mx-2 text-secondary"
          [svgIcon]="'heroicons_solid:chevron-right'"
        ></mat-icon>
        <span class="cursor-default">{{ 'nav.history' | transloco }}</span>
      </div>
      <!-- Title -->
      <div class="mt-2 flex items-center justify-between">
        <h2
          class="text-3xl md:text-4xl font-extrabold tracking-tight leading-7 sm:leading-10 truncate"
        >
          {{ 'history.title' | transloco }}
        </h2>

        <!-- Toggle -->
        <div
          class="flex items-center bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-0.5 ml-4"
        >
          <button
            class="px-3 py-1.5 rounded-md transition-all text-xs font-medium"
            [class.bg-slate-100]="mode() === 'credits'"
            [class.text-slate-900]="mode() === 'credits'"
            [class.dark:bg-slate-700]="mode() === 'credits'"
            [class.dark:text-white]="mode() === 'credits'"
            [class.text-slate-500]="mode() !== 'credits'"
            (click)="setMode('credits')"
          >
            CREDITS
          </button>
          <div class="w-px h-4 bg-slate-200 dark:bg-slate-700 mx-0.5"></div>
          <button
            class="px-3 py-1.5 rounded-md transition-all text-xs font-medium"
            [class.bg-slate-100]="mode() === 'x402'"
            [class.text-slate-900]="mode() === 'x402'"
            [class.dark:bg-slate-700]="mode() === 'x402'"
            [class.dark:text-white]="mode() === 'x402'"
            [class.text-slate-500]="mode() !== 'x402'"
            (click)="setMode('x402')"
          >
            x402
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Main Content -->
  <div class="flex flex-col flex-auto p-6 sm:p-10">
    <div class="flex flex-col bg-card shadow overflow-hidden rounded-2xl w-full">
      <div class="overflow-x-auto">
        <table mat-table [dataSource]="dataSource" class="w-full bg-transparent" matSort>
          <!-- Status Column -->
          <ng-container matColumnDef="status">
            <th mat-header-cell *matHeaderCellDef mat-sort-header class="pl-6">
              {{ 'history.table.status' | transloco }}
            </th>
            <td mat-cell *matCellDef="let request" class="pl-6 py-4">
              <span
                class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
                [ngClass]="getStatusColor(request.statusCode)"
                *ngIf="request.statusCode"
              >
                {{ getStatusLabel(request.statusCode) }} ({{ request.statusCode }})
              </span>
              <span
                class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-green-600 bg-green-100 dark:bg-green-900/30 dark:text-green-400"
                *ngIf="!request.statusCode"
              >
                {{ 'history.table.confirmed' | transloco }}
              </span>
            </td>
          </ng-container>

          <!-- Service Column -->
          <ng-container matColumnDef="service">
            <th mat-header-cell *matHeaderCellDef mat-sort-header>
              {{ 'history.table.service' | transloco }}
            </th>
            <td mat-cell *matCellDef="let request" class="py-4">
              <div class="flex flex-col">
                <span class="font-medium text-slate-900 dark:text-slate-100">{{
                  request.endpoint || request.code || request.serviceId
                }}</span>
                <span class="text-xs text-secondary mt-1">{{ request.project }}</span>
              </div>
            </td>
          </ng-container>

          <!-- Parameters Column -->
          <ng-container matColumnDef="parameters">
            <th mat-header-cell *matHeaderCellDef>{{ 'history.table.parameters' | transloco }}</th>
            <td mat-cell *matCellDef="let request" class="py-4">
              <div class="flex flex-col gap-1">
                <span
                  class="font-mono text-xs bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded inline-block w-fit"
                  >{{ request.method }}</span
                >
                <div class="flex flex-col gap-0.5 mt-1" *ngIf="request.params">
                  <div
                    *ngFor="let param of formatParams(request.params)"
                    class="text-xs text-secondary"
                  >
                    <span class="font-medium text-slate-700 dark:text-slate-300"
                      >{{ param.key }}:</span
                    >
                    <span class="ml-1">{{ param.value }}</span>
                  </div>
                </div>
                <span
                  *ngIf="!request.params || formatParams(request.params).length === 0"
                  class="text-xs text-secondary italic"
                  >{{ 'history.table.noParams' | transloco }}</span
                >
              </div>
            </td>
          </ng-container>

          <!-- RequestID Column (x402) -->
          <ng-container matColumnDef="requestId">
            <th mat-header-cell *matHeaderCellDef>{{ 'history.table.requestId' | transloco }}</th>
            <td mat-cell *matCellDef="let request" class="py-4 font-mono text-xs">
              {{ request.requestId }}
            </td>
          </ng-container>

          <!-- Amount Column (x402) -->
          <ng-container matColumnDef="amount">
            <th mat-header-cell *matHeaderCellDef>{{ 'history.table.amount' | transloco }}</th>
            <td mat-cell *matCellDef="let request" class="py-4 font-mono text-xs text-green-600">
              <ng-container *ngIf="mode() === 'x402'">
                {{ request.paymentAmount || request.cost }}
                <span class="text-xs text-gray-500">AVAX</span>
              </ng-container>
              <ng-container *ngIf="mode() !== 'x402'"> $ {{ request.cost }} </ng-container>
            </td>
          </ng-container>

          <!-- Transaction Hash Column (x402) -->
          <ng-container matColumnDef="transactionHash">
            <th mat-header-cell *matHeaderCellDef>{{ 'history.table.txHash' | transloco }}</th>
            <td mat-cell *matCellDef="let request" class="py-4">
              <a
                [href]="snowtraceUrl + '/tx/' + request.paymentTx"
                target="_blank"
                class="text-blue-500 hover:underline font-mono text-xs"
              >
                {{ shortHash(request.paymentTx) }}
              </a>
              <button mat-icon-button (click)="copyText(request.paymentTx)" class="ml-1 w-6 h-6">
                <mat-icon class="icon-size-3">content_copy</mat-icon>
              </button>
            </td>
          </ng-container>

          <!-- Date Column -->
          <ng-container matColumnDef="date">
            <th mat-header-cell *matHeaderCellDef mat-sort-header>
              {{ 'history.table.date' | transloco }}
            </th>
            <td mat-cell *matCellDef="let request" class="py-4 whitespace-nowrap text-secondary">
              {{ formatDate(request.createdAt || request.timestamp) }}
            </td>
          </ng-container>

          <!-- Duration Column -->
          <ng-container matColumnDef="duration">
            <th mat-header-cell *matHeaderCellDef mat-sort-header class="pr-6">
              {{ 'history.table.duration' | transloco }}
            </th>
            <td mat-cell *matCellDef="let request" class="pr-6 py-4 text-secondary text-right">
              {{ formatDuration(request.duration) }}
            </td>
          </ng-container>

          <tr
            mat-header-row
            *matHeaderRowDef="displayedColumns"
            class="h-12 text-xs font-semibold uppercase text-secondary bg-gray-50 dark:bg-black dark:bg-opacity-5"
          ></tr>
          <tr
            mat-row
            *matRowDef="let row; columns: displayedColumns"
            class="hover:bg-gray-50 dark:hover:bg-black dark:hover:bg-opacity-5 transition-colors cursor-default"
          ></tr>

          <!-- No Data -->
          <tr *matNoDataRow>
            <td
              [attr.colspan]="displayedColumns.length"
              class="p-8 text-center text-secondary text-lg"
            >
              <div class="flex flex-col items-center justify-center">
                <mat-icon
                  class="icon-size-12 mb-4 text-hint"
                  [svgIcon]="'heroicons_outline:clipboard-document-list'"
                ></mat-icon>
                <span>{{ 'history.table.noRequests' | transloco }}</span>
              </div>
            </td>
          </tr>
        </table>
      </div>

      <!-- Paginator -->
      <mat-paginator
        class="border-t"
        [length]="total()"
        [pageSize]="pageSize()"
        [pageIndex]="pageIndex()"
        [pageSizeOptions]="[5, 10, 25, 100]"
        [showFirstLastButtons]="true"
        (page)="onPaginatorEvent($event)"
        aria-label="Select page of requests"
      >
      </mat-paginator>
    </div>
  </div>
</div>
` }]
  }], () => [], { paginator: [{
    type: ViewChild,
    args: [MatPaginator]
  }], sort: [{
    type: ViewChild,
    args: [MatSort]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HistoryComponent, { className: "HistoryComponent", filePath: "src/app/modules/history/history.component.ts", lineNumber: 40 });
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
//# sourceMappingURL=chunk-KLFG776B.js.map
