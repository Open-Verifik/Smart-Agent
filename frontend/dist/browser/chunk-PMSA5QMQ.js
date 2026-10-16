import {
  SmartScanService
} from "./chunk-VGF5JDWT.js";
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
  AuthRequiredGateService
} from "./chunk-Q3ASOYRZ.js";
import {
  DateTime
} from "./chunk-KW3PRW6P.js";
import "./chunk-FTSXFXXU.js";
import "./chunk-LHH4KRD7.js";
import "./chunk-4U26N45P.js";
import "./chunk-WIGHP2N4.js";
import "./chunk-JURKDGMK.js";
import {
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
  MatPrefix,
  MatSuffix
} from "./chunk-HWNQWMK7.js";
import "./chunk-TG6L3SEN.js";
import "./chunk-UDAOI32F.js";
import "./chunk-K4AG7N5H.js";
import "./chunk-BCBZJBUY.js";
import "./chunk-GH366QKW.js";
import "./chunk-EVWXSBKG.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-UUIVQBYS.js";
import "./chunk-M5KDIZH5.js";
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
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  ɵNgSelectMultipleOption
} from "./chunk-DVRFI3SJ.js";
import {
  TranslocoModule,
  TranslocoPipe,
  takeUntilDestroyed
} from "./chunk-R5W3A6HI.js";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-HYFP557I.js";
import "./chunk-KTYFS5OT.js";
import {
  CommonModule,
  Component,
  DestroyRef,
  NgClass,
  ViewChild,
  ViewEncapsulation,
  effect,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
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
  ɵɵqueryRefresh,
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
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-PNPEHISK.js";
import {
  __spreadValues
} from "./chunk-F5M2C4EZ.js";

// src/app/modules/smart-enroll/smart-scan/scan-list/scan-list.component.ts
var _forTrack0 = ($index, $item) => $item._id;
function ScanListComponent_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 26);
    \u0275\u0275listener("click", function ScanListComponent_Conditional_39_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.quickSearch = "");
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function ScanListComponent_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275element(1, "mat-spinner", 27);
    \u0275\u0275elementEnd();
  }
}
function ScanListComponent_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275element(1, "mat-icon", 28);
    \u0275\u0275elementStart(2, "h3", 29);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 30);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 31);
    \u0275\u0275listener("click", function ScanListComponent_Conditional_42_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToNewScan());
    });
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("svgIcon", "heroicons_outline:document-magnifying-glass");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 4, "smartScan.noScans"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 6, "smartScan.noScansDesc"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 8, "smartScan.newScan"), " ");
  }
}
function ScanListComponent_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275element(1, "mat-icon", 28);
    \u0275\u0275elementStart(2, "h3", 29);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("svgIcon", "heroicons_outline:magnifying-glass");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 2, "smartScan.noResults"));
  }
}
function ScanListComponent_Conditional_44_Conditional_0_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 42);
  }
  if (rf & 2) {
    const scan_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", scan_r6.url, \u0275\u0275sanitizeUrl)("alt", scan_r6.documentType);
  }
}
function ScanListComponent_Conditional_44_Conditional_0_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275element(1, "mat-icon", 53);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("svgIcon", "heroicons_outline:document");
  }
}
function ScanListComponent_Conditional_44_Conditional_0_For_2_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 50);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx);
  }
}
function ScanListComponent_Conditional_44_Conditional_0_For_2_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const scan_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("title", scan_r6.documentNumber);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", scan_r6.documentNumber, " ");
  }
}
function ScanListComponent_Conditional_44_Conditional_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275listener("click", function ScanListComponent_Conditional_44_Conditional_0_For_2_Template_div_click_0_listener() {
      const scan_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.goToDetail(scan_r6._id));
    });
    \u0275\u0275elementStart(1, "div", 41);
    \u0275\u0275template(2, ScanListComponent_Conditional_44_Conditional_0_For_2_Conditional_2_Template, 1, 2, "img", 42)(3, ScanListComponent_Conditional_44_Conditional_0_For_2_Conditional_3_Template, 2, 1, "div", 43);
    \u0275\u0275elementStart(4, "div", 44)(5, "span", 45);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 46)(9, "div", 47)(10, "span", 48);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 49);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(15, ScanListComponent_Conditional_44_Conditional_0_For_2_Conditional_15_Template, 2, 1, "p", 50)(16, ScanListComponent_Conditional_44_Conditional_0_For_2_Conditional_16_Template, 2, 2, "p", 51);
    \u0275\u0275elementStart(17, "p", 52);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_17_0;
    const scan_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(scan_r6.url ? 2 : 3);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r1.getStatusColor(scan_r6.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 8, ctx_r1.getStatusLabel(scan_r6.status)), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(scan_r6.documentType);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 10, ctx_r1.getMethodLabel(scan_r6.validationMethod)));
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_17_0 = ctx_r1.getScanName(scan_r6)) ? 15 : -1, tmp_17_0);
    \u0275\u0275advance();
    \u0275\u0275conditional(scan_r6.documentNumber ? 16 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(scan_r6.createdAt));
  }
}
function ScanListComponent_Conditional_44_Conditional_0_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 38);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const size_r7 = ctx.$implicit;
    \u0275\u0275property("value", size_r7);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(size_r7);
  }
}
function ScanListComponent_Conditional_44_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275repeaterCreate(1, ScanListComponent_Conditional_44_Conditional_0_For_2_Template, 19, 12, "div", 34, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 35)(4, "label", 36)(5, "select", 37);
    \u0275\u0275listener("change", function ScanListComponent_Conditional_44_Conditional_0_Template_select_change_5_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPageSizeChange(+$event.target.value));
    });
    \u0275\u0275repeaterCreate(6, ScanListComponent_Conditional_44_Conditional_0_For_7_Template, 2, 2, "option", 38, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "mat-paginator", 39);
    \u0275\u0275listener("page", function ScanListComponent_Conditional_44_Conditional_0_Template_mat_paginator_page_8_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPaginatorEvent($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.filteredScans);
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r1.pageSize());
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.pageSizeOptions);
    \u0275\u0275advance(2);
    \u0275\u0275property("length", ctx_r1.total())("pageSize", ctx_r1.pageSize())("pageIndex", ctx_r1.pageIndex())("hidePageSize", true)("showFirstLastButtons", true);
  }
}
function ScanListComponent_Conditional_44_Conditional_1_th_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "th", 76);
  }
}
function ScanListComponent_Conditional_44_Conditional_1_td_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 78);
  }
  if (rf & 2) {
    const scan_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", scan_r9.url, \u0275\u0275sanitizeUrl)("alt", scan_r9.documentType);
  }
}
function ScanListComponent_Conditional_44_Conditional_1_td_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 79);
    \u0275\u0275element(1, "mat-icon", 80);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("svgIcon", "heroicons_outline:document");
  }
}
function ScanListComponent_Conditional_44_Conditional_1_td_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 77);
    \u0275\u0275template(1, ScanListComponent_Conditional_44_Conditional_1_td_5_Conditional_1_Template, 1, 2, "img", 78)(2, ScanListComponent_Conditional_44_Conditional_1_td_5_Conditional_2_Template, 2, 1, "div", 79);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const scan_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(scan_r9.url ? 1 : 2);
  }
}
function ScanListComponent_Conditional_44_Conditional_1_th_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 81);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "smartScan.documentType"));
  }
}
function ScanListComponent_Conditional_44_Conditional_1_td_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 82);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const scan_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(scan_r10.documentType);
  }
}
function ScanListComponent_Conditional_44_Conditional_1_th_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 81);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "smartScan.documentNumber"));
  }
}
function ScanListComponent_Conditional_44_Conditional_1_td_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 83);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const scan_r11 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(scan_r11.documentNumber || "-");
  }
}
function ScanListComponent_Conditional_44_Conditional_1_th_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 81);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "smartScan.name"));
  }
}
function ScanListComponent_Conditional_44_Conditional_1_td_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 83);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const scan_r12 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getScanName(scan_r12) || "-");
  }
}
function ScanListComponent_Conditional_44_Conditional_1_th_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 81);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "smartScan.status"));
  }
}
function ScanListComponent_Conditional_44_Conditional_1_td_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 84)(1, "span", 45);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const scan_r13 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.getStatusColor(scan_r13.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, ctx_r1.getStatusLabel(scan_r13.status)), " ");
  }
}
function ScanListComponent_Conditional_44_Conditional_1_th_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 81);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "smartScan.method"));
  }
}
function ScanListComponent_Conditional_44_Conditional_1_td_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 85);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const scan_r14 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, ctx_r1.getMethodLabel(scan_r14.validationMethod)), " ");
  }
}
function ScanListComponent_Conditional_44_Conditional_1_th_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 81);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "smartScan.country"));
  }
}
function ScanListComponent_Conditional_44_Conditional_1_td_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 83);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const scan_r15 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(scan_r15.country || "-");
  }
}
function ScanListComponent_Conditional_44_Conditional_1_th_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 81);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "smartScan.date"));
  }
}
function ScanListComponent_Conditional_44_Conditional_1_td_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 86);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const scan_r16 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatDate(scan_r16.createdAt), " ");
  }
}
function ScanListComponent_Conditional_44_Conditional_1_tr_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 87);
  }
}
function ScanListComponent_Conditional_44_Conditional_1_tr_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 88);
    \u0275\u0275listener("click", function ScanListComponent_Conditional_44_Conditional_1_tr_28_Template_tr_click_0_listener() {
      const row_r18 = \u0275\u0275restoreView(_r17).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.goToDetail(row_r18._id));
    });
    \u0275\u0275elementEnd();
  }
}
function ScanListComponent_Conditional_44_Conditional_1_For_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 38);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const size_r19 = ctx.$implicit;
    \u0275\u0275property("value", size_r19);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(size_r19);
  }
}
function ScanListComponent_Conditional_44_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 54)(2, "table", 55);
    \u0275\u0275elementContainerStart(3, 56);
    \u0275\u0275template(4, ScanListComponent_Conditional_44_Conditional_1_th_4_Template, 1, 0, "th", 57)(5, ScanListComponent_Conditional_44_Conditional_1_td_5_Template, 3, 1, "td", 58);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(6, 59);
    \u0275\u0275template(7, ScanListComponent_Conditional_44_Conditional_1_th_7_Template, 3, 3, "th", 60)(8, ScanListComponent_Conditional_44_Conditional_1_td_8_Template, 2, 1, "td", 61);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(9, 62);
    \u0275\u0275template(10, ScanListComponent_Conditional_44_Conditional_1_th_10_Template, 3, 3, "th", 60)(11, ScanListComponent_Conditional_44_Conditional_1_td_11_Template, 2, 1, "td", 63);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(12, 64);
    \u0275\u0275template(13, ScanListComponent_Conditional_44_Conditional_1_th_13_Template, 3, 3, "th", 60)(14, ScanListComponent_Conditional_44_Conditional_1_td_14_Template, 2, 1, "td", 63);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(15, 65);
    \u0275\u0275template(16, ScanListComponent_Conditional_44_Conditional_1_th_16_Template, 3, 3, "th", 60)(17, ScanListComponent_Conditional_44_Conditional_1_td_17_Template, 4, 4, "td", 66);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(18, 67);
    \u0275\u0275template(19, ScanListComponent_Conditional_44_Conditional_1_th_19_Template, 3, 3, "th", 60)(20, ScanListComponent_Conditional_44_Conditional_1_td_20_Template, 3, 3, "td", 68);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(21, 69);
    \u0275\u0275template(22, ScanListComponent_Conditional_44_Conditional_1_th_22_Template, 3, 3, "th", 60)(23, ScanListComponent_Conditional_44_Conditional_1_td_23_Template, 2, 1, "td", 63);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(24, 70);
    \u0275\u0275template(25, ScanListComponent_Conditional_44_Conditional_1_th_25_Template, 3, 3, "th", 60)(26, ScanListComponent_Conditional_44_Conditional_1_td_26_Template, 2, 1, "td", 71);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(27, ScanListComponent_Conditional_44_Conditional_1_tr_27_Template, 1, 0, "tr", 72)(28, ScanListComponent_Conditional_44_Conditional_1_tr_28_Template, 1, 0, "tr", 73);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 74)(30, "label", 36)(31, "select", 37);
    \u0275\u0275listener("change", function ScanListComponent_Conditional_44_Conditional_1_Template_select_change_31_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPageSizeChange(+$event.target.value));
    });
    \u0275\u0275repeaterCreate(32, ScanListComponent_Conditional_44_Conditional_1_For_33_Template, 2, 2, "option", 38, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "mat-paginator", 75);
    \u0275\u0275listener("page", function ScanListComponent_Conditional_44_Conditional_1_Template_mat_paginator_page_34_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPaginatorEvent($event));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("dataSource", ctx_r1.dataSource);
    \u0275\u0275advance(25);
    \u0275\u0275property("matHeaderRowDef", ctx_r1.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx_r1.displayedColumns);
    \u0275\u0275advance(3);
    \u0275\u0275property("value", ctx_r1.pageSize());
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.pageSizeOptions);
    \u0275\u0275advance(2);
    \u0275\u0275property("length", ctx_r1.total())("pageSize", ctx_r1.pageSize())("pageIndex", ctx_r1.pageIndex())("hidePageSize", true)("showFirstLastButtons", true);
  }
}
function ScanListComponent_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ScanListComponent_Conditional_44_Conditional_0_Template, 9, 6)(1, ScanListComponent_Conditional_44_Conditional_1_Template, 35, 9, "div", 32);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.viewMode() === "cards" ? 0 : 1);
  }
}
var EMPTY_FILTERS = {
  documentType: "",
  documentNumber: "",
  country: "",
  status: "",
  documentCategory: "",
  nationality: ""
};
var ScanListComponent = class _ScanListComponent {
  constructor() {
    this.displayedColumns = ["image", "documentType", "documentNumber", "name", "status", "method", "country", "date"];
    this.dataSource = new MatTableDataSource([]);
    this._scanService = inject(SmartScanService);
    this._router = inject(Router);
    this._route = inject(ActivatedRoute);
    this._authGate = inject(AuthRequiredGateService);
    this._destroyRef = inject(DestroyRef);
    this.viewMode = signal("cards");
    this.scans = this._scanService.scans;
    this.total = this._scanService.total;
    this.loading = this._scanService.loading;
    this.pageSize = this._scanService.pageSize;
    this.pageIndex = this._scanService.pageIndex;
    this.pageSizeOptions = [6, 12, 24, 48];
    this.quickSearch = "";
    this.showFilters = false;
    this.activeFilters = __spreadValues({}, EMPTY_FILTERS);
    this.STATUS_OPTIONS = [
      "ASSESSING",
      "ACTIVE",
      "FAILED",
      "NEEDS_MANUAL_VERIFICATION",
      "NOT_FOUND",
      "EXPIRED",
      "ACTIVE_BUT_UNVERIFIED"
    ];
    effect(() => {
      this.dataSource.data = this.filteredScans;
    });
  }
  ngOnInit() {
    this._authGate.runWithAuthOrDialog({
      onAuthenticated: () => this._initScanListFromRoute(),
      panelClass: "auth-required-dialog"
    });
  }
  _initScanListFromRoute() {
    let hasLoaded = false;
    this._route.queryParams.pipe(takeUntilDestroyed(this._destroyRef)).subscribe((params) => {
      const view = params["view"];
      const targetView = view === "table" ? "table" : "cards";
      if (this.viewMode() !== targetView) {
        this.viewMode.set(targetView);
      }
      if (!hasLoaded) {
        hasLoaded = true;
        this.loadData();
      }
    });
  }
  get filteredScans() {
    const q = this.quickSearch.toLowerCase().trim();
    if (!q)
      return this.scans();
    return this.scans().filter((s) => {
      const ocr = s.OCRExtraction;
      return s.documentType?.toLowerCase().includes(q) || s.documentNumber?.toLowerCase().includes(q) || String(ocr?.["firstName"] ?? "").toLowerCase().includes(q) || String(ocr?.["lastName"] ?? "").toLowerCase().includes(q) || String(ocr?.["fullName"] ?? "").toLowerCase().includes(q);
    });
  }
  get activeFilterCount() {
    return Object.values(this.activeFilters).filter((v) => v.length > 0).length;
  }
  setViewMode(mode) {
    this._router.navigate([], {
      relativeTo: this._route,
      queryParams: { view: mode },
      queryParamsHandling: "merge"
    });
  }
  loadData() {
    this._scanService.pageIndex.set(this.pageIndex());
    this._scanService.pageSize.set(this.pageSize());
    const filters = {};
    for (const [key, val] of Object.entries(this.activeFilters)) {
      if (val)
        filters[key] = val;
    }
    this._scanService.getScans(this.pageIndex() + 1, this.pageSize(), filters).subscribe();
  }
  applyFilters() {
    this.pageIndex.set(0);
    this.loadData();
  }
  resetFilters() {
    this.activeFilters = __spreadValues({}, EMPTY_FILTERS);
    this.pageIndex.set(0);
    this.loadData();
  }
  onPaginatorEvent(event) {
    if (event.pageIndex === this.pageIndex() && event.pageSize === this.pageSize()) {
      return;
    }
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
  goToNewScan() {
    this._router.navigate(["/smart-enroll/smart-scan/new"]);
  }
  goToDetail(id) {
    this._router.navigate(["/smart-enroll/smart-scan", id]);
  }
  getScanName(scan) {
    const ocr = scan.OCRExtraction;
    if (!ocr)
      return "";
    const first = String(ocr["firstName"] ?? "");
    const last = String(ocr["lastName"] ?? "");
    if (first || last)
      return `${first} ${last}`.trim();
    return String(ocr["fullName"] ?? "");
  }
  formatDate(date) {
    if (!date)
      return "-";
    return DateTime.fromISO(date).toFormat("MMM dd, yyyy HH:mm");
  }
  getStatusColor(status) {
    if (status === "ACTIVE" || status === "ACTIVE_BUT_UNVERIFIED")
      return "text-green-600 bg-green-100 dark:bg-green-900/30 dark:text-green-400";
    if (status === "ASSESSING")
      return "text-amber-600 bg-amber-100 dark:bg-amber-900/30 dark:text-amber-400";
    return "text-red-600 bg-red-100 dark:bg-red-900/30 dark:text-red-400";
  }
  getStatusLabel(status) {
    if (status === "ACTIVE" || status === "ACTIVE_BUT_UNVERIFIED")
      return "smartScan.statusActive";
    if (status === "ASSESSING")
      return "smartScan.statusAssessing";
    return "smartScan.statusFailed";
  }
  getMethodLabel(method) {
    if (method === "SCAN_AGENT")
      return "smartScan.methodScanAgent";
    if (method === "SCAN_STUDIO")
      return "smartScan.methodScanStudio";
    if (method === "SCAN_PROMPT")
      return "smartScan.methodScanPrompt";
    return method;
  }
  static {
    this.\u0275fac = function ScanListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ScanListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ScanListComponent, selectors: [["scan-list"]], viewQuery: function ScanListComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(MatPaginator, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.paginator = _t.first);
      }
    }, decls: 45, vars: 30, consts: [[1, "flex", "flex-col", "flex-auto", "min-w-0"], [1, "flex", "flex-col", "sm:flex-row", "flex-0", "sm:items-center", "sm:justify-between", "p-6", "sm:py-8", "sm:px-10", "border-b", "bg-card", "dark:bg-transparent"], [1, "flex-1", "min-w-0"], [1, "flex", "flex-wrap", "items-center", "font-medium", "text-xs", "text-secondary", "leading-none"], ["routerLink", "/chat", 1, "cursor-pointer", "text-primary-500", "hover:underline"], [1, "icon-size-4", "mx-2", "text-secondary", 3, "svgIcon"], [1, "cursor-default"], [1, "mt-2", "flex", "flex-col", "sm:flex-row", "sm:items-center", "sm:justify-between", "gap-4"], [1, "text-3xl", "md:text-4xl", "font-extrabold", "tracking-tight", "leading-7", "sm:leading-10", "truncate"], [1, "mt-1", "text-secondary"], [1, "flex", "items-center", "gap-3"], [1, "rounded-lg", "border", "border-slate-200", "dark:border-slate-700", 3, "valueChange", "value"], ["value", "cards"], [1, "icon-size-4", "mr-1", 3, "svgIcon"], ["value", "table"], ["mat-flat-button", "", "color", "primary", 1, "rounded-xl", 3, "click"], [1, "icon-size-5", "mr-2", 3, "svgIcon"], [1, "flex", "flex-col", "flex-auto", "p-6", "sm:p-10"], [1, "mb-6"], ["appearance", "outline", "subscriptSizing", "dynamic", 1, "w-full", "max-w-md"], ["matPrefix", "", 1, "mr-2"], ["matInput", "", 3, "ngModelChange", "ngModel", "placeholder"], ["matSuffix", "", "mat-icon-button", ""], [1, "relative", "flex", "flex-col", "flex-auto", "min-h-[320px]"], [1, "absolute", "inset-0", "z-10", "flex", "items-center", "justify-center", "rounded-2xl", "bg-white/70", "dark:bg-gray-950/70", "backdrop-blur-[1px]"], [1, "flex", "flex-col", "items-center", "justify-center", "py-20", "text-center"], ["matSuffix", "", "mat-icon-button", "", 3, "click"], ["diameter", "40"], [1, "icon-size-16", "mb-4", "text-hint", 3, "svgIcon"], [1, "text-xl", "font-semibold", "text-secondary"], [1, "mt-2", "text-secondary", "max-w-md"], ["mat-flat-button", "", "color", "primary", 1, "mt-6", "rounded-xl", 3, "click"], [1, "flex", "flex-col", "bg-card", "shadow", "overflow-hidden", "rounded-2xl", "w-full"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "lg:grid-cols-3", "gap-6"], [1, "bg-card", "dark:bg-gray-800", "rounded-2xl", "border", "border-slate-200", "dark:border-slate-700", "overflow-hidden", "shadow-sm", "hover:shadow-md", "transition-shadow", "cursor-pointer"], [1, "mt-6", "flex", "flex-wrap", "items-center", "justify-end", "gap-3"], [1, "flex", "items-center", "gap-2", "text-sm", "text-stone-500", "dark:text-stone-400"], [1, "rounded-lg", "border", "border-stone-200", "bg-white", "px-2", "py-1", "text-sm", "text-stone-800", "dark:border-gray-700", "dark:bg-gray-900", "dark:text-stone-200", 3, "change", "value"], [3, "value"], ["aria-label", "Select page of scans", 1, "border", "rounded-2xl", 3, "page", "length", "pageSize", "pageIndex", "hidePageSize", "showFirstLastButtons"], [1, "bg-card", "dark:bg-gray-800", "rounded-2xl", "border", "border-slate-200", "dark:border-slate-700", "overflow-hidden", "shadow-sm", "hover:shadow-md", "transition-shadow", "cursor-pointer", 3, "click"], [1, "aspect-[4/3]", "bg-slate-100", "dark:bg-slate-900", "relative", "overflow-hidden"], ["loading", "lazy", 1, "w-full", "h-full", "object-cover", 3, "src", "alt"], [1, "flex", "items-center", "justify-center", "h-full"], [1, "absolute", "top-2", "right-2"], [1, "inline-flex", "items-center", "px-2.5", "py-0.5", "rounded-full", "text-xs", "font-medium", 3, "ngClass"], [1, "p-4"], [1, "flex", "items-center", "justify-between", "mb-1"], [1, "font-mono", "text-sm", "font-medium", "text-primary-500"], [1, "text-xs", "text-secondary"], [1, "text-sm", "font-medium", "text-gray-900", "dark:text-white", "truncate"], [1, "text-sm", "text-secondary", "truncate", 3, "title"], [1, "text-xs", "text-secondary", "mt-2"], [1, "icon-size-16", "text-hint", 3, "svgIcon"], [1, "overflow-x-auto"], ["mat-table", "", 1, "w-full", "bg-transparent", 3, "dataSource"], ["matColumnDef", "image"], ["mat-header-cell", "", "class", "pl-6 w-20", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "pl-6 py-3", 4, "matCellDef"], ["matColumnDef", "documentType"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "font-mono text-sm", 4, "matCellDef"], ["matColumnDef", "documentNumber"], ["mat-cell", "", "class", "text-secondary", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "status"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "method"], ["mat-cell", "", "class", "text-secondary text-sm", 4, "matCellDef"], ["matColumnDef", "country"], ["matColumnDef", "date"], ["mat-cell", "", "class", "text-secondary whitespace-nowrap", 4, "matCellDef"], ["mat-header-row", "", "class", "h-12 text-xs font-semibold uppercase text-secondary bg-gray-50 dark:bg-black dark:bg-opacity-5", 4, "matHeaderRowDef"], ["mat-row", "", "class", "hover:bg-gray-50 dark:hover:bg-black dark:hover:bg-opacity-5 transition-colors cursor-pointer", 3, "click", 4, "matRowDef", "matRowDefColumns"], [1, "flex", "flex-wrap", "items-center", "justify-end", "gap-3", "border-t", "px-3", "py-2"], ["aria-label", "Select page of scans", 1, "!bg-transparent", 3, "page", "length", "pageSize", "pageIndex", "hidePageSize", "showFirstLastButtons"], ["mat-header-cell", "", 1, "pl-6", "w-20"], ["mat-cell", "", 1, "pl-6", "py-3"], ["loading", "lazy", 1, "w-14", "h-10", "object-cover", "rounded", 3, "src", "alt"], [1, "w-14", "h-10", "bg-slate-100", "dark:bg-slate-800", "rounded", "flex", "items-center", "justify-center"], [1, "icon-size-5", "text-hint", 3, "svgIcon"], ["mat-header-cell", ""], ["mat-cell", "", 1, "font-mono", "text-sm"], ["mat-cell", "", 1, "text-secondary"], ["mat-cell", ""], ["mat-cell", "", 1, "text-secondary", "text-sm"], ["mat-cell", "", 1, "text-secondary", "whitespace-nowrap"], ["mat-header-row", "", 1, "h-12", "text-xs", "font-semibold", "uppercase", "text-secondary", "bg-gray-50", "dark:bg-black", "dark:bg-opacity-5"], ["mat-row", "", 1, "hover:bg-gray-50", "dark:hover:bg-black", "dark:hover:bg-opacity-5", "transition-colors", "cursor-pointer", 3, "click"]], template: function ScanListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "a", 4);
        \u0275\u0275text(5, "Verifik");
        \u0275\u0275elementEnd();
        \u0275\u0275element(6, "mat-icon", 5);
        \u0275\u0275elementStart(7, "span", 6);
        \u0275\u0275text(8);
        \u0275\u0275pipe(9, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "div", 7)(11, "div")(12, "h2", 8);
        \u0275\u0275text(13);
        \u0275\u0275pipe(14, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "p", 9);
        \u0275\u0275text(16);
        \u0275\u0275pipe(17, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "div", 10)(19, "mat-button-toggle-group", 11);
        \u0275\u0275listener("valueChange", function ScanListComponent_Template_mat_button_toggle_group_valueChange_19_listener($event) {
          return ctx.setViewMode($event);
        });
        \u0275\u0275elementStart(20, "mat-button-toggle", 12);
        \u0275\u0275element(21, "mat-icon", 13);
        \u0275\u0275text(22);
        \u0275\u0275pipe(23, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "mat-button-toggle", 14);
        \u0275\u0275element(25, "mat-icon", 13);
        \u0275\u0275text(26);
        \u0275\u0275pipe(27, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "button", 15);
        \u0275\u0275listener("click", function ScanListComponent_Template_button_click_28_listener() {
          return ctx.goToNewScan();
        });
        \u0275\u0275element(29, "mat-icon", 16);
        \u0275\u0275text(30);
        \u0275\u0275pipe(31, "transloco");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(32, "div", 17)(33, "div", 18)(34, "mat-form-field", 19)(35, "mat-icon", 20);
        \u0275\u0275text(36, "search");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "input", 21);
        \u0275\u0275pipe(38, "transloco");
        \u0275\u0275twoWayListener("ngModelChange", function ScanListComponent_Template_input_ngModelChange_37_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.quickSearch, $event) || (ctx.quickSearch = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(39, ScanListComponent_Conditional_39_Template, 3, 0, "button", 22);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(40, "div", 23);
        \u0275\u0275template(41, ScanListComponent_Conditional_41_Template, 2, 0, "div", 24)(42, ScanListComponent_Conditional_42_Template, 11, 10, "div", 25)(43, ScanListComponent_Conditional_43_Template, 5, 4, "div", 25)(44, ScanListComponent_Conditional_44_Template, 2, 1);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275property("svgIcon", "heroicons_solid:chevron-right");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 16, "nav.smart_scan"));
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 18, "smartScan.title"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 20, "smartScan.subtitle"));
        \u0275\u0275advance(3);
        \u0275\u0275property("value", ctx.viewMode());
        \u0275\u0275advance(2);
        \u0275\u0275property("svgIcon", "heroicons_outline:squares-2x2");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(23, 22, "smartScan.viewCards"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("svgIcon", "heroicons_outline:table-cells");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(27, 24, "smartScan.viewTable"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("svgIcon", "heroicons_outline:plus");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(31, 26, "smartScan.newScan"), " ");
        \u0275\u0275advance(7);
        \u0275\u0275twoWayProperty("ngModel", ctx.quickSearch);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(38, 28, "smartScan.searchHistoryPlaceholder"));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.quickSearch ? 39 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.loading() ? 41 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.loading() && ctx.filteredScans.length === 0 && ctx.scans().length === 0 ? 42 : !ctx.loading() && ctx.filteredScans.length === 0 && ctx.quickSearch ? 43 : 44);
      }
    }, dependencies: [
      CommonModule,
      NgClass,
      FormsModule,
      NgSelectOption,
      \u0275NgSelectMultipleOption,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      RouterModule,
      RouterLink,
      MatButtonModule,
      MatButton,
      MatIconButton,
      MatIconModule,
      MatIcon,
      MatPaginatorModule,
      MatPaginator,
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
      MatButtonToggleModule,
      MatButtonToggleGroup,
      MatButtonToggle,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatFormFieldModule,
      MatFormField,
      MatPrefix,
      MatSuffix,
      MatInputModule,
      MatInput,
      MatSelectModule,
      TranslocoModule,
      TranslocoPipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScanListComponent, [{
    type: Component,
    args: [{ selector: "scan-list", standalone: true, imports: [
      CommonModule,
      FormsModule,
      RouterModule,
      MatButtonModule,
      MatIconModule,
      MatPaginatorModule,
      MatTableModule,
      MatButtonToggleModule,
      MatProgressSpinnerModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      TranslocoModule
    ], encapsulation: ViewEncapsulation.None, template: `<div class="flex flex-col flex-auto min-w-0">\r
    <!-- Header -->\r
    <div\r
        class="flex flex-col sm:flex-row flex-0 sm:items-center sm:justify-between p-6 sm:py-8 sm:px-10 border-b bg-card dark:bg-transparent"\r
    >\r
        <div class="flex-1 min-w-0">\r
            <div class="flex flex-wrap items-center font-medium text-xs text-secondary leading-none">\r
                <a routerLink="/chat" class="cursor-pointer text-primary-500 hover:underline">Verifik</a>\r
                <mat-icon class="icon-size-4 mx-2 text-secondary" [svgIcon]="'heroicons_solid:chevron-right'"></mat-icon>\r
                <span class="cursor-default">{{ 'nav.smart_scan' | transloco }}</span>\r
            </div>\r
            <div class="mt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">\r
                <div>\r
                    <h2 class="text-3xl md:text-4xl font-extrabold tracking-tight leading-7 sm:leading-10 truncate">\r
                        {{ 'smartScan.title' | transloco }}\r
                    </h2>\r
                    <p class="mt-1 text-secondary">{{ 'smartScan.subtitle' | transloco }}</p>\r
                </div>\r
                <div class="flex items-center gap-3">\r
                    <mat-button-toggle-group\r
                        [value]="viewMode()"\r
                        (valueChange)="setViewMode($event)"\r
                        class="rounded-lg border border-slate-200 dark:border-slate-700"\r
                    >\r
                        <mat-button-toggle value="cards">\r
                            <mat-icon class="icon-size-4 mr-1" [svgIcon]="'heroicons_outline:squares-2x2'"></mat-icon>\r
                            {{ 'smartScan.viewCards' | transloco }}\r
                        </mat-button-toggle>\r
                        <mat-button-toggle value="table">\r
                            <mat-icon class="icon-size-4 mr-1" [svgIcon]="'heroicons_outline:table-cells'"></mat-icon>\r
                            {{ 'smartScan.viewTable' | transloco }}\r
                        </mat-button-toggle>\r
                    </mat-button-toggle-group>\r
                    <button\r
                        mat-flat-button\r
                        color="primary"\r
                        (click)="goToNewScan()"\r
                        class="rounded-xl"\r
                    >\r
                        <mat-icon class="icon-size-5 mr-2" [svgIcon]="'heroicons_outline:plus'"></mat-icon>\r
                        {{ 'smartScan.newScan' | transloco }}\r
                    </button>\r
                </div>\r
            </div>\r
        </div>\r
    </div>\r
\r
    <!-- Main Content -->\r
    <div class="flex flex-col flex-auto p-6 sm:p-10">\r
        <!-- Search toolbar (advanced filters disabled for now) -->\r
        <div class="mb-6">\r
            <mat-form-field appearance="outline" class="w-full max-w-md" subscriptSizing="dynamic">\r
                <mat-icon matPrefix class="mr-2">search</mat-icon>\r
                <input\r
                    matInput\r
                    [(ngModel)]="quickSearch"\r
                    [placeholder]="'smartScan.searchHistoryPlaceholder' | transloco"\r
                />\r
                @if (quickSearch) {\r
                    <button matSuffix mat-icon-button (click)="quickSearch = ''">\r
                        <mat-icon>close</mat-icon>\r
                    </button>\r
                }\r
            </mat-form-field>\r
        </div>\r
\r
        <div class="relative flex flex-col flex-auto min-h-[320px]">\r
            @if (loading()) {\r
                <div\r
                    class="absolute inset-0 z-10 flex items-center justify-center rounded-2xl bg-white/70 dark:bg-gray-950/70 backdrop-blur-[1px]"\r
                >\r
                    <mat-spinner diameter="40"></mat-spinner>\r
                </div>\r
            }\r
\r
            @if (!loading() && filteredScans.length === 0 && scans().length === 0) {\r
            <div class="flex flex-col items-center justify-center py-20 text-center">\r
                <mat-icon\r
                    class="icon-size-16 mb-4 text-hint"\r
                    [svgIcon]="'heroicons_outline:document-magnifying-glass'"\r
                ></mat-icon>\r
                <h3 class="text-xl font-semibold text-secondary">{{ 'smartScan.noScans' | transloco }}</h3>\r
                <p class="mt-2 text-secondary max-w-md">{{ 'smartScan.noScansDesc' | transloco }}</p>\r
                <button mat-flat-button color="primary" (click)="goToNewScan()" class="mt-6 rounded-xl">\r
                    {{ 'smartScan.newScan' | transloco }}\r
                </button>\r
            </div>\r
        } @else if (!loading() && filteredScans.length === 0 && quickSearch) {\r
            <div class="flex flex-col items-center justify-center py-20 text-center">\r
                <mat-icon class="icon-size-16 mb-4 text-hint" [svgIcon]="'heroicons_outline:magnifying-glass'"></mat-icon>\r
                <h3 class="text-xl font-semibold text-secondary">{{ 'smartScan.noResults' | transloco }}</h3>\r
            </div>\r
        } @else {\r
            @if (viewMode() === 'cards') {\r
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">\r
                    @for (scan of filteredScans; track scan._id) {\r
                        <div\r
                            class="bg-card dark:bg-gray-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"\r
                            (click)="goToDetail(scan._id)"\r
                        >\r
                            <div class="aspect-[4/3] bg-slate-100 dark:bg-slate-900 relative overflow-hidden">\r
                                @if (scan.url) {\r
                                    <img\r
                                        [src]="scan.url"\r
                                        [alt]="scan.documentType"\r
                                        class="w-full h-full object-cover"\r
                                        loading="lazy"\r
                                    />\r
                                } @else {\r
                                    <div class="flex items-center justify-center h-full">\r
                                        <mat-icon\r
                                            class="icon-size-16 text-hint"\r
                                            [svgIcon]="'heroicons_outline:document'"\r
                                        ></mat-icon>\r
                                    </div>\r
                                }\r
                                <div class="absolute top-2 right-2">\r
                                    <span\r
                                        class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"\r
                                        [ngClass]="getStatusColor(scan.status)"\r
                                    >\r
                                        {{ getStatusLabel(scan.status) | transloco }}\r
                                    </span>\r
                                </div>\r
                            </div>\r
                            <div class="p-4">\r
                                <div class="flex items-center justify-between mb-1">\r
                                    <span class="font-mono text-sm font-medium text-primary-500">{{ scan.documentType }}</span>\r
                                    <span class="text-xs text-secondary">{{ getMethodLabel(scan.validationMethod) | transloco }}</span>\r
                                </div>\r
                                @if (getScanName(scan); as name) {\r
                                    <p class="text-sm font-medium text-gray-900 dark:text-white truncate">{{ name }}</p>\r
                                }\r
                                @if (scan.documentNumber) {\r
                                    <p class="text-sm text-secondary truncate" [title]="scan.documentNumber">\r
                                        {{ scan.documentNumber }}\r
                                    </p>\r
                                }\r
                                <p class="text-xs text-secondary mt-2">{{ formatDate(scan.createdAt) }}</p>\r
                            </div>\r
                        </div>\r
                    }\r
                </div>\r
                <div class="mt-6 flex flex-wrap items-center justify-end gap-3">\r
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
                        class="border rounded-2xl"\r
                        [length]="total()"\r
                        [pageSize]="pageSize()"\r
                        [pageIndex]="pageIndex()"\r
                        [hidePageSize]="true"\r
                        [showFirstLastButtons]="true"\r
                        (page)="onPaginatorEvent($event)"\r
                        aria-label="Select page of scans"\r
                    ></mat-paginator>\r
                </div>\r
            } @else {\r
                <div class="flex flex-col bg-card shadow overflow-hidden rounded-2xl w-full">\r
                    <div class="overflow-x-auto">\r
                        <table mat-table [dataSource]="dataSource" class="w-full bg-transparent">\r
                            <ng-container matColumnDef="image">\r
                                <th mat-header-cell *matHeaderCellDef class="pl-6 w-20"></th>\r
                                <td mat-cell *matCellDef="let scan" class="pl-6 py-3">\r
                                    @if (scan.url) {\r
                                        <img\r
                                            [src]="scan.url"\r
                                            [alt]="scan.documentType"\r
                                            class="w-14 h-10 object-cover rounded"\r
                                            loading="lazy"\r
                                        />\r
                                    } @else {\r
                                        <div class="w-14 h-10 bg-slate-100 dark:bg-slate-800 rounded flex items-center justify-center">\r
                                            <mat-icon class="icon-size-5 text-hint" [svgIcon]="'heroicons_outline:document'"></mat-icon>\r
                                        </div>\r
                                    }\r
                                </td>\r
                            </ng-container>\r
                            <ng-container matColumnDef="documentType">\r
                                <th mat-header-cell *matHeaderCellDef>{{ 'smartScan.documentType' | transloco }}</th>\r
                                <td mat-cell *matCellDef="let scan" class="font-mono text-sm">{{ scan.documentType }}</td>\r
                            </ng-container>\r
                            <ng-container matColumnDef="documentNumber">\r
                                <th mat-header-cell *matHeaderCellDef>{{ 'smartScan.documentNumber' | transloco }}</th>\r
                                <td mat-cell *matCellDef="let scan" class="text-secondary">{{ scan.documentNumber || '-' }}</td>\r
                            </ng-container>\r
                            <ng-container matColumnDef="name">\r
                                <th mat-header-cell *matHeaderCellDef>{{ 'smartScan.name' | transloco }}</th>\r
                                <td mat-cell *matCellDef="let scan" class="text-secondary">{{ getScanName(scan) || '-' }}</td>\r
                            </ng-container>\r
                            <ng-container matColumnDef="status">\r
                                <th mat-header-cell *matHeaderCellDef>{{ 'smartScan.status' | transloco }}</th>\r
                                <td mat-cell *matCellDef="let scan">\r
                                    <span\r
                                        class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"\r
                                        [ngClass]="getStatusColor(scan.status)"\r
                                    >\r
                                        {{ getStatusLabel(scan.status) | transloco }}\r
                                    </span>\r
                                </td>\r
                            </ng-container>\r
                            <ng-container matColumnDef="method">\r
                                <th mat-header-cell *matHeaderCellDef>{{ 'smartScan.method' | transloco }}</th>\r
                                <td mat-cell *matCellDef="let scan" class="text-secondary text-sm">\r
                                    {{ getMethodLabel(scan.validationMethod) | transloco }}\r
                                </td>\r
                            </ng-container>\r
                            <ng-container matColumnDef="country">\r
                                <th mat-header-cell *matHeaderCellDef>{{ 'smartScan.country' | transloco }}</th>\r
                                <td mat-cell *matCellDef="let scan" class="text-secondary">{{ scan.country || '-' }}</td>\r
                            </ng-container>\r
                            <ng-container matColumnDef="date">\r
                                <th mat-header-cell *matHeaderCellDef>{{ 'smartScan.date' | transloco }}</th>\r
                                <td mat-cell *matCellDef="let scan" class="text-secondary whitespace-nowrap">\r
                                    {{ formatDate(scan.createdAt) }}\r
                                </td>\r
                            </ng-container>\r
                            <tr\r
                                mat-header-row\r
                                *matHeaderRowDef="displayedColumns"\r
                                class="h-12 text-xs font-semibold uppercase text-secondary bg-gray-50 dark:bg-black dark:bg-opacity-5"\r
                            ></tr>\r
                            <tr\r
                                mat-row\r
                                *matRowDef="let row; columns: displayedColumns"\r
                                class="hover:bg-gray-50 dark:hover:bg-black dark:hover:bg-opacity-5 transition-colors cursor-pointer"\r
                                (click)="goToDetail(row._id)"\r
                            ></tr>\r
                        </table>\r
                    </div>\r
                    <div class="flex flex-wrap items-center justify-end gap-3 border-t px-3 py-2">\r
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
                            [length]="total()"\r
                            [pageSize]="pageSize()"\r
                            [pageIndex]="pageIndex()"\r
                            [hidePageSize]="true"\r
                            [showFirstLastButtons]="true"\r
                            (page)="onPaginatorEvent($event)"\r
                            aria-label="Select page of scans"\r
                        ></mat-paginator>\r
                    </div>\r
                </div>\r
            }\r
        }\r
        </div>\r
    </div>\r
</div>\r
` }]
  }], () => [], { paginator: [{
    type: ViewChild,
    args: [MatPaginator]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ScanListComponent, { className: "ScanListComponent", filePath: "src/app/modules/smart-enroll/smart-scan/scan-list/scan-list.component.ts", lineNumber: 70 });
})();
export {
  ScanListComponent
};
//# sourceMappingURL=chunk-PMSA5QMQ.js.map
