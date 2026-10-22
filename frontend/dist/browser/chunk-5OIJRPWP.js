import {
  BIOMETRICS_CONFIRM_DIALOG_PANEL_CLASS,
  BiometricsConfirmDialogComponent,
  BiometricsPeopleTableComponent,
  EDIT_PERSON_DIALOG_PANEL_CLASS,
  EditPersonDialogComponent,
  PeopleService
} from "./chunk-IXMVTZD7.js";
import "./chunk-ZR4RFQ5X.js";
import {
  MatSlider,
  MatSliderModule,
  MatSliderThumb
} from "./chunk-J7TSFZZL.js";
import "./chunk-LJHW6WXX.js";
import "./chunk-OE53JTO2.js";
import "./chunk-XL5FUCYU.js";
import {
  MatButtonToggle,
  MatButtonToggleGroup,
  MatButtonToggleModule
} from "./chunk-JSHIWGJY.js";
import "./chunk-PI7X3PUO.js";
import {
  utils,
  writeSync
} from "./chunk-P2TQI6AF.js";
import "./chunk-NNMFBAZF.js";
import {
  SMART_ENROLL_PROJECT_TYPE
} from "./chunk-VAHIF73V.js";
import {
  DateTime
} from "./chunk-KW3PRW6P.js";
import "./chunk-BSFB775C.js";
import "./chunk-2TFX63P7.js";
import {
  MatSnackBar
} from "./chunk-N6A4QSA6.js";
import "./chunk-LVI7H6QB.js";
import "./chunk-X2PSIDHT.js";
import "./chunk-BQZ6NKDU.js";
import "./chunk-ENWXGLEW.js";
import "./chunk-JURKDGMK.js";
import "./chunk-DT4JVZCC.js";
import "./chunk-CPZD6RE6.js";
import "./chunk-W5MZFF7W.js";
import "./chunk-QUFOCOZK.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-KIEFKQUB.js";
import {
  MatDialog
} from "./chunk-HVUVGZ2L.js";
import "./chunk-OIBNGD5S.js";
import "./chunk-5HABGTLH.js";
import {
  MatAnchor,
  MatButton,
  MatButtonModule
} from "./chunk-PJFCLQ64.js";
import "./chunk-PDWCMJ4H.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-6Z76B4PC.js";
import "./chunk-GX5GK4J6.js";
import "./chunk-JBF67GMG.js";
import {
  TranslocoDirective,
  TranslocoModule,
  TranslocoService
} from "./chunk-FWBWCXY5.js";
import {
  RouterLink
} from "./chunk-QL64NPDU.js";
import "./chunk-3V5B4ZWC.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  Subject,
  ViewChild,
  debounceTime,
  inject,
  setClassMetadata,
  signal,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
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
  ɵɵproperty,
  ɵɵpureFunction2,
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
} from "./chunk-YWP2Y7QK.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-F5M2C4EZ.js";

// src/app/modules/smart-enroll/people/people-list.component.ts
var _c0 = ["imageInput"];
var _c1 = (a0, a1) => ({ count: a0, scope: a1 });
function PeopleListComponent_ng_container_0_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 47)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 48);
    \u0275\u0275listener("click", function PeopleListComponent_ng_container_0_Conditional_44_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removeScopeFilter());
    });
    \u0275\u0275elementStart(4, "mat-icon", 49);
    \u0275\u0275text(5, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "span", 34);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", t_r4("smartEnrollCollections.scopeFilterLabel"), ": ", t_r4("smartEnrollCollections.scopeFilterOnboarding"), "");
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", t_r4("smartEnrollCollections.scopeFilterRemove"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r4("smartEnrollPeople.scopeFilterHint"));
  }
}
function PeopleListComponent_ng_container_0_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 50);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 51);
    \u0275\u0275listener("click", function PeopleListComponent_ng_container_0_Conditional_45_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.restoreScopeFilter());
    });
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollCollections.scopeFilterAll"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollCollections.scopeFilterRestore"), " ");
  }
}
function PeopleListComponent_ng_container_0_Conditional_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollCollections.imageSearchDisabledHint"), " ");
  }
}
function PeopleListComponent_ng_container_0_Conditional_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollPeople.imageSearchHint"), " ");
  }
}
function PeopleListComponent_ng_container_0_Conditional_60_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 58);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("src", ctx_r1.selectedImagePreview, \u0275\u0275sanitizeUrl);
  }
}
function PeopleListComponent_ng_container_0_Conditional_60_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 59)(1, "label", 60);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-slider", 61)(4, "input", 62);
    \u0275\u0275listener("valueChange", function PeopleListComponent_ng_container_0_Conditional_60_Conditional_15_Template_input_valueChange_4_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onMinScoreChange($event));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", t_r4("smartEnrollPeople.minScore"), ": ", ctx_r1.minScore, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r1.minScore);
  }
}
function PeopleListComponent_ng_container_0_Conditional_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36)(1, "mat-button-toggle-group", 52);
    \u0275\u0275listener("change", function PeopleListComponent_ng_container_0_Conditional_60_Template_mat_button_toggle_group_change_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onSearchModeChange($event.value));
    });
    \u0275\u0275elementStart(2, "mat-button-toggle", 53);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-button-toggle", 54);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 55)(7, "button", 56);
    \u0275\u0275listener("click", function PeopleListComponent_ng_container_0_Conditional_60_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.triggerImageUpload());
    });
    \u0275\u0275elementStart(8, "mat-icon", 25);
    \u0275\u0275text(9, "upload");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "input", 57, 0);
    \u0275\u0275listener("change", function PeopleListComponent_ng_container_0_Conditional_60_Template_input_change_12_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onImageSelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, PeopleListComponent_ng_container_0_Conditional_60_Conditional_14_Template, 1, 1, "img", 58);
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, PeopleListComponent_ng_container_0_Conditional_60_Conditional_15_Template, 5, 3, "div", 59);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.searchMode)("disabled", ctx_r1.disableActions || ctx_r1.scopeFilter === "all");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4("smartEnrollPeople.fast"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4("smartEnrollPeople.accurate"));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.disableActions || ctx_r1.scopeFilter === "all");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r4("smartEnrollPeople.uploadImage"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.selectedImagePreview ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.selectedImagePreview ? 15 : -1);
  }
}
function PeopleListComponent_ng_container_0_Conditional_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275element(1, "mat-spinner", 63);
    \u0275\u0275elementStart(2, "p", 64);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r4("smartEnrollPeople.loading"));
  }
}
function PeopleListComponent_ng_container_0_Conditional_77_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45)(1, "div", 65)(2, "mat-icon");
    \u0275\u0275text(3, "person_off");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "h3", 66);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 67);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "a", 68)(9, "mat-icon", 15);
    \u0275\u0275text(10, "folder");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollPeople.emptyTitle"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollPeople.emptySubtitle"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollPeople.viewProjects"), " ");
  }
}
function PeopleListComponent_ng_container_0_Conditional_78_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-biometrics-people-table", 69);
    \u0275\u0275listener("deletePerson", function PeopleListComponent_ng_container_0_Conditional_78_Template_app_biometrics_people_table_deletePerson_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deletePerson($event));
    })("editPerson", function PeopleListComponent_ng_container_0_Conditional_78_Template_app_biometrics_people_table_editPerson_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.editPerson($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("people", ctx_r1.peopleData())("filterText", ctx_r1.filterText)("loading", ctx_r1.loading())("disableActions", ctx_r1.disableActions)("hideCheckboxes", true);
  }
}
function PeopleListComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 2)(2, "header", 3)(3, "div", 4)(4, "div", 5)(5, "a", 6);
    \u0275\u0275text(6, " Verifik ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "mat-icon", 7);
    \u0275\u0275elementStart(8, "a", 8);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "mat-icon", 7);
    \u0275\u0275elementStart(11, "span", 9);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 10)(14, "div", 11)(15, "h1", 12);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "p", 13);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "button", 14);
    \u0275\u0275listener("click", function PeopleListComponent_ng_container_0_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.createPerson());
    });
    \u0275\u0275elementStart(20, "mat-icon", 15);
    \u0275\u0275text(21, "person_add");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(24, "main", 16)(25, "div", 17)(26, "div", 18)(27, "div", 19)(28, "div", 20)(29, "mat-icon", 21);
    \u0275\u0275text(30, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "input", 22);
    \u0275\u0275listener("input", function PeopleListComponent_ng_container_0_Template_input_input_31_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onTextFilterChange($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 23)(33, "button", 24);
    \u0275\u0275listener("click", function PeopleListComponent_ng_container_0_Template_button_click_33_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearFilters());
    });
    \u0275\u0275elementStart(34, "mat-icon", 25);
    \u0275\u0275text(35, "filter_list_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "span");
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "button", 24);
    \u0275\u0275listener("click", function PeopleListComponent_ng_container_0_Template_button_click_38_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.exportData());
    });
    \u0275\u0275elementStart(39, "mat-icon", 25);
    \u0275\u0275text(40, "file_download");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "span");
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(43, "div", 26);
    \u0275\u0275template(44, PeopleListComponent_ng_container_0_Conditional_44_Template, 8, 4)(45, PeopleListComponent_ng_container_0_Conditional_45_Template, 4, 2);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 27)(47, "button", 28);
    \u0275\u0275listener("click", function PeopleListComponent_ng_container_0_Template_button_click_47_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleImageSearchAccordion());
    });
    \u0275\u0275elementStart(48, "div", 29)(49, "div", 30)(50, "mat-icon", 31);
    \u0275\u0275text(51, "image_search");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "div", 32)(53, "p", 33);
    \u0275\u0275text(54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "p", 34);
    \u0275\u0275template(56, PeopleListComponent_ng_container_0_Conditional_56_Template, 1, 1)(57, PeopleListComponent_ng_container_0_Conditional_57_Template, 1, 1);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(58, "mat-icon", 35);
    \u0275\u0275text(59, "expand_more");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(60, PeopleListComponent_ng_container_0_Conditional_60_Template, 16, 8, "div", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "div", 27)(62, "div", 37)(63, "div", 38)(64, "div", 30)(65, "mat-icon");
    \u0275\u0275text(66, "group");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(67, "div")(68, "h2", 39);
    \u0275\u0275text(69);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "p", 40);
    \u0275\u0275text(71);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(72, "div", 41);
    \u0275\u0275element(73, "span", 42);
    \u0275\u0275text(74);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(75, "div", 43);
    \u0275\u0275template(76, PeopleListComponent_ng_container_0_Conditional_76_Template, 4, 1, "div", 44)(77, PeopleListComponent_ng_container_0_Conditional_77_Template, 12, 3, "div", 45)(78, PeopleListComponent_ng_container_0_Conditional_78_Template, 1, 5, "app-biometrics-people-table", 46);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" ", t_r4("nav.smart_enroll"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r4("smartEnrollPeople.title"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollPeople.title"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollPeople.subtitle"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.disableActions);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r4("smartEnrollPeople.createPerson"));
    \u0275\u0275advance(8);
    \u0275\u0275property("placeholder", t_r4("smartEnrollPeople.search"))("value", ctx_r1.filterText);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.disabledClearFilters);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r4("smartEnrollPeople.clearFilters"));
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.disableActions);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r4("export"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.scopeFilter === "onboarding" ? 44 : 45);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("opacity-60", ctx_r1.scopeFilter === "all");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.scopeFilter === "all");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(t_r4("smartEnrollPeople.searchByImage"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.scopeFilter === "all" ? 56 : 57);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("rotate-180", ctx_r1.imageSearchExpanded);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.imageSearchExpanded ? 60 : -1);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollPeople.tableTitle"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollPeople.tableSubtitleScoped", \u0275\u0275pureFunction2(29, _c1, ctx_r1.peopleData().length, t_r4(ctx_r1.tableScopeLabelKey))), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-emerald-400", !ctx_r1.loading())("bg-amber-400", ctx_r1.loading());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.loading() ? t_r4("smartEnrollPeople.loading") : t_r4("smartEnrollPeople.live"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.loading() ? 76 : !ctx_r1.peopleData().length && !ctx_r1.filterText && !ctx_r1.selectedImagePreview ? 77 : 78);
  }
}
var PeopleListComponent = class _PeopleListComponent {
  constructor() {
    this._peopleService = inject(PeopleService);
    this._dialog = inject(MatDialog);
    this._snackBar = inject(MatSnackBar);
    this._transloco = inject(TranslocoService);
    this._cdr = inject(ChangeDetectorRef);
    this._minScoreChange$ = new Subject();
    this._destroy$ = new Subject();
    this.peopleData = signal([]);
    this.exporting = signal(false);
    this.filterText = "";
    this.imageSearchExpanded = false;
    this.loading = signal(true);
    this.minScore = 0.8;
    this.searchMode = "fast";
    this.selectedImagePreview = null;
    this.scopeFilter = "onboarding";
    this.projectType = SMART_ENROLL_PROJECT_TYPE;
  }
  ngOnInit() {
    this._fetchRecords();
    this._minScoreChange$.pipe(debounceTime(300), takeUntil(this._destroy$)).subscribe(() => {
      if (this.selectedImagePreview)
        this._fetchRecords();
    });
  }
  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }
  get disableActions() {
    return this.loading() || this.exporting();
  }
  get disabledClearFilters() {
    return this.disableActions || !this.filterText && !this.selectedImagePreview && this.scopeFilter === "onboarding";
  }
  get tableScopeLabelKey() {
    return this.scopeFilter === "onboarding" ? "smartEnrollCollections.scopeFilterOnboarding" : "smartEnrollCollections.scopeFilterAll";
  }
  clearFilters() {
    const hadImage = !!this.selectedImagePreview;
    const hadScopeChange = this.scopeFilter !== "onboarding";
    this.filterText = "";
    this.minScore = 0.8;
    this.searchMode = "fast";
    this.selectedImagePreview = null;
    this.imageSearchExpanded = false;
    this.scopeFilter = "onboarding";
    if (hadImage || hadScopeChange)
      this._fetchRecords();
    this._cdr.markForCheck();
  }
  removeScopeFilter() {
    if (this.scopeFilter === "all")
      return;
    this.scopeFilter = "all";
    this.selectedImagePreview = null;
    this.imageSearchExpanded = false;
    this._fetchRecords();
    this._cdr.markForCheck();
  }
  restoreScopeFilter() {
    if (this.scopeFilter === "onboarding")
      return;
    this.scopeFilter = "onboarding";
    this._fetchRecords();
    this._cdr.markForCheck();
  }
  createPerson() {
    const dialogRef = this._dialog.open(EditPersonDialogComponent, {
      width: "640px",
      maxWidth: "94vw",
      panelClass: EDIT_PERSON_DIALOG_PANEL_CLASS,
      data: { mode: "create" }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (!result || result.action !== "create")
        return;
      this.loading.set(true);
      const request$ = result.method === "liveness" ? this._peopleService.createPersonWithLiveness(result.person) : this._peopleService.createPerson(result.person);
      request$.subscribe({
        next: () => this._fetchRecords(),
        error: (err) => this._showCreateError(err, result.method === "liveness"),
        complete: () => this.loading.set(false)
      });
    });
  }
  deletePerson(person) {
    const dialogRef = this._dialog.open(BiometricsConfirmDialogComponent, {
      panelClass: BIOMETRICS_CONFIRM_DIALOG_PANEL_CLASS,
      width: "480px",
      data: {
        title: this._transloco.translate("smartEnrollPeople.deleteTitle"),
        subtitle: person.name,
        message: this._transloco.translate("smartEnrollPeople.deleteMessage"),
        warning: this._transloco.translate("smartEnrollPeople.deleteWarning"),
        confirmLabel: this._transloco.translate("smartEnrollPeople.deleteConfirm")
      }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result?.action !== "delete")
        return;
      this.loading.set(true);
      this._peopleService.deletePerson(person._id).subscribe({
        next: () => this._fetchRecords(),
        error: () => this._showError("smartEnrollPeople.deleteError"),
        complete: () => this.loading.set(false)
      });
    });
  }
  editPerson(person) {
    const dialogRef = this._dialog.open(EditPersonDialogComponent, {
      width: "640px",
      maxWidth: "94vw",
      panelClass: EDIT_PERSON_DIALOG_PANEL_CLASS,
      data: { mode: "edit", person }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (!result || result.action !== "update")
        return;
      this.loading.set(true);
      this._peopleService.updatePerson(result.person).subscribe({
        next: () => this._fetchRecords(),
        error: () => this._showError("smartEnrollPeople.updateError"),
        complete: () => this.loading.set(false)
      });
    });
  }
  exportData() {
    if (this.exporting())
      return;
    this.exporting.set(true);
    const rows = this.peopleData().map((person) => ({
      name: person.name,
      id: person._id,
      dateOfBirth: person.date_of_birth || "",
      nationality: person.nationality || "",
      collections: person.collections?.join(", ") || "",
      updatedAt: person.updatedAt || ""
    }));
    const worksheet = utils.json_to_sheet(rows);
    const workbook = { Sheets: { data: worksheet }, SheetNames: ["data"] };
    const buffer = writeSync(workbook, { bookType: "xlsx", type: "array" });
    const blob = new Blob([buffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `verifik_people_${DateTime.now().toFormat("yyyy-MM-dd")}.xlsx`;
    a.click();
    URL.revokeObjectURL(url);
    this.exporting.set(false);
    this._cdr.markForCheck();
  }
  onImageSelected(event) {
    const input = event.target;
    const file = input.files?.[0];
    if (!file?.type.startsWith("image/")) {
      this.selectedImagePreview = null;
      this._fetchRecords();
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      this._showError("smartEnrollPeople.imageSizeError");
      input.value = "";
      return;
    }
    this.imageSearchExpanded = true;
    const reader = new FileReader();
    reader.onload = (e) => {
      this.selectedImagePreview = e.target?.result;
      this._fetchRecords();
      this._cdr.markForCheck();
    };
    reader.readAsDataURL(file);
  }
  onMinScoreChange(value) {
    this.minScore = value;
    if (this.selectedImagePreview && !this.disableActions) {
      this._minScoreChange$.next(value);
    }
  }
  onSearchModeChange(mode) {
    this.searchMode = mode;
    if (this.selectedImagePreview && !this.disableActions)
      this._fetchRecords();
  }
  onTextFilterChange(event) {
    this.filterText = event.target.value?.trim().toLowerCase() || "";
    this._cdr.markForCheck();
  }
  toggleImageSearchAccordion() {
    if (this.scopeFilter === "all")
      return;
    this.imageSearchExpanded = !this.imageSearchExpanded;
  }
  triggerImageUpload() {
    if (!this.disableActions && this.scopeFilter === "onboarding")
      this.imageInput?.nativeElement.click();
  }
  _fetchRecords() {
    this.loading.set(true);
    const params = this.selectedImagePreview ? { image: this.selectedImagePreview, searchMode: this.searchMode, minScore: this.minScore } : {};
    const request$ = this.scopeFilter === "all" ? this._peopleService.getPeople(params) : this._peopleService.getPeopleByProjectType(this.projectType, params);
    request$.subscribe({
      next: (response) => {
        const data = response.data?.map((person) => __spreadProps(__spreadValues({}, person), {
          date_of_birth: person.date_of_birth ? DateTime.fromISO(person.date_of_birth).toFormat("yyyy-MM-dd") : null
        })) || [];
        this.peopleData.set(data);
        this.loading.set(false);
        this._cdr.markForCheck();
      },
      error: () => {
        this._showError("smartEnrollPeople.getError");
        this.loading.set(false);
        this._cdr.markForCheck();
      }
    });
  }
  _showError(key) {
    this._snackBar.open(this._transloco.translate(key), this._transloco.translate("close"), {
      duration: 3e3
    });
  }
  _showCreateError(err, isLiveness) {
    const message = err?.error?.message || "";
    const code = err?.error?.code || "";
    if (isLiveness) {
      if (message.includes("duplicated_person") || code === "duplicated_person") {
        this._showError("smartEnrollPeople.createErrorDuplicate");
        return;
      }
      if (message.includes("liveness_failed") || message.includes("liveness_quality")) {
        this._showError("smartEnrollPeople.createErrorLiveness");
        return;
      }
    }
    this._showError("smartEnrollPeople.createError");
  }
  static {
    this.\u0275fac = function PeopleListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PeopleListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PeopleListComponent, selectors: [["app-people-list"]], viewQuery: function PeopleListComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.imageInput = _t.first);
      }
    }, decls: 1, vars: 0, consts: [["imageInput", ""], [4, "transloco"], [1, "people-container", "flex", "min-h-screen", "min-w-0", "flex-auto", "flex-col", "bg-stone-50", "dark:bg-gray-950"], [1, "border-b", "border-stone-200/90", "bg-white/90", "px-5", "py-6", "backdrop-blur-sm", "dark:border-gray-800", "dark:bg-gray-950/90", "md:px-8", "md:py-8"], [1, "mx-auto", "flex", "w-full", "max-w-7xl", "flex-col", "gap-5"], [1, "flex", "flex-wrap", "items-center", "text-xs", "font-medium", "leading-none", "text-stone-500", "dark:text-stone-400"], ["routerLink", "/home", 1, "cursor-pointer", "text-stone-700", "underline-offset-4", "hover:underline", "dark:text-stone-300"], ["svgIcon", "heroicons_solid:chevron-right", 1, "icon-size-4", "mx-2", "text-stone-400"], ["routerLink", "/smart-enroll/projects", 1, "cursor-pointer", "text-stone-700", "underline-offset-4", "hover:underline", "dark:text-stone-300"], [1, "cursor-default", "text-stone-600", "dark:text-stone-300"], [1, "flex", "flex-col", "gap-4", "lg:flex-row", "lg:items-end", "lg:justify-between"], [1, "max-w-2xl"], [1, "text-2xl", "font-semibold", "tracking-tight", "text-stone-950", "dark:text-white", "md:text-3xl"], [1, "mt-2", "text-sm", "leading-6", "text-stone-500", "dark:text-stone-400", "md:text-base"], ["mat-flat-button", "", "color", "primary", "type", "button", 1, "min-h-11", "shrink-0", "rounded-xl", "px-5", 3, "click", "disabled"], [1, "mr-1", "!h-4", "!w-4", "!text-base"], [1, "flex", "flex-auto", "flex-col", "px-5", "py-8", "md:px-8", "md:py-10"], [1, "mx-auto", "flex", "w-full", "max-w-7xl", "flex-col", "gap-6"], [1, "rounded-2xl", "border", "border-stone-200/90", "bg-white", "p-5", "shadow-sm", "dark:border-gray-800", "dark:bg-gray-900/70", "md:p-6"], [1, "flex", "flex-col", "gap-4", "lg:flex-row", "lg:items-center", "lg:justify-between"], [1, "relative", "min-w-0", "flex-1"], [1, "pointer-events-none", "absolute", "left-3", "top-1/2", "!h-4", "!w-4", "-translate-y-1/2", "text-stone-400"], ["type", "text", 1, "h-11", "w-full", "rounded-xl", "border", "border-stone-200", "bg-stone-50", "pl-10", "pr-4", "text-sm", "text-stone-900", "outline-none", "transition", "focus:border-stone-400", "focus:bg-white", "dark:border-gray-700", "dark:bg-gray-950", "dark:text-stone-100", "placeholder:text-stone-400", "dark:placeholder:text-stone-500", "dark:focus:border-gray-500", "dark:focus:bg-gray-950", 3, "input", "placeholder", "value"], [1, "flex", "flex-wrap", "items-center", "gap-2"], ["type", "button", 1, "inline-flex", "min-h-10", "items-center", "justify-center", "gap-2", "rounded-xl", "border", "border-stone-200", "px-4", "text-sm", "font-medium", "text-stone-800", "transition", "hover:bg-stone-50", "disabled:cursor-not-allowed", "disabled:opacity-60", "dark:border-gray-700", "dark:text-stone-100", "dark:hover:bg-gray-800", 3, "click", "disabled"], [1, "!h-4", "!w-4", "!text-base"], [1, "flex", "flex-wrap", "items-center", "gap-2", "border-t", "border-stone-100", "pt-4", "dark:border-gray-800"], [1, "overflow-hidden", "rounded-2xl", "border", "border-stone-200/90", "bg-white", "shadow-sm", "dark:border-gray-800", "dark:bg-gray-900/70"], ["type", "button", 1, "flex", "w-full", "items-center", "justify-between", "px-5", "py-4", "transition", "hover:bg-stone-50", "dark:hover:bg-gray-800/40", "md:px-6", 3, "click", "disabled"], [1, "flex", "items-center", "gap-3"], [1, "flex", "h-10", "w-10", "shrink-0", "items-center", "justify-center", "rounded-xl", "border", "border-stone-200", "bg-stone-50", "text-stone-700", "dark:border-gray-800", "dark:bg-gray-950", "dark:text-stone-200"], [1, "!h-5", "!w-5", "!text-xl"], [1, "text-left"], [1, "text-sm", "font-semibold", "text-stone-950", "dark:text-white"], [1, "text-xs", "text-stone-500", "dark:text-stone-400"], [1, "text-stone-400", "transition-transform"], [1, "space-y-4", "border-t", "border-stone-200/80", "px-5", "py-5", "dark:border-gray-800", "md:px-6"], [1, "flex", "flex-col", "gap-3", "border-b", "border-stone-200/80", "p-5", "dark:border-gray-800", "md:flex-row", "md:items-center", "md:justify-between", "md:p-6"], [1, "flex", "items-start", "gap-3"], [1, "text-base", "font-semibold", "text-stone-950", "dark:text-white"], [1, "mt-1", "text-sm", "text-stone-500", "dark:text-stone-400"], [1, "flex", "items-center", "gap-2", "rounded-full", "bg-stone-100", "px-3", "py-1", "text-xs", "font-medium", "text-stone-500", "dark:bg-gray-800", "dark:text-gray-400"], [1, "h-2", "w-2", "rounded-full"], [1, "p-5", "md:p-6"], [1, "flex", "flex-col", "items-center", "justify-center", "rounded-xl", "border", "border-dashed", "border-stone-200", "py-14", "text-center", "dark:border-gray-800"], [1, "flex", "flex-col", "items-center", "justify-center", "rounded-xl", "border", "border-dashed", "border-stone-200", "px-5", "py-14", "text-center", "dark:border-gray-800"], [3, "people", "filterText", "loading", "disableActions", "hideCheckboxes"], [1, "inline-flex", "items-center", "gap-1", "rounded-full", "border", "border-indigo-200", "bg-indigo-50", "px-3", "py-1", "text-xs", "font-medium", "text-indigo-800", "dark:border-indigo-800", "dark:bg-indigo-950", "dark:text-indigo-200"], ["type", "button", 1, "inline-flex", "h-5", "w-5", "items-center", "justify-center", "rounded-full", "transition", "hover:bg-indigo-100", "dark:hover:bg-indigo-900", 3, "click"], [1, "!h-3.5", "!w-3.5", "!text-base"], [1, "inline-flex", "items-center", "gap-2", "rounded-full", "border", "border-stone-200", "bg-stone-50", "px-3", "py-1", "text-xs", "font-medium", "text-stone-700", "dark:border-gray-700", "dark:bg-gray-950", "dark:text-stone-300"], ["type", "button", 1, "inline-flex", "min-h-8", "items-center", "justify-center", "rounded-xl", "border", "border-stone-200", "px-3", "text-xs", "font-medium", "text-stone-800", "transition", "hover:bg-stone-50", "dark:border-gray-700", "dark:text-stone-100", "dark:hover:bg-gray-800", 3, "click"], [1, "rounded-xl", 3, "change", "value", "disabled"], ["value", "fast"], ["value", "accurate"], [1, "flex", "flex-wrap", "items-center", "gap-4"], ["type", "button", 1, "inline-flex", "min-h-10", "items-center", "justify-center", "gap-2", "rounded-xl", "border", "border-stone-200", "bg-stone-950", "px-4", "text-sm", "font-medium", "text-white", "transition", "hover:bg-stone-800", "disabled:cursor-not-allowed", "disabled:opacity-60", "dark:bg-white", "dark:text-gray-950", "dark:hover:bg-stone-200", 3, "click", "disabled"], ["type", "file", "accept", "image/*", 1, "hidden", 3, "change"], ["alt", "", 1, "h-16", "w-16", "rounded-xl", "border", "border-stone-200", "object-cover", "dark:border-gray-700", 3, "src"], [1, "max-w-md", "rounded-xl", "border", "border-stone-200", "p-4", "dark:border-gray-800"], [1, "text-xs", "font-medium", "uppercase", "tracking-[0.14em]", "text-stone-500", "dark:text-stone-400"], ["min", "0.5", "max", "1", "step", "0.05", "discrete", "", 1, "mt-2", "w-full"], ["matSliderThumb", "", 3, "valueChange", "value"], ["diameter", "40"], [1, "mt-4", "text-sm", "text-stone-500", "dark:text-stone-400"], [1, "flex", "h-12", "w-12", "items-center", "justify-center", "rounded-xl", "bg-stone-100", "text-stone-500", "dark:bg-gray-800", "dark:text-stone-300"], [1, "mt-4", "text-base", "font-semibold", "text-stone-950", "dark:text-white"], [1, "mt-1", "max-w-sm", "text-sm", "text-stone-500", "dark:text-stone-400"], ["routerLink", "/smart-enroll/projects", "mat-stroked-button", "", "type", "button", 1, "mt-5", "min-h-10", "rounded-xl", "px-5"], [3, "deletePerson", "editPerson", "people", "filterText", "loading", "disableActions", "hideCheckboxes"]], template: function PeopleListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, PeopleListComponent_ng_container_0_Template, 79, 32, "ng-container", 1);
      }
    }, dependencies: [
      CommonModule,
      MatButtonModule,
      MatAnchor,
      MatButton,
      MatButtonToggleModule,
      MatButtonToggleGroup,
      MatButtonToggle,
      MatIconModule,
      MatIcon,
      MatSliderModule,
      MatSlider,
      MatSliderThumb,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      TranslocoModule,
      TranslocoDirective,
      RouterLink,
      BiometricsPeopleTableComponent
    ], styles: ["\n\n[_nghost-%COMP%] {\n  display: contents;\n}\n.people-container[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.people-container[_ngcontent-%COMP%]   mat-button-toggle-group[_ngcontent-%COMP%] {\n  border-radius: 0.75rem;\n  overflow: hidden;\n}\n/*# sourceMappingURL=people-list.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PeopleListComponent, [{
    type: Component,
    args: [{ selector: "app-people-list", standalone: true, imports: [
      CommonModule,
      MatButtonModule,
      MatButtonToggleModule,
      MatIconModule,
      MatSliderModule,
      MatProgressSpinnerModule,
      TranslocoModule,
      RouterLink,
      BiometricsPeopleTableComponent
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `<ng-container *transloco="let t">\r
    <div class="people-container flex min-h-screen min-w-0 flex-auto flex-col bg-stone-50 dark:bg-gray-950">\r
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
                    <span class="cursor-default text-stone-600 dark:text-stone-300">{{ t('smartEnrollPeople.title') }}</span>\r
                </div>\r
\r
                <div class="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">\r
                    <div class="max-w-2xl">\r
                        <h1 class="text-2xl font-semibold tracking-tight text-stone-950 dark:text-white md:text-3xl">\r
                            {{ t('smartEnrollPeople.title') }}\r
                        </h1>\r
                        <p class="mt-2 text-sm leading-6 text-stone-500 dark:text-stone-400 md:text-base">\r
                            {{ t('smartEnrollPeople.subtitle') }}\r
                        </p>\r
                    </div>\r
\r
                    <button\r
                        mat-flat-button\r
                        color="primary"\r
                        type="button"\r
                        class="min-h-11 shrink-0 rounded-xl px-5"\r
                        (click)="createPerson()"\r
                        [disabled]="disableActions"\r
                    >\r
                        <mat-icon class="mr-1 !h-4 !w-4 !text-base">person_add</mat-icon>\r
                        <span>{{ t('smartEnrollPeople.createPerson') }}</span>\r
                    </button>\r
                </div>\r
            </div>\r
        </header>\r
\r
        <main class="flex flex-auto flex-col px-5 py-8 md:px-8 md:py-10">\r
            <div class="mx-auto flex w-full max-w-7xl flex-col gap-6">\r
                <!-- Toolbar -->\r
                <div class="rounded-2xl border border-stone-200/90 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900/70 md:p-6">\r
                    <div class="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">\r
                        <div class="relative min-w-0 flex-1">\r
                            <mat-icon class="pointer-events-none absolute left-3 top-1/2 !h-4 !w-4 -translate-y-1/2 text-stone-400">search</mat-icon>\r
                            <input\r
                                type="text"\r
                                class="h-11 w-full rounded-xl border border-stone-200 bg-stone-50 pl-10 pr-4 text-sm text-stone-900 outline-none transition focus:border-stone-400 focus:bg-white dark:border-gray-700 dark:bg-gray-950 dark:text-stone-100 placeholder:text-stone-400 dark:placeholder:text-stone-500 dark:focus:border-gray-500 dark:focus:bg-gray-950"\r
                                [placeholder]="t('smartEnrollPeople.search')"\r
                                [value]="filterText"\r
                                (input)="onTextFilterChange($event)"\r
                            />\r
                        </div>\r
\r
                        <div class="flex flex-wrap items-center gap-2">\r
                            <button\r
                                type="button"\r
                                class="inline-flex min-h-10 items-center justify-center gap-2 rounded-xl border border-stone-200 px-4 text-sm font-medium text-stone-800 transition hover:bg-stone-50 disabled:cursor-not-allowed disabled:opacity-60 dark:border-gray-700 dark:text-stone-100 dark:hover:bg-gray-800"\r
                                (click)="clearFilters()"\r
                                [disabled]="disabledClearFilters"\r
                            >\r
                                <mat-icon class="!h-4 !w-4 !text-base">filter_list_off</mat-icon>\r
                                <span>{{ t('smartEnrollPeople.clearFilters') }}</span>\r
                            </button>\r
\r
                            <button\r
                                type="button"\r
                                class="inline-flex min-h-10 items-center justify-center gap-2 rounded-xl border border-stone-200 px-4 text-sm font-medium text-stone-800 transition hover:bg-stone-50 disabled:cursor-not-allowed disabled:opacity-60 dark:border-gray-700 dark:text-stone-100 dark:hover:bg-gray-800"\r
                                (click)="exportData()"\r
                                [disabled]="disableActions"\r
                            >\r
                                <mat-icon class="!h-4 !w-4 !text-base">file_download</mat-icon>\r
                                <span>{{ t('export') }}</span>\r
                            </button>\r
                        </div>\r
                    </div>\r
\r
                    <div class="flex flex-wrap items-center gap-2 border-t border-stone-100 pt-4 dark:border-gray-800">\r
                        @if (scopeFilter === 'onboarding') {\r
                            <span class="inline-flex items-center gap-1 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-800 dark:border-indigo-800 dark:bg-indigo-950 dark:text-indigo-200">\r
                                <span>{{ t('smartEnrollCollections.scopeFilterLabel') }}: {{ t('smartEnrollCollections.scopeFilterOnboarding') }}</span>\r
                                <button\r
                                    type="button"\r
                                    class="inline-flex h-5 w-5 items-center justify-center rounded-full transition hover:bg-indigo-100 dark:hover:bg-indigo-900"\r
                                    (click)="removeScopeFilter()"\r
                                    [attr.aria-label]="t('smartEnrollCollections.scopeFilterRemove')"\r
                                >\r
                                    <mat-icon class="!h-3.5 !w-3.5 !text-base">close</mat-icon>\r
                                </button>\r
                            </span>\r
                            <span class="text-xs text-stone-500 dark:text-stone-400">{{ t('smartEnrollPeople.scopeFilterHint') }}</span>\r
                        } @else {\r
                            <span class="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-xs font-medium text-stone-700 dark:border-gray-700 dark:bg-gray-950 dark:text-stone-300">\r
                                {{ t('smartEnrollCollections.scopeFilterAll') }}\r
                            </span>\r
                            <button\r
                                type="button"\r
                                class="inline-flex min-h-8 items-center justify-center rounded-xl border border-stone-200 px-3 text-xs font-medium text-stone-800 transition hover:bg-stone-50 dark:border-gray-700 dark:text-stone-100 dark:hover:bg-gray-800"\r
                                (click)="restoreScopeFilter()"\r
                            >\r
                                {{ t('smartEnrollCollections.scopeFilterRestore') }}\r
                            </button>\r
                        }\r
                    </div>\r
                </div>\r
\r
                <!-- Image search -->\r
                <div\r
                    class="overflow-hidden rounded-2xl border border-stone-200/90 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900/70"\r
                    [class.opacity-60]="scopeFilter === 'all'"\r
                >\r
                    <button\r
                        type="button"\r
                        class="flex w-full items-center justify-between px-5 py-4 transition hover:bg-stone-50 dark:hover:bg-gray-800/40 md:px-6"\r
                        (click)="toggleImageSearchAccordion()"\r
                        [disabled]="scopeFilter === 'all'"\r
                    >\r
                        <div class="flex items-center gap-3">\r
                            <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-stone-200 bg-stone-50 text-stone-700 dark:border-gray-800 dark:bg-gray-950 dark:text-stone-200">\r
                                <mat-icon class="!h-5 !w-5 !text-xl">image_search</mat-icon>\r
                            </div>\r
                            <div class="text-left">\r
                                <p class="text-sm font-semibold text-stone-950 dark:text-white">{{ t('smartEnrollPeople.searchByImage') }}</p>\r
                                <p class="text-xs text-stone-500 dark:text-stone-400">\r
                                    @if (scopeFilter === 'all') {\r
                                        {{ t('smartEnrollCollections.imageSearchDisabledHint') }}\r
                                    } @else {\r
                                        {{ t('smartEnrollPeople.imageSearchHint') }}\r
                                    }\r
                                </p>\r
                            </div>\r
                        </div>\r
                        <mat-icon class="text-stone-400 transition-transform" [class.rotate-180]="imageSearchExpanded">expand_more</mat-icon>\r
                    </button>\r
\r
                    @if (imageSearchExpanded) {\r
                        <div class="space-y-4 border-t border-stone-200/80 px-5 py-5 dark:border-gray-800 md:px-6">\r
                            <mat-button-toggle-group\r
                                [value]="searchMode"\r
                                (change)="onSearchModeChange($event.value)"\r
                                [disabled]="disableActions || scopeFilter === 'all'"\r
                                class="rounded-xl"\r
                            >\r
                                <mat-button-toggle value="fast">{{ t('smartEnrollPeople.fast') }}</mat-button-toggle>\r
                                <mat-button-toggle value="accurate">{{ t('smartEnrollPeople.accurate') }}</mat-button-toggle>\r
                            </mat-button-toggle-group>\r
\r
                            <div class="flex flex-wrap items-center gap-4">\r
                                <button\r
                                    type="button"\r
                                    class="inline-flex min-h-10 items-center justify-center gap-2 rounded-xl border border-stone-200 bg-stone-950 px-4 text-sm font-medium text-white transition hover:bg-stone-800 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-white dark:text-gray-950 dark:hover:bg-stone-200"\r
                                    (click)="triggerImageUpload()"\r
                                    [disabled]="disableActions || scopeFilter === 'all'"\r
                                >\r
                                    <mat-icon class="!h-4 !w-4 !text-base">upload</mat-icon>\r
                                    <span>{{ t('smartEnrollPeople.uploadImage') }}</span>\r
                                </button>\r
                                <input #imageInput type="file" accept="image/*" class="hidden" (change)="onImageSelected($event)" />\r
                                @if (selectedImagePreview) {\r
                                    <img [src]="selectedImagePreview" alt="" class="h-16 w-16 rounded-xl border border-stone-200 object-cover dark:border-gray-700" />\r
                                }\r
                            </div>\r
\r
                            @if (selectedImagePreview) {\r
                                <div class="max-w-md rounded-xl border border-stone-200 p-4 dark:border-gray-800">\r
                                    <label class="text-xs font-medium uppercase tracking-[0.14em] text-stone-500 dark:text-stone-400">\r
                                        {{ t('smartEnrollPeople.minScore') }}: {{ minScore }}\r
                                    </label>\r
                                    <mat-slider class="mt-2 w-full" min="0.5" max="1" step="0.05" discrete>\r
                                        <input matSliderThumb [value]="minScore" (valueChange)="onMinScoreChange($event)" />\r
                                    </mat-slider>\r
                                </div>\r
                            }\r
                        </div>\r
                    }\r
                </div>\r
\r
                <!-- People table -->\r
                <div class="overflow-hidden rounded-2xl border border-stone-200/90 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900/70">\r
                    <div class="flex flex-col gap-3 border-b border-stone-200/80 p-5 dark:border-gray-800 md:flex-row md:items-center md:justify-between md:p-6">\r
                        <div class="flex items-start gap-3">\r
                            <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-stone-200 bg-stone-50 text-stone-700 dark:border-gray-800 dark:bg-gray-950 dark:text-stone-200">\r
                                <mat-icon>group</mat-icon>\r
                            </div>\r
                            <div>\r
                                <h2 class="text-base font-semibold text-stone-950 dark:text-white">\r
                                    {{ t('smartEnrollPeople.tableTitle') }}\r
                                </h2>\r
                                <p class="mt-1 text-sm text-stone-500 dark:text-stone-400">\r
                                    {{ t('smartEnrollPeople.tableSubtitleScoped', {\r
                                        count: peopleData().length,\r
                                        scope: t(tableScopeLabelKey)\r
                                    }) }}\r
                                </p>\r
                            </div>\r
                        </div>\r
\r
                        <div class="flex items-center gap-2 rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-500 dark:bg-gray-800 dark:text-gray-400">\r
                            <span class="h-2 w-2 rounded-full" [class.bg-emerald-400]="!loading()" [class.bg-amber-400]="loading()"></span>\r
                            {{ loading() ? t('smartEnrollPeople.loading') : t('smartEnrollPeople.live') }}\r
                        </div>\r
                    </div>\r
\r
                    <div class="p-5 md:p-6">\r
                        @if (loading()) {\r
                            <div class="flex flex-col items-center justify-center rounded-xl border border-dashed border-stone-200 py-14 text-center dark:border-gray-800">\r
                                <mat-spinner diameter="40"></mat-spinner>\r
                                <p class="mt-4 text-sm text-stone-500 dark:text-stone-400">{{ t('smartEnrollPeople.loading') }}</p>\r
                            </div>\r
                        } @else if (!peopleData().length && !filterText && !selectedImagePreview) {\r
                            <div class="flex flex-col items-center justify-center rounded-xl border border-dashed border-stone-200 px-5 py-14 text-center dark:border-gray-800">\r
                                <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-stone-100 text-stone-500 dark:bg-gray-800 dark:text-stone-300">\r
                                    <mat-icon>person_off</mat-icon>\r
                                </div>\r
                                <h3 class="mt-4 text-base font-semibold text-stone-950 dark:text-white">\r
                                    {{ t('smartEnrollPeople.emptyTitle') }}\r
                                </h3>\r
                                <p class="mt-1 max-w-sm text-sm text-stone-500 dark:text-stone-400">\r
                                    {{ t('smartEnrollPeople.emptySubtitle') }}\r
                                </p>\r
                                <a\r
                                    routerLink="/smart-enroll/projects"\r
                                    mat-stroked-button\r
                                    type="button"\r
                                    class="mt-5 min-h-10 rounded-xl px-5"\r
                                >\r
                                    <mat-icon class="mr-1 !h-4 !w-4 !text-base">folder</mat-icon>\r
                                    {{ t('smartEnrollPeople.viewProjects') }}\r
                                </a>\r
                            </div>\r
                        } @else {\r
                            <app-biometrics-people-table\r
                                [people]="peopleData()"\r
                                [filterText]="filterText"\r
                                [loading]="loading()"\r
                                [disableActions]="disableActions"\r
                                [hideCheckboxes]="true"\r
                                (deletePerson)="deletePerson($event)"\r
                                (editPerson)="editPerson($event)"\r
                            ></app-biometrics-people-table>\r
                        }\r
                    </div>\r
                </div>\r
            </div>\r
        </main>\r
    </div>\r
</ng-container>\r
`, styles: ["/* src/app/modules/smart-enroll/people/people-list.component.scss */\n:host {\n  display: contents;\n}\n.people-container mat-icon {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.people-container mat-button-toggle-group {\n  border-radius: 0.75rem;\n  overflow: hidden;\n}\n/*# sourceMappingURL=people-list.component.css.map */\n"] }]
  }], null, { imageInput: [{
    type: ViewChild,
    args: ["imageInput"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PeopleListComponent, { className: "PeopleListComponent", filePath: "src/app/modules/smart-enroll/people/people-list.component.ts", lineNumber: 60 });
})();
export {
  PeopleListComponent
};
//# sourceMappingURL=chunk-5OIJRPWP.js.map
