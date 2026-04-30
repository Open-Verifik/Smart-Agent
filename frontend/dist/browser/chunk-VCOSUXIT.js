import {
  MatSort,
  MatSortHeader,
  MatSortModule
} from "./chunk-DCGQVNL5.js";
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
} from "./chunk-O62F2O7Q.js";
import {
  MatPaginator,
  MatPaginatorModule
} from "./chunk-DBYYWGBF.js";
import {
  DateTime
} from "./chunk-BAVSUFW7.js";
import {
  POSTMAN_HISTORY_PREFILL_STORAGE_KEY
} from "./chunk-VSNTZOG6.js";
import {
  AgentWalletService
} from "./chunk-ULE3T2JG.js";
import "./chunk-H3UX3NVF.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-FD5UKZMK.js";
import "./chunk-WDYBDDAV.js";
import "./chunk-C35Z3CDX.js";
import "./chunk-P2CAABEU.js";
import "./chunk-Y5VEUI6L.js";
import {
  ActivatedRoute,
  Router,
  RouterLink
} from "./chunk-NLVEQCVI.js";
import "./chunk-LTHY76JY.js";
import "./chunk-AY5C2ZOO.js";
import "./chunk-RNRTLQ3J.js";
import "./chunk-6OJR6OMX.js";
import "./chunk-S7CME3IL.js";
import "./chunk-OIBNGD5S.js";
import {
  TranslocoDirective,
  TranslocoModule
} from "./chunk-KU43NSH4.js";
import "./chunk-VK5CCBZ3.js";
import {
  environment
} from "./chunk-BIHX2IQ4.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-HZQU4G6R.js";
import {
  CommonModule,
  Component,
  HttpClient,
  Injectable,
  MatButton,
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
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-LLRZIRCV.js";
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
var _c0 = (a0) => ({ count: a0 });
var _c1 = () => [5, 10, 25, 100];
function HistoryComponent_ng_container_0_th_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 47);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r3("history.table.status"), " ");
  }
}
function HistoryComponent_ng_container_0_td_37_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 51)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 52);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const request_r4 = \u0275\u0275nextContext().$implicit;
    const t_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r1.getStatusColor(request_r4.statusCode));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3(ctx_r1.getStatusLabelKey(request_r4.statusCode)));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("(", request_r4.statusCode, ")");
  }
}
function HistoryComponent_ng_container_0_td_37_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 53);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r3("history.table.confirmed"), " ");
  }
}
function HistoryComponent_ng_container_0_td_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 48);
    \u0275\u0275template(1, HistoryComponent_ng_container_0_td_37_span_1_Template, 5, 3, "span", 49)(2, HistoryComponent_ng_container_0_td_37_span_2_Template, 2, 1, "span", 50);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const request_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", request_r4.statusCode);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !request_r4.statusCode);
  }
}
function HistoryComponent_ng_container_0_th_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 54);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r3("history.table.service"), " ");
  }
}
function HistoryComponent_ng_container_0_td_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 55)(1, "div", 56)(2, "span", 57);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 58);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const request_r5 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", request_r5.endpoint || request_r5.code || request_r5.serviceId, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", request_r5.code || request_r5.project || request_r5.serviceId, " ");
  }
}
function HistoryComponent_ng_container_0_th_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 59);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r3("history.table.parameters"));
  }
}
function HistoryComponent_ng_container_0_td_43_div_4_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 66)(1, "span", 67);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const param_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("matTooltip", param_r6.key + ": " + ctx_r1.formatParamValue(param_r6.value));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", param_r6.key, ":");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatParamValue(param_r6.value), " ");
  }
}
function HistoryComponent_ng_container_0_td_43_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64);
    \u0275\u0275template(1, HistoryComponent_ng_container_0_td_43_div_4_span_1_Template, 4, 3, "span", 65);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const request_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.formatParams(request_r7.params));
  }
}
function HistoryComponent_ng_container_0_td_43_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 68);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r3("history.table.noParams"), " ");
  }
}
function HistoryComponent_ng_container_0_td_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 55)(1, "div", 60)(2, "span", 61);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, HistoryComponent_ng_container_0_td_43_div_4_Template, 2, 1, "div", 62)(5, HistoryComponent_ng_container_0_td_43_span_5_Template, 2, 1, "span", 63);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const request_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", request_r7.method || "GET", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.formatParams(request_r7.params).length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.formatParams(request_r7.params).length === 0);
  }
}
function HistoryComponent_ng_container_0_th_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 59);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r3("history.table.amount"));
  }
}
function HistoryComponent_ng_container_0_td_46_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "span", 71);
    \u0275\u0275text(3, "AVAX");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const request_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", request_r8.paymentAmount || request_r8.cost || "-", " ");
  }
}
function HistoryComponent_ng_container_0_td_46_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const request_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" $ ", request_r8.cost || 0, " ");
  }
}
function HistoryComponent_ng_container_0_td_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 69);
    \u0275\u0275template(1, HistoryComponent_ng_container_0_td_46_ng_container_1_Template, 4, 1, "ng-container", 70)(2, HistoryComponent_ng_container_0_td_46_ng_container_2_Template, 2, 1, "ng-container", 70);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.mode() === "x402");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.mode() !== "x402");
  }
}
function HistoryComponent_ng_container_0_th_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 59);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r3("history.table.txHash"));
  }
}
function HistoryComponent_ng_container_0_td_49_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 73)(1, "a", 74);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 75);
    \u0275\u0275listener("click", function HistoryComponent_ng_container_0_td_49_div_1_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r9);
      const request_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.copyText(request_r10.paymentTx));
    });
    \u0275\u0275elementStart(4, "mat-icon", 76);
    \u0275\u0275text(5, "content_copy");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const request_r10 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("href", ctx_r1.snowtraceUrl + "/tx/" + request_r10.paymentTx, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.shortHash(request_r10.paymentTx), " ");
  }
}
function HistoryComponent_ng_container_0_td_49_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 77);
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function HistoryComponent_ng_container_0_td_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 55);
    \u0275\u0275template(1, HistoryComponent_ng_container_0_td_49_div_1_Template, 6, 2, "div", 72)(2, HistoryComponent_ng_container_0_td_49_ng_template_2_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const request_r10 = ctx.$implicit;
    const noTransaction_r11 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", request_r10.paymentTx)("ngIfElse", noTransaction_r11);
  }
}
function HistoryComponent_ng_container_0_th_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 54);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r3("history.table.date"), " ");
  }
}
function HistoryComponent_ng_container_0_td_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 78);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const request_r12 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatDate(request_r12.createdAt || request_r12.timestamp), " ");
  }
}
function HistoryComponent_ng_container_0_th_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 54);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r3("history.table.cost"), " ");
  }
}
function HistoryComponent_ng_container_0_td_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 79)(1, "span", 80);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const request_r13 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatCost(request_r13.cost), " ");
  }
}
function HistoryComponent_ng_container_0_th_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 81);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r3("history.table.actions"), " ");
  }
}
function HistoryComponent_ng_container_0_td_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 82)(1, "button", 83);
    \u0275\u0275listener("click", function HistoryComponent_ng_container_0_td_58_Template_button_click_1_listener() {
      const request_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.repeatRequest(request_r15));
    });
    \u0275\u0275elementStart(2, "mat-icon", 84);
    \u0275\u0275text(3, "replay");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const request_r15 = ctx.$implicit;
    const t_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.canRepeatRequest(request_r15))("matTooltip", ctx_r1.canRepeatRequest(request_r15) ? t_r3("history.actions.repeatTooltip") : t_r3("history.actions.repeatUnavailable"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r3("history.actions.repeat"), " ");
  }
}
function HistoryComponent_ng_container_0_tr_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 85);
  }
}
function HistoryComponent_ng_container_0_tr_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 86);
  }
}
function HistoryComponent_ng_container_0_tr_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 87)(2, "div", 88)(3, "div", 89);
    \u0275\u0275element(4, "mat-icon", 90);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 91);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", ctx_r1.displayedColumns.length);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(t_r3("history.table.noRequests"));
  }
}
function HistoryComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 2)(2, "header", 3)(3, "div", 4)(4, "div", 5)(5, "a", 6);
    \u0275\u0275text(6, " Verifik ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "mat-icon", 7);
    \u0275\u0275elementStart(8, "span", 8);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 9)(11, "div", 10)(12, "h1", 11);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p", 12);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 13)(17, "button", 14);
    \u0275\u0275listener("click", function HistoryComponent_ng_container_0_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setMode("credits"));
    });
    \u0275\u0275text(18, " CREDITS ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 14);
    \u0275\u0275listener("click", function HistoryComponent_ng_container_0_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setMode("x402"));
    });
    \u0275\u0275text(20, " x402 ");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(21, "main", 15)(22, "div", 16)(23, "div", 17)(24, "div", 18)(25, "div")(26, "p", 19);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "p", 20);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 21);
    \u0275\u0275element(31, "span", 22);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 23)(34, "table", 24);
    \u0275\u0275elementContainerStart(35, 25);
    \u0275\u0275template(36, HistoryComponent_ng_container_0_th_36_Template, 2, 1, "th", 26)(37, HistoryComponent_ng_container_0_td_37_Template, 3, 2, "td", 27);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(38, 28);
    \u0275\u0275template(39, HistoryComponent_ng_container_0_th_39_Template, 2, 1, "th", 29)(40, HistoryComponent_ng_container_0_td_40_Template, 6, 2, "td", 30);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(41, 31);
    \u0275\u0275template(42, HistoryComponent_ng_container_0_th_42_Template, 2, 1, "th", 32)(43, HistoryComponent_ng_container_0_td_43_Template, 6, 3, "td", 30);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(44, 33);
    \u0275\u0275template(45, HistoryComponent_ng_container_0_th_45_Template, 2, 1, "th", 32)(46, HistoryComponent_ng_container_0_td_46_Template, 3, 2, "td", 34);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(47, 35);
    \u0275\u0275template(48, HistoryComponent_ng_container_0_th_48_Template, 2, 1, "th", 32)(49, HistoryComponent_ng_container_0_td_49_Template, 4, 2, "td", 30);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(50, 36);
    \u0275\u0275template(51, HistoryComponent_ng_container_0_th_51_Template, 2, 1, "th", 29)(52, HistoryComponent_ng_container_0_td_52_Template, 2, 1, "td", 37);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(53, 38);
    \u0275\u0275template(54, HistoryComponent_ng_container_0_th_54_Template, 2, 1, "th", 29)(55, HistoryComponent_ng_container_0_td_55_Template, 3, 1, "td", 39);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(56, 40);
    \u0275\u0275template(57, HistoryComponent_ng_container_0_th_57_Template, 2, 1, "th", 41)(58, HistoryComponent_ng_container_0_td_58_Template, 5, 3, "td", 42);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(59, HistoryComponent_ng_container_0_tr_59_Template, 1, 0, "tr", 43)(60, HistoryComponent_ng_container_0_tr_60_Template, 1, 0, "tr", 44)(61, HistoryComponent_ng_container_0_tr_61_Template, 7, 2, "tr", 45);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(62, "mat-paginator", 46);
    \u0275\u0275listener("page", function HistoryComponent_ng_container_0_Template_mat_paginator_page_62_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPaginatorEvent($event));
    });
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(t_r3("nav.history"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r3("history.title"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r3("history.subtitle"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-stone-950", ctx_r1.mode() === "credits")("text-white", ctx_r1.mode() === "credits")("text-stone-500", ctx_r1.mode() !== "credits")("hover:text-stone-900", ctx_r1.mode() !== "credits")("dark:bg-white", ctx_r1.mode() === "credits")("dark:text-gray-950", ctx_r1.mode() === "credits")("dark:text-gray-400", ctx_r1.mode() !== "credits")("dark:hover:text-white", ctx_r1.mode() !== "credits");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-stone-950", ctx_r1.mode() === "x402")("text-white", ctx_r1.mode() === "x402")("text-stone-500", ctx_r1.mode() !== "x402")("hover:text-stone-900", ctx_r1.mode() !== "x402")("dark:bg-white", ctx_r1.mode() === "x402")("dark:text-gray-950", ctx_r1.mode() === "x402")("dark:text-gray-400", ctx_r1.mode() !== "x402")("dark:hover:text-white", ctx_r1.mode() !== "x402");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", ctx_r1.mode() === "credits" ? "CREDITS" : "x402", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r3("history.table.requestsCount", \u0275\u0275pureFunction1(50, _c0, ctx_r1.total())), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-emerald-400", !ctx_r1.loading())("bg-amber-400", ctx_r1.loading());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.loading() ? t_r3("history.table.loading") : t_r3("history.table.live"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("dataSource", ctx_r1.dataSource);
    \u0275\u0275advance(25);
    \u0275\u0275property("matHeaderRowDef", ctx_r1.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx_r1.displayedColumns);
    \u0275\u0275advance(2);
    \u0275\u0275property("length", ctx_r1.total())("pageSize", ctx_r1.pageSize())("pageIndex", ctx_r1.pageIndex())("pageSizeOptions", \u0275\u0275pureFunction0(52, _c1))("showFirstLastButtons", true);
  }
}
var HistoryComponent = class _HistoryComponent {
  constructor() {
    this.displayedColumns = ["status", "service", "parameters", "date", "cost"];
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
    this.dataSource.sortingDataAccessor = (row, columnId) => this.getSortValue(row, columnId);
    effect(() => {
      const allRequests = this.requests();
      if (this.mode() === "credits") {
        this.dataSource.data = allRequests;
        this.displayedColumns = ["status", "service", "parameters", "date", "cost", "actions"];
      } else {
        this.dataSource.data = allRequests;
        this.displayedColumns = ["service", "transactionHash", "amount", "date", "actions"];
      }
    });
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
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
   * Resolve the comparable value for a given column when sorting.
   * Maps UI column ids to the underlying data fields used by both
   * CREDITS (`createdAt`, `statusCode`, ...) and x402 (`timestamp`) responses.
   */
  getSortValue(row, columnId) {
    if (!row)
      return "";
    switch (columnId) {
      case "status":
        return typeof row.statusCode === "number" ? row.statusCode : Number.MAX_SAFE_INTEGER;
      case "service":
        return (row.endpoint || row.code || row.serviceId || "").toString().toLowerCase();
      case "date": {
        const raw = row.createdAt ?? row.timestamp;
        if (!raw)
          return 0;
        if (typeof raw === "number")
          return raw;
        const parsed = DateTime.fromISO(String(raw));
        return parsed.isValid ? parsed.toMillis() : new Date(raw).getTime() || 0;
      }
      case "cost":
        return Number(row.cost ?? 0) || 0;
      case "amount":
        return Number(row.paymentAmount ?? row.cost ?? 0) || 0;
      default: {
        const value = row[columnId];
        return value == null ? "" : value;
      }
    }
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
   * Transloco key for HTTP status badge label (paired with status code in template).
   */
  getStatusLabelKey(statusCode) {
    if (statusCode >= 200 && statusCode < 300)
      return "history.status.success";
    if (statusCode === 404)
      return "history.status.notFound";
    return "history.status.failed";
  }
  formatCost(cost) {
    const value = Number(cost);
    if (!Number.isFinite(value))
      return "-";
    return `${value.toLocaleString(void 0, { maximumFractionDigits: 2 })} credits`;
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
  formatParamValue(value) {
    const text = typeof value === "object" && value !== null ? JSON.stringify(value) : String(value);
    return text.length > 72 ? `${text.substring(0, 69)}...` : text;
  }
  canRepeatRequest(request) {
    return !!request?.code;
  }
  repeatRequest(request) {
    if (!this.canRepeatRequest(request))
      return;
    const payload = {
      v: 1,
      source: "history",
      code: request.code,
      paramValues: this.buildRepeatParams(request.params),
      paymentMode: this.mode(),
      method: request.method,
      requestId: request._id
    };
    sessionStorage.setItem(POSTMAN_HISTORY_PREFILL_STORAGE_KEY, JSON.stringify(payload));
    this._router.navigate(["/postman"], { queryParams: { code: request.code } });
  }
  buildRepeatParams(params) {
    if (!params || typeof params !== "object")
      return {};
    return Object.keys(params).reduce((acc, key) => {
      if (!key.startsWith("_")) {
        acc[key] = params[key];
      }
      return acc;
    }, {});
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
    }, decls: 1, vars: 0, consts: [["noTransaction", ""], [4, "transloco"], [1, "flex", "min-h-screen", "min-w-0", "flex-auto", "flex-col", "bg-stone-50", "dark:bg-gray-950"], [1, "border-b", "border-stone-200/90", "bg-white/90", "px-5", "py-6", "backdrop-blur-sm", "dark:border-gray-800", "dark:bg-gray-950/90", "md:px-8", "md:py-8"], [1, "mx-auto", "flex", "w-full", "max-w-7xl", "flex-col", "gap-5"], [1, "flex", "flex-wrap", "items-center", "text-xs", "font-medium", "leading-none", "text-stone-500", "dark:text-stone-400"], ["routerLink", "/home", 1, "cursor-pointer", "text-stone-700", "underline-offset-4", "hover:underline", "dark:text-stone-300"], ["svgIcon", "heroicons_solid:chevron-right", 1, "icon-size-4", "mx-2", "text-stone-400"], [1, "cursor-default", "text-stone-600", "dark:text-stone-300"], [1, "flex", "flex-wrap", "items-start", "justify-between", "gap-4"], [1, "min-w-0"], [1, "text-2xl", "font-semibold", "tracking-tight", "text-stone-950", "dark:text-white", "md:text-4xl"], [1, "mt-2", "max-w-2xl", "text-sm", "text-stone-500", "dark:text-stone-400"], [1, "flex", "items-center", "rounded-xl", "border", "border-stone-200", "bg-white", "p-1", "shadow-sm", "dark:border-gray-800", "dark:bg-gray-900"], ["type", "button", 1, "rounded-lg", "px-3", "py-2", "text-xs", "font-semibold", "transition-all", 3, "click"], [1, "flex", "flex-auto", "flex-col", "px-5", "py-8", "md:px-8", "md:py-10"], [1, "mx-auto", "flex", "w-full", "max-w-7xl", "flex-col", "gap-4"], [1, "overflow-hidden", "rounded-3xl", "border", "border-stone-200/90", "bg-white", "shadow-sm", "dark:border-gray-800", "dark:bg-gray-900/80"], [1, "flex", "flex-wrap", "items-center", "justify-between", "gap-3", "border-b", "border-stone-100", "px-5", "py-4", "dark:border-gray-800", "md:px-6"], [1, "text-xs", "font-semibold", "uppercase", "tracking-[0.18em]", "text-stone-400", "dark:text-gray-500"], [1, "mt-1", "text-sm", "font-medium", "text-stone-800", "dark:text-gray-100"], [1, "flex", "items-center", "gap-2", "rounded-full", "bg-stone-100", "px-3", "py-1", "text-xs", "font-medium", "text-stone-500", "dark:bg-gray-800", "dark:text-gray-400"], [1, "h-2", "w-2", "rounded-full"], [1, "overflow-x-auto"], ["mat-table", "", "matSort", "", 1, "w-full", "min-w-[980px]", "bg-transparent", 3, "dataSource"], ["matColumnDef", "status"], ["mat-header-cell", "", "mat-sort-header", "", "class", "pl-6", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "pl-6 py-5", 4, "matCellDef"], ["matColumnDef", "service"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "py-5", 4, "matCellDef"], ["matColumnDef", "parameters"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "amount"], ["mat-cell", "", "class", "py-5 font-mono text-xs text-emerald-600 dark:text-emerald-400", 4, "matCellDef"], ["matColumnDef", "transactionHash"], ["matColumnDef", "date"], ["mat-cell", "", "class", "whitespace-nowrap py-5 text-sm text-stone-500 dark:text-gray-400", 4, "matCellDef"], ["matColumnDef", "cost"], ["mat-cell", "", "class", "whitespace-nowrap py-5", 4, "matCellDef"], ["matColumnDef", "actions"], ["mat-header-cell", "", "class", "pr-6 text-right", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "pr-6 py-5 text-right", 4, "matCellDef"], ["mat-header-row", "", "class", "h-12 bg-stone-50 text-xs font-semibold uppercase tracking-[0.12em] text-stone-400 dark:bg-gray-900 dark:text-gray-500", 4, "matHeaderRowDef"], ["mat-row", "", "class", "border-b border-stone-100 transition-colors hover:bg-stone-50/80 dark:border-gray-800 dark:hover:bg-gray-800/40", 4, "matRowDef", "matRowDefColumns"], [4, "matNoDataRow"], ["aria-label", "Select page of requests", 1, "border-t", "border-stone-100", "dark:border-gray-800", 3, "page", "length", "pageSize", "pageIndex", "pageSizeOptions", "showFirstLastButtons"], ["mat-header-cell", "", "mat-sort-header", "", 1, "pl-6"], ["mat-cell", "", 1, "pl-6", "py-5"], ["class", "inline-flex items-center gap-1 whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-semibold", 3, "ngClass", 4, "ngIf"], ["class", "inline-flex items-center rounded-full bg-green-100 px-2.5 py-1 text-xs font-semibold text-green-700 dark:bg-green-900/30 dark:text-green-400", 4, "ngIf"], [1, "inline-flex", "items-center", "gap-1", "whitespace-nowrap", "rounded-full", "px-2.5", "py-1", "text-xs", "font-semibold", 3, "ngClass"], [1, "font-mono", "font-normal", "opacity-90"], [1, "inline-flex", "items-center", "rounded-full", "bg-green-100", "px-2.5", "py-1", "text-xs", "font-semibold", "text-green-700", "dark:bg-green-900/30", "dark:text-green-400"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", "", 1, "py-5"], [1, "flex", "min-w-0", "flex-col", "gap-1"], [1, "max-w-[280px]", "truncate", "text-sm", "font-semibold", "text-stone-950", "dark:text-white"], [1, "max-w-[280px]", "truncate", "font-mono", "text-xs", "text-stone-400", "dark:text-gray-500"], ["mat-header-cell", ""], [1, "flex", "max-w-[360px]", "flex-col", "gap-2"], [1, "inline-flex", "w-fit", "rounded-full", "bg-stone-100", "px-2", "py-0.5", "font-mono", "text-[11px]", "font-semibold", "text-stone-600", "dark:bg-gray-800", "dark:text-gray-300"], ["class", "flex flex-wrap gap-1.5", 4, "ngIf"], ["class", "text-xs italic text-stone-400 dark:text-gray-500", 4, "ngIf"], [1, "flex", "flex-wrap", "gap-1.5"], ["class", "max-w-full truncate rounded-lg border border-stone-200 bg-stone-50 px-2 py-1 text-xs text-stone-600 dark:border-gray-700 dark:bg-gray-800/80 dark:text-gray-300", 3, "matTooltip", 4, "ngFor", "ngForOf"], [1, "max-w-full", "truncate", "rounded-lg", "border", "border-stone-200", "bg-stone-50", "px-2", "py-1", "text-xs", "text-stone-600", "dark:border-gray-700", "dark:bg-gray-800/80", "dark:text-gray-300", 3, "matTooltip"], [1, "font-semibold", "text-stone-800", "dark:text-gray-100"], [1, "text-xs", "italic", "text-stone-400", "dark:text-gray-500"], ["mat-cell", "", 1, "py-5", "font-mono", "text-xs", "text-emerald-600", "dark:text-emerald-400"], [4, "ngIf"], [1, "text-stone-400"], ["class", "flex items-center gap-1", 4, "ngIf", "ngIfElse"], [1, "flex", "items-center", "gap-1"], ["target", "_blank", 1, "font-mono", "text-xs", "font-medium", "text-blue-600", "underline-offset-4", "hover:underline", "dark:text-blue-400", 3, "href"], ["mat-icon-button", "", "type", "button", 1, "!h-7", "!w-7", 3, "click"], [1, "icon-size-3"], [1, "text-xs", "text-stone-400"], ["mat-cell", "", 1, "whitespace-nowrap", "py-5", "text-sm", "text-stone-500", "dark:text-gray-400"], ["mat-cell", "", 1, "whitespace-nowrap", "py-5"], [1, "inline-flex", "rounded-full", "bg-stone-100", "px-2.5", "py-1", "text-xs", "font-semibold", "text-stone-700", "dark:bg-gray-800", "dark:text-gray-200"], ["mat-header-cell", "", 1, "pr-6", "text-right"], ["mat-cell", "", 1, "pr-6", "py-5", "text-right"], ["mat-stroked-button", "", "type", "button", 1, "!rounded-xl", 3, "click", "disabled", "matTooltip"], [1, "mr-1", "!h-4", "!w-4"], ["mat-header-row", "", 1, "h-12", "bg-stone-50", "text-xs", "font-semibold", "uppercase", "tracking-[0.12em]", "text-stone-400", "dark:bg-gray-900", "dark:text-gray-500"], ["mat-row", "", 1, "border-b", "border-stone-100", "transition-colors", "hover:bg-stone-50/80", "dark:border-gray-800", "dark:hover:bg-gray-800/40"], [1, "px-6", "py-16", "text-center"], [1, "flex", "flex-col", "items-center", "justify-center"], [1, "mb-4", "flex", "h-14", "w-14", "items-center", "justify-center", "rounded-2xl", "bg-stone-100", "dark:bg-gray-800"], ["svgIcon", "heroicons_outline:clipboard-document-list", 1, "icon-size-7", "text-stone-400"], [1, "text-sm", "font-medium", "text-stone-700", "dark:text-gray-200"]], template: function HistoryComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, HistoryComponent_ng_container_0_Template, 63, 53, "ng-container", 1);
      }
    }, dependencies: [
      CommonModule,
      NgClass,
      NgForOf,
      NgIf,
      MatButtonModule,
      MatButton,
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
      MatTooltip,
      RouterLink,
      TranslocoModule,
      TranslocoDirective
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
      RouterLink,
      TranslocoModule
    ], encapsulation: ViewEncapsulation.None, template: `<ng-container *transloco="let t">
  <div class="flex min-h-screen min-w-0 flex-auto flex-col bg-stone-50 dark:bg-gray-950">
    <header
      class="border-b border-stone-200/90 bg-white/90 px-5 py-6 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-950/90 md:px-8 md:py-8"
    >
      <div class="mx-auto flex w-full max-w-7xl flex-col gap-5">
        <div class="flex flex-wrap items-center text-xs font-medium leading-none text-stone-500 dark:text-stone-400">
          <a
            routerLink="/home"
            class="cursor-pointer text-stone-700 underline-offset-4 hover:underline dark:text-stone-300"
          >
            Verifik
          </a>
          <mat-icon class="icon-size-4 mx-2 text-stone-400" svgIcon="heroicons_solid:chevron-right"></mat-icon>
          <span class="cursor-default text-stone-600 dark:text-stone-300">{{ t('nav.history') }}</span>
        </div>

        <div class="flex flex-wrap items-start justify-between gap-4">
          <div class="min-w-0">
            <h1 class="text-2xl font-semibold tracking-tight text-stone-950 dark:text-white md:text-4xl">
              {{ t('history.title') }}
            </h1>
            <p class="mt-2 max-w-2xl text-sm text-stone-500 dark:text-stone-400">
              {{ t('history.subtitle') }}
            </p>
          </div>

          <div
            class="flex items-center rounded-xl border border-stone-200 bg-white p-1 shadow-sm dark:border-gray-800 dark:bg-gray-900"
          >
            <button
              type="button"
              class="rounded-lg px-3 py-2 text-xs font-semibold transition-all"
              [class.bg-stone-950]="mode() === 'credits'"
              [class.text-white]="mode() === 'credits'"
              [class.text-stone-500]="mode() !== 'credits'"
              [class.hover:text-stone-900]="mode() !== 'credits'"
              [class.dark:bg-white]="mode() === 'credits'"
              [class.dark:text-gray-950]="mode() === 'credits'"
              [class.dark:text-gray-400]="mode() !== 'credits'"
              [class.dark:hover:text-white]="mode() !== 'credits'"
              (click)="setMode('credits')"
            >
              CREDITS
            </button>
            <button
              type="button"
              class="rounded-lg px-3 py-2 text-xs font-semibold transition-all"
              [class.bg-stone-950]="mode() === 'x402'"
              [class.text-white]="mode() === 'x402'"
              [class.text-stone-500]="mode() !== 'x402'"
              [class.hover:text-stone-900]="mode() !== 'x402'"
              [class.dark:bg-white]="mode() === 'x402'"
              [class.dark:text-gray-950]="mode() === 'x402'"
              [class.dark:text-gray-400]="mode() !== 'x402'"
              [class.dark:hover:text-white]="mode() !== 'x402'"
              (click)="setMode('x402')"
            >
              x402
            </button>
          </div>
        </div>
      </div>
    </header>

    <main class="flex flex-auto flex-col px-5 py-8 md:px-8 md:py-10">
      <div class="mx-auto flex w-full max-w-7xl flex-col gap-4">
        <div
          class="overflow-hidden rounded-3xl border border-stone-200/90 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900/80"
        >
          <div class="flex flex-wrap items-center justify-between gap-3 border-b border-stone-100 px-5 py-4 dark:border-gray-800 md:px-6">
            <div>
              <p class="text-xs font-semibold uppercase tracking-[0.18em] text-stone-400 dark:text-gray-500">
                {{ mode() === 'credits' ? 'CREDITS' : 'x402' }}
              </p>
              <p class="mt-1 text-sm font-medium text-stone-800 dark:text-gray-100">
                {{ t('history.table.requestsCount', { count: total() }) }}
              </p>
            </div>
            <div class="flex items-center gap-2 rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-500 dark:bg-gray-800 dark:text-gray-400">
              <span class="h-2 w-2 rounded-full" [class.bg-emerald-400]="!loading()" [class.bg-amber-400]="loading()"></span>
              {{ loading() ? t('history.table.loading') : t('history.table.live') }}
            </div>
          </div>

          <div class="overflow-x-auto">
            <table mat-table [dataSource]="dataSource" class="w-full min-w-[980px] bg-transparent" matSort>
              <ng-container matColumnDef="status">
                <th mat-header-cell *matHeaderCellDef mat-sort-header class="pl-6">
                  {{ t('history.table.status') }}
                </th>
                <td mat-cell *matCellDef="let request" class="pl-6 py-5">
                  <span
                    class="inline-flex items-center gap-1 whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-semibold"
                    [ngClass]="getStatusColor(request.statusCode)"
                    *ngIf="request.statusCode"
                  >
                    <span>{{ t(getStatusLabelKey(request.statusCode)) }}</span>
                    <span class="font-mono font-normal opacity-90">({{ request.statusCode }})</span>
                  </span>
                  <span
                    class="inline-flex items-center rounded-full bg-green-100 px-2.5 py-1 text-xs font-semibold text-green-700 dark:bg-green-900/30 dark:text-green-400"
                    *ngIf="!request.statusCode"
                  >
                    {{ t('history.table.confirmed') }}
                  </span>
                </td>
              </ng-container>

              <ng-container matColumnDef="service">
                <th mat-header-cell *matHeaderCellDef mat-sort-header>
                  {{ t('history.table.service') }}
                </th>
                <td mat-cell *matCellDef="let request" class="py-5">
                  <div class="flex min-w-0 flex-col gap-1">
                    <span class="max-w-[280px] truncate text-sm font-semibold text-stone-950 dark:text-white">
                      {{ request.endpoint || request.code || request.serviceId }}
                    </span>
                    <span class="max-w-[280px] truncate font-mono text-xs text-stone-400 dark:text-gray-500">
                      {{ request.code || request.project || request.serviceId }}
                    </span>
                  </div>
                </td>
              </ng-container>

              <ng-container matColumnDef="parameters">
                <th mat-header-cell *matHeaderCellDef>{{ t('history.table.parameters') }}</th>
                <td mat-cell *matCellDef="let request" class="py-5">
                  <div class="flex max-w-[360px] flex-col gap-2">
                    <span
                      class="inline-flex w-fit rounded-full bg-stone-100 px-2 py-0.5 font-mono text-[11px] font-semibold text-stone-600 dark:bg-gray-800 dark:text-gray-300"
                    >
                      {{ request.method || 'GET' }}
                    </span>
                    <div class="flex flex-wrap gap-1.5" *ngIf="formatParams(request.params).length > 0">
                      <span
                        *ngFor="let param of formatParams(request.params)"
                        class="max-w-full truncate rounded-lg border border-stone-200 bg-stone-50 px-2 py-1 text-xs text-stone-600 dark:border-gray-700 dark:bg-gray-800/80 dark:text-gray-300"
                        [matTooltip]="param.key + ': ' + formatParamValue(param.value)"
                      >
                        <span class="font-semibold text-stone-800 dark:text-gray-100">{{ param.key }}:</span>
                        {{ formatParamValue(param.value) }}
                      </span>
                    </div>
                    <span
                      *ngIf="formatParams(request.params).length === 0"
                      class="text-xs italic text-stone-400 dark:text-gray-500"
                    >
                      {{ t('history.table.noParams') }}
                    </span>
                  </div>
                </td>
              </ng-container>

              <ng-container matColumnDef="amount">
                <th mat-header-cell *matHeaderCellDef>{{ t('history.table.amount') }}</th>
                <td mat-cell *matCellDef="let request" class="py-5 font-mono text-xs text-emerald-600 dark:text-emerald-400">
                  <ng-container *ngIf="mode() === 'x402'">
                    {{ request.paymentAmount || request.cost || '-' }}
                    <span class="text-stone-400">AVAX</span>
                  </ng-container>
                  <ng-container *ngIf="mode() !== 'x402'"> $ {{ request.cost || 0 }} </ng-container>
                </td>
              </ng-container>

              <ng-container matColumnDef="transactionHash">
                <th mat-header-cell *matHeaderCellDef>{{ t('history.table.txHash') }}</th>
                <td mat-cell *matCellDef="let request" class="py-5">
                  <div class="flex items-center gap-1" *ngIf="request.paymentTx; else noTransaction">
                    <a
                      [href]="snowtraceUrl + '/tx/' + request.paymentTx"
                      target="_blank"
                      class="font-mono text-xs font-medium text-blue-600 underline-offset-4 hover:underline dark:text-blue-400"
                    >
                      {{ shortHash(request.paymentTx) }}
                    </a>
                    <button mat-icon-button type="button" (click)="copyText(request.paymentTx)" class="!h-7 !w-7">
                      <mat-icon class="icon-size-3">content_copy</mat-icon>
                    </button>
                  </div>
                  <ng-template #noTransaction>
                    <span class="text-xs text-stone-400">-</span>
                  </ng-template>
                </td>
              </ng-container>

              <ng-container matColumnDef="date">
                <th mat-header-cell *matHeaderCellDef mat-sort-header>
                  {{ t('history.table.date') }}
                </th>
                <td mat-cell *matCellDef="let request" class="whitespace-nowrap py-5 text-sm text-stone-500 dark:text-gray-400">
                  {{ formatDate(request.createdAt || request.timestamp) }}
                </td>
              </ng-container>

              <ng-container matColumnDef="cost">
                <th mat-header-cell *matHeaderCellDef mat-sort-header>
                  {{ t('history.table.cost') }}
                </th>
                <td mat-cell *matCellDef="let request" class="whitespace-nowrap py-5">
                  <span class="inline-flex rounded-full bg-stone-100 px-2.5 py-1 text-xs font-semibold text-stone-700 dark:bg-gray-800 dark:text-gray-200">
                    {{ formatCost(request.cost) }}
                  </span>
                </td>
              </ng-container>

              <ng-container matColumnDef="actions">
                <th mat-header-cell *matHeaderCellDef class="pr-6 text-right">
                  {{ t('history.table.actions') }}
                </th>
                <td mat-cell *matCellDef="let request" class="pr-6 py-5 text-right">
                  <button
                    mat-stroked-button
                    type="button"
                    class="!rounded-xl"
                    [disabled]="!canRepeatRequest(request)"
                    [matTooltip]="canRepeatRequest(request) ? t('history.actions.repeatTooltip') : t('history.actions.repeatUnavailable')"
                    (click)="repeatRequest(request)"
                  >
                    <mat-icon class="mr-1 !h-4 !w-4">replay</mat-icon>
                    {{ t('history.actions.repeat') }}
                  </button>
                </td>
              </ng-container>

              <tr
                mat-header-row
                *matHeaderRowDef="displayedColumns"
                class="h-12 bg-stone-50 text-xs font-semibold uppercase tracking-[0.12em] text-stone-400 dark:bg-gray-900 dark:text-gray-500"
              ></tr>
              <tr
                mat-row
                *matRowDef="let row; columns: displayedColumns"
                class="border-b border-stone-100 transition-colors hover:bg-stone-50/80 dark:border-gray-800 dark:hover:bg-gray-800/40"
              ></tr>

              <tr *matNoDataRow>
                <td [attr.colspan]="displayedColumns.length" class="px-6 py-16 text-center">
                  <div class="flex flex-col items-center justify-center">
                    <div class="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-stone-100 dark:bg-gray-800">
                      <mat-icon class="icon-size-7 text-stone-400" svgIcon="heroicons_outline:clipboard-document-list"></mat-icon>
                    </div>
                    <span class="text-sm font-medium text-stone-700 dark:text-gray-200">{{ t('history.table.noRequests') }}</span>
                  </div>
                </td>
              </tr>
            </table>
          </div>

          <mat-paginator
            class="border-t border-stone-100 dark:border-gray-800"
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
    </main>
  </div>
</ng-container>
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HistoryComponent, { className: "HistoryComponent", filePath: "src/app/modules/history/history.component.ts", lineNumber: 46 });
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
//# sourceMappingURL=chunk-VCOSUXIT.js.map
