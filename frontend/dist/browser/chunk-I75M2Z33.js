import {
  SmartAccessProjectsService
} from "./chunk-KIILQMCM.js";
import {
  MatSort,
  MatSortHeader,
  MatSortModule
} from "./chunk-LJHW6WXX.js";
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
  DateTime
} from "./chunk-KW3PRW6P.js";
import "./chunk-BSFB775C.js";
import "./chunk-LVI7H6QB.js";
import "./chunk-JURKDGMK.js";
import {
  MatOption,
  MatSelect,
  MatSelectModule
} from "./chunk-DT4JVZCC.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-DMXREZDX.js";
import "./chunk-CPZD6RE6.js";
import "./chunk-W5MZFF7W.js";
import {
  MatFormField,
  MatFormFieldModule,
  MatLabel,
  MatPrefix,
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
  ɵNgSelectMultipleOption
} from "./chunk-JBF67GMG.js";
import {
  TranslocoModule,
  TranslocoPipe
} from "./chunk-FWBWCXY5.js";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-QL64NPDU.js";
import "./chunk-3V5B4ZWC.js";
import {
  CommonModule,
  Component,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
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
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
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
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-YWP2Y7QK.js";
import {
  __spreadValues
} from "./chunk-F5M2C4EZ.js";

// src/app/modules/smart-access/projects/project-records/access-project-records.component.ts
var _c0 = (a0) => ["/smart-access/projects", a0];
var _c1 = (a0, a1) => ["/smart-access/projects", a0, "records", a1];
function AccessProjectRecordsComponent_For_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 26);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r1 = ctx.$implicit;
    \u0275\u0275property("value", option_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "smartAccessProjects.status." + option_r1), " ");
  }
}
function AccessProjectRecordsComponent_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 32);
    \u0275\u0275listener("click", function AccessProjectRecordsComponent_Conditional_49_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.clearFilters());
    });
    \u0275\u0275elementStart(1, "mat-icon", 33);
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "smartAccessProjects.clearFilters"), " ");
  }
}
function AccessProjectRecordsComponent_For_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-button-toggle", 26);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const preset_r4 = ctx.$implicit;
    \u0275\u0275property("value", preset_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "smartAccessProjects.datePreset." + preset_r4), " ");
  }
}
function AccessProjectRecordsComponent_Conditional_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 29)(1, "mat-label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-date-range-input", 34)(5, "input", 35);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275listener("dateChange", function AccessProjectRecordsComponent_Conditional_54_Template_input_dateChange_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onCustomRangeChange());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 36);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275listener("dateChange", function AccessProjectRecordsComponent_Conditional_54_Template_input_dateChange_7_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onCustomRangeChange());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275element(9, "mat-datepicker-toggle", 37)(10, "mat-date-range-picker", null, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const picker_r6 = \u0275\u0275reference(11);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 7, "smartAccessProjects.dateRange"));
    \u0275\u0275advance(2);
    \u0275\u0275property("rangePicker", picker_r6);
    \u0275\u0275advance();
    \u0275\u0275property("formControl", ctx_r2.rangeStart)("placeholder", \u0275\u0275pipeBind1(6, 9, "smartAccessProjects.dateStart"));
    \u0275\u0275advance(2);
    \u0275\u0275property("formControl", ctx_r2.rangeEnd)("placeholder", \u0275\u0275pipeBind1(8, 11, "smartAccessProjects.dateEnd"));
    \u0275\u0275advance(2);
    \u0275\u0275property("for", picker_r6);
  }
}
function AccessProjectRecordsComponent_Conditional_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275element(1, "mat-spinner", 38);
    \u0275\u0275elementEnd();
  }
}
function AccessProjectRecordsComponent_Conditional_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, ctx_r2.errorKey()), " ");
  }
}
function AccessProjectRecordsComponent_Conditional_57_th_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 56);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "smartAccessProjects.colStatus"));
  }
}
function AccessProjectRecordsComponent_Conditional_57_td_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 57);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const row_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((tmp_3_0 = row_r8.status) !== null && tmp_3_0 !== void 0 ? tmp_3_0 : "\u2014");
  }
}
function AccessProjectRecordsComponent_Conditional_57_th_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 56);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "smartAccessProjects.colName"));
  }
}
function AccessProjectRecordsComponent_Conditional_57_td_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 57);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const row_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((tmp_3_0 = row_r9.name) !== null && tmp_3_0 !== void 0 ? tmp_3_0 : "\u2014");
  }
}
function AccessProjectRecordsComponent_Conditional_57_th_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 56);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "smartAccessProjects.colEmail"));
  }
}
function AccessProjectRecordsComponent_Conditional_57_td_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 57);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const row_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((tmp_3_0 = row_r10.email) !== null && tmp_3_0 !== void 0 ? tmp_3_0 : "\u2014");
  }
}
function AccessProjectRecordsComponent_Conditional_57_th_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 56);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "smartAccessProjects.colPhone"));
  }
}
function AccessProjectRecordsComponent_Conditional_57_td_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 57);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const row_r11 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((tmp_3_0 = row_r11.phone) !== null && tmp_3_0 !== void 0 ? tmp_3_0 : "\u2014");
  }
}
function AccessProjectRecordsComponent_Conditional_57_th_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 58);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "smartAccessProjects.colCreated"), " ");
  }
}
function AccessProjectRecordsComponent_Conditional_57_td_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 57);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r12 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.formatDate(row_r12.createdAt));
  }
}
function AccessProjectRecordsComponent_Conditional_57_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 59);
  }
}
function AccessProjectRecordsComponent_Conditional_57_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 60);
  }
  if (rf & 2) {
    const row_r13 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction2(1, _c1, ctx_r2.projectId, row_r13._id));
  }
}
function AccessProjectRecordsComponent_Conditional_57_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "smartAccessProjects.recordsEmpty"), " ");
  }
}
function AccessProjectRecordsComponent_Conditional_57_For_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const size_r14 = ctx.$implicit;
    \u0275\u0275property("value", size_r14);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(size_r14);
  }
}
function AccessProjectRecordsComponent_Conditional_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 39)(1, "table", 40);
    \u0275\u0275listener("matSortChange", function AccessProjectRecordsComponent_Conditional_57_Template_table_matSortChange_1_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onSortChange($event));
    });
    \u0275\u0275elementContainerStart(2, 41);
    \u0275\u0275template(3, AccessProjectRecordsComponent_Conditional_57_th_3_Template, 3, 3, "th", 42)(4, AccessProjectRecordsComponent_Conditional_57_td_4_Template, 2, 1, "td", 43);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(5, 44);
    \u0275\u0275template(6, AccessProjectRecordsComponent_Conditional_57_th_6_Template, 3, 3, "th", 42)(7, AccessProjectRecordsComponent_Conditional_57_td_7_Template, 2, 1, "td", 43);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(8, 45);
    \u0275\u0275template(9, AccessProjectRecordsComponent_Conditional_57_th_9_Template, 3, 3, "th", 42)(10, AccessProjectRecordsComponent_Conditional_57_td_10_Template, 2, 1, "td", 43);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(11, 46);
    \u0275\u0275template(12, AccessProjectRecordsComponent_Conditional_57_th_12_Template, 3, 3, "th", 42)(13, AccessProjectRecordsComponent_Conditional_57_td_13_Template, 2, 1, "td", 43);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(14, 47);
    \u0275\u0275template(15, AccessProjectRecordsComponent_Conditional_57_th_15_Template, 3, 3, "th", 48)(16, AccessProjectRecordsComponent_Conditional_57_td_16_Template, 2, 1, "td", 43);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(17, AccessProjectRecordsComponent_Conditional_57_tr_17_Template, 1, 0, "tr", 49)(18, AccessProjectRecordsComponent_Conditional_57_tr_18_Template, 1, 4, "tr", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, AccessProjectRecordsComponent_Conditional_57_Conditional_19_Template, 3, 3, "div", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 52)(21, "label", 53)(22, "select", 54);
    \u0275\u0275listener("change", function AccessProjectRecordsComponent_Conditional_57_Template_select_change_22_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onPageSizeChange(+$event.target.value));
    });
    \u0275\u0275repeaterCreate(23, AccessProjectRecordsComponent_Conditional_57_For_24_Template, 2, 2, "option", 26, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "mat-paginator", 55);
    \u0275\u0275listener("page", function AccessProjectRecordsComponent_Conditional_57_Template_mat_paginator_page_25_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onPage($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("dataSource", ctx_r2.dataSource)("matSortActive", "createdAt")("matSortDirection", ctx_r2.sortDirection());
    \u0275\u0275advance(16);
    \u0275\u0275property("matHeaderRowDef", ctx_r2.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx_r2.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.dataSource.length === 0 ? 19 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275property("value", ctx_r2.pageSize);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.pageSizeOptions);
    \u0275\u0275advance(2);
    \u0275\u0275property("length", ctx_r2.total())("pageIndex", ctx_r2.pageIndex)("pageSize", ctx_r2.pageSize)("hidePageSize", true);
  }
}
var STATUS_OPTIONS = [
  "all",
  "STARTED",
  "ONGOING",
  "COMPLETED",
  "FAILED",
  "EXPIRED"
];
var DATE_PRESETS = ["all", "today", "thisWeek", "lastWeek", "thisMonth", "custom"];
var AccessProjectRecordsComponent = class _AccessProjectRecordsComponent {
  constructor() {
    this._route = inject(ActivatedRoute);
    this._router = inject(Router);
    this._projectsService = inject(SmartAccessProjectsService);
    this._searchDebounce = null;
    this.statusOptions = STATUS_OPTIONS;
    this.datePresets = DATE_PRESETS;
    this.displayedColumns = ["status", "name", "email", "phone", "createdAt"];
    this.dataSource = [];
    this.loading = signal(true);
    this.errorKey = signal(null);
    this.projectId = "";
    this.projectName = signal(null);
    this.total = signal(0);
    this.pageSizeOptions = [10, 25, 50];
    this.pageSize = 10;
    this.pageIndex = 0;
    this.searchInput = "";
    this.statusFilter = signal("all");
    this.datePreset = signal("all");
    this.rangeStart = new FormControl(null);
    this.rangeEnd = new FormControl(null);
    this.sortDirection = signal("desc");
    this.activeFilterCount = computed(() => {
      let count = 0;
      if (this.searchInput.trim())
        count += 1;
      if (this.statusFilter() !== "all")
        count += 1;
      if (this.datePreset() !== "all")
        count += 1;
      return count;
    });
  }
  ngOnInit() {
    this.projectId = this._route.snapshot.paramMap.get("projectId") ?? "";
    if (!this.projectId) {
      void this._router.navigate(["/smart-access/projects"]);
      return;
    }
    this._loadProjectName();
    this.fetchRecords();
  }
  ngOnDestroy() {
    if (this._searchDebounce)
      clearTimeout(this._searchDebounce);
  }
  onSearchInput() {
    if (this._searchDebounce)
      clearTimeout(this._searchDebounce);
    this._searchDebounce = setTimeout(() => {
      this._searchDebounce = null;
      this.pageIndex = 0;
      this.fetchRecords();
    }, 400);
  }
  onStatusChange(value) {
    this.statusFilter.set(value);
    this.pageIndex = 0;
    this.fetchRecords();
  }
  onDatePresetChange(value) {
    this.datePreset.set(value);
    if (value !== "custom") {
      this.rangeStart.setValue(null, { emitEvent: false });
      this.rangeEnd.setValue(null, { emitEvent: false });
    }
    this.pageIndex = 0;
    this.fetchRecords();
  }
  onCustomRangeChange() {
    if (!this.rangeStart.value && !this.rangeEnd.value)
      return;
    this.datePreset.set("custom");
    this.pageIndex = 0;
    this.fetchRecords();
  }
  onSortChange(sort) {
    this.sortDirection.set(sort.direction === "asc" ? "asc" : "desc");
    this.pageIndex = 0;
    this.fetchRecords();
  }
  onPage(ev) {
    this.pageIndex = ev.pageIndex;
    this.pageSize = ev.pageSize;
    this.fetchRecords();
  }
  onPageSizeChange(pageSize) {
    if (!pageSize || pageSize === this.pageSize)
      return;
    this.pageIndex = 0;
    this.pageSize = pageSize;
    this.fetchRecords();
  }
  clearFilters() {
    this.searchInput = "";
    this.statusFilter.set("all");
    this.datePreset.set("all");
    this.rangeStart.setValue(null, { emitEvent: false });
    this.rangeEnd.setValue(null, { emitEvent: false });
    this.sortDirection.set("desc");
    this.pageIndex = 0;
    this.fetchRecords();
  }
  goToProject() {
    void this._router.navigate(["/smart-access/projects", this.projectId]);
  }
  goToList() {
    void this._router.navigate(["/smart-access/projects"]);
  }
  formatDate(date) {
    if (!date)
      return "\u2014";
    try {
      return DateTime.fromISO(date).toFormat("MMM dd, yyyy HH:mm");
    } catch {
      return date;
    }
  }
  _loadProjectName() {
    this._projectsService.getProject(this.projectId).subscribe({
      next: (p) => this.projectName.set(p?.name ?? null),
      error: () => this.projectName.set(null)
    });
  }
  fetchRecords() {
    this.loading.set(true);
    this.errorKey.set(null);
    const filters = __spreadValues({
      search: this.searchInput.trim() || void 0,
      status: this.statusFilter(),
      sort: this.sortDirection() === "asc" ? "createdAt" : "-createdAt"
    }, this._resolveDateRange());
    this._projectsService.listAppLogins(this.projectId, this.pageIndex + 1, this.pageSize, filters).subscribe({
      next: (res) => {
        this.dataSource = res.data ?? [];
        this.total.set(res.total ?? 0);
        this.loading.set(false);
      },
      error: () => {
        this.errorKey.set("smartAccessProjects.recordsLoadError");
        this.loading.set(false);
      }
    });
  }
  _resolveDateRange() {
    const preset = this.datePreset();
    if (preset === "all")
      return {};
    const now = DateTime.local();
    let from = null;
    let to = null;
    switch (preset) {
      case "today":
        from = now.startOf("day");
        to = now.endOf("day");
        break;
      case "thisWeek":
        from = now.startOf("week");
        to = now.endOf("week");
        break;
      case "lastWeek": {
        const lastWeek = now.minus({ weeks: 1 });
        from = lastWeek.startOf("week");
        to = lastWeek.endOf("week");
        break;
      }
      case "thisMonth":
        from = now.startOf("month");
        to = now.endOf("month");
        break;
      case "custom": {
        const start = this.rangeStart.value;
        const end = this.rangeEnd.value;
        if (start)
          from = start.startOf("day");
        if (end)
          to = end.endOf("day");
        break;
      }
    }
    const range = {};
    if (from?.isValid)
      range.createdFrom = from.toUTC().toISO() ?? void 0;
    if (to?.isValid)
      range.createdTo = to.toUTC().toISO() ?? void 0;
    return range;
  }
  static {
    this.\u0275fac = function AccessProjectRecordsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AccessProjectRecordsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AccessProjectRecordsComponent, selectors: [["smart-access-project-records"]], decls: 58, vars: 37, consts: [["picker", ""], [1, "flex", "min-h-screen", "min-w-0", "flex-auto", "flex-col", "bg-stone-50", "dark:bg-gray-950"], [1, "border-b", "border-stone-200/90", "bg-white/90", "px-5", "py-6", "backdrop-blur-sm", "dark:border-gray-800", "dark:bg-gray-950/90", "md:px-8", "md:py-8"], [1, "mx-auto", "max-w-6xl"], [1, "flex", "flex-wrap", "items-center", "text-xs", "font-medium", "leading-none", "text-stone-500", "dark:text-stone-400"], ["routerLink", "/chat", 1, "cursor-pointer", "text-stone-700", "underline-offset-4", "hover:underline", "dark:text-stone-300"], [1, "icon-size-4", "mx-2", "text-stone-400", 3, "svgIcon"], ["routerLink", "/smart-access/projects", 1, "cursor-pointer", "text-stone-700", "underline-offset-4", "hover:underline", "dark:text-stone-300"], [1, "cursor-pointer", "text-stone-700", "underline-offset-4", "hover:underline", "dark:text-stone-300", 3, "routerLink"], [1, "cursor-default", "text-stone-600", "dark:text-stone-300"], [1, "mt-5", "flex", "flex-wrap", "items-start", "justify-between", "gap-4"], [1, "flex", "min-w-0", "items-start", "gap-3"], ["mat-icon-button", "", "type", "button", 1, "shrink-0", "!text-stone-600", "dark:!text-stone-300", 3, "click"], [1, "min-w-0"], [1, "text-2xl", "font-semibold", "tracking-tight", "text-stone-900", "dark:text-white", "md:text-3xl"], [1, "mt-1", "text-sm", "text-stone-600", "dark:text-stone-400"], ["mat-stroked-button", "", "type", "button", 1, "shrink-0", "rounded-xl", 3, "click"], [1, "flex", "flex-auto", "flex-col", "px-5", "py-8", "md:px-8", "md:py-10"], [1, "mx-auto", "w-full", "max-w-6xl"], [1, "flex", "flex-col", "gap-3"], [1, "flex", "flex-wrap", "items-end", "gap-3"], ["appearance", "outline", "subscriptSizing", "dynamic", 1, "w-full", "max-w-md", "flex-1"], ["matPrefix", "", 1, "mr-2"], ["matInput", "", 3, "ngModelChange", "ngModel", "placeholder"], ["appearance", "outline", "subscriptSizing", "dynamic", 1, "w-full", "sm:w-56"], [3, "selectionChange", "value"], [3, "value"], ["mat-button", "", "type", "button", 1, "!text-stone-600", "dark:!text-stone-300"], [1, "!rounded-xl", "!border", "!border-stone-200/90", "dark:!border-gray-700", 3, "change", "value"], ["appearance", "outline", "subscriptSizing", "dynamic", 1, "w-full", "sm:w-72"], [1, "flex", "justify-center", "py-16"], [1, "mt-4", "rounded-2xl", "border", "border-red-200/90", "bg-red-50/90", "p-4", "text-sm", "text-red-800", "dark:border-red-900/50", "dark:bg-red-950/40", "dark:text-red-300"], ["mat-button", "", "type", "button", 1, "!text-stone-600", "dark:!text-stone-300", 3, "click"], [1, "mr-1"], [3, "rangePicker"], ["matStartDate", "", 3, "dateChange", "formControl", "placeholder"], ["matEndDate", "", 3, "dateChange", "formControl", "placeholder"], ["matIconSuffix", "", 3, "for"], ["diameter", "40"], [1, "mt-4", "overflow-auto", "rounded-2xl", "border", "border-stone-200/90", "dark:border-gray-700"], ["mat-table", "", "matSort", "", "matSortDisableClear", "", 1, "w-full", "bg-white", "dark:bg-gray-900/40", 3, "matSortChange", "dataSource", "matSortActive", "matSortDirection"], ["matColumnDef", "status"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "email"], ["matColumnDef", "phone"], ["matColumnDef", "createdAt"], ["mat-header-cell", "", "mat-sort-header", "createdAt", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", "class", "cursor-pointer transition-colors hover:bg-stone-50 dark:hover:bg-gray-800/60", 3, "routerLink", 4, "matRowDef", "matRowDefColumns"], [1, "py-12", "text-center", "text-sm", "text-stone-500", "dark:text-stone-400"], [1, "mt-4", "flex", "flex-wrap", "items-center", "justify-end", "gap-3"], [1, "flex", "items-center", "gap-2", "text-sm", "text-stone-500", "dark:text-stone-400"], [1, "rounded-lg", "border", "border-stone-200", "bg-white", "px-2", "py-1", "text-sm", "text-stone-800", "dark:border-gray-700", "dark:bg-gray-900", "dark:text-stone-200", 3, "change", "value"], [1, "rounded-xl", "border", "border-stone-200/90", "dark:border-gray-700", 3, "page", "length", "pageIndex", "pageSize", "hidePageSize"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-cell", "", "mat-sort-header", "createdAt"], ["mat-header-row", ""], ["mat-row", "", 1, "cursor-pointer", "transition-colors", "hover:bg-stone-50", "dark:hover:bg-gray-800/60", 3, "routerLink"]], template: function AccessProjectRecordsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "header", 2)(2, "div", 3)(3, "div", 4)(4, "a", 5);
        \u0275\u0275text(5, "Verifik");
        \u0275\u0275elementEnd();
        \u0275\u0275element(6, "mat-icon", 6);
        \u0275\u0275elementStart(7, "a", 7);
        \u0275\u0275text(8);
        \u0275\u0275pipe(9, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275element(10, "mat-icon", 6);
        \u0275\u0275elementStart(11, "a", 8);
        \u0275\u0275text(12);
        \u0275\u0275elementEnd();
        \u0275\u0275element(13, "mat-icon", 6);
        \u0275\u0275elementStart(14, "span", 9);
        \u0275\u0275text(15);
        \u0275\u0275pipe(16, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "div", 10)(18, "div", 11)(19, "button", 12);
        \u0275\u0275pipe(20, "transloco");
        \u0275\u0275listener("click", function AccessProjectRecordsComponent_Template_button_click_19_listener() {
          return ctx.goToProject();
        });
        \u0275\u0275elementStart(21, "mat-icon");
        \u0275\u0275text(22, "arrow_back");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "div", 13)(24, "h1", 14);
        \u0275\u0275text(25);
        \u0275\u0275pipe(26, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "p", 15);
        \u0275\u0275text(28);
        \u0275\u0275pipe(29, "transloco");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(30, "button", 16);
        \u0275\u0275listener("click", function AccessProjectRecordsComponent_Template_button_click_30_listener() {
          return ctx.goToList();
        });
        \u0275\u0275text(31);
        \u0275\u0275pipe(32, "transloco");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(33, "main", 17)(34, "div", 18)(35, "div", 19)(36, "div", 20)(37, "mat-form-field", 21)(38, "mat-icon", 22);
        \u0275\u0275text(39, "search");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "input", 23);
        \u0275\u0275pipe(41, "transloco");
        \u0275\u0275twoWayListener("ngModelChange", function AccessProjectRecordsComponent_Template_input_ngModelChange_40_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.searchInput, $event) || (ctx.searchInput = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function AccessProjectRecordsComponent_Template_input_ngModelChange_40_listener() {
          return ctx.onSearchInput();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(42, "mat-form-field", 24)(43, "mat-label");
        \u0275\u0275text(44);
        \u0275\u0275pipe(45, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "mat-select", 25);
        \u0275\u0275listener("selectionChange", function AccessProjectRecordsComponent_Template_mat_select_selectionChange_46_listener($event) {
          return ctx.onStatusChange($event.value);
        });
        \u0275\u0275repeaterCreate(47, AccessProjectRecordsComponent_For_48_Template, 3, 4, "mat-option", 26, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(49, AccessProjectRecordsComponent_Conditional_49_Template, 5, 3, "button", 27);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "div", 20)(51, "mat-button-toggle-group", 28);
        \u0275\u0275listener("change", function AccessProjectRecordsComponent_Template_mat_button_toggle_group_change_51_listener($event) {
          return ctx.onDatePresetChange($event.value);
        });
        \u0275\u0275repeaterCreate(52, AccessProjectRecordsComponent_For_53_Template, 3, 4, "mat-button-toggle", 26, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275template(54, AccessProjectRecordsComponent_Conditional_54_Template, 12, 13, "mat-form-field", 29);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(55, AccessProjectRecordsComponent_Conditional_55_Template, 2, 0, "div", 30)(56, AccessProjectRecordsComponent_Conditional_56_Template, 3, 3, "div", 31)(57, AccessProjectRecordsComponent_Conditional_57_Template, 26, 11);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275property("svgIcon", "heroicons_solid:chevron-right");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 19, "smartAccessProjects.title"));
        \u0275\u0275advance(2);
        \u0275\u0275property("svgIcon", "heroicons_solid:chevron-right");
        \u0275\u0275advance();
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(35, _c0, ctx.projectId));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.projectName() || ctx.projectId);
        \u0275\u0275advance();
        \u0275\u0275property("svgIcon", "heroicons_solid:chevron-right");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 21, "smartAccessProjects.recordsTitle"));
        \u0275\u0275advance(4);
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(20, 23, "smartAccessProjects.backToProject"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(26, 25, "smartAccessProjects.recordsTitle"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(29, 27, "smartAccessProjects.recordsSubtitle"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(32, 29, "smartAccessProjects.allProjects"), " ");
        \u0275\u0275advance(9);
        \u0275\u0275twoWayProperty("ngModel", ctx.searchInput);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(41, 31, "smartAccessProjects.searchRecords"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(45, 33, "smartAccessProjects.filterStatus"));
        \u0275\u0275advance(2);
        \u0275\u0275property("value", ctx.statusFilter());
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.statusOptions);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.activeFilterCount() > 0 ? 49 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275property("value", ctx.datePreset());
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.datePresets);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.datePreset() === "custom" ? 54 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading() ? 55 : ctx.errorKey() ? 56 : 57);
      }
    }, dependencies: [
      CommonModule,
      FormsModule,
      NgSelectOption,
      \u0275NgSelectMultipleOption,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      ReactiveFormsModule,
      FormControlDirective,
      RouterModule,
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
      MatPrefix,
      MatSuffix,
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
      TranslocoModule,
      TranslocoPipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccessProjectRecordsComponent, [{
    type: Component,
    args: [{ selector: "smart-access-project-records", standalone: true, imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule,
      MatButtonModule,
      MatButtonToggleModule,
      MatDatepickerModule,
      MatFormFieldModule,
      MatIconModule,
      MatInputModule,
      MatPaginatorModule,
      MatProgressSpinnerModule,
      MatSelectModule,
      MatSortModule,
      MatTableModule,
      TranslocoModule
    ], template: `<div class="flex min-h-screen min-w-0 flex-auto flex-col bg-stone-50 dark:bg-gray-950">\r
    <header\r
        class="border-b border-stone-200/90 bg-white/90 px-5 py-6 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-950/90 md:px-8 md:py-8"\r
    >\r
        <div class="mx-auto max-w-6xl">\r
            <div class="flex flex-wrap items-center text-xs font-medium leading-none text-stone-500 dark:text-stone-400">\r
                <a routerLink="/chat" class="cursor-pointer text-stone-700 underline-offset-4 hover:underline dark:text-stone-300">Verifik</a>\r
                <mat-icon class="icon-size-4 mx-2 text-stone-400" [svgIcon]="'heroicons_solid:chevron-right'"></mat-icon>\r
                <a\r
                    routerLink="/smart-access/projects"\r
                    class="cursor-pointer text-stone-700 underline-offset-4 hover:underline dark:text-stone-300"\r
                    >{{ 'smartAccessProjects.title' | transloco }}</a\r
                >\r
                <mat-icon class="icon-size-4 mx-2 text-stone-400" [svgIcon]="'heroicons_solid:chevron-right'"></mat-icon>\r
                <a\r
                    [routerLink]="['/smart-access/projects', projectId]"\r
                    class="cursor-pointer text-stone-700 underline-offset-4 hover:underline dark:text-stone-300"\r
                    >{{ projectName() || projectId }}</a\r
                >\r
                <mat-icon class="icon-size-4 mx-2 text-stone-400" [svgIcon]="'heroicons_solid:chevron-right'"></mat-icon>\r
                <span class="cursor-default text-stone-600 dark:text-stone-300">{{ 'smartAccessProjects.recordsTitle' | transloco }}</span>\r
            </div>\r
            <div class="mt-5 flex flex-wrap items-start justify-between gap-4">\r
                <div class="flex min-w-0 items-start gap-3">\r
                    <button\r
                        mat-icon-button\r
                        type="button"\r
                        (click)="goToProject()"\r
                        class="shrink-0 !text-stone-600 dark:!text-stone-300"\r
                        [attr.aria-label]="'smartAccessProjects.backToProject' | transloco"\r
                    >\r
                        <mat-icon>arrow_back</mat-icon>\r
                    </button>\r
                    <div class="min-w-0">\r
                        <h1 class="text-2xl font-semibold tracking-tight text-stone-900 dark:text-white md:text-3xl">\r
                            {{ 'smartAccessProjects.recordsTitle' | transloco }}\r
                        </h1>\r
                        <p class="mt-1 text-sm text-stone-600 dark:text-stone-400">{{ 'smartAccessProjects.recordsSubtitle' | transloco }}</p>\r
                    </div>\r
                </div>\r
                <button mat-stroked-button type="button" class="shrink-0 rounded-xl" (click)="goToList()">\r
                    {{ 'smartAccessProjects.allProjects' | transloco }}\r
                </button>\r
            </div>\r
        </div>\r
    </header>\r
\r
    <main class="flex flex-auto flex-col px-5 py-8 md:px-8 md:py-10">\r
        <div class="mx-auto w-full max-w-6xl">\r
            <div class="flex flex-col gap-3">\r
                <div class="flex flex-wrap items-end gap-3">\r
                    <mat-form-field appearance="outline" class="w-full max-w-md flex-1" subscriptSizing="dynamic">\r
                        <mat-icon matPrefix class="mr-2">search</mat-icon>\r
                        <input\r
                            matInput\r
                            [(ngModel)]="searchInput"\r
                            (ngModelChange)="onSearchInput()"\r
                            [placeholder]="'smartAccessProjects.searchRecords' | transloco"\r
                        />\r
                    </mat-form-field>\r
\r
                    <mat-form-field appearance="outline" class="w-full sm:w-56" subscriptSizing="dynamic">\r
                        <mat-label>{{ 'smartAccessProjects.filterStatus' | transloco }}</mat-label>\r
                        <mat-select [value]="statusFilter()" (selectionChange)="onStatusChange($event.value)">\r
                            @for (option of statusOptions; track option) {\r
                                <mat-option [value]="option">\r
                                    {{ 'smartAccessProjects.status.' + option | transloco }}\r
                                </mat-option>\r
                            }\r
                        </mat-select>\r
                    </mat-form-field>\r
\r
                    @if (activeFilterCount() > 0) {\r
                        <button mat-button type="button" class="!text-stone-600 dark:!text-stone-300" (click)="clearFilters()">\r
                            <mat-icon class="mr-1">close</mat-icon>\r
                            {{ 'smartAccessProjects.clearFilters' | transloco }}\r
                        </button>\r
                    }\r
                </div>\r
\r
                <div class="flex flex-wrap items-end gap-3">\r
                    <mat-button-toggle-group\r
                        [value]="datePreset()"\r
                        (change)="onDatePresetChange($event.value)"\r
                        class="!rounded-xl !border !border-stone-200/90 dark:!border-gray-700"\r
                    >\r
                        @for (preset of datePresets; track preset) {\r
                            <mat-button-toggle [value]="preset">\r
                                {{ 'smartAccessProjects.datePreset.' + preset | transloco }}\r
                            </mat-button-toggle>\r
                        }\r
                    </mat-button-toggle-group>\r
\r
                    @if (datePreset() === 'custom') {\r
                        <mat-form-field appearance="outline" class="w-full sm:w-72" subscriptSizing="dynamic">\r
                            <mat-label>{{ 'smartAccessProjects.dateRange' | transloco }}</mat-label>\r
                            <mat-date-range-input [rangePicker]="picker">\r
                                <input\r
                                    matStartDate\r
                                    [formControl]="rangeStart"\r
                                    (dateChange)="onCustomRangeChange()"\r
                                    [placeholder]="'smartAccessProjects.dateStart' | transloco"\r
                                />\r
                                <input\r
                                    matEndDate\r
                                    [formControl]="rangeEnd"\r
                                    (dateChange)="onCustomRangeChange()"\r
                                    [placeholder]="'smartAccessProjects.dateEnd' | transloco"\r
                                />\r
                            </mat-date-range-input>\r
                            <mat-datepicker-toggle matIconSuffix [for]="picker"></mat-datepicker-toggle>\r
                            <mat-date-range-picker #picker></mat-date-range-picker>\r
                        </mat-form-field>\r
                    }\r
                </div>\r
            </div>\r
\r
            @if (loading()) {\r
                <div class="flex justify-center py-16">\r
                    <mat-spinner diameter="40"></mat-spinner>\r
                </div>\r
            } @else if (errorKey()) {\r
                <div\r
                    class="mt-4 rounded-2xl border border-red-200/90 bg-red-50/90 p-4 text-sm text-red-800 dark:border-red-900/50 dark:bg-red-950/40 dark:text-red-300"\r
                >\r
                    {{ errorKey()! | transloco }}\r
                </div>\r
            } @else {\r
                <div class="mt-4 overflow-auto rounded-2xl border border-stone-200/90 dark:border-gray-700">\r
                    <table\r
                        mat-table\r
                        [dataSource]="dataSource"\r
                        matSort\r
                        [matSortActive]="'createdAt'"\r
                        [matSortDirection]="sortDirection()"\r
                        matSortDisableClear\r
                        (matSortChange)="onSortChange($event)"\r
                        class="w-full bg-white dark:bg-gray-900/40"\r
                    >\r
                        <ng-container matColumnDef="status">\r
                            <th mat-header-cell *matHeaderCellDef>{{ 'smartAccessProjects.colStatus' | transloco }}</th>\r
                            <td mat-cell *matCellDef="let row">{{ row.status ?? '\u2014' }}</td>\r
                        </ng-container>\r
                        <ng-container matColumnDef="name">\r
                            <th mat-header-cell *matHeaderCellDef>{{ 'smartAccessProjects.colName' | transloco }}</th>\r
                            <td mat-cell *matCellDef="let row">{{ row.name ?? '\u2014' }}</td>\r
                        </ng-container>\r
                        <ng-container matColumnDef="email">\r
                            <th mat-header-cell *matHeaderCellDef>{{ 'smartAccessProjects.colEmail' | transloco }}</th>\r
                            <td mat-cell *matCellDef="let row">{{ row.email ?? '\u2014' }}</td>\r
                        </ng-container>\r
                        <ng-container matColumnDef="phone">\r
                            <th mat-header-cell *matHeaderCellDef>{{ 'smartAccessProjects.colPhone' | transloco }}</th>\r
                            <td mat-cell *matCellDef="let row">{{ row.phone ?? '\u2014' }}</td>\r
                        </ng-container>\r
                        <ng-container matColumnDef="createdAt">\r
                            <th mat-header-cell *matHeaderCellDef mat-sort-header="createdAt">\r
                                {{ 'smartAccessProjects.colCreated' | transloco }}\r
                            </th>\r
                            <td mat-cell *matCellDef="let row">{{ formatDate(row.createdAt) }}</td>\r
                        </ng-container>\r
                        <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>\r
                        <tr\r
                            mat-row\r
                            *matRowDef="let row; columns: displayedColumns"\r
                            class="cursor-pointer transition-colors hover:bg-stone-50 dark:hover:bg-gray-800/60"\r
                            [routerLink]="['/smart-access/projects', projectId, 'records', row._id]"\r
                        ></tr>\r
                    </table>\r
                    @if (dataSource.length === 0) {\r
                        <div class="py-12 text-center text-sm text-stone-500 dark:text-stone-400">\r
                            {{ 'smartAccessProjects.recordsEmpty' | transloco }}\r
                        </div>\r
                    }\r
                </div>\r
                <div class="mt-4 flex flex-wrap items-center justify-end gap-3">\r
                    <label class="flex items-center gap-2 text-sm text-stone-500 dark:text-stone-400">\r
                        <select\r
                            class="rounded-lg border border-stone-200 bg-white px-2 py-1 text-sm text-stone-800 dark:border-gray-700 dark:bg-gray-900 dark:text-stone-200"\r
                            [value]="pageSize"\r
                            (change)="onPageSizeChange(+$any($event.target).value)"\r
                        >\r
                            @for (size of pageSizeOptions; track size) {\r
                                <option [value]="size">{{ size }}</option>\r
                            }\r
                        </select>\r
                    </label>\r
                    <mat-paginator\r
                        class="rounded-xl border border-stone-200/90 dark:border-gray-700"\r
                        [length]="total()"\r
                        [pageIndex]="pageIndex"\r
                        [pageSize]="pageSize"\r
                        [hidePageSize]="true"\r
                        (page)="onPage($event)"\r
                    ></mat-paginator>\r
                </div>\r
            }\r
        </div>\r
    </main>\r
</div>\r
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AccessProjectRecordsComponent, { className: "AccessProjectRecordsComponent", filePath: "src/app/modules/smart-access/projects/project-records/access-project-records.component.ts", lineNumber: 60 });
})();
export {
  AccessProjectRecordsComponent
};
//# sourceMappingURL=chunk-I75M2Z33.js.map
