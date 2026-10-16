import {
  fleetReportFileName,
  getFleetCountryFlag,
  getFleetCountryPlaceholders,
  mergeFleetCountries,
  pdfBlobFromResponse
} from "./chunk-YN2AWHGN.js";
import {
  FleetNavComponent,
  SmartFleetService,
  savedReportsOf
} from "./chunk-J5ZY7FOA.js";
import "./chunk-UHFTLO3H.js";
import {
  SmartReportService
} from "./chunk-PFDQ553Y.js";
import "./chunk-4SMGTRRJ.js";
import "./chunk-T3ZUDNVS.js";
import "./chunk-USONFPXP.js";
import {
  MatSnackBar,
  MatSnackBarModule
} from "./chunk-TXEVGTMX.js";
import "./chunk-H3UX3NVF.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-FTSXFXXU.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-UUIVQBYS.js";
import "./chunk-OIBNGD5S.js";
import "./chunk-WOW6NB5H.js";
import {
  MatAnchor,
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
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-DVRFI3SJ.js";
import {
  TranslocoModule,
  TranslocoPipe,
  TranslocoService
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
  NgClass,
  NgForOf,
  NgIf,
  ViewEncapsulation,
  computed,
  firstValueFrom,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
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
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-PNPEHISK.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-F5M2C4EZ.js";

// src/app/modules/smart-fleet/assets/fleet-asset-detail.component.ts
var _c0 = () => [];
var _c1 = (a0) => ({ days: a0 });
function FleetAssetDetailComponent_span_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 33)(1, "span", 34);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getCountryFlag(((tmp_1_0 = ctx_r0.asset()) == null ? null : tmp_1_0.country) || "co"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.countryLabel((tmp_2_0 = ctx_r0.asset()) == null ? null : tmp_2_0.country), " ");
  }
}
function FleetAssetDetailComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "span", 36)(2, "mat-icon", 37);
    \u0275\u0275text(3, "history");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementStart(6, "strong", 38);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span", 39)(9, "mat-icon", 40);
    \u0275\u0275text(10, "schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "transloco");
    \u0275\u0275elementStart(13, "strong", 41);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_5_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 5, "smartFleet.assets.lastChecked"), ": ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.formatDate((tmp_2_0 = ctx_r0.asset()) == null ? null : tmp_2_0.lastCheckedAt));
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", ctx_r0.scheduleHint());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 7, "smartFleet.assets.nextCheck"), ": ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.formatDate((tmp_5_0 = ctx_r0.asset()) == null ? null : tmp_5_0.nextCheckAt));
  }
}
function FleetAssetDetailComponent_mat_spinner_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 42);
  }
}
function FleetAssetDetailComponent_mat_icon_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 20);
    \u0275\u0275text(1, "refresh");
    \u0275\u0275elementEnd();
  }
}
function FleetAssetDetailComponent_button_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 43);
    \u0275\u0275listener("click", function FleetAssetDetailComponent_button_43_Template_button_click_0_listener() {
      const tab_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setActiveTab(tab_r3));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tab_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("bg-stone-900", ctx_r0.activeTab() === tab_r3)("text-white", ctx_r0.activeTab() === tab_r3)("text-stone-600", ctx_r0.activeTab() !== tab_r3)("hover:bg-stone-100", ctx_r0.activeTab() !== tab_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 9, "smartFleet.detail.tab." + tab_r3), " ");
  }
}
function FleetAssetDetailComponent_div_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275element(1, "mat-spinner", 45);
    \u0275\u0275elementEnd();
  }
}
function FleetAssetDetailComponent_div_47_option_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r5 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", option_r5.code)("disabled", !option_r5.available);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.countryOptionLabel(option_r5), " ");
  }
}
function FleetAssetDetailComponent_div_47_mat_spinner_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 42);
  }
}
function FleetAssetDetailComponent_div_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46)(1, "h2", 47);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 48)(5, "label", 49)(6, "span", 50);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "select", 51);
    \u0275\u0275listener("ngModelChange", function FleetAssetDetailComponent_div_47_Template_select_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setEditCountry($event));
    });
    \u0275\u0275template(10, FleetAssetDetailComponent_div_47_option_10_Template, 2, 3, "option", 52);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "label", 49)(12, "span", 50);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 53);
    \u0275\u0275listener("ngModelChange", function FleetAssetDetailComponent_div_47_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.updateEditDraft("plate", $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "label", 49)(17, "span", 50);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "input", 54);
    \u0275\u0275listener("ngModelChange", function FleetAssetDetailComponent_div_47_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.updateEditDraft("nickname", $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "label", 49)(22, "span", 50);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "input", 55);
    \u0275\u0275listener("ngModelChange", function FleetAssetDetailComponent_div_47_Template_input_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.updateEditDraft("group", $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "label", 49)(27, "span", 50);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "input", 56);
    \u0275\u0275listener("ngModelChange", function FleetAssetDetailComponent_div_47_Template_input_ngModelChange_30_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.updateEditDraft("ownerDocumentType", $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "label", 49)(32, "span", 50);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "input", 57);
    \u0275\u0275listener("ngModelChange", function FleetAssetDetailComponent_div_47_Template_input_ngModelChange_35_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.updateEditDraft("ownerDocumentNumber", $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "label", 49)(37, "span", 50);
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "input", 58);
    \u0275\u0275listener("ngModelChange", function FleetAssetDetailComponent_div_47_Template_input_ngModelChange_40_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.updateEditDraft("vin", $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "label", 59)(42, "span", 50);
    \u0275\u0275text(43);
    \u0275\u0275pipe(44, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "input", 60);
    \u0275\u0275listener("ngModelChange", function FleetAssetDetailComponent_div_47_Template_input_ngModelChange_45_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.updateEditDraft("notes", $event));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(46, "div", 61)(47, "button", 62);
    \u0275\u0275listener("click", function FleetAssetDetailComponent_div_47_Template_button_click_47_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cancelEdit());
    });
    \u0275\u0275text(48);
    \u0275\u0275pipe(49, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "button", 21);
    \u0275\u0275listener("click", function FleetAssetDetailComponent_div_47_Template_button_click_50_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.saveEdit());
    });
    \u0275\u0275template(51, FleetAssetDetailComponent_div_47_mat_spinner_51_Template, 1, 0, "mat-spinner", 22);
    \u0275\u0275text(52);
    \u0275\u0275pipe(53, "transloco");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 24, "smartFleet.assets.editAsset"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 26, "smartFleet.assets.country"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r0.editDraft().country);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.countryOptions());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 28, "smartFleet.assets.plate"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r0.editDraft().plate)("placeholder", ctx_r0.editPlaceholders().plate);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 30, "smartFleet.assets.nickname"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r0.editDraft().nickname);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 32, "smartFleet.assets.group"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r0.editDraft().group);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(29, 34, "smartFleet.assets.documentType"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r0.editDraft().ownerDocumentType)("placeholder", ctx_r0.editPlaceholders().documentType);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(34, 36, "smartFleet.assets.documentNumber"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r0.editDraft().ownerDocumentNumber);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(39, 38, "smartFleet.assets.vin"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r0.editDraft().vin);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(44, 40, "smartFleet.assets.notes"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r0.editDraft().notes);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(49, 42, "smartFleet.cancel"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r0.canSaveEdit() || ctx_r0.isSaving());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isSaving());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(53, 44, "smartFleet.assets.save"), " ");
  }
}
function FleetAssetDetailComponent_ng_container_48_p_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 66);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "smartFleet.detail.noSnapshots"), " ");
  }
}
function FleetAssetDetailComponent_ng_container_48_div_2_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const section_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(2, 2, "smartFleet.detail.checkFailed"), ": ", section_r6.error, " ");
  }
}
function FleetAssetDetailComponent_ng_container_48_div_2_table_8_tr_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 77);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td", 78);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r7 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "smartFleet.field." + row_r7.label), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r0.rowClasses(row_r7.variant));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r7.value, " ");
  }
}
function FleetAssetDetailComponent_ng_container_48_div_2_table_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 74)(1, "tbody", 75);
    \u0275\u0275template(2, FleetAssetDetailComponent_ng_container_48_div_2_table_8_tr_2_Template, 6, 5, "tr", 76);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const section_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", section_r6.rows);
  }
}
function FleetAssetDetailComponent_ng_container_48_div_2_div_9_th_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 84);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const column_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", column_r8, " ");
  }
}
function FleetAssetDetailComponent_ng_container_48_div_2_div_9_tr_6_td_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 87);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const column_r9 = ctx.$implicit;
    const row_r10 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.cell(row_r10, column_r9), " ");
  }
}
function FleetAssetDetailComponent_ng_container_48_div_2_div_9_tr_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 85);
    \u0275\u0275template(1, FleetAssetDetailComponent_ng_container_48_div_2_div_9_tr_6_td_1_Template, 2, 1, "td", 86);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const section_r6 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.listColumns(section_r6.list));
  }
}
function FleetAssetDetailComponent_ng_container_48_div_2_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 79)(1, "table", 74)(2, "thead", 80)(3, "tr", 81);
    \u0275\u0275template(4, FleetAssetDetailComponent_ng_container_48_div_2_div_9_th_4_Template, 2, 1, "th", 82);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "tbody", 75);
    \u0275\u0275template(6, FleetAssetDetailComponent_ng_container_48_div_2_div_9_tr_6_Template, 2, 1, "tr", 83);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const section_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r0.listColumns(section_r6.list));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", section_r6.list);
  }
}
function FleetAssetDetailComponent_ng_container_48_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67)(1, "div", 68)(2, "h2", 47);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 69);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, FleetAssetDetailComponent_ng_container_48_div_2_div_7_Template, 3, 4, "div", 70)(8, FleetAssetDetailComponent_ng_container_48_div_2_table_8_Template, 3, 1, "table", 71)(9, FleetAssetDetailComponent_ng_container_48_div_2_div_9_Template, 7, 2, "div", 72);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const section_r6 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 5, "smartFleet.checkType." + section_r6.checkType), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.formatDate(section_r6.observedAt));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !section_r6.isSuccessful);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", section_r6.rows.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", section_r6.list == null ? null : section_r6.list.length);
  }
}
function FleetAssetDetailComponent_ng_container_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, FleetAssetDetailComponent_ng_container_48_p_1_Template, 3, 3, "p", 64)(2, FleetAssetDetailComponent_ng_container_48_div_2_Template, 10, 7, "div", 65);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.report().length);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.report());
  }
}
function FleetAssetDetailComponent_div_49_p_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 90);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "smartFleet.detail.noSnapshots"), " ");
  }
}
function FleetAssetDetailComponent_div_49_table_2_tr_16_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 97);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const snapshot_r11 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.snapshotErrorText(snapshot_r11));
  }
}
function FleetAssetDetailComponent_div_49_table_2_tr_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 85)(1, "td", 92);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 93);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 84)(7, "span", 94);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, FleetAssetDetailComponent_div_49_table_2_tr_16_span_10_Template, 2, 1, "span", 95);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 96);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_12_0;
    const snapshot_r11 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatDate(snapshot_r11.observedAt), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 13, "smartFleet.checkType." + snapshot_r11.checkType), " ");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("bg-emerald-100", snapshot_r11.isSuccessful)("text-emerald-700", snapshot_r11.isSuccessful)("bg-red-100", !snapshot_r11.isSuccessful)("text-red-700", !snapshot_r11.isSuccessful);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 15, snapshot_r11.isSuccessful ? "smartFleet.detail.ok" : "smartFleet.detail.failed"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !snapshot_r11.isSuccessful);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (tmp_12_0 = snapshot_r11.creditsSpent) !== null && tmp_12_0 !== void 0 ? tmp_12_0 : 0, " ");
  }
}
function FleetAssetDetailComponent_div_49_table_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 74)(1, "thead", 80)(2, "tr", 81)(3, "th", 91);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 91);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 91);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 91);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "tbody", 75);
    \u0275\u0275template(16, FleetAssetDetailComponent_div_49_table_2_tr_16_Template, 13, 17, "tr", 83);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 5, "smartFleet.detail.observedAt"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 7, "smartFleet.detail.check"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 9, "smartFleet.detail.result"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 11, "smartFleet.detail.credits"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r0.snapshots());
  }
}
function FleetAssetDetailComponent_div_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 88);
    \u0275\u0275template(1, FleetAssetDetailComponent_div_49_p_1_Template, 3, 3, "p", 89)(2, FleetAssetDetailComponent_div_49_table_2_Template, 17, 13, "table", 71);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.snapshots().length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.snapshots().length);
  }
}
function FleetAssetDetailComponent_div_50_p_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 90);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "smartFleet.alerts.empty"), " ");
  }
}
function FleetAssetDetailComponent_div_50_div_3_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 110);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const delivery_r12 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", ctx_r0.deliveryClasses(delivery_r12))("matTooltip", delivery_r12.error || delivery_r12.target || "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(2, 4, "smartFleet.channel." + delivery_r12.channel), ": ", delivery_r12.status, " ");
  }
}
function FleetAssetDetailComponent_div_50_div_3_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 111);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const alert_r13 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.deliverySummary(alert_r13));
  }
}
function FleetAssetDetailComponent_div_50_div_3_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 112);
    \u0275\u0275listener("click", function FleetAssetDetailComponent_div_50_div_3_button_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const alert_r13 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.acknowledge(alert_r13));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "smartFleet.alerts.acknowledge"), " ");
  }
}
function FleetAssetDetailComponent_div_50_div_3_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 113);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "smartFleet.alerts.acknowledged"));
  }
}
function FleetAssetDetailComponent_div_50_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 99)(1, "span", 100);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 101)(5, "p", 102);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 103);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 104);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 105);
    \u0275\u0275template(12, FleetAssetDetailComponent_div_50_div_3_span_12_Template, 3, 6, "span", 106)(13, FleetAssetDetailComponent_div_50_div_3_span_13_Template, 2, 1, "span", 107);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(14, FleetAssetDetailComponent_div_50_div_3_button_14_Template, 3, 3, "button", 108)(15, FleetAssetDetailComponent_div_50_div_3_span_15_Template, 3, 3, "span", 109);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const alert_r13 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.severityClasses(alert_r13.severity));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 9, "smartFleet.severity." + alert_r13.severity));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", alert_r13.title, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", alert_r13.message, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatDate(alert_r13.detectedAt), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", alert_r13.deliveries || \u0275\u0275pureFunction0(11, _c0));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(alert_r13.deliveries == null ? null : alert_r13.deliveries.length));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !alert_r13.acknowledgedAt);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", alert_r13.acknowledgedAt);
  }
}
function FleetAssetDetailComponent_div_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 88);
    \u0275\u0275template(1, FleetAssetDetailComponent_div_50_p_1_Template, 3, 3, "p", 89);
    \u0275\u0275elementStart(2, "div", 75);
    \u0275\u0275template(3, FleetAssetDetailComponent_div_50_div_3_Template, 16, 12, "div", 98);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.alerts().length);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.alerts());
  }
}
function FleetAssetDetailComponent_div_51_p_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 90);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementStart(3, "a", 117);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 4, "smartFleet.rules.emptyForAsset"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", ctx_r0.createRuleLink())("queryParams", ctx_r0.createRuleQuery());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 6, "smartFleet.rules.createOne"));
  }
}
function FleetAssetDetailComponent_div_51_div_14_div_1_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 69);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rule_r15 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, "smartFleet.rules.thresholdSummary", \u0275\u0275pureFunction1(4, _c1, rule_r15.thresholdDays)));
  }
}
function FleetAssetDetailComponent_div_51_div_14_div_1_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 125);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const channel_r16 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "smartFleet.channel." + channel_r16));
  }
}
function FleetAssetDetailComponent_div_51_div_14_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 119)(1, "span", 38);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 120);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 121);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, FleetAssetDetailComponent_div_51_div_14_div_1_span_9_Template, 3, 6, "span", 122)(10, FleetAssetDetailComponent_div_51_div_14_div_1_span_10_Template, 3, 3, "span", 123);
    \u0275\u0275elementStart(11, "a", 124);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const rule_r15 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("opacity-50", rule_r15.isActive === false);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(rule_r15.name || \u0275\u0275pipeBind1(3, 10, "smartFleet.checkType." + rule_r15.checkType));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.ruleScopeLabel(rule_r15));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 12, "smartFleet.frequency." + rule_r15.frequency));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", rule_r15.thresholdDays);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", rule_r15.channels || \u0275\u0275pureFunction0(16, _c0));
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", ctx_r0.createRuleLink())("queryParams", ctx_r0.editRuleQuery(rule_r15));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 14, "smartFleet.rules.edit"));
  }
}
function FleetAssetDetailComponent_div_51_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75);
    \u0275\u0275template(1, FleetAssetDetailComponent_div_51_div_14_div_1_Template, 14, 17, "div", 118);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.rules());
  }
}
function FleetAssetDetailComponent_div_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67)(1, "div", 68)(2, "div")(3, "h2", 102);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 103);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "a", 114)(9, "mat-icon", 115);
    \u0275\u0275text(10, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(13, FleetAssetDetailComponent_div_51_p_13_Template, 6, 8, "p", 89)(14, FleetAssetDetailComponent_div_51_div_14_Template, 2, 1, "div", 116);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 7, "smartFleet.detail.rulesTitle"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.scheduleHint(), " ");
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", ctx_r0.createRuleLink())("queryParams", ctx_r0.createRuleQuery());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 9, "smartFleet.rules.addRule"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r0.rules().length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.rules().length);
  }
}
function FleetAssetDetailComponent_div_52_p_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 128);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "smartFleet.detail.pdfsEmpty"), " ");
  }
}
function FleetAssetDetailComponent_div_52_div_9_div_1_mat_spinner_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 136);
  }
}
function FleetAssetDetailComponent_div_52_div_9_div_1_mat_icon_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 137);
    \u0275\u0275text(1, "download");
    \u0275\u0275elementEnd();
  }
}
function FleetAssetDetailComponent_div_52_div_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 130)(1, "mat-icon", 131);
    \u0275\u0275text(2, "picture_as_pdf");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 101)(4, "p", 132);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 69);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 133);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275listener("click", function FleetAssetDetailComponent_div_52_div_9_div_1_Template_button_click_9_listener() {
      const report_r18 = \u0275\u0275restoreView(_r17).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.downloadSavedReport(report_r18));
    });
    \u0275\u0275template(11, FleetAssetDetailComponent_div_52_div_9_div_1_mat_spinner_11_Template, 1, 0, "mat-spinner", 134)(12, FleetAssetDetailComponent_div_52_div_9_div_1_mat_icon_12_Template, 2, 0, "mat-icon", 135);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const report_r18 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", report_r18.templateName || \u0275\u0275pipeBind1(6, 6, "smartFleet.detail.pdfsNoTemplate"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatDate(report_r18.createdAt), " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.downloadingReport() !== null)("matTooltip", \u0275\u0275pipeBind1(10, 8, "smartFleet.assets.reportDownload"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.downloadingReport() === ctx_r0.reportKey(report_r18));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.downloadingReport() !== ctx_r0.reportKey(report_r18));
  }
}
function FleetAssetDetailComponent_div_52_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75);
    \u0275\u0275template(1, FleetAssetDetailComponent_div_52_div_9_div_1_Template, 13, 10, "div", 129);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.savedReports());
  }
}
function FleetAssetDetailComponent_div_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67)(1, "div", 126)(2, "h2", 102);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 103);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, FleetAssetDetailComponent_div_52_p_8_Template, 3, 3, "p", 127)(9, FleetAssetDetailComponent_div_52_div_9_Template, 2, 1, "div", 116);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 4, "smartFleet.detail.pdfsTitle"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 6, "smartFleet.detail.pdfsSubtitle"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r0.savedReports().length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.savedReports().length);
  }
}
function FleetAssetDetailComponent_div_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 67)(1, "div", 68)(2, "div")(3, "h2", 102);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 103);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 62);
    \u0275\u0275listener("click", function FleetAssetDetailComponent_div_53_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.copyInspect());
    });
    \u0275\u0275elementStart(10, "mat-icon", 115);
    \u0275\u0275text(11, "content_copy");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "pre", 138);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 4, "smartFleet.detail.inspectTitle"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 6, "smartFleet.detail.inspectSubtitle"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 8, "smartFleet.detail.copyInspect"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.inspectJson());
  }
}
var MS_PER_DAY = 24 * 60 * 60 * 1e3;
var FIELD_MAP = {
  soat: [
    { key: "policyNumber", label: "policyNumber" },
    { key: "insurer", label: "insurer" },
    { key: "issuedAt", label: "issuedAt" },
    { key: "expiresAt", label: "expiresAt" },
    { key: "status", label: "status" }
  ],
  rtm: [
    { key: "certificateNumber", label: "certificateNumber" },
    { key: "facility", label: "facility" },
    { key: "issuedAt", label: "issuedAt" },
    { key: "expiresAt", label: "expiresAt" },
    { key: "status", label: "status" }
  ],
  comparendos: [
    { key: "total", label: "ticketCount" },
    { key: "totalAmount", label: "totalAmount" }
  ],
  ownership: [
    { key: "ownerCount", label: "ownerCount" },
    { key: "primaryOwner", label: "primaryOwner" }
  ],
  claims: [{ key: "total", label: "claimCount" }]
};
var FleetAssetDetailComponent = class _FleetAssetDetailComponent {
  constructor() {
    this._fleetService = inject(SmartFleetService);
    this._route = inject(ActivatedRoute);
    this._router = inject(Router);
    this._transloco = inject(TranslocoService);
    this._snackBar = inject(MatSnackBar);
    this._reports = inject(SmartReportService);
    this.assetId = signal("");
    this.asset = signal(null);
    this.snapshots = signal([]);
    this.alerts = signal([]);
    this.rules = signal([]);
    this.isLoading = signal(false);
    this.isChecking = signal(false);
    this.isSaving = signal(false);
    this.showEditForm = signal(false);
    this.editDraft = signal({ country: "co", type: "vehicle" });
    this.countryOptions = signal(mergeFleetCountries([{ code: "co", available: true }]));
    this.tabs = ["report", "pdfs", "timeline", "alerts", "rules", "inspect"];
    this.activeTab = signal("report");
    this.savedReports = computed(() => savedReportsOf(this.asset()));
    this.downloadingReport = signal(null);
    this.editPlaceholders = computed(() => getFleetCountryPlaceholders(this.editDraft().country));
    this.canSaveEdit = computed(() => {
      const draft = this.editDraft();
      return Boolean(draft.plate?.trim() || draft.vin?.trim());
    });
    this.report = computed(() => {
      const newest = /* @__PURE__ */ new Map();
      for (const snapshot of this.snapshots()) {
        if (!newest.has(snapshot.checkType))
          newest.set(snapshot.checkType, snapshot);
      }
      return [...newest.values()].map((snapshot) => this._buildSection(snapshot));
    });
    this.openAlerts = computed(() => this.alerts().filter((alert) => !alert.acknowledgedAt));
    this.activeRules = computed(() => this.rules().filter((rule) => rule.isActive !== false));
    this.scheduleHint = computed(() => {
      const active = this.activeRules();
      if (!active.length) {
        return this._transloco.translate("smartFleet.detail.scheduleNoRules");
      }
      const labels = [
        ...new Set(active.map((rule) => {
          if (rule.frequency === "custom" && rule.intervalDays) {
            return this._transloco.translate("smartFleet.rules.customFrequencySummary", { days: rule.intervalDays });
          }
          return this._transloco.translate(`smartFleet.frequency.${rule.frequency || "weekly"}`);
        }))
      ];
      return this._transloco.translate("smartFleet.detail.scheduleHint", {
        frequencies: labels.join(", "),
        count: active.length
      });
    });
    this.inspectPayload = computed(() => {
      const newestByType = {};
      for (const snapshot of this.snapshots()) {
        if (!newestByType[snapshot.checkType])
          newestByType[snapshot.checkType] = snapshot;
      }
      return {
        asset: {
          id: this.asset()?._id,
          plate: this.asset()?.plate,
          country: this.asset()?.country,
          nextCheckAt: this.asset()?.nextCheckAt,
          lastCheckedAt: this.asset()?.lastCheckedAt,
          lastKnownState: this.asset()?.lastKnownState ?? {}
        },
        rules: this.rules().map((rule) => ({
          id: rule._id,
          checkType: rule.checkType,
          featureCode: rule.featureCode,
          frequency: rule.frequency,
          channels: rule.channels,
          isActive: rule.isActive,
          thresholdDays: rule.thresholdDays,
          webhookUrl: rule.webhookUrl
        })),
        newestSnapshots: Object.fromEntries(Object.entries(newestByType).map(([checkType, snapshot]) => [
          checkType,
          {
            featureCode: snapshot.featureCode,
            fingerprint: snapshot.fingerprint,
            creditsSpent: snapshot.creditsSpent,
            observedAt: snapshot.observedAt,
            isSuccessful: snapshot.isSuccessful,
            error: snapshot.error,
            normalized: snapshot.normalized
          }
        ]))
      };
    });
  }
  ngOnInit() {
    const id = this._route.snapshot.paramMap.get("id") ?? "";
    this.assetId.set(id);
    this._loadCountries();
    this._load();
    if (this._route.snapshot.queryParamMap.get("edit") === "1") {
      this.showEditForm.set(true);
    }
  }
  setActiveTab(tab) {
    this.activeTab.set(tab);
  }
  getCountryFlag(country) {
    return getFleetCountryFlag(country);
  }
  countryLabel(code) {
    return this._transloco.translate(`smartFleet.countries.${code || "co"}`);
  }
  countryOptionLabel(option) {
    const base = `${this.getCountryFlag(option.code)} ${this.countryLabel(option.code)}`;
    if (option.available)
      return base;
    return `${base} \u2014 ${this._transloco.translate("smartFleet.assets.comingSoon")}`;
  }
  openEdit() {
    const current = this.asset();
    if (!current)
      return;
    this.editDraft.set({
      country: current.country || "co",
      type: current.type || "vehicle",
      plate: current.plate || "",
      vin: current.vin || "",
      nickname: current.nickname || "",
      group: current.group || "",
      ownerDocumentType: current.ownerDocumentType || "",
      ownerDocumentNumber: current.ownerDocumentNumber || "",
      notes: current.notes || ""
    });
    this.showEditForm.set(true);
  }
  cancelEdit() {
    this.showEditForm.set(false);
  }
  updateEditDraft(field, value) {
    this.editDraft.update((draft) => __spreadProps(__spreadValues({}, draft), { [field]: value }));
  }
  setEditCountry(code) {
    const option = this.countryOptions().find((entry) => entry.code === code);
    if (!option?.available)
      return;
    this.updateEditDraft("country", code);
  }
  saveEdit() {
    if (!this.canSaveEdit() || this.isSaving())
      return;
    const draft = this.editDraft();
    this.isSaving.set(true);
    this._fleetService.updateAsset(this.assetId(), {
      country: draft.country,
      plate: draft.plate,
      vin: draft.vin,
      nickname: draft.nickname,
      group: draft.group,
      ownerDocumentType: draft.ownerDocumentType,
      ownerDocumentNumber: draft.ownerDocumentNumber,
      notes: draft.notes
    }).subscribe({
      next: (response) => {
        this.isSaving.set(false);
        this.showEditForm.set(false);
        this.asset.set(response.data);
        this._snackBar.open(this._transloco.translate("smartFleet.assets.updated"), void 0, { duration: 3e3 });
      },
      error: (err) => {
        this.isSaving.set(false);
        console.error("[SmartFleet] updateAsset error", err);
        this._snackBar.open(this._transloco.translate("smartFleet.assets.updateFailed"), void 0, { duration: 5e3 });
      }
    });
  }
  _loadCountries() {
    this._fleetService.getCountries().subscribe({
      next: (response) => {
        this.countryOptions.set(mergeFleetCountries(response.data?.countries ?? []));
      },
      error: () => {
        this.countryOptions.set(mergeFleetCountries([{ code: "co", available: true }]));
      }
    });
  }
  checkNow() {
    this.isChecking.set(true);
    this._fleetService.checkAssetNow(this.assetId()).subscribe({
      next: (response) => {
        this.isChecking.set(false);
        const types = response.data?.checkTypes?.length ?? 0;
        const message = response.data?.settled ? this._transloco.translate("smartFleet.assets.checkCompleted", { count: types }) : this._transloco.translate("smartFleet.assets.checkQueued");
        this._snackBar.open(message, void 0, { duration: 5e3 });
        this._load();
        this.activeTab.set("report");
      },
      error: (err) => {
        this.isChecking.set(false);
        console.error("[SmartFleet] checkNow error", err);
        const detail = err?.error;
        const code = detail?.message || detail?.code || "";
        if (String(code).includes("fleet_plan_required")) {
          this._snackBar.open(this._transloco.translate("smartFleet.assets.checkSkipped.fleet_plan_required"), this._transloco.translate("smartFleet.assets.viewPlans"), { duration: 8e3 }).onAction().subscribe(() => void this._router.navigate(["/smart-fleet/plans"]));
          return;
        }
        const known = [
          "no_active_rules",
          "no_due_rules",
          "insufficient_credits",
          "client_inactive",
          "missing_identifiers"
        ];
        const key = known.find((entry) => String(code).includes(entry));
        this._snackBar.open(key ? this._transloco.translate(`smartFleet.assets.checkSkipped.${key}`) : this._transloco.translate("smartFleet.assets.checkFailed"), this._transloco.translate("smartFleet.dismiss"), { duration: 7e3 });
      }
    });
  }
  reportKey(report) {
    return `${report.reportId}:${report.rowIndex}`;
  }
  downloadSavedReport(report) {
    return __async(this, null, function* () {
      const asset = this.asset();
      if (!asset || this.downloadingReport())
        return;
      this.downloadingReport.set(this.reportKey(report));
      try {
        const pdf = yield pdfBlobFromResponse(yield firstValueFrom(this._reports.downloadReport(report.reportId, report.rowIndex)));
        if (!pdf)
          throw new Error("pdf");
        const url = URL.createObjectURL(pdf);
        const anchor = document.createElement("a");
        anchor.href = url;
        anchor.download = fleetReportFileName(asset, report.templateName);
        anchor.click();
        setTimeout(() => URL.revokeObjectURL(url), 2e3);
      } catch (err) {
        console.error("[SmartFleet] download saved report error", err);
        this._snackBar.open(this._transloco.translate("smartFleet.assets.reportFailed"), void 0, {
          duration: 4e3
        });
      } finally {
        this.downloadingReport.set(null);
      }
    });
  }
  acknowledge(alert) {
    this._fleetService.acknowledgeAlert(alert._id).subscribe({
      next: () => this._loadAlerts(),
      error: (err) => console.error("[SmartFleet] acknowledge error", err)
    });
  }
  severityClasses(severity) {
    switch (severity) {
      case "critical":
        return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300";
      case "warning":
        return "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300";
      default:
        return "bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300";
    }
  }
  rowClasses(variant) {
    switch (variant) {
      case "critical":
        return "text-red-600 dark:text-red-400";
      case "warning":
        return "text-amber-600 dark:text-amber-400";
      case "ok":
        return "text-emerald-600 dark:text-emerald-400";
      default:
        return "text-stone-900 dark:text-white";
    }
  }
  formatDate(value) {
    if (!value)
      return "\u2014";
    return new Date(value).toLocaleString();
  }
  deliverySummary(alert) {
    if (!alert.deliveries?.length) {
      return this._transloco.translate("smartFleet.detail.noDeliveries");
    }
    return alert.deliveries.map((delivery) => `${delivery.channel}: ${delivery.status}`).join(", ");
  }
  deliveryClasses(delivery) {
    switch (delivery.status) {
      case "sent":
        return "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300";
      case "failed":
        return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300";
      case "skipped":
        return "bg-stone-100 text-stone-600 dark:bg-gray-800 dark:text-stone-300";
      default:
        return "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300";
    }
  }
  createRuleLink() {
    return ["/smart-fleet/watch-rules"];
  }
  createRuleQuery() {
    return { asset: this.assetId(), create: "1" };
  }
  editRuleQuery(rule) {
    return { edit: rule._id };
  }
  inspectJson() {
    return JSON.stringify(this.inspectPayload(), null, 2);
  }
  copyInspect() {
    void navigator.clipboard?.writeText(this.inspectJson()).then(() => {
      this._snackBar.open(this._transloco.translate("smartFleet.detail.inspectCopied"), void 0, {
        duration: 2e3
      });
    });
  }
  listColumns(rows) {
    if (!rows?.length)
      return [];
    return Object.keys(rows[0]).slice(0, 5);
  }
  cell(row, column) {
    const value = row[column];
    if (value === null || value === void 0)
      return "\u2014";
    if (typeof value === "object")
      return JSON.stringify(value);
    return String(value);
  }
  _load() {
    this.isLoading.set(true);
    this._fleetService.getAsset(this.assetId()).subscribe({
      next: (response) => {
        this.asset.set(response.data);
        this.isLoading.set(false);
        if (this.showEditForm() && response.data) {
          this.openEdit();
        }
      },
      error: (err) => {
        this.isLoading.set(false);
        console.error("[SmartFleet] getAsset error", err);
      }
    });
    this._fleetService.getAssetTimeline(this.assetId(), { limit: 60 }).subscribe({
      next: (response) => {
        const payload = response.data;
        const snapshots = Array.isArray(payload) ? payload : payload?.snapshots ?? [];
        this.snapshots.set(snapshots);
      },
      error: (err) => console.error("[SmartFleet] getAssetTimeline error", err)
    });
    this._loadAlerts();
    this._loadRules();
  }
  _loadRules() {
    this._fleetService.getApplicableRules(this.assetId()).subscribe({
      next: (response) => this.rules.set(response.data?.rules ?? []),
      error: (err) => console.error("[SmartFleet] getApplicableRules error", err)
    });
  }
  ruleScopeLabel(rule) {
    const assetId = typeof rule.asset === "string" ? rule.asset : rule.asset?._id || null;
    if (assetId)
      return this._transloco.translate("smartFleet.rules.scopeAsset");
    if (rule.group)
      return rule.group;
    return this._transloco.translate("smartFleet.rules.scopeFleet");
  }
  snapshotErrorText(snapshot) {
    const error = snapshot.error;
    if (!error)
      return null;
    return typeof error === "string" ? error : error.message || null;
  }
  _loadAlerts() {
    this._fleetService.getAlerts({ asset: this.assetId(), status: "all", perPage: 50 }).subscribe({
      next: (response) => this.alerts.set(response.data ?? []),
      error: (err) => console.error("[SmartFleet] getAlerts error", err)
    });
  }
  /**
   * Style variants are data-driven: an expired document renders red and a valid one
   * green, rather than every field looking the same.
   */
  _variantForExpiry(value) {
    const timestamp = new Date(String(value)).getTime();
    if (Number.isNaN(timestamp))
      return "neutral";
    const days = Math.floor((timestamp - Date.now()) / MS_PER_DAY);
    if (days < 0)
      return "critical";
    if (days <= 30)
      return "warning";
    return "ok";
  }
  _buildSection(snapshot) {
    const normalized = snapshot.normalized ?? {};
    const fields = FIELD_MAP[snapshot.checkType] ?? [];
    const rows = [];
    for (const field of fields) {
      const value = normalized[field.key];
      if (value === null || value === void 0 || value === "")
        continue;
      rows.push({
        label: field.label,
        value: typeof value === "object" ? JSON.stringify(value) : String(value),
        variant: field.key === "expiresAt" ? this._variantForExpiry(value) : "neutral"
      });
    }
    const listKey = ["comparendos", "owners", "claims", "items"].find((key) => Array.isArray(normalized[key]));
    return {
      checkType: snapshot.checkType,
      observedAt: snapshot.observedAt,
      isSuccessful: snapshot.isSuccessful !== false,
      error: this.snapshotErrorText(snapshot),
      rows,
      listTitle: listKey,
      list: listKey ? normalized[listKey] : void 0
    };
  }
  static {
    this.\u0275fac = function FleetAssetDetailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FleetAssetDetailComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FleetAssetDetailComponent, selectors: [["fleet-asset-detail"]], decls: 54, vars: 34, consts: [[1, "flex", "min-h-screen", "min-w-0", "flex-auto", "flex-col", "bg-stone-50", "dark:bg-gray-950"], [1, "border-b", "border-stone-200/90", "bg-white/90", "px-5", "py-6", "backdrop-blur-sm", "dark:border-gray-800", "dark:bg-gray-950/90", "md:px-8", "md:py-8"], [1, "mx-auto", "flex", "w-full", "max-w-7xl", "flex-col", "gap-5"], [1, "flex", "flex-wrap", "items-center", "text-xs", "font-medium", "leading-none", "text-stone-500", "dark:text-stone-400"], ["routerLink", "/smart-fleet", 1, "cursor-pointer", "text-stone-700", "underline-offset-4", "hover:underline", "dark:text-stone-300"], ["svgIcon", "heroicons_solid:chevron-right", 1, "icon-size-4", "mx-2", "text-stone-400"], ["routerLink", "/smart-fleet/assets", 1, "cursor-pointer", "text-stone-700", "underline-offset-4", "hover:underline", "dark:text-stone-300"], [1, "cursor-default", "text-stone-600", "dark:text-stone-300"], [1, "flex", "flex-wrap", "items-start", "justify-between", "gap-3"], [1, "flex", "min-w-0", "items-start", "gap-3"], ["mat-icon-button", "", "type", "button", "routerLink", "/smart-fleet/assets", 1, "shrink-0", "!text-stone-600", "dark:!text-stone-300", 3, "matTooltip"], [1, "min-w-0"], [1, "flex", "flex-wrap", "items-center", "gap-2"], [1, "font-mono", "text-2xl", "font-semibold", "tracking-tight", "text-stone-900", "dark:text-white", "md:text-3xl"], ["class", "inline-flex items-center gap-1.5 rounded-full border border-stone-200 bg-stone-50 px-2.5 py-0.5 text-xs font-medium text-stone-700 dark:border-gray-700 dark:bg-gray-950 dark:text-stone-300", 4, "ngIf"], [1, "mt-1", "text-sm", "text-stone-500", "dark:text-stone-400"], ["class", "mt-3 flex flex-wrap gap-3 text-xs text-stone-600 dark:text-stone-300", 4, "ngIf"], [1, "mt-2", "text-xs", "text-stone-500", "dark:text-stone-400"], [1, "flex", "shrink-0", "flex-wrap", "items-center", "gap-2"], ["mat-stroked-button", "", "type", "button", 1, "rounded-xl", "!px-5", "!py-2", 3, "click"], [1, "mr-2", "icon-size-5"], ["mat-flat-button", "", "color", "primary", "type", "button", 1, "rounded-xl", "!px-6", "!py-2", 3, "click", "disabled"], ["diameter", "18", "class", "mr-2", 4, "ngIf"], ["class", "mr-2 icon-size-5", 4, "ngIf"], [1, "flex", "flex-wrap", "gap-1"], ["type", "button", "class", "rounded-xl px-4 py-2 text-sm font-medium transition-colors", 3, "bg-stone-900", "text-white", "text-stone-600", "hover:bg-stone-100", "click", 4, "ngFor", "ngForOf"], [1, "flex", "flex-auto", "flex-col", "px-5", "py-8", "md:px-8", "md:py-10"], [1, "mx-auto", "flex", "w-full", "max-w-7xl", "flex-col", "gap-6"], ["class", "flex justify-center py-16", 4, "ngIf"], ["class", "rounded-2xl border border-stone-200/90 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900", 4, "ngIf"], [4, "ngIf"], ["class", "overflow-hidden rounded-2xl border border-stone-200/90 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900", 4, "ngIf"], ["class", "rounded-2xl border border-stone-200/90 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900", 4, "ngIf"], [1, "inline-flex", "items-center", "gap-1.5", "rounded-full", "border", "border-stone-200", "bg-stone-50", "px-2.5", "py-0.5", "text-xs", "font-medium", "text-stone-700", "dark:border-gray-700", "dark:bg-gray-950", "dark:text-stone-300"], ["aria-hidden", "true"], [1, "mt-3", "flex", "flex-wrap", "gap-3", "text-xs", "text-stone-600", "dark:text-stone-300"], [1, "inline-flex", "items-center", "gap-1.5", "rounded-xl", "border", "border-stone-200", "bg-stone-50", "px-3", "py-1.5", "dark:border-gray-700", "dark:bg-gray-950"], [1, "icon-size-4", "text-stone-400"], [1, "font-semibold", "text-stone-900", "dark:text-white"], [1, "inline-flex", "items-center", "gap-1.5", "rounded-xl", "border", "border-indigo-200", "bg-indigo-50", "px-3", "py-1.5", "text-indigo-900", "dark:border-indigo-900/50", "dark:bg-indigo-950/40", "dark:text-indigo-200", 3, "matTooltip"], [1, "icon-size-4"], [1, "font-semibold"], ["diameter", "18", 1, "mr-2"], ["type", "button", 1, "rounded-xl", "px-4", "py-2", "text-sm", "font-medium", "transition-colors", 3, "click"], [1, "flex", "justify-center", "py-16"], ["diameter", "40"], [1, "rounded-2xl", "border", "border-stone-200/90", "bg-white", "p-5", "shadow-sm", "dark:border-gray-800", "dark:bg-gray-900"], [1, "text-base", "font-semibold", "text-stone-900", "dark:text-white"], [1, "mt-4", "grid", "gap-4", "md:grid-cols-3"], [1, "flex", "flex-col", "gap-1"], [1, "text-xs", "font-medium", "uppercase", "text-stone-500"], ["name", "editCountry", 1, "rounded-xl", "border", "border-stone-200", "bg-white", "px-3", "py-2", "text-sm", "text-stone-900", "focus:border-indigo-400", "focus:outline-none", "dark:border-gray-700", "dark:bg-gray-950", "dark:text-white", 3, "ngModelChange", "ngModel"], [3, "value", "disabled", 4, "ngFor", "ngForOf"], ["type", "text", "name", "editPlate", 1, "rounded-xl", "border", "border-stone-200", "bg-white", "px-3", "py-2", "text-sm", "uppercase", "text-stone-900", "focus:border-indigo-400", "focus:outline-none", "dark:border-gray-700", "dark:bg-gray-950", "dark:text-white", 3, "ngModelChange", "ngModel", "placeholder"], ["type", "text", "name", "editNickname", 1, "rounded-xl", "border", "border-stone-200", "bg-white", "px-3", "py-2", "text-sm", "text-stone-900", "focus:border-indigo-400", "focus:outline-none", "dark:border-gray-700", "dark:bg-gray-950", "dark:text-white", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "editGroup", 1, "rounded-xl", "border", "border-stone-200", "bg-white", "px-3", "py-2", "text-sm", "text-stone-900", "focus:border-indigo-400", "focus:outline-none", "dark:border-gray-700", "dark:bg-gray-950", "dark:text-white", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "editDocType", 1, "rounded-xl", "border", "border-stone-200", "bg-white", "px-3", "py-2", "text-sm", "uppercase", "text-stone-900", "focus:border-indigo-400", "focus:outline-none", "dark:border-gray-700", "dark:bg-gray-950", "dark:text-white", 3, "ngModelChange", "ngModel", "placeholder"], ["type", "text", "name", "editDocNumber", 1, "rounded-xl", "border", "border-stone-200", "bg-white", "px-3", "py-2", "text-sm", "text-stone-900", "focus:border-indigo-400", "focus:outline-none", "dark:border-gray-700", "dark:bg-gray-950", "dark:text-white", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "editVin", 1, "rounded-xl", "border", "border-stone-200", "bg-white", "px-3", "py-2", "text-sm", "uppercase", "text-stone-900", "focus:border-indigo-400", "focus:outline-none", "dark:border-gray-700", "dark:bg-gray-950", "dark:text-white", 3, "ngModelChange", "ngModel"], [1, "flex", "flex-col", "gap-1", "md:col-span-3"], ["type", "text", "name", "editNotes", 1, "rounded-xl", "border", "border-stone-200", "bg-white", "px-3", "py-2", "text-sm", "text-stone-900", "focus:border-indigo-400", "focus:outline-none", "dark:border-gray-700", "dark:bg-gray-950", "dark:text-white", 3, "ngModelChange", "ngModel"], [1, "mt-4", "flex", "justify-end", "gap-2"], ["mat-stroked-button", "", "type", "button", 1, "rounded-xl", 3, "click"], [3, "value", "disabled"], ["class", "rounded-2xl border border-stone-200/90 bg-white px-5 py-12 text-center text-sm text-stone-500 shadow-sm dark:border-gray-800 dark:bg-gray-900 dark:text-stone-400", 4, "ngIf"], ["class", "rounded-2xl border border-stone-200/90 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900", 4, "ngFor", "ngForOf"], [1, "rounded-2xl", "border", "border-stone-200/90", "bg-white", "px-5", "py-12", "text-center", "text-sm", "text-stone-500", "shadow-sm", "dark:border-gray-800", "dark:bg-gray-900", "dark:text-stone-400"], [1, "rounded-2xl", "border", "border-stone-200/90", "bg-white", "shadow-sm", "dark:border-gray-800", "dark:bg-gray-900"], [1, "flex", "flex-wrap", "items-center", "justify-between", "gap-3", "border-b", "border-stone-200/90", "px-5", "py-4", "dark:border-gray-800"], [1, "text-xs", "text-stone-500", "dark:text-stone-400"], ["class", "px-5 py-4 text-sm text-red-600 dark:text-red-400", 4, "ngIf"], ["class", "w-full", 4, "ngIf"], ["class", "border-t border-stone-200/90 dark:border-gray-800", 4, "ngIf"], [1, "px-5", "py-4", "text-sm", "text-red-600", "dark:text-red-400"], [1, "w-full"], [1, "divide-y", "divide-stone-200/90", "dark:divide-gray-800"], [4, "ngFor", "ngForOf"], [1, "w-2/5", "px-5", "py-2.5", "text-xs", "uppercase", "text-stone-500", "dark:text-stone-400"], [1, "px-5", "py-2.5", "text-sm", "font-semibold", 3, "ngClass"], [1, "border-t", "border-stone-200/90", "dark:border-gray-800"], [1, "bg-stone-50", "dark:bg-gray-950/50"], [1, "text-left", "text-xs", "font-medium", "uppercase", "text-stone-500"], ["class", "px-5 py-2.5", 4, "ngFor", "ngForOf"], ["class", "text-sm", 4, "ngFor", "ngForOf"], [1, "px-5", "py-2.5"], [1, "text-sm"], ["class", "px-5 py-2 text-stone-700 dark:text-stone-300", 4, "ngFor", "ngForOf"], [1, "px-5", "py-2", "text-stone-700", "dark:text-stone-300"], [1, "overflow-hidden", "rounded-2xl", "border", "border-stone-200/90", "bg-white", "shadow-sm", "dark:border-gray-800", "dark:bg-gray-900"], ["class", "px-5 py-12 text-center text-sm text-stone-500 dark:text-stone-400", 4, "ngIf"], [1, "px-5", "py-12", "text-center", "text-sm", "text-stone-500", "dark:text-stone-400"], [1, "px-5", "py-3"], [1, "px-5", "py-2.5", "text-xs", "text-stone-500", "dark:text-stone-400"], [1, "px-5", "py-2.5", "text-stone-700", "dark:text-stone-300"], [1, "rounded-full", "px-2", "py-0.5", "text-xs", "font-medium"], ["class", "ml-2 text-xs text-red-500", 4, "ngIf"], [1, "px-5", "py-2.5", "text-stone-600", "dark:text-stone-300"], [1, "ml-2", "text-xs", "text-red-500"], ["class", "flex flex-wrap items-start gap-3 px-5 py-4", 4, "ngFor", "ngForOf"], [1, "flex", "flex-wrap", "items-start", "gap-3", "px-5", "py-4"], [1, "rounded-full", "px-2", "py-0.5", "text-xs", "font-semibold", "uppercase", 3, "ngClass"], [1, "min-w-0", "flex-1"], [1, "text-sm", "font-semibold", "text-stone-900", "dark:text-white"], [1, "mt-0.5", "text-xs", "text-stone-500", "dark:text-stone-400"], [1, "mt-1", "text-xs", "text-stone-400"], [1, "mt-2", "flex", "flex-wrap", "gap-1.5"], ["class", "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-medium", 3, "ngClass", "matTooltip", 4, "ngFor", "ngForOf"], ["class", "text-[11px] text-stone-400", 4, "ngIf"], ["mat-stroked-button", "", "type", "button", "class", "shrink-0 rounded-xl", 3, "click", 4, "ngIf"], ["class", "shrink-0 text-xs text-emerald-600 dark:text-emerald-400", 4, "ngIf"], [1, "inline-flex", "items-center", "gap-1", "rounded-full", "px-2", "py-0.5", "text-[11px]", "font-medium", 3, "ngClass", "matTooltip"], [1, "text-[11px]", "text-stone-400"], ["mat-stroked-button", "", "type", "button", 1, "shrink-0", "rounded-xl", 3, "click"], [1, "shrink-0", "text-xs", "text-emerald-600", "dark:text-emerald-400"], ["mat-flat-button", "", "color", "primary", 1, "rounded-xl", "!px-4", "!py-2", 3, "routerLink", "queryParams"], [1, "mr-1", "icon-size-5"], ["class", "divide-y divide-stone-200/90 dark:divide-gray-800", 4, "ngIf"], [1, "font-semibold", "text-indigo-600", "underline", "underline-offset-4", "dark:text-indigo-400", 3, "routerLink", "queryParams"], ["class", "flex flex-wrap items-center gap-3 px-5 py-3 text-sm", 3, "opacity-50", 4, "ngFor", "ngForOf"], [1, "flex", "flex-wrap", "items-center", "gap-3", "px-5", "py-3", "text-sm"], [1, "rounded-full", "bg-indigo-50", "px-2", "py-0.5", "text-xs", "font-medium", "text-indigo-700", "dark:bg-indigo-950/40", "dark:text-indigo-200"], [1, "rounded-full", "bg-stone-100", "px-2", "py-0.5", "text-xs", "font-medium", "uppercase", "text-stone-600", "dark:bg-gray-800", "dark:text-stone-300"], ["class", "text-xs text-stone-500 dark:text-stone-400", 4, "ngIf"], ["class", "rounded-full bg-stone-100 px-2 py-0.5 text-xs font-medium text-stone-600 dark:bg-gray-800 dark:text-stone-300", 4, "ngFor", "ngForOf"], [1, "ml-auto", "text-xs", "font-semibold", "text-indigo-600", "underline", "underline-offset-4", "dark:text-indigo-400", 3, "routerLink", "queryParams"], [1, "rounded-full", "bg-stone-100", "px-2", "py-0.5", "text-xs", "font-medium", "text-stone-600", "dark:bg-gray-800", "dark:text-stone-300"], [1, "border-b", "border-stone-200/90", "px-5", "py-4", "dark:border-gray-800"], ["class", "px-5 py-10 text-center text-sm text-stone-500 dark:text-stone-400", 4, "ngIf"], [1, "px-5", "py-10", "text-center", "text-sm", "text-stone-500", "dark:text-stone-400"], ["class", "flex flex-wrap items-center gap-3 px-5 py-3", 4, "ngFor", "ngForOf"], [1, "flex", "flex-wrap", "items-center", "gap-3", "px-5", "py-3"], [1, "icon-size-6", "text-rose-600"], [1, "truncate", "text-sm", "font-medium", "text-stone-900", "dark:text-white"], ["mat-icon-button", "", "type", "button", 1, "!text-rose-600", 3, "click", "disabled", "matTooltip"], ["diameter", "18", 4, "ngIf"], ["class", "icon-size-5", 4, "ngIf"], ["diameter", "18"], [1, "icon-size-5"], [1, "max-h-[32rem]", "overflow-auto", "px-5", "py-4", "text-xs", "leading-relaxed", "text-stone-700", "dark:text-stone-300"]], template: function FleetAssetDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "div", 2);
        \u0275\u0275element(3, "fleet-nav");
        \u0275\u0275elementStart(4, "div", 3)(5, "a", 4);
        \u0275\u0275text(6);
        \u0275\u0275pipe(7, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275element(8, "mat-icon", 5);
        \u0275\u0275elementStart(9, "a", 6);
        \u0275\u0275text(10);
        \u0275\u0275pipe(11, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275element(12, "mat-icon", 5);
        \u0275\u0275elementStart(13, "span", 7);
        \u0275\u0275text(14);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 8)(16, "div", 9)(17, "button", 10);
        \u0275\u0275pipe(18, "transloco");
        \u0275\u0275elementStart(19, "mat-icon");
        \u0275\u0275text(20, "arrow_back");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "div", 11)(22, "div", 12)(23, "h1", 13);
        \u0275\u0275text(24);
        \u0275\u0275elementEnd();
        \u0275\u0275template(25, FleetAssetDetailComponent_span_25_Template, 4, 2, "span", 14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "p", 15);
        \u0275\u0275text(27);
        \u0275\u0275elementEnd();
        \u0275\u0275template(28, FleetAssetDetailComponent_div_28_Template, 15, 9, "div", 16);
        \u0275\u0275elementStart(29, "p", 17);
        \u0275\u0275text(30);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(31, "div", 18)(32, "button", 19);
        \u0275\u0275listener("click", function FleetAssetDetailComponent_Template_button_click_32_listener() {
          return ctx.showEditForm() ? ctx.cancelEdit() : ctx.openEdit();
        });
        \u0275\u0275elementStart(33, "mat-icon", 20);
        \u0275\u0275text(34);
        \u0275\u0275elementEnd();
        \u0275\u0275text(35);
        \u0275\u0275pipe(36, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "button", 21);
        \u0275\u0275listener("click", function FleetAssetDetailComponent_Template_button_click_37_listener() {
          return ctx.checkNow();
        });
        \u0275\u0275template(38, FleetAssetDetailComponent_mat_spinner_38_Template, 1, 0, "mat-spinner", 22)(39, FleetAssetDetailComponent_mat_icon_39_Template, 2, 0, "mat-icon", 23);
        \u0275\u0275text(40);
        \u0275\u0275pipe(41, "transloco");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(42, "div", 24);
        \u0275\u0275template(43, FleetAssetDetailComponent_button_43_Template, 3, 11, "button", 25);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(44, "main", 26)(45, "div", 27);
        \u0275\u0275template(46, FleetAssetDetailComponent_div_46_Template, 2, 0, "div", 28)(47, FleetAssetDetailComponent_div_47_Template, 54, 46, "div", 29)(48, FleetAssetDetailComponent_ng_container_48_Template, 3, 2, "ng-container", 30)(49, FleetAssetDetailComponent_div_49_Template, 3, 2, "div", 31)(50, FleetAssetDetailComponent_div_50_Template, 4, 2, "div", 31)(51, FleetAssetDetailComponent_div_51_Template, 15, 11, "div", 32)(52, FleetAssetDetailComponent_div_52_Template, 10, 8, "div", 32)(53, FleetAssetDetailComponent_div_53_Template, 16, 10, "div", 32);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        let tmp_2_0;
        let tmp_4_0;
        let tmp_6_0;
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 24, "smartFleet.title"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 26, "smartFleet.nav.assets"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(((tmp_2_0 = ctx.asset()) == null ? null : tmp_2_0.plate) || ((tmp_2_0 = ctx.asset()) == null ? null : tmp_2_0.vin) || "\u2014");
        \u0275\u0275advance(3);
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(18, 28, "smartFleet.back"));
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1(" ", ((tmp_4_0 = ctx.asset()) == null ? null : tmp_4_0.plate) || ((tmp_4_0 = ctx.asset()) == null ? null : tmp_4_0.vin) || "\u2014", " ");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.asset());
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", ((tmp_6_0 = ctx.asset()) == null ? null : tmp_6_0.nickname) || ((tmp_6_0 = ctx.asset()) == null ? null : tmp_6_0.group) || "", " ");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.asset());
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", ctx.scheduleHint(), " ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.showEditForm() ? "close" : "edit");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(36, 30, ctx.showEditForm() ? "smartFleet.cancel" : "smartFleet.assets.edit"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.isChecking());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isChecking());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isChecking());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(41, 32, "smartFleet.assets.checkNow"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", ctx.tabs);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.isLoading() && !ctx.asset());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showEditForm() && ctx.asset());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.activeTab() === "report");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.activeTab() === "timeline");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.activeTab() === "alerts");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.activeTab() === "rules");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.activeTab() === "pdfs");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.activeTab() === "inspect");
      }
    }, dependencies: [
      CommonModule,
      NgClass,
      NgForOf,
      NgIf,
      FormsModule,
      NgSelectOption,
      \u0275NgSelectMultipleOption,
      DefaultValueAccessor,
      SelectControlValueAccessor,
      NgControlStatus,
      NgModel,
      TranslocoModule,
      TranslocoPipe,
      RouterModule,
      RouterLink,
      MatButtonModule,
      MatAnchor,
      MatButton,
      MatIconButton,
      MatIconModule,
      MatIcon,
      MatTooltipModule,
      MatTooltip,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatSnackBarModule,
      FleetNavComponent
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FleetAssetDetailComponent, [{
    type: Component,
    args: [{ selector: "fleet-asset-detail", standalone: true, imports: [
      CommonModule,
      FormsModule,
      TranslocoModule,
      RouterModule,
      MatButtonModule,
      MatIconModule,
      MatTooltipModule,
      MatProgressSpinnerModule,
      MatSnackBarModule,
      FleetNavComponent
    ], encapsulation: ViewEncapsulation.None, template: `<div class="flex min-h-screen min-w-0 flex-auto flex-col bg-stone-50 dark:bg-gray-950">\r
    <header\r
        class="border-b border-stone-200/90 bg-white/90 px-5 py-6 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-950/90 md:px-8 md:py-8"\r
    >\r
        <div class="mx-auto flex w-full max-w-7xl flex-col gap-5">\r
            <fleet-nav />\r
\r
            <div\r
                class="flex flex-wrap items-center text-xs font-medium leading-none text-stone-500 dark:text-stone-400"\r
            >\r
                <a\r
                    routerLink="/smart-fleet"\r
                    class="cursor-pointer text-stone-700 underline-offset-4 hover:underline dark:text-stone-300"\r
                    >{{ 'smartFleet.title' | transloco }}</a\r
                >\r
                <mat-icon\r
                    class="icon-size-4 mx-2 text-stone-400"\r
                    svgIcon="heroicons_solid:chevron-right"\r
                ></mat-icon>\r
                <a\r
                    routerLink="/smart-fleet/assets"\r
                    class="cursor-pointer text-stone-700 underline-offset-4 hover:underline dark:text-stone-300"\r
                    >{{ 'smartFleet.nav.assets' | transloco }}</a\r
                >\r
                <mat-icon\r
                    class="icon-size-4 mx-2 text-stone-400"\r
                    svgIcon="heroicons_solid:chevron-right"\r
                ></mat-icon>\r
                <span class="cursor-default text-stone-600 dark:text-stone-300">{{\r
                    asset()?.plate || asset()?.vin || '\u2014'\r
                }}</span>\r
            </div>\r
\r
            <div class="flex flex-wrap items-start justify-between gap-3">\r
                <div class="flex min-w-0 items-start gap-3">\r
                    <button\r
                        mat-icon-button\r
                        type="button"\r
                        routerLink="/smart-fleet/assets"\r
                        [matTooltip]="'smartFleet.back' | transloco"\r
                        class="shrink-0 !text-stone-600 dark:!text-stone-300"\r
                    >\r
                        <mat-icon>arrow_back</mat-icon>\r
                    </button>\r
                    <div class="min-w-0">\r
                        <div class="flex flex-wrap items-center gap-2">\r
                            <h1\r
                                class="font-mono text-2xl font-semibold tracking-tight text-stone-900 dark:text-white md:text-3xl"\r
                            >\r
                                {{ asset()?.plate || asset()?.vin || '\u2014' }}\r
                            </h1>\r
                            <span\r
                                *ngIf="asset()"\r
                                class="inline-flex items-center gap-1.5 rounded-full border border-stone-200 bg-stone-50 px-2.5 py-0.5 text-xs font-medium text-stone-700 dark:border-gray-700 dark:bg-gray-950 dark:text-stone-300"\r
                            >\r
                                <span aria-hidden="true">{{\r
                                    getCountryFlag(asset()?.country || 'co')\r
                                }}</span>\r
                                {{ countryLabel(asset()?.country) }}\r
                            </span>\r
                        </div>\r
                        <p class="mt-1 text-sm text-stone-500 dark:text-stone-400">\r
                            {{ asset()?.nickname || asset()?.group || '' }}\r
                        </p>\r
                        <div\r
                            class="mt-3 flex flex-wrap gap-3 text-xs text-stone-600 dark:text-stone-300"\r
                            *ngIf="asset()"\r
                        >\r
                            <span\r
                                class="inline-flex items-center gap-1.5 rounded-xl border border-stone-200 bg-stone-50 px-3 py-1.5 dark:border-gray-700 dark:bg-gray-950"\r
                            >\r
                                <mat-icon class="icon-size-4 text-stone-400">history</mat-icon>\r
                                {{ 'smartFleet.assets.lastChecked' | transloco }}:\r
                                <strong class="font-semibold text-stone-900 dark:text-white">{{\r
                                    formatDate(asset()?.lastCheckedAt)\r
                                }}</strong>\r
                            </span>\r
                            <span\r
                                class="inline-flex items-center gap-1.5 rounded-xl border border-indigo-200 bg-indigo-50 px-3 py-1.5 text-indigo-900 dark:border-indigo-900/50 dark:bg-indigo-950/40 dark:text-indigo-200"\r
                                [matTooltip]="scheduleHint()"\r
                            >\r
                                <mat-icon class="icon-size-4">schedule</mat-icon>\r
                                {{ 'smartFleet.assets.nextCheck' | transloco }}:\r
                                <strong class="font-semibold">{{\r
                                    formatDate(asset()?.nextCheckAt)\r
                                }}</strong>\r
                            </span>\r
                        </div>\r
                        <p class="mt-2 text-xs text-stone-500 dark:text-stone-400">\r
                            {{ scheduleHint() }}\r
                        </p>\r
                    </div>\r
                </div>\r
                <div class="flex shrink-0 flex-wrap items-center gap-2">\r
                    <button\r
                        mat-stroked-button\r
                        type="button"\r
                        (click)="showEditForm() ? cancelEdit() : openEdit()"\r
                        class="rounded-xl !px-5 !py-2"\r
                    >\r
                        <mat-icon class="mr-2 icon-size-5">{{\r
                            showEditForm() ? 'close' : 'edit'\r
                        }}</mat-icon>\r
                        {{\r
                            (showEditForm() ? 'smartFleet.cancel' : 'smartFleet.assets.edit')\r
                                | transloco\r
                        }}\r
                    </button>\r
                    <button\r
                        mat-flat-button\r
                        color="primary"\r
                        type="button"\r
                        [disabled]="isChecking()"\r
                        (click)="checkNow()"\r
                        class="rounded-xl !px-6 !py-2"\r
                    >\r
                        <mat-spinner *ngIf="isChecking()" diameter="18" class="mr-2"></mat-spinner>\r
                        <mat-icon *ngIf="!isChecking()" class="mr-2 icon-size-5">refresh</mat-icon>\r
                        {{ 'smartFleet.assets.checkNow' | transloco }}\r
                    </button>\r
                </div>\r
            </div>\r
\r
            <div class="flex flex-wrap gap-1">\r
                <button\r
                    *ngFor="let tab of tabs"\r
                    type="button"\r
                    (click)="setActiveTab(tab)"\r
                    class="rounded-xl px-4 py-2 text-sm font-medium transition-colors"\r
                    [class.bg-stone-900]="activeTab() === tab"\r
                    [class.text-white]="activeTab() === tab"\r
                    [class.text-stone-600]="activeTab() !== tab"\r
                    [class.hover:bg-stone-100]="activeTab() !== tab"\r
                >\r
                    {{ 'smartFleet.detail.tab.' + tab | transloco }}\r
                </button>\r
            </div>\r
        </div>\r
    </header>\r
\r
    <main class="flex flex-auto flex-col px-5 py-8 md:px-8 md:py-10">\r
        <div class="mx-auto flex w-full max-w-7xl flex-col gap-6">\r
            <div class="flex justify-center py-16" *ngIf="isLoading() && !asset()">\r
                <mat-spinner diameter="40"></mat-spinner>\r
            </div>\r
\r
            <!-- Edit vehicle -->\r
            <div\r
                *ngIf="showEditForm() && asset()"\r
                class="rounded-2xl border border-stone-200/90 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900"\r
            >\r
                <h2 class="text-base font-semibold text-stone-900 dark:text-white">\r
                    {{ 'smartFleet.assets.editAsset' | transloco }}\r
                </h2>\r
                <div class="mt-4 grid gap-4 md:grid-cols-3">\r
                    <label class="flex flex-col gap-1">\r
                        <span class="text-xs font-medium uppercase text-stone-500">{{\r
                            'smartFleet.assets.country' | transloco\r
                        }}</span>\r
                        <select\r
                            [ngModel]="editDraft().country"\r
                            (ngModelChange)="setEditCountry($event)"\r
                            name="editCountry"\r
                            class="rounded-xl border border-stone-200 bg-white px-3 py-2 text-sm text-stone-900 focus:border-indigo-400 focus:outline-none dark:border-gray-700 dark:bg-gray-950 dark:text-white"\r
                        >\r
                            <option\r
                                *ngFor="let option of countryOptions()"\r
                                [value]="option.code"\r
                                [disabled]="!option.available"\r
                            >\r
                                {{ countryOptionLabel(option) }}\r
                            </option>\r
                        </select>\r
                    </label>\r
                    <label class="flex flex-col gap-1">\r
                        <span class="text-xs font-medium uppercase text-stone-500">{{\r
                            'smartFleet.assets.plate' | transloco\r
                        }}</span>\r
                        <input\r
                            type="text"\r
                            [ngModel]="editDraft().plate"\r
                            (ngModelChange)="updateEditDraft('plate', $event)"\r
                            name="editPlate"\r
                            class="rounded-xl border border-stone-200 bg-white px-3 py-2 text-sm uppercase text-stone-900 focus:border-indigo-400 focus:outline-none dark:border-gray-700 dark:bg-gray-950 dark:text-white"\r
                            [placeholder]="editPlaceholders().plate"\r
                        />\r
                    </label>\r
                    <label class="flex flex-col gap-1">\r
                        <span class="text-xs font-medium uppercase text-stone-500">{{\r
                            'smartFleet.assets.nickname' | transloco\r
                        }}</span>\r
                        <input\r
                            type="text"\r
                            [ngModel]="editDraft().nickname"\r
                            (ngModelChange)="updateEditDraft('nickname', $event)"\r
                            name="editNickname"\r
                            class="rounded-xl border border-stone-200 bg-white px-3 py-2 text-sm text-stone-900 focus:border-indigo-400 focus:outline-none dark:border-gray-700 dark:bg-gray-950 dark:text-white"\r
                        />\r
                    </label>\r
                    <label class="flex flex-col gap-1">\r
                        <span class="text-xs font-medium uppercase text-stone-500">{{\r
                            'smartFleet.assets.group' | transloco\r
                        }}</span>\r
                        <input\r
                            type="text"\r
                            [ngModel]="editDraft().group"\r
                            (ngModelChange)="updateEditDraft('group', $event)"\r
                            name="editGroup"\r
                            class="rounded-xl border border-stone-200 bg-white px-3 py-2 text-sm text-stone-900 focus:border-indigo-400 focus:outline-none dark:border-gray-700 dark:bg-gray-950 dark:text-white"\r
                        />\r
                    </label>\r
                    <label class="flex flex-col gap-1">\r
                        <span class="text-xs font-medium uppercase text-stone-500">{{\r
                            'smartFleet.assets.documentType' | transloco\r
                        }}</span>\r
                        <input\r
                            type="text"\r
                            [ngModel]="editDraft().ownerDocumentType"\r
                            (ngModelChange)="updateEditDraft('ownerDocumentType', $event)"\r
                            name="editDocType"\r
                            class="rounded-xl border border-stone-200 bg-white px-3 py-2 text-sm uppercase text-stone-900 focus:border-indigo-400 focus:outline-none dark:border-gray-700 dark:bg-gray-950 dark:text-white"\r
                            [placeholder]="editPlaceholders().documentType"\r
                        />\r
                    </label>\r
                    <label class="flex flex-col gap-1">\r
                        <span class="text-xs font-medium uppercase text-stone-500">{{\r
                            'smartFleet.assets.documentNumber' | transloco\r
                        }}</span>\r
                        <input\r
                            type="text"\r
                            [ngModel]="editDraft().ownerDocumentNumber"\r
                            (ngModelChange)="updateEditDraft('ownerDocumentNumber', $event)"\r
                            name="editDocNumber"\r
                            class="rounded-xl border border-stone-200 bg-white px-3 py-2 text-sm text-stone-900 focus:border-indigo-400 focus:outline-none dark:border-gray-700 dark:bg-gray-950 dark:text-white"\r
                        />\r
                    </label>\r
                    <label class="flex flex-col gap-1">\r
                        <span class="text-xs font-medium uppercase text-stone-500">{{\r
                            'smartFleet.assets.vin' | transloco\r
                        }}</span>\r
                        <input\r
                            type="text"\r
                            [ngModel]="editDraft().vin"\r
                            (ngModelChange)="updateEditDraft('vin', $event)"\r
                            name="editVin"\r
                            class="rounded-xl border border-stone-200 bg-white px-3 py-2 text-sm uppercase text-stone-900 focus:border-indigo-400 focus:outline-none dark:border-gray-700 dark:bg-gray-950 dark:text-white"\r
                        />\r
                    </label>\r
                    <label class="flex flex-col gap-1 md:col-span-3">\r
                        <span class="text-xs font-medium uppercase text-stone-500">{{\r
                            'smartFleet.assets.notes' | transloco\r
                        }}</span>\r
                        <input\r
                            type="text"\r
                            [ngModel]="editDraft().notes"\r
                            (ngModelChange)="updateEditDraft('notes', $event)"\r
                            name="editNotes"\r
                            class="rounded-xl border border-stone-200 bg-white px-3 py-2 text-sm text-stone-900 focus:border-indigo-400 focus:outline-none dark:border-gray-700 dark:bg-gray-950 dark:text-white"\r
                        />\r
                    </label>\r
                </div>\r
                <div class="mt-4 flex justify-end gap-2">\r
                    <button\r
                        mat-stroked-button\r
                        type="button"\r
                        (click)="cancelEdit()"\r
                        class="rounded-xl"\r
                    >\r
                        {{ 'smartFleet.cancel' | transloco }}\r
                    </button>\r
                    <button\r
                        mat-flat-button\r
                        color="primary"\r
                        type="button"\r
                        [disabled]="!canSaveEdit() || isSaving()"\r
                        (click)="saveEdit()"\r
                        class="rounded-xl !px-6 !py-2"\r
                    >\r
                        <mat-spinner *ngIf="isSaving()" diameter="18" class="mr-2"></mat-spinner>\r
                        {{ 'smartFleet.assets.save' | transloco }}\r
                    </button>\r
                </div>\r
            </div>\r
\r
            <!-- Vehicle report: newest snapshot per check, rendered from the shared model -->\r
            <ng-container *ngIf="activeTab() === 'report'">\r
                <p\r
                    class="rounded-2xl border border-stone-200/90 bg-white px-5 py-12 text-center text-sm text-stone-500 shadow-sm dark:border-gray-800 dark:bg-gray-900 dark:text-stone-400"\r
                    *ngIf="!report().length"\r
                >\r
                    {{ 'smartFleet.detail.noSnapshots' | transloco }}\r
                </p>\r
\r
                <div\r
                    *ngFor="let section of report()"\r
                    class="rounded-2xl border border-stone-200/90 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900"\r
                >\r
                    <div\r
                        class="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200/90 px-5 py-4 dark:border-gray-800"\r
                    >\r
                        <h2 class="text-base font-semibold text-stone-900 dark:text-white">\r
                            {{ 'smartFleet.checkType.' + section.checkType | transloco }}\r
                        </h2>\r
                        <span class="text-xs text-stone-500 dark:text-stone-400">{{\r
                            formatDate(section.observedAt)\r
                        }}</span>\r
                    </div>\r
\r
                    <div\r
                        class="px-5 py-4 text-sm text-red-600 dark:text-red-400"\r
                        *ngIf="!section.isSuccessful"\r
                    >\r
                        {{ 'smartFleet.detail.checkFailed' | transloco }}: {{ section.error }}\r
                    </div>\r
\r
                    <table class="w-full" *ngIf="section.rows.length">\r
                        <tbody class="divide-y divide-stone-200/90 dark:divide-gray-800">\r
                            <tr *ngFor="let row of section.rows">\r
                                <td\r
                                    class="w-2/5 px-5 py-2.5 text-xs uppercase text-stone-500 dark:text-stone-400"\r
                                >\r
                                    {{ 'smartFleet.field.' + row.label | transloco }}\r
                                </td>\r
                                <td\r
                                    class="px-5 py-2.5 text-sm font-semibold"\r
                                    [ngClass]="rowClasses(row.variant)"\r
                                >\r
                                    {{ row.value }}\r
                                </td>\r
                            </tr>\r
                        </tbody>\r
                    </table>\r
\r
                    <!-- Array payloads: the old renderer refused these outright -->\r
                    <div\r
                        class="border-t border-stone-200/90 dark:border-gray-800"\r
                        *ngIf="section.list?.length"\r
                    >\r
                        <table class="w-full">\r
                            <thead class="bg-stone-50 dark:bg-gray-950/50">\r
                                <tr class="text-left text-xs font-medium uppercase text-stone-500">\r
                                    <th\r
                                        class="px-5 py-2.5"\r
                                        *ngFor="let column of listColumns(section.list)"\r
                                    >\r
                                        {{ column }}\r
                                    </th>\r
                                </tr>\r
                            </thead>\r
                            <tbody class="divide-y divide-stone-200/90 dark:divide-gray-800">\r
                                <tr *ngFor="let row of section.list" class="text-sm">\r
                                    <td\r
                                        class="px-5 py-2 text-stone-700 dark:text-stone-300"\r
                                        *ngFor="let column of listColumns(section.list)"\r
                                    >\r
                                        {{ cell(row, column) }}\r
                                    </td>\r
                                </tr>\r
                            </tbody>\r
                        </table>\r
                    </div>\r
                </div>\r
            </ng-container>\r
\r
            <!-- Snapshot timeline -->\r
            <div\r
                class="overflow-hidden rounded-2xl border border-stone-200/90 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900"\r
                *ngIf="activeTab() === 'timeline'"\r
            >\r
                <p\r
                    class="px-5 py-12 text-center text-sm text-stone-500 dark:text-stone-400"\r
                    *ngIf="!snapshots().length"\r
                >\r
                    {{ 'smartFleet.detail.noSnapshots' | transloco }}\r
                </p>\r
                <table class="w-full" *ngIf="snapshots().length">\r
                    <thead class="bg-stone-50 dark:bg-gray-950/50">\r
                        <tr class="text-left text-xs font-medium uppercase text-stone-500">\r
                            <th class="px-5 py-3">{{ 'smartFleet.detail.observedAt' | transloco }}</th>\r
                            <th class="px-5 py-3">{{ 'smartFleet.detail.check' | transloco }}</th>\r
                            <th class="px-5 py-3">{{ 'smartFleet.detail.result' | transloco }}</th>\r
                            <th class="px-5 py-3">{{ 'smartFleet.detail.credits' | transloco }}</th>\r
                        </tr>\r
                    </thead>\r
                    <tbody class="divide-y divide-stone-200/90 dark:divide-gray-800">\r
                        <tr *ngFor="let snapshot of snapshots()" class="text-sm">\r
                            <td class="px-5 py-2.5 text-xs text-stone-500 dark:text-stone-400">\r
                                {{ formatDate(snapshot.observedAt) }}\r
                            </td>\r
                            <td class="px-5 py-2.5 text-stone-700 dark:text-stone-300">\r
                                {{ 'smartFleet.checkType.' + snapshot.checkType | transloco }}\r
                            </td>\r
                            <td class="px-5 py-2.5">\r
                                <span\r
                                    class="rounded-full px-2 py-0.5 text-xs font-medium"\r
                                    [class.bg-emerald-100]="snapshot.isSuccessful"\r
                                    [class.text-emerald-700]="snapshot.isSuccessful"\r
                                    [class.bg-red-100]="!snapshot.isSuccessful"\r
                                    [class.text-red-700]="!snapshot.isSuccessful"\r
                                >\r
                                    {{\r
                                        (snapshot.isSuccessful\r
                                            ? 'smartFleet.detail.ok'\r
                                            : 'smartFleet.detail.failed'\r
                                        ) | transloco\r
                                    }}\r
                                </span>\r
                                <span\r
                                    class="ml-2 text-xs text-red-500"\r
                                    *ngIf="!snapshot.isSuccessful"\r
                                    >{{ snapshotErrorText(snapshot) }}</span\r
                                >\r
                            </td>\r
                            <td class="px-5 py-2.5 text-stone-600 dark:text-stone-300">\r
                                {{ snapshot.creditsSpent ?? 0 }}\r
                            </td>\r
                        </tr>\r
                    </tbody>\r
                </table>\r
            </div>\r
\r
            <!-- Alerts -->\r
            <div\r
                class="overflow-hidden rounded-2xl border border-stone-200/90 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900"\r
                *ngIf="activeTab() === 'alerts'"\r
            >\r
                <p\r
                    class="px-5 py-12 text-center text-sm text-stone-500 dark:text-stone-400"\r
                    *ngIf="!alerts().length"\r
                >\r
                    {{ 'smartFleet.alerts.empty' | transloco }}\r
                </p>\r
                <div class="divide-y divide-stone-200/90 dark:divide-gray-800">\r
                    <div\r
                        *ngFor="let alert of alerts()"\r
                        class="flex flex-wrap items-start gap-3 px-5 py-4"\r
                    >\r
                        <span\r
                            class="rounded-full px-2 py-0.5 text-xs font-semibold uppercase"\r
                            [ngClass]="severityClasses(alert.severity)"\r
                            >{{ 'smartFleet.severity.' + alert.severity | transloco }}</span\r
                        >\r
                        <div class="min-w-0 flex-1">\r
                            <p class="text-sm font-semibold text-stone-900 dark:text-white">\r
                                {{ alert.title }}\r
                            </p>\r
                            <p class="mt-0.5 text-xs text-stone-500 dark:text-stone-400">\r
                                {{ alert.message }}\r
                            </p>\r
                            <p class="mt-1 text-xs text-stone-400">\r
                                {{ formatDate(alert.detectedAt) }}\r
                            </p>\r
                            <div class="mt-2 flex flex-wrap gap-1.5">\r
                                <span\r
                                    *ngFor="let delivery of alert.deliveries || []"\r
                                    class="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-medium"\r
                                    [ngClass]="deliveryClasses(delivery)"\r
                                    [matTooltip]="delivery.error || delivery.target || ''"\r
                                >\r
                                    {{ 'smartFleet.channel.' + delivery.channel | transloco }}:\r
                                    {{ delivery.status }}\r
                                </span>\r
                                <span\r
                                    *ngIf="!alert.deliveries?.length"\r
                                    class="text-[11px] text-stone-400"\r
                                    >{{ deliverySummary(alert) }}</span\r
                                >\r
                            </div>\r
                        </div>\r
                        <button\r
                            mat-stroked-button\r
                            type="button"\r
                            *ngIf="!alert.acknowledgedAt"\r
                            (click)="acknowledge(alert)"\r
                            class="shrink-0 rounded-xl"\r
                        >\r
                            {{ 'smartFleet.alerts.acknowledge' | transloco }}\r
                        </button>\r
                        <span\r
                            class="shrink-0 text-xs text-emerald-600 dark:text-emerald-400"\r
                            *ngIf="alert.acknowledgedAt"\r
                            >{{ 'smartFleet.alerts.acknowledged' | transloco }}</span\r
                        >\r
                    </div>\r
                </div>\r
            </div>\r
\r
            <!-- Rules scoped to this asset -->\r
            <div\r
                class="rounded-2xl border border-stone-200/90 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900"\r
                *ngIf="activeTab() === 'rules'"\r
            >\r
                <div\r
                    class="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200/90 px-5 py-4 dark:border-gray-800"\r
                >\r
                    <div>\r
                        <h2 class="text-sm font-semibold text-stone-900 dark:text-white">\r
                            {{ 'smartFleet.detail.rulesTitle' | transloco }}\r
                        </h2>\r
                        <p class="mt-0.5 text-xs text-stone-500 dark:text-stone-400">\r
                            {{ scheduleHint() }}\r
                        </p>\r
                    </div>\r
                    <a\r
                        mat-flat-button\r
                        color="primary"\r
                        [routerLink]="createRuleLink()"\r
                        [queryParams]="createRuleQuery()"\r
                        class="rounded-xl !px-4 !py-2"\r
                    >\r
                        <mat-icon class="mr-1 icon-size-5">add</mat-icon>\r
                        {{ 'smartFleet.rules.addRule' | transloco }}\r
                    </a>\r
                </div>\r
                <p\r
                    class="px-5 py-12 text-center text-sm text-stone-500 dark:text-stone-400"\r
                    *ngIf="!rules().length"\r
                >\r
                    {{ 'smartFleet.rules.emptyForAsset' | transloco }}\r
                    <a\r
                        [routerLink]="createRuleLink()"\r
                        [queryParams]="createRuleQuery()"\r
                        class="font-semibold text-indigo-600 underline underline-offset-4 dark:text-indigo-400"\r
                        >{{ 'smartFleet.rules.createOne' | transloco }}</a\r
                    >\r
                </p>\r
                <div class="divide-y divide-stone-200/90 dark:divide-gray-800" *ngIf="rules().length">\r
                    <div\r
                        *ngFor="let rule of rules()"\r
                        class="flex flex-wrap items-center gap-3 px-5 py-3 text-sm"\r
                        [class.opacity-50]="rule.isActive === false"\r
                    >\r
                        <span class="font-semibold text-stone-900 dark:text-white">{{\r
                            rule.name || ('smartFleet.checkType.' + rule.checkType | transloco)\r
                        }}</span>\r
                        <span\r
                            class="rounded-full bg-indigo-50 px-2 py-0.5 text-xs font-medium text-indigo-700 dark:bg-indigo-950/40 dark:text-indigo-200"\r
                            >{{ ruleScopeLabel(rule) }}</span\r
                        >\r
                        <span\r
                            class="rounded-full bg-stone-100 px-2 py-0.5 text-xs font-medium uppercase text-stone-600 dark:bg-gray-800 dark:text-stone-300"\r
                            >{{ 'smartFleet.frequency.' + rule.frequency | transloco }}</span\r
                        >\r
                        <span\r
                            class="text-xs text-stone-500 dark:text-stone-400"\r
                            *ngIf="rule.thresholdDays"\r
                            >{{\r
                                'smartFleet.rules.thresholdSummary'\r
                                    | transloco: { days: rule.thresholdDays }\r
                            }}</span\r
                        >\r
                        <span\r
                            *ngFor="let channel of rule.channels || []"\r
                            class="rounded-full bg-stone-100 px-2 py-0.5 text-xs font-medium text-stone-600 dark:bg-gray-800 dark:text-stone-300"\r
                            >{{ 'smartFleet.channel.' + channel | transloco }}</span\r
                        >\r
                        <a\r
                            class="ml-auto text-xs font-semibold text-indigo-600 underline underline-offset-4 dark:text-indigo-400"\r
                            [routerLink]="createRuleLink()"\r
                            [queryParams]="editRuleQuery(rule)"\r
                            >{{ 'smartFleet.rules.edit' | transloco }}</a\r
                        >\r
                    </div>\r
                </div>\r
            </div>\r
\r
            <!-- Generated PDFs -->\r
            <div\r
                class="rounded-2xl border border-stone-200/90 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900"\r
                *ngIf="activeTab() === 'pdfs'"\r
            >\r
                <div class="border-b border-stone-200/90 px-5 py-4 dark:border-gray-800">\r
                    <h2 class="text-sm font-semibold text-stone-900 dark:text-white">\r
                        {{ 'smartFleet.detail.pdfsTitle' | transloco }}\r
                    </h2>\r
                    <p class="mt-0.5 text-xs text-stone-500 dark:text-stone-400">\r
                        {{ 'smartFleet.detail.pdfsSubtitle' | transloco }}\r
                    </p>\r
                </div>\r
                <p\r
                    *ngIf="!savedReports().length"\r
                    class="px-5 py-10 text-center text-sm text-stone-500 dark:text-stone-400"\r
                >\r
                    {{ 'smartFleet.detail.pdfsEmpty' | transloco }}\r
                </p>\r
                <div class="divide-y divide-stone-200/90 dark:divide-gray-800" *ngIf="savedReports().length">\r
                    <div\r
                        *ngFor="let report of savedReports()"\r
                        class="flex flex-wrap items-center gap-3 px-5 py-3"\r
                    >\r
                        <mat-icon class="icon-size-6 text-rose-600">picture_as_pdf</mat-icon>\r
                        <div class="min-w-0 flex-1">\r
                            <p class="truncate text-sm font-medium text-stone-900 dark:text-white">\r
                                {{ report.templateName || ('smartFleet.detail.pdfsNoTemplate' | transloco) }}\r
                            </p>\r
                            <p class="text-xs text-stone-500 dark:text-stone-400">\r
                                {{ formatDate(report.createdAt) }}\r
                            </p>\r
                        </div>\r
                        <button\r
                            mat-icon-button\r
                            type="button"\r
                            class="!text-rose-600"\r
                            [disabled]="downloadingReport() !== null"\r
                            [matTooltip]="'smartFleet.assets.reportDownload' | transloco"\r
                            (click)="downloadSavedReport(report)"\r
                        >\r
                            <mat-spinner *ngIf="downloadingReport() === reportKey(report)" diameter="18"></mat-spinner>\r
                            <mat-icon *ngIf="downloadingReport() !== reportKey(report)" class="icon-size-5"\r
                                >download</mat-icon\r
                            >\r
                        </button>\r
                    </div>\r
                </div>\r
            </div>\r
\r
            <!-- Developer inspect -->\r
            <div\r
                class="rounded-2xl border border-stone-200/90 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900"\r
                *ngIf="activeTab() === 'inspect'"\r
            >\r
                <div\r
                    class="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200/90 px-5 py-4 dark:border-gray-800"\r
                >\r
                    <div>\r
                        <h2 class="text-sm font-semibold text-stone-900 dark:text-white">\r
                            {{ 'smartFleet.detail.inspectTitle' | transloco }}\r
                        </h2>\r
                        <p class="mt-0.5 text-xs text-stone-500 dark:text-stone-400">\r
                            {{ 'smartFleet.detail.inspectSubtitle' | transloco }}\r
                        </p>\r
                    </div>\r
                    <button\r
                        mat-stroked-button\r
                        type="button"\r
                        (click)="copyInspect()"\r
                        class="rounded-xl"\r
                    >\r
                        <mat-icon class="mr-1 icon-size-5">content_copy</mat-icon>\r
                        {{ 'smartFleet.detail.copyInspect' | transloco }}\r
                    </button>\r
                </div>\r
                <pre\r
                    class="max-h-[32rem] overflow-auto px-5 py-4 text-xs leading-relaxed text-stone-700 dark:text-stone-300"\r
                    >{{ inspectJson() }}</pre\r
                >\r
            </div>\r
        </div>\r
    </main>\r
</div>\r
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FleetAssetDetailComponent, { className: "FleetAssetDetailComponent", filePath: "src/app/modules/smart-fleet/assets/fleet-asset-detail.component.ts", lineNumber: 103 });
})();
export {
  FleetAssetDetailComponent
};
//# sourceMappingURL=chunk-2CZ6RQII.js.map
