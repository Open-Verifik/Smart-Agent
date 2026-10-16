import {
  BIOMETRICS_CONFIRM_DIALOG_PANEL_CLASS,
  BiometricsConfirmDialogComponent,
  BiometricsPeopleTableComponent,
  CollectionScopeBadgeComponent,
  CollectionsService,
  EDIT_PERSON_DIALOG_PANEL_CLASS,
  EditPersonDialogComponent,
  PeopleService,
  classifyCollections,
  getOnboardingCollectionCodes
} from "./chunk-7HUBH5XJ.js";
import {
  SmartEnrollProjectsService
} from "./chunk-3SZTQ5VE.js";
import {
  MatSlider,
  MatSliderModule,
  MatSliderThumb
} from "./chunk-7VQT7ZMZ.js";
import {
  MatSort,
  MatSortHeader,
  MatSortModule
} from "./chunk-YN6DFW3O.js";
import "./chunk-RYVBSY7P.js";
import "./chunk-FJ77QTX4.js";
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
  SMART_ENROLL_PROJECT_TYPE
} from "./chunk-VAHIF73V.js";
import {
  utils,
  writeSync
} from "./chunk-P2TQI6AF.js";
import {
  DateTime
} from "./chunk-KW3PRW6P.js";
import "./chunk-XGUHZE77.js";
import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-IFYEUXEK.js";
import {
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger
} from "./chunk-YJ6YLDQV.js";
import {
  MatSnackBar
} from "./chunk-TXEVGTMX.js";
import "./chunk-FTSXFXXU.js";
import "./chunk-2HNEWPD3.js";
import "./chunk-4J4GSXOK.js";
import "./chunk-RM2644J3.js";
import "./chunk-VURK6DEU.js";
import "./chunk-E7WYNRWC.js";
import "./chunk-HWNQWMK7.js";
import {
  animate,
  state,
  style,
  transition,
  trigger
} from "./chunk-YY5TJM45.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-UUIVQBYS.js";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogContent,
  MatDialogModule,
  MatDialogRef
} from "./chunk-M5KDIZH5.js";
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
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-DVRFI3SJ.js";
import {
  TranslocoDirective,
  TranslocoModule,
  TranslocoService
} from "./chunk-R5W3A6HI.js";
import {
  RouterLink
} from "./chunk-HYFP557I.js";
import "./chunk-KTYFS5OT.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  DatePipe,
  EventEmitter,
  Input,
  Output,
  Subject,
  ViewChild,
  ViewEncapsulation,
  debounceTime,
  forkJoin,
  inject,
  setClassMetadata,
  signal,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
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
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
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
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-PNPEHISK.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-F5M2C4EZ.js";

// src/app/modules/smart-enroll/shared/biometrics-collections-table.component.ts
var _c0 = () => ["expandedDetail"];
var _c1 = () => [];
function BiometricsCollectionsTableComponent_ng_container_0_th_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "th", 26);
  }
}
function BiometricsCollectionsTableComponent_ng_container_0_td_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 27)(1, "mat-icon", 28);
    \u0275\u0275text(2, " expand_more ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const element_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("rotate-180", element_r2 === ctx_r2.expandedElement)("text-stone-700", element_r2 === ctx_r2.expandedElement);
  }
}
function BiometricsCollectionsTableComponent_ng_container_0_th_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollCollections.nameCode"), " ");
  }
}
function BiometricsCollectionsTableComponent_ng_container_0_td_8_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-collection-scope-badge", 34);
  }
  if (rf & 2) {
    const element_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("collection", element_r5);
  }
}
function BiometricsCollectionsTableComponent_ng_container_0_td_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 30)(1, "div", 31)(2, "div", 32)(3, "span", 33);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, BiometricsCollectionsTableComponent_ng_container_0_td_8_Conditional_5_Template, 1, 1, "app-collection-scope-badge", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 35);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const element_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(element_r5.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.showTypeBadges ? 5 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(element_r5.code);
  }
}
function BiometricsCollectionsTableComponent_ng_container_0_th_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollCollections.description"), " ");
  }
}
function BiometricsCollectionsTableComponent_ng_container_0_td_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", element_r6.description || "\u2014", " ");
  }
}
function BiometricsCollectionsTableComponent_ng_container_0_th_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollPeople.lastUpdated"), " ");
  }
}
function BiometricsCollectionsTableComponent_ng_container_0_td_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 36);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, element_r7.updatedAt, "short"), " ");
  }
}
function BiometricsCollectionsTableComponent_ng_container_0_th_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollPeople.actions"), " ");
  }
}
function BiometricsCollectionsTableComponent_ng_container_0_td_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 38)(1, "div", 39)(2, "button", 40);
    \u0275\u0275listener("click", function BiometricsCollectionsTableComponent_ng_container_0_td_17_Template_button_click_2_listener($event) {
      const element_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      ctx_r2.editCollection.emit(element_r9);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(3, "mat-icon", 41);
    \u0275\u0275text(4, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 42);
    \u0275\u0275listener("click", function BiometricsCollectionsTableComponent_ng_container_0_td_17_Template_button_click_5_listener($event) {
      const element_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      ctx_r2.deleteCollection.emit(element_r9);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(6, "mat-icon", 43);
    \u0275\u0275text(7, "delete_forever");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.disableActions);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r2.disableActions);
  }
}
function BiometricsCollectionsTableComponent_ng_container_0_td_19_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 47)(1, "div", 49)(2, "mat-icon", 50);
    \u0275\u0275text(3, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 51);
    \u0275\u0275listener("input", function BiometricsCollectionsTableComponent_ng_container_0_td_19_Conditional_3_Template_input_input_4_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.onPeopleTextFilterChange($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 52);
    \u0275\u0275listener("click", function BiometricsCollectionsTableComponent_ng_container_0_td_19_Conditional_3_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.clearPeopleFilters());
    });
    \u0275\u0275elementStart(6, "mat-icon", 53);
    \u0275\u0275text(7, "filter_list_off");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("placeholder", t_r4("smartEnrollPeople.search"))("value", ctx_r2.peopleFilterText);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r2.peopleFilterText);
  }
}
function BiometricsCollectionsTableComponent_ng_container_0_td_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 44)(1, "div", 45)(2, "div", 46);
    \u0275\u0275template(3, BiometricsCollectionsTableComponent_ng_container_0_td_19_Conditional_3_Template, 8, 3, "div", 47);
    \u0275\u0275elementStart(4, "app-biometrics-people-table", 48);
    \u0275\u0275listener("deletePerson", function BiometricsCollectionsTableComponent_ng_container_0_td_19_Template_app_biometrics_people_table_deletePerson_4_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.deletePerson.emit($event));
    })("editPerson", function BiometricsCollectionsTableComponent_ng_container_0_td_19_Template_app_biometrics_people_table_editPerson_4_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.editPerson.emit($event));
    })("selectionChange", function BiometricsCollectionsTableComponent_ng_container_0_td_19_Template_app_biometrics_people_table_selectionChange_4_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onPeopleSelectionChange($event));
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const element_r12 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("colspan", ctx_r2.displayedColumns.length);
    \u0275\u0275advance();
    \u0275\u0275property("@detailExpand", ctx_r2.expandedElement === element_r12 ? "expanded" : "collapsed");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(element_r12.people && element_r12.people.length > 10 ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("people", element_r12.people || \u0275\u0275pureFunction0(7, _c1))("loading", element_r12.loading)("filterText", ctx_r2.peopleFilterText)("disableActions", ctx_r2.disableActions);
  }
}
function BiometricsCollectionsTableComponent_ng_container_0_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 54);
  }
}
function BiometricsCollectionsTableComponent_ng_container_0_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 55);
    \u0275\u0275listener("click", function BiometricsCollectionsTableComponent_ng_container_0_tr_21_Template_tr_click_0_listener() {
      const element_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleCollection(element_r14));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r14 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("bg-stone-50", ctx_r2.expandedElement === element_r14);
  }
}
function BiometricsCollectionsTableComponent_ng_container_0_tr_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 56);
  }
}
function BiometricsCollectionsTableComponent_ng_container_0_tr_23_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-bar", 58);
  }
}
function BiometricsCollectionsTableComponent_ng_container_0_tr_23_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 59);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r4("smartEnrollPeople.noRecords"));
  }
}
function BiometricsCollectionsTableComponent_ng_container_0_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 57);
    \u0275\u0275template(2, BiometricsCollectionsTableComponent_ng_container_0_tr_23_Conditional_2_Template, 1, 0, "mat-progress-bar", 58)(3, BiometricsCollectionsTableComponent_ng_container_0_tr_23_Conditional_3_Template, 2, 1, "span", 59);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", ctx_r2.displayedColumns.length);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.loading ? 2 : 3);
  }
}
function BiometricsCollectionsTableComponent_ng_container_0_For_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const size_r15 = ctx.$implicit;
    \u0275\u0275property("value", size_r15);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(size_r15);
  }
}
function BiometricsCollectionsTableComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 1)(2, "table", 2);
    \u0275\u0275elementContainerStart(3, 3);
    \u0275\u0275template(4, BiometricsCollectionsTableComponent_ng_container_0_th_4_Template, 1, 0, "th", 4)(5, BiometricsCollectionsTableComponent_ng_container_0_td_5_Template, 3, 4, "td", 5);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(6, 6);
    \u0275\u0275template(7, BiometricsCollectionsTableComponent_ng_container_0_th_7_Template, 2, 1, "th", 7)(8, BiometricsCollectionsTableComponent_ng_container_0_td_8_Template, 8, 3, "td", 8);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(9, 9);
    \u0275\u0275template(10, BiometricsCollectionsTableComponent_ng_container_0_th_10_Template, 2, 1, "th", 7)(11, BiometricsCollectionsTableComponent_ng_container_0_td_11_Template, 2, 1, "td", 10);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(12, 11);
    \u0275\u0275template(13, BiometricsCollectionsTableComponent_ng_container_0_th_13_Template, 2, 1, "th", 7)(14, BiometricsCollectionsTableComponent_ng_container_0_td_14_Template, 3, 4, "td", 10);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(15, 12);
    \u0275\u0275template(16, BiometricsCollectionsTableComponent_ng_container_0_th_16_Template, 2, 1, "th", 13)(17, BiometricsCollectionsTableComponent_ng_container_0_td_17_Template, 8, 2, "td", 14);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(18, 15);
    \u0275\u0275template(19, BiometricsCollectionsTableComponent_ng_container_0_td_19_Template, 5, 8, "td", 16);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(20, BiometricsCollectionsTableComponent_ng_container_0_tr_20_Template, 1, 0, "tr", 17)(21, BiometricsCollectionsTableComponent_ng_container_0_tr_21_Template, 1, 2, "tr", 18)(22, BiometricsCollectionsTableComponent_ng_container_0_tr_22_Template, 1, 0, "tr", 19)(23, BiometricsCollectionsTableComponent_ng_container_0_tr_23_Template, 4, 2, "tr", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 21)(25, "label", 22)(26, "select", 23);
    \u0275\u0275listener("change", function BiometricsCollectionsTableComponent_ng_container_0_Template_select_change_26_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onPageSizeChange(+$event.target.value));
    });
    \u0275\u0275repeaterCreate(27, BiometricsCollectionsTableComponent_ng_container_0_For_28_Template, 2, 2, "option", 24, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(29, "mat-paginator", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("dataSource", ctx_r2.dataSource);
    \u0275\u0275advance(18);
    \u0275\u0275property("matHeaderRowDef", ctx_r2.displayedColumns)("matHeaderRowDefSticky", true);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx_r2.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", \u0275\u0275pureFunction0(10, _c0));
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r2.pageSize)("disabled", ctx_r2.disableActions);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.pageSizeOptions);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.disableActions)("pageSize", ctx_r2.pageSize)("hidePageSize", true);
  }
}
var BiometricsCollectionsTableComponent = class _BiometricsCollectionsTableComponent {
  constructor() {
    this.collections = [];
    this.loading = false;
    this.filterText = "";
    this.disableActions = false;
    this.showTypeBadges = false;
    this.collectionSelectionChange = new EventEmitter();
    this.deleteCollection = new EventEmitter();
    this.deletePerson = new EventEmitter();
    this.editCollection = new EventEmitter();
    this.editPerson = new EventEmitter();
    this._cdr = inject(ChangeDetectorRef);
    this._peopleService = inject(PeopleService);
    this._snackBar = inject(MatSnackBar);
    this._transloco = inject(TranslocoService);
    this.dataSource = new MatTableDataSource([]);
    this.displayedColumns = ["expand", "name", "description", "updatedAt", "actions"];
    this.expandedElement = null;
    this.peopleFilterText = "";
    this.pageSizeOptions = [25, 50, 100];
    this.pageSize = 25;
    this.dataSource.filterPredicate = (collection, filter) => {
      const term = filter.trim().toLowerCase();
      if (!term)
        return true;
      return collection.name?.toLowerCase().includes(term) || collection.code?.toLowerCase().includes(term) || collection.description?.toLowerCase().includes(term);
    };
  }
  ngAfterViewInit() {
    this._syncTableControls();
  }
  ngOnChanges(changes) {
    if (changes["collections"]) {
      this.dataSource.data = this.collections || [];
      this._syncTableControls();
    }
    if (changes["filterText"]) {
      this.dataSource.filter = this.filterText || "";
    }
    this._cdr.markForCheck();
  }
  _syncTableControls() {
    if (this.paginator)
      this.dataSource.paginator = this.paginator;
    if (this.sort)
      this.dataSource.sort = this.sort;
  }
  onPageSizeChange(pageSize) {
    if (!pageSize || pageSize === this.pageSize)
      return;
    this.pageSize = pageSize;
    if (this.paginator) {
      this.paginator.pageIndex = 0;
      this.paginator.pageSize = pageSize;
      this.dataSource.paginator = this.paginator;
    }
    this._cdr.markForCheck();
  }
  clearPeopleFilters() {
    this.peopleFilterText = "";
  }
  onPeopleTextFilterChange(event) {
    this.peopleFilterText = event.target.value?.trim().toLowerCase() || "";
  }
  onPeopleSelectionChange(selectedPeople) {
    this.collectionSelectionChange.emit({ collection: this.expandedElement, selectedPeople });
  }
  toggleCollection(collection) {
    if (this.disableActions)
      return;
    if (this.expandedElement === collection) {
      this.expandedElement = null;
      this.peopleFilterText = "";
      this.collectionSelectionChange.emit({ collection: null, selectedPeople: [] });
      return;
    }
    this.expandedElement = collection;
    collection.expanded = !collection.expanded;
    if (!collection.expanded || collection.people)
      return;
    collection.loading = true;
    this._peopleService.getPeople({ in_collections: [collection.code] }).subscribe({
      next: (response) => {
        collection.people = response.data?.map((person) => __spreadProps(__spreadValues({}, person), {
          date_of_birth: person.date_of_birth ? DateTime.fromISO(person.date_of_birth).toFormat("yyyy-MM-dd") : null
        })) || [];
        collection.loading = false;
        this._cdr.markForCheck();
      },
      error: () => {
        this._snackBar.open(this._transloco.translate("smartEnrollPeople.getError"), this._transloco.translate("close"), { duration: 3e3 });
        collection.loading = false;
        this._cdr.markForCheck();
      }
    });
  }
  static {
    this.\u0275fac = function BiometricsCollectionsTableComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BiometricsCollectionsTableComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BiometricsCollectionsTableComponent, selectors: [["app-biometrics-collections-table"]], viewQuery: function BiometricsCollectionsTableComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(MatPaginator, 5);
        \u0275\u0275viewQuery(MatSort, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.paginator = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sort = _t.first);
      }
    }, inputs: { collections: "collections", loading: "loading", filterText: "filterText", disableActions: "disableActions", showTypeBadges: "showTypeBadges" }, outputs: { collectionSelectionChange: "collectionSelectionChange", deleteCollection: "deleteCollection", deletePerson: "deletePerson", editCollection: "editCollection", editPerson: "editPerson" }, features: [\u0275\u0275NgOnChangesFeature], decls: 1, vars: 0, consts: [[4, "transloco"], [1, "overflow-x-auto", "rounded-xl", "border", "border-stone-200/80", "dark:border-gray-800"], ["mat-table", "", "matSort", "", "multiTemplateDataRows", "", 1, "w-full", "bg-transparent", 3, "dataSource"], ["matColumnDef", "expand"], ["mat-header-cell", "", "class", "max-w-12 !border-b !border-stone-200/80 !bg-stone-50/80 !px-4 !py-3 dark:!border-gray-800 dark:!bg-gray-950/50", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "max-w-12 !px-4", 4, "matCellDef"], ["matColumnDef", "name"], ["mat-header-cell", "", "mat-sort-header", "", "class", "!border-b !border-stone-200/80 !bg-stone-50/80 !px-4 !py-3 text-xs font-semibold uppercase tracking-[0.12em] text-stone-500 dark:!border-gray-800 dark:!bg-gray-950/50 dark:text-stone-400", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "!px-4 !py-4", 4, "matCellDef"], ["matColumnDef", "description"], ["mat-cell", "", "class", "!px-4 !py-4 text-sm text-stone-600 dark:text-stone-300", 4, "matCellDef"], ["matColumnDef", "updatedAt"], ["matColumnDef", "actions"], ["mat-header-cell", "", "class", "!border-b !border-stone-200/80 !bg-stone-50/80 !px-4 !py-3 text-right text-xs font-semibold uppercase tracking-[0.12em] text-stone-500 dark:!border-gray-800 dark:!bg-gray-950/50 dark:text-stone-400", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "!px-4 !py-4 text-right", 4, "matCellDef"], ["matColumnDef", "expandedDetail"], ["mat-cell", "", "class", "!bg-stone-50/70 !p-0 dark:!bg-gray-950/40", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", "class", "h-auto cursor-pointer border-b border-stone-100 transition hover:bg-stone-50/80 dark:border-gray-800 dark:hover:bg-gray-800/40", 3, "bg-stone-50", "click", 4, "matRowDef", "matRowDefColumns"], ["mat-row", "", "class", "detail-row !h-0", 4, "matRowDef", "matRowDefColumns"], [4, "matNoDataRow"], [1, "mt-4", "flex", "flex-wrap", "items-center", "justify-end", "gap-3"], [1, "flex", "items-center", "gap-2", "text-sm", "text-stone-500", "dark:text-stone-400"], [1, "rounded-lg", "border", "border-stone-200", "bg-white", "px-2", "py-1", "text-sm", "text-stone-800", "dark:border-gray-700", "dark:bg-gray-900", "dark:text-stone-200", 3, "change", "value", "disabled"], [3, "value"], [1, "!rounded-xl", "!border", "!border-stone-200/80", "dark:!border-gray-800", 3, "disabled", "pageSize", "hidePageSize"], ["mat-header-cell", "", 1, "max-w-12", "!border-b", "!border-stone-200/80", "!bg-stone-50/80", "!px-4", "!py-3", "dark:!border-gray-800", "dark:!bg-gray-950/50"], ["mat-cell", "", 1, "max-w-12", "!px-4"], [1, "text-stone-400", "transition-transform"], ["mat-header-cell", "", "mat-sort-header", "", 1, "!border-b", "!border-stone-200/80", "!bg-stone-50/80", "!px-4", "!py-3", "text-xs", "font-semibold", "uppercase", "tracking-[0.12em]", "text-stone-500", "dark:!border-gray-800", "dark:!bg-gray-950/50", "dark:text-stone-400"], ["mat-cell", "", 1, "!px-4", "!py-4"], [1, "flex", "flex-col", "gap-1"], [1, "flex", "flex-wrap", "items-center", "gap-2"], [1, "font-semibold", "text-stone-950", "dark:text-white"], [3, "collection"], [1, "font-mono", "text-xs", "text-stone-500", "dark:text-stone-400"], ["mat-cell", "", 1, "!px-4", "!py-4", "text-sm", "text-stone-600", "dark:text-stone-300"], ["mat-header-cell", "", 1, "!border-b", "!border-stone-200/80", "!bg-stone-50/80", "!px-4", "!py-3", "text-right", "text-xs", "font-semibold", "uppercase", "tracking-[0.12em]", "text-stone-500", "dark:!border-gray-800", "dark:!bg-gray-950/50", "dark:text-stone-400"], ["mat-cell", "", 1, "!px-4", "!py-4", "text-right"], [1, "inline-flex", "items-center", "gap-1"], ["mat-icon-button", "", "type", "button", 1, "!rounded-lg", "hover:!bg-stone-100", "dark:hover:!bg-gray-800", 3, "click", "disabled"], [1, "!text-stone-600", "dark:!text-stone-300"], ["mat-icon-button", "", "type", "button", 1, "!rounded-lg", "hover:!bg-red-50", "dark:hover:!bg-red-950/30", 3, "click", "disabled"], [1, "!text-red-600", "dark:!text-red-400"], ["mat-cell", "", 1, "!bg-stone-50/70", "!p-0", "dark:!bg-gray-950/40"], [1, "overflow-hidden", "border-t", "border-stone-200/80", "dark:border-gray-800"], [1, "px-4", "py-4", "md:px-6"], [1, "mb-4", "flex", "flex-wrap", "items-center", "gap-2"], [3, "deletePerson", "editPerson", "selectionChange", "people", "loading", "filterText", "disableActions"], [1, "relative", "min-w-0", "flex-1", "sm:max-w-sm"], [1, "pointer-events-none", "absolute", "left-3", "top-1/2", "!h-4", "!w-4", "-translate-y-1/2", "text-stone-400"], ["type", "text", 1, "h-10", "w-full", "rounded-xl", "border", "border-stone-200", "bg-white", "pl-10", "pr-4", "text-sm", "text-stone-900", "outline-none", "transition", "focus:border-stone-400", "dark:border-gray-700", "dark:bg-gray-900", "dark:text-stone-100", "placeholder:text-stone-400", "dark:placeholder:text-stone-500", "dark:focus:bg-gray-900", 3, "input", "placeholder", "value"], ["type", "button", 1, "inline-flex", "h-10", "w-10", "items-center", "justify-center", "rounded-xl", "border", "border-stone-200", "text-stone-600", "transition", "hover:bg-stone-50", "disabled:opacity-50", "dark:border-gray-700", "dark:text-stone-300", "dark:hover:bg-gray-800", 3, "click", "disabled"], [1, "!h-4", "!w-4", "!text-base"], ["mat-header-row", ""], ["mat-row", "", 1, "h-auto", "cursor-pointer", "border-b", "border-stone-100", "transition", "hover:bg-stone-50/80", "dark:border-gray-800", "dark:hover:bg-gray-800/40", 3, "click"], ["mat-row", "", 1, "detail-row", "!h-0"], [1, "py-12", "text-center"], ["mode", "indeterminate"], [1, "text-sm", "text-stone-500", "dark:text-stone-400"]], template: function BiometricsCollectionsTableComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, BiometricsCollectionsTableComponent_ng_container_0_Template, 30, 11, "ng-container", 0);
      }
    }, dependencies: [
      CommonModule,
      DatePipe,
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
      MatSortModule,
      MatSort,
      MatSortHeader,
      MatPaginatorModule,
      MatPaginator,
      MatButtonModule,
      MatIconButton,
      MatIconModule,
      MatIcon,
      MatProgressBarModule,
      MatProgressBar,
      TranslocoModule,
      TranslocoDirective,
      BiometricsPeopleTableComponent,
      CollectionScopeBadgeComponent
    ], encapsulation: 2, data: { animation: [
      trigger("detailExpand", [
        state("collapsed", style({ height: "0px", minHeight: "0px" })),
        state("expanded", style({ height: "*" })),
        transition("expanded <=> collapsed", animate("225ms cubic-bezier(0.4, 0.0, 0.2, 1)"))
      ])
    ] }, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BiometricsCollectionsTableComponent, [{
    type: Component,
    args: [{ selector: "app-biometrics-collections-table", standalone: true, imports: [
      CommonModule,
      MatTableModule,
      MatSortModule,
      MatPaginatorModule,
      MatButtonModule,
      MatIconModule,
      MatProgressBarModule,
      TranslocoModule,
      BiometricsPeopleTableComponent,
      CollectionScopeBadgeComponent
    ], changeDetection: ChangeDetectionStrategy.OnPush, animations: [
      trigger("detailExpand", [
        state("collapsed", style({ height: "0px", minHeight: "0px" })),
        state("expanded", style({ height: "*" })),
        transition("expanded <=> collapsed", animate("225ms cubic-bezier(0.4, 0.0, 0.2, 1)"))
      ])
    ], template: `<ng-container *transloco="let t">\r
    <div class="overflow-x-auto rounded-xl border border-stone-200/80 dark:border-gray-800">\r
        <table mat-table [dataSource]="dataSource" matSort class="w-full bg-transparent" multiTemplateDataRows>\r
            <ng-container matColumnDef="expand">\r
                <th mat-header-cell *matHeaderCellDef class="max-w-12 !border-b !border-stone-200/80 !bg-stone-50/80 !px-4 !py-3 dark:!border-gray-800 dark:!bg-gray-950/50"></th>\r
                <td mat-cell *matCellDef="let element" class="max-w-12 !px-4">\r
                    <mat-icon\r
                        class="text-stone-400 transition-transform"\r
                        [class.rotate-180]="element === expandedElement"\r
                        [class.text-stone-700]="element === expandedElement"\r
                    >\r
                        expand_more\r
                    </mat-icon>\r
                </td>\r
            </ng-container>\r
\r
            <ng-container matColumnDef="name">\r
                <th mat-header-cell *matHeaderCellDef mat-sort-header class="!border-b !border-stone-200/80 !bg-stone-50/80 !px-4 !py-3 text-xs font-semibold uppercase tracking-[0.12em] text-stone-500 dark:!border-gray-800 dark:!bg-gray-950/50 dark:text-stone-400">\r
                    {{ t('smartEnrollCollections.nameCode') }}\r
                </th>\r
                <td mat-cell *matCellDef="let element" class="!px-4 !py-4">\r
                    <div class="flex flex-col gap-1">\r
                        <div class="flex flex-wrap items-center gap-2">\r
                            <span class="font-semibold text-stone-950 dark:text-white">{{ element.name }}</span>\r
                            @if (showTypeBadges) {\r
                                <app-collection-scope-badge [collection]="element"></app-collection-scope-badge>\r
                            }\r
                        </div>\r
                        <span class="font-mono text-xs text-stone-500 dark:text-stone-400">{{ element.code }}</span>\r
                    </div>\r
                </td>\r
            </ng-container>\r
\r
            <ng-container matColumnDef="description">\r
                <th mat-header-cell *matHeaderCellDef mat-sort-header class="!border-b !border-stone-200/80 !bg-stone-50/80 !px-4 !py-3 text-xs font-semibold uppercase tracking-[0.12em] text-stone-500 dark:!border-gray-800 dark:!bg-gray-950/50 dark:text-stone-400">\r
                    {{ t('smartEnrollCollections.description') }}\r
                </th>\r
                <td mat-cell *matCellDef="let element" class="!px-4 !py-4 text-sm text-stone-600 dark:text-stone-300">\r
                    {{ element.description || '\u2014' }}\r
                </td>\r
            </ng-container>\r
\r
            <ng-container matColumnDef="updatedAt">\r
                <th mat-header-cell *matHeaderCellDef mat-sort-header class="!border-b !border-stone-200/80 !bg-stone-50/80 !px-4 !py-3 text-xs font-semibold uppercase tracking-[0.12em] text-stone-500 dark:!border-gray-800 dark:!bg-gray-950/50 dark:text-stone-400">\r
                    {{ t('smartEnrollPeople.lastUpdated') }}\r
                </th>\r
                <td mat-cell *matCellDef="let element" class="!px-4 !py-4 text-sm text-stone-600 dark:text-stone-300">\r
                    {{ element.updatedAt | date: 'short' }}\r
                </td>\r
            </ng-container>\r
\r
            <ng-container matColumnDef="actions">\r
                <th mat-header-cell *matHeaderCellDef class="!border-b !border-stone-200/80 !bg-stone-50/80 !px-4 !py-3 text-right text-xs font-semibold uppercase tracking-[0.12em] text-stone-500 dark:!border-gray-800 dark:!bg-gray-950/50 dark:text-stone-400">\r
                    {{ t('smartEnrollPeople.actions') }}\r
                </th>\r
                <td mat-cell *matCellDef="let element" class="!px-4 !py-4 text-right">\r
                    <div class="inline-flex items-center gap-1">\r
                        <button\r
                            mat-icon-button\r
                            type="button"\r
                            class="!rounded-lg hover:!bg-stone-100 dark:hover:!bg-gray-800"\r
                            (click)="editCollection.emit(element); $event.stopPropagation()"\r
                            [disabled]="disableActions"\r
                        >\r
                            <mat-icon class="!text-stone-600 dark:!text-stone-300">edit</mat-icon>\r
                        </button>\r
                        <button\r
                            mat-icon-button\r
                            type="button"\r
                            class="!rounded-lg hover:!bg-red-50 dark:hover:!bg-red-950/30"\r
                            (click)="deleteCollection.emit(element); $event.stopPropagation()"\r
                            [disabled]="disableActions"\r
                        >\r
                            <mat-icon class="!text-red-600 dark:!text-red-400">delete_forever</mat-icon>\r
                        </button>\r
                    </div>\r
                </td>\r
            </ng-container>\r
\r
            <ng-container matColumnDef="expandedDetail">\r
                <td mat-cell *matCellDef="let element" [attr.colspan]="displayedColumns.length" class="!bg-stone-50/70 !p-0 dark:!bg-gray-950/40">\r
                    <div class="overflow-hidden border-t border-stone-200/80 dark:border-gray-800" [@detailExpand]="expandedElement === element ? 'expanded' : 'collapsed'">\r
                        <div class="px-4 py-4 md:px-6">\r
                            @if (element.people && element.people.length > 10) {\r
                                <div class="mb-4 flex flex-wrap items-center gap-2">\r
                                    <div class="relative min-w-0 flex-1 sm:max-w-sm">\r
                                        <mat-icon class="pointer-events-none absolute left-3 top-1/2 !h-4 !w-4 -translate-y-1/2 text-stone-400">search</mat-icon>\r
                                        <input\r
                                            type="text"\r
                                            class="h-10 w-full rounded-xl border border-stone-200 bg-white pl-10 pr-4 text-sm text-stone-900 outline-none transition focus:border-stone-400 dark:border-gray-700 dark:bg-gray-900 dark:text-stone-100 placeholder:text-stone-400 dark:placeholder:text-stone-500 dark:focus:bg-gray-900"\r
                                            [placeholder]="t('smartEnrollPeople.search')"\r
                                            [value]="peopleFilterText"\r
                                            (input)="onPeopleTextFilterChange($event)"\r
                                        />\r
                                    </div>\r
                                    <button\r
                                        type="button"\r
                                        class="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-stone-200 text-stone-600 transition hover:bg-stone-50 disabled:opacity-50 dark:border-gray-700 dark:text-stone-300 dark:hover:bg-gray-800"\r
                                        (click)="clearPeopleFilters()"\r
                                        [disabled]="!peopleFilterText"\r
                                    >\r
                                        <mat-icon class="!h-4 !w-4 !text-base">filter_list_off</mat-icon>\r
                                    </button>\r
                                </div>\r
                            }\r
                            <app-biometrics-people-table\r
                                [people]="element.people || []"\r
                                [loading]="element.loading"\r
                                [filterText]="peopleFilterText"\r
                                [disableActions]="disableActions"\r
                                (deletePerson)="deletePerson.emit($event)"\r
                                (editPerson)="editPerson.emit($event)"\r
                                (selectionChange)="onPeopleSelectionChange($event)"\r
                            ></app-biometrics-people-table>\r
                        </div>\r
                    </div>\r
                </td>\r
            </ng-container>\r
\r
            <tr mat-header-row *matHeaderRowDef="displayedColumns; sticky: true"></tr>\r
            <tr\r
                mat-row\r
                *matRowDef="let element; columns: displayedColumns"\r
                class="h-auto cursor-pointer border-b border-stone-100 transition hover:bg-stone-50/80 dark:border-gray-800 dark:hover:bg-gray-800/40"\r
                [class.bg-stone-50]="expandedElement === element"\r
                (click)="toggleCollection(element)"\r
            ></tr>\r
            <tr mat-row *matRowDef="let row; columns: ['expandedDetail']" class="detail-row !h-0"></tr>\r
\r
            <tr *matNoDataRow>\r
                <td [attr.colspan]="displayedColumns.length" class="py-12 text-center">\r
                    @if (loading) {\r
                        <mat-progress-bar mode="indeterminate"></mat-progress-bar>\r
                    } @else {\r
                        <span class="text-sm text-stone-500 dark:text-stone-400">{{ t('smartEnrollPeople.noRecords') }}</span>\r
                    }\r
                </td>\r
            </tr>\r
        </table>\r
    </div>\r
\r
    <div class="mt-4 flex flex-wrap items-center justify-end gap-3">\r
        <label class="flex items-center gap-2 text-sm text-stone-500 dark:text-stone-400">\r
            <select\r
                class="rounded-lg border border-stone-200 bg-white px-2 py-1 text-sm text-stone-800 dark:border-gray-700 dark:bg-gray-900 dark:text-stone-200"\r
                [value]="pageSize"\r
                [disabled]="disableActions"\r
                (change)="onPageSizeChange(+$any($event.target).value)"\r
            >\r
                @for (size of pageSizeOptions; track size) {\r
                    <option [value]="size">{{ size }}</option>\r
                }\r
            </select>\r
        </label>\r
        <mat-paginator\r
            class="!rounded-xl !border !border-stone-200/80 dark:!border-gray-800"\r
            [disabled]="disableActions"\r
            [pageSize]="pageSize"\r
            [hidePageSize]="true"\r
        ></mat-paginator>\r
    </div>\r
</ng-container>\r
` }]
  }], () => [], { collections: [{
    type: Input
  }], loading: [{
    type: Input
  }], filterText: [{
    type: Input
  }], disableActions: [{
    type: Input
  }], showTypeBadges: [{
    type: Input
  }], collectionSelectionChange: [{
    type: Output
  }], deleteCollection: [{
    type: Output
  }], deletePerson: [{
    type: Output
  }], editCollection: [{
    type: Output
  }], editPerson: [{
    type: Output
  }], paginator: [{
    type: ViewChild,
    args: [MatPaginator]
  }], sort: [{
    type: ViewChild,
    args: [MatSort]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BiometricsCollectionsTableComponent, { className: "BiometricsCollectionsTableComponent", filePath: "src/app/modules/smart-enroll/shared/biometrics-collections-table.component.ts", lineNumber: 56 });
})();

// src/app/modules/smart-enroll/shared/collection-dialog.component.ts
var _forTrack0 = ($index, $item) => $item._id;
function CollectionDialogComponent_div_0_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "mat-spinner", 11);
    \u0275\u0275elementStart(2, "p", 12);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r3("smartEnrollCollections.loading"));
  }
}
function CollectionDialogComponent_div_0_Conditional_15_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r3("smartEnrollCollections.nameRequired"));
  }
}
function CollectionDialogComponent_div_0_Conditional_15_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "label", 25);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r3("smartEnrollCollections.code"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.data.collection == null ? null : ctx_r1.data.collection.code);
  }
}
function CollectionDialogComponent_div_0_Conditional_15_Conditional_14_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const project_r5 = ctx.$implicit;
    \u0275\u0275property("value", project_r5._id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(project_r5.name);
  }
}
function CollectionDialogComponent_div_0_Conditional_15_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "label", 27);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "span", 28);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "select", 29)(6, "option", 30);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(8, CollectionDialogComponent_div_0_Conditional_15_Conditional_14_For_9_Template, 2, 2, "option", 31, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r3("smartEnrollCollections.project"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("(", t_r3("smartEnrollCollections.optional"), ")");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r3("smartEnrollCollections.none"));
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.allProjects);
  }
}
function CollectionDialogComponent_div_0_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-dialog-content", 13)(1, "form", 14)(2, "div", 15)(3, "label", 16);
    \u0275\u0275text(4);
    \u0275\u0275elementStart(5, "span", 17);
    \u0275\u0275text(6, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(7, "input", 18);
    \u0275\u0275template(8, CollectionDialogComponent_div_0_Conditional_15_Conditional_8_Template, 2, 1, "p", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 15)(10, "label", 20);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "textarea", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, CollectionDialogComponent_div_0_Conditional_15_Conditional_13_Template, 4, 2, "div", 15)(14, CollectionDialogComponent_div_0_Conditional_15_Conditional_14_Template, 10, 3, "div", 15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 22)(16, "button", 23);
    \u0275\u0275listener("click", function CollectionDialogComponent_div_0_Conditional_15_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onCancel());
    });
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 24);
    \u0275\u0275listener("click", function CollectionDialogComponent_div_0_Conditional_15_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onSave());
    });
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_6_0;
    const t_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.createForm);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r3("smartEnrollCollections.name"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", t_r3("smartEnrollCollections.namePlaceholder"));
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_6_0 = ctx_r1.createForm.get("name")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx_r1.createForm.get("name")) == null ? null : tmp_6_0.touched) ? 8 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r3("smartEnrollCollections.description"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", t_r3("smartEnrollCollections.descriptionPlaceholder"));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isEditMode ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.allProjects.length > 0 ? 14 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r3("cancel"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.disableSave);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.saveButtonText, " ");
  }
}
function CollectionDialogComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "header", 2)(2, "div", 3)(3, "div", 4)(4, "mat-icon");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 5)(7, "h2", 6);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 7);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "button", 8);
    \u0275\u0275listener("click", function CollectionDialogComponent_div_0_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCancel());
    });
    \u0275\u0275elementStart(12, "mat-icon", 9);
    \u0275\u0275text(13, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(14, CollectionDialogComponent_div_0_Conditional_14_Template, 4, 1, "div", 10)(15, CollectionDialogComponent_div_0_Conditional_15_Template, 20, 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.isEditMode ? "edit" : "create_new_folder");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.dialogTitle, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.isEditMode ? t_r3("smartEnrollCollections.dialogEditSubtitle") : t_r3("smartEnrollCollections.dialogCreateSubtitle"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.loading ? 14 : 15);
  }
}
var COLLECTION_DIALOG_PANEL_CLASS = "collection-dialog-panel";
var CollectionDialogComponent = class _CollectionDialogComponent {
  constructor() {
    this.data = inject(MAT_DIALOG_DATA);
    this.dialogRef = inject(MatDialogRef);
    this._fb = inject(FormBuilder);
    this._projectsService = inject(SmartEnrollProjectsService);
    this._snackBar = inject(MatSnackBar);
    this._transloco = inject(TranslocoService);
    this._cdr = inject(ChangeDetectorRef);
    this.allProjects = [];
    this.dialogTitle = "";
    this.isEditMode = false;
    this.loading = false;
    this.saveButtonText = "";
  }
  ngOnInit() {
    this.isEditMode = this.data?.mode === "edit" || !!this.data?.collection;
    this.dialogTitle = this.isEditMode ? this._transloco.translate("smartEnrollCollections.editCollection") : this._transloco.translate("smartEnrollCollections.createCollection");
    this.saveButtonText = this.dialogTitle;
    this._buildForm();
    this._loadProjects();
  }
  get disableSave() {
    return this.createForm.invalid || this.loading;
  }
  onCancel() {
    this.dialogRef.close();
  }
  onSave() {
    if (!this.createForm.valid) {
      this.createForm.markAllAsTouched();
      this._cdr.markForCheck();
      return;
    }
    const formData = this.createForm.value;
    const collectionData = {
      name: formData.name,
      description: formData.description || "",
      project: formData.project
    };
    if (this.isEditMode && this.data?.collection?._id) {
      collectionData._id = this.data.collection._id;
    }
    this.dialogRef.close({
      action: this.isEditMode ? "edit" : "create",
      collection: collectionData
    });
  }
  _buildForm() {
    const collection = this.data?.collection;
    this.createForm = this._fb.group({
      name: [collection?.name || "", [Validators.required]],
      description: [collection?.description || ""],
      project: [collection?.project || ""]
    });
  }
  _loadProjects() {
    this.loading = true;
    this._projectsService.listProjects().subscribe({
      next: (projects) => {
        this.allProjects = projects || [];
        this.loading = false;
        this._cdr.markForCheck();
      },
      error: () => this._onLoadError()
    });
  }
  _onLoadError() {
    this._snackBar.open(this._transloco.translate("smartEnrollCollections.getError"), this._transloco.translate("close"), { duration: 3e3 });
    this.loading = false;
    this._cdr.markForCheck();
  }
  static {
    this.\u0275fac = function CollectionDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CollectionDialogComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CollectionDialogComponent, selectors: [["app-collection-dialog"]], decls: 1, vars: 0, consts: [["class", "flex w-full flex-col overflow-hidden rounded-2xl border border-stone-200/90 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900/70", 4, "transloco"], [1, "flex", "w-full", "flex-col", "overflow-hidden", "rounded-2xl", "border", "border-stone-200/90", "bg-white", "shadow-sm", "dark:border-gray-800", "dark:bg-gray-900/70"], [1, "flex", "items-start", "justify-between", "gap-4", "border-b", "border-stone-200/90", "px-5", "py-5", "dark:border-gray-800", "md:px-6"], [1, "flex", "min-w-0", "items-start", "gap-3"], [1, "flex", "h-10", "w-10", "shrink-0", "items-center", "justify-center", "rounded-xl", "border", "border-stone-200", "bg-stone-50", "text-stone-700", "dark:border-gray-800", "dark:bg-gray-950", "dark:text-stone-200"], [1, "min-w-0"], [1, "text-xl", "font-semibold", "tracking-tight", "text-stone-950", "dark:text-white"], [1, "mt-1", "text-sm", "leading-6", "text-stone-500", "dark:text-stone-400"], ["type", "button", 1, "inline-flex", "h-9", "w-9", "shrink-0", "items-center", "justify-center", "rounded-xl", "border", "border-stone-200", "text-stone-500", "transition", "hover:bg-stone-50", "hover:text-stone-800", "dark:border-gray-700", "dark:text-stone-400", "dark:hover:bg-gray-800", "dark:hover:text-stone-200", 3, "click"], [1, "!h-5", "!w-5", "!text-xl"], [1, "flex", "flex-col", "items-center", "justify-center", "px-6", "py-16"], ["diameter", "36"], [1, "mt-4", "text-sm", "text-stone-500", "dark:text-stone-400"], [1, "!flex", "!flex-col", "!gap-6", "!overflow-y-auto", "px-5", "py-6", "dark:text-stone-100", "md:p-6"], [1, "flex", "flex-col", "gap-4", 3, "formGroup"], [1, "flex", "flex-col", "gap-2"], ["for", "collection-name", 1, "text-sm", "font-semibold", "text-stone-950", "dark:text-white"], [1, "text-red-500"], ["id", "collection-name", "type", "text", "formControlName", "name", 1, "h-11", "w-full", "rounded-xl", "border", "border-stone-200", "bg-stone-50/80", "px-4", "text-sm", "text-stone-900", "outline-none", "transition", "focus:border-stone-400", "focus:bg-white", "dark:border-gray-700", "dark:bg-gray-950/50", "dark:text-stone-100", "placeholder:text-stone-400", "dark:placeholder:text-stone-500", "dark:focus:border-gray-500", "dark:focus:bg-gray-950/50", 3, "placeholder"], [1, "text-xs", "text-red-600", "dark:text-red-400"], ["for", "collection-description", 1, "text-sm", "font-semibold", "text-stone-950", "dark:text-white"], ["id", "collection-description", "rows", "3", "formControlName", "description", 1, "w-full", "resize-y", "rounded-xl", "border", "border-stone-200", "bg-stone-50/80", "px-4", "py-3", "text-sm", "text-stone-900", "outline-none", "transition", "focus:border-stone-400", "focus:bg-white", "dark:border-gray-700", "dark:bg-gray-950/50", "dark:text-stone-100", "placeholder:text-stone-400", "dark:placeholder:text-stone-500", "dark:focus:border-gray-500", "dark:focus:bg-gray-950/50", 3, "placeholder"], [1, "flex", "flex-col-reverse", "gap-2", "border-t", "border-stone-200/90", "px-5", "py-4", "dark:border-gray-800", "sm:flex-row", "sm:justify-end", "sm:gap-3", "md:px-6"], ["mat-stroked-button", "", "type", "button", 1, "!min-h-11", "w-full", "!rounded-xl", "!border-stone-200", "!font-medium", "sm:w-auto", "dark:!border-gray-700", 3, "click"], ["mat-flat-button", "", "color", "primary", "type", "button", 1, "!min-h-11", "w-full", "!rounded-xl", "px-5", "sm:w-auto", 3, "click", "disabled"], ["for", "collection-code", 1, "text-sm", "font-semibold", "text-stone-950", "dark:text-white"], ["id", "collection-code", "type", "text", "readonly", "", "disabled", "", 1, "h-11", "w-full", "cursor-not-allowed", "rounded-xl", "border", "border-stone-200", "bg-stone-100", "px-4", "font-mono", "text-sm", "text-stone-500", "dark:border-gray-700", "dark:bg-gray-950", "dark:text-stone-400", 3, "value"], ["for", "collection-project", 1, "text-sm", "font-semibold", "text-stone-950", "dark:text-white"], [1, "font-normal", "text-stone-500", "dark:text-stone-400"], ["id", "collection-project", "formControlName", "project", 1, "h-11", "w-full", "rounded-xl", "border", "border-stone-200", "bg-stone-50/80", "px-4", "text-sm", "text-stone-900", "outline-none", "transition", "focus:border-stone-400", "focus:bg-white", "dark:border-gray-700", "dark:bg-gray-950/50", "dark:text-stone-100", "placeholder:text-stone-400", "dark:placeholder:text-stone-500", "dark:focus:border-gray-500", "dark:focus:bg-gray-950/50"], ["value", ""], [3, "value"]], template: function CollectionDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, CollectionDialogComponent_div_0_Template, 16, 4, "div", 0);
      }
    }, dependencies: [
      CommonModule,
      ReactiveFormsModule,
      \u0275NgNoValidate,
      NgSelectOption,
      \u0275NgSelectMultipleOption,
      DefaultValueAccessor,
      SelectControlValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      FormGroupDirective,
      FormControlName,
      MatDialogModule,
      MatDialogContent,
      MatButtonModule,
      MatButton,
      MatIconModule,
      MatIcon,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      TranslocoModule,
      TranslocoDirective
    ], styles: ["/* src/app/modules/smart-enroll/shared/collection-dialog.component.scss */\n.collection-dialog-panel.cdk-overlay-pane {\n  max-width: min(560px, 94vw);\n}\n.collection-dialog-panel .mat-mdc-dialog-container {\n  padding: 0 !important;\n  overflow: hidden;\n  border-radius: 1rem;\n}\n.collection-dialog-panel .mat-mdc-dialog-surface {\n  border-radius: 1rem !important;\n  overflow: hidden;\n  background: transparent !important;\n  box-shadow: 0 4px 6px -1px rgba(15, 23, 42, 0.08), 0 2px 4px -2px rgba(15, 23, 42, 0.08);\n}\n/*# sourceMappingURL=collection-dialog.component.css.map */\n"], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CollectionDialogComponent, [{
    type: Component,
    args: [{ selector: "app-collection-dialog", standalone: true, imports: [
      CommonModule,
      ReactiveFormsModule,
      MatDialogModule,
      MatButtonModule,
      MatIconModule,
      MatProgressSpinnerModule,
      TranslocoModule
    ], encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, template: `<div\r
    class="flex w-full flex-col overflow-hidden rounded-2xl border border-stone-200/90 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900/70"\r
    *transloco="let t"\r
>\r
    <header class="flex items-start justify-between gap-4 border-b border-stone-200/90 px-5 py-5 dark:border-gray-800 md:px-6">\r
        <div class="flex min-w-0 items-start gap-3">\r
            <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-stone-200 bg-stone-50 text-stone-700 dark:border-gray-800 dark:bg-gray-950 dark:text-stone-200">\r
                <mat-icon>{{ isEditMode ? 'edit' : 'create_new_folder' }}</mat-icon>\r
            </div>\r
            <div class="min-w-0">\r
                <h2 class="text-xl font-semibold tracking-tight text-stone-950 dark:text-white">\r
                    {{ dialogTitle }}\r
                </h2>\r
                <p class="mt-1 text-sm leading-6 text-stone-500 dark:text-stone-400">\r
                    {{ isEditMode ? t('smartEnrollCollections.dialogEditSubtitle') : t('smartEnrollCollections.dialogCreateSubtitle') }}\r
                </p>\r
            </div>\r
        </div>\r
        <button\r
            type="button"\r
            class="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-stone-200 text-stone-500 transition hover:bg-stone-50 hover:text-stone-800 dark:border-gray-700 dark:text-stone-400 dark:hover:bg-gray-800 dark:hover:text-stone-200"\r
            (click)="onCancel()"\r
        >\r
            <mat-icon class="!h-5 !w-5 !text-xl">close</mat-icon>\r
        </button>\r
    </header>\r
\r
    @if (loading) {\r
        <div class="flex flex-col items-center justify-center px-6 py-16">\r
            <mat-spinner diameter="36"></mat-spinner>\r
            <p class="mt-4 text-sm text-stone-500 dark:text-stone-400">{{ t('smartEnrollCollections.loading') }}</p>\r
        </div>\r
    } @else {\r
        <mat-dialog-content class="!flex !flex-col !gap-6 !overflow-y-auto px-5 py-6 dark:text-stone-100 md:p-6">\r
            <form [formGroup]="createForm" class="flex flex-col gap-4">\r
                <div class="flex flex-col gap-2">\r
                    <label class="text-sm font-semibold text-stone-950 dark:text-white" for="collection-name">\r
                        {{ t('smartEnrollCollections.name') }}\r
                        <span class="text-red-500">*</span>\r
                    </label>\r
                    <input\r
                        id="collection-name"\r
                        type="text"\r
                        class="h-11 w-full rounded-xl border border-stone-200 bg-stone-50/80 px-4 text-sm text-stone-900 outline-none transition focus:border-stone-400 focus:bg-white dark:border-gray-700 dark:bg-gray-950/50 dark:text-stone-100 placeholder:text-stone-400 dark:placeholder:text-stone-500 dark:focus:border-gray-500 dark:focus:bg-gray-950/50"\r
                        formControlName="name"\r
                        [placeholder]="t('smartEnrollCollections.namePlaceholder')"\r
                    />\r
                    @if (createForm.get('name')?.invalid && createForm.get('name')?.touched) {\r
                        <p class="text-xs text-red-600 dark:text-red-400">{{ t('smartEnrollCollections.nameRequired') }}</p>\r
                    }\r
                </div>\r
\r
                <div class="flex flex-col gap-2">\r
                    <label class="text-sm font-semibold text-stone-950 dark:text-white" for="collection-description">\r
                        {{ t('smartEnrollCollections.description') }}\r
                    </label>\r
                    <textarea\r
                        id="collection-description"\r
                        rows="3"\r
                        class="w-full resize-y rounded-xl border border-stone-200 bg-stone-50/80 px-4 py-3 text-sm text-stone-900 outline-none transition focus:border-stone-400 focus:bg-white dark:border-gray-700 dark:bg-gray-950/50 dark:text-stone-100 placeholder:text-stone-400 dark:placeholder:text-stone-500 dark:focus:border-gray-500 dark:focus:bg-gray-950/50"\r
                        formControlName="description"\r
                        [placeholder]="t('smartEnrollCollections.descriptionPlaceholder')"\r
                    ></textarea>\r
                </div>\r
\r
                @if (isEditMode) {\r
                    <div class="flex flex-col gap-2">\r
                        <label class="text-sm font-semibold text-stone-950 dark:text-white" for="collection-code">\r
                            {{ t('smartEnrollCollections.code') }}\r
                        </label>\r
                        <input\r
                            id="collection-code"\r
                            type="text"\r
                            readonly\r
                            disabled\r
                            class="h-11 w-full cursor-not-allowed rounded-xl border border-stone-200 bg-stone-100 px-4 font-mono text-sm text-stone-500 dark:border-gray-700 dark:bg-gray-950 dark:text-stone-400"\r
                            [value]="data.collection?.code"\r
                        />\r
                    </div>\r
                }\r
\r
                @if (allProjects.length > 0) {\r
                    <div class="flex flex-col gap-2">\r
                        <label class="text-sm font-semibold text-stone-950 dark:text-white" for="collection-project">\r
                            {{ t('smartEnrollCollections.project') }}\r
                            <span class="font-normal text-stone-500 dark:text-stone-400">({{ t('smartEnrollCollections.optional') }})</span>\r
                        </label>\r
                        <select\r
                            id="collection-project"\r
                            class="h-11 w-full rounded-xl border border-stone-200 bg-stone-50/80 px-4 text-sm text-stone-900 outline-none transition focus:border-stone-400 focus:bg-white dark:border-gray-700 dark:bg-gray-950/50 dark:text-stone-100 placeholder:text-stone-400 dark:placeholder:text-stone-500 dark:focus:border-gray-500 dark:focus:bg-gray-950/50"\r
                            formControlName="project"\r
                        >\r
                            <option value="">{{ t('smartEnrollCollections.none') }}</option>\r
                            @for (project of allProjects; track project._id) {\r
                                <option [value]="project._id">{{ project.name }}</option>\r
                            }\r
                        </select>\r
                    </div>\r
                }\r
            </form>\r
        </mat-dialog-content>\r
\r
        <div class="flex flex-col-reverse gap-2 border-t border-stone-200/90 px-5 py-4 dark:border-gray-800 sm:flex-row sm:justify-end sm:gap-3 md:px-6">\r
            <button\r
                mat-stroked-button\r
                type="button"\r
                class="!min-h-11 w-full !rounded-xl !border-stone-200 !font-medium sm:w-auto dark:!border-gray-700"\r
                (click)="onCancel()"\r
            >\r
                {{ t('cancel') }}\r
            </button>\r
            <button\r
                mat-flat-button\r
                color="primary"\r
                type="button"\r
                class="!min-h-11 w-full !rounded-xl px-5 sm:w-auto"\r
                [disabled]="disableSave"\r
                (click)="onSave()"\r
            >\r
                {{ saveButtonText }}\r
            </button>\r
        </div>\r
    }\r
</div>\r
`, styles: ["/* src/app/modules/smart-enroll/shared/collection-dialog.component.scss */\n.collection-dialog-panel.cdk-overlay-pane {\n  max-width: min(560px, 94vw);\n}\n.collection-dialog-panel .mat-mdc-dialog-container {\n  padding: 0 !important;\n  overflow: hidden;\n  border-radius: 1rem;\n}\n.collection-dialog-panel .mat-mdc-dialog-surface {\n  border-radius: 1rem !important;\n  overflow: hidden;\n  background: transparent !important;\n  box-shadow: 0 4px 6px -1px rgba(15, 23, 42, 0.08), 0 2px 4px -2px rgba(15, 23, 42, 0.08);\n}\n/*# sourceMappingURL=collection-dialog.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CollectionDialogComponent, { className: "CollectionDialogComponent", filePath: "src/app/modules/smart-enroll/shared/collection-dialog.component.ts", lineNumber: 45 });
})();

// src/app/modules/smart-enroll/collections/collections-list.component.ts
var _c02 = ["imageInput"];
var _c12 = (a0, a1) => ({ count: a0, scope: a1 });
var _forTrack02 = ($index, $item) => $item._id;
function CollectionsListComponent_ng_container_0_For_46_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function CollectionsListComponent_ng_container_0_For_46_Conditional_0_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const collection_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.movePeopleToCollection(collection_r4));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "folder");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const collection_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(collection_r4.name);
  }
}
function CollectionsListComponent_ng_container_0_For_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CollectionsListComponent_ng_container_0_For_46_Conditional_0_Template, 5, 1, "button", 50);
  }
  if (rf & 2) {
    const collection_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(collection_r4._id !== (ctx_r1.expandedCollection == null ? null : ctx_r1.expandedCollection._id) ? 0 : -1);
  }
}
function CollectionsListComponent_ng_container_0_Conditional_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 51)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 52);
    \u0275\u0275listener("click", function CollectionsListComponent_ng_container_0_Conditional_58_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removeScopeFilter());
    });
    \u0275\u0275elementStart(4, "mat-icon", 53);
    \u0275\u0275text(5, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "span", 37);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", t_r6("smartEnrollCollections.scopeFilterLabel"), ": ", t_r6("smartEnrollCollections.scopeFilterOnboarding"), "");
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", t_r6("smartEnrollCollections.scopeFilterRemove"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r6("smartEnrollCollections.scopeFilterHint"));
  }
}
function CollectionsListComponent_ng_container_0_Conditional_59_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 54);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 55);
    \u0275\u0275listener("click", function CollectionsListComponent_ng_container_0_Conditional_59_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.restoreScopeFilter());
    });
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r6("smartEnrollCollections.scopeFilterAll"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r6("smartEnrollCollections.scopeFilterRestore"), " ");
  }
}
function CollectionsListComponent_ng_container_0_Conditional_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", t_r6("smartEnrollCollections.imageSearchDisabledHint"), " ");
  }
}
function CollectionsListComponent_ng_container_0_Conditional_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", t_r6("smartEnrollCollections.imageSearchHint"), " ");
  }
}
function CollectionsListComponent_ng_container_0_Conditional_74_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 62);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("src", ctx_r1.selectedImagePreview, \u0275\u0275sanitizeUrl);
  }
}
function CollectionsListComponent_ng_container_0_Conditional_74_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 63)(1, "label", 64);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-slider", 65)(4, "input", 66);
    \u0275\u0275listener("valueChange", function CollectionsListComponent_ng_container_0_Conditional_74_Conditional_15_Template_input_valueChange_4_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onMinScoreChange($event));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const t_r6 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", t_r6("smartEnrollPeople.minScore"), ": ", ctx_r1.minScore, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r1.minScore);
  }
}
function CollectionsListComponent_ng_container_0_Conditional_74_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 39)(1, "mat-button-toggle-group", 56);
    \u0275\u0275listener("change", function CollectionsListComponent_ng_container_0_Conditional_74_Template_mat_button_toggle_group_change_1_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onSearchModeChange($event.value));
    });
    \u0275\u0275elementStart(2, "mat-button-toggle", 57);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-button-toggle", 58);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 59)(7, "button", 60);
    \u0275\u0275listener("click", function CollectionsListComponent_ng_container_0_Conditional_74_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.triggerImageUpload());
    });
    \u0275\u0275elementStart(8, "mat-icon", 26);
    \u0275\u0275text(9, "upload");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "input", 61, 1);
    \u0275\u0275listener("change", function CollectionsListComponent_ng_container_0_Conditional_74_Template_input_change_12_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onImageSelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, CollectionsListComponent_ng_container_0_Conditional_74_Conditional_14_Template, 1, 1, "img", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, CollectionsListComponent_ng_container_0_Conditional_74_Conditional_15_Template, 5, 3, "div", 63);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.searchMode)("disabled", ctx_r1.disableActions || ctx_r1.scopeFilter === "all");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r6("smartEnrollPeople.fast"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r6("smartEnrollPeople.accurate"));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.disableActions || ctx_r1.scopeFilter === "all");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r6("smartEnrollPeople.uploadImage"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.selectedImagePreview ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.selectedImagePreview ? 15 : -1);
  }
}
function CollectionsListComponent_ng_container_0_Conditional_90_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275element(1, "mat-spinner", 67);
    \u0275\u0275elementStart(2, "p", 68);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r6("smartEnrollCollections.loading"));
  }
}
function CollectionsListComponent_ng_container_0_Conditional_91_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 48)(1, "div", 69)(2, "mat-icon");
    \u0275\u0275text(3, "folder_open");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "h3", 70);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 71);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 72);
    \u0275\u0275listener("click", function CollectionsListComponent_ng_container_0_Conditional_91_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.createCollection());
    });
    \u0275\u0275elementStart(9, "mat-icon", 16);
    \u0275\u0275text(10, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", t_r6("smartEnrollCollections.emptyTitle"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r6("smartEnrollCollections.emptySubtitle"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.disableActions);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r6("smartEnrollCollections.createCollection"), " ");
  }
}
function CollectionsListComponent_ng_container_0_Conditional_92_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-biometrics-collections-table", 73);
    \u0275\u0275listener("collectionSelectionChange", function CollectionsListComponent_ng_container_0_Conditional_92_Template_app_biometrics_collections_table_collectionSelectionChange_0_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onCollectionSelectionChange($event));
    })("deleteCollection", function CollectionsListComponent_ng_container_0_Conditional_92_Template_app_biometrics_collections_table_deleteCollection_0_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteCollection($event));
    })("deletePerson", function CollectionsListComponent_ng_container_0_Conditional_92_Template_app_biometrics_collections_table_deletePerson_0_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deletePerson($event));
    })("editCollection", function CollectionsListComponent_ng_container_0_Conditional_92_Template_app_biometrics_collections_table_editCollection_0_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.editCollection($event));
    })("editPerson", function CollectionsListComponent_ng_container_0_Conditional_92_Template_app_biometrics_collections_table_editPerson_0_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.editPerson($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("collections", ctx_r1.collectionsData())("filterText", ctx_r1.filterText)("loading", ctx_r1.loading())("disableActions", ctx_r1.disableActions)("showTypeBadges", ctx_r1.showTypeBadges);
  }
}
function CollectionsListComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 3)(2, "header", 4)(3, "div", 5)(4, "div", 6)(5, "a", 7);
    \u0275\u0275text(6, " Verifik ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "mat-icon", 8);
    \u0275\u0275elementStart(8, "a", 9);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "mat-icon", 8);
    \u0275\u0275elementStart(11, "span", 10);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 11)(14, "div", 12)(15, "h1", 13);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "p", 14);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "button", 15);
    \u0275\u0275listener("click", function CollectionsListComponent_ng_container_0_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.createCollection());
    });
    \u0275\u0275elementStart(20, "mat-icon", 16);
    \u0275\u0275text(21, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(24, "main", 17)(25, "div", 18)(26, "div", 19)(27, "div", 20)(28, "div", 21)(29, "mat-icon", 22);
    \u0275\u0275text(30, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "input", 23);
    \u0275\u0275listener("input", function CollectionsListComponent_ng_container_0_Template_input_input_31_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onTextFilterChange($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 24)(33, "button", 25);
    \u0275\u0275listener("click", function CollectionsListComponent_ng_container_0_Template_button_click_33_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearFilters());
    });
    \u0275\u0275elementStart(34, "mat-icon", 26);
    \u0275\u0275text(35, "filter_list_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "span");
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "button", 27)(39, "mat-icon", 26);
    \u0275\u0275text(40, "move_to_inbox");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "span");
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "mat-menu", null, 0);
    \u0275\u0275repeaterCreate(45, CollectionsListComponent_ng_container_0_For_46_Template, 1, 1, null, null, _forTrack02);
    \u0275\u0275elementStart(47, "button", 28);
    \u0275\u0275listener("click", function CollectionsListComponent_ng_container_0_Template_button_click_47_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.createCollection(ctx_r1.selectedPeople));
    });
    \u0275\u0275elementStart(48, "mat-icon");
    \u0275\u0275text(49, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "span");
    \u0275\u0275text(51);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(52, "button", 25);
    \u0275\u0275listener("click", function CollectionsListComponent_ng_container_0_Template_button_click_52_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.exportData());
    });
    \u0275\u0275elementStart(53, "mat-icon", 26);
    \u0275\u0275text(54, "file_download");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "span");
    \u0275\u0275text(56);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(57, "div", 29);
    \u0275\u0275template(58, CollectionsListComponent_ng_container_0_Conditional_58_Template, 8, 4)(59, CollectionsListComponent_ng_container_0_Conditional_59_Template, 4, 2);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "div", 30)(61, "button", 31);
    \u0275\u0275listener("click", function CollectionsListComponent_ng_container_0_Template_button_click_61_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleImageSearchAccordion());
    });
    \u0275\u0275elementStart(62, "div", 32)(63, "div", 33)(64, "mat-icon", 34);
    \u0275\u0275text(65, "image_search");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(66, "div", 35)(67, "p", 36);
    \u0275\u0275text(68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "p", 37);
    \u0275\u0275template(70, CollectionsListComponent_ng_container_0_Conditional_70_Template, 1, 1)(71, CollectionsListComponent_ng_container_0_Conditional_71_Template, 1, 1);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(72, "mat-icon", 38);
    \u0275\u0275text(73, "expand_more");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(74, CollectionsListComponent_ng_container_0_Conditional_74_Template, 16, 8, "div", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "div", 30)(76, "div", 40)(77, "div", 41)(78, "div", 33)(79, "mat-icon");
    \u0275\u0275text(80, "folder");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(81, "div")(82, "h2", 42);
    \u0275\u0275text(83);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "p", 43);
    \u0275\u0275text(85);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(86, "div", 44);
    \u0275\u0275element(87, "span", 45);
    \u0275\u0275text(88);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(89, "div", 46);
    \u0275\u0275template(90, CollectionsListComponent_ng_container_0_Conditional_90_Template, 4, 1, "div", 47)(91, CollectionsListComponent_ng_container_0_Conditional_91_Template, 12, 4, "div", 48)(92, CollectionsListComponent_ng_container_0_Conditional_92_Template, 1, 5, "app-biometrics-collections-table", 49);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r6 = ctx.$implicit;
    const moveMenu_r12 = \u0275\u0275reference(44);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" ", t_r6("nav.smart_enroll"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r6("smartEnrollCollections.title"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r6("smartEnrollCollections.title"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r6("smartEnrollCollections.subtitle"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.disableActions);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r6("smartEnrollCollections.createCollection"));
    \u0275\u0275advance(8);
    \u0275\u0275property("placeholder", t_r6("smartEnrollPeople.search"))("value", ctx_r1.filterText);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.disabledClearFilters);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r6("smartEnrollCollections.clearFilters"));
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.disableActions || !ctx_r1.selectedPeople.length)("matMenuTriggerFor", moveMenu_r12);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r6("smartEnrollPeople.movePeople"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.collectionsData());
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(t_r6("smartEnrollPeople.createNewCollection"));
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.disableActions);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r6("export"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.scopeFilter === "onboarding" ? 58 : 59);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("opacity-60", ctx_r1.scopeFilter === "all");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.scopeFilter === "all");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(t_r6("smartEnrollPeople.searchByImage"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.scopeFilter === "all" ? 70 : 71);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("rotate-180", ctx_r1.imageSearchExpanded);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.imageSearchExpanded ? 74 : -1);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" ", t_r6("smartEnrollCollections.tableTitle"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r6("smartEnrollCollections.tableSubtitleScoped", \u0275\u0275pureFunction2(33, _c12, ctx_r1.collectionsData().length, t_r6(ctx_r1.tableScopeLabelKey))), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-emerald-400", !ctx_r1.loading())("bg-amber-400", ctx_r1.loading());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.loading() ? t_r6("smartEnrollCollections.loading") : t_r6("smartEnrollCollections.live"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.loading() ? 90 : !ctx_r1.collectionsData().length && !ctx_r1.filterText && !ctx_r1.selectedImagePreview ? 91 : 92);
  }
}
var CollectionsListComponent = class _CollectionsListComponent {
  constructor() {
    this._collectionsService = inject(CollectionsService);
    this._peopleService = inject(PeopleService);
    this._dialog = inject(MatDialog);
    this._snackBar = inject(MatSnackBar);
    this._transloco = inject(TranslocoService);
    this._cdr = inject(ChangeDetectorRef);
    this._minScoreChange$ = new Subject();
    this._destroy$ = new Subject();
    this.collectionsData = signal([]);
    this.expandedCollection = null;
    this.exporting = signal(false);
    this.filterText = "";
    this.imageSearchExpanded = false;
    this.loading = signal(true);
    this.minScore = 0.8;
    this.searchMode = "fast";
    this.selectedImagePreview = null;
    this.selectedPeople = [];
    this.scopeFilter = "onboarding";
    this.onboardingCollectionCodes = signal(/* @__PURE__ */ new Set());
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
  get showTypeBadges() {
    return this.scopeFilter === "all";
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
  createCollection(people = []) {
    const dialogRef = this._dialog.open(CollectionDialogComponent, {
      width: "560px",
      maxWidth: "94vw",
      panelClass: COLLECTION_DIALOG_PANEL_CLASS,
      data: { mode: "create" }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (!result || result.action !== "create")
        return;
      this.loading.set(true);
      this._collectionsService.createCollection(result.collection).subscribe({
        next: (response) => {
          const created = response?.data;
          const shouldMovePeople = people.length > 0 && this.expandedCollection && created?._id && created?.code;
          if (!shouldMovePeople) {
            this._fetchRecords();
            return;
          }
          const peopleIds = people.map((person) => person._id);
          this._collectionsService.movePeopleToCollection(peopleIds, { _id: this.expandedCollection._id, code: this.expandedCollection.code }, { _id: created._id, code: created.code }).subscribe({
            next: () => this._fetchRecords(),
            error: () => this._showError("smartEnrollCollections.moveError"),
            complete: () => this.loading.set(false)
          });
        },
        error: () => {
          this._showError("smartEnrollCollections.createError");
          this.loading.set(false);
        }
      });
    });
  }
  deleteCollection(collection) {
    this._confirmDelete({
      titleKey: "smartEnrollCollections.deleteTitle",
      messageKey: "smartEnrollCollections.deleteMessage",
      warningKey: "smartEnrollCollections.deleteWarning",
      confirmKey: "smartEnrollCollections.deleteConfirm",
      subtitle: collection.name,
      onConfirm: () => {
        this.loading.set(true);
        this._collectionsService.deleteCollection(collection._id).subscribe({
          next: () => this._fetchRecords(),
          error: () => this._showError("smartEnrollCollections.deleteError"),
          complete: () => this.loading.set(false)
        });
      }
    });
  }
  deletePerson(person) {
    this._confirmDelete({
      titleKey: "smartEnrollPeople.deleteTitle",
      messageKey: "smartEnrollPeople.deleteMessage",
      warningKey: "smartEnrollPeople.deleteWarning",
      confirmKey: "smartEnrollPeople.deleteConfirm",
      subtitle: person.name,
      onConfirm: () => {
        this.loading.set(true);
        this._peopleService.deletePerson(person._id).subscribe({
          next: () => this._fetchRecords(),
          error: () => this._showError("smartEnrollPeople.deleteError"),
          complete: () => this.loading.set(false)
        });
      }
    });
  }
  editCollection(collection) {
    const dialogRef = this._dialog.open(CollectionDialogComponent, {
      width: "560px",
      maxWidth: "94vw",
      panelClass: COLLECTION_DIALOG_PANEL_CLASS,
      data: { collection, mode: "edit" }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (!result || result.action !== "edit")
        return;
      this.loading.set(true);
      this._collectionsService.updateCollection(result.collection).subscribe({
        next: () => this._fetchRecords(),
        error: () => this._showError("smartEnrollCollections.updateError"),
        complete: () => this.loading.set(false)
      });
    });
  }
  editPerson(person) {
    const dialogRef = this._dialog.open(EditPersonDialogComponent, {
      width: "640px",
      maxWidth: "94vw",
      panelClass: EDIT_PERSON_DIALOG_PANEL_CLASS,
      data: {
        mode: "edit",
        person,
        contextCollection: this.expandedCollection ?? void 0
      }
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
    this._exportCollections();
  }
  movePeopleToCollection(collection) {
    if (!collection || !this.selectedPeople.length || !this.expandedCollection)
      return;
    if (this.expandedCollection._id === collection._id) {
      this._showError("smartEnrollCollections.moveSameCollection");
      return;
    }
    this.loading.set(true);
    const peopleIds = this.selectedPeople.map((p) => p._id);
    this._collectionsService.movePeopleToCollection(peopleIds, { _id: this.expandedCollection._id, code: this.expandedCollection.code }, { _id: collection._id, code: collection.code }).subscribe({
      next: () => this._fetchRecords(),
      error: () => this._showError("smartEnrollCollections.moveError"),
      complete: () => this.loading.set(false)
    });
  }
  onCollectionSelectionChange(event) {
    this.expandedCollection = event.collection;
    this.selectedPeople = event.selectedPeople || [];
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
    if (this.scopeFilter === "all") {
      forkJoin({
        all: this._collectionsService.getAllCollections(),
        onboarding: this._collectionsService.getCollectionByProjectType(this.projectType)
      }).subscribe({
        next: ({ all, onboarding }) => {
          const onboardingCodes = getOnboardingCollectionCodes(onboarding.data || []);
          this.onboardingCollectionCodes.set(onboardingCodes);
          const data = classifyCollections(all.data || [], onboardingCodes).map((collection) => this._mapCollectionRow(collection));
          this.collectionsData.set(data);
          this.loading.set(false);
          this._cdr.markForCheck();
        },
        error: () => this._handleFetchError()
      });
      return;
    }
    const params = this.selectedImagePreview ? { image: this.selectedImagePreview, searchMode: this.searchMode, minScore: this.minScore } : {};
    this._collectionsService.getCollectionByProjectType(this.projectType, params).subscribe({
      next: (response) => {
        const onboardingCodes = getOnboardingCollectionCodes(response.data || []);
        this.onboardingCollectionCodes.set(onboardingCodes);
        const data = (response.data || []).map((collection) => this._mapCollectionRow(collection));
        this.collectionsData.set(data);
        this.loading.set(false);
        this._cdr.markForCheck();
      },
      error: () => this._handleFetchError()
    });
  }
  _mapCollectionRow(collection) {
    return __spreadProps(__spreadValues({}, collection), {
      expanded: false,
      loading: false,
      clearPeopleSelections$: new Subject()
    });
  }
  _handleFetchError() {
    this._showError("smartEnrollCollections.getError");
    this.loading.set(false);
    this._cdr.markForCheck();
  }
  _confirmDelete(options) {
    const dialogRef = this._dialog.open(BiometricsConfirmDialogComponent, {
      panelClass: BIOMETRICS_CONFIRM_DIALOG_PANEL_CLASS,
      width: "480px",
      data: {
        title: this._transloco.translate(options.titleKey),
        subtitle: options.subtitle,
        message: this._transloco.translate(options.messageKey),
        warning: this._transloco.translate(options.warningKey),
        confirmLabel: this._transloco.translate(options.confirmKey)
      }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result?.action === "delete")
        options.onConfirm();
    });
  }
  _showError(key) {
    this._snackBar.open(this._transloco.translate(key), this._transloco.translate("close"), {
      duration: 3e3
    });
  }
  _exportCollections() {
    return __async(this, null, function* () {
      try {
        const rows = [];
        const collections = this.collectionsData();
        for (const collection of collections) {
          rows.push({
            type: "COLLECTION",
            name: collection.name,
            code: collection.code,
            description: collection.description || ""
          });
          let people = collection.people;
          if (!people) {
            try {
              const res = yield this._peopleService.getPeople({ in_collections: [collection.code] }).toPromise();
              people = res?.data || [];
            } catch {
              people = [];
            }
          }
          for (const person of people || []) {
            rows.push({
              type: "PERSON",
              name: person.name,
              code: person._id,
              description: person.nationality || ""
            });
          }
        }
        const worksheet = utils.json_to_sheet(rows);
        const workbook = { Sheets: { data: worksheet }, SheetNames: ["data"] };
        const buffer = writeSync(workbook, { bookType: "xlsx", type: "array" });
        const blob = new Blob([buffer], {
          type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `verifik_collections_${DateTime.now().toFormat("yyyy-MM-dd")}.xlsx`;
        a.click();
        URL.revokeObjectURL(url);
      } finally {
        this.exporting.set(false);
        this._cdr.markForCheck();
      }
    });
  }
  static {
    this.\u0275fac = function CollectionsListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CollectionsListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CollectionsListComponent, selectors: [["app-collections-list"]], viewQuery: function CollectionsListComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c02, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.imageInput = _t.first);
      }
    }, decls: 1, vars: 0, consts: [["moveMenu", "matMenu"], ["imageInput", ""], [4, "transloco"], [1, "collections-container", "flex", "min-h-screen", "min-w-0", "flex-auto", "flex-col", "bg-stone-50", "dark:bg-gray-950"], [1, "border-b", "border-stone-200/90", "bg-white/90", "px-5", "py-6", "backdrop-blur-sm", "dark:border-gray-800", "dark:bg-gray-950/90", "md:px-8", "md:py-8"], [1, "mx-auto", "flex", "w-full", "max-w-7xl", "flex-col", "gap-5"], [1, "flex", "flex-wrap", "items-center", "text-xs", "font-medium", "leading-none", "text-stone-500", "dark:text-stone-400"], ["routerLink", "/home", 1, "cursor-pointer", "text-stone-700", "underline-offset-4", "hover:underline", "dark:text-stone-300"], ["svgIcon", "heroicons_solid:chevron-right", 1, "icon-size-4", "mx-2", "text-stone-400"], ["routerLink", "/smart-enroll/projects", 1, "cursor-pointer", "text-stone-700", "underline-offset-4", "hover:underline", "dark:text-stone-300"], [1, "cursor-default", "text-stone-600", "dark:text-stone-300"], [1, "flex", "flex-col", "gap-4", "lg:flex-row", "lg:items-end", "lg:justify-between"], [1, "max-w-2xl"], [1, "text-2xl", "font-semibold", "tracking-tight", "text-stone-950", "dark:text-white", "md:text-3xl"], [1, "mt-2", "text-sm", "leading-6", "text-stone-500", "dark:text-stone-400", "md:text-base"], ["mat-flat-button", "", "color", "primary", "type", "button", 1, "min-h-11", "shrink-0", "rounded-xl", "px-5", 3, "click", "disabled"], [1, "mr-1", "!h-4", "!w-4", "!text-base"], [1, "flex", "flex-auto", "flex-col", "px-5", "py-8", "md:px-8", "md:py-10"], [1, "mx-auto", "flex", "w-full", "max-w-7xl", "flex-col", "gap-6"], [1, "rounded-2xl", "border", "border-stone-200/90", "bg-white", "p-5", "shadow-sm", "dark:border-gray-800", "dark:bg-gray-900/70", "md:p-6"], [1, "flex", "flex-col", "gap-4", "lg:flex-row", "lg:items-center", "lg:justify-between"], [1, "relative", "min-w-0", "flex-1"], [1, "pointer-events-none", "absolute", "left-3", "top-1/2", "!h-4", "!w-4", "-translate-y-1/2", "text-stone-400"], ["type", "text", 1, "h-11", "w-full", "rounded-xl", "border", "border-stone-200", "bg-stone-50", "pl-10", "pr-4", "text-sm", "text-stone-900", "outline-none", "transition", "focus:border-stone-400", "focus:bg-white", "dark:border-gray-700", "dark:bg-gray-950", "dark:text-stone-100", "placeholder:text-stone-400", "dark:placeholder:text-stone-500", "dark:focus:border-gray-500", "dark:focus:bg-gray-950", 3, "input", "placeholder", "value"], [1, "flex", "flex-wrap", "items-center", "gap-2"], ["type", "button", 1, "inline-flex", "min-h-10", "items-center", "justify-center", "gap-2", "rounded-xl", "border", "border-stone-200", "px-4", "text-sm", "font-medium", "text-stone-800", "transition", "hover:bg-stone-50", "disabled:cursor-not-allowed", "disabled:opacity-60", "dark:border-gray-700", "dark:text-stone-100", "dark:hover:bg-gray-800", 3, "click", "disabled"], [1, "!h-4", "!w-4", "!text-base"], ["type", "button", 1, "inline-flex", "min-h-10", "items-center", "justify-center", "gap-2", "rounded-xl", "border", "border-stone-200", "px-4", "text-sm", "font-medium", "text-stone-800", "transition", "hover:bg-stone-50", "disabled:cursor-not-allowed", "disabled:opacity-60", "dark:border-gray-700", "dark:text-stone-100", "dark:hover:bg-gray-800", 3, "disabled", "matMenuTriggerFor"], ["mat-menu-item", "", "type", "button", 3, "click"], [1, "flex", "flex-wrap", "items-center", "gap-2", "border-t", "border-stone-100", "pt-4", "dark:border-gray-800"], [1, "overflow-hidden", "rounded-2xl", "border", "border-stone-200/90", "bg-white", "shadow-sm", "dark:border-gray-800", "dark:bg-gray-900/70"], ["type", "button", 1, "flex", "w-full", "items-center", "justify-between", "px-5", "py-4", "transition", "hover:bg-stone-50", "dark:hover:bg-gray-800/40", "md:px-6", 3, "click", "disabled"], [1, "flex", "items-center", "gap-3"], [1, "flex", "h-10", "w-10", "shrink-0", "items-center", "justify-center", "rounded-xl", "border", "border-stone-200", "bg-stone-50", "text-stone-700", "dark:border-gray-800", "dark:bg-gray-950", "dark:text-stone-200"], [1, "!h-5", "!w-5", "!text-xl"], [1, "text-left"], [1, "text-sm", "font-semibold", "text-stone-950", "dark:text-white"], [1, "text-xs", "text-stone-500", "dark:text-stone-400"], [1, "text-stone-400", "transition-transform"], [1, "space-y-4", "border-t", "border-stone-200/80", "px-5", "py-5", "dark:border-gray-800", "md:px-6"], [1, "flex", "flex-col", "gap-3", "border-b", "border-stone-200/80", "p-5", "dark:border-gray-800", "md:flex-row", "md:items-center", "md:justify-between", "md:p-6"], [1, "flex", "items-start", "gap-3"], [1, "text-base", "font-semibold", "text-stone-950", "dark:text-white"], [1, "mt-1", "text-sm", "text-stone-500", "dark:text-stone-400"], [1, "flex", "items-center", "gap-2", "rounded-full", "bg-stone-100", "px-3", "py-1", "text-xs", "font-medium", "text-stone-500", "dark:bg-gray-800", "dark:text-gray-400"], [1, "h-2", "w-2", "rounded-full"], [1, "p-5", "md:p-6"], [1, "flex", "flex-col", "items-center", "justify-center", "rounded-xl", "border", "border-dashed", "border-stone-200", "py-14", "text-center", "dark:border-gray-800"], [1, "flex", "flex-col", "items-center", "justify-center", "rounded-xl", "border", "border-dashed", "border-stone-200", "px-5", "py-14", "text-center", "dark:border-gray-800"], [3, "collections", "filterText", "loading", "disableActions", "showTypeBadges"], ["mat-menu-item", "", "type", "button"], [1, "inline-flex", "items-center", "gap-1", "rounded-full", "border", "border-indigo-200", "bg-indigo-50", "px-3", "py-1", "text-xs", "font-medium", "text-indigo-800", "dark:border-indigo-800", "dark:bg-indigo-950", "dark:text-indigo-200"], ["type", "button", 1, "inline-flex", "h-5", "w-5", "items-center", "justify-center", "rounded-full", "transition", "hover:bg-indigo-100", "dark:hover:bg-indigo-900", 3, "click"], [1, "!h-3.5", "!w-3.5", "!text-base"], [1, "inline-flex", "items-center", "gap-2", "rounded-full", "border", "border-stone-200", "bg-stone-50", "px-3", "py-1", "text-xs", "font-medium", "text-stone-700", "dark:border-gray-700", "dark:bg-gray-950", "dark:text-stone-300"], ["type", "button", 1, "inline-flex", "min-h-8", "items-center", "justify-center", "rounded-xl", "border", "border-stone-200", "px-3", "text-xs", "font-medium", "text-stone-800", "transition", "hover:bg-stone-50", "dark:border-gray-700", "dark:text-stone-100", "dark:hover:bg-gray-800", 3, "click"], [1, "rounded-xl", 3, "change", "value", "disabled"], ["value", "fast"], ["value", "accurate"], [1, "flex", "flex-wrap", "items-center", "gap-4"], ["type", "button", 1, "inline-flex", "min-h-10", "items-center", "justify-center", "gap-2", "rounded-xl", "border", "border-stone-200", "bg-stone-950", "px-4", "text-sm", "font-medium", "text-white", "transition", "hover:bg-stone-800", "disabled:cursor-not-allowed", "disabled:opacity-60", "dark:bg-white", "dark:text-gray-950", "dark:hover:bg-stone-200", 3, "click", "disabled"], ["type", "file", "accept", "image/*", 1, "hidden", 3, "change"], ["alt", "", 1, "h-16", "w-16", "rounded-xl", "border", "border-stone-200", "object-cover", "dark:border-gray-700", 3, "src"], [1, "max-w-md", "rounded-xl", "border", "border-stone-200", "p-4", "dark:border-gray-800"], [1, "text-xs", "font-medium", "uppercase", "tracking-[0.14em]", "text-stone-500", "dark:text-stone-400"], ["min", "0.5", "max", "1", "step", "0.05", "discrete", "", 1, "mt-2", "w-full"], ["matSliderThumb", "", 3, "valueChange", "value"], ["diameter", "40"], [1, "mt-4", "text-sm", "text-stone-500", "dark:text-stone-400"], [1, "flex", "h-12", "w-12", "items-center", "justify-center", "rounded-xl", "bg-stone-100", "text-stone-500", "dark:bg-gray-800", "dark:text-stone-300"], [1, "mt-4", "text-base", "font-semibold", "text-stone-950", "dark:text-white"], [1, "mt-1", "max-w-sm", "text-sm", "text-stone-500", "dark:text-stone-400"], ["mat-flat-button", "", "color", "primary", "type", "button", 1, "mt-5", "min-h-10", "rounded-xl", "px-5", 3, "click", "disabled"], [3, "collectionSelectionChange", "deleteCollection", "deletePerson", "editCollection", "editPerson", "collections", "filterText", "loading", "disableActions", "showTypeBadges"]], template: function CollectionsListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, CollectionsListComponent_ng_container_0_Template, 93, 36, "ng-container", 2);
      }
    }, dependencies: [
      CommonModule,
      RouterLink,
      MatButtonModule,
      MatButton,
      MatButtonToggleModule,
      MatButtonToggleGroup,
      MatButtonToggle,
      MatIconModule,
      MatIcon,
      MatMenuModule,
      MatMenu,
      MatMenuItem,
      MatMenuTrigger,
      MatSliderModule,
      MatSlider,
      MatSliderThumb,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      TranslocoModule,
      TranslocoDirective,
      BiometricsCollectionsTableComponent
    ], styles: ["\n\n[_nghost-%COMP%] {\n  display: contents;\n}\n.collections-container[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.collections-container[_ngcontent-%COMP%]   mat-button-toggle-group[_ngcontent-%COMP%] {\n  border-radius: 0.75rem;\n  overflow: hidden;\n}\n/*# sourceMappingURL=collections-list.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CollectionsListComponent, [{
    type: Component,
    args: [{ selector: "app-collections-list", standalone: true, imports: [
      CommonModule,
      RouterLink,
      MatButtonModule,
      MatButtonToggleModule,
      MatIconModule,
      MatMenuModule,
      MatSliderModule,
      MatProgressSpinnerModule,
      TranslocoModule,
      BiometricsCollectionsTableComponent
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `<ng-container *transloco="let t">\r
    <div class="collections-container flex min-h-screen min-w-0 flex-auto flex-col bg-stone-50 dark:bg-gray-950">\r
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
                    <span class="cursor-default text-stone-600 dark:text-stone-300">{{ t('smartEnrollCollections.title') }}</span>\r
                </div>\r
\r
                <div class="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">\r
                    <div class="max-w-2xl">\r
                        <h1 class="text-2xl font-semibold tracking-tight text-stone-950 dark:text-white md:text-3xl">\r
                            {{ t('smartEnrollCollections.title') }}\r
                        </h1>\r
                        <p class="mt-2 text-sm leading-6 text-stone-500 dark:text-stone-400 md:text-base">\r
                            {{ t('smartEnrollCollections.subtitle') }}\r
                        </p>\r
                    </div>\r
\r
                    <button\r
                        mat-flat-button\r
                        color="primary"\r
                        type="button"\r
                        class="min-h-11 shrink-0 rounded-xl px-5"\r
                        (click)="createCollection()"\r
                        [disabled]="disableActions"\r
                    >\r
                        <mat-icon class="mr-1 !h-4 !w-4 !text-base">add</mat-icon>\r
                        <span>{{ t('smartEnrollCollections.createCollection') }}</span>\r
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
                                <span>{{ t('smartEnrollCollections.clearFilters') }}</span>\r
                            </button>\r
\r
                            <button\r
                                type="button"\r
                                class="inline-flex min-h-10 items-center justify-center gap-2 rounded-xl border border-stone-200 px-4 text-sm font-medium text-stone-800 transition hover:bg-stone-50 disabled:cursor-not-allowed disabled:opacity-60 dark:border-gray-700 dark:text-stone-100 dark:hover:bg-gray-800"\r
                                [disabled]="disableActions || !selectedPeople.length"\r
                                [matMenuTriggerFor]="moveMenu"\r
                            >\r
                                <mat-icon class="!h-4 !w-4 !text-base">move_to_inbox</mat-icon>\r
                                <span>{{ t('smartEnrollPeople.movePeople') }}</span>\r
                            </button>\r
\r
                            <mat-menu #moveMenu="matMenu">\r
                                @for (collection of collectionsData(); track collection._id) {\r
                                    @if (collection._id !== expandedCollection?._id) {\r
                                        <button mat-menu-item type="button" (click)="movePeopleToCollection(collection)">\r
                                            <mat-icon>folder</mat-icon>\r
                                            <span>{{ collection.name }}</span>\r
                                        </button>\r
                                    }\r
                                }\r
                                <button mat-menu-item type="button" (click)="createCollection(selectedPeople)">\r
                                    <mat-icon>add</mat-icon>\r
                                    <span>{{ t('smartEnrollPeople.createNewCollection') }}</span>\r
                                </button>\r
                            </mat-menu>\r
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
                            <span class="text-xs text-stone-500 dark:text-stone-400">{{ t('smartEnrollCollections.scopeFilterHint') }}</span>\r
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
                                        {{ t('smartEnrollCollections.imageSearchHint') }}\r
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
                <!-- Collections table -->\r
                <div class="overflow-hidden rounded-2xl border border-stone-200/90 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900/70">\r
                    <div class="flex flex-col gap-3 border-b border-stone-200/80 p-5 dark:border-gray-800 md:flex-row md:items-center md:justify-between md:p-6">\r
                        <div class="flex items-start gap-3">\r
                            <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-stone-200 bg-stone-50 text-stone-700 dark:border-gray-800 dark:bg-gray-950 dark:text-stone-200">\r
                                <mat-icon>folder</mat-icon>\r
                            </div>\r
                            <div>\r
                                <h2 class="text-base font-semibold text-stone-950 dark:text-white">\r
                                    {{ t('smartEnrollCollections.tableTitle') }}\r
                                </h2>\r
                                <p class="mt-1 text-sm text-stone-500 dark:text-stone-400">\r
                                    {{ t('smartEnrollCollections.tableSubtitleScoped', {\r
                                        count: collectionsData().length,\r
                                        scope: t(tableScopeLabelKey)\r
                                    }) }}\r
                                </p>\r
                            </div>\r
                        </div>\r
\r
                        <div class="flex items-center gap-2 rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-500 dark:bg-gray-800 dark:text-gray-400">\r
                            <span class="h-2 w-2 rounded-full" [class.bg-emerald-400]="!loading()" [class.bg-amber-400]="loading()"></span>\r
                            {{ loading() ? t('smartEnrollCollections.loading') : t('smartEnrollCollections.live') }}\r
                        </div>\r
                    </div>\r
\r
                    <div class="p-5 md:p-6">\r
                        @if (loading()) {\r
                            <div class="flex flex-col items-center justify-center rounded-xl border border-dashed border-stone-200 py-14 text-center dark:border-gray-800">\r
                                <mat-spinner diameter="40"></mat-spinner>\r
                                <p class="mt-4 text-sm text-stone-500 dark:text-stone-400">{{ t('smartEnrollCollections.loading') }}</p>\r
                            </div>\r
                        } @else if (!collectionsData().length && !filterText && !selectedImagePreview) {\r
                            <div class="flex flex-col items-center justify-center rounded-xl border border-dashed border-stone-200 px-5 py-14 text-center dark:border-gray-800">\r
                                <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-stone-100 text-stone-500 dark:bg-gray-800 dark:text-stone-300">\r
                                    <mat-icon>folder_open</mat-icon>\r
                                </div>\r
                                <h3 class="mt-4 text-base font-semibold text-stone-950 dark:text-white">\r
                                    {{ t('smartEnrollCollections.emptyTitle') }}\r
                                </h3>\r
                                <p class="mt-1 max-w-sm text-sm text-stone-500 dark:text-stone-400">\r
                                    {{ t('smartEnrollCollections.emptySubtitle') }}\r
                                </p>\r
                                <button\r
                                    mat-flat-button\r
                                    color="primary"\r
                                    type="button"\r
                                    class="mt-5 min-h-10 rounded-xl px-5"\r
                                    (click)="createCollection()"\r
                                    [disabled]="disableActions"\r
                                >\r
                                    <mat-icon class="mr-1 !h-4 !w-4 !text-base">add</mat-icon>\r
                                    {{ t('smartEnrollCollections.createCollection') }}\r
                                </button>\r
                            </div>\r
                        } @else {\r
                            <app-biometrics-collections-table\r
                                [collections]="collectionsData()"\r
                                [filterText]="filterText"\r
                                [loading]="loading()"\r
                                [disableActions]="disableActions"\r
                                [showTypeBadges]="showTypeBadges"\r
                                (collectionSelectionChange)="onCollectionSelectionChange($event)"\r
                                (deleteCollection)="deleteCollection($event)"\r
                                (deletePerson)="deletePerson($event)"\r
                                (editCollection)="editCollection($event)"\r
                                (editPerson)="editPerson($event)"\r
                            ></app-biometrics-collections-table>\r
                        }\r
                    </div>\r
                </div>\r
            </div>\r
        </main>\r
    </div>\r
</ng-container>\r
`, styles: ["/* src/app/modules/smart-enroll/collections/collections-list.component.scss */\n:host {\n  display: contents;\n}\n.collections-container mat-icon {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.collections-container mat-button-toggle-group {\n  border-radius: 0.75rem;\n  overflow: hidden;\n}\n/*# sourceMappingURL=collections-list.component.css.map */\n"] }]
  }], null, { imageInput: [{
    type: ViewChild,
    args: ["imageInput"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CollectionsListComponent, { className: "CollectionsListComponent", filePath: "src/app/modules/smart-enroll/collections/collections-list.component.ts", lineNumber: 71 });
})();
export {
  CollectionsListComponent
};
//# sourceMappingURL=chunk-AZJON6I3.js.map
