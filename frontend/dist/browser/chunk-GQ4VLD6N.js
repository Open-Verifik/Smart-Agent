import {
  PersonSingleSelectComponent
} from "./chunk-CKSSJAGC.js";
import {
  CreatePersonResultComponent
} from "./chunk-BS57QTVO.js";
import "./chunk-VVQ65S6A.js";
import "./chunk-Q7ZENBRV.js";
import {
  CollectionMultiSelectComponent
} from "./chunk-RIMODHJZ.js";
import "./chunk-VY7PIZXV.js";
import "./chunk-CRJOXNLH.js";
import "./chunk-6KU663MO.js";
import {
  DemoRelatedDocsSectionComponent
} from "./chunk-PBSKPAJ2.js";
import {
  BiometricsDemoApiService,
  DemoPageShellComponent,
  DemoStageCardComponent,
  DemoStageHeroComponent,
  mapPersonDocsToListItems,
  normalizePersonsListPayload
} from "./chunk-6YAJI7WI.js";
import {
  NationalitySelectComponent,
  isCatalogNationality,
  normalizeNationalityCode
} from "./chunk-ZR4RFQ5X.js";
import "./chunk-B4YUVLJ7.js";
import {
  CountryService
} from "./chunk-ENWXGLEW.js";
import "./chunk-JURKDGMK.js";
import "./chunk-DT4JVZCC.js";
import "./chunk-W5MZFF7W.js";
import "./chunk-QUFOCOZK.js";
import "./chunk-5HABGTLH.js";
import "./chunk-PDWCMJ4H.js";
import "./chunk-GX5GK4J6.js";
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
} from "./chunk-JBF67GMG.js";
import {
  TranslocoModule,
  TranslocoPipe,
  TranslocoService
} from "./chunk-FWBWCXY5.js";
import {
  Router
} from "./chunk-QL64NPDU.js";
import "./chunk-3V5B4ZWC.js";
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
} from "./chunk-YWP2Y7QK.js";
import "./chunk-F5M2C4EZ.js";

// src/app/modules/smart-enroll/demos/pages/update-person/update-person-demo.component.ts
function UpdatePersonDemoComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-demo-stage-hero", 0);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275pipe(5, "transloco");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("eyebrow", \u0275\u0275pipeBind1(1, 5, "smartEnrollDemos.demoStage.manage"))("title", \u0275\u0275pipeBind1(2, 7, "smartEnrollDemos.updatePerson.heroTitleForm"))("subtitle", \u0275\u0275pipeBind1(3, 9, "smartEnrollDemos.updatePerson.heroSubtitleForm"))("chipLabel", \u0275\u0275pipeBind1(4, 11, "smartEnrollDemos.demoStage.personTitle"))("chipValue", ctx_r0.name || \u0275\u0275pipeBind1(5, 13, "smartEnrollDemos.demoStage.notSet"));
  }
}
function UpdatePersonDemoComponent_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "smartEnrollDemos.updatePerson.heroTitleResult"), " ");
  }
}
function UpdatePersonDemoComponent_Conditional_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "smartEnrollDemos.updatePerson.heroTitleForm"), " ");
  }
}
function UpdatePersonDemoComponent_Conditional_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "smartEnrollDemos.updatePerson.heroSubtitleResult"), " ");
  }
}
function UpdatePersonDemoComponent_Conditional_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "smartEnrollDemos.updatePerson.heroSubtitleForm"), " ");
  }
}
function UpdatePersonDemoComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "h2", 8);
    \u0275\u0275template(2, UpdatePersonDemoComponent_Conditional_2_Conditional_2_Template, 2, 3)(3, UpdatePersonDemoComponent_Conditional_2_Conditional_3_Template, 2, 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 9);
    \u0275\u0275template(5, UpdatePersonDemoComponent_Conditional_2_Conditional_5_Template, 2, 3)(6, UpdatePersonDemoComponent_Conditional_2_Conditional_6_Template, 2, 3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.step === "result" ? 2 : 3);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.step === "result" ? 5 : 6);
  }
}
function UpdatePersonDemoComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 2);
  }
}
function UpdatePersonDemoComponent_Conditional_4_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 17);
    \u0275\u0275element(1, "span", 39);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "smartEnrollDemos.updatePerson.loadingProfile"), " ");
  }
}
function UpdatePersonDemoComponent_Conditional_4_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 18)(1, "span", 40);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.loadError, " ");
  }
}
function UpdatePersonDemoComponent_Conditional_4_Conditional_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "span", 40);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.collectionsError, " ");
  }
}
function UpdatePersonDemoComponent_Conditional_4_Conditional_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "span", 40);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.submitError, " ");
  }
}
function UpdatePersonDemoComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 10);
    \u0275\u0275listener("ngSubmit", function UpdatePersonDemoComponent_Conditional_4_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.handleSubmit());
    });
    \u0275\u0275elementStart(1, "app-demo-stage-card", 11);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementStart(4, "div", 12)(5, "label", 13);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementStart(8, "span", 14);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "p", 15);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "app-person-single-select", 16);
    \u0275\u0275listener("selectedIdChange", function UpdatePersonDemoComponent_Conditional_4_Template_app_person_single_select_selectedIdChange_14_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.handlePersonSelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, UpdatePersonDemoComponent_Conditional_4_Conditional_15_Template, 4, 3, "p", 17)(16, UpdatePersonDemoComponent_Conditional_4_Conditional_16_Template, 4, 1, "p", 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "app-demo-stage-card", 19);
    \u0275\u0275pipe(18, "transloco");
    \u0275\u0275pipe(19, "transloco");
    \u0275\u0275elementStart(20, "div", 20)(21, "div", 21)(22, "div")(23, "label", 22);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "transloco");
    \u0275\u0275elementStart(26, "span", 14);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "input", 23);
    \u0275\u0275twoWayListener("ngModelChange", function UpdatePersonDemoComponent_Conditional_4_Template_input_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.name, $event) || (ctx_r0.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div")(31, "label", 24);
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "transloco");
    \u0275\u0275elementStart(34, "span", 14);
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "select", 25);
    \u0275\u0275twoWayListener("ngModelChange", function UpdatePersonDemoComponent_Conditional_4_Template_select_ngModelChange_37_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.gender, $event) || (ctx_r0.gender = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(38, "option", 26);
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "option", 27);
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "transloco");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(44, "div", 21)(45, "div")(46, "label", 28);
    \u0275\u0275text(47);
    \u0275\u0275pipe(48, "transloco");
    \u0275\u0275elementStart(49, "span", 14);
    \u0275\u0275text(50);
    \u0275\u0275pipe(51, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "input", 29);
    \u0275\u0275twoWayListener("ngModelChange", function UpdatePersonDemoComponent_Conditional_4_Template_input_ngModelChange_52_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.dob, $event) || (ctx_r0.dob = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "div")(54, "label", 30);
    \u0275\u0275text(55);
    \u0275\u0275pipe(56, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "app-nationality-select", 31);
    \u0275\u0275twoWayListener("ngModelChange", function UpdatePersonDemoComponent_Conditional_4_Template_app_nationality_select_ngModelChange_57_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.nationality, $event) || (ctx_r0.nationality = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(58, "div")(59, "label", 32);
    \u0275\u0275text(60);
    \u0275\u0275pipe(61, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "textarea", 33);
    \u0275\u0275twoWayListener("ngModelChange", function UpdatePersonDemoComponent_Conditional_4_Template_textarea_ngModelChange_62_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.notes, $event) || (ctx_r0.notes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "div")(64, "label", 34);
    \u0275\u0275text(65);
    \u0275\u0275pipe(66, "transloco");
    \u0275\u0275elementStart(67, "span", 14);
    \u0275\u0275text(68);
    \u0275\u0275pipe(69, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(70, UpdatePersonDemoComponent_Conditional_4_Conditional_70_Template, 4, 1, "div", 35);
    \u0275\u0275elementStart(71, "app-collection-multi-select", 36);
    \u0275\u0275listener("selectedIdsChange", function UpdatePersonDemoComponent_Conditional_4_Template_app_collection_multi_select_selectedIdsChange_71_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.selectedCollectionIds = $event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(72, UpdatePersonDemoComponent_Conditional_4_Conditional_72_Template, 4, 1, "div", 37);
    \u0275\u0275elementStart(73, "button", 38);
    \u0275\u0275text(74);
    \u0275\u0275pipe(75, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("title", \u0275\u0275pipeBind1(2, 38, "smartEnrollDemos.demoStage.personTitle"))("help", \u0275\u0275pipeBind1(3, 40, "smartEnrollDemos.demoStage.personHelp"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 42, "smartEnrollDemos.updatePerson.personLabel"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 44, "smartEnrollDemos.common.requiredStar"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 46, "smartEnrollDemos.updatePerson.personHint"));
    \u0275\u0275advance(2);
    \u0275\u0275property("items", ctx_r0.personRows)("selectedId", ctx_r0.selectedPersonId)("loading", ctx_r0.personsLoading)("error", ctx_r0.personsError);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.loadingPerson ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.loadError ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("title", \u0275\u0275pipeBind1(18, 48, "smartEnrollDemos.demoStage.profileTitle"))("help", \u0275\u0275pipeBind1(19, 50, "smartEnrollDemos.demoStage.profileHelp"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(25, 52, "smartEnrollDemos.updatePerson.fullNameLabel"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(28, 54, "smartEnrollDemos.common.requiredStar"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(33, 56, "smartEnrollDemos.updatePerson.genderLabel"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(36, 58, "smartEnrollDemos.common.requiredStar"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.gender);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(40, 60, "smartEnrollDemos.common.male"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(43, 62, "smartEnrollDemos.common.female"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(48, 64, "smartEnrollDemos.updatePerson.dobLabel"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(51, 66, "smartEnrollDemos.common.requiredStar"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.dob);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(56, 68, "smartEnrollDemos.updatePerson.nationalityLabel"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.nationality);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(61, 70, "smartEnrollDemos.updatePerson.notesLabel"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.notes);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(66, 72, "smartEnrollDemos.updatePerson.collectionsLabel"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(69, 74, "smartEnrollDemos.common.requiredStar"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.collectionsError ? 70 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("items", ctx_r0.collectionItems)("selectedIds", ctx_r0.selectedCollectionIds)("loading", ctx_r0.collectionsLoading)("emptySlot", ctx_r0.noCollectionsLoadedSlot);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.submitError ? 72 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !(ctx_r0.selectedPersonId == null ? null : ctx_r0.selectedPersonId.trim()) || !ctx_r0.selectedCollectionIds.length || ctx_r0.collectionsLoading || ctx_r0.loadingPerson || ctx_r0.personsLoading || ctx_r0.nationalityBlocked);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(75, 76, "smartEnrollDemos.updatePerson.saveChanges"), " ");
  }
}
function UpdatePersonDemoComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "div", 41);
    \u0275\u0275elementStart(2, "p", 42);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "smartEnrollDemos.updatePerson.processing"));
  }
}
function UpdatePersonDemoComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-create-person-result", 43);
    \u0275\u0275listener("enrollAnother", function UpdatePersonDemoComponent_Conditional_6_Template_app_create_person_result_enrollAnother_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.reset());
    })("backToDemos", function UpdatePersonDemoComponent_Conditional_6_Template_app_create_person_result_backToDemos_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.backToDemos());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("result", ctx_r0.result);
  }
}
function UpdatePersonDemoComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "details", 6)(1, "summary", 44)(2, "span", 45)(3, "span", 46);
    \u0275\u0275text(4, "menu_book");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 47);
    \u0275\u0275text(8, " expand_more ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 48)(10, "p");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "transloco");
    \u0275\u0275elementStart(13, "a", 49);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "p", 50);
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
    this._countries = inject(CountryService);
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
  get nationalityBlocked() {
    return !isCatalogNationality(this.nationality, this._countries.countries);
  }
  handleSubmit() {
    const id = this.selectedPersonId?.trim();
    if (!id || this.nationalityBlocked)
      return;
    this.step = "processing";
    this.submitError = null;
    this._cdr.markForCheck();
    this._api.updatePerson(id, {
      name: this.name,
      gender: this.gender,
      date_of_birth: this.dob,
      nationality: normalizeNationalityCode(this.nationality) || void 0,
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UpdatePersonDemoComponent, selectors: [["app-update-person-demo"]], decls: 9, vars: 4, consts: [[3, "eyebrow", "title", "subtitle", "chipLabel", "chipValue"], [1, "mb-8"], [1, "h-60", "rounded-xl", "bg-surface-container-high", "animate-pulse"], [1, "grid", "grid-cols-1", "items-start", "gap-5", "xl:grid-cols-2"], [1, "flex", "flex-col", "items-center", "justify-center", "py-20", "gap-4"], ["mode", "update", 3, "result"], [1, "mt-10", "rounded-xl", "border", "border-outline-variant/20", "bg-surface-container-low/50", "text-left", "max-w-3xl", "mx-auto", "w-full", "px-4", "py-3", "group"], [3, "items"], [1, "mb-2", "text-3xl", "font-black", "tracking-tight", "text-on-surface"], [1, "text-on-surface-variant"], [1, "grid", "grid-cols-1", "items-start", "gap-5", "xl:grid-cols-2", 3, "ngSubmit"], ["number", "01", 3, "title", "help"], [1, "space-y-3"], ["id", "up-person-label", 1, "block", "text-sm", "font-semibold", "text-on-surface"], [1, "text-error"], [1, "text-xs", "text-on-surface-variant"], ["labelId", "up-person-label", 3, "selectedIdChange", "items", "selectedId", "loading", "error"], [1, "text-sm", "text-on-surface-variant", "flex", "items-center", "gap-2"], [1, "text-sm", "text-error", "flex", "items-center", "gap-1"], ["number", "02", 3, "title", "help"], [1, "space-y-5"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "gap-5"], ["for", "up-name", 1, "block", "text-sm", "font-semibold", "text-on-surface", "mb-1.5"], ["id", "up-name", "type", "text", "required", "", "name", "name", 1, "w-full", "bg-surface-container-low", "border", "border-outline-variant/30", "rounded-lg", "px-4", "py-3", "text-on-surface", "text-sm", "focus:outline-none", "focus:border-primary/60", 3, "ngModelChange", "ngModel"], ["for", "up-gender", 1, "block", "text-sm", "font-semibold", "text-on-surface", "mb-1.5"], ["id", "up-gender", "name", "gender", 1, "w-full", "bg-surface-container-low", "border", "border-outline-variant/30", "rounded-lg", "px-4", "py-3", "text-on-surface", "text-sm", "focus:outline-none", "focus:border-primary/60", 3, "ngModelChange", "ngModel"], ["value", "M"], ["value", "F"], ["for", "up-dob", 1, "block", "text-sm", "font-semibold", "text-on-surface", "mb-1.5"], ["id", "up-dob", "type", "date", "required", "", "name", "dob", 1, "w-full", "bg-surface-container-low", "border", "border-outline-variant/30", "rounded-lg", "px-4", "py-3", "text-on-surface", "text-sm", "focus:outline-none", "focus:border-primary/60", 3, "ngModelChange", "ngModel"], ["for", "up-nationality", 1, "block", "text-sm", "font-semibold", "text-on-surface", "mb-1.5"], ["inputId", "up-nationality", "name", "nationality", 3, "ngModelChange", "ngModel"], ["for", "up-notes", 1, "block", "text-sm", "font-semibold", "text-on-surface", "mb-1.5"], ["id", "up-notes", "name", "notes", "rows", "3", 1, "w-full", "bg-surface-container-low", "border", "border-outline-variant/30", "rounded-lg", "px-4", "py-3", "text-on-surface", "text-sm", "focus:outline-none", "focus:border-primary/60", 3, "ngModelChange", "ngModel"], ["id", "up-col-label", 1, "block", "text-sm", "font-semibold", "text-on-surface", "mb-1.5"], [1, "mb-2", "text-sm", "text-error", "flex", "items-center", "gap-1.5"], ["labelId", "up-col-label", 3, "selectedIdsChange", "items", "selectedIds", "loading", "emptySlot"], [1, "px-4", "py-3", "bg-error-container/20", "border", "border-error/20", "rounded-lg", "flex", "items-center", "gap-2", "text-sm", "text-error"], ["type", "submit", 1, "demo-btn-primary", "xl:col-span-2", 3, "disabled"], [1, "inline-block", "h-4", "w-4", "border-2", "border-primary", "border-t-transparent", "rounded-full", "animate-spin"], [1, "material-symbols-outlined", "text-sm"], [1, "w-12", "h-12", "border-2", "border-primary", "border-t-transparent", "rounded-full", "animate-spin"], [1, "text-on-surface", "font-semibold"], ["mode", "update", 3, "enrollAnother", "backToDemos", "result"], [1, "cursor-pointer", "list-none", "font-bold", "text-sm", "text-primary", "flex", "items-center", "justify-between", "gap-2"], [1, "flex", "items-center", "gap-2"], [1, "material-symbols-outlined", "text-lg"], [1, "material-symbols-outlined", "text-on-surface-variant/70", "group-open:rotate-180", "transition-transform"], [1, "mt-4", "space-y-3", "text-sm", "text-on-surface-variant", "border-t", "border-outline-variant/15", "pt-4"], ["href", "https://docs.verifik.co/resources/persons/update-a-person", "target", "_blank", "rel", "noopener noreferrer", 1, "text-primary", "underline", "underline-offset-2"], [1, "text-xs", "leading-relaxed"]], template: function UpdatePersonDemoComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-demo-page-shell");
        \u0275\u0275template(1, UpdatePersonDemoComponent_Conditional_1_Template, 6, 15, "app-demo-stage-hero", 0)(2, UpdatePersonDemoComponent_Conditional_2_Template, 7, 2, "div", 1)(3, UpdatePersonDemoComponent_Conditional_3_Template, 1, 0, "div", 2)(4, UpdatePersonDemoComponent_Conditional_4_Template, 76, 78, "form", 3)(5, UpdatePersonDemoComponent_Conditional_5_Template, 5, 3, "div", 4)(6, UpdatePersonDemoComponent_Conditional_6_Template, 1, 1, "app-create-person-result", 5)(7, UpdatePersonDemoComponent_Conditional_7_Template, 19, 12, "details", 6);
        \u0275\u0275element(8, "app-demo-related-docs-section", 7);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.step === "form" && ctx.authChecked ? 1 : 2);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.authChecked ? 3 : ctx.step === "form" ? 4 : ctx.step === "processing" ? 5 : 6);
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.showApiReference ? 7 : -1);
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
      DemoStageHeroComponent,
      DemoStageCardComponent,
      DemoRelatedDocsSectionComponent,
      CollectionMultiSelectComponent,
      CreatePersonResultComponent,
      PersonSingleSelectComponent,
      NationalitySelectComponent
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
      DemoStageHeroComponent,
      DemoStageCardComponent,
      DemoRelatedDocsSectionComponent,
      CollectionMultiSelectComponent,
      CreatePersonResultComponent,
      PersonSingleSelectComponent,
      NationalitySelectComponent
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `<app-demo-page-shell>\r
    @if (step === 'form' && authChecked) {\r
        <app-demo-stage-hero\r
            [eyebrow]="'smartEnrollDemos.demoStage.manage' | transloco"\r
            [title]="'smartEnrollDemos.updatePerson.heroTitleForm' | transloco"\r
            [subtitle]="'smartEnrollDemos.updatePerson.heroSubtitleForm' | transloco"\r
            [chipLabel]="'smartEnrollDemos.demoStage.personTitle' | transloco"\r
            [chipValue]="name || ('smartEnrollDemos.demoStage.notSet' | transloco)"\r
        />\r
    } @else {\r
        <div class="mb-8">\r
            <h2 class="mb-2 text-3xl font-black tracking-tight text-on-surface">\r
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
    }\r
\r
    @if (!authChecked) {\r
        <div class="h-60 rounded-xl bg-surface-container-high animate-pulse"></div>\r
    } @else if (step === 'form') {\r
        <form (ngSubmit)="handleSubmit()" class="grid grid-cols-1 items-start gap-5 xl:grid-cols-2">\r
            <app-demo-stage-card\r
                number="01"\r
                [title]="'smartEnrollDemos.demoStage.personTitle' | transloco"\r
                [help]="'smartEnrollDemos.demoStage.personHelp' | transloco"\r
            >\r
            <div class="space-y-3">\r
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
            </app-demo-stage-card>\r
\r
            <app-demo-stage-card\r
                number="02"\r
                [title]="'smartEnrollDemos.demoStage.profileTitle' | transloco"\r
                [help]="'smartEnrollDemos.demoStage.profileHelp' | transloco"\r
            >\r
            <div class="space-y-5">\r
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
                    <app-nationality-select inputId="up-nationality" name="nationality" [(ngModel)]="nationality" />\r
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
            </div>\r
            </app-demo-stage-card>\r
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
                [disabled]="!selectedPersonId?.trim() || !selectedCollectionIds.length || collectionsLoading || loadingPerson || personsLoading || nationalityBlocked"\r
                class="demo-btn-primary xl:col-span-2"\r
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UpdatePersonDemoComponent, { className: "UpdatePersonDemoComponent", filePath: "src/app/modules/smart-enroll/demos/pages/update-person/update-person-demo.component.ts", lineNumber: 73 });
})();
export {
  UpdatePersonDemoComponent
};
//# sourceMappingURL=chunk-GQ4VLD6N.js.map
