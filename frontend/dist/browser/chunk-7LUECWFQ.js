import {
  pickEnrollmentFaceMedia
} from "./chunk-YRZJJKLO.js";
import {
  SmartEnrollProjectsService
} from "./chunk-G6Z2XQBQ.js";
import {
  MatSort,
  MatSortHeader,
  MatSortModule
} from "./chunk-YN6DFW3O.js";
import {
  MatDateRangeInput,
  MatDateRangePicker,
  MatDatepickerModule,
  MatDatepickerToggle,
  MatEndDate,
  MatStartDate
} from "./chunk-FJ77QTX4.js";
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
  MatButtonToggle,
  MatButtonToggleGroup,
  MatButtonToggleModule
} from "./chunk-QLWSC7E3.js";
import {
  MatPaginator,
  MatPaginatorModule
} from "./chunk-ERZBGJ7Y.js";
import {
  DateTime
} from "./chunk-KW3PRW6P.js";
import "./chunk-XGUHZE77.js";
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
  MatPrefix,
  MatSuffix
} from "./chunk-HWNQWMK7.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-UUIVQBYS.js";
import "./chunk-OIBNGD5S.js";
import "./chunk-WOW6NB5H.js";
import {
  MatButton,
  MatButtonModule,
  MatIconButton
} from "./chunk-YSJP7SXK.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-CQIQSUBU.js";
import "./chunk-J762DGD5.js";
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
} from "./chunk-DVRFI3SJ.js";
import {
  TranslocoModule,
  TranslocoPipe
} from "./chunk-R5W3A6HI.js";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-HYFP557I.js";
import "./chunk-PMCYMBOC.js";
import {
  CommonModule,
  Component,
  DomSanitizer,
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
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-PNPEHISK.js";
import {
  __spreadValues
} from "./chunk-F5M2C4EZ.js";

// src/app/modules/smart-enroll/projects/project-records/project-records.component.ts
var _c0 = (a0) => ["/smart-enroll/projects", a0];
var _c1 = (a0, a1) => ["/smart-enroll/projects", a0, "records", a1];
function ProjectRecordsComponent_For_48_Template(rf, ctx) {
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
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "smartEnrollProjects.status." + option_r1), " ");
  }
}
function ProjectRecordsComponent_For_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 26);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r2 = ctx.$implicit;
    \u0275\u0275property("value", option_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "smartEnrollProjects.step." + option_r2), " ");
  }
}
function ProjectRecordsComponent_Conditional_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 32);
    \u0275\u0275listener("click", function ProjectRecordsComponent_Conditional_56_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.clearFilters());
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
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "smartEnrollProjects.clearFilters"), " ");
  }
}
function ProjectRecordsComponent_For_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-button-toggle", 26);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const preset_r5 = ctx.$implicit;
    \u0275\u0275property("value", preset_r5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "smartEnrollProjects.datePreset." + preset_r5), " ");
  }
}
function ProjectRecordsComponent_Conditional_61_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 29)(1, "mat-label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-date-range-input", 34)(5, "input", 35);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275listener("dateChange", function ProjectRecordsComponent_Conditional_61_Template_input_dateChange_5_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onCustomRangeChange());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 36);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275listener("dateChange", function ProjectRecordsComponent_Conditional_61_Template_input_dateChange_7_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onCustomRangeChange());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275element(9, "mat-datepicker-toggle", 37)(10, "mat-date-range-picker", null, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const picker_r7 = \u0275\u0275reference(11);
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 7, "smartEnrollProjects.dateRange"));
    \u0275\u0275advance(2);
    \u0275\u0275property("rangePicker", picker_r7);
    \u0275\u0275advance();
    \u0275\u0275property("formControl", ctx_r3.rangeStart)("placeholder", \u0275\u0275pipeBind1(6, 9, "smartEnrollProjects.dateStart"));
    \u0275\u0275advance(2);
    \u0275\u0275property("formControl", ctx_r3.rangeEnd)("placeholder", \u0275\u0275pipeBind1(8, 11, "smartEnrollProjects.dateEnd"));
    \u0275\u0275advance(2);
    \u0275\u0275property("for", picker_r7);
  }
}
function ProjectRecordsComponent_Conditional_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275element(1, "mat-spinner", 38);
    \u0275\u0275elementEnd();
  }
}
function ProjectRecordsComponent_Conditional_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, ctx_r3.errorKey()), " ");
  }
}
function ProjectRecordsComponent_Conditional_64_th_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 59);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275elementStart(2, "span", 60);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 2, "smartEnrollProjects.colPhoto"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 4, "smartEnrollProjects.colPhoto"));
  }
}
function ProjectRecordsComponent_Conditional_64_td_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 62);
  }
  if (rf & 2) {
    \u0275\u0275property("src", ctx, \u0275\u0275sanitizeUrl);
  }
}
function ProjectRecordsComponent_Conditional_64_td_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63)(1, "mat-icon", 64);
    \u0275\u0275text(2, "person");
    \u0275\u0275elementEnd()();
  }
}
function ProjectRecordsComponent_Conditional_64_td_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 61);
    \u0275\u0275template(1, ProjectRecordsComponent_Conditional_64_td_4_Conditional_1_Template, 1, 1, "img", 62)(2, ProjectRecordsComponent_Conditional_64_td_4_Conditional_2_Template, 3, 0, "div", 63);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const row_r9 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_3_0 = ctx_r3.rowAvatarSrc(row_r9)) ? 1 : 2, tmp_3_0);
  }
}
function ProjectRecordsComponent_Conditional_64_th_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 65);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "smartEnrollProjects.colStatus"));
  }
}
function ProjectRecordsComponent_Conditional_64_td_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 66);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const row_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((tmp_3_0 = row_r10.status) !== null && tmp_3_0 !== void 0 ? tmp_3_0 : "\u2014");
  }
}
function ProjectRecordsComponent_Conditional_64_th_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 65);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "smartEnrollProjects.colStep"));
  }
}
function ProjectRecordsComponent_Conditional_64_td_10_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, ctx), " ");
  }
}
function ProjectRecordsComponent_Conditional_64_td_10_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const row_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", row_r11.currentStep, " ");
  }
}
function ProjectRecordsComponent_Conditional_64_td_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 66);
    \u0275\u0275template(1, ProjectRecordsComponent_Conditional_64_td_10_Conditional_1_Template, 2, 3)(2, ProjectRecordsComponent_Conditional_64_td_10_Conditional_2_Template, 1, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const row_r11 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_3_0 = ctx_r3.stepLabelKey(row_r11.currentStep)) ? 1 : 2, tmp_3_0);
  }
}
function ProjectRecordsComponent_Conditional_64_th_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 65);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "smartEnrollProjects.colEmail"));
  }
}
function ProjectRecordsComponent_Conditional_64_td_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 66);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r12 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.displayEmail(row_r12));
  }
}
function ProjectRecordsComponent_Conditional_64_th_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 65);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "smartEnrollProjects.colPhone"));
  }
}
function ProjectRecordsComponent_Conditional_64_td_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 66);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r13 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.displayPhone(row_r13));
  }
}
function ProjectRecordsComponent_Conditional_64_th_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 67);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "smartEnrollProjects.colCreated"), " ");
  }
}
function ProjectRecordsComponent_Conditional_64_td_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 66);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r14 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.formatDate(row_r14.createdAt));
  }
}
function ProjectRecordsComponent_Conditional_64_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 68);
  }
}
function ProjectRecordsComponent_Conditional_64_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 69);
  }
  if (rf & 2) {
    const row_r15 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction2(1, _c1, ctx_r3.projectId, row_r15._id));
  }
}
function ProjectRecordsComponent_Conditional_64_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "smartEnrollProjects.recordsEmpty"), " ");
  }
}
function ProjectRecordsComponent_Conditional_64_For_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const size_r16 = ctx.$implicit;
    \u0275\u0275property("value", size_r16);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(size_r16);
  }
}
function ProjectRecordsComponent_Conditional_64_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 39)(1, "table", 40);
    \u0275\u0275listener("matSortChange", function ProjectRecordsComponent_Conditional_64_Template_table_matSortChange_1_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onSortChange($event));
    });
    \u0275\u0275elementContainerStart(2, 41);
    \u0275\u0275template(3, ProjectRecordsComponent_Conditional_64_th_3_Template, 5, 6, "th", 42)(4, ProjectRecordsComponent_Conditional_64_td_4_Template, 3, 1, "td", 43);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(5, 44);
    \u0275\u0275template(6, ProjectRecordsComponent_Conditional_64_th_6_Template, 3, 3, "th", 45)(7, ProjectRecordsComponent_Conditional_64_td_7_Template, 2, 1, "td", 46);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(8, 47);
    \u0275\u0275template(9, ProjectRecordsComponent_Conditional_64_th_9_Template, 3, 3, "th", 45)(10, ProjectRecordsComponent_Conditional_64_td_10_Template, 3, 1, "td", 46);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(11, 48);
    \u0275\u0275template(12, ProjectRecordsComponent_Conditional_64_th_12_Template, 3, 3, "th", 45)(13, ProjectRecordsComponent_Conditional_64_td_13_Template, 2, 1, "td", 46);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(14, 49);
    \u0275\u0275template(15, ProjectRecordsComponent_Conditional_64_th_15_Template, 3, 3, "th", 45)(16, ProjectRecordsComponent_Conditional_64_td_16_Template, 2, 1, "td", 46);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(17, 50);
    \u0275\u0275template(18, ProjectRecordsComponent_Conditional_64_th_18_Template, 3, 3, "th", 51)(19, ProjectRecordsComponent_Conditional_64_td_19_Template, 2, 1, "td", 46);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(20, ProjectRecordsComponent_Conditional_64_tr_20_Template, 1, 0, "tr", 52)(21, ProjectRecordsComponent_Conditional_64_tr_21_Template, 1, 4, "tr", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275template(22, ProjectRecordsComponent_Conditional_64_Conditional_22_Template, 3, 3, "div", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 55)(24, "label", 56)(25, "select", 57);
    \u0275\u0275listener("change", function ProjectRecordsComponent_Conditional_64_Template_select_change_25_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onPageSizeChange(+$event.target.value));
    });
    \u0275\u0275repeaterCreate(26, ProjectRecordsComponent_Conditional_64_For_27_Template, 2, 2, "option", 26, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "mat-paginator", 58);
    \u0275\u0275listener("page", function ProjectRecordsComponent_Conditional_64_Template_mat_paginator_page_28_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onPage($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("dataSource", ctx_r3.dataSource)("matSortActive", "createdAt")("matSortDirection", ctx_r3.sortDirection());
    \u0275\u0275advance(19);
    \u0275\u0275property("matHeaderRowDef", ctx_r3.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx_r3.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.dataSource.length === 0 ? 22 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275property("value", ctx_r3.pageSize);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.pageSizeOptions);
    \u0275\u0275advance(2);
    \u0275\u0275property("length", ctx_r3.total())("pageIndex", ctx_r3.pageIndex)("pageSize", ctx_r3.pageSize)("hidePageSize", true);
  }
}
var STATUS_OPTIONS = [
  "all",
  "STARTED",
  "ONGOING",
  "COMPLETED",
  "COMPLETED_WITHOUT_KYC",
  "NEEDS_MANUAL_VERIFICATION",
  "FAILED",
  "EXPIRED"
];
var STEP_OPTIONS = [
  "all",
  "1",
  "instructions",
  "signUpForm",
  "basicInformation",
  "document",
  "liveness",
  "form",
  "end",
  "skipKYC"
];
var DATE_PRESETS = ["all", "today", "thisWeek", "lastWeek", "thisMonth", "custom"];
var ProjectRecordsComponent = class _ProjectRecordsComponent {
  constructor() {
    this._route = inject(ActivatedRoute);
    this._router = inject(Router);
    this._projectsService = inject(SmartEnrollProjectsService);
    this._sanitizer = inject(DomSanitizer);
    this._searchDebounce = null;
    this.statusOptions = STATUS_OPTIONS;
    this.stepOptions = STEP_OPTIONS;
    this.datePresets = DATE_PRESETS;
    this.displayedColumns = ["photo", "status", "currentStep", "email", "phone", "createdAt"];
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
    this.stepFilter = signal("all");
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
      if (this.stepFilter() !== "all")
        count += 1;
      if (this.datePreset() !== "all")
        count += 1;
      return count;
    });
  }
  ngOnInit() {
    this.projectId = this._route.snapshot.paramMap.get("projectId") ?? "";
    const step = this._route.snapshot.queryParamMap.get("step");
    if (step)
      this.stepFilter.set(step);
    if (!this.projectId) {
      this._router.navigate(["/smart-enroll/projects"]);
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
  onStepChange(value) {
    this.stepFilter.set(value);
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
    this.stepFilter.set("all");
    this.datePreset.set("all");
    this.rangeStart.setValue(null, { emitEvent: false });
    this.rangeEnd.setValue(null, { emitEvent: false });
    this.sortDirection.set("desc");
    this.pageIndex = 0;
    this.fetchRecords();
  }
  goToProject() {
    this._router.navigate(["/smart-enroll/projects", this.projectId]);
  }
  goToList() {
    this._router.navigate(["/smart-enroll/projects"]);
  }
  formatDate(date) {
    if (!date)
      return "\u2014";
    return DateTime.fromISO(date).toFormat("MMM dd, yyyy HH:mm");
  }
  /**
   * Translation key for a step value. Anything the backend adds later falls back to the raw
   * value rather than rendering an empty cell.
   */
  stepLabelKey(step) {
    if (!step)
      return "smartEnrollProjects.step.1";
    return STEP_OPTIONS.includes(step) ? `smartEnrollProjects.step.${step}` : "";
  }
  displayEmail(row) {
    return row.emailValidation?.email ?? "\u2014";
  }
  displayPhone(row) {
    const p = row.phoneValidation;
    if (!p?.phone)
      return "\u2014";
    return p.countryCode ? `${p.countryCode} ${p.phone}` : p.phone;
  }
  rowAvatarSrc(row) {
    const f = pickEnrollmentFaceMedia(row);
    if (!f)
      return null;
    if (f.base64) {
      const cleaned = (f.base64 || "").replace(/^data:.*;base64,/, "");
      return this._sanitizer.bypassSecurityTrustUrl(`data:image/jpeg;base64,${cleaned}`);
    }
    if (f.url)
      return this._sanitizer.bypassSecurityTrustUrl(f.url);
    return null;
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
      currentStep: this.stepFilter(),
      sort: this.sortDirection() === "asc" ? "createdAt" : "-createdAt"
    }, this._resolveDateRange());
    this._projectsService.listAppRegistrations(this.projectId, this.pageIndex + 1, this.pageSize, filters).subscribe({
      next: (res) => {
        this.dataSource = res.data ?? [];
        this.total.set(res.total ?? 0);
        this.loading.set(false);
      },
      error: () => {
        this.errorKey.set("smartEnrollProjects.recordsLoadError");
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
    this.\u0275fac = function ProjectRecordsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProjectRecordsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProjectRecordsComponent, selectors: [["project-records"]], decls: 65, vars: 41, consts: [["picker", ""], [1, "flex", "min-h-screen", "min-w-0", "flex-auto", "flex-col", "bg-stone-50", "dark:bg-gray-950"], [1, "border-b", "border-stone-200/90", "bg-white/90", "px-5", "py-6", "backdrop-blur-sm", "dark:border-gray-800", "dark:bg-gray-950/90", "md:px-8", "md:py-8"], [1, "mx-auto", "max-w-6xl"], [1, "flex", "flex-wrap", "items-center", "text-xs", "font-medium", "leading-none", "text-stone-500", "dark:text-stone-400"], ["routerLink", "/chat", 1, "cursor-pointer", "text-stone-700", "underline-offset-4", "hover:underline", "dark:text-stone-300"], [1, "icon-size-4", "mx-2", "text-stone-400", 3, "svgIcon"], ["routerLink", "/smart-enroll/projects", 1, "cursor-pointer", "text-stone-700", "underline-offset-4", "hover:underline", "dark:text-stone-300"], [1, "cursor-pointer", "text-stone-700", "underline-offset-4", "hover:underline", "dark:text-stone-300", 3, "routerLink"], [1, "cursor-default", "text-stone-600", "dark:text-stone-300"], [1, "mt-5", "flex", "flex-wrap", "items-start", "justify-between", "gap-4"], [1, "flex", "min-w-0", "items-start", "gap-3"], ["mat-icon-button", "", "type", "button", 1, "shrink-0", "!text-stone-600", "dark:!text-stone-300", 3, "click"], [1, "min-w-0"], [1, "text-2xl", "font-semibold", "tracking-tight", "text-stone-900", "dark:text-white", "md:text-3xl"], [1, "mt-1", "text-sm", "text-stone-600", "dark:text-stone-400"], ["mat-stroked-button", "", "type", "button", 1, "shrink-0", "rounded-xl", 3, "click"], [1, "flex", "flex-auto", "flex-col", "px-5", "py-8", "md:px-8", "md:py-10"], [1, "mx-auto", "w-full", "max-w-6xl"], [1, "flex", "flex-col", "gap-3"], [1, "flex", "flex-wrap", "items-end", "gap-3"], ["appearance", "outline", "subscriptSizing", "dynamic", 1, "w-full", "max-w-md", "flex-1"], ["matPrefix", "", 1, "mr-2"], ["matInput", "", 3, "ngModelChange", "ngModel", "placeholder"], ["appearance", "outline", "subscriptSizing", "dynamic", 1, "w-full", "sm:w-56"], [3, "selectionChange", "value"], [3, "value"], ["mat-button", "", "type", "button", 1, "!text-stone-600", "dark:!text-stone-300"], [1, "!rounded-xl", "!border", "!border-stone-200/90", "dark:!border-gray-700", 3, "change", "value"], ["appearance", "outline", "subscriptSizing", "dynamic", 1, "w-full", "sm:w-72"], [1, "flex", "justify-center", "py-16"], [1, "mt-4", "rounded-2xl", "border", "border-red-200/90", "bg-red-50/90", "p-4", "text-sm", "text-red-800", "dark:border-red-900/50", "dark:bg-red-950/40", "dark:text-red-300"], ["mat-button", "", "type", "button", 1, "!text-stone-600", "dark:!text-stone-300", 3, "click"], [1, "mr-1"], [3, "rangePicker"], ["matStartDate", "", 3, "dateChange", "formControl", "placeholder"], ["matEndDate", "", 3, "dateChange", "formControl", "placeholder"], ["matIconSuffix", "", 3, "for"], ["diameter", "40"], [1, "mt-4", "overflow-auto", "rounded-2xl", "border", "border-stone-200/90", "dark:border-gray-700"], ["mat-table", "", "matSort", "", "matSortDisableClear", "", 1, "w-full", "bg-white", "dark:bg-gray-900/40", 3, "matSortChange", "dataSource", "matSortActive", "matSortDirection"], ["matColumnDef", "photo"], ["mat-header-cell", "", "class", "w-14 pr-0", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "w-14 pr-2 align-middle", 4, "matCellDef"], ["matColumnDef", "status"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "currentStep"], ["matColumnDef", "email"], ["matColumnDef", "phone"], ["matColumnDef", "createdAt"], ["mat-header-cell", "", "mat-sort-header", "createdAt", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", "class", "cursor-pointer transition-colors hover:bg-stone-50 dark:hover:bg-gray-800/60", 3, "routerLink", 4, "matRowDef", "matRowDefColumns"], [1, "py-12", "text-center", "text-sm", "text-stone-500", "dark:text-stone-400"], [1, "mt-4", "flex", "flex-wrap", "items-center", "justify-end", "gap-3"], [1, "flex", "items-center", "gap-2", "text-sm", "text-stone-500", "dark:text-stone-400"], [1, "rounded-lg", "border", "border-stone-200", "bg-white", "px-2", "py-1", "text-sm", "text-stone-800", "dark:border-gray-700", "dark:bg-gray-900", "dark:text-stone-200", 3, "change", "value"], [1, "rounded-xl", "border", "border-stone-200/90", "dark:border-gray-700", 3, "page", "length", "pageIndex", "pageSize", "hidePageSize"], ["mat-header-cell", "", 1, "w-14", "pr-0"], [1, "sr-only"], ["mat-cell", "", 1, "w-14", "pr-2", "align-middle"], ["alt", "", "loading", "lazy", "decoding", "async", 1, "h-10", "w-10", "shrink-0", "rounded-full", "border", "border-stone-200/90", "object-cover", "dark:border-gray-600", 3, "src"], ["aria-hidden", "true", 1, "flex", "h-10", "w-10", "shrink-0", "items-center", "justify-center", "rounded-full", "border", "border-dashed", "border-stone-300/90", "bg-stone-100/80", "dark:border-gray-600", "dark:bg-gray-800/60"], [1, "!h-5", "!w-5", "text-stone-400", "dark:text-stone-500"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-cell", "", "mat-sort-header", "createdAt"], ["mat-header-row", ""], ["mat-row", "", 1, "cursor-pointer", "transition-colors", "hover:bg-stone-50", "dark:hover:bg-gray-800/60", 3, "routerLink"]], template: function ProjectRecordsComponent_Template(rf, ctx) {
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
        \u0275\u0275listener("click", function ProjectRecordsComponent_Template_button_click_19_listener() {
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
        \u0275\u0275listener("click", function ProjectRecordsComponent_Template_button_click_30_listener() {
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
        \u0275\u0275twoWayListener("ngModelChange", function ProjectRecordsComponent_Template_input_ngModelChange_40_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.searchInput, $event) || (ctx.searchInput = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function ProjectRecordsComponent_Template_input_ngModelChange_40_listener() {
          return ctx.onSearchInput();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(42, "mat-form-field", 24)(43, "mat-label");
        \u0275\u0275text(44);
        \u0275\u0275pipe(45, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "mat-select", 25);
        \u0275\u0275listener("selectionChange", function ProjectRecordsComponent_Template_mat_select_selectionChange_46_listener($event) {
          return ctx.onStatusChange($event.value);
        });
        \u0275\u0275repeaterCreate(47, ProjectRecordsComponent_For_48_Template, 3, 4, "mat-option", 26, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(49, "mat-form-field", 24)(50, "mat-label");
        \u0275\u0275text(51);
        \u0275\u0275pipe(52, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "mat-select", 25);
        \u0275\u0275listener("selectionChange", function ProjectRecordsComponent_Template_mat_select_selectionChange_53_listener($event) {
          return ctx.onStepChange($event.value);
        });
        \u0275\u0275repeaterCreate(54, ProjectRecordsComponent_For_55_Template, 3, 4, "mat-option", 26, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(56, ProjectRecordsComponent_Conditional_56_Template, 5, 3, "button", 27);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "div", 20)(58, "mat-button-toggle-group", 28);
        \u0275\u0275listener("change", function ProjectRecordsComponent_Template_mat_button_toggle_group_change_58_listener($event) {
          return ctx.onDatePresetChange($event.value);
        });
        \u0275\u0275repeaterCreate(59, ProjectRecordsComponent_For_60_Template, 3, 4, "mat-button-toggle", 26, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275template(61, ProjectRecordsComponent_Conditional_61_Template, 12, 13, "mat-form-field", 29);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(62, ProjectRecordsComponent_Conditional_62_Template, 2, 0, "div", 30)(63, ProjectRecordsComponent_Conditional_63_Template, 3, 3, "div", 31)(64, ProjectRecordsComponent_Conditional_64_Template, 29, 11);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275property("svgIcon", "heroicons_solid:chevron-right");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 21, "smartEnrollProjects.title"));
        \u0275\u0275advance(2);
        \u0275\u0275property("svgIcon", "heroicons_solid:chevron-right");
        \u0275\u0275advance();
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(39, _c0, ctx.projectId));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.projectName() || ctx.projectId);
        \u0275\u0275advance();
        \u0275\u0275property("svgIcon", "heroicons_solid:chevron-right");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 23, "smartEnrollProjects.recordsTitle"));
        \u0275\u0275advance(4);
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(20, 25, "smartEnrollProjects.backToProject"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(26, 27, "smartEnrollProjects.recordsTitle"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(29, 29, "smartEnrollProjects.recordsSubtitle"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(32, 31, "smartEnrollProjects.allProjects"), " ");
        \u0275\u0275advance(9);
        \u0275\u0275twoWayProperty("ngModel", ctx.searchInput);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(41, 33, "smartEnrollProjects.searchRecords"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(45, 35, "smartEnrollProjects.filterStatus"));
        \u0275\u0275advance(2);
        \u0275\u0275property("value", ctx.statusFilter());
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.statusOptions);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(52, 37, "smartEnrollProjects.filterStep"));
        \u0275\u0275advance(2);
        \u0275\u0275property("value", ctx.stepFilter());
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.stepOptions);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.activeFilterCount() > 0 ? 56 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275property("value", ctx.datePreset());
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.datePresets);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.datePreset() === "custom" ? 61 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading() ? 62 : ctx.errorKey() ? 63 : 64);
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProjectRecordsComponent, [{
    type: Component,
    args: [{ selector: "project-records", standalone: true, imports: [
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
                    routerLink="/smart-enroll/projects"\r
                    class="cursor-pointer text-stone-700 underline-offset-4 hover:underline dark:text-stone-300"\r
                    >{{ 'smartEnrollProjects.title' | transloco }}</a\r
                >\r
                <mat-icon class="icon-size-4 mx-2 text-stone-400" [svgIcon]="'heroicons_solid:chevron-right'"></mat-icon>\r
                <a\r
                    [routerLink]="['/smart-enroll/projects', projectId]"\r
                    class="cursor-pointer text-stone-700 underline-offset-4 hover:underline dark:text-stone-300"\r
                    >{{ projectName() || projectId }}</a\r
                >\r
                <mat-icon class="icon-size-4 mx-2 text-stone-400" [svgIcon]="'heroicons_solid:chevron-right'"></mat-icon>\r
                <span class="cursor-default text-stone-600 dark:text-stone-300">{{ 'smartEnrollProjects.recordsTitle' | transloco }}</span>\r
            </div>\r
            <div class="mt-5 flex flex-wrap items-start justify-between gap-4">\r
                <div class="flex min-w-0 items-start gap-3">\r
                    <button\r
                        mat-icon-button\r
                        type="button"\r
                        (click)="goToProject()"\r
                        class="shrink-0 !text-stone-600 dark:!text-stone-300"\r
                        [attr.aria-label]="'smartEnrollProjects.backToProject' | transloco"\r
                    >\r
                        <mat-icon>arrow_back</mat-icon>\r
                    </button>\r
                    <div class="min-w-0">\r
                        <h1 class="text-2xl font-semibold tracking-tight text-stone-900 dark:text-white md:text-3xl">\r
                            {{ 'smartEnrollProjects.recordsTitle' | transloco }}\r
                        </h1>\r
                        <p class="mt-1 text-sm text-stone-600 dark:text-stone-400">{{ 'smartEnrollProjects.recordsSubtitle' | transloco }}</p>\r
                    </div>\r
                </div>\r
                <button mat-stroked-button type="button" class="shrink-0 rounded-xl" (click)="goToList()">\r
                    {{ 'smartEnrollProjects.allProjects' | transloco }}\r
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
                            [placeholder]="'smartEnrollProjects.searchRecords' | transloco"\r
                        />\r
                    </mat-form-field>\r
\r
                    <mat-form-field appearance="outline" class="w-full sm:w-56" subscriptSizing="dynamic">\r
                        <mat-label>{{ 'smartEnrollProjects.filterStatus' | transloco }}</mat-label>\r
                        <mat-select\r
                            [value]="statusFilter()"\r
                            (selectionChange)="onStatusChange($event.value)"\r
                        >\r
                            @for (option of statusOptions; track option) {\r
                                <mat-option [value]="option">\r
                                    {{ 'smartEnrollProjects.status.' + option | transloco }}\r
                                </mat-option>\r
                            }\r
                        </mat-select>\r
                    </mat-form-field>\r
\r
                    <mat-form-field appearance="outline" class="w-full sm:w-56" subscriptSizing="dynamic">\r
                        <mat-label>{{ 'smartEnrollProjects.filterStep' | transloco }}</mat-label>\r
                        <mat-select [value]="stepFilter()" (selectionChange)="onStepChange($event.value)">\r
                            @for (option of stepOptions; track option) {\r
                                <mat-option [value]="option">\r
                                    {{ 'smartEnrollProjects.step.' + option | transloco }}\r
                                </mat-option>\r
                            }\r
                        </mat-select>\r
                    </mat-form-field>\r
\r
                    @if (activeFilterCount() > 0) {\r
                        <button\r
                            mat-button\r
                            type="button"\r
                            class="!text-stone-600 dark:!text-stone-300"\r
                            (click)="clearFilters()"\r
                        >\r
                            <mat-icon class="mr-1">close</mat-icon>\r
                            {{ 'smartEnrollProjects.clearFilters' | transloco }}\r
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
                                {{ 'smartEnrollProjects.datePreset.' + preset | transloco }}\r
                            </mat-button-toggle>\r
                        }\r
                    </mat-button-toggle-group>\r
\r
                    @if (datePreset() === 'custom') {\r
                        <mat-form-field appearance="outline" class="w-full sm:w-72" subscriptSizing="dynamic">\r
                            <mat-label>{{ 'smartEnrollProjects.dateRange' | transloco }}</mat-label>\r
                            <mat-date-range-input [rangePicker]="picker">\r
                                <input\r
                                    matStartDate\r
                                    [formControl]="rangeStart"\r
                                    (dateChange)="onCustomRangeChange()"\r
                                    [placeholder]="'smartEnrollProjects.dateStart' | transloco"\r
                                />\r
                                <input\r
                                    matEndDate\r
                                    [formControl]="rangeEnd"\r
                                    (dateChange)="onCustomRangeChange()"\r
                                    [placeholder]="'smartEnrollProjects.dateEnd' | transloco"\r
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
                        <ng-container matColumnDef="photo">\r
                            <th mat-header-cell *matHeaderCellDef class="w-14 pr-0" [attr.aria-label]="'smartEnrollProjects.colPhoto' | transloco">\r
                                <span class="sr-only">{{ 'smartEnrollProjects.colPhoto' | transloco }}</span>\r
                            </th>\r
                            <td mat-cell *matCellDef="let row" class="w-14 pr-2 align-middle">\r
                                @if (rowAvatarSrc(row); as src) {\r
                                    <img\r
                                        [src]="src"\r
                                        alt=""\r
                                        loading="lazy"\r
                                        decoding="async"\r
                                        class="h-10 w-10 shrink-0 rounded-full border border-stone-200/90 object-cover dark:border-gray-600"\r
                                    />\r
                                } @else {\r
                                    <div\r
                                        class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-dashed border-stone-300/90 bg-stone-100/80 dark:border-gray-600 dark:bg-gray-800/60"\r
                                        aria-hidden="true"\r
                                    >\r
                                        <mat-icon class="!h-5 !w-5 text-stone-400 dark:text-stone-500">person</mat-icon>\r
                                    </div>\r
                                }\r
                            </td>\r
                        </ng-container>\r
                        <ng-container matColumnDef="status">\r
                            <th mat-header-cell *matHeaderCellDef>{{ 'smartEnrollProjects.colStatus' | transloco }}</th>\r
                            <td mat-cell *matCellDef="let row">{{ row.status ?? '\u2014' }}</td>\r
                        </ng-container>\r
                        <ng-container matColumnDef="currentStep">\r
                            <th mat-header-cell *matHeaderCellDef>{{ 'smartEnrollProjects.colStep' | transloco }}</th>\r
                            <td mat-cell *matCellDef="let row">\r
                                @if (stepLabelKey(row.currentStep); as key) {\r
                                    {{ key | transloco }}\r
                                } @else {\r
                                    {{ row.currentStep }}\r
                                }\r
                            </td>\r
                        </ng-container>\r
                        <ng-container matColumnDef="email">\r
                            <th mat-header-cell *matHeaderCellDef>{{ 'smartEnrollProjects.colEmail' | transloco }}</th>\r
                            <td mat-cell *matCellDef="let row">{{ displayEmail(row) }}</td>\r
                        </ng-container>\r
                        <ng-container matColumnDef="phone">\r
                            <th mat-header-cell *matHeaderCellDef>{{ 'smartEnrollProjects.colPhone' | transloco }}</th>\r
                            <td mat-cell *matCellDef="let row">{{ displayPhone(row) }}</td>\r
                        </ng-container>\r
                        <ng-container matColumnDef="createdAt">\r
                            <th mat-header-cell *matHeaderCellDef mat-sort-header="createdAt">\r
                                {{ 'smartEnrollProjects.colCreated' | transloco }}\r
                            </th>\r
                            <td mat-cell *matCellDef="let row">{{ formatDate(row.createdAt) }}</td>\r
                        </ng-container>\r
                        <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>\r
                        <tr\r
                            mat-row\r
                            *matRowDef="let row; columns: displayedColumns"\r
                            class="cursor-pointer transition-colors hover:bg-stone-50 dark:hover:bg-gray-800/60"\r
                            [routerLink]="['/smart-enroll/projects', projectId, 'records', row._id]"\r
                        ></tr>\r
                    </table>\r
                    @if (dataSource.length === 0) {\r
                        <div class="py-12 text-center text-sm text-stone-500 dark:text-stone-400">\r
                            {{ 'smartEnrollProjects.recordsEmpty' | transloco }}\r
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProjectRecordsComponent, { className: "ProjectRecordsComponent", filePath: "src/app/modules/smart-enroll/projects/project-records/project-records.component.ts", lineNumber: 80 });
})();
export {
  ProjectRecordsComponent
};
//# sourceMappingURL=chunk-7LUECWFQ.js.map
