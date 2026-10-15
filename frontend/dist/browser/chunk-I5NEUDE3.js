import {
  PersonSingleSelectComponent
} from "./chunk-OIYWQQ3Q.js";
import {
  CreatePersonResultComponent
} from "./chunk-SQJ2QN4N.js";
import "./chunk-IQYQUAUX.js";
import "./chunk-Q7ZENBRV.js";
import {
  CollectionMultiSelectComponent
} from "./chunk-CEAIEB3K.js";
import "./chunk-CRJOXNLH.js";
import "./chunk-ZLWP3B24.js";
import "./chunk-I4NQXRI6.js";
import {
  DemoRelatedDocsSectionComponent
} from "./chunk-QCUB3VMU.js";
import {
  BiometricsDemoApiService,
  DemoPageShellComponent,
  mapPersonDocsToListItems,
  normalizePersonsListPayload
} from "./chunk-QDU3MPYG.js";
import "./chunk-B4YUVLJ7.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  RequiredValidator,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-5EV2TUYF.js";
import {
  TranslocoModule,
  TranslocoPipe,
  TranslocoService
} from "./chunk-VENEX45A.js";
import {
  Router
} from "./chunk-DM2XPT7T.js";
import "./chunk-KTYFS5OT.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-I5BUD46C.js";
import "./chunk-F5M2C4EZ.js";

// src/app/modules/smart-enroll/demos/pages/update-person/update-person-demo.component.ts
function UpdatePersonDemoComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "smartEnrollDemos.updatePerson.heroTitleResult"), " ");
  }
}
function UpdatePersonDemoComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "smartEnrollDemos.updatePerson.heroTitleForm"), " ");
  }
}
function UpdatePersonDemoComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "smartEnrollDemos.updatePerson.heroSubtitleResult"), " ");
  }
}
function UpdatePersonDemoComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "smartEnrollDemos.updatePerson.heroSubtitleForm"), " ");
  }
}
function UpdatePersonDemoComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 3);
  }
}
function UpdatePersonDemoComponent_Conditional_9_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 15);
    \u0275\u0275element(1, "span", 35);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "smartEnrollDemos.updatePerson.loadingProfile"), " ");
  }
}
function UpdatePersonDemoComponent_Conditional_9_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 16)(1, "span", 36);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.loadError, " ");
  }
}
function UpdatePersonDemoComponent_Conditional_9_Conditional_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "span", 36);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.collectionsError, " ");
  }
}
function UpdatePersonDemoComponent_Conditional_9_Conditional_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "span", 36);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.submitError, " ");
  }
}
function UpdatePersonDemoComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 9);
    \u0275\u0275listener("ngSubmit", function UpdatePersonDemoComponent_Conditional_9_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.handleSubmit());
    });
    \u0275\u0275elementStart(1, "div", 10)(2, "label", 11);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementStart(5, "span", 12);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "p", 13);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "app-person-single-select", 14);
    \u0275\u0275listener("selectedIdChange", function UpdatePersonDemoComponent_Conditional_9_Template_app_person_single_select_selectedIdChange_11_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.handlePersonSelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, UpdatePersonDemoComponent_Conditional_9_Conditional_12_Template, 4, 3, "p", 15)(13, UpdatePersonDemoComponent_Conditional_9_Conditional_13_Template, 4, 1, "p", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 17)(15, "div")(16, "label", 18);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "transloco");
    \u0275\u0275elementStart(19, "span", 12);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "input", 19);
    \u0275\u0275twoWayListener("ngModelChange", function UpdatePersonDemoComponent_Conditional_9_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.name, $event) || (ctx_r1.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div")(24, "label", 20);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "transloco");
    \u0275\u0275elementStart(27, "span", 12);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "select", 21);
    \u0275\u0275twoWayListener("ngModelChange", function UpdatePersonDemoComponent_Conditional_9_Template_select_ngModelChange_30_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.gender, $event) || (ctx_r1.gender = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(31, "option", 22);
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "option", 23);
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "transloco");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(37, "div", 17)(38, "div")(39, "label", 24);
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "transloco");
    \u0275\u0275elementStart(42, "span", 12);
    \u0275\u0275text(43);
    \u0275\u0275pipe(44, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "input", 25);
    \u0275\u0275twoWayListener("ngModelChange", function UpdatePersonDemoComponent_Conditional_9_Template_input_ngModelChange_45_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.dob, $event) || (ctx_r1.dob = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div")(47, "label", 26);
    \u0275\u0275text(48);
    \u0275\u0275pipe(49, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "input", 27);
    \u0275\u0275pipe(51, "transloco");
    \u0275\u0275twoWayListener("ngModelChange", function UpdatePersonDemoComponent_Conditional_9_Template_input_ngModelChange_50_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.nationality, $event) || (ctx_r1.nationality = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(52, "div")(53, "label", 28);
    \u0275\u0275text(54);
    \u0275\u0275pipe(55, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "textarea", 29);
    \u0275\u0275twoWayListener("ngModelChange", function UpdatePersonDemoComponent_Conditional_9_Template_textarea_ngModelChange_56_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.notes, $event) || (ctx_r1.notes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "div")(58, "label", 30);
    \u0275\u0275text(59);
    \u0275\u0275pipe(60, "transloco");
    \u0275\u0275elementStart(61, "span", 12);
    \u0275\u0275text(62);
    \u0275\u0275pipe(63, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(64, UpdatePersonDemoComponent_Conditional_9_Conditional_64_Template, 4, 1, "div", 31);
    \u0275\u0275elementStart(65, "app-collection-multi-select", 32);
    \u0275\u0275listener("selectedIdsChange", function UpdatePersonDemoComponent_Conditional_9_Template_app_collection_multi_select_selectedIdsChange_65_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectedCollectionIds = $event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(66, UpdatePersonDemoComponent_Conditional_9_Conditional_66_Template, 4, 1, "div", 33);
    \u0275\u0275elementStart(67, "button", 34);
    \u0275\u0275text(68);
    \u0275\u0275pipe(69, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 35, "smartEnrollDemos.updatePerson.personLabel"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 37, "smartEnrollDemos.common.requiredStar"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 39, "smartEnrollDemos.updatePerson.personHint"));
    \u0275\u0275advance(2);
    \u0275\u0275property("items", ctx_r1.personRows)("selectedId", ctx_r1.selectedPersonId)("loading", ctx_r1.personsLoading)("error", ctx_r1.personsError);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.loadingPerson ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.loadError ? 13 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 41, "smartEnrollDemos.updatePerson.fullNameLabel"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 43, "smartEnrollDemos.common.requiredStar"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(26, 45, "smartEnrollDemos.updatePerson.genderLabel"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(29, 47, "smartEnrollDemos.common.requiredStar"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.gender);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(33, 49, "smartEnrollDemos.common.male"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(36, 51, "smartEnrollDemos.common.female"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(41, 53, "smartEnrollDemos.updatePerson.dobLabel"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(44, 55, "smartEnrollDemos.common.requiredStar"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.dob);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(49, 57, "smartEnrollDemos.updatePerson.nationalityLabel"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.nationality);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(51, 59, "smartEnrollDemos.updatePerson.nationalityPlaceholder"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(55, 61, "smartEnrollDemos.updatePerson.notesLabel"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.notes);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(60, 63, "smartEnrollDemos.updatePerson.collectionsLabel"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(63, 65, "smartEnrollDemos.common.requiredStar"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.collectionsError ? 64 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("items", ctx_r1.collectionItems)("selectedIds", ctx_r1.selectedCollectionIds)("loading", ctx_r1.collectionsLoading)("emptySlot", ctx_r1.noCollectionsLoadedSlot);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.submitError ? 66 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !(ctx_r1.selectedPersonId == null ? null : ctx_r1.selectedPersonId.trim()) || !ctx_r1.selectedCollectionIds.length || ctx_r1.collectionsLoading || ctx_r1.loadingPerson || ctx_r1.personsLoading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(69, 67, "smartEnrollDemos.updatePerson.saveChanges"), " ");
  }
}
function UpdatePersonDemoComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "div", 37);
    \u0275\u0275elementStart(2, "p", 38);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "smartEnrollDemos.updatePerson.processing"));
  }
}
function UpdatePersonDemoComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-create-person-result", 39);
    \u0275\u0275listener("enrollAnother", function UpdatePersonDemoComponent_Conditional_11_Template_app_create_person_result_enrollAnother_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.reset());
    })("backToDemos", function UpdatePersonDemoComponent_Conditional_11_Template_app_create_person_result_backToDemos_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.backToDemos());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("result", ctx_r1.result);
  }
}
function UpdatePersonDemoComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "details", 7)(1, "summary", 40)(2, "span", 41)(3, "span", 42);
    \u0275\u0275text(4, "menu_book");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 43);
    \u0275\u0275text(8, " expand_more ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 44)(10, "p");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "transloco");
    \u0275\u0275elementStart(13, "a", 45);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "p", 46);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "transloco");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 4, "smartEnrollDemos.updatePerson.apiRefSummary"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 6, "smartEnrollDemos.updatePerson.apiRefOfficialDocs"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 8, "smartEnrollDemos.updatePerson.apiRefLinkLabel"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 10, "smartEnrollDemos.updatePerson.apiRefBody"));
  }
}
var DOCS_BASE = "https://docs.verifik.co";
var RELATED_DOC_HREFS = [
  `${DOCS_BASE}/resources/retrieve-a-person`,
  `${DOCS_BASE}/resources/persons/update-a-person`,
  `${DOCS_BASE}/resources/create-a-person`,
  `${DOCS_BASE}/resources/persons/delete-a-person`
];
var readPersonPayload = (body) => {
  if (!body || typeof body !== "object" || Array.isArray(body))
    return null;
  const envelope = body;
  const inner = envelope["data"];
  if (inner && typeof inner === "object" && !Array.isArray(inner)) {
    return inner;
  }
  return null;
};
var UpdatePersonDemoComponent = class _UpdatePersonDemoComponent {
  constructor() {
    this._api = inject(BiometricsDemoApiService);
    this._router = inject(Router);
    this._transloco = inject(TranslocoService);
    this._cdr = inject(ChangeDetectorRef);
    this.authChecked = false;
    this.step = "form";
    this.selectedPersonId = null;
    this.personsLoading = false;
    this.personsError = null;
    this.personRows = [];
    this.name = "";
    this.gender = "M";
    this.dob = "";
    this.nationality = "";
    this.notes = "";
    this.selectedCollectionIds = [];
    this.collectionItems = [];
    this.collectionsLoading = false;
    this.collectionsError = null;
    this.loadError = null;
    this.loadingPerson = false;
    this.submitError = null;
    this.result = null;
    this.noCollectionsLoadedSlot = "";
    this.relatedDocs = [];
  }
  ngOnInit() {
    if (!this._api.ensureAuthenticated()) {
      this.authChecked = true;
      return;
    }
    this.authChecked = true;
    this.relatedDocs = this.buildRelatedDocs();
    this.noCollectionsLoadedSlot = this._transloco.translate("smartEnrollDemos.updatePerson.noCollectionsLoaded");
    this.loadCollections();
    this.loadPersons();
  }
  get showApiReference() {
    return this.step !== "result";
  }
  loadCollections() {
    this.collectionsLoading = true;
    this.collectionsError = null;
    this._cdr.markForCheck();
    this._api.listCollections().subscribe({
      next: (items) => {
        this.collectionItems = items;
        this.collectionsLoading = false;
        this._cdr.markForCheck();
      },
      error: (err) => {
        this.collectionsError = err.error ?? err.message ?? "Failed to load collections";
        this.collectionItems = [];
        this.collectionsLoading = false;
        this._cdr.markForCheck();
      }
    });
  }
  loadPersons() {
    this.personsLoading = true;
    this.personsError = null;
    this._cdr.markForCheck();
    this._api.getPersons({ page: 1, limit: 200 }).subscribe({
      next: (data) => {
        const body = data;
        const raw = normalizePersonsListPayload(body?.data);
        this.personRows = mapPersonDocsToListItems(raw);
        this.personsLoading = false;
        this._cdr.markForCheck();
      },
      error: (err) => {
        this.personsError = err.error ?? err.message ?? "Failed to load people";
        this.personRows = [];
        this.personsLoading = false;
        this._cdr.markForCheck();
      }
    });
  }
  applyPersonToForm(person) {
    this.name = typeof person["name"] === "string" ? person["name"] : "";
    this.gender = person["gender"] === "F" ? "F" : "M";
    const dobRaw = person["date_of_birth"];
    this.dob = typeof dobRaw === "string" ? dobRaw.slice(0, 10) : "";
    this.nationality = typeof person["nationality"] === "string" ? person["nationality"] : "";
    this.notes = person["notes"] !== void 0 && person["notes"] !== null ? String(person["notes"]) : "";
    const cols = Array.isArray(person["collections"]) ? person["collections"].filter((c) => typeof c === "string") : [];
    this.selectedCollectionIds = cols;
  }
  loadPersonDetails(id) {
    if (!id)
      return;
    this.loadingPerson = true;
    this.loadError = null;
    this._cdr.markForCheck();
    this._api.getPerson(id).subscribe({
      next: (data) => {
        this.loadingPerson = false;
        const person = readPersonPayload(data);
        if (!person) {
          this.loadError = this._transloco.translate("smartEnrollDemos.updatePerson.unexpectedResponseShape");
        } else {
          this.applyPersonToForm(person);
        }
        this._cdr.markForCheck();
      },
      error: (err) => {
        this.loadingPerson = false;
        this.loadError = err.error ?? err.message ?? "Failed to load person";
        this._cdr.markForCheck();
      }
    });
  }
  handlePersonSelected(id) {
    this.selectedPersonId = id;
    this.loadPersonDetails(id);
  }
  handleSubmit() {
    const id = this.selectedPersonId?.trim();
    if (!id)
      return;
    this.step = "processing";
    this.submitError = null;
    this._cdr.markForCheck();
    this._api.updatePerson(id, {
      name: this.name,
      gender: this.gender,
      date_of_birth: this.dob,
      nationality: this.nationality || void 0,
      notes: this.notes || void 0,
      collections: this.selectedCollectionIds
    }).subscribe({
      next: (data) => {
        this.result = data;
        this.step = "result";
        this._cdr.markForCheck();
      },
      error: (err) => {
        this.submitError = err.error ?? err.message ?? "Request failed";
        this.step = "form";
        this._cdr.markForCheck();
      }
    });
  }
  reset() {
    this.step = "form";
    this.selectedPersonId = null;
    this.name = "";
    this.gender = "M";
    this.dob = "";
    this.nationality = "";
    this.notes = "";
    this.selectedCollectionIds = [];
    this.loadError = null;
    this.submitError = null;
    this.result = null;
  }
  backToDemos() {
    void this._router.navigate(["/smart-enroll/demos"]);
  }
  buildRelatedDocs() {
    return RELATED_DOC_HREFS.map((href, i) => ({
      href,
      title: this._transloco.translate(`smartEnrollDemos.updatePerson.relatedDocs.${i}.title`),
      description: this._transloco.translate(`smartEnrollDemos.updatePerson.relatedDocs.${i}.description`),
      badge: this._transloco.translate(`smartEnrollDemos.updatePerson.relatedDocs.${i}.badge`)
    }));
  }
  static {
    this.\u0275fac = function UpdatePersonDemoComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UpdatePersonDemoComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UpdatePersonDemoComponent, selectors: [["app-update-person-demo"]], decls: 14, vars: 5, consts: [[1, "mb-8"], [1, "text-3xl", "font-black", "tracking-tight", "text-on-surface", "mb-2"], [1, "text-on-surface-variant"], [1, "h-60", "rounded-xl", "bg-surface-container-high", "animate-pulse"], [1, "space-y-5"], [1, "flex", "flex-col", "items-center", "justify-center", "py-20", "gap-4"], ["mode", "update", 3, "result"], [1, "mt-10", "rounded-xl", "border", "border-outline-variant/20", "bg-surface-container-low/50", "text-left", "max-w-3xl", "mx-auto", "w-full", "px-4", "py-3", "group"], [3, "items"], [1, "space-y-5", 3, "ngSubmit"], [1, "rounded-xl", "border", "border-outline-variant/20", "bg-surface-container-low/50", "p-4", "space-y-3"], ["id", "up-person-label", 1, "block", "text-sm", "font-semibold", "text-on-surface"], [1, "text-error"], [1, "text-xs", "text-on-surface-variant"], ["labelId", "up-person-label", 3, "selectedIdChange", "items", "selectedId", "loading", "error"], [1, "text-sm", "text-on-surface-variant", "flex", "items-center", "gap-2"], [1, "text-sm", "text-error", "flex", "items-center", "gap-1"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "gap-5"], ["for", "up-name", 1, "block", "text-sm", "font-semibold", "text-on-surface", "mb-1.5"], ["id", "up-name", "type", "text", "required", "", "name", "name", 1, "w-full", "bg-surface-container-low", "border", "border-outline-variant/30", "rounded-lg", "px-4", "py-3", "text-on-surface", "text-sm", "focus:outline-none", "focus:border-primary/60", 3, "ngModelChange", "ngModel"], ["for", "up-gender", 1, "block", "text-sm", "font-semibold", "text-on-surface", "mb-1.5"], ["id", "up-gender", "name", "gender", 1, "w-full", "bg-surface-container-low", "border", "border-outline-variant/30", "rounded-lg", "px-4", "py-3", "text-on-surface", "text-sm", "focus:outline-none", "focus:border-primary/60", 3, "ngModelChange", "ngModel"], ["value", "M"], ["value", "F"], ["for", "up-dob", 1, "block", "text-sm", "font-semibold", "text-on-surface", "mb-1.5"], ["id", "up-dob", "type", "date", "required", "", "name", "dob", 1, "w-full", "bg-surface-container-low", "border", "border-outline-variant/30", "rounded-lg", "px-4", "py-3", "text-on-surface", "text-sm", "focus:outline-none", "focus:border-primary/60", 3, "ngModelChange", "ngModel"], ["for", "up-nationality", 1, "block", "text-sm", "font-semibold", "text-on-surface", "mb-1.5"], ["id", "up-nationality", "type", "text", "name", "nationality", 1, "w-full", "bg-surface-container-low", "border", "border-outline-variant/30", "rounded-lg", "px-4", "py-3", "text-on-surface", "text-sm", "focus:outline-none", "focus:border-primary/60", 3, "ngModelChange", "ngModel", "placeholder"], ["for", "up-notes", 1, "block", "text-sm", "font-semibold", "text-on-surface", "mb-1.5"], ["id", "up-notes", "name", "notes", "rows", "3", 1, "w-full", "bg-surface-container-low", "border", "border-outline-variant/30", "rounded-lg", "px-4", "py-3", "text-on-surface", "text-sm", "focus:outline-none", "focus:border-primary/60", 3, "ngModelChange", "ngModel"], ["id", "up-col-label", 1, "block", "text-sm", "font-semibold", "text-on-surface", "mb-1.5"], [1, "mb-2", "text-sm", "text-error", "flex", "items-center", "gap-1.5"], ["labelId", "up-col-label", 3, "selectedIdsChange", "items", "selectedIds", "loading", "emptySlot"], [1, "px-4", "py-3", "bg-error-container/20", "border", "border-error/20", "rounded-lg", "flex", "items-center", "gap-2", "text-sm", "text-error"], ["type", "submit", 1, "demo-btn-primary", 3, "disabled"], [1, "inline-block", "h-4", "w-4", "border-2", "border-primary", "border-t-transparent", "rounded-full", "animate-spin"], [1, "material-symbols-outlined", "text-sm"], [1, "w-12", "h-12", "border-2", "border-primary", "border-t-transparent", "rounded-full", "animate-spin"], [1, "text-on-surface", "font-semibold"], ["mode", "update", 3, "enrollAnother", "backToDemos", "result"], [1, "cursor-pointer", "list-none", "font-bold", "text-sm", "text-primary", "flex", "items-center", "justify-between", "gap-2"], [1, "flex", "items-center", "gap-2"], [1, "material-symbols-outlined", "text-lg"], [1, "material-symbols-outlined", "text-on-surface-variant/70", "group-open:rotate-180", "transition-transform"], [1, "mt-4", "space-y-3", "text-sm", "text-on-surface-variant", "border-t", "border-outline-variant/15", "pt-4"], ["href", "https://docs.verifik.co/resources/persons/update-a-person", "target", "_blank", "rel", "noopener noreferrer", 1, "text-primary", "underline", "underline-offset-2"], [1, "text-xs", "leading-relaxed"]], template: function UpdatePersonDemoComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-demo-page-shell")(1, "div", 0)(2, "h2", 1);
        \u0275\u0275template(3, UpdatePersonDemoComponent_Conditional_3_Template, 2, 3)(4, UpdatePersonDemoComponent_Conditional_4_Template, 2, 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 2);
        \u0275\u0275template(6, UpdatePersonDemoComponent_Conditional_6_Template, 2, 3)(7, UpdatePersonDemoComponent_Conditional_7_Template, 2, 3);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(8, UpdatePersonDemoComponent_Conditional_8_Template, 1, 0, "div", 3)(9, UpdatePersonDemoComponent_Conditional_9_Template, 70, 69, "form", 4)(10, UpdatePersonDemoComponent_Conditional_10_Template, 5, 3, "div", 5)(11, UpdatePersonDemoComponent_Conditional_11_Template, 1, 1, "app-create-person-result", 6)(12, UpdatePersonDemoComponent_Conditional_12_Template, 19, 12, "details", 7);
        \u0275\u0275element(13, "app-demo-related-docs-section", 8);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.step === "result" ? 3 : 4);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.step === "result" ? 6 : 7);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.authChecked ? 8 : ctx.step === "form" ? 9 : ctx.step === "processing" ? 10 : 11);
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.showApiReference ? 12 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("items", ctx.relatedDocs);
      }
    }, dependencies: [
      CommonModule,
      FormsModule,
      \u0275NgNoValidate,
      NgSelectOption,
      \u0275NgSelectMultipleOption,
      DefaultValueAccessor,
      SelectControlValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      RequiredValidator,
      NgModel,
      NgForm,
      TranslocoModule,
      TranslocoPipe,
      DemoPageShellComponent,
      DemoRelatedDocsSectionComponent,
      CollectionMultiSelectComponent,
      CreatePersonResultComponent,
      PersonSingleSelectComponent
    ], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UpdatePersonDemoComponent, [{
    type: Component,
    args: [{ selector: "app-update-person-demo", standalone: true, imports: [
      CommonModule,
      FormsModule,
      TranslocoModule,
      DemoPageShellComponent,
      DemoRelatedDocsSectionComponent,
      CollectionMultiSelectComponent,
      CreatePersonResultComponent,
      PersonSingleSelectComponent
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `<app-demo-page-shell>\r
    <div class="mb-8">\r
        <h2 class="text-3xl font-black tracking-tight text-on-surface mb-2">\r
            @if (step === 'result') {\r
                {{ 'smartEnrollDemos.updatePerson.heroTitleResult' | transloco }}\r
            } @else {\r
                {{ 'smartEnrollDemos.updatePerson.heroTitleForm' | transloco }}\r
            }\r
        </h2>\r
        <p class="text-on-surface-variant">\r
            @if (step === 'result') {\r
                {{ 'smartEnrollDemos.updatePerson.heroSubtitleResult' | transloco }}\r
            } @else {\r
                {{ 'smartEnrollDemos.updatePerson.heroSubtitleForm' | transloco }}\r
            }\r
        </p>\r
    </div>\r
\r
    @if (!authChecked) {\r
        <div class="h-60 rounded-xl bg-surface-container-high animate-pulse"></div>\r
    } @else if (step === 'form') {\r
        <form (ngSubmit)="handleSubmit()" class="space-y-5">\r
            <div class="rounded-xl border border-outline-variant/20 bg-surface-container-low/50 p-4 space-y-3">\r
                <label class="block text-sm font-semibold text-on-surface" id="up-person-label">\r
                    {{ 'smartEnrollDemos.updatePerson.personLabel' | transloco }}\r
                    <span class="text-error">{{ 'smartEnrollDemos.common.requiredStar' | transloco }}</span>\r
                </label>\r
                <p class="text-xs text-on-surface-variant">{{ 'smartEnrollDemos.updatePerson.personHint' | transloco }}</p>\r
                <app-person-single-select\r
                    labelId="up-person-label"\r
                    [items]="personRows"\r
                    [selectedId]="selectedPersonId"\r
                    (selectedIdChange)="handlePersonSelected($event)"\r
                    [loading]="personsLoading"\r
                    [error]="personsError"\r
                />\r
                @if (loadingPerson) {\r
                    <p class="text-sm text-on-surface-variant flex items-center gap-2">\r
                        <span class="inline-block h-4 w-4 border-2 border-primary border-t-transparent rounded-full animate-spin"></span>\r
                        {{ 'smartEnrollDemos.updatePerson.loadingProfile' | transloco }}\r
                    </p>\r
                }\r
                @if (loadError) {\r
                    <p class="text-sm text-error flex items-center gap-1">\r
                        <span class="material-symbols-outlined text-sm">error_outline</span>\r
                        {{ loadError }}\r
                    </p>\r
                }\r
            </div>\r
\r
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">\r
                <div>\r
                    <label class="block text-sm font-semibold text-on-surface mb-1.5" for="up-name">\r
                        {{ 'smartEnrollDemos.updatePerson.fullNameLabel' | transloco }}\r
                        <span class="text-error">{{ 'smartEnrollDemos.common.requiredStar' | transloco }}</span>\r
                    </label>\r
                    <input\r
                        id="up-name"\r
                        type="text"\r
                        required\r
                        [(ngModel)]="name"\r
                        name="name"\r
                        class="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg px-4 py-3 text-on-surface text-sm focus:outline-none focus:border-primary/60"\r
                    />\r
                </div>\r
                <div>\r
                    <label class="block text-sm font-semibold text-on-surface mb-1.5" for="up-gender">\r
                        {{ 'smartEnrollDemos.updatePerson.genderLabel' | transloco }}\r
                        <span class="text-error">{{ 'smartEnrollDemos.common.requiredStar' | transloco }}</span>\r
                    </label>\r
                    <select\r
                        id="up-gender"\r
                        [(ngModel)]="gender"\r
                        name="gender"\r
                        class="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg px-4 py-3 text-on-surface text-sm focus:outline-none focus:border-primary/60"\r
                    >\r
                        <option value="M">{{ 'smartEnrollDemos.common.male' | transloco }}</option>\r
                        <option value="F">{{ 'smartEnrollDemos.common.female' | transloco }}</option>\r
                    </select>\r
                </div>\r
            </div>\r
\r
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">\r
                <div>\r
                    <label class="block text-sm font-semibold text-on-surface mb-1.5" for="up-dob">\r
                        {{ 'smartEnrollDemos.updatePerson.dobLabel' | transloco }}\r
                        <span class="text-error">{{ 'smartEnrollDemos.common.requiredStar' | transloco }}</span>\r
                    </label>\r
                    <input\r
                        id="up-dob"\r
                        type="date"\r
                        required\r
                        [(ngModel)]="dob"\r
                        name="dob"\r
                        class="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg px-4 py-3 text-on-surface text-sm focus:outline-none focus:border-primary/60"\r
                    />\r
                </div>\r
                <div>\r
                    <label class="block text-sm font-semibold text-on-surface mb-1.5" for="up-nationality">\r
                        {{ 'smartEnrollDemos.updatePerson.nationalityLabel' | transloco }}\r
                    </label>\r
                    <input\r
                        id="up-nationality"\r
                        type="text"\r
                        [(ngModel)]="nationality"\r
                        name="nationality"\r
                        [placeholder]="'smartEnrollDemos.updatePerson.nationalityPlaceholder' | transloco"\r
                        class="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg px-4 py-3 text-on-surface text-sm focus:outline-none focus:border-primary/60"\r
                    />\r
                </div>\r
            </div>\r
\r
            <div>\r
                <label class="block text-sm font-semibold text-on-surface mb-1.5" for="up-notes">\r
                    {{ 'smartEnrollDemos.updatePerson.notesLabel' | transloco }}\r
                </label>\r
                <textarea\r
                    id="up-notes"\r
                    [(ngModel)]="notes"\r
                    name="notes"\r
                    rows="3"\r
                    class="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg px-4 py-3 text-on-surface text-sm focus:outline-none focus:border-primary/60"\r
                ></textarea>\r
            </div>\r
\r
            <div>\r
                <label class="block text-sm font-semibold text-on-surface mb-1.5" id="up-col-label">\r
                    {{ 'smartEnrollDemos.updatePerson.collectionsLabel' | transloco }}\r
                    <span class="text-error">{{ 'smartEnrollDemos.common.requiredStar' | transloco }}</span>\r
                </label>\r
                @if (collectionsError) {\r
                    <div class="mb-2 text-sm text-error flex items-center gap-1.5">\r
                        <span class="material-symbols-outlined text-sm">error_outline</span>\r
                        {{ collectionsError }}\r
                    </div>\r
                }\r
                <app-collection-multi-select\r
                    labelId="up-col-label"\r
                    [items]="collectionItems"\r
                    [selectedIds]="selectedCollectionIds"\r
                    (selectedIdsChange)="selectedCollectionIds = $event"\r
                    [loading]="collectionsLoading"\r
                    [emptySlot]="noCollectionsLoadedSlot"\r
                />\r
            </div>\r
\r
            @if (submitError) {\r
                <div class="px-4 py-3 bg-error-container/20 border border-error/20 rounded-lg flex items-center gap-2 text-sm text-error">\r
                    <span class="material-symbols-outlined text-sm">error_outline</span>\r
                    {{ submitError }}\r
                </div>\r
            }\r
\r
            <button\r
                type="submit"\r
                [disabled]="!selectedPersonId?.trim() || !selectedCollectionIds.length || collectionsLoading || loadingPerson || personsLoading"\r
                class="demo-btn-primary"\r
            >\r
                {{ 'smartEnrollDemos.updatePerson.saveChanges' | transloco }}\r
            </button>\r
        </form>\r
    } @else if (step === 'processing') {\r
        <div class="flex flex-col items-center justify-center py-20 gap-4">\r
            <div class="w-12 h-12 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>\r
            <p class="text-on-surface font-semibold">{{ 'smartEnrollDemos.updatePerson.processing' | transloco }}</p>\r
        </div>\r
    } @else {\r
        <app-create-person-result\r
            mode="update"\r
            [result]="result"\r
            (enrollAnother)="reset()"\r
            (backToDemos)="backToDemos()"\r
        />\r
    }\r
\r
    @if (showApiReference) {\r
        <details class="mt-10 rounded-xl border border-outline-variant/20 bg-surface-container-low/50 text-left max-w-3xl mx-auto w-full px-4 py-3 group">\r
            <summary class="cursor-pointer list-none font-bold text-sm text-primary flex items-center justify-between gap-2">\r
                <span class="flex items-center gap-2">\r
                    <span class="material-symbols-outlined text-lg">menu_book</span>\r
                    {{ 'smartEnrollDemos.updatePerson.apiRefSummary' | transloco }}\r
                </span>\r
                <span class="material-symbols-outlined text-on-surface-variant/70 group-open:rotate-180 transition-transform">\r
                    expand_more\r
                </span>\r
            </summary>\r
            <div class="mt-4 space-y-3 text-sm text-on-surface-variant border-t border-outline-variant/15 pt-4">\r
                <p>\r
                    {{ 'smartEnrollDemos.updatePerson.apiRefOfficialDocs' | transloco }}\r
                    <a\r
                        href="https://docs.verifik.co/resources/persons/update-a-person"\r
                        target="_blank"\r
                        rel="noopener noreferrer"\r
                        class="text-primary underline underline-offset-2"\r
                    >\r
                        {{ 'smartEnrollDemos.updatePerson.apiRefLinkLabel' | transloco }}\r
                    </a>\r
                </p>\r
                <p class="text-xs leading-relaxed">{{ 'smartEnrollDemos.updatePerson.apiRefBody' | transloco }}</p>\r
            </div>\r
        </details>\r
    }\r
\r
    <app-demo-related-docs-section [items]="relatedDocs" />\r
</app-demo-page-shell>\r
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UpdatePersonDemoComponent, { className: "UpdatePersonDemoComponent", filePath: "src/app/modules/smart-enroll/demos/pages/update-person/update-person-demo.component.ts", lineNumber: 62 });
})();
export {
  UpdatePersonDemoComponent
};
//# sourceMappingURL=chunk-I5NEUDE3.js.map
