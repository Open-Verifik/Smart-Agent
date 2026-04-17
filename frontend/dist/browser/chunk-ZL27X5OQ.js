import {
  SmartScanService
} from "./chunk-FS2ZUC6W.js";
import {
  MatButtonToggle,
  MatButtonToggleGroup,
  MatButtonToggleModule
} from "./chunk-ZS5MQPSO.js";
import "./chunk-MJXNRHWH.js";
import "./chunk-346ISJSG.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-HZKTYM3F.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-EL6Z63TT.js";
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
} from "./chunk-7XJE6LU4.js";
import {
  MatPaginator,
  MatPaginatorModule
} from "./chunk-RJTDXPAX.js";
import {
  DateTime
} from "./chunk-BAVSUFW7.js";
import "./chunk-6KHU2J3U.js";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-LHOHCIQM.js";
import {
  MatSelectModule
} from "./chunk-AY2HQ4EH.js";
import "./chunk-SYP4RNRN.js";
import {
  MatFormField,
  MatFormFieldModule,
  MatPrefix,
  MatSuffix
} from "./chunk-3YVZWUPK.js";
import "./chunk-L4JZMXIC.js";
import "./chunk-2W5F3UIW.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-TX3AVWPC.js";
import "./chunk-OIBNGD5S.js";
import {
  TranslocoModule,
  TranslocoPipe
} from "./chunk-VHMFS3U6.js";
import "./chunk-R4RYJRMO.js";
import "./chunk-32YYYLAD.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-SE37W2G4.js";
import {
  CommonModule,
  Component,
  MatButton,
  MatButtonModule,
  MatIconButton,
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
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
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
} from "./chunk-YTOBX75K.js";
import {
  __spreadValues
} from "./chunk-KTESVR3Q.js";

// src/app/modules/smart-enroll/smart-scan/scan-list/scan-list.component.ts
var _c0 = () => [6, 12, 24, 48];
var _forTrack0 = ($index, $item) => $item._id;
function ScanListComponent_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 25);
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
function ScanListComponent_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275element(1, "mat-spinner", 26);
    \u0275\u0275elementEnd();
  }
}
function ScanListComponent_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275element(1, "mat-icon", 27);
    \u0275\u0275elementStart(2, "h3", 28);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 29);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 30);
    \u0275\u0275listener("click", function ScanListComponent_Conditional_41_Template_button_click_8_listener() {
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
function ScanListComponent_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275element(1, "mat-icon", 27);
    \u0275\u0275elementStart(2, "h3", 28);
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
function ScanListComponent_Conditional_43_Conditional_0_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 37);
  }
  if (rf & 2) {
    const scan_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", scan_r6.url, \u0275\u0275sanitizeUrl)("alt", scan_r6.documentType);
  }
}
function ScanListComponent_Conditional_43_Conditional_0_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275element(1, "mat-icon", 48);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("svgIcon", "heroicons_outline:document");
  }
}
function ScanListComponent_Conditional_43_Conditional_0_For_2_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx);
  }
}
function ScanListComponent_Conditional_43_Conditional_0_For_2_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 46);
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
function ScanListComponent_Conditional_43_Conditional_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275listener("click", function ScanListComponent_Conditional_43_Conditional_0_For_2_Template_div_click_0_listener() {
      const scan_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.goToDetail(scan_r6._id));
    });
    \u0275\u0275elementStart(1, "div", 36);
    \u0275\u0275template(2, ScanListComponent_Conditional_43_Conditional_0_For_2_Conditional_2_Template, 1, 2, "img", 37)(3, ScanListComponent_Conditional_43_Conditional_0_For_2_Conditional_3_Template, 2, 1, "div", 38);
    \u0275\u0275elementStart(4, "div", 39)(5, "span", 40);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 41)(9, "div", 42)(10, "span", 43);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 44);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(15, ScanListComponent_Conditional_43_Conditional_0_For_2_Conditional_15_Template, 2, 1, "p", 45)(16, ScanListComponent_Conditional_43_Conditional_0_For_2_Conditional_16_Template, 2, 2, "p", 46);
    \u0275\u0275elementStart(17, "p", 47);
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
function ScanListComponent_Conditional_43_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275repeaterCreate(1, ScanListComponent_Conditional_43_Conditional_0_For_2_Template, 19, 12, "div", 33, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-paginator", 34);
    \u0275\u0275listener("page", function ScanListComponent_Conditional_43_Conditional_0_Template_mat_paginator_page_3_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPaginatorEvent($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.filteredScans);
    \u0275\u0275advance(2);
    \u0275\u0275property("length", ctx_r1.total())("pageSize", ctx_r1.pageSize())("pageIndex", ctx_r1.pageIndex())("pageSizeOptions", \u0275\u0275pureFunction0(5, _c0))("showFirstLastButtons", true);
  }
}
function ScanListComponent_Conditional_43_Conditional_1_th_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "th", 70);
  }
}
function ScanListComponent_Conditional_43_Conditional_1_td_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 72);
  }
  if (rf & 2) {
    const scan_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", scan_r8.url, \u0275\u0275sanitizeUrl)("alt", scan_r8.documentType);
  }
}
function ScanListComponent_Conditional_43_Conditional_1_td_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275element(1, "mat-icon", 74);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("svgIcon", "heroicons_outline:document");
  }
}
function ScanListComponent_Conditional_43_Conditional_1_td_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 71);
    \u0275\u0275template(1, ScanListComponent_Conditional_43_Conditional_1_td_5_Conditional_1_Template, 1, 2, "img", 72)(2, ScanListComponent_Conditional_43_Conditional_1_td_5_Conditional_2_Template, 2, 1, "div", 73);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const scan_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(scan_r8.url ? 1 : 2);
  }
}
function ScanListComponent_Conditional_43_Conditional_1_th_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 75);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "smartScan.documentType"));
  }
}
function ScanListComponent_Conditional_43_Conditional_1_td_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 76);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const scan_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(scan_r9.documentType);
  }
}
function ScanListComponent_Conditional_43_Conditional_1_th_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 75);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "smartScan.documentNumber"));
  }
}
function ScanListComponent_Conditional_43_Conditional_1_td_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 77);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const scan_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(scan_r10.documentNumber || "-");
  }
}
function ScanListComponent_Conditional_43_Conditional_1_th_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 75);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "smartScan.name"));
  }
}
function ScanListComponent_Conditional_43_Conditional_1_td_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 77);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const scan_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getScanName(scan_r11) || "-");
  }
}
function ScanListComponent_Conditional_43_Conditional_1_th_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 75);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "smartScan.status"));
  }
}
function ScanListComponent_Conditional_43_Conditional_1_td_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 78)(1, "span", 40);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const scan_r12 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.getStatusColor(scan_r12.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, ctx_r1.getStatusLabel(scan_r12.status)), " ");
  }
}
function ScanListComponent_Conditional_43_Conditional_1_th_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 75);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "smartScan.method"));
  }
}
function ScanListComponent_Conditional_43_Conditional_1_td_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 79);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const scan_r13 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, ctx_r1.getMethodLabel(scan_r13.validationMethod)), " ");
  }
}
function ScanListComponent_Conditional_43_Conditional_1_th_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 75);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "smartScan.country"));
  }
}
function ScanListComponent_Conditional_43_Conditional_1_td_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 77);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const scan_r14 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(scan_r14.country || "-");
  }
}
function ScanListComponent_Conditional_43_Conditional_1_th_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 75);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "smartScan.date"));
  }
}
function ScanListComponent_Conditional_43_Conditional_1_td_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 80);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const scan_r15 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatDate(scan_r15.createdAt), " ");
  }
}
function ScanListComponent_Conditional_43_Conditional_1_tr_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 81);
  }
}
function ScanListComponent_Conditional_43_Conditional_1_tr_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 82);
    \u0275\u0275listener("click", function ScanListComponent_Conditional_43_Conditional_1_tr_28_Template_tr_click_0_listener() {
      const row_r17 = \u0275\u0275restoreView(_r16).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.goToDetail(row_r17._id));
    });
    \u0275\u0275elementEnd();
  }
}
function ScanListComponent_Conditional_43_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 31)(1, "div", 49)(2, "table", 50);
    \u0275\u0275elementContainerStart(3, 51);
    \u0275\u0275template(4, ScanListComponent_Conditional_43_Conditional_1_th_4_Template, 1, 0, "th", 52)(5, ScanListComponent_Conditional_43_Conditional_1_td_5_Template, 3, 1, "td", 53);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(6, 54);
    \u0275\u0275template(7, ScanListComponent_Conditional_43_Conditional_1_th_7_Template, 3, 3, "th", 55)(8, ScanListComponent_Conditional_43_Conditional_1_td_8_Template, 2, 1, "td", 56);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(9, 57);
    \u0275\u0275template(10, ScanListComponent_Conditional_43_Conditional_1_th_10_Template, 3, 3, "th", 55)(11, ScanListComponent_Conditional_43_Conditional_1_td_11_Template, 2, 1, "td", 58);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(12, 59);
    \u0275\u0275template(13, ScanListComponent_Conditional_43_Conditional_1_th_13_Template, 3, 3, "th", 55)(14, ScanListComponent_Conditional_43_Conditional_1_td_14_Template, 2, 1, "td", 58);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(15, 60);
    \u0275\u0275template(16, ScanListComponent_Conditional_43_Conditional_1_th_16_Template, 3, 3, "th", 55)(17, ScanListComponent_Conditional_43_Conditional_1_td_17_Template, 4, 4, "td", 61);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(18, 62);
    \u0275\u0275template(19, ScanListComponent_Conditional_43_Conditional_1_th_19_Template, 3, 3, "th", 55)(20, ScanListComponent_Conditional_43_Conditional_1_td_20_Template, 3, 3, "td", 63);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(21, 64);
    \u0275\u0275template(22, ScanListComponent_Conditional_43_Conditional_1_th_22_Template, 3, 3, "th", 55)(23, ScanListComponent_Conditional_43_Conditional_1_td_23_Template, 2, 1, "td", 58);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(24, 65);
    \u0275\u0275template(25, ScanListComponent_Conditional_43_Conditional_1_th_25_Template, 3, 3, "th", 55)(26, ScanListComponent_Conditional_43_Conditional_1_td_26_Template, 2, 1, "td", 66);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(27, ScanListComponent_Conditional_43_Conditional_1_tr_27_Template, 1, 0, "tr", 67)(28, ScanListComponent_Conditional_43_Conditional_1_tr_28_Template, 1, 0, "tr", 68);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "mat-paginator", 69);
    \u0275\u0275listener("page", function ScanListComponent_Conditional_43_Conditional_1_Template_mat_paginator_page_29_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPaginatorEvent($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("dataSource", ctx_r1.dataSource);
    \u0275\u0275advance(25);
    \u0275\u0275property("matHeaderRowDef", ctx_r1.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx_r1.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("length", ctx_r1.total())("pageSize", ctx_r1.pageSize())("pageIndex", ctx_r1.pageIndex())("pageSizeOptions", \u0275\u0275pureFunction0(8, _c0))("showFirstLastButtons", true);
  }
}
function ScanListComponent_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ScanListComponent_Conditional_43_Conditional_0_Template, 4, 6)(1, ScanListComponent_Conditional_43_Conditional_1_Template, 30, 9, "div", 31);
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
    this.viewMode = signal("cards");
    this.scans = this._scanService.scans;
    this.total = this._scanService.total;
    this.loading = this._scanService.loading;
    this.pageSize = this._scanService.pageSize;
    this.pageIndex = this._scanService.pageIndex;
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
    this._route.queryParams.subscribe((params) => {
      const view = params["view"];
      const targetView = view === "table" ? "table" : "cards";
      if (this.viewMode() !== targetView) {
        this.viewMode.set(targetView);
      }
      this.loadData();
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
    this.pageIndex.set(event.pageIndex);
    this.pageSize.set(event.pageSize);
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
    }, decls: 44, vars: 29, consts: [[1, "flex", "flex-col", "flex-auto", "min-w-0"], [1, "flex", "flex-col", "sm:flex-row", "flex-0", "sm:items-center", "sm:justify-between", "p-6", "sm:py-8", "sm:px-10", "border-b", "bg-card", "dark:bg-transparent"], [1, "flex-1", "min-w-0"], [1, "flex", "flex-wrap", "items-center", "font-medium", "text-xs", "text-secondary", "leading-none"], ["routerLink", "/chat", 1, "cursor-pointer", "text-primary-500", "hover:underline"], [1, "icon-size-4", "mx-2", "text-secondary", 3, "svgIcon"], [1, "cursor-default"], [1, "mt-2", "flex", "flex-col", "sm:flex-row", "sm:items-center", "sm:justify-between", "gap-4"], [1, "text-3xl", "md:text-4xl", "font-extrabold", "tracking-tight", "leading-7", "sm:leading-10", "truncate"], [1, "mt-1", "text-secondary"], [1, "flex", "items-center", "gap-3"], [1, "rounded-lg", "border", "border-slate-200", "dark:border-slate-700", 3, "valueChange", "value"], ["value", "cards"], [1, "icon-size-4", "mr-1", 3, "svgIcon"], ["value", "table"], ["mat-flat-button", "", "color", "primary", 1, "rounded-xl", 3, "click"], [1, "icon-size-5", "mr-2", 3, "svgIcon"], [1, "flex", "flex-col", "flex-auto", "p-6", "sm:p-10"], [1, "mb-6"], ["appearance", "outline", "subscriptSizing", "dynamic", 1, "w-full", "max-w-md"], ["matPrefix", "", 1, "mr-2"], ["matInput", "", 3, "ngModelChange", "ngModel", "placeholder"], ["matSuffix", "", "mat-icon-button", ""], [1, "flex", "items-center", "justify-center", "py-20"], [1, "flex", "flex-col", "items-center", "justify-center", "py-20", "text-center"], ["matSuffix", "", "mat-icon-button", "", 3, "click"], ["diameter", "40"], [1, "icon-size-16", "mb-4", "text-hint", 3, "svgIcon"], [1, "text-xl", "font-semibold", "text-secondary"], [1, "mt-2", "text-secondary", "max-w-md"], ["mat-flat-button", "", "color", "primary", 1, "mt-6", "rounded-xl", 3, "click"], [1, "flex", "flex-col", "bg-card", "shadow", "overflow-hidden", "rounded-2xl", "w-full"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "lg:grid-cols-3", "gap-6"], [1, "bg-card", "dark:bg-gray-800", "rounded-2xl", "border", "border-slate-200", "dark:border-slate-700", "overflow-hidden", "shadow-sm", "hover:shadow-md", "transition-shadow", "cursor-pointer"], ["aria-label", "Select page of scans", 1, "mt-6", "border", "rounded-2xl", 3, "page", "length", "pageSize", "pageIndex", "pageSizeOptions", "showFirstLastButtons"], [1, "bg-card", "dark:bg-gray-800", "rounded-2xl", "border", "border-slate-200", "dark:border-slate-700", "overflow-hidden", "shadow-sm", "hover:shadow-md", "transition-shadow", "cursor-pointer", 3, "click"], [1, "aspect-[4/3]", "bg-slate-100", "dark:bg-slate-900", "relative", "overflow-hidden"], ["loading", "lazy", 1, "w-full", "h-full", "object-cover", 3, "src", "alt"], [1, "flex", "items-center", "justify-center", "h-full"], [1, "absolute", "top-2", "right-2"], [1, "inline-flex", "items-center", "px-2.5", "py-0.5", "rounded-full", "text-xs", "font-medium", 3, "ngClass"], [1, "p-4"], [1, "flex", "items-center", "justify-between", "mb-1"], [1, "font-mono", "text-sm", "font-medium", "text-primary-500"], [1, "text-xs", "text-secondary"], [1, "text-sm", "font-medium", "text-gray-900", "dark:text-white", "truncate"], [1, "text-sm", "text-secondary", "truncate", 3, "title"], [1, "text-xs", "text-secondary", "mt-2"], [1, "icon-size-16", "text-hint", 3, "svgIcon"], [1, "overflow-x-auto"], ["mat-table", "", 1, "w-full", "bg-transparent", 3, "dataSource"], ["matColumnDef", "image"], ["mat-header-cell", "", "class", "pl-6 w-20", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "pl-6 py-3", 4, "matCellDef"], ["matColumnDef", "documentType"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "font-mono text-sm", 4, "matCellDef"], ["matColumnDef", "documentNumber"], ["mat-cell", "", "class", "text-secondary", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "status"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "method"], ["mat-cell", "", "class", "text-secondary text-sm", 4, "matCellDef"], ["matColumnDef", "country"], ["matColumnDef", "date"], ["mat-cell", "", "class", "text-secondary whitespace-nowrap", 4, "matCellDef"], ["mat-header-row", "", "class", "h-12 text-xs font-semibold uppercase text-secondary bg-gray-50 dark:bg-black dark:bg-opacity-5", 4, "matHeaderRowDef"], ["mat-row", "", "class", "hover:bg-gray-50 dark:hover:bg-black dark:hover:bg-opacity-5 transition-colors cursor-pointer", 3, "click", 4, "matRowDef", "matRowDefColumns"], ["aria-label", "Select page of scans", 1, "border-t", 3, "page", "length", "pageSize", "pageIndex", "pageSizeOptions", "showFirstLastButtons"], ["mat-header-cell", "", 1, "pl-6", "w-20"], ["mat-cell", "", 1, "pl-6", "py-3"], ["loading", "lazy", 1, "w-14", "h-10", "object-cover", "rounded", 3, "src", "alt"], [1, "w-14", "h-10", "bg-slate-100", "dark:bg-slate-800", "rounded", "flex", "items-center", "justify-center"], [1, "icon-size-5", "text-hint", 3, "svgIcon"], ["mat-header-cell", ""], ["mat-cell", "", 1, "font-mono", "text-sm"], ["mat-cell", "", 1, "text-secondary"], ["mat-cell", ""], ["mat-cell", "", 1, "text-secondary", "text-sm"], ["mat-cell", "", 1, "text-secondary", "whitespace-nowrap"], ["mat-header-row", "", 1, "h-12", "text-xs", "font-semibold", "uppercase", "text-secondary", "bg-gray-50", "dark:bg-black", "dark:bg-opacity-5"], ["mat-row", "", 1, "hover:bg-gray-50", "dark:hover:bg-black", "dark:hover:bg-opacity-5", "transition-colors", "cursor-pointer", 3, "click"]], template: function ScanListComponent_Template(rf, ctx) {
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
        \u0275\u0275template(40, ScanListComponent_Conditional_40_Template, 2, 0, "div", 23)(41, ScanListComponent_Conditional_41_Template, 11, 10, "div", 24)(42, ScanListComponent_Conditional_42_Template, 5, 4, "div", 24)(43, ScanListComponent_Conditional_43_Template, 2, 1);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275property("svgIcon", "heroicons_solid:chevron-right");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 15, "nav.smart_scan"));
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 17, "smartScan.title"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 19, "smartScan.subtitle"));
        \u0275\u0275advance(3);
        \u0275\u0275property("value", ctx.viewMode());
        \u0275\u0275advance(2);
        \u0275\u0275property("svgIcon", "heroicons_outline:squares-2x2");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(23, 21, "smartScan.viewCards"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("svgIcon", "heroicons_outline:table-cells");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(27, 23, "smartScan.viewTable"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("svgIcon", "heroicons_outline:plus");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(31, 25, "smartScan.newScan"), " ");
        \u0275\u0275advance(7);
        \u0275\u0275twoWayProperty("ngModel", ctx.quickSearch);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(38, 27, "smartScan.searchHistoryPlaceholder"));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.quickSearch ? 39 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading() ? 40 : ctx.filteredScans.length === 0 && ctx.scans().length === 0 ? 41 : ctx.filteredScans.length === 0 && ctx.quickSearch ? 42 : 43);
      }
    }, dependencies: [
      CommonModule,
      NgClass,
      FormsModule,
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
    ], encapsulation: ViewEncapsulation.None, template: `<div class="flex flex-col flex-auto min-w-0">
    <!-- Header -->
    <div
        class="flex flex-col sm:flex-row flex-0 sm:items-center sm:justify-between p-6 sm:py-8 sm:px-10 border-b bg-card dark:bg-transparent"
    >
        <div class="flex-1 min-w-0">
            <div class="flex flex-wrap items-center font-medium text-xs text-secondary leading-none">
                <a routerLink="/chat" class="cursor-pointer text-primary-500 hover:underline">Verifik</a>
                <mat-icon class="icon-size-4 mx-2 text-secondary" [svgIcon]="'heroicons_solid:chevron-right'"></mat-icon>
                <span class="cursor-default">{{ 'nav.smart_scan' | transloco }}</span>
            </div>
            <div class="mt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h2 class="text-3xl md:text-4xl font-extrabold tracking-tight leading-7 sm:leading-10 truncate">
                        {{ 'smartScan.title' | transloco }}
                    </h2>
                    <p class="mt-1 text-secondary">{{ 'smartScan.subtitle' | transloco }}</p>
                </div>
                <div class="flex items-center gap-3">
                    <mat-button-toggle-group
                        [value]="viewMode()"
                        (valueChange)="setViewMode($event)"
                        class="rounded-lg border border-slate-200 dark:border-slate-700"
                    >
                        <mat-button-toggle value="cards">
                            <mat-icon class="icon-size-4 mr-1" [svgIcon]="'heroicons_outline:squares-2x2'"></mat-icon>
                            {{ 'smartScan.viewCards' | transloco }}
                        </mat-button-toggle>
                        <mat-button-toggle value="table">
                            <mat-icon class="icon-size-4 mr-1" [svgIcon]="'heroicons_outline:table-cells'"></mat-icon>
                            {{ 'smartScan.viewTable' | transloco }}
                        </mat-button-toggle>
                    </mat-button-toggle-group>
                    <button
                        mat-flat-button
                        color="primary"
                        (click)="goToNewScan()"
                        class="rounded-xl"
                    >
                        <mat-icon class="icon-size-5 mr-2" [svgIcon]="'heroicons_outline:plus'"></mat-icon>
                        {{ 'smartScan.newScan' | transloco }}
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- Main Content -->
    <div class="flex flex-col flex-auto p-6 sm:p-10">
        <!-- Search toolbar (advanced filters disabled for now) -->
        <div class="mb-6">
            <mat-form-field appearance="outline" class="w-full max-w-md" subscriptSizing="dynamic">
                <mat-icon matPrefix class="mr-2">search</mat-icon>
                <input
                    matInput
                    [(ngModel)]="quickSearch"
                    [placeholder]="'smartScan.searchHistoryPlaceholder' | transloco"
                />
                @if (quickSearch) {
                    <button matSuffix mat-icon-button (click)="quickSearch = ''">
                        <mat-icon>close</mat-icon>
                    </button>
                }
            </mat-form-field>
        </div>

        @if (loading()) {
            <div class="flex items-center justify-center py-20">
                <mat-spinner diameter="40"></mat-spinner>
            </div>
        } @else if (filteredScans.length === 0 && scans().length === 0) {
            <div class="flex flex-col items-center justify-center py-20 text-center">
                <mat-icon
                    class="icon-size-16 mb-4 text-hint"
                    [svgIcon]="'heroicons_outline:document-magnifying-glass'"
                ></mat-icon>
                <h3 class="text-xl font-semibold text-secondary">{{ 'smartScan.noScans' | transloco }}</h3>
                <p class="mt-2 text-secondary max-w-md">{{ 'smartScan.noScansDesc' | transloco }}</p>
                <button mat-flat-button color="primary" (click)="goToNewScan()" class="mt-6 rounded-xl">
                    {{ 'smartScan.newScan' | transloco }}
                </button>
            </div>
        } @else if (filteredScans.length === 0 && quickSearch) {
            <div class="flex flex-col items-center justify-center py-20 text-center">
                <mat-icon class="icon-size-16 mb-4 text-hint" [svgIcon]="'heroicons_outline:magnifying-glass'"></mat-icon>
                <h3 class="text-xl font-semibold text-secondary">{{ 'smartScan.noResults' | transloco }}</h3>
            </div>
        } @else {
            @if (viewMode() === 'cards') {
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    @for (scan of filteredScans; track scan._id) {
                        <div
                            class="bg-card dark:bg-gray-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                            (click)="goToDetail(scan._id)"
                        >
                            <div class="aspect-[4/3] bg-slate-100 dark:bg-slate-900 relative overflow-hidden">
                                @if (scan.url) {
                                    <img
                                        [src]="scan.url"
                                        [alt]="scan.documentType"
                                        class="w-full h-full object-cover"
                                        loading="lazy"
                                    />
                                } @else {
                                    <div class="flex items-center justify-center h-full">
                                        <mat-icon
                                            class="icon-size-16 text-hint"
                                            [svgIcon]="'heroicons_outline:document'"
                                        ></mat-icon>
                                    </div>
                                }
                                <div class="absolute top-2 right-2">
                                    <span
                                        class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
                                        [ngClass]="getStatusColor(scan.status)"
                                    >
                                        {{ getStatusLabel(scan.status) | transloco }}
                                    </span>
                                </div>
                            </div>
                            <div class="p-4">
                                <div class="flex items-center justify-between mb-1">
                                    <span class="font-mono text-sm font-medium text-primary-500">{{ scan.documentType }}</span>
                                    <span class="text-xs text-secondary">{{ getMethodLabel(scan.validationMethod) | transloco }}</span>
                                </div>
                                @if (getScanName(scan); as name) {
                                    <p class="text-sm font-medium text-gray-900 dark:text-white truncate">{{ name }}</p>
                                }
                                @if (scan.documentNumber) {
                                    <p class="text-sm text-secondary truncate" [title]="scan.documentNumber">
                                        {{ scan.documentNumber }}
                                    </p>
                                }
                                <p class="text-xs text-secondary mt-2">{{ formatDate(scan.createdAt) }}</p>
                            </div>
                        </div>
                    }
                </div>
                <mat-paginator
                    class="mt-6 border rounded-2xl"
                    [length]="total()"
                    [pageSize]="pageSize()"
                    [pageIndex]="pageIndex()"
                    [pageSizeOptions]="[6, 12, 24, 48]"
                    [showFirstLastButtons]="true"
                    (page)="onPaginatorEvent($event)"
                    aria-label="Select page of scans"
                ></mat-paginator>
            } @else {
                <div class="flex flex-col bg-card shadow overflow-hidden rounded-2xl w-full">
                    <div class="overflow-x-auto">
                        <table mat-table [dataSource]="dataSource" class="w-full bg-transparent">
                            <ng-container matColumnDef="image">
                                <th mat-header-cell *matHeaderCellDef class="pl-6 w-20"></th>
                                <td mat-cell *matCellDef="let scan" class="pl-6 py-3">
                                    @if (scan.url) {
                                        <img
                                            [src]="scan.url"
                                            [alt]="scan.documentType"
                                            class="w-14 h-10 object-cover rounded"
                                            loading="lazy"
                                        />
                                    } @else {
                                        <div class="w-14 h-10 bg-slate-100 dark:bg-slate-800 rounded flex items-center justify-center">
                                            <mat-icon class="icon-size-5 text-hint" [svgIcon]="'heroicons_outline:document'"></mat-icon>
                                        </div>
                                    }
                                </td>
                            </ng-container>
                            <ng-container matColumnDef="documentType">
                                <th mat-header-cell *matHeaderCellDef>{{ 'smartScan.documentType' | transloco }}</th>
                                <td mat-cell *matCellDef="let scan" class="font-mono text-sm">{{ scan.documentType }}</td>
                            </ng-container>
                            <ng-container matColumnDef="documentNumber">
                                <th mat-header-cell *matHeaderCellDef>{{ 'smartScan.documentNumber' | transloco }}</th>
                                <td mat-cell *matCellDef="let scan" class="text-secondary">{{ scan.documentNumber || '-' }}</td>
                            </ng-container>
                            <ng-container matColumnDef="name">
                                <th mat-header-cell *matHeaderCellDef>{{ 'smartScan.name' | transloco }}</th>
                                <td mat-cell *matCellDef="let scan" class="text-secondary">{{ getScanName(scan) || '-' }}</td>
                            </ng-container>
                            <ng-container matColumnDef="status">
                                <th mat-header-cell *matHeaderCellDef>{{ 'smartScan.status' | transloco }}</th>
                                <td mat-cell *matCellDef="let scan">
                                    <span
                                        class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
                                        [ngClass]="getStatusColor(scan.status)"
                                    >
                                        {{ getStatusLabel(scan.status) | transloco }}
                                    </span>
                                </td>
                            </ng-container>
                            <ng-container matColumnDef="method">
                                <th mat-header-cell *matHeaderCellDef>{{ 'smartScan.method' | transloco }}</th>
                                <td mat-cell *matCellDef="let scan" class="text-secondary text-sm">
                                    {{ getMethodLabel(scan.validationMethod) | transloco }}
                                </td>
                            </ng-container>
                            <ng-container matColumnDef="country">
                                <th mat-header-cell *matHeaderCellDef>{{ 'smartScan.country' | transloco }}</th>
                                <td mat-cell *matCellDef="let scan" class="text-secondary">{{ scan.country || '-' }}</td>
                            </ng-container>
                            <ng-container matColumnDef="date">
                                <th mat-header-cell *matHeaderCellDef>{{ 'smartScan.date' | transloco }}</th>
                                <td mat-cell *matCellDef="let scan" class="text-secondary whitespace-nowrap">
                                    {{ formatDate(scan.createdAt) }}
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
                                class="hover:bg-gray-50 dark:hover:bg-black dark:hover:bg-opacity-5 transition-colors cursor-pointer"
                                (click)="goToDetail(row._id)"
                            ></tr>
                        </table>
                    </div>
                    <mat-paginator
                        class="border-t"
                        [length]="total()"
                        [pageSize]="pageSize()"
                        [pageIndex]="pageIndex()"
                        [pageSizeOptions]="[6, 12, 24, 48]"
                        [showFirstLastButtons]="true"
                        (page)="onPaginatorEvent($event)"
                        aria-label="Select page of scans"
                    ></mat-paginator>
                </div>
            }
        }
    </div>
</div>
` }]
  }], () => [], { paginator: [{
    type: ViewChild,
    args: [MatPaginator]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ScanListComponent, { className: "ScanListComponent", filePath: "src/app/modules/smart-enroll/smart-scan/scan-list/scan-list.component.ts", lineNumber: 67 });
})();
export {
  ScanListComponent
};
//# sourceMappingURL=chunk-ZL27X5OQ.js.map
