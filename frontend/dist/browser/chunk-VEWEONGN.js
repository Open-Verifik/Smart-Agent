import {
  PhoneValidationsService,
  formatMessagePhone,
  resolveMessageSource
} from "./chunk-QIRJU6LC.js";
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
} from "./chunk-EE5O7TCT.js";
import {
  MatPaginator,
  MatPaginatorModule
} from "./chunk-ERZBGJ7Y.js";
import {
  MatSnackBar,
  MatSnackBarModule
} from "./chunk-TXEVGTMX.js";
import "./chunk-FTSXFXXU.js";
import "./chunk-JURKDGMK.js";
import {
  MatOption,
  MatSelect,
  MatSelectModule
} from "./chunk-RM2644J3.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-AICPTZP5.js";
import "./chunk-VURK6DEU.js";
import "./chunk-E7WYNRWC.js";
import {
  MatFormField,
  MatFormFieldModule,
  MatLabel,
  MatPrefix
} from "./chunk-HWNQWMK7.js";
import "./chunk-BCBZJBUY.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-UUIVQBYS.js";
import "./chunk-OIBNGD5S.js";
import "./chunk-WOW6NB5H.js";
import {
  MatButton,
  MatButtonModule
} from "./chunk-YSJP7SXK.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-CQIQSUBU.js";
import "./chunk-J762DGD5.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  ɵNgSelectMultipleOption
} from "./chunk-DVRFI3SJ.js";
import {
  TranslocoDirective,
  TranslocoModule,
  TranslocoService
} from "./chunk-R5W3A6HI.js";
import {
  ActivatedRoute,
  Router,
  RouterModule
} from "./chunk-HYFP557I.js";
import "./chunk-PMCYMBOC.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  DatePipe,
  NgIf,
  Subject,
  debounceTime,
  distinctUntilChanged,
  inject,
  setClassMetadata,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-PNPEHISK.js";
import "./chunk-F5M2C4EZ.js";

// src/app/modules/smart-tools/communication/messages-list.component.ts
function MessagesListComponent_ng_container_0_div_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275element(1, "mat-progress-spinner", 27);
    \u0275\u0275elementEnd();
  }
}
function MessagesListComponent_ng_container_0_div_43_table_1_th_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r4("communication_messages.list.columns.phone"), " ");
  }
}
function MessagesListComponent_ng_container_0_div_43_table_1_td_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 47);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.formatPhone(row_r5));
  }
}
function MessagesListComponent_ng_container_0_div_43_table_1_th_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r4("communication_messages.list.columns.status"), " ");
  }
}
function MessagesListComponent_ng_container_0_div_43_table_1_td_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 47)(1, "span", 48);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275attribute("data-status", row_r6.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r6.status);
  }
}
function MessagesListComponent_ng_container_0_div_43_table_1_th_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r4("communication_messages.list.columns.source"), " ");
  }
}
function MessagesListComponent_ng_container_0_div_43_table_1_td_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 47)(1, "span", 49);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r7 = ctx.$implicit;
    const t_r4 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("data-source", ctx_r1.resolveSource(row_r7));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r4("communication_messages.list.source." + ctx_r1.resolveSource(row_r7)), " ");
  }
}
function MessagesListComponent_ng_container_0_div_43_table_1_th_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r4("communication_messages.list.columns.project"), " ");
  }
}
function MessagesListComponent_ng_container_0_div_43_table_1_td_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 47);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.projectLabel(row_r8));
  }
}
function MessagesListComponent_ng_container_0_div_43_table_1_th_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r4("communication_messages.list.columns.created"), " ");
  }
}
function MessagesListComponent_ng_container_0_div_43_table_1_td_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 47);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, row_r9.createdAt, "medium"), " ");
  }
}
function MessagesListComponent_ng_container_0_div_43_table_1_tr_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 50);
  }
}
function MessagesListComponent_ng_container_0_div_43_table_1_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 51);
    \u0275\u0275listener("click", function MessagesListComponent_ng_container_0_div_43_table_1_tr_17_Template_tr_click_0_listener() {
      const row_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.goDetail(row_r11));
    });
    \u0275\u0275elementEnd();
  }
}
function MessagesListComponent_ng_container_0_div_43_table_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 36);
    \u0275\u0275elementContainerStart(1, 37);
    \u0275\u0275template(2, MessagesListComponent_ng_container_0_div_43_table_1_th_2_Template, 2, 1, "th", 38)(3, MessagesListComponent_ng_container_0_div_43_table_1_td_3_Template, 2, 1, "td", 39);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(4, 40);
    \u0275\u0275template(5, MessagesListComponent_ng_container_0_div_43_table_1_th_5_Template, 2, 1, "th", 38)(6, MessagesListComponent_ng_container_0_div_43_table_1_td_6_Template, 3, 2, "td", 39);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(7, 41);
    \u0275\u0275template(8, MessagesListComponent_ng_container_0_div_43_table_1_th_8_Template, 2, 1, "th", 38)(9, MessagesListComponent_ng_container_0_div_43_table_1_td_9_Template, 3, 2, "td", 39);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(10, 42);
    \u0275\u0275template(11, MessagesListComponent_ng_container_0_div_43_table_1_th_11_Template, 2, 1, "th", 38)(12, MessagesListComponent_ng_container_0_div_43_table_1_td_12_Template, 2, 1, "td", 39);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(13, 43);
    \u0275\u0275template(14, MessagesListComponent_ng_container_0_div_43_table_1_th_14_Template, 2, 1, "th", 38)(15, MessagesListComponent_ng_container_0_div_43_table_1_td_15_Template, 3, 4, "td", 39);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(16, MessagesListComponent_ng_container_0_div_43_table_1_tr_16_Template, 1, 0, "tr", 44)(17, MessagesListComponent_ng_container_0_div_43_table_1_tr_17_Template, 1, 0, "tr", 45);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("dataSource", ctx_r1.rows);
    \u0275\u0275advance(16);
    \u0275\u0275property("matHeaderRowDef", ctx_r1.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx_r1.displayedColumns);
  }
}
function MessagesListComponent_ng_container_0_div_43_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r4("communication_messages.list.empty"), " ");
  }
}
function MessagesListComponent_ng_container_0_div_43_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const size_r12 = ctx.$implicit;
    \u0275\u0275property("value", size_r12);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(size_r12);
  }
}
function MessagesListComponent_ng_container_0_div_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275template(1, MessagesListComponent_ng_container_0_div_43_table_1_Template, 18, 3, "table", 29)(2, MessagesListComponent_ng_container_0_div_43_div_2_Template, 2, 1, "div", 30);
    \u0275\u0275elementStart(3, "div", 31)(4, "label", 32)(5, "select", 33);
    \u0275\u0275listener("change", function MessagesListComponent_ng_container_0_div_43_Template_select_change_5_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPageSizeChange(+$event.target.value));
    });
    \u0275\u0275repeaterCreate(6, MessagesListComponent_ng_container_0_div_43_For_7_Template, 2, 2, "option", 34, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "mat-paginator", 35);
    \u0275\u0275listener("page", function MessagesListComponent_ng_container_0_div_43_Template_mat_paginator_page_8_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPage($event));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.rows.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.rows.length);
    \u0275\u0275advance(3);
    \u0275\u0275property("value", ctx_r1.limit);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.pageSizeOptions);
    \u0275\u0275advance(2);
    \u0275\u0275property("length", ctx_r1.total)("pageIndex", ctx_r1.page - 1)("pageSize", ctx_r1.limit)("hidePageSize", true);
  }
}
function MessagesListComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "header", 3)(4, "div", 4);
    \u0275\u0275element(5, "mat-icon", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 6)(7, "h1", 7);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 8);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "button", 9);
    \u0275\u0275listener("click", function MessagesListComponent_ng_container_0_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goCompose());
    });
    \u0275\u0275element(12, "mat-icon", 10);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 11)(15, "mat-form-field", 12);
    \u0275\u0275element(16, "mat-icon", 13);
    \u0275\u0275elementStart(17, "input", 14);
    \u0275\u0275listener("ngModelChange", function MessagesListComponent_ng_container_0_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSearchInput($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "mat-form-field", 15)(19, "mat-label");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "mat-select", 16);
    \u0275\u0275twoWayListener("ngModelChange", function MessagesListComponent_ng_container_0_Template_mat_select_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.sourceFilter, $event) || (ctx_r1.sourceFilter = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("selectionChange", function MessagesListComponent_ng_container_0_Template_mat_select_selectionChange_21_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFilterChange());
    });
    \u0275\u0275elementStart(22, "mat-option", 17);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "mat-option", 18);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "mat-option", 19);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "mat-form-field", 15)(29, "mat-label");
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "mat-select", 16);
    \u0275\u0275twoWayListener("ngModelChange", function MessagesListComponent_ng_container_0_Template_mat_select_ngModelChange_31_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.statusFilter, $event) || (ctx_r1.statusFilter = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("selectionChange", function MessagesListComponent_ng_container_0_Template_mat_select_selectionChange_31_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFilterChange());
    });
    \u0275\u0275elementStart(32, "mat-option", 17);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "mat-option", 20);
    \u0275\u0275text(35, "sent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "mat-option", 21);
    \u0275\u0275text(37, "validated");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "mat-option", 22);
    \u0275\u0275text(39, "failed");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "mat-option", 23);
    \u0275\u0275text(41, "new");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(42, MessagesListComponent_ng_container_0_div_42_Template, 2, 0, "div", 24)(43, MessagesListComponent_ng_container_0_div_43_Template, 9, 7, "div", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("svgIcon", ctx_r1.phoneGateway === "sms" ? "heroicons_outline:device-phone-mobile" : "heroicons_outline:chat-bubble-left-ellipsis");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r4(ctx_r1.titleKey));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4("communication_messages.list.subtitle"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r4("communication_messages.list.send_new"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("placeholder", t_r4("communication_messages.list.search_placeholder"))("ngModel", ctx_r1.search);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r4("communication_messages.list.filter_source"));
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.sourceFilter);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4("communication_messages.list.all"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4("communication_messages.list.source.manual"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4("communication_messages.list.source.flow"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r4("communication_messages.list.filter_status"));
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.statusFilter);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4("communication_messages.list.all"));
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loading);
  }
}
var MessagesListComponent = class _MessagesListComponent {
  constructor() {
    this._route = inject(ActivatedRoute);
    this._router = inject(Router);
    this._service = inject(PhoneValidationsService);
    this._cdr = inject(ChangeDetectorRef);
    this._snack = inject(MatSnackBar);
    this._transloco = inject(TranslocoService);
    this._destroy$ = new Subject();
    this._search$ = new Subject();
    this.phoneGateway = "whatsapp";
    this.loading = true;
    this.rows = [];
    this.total = 0;
    this.page = 1;
    this.limit = 20;
    this.search = "";
    this.sourceFilter = "";
    this.statusFilter = "";
    this.displayedColumns = ["phone", "status", "source", "project", "createdAt"];
    this.pageSizeOptions = [10, 20, 50];
  }
  ngOnInit() {
    this.phoneGateway = this._route.snapshot.data["phoneGateway"] || "whatsapp";
    this._search$.pipe(debounceTime(400), distinctUntilChanged(), takeUntil(this._destroy$)).subscribe((value) => {
      this.search = value;
      this.page = 1;
      this._load();
    });
    this._load();
  }
  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }
  get titleKey() {
    return this.phoneGateway === "sms" ? "communication_messages.list.title_sms" : "communication_messages.list.title_whatsapp";
  }
  get composeLink() {
    return this.phoneGateway === "sms" ? "/smart-tools/sms-messages/new" : "/smart-tools/whatsapp-messages/new";
  }
  onSearchInput(value) {
    this._search$.next(value ?? "");
  }
  onFilterChange() {
    this.page = 1;
    this._load();
  }
  onPage(event) {
    this.page = event.pageIndex + 1;
    this.limit = event.pageSize;
    this._load();
  }
  onPageSizeChange(pageSize) {
    if (!pageSize || pageSize === this.limit)
      return;
    this.page = 1;
    this.limit = pageSize;
    this._load();
  }
  goCompose() {
    this._router.navigateByUrl(this.composeLink);
  }
  goDetail(row) {
    if (!row?._id)
      return;
    const base = this.phoneGateway === "sms" ? "/smart-tools/sms-messages" : "/smart-tools/whatsapp-messages";
    this._router.navigateByUrl(`${base}/${row._id}`);
  }
  formatPhone(row) {
    return formatMessagePhone(row);
  }
  resolveSource(row) {
    return resolveMessageSource(row);
  }
  projectLabel(row) {
    return row?.project?.name || "\u2014";
  }
  _load() {
    this.loading = true;
    this._cdr.markForCheck();
    this._service.list({
      phoneGateway: this.phoneGateway,
      page: this.page,
      limit: this.limit,
      like_phone: this.search || void 0,
      where_source: this.sourceFilter || void 0,
      where_status: this.statusFilter || void 0
    }).subscribe({
      next: (response) => {
        this.rows = response?.data || [];
        this.total = response?.total ?? this.rows.length;
        this.loading = false;
        this._cdr.markForCheck();
      },
      error: () => {
        this.loading = false;
        this.rows = [];
        this.total = 0;
        this._cdr.markForCheck();
        this._snack.open(this._transloco.translate("communication_messages.compose.error"), void 0, { duration: 3e3 });
      }
    });
  }
  static {
    this.\u0275fac = function MessagesListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MessagesListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MessagesListComponent, selectors: [["communication-messages-list"]], decls: 1, vars: 0, consts: [[4, "transloco"], [1, "page"], [1, "inner"], [1, "hero"], [1, "hero-icon"], [3, "svgIcon"], [1, "hero-text"], [1, "title"], [1, "subtitle"], ["mat-flat-button", "", "color", "primary", "type", "button", 3, "click"], ["svgIcon", "heroicons_outline:plus"], [1, "filters"], ["appearance", "outline", "subscriptSizing", "dynamic", 1, "search"], ["matPrefix", "", "svgIcon", "heroicons_outline:magnifying-glass"], ["matInput", "", 3, "ngModelChange", "placeholder", "ngModel"], ["appearance", "outline", "subscriptSizing", "dynamic"], [3, "ngModelChange", "selectionChange", "ngModel"], ["value", ""], ["value", "manual"], ["value", "flow"], ["value", "sent"], ["value", "validated"], ["value", "failed"], ["value", "new"], ["class", "state-loading", 4, "ngIf"], ["class", "table-wrap", 4, "ngIf"], [1, "state-loading"], ["diameter", "40", "mode", "indeterminate"], [1, "table-wrap"], ["mat-table", "", "class", "messages-table", 3, "dataSource", 4, "ngIf"], ["class", "empty", 4, "ngIf"], [1, "mt-4", "flex", "flex-wrap", "items-center", "justify-end", "gap-3"], [1, "flex", "items-center", "gap-2", "text-sm", "text-stone-500", "dark:text-stone-400"], [1, "rounded-lg", "border", "border-stone-200", "bg-white", "px-2", "py-1", "text-sm", "text-stone-800", "dark:border-gray-700", "dark:bg-gray-900", "dark:text-stone-200", 3, "change", "value"], [3, "value"], [3, "page", "length", "pageIndex", "pageSize", "hidePageSize"], ["mat-table", "", 1, "messages-table", 3, "dataSource"], ["matColumnDef", "phone"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "status"], ["matColumnDef", "source"], ["matColumnDef", "project"], ["matColumnDef", "createdAt"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", "class", "clickable-row", 3, "click", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], [1, "status"], [1, "badge"], ["mat-header-row", ""], ["mat-row", "", 1, "clickable-row", 3, "click"], [1, "empty"]], template: function MessagesListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, MessagesListComponent_ng_container_0_Template, 44, 16, "ng-container", 0);
      }
    }, dependencies: [
      CommonModule,
      NgIf,
      DatePipe,
      FormsModule,
      NgSelectOption,
      \u0275NgSelectMultipleOption,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      RouterModule,
      TranslocoModule,
      TranslocoDirective,
      MatButtonModule,
      MatButton,
      MatFormFieldModule,
      MatFormField,
      MatLabel,
      MatPrefix,
      MatIconModule,
      MatIcon,
      MatInputModule,
      MatInput,
      MatPaginatorModule,
      MatPaginator,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatSelectModule,
      MatSelect,
      MatOption,
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
      MatRow
    ], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.page[_ngcontent-%COMP%] {\n  min-height: 100%;\n  padding: 1.5rem 1.25rem 2.5rem;\n  width: 100% !important;\n  background: rgb(249, 250, 251);\n}\n.inner[_ngcontent-%COMP%] {\n  max-width: 1100px;\n  margin: 0 auto;\n}\n.hero[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n  flex-wrap: wrap;\n}\n.hero-icon[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 3rem;\n  border-radius: 0.875rem;\n  display: grid;\n  place-items: center;\n  background: rgb(239, 246, 255);\n  border: 1px solid rgb(219, 234, 254);\n  color: rgb(37, 99, 235);\n}\n.hero-text[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  min-width: 200px;\n}\n.title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: rgb(17, 24, 39);\n}\n.subtitle[_ngcontent-%COMP%] {\n  margin: 0.25rem 0 0;\n  color: rgb(107, 114, 128);\n}\n.filters[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(220px, 1.4fr) repeat(2, minmax(140px, 0.8fr));\n  gap: 0.75rem;\n  margin-bottom: 1rem;\n}\n.state-loading[_ngcontent-%COMP%], \n.empty[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  min-height: 220px;\n  color: rgb(107, 114, 128);\n}\n.table-wrap[_ngcontent-%COMP%] {\n  border: 1px solid rgb(229, 231, 235);\n  border-radius: 1rem;\n  overflow: hidden;\n  background: #fff;\n  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);\n}\n.messages-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.clickable-row[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.clickable-row[_ngcontent-%COMP%]:hover {\n  background: rgb(248, 250, 252);\n}\n.status[_ngcontent-%COMP%], \n.badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.15rem 0.55rem;\n  border-radius: 999px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: capitalize;\n}\n.status[data-status=sent][_ngcontent-%COMP%], \n.badge[data-source=manual][_ngcontent-%COMP%] {\n  background: rgb(220, 252, 231);\n  color: #15803d;\n}\n.status[data-status=validated][_ngcontent-%COMP%], \n.badge[data-source=smart_enroll][_ngcontent-%COMP%] {\n  background: rgb(219, 234, 254);\n  color: #1d4ed8;\n}\n.status[data-status=failed][_ngcontent-%COMP%] {\n  background: rgb(254, 226, 226);\n  color: #b91c1c;\n}\n.badge[data-source=smart_access][_ngcontent-%COMP%] {\n  background: rgb(243, 232, 255);\n  color: #7e22ce;\n}\n.badge[data-source=flow][_ngcontent-%COMP%], \n.status[data-status=new][_ngcontent-%COMP%] {\n  background: rgb(241, 245, 249);\n  color: rgb(51, 65, 85);\n}\n@media (max-width: 800px) {\n  .filters[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.dark[_nghost-%COMP%]   .page[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .page[_ngcontent-%COMP%] {\n  background: transparent;\n}\n.dark[_nghost-%COMP%]   .title[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: rgb(241, 245, 249);\n}\n.dark[_nghost-%COMP%]   .subtitle[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .subtitle[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .state-loading[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .state-loading[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .empty[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .empty[_ngcontent-%COMP%] {\n  color: rgb(148, 163, 184);\n}\n.dark[_nghost-%COMP%]   .hero-icon[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .hero-icon[_ngcontent-%COMP%] {\n  background: rgba(30, 58, 138, 0.35);\n  border-color: rgb(51, 65, 85);\n  color: rgb(147, 197, 253);\n}\n.dark[_nghost-%COMP%]   .table-wrap[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .table-wrap[_ngcontent-%COMP%] {\n  background: rgb(30, 41, 59);\n  border-color: rgb(51, 65, 85);\n  box-shadow: none;\n}\n.dark[_nghost-%COMP%]   .clickable-row[_ngcontent-%COMP%]:hover, .dark   [_nghost-%COMP%]   .clickable-row[_ngcontent-%COMP%]:hover {\n  background: rgba(51, 65, 85, 0.45);\n}\n.dark[_nghost-%COMP%]   .status[data-status=sent][_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .status[data-status=sent][_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .badge[data-source=manual][_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .badge[data-source=manual][_ngcontent-%COMP%] {\n  background: rgba(20, 83, 45, 0.45);\n  color: #86efac;\n}\n.dark[_nghost-%COMP%]   .status[data-status=validated][_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .status[data-status=validated][_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .badge[data-source=smart_enroll][_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .badge[data-source=smart_enroll][_ngcontent-%COMP%] {\n  background: rgba(30, 58, 138, 0.45);\n  color: #93c5fd;\n}\n.dark[_nghost-%COMP%]   .status[data-status=failed][_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .status[data-status=failed][_ngcontent-%COMP%] {\n  background: rgba(127, 29, 29, 0.45);\n  color: #fca5a5;\n}\n.dark[_nghost-%COMP%]   .badge[data-source=smart_access][_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .badge[data-source=smart_access][_ngcontent-%COMP%] {\n  background: rgba(88, 28, 135, 0.4);\n  color: #d8b4fe;\n}\n.dark[_nghost-%COMP%]   .badge[data-source=flow][_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .badge[data-source=flow][_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .status[data-status=new][_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .status[data-status=new][_ngcontent-%COMP%] {\n  background: rgb(51, 65, 85);\n  color: rgb(226, 232, 240);\n}\n/*# sourceMappingURL=messages-list.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MessagesListComponent, [{
    type: Component,
    args: [{ selector: "communication-messages-list", standalone: true, imports: [
      CommonModule,
      FormsModule,
      RouterModule,
      TranslocoModule,
      MatButtonModule,
      MatFormFieldModule,
      MatIconModule,
      MatInputModule,
      MatPaginatorModule,
      MatProgressSpinnerModule,
      MatSelectModule,
      MatSnackBarModule,
      MatTableModule
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `<ng-container *transloco="let t">\r
    <div class="page">\r
        <div class="inner">\r
            <header class="hero">\r
                <div class="hero-icon">\r
                    <mat-icon\r
                        [svgIcon]="\r
                            phoneGateway === 'sms'\r
                                ? 'heroicons_outline:device-phone-mobile'\r
                                : 'heroicons_outline:chat-bubble-left-ellipsis'\r
                        "\r
                    ></mat-icon>\r
                </div>\r
                <div class="hero-text">\r
                    <h1 class="title">{{ t(titleKey) }}</h1>\r
                    <p class="subtitle">{{ t('communication_messages.list.subtitle') }}</p>\r
                </div>\r
                <button mat-flat-button color="primary" type="button" (click)="goCompose()">\r
                    <mat-icon svgIcon="heroicons_outline:plus"></mat-icon>\r
                    {{ t('communication_messages.list.send_new') }}\r
                </button>\r
            </header>\r
\r
            <div class="filters">\r
                <mat-form-field class="search" appearance="outline" subscriptSizing="dynamic">\r
                    <mat-icon matPrefix svgIcon="heroicons_outline:magnifying-glass"></mat-icon>\r
                    <input\r
                        matInput\r
                        [placeholder]="t('communication_messages.list.search_placeholder')"\r
                        [ngModel]="search"\r
                        (ngModelChange)="onSearchInput($event)"\r
                    />\r
                </mat-form-field>\r
\r
                <mat-form-field appearance="outline" subscriptSizing="dynamic">\r
                    <mat-label>{{ t('communication_messages.list.filter_source') }}</mat-label>\r
                    <mat-select [(ngModel)]="sourceFilter" (selectionChange)="onFilterChange()">\r
                        <mat-option value="">{{ t('communication_messages.list.all') }}</mat-option>\r
                        <mat-option value="manual">{{\r
                            t('communication_messages.list.source.manual')\r
                        }}</mat-option>\r
                        <mat-option value="flow">{{\r
                            t('communication_messages.list.source.flow')\r
                        }}</mat-option>\r
                    </mat-select>\r
                </mat-form-field>\r
\r
                <mat-form-field appearance="outline" subscriptSizing="dynamic">\r
                    <mat-label>{{ t('communication_messages.list.filter_status') }}</mat-label>\r
                    <mat-select [(ngModel)]="statusFilter" (selectionChange)="onFilterChange()">\r
                        <mat-option value="">{{ t('communication_messages.list.all') }}</mat-option>\r
                        <mat-option value="sent">sent</mat-option>\r
                        <mat-option value="validated">validated</mat-option>\r
                        <mat-option value="failed">failed</mat-option>\r
                        <mat-option value="new">new</mat-option>\r
                    </mat-select>\r
                </mat-form-field>\r
            </div>\r
\r
            <div *ngIf="loading" class="state-loading">\r
                <mat-progress-spinner diameter="40" mode="indeterminate"></mat-progress-spinner>\r
            </div>\r
\r
            <div class="table-wrap" *ngIf="!loading">\r
                <table mat-table [dataSource]="rows" class="messages-table" *ngIf="rows.length">\r
                    <ng-container matColumnDef="phone">\r
                        <th mat-header-cell *matHeaderCellDef>\r
                            {{ t('communication_messages.list.columns.phone') }}\r
                        </th>\r
                        <td mat-cell *matCellDef="let row">{{ formatPhone(row) }}</td>\r
                    </ng-container>\r
\r
                    <ng-container matColumnDef="status">\r
                        <th mat-header-cell *matHeaderCellDef>\r
                            {{ t('communication_messages.list.columns.status') }}\r
                        </th>\r
                        <td mat-cell *matCellDef="let row">\r
                            <span class="status" [attr.data-status]="row.status">{{\r
                                row.status\r
                            }}</span>\r
                        </td>\r
                    </ng-container>\r
\r
                    <ng-container matColumnDef="source">\r
                        <th mat-header-cell *matHeaderCellDef>\r
                            {{ t('communication_messages.list.columns.source') }}\r
                        </th>\r
                        <td mat-cell *matCellDef="let row">\r
                            <span class="badge" [attr.data-source]="resolveSource(row)">\r
                                {{\r
                                    t(\r
                                        'communication_messages.list.source.' +\r
                                            resolveSource(row)\r
                                    )\r
                                }}\r
                            </span>\r
                        </td>\r
                    </ng-container>\r
\r
                    <ng-container matColumnDef="project">\r
                        <th mat-header-cell *matHeaderCellDef>\r
                            {{ t('communication_messages.list.columns.project') }}\r
                        </th>\r
                        <td mat-cell *matCellDef="let row">{{ projectLabel(row) }}</td>\r
                    </ng-container>\r
\r
                    <ng-container matColumnDef="createdAt">\r
                        <th mat-header-cell *matHeaderCellDef>\r
                            {{ t('communication_messages.list.columns.created') }}\r
                        </th>\r
                        <td mat-cell *matCellDef="let row">\r
                            {{ row.createdAt | date: 'medium' }}\r
                        </td>\r
                    </ng-container>\r
\r
                    <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>\r
                    <tr\r
                        mat-row\r
                        *matRowDef="let row; columns: displayedColumns"\r
                        class="clickable-row"\r
                        (click)="goDetail(row)"\r
                    ></tr>\r
                </table>\r
\r
                <div class="empty" *ngIf="!rows.length">\r
                    {{ t('communication_messages.list.empty') }}\r
                </div>\r
\r
                <div class="mt-4 flex flex-wrap items-center justify-end gap-3">\r
                    <label class="flex items-center gap-2 text-sm text-stone-500 dark:text-stone-400">\r
                        <select\r
                            class="rounded-lg border border-stone-200 bg-white px-2 py-1 text-sm text-stone-800 dark:border-gray-700 dark:bg-gray-900 dark:text-stone-200"\r
                            [value]="limit"\r
                            (change)="onPageSizeChange(+$any($event.target).value)"\r
                        >\r
                            @for (size of pageSizeOptions; track size) {\r
                                <option [value]="size">{{ size }}</option>\r
                            }\r
                        </select>\r
                    </label>\r
                    <mat-paginator\r
                        [length]="total"\r
                        [pageIndex]="page - 1"\r
                        [pageSize]="limit"\r
                        [hidePageSize]="true"\r
                        (page)="onPage($event)"\r
                    ></mat-paginator>\r
                </div>\r
            </div>\r
        </div>\r
    </div>\r
</ng-container>\r
`, styles: ["/* src/app/modules/smart-tools/communication/messages-list.component.scss */\n:host {\n  display: block;\n}\n.page {\n  min-height: 100%;\n  padding: 1.5rem 1.25rem 2.5rem;\n  width: 100% !important;\n  background: rgb(249, 250, 251);\n}\n.inner {\n  max-width: 1100px;\n  margin: 0 auto;\n}\n.hero {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n  flex-wrap: wrap;\n}\n.hero-icon {\n  width: 3rem;\n  height: 3rem;\n  border-radius: 0.875rem;\n  display: grid;\n  place-items: center;\n  background: rgb(239, 246, 255);\n  border: 1px solid rgb(219, 234, 254);\n  color: rgb(37, 99, 235);\n}\n.hero-text {\n  flex: 1 1 auto;\n  min-width: 200px;\n}\n.title {\n  margin: 0;\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: rgb(17, 24, 39);\n}\n.subtitle {\n  margin: 0.25rem 0 0;\n  color: rgb(107, 114, 128);\n}\n.filters {\n  display: grid;\n  grid-template-columns: minmax(220px, 1.4fr) repeat(2, minmax(140px, 0.8fr));\n  gap: 0.75rem;\n  margin-bottom: 1rem;\n}\n.state-loading,\n.empty {\n  display: grid;\n  place-items: center;\n  min-height: 220px;\n  color: rgb(107, 114, 128);\n}\n.table-wrap {\n  border: 1px solid rgb(229, 231, 235);\n  border-radius: 1rem;\n  overflow: hidden;\n  background: #fff;\n  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);\n}\n.messages-table {\n  width: 100%;\n}\n.clickable-row {\n  cursor: pointer;\n}\n.clickable-row:hover {\n  background: rgb(248, 250, 252);\n}\n.status,\n.badge {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.15rem 0.55rem;\n  border-radius: 999px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: capitalize;\n}\n.status[data-status=sent],\n.badge[data-source=manual] {\n  background: rgb(220, 252, 231);\n  color: #15803d;\n}\n.status[data-status=validated],\n.badge[data-source=smart_enroll] {\n  background: rgb(219, 234, 254);\n  color: #1d4ed8;\n}\n.status[data-status=failed] {\n  background: rgb(254, 226, 226);\n  color: #b91c1c;\n}\n.badge[data-source=smart_access] {\n  background: rgb(243, 232, 255);\n  color: #7e22ce;\n}\n.badge[data-source=flow],\n.status[data-status=new] {\n  background: rgb(241, 245, 249);\n  color: rgb(51, 65, 85);\n}\n@media (max-width: 800px) {\n  .filters {\n    grid-template-columns: 1fr;\n  }\n}\n:host-context(.dark) .page {\n  background: transparent;\n}\n:host-context(.dark) .title {\n  color: rgb(241, 245, 249);\n}\n:host-context(.dark) .subtitle,\n:host-context(.dark) .state-loading,\n:host-context(.dark) .empty {\n  color: rgb(148, 163, 184);\n}\n:host-context(.dark) .hero-icon {\n  background: rgba(30, 58, 138, 0.35);\n  border-color: rgb(51, 65, 85);\n  color: rgb(147, 197, 253);\n}\n:host-context(.dark) .table-wrap {\n  background: rgb(30, 41, 59);\n  border-color: rgb(51, 65, 85);\n  box-shadow: none;\n}\n:host-context(.dark) .clickable-row:hover {\n  background: rgba(51, 65, 85, 0.45);\n}\n:host-context(.dark) .status[data-status=sent],\n:host-context(.dark) .badge[data-source=manual] {\n  background: rgba(20, 83, 45, 0.45);\n  color: #86efac;\n}\n:host-context(.dark) .status[data-status=validated],\n:host-context(.dark) .badge[data-source=smart_enroll] {\n  background: rgba(30, 58, 138, 0.45);\n  color: #93c5fd;\n}\n:host-context(.dark) .status[data-status=failed] {\n  background: rgba(127, 29, 29, 0.45);\n  color: #fca5a5;\n}\n:host-context(.dark) .badge[data-source=smart_access] {\n  background: rgba(88, 28, 135, 0.4);\n  color: #d8b4fe;\n}\n:host-context(.dark) .badge[data-source=flow],\n:host-context(.dark) .status[data-status=new] {\n  background: rgb(51, 65, 85);\n  color: rgb(226, 232, 240);\n}\n/*# sourceMappingURL=messages-list.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MessagesListComponent, { className: "MessagesListComponent", filePath: "src/app/modules/smart-tools/communication/messages-list.component.ts", lineNumber: 57 });
})();
export {
  MessagesListComponent
};
//# sourceMappingURL=chunk-VEWEONGN.js.map
