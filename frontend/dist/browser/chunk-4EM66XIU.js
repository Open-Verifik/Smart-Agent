import {
  DemoResultActionsComponent
} from "./chunk-VY7PIZXV.js";
import {
  DemoRelatedDocsSectionComponent
} from "./chunk-PBSKPAJ2.js";
import {
  BiometricsDemoApiService,
  DemoPageShellComponent,
  DemoStageCardComponent,
  DemoStageHeroComponent
} from "./chunk-6YAJI7WI.js";
import "./chunk-B4YUVLJ7.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  RequiredValidator,
  ɵNgNoValidate
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
  JsonPipe,
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

// src/app/modules/smart-enroll/demos/pages/create-collection/create-collection-demo.component.ts
function CreateCollectionDemoComponent_Conditional_1_Template(rf, ctx) {
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
    \u0275\u0275property("eyebrow", \u0275\u0275pipeBind1(1, 5, "smartEnrollDemos.demoStage.enroll"))("title", \u0275\u0275pipeBind1(2, 7, "smartEnrollDemos.createCollection.heroTitleForm"))("subtitle", \u0275\u0275pipeBind1(3, 9, "smartEnrollDemos.createCollection.heroSubtitleForm"))("chipLabel", \u0275\u0275pipeBind1(4, 11, "smartEnrollDemos.demoStage.collectionTitle"))("chipValue", ctx_r0.name || \u0275\u0275pipeBind1(5, 13, "smartEnrollDemos.demoStage.notSet"));
  }
}
function CreateCollectionDemoComponent_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "smartEnrollDemos.createCollection.heroTitleResult"), " ");
  }
}
function CreateCollectionDemoComponent_Conditional_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "smartEnrollDemos.createCollection.heroTitleForm"), " ");
  }
}
function CreateCollectionDemoComponent_Conditional_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "smartEnrollDemos.createCollection.heroSubtitleResult"), " ");
  }
}
function CreateCollectionDemoComponent_Conditional_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "smartEnrollDemos.createCollection.heroSubtitleForm"), " ");
  }
}
function CreateCollectionDemoComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "h2", 8);
    \u0275\u0275template(2, CreateCollectionDemoComponent_Conditional_2_Conditional_2_Template, 2, 3)(3, CreateCollectionDemoComponent_Conditional_2_Conditional_3_Template, 2, 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 9);
    \u0275\u0275template(5, CreateCollectionDemoComponent_Conditional_2_Conditional_5_Template, 2, 3)(6, CreateCollectionDemoComponent_Conditional_2_Conditional_6_Template, 2, 3);
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
function CreateCollectionDemoComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 2);
  }
}
function CreateCollectionDemoComponent_Conditional_4_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "span", 19);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.error, " ");
  }
}
function CreateCollectionDemoComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 10);
    \u0275\u0275listener("ngSubmit", function CreateCollectionDemoComponent_Conditional_4_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.handleSubmit());
    });
    \u0275\u0275elementStart(1, "app-demo-stage-card", 11);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementStart(4, "div", 3)(5, "div")(6, "label", 12);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementStart(9, "span", 13);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "input", 14);
    \u0275\u0275pipe(13, "transloco");
    \u0275\u0275twoWayListener("ngModelChange", function CreateCollectionDemoComponent_Conditional_4_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.name, $event) || (ctx_r0.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div")(15, "label", 15);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "textarea", 16);
    \u0275\u0275pipe(19, "transloco");
    \u0275\u0275twoWayListener("ngModelChange", function CreateCollectionDemoComponent_Conditional_4_Template_textarea_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.description, $event) || (ctx_r0.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(20, CreateCollectionDemoComponent_Conditional_4_Conditional_20_Template, 4, 1, "div", 17);
    \u0275\u0275elementStart(21, "button", 18);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("title", \u0275\u0275pipeBind1(2, 11, "smartEnrollDemos.demoStage.collectionTitle"))("help", \u0275\u0275pipeBind1(3, 13, "smartEnrollDemos.demoStage.collectionHelp"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 15, "smartEnrollDemos.createCollection.nameLabel"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 17, "smartEnrollDemos.common.requiredStar"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.name);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(13, 19, "smartEnrollDemos.createCollection.namePlaceholder"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 21, "smartEnrollDemos.createCollection.descLabel"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.description);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(19, 23, "smartEnrollDemos.createCollection.descPlaceholder"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.error ? 20 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(23, 25, "smartEnrollDemos.createCollection.submit"), " ");
  }
}
function CreateCollectionDemoComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "div", 20);
    \u0275\u0275elementStart(2, "p", 21);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "smartEnrollDemos.createCollection.processing"));
  }
}
function CreateCollectionDemoComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 22)(2, "div", 23)(3, "span", 24);
    \u0275\u0275text(4, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 25);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "pre", 26);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "json");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "app-demo-result-actions", 27);
    \u0275\u0275pipe(12, "transloco");
    \u0275\u0275pipe(13, "transloco");
    \u0275\u0275listener("secondary", function CreateCollectionDemoComponent_Conditional_6_Template_app_demo_result_actions_secondary_11_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.reset());
    })("primary", function CreateCollectionDemoComponent_Conditional_6_Template_app_demo_result_actions_primary_11_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.backToDemos());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 5, "smartEnrollDemos.createCollection.successTitle"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 7, ctx_r0.result));
    \u0275\u0275advance(2);
    \u0275\u0275property("secondaryLabel", \u0275\u0275pipeBind1(12, 9, "smartEnrollDemos.createCollection.createAnother"))("primaryLabel", \u0275\u0275pipeBind1(13, 11, "smartEnrollDemos.createCollection.backToDemos"))("primaryRouterLink", null);
  }
}
function CreateCollectionDemoComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "details", 6)(1, "summary", 28)(2, "span", 29)(3, "span", 30);
    \u0275\u0275text(4, "menu_book");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 31);
    \u0275\u0275text(8, " expand_more ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 32)(10, "p");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "transloco");
    \u0275\u0275elementStart(13, "a", 33);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "p", 34);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div")(20, "p", 35);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "p", 34);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 36)(27, "table", 37)(28, "thead")(29, "tr", 38)(30, "th", 39);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "th", 40);
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "tbody")(37, "tr", 41)(38, "td", 42);
    \u0275\u0275text(39, "Content-Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "td", 43);
    \u0275\u0275text(41, "application/json");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "tr")(43, "td", 42);
    \u0275\u0275text(44, "Authorization");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "td", 43);
    \u0275\u0275text(46, "Bearer <token>");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(47, "div", 36)(48, "table", 37)(49, "thead")(50, "tr", 38)(51, "th", 44);
    \u0275\u0275text(52);
    \u0275\u0275pipe(53, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "th", 44);
    \u0275\u0275text(55);
    \u0275\u0275pipe(56, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "th", 45);
    \u0275\u0275text(58);
    \u0275\u0275pipe(59, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(60, "tbody", 9)(61, "tr", 46)(62, "td", 47);
    \u0275\u0275text(63);
    \u0275\u0275pipe(64, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "td");
    \u0275\u0275text(66);
    \u0275\u0275pipe(67, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "td");
    \u0275\u0275text(69);
    \u0275\u0275pipe(70, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(71, "tr", 48)(72, "td", 47);
    \u0275\u0275text(73);
    \u0275\u0275pipe(74, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "td");
    \u0275\u0275text(76);
    \u0275\u0275pipe(77, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "td");
    \u0275\u0275text(79);
    \u0275\u0275pipe(80, "transloco");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(81, "pre", 26);
    \u0275\u0275text(82);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "pre", 26);
    \u0275\u0275text(84);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "ul", 49)(86, "li");
    \u0275\u0275text(87);
    \u0275\u0275pipe(88, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(89, "li");
    \u0275\u0275text(90);
    \u0275\u0275pipe(91, "transloco");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 21, "smartEnrollDemos.createCollection.apiRefSummary"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 23, "smartEnrollDemos.createCollection.apiRefOfficialDocs"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 25, "smartEnrollDemos.createCollection.apiRefLinkLabel"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 27, "smartEnrollDemos.createCollection.apiRefBody"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 29, "smartEnrollDemos.createCollection.apiRefEndpoint"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 31, "smartEnrollDemos.createCollection.apiRefEndpointDesc"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(32, 33, "smartEnrollDemos.common.tableHeader"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(35, 35, "smartEnrollDemos.common.tableValue"));
    \u0275\u0275advance(18);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(53, 37, "smartEnrollDemos.common.tableParam"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(56, 39, "smartEnrollDemos.common.tableReq"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(59, 41, "smartEnrollDemos.common.tableDescription"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(64, 43, "smartEnrollDemos.createCollection.paramName"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(67, 45, "smartEnrollDemos.common.yes"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(70, 47, "smartEnrollDemos.createCollection.paramNameDesc"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(74, 49, "smartEnrollDemos.createCollection.paramDescription"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(77, 51, "smartEnrollDemos.common.no"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(80, 53, "smartEnrollDemos.createCollection.paramDescriptionDesc"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.apiFetchExample);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.apiResponseExample);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(88, 55, "smartEnrollDemos.createCollection.bullet1"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(91, 57, "smartEnrollDemos.createCollection.bullet2"));
  }
}
var DOCS_BASE = "https://docs.verifik.co";
var RELATED_DOC_HREFS = [
  `${DOCS_BASE}/resources/the-collection-object`,
  `${DOCS_BASE}/resources/list-all-collections`,
  `${DOCS_BASE}/resources/retrieve-a-collection`,
  `${DOCS_BASE}/resources/update-a-collection`,
  `${DOCS_BASE}/resources/delete-a-collection`
];
var RELATED_DOC_BADGE_MUTED = [true, false, false, false, false];
var CreateCollectionDemoComponent = class _CreateCollectionDemoComponent {
  constructor() {
    this._api = inject(BiometricsDemoApiService);
    this._router = inject(Router);
    this._transloco = inject(TranslocoService);
    this._cdr = inject(ChangeDetectorRef);
    this.authChecked = false;
    this.step = "form";
    this.name = "";
    this.description = "";
    this.result = null;
    this.error = null;
    this.relatedDocs = [];
    this.apiFetchExample = `await fetch("https://api.verifik.co/v2/face-recognition/collections", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: \`Bearer \${accessToken}\`,
  },
  body: JSON.stringify({
    name: "My collection",
    description: "Optional notes",
  }),
});`;
    this.apiResponseExample = `// 200 OK \u2014 example shape
{
  "data": {
    "_id": "\u2026",
    "code": "\u2026",
    "name": "My collection",
    "description": "Optional notes",
    "client": "\u2026",
    "createdAt": "\u2026",
    "updatedAt": "\u2026",
    "__v": 0
  }
}`;
  }
  ngOnInit() {
    if (!this._api.ensureAuthenticated()) {
      this.authChecked = true;
      return;
    }
    this.authChecked = true;
    this.relatedDocs = this.buildRelatedDocs();
  }
  get showApiReference() {
    return this.step !== "result";
  }
  handleSubmit() {
    if (!this.name.trim())
      return;
    this.step = "processing";
    this.error = null;
    this._cdr.markForCheck();
    this._api.createCollection({
      name: this.name,
      description: this.description || void 0
    }).subscribe({
      next: (data) => {
        this.result = data;
        this.step = "result";
        this._cdr.markForCheck();
      },
      error: (err) => {
        this.error = err.error ?? err.message ?? "Request failed";
        this.step = "form";
        this._cdr.markForCheck();
      }
    });
  }
  reset() {
    this.step = "form";
    this.name = "";
    this.description = "";
    this.result = null;
    this.error = null;
  }
  backToDemos() {
    void this._router.navigate(["/smart-enroll/demos"]);
  }
  buildRelatedDocs() {
    return RELATED_DOC_HREFS.map((href, i) => ({
      href,
      title: this._transloco.translate(`smartEnrollDemos.createCollection.relatedDocs.${i}.title`),
      description: this._transloco.translate(`smartEnrollDemos.createCollection.relatedDocs.${i}.description`),
      badge: this._transloco.translate(`smartEnrollDemos.createCollection.relatedDocs.${i}.badge`),
      badgeMuted: RELATED_DOC_BADGE_MUTED[i]
    }));
  }
  static {
    this.\u0275fac = function CreateCollectionDemoComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CreateCollectionDemoComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CreateCollectionDemoComponent, selectors: [["app-create-collection-demo"]], hostAttrs: [1, "flex", "flex-auto", "min-w-0", "w-full"], decls: 9, vars: 4, consts: [[3, "eyebrow", "title", "subtitle", "chipLabel", "chipValue"], [1, "mb-8"], [1, "h-40", "rounded-xl", "bg-surface-container-high", "animate-pulse"], [1, "space-y-5"], [1, "flex", "flex-col", "items-center", "justify-center", "py-20", "gap-4"], [1, "space-y-4"], [1, "mt-10", "rounded-xl", "border", "border-outline-variant/20", "bg-surface-container-low/50", "text-left", "w-full", "px-4", "py-3", "group"], [3, "items"], [1, "mb-2", "text-3xl", "font-black", "tracking-tight", "text-on-surface"], [1, "text-on-surface-variant"], [1, "space-y-5", 3, "ngSubmit"], ["number", "01", 3, "title", "help"], ["for", "col-name", 1, "block", "text-sm", "font-semibold", "text-on-surface", "mb-1.5"], [1, "text-error"], ["id", "col-name", "type", "text", "required", "", "name", "name", 1, "w-full", "bg-surface-container-low", "border", "border-outline-variant/30", "rounded-lg", "px-4", "py-3", "text-on-surface", "placeholder-on-surface-variant/50", "text-sm", "focus:outline-none", "focus:border-primary/60", "transition-colors", 3, "ngModelChange", "ngModel", "placeholder"], ["for", "col-desc", 1, "block", "text-sm", "font-semibold", "text-on-surface", "mb-1.5"], ["id", "col-desc", "name", "description", "rows", "3", 1, "w-full", "bg-surface-container-low", "border", "border-outline-variant/30", "rounded-lg", "px-4", "py-3", "text-on-surface", "placeholder-on-surface-variant/50", "text-sm", "focus:outline-none", "focus:border-primary/60", "transition-colors", "resize-none", 3, "ngModelChange", "ngModel", "placeholder"], [1, "px-4", "py-3", "bg-error-container/20", "border", "border-error/20", "rounded-lg", "flex", "items-center", "gap-2", "text-sm", "text-error"], ["type", "submit", 1, "demo-btn-primary"], [1, "material-symbols-outlined", "text-sm"], [1, "w-12", "h-12", "border-2", "border-primary", "border-t-transparent", "rounded-full", "animate-spin"], [1, "text-on-surface", "font-semibold"], [1, "rounded-2xl", "bg-surface-container-low", "border", "border-primary/20", "p-6"], [1, "flex", "items-center", "gap-3", "mb-4"], [1, "material-symbols-outlined", "text-primary", "text-2xl"], [1, "font-bold", "text-on-surface"], [1, "text-[0.65rem]", "font-mono", "bg-surface-container-high/80", "rounded-lg", "p-3", "overflow-x-auto", "text-on-surface", "whitespace-pre-wrap"], ["secondaryIcon", "add", 3, "secondary", "primary", "secondaryLabel", "primaryLabel", "primaryRouterLink"], [1, "cursor-pointer", "list-none", "font-bold", "text-sm", "text-primary", "flex", "items-center", "justify-between", "gap-2"], [1, "flex", "items-center", "gap-2"], [1, "material-symbols-outlined", "text-lg"], [1, "material-symbols-outlined", "text-on-surface-variant/70", "group-open:rotate-180", "transition-transform"], [1, "mt-4", "space-y-4", "text-sm", "text-on-surface-variant", "border-t", "border-outline-variant/15", "pt-4"], ["href", "https://docs.verifik.co/resources/create-a-collection/", "target", "_blank", "rel", "noopener noreferrer", 1, "text-primary", "underline", "underline-offset-2"], [1, "text-xs", "leading-relaxed"], [1, "font-mono", "text-xs", "text-on-surface", "mb-1"], [1, "overflow-x-auto"], [1, "w-full", "text-xs", "border-collapse"], [1, "border-b", "border-outline-variant/20"], [1, "text-left", "py-2", "pr-2", "font-semibold", "text-on-surface"], [1, "text-left", "py-2", "font-semibold", "text-on-surface"], [1, "border-b", "border-outline-variant/10"], [1, "py-2", "pr-2", "font-mono"], [1, "font-mono"], [1, "text-left", "py-2", "pr-1"], [1, "text-left", "py-2"], [1, "border-b", "border-outline-variant/10", "align-top"], [1, "py-2", "font-mono", "text-primary"], [1, "align-top"], [1, "list-disc", "pl-5", "space-y-1", "text-xs"]], template: function CreateCollectionDemoComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-demo-page-shell");
        \u0275\u0275template(1, CreateCollectionDemoComponent_Conditional_1_Template, 6, 15, "app-demo-stage-hero", 0)(2, CreateCollectionDemoComponent_Conditional_2_Template, 7, 2, "div", 1)(3, CreateCollectionDemoComponent_Conditional_3_Template, 1, 0, "div", 2)(4, CreateCollectionDemoComponent_Conditional_4_Template, 24, 27, "form", 3)(5, CreateCollectionDemoComponent_Conditional_5_Template, 5, 3, "div", 4)(6, CreateCollectionDemoComponent_Conditional_6_Template, 14, 13, "div", 5)(7, CreateCollectionDemoComponent_Conditional_7_Template, 92, 59, "details", 6);
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
      JsonPipe,
      FormsModule,
      \u0275NgNoValidate,
      DefaultValueAccessor,
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
      DemoResultActionsComponent
    ], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CreateCollectionDemoComponent, [{
    type: Component,
    args: [{ selector: "app-create-collection-demo", standalone: true, imports: [
      CommonModule,
      FormsModule,
      TranslocoModule,
      DemoPageShellComponent,
      DemoStageHeroComponent,
      DemoStageCardComponent,
      DemoRelatedDocsSectionComponent,
      DemoResultActionsComponent
    ], changeDetection: ChangeDetectionStrategy.OnPush, host: {
      class: "flex flex-auto min-w-0 w-full"
    }, template: `<app-demo-page-shell>\r
    @if (step === 'form' && authChecked) {\r
        <app-demo-stage-hero\r
            [eyebrow]="'smartEnrollDemos.demoStage.enroll' | transloco"\r
            [title]="'smartEnrollDemos.createCollection.heroTitleForm' | transloco"\r
            [subtitle]="'smartEnrollDemos.createCollection.heroSubtitleForm' | transloco"\r
            [chipLabel]="'smartEnrollDemos.demoStage.collectionTitle' | transloco"\r
            [chipValue]="name || ('smartEnrollDemos.demoStage.notSet' | transloco)"\r
        />\r
    } @else {\r
        <div class="mb-8">\r
            <h2 class="mb-2 text-3xl font-black tracking-tight text-on-surface">\r
                @if (step === 'result') {\r
                    {{ 'smartEnrollDemos.createCollection.heroTitleResult' | transloco }}\r
                } @else {\r
                    {{ 'smartEnrollDemos.createCollection.heroTitleForm' | transloco }}\r
                }\r
            </h2>\r
            <p class="text-on-surface-variant">\r
                @if (step === 'result') {\r
                    {{ 'smartEnrollDemos.createCollection.heroSubtitleResult' | transloco }}\r
                } @else {\r
                    {{ 'smartEnrollDemos.createCollection.heroSubtitleForm' | transloco }}\r
                }\r
            </p>\r
        </div>\r
    }\r
\r
    @if (!authChecked) {\r
        <div class="h-40 rounded-xl bg-surface-container-high animate-pulse"></div>\r
    } @else if (step === 'form') {\r
        <form (ngSubmit)="handleSubmit()" class="space-y-5">\r
            <app-demo-stage-card\r
                number="01"\r
                [title]="'smartEnrollDemos.demoStage.collectionTitle' | transloco"\r
                [help]="'smartEnrollDemos.demoStage.collectionHelp' | transloco"\r
            >\r
            <div class="space-y-5">\r
            <div>\r
                <label class="block text-sm font-semibold text-on-surface mb-1.5" for="col-name">\r
                    {{ 'smartEnrollDemos.createCollection.nameLabel' | transloco }}\r
                    <span class="text-error">{{ 'smartEnrollDemos.common.requiredStar' | transloco }}</span>\r
                </label>\r
                <input\r
                    id="col-name"\r
                    type="text"\r
                    required\r
                    [(ngModel)]="name"\r
                    name="name"\r
                    [placeholder]="'smartEnrollDemos.createCollection.namePlaceholder' | transloco"\r
                    class="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg px-4 py-3 text-on-surface placeholder-on-surface-variant/50 text-sm focus:outline-none focus:border-primary/60 transition-colors"\r
                />\r
            </div>\r
            <div>\r
                <label class="block text-sm font-semibold text-on-surface mb-1.5" for="col-desc">\r
                    {{ 'smartEnrollDemos.createCollection.descLabel' | transloco }}\r
                </label>\r
                <textarea\r
                    id="col-desc"\r
                    [(ngModel)]="description"\r
                    name="description"\r
                    rows="3"\r
                    [placeholder]="'smartEnrollDemos.createCollection.descPlaceholder' | transloco"\r
                    class="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg px-4 py-3 text-on-surface placeholder-on-surface-variant/50 text-sm focus:outline-none focus:border-primary/60 transition-colors resize-none"\r
                ></textarea>\r
            </div>\r
            </div>\r
            </app-demo-stage-card>\r
            @if (error) {\r
                <div class="px-4 py-3 bg-error-container/20 border border-error/20 rounded-lg flex items-center gap-2 text-sm text-error">\r
                    <span class="material-symbols-outlined text-sm">error_outline</span>\r
                    {{ error }}\r
                </div>\r
            }\r
            <button\r
                type="submit"\r
                class="demo-btn-primary"\r
            >\r
                {{ 'smartEnrollDemos.createCollection.submit' | transloco }}\r
            </button>\r
        </form>\r
    } @else if (step === 'processing') {\r
        <div class="flex flex-col items-center justify-center py-20 gap-4">\r
            <div class="w-12 h-12 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>\r
            <p class="text-on-surface font-semibold">{{ 'smartEnrollDemos.createCollection.processing' | transloco }}</p>\r
        </div>\r
    } @else {\r
        <div class="space-y-4">\r
            <div class="rounded-2xl bg-surface-container-low border border-primary/20 p-6">\r
                <div class="flex items-center gap-3 mb-4">\r
                    <span class="material-symbols-outlined text-primary text-2xl">check_circle</span>\r
                    <p class="font-bold text-on-surface">{{ 'smartEnrollDemos.createCollection.successTitle' | transloco }}</p>\r
                </div>\r
                <pre class="text-[0.65rem] font-mono bg-surface-container-high/80 rounded-lg p-3 overflow-x-auto text-on-surface whitespace-pre-wrap">{{\r
                    result | json\r
                }}</pre>\r
            </div>\r
            <app-demo-result-actions\r
                [secondaryLabel]="'smartEnrollDemos.createCollection.createAnother' | transloco"\r
                secondaryIcon="add"\r
                [primaryLabel]="'smartEnrollDemos.createCollection.backToDemos' | transloco"\r
                [primaryRouterLink]="null"\r
                (secondary)="reset()"\r
                (primary)="backToDemos()"\r
            />\r
        </div>\r
    }\r
\r
    @if (showApiReference) {\r
        <details class="mt-10 rounded-xl border border-outline-variant/20 bg-surface-container-low/50 text-left w-full px-4 py-3 group">\r
            <summary class="cursor-pointer list-none font-bold text-sm text-primary flex items-center justify-between gap-2">\r
                <span class="flex items-center gap-2">\r
                    <span class="material-symbols-outlined text-lg">menu_book</span>\r
                    {{ 'smartEnrollDemos.createCollection.apiRefSummary' | transloco }}\r
                </span>\r
                <span class="material-symbols-outlined text-on-surface-variant/70 group-open:rotate-180 transition-transform">\r
                    expand_more\r
                </span>\r
            </summary>\r
            <div class="mt-4 space-y-4 text-sm text-on-surface-variant border-t border-outline-variant/15 pt-4">\r
                <p>\r
                    {{ 'smartEnrollDemos.createCollection.apiRefOfficialDocs' | transloco }}\r
                    <a\r
                        href="https://docs.verifik.co/resources/create-a-collection/"\r
                        target="_blank"\r
                        rel="noopener noreferrer"\r
                        class="text-primary underline underline-offset-2"\r
                    >\r
                        {{ 'smartEnrollDemos.createCollection.apiRefLinkLabel' | transloco }}\r
                    </a>\r
                </p>\r
                <p class="text-xs leading-relaxed">{{ 'smartEnrollDemos.createCollection.apiRefBody' | transloco }}</p>\r
                <div>\r
                    <p class="font-mono text-xs text-on-surface mb-1">{{ 'smartEnrollDemos.createCollection.apiRefEndpoint' | transloco }}</p>\r
                    <p class="text-xs leading-relaxed">{{ 'smartEnrollDemos.createCollection.apiRefEndpointDesc' | transloco }}</p>\r
                </div>\r
                <div class="overflow-x-auto">\r
                    <table class="w-full text-xs border-collapse">\r
                        <thead>\r
                            <tr class="border-b border-outline-variant/20">\r
                                <th class="text-left py-2 pr-2 font-semibold text-on-surface">{{ 'smartEnrollDemos.common.tableHeader' | transloco }}</th>\r
                                <th class="text-left py-2 font-semibold text-on-surface">{{ 'smartEnrollDemos.common.tableValue' | transloco }}</th>\r
                            </tr>\r
                        </thead>\r
                        <tbody>\r
                            <tr class="border-b border-outline-variant/10">\r
                                <td class="py-2 pr-2 font-mono">Content-Type</td>\r
                                <td class="font-mono">application/json</td>\r
                            </tr>\r
                            <tr>\r
                                <td class="py-2 pr-2 font-mono">Authorization</td>\r
                                <td class="font-mono">Bearer &lt;token&gt;</td>\r
                            </tr>\r
                        </tbody>\r
                    </table>\r
                </div>\r
                <div class="overflow-x-auto">\r
                    <table class="w-full text-xs border-collapse">\r
                        <thead>\r
                            <tr class="border-b border-outline-variant/20">\r
                                <th class="text-left py-2 pr-1">{{ 'smartEnrollDemos.common.tableParam' | transloco }}</th>\r
                                <th class="text-left py-2 pr-1">{{ 'smartEnrollDemos.common.tableReq' | transloco }}</th>\r
                                <th class="text-left py-2">{{ 'smartEnrollDemos.common.tableDescription' | transloco }}</th>\r
                            </tr>\r
                        </thead>\r
                        <tbody class="text-on-surface-variant">\r
                            <tr class="border-b border-outline-variant/10 align-top">\r
                                <td class="py-2 font-mono text-primary">{{ 'smartEnrollDemos.createCollection.paramName' | transloco }}</td>\r
                                <td>{{ 'smartEnrollDemos.common.yes' | transloco }}</td>\r
                                <td>{{ 'smartEnrollDemos.createCollection.paramNameDesc' | transloco }}</td>\r
                            </tr>\r
                            <tr class="align-top">\r
                                <td class="py-2 font-mono text-primary">{{ 'smartEnrollDemos.createCollection.paramDescription' | transloco }}</td>\r
                                <td>{{ 'smartEnrollDemos.common.no' | transloco }}</td>\r
                                <td>{{ 'smartEnrollDemos.createCollection.paramDescriptionDesc' | transloco }}</td>\r
                            </tr>\r
                        </tbody>\r
                    </table>\r
                </div>\r
                <pre class="text-[0.65rem] font-mono bg-surface-container-high/80 rounded-lg p-3 overflow-x-auto text-on-surface whitespace-pre-wrap">{{ apiFetchExample }}</pre>\r
                <pre class="text-[0.65rem] font-mono bg-surface-container-high/80 rounded-lg p-3 overflow-x-auto text-on-surface whitespace-pre-wrap">{{ apiResponseExample }}</pre>\r
                <ul class="list-disc pl-5 space-y-1 text-xs">\r
                    <li>{{ 'smartEnrollDemos.createCollection.bullet1' | transloco }}</li>\r
                    <li>{{ 'smartEnrollDemos.createCollection.bullet2' | transloco }}</li>\r
                </ul>\r
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CreateCollectionDemoComponent, { className: "CreateCollectionDemoComponent", filePath: "src/app/modules/smart-enroll/demos/pages/create-collection/create-collection-demo.component.ts", lineNumber: 54 });
})();
export {
  CreateCollectionDemoComponent
};
//# sourceMappingURL=chunk-4EM66XIU.js.map
